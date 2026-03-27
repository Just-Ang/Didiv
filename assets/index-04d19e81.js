function K_(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();var J=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function v1(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function _t(e){if(e.__esModule)return e;var t=e.default;if(typeof t=="function"){var n=function r(){return this instanceof r?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach(function(r){var i=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(n,r,i.get?i:{enumerable:!0,get:function(){return e[r]}})}),n}var y1={exports:{}},Ql={},x1={exports:{}},ne={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ea=Symbol.for("react.element"),Z_=Symbol.for("react.portal"),Q_=Symbol.for("react.fragment"),J_=Symbol.for("react.strict_mode"),eE=Symbol.for("react.profiler"),tE=Symbol.for("react.provider"),nE=Symbol.for("react.context"),rE=Symbol.for("react.forward_ref"),iE=Symbol.for("react.suspense"),oE=Symbol.for("react.memo"),aE=Symbol.for("react.lazy"),Rm=Symbol.iterator;function sE(e){return e===null||typeof e!="object"?null:(e=Rm&&e[Rm]||e["@@iterator"],typeof e=="function"?e:null)}var b1={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w1=Object.assign,S1={};function Xi(e,t,n){this.props=e,this.context=t,this.refs=S1,this.updater=n||b1}Xi.prototype.isReactComponent={};Xi.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Xi.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function _1(){}_1.prototype=Xi.prototype;function Ip(e,t,n){this.props=e,this.context=t,this.refs=S1,this.updater=n||b1}var jp=Ip.prototype=new _1;jp.constructor=Ip;w1(jp,Xi.prototype);jp.isPureReactComponent=!0;var Lm=Array.isArray,E1=Object.prototype.hasOwnProperty,$p={current:null},C1={key:!0,ref:!0,__self:!0,__source:!0};function k1(e,t,n){var r,i={},o=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(o=""+t.key),t)E1.call(t,r)&&!C1.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var s=Array(l),u=0;u<l;u++)s[u]=arguments[u+2];i.children=s}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Ea,type:e,key:o,ref:a,props:i,_owner:$p.current}}function lE(e,t){return{$$typeof:Ea,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Dp(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ea}function uE(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Am=/\/+/g;function xc(e,t){return typeof e=="object"&&e!==null&&e.key!=null?uE(""+e.key):t.toString(36)}function Es(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case Ea:case Z_:a=!0}}if(a)return a=e,i=i(a),e=r===""?"."+xc(a,0):r,Lm(i)?(n="",e!=null&&(n=e.replace(Am,"$&/")+"/"),Es(i,t,n,"",function(u){return u})):i!=null&&(Dp(i)&&(i=lE(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(Am,"$&/")+"/")+e)),t.push(i)),1;if(a=0,r=r===""?".":r+":",Lm(e))for(var l=0;l<e.length;l++){o=e[l];var s=r+xc(o,l);a+=Es(o,t,n,s,i)}else if(s=sE(e),typeof s=="function")for(e=s.call(e),l=0;!(o=e.next()).done;)o=o.value,s=r+xc(o,l++),a+=Es(o,t,n,s,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function Ua(e,t,n){if(e==null)return e;var r=[],i=0;return Es(e,r,"","",function(o){return t.call(n,o,i++)}),r}function cE(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ct={current:null},Cs={transition:null},dE={ReactCurrentDispatcher:ct,ReactCurrentBatchConfig:Cs,ReactCurrentOwner:$p};ne.Children={map:Ua,forEach:function(e,t,n){Ua(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Ua(e,function(){t++}),t},toArray:function(e){return Ua(e,function(t){return t})||[]},only:function(e){if(!Dp(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};ne.Component=Xi;ne.Fragment=Q_;ne.Profiler=eE;ne.PureComponent=Ip;ne.StrictMode=J_;ne.Suspense=iE;ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=dE;ne.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=w1({},e.props),i=e.key,o=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,a=$p.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in t)E1.call(t,s)&&!C1.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&l!==void 0?l[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){l=Array(s);for(var u=0;u<s;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:Ea,type:e.type,key:i,ref:o,props:r,_owner:a}};ne.createContext=function(e){return e={$$typeof:nE,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:tE,_context:e},e.Consumer=e};ne.createElement=k1;ne.createFactory=function(e){var t=k1.bind(null,e);return t.type=e,t};ne.createRef=function(){return{current:null}};ne.forwardRef=function(e){return{$$typeof:rE,render:e}};ne.isValidElement=Dp;ne.lazy=function(e){return{$$typeof:aE,_payload:{_status:-1,_result:e},_init:cE}};ne.memo=function(e,t){return{$$typeof:oE,type:e,compare:t===void 0?null:t}};ne.startTransition=function(e){var t=Cs.transition;Cs.transition={};try{e()}finally{Cs.transition=t}};ne.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};ne.useCallback=function(e,t){return ct.current.useCallback(e,t)};ne.useContext=function(e){return ct.current.useContext(e)};ne.useDebugValue=function(){};ne.useDeferredValue=function(e){return ct.current.useDeferredValue(e)};ne.useEffect=function(e,t){return ct.current.useEffect(e,t)};ne.useId=function(){return ct.current.useId()};ne.useImperativeHandle=function(e,t,n){return ct.current.useImperativeHandle(e,t,n)};ne.useInsertionEffect=function(e,t){return ct.current.useInsertionEffect(e,t)};ne.useLayoutEffect=function(e,t){return ct.current.useLayoutEffect(e,t)};ne.useMemo=function(e,t){return ct.current.useMemo(e,t)};ne.useReducer=function(e,t,n){return ct.current.useReducer(e,t,n)};ne.useRef=function(e){return ct.current.useRef(e)};ne.useState=function(e){return ct.current.useState(e)};ne.useSyncExternalStore=function(e,t,n){return ct.current.useSyncExternalStore(e,t,n)};ne.useTransition=function(){return ct.current.useTransition()};ne.version="18.2.0";x1.exports=ne;var b=x1.exports;const W=v1(b),Hd=K_({__proto__:null,default:W},[b]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fE=b,pE=Symbol.for("react.element"),hE=Symbol.for("react.fragment"),mE=Object.prototype.hasOwnProperty,gE=fE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,vE={key:!0,ref:!0,__self:!0,__source:!0};function T1(e,t,n){var r,i={},o=null,a=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)mE.call(t,r)&&!vE.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:pE,type:e,key:o,ref:a,props:i,_owner:gE.current}}Ql.Fragment=hE;Ql.jsx=T1;Ql.jsxs=T1;y1.exports=Ql;var y=y1.exports;/**
 * @remix-run/router v1.8.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function qo(){return qo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},qo.apply(this,arguments)}var ar;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(ar||(ar={}));const Fm="popstate";function yE(e){e===void 0&&(e={});function t(r,i){let{pathname:o,search:a,hash:l}=r.location;return Wd("",{pathname:o,search:a,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Qs(i)}return bE(t,n,null,e)}function je(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Rp(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function xE(){return Math.random().toString(36).substr(2,8)}function Nm(e,t){return{usr:e.state,key:e.key,idx:t}}function Wd(e,t,n,r){return n===void 0&&(n=null),qo({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?qi(t):t,{state:n,key:t&&t.key||r||xE()})}function Qs(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function qi(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function bE(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,a=i.history,l=ar.Pop,s=null,u=c();u==null&&(u=0,a.replaceState(qo({},a.state,{idx:u}),""));function c(){return(a.state||{idx:null}).idx}function d(){l=ar.Pop;let S=c(),f=S==null?null:S-u;u=S,s&&s({action:l,location:x.location,delta:f})}function m(S,f){l=ar.Push;let p=Wd(x.location,S,f);n&&n(p,S),u=c()+1;let v=Nm(p,u),w=x.createHref(p);try{a.pushState(v,"",w)}catch(C){if(C instanceof DOMException&&C.name==="DataCloneError")throw C;i.location.assign(w)}o&&s&&s({action:l,location:x.location,delta:1})}function h(S,f){l=ar.Replace;let p=Wd(x.location,S,f);n&&n(p,S),u=c();let v=Nm(p,u),w=x.createHref(p);a.replaceState(v,"",w),o&&s&&s({action:l,location:x.location,delta:0})}function g(S){let f=i.location.origin!=="null"?i.location.origin:i.location.href,p=typeof S=="string"?S:Qs(S);return je(f,"No window.location.(origin|href) available to create URL for href: "+p),new URL(p,f)}let x={get action(){return l},get location(){return e(i,a)},listen(S){if(s)throw new Error("A history only accepts one active listener");return i.addEventListener(Fm,d),s=S,()=>{i.removeEventListener(Fm,d),s=null}},createHref(S){return t(i,S)},createURL:g,encodeLocation(S){let f=g(S);return{pathname:f.pathname,search:f.search,hash:f.hash}},push:m,replace:h,go(S){return a.go(S)}};return x}var zm;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(zm||(zm={}));function wE(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?qi(t):t,i=Lp(r.pathname||"/",n);if(i==null)return null;let o=O1(e);SE(o);let a=null;for(let l=0;a==null&&l<o.length;++l)a=IE(o[l],DE(i));return a}function O1(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,a,l)=>{let s={relativePath:l===void 0?o.path||"":l,caseSensitive:o.caseSensitive===!0,childrenIndex:a,route:o};s.relativePath.startsWith("/")&&(je(s.relativePath.startsWith(r),'Absolute route path "'+s.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),s.relativePath=s.relativePath.slice(r.length));let u=dr([r,s.relativePath]),c=n.concat(s);o.children&&o.children.length>0&&(je(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),O1(o.children,t,c,u)),!(o.path==null&&!o.index)&&t.push({path:u,score:PE(u,o.index),routesMeta:c})};return e.forEach((o,a)=>{var l;if(o.path===""||!((l=o.path)!=null&&l.includes("?")))i(o,a);else for(let s of P1(o.path))i(o,a,s)}),t}function P1(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let a=P1(r.join("/")),l=[];return l.push(...a.map(s=>s===""?o:[o,s].join("/"))),i&&l.push(...a),l.map(s=>e.startsWith("/")&&s===""?"/":s)}function SE(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:ME(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const _E=/^:\w+$/,EE=3,CE=2,kE=1,TE=10,OE=-2,Vm=e=>e==="*";function PE(e,t){let n=e.split("/"),r=n.length;return n.some(Vm)&&(r+=OE),t&&(r+=CE),n.filter(i=>!Vm(i)).reduce((i,o)=>i+(_E.test(o)?EE:o===""?kE:TE),r)}function ME(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function IE(e,t){let{routesMeta:n}=e,r={},i="/",o=[];for(let a=0;a<n.length;++a){let l=n[a],s=a===n.length-1,u=i==="/"?t:t.slice(i.length)||"/",c=jE({path:l.relativePath,caseSensitive:l.caseSensitive,end:s},u);if(!c)return null;Object.assign(r,c.params);let d=l.route;o.push({params:r,pathname:dr([i,c.pathname]),pathnameBase:FE(dr([i,c.pathnameBase])),route:d}),c.pathnameBase!=="/"&&(i=dr([i,c.pathnameBase]))}return o}function jE(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=$E(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],a=o.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((u,c,d)=>{if(c==="*"){let m=l[d]||"";a=o.slice(0,o.length-m.length).replace(/(.)\/+$/,"$1")}return u[c]=RE(l[d]||"",c),u},{}),pathname:o,pathnameBase:a,pattern:e}}function $E(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Rp(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(a,l)=>(r.push(l),"/([^\\/]+)"));return e.endsWith("*")?(r.push("*"),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function DE(e){try{return decodeURI(e)}catch(t){return Rp(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function RE(e,t){try{return decodeURIComponent(e)}catch(n){return Rp(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function Lp(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function LE(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?qi(e):e;return{pathname:n?n.startsWith("/")?n:AE(n,t):t,search:NE(r),hash:zE(i)}}function AE(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function bc(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function M1(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function I1(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=qi(e):(i=qo({},e),je(!i.pathname||!i.pathname.includes("?"),bc("?","pathname","search",i)),je(!i.pathname||!i.pathname.includes("#"),bc("#","pathname","hash",i)),je(!i.search||!i.search.includes("#"),bc("#","search","hash",i)));let o=e===""||i.pathname==="",a=o?"/":i.pathname,l;if(r||a==null)l=n;else{let d=t.length-1;if(a.startsWith("..")){let m=a.split("/");for(;m[0]==="..";)m.shift(),d-=1;i.pathname=m.join("/")}l=d>=0?t[d]:"/"}let s=LE(i,l),u=a&&a!=="/"&&a.endsWith("/"),c=(o||a===".")&&n.endsWith("/");return!s.pathname.endsWith("/")&&(u||c)&&(s.pathname+="/"),s}const dr=e=>e.join("/").replace(/\/\/+/g,"/"),FE=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),NE=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,zE=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function VE(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const j1=["post","put","patch","delete"];new Set(j1);const BE=["get",...j1];new Set(BE);/**
 * React Router v6.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Js(){return Js=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Js.apply(this,arguments)}const Ap=b.createContext(null),UE=b.createContext(null),Ki=b.createContext(null),Jl=b.createContext(null),Xn=b.createContext({outlet:null,matches:[],isDataRoute:!1}),$1=b.createContext(null);function HE(e,t){let{relative:n}=t===void 0?{}:t;Ca()||je(!1);let{basename:r,navigator:i}=b.useContext(Ki),{hash:o,pathname:a,search:l}=L1(e,{relative:n}),s=a;return r!=="/"&&(s=a==="/"?r:dr([r,a])),i.createHref({pathname:s,search:l,hash:o})}function Ca(){return b.useContext(Jl)!=null}function Zi(){return Ca()||je(!1),b.useContext(Jl).location}function D1(e){b.useContext(Ki).static||b.useLayoutEffect(e)}function eu(){let{isDataRoute:e}=b.useContext(Xn);return e?o2():WE()}function WE(){Ca()||je(!1);let e=b.useContext(Ap),{basename:t,navigator:n}=b.useContext(Ki),{matches:r}=b.useContext(Xn),{pathname:i}=Zi(),o=JSON.stringify(M1(r).map(s=>s.pathnameBase)),a=b.useRef(!1);return D1(()=>{a.current=!0}),b.useCallback(function(s,u){if(u===void 0&&(u={}),!a.current)return;if(typeof s=="number"){n.go(s);return}let c=I1(s,JSON.parse(o),i,u.relative==="path");e==null&&t!=="/"&&(c.pathname=c.pathname==="/"?t:dr([t,c.pathname])),(u.replace?n.replace:n.push)(c,u.state,u)},[t,n,o,i,e])}const GE=b.createContext(null);function YE(e){let t=b.useContext(Xn).outlet;return t&&b.createElement(GE.Provider,{value:e},t)}function R1(){let{matches:e}=b.useContext(Xn),t=e[e.length-1];return t?t.params:{}}function L1(e,t){let{relative:n}=t===void 0?{}:t,{matches:r}=b.useContext(Xn),{pathname:i}=Zi(),o=JSON.stringify(M1(r).map(a=>a.pathnameBase));return b.useMemo(()=>I1(e,JSON.parse(o),i,n==="path"),[e,o,i,n])}function XE(e,t){return qE(e,t)}function qE(e,t,n){Ca()||je(!1);let{navigator:r}=b.useContext(Ki),{matches:i}=b.useContext(Xn),o=i[i.length-1],a=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let s=Zi(),u;if(t){var c;let x=typeof t=="string"?qi(t):t;l==="/"||(c=x.pathname)!=null&&c.startsWith(l)||je(!1),u=x}else u=s;let d=u.pathname||"/",m=l==="/"?d:d.slice(l.length)||"/",h=wE(e,{pathname:m}),g=e2(h&&h.map(x=>Object.assign({},x,{params:Object.assign({},a,x.params),pathname:dr([l,r.encodeLocation?r.encodeLocation(x.pathname).pathname:x.pathname]),pathnameBase:x.pathnameBase==="/"?l:dr([l,r.encodeLocation?r.encodeLocation(x.pathnameBase).pathname:x.pathnameBase])})),i,n);return t&&g?b.createElement(Jl.Provider,{value:{location:Js({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:ar.Pop}},g):g}function KE(){let e=i2(),t=VE(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},o=null;return b.createElement(b.Fragment,null,b.createElement("h2",null,"Unexpected Application Error!"),b.createElement("h3",{style:{fontStyle:"italic"}},t),n?b.createElement("pre",{style:i},n):null,o)}const ZE=b.createElement(KE,null);class QE extends b.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error||n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?b.createElement(Xn.Provider,{value:this.props.routeContext},b.createElement($1.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function JE(e){let{routeContext:t,match:n,children:r}=e,i=b.useContext(Ap);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),b.createElement(Xn.Provider,{value:t},r)}function e2(e,t,n){var r;if(t===void 0&&(t=[]),n===void 0&&(n=null),e==null){var i;if((i=n)!=null&&i.errors)e=n.matches;else return null}let o=e,a=(r=n)==null?void 0:r.errors;if(a!=null){let l=o.findIndex(s=>s.route.id&&(a==null?void 0:a[s.route.id]));l>=0||je(!1),o=o.slice(0,Math.min(o.length,l+1))}return o.reduceRight((l,s,u)=>{let c=s.route.id?a==null?void 0:a[s.route.id]:null,d=null;n&&(d=s.route.errorElement||ZE);let m=t.concat(o.slice(0,u+1)),h=()=>{let g;return c?g=d:s.route.Component?g=b.createElement(s.route.Component,null):s.route.element?g=s.route.element:g=l,b.createElement(JE,{match:s,routeContext:{outlet:l,matches:m,isDataRoute:n!=null},children:g})};return n&&(s.route.ErrorBoundary||s.route.errorElement||u===0)?b.createElement(QE,{location:n.location,revalidation:n.revalidation,component:d,error:c,children:h(),routeContext:{outlet:null,matches:m,isDataRoute:!0}}):h()},null)}var A1=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(A1||{}),el=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(el||{});function t2(e){let t=b.useContext(Ap);return t||je(!1),t}function n2(e){let t=b.useContext(UE);return t||je(!1),t}function r2(e){let t=b.useContext(Xn);return t||je(!1),t}function F1(e){let t=r2(),n=t.matches[t.matches.length-1];return n.route.id||je(!1),n.route.id}function i2(){var e;let t=b.useContext($1),n=n2(el.UseRouteError),r=F1(el.UseRouteError);return t||((e=n.errors)==null?void 0:e[r])}function o2(){let{router:e}=t2(A1.UseNavigateStable),t=F1(el.UseNavigateStable),n=b.useRef(!1);return D1(()=>{n.current=!0}),b.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,Js({fromRouteId:t},o)))},[e,t])}function a2(e){return YE(e.context)}function mt(e){je(!1)}function s2(e){let{basename:t="/",children:n=null,location:r,navigationType:i=ar.Pop,navigator:o,static:a=!1}=e;Ca()&&je(!1);let l=t.replace(/^\/*/,"/"),s=b.useMemo(()=>({basename:l,navigator:o,static:a}),[l,o,a]);typeof r=="string"&&(r=qi(r));let{pathname:u="/",search:c="",hash:d="",state:m=null,key:h="default"}=r,g=b.useMemo(()=>{let x=Lp(u,l);return x==null?null:{location:{pathname:x,search:c,hash:d,state:m,key:h},navigationType:i}},[l,u,c,d,m,h,i]);return g==null?null:b.createElement(Ki.Provider,{value:s},b.createElement(Jl.Provider,{children:n,value:g}))}function l2(e){let{children:t,location:n}=e;return XE(Gd(t),n)}new Promise(()=>{});function Gd(e,t){t===void 0&&(t=[]);let n=[];return b.Children.forEach(e,(r,i)=>{if(!b.isValidElement(r))return;let o=[...t,i];if(r.type===b.Fragment){n.push.apply(n,Gd(r.props.children,o));return}r.type!==mt&&je(!1),!r.props.index||!r.props.children||je(!1);let a={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(a.children=Gd(r.props.children,o)),n.push(a)}),n}/**
 * React Router DOM v6.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Yd(){return Yd=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Yd.apply(this,arguments)}function u2(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function c2(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function d2(e,t){return e.button===0&&(!t||t==="_self")&&!c2(e)}const f2=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],p2="startTransition",Bm=Hd[p2];function h2(e){let{basename:t,children:n,future:r,window:i}=e,o=b.useRef();o.current==null&&(o.current=yE({window:i,v5Compat:!0}));let a=o.current,[l,s]=b.useState({action:a.action,location:a.location}),{v7_startTransition:u}=r||{},c=b.useCallback(d=>{u&&Bm?Bm(()=>s(d)):s(d)},[s,u]);return b.useLayoutEffect(()=>a.listen(c),[a,c]),b.createElement(s2,{basename:t,children:n,location:l.location,navigationType:l.action,navigator:a})}const m2=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",g2=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,$e=b.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:o,replace:a,state:l,target:s,to:u,preventScrollReset:c}=t,d=u2(t,f2),{basename:m}=b.useContext(Ki),h,g=!1;if(typeof u=="string"&&g2.test(u)&&(h=u,m2))try{let p=new URL(window.location.href),v=u.startsWith("//")?new URL(p.protocol+u):new URL(u),w=Lp(v.pathname,m);v.origin===p.origin&&w!=null?u=w+v.search+v.hash:g=!0}catch{}let x=HE(u,{relative:i}),S=v2(u,{replace:a,state:l,target:s,preventScrollReset:c,relative:i});function f(p){r&&r(p),p.defaultPrevented||S(p)}return b.createElement("a",Yd({},d,{href:h||x,onClick:g||o?r:f,ref:n,target:s}))});var Um;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher"})(Um||(Um={}));var Hm;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Hm||(Hm={}));function v2(e,t){let{target:n,replace:r,state:i,preventScrollReset:o,relative:a}=t===void 0?{}:t,l=eu(),s=Zi(),u=L1(e,{relative:a});return b.useCallback(c=>{if(d2(c,n)){c.preventDefault();let d=r!==void 0?r:Qs(s)===Qs(u);l(e,{replace:d,state:i,preventScrollReset:o,relative:a})}},[s,l,u,r,i,n,e,o,a])}var Xd={},N1={exports:{}},Rt={},z1={exports:{}},V1={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(O,D){var N=O.length;O.push(D);e:for(;0<N;){var B=N-1>>>1,z=O[B];if(0<i(z,D))O[B]=D,O[N]=z,N=B;else break e}}function n(O){return O.length===0?null:O[0]}function r(O){if(O.length===0)return null;var D=O[0],N=O.pop();if(N!==D){O[0]=N;e:for(var B=0,z=O.length,G=z>>>1;B<G;){var Q=2*(B+1)-1,Z=O[Q],K=Q+1,re=O[K];if(0>i(Z,N))K<z&&0>i(re,Z)?(O[B]=re,O[K]=N,B=K):(O[B]=Z,O[Q]=N,B=Q);else if(K<z&&0>i(re,N))O[B]=re,O[K]=N,B=K;else break e}}return D}function i(O,D){var N=O.sortIndex-D.sortIndex;return N!==0?N:O.id-D.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var a=Date,l=a.now();e.unstable_now=function(){return a.now()-l}}var s=[],u=[],c=1,d=null,m=3,h=!1,g=!1,x=!1,S=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(O){for(var D=n(u);D!==null;){if(D.callback===null)r(u);else if(D.startTime<=O)r(u),D.sortIndex=D.expirationTime,t(s,D);else break;D=n(u)}}function w(O){if(x=!1,v(O),!g)if(n(s)!==null)g=!0,F(C);else{var D=n(u);D!==null&&A(w,D.startTime-O)}}function C(O,D){g=!1,x&&(x=!1,f(E),E=-1),h=!0;var N=m;try{for(v(D),d=n(s);d!==null&&(!(d.expirationTime>D)||O&&!$());){var B=d.callback;if(typeof B=="function"){d.callback=null,m=d.priorityLevel;var z=B(d.expirationTime<=D);D=e.unstable_now(),typeof z=="function"?d.callback=z:d===n(s)&&r(s),v(D)}else r(s);d=n(s)}if(d!==null)var G=!0;else{var Q=n(u);Q!==null&&A(w,Q.startTime-D),G=!1}return G}finally{d=null,m=N,h=!1}}var k=!1,_=null,E=-1,M=5,I=-1;function $(){return!(e.unstable_now()-I<M)}function P(){if(_!==null){var O=e.unstable_now();I=O;var D=!0;try{D=_(!0,O)}finally{D?j():(k=!1,_=null)}}else k=!1}var j;if(typeof p=="function")j=function(){p(P)};else if(typeof MessageChannel<"u"){var L=new MessageChannel,R=L.port2;L.port1.onmessage=P,j=function(){R.postMessage(null)}}else j=function(){S(P,0)};function F(O){_=O,k||(k=!0,j())}function A(O,D){E=S(function(){O(e.unstable_now())},D)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(O){O.callback=null},e.unstable_continueExecution=function(){g||h||(g=!0,F(C))},e.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<O?Math.floor(1e3/O):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(O){switch(m){case 1:case 2:case 3:var D=3;break;default:D=m}var N=m;m=D;try{return O()}finally{m=N}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(O,D){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var N=m;m=O;try{return D()}finally{m=N}},e.unstable_scheduleCallback=function(O,D,N){var B=e.unstable_now();switch(typeof N=="object"&&N!==null?(N=N.delay,N=typeof N=="number"&&0<N?B+N:B):N=B,O){case 1:var z=-1;break;case 2:z=250;break;case 5:z=1073741823;break;case 4:z=1e4;break;default:z=5e3}return z=N+z,O={id:c++,callback:D,priorityLevel:O,startTime:N,expirationTime:z,sortIndex:-1},N>B?(O.sortIndex=N,t(u,O),n(s)===null&&O===n(u)&&(x?(f(E),E=-1):x=!0,A(w,N-B))):(O.sortIndex=z,t(s,O),g||h||(g=!0,F(C))),O},e.unstable_shouldYield=$,e.unstable_wrapCallback=function(O){var D=m;return function(){var N=m;m=D;try{return O.apply(this,arguments)}finally{m=N}}}})(V1);z1.exports=V1;var y2=z1.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var B1=b,$t=y2;function V(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var U1=new Set,Ko={};function Jr(e,t){$i(e,t),$i(e+"Capture",t)}function $i(e,t){for(Ko[e]=t,e=0;e<t.length;e++)U1.add(t[e])}var Vn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),qd=Object.prototype.hasOwnProperty,x2=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Wm={},Gm={};function b2(e){return qd.call(Gm,e)?!0:qd.call(Wm,e)?!1:x2.test(e)?Gm[e]=!0:(Wm[e]=!0,!1)}function w2(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function S2(e,t,n,r){if(t===null||typeof t>"u"||w2(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function dt(e,t,n,r,i,o,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=a}var Xe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Xe[e]=new dt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Xe[t]=new dt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Xe[e]=new dt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Xe[e]=new dt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Xe[e]=new dt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Xe[e]=new dt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Xe[e]=new dt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Xe[e]=new dt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Xe[e]=new dt(e,5,!1,e.toLowerCase(),null,!1,!1)});var Fp=/[\-:]([a-z])/g;function Np(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Fp,Np);Xe[t]=new dt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Fp,Np);Xe[t]=new dt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Fp,Np);Xe[t]=new dt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Xe[e]=new dt(e,1,!1,e.toLowerCase(),null,!1,!1)});Xe.xlinkHref=new dt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Xe[e]=new dt(e,1,!1,e.toLowerCase(),null,!0,!0)});function zp(e,t,n,r){var i=Xe.hasOwnProperty(t)?Xe[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(S2(t,n,i,r)&&(n=null),r||i===null?b2(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var qn=B1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ha=Symbol.for("react.element"),pi=Symbol.for("react.portal"),hi=Symbol.for("react.fragment"),Vp=Symbol.for("react.strict_mode"),Kd=Symbol.for("react.profiler"),H1=Symbol.for("react.provider"),W1=Symbol.for("react.context"),Bp=Symbol.for("react.forward_ref"),Zd=Symbol.for("react.suspense"),Qd=Symbol.for("react.suspense_list"),Up=Symbol.for("react.memo"),nr=Symbol.for("react.lazy"),G1=Symbol.for("react.offscreen"),Ym=Symbol.iterator;function fo(e){return e===null||typeof e!="object"?null:(e=Ym&&e[Ym]||e["@@iterator"],typeof e=="function"?e:null)}var Ee=Object.assign,wc;function To(e){if(wc===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);wc=t&&t[1]||""}return`
`+wc+e}var Sc=!1;function _c(e,t){if(!e||Sc)return"";Sc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),a=i.length-1,l=o.length-1;1<=a&&0<=l&&i[a]!==o[l];)l--;for(;1<=a&&0<=l;a--,l--)if(i[a]!==o[l]){if(a!==1||l!==1)do if(a--,l--,0>l||i[a]!==o[l]){var s=`
`+i[a].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=a&&0<=l);break}}}finally{Sc=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?To(e):""}function _2(e){switch(e.tag){case 5:return To(e.type);case 16:return To("Lazy");case 13:return To("Suspense");case 19:return To("SuspenseList");case 0:case 2:case 15:return e=_c(e.type,!1),e;case 11:return e=_c(e.type.render,!1),e;case 1:return e=_c(e.type,!0),e;default:return""}}function Jd(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case hi:return"Fragment";case pi:return"Portal";case Kd:return"Profiler";case Vp:return"StrictMode";case Zd:return"Suspense";case Qd:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case W1:return(e.displayName||"Context")+".Consumer";case H1:return(e._context.displayName||"Context")+".Provider";case Bp:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Up:return t=e.displayName||null,t!==null?t:Jd(e.type)||"Memo";case nr:t=e._payload,e=e._init;try{return Jd(e(t))}catch{}}return null}function E2(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Jd(t);case 8:return t===Vp?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function wr(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Y1(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function C2(e){var t=Y1(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(a){r=""+a,o.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Wa(e){e._valueTracker||(e._valueTracker=C2(e))}function X1(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Y1(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function tl(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ef(e,t){var n=t.checked;return Ee({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Xm(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=wr(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function q1(e,t){t=t.checked,t!=null&&zp(e,"checked",t,!1)}function tf(e,t){q1(e,t);var n=wr(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?nf(e,t.type,n):t.hasOwnProperty("defaultValue")&&nf(e,t.type,wr(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function qm(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function nf(e,t,n){(t!=="number"||tl(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Oo=Array.isArray;function Ci(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+wr(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function rf(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(V(91));return Ee({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Km(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(V(92));if(Oo(n)){if(1<n.length)throw Error(V(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:wr(n)}}function K1(e,t){var n=wr(t.value),r=wr(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Zm(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Z1(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function of(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Z1(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Ga,Q1=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Ga=Ga||document.createElement("div"),Ga.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Ga.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Zo(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Lo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},k2=["Webkit","ms","Moz","O"];Object.keys(Lo).forEach(function(e){k2.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Lo[t]=Lo[e]})});function J1(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Lo.hasOwnProperty(e)&&Lo[e]?(""+t).trim():t+"px"}function ey(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=J1(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var T2=Ee({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function af(e,t){if(t){if(T2[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(V(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(V(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(V(61))}if(t.style!=null&&typeof t.style!="object")throw Error(V(62))}}function sf(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var lf=null;function Hp(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var uf=null,ki=null,Ti=null;function Qm(e){if(e=Oa(e)){if(typeof uf!="function")throw Error(V(280));var t=e.stateNode;t&&(t=ou(t),uf(e.stateNode,e.type,t))}}function ty(e){ki?Ti?Ti.push(e):Ti=[e]:ki=e}function ny(){if(ki){var e=ki,t=Ti;if(Ti=ki=null,Qm(e),t)for(e=0;e<t.length;e++)Qm(t[e])}}function ry(e,t){return e(t)}function iy(){}var Ec=!1;function oy(e,t,n){if(Ec)return e(t,n);Ec=!0;try{return ry(e,t,n)}finally{Ec=!1,(ki!==null||Ti!==null)&&(iy(),ny())}}function Qo(e,t){var n=e.stateNode;if(n===null)return null;var r=ou(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(V(231,t,typeof n));return n}var cf=!1;if(Vn)try{var po={};Object.defineProperty(po,"passive",{get:function(){cf=!0}}),window.addEventListener("test",po,po),window.removeEventListener("test",po,po)}catch{cf=!1}function O2(e,t,n,r,i,o,a,l,s){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(c){this.onError(c)}}var Ao=!1,nl=null,rl=!1,df=null,P2={onError:function(e){Ao=!0,nl=e}};function M2(e,t,n,r,i,o,a,l,s){Ao=!1,nl=null,O2.apply(P2,arguments)}function I2(e,t,n,r,i,o,a,l,s){if(M2.apply(this,arguments),Ao){if(Ao){var u=nl;Ao=!1,nl=null}else throw Error(V(198));rl||(rl=!0,df=u)}}function ei(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function ay(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Jm(e){if(ei(e)!==e)throw Error(V(188))}function j2(e){var t=e.alternate;if(!t){if(t=ei(e),t===null)throw Error(V(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return Jm(i),e;if(o===r)return Jm(i),t;o=o.sibling}throw Error(V(188))}if(n.return!==r.return)n=i,r=o;else{for(var a=!1,l=i.child;l;){if(l===n){a=!0,n=i,r=o;break}if(l===r){a=!0,r=i,n=o;break}l=l.sibling}if(!a){for(l=o.child;l;){if(l===n){a=!0,n=o,r=i;break}if(l===r){a=!0,r=o,n=i;break}l=l.sibling}if(!a)throw Error(V(189))}}if(n.alternate!==r)throw Error(V(190))}if(n.tag!==3)throw Error(V(188));return n.stateNode.current===n?e:t}function sy(e){return e=j2(e),e!==null?ly(e):null}function ly(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=ly(e);if(t!==null)return t;e=e.sibling}return null}var uy=$t.unstable_scheduleCallback,eg=$t.unstable_cancelCallback,$2=$t.unstable_shouldYield,D2=$t.unstable_requestPaint,Te=$t.unstable_now,R2=$t.unstable_getCurrentPriorityLevel,Wp=$t.unstable_ImmediatePriority,cy=$t.unstable_UserBlockingPriority,il=$t.unstable_NormalPriority,L2=$t.unstable_LowPriority,dy=$t.unstable_IdlePriority,tu=null,bn=null;function A2(e){if(bn&&typeof bn.onCommitFiberRoot=="function")try{bn.onCommitFiberRoot(tu,e,void 0,(e.current.flags&128)===128)}catch{}}var rn=Math.clz32?Math.clz32:z2,F2=Math.log,N2=Math.LN2;function z2(e){return e>>>=0,e===0?32:31-(F2(e)/N2|0)|0}var Ya=64,Xa=4194304;function Po(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ol(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,a=n&268435455;if(a!==0){var l=a&~i;l!==0?r=Po(l):(o&=a,o!==0&&(r=Po(o)))}else a=n&~i,a!==0?r=Po(a):o!==0&&(r=Po(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-rn(t),i=1<<n,r|=e[n],t&=~i;return r}function V2(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function B2(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var a=31-rn(o),l=1<<a,s=i[a];s===-1?(!(l&n)||l&r)&&(i[a]=V2(l,t)):s<=t&&(e.expiredLanes|=l),o&=~l}}function ff(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function fy(){var e=Ya;return Ya<<=1,!(Ya&4194240)&&(Ya=64),e}function Cc(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ka(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-rn(t),e[t]=n}function U2(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-rn(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function Gp(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-rn(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var fe=0;function py(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var hy,Yp,my,gy,vy,pf=!1,qa=[],fr=null,pr=null,hr=null,Jo=new Map,ea=new Map,ir=[],H2="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function tg(e,t){switch(e){case"focusin":case"focusout":fr=null;break;case"dragenter":case"dragleave":pr=null;break;case"mouseover":case"mouseout":hr=null;break;case"pointerover":case"pointerout":Jo.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ea.delete(t.pointerId)}}function ho(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=Oa(t),t!==null&&Yp(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function W2(e,t,n,r,i){switch(t){case"focusin":return fr=ho(fr,e,t,n,r,i),!0;case"dragenter":return pr=ho(pr,e,t,n,r,i),!0;case"mouseover":return hr=ho(hr,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Jo.set(o,ho(Jo.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,ea.set(o,ho(ea.get(o)||null,e,t,n,r,i)),!0}return!1}function yy(e){var t=Lr(e.target);if(t!==null){var n=ei(t);if(n!==null){if(t=n.tag,t===13){if(t=ay(n),t!==null){e.blockedOn=t,vy(e.priority,function(){my(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ks(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=hf(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);lf=r,n.target.dispatchEvent(r),lf=null}else return t=Oa(n),t!==null&&Yp(t),e.blockedOn=n,!1;t.shift()}return!0}function ng(e,t,n){ks(e)&&n.delete(t)}function G2(){pf=!1,fr!==null&&ks(fr)&&(fr=null),pr!==null&&ks(pr)&&(pr=null),hr!==null&&ks(hr)&&(hr=null),Jo.forEach(ng),ea.forEach(ng)}function mo(e,t){e.blockedOn===t&&(e.blockedOn=null,pf||(pf=!0,$t.unstable_scheduleCallback($t.unstable_NormalPriority,G2)))}function ta(e){function t(i){return mo(i,e)}if(0<qa.length){mo(qa[0],e);for(var n=1;n<qa.length;n++){var r=qa[n];r.blockedOn===e&&(r.blockedOn=null)}}for(fr!==null&&mo(fr,e),pr!==null&&mo(pr,e),hr!==null&&mo(hr,e),Jo.forEach(t),ea.forEach(t),n=0;n<ir.length;n++)r=ir[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<ir.length&&(n=ir[0],n.blockedOn===null);)yy(n),n.blockedOn===null&&ir.shift()}var Oi=qn.ReactCurrentBatchConfig,al=!0;function Y2(e,t,n,r){var i=fe,o=Oi.transition;Oi.transition=null;try{fe=1,Xp(e,t,n,r)}finally{fe=i,Oi.transition=o}}function X2(e,t,n,r){var i=fe,o=Oi.transition;Oi.transition=null;try{fe=4,Xp(e,t,n,r)}finally{fe=i,Oi.transition=o}}function Xp(e,t,n,r){if(al){var i=hf(e,t,n,r);if(i===null)Rc(e,t,r,sl,n),tg(e,r);else if(W2(i,e,t,n,r))r.stopPropagation();else if(tg(e,r),t&4&&-1<H2.indexOf(e)){for(;i!==null;){var o=Oa(i);if(o!==null&&hy(o),o=hf(e,t,n,r),o===null&&Rc(e,t,r,sl,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else Rc(e,t,r,null,n)}}var sl=null;function hf(e,t,n,r){if(sl=null,e=Hp(r),e=Lr(e),e!==null)if(t=ei(e),t===null)e=null;else if(n=t.tag,n===13){if(e=ay(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return sl=e,null}function xy(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(R2()){case Wp:return 1;case cy:return 4;case il:case L2:return 16;case dy:return 536870912;default:return 16}default:return 16}}var sr=null,qp=null,Ts=null;function by(){if(Ts)return Ts;var e,t=qp,n=t.length,r,i="value"in sr?sr.value:sr.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===i[o-r];r++);return Ts=i.slice(e,1<r?1-r:void 0)}function Os(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ka(){return!0}function rg(){return!1}function Lt(e){function t(n,r,i,o,a){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=a,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(o):o[l]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Ka:rg,this.isPropagationStopped=rg,this}return Ee(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ka)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ka)},persist:function(){},isPersistent:Ka}),t}var Qi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Kp=Lt(Qi),Ta=Ee({},Qi,{view:0,detail:0}),q2=Lt(Ta),kc,Tc,go,nu=Ee({},Ta,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Zp,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==go&&(go&&e.type==="mousemove"?(kc=e.screenX-go.screenX,Tc=e.screenY-go.screenY):Tc=kc=0,go=e),kc)},movementY:function(e){return"movementY"in e?e.movementY:Tc}}),ig=Lt(nu),K2=Ee({},nu,{dataTransfer:0}),Z2=Lt(K2),Q2=Ee({},Ta,{relatedTarget:0}),Oc=Lt(Q2),J2=Ee({},Qi,{animationName:0,elapsedTime:0,pseudoElement:0}),eC=Lt(J2),tC=Ee({},Qi,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),nC=Lt(tC),rC=Ee({},Qi,{data:0}),og=Lt(rC),iC={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},oC={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},aC={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function sC(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=aC[e])?!!t[e]:!1}function Zp(){return sC}var lC=Ee({},Ta,{key:function(e){if(e.key){var t=iC[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Os(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?oC[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Zp,charCode:function(e){return e.type==="keypress"?Os(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Os(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),uC=Lt(lC),cC=Ee({},nu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ag=Lt(cC),dC=Ee({},Ta,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Zp}),fC=Lt(dC),pC=Ee({},Qi,{propertyName:0,elapsedTime:0,pseudoElement:0}),hC=Lt(pC),mC=Ee({},nu,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),gC=Lt(mC),vC=[9,13,27,32],Qp=Vn&&"CompositionEvent"in window,Fo=null;Vn&&"documentMode"in document&&(Fo=document.documentMode);var yC=Vn&&"TextEvent"in window&&!Fo,wy=Vn&&(!Qp||Fo&&8<Fo&&11>=Fo),sg=String.fromCharCode(32),lg=!1;function Sy(e,t){switch(e){case"keyup":return vC.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function _y(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var mi=!1;function xC(e,t){switch(e){case"compositionend":return _y(t);case"keypress":return t.which!==32?null:(lg=!0,sg);case"textInput":return e=t.data,e===sg&&lg?null:e;default:return null}}function bC(e,t){if(mi)return e==="compositionend"||!Qp&&Sy(e,t)?(e=by(),Ts=qp=sr=null,mi=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return wy&&t.locale!=="ko"?null:t.data;default:return null}}var wC={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ug(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!wC[e.type]:t==="textarea"}function Ey(e,t,n,r){ty(r),t=ll(t,"onChange"),0<t.length&&(n=new Kp("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var No=null,na=null;function SC(e){Ry(e,0)}function ru(e){var t=yi(e);if(X1(t))return e}function _C(e,t){if(e==="change")return t}var Cy=!1;if(Vn){var Pc;if(Vn){var Mc="oninput"in document;if(!Mc){var cg=document.createElement("div");cg.setAttribute("oninput","return;"),Mc=typeof cg.oninput=="function"}Pc=Mc}else Pc=!1;Cy=Pc&&(!document.documentMode||9<document.documentMode)}function dg(){No&&(No.detachEvent("onpropertychange",ky),na=No=null)}function ky(e){if(e.propertyName==="value"&&ru(na)){var t=[];Ey(t,na,e,Hp(e)),oy(SC,t)}}function EC(e,t,n){e==="focusin"?(dg(),No=t,na=n,No.attachEvent("onpropertychange",ky)):e==="focusout"&&dg()}function CC(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ru(na)}function kC(e,t){if(e==="click")return ru(t)}function TC(e,t){if(e==="input"||e==="change")return ru(t)}function OC(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ln=typeof Object.is=="function"?Object.is:OC;function ra(e,t){if(ln(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!qd.call(t,i)||!ln(e[i],t[i]))return!1}return!0}function fg(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function pg(e,t){var n=fg(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=fg(n)}}function Ty(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Ty(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Oy(){for(var e=window,t=tl();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=tl(e.document)}return t}function Jp(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function PC(e){var t=Oy(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Ty(n.ownerDocument.documentElement,n)){if(r!==null&&Jp(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=pg(n,o);var a=pg(n,r);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var MC=Vn&&"documentMode"in document&&11>=document.documentMode,gi=null,mf=null,zo=null,gf=!1;function hg(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;gf||gi==null||gi!==tl(r)||(r=gi,"selectionStart"in r&&Jp(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),zo&&ra(zo,r)||(zo=r,r=ll(mf,"onSelect"),0<r.length&&(t=new Kp("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=gi)))}function Za(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var vi={animationend:Za("Animation","AnimationEnd"),animationiteration:Za("Animation","AnimationIteration"),animationstart:Za("Animation","AnimationStart"),transitionend:Za("Transition","TransitionEnd")},Ic={},Py={};Vn&&(Py=document.createElement("div").style,"AnimationEvent"in window||(delete vi.animationend.animation,delete vi.animationiteration.animation,delete vi.animationstart.animation),"TransitionEvent"in window||delete vi.transitionend.transition);function iu(e){if(Ic[e])return Ic[e];if(!vi[e])return e;var t=vi[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Py)return Ic[e]=t[n];return e}var My=iu("animationend"),Iy=iu("animationiteration"),jy=iu("animationstart"),$y=iu("transitionend"),Dy=new Map,mg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Er(e,t){Dy.set(e,t),Jr(t,[e])}for(var jc=0;jc<mg.length;jc++){var $c=mg[jc],IC=$c.toLowerCase(),jC=$c[0].toUpperCase()+$c.slice(1);Er(IC,"on"+jC)}Er(My,"onAnimationEnd");Er(Iy,"onAnimationIteration");Er(jy,"onAnimationStart");Er("dblclick","onDoubleClick");Er("focusin","onFocus");Er("focusout","onBlur");Er($y,"onTransitionEnd");$i("onMouseEnter",["mouseout","mouseover"]);$i("onMouseLeave",["mouseout","mouseover"]);$i("onPointerEnter",["pointerout","pointerover"]);$i("onPointerLeave",["pointerout","pointerover"]);Jr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Jr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Jr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Jr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Jr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Jr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Mo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),$C=new Set("cancel close invalid load scroll toggle".split(" ").concat(Mo));function gg(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,I2(r,t,void 0,e),e.currentTarget=null}function Ry(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var a=r.length-1;0<=a;a--){var l=r[a],s=l.instance,u=l.currentTarget;if(l=l.listener,s!==o&&i.isPropagationStopped())break e;gg(i,l,u),o=s}else for(a=0;a<r.length;a++){if(l=r[a],s=l.instance,u=l.currentTarget,l=l.listener,s!==o&&i.isPropagationStopped())break e;gg(i,l,u),o=s}}}if(rl)throw e=df,rl=!1,df=null,e}function me(e,t){var n=t[wf];n===void 0&&(n=t[wf]=new Set);var r=e+"__bubble";n.has(r)||(Ly(t,e,2,!1),n.add(r))}function Dc(e,t,n){var r=0;t&&(r|=4),Ly(n,e,r,t)}var Qa="_reactListening"+Math.random().toString(36).slice(2);function ia(e){if(!e[Qa]){e[Qa]=!0,U1.forEach(function(n){n!=="selectionchange"&&($C.has(n)||Dc(n,!1,e),Dc(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Qa]||(t[Qa]=!0,Dc("selectionchange",!1,t))}}function Ly(e,t,n,r){switch(xy(t)){case 1:var i=Y2;break;case 4:i=X2;break;default:i=Xp}n=i.bind(null,t,n,e),i=void 0,!cf||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Rc(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(a===4)for(a=r.return;a!==null;){var s=a.tag;if((s===3||s===4)&&(s=a.stateNode.containerInfo,s===i||s.nodeType===8&&s.parentNode===i))return;a=a.return}for(;l!==null;){if(a=Lr(l),a===null)return;if(s=a.tag,s===5||s===6){r=o=a;continue e}l=l.parentNode}}r=r.return}oy(function(){var u=o,c=Hp(n),d=[];e:{var m=Dy.get(e);if(m!==void 0){var h=Kp,g=e;switch(e){case"keypress":if(Os(n)===0)break e;case"keydown":case"keyup":h=uC;break;case"focusin":g="focus",h=Oc;break;case"focusout":g="blur",h=Oc;break;case"beforeblur":case"afterblur":h=Oc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":h=ig;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":h=Z2;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":h=fC;break;case My:case Iy:case jy:h=eC;break;case $y:h=hC;break;case"scroll":h=q2;break;case"wheel":h=gC;break;case"copy":case"cut":case"paste":h=nC;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":h=ag}var x=(t&4)!==0,S=!x&&e==="scroll",f=x?m!==null?m+"Capture":null:m;x=[];for(var p=u,v;p!==null;){v=p;var w=v.stateNode;if(v.tag===5&&w!==null&&(v=w,f!==null&&(w=Qo(p,f),w!=null&&x.push(oa(p,w,v)))),S)break;p=p.return}0<x.length&&(m=new h(m,g,null,n,c),d.push({event:m,listeners:x}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",h=e==="mouseout"||e==="pointerout",m&&n!==lf&&(g=n.relatedTarget||n.fromElement)&&(Lr(g)||g[Bn]))break e;if((h||m)&&(m=c.window===c?c:(m=c.ownerDocument)?m.defaultView||m.parentWindow:window,h?(g=n.relatedTarget||n.toElement,h=u,g=g?Lr(g):null,g!==null&&(S=ei(g),g!==S||g.tag!==5&&g.tag!==6)&&(g=null)):(h=null,g=u),h!==g)){if(x=ig,w="onMouseLeave",f="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(x=ag,w="onPointerLeave",f="onPointerEnter",p="pointer"),S=h==null?m:yi(h),v=g==null?m:yi(g),m=new x(w,p+"leave",h,n,c),m.target=S,m.relatedTarget=v,w=null,Lr(c)===u&&(x=new x(f,p+"enter",g,n,c),x.target=v,x.relatedTarget=S,w=x),S=w,h&&g)t:{for(x=h,f=g,p=0,v=x;v;v=ri(v))p++;for(v=0,w=f;w;w=ri(w))v++;for(;0<p-v;)x=ri(x),p--;for(;0<v-p;)f=ri(f),v--;for(;p--;){if(x===f||f!==null&&x===f.alternate)break t;x=ri(x),f=ri(f)}x=null}else x=null;h!==null&&vg(d,m,h,x,!1),g!==null&&S!==null&&vg(d,S,g,x,!0)}}e:{if(m=u?yi(u):window,h=m.nodeName&&m.nodeName.toLowerCase(),h==="select"||h==="input"&&m.type==="file")var C=_C;else if(ug(m))if(Cy)C=TC;else{C=CC;var k=EC}else(h=m.nodeName)&&h.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(C=kC);if(C&&(C=C(e,u))){Ey(d,C,n,c);break e}k&&k(e,m,u),e==="focusout"&&(k=m._wrapperState)&&k.controlled&&m.type==="number"&&nf(m,"number",m.value)}switch(k=u?yi(u):window,e){case"focusin":(ug(k)||k.contentEditable==="true")&&(gi=k,mf=u,zo=null);break;case"focusout":zo=mf=gi=null;break;case"mousedown":gf=!0;break;case"contextmenu":case"mouseup":case"dragend":gf=!1,hg(d,n,c);break;case"selectionchange":if(MC)break;case"keydown":case"keyup":hg(d,n,c)}var _;if(Qp)e:{switch(e){case"compositionstart":var E="onCompositionStart";break e;case"compositionend":E="onCompositionEnd";break e;case"compositionupdate":E="onCompositionUpdate";break e}E=void 0}else mi?Sy(e,n)&&(E="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(E="onCompositionStart");E&&(wy&&n.locale!=="ko"&&(mi||E!=="onCompositionStart"?E==="onCompositionEnd"&&mi&&(_=by()):(sr=c,qp="value"in sr?sr.value:sr.textContent,mi=!0)),k=ll(u,E),0<k.length&&(E=new og(E,e,null,n,c),d.push({event:E,listeners:k}),_?E.data=_:(_=_y(n),_!==null&&(E.data=_)))),(_=yC?xC(e,n):bC(e,n))&&(u=ll(u,"onBeforeInput"),0<u.length&&(c=new og("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:u}),c.data=_))}Ry(d,t)})}function oa(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ll(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Qo(e,n),o!=null&&r.unshift(oa(e,o,i)),o=Qo(e,t),o!=null&&r.push(oa(e,o,i))),e=e.return}return r}function ri(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function vg(e,t,n,r,i){for(var o=t._reactName,a=[];n!==null&&n!==r;){var l=n,s=l.alternate,u=l.stateNode;if(s!==null&&s===r)break;l.tag===5&&u!==null&&(l=u,i?(s=Qo(n,o),s!=null&&a.unshift(oa(n,s,l))):i||(s=Qo(n,o),s!=null&&a.push(oa(n,s,l)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var DC=/\r\n?/g,RC=/\u0000|\uFFFD/g;function yg(e){return(typeof e=="string"?e:""+e).replace(DC,`
`).replace(RC,"")}function Ja(e,t,n){if(t=yg(t),yg(e)!==t&&n)throw Error(V(425))}function ul(){}var vf=null,yf=null;function xf(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var bf=typeof setTimeout=="function"?setTimeout:void 0,LC=typeof clearTimeout=="function"?clearTimeout:void 0,xg=typeof Promise=="function"?Promise:void 0,AC=typeof queueMicrotask=="function"?queueMicrotask:typeof xg<"u"?function(e){return xg.resolve(null).then(e).catch(FC)}:bf;function FC(e){setTimeout(function(){throw e})}function Lc(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),ta(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);ta(t)}function mr(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function bg(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Ji=Math.random().toString(36).slice(2),yn="__reactFiber$"+Ji,aa="__reactProps$"+Ji,Bn="__reactContainer$"+Ji,wf="__reactEvents$"+Ji,NC="__reactListeners$"+Ji,zC="__reactHandles$"+Ji;function Lr(e){var t=e[yn];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Bn]||n[yn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=bg(e);e!==null;){if(n=e[yn])return n;e=bg(e)}return t}e=n,n=e.parentNode}return null}function Oa(e){return e=e[yn]||e[Bn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function yi(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(V(33))}function ou(e){return e[aa]||null}var Sf=[],xi=-1;function Cr(e){return{current:e}}function ve(e){0>xi||(e.current=Sf[xi],Sf[xi]=null,xi--)}function he(e,t){xi++,Sf[xi]=e.current,e.current=t}var Sr={},rt=Cr(Sr),xt=Cr(!1),Ur=Sr;function Di(e,t){var n=e.type.contextTypes;if(!n)return Sr;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function bt(e){return e=e.childContextTypes,e!=null}function cl(){ve(xt),ve(rt)}function wg(e,t,n){if(rt.current!==Sr)throw Error(V(168));he(rt,t),he(xt,n)}function Ay(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(V(108,E2(e)||"Unknown",i));return Ee({},n,r)}function dl(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Sr,Ur=rt.current,he(rt,e),he(xt,xt.current),!0}function Sg(e,t,n){var r=e.stateNode;if(!r)throw Error(V(169));n?(e=Ay(e,t,Ur),r.__reactInternalMemoizedMergedChildContext=e,ve(xt),ve(rt),he(rt,e)):ve(xt),he(xt,n)}var jn=null,au=!1,Ac=!1;function Fy(e){jn===null?jn=[e]:jn.push(e)}function VC(e){au=!0,Fy(e)}function kr(){if(!Ac&&jn!==null){Ac=!0;var e=0,t=fe;try{var n=jn;for(fe=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}jn=null,au=!1}catch(i){throw jn!==null&&(jn=jn.slice(e+1)),uy(Wp,kr),i}finally{fe=t,Ac=!1}}return null}var bi=[],wi=0,fl=null,pl=0,zt=[],Vt=0,Hr=null,Rn=1,Ln="";function Mr(e,t){bi[wi++]=pl,bi[wi++]=fl,fl=e,pl=t}function Ny(e,t,n){zt[Vt++]=Rn,zt[Vt++]=Ln,zt[Vt++]=Hr,Hr=e;var r=Rn;e=Ln;var i=32-rn(r)-1;r&=~(1<<i),n+=1;var o=32-rn(t)+i;if(30<o){var a=i-i%5;o=(r&(1<<a)-1).toString(32),r>>=a,i-=a,Rn=1<<32-rn(t)+i|n<<i|r,Ln=o+e}else Rn=1<<o|n<<i|r,Ln=e}function eh(e){e.return!==null&&(Mr(e,1),Ny(e,1,0))}function th(e){for(;e===fl;)fl=bi[--wi],bi[wi]=null,pl=bi[--wi],bi[wi]=null;for(;e===Hr;)Hr=zt[--Vt],zt[Vt]=null,Ln=zt[--Vt],zt[Vt]=null,Rn=zt[--Vt],zt[Vt]=null}var It=null,Pt=null,be=!1,tn=null;function zy(e,t){var n=Bt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function _g(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,It=e,Pt=mr(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,It=e,Pt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Hr!==null?{id:Rn,overflow:Ln}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Bt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,It=e,Pt=null,!0):!1;default:return!1}}function _f(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ef(e){if(be){var t=Pt;if(t){var n=t;if(!_g(e,t)){if(_f(e))throw Error(V(418));t=mr(n.nextSibling);var r=It;t&&_g(e,t)?zy(r,n):(e.flags=e.flags&-4097|2,be=!1,It=e)}}else{if(_f(e))throw Error(V(418));e.flags=e.flags&-4097|2,be=!1,It=e}}}function Eg(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;It=e}function es(e){if(e!==It)return!1;if(!be)return Eg(e),be=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!xf(e.type,e.memoizedProps)),t&&(t=Pt)){if(_f(e))throw Vy(),Error(V(418));for(;t;)zy(e,t),t=mr(t.nextSibling)}if(Eg(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(V(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Pt=mr(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Pt=null}}else Pt=It?mr(e.stateNode.nextSibling):null;return!0}function Vy(){for(var e=Pt;e;)e=mr(e.nextSibling)}function Ri(){Pt=It=null,be=!1}function nh(e){tn===null?tn=[e]:tn.push(e)}var BC=qn.ReactCurrentBatchConfig;function Qt(e,t){if(e&&e.defaultProps){t=Ee({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var hl=Cr(null),ml=null,Si=null,rh=null;function ih(){rh=Si=ml=null}function oh(e){var t=hl.current;ve(hl),e._currentValue=t}function Cf(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Pi(e,t){ml=e,rh=Si=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(yt=!0),e.firstContext=null)}function Ht(e){var t=e._currentValue;if(rh!==e)if(e={context:e,memoizedValue:t,next:null},Si===null){if(ml===null)throw Error(V(308));Si=e,ml.dependencies={lanes:0,firstContext:e}}else Si=Si.next=e;return t}var Ar=null;function ah(e){Ar===null?Ar=[e]:Ar.push(e)}function By(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,ah(t)):(n.next=i.next,i.next=n),t.interleaved=n,Un(e,r)}function Un(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var rr=!1;function sh(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Uy(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function An(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function gr(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,ae&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Un(e,n)}return i=r.interleaved,i===null?(t.next=t,ah(r)):(t.next=i.next,i.next=t),r.interleaved=t,Un(e,n)}function Ps(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Gp(e,n)}}function Cg(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=a:o=o.next=a,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function gl(e,t,n,r){var i=e.updateQueue;rr=!1;var o=i.firstBaseUpdate,a=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var s=l,u=s.next;s.next=null,a===null?o=u:a.next=u,a=s;var c=e.alternate;c!==null&&(c=c.updateQueue,l=c.lastBaseUpdate,l!==a&&(l===null?c.firstBaseUpdate=u:l.next=u,c.lastBaseUpdate=s))}if(o!==null){var d=i.baseState;a=0,c=u=s=null,l=o;do{var m=l.lane,h=l.eventTime;if((r&m)===m){c!==null&&(c=c.next={eventTime:h,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var g=e,x=l;switch(m=t,h=n,x.tag){case 1:if(g=x.payload,typeof g=="function"){d=g.call(h,d,m);break e}d=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=x.payload,m=typeof g=="function"?g.call(h,d,m):g,m==null)break e;d=Ee({},d,m);break e;case 2:rr=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,m=i.effects,m===null?i.effects=[l]:m.push(l))}else h={eventTime:h,lane:m,tag:l.tag,payload:l.payload,callback:l.callback,next:null},c===null?(u=c=h,s=d):c=c.next=h,a|=m;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;m=l,l=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(1);if(c===null&&(s=d),i.baseState=s,i.firstBaseUpdate=u,i.lastBaseUpdate=c,t=i.shared.interleaved,t!==null){i=t;do a|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);Gr|=a,e.lanes=a,e.memoizedState=d}}function kg(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(V(191,i));i.call(r)}}}var Hy=new B1.Component().refs;function kf(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Ee({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var su={isMounted:function(e){return(e=e._reactInternals)?ei(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=lt(),i=yr(e),o=An(r,i);o.payload=t,n!=null&&(o.callback=n),t=gr(e,o,i),t!==null&&(on(t,e,i,r),Ps(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=lt(),i=yr(e),o=An(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=gr(e,o,i),t!==null&&(on(t,e,i,r),Ps(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=lt(),r=yr(e),i=An(n,r);i.tag=2,t!=null&&(i.callback=t),t=gr(e,i,r),t!==null&&(on(t,e,r,n),Ps(t,e,r))}};function Tg(e,t,n,r,i,o,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,a):t.prototype&&t.prototype.isPureReactComponent?!ra(n,r)||!ra(i,o):!0}function Wy(e,t,n){var r=!1,i=Sr,o=t.contextType;return typeof o=="object"&&o!==null?o=Ht(o):(i=bt(t)?Ur:rt.current,r=t.contextTypes,o=(r=r!=null)?Di(e,i):Sr),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=su,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Og(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&su.enqueueReplaceState(t,t.state,null)}function Tf(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=Hy,sh(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=Ht(o):(o=bt(t)?Ur:rt.current,i.context=Di(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(kf(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&su.enqueueReplaceState(i,i.state,null),gl(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function vo(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(V(309));var r=n.stateNode}if(!r)throw Error(V(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(a){var l=i.refs;l===Hy&&(l=i.refs={}),a===null?delete l[o]:l[o]=a},t._stringRef=o,t)}if(typeof e!="string")throw Error(V(284));if(!n._owner)throw Error(V(290,e))}return e}function ts(e,t){throw e=Object.prototype.toString.call(t),Error(V(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Pg(e){var t=e._init;return t(e._payload)}function Gy(e){function t(f,p){if(e){var v=f.deletions;v===null?(f.deletions=[p],f.flags|=16):v.push(p)}}function n(f,p){if(!e)return null;for(;p!==null;)t(f,p),p=p.sibling;return null}function r(f,p){for(f=new Map;p!==null;)p.key!==null?f.set(p.key,p):f.set(p.index,p),p=p.sibling;return f}function i(f,p){return f=xr(f,p),f.index=0,f.sibling=null,f}function o(f,p,v){return f.index=v,e?(v=f.alternate,v!==null?(v=v.index,v<p?(f.flags|=2,p):v):(f.flags|=2,p)):(f.flags|=1048576,p)}function a(f){return e&&f.alternate===null&&(f.flags|=2),f}function l(f,p,v,w){return p===null||p.tag!==6?(p=Hc(v,f.mode,w),p.return=f,p):(p=i(p,v),p.return=f,p)}function s(f,p,v,w){var C=v.type;return C===hi?c(f,p,v.props.children,w,v.key):p!==null&&(p.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===nr&&Pg(C)===p.type)?(w=i(p,v.props),w.ref=vo(f,p,v),w.return=f,w):(w=Rs(v.type,v.key,v.props,null,f.mode,w),w.ref=vo(f,p,v),w.return=f,w)}function u(f,p,v,w){return p===null||p.tag!==4||p.stateNode.containerInfo!==v.containerInfo||p.stateNode.implementation!==v.implementation?(p=Wc(v,f.mode,w),p.return=f,p):(p=i(p,v.children||[]),p.return=f,p)}function c(f,p,v,w,C){return p===null||p.tag!==7?(p=Vr(v,f.mode,w,C),p.return=f,p):(p=i(p,v),p.return=f,p)}function d(f,p,v){if(typeof p=="string"&&p!==""||typeof p=="number")return p=Hc(""+p,f.mode,v),p.return=f,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Ha:return v=Rs(p.type,p.key,p.props,null,f.mode,v),v.ref=vo(f,null,p),v.return=f,v;case pi:return p=Wc(p,f.mode,v),p.return=f,p;case nr:var w=p._init;return d(f,w(p._payload),v)}if(Oo(p)||fo(p))return p=Vr(p,f.mode,v,null),p.return=f,p;ts(f,p)}return null}function m(f,p,v,w){var C=p!==null?p.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return C!==null?null:l(f,p,""+v,w);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Ha:return v.key===C?s(f,p,v,w):null;case pi:return v.key===C?u(f,p,v,w):null;case nr:return C=v._init,m(f,p,C(v._payload),w)}if(Oo(v)||fo(v))return C!==null?null:c(f,p,v,w,null);ts(f,v)}return null}function h(f,p,v,w,C){if(typeof w=="string"&&w!==""||typeof w=="number")return f=f.get(v)||null,l(p,f,""+w,C);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Ha:return f=f.get(w.key===null?v:w.key)||null,s(p,f,w,C);case pi:return f=f.get(w.key===null?v:w.key)||null,u(p,f,w,C);case nr:var k=w._init;return h(f,p,v,k(w._payload),C)}if(Oo(w)||fo(w))return f=f.get(v)||null,c(p,f,w,C,null);ts(p,w)}return null}function g(f,p,v,w){for(var C=null,k=null,_=p,E=p=0,M=null;_!==null&&E<v.length;E++){_.index>E?(M=_,_=null):M=_.sibling;var I=m(f,_,v[E],w);if(I===null){_===null&&(_=M);break}e&&_&&I.alternate===null&&t(f,_),p=o(I,p,E),k===null?C=I:k.sibling=I,k=I,_=M}if(E===v.length)return n(f,_),be&&Mr(f,E),C;if(_===null){for(;E<v.length;E++)_=d(f,v[E],w),_!==null&&(p=o(_,p,E),k===null?C=_:k.sibling=_,k=_);return be&&Mr(f,E),C}for(_=r(f,_);E<v.length;E++)M=h(_,f,E,v[E],w),M!==null&&(e&&M.alternate!==null&&_.delete(M.key===null?E:M.key),p=o(M,p,E),k===null?C=M:k.sibling=M,k=M);return e&&_.forEach(function($){return t(f,$)}),be&&Mr(f,E),C}function x(f,p,v,w){var C=fo(v);if(typeof C!="function")throw Error(V(150));if(v=C.call(v),v==null)throw Error(V(151));for(var k=C=null,_=p,E=p=0,M=null,I=v.next();_!==null&&!I.done;E++,I=v.next()){_.index>E?(M=_,_=null):M=_.sibling;var $=m(f,_,I.value,w);if($===null){_===null&&(_=M);break}e&&_&&$.alternate===null&&t(f,_),p=o($,p,E),k===null?C=$:k.sibling=$,k=$,_=M}if(I.done)return n(f,_),be&&Mr(f,E),C;if(_===null){for(;!I.done;E++,I=v.next())I=d(f,I.value,w),I!==null&&(p=o(I,p,E),k===null?C=I:k.sibling=I,k=I);return be&&Mr(f,E),C}for(_=r(f,_);!I.done;E++,I=v.next())I=h(_,f,E,I.value,w),I!==null&&(e&&I.alternate!==null&&_.delete(I.key===null?E:I.key),p=o(I,p,E),k===null?C=I:k.sibling=I,k=I);return e&&_.forEach(function(P){return t(f,P)}),be&&Mr(f,E),C}function S(f,p,v,w){if(typeof v=="object"&&v!==null&&v.type===hi&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case Ha:e:{for(var C=v.key,k=p;k!==null;){if(k.key===C){if(C=v.type,C===hi){if(k.tag===7){n(f,k.sibling),p=i(k,v.props.children),p.return=f,f=p;break e}}else if(k.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===nr&&Pg(C)===k.type){n(f,k.sibling),p=i(k,v.props),p.ref=vo(f,k,v),p.return=f,f=p;break e}n(f,k);break}else t(f,k);k=k.sibling}v.type===hi?(p=Vr(v.props.children,f.mode,w,v.key),p.return=f,f=p):(w=Rs(v.type,v.key,v.props,null,f.mode,w),w.ref=vo(f,p,v),w.return=f,f=w)}return a(f);case pi:e:{for(k=v.key;p!==null;){if(p.key===k)if(p.tag===4&&p.stateNode.containerInfo===v.containerInfo&&p.stateNode.implementation===v.implementation){n(f,p.sibling),p=i(p,v.children||[]),p.return=f,f=p;break e}else{n(f,p);break}else t(f,p);p=p.sibling}p=Wc(v,f.mode,w),p.return=f,f=p}return a(f);case nr:return k=v._init,S(f,p,k(v._payload),w)}if(Oo(v))return g(f,p,v,w);if(fo(v))return x(f,p,v,w);ts(f,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,p!==null&&p.tag===6?(n(f,p.sibling),p=i(p,v),p.return=f,f=p):(n(f,p),p=Hc(v,f.mode,w),p.return=f,f=p),a(f)):n(f,p)}return S}var Li=Gy(!0),Yy=Gy(!1),Pa={},wn=Cr(Pa),sa=Cr(Pa),la=Cr(Pa);function Fr(e){if(e===Pa)throw Error(V(174));return e}function lh(e,t){switch(he(la,t),he(sa,e),he(wn,Pa),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:of(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=of(t,e)}ve(wn),he(wn,t)}function Ai(){ve(wn),ve(sa),ve(la)}function Xy(e){Fr(la.current);var t=Fr(wn.current),n=of(t,e.type);t!==n&&(he(sa,e),he(wn,n))}function uh(e){sa.current===e&&(ve(wn),ve(sa))}var Se=Cr(0);function vl(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Fc=[];function ch(){for(var e=0;e<Fc.length;e++)Fc[e]._workInProgressVersionPrimary=null;Fc.length=0}var Ms=qn.ReactCurrentDispatcher,Nc=qn.ReactCurrentBatchConfig,Wr=0,_e=null,Re=null,Ve=null,yl=!1,Vo=!1,ua=0,UC=0;function Ke(){throw Error(V(321))}function dh(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!ln(e[n],t[n]))return!1;return!0}function fh(e,t,n,r,i,o){if(Wr=o,_e=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ms.current=e===null||e.memoizedState===null?YC:XC,e=n(r,i),Vo){o=0;do{if(Vo=!1,ua=0,25<=o)throw Error(V(301));o+=1,Ve=Re=null,t.updateQueue=null,Ms.current=qC,e=n(r,i)}while(Vo)}if(Ms.current=xl,t=Re!==null&&Re.next!==null,Wr=0,Ve=Re=_e=null,yl=!1,t)throw Error(V(300));return e}function ph(){var e=ua!==0;return ua=0,e}function mn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ve===null?_e.memoizedState=Ve=e:Ve=Ve.next=e,Ve}function Wt(){if(Re===null){var e=_e.alternate;e=e!==null?e.memoizedState:null}else e=Re.next;var t=Ve===null?_e.memoizedState:Ve.next;if(t!==null)Ve=t,Re=e;else{if(e===null)throw Error(V(310));Re=e,e={memoizedState:Re.memoizedState,baseState:Re.baseState,baseQueue:Re.baseQueue,queue:Re.queue,next:null},Ve===null?_e.memoizedState=Ve=e:Ve=Ve.next=e}return Ve}function ca(e,t){return typeof t=="function"?t(e):t}function zc(e){var t=Wt(),n=t.queue;if(n===null)throw Error(V(311));n.lastRenderedReducer=e;var r=Re,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var a=i.next;i.next=o.next,o.next=a}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var l=a=null,s=null,u=o;do{var c=u.lane;if((Wr&c)===c)s!==null&&(s=s.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};s===null?(l=s=d,a=r):s=s.next=d,_e.lanes|=c,Gr|=c}u=u.next}while(u!==null&&u!==o);s===null?a=r:s.next=l,ln(r,t.memoizedState)||(yt=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,_e.lanes|=o,Gr|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Vc(e){var t=Wt(),n=t.queue;if(n===null)throw Error(V(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var a=i=i.next;do o=e(o,a.action),a=a.next;while(a!==i);ln(o,t.memoizedState)||(yt=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function qy(){}function Ky(e,t){var n=_e,r=Wt(),i=t(),o=!ln(r.memoizedState,i);if(o&&(r.memoizedState=i,yt=!0),r=r.queue,hh(Jy.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||Ve!==null&&Ve.memoizedState.tag&1){if(n.flags|=2048,da(9,Qy.bind(null,n,r,i,t),void 0,null),Be===null)throw Error(V(349));Wr&30||Zy(n,t,i)}return i}function Zy(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=_e.updateQueue,t===null?(t={lastEffect:null,stores:null},_e.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Qy(e,t,n,r){t.value=n,t.getSnapshot=r,ex(t)&&tx(e)}function Jy(e,t,n){return n(function(){ex(t)&&tx(e)})}function ex(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!ln(e,n)}catch{return!0}}function tx(e){var t=Un(e,1);t!==null&&on(t,e,1,-1)}function Mg(e){var t=mn();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ca,lastRenderedState:e},t.queue=e,e=e.dispatch=GC.bind(null,_e,e),[t.memoizedState,e]}function da(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=_e.updateQueue,t===null?(t={lastEffect:null,stores:null},_e.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function nx(){return Wt().memoizedState}function Is(e,t,n,r){var i=mn();_e.flags|=e,i.memoizedState=da(1|t,n,void 0,r===void 0?null:r)}function lu(e,t,n,r){var i=Wt();r=r===void 0?null:r;var o=void 0;if(Re!==null){var a=Re.memoizedState;if(o=a.destroy,r!==null&&dh(r,a.deps)){i.memoizedState=da(t,n,o,r);return}}_e.flags|=e,i.memoizedState=da(1|t,n,o,r)}function Ig(e,t){return Is(8390656,8,e,t)}function hh(e,t){return lu(2048,8,e,t)}function rx(e,t){return lu(4,2,e,t)}function ix(e,t){return lu(4,4,e,t)}function ox(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ax(e,t,n){return n=n!=null?n.concat([e]):null,lu(4,4,ox.bind(null,t,e),n)}function mh(){}function sx(e,t){var n=Wt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&dh(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function lx(e,t){var n=Wt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&dh(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function ux(e,t,n){return Wr&21?(ln(n,t)||(n=fy(),_e.lanes|=n,Gr|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,yt=!0),e.memoizedState=n)}function HC(e,t){var n=fe;fe=n!==0&&4>n?n:4,e(!0);var r=Nc.transition;Nc.transition={};try{e(!1),t()}finally{fe=n,Nc.transition=r}}function cx(){return Wt().memoizedState}function WC(e,t,n){var r=yr(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},dx(e))fx(t,n);else if(n=By(e,t,n,r),n!==null){var i=lt();on(n,e,r,i),px(n,t,r)}}function GC(e,t,n){var r=yr(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(dx(e))fx(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var a=t.lastRenderedState,l=o(a,n);if(i.hasEagerState=!0,i.eagerState=l,ln(l,a)){var s=t.interleaved;s===null?(i.next=i,ah(t)):(i.next=s.next,s.next=i),t.interleaved=i;return}}catch{}finally{}n=By(e,t,i,r),n!==null&&(i=lt(),on(n,e,r,i),px(n,t,r))}}function dx(e){var t=e.alternate;return e===_e||t!==null&&t===_e}function fx(e,t){Vo=yl=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function px(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Gp(e,n)}}var xl={readContext:Ht,useCallback:Ke,useContext:Ke,useEffect:Ke,useImperativeHandle:Ke,useInsertionEffect:Ke,useLayoutEffect:Ke,useMemo:Ke,useReducer:Ke,useRef:Ke,useState:Ke,useDebugValue:Ke,useDeferredValue:Ke,useTransition:Ke,useMutableSource:Ke,useSyncExternalStore:Ke,useId:Ke,unstable_isNewReconciler:!1},YC={readContext:Ht,useCallback:function(e,t){return mn().memoizedState=[e,t===void 0?null:t],e},useContext:Ht,useEffect:Ig,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Is(4194308,4,ox.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Is(4194308,4,e,t)},useInsertionEffect:function(e,t){return Is(4,2,e,t)},useMemo:function(e,t){var n=mn();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=mn();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=WC.bind(null,_e,e),[r.memoizedState,e]},useRef:function(e){var t=mn();return e={current:e},t.memoizedState=e},useState:Mg,useDebugValue:mh,useDeferredValue:function(e){return mn().memoizedState=e},useTransition:function(){var e=Mg(!1),t=e[0];return e=HC.bind(null,e[1]),mn().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=_e,i=mn();if(be){if(n===void 0)throw Error(V(407));n=n()}else{if(n=t(),Be===null)throw Error(V(349));Wr&30||Zy(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,Ig(Jy.bind(null,r,o,e),[e]),r.flags|=2048,da(9,Qy.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=mn(),t=Be.identifierPrefix;if(be){var n=Ln,r=Rn;n=(r&~(1<<32-rn(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=ua++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=UC++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},XC={readContext:Ht,useCallback:sx,useContext:Ht,useEffect:hh,useImperativeHandle:ax,useInsertionEffect:rx,useLayoutEffect:ix,useMemo:lx,useReducer:zc,useRef:nx,useState:function(){return zc(ca)},useDebugValue:mh,useDeferredValue:function(e){var t=Wt();return ux(t,Re.memoizedState,e)},useTransition:function(){var e=zc(ca)[0],t=Wt().memoizedState;return[e,t]},useMutableSource:qy,useSyncExternalStore:Ky,useId:cx,unstable_isNewReconciler:!1},qC={readContext:Ht,useCallback:sx,useContext:Ht,useEffect:hh,useImperativeHandle:ax,useInsertionEffect:rx,useLayoutEffect:ix,useMemo:lx,useReducer:Vc,useRef:nx,useState:function(){return Vc(ca)},useDebugValue:mh,useDeferredValue:function(e){var t=Wt();return Re===null?t.memoizedState=e:ux(t,Re.memoizedState,e)},useTransition:function(){var e=Vc(ca)[0],t=Wt().memoizedState;return[e,t]},useMutableSource:qy,useSyncExternalStore:Ky,useId:cx,unstable_isNewReconciler:!1};function Fi(e,t){try{var n="",r=t;do n+=_2(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function Bc(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Of(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var KC=typeof WeakMap=="function"?WeakMap:Map;function hx(e,t,n){n=An(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){wl||(wl=!0,Ff=r),Of(e,t)},n}function mx(e,t,n){n=An(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Of(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Of(e,t),typeof r!="function"&&(vr===null?vr=new Set([this]):vr.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function jg(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new KC;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=ck.bind(null,e,t,n),t.then(e,e))}function $g(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Dg(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=An(-1,1),t.tag=2,gr(n,t,1))),n.lanes|=1),e)}var ZC=qn.ReactCurrentOwner,yt=!1;function at(e,t,n,r){t.child=e===null?Yy(t,null,n,r):Li(t,e.child,n,r)}function Rg(e,t,n,r,i){n=n.render;var o=t.ref;return Pi(t,i),r=fh(e,t,n,r,o,i),n=ph(),e!==null&&!yt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Hn(e,t,i)):(be&&n&&eh(t),t.flags|=1,at(e,t,r,i),t.child)}function Lg(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!_h(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,gx(e,t,o,r,i)):(e=Rs(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var a=o.memoizedProps;if(n=n.compare,n=n!==null?n:ra,n(a,r)&&e.ref===t.ref)return Hn(e,t,i)}return t.flags|=1,e=xr(o,r),e.ref=t.ref,e.return=t,t.child=e}function gx(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(ra(o,r)&&e.ref===t.ref)if(yt=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(yt=!0);else return t.lanes=e.lanes,Hn(e,t,i)}return Pf(e,t,n,r,i)}function vx(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},he(Ei,Tt),Tt|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,he(Ei,Tt),Tt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,he(Ei,Tt),Tt|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,he(Ei,Tt),Tt|=r;return at(e,t,i,n),t.child}function yx(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Pf(e,t,n,r,i){var o=bt(n)?Ur:rt.current;return o=Di(t,o),Pi(t,i),n=fh(e,t,n,r,o,i),r=ph(),e!==null&&!yt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Hn(e,t,i)):(be&&r&&eh(t),t.flags|=1,at(e,t,n,i),t.child)}function Ag(e,t,n,r,i){if(bt(n)){var o=!0;dl(t)}else o=!1;if(Pi(t,i),t.stateNode===null)js(e,t),Wy(t,n,r),Tf(t,n,r,i),r=!0;else if(e===null){var a=t.stateNode,l=t.memoizedProps;a.props=l;var s=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=Ht(u):(u=bt(n)?Ur:rt.current,u=Di(t,u));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof a.getSnapshotBeforeUpdate=="function";d||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==r||s!==u)&&Og(t,a,r,u),rr=!1;var m=t.memoizedState;a.state=m,gl(t,r,a,i),s=t.memoizedState,l!==r||m!==s||xt.current||rr?(typeof c=="function"&&(kf(t,n,c,r),s=t.memoizedState),(l=rr||Tg(t,n,l,r,m,s,u))?(d||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),a.props=r,a.state=s,a.context=u,r=l):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Uy(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:Qt(t.type,l),a.props=u,d=t.pendingProps,m=a.context,s=n.contextType,typeof s=="object"&&s!==null?s=Ht(s):(s=bt(n)?Ur:rt.current,s=Di(t,s));var h=n.getDerivedStateFromProps;(c=typeof h=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==d||m!==s)&&Og(t,a,r,s),rr=!1,m=t.memoizedState,a.state=m,gl(t,r,a,i);var g=t.memoizedState;l!==d||m!==g||xt.current||rr?(typeof h=="function"&&(kf(t,n,h,r),g=t.memoizedState),(u=rr||Tg(t,n,u,r,m,g,s)||!1)?(c||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,g,s),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,g,s)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=g),a.props=r,a.state=g,a.context=s,r=u):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return Mf(e,t,n,r,o,i)}function Mf(e,t,n,r,i,o){yx(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return i&&Sg(t,n,!1),Hn(e,t,o);r=t.stateNode,ZC.current=t;var l=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=Li(t,e.child,null,o),t.child=Li(t,null,l,o)):at(e,t,l,o),t.memoizedState=r.state,i&&Sg(t,n,!0),t.child}function xx(e){var t=e.stateNode;t.pendingContext?wg(e,t.pendingContext,t.pendingContext!==t.context):t.context&&wg(e,t.context,!1),lh(e,t.containerInfo)}function Fg(e,t,n,r,i){return Ri(),nh(i),t.flags|=256,at(e,t,n,r),t.child}var If={dehydrated:null,treeContext:null,retryLane:0};function jf(e){return{baseLanes:e,cachePool:null,transitions:null}}function bx(e,t,n){var r=t.pendingProps,i=Se.current,o=!1,a=(t.flags&128)!==0,l;if((l=a)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),he(Se,i&1),e===null)return Ef(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,o?(r=t.mode,o=t.child,a={mode:"hidden",children:a},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=a):o=du(a,r,0,null),e=Vr(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=jf(n),t.memoizedState=If,e):gh(t,a));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return QC(e,t,a,r,l,i,n);if(o){o=r.fallback,a=t.mode,i=e.child,l=i.sibling;var s={mode:"hidden",children:r.children};return!(a&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=xr(i,s),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?o=xr(l,o):(o=Vr(o,a,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,a=e.child.memoizedState,a=a===null?jf(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},o.memoizedState=a,o.childLanes=e.childLanes&~n,t.memoizedState=If,r}return o=e.child,e=o.sibling,r=xr(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function gh(e,t){return t=du({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ns(e,t,n,r){return r!==null&&nh(r),Li(t,e.child,null,n),e=gh(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function QC(e,t,n,r,i,o,a){if(n)return t.flags&256?(t.flags&=-257,r=Bc(Error(V(422))),ns(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=du({mode:"visible",children:r.children},i,0,null),o=Vr(o,i,a,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&Li(t,e.child,null,a),t.child.memoizedState=jf(a),t.memoizedState=If,o);if(!(t.mode&1))return ns(e,t,a,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,o=Error(V(419)),r=Bc(o,r,void 0),ns(e,t,a,r)}if(l=(a&e.childLanes)!==0,yt||l){if(r=Be,r!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|a)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Un(e,i),on(r,e,i,-1))}return Sh(),r=Bc(Error(V(421))),ns(e,t,a,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=dk.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,Pt=mr(i.nextSibling),It=t,be=!0,tn=null,e!==null&&(zt[Vt++]=Rn,zt[Vt++]=Ln,zt[Vt++]=Hr,Rn=e.id,Ln=e.overflow,Hr=t),t=gh(t,r.children),t.flags|=4096,t)}function Ng(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Cf(e.return,t,n)}function Uc(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function wx(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(at(e,t,r.children,n),r=Se.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ng(e,n,t);else if(e.tag===19)Ng(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(he(Se,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&vl(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Uc(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&vl(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Uc(t,!0,n,null,o);break;case"together":Uc(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function js(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Hn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Gr|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(V(153));if(t.child!==null){for(e=t.child,n=xr(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=xr(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function JC(e,t,n){switch(t.tag){case 3:xx(t),Ri();break;case 5:Xy(t);break;case 1:bt(t.type)&&dl(t);break;case 4:lh(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;he(hl,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(he(Se,Se.current&1),t.flags|=128,null):n&t.child.childLanes?bx(e,t,n):(he(Se,Se.current&1),e=Hn(e,t,n),e!==null?e.sibling:null);he(Se,Se.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return wx(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),he(Se,Se.current),r)break;return null;case 22:case 23:return t.lanes=0,vx(e,t,n)}return Hn(e,t,n)}var Sx,$f,_x,Ex;Sx=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};$f=function(){};_x=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Fr(wn.current);var o=null;switch(n){case"input":i=ef(e,i),r=ef(e,r),o=[];break;case"select":i=Ee({},i,{value:void 0}),r=Ee({},r,{value:void 0}),o=[];break;case"textarea":i=rf(e,i),r=rf(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=ul)}af(n,r);var a;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(a in l)l.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Ko.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var s=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&s!==l&&(s!=null||l!=null))if(u==="style")if(l){for(a in l)!l.hasOwnProperty(a)||s&&s.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in s)s.hasOwnProperty(a)&&l[a]!==s[a]&&(n||(n={}),n[a]=s[a])}else n||(o||(o=[]),o.push(u,n)),n=s;else u==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,l=l?l.__html:void 0,s!=null&&l!==s&&(o=o||[]).push(u,s)):u==="children"?typeof s!="string"&&typeof s!="number"||(o=o||[]).push(u,""+s):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Ko.hasOwnProperty(u)?(s!=null&&u==="onScroll"&&me("scroll",e),o||l===s||(o=[])):(o=o||[]).push(u,s))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};Ex=function(e,t,n,r){n!==r&&(t.flags|=4)};function yo(e,t){if(!be)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ze(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function ek(e,t,n){var r=t.pendingProps;switch(th(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ze(t),null;case 1:return bt(t.type)&&cl(),Ze(t),null;case 3:return r=t.stateNode,Ai(),ve(xt),ve(rt),ch(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(es(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,tn!==null&&(Vf(tn),tn=null))),$f(e,t),Ze(t),null;case 5:uh(t);var i=Fr(la.current);if(n=t.type,e!==null&&t.stateNode!=null)_x(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(V(166));return Ze(t),null}if(e=Fr(wn.current),es(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[yn]=t,r[aa]=o,e=(t.mode&1)!==0,n){case"dialog":me("cancel",r),me("close",r);break;case"iframe":case"object":case"embed":me("load",r);break;case"video":case"audio":for(i=0;i<Mo.length;i++)me(Mo[i],r);break;case"source":me("error",r);break;case"img":case"image":case"link":me("error",r),me("load",r);break;case"details":me("toggle",r);break;case"input":Xm(r,o),me("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},me("invalid",r);break;case"textarea":Km(r,o),me("invalid",r)}af(n,o),i=null;for(var a in o)if(o.hasOwnProperty(a)){var l=o[a];a==="children"?typeof l=="string"?r.textContent!==l&&(o.suppressHydrationWarning!==!0&&Ja(r.textContent,l,e),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(o.suppressHydrationWarning!==!0&&Ja(r.textContent,l,e),i=["children",""+l]):Ko.hasOwnProperty(a)&&l!=null&&a==="onScroll"&&me("scroll",r)}switch(n){case"input":Wa(r),qm(r,o,!0);break;case"textarea":Wa(r),Zm(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=ul)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Z1(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[yn]=t,e[aa]=r,Sx(e,t,!1,!1),t.stateNode=e;e:{switch(a=sf(n,r),n){case"dialog":me("cancel",e),me("close",e),i=r;break;case"iframe":case"object":case"embed":me("load",e),i=r;break;case"video":case"audio":for(i=0;i<Mo.length;i++)me(Mo[i],e);i=r;break;case"source":me("error",e),i=r;break;case"img":case"image":case"link":me("error",e),me("load",e),i=r;break;case"details":me("toggle",e),i=r;break;case"input":Xm(e,r),i=ef(e,r),me("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=Ee({},r,{value:void 0}),me("invalid",e);break;case"textarea":Km(e,r),i=rf(e,r),me("invalid",e);break;default:i=r}af(n,i),l=i;for(o in l)if(l.hasOwnProperty(o)){var s=l[o];o==="style"?ey(e,s):o==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&Q1(e,s)):o==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&Zo(e,s):typeof s=="number"&&Zo(e,""+s):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Ko.hasOwnProperty(o)?s!=null&&o==="onScroll"&&me("scroll",e):s!=null&&zp(e,o,s,a))}switch(n){case"input":Wa(e),qm(e,r,!1);break;case"textarea":Wa(e),Zm(e);break;case"option":r.value!=null&&e.setAttribute("value",""+wr(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Ci(e,!!r.multiple,o,!1):r.defaultValue!=null&&Ci(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=ul)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ze(t),null;case 6:if(e&&t.stateNode!=null)Ex(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(V(166));if(n=Fr(la.current),Fr(wn.current),es(t)){if(r=t.stateNode,n=t.memoizedProps,r[yn]=t,(o=r.nodeValue!==n)&&(e=It,e!==null))switch(e.tag){case 3:Ja(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ja(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[yn]=t,t.stateNode=r}return Ze(t),null;case 13:if(ve(Se),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(be&&Pt!==null&&t.mode&1&&!(t.flags&128))Vy(),Ri(),t.flags|=98560,o=!1;else if(o=es(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(V(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(V(317));o[yn]=t}else Ri(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ze(t),o=!1}else tn!==null&&(Vf(tn),tn=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Se.current&1?Ae===0&&(Ae=3):Sh())),t.updateQueue!==null&&(t.flags|=4),Ze(t),null);case 4:return Ai(),$f(e,t),e===null&&ia(t.stateNode.containerInfo),Ze(t),null;case 10:return oh(t.type._context),Ze(t),null;case 17:return bt(t.type)&&cl(),Ze(t),null;case 19:if(ve(Se),o=t.memoizedState,o===null)return Ze(t),null;if(r=(t.flags&128)!==0,a=o.rendering,a===null)if(r)yo(o,!1);else{if(Ae!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=vl(e),a!==null){for(t.flags|=128,yo(o,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,a=o.alternate,a===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=a.childLanes,o.lanes=a.lanes,o.child=a.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=a.memoizedProps,o.memoizedState=a.memoizedState,o.updateQueue=a.updateQueue,o.type=a.type,e=a.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return he(Se,Se.current&1|2),t.child}e=e.sibling}o.tail!==null&&Te()>Ni&&(t.flags|=128,r=!0,yo(o,!1),t.lanes=4194304)}else{if(!r)if(e=vl(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),yo(o,!0),o.tail===null&&o.tailMode==="hidden"&&!a.alternate&&!be)return Ze(t),null}else 2*Te()-o.renderingStartTime>Ni&&n!==1073741824&&(t.flags|=128,r=!0,yo(o,!1),t.lanes=4194304);o.isBackwards?(a.sibling=t.child,t.child=a):(n=o.last,n!==null?n.sibling=a:t.child=a,o.last=a)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Te(),t.sibling=null,n=Se.current,he(Se,r?n&1|2:n&1),t):(Ze(t),null);case 22:case 23:return wh(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Tt&1073741824&&(Ze(t),t.subtreeFlags&6&&(t.flags|=8192)):Ze(t),null;case 24:return null;case 25:return null}throw Error(V(156,t.tag))}function tk(e,t){switch(th(t),t.tag){case 1:return bt(t.type)&&cl(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Ai(),ve(xt),ve(rt),ch(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return uh(t),null;case 13:if(ve(Se),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(V(340));Ri()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ve(Se),null;case 4:return Ai(),null;case 10:return oh(t.type._context),null;case 22:case 23:return wh(),null;case 24:return null;default:return null}}var rs=!1,tt=!1,nk=typeof WeakSet=="function"?WeakSet:Set,U=null;function _i(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ce(e,t,r)}else n.current=null}function Df(e,t,n){try{n()}catch(r){Ce(e,t,r)}}var zg=!1;function rk(e,t){if(vf=al,e=Oy(),Jp(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var a=0,l=-1,s=-1,u=0,c=0,d=e,m=null;t:for(;;){for(var h;d!==n||i!==0&&d.nodeType!==3||(l=a+i),d!==o||r!==0&&d.nodeType!==3||(s=a+r),d.nodeType===3&&(a+=d.nodeValue.length),(h=d.firstChild)!==null;)m=d,d=h;for(;;){if(d===e)break t;if(m===n&&++u===i&&(l=a),m===o&&++c===r&&(s=a),(h=d.nextSibling)!==null)break;d=m,m=d.parentNode}d=h}n=l===-1||s===-1?null:{start:l,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(yf={focusedElem:e,selectionRange:n},al=!1,U=t;U!==null;)if(t=U,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,U=e;else for(;U!==null;){t=U;try{var g=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var x=g.memoizedProps,S=g.memoizedState,f=t.stateNode,p=f.getSnapshotBeforeUpdate(t.elementType===t.type?x:Qt(t.type,x),S);f.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var v=t.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(V(163))}}catch(w){Ce(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,U=e;break}U=t.return}return g=zg,zg=!1,g}function Bo(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Df(t,n,o)}i=i.next}while(i!==r)}}function uu(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Rf(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Cx(e){var t=e.alternate;t!==null&&(e.alternate=null,Cx(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[yn],delete t[aa],delete t[wf],delete t[NC],delete t[zC])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function kx(e){return e.tag===5||e.tag===3||e.tag===4}function Vg(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||kx(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Lf(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ul));else if(r!==4&&(e=e.child,e!==null))for(Lf(e,t,n),e=e.sibling;e!==null;)Lf(e,t,n),e=e.sibling}function Af(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Af(e,t,n),e=e.sibling;e!==null;)Af(e,t,n),e=e.sibling}var We=null,Jt=!1;function er(e,t,n){for(n=n.child;n!==null;)Tx(e,t,n),n=n.sibling}function Tx(e,t,n){if(bn&&typeof bn.onCommitFiberUnmount=="function")try{bn.onCommitFiberUnmount(tu,n)}catch{}switch(n.tag){case 5:tt||_i(n,t);case 6:var r=We,i=Jt;We=null,er(e,t,n),We=r,Jt=i,We!==null&&(Jt?(e=We,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):We.removeChild(n.stateNode));break;case 18:We!==null&&(Jt?(e=We,n=n.stateNode,e.nodeType===8?Lc(e.parentNode,n):e.nodeType===1&&Lc(e,n),ta(e)):Lc(We,n.stateNode));break;case 4:r=We,i=Jt,We=n.stateNode.containerInfo,Jt=!0,er(e,t,n),We=r,Jt=i;break;case 0:case 11:case 14:case 15:if(!tt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,a=o.destroy;o=o.tag,a!==void 0&&(o&2||o&4)&&Df(n,t,a),i=i.next}while(i!==r)}er(e,t,n);break;case 1:if(!tt&&(_i(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Ce(n,t,l)}er(e,t,n);break;case 21:er(e,t,n);break;case 22:n.mode&1?(tt=(r=tt)||n.memoizedState!==null,er(e,t,n),tt=r):er(e,t,n);break;default:er(e,t,n)}}function Bg(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new nk),t.forEach(function(r){var i=fk.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function qt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,a=t,l=a;e:for(;l!==null;){switch(l.tag){case 5:We=l.stateNode,Jt=!1;break e;case 3:We=l.stateNode.containerInfo,Jt=!0;break e;case 4:We=l.stateNode.containerInfo,Jt=!0;break e}l=l.return}if(We===null)throw Error(V(160));Tx(o,a,i),We=null,Jt=!1;var s=i.alternate;s!==null&&(s.return=null),i.return=null}catch(u){Ce(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Ox(t,e),t=t.sibling}function Ox(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(qt(t,e),pn(e),r&4){try{Bo(3,e,e.return),uu(3,e)}catch(x){Ce(e,e.return,x)}try{Bo(5,e,e.return)}catch(x){Ce(e,e.return,x)}}break;case 1:qt(t,e),pn(e),r&512&&n!==null&&_i(n,n.return);break;case 5:if(qt(t,e),pn(e),r&512&&n!==null&&_i(n,n.return),e.flags&32){var i=e.stateNode;try{Zo(i,"")}catch(x){Ce(e,e.return,x)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,a=n!==null?n.memoizedProps:o,l=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{l==="input"&&o.type==="radio"&&o.name!=null&&q1(i,o),sf(l,a);var u=sf(l,o);for(a=0;a<s.length;a+=2){var c=s[a],d=s[a+1];c==="style"?ey(i,d):c==="dangerouslySetInnerHTML"?Q1(i,d):c==="children"?Zo(i,d):zp(i,c,d,u)}switch(l){case"input":tf(i,o);break;case"textarea":K1(i,o);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var h=o.value;h!=null?Ci(i,!!o.multiple,h,!1):m!==!!o.multiple&&(o.defaultValue!=null?Ci(i,!!o.multiple,o.defaultValue,!0):Ci(i,!!o.multiple,o.multiple?[]:"",!1))}i[aa]=o}catch(x){Ce(e,e.return,x)}}break;case 6:if(qt(t,e),pn(e),r&4){if(e.stateNode===null)throw Error(V(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(x){Ce(e,e.return,x)}}break;case 3:if(qt(t,e),pn(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ta(t.containerInfo)}catch(x){Ce(e,e.return,x)}break;case 4:qt(t,e),pn(e);break;case 13:qt(t,e),pn(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(xh=Te())),r&4&&Bg(e);break;case 22:if(c=n!==null&&n.memoizedState!==null,e.mode&1?(tt=(u=tt)||c,qt(t,e),tt=u):qt(t,e),pn(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!c&&e.mode&1)for(U=e,c=e.child;c!==null;){for(d=U=c;U!==null;){switch(m=U,h=m.child,m.tag){case 0:case 11:case 14:case 15:Bo(4,m,m.return);break;case 1:_i(m,m.return);var g=m.stateNode;if(typeof g.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,g.props=t.memoizedProps,g.state=t.memoizedState,g.componentWillUnmount()}catch(x){Ce(r,n,x)}}break;case 5:_i(m,m.return);break;case 22:if(m.memoizedState!==null){Hg(d);continue}}h!==null?(h.return=m,U=h):Hg(d)}c=c.sibling}e:for(c=null,d=e;;){if(d.tag===5){if(c===null){c=d;try{i=d.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(l=d.stateNode,s=d.memoizedProps.style,a=s!=null&&s.hasOwnProperty("display")?s.display:null,l.style.display=J1("display",a))}catch(x){Ce(e,e.return,x)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(x){Ce(e,e.return,x)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:qt(t,e),pn(e),r&4&&Bg(e);break;case 21:break;default:qt(t,e),pn(e)}}function pn(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(kx(n)){var r=n;break e}n=n.return}throw Error(V(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Zo(i,""),r.flags&=-33);var o=Vg(e);Af(e,o,i);break;case 3:case 4:var a=r.stateNode.containerInfo,l=Vg(e);Lf(e,l,a);break;default:throw Error(V(161))}}catch(s){Ce(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function ik(e,t,n){U=e,Px(e)}function Px(e,t,n){for(var r=(e.mode&1)!==0;U!==null;){var i=U,o=i.child;if(i.tag===22&&r){var a=i.memoizedState!==null||rs;if(!a){var l=i.alternate,s=l!==null&&l.memoizedState!==null||tt;l=rs;var u=tt;if(rs=a,(tt=s)&&!u)for(U=i;U!==null;)a=U,s=a.child,a.tag===22&&a.memoizedState!==null?Wg(i):s!==null?(s.return=a,U=s):Wg(i);for(;o!==null;)U=o,Px(o),o=o.sibling;U=i,rs=l,tt=u}Ug(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,U=o):Ug(e)}}function Ug(e){for(;U!==null;){var t=U;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:tt||uu(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!tt)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Qt(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&kg(t,o,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}kg(t,a,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&ta(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(V(163))}tt||t.flags&512&&Rf(t)}catch(m){Ce(t,t.return,m)}}if(t===e){U=null;break}if(n=t.sibling,n!==null){n.return=t.return,U=n;break}U=t.return}}function Hg(e){for(;U!==null;){var t=U;if(t===e){U=null;break}var n=t.sibling;if(n!==null){n.return=t.return,U=n;break}U=t.return}}function Wg(e){for(;U!==null;){var t=U;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{uu(4,t)}catch(s){Ce(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(s){Ce(t,i,s)}}var o=t.return;try{Rf(t)}catch(s){Ce(t,o,s)}break;case 5:var a=t.return;try{Rf(t)}catch(s){Ce(t,a,s)}}}catch(s){Ce(t,t.return,s)}if(t===e){U=null;break}var l=t.sibling;if(l!==null){l.return=t.return,U=l;break}U=t.return}}var ok=Math.ceil,bl=qn.ReactCurrentDispatcher,vh=qn.ReactCurrentOwner,Ut=qn.ReactCurrentBatchConfig,ae=0,Be=null,Ie=null,Ye=0,Tt=0,Ei=Cr(0),Ae=0,fa=null,Gr=0,cu=0,yh=0,Uo=null,vt=null,xh=0,Ni=1/0,Pn=null,wl=!1,Ff=null,vr=null,is=!1,lr=null,Sl=0,Ho=0,Nf=null,$s=-1,Ds=0;function lt(){return ae&6?Te():$s!==-1?$s:$s=Te()}function yr(e){return e.mode&1?ae&2&&Ye!==0?Ye&-Ye:BC.transition!==null?(Ds===0&&(Ds=fy()),Ds):(e=fe,e!==0||(e=window.event,e=e===void 0?16:xy(e.type)),e):1}function on(e,t,n,r){if(50<Ho)throw Ho=0,Nf=null,Error(V(185));ka(e,n,r),(!(ae&2)||e!==Be)&&(e===Be&&(!(ae&2)&&(cu|=n),Ae===4&&or(e,Ye)),wt(e,r),n===1&&ae===0&&!(t.mode&1)&&(Ni=Te()+500,au&&kr()))}function wt(e,t){var n=e.callbackNode;B2(e,t);var r=ol(e,e===Be?Ye:0);if(r===0)n!==null&&eg(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&eg(n),t===1)e.tag===0?VC(Gg.bind(null,e)):Fy(Gg.bind(null,e)),AC(function(){!(ae&6)&&kr()}),n=null;else{switch(py(r)){case 1:n=Wp;break;case 4:n=cy;break;case 16:n=il;break;case 536870912:n=dy;break;default:n=il}n=Ax(n,Mx.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Mx(e,t){if($s=-1,Ds=0,ae&6)throw Error(V(327));var n=e.callbackNode;if(Mi()&&e.callbackNode!==n)return null;var r=ol(e,e===Be?Ye:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=_l(e,r);else{t=r;var i=ae;ae|=2;var o=jx();(Be!==e||Ye!==t)&&(Pn=null,Ni=Te()+500,zr(e,t));do try{lk();break}catch(l){Ix(e,l)}while(1);ih(),bl.current=o,ae=i,Ie!==null?t=0:(Be=null,Ye=0,t=Ae)}if(t!==0){if(t===2&&(i=ff(e),i!==0&&(r=i,t=zf(e,i))),t===1)throw n=fa,zr(e,0),or(e,r),wt(e,Te()),n;if(t===6)or(e,r);else{if(i=e.current.alternate,!(r&30)&&!ak(i)&&(t=_l(e,r),t===2&&(o=ff(e),o!==0&&(r=o,t=zf(e,o))),t===1))throw n=fa,zr(e,0),or(e,r),wt(e,Te()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(V(345));case 2:Ir(e,vt,Pn);break;case 3:if(or(e,r),(r&130023424)===r&&(t=xh+500-Te(),10<t)){if(ol(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){lt(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=bf(Ir.bind(null,e,vt,Pn),t);break}Ir(e,vt,Pn);break;case 4:if(or(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var a=31-rn(r);o=1<<a,a=t[a],a>i&&(i=a),r&=~o}if(r=i,r=Te()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*ok(r/1960))-r,10<r){e.timeoutHandle=bf(Ir.bind(null,e,vt,Pn),r);break}Ir(e,vt,Pn);break;case 5:Ir(e,vt,Pn);break;default:throw Error(V(329))}}}return wt(e,Te()),e.callbackNode===n?Mx.bind(null,e):null}function zf(e,t){var n=Uo;return e.current.memoizedState.isDehydrated&&(zr(e,t).flags|=256),e=_l(e,t),e!==2&&(t=vt,vt=n,t!==null&&Vf(t)),e}function Vf(e){vt===null?vt=e:vt.push.apply(vt,e)}function ak(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!ln(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function or(e,t){for(t&=~yh,t&=~cu,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-rn(t),r=1<<n;e[n]=-1,t&=~r}}function Gg(e){if(ae&6)throw Error(V(327));Mi();var t=ol(e,0);if(!(t&1))return wt(e,Te()),null;var n=_l(e,t);if(e.tag!==0&&n===2){var r=ff(e);r!==0&&(t=r,n=zf(e,r))}if(n===1)throw n=fa,zr(e,0),or(e,t),wt(e,Te()),n;if(n===6)throw Error(V(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Ir(e,vt,Pn),wt(e,Te()),null}function bh(e,t){var n=ae;ae|=1;try{return e(t)}finally{ae=n,ae===0&&(Ni=Te()+500,au&&kr())}}function Yr(e){lr!==null&&lr.tag===0&&!(ae&6)&&Mi();var t=ae;ae|=1;var n=Ut.transition,r=fe;try{if(Ut.transition=null,fe=1,e)return e()}finally{fe=r,Ut.transition=n,ae=t,!(ae&6)&&kr()}}function wh(){Tt=Ei.current,ve(Ei)}function zr(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,LC(n)),Ie!==null)for(n=Ie.return;n!==null;){var r=n;switch(th(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&cl();break;case 3:Ai(),ve(xt),ve(rt),ch();break;case 5:uh(r);break;case 4:Ai();break;case 13:ve(Se);break;case 19:ve(Se);break;case 10:oh(r.type._context);break;case 22:case 23:wh()}n=n.return}if(Be=e,Ie=e=xr(e.current,null),Ye=Tt=t,Ae=0,fa=null,yh=cu=Gr=0,vt=Uo=null,Ar!==null){for(t=0;t<Ar.length;t++)if(n=Ar[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var a=o.next;o.next=i,r.next=a}n.pending=r}Ar=null}return e}function Ix(e,t){do{var n=Ie;try{if(ih(),Ms.current=xl,yl){for(var r=_e.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}yl=!1}if(Wr=0,Ve=Re=_e=null,Vo=!1,ua=0,vh.current=null,n===null||n.return===null){Ae=1,fa=t,Ie=null;break}e:{var o=e,a=n.return,l=n,s=t;if(t=Ye,l.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var u=s,c=l,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var m=c.alternate;m?(c.updateQueue=m.updateQueue,c.memoizedState=m.memoizedState,c.lanes=m.lanes):(c.updateQueue=null,c.memoizedState=null)}var h=$g(a);if(h!==null){h.flags&=-257,Dg(h,a,l,o,t),h.mode&1&&jg(o,u,t),t=h,s=u;var g=t.updateQueue;if(g===null){var x=new Set;x.add(s),t.updateQueue=x}else g.add(s);break e}else{if(!(t&1)){jg(o,u,t),Sh();break e}s=Error(V(426))}}else if(be&&l.mode&1){var S=$g(a);if(S!==null){!(S.flags&65536)&&(S.flags|=256),Dg(S,a,l,o,t),nh(Fi(s,l));break e}}o=s=Fi(s,l),Ae!==4&&(Ae=2),Uo===null?Uo=[o]:Uo.push(o),o=a;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var f=hx(o,s,t);Cg(o,f);break e;case 1:l=s;var p=o.type,v=o.stateNode;if(!(o.flags&128)&&(typeof p.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(vr===null||!vr.has(v)))){o.flags|=65536,t&=-t,o.lanes|=t;var w=mx(o,l,t);Cg(o,w);break e}}o=o.return}while(o!==null)}Dx(n)}catch(C){t=C,Ie===n&&n!==null&&(Ie=n=n.return);continue}break}while(1)}function jx(){var e=bl.current;return bl.current=xl,e===null?xl:e}function Sh(){(Ae===0||Ae===3||Ae===2)&&(Ae=4),Be===null||!(Gr&268435455)&&!(cu&268435455)||or(Be,Ye)}function _l(e,t){var n=ae;ae|=2;var r=jx();(Be!==e||Ye!==t)&&(Pn=null,zr(e,t));do try{sk();break}catch(i){Ix(e,i)}while(1);if(ih(),ae=n,bl.current=r,Ie!==null)throw Error(V(261));return Be=null,Ye=0,Ae}function sk(){for(;Ie!==null;)$x(Ie)}function lk(){for(;Ie!==null&&!$2();)$x(Ie)}function $x(e){var t=Lx(e.alternate,e,Tt);e.memoizedProps=e.pendingProps,t===null?Dx(e):Ie=t,vh.current=null}function Dx(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=tk(n,t),n!==null){n.flags&=32767,Ie=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ae=6,Ie=null;return}}else if(n=ek(n,t,Tt),n!==null){Ie=n;return}if(t=t.sibling,t!==null){Ie=t;return}Ie=t=e}while(t!==null);Ae===0&&(Ae=5)}function Ir(e,t,n){var r=fe,i=Ut.transition;try{Ut.transition=null,fe=1,uk(e,t,n,r)}finally{Ut.transition=i,fe=r}return null}function uk(e,t,n,r){do Mi();while(lr!==null);if(ae&6)throw Error(V(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(V(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(U2(e,o),e===Be&&(Ie=Be=null,Ye=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||is||(is=!0,Ax(il,function(){return Mi(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Ut.transition,Ut.transition=null;var a=fe;fe=1;var l=ae;ae|=4,vh.current=null,rk(e,n),Ox(n,e),PC(yf),al=!!vf,yf=vf=null,e.current=n,ik(n),D2(),ae=l,fe=a,Ut.transition=o}else e.current=n;if(is&&(is=!1,lr=e,Sl=i),o=e.pendingLanes,o===0&&(vr=null),A2(n.stateNode),wt(e,Te()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(wl)throw wl=!1,e=Ff,Ff=null,e;return Sl&1&&e.tag!==0&&Mi(),o=e.pendingLanes,o&1?e===Nf?Ho++:(Ho=0,Nf=e):Ho=0,kr(),null}function Mi(){if(lr!==null){var e=py(Sl),t=Ut.transition,n=fe;try{if(Ut.transition=null,fe=16>e?16:e,lr===null)var r=!1;else{if(e=lr,lr=null,Sl=0,ae&6)throw Error(V(331));var i=ae;for(ae|=4,U=e.current;U!==null;){var o=U,a=o.child;if(U.flags&16){var l=o.deletions;if(l!==null){for(var s=0;s<l.length;s++){var u=l[s];for(U=u;U!==null;){var c=U;switch(c.tag){case 0:case 11:case 15:Bo(8,c,o)}var d=c.child;if(d!==null)d.return=c,U=d;else for(;U!==null;){c=U;var m=c.sibling,h=c.return;if(Cx(c),c===u){U=null;break}if(m!==null){m.return=h,U=m;break}U=h}}}var g=o.alternate;if(g!==null){var x=g.child;if(x!==null){g.child=null;do{var S=x.sibling;x.sibling=null,x=S}while(x!==null)}}U=o}}if(o.subtreeFlags&2064&&a!==null)a.return=o,U=a;else e:for(;U!==null;){if(o=U,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Bo(9,o,o.return)}var f=o.sibling;if(f!==null){f.return=o.return,U=f;break e}U=o.return}}var p=e.current;for(U=p;U!==null;){a=U;var v=a.child;if(a.subtreeFlags&2064&&v!==null)v.return=a,U=v;else e:for(a=p;U!==null;){if(l=U,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:uu(9,l)}}catch(C){Ce(l,l.return,C)}if(l===a){U=null;break e}var w=l.sibling;if(w!==null){w.return=l.return,U=w;break e}U=l.return}}if(ae=i,kr(),bn&&typeof bn.onPostCommitFiberRoot=="function")try{bn.onPostCommitFiberRoot(tu,e)}catch{}r=!0}return r}finally{fe=n,Ut.transition=t}}return!1}function Yg(e,t,n){t=Fi(n,t),t=hx(e,t,1),e=gr(e,t,1),t=lt(),e!==null&&(ka(e,1,t),wt(e,t))}function Ce(e,t,n){if(e.tag===3)Yg(e,e,n);else for(;t!==null;){if(t.tag===3){Yg(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(vr===null||!vr.has(r))){e=Fi(n,e),e=mx(t,e,1),t=gr(t,e,1),e=lt(),t!==null&&(ka(t,1,e),wt(t,e));break}}t=t.return}}function ck(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=lt(),e.pingedLanes|=e.suspendedLanes&n,Be===e&&(Ye&n)===n&&(Ae===4||Ae===3&&(Ye&130023424)===Ye&&500>Te()-xh?zr(e,0):yh|=n),wt(e,t)}function Rx(e,t){t===0&&(e.mode&1?(t=Xa,Xa<<=1,!(Xa&130023424)&&(Xa=4194304)):t=1);var n=lt();e=Un(e,t),e!==null&&(ka(e,t,n),wt(e,n))}function dk(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Rx(e,n)}function fk(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(V(314))}r!==null&&r.delete(t),Rx(e,n)}var Lx;Lx=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||xt.current)yt=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return yt=!1,JC(e,t,n);yt=!!(e.flags&131072)}else yt=!1,be&&t.flags&1048576&&Ny(t,pl,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;js(e,t),e=t.pendingProps;var i=Di(t,rt.current);Pi(t,n),i=fh(null,t,r,e,i,n);var o=ph();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,bt(r)?(o=!0,dl(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,sh(t),i.updater=su,t.stateNode=i,i._reactInternals=t,Tf(t,r,e,n),t=Mf(null,t,r,!0,o,n)):(t.tag=0,be&&o&&eh(t),at(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(js(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=hk(r),e=Qt(r,e),i){case 0:t=Pf(null,t,r,e,n);break e;case 1:t=Ag(null,t,r,e,n);break e;case 11:t=Rg(null,t,r,e,n);break e;case 14:t=Lg(null,t,r,Qt(r.type,e),n);break e}throw Error(V(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Qt(r,i),Pf(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Qt(r,i),Ag(e,t,r,i,n);case 3:e:{if(xx(t),e===null)throw Error(V(387));r=t.pendingProps,o=t.memoizedState,i=o.element,Uy(e,t),gl(t,r,null,n);var a=t.memoizedState;if(r=a.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Fi(Error(V(423)),t),t=Fg(e,t,r,n,i);break e}else if(r!==i){i=Fi(Error(V(424)),t),t=Fg(e,t,r,n,i);break e}else for(Pt=mr(t.stateNode.containerInfo.firstChild),It=t,be=!0,tn=null,n=Yy(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ri(),r===i){t=Hn(e,t,n);break e}at(e,t,r,n)}t=t.child}return t;case 5:return Xy(t),e===null&&Ef(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,a=i.children,xf(r,i)?a=null:o!==null&&xf(r,o)&&(t.flags|=32),yx(e,t),at(e,t,a,n),t.child;case 6:return e===null&&Ef(t),null;case 13:return bx(e,t,n);case 4:return lh(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Li(t,null,r,n):at(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Qt(r,i),Rg(e,t,r,i,n);case 7:return at(e,t,t.pendingProps,n),t.child;case 8:return at(e,t,t.pendingProps.children,n),t.child;case 12:return at(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,a=i.value,he(hl,r._currentValue),r._currentValue=a,o!==null)if(ln(o.value,a)){if(o.children===i.children&&!xt.current){t=Hn(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var l=o.dependencies;if(l!==null){a=o.child;for(var s=l.firstContext;s!==null;){if(s.context===r){if(o.tag===1){s=An(-1,n&-n),s.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?s.next=s:(s.next=c.next,c.next=s),u.pending=s}}o.lanes|=n,s=o.alternate,s!==null&&(s.lanes|=n),Cf(o.return,n,t),l.lanes|=n;break}s=s.next}}else if(o.tag===10)a=o.type===t.type?null:o.child;else if(o.tag===18){if(a=o.return,a===null)throw Error(V(341));a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),Cf(a,n,t),a=o.sibling}else a=o.child;if(a!==null)a.return=o;else for(a=o;a!==null;){if(a===t){a=null;break}if(o=a.sibling,o!==null){o.return=a.return,a=o;break}a=a.return}o=a}at(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Pi(t,n),i=Ht(i),r=r(i),t.flags|=1,at(e,t,r,n),t.child;case 14:return r=t.type,i=Qt(r,t.pendingProps),i=Qt(r.type,i),Lg(e,t,r,i,n);case 15:return gx(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Qt(r,i),js(e,t),t.tag=1,bt(r)?(e=!0,dl(t)):e=!1,Pi(t,n),Wy(t,r,i),Tf(t,r,i,n),Mf(null,t,r,!0,e,n);case 19:return wx(e,t,n);case 22:return vx(e,t,n)}throw Error(V(156,t.tag))};function Ax(e,t){return uy(e,t)}function pk(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Bt(e,t,n,r){return new pk(e,t,n,r)}function _h(e){return e=e.prototype,!(!e||!e.isReactComponent)}function hk(e){if(typeof e=="function")return _h(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Bp)return 11;if(e===Up)return 14}return 2}function xr(e,t){var n=e.alternate;return n===null?(n=Bt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Rs(e,t,n,r,i,o){var a=2;if(r=e,typeof e=="function")_h(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case hi:return Vr(n.children,i,o,t);case Vp:a=8,i|=8;break;case Kd:return e=Bt(12,n,t,i|2),e.elementType=Kd,e.lanes=o,e;case Zd:return e=Bt(13,n,t,i),e.elementType=Zd,e.lanes=o,e;case Qd:return e=Bt(19,n,t,i),e.elementType=Qd,e.lanes=o,e;case G1:return du(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case H1:a=10;break e;case W1:a=9;break e;case Bp:a=11;break e;case Up:a=14;break e;case nr:a=16,r=null;break e}throw Error(V(130,e==null?e:typeof e,""))}return t=Bt(a,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function Vr(e,t,n,r){return e=Bt(7,e,r,t),e.lanes=n,e}function du(e,t,n,r){return e=Bt(22,e,r,t),e.elementType=G1,e.lanes=n,e.stateNode={isHidden:!1},e}function Hc(e,t,n){return e=Bt(6,e,null,t),e.lanes=n,e}function Wc(e,t,n){return t=Bt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function mk(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Cc(0),this.expirationTimes=Cc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Cc(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Eh(e,t,n,r,i,o,a,l,s){return e=new mk(e,t,n,l,s),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Bt(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},sh(o),e}function gk(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:pi,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Fx(e){if(!e)return Sr;e=e._reactInternals;e:{if(ei(e)!==e||e.tag!==1)throw Error(V(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(bt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(V(171))}if(e.tag===1){var n=e.type;if(bt(n))return Ay(e,n,t)}return t}function Nx(e,t,n,r,i,o,a,l,s){return e=Eh(n,r,!0,e,i,o,a,l,s),e.context=Fx(null),n=e.current,r=lt(),i=yr(n),o=An(r,i),o.callback=t??null,gr(n,o,i),e.current.lanes=i,ka(e,i,r),wt(e,r),e}function fu(e,t,n,r){var i=t.current,o=lt(),a=yr(i);return n=Fx(n),t.context===null?t.context=n:t.pendingContext=n,t=An(o,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=gr(i,t,a),e!==null&&(on(e,i,a,o),Ps(e,i,a)),a}function El(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Xg(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Ch(e,t){Xg(e,t),(e=e.alternate)&&Xg(e,t)}function vk(){return null}var zx=typeof reportError=="function"?reportError:function(e){console.error(e)};function kh(e){this._internalRoot=e}pu.prototype.render=kh.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(V(409));fu(e,t,null,null)};pu.prototype.unmount=kh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Yr(function(){fu(null,e,null,null)}),t[Bn]=null}};function pu(e){this._internalRoot=e}pu.prototype.unstable_scheduleHydration=function(e){if(e){var t=gy();e={blockedOn:null,target:e,priority:t};for(var n=0;n<ir.length&&t!==0&&t<ir[n].priority;n++);ir.splice(n,0,e),n===0&&yy(e)}};function Th(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function hu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function qg(){}function yk(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=El(a);o.call(u)}}var a=Nx(t,r,e,0,null,!1,!1,"",qg);return e._reactRootContainer=a,e[Bn]=a.current,ia(e.nodeType===8?e.parentNode:e),Yr(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=El(s);l.call(u)}}var s=Eh(e,0,!1,null,null,!1,!1,"",qg);return e._reactRootContainer=s,e[Bn]=s.current,ia(e.nodeType===8?e.parentNode:e),Yr(function(){fu(t,s,n,r)}),s}function mu(e,t,n,r,i){var o=n._reactRootContainer;if(o){var a=o;if(typeof i=="function"){var l=i;i=function(){var s=El(a);l.call(s)}}fu(t,a,e,i)}else a=yk(n,t,e,i,r);return El(a)}hy=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Po(t.pendingLanes);n!==0&&(Gp(t,n|1),wt(t,Te()),!(ae&6)&&(Ni=Te()+500,kr()))}break;case 13:Yr(function(){var r=Un(e,1);if(r!==null){var i=lt();on(r,e,1,i)}}),Ch(e,1)}};Yp=function(e){if(e.tag===13){var t=Un(e,134217728);if(t!==null){var n=lt();on(t,e,134217728,n)}Ch(e,134217728)}};my=function(e){if(e.tag===13){var t=yr(e),n=Un(e,t);if(n!==null){var r=lt();on(n,e,t,r)}Ch(e,t)}};gy=function(){return fe};vy=function(e,t){var n=fe;try{return fe=e,t()}finally{fe=n}};uf=function(e,t,n){switch(t){case"input":if(tf(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=ou(r);if(!i)throw Error(V(90));X1(r),tf(r,i)}}}break;case"textarea":K1(e,n);break;case"select":t=n.value,t!=null&&Ci(e,!!n.multiple,t,!1)}};ry=bh;iy=Yr;var xk={usingClientEntryPoint:!1,Events:[Oa,yi,ou,ty,ny,bh]},xo={findFiberByHostInstance:Lr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},bk={bundleType:xo.bundleType,version:xo.version,rendererPackageName:xo.rendererPackageName,rendererConfig:xo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:qn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=sy(e),e===null?null:e.stateNode},findFiberByHostInstance:xo.findFiberByHostInstance||vk,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var os=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!os.isDisabled&&os.supportsFiber)try{tu=os.inject(bk),bn=os}catch{}}Rt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=xk;Rt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Th(t))throw Error(V(200));return gk(e,t,null,n)};Rt.createRoot=function(e,t){if(!Th(e))throw Error(V(299));var n=!1,r="",i=zx;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Eh(e,1,!1,null,null,n,!1,r,i),e[Bn]=t.current,ia(e.nodeType===8?e.parentNode:e),new kh(t)};Rt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(V(188)):(e=Object.keys(e).join(","),Error(V(268,e)));return e=sy(t),e=e===null?null:e.stateNode,e};Rt.flushSync=function(e){return Yr(e)};Rt.hydrate=function(e,t,n){if(!hu(t))throw Error(V(200));return mu(null,e,t,!0,n)};Rt.hydrateRoot=function(e,t,n){if(!Th(e))throw Error(V(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",a=zx;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=Nx(t,null,e,1,n??null,i,!1,o,a),e[Bn]=t.current,ia(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new pu(t)};Rt.render=function(e,t,n){if(!hu(t))throw Error(V(200));return mu(null,e,t,!1,n)};Rt.unmountComponentAtNode=function(e){if(!hu(e))throw Error(V(40));return e._reactRootContainer?(Yr(function(){mu(null,null,e,!1,function(){e._reactRootContainer=null,e[Bn]=null})}),!0):!1};Rt.unstable_batchedUpdates=bh;Rt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!hu(n))throw Error(V(200));if(e==null||e._reactInternals===void 0)throw Error(V(38));return mu(e,t,n,!1,r)};Rt.version="18.2.0-next-9e3b772b8-20220608";function Vx(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Vx)}catch(e){console.error(e)}}Vx(),N1.exports=Rt;var gu=N1.exports,Kg=gu;Xd.createRoot=Kg.createRoot,Xd.hydrateRoot=Kg.hydrateRoot;var nt=function(){return nt=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},nt.apply(this,arguments)};function pa(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,o;r<i;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))}function wk(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var Sk=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|popover|popoverTarget|popoverTargetAction|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,_k=wk(function(e){return Sk.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),ge="-ms-",Wo="-moz-",le="-webkit-",Bx="comm",vu="rule",Oh="decl",Ek="@import",Ck="@namespace",Ux="@keyframes",kk="@layer",Hx=Math.abs,Ph=String.fromCharCode,Bf=Object.assign;function Tk(e,t){return Le(e,0)^45?(((t<<2^Le(e,0))<<2^Le(e,1))<<2^Le(e,2))<<2^Le(e,3):0}function Wx(e){return e.trim()}function Mn(e,t){return(e=t.exec(e))?e[0]:e}function ee(e,t,n){return e.replace(t,n)}function Ls(e,t,n){return e.indexOf(t,n)}function Le(e,t){return e.charCodeAt(t)|0}function Xr(e,t,n){return e.slice(t,n)}function en(e){return e.length}function Gx(e){return e.length}function Io(e,t){return t.push(e),e}function Ok(e,t){return e.map(t).join("")}function Zg(e,t){return e.filter(function(n){return!Mn(n,t)})}var yu=1,zi=1,Yx=0,Gt=0,Pe=0,eo="";function xu(e,t,n,r,i,o,a,l){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:yu,column:zi,length:a,return:"",siblings:l}}function tr(e,t){return Bf(xu("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function ii(e){for(;e.root;)e=tr(e.root,{children:[e]});Io(e,e.siblings)}function Pk(){return Pe}function Mk(){return Pe=Gt>0?Le(eo,--Gt):0,zi--,Pe===10&&(zi=1,yu--),Pe}function an(){return Pe=Gt<Yx?Le(eo,Gt++):0,zi++,Pe===10&&(zi=1,yu++),Pe}function ur(){return Le(eo,Gt)}function As(){return Gt}function bu(e,t){return Xr(eo,e,t)}function ha(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Ik(e){return yu=zi=1,Yx=en(eo=e),Gt=0,[]}function jk(e){return eo="",e}function Gc(e){return Wx(bu(Gt-1,Uf(e===91?e+2:e===40?e+1:e)))}function $k(e){for(;(Pe=ur())&&Pe<33;)an();return ha(e)>2||ha(Pe)>3?"":" "}function Dk(e,t){for(;--t&&an()&&!(Pe<48||Pe>102||Pe>57&&Pe<65||Pe>70&&Pe<97););return bu(e,As()+(t<6&&ur()==32&&an()==32))}function Uf(e){for(;an();)switch(Pe){case e:return Gt;case 34:case 39:e!==34&&e!==39&&Uf(Pe);break;case 40:e===41&&Uf(e);break;case 92:an();break}return Gt}function Rk(e,t){for(;an()&&e+Pe!==47+10;)if(e+Pe===42+42&&ur()===47)break;return"/*"+bu(t,Gt-1)+"*"+Ph(e===47?e:an())}function Lk(e){for(;!ha(ur());)an();return bu(e,Gt)}function Ak(e){return jk(Fs("",null,null,null,[""],e=Ik(e),0,[0],e))}function Fs(e,t,n,r,i,o,a,l,s){for(var u=0,c=0,d=a,m=0,h=0,g=0,x=1,S=1,f=1,p=0,v="",w=i,C=o,k=r,_=v;S;)switch(g=p,p=an()){case 40:if(g!=108&&Le(_,d-1)==58){Ls(_+=ee(Gc(p),"&","&\f"),"&\f",Hx(u?l[u-1]:0))!=-1&&(f=-1);break}case 34:case 39:case 91:_+=Gc(p);break;case 9:case 10:case 13:case 32:_+=$k(g);break;case 92:_+=Dk(As()-1,7);continue;case 47:switch(ur()){case 42:case 47:Io(Fk(Rk(an(),As()),t,n,s),s),(ha(g||1)==5||ha(ur()||1)==5)&&en(_)&&Xr(_,-1,void 0)!==" "&&(_+=" ");break;default:_+="/"}break;case 123*x:l[u++]=en(_)*f;case 125*x:case 59:case 0:switch(p){case 0:case 125:S=0;case 59+c:f==-1&&(_=ee(_,/\f/g,"")),h>0&&(en(_)-d||x===0&&g===47)&&Io(h>32?Jg(_+";",r,n,d-1,s):Jg(ee(_," ","")+";",r,n,d-2,s),s);break;case 59:_+=";";default:if(Io(k=Qg(_,t,n,u,c,i,l,v,w=[],C=[],d,o),o),p===123)if(c===0)Fs(_,t,k,k,w,o,d,l,C);else{switch(m){case 99:if(Le(_,3)===110)break;case 108:if(Le(_,2)===97)break;default:c=0;case 100:case 109:case 115:}c?Fs(e,k,k,r&&Io(Qg(e,k,k,0,0,i,l,v,i,w=[],d,C),C),i,C,d,l,r?w:C):Fs(_,k,k,k,[""],C,0,l,C)}}u=c=h=0,x=f=1,v=_="",d=a;break;case 58:d=1+en(_),h=g;default:if(x<1){if(p==123)--x;else if(p==125&&x++==0&&Mk()==125)continue}switch(_+=Ph(p),p*x){case 38:f=c>0?1:(_+="\f",-1);break;case 44:l[u++]=(en(_)-1)*f,f=1;break;case 64:ur()===45&&(_+=Gc(an())),m=ur(),c=d=en(v=_+=Lk(As())),p++;break;case 45:g===45&&en(_)==2&&(x=0)}}return o}function Qg(e,t,n,r,i,o,a,l,s,u,c,d){for(var m=i-1,h=i===0?o:[""],g=Gx(h),x=0,S=0,f=0;x<r;++x)for(var p=0,v=Xr(e,m+1,m=Hx(S=a[x])),w=e;p<g;++p)(w=Wx(S>0?h[p]+" "+v:ee(v,/&\f/g,h[p])))&&(s[f++]=w);return xu(e,t,n,i===0?vu:l,s,u,c,d)}function Fk(e,t,n,r){return xu(e,t,n,Bx,Ph(Pk()),Xr(e,2,-2),0,r)}function Jg(e,t,n,r,i){return xu(e,t,n,Oh,Xr(e,0,r),Xr(e,r+1,-1),r,i)}function Xx(e,t,n){switch(Tk(e,t)){case 5103:return le+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return le+e+e;case 4855:return le+e.replace("add","source-over").replace("substract","source-out").replace("intersect","source-in").replace("exclude","xor")+e;case 4789:return Wo+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return le+e+Wo+e+ge+e+e;case 5936:switch(Le(e,t+11)){case 114:return le+e+ge+ee(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return le+e+ge+ee(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return le+e+ge+ee(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return le+e+ge+e+e;case 6165:return le+e+ge+"flex-"+e+e;case 5187:return le+e+ee(e,/(\w+).+(:[^]+)/,le+"box-$1$2"+ge+"flex-$1$2")+e;case 5443:return le+e+ge+"flex-item-"+ee(e,/flex-|-self/g,"")+(Mn(e,/flex-|baseline/)?"":ge+"grid-row-"+ee(e,/flex-|-self/g,""))+e;case 4675:return le+e+ge+"flex-line-pack"+ee(e,/align-content|flex-|-self/g,"")+e;case 5548:return le+e+ge+ee(e,"shrink","negative")+e;case 5292:return le+e+ge+ee(e,"basis","preferred-size")+e;case 6060:return le+"box-"+ee(e,"-grow","")+le+e+ge+ee(e,"grow","positive")+e;case 4554:return le+ee(e,/([^-])(transform)/g,"$1"+le+"$2")+e;case 6187:return ee(ee(ee(e,/(zoom-|grab)/,le+"$1"),/(image-set)/,le+"$1"),e,"")+e;case 5495:case 3959:return ee(e,/(image-set\([^]*)/,le+"$1$`$1");case 4968:return ee(ee(e,/(.+:)(flex-)?(.*)/,le+"box-pack:$3"+ge+"flex-pack:$3"),/space-between/,"justify")+le+e+e;case 4200:if(!Mn(e,/flex-|baseline/))return ge+"grid-column-align"+Xr(e,t)+e;break;case 2592:case 3360:return ge+ee(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,i){return t=i,Mn(r.props,/grid-\w+-end/)})?~Ls(e+(n=n[t].value),"span",0)?e:ge+ee(e,"-start","")+e+ge+"grid-row-span:"+(~Ls(n,"span",0)?Mn(n,/\d+/):+Mn(n,/\d+/)-+Mn(e,/\d+/))+";":ge+ee(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return Mn(r.props,/grid-\w+-start/)})?e:ge+ee(ee(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return ee(e,/(.+)-inline(.+)/,le+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(en(e)-1-t>6)switch(Le(e,t+1)){case 109:if(Le(e,t+4)!==45)break;case 102:return ee(e,/(.+:)(.+)-([^]+)/,"$1"+le+"$2-$3$1"+Wo+(Le(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Ls(e,"stretch",0)?Xx(ee(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return ee(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,o,a,l,s,u){return ge+i+":"+o+u+(a?ge+i+"-span:"+(l?s:+s-+o)+u:"")+e});case 4949:if(Le(e,t+6)===121)return ee(e,":",":"+le)+e;break;case 6444:switch(Le(e,Le(e,14)===45?18:11)){case 120:return ee(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+le+(Le(e,14)===45?"inline-":"")+"box$3$1"+le+"$2$3$1"+ge+"$2box$3")+e;case 100:return ee(e,":",":"+ge)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return ee(e,"scroll-","scroll-snap-")+e}return e}function Cl(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function Nk(e,t,n,r){switch(e.type){case kk:if(e.children.length)break;case Ek:case Ck:case Oh:return e.return=e.return||e.value;case Bx:return"";case Ux:return e.return=e.value+"{"+Cl(e.children,r)+"}";case vu:if(!en(e.value=e.props.join(",")))return""}return en(n=Cl(e.children,r))?e.return=e.value+"{"+n+"}":""}function zk(e){var t=Gx(e);return function(n,r,i,o){for(var a="",l=0;l<t;l++)a+=e[l](n,r,i,o)||"";return a}}function Vk(e){return function(t){t.root||(t=t.return)&&e(t)}}function Bk(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case Oh:e.return=Xx(e.value,e.length,n);return;case Ux:return Cl([tr(e,{value:ee(e.value,"@","@"+le)})],r);case vu:if(e.length)return Ok(n=e.props,function(i){switch(Mn(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":ii(tr(e,{props:[ee(i,/:(read-\w+)/,":"+Wo+"$1")]})),ii(tr(e,{props:[i]})),Bf(e,{props:Zg(n,r)});break;case"::placeholder":ii(tr(e,{props:[ee(i,/:(plac\w+)/,":"+le+"input-$1")]})),ii(tr(e,{props:[ee(i,/:(plac\w+)/,":"+Wo+"$1")]})),ii(tr(e,{props:[ee(i,/:(plac\w+)/,ge+"input-$1")]})),ii(tr(e,{props:[i]})),Bf(e,{props:Zg(n,r)});break}return""})}}var Uk={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Vi=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",qx="active",Kx="data-styled-version",wu="6.3.11",Mh=`/*!sc*/
`,Go=typeof window<"u"&&typeof document<"u",Hk=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY),Wk={};function Ma(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var Ns=new Map,kl=new Map,zs=1,jo=function(e){if(Ns.has(e))return Ns.get(e);for(;kl.has(zs);)zs++;var t=zs++;return Ns.set(e,t),kl.set(t,e),t},Gk=function(e,t){zs=t+1,Ns.set(e,t),kl.set(t,e)},Ih=Object.freeze([]),Bi=Object.freeze({});function Zx(e,t,n){return n===void 0&&(n=Bi),e.theme!==n.theme&&e.theme||t||n.theme}var Qx=new Set(["a","abbr","address","area","article","aside","audio","b","bdi","bdo","blockquote","body","button","br","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","main","map","mark","menu","meter","nav","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","slot","small","span","strong","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","switch","symbol","text","textPath","tspan","use"]),Yk=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Xk=/(^-|-$)/g;function e0(e){return e.replace(Yk,"-").replace(Xk,"")}var qk=/(a)(d)/gi,t0=function(e){return String.fromCharCode(e+(e>25?39:97))};function Hf(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=t0(t%52)+n;return(t0(t%52)+n).replace(qk,"$1-$2")}var Yc,jr=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Jx=function(e){return jr(5381,e)};function eb(e){return Hf(Jx(e)>>>0)}function Kk(e){return e.displayName||e.name||"Component"}function Xc(e){return typeof e=="string"&&!0}var tb=typeof Symbol=="function"&&Symbol.for,nb=tb?Symbol.for("react.memo"):60115,Zk=tb?Symbol.for("react.forward_ref"):60112,Qk={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Jk={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},rb={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},eT=((Yc={})[Zk]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Yc[nb]=rb,Yc);function n0(e){return("type"in(t=e)&&t.type.$$typeof)===nb?rb:"$$typeof"in e?eT[e.$$typeof]:Qk;var t}var tT=Object.defineProperty,nT=Object.getOwnPropertyNames,r0=Object.getOwnPropertySymbols,rT=Object.getOwnPropertyDescriptor,iT=Object.getPrototypeOf,i0=Object.prototype;function ib(e,t,n){if(typeof t!="string"){if(i0){var r=iT(t);r&&r!==i0&&ib(e,r,n)}var i=nT(t);r0&&(i=i.concat(r0(t)));for(var o=n0(e),a=n0(t),l=0;l<i.length;++l){var s=i[l];if(!(s in Jk||n&&n[s]||a&&s in a||o&&s in o)){var u=rT(t,s);try{tT(e,s,u)}catch{}}}}return e}function Ui(e){return typeof e=="function"}function jh(e){return typeof e=="object"&&"styledComponentId"in e}function Nr(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Wf(e,t){return e.join(t||"")}function ma(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Gf(e,t,n){if(n===void 0&&(n=!1),!n&&!ma(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=Gf(e[r],t[r]);else if(ma(t))for(var r in t)e[r]=Gf(e[r],t[r]);return e}function $h(e,t){Object.defineProperty(e,"toString",{value:t})}var oT=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t,this._cGroup=0,this._cIndex=0}return e.prototype.indexOfGroup=function(t){if(t===this._cGroup)return this._cIndex;var n=this._cIndex;if(t>this._cGroup)for(var r=this._cGroup;r<t;r++)n+=this.groupSizes[r];else for(r=this._cGroup-1;r>=t;r--)n-=this.groupSizes[r];return this._cGroup=t,this._cIndex=n,n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,o=i;t>=o;)if((o<<=1)<0)throw Ma(16,"".concat(t));this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var a=i;a<o;a++)this.groupSizes[a]=0}for(var l=this.indexOfGroup(t+1),s=0,u=(a=0,n.length);a<u;a++)this.tag.insertRule(l,n[a])&&(this.groupSizes[t]++,l++,s++);s>0&&this._cGroup>t&&(this._cIndex+=s)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),i=r+n;this.groupSizes[t]=0;for(var o=r;o<i;o++)this.tag.deleteRule(r);n>0&&this._cGroup>t&&(this._cIndex-=n)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],i=this.indexOfGroup(t),o=i+r,a=i;a<o;a++)n+=this.tag.getRule(a)+Mh;return n},e}(),aT="style[".concat(Vi,"][").concat(Kx,'="').concat(wu,'"]'),sT=new RegExp("^".concat(Vi,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),o0=function(e){return typeof ShadowRoot<"u"&&e instanceof ShadowRoot||"host"in e&&e.nodeType===11},Yf=function(e){if(!e)return document;if(o0(e))return e;if("getRootNode"in e){var t=e.getRootNode();if(o0(t))return t}return document},lT=function(e,t,n){for(var r,i=n.split(","),o=0,a=i.length;o<a;o++)(r=i[o])&&e.registerName(t,r)},uT=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(Mh),i=[],o=0,a=r.length;o<a;o++){var l=r[o].trim();if(l){var s=l.match(sT);if(s){var u=0|parseInt(s[1],10),c=s[2];u!==0&&(Gk(c,u),lT(e,c,s[3]),e.getTag().insertRules(u,i)),i.length=0}else i.push(l)}}},qc=function(e){for(var t=Yf(e.options.target).querySelectorAll(aT),n=0,r=t.length;n<r;n++){var i=t[n];i&&i.getAttribute(Vi)!==qx&&(uT(e,i),i.parentNode&&i.parentNode.removeChild(i))}};function cT(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var ob=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(l){var s=Array.from(l.querySelectorAll("style[".concat(Vi,"]")));return s[s.length-1]}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(Vi,qx),r.setAttribute(Kx,wu);var a=cT();return a&&r.setAttribute("nonce",a),n.insertBefore(r,o),r},dT=function(){function e(t){this.element=ob(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){var r;if(n.sheet)return n.sheet;for(var i=(r=n.getRootNode().styleSheets)!==null&&r!==void 0?r:document.styleSheets,o=0,a=i.length;o<a;o++){var l=i[o];if(l.ownerNode===n)return l}throw Ma(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),fT=function(){function e(t){this.element=ob(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),pT=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(t===this.length?this.rules.push(n):this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),a0=Go,hT={isServer:!Go,useCSSOMInjection:!Hk},Tl=function(){function e(t,n,r){t===void 0&&(t=Bi),n===void 0&&(n={});var i=this;this.options=nt(nt({},hT),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&Go&&a0&&(a0=!1,qc(this)),$h(this,function(){return function(o){for(var a=o.getTag(),l=a.length,s="",u=function(d){var m=function(f){return kl.get(f)}(d);if(m===void 0)return"continue";var h=o.names.get(m);if(h===void 0||!h.size)return"continue";var g=a.getGroup(d);if(g.length===0)return"continue";var x=Vi+".g"+d+'[id="'+m+'"]',S="";h.forEach(function(f){f.length>0&&(S+=f+",")}),s+=g+x+'{content:"'+S+'"}'+Mh},c=0;c<l;c++)u(c);return s}(i)})}return e.registerId=function(t){return jo(t)},e.prototype.rehydrate=function(){!this.server&&Go&&qc(this)},e.prototype.reconstructWithOptions=function(t,n){n===void 0&&(n=!0);var r=new e(nt(nt({},this.options),t),this.gs,n&&this.names||void 0);return!this.server&&Go&&t.target!==this.options.target&&Yf(this.options.target)!==Yf(t.target)&&qc(r),r},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new pT(i):r?new dT(i):new fT(i)}(this.options),new oT(t)));var t},e.prototype.hasNameForId=function(t,n){var r,i;return(i=(r=this.names.get(t))===null||r===void 0?void 0:r.has(n))!==null&&i!==void 0&&i},e.prototype.registerName=function(t,n){jo(t);var r=this.names.get(t);r?r.add(n):this.names.set(t,new Set([n]))},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(jo(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(jo(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),mT=/&/g,In=47,$r=42;function s0(e){if(e.indexOf("}")===-1)return!1;for(var t=e.length,n=0,r=0,i=!1,o=0;o<t;o++){var a=e.charCodeAt(o);if(r!==0||i||a!==In||e.charCodeAt(o+1)!==$r)if(i)a===$r&&e.charCodeAt(o+1)===In&&(i=!1,o++);else if(a!==34&&a!==39||o!==0&&e.charCodeAt(o-1)===92){if(r===0){if(a===123)n++;else if(a===125&&--n<0)return!0}}else r===0?r=a:r===a&&(r=0);else i=!0,o++}return n!==0||r!==0}function ab(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=ab(n.children,t)),n})}function gT(e){var t,n,r,i=e===void 0?Bi:e,o=i.options,a=o===void 0?Bi:o,l=i.plugins,s=l===void 0?Ih:l,u=function(g,x,S){return S.startsWith(n)&&S.endsWith(n)&&S.replaceAll(n,"").length>0?".".concat(t):g},c=s.slice();c.push(function(g){g.type===vu&&g.value.includes("&")&&(r||(r=new RegExp("\\".concat(n,"\\b"),"g")),g.props[0]=g.props[0].replace(mT,n).replace(r,u))}),a.prefix&&c.push(Bk),c.push(Nk);var d=[],m=zk(c.concat(Vk(function(g){return d.push(g)}))),h=function(g,x,S,f){x===void 0&&(x=""),S===void 0&&(S=""),f===void 0&&(f="&"),t=f,n=x,r=void 0;var p=function(w){if(!s0(w))return w;for(var C=w.length,k="",_=0,E=0,M=0,I=!1,$=0;$<C;$++){var P=w.charCodeAt($);if(M!==0||I||P!==In||w.charCodeAt($+1)!==$r)if(I)P===$r&&w.charCodeAt($+1)===In&&(I=!1,$++);else if(P!==34&&P!==39||$!==0&&w.charCodeAt($-1)===92){if(M===0)if(P===123)E++;else if(P===125){if(--E<0){for(var j=$+1;j<C;){var L=w.charCodeAt(j);if(L===59||L===10)break;j++}j<C&&w.charCodeAt(j)===59&&j++,E=0,$=j-1,_=j;continue}E===0&&(k+=w.substring(_,$+1),_=$+1)}else P===59&&E===0&&(k+=w.substring(_,$+1),_=$+1)}else M===0?M=P:M===P&&(M=0);else I=!0,$++}if(_<C){var R=w.substring(_);s0(R)||(k+=R)}return k}(function(w){if(w.indexOf("//")===-1)return w;for(var C=w.length,k=[],_=0,E=0,M=0,I=0;E<C;){var $=w.charCodeAt(E);if($!==34&&$!==39||E!==0&&w.charCodeAt(E-1)===92)if(M===0)if($===In&&E+1<C&&w.charCodeAt(E+1)===$r){for(E+=2;E+1<C&&(w.charCodeAt(E)!==$r||w.charCodeAt(E+1)!==In);)E++;E+=2}else if($===40&&E>=3&&(32|w.charCodeAt(E-1))==108&&(32|w.charCodeAt(E-2))==114&&(32|w.charCodeAt(E-3))==117)I=1,E++;else if(I>0)$===41?I--:$===40&&I++,E++;else if($===$r&&E+1<C&&w.charCodeAt(E+1)===In)E>_&&k.push(w.substring(_,E)),_=E+=2;else if($===In&&E+1<C&&w.charCodeAt(E+1)===In){for(E>_&&k.push(w.substring(_,E));E<C&&w.charCodeAt(E)!==10;)E++;_=E}else E++;else E++;else M===0?M=$:M===$&&(M=0),E++}return _===0?w:(_<C&&k.push(w.substring(_)),k.join(""))}(g)),v=Ak(S||x?"".concat(S," ").concat(x," { ").concat(p," }"):p);return a.namespace&&(v=ab(v,a.namespace)),d=[],Cl(v,m),d};return h.hash=s.length?s.reduce(function(g,x){return x.name||Ma(15),jr(g,x.name)},5381).toString():"",h}var vT=new Tl,Xf=gT(),sb=W.createContext({shouldForwardProp:void 0,styleSheet:vT,stylis:Xf});sb.Consumer;W.createContext(void 0);function qf(){return W.useContext(sb)}var yT=function(){function e(t,n){var r=this;this.inject=function(i,o){o===void 0&&(o=Xf);var a=r.name+o.hash;i.hasNameForId(r.id,a)||i.insertRules(r.id,a,o(r.rules,a,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,$h(this,function(){throw Ma(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=Xf),this.name+t.hash},e}();function xT(e,t){return t==null||typeof t=="boolean"||t===""?"":typeof t!="number"||t===0||e in Uk||e.startsWith("--")?String(t).trim():"".concat(t,"px")}var bT=function(e){return e>="A"&&e<="Z"};function l0(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;bT(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var lb=function(e){return e==null||e===!1||e===""},ub=function(e){var t=[];for(var n in e){var r=e[n];e.hasOwnProperty(n)&&!lb(r)&&(Array.isArray(r)&&r.isCss||Ui(r)?t.push("".concat(l0(n),":"),r,";"):ma(r)?t.push.apply(t,pa(pa(["".concat(n," {")],ub(r),!1),["}"],!1)):t.push("".concat(l0(n),": ").concat(xT(n,r),";")))}return t};function br(e,t,n,r,i){if(i===void 0&&(i=[]),typeof e=="string")return e&&i.push(e),i;if(lb(e))return i;if(jh(e))return i.push(".".concat(e.styledComponentId)),i;if(Ui(e)){if(!Ui(a=e)||a.prototype&&a.prototype.isReactComponent||!t)return i.push(e),i;var o=e(t);return br(o,t,n,r,i)}var a;if(e instanceof yT)return n?(e.inject(n,r),i.push(e.getName(r))):i.push(e),i;if(ma(e)){for(var l=ub(e),s=0;s<l.length;s++)i.push(l[s]);return i}if(!Array.isArray(e))return i.push(e.toString()),i;for(s=0;s<e.length;s++)br(e[s],t,n,r,i);return i}function cb(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Ui(n)&&!jh(n))return!1}return!0}var wT=Jx(wu),ST=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&cb(t),this.componentId=n,this.baseHash=jr(wT,n),this.baseStyle=r,Tl.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r).className:"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=Nr(i,this.staticRulesId);else{var o=Wf(br(this.rules,t,n,r)),a=Hf(jr(this.baseHash,o)>>>0);if(!n.hasNameForId(this.componentId,a)){var l=r(o,".".concat(a),void 0,this.componentId);n.insertRules(this.componentId,a,l)}i=Nr(i,a),this.staticRulesId=a}else{for(var s=jr(this.baseHash,r.hash),u="",c=0;c<this.rules.length;c++){var d=this.rules[c];if(typeof d=="string")u+=d;else if(d){var m=Wf(br(d,t,n,r));s=jr(jr(s,String(c)),m),u+=m}}if(u){var h=Hf(s>>>0);if(!n.hasNameForId(this.componentId,h)){var g=r(u,".".concat(h),void 0,this.componentId);n.insertRules(this.componentId,h,g)}i=Nr(i,h)}}return{className:i,css:typeof window>"u"?n.getTag().getGroup(jo(this.componentId)):""}},e}(),Dh=W.createContext(void 0);Dh.Consumer;var Kc={};function _T(e,t,n){var r=jh(e),i=e,o=!Xc(e),a=t.attrs,l=a===void 0?Ih:a,s=t.componentId,u=s===void 0?function(w,C){var k=typeof w!="string"?"sc":e0(w);Kc[k]=(Kc[k]||0)+1;var _="".concat(k,"-").concat(eb(wu+k+Kc[k]));return C?"".concat(C,"-").concat(_):_}(t.displayName,t.parentComponentId):s,c=t.displayName,d=c===void 0?function(w){return Xc(w)?"styled.".concat(w):"Styled(".concat(Kk(w),")")}(e):c,m=t.displayName&&t.componentId?"".concat(e0(t.displayName),"-").concat(t.componentId):t.componentId||u,h=r&&i.attrs?i.attrs.concat(l).filter(Boolean):l,g=t.shouldForwardProp;if(r&&i.shouldForwardProp){var x=i.shouldForwardProp;if(t.shouldForwardProp){var S=t.shouldForwardProp;g=function(w,C){return x(w,C)&&S(w,C)}}else g=x}var f=new ST(n,m,r?i.componentStyle:void 0);function p(w,C){return function(k,_,E){var M=k.attrs,I=k.componentStyle,$=k.defaultProps,P=k.foldedComponentIds,j=k.styledComponentId,L=k.target,R=W.useContext(Dh),F=qf(),A=k.shouldForwardProp||F.shouldForwardProp,O=Zx(_,R,$)||Bi,D=function(K,re,we){for(var qe,Oe=nt(nt({},re),{className:void 0,theme:we}),Xt=0;Xt<K.length;Xt+=1){var Ft=Ui(qe=K[Xt])?qe(Oe):qe;for(var kt in Ft)kt==="className"?Oe.className=Nr(Oe.className,Ft[kt]):kt==="style"?Oe.style=nt(nt({},Oe.style),Ft[kt]):Oe[kt]=Ft[kt]}return"className"in re&&typeof re.className=="string"&&(Oe.className=Nr(Oe.className,re.className)),Oe}(M,_,O),N=D.as||L,B={};for(var z in D)D[z]===void 0||z[0]==="$"||z==="as"||z==="theme"&&D.theme===O||(z==="forwardedAs"?B.as=D.forwardedAs:A&&!A(z,N)||(B[z]=D[z]));var G=function(K,re){var we=qf(),qe=K.generateAndInjectStyles(re,we.styleSheet,we.stylis);return qe}(I,D),Q=G.className,Z=Nr(P,j);return Q&&(Z+=" "+Q),D.className&&(Z+=" "+D.className),B[Xc(N)&&!Qx.has(N)?"class":"className"]=Z,E&&(B.ref=E),b.createElement(N,B)}(v,w,C)}p.displayName=d;var v=W.forwardRef(p);return v.attrs=h,v.componentStyle=f,v.displayName=d,v.shouldForwardProp=g,v.foldedComponentIds=r?Nr(i.foldedComponentIds,i.styledComponentId):"",v.styledComponentId=m,v.target=r?i.target:e,Object.defineProperty(v,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(w){this._foldedDefaultProps=r?function(C){for(var k=[],_=1;_<arguments.length;_++)k[_-1]=arguments[_];for(var E=0,M=k;E<M.length;E++)Gf(C,M[E],!0);return C}({},i.defaultProps,w):w}}),$h(v,function(){return".".concat(v.styledComponentId)}),o&&ib(v,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),v}function u0(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var c0=function(e){return Object.assign(e,{isCss:!0})};function db(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(Ui(e)||ma(e))return c0(br(u0(Ih,pa([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?br(r):c0(br(u0(r,t)))}function Kf(e,t,n){if(n===void 0&&(n=Bi),!t)throw Ma(1,t);var r=function(i){for(var o=[],a=1;a<arguments.length;a++)o[a-1]=arguments[a];return e(t,n,db.apply(void 0,pa([i],o,!1)))};return r.attrs=function(i){return Kf(e,t,nt(nt({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return Kf(e,t,nt(nt({},n),i))},r}var fb=function(e){return Kf(_T,e)},T=fb;Qx.forEach(function(e){T[e]=fb(e)});var ET=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=cb(t),Tl.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,r,i){var o=i(Wf(br(this.rules,n,r,i)),""),a=this.componentId+t;r.insertRules(a,a,o)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,r,i){t>2&&Tl.registerId(this.componentId+t);var o=this.componentId+t;this.isStatic?r.hasNameForId(o,o)||this.createStyles(t,n,r,i):(this.removeStyles(t,r),this.createStyles(t,n,r,i))},e}();function CT(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=db.apply(void 0,pa([e],t,!1)),i="sc-global-".concat(eb(JSON.stringify(r))),o=new ET(r,i),a=new WeakMap,l=function(u){var c=qf(),d=W.useContext(Dh),m=a.get(c.styleSheet);return m===void 0&&(m=c.styleSheet.allocateGSInstance(i),a.set(c.styleSheet,m)),(typeof window>"u"||!c.styleSheet.server)&&s(m,u,c.styleSheet,d,c.stylis),W.useLayoutEffect(function(){return c.styleSheet.server||s(m,u,c.styleSheet,d,c.stylis),function(){var h;o.removeStyles(m,c.styleSheet),h=c.styleSheet.options.target,typeof document<"u"&&(h??document).querySelectorAll('style[data-styled-global="'.concat(i,'"]')).forEach(function(g){return g.remove()})}},[m,u,c.styleSheet,d,c.stylis]),null};function s(u,c,d,m,h){if(o.isStatic)o.renderStyles(u,Wk,d,h);else{var g=nt(nt({},c),{theme:Zx(c,m,l.defaultProps)});o.renderStyles(u,g,d,h)}}return W.memo(l)}const kT=T.div`
position: sticky;
  top: 0;
  z-index: 1000;
      background: radial-gradient(circle at 50% 45%, #5c5149 0%, #4b3c34 35%, #352b25 65%, #1b1412 100%);


`,TT=T.div`
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
`,OT=T.div`
width: 100%;
  display: flex;
      gap: 10px;

  flex-direction: column;
  @media screen and (min-width: 768px) {
    justify-content: space-around;
  }
`,PT=T.div`

  display: flex;
  @media screen and (max-width: 768px) {
    justify-content: space-between;
  }
`,MT=T.div`
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
`;const IT=T($e)`
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
`;const jT=T.svg`
  width: 30px;
  height: 30px;
  fill: var(--white-color);
`,$T=T.button`
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
`;const DT=T.div`
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
`,LT=T.nav`
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
`,AT=T.div`
  margin-top: auto;
  border-top: 1px solid #eee;
  padding-top: 20px;
  font-size: 14px;
  color: #888;
  text-align: center;
`,FT=T.div`
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
`,NT=T.div`
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



`,zT=T.input`
  
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
`,VT=T.button`
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
   
`,BT=T.svg`
  width: 24px;
  height: 24px;
  

`,un="/Didiv/assets/symbol-defs-f1e4efb3.svg",UT=()=>{const[e,t]=b.useState("");return y.jsxs(NT,{children:[y.jsx(zT,{name:"site-search",value:e,onChange:n=>t(n.target.value),placeholder:"Пошук",autoComplete:"off"}),y.jsx(VT,{className:"search-button",children:y.jsx(BT,{children:y.jsx("use",{href:`${un}#icon-search`})})})]})};var pb={exports:{}},hb={};/**
 * @license React
 * use-sync-external-store-with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ia=b;function HT(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var WT=typeof Object.is=="function"?Object.is:HT,GT=Ia.useSyncExternalStore,YT=Ia.useRef,XT=Ia.useEffect,qT=Ia.useMemo,KT=Ia.useDebugValue;hb.useSyncExternalStoreWithSelector=function(e,t,n,r,i){var o=YT(null);if(o.current===null){var a={hasValue:!1,value:null};o.current=a}else a=o.current;o=qT(function(){function s(h){if(!u){if(u=!0,c=h,h=r(h),i!==void 0&&a.hasValue){var g=a.value;if(i(g,h))return d=g}return d=h}if(g=d,WT(c,h))return g;var x=r(h);return i!==void 0&&i(g,x)?(c=h,g):(c=h,d=x)}var u=!1,c,d,m=n===void 0?null:n;return[function(){return s(t())},m===null?void 0:function(){return s(m())}]},[t,n,r,i]);var l=GT(e,o[0],o[1]);return XT(function(){a.hasValue=!0,a.value=l},[l]),KT(l),l};pb.exports=hb;var ZT=pb.exports;function QT(e){e()}function JT(){let e=null,t=null;return{clear(){e=null,t=null},notify(){QT(()=>{let n=e;for(;n;)n.callback(),n=n.next})},get(){const n=[];let r=e;for(;r;)n.push(r),r=r.next;return n},subscribe(n){let r=!0;const i=t={callback:n,next:null,prev:t};return i.prev?i.prev.next=i:e=i,function(){!r||e===null||(r=!1,i.next?i.next.prev=i.prev:t=i.prev,i.prev?i.prev.next=i.next:e=i.next)}}}}var d0={notify(){},get:()=>[]};function eO(e,t){let n,r=d0,i=0,o=!1;function a(x){c();const S=r.subscribe(x);let f=!1;return()=>{f||(f=!0,S(),d())}}function l(){r.notify()}function s(){g.onStateChange&&g.onStateChange()}function u(){return o}function c(){i++,n||(n=t?t.addNestedSub(s):e.subscribe(s),r=JT())}function d(){i--,n&&i===0&&(n(),n=void 0,r.clear(),r=d0)}function m(){o||(o=!0,c())}function h(){o&&(o=!1,d())}const g={addNestedSub:a,notifyNestedSubs:l,handleChangeWrapper:s,isSubscribed:u,trySubscribe:m,tryUnsubscribe:h,getListeners:()=>r};return g}var tO=()=>typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",nO=tO(),rO=()=>typeof navigator<"u"&&navigator.product==="ReactNative",iO=rO(),oO=()=>nO||iO?b.useLayoutEffect:b.useEffect,aO=oO(),Zc=Symbol.for("react-redux-context"),Qc=typeof globalThis<"u"?globalThis:{};function sO(){if(!b.createContext)return{};const e=Qc[Zc]??(Qc[Zc]=new Map);let t=e.get(b.createContext);return t||(t=b.createContext(null),e.set(b.createContext,t)),t}var _r=sO();function lO(e){const{children:t,context:n,serverState:r,store:i}=e,o=b.useMemo(()=>{const s=eO(i);return{store:i,subscription:s,getServerState:r?()=>r:void 0}},[i,r]),a=b.useMemo(()=>i.getState(),[i]);aO(()=>{const{subscription:s}=o;return s.onStateChange=s.notifyNestedSubs,s.trySubscribe(),a!==i.getState()&&s.notifyNestedSubs(),()=>{s.tryUnsubscribe(),s.onStateChange=void 0}},[o,a]);const l=n||_r;return b.createElement(l.Provider,{value:o},t)}var uO=lO;function Rh(e=_r){return function(){return b.useContext(e)}}var mb=Rh();function gb(e=_r){const t=e===_r?mb:Rh(e),n=()=>{const{store:r}=t();return r};return Object.assign(n,{withTypes:()=>n}),n}var cO=gb();function dO(e=_r){const t=e===_r?cO:gb(e),n=()=>t().dispatch;return Object.assign(n,{withTypes:()=>n}),n}var to=dO(),fO=(e,t)=>e===t;function pO(e=_r){const t=e===_r?mb:Rh(e),n=(r,i={})=>{const{equalityFn:o=fO}=typeof i=="function"?{equalityFn:i}:i,a=t(),{store:l,subscription:s,getServerState:u}=a;b.useRef(!0);const c=b.useCallback({[r.name](m){return r(m)}}[r.name],[r]),d=ZT.useSyncExternalStoreWithSelector(s.addNestedSub,l.getState,u||l.getState,c,o);return b.useDebugValue(d),d};return Object.assign(n,{withTypes:()=>n}),n}var Fn=pO();const hO=T($e)`
      display: flex;
    align-items: center;
    align-content: center;
    justify-content: center;
    
    @media screen and (min-width: 768px) {
   order: 2;
  margin-right: 10px;
  
  }
       
`,mO=T.svg`
  width: 30px;
  height: 30px;
 fill: var(--white-color);
`,gO=T.div`

width:30px;
height:30px;

  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 28px; 
  cursor: pointer;
`,vO=T.div`
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
`,yO=({onClick:e})=>{const t=Fn(n=>n.cart.items.length);return y.jsx(hO,{to:"/cart",children:y.jsxs(gO,{onClick:e,children:[y.jsx(mO,{children:y.jsx("use",{href:`${un}#icon-cart`})}),t>0&&y.jsx(vO,{children:t})]})})},xO=T.nav`
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
`,bO=()=>y.jsxs(xO,{children:[y.jsx(ss,{to:"/",children:"Головна"}),y.jsx(ss,{to:"/about",children:"Про нас"}),y.jsx(ss,{to:"/catalog",children:"Каталог"}),y.jsx(ss,{to:"/contacts",children:"Контакти"})]}),wO=T.svg`
  width: 24px;
  height: 24px;
  fill: var(--white-color);
`,SO=T($e)`
      display: flex;
    align-items: center;
    align-content: center;
    justify-content: center;
    
    @media screen and (min-width: 768px) {
   order: 2;
 
  }
       
`,_O=T.div`

width:30px;
height:30px;

  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 28px; /* розмір іконки */
  cursor: pointer;
`,EO=T.div`

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
`,CO=({onClick:e})=>{const t=Fn(n=>n.favorites.items.length);return y.jsx(SO,{to:"/favorite",children:y.jsxs(_O,{onClick:e,children:[y.jsx(wO,{children:y.jsx("use",{href:`${un}#icon-heart`})}),t>0&&y.jsx(EO,{children:t})]})})};/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vb=(...e)=>e.filter((t,n,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===n).join(" ").trim();/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kO=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TO=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,n,r)=>r?r.toUpperCase():n.toLowerCase());/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f0=e=>{const t=TO(e);return t.charAt(0).toUpperCase()+t.slice(1)};/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var OO={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PO=e=>{for(const t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0;return!1};/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MO=b.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:i="",children:o,iconNode:a,...l},s)=>b.createElement("svg",{ref:s,...OO,width:t,height:t,stroke:e,strokeWidth:r?Number(n)*24/Number(t):n,className:vb("lucide",i),...!o&&!PO(l)&&{"aria-hidden":"true"},...l},[...a.map(([u,c])=>b.createElement(u,c)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kn=(e,t)=>{const n=b.forwardRef(({className:r,...i},o)=>b.createElement(MO,{ref:o,iconNode:t,className:vb(`lucide-${kO(f0(e))}`,`lucide-${e}`,r),...i}));return n.displayName=f0(e),n};/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IO=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],yb=kn("arrow-right",IO);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jO=[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",key:"mvr1a0"}]],xb=kn("heart",jO);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $O=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"r6nss1"}]],DO=kn("house",$O);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RO=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],LO=kn("info",RO);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AO=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],FO=kn("mail",AO);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NO=[["path",{d:"M16 10a4 4 0 0 1-8 0",key:"1ltviw"}],["path",{d:"M3.103 6.034h17.794",key:"awc11p"}],["path",{d:"M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z",key:"o988cm"}]],zO=kn("shopping-bag",NO);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VO=[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]],Su=kn("shopping-cart",VO);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BO=[["path",{d:"M10 5H3",key:"1qgfaw"}],["path",{d:"M12 19H3",key:"yhmn1j"}],["path",{d:"M14 3v4",key:"1sua03"}],["path",{d:"M16 17v4",key:"1q0r14"}],["path",{d:"M21 12h-9",key:"1o4lsq"}],["path",{d:"M21 19h-5",key:"1rlt1p"}],["path",{d:"M21 5h-7",key:"1oszz2"}],["path",{d:"M8 10v4",key:"tgpxqk"}],["path",{d:"M8 12H3",key:"a7s4jb"}]],bb=kn("sliders-horizontal",BO);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UO=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],wb=kn("trash-2",UO);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HO=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Sb=kn("x",HO),WO=()=>{const[e,t]=b.useState(!1);return y.jsx(kT,{children:y.jsx(TT,{children:y.jsxs(OT,{children:[y.jsxs(PT,{children:[y.jsx(IT,{to:"/",children:"Дідів хлів"}),y.jsxs(MT,{children:[y.jsx(yO,{}),y.jsx(CO,{}),y.jsx(bO,{}),y.jsx($T,{onClick:()=>t(!e),children:y.jsx(jT,{children:y.jsx("use",{href:`${un}#icon-menu`})})}),y.jsx(FT,{open:e,onClick:()=>t(!1)}),y.jsxs(DT,{open:e,children:[y.jsx(RT,{onClick:()=>t(!1),children:y.jsx(Sb,{size:28,strokeWidth:1.5})}),y.jsxs(LT,{children:[y.jsxs(as,{onClick:()=>t(!1),to:"/",children:[y.jsx(DO,{size:22,strokeWidth:1.5})," Головна"]}),y.jsxs(as,{onClick:()=>t(!1),to:"/about",children:[y.jsx(LO,{size:22,strokeWidth:1.5})," Про нас"]}),y.jsxs(as,{onClick:()=>t(!1),to:"/catalog",children:[y.jsx(zO,{size:22,strokeWidth:1.5})," Каталог"]}),y.jsxs(as,{onClick:()=>t(!1),to:"/contacts",children:[y.jsx(FO,{size:22,strokeWidth:1.5})," Контакти"]})]}),y.jsx(AT,{children:y.jsx("p",{children:"© 2020 Дідів Хлів"})})]})]})]}),y.jsx(UT,{})]})})})},GO=T.div`

   background: radial-gradient(
    circle at 50% 45%,
    #5c5149 0%,
    #4b3c34 35%,
    #352b25 65%,
    #1b1412 100%
  );
`,YO=T.footer`
 
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
`,XO=T.div`
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
`,qO=T.div`
  display: flex;
  gap: 20px;
  margin-top: 10px;
  justify-content: center;

  @media screen and (min-width: 768px) {
    justify-content: flex-start;
  }
`,p0=T.a`
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
`,KO=()=>y.jsx(GO,{children:y.jsxs(YO,{children:[y.jsxs(XO,{children:[y.jsxs(Jc,{children:[y.jsx(ed,{children:"Навігація"}),y.jsx(hn,{to:"/",children:"Головна"}),y.jsx(hn,{to:"/about",children:"Про нас"}),y.jsx(hn,{to:"/catalog",children:"Каталог"}),y.jsx(hn,{to:"/contacts",children:"Контакти"})]}),y.jsxs(Jc,{children:[y.jsx(ed,{children:"Інформація"}),y.jsx(hn,{to:"/delivery",children:"Оплата і доставка"}),y.jsx(hn,{children:"Повернення"}),y.jsx(hn,{children:"Гарантія"}),y.jsx(hn,{children:"Політика конфіденційності"})]})]}),y.jsxs(Jc,{children:[y.jsx(ed,{children:"Контакти"}),y.jsx(hn,{href:"tel:+380979999999",children:"+38 (097) 999-99-99"}),y.jsx(hn,{href:"mailto:email@email.com",children:"email@email.com"}),y.jsxs(qO,{children:[y.jsx(p0,{href:"https://www.instagram.com/didivxliv?igsh=MXhsNWRjdW5rajYwdQ==",target:"_blank",rel:"noopener noreferrer",children:y.jsx("svg",{width:"20px",children:y.jsx("use",{href:`${un}#icon-instagram`})})}),y.jsx(p0,{href:"https://t.me/didivxliv",target:"_blank",rel:"noopener noreferrer",children:y.jsx("svg",{width:"20px",children:y.jsx("use",{href:`${un}#icon-telegram`})})})]})]})]})}),ZO=()=>(console.log("rer"),y.jsxs(y.Fragment,{children:[y.jsx(WO,{}),y.jsx("main",{className:"main-content",children:y.jsx(a2,{})}),y.jsx(KO,{})]}));function q(){return q=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},q.apply(this,arguments)}function QO(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function JO(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var eP=function(){function e(n){var r=this;this._insertTag=function(i){var o;r.tags.length===0?r.insertionPoint?o=r.insertionPoint.nextSibling:r.prepend?o=r.container.firstChild:o=r.before:o=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(i,o),r.tags.push(i)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(r){r.forEach(this._insertTag)},t.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(JO(this));var i=this.tags[this.tags.length-1];if(this.isSpeedy){var o=QO(i);try{o.insertRule(r,o.cssRules.length)}catch{}}else i.appendChild(document.createTextNode(r));this.ctr++},t.flush=function(){this.tags.forEach(function(r){return r.parentNode&&r.parentNode.removeChild(r)}),this.tags=[],this.ctr=0},e}(),Je="-ms-",Ol="-moz-",ue="-webkit-",_b="comm",Lh="rule",Ah="decl",tP="@import",Eb="@keyframes",nP="@layer",rP=Math.abs,_u=String.fromCharCode,iP=Object.assign;function oP(e,t){return Ge(e,0)^45?(((t<<2^Ge(e,0))<<2^Ge(e,1))<<2^Ge(e,2))<<2^Ge(e,3):0}function Cb(e){return e.trim()}function aP(e,t){return(e=t.exec(e))?e[0]:e}function ce(e,t,n){return e.replace(t,n)}function Zf(e,t){return e.indexOf(t)}function Ge(e,t){return e.charCodeAt(t)|0}function ga(e,t,n){return e.slice(t,n)}function gn(e){return e.length}function Fh(e){return e.length}function ls(e,t){return t.push(e),e}function sP(e,t){return e.map(t).join("")}var Eu=1,Hi=1,kb=0,St=0,Me=0,no="";function Cu(e,t,n,r,i,o,a){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:Eu,column:Hi,length:a,return:""}}function bo(e,t){return iP(Cu("",null,null,"",null,null,0),e,{length:-e.length},t)}function lP(){return Me}function uP(){return Me=St>0?Ge(no,--St):0,Hi--,Me===10&&(Hi=1,Eu--),Me}function jt(){return Me=St<kb?Ge(no,St++):0,Hi++,Me===10&&(Hi=1,Eu++),Me}function Sn(){return Ge(no,St)}function Vs(){return St}function ja(e,t){return ga(no,e,t)}function va(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Tb(e){return Eu=Hi=1,kb=gn(no=e),St=0,[]}function Ob(e){return no="",e}function Bs(e){return Cb(ja(St-1,Qf(e===91?e+2:e===40?e+1:e)))}function cP(e){for(;(Me=Sn())&&Me<33;)jt();return va(e)>2||va(Me)>3?"":" "}function dP(e,t){for(;--t&&jt()&&!(Me<48||Me>102||Me>57&&Me<65||Me>70&&Me<97););return ja(e,Vs()+(t<6&&Sn()==32&&jt()==32))}function Qf(e){for(;jt();)switch(Me){case e:return St;case 34:case 39:e!==34&&e!==39&&Qf(Me);break;case 40:e===41&&Qf(e);break;case 92:jt();break}return St}function fP(e,t){for(;jt()&&e+Me!==47+10;)if(e+Me===42+42&&Sn()===47)break;return"/*"+ja(t,St-1)+"*"+_u(e===47?e:jt())}function pP(e){for(;!va(Sn());)jt();return ja(e,St)}function hP(e){return Ob(Us("",null,null,null,[""],e=Tb(e),0,[0],e))}function Us(e,t,n,r,i,o,a,l,s){for(var u=0,c=0,d=a,m=0,h=0,g=0,x=1,S=1,f=1,p=0,v="",w=i,C=o,k=r,_=v;S;)switch(g=p,p=jt()){case 40:if(g!=108&&Ge(_,d-1)==58){Zf(_+=ce(Bs(p),"&","&\f"),"&\f")!=-1&&(f=-1);break}case 34:case 39:case 91:_+=Bs(p);break;case 9:case 10:case 13:case 32:_+=cP(g);break;case 92:_+=dP(Vs()-1,7);continue;case 47:switch(Sn()){case 42:case 47:ls(mP(fP(jt(),Vs()),t,n),s);break;default:_+="/"}break;case 123*x:l[u++]=gn(_)*f;case 125*x:case 59:case 0:switch(p){case 0:case 125:S=0;case 59+c:f==-1&&(_=ce(_,/\f/g,"")),h>0&&gn(_)-d&&ls(h>32?m0(_+";",r,n,d-1):m0(ce(_," ","")+";",r,n,d-2),s);break;case 59:_+=";";default:if(ls(k=h0(_,t,n,u,c,i,l,v,w=[],C=[],d),o),p===123)if(c===0)Us(_,t,k,k,w,o,d,l,C);else switch(m===99&&Ge(_,3)===110?100:m){case 100:case 108:case 109:case 115:Us(e,k,k,r&&ls(h0(e,k,k,0,0,i,l,v,i,w=[],d),C),i,C,d,l,r?w:C);break;default:Us(_,k,k,k,[""],C,0,l,C)}}u=c=h=0,x=f=1,v=_="",d=a;break;case 58:d=1+gn(_),h=g;default:if(x<1){if(p==123)--x;else if(p==125&&x++==0&&uP()==125)continue}switch(_+=_u(p),p*x){case 38:f=c>0?1:(_+="\f",-1);break;case 44:l[u++]=(gn(_)-1)*f,f=1;break;case 64:Sn()===45&&(_+=Bs(jt())),m=Sn(),c=d=gn(v=_+=pP(Vs())),p++;break;case 45:g===45&&gn(_)==2&&(x=0)}}return o}function h0(e,t,n,r,i,o,a,l,s,u,c){for(var d=i-1,m=i===0?o:[""],h=Fh(m),g=0,x=0,S=0;g<r;++g)for(var f=0,p=ga(e,d+1,d=rP(x=a[g])),v=e;f<h;++f)(v=Cb(x>0?m[f]+" "+p:ce(p,/&\f/g,m[f])))&&(s[S++]=v);return Cu(e,t,n,i===0?Lh:l,s,u,c)}function mP(e,t,n){return Cu(e,t,n,_b,_u(lP()),ga(e,2,-2),0)}function m0(e,t,n,r){return Cu(e,t,n,Ah,ga(e,0,r),ga(e,r+1,-1),r)}function Ii(e,t){for(var n="",r=Fh(e),i=0;i<r;i++)n+=t(e[i],i,e,t)||"";return n}function gP(e,t,n,r){switch(e.type){case nP:if(e.children.length)break;case tP:case Ah:return e.return=e.return||e.value;case _b:return"";case Eb:return e.return=e.value+"{"+Ii(e.children,r)+"}";case Lh:e.value=e.props.join(",")}return gn(n=Ii(e.children,r))?e.return=e.value+"{"+n+"}":""}function vP(e){var t=Fh(e);return function(n,r,i,o){for(var a="",l=0;l<t;l++)a+=e[l](n,r,i,o)||"";return a}}function yP(e){return function(t){t.root||(t=t.return)&&e(t)}}function xP(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var bP=function(t,n,r){for(var i=0,o=0;i=o,o=Sn(),i===38&&o===12&&(n[r]=1),!va(o);)jt();return ja(t,St)},wP=function(t,n){var r=-1,i=44;do switch(va(i)){case 0:i===38&&Sn()===12&&(n[r]=1),t[r]+=bP(St-1,n,r);break;case 2:t[r]+=Bs(i);break;case 4:if(i===44){t[++r]=Sn()===58?"&\f":"",n[r]=t[r].length;break}default:t[r]+=_u(i)}while(i=jt());return t},SP=function(t,n){return Ob(wP(Tb(t),n))},g0=new WeakMap,_P=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var n=t.value,r=t.parent,i=t.column===r.column&&t.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(t.props.length===1&&n.charCodeAt(0)!==58&&!g0.get(r))&&!i){g0.set(t,!0);for(var o=[],a=SP(n,o),l=r.props,s=0,u=0;s<a.length;s++)for(var c=0;c<l.length;c++,u++)t.props[u]=o[s]?a[s].replace(/&\f/g,l[c]):l[c]+" "+a[s]}}},EP=function(t){if(t.type==="decl"){var n=t.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(t.return="",t.value="")}};function Pb(e,t){switch(oP(e,t)){case 5103:return ue+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return ue+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return ue+e+Ol+e+Je+e+e;case 6828:case 4268:return ue+e+Je+e+e;case 6165:return ue+e+Je+"flex-"+e+e;case 5187:return ue+e+ce(e,/(\w+).+(:[^]+)/,ue+"box-$1$2"+Je+"flex-$1$2")+e;case 5443:return ue+e+Je+"flex-item-"+ce(e,/flex-|-self/,"")+e;case 4675:return ue+e+Je+"flex-line-pack"+ce(e,/align-content|flex-|-self/,"")+e;case 5548:return ue+e+Je+ce(e,"shrink","negative")+e;case 5292:return ue+e+Je+ce(e,"basis","preferred-size")+e;case 6060:return ue+"box-"+ce(e,"-grow","")+ue+e+Je+ce(e,"grow","positive")+e;case 4554:return ue+ce(e,/([^-])(transform)/g,"$1"+ue+"$2")+e;case 6187:return ce(ce(ce(e,/(zoom-|grab)/,ue+"$1"),/(image-set)/,ue+"$1"),e,"")+e;case 5495:case 3959:return ce(e,/(image-set\([^]*)/,ue+"$1$`$1");case 4968:return ce(ce(e,/(.+:)(flex-)?(.*)/,ue+"box-pack:$3"+Je+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+ue+e+e;case 4095:case 3583:case 4068:case 2532:return ce(e,/(.+)-inline(.+)/,ue+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(gn(e)-1-t>6)switch(Ge(e,t+1)){case 109:if(Ge(e,t+4)!==45)break;case 102:return ce(e,/(.+:)(.+)-([^]+)/,"$1"+ue+"$2-$3$1"+Ol+(Ge(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Zf(e,"stretch")?Pb(ce(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(Ge(e,t+1)!==115)break;case 6444:switch(Ge(e,gn(e)-3-(~Zf(e,"!important")&&10))){case 107:return ce(e,":",":"+ue)+e;case 101:return ce(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+ue+(Ge(e,14)===45?"inline-":"")+"box$3$1"+ue+"$2$3$1"+Je+"$2box$3")+e}break;case 5936:switch(Ge(e,t+11)){case 114:return ue+e+Je+ce(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return ue+e+Je+ce(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return ue+e+Je+ce(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return ue+e+Je+e+e}return e}var CP=function(t,n,r,i){if(t.length>-1&&!t.return)switch(t.type){case Ah:t.return=Pb(t.value,t.length);break;case Eb:return Ii([bo(t,{value:ce(t.value,"@","@"+ue)})],i);case Lh:if(t.length)return sP(t.props,function(o){switch(aP(o,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return Ii([bo(t,{props:[ce(o,/:(read-\w+)/,":"+Ol+"$1")]})],i);case"::placeholder":return Ii([bo(t,{props:[ce(o,/:(plac\w+)/,":"+ue+"input-$1")]}),bo(t,{props:[ce(o,/:(plac\w+)/,":"+Ol+"$1")]}),bo(t,{props:[ce(o,/:(plac\w+)/,Je+"input-$1")]})],i)}return""})}},kP=[CP],TP=function(t){var n=t.key;if(n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(x){var S=x.getAttribute("data-emotion");S.indexOf(" ")!==-1&&(document.head.appendChild(x),x.setAttribute("data-s",""))})}var i=t.stylisPlugins||kP,o={},a,l=[];a=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(x){for(var S=x.getAttribute("data-emotion").split(" "),f=1;f<S.length;f++)o[S[f]]=!0;l.push(x)});var s,u=[_P,EP];{var c,d=[gP,yP(function(x){c.insert(x)})],m=vP(u.concat(i,d)),h=function(S){return Ii(hP(S),m)};s=function(S,f,p,v){c=p,h(S?S+"{"+f.styles+"}":f.styles),v&&(g.inserted[f.name]=!0)}}var g={key:n,sheet:new eP({key:n,container:a,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:o,registered:{},insert:s};return g.sheet.hydrate(l),g},Mb={exports:{}},pe={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ue=typeof Symbol=="function"&&Symbol.for,Nh=Ue?Symbol.for("react.element"):60103,zh=Ue?Symbol.for("react.portal"):60106,ku=Ue?Symbol.for("react.fragment"):60107,Tu=Ue?Symbol.for("react.strict_mode"):60108,Ou=Ue?Symbol.for("react.profiler"):60114,Pu=Ue?Symbol.for("react.provider"):60109,Mu=Ue?Symbol.for("react.context"):60110,Vh=Ue?Symbol.for("react.async_mode"):60111,Iu=Ue?Symbol.for("react.concurrent_mode"):60111,ju=Ue?Symbol.for("react.forward_ref"):60112,$u=Ue?Symbol.for("react.suspense"):60113,OP=Ue?Symbol.for("react.suspense_list"):60120,Du=Ue?Symbol.for("react.memo"):60115,Ru=Ue?Symbol.for("react.lazy"):60116,PP=Ue?Symbol.for("react.block"):60121,MP=Ue?Symbol.for("react.fundamental"):60117,IP=Ue?Symbol.for("react.responder"):60118,jP=Ue?Symbol.for("react.scope"):60119;function At(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Nh:switch(e=e.type,e){case Vh:case Iu:case ku:case Ou:case Tu:case $u:return e;default:switch(e=e&&e.$$typeof,e){case Mu:case ju:case Ru:case Du:case Pu:return e;default:return t}}case zh:return t}}}function Ib(e){return At(e)===Iu}pe.AsyncMode=Vh;pe.ConcurrentMode=Iu;pe.ContextConsumer=Mu;pe.ContextProvider=Pu;pe.Element=Nh;pe.ForwardRef=ju;pe.Fragment=ku;pe.Lazy=Ru;pe.Memo=Du;pe.Portal=zh;pe.Profiler=Ou;pe.StrictMode=Tu;pe.Suspense=$u;pe.isAsyncMode=function(e){return Ib(e)||At(e)===Vh};pe.isConcurrentMode=Ib;pe.isContextConsumer=function(e){return At(e)===Mu};pe.isContextProvider=function(e){return At(e)===Pu};pe.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Nh};pe.isForwardRef=function(e){return At(e)===ju};pe.isFragment=function(e){return At(e)===ku};pe.isLazy=function(e){return At(e)===Ru};pe.isMemo=function(e){return At(e)===Du};pe.isPortal=function(e){return At(e)===zh};pe.isProfiler=function(e){return At(e)===Ou};pe.isStrictMode=function(e){return At(e)===Tu};pe.isSuspense=function(e){return At(e)===$u};pe.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===ku||e===Iu||e===Ou||e===Tu||e===$u||e===OP||typeof e=="object"&&e!==null&&(e.$$typeof===Ru||e.$$typeof===Du||e.$$typeof===Pu||e.$$typeof===Mu||e.$$typeof===ju||e.$$typeof===MP||e.$$typeof===IP||e.$$typeof===jP||e.$$typeof===PP)};pe.typeOf=At;Mb.exports=pe;var $P=Mb.exports,jb=$P,DP={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},RP={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},$b={};$b[jb.ForwardRef]=DP;$b[jb.Memo]=RP;var LP=!0;function Db(e,t,n){var r="";return n.split(" ").forEach(function(i){e[i]!==void 0?t.push(e[i]+";"):r+=i+" "}),r}var Bh=function(t,n,r){var i=t.key+"-"+n.name;(r===!1||LP===!1)&&t.registered[i]===void 0&&(t.registered[i]=n.styles)},Rb=function(t,n,r){Bh(t,n,r);var i=t.key+"-"+n.name;if(t.inserted[n.name]===void 0){var o=n;do t.insert(n===o?"."+i:"",o,t.sheet,!0),o=o.next;while(o!==void 0)}};function AP(e){for(var t=0,n,r=0,i=e.length;i>=4;++r,i-=4)n=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(i){case 3:t^=(e.charCodeAt(r+2)&255)<<16;case 2:t^=(e.charCodeAt(r+1)&255)<<8;case 1:t^=e.charCodeAt(r)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var FP={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},NP=/[A-Z]|^ms/g,zP=/_EMO_([^_]+?)_([^]*?)_EMO_/g,Lb=function(t){return t.charCodeAt(1)===45},v0=function(t){return t!=null&&typeof t!="boolean"},td=xP(function(e){return Lb(e)?e:e.replace(NP,"-$&").toLowerCase()}),y0=function(t,n){switch(t){case"animation":case"animationName":if(typeof n=="string")return n.replace(zP,function(r,i,o){return vn={name:i,styles:o,next:vn},i})}return FP[t]!==1&&!Lb(t)&&typeof n=="number"&&n!==0?n+"px":n};function ya(e,t,n){if(n==null)return"";if(n.__emotion_styles!==void 0)return n;switch(typeof n){case"boolean":return"";case"object":{if(n.anim===1)return vn={name:n.name,styles:n.styles,next:vn},n.name;if(n.styles!==void 0){var r=n.next;if(r!==void 0)for(;r!==void 0;)vn={name:r.name,styles:r.styles,next:vn},r=r.next;var i=n.styles+";";return i}return VP(e,t,n)}case"function":{if(e!==void 0){var o=vn,a=n(e);return vn=o,ya(e,t,a)}break}}if(t==null)return n;var l=t[n];return l!==void 0?l:n}function VP(e,t,n){var r="";if(Array.isArray(n))for(var i=0;i<n.length;i++)r+=ya(e,t,n[i])+";";else for(var o in n){var a=n[o];if(typeof a!="object")t!=null&&t[a]!==void 0?r+=o+"{"+t[a]+"}":v0(a)&&(r+=td(o)+":"+y0(o,a)+";");else if(Array.isArray(a)&&typeof a[0]=="string"&&(t==null||t[a[0]]===void 0))for(var l=0;l<a.length;l++)v0(a[l])&&(r+=td(o)+":"+y0(o,a[l])+";");else{var s=ya(e,t,a);switch(o){case"animation":case"animationName":{r+=td(o)+":"+s+";";break}default:r+=o+"{"+s+"}"}}}return r}var x0=/label:\s*([^\s;\n{]+)\s*(;|$)/g,vn,Uh=function(t,n,r){if(t.length===1&&typeof t[0]=="object"&&t[0]!==null&&t[0].styles!==void 0)return t[0];var i=!0,o="";vn=void 0;var a=t[0];a==null||a.raw===void 0?(i=!1,o+=ya(r,n,a)):o+=a[0];for(var l=1;l<t.length;l++)o+=ya(r,n,t[l]),i&&(o+=a[l]);x0.lastIndex=0;for(var s="",u;(u=x0.exec(o))!==null;)s+="-"+u[1];var c=AP(o)+s;return{name:c,styles:o,next:vn}},BP=function(t){return t()},UP=Hd["useInsertionEffect"]?Hd["useInsertionEffect"]:!1,Ab=UP||BP,Hh={}.hasOwnProperty,Fb=b.createContext(typeof HTMLElement<"u"?TP({key:"css"}):null);Fb.Provider;var Nb=function(t){return b.forwardRef(function(n,r){var i=b.useContext(Fb);return t(n,i,r)})},zb=b.createContext({}),Jf="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",HP=function(t,n){var r={};for(var i in n)Hh.call(n,i)&&(r[i]=n[i]);return r[Jf]=t,r},WP=function(t){var n=t.cache,r=t.serialized,i=t.isStringTag;return Bh(n,r,i),Ab(function(){return Rb(n,r,i)}),null},GP=Nb(function(e,t,n){var r=e.css;typeof r=="string"&&t.registered[r]!==void 0&&(r=t.registered[r]);var i=e[Jf],o=[r],a="";typeof e.className=="string"?a=Db(t.registered,o,e.className):e.className!=null&&(a=e.className+" ");var l=Uh(o,void 0,b.useContext(zb));a+=t.key+"-"+l.name;var s={};for(var u in e)Hh.call(e,u)&&u!=="css"&&u!==Jf&&(s[u]=e[u]);return s.ref=n,s.className=a,b.createElement(b.Fragment,null,b.createElement(WP,{cache:t,serialized:l,isStringTag:typeof i=="string"}),b.createElement(i,s))}),YP=GP,Y=function(t,n){var r=arguments;if(n==null||!Hh.call(n,"css"))return b.createElement.apply(void 0,r);var i=r.length,o=new Array(i);o[0]=YP,o[1]=HP(t,n);for(var a=2;a<i;a++)o[a]=r[a];return b.createElement.apply(null,o)};function Wh(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return Uh(t)}var XP=function(){var t=Wh.apply(void 0,arguments),n="animation-"+t.name;return{name:n,styles:"@keyframes "+n+"{"+t.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},qP=_k,KP=function(t){return t!=="theme"},b0=function(t){return typeof t=="string"&&t.charCodeAt(0)>96?qP:KP},w0=function(t,n,r){var i;if(n){var o=n.shouldForwardProp;i=t.__emotion_forwardProp&&o?function(a){return t.__emotion_forwardProp(a)&&o(a)}:o}return typeof i!="function"&&r&&(i=t.__emotion_forwardProp),i},ZP=function(t){var n=t.cache,r=t.serialized,i=t.isStringTag;return Bh(n,r,i),Ab(function(){return Rb(n,r,i)}),null},QP=function e(t,n){var r=t.__emotion_real===t,i=r&&t.__emotion_base||t,o,a;n!==void 0&&(o=n.label,a=n.target);var l=w0(t,n,r),s=l||b0(i),u=!s("as");return function(){var c=arguments,d=r&&t.__emotion_styles!==void 0?t.__emotion_styles.slice(0):[];if(o!==void 0&&d.push("label:"+o+";"),c[0]==null||c[0].raw===void 0)d.push.apply(d,c);else{d.push(c[0][0]);for(var m=c.length,h=1;h<m;h++)d.push(c[h],c[0][h])}var g=Nb(function(x,S,f){var p=u&&x.as||i,v="",w=[],C=x;if(x.theme==null){C={};for(var k in x)C[k]=x[k];C.theme=b.useContext(zb)}typeof x.className=="string"?v=Db(S.registered,w,x.className):x.className!=null&&(v=x.className+" ");var _=Uh(d.concat(w),S.registered,C);v+=S.key+"-"+_.name,a!==void 0&&(v+=" "+a);var E=u&&l===void 0?b0(p):s,M={};for(var I in x)u&&I==="as"||E(I)&&(M[I]=x[I]);return M.className=v,M.ref=f,b.createElement(b.Fragment,null,b.createElement(ZP,{cache:S,serialized:_,isStringTag:typeof p=="string"}),b.createElement(p,M))});return g.displayName=o!==void 0?o:"Styled("+(typeof i=="string"?i:i.displayName||i.name||"Component")+")",g.defaultProps=t.defaultProps,g.__emotion_real=g,g.__emotion_base=i,g.__emotion_styles=d,g.__emotion_forwardProp=l,Object.defineProperty(g,"toString",{value:function(){return"."+a}}),g.withComponent=function(x,S){return e(x,q({},n,S,{shouldForwardProp:w0(g,S,!0)})).apply(void 0,d)},g}},JP=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],Fe=QP.bind();JP.forEach(function(e){Fe[e]=Fe(e)});const e3=Fe.section`
  background-color:  var(--second-background);
 
 
`,t3=Fe.div`
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
  
`,n3=Fe.h1`

    font-size: 32px;
font-family: var(--main-font);
color: var( --black-color);
text-transform: uppercase;

 
`,r3=Fe.div`
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
`;const i3=Fe($e)`
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
`,o3=Fe.div`
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
`,a3=Fe.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
 

  display: block;
   @media screen and (max-width: 768px) {
  height: 100px;
  }

`,s3=Fe.p`
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

`,l3=[{id:"bikes",title:"Велосипеди",image:"/Didiv/catalog/bikes.jpeg"},{id:"saddles",title:"Сідла",image:"/Didiv/catalog/saddles.jpeg"},{id:"wheels",title:"Колеса",image:"/Didiv/catalog/wheels.jpeg"},{id:"frames",title:"Рами",image:"/Didiv/catalog/frames.jpeg"},{id:"handlebars",title:"Керма",image:"/Didiv/catalog/handlebars.jpeg"},{id:"stems",title:"Виноси",image:"/Didiv/catalog/stems.jpeg"},{id:"conrods",title:"Шатуни",image:"/Didiv/catalog/conrods.jpeg"},{id:"pedals",title:"Педалі",image:"/Didiv/catalog/pedals.jpeg"},{id:"fenders",title:"Крила",image:"/Didiv/catalog/fenders.jpeg"},{id:"tubes",title:"Камери",image:"/Didiv/catalog/tubes.jpeg"},{id:"brakes",title:"Гальма",image:"/Didiv/catalog/brakes.jpeg"},{id:"forks",title:"Вилки",image:"/Didiv/catalog/forks.jpeg"}],u3=()=>y.jsx(e3,{children:y.jsxs(t3,{children:[y.jsx(n3,{children:"Каталог"}),y.jsx(r3,{children:l3.map(e=>y.jsxs(i3,{to:`/catalog/${e.id}`,children:[y.jsx(o3,{children:y.jsx(a3,{src:e.image,alt:e.title})}),y.jsx(s3,{children:e.title})]},e.id))})]})}),c3=Fe.div`

padding-top: 100px;
padding-bottom: 250px;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`,d3=Fe.h1`
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
`,f3=Fe.p`
  color: #191919;
  font-size: 18px;
  max-width: 600px;
      text-align: center;
      margin-bottom: 50px;
      @media screen and (min-width: 768px) {
 font-size: 25px;
  }
`,p3=Fe($e)`

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

  
`,h3=()=>y.jsxs(c3,{children:[y.jsxs(d3,{children:[" ",y.jsx("span",{children:"404"}),"  PAGE NOT FOUND"]}),y.jsx(f3,{children:" Ой, схоже, ти збився з маршруту! На жаль, ця сторінка безслідно зникла десь на бездоріжжі. Спробуй повернутися на головну "}),y.jsx(p3,{children:" На головну"})]});const m3=T.div`
  width: 100%;
  height: 100%;
font-family: var(--main-font);
`,g3=T.div`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  margin: 0;
`;var Vb={},Bb={},Lu={},Ub={exports:{}},$a={};/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var S0=Object.getOwnPropertySymbols,v3=Object.prototype.hasOwnProperty,y3=Object.prototype.propertyIsEnumerable;function x3(e){if(e==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}function b3(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de",Object.getOwnPropertyNames(e)[0]==="5")return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;var r=Object.getOwnPropertyNames(t).map(function(o){return t[o]});if(r.join("")!=="0123456789")return!1;var i={};return"abcdefghijklmnopqrst".split("").forEach(function(o){i[o]=o}),Object.keys(Object.assign({},i)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}var w3=b3()?Object.assign:function(e,t){for(var n,r=x3(e),i,o=1;o<arguments.length;o++){n=Object(arguments[o]);for(var a in n)v3.call(n,a)&&(r[a]=n[a]);if(S0){i=S0(n);for(var l=0;l<i.length;l++)y3.call(n,i[l])&&(r[i[l]]=n[i[l]])}}return r},Hb={exports:{}},se={};/** @license React v17.0.2
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gh=w3,ro=60103,Wb=60106;se.Fragment=60107;se.StrictMode=60108;se.Profiler=60114;var Gb=60109,Yb=60110,Xb=60112;se.Suspense=60113;var qb=60115,Kb=60116;if(typeof Symbol=="function"&&Symbol.for){var Kt=Symbol.for;ro=Kt("react.element"),Wb=Kt("react.portal"),se.Fragment=Kt("react.fragment"),se.StrictMode=Kt("react.strict_mode"),se.Profiler=Kt("react.profiler"),Gb=Kt("react.provider"),Yb=Kt("react.context"),Xb=Kt("react.forward_ref"),se.Suspense=Kt("react.suspense"),qb=Kt("react.memo"),Kb=Kt("react.lazy")}var _0=typeof Symbol=="function"&&Symbol.iterator;function S3(e){return e===null||typeof e!="object"?null:(e=_0&&e[_0]||e["@@iterator"],typeof e=="function"?e:null)}function Da(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Zb={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Qb={};function io(e,t,n){this.props=e,this.context=t,this.refs=Qb,this.updater=n||Zb}io.prototype.isReactComponent={};io.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error(Da(85));this.updater.enqueueSetState(this,e,t,"setState")};io.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Jb(){}Jb.prototype=io.prototype;function Yh(e,t,n){this.props=e,this.context=t,this.refs=Qb,this.updater=n||Zb}var Xh=Yh.prototype=new Jb;Xh.constructor=Yh;Gh(Xh,io.prototype);Xh.isPureReactComponent=!0;var qh={current:null},ew=Object.prototype.hasOwnProperty,tw={key:!0,ref:!0,__self:!0,__source:!0};function nw(e,t,n){var r,i={},o=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(o=""+t.key),t)ew.call(t,r)&&!tw.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var s=Array(l),u=0;u<l;u++)s[u]=arguments[u+2];i.children=s}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:ro,type:e,key:o,ref:a,props:i,_owner:qh.current}}function _3(e,t){return{$$typeof:ro,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Kh(e){return typeof e=="object"&&e!==null&&e.$$typeof===ro}function E3(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var E0=/\/+/g;function nd(e,t){return typeof e=="object"&&e!==null&&e.key!=null?E3(""+e.key):t.toString(36)}function Hs(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case ro:case Wb:a=!0}}if(a)return a=e,i=i(a),e=r===""?"."+nd(a,0):r,Array.isArray(i)?(n="",e!=null&&(n=e.replace(E0,"$&/")+"/"),Hs(i,t,n,"",function(u){return u})):i!=null&&(Kh(i)&&(i=_3(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(E0,"$&/")+"/")+e)),t.push(i)),1;if(a=0,r=r===""?".":r+":",Array.isArray(e))for(var l=0;l<e.length;l++){o=e[l];var s=r+nd(o,l);a+=Hs(o,t,n,s,i)}else if(s=S3(e),typeof s=="function")for(e=s.call(e),l=0;!(o=e.next()).done;)o=o.value,s=r+nd(o,l++),a+=Hs(o,t,n,s,i);else if(o==="object")throw t=""+e,Error(Da(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t));return a}function us(e,t,n){if(e==null)return e;var r=[],i=0;return Hs(e,r,"","",function(o){return t.call(n,o,i++)}),r}function C3(e){if(e._status===-1){var t=e._result;t=t(),e._status=0,e._result=t,t.then(function(n){e._status===0&&(n=n.default,e._status=1,e._result=n)},function(n){e._status===0&&(e._status=2,e._result=n)})}if(e._status===1)return e._result;throw e._result}var rw={current:null};function Kn(){var e=rw.current;if(e===null)throw Error(Da(321));return e}var k3={ReactCurrentDispatcher:rw,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:qh,IsSomeRendererActing:{current:!1},assign:Gh};se.Children={map:us,forEach:function(e,t,n){us(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return us(e,function(){t++}),t},toArray:function(e){return us(e,function(t){return t})||[]},only:function(e){if(!Kh(e))throw Error(Da(143));return e}};se.Component=io;se.PureComponent=Yh;se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=k3;se.cloneElement=function(e,t,n){if(e==null)throw Error(Da(267,e));var r=Gh({},e.props),i=e.key,o=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,a=qh.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in t)ew.call(t,s)&&!tw.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&l!==void 0?l[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){l=Array(s);for(var u=0;u<s;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:ro,type:e.type,key:i,ref:o,props:r,_owner:a}};se.createContext=function(e,t){return t===void 0&&(t=null),e={$$typeof:Yb,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider={$$typeof:Gb,_context:e},e.Consumer=e};se.createElement=nw;se.createFactory=function(e){var t=nw.bind(null,e);return t.type=e,t};se.createRef=function(){return{current:null}};se.forwardRef=function(e){return{$$typeof:Xb,render:e}};se.isValidElement=Kh;se.lazy=function(e){return{$$typeof:Kb,_payload:{_status:-1,_result:e},_init:C3}};se.memo=function(e,t){return{$$typeof:qb,type:e,compare:t===void 0?null:t}};se.useCallback=function(e,t){return Kn().useCallback(e,t)};se.useContext=function(e,t){return Kn().useContext(e,t)};se.useDebugValue=function(){};se.useEffect=function(e,t){return Kn().useEffect(e,t)};se.useImperativeHandle=function(e,t,n){return Kn().useImperativeHandle(e,t,n)};se.useLayoutEffect=function(e,t){return Kn().useLayoutEffect(e,t)};se.useMemo=function(e,t){return Kn().useMemo(e,t)};se.useReducer=function(e,t,n){return Kn().useReducer(e,t,n)};se.useRef=function(e){return Kn().useRef(e)};se.useState=function(e){return Kn().useState(e)};se.version="17.0.2";Hb.exports=se;var T3=Hb.exports;/** @license React v17.0.2
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var O3=T3,iw=60103;$a.Fragment=60107;if(typeof Symbol=="function"&&Symbol.for){var C0=Symbol.for;iw=C0("react.element"),$a.Fragment=C0("react.fragment")}var P3=O3.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,M3=Object.prototype.hasOwnProperty,I3={key:!0,ref:!0,__self:!0,__source:!0};function ow(e,t,n){var r,i={},o=null,a=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)M3.call(t,r)&&!I3.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:iw,type:e,key:o,ref:a,props:i,_owner:P3.current}}$a.jsx=ow;$a.jsxs=ow;Ub.exports=$a;var Et=Ub.exports,aw={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var t={}.hasOwnProperty;function n(){for(var o="",a=0;a<arguments.length;a++){var l=arguments[a];l&&(o=i(o,r(l)))}return o}function r(o){if(typeof o=="string"||typeof o=="number")return o;if(typeof o!="object")return"";if(Array.isArray(o))return n.apply(null,o);if(o.toString!==Object.prototype.toString&&!o.toString.toString().includes("[native code]"))return o.toString();var a="";for(var l in o)t.call(o,l)&&o[l]&&(a=i(a,l));return a}function i(o,a){return a?o?o+" "+a:o+a:o}e.exports?(n.default=n,e.exports=n):window.classNames=n})()})(aw);var Ct=aw.exports;const j3={"lds-circle":"_lds-circle_qlxhy_1"},$3=Object.freeze(Object.defineProperty({__proto__:null,default:j3},Symbol.toStringTag,{value:"Module"})),D3=_t($3);var sw=J&&J.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Lu,"__esModule",{value:!0});Lu.Circle=void 0;const R3=Et,L3=sw(Ct),A3=sw(D3);function F3({color:e="#7f58af",size:t=64,className:n,style:r,...i}){return(0,R3.jsx)("div",{className:(0,L3.default)(A3.default["lds-circle"],n),style:{background:e,width:t,height:t,...r},...i})}Lu.Circle=F3;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Circle=void 0;var t=Lu;Object.defineProperty(e,"Circle",{enumerable:!0,get:function(){return t.Circle}})})(Bb);var lw={},Au={};const N3={"lds-default":"_lds-default_wt1n8_1"},z3=Object.freeze(Object.defineProperty({__proto__:null,default:N3},Symbol.toStringTag,{value:"Module"})),V3=_t(z3);var uw=J&&J.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Au,"__esModule",{value:!0});Au.Default=void 0;const k0=Et,B3=uw(Ct),U3=uw(V3);function H3({color:e="#7f58af",size:t=80,className:n,style:r,...i}){const o=[...Array(12)].map((a,l)=>(0,k0.jsx)("div",{style:{background:`${e}`,width:t*.075,height:t*.075}},l));return(0,k0.jsx)("div",{className:(0,B3.default)(U3.default["lds-default"],n),style:{height:t,width:t,...r},...i,children:o})}Au.Default=H3;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Default=void 0;var t=Au;Object.defineProperty(e,"Default",{enumerable:!0,get:function(){return t.Default}})})(lw);var cw={},Fu={};const W3={"lds-dual-ring":"_lds-dual-ring_pbai0_1","lds-dual-ring-after":"_lds-dual-ring-after_pbai0_6"},G3=Object.freeze(Object.defineProperty({__proto__:null,default:W3},Symbol.toStringTag,{value:"Module"})),Y3=_t(G3);var dw=J&&J.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Fu,"__esModule",{value:!0});Fu.DualRing=void 0;const T0=Et,O0=dw(Ct),P0=dw(Y3);function X3({color:e="#7f58af",size:t=80,className:n,style:r,...i}){return(0,T0.jsx)("div",{className:(0,O0.default)(P0.default["lds-dual-ring"],n),style:{width:t,height:t,...r},...i,children:(0,T0.jsx)("div",{className:(0,O0.default)(P0.default["lds-dual-ring-after"]),style:{borderColor:`${e} transparent`,borderWidth:t*.1,width:t*.7-6,height:t*.7-6}})})}Fu.DualRing=X3;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.DualRing=void 0;var t=Fu;Object.defineProperty(e,"DualRing",{enumerable:!0,get:function(){return t.DualRing}})})(cw);var fw={},Nu={};const q3={"lds-ellipsis":"_lds-ellipsis_1fzd3_1","lds-ellipsis1":"_lds-ellipsis1_1fzd3_1","lds-ellipsis2":"_lds-ellipsis2_1fzd3_1","lds-ellipsis3":"_lds-ellipsis3_1fzd3_1"},K3=Object.freeze(Object.defineProperty({__proto__:null,default:q3},Symbol.toStringTag,{value:"Module"})),Z3=_t(K3);var pw=J&&J.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Nu,"__esModule",{value:!0});Nu.Ellipsis=void 0;const M0=Et,Q3=pw(Ct),J3=pw(Z3);function eM({color:e="#7f58af",size:t=80,className:n,style:r,...i}){const o=[...Array(4)].map((a,l)=>(0,M0.jsx)("div",{style:{background:`${e}`}},l));return(0,M0.jsx)("div",{className:(0,Q3.default)(J3.default["lds-ellipsis"],n),style:{...r,width:t,height:t},...i,children:o})}Nu.Ellipsis=eM;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Ellipsis=void 0;var t=Nu;Object.defineProperty(e,"Ellipsis",{enumerable:!0,get:function(){return t.Ellipsis}})})(fw);var hw={},zu={};const tM={"lds-facebook":"_lds-facebook_1ts9g_1"},nM=Object.freeze(Object.defineProperty({__proto__:null,default:tM},Symbol.toStringTag,{value:"Module"})),rM=_t(nM);var mw=J&&J.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(zu,"__esModule",{value:!0});zu.Facebook=void 0;const I0=Et,iM=mw(Ct),oM=mw(rM);function aM({color:e="#7f58af",size:t=80,className:n,style:r,...i}){const o=[...Array(3)].map((a,l)=>(0,I0.jsx)("div",{style:{background:`${e}`}},l));return(0,I0.jsx)("div",{className:(0,iM.default)(oM.default["lds-facebook"],n),style:{width:t,height:t,...r},...i,children:o})}zu.Facebook=aM;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Facebook=void 0;var t=zu;Object.defineProperty(e,"Facebook",{enumerable:!0,get:function(){return t.Facebook}})})(hw);var gw={},Vu={};const sM={"lds-grid":"_lds-grid_1ftub_1"},lM=Object.freeze(Object.defineProperty({__proto__:null,default:sM},Symbol.toStringTag,{value:"Module"})),uM=_t(lM);var vw=J&&J.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Vu,"__esModule",{value:!0});Vu.Grid=void 0;const j0=Et,cM=vw(Ct),dM=vw(uM);function fM({color:e="#7f58af",size:t=80,className:n,style:r,...i}){const o=[...Array(9)].map((a,l)=>(0,j0.jsx)("div",{style:{background:`${e}`}},l));return(0,j0.jsx)("div",{className:(0,cM.default)(dM.default["lds-grid"],n),style:{width:t,height:t,...r},...i,children:o})}Vu.Grid=fM;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Grid=void 0;var t=Vu;Object.defineProperty(e,"Grid",{enumerable:!0,get:function(){return t.Grid}})})(gw);var yw={},Bu={};const pM={"lds-heart":"_lds-heart_e4yfg_1","div-after":"_div-after_e4yfg_18","div-before":"_div-before_e4yfg_19"},hM=Object.freeze(Object.defineProperty({__proto__:null,default:pM},Symbol.toStringTag,{value:"Module"})),mM=_t(hM);var xw=J&&J.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Bu,"__esModule",{value:!0});Bu.Heart=void 0;const cs=Et,rd=xw(Ct),id=xw(mM);function gM({color:e="#7f58af",size:t=80,className:n,style:r,...i}){return(0,cs.jsx)("div",{className:(0,rd.default)(id.default["lds-heart"],n),style:{width:t,height:t,...r},...i,children:(0,cs.jsxs)("div",{style:{background:e,width:t*.4,height:t*.4,left:t*.3,top:t*.3},children:[(0,cs.jsx)("div",{className:(0,rd.default)(id.default["div-before"]),style:{background:e,width:t*.4,height:t*.4,left:-t*.3}}),(0,cs.jsx)("div",{className:(0,rd.default)(id.default["div-after"]),style:{background:e,width:t*.4,height:t*.4,top:-t*.3}})]})})}Bu.Heart=gM;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Heart=void 0;var t=Bu;Object.defineProperty(e,"Heart",{enumerable:!0,get:function(){return t.Heart}})})(yw);var bw={},Uu={};const vM={"lds-hourglass":"_lds-hourglass_mn3qi_1","lds-hourglass-after":"_lds-hourglass-after_mn3qi_7"},yM=Object.freeze(Object.defineProperty({__proto__:null,default:vM},Symbol.toStringTag,{value:"Module"})),xM=_t(yM);var ww=J&&J.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Uu,"__esModule",{value:!0});Uu.Hourglass=void 0;const $0=Et,D0=ww(Ct),R0=ww(xM);function bM({color:e="#7f58af",size:t=32,className:n,style:r}){return(0,$0.jsx)("div",{className:(0,D0.default)(R0.default["lds-hourglass"],n),style:{...r},children:(0,$0.jsx)("div",{className:(0,D0.default)(R0.default["lds-hourglass-after"]),style:{background:e,borderWidth:t,borderHeight:t}})})}Uu.Hourglass=bM;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Hourglass=void 0;var t=Uu;Object.defineProperty(e,"Hourglass",{enumerable:!0,get:function(){return t.Hourglass}})})(bw);var Sw={},Hu={};const _w="_center_1rufi_10",Ew="_spin_1rufi_1",wM={"lds-orbitals":"_lds-orbitals_1rufi_1",center:_w,"outer-spin":"_outer-spin_1rufi_19","inner-spin":"_inner-spin_1rufi_20","inner-arc":"_inner-arc_1rufi_25","inner-arc_start-a":"_inner-arc_start-a_1rufi_32","inner-arc_end-a":"_inner-arc_end-a_1rufi_36","inner-moon-a":"_inner-moon-a_1rufi_40","inner-moon-b":"_inner-moon-b_1rufi_49","inner-arc_start-b":"_inner-arc_start-b_1rufi_58","inner-arc_end-b":"_inner-arc_end-b_1rufi_62","outer-arc":"_outer-arc_1rufi_66","outer-arc_start-a":"_outer-arc_start-a_1rufi_73","outer-arc_end-a":"_outer-arc_end-a_1rufi_77","outer-moon-a":"_outer-moon-a_1rufi_81","outer-moon-b":"_outer-moon-b_1rufi_90","outer-arc_start-b":"_outer-arc_start-b_1rufi_99","outer-arc_end-b":"_outer-arc_end-b_1rufi_103",spin:Ew},SM=Object.freeze(Object.defineProperty({__proto__:null,center:_w,default:wM,spin:Ew},Symbol.toStringTag,{value:"Module"})),_M=_t(SM);var Cw=J&&J.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Hu,"__esModule",{value:!0});Hu.Orbitals=void 0;const Qe=Et,ot=Cw(Ct),xe=Cw(_M);function EM({color:e="#7f58af",className:t,style:n}){return(0,Qe.jsxs)("div",{className:(0,ot.default)(xe.default["lds-orbitals"],t),style:{...n},children:[(0,Qe.jsx)("div",{className:xe.default.center,style:{background:e}}),(0,Qe.jsxs)("div",{className:(0,ot.default)(xe.default["inner-spin"]),children:[(0,Qe.jsx)("div",{className:(0,ot.default)(xe.default["inner-arc"],xe.default["inner-arc_start-a"]),style:{borderColor:e}}),(0,Qe.jsx)("div",{className:(0,ot.default)(xe.default["inner-arc"],xe.default["inner-arc_end-a"]),style:{borderColor:e}}),(0,Qe.jsx)("div",{className:(0,ot.default)(xe.default["inner-arc"],xe.default["inner-arc_start-b"]),style:{borderColor:e}}),(0,Qe.jsx)("div",{className:(0,ot.default)(xe.default["inner-arc"],xe.default["inner-arc_end-b"]),style:{borderColor:e}}),(0,Qe.jsx)("div",{className:(0,ot.default)(xe.default["inner-moon-a"]),style:{background:e}}),(0,Qe.jsx)("div",{className:(0,ot.default)(xe.default["inner-moon-b"]),style:{background:e}})]}),(0,Qe.jsxs)("div",{className:(0,ot.default)(xe.default["outer-spin"]),children:[(0,Qe.jsx)("div",{className:(0,ot.default)(xe.default["outer-arc"],xe.default["outer-arc_start-a"]),style:{borderColor:e}}),(0,Qe.jsx)("div",{className:(0,ot.default)(xe.default["outer-arc"],xe.default["outer-arc_end-a"]),style:{borderColor:e}}),(0,Qe.jsx)("div",{className:(0,ot.default)(xe.default["outer-arc"],xe.default["outer-arc_start-b"]),style:{borderColor:e}}),(0,Qe.jsx)("div",{className:(0,ot.default)(xe.default["outer-arc"],xe.default["outer-arc_end-b"]),style:{borderColor:e}}),(0,Qe.jsx)("div",{className:(0,ot.default)(xe.default["outer-moon-a"]),style:{background:e}}),(0,Qe.jsx)("div",{className:(0,ot.default)(xe.default["outer-moon-b"]),style:{background:e}})]})]})}Hu.Orbitals=EM;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Orbitals=void 0;var t=Hu;Object.defineProperty(e,"Orbitals",{enumerable:!0,get:function(){return t.Orbitals}})})(Sw);var kw={},Wu={};const CM={"lds-ring":"_lds-ring_xgxdp_1"},kM=Object.freeze(Object.defineProperty({__proto__:null,default:CM},Symbol.toStringTag,{value:"Module"})),TM=_t(kM);var Tw=J&&J.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Wu,"__esModule",{value:!0});Wu.Ring=void 0;const L0=Et,OM=Tw(Ct),PM=Tw(TM);function MM({color:e="#7f58af",size:t=80,className:n,style:r}){const i=[...Array(4)].map((o,a)=>(0,L0.jsx)("div",{style:{borderColor:`${e} transparent transparent transparent`,width:t*.8,height:t*.8,margin:t*.1,borderWidth:t*.1}},a));return(0,L0.jsx)("div",{className:(0,OM.default)(PM.default["lds-ring"],n),style:{width:t,height:t,...r},children:i})}Wu.Ring=MM;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Ring=void 0;var t=Wu;Object.defineProperty(e,"Ring",{enumerable:!0,get:function(){return t.Ring}})})(kw);var Ow={},Gu={};const IM={"lds-ripple":"_lds-ripple_1lgcf_1"},jM=Object.freeze(Object.defineProperty({__proto__:null,default:IM},Symbol.toStringTag,{value:"Module"})),$M=_t(jM);var Pw=J&&J.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Gu,"__esModule",{value:!0});Gu.Ripple=void 0;const A0=Et,DM=Pw(Ct),RM=Pw($M);function LM({color:e="#7f58af",size:t=80,className:n,style:r}){const i=[...Array(2)].map((o,a)=>(0,A0.jsx)("div",{style:{borderColor:`${e}`,borderWidth:t*.05}},a));return(0,A0.jsx)("div",{className:(0,DM.default)(RM.default["lds-ripple"],n),style:{width:t,height:t,...r},children:i})}Gu.Ripple=LM;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Ripple=void 0;var t=Gu;Object.defineProperty(e,"Ripple",{enumerable:!0,get:function(){return t.Ripple}})})(Ow);var Mw={},Yu={};const AM={"lds-roller":"_lds-roller_ks1ij_1","div-after":"_div-after_ks1ij_11"},FM=Object.freeze(Object.defineProperty({__proto__:null,default:AM},Symbol.toStringTag,{value:"Module"})),NM=_t(FM);var Iw=J&&J.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Yu,"__esModule",{value:!0});Yu.Roller=void 0;const od=Et,F0=Iw(Ct),N0=Iw(NM);function zM({color:e="#7f58af",className:t,style:n}){const r=[...Array(8)].map((i,o)=>(0,od.jsx)("div",{children:(0,od.jsx)("div",{className:(0,F0.default)(N0.default["div-after"]),style:{background:e}})},o));return(0,od.jsx)("div",{className:(0,F0.default)(N0.default["lds-roller"],t),style:{...n},children:r})}Yu.Roller=zM;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Roller=void 0;var t=Yu;Object.defineProperty(e,"Roller",{enumerable:!0,get:function(){return t.Roller}})})(Mw);var jw={},Xu={};const VM={"lds-spinner":"_lds-spinner_flf3t_1","div-after":"_div-after_flf3t_12"},BM=Object.freeze(Object.defineProperty({__proto__:null,default:VM},Symbol.toStringTag,{value:"Module"})),UM=_t(BM);var $w=J&&J.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Xu,"__esModule",{value:!0});Xu.Spinner=void 0;const ad=Et,z0=$w(Ct),V0=$w(UM);function HM({color:e="#7f58af",className:t,style:n}){const r=[...Array(12)].map((i,o)=>(0,ad.jsx)("div",{children:(0,ad.jsx)("div",{className:(0,z0.default)(V0.default["div-after"]),style:{background:e}})},o));return(0,ad.jsx)("div",{className:(0,z0.default)(V0.default["lds-spinner"],t),style:{...n},children:r})}Xu.Spinner=HM;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Spinner=void 0;var t=Xu;Object.defineProperty(e,"Spinner",{enumerable:!0,get:function(){return t.Spinner}})})(jw);var Dw={},qu={};const Rw="_left_v9vlb_30",Lw="_right_v9vlb_33",Aw="_anim_v9vlb_37",WM={"lds-ouroboro":"_lds-ouroboro_v9vlb_1",left:Rw,right:Lw,anim:Aw,"lds-ouroboro-rotate":"_lds-ouroboro-rotate_v9vlb_1"},GM=Object.freeze(Object.defineProperty({__proto__:null,anim:Aw,default:WM,left:Rw,right:Lw},Symbol.toStringTag,{value:"Module"})),YM=_t(GM);var Fw=J&&J.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(qu,"__esModule",{value:!0});qu.Ouroboro=void 0;const wo=Et,So=Fw(Ct),_o=Fw(YM);function XM({color:e="#7f58af",style:t,className:n}){return(0,wo.jsxs)("div",{className:(0,So.default)(_o.default["lds-ouroboro"],n),style:{...t},children:[(0,wo.jsx)("span",{className:(0,So.default)(_o.default.left),children:(0,wo.jsx)("span",{className:(0,So.default)(_o.default.anim),style:{background:e}})}),(0,wo.jsx)("span",{className:(0,So.default)(_o.default.right),children:(0,wo.jsx)("span",{className:(0,So.default)(_o.default.anim),style:{background:e}})})]})}qu.Ouroboro=XM;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Ouroboro=void 0;var t=qu;Object.defineProperty(e,"Ouroboro",{enumerable:!0,get:function(){return t.Ouroboro}})})(Dw);(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Ouroboro=e.Spinner=e.Roller=e.Ripple=e.Ring=e.Orbitals=e.Hourglass=e.Heart=e.Grid=e.Facebook=e.Ellipsis=e.DualRing=e.Default=e.Circle=void 0;const t=Bb;Object.defineProperty(e,"Circle",{enumerable:!0,get:function(){return t.Circle}});const n=lw;Object.defineProperty(e,"Default",{enumerable:!0,get:function(){return n.Default}});const r=cw;Object.defineProperty(e,"DualRing",{enumerable:!0,get:function(){return r.DualRing}});const i=fw;Object.defineProperty(e,"Ellipsis",{enumerable:!0,get:function(){return i.Ellipsis}});const o=hw;Object.defineProperty(e,"Facebook",{enumerable:!0,get:function(){return o.Facebook}});const a=gw;Object.defineProperty(e,"Grid",{enumerable:!0,get:function(){return a.Grid}});const l=yw;Object.defineProperty(e,"Heart",{enumerable:!0,get:function(){return l.Heart}});const s=bw;Object.defineProperty(e,"Hourglass",{enumerable:!0,get:function(){return s.Hourglass}});const u=Sw;Object.defineProperty(e,"Orbitals",{enumerable:!0,get:function(){return u.Orbitals}});const c=kw;Object.defineProperty(e,"Ring",{enumerable:!0,get:function(){return c.Ring}});const d=Ow;Object.defineProperty(e,"Ripple",{enumerable:!0,get:function(){return d.Ripple}});const m=Mw;Object.defineProperty(e,"Roller",{enumerable:!0,get:function(){return m.Roller}});const h=jw;Object.defineProperty(e,"Spinner",{enumerable:!0,get:function(){return h.Spinner}});const g=Dw;Object.defineProperty(e,"Ouroboro",{enumerable:!0,get:function(){return g.Ouroboro}})})(Vb);const qM=()=>y.jsx(g3,{children:y.jsx(Vb.Default,{color:"#6d433da8"})}),KM="/Didiv/assets/Ancient_Kyiv-2153f7e6.ttf",ZM=CT`
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
  src: url(${KM}) format('truetype');
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
`,QM=T.div`
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
`,JM=T.a`
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
`,e4=T.h2`
  margin-top: 20px;
  font-size: 30px;
  text-transform: uppercase;
  margin-bottom: 20px;
  color: #333;
  @media screen and (min-width: 768px) {
    font-size: 35px;
  }
`,t4=T.h3`

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
`,n4=T.a`

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
`,r4=T.div`
  width: 40px;
  height: 40px;
  border: 2px solid white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`,i4=[{id:"bikes",title:"Велосипеди",image:"/Didiv/catalog/bikes.jpeg",big:!0},{id:"saddles",title:"Сідла",image:"/Didiv/catalog/saddles.jpeg"},{id:"wheels",title:"Колеса",image:"/Didiv/catalog/wheels.jpeg"},{id:"frames",title:"Рами",image:"/Didiv/catalog/frames.jpeg"},{id:"handlebars",title:"Керма",image:"/Didiv/catalog/handlebars.jpeg"},{id:"stems",title:"Виноси",image:"/Didiv/catalog/stems.jpeg"}],o4=()=>y.jsxs(y.Fragment,{children:[y.jsx(e4,{children:"Каталог"}),y.jsxs(QM,{children:[i4.map(e=>y.jsx(JM,{href:`Didiv/catalog/${e.id}`,bg:e.image,isBig:e.big,children:y.jsx(t4,{children:e.title})},e.id)),y.jsxs(n4,{href:"catalog",children:[y.jsx("p",{children:"Весь каталог"}),y.jsx(r4,{children:y.jsx(yb,{size:24})})]})]})]});function B0(e){return e!==null&&typeof e=="object"&&"constructor"in e&&e.constructor===Object}function Zh(e={},t={}){const n=["__proto__","constructor","prototype"];Object.keys(t).filter(r=>n.indexOf(r)<0).forEach(r=>{typeof e[r]>"u"?e[r]=t[r]:B0(t[r])&&B0(e[r])&&Object.keys(t[r]).length>0&&Zh(e[r],t[r])})}const Nw={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector(){return null},querySelectorAll(){return[]},getElementById(){return null},createEvent(){return{initEvent(){}}},createElement(){return{children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName(){return[]}}},createElementNS(){return{}},importNode(){return null},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function _n(){const e=typeof document<"u"?document:{};return Zh(e,Nw),e}const a4={document:Nw,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle(){return{getPropertyValue(){return""}}},Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia(){return{}},requestAnimationFrame(e){return typeof setTimeout>"u"?(e(),null):setTimeout(e,0)},cancelAnimationFrame(e){typeof setTimeout>"u"||clearTimeout(e)}};function ft(){const e=typeof window<"u"?window:{};return Zh(e,a4),e}function s4(e=""){return e.trim().split(" ").filter(t=>!!t.trim())}function l4(e){const t=e;Object.keys(t).forEach(n=>{try{t[n]=null}catch{}try{delete t[n]}catch{}})}function zw(e,t=0){return setTimeout(e,t)}function Pl(){return Date.now()}function u4(e){const t=ft();let n;return t.getComputedStyle&&(n=t.getComputedStyle(e,null)),!n&&e.currentStyle&&(n=e.currentStyle),n||(n=e.style),n}function c4(e,t="x"){const n=ft();let r,i,o;const a=u4(e);return n.WebKitCSSMatrix?(i=a.transform||a.webkitTransform,i.split(",").length>6&&(i=i.split(", ").map(l=>l.replace(",",".")).join(", ")),o=new n.WebKitCSSMatrix(i==="none"?"":i)):(o=a.MozTransform||a.OTransform||a.MsTransform||a.msTransform||a.transform||a.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),r=o.toString().split(",")),t==="x"&&(n.WebKitCSSMatrix?i=o.m41:r.length===16?i=parseFloat(r[12]):i=parseFloat(r[4])),t==="y"&&(n.WebKitCSSMatrix?i=o.m42:r.length===16?i=parseFloat(r[13]):i=parseFloat(r[5])),i||0}function ds(e){return typeof e=="object"&&e!==null&&e.constructor&&Object.prototype.toString.call(e).slice(8,-1)==="Object"}function d4(e){return typeof window<"u"&&typeof window.HTMLElement<"u"?e instanceof HTMLElement:e&&(e.nodeType===1||e.nodeType===11)}function Ot(...e){const t=Object(e[0]);for(let n=1;n<e.length;n+=1){const r=e[n];if(r!=null&&!d4(r)){const i=Object.keys(Object(r)).filter(o=>o!=="__proto__"&&o!=="constructor"&&o!=="prototype");for(let o=0,a=i.length;o<a;o+=1){const l=i[o],s=Object.getOwnPropertyDescriptor(r,l);s!==void 0&&s.enumerable&&(ds(t[l])&&ds(r[l])?r[l].__swiper__?t[l]=r[l]:Ot(t[l],r[l]):!ds(t[l])&&ds(r[l])?(t[l]={},r[l].__swiper__?t[l]=r[l]:Ot(t[l],r[l])):t[l]=r[l])}}}return t}function oi(e,t,n){e.style.setProperty(t,n)}function Vw({swiper:e,targetPosition:t,side:n}){const r=ft(),i=-e.translate;let o=null,a;const l=e.params.speed;e.wrapperEl.style.scrollSnapType="none",r.cancelAnimationFrame(e.cssModeFrameID);const s=t>i?"next":"prev",u=(d,m)=>s==="next"&&d>=m||s==="prev"&&d<=m,c=()=>{a=new Date().getTime(),o===null&&(o=a);const d=Math.max(Math.min((a-o)/l,1),0),m=.5-Math.cos(d*Math.PI)/2;let h=i+m*(t-i);if(u(h,t)&&(h=t),e.wrapperEl.scrollTo({[n]:h}),u(h,t)){e.wrapperEl.style.overflow="hidden",e.wrapperEl.style.scrollSnapType="",setTimeout(()=>{e.wrapperEl.style.overflow="",e.wrapperEl.scrollTo({[n]:h})}),r.cancelAnimationFrame(e.cssModeFrameID);return}e.cssModeFrameID=r.requestAnimationFrame(c)};c()}function xn(e,t=""){const n=ft(),r=[...e.children];return n.HTMLSlotElement&&e instanceof HTMLSlotElement&&r.push(...e.assignedElements()),t?r.filter(i=>i.matches(t)):r}function f4(e,t){const n=[t];for(;n.length>0;){const r=n.shift();if(e===r)return!0;n.push(...r.children,...r.shadowRoot?r.shadowRoot.children:[],...r.assignedElements?r.assignedElements():[])}}function p4(e,t){const n=ft();let r=t.contains(e);return!r&&n.HTMLSlotElement&&t instanceof HTMLSlotElement&&(r=[...t.assignedElements()].includes(e),r||(r=f4(e,t))),r}function Ml(e){try{console.warn(e);return}catch{}}function Il(e,t=[]){const n=document.createElement(e);return n.classList.add(...Array.isArray(t)?t:s4(t)),n}function h4(e,t){const n=[];for(;e.previousElementSibling;){const r=e.previousElementSibling;t?r.matches(t)&&n.push(r):n.push(r),e=r}return n}function m4(e,t){const n=[];for(;e.nextElementSibling;){const r=e.nextElementSibling;t?r.matches(t)&&n.push(r):n.push(r),e=r}return n}function cr(e,t){return ft().getComputedStyle(e,null).getPropertyValue(t)}function jl(e){let t=e,n;if(t){for(n=0;(t=t.previousSibling)!==null;)t.nodeType===1&&(n+=1);return n}}function Bw(e,t){const n=[];let r=e.parentElement;for(;r;)t?r.matches(t)&&n.push(r):n.push(r),r=r.parentElement;return n}function ep(e,t,n){const r=ft();return n?e[t==="width"?"offsetWidth":"offsetHeight"]+parseFloat(r.getComputedStyle(e,null).getPropertyValue(t==="width"?"margin-right":"margin-top"))+parseFloat(r.getComputedStyle(e,null).getPropertyValue(t==="width"?"margin-left":"margin-bottom")):e.offsetWidth}function ze(e){return(Array.isArray(e)?e:[e]).filter(t=>!!t)}function xa(e,t=""){typeof trustedTypes<"u"?e.innerHTML=trustedTypes.createPolicy("html",{createHTML:n=>n}).createHTML(t):e.innerHTML=t}function Uw(e,t,n,r){return e.params.createElements&&Object.keys(r).forEach(i=>{if(!n[i]&&n.auto===!0){let o=xn(e.el,`.${r[i]}`)[0];o||(o=Il("div",r[i]),o.className=r[i],e.el.append(o)),n[i]=o,t[i]=o}}),n}const U0='<svg class="swiper-navigation-icon" width="11" height="20" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.38296 20.0762C0.111788 19.805 0.111788 19.3654 0.38296 19.0942L9.19758 10.2796L0.38296 1.46497C0.111788 1.19379 0.111788 0.754138 0.38296 0.482966C0.654131 0.211794 1.09379 0.211794 1.36496 0.482966L10.4341 9.55214C10.8359 9.9539 10.8359 10.6053 10.4341 11.007L1.36496 20.0762C1.09379 20.3474 0.654131 20.3474 0.38296 20.0762Z" fill="currentColor"/></svg>';function g4({swiper:e,extendParams:t,on:n,emit:r}){t({navigation:{nextEl:null,prevEl:null,addIcons:!0,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock",navigationDisabledClass:"swiper-navigation-disabled"}}),e.navigation={nextEl:null,prevEl:null,arrowSvg:U0};function i(h){let g;return h&&typeof h=="string"&&e.isElement&&(g=e.el.querySelector(h)||e.hostEl.querySelector(h),g)?g:(h&&(typeof h=="string"&&(g=[...document.querySelectorAll(h)]),e.params.uniqueNavElements&&typeof h=="string"&&g&&g.length>1&&e.el.querySelectorAll(h).length===1?g=e.el.querySelector(h):g&&g.length===1&&(g=g[0])),h&&!g?h:g)}function o(h,g){const x=e.params.navigation;h=ze(h),h.forEach(S=>{S&&(S.classList[g?"add":"remove"](...x.disabledClass.split(" ")),S.tagName==="BUTTON"&&(S.disabled=g),e.params.watchOverflow&&e.enabled&&S.classList[e.isLocked?"add":"remove"](x.lockClass))})}function a(){const{nextEl:h,prevEl:g}=e.navigation;if(e.params.loop){o(g,!1),o(h,!1);return}o(g,e.isBeginning&&!e.params.rewind),o(h,e.isEnd&&!e.params.rewind)}function l(h){h.preventDefault(),!(e.isBeginning&&!e.params.loop&&!e.params.rewind)&&(e.slidePrev(),r("navigationPrev"))}function s(h){h.preventDefault(),!(e.isEnd&&!e.params.loop&&!e.params.rewind)&&(e.slideNext(),r("navigationNext"))}function u(){const h=e.params.navigation;if(e.params.navigation=Uw(e,e.originalParams.navigation,e.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),!(h.nextEl||h.prevEl))return;let g=i(h.nextEl),x=i(h.prevEl);Object.assign(e.navigation,{nextEl:g,prevEl:x}),g=ze(g),x=ze(x);const S=(f,p)=>{if(f){if(h.addIcons&&f.matches(".swiper-button-next,.swiper-button-prev")&&!f.querySelector("svg")){const v=document.createElement("div");xa(v,U0),f.appendChild(v.querySelector("svg")),v.remove()}f.addEventListener("click",p==="next"?s:l)}!e.enabled&&f&&f.classList.add(...h.lockClass.split(" "))};g.forEach(f=>S(f,"next")),x.forEach(f=>S(f,"prev"))}function c(){let{nextEl:h,prevEl:g}=e.navigation;h=ze(h),g=ze(g);const x=(S,f)=>{S.removeEventListener("click",f==="next"?s:l),S.classList.remove(...e.params.navigation.disabledClass.split(" "))};h.forEach(S=>x(S,"next")),g.forEach(S=>x(S,"prev"))}n("init",()=>{e.params.navigation.enabled===!1?m():(u(),a())}),n("toEdge fromEdge lock unlock",()=>{a()}),n("destroy",()=>{c()}),n("enable disable",()=>{let{nextEl:h,prevEl:g}=e.navigation;if(h=ze(h),g=ze(g),e.enabled){a();return}[...h,...g].filter(x=>!!x).forEach(x=>x.classList.add(e.params.navigation.lockClass))}),n("click",(h,g)=>{let{nextEl:x,prevEl:S}=e.navigation;x=ze(x),S=ze(S);const f=g.target;let p=S.includes(f)||x.includes(f);if(e.isElement&&!p){const v=g.path||g.composedPath&&g.composedPath();v&&(p=v.find(w=>x.includes(w)||S.includes(w)))}if(e.params.navigation.hideOnClick&&!p){if(e.pagination&&e.params.pagination&&e.params.pagination.clickable&&(e.pagination.el===f||e.pagination.el.contains(f)))return;let v;x.length?v=x[0].classList.contains(e.params.navigation.hiddenClass):S.length&&(v=S[0].classList.contains(e.params.navigation.hiddenClass)),r(v===!0?"navigationShow":"navigationHide"),[...x,...S].filter(w=>!!w).forEach(w=>w.classList.toggle(e.params.navigation.hiddenClass))}});const d=()=>{e.el.classList.remove(...e.params.navigation.navigationDisabledClass.split(" ")),u(),a()},m=()=>{e.el.classList.add(...e.params.navigation.navigationDisabledClass.split(" ")),c()};Object.assign(e.navigation,{enable:d,disable:m,update:a,init:u,destroy:c})}function Eo(e=""){return`.${e.trim().replace(/([\.:!+\/()[\]#>~*^$|=,'"@{}\\])/g,"\\$1").replace(/ /g,".")}`}function v4({swiper:e,extendParams:t,on:n,emit:r}){const i="swiper-pagination";t({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:f=>f,formatFractionTotal:f=>f,bulletClass:`${i}-bullet`,bulletActiveClass:`${i}-bullet-active`,modifierClass:`${i}-`,currentClass:`${i}-current`,totalClass:`${i}-total`,hiddenClass:`${i}-hidden`,progressbarFillClass:`${i}-progressbar-fill`,progressbarOppositeClass:`${i}-progressbar-opposite`,clickableClass:`${i}-clickable`,lockClass:`${i}-lock`,horizontalClass:`${i}-horizontal`,verticalClass:`${i}-vertical`,paginationDisabledClass:`${i}-disabled`}}),e.pagination={el:null,bullets:[]};let o,a=0;function l(){return!e.params.pagination.el||!e.pagination.el||Array.isArray(e.pagination.el)&&e.pagination.el.length===0}function s(f,p){const{bulletActiveClass:v}=e.params.pagination;f&&(f=f[`${p==="prev"?"previous":"next"}ElementSibling`],f&&(f.classList.add(`${v}-${p}`),f=f[`${p==="prev"?"previous":"next"}ElementSibling`],f&&f.classList.add(`${v}-${p}-${p}`)))}function u(f,p,v){if(f=f%v,p=p%v,p===f+1)return"next";if(p===f-1)return"previous"}function c(f){const p=f.target.closest(Eo(e.params.pagination.bulletClass));if(!p)return;f.preventDefault();const v=jl(p)*e.params.slidesPerGroup;if(e.params.loop){if(e.realIndex===v)return;const w=u(e.realIndex,v,e.slides.length);w==="next"?e.slideNext():w==="previous"?e.slidePrev():e.slideToLoop(v)}else e.slideTo(v)}function d(){const f=e.rtl,p=e.params.pagination;if(l())return;let v=e.pagination.el;v=ze(v);let w,C;const k=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.slides.length,_=e.params.loop?Math.ceil(k/e.params.slidesPerGroup):e.snapGrid.length;if(e.params.loop?(C=e.previousRealIndex||0,w=e.params.slidesPerGroup>1?Math.floor(e.realIndex/e.params.slidesPerGroup):e.realIndex):typeof e.snapIndex<"u"?(w=e.snapIndex,C=e.previousSnapIndex):(C=e.previousIndex||0,w=e.activeIndex||0),p.type==="bullets"&&e.pagination.bullets&&e.pagination.bullets.length>0){const E=e.pagination.bullets;let M,I,$;if(p.dynamicBullets&&(o=ep(E[0],e.isHorizontal()?"width":"height",!0),v.forEach(P=>{P.style[e.isHorizontal()?"width":"height"]=`${o*(p.dynamicMainBullets+4)}px`}),p.dynamicMainBullets>1&&C!==void 0&&(a+=w-(C||0),a>p.dynamicMainBullets-1?a=p.dynamicMainBullets-1:a<0&&(a=0)),M=Math.max(w-a,0),I=M+(Math.min(E.length,p.dynamicMainBullets)-1),$=(I+M)/2),E.forEach(P=>{const j=[...["","-next","-next-next","-prev","-prev-prev","-main"].map(L=>`${p.bulletActiveClass}${L}`)].map(L=>typeof L=="string"&&L.includes(" ")?L.split(" "):L).flat();P.classList.remove(...j)}),v.length>1)E.forEach(P=>{const j=jl(P);j===w?P.classList.add(...p.bulletActiveClass.split(" ")):e.isElement&&P.setAttribute("part","bullet"),p.dynamicBullets&&(j>=M&&j<=I&&P.classList.add(...`${p.bulletActiveClass}-main`.split(" ")),j===M&&s(P,"prev"),j===I&&s(P,"next"))});else{const P=E[w];if(P&&P.classList.add(...p.bulletActiveClass.split(" ")),e.isElement&&E.forEach((j,L)=>{j.setAttribute("part",L===w?"bullet-active":"bullet")}),p.dynamicBullets){const j=E[M],L=E[I];for(let R=M;R<=I;R+=1)E[R]&&E[R].classList.add(...`${p.bulletActiveClass}-main`.split(" "));s(j,"prev"),s(L,"next")}}if(p.dynamicBullets){const P=Math.min(E.length,p.dynamicMainBullets+4),j=(o*P-o)/2-$*o,L=f?"right":"left";E.forEach(R=>{R.style[e.isHorizontal()?L:"top"]=`${j}px`})}}v.forEach((E,M)=>{if(p.type==="fraction"&&(E.querySelectorAll(Eo(p.currentClass)).forEach(I=>{I.textContent=p.formatFractionCurrent(w+1)}),E.querySelectorAll(Eo(p.totalClass)).forEach(I=>{I.textContent=p.formatFractionTotal(_)})),p.type==="progressbar"){let I;p.progressbarOpposite?I=e.isHorizontal()?"vertical":"horizontal":I=e.isHorizontal()?"horizontal":"vertical";const $=(w+1)/_;let P=1,j=1;I==="horizontal"?P=$:j=$,E.querySelectorAll(Eo(p.progressbarFillClass)).forEach(L=>{L.style.transform=`translate3d(0,0,0) scaleX(${P}) scaleY(${j})`,L.style.transitionDuration=`${e.params.speed}ms`})}p.type==="custom"&&p.renderCustom?(xa(E,p.renderCustom(e,w+1,_)),M===0&&r("paginationRender",E)):(M===0&&r("paginationRender",E),r("paginationUpdate",E)),e.params.watchOverflow&&e.enabled&&E.classList[e.isLocked?"add":"remove"](p.lockClass)})}function m(){const f=e.params.pagination;if(l())return;const p=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.grid&&e.params.grid.rows>1?e.slides.length/Math.ceil(e.params.grid.rows):e.slides.length;let v=e.pagination.el;v=ze(v);let w="";if(f.type==="bullets"){let C=e.params.loop?Math.ceil(p/e.params.slidesPerGroup):e.snapGrid.length;e.params.freeMode&&e.params.freeMode.enabled&&C>p&&(C=p);for(let k=0;k<C;k+=1)f.renderBullet?w+=f.renderBullet.call(e,k,f.bulletClass):w+=`<${f.bulletElement} ${e.isElement?'part="bullet"':""} class="${f.bulletClass}"></${f.bulletElement}>`}f.type==="fraction"&&(f.renderFraction?w=f.renderFraction.call(e,f.currentClass,f.totalClass):w=`<span class="${f.currentClass}"></span> / <span class="${f.totalClass}"></span>`),f.type==="progressbar"&&(f.renderProgressbar?w=f.renderProgressbar.call(e,f.progressbarFillClass):w=`<span class="${f.progressbarFillClass}"></span>`),e.pagination.bullets=[],v.forEach(C=>{f.type!=="custom"&&xa(C,w||""),f.type==="bullets"&&e.pagination.bullets.push(...C.querySelectorAll(Eo(f.bulletClass)))}),f.type!=="custom"&&r("paginationRender",v[0])}function h(){e.params.pagination=Uw(e,e.originalParams.pagination,e.params.pagination,{el:"swiper-pagination"});const f=e.params.pagination;if(!f.el)return;let p;typeof f.el=="string"&&e.isElement&&(p=e.el.querySelector(f.el)),!p&&typeof f.el=="string"&&(p=[...document.querySelectorAll(f.el)]),p||(p=f.el),!(!p||p.length===0)&&(e.params.uniqueNavElements&&typeof f.el=="string"&&Array.isArray(p)&&p.length>1&&(p=[...e.el.querySelectorAll(f.el)],p.length>1&&(p=p.find(v=>Bw(v,".swiper")[0]===e.el))),Array.isArray(p)&&p.length===1&&(p=p[0]),Object.assign(e.pagination,{el:p}),p=ze(p),p.forEach(v=>{f.type==="bullets"&&f.clickable&&v.classList.add(...(f.clickableClass||"").split(" ")),v.classList.add(f.modifierClass+f.type),v.classList.add(e.isHorizontal()?f.horizontalClass:f.verticalClass),f.type==="bullets"&&f.dynamicBullets&&(v.classList.add(`${f.modifierClass}${f.type}-dynamic`),a=0,f.dynamicMainBullets<1&&(f.dynamicMainBullets=1)),f.type==="progressbar"&&f.progressbarOpposite&&v.classList.add(f.progressbarOppositeClass),f.clickable&&v.addEventListener("click",c),e.enabled||v.classList.add(f.lockClass)}))}function g(){const f=e.params.pagination;if(l())return;let p=e.pagination.el;p&&(p=ze(p),p.forEach(v=>{v.classList.remove(f.hiddenClass),v.classList.remove(f.modifierClass+f.type),v.classList.remove(e.isHorizontal()?f.horizontalClass:f.verticalClass),f.clickable&&(v.classList.remove(...(f.clickableClass||"").split(" ")),v.removeEventListener("click",c))})),e.pagination.bullets&&e.pagination.bullets.forEach(v=>v.classList.remove(...f.bulletActiveClass.split(" ")))}n("changeDirection",()=>{if(!e.pagination||!e.pagination.el)return;const f=e.params.pagination;let{el:p}=e.pagination;p=ze(p),p.forEach(v=>{v.classList.remove(f.horizontalClass,f.verticalClass),v.classList.add(e.isHorizontal()?f.horizontalClass:f.verticalClass)})}),n("init",()=>{e.params.pagination.enabled===!1?S():(h(),m(),d())}),n("activeIndexChange",()=>{typeof e.snapIndex>"u"&&d()}),n("snapIndexChange",()=>{d()}),n("snapGridLengthChange",()=>{m(),d()}),n("destroy",()=>{g()}),n("enable disable",()=>{let{el:f}=e.pagination;f&&(f=ze(f),f.forEach(p=>p.classList[e.enabled?"remove":"add"](e.params.pagination.lockClass)))}),n("lock unlock",()=>{d()}),n("click",(f,p)=>{const v=p.target,w=ze(e.pagination.el);if(e.params.pagination.el&&e.params.pagination.hideOnClick&&w&&w.length>0&&!v.classList.contains(e.params.pagination.bulletClass)){if(e.navigation&&(e.navigation.nextEl&&v===e.navigation.nextEl||e.navigation.prevEl&&v===e.navigation.prevEl))return;const C=w[0].classList.contains(e.params.pagination.hiddenClass);r(C===!0?"paginationShow":"paginationHide"),w.forEach(k=>k.classList.toggle(e.params.pagination.hiddenClass))}});const x=()=>{e.el.classList.remove(e.params.pagination.paginationDisabledClass);let{el:f}=e.pagination;f&&(f=ze(f),f.forEach(p=>p.classList.remove(e.params.pagination.paginationDisabledClass))),h(),m(),d()},S=()=>{e.el.classList.add(e.params.pagination.paginationDisabledClass);let{el:f}=e.pagination;f&&(f=ze(f),f.forEach(p=>p.classList.add(e.params.pagination.paginationDisabledClass))),g()};Object.assign(e.pagination,{enable:x,disable:S,render:m,update:d,init:h,destroy:g})}function y4({swiper:e,extendParams:t,on:n,emit:r,params:i}){e.autoplay={running:!1,paused:!1,timeLeft:0},t({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!1,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}});let o,a,l=i&&i.autoplay?i.autoplay.delay:3e3,s=i&&i.autoplay?i.autoplay.delay:3e3,u,c=new Date().getTime(),d,m,h,g,x,S;function f(A){!e||e.destroyed||!e.wrapperEl||A.target===e.wrapperEl&&(e.wrapperEl.removeEventListener("transitionend",f),!(S||A.detail&&A.detail.bySwiperTouchMove)&&M())}const p=()=>{if(e.destroyed||!e.autoplay.running)return;e.autoplay.paused?d=!0:d&&(s=u,d=!1);const A=e.autoplay.paused?u:c+s-new Date().getTime();e.autoplay.timeLeft=A,r("autoplayTimeLeft",A,A/l),a=requestAnimationFrame(()=>{p()})},v=()=>{let A;return e.virtual&&e.params.virtual.enabled?A=e.slides.find(D=>D.classList.contains("swiper-slide-active")):A=e.slides[e.activeIndex],A?parseInt(A.getAttribute("data-swiper-autoplay"),10):void 0},w=()=>{let A=e.params.autoplay.delay;const O=v();return!Number.isNaN(O)&&O>0&&(A=O),A},C=A=>{if(e.destroyed||!e.autoplay.running)return;cancelAnimationFrame(a),p();let O=A;typeof O>"u"&&(O=w(),l=O,s=O),u=O;const D=e.params.speed,N=()=>{!e||e.destroyed||(e.params.autoplay.reverseDirection?!e.isBeginning||e.params.loop||e.params.rewind?(e.slidePrev(D,!0,!0),r("autoplay")):e.params.autoplay.stopOnLastSlide||(e.slideTo(e.slides.length-1,D,!0,!0),r("autoplay")):!e.isEnd||e.params.loop||e.params.rewind?(e.slideNext(D,!0,!0),r("autoplay")):e.params.autoplay.stopOnLastSlide||(e.slideTo(0,D,!0,!0),r("autoplay")),e.params.cssMode&&(c=new Date().getTime(),requestAnimationFrame(()=>{C()})))};return O>0?(clearTimeout(o),o=setTimeout(()=>{N()},O)):requestAnimationFrame(()=>{N()}),O},k=()=>{c=new Date().getTime(),e.autoplay.running=!0,C(),r("autoplayStart")},_=()=>{e.autoplay.running=!1,clearTimeout(o),cancelAnimationFrame(a),r("autoplayStop")},E=(A,O)=>{if(e.destroyed||!e.autoplay.running)return;clearTimeout(o),A||(x=!0);const D=()=>{r("autoplayPause"),e.params.autoplay.waitForTransition?e.wrapperEl.addEventListener("transitionend",f):M()};if(e.autoplay.paused=!0,O){D();return}u=(u||e.params.autoplay.delay)-(new Date().getTime()-c),!(e.isEnd&&u<0&&!e.params.loop)&&(u<0&&(u=0),D())},M=()=>{e.isEnd&&u<0&&!e.params.loop||e.destroyed||!e.autoplay.running||(c=new Date().getTime(),x?(x=!1,C(u)):C(),e.autoplay.paused=!1,r("autoplayResume"))},I=()=>{if(e.destroyed||!e.autoplay.running)return;const A=_n();A.visibilityState==="hidden"&&(x=!0,E(!0)),A.visibilityState==="visible"&&M()},$=A=>{A.pointerType==="mouse"&&(x=!0,S=!0,!(e.animating||e.autoplay.paused)&&E(!0))},P=A=>{A.pointerType==="mouse"&&(S=!1,e.autoplay.paused&&M())},j=()=>{e.params.autoplay.pauseOnMouseEnter&&(e.el.addEventListener("pointerenter",$),e.el.addEventListener("pointerleave",P))},L=()=>{e.el&&typeof e.el!="string"&&(e.el.removeEventListener("pointerenter",$),e.el.removeEventListener("pointerleave",P))},R=()=>{_n().addEventListener("visibilitychange",I)},F=()=>{_n().removeEventListener("visibilitychange",I)};n("init",()=>{e.params.autoplay.enabled&&(j(),R(),k())}),n("destroy",()=>{L(),F(),e.autoplay.running&&_()}),n("_freeModeStaticRelease",()=>{(h||x)&&M()}),n("_freeModeNoMomentumRelease",()=>{e.params.autoplay.disableOnInteraction?_():E(!0,!0)}),n("beforeTransitionStart",(A,O,D)=>{e.destroyed||!e.autoplay.running||(D||!e.params.autoplay.disableOnInteraction?E(!0,!0):_())}),n("sliderFirstMove",()=>{if(!(e.destroyed||!e.autoplay.running)){if(e.params.autoplay.disableOnInteraction){_();return}m=!0,h=!1,x=!1,g=setTimeout(()=>{x=!0,h=!0,E(!0)},200)}}),n("touchEnd",()=>{if(!(e.destroyed||!e.autoplay.running||!m)){if(clearTimeout(g),clearTimeout(o),e.params.autoplay.disableOnInteraction){h=!1,m=!1;return}h&&e.params.cssMode&&M(),h=!1,m=!1}}),n("slideChange",()=>{e.destroyed||!e.autoplay.running||e.autoplay.paused&&(u=w(),l=w())}),Object.assign(e.autoplay,{start:k,stop:_,pause:E,resume:M})}let sd;function x4(){const e=ft(),t=_n();return{smoothScroll:t.documentElement&&t.documentElement.style&&"scrollBehavior"in t.documentElement.style,touch:!!("ontouchstart"in e||e.DocumentTouch&&t instanceof e.DocumentTouch)}}function Hw(){return sd||(sd=x4()),sd}let ld;function b4({userAgent:e}={}){const t=Hw(),n=ft(),r=n.navigator.platform,i=e||n.navigator.userAgent,o={ios:!1,android:!1},a=n.screen.width,l=n.screen.height,s=i.match(/(Android);?[\s\/]+([\d.]+)?/);let u=i.match(/(iPad)(?!\1).*OS\s([\d_]+)/);const c=i.match(/(iPod)(.*OS\s([\d_]+))?/),d=!u&&i.match(/(iPhone\sOS|iOS)\s([\d_]+)/),m=r==="Win32";let h=r==="MacIntel";const g=["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"];return!u&&h&&t.touch&&g.indexOf(`${a}x${l}`)>=0&&(u=i.match(/(Version)\/([\d.]+)/),u||(u=[0,1,"13_0_0"]),h=!1),s&&!m&&(o.os="android",o.android=!0),(u||d||c)&&(o.os="ios",o.ios=!0),o}function Ww(e={}){return ld||(ld=b4(e)),ld}let ud;function w4(){const e=ft(),t=Ww();let n=!1;function r(){const l=e.navigator.userAgent.toLowerCase();return l.indexOf("safari")>=0&&l.indexOf("chrome")<0&&l.indexOf("android")<0}if(r()){const l=String(e.navigator.userAgent);if(l.includes("Version/")){const[s,u]=l.split("Version/")[1].split(" ")[0].split(".").map(c=>Number(c));n=s<16||s===16&&u<2}}const i=/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent),o=r(),a=o||i&&t.ios;return{isSafari:n||o,needPerspectiveFix:n,need3dFix:a,isWebView:i}}function Gw(){return ud||(ud=w4()),ud}function S4({swiper:e,on:t,emit:n}){const r=ft();let i=null,o=null;const a=()=>{!e||e.destroyed||!e.initialized||(n("beforeResize"),n("resize"))},l=()=>{!e||e.destroyed||!e.initialized||(i=new ResizeObserver(c=>{o=r.requestAnimationFrame(()=>{const{width:d,height:m}=e;let h=d,g=m;c.forEach(({contentBoxSize:x,contentRect:S,target:f})=>{f&&f!==e.el||(h=S?S.width:(x[0]||x).inlineSize,g=S?S.height:(x[0]||x).blockSize)}),(h!==d||g!==m)&&a()})}),i.observe(e.el))},s=()=>{o&&r.cancelAnimationFrame(o),i&&i.unobserve&&e.el&&(i.unobserve(e.el),i=null)},u=()=>{!e||e.destroyed||!e.initialized||n("orientationchange")};t("init",()=>{if(e.params.resizeObserver&&typeof r.ResizeObserver<"u"){l();return}r.addEventListener("resize",a),r.addEventListener("orientationchange",u)}),t("destroy",()=>{s(),r.removeEventListener("resize",a),r.removeEventListener("orientationchange",u)})}function _4({swiper:e,extendParams:t,on:n,emit:r}){const i=[],o=ft(),a=(u,c={})=>{const d=o.MutationObserver||o.WebkitMutationObserver,m=new d(h=>{if(e.__preventObserver__)return;if(h.length===1){r("observerUpdate",h[0]);return}const g=function(){r("observerUpdate",h[0])};o.requestAnimationFrame?o.requestAnimationFrame(g):o.setTimeout(g,0)});m.observe(u,{attributes:typeof c.attributes>"u"?!0:c.attributes,childList:e.isElement||(typeof c.childList>"u"?!0:c).childList,characterData:typeof c.characterData>"u"?!0:c.characterData}),i.push(m)},l=()=>{if(e.params.observer){if(e.params.observeParents){const u=Bw(e.hostEl);for(let c=0;c<u.length;c+=1)a(u[c])}a(e.hostEl,{childList:e.params.observeSlideChildren}),a(e.wrapperEl,{attributes:!1})}},s=()=>{i.forEach(u=>{u.disconnect()}),i.splice(0,i.length)};t({observer:!1,observeParents:!1,observeSlideChildren:!1}),n("init",l),n("destroy",s)}var E4={on(e,t,n){const r=this;if(!r.eventsListeners||r.destroyed||typeof t!="function")return r;const i=n?"unshift":"push";return e.split(" ").forEach(o=>{r.eventsListeners[o]||(r.eventsListeners[o]=[]),r.eventsListeners[o][i](t)}),r},once(e,t,n){const r=this;if(!r.eventsListeners||r.destroyed||typeof t!="function")return r;function i(...o){r.off(e,i),i.__emitterProxy&&delete i.__emitterProxy,t.apply(r,o)}return i.__emitterProxy=t,r.on(e,i,n)},onAny(e,t){const n=this;if(!n.eventsListeners||n.destroyed||typeof e!="function")return n;const r=t?"unshift":"push";return n.eventsAnyListeners.indexOf(e)<0&&n.eventsAnyListeners[r](e),n},offAny(e){const t=this;if(!t.eventsListeners||t.destroyed||!t.eventsAnyListeners)return t;const n=t.eventsAnyListeners.indexOf(e);return n>=0&&t.eventsAnyListeners.splice(n,1),t},off(e,t){const n=this;return!n.eventsListeners||n.destroyed||!n.eventsListeners||e.split(" ").forEach(r=>{typeof t>"u"?n.eventsListeners[r]=[]:n.eventsListeners[r]&&n.eventsListeners[r].forEach((i,o)=>{(i===t||i.__emitterProxy&&i.__emitterProxy===t)&&n.eventsListeners[r].splice(o,1)})}),n},emit(...e){const t=this;if(!t.eventsListeners||t.destroyed||!t.eventsListeners)return t;let n,r,i;return typeof e[0]=="string"||Array.isArray(e[0])?(n=e[0],r=e.slice(1,e.length),i=t):(n=e[0].events,r=e[0].data,i=e[0].context||t),r.unshift(i),(Array.isArray(n)?n:n.split(" ")).forEach(a=>{t.eventsAnyListeners&&t.eventsAnyListeners.length&&t.eventsAnyListeners.forEach(l=>{l.apply(i,[a,...r])}),t.eventsListeners&&t.eventsListeners[a]&&t.eventsListeners[a].forEach(l=>{l.apply(i,r)})}),t}};function C4(){const e=this;let t,n;const r=e.el;typeof e.params.width<"u"&&e.params.width!==null?t=e.params.width:t=r.clientWidth,typeof e.params.height<"u"&&e.params.height!==null?n=e.params.height:n=r.clientHeight,!(t===0&&e.isHorizontal()||n===0&&e.isVertical())&&(t=t-parseInt(cr(r,"padding-left")||0,10)-parseInt(cr(r,"padding-right")||0,10),n=n-parseInt(cr(r,"padding-top")||0,10)-parseInt(cr(r,"padding-bottom")||0,10),Number.isNaN(t)&&(t=0),Number.isNaN(n)&&(n=0),Object.assign(e,{width:t,height:n,size:e.isHorizontal()?t:n}))}function k4(){const e=this;function t(I,$){return parseFloat(I.getPropertyValue(e.getDirectionLabel($))||0)}const n=e.params,{wrapperEl:r,slidesEl:i,rtlTranslate:o,wrongRTL:a}=e,l=e.virtual&&n.virtual.enabled,s=l?e.virtual.slides.length:e.slides.length,u=xn(i,`.${e.params.slideClass}, swiper-slide`),c=l?e.virtual.slides.length:u.length;let d=[];const m=[],h=[];let g=n.slidesOffsetBefore;typeof g=="function"&&(g=n.slidesOffsetBefore.call(e));let x=n.slidesOffsetAfter;typeof x=="function"&&(x=n.slidesOffsetAfter.call(e));const S=e.snapGrid.length,f=e.slidesGrid.length,p=e.size-g-x;let v=n.spaceBetween,w=-g,C=0,k=0;if(typeof p>"u")return;typeof v=="string"&&v.indexOf("%")>=0?v=parseFloat(v.replace("%",""))/100*p:typeof v=="string"&&(v=parseFloat(v)),e.virtualSize=-v-g-x,u.forEach(I=>{o?I.style.marginLeft="":I.style.marginRight="",I.style.marginBottom="",I.style.marginTop=""}),n.centeredSlides&&n.cssMode&&(oi(r,"--swiper-centered-offset-before",""),oi(r,"--swiper-centered-offset-after","")),n.cssMode&&(oi(r,"--swiper-slides-offset-before",`${g}px`),oi(r,"--swiper-slides-offset-after",`${x}px`));const _=n.grid&&n.grid.rows>1&&e.grid;_?e.grid.initSlides(u):e.grid&&e.grid.unsetSlides();let E;const M=n.slidesPerView==="auto"&&n.breakpoints&&Object.keys(n.breakpoints).filter(I=>typeof n.breakpoints[I].slidesPerView<"u").length>0;for(let I=0;I<c;I+=1){E=0;const $=u[I];if(!($&&(_&&e.grid.updateSlide(I,$,u),cr($,"display")==="none"))){if(l&&n.slidesPerView==="auto")n.virtual.slidesPerViewAutoSlideSize&&(E=n.virtual.slidesPerViewAutoSlideSize),E&&$&&(n.roundLengths&&(E=Math.floor(E)),$.style[e.getDirectionLabel("width")]=`${E}px`);else if(n.slidesPerView==="auto"){M&&($.style[e.getDirectionLabel("width")]="");const P=getComputedStyle($),j=$.style.transform,L=$.style.webkitTransform;if(j&&($.style.transform="none"),L&&($.style.webkitTransform="none"),n.roundLengths)E=e.isHorizontal()?ep($,"width",!0):ep($,"height",!0);else{const R=t(P,"width"),F=t(P,"padding-left"),A=t(P,"padding-right"),O=t(P,"margin-left"),D=t(P,"margin-right"),N=P.getPropertyValue("box-sizing");if(N&&N==="border-box")E=R+O+D;else{const{clientWidth:B,offsetWidth:z}=$;E=R+F+A+O+D+(z-B)}}j&&($.style.transform=j),L&&($.style.webkitTransform=L),n.roundLengths&&(E=Math.floor(E))}else E=(p-(n.slidesPerView-1)*v)/n.slidesPerView,n.roundLengths&&(E=Math.floor(E)),$&&($.style[e.getDirectionLabel("width")]=`${E}px`);$&&($.swiperSlideSize=E),h.push(E),n.centeredSlides?(w=w+E/2+C/2+v,C===0&&I!==0&&(w=w-p/2-v),I===0&&(w=w-p/2-v),Math.abs(w)<1/1e3&&(w=0),n.roundLengths&&(w=Math.floor(w)),k%n.slidesPerGroup===0&&d.push(w),m.push(w)):(n.roundLengths&&(w=Math.floor(w)),(k-Math.min(e.params.slidesPerGroupSkip,k))%e.params.slidesPerGroup===0&&d.push(w),m.push(w),w=w+E+v),e.virtualSize+=E+v,C=E,k+=1}}if(e.virtualSize=Math.max(e.virtualSize,p)+x,o&&a&&(n.effect==="slide"||n.effect==="coverflow")&&(r.style.width=`${e.virtualSize+v}px`),n.setWrapperSize&&(r.style[e.getDirectionLabel("width")]=`${e.virtualSize+v}px`),_&&e.grid.updateWrapperSize(E,d),!n.centeredSlides){const I=n.slidesPerView!=="auto"&&n.slidesPerView%1!==0,$=n.snapToSlideEdge&&!n.loop&&(n.slidesPerView==="auto"||I);let P=d.length;if($){let L;if(n.slidesPerView==="auto"){L=1;let R=0;for(let F=h.length-1;F>=0&&(R+=h[F]+(F<h.length-1?v:0),R<=p);F-=1)L=h.length-F}else L=Math.floor(n.slidesPerView);P=Math.max(c-L,0)}const j=[];for(let L=0;L<d.length;L+=1){let R=d[L];n.roundLengths&&(R=Math.floor(R)),$?L<=P&&j.push(R):d[L]<=e.virtualSize-p&&j.push(R)}d=j,Math.floor(e.virtualSize-p)-Math.floor(d[d.length-1])>1&&($||d.push(e.virtualSize-p))}if(l&&n.loop){const I=h[0]+v;if(n.slidesPerGroup>1){const $=Math.ceil((e.virtual.slidesBefore+e.virtual.slidesAfter)/n.slidesPerGroup),P=I*n.slidesPerGroup;for(let j=0;j<$;j+=1)d.push(d[d.length-1]+P)}for(let $=0;$<e.virtual.slidesBefore+e.virtual.slidesAfter;$+=1)n.slidesPerGroup===1&&d.push(d[d.length-1]+I),m.push(m[m.length-1]+I),e.virtualSize+=I}if(d.length===0&&(d=[0]),v!==0){const I=e.isHorizontal()&&o?"marginLeft":e.getDirectionLabel("marginRight");u.filter(($,P)=>!n.cssMode||n.loop?!0:P!==u.length-1).forEach($=>{$.style[I]=`${v}px`})}if(n.centeredSlides&&n.centeredSlidesBounds){let I=0;h.forEach(P=>{I+=P+(v||0)}),I-=v;const $=I>p?I-p:0;d=d.map(P=>P<=0?-g:P>$?$+x:P)}if(n.centerInsufficientSlides){let I=0;if(h.forEach($=>{I+=$+(v||0)}),I-=v,I<p){const $=(p-I)/2;d.forEach((P,j)=>{d[j]=P-$}),m.forEach((P,j)=>{m[j]=P+$})}}if(Object.assign(e,{slides:u,snapGrid:d,slidesGrid:m,slidesSizesGrid:h}),n.centeredSlides&&n.cssMode&&!n.centeredSlidesBounds){oi(r,"--swiper-centered-offset-before",`${-d[0]}px`),oi(r,"--swiper-centered-offset-after",`${e.size/2-h[h.length-1]/2}px`);const I=-e.snapGrid[0],$=-e.slidesGrid[0];e.snapGrid=e.snapGrid.map(P=>P+I),e.slidesGrid=e.slidesGrid.map(P=>P+$)}if(c!==s&&e.emit("slidesLengthChange"),d.length!==S&&(e.params.watchOverflow&&e.checkOverflow(),e.emit("snapGridLengthChange")),m.length!==f&&e.emit("slidesGridLengthChange"),n.watchSlidesProgress&&e.updateSlidesOffset(),e.emit("slidesUpdated"),!l&&!n.cssMode&&(n.effect==="slide"||n.effect==="fade")){const I=`${n.containerModifierClass}backface-hidden`,$=e.el.classList.contains(I);c<=n.maxBackfaceHiddenSlides?$||e.el.classList.add(I):$&&e.el.classList.remove(I)}}function T4(e){const t=this,n=[],r=t.virtual&&t.params.virtual.enabled;let i=0,o;typeof e=="number"?t.setTransition(e):e===!0&&t.setTransition(t.params.speed);const a=l=>r?t.slides[t.getSlideIndexByData(l)]:t.slides[l];if(t.params.slidesPerView!=="auto"&&t.params.slidesPerView>1)if(t.params.centeredSlides)(t.visibleSlides||[]).forEach(l=>{n.push(l)});else for(o=0;o<Math.ceil(t.params.slidesPerView);o+=1){const l=t.activeIndex+o;if(l>t.slides.length&&!r)break;n.push(a(l))}else n.push(a(t.activeIndex));for(o=0;o<n.length;o+=1)if(typeof n[o]<"u"){const l=n[o].offsetHeight;i=l>i?l:i}(i||i===0)&&(t.wrapperEl.style.height=`${i}px`)}function O4(){const e=this,t=e.slides,n=e.isElement?e.isHorizontal()?e.wrapperEl.offsetLeft:e.wrapperEl.offsetTop:0;for(let r=0;r<t.length;r+=1)t[r].swiperSlideOffset=(e.isHorizontal()?t[r].offsetLeft:t[r].offsetTop)-n-e.cssOverflowAdjustment()}const H0=(e,t,n)=>{t&&!e.classList.contains(n)?e.classList.add(n):!t&&e.classList.contains(n)&&e.classList.remove(n)};function P4(e=this&&this.translate||0){const t=this,n=t.params,{slides:r,rtlTranslate:i,snapGrid:o}=t;if(r.length===0)return;typeof r[0].swiperSlideOffset>"u"&&t.updateSlidesOffset();let a=-e;i&&(a=e),t.visibleSlidesIndexes=[],t.visibleSlides=[];let l=n.spaceBetween;typeof l=="string"&&l.indexOf("%")>=0?l=parseFloat(l.replace("%",""))/100*t.size:typeof l=="string"&&(l=parseFloat(l));for(let s=0;s<r.length;s+=1){const u=r[s];let c=u.swiperSlideOffset;n.cssMode&&n.centeredSlides&&(c-=r[0].swiperSlideOffset);const d=(a+(n.centeredSlides?t.minTranslate():0)-c)/(u.swiperSlideSize+l),m=(a-o[0]+(n.centeredSlides?t.minTranslate():0)-c)/(u.swiperSlideSize+l),h=-(a-c),g=h+t.slidesSizesGrid[s],x=h>=0&&h<=t.size-t.slidesSizesGrid[s],S=h>=0&&h<t.size-1||g>1&&g<=t.size||h<=0&&g>=t.size;S&&(t.visibleSlides.push(u),t.visibleSlidesIndexes.push(s)),H0(u,S,n.slideVisibleClass),H0(u,x,n.slideFullyVisibleClass),u.progress=i?-d:d,u.originalProgress=i?-m:m}}function M4(e){const t=this;if(typeof e>"u"){const c=t.rtlTranslate?-1:1;e=t&&t.translate&&t.translate*c||0}const n=t.params,r=t.maxTranslate()-t.minTranslate();let{progress:i,isBeginning:o,isEnd:a,progressLoop:l}=t;const s=o,u=a;if(r===0)i=0,o=!0,a=!0;else{i=(e-t.minTranslate())/r;const c=Math.abs(e-t.minTranslate())<1,d=Math.abs(e-t.maxTranslate())<1;o=c||i<=0,a=d||i>=1,c&&(i=0),d&&(i=1)}if(n.loop){const c=t.getSlideIndexByData(0),d=t.getSlideIndexByData(t.slides.length-1),m=t.slidesGrid[c],h=t.slidesGrid[d],g=t.slidesGrid[t.slidesGrid.length-1],x=Math.abs(e);x>=m?l=(x-m)/g:l=(x+g-h)/g,l>1&&(l-=1)}Object.assign(t,{progress:i,progressLoop:l,isBeginning:o,isEnd:a}),(n.watchSlidesProgress||n.centeredSlides&&n.autoHeight)&&t.updateSlidesProgress(e),o&&!s&&t.emit("reachBeginning toEdge"),a&&!u&&t.emit("reachEnd toEdge"),(s&&!o||u&&!a)&&t.emit("fromEdge"),t.emit("progress",i)}const cd=(e,t,n)=>{t&&!e.classList.contains(n)?e.classList.add(n):!t&&e.classList.contains(n)&&e.classList.remove(n)};function I4(){const e=this,{slides:t,params:n,slidesEl:r,activeIndex:i}=e,o=e.virtual&&n.virtual.enabled,a=e.grid&&n.grid&&n.grid.rows>1,l=d=>xn(r,`.${n.slideClass}${d}, swiper-slide${d}`)[0];let s,u,c;if(o)if(n.loop){let d=i-e.virtual.slidesBefore;d<0&&(d=e.virtual.slides.length+d),d>=e.virtual.slides.length&&(d-=e.virtual.slides.length),s=l(`[data-swiper-slide-index="${d}"]`)}else s=l(`[data-swiper-slide-index="${i}"]`);else a?(s=t.find(d=>d.column===i),c=t.find(d=>d.column===i+1),u=t.find(d=>d.column===i-1)):s=t[i];s&&(a||(c=m4(s,`.${n.slideClass}, swiper-slide`)[0],n.loop&&!c&&(c=t[0]),u=h4(s,`.${n.slideClass}, swiper-slide`)[0],n.loop&&!u===0&&(u=t[t.length-1]))),t.forEach(d=>{cd(d,d===s,n.slideActiveClass),cd(d,d===c,n.slideNextClass),cd(d,d===u,n.slidePrevClass)}),e.emitSlidesClasses()}const Ws=(e,t)=>{if(!e||e.destroyed||!e.params)return;const n=()=>e.isElement?"swiper-slide":`.${e.params.slideClass}`,r=t.closest(n());if(r){let i=r.querySelector(`.${e.params.lazyPreloaderClass}`);!i&&e.isElement&&(r.shadowRoot?i=r.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`):requestAnimationFrame(()=>{r.shadowRoot&&(i=r.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`),i&&!i.lazyPreloaderManaged&&i.remove())})),i&&!i.lazyPreloaderManaged&&i.remove()}},dd=(e,t)=>{if(!e.slides[t])return;const n=e.slides[t].querySelector('[loading="lazy"]');n&&n.removeAttribute("loading")},tp=e=>{if(!e||e.destroyed||!e.params)return;let t=e.params.lazyPreloadPrevNext;const n=e.slides.length;if(!n||!t||t<0)return;t=Math.min(t,n);const r=e.params.slidesPerView==="auto"?e.slidesPerViewDynamic():Math.ceil(e.params.slidesPerView),i=e.activeIndex;if(e.params.grid&&e.params.grid.rows>1){const a=i,l=[a-t];l.push(...Array.from({length:t}).map((s,u)=>a+r+u)),e.slides.forEach((s,u)=>{l.includes(s.column)&&dd(e,u)});return}const o=i+r-1;if(e.params.rewind||e.params.loop)for(let a=i-t;a<=o+t;a+=1){const l=(a%n+n)%n;(l<i||l>o)&&dd(e,l)}else for(let a=Math.max(i-t,0);a<=Math.min(o+t,n-1);a+=1)a!==i&&(a>o||a<i)&&dd(e,a)};function j4(e){const{slidesGrid:t,params:n}=e,r=e.rtlTranslate?e.translate:-e.translate;let i;for(let o=0;o<t.length;o+=1)typeof t[o+1]<"u"?r>=t[o]&&r<t[o+1]-(t[o+1]-t[o])/2?i=o:r>=t[o]&&r<t[o+1]&&(i=o+1):r>=t[o]&&(i=o);return n.normalizeSlideIndex&&(i<0||typeof i>"u")&&(i=0),i}function $4(e){const t=this,n=t.rtlTranslate?t.translate:-t.translate,{snapGrid:r,params:i,activeIndex:o,realIndex:a,snapIndex:l}=t;let s=e,u;const c=h=>{let g=h-t.virtual.slidesBefore;return g<0&&(g=t.virtual.slides.length+g),g>=t.virtual.slides.length&&(g-=t.virtual.slides.length),g};if(typeof s>"u"&&(s=j4(t)),r.indexOf(n)>=0)u=r.indexOf(n);else{const h=Math.min(i.slidesPerGroupSkip,s);u=h+Math.floor((s-h)/i.slidesPerGroup)}if(u>=r.length&&(u=r.length-1),s===o&&!t.params.loop){u!==l&&(t.snapIndex=u,t.emit("snapIndexChange"));return}if(s===o&&t.params.loop&&t.virtual&&t.params.virtual.enabled){t.realIndex=c(s);return}const d=t.grid&&i.grid&&i.grid.rows>1;let m;if(t.virtual&&i.virtual.enabled)i.loop?m=c(s):m=s;else if(d){const h=t.slides.find(x=>x.column===s);let g=parseInt(h.getAttribute("data-swiper-slide-index"),10);Number.isNaN(g)&&(g=Math.max(t.slides.indexOf(h),0)),m=Math.floor(g/i.grid.rows)}else if(t.slides[s]){const h=t.slides[s].getAttribute("data-swiper-slide-index");h?m=parseInt(h,10):m=s}else m=s;Object.assign(t,{previousSnapIndex:l,snapIndex:u,previousRealIndex:a,realIndex:m,previousIndex:o,activeIndex:s}),t.initialized&&tp(t),t.emit("activeIndexChange"),t.emit("snapIndexChange"),(t.initialized||t.params.runCallbacksOnInit)&&(a!==m&&t.emit("realIndexChange"),t.emit("slideChange"))}function D4(e,t){const n=this,r=n.params;let i=e.closest(`.${r.slideClass}, swiper-slide`);!i&&n.isElement&&t&&t.length>1&&t.includes(e)&&[...t.slice(t.indexOf(e)+1,t.length)].forEach(l=>{!i&&l.matches&&l.matches(`.${r.slideClass}, swiper-slide`)&&(i=l)});let o=!1,a;if(i){for(let l=0;l<n.slides.length;l+=1)if(n.slides[l]===i){o=!0,a=l;break}}if(i&&o)n.clickedSlide=i,n.virtual&&n.params.virtual.enabled?n.clickedIndex=parseInt(i.getAttribute("data-swiper-slide-index"),10):n.clickedIndex=a;else{n.clickedSlide=void 0,n.clickedIndex=void 0;return}r.slideToClickedSlide&&n.clickedIndex!==void 0&&n.clickedIndex!==n.activeIndex&&n.slideToClickedSlide()}var R4={updateSize:C4,updateSlides:k4,updateAutoHeight:T4,updateSlidesOffset:O4,updateSlidesProgress:P4,updateProgress:M4,updateSlidesClasses:I4,updateActiveIndex:$4,updateClickedSlide:D4};function L4(e=this.isHorizontal()?"x":"y"){const t=this,{params:n,rtlTranslate:r,translate:i,wrapperEl:o}=t;if(n.virtualTranslate)return r?-i:i;if(n.cssMode)return i;let a=c4(o,e);return a+=t.cssOverflowAdjustment(),r&&(a=-a),a||0}function A4(e,t){const n=this,{rtlTranslate:r,params:i,wrapperEl:o,progress:a}=n;let l=0,s=0;const u=0;n.isHorizontal()?l=r?-e:e:s=e,i.roundLengths&&(l=Math.floor(l),s=Math.floor(s)),n.previousTranslate=n.translate,n.translate=n.isHorizontal()?l:s,i.cssMode?o[n.isHorizontal()?"scrollLeft":"scrollTop"]=n.isHorizontal()?-l:-s:i.virtualTranslate||(n.isHorizontal()?l-=n.cssOverflowAdjustment():s-=n.cssOverflowAdjustment(),o.style.transform=`translate3d(${l}px, ${s}px, ${u}px)`);let c;const d=n.maxTranslate()-n.minTranslate();d===0?c=0:c=(e-n.minTranslate())/d,c!==a&&n.updateProgress(e),n.emit("setTranslate",n.translate,t)}function F4(){return-this.snapGrid[0]}function N4(){return-this.snapGrid[this.snapGrid.length-1]}function z4(e=0,t=this.params.speed,n=!0,r=!0,i){const o=this,{params:a,wrapperEl:l}=o;if(o.animating&&a.preventInteractionOnTransition)return!1;const s=o.minTranslate(),u=o.maxTranslate();let c;if(r&&e>s?c=s:r&&e<u?c=u:c=e,o.updateProgress(c),a.cssMode){const d=o.isHorizontal();if(t===0)l[d?"scrollLeft":"scrollTop"]=-c;else{if(!o.support.smoothScroll)return Vw({swiper:o,targetPosition:-c,side:d?"left":"top"}),!0;l.scrollTo({[d?"left":"top"]:-c,behavior:"smooth"})}return!0}return t===0?(o.setTransition(0),o.setTranslate(c),n&&(o.emit("beforeTransitionStart",t,i),o.emit("transitionEnd"))):(o.setTransition(t),o.setTranslate(c),n&&(o.emit("beforeTransitionStart",t,i),o.emit("transitionStart")),o.animating||(o.animating=!0,o.onTranslateToWrapperTransitionEnd||(o.onTranslateToWrapperTransitionEnd=function(m){!o||o.destroyed||m.target===this&&(o.wrapperEl.removeEventListener("transitionend",o.onTranslateToWrapperTransitionEnd),o.onTranslateToWrapperTransitionEnd=null,delete o.onTranslateToWrapperTransitionEnd,o.animating=!1,n&&o.emit("transitionEnd"))}),o.wrapperEl.addEventListener("transitionend",o.onTranslateToWrapperTransitionEnd))),!0}var V4={getTranslate:L4,setTranslate:A4,minTranslate:F4,maxTranslate:N4,translateTo:z4};function B4(e,t){const n=this;n.params.cssMode||(n.wrapperEl.style.transitionDuration=`${e}ms`,n.wrapperEl.style.transitionDelay=e===0?"0ms":""),n.emit("setTransition",e,t)}function Yw({swiper:e,runCallbacks:t,direction:n,step:r}){const{activeIndex:i,previousIndex:o}=e;let a=n;a||(i>o?a="next":i<o?a="prev":a="reset"),e.emit(`transition${r}`),t&&a==="reset"?e.emit(`slideResetTransition${r}`):t&&i!==o&&(e.emit(`slideChangeTransition${r}`),a==="next"?e.emit(`slideNextTransition${r}`):e.emit(`slidePrevTransition${r}`))}function U4(e=!0,t){const n=this,{params:r}=n;r.cssMode||(r.autoHeight&&n.updateAutoHeight(),Yw({swiper:n,runCallbacks:e,direction:t,step:"Start"}))}function H4(e=!0,t){const n=this,{params:r}=n;n.animating=!1,!r.cssMode&&(n.setTransition(0),Yw({swiper:n,runCallbacks:e,direction:t,step:"End"}))}var W4={setTransition:B4,transitionStart:U4,transitionEnd:H4};function G4(e=0,t,n=!0,r,i){typeof e=="string"&&(e=parseInt(e,10));const o=this;let a=e;a<0&&(a=0);const{params:l,snapGrid:s,slidesGrid:u,previousIndex:c,activeIndex:d,rtlTranslate:m,wrapperEl:h,enabled:g}=o;if(!g&&!r&&!i||o.destroyed||o.animating&&l.preventInteractionOnTransition)return!1;typeof t>"u"&&(t=o.params.speed);const x=Math.min(o.params.slidesPerGroupSkip,a);let S=x+Math.floor((a-x)/o.params.slidesPerGroup);S>=s.length&&(S=s.length-1);const f=-s[S];if(l.normalizeSlideIndex)for(let _=0;_<u.length;_+=1){const E=-Math.floor(f*100),M=Math.floor(u[_]*100),I=Math.floor(u[_+1]*100);typeof u[_+1]<"u"?E>=M&&E<I-(I-M)/2?a=_:E>=M&&E<I&&(a=_+1):E>=M&&(a=_)}if(o.initialized&&a!==d&&(!o.allowSlideNext&&(m?f>o.translate&&f>o.minTranslate():f<o.translate&&f<o.minTranslate())||!o.allowSlidePrev&&f>o.translate&&f>o.maxTranslate()&&(d||0)!==a))return!1;a!==(c||0)&&n&&o.emit("beforeSlideChangeStart"),o.updateProgress(f);let p;a>d?p="next":a<d?p="prev":p="reset";const v=o.virtual&&o.params.virtual.enabled;if(!(v&&i)&&(m&&-f===o.translate||!m&&f===o.translate))return o.updateActiveIndex(a),l.autoHeight&&o.updateAutoHeight(),o.updateSlidesClasses(),l.effect!=="slide"&&o.setTranslate(f),p!=="reset"&&(o.transitionStart(n,p),o.transitionEnd(n,p)),!1;if(l.cssMode){const _=o.isHorizontal(),E=m?f:-f;if(t===0)v&&(o.wrapperEl.style.scrollSnapType="none",o._immediateVirtual=!0),v&&!o._cssModeVirtualInitialSet&&o.params.initialSlide>0?(o._cssModeVirtualInitialSet=!0,requestAnimationFrame(()=>{h[_?"scrollLeft":"scrollTop"]=E})):h[_?"scrollLeft":"scrollTop"]=E,v&&requestAnimationFrame(()=>{o.wrapperEl.style.scrollSnapType="",o._immediateVirtual=!1});else{if(!o.support.smoothScroll)return Vw({swiper:o,targetPosition:E,side:_?"left":"top"}),!0;h.scrollTo({[_?"left":"top"]:E,behavior:"smooth"})}return!0}const k=Gw().isSafari;return v&&!i&&k&&o.isElement&&o.virtual.update(!1,!1,a),o.setTransition(t),o.setTranslate(f),o.updateActiveIndex(a),o.updateSlidesClasses(),o.emit("beforeTransitionStart",t,r),o.transitionStart(n,p),t===0?o.transitionEnd(n,p):o.animating||(o.animating=!0,o.onSlideToWrapperTransitionEnd||(o.onSlideToWrapperTransitionEnd=function(E){!o||o.destroyed||E.target===this&&(o.wrapperEl.removeEventListener("transitionend",o.onSlideToWrapperTransitionEnd),o.onSlideToWrapperTransitionEnd=null,delete o.onSlideToWrapperTransitionEnd,o.transitionEnd(n,p))}),o.wrapperEl.addEventListener("transitionend",o.onSlideToWrapperTransitionEnd)),!0}function Y4(e=0,t,n=!0,r){typeof e=="string"&&(e=parseInt(e,10));const i=this;if(i.destroyed)return;typeof t>"u"&&(t=i.params.speed);const o=i.grid&&i.params.grid&&i.params.grid.rows>1;let a=e;if(i.params.loop)if(i.virtual&&i.params.virtual.enabled)a=a+i.virtual.slidesBefore;else{let l;if(o){const x=a*i.params.grid.rows;l=i.slides.find(S=>S.getAttribute("data-swiper-slide-index")*1===x).column}else l=i.getSlideIndexByData(a);const s=o?Math.ceil(i.slides.length/i.params.grid.rows):i.slides.length,{centeredSlides:u,slidesOffsetBefore:c,slidesOffsetAfter:d}=i.params,m=u||!!c||!!d;let h=i.params.slidesPerView;h==="auto"?h=i.slidesPerViewDynamic():(h=Math.ceil(parseFloat(i.params.slidesPerView,10)),m&&h%2===0&&(h=h+1));let g=s-l<h;if(m&&(g=g||l<Math.ceil(h/2)),r&&m&&i.params.slidesPerView!=="auto"&&!o&&(g=!1),g){const x=m?l<i.activeIndex?"prev":"next":l-i.activeIndex-1<i.params.slidesPerView?"next":"prev";i.loopFix({direction:x,slideTo:!0,activeSlideIndex:x==="next"?l+1:l-s+1,slideRealIndex:x==="next"?i.realIndex:void 0})}if(o){const x=a*i.params.grid.rows;a=i.slides.find(S=>S.getAttribute("data-swiper-slide-index")*1===x).column}else a=i.getSlideIndexByData(a)}return requestAnimationFrame(()=>{i.slideTo(a,t,n,r)}),i}function X4(e,t=!0,n){const r=this,{enabled:i,params:o,animating:a}=r;if(!i||r.destroyed)return r;typeof e>"u"&&(e=r.params.speed);let l=o.slidesPerGroup;o.slidesPerView==="auto"&&o.slidesPerGroup===1&&o.slidesPerGroupAuto&&(l=Math.max(r.slidesPerViewDynamic("current",!0),1));const s=r.activeIndex<o.slidesPerGroupSkip?1:l,u=r.virtual&&o.virtual.enabled;if(o.loop){if(a&&!u&&o.loopPreventsSliding)return!1;if(r.loopFix({direction:"next"}),r._clientLeft=r.wrapperEl.clientLeft,r.activeIndex===r.slides.length-1&&o.cssMode)return requestAnimationFrame(()=>{r.slideTo(r.activeIndex+s,e,t,n)}),!0}return o.rewind&&r.isEnd?r.slideTo(0,e,t,n):r.slideTo(r.activeIndex+s,e,t,n)}function q4(e,t=!0,n){const r=this,{params:i,snapGrid:o,slidesGrid:a,rtlTranslate:l,enabled:s,animating:u}=r;if(!s||r.destroyed)return r;typeof e>"u"&&(e=r.params.speed);const c=r.virtual&&i.virtual.enabled;if(i.loop){if(u&&!c&&i.loopPreventsSliding)return!1;r.loopFix({direction:"prev"}),r._clientLeft=r.wrapperEl.clientLeft}const d=l?r.translate:-r.translate;function m(p){return p<0?-Math.floor(Math.abs(p)):Math.floor(p)}const h=m(d),g=o.map(p=>m(p)),x=i.freeMode&&i.freeMode.enabled;let S=o[g.indexOf(h)-1];if(typeof S>"u"&&(i.cssMode||x)){let p;o.forEach((v,w)=>{h>=v&&(p=w)}),typeof p<"u"&&(S=x?o[p]:o[p>0?p-1:p])}let f=0;if(typeof S<"u"&&(f=a.indexOf(S),f<0&&(f=r.activeIndex-1),i.slidesPerView==="auto"&&i.slidesPerGroup===1&&i.slidesPerGroupAuto&&(f=f-r.slidesPerViewDynamic("previous",!0)+1,f=Math.max(f,0))),i.rewind&&r.isBeginning){const p=r.params.virtual&&r.params.virtual.enabled&&r.virtual?r.virtual.slides.length-1:r.slides.length-1;return r.slideTo(p,e,t,n)}else if(i.loop&&r.activeIndex===0&&i.cssMode)return requestAnimationFrame(()=>{r.slideTo(f,e,t,n)}),!0;return r.slideTo(f,e,t,n)}function K4(e,t=!0,n){const r=this;if(!r.destroyed)return typeof e>"u"&&(e=r.params.speed),r.slideTo(r.activeIndex,e,t,n)}function Z4(e,t=!0,n,r=.5){const i=this;if(i.destroyed)return;typeof e>"u"&&(e=i.params.speed);let o=i.activeIndex;const a=Math.min(i.params.slidesPerGroupSkip,o),l=a+Math.floor((o-a)/i.params.slidesPerGroup),s=i.rtlTranslate?i.translate:-i.translate;if(s>=i.snapGrid[l]){const u=i.snapGrid[l],c=i.snapGrid[l+1];s-u>(c-u)*r&&(o+=i.params.slidesPerGroup)}else{const u=i.snapGrid[l-1],c=i.snapGrid[l];s-u<=(c-u)*r&&(o-=i.params.slidesPerGroup)}return o=Math.max(o,0),o=Math.min(o,i.slidesGrid.length-1),i.slideTo(o,e,t,n)}function Q4(){const e=this;if(e.destroyed)return;const{params:t,slidesEl:n}=e,r=t.slidesPerView==="auto"?e.slidesPerViewDynamic():t.slidesPerView;let i=e.getSlideIndexWhenGrid(e.clickedIndex),o;const a=e.isElement?"swiper-slide":`.${t.slideClass}`,l=e.grid&&e.params.grid&&e.params.grid.rows>1;if(t.loop){if(e.animating)return;o=parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"),10),t.centeredSlides?e.slideToLoop(o):i>(l?(e.slides.length-r)/2-(e.params.grid.rows-1):e.slides.length-r)?(e.loopFix(),i=e.getSlideIndex(xn(n,`${a}[data-swiper-slide-index="${o}"]`)[0]),zw(()=>{e.slideTo(i)})):e.slideTo(i)}else e.slideTo(i)}var J4={slideTo:G4,slideToLoop:Y4,slideNext:X4,slidePrev:q4,slideReset:K4,slideToClosest:Z4,slideToClickedSlide:Q4};function eI(e,t){const n=this,{params:r,slidesEl:i}=n;if(!r.loop||n.virtual&&n.params.virtual.enabled)return;const o=()=>{xn(i,`.${r.slideClass}, swiper-slide`).forEach((g,x)=>{g.setAttribute("data-swiper-slide-index",x)})},a=()=>{const h=xn(i,`.${r.slideBlankClass}`);h.forEach(g=>{g.remove()}),h.length>0&&(n.recalcSlides(),n.updateSlides())},l=n.grid&&r.grid&&r.grid.rows>1;r.loopAddBlankSlides&&(r.slidesPerGroup>1||l)&&a();const s=r.slidesPerGroup*(l?r.grid.rows:1),u=n.slides.length%s!==0,c=l&&n.slides.length%r.grid.rows!==0,d=h=>{for(let g=0;g<h;g+=1){const x=n.isElement?Il("swiper-slide",[r.slideBlankClass]):Il("div",[r.slideClass,r.slideBlankClass]);n.slidesEl.append(x)}};if(u){if(r.loopAddBlankSlides){const h=s-n.slides.length%s;d(h),n.recalcSlides(),n.updateSlides()}else Ml("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");o()}else if(c){if(r.loopAddBlankSlides){const h=r.grid.rows-n.slides.length%r.grid.rows;d(h),n.recalcSlides(),n.updateSlides()}else Ml("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");o()}else o();const m=r.centeredSlides||!!r.slidesOffsetBefore||!!r.slidesOffsetAfter;n.loopFix({slideRealIndex:e,direction:m?void 0:"next",initial:t})}function tI({slideRealIndex:e,slideTo:t=!0,direction:n,setTranslate:r,activeSlideIndex:i,initial:o,byController:a,byMousewheel:l}={}){const s=this;if(!s.params.loop)return;s.emit("beforeLoopFix");const{slides:u,allowSlidePrev:c,allowSlideNext:d,slidesEl:m,params:h}=s,{centeredSlides:g,slidesOffsetBefore:x,slidesOffsetAfter:S,initialSlide:f}=h,p=g||!!x||!!S;if(s.allowSlidePrev=!0,s.allowSlideNext=!0,s.virtual&&h.virtual.enabled){t&&(!p&&s.snapIndex===0?s.slideTo(s.virtual.slides.length,0,!1,!0):p&&s.snapIndex<h.slidesPerView?s.slideTo(s.virtual.slides.length+s.snapIndex,0,!1,!0):s.snapIndex===s.snapGrid.length-1&&s.slideTo(s.virtual.slidesBefore,0,!1,!0)),s.allowSlidePrev=c,s.allowSlideNext=d,s.emit("loopFix");return}let v=h.slidesPerView;v==="auto"?v=s.slidesPerViewDynamic():(v=Math.ceil(parseFloat(h.slidesPerView,10)),p&&v%2===0&&(v=v+1));const w=h.slidesPerGroupAuto?v:h.slidesPerGroup;let C=p?Math.max(w,Math.ceil(v/2)):w;C%w!==0&&(C+=w-C%w),C+=h.loopAdditionalSlides,s.loopedSlides=C;const k=s.grid&&h.grid&&h.grid.rows>1;u.length<v+C||s.params.effect==="cards"&&u.length<v+C*2?Ml("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled or not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"):k&&h.grid.fill==="row"&&Ml("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");const _=[],E=[],M=k?Math.ceil(u.length/h.grid.rows):u.length,I=o&&M-f<v&&!p;let $=I?f:s.activeIndex;typeof i>"u"?i=s.getSlideIndex(u.find(O=>O.classList.contains(h.slideActiveClass))):$=i;const P=n==="next"||!n,j=n==="prev"||!n;let L=0,R=0;const A=(k?u[i].column:i)+(p&&typeof r>"u"?-v/2+.5:0);if(A<C){L=Math.max(C-A,w);for(let O=0;O<C-A;O+=1){const D=O-Math.floor(O/M)*M;if(k){const N=M-D-1;for(let B=u.length-1;B>=0;B-=1)u[B].column===N&&_.push(B)}else _.push(M-D-1)}}else if(A+v>M-C){R=Math.max(A-(M-C*2),w),I&&(R=Math.max(R,v-M+f+1));for(let O=0;O<R;O+=1){const D=O-Math.floor(O/M)*M;k?u.forEach((N,B)=>{N.column===D&&E.push(B)}):E.push(D)}}if(s.__preventObserver__=!0,requestAnimationFrame(()=>{s.__preventObserver__=!1}),s.params.effect==="cards"&&u.length<v+C*2&&(E.includes(i)&&E.splice(E.indexOf(i),1),_.includes(i)&&_.splice(_.indexOf(i),1)),j&&_.forEach(O=>{u[O].swiperLoopMoveDOM=!0,m.prepend(u[O]),u[O].swiperLoopMoveDOM=!1}),P&&E.forEach(O=>{u[O].swiperLoopMoveDOM=!0,m.append(u[O]),u[O].swiperLoopMoveDOM=!1}),s.recalcSlides(),h.slidesPerView==="auto"?s.updateSlides():k&&(_.length>0&&j||E.length>0&&P)&&s.slides.forEach((O,D)=>{s.grid.updateSlide(D,O,s.slides)}),h.watchSlidesProgress&&s.updateSlidesOffset(),t){if(_.length>0&&j){if(typeof e>"u"){const O=s.slidesGrid[$],N=s.slidesGrid[$+L]-O;l?s.setTranslate(s.translate-N):(s.slideTo($+Math.ceil(L),0,!1,!0),r&&(s.touchEventsData.startTranslate=s.touchEventsData.startTranslate-N,s.touchEventsData.currentTranslate=s.touchEventsData.currentTranslate-N))}else if(r){const O=k?_.length/h.grid.rows:_.length;s.slideTo(s.activeIndex+O,0,!1,!0),s.touchEventsData.currentTranslate=s.translate}}else if(E.length>0&&P)if(typeof e>"u"){const O=s.slidesGrid[$],N=s.slidesGrid[$-R]-O;l?s.setTranslate(s.translate-N):(s.slideTo($-R,0,!1,!0),r&&(s.touchEventsData.startTranslate=s.touchEventsData.startTranslate-N,s.touchEventsData.currentTranslate=s.touchEventsData.currentTranslate-N))}else{const O=k?E.length/h.grid.rows:E.length;s.slideTo(s.activeIndex-O,0,!1,!0)}}if(s.allowSlidePrev=c,s.allowSlideNext=d,s.controller&&s.controller.control&&!a){const O={slideRealIndex:e,direction:n,setTranslate:r,activeSlideIndex:i,byController:!0};Array.isArray(s.controller.control)?s.controller.control.forEach(D=>{!D.destroyed&&D.params.loop&&D.loopFix({...O,slideTo:D.params.slidesPerView===h.slidesPerView?t:!1})}):s.controller.control instanceof s.constructor&&s.controller.control.params.loop&&s.controller.control.loopFix({...O,slideTo:s.controller.control.params.slidesPerView===h.slidesPerView?t:!1})}s.emit("loopFix")}function nI(){const e=this,{params:t,slidesEl:n}=e;if(!t.loop||!n||e.virtual&&e.params.virtual.enabled)return;e.recalcSlides();const r=[];e.slides.forEach(i=>{const o=typeof i.swiperSlideIndex>"u"?i.getAttribute("data-swiper-slide-index")*1:i.swiperSlideIndex;r[o]=i}),e.slides.forEach(i=>{i.removeAttribute("data-swiper-slide-index")}),r.forEach(i=>{n.append(i)}),e.recalcSlides(),e.slideTo(e.realIndex,0)}var rI={loopCreate:eI,loopFix:tI,loopDestroy:nI};function iI(e){const t=this;if(!t.params.simulateTouch||t.params.watchOverflow&&t.isLocked||t.params.cssMode)return;const n=t.params.touchEventsTarget==="container"?t.el:t.wrapperEl;t.isElement&&(t.__preventObserver__=!0),n.style.cursor="move",n.style.cursor=e?"grabbing":"grab",t.isElement&&requestAnimationFrame(()=>{t.__preventObserver__=!1})}function oI(){const e=this;e.params.watchOverflow&&e.isLocked||e.params.cssMode||(e.isElement&&(e.__preventObserver__=!0),e[e.params.touchEventsTarget==="container"?"el":"wrapperEl"].style.cursor="",e.isElement&&requestAnimationFrame(()=>{e.__preventObserver__=!1}))}var aI={setGrabCursor:iI,unsetGrabCursor:oI};function sI(e,t=this){function n(r){if(!r||r===_n()||r===ft())return null;r.assignedSlot&&(r=r.assignedSlot);const i=r.closest(e);return!i&&!r.getRootNode?null:i||n(r.getRootNode().host)}return n(t)}function W0(e,t,n){const r=ft(),{params:i}=e,o=i.edgeSwipeDetection,a=i.edgeSwipeThreshold;return o&&(n<=a||n>=r.innerWidth-a)?o==="prevent"?(t.preventDefault(),!0):!1:!0}function lI(e){const t=this,n=_n();let r=e;r.originalEvent&&(r=r.originalEvent);const i=t.touchEventsData;if(r.type==="pointerdown"){if(i.pointerId!==null&&i.pointerId!==r.pointerId)return;i.pointerId=r.pointerId}else r.type==="touchstart"&&r.targetTouches.length===1&&(i.touchId=r.targetTouches[0].identifier);if(r.type==="touchstart"){W0(t,r,r.targetTouches[0].pageX);return}const{params:o,touches:a,enabled:l}=t;if(!l||!o.simulateTouch&&r.pointerType==="mouse"||t.animating&&o.preventInteractionOnTransition)return;!t.animating&&o.cssMode&&o.loop&&t.loopFix();let s=r.target;if(o.touchEventsTarget==="wrapper"&&!p4(s,t.wrapperEl)||"which"in r&&r.which===3||"button"in r&&r.button>0||i.isTouched&&i.isMoved)return;const u=!!o.noSwipingClass&&o.noSwipingClass!=="",c=r.composedPath?r.composedPath():r.path;u&&r.target&&r.target.shadowRoot&&c&&(s=c[0]);const d=o.noSwipingSelector?o.noSwipingSelector:`.${o.noSwipingClass}`,m=!!(r.target&&r.target.shadowRoot);if(o.noSwiping&&(m?sI(d,s):s.closest(d))){t.allowClick=!0;return}if(o.swipeHandler&&!s.closest(o.swipeHandler))return;a.currentX=r.pageX,a.currentY=r.pageY;const h=a.currentX,g=a.currentY;if(!W0(t,r,h))return;Object.assign(i,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),a.startX=h,a.startY=g,i.touchStartTime=Pl(),t.allowClick=!0,t.updateSize(),t.swipeDirection=void 0,o.threshold>0&&(i.allowThresholdMove=!1);let x=!0;s.matches(i.focusableElements)&&(x=!1,s.nodeName==="SELECT"&&(i.isTouched=!1)),n.activeElement&&n.activeElement.matches(i.focusableElements)&&n.activeElement!==s&&(r.pointerType==="mouse"||r.pointerType!=="mouse"&&!s.matches(i.focusableElements))&&n.activeElement.blur();const S=x&&t.allowTouchMove&&o.touchStartPreventDefault;(o.touchStartForcePreventDefault||S)&&!s.isContentEditable&&r.preventDefault(),o.freeMode&&o.freeMode.enabled&&t.freeMode&&t.animating&&!o.cssMode&&t.freeMode.onTouchStart(),t.emit("touchStart",r)}function uI(e){const t=_n(),n=this,r=n.touchEventsData,{params:i,touches:o,rtlTranslate:a,enabled:l}=n;if(!l||!i.simulateTouch&&e.pointerType==="mouse")return;let s=e;if(s.originalEvent&&(s=s.originalEvent),s.type==="pointermove"&&(r.touchId!==null||s.pointerId!==r.pointerId))return;let u;if(s.type==="touchmove"){if(u=[...s.changedTouches].find(k=>k.identifier===r.touchId),!u||u.identifier!==r.touchId)return}else u=s;if(!r.isTouched){r.startMoving&&r.isScrolling&&n.emit("touchMoveOpposite",s);return}const c=u.pageX,d=u.pageY;if(s.preventedByNestedSwiper){o.startX=c,o.startY=d;return}if(!n.allowTouchMove){s.target.matches(r.focusableElements)||(n.allowClick=!1),r.isTouched&&(Object.assign(o,{startX:c,startY:d,currentX:c,currentY:d}),r.touchStartTime=Pl());return}if(i.touchReleaseOnEdges&&!i.loop)if(n.isVertical()){if(d<o.startY&&n.translate<=n.maxTranslate()||d>o.startY&&n.translate>=n.minTranslate()){r.isTouched=!1,r.isMoved=!1;return}}else{if(a&&(c>o.startX&&-n.translate<=n.maxTranslate()||c<o.startX&&-n.translate>=n.minTranslate()))return;if(!a&&(c<o.startX&&n.translate<=n.maxTranslate()||c>o.startX&&n.translate>=n.minTranslate()))return}if(t.activeElement&&t.activeElement.matches(r.focusableElements)&&t.activeElement!==s.target&&s.pointerType!=="mouse"&&t.activeElement.blur(),t.activeElement&&s.target===t.activeElement&&s.target.matches(r.focusableElements)){r.isMoved=!0,n.allowClick=!1;return}r.allowTouchCallbacks&&n.emit("touchMove",s),o.previousX=o.currentX,o.previousY=o.currentY,o.currentX=c,o.currentY=d;const m=o.currentX-o.startX,h=o.currentY-o.startY;if(n.params.threshold&&Math.sqrt(m**2+h**2)<n.params.threshold)return;if(typeof r.isScrolling>"u"){let k;n.isHorizontal()&&o.currentY===o.startY||n.isVertical()&&o.currentX===o.startX?r.isScrolling=!1:m*m+h*h>=25&&(k=Math.atan2(Math.abs(h),Math.abs(m))*180/Math.PI,r.isScrolling=n.isHorizontal()?k>i.touchAngle:90-k>i.touchAngle)}if(r.isScrolling&&n.emit("touchMoveOpposite",s),typeof r.startMoving>"u"&&(o.currentX!==o.startX||o.currentY!==o.startY)&&(r.startMoving=!0),r.isScrolling||s.type==="touchmove"&&r.preventTouchMoveFromPointerMove){r.isTouched=!1;return}if(!r.startMoving)return;n.allowClick=!1,!i.cssMode&&s.cancelable&&s.preventDefault(),i.touchMoveStopPropagation&&!i.nested&&s.stopPropagation();let g=n.isHorizontal()?m:h,x=n.isHorizontal()?o.currentX-o.previousX:o.currentY-o.previousY;i.oneWayMovement&&(g=Math.abs(g)*(a?1:-1),x=Math.abs(x)*(a?1:-1)),o.diff=g,g*=i.touchRatio,a&&(g=-g,x=-x);const S=n.touchesDirection;n.swipeDirection=g>0?"prev":"next",n.touchesDirection=x>0?"prev":"next";const f=n.params.loop&&!i.cssMode,p=n.touchesDirection==="next"&&n.allowSlideNext||n.touchesDirection==="prev"&&n.allowSlidePrev;if(!r.isMoved){if(f&&p&&n.loopFix({direction:n.swipeDirection}),r.startTranslate=n.getTranslate(),n.setTransition(0),n.animating){const k=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0,detail:{bySwiperTouchMove:!0}});n.wrapperEl.dispatchEvent(k)}r.allowMomentumBounce=!1,i.grabCursor&&(n.allowSlideNext===!0||n.allowSlidePrev===!0)&&n.setGrabCursor(!0),n.emit("sliderFirstMove",s)}let v;if(new Date().getTime(),i._loopSwapReset!==!1&&r.isMoved&&r.allowThresholdMove&&S!==n.touchesDirection&&f&&p&&Math.abs(g)>=1){Object.assign(o,{startX:c,startY:d,currentX:c,currentY:d,startTranslate:r.currentTranslate}),r.loopSwapReset=!0,r.startTranslate=r.currentTranslate;return}n.emit("sliderMove",s),r.isMoved=!0,r.currentTranslate=g+r.startTranslate;let w=!0,C=i.resistanceRatio;if(i.touchReleaseOnEdges&&(C=0),g>0?(f&&p&&!v&&r.allowThresholdMove&&r.currentTranslate>(i.centeredSlides?n.minTranslate()-n.slidesSizesGrid[n.activeIndex+1]-(i.slidesPerView!=="auto"&&n.slides.length-i.slidesPerView>=2?n.slidesSizesGrid[n.activeIndex+1]+n.params.spaceBetween:0)-n.params.spaceBetween:n.minTranslate())&&n.loopFix({direction:"prev",setTranslate:!0,activeSlideIndex:0}),r.currentTranslate>n.minTranslate()&&(w=!1,i.resistance&&(r.currentTranslate=n.minTranslate()-1+(-n.minTranslate()+r.startTranslate+g)**C))):g<0&&(f&&p&&!v&&r.allowThresholdMove&&r.currentTranslate<(i.centeredSlides?n.maxTranslate()+n.slidesSizesGrid[n.slidesSizesGrid.length-1]+n.params.spaceBetween+(i.slidesPerView!=="auto"&&n.slides.length-i.slidesPerView>=2?n.slidesSizesGrid[n.slidesSizesGrid.length-1]+n.params.spaceBetween:0):n.maxTranslate())&&n.loopFix({direction:"next",setTranslate:!0,activeSlideIndex:n.slides.length-(i.slidesPerView==="auto"?n.slidesPerViewDynamic():Math.ceil(parseFloat(i.slidesPerView,10)))}),r.currentTranslate<n.maxTranslate()&&(w=!1,i.resistance&&(r.currentTranslate=n.maxTranslate()+1-(n.maxTranslate()-r.startTranslate-g)**C))),w&&(s.preventedByNestedSwiper=!0),!n.allowSlideNext&&n.swipeDirection==="next"&&r.currentTranslate<r.startTranslate&&(r.currentTranslate=r.startTranslate),!n.allowSlidePrev&&n.swipeDirection==="prev"&&r.currentTranslate>r.startTranslate&&(r.currentTranslate=r.startTranslate),!n.allowSlidePrev&&!n.allowSlideNext&&(r.currentTranslate=r.startTranslate),i.threshold>0)if(Math.abs(g)>i.threshold||r.allowThresholdMove){if(!r.allowThresholdMove){r.allowThresholdMove=!0,o.startX=o.currentX,o.startY=o.currentY,r.currentTranslate=r.startTranslate,o.diff=n.isHorizontal()?o.currentX-o.startX:o.currentY-o.startY;return}}else{r.currentTranslate=r.startTranslate;return}!i.followFinger||i.cssMode||((i.freeMode&&i.freeMode.enabled&&n.freeMode||i.watchSlidesProgress)&&(n.updateActiveIndex(),n.updateSlidesClasses()),i.freeMode&&i.freeMode.enabled&&n.freeMode&&n.freeMode.onTouchMove(),n.updateProgress(r.currentTranslate),n.setTranslate(r.currentTranslate))}function cI(e){const t=this,n=t.touchEventsData;let r=e;r.originalEvent&&(r=r.originalEvent);let i;if(r.type==="touchend"||r.type==="touchcancel"){if(i=[...r.changedTouches].find(C=>C.identifier===n.touchId),!i||i.identifier!==n.touchId)return}else{if(n.touchId!==null||r.pointerId!==n.pointerId)return;i=r}if(["pointercancel","pointerout","pointerleave","contextmenu"].includes(r.type)&&!(["pointercancel","contextmenu"].includes(r.type)&&(t.browser.isSafari||t.browser.isWebView)))return;n.pointerId=null,n.touchId=null;const{params:a,touches:l,rtlTranslate:s,slidesGrid:u,enabled:c}=t;if(!c||!a.simulateTouch&&r.pointerType==="mouse")return;if(n.allowTouchCallbacks&&t.emit("touchEnd",r),n.allowTouchCallbacks=!1,!n.isTouched){n.isMoved&&a.grabCursor&&t.setGrabCursor(!1),n.isMoved=!1,n.startMoving=!1;return}a.grabCursor&&n.isMoved&&n.isTouched&&(t.allowSlideNext===!0||t.allowSlidePrev===!0)&&t.setGrabCursor(!1);const d=Pl(),m=d-n.touchStartTime;if(t.allowClick){const C=r.path||r.composedPath&&r.composedPath();t.updateClickedSlide(C&&C[0]||r.target,C),t.emit("tap click",r),m<300&&d-n.lastClickTime<300&&t.emit("doubleTap doubleClick",r)}if(n.lastClickTime=Pl(),zw(()=>{t.destroyed||(t.allowClick=!0)}),!n.isTouched||!n.isMoved||!t.swipeDirection||l.diff===0&&!n.loopSwapReset||n.currentTranslate===n.startTranslate&&!n.loopSwapReset){n.isTouched=!1,n.isMoved=!1,n.startMoving=!1;return}n.isTouched=!1,n.isMoved=!1,n.startMoving=!1;let h;if(a.followFinger?h=s?t.translate:-t.translate:h=-n.currentTranslate,a.cssMode)return;if(a.freeMode&&a.freeMode.enabled){t.freeMode.onTouchEnd({currentPos:h});return}const g=h>=-t.maxTranslate()&&!t.params.loop;let x=0,S=t.slidesSizesGrid[0];for(let C=0;C<u.length;C+=C<a.slidesPerGroupSkip?1:a.slidesPerGroup){const k=C<a.slidesPerGroupSkip-1?1:a.slidesPerGroup;typeof u[C+k]<"u"?(g||h>=u[C]&&h<u[C+k])&&(x=C,S=u[C+k]-u[C]):(g||h>=u[C])&&(x=C,S=u[u.length-1]-u[u.length-2])}let f=null,p=null;a.rewind&&(t.isBeginning?p=a.virtual&&a.virtual.enabled&&t.virtual?t.virtual.slides.length-1:t.slides.length-1:t.isEnd&&(f=0));const v=(h-u[x])/S,w=x<a.slidesPerGroupSkip-1?1:a.slidesPerGroup;if(m>a.longSwipesMs){if(!a.longSwipes){t.slideTo(t.activeIndex);return}t.swipeDirection==="next"&&(v>=a.longSwipesRatio?t.slideTo(a.rewind&&t.isEnd?f:x+w):t.slideTo(x)),t.swipeDirection==="prev"&&(v>1-a.longSwipesRatio?t.slideTo(x+w):p!==null&&v<0&&Math.abs(v)>a.longSwipesRatio?t.slideTo(p):t.slideTo(x))}else{if(!a.shortSwipes){t.slideTo(t.activeIndex);return}t.navigation&&(r.target===t.navigation.nextEl||r.target===t.navigation.prevEl)?r.target===t.navigation.nextEl?t.slideTo(x+w):t.slideTo(x):(t.swipeDirection==="next"&&t.slideTo(f!==null?f:x+w),t.swipeDirection==="prev"&&t.slideTo(p!==null?p:x))}}function G0(){const e=this,{params:t,el:n}=e;if(n&&n.offsetWidth===0)return;t.breakpoints&&e.setBreakpoint();const{allowSlideNext:r,allowSlidePrev:i,snapGrid:o}=e,a=e.virtual&&e.params.virtual.enabled;e.allowSlideNext=!0,e.allowSlidePrev=!0,e.updateSize(),e.updateSlides(),e.updateSlidesClasses();const l=a&&t.loop;(t.slidesPerView==="auto"||t.slidesPerView>1)&&e.isEnd&&!e.isBeginning&&!e.params.centeredSlides&&!l?e.slideTo(e.slides.length-1,0,!1,!0):e.params.loop&&!a?e.slideToLoop(e.realIndex,0,!1,!0):e.slideTo(e.activeIndex,0,!1,!0),e.autoplay&&e.autoplay.running&&e.autoplay.paused&&(clearTimeout(e.autoplay.resizeTimeout),e.autoplay.resizeTimeout=setTimeout(()=>{e.autoplay&&e.autoplay.running&&e.autoplay.paused&&e.autoplay.resume()},500)),e.allowSlidePrev=i,e.allowSlideNext=r,e.params.watchOverflow&&o!==e.snapGrid&&e.checkOverflow()}function dI(e){const t=this;t.enabled&&(t.allowClick||(t.params.preventClicks&&e.preventDefault(),t.params.preventClicksPropagation&&t.animating&&(e.stopPropagation(),e.stopImmediatePropagation())))}function fI(){const e=this,{wrapperEl:t,rtlTranslate:n,enabled:r}=e;if(!r)return;e.previousTranslate=e.translate,e.isHorizontal()?e.translate=-t.scrollLeft:e.translate=-t.scrollTop,e.translate===0&&(e.translate=0),e.updateActiveIndex(),e.updateSlidesClasses();let i;const o=e.maxTranslate()-e.minTranslate();o===0?i=0:i=(e.translate-e.minTranslate())/o,i!==e.progress&&e.updateProgress(n?-e.translate:e.translate),e.emit("setTranslate",e.translate,!1)}function pI(e){const t=this;Ws(t,e.target),!(t.params.cssMode||t.params.slidesPerView!=="auto"&&!t.params.autoHeight)&&t.update()}function hI(){const e=this;e.documentTouchHandlerProceeded||(e.documentTouchHandlerProceeded=!0,e.params.touchReleaseOnEdges&&(e.el.style.touchAction="auto"))}const Xw=(e,t)=>{const n=_n(),{params:r,el:i,wrapperEl:o,device:a}=e,l=!!r.nested,s=t==="on"?"addEventListener":"removeEventListener",u=t;!i||typeof i=="string"||(n[s]("touchstart",e.onDocumentTouchStart,{passive:!1,capture:l}),i[s]("touchstart",e.onTouchStart,{passive:!1}),i[s]("pointerdown",e.onTouchStart,{passive:!1}),n[s]("touchmove",e.onTouchMove,{passive:!1,capture:l}),n[s]("pointermove",e.onTouchMove,{passive:!1,capture:l}),n[s]("touchend",e.onTouchEnd,{passive:!0}),n[s]("pointerup",e.onTouchEnd,{passive:!0}),n[s]("pointercancel",e.onTouchEnd,{passive:!0}),n[s]("touchcancel",e.onTouchEnd,{passive:!0}),n[s]("pointerout",e.onTouchEnd,{passive:!0}),n[s]("pointerleave",e.onTouchEnd,{passive:!0}),n[s]("contextmenu",e.onTouchEnd,{passive:!0}),(r.preventClicks||r.preventClicksPropagation)&&i[s]("click",e.onClick,!0),r.cssMode&&o[s]("scroll",e.onScroll),r.updateOnWindowResize?e[u](a.ios||a.android?"resize orientationchange observerUpdate":"resize observerUpdate",G0,!0):e[u]("observerUpdate",G0,!0),i[s]("load",e.onLoad,{capture:!0}))};function mI(){const e=this,{params:t}=e;e.onTouchStart=lI.bind(e),e.onTouchMove=uI.bind(e),e.onTouchEnd=cI.bind(e),e.onDocumentTouchStart=hI.bind(e),t.cssMode&&(e.onScroll=fI.bind(e)),e.onClick=dI.bind(e),e.onLoad=pI.bind(e),Xw(e,"on")}function gI(){Xw(this,"off")}var vI={attachEvents:mI,detachEvents:gI};const Y0=(e,t)=>e.grid&&t.grid&&t.grid.rows>1;function yI(){const e=this,{realIndex:t,initialized:n,params:r,el:i}=e,o=r.breakpoints;if(!o||o&&Object.keys(o).length===0)return;const a=_n(),l=r.breakpointsBase==="window"||!r.breakpointsBase?r.breakpointsBase:"container",s=["window","container"].includes(r.breakpointsBase)||!r.breakpointsBase?e.el:a.querySelector(r.breakpointsBase),u=e.getBreakpoint(o,l,s);if(!u||e.currentBreakpoint===u)return;const d=(u in o?o[u]:void 0)||e.originalParams,m=Y0(e,r),h=Y0(e,d),g=e.params.grabCursor,x=d.grabCursor,S=r.enabled;m&&!h?(i.classList.remove(`${r.containerModifierClass}grid`,`${r.containerModifierClass}grid-column`),e.emitContainerClasses()):!m&&h&&(i.classList.add(`${r.containerModifierClass}grid`),(d.grid.fill&&d.grid.fill==="column"||!d.grid.fill&&r.grid.fill==="column")&&i.classList.add(`${r.containerModifierClass}grid-column`),e.emitContainerClasses()),g&&!x?e.unsetGrabCursor():!g&&x&&e.setGrabCursor(),["navigation","pagination","scrollbar"].forEach(k=>{if(typeof d[k]>"u")return;const _=r[k]&&r[k].enabled,E=d[k]&&d[k].enabled;_&&!E&&e[k].disable(),!_&&E&&e[k].enable()});const f=d.direction&&d.direction!==r.direction,p=r.loop&&(d.slidesPerView!==r.slidesPerView||f),v=r.loop;f&&n&&e.changeDirection(),Ot(e.params,d);const w=e.params.enabled,C=e.params.loop;Object.assign(e,{allowTouchMove:e.params.allowTouchMove,allowSlideNext:e.params.allowSlideNext,allowSlidePrev:e.params.allowSlidePrev}),S&&!w?e.disable():!S&&w&&e.enable(),e.currentBreakpoint=u,e.emit("_beforeBreakpoint",d),n&&(p?(e.loopDestroy(),e.loopCreate(t),e.updateSlides()):!v&&C?(e.loopCreate(t),e.updateSlides()):v&&!C&&e.loopDestroy()),e.emit("breakpoint",d)}function xI(e,t="window",n){if(!e||t==="container"&&!n)return;let r=!1;const i=ft(),o=t==="window"?i.innerHeight:n.clientHeight,a=Object.keys(e).map(l=>{if(typeof l=="string"&&l.indexOf("@")===0){const s=parseFloat(l.substr(1));return{value:o*s,point:l}}return{value:l,point:l}});a.sort((l,s)=>parseInt(l.value,10)-parseInt(s.value,10));for(let l=0;l<a.length;l+=1){const{point:s,value:u}=a[l];t==="window"?i.matchMedia(`(min-width: ${u}px)`).matches&&(r=s):u<=n.clientWidth&&(r=s)}return r||"max"}var bI={setBreakpoint:yI,getBreakpoint:xI};function wI(e,t){const n=[];return e.forEach(r=>{typeof r=="object"?Object.keys(r).forEach(i=>{r[i]&&n.push(t+i)}):typeof r=="string"&&n.push(t+r)}),n}function SI(){const e=this,{classNames:t,params:n,rtl:r,el:i,device:o}=e,a=wI(["initialized",n.direction,{"free-mode":e.params.freeMode&&n.freeMode.enabled},{autoheight:n.autoHeight},{rtl:r},{grid:n.grid&&n.grid.rows>1},{"grid-column":n.grid&&n.grid.rows>1&&n.grid.fill==="column"},{android:o.android},{ios:o.ios},{"css-mode":n.cssMode},{centered:n.cssMode&&n.centeredSlides},{"watch-progress":n.watchSlidesProgress}],n.containerModifierClass);t.push(...a),i.classList.add(...t),e.emitContainerClasses()}function _I(){const e=this,{el:t,classNames:n}=e;!t||typeof t=="string"||(t.classList.remove(...n),e.emitContainerClasses())}var EI={addClasses:SI,removeClasses:_I};function CI(){const e=this,{isLocked:t,params:n}=e,{slidesOffsetBefore:r}=n;if(r){const i=e.slides.length-1,o=e.slidesGrid[i]+e.slidesSizesGrid[i]+r*2;e.isLocked=e.size>o}else e.isLocked=e.snapGrid.length===1;n.allowSlideNext===!0&&(e.allowSlideNext=!e.isLocked),n.allowSlidePrev===!0&&(e.allowSlidePrev=!e.isLocked),t&&t!==e.isLocked&&(e.isEnd=!1),t!==e.isLocked&&e.emit(e.isLocked?"lock":"unlock")}var kI={checkOverflow:CI},np={init:!0,direction:"horizontal",oneWayMovement:!1,swiperElementNodeName:"SWIPER-CONTAINER",touchEventsTarget:"wrapper",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,eventsPrefix:"swiper",enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,snapToSlideEdge:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:5,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,loop:!1,loopAddBlankSlides:!0,loopAdditionalSlides:0,loopPreventsSliding:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,maxBackfaceHiddenSlides:10,containerModifierClass:"swiper-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-blank",slideActiveClass:"swiper-slide-active",slideVisibleClass:"swiper-slide-visible",slideFullyVisibleClass:"swiper-slide-fully-visible",slideNextClass:"swiper-slide-next",slidePrevClass:"swiper-slide-prev",wrapperClass:"swiper-wrapper",lazyPreloaderClass:"swiper-lazy-preloader",lazyPreloadPrevNext:0,runCallbacksOnInit:!0,_emitClasses:!1};function TI(e,t){return function(r={}){const i=Object.keys(r)[0],o=r[i];if(typeof o!="object"||o===null){Ot(t,r);return}if(e[i]===!0&&(e[i]={enabled:!0}),i==="navigation"&&e[i]&&e[i].enabled&&!e[i].prevEl&&!e[i].nextEl&&(e[i].auto=!0),["pagination","scrollbar"].indexOf(i)>=0&&e[i]&&e[i].enabled&&!e[i].el&&(e[i].auto=!0),!(i in e&&"enabled"in o)){Ot(t,r);return}typeof e[i]=="object"&&!("enabled"in e[i])&&(e[i].enabled=!0),e[i]||(e[i]={enabled:!1}),Ot(t,r)}}const fd={eventsEmitter:E4,update:R4,translate:V4,transition:W4,slide:J4,loop:rI,grabCursor:aI,events:vI,breakpoints:bI,checkOverflow:kI,classes:EI},pd={};let Qh=class On{constructor(...t){let n,r;t.length===1&&t[0].constructor&&Object.prototype.toString.call(t[0]).slice(8,-1)==="Object"?r=t[0]:[n,r]=t,r||(r={}),r=Ot({},r),n&&!r.el&&(r.el=n);const i=_n();if(r.el&&typeof r.el=="string"&&i.querySelectorAll(r.el).length>1){const s=[];return i.querySelectorAll(r.el).forEach(u=>{const c=Ot({},r,{el:u});s.push(new On(c))}),s}const o=this;o.__swiper__=!0,o.support=Hw(),o.device=Ww({userAgent:r.userAgent}),o.browser=Gw(),o.eventsListeners={},o.eventsAnyListeners=[],o.modules=[...o.__modules__],r.modules&&Array.isArray(r.modules)&&r.modules.forEach(s=>{typeof s=="function"&&o.modules.indexOf(s)<0&&o.modules.push(s)});const a={};o.modules.forEach(s=>{s({params:r,swiper:o,extendParams:TI(r,a),on:o.on.bind(o),once:o.once.bind(o),off:o.off.bind(o),emit:o.emit.bind(o)})});const l=Ot({},np,a);return o.params=Ot({},l,pd,r),o.originalParams=Ot({},o.params),o.passedParams=Ot({},r),o.params&&o.params.on&&Object.keys(o.params.on).forEach(s=>{o.on(s,o.params.on[s])}),o.params&&o.params.onAny&&o.onAny(o.params.onAny),Object.assign(o,{enabled:o.params.enabled,el:n,classNames:[],slides:[],slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal(){return o.params.direction==="horizontal"},isVertical(){return o.params.direction==="vertical"},activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,cssOverflowAdjustment(){return Math.trunc(this.translate/2**23)*2**23},allowSlideNext:o.params.allowSlideNext,allowSlidePrev:o.params.allowSlidePrev,touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:o.params.focusableElements,lastClickTime:0,clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,startMoving:void 0,pointerId:null,touchId:null},allowClick:!0,allowTouchMove:o.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),o.emit("_swiper"),o.params.init&&o.init(),o}getDirectionLabel(t){return this.isHorizontal()?t:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[t]}getSlideIndex(t){const{slidesEl:n,params:r}=this,i=xn(n,`.${r.slideClass}, swiper-slide`),o=jl(i[0]);return jl(t)-o}getSlideIndexByData(t){return this.getSlideIndex(this.slides.find(n=>n.getAttribute("data-swiper-slide-index")*1===t))}getSlideIndexWhenGrid(t){return this.grid&&this.params.grid&&this.params.grid.rows>1&&(this.params.grid.fill==="column"?t=Math.floor(t/this.params.grid.rows):this.params.grid.fill==="row"&&(t=t%Math.ceil(this.slides.length/this.params.grid.rows))),t}recalcSlides(){const t=this,{slidesEl:n,params:r}=t;t.slides=xn(n,`.${r.slideClass}, swiper-slide`)}enable(){const t=this;t.enabled||(t.enabled=!0,t.params.grabCursor&&t.setGrabCursor(),t.emit("enable"))}disable(){const t=this;t.enabled&&(t.enabled=!1,t.params.grabCursor&&t.unsetGrabCursor(),t.emit("disable"))}setProgress(t,n){const r=this;t=Math.min(Math.max(t,0),1);const i=r.minTranslate(),a=(r.maxTranslate()-i)*t+i;r.translateTo(a,typeof n>"u"?0:n),r.updateActiveIndex(),r.updateSlidesClasses()}emitContainerClasses(){const t=this;if(!t.params._emitClasses||!t.el)return;const n=t.el.className.split(" ").filter(r=>r.indexOf("swiper")===0||r.indexOf(t.params.containerModifierClass)===0);t.emit("_containerClasses",n.join(" "))}getSlideClasses(t){const n=this;return n.destroyed?"":t.className.split(" ").filter(r=>r.indexOf("swiper-slide")===0||r.indexOf(n.params.slideClass)===0).join(" ")}emitSlidesClasses(){const t=this;if(!t.params._emitClasses||!t.el)return;const n=[];t.slides.forEach(r=>{const i=t.getSlideClasses(r);n.push({slideEl:r,classNames:i}),t.emit("_slideClass",r,i)}),t.emit("_slideClasses",n)}slidesPerViewDynamic(t="current",n=!1){const r=this,{params:i,slides:o,slidesGrid:a,slidesSizesGrid:l,size:s,activeIndex:u}=r;let c=1;if(typeof i.slidesPerView=="number")return i.slidesPerView;if(i.centeredSlides){let d=o[u]?Math.ceil(o[u].swiperSlideSize):0,m;for(let h=u+1;h<o.length;h+=1)o[h]&&!m&&(d+=Math.ceil(o[h].swiperSlideSize),c+=1,d>s&&(m=!0));for(let h=u-1;h>=0;h-=1)o[h]&&!m&&(d+=o[h].swiperSlideSize,c+=1,d>s&&(m=!0))}else if(t==="current")for(let d=u+1;d<o.length;d+=1)(n?a[d]+l[d]-a[u]<s:a[d]-a[u]<s)&&(c+=1);else for(let d=u-1;d>=0;d-=1)a[u]-a[d]<s&&(c+=1);return c}update(){const t=this;if(!t||t.destroyed)return;const{snapGrid:n,params:r}=t;r.breakpoints&&t.setBreakpoint(),[...t.el.querySelectorAll('[loading="lazy"]')].forEach(a=>{a.complete&&Ws(t,a)}),t.updateSize(),t.updateSlides(),t.updateProgress(),t.updateSlidesClasses();function i(){const a=t.rtlTranslate?t.translate*-1:t.translate,l=Math.min(Math.max(a,t.maxTranslate()),t.minTranslate());t.setTranslate(l),t.updateActiveIndex(),t.updateSlidesClasses()}let o;if(r.freeMode&&r.freeMode.enabled&&!r.cssMode)i(),r.autoHeight&&t.updateAutoHeight();else{if((r.slidesPerView==="auto"||r.slidesPerView>1)&&t.isEnd&&!r.centeredSlides){const a=t.virtual&&r.virtual.enabled?t.virtual.slides:t.slides;o=t.slideTo(a.length-1,0,!1,!0)}else o=t.slideTo(t.activeIndex,0,!1,!0);o||i()}r.watchOverflow&&n!==t.snapGrid&&t.checkOverflow(),t.emit("update")}changeDirection(t,n=!0){const r=this,i=r.params.direction;return t||(t=i==="horizontal"?"vertical":"horizontal"),t===i||t!=="horizontal"&&t!=="vertical"||(r.el.classList.remove(`${r.params.containerModifierClass}${i}`),r.el.classList.add(`${r.params.containerModifierClass}${t}`),r.emitContainerClasses(),r.params.direction=t,r.slides.forEach(o=>{t==="vertical"?o.style.width="":o.style.height=""}),r.emit("changeDirection"),n&&r.update()),r}changeLanguageDirection(t){const n=this;n.rtl&&t==="rtl"||!n.rtl&&t==="ltr"||(n.rtl=t==="rtl",n.rtlTranslate=n.params.direction==="horizontal"&&n.rtl,n.rtl?(n.el.classList.add(`${n.params.containerModifierClass}rtl`),n.el.dir="rtl"):(n.el.classList.remove(`${n.params.containerModifierClass}rtl`),n.el.dir="ltr"),n.update())}mount(t){const n=this;if(n.mounted)return!0;let r=t||n.params.el;if(typeof r=="string"&&(r=document.querySelector(r)),!r)return!1;r.swiper=n,r.parentNode&&r.parentNode.host&&r.parentNode.host.nodeName===n.params.swiperElementNodeName.toUpperCase()&&(n.isElement=!0);const i=()=>`.${(n.params.wrapperClass||"").trim().split(" ").join(".")}`;let a=(()=>r&&r.shadowRoot&&r.shadowRoot.querySelector?r.shadowRoot.querySelector(i()):xn(r,i())[0])();return!a&&n.params.createElements&&(a=Il("div",n.params.wrapperClass),r.append(a),xn(r,`.${n.params.slideClass}`).forEach(l=>{a.append(l)})),Object.assign(n,{el:r,wrapperEl:a,slidesEl:n.isElement&&!r.parentNode.host.slideSlots?r.parentNode.host:a,hostEl:n.isElement?r.parentNode.host:r,mounted:!0,rtl:r.dir.toLowerCase()==="rtl"||cr(r,"direction")==="rtl",rtlTranslate:n.params.direction==="horizontal"&&(r.dir.toLowerCase()==="rtl"||cr(r,"direction")==="rtl"),wrongRTL:cr(a,"display")==="-webkit-box"}),!0}init(t){const n=this;if(n.initialized||n.mount(t)===!1)return n;n.emit("beforeInit"),n.params.breakpoints&&n.setBreakpoint(),n.addClasses(),n.updateSize(),n.updateSlides(),n.params.watchOverflow&&n.checkOverflow(),n.params.grabCursor&&n.enabled&&n.setGrabCursor(),n.params.loop&&n.virtual&&n.params.virtual.enabled?n.slideTo(n.params.initialSlide+n.virtual.slidesBefore,0,n.params.runCallbacksOnInit,!1,!0):n.slideTo(n.params.initialSlide,0,n.params.runCallbacksOnInit,!1,!0),n.params.loop&&n.loopCreate(void 0,!0),n.attachEvents();const i=[...n.el.querySelectorAll('[loading="lazy"]')];return n.isElement&&i.push(...n.hostEl.querySelectorAll('[loading="lazy"]')),i.forEach(o=>{o.complete?Ws(n,o):o.addEventListener("load",a=>{Ws(n,a.target)})}),tp(n),n.initialized=!0,tp(n),n.emit("init"),n.emit("afterInit"),n}destroy(t=!0,n=!0){const r=this,{params:i,el:o,wrapperEl:a,slides:l}=r;return typeof r.params>"u"||r.destroyed||(r.emit("beforeDestroy"),r.initialized=!1,r.detachEvents(),i.loop&&r.loopDestroy(),n&&(r.removeClasses(),o&&typeof o!="string"&&o.removeAttribute("style"),a&&a.removeAttribute("style"),l&&l.length&&l.forEach(s=>{s.classList.remove(i.slideVisibleClass,i.slideFullyVisibleClass,i.slideActiveClass,i.slideNextClass,i.slidePrevClass),s.removeAttribute("style"),s.removeAttribute("data-swiper-slide-index")})),r.emit("destroy"),Object.keys(r.eventsListeners).forEach(s=>{r.off(s)}),t!==!1&&(r.el&&typeof r.el!="string"&&(r.el.swiper=null),l4(r)),r.destroyed=!0),null}static extendDefaults(t){Ot(pd,t)}static get extendedDefaults(){return pd}static get defaults(){return np}static installModule(t){On.prototype.__modules__||(On.prototype.__modules__=[]);const n=On.prototype.__modules__;typeof t=="function"&&n.indexOf(t)<0&&n.push(t)}static use(t){return Array.isArray(t)?(t.forEach(n=>On.installModule(n)),On):(On.installModule(t),On)}};Object.keys(fd).forEach(e=>{Object.keys(fd[e]).forEach(t=>{Qh.prototype[t]=fd[e][t]})});Qh.use([S4,_4]);const qw=["eventsPrefix","injectStyles","injectStylesUrls","modules","init","_direction","oneWayMovement","swiperElementNodeName","touchEventsTarget","initialSlide","_speed","cssMode","updateOnWindowResize","resizeObserver","nested","focusableElements","_enabled","_width","_height","preventInteractionOnTransition","userAgent","url","_edgeSwipeDetection","_edgeSwipeThreshold","_freeMode","_autoHeight","setWrapperSize","virtualTranslate","_effect","breakpoints","breakpointsBase","_spaceBetween","_slidesPerView","maxBackfaceHiddenSlides","_grid","_slidesPerGroup","_slidesPerGroupSkip","_slidesPerGroupAuto","_centeredSlides","_centeredSlidesBounds","_slidesOffsetBefore","_slidesOffsetAfter","normalizeSlideIndex","_centerInsufficientSlides","_snapToSlideEdge","_watchOverflow","roundLengths","touchRatio","touchAngle","simulateTouch","_shortSwipes","_longSwipes","longSwipesRatio","longSwipesMs","_followFinger","allowTouchMove","_threshold","touchMoveStopPropagation","touchStartPreventDefault","touchStartForcePreventDefault","touchReleaseOnEdges","uniqueNavElements","_resistance","_resistanceRatio","_watchSlidesProgress","_grabCursor","preventClicks","preventClicksPropagation","_slideToClickedSlide","_loop","loopAdditionalSlides","loopAddBlankSlides","loopPreventsSliding","_rewind","_allowSlidePrev","_allowSlideNext","_swipeHandler","_noSwiping","noSwipingClass","noSwipingSelector","passiveListeners","containerModifierClass","slideClass","slideActiveClass","slideVisibleClass","slideFullyVisibleClass","slideNextClass","slidePrevClass","slideBlankClass","wrapperClass","lazyPreloaderClass","lazyPreloadPrevNext","runCallbacksOnInit","observer","observeParents","observeSlideChildren","a11y","_autoplay","_controller","coverflowEffect","cubeEffect","fadeEffect","flipEffect","creativeEffect","cardsEffect","hashNavigation","history","keyboard","mousewheel","_navigation","_pagination","parallax","_scrollbar","_thumbs","virtual","zoom","control"];function qr(e){return typeof e=="object"&&e!==null&&e.constructor&&Object.prototype.toString.call(e).slice(8,-1)==="Object"&&!e.__swiper__}function ji(e,t){const n=["__proto__","constructor","prototype"];Object.keys(t).filter(r=>n.indexOf(r)<0).forEach(r=>{typeof e[r]>"u"?e[r]=t[r]:qr(t[r])&&qr(e[r])&&Object.keys(t[r]).length>0?t[r].__swiper__?e[r]=t[r]:ji(e[r],t[r]):e[r]=t[r]})}function Kw(e={}){return e.navigation&&typeof e.navigation.nextEl>"u"&&typeof e.navigation.prevEl>"u"}function Zw(e={}){return e.pagination&&typeof e.pagination.el>"u"}function Qw(e={}){return e.scrollbar&&typeof e.scrollbar.el>"u"}function Jw(e=""){const t=e.split(" ").map(r=>r.trim()).filter(r=>!!r),n=[];return t.forEach(r=>{n.indexOf(r)<0&&n.push(r)}),n.join(" ")}function OI(e=""){return e?e.includes("swiper-wrapper")?e:`swiper-wrapper ${e}`:"swiper-wrapper"}function PI({swiper:e,slides:t,passedParams:n,changedParams:r,nextEl:i,prevEl:o,scrollbarEl:a,paginationEl:l}){const s=r.filter(E=>E!=="children"&&E!=="direction"&&E!=="wrapperClass"),{params:u,pagination:c,navigation:d,scrollbar:m,virtual:h,thumbs:g}=e;let x,S,f,p,v,w,C,k;r.includes("thumbs")&&n.thumbs&&n.thumbs.swiper&&!n.thumbs.swiper.destroyed&&u.thumbs&&(!u.thumbs.swiper||u.thumbs.swiper.destroyed)&&(x=!0),r.includes("controller")&&n.controller&&n.controller.control&&u.controller&&!u.controller.control&&(S=!0),r.includes("pagination")&&n.pagination&&(n.pagination.el||l)&&(u.pagination||u.pagination===!1)&&c&&!c.el&&(f=!0),r.includes("scrollbar")&&n.scrollbar&&(n.scrollbar.el||a)&&(u.scrollbar||u.scrollbar===!1)&&m&&!m.el&&(p=!0),r.includes("navigation")&&n.navigation&&(n.navigation.prevEl||o)&&(n.navigation.nextEl||i)&&(u.navigation||u.navigation===!1)&&d&&!d.prevEl&&!d.nextEl&&(v=!0);const _=E=>{e[E]&&(e[E].destroy(),E==="navigation"?(e.isElement&&(e[E].prevEl.remove(),e[E].nextEl.remove()),u[E].prevEl=void 0,u[E].nextEl=void 0,e[E].prevEl=void 0,e[E].nextEl=void 0):(e.isElement&&e[E].el.remove(),u[E].el=void 0,e[E].el=void 0))};r.includes("loop")&&e.isElement&&(u.loop&&!n.loop?w=!0:!u.loop&&n.loop?C=!0:k=!0),s.forEach(E=>{if(qr(u[E])&&qr(n[E]))Object.assign(u[E],n[E]),(E==="navigation"||E==="pagination"||E==="scrollbar")&&"enabled"in n[E]&&!n[E].enabled&&_(E);else{const M=n[E];(M===!0||M===!1)&&(E==="navigation"||E==="pagination"||E==="scrollbar")?M===!1&&_(E):u[E]=n[E]}}),s.includes("controller")&&!S&&e.controller&&e.controller.control&&u.controller&&u.controller.control&&(e.controller.control=u.controller.control),r.includes("children")&&t&&h&&u.virtual.enabled?(h.slides=t,h.update(!0)):r.includes("virtual")&&h&&u.virtual.enabled&&(t&&(h.slides=t),h.update(!0)),r.includes("children")&&t&&u.loop&&(k=!0),x&&g.init()&&g.update(!0),S&&(e.controller.control=u.controller.control),f&&(e.isElement&&(!l||typeof l=="string")&&(l=document.createElement("div"),l.classList.add("swiper-pagination"),l.part.add("pagination"),e.el.appendChild(l)),l&&(u.pagination.el=l),c.init(),c.render(),c.update()),p&&(e.isElement&&(!a||typeof a=="string")&&(a=document.createElement("div"),a.classList.add("swiper-scrollbar"),a.part.add("scrollbar"),e.el.appendChild(a)),a&&(u.scrollbar.el=a),m.init(),m.updateSize(),m.setTranslate()),v&&(e.isElement&&((!i||typeof i=="string")&&(i=document.createElement("div"),i.classList.add("swiper-button-next"),xa(i,e.navigation.arrowSvg),i.part.add("button-next"),e.el.appendChild(i)),(!o||typeof o=="string")&&(o=document.createElement("div"),o.classList.add("swiper-button-prev"),xa(o,e.navigation.arrowSvg),o.part.add("button-prev"),e.el.appendChild(o))),i&&(u.navigation.nextEl=i),o&&(u.navigation.prevEl=o),d.init(),d.update()),r.includes("allowSlideNext")&&(e.allowSlideNext=n.allowSlideNext),r.includes("allowSlidePrev")&&(e.allowSlidePrev=n.allowSlidePrev),r.includes("direction")&&e.changeDirection(n.direction,!1),(w||k)&&e.loopDestroy(),(C||k)&&e.loopCreate(),e.update()}function MI(e={},t=!0){const n={on:{}},r={},i={};ji(n,np),n._emitClasses=!0,n.init=!1;const o={},a=qw.map(s=>s.replace(/_/,"")),l=Object.assign({},e);return Object.keys(l).forEach(s=>{typeof e[s]>"u"||(a.indexOf(s)>=0?qr(e[s])?(n[s]={},i[s]={},ji(n[s],e[s]),ji(i[s],e[s])):(n[s]=e[s],i[s]=e[s]):s.search(/on[A-Z]/)===0&&typeof e[s]=="function"?t?r[`${s[2].toLowerCase()}${s.substr(3)}`]=e[s]:n.on[`${s[2].toLowerCase()}${s.substr(3)}`]=e[s]:o[s]=e[s])}),["navigation","pagination","scrollbar"].forEach(s=>{n[s]===!0&&(n[s]={}),n[s]===!1&&delete n[s]}),{params:n,passedParams:i,rest:o,events:r}}function II({el:e,nextEl:t,prevEl:n,paginationEl:r,scrollbarEl:i,swiper:o},a){Kw(a)&&t&&n&&(o.params.navigation.nextEl=t,o.originalParams.navigation.nextEl=t,o.params.navigation.prevEl=n,o.originalParams.navigation.prevEl=n),Zw(a)&&r&&(o.params.pagination.el=r,o.originalParams.pagination.el=r),Qw(a)&&i&&(o.params.scrollbar.el=i,o.originalParams.scrollbar.el=i),o.init(e)}function jI(e,t,n,r,i){const o=[];if(!t)return o;const a=s=>{o.indexOf(s)<0&&o.push(s)};if(n&&r){const s=r.map(i),u=n.map(i);s.join("")!==u.join("")&&a("children"),r.length!==n.length&&a("children")}return qw.filter(s=>s[0]==="_").map(s=>s.replace(/_/,"")).forEach(s=>{if(s in e&&s in t)if(qr(e[s])&&qr(t[s])){const u=Object.keys(e[s]),c=Object.keys(t[s]);u.length!==c.length?a(s):(u.forEach(d=>{e[s][d]!==t[s][d]&&a(s)}),c.forEach(d=>{e[s][d]!==t[s][d]&&a(s)}))}else e[s]!==t[s]&&a(s)}),o}const $I=e=>{!e||e.destroyed||!e.params.virtual||e.params.virtual&&!e.params.virtual.enabled||(e.updateSlides(),e.updateProgress(),e.updateSlidesClasses(),e.emit("_virtualUpdated"),e.parallax&&e.params.parallax&&e.params.parallax.enabled&&e.parallax.setTranslate())};function $l(){return $l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},$l.apply(this,arguments)}function eS(e){return e.type&&e.type.displayName&&e.type.displayName.includes("SwiperSlide")}function tS(e){const t=[];return W.Children.toArray(e).forEach(n=>{eS(n)?t.push(n):n.props&&n.props.children&&tS(n.props.children).forEach(r=>t.push(r))}),t}function DI(e){const t=[],n={"container-start":[],"container-end":[],"wrapper-start":[],"wrapper-end":[]};return W.Children.toArray(e).forEach(r=>{if(eS(r))t.push(r);else if(r.props&&r.props.slot&&n[r.props.slot])n[r.props.slot].push(r);else if(r.props&&r.props.children){const i=tS(r.props.children);i.length>0?i.forEach(o=>t.push(o)):n["container-end"].push(r)}else n["container-end"].push(r)}),{slides:t,slots:n}}function RI(e,t,n){if(!n)return null;const r=c=>{let d=c;return c<0?d=t.length+c:d>=t.length&&(d=d-t.length),d},i=e.isHorizontal()?{[e.rtlTranslate?"right":"left"]:`${n.offset}px`}:{top:`${n.offset}px`},{from:o,to:a}=n,l=e.params.loop?-t.length:0,s=e.params.loop?t.length*2:t.length,u=[];for(let c=l;c<s;c+=1)c>=o&&c<=a&&u.push(t[r(c)]);return u.map((c,d)=>W.cloneElement(c,{swiper:e,style:i,key:c.props.virtualIndex||c.key||`slide-${d}`}))}function Yo(e,t){return typeof window>"u"?b.useEffect(e,t):b.useLayoutEffect(e,t)}const X0=b.createContext(null),LI=b.createContext(null),nS=b.forwardRef(({className:e,tag:t="div",wrapperTag:n="div",children:r,onSwiper:i,...o}={},a)=>{let l=!1;const[s,u]=b.useState("swiper"),[c,d]=b.useState(null),[m,h]=b.useState(!1),g=b.useRef(!1),x=b.useRef(null),S=b.useRef(null),f=b.useRef(null),p=b.useRef(null),v=b.useRef(null),w=b.useRef(null),C=b.useRef(null),k=b.useRef(null),{params:_,passedParams:E,rest:M,events:I}=MI(o),{slides:$,slots:P}=DI(r),j=()=>{h(!m)};Object.assign(_.on,{_containerClasses(O,D){u(D)}});const L=()=>{Object.assign(_.on,I),l=!0;const O={..._};if(delete O.wrapperClass,S.current=new Qh(O),S.current.virtual&&S.current.params.virtual.enabled){S.current.virtual.slides=$;const D={cache:!1,slides:$,renderExternal:d,renderExternalUpdate:!1};ji(S.current.params.virtual,D),ji(S.current.originalParams.virtual,D)}};x.current||L(),S.current&&S.current.on("_beforeBreakpoint",j);const R=()=>{l||!I||!S.current||Object.keys(I).forEach(O=>{S.current.on(O,I[O])})},F=()=>{!I||!S.current||Object.keys(I).forEach(O=>{S.current.off(O,I[O])})};b.useEffect(()=>()=>{S.current&&S.current.off("_beforeBreakpoint",j)}),b.useEffect(()=>{!g.current&&S.current&&(S.current.emitSlidesClasses(),g.current=!0)}),Yo(()=>{if(a&&(a.current=x.current),!!x.current)return S.current.destroyed&&L(),II({el:x.current,nextEl:v.current,prevEl:w.current,paginationEl:C.current,scrollbarEl:k.current,swiper:S.current},_),i&&!S.current.destroyed&&i(S.current),()=>{S.current&&!S.current.destroyed&&S.current.destroy(!0,!1)}},[]),Yo(()=>{R();const O=jI(E,f.current,$,p.current,D=>D.key);return f.current=E,p.current=$,O.length&&S.current&&!S.current.destroyed&&PI({swiper:S.current,slides:$,passedParams:E,changedParams:O,nextEl:v.current,prevEl:w.current,scrollbarEl:k.current,paginationEl:C.current}),()=>{F()}}),Yo(()=>{$I(S.current)},[c]);function A(){return _.virtual?RI(S.current,$,c):$.map((O,D)=>W.cloneElement(O,{swiper:S.current,swiperSlideIndex:D}))}return W.createElement(t,$l({ref:x,className:Jw(`${s}${e?` ${e}`:""}`)},M),W.createElement(LI.Provider,{value:S.current},P["container-start"],W.createElement(n,{className:OI(_.wrapperClass)},P["wrapper-start"],A(),P["wrapper-end"]),Kw(_)&&W.createElement(W.Fragment,null,W.createElement("div",{ref:w,className:"swiper-button-prev"}),W.createElement("div",{ref:v,className:"swiper-button-next"})),Qw(_)&&W.createElement("div",{ref:k,className:"swiper-scrollbar"}),Zw(_)&&W.createElement("div",{ref:C,className:"swiper-pagination"}),P["container-end"]))});nS.displayName="Swiper";const rS=b.forwardRef(({tag:e="div",children:t,className:n="",swiper:r,zoom:i,lazy:o,virtualIndex:a,swiperSlideIndex:l,...s}={},u)=>{const c=b.useRef(null),[d,m]=b.useState("swiper-slide"),[h,g]=b.useState(!1);function x(v,w,C){w===c.current&&m(C)}Yo(()=>{if(typeof l<"u"&&(c.current.swiperSlideIndex=l),u&&(u.current=c.current),!(!c.current||!r)){if(r.destroyed){d!=="swiper-slide"&&m("swiper-slide");return}return r.on("_slideClass",x),()=>{r&&r.off("_slideClass",x)}}}),Yo(()=>{r&&c.current&&!r.destroyed&&m(r.getSlideClasses(c.current))},[r]);const S={isActive:d.indexOf("swiper-slide-active")>=0,isVisible:d.indexOf("swiper-slide-visible")>=0,isPrev:d.indexOf("swiper-slide-prev")>=0,isNext:d.indexOf("swiper-slide-next")>=0},f=()=>typeof t=="function"?t(S):t,p=()=>{g(!0)};return W.createElement(e,$l({ref:c,className:Jw(`${d}${n?` ${n}`:""}`),"data-swiper-slide-index":a,onLoad:p},s),i&&W.createElement(X0.Provider,{value:S},W.createElement("div",{className:"swiper-zoom-container","data-swiper-zoom":typeof i=="number"?i:void 0},f(),o&&!h&&W.createElement("div",{className:"swiper-lazy-preloader",ref:v=>{v&&(v.lazyPreloaderManaged=!0)}}))),!i&&W.createElement(X0.Provider,{value:S},f(),o&&!h&&W.createElement("div",{className:"swiper-lazy-preloader",ref:v=>{v&&(v.lazyPreloaderManaged=!0)}})))});rS.displayName="SwiperSlide";const AI=T.section`
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
`,zI=T($e)`
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
`,VI=[{id:1,title:"Дідів хлів - найкращий вибір для Вашого велосипеда",desc:"Якісні запчастини, професійний серевіс та індивідуальний підхід. Створюйте ідеальний байк разом з нами",img:"/Didiv/bike2-hero.jpeg"},{id:2,title:"Перевірені велодеталі з пробігом бла бла",desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam reprehenderit obcaecati molestias est alias vitae laboriosam nulla perferendis officia incidunt aliquid voluptatem iste libero, officiis ex modi enim repellat. Consectetur!",img:"/Didiv/inside.webp"}],BI=()=>y.jsx(AI,{children:y.jsx(nS,{modules:[g4,y4,v4],spaceBetween:0,slidesPerView:1,navigation:!0,pagination:{clickable:!0},autoplay:{delay:5e3},loop:!0,children:VI.map(e=>y.jsx(rS,{children:y.jsx(FI,{bg:e.img,children:y.jsxs(NI,{children:[y.jsx("h1",{children:e.title}),y.jsx("p",{children:e.desc}),y.jsx(zI,{to:"/catalog",children:"До каталогу"})]})})},e.id))})}),Jh=[{id:1,name:"Шосейні безкамерні колеса Shimano Ultegra WH-6800",category:"wheels",brand:"Shimano",color:"чорні",type:"Шосейні",size:"29`",weight:1622,price:2800,inStock:!0,description:"Вага 1633 грами без ексцентриків (945+688), крутять ідеально, дуже довгий накат, барабан під 11-12 шв. шосе касети, рідні ексцентрики, ширина 16.3/21.3, обода без отворів для ніпелів, не потребують стрічки, без корозії, рівні. Мінус - знос, спереду сильний, ззаду менше, вживу не такий страшний, як показали на фото, короче кажучи, їздити можна сміливо.",image:["/Didiv/catalog/wheels.jpeg"]},{id:2,name:"Сідло Selle San Marco Aspide Superleggera",category:"saddles",price:800,inStock:!0,size:"29`",description:"140 мм, вага 171 гр, рейки алюміній, корпус пластик, підкладка Pebax, оббивка Microfeel.",image:[]},{id:3,name:"Шосейні безкамерні колеса Shimano Ultegra WH-6800",category:"wheels",price:2800,weight:1622,inStock:!0,description:"Вага 1633 грами без ексцентриків (945+688), крутять ідеально...",image:["/Didiv/catalog/wheels.jpeg"]},{id:4,name:"Шосейні безкамерні колеса Shimano Ultegra WH-6800",category:"wheels",price:2800,weight:1622,inStock:!0,description:"Вага 1633 грами без ексцентриків...",image:["/Didiv/catalog/wheels.jpeg"]},{id:5,name:'Рама MTB 17"',category:"Рами",price:4500,inStock:!0,image:"/Didiv/catalog/frame_mtb_17.jpg"},{id:6,name:'Рама Road 19"',category:"Рами",price:5200,inStock:!0,image:"/Didiv/catalog/frame_road_19.jpg"},{id:7,name:"Винос керма Alu",category:"Виноси",price:800,inStock:!0,image:"/Didiv/catalog/stem_alu.jpg"},{id:8,name:"Винос керма Carbon",category:"Виноси",price:1800,inStock:!1,image:"/Didiv/catalog/stem_carbon.jpg"},{id:9,name:"Кермо MTB 680мм",category:"Керма",price:1200,inStock:!0,image:"/Didiv/catalog/handlebar_mtb.jpg"},{id:10,name:"Кермо Road 420мм",category:"Керма",price:1400,inStock:!0,image:"/Didiv/catalog/handlebar_road.jpg"},{id:11,name:"Шосейні безкамерні колеса Shimano Ultegra WH-6800",category:"wheels",price:2800,inStock:!0,description:"Вага 1633 грами без ексцентриків...",image:["/Didiv/catalog/wheels.jpeg","/Didiv/catalog/bikes.jpeg"]},{id:12,name:"Шосейні безкамерні колеса Shimano Ultegra WH-6800",category:"wheels",price:2800,inStock:!0,description:"Вага 1633 грами...",image:["/Didiv/catalog/wheels.jpeg"]},{id:13,name:"Шосейні безкамерні колеса Shimano Ultegra WH-6800",category:"wheels",price:2800,inStock:!0,description:"Вага 1633 грами...",image:["/Didiv/catalog/wheels.jpeg"]},{id:14,name:"Шосейні безкамерні колеса Shimano Ultegra WH-6800",category:"wheels",price:2800,inStock:!0,description:"Вага 1633 грами...",image:["/Didiv/catalog/wheels.jpeg"]}],UI=T.section`

  width: 100%;
  font-family: var(--main-font);
  padding-top: 30px;
  
  
`,HI=T.h2`
   font-size: 30px;
      text-transform: uppercase;
  font-weight: 700;
  margin-bottom: 20px;
  color: #333;
  @media screen and (min-width: 768px) {
 font-size: 35px;
  }

`,WI=T.div`
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
`,GI=T.div`
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
`,YI=T($e)`
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
`,XI=T.span`
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
`,qI=T.div`
  padding: 10px 0;
`,KI=T.h3`
  font-size: 15px;
  font-weight: 600;
  margin-bottom: 8px;
  color: #333;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,ZI=T.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,QI=T.span`
  font-size: 17px;
  font-weight: 800;
  color: var(--black-color);
`,JI=T.button`
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

`;const ej=T($e)`
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

`,tj=T.div`
  text-align: center;
  color: white;

  p {
    font-size: 24px;
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 12px;
  }
  
`,nj=T.div`
  width: 40px;
  height: 40px;
  border: 2px solid white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`;function He(e){return`Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}var rj=(()=>typeof Symbol=="function"&&Symbol.observable||"@@observable")(),q0=rj,hd=()=>Math.random().toString(36).substring(7).split("").join("."),ij={INIT:`@@redux/INIT${hd()}`,REPLACE:`@@redux/REPLACE${hd()}`,PROBE_UNKNOWN_ACTION:()=>`@@redux/PROBE_UNKNOWN_ACTION${hd()}`},Dl=ij;function em(e){if(typeof e!="object"||e===null)return!1;let t=e;for(;Object.getPrototypeOf(t)!==null;)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t||Object.getPrototypeOf(e)===null}function tm(e,t,n){if(typeof e!="function")throw new Error(He(2));if(typeof t=="function"&&typeof n=="function"||typeof n=="function"&&typeof arguments[3]=="function")throw new Error(He(0));if(typeof t=="function"&&typeof n>"u"&&(n=t,t=void 0),typeof n<"u"){if(typeof n!="function")throw new Error(He(1));return n(tm)(e,t)}let r=e,i=t,o=new Map,a=o,l=0,s=!1;function u(){a===o&&(a=new Map,o.forEach((S,f)=>{a.set(f,S)}))}function c(){if(s)throw new Error(He(3));return i}function d(S){if(typeof S!="function")throw new Error(He(4));if(s)throw new Error(He(5));let f=!0;u();const p=l++;return a.set(p,S),function(){if(f){if(s)throw new Error(He(6));f=!1,u(),a.delete(p),o=null}}}function m(S){if(!em(S))throw new Error(He(7));if(typeof S.type>"u")throw new Error(He(8));if(typeof S.type!="string")throw new Error(He(17));if(s)throw new Error(He(9));try{s=!0,i=r(i,S)}finally{s=!1}return(o=a).forEach(p=>{p()}),S}function h(S){if(typeof S!="function")throw new Error(He(10));r=S,m({type:Dl.REPLACE})}function g(){const S=d;return{subscribe(f){if(typeof f!="object"||f===null)throw new Error(He(11));function p(){const w=f;w.next&&w.next(c())}return p(),{unsubscribe:S(p)}},[q0](){return this}}}return m({type:Dl.INIT}),{dispatch:m,subscribe:d,getState:c,replaceReducer:h,[q0]:g}}function oj(e){Object.keys(e).forEach(t=>{const n=e[t];if(typeof n(void 0,{type:Dl.INIT})>"u")throw new Error(He(12));if(typeof n(void 0,{type:Dl.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(He(13))})}function aj(e){const t=Object.keys(e),n={};for(let o=0;o<t.length;o++){const a=t[o];typeof e[a]=="function"&&(n[a]=e[a])}const r=Object.keys(n);let i;try{oj(n)}catch(o){i=o}return function(a={},l){if(i)throw i;let s=!1;const u={};for(let c=0;c<r.length;c++){const d=r[c],m=n[d],h=a[d],g=m(h,l);if(typeof g>"u")throw l&&l.type,new Error(He(14));u[d]=g,s=s||g!==h}return s=s||r.length!==Object.keys(a).length,s?u:a}}function Rl(...e){return e.length===0?t=>t:e.length===1?e[0]:e.reduce((t,n)=>(...r)=>t(n(...r)))}function sj(...e){return t=>(n,r)=>{const i=t(n,r);let o=()=>{throw new Error(He(15))};const a={getState:i.getState,dispatch:(s,...u)=>o(s,...u)},l=e.map(s=>s(a));return o=Rl(...l)(i.dispatch),{...i,dispatch:o}}}function lj(e){return em(e)&&"type"in e&&typeof e.type=="string"}var iS=Symbol.for("immer-nothing"),K0=Symbol.for("immer-draftable"),ut=Symbol.for("immer-state");function nn(e,...t){throw new Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)}var Mt=Object,Wi=Mt.getPrototypeOf,Ll="constructor",Ku="prototype",rp="configurable",Al="enumerable",Gs="writable",ba="value",Wn=e=>!!e&&!!e[ut];function cn(e){var t;return e?oS(e)||Qu(e)||!!e[K0]||!!((t=e[Ll])!=null&&t[K0])||Ju(e)||ec(e):!1}var uj=Mt[Ku][Ll].toString(),Z0=new WeakMap;function oS(e){if(!e||!nm(e))return!1;const t=Wi(e);if(t===null||t===Mt[Ku])return!0;const n=Mt.hasOwnProperty.call(t,Ll)&&t[Ll];if(n===Object)return!0;if(!fi(n))return!1;let r=Z0.get(n);return r===void 0&&(r=Function.toString.call(n),Z0.set(n,r)),r===uj}function Zu(e,t,n=!0){Ra(e)===0?(n?Reflect.ownKeys(e):Mt.keys(e)).forEach(i=>{t(i,e[i],e)}):e.forEach((r,i)=>t(i,r,e))}function Ra(e){const t=e[ut];return t?t.type_:Qu(e)?1:Ju(e)?2:ec(e)?3:0}var Q0=(e,t,n=Ra(e))=>n===2?e.has(t):Mt[Ku].hasOwnProperty.call(e,t),ip=(e,t,n=Ra(e))=>n===2?e.get(t):e[t],Fl=(e,t,n,r=Ra(e))=>{r===2?e.set(t,n):r===3?e.add(n):e[t]=n};function cj(e,t){return e===t?e!==0||1/e===1/t:e!==e&&t!==t}var Qu=Array.isArray,Ju=e=>e instanceof Map,ec=e=>e instanceof Set,nm=e=>typeof e=="object",fi=e=>typeof e=="function",md=e=>typeof e=="boolean";function dj(e){const t=+e;return Number.isInteger(t)&&String(t)===e}var $n=e=>e.copy_||e.base_,rm=e=>e.modified_?e.copy_:e.base_;function op(e,t){if(Ju(e))return new Map(e);if(ec(e))return new Set(e);if(Qu(e))return Array[Ku].slice.call(e);const n=oS(e);if(t===!0||t==="class_only"&&!n){const r=Mt.getOwnPropertyDescriptors(e);delete r[ut];let i=Reflect.ownKeys(r);for(let o=0;o<i.length;o++){const a=i[o],l=r[a];l[Gs]===!1&&(l[Gs]=!0,l[rp]=!0),(l.get||l.set)&&(r[a]={[rp]:!0,[Gs]:!0,[Al]:l[Al],[ba]:e[a]})}return Mt.create(Wi(e),r)}else{const r=Wi(e);if(r!==null&&n)return{...e};const i=Mt.create(r);return Mt.assign(i,e)}}function im(e,t=!1){return tc(e)||Wn(e)||!cn(e)||(Ra(e)>1&&Mt.defineProperties(e,{set:fs,add:fs,clear:fs,delete:fs}),Mt.freeze(e),t&&Zu(e,(n,r)=>{im(r,!0)},!1)),e}function fj(){nn(2)}var fs={[ba]:fj};function tc(e){return e===null||!nm(e)?!0:Mt.isFrozen(e)}var Nl="MapSet",ap="Patches",J0="ArrayMethods",aS={};function Kr(e){const t=aS[e];return t||nn(0,e),t}var ev=e=>!!aS[e],wa,sS=()=>wa,pj=(e,t)=>({drafts_:[],parent_:e,immer_:t,canAutoFreeze_:!0,unfinalizedDrafts_:0,handledSet_:new Set,processedForPatches_:new Set,mapSetPlugin_:ev(Nl)?Kr(Nl):void 0,arrayMethodsPlugin_:ev(J0)?Kr(J0):void 0});function tv(e,t){t&&(e.patchPlugin_=Kr(ap),e.patches_=[],e.inversePatches_=[],e.patchListener_=t)}function sp(e){lp(e),e.drafts_.forEach(hj),e.drafts_=null}function lp(e){e===wa&&(wa=e.parent_)}var nv=e=>wa=pj(wa,e);function hj(e){const t=e[ut];t.type_===0||t.type_===1?t.revoke_():t.revoked_=!0}function rv(e,t){t.unfinalizedDrafts_=t.drafts_.length;const n=t.drafts_[0];if(e!==void 0&&e!==n){n[ut].modified_&&(sp(t),nn(4)),cn(e)&&(e=iv(t,e));const{patchPlugin_:i}=t;i&&i.generateReplacementPatches_(n[ut].base_,e,t)}else e=iv(t,n);return mj(t,e,!0),sp(t),t.patches_&&t.patchListener_(t.patches_,t.inversePatches_),e!==iS?e:void 0}function iv(e,t){if(tc(t))return t;const n=t[ut];if(!n)return zl(t,e.handledSet_,e);if(!nc(n,e))return t;if(!n.modified_)return n.base_;if(!n.finalized_){const{callbacks_:r}=n;if(r)for(;r.length>0;)r.pop()(e);cS(n,e)}return n.copy_}function mj(e,t,n=!1){!e.parent_&&e.immer_.autoFreeze_&&e.canAutoFreeze_&&im(t,n)}function lS(e){e.finalized_=!0,e.scope_.unfinalizedDrafts_--}var nc=(e,t)=>e.scope_===t,gj=[];function uS(e,t,n,r){const i=$n(e),o=e.type_;if(r!==void 0&&ip(i,r,o)===t){Fl(i,r,n,o);return}if(!e.draftLocations_){const l=e.draftLocations_=new Map;Zu(i,(s,u)=>{if(Wn(u)){const c=l.get(u)||[];c.push(s),l.set(u,c)}})}const a=e.draftLocations_.get(t)??gj;for(const l of a)Fl(i,l,n,o)}function vj(e,t,n){e.callbacks_.push(function(i){var l;const o=t;if(!o||!nc(o,i))return;(l=i.mapSetPlugin_)==null||l.fixSetContents(o);const a=rm(o);uS(e,o.draft_??o,a,n),cS(o,i)})}function cS(e,t){var r;if(e.modified_&&!e.finalized_&&(e.type_===3||e.type_===1&&e.allIndicesReassigned_||(((r=e.assigned_)==null?void 0:r.size)??0)>0)){const{patchPlugin_:i}=t;if(i){const o=i.getPath(e);o&&i.generatePatches_(e,o,t)}lS(e)}}function yj(e,t,n){const{scope_:r}=e;if(Wn(n)){const i=n[ut];nc(i,r)&&i.callbacks_.push(function(){Ys(e);const a=rm(i);uS(e,n,a,t)})}else cn(n)&&e.callbacks_.push(function(){const o=$n(e);e.type_===3?o.has(n)&&zl(n,r.handledSet_,r):ip(o,t,e.type_)===n&&r.drafts_.length>1&&(e.assigned_.get(t)??!1)===!0&&e.copy_&&zl(ip(e.copy_,t,e.type_),r.handledSet_,r)})}function zl(e,t,n){return!n.immer_.autoFreeze_&&n.unfinalizedDrafts_<1||Wn(e)||t.has(e)||!cn(e)||tc(e)||(t.add(e),Zu(e,(r,i)=>{if(Wn(i)){const o=i[ut];if(nc(o,n)){const a=rm(o);Fl(e,r,a,e.type_),lS(o)}}else cn(i)&&zl(i,t,n)})),e}function xj(e,t){const n=Qu(e),r={type_:n?1:0,scope_:t?t.scope_:sS(),modified_:!1,finalized_:!1,assigned_:void 0,parent_:t,base_:e,draft_:null,copy_:null,revoke_:null,isManual_:!1,callbacks_:void 0};let i=r,o=Vl;n&&(i=[r],o=Sa);const{revoke:a,proxy:l}=Proxy.revocable(i,o);return r.draft_=l,r.revoke_=a,[l,r]}var Vl={get(e,t){if(t===ut)return e;let n=e.scope_.arrayMethodsPlugin_;const r=e.type_===1&&typeof t=="string";if(r&&n!=null&&n.isArrayOperationMethod(t))return n.createMethodInterceptor(e,t);const i=$n(e);if(!Q0(i,t,e.type_))return bj(e,i,t);const o=i[t];if(e.finalized_||!cn(o)||r&&e.operationMethod&&(n!=null&&n.isMutatingArrayMethod(e.operationMethod))&&dj(t))return o;if(o===gd(e.base_,t)){Ys(e);const a=e.type_===1?+t:t,l=cp(e.scope_,o,e,a);return e.copy_[a]=l}return o},has(e,t){return t in $n(e)},ownKeys(e){return Reflect.ownKeys($n(e))},set(e,t,n){const r=dS($n(e),t);if(r!=null&&r.set)return r.set.call(e.draft_,n),!0;if(!e.modified_){const i=gd($n(e),t),o=i==null?void 0:i[ut];if(o&&o.base_===n)return e.copy_[t]=n,e.assigned_.set(t,!1),!0;if(cj(n,i)&&(n!==void 0||Q0(e.base_,t,e.type_)))return!0;Ys(e),up(e)}return e.copy_[t]===n&&(n!==void 0||t in e.copy_)||Number.isNaN(n)&&Number.isNaN(e.copy_[t])||(e.copy_[t]=n,e.assigned_.set(t,!0),yj(e,t,n)),!0},deleteProperty(e,t){return Ys(e),gd(e.base_,t)!==void 0||t in e.base_?(e.assigned_.set(t,!1),up(e)):e.assigned_.delete(t),e.copy_&&delete e.copy_[t],!0},getOwnPropertyDescriptor(e,t){const n=$n(e),r=Reflect.getOwnPropertyDescriptor(n,t);return r&&{[Gs]:!0,[rp]:e.type_!==1||t!=="length",[Al]:r[Al],[ba]:n[t]}},defineProperty(){nn(11)},getPrototypeOf(e){return Wi(e.base_)},setPrototypeOf(){nn(12)}},Sa={};for(let e in Vl){let t=Vl[e];Sa[e]=function(){const n=arguments;return n[0]=n[0][0],t.apply(this,n)}}Sa.deleteProperty=function(e,t){return Sa.set.call(this,e,t,void 0)};Sa.set=function(e,t,n){return Vl.set.call(this,e[0],t,n,e[0])};function gd(e,t){const n=e[ut];return(n?$n(n):e)[t]}function bj(e,t,n){var i;const r=dS(t,n);return r?ba in r?r[ba]:(i=r.get)==null?void 0:i.call(e.draft_):void 0}function dS(e,t){if(!(t in e))return;let n=Wi(e);for(;n;){const r=Object.getOwnPropertyDescriptor(n,t);if(r)return r;n=Wi(n)}}function up(e){e.modified_||(e.modified_=!0,e.parent_&&up(e.parent_))}function Ys(e){e.copy_||(e.assigned_=new Map,e.copy_=op(e.base_,e.scope_.immer_.useStrictShallowCopy_))}var wj=class{constructor(e){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.useStrictIteration_=!1,this.produce=(t,n,r)=>{if(fi(t)&&!fi(n)){const o=n;n=t;const a=this;return function(s=o,...u){return a.produce(s,c=>n.call(this,c,...u))}}fi(n)||nn(6),r!==void 0&&!fi(r)&&nn(7);let i;if(cn(t)){const o=nv(this),a=cp(o,t,void 0);let l=!0;try{i=n(a),l=!1}finally{l?sp(o):lp(o)}return tv(o,r),rv(i,o)}else if(!t||!nm(t)){if(i=n(t),i===void 0&&(i=t),i===iS&&(i=void 0),this.autoFreeze_&&im(i,!0),r){const o=[],a=[];Kr(ap).generateReplacementPatches_(t,i,{patches_:o,inversePatches_:a}),r(o,a)}return i}else nn(1,t)},this.produceWithPatches=(t,n)=>{if(fi(t))return(a,...l)=>this.produceWithPatches(a,s=>t(s,...l));let r,i;return[this.produce(t,n,(a,l)=>{r=a,i=l}),r,i]},md(e==null?void 0:e.autoFreeze)&&this.setAutoFreeze(e.autoFreeze),md(e==null?void 0:e.useStrictShallowCopy)&&this.setUseStrictShallowCopy(e.useStrictShallowCopy),md(e==null?void 0:e.useStrictIteration)&&this.setUseStrictIteration(e.useStrictIteration)}createDraft(e){cn(e)||nn(8),Wn(e)&&(e=Sj(e));const t=nv(this),n=cp(t,e,void 0);return n[ut].isManual_=!0,lp(t),n}finishDraft(e,t){const n=e&&e[ut];(!n||!n.isManual_)&&nn(9);const{scope_:r}=n;return tv(r,t),rv(void 0,r)}setAutoFreeze(e){this.autoFreeze_=e}setUseStrictShallowCopy(e){this.useStrictShallowCopy_=e}setUseStrictIteration(e){this.useStrictIteration_=e}shouldUseStrictIteration(){return this.useStrictIteration_}applyPatches(e,t){let n;for(n=t.length-1;n>=0;n--){const i=t[n];if(i.path.length===0&&i.op==="replace"){e=i.value;break}}n>-1&&(t=t.slice(n+1));const r=Kr(ap).applyPatches_;return Wn(e)?r(e,t):this.produce(e,i=>r(i,t))}};function cp(e,t,n,r){const[i,o]=Ju(t)?Kr(Nl).proxyMap_(t,n):ec(t)?Kr(Nl).proxySet_(t,n):xj(t,n);return((n==null?void 0:n.scope_)??sS()).drafts_.push(i),o.callbacks_=(n==null?void 0:n.callbacks_)??[],o.key_=r,n&&r!==void 0?vj(n,o,r):o.callbacks_.push(function(s){var c;(c=s.mapSetPlugin_)==null||c.fixSetContents(o);const{patchPlugin_:u}=s;o.modified_&&u&&u.generatePatches_(o,[],s)}),i}function Sj(e){return Wn(e)||nn(10,e),fS(e)}function fS(e){if(!cn(e)||tc(e))return e;const t=e[ut];let n,r=!0;if(t){if(!t.modified_)return t.base_;t.finalized_=!0,n=op(e,t.scope_.immer_.useStrictShallowCopy_),r=t.scope_.immer_.shouldUseStrictIteration()}else n=op(e,!0);return Zu(n,(i,o)=>{Fl(n,i,fS(o))},r),t&&(t.finalized_=!1),n}var _j=new wj,pS=_j.produce;function hS(e){return({dispatch:n,getState:r})=>i=>o=>typeof o=="function"?o(n,r,e):i(o)}var Ej=hS(),Cj=hS,kj=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?Rl:Rl.apply(null,arguments)};function ov(e,t){function n(...r){if(t){let i=t(...r);if(!i)throw new Error(Nn(0));return{type:e,payload:i.payload,..."meta"in i&&{meta:i.meta},..."error"in i&&{error:i.error}}}return{type:e,payload:r[0]}}return n.toString=()=>`${e}`,n.type=e,n.match=r=>lj(r)&&r.type===e,n}var mS=class $o extends Array{constructor(...t){super(...t),Object.setPrototypeOf(this,$o.prototype)}static get[Symbol.species](){return $o}concat(...t){return super.concat.apply(this,t)}prepend(...t){return t.length===1&&Array.isArray(t[0])?new $o(...t[0].concat(this)):new $o(...t.concat(this))}};function av(e){return cn(e)?pS(e,()=>{}):e}function ps(e,t,n){return e.has(t)?e.get(t):e.set(t,n(t)).get(t)}function Tj(e){return typeof e=="boolean"}var Oj=()=>function(t){const{thunk:n=!0,immutableCheck:r=!0,serializableCheck:i=!0,actionCreatorCheck:o=!0}=t??{};let a=new mS;return n&&(Tj(n)?a.push(Ej):a.push(Cj(n.extraArgument))),a},Pj="RTK_autoBatch",sv=e=>t=>{setTimeout(t,e)},Mj=(e={type:"raf"})=>t=>(...n)=>{const r=t(...n);let i=!0,o=!1,a=!1;const l=new Set,s=e.type==="tick"?queueMicrotask:e.type==="raf"?typeof window<"u"&&window.requestAnimationFrame?window.requestAnimationFrame:sv(10):e.type==="callback"?e.queueNotification:sv(e.timeout),u=()=>{a=!1,o&&(o=!1,l.forEach(c=>c()))};return Object.assign({},r,{subscribe(c){const d=()=>i&&c(),m=r.subscribe(d);return l.add(c),()=>{m(),l.delete(c)}},dispatch(c){var d;try{return i=!((d=c==null?void 0:c.meta)!=null&&d[Pj]),o=!i,o&&(a||(a=!0,s(u))),r.dispatch(c)}finally{i=!0}}})},Ij=e=>function(n){const{autoBatch:r=!0}=n??{};let i=new mS(e);return r&&i.push(Mj(typeof r=="object"?r:void 0)),i};function jj(e){const t=Oj(),{reducer:n=void 0,middleware:r,devTools:i=!0,duplicateMiddlewareCheck:o=!0,preloadedState:a=void 0,enhancers:l=void 0}=e||{};let s;if(typeof n=="function")s=n;else if(em(n))s=aj(n);else throw new Error(Nn(1));let u;typeof r=="function"?u=r(t):u=t();let c=Rl;i&&(c=kj({trace:!1,...typeof i=="object"&&i}));const d=sj(...u),m=Ij(d);let h=typeof l=="function"?l(m):m();const g=c(...h);return tm(s,a,g)}function gS(e){const t={},n=[];let r;const i={addCase(o,a){const l=typeof o=="string"?o:o.type;if(!l)throw new Error(Nn(28));if(l in t)throw new Error(Nn(29));return t[l]=a,i},addAsyncThunk(o,a){return a.pending&&(t[o.pending.type]=a.pending),a.rejected&&(t[o.rejected.type]=a.rejected),a.fulfilled&&(t[o.fulfilled.type]=a.fulfilled),a.settled&&n.push({matcher:o.settled,reducer:a.settled}),i},addMatcher(o,a){return n.push({matcher:o,reducer:a}),i},addDefaultCase(o){return r=o,i}};return e(i),[t,n,r]}function $j(e){return typeof e=="function"}function Dj(e,t){let[n,r,i]=gS(t),o;if($j(e))o=()=>av(e());else{const l=av(e);o=()=>l}function a(l=o(),s){let u=[n[s.type],...r.filter(({matcher:c})=>c(s)).map(({reducer:c})=>c)];return u.filter(c=>!!c).length===0&&(u=[i]),u.reduce((c,d)=>{if(d)if(Wn(c)){const h=d(c,s);return h===void 0?c:h}else{if(cn(c))return pS(c,m=>d(m,s));{const m=d(c,s);if(m===void 0){if(c===null)return c;throw Error("A case reducer on a non-draftable value must not return undefined")}return m}}return c},l)}return a.getInitialState=o,a}var Rj=Symbol.for("rtk-slice-createasyncthunk");function Lj(e,t){return`${e}/${t}`}function Aj({creators:e}={}){var n;const t=(n=e==null?void 0:e.asyncThunk)==null?void 0:n[Rj];return function(i){const{name:o,reducerPath:a=o}=i;if(!o)throw new Error(Nn(11));typeof process<"u";const l=(typeof i.reducers=="function"?i.reducers(Nj()):i.reducers)||{},s=Object.keys(l),u={sliceCaseReducersByName:{},sliceCaseReducersByType:{},actionCreators:{},sliceMatchers:[]},c={addCase(w,C){const k=typeof w=="string"?w:w.type;if(!k)throw new Error(Nn(12));if(k in u.sliceCaseReducersByType)throw new Error(Nn(13));return u.sliceCaseReducersByType[k]=C,c},addMatcher(w,C){return u.sliceMatchers.push({matcher:w,reducer:C}),c},exposeAction(w,C){return u.actionCreators[w]=C,c},exposeCaseReducer(w,C){return u.sliceCaseReducersByName[w]=C,c}};s.forEach(w=>{const C=l[w],k={reducerName:w,type:Lj(o,w),createNotation:typeof i.reducers=="function"};Vj(C)?Uj(k,C,c,t):zj(k,C,c)});function d(){const[w={},C=[],k=void 0]=typeof i.extraReducers=="function"?gS(i.extraReducers):[i.extraReducers],_={...w,...u.sliceCaseReducersByType};return Dj(i.initialState,E=>{for(let M in _)E.addCase(M,_[M]);for(let M of u.sliceMatchers)E.addMatcher(M.matcher,M.reducer);for(let M of C)E.addMatcher(M.matcher,M.reducer);k&&E.addDefaultCase(k)})}const m=w=>w,h=new Map,g=new WeakMap;let x;function S(w,C){return x||(x=d()),x(w,C)}function f(){return x||(x=d()),x.getInitialState()}function p(w,C=!1){function k(E){let M=E[w];return typeof M>"u"&&C&&(M=ps(g,k,f)),M}function _(E=m){const M=ps(h,C,()=>new WeakMap);return ps(M,E,()=>{const I={};for(const[$,P]of Object.entries(i.selectors??{}))I[$]=Fj(P,E,()=>ps(g,E,f),C);return I})}return{reducerPath:w,getSelectors:_,get selectors(){return _(k)},selectSlice:k}}const v={name:o,reducer:S,actions:u.actionCreators,caseReducers:u.sliceCaseReducersByName,getInitialState:f,...p(a),injectInto(w,{reducerPath:C,...k}={}){const _=C??a;return w.inject({reducerPath:_,reducer:S},k),{...v,...p(_,!0)}}};return v}}function Fj(e,t,n,r){function i(o,...a){let l=t(o);return typeof l>"u"&&r&&(l=n()),e(l,...a)}return i.unwrapped=e,i}var vS=Aj();function Nj(){function e(t,n){return{_reducerDefinitionType:"asyncThunk",payloadCreator:t,...n}}return e.withTypes=()=>e,{reducer(t){return Object.assign({[t.name](...n){return t(...n)}}[t.name],{_reducerDefinitionType:"reducer"})},preparedReducer(t,n){return{_reducerDefinitionType:"reducerWithPrepare",prepare:t,reducer:n}},asyncThunk:e}}function zj({type:e,reducerName:t,createNotation:n},r,i){let o,a;if("reducer"in r){if(n&&!Bj(r))throw new Error(Nn(17));o=r.reducer,a=r.prepare}else o=r;i.addCase(e,o).exposeCaseReducer(t,o).exposeAction(t,a?ov(e,a):ov(e))}function Vj(e){return e._reducerDefinitionType==="asyncThunk"}function Bj(e){return e._reducerDefinitionType==="reducerWithPrepare"}function Uj({type:e,reducerName:t},n,r,i){if(!i)throw new Error(Nn(18));const{payloadCreator:o,fulfilled:a,pending:l,rejected:s,settled:u,options:c}=n,d=i(e,o,c);r.exposeAction(t,d),a&&r.addCase(d.fulfilled,a),l&&r.addCase(d.pending,l),s&&r.addCase(d.rejected,s),u&&r.addMatcher(d.settled,u),r.exposeCaseReducer(t,{fulfilled:a||hs,pending:l||hs,rejected:s||hs,settled:u||hs})}function hs(){}function Nn(e){return`Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}const yS=vS({name:"cart",initialState:{items:[]},reducers:{addToCart:(e,t)=>{const n=e.items.find(r=>r.id===t.payload.id);n?n.quantity=(n.quantity||0)+1:e.items.push({...t.payload,quantity:1})},removeFromCart:(e,t)=>{const n=t.payload;e.items=e.items.filter(r=>r.id!==n.id)},clearCart:e=>{e.items=[]},addAllToCart:(e,t)=>{const n=t.payload.map(r=>({...r,quantity:r.quantity||1}));e.items.push(...n)},incrementQuantity:(e,t)=>{const n=e.items.find(r=>r.id===t.payload);n&&(n.quantity+=1)},decrementQuantity:(e,t)=>{const n=e.items.find(r=>r.id===t.payload);n&&n.quantity>1&&(n.quantity-=1)}}}),{addToCart:rc,removeFromCart:Hj,clearCart:Wj,addAllToCart:Gj,incrementQuantity:Yj,decrementQuantity:Xj}=yS.actions,qj=yS.reducer;function xS(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var i=e.length;for(t=0;t<i;t++)e[t]&&(n=xS(e[t]))&&(r&&(r+=" "),r+=n)}else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function Br(){for(var e,t,n=0,r="",i=arguments.length;n<i;n++)(e=arguments[n])&&(t=xS(e))&&(r&&(r+=" "),r+=t);return r}function Kj(e){if(!e||typeof document>"u")return;let t=document.head||document.getElementsByTagName("head")[0],n=document.createElement("style");n.type="text/css",t.firstChild?t.insertBefore(n,t.firstChild):t.appendChild(n),n.styleSheet?n.styleSheet.cssText=e:n.appendChild(document.createTextNode(e))}Kj(`:root{--toastify-color-light: #fff;--toastify-color-dark: #121212;--toastify-color-info: #3498db;--toastify-color-success: #07bc0c;--toastify-color-warning: #f1c40f;--toastify-color-error: hsl(6, 78%, 57%);--toastify-color-transparent: rgba(255, 255, 255, .7);--toastify-icon-color-info: var(--toastify-color-info);--toastify-icon-color-success: var(--toastify-color-success);--toastify-icon-color-warning: var(--toastify-color-warning);--toastify-icon-color-error: var(--toastify-color-error);--toastify-container-width: fit-content;--toastify-toast-width: 320px;--toastify-toast-offset: 16px;--toastify-toast-top: max(var(--toastify-toast-offset), env(safe-area-inset-top));--toastify-toast-right: max(var(--toastify-toast-offset), env(safe-area-inset-right));--toastify-toast-left: max(var(--toastify-toast-offset), env(safe-area-inset-left));--toastify-toast-bottom: max(var(--toastify-toast-offset), env(safe-area-inset-bottom));--toastify-toast-background: #fff;--toastify-toast-padding: 14px;--toastify-toast-min-height: 64px;--toastify-toast-max-height: 800px;--toastify-toast-bd-radius: 6px;--toastify-toast-shadow: 0px 4px 12px rgba(0, 0, 0, .1);--toastify-font-family: sans-serif;--toastify-z-index: 9999;--toastify-text-color-light: #757575;--toastify-text-color-dark: #fff;--toastify-text-color-info: #fff;--toastify-text-color-success: #fff;--toastify-text-color-warning: #fff;--toastify-text-color-error: #fff;--toastify-spinner-color: #616161;--toastify-spinner-color-empty-area: #e0e0e0;--toastify-color-progress-light: linear-gradient(to right, #4cd964, #5ac8fa, #007aff, #34aadc, #5856d6, #ff2d55);--toastify-color-progress-dark: #bb86fc;--toastify-color-progress-info: var(--toastify-color-info);--toastify-color-progress-success: var(--toastify-color-success);--toastify-color-progress-warning: var(--toastify-color-warning);--toastify-color-progress-error: var(--toastify-color-error);--toastify-color-progress-bgo: .2}.Toastify__toast-container{z-index:var(--toastify-z-index);-webkit-transform:translate3d(0,0,var(--toastify-z-index));position:fixed;width:var(--toastify-container-width);box-sizing:border-box;color:#fff;display:flex;flex-direction:column}.Toastify__toast-container--top-left{top:var(--toastify-toast-top);left:var(--toastify-toast-left)}.Toastify__toast-container--top-center{top:var(--toastify-toast-top);left:50%;transform:translate(-50%);align-items:center}.Toastify__toast-container--top-right{top:var(--toastify-toast-top);right:var(--toastify-toast-right);align-items:end}.Toastify__toast-container--bottom-left{bottom:var(--toastify-toast-bottom);left:var(--toastify-toast-left)}.Toastify__toast-container--bottom-center{bottom:var(--toastify-toast-bottom);left:50%;transform:translate(-50%);align-items:center}.Toastify__toast-container--bottom-right{bottom:var(--toastify-toast-bottom);right:var(--toastify-toast-right);align-items:end}.Toastify__toast{--y: 0;position:relative;touch-action:none;width:var(--toastify-toast-width);min-height:var(--toastify-toast-min-height);box-sizing:border-box;margin-bottom:1rem;padding:var(--toastify-toast-padding);border-radius:var(--toastify-toast-bd-radius);box-shadow:var(--toastify-toast-shadow);max-height:var(--toastify-toast-max-height);font-family:var(--toastify-font-family);z-index:0;display:flex;flex:1 auto;align-items:center;word-break:break-word}@media only screen and (max-width: 480px){.Toastify__toast-container{width:100vw;left:env(safe-area-inset-left);margin:0}.Toastify__toast-container--top-left,.Toastify__toast-container--top-center,.Toastify__toast-container--top-right{top:env(safe-area-inset-top);transform:translate(0)}.Toastify__toast-container--bottom-left,.Toastify__toast-container--bottom-center,.Toastify__toast-container--bottom-right{bottom:env(safe-area-inset-bottom);transform:translate(0)}.Toastify__toast-container--rtl{right:env(safe-area-inset-right);left:initial}.Toastify__toast{--toastify-toast-width: 100%;margin-bottom:0;border-radius:0}}.Toastify__toast-container[data-stacked=true]{width:var(--toastify-toast-width)}.Toastify__toast--stacked{position:absolute;width:100%;transform:translate3d(0,var(--y),0) scale(var(--s));transition:transform .3s}.Toastify__toast--stacked[data-collapsed] .Toastify__toast-body,.Toastify__toast--stacked[data-collapsed] .Toastify__close-button{transition:opacity .1s}.Toastify__toast--stacked[data-collapsed=false]{overflow:visible}.Toastify__toast--stacked[data-collapsed=true]:not(:last-child)>*{opacity:0}.Toastify__toast--stacked:after{content:"";position:absolute;left:0;right:0;height:calc(var(--g) * 1px);bottom:100%}.Toastify__toast--stacked[data-pos=top]{top:0}.Toastify__toast--stacked[data-pos=bot]{bottom:0}.Toastify__toast--stacked[data-pos=bot].Toastify__toast--stacked:before{transform-origin:top}.Toastify__toast--stacked[data-pos=top].Toastify__toast--stacked:before{transform-origin:bottom}.Toastify__toast--stacked:before{content:"";position:absolute;left:0;right:0;bottom:0;height:100%;transform:scaleY(3);z-index:-1}.Toastify__toast--rtl{direction:rtl}.Toastify__toast--close-on-click{cursor:pointer}.Toastify__toast-icon{margin-inline-end:10px;width:22px;flex-shrink:0;display:flex}.Toastify--animate{animation-fill-mode:both;animation-duration:.5s}.Toastify--animate-icon{animation-fill-mode:both;animation-duration:.3s}.Toastify__toast-theme--dark{background:var(--toastify-color-dark);color:var(--toastify-text-color-dark)}.Toastify__toast-theme--light,.Toastify__toast-theme--colored.Toastify__toast--default{background:var(--toastify-color-light);color:var(--toastify-text-color-light)}.Toastify__toast-theme--colored.Toastify__toast--info{color:var(--toastify-text-color-info);background:var(--toastify-color-info)}.Toastify__toast-theme--colored.Toastify__toast--success{color:var(--toastify-text-color-success);background:var(--toastify-color-success)}.Toastify__toast-theme--colored.Toastify__toast--warning{color:var(--toastify-text-color-warning);background:var(--toastify-color-warning)}.Toastify__toast-theme--colored.Toastify__toast--error{color:var(--toastify-text-color-error);background:var(--toastify-color-error)}.Toastify__progress-bar-theme--light{background:var(--toastify-color-progress-light)}.Toastify__progress-bar-theme--dark{background:var(--toastify-color-progress-dark)}.Toastify__progress-bar--info{background:var(--toastify-color-progress-info)}.Toastify__progress-bar--success{background:var(--toastify-color-progress-success)}.Toastify__progress-bar--warning{background:var(--toastify-color-progress-warning)}.Toastify__progress-bar--error{background:var(--toastify-color-progress-error)}.Toastify__progress-bar-theme--colored.Toastify__progress-bar--info,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--success,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--warning,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--error{background:var(--toastify-color-transparent)}.Toastify__close-button{color:#fff;position:absolute;top:6px;right:6px;background:transparent;outline:none;border:none;padding:0;cursor:pointer;opacity:.7;transition:.3s ease;z-index:1}.Toastify__toast--rtl .Toastify__close-button{left:6px;right:unset}.Toastify__close-button--light{color:#000;opacity:.3}.Toastify__close-button>svg{fill:currentColor;height:16px;width:14px}.Toastify__close-button:hover,.Toastify__close-button:focus{opacity:1}@keyframes Toastify__trackProgress{0%{transform:scaleX(1)}to{transform:scaleX(0)}}.Toastify__progress-bar{position:absolute;bottom:0;left:0;width:100%;height:100%;z-index:1;opacity:.7;transform-origin:left}.Toastify__progress-bar--animated{animation:Toastify__trackProgress linear 1 forwards}.Toastify__progress-bar--controlled{transition:transform .2s}.Toastify__progress-bar--rtl{right:0;left:initial;transform-origin:right;border-bottom-left-radius:initial}.Toastify__progress-bar--wrp{position:absolute;overflow:hidden;bottom:0;left:0;width:100%;height:5px;border-bottom-left-radius:var(--toastify-toast-bd-radius);border-bottom-right-radius:var(--toastify-toast-bd-radius)}.Toastify__progress-bar--wrp[data-hidden=true]{opacity:0}.Toastify__progress-bar--bg{opacity:var(--toastify-color-progress-bgo);width:100%;height:100%}.Toastify__spinner{width:20px;height:20px;box-sizing:border-box;border:2px solid;border-radius:100%;border-color:var(--toastify-spinner-color-empty-area);border-right-color:var(--toastify-spinner-color);animation:Toastify__spin .65s linear infinite}@keyframes Toastify__bounceInRight{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(3000px,0,0)}60%{opacity:1;transform:translate3d(-25px,0,0)}75%{transform:translate3d(10px,0,0)}90%{transform:translate3d(-5px,0,0)}to{transform:none}}@keyframes Toastify__bounceOutRight{20%{opacity:1;transform:translate3d(-20px,var(--y),0)}to{opacity:0;transform:translate3d(2000px,var(--y),0)}}@keyframes Toastify__bounceInLeft{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(-3000px,0,0)}60%{opacity:1;transform:translate3d(25px,0,0)}75%{transform:translate3d(-10px,0,0)}90%{transform:translate3d(5px,0,0)}to{transform:none}}@keyframes Toastify__bounceOutLeft{20%{opacity:1;transform:translate3d(20px,var(--y),0)}to{opacity:0;transform:translate3d(-2000px,var(--y),0)}}@keyframes Toastify__bounceInUp{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,3000px,0)}60%{opacity:1;transform:translate3d(0,-20px,0)}75%{transform:translate3d(0,10px,0)}90%{transform:translate3d(0,-5px,0)}to{transform:translateZ(0)}}@keyframes Toastify__bounceOutUp{20%{transform:translate3d(0,calc(var(--y) - 10px),0)}40%,45%{opacity:1;transform:translate3d(0,calc(var(--y) + 20px),0)}to{opacity:0;transform:translate3d(0,-2000px,0)}}@keyframes Toastify__bounceInDown{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,-3000px,0)}60%{opacity:1;transform:translate3d(0,25px,0)}75%{transform:translate3d(0,-10px,0)}90%{transform:translate3d(0,5px,0)}to{transform:none}}@keyframes Toastify__bounceOutDown{20%{transform:translate3d(0,calc(var(--y) - 10px),0)}40%,45%{opacity:1;transform:translate3d(0,calc(var(--y) + 20px),0)}to{opacity:0;transform:translate3d(0,2000px,0)}}.Toastify__bounce-enter--top-left,.Toastify__bounce-enter--bottom-left{animation-name:Toastify__bounceInLeft}.Toastify__bounce-enter--top-right,.Toastify__bounce-enter--bottom-right{animation-name:Toastify__bounceInRight}.Toastify__bounce-enter--top-center{animation-name:Toastify__bounceInDown}.Toastify__bounce-enter--bottom-center{animation-name:Toastify__bounceInUp}.Toastify__bounce-exit--top-left,.Toastify__bounce-exit--bottom-left{animation-name:Toastify__bounceOutLeft}.Toastify__bounce-exit--top-right,.Toastify__bounce-exit--bottom-right{animation-name:Toastify__bounceOutRight}.Toastify__bounce-exit--top-center{animation-name:Toastify__bounceOutUp}.Toastify__bounce-exit--bottom-center{animation-name:Toastify__bounceOutDown}@keyframes Toastify__zoomIn{0%{opacity:0;transform:scale3d(.3,.3,.3)}50%{opacity:1}}@keyframes Toastify__zoomOut{0%{opacity:1}50%{opacity:0;transform:translate3d(0,var(--y),0) scale3d(.3,.3,.3)}to{opacity:0}}.Toastify__zoom-enter{animation-name:Toastify__zoomIn}.Toastify__zoom-exit{animation-name:Toastify__zoomOut}@keyframes Toastify__flipIn{0%{transform:perspective(400px) rotateX(90deg);animation-timing-function:ease-in;opacity:0}40%{transform:perspective(400px) rotateX(-20deg);animation-timing-function:ease-in}60%{transform:perspective(400px) rotateX(10deg);opacity:1}80%{transform:perspective(400px) rotateX(-5deg)}to{transform:perspective(400px)}}@keyframes Toastify__flipOut{0%{transform:translate3d(0,var(--y),0) perspective(400px)}30%{transform:translate3d(0,var(--y),0) perspective(400px) rotateX(-20deg);opacity:1}to{transform:translate3d(0,var(--y),0) perspective(400px) rotateX(90deg);opacity:0}}.Toastify__flip-enter{animation-name:Toastify__flipIn}.Toastify__flip-exit{animation-name:Toastify__flipOut}@keyframes Toastify__slideInRight{0%{transform:translate3d(110%,0,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInLeft{0%{transform:translate3d(-110%,0,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInUp{0%{transform:translate3d(0,110%,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInDown{0%{transform:translate3d(0,-110%,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideOutRight{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(110%,var(--y),0)}}@keyframes Toastify__slideOutLeft{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(-110%,var(--y),0)}}@keyframes Toastify__slideOutDown{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(0,500px,0)}}@keyframes Toastify__slideOutUp{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(0,-500px,0)}}.Toastify__slide-enter--top-left,.Toastify__slide-enter--bottom-left{animation-name:Toastify__slideInLeft}.Toastify__slide-enter--top-right,.Toastify__slide-enter--bottom-right{animation-name:Toastify__slideInRight}.Toastify__slide-enter--top-center{animation-name:Toastify__slideInDown}.Toastify__slide-enter--bottom-center{animation-name:Toastify__slideInUp}.Toastify__slide-exit--top-left,.Toastify__slide-exit--bottom-left{animation-name:Toastify__slideOutLeft;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--top-right,.Toastify__slide-exit--bottom-right{animation-name:Toastify__slideOutRight;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--top-center{animation-name:Toastify__slideOutUp;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--bottom-center{animation-name:Toastify__slideOutDown;animation-timing-function:ease-in;animation-duration:.3s}@keyframes Toastify__spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}
`);var La=e=>typeof e=="number"&&!isNaN(e),Zr=e=>typeof e=="string",Gn=e=>typeof e=="function",Zj=e=>Zr(e)||La(e),dp=e=>Zr(e)||Gn(e)?e:null,Qj=(e,t)=>e===!1||La(e)&&e>0?e:t,fp=e=>b.isValidElement(e)||Zr(e)||Gn(e)||La(e);function Jj(e,t,n=300){let{scrollHeight:r,style:i}=e;requestAnimationFrame(()=>{i.minHeight="initial",i.height=r+"px",i.transition=`all ${n}ms`,requestAnimationFrame(()=>{i.height="0",i.padding="0",i.margin="0",setTimeout(t,n)})})}function e5({enter:e,exit:t,appendPosition:n=!1,collapse:r=!0,collapseDuration:i=300}){return function({children:o,position:a,preventExitTransition:l,done:s,nodeRef:u,isIn:c,playToast:d}){let m=n?`${e}--${a}`:e,h=n?`${t}--${a}`:t,g=b.useRef(0);return b.useLayoutEffect(()=>{let x=u.current,S=m.split(" "),f=p=>{p.target===u.current&&(d(),x.removeEventListener("animationend",f),x.removeEventListener("animationcancel",f),g.current===0&&p.type!=="animationcancel"&&x.classList.remove(...S))};x.classList.add(...S),x.addEventListener("animationend",f),x.addEventListener("animationcancel",f)},[]),b.useEffect(()=>{let x=u.current,S=()=>{x.removeEventListener("animationend",S),r?Jj(x,s,i):s()};c||(l?S():(g.current=1,x.className+=` ${h}`,x.addEventListener("animationend",S)))},[c]),W.createElement(W.Fragment,null,o)}}function lv(e,t){return{content:bS(e.content,e.props),containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,reason:e.removalReason,status:t}}function bS(e,t,n=!1){return b.isValidElement(e)&&!Zr(e.type)?b.cloneElement(e,{closeToast:t.closeToast,toastProps:t,data:t.data,isPaused:n}):Gn(e)?e({closeToast:t.closeToast,toastProps:t,data:t.data,isPaused:n}):e}function t5({closeToast:e,theme:t,ariaLabel:n="close"}){return W.createElement("button",{className:`Toastify__close-button Toastify__close-button--${t}`,type:"button",onClick:r=>{r.stopPropagation(),e(!0)},"aria-label":n},W.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},W.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function n5({delay:e,isRunning:t,closeToast:n,type:r="default",hide:i,className:o,controlledProgress:a,progress:l,rtl:s,isIn:u,theme:c}){let d=i||a&&l===0,m={animationDuration:`${e}ms`,animationPlayState:t?"running":"paused"};a&&(m.transform=`scaleX(${l})`);let h=Br("Toastify__progress-bar",a?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${c}`,`Toastify__progress-bar--${r}`,{"Toastify__progress-bar--rtl":s}),g=Gn(o)?o({rtl:s,type:r,defaultClassName:h}):Br(h,o),x={[a&&l>=1?"onTransitionEnd":"onAnimationEnd"]:a&&l<1?null:()=>{u&&n()}};return W.createElement("div",{className:"Toastify__progress-bar--wrp","data-hidden":d},W.createElement("div",{className:`Toastify__progress-bar--bg Toastify__progress-bar-theme--${c} Toastify__progress-bar--${r}`}),W.createElement("div",{role:"progressbar","aria-hidden":d?"true":"false","aria-label":"notification timer",className:g,style:m,...x}))}var r5=1,wS=()=>`${r5++}`;function i5(e,t,n){let r=1,i=0,o=[],a=[],l=t,s=new Map,u=new Set,c=p=>(u.add(p),()=>u.delete(p)),d=()=>{a=Array.from(s.values()),u.forEach(p=>p())},m=({containerId:p,toastId:v,updateId:w})=>{let C=p?p!==e:e!==1,k=s.has(v)&&w==null;return C||k},h=(p,v)=>{s.forEach(w=>{var C;(v==null||v===w.props.toastId)&&((C=w.toggle)==null||C.call(w,p))})},g=p=>{var v,w;(w=(v=p.props)==null?void 0:v.onClose)==null||w.call(v,p.removalReason),p.isActive=!1},x=p=>{if(p==null)s.forEach(g);else{let v=s.get(p);v&&g(v)}d()},S=()=>{i-=o.length,o=[]},f=p=>{var v,w;let{toastId:C,updateId:k}=p.props,_=k==null;p.staleId&&s.delete(p.staleId),p.isActive=!0,s.set(C,p),d(),n(lv(p,_?"added":"updated")),_&&((w=(v=p.props).onOpen)==null||w.call(v))};return{id:e,props:l,observe:c,toggle:h,removeToast:x,toasts:s,clearQueue:S,buildToast:(p,v)=>{if(m(v))return;let{toastId:w,updateId:C,data:k,staleId:_,delay:E}=v,M=C==null;M&&i++;let I={...l,style:l.toastStyle,key:r++,...Object.fromEntries(Object.entries(v).filter(([P,j])=>j!=null)),toastId:w,updateId:C,data:k,isIn:!1,className:dp(v.className||l.toastClassName),progressClassName:dp(v.progressClassName||l.progressClassName),autoClose:v.isLoading?!1:Qj(v.autoClose,l.autoClose),closeToast(P){s.get(w).removalReason=P,x(w)},deleteToast(){let P=s.get(w);if(P!=null){if(n(lv(P,"removed")),s.delete(w),i--,i<0&&(i=0),o.length>0){f(o.shift());return}d()}}};I.closeButton=l.closeButton,v.closeButton===!1||fp(v.closeButton)?I.closeButton=v.closeButton:v.closeButton===!0&&(I.closeButton=fp(l.closeButton)?l.closeButton:!0);let $={content:p,props:I,staleId:_};l.limit&&l.limit>0&&i>l.limit&&M?o.push($):La(E)?setTimeout(()=>{f($)},E):f($)},setProps(p){l=p},setToggle:(p,v)=>{let w=s.get(p);w&&(w.toggle=v)},isToastActive:p=>{var v;return(v=s.get(p))==null?void 0:v.isActive},getSnapshot:()=>a}}var st=new Map,_a=[],pp=new Set,o5=e=>pp.forEach(t=>t(e)),SS=()=>st.size>0;function a5(){_a.forEach(e=>ES(e.content,e.options)),_a=[]}var s5=(e,{containerId:t})=>{var n;return(n=st.get(t||1))==null?void 0:n.toasts.get(e)};function _S(e,t){var n;if(t)return!!((n=st.get(t))!=null&&n.isToastActive(e));let r=!1;return st.forEach(i=>{i.isToastActive(e)&&(r=!0)}),r}function l5(e){if(!SS()){_a=_a.filter(t=>e!=null&&t.options.toastId!==e);return}if(e==null||Zj(e))st.forEach(t=>{t.removeToast(e)});else if(e&&("containerId"in e||"id"in e)){let t=st.get(e.containerId);t?t.removeToast(e.id):st.forEach(n=>{n.removeToast(e.id)})}}var u5=(e={})=>{st.forEach(t=>{t.props.limit&&(!e.containerId||t.id===e.containerId)&&t.clearQueue()})};function ES(e,t){fp(e)&&(SS()||_a.push({content:e,options:t}),st.forEach(n=>{n.buildToast(e,t)}))}function c5(e){var t;(t=st.get(e.containerId||1))==null||t.setToggle(e.id,e.fn)}function CS(e,t){st.forEach(n=>{(t==null||!(t!=null&&t.containerId)||(t==null?void 0:t.containerId)===n.id)&&n.toggle(e,t==null?void 0:t.id)})}function d5(e){let t=e.containerId||1;return{subscribe(n){let r=i5(t,e,o5);st.set(t,r);let i=r.observe(n);return a5(),()=>{i(),st.delete(t)}},setProps(n){var r;(r=st.get(t))==null||r.setProps(n)},getSnapshot(){var n;return(n=st.get(t))==null?void 0:n.getSnapshot()}}}function f5(e){return pp.add(e),()=>{pp.delete(e)}}function p5(e){return e&&(Zr(e.toastId)||La(e.toastId))?e.toastId:wS()}function Aa(e,t){return ES(e,t),t.toastId}function ic(e,t){return{...t,type:t&&t.type||e,toastId:p5(t)}}function oc(e){return(t,n)=>Aa(t,ic(e,n))}function te(e,t){return Aa(e,ic("default",t))}te.loading=(e,t)=>Aa(e,ic("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...t}));function h5(e,{pending:t,error:n,success:r},i){let o;t&&(o=Zr(t)?te.loading(t,i):te.loading(t.render,{...i,...t}));let a={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},l=(u,c,d)=>{if(c==null){te.dismiss(o);return}let m={type:u,...a,...i,data:d},h=Zr(c)?{render:c}:c;return o?te.update(o,{...m,...h}):te(h.render,{...m,...h}),d},s=Gn(e)?e():e;return s.then(u=>l("success",r,u)).catch(u=>l("error",n,u)),s}te.promise=h5;te.success=oc("success");te.info=oc("info");te.error=oc("error");te.warning=oc("warning");te.warn=te.warning;te.dark=(e,t)=>Aa(e,ic("default",{theme:"dark",...t}));function m5(e){l5(e)}te.dismiss=m5;te.clearWaitingQueue=u5;te.isActive=_S;te.update=(e,t={})=>{let n=s5(e,t);if(n){let{props:r,content:i}=n,o={delay:100,...r,...t,toastId:t.toastId||e,updateId:wS()};o.toastId!==e&&(o.staleId=e);let a=o.render||i;delete o.render,Aa(a,o)}};te.done=e=>{te.update(e,{progress:1})};te.onChange=f5;te.play=e=>CS(!0,e);te.pause=e=>CS(!1,e);function g5(e){var t;let{subscribe:n,getSnapshot:r,setProps:i}=b.useRef(d5(e)).current;i(e);let o=(t=b.useSyncExternalStore(n,r,r))==null?void 0:t.slice();function a(l){if(!o)return[];let s=new Map;return e.newestOnTop&&o.reverse(),o.forEach(u=>{let{position:c}=u.props;s.has(c)||s.set(c,[]),s.get(c).push(u)}),Array.from(s,u=>l(u[0],u[1]))}return{getToastToRender:a,isToastActive:_S,count:o==null?void 0:o.length}}function v5(e){let[t,n]=b.useState(!1),[r,i]=b.useState(!1),o=b.useRef(null),a=b.useRef({start:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,didMove:!1}).current,{autoClose:l,pauseOnHover:s,closeToast:u,onClick:c,closeOnClick:d}=e;c5({id:e.toastId,containerId:e.containerId,fn:n}),b.useEffect(()=>{if(e.pauseOnFocusLoss)return m(),()=>{h()}},[e.pauseOnFocusLoss]);function m(){document.hasFocus()||f(),window.addEventListener("focus",S),window.addEventListener("blur",f)}function h(){window.removeEventListener("focus",S),window.removeEventListener("blur",f)}function g(_){if(e.draggable===!0||e.draggable===_.pointerType){p();let E=o.current;a.canCloseOnClick=!0,a.canDrag=!0,E.style.transition="none",e.draggableDirection==="x"?(a.start=_.clientX,a.removalDistance=E.offsetWidth*(e.draggablePercent/100)):(a.start=_.clientY,a.removalDistance=E.offsetHeight*(e.draggablePercent===80?e.draggablePercent*1.5:e.draggablePercent)/100)}}function x(_){let{top:E,bottom:M,left:I,right:$}=o.current.getBoundingClientRect();_.nativeEvent.type!=="touchend"&&e.pauseOnHover&&_.clientX>=I&&_.clientX<=$&&_.clientY>=E&&_.clientY<=M?f():S()}function S(){n(!0)}function f(){n(!1)}function p(){a.didMove=!1,document.addEventListener("pointermove",w),document.addEventListener("pointerup",C)}function v(){document.removeEventListener("pointermove",w),document.removeEventListener("pointerup",C)}function w(_){let E=o.current;if(a.canDrag&&E){a.didMove=!0,t&&f(),e.draggableDirection==="x"?a.delta=_.clientX-a.start:a.delta=_.clientY-a.start,a.start!==_.clientX&&(a.canCloseOnClick=!1);let M=e.draggableDirection==="x"?`${a.delta}px, var(--y)`:`0, calc(${a.delta}px + var(--y))`;E.style.transform=`translate3d(${M},0)`,E.style.opacity=`${1-Math.abs(a.delta/a.removalDistance)}`}}function C(){v();let _=o.current;if(a.canDrag&&a.didMove&&_){if(a.canDrag=!1,Math.abs(a.delta)>a.removalDistance){i(!0),e.closeToast(!0),e.collapseAll();return}_.style.transition="transform 0.2s, opacity 0.2s",_.style.removeProperty("transform"),_.style.removeProperty("opacity")}}let k={onPointerDown:g,onPointerUp:x};return l&&s&&(k.onMouseEnter=f,e.stacked||(k.onMouseLeave=S)),d&&(k.onClick=_=>{c&&c(_),a.canCloseOnClick&&u(!0)}),{playToast:S,pauseToast:f,isRunning:t,preventExitTransition:r,toastRef:o,eventHandlers:k}}var y5=typeof window<"u"?b.useLayoutEffect:b.useEffect,ac=({theme:e,type:t,isLoading:n,...r})=>W.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:e==="colored"?"currentColor":`var(--toastify-icon-color-${t})`,...r});function x5(e){return W.createElement(ac,{...e},W.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))}function b5(e){return W.createElement(ac,{...e},W.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))}function w5(e){return W.createElement(ac,{...e},W.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))}function S5(e){return W.createElement(ac,{...e},W.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))}function _5(){return W.createElement("div",{className:"Toastify__spinner"})}var hp={info:b5,warning:x5,success:w5,error:S5,spinner:_5},E5=e=>e in hp;function C5({theme:e,type:t,isLoading:n,icon:r}){let i=null,o={theme:e,type:t};return r===!1||(Gn(r)?i=r({...o,isLoading:n}):b.isValidElement(r)?i=b.cloneElement(r,o):n?i=hp.spinner():E5(t)&&(i=hp[t](o))),i}var k5=e=>{let{isRunning:t,preventExitTransition:n,toastRef:r,eventHandlers:i,playToast:o}=v5(e),{closeButton:a,children:l,autoClose:s,onClick:u,type:c,hideProgressBar:d,closeToast:m,transition:h,position:g,className:x,style:S,progressClassName:f,updateId:p,role:v,progress:w,rtl:C,toastId:k,deleteToast:_,isIn:E,isLoading:M,closeOnClick:I,theme:$,ariaLabel:P}=e,j=Br("Toastify__toast",`Toastify__toast-theme--${$}`,`Toastify__toast--${c}`,{"Toastify__toast--rtl":C},{"Toastify__toast--close-on-click":I}),L=Gn(x)?x({rtl:C,position:g,type:c,defaultClassName:j}):Br(j,x),R=C5(e),F=!!w||!s,A={closeToast:m,type:c,theme:$},O=null;return a===!1||(Gn(a)?O=a(A):b.isValidElement(a)?O=b.cloneElement(a,A):O=t5(A)),W.createElement(h,{isIn:E,done:_,position:g,preventExitTransition:n,nodeRef:r,playToast:o},W.createElement("div",{id:k,tabIndex:0,onClick:u,"data-in":E,className:L,...i,style:S,ref:r,...E&&{role:v,"aria-label":P}},R!=null&&W.createElement("div",{className:Br("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!M})},R),bS(l,e,!t),O,!e.customProgressBar&&W.createElement(n5,{...p&&!F?{key:`p-${p}`}:{},rtl:C,theme:$,delay:s,isRunning:t,isIn:E,closeToast:m,hide:d,type:c,className:f,controlledProgress:F,progress:w||0})))},T5=(e,t=!1)=>({enter:`Toastify--animate Toastify__${e}-enter`,exit:`Toastify--animate Toastify__${e}-exit`,appendPosition:t}),O5=e5(T5("bounce",!0)),P5={position:"top-right",transition:O5,autoClose:5e3,closeButton:!0,pauseOnHover:!0,pauseOnFocusLoss:!0,draggable:"touch",draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light","aria-label":"Notifications Alt+T",hotKeys:e=>e.altKey&&e.code==="KeyT"};function Fa(e){let t={...P5,...e},n=e.stacked,[r,i]=b.useState(!0),o=b.useRef(null),{getToastToRender:a,isToastActive:l,count:s}=g5(t),{className:u,style:c,rtl:d,containerId:m,hotKeys:h}=t;function g(S){let f=Br("Toastify__toast-container",`Toastify__toast-container--${S}`,{"Toastify__toast-container--rtl":d});return Gn(u)?u({position:S,rtl:d,defaultClassName:f}):Br(f,dp(u))}function x(){n&&(i(!0),te.play())}return y5(()=>{var S;if(n){let f=o.current.querySelectorAll('[data-in="true"]'),p=12,v=(S=t.position)==null?void 0:S.includes("top"),w=0,C=0;Array.from(f).reverse().forEach((k,_)=>{let E=k;E.classList.add("Toastify__toast--stacked"),_>0&&(E.dataset.collapsed=`${r}`),E.dataset.pos||(E.dataset.pos=v?"top":"bot");let M=w*(r?.2:1)+(r?0:p*_);E.style.setProperty("--y",`${v?M:M*-1}px`),E.style.setProperty("--g",`${p}`),E.style.setProperty("--s",`${1-(r?C:0)}`),w+=E.offsetHeight,C+=.025})}},[r,s,n]),b.useEffect(()=>{function S(f){var p;let v=o.current;h(f)&&((p=v.querySelector('[tabIndex="0"]'))==null||p.focus(),i(!1),te.pause()),f.key==="Escape"&&(document.activeElement===v||v!=null&&v.contains(document.activeElement))&&(i(!0),te.play())}return document.addEventListener("keydown",S),()=>{document.removeEventListener("keydown",S)}},[h]),W.createElement("section",{ref:o,className:"Toastify",id:m,onMouseEnter:()=>{n&&(i(!1),te.pause())},onMouseLeave:x,"aria-live":"polite","aria-atomic":"false","aria-relevant":"additions text","aria-label":t["aria-label"]},a((S,f)=>{let p=f.length?{...c}:{...c,pointerEvents:"none"};return W.createElement("div",{tabIndex:-1,className:g(S),"data-stacked":n,style:p,key:`c-${S}`},f.map(({content:v,props:w})=>W.createElement(k5,{...w,stacked:n,collapseAll:x,isIn:l(w.toastId,w.containerId),key:`t-${w.key}`},v)))}))}const Yn="/Didiv/assets/nofoto-2f8d9d99.png",M5=()=>{const e=to(),t=[...Jh].sort(()=>Math.random()-.5).slice(0,3),n=r=>{e(rc({...r,quantity:1})),te.success(`${r.name} додано в кошик!`)};return y.jsxs(UI,{children:[y.jsx(Fa,{}),y.jsx(HI,{children:"Нові товари"}),y.jsxs(WI,{children:[t.map(r=>{var i;return y.jsxs(GI,{children:[y.jsxs(YI,{to:`/product/${r.id}`,children:[y.jsx(XI,{children:"Новинка"}),y.jsx("img",{src:((i=r.image)==null?void 0:i[0])||Yn,alt:r.name,onError:o=>{o.currentTarget.onerror=null,o.currentTarget.src=Yn}}),y.jsx("div",{className:"overlay"})]}),y.jsxs(qI,{children:[y.jsx(KI,{children:r.name}),y.jsxs(ZI,{children:[y.jsxs(QI,{children:[r.price," грн"]}),y.jsx(JI,{onClick:()=>n(r),children:y.jsx(Su,{size:22})})]})]})]},r.id)}),y.jsx(ej,{to:"/catalog/new",children:y.jsxs(tj,{children:[y.jsx("p",{children:"Усі новинки"}),y.jsx(nj,{children:y.jsx(yb,{size:24})})]})})]})]})},I5=T.div`
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
`,kS=()=>y.jsxs(I5,{children:[y.jsxs(vd,{children:[y.jsx(yd,{children:"3000+"}),y.jsx(xd,{children:"Перевірених деталей"})]}),y.jsxs(vd,{children:[y.jsx(yd,{children:"6 років"}),y.jsx(xd,{children:"Досвіду на ринку"})]}),y.jsxs(vd,{children:[y.jsx(yd,{children:"100%"}),y.jsx(xd,{children:"Контроль якості"})]})]}),j5=Fe.div`
  background:var(--background-color);
`,$5=Fe.div`
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
`;const D5=()=>y.jsx(j5,{children:y.jsxs($5,{children:[y.jsx(BI,{}),y.jsx(kS,{}),y.jsx(M5,{}),y.jsx(o4,{})]})}),R5=T.div`
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
`,L5=T.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  justify-content: flex-start;
  margin-bottom: 16px;

  @media (min-width: 768px) {
    display: none;
  }
`,A5=T.button`
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
`,F5=T.svg`
  width: 20px;
  height: 20px;
  fill: var(--white-color);
`,N5=T.button`
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
`,z5=T.svg`
  width: 20px;
  height: 20px;
  fill: var(--white-color);
`,V5=T.div`
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
`,B5=T.div`
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
`;const U5=T.div`
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
`;const H5=T.div`
  padding: 20px;
  border-top: 1px solid #eee;
  background: white;
`,W5=T.button`
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
`,G5=T.aside`

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
`,Y5=T.h3`
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
`;const X5=T.div`
  border-bottom: 1px solid #eee;
  padding: 12px;
  margin-bottom: 12px;

  &:last-child {
    border-bottom: none;
  }
`,q5=T.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  padding: 8px 0;
  
  &:hover p {
    color: #85683d;
  }
`,K5=T.p`
  font-weight: 600;
  font-size: 16px;
  margin: 0;
  color: #222;
  transition: color 0.2s;
`,Z5=T.span`
  border: solid #555;
  border-width: 0 2px 2px 0;
  display: inline-block;
  padding: 3px;
  transform: ${e=>e.isOpen?"rotate(-135deg)":"rotate(45deg)"};
  transition: transform 0.3s ease;
`,Q5=T.div`
  max-height: ${e=>e.isOpen?"500px":"0"};
  overflow: hidden;
  transition: max-height 0.3s ease-in-out, opacity 0.3s;
  opacity: ${e=>e.isOpen?"1":"0"};
  padding: ${e=>e.isOpen?"12px":"0"};
`,J5=T.label`
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
`,e$=T.span`
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
`,OS={bikes:[{type:"checkbox",name:"brand",label:"Бренд"},{type:"checkbox",name:"wheelSize",label:"Розмір колеса"},{type:"range",name:"price",label:"Ціна"}],saddles:[{type:"checkbox",name:"gender",label:"Тип (чол/жін)"},{type:"checkbox",name:"material",label:"Матеріал"},{type:"range",name:"price",label:"Ціна"}],handlebars:[{type:"checkbox",name:"width",label:"Ширина"},{type:"checkbox",name:"material",label:"Матеріал"}],wheels:[{type:"checkbox",name:"brand",label:"Бренд",options:["Shimano","Campagnolo","SRAM"]},{type:"checkbox",name:"size",label:"Розмір колеса",options:["26`","27.5`","29`"]},{type:"range",name:"price",label:"Ціна, грн",min:100,max:1e4},{type:"range",name:"weight",label:"Вага, грам",min:1,max:1e5}]};var gp={},om={},am={},oo={};Object.defineProperty(oo,"__esModule",{value:!0});oo.Direction=void 0;var uv;(function(e){e.Right="to right",e.Left="to left",e.Down="to bottom",e.Up="to top"})(uv||(oo.Direction=uv={}));(function(e){var t=J&&J.__spreadArray||function(P,j,L){if(L||arguments.length===2)for(var R=0,F=j.length,A;R<F;R++)(A||!(R in j))&&(A||(A=Array.prototype.slice.call(j,0,R)),A[R]=j[R]);return P.concat(A||Array.prototype.slice.call(j))};Object.defineProperty(e,"__esModule",{value:!0}),e.isIOS=e.useThumbOverlap=e.assertUnreachable=e.voidFn=e.getTrackBackground=e.replaceAt=e.schd=e.translate=e.getClosestThumbIndex=e.translateThumbs=e.getPaddingAndBorder=e.getMargin=e.checkInitialOverlap=e.checkValuesAgainstBoundaries=e.checkBoundaries=e.isVertical=e.relativeValue=e.normalizeValue=e.isStepDivisible=e.isTouchEvent=e.getStepDecimals=void 0;var n=b,r=oo,i=function(P){var j=P.toString().split(".")[1];return j?j.length:0};e.getStepDecimals=i;function o(P){return P.touches&&P.touches.length||P.changedTouches&&P.changedTouches.length}e.isTouchEvent=o;function a(P,j,L){var R=(j-P)/L,F=8,A=Number(R.toFixed(F));return parseInt(A.toString(),10)===A}e.isStepDivisible=a;function l(P,j,L,R,F,A,O){var D=1e11;if(P=Math.round(P*D)/D,!A){var N=O[j-1],B=O[j+1];if(N&&N>P)return N;if(B&&B<P)return B}if(P>R)return R;if(P<L)return L;var z=Math.floor(P*D-L*D)%Math.floor(F*D),G=Math.floor(P*D-Math.abs(z)),Q=z===0?P:G/D,Z=Math.abs(z/D)<F/2?Q:Q+F,K=(0,e.getStepDecimals)(F);return parseFloat(Z.toFixed(K))}e.normalizeValue=l;function s(P,j,L){return(P-j)/(L-j)}e.relativeValue=s;function u(P){return P===r.Direction.Up||P===r.Direction.Down}e.isVertical=u;function c(P,j,L){if(j>=L)throw new RangeError("min (".concat(j,") is equal/bigger than max (").concat(L,")"));if(P<j)throw new RangeError("value (".concat(P,") is smaller than min (").concat(j,")"));if(P>L)throw new RangeError("value (".concat(P,") is bigger than max (").concat(L,")"))}e.checkBoundaries=c;function d(P,j,L){return P<j?j:P>L?L:P}e.checkValuesAgainstBoundaries=d;function m(P){if(!(P.length<2)&&!P.slice(1).every(function(j,L){return P[L]<=j}))throw new RangeError("values={[".concat(P,"]} needs to be sorted when allowOverlap={false}"))}e.checkInitialOverlap=m;function h(P){var j=window.getComputedStyle(P);return{top:parseInt(j["margin-top"],10),bottom:parseInt(j["margin-bottom"],10),left:parseInt(j["margin-left"],10),right:parseInt(j["margin-right"],10)}}e.getMargin=h;function g(P){var j=window.getComputedStyle(P);return{top:parseInt(j["padding-top"],10)+parseInt(j["border-top-width"],10),bottom:parseInt(j["padding-bottom"],10)+parseInt(j["border-bottom-width"],10),left:parseInt(j["padding-left"],10)+parseInt(j["border-left-width"],10),right:parseInt(j["padding-right"],10)+parseInt(j["border-right-width"],10)}}e.getPaddingAndBorder=g;function x(P,j,L){var R=L?-1:1;P.forEach(function(F,A){return f(F,R*j[A].x,j[A].y)})}e.translateThumbs=x;function S(P,j,L,R){for(var F=0,A=I(P[0],j,L,R),O=1;O<P.length;O++){var D=I(P[O],j,L,R);D<A&&(A=D,F=O)}return F}e.getClosestThumbIndex=S;function f(P,j,L){P.style.transform="translate(".concat(j,"px, ").concat(L,"px)")}e.translate=f;var p=function(P){var j=[],L=null,R=function(){for(var F=[],A=0;A<arguments.length;A++)F[A]=arguments[A];j=F,!L&&(L=requestAnimationFrame(function(){L=null,P.apply(void 0,j)}))};return R};e.schd=p;function v(P,j,L){var R=P.slice(0);return R[j]=L,R}e.replaceAt=v;function w(P){var j=P.values,L=P.colors,R=P.min,F=P.max,A=P.direction,O=A===void 0?r.Direction.Right:A,D=P.rtl,N=D===void 0?!1:D;N&&O===r.Direction.Right?O=r.Direction.Left:N&&r.Direction.Left&&(O=r.Direction.Right);var B=j.slice(0).sort(function(G,Q){return G-Q}).map(function(G){return(G-R)/(F-R)*100}),z=B.reduce(function(G,Q,Z){return"".concat(G,", ").concat(L[Z]," ").concat(Q,"%, ").concat(L[Z+1]," ").concat(Q,"%")},"");return"linear-gradient(".concat(O,", ").concat(L[0]," 0%").concat(z,", ").concat(L[L.length-1]," 100%)")}e.getTrackBackground=w;function C(){}e.voidFn=C;function k(P){throw new Error("Didn't expect to get here")}e.assertUnreachable=k;var _=function(P,j,L,R,F){F===void 0&&(F=function(O){return O});var A=Math.ceil(t([P],Array.from(P.children),!0).reduce(function(O,D){var N=Math.ceil(D.getBoundingClientRect().width);if(D.innerText&&D.innerText.includes(L)&&D.childElementCount===0){var B=D.cloneNode(!0);B.innerHTML=F(j.toFixed(R)),B.style.visibility="hidden",document.body.appendChild(B),N=Math.ceil(B.getBoundingClientRect().width),document.body.removeChild(B)}return N>O?N:O},P.getBoundingClientRect().width));return A},E=function(P,j,L,R,F,A,O){O===void 0&&(O=function(B){return B});var D=[],N=function(B){var z=_(L[B],R[B],F,A,O),G=j[B].x;j.forEach(function(Q,Z){var K=Q.x,re=_(L[Z],R[Z],F,A,O);B!==Z&&(G>=K&&G<=K+re||G+z>=K&&G+z<=K+re)&&(D.includes(Z)||(D.push(B),D.push(Z),D=t(t([],D,!0),[B,Z],!1),N(Z)))})};return N(P),Array.from(new Set(D.sort()))},M=function(P,j,L,R,F,A){R===void 0&&(R=.1),F===void 0&&(F=" - "),A===void 0&&(A=function(Z){return Z});var O=(0,e.getStepDecimals)(R),D=(0,n.useState)({}),N=D[0],B=D[1],z=(0,n.useState)(A(j[L].toFixed(O))),G=z[0],Q=z[1];return(0,n.useEffect)(function(){if(P){var Z=P.getThumbs();if(Z.length<1)return;var K={},re=P.getOffsets(),we=E(L,re,Z,j,F,O,A),qe=A(j[L].toFixed(O));if(we.length){var Oe=we.reduce(function(pt,so,za,lo){return pt.length?t(t([],pt,!0),[re[lo[za]].x],!1):[re[lo[za]].x]},[]);if(Math.min.apply(Math,Oe)===re[L].x){var Xt=[];we.forEach(function(pt){Xt.push(j[pt].toFixed(O))}),qe=Array.from(new Set(Xt.sort(function(pt,so){return parseFloat(pt)-parseFloat(so)}))).map(A).join(F);var Ft=Math.min.apply(Math,Oe),kt=Math.max.apply(Math,Oe),ni=Z[we[Oe.indexOf(kt)]].getBoundingClientRect().width;K.left="".concat(Math.abs(Ft-(kt+ni))/2,"px"),K.transform="translate(-50%, 0)"}else K.visibility="hidden"}Q(qe),B(K)}},[P,j]),[G,N]};e.useThumbOverlap=M;function I(P,j,L,R){var F=P.getBoundingClientRect(),A=F.left,O=F.top,D=F.width,N=F.height;return u(R)?Math.abs(L-(O+N/2)):Math.abs(j-(A+D/2))}var $=function(){var P,j=((P=navigator.userAgentData)===null||P===void 0?void 0:P.platform)||navigator.platform;return["iPad Simulator","iPhone Simulator","iPod Simulator","iPad","iPhone","iPod"].includes(j)||navigator.userAgent.includes("Mac")&&"ontouchend"in document};e.isIOS=$})(am);var t$=J&&J.__extends||function(){var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,i){r.__proto__=i}||function(r,i){for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(r[o]=i[o])},e(t,n)};return function(t,n){if(typeof n!="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");e(t,n);function r(){this.constructor=t}t.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}}(),n$=J&&J.__createBinding||(Object.create?function(e,t,n,r){r===void 0&&(r=n);var i=Object.getOwnPropertyDescriptor(t,n);(!i||("get"in i?!t.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,i)}:function(e,t,n,r){r===void 0&&(r=n),e[r]=t[n]}),r$=J&&J.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i$=J&&J.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)n!=="default"&&Object.prototype.hasOwnProperty.call(e,n)&&n$(t,e,n);return r$(t,e),t},cv=J&&J.__spreadArray||function(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,o;r<i;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))};Object.defineProperty(om,"__esModule",{value:!0});var ms=i$(b),ie=am,De=oo,o$=["ArrowRight","ArrowUp","k","PageUp"],a$=["ArrowLeft","ArrowDown","j","PageDown"],s$=function(e){t$(t,e);function t(n){var r=e.call(this,n)||this;if(r.trackRef=ms.createRef(),r.thumbRefs=[],r.state={draggedTrackPos:[-1,-1],draggedThumbIndex:-1,thumbZIndexes:new Array(r.props.values.length).fill(0).map(function(i,o){return o}),isChanged:!1,markOffsets:[]},r.getOffsets=function(){var i=r.props,o=i.direction,a=i.values,l=i.min,s=i.max,u=r.trackRef.current;if(!u)return console.warn("No track element found."),[];var c=u.getBoundingClientRect(),d=(0,ie.getPaddingAndBorder)(u);return r.getThumbs().map(function(m,h){var g={x:0,y:0},x=m.getBoundingClientRect(),S=(0,ie.getMargin)(m);switch(o){case De.Direction.Right:return g.x=(S.left+d.left)*-1,g.y=((x.height-c.height)/2+d.top)*-1,g.x+=c.width*(0,ie.relativeValue)(a[h],l,s)-x.width/2,g;case De.Direction.Left:return g.x=(S.right+d.right)*-1,g.y=((x.height-c.height)/2+d.top)*-1,g.x+=c.width-c.width*(0,ie.relativeValue)(a[h],l,s)-x.width/2,g;case De.Direction.Up:return g.x=((x.width-c.width)/2+S.left+d.left)*-1,g.y=-d.left,g.y+=c.height-c.height*(0,ie.relativeValue)(a[h],l,s)-x.height/2,g;case De.Direction.Down:return g.x=((x.width-c.width)/2+S.left+d.left)*-1,g.y=-d.left,g.y+=c.height*(0,ie.relativeValue)(a[h],l,s)-x.height/2,g;default:return(0,ie.assertUnreachable)(o)}})},r.getThumbs=function(){return r.trackRef&&r.trackRef.current?Array.from(r.trackRef.current.children).filter(function(i){return i.hasAttribute("aria-valuenow")}):(console.warn("No thumbs found in the track container. Did you forget to pass & spread the `props` param in renderTrack?"),[])},r.getTargetIndex=function(i){return r.getThumbs().findIndex(function(o){return o===i.target||o.contains(i.target)})},r.addTouchEvents=function(i){document.addEventListener("touchmove",r.schdOnTouchMove,{passive:!1}),document.addEventListener("touchend",r.schdOnEnd,{passive:!1}),document.addEventListener("touchcancel",r.schdOnEnd,{passive:!1})},r.addMouseEvents=function(i){document.addEventListener("mousemove",r.schdOnMouseMove),document.addEventListener("mouseup",r.schdOnEnd)},r.onMouseDownTrack=function(i){var o;if(!(i.button!==0||(0,ie.isIOS)()))if(i.persist(),i.preventDefault(),r.addMouseEvents(i.nativeEvent),r.props.values.length>1&&r.props.draggableTrack){if(r.thumbRefs.some(function(l){var s;return(s=l.current)===null||s===void 0?void 0:s.contains(i.target)}))return;r.setState({draggedTrackPos:[i.clientX,i.clientY]},function(){return r.onMove(i.clientX,i.clientY)})}else{var a=(0,ie.getClosestThumbIndex)(r.thumbRefs.map(function(l){return l.current}),i.clientX,i.clientY,r.props.direction);(o=r.thumbRefs[a].current)===null||o===void 0||o.focus(),r.setState({draggedThumbIndex:a},function(){return r.onMove(i.clientX,i.clientY)})}},r.onResize=function(){(0,ie.translateThumbs)(r.getThumbs(),r.getOffsets(),r.props.rtl),r.calculateMarkOffsets()},r.onTouchStartTrack=function(i){var o;if(i.persist(),r.addTouchEvents(i.nativeEvent),r.props.values.length>1&&r.props.draggableTrack){if(r.thumbRefs.some(function(l){var s;return(s=l.current)===null||s===void 0?void 0:s.contains(i.target)}))return;r.setState({draggedTrackPos:[i.touches[0].clientX,i.touches[0].clientY]},function(){return r.onMove(i.touches[0].clientX,i.touches[0].clientY)})}else{var a=(0,ie.getClosestThumbIndex)(r.thumbRefs.map(function(l){return l.current}),i.touches[0].clientX,i.touches[0].clientY,r.props.direction);(o=r.thumbRefs[a].current)===null||o===void 0||o.focus(),r.setState({draggedThumbIndex:a},function(){return r.onMove(i.touches[0].clientX,i.touches[0].clientY)})}},r.onMouseOrTouchStart=function(i){if(!r.props.disabled){var o=(0,ie.isTouchEvent)(i);if(!(!o&&i.button!==0)){var a=r.getTargetIndex(i);a!==-1&&(o?r.addTouchEvents(i):r.addMouseEvents(i),r.setState({draggedThumbIndex:a,thumbZIndexes:r.state.thumbZIndexes.map(function(l,s){return s===a?Math.max.apply(Math,r.state.thumbZIndexes):l<=r.state.thumbZIndexes[a]?l:l-1})}))}}},r.onMouseMove=function(i){i.preventDefault(),r.onMove(i.clientX,i.clientY)},r.onTouchMove=function(i){i.preventDefault(),r.onMove(i.touches[0].clientX,i.touches[0].clientY)},r.onKeyDown=function(i){var o=r.props,a=o.values,l=o.onChange,s=o.step,u=o.rtl,c=o.direction,d=r.state.isChanged,m=r.getTargetIndex(i.nativeEvent),h=u||c===De.Direction.Left||c===De.Direction.Down?-1:1;m!==-1&&(o$.includes(i.key)?(i.preventDefault(),r.setState({draggedThumbIndex:m,isChanged:!0}),l((0,ie.replaceAt)(a,m,r.normalizeValue(a[m]+h*(i.key==="PageUp"?s*10:s),m)))):a$.includes(i.key)?(i.preventDefault(),r.setState({draggedThumbIndex:m,isChanged:!0}),l((0,ie.replaceAt)(a,m,r.normalizeValue(a[m]-h*(i.key==="PageDown"?s*10:s),m)))):i.key==="Tab"?r.setState({draggedThumbIndex:-1},function(){d&&r.fireOnFinalChange()}):d&&r.fireOnFinalChange())},r.onKeyUp=function(i){var o=r.state.isChanged;r.setState({draggedThumbIndex:-1},function(){o&&r.fireOnFinalChange()})},r.onMove=function(i,o){var a=r.state,l=a.draggedThumbIndex,s=a.draggedTrackPos,u=r.props,c=u.direction,d=u.min,m=u.max,h=u.onChange,g=u.values,x=u.step,S=u.rtl;if(l===-1&&s[0]===-1&&s[1]===-1)return null;var f=r.trackRef.current;if(!f)return null;var p=f.getBoundingClientRect(),v=(0,ie.isVertical)(c)?p.height:p.width;if(s[0]!==-1&&s[1]!==-1){var w=i-s[0],C=o-s[1],k=0;switch(c){case De.Direction.Right:case De.Direction.Left:k=w/v*(m-d);break;case De.Direction.Down:case De.Direction.Up:k=C/v*(m-d);break;default:(0,ie.assertUnreachable)(c)}if(S&&(k*=-1),Math.abs(k)>=x/2){for(var _=0;_<r.thumbRefs.length;_++){if(g[_]===m&&Math.sign(k)===1||g[_]===d&&Math.sign(k)===-1)return;var E=g[_]+k;E>m?k=m-g[_]:E<d&&(k=d-g[_])}for(var M=g.slice(0),_=0;_<r.thumbRefs.length;_++)M=(0,ie.replaceAt)(M,_,r.normalizeValue(g[_]+k,_));r.setState({draggedTrackPos:[i,o]}),h(M)}}else{var I=0;switch(c){case De.Direction.Right:I=(i-p.left)/v*(m-d)+d;break;case De.Direction.Left:I=(v-(i-p.left))/v*(m-d)+d;break;case De.Direction.Down:I=(o-p.top)/v*(m-d)+d;break;case De.Direction.Up:I=(v-(o-p.top))/v*(m-d)+d;break;default:(0,ie.assertUnreachable)(c)}S&&(I=m+d-I),Math.abs(g[l]-I)>=x/2&&h((0,ie.replaceAt)(g,l,r.normalizeValue(I,l)))}},r.normalizeValue=function(i,o){var a=r.props,l=a.min,s=a.max,u=a.step,c=a.allowOverlap,d=a.values;return(0,ie.normalizeValue)(i,o,l,s,u,c,d)},r.onEnd=function(i){if(i.preventDefault(),document.removeEventListener("mousemove",r.schdOnMouseMove),document.removeEventListener("touchmove",r.schdOnTouchMove),document.removeEventListener("mouseup",r.schdOnEnd),document.removeEventListener("touchend",r.schdOnEnd),document.removeEventListener("touchcancel",r.schdOnEnd),r.state.draggedThumbIndex===-1&&r.state.draggedTrackPos[0]===-1&&r.state.draggedTrackPos[1]===-1)return null;r.setState({draggedThumbIndex:-1,draggedTrackPos:[-1,-1]},function(){r.fireOnFinalChange()})},r.fireOnFinalChange=function(){r.setState({isChanged:!1});var i=r.props,o=i.onFinalChange,a=i.values;o&&o(a)},r.updateMarkRefs=function(i){if(!i.renderMark){r.numOfMarks=void 0,r.markRefs=void 0;return}r.numOfMarks=(i.max-i.min)/r.props.step,r.markRefs=[];for(var o=0;o<r.numOfMarks+1;o++)r.markRefs[o]=ms.createRef()},r.calculateMarkOffsets=function(){if(!(!r.props.renderMark||!r.trackRef||!r.numOfMarks||!r.markRefs||r.trackRef.current===null)){for(var i=window.getComputedStyle(r.trackRef.current),o=parseInt(i.width,10),a=parseInt(i.height,10),l=parseInt(i.paddingLeft,10),s=parseInt(i.paddingTop,10),u=[],c=0;c<r.numOfMarks+1;c++){var d=9999,m=9999;if(r.markRefs[c].current){var h=r.markRefs[c].current.getBoundingClientRect();d=h.height,m=h.width}r.props.direction===De.Direction.Left||r.props.direction===De.Direction.Right?u.push([Math.round(o/r.numOfMarks*c+l-m/2),-Math.round((d-a)/2)]):u.push([Math.round(a/r.numOfMarks*c+s-d/2),-Math.round((m-o)/2)])}r.setState({markOffsets:u})}},n.step===0)throw new Error('"step" property should be a positive number');return r.schdOnMouseMove=(0,ie.schd)(r.onMouseMove),r.schdOnTouchMove=(0,ie.schd)(r.onTouchMove),r.schdOnEnd=(0,ie.schd)(r.onEnd),r.thumbRefs=n.values.map(function(){return ms.createRef()}),r.updateMarkRefs(n),r}return t.prototype.componentDidMount=function(){var n=this,r=this.props,i=r.values,o=r.min,a=r.step;this.resizeObserver=window.ResizeObserver?new window.ResizeObserver(this.onResize):{observe:function(){return window.addEventListener("resize",n.onResize)},unobserve:function(){return window.removeEventListener("resize",n.onResize)}},document.addEventListener("touchstart",this.onMouseOrTouchStart,{passive:!1}),document.addEventListener("mousedown",this.onMouseOrTouchStart,{passive:!1}),!this.props.allowOverlap&&(0,ie.checkInitialOverlap)(this.props.values),this.props.values.forEach(function(l){return(0,ie.checkBoundaries)(l,n.props.min,n.props.max)}),this.resizeObserver.observe(this.trackRef.current),(0,ie.translateThumbs)(this.getThumbs(),this.getOffsets(),this.props.rtl),this.calculateMarkOffsets(),i.forEach(function(l){(0,ie.isStepDivisible)(o,l,a)||console.warn("The `values` property is in conflict with the current `step`, `min`, and `max` properties. Please provide values that are accessible using the min, max, and step values.")})},t.prototype.componentDidUpdate=function(n,r){var i=this.props,o=i.max,a=i.min,l=i.step,s=i.values,u=i.rtl;(n.max!==o||n.min!==a||n.step!==l)&&this.updateMarkRefs(this.props),(0,ie.translateThumbs)(this.getThumbs(),this.getOffsets(),u),(n.max!==o||n.min!==a||n.step!==l||r.markOffsets.length!==this.state.markOffsets.length)&&(this.calculateMarkOffsets(),s.forEach(function(c){(0,ie.isStepDivisible)(a,c,l)||console.warn("The `values` property is in conflict with the current `step`, `min`, and `max` properties. Please provide values that are accessible using the min, max, and step values.")}))},t.prototype.componentWillUnmount=function(){var n={passive:!1};document.removeEventListener("mousedown",this.onMouseOrTouchStart,n),document.removeEventListener("mousemove",this.schdOnMouseMove),document.removeEventListener("touchmove",this.schdOnTouchMove),document.removeEventListener("touchstart",this.onMouseOrTouchStart),document.removeEventListener("mouseup",this.schdOnEnd),document.removeEventListener("touchend",this.schdOnEnd),this.resizeObserver.unobserve(this.trackRef.current)},t.prototype.render=function(){var n=this,r=this.props,i=r.label,o=r.labelledBy,a=r.renderTrack,l=r.renderThumb,s=r.renderMark,u=s===void 0?function(){return null}:s,c=r.values,d=r.min,m=r.max,h=r.allowOverlap,g=r.disabled,x=this.state,S=x.draggedThumbIndex,f=x.thumbZIndexes,p=x.markOffsets;return a({props:{style:{transform:"scale(1)",cursor:S>-1?"grabbing":this.props.draggableTrack?(0,ie.isVertical)(this.props.direction)?"ns-resize":"ew-resize":c.length===1&&!g?"pointer":"inherit"},onMouseDown:g?ie.voidFn:this.onMouseDownTrack,onTouchStart:g?ie.voidFn:this.onTouchStartTrack,ref:this.trackRef},isDragged:this.state.draggedThumbIndex>-1,disabled:g,children:cv(cv([],p.map(function(v,w,C){return u({props:{style:n.props.direction===De.Direction.Left||n.props.direction===De.Direction.Right?{position:"absolute",left:"".concat(v[0],"px"),marginTop:"".concat(v[1],"px")}:{position:"absolute",top:"".concat(v[0],"px"),marginLeft:"".concat(v[1],"px")},key:"mark".concat(w),ref:n.markRefs[w]},index:w})}),!0),c.map(function(v,w){var C=n.state.draggedThumbIndex===w;return l({index:w,value:v,isDragged:C,props:{style:{position:"absolute",zIndex:f[w],cursor:g?"inherit":C?"grabbing":"grab",userSelect:"none",touchAction:"none",WebkitUserSelect:"none",MozUserSelect:"none",msUserSelect:"none"},key:w,tabIndex:g?void 0:0,"aria-valuemax":h?m:c[w+1]||m,"aria-valuemin":h?d:c[w-1]||d,"aria-valuenow":v,draggable:!1,ref:n.thumbRefs[w],"aria-label":i,"aria-labelledby":o,role:"slider",onKeyDown:g?ie.voidFn:n.onKeyDown,onKeyUp:g?ie.voidFn:n.onKeyUp}})}),!0)})},t.defaultProps={label:"Accessibility label",labelledBy:null,step:1,direction:De.Direction.Right,rtl:!1,disabled:!1,allowOverlap:!1,draggableTrack:!1,min:0,max:100},t}(ms.Component);om.default=s$;(function(e){var t=J&&J.__importDefault||function(o){return o&&o.__esModule?o:{default:o}};Object.defineProperty(e,"__esModule",{value:!0}),e.checkValuesAgainstBoundaries=e.relativeValue=e.useThumbOverlap=e.Direction=e.getTrackBackground=e.Range=void 0;var n=t(om);e.Range=n.default;var r=am;Object.defineProperty(e,"getTrackBackground",{enumerable:!0,get:function(){return r.getTrackBackground}}),Object.defineProperty(e,"useThumbOverlap",{enumerable:!0,get:function(){return r.useThumbOverlap}}),Object.defineProperty(e,"relativeValue",{enumerable:!0,get:function(){return r.relativeValue}}),Object.defineProperty(e,"checkValuesAgainstBoundaries",{enumerable:!0,get:function(){return r.checkValuesAgainstBoundaries}});var i=oo;Object.defineProperty(e,"Direction",{enumerable:!0,get:function(){return i.Direction}})})(gp);const l$=T.div`
  padding: 20px 0;
`,u$=T.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`,dv=T.input`
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
`;const c$=T.div`
  height: 6px;
  width: 100%;
  border-radius: 4px;
  background: ${({background:e})=>e};
`,d$=T.div`
  height: 18px;
  width: 18px;
  border-radius: 50%;
  background: #583d2d;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`,ai=1340,si=100340,Co=100,PS=()=>{const[e,t]=b.useState([ai,si]),n=(i,o)=>{const a=o===""?"":Number(o);t(l=>{const s=[...l];return s[i]=a,s})},r=i=>{t(o=>{const a=[...o];return i===0?((a[0]===""||a[0]<ai)&&(a[0]=ai),a[0]>o[1]-Co&&(a[0]=o[1]-Co)):((a[1]===""||a[1]>si)&&(a[1]=si),a[1]<o[0]+Co&&(a[1]=o[0]+Co)),a})};return y.jsxs(l$,{children:[y.jsxs(u$,{children:[y.jsx(dv,{type:"number",value:e[0],min:ai,max:e[1],onChange:i=>n(0,i.target.value),onBlur:()=>r(0)}),y.jsx(dv,{type:"number",value:e[1],min:e[0],max:si,onChange:i=>n(1,i.target.value),onBlur:()=>r(1)})]}),y.jsx(gp.Range,{values:e,step:Co,min:ai,max:si,onChange:i=>t(i),renderTrack:({props:i,children:o})=>y.jsx(c$,{...i,background:gp.getTrackBackground({values:e,colors:["#ddd","#85683d","#ddd"],min:ai,max:si}),children:o}),renderThumb:({props:i})=>y.jsx(d$,{...i})})]})},f$=({category:e,selectedFilters:t,setSelectedFilters:n})=>{const r=OS[e]||[],[i,o]=b.useState({}),a=c=>{o(d=>({...d,[c]:!d[c]}))},l=(c,d)=>{n(m=>{const h=m[c]||[];return h.includes(d)?{...m,[c]:h.filter(g=>g!==d)}:{...m,[c]:[...h,d]}})},s=Object.values(t).some(c=>Array.isArray(c)&&c.length>0),u=()=>{s&&n({})};return console.log(s),y.jsxs(G5,{children:[y.jsxs(Y5,{children:["Фільтри ",y.jsx(bb,{size:20})]}),(r||[]).map(c=>{var m;const d=!!i[c.name];return y.jsxs(X5,{children:[y.jsxs(q5,{onClick:()=>a(c.name),children:[y.jsx(K5,{children:c.label}),y.jsx(Z5,{isOpen:d})]}),y.jsxs(Q5,{isOpen:d,children:[c.type==="checkbox"&&((m=c.options)==null?void 0:m.map(h=>{var g;return y.jsxs(J5,{children:[y.jsx(mp,{checked:((g=t[c.name])==null?void 0:g.includes(h))||!1,onChange:()=>l(c.name,h)}),y.jsx(e$,{}),h]},h)})),c.type==="range"&&y.jsx(PS,{})]})]},c.name)}),y.jsx(TS,{onClick:u,disabled:!s,children:"Скинути обрані фільтри"})]})},p$=T.aside`
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
`;const h$=T.div`
  border-bottom: 1px solid #eee;
  padding: 12px;
  margin-bottom: 12px;

  &:last-child {
    border-bottom: none;
  }
`,m$=T.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  padding: 8px 0;
  
  &:hover p {
    color: #85683d;
  }
`,g$=T.p`
  font-weight: 600;
  font-size: 16px;
  margin: 0;
  color: #222;
  transition: color 0.2s;
`,v$=T.span`
  border: solid #555;
  border-width: 0 2px 2px 0;
  display: inline-block;
  padding: 3px;
  transform: ${e=>e.isOpen?"rotate(-135deg)":"rotate(45deg)"};
  transition: transform 0.3s ease;
`,y$=T.div`
  max-height: ${e=>e.isOpen?"500px":"0"};
  overflow: hidden;
  transition: max-height 0.3s ease-in-out, opacity 0.3s;
  opacity: ${e=>e.isOpen?"1":"0"};
  padding: ${e=>e.isOpen?"12px":"0"};
`,x$=T.label`
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
`,b$=T.span`
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
`,w$=({category:e,selectedFilters:t,setSelectedFilters:n})=>{const r=OS[e]||[],[i,o]=b.useState({}),a=s=>{o(u=>({...u,[s]:!u[s]}))},l=(s,u)=>{n(c=>{const d=c[s]||[];return d.includes(u)?{...c,[s]:d.filter(m=>m!==u)}:{...c,[s]:[...d,u]}})};return y.jsx(p$,{children:(r||[]).map(s=>{var c;const u=!!i[s.name];return y.jsxs(h$,{children:[y.jsxs(m$,{onClick:()=>a(s.name),children:[y.jsx(g$,{children:s.label}),y.jsx(v$,{isOpen:u})]}),y.jsxs(y$,{isOpen:u,children:[s.type==="checkbox"&&((c=s.options)==null?void 0:c.map(d=>{var m;return y.jsxs(x$,{children:[y.jsx(vp,{checked:((m=t[s.name])==null?void 0:m.includes(d))||!1,onChange:()=>l(s.name,d)}),y.jsx(b$,{}),d]},d)})),s.type==="range"&&y.jsx(PS,{})]})]},s.name)})})};T.div``;const S$=T.div`
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
`,_$=T.div`
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
`,E$=T.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`,C$=T.div`
  padding: 16px;
`,k$=T.p`
font-family: var(--second-font);
font-weight: 500;
  font-size: 18px;
  font-weight: 400;
  margin-bottom: 8px;
`,T$=T.p`
  font-size: 16px;
  color: #555;
`,O$=T.p`
  font-size: 16px;
  color: #555;
`,P$=T.div.attrs({className:"card-buttons"})`
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
`,fv=T.button`
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
`;const MS=vS({name:"favorites",initialState:{items:[]},reducers:{toggleFavorite:(e,t)=>{const n=t.payload;e.items.find(i=>i.id===n.id)?e.items=e.items.filter(i=>i.id!==n.id):e.items.push(n)},clearFavorite:e=>{e.items=[]}}}),{toggleFavorite:sc,clearFavorite:M$}=MS.actions,I$=MS.reducer,j$=({category:e,selectedFilters:t={}})=>{let n=Jh.filter(s=>s.category===e);const r=eu(),i=to(),o=Fn(s=>s.favorites.items),a=(s,u)=>{u.stopPropagation(),i(rc({...s,quantity:1})),te.success(`${s.name} додано в кошик!`)},l=(s,u)=>{u.stopPropagation();const c=o.some(d=>d.id===s.id);i(sc(s)),c?te.warning(`${s.name} видалено з обраного`):te.info(`${s.name} додано в обране`)};return Object.keys(t).forEach(s=>{const u=t[s];Array.isArray(u)&&u.length>0&&(n=n.filter(c=>u.includes(c[s]))),(typeof u=="string"||typeof u=="number")&&s==="price"&&(n=n.filter(c=>c.price<=Number(u)))}),y.jsxs(y.Fragment,{children:[y.jsx(Fa,{autoClose:1500}),y.jsx(S$,{children:n.map(s=>{var c;const u=o.some(d=>d.id===s.id);return y.jsxs(_$,{onClick:()=>r(`/product/${s.id}`),style:{cursor:"pointer"},children:[y.jsx(E$,{src:((c=s.image)==null?void 0:c[0])||Yn,alt:s.name,onError:d=>{d.currentTarget.onerror=null,d.currentTarget.src=Yn}}),y.jsxs(C$,{children:[y.jsx(k$,{children:s.name}),y.jsxs(T$,{children:[s.price," грн"]}),s.weight&&y.jsxs(O$,{children:[s.weight," грам"]})]}),y.jsxs(P$,{children:[y.jsx(fv,{onClick:d=>a(s,d),children:y.jsx(Su,{size:24,color:"black"})}),y.jsx(fv,{onClick:d=>l(s,d),children:y.jsx(xb,{size:24,fill:u?"#ff4d4f":"none",color:u?"#ff4d4f":"#000000"})})]})]},s.id)})})]})},$$=()=>{const[e,t]=b.useState({});console.log(e);const{category:n}=R1(),[r,i]=b.useState(!1);console.log(n);const o=Object.values(e).some(l=>Array.isArray(l)&&l.length>0),a=()=>{o&&t({})};return y.jsxs(R5,{children:[y.jsxs(L5,{children:[y.jsxs(A5,{onClick:()=>i(!0),children:["Фільтр",y.jsx(F5,{children:y.jsx("use",{href:`${un}#icon-filter`})})]}),y.jsxs(N5,{onClick:()=>i(!0),children:["Сортування",y.jsx(z5,{children:y.jsx("use",{href:`${un}#icon-sort`})})]})]}),y.jsx(f$,{category:n,selectedFilters:e,setSelectedFilters:t}),y.jsx(j$,{category:n,selectedFilters:e}),r&&y.jsx(V5,{onClick:()=>i(!1),open:r,children:y.jsxs(B5,{onClick:l=>l.stopPropagation(),open:r,children:[y.jsxs(U5,{children:[y.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[y.jsx(bb,{size:20}),y.jsx("h2",{children:"Фільтри"})]}),y.jsx(Sb,{size:24,onClick:()=>i(!1),style:{cursor:"pointer"}})]}),y.jsx(w$,{category:n,selectedFilters:e,setSelectedFilters:t}),y.jsxs(H5,{children:[y.jsx(TS,{onClick:a,disabled:!o,children:"Скинути обрані фільтри"}),y.jsx(W5,{onClick:()=>i(!1),children:"Показати результати"})]})]})})]})},pv=T.div`
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
`,D$=T.div`
  font-family: var(--main-font);
  font-size: 14px;
  color: #8c8c8c;
  margin-bottom: 15px;

  a {
    text-decoration: none;
    color: inherit;
  }
`,R$=T.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,L$=T.div``;T.div`
  position: absolute;
  top: 10px;
  left: 10px;
  background: #27ae60;
  color: white;
  padding: 5px 15px;
  font-weight: bold;
  z-index: 2;
`;const A$=T.img`
  width: 100%;
  border-radius: 4px;
  background: #f9f9f9;
`,F$=T.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
`,N$=T.img`
  width: 60px;
  height: 60px;
  border: 1px solid #ddd;
  cursor: pointer;
  object-fit: cover;
`,z$=T.div``,V$=T.h1`
  font-size: 28px;
  margin-bottom: 10px;
  color: #333;
  font-family: var(--second-font);
  font-weight: 500;
`,B$=T.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 20px;
`,U$=T.span`
  color: #27ae60;
  font-size: 17px;
`,H$=T.div`
  background: #fdfdfd;
  border: 1px solid #eee;
  padding: 25px;
  border-radius: 8px;
`,W$=T.div`
  font-family: var(--second-font);
  font-weight: 500;
  display: flex;
  align-items: baseline;
  gap: 15px;
  margin-bottom: 20px;
`,G$=T.span`
  font-size: 32px;
  font-weight: 700;
`;T.span`
  text-decoration: line-through;
  color: #999;
  font-size: 18px;
`;const Y$=T.div`
  display: flex;
  gap: 15px;
  margin-bottom: 15px;
  font-family: var(--second-font);
  font-weight: 500;
`,X$=T.div`
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
`,q$=T.button`
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
`;const K$=T.div`
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
`,Z$=T.div`
  margin: 20px 0;
  font-size: 14px;
  color: #444;
`,Q$=T.div`
  font-family: var(--second-font);
  font-weight: 500;
  margin-top: 20px;
`,J$=T.div`
  display: flex;
  gap: 30px;
  border-bottom: 1px solid #ccc;
`,hv=T.button`
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
`,eD=T.div`
  font-family: var(--second-font);
  font-weight: 500;
  padding: 15px;
  background: #fff;
`,tD=T.p`
  font-size: 20px;
  font-family: var(--second-font);
  font-weight: 300;
`,nD=T.button`
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
`,rD=T.svg`
  width: 20px;
  height: 20px;

  fill: ${({$active:e})=>e?"white":" var(--black-color)"};
`,IS="carousel",jS="controller",iD="navigation",oD="no-scroll",sm="portal",aD="root",$S="toolbar",mv="zoom",bd="loading",wd="error",Sd="complete",sD="placeholder",lD=e=>`active-slide-${e}`,uD="fullsize",lm="flex_center",cD="no_scroll",DS="no_scroll_padding",um="slide",RS="slide_wrapper",dD="slide_wrapper_interactive",Dr="prev",Rr="next",gv="swipe",Gi="close",LS="onPointerDown",AS="onPointerMove",FS="onPointerUp",NS="onPointerLeave",zS="onPointerCancel",cm="onKeyDown",fD="onKeyUp",dm="onWheel",pD="Escape",hD="ArrowLeft",mD="ArrowRight",gD="button",yp="icon",VS="contain",vv="cover",BS="Unknown action type",US="yarl__";function En(...e){return e.filter(Boolean).join(" ")}function oe(e){return`${US}${e}`}function gt(e){return`--${US}${e}`}function Na(e,t){return`${e}${t?`_${t}`:""}`}function fm(e){return t=>Na(e,t)}function Yi(e,t){var n;return(n=e==null?void 0:e[t])!==null&&n!==void 0?n:t}function vD(e,t,n){return Yi(e,"{index} of {total}").replace(/\{index}/g,`${vm(n,t.length)+1}`).replace(/\{total}/g,`${t.length}`)}function pm(...e){return()=>{e.forEach(t=>{t()})}}function Zn(e,t,n){return()=>{const r=b.useContext(n);if(!r)throw new Error(`${e} must be used within a ${t}.Provider`);return r}}function hm(){return typeof window<"u"}function mm(e,t=0){const n=10**t;return Math.round((e+Number.EPSILON)*n)/n}function ao(e){return e.type===void 0||e.type==="image"}function gm(e,t){return e.imageFit===vv||e.imageFit!==VS&&t===vv}function lc(e){return typeof e=="string"?Number.parseInt(e,10):e}function Bl(e){if(typeof e=="number")return{pixel:e};if(typeof e=="string"){const t=lc(e);return e.endsWith("%")?{percent:t}:{pixel:t}}return{pixel:0}}function yD(e,t){const n=Bl(t),r=n.percent!==void 0?e.width/100*n.percent:n.pixel;return{width:Math.max(e.width-2*r,0),height:Math.max(e.height-2*r,0)}}function xD(){return(hm()?window==null?void 0:window.devicePixelRatio:void 0)||1}function vm(e,t){return t>0?(e%t+t)%t:0}function HS(e){return e.length>0}function WS(e,t){return e[vm(t,e.length)]}function xp(e,t){return HS(e)?WS(e,t):void 0}function bD(e){return ao(e)?e.src:void 0}function wD(e,t,n){if(!n)return e;const{buttons:r,...i}=e,o=r.findIndex(l=>l===t),a=b.isValidElement(n)?b.cloneElement(n,{key:t},null):n;if(o>=0){const l=[...r];return l.splice(o,1,a),{buttons:l,...i}}return{buttons:[a,...r],...i}}function SD(e,t,n=0){return Math.min(e.preload,Math.max(e.finite?t.length-1:Math.floor(t.length/2),n))}const _D=Number(b.version.split(".")[0])>=19;function ED(e){return{inert:_D?e:e?"":void 0}}function CD(e){e.scrollTop}const bp={open:!1,close:()=>{},index:0,slides:[],render:{},plugins:[],toolbar:{buttons:[Gi]},labels:{},animation:{fade:250,swipe:500,easing:{fade:"ease",swipe:"ease-out",navigation:"ease-in-out"}},carousel:{finite:!1,preload:2,padding:"16px",spacing:"30%",imageFit:VS,imageProps:{}},controller:{ref:null,focus:!0,aria:!1,touchAction:"none",closeOnPullUp:!1,closeOnPullDown:!1,closeOnBackdropClick:!1,preventDefaultWheelX:!0,preventDefaultWheelY:!1,disableSwipeNavigation:!1},portal:{},noScroll:{disabled:!1},on:{},styles:{},className:""};function Tr(e,t){return{name:e,component:t}}function Ne(e,t){return{module:e,children:t}}function GS(e,t,n){return e.module.name===t?n(e):e.children?[Ne(e.module,e.children.flatMap(r=>{var i;return(i=GS(r,t,n))!==null&&i!==void 0?i:[]}))]:[e]}function li(e,t,n){return e.flatMap(r=>{var i;return(i=GS(r,t,n))!==null&&i!==void 0?i:[]})}function kD(e,t=[],n=[]){let r=e;const i=h=>{const g=[...r];for(;g.length>0;){const x=g.pop();if((x==null?void 0:x.module.name)===h)return!0;x!=null&&x.children&&g.push(...x.children)}return!1},o=(h,g)=>{if(h===""){r=[Ne(g,r)];return}r=li(r,h,x=>[Ne(g,[x])])},a=(h,g)=>{r=li(r,h,x=>[Ne(x.module,[Ne(g,x.children)])])},l=(h,g,x)=>{r=li(r,h,S=>{var f;return[Ne(S.module,[...x?[Ne(g)]:[],...(f=S.children)!==null&&f!==void 0?f:[],...x?[]:[Ne(g)]])]})},s=(h,g,x)=>{r=li(r,h,S=>[...x?[Ne(g)]:[],S,...x?[]:[Ne(g)]])},u=h=>{a(jS,h)},c=(h,g)=>{r=li(r,h,x=>[Ne(g,x.children)])},d=h=>{r=li(r,h,g=>g.children)},m=h=>{n.push(h)};return t.forEach(h=>{h({contains:i,addParent:o,append:a,addChild:l,addSibling:s,addModule:u,replace:c,remove:d,augment:m})}),{config:r,augmentation:h=>n.reduce((g,x)=>x(g),h)}}const YS=b.createContext(null),XS=Zn("useA11yContext","A11yContext",YS);function TD({children:e}){const[t,n]=b.useState(!1),[r,i]=b.useState(!1),o=b.useMemo(()=>({focusWithin:t,trackFocusWithin:(l,s)=>{const u=c=>d=>{var m;d.currentTarget.contains(d.relatedTarget)||n(c),(m=c?l:s)===null||m===void 0||m(d)};return{onFocus:u(!0),onBlur:u(!1)}},autoPlaying:r,setAutoPlaying:i}),[t,r]);return b.createElement(YS.Provider,{value:o},e)}const qS=b.createContext(null),uc=Zn("useDocument","DocumentContext",qS);function OD({nodeRef:e,children:t}){const n=b.useMemo(()=>{const r=o=>{var a;return((a=o||e.current)===null||a===void 0?void 0:a.ownerDocument)||document};return{getOwnerDocument:r,getOwnerWindow:o=>{var a;return((a=r(o))===null||a===void 0?void 0:a.defaultView)||window}}},[e]);return b.createElement(qS.Provider,{value:n},t)}const KS=b.createContext(null),cc=Zn("useEvents","EventsContext",KS);function PD({children:e}){const[t]=b.useState({});b.useEffect(()=>()=>{Object.keys(t).forEach(r=>delete t[r])},[t]);const n=b.useMemo(()=>{const r=(a,l)=>{var s;(s=t[a])===null||s===void 0||s.splice(0,t[a].length,...t[a].filter(u=>u!==l))};return{publish:(...[a,l])=>{var s;(s=t[a])===null||s===void 0||s.forEach(u=>u(l))},subscribe:(a,l)=>(t[a]||(t[a]=[]),t[a].push(l),()=>r(a,l)),unsubscribe:r}},[t]);return b.createElement(KS.Provider,{value:n},e)}const ZS=b.createContext(null),Yt=Zn("useLightboxProps","LightboxPropsContext",ZS);function MD({children:e,...t}){return b.createElement(ZS.Provider,{value:t},e)}const QS=b.createContext(null),Or=Zn("useLightboxState","LightboxStateContext",QS),JS=b.createContext(null),ID=Zn("useLightboxDispatch","LightboxDispatchContext",JS);function jD(e,t){switch(t.type){case"swipe":{const{slides:n}=e,r=(t==null?void 0:t.increment)||0,i=e.globalIndex+r,o=vm(i,n.length),a=xp(n,o),l=r||t.duration!==void 0?{increment:r,duration:t.duration,easing:t.easing}:void 0;return{slides:n,currentIndex:o,globalIndex:i,currentSlide:a,animation:l}}case"update":return t.slides!==e.slides||t.index!==e.currentIndex?{slides:t.slides,currentIndex:t.index,globalIndex:t.index,currentSlide:xp(t.slides,t.index)}:e;default:throw new Error(BS)}}function $D({slides:e,index:t,children:n}){const[r,i]=b.useReducer(jD,{slides:e,currentIndex:t,globalIndex:t,currentSlide:xp(e,t)}),[o,a]=b.useState(e),[l,s]=b.useState(t);(e!==o||t!==l)&&(a(e),s(t),i({type:"update",slides:e,index:t}));const u=b.useMemo(()=>({...r,state:r,dispatch:i}),[r,i]);return b.createElement(JS.Provider,{value:i},b.createElement(QS.Provider,{value:u},n))}const e_=b.createContext(null),dc=Zn("useTimeouts","TimeoutsContext",e_);function DD({children:e}){const[t]=b.useState([]);b.useEffect(()=>()=>{t.forEach(r=>window.clearTimeout(r)),t.splice(0,t.length)},[t]);const n=b.useMemo(()=>{const r=a=>{t.splice(0,t.length,...t.filter(l=>l!==a))};return{setTimeout:(a,l)=>{const s=window.setTimeout(()=>{r(s),a()},l);return t.push(s),s},clearTimeout:a=>{a!==void 0&&(r(a),window.clearTimeout(a))}}},[t]);return b.createElement(e_.Provider,{value:n},e)}const ym=b.forwardRef(function({label:t,className:n,icon:r,renderIcon:i,onClick:o,style:a,...l},s){const{styles:u,labels:c}=Yt(),d=Yi(c,t);return b.createElement("button",{ref:s,type:"button",title:d,"aria-label":d,className:En(oe(gD),n),onClick:o,style:{...a,...u.button},...l},i?i():b.createElement(r,{className:oe(yp),style:u.icon}))});function RD(e,t){const n=r=>b.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24","aria-hidden":"true",focusable:"false",...r},t);return n.displayName=e,n}function ti(e,t){return RD(e,b.createElement("g",{fill:"currentColor"},b.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),t))}const LD=ti("Close",b.createElement("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"})),AD=ti("Previous",b.createElement("path",{d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"})),FD=ti("Next",b.createElement("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"})),ND=ti("Loading",b.createElement(b.Fragment,null,Array.from({length:8}).map((e,t,n)=>b.createElement("line",{key:t,x1:"12",y1:"6.5",x2:"12",y2:"1.8",strokeLinecap:"round",strokeWidth:"2.6",stroke:"currentColor",strokeOpacity:1/n.length*(t+1),transform:`rotate(${360/n.length*t}, 12, 12)`})))),zD=ti("Error",b.createElement("path",{d:"M21.9,21.9l-8.49-8.49l0,0L3.59,3.59l0,0L2.1,2.1L0.69,3.51L3,5.83V19c0,1.1,0.9,2,2,2h13.17l2.31,2.31L21.9,21.9z M5,18 l3.5-4.5l2.5,3.01L12.17,15l3,3H5z M21,18.17L5.83,3H19c1.1,0,2,0.9,2,2V18.17z"})),Cn=hm()?b.useLayoutEffect:b.useEffect;function xm(){const[e,t]=b.useState(!1);return b.useEffect(()=>{var n,r;const i=(n=window.matchMedia)===null||n===void 0?void 0:n.call(window,"(prefers-reduced-motion: reduce)");t(i==null?void 0:i.matches);const o=a=>t(a.matches);return(r=i==null?void 0:i.addEventListener)===null||r===void 0||r.call(i,"change",o),()=>{var a;return(a=i==null?void 0:i.removeEventListener)===null||a===void 0?void 0:a.call(i,"change",o)}},[]),e}function VD(e){let t=0,n=0,r=0;const o=window.getComputedStyle(e).transform.match(/matrix.*\((.+)\)/);if(o){const a=o[1].split(",").map(lc);a.length===6?(t=a[4],n=a[5]):a.length===16&&(t=a[12],n=a[13],r=a[14])}return{x:t,y:n,z:r}}function yv(e,t){const n=b.useRef(void 0),r=b.useRef(void 0),i=xm();return Cn(()=>{var o,a,l;if(e.current&&n.current!==void 0&&!i){const{keyframes:s,duration:u,easing:c,onfinish:d}=t(n.current,e.current.getBoundingClientRect(),VD(e.current))||{};if(s&&u){(o=r.current)===null||o===void 0||o.cancel(),r.current=void 0;try{r.current=(l=(a=e.current).animate)===null||l===void 0?void 0:l.call(a,s,{duration:u,easing:c})}catch(m){console.error(m)}r.current&&(r.current.onfinish=()=>{r.current=void 0,d==null||d()})}}n.current=void 0}),{prepareAnimation:o=>{n.current=o},isAnimationPlaying:()=>{var o;return((o=r.current)===null||o===void 0?void 0:o.playState)==="running"}}}function t_(){const e=b.useRef(null),t=b.useRef(void 0),[n,r]=b.useState();return{setContainerRef:b.useCallback(o=>{e.current=o,t.current&&(t.current.disconnect(),t.current=void 0);const a=()=>{if(o){const l=window.getComputedStyle(o),s=u=>parseFloat(u)||0;r({width:Math.round(o.clientWidth-s(l.paddingLeft)-s(l.paddingRight)),height:Math.round(o.clientHeight-s(l.paddingTop)-s(l.paddingBottom))})}else r(void 0)};a(),o&&typeof ResizeObserver<"u"&&(t.current=new ResizeObserver(a),t.current.observe(o))},[]),containerRef:e,containerRect:n}}function Xs(){const e=b.useRef(void 0),{setTimeout:t,clearTimeout:n}=dc();return b.useCallback((r,i)=>{n(e.current),e.current=t(r,i>0?i:0)},[t,n])}function de(e){const t=b.useRef(e);return Cn(()=>{t.current=e}),b.useCallback((...n)=>{var r;return(r=t.current)===null||r===void 0?void 0:r.call(t,...n)},[])}function xv(e,t){typeof e=="function"?e(t):e&&(e.current=t)}function wp(e,t){return b.useMemo(()=>e==null&&t==null?null:n=>{xv(e,n),xv(t,n)},[e,t])}function BD(e,t=!1){const n=b.useRef(!1);Cn(()=>{t&&n.current&&(n.current=!1,e())},[t,e]);const r=b.useCallback(()=>{n.current=!0},[]),i=b.useCallback(()=>{n.current=!1},[]);return{onFocus:r,onBlur:i}}function bm(){const[e,t]=b.useState(!1);return Cn(()=>{t(window.getComputedStyle(window.document.documentElement).direction==="rtl")},[]),e}function UD(){const[e]=b.useState({}),t=b.useCallback((i,o)=>{var a;(a=e[i])===null||a===void 0||a.forEach(l=>{o.isPropagationStopped()||l(o)})},[e]),n=b.useMemo(()=>({onPointerDown:i=>t(LS,i),onPointerMove:i=>t(AS,i),onPointerUp:i=>t(FS,i),onPointerLeave:i=>t(NS,i),onPointerCancel:i=>t(zS,i),onKeyDown:i=>t(cm,i),onKeyUp:i=>t(fD,i),onWheel:i=>t(dm,i)}),[t]),r=b.useCallback((i,o)=>(e[i]||(e[i]=[]),e[i].unshift(o),()=>{const a=e[i];a&&a.splice(0,a.length,...a.filter(l=>l!==o))}),[e]);return{registerSensors:n,subscribeSensors:r}}function bv(e,t){const n=b.useRef(0),r=Xs(),i=de((...o)=>{n.current=Date.now(),e(o)});return b.useCallback((...o)=>{r(()=>{i(o)},t-(Date.now()-n.current))},[t,i,r])}const _d=fm("slide"),Ed=fm("slide_image");function Ul({slide:e,offset:t,render:n,rect:r,imageFit:i,imageProps:o,onClick:a,onLoad:l,onError:s,style:u}){var c,d,m,h,g,x,S,f;const[p,v]=b.useState(bd),{publish:w}=cc(),{setTimeout:C}=dc(),k=b.useRef(null);b.useEffect(()=>{t===0&&w(lD(p))},[t,p,w]);const _=de(z=>{("decode"in z?z.decode():Promise.resolve()).catch(()=>{}).then(()=>{z.parentNode&&(v(Sd),C(()=>{l==null||l(z)},0))})}),E=b.useCallback(z=>{k.current=z,z!=null&&z.complete&&_(z)},[_]),M=b.useCallback(z=>{_(z.currentTarget)},[_]),I=de(()=>{v(wd),s==null||s()}),$=gm(e,i),P=(z,G)=>Number.isFinite(z)?z:G,j=P(Math.max(...((d=(c=e.srcSet)===null||c===void 0?void 0:c.map(z=>z.width))!==null&&d!==void 0?d:[]).concat(e.width?[e.width]:[]).filter(Boolean)),((m=k.current)===null||m===void 0?void 0:m.naturalWidth)||0),L=P(Math.max(...((g=(h=e.srcSet)===null||h===void 0?void 0:h.map(z=>z.height))!==null&&g!==void 0?g:[]).concat(e.height?[e.height]:[]).filter(Boolean)),((x=k.current)===null||x===void 0?void 0:x.naturalHeight)||0),R=j&&L?{maxWidth:`min(${j}px, 100%)`,maxHeight:`min(${L}px, 100%)`}:{maxWidth:"100%",maxHeight:"100%"},F=(S=e.srcSet)===null||S===void 0?void 0:S.slice().sort((z,G)=>z.width-G.width).map(z=>`${z.src} ${z.width}w`).join(", "),A=()=>r&&!$&&e.width&&e.height?r.height/e.height*e.width:Number.MAX_VALUE,O=F&&r&&hm()?`${Math.round(Math.min(A(),r.width))}px`:void 0,{style:D,className:N,...B}=(typeof o=="function"?o(e):o)||{};return b.createElement(b.Fragment,null,b.createElement("img",{ref:E,onLoad:M,onError:I,onClick:a,draggable:!1,className:En(oe(Ed()),$&&oe(Ed("cover")),p!==Sd&&oe(Ed("loading")),N),style:{...R,...u,...D},...B,alt:(f=e.alt)!==null&&f!==void 0?f:"",sizes:O,srcSet:F,src:e.src}),p!==Sd&&b.createElement("div",{className:oe(_d(sD))},p===bd&&(n!=null&&n.iconLoading?n.iconLoading():b.createElement(ND,{className:En(oe(yp),oe(_d(bd)))})),p===wd&&(n!=null&&n.iconError?n.iconError():b.createElement(zD,{className:En(oe(yp),oe(_d(wd)))}))))}const HD=b.forwardRef(function({className:t,children:n,onFocus:r,onBlur:i,...o},a){const l=b.useRef(null),{trackFocusWithin:s}=XS();return b.createElement(OD,{nodeRef:l},b.createElement("div",{ref:wp(a,l),className:En(oe("root"),t),...s(r,i),...o},n))});var et;(function(e){e[e.NONE=0]="NONE",e[e.SWIPE=1]="SWIPE",e[e.PULL=2]="PULL",e[e.ANIMATION=3]="ANIMATION"})(et||(et={}));function n_(e,t,n,r,i){b.useEffect(()=>i?()=>{}:pm(e(LS,t),e(AS,n),e(FS,r),e(NS,r),e(zS,r)),[e,t,n,r,i])}var Zt;(function(e){e[e.NONE=0]="NONE",e[e.SWIPE=1]="SWIPE",e[e.PULL=2]="PULL"})(Zt||(Zt={}));const Cd=30;function WD({disableSwipeNavigation:e,closeOnBackdropClick:t},n,r,i,o,a,l,s,u,c,d,m,h,g,x,S){const f=b.useRef(0),p=b.useRef([]),v=b.useRef(void 0),w=b.useRef(0),C=b.useRef(Zt.NONE),k=b.useCallback(j=>{v.current===j.pointerId&&(v.current=void 0,C.current=Zt.NONE);const L=p.current;L.splice(0,L.length,...L.filter(R=>R.pointerId!==j.pointerId))},[]),_=b.useCallback(j=>{k(j),j.persist(),p.current.push(j)},[k]),E=b.useCallback(j=>p.current.find(({pointerId:L})=>j.pointerId===L),[]),M=de(j=>{_(j)}),I=(j,L)=>d&&j>L||c&&j<-L,$=de(j=>{const L=E(j);if(L)if(v.current===j.pointerId){const R=Date.now()-w.current,F=f.current;C.current===Zt.SWIPE?Math.abs(F)>.3*i||Math.abs(F)>5&&R<o?s(F,R):u(F):C.current===Zt.PULL&&(I(F,2*Cd)?g(F,R):x(F)),f.current=0,C.current=Zt.NONE}else{const{target:R}=j;t&&R instanceof HTMLElement&&R===L.target&&(R.classList.contains(oe(um))||R.classList.contains(oe(RS)))&&S()}k(j)}),P=de(j=>{const L=E(j);if(L){const R=v.current===j.pointerId;if(j.buttons===0){R&&f.current!==0?$(j):k(L);return}const F=j.clientX-L.clientX,A=j.clientY-L.clientY;if(v.current===void 0){const O=D=>{_(j),v.current=j.pointerId,w.current=Date.now(),C.current=D};Math.abs(F)>Math.abs(A)&&Math.abs(F)>Cd&&r(F)?e||(O(Zt.SWIPE),a()):Math.abs(A)>Math.abs(F)&&I(A,Cd)&&(O(Zt.PULL),m())}else R&&(C.current===Zt.SWIPE?(f.current=F,l(F)):C.current===Zt.PULL&&(f.current=A,h(A)))}});n_(n,M,P,$)}function GD({preventDefaultWheelX:e,preventDefaultWheelY:t}){const n=b.useRef(null),r=de(i=>{const o=Math.abs(i.deltaX)>Math.abs(i.deltaY);(o&&e||!o&&t||i.ctrlKey)&&i.preventDefault()});return b.useCallback(i=>{var o;i?i.addEventListener("wheel",r,{passive:!1}):(o=n.current)===null||o===void 0||o.removeEventListener("wheel",r),n.current=i},[r])}function YD(e,t,n,r,i,o,a,l,s){const u=b.useRef(0),c=b.useRef(0),d=b.useRef(void 0),m=b.useRef(void 0),h=b.useRef(0),g=b.useRef(void 0),x=b.useRef(0),{setTimeout:S,clearTimeout:f}=dc(),p=b.useCallback(()=>{d.current&&(f(d.current),d.current=void 0)},[f]),v=b.useCallback(()=>{m.current&&(f(m.current),m.current=void 0)},[f]),w=de(()=>{e!==et.SWIPE&&(u.current=0,x.current=0,p(),v())});b.useEffect(w,[e,w]);const C=de(_=>{m.current=void 0,u.current===_&&s(u.current)}),k=de(_=>{if(_.ctrlKey||Math.abs(_.deltaY)>Math.abs(_.deltaX))return;const E=M=>{h.current=M,f(g.current),g.current=M>0?S(()=>{h.current=0,g.current=void 0},300):void 0};if(e===et.NONE){if(Math.abs(_.deltaX)<=1.2*Math.abs(h.current)){E(_.deltaX);return}if(!n(-_.deltaX))return;if(c.current+=_.deltaX,p(),Math.abs(c.current)>30)c.current=0,E(0),x.current=Date.now(),o();else{const M=c.current;d.current=S(()=>{d.current=void 0,M===c.current&&(c.current=0)},i)}}else if(e===et.SWIPE){let M=u.current-_.deltaX;if(M=Math.min(Math.abs(M),r)*Math.sign(M),u.current=M,a(M),v(),Math.abs(M)>.2*r){E(_.deltaX),l(M,Date.now()-x.current);return}m.current=S(()=>C(M),2*i)}else E(_.deltaX)});b.useEffect(()=>t(dm,k),[t,k])}const wv=fm("container"),r_=b.createContext(null),Qn=Zn("useController","ControllerContext",r_);function XD({children:e,...t}){var n;const{carousel:r,animation:i,controller:o,on:a,styles:l,render:s}=t,{closeOnPullUp:u,closeOnPullDown:c,preventDefaultWheelX:d,preventDefaultWheelY:m}=o,[h,g]=b.useState(),x=Or(),S=ID(),[f,p]=b.useState(et.NONE),v=b.useRef(0),w=b.useRef(0),C=b.useRef(1),{registerSensors:k,subscribeSensors:_}=UD(),{subscribe:E,publish:M}=cc(),I=Xs(),$=Xs(),P=Xs(),{containerRef:j,setContainerRef:L,containerRect:R}=t_(),F=wp(GD({preventDefaultWheelX:d,preventDefaultWheelY:m}),L),A=b.useRef(null),O=wp(A,void 0),{getOwnerDocument:D}=uc(),N=bm(),B=H=>(N?-1:1)*(typeof H=="number"?H:1),z=de(()=>{var H;return(H=j.current)===null||H===void 0?void 0:H.focus()}),G=de(()=>t),Q=de(()=>x),Z=b.useCallback(H=>M(Dr,H),[M]),K=b.useCallback(H=>M(Rr,H),[M]),re=b.useCallback(()=>M(Gi),[M]),we=H=>!(r.finite&&(B(H)>0&&x.currentIndex===0||B(H)<0&&x.currentIndex===x.slides.length-1)),qe=H=>{var ye;v.current=H,(ye=j.current)===null||ye===void 0||ye.style.setProperty(gt("swipe_offset"),`${Math.round(H)}px`)},Oe=H=>{var ye,it;w.current=H,C.current=(()=>{const uo=(()=>c&&H>0?H:u&&H<0?-H:0)();return Math.min(Math.max(mm(1-uo/60*(1-.5),2),.5),1)})(),(ye=j.current)===null||ye===void 0||ye.style.setProperty(gt("pull_offset"),`${Math.round(H)}px`),(it=j.current)===null||it===void 0||it.style.setProperty(gt("pull_opacity"),`${C.current}`)},{prepareAnimation:Xt}=yv(A,(H,ye,it)=>{if(A.current&&R)return{keyframes:[{transform:`translate(0, ${H.rect.y-ye.y+it.y}px)`,opacity:H.opacity},{transform:"translate(0, 0)",opacity:1}],duration:H.duration,easing:i.easing.fade}}),Ft=(H,ye)=>{if(u||c){Oe(H);let it=0;A.current&&(it=i.fade*(ye?2:1),Xt({rect:A.current.getBoundingClientRect(),opacity:C.current,duration:it})),P(()=>{Oe(0),p(et.NONE)},it),p(et.ANIMATION),ye||re()}},{prepareAnimation:kt,isAnimationPlaying:ni}=yv(A,(H,ye,it)=>{var dn;if(A.current&&R&&(!((dn=x.animation)===null||dn===void 0)&&dn.duration)){const Nt=Bl(r.spacing),uo=(Nt.percent?Nt.percent*R.width/100:Nt.pixel)||0;return{keyframes:[{transform:`translate(${B(x.globalIndex-H.index)*(R.width+uo)+H.rect.x-ye.x+it.x}px, 0)`},{transform:"translate(0, 0)"}],duration:x.animation.duration,easing:x.animation.easing}}}),pt=de(H=>{var ye,it;const dn=H.offset||0,Nt=dn?i.swipe:(ye=i.navigation)!==null&&ye!==void 0?ye:i.swipe,uo=!dn&&!ni()?i.easing.navigation:i.easing.swipe;let{direction:Va}=H;const Ba=(it=H.count)!==null&&it!==void 0?it:1;let gc=et.ANIMATION,fn=Nt*Ba;if(!Va){const co=R==null?void 0:R.width,Dm=H.duration||0,yc=co?Nt/co*Math.abs(dn):Nt;Ba!==0?(Dm<yc?fn=fn/yc*Math.max(Dm,yc/5):co&&(fn=Nt/co*(co-Math.abs(dn))),Va=B(dn)>0?Dr:Rr):fn=Nt/2}let vc=0;Va===Dr?we(B(1))?vc=-Ba:(gc=et.NONE,fn=Nt):Va===Rr&&(we(B(-1))?vc=Ba:(gc=et.NONE,fn=Nt)),fn=Math.round(fn),$(()=>{qe(0),p(et.NONE)},fn),A.current&&kt({rect:A.current.getBoundingClientRect(),index:x.globalIndex}),p(gc),M(gv,{type:"swipe",increment:vc,duration:fn,easing:uo})});b.useEffect(()=>{var H,ye;!((H=x.animation)===null||H===void 0)&&H.increment&&(!((ye=x.animation)===null||ye===void 0)&&ye.duration)&&I(()=>S({type:"swipe",increment:0}),x.animation.duration)},[x.animation,S,I]);const so=[_,we,(R==null?void 0:R.width)||0,i.swipe,()=>p(et.SWIPE),H=>qe(H),(H,ye)=>pt({offset:H,duration:ye,count:1}),H=>pt({offset:H,count:0})],za=[()=>{c&&p(et.PULL)},H=>Oe(H),H=>Ft(H),H=>Ft(H,!0)];WD(o,...so,u,c,...za,re),YD(f,...so);const lo=de(()=>{o.focus&&D().querySelector(`.${oe(sm)} .${oe(wv())}`)&&z()});b.useEffect(lo,[lo]);const $m=de(()=>{var H;(H=a.view)===null||H===void 0||H.call(a,{index:x.currentIndex})});b.useEffect($m,[x.globalIndex,$m]),b.useEffect(()=>pm(E(Dr,H=>pt({direction:Dr,...H})),E(Rr,H=>pt({direction:Rr,...H})),E(gv,H=>S(H))),[E,pt,S]);const q_=b.useMemo(()=>({prev:Z,next:K,close:re,focus:z,slideRect:R?yD(R,r.padding):{width:0,height:0},containerRect:R||{width:0,height:0},subscribeSensors:_,containerRef:j,setCarouselRef:O,toolbarWidth:h,setToolbarWidth:g}),[Z,K,re,z,_,R,j,O,h,g,r.padding]);return b.useImperativeHandle(o.ref,()=>({prev:Z,next:K,close:re,focus:z,getLightboxProps:G,getLightboxState:Q}),[Z,K,re,z,G,Q]),b.createElement("div",{ref:F,className:En(oe(wv()),oe(lm)),style:{...f===et.SWIPE?{[gt("swipe_offset")]:`${Math.round(v.current)}px`}:null,...f===et.PULL?{[gt("pull_offset")]:`${Math.round(w.current)}px`,[gt("pull_opacity")]:`${C.current}`}:null,...o.touchAction!=="none"?{[gt("controller_touch_action")]:o.touchAction}:null,...l.container},tabIndex:-1,...k},R&&b.createElement(r_.Provider,{value:q_},e,(n=s.controls)===null||n===void 0?void 0:n.call(s)))}const qD=Tr(jS,XD);function Pr(e){return Na(IS,e)}function Sv(e){return Na(um,e)}function KD({slide:e,offset:t}){const n=b.useRef(null),{currentIndex:r,slides:i}=Or(),{slideRect:o,focus:a}=Qn(),{render:l,carousel:{imageFit:s,imageProps:u},on:{click:c},styles:{slide:d},labels:m}=Yt(),{getOwnerDocument:h}=uc(),g=t!==0;b.useEffect(()=>{var S;g&&(!((S=n.current)===null||S===void 0)&&S.contains(h().activeElement))&&a()},[g,a,h]);const x=()=>{var S,f,p,v;let w=(S=l.slide)===null||S===void 0?void 0:S.call(l,{slide:e,offset:t,rect:o});return!w&&ao(e)&&(w=b.createElement(Ul,{slide:e,offset:t,render:l,rect:o,imageFit:s,imageProps:u,onClick:g?void 0:()=>c==null?void 0:c({index:r})})),w?b.createElement(b.Fragment,null,(f=l.slideHeader)===null||f===void 0?void 0:f.call(l,{slide:e}),((p=l.slideContainer)!==null&&p!==void 0?p:({children:C})=>C)({slide:e,children:w}),(v=l.slideFooter)===null||v===void 0?void 0:v.call(l,{slide:e})):null};return b.createElement("div",{ref:n,className:En(oe(Sv()),!g&&oe(Sv("current")),oe(lm)),...ED(g),style:d,role:"group","aria-roledescription":Yi(m,"Slide"),"aria-label":vD(m,i,r+t)},x())}function ZD(){const e=Yt().styles.slide;return b.createElement("div",{className:oe(um),style:e})}function QD({carousel:e,labels:t}){const{slides:n,currentIndex:r,globalIndex:i}=Or(),{setCarouselRef:o}=Qn(),{autoPlaying:a,focusWithin:l}=XS(),s=Bl(e.spacing),u=Bl(e.padding),c=SD(e,n,1),d=[];if(HS(n))for(let m=r-c;m<=r+c;m+=1){const h=WS(n,m),g=i-r+m,x=e.finite&&(m<0||m>n.length-1);d.push(x?{key:g}:{key:[`${g}`,bD(h)].filter(Boolean).join("|"),offset:m-r,slide:h})}return b.createElement("div",{ref:o,className:En(oe(Pr()),d.length>0&&oe(Pr("with_slides"))),style:{[`${gt(Pr("slides_count"))}`]:d.length,[`${gt(Pr("spacing_px"))}`]:s.pixel||0,[`${gt(Pr("spacing_percent"))}`]:s.percent||0,[`${gt(Pr("padding_px"))}`]:u.pixel||0,[`${gt(Pr("padding_percent"))}`]:u.percent||0},role:"region","aria-live":a&&!l?"off":"polite","aria-roledescription":Yi(t,"Carousel"),"aria-label":Yi(t,"Photo gallery")},d.map(({key:m,slide:h,offset:g})=>h?b.createElement(KD,{key:m,slide:h,offset:g}):b.createElement(ZD,{key:m})))}const JD=Tr(IS,QD);function i_(){const{carousel:e}=Yt(),{slides:t,currentIndex:n}=Or(),r=t.length===0||e.finite&&n===0,i=t.length===0||e.finite&&n===t.length-1;return{prevDisabled:r,nextDisabled:i}}function eR(e){var t;const n=bm(),{publish:r}=cc(),{animation:i}=Yt(),{prevDisabled:o,nextDisabled:a}=i_(),l=((t=i.navigation)!==null&&t!==void 0?t:i.swipe)/2,s=bv(()=>r(Dr),l),u=bv(()=>r(Rr),l),c=de(d=>{switch(d.key){case pD:r(Gi);break;case hD:(n?a:o)||(n?u:s)();break;case mD:(n?o:a)||(n?s:u)();break}});b.useEffect(()=>e(cm,c),[e,c])}function _v({label:e,icon:t,renderIcon:n,action:r,onClick:i,disabled:o,style:a}){return b.createElement(ym,{label:e,icon:t,renderIcon:n,className:oe(`navigation_${r}`),disabled:o,onClick:i,style:a,...BD(Qn().focus,o)})}function tR({render:{buttonPrev:e,buttonNext:t,iconPrev:n,iconNext:r},styles:i}){const{prev:o,next:a,subscribeSensors:l}=Qn(),{prevDisabled:s,nextDisabled:u}=i_();return eR(l),b.createElement(b.Fragment,null,e?e():b.createElement(_v,{label:"Previous",action:Dr,icon:AD,renderIcon:n,style:i.navigationPrev,disabled:s,onClick:o}),t?t():b.createElement(_v,{label:"Next",action:Rr,icon:FD,renderIcon:r,style:i.navigationNext,disabled:u,onClick:a}))}const nR=Tr(iD,tR),Ev=oe(cD),rR=oe(DS);function iR(e){return"style"in e}function Cv(e,t,n){const r=window.getComputedStyle(e),i=n?"padding-left":"padding-right",o=n?r.paddingLeft:r.paddingRight,a=e.style.getPropertyValue(i);return e.style.setProperty(i,`${(lc(o)||0)+t}px`),()=>{a?e.style.setProperty(i,a):e.style.removeProperty(i)}}function oR({noScroll:{disabled:e},children:t}){const n=bm(),{getOwnerDocument:r,getOwnerWindow:i}=uc();return b.useEffect(()=>{if(e)return()=>{};const o=[],a=i(),{body:l,documentElement:s}=r(),u=Math.round(a.innerWidth-s.clientWidth);if(u>0){o.push(Cv(l,u,n));const c=l.getElementsByTagName("*");for(let d=0;d<c.length;d+=1){const m=c[d];iR(m)&&a.getComputedStyle(m).getPropertyValue("position")==="fixed"&&!m.classList.contains(rR)&&o.push(Cv(m,u,n))}}return l.classList.add(Ev),()=>{l.classList.remove(Ev),o.forEach(c=>c())}},[n,e,r,i]),b.createElement(b.Fragment,null,t)}const aR=Tr(oD,oR);function kv(e){return Na(sm,e)}function Tv(e,t,n){const r=e.getAttribute(t);return e.setAttribute(t,n),()=>{r?e.setAttribute(t,r):e.removeAttribute(t)}}function sR({children:e,animation:t,styles:n,className:r,on:i,portal:o,close:a,labels:l}){const[s,u]=b.useState(!1),[c,d]=b.useState(!1),m=b.useRef([]),h=b.useRef(null),{setTimeout:g}=dc(),{subscribe:x}=cc(),f=xm()?0:t.fade;b.useEffect(()=>(u(!0),()=>{u(!1),d(!1)}),[]);const p=de(()=>{m.current.forEach(k=>k()),m.current=[]}),v=de(()=>{var k;d(!1),p(),(k=i.exiting)===null||k===void 0||k.call(i),g(()=>{var _;(_=i.exited)===null||_===void 0||_.call(i),a()},f)});b.useEffect(()=>x(Gi,v),[x,v]);const w=de(k=>{var _,E,M;CD(k),d(!0),(_=i.entering)===null||_===void 0||_.call(i);const I=(M=(E=k.parentNode)===null||E===void 0?void 0:E.children)!==null&&M!==void 0?M:[];for(let $=0;$<I.length;$+=1){const P=I[$];["TEMPLATE","SCRIPT","STYLE"].indexOf(P.tagName)===-1&&P!==k&&(m.current.push(Tv(P,"inert","")),m.current.push(Tv(P,"aria-hidden","true")))}m.current.push(()=>{var $,P;(P=($=h.current)===null||$===void 0?void 0:$.focus)===null||P===void 0||P.call($)}),g(()=>{var $;($=i.entered)===null||$===void 0||$.call(i)},f)}),C=b.useCallback(k=>{k?w(k):p()},[w,p]);return s?gu.createPortal(b.createElement(HD,{ref:C,className:En(r,oe(kv()),oe(DS),c&&oe(kv("open"))),"aria-modal":!0,role:"dialog","aria-label":Yi(l,"Lightbox"),style:{...t.fade!==bp.animation.fade?{[gt("fade_animation_duration")]:`${f}ms`}:null,...t.easing.fade!==bp.animation.easing.fade?{[gt("fade_animation_timing_function")]:t.easing.fade}:null,...n.root},onFocus:k=>{h.current||(h.current=k.relatedTarget)}},e),o.root||document.body):null}const lR=Tr(sm,sR);function uR({children:e}){return b.createElement(b.Fragment,null,e)}const cR=Tr(aD,uR);function dR(e){return Na($S,e)}function fR({toolbar:{buttons:e},render:{buttonClose:t,iconClose:n},styles:r}){const{close:i,setToolbarWidth:o}=Qn(),{setContainerRef:a,containerRect:l}=t_();Cn(()=>{o(l==null?void 0:l.width)},[o,l==null?void 0:l.width]);const s=()=>t?t():b.createElement(ym,{key:Gi,label:"Close",icon:LD,renderIcon:n,onClick:i});return b.createElement("div",{ref:a,style:r.toolbar,className:oe(dR())},e==null?void 0:e.map(u=>u===Gi?s():u))}const pR=Tr($S,fR);function o_(e,t){var n;return b.createElement(e.module.component,{key:e.module.name,...t},(n=e.children)===null||n===void 0?void 0:n.map(r=>o_(r,t)))}function hR(e,t={}){const{easing:n,...r}=e,{easing:i,...o}=t;return{easing:{...n,...i},...r,...o}}function mR({carousel:e,animation:t,render:n,toolbar:r,controller:i,noScroll:o,on:a,plugins:l,slides:s,index:u,...c}){const{animation:d,carousel:m,render:h,toolbar:g,controller:x,noScroll:S,on:f,slides:p,index:v,plugins:w,...C}=bp,{config:k,augmentation:_}=kD([Ne(lR,[Ne(aR,[Ne(qD,[Ne(JD),Ne(pR),Ne(nR)])])])],l||w),E=_({animation:hR(d,t),carousel:{...m,...e},render:{...h,...n},toolbar:{...g,...r},controller:{...x,...i},noScroll:{...S,...o},on:{...f,...a},...C,...c});return E.open?b.createElement(MD,{...E},b.createElement($D,{slides:s||p,index:lc(u||v)},b.createElement(DD,null,b.createElement(PD,null,b.createElement(TD,null,o_(Ne(cR,k),E)))))):null}const gR={minZoom:1,maxZoomPixelRatio:1,zoomInMultiplier:2,doubleTapDelay:300,doubleClickDelay:500,doubleClickMaxStops:2,keyboardMoveDistance:50,wheelZoomDistanceFactor:100,pinchZoomDistanceFactor:100,pinchZoomV4:!1,scrollToZoom:!1};function vR(e){return Math.min(Math.max(e,Number.EPSILON),1)}function a_(e){const{minZoom:t,...n}={...gR,...e};return{minZoom:vR(t),...n}}function yR(e,t,n,r){const i=b.useRef(void 0),o=b.useRef(void 0),{zoom:a}=Yt().animation,l=xm(),s=de(()=>{var u,c,d;if((u=i.current)===null||u===void 0||u.cancel(),i.current=void 0,o.current&&(r!=null&&r.current)){try{i.current=(d=(c=r.current).animate)===null||d===void 0?void 0:d.call(c,[{transform:o.current},{transform:`scale(${e}) translateX(${t}px) translateY(${n}px)`}],{duration:l?0:a??500,easing:i.current?"ease-out":"ease-in-out"})}catch(m){console.error(m)}o.current=void 0,i.current&&(i.current.onfinish=()=>{i.current=void 0})}});return Cn(s,[e,t,n,s]),b.useCallback(()=>{o.current=r!=null&&r.current?window.getComputedStyle(r.current).transform:void 0},[r])}function xR(e,t){const{on:n}=Yt(),r=de(()=>{var i;t||(i=n.zoom)===null||i===void 0||i.call(n,{zoom:e})});b.useEffect(r,[e,r])}function fc(){const{zoom:e}=Yt();return a_(e)}function bR(e,t){var n,r;let i={width:0,height:0},o={width:0,height:0};const{currentSlide:a}=Or(),{imageFit:l}=Yt().carousel,{maxZoomPixelRatio:s}=fc();if(e&&a){const c={...a,...t};if(ao(c)){const d=gm(c,l),m=Math.max(...(((n=c.srcSet)===null||n===void 0?void 0:n.map(g=>g.width))||[]).concat(c.width?[c.width]:[])),h=Math.max(...(((r=c.srcSet)===null||r===void 0?void 0:r.map(g=>g.height))||[]).concat(c.height?[c.height]:[]));m>0&&h>0&&e.width>0&&e.height>0&&(o=d?{width:Math.round(Math.min(m,e.width/e.height*h)),height:Math.round(Math.min(h,e.height/e.width*m))}:{width:m,height:h},o={width:o.width*s,height:o.height*s},i=d?{width:Math.min(e.width,o.width,m),height:Math.min(e.height,o.height,h)}:{width:Math.round(Math.min(e.width,e.height/h*m,m)),height:Math.round(Math.min(e.height,e.width/m*h,h))})}}const u=i.width?Math.max(mm(o.width/i.width,5),1):1;return{imageRect:i,maxZoom:u}}function Ov(e,t){return Math.hypot(e.clientX-t.clientX,e.clientY-t.clientY)}function Pv(e,t,n=100,r=2){return e*Math.min(1+Math.abs(t/n),r)**Math.sign(t)}function wR(e,t,n,r,i,o,a,l,s){const u=b.useRef([]),c=b.useRef(0),d=b.useRef(void 0),{globalIndex:m}=Or(),{getOwnerWindow:h}=uc(),{containerRef:g,subscribeSensors:x}=Qn(),{keyboardMoveDistance:S,zoomInMultiplier:f,wheelZoomDistanceFactor:p,scrollToZoom:v,doubleTapDelay:w,doubleClickDelay:C,doubleClickMaxStops:k,pinchZoomDistanceFactor:_,pinchZoomV4:E}=fc(),M=b.useCallback(O=>{if(g.current){const{pageX:D,pageY:N}=O,{scrollX:B,scrollY:z}=h(),{left:G,top:Q,width:Z,height:K}=g.current.getBoundingClientRect();return[D-G-B-Z/2,N-Q-z-K/2]}return[]},[g,h]),I=de(O=>{const{key:D,metaKey:N,ctrlKey:B}=O,z=N||B,G=()=>{O.preventDefault(),O.stopPropagation()};if(e>1){const Q=(Z,K)=>{G(),l(Z,K)};D==="ArrowDown"?Q(0,S):D==="ArrowUp"?Q(0,-S):D==="ArrowLeft"?Q(-S,0):D==="ArrowRight"&&Q(S,0)}D==="+"||z&&D==="="?(G(),i()):D==="-"||z&&D==="_"?(G(),o()):z&&D==="0"&&(G(),a(1))}),$=de(O=>{if((O.ctrlKey||v)&&Math.abs(O.deltaY)>Math.abs(O.deltaX)){O.stopPropagation(),a(Pv(e,-O.deltaY,p),!0,...M(O));return}e>1&&(O.stopPropagation(),v||l(O.deltaX,O.deltaY))}),P=b.useCallback(O=>{const D=u.current;D.splice(0,D.length,...D.filter(N=>N.pointerId!==O.pointerId))},[]),j=b.useCallback(O=>{P(O),O.persist(),u.current.push(O)},[P]),L=de(O=>{var D;const N=u.current;if(O.pointerType==="mouse"&&O.buttons>1||!(!((D=s==null?void 0:s.current)===null||D===void 0)&&D.contains(O.target)))return;e>1&&O.stopPropagation();const{timeStamp:B}=O;if(N.length===0&&B-c.current<(O.pointerType==="touch"?w:C)){c.current=0;const z=e>=1?e!==n?e*Math.max(n**(1/k),f):1:e!==t?e/Math.max(t**(-1/k),f):1;a(z,!1,...M(O))}else c.current=B;if(j(O),N.length===2){const z=Ov(N[0],N[1]);d.current={previousDistance:z,initialDistance:Math.max(z,1),initialZoom:e}}}),R=de(O=>{const D=u.current,N=D.find(B=>B.pointerId===O.pointerId);if(D.length===2&&d.current){O.stopPropagation(),j(O);const B=Ov(D[0],D[1]),z=E?d.current.initialZoom/d.current.initialDistance*B:Pv(e,B-d.current.previousDistance,_);a(z,!0,...D.map(G=>M(G)).reduce((G,Q)=>Q.map((Z,K)=>G[K]+Z/2))),d.current.previousDistance=B;return}e>1&&(O.stopPropagation(),N&&(D.length===1&&l((N.clientX-O.clientX)/e,(N.clientY-O.clientY)/e),j(O)))}),F=b.useCallback(O=>{const D=u.current;D.length===2&&D.find(N=>N.pointerId===O.pointerId)&&(d.current=void 0),P(O)},[P]),A=b.useCallback(()=>{const O=u.current;O.splice(0,O.length),c.current=0,d.current=void 0},[]);n_(x,L,R,F,r),b.useEffect(A,[m,A]),b.useEffect(()=>r?()=>{}:pm(A,x(cm,I),x(dm,$)),[r,x,A,I,$])}function SR(e,t,n){const[r,i]=b.useState(1),[o,a]=b.useState(0),[l,s]=b.useState(0),u=yR(r,o,l,n),{currentSlide:c,globalIndex:d}=Or(),{containerRect:m,slideRect:h}=Qn(),{minZoom:g,zoomInMultiplier:x}=fc(),S=c&&ao(c)?c.src:void 0,f=!S||!(n!=null&&n.current);Cn(()=>{i(1),a(0),s(0)},[d,S]);const p=b.useCallback((_,E,M)=>{const I=M||r,$=o-(_||0),P=l-(E||0),j=(e.width*I-h.width)/2/I,L=(e.height*I-h.height)/2/I;a(Math.min(Math.abs($),Math.max(j,0))*Math.sign($)),s(Math.min(Math.abs(P),Math.max(L,0))*Math.sign(P))},[r,o,l,h,e.width,e.height]),v=b.useCallback((_,E,M,I)=>{const $=mm(_+.01<t?_-.01>g?_:g:t,5);E||u(),p(M?M*(1/r-1/$):0,I?I*(1/r-1/$):0,$),i($)},[r,g,t,p,u]),w=de(()=>{r>1&&(r>t&&v(t,!0),p())});Cn(w,[m.width,m.height,w]);const C=b.useCallback(()=>{const _=r*x;v(r<1&&_>1?1:_)},[r,x,v]),k=b.useCallback(()=>{const _=r/x;v(r>1&&_<1?1:_)},[r,x,v]);return{zoom:r,offsetX:o,offsetY:l,disabled:f,changeOffsets:p,changeZoom:v,zoomIn:C,zoomOut:k}}const s_=b.createContext(null),wm=Zn("useZoom","ZoomControllerContext",s_);function _R({children:e}){const[t,n]=b.useState(),{slideRect:r}=Qn(),{ref:i,minZoom:o}=fc(),{imageRect:a,maxZoom:l}=bR(r,t==null?void 0:t.imageDimensions),{zoom:s,offsetX:u,offsetY:c,disabled:d,changeZoom:m,changeOffsets:h,zoomIn:g,zoomOut:x}=SR(a,l,t==null?void 0:t.zoomWrapperRef);xR(s,d),wR(s,o,l,d,g,x,m,h,t==null?void 0:t.zoomWrapperRef);const S=b.useMemo(()=>({zoom:s,minZoom:o,maxZoom:l,offsetX:u,offsetY:c,disabled:d,zoomIn:g,zoomOut:x,changeZoom:m}),[s,o,l,u,c,d,g,x,m]);b.useImperativeHandle(i,()=>S,[S]);const f=b.useMemo(()=>({...S,setZoomWrapper:n}),[S,n]);return b.createElement(s_.Provider,{value:f},e)}const ER=ti("ZoomIn",b.createElement(b.Fragment,null,b.createElement("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}),b.createElement("path",{d:"M12 10h-2v2H9v-2H7V9h2V7h1v2h2v1z"}))),CR=ti("ZoomOut",b.createElement("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14zM7 9h5v1H7z"})),Mv=b.forwardRef(function({zoomIn:t,onLoseFocus:n},r){const i=b.useRef(!1),o=b.useRef(!1),{zoom:a,minZoom:l,maxZoom:s,zoomIn:u,zoomOut:c,disabled:d}=wm(),{render:m}=Yt(),h=d||(t?a>=s:a<=l);return b.useEffect(()=>{h&&i.current&&o.current&&n(),h||(i.current=!0)},[h,n]),b.createElement(ym,{ref:r,disabled:h,label:t?"Zoom in":"Zoom out",icon:t?ER:CR,renderIcon:t?m.iconZoomIn:m.iconZoomOut,onClick:t?u:c,onFocus:()=>{o.current=!0},onBlur:()=>{o.current=!1}})});function kR(){const e=b.useRef(null),t=b.useRef(null),{focus:n}=Qn(),r=b.useCallback(a=>{var l,s;!((l=a.current)===null||l===void 0)&&l.disabled?n():(s=a.current)===null||s===void 0||s.focus()},[n]),i=b.useCallback(()=>r(e),[r]),o=b.useCallback(()=>r(t),[r]);return b.createElement(b.Fragment,null,b.createElement(Mv,{zoomIn:!0,ref:e,onLoseFocus:o}),b.createElement(Mv,{ref:t,onLoseFocus:i}))}function TR(){const{render:e}=Yt(),t=wm();return e.buttonZoom?b.createElement(b.Fragment,null,e.buttonZoom(t)):b.createElement(kR,null)}function OR(e){var t;return(((t=e.srcSet)===null||t===void 0?void 0:t.length)||0)>0}function PR({current:e,preload:t},{type:n,source:r}){switch(n){case"fetch":return e?{current:e,preload:r}:{current:r};case"done":return r===t?{current:r}:{current:e,preload:t};default:throw new Error(BS)}}function MR(e){var t,n;const[{current:r,preload:i},o]=b.useReducer(PR,{}),{slide:a,rect:l,imageFit:s,render:u,interactive:c}=e,d=a.srcSet.sort((C,k)=>C.width-k.width),m=(t=a.width)!==null&&t!==void 0?t:d[d.length-1].width,h=(n=a.height)!==null&&n!==void 0?n:d[d.length-1].height,g=gm(a,s),x=Math.max(...d.map(C=>C.width)),S=Math.min((g?Math.max:Math.min)(l.width,m*(l.height/h)),x),f=xD(),p=de(()=>{var C;const k=(C=d.find(_=>_.width>=S*f))!==null&&C!==void 0?C:d[d.length-1];(!r||d.findIndex(_=>_.src===r)<d.findIndex(_=>_===k))&&o({type:"fetch",source:k.src})});Cn(p,[l.width,l.height,f,p]);const v=de(C=>o({type:"done",source:C})),w={WebkitTransform:c?"initial":"translateZ(0)"};return g||Object.assign(w,l.width/l.height<m/h?{width:"100%",height:"auto"}:{width:"auto",height:"100%"}),b.createElement(b.Fragment,null,i&&i!==r&&b.createElement(Ul,{key:"preload",...e,offset:void 0,slide:{...a,src:i,srcSet:void 0},style:{position:"absolute",visibility:"hidden",...w},onLoad:()=>v(i),render:{...u,iconLoading:()=>null,iconError:()=>null}}),r&&b.createElement(Ul,{key:"current",...e,slide:{...a,src:r,srcSet:void 0},style:w}))}function IR({render:e,slide:t,offset:n,rect:r}){var i;const[o,a]=b.useState(),l=b.useRef(null),{zoom:s,maxZoom:u,offsetX:c,offsetY:d,setZoomWrapper:m}=wm(),h=s>1,{carousel:g,on:x}=Yt(),{currentIndex:S}=Or();Cn(()=>n===0?(m({zoomWrapperRef:l,imageDimensions:o}),()=>m(void 0)):()=>{},[n,o,m]);let f=(i=e.slide)===null||i===void 0?void 0:i.call(e,{slide:t,offset:n,rect:r,zoom:s,maxZoom:u});if(!f&&ao(t)){const p={slide:t,offset:n,rect:r,render:e,imageFit:g.imageFit,imageProps:g.imageProps,onClick:n===0?()=>{var v;return(v=x.click)===null||v===void 0?void 0:v.call(x,{index:S})}:void 0};f=OR(t)?b.createElement(MR,{...p,slide:t,interactive:h,rect:n===0?{width:r.width*s,height:r.height*s}:r}):b.createElement(Ul,{onLoad:v=>a({width:v.naturalWidth,height:v.naturalHeight}),...p})}return f?b.createElement("div",{ref:l,className:En(oe(uD),oe(lm),oe(RS),h&&oe(dD)),style:n===0?{transform:`scale(${s}) translateX(${c}px) translateY(${d}px)`}:void 0},f):null}const jR=({augment:e,addModule:t})=>{e(({zoom:n,toolbar:r,render:i,controller:o,...a})=>{const l=a_(n);return{zoom:l,toolbar:wD(r,mv,b.createElement(TR,null)),render:{...i,slide:s=>{var u;return ao(s.slide)?b.createElement(IR,{render:i,...s}):(u=i.slide)===null||u===void 0?void 0:u.call(i,s)}},controller:{...o,preventDefaultWheelY:l.scrollToZoom},...a}}),t(Tr(mv,_R))},$R=()=>{const{id:e}=R1(),t=Jh.find(v=>v.id===Number(e)),[n,r]=b.useState(1),[i,o]=b.useState("description"),[a,l]=b.useState(t.image[0]),[s,u]=b.useState(!1),[c,d]=b.useState(0),m=t.image.map(v=>({src:v})),h=()=>{const v=t.image.indexOf(a);d(v),u(!0)},g=to(),S=Fn(v=>v.favorites.items).some(v=>v.id===t.id),f=()=>{g(rc({...t,quantity:n})),te.success(`${t.name} додано в кошик!`)},p=(v,w)=>{w.stopPropagation(),g(sc(v)),S?te.warning(`${v.name} видалено з обраного`):te.info(`${v.name} додано в обране`)};return t?y.jsxs(pv,{children:[" ",y.jsx(Fa,{autoClose:1500}),y.jsxs(D$,{children:[y.jsx($e,{to:"/",children:"Головна"})," / ",y.jsx($e,{to:"/catalog",children:"Каталог"})," /"," ",t.name]}),y.jsxs(R$,{children:[y.jsxs(L$,{children:[y.jsx(A$,{src:a,alt:t.name,onClick:h}),y.jsx(F$,{children:t.image.map(v=>y.jsx(N$,{src:v,onClick:()=>l(v),style:{cursor:"pointer",opacity:a===v?1:.4}},v))})]}),y.jsx(mR,{open:s,close:()=>u(!1),index:c,slides:m,controller:{closeOnBackdropClick:!0},on:{view:({index:v})=>{d(v),l(t.image[v])}},plugins:[jR],zoom:{maxZoomPixelRatio:3,zoomInMultiplier:2,doubleTapDelay:300,doubleClickDelay:300,doubleClickEnabled:!0,pinchZoomDistanceFactor:100,scrollToZoom:!0}}),y.jsxs(z$,{children:[y.jsx(V$,{children:t.name}),y.jsx(B$,{children:y.jsx(U$,{children:"● Новий товар"})}),y.jsxs(H$,{children:[y.jsx(W$,{children:y.jsxs(G$,{children:[t.price.toLocaleString()," грн"]})}),y.jsxs(Y$,{children:[y.jsxs(X$,{children:[y.jsx("button",{onClick:()=>r(Math.max(1,n-1)),children:"-"}),y.jsx("span",{children:n}),y.jsx("button",{onClick:()=>r(n+1),children:"+"})]}),y.jsxs(q$,{onClick:f,children:[" ",y.jsx(Su,{size:25}),y.jsx("span",{children:"В КОШИК"})]}),y.jsxs(nD,{$active:S,onClick:v=>p(t,v),children:[y.jsxs(rD,{$active:S,children:[" ",y.jsx("use",{href:`${un}#icon-heart`})]}),y.jsx("span",{children:"В ОБРАНЕ"})]})]})]}),y.jsxs(Z$,{children:[y.jsxs("p",{children:[y.jsx("strong",{children:"Ваше місто:"})," Київ"]}),y.jsx("p",{children:"🚚 Доставка по Україні (Розрахувати вартість)"})]})]})]}),y.jsxs(Q$,{children:[y.jsxs(J$,{children:[y.jsx(hv,{active:i==="description",onClick:()=>o("description"),children:"Опис"}),y.jsx(hv,{active:i==="attributes",onClick:()=>o("attributes"),children:"Характеристики"})]}),y.jsxs(eD,{children:[i==="description"&&y.jsx(tD,{children:t.description}),i==="attributes"&&y.jsxs(K$,{children:[y.jsxs(gs,{children:[y.jsx("span",{children:"Розміри, мм"})," ",y.jsx("b",{children:t.size||""})]}),y.jsxs(gs,{children:[y.jsx("span",{children:"Тип"})," ",y.jsx("b",{children:t.type||""})]}),y.jsxs(gs,{children:[y.jsx("span",{children:"Колір"})," ",y.jsx("b",{children:t.color||""})]}),y.jsxs(gs,{children:[y.jsx("span",{children:"Колір"})," ",y.jsx("b",{children:t.color||""})]})]})]})]})]}):y.jsx(pv,{children:"Товар не знайдено"})},DR=T.div`
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

  
`,RR=T.nav`
  font-family: var(--main-font);
  font-size: 14px;
  color: #8c8c8c;
  margin-bottom: 15px;
`,LR=T.h1`
  font-size:24px;
 
  font-weight: 800;
  margin-bottom: 20px;
  @media screen and (min-width: 768px) {
  font-size:30px;
  }
  
`,AR=T.div`
  display: flex;
  flex-direction: column;
  gap: 20px; 
  width: 100%;
  
  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between; 
  }
`,FR=T.div`
  flex: 1; 
  width: 100%;
  border: 1px solid #eee;
  border-radius: 12px;
`,NR=T.div`
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
`,zR=T.img`
  width: 100%;
  height: auto;
  border-radius: 4px;
`,VR=T.div`
  h3 {
    font-size: 16px;
    font-weight: 300;
    margin: 0;
    line-height: 1.4;
  }
`,BR=T.div`

  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  gap: 30px;
`,UR=T.div`

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
`;const HR=T.div`
  text-align: right;
 
`,WR=T.button`
  background: 'none';
  border: 'none';
  cursor: 'pointer';
  color: '#ccc';
`,GR=T.button`
  background: 'none';
  border: 'none';
  cursor: 'pointer';
  color: '#ccc';
`,YR=T.div`

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
`,XR=T.div`
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
`,qR=T($e)`
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
`,KR=T.button`
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
`;const ZR=T.div`
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
`,eL=T.h2`
  font-size: 28px;
  color: #333;
  margin-bottom: 10px;
`,tL=T.p`
  font-size: 18px;
  color: #666;
  margin-bottom: 40px;
`,nL=T.button`
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
`,rL=()=>y.jsxs(y.Fragment,{children:[y.jsx(ZR,{children:"Головна / Кошик"}),y.jsxs(QR,{children:[y.jsx(JR,{src:"/Didiv/empty-cart.png",alt:"Порожній кошик"}),y.jsx(eL,{children:"Ваш кошик порожній"}),y.jsx(tL,{children:"Ви ще не додали жодного товару в кошик"}),y.jsx(nL,{onClick:()=>window.location.href="/Didiv/catalog",children:"Перейти до покупок"})]})]}),iL=T.div`
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
`,oL=({item:e})=>{const t=to();return y.jsxs(iL,{children:[y.jsx("button",{onClick:()=>t(Xj(e.id)),children:"-"}),y.jsx("span",{children:e.quantity}),y.jsx("button",{onClick:()=>t(Yj(e.id)),children:"+"})]})},aL=()=>{const e=to(),[t,n]=b.useState([]),r=Fn(d=>d.cart.items),i=r.reduce((d,m)=>d+m.price*(m.quantity||1),0),o=Fn(d=>d.cart.items),a=Fn(d=>d.favorites.items);console.log(a);const l=o.length===0,s=(d,m)=>{m.stopPropagation(),console.log(d);const h=a.some(g=>g.id===d.id);e(sc(d)),h?te.warning(`${d.name} видалено з обраного`):te.info(`${d.name} додано в обране`)},u=d=>{n(m=>[...m,d.id]),setTimeout(()=>{e(Hj(d)),n(m=>m.filter(h=>h!==d.id))},300)},c=()=>{e(Wj())};return y.jsx(y.Fragment,{children:l?y.jsx(rL,{}):y.jsxs(DR,{children:[y.jsx(Fa,{autoClose:1500}),y.jsxs(RR,{children:[" ",y.jsx($e,{to:"/",style:{color:"inherit",textDecoration:"none"},children:"Головна"})," ","/"," ",y.jsx($e,{to:"/cart",style:{color:"inherit",textDecoration:"none"},children:"Кошик"})]}),y.jsx(LR,{children:"Кошик"}),y.jsxs(AR,{children:[y.jsx(FR,{children:r.map((d,m)=>{var g;const h=a.some(x=>x.id===d.id);return y.jsxs(NR,{className:t.includes(d.id)?"removing":"",children:[y.jsx(zR,{src:((g=d.image)==null?void 0:g[0])||Yn,alt:d.name,onError:x=>{x.currentTarget.onerror=null,x.currentTarget.src=Yn}}),y.jsx(VR,{children:y.jsx("h3",{children:d.name})}),y.jsxs(BR,{children:[y.jsx(oL,{item:{...d,quantity:d.quantity||1}}),y.jsx(HR,{children:y.jsxs("div",{className:"current-price",children:[(d.price*(d.quantity||1)).toLocaleString()," грн"]})})]}),y.jsxs(UR,{children:[y.jsx(GR,{onClick:x=>s(d,x),style:{background:"none",border:"none",cursor:"pointer",color:"#ccc"},children:y.jsx(xb,{size:22,fill:h?"#ff4d4f":"none",color:h?"#ff4d4f":"#999"})}),y.jsx(WR,{onClick:()=>u(d),style:{background:"none",border:"none",cursor:"pointer",color:"#000000"},children:y.jsx(wb,{size:22})})]})]},`${d.id}-${m}`)})}),y.jsxs(YR,{children:[y.jsxs(XR,{children:[y.jsx("span",{children:"Всього в обраному:"}),y.jsxs("strong",{children:[a.length," шт."]}),y.jsx("span",{children:"На суму:"}),y.jsxs("strong",{children:[i," грн"]})]}),y.jsx(qR,{to:"/checkout",children:"Оформити замовлення"}),y.jsx(KR,{onClick:c,children:"Oчистити кошик"})]})]})]})})},sL=T.div`
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

  
  
`,lL=T.nav`
  font-family: var(--main-font);
  font-size: 14px;
  color: #8c8c8c;
  margin-bottom: 15px;
`,uL=T.h1`
color: var(--black-color);
 font-family: var(--main-font);
  font-size: 30px;
  font-weight: 800;
  margin-bottom: 32px;
`,cL=T.div`
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
`,dL=T.div`
   flex: 1; 
  width: 100%;
  border: 1px solid #eee;
  border-radius: 12px;
`,fL=T.div`
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
`;const pL=T.img`
   width: 100%;
  height: auto;
  border-radius: 4px;
`,hL=T.h3`
 font-size: 20px;
    font-weight: 300;
    margin: 0;
    line-height: 1.4;
    @media screen and (max-width: 768px) {
    border-bottom: 1px solid #eee;
    padding-bottom:10px;
  }
    
`,mL=T.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
   @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`,gL=T.p`
  font-size: 17px;
  font-weight: 500;
  white-space: nowrap;
`,vL=T.div`
  display: flex;
  gap: 16px;
`,Iv=T.button`
  background: none;
  border: none;
  cursor: pointer;
  color: #1a1a1a;
  padding: 8px;
  
`,yL=T.div`
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
`,xL=T.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  font-size: 15px;
  color: #555;
`,bL=T.button`
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
`,wL=T.button`
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
`,SL=T.div`
  padding: 20px 40px;
  font-size: 14px;
  color: #8c8c8c;
  background-color: #fdfaf7;
`,_L=T.div`
   
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
`;const EL=T.img`
  width: 250px;
  height: auto;
  margin-bottom: 30px;
`;T.h2`
  font-size: 28px;
  color: #333;
  margin-bottom: 10px;
`;const CL=T.p`
  font-size: 18px;
  color: #666;
  margin-bottom: 40px;
`,kL=T.button`
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
`,TL=()=>y.jsxs(y.Fragment,{children:[y.jsx(SL,{children:"Головна / Обране"}),y.jsxs(_L,{children:[y.jsx(EL,{src:"/Didiv/sad.png",alt:"Порожній кошик"}),y.jsx(CL,{children:"Ви ще не додали жодного товару в обране"}),y.jsx(kL,{onClick:()=>window.location.href="/Didiv/catalog",children:"Перейти до вибору"})]})]}),OL=()=>{const e=to(),t=Fn(c=>c.favorites.items),[n,r]=b.useState([]),i=c=>{e(rc(c)),te.success(`${c.name} додано в кошик!`)},o=()=>{e(Gj(t)),te.success("Товари додано в кошик!")};console.log(t);const a=t.reduce((c,d)=>c+d.price,0),l=(c,d)=>{d.stopPropagation();const m=t.some(h=>h.id===c.id);r(h=>[...h,c.id]),setTimeout(()=>{e(sc(c)),r(h=>h.filter(g=>g!==c.id))},300),m?te.warning(`${c.name} видалено з обраного`):te.info(`${c.name} додано в обране`)},s=()=>{e(M$())},u=t.length===0;return y.jsx(y.Fragment,{children:u?y.jsx(TL,{}):y.jsxs(sL,{children:[y.jsx(Fa,{autoClose:1500}),y.jsxs(lL,{children:[" ",y.jsx($e,{to:"/",style:{color:"inherit",textDecoration:"none"},children:"Головна"})," ","/"," ",y.jsx($e,{to:"/favorite",style:{color:"inherit",textDecoration:"none"},children:"Обране"})]}),y.jsx(uL,{children:"Обране"}),y.jsxs(cL,{children:[y.jsx(dL,{children:t.map(c=>{var d;return y.jsxs(fL,{className:n.includes(c.id)?"removing":"",children:[y.jsx(pL,{src:((d=c.image)==null?void 0:d[0])||Yn,alt:c.name,onError:m=>{m.currentTarget.onerror=null,m.currentTarget.src=Yn}}),y.jsx(hL,{children:c.name}),y.jsxs(mL,{children:[y.jsxs(gL,{children:[c.price," грн"]}),y.jsxs(vL,{children:[y.jsx(Iv,{onClick:()=>i(c),children:y.jsx(Su,{size:30})}),y.jsx(Iv,{onClick:m=>l(c,m),children:y.jsx(wb,{size:30})})]})]})]},c.id)})}),y.jsxs(yL,{children:[y.jsxs(xL,{children:[y.jsx("span",{children:"Всього в обраному:"}),y.jsxs("strong",{children:[t.length," шт."]}),y.jsx("span",{children:"На суму:"}),y.jsxs("strong",{children:[a," грн"]})]}),y.jsx("hr",{style:{border:"0",borderTop:"1px solid #eee",margin:"20px 0"}}),y.jsx(bL,{onClick:()=>o(),children:"Додати все до кошика"}),y.jsx(wL,{onClick:s,children:"Очистити обрані"})]})]})]})})},PL=T.div`
  background-color: #fdfaf7;
  min-height: 80vh;
  padding-bottom: 60px;
`,ML=T.div`
  padding: 15px 20px;
  font-size: 12px;
  color: #8c8c8c;

  @media screen and (min-width: 768px) {
    padding: 20px 40px;
    font-size: 14px;
  }
`,IL=T.article`
  max-width: 800px; // Обмежуємо ширину для зручного читання тексту
  margin: 0 auto;
  padding: 0 20px;

  @media screen and (min-width: 768px) {
    padding: 0 40px;
  }
`,jL=T.h1`
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
`;const $L=({title:e,children:t,breadcrumbPath:n})=>y.jsxs(PL,{children:[y.jsxs(ML,{children:["Головна / ",n]}),y.jsxs(IL,{children:[y.jsx(jL,{children:e}),t]})]}),jv=T.section`
  margin-bottom: 30px;

  @media screen and (min-width: 768px) {
    margin-bottom: 40px;
  }
`,$v=T.h2`
  font-size: 20px;
  color: #4a332a;
  margin-bottom: 15px;
  font-weight: 600;

  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`,Dv=T.p`
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
`,DL=()=>y.jsxs($L,{title:"Оплата і доставка",breadcrumbPath:"Доставка",children:[y.jsxs(jv,{children:[y.jsx($v,{children:"Способи доставки"}),y.jsx(Dv,{children:"Ми доставляємо замовлення по всій Україні за допомогою:"}),y.jsxs(Rv,{children:[y.jsx("li",{children:"Нова Пошта (у відділення або кур1єром)"}),y.jsx("li",{children:"Самовивіз з нашого магазину"}),y.jsx("li",{children:"Укрпошта"})]})]}),y.jsxs(jv,{children:[y.jsx($v,{children:"Варіанти оплати"}),y.jsx(Dv,{children:"Ви можете обрати зручний для вас спосіб оплати:"}),y.jsxs(Rv,{children:[y.jsx("li",{children:"Оплата карткою на сайті (Visa/Mastercard)"}),y.jsx("li",{children:"Післяплата (накладений платіж) при отриманні"}),y.jsx("li",{children:"Безготівковий розрахунок"})]})]})]});function Qr(e){"@babel/helpers - typeof";return Qr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Qr(e)}function RL(e,t){if(Qr(e)!=="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(Qr(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function l_(e){var t=RL(e,"string");return Qr(t)==="symbol"?t:String(t)}function Do(e,t,n){return t=l_(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Lv(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function X(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Lv(Object(n),!0).forEach(function(r){Do(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Lv(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function LL(e){if(Array.isArray(e))return e}function AL(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,i,o,a,l=[],s=!0,u=!1;try{if(o=(n=n.call(e)).next,t===0){if(Object(n)!==n)return;s=!1}else for(;!(s=(r=o.call(n)).done)&&(l.push(r.value),l.length!==t);s=!0);}catch(c){u=!0,i=c}finally{try{if(!s&&n.return!=null&&(a=n.return(),Object(a)!==a))return}finally{if(u)throw i}}return l}}function Sp(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function u_(e,t){if(e){if(typeof e=="string")return Sp(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Sp(e,t)}}function FL(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function zn(e,t){return LL(e)||AL(e,t)||u_(e,t)||FL()}function NL(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function Jn(e,t){if(e==null)return{};var n=NL(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var zL=["defaultInputValue","defaultMenuIsOpen","defaultValue","inputValue","menuIsOpen","onChange","onInputChange","onMenuClose","onMenuOpen","value"];function VL(e){var t=e.defaultInputValue,n=t===void 0?"":t,r=e.defaultMenuIsOpen,i=r===void 0?!1:r,o=e.defaultValue,a=o===void 0?null:o,l=e.inputValue,s=e.menuIsOpen,u=e.onChange,c=e.onInputChange,d=e.onMenuClose,m=e.onMenuOpen,h=e.value,g=Jn(e,zL),x=b.useState(l!==void 0?l:n),S=zn(x,2),f=S[0],p=S[1],v=b.useState(s!==void 0?s:i),w=zn(v,2),C=w[0],k=w[1],_=b.useState(h!==void 0?h:a),E=zn(_,2),M=E[0],I=E[1],$=b.useCallback(function(O,D){typeof u=="function"&&u(O,D),I(O)},[u]),P=b.useCallback(function(O,D){var N;typeof c=="function"&&(N=c(O,D)),p(N!==void 0?N:O)},[c]),j=b.useCallback(function(){typeof m=="function"&&m(),k(!0)},[m]),L=b.useCallback(function(){typeof d=="function"&&d(),k(!1)},[d]),R=l!==void 0?l:f,F=s!==void 0?s:C,A=h!==void 0?h:M;return X(X({},g),{},{inputValue:R,menuIsOpen:F,onChange:$,onInputChange:P,onMenuClose:L,onMenuOpen:j,value:A})}function BL(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Av(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,l_(r.key),r)}}function UL(e,t,n){return t&&Av(e.prototype,t),n&&Av(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function _p(e,t){return _p=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},_p(e,t)}function HL(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&_p(e,t)}function Hl(e){return Hl=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},Hl(e)}function WL(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function GL(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function YL(e,t){if(t&&(Qr(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return GL(e)}function XL(e){var t=WL();return function(){var r=Hl(e),i;if(t){var o=Hl(this).constructor;i=Reflect.construct(r,arguments,o)}else i=r.apply(this,arguments);return YL(this,i)}}function qL(e){if(Array.isArray(e))return Sp(e)}function KL(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function ZL(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Sm(e){return qL(e)||KL(e)||u_(e)||ZL()}function QL(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}const JL=Math.min,eA=Math.max,Wl=Math.round,vs=Math.floor,Gl=e=>({x:e,y:e});function tA(e){const{x:t,y:n,width:r,height:i}=e;return{width:r,height:i,top:n,left:t,right:t+r,bottom:n+i,x:t,y:n}}function pc(){return typeof window<"u"}function c_(e){return f_(e)?(e.nodeName||"").toLowerCase():"#document"}function sn(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function d_(e){var t;return(t=(f_(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function f_(e){return pc()?e instanceof Node||e instanceof sn(e).Node:!1}function Ep(e){return pc()?e instanceof Element||e instanceof sn(e).Element:!1}function _m(e){return pc()?e instanceof HTMLElement||e instanceof sn(e).HTMLElement:!1}function Fv(e){return!pc()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof sn(e).ShadowRoot}function p_(e){const{overflow:t,overflowX:n,overflowY:r,display:i}=Em(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&i!=="inline"&&i!=="contents"}let kd;function nA(){return kd==null&&(kd=typeof CSS<"u"&&CSS.supports&&CSS.supports("-webkit-backdrop-filter","none")),kd}function rA(e){return/^(html|body|#document)$/.test(c_(e))}function Em(e){return sn(e).getComputedStyle(e)}function iA(e){if(c_(e)==="html")return e;const t=e.assignedSlot||e.parentNode||Fv(e)&&e.host||d_(e);return Fv(t)?t.host:t}function h_(e){const t=iA(e);return rA(t)?e.ownerDocument?e.ownerDocument.body:e.body:_m(t)&&p_(t)?t:h_(t)}function Yl(e,t,n){var r;t===void 0&&(t=[]),n===void 0&&(n=!0);const i=h_(e),o=i===((r=e.ownerDocument)==null?void 0:r.body),a=sn(i);if(o){const l=Cp(a);return t.concat(a,a.visualViewport||[],p_(i)?i:[],l&&n?Yl(l):[])}else return t.concat(i,Yl(i,[],n))}function Cp(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function oA(e){const t=Em(e);let n=parseFloat(t.width)||0,r=parseFloat(t.height)||0;const i=_m(e),o=i?e.offsetWidth:n,a=i?e.offsetHeight:r,l=Wl(n)!==o||Wl(r)!==a;return l&&(n=o,r=a),{width:n,height:r,$:l}}function Cm(e){return Ep(e)?e:e.contextElement}function Td(e){const t=Cm(e);if(!_m(t))return Gl(1);const n=t.getBoundingClientRect(),{width:r,height:i,$:o}=oA(t);let a=(o?Wl(n.width):n.width)/r,l=(o?Wl(n.height):n.height)/i;return(!a||!Number.isFinite(a))&&(a=1),(!l||!Number.isFinite(l))&&(l=1),{x:a,y:l}}const aA=Gl(0);function sA(e){const t=sn(e);return!nA()||!t.visualViewport?aA:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function lA(e,t,n){return t===void 0&&(t=!1),!n||t&&n!==sn(e)?!1:t}function Nv(e,t,n,r){t===void 0&&(t=!1),n===void 0&&(n=!1);const i=e.getBoundingClientRect(),o=Cm(e);let a=Gl(1);t&&(r?Ep(r)&&(a=Td(r)):a=Td(e));const l=lA(o,n,r)?sA(o):Gl(0);let s=(i.left+l.x)/a.x,u=(i.top+l.y)/a.y,c=i.width/a.x,d=i.height/a.y;if(o){const m=sn(o),h=r&&Ep(r)?sn(r):r;let g=m,x=Cp(g);for(;x&&r&&h!==g;){const S=Td(x),f=x.getBoundingClientRect(),p=Em(x),v=f.left+(x.clientLeft+parseFloat(p.paddingLeft))*S.x,w=f.top+(x.clientTop+parseFloat(p.paddingTop))*S.y;s*=S.x,u*=S.y,c*=S.x,d*=S.y,s+=v,u+=w,g=sn(x),x=Cp(g)}}return tA({width:c,height:d,x:s,y:u})}function m_(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function uA(e,t){let n=null,r;const i=d_(e);function o(){var l;clearTimeout(r),(l=n)==null||l.disconnect(),n=null}function a(l,s){l===void 0&&(l=!1),s===void 0&&(s=1),o();const u=e.getBoundingClientRect(),{left:c,top:d,width:m,height:h}=u;if(l||t(),!m||!h)return;const g=vs(d),x=vs(i.clientWidth-(c+m)),S=vs(i.clientHeight-(d+h)),f=vs(c),v={rootMargin:-g+"px "+-x+"px "+-S+"px "+-f+"px",threshold:eA(0,JL(1,s))||1};let w=!0;function C(k){const _=k[0].intersectionRatio;if(_!==s){if(!w)return a();_?a(!1,_):r=setTimeout(()=>{a(!1,1e-7)},1e3)}_===1&&!m_(u,e.getBoundingClientRect())&&a(),w=!1}try{n=new IntersectionObserver(C,{...v,root:i.ownerDocument})}catch{n=new IntersectionObserver(C,v)}n.observe(e)}return a(!0),o}function cA(e,t,n,r){r===void 0&&(r={});const{ancestorScroll:i=!0,ancestorResize:o=!0,elementResize:a=typeof ResizeObserver=="function",layoutShift:l=typeof IntersectionObserver=="function",animationFrame:s=!1}=r,u=Cm(e),c=i||o?[...u?Yl(u):[],...t?Yl(t):[]]:[];c.forEach(f=>{i&&f.addEventListener("scroll",n,{passive:!0}),o&&f.addEventListener("resize",n)});const d=u&&l?uA(u,n):null;let m=-1,h=null;a&&(h=new ResizeObserver(f=>{let[p]=f;p&&p.target===u&&h&&t&&(h.unobserve(t),cancelAnimationFrame(m),m=requestAnimationFrame(()=>{var v;(v=h)==null||v.observe(t)})),n()}),u&&!s&&h.observe(u),t&&h.observe(t));let g,x=s?Nv(e):null;s&&S();function S(){const f=Nv(e);x&&!m_(x,f)&&n(),x=f,g=requestAnimationFrame(S)}return n(),()=>{var f;c.forEach(p=>{i&&p.removeEventListener("scroll",n),o&&p.removeEventListener("resize",n)}),d==null||d(),(f=h)==null||f.disconnect(),h=null,s&&cancelAnimationFrame(g)}}var kp=b.useLayoutEffect,dA=["className","clearValue","cx","getStyles","getClassNames","getValue","hasValue","isMulti","isRtl","options","selectOption","selectProps","setValue","theme"],Xl=function(){};function fA(e,t){return t?t[0]==="-"?e+t:e+"__"+t:e}function pA(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var o=[].concat(r);if(t&&e)for(var a in t)t.hasOwnProperty(a)&&t[a]&&o.push("".concat(fA(e,a)));return o.filter(function(l){return l}).map(function(l){return String(l).trim()}).join(" ")}var zv=function(t){return SA(t)?t.filter(Boolean):Qr(t)==="object"&&t!==null?[t]:[]},g_=function(t){t.className,t.clearValue,t.cx,t.getStyles,t.getClassNames,t.getValue,t.hasValue,t.isMulti,t.isRtl,t.options,t.selectOption,t.selectProps,t.setValue,t.theme;var n=Jn(t,dA);return X({},n)},ke=function(t,n,r){var i=t.cx,o=t.getStyles,a=t.getClassNames,l=t.className;return{css:o(n,t),className:i(r??{},a(n,t),l)}};function hc(e){return[document.documentElement,document.body,window].indexOf(e)>-1}function hA(e){return hc(e)?window.innerHeight:e.clientHeight}function v_(e){return hc(e)?window.pageYOffset:e.scrollTop}function ql(e,t){if(hc(e)){window.scrollTo(0,t);return}e.scrollTop=t}function mA(e){var t=getComputedStyle(e),n=t.position==="absolute",r=/(auto|scroll)/;if(t.position==="fixed")return document.documentElement;for(var i=e;i=i.parentElement;)if(t=getComputedStyle(i),!(n&&t.position==="static")&&r.test(t.overflow+t.overflowY+t.overflowX))return i;return document.documentElement}function gA(e,t,n,r){return n*((e=e/r-1)*e*e+1)+t}function ys(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:200,r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:Xl,i=v_(e),o=t-i,a=10,l=0;function s(){l+=a;var u=gA(l,i,o,n);ql(e,u),l<n?window.requestAnimationFrame(s):r(e)}s()}function Vv(e,t){var n=e.getBoundingClientRect(),r=t.getBoundingClientRect(),i=t.offsetHeight/3;r.bottom+i>n.bottom?ql(e,Math.min(t.offsetTop+t.clientHeight-e.offsetHeight+i,e.scrollHeight)):r.top-i<n.top&&ql(e,Math.max(t.offsetTop-i,0))}function vA(e){var t=e.getBoundingClientRect();return{bottom:t.bottom,height:t.height,left:t.left,right:t.right,top:t.top,width:t.width}}function Bv(){try{return document.createEvent("TouchEvent"),!0}catch{return!1}}function yA(){try{return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}catch{return!1}}var y_=!1,xA={get passive(){return y_=!0}},xs=typeof window<"u"?window:{};xs.addEventListener&&xs.removeEventListener&&(xs.addEventListener("p",Xl,xA),xs.removeEventListener("p",Xl,!1));var bA=y_;function wA(e){return e!=null}function SA(e){return Array.isArray(e)}function bs(e,t,n){return e?t:n}var _A=function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];var o=Object.entries(t).filter(function(a){var l=zn(a,1),s=l[0];return!r.includes(s)});return o.reduce(function(a,l){var s=zn(l,2),u=s[0],c=s[1];return a[u]=c,a},{})},EA=["children","innerProps"],CA=["children","innerProps"];function kA(e){var t=e.maxHeight,n=e.menuEl,r=e.minHeight,i=e.placement,o=e.shouldScroll,a=e.isFixedPosition,l=e.controlHeight,s=mA(n),u={placement:"bottom",maxHeight:t};if(!n||!n.offsetParent)return u;var c=s.getBoundingClientRect(),d=c.height,m=n.getBoundingClientRect(),h=m.bottom,g=m.height,x=m.top,S=n.offsetParent.getBoundingClientRect(),f=S.top,p=a?window.innerHeight:hA(s),v=v_(s),w=parseInt(getComputedStyle(n).marginBottom,10),C=parseInt(getComputedStyle(n).marginTop,10),k=f-C,_=p-x,E=k+v,M=d-v-x,I=h-p+v+w,$=v+x-C,P=160;switch(i){case"auto":case"bottom":if(_>=g)return{placement:"bottom",maxHeight:t};if(M>=g&&!a)return o&&ys(s,I,P),{placement:"bottom",maxHeight:t};if(!a&&M>=r||a&&_>=r){o&&ys(s,I,P);var j=a?_-w:M-w;return{placement:"bottom",maxHeight:j}}if(i==="auto"||a){var L=t,R=a?k:E;return R>=r&&(L=Math.min(R-w-l,t)),{placement:"top",maxHeight:L}}if(i==="bottom")return o&&ql(s,I),{placement:"bottom",maxHeight:t};break;case"top":if(k>=g)return{placement:"top",maxHeight:t};if(E>=g&&!a)return o&&ys(s,$,P),{placement:"top",maxHeight:t};if(!a&&E>=r||a&&k>=r){var F=t;return(!a&&E>=r||a&&k>=r)&&(F=a?k-C:E-C),o&&ys(s,$,P),{placement:"top",maxHeight:F}}return{placement:"bottom",maxHeight:t};default:throw new Error('Invalid placement provided "'.concat(i,'".'))}return u}function TA(e){var t={bottom:"top",top:"bottom"};return e?t[e]:"bottom"}var x_=function(t){return t==="auto"?"bottom":t},OA=function(t,n){var r,i=t.placement,o=t.theme,a=o.borderRadius,l=o.spacing,s=o.colors;return X((r={label:"menu"},Do(r,TA(i),"100%"),Do(r,"position","absolute"),Do(r,"width","100%"),Do(r,"zIndex",1),r),n?{}:{backgroundColor:s.neutral0,borderRadius:a,boxShadow:"0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)",marginBottom:l.menuGutter,marginTop:l.menuGutter})},b_=b.createContext(null),PA=function(t){var n=t.children,r=t.minMenuHeight,i=t.maxMenuHeight,o=t.menuPlacement,a=t.menuPosition,l=t.menuShouldScrollIntoView,s=t.theme,u=b.useContext(b_)||{},c=u.setPortalPlacement,d=b.useRef(null),m=b.useState(i),h=zn(m,2),g=h[0],x=h[1],S=b.useState(null),f=zn(S,2),p=f[0],v=f[1],w=s.spacing.controlHeight;return kp(function(){var C=d.current;if(C){var k=a==="fixed",_=l&&!k,E=kA({maxHeight:i,menuEl:C,minHeight:r,placement:o,shouldScroll:_,isFixedPosition:k,controlHeight:w});x(E.maxHeight),v(E.placement),c==null||c(E.placement)}},[i,o,a,l,r,c,w]),n({ref:d,placerProps:X(X({},t),{},{placement:p||x_(o),maxHeight:g})})},MA=function(t){var n=t.children,r=t.innerRef,i=t.innerProps;return Y("div",q({},ke(t,"menu",{menu:!0}),{ref:r},i),n)},IA=MA,jA=function(t,n){var r=t.maxHeight,i=t.theme.spacing.baseUnit;return X({maxHeight:r,overflowY:"auto",position:"relative",WebkitOverflowScrolling:"touch"},n?{}:{paddingBottom:i,paddingTop:i})},$A=function(t){var n=t.children,r=t.innerProps,i=t.innerRef,o=t.isMulti;return Y("div",q({},ke(t,"menuList",{"menu-list":!0,"menu-list--is-multi":o}),{ref:i},r),n)},w_=function(t,n){var r=t.theme,i=r.spacing.baseUnit,o=r.colors;return X({textAlign:"center"},n?{}:{color:o.neutral40,padding:"".concat(i*2,"px ").concat(i*3,"px")})},DA=w_,RA=w_,LA=function(t){var n=t.children,r=n===void 0?"No options":n,i=t.innerProps,o=Jn(t,EA);return Y("div",q({},ke(X(X({},o),{},{children:r,innerProps:i}),"noOptionsMessage",{"menu-notice":!0,"menu-notice--no-options":!0}),i),r)},AA=function(t){var n=t.children,r=n===void 0?"Loading...":n,i=t.innerProps,o=Jn(t,CA);return Y("div",q({},ke(X(X({},o),{},{children:r,innerProps:i}),"loadingMessage",{"menu-notice":!0,"menu-notice--loading":!0}),i),r)},FA=function(t){var n=t.rect,r=t.offset,i=t.position;return{left:n.left,position:i,top:r,width:n.width,zIndex:1}},NA=function(t){var n=t.appendTo,r=t.children,i=t.controlElement,o=t.innerProps,a=t.menuPlacement,l=t.menuPosition,s=b.useRef(null),u=b.useRef(null),c=b.useState(x_(a)),d=zn(c,2),m=d[0],h=d[1],g=b.useMemo(function(){return{setPortalPlacement:h}},[]),x=b.useState(null),S=zn(x,2),f=S[0],p=S[1],v=b.useCallback(function(){if(i){var _=vA(i),E=l==="fixed"?0:window.pageYOffset,M=_[m]+E;(M!==(f==null?void 0:f.offset)||_.left!==(f==null?void 0:f.rect.left)||_.width!==(f==null?void 0:f.rect.width))&&p({offset:M,rect:_})}},[i,l,m,f==null?void 0:f.offset,f==null?void 0:f.rect.left,f==null?void 0:f.rect.width]);kp(function(){v()},[v]);var w=b.useCallback(function(){typeof u.current=="function"&&(u.current(),u.current=null),i&&s.current&&(u.current=cA(i,s.current,v,{elementResize:"ResizeObserver"in window}))},[i,v]);kp(function(){w()},[w]);var C=b.useCallback(function(_){s.current=_,w()},[w]);if(!n&&l!=="fixed"||!f)return null;var k=Y("div",q({ref:C},ke(X(X({},t),{},{offset:f.offset,position:l,rect:f.rect}),"menuPortal",{"menu-portal":!0}),o),r);return Y(b_.Provider,{value:g},n?gu.createPortal(k,n):k)},zA=function(t){var n=t.isDisabled,r=t.isRtl;return{label:"container",direction:r?"rtl":void 0,pointerEvents:n?"none":void 0,position:"relative"}},VA=function(t){var n=t.children,r=t.innerProps,i=t.isDisabled,o=t.isRtl;return Y("div",q({},ke(t,"container",{"--is-disabled":i,"--is-rtl":o}),r),n)},BA=function(t,n){var r=t.theme.spacing,i=t.isMulti,o=t.hasValue,a=t.selectProps.controlShouldRenderValue;return X({alignItems:"center",display:i&&o&&a?"flex":"grid",flex:1,flexWrap:"wrap",WebkitOverflowScrolling:"touch",position:"relative",overflow:"hidden"},n?{}:{padding:"".concat(r.baseUnit/2,"px ").concat(r.baseUnit*2,"px")})},UA=function(t){var n=t.children,r=t.innerProps,i=t.isMulti,o=t.hasValue;return Y("div",q({},ke(t,"valueContainer",{"value-container":!0,"value-container--is-multi":i,"value-container--has-value":o}),r),n)},HA=function(){return{alignItems:"center",alignSelf:"stretch",display:"flex",flexShrink:0}},WA=function(t){var n=t.children,r=t.innerProps;return Y("div",q({},ke(t,"indicatorsContainer",{indicators:!0}),r),n)},Uv,GA=["size"],YA=["innerProps","isRtl","size"],XA={name:"8mmkcg",styles:"display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0"},S_=function(t){var n=t.size,r=Jn(t,GA);return Y("svg",q({height:n,width:n,viewBox:"0 0 20 20","aria-hidden":"true",focusable:"false",css:XA},r))},km=function(t){return Y(S_,q({size:20},t),Y("path",{d:"M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"}))},__=function(t){return Y(S_,q({size:20},t),Y("path",{d:"M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"}))},E_=function(t,n){var r=t.isFocused,i=t.theme,o=i.spacing.baseUnit,a=i.colors;return X({label:"indicatorContainer",display:"flex",transition:"color 150ms"},n?{}:{color:r?a.neutral60:a.neutral20,padding:o*2,":hover":{color:r?a.neutral80:a.neutral40}})},qA=E_,KA=function(t){var n=t.children,r=t.innerProps;return Y("div",q({},ke(t,"dropdownIndicator",{indicator:!0,"dropdown-indicator":!0}),r),n||Y(__,null))},ZA=E_,QA=function(t){var n=t.children,r=t.innerProps;return Y("div",q({},ke(t,"clearIndicator",{indicator:!0,"clear-indicator":!0}),r),n||Y(km,null))},JA=function(t,n){var r=t.isDisabled,i=t.theme,o=i.spacing.baseUnit,a=i.colors;return X({label:"indicatorSeparator",alignSelf:"stretch",width:1},n?{}:{backgroundColor:r?a.neutral10:a.neutral20,marginBottom:o*2,marginTop:o*2})},e6=function(t){var n=t.innerProps;return Y("span",q({},n,ke(t,"indicatorSeparator",{"indicator-separator":!0})))},t6=XP(Uv||(Uv=QL([`
  0%, 80%, 100% { opacity: 0; }
  40% { opacity: 1; }
`]))),n6=function(t,n){var r=t.isFocused,i=t.size,o=t.theme,a=o.colors,l=o.spacing.baseUnit;return X({label:"loadingIndicator",display:"flex",transition:"color 150ms",alignSelf:"center",fontSize:i,lineHeight:1,marginRight:i,textAlign:"center",verticalAlign:"middle"},n?{}:{color:r?a.neutral60:a.neutral20,padding:l*2})},Od=function(t){var n=t.delay,r=t.offset;return Y("span",{css:Wh({animation:"".concat(t6," 1s ease-in-out ").concat(n,"ms infinite;"),backgroundColor:"currentColor",borderRadius:"1em",display:"inline-block",marginLeft:r?"1em":void 0,height:"1em",verticalAlign:"top",width:"1em"},"","")})},r6=function(t){var n=t.innerProps,r=t.isRtl,i=t.size,o=i===void 0?4:i,a=Jn(t,YA);return Y("div",q({},ke(X(X({},a),{},{innerProps:n,isRtl:r,size:o}),"loadingIndicator",{indicator:!0,"loading-indicator":!0}),n),Y(Od,{delay:0,offset:r}),Y(Od,{delay:160,offset:!0}),Y(Od,{delay:320,offset:!r}))},i6=function(t,n){var r=t.isDisabled,i=t.isFocused,o=t.theme,a=o.colors,l=o.borderRadius,s=o.spacing;return X({label:"control",alignItems:"center",cursor:"default",display:"flex",flexWrap:"wrap",justifyContent:"space-between",minHeight:s.controlHeight,outline:"0 !important",position:"relative",transition:"all 100ms"},n?{}:{backgroundColor:r?a.neutral5:a.neutral0,borderColor:r?a.neutral10:i?a.primary:a.neutral20,borderRadius:l,borderStyle:"solid",borderWidth:1,boxShadow:i?"0 0 0 1px ".concat(a.primary):void 0,"&:hover":{borderColor:i?a.primary:a.neutral30}})},o6=function(t){var n=t.children,r=t.isDisabled,i=t.isFocused,o=t.innerRef,a=t.innerProps,l=t.menuIsOpen;return Y("div",q({ref:o},ke(t,"control",{control:!0,"control--is-disabled":r,"control--is-focused":i,"control--menu-is-open":l}),a,{"aria-disabled":r||void 0}),n)},a6=o6,s6=["data"],l6=function(t,n){var r=t.theme.spacing;return n?{}:{paddingBottom:r.baseUnit*2,paddingTop:r.baseUnit*2}},u6=function(t){var n=t.children,r=t.cx,i=t.getStyles,o=t.getClassNames,a=t.Heading,l=t.headingProps,s=t.innerProps,u=t.label,c=t.theme,d=t.selectProps;return Y("div",q({},ke(t,"group",{group:!0}),s),Y(a,q({},l,{selectProps:d,theme:c,getStyles:i,getClassNames:o,cx:r}),u),Y("div",null,n))},c6=function(t,n){var r=t.theme,i=r.colors,o=r.spacing;return X({label:"group",cursor:"default",display:"block"},n?{}:{color:i.neutral40,fontSize:"75%",fontWeight:500,marginBottom:"0.25em",paddingLeft:o.baseUnit*3,paddingRight:o.baseUnit*3,textTransform:"uppercase"})},d6=function(t){var n=g_(t);n.data;var r=Jn(n,s6);return Y("div",q({},ke(t,"groupHeading",{"group-heading":!0}),r))},f6=u6,p6=["innerRef","isDisabled","isHidden","inputClassName"],h6=function(t,n){var r=t.isDisabled,i=t.value,o=t.theme,a=o.spacing,l=o.colors;return X(X({visibility:r?"hidden":"visible",transform:i?"translateZ(0)":""},m6),n?{}:{margin:a.baseUnit/2,paddingBottom:a.baseUnit/2,paddingTop:a.baseUnit/2,color:l.neutral80})},C_={gridArea:"1 / 2",font:"inherit",minWidth:"2px",border:0,margin:0,outline:0,padding:0},m6={flex:"1 1 auto",display:"inline-grid",gridArea:"1 / 1 / 2 / 3",gridTemplateColumns:"0 min-content","&:after":X({content:'attr(data-value) " "',visibility:"hidden",whiteSpace:"pre"},C_)},g6=function(t){return X({label:"input",color:"inherit",background:0,opacity:t?0:1,width:"100%"},C_)},v6=function(t){var n=t.cx,r=t.value,i=g_(t),o=i.innerRef,a=i.isDisabled,l=i.isHidden,s=i.inputClassName,u=Jn(i,p6);return Y("div",q({},ke(t,"input",{"input-container":!0}),{"data-value":r||""}),Y("input",q({className:n({input:!0},s),ref:o,style:g6(l),disabled:a},u)))},y6=v6,x6=function(t,n){var r=t.theme,i=r.spacing,o=r.borderRadius,a=r.colors;return X({label:"multiValue",display:"flex",minWidth:0},n?{}:{backgroundColor:a.neutral10,borderRadius:o/2,margin:i.baseUnit/2})},b6=function(t,n){var r=t.theme,i=r.borderRadius,o=r.colors,a=t.cropWithEllipsis;return X({overflow:"hidden",textOverflow:a||a===void 0?"ellipsis":void 0,whiteSpace:"nowrap"},n?{}:{borderRadius:i/2,color:o.neutral80,fontSize:"85%",padding:3,paddingLeft:6})},w6=function(t,n){var r=t.theme,i=r.spacing,o=r.borderRadius,a=r.colors,l=t.isFocused;return X({alignItems:"center",display:"flex"},n?{}:{borderRadius:o/2,backgroundColor:l?a.dangerLight:void 0,paddingLeft:i.baseUnit,paddingRight:i.baseUnit,":hover":{backgroundColor:a.dangerLight,color:a.danger}})},k_=function(t){var n=t.children,r=t.innerProps;return Y("div",r,n)},S6=k_,_6=k_;function E6(e){var t=e.children,n=e.innerProps;return Y("div",q({role:"button"},n),t||Y(km,{size:14}))}var C6=function(t){var n=t.children,r=t.components,i=t.data,o=t.innerProps,a=t.isDisabled,l=t.removeProps,s=t.selectProps,u=r.Container,c=r.Label,d=r.Remove;return Y(u,{data:i,innerProps:X(X({},ke(t,"multiValue",{"multi-value":!0,"multi-value--is-disabled":a})),o),selectProps:s},Y(c,{data:i,innerProps:X({},ke(t,"multiValueLabel",{"multi-value__label":!0})),selectProps:s},n),Y(d,{data:i,innerProps:X(X({},ke(t,"multiValueRemove",{"multi-value__remove":!0})),{},{"aria-label":"Remove ".concat(n||"option")},l),selectProps:s}))},k6=C6,T6=function(t,n){var r=t.isDisabled,i=t.isFocused,o=t.isSelected,a=t.theme,l=a.spacing,s=a.colors;return X({label:"option",cursor:"default",display:"block",fontSize:"inherit",width:"100%",userSelect:"none",WebkitTapHighlightColor:"rgba(0, 0, 0, 0)"},n?{}:{backgroundColor:o?s.primary:i?s.primary25:"transparent",color:r?s.neutral20:o?s.neutral0:"inherit",padding:"".concat(l.baseUnit*2,"px ").concat(l.baseUnit*3,"px"),":active":{backgroundColor:r?void 0:o?s.primary:s.primary50}})},O6=function(t){var n=t.children,r=t.isDisabled,i=t.isFocused,o=t.isSelected,a=t.innerRef,l=t.innerProps;return Y("div",q({},ke(t,"option",{option:!0,"option--is-disabled":r,"option--is-focused":i,"option--is-selected":o}),{ref:a,"aria-disabled":r},l),n)},P6=O6,M6=function(t,n){var r=t.theme,i=r.spacing,o=r.colors;return X({label:"placeholder",gridArea:"1 / 1 / 2 / 3"},n?{}:{color:o.neutral50,marginLeft:i.baseUnit/2,marginRight:i.baseUnit/2})},I6=function(t){var n=t.children,r=t.innerProps;return Y("div",q({},ke(t,"placeholder",{placeholder:!0}),r),n)},j6=I6,$6=function(t,n){var r=t.isDisabled,i=t.theme,o=i.spacing,a=i.colors;return X({label:"singleValue",gridArea:"1 / 1 / 2 / 3",maxWidth:"100%",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},n?{}:{color:r?a.neutral40:a.neutral80,marginLeft:o.baseUnit/2,marginRight:o.baseUnit/2})},D6=function(t){var n=t.children,r=t.isDisabled,i=t.innerProps;return Y("div",q({},ke(t,"singleValue",{"single-value":!0,"single-value--is-disabled":r}),i),n)},R6=D6,L6={ClearIndicator:QA,Control:a6,DropdownIndicator:KA,DownChevron:__,CrossIcon:km,Group:f6,GroupHeading:d6,IndicatorsContainer:WA,IndicatorSeparator:e6,Input:y6,LoadingIndicator:r6,Menu:IA,MenuList:$A,MenuPortal:NA,LoadingMessage:AA,NoOptionsMessage:LA,MultiValue:k6,MultiValueContainer:S6,MultiValueLabel:_6,MultiValueRemove:E6,Option:P6,Placeholder:j6,SelectContainer:VA,SingleValue:R6,ValueContainer:UA},A6=function(t){return X(X({},L6),t.components)},Hv=Number.isNaN||function(t){return typeof t=="number"&&t!==t};function F6(e,t){return!!(e===t||Hv(e)&&Hv(t))}function N6(e,t){if(e.length!==t.length)return!1;for(var n=0;n<e.length;n++)if(!F6(e[n],t[n]))return!1;return!0}function z6(e,t){t===void 0&&(t=N6);var n=null;function r(){for(var i=[],o=0;o<arguments.length;o++)i[o]=arguments[o];if(n&&n.lastThis===this&&t(i,n.lastArgs))return n.lastResult;var a=e.apply(this,i);return n={lastResult:a,lastArgs:i,lastThis:this},a}return r.clear=function(){n=null},r}var V6={name:"7pg0cj-a11yText",styles:"label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap"},B6=function(t){return Y("span",q({css:V6},t))},Wv=B6,U6={guidance:function(t){var n=t.isSearchable,r=t.isMulti,i=t.tabSelectsValue,o=t.context,a=t.isInitialFocus;switch(o){case"menu":return"Use Up and Down to choose options, press Enter to select the currently focused option, press Escape to exit the menu".concat(i?", press Tab to select the option and exit the menu":"",".");case"input":return a?"".concat(t["aria-label"]||"Select"," is focused ").concat(n?",type to refine list":"",", press Down to open the menu, ").concat(r?" press left to focus selected values":""):"";case"value":return"Use left and right to toggle between focused values, press Backspace to remove the currently focused value";default:return""}},onChange:function(t){var n=t.action,r=t.label,i=r===void 0?"":r,o=t.labels,a=t.isDisabled;switch(n){case"deselect-option":case"pop-value":case"remove-value":return"option ".concat(i,", deselected.");case"clear":return"All selected options have been cleared.";case"initial-input-focus":return"option".concat(o.length>1?"s":""," ").concat(o.join(","),", selected.");case"select-option":return a?"option ".concat(i," is disabled. Select another option."):"option ".concat(i,", selected.");default:return""}},onFocus:function(t){var n=t.context,r=t.focused,i=t.options,o=t.label,a=o===void 0?"":o,l=t.selectValue,s=t.isDisabled,u=t.isSelected,c=t.isAppleDevice,d=function(x,S){return x&&x.length?"".concat(x.indexOf(S)+1," of ").concat(x.length):""};if(n==="value"&&l)return"value ".concat(a," focused, ").concat(d(l,r),".");if(n==="menu"&&c){var m=s?" disabled":"",h="".concat(u?" selected":"").concat(m);return"".concat(a).concat(h,", ").concat(d(i,r),".")}return""},onFilter:function(t){var n=t.inputValue,r=t.resultsMessage;return"".concat(r).concat(n?" for search term "+n:"",".")}},H6=function(t){var n=t.ariaSelection,r=t.focusedOption,i=t.focusedValue,o=t.focusableOptions,a=t.isFocused,l=t.selectValue,s=t.selectProps,u=t.id,c=t.isAppleDevice,d=s.ariaLiveMessages,m=s.getOptionLabel,h=s.inputValue,g=s.isMulti,x=s.isOptionDisabled,S=s.isSearchable,f=s.menuIsOpen,p=s.options,v=s.screenReaderStatus,w=s.tabSelectsValue,C=s.isLoading,k=s["aria-label"],_=s["aria-live"],E=b.useMemo(function(){return X(X({},U6),d||{})},[d]),M=b.useMemo(function(){var R="";if(n&&E.onChange){var F=n.option,A=n.options,O=n.removedValue,D=n.removedValues,N=n.value,B=function(we){return Array.isArray(we)?null:we},z=O||F||B(N),G=z?m(z):"",Q=A||D||void 0,Z=Q?Q.map(m):[],K=X({isDisabled:z&&x(z,l),label:G,labels:Z},n);R=E.onChange(K)}return R},[n,E,x,l,m]),I=b.useMemo(function(){var R="",F=r||i,A=!!(r&&l&&l.includes(r));if(F&&E.onFocus){var O={focused:F,label:m(F),isDisabled:x(F,l),isSelected:A,options:o,context:F===r?"menu":"value",selectValue:l,isAppleDevice:c};R=E.onFocus(O)}return R},[r,i,m,x,E,o,l,c]),$=b.useMemo(function(){var R="";if(f&&p.length&&!C&&E.onFilter){var F=v({count:o.length});R=E.onFilter({inputValue:h,resultsMessage:F})}return R},[o,h,f,E,p,v,C]),P=(n==null?void 0:n.action)==="initial-input-focus",j=b.useMemo(function(){var R="";if(E.guidance){var F=i?"value":f?"menu":"input";R=E.guidance({"aria-label":k,context:F,isDisabled:r&&x(r,l),isMulti:g,isSearchable:S,tabSelectsValue:w,isInitialFocus:P})}return R},[k,r,i,g,x,S,f,E,l,w,P]),L=Y(b.Fragment,null,Y("span",{id:"aria-selection"},M),Y("span",{id:"aria-focused"},I),Y("span",{id:"aria-results"},$),Y("span",{id:"aria-guidance"},j));return Y(b.Fragment,null,Y(Wv,{id:u},P&&L),Y(Wv,{"aria-live":_,"aria-atomic":"false","aria-relevant":"additions text",role:"log"},a&&!P&&L))},W6=H6,Tp=[{base:"A",letters:"AⒶＡÀÁÂẦẤẪẨÃĀĂẰẮẴẲȦǠÄǞẢÅǺǍȀȂẠẬẶḀĄȺⱯ"},{base:"AA",letters:"Ꜳ"},{base:"AE",letters:"ÆǼǢ"},{base:"AO",letters:"Ꜵ"},{base:"AU",letters:"Ꜷ"},{base:"AV",letters:"ꜸꜺ"},{base:"AY",letters:"Ꜽ"},{base:"B",letters:"BⒷＢḂḄḆɃƂƁ"},{base:"C",letters:"CⒸＣĆĈĊČÇḈƇȻꜾ"},{base:"D",letters:"DⒹＤḊĎḌḐḒḎĐƋƊƉꝹ"},{base:"DZ",letters:"ǱǄ"},{base:"Dz",letters:"ǲǅ"},{base:"E",letters:"EⒺＥÈÉÊỀẾỄỂẼĒḔḖĔĖËẺĚȄȆẸỆȨḜĘḘḚƐƎ"},{base:"F",letters:"FⒻＦḞƑꝻ"},{base:"G",letters:"GⒼＧǴĜḠĞĠǦĢǤƓꞠꝽꝾ"},{base:"H",letters:"HⒽＨĤḢḦȞḤḨḪĦⱧⱵꞍ"},{base:"I",letters:"IⒾＩÌÍÎĨĪĬİÏḮỈǏȈȊỊĮḬƗ"},{base:"J",letters:"JⒿＪĴɈ"},{base:"K",letters:"KⓀＫḰǨḲĶḴƘⱩꝀꝂꝄꞢ"},{base:"L",letters:"LⓁＬĿĹĽḶḸĻḼḺŁȽⱢⱠꝈꝆꞀ"},{base:"LJ",letters:"Ǉ"},{base:"Lj",letters:"ǈ"},{base:"M",letters:"MⓂＭḾṀṂⱮƜ"},{base:"N",letters:"NⓃＮǸŃÑṄŇṆŅṊṈȠƝꞐꞤ"},{base:"NJ",letters:"Ǌ"},{base:"Nj",letters:"ǋ"},{base:"O",letters:"OⓄＯÒÓÔỒỐỖỔÕṌȬṎŌṐṒŎȮȰÖȪỎŐǑȌȎƠỜỚỠỞỢỌỘǪǬØǾƆƟꝊꝌ"},{base:"OI",letters:"Ƣ"},{base:"OO",letters:"Ꝏ"},{base:"OU",letters:"Ȣ"},{base:"P",letters:"PⓅＰṔṖƤⱣꝐꝒꝔ"},{base:"Q",letters:"QⓆＱꝖꝘɊ"},{base:"R",letters:"RⓇＲŔṘŘȐȒṚṜŖṞɌⱤꝚꞦꞂ"},{base:"S",letters:"SⓈＳẞŚṤŜṠŠṦṢṨȘŞⱾꞨꞄ"},{base:"T",letters:"TⓉＴṪŤṬȚŢṰṮŦƬƮȾꞆ"},{base:"TZ",letters:"Ꜩ"},{base:"U",letters:"UⓊＵÙÚÛŨṸŪṺŬÜǛǗǕǙỦŮŰǓȔȖƯỪỨỮỬỰỤṲŲṶṴɄ"},{base:"V",letters:"VⓋＶṼṾƲꝞɅ"},{base:"VY",letters:"Ꝡ"},{base:"W",letters:"WⓌＷẀẂŴẆẄẈⱲ"},{base:"X",letters:"XⓍＸẊẌ"},{base:"Y",letters:"YⓎＹỲÝŶỸȲẎŸỶỴƳɎỾ"},{base:"Z",letters:"ZⓏＺŹẐŻŽẒẔƵȤⱿⱫꝢ"},{base:"a",letters:"aⓐａẚàáâầấẫẩãāăằắẵẳȧǡäǟảåǻǎȁȃạậặḁąⱥɐ"},{base:"aa",letters:"ꜳ"},{base:"ae",letters:"æǽǣ"},{base:"ao",letters:"ꜵ"},{base:"au",letters:"ꜷ"},{base:"av",letters:"ꜹꜻ"},{base:"ay",letters:"ꜽ"},{base:"b",letters:"bⓑｂḃḅḇƀƃɓ"},{base:"c",letters:"cⓒｃćĉċčçḉƈȼꜿↄ"},{base:"d",letters:"dⓓｄḋďḍḑḓḏđƌɖɗꝺ"},{base:"dz",letters:"ǳǆ"},{base:"e",letters:"eⓔｅèéêềếễểẽēḕḗĕėëẻěȅȇẹệȩḝęḙḛɇɛǝ"},{base:"f",letters:"fⓕｆḟƒꝼ"},{base:"g",letters:"gⓖｇǵĝḡğġǧģǥɠꞡᵹꝿ"},{base:"h",letters:"hⓗｈĥḣḧȟḥḩḫẖħⱨⱶɥ"},{base:"hv",letters:"ƕ"},{base:"i",letters:"iⓘｉìíîĩīĭïḯỉǐȉȋịįḭɨı"},{base:"j",letters:"jⓙｊĵǰɉ"},{base:"k",letters:"kⓚｋḱǩḳķḵƙⱪꝁꝃꝅꞣ"},{base:"l",letters:"lⓛｌŀĺľḷḹļḽḻſłƚɫⱡꝉꞁꝇ"},{base:"lj",letters:"ǉ"},{base:"m",letters:"mⓜｍḿṁṃɱɯ"},{base:"n",letters:"nⓝｎǹńñṅňṇņṋṉƞɲŉꞑꞥ"},{base:"nj",letters:"ǌ"},{base:"o",letters:"oⓞｏòóôồốỗổõṍȭṏōṑṓŏȯȱöȫỏőǒȍȏơờớỡởợọộǫǭøǿɔꝋꝍɵ"},{base:"oi",letters:"ƣ"},{base:"ou",letters:"ȣ"},{base:"oo",letters:"ꝏ"},{base:"p",letters:"pⓟｐṕṗƥᵽꝑꝓꝕ"},{base:"q",letters:"qⓠｑɋꝗꝙ"},{base:"r",letters:"rⓡｒŕṙřȑȓṛṝŗṟɍɽꝛꞧꞃ"},{base:"s",letters:"sⓢｓßśṥŝṡšṧṣṩșşȿꞩꞅẛ"},{base:"t",letters:"tⓣｔṫẗťṭțţṱṯŧƭʈⱦꞇ"},{base:"tz",letters:"ꜩ"},{base:"u",letters:"uⓤｕùúûũṹūṻŭüǜǘǖǚủůűǔȕȗưừứữửựụṳųṷṵʉ"},{base:"v",letters:"vⓥｖṽṿʋꝟʌ"},{base:"vy",letters:"ꝡ"},{base:"w",letters:"wⓦｗẁẃŵẇẅẘẉⱳ"},{base:"x",letters:"xⓧｘẋẍ"},{base:"y",letters:"yⓨｙỳýŷỹȳẏÿỷẙỵƴɏỿ"},{base:"z",letters:"zⓩｚźẑżžẓẕƶȥɀⱬꝣ"}],G6=new RegExp("["+Tp.map(function(e){return e.letters}).join("")+"]","g"),T_={};for(var Pd=0;Pd<Tp.length;Pd++)for(var Md=Tp[Pd],Id=0;Id<Md.letters.length;Id++)T_[Md.letters[Id]]=Md.base;var O_=function(t){return t.replace(G6,function(n){return T_[n]})},Y6=z6(O_),Gv=function(t){return t.replace(/^\s+|\s+$/g,"")},X6=function(t){return"".concat(t.label," ").concat(t.value)},q6=function(t){return function(n,r){if(n.data.__isNew__)return!0;var i=X({ignoreCase:!0,ignoreAccents:!0,stringify:X6,trim:!0,matchFrom:"any"},t),o=i.ignoreCase,a=i.ignoreAccents,l=i.stringify,s=i.trim,u=i.matchFrom,c=s?Gv(r):r,d=s?Gv(l(n)):l(n);return o&&(c=c.toLowerCase(),d=d.toLowerCase()),a&&(c=Y6(c),d=O_(d)),u==="start"?d.substr(0,c.length)===c:d.indexOf(c)>-1}},K6=["innerRef"];function Z6(e){var t=e.innerRef,n=Jn(e,K6),r=_A(n,"onExited","in","enter","exit","appear");return Y("input",q({ref:t},r,{css:Wh({label:"dummyInput",background:0,border:0,caretColor:"transparent",fontSize:"inherit",gridArea:"1 / 1 / 2 / 3",outline:0,padding:0,width:1,color:"transparent",left:-100,opacity:0,position:"relative",transform:"scale(.01)"},"","")}))}var Q6=function(t){t.cancelable&&t.preventDefault(),t.stopPropagation()};function J6(e){var t=e.isEnabled,n=e.onBottomArrive,r=e.onBottomLeave,i=e.onTopArrive,o=e.onTopLeave,a=b.useRef(!1),l=b.useRef(!1),s=b.useRef(0),u=b.useRef(null),c=b.useCallback(function(S,f){if(u.current!==null){var p=u.current,v=p.scrollTop,w=p.scrollHeight,C=p.clientHeight,k=u.current,_=f>0,E=w-C-v,M=!1;E>f&&a.current&&(r&&r(S),a.current=!1),_&&l.current&&(o&&o(S),l.current=!1),_&&f>E?(n&&!a.current&&n(S),k.scrollTop=w,M=!0,a.current=!0):!_&&-f>v&&(i&&!l.current&&i(S),k.scrollTop=0,M=!0,l.current=!0),M&&Q6(S)}},[n,r,i,o]),d=b.useCallback(function(S){c(S,S.deltaY)},[c]),m=b.useCallback(function(S){s.current=S.changedTouches[0].clientY},[]),h=b.useCallback(function(S){var f=s.current-S.changedTouches[0].clientY;c(S,f)},[c]),g=b.useCallback(function(S){if(S){var f=bA?{passive:!1}:!1;S.addEventListener("wheel",d,f),S.addEventListener("touchstart",m,f),S.addEventListener("touchmove",h,f)}},[h,m,d]),x=b.useCallback(function(S){S&&(S.removeEventListener("wheel",d,!1),S.removeEventListener("touchstart",m,!1),S.removeEventListener("touchmove",h,!1))},[h,m,d]);return b.useEffect(function(){if(t){var S=u.current;return g(S),function(){x(S)}}},[t,g,x]),function(S){u.current=S}}var Yv=["boxSizing","height","overflow","paddingRight","position"],Xv={boxSizing:"border-box",overflow:"hidden",position:"relative",height:"100%"};function qv(e){e.cancelable&&e.preventDefault()}function Kv(e){e.stopPropagation()}function Zv(){var e=this.scrollTop,t=this.scrollHeight,n=e+this.offsetHeight;e===0?this.scrollTop=1:n===t&&(this.scrollTop=e-1)}function Qv(){return"ontouchstart"in window||navigator.maxTouchPoints}var Jv=!!(typeof window<"u"&&window.document&&window.document.createElement),ko=0,ui={capture:!1,passive:!1};function e8(e){var t=e.isEnabled,n=e.accountForScrollbars,r=n===void 0?!0:n,i=b.useRef({}),o=b.useRef(null),a=b.useCallback(function(s){if(Jv){var u=document.body,c=u&&u.style;if(r&&Yv.forEach(function(g){var x=c&&c[g];i.current[g]=x}),r&&ko<1){var d=parseInt(i.current.paddingRight,10)||0,m=document.body?document.body.clientWidth:0,h=window.innerWidth-m+d||0;Object.keys(Xv).forEach(function(g){var x=Xv[g];c&&(c[g]=x)}),c&&(c.paddingRight="".concat(h,"px"))}u&&Qv()&&(u.addEventListener("touchmove",qv,ui),s&&(s.addEventListener("touchstart",Zv,ui),s.addEventListener("touchmove",Kv,ui))),ko+=1}},[r]),l=b.useCallback(function(s){if(Jv){var u=document.body,c=u&&u.style;ko=Math.max(ko-1,0),r&&ko<1&&Yv.forEach(function(d){var m=i.current[d];c&&(c[d]=m)}),u&&Qv()&&(u.removeEventListener("touchmove",qv,ui),s&&(s.removeEventListener("touchstart",Zv,ui),s.removeEventListener("touchmove",Kv,ui)))}},[r]);return b.useEffect(function(){if(t){var s=o.current;return a(s),function(){l(s)}}},[t,a,l]),function(s){o.current=s}}var t8=function(t){var n=t.target;return n.ownerDocument.activeElement&&n.ownerDocument.activeElement.blur()},n8={name:"1kfdb0e",styles:"position:fixed;left:0;bottom:0;right:0;top:0"};function r8(e){var t=e.children,n=e.lockEnabled,r=e.captureEnabled,i=r===void 0?!0:r,o=e.onBottomArrive,a=e.onBottomLeave,l=e.onTopArrive,s=e.onTopLeave,u=J6({isEnabled:i,onBottomArrive:o,onBottomLeave:a,onTopArrive:l,onTopLeave:s}),c=e8({isEnabled:n}),d=function(h){u(h),c(h)};return Y(b.Fragment,null,n&&Y("div",{onClick:t8,css:n8}),t(d))}var i8={name:"1a0ro4n-requiredInput",styles:"label:requiredInput;opacity:0;pointer-events:none;position:absolute;bottom:0;left:0;right:0;width:100%"},o8=function(t){var n=t.name,r=t.onFocus;return Y("input",{required:!0,name:n,tabIndex:-1,"aria-hidden":"true",onFocus:r,css:i8,value:"",onChange:function(){}})},a8=o8;function Tm(e){var t;return typeof window<"u"&&window.navigator!=null?e.test(((t=window.navigator.userAgentData)===null||t===void 0?void 0:t.platform)||window.navigator.platform):!1}function s8(){return Tm(/^iPhone/i)}function P_(){return Tm(/^Mac/i)}function l8(){return Tm(/^iPad/i)||P_()&&navigator.maxTouchPoints>1}function u8(){return s8()||l8()}function c8(){return P_()||u8()}var d8=function(t){return t.label},f8=function(t){return t.label},p8=function(t){return t.value},h8=function(t){return!!t.isDisabled},m8={clearIndicator:ZA,container:zA,control:i6,dropdownIndicator:qA,group:l6,groupHeading:c6,indicatorsContainer:HA,indicatorSeparator:JA,input:h6,loadingIndicator:n6,loadingMessage:RA,menu:OA,menuList:jA,menuPortal:FA,multiValue:x6,multiValueLabel:b6,multiValueRemove:w6,noOptionsMessage:DA,option:T6,placeholder:M6,singleValue:$6,valueContainer:BA},g8={primary:"#2684FF",primary75:"#4C9AFF",primary50:"#B2D4FF",primary25:"#DEEBFF",danger:"#DE350B",dangerLight:"#FFBDAD",neutral0:"hsl(0, 0%, 100%)",neutral5:"hsl(0, 0%, 95%)",neutral10:"hsl(0, 0%, 90%)",neutral20:"hsl(0, 0%, 80%)",neutral30:"hsl(0, 0%, 70%)",neutral40:"hsl(0, 0%, 60%)",neutral50:"hsl(0, 0%, 50%)",neutral60:"hsl(0, 0%, 40%)",neutral70:"hsl(0, 0%, 30%)",neutral80:"hsl(0, 0%, 20%)",neutral90:"hsl(0, 0%, 10%)"},v8=4,M_=4,y8=38,x8=M_*2,b8={baseUnit:M_,controlHeight:y8,menuGutter:x8},jd={borderRadius:v8,colors:g8,spacing:b8},w8={"aria-live":"polite",backspaceRemovesValue:!0,blurInputOnSelect:Bv(),captureMenuScroll:!Bv(),classNames:{},closeMenuOnSelect:!0,closeMenuOnScroll:!1,components:{},controlShouldRenderValue:!0,escapeClearsValue:!1,filterOption:q6(),formatGroupLabel:d8,getOptionLabel:f8,getOptionValue:p8,isDisabled:!1,isLoading:!1,isMulti:!1,isRtl:!1,isSearchable:!0,isOptionDisabled:h8,loadingMessage:function(){return"Loading..."},maxMenuHeight:300,minMenuHeight:140,menuIsOpen:!1,menuPlacement:"bottom",menuPosition:"absolute",menuShouldBlockScroll:!1,menuShouldScrollIntoView:!yA(),noOptionsMessage:function(){return"No options"},openMenuOnFocus:!1,openMenuOnClick:!0,options:[],pageSize:5,placeholder:"Select...",screenReaderStatus:function(t){var n=t.count;return"".concat(n," result").concat(n!==1?"s":""," available")},styles:{},tabIndex:0,tabSelectsValue:!0,unstyled:!1};function e1(e,t,n,r){var i=$_(e,t,n),o=D_(e,t,n),a=j_(e,t),l=Kl(e,t);return{type:"option",data:t,isDisabled:i,isSelected:o,label:a,value:l,index:r}}function qs(e,t){return e.options.map(function(n,r){if("options"in n){var i=n.options.map(function(a,l){return e1(e,a,t,l)}).filter(function(a){return n1(e,a)});return i.length>0?{type:"group",data:n,options:i,index:r}:void 0}var o=e1(e,n,t,r);return n1(e,o)?o:void 0}).filter(wA)}function I_(e){return e.reduce(function(t,n){return n.type==="group"?t.push.apply(t,Sm(n.options.map(function(r){return r.data}))):t.push(n.data),t},[])}function t1(e,t){return e.reduce(function(n,r){return r.type==="group"?n.push.apply(n,Sm(r.options.map(function(i){return{data:i.data,id:"".concat(t,"-").concat(r.index,"-").concat(i.index)}}))):n.push({data:r.data,id:"".concat(t,"-").concat(r.index)}),n},[])}function S8(e,t){return I_(qs(e,t))}function n1(e,t){var n=e.inputValue,r=n===void 0?"":n,i=t.data,o=t.isSelected,a=t.label,l=t.value;return(!L_(e)||!o)&&R_(e,{label:a,value:l,data:i},r)}function _8(e,t){var n=e.focusedValue,r=e.selectValue,i=r.indexOf(n);if(i>-1){var o=t.indexOf(n);if(o>-1)return n;if(i<t.length)return t[i]}return null}function E8(e,t){var n=e.focusedOption;return n&&t.indexOf(n)>-1?n:t[0]}var $d=function(t,n){var r,i=(r=t.find(function(o){return o.data===n}))===null||r===void 0?void 0:r.id;return i||null},j_=function(t,n){return t.getOptionLabel(n)},Kl=function(t,n){return t.getOptionValue(n)};function $_(e,t,n){return typeof e.isOptionDisabled=="function"?e.isOptionDisabled(t,n):!1}function D_(e,t,n){if(n.indexOf(t)>-1)return!0;if(typeof e.isOptionSelected=="function")return e.isOptionSelected(t,n);var r=Kl(e,t);return n.some(function(i){return Kl(e,i)===r})}function R_(e,t,n){return e.filterOption?e.filterOption(t,n):!0}var L_=function(t){var n=t.hideSelectedOptions,r=t.isMulti;return n===void 0?r:n},C8=1,A_=function(e){HL(n,e);var t=XL(n);function n(r){var i;if(BL(this,n),i=t.call(this,r),i.state={ariaSelection:null,focusedOption:null,focusedOptionId:null,focusableOptionsWithIds:[],focusedValue:null,inputIsHidden:!1,isFocused:!1,selectValue:[],clearFocusValueOnUpdate:!1,prevWasFocused:!1,inputIsHiddenAfterUpdate:void 0,prevProps:void 0,instancePrefix:"",isAppleDevice:!1},i.blockOptionHover=!1,i.isComposing=!1,i.commonProps=void 0,i.initialTouchX=0,i.initialTouchY=0,i.openAfterFocus=!1,i.scrollToFocusedOptionOnUpdate=!1,i.userIsDragging=void 0,i.controlRef=null,i.getControlRef=function(s){i.controlRef=s},i.focusedOptionRef=null,i.getFocusedOptionRef=function(s){i.focusedOptionRef=s},i.menuListRef=null,i.getMenuListRef=function(s){i.menuListRef=s},i.inputRef=null,i.getInputRef=function(s){i.inputRef=s},i.focus=i.focusInput,i.blur=i.blurInput,i.onChange=function(s,u){var c=i.props,d=c.onChange,m=c.name;u.name=m,i.ariaOnChange(s,u),d(s,u)},i.setValue=function(s,u,c){var d=i.props,m=d.closeMenuOnSelect,h=d.isMulti,g=d.inputValue;i.onInputChange("",{action:"set-value",prevInputValue:g}),m&&(i.setState({inputIsHiddenAfterUpdate:!h}),i.onMenuClose()),i.setState({clearFocusValueOnUpdate:!0}),i.onChange(s,{action:u,option:c})},i.selectOption=function(s){var u=i.props,c=u.blurInputOnSelect,d=u.isMulti,m=u.name,h=i.state.selectValue,g=d&&i.isOptionSelected(s,h),x=i.isOptionDisabled(s,h);if(g){var S=i.getOptionValue(s);i.setValue(h.filter(function(f){return i.getOptionValue(f)!==S}),"deselect-option",s)}else if(!x)d?i.setValue([].concat(Sm(h),[s]),"select-option",s):i.setValue(s,"select-option");else{i.ariaOnChange(s,{action:"select-option",option:s,name:m});return}c&&i.blurInput()},i.removeValue=function(s){var u=i.props.isMulti,c=i.state.selectValue,d=i.getOptionValue(s),m=c.filter(function(g){return i.getOptionValue(g)!==d}),h=bs(u,m,m[0]||null);i.onChange(h,{action:"remove-value",removedValue:s}),i.focusInput()},i.clearValue=function(){var s=i.state.selectValue;i.onChange(bs(i.props.isMulti,[],null),{action:"clear",removedValues:s})},i.popValue=function(){var s=i.props.isMulti,u=i.state.selectValue,c=u[u.length-1],d=u.slice(0,u.length-1),m=bs(s,d,d[0]||null);c&&i.onChange(m,{action:"pop-value",removedValue:c})},i.getFocusedOptionId=function(s){return $d(i.state.focusableOptionsWithIds,s)},i.getFocusableOptionsWithIds=function(){return t1(qs(i.props,i.state.selectValue),i.getElementId("option"))},i.getValue=function(){return i.state.selectValue},i.cx=function(){for(var s=arguments.length,u=new Array(s),c=0;c<s;c++)u[c]=arguments[c];return pA.apply(void 0,[i.props.classNamePrefix].concat(u))},i.getOptionLabel=function(s){return j_(i.props,s)},i.getOptionValue=function(s){return Kl(i.props,s)},i.getStyles=function(s,u){var c=i.props.unstyled,d=m8[s](u,c);d.boxSizing="border-box";var m=i.props.styles[s];return m?m(d,u):d},i.getClassNames=function(s,u){var c,d;return(c=(d=i.props.classNames)[s])===null||c===void 0?void 0:c.call(d,u)},i.getElementId=function(s){return"".concat(i.state.instancePrefix,"-").concat(s)},i.getComponents=function(){return A6(i.props)},i.buildCategorizedOptions=function(){return qs(i.props,i.state.selectValue)},i.getCategorizedOptions=function(){return i.props.menuIsOpen?i.buildCategorizedOptions():[]},i.buildFocusableOptions=function(){return I_(i.buildCategorizedOptions())},i.getFocusableOptions=function(){return i.props.menuIsOpen?i.buildFocusableOptions():[]},i.ariaOnChange=function(s,u){i.setState({ariaSelection:X({value:s},u)})},i.onMenuMouseDown=function(s){s.button===0&&(s.stopPropagation(),s.preventDefault(),i.focusInput())},i.onMenuMouseMove=function(s){i.blockOptionHover=!1},i.onControlMouseDown=function(s){if(!s.defaultPrevented){var u=i.props.openMenuOnClick;i.state.isFocused?i.props.menuIsOpen?s.target.tagName!=="INPUT"&&s.target.tagName!=="TEXTAREA"&&i.onMenuClose():u&&i.openMenu("first"):(u&&(i.openAfterFocus=!0),i.focusInput()),s.target.tagName!=="INPUT"&&s.target.tagName!=="TEXTAREA"&&s.preventDefault()}},i.onDropdownIndicatorMouseDown=function(s){if(!(s&&s.type==="mousedown"&&s.button!==0)&&!i.props.isDisabled){var u=i.props,c=u.isMulti,d=u.menuIsOpen;i.focusInput(),d?(i.setState({inputIsHiddenAfterUpdate:!c}),i.onMenuClose()):i.openMenu("first"),s.preventDefault()}},i.onClearIndicatorMouseDown=function(s){s&&s.type==="mousedown"&&s.button!==0||(i.clearValue(),s.preventDefault(),i.openAfterFocus=!1,s.type==="touchend"?i.focusInput():setTimeout(function(){return i.focusInput()}))},i.onScroll=function(s){typeof i.props.closeMenuOnScroll=="boolean"?s.target instanceof HTMLElement&&hc(s.target)&&i.props.onMenuClose():typeof i.props.closeMenuOnScroll=="function"&&i.props.closeMenuOnScroll(s)&&i.props.onMenuClose()},i.onCompositionStart=function(){i.isComposing=!0},i.onCompositionEnd=function(){i.isComposing=!1},i.onTouchStart=function(s){var u=s.touches,c=u&&u.item(0);c&&(i.initialTouchX=c.clientX,i.initialTouchY=c.clientY,i.userIsDragging=!1)},i.onTouchMove=function(s){var u=s.touches,c=u&&u.item(0);if(c){var d=Math.abs(c.clientX-i.initialTouchX),m=Math.abs(c.clientY-i.initialTouchY),h=5;i.userIsDragging=d>h||m>h}},i.onTouchEnd=function(s){i.userIsDragging||(i.controlRef&&!i.controlRef.contains(s.target)&&i.menuListRef&&!i.menuListRef.contains(s.target)&&i.blurInput(),i.initialTouchX=0,i.initialTouchY=0)},i.onControlTouchEnd=function(s){i.userIsDragging||i.onControlMouseDown(s)},i.onClearIndicatorTouchEnd=function(s){i.userIsDragging||i.onClearIndicatorMouseDown(s)},i.onDropdownIndicatorTouchEnd=function(s){i.userIsDragging||i.onDropdownIndicatorMouseDown(s)},i.handleInputChange=function(s){var u=i.props.inputValue,c=s.currentTarget.value;i.setState({inputIsHiddenAfterUpdate:!1}),i.onInputChange(c,{action:"input-change",prevInputValue:u}),i.props.menuIsOpen||i.onMenuOpen()},i.onInputFocus=function(s){i.props.onFocus&&i.props.onFocus(s),i.setState({inputIsHiddenAfterUpdate:!1,isFocused:!0}),(i.openAfterFocus||i.props.openMenuOnFocus)&&i.openMenu("first"),i.openAfterFocus=!1},i.onInputBlur=function(s){var u=i.props.inputValue;if(i.menuListRef&&i.menuListRef.contains(document.activeElement)){i.inputRef.focus();return}i.props.onBlur&&i.props.onBlur(s),i.onInputChange("",{action:"input-blur",prevInputValue:u}),i.onMenuClose(),i.setState({focusedValue:null,isFocused:!1})},i.onOptionHover=function(s){if(!(i.blockOptionHover||i.state.focusedOption===s)){var u=i.getFocusableOptions(),c=u.indexOf(s);i.setState({focusedOption:s,focusedOptionId:c>-1?i.getFocusedOptionId(s):null})}},i.shouldHideSelectedOptions=function(){return L_(i.props)},i.onValueInputFocus=function(s){s.preventDefault(),s.stopPropagation(),i.focus()},i.onKeyDown=function(s){var u=i.props,c=u.isMulti,d=u.backspaceRemovesValue,m=u.escapeClearsValue,h=u.inputValue,g=u.isClearable,x=u.isDisabled,S=u.menuIsOpen,f=u.onKeyDown,p=u.tabSelectsValue,v=u.openMenuOnFocus,w=i.state,C=w.focusedOption,k=w.focusedValue,_=w.selectValue;if(!x&&!(typeof f=="function"&&(f(s),s.defaultPrevented))){switch(i.blockOptionHover=!0,s.key){case"ArrowLeft":if(!c||h)return;i.focusValue("previous");break;case"ArrowRight":if(!c||h)return;i.focusValue("next");break;case"Delete":case"Backspace":if(h)return;if(k)i.removeValue(k);else{if(!d)return;c?i.popValue():g&&i.clearValue()}break;case"Tab":if(i.isComposing||s.shiftKey||!S||!p||!C||v&&i.isOptionSelected(C,_))return;i.selectOption(C);break;case"Enter":if(s.keyCode===229)break;if(S){if(!C||i.isComposing)return;i.selectOption(C);break}return;case"Escape":S?(i.setState({inputIsHiddenAfterUpdate:!1}),i.onInputChange("",{action:"menu-close",prevInputValue:h}),i.onMenuClose()):g&&m&&i.clearValue();break;case" ":if(h)return;if(!S){i.openMenu("first");break}if(!C)return;i.selectOption(C);break;case"ArrowUp":S?i.focusOption("up"):i.openMenu("last");break;case"ArrowDown":S?i.focusOption("down"):i.openMenu("first");break;case"PageUp":if(!S)return;i.focusOption("pageup");break;case"PageDown":if(!S)return;i.focusOption("pagedown");break;case"Home":if(!S)return;i.focusOption("first");break;case"End":if(!S)return;i.focusOption("last");break;default:return}s.preventDefault()}},i.state.instancePrefix="react-select-"+(i.props.instanceId||++C8),i.state.selectValue=zv(r.value),r.menuIsOpen&&i.state.selectValue.length){var o=i.getFocusableOptionsWithIds(),a=i.buildFocusableOptions(),l=a.indexOf(i.state.selectValue[0]);i.state.focusableOptionsWithIds=o,i.state.focusedOption=a[l],i.state.focusedOptionId=$d(o,a[l])}return i}return UL(n,[{key:"componentDidMount",value:function(){this.startListeningComposition(),this.startListeningToTouch(),this.props.closeMenuOnScroll&&document&&document.addEventListener&&document.addEventListener("scroll",this.onScroll,!0),this.props.autoFocus&&this.focusInput(),this.props.menuIsOpen&&this.state.focusedOption&&this.menuListRef&&this.focusedOptionRef&&Vv(this.menuListRef,this.focusedOptionRef),c8()&&this.setState({isAppleDevice:!0})}},{key:"componentDidUpdate",value:function(i){var o=this.props,a=o.isDisabled,l=o.menuIsOpen,s=this.state.isFocused;(s&&!a&&i.isDisabled||s&&l&&!i.menuIsOpen)&&this.focusInput(),s&&a&&!i.isDisabled?this.setState({isFocused:!1},this.onMenuClose):!s&&!a&&i.isDisabled&&this.inputRef===document.activeElement&&this.setState({isFocused:!0}),this.menuListRef&&this.focusedOptionRef&&this.scrollToFocusedOptionOnUpdate&&(Vv(this.menuListRef,this.focusedOptionRef),this.scrollToFocusedOptionOnUpdate=!1)}},{key:"componentWillUnmount",value:function(){this.stopListeningComposition(),this.stopListeningToTouch(),document.removeEventListener("scroll",this.onScroll,!0)}},{key:"onMenuOpen",value:function(){this.props.onMenuOpen()}},{key:"onMenuClose",value:function(){this.onInputChange("",{action:"menu-close",prevInputValue:this.props.inputValue}),this.props.onMenuClose()}},{key:"onInputChange",value:function(i,o){this.props.onInputChange(i,o)}},{key:"focusInput",value:function(){this.inputRef&&this.inputRef.focus()}},{key:"blurInput",value:function(){this.inputRef&&this.inputRef.blur()}},{key:"openMenu",value:function(i){var o=this,a=this.state,l=a.selectValue,s=a.isFocused,u=this.buildFocusableOptions(),c=i==="first"?0:u.length-1;if(!this.props.isMulti){var d=u.indexOf(l[0]);d>-1&&(c=d)}this.scrollToFocusedOptionOnUpdate=!(s&&this.menuListRef),this.setState({inputIsHiddenAfterUpdate:!1,focusedValue:null,focusedOption:u[c],focusedOptionId:this.getFocusedOptionId(u[c])},function(){return o.onMenuOpen()})}},{key:"focusValue",value:function(i){var o=this.state,a=o.selectValue,l=o.focusedValue;if(this.props.isMulti){this.setState({focusedOption:null});var s=a.indexOf(l);l||(s=-1);var u=a.length-1,c=-1;if(a.length){switch(i){case"previous":s===0?c=0:s===-1?c=u:c=s-1;break;case"next":s>-1&&s<u&&(c=s+1);break}this.setState({inputIsHidden:c!==-1,focusedValue:a[c]})}}}},{key:"focusOption",value:function(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"first",o=this.props.pageSize,a=this.state.focusedOption,l=this.getFocusableOptions();if(l.length){var s=0,u=l.indexOf(a);a||(u=-1),i==="up"?s=u>0?u-1:l.length-1:i==="down"?s=(u+1)%l.length:i==="pageup"?(s=u-o,s<0&&(s=0)):i==="pagedown"?(s=u+o,s>l.length-1&&(s=l.length-1)):i==="last"&&(s=l.length-1),this.scrollToFocusedOptionOnUpdate=!0,this.setState({focusedOption:l[s],focusedValue:null,focusedOptionId:this.getFocusedOptionId(l[s])})}}},{key:"getTheme",value:function(){return this.props.theme?typeof this.props.theme=="function"?this.props.theme(jd):X(X({},jd),this.props.theme):jd}},{key:"getCommonProps",value:function(){var i=this.clearValue,o=this.cx,a=this.getStyles,l=this.getClassNames,s=this.getValue,u=this.selectOption,c=this.setValue,d=this.props,m=d.isMulti,h=d.isRtl,g=d.options,x=this.hasValue();return{clearValue:i,cx:o,getStyles:a,getClassNames:l,getValue:s,hasValue:x,isMulti:m,isRtl:h,options:g,selectOption:u,selectProps:d,setValue:c,theme:this.getTheme()}}},{key:"hasValue",value:function(){var i=this.state.selectValue;return i.length>0}},{key:"hasOptions",value:function(){return!!this.getFocusableOptions().length}},{key:"isClearable",value:function(){var i=this.props,o=i.isClearable,a=i.isMulti;return o===void 0?a:o}},{key:"isOptionDisabled",value:function(i,o){return $_(this.props,i,o)}},{key:"isOptionSelected",value:function(i,o){return D_(this.props,i,o)}},{key:"filterOption",value:function(i,o){return R_(this.props,i,o)}},{key:"formatOptionLabel",value:function(i,o){if(typeof this.props.formatOptionLabel=="function"){var a=this.props.inputValue,l=this.state.selectValue;return this.props.formatOptionLabel(i,{context:o,inputValue:a,selectValue:l})}else return this.getOptionLabel(i)}},{key:"formatGroupLabel",value:function(i){return this.props.formatGroupLabel(i)}},{key:"startListeningComposition",value:function(){document&&document.addEventListener&&(document.addEventListener("compositionstart",this.onCompositionStart,!1),document.addEventListener("compositionend",this.onCompositionEnd,!1))}},{key:"stopListeningComposition",value:function(){document&&document.removeEventListener&&(document.removeEventListener("compositionstart",this.onCompositionStart),document.removeEventListener("compositionend",this.onCompositionEnd))}},{key:"startListeningToTouch",value:function(){document&&document.addEventListener&&(document.addEventListener("touchstart",this.onTouchStart,!1),document.addEventListener("touchmove",this.onTouchMove,!1),document.addEventListener("touchend",this.onTouchEnd,!1))}},{key:"stopListeningToTouch",value:function(){document&&document.removeEventListener&&(document.removeEventListener("touchstart",this.onTouchStart),document.removeEventListener("touchmove",this.onTouchMove),document.removeEventListener("touchend",this.onTouchEnd))}},{key:"renderInput",value:function(){var i=this.props,o=i.isDisabled,a=i.isSearchable,l=i.inputId,s=i.inputValue,u=i.tabIndex,c=i.form,d=i.menuIsOpen,m=i.required,h=this.getComponents(),g=h.Input,x=this.state,S=x.inputIsHidden,f=x.ariaSelection,p=this.commonProps,v=l||this.getElementId("input"),w=X(X(X({"aria-autocomplete":"list","aria-expanded":d,"aria-haspopup":!0,"aria-errormessage":this.props["aria-errormessage"],"aria-invalid":this.props["aria-invalid"],"aria-label":this.props["aria-label"],"aria-labelledby":this.props["aria-labelledby"],"aria-required":m,role:"combobox","aria-activedescendant":this.state.isAppleDevice?void 0:this.state.focusedOptionId||""},d&&{"aria-controls":this.getElementId("listbox")}),!a&&{"aria-readonly":!0}),this.hasValue()?(f==null?void 0:f.action)==="initial-input-focus"&&{"aria-describedby":this.getElementId("live-region")}:{"aria-describedby":this.getElementId("placeholder")});return a?b.createElement(g,q({},p,{autoCapitalize:"none",autoComplete:"off",autoCorrect:"off",id:v,innerRef:this.getInputRef,isDisabled:o,isHidden:S,onBlur:this.onInputBlur,onChange:this.handleInputChange,onFocus:this.onInputFocus,spellCheck:"false",tabIndex:u,form:c,type:"text",value:s},w)):b.createElement(Z6,q({id:v,innerRef:this.getInputRef,onBlur:this.onInputBlur,onChange:Xl,onFocus:this.onInputFocus,disabled:o,tabIndex:u,inputMode:"none",form:c,value:""},w))}},{key:"renderPlaceholderOrValue",value:function(){var i=this,o=this.getComponents(),a=o.MultiValue,l=o.MultiValueContainer,s=o.MultiValueLabel,u=o.MultiValueRemove,c=o.SingleValue,d=o.Placeholder,m=this.commonProps,h=this.props,g=h.controlShouldRenderValue,x=h.isDisabled,S=h.isMulti,f=h.inputValue,p=h.placeholder,v=this.state,w=v.selectValue,C=v.focusedValue,k=v.isFocused;if(!this.hasValue()||!g)return f?null:b.createElement(d,q({},m,{key:"placeholder",isDisabled:x,isFocused:k,innerProps:{id:this.getElementId("placeholder")}}),p);if(S)return w.map(function(E,M){var I=E===C,$="".concat(i.getOptionLabel(E),"-").concat(i.getOptionValue(E));return b.createElement(a,q({},m,{components:{Container:l,Label:s,Remove:u},isFocused:I,isDisabled:x,key:$,index:M,removeProps:{onClick:function(){return i.removeValue(E)},onTouchEnd:function(){return i.removeValue(E)},onMouseDown:function(j){j.preventDefault()}},data:E}),i.formatOptionLabel(E,"value"))});if(f)return null;var _=w[0];return b.createElement(c,q({},m,{data:_,isDisabled:x}),this.formatOptionLabel(_,"value"))}},{key:"renderClearIndicator",value:function(){var i=this.getComponents(),o=i.ClearIndicator,a=this.commonProps,l=this.props,s=l.isDisabled,u=l.isLoading,c=this.state.isFocused;if(!this.isClearable()||!o||s||!this.hasValue()||u)return null;var d={onMouseDown:this.onClearIndicatorMouseDown,onTouchEnd:this.onClearIndicatorTouchEnd,"aria-hidden":"true"};return b.createElement(o,q({},a,{innerProps:d,isFocused:c}))}},{key:"renderLoadingIndicator",value:function(){var i=this.getComponents(),o=i.LoadingIndicator,a=this.commonProps,l=this.props,s=l.isDisabled,u=l.isLoading,c=this.state.isFocused;if(!o||!u)return null;var d={"aria-hidden":"true"};return b.createElement(o,q({},a,{innerProps:d,isDisabled:s,isFocused:c}))}},{key:"renderIndicatorSeparator",value:function(){var i=this.getComponents(),o=i.DropdownIndicator,a=i.IndicatorSeparator;if(!o||!a)return null;var l=this.commonProps,s=this.props.isDisabled,u=this.state.isFocused;return b.createElement(a,q({},l,{isDisabled:s,isFocused:u}))}},{key:"renderDropdownIndicator",value:function(){var i=this.getComponents(),o=i.DropdownIndicator;if(!o)return null;var a=this.commonProps,l=this.props.isDisabled,s=this.state.isFocused,u={onMouseDown:this.onDropdownIndicatorMouseDown,onTouchEnd:this.onDropdownIndicatorTouchEnd,"aria-hidden":"true"};return b.createElement(o,q({},a,{innerProps:u,isDisabled:l,isFocused:s}))}},{key:"renderMenu",value:function(){var i=this,o=this.getComponents(),a=o.Group,l=o.GroupHeading,s=o.Menu,u=o.MenuList,c=o.MenuPortal,d=o.LoadingMessage,m=o.NoOptionsMessage,h=o.Option,g=this.commonProps,x=this.state.focusedOption,S=this.props,f=S.captureMenuScroll,p=S.inputValue,v=S.isLoading,w=S.loadingMessage,C=S.minMenuHeight,k=S.maxMenuHeight,_=S.menuIsOpen,E=S.menuPlacement,M=S.menuPosition,I=S.menuPortalTarget,$=S.menuShouldBlockScroll,P=S.menuShouldScrollIntoView,j=S.noOptionsMessage,L=S.onMenuScrollToTop,R=S.onMenuScrollToBottom;if(!_)return null;var F=function(G,Q){var Z=G.type,K=G.data,re=G.isDisabled,we=G.isSelected,qe=G.label,Oe=G.value,Xt=x===K,Ft=re?void 0:function(){return i.onOptionHover(K)},kt=re?void 0:function(){return i.selectOption(K)},ni="".concat(i.getElementId("option"),"-").concat(Q),pt={id:ni,onClick:kt,onMouseMove:Ft,onMouseOver:Ft,tabIndex:-1,role:"option","aria-selected":i.state.isAppleDevice?void 0:we};return b.createElement(h,q({},g,{innerProps:pt,data:K,isDisabled:re,isSelected:we,key:ni,label:qe,type:Z,value:Oe,isFocused:Xt,innerRef:Xt?i.getFocusedOptionRef:void 0}),i.formatOptionLabel(G.data,"menu"))},A;if(this.hasOptions())A=this.getCategorizedOptions().map(function(z){if(z.type==="group"){var G=z.data,Q=z.options,Z=z.index,K="".concat(i.getElementId("group"),"-").concat(Z),re="".concat(K,"-heading");return b.createElement(a,q({},g,{key:K,data:G,options:Q,Heading:l,headingProps:{id:re,data:z.data},label:i.formatGroupLabel(z.data)}),z.options.map(function(we){return F(we,"".concat(Z,"-").concat(we.index))}))}else if(z.type==="option")return F(z,"".concat(z.index))});else if(v){var O=w({inputValue:p});if(O===null)return null;A=b.createElement(d,g,O)}else{var D=j({inputValue:p});if(D===null)return null;A=b.createElement(m,g,D)}var N={minMenuHeight:C,maxMenuHeight:k,menuPlacement:E,menuPosition:M,menuShouldScrollIntoView:P},B=b.createElement(PA,q({},g,N),function(z){var G=z.ref,Q=z.placerProps,Z=Q.placement,K=Q.maxHeight;return b.createElement(s,q({},g,N,{innerRef:G,innerProps:{onMouseDown:i.onMenuMouseDown,onMouseMove:i.onMenuMouseMove},isLoading:v,placement:Z}),b.createElement(r8,{captureEnabled:f,onTopArrive:L,onBottomArrive:R,lockEnabled:$},function(re){return b.createElement(u,q({},g,{innerRef:function(qe){i.getMenuListRef(qe),re(qe)},innerProps:{role:"listbox","aria-multiselectable":g.isMulti,id:i.getElementId("listbox")},isLoading:v,maxHeight:K,focusedOption:x}),A)}))});return I||M==="fixed"?b.createElement(c,q({},g,{appendTo:I,controlElement:this.controlRef,menuPlacement:E,menuPosition:M}),B):B}},{key:"renderFormField",value:function(){var i=this,o=this.props,a=o.delimiter,l=o.isDisabled,s=o.isMulti,u=o.name,c=o.required,d=this.state.selectValue;if(c&&!this.hasValue()&&!l)return b.createElement(a8,{name:u,onFocus:this.onValueInputFocus});if(!(!u||l))if(s)if(a){var m=d.map(function(x){return i.getOptionValue(x)}).join(a);return b.createElement("input",{name:u,type:"hidden",value:m})}else{var h=d.length>0?d.map(function(x,S){return b.createElement("input",{key:"i-".concat(S),name:u,type:"hidden",value:i.getOptionValue(x)})}):b.createElement("input",{name:u,type:"hidden",value:""});return b.createElement("div",null,h)}else{var g=d[0]?this.getOptionValue(d[0]):"";return b.createElement("input",{name:u,type:"hidden",value:g})}}},{key:"renderLiveRegion",value:function(){var i=this.commonProps,o=this.state,a=o.ariaSelection,l=o.focusedOption,s=o.focusedValue,u=o.isFocused,c=o.selectValue,d=this.getFocusableOptions();return b.createElement(W6,q({},i,{id:this.getElementId("live-region"),ariaSelection:a,focusedOption:l,focusedValue:s,isFocused:u,selectValue:c,focusableOptions:d,isAppleDevice:this.state.isAppleDevice}))}},{key:"render",value:function(){var i=this.getComponents(),o=i.Control,a=i.IndicatorsContainer,l=i.SelectContainer,s=i.ValueContainer,u=this.props,c=u.className,d=u.id,m=u.isDisabled,h=u.menuIsOpen,g=this.state.isFocused,x=this.commonProps=this.getCommonProps();return b.createElement(l,q({},x,{className:c,innerProps:{id:d,onKeyDown:this.onKeyDown},isDisabled:m,isFocused:g}),this.renderLiveRegion(),b.createElement(o,q({},x,{innerRef:this.getControlRef,innerProps:{onMouseDown:this.onControlMouseDown,onTouchEnd:this.onControlTouchEnd},isDisabled:m,isFocused:g,menuIsOpen:h}),b.createElement(s,q({},x,{isDisabled:m}),this.renderPlaceholderOrValue(),this.renderInput()),b.createElement(a,q({},x,{isDisabled:m}),this.renderClearIndicator(),this.renderLoadingIndicator(),this.renderIndicatorSeparator(),this.renderDropdownIndicator())),this.renderMenu(),this.renderFormField())}}],[{key:"getDerivedStateFromProps",value:function(i,o){var a=o.prevProps,l=o.clearFocusValueOnUpdate,s=o.inputIsHiddenAfterUpdate,u=o.ariaSelection,c=o.isFocused,d=o.prevWasFocused,m=o.instancePrefix,h=i.options,g=i.value,x=i.menuIsOpen,S=i.inputValue,f=i.isMulti,p=zv(g),v={};if(a&&(g!==a.value||h!==a.options||x!==a.menuIsOpen||S!==a.inputValue)){var w=x?S8(i,p):[],C=x?t1(qs(i,p),"".concat(m,"-option")):[],k=l?_8(o,p):null,_=E8(o,w),E=$d(C,_);v={selectValue:p,focusedOption:_,focusedOptionId:E,focusableOptionsWithIds:C,focusedValue:k,clearFocusValueOnUpdate:!1}}var M=s!=null&&i!==a?{inputIsHidden:s,inputIsHiddenAfterUpdate:void 0}:{},I=u,$=c&&d;return c&&!$&&(I={value:bs(f,p,p[0]||null),options:p,action:"initial-input-focus"},$=!d),(u==null?void 0:u.action)==="initial-input-focus"&&(I=null),X(X(X({},v),M),{},{prevProps:i,ariaSelection:I,prevWasFocused:$})}}]),n}(b.Component);A_.defaultProps=w8;var k8=b.forwardRef(function(e,t){var n=VL(e);return b.createElement(A_,q({ref:t},n))}),Zl=k8;const T8=T.div`
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
`,O8=T.label`
  font-size: 14px;
  color: #666;
  margin-bottom: 5px;
`,P8=({cityOptions:e,selectedCity:t,onChange:n,onInputChange:r})=>y.jsxs(T8,{children:[y.jsx(O8,{children:"Місто"}),y.jsx(Zl,{options:e,onInputChange:r,onChange:n,placeholder:"Почніть вводити місто...",value:t,noOptionsMessage:()=>"Введіть назву міста"})]}),M8=T.div`
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
`,I8=T.label`
  font-size: 14px;
  color: #666;
  margin-bottom: 5px;
`,j8=({options:e=[],value:t,onChange:n,selectedCity:r})=>y.jsxs(M8,{children:[y.jsx(I8,{children:"Спосіб доставки"}),y.jsx(Zl,{options:e,placeholder:"Оберіть спосіб доставки...",isDisabled:!r,value:e.find(i=>i.value===t)||null,onChange:i=>n(i.value)})]}),Dd=T.div`
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
`,Rd=T.label`
  font-size: 14px;
  color: #666;
  margin-bottom: 5px;
`,$8=({deliveryMethod:e,officeOptions:t,ukrOfficeOptions:n,selectedOffice:r,selectedUkrOffice:i,setSelectedOffice:o,setSelectedUkrOffice:a})=>e==="nova"?y.jsxs(Dd,{children:[y.jsx(Rd,{children:"Відділення Нової пошти"}),y.jsx(Zl,{options:t,onChange:l=>o(l),value:r,placeholder:"Оберіть відділення..."})]}):e==="ukr"?y.jsxs(Dd,{children:[y.jsx(Rd,{children:"Відділення Укрпошти"}),y.jsx(Zl,{options:n,onChange:l=>a(l),value:i,placeholder:"Оберіть відділення..."})]}):e==="pickup"?y.jsxs(Dd,{children:[y.jsx(Rd,{children:"Самовивіз"}),y.jsxs("div",{style:{backgroundColor:"#f9f9f9",padding:"10px",borderRadius:"6px",border:"1px solid #ddd",fontSize:"14px",color:"#333",lineHeight:"1.4"},children:[y.jsx("p",{children:"Ви обрали самовивіз."}),y.jsx("p",{children:"Адреса магазину: вул. Казармена 6Г, Київ"}),y.jsx("p",{children:"Графік роботи: Вт, Ср, Пт, Сб, Нд — 11:00–20:00; вихідні: Пн, Чт"}),y.jsx("p",{children:"Телефон: +380 99 999 99"})]})]}):null,D8=T.div`
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
`;const R8=T.button`
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
`,L8=T.ul`
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
`,A8=T.li`
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
`,F8=T.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 6px;
  border: 1px solid #eee;
  background-color: #f9f9f9;
`,N8=T.div`
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
`,z8=({cartItems:e,totalAmount:t,totalQuantity:n,isFormValid:r,handleSubmit:i})=>y.jsxs(D8,{children:[y.jsx("h3",{children:"Ваше замовлення"}),y.jsx(L8,{children:e.map(o=>{var a;return y.jsxs(A8,{children:[y.jsx(F8,{src:((a=o.image)==null?void 0:a[0])||Yn,alt:o.name}),y.jsxs(N8,{children:[y.jsx("p",{className:"item-name",children:o.name}),y.jsxs("p",{className:"item-details",children:[o.quantity," шт. × ",o.price," грн"]})]}),y.jsxs("span",{className:"item-total",children:[o.price*o.quantity," грн"]})]},o.id)})}),y.jsxs("div",{className:"summary-row",children:[y.jsxs("span",{children:["Товари (",n,")"]}),y.jsxs("span",{children:[t," грн"]})]}),y.jsxs("div",{className:"summary-row",children:[y.jsx("span",{children:"Доставка"}),y.jsx("span",{children:"За тарифами перевізника"})]}),y.jsx("hr",{}),y.jsxs("div",{className:"total",children:[y.jsx("span",{children:"Всього до сплати:"}),y.jsxs("span",{children:[t," грн"]})]}),y.jsx(R8,{type:"submit",disabled:!r,onClick:i,style:{opacity:r?1:.5,cursor:r?"pointer":"not-allowed"},children:"Підтвердити замовлення"}),!r&&y.jsx("p",{style:{color:"#888",fontSize:"12px",marginTop:"10px",textAlign:"center"},children:"Заповніть всі поля правильно, щоб продовжити"})]});var F_={exports:{}};function V8(e){return e&&typeof e=="object"&&"default"in e?e.default:e}var Ld=V8(b),B8=gu;function U8(e,t){for(var n=Object.getOwnPropertyNames(t),r=0;r<n.length;r++){var i=n[r],o=Object.getOwnPropertyDescriptor(t,i);o&&o.configurable&&e[i]===void 0&&Object.defineProperty(e,i,o)}return e}function Op(){return(Op=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function H8(e,t){e.prototype=Object.create(t.prototype),U8(e.prototype.constructor=e,t)}function W8(e,t){if(e==null)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],0<=t.indexOf(n)||(i[n]=e[n]);return i}function ci(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var G8=function(e,t,n,r,i,o,a,l){if(!e){var s;if(t===void 0)s=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var u=[n,r,i,o,a,l],c=0;(s=new Error(t.replace(/%s/g,function(){return u[c++]}))).name="Invariant Violation"}throw s.framesToPop=1,s}},r1=G8;function i1(e,t,n){if("selectionStart"in e&&"selectionEnd"in e)e.selectionStart=t,e.selectionEnd=n;else{var r=e.createTextRange();r.collapse(!0),r.moveStart("character",t),r.moveEnd("character",n-t),r.select()}}function Y8(e){var t=0,n=0;if("selectionStart"in e&&"selectionEnd"in e)t=e.selectionStart,n=e.selectionEnd;else{var r=document.selection.createRange();r.parentElement()===e&&(t=-r.moveStart("character",-e.value.length),n=-r.moveEnd("character",-e.value.length))}return{start:t,end:n,length:n-t}}var X8={9:"[0-9]",a:"[A-Za-z]","*":"[A-Za-z0-9]"},q8="_";function o1(e,t,n){var r="",i="",o=null,a=[];if(t===void 0&&(t=q8),n==null&&(n=X8),!e||typeof e!="string")return{maskChar:t,formatChars:n,mask:null,prefix:null,lastEditablePosition:null,permanents:[]};var l=!1;return e.split("").forEach(function(s){l=!l&&s==="\\"||(l||!n[s]?(a.push(r.length),r.length===a.length-1&&(i+=s)):o=r.length+1,r+=s,!1)}),{maskChar:t,formatChars:n,prefix:i,mask:r,lastEditablePosition:o,permanents:a}}function Dt(e,t){return e.permanents.indexOf(t)!==-1}function mc(e,t,n){var r=e.mask,i=e.formatChars;if(!n)return!1;if(Dt(e,t))return r[t]===n;var o=i[r[t]];return new RegExp(o).test(n)}function a1(e,t){return t.split("").every(function(n,r){return Dt(e,r)||!mc(e,r,n)})}function Ro(e,t){var n=e.maskChar,r=e.prefix;if(!n){for(;t.length>r.length&&Dt(e,t.length-1);)t=t.slice(0,t.length-1);return t.length}for(var i=r.length,o=t.length;o>=r.length;o--){var a=t[o];if(!Dt(e,o)&&mc(e,o,a)){i=o+1;break}}return i}function N_(e,t){return Ro(e,t)===e.mask.length}function Dn(e,t){var n=e.maskChar,r=e.mask,i=e.prefix;if(!n){for((t=Pp(e,"",t,0)).length<i.length&&(t=i);t.length<r.length&&Dt(e,t.length);)t+=r[t.length];return t}if(t)return Pp(e,Dn(e,""),t,0);for(var o=0;o<r.length;o++)Dt(e,o)?t+=r[o]:t+=n;return t}function K8(e,t,n,r){var i=n+r,o=e.maskChar,a=e.mask,l=e.prefix,s=t.split("");if(o)return s.map(function(c,d){return d<n||i<=d?c:Dt(e,d)?a[d]:o}).join("");for(var u=i;u<s.length;u++)Dt(e,u)&&(s[u]="");return n=Math.max(l.length,n),s.splice(n,i-n),t=s.join(""),Dn(e,t)}function Pp(e,t,n,r){var i=e.mask,o=e.maskChar,a=e.prefix,l=n.split(""),s=N_(e,t);return!o&&r>t.length&&(t+=i.slice(t.length,r)),l.every(function(u){for(;h=u,Dt(e,m=r)&&h!==i[m];){if(r>=t.length&&(t+=i[r]),c=u,d=r,o&&Dt(e,d)&&c===o)return!0;if(++r>=i.length)return!1}var c,d,m,h;return!mc(e,r,u)&&u!==o||(r<t.length?t=o||s||r<a.length?t.slice(0,r)+u+t.slice(r+1):(t=t.slice(0,r)+u+t.slice(r),Dn(e,t)):o||(t+=u),++r<i.length)}),t}function Z8(e,t,n,r){var i=e.mask,o=e.maskChar,a=n.split(""),l=r;return a.every(function(s){for(;c=s,Dt(e,u=r)&&c!==i[u];)if(++r>=i.length)return!1;var u,c;return(mc(e,r,s)||s===o)&&r++,r<i.length}),r-l}function Q8(e,t){for(var n=t;0<=n;--n)if(!Dt(e,n))return n;return null}function Xo(e,t){for(var n=e.mask,r=t;r<n.length;++r)if(!Dt(e,r))return r;return null}function Ad(e){return e||e===0?e+"":""}function J8(e,t,n,r,i){var o=e.mask,a=e.prefix,l=e.lastEditablePosition,s=t,u="",c=0,d=0,m=Math.min(i.start,n.start);return n.end>i.start?d=(c=Z8(e,r,u=s.slice(i.start,n.end),m))?i.length:0:s.length<r.length&&(d=r.length-s.length),s=r,d&&(d===1&&!i.length&&(m=i.start===n.start?Xo(e,n.start):Q8(e,n.start)),s=K8(e,s,m,d)),s=Pp(e,s,u,m),(m+=c)>=o.length?m=o.length:m<a.length&&!c?m=a.length:m>=a.length&&m<l&&c&&(m=Xo(e,m)),u||(u=null),{value:s=Dn(e,s),enteredString:u,selection:{start:m,end:m}}}function eF(){var e=new RegExp("windows","i"),t=new RegExp("phone","i"),n=navigator.userAgent;return e.test(n)&&t.test(n)}function ht(e){return typeof e=="function"}function tF(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame}function z_(){return window.cancelAnimationFrame||window.webkitCancelRequestAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame}function s1(e){return(z_()?tF():function(){return setTimeout(e,1e3/60)})(e)}function Fd(e){(z_()||clearTimeout)(e)}var nF=function(e){function t(r){var i=e.call(this,r)||this;i.focused=!1,i.mounted=!1,i.previousSelection=null,i.selectionDeferId=null,i.saveSelectionLoopDeferId=null,i.saveSelectionLoop=function(){i.previousSelection=i.getSelection(),i.saveSelectionLoopDeferId=s1(i.saveSelectionLoop)},i.runSaveSelectionLoop=function(){i.saveSelectionLoopDeferId===null&&i.saveSelectionLoop()},i.stopSaveSelectionLoop=function(){i.saveSelectionLoopDeferId!==null&&(Fd(i.saveSelectionLoopDeferId),i.saveSelectionLoopDeferId=null,i.previousSelection=null)},i.getInputDOMNode=function(){if(!i.mounted)return null;var g=B8.findDOMNode(ci(ci(i))),x=typeof window<"u"&&g instanceof window.Element;if(g&&!x)return null;if(g.nodeName!=="INPUT"&&(g=g.querySelector("input")),!g)throw new Error("react-input-mask: inputComponent doesn't contain input node");return g},i.getInputValue=function(){var g=i.getInputDOMNode();return g?g.value:null},i.setInputValue=function(g){var x=i.getInputDOMNode();x&&(i.value=g,x.value=g)},i.setCursorToEnd=function(){var g=Ro(i.maskOptions,i.value),x=Xo(i.maskOptions,g);x!==null&&i.setCursorPosition(x)},i.setSelection=function(g,x,S){S===void 0&&(S={});var f=i.getInputDOMNode(),p=i.isFocused();f&&p&&(S.deferred||i1(f,g,x),i.selectionDeferId!==null&&Fd(i.selectionDeferId),i.selectionDeferId=s1(function(){i.selectionDeferId=null,i1(f,g,x)}),i.previousSelection={start:g,end:x,length:Math.abs(x-g)})},i.getSelection=function(){return Y8(i.getInputDOMNode())},i.getCursorPosition=function(){return i.getSelection().start},i.setCursorPosition=function(g){i.setSelection(g,g)},i.isFocused=function(){return i.focused},i.getBeforeMaskedValueChangeConfig=function(){var g=i.maskOptions,x=g.mask,S=g.maskChar,f=g.permanents,p=g.formatChars;return{mask:x,maskChar:S,permanents:f,alwaysShowMask:!!i.props.alwaysShowMask,formatChars:p}},i.isInputAutofilled=function(g,x,S,f){var p=i.getInputDOMNode();try{if(p.matches(":-webkit-autofill"))return!0}catch{}return!i.focused||f.end<S.length&&x.end===g.length},i.onChange=function(g){var x=ci(ci(i)).beforePasteState,S=ci(ci(i)).previousSelection,f=i.props.beforeMaskedValueChange,p=i.getInputValue(),v=i.value,w=i.getSelection();i.isInputAutofilled(p,w,v,S)&&(v=Dn(i.maskOptions,""),S={start:0,end:0,length:0}),x&&(S=x.selection,v=x.value,w={start:S.start+p.length,end:S.start+p.length,length:0},p=v.slice(0,S.start)+p+v.slice(S.end),i.beforePasteState=null);var C=J8(i.maskOptions,p,w,v,S),k=C.enteredString,_=C.selection,E=C.value;if(ht(f)){var M=f({value:E,selection:_},{value:v,selection:S},k,i.getBeforeMaskedValueChangeConfig());E=M.value,_=M.selection}i.setInputValue(E),ht(i.props.onChange)&&i.props.onChange(g),i.isWindowsPhoneBrowser?i.setSelection(_.start,_.end,{deferred:!0}):i.setSelection(_.start,_.end)},i.onFocus=function(g){var x=i.props.beforeMaskedValueChange,S=i.maskOptions,f=S.mask,p=S.prefix;if(i.focused=!0,i.mounted=!0,f){if(i.value)Ro(i.maskOptions,i.value)<i.maskOptions.mask.length&&i.setCursorToEnd();else{var v=Dn(i.maskOptions,p),w=Dn(i.maskOptions,v),C=Ro(i.maskOptions,w),k=Xo(i.maskOptions,C),_={start:k,end:k};if(ht(x)){var E=x({value:w,selection:_},{value:i.value,selection:null},null,i.getBeforeMaskedValueChangeConfig());w=E.value,_=E.selection}var M=w!==i.getInputValue();M&&i.setInputValue(w),M&&ht(i.props.onChange)&&i.props.onChange(g),i.setSelection(_.start,_.end)}i.runSaveSelectionLoop()}ht(i.props.onFocus)&&i.props.onFocus(g)},i.onBlur=function(g){var x=i.props.beforeMaskedValueChange,S=i.maskOptions.mask;if(i.stopSaveSelectionLoop(),i.focused=!1,S&&!i.props.alwaysShowMask&&a1(i.maskOptions,i.value)){var f="";ht(x)&&(f=x({value:f,selection:null},{value:i.value,selection:i.previousSelection},null,i.getBeforeMaskedValueChangeConfig()).value);var p=f!==i.getInputValue();p&&i.setInputValue(f),p&&ht(i.props.onChange)&&i.props.onChange(g)}ht(i.props.onBlur)&&i.props.onBlur(g)},i.onMouseDown=function(g){if(!i.focused&&document.addEventListener){i.mouseDownX=g.clientX,i.mouseDownY=g.clientY,i.mouseDownTime=new Date().getTime();var x=function S(f){if(document.removeEventListener("mouseup",S),i.focused){var p=Math.abs(f.clientX-i.mouseDownX),v=Math.abs(f.clientY-i.mouseDownY),w=Math.max(p,v),C=new Date().getTime()-i.mouseDownTime;(w<=10&&C<=200||w<=5&&C<=300)&&i.setCursorToEnd()}};document.addEventListener("mouseup",x)}ht(i.props.onMouseDown)&&i.props.onMouseDown(g)},i.onPaste=function(g){ht(i.props.onPaste)&&i.props.onPaste(g),g.defaultPrevented||(i.beforePasteState={value:i.getInputValue(),selection:i.getSelection()},i.setInputValue(""))},i.handleRef=function(g){i.props.children==null&&ht(i.props.inputRef)&&i.props.inputRef(g)};var o=r.mask,a=r.maskChar,l=r.formatChars,s=r.alwaysShowMask,u=r.beforeMaskedValueChange,c=r.defaultValue,d=r.value;i.maskOptions=o1(o,a,l),c==null&&(c=""),d==null&&(d=c);var m=Ad(d);if(i.maskOptions.mask&&(s||m)&&(m=Dn(i.maskOptions,m),ht(u))){var h=r.value;r.value==null&&(h=c),m=u({value:m,selection:null},{value:h=Ad(h),selection:null},null,i.getBeforeMaskedValueChangeConfig()).value}return i.value=m,i}H8(t,e);var n=t.prototype;return n.componentDidMount=function(){this.mounted=!0,this.getInputDOMNode()&&(this.isWindowsPhoneBrowser=eF(),this.maskOptions.mask&&this.getInputValue()!==this.value&&this.setInputValue(this.value))},n.componentDidUpdate=function(){var r=this.previousSelection,i=this.props,o=i.beforeMaskedValueChange,a=i.alwaysShowMask,l=i.mask,s=i.maskChar,u=i.formatChars,c=this.maskOptions,d=a||this.isFocused(),m=this.props.value!=null,h=m?Ad(this.props.value):this.value,g=r?r.start:null;if(this.maskOptions=o1(l,s,u),this.maskOptions.mask){!c.mask&&this.isFocused()&&this.runSaveSelectionLoop();var x=this.maskOptions.mask&&this.maskOptions.mask!==c.mask;if(c.mask||m||(h=this.getInputValue()),(x||this.maskOptions.mask&&(h||d))&&(h=Dn(this.maskOptions,h)),x){var S=Ro(this.maskOptions,h);(g===null||S<g)&&(g=N_(this.maskOptions,h)?S:Xo(this.maskOptions,S))}!this.maskOptions.mask||!a1(this.maskOptions,h)||d||m&&this.props.value||(h="");var f={start:g,end:g};if(ht(o)){var p=o({value:h,selection:f},{value:this.value,selection:this.previousSelection},null,this.getBeforeMaskedValueChangeConfig());h=p.value,f=p.selection}this.value=h;var v=this.getInputValue()!==this.value;v?(this.setInputValue(this.value),this.forceUpdate()):x&&this.forceUpdate();var w=!1;f.start!=null&&f.end!=null&&(w=!r||r.start!==f.start||r.end!==f.end),(w||v)&&this.setSelection(f.start,f.end)}else c.mask&&(this.stopSaveSelectionLoop(),this.forceUpdate())},n.componentWillUnmount=function(){this.mounted=!1,this.selectionDeferId!==null&&Fd(this.selectionDeferId),this.stopSaveSelectionLoop()},n.render=function(){var r,i=this.props,o=(i.mask,i.alwaysShowMask,i.maskChar,i.formatChars,i.inputRef,i.beforeMaskedValueChange,i.children),a=W8(i,["mask","alwaysShowMask","maskChar","formatChars","inputRef","beforeMaskedValueChange","children"]);if(o){ht(o)||r1(!1);var l=["onChange","onPaste","onMouseDown","onFocus","onBlur","value","disabled","readOnly"],s=Op({},a);l.forEach(function(c){return delete s[c]}),r=o(s),l.filter(function(c){return r.props[c]!=null&&r.props[c]!==a[c]}).length&&r1(!1)}else r=Ld.createElement("input",Op({ref:this.handleRef},a));var u={onFocus:this.onFocus,onBlur:this.onBlur};return this.maskOptions.mask&&(a.disabled||a.readOnly||(u.onChange=this.onChange,u.onPaste=this.onPaste,u.onMouseDown=this.onMouseDown),a.value!=null&&(u.value=this.value)),r=Ld.cloneElement(r,u)},t}(Ld.Component),rF=nF;F_.exports=rF;var iF=F_.exports;const oF=v1(iF);T.div`
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
`;const aF=({formData:e,setFormData:t,errors:n})=>{const r=i=>{const{name:o,value:a}=i.target;o==="phone"&&!a.startsWith("+38 (0")||t(l=>({...l,[o]:a}))};return y.jsxs(y.Fragment,{children:[y.jsx("h3",{children:"Контактні дані"}),y.jsxs(Nd,{children:[y.jsx(zd,{children:"Прізвище та ім’я"}),y.jsx(Vd,{type:"text",name:"fullName",value:e.fullName,onChange:r,placeholder:"Прізвище Ім'я",autoComplete:"name"}),n.fullName&&y.jsx(Bd,{children:n.fullName})]}),y.jsxs(Nd,{children:[y.jsx(zd,{children:"Номер телефону"}),y.jsx(oF,{mask:"+38 (099) 999-99-99",maskChar:"_",name:"phone",autoComplete:"tel",value:e.phone,onChange:r,children:i=>y.jsx(Vd,{...i,type:"tel"})}),n.phone&&y.jsx(Bd,{children:n.phone})]}),y.jsxs(Nd,{children:[y.jsx(zd,{children:"E-mail"}),y.jsx(Vd,{type:"email",name:"email",value:e.email,onChange:r,placeholder:"email@example.com",autoComplete:"email"}),n.email&&y.jsx(Bd,{children:n.email})]})]})},sF=T.div`
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
`;const lF=T.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  text-align: left;

  @media screen and (min-width: 1200px) {
    flex-direction: row;
    align-items: flex-start;
  }
`,uF=T.div`
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
`;const cF=[{city:"Київ",address:"вул. Хрещатик, 1"},{city:"Київ",address:"вул. Січових Стрільців, 10"},{city:"Львів",address:"просп. Свободи, 5"}],l1={}.VITE_NP_API_KEY,u1="https://api.novaposhta.ua/v2.0/json/",dF=()=>{const e=Fn(R=>R.cart.items),t=eu(),[n,r]=b.useState({fullName:"",phone:"+38 (0",email:"",city:"",postOffice:""}),[i,o]=b.useState(""),[a,l]=b.useState(null),[s,u]=b.useState(null),[c,d]=b.useState(null),[m,h]=b.useState(null),[g,x]=b.useState([]),[S,f]=b.useState([]),[p,v]=b.useState([]),[w,C]=b.useState(""),k=e.reduce((R,F)=>R+F.price*F.quantity,0),_=e.reduce((R,F)=>R+F.quantity,0),E=()=>{const R=new Date().getFullYear().toString().slice(-2),F=Date.now().toString().slice(-4),A=Math.floor(100+Math.random()*900);return`${R}${F}${A}`};b.useEffect(()=>{if(i.length<2)return;const R=setTimeout(async()=>{const A=await(await fetch(u1,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({apiKey:l1,modelName:"Address",calledMethod:"getCities",methodProperties:{FindByString:i}})})).json();x(A.data.map(O=>({value:O.Ref,label:O.Description})))},500);return()=>clearTimeout(R)},[i]),b.useEffect(()=>{if(!a||s!=="nova")return;(async()=>{const A=await(await fetch(u1,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({apiKey:l1,modelName:"AddressGeneral",calledMethod:"getWarehouses",methodProperties:{CityRef:a.value}})})).json();f(A.data.map(O=>({value:O.Ref,label:O.Description})))})()},[a,s]),b.useEffect(()=>{if(s!=="ukr"||!a)return;const R=cF.filter(F=>F.city===a.label).filter(F=>F.address.toLowerCase().includes(w.toLowerCase())).slice(0,20);v(R.map((F,A)=>({value:A,label:F.address})))},[a,s,w]);const M=R=>{l(R),r(F=>({...F,city:(R==null?void 0:R.label)||"",postOffice:""})),u(null),d(null),h(null)},I=()=>{const R={};return n.fullName.trim().split(" ").length<2&&(R.fullName="Введіть прізвище та ім'я"),/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(n.email)||(R.email="Некоректний email"),n.phone.replace(/\D/g,"").length<12&&(R.phone="Номер неповний"),a||(R.city=!0),s==="nova"&&!c&&(R.postOffice=!0),s==="ukr"&&!m&&(R.postOffice=!0),s||(R.delivery=!0),R},$=b.useMemo(I,[n,s,c,m,a]),P=Object.keys($).length===0&&e.length>0,j=R=>{R.preventDefault();const F={...n,city:a.label,deliveryMethod:s==="nova"?"Нова Пошта":s==="ukr"?"УкрПошта":"Самовивіз",address:s==="nova"?c==null?void 0:c.label:s==="ukr"?m==null?void 0:m.label:"Самовивіз",items:e,total:k,orderNumer:E()};t("/order-confirmation",{state:{order:F}}),console.log("Замовлення готове до відправки:",F)},L=b.useMemo(()=>{const R=[{value:"nova",label:"Нова пошта"},{value:"ukr",label:"Укрпошта"}];return(a==null?void 0:a.label)==="Київ"&&R.push({value:"pickup",label:"Самовивіз"}),R},[a]);return y.jsx(sF,{children:y.jsxs(lF,{children:[y.jsxs(uF,{children:[y.jsx(aF,{formData:n,setFormData:r,errors:$}),y.jsx(P8,{cityOptions:g,selectedCity:a,onChange:M,onInputChange:o}),y.jsx(j8,{options:L,value:s,onChange:u,selectedCity:a}),y.jsx($8,{deliveryMethod:s,officeOptions:S,ukrOfficeOptions:p,selectedOffice:c,selectedUkrOffice:m,setSelectedOffice:d,setSelectedUkrOffice:h,setUkrSearch:C})]}),y.jsx(z8,{cartItems:e,totalAmount:k,totalQuantity:_,isFormValid:P,handleSubmit:j})]})})},c1=T.div`
font-family: var(--main-font);
  max-width: 800px;
  margin: 40px auto;
  padding: 40px 20px;
  background: #ffffff;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  text-align: center;
  font-family: 'Inter', sans-serif;
`,fF=T.h1`
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
`,pF=T.div`
font-family: var(--main-font);
  background: #f8f9fa;
  border-radius: 12px;
  padding: 24px;
  margin: 30px 0;
  text-align: left;
  border: 1px solid #edf2f7;
`,d1=T.h3`
  font-size: 18px;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 16px;
  border-bottom: 2px solid #e2e8f0;
  padding-bottom: 8px;
`,hF=T.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 20px;
`,mF=T.li`
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
`,gF=T.div`
  background: #fff4e5; 
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 30px;
  border: 1px solid #ffe3c1;
`,vF=T.div`
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
`,yF=()=>{var r;const e=eu(),n=(r=Zi().state)==null?void 0:r.order;return n?y.jsxs(c1,{children:[y.jsx(fF,{children:"Дякуємо за ваше замовлення!"}),y.jsxs(di,{children:["Ваше замовлення ",y.jsxs("strong",{children:["№",n.orderNumer]})," успішно прийняте."]}),y.jsx(di,{children:"Ми зв’яжемось з Вами в найближчий час"}),y.jsxs(pF,{children:[y.jsx(d1,{children:"Деталі замовлення:"}),y.jsx(hF,{children:n.items.map(i=>y.jsxs(mF,{children:[y.jsxs("span",{className:"item-info",children:[i.name," (x",i.quantity,")"]}),y.jsxs("span",{className:"item-price",children:[i.price*i.quantity," грн"]})]},i.id))}),y.jsxs(di,{children:[y.jsx("strong",{children:"Спосіб доставки:"})," ",n.deliveryMethod]}),y.jsxs(di,{children:[y.jsx("strong",{children:"Адреса отримання:"})," ",n.city,", ",n.address]})]}),n.paymentMethod==="online"&&y.jsxs(gF,{children:[y.jsx(d1,{children:"Оплата"}),y.jsx(di,{style:{marginBottom:"15px"},children:"Натисніть кнопку нижче для миттєвої оплати:"}),y.jsx(ws,{primary:!0,onClick:()=>window.location.href=n.paymentLink,children:"Оплатити зараз"})]}),y.jsxs(vF,{children:[y.jsx(ws,{primary:!0,onClick:()=>e("/"),children:"Повернутися на головну"}),y.jsx(ws,{onClick:()=>e("/catalog"),children:"Продовжити покупки"})]})]}):y.jsxs(c1,{children:[y.jsx(di,{children:"Завантаження даних замовлення..."}),y.jsx(ws,{onClick:()=>e("/"),children:"На головну"})]})},xF=T.section`
  background-color: var(--second-background);
`,bF=T.div`
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
`,wF=T.section`
  padding: 40px 0;
  background-color: #f9f9f980;
  border-radius: 12px;
  margin-bottom: 30px;
`,SF=T.h1`
  font-family: var(--main-font);
  font-size: 28px;
  color: var(--black-color);
  margin-bottom: 10px;

  @media screen and (min-width: 768px) {
    font-size: 42px;
  }
`,_F=T.p`

  font-size: 16px;
  color: #666;
`,EF=T.section`
  margin-bottom: 50px;
`,CF=T.p`
  font-family: var(--second-font);
  font-weight:400;
  font-size: 18px;
  line-height: 1.6;
  max-width: 800px;
  margin: 0 auto 40px;
  color: #444;
`,kF=T.section`
  margin-bottom: 60px;
`,TF=T.h2`
  margin-bottom: 30px;
`,OF=T.div`
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
`,PF=()=>y.jsxs(xF,{children:[y.jsxs(bF,{children:[y.jsxs(wF,{children:[y.jsx(SF,{children:"Про Дідів Хлів"}),y.jsx(_F,{children:"Даємо друге життя якісним велозапчастинам"})]}),y.jsxs(EF,{children:[y.jsx(CF,{children:"Бізнес створений з переконанням, що обладнання може бути доступним. Ми спеціалізуємося на розборі цікавих і унікальних велосипедів, усі запчастини перевірені нами. Стараємося пропонувати тільки найкраще від Shimano, Sram, Campagnolo та інших світових брендів."}),y.jsx(kS,{})]}),y.jsxs(kF,{children:[y.jsx(TF,{children:"Наша майстерня"}),y.jsxs(OF,{children:[y.jsx(Ss,{color:"#e2e2e2",children:"Фото майстерні"}),y.jsx(Ss,{color:"#d1d1d1",children:"Процес діагностики"}),y.jsx(Ss,{color:"#bcbcbc",children:"Склад запчастин"}),y.jsx(Ss,{color:"#a8a8a8",children:"Готові велосипеди"})]})]})]})," "]}),MF=()=>{const{pathname:e}=Zi();return b.useEffect(()=>{window.scrollTo(0,0)},[e]),null},IF=T.section`
  background-color:  var(--second-background);
  padding: 40px 0;
  min-height: 80vh;
`,jF=T.div`
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
`,$F=T.h1`
  font-family: var(--main-font); 
  font-size: 32px;
  color: var(--black-color);
  margin-bottom: 10px;
  text-transform: uppercase;
`,DF=T.p`
  color: #585555;
  margin-bottom: 40px;
`,RF=T.div`
font-family: var(--second-font);
font-weight: 400;
  display: grid;
  gap: 40px;
  text-align: left;

  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    align-items: start;
  }
`,LF=T.div`
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
`,AF=T.div`
  background: #ffffff;
  padding: 40px 30px;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%; 
`,FF=T.h2`
  margin-bottom: 15px;
  color: var(--brown-color);
  font-size: 24px;
  font-family: var(--main-font);
`,NF=T.p`
  color: #666;
  font-size: 14px;
  line-height: 1.6;
  margin-bottom: 30px;
`,zF=T.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
  
  @media screen and (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`,f1=T.a`
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
`;const VF=T.div`
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

 
`,BF=()=>y.jsx(IF,{children:y.jsxs(jF,{children:[y.jsx($F,{children:"Контакти"}),y.jsx(DF,{children:"Зв’яжіться з нами для консультації або замовлення"}),y.jsxs(RF,{children:[y.jsxs(LF,{children:[y.jsxs(_s,{children:[y.jsx("h3",{children:"Адреса"}),y.jsx("p",{children:"вул. Казармена 6Г, Київ, Україна"}),y.jsx("a",{style:{color:"black",fontWeight:"500",fontSize:"0.9rem",display:"inline-block",marginTop:"5px",cursor:"pointer"},href:"https://www.google.com/maps/search/?api=1&query=вул.+Казармена+6Г,+Київ,+Україна",target:"_blank",rel:"noopener noreferrer",children:"📍 Показати на карті"})]}),y.jsxs(_s,{children:[y.jsx("h3",{children:"Телефон"}),y.jsx("p",{children:"+38 (097) 123-45-67"})]}),y.jsxs(_s,{children:[y.jsx("h3",{children:"Email"}),y.jsx("p",{children:"didivhliv.com"})]}),y.jsxs(_s,{children:[y.jsx("h3",{children:"Графік роботи"}),y.jsx("p",{children:"З 11:00 - 20:00"}),y.jsx("p",{children:"Вихідні: Пн, Чт"})]})]}),y.jsxs(AF,{children:[y.jsx(FF,{children:"Ми в соцмережах"}),y.jsx(NF,{children:"Слідкуйте за нашими новинами, новими надходженнями та крутими вело-поїздками у зручному для вас форматі."}),y.jsxs(zF,{children:[y.jsxs(f1,{href:"https://www.instagram.com/didivxliv?igsh=MXhsNWRjdW5rajYwdQ==",target:"_blank",rel:"noopener noreferrer",children:[y.jsx("svg",{width:"20px",children:y.jsx("use",{href:`${un}#icon-instagram`})}),y.jsx("span",{children:"Instagram"})]}),y.jsxs(f1,{href:"https://t.me/didivxliv",target:"_blank",rel:"noopener noreferrer",children:[y.jsx("svg",{width:"20px",children:y.jsx("use",{href:`${un}#icon-telegram`})}),y.jsx("span",{children:"Telegram"})]})]}),y.jsx(VF,{children:"Приєднуйся до спільноти!"})]})]})]})}),UF="";function HF(){return console.log(UF),y.jsxs(m3,{children:[y.jsx(ZM,{}),y.jsx(MF,{}),y.jsx(b.Suspense,{fallback:y.jsx(qM,{}),children:y.jsx(l2,{children:y.jsxs(mt,{path:"/",element:y.jsx(ZO,{}),children:[y.jsx(mt,{index:!0,element:y.jsx(D5,{})})," ",y.jsx(mt,{path:"catalog",element:y.jsx(u3,{})}),y.jsx(mt,{path:"/catalog/:category",element:y.jsx($$,{})}),y.jsx(mt,{path:"/product/:id",element:y.jsx($R,{})}),y.jsx(mt,{path:"cart",element:y.jsx(aL,{})}),y.jsx(mt,{path:"favorite",element:y.jsx(OL,{})}),y.jsx(mt,{path:"checkout",element:y.jsx(dF,{})}),y.jsx(mt,{path:"/order-confirmation",element:y.jsx(yF,{})}),y.jsx(mt,{path:"about",element:y.jsx(PF,{})}),y.jsx(mt,{path:"contacts",element:y.jsx(BF,{})}),y.jsx(mt,{path:"delivery",element:y.jsx(DL,{})}),y.jsx(mt,{path:"*",element:y.jsx(h3,{})})]})})})]})}var Om="persist:",V_="persist/FLUSH",Pm="persist/REHYDRATE",B_="persist/PAUSE",U_="persist/PERSIST",H_="persist/PURGE",W_="persist/REGISTER",WF=-1;function Ks(e){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Ks=function(n){return typeof n}:Ks=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Ks(e)}function p1(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function GF(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?p1(n,!0).forEach(function(r){YF(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p1(n).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function YF(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function XF(e,t,n,r){r.debug;var i=GF({},n);return e&&Ks(e)==="object"&&Object.keys(e).forEach(function(o){o!=="_persist"&&t[o]===n[o]&&(i[o]=e[o])}),i}function qF(e){var t=e.blacklist||null,n=e.whitelist||null,r=e.transforms||[],i=e.throttle||0,o="".concat(e.keyPrefix!==void 0?e.keyPrefix:Om).concat(e.key),a=e.storage,l;e.serialize===!1?l=function(C){return C}:typeof e.serialize=="function"?l=e.serialize:l=KF;var s=e.writeFailHandler||null,u={},c={},d=[],m=null,h=null,g=function(C){Object.keys(C).forEach(function(k){f(k)&&u[k]!==C[k]&&d.indexOf(k)===-1&&d.push(k)}),Object.keys(u).forEach(function(k){C[k]===void 0&&f(k)&&d.indexOf(k)===-1&&u[k]!==void 0&&d.push(k)}),m===null&&(m=setInterval(x,i)),u=C};function x(){if(d.length===0){m&&clearInterval(m),m=null;return}var w=d.shift(),C=r.reduce(function(k,_){return _.in(k,w,u)},u[w]);if(C!==void 0)try{c[w]=l(C)}catch(k){console.error("redux-persist/createPersistoid: error serializing state",k)}else delete c[w];d.length===0&&S()}function S(){Object.keys(c).forEach(function(w){u[w]===void 0&&delete c[w]}),h=a.setItem(o,l(c)).catch(p)}function f(w){return!(n&&n.indexOf(w)===-1&&w!=="_persist"||t&&t.indexOf(w)!==-1)}function p(w){s&&s(w)}var v=function(){for(;d.length!==0;)x();return h||Promise.resolve()};return{update:g,flush:v}}function KF(e){return JSON.stringify(e)}function ZF(e){var t=e.transforms||[],n="".concat(e.keyPrefix!==void 0?e.keyPrefix:Om).concat(e.key),r=e.storage;e.debug;var i;return e.deserialize===!1?i=function(a){return a}:typeof e.deserialize=="function"?i=e.deserialize:i=QF,r.getItem(n).then(function(o){if(o)try{var a={},l=i(o);return Object.keys(l).forEach(function(s){a[s]=t.reduceRight(function(u,c){return c.out(u,s,l)},i(l[s]))}),a}catch(s){throw s}else return})}function QF(e){return JSON.parse(e)}function JF(e){var t=e.storage,n="".concat(e.keyPrefix!==void 0?e.keyPrefix:Om).concat(e.key);return t.removeItem(n,eN)}function eN(e){}function h1(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Tn(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?h1(n,!0).forEach(function(r){tN(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h1(n).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function tN(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function nN(e,t){if(e==null)return{};var n=rN(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function rN(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}var iN=5e3;function G_(e,t){var n=e.version!==void 0?e.version:WF;e.debug;var r=e.stateReconciler===void 0?XF:e.stateReconciler,i=e.getStoredState||ZF,o=e.timeout!==void 0?e.timeout:iN,a=null,l=!1,s=!0,u=function(d){return d._persist.rehydrated&&a&&!s&&a.update(d),d};return function(c,d){var m=c||{},h=m._persist,g=nN(m,["_persist"]),x=g;if(d.type===U_){var S=!1,f=function(E,M){S||(d.rehydrate(e.key,E,M),S=!0)};if(o&&setTimeout(function(){!S&&f(void 0,new Error('redux-persist: persist timed out for persist key "'.concat(e.key,'"')))},o),s=!1,a||(a=qF(e)),h)return Tn({},t(x,d),{_persist:h});if(typeof d.rehydrate!="function"||typeof d.register!="function")throw new Error("redux-persist: either rehydrate or register is not a function on the PERSIST action. This can happen if the action is being replayed. This is an unexplored use case, please open an issue and we will figure out a resolution.");return d.register(e.key),i(e).then(function(_){var E=e.migrate||function(M,I){return Promise.resolve(M)};E(_,n).then(function(M){f(M)},function(M){f(void 0,M)})},function(_){f(void 0,_)}),Tn({},t(x,d),{_persist:{version:n,rehydrated:!1}})}else{if(d.type===H_)return l=!0,d.result(JF(e)),Tn({},t(x,d),{_persist:h});if(d.type===V_)return d.result(a&&a.flush()),Tn({},t(x,d),{_persist:h});if(d.type===B_)s=!0;else if(d.type===Pm){if(l)return Tn({},x,{_persist:Tn({},h,{rehydrated:!0})});if(d.key===e.key){var p=t(x,d),v=d.payload,w=r!==!1&&v!==void 0?r(v,c,p,e):p,C=Tn({},w,{_persist:Tn({},h,{rehydrated:!0})});return u(C)}}}if(!h)return t(c,d);var k=t(x,d);return k===x?c:u(Tn({},k,{_persist:h}))}}function m1(e){return sN(e)||aN(e)||oN()}function oN(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function aN(e){if(Symbol.iterator in Object(e)||Object.prototype.toString.call(e)==="[object Arguments]")return Array.from(e)}function sN(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}function g1(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Mp(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?g1(n,!0).forEach(function(r){lN(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g1(n).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function lN(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Y_={registry:[],bootstrapped:!1},uN=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:Y_,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case W_:return Mp({},t,{registry:[].concat(m1(t.registry),[n.key])});case Pm:var r=t.registry.indexOf(n.key),i=m1(t.registry);return i.splice(r,1),Mp({},t,{registry:i,bootstrapped:i.length===0});default:return t}};function cN(e,t,n){var r=n||!1,i=tm(uN,Y_,t&&t.enhancer?t.enhancer:void 0),o=function(u){i.dispatch({type:W_,key:u})},a=function(u,c,d){var m={type:Pm,payload:c,err:d,key:u};e.dispatch(m),i.dispatch(m),r&&l.getState().bootstrapped&&(r(),r=!1)},l=Mp({},i,{purge:function(){var u=[];return e.dispatch({type:H_,result:function(d){u.push(d)}}),Promise.all(u)},flush:function(){var u=[];return e.dispatch({type:V_,result:function(d){u.push(d)}}),Promise.all(u)},pause:function(){e.dispatch({type:B_})},persist:function(){e.dispatch({type:U_,register:o,rehydrate:a})}});return t&&t.manualPersist||l.persist(),l}var Mm={},Im={};Im.__esModule=!0;Im.default=pN;function Zs(e){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Zs=function(n){return typeof n}:Zs=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Zs(e)}function Ud(){}var dN={getItem:Ud,setItem:Ud,removeItem:Ud};function fN(e){if((typeof self>"u"?"undefined":Zs(self))!=="object"||!(e in self))return!1;try{var t=self[e],n="redux-persist ".concat(e," test");t.setItem(n,"test"),t.getItem(n),t.removeItem(n)}catch{return!1}return!0}function pN(e){var t="".concat(e,"Storage");return fN(t)?self[t]:dN}Mm.__esModule=!0;Mm.default=gN;var hN=mN(Im);function mN(e){return e&&e.__esModule?e:{default:e}}function gN(e){var t=(0,hN.default)(e);return{getItem:function(r){return new Promise(function(i,o){i(t.getItem(r))})},setItem:function(r,i){return new Promise(function(o,a){o(t.setItem(r,i))})},removeItem:function(r){return new Promise(function(i,o){i(t.removeItem(r))})}}}var jm=void 0,vN=yN(Mm);function yN(e){return e&&e.__esModule?e:{default:e}}var xN=(0,vN.default)("local");jm=xN;const bN={key:"cart",storage:jm},wN={key:"favorites",storage:jm},SN=G_(bN,qj),_N=G_(wN,I$),X_=jj({reducer:{cart:SN,favorites:_N},middleware:e=>e({serializableCheck:!1})});cN(X_);Xd.createRoot(document.getElementById("root")).render(y.jsx(uO,{store:X_,children:y.jsx(W.StrictMode,{children:y.jsx(h2,{basename:"/Didiv/",children:y.jsx(HF,{})})})}));
