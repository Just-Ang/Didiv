function _P(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const i=Object.getOwnPropertyDescriptor(r,o);i&&Object.defineProperty(e,o,i.get?i:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();var ne=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Ri(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function Et(e){if(e.__esModule)return e;var t=e.default;if(typeof t=="function"){var n=function r(){return this instanceof r?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach(function(r){var o=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(n,r,o.get?o:{enumerable:!0,get:function(){return e[r]}})}),n}var qb={exports:{}},bu={},Yb={exports:{}},se={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _s=Symbol.for("react.element"),kP=Symbol.for("react.portal"),PP=Symbol.for("react.fragment"),OP=Symbol.for("react.strict_mode"),TP=Symbol.for("react.profiler"),jP=Symbol.for("react.provider"),$P=Symbol.for("react.context"),IP=Symbol.for("react.forward_ref"),MP=Symbol.for("react.suspense"),AP=Symbol.for("react.memo"),DP=Symbol.for("react.lazy"),iv=Symbol.iterator;function LP(e){return e===null||typeof e!="object"?null:(e=iv&&e[iv]||e["@@iterator"],typeof e=="function"?e:null)}var Xb={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Kb=Object.assign,Qb={};function Fi(e,t,n){this.props=e,this.context=t,this.refs=Qb,this.updater=n||Xb}Fi.prototype.isReactComponent={};Fi.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Fi.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Zb(){}Zb.prototype=Fi.prototype;function Fm(e,t,n){this.props=e,this.context=t,this.refs=Qb,this.updater=n||Xb}var zm=Fm.prototype=new Zb;zm.constructor=Fm;Kb(zm,Fi.prototype);zm.isPureReactComponent=!0;var av=Array.isArray,Jb=Object.prototype.hasOwnProperty,Nm={current:null},ew={key:!0,ref:!0,__self:!0,__source:!0};function tw(e,t,n){var r,o={},i=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(i=""+t.key),t)Jb.call(t,r)&&!ew.hasOwnProperty(r)&&(o[r]=t[r]);var l=arguments.length-2;if(l===1)o.children=n;else if(1<l){for(var s=Array(l),c=0;c<l;c++)s[c]=arguments[c+2];o.children=s}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)o[r]===void 0&&(o[r]=l[r]);return{$$typeof:_s,type:e,key:i,ref:a,props:o,_owner:Nm.current}}function RP(e,t){return{$$typeof:_s,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Bm(e){return typeof e=="object"&&e!==null&&e.$$typeof===_s}function FP(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var sv=/\/+/g;function ef(e,t){return typeof e=="object"&&e!==null&&e.key!=null?FP(""+e.key):t.toString(36)}function Al(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(i){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case _s:case kP:a=!0}}if(a)return a=e,o=o(a),e=r===""?"."+ef(a,0):r,av(o)?(n="",e!=null&&(n=e.replace(sv,"$&/")+"/"),Al(o,t,n,"",function(c){return c})):o!=null&&(Bm(o)&&(o=RP(o,n+(!o.key||a&&a.key===o.key?"":(""+o.key).replace(sv,"$&/")+"/")+e)),t.push(o)),1;if(a=0,r=r===""?".":r+":",av(e))for(var l=0;l<e.length;l++){i=e[l];var s=r+ef(i,l);a+=Al(i,t,n,s,o)}else if(s=LP(e),typeof s=="function")for(e=s.call(e),l=0;!(i=e.next()).done;)i=i.value,s=r+ef(i,l++),a+=Al(i,t,n,s,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function qs(e,t,n){if(e==null)return e;var r=[],o=0;return Al(e,r,"","",function(i){return t.call(n,i,o++)}),r}function zP(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ct={current:null},Dl={transition:null},NP={ReactCurrentDispatcher:Ct,ReactCurrentBatchConfig:Dl,ReactCurrentOwner:Nm};se.Children={map:qs,forEach:function(e,t,n){qs(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return qs(e,function(){t++}),t},toArray:function(e){return qs(e,function(t){return t})||[]},only:function(e){if(!Bm(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};se.Component=Fi;se.Fragment=PP;se.Profiler=TP;se.PureComponent=Fm;se.StrictMode=OP;se.Suspense=MP;se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=NP;se.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Kb({},e.props),o=e.key,i=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,a=Nm.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in t)Jb.call(t,s)&&!ew.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&l!==void 0?l[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){l=Array(s);for(var c=0;c<s;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:_s,type:e.type,key:o,ref:i,props:r,_owner:a}};se.createContext=function(e){return e={$$typeof:$P,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:jP,_context:e},e.Consumer=e};se.createElement=tw;se.createFactory=function(e){var t=tw.bind(null,e);return t.type=e,t};se.createRef=function(){return{current:null}};se.forwardRef=function(e){return{$$typeof:IP,render:e}};se.isValidElement=Bm;se.lazy=function(e){return{$$typeof:DP,_payload:{_status:-1,_result:e},_init:zP}};se.memo=function(e,t){return{$$typeof:AP,type:e,compare:t===void 0?null:t}};se.startTransition=function(e){var t=Dl.transition;Dl.transition={};try{e()}finally{Dl.transition=t}};se.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};se.useCallback=function(e,t){return Ct.current.useCallback(e,t)};se.useContext=function(e){return Ct.current.useContext(e)};se.useDebugValue=function(){};se.useDeferredValue=function(e){return Ct.current.useDeferredValue(e)};se.useEffect=function(e,t){return Ct.current.useEffect(e,t)};se.useId=function(){return Ct.current.useId()};se.useImperativeHandle=function(e,t,n){return Ct.current.useImperativeHandle(e,t,n)};se.useInsertionEffect=function(e,t){return Ct.current.useInsertionEffect(e,t)};se.useLayoutEffect=function(e,t){return Ct.current.useLayoutEffect(e,t)};se.useMemo=function(e,t){return Ct.current.useMemo(e,t)};se.useReducer=function(e,t,n){return Ct.current.useReducer(e,t,n)};se.useRef=function(e){return Ct.current.useRef(e)};se.useState=function(e){return Ct.current.useState(e)};se.useSyncExternalStore=function(e,t,n){return Ct.current.useSyncExternalStore(e,t,n)};se.useTransition=function(){return Ct.current.useTransition()};se.version="18.2.0";Yb.exports=se;var x=Yb.exports;const Z=Ri(x),qp=_P({__proto__:null,default:Z},[x]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var BP=x,VP=Symbol.for("react.element"),WP=Symbol.for("react.fragment"),UP=Object.prototype.hasOwnProperty,HP=BP.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,GP={key:!0,ref:!0,__self:!0,__source:!0};function nw(e,t,n){var r,o={},i=null,a=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)UP.call(t,r)&&!GP.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:VP,type:e,key:i,ref:a,props:o,_owner:HP.current}}bu.Fragment=WP;bu.jsx=nw;bu.jsxs=nw;qb.exports=bu;var u=qb.exports;/**
 * @remix-run/router v1.8.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ka(){return Ka=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ka.apply(this,arguments)}var _r;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(_r||(_r={}));const lv="popstate";function qP(e){e===void 0&&(e={});function t(r,o){let{pathname:i,search:a,hash:l}=r.location;return Yp("",{pathname:i,search:a,hash:l},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(r,o){return typeof o=="string"?o:fc(o)}return XP(t,n,null,e)}function ze(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Vm(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function YP(){return Math.random().toString(36).substr(2,8)}function cv(e,t){return{usr:e.state,key:e.key,idx:t}}function Yp(e,t,n,r){return n===void 0&&(n=null),Ka({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?zi(t):t,{state:n,key:t&&t.key||r||YP()})}function fc(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function zi(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function XP(e,t,n,r){r===void 0&&(r={});let{window:o=document.defaultView,v5Compat:i=!1}=r,a=o.history,l=_r.Pop,s=null,c=d();c==null&&(c=0,a.replaceState(Ka({},a.state,{idx:c}),""));function d(){return(a.state||{idx:null}).idx}function f(){l=_r.Pop;let b=d(),g=b==null?null:b-c;c=b,s&&s({action:l,location:y.location,delta:g})}function m(b,g){l=_r.Push;let v=Yp(y.location,b,g);n&&n(v,b),c=d()+1;let w=cv(v,c),E=y.createHref(v);try{a.pushState(w,"",E)}catch(S){if(S instanceof DOMException&&S.name==="DataCloneError")throw S;o.location.assign(E)}i&&s&&s({action:l,location:y.location,delta:1})}function p(b,g){l=_r.Replace;let v=Yp(y.location,b,g);n&&n(v,b),c=d();let w=cv(v,c),E=y.createHref(v);a.replaceState(w,"",E),i&&s&&s({action:l,location:y.location,delta:0})}function h(b){let g=o.location.origin!=="null"?o.location.origin:o.location.href,v=typeof b=="string"?b:fc(b);return ze(g,"No window.location.(origin|href) available to create URL for href: "+v),new URL(v,g)}let y={get action(){return l},get location(){return e(o,a)},listen(b){if(s)throw new Error("A history only accepts one active listener");return o.addEventListener(lv,f),s=b,()=>{o.removeEventListener(lv,f),s=null}},createHref(b){return t(o,b)},createURL:h,encodeLocation(b){let g=h(b);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:m,replace:p,go(b){return a.go(b)}};return y}var uv;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(uv||(uv={}));function KP(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?zi(t):t,o=Wm(r.pathname||"/",n);if(o==null)return null;let i=rw(e);QP(i);let a=null;for(let l=0;a==null&&l<i.length;++l)a=aO(i[l],cO(o));return a}function rw(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let o=(i,a,l)=>{let s={relativePath:l===void 0?i.path||"":l,caseSensitive:i.caseSensitive===!0,childrenIndex:a,route:i};s.relativePath.startsWith("/")&&(ze(s.relativePath.startsWith(r),'Absolute route path "'+s.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),s.relativePath=s.relativePath.slice(r.length));let c=$r([r,s.relativePath]),d=n.concat(s);i.children&&i.children.length>0&&(ze(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),rw(i.children,t,d,c)),!(i.path==null&&!i.index)&&t.push({path:c,score:oO(c,i.index),routesMeta:d})};return e.forEach((i,a)=>{var l;if(i.path===""||!((l=i.path)!=null&&l.includes("?")))o(i,a);else for(let s of ow(i.path))o(i,a,s)}),t}function ow(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,o=n.endsWith("?"),i=n.replace(/\?$/,"");if(r.length===0)return o?[i,""]:[i];let a=ow(r.join("/")),l=[];return l.push(...a.map(s=>s===""?i:[i,s].join("/"))),o&&l.push(...a),l.map(s=>e.startsWith("/")&&s===""?"/":s)}function QP(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:iO(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const ZP=/^:\w+$/,JP=3,eO=2,tO=1,nO=10,rO=-2,dv=e=>e==="*";function oO(e,t){let n=e.split("/"),r=n.length;return n.some(dv)&&(r+=rO),t&&(r+=eO),n.filter(o=>!dv(o)).reduce((o,i)=>o+(ZP.test(i)?JP:i===""?tO:nO),r)}function iO(e,t){return e.length===t.length&&e.slice(0,-1).every((r,o)=>r===t[o])?e[e.length-1]-t[t.length-1]:0}function aO(e,t){let{routesMeta:n}=e,r={},o="/",i=[];for(let a=0;a<n.length;++a){let l=n[a],s=a===n.length-1,c=o==="/"?t:t.slice(o.length)||"/",d=sO({path:l.relativePath,caseSensitive:l.caseSensitive,end:s},c);if(!d)return null;Object.assign(r,d.params);let f=l.route;i.push({params:r,pathname:$r([o,d.pathname]),pathnameBase:pO($r([o,d.pathnameBase])),route:f}),d.pathnameBase!=="/"&&(o=$r([o,d.pathnameBase]))}return i}function sO(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=lO(e.path,e.caseSensitive,e.end),o=t.match(n);if(!o)return null;let i=o[0],a=i.replace(/(.)\/+$/,"$1"),l=o.slice(1);return{params:r.reduce((c,d,f)=>{if(d==="*"){let m=l[f]||"";a=i.slice(0,i.length-m.length).replace(/(.)\/+$/,"$1")}return c[d]=uO(l[f]||"",d),c},{}),pathname:i,pathnameBase:a,pattern:e}}function lO(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Vm(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(a,l)=>(r.push(l),"/([^\\/]+)"));return e.endsWith("*")?(r.push("*"),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),r]}function cO(e){try{return decodeURI(e)}catch(t){return Vm(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function uO(e,t){try{return decodeURIComponent(e)}catch(n){return Vm(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function Wm(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function dO(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:o=""}=typeof e=="string"?zi(e):e;return{pathname:n?n.startsWith("/")?n:fO(n,t):t,search:hO(r),hash:mO(o)}}function fO(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function tf(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Um(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Hm(e,t,n,r){r===void 0&&(r=!1);let o;typeof e=="string"?o=zi(e):(o=Ka({},e),ze(!o.pathname||!o.pathname.includes("?"),tf("?","pathname","search",o)),ze(!o.pathname||!o.pathname.includes("#"),tf("#","pathname","hash",o)),ze(!o.search||!o.search.includes("#"),tf("#","search","hash",o)));let i=e===""||o.pathname==="",a=i?"/":o.pathname,l;if(r||a==null)l=n;else{let f=t.length-1;if(a.startsWith("..")){let m=a.split("/");for(;m[0]==="..";)m.shift(),f-=1;o.pathname=m.join("/")}l=f>=0?t[f]:"/"}let s=dO(o,l),c=a&&a!=="/"&&a.endsWith("/"),d=(i||a===".")&&n.endsWith("/");return!s.pathname.endsWith("/")&&(c||d)&&(s.pathname+="/"),s}const $r=e=>e.join("/").replace(/\/\/+/g,"/"),pO=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),hO=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,mO=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function gO(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const iw=["post","put","patch","delete"];new Set(iw);const vO=["get",...iw];new Set(vO);/**
 * React Router v6.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function pc(){return pc=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},pc.apply(this,arguments)}const Gm=x.createContext(null),aw=x.createContext(null),Po=x.createContext(null),wu=x.createContext(null),Vn=x.createContext({outlet:null,matches:[],isDataRoute:!1}),sw=x.createContext(null);function yO(e,t){let{relative:n}=t===void 0?{}:t;Ni()||ze(!1);let{basename:r,navigator:o}=x.useContext(Po),{hash:i,pathname:a,search:l}=qm(e,{relative:n}),s=a;return r!=="/"&&(s=a==="/"?r:$r([r,a])),o.createHref({pathname:s,search:l,hash:i})}function Ni(){return x.useContext(wu)!=null}function Wn(){return Ni()||ze(!1),x.useContext(wu).location}function lw(e){x.useContext(Po).static||x.useLayoutEffect(e)}function et(){let{isDataRoute:e}=x.useContext(Vn);return e?MO():xO()}function xO(){Ni()||ze(!1);let e=x.useContext(Gm),{basename:t,navigator:n}=x.useContext(Po),{matches:r}=x.useContext(Vn),{pathname:o}=Wn(),i=JSON.stringify(Um(r).map(s=>s.pathnameBase)),a=x.useRef(!1);return lw(()=>{a.current=!0}),x.useCallback(function(s,c){if(c===void 0&&(c={}),!a.current)return;if(typeof s=="number"){n.go(s);return}let d=Hm(s,JSON.parse(i),o,c.relative==="path");e==null&&t!=="/"&&(d.pathname=d.pathname==="/"?t:$r([t,d.pathname])),(c.replace?n.replace:n.push)(d,c.state,c)},[t,n,i,o,e])}const bO=x.createContext(null);function wO(e){let t=x.useContext(Vn).outlet;return t&&x.createElement(bO.Provider,{value:e},t)}function cw(){let{matches:e}=x.useContext(Vn),t=e[e.length-1];return t?t.params:{}}function qm(e,t){let{relative:n}=t===void 0?{}:t,{matches:r}=x.useContext(Vn),{pathname:o}=Wn(),i=JSON.stringify(Um(r).map(a=>a.pathnameBase));return x.useMemo(()=>Hm(e,JSON.parse(i),o,n==="path"),[e,i,o,n])}function SO(e,t){return EO(e,t)}function EO(e,t,n){Ni()||ze(!1);let{navigator:r}=x.useContext(Po),{matches:o}=x.useContext(Vn),i=o[o.length-1],a=i?i.params:{};i&&i.pathname;let l=i?i.pathnameBase:"/";i&&i.route;let s=Wn(),c;if(t){var d;let y=typeof t=="string"?zi(t):t;l==="/"||(d=y.pathname)!=null&&d.startsWith(l)||ze(!1),c=y}else c=s;let f=c.pathname||"/",m=l==="/"?f:f.slice(l.length)||"/",p=KP(e,{pathname:m}),h=OO(p&&p.map(y=>Object.assign({},y,{params:Object.assign({},a,y.params),pathname:$r([l,r.encodeLocation?r.encodeLocation(y.pathname).pathname:y.pathname]),pathnameBase:y.pathnameBase==="/"?l:$r([l,r.encodeLocation?r.encodeLocation(y.pathnameBase).pathname:y.pathnameBase])})),o,n);return t&&h?x.createElement(wu.Provider,{value:{location:pc({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:_r.Pop}},h):h}function CO(){let e=IO(),t=gO(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},i=null;return x.createElement(x.Fragment,null,x.createElement("h2",null,"Unexpected Application Error!"),x.createElement("h3",{style:{fontStyle:"italic"}},t),n?x.createElement("pre",{style:o},n):null,i)}const _O=x.createElement(CO,null);class kO extends x.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error||n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?x.createElement(Vn.Provider,{value:this.props.routeContext},x.createElement(sw.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function PO(e){let{routeContext:t,match:n,children:r}=e,o=x.useContext(Gm);return o&&o.static&&o.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=n.route.id),x.createElement(Vn.Provider,{value:t},r)}function OO(e,t,n){var r;if(t===void 0&&(t=[]),n===void 0&&(n=null),e==null){var o;if((o=n)!=null&&o.errors)e=n.matches;else return null}let i=e,a=(r=n)==null?void 0:r.errors;if(a!=null){let l=i.findIndex(s=>s.route.id&&(a==null?void 0:a[s.route.id]));l>=0||ze(!1),i=i.slice(0,Math.min(i.length,l+1))}return i.reduceRight((l,s,c)=>{let d=s.route.id?a==null?void 0:a[s.route.id]:null,f=null;n&&(f=s.route.errorElement||_O);let m=t.concat(i.slice(0,c+1)),p=()=>{let h;return d?h=f:s.route.Component?h=x.createElement(s.route.Component,null):s.route.element?h=s.route.element:h=l,x.createElement(PO,{match:s,routeContext:{outlet:l,matches:m,isDataRoute:n!=null},children:h})};return n&&(s.route.ErrorBoundary||s.route.errorElement||c===0)?x.createElement(kO,{location:n.location,revalidation:n.revalidation,component:f,error:d,children:p(),routeContext:{outlet:null,matches:m,isDataRoute:!0}}):p()},null)}var uw=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(uw||{}),hc=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(hc||{});function TO(e){let t=x.useContext(Gm);return t||ze(!1),t}function jO(e){let t=x.useContext(aw);return t||ze(!1),t}function $O(e){let t=x.useContext(Vn);return t||ze(!1),t}function dw(e){let t=$O(),n=t.matches[t.matches.length-1];return n.route.id||ze(!1),n.route.id}function IO(){var e;let t=x.useContext(sw),n=jO(hc.UseRouteError),r=dw(hc.UseRouteError);return t||((e=n.errors)==null?void 0:e[r])}function MO(){let{router:e}=TO(uw.UseNavigateStable),t=dw(hc.UseNavigateStable),n=x.useRef(!1);return lw(()=>{n.current=!0}),x.useCallback(function(o,i){i===void 0&&(i={}),n.current&&(typeof o=="number"?e.navigate(o):e.navigate(o,pc({fromRouteId:t},i)))},[e,t])}function AO(e){let{to:t,replace:n,state:r,relative:o}=e;Ni()||ze(!1);let{matches:i}=x.useContext(Vn),{pathname:a}=Wn(),l=et(),s=Hm(t,Um(i).map(d=>d.pathnameBase),a,o==="path"),c=JSON.stringify(s);return x.useEffect(()=>l(JSON.parse(c),{replace:n,state:r,relative:o}),[l,c,o,n,r]),null}function fw(e){return wO(e.context)}function Ie(e){ze(!1)}function DO(e){let{basename:t="/",children:n=null,location:r,navigationType:o=_r.Pop,navigator:i,static:a=!1}=e;Ni()&&ze(!1);let l=t.replace(/^\/*/,"/"),s=x.useMemo(()=>({basename:l,navigator:i,static:a}),[l,i,a]);typeof r=="string"&&(r=zi(r));let{pathname:c="/",search:d="",hash:f="",state:m=null,key:p="default"}=r,h=x.useMemo(()=>{let y=Wm(c,l);return y==null?null:{location:{pathname:y,search:d,hash:f,state:m,key:p},navigationType:o}},[l,c,d,f,m,p,o]);return h==null?null:x.createElement(Po.Provider,{value:s},x.createElement(wu.Provider,{children:n,value:h}))}function LO(e){let{children:t,location:n}=e;return SO(Xp(t),n)}new Promise(()=>{});function Xp(e,t){t===void 0&&(t=[]);let n=[];return x.Children.forEach(e,(r,o)=>{if(!x.isValidElement(r))return;let i=[...t,o];if(r.type===x.Fragment){n.push.apply(n,Xp(r.props.children,i));return}r.type!==Ie&&ze(!1),!r.props.index||!r.props.children||ze(!1);let a={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(a.children=Xp(r.props.children,i)),n.push(a)}),n}/**
 * React Router DOM v6.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function mc(){return mc=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},mc.apply(this,arguments)}function pw(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function RO(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function FO(e,t){return e.button===0&&(!t||t==="_self")&&!RO(e)}function Kp(e){return e===void 0&&(e=""),new URLSearchParams(typeof e=="string"||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce((t,n)=>{let r=e[n];return t.concat(Array.isArray(r)?r.map(o=>[n,o]):[[n,r]])},[]))}function zO(e,t){let n=Kp(e);return t&&t.forEach((r,o)=>{n.has(o)||t.getAll(o).forEach(i=>{n.append(o,i)})}),n}const NO=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],BO=["aria-current","caseSensitive","className","end","style","to","children"],VO="startTransition",fv=qp[VO];function WO(e){let{basename:t,children:n,future:r,window:o}=e,i=x.useRef();i.current==null&&(i.current=qP({window:o,v5Compat:!0}));let a=i.current,[l,s]=x.useState({action:a.action,location:a.location}),{v7_startTransition:c}=r||{},d=x.useCallback(f=>{c&&fv?fv(()=>s(f)):s(f)},[s,c]);return x.useLayoutEffect(()=>a.listen(d),[a,d]),x.createElement(DO,{basename:t,children:n,location:l.location,navigationType:l.action,navigator:a})}const UO=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",HO=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ge=x.forwardRef(function(t,n){let{onClick:r,relative:o,reloadDocument:i,replace:a,state:l,target:s,to:c,preventScrollReset:d}=t,f=pw(t,NO),{basename:m}=x.useContext(Po),p,h=!1;if(typeof c=="string"&&HO.test(c)&&(p=c,UO))try{let v=new URL(window.location.href),w=c.startsWith("//")?new URL(v.protocol+c):new URL(c),E=Wm(w.pathname,m);w.origin===v.origin&&E!=null?c=E+w.search+w.hash:h=!0}catch{}let y=yO(c,{relative:o}),b=GO(c,{replace:a,state:l,target:s,preventScrollReset:d,relative:o});function g(v){r&&r(v),v.defaultPrevented||b(v)}return x.createElement("a",mc({},f,{href:p||y,onClick:h||i?r:g,ref:n,target:s}))}),hw=x.forwardRef(function(t,n){let{"aria-current":r="page",caseSensitive:o=!1,className:i="",end:a=!1,style:l,to:s,children:c}=t,d=pw(t,BO),f=qm(s,{relative:d.relative}),m=Wn(),p=x.useContext(aw),{navigator:h}=x.useContext(Po),y=h.encodeLocation?h.encodeLocation(f).pathname:f.pathname,b=m.pathname,g=p&&p.navigation&&p.navigation.location?p.navigation.location.pathname:null;o||(b=b.toLowerCase(),g=g?g.toLowerCase():null,y=y.toLowerCase());let v=b===y||!a&&b.startsWith(y)&&b.charAt(y.length)==="/",w=g!=null&&(g===y||!a&&g.startsWith(y)&&g.charAt(y.length)==="/"),E=v?r:void 0,S;typeof i=="function"?S=i({isActive:v,isPending:w}):S=[i,v?"active":null,w?"pending":null].filter(Boolean).join(" ");let P=typeof l=="function"?l({isActive:v,isPending:w}):l;return x.createElement(ge,mc({},d,{"aria-current":E,className:S,ref:n,style:P,to:s}),typeof c=="function"?c({isActive:v,isPending:w}):c)});var pv;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher"})(pv||(pv={}));var hv;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(hv||(hv={}));function GO(e,t){let{target:n,replace:r,state:o,preventScrollReset:i,relative:a}=t===void 0?{}:t,l=et(),s=Wn(),c=qm(e,{relative:a});return x.useCallback(d=>{if(FO(d,n)){d.preventDefault();let f=r!==void 0?r:fc(s)===fc(c);l(e,{replace:f,state:o,preventScrollReset:i,relative:a})}},[s,l,c,r,o,n,e,i,a])}function mw(e){let t=x.useRef(Kp(e)),n=x.useRef(!1),r=Wn(),o=x.useMemo(()=>zO(r.search,n.current?null:t.current),[r.search]),i=et(),a=x.useCallback((l,s)=>{const c=Kp(typeof l=="function"?l(o):l);n.current=!0,i("?"+c,s)},[i,o]);return[o,a]}var Qp={},gw={exports:{}},Yt={},vw={exports:{}},yw={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(O,A){var N=O.length;O.push(A);e:for(;0<N;){var B=N-1>>>1,z=O[B];if(0<o(z,A))O[B]=A,O[N]=z,N=B;else break e}}function n(O){return O.length===0?null:O[0]}function r(O){if(O.length===0)return null;var A=O[0],N=O.pop();if(N!==A){O[0]=N;e:for(var B=0,z=O.length,V=z>>>1;B<V;){var U=2*(B+1)-1,G=O[U],W=U+1,Y=O[W];if(0>o(G,N))W<z&&0>o(Y,G)?(O[B]=Y,O[W]=N,B=W):(O[B]=G,O[U]=N,B=U);else if(W<z&&0>o(Y,N))O[B]=Y,O[W]=N,B=W;else break e}}return A}function o(O,A){var N=O.sortIndex-A.sortIndex;return N!==0?N:O.id-A.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var a=Date,l=a.now();e.unstable_now=function(){return a.now()-l}}var s=[],c=[],d=1,f=null,m=3,p=!1,h=!1,y=!1,b=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function w(O){for(var A=n(c);A!==null;){if(A.callback===null)r(c);else if(A.startTime<=O)r(c),A.sortIndex=A.expirationTime,t(s,A);else break;A=n(c)}}function E(O){if(y=!1,w(O),!h)if(n(s)!==null)h=!0,F(S);else{var A=n(c);A!==null&&L(E,A.startTime-O)}}function S(O,A){h=!1,y&&(y=!1,g(_),_=-1),p=!0;var N=m;try{for(w(A),f=n(s);f!==null&&(!(f.expirationTime>A)||O&&!I());){var B=f.callback;if(typeof B=="function"){f.callback=null,m=f.priorityLevel;var z=B(f.expirationTime<=A);A=e.unstable_now(),typeof z=="function"?f.callback=z:f===n(s)&&r(s),w(A)}else r(s);f=n(s)}if(f!==null)var V=!0;else{var U=n(c);U!==null&&L(E,U.startTime-A),V=!1}return V}finally{f=null,m=N,p=!1}}var P=!1,k=null,_=-1,T=5,$=-1;function I(){return!(e.unstable_now()-$<T)}function M(){if(k!==null){var O=e.unstable_now();$=O;var A=!0;try{A=k(!0,O)}finally{A?j():(P=!1,k=null)}}else P=!1}var j;if(typeof v=="function")j=function(){v(M)};else if(typeof MessageChannel<"u"){var R=new MessageChannel,D=R.port2;R.port1.onmessage=M,j=function(){D.postMessage(null)}}else j=function(){b(M,0)};function F(O){k=O,P||(P=!0,j())}function L(O,A){_=b(function(){O(e.unstable_now())},A)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(O){O.callback=null},e.unstable_continueExecution=function(){h||p||(h=!0,F(S))},e.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<O?Math.floor(1e3/O):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(O){switch(m){case 1:case 2:case 3:var A=3;break;default:A=m}var N=m;m=A;try{return O()}finally{m=N}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(O,A){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var N=m;m=O;try{return A()}finally{m=N}},e.unstable_scheduleCallback=function(O,A,N){var B=e.unstable_now();switch(typeof N=="object"&&N!==null?(N=N.delay,N=typeof N=="number"&&0<N?B+N:B):N=B,O){case 1:var z=-1;break;case 2:z=250;break;case 5:z=1073741823;break;case 4:z=1e4;break;default:z=5e3}return z=N+z,O={id:d++,callback:A,priorityLevel:O,startTime:N,expirationTime:z,sortIndex:-1},N>B?(O.sortIndex=N,t(c,O),n(s)===null&&O===n(c)&&(y?(g(_),_=-1):y=!0,L(E,N-B))):(O.sortIndex=z,t(s,O),h||p||(h=!0,F(S))),O},e.unstable_shouldYield=I,e.unstable_wrapCallback=function(O){var A=m;return function(){var N=m;m=A;try{return O.apply(this,arguments)}finally{m=N}}}})(yw);vw.exports=yw;var qO=vw.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xw=x,Gt=qO;function H(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var bw=new Set,Qa={};function Oo(e,t){xi(e,t),xi(e+"Capture",t)}function xi(e,t){for(Qa[e]=t,e=0;e<t.length;e++)bw.add(t[e])}var ir=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Zp=Object.prototype.hasOwnProperty,YO=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,mv={},gv={};function XO(e){return Zp.call(gv,e)?!0:Zp.call(mv,e)?!1:YO.test(e)?gv[e]=!0:(mv[e]=!0,!1)}function KO(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function QO(e,t,n,r){if(t===null||typeof t>"u"||KO(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function _t(e,t,n,r,o,i,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=a}var st={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){st[e]=new _t(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];st[t]=new _t(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){st[e]=new _t(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){st[e]=new _t(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){st[e]=new _t(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){st[e]=new _t(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){st[e]=new _t(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){st[e]=new _t(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){st[e]=new _t(e,5,!1,e.toLowerCase(),null,!1,!1)});var Ym=/[\-:]([a-z])/g;function Xm(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Ym,Xm);st[t]=new _t(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Ym,Xm);st[t]=new _t(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Ym,Xm);st[t]=new _t(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){st[e]=new _t(e,1,!1,e.toLowerCase(),null,!1,!1)});st.xlinkHref=new _t("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){st[e]=new _t(e,1,!1,e.toLowerCase(),null,!0,!0)});function Km(e,t,n,r){var o=st.hasOwnProperty(t)?st[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(QO(t,n,o,r)&&(n=null),r||o===null?XO(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var pr=xw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ys=Symbol.for("react.element"),Qo=Symbol.for("react.portal"),Zo=Symbol.for("react.fragment"),Qm=Symbol.for("react.strict_mode"),Jp=Symbol.for("react.profiler"),ww=Symbol.for("react.provider"),Sw=Symbol.for("react.context"),Zm=Symbol.for("react.forward_ref"),eh=Symbol.for("react.suspense"),th=Symbol.for("react.suspense_list"),Jm=Symbol.for("react.memo"),br=Symbol.for("react.lazy"),Ew=Symbol.for("react.offscreen"),vv=Symbol.iterator;function na(e){return e===null||typeof e!="object"?null:(e=vv&&e[vv]||e["@@iterator"],typeof e=="function"?e:null)}var $e=Object.assign,nf;function xa(e){if(nf===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);nf=t&&t[1]||""}return`
`+nf+e}var rf=!1;function of(e,t){if(!e||rf)return"";rf=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var o=c.stack.split(`
`),i=r.stack.split(`
`),a=o.length-1,l=i.length-1;1<=a&&0<=l&&o[a]!==i[l];)l--;for(;1<=a&&0<=l;a--,l--)if(o[a]!==i[l]){if(a!==1||l!==1)do if(a--,l--,0>l||o[a]!==i[l]){var s=`
`+o[a].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=a&&0<=l);break}}}finally{rf=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?xa(e):""}function ZO(e){switch(e.tag){case 5:return xa(e.type);case 16:return xa("Lazy");case 13:return xa("Suspense");case 19:return xa("SuspenseList");case 0:case 2:case 15:return e=of(e.type,!1),e;case 11:return e=of(e.type.render,!1),e;case 1:return e=of(e.type,!0),e;default:return""}}function nh(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Zo:return"Fragment";case Qo:return"Portal";case Jp:return"Profiler";case Qm:return"StrictMode";case eh:return"Suspense";case th:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Sw:return(e.displayName||"Context")+".Consumer";case ww:return(e._context.displayName||"Context")+".Provider";case Zm:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Jm:return t=e.displayName||null,t!==null?t:nh(e.type)||"Memo";case br:t=e._payload,e=e._init;try{return nh(e(t))}catch{}}return null}function JO(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return nh(t);case 8:return t===Qm?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Br(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Cw(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function eT(e){var t=Cw(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(a){r=""+a,i.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Xs(e){e._valueTracker||(e._valueTracker=eT(e))}function _w(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Cw(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function gc(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function rh(e,t){var n=t.checked;return $e({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function yv(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Br(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function kw(e,t){t=t.checked,t!=null&&Km(e,"checked",t,!1)}function oh(e,t){kw(e,t);var n=Br(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ih(e,t.type,n):t.hasOwnProperty("defaultValue")&&ih(e,t.type,Br(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function xv(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function ih(e,t,n){(t!=="number"||gc(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var ba=Array.isArray;function ci(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Br(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function ah(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(H(91));return $e({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function bv(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(H(92));if(ba(n)){if(1<n.length)throw Error(H(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Br(n)}}function Pw(e,t){var n=Br(t.value),r=Br(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function wv(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Ow(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function sh(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Ow(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Ks,Tw=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Ks=Ks||document.createElement("div"),Ks.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Ks.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Za(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var ja={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},tT=["Webkit","ms","Moz","O"];Object.keys(ja).forEach(function(e){tT.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),ja[t]=ja[e]})});function jw(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||ja.hasOwnProperty(e)&&ja[e]?(""+t).trim():t+"px"}function $w(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=jw(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var nT=$e({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function lh(e,t){if(t){if(nT[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(H(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(H(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(H(61))}if(t.style!=null&&typeof t.style!="object")throw Error(H(62))}}function ch(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var uh=null;function eg(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var dh=null,ui=null,di=null;function Sv(e){if(e=Os(e)){if(typeof dh!="function")throw Error(H(280));var t=e.stateNode;t&&(t=ku(t),dh(e.stateNode,e.type,t))}}function Iw(e){ui?di?di.push(e):di=[e]:ui=e}function Mw(){if(ui){var e=ui,t=di;if(di=ui=null,Sv(e),t)for(e=0;e<t.length;e++)Sv(t[e])}}function Aw(e,t){return e(t)}function Dw(){}var af=!1;function Lw(e,t,n){if(af)return e(t,n);af=!0;try{return Aw(e,t,n)}finally{af=!1,(ui!==null||di!==null)&&(Dw(),Mw())}}function Ja(e,t){var n=e.stateNode;if(n===null)return null;var r=ku(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(H(231,t,typeof n));return n}var fh=!1;if(ir)try{var ra={};Object.defineProperty(ra,"passive",{get:function(){fh=!0}}),window.addEventListener("test",ra,ra),window.removeEventListener("test",ra,ra)}catch{fh=!1}function rT(e,t,n,r,o,i,a,l,s){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(d){this.onError(d)}}var $a=!1,vc=null,yc=!1,ph=null,oT={onError:function(e){$a=!0,vc=e}};function iT(e,t,n,r,o,i,a,l,s){$a=!1,vc=null,rT.apply(oT,arguments)}function aT(e,t,n,r,o,i,a,l,s){if(iT.apply(this,arguments),$a){if($a){var c=vc;$a=!1,vc=null}else throw Error(H(198));yc||(yc=!0,ph=c)}}function To(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Rw(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Ev(e){if(To(e)!==e)throw Error(H(188))}function sT(e){var t=e.alternate;if(!t){if(t=To(e),t===null)throw Error(H(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return Ev(o),e;if(i===r)return Ev(o),t;i=i.sibling}throw Error(H(188))}if(n.return!==r.return)n=o,r=i;else{for(var a=!1,l=o.child;l;){if(l===n){a=!0,n=o,r=i;break}if(l===r){a=!0,r=o,n=i;break}l=l.sibling}if(!a){for(l=i.child;l;){if(l===n){a=!0,n=i,r=o;break}if(l===r){a=!0,r=i,n=o;break}l=l.sibling}if(!a)throw Error(H(189))}}if(n.alternate!==r)throw Error(H(190))}if(n.tag!==3)throw Error(H(188));return n.stateNode.current===n?e:t}function Fw(e){return e=sT(e),e!==null?zw(e):null}function zw(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=zw(e);if(t!==null)return t;e=e.sibling}return null}var Nw=Gt.unstable_scheduleCallback,Cv=Gt.unstable_cancelCallback,lT=Gt.unstable_shouldYield,cT=Gt.unstable_requestPaint,Fe=Gt.unstable_now,uT=Gt.unstable_getCurrentPriorityLevel,tg=Gt.unstable_ImmediatePriority,Bw=Gt.unstable_UserBlockingPriority,xc=Gt.unstable_NormalPriority,dT=Gt.unstable_LowPriority,Vw=Gt.unstable_IdlePriority,Su=null,Ln=null;function fT(e){if(Ln&&typeof Ln.onCommitFiberRoot=="function")try{Ln.onCommitFiberRoot(Su,e,void 0,(e.current.flags&128)===128)}catch{}}var gn=Math.clz32?Math.clz32:mT,pT=Math.log,hT=Math.LN2;function mT(e){return e>>>=0,e===0?32:31-(pT(e)/hT|0)|0}var Qs=64,Zs=4194304;function wa(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function bc(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,a=n&268435455;if(a!==0){var l=a&~o;l!==0?r=wa(l):(i&=a,i!==0&&(r=wa(i)))}else a=n&~o,a!==0?r=wa(a):i!==0&&(r=wa(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-gn(t),o=1<<n,r|=e[n],t&=~o;return r}function gT(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function vT(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var a=31-gn(i),l=1<<a,s=o[a];s===-1?(!(l&n)||l&r)&&(o[a]=gT(l,t)):s<=t&&(e.expiredLanes|=l),i&=~l}}function hh(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Ww(){var e=Qs;return Qs<<=1,!(Qs&4194240)&&(Qs=64),e}function sf(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ks(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-gn(t),e[t]=n}function yT(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-gn(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function ng(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-gn(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var ye=0;function Uw(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Hw,rg,Gw,qw,Yw,mh=!1,Js=[],Ir=null,Mr=null,Ar=null,es=new Map,ts=new Map,Sr=[],xT="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function _v(e,t){switch(e){case"focusin":case"focusout":Ir=null;break;case"dragenter":case"dragleave":Mr=null;break;case"mouseover":case"mouseout":Ar=null;break;case"pointerover":case"pointerout":es.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ts.delete(t.pointerId)}}function oa(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=Os(t),t!==null&&rg(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function bT(e,t,n,r,o){switch(t){case"focusin":return Ir=oa(Ir,e,t,n,r,o),!0;case"dragenter":return Mr=oa(Mr,e,t,n,r,o),!0;case"mouseover":return Ar=oa(Ar,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return es.set(i,oa(es.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,ts.set(i,oa(ts.get(i)||null,e,t,n,r,o)),!0}return!1}function Xw(e){var t=io(e.target);if(t!==null){var n=To(t);if(n!==null){if(t=n.tag,t===13){if(t=Rw(n),t!==null){e.blockedOn=t,Yw(e.priority,function(){Gw(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ll(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=gh(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);uh=r,n.target.dispatchEvent(r),uh=null}else return t=Os(n),t!==null&&rg(t),e.blockedOn=n,!1;t.shift()}return!0}function kv(e,t,n){Ll(e)&&n.delete(t)}function wT(){mh=!1,Ir!==null&&Ll(Ir)&&(Ir=null),Mr!==null&&Ll(Mr)&&(Mr=null),Ar!==null&&Ll(Ar)&&(Ar=null),es.forEach(kv),ts.forEach(kv)}function ia(e,t){e.blockedOn===t&&(e.blockedOn=null,mh||(mh=!0,Gt.unstable_scheduleCallback(Gt.unstable_NormalPriority,wT)))}function ns(e){function t(o){return ia(o,e)}if(0<Js.length){ia(Js[0],e);for(var n=1;n<Js.length;n++){var r=Js[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Ir!==null&&ia(Ir,e),Mr!==null&&ia(Mr,e),Ar!==null&&ia(Ar,e),es.forEach(t),ts.forEach(t),n=0;n<Sr.length;n++)r=Sr[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Sr.length&&(n=Sr[0],n.blockedOn===null);)Xw(n),n.blockedOn===null&&Sr.shift()}var fi=pr.ReactCurrentBatchConfig,wc=!0;function ST(e,t,n,r){var o=ye,i=fi.transition;fi.transition=null;try{ye=1,og(e,t,n,r)}finally{ye=o,fi.transition=i}}function ET(e,t,n,r){var o=ye,i=fi.transition;fi.transition=null;try{ye=4,og(e,t,n,r)}finally{ye=o,fi.transition=i}}function og(e,t,n,r){if(wc){var o=gh(e,t,n,r);if(o===null)vf(e,t,r,Sc,n),_v(e,r);else if(bT(o,e,t,n,r))r.stopPropagation();else if(_v(e,r),t&4&&-1<xT.indexOf(e)){for(;o!==null;){var i=Os(o);if(i!==null&&Hw(i),i=gh(e,t,n,r),i===null&&vf(e,t,r,Sc,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else vf(e,t,r,null,n)}}var Sc=null;function gh(e,t,n,r){if(Sc=null,e=eg(r),e=io(e),e!==null)if(t=To(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Rw(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Sc=e,null}function Kw(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(uT()){case tg:return 1;case Bw:return 4;case xc:case dT:return 16;case Vw:return 536870912;default:return 16}default:return 16}}var kr=null,ig=null,Rl=null;function Qw(){if(Rl)return Rl;var e,t=ig,n=t.length,r,o="value"in kr?kr.value:kr.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===o[i-r];r++);return Rl=o.slice(e,1<r?1-r:void 0)}function Fl(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function el(){return!0}function Pv(){return!1}function Xt(e){function t(n,r,o,i,a){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=a,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(i):i[l]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?el:Pv,this.isPropagationStopped=Pv,this}return $e(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=el)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=el)},persist:function(){},isPersistent:el}),t}var Bi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ag=Xt(Bi),Ps=$e({},Bi,{view:0,detail:0}),CT=Xt(Ps),lf,cf,aa,Eu=$e({},Ps,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:sg,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==aa&&(aa&&e.type==="mousemove"?(lf=e.screenX-aa.screenX,cf=e.screenY-aa.screenY):cf=lf=0,aa=e),lf)},movementY:function(e){return"movementY"in e?e.movementY:cf}}),Ov=Xt(Eu),_T=$e({},Eu,{dataTransfer:0}),kT=Xt(_T),PT=$e({},Ps,{relatedTarget:0}),uf=Xt(PT),OT=$e({},Bi,{animationName:0,elapsedTime:0,pseudoElement:0}),TT=Xt(OT),jT=$e({},Bi,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),$T=Xt(jT),IT=$e({},Bi,{data:0}),Tv=Xt(IT),MT={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},AT={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},DT={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function LT(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=DT[e])?!!t[e]:!1}function sg(){return LT}var RT=$e({},Ps,{key:function(e){if(e.key){var t=MT[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Fl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?AT[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:sg,charCode:function(e){return e.type==="keypress"?Fl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Fl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),FT=Xt(RT),zT=$e({},Eu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),jv=Xt(zT),NT=$e({},Ps,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:sg}),BT=Xt(NT),VT=$e({},Bi,{propertyName:0,elapsedTime:0,pseudoElement:0}),WT=Xt(VT),UT=$e({},Eu,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),HT=Xt(UT),GT=[9,13,27,32],lg=ir&&"CompositionEvent"in window,Ia=null;ir&&"documentMode"in document&&(Ia=document.documentMode);var qT=ir&&"TextEvent"in window&&!Ia,Zw=ir&&(!lg||Ia&&8<Ia&&11>=Ia),$v=String.fromCharCode(32),Iv=!1;function Jw(e,t){switch(e){case"keyup":return GT.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function eS(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Jo=!1;function YT(e,t){switch(e){case"compositionend":return eS(t);case"keypress":return t.which!==32?null:(Iv=!0,$v);case"textInput":return e=t.data,e===$v&&Iv?null:e;default:return null}}function XT(e,t){if(Jo)return e==="compositionend"||!lg&&Jw(e,t)?(e=Qw(),Rl=ig=kr=null,Jo=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Zw&&t.locale!=="ko"?null:t.data;default:return null}}var KT={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Mv(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!KT[e.type]:t==="textarea"}function tS(e,t,n,r){Iw(r),t=Ec(t,"onChange"),0<t.length&&(n=new ag("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Ma=null,rs=null;function QT(e){fS(e,0)}function Cu(e){var t=ni(e);if(_w(t))return e}function ZT(e,t){if(e==="change")return t}var nS=!1;if(ir){var df;if(ir){var ff="oninput"in document;if(!ff){var Av=document.createElement("div");Av.setAttribute("oninput","return;"),ff=typeof Av.oninput=="function"}df=ff}else df=!1;nS=df&&(!document.documentMode||9<document.documentMode)}function Dv(){Ma&&(Ma.detachEvent("onpropertychange",rS),rs=Ma=null)}function rS(e){if(e.propertyName==="value"&&Cu(rs)){var t=[];tS(t,rs,e,eg(e)),Lw(QT,t)}}function JT(e,t,n){e==="focusin"?(Dv(),Ma=t,rs=n,Ma.attachEvent("onpropertychange",rS)):e==="focusout"&&Dv()}function ej(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Cu(rs)}function tj(e,t){if(e==="click")return Cu(t)}function nj(e,t){if(e==="input"||e==="change")return Cu(t)}function rj(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var wn=typeof Object.is=="function"?Object.is:rj;function os(e,t){if(wn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!Zp.call(t,o)||!wn(e[o],t[o]))return!1}return!0}function Lv(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Rv(e,t){var n=Lv(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Lv(n)}}function oS(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?oS(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function iS(){for(var e=window,t=gc();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=gc(e.document)}return t}function cg(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function oj(e){var t=iS(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&oS(n.ownerDocument.documentElement,n)){if(r!==null&&cg(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=Rv(n,i);var a=Rv(n,r);o&&a&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var ij=ir&&"documentMode"in document&&11>=document.documentMode,ei=null,vh=null,Aa=null,yh=!1;function Fv(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;yh||ei==null||ei!==gc(r)||(r=ei,"selectionStart"in r&&cg(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Aa&&os(Aa,r)||(Aa=r,r=Ec(vh,"onSelect"),0<r.length&&(t=new ag("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=ei)))}function tl(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var ti={animationend:tl("Animation","AnimationEnd"),animationiteration:tl("Animation","AnimationIteration"),animationstart:tl("Animation","AnimationStart"),transitionend:tl("Transition","TransitionEnd")},pf={},aS={};ir&&(aS=document.createElement("div").style,"AnimationEvent"in window||(delete ti.animationend.animation,delete ti.animationiteration.animation,delete ti.animationstart.animation),"TransitionEvent"in window||delete ti.transitionend.transition);function _u(e){if(pf[e])return pf[e];if(!ti[e])return e;var t=ti[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in aS)return pf[e]=t[n];return e}var sS=_u("animationend"),lS=_u("animationiteration"),cS=_u("animationstart"),uS=_u("transitionend"),dS=new Map,zv="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ur(e,t){dS.set(e,t),Oo(t,[e])}for(var hf=0;hf<zv.length;hf++){var mf=zv[hf],aj=mf.toLowerCase(),sj=mf[0].toUpperCase()+mf.slice(1);Ur(aj,"on"+sj)}Ur(sS,"onAnimationEnd");Ur(lS,"onAnimationIteration");Ur(cS,"onAnimationStart");Ur("dblclick","onDoubleClick");Ur("focusin","onFocus");Ur("focusout","onBlur");Ur(uS,"onTransitionEnd");xi("onMouseEnter",["mouseout","mouseover"]);xi("onMouseLeave",["mouseout","mouseover"]);xi("onPointerEnter",["pointerout","pointerover"]);xi("onPointerLeave",["pointerout","pointerover"]);Oo("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Oo("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Oo("onBeforeInput",["compositionend","keypress","textInput","paste"]);Oo("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Oo("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Oo("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Sa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),lj=new Set("cancel close invalid load scroll toggle".split(" ").concat(Sa));function Nv(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,aT(r,t,void 0,e),e.currentTarget=null}function fS(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var a=r.length-1;0<=a;a--){var l=r[a],s=l.instance,c=l.currentTarget;if(l=l.listener,s!==i&&o.isPropagationStopped())break e;Nv(o,l,c),i=s}else for(a=0;a<r.length;a++){if(l=r[a],s=l.instance,c=l.currentTarget,l=l.listener,s!==i&&o.isPropagationStopped())break e;Nv(o,l,c),i=s}}}if(yc)throw e=ph,yc=!1,ph=null,e}function Se(e,t){var n=t[Eh];n===void 0&&(n=t[Eh]=new Set);var r=e+"__bubble";n.has(r)||(pS(t,e,2,!1),n.add(r))}function gf(e,t,n){var r=0;t&&(r|=4),pS(n,e,r,t)}var nl="_reactListening"+Math.random().toString(36).slice(2);function is(e){if(!e[nl]){e[nl]=!0,bw.forEach(function(n){n!=="selectionchange"&&(lj.has(n)||gf(n,!1,e),gf(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[nl]||(t[nl]=!0,gf("selectionchange",!1,t))}}function pS(e,t,n,r){switch(Kw(t)){case 1:var o=ST;break;case 4:o=ET;break;default:o=og}n=o.bind(null,t,n,e),o=void 0,!fh||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function vf(e,t,n,r,o){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var l=r.stateNode.containerInfo;if(l===o||l.nodeType===8&&l.parentNode===o)break;if(a===4)for(a=r.return;a!==null;){var s=a.tag;if((s===3||s===4)&&(s=a.stateNode.containerInfo,s===o||s.nodeType===8&&s.parentNode===o))return;a=a.return}for(;l!==null;){if(a=io(l),a===null)return;if(s=a.tag,s===5||s===6){r=i=a;continue e}l=l.parentNode}}r=r.return}Lw(function(){var c=i,d=eg(n),f=[];e:{var m=dS.get(e);if(m!==void 0){var p=ag,h=e;switch(e){case"keypress":if(Fl(n)===0)break e;case"keydown":case"keyup":p=FT;break;case"focusin":h="focus",p=uf;break;case"focusout":h="blur",p=uf;break;case"beforeblur":case"afterblur":p=uf;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Ov;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=kT;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=BT;break;case sS:case lS:case cS:p=TT;break;case uS:p=WT;break;case"scroll":p=CT;break;case"wheel":p=HT;break;case"copy":case"cut":case"paste":p=$T;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=jv}var y=(t&4)!==0,b=!y&&e==="scroll",g=y?m!==null?m+"Capture":null:m;y=[];for(var v=c,w;v!==null;){w=v;var E=w.stateNode;if(w.tag===5&&E!==null&&(w=E,g!==null&&(E=Ja(v,g),E!=null&&y.push(as(v,E,w)))),b)break;v=v.return}0<y.length&&(m=new p(m,h,null,n,d),f.push({event:m,listeners:y}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",p=e==="mouseout"||e==="pointerout",m&&n!==uh&&(h=n.relatedTarget||n.fromElement)&&(io(h)||h[ar]))break e;if((p||m)&&(m=d.window===d?d:(m=d.ownerDocument)?m.defaultView||m.parentWindow:window,p?(h=n.relatedTarget||n.toElement,p=c,h=h?io(h):null,h!==null&&(b=To(h),h!==b||h.tag!==5&&h.tag!==6)&&(h=null)):(p=null,h=c),p!==h)){if(y=Ov,E="onMouseLeave",g="onMouseEnter",v="mouse",(e==="pointerout"||e==="pointerover")&&(y=jv,E="onPointerLeave",g="onPointerEnter",v="pointer"),b=p==null?m:ni(p),w=h==null?m:ni(h),m=new y(E,v+"leave",p,n,d),m.target=b,m.relatedTarget=w,E=null,io(d)===c&&(y=new y(g,v+"enter",h,n,d),y.target=w,y.relatedTarget=b,E=y),b=E,p&&h)t:{for(y=p,g=h,v=0,w=y;w;w=Do(w))v++;for(w=0,E=g;E;E=Do(E))w++;for(;0<v-w;)y=Do(y),v--;for(;0<w-v;)g=Do(g),w--;for(;v--;){if(y===g||g!==null&&y===g.alternate)break t;y=Do(y),g=Do(g)}y=null}else y=null;p!==null&&Bv(f,m,p,y,!1),h!==null&&b!==null&&Bv(f,b,h,y,!0)}}e:{if(m=c?ni(c):window,p=m.nodeName&&m.nodeName.toLowerCase(),p==="select"||p==="input"&&m.type==="file")var S=ZT;else if(Mv(m))if(nS)S=nj;else{S=ej;var P=JT}else(p=m.nodeName)&&p.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(S=tj);if(S&&(S=S(e,c))){tS(f,S,n,d);break e}P&&P(e,m,c),e==="focusout"&&(P=m._wrapperState)&&P.controlled&&m.type==="number"&&ih(m,"number",m.value)}switch(P=c?ni(c):window,e){case"focusin":(Mv(P)||P.contentEditable==="true")&&(ei=P,vh=c,Aa=null);break;case"focusout":Aa=vh=ei=null;break;case"mousedown":yh=!0;break;case"contextmenu":case"mouseup":case"dragend":yh=!1,Fv(f,n,d);break;case"selectionchange":if(ij)break;case"keydown":case"keyup":Fv(f,n,d)}var k;if(lg)e:{switch(e){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else Jo?Jw(e,n)&&(_="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(_="onCompositionStart");_&&(Zw&&n.locale!=="ko"&&(Jo||_!=="onCompositionStart"?_==="onCompositionEnd"&&Jo&&(k=Qw()):(kr=d,ig="value"in kr?kr.value:kr.textContent,Jo=!0)),P=Ec(c,_),0<P.length&&(_=new Tv(_,e,null,n,d),f.push({event:_,listeners:P}),k?_.data=k:(k=eS(n),k!==null&&(_.data=k)))),(k=qT?YT(e,n):XT(e,n))&&(c=Ec(c,"onBeforeInput"),0<c.length&&(d=new Tv("onBeforeInput","beforeinput",null,n,d),f.push({event:d,listeners:c}),d.data=k))}fS(f,t)})}function as(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ec(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=Ja(e,n),i!=null&&r.unshift(as(e,i,o)),i=Ja(e,t),i!=null&&r.push(as(e,i,o))),e=e.return}return r}function Do(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Bv(e,t,n,r,o){for(var i=t._reactName,a=[];n!==null&&n!==r;){var l=n,s=l.alternate,c=l.stateNode;if(s!==null&&s===r)break;l.tag===5&&c!==null&&(l=c,o?(s=Ja(n,i),s!=null&&a.unshift(as(n,s,l))):o||(s=Ja(n,i),s!=null&&a.push(as(n,s,l)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var cj=/\r\n?/g,uj=/\u0000|\uFFFD/g;function Vv(e){return(typeof e=="string"?e:""+e).replace(cj,`
`).replace(uj,"")}function rl(e,t,n){if(t=Vv(t),Vv(e)!==t&&n)throw Error(H(425))}function Cc(){}var xh=null,bh=null;function wh(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Sh=typeof setTimeout=="function"?setTimeout:void 0,dj=typeof clearTimeout=="function"?clearTimeout:void 0,Wv=typeof Promise=="function"?Promise:void 0,fj=typeof queueMicrotask=="function"?queueMicrotask:typeof Wv<"u"?function(e){return Wv.resolve(null).then(e).catch(pj)}:Sh;function pj(e){setTimeout(function(){throw e})}function yf(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),ns(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);ns(t)}function Dr(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Uv(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Vi=Math.random().toString(36).slice(2),An="__reactFiber$"+Vi,ss="__reactProps$"+Vi,ar="__reactContainer$"+Vi,Eh="__reactEvents$"+Vi,hj="__reactListeners$"+Vi,mj="__reactHandles$"+Vi;function io(e){var t=e[An];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ar]||n[An]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Uv(e);e!==null;){if(n=e[An])return n;e=Uv(e)}return t}e=n,n=e.parentNode}return null}function Os(e){return e=e[An]||e[ar],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function ni(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(H(33))}function ku(e){return e[ss]||null}var Ch=[],ri=-1;function Hr(e){return{current:e}}function Ce(e){0>ri||(e.current=Ch[ri],Ch[ri]=null,ri--)}function we(e,t){ri++,Ch[ri]=e.current,e.current=t}var Vr={},mt=Hr(Vr),It=Hr(!1),vo=Vr;function bi(e,t){var n=e.type.contextTypes;if(!n)return Vr;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Mt(e){return e=e.childContextTypes,e!=null}function _c(){Ce(It),Ce(mt)}function Hv(e,t,n){if(mt.current!==Vr)throw Error(H(168));we(mt,t),we(It,n)}function hS(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(H(108,JO(e)||"Unknown",o));return $e({},n,r)}function kc(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Vr,vo=mt.current,we(mt,e),we(It,It.current),!0}function Gv(e,t,n){var r=e.stateNode;if(!r)throw Error(H(169));n?(e=hS(e,t,vo),r.__reactInternalMemoizedMergedChildContext=e,Ce(It),Ce(mt),we(mt,e)):Ce(It),we(It,n)}var Qn=null,Pu=!1,xf=!1;function mS(e){Qn===null?Qn=[e]:Qn.push(e)}function gj(e){Pu=!0,mS(e)}function Gr(){if(!xf&&Qn!==null){xf=!0;var e=0,t=ye;try{var n=Qn;for(ye=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Qn=null,Pu=!1}catch(o){throw Qn!==null&&(Qn=Qn.slice(e+1)),Nw(tg,Gr),o}finally{ye=t,xf=!1}}return null}var oi=[],ii=0,Pc=null,Oc=0,Zt=[],Jt=0,yo=null,er=1,tr="";function Zr(e,t){oi[ii++]=Oc,oi[ii++]=Pc,Pc=e,Oc=t}function gS(e,t,n){Zt[Jt++]=er,Zt[Jt++]=tr,Zt[Jt++]=yo,yo=e;var r=er;e=tr;var o=32-gn(r)-1;r&=~(1<<o),n+=1;var i=32-gn(t)+o;if(30<i){var a=o-o%5;i=(r&(1<<a)-1).toString(32),r>>=a,o-=a,er=1<<32-gn(t)+o|n<<o|r,tr=i+e}else er=1<<i|n<<o|r,tr=e}function ug(e){e.return!==null&&(Zr(e,1),gS(e,1,0))}function dg(e){for(;e===Pc;)Pc=oi[--ii],oi[ii]=null,Oc=oi[--ii],oi[ii]=null;for(;e===yo;)yo=Zt[--Jt],Zt[Jt]=null,tr=Zt[--Jt],Zt[Jt]=null,er=Zt[--Jt],Zt[Jt]=null}var Ut=null,Bt=null,Pe=!1,hn=null;function vS(e,t){var n=en(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function qv(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ut=e,Bt=Dr(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ut=e,Bt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=yo!==null?{id:er,overflow:tr}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=en(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ut=e,Bt=null,!0):!1;default:return!1}}function _h(e){return(e.mode&1)!==0&&(e.flags&128)===0}function kh(e){if(Pe){var t=Bt;if(t){var n=t;if(!qv(e,t)){if(_h(e))throw Error(H(418));t=Dr(n.nextSibling);var r=Ut;t&&qv(e,t)?vS(r,n):(e.flags=e.flags&-4097|2,Pe=!1,Ut=e)}}else{if(_h(e))throw Error(H(418));e.flags=e.flags&-4097|2,Pe=!1,Ut=e}}}function Yv(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ut=e}function ol(e){if(e!==Ut)return!1;if(!Pe)return Yv(e),Pe=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!wh(e.type,e.memoizedProps)),t&&(t=Bt)){if(_h(e))throw yS(),Error(H(418));for(;t;)vS(e,t),t=Dr(t.nextSibling)}if(Yv(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(H(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Bt=Dr(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Bt=null}}else Bt=Ut?Dr(e.stateNode.nextSibling):null;return!0}function yS(){for(var e=Bt;e;)e=Dr(e.nextSibling)}function wi(){Bt=Ut=null,Pe=!1}function fg(e){hn===null?hn=[e]:hn.push(e)}var vj=pr.ReactCurrentBatchConfig;function dn(e,t){if(e&&e.defaultProps){t=$e({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Tc=Hr(null),jc=null,ai=null,pg=null;function hg(){pg=ai=jc=null}function mg(e){var t=Tc.current;Ce(Tc),e._currentValue=t}function Ph(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function pi(e,t){jc=e,pg=ai=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&($t=!0),e.firstContext=null)}function nn(e){var t=e._currentValue;if(pg!==e)if(e={context:e,memoizedValue:t,next:null},ai===null){if(jc===null)throw Error(H(308));ai=e,jc.dependencies={lanes:0,firstContext:e}}else ai=ai.next=e;return t}var ao=null;function gg(e){ao===null?ao=[e]:ao.push(e)}function xS(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,gg(t)):(n.next=o.next,o.next=n),t.interleaved=n,sr(e,r)}function sr(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var wr=!1;function vg(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function bS(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function nr(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Lr(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,ue&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,sr(e,n)}return o=r.interleaved,o===null?(t.next=t,gg(r)):(t.next=o.next,o.next=t),r.interleaved=t,sr(e,n)}function zl(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ng(e,n)}}function Xv(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=a:i=i.next=a,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function $c(e,t,n,r){var o=e.updateQueue;wr=!1;var i=o.firstBaseUpdate,a=o.lastBaseUpdate,l=o.shared.pending;if(l!==null){o.shared.pending=null;var s=l,c=s.next;s.next=null,a===null?i=c:a.next=c,a=s;var d=e.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==a&&(l===null?d.firstBaseUpdate=c:l.next=c,d.lastBaseUpdate=s))}if(i!==null){var f=o.baseState;a=0,d=c=s=null,l=i;do{var m=l.lane,p=l.eventTime;if((r&m)===m){d!==null&&(d=d.next={eventTime:p,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var h=e,y=l;switch(m=t,p=n,y.tag){case 1:if(h=y.payload,typeof h=="function"){f=h.call(p,f,m);break e}f=h;break e;case 3:h.flags=h.flags&-65537|128;case 0:if(h=y.payload,m=typeof h=="function"?h.call(p,f,m):h,m==null)break e;f=$e({},f,m);break e;case 2:wr=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,m=o.effects,m===null?o.effects=[l]:m.push(l))}else p={eventTime:p,lane:m,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(c=d=p,s=f):d=d.next=p,a|=m;if(l=l.next,l===null){if(l=o.shared.pending,l===null)break;m=l,l=m.next,m.next=null,o.lastBaseUpdate=m,o.shared.pending=null}}while(1);if(d===null&&(s=f),o.baseState=s,o.firstBaseUpdate=c,o.lastBaseUpdate=d,t=o.shared.interleaved,t!==null){o=t;do a|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);bo|=a,e.lanes=a,e.memoizedState=f}}function Kv(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(H(191,o));o.call(r)}}}var wS=new xw.Component().refs;function Oh(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:$e({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ou={isMounted:function(e){return(e=e._reactInternals)?To(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=wt(),o=Fr(e),i=nr(r,o);i.payload=t,n!=null&&(i.callback=n),t=Lr(e,i,o),t!==null&&(vn(t,e,o,r),zl(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=wt(),o=Fr(e),i=nr(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Lr(e,i,o),t!==null&&(vn(t,e,o,r),zl(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=wt(),r=Fr(e),o=nr(n,r);o.tag=2,t!=null&&(o.callback=t),t=Lr(e,o,r),t!==null&&(vn(t,e,r,n),zl(t,e,r))}};function Qv(e,t,n,r,o,i,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,a):t.prototype&&t.prototype.isPureReactComponent?!os(n,r)||!os(o,i):!0}function SS(e,t,n){var r=!1,o=Vr,i=t.contextType;return typeof i=="object"&&i!==null?i=nn(i):(o=Mt(t)?vo:mt.current,r=t.contextTypes,i=(r=r!=null)?bi(e,o):Vr),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ou,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function Zv(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ou.enqueueReplaceState(t,t.state,null)}function Th(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs=wS,vg(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=nn(i):(i=Mt(t)?vo:mt.current,o.context=bi(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Oh(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&Ou.enqueueReplaceState(o,o.state,null),$c(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function sa(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(H(309));var r=n.stateNode}if(!r)throw Error(H(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(a){var l=o.refs;l===wS&&(l=o.refs={}),a===null?delete l[i]:l[i]=a},t._stringRef=i,t)}if(typeof e!="string")throw Error(H(284));if(!n._owner)throw Error(H(290,e))}return e}function il(e,t){throw e=Object.prototype.toString.call(t),Error(H(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Jv(e){var t=e._init;return t(e._payload)}function ES(e){function t(g,v){if(e){var w=g.deletions;w===null?(g.deletions=[v],g.flags|=16):w.push(v)}}function n(g,v){if(!e)return null;for(;v!==null;)t(g,v),v=v.sibling;return null}function r(g,v){for(g=new Map;v!==null;)v.key!==null?g.set(v.key,v):g.set(v.index,v),v=v.sibling;return g}function o(g,v){return g=zr(g,v),g.index=0,g.sibling=null,g}function i(g,v,w){return g.index=w,e?(w=g.alternate,w!==null?(w=w.index,w<v?(g.flags|=2,v):w):(g.flags|=2,v)):(g.flags|=1048576,v)}function a(g){return e&&g.alternate===null&&(g.flags|=2),g}function l(g,v,w,E){return v===null||v.tag!==6?(v=kf(w,g.mode,E),v.return=g,v):(v=o(v,w),v.return=g,v)}function s(g,v,w,E){var S=w.type;return S===Zo?d(g,v,w.props.children,E,w.key):v!==null&&(v.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===br&&Jv(S)===v.type)?(E=o(v,w.props),E.ref=sa(g,v,w),E.return=g,E):(E=Hl(w.type,w.key,w.props,null,g.mode,E),E.ref=sa(g,v,w),E.return=g,E)}function c(g,v,w,E){return v===null||v.tag!==4||v.stateNode.containerInfo!==w.containerInfo||v.stateNode.implementation!==w.implementation?(v=Pf(w,g.mode,E),v.return=g,v):(v=o(v,w.children||[]),v.return=g,v)}function d(g,v,w,E,S){return v===null||v.tag!==7?(v=fo(w,g.mode,E,S),v.return=g,v):(v=o(v,w),v.return=g,v)}function f(g,v,w){if(typeof v=="string"&&v!==""||typeof v=="number")return v=kf(""+v,g.mode,w),v.return=g,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Ys:return w=Hl(v.type,v.key,v.props,null,g.mode,w),w.ref=sa(g,null,v),w.return=g,w;case Qo:return v=Pf(v,g.mode,w),v.return=g,v;case br:var E=v._init;return f(g,E(v._payload),w)}if(ba(v)||na(v))return v=fo(v,g.mode,w,null),v.return=g,v;il(g,v)}return null}function m(g,v,w,E){var S=v!==null?v.key:null;if(typeof w=="string"&&w!==""||typeof w=="number")return S!==null?null:l(g,v,""+w,E);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Ys:return w.key===S?s(g,v,w,E):null;case Qo:return w.key===S?c(g,v,w,E):null;case br:return S=w._init,m(g,v,S(w._payload),E)}if(ba(w)||na(w))return S!==null?null:d(g,v,w,E,null);il(g,w)}return null}function p(g,v,w,E,S){if(typeof E=="string"&&E!==""||typeof E=="number")return g=g.get(w)||null,l(v,g,""+E,S);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case Ys:return g=g.get(E.key===null?w:E.key)||null,s(v,g,E,S);case Qo:return g=g.get(E.key===null?w:E.key)||null,c(v,g,E,S);case br:var P=E._init;return p(g,v,w,P(E._payload),S)}if(ba(E)||na(E))return g=g.get(w)||null,d(v,g,E,S,null);il(v,E)}return null}function h(g,v,w,E){for(var S=null,P=null,k=v,_=v=0,T=null;k!==null&&_<w.length;_++){k.index>_?(T=k,k=null):T=k.sibling;var $=m(g,k,w[_],E);if($===null){k===null&&(k=T);break}e&&k&&$.alternate===null&&t(g,k),v=i($,v,_),P===null?S=$:P.sibling=$,P=$,k=T}if(_===w.length)return n(g,k),Pe&&Zr(g,_),S;if(k===null){for(;_<w.length;_++)k=f(g,w[_],E),k!==null&&(v=i(k,v,_),P===null?S=k:P.sibling=k,P=k);return Pe&&Zr(g,_),S}for(k=r(g,k);_<w.length;_++)T=p(k,g,_,w[_],E),T!==null&&(e&&T.alternate!==null&&k.delete(T.key===null?_:T.key),v=i(T,v,_),P===null?S=T:P.sibling=T,P=T);return e&&k.forEach(function(I){return t(g,I)}),Pe&&Zr(g,_),S}function y(g,v,w,E){var S=na(w);if(typeof S!="function")throw Error(H(150));if(w=S.call(w),w==null)throw Error(H(151));for(var P=S=null,k=v,_=v=0,T=null,$=w.next();k!==null&&!$.done;_++,$=w.next()){k.index>_?(T=k,k=null):T=k.sibling;var I=m(g,k,$.value,E);if(I===null){k===null&&(k=T);break}e&&k&&I.alternate===null&&t(g,k),v=i(I,v,_),P===null?S=I:P.sibling=I,P=I,k=T}if($.done)return n(g,k),Pe&&Zr(g,_),S;if(k===null){for(;!$.done;_++,$=w.next())$=f(g,$.value,E),$!==null&&(v=i($,v,_),P===null?S=$:P.sibling=$,P=$);return Pe&&Zr(g,_),S}for(k=r(g,k);!$.done;_++,$=w.next())$=p(k,g,_,$.value,E),$!==null&&(e&&$.alternate!==null&&k.delete($.key===null?_:$.key),v=i($,v,_),P===null?S=$:P.sibling=$,P=$);return e&&k.forEach(function(M){return t(g,M)}),Pe&&Zr(g,_),S}function b(g,v,w,E){if(typeof w=="object"&&w!==null&&w.type===Zo&&w.key===null&&(w=w.props.children),typeof w=="object"&&w!==null){switch(w.$$typeof){case Ys:e:{for(var S=w.key,P=v;P!==null;){if(P.key===S){if(S=w.type,S===Zo){if(P.tag===7){n(g,P.sibling),v=o(P,w.props.children),v.return=g,g=v;break e}}else if(P.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===br&&Jv(S)===P.type){n(g,P.sibling),v=o(P,w.props),v.ref=sa(g,P,w),v.return=g,g=v;break e}n(g,P);break}else t(g,P);P=P.sibling}w.type===Zo?(v=fo(w.props.children,g.mode,E,w.key),v.return=g,g=v):(E=Hl(w.type,w.key,w.props,null,g.mode,E),E.ref=sa(g,v,w),E.return=g,g=E)}return a(g);case Qo:e:{for(P=w.key;v!==null;){if(v.key===P)if(v.tag===4&&v.stateNode.containerInfo===w.containerInfo&&v.stateNode.implementation===w.implementation){n(g,v.sibling),v=o(v,w.children||[]),v.return=g,g=v;break e}else{n(g,v);break}else t(g,v);v=v.sibling}v=Pf(w,g.mode,E),v.return=g,g=v}return a(g);case br:return P=w._init,b(g,v,P(w._payload),E)}if(ba(w))return h(g,v,w,E);if(na(w))return y(g,v,w,E);il(g,w)}return typeof w=="string"&&w!==""||typeof w=="number"?(w=""+w,v!==null&&v.tag===6?(n(g,v.sibling),v=o(v,w),v.return=g,g=v):(n(g,v),v=kf(w,g.mode,E),v.return=g,g=v),a(g)):n(g,v)}return b}var Si=ES(!0),CS=ES(!1),Ts={},Rn=Hr(Ts),ls=Hr(Ts),cs=Hr(Ts);function so(e){if(e===Ts)throw Error(H(174));return e}function yg(e,t){switch(we(cs,t),we(ls,e),we(Rn,Ts),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:sh(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=sh(t,e)}Ce(Rn),we(Rn,t)}function Ei(){Ce(Rn),Ce(ls),Ce(cs)}function _S(e){so(cs.current);var t=so(Rn.current),n=sh(t,e.type);t!==n&&(we(ls,e),we(Rn,n))}function xg(e){ls.current===e&&(Ce(Rn),Ce(ls))}var Te=Hr(0);function Ic(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var bf=[];function bg(){for(var e=0;e<bf.length;e++)bf[e]._workInProgressVersionPrimary=null;bf.length=0}var Nl=pr.ReactCurrentDispatcher,wf=pr.ReactCurrentBatchConfig,xo=0,je=null,He=null,Ze=null,Mc=!1,Da=!1,us=0,yj=0;function lt(){throw Error(H(321))}function wg(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!wn(e[n],t[n]))return!1;return!0}function Sg(e,t,n,r,o,i){if(xo=i,je=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Nl.current=e===null||e.memoizedState===null?Sj:Ej,e=n(r,o),Da){i=0;do{if(Da=!1,us=0,25<=i)throw Error(H(301));i+=1,Ze=He=null,t.updateQueue=null,Nl.current=Cj,e=n(r,o)}while(Da)}if(Nl.current=Ac,t=He!==null&&He.next!==null,xo=0,Ze=He=je=null,Mc=!1,t)throw Error(H(300));return e}function Eg(){var e=us!==0;return us=0,e}function On(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ze===null?je.memoizedState=Ze=e:Ze=Ze.next=e,Ze}function rn(){if(He===null){var e=je.alternate;e=e!==null?e.memoizedState:null}else e=He.next;var t=Ze===null?je.memoizedState:Ze.next;if(t!==null)Ze=t,He=e;else{if(e===null)throw Error(H(310));He=e,e={memoizedState:He.memoizedState,baseState:He.baseState,baseQueue:He.baseQueue,queue:He.queue,next:null},Ze===null?je.memoizedState=Ze=e:Ze=Ze.next=e}return Ze}function ds(e,t){return typeof t=="function"?t(e):t}function Sf(e){var t=rn(),n=t.queue;if(n===null)throw Error(H(311));n.lastRenderedReducer=e;var r=He,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var a=o.next;o.next=i.next,i.next=a}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var l=a=null,s=null,c=i;do{var d=c.lane;if((xo&d)===d)s!==null&&(s=s.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var f={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};s===null?(l=s=f,a=r):s=s.next=f,je.lanes|=d,bo|=d}c=c.next}while(c!==null&&c!==i);s===null?a=r:s.next=l,wn(r,t.memoizedState)||($t=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,je.lanes|=i,bo|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Ef(e){var t=rn(),n=t.queue;if(n===null)throw Error(H(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var a=o=o.next;do i=e(i,a.action),a=a.next;while(a!==o);wn(i,t.memoizedState)||($t=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function kS(){}function PS(e,t){var n=je,r=rn(),o=t(),i=!wn(r.memoizedState,o);if(i&&(r.memoizedState=o,$t=!0),r=r.queue,Cg(jS.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||Ze!==null&&Ze.memoizedState.tag&1){if(n.flags|=2048,fs(9,TS.bind(null,n,r,o,t),void 0,null),Je===null)throw Error(H(349));xo&30||OS(n,t,o)}return o}function OS(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=je.updateQueue,t===null?(t={lastEffect:null,stores:null},je.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function TS(e,t,n,r){t.value=n,t.getSnapshot=r,$S(t)&&IS(e)}function jS(e,t,n){return n(function(){$S(t)&&IS(e)})}function $S(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!wn(e,n)}catch{return!0}}function IS(e){var t=sr(e,1);t!==null&&vn(t,e,1,-1)}function ey(e){var t=On();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ds,lastRenderedState:e},t.queue=e,e=e.dispatch=wj.bind(null,je,e),[t.memoizedState,e]}function fs(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=je.updateQueue,t===null?(t={lastEffect:null,stores:null},je.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function MS(){return rn().memoizedState}function Bl(e,t,n,r){var o=On();je.flags|=e,o.memoizedState=fs(1|t,n,void 0,r===void 0?null:r)}function Tu(e,t,n,r){var o=rn();r=r===void 0?null:r;var i=void 0;if(He!==null){var a=He.memoizedState;if(i=a.destroy,r!==null&&wg(r,a.deps)){o.memoizedState=fs(t,n,i,r);return}}je.flags|=e,o.memoizedState=fs(1|t,n,i,r)}function ty(e,t){return Bl(8390656,8,e,t)}function Cg(e,t){return Tu(2048,8,e,t)}function AS(e,t){return Tu(4,2,e,t)}function DS(e,t){return Tu(4,4,e,t)}function LS(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function RS(e,t,n){return n=n!=null?n.concat([e]):null,Tu(4,4,LS.bind(null,t,e),n)}function _g(){}function FS(e,t){var n=rn();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&wg(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function zS(e,t){var n=rn();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&wg(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function NS(e,t,n){return xo&21?(wn(n,t)||(n=Ww(),je.lanes|=n,bo|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,$t=!0),e.memoizedState=n)}function xj(e,t){var n=ye;ye=n!==0&&4>n?n:4,e(!0);var r=wf.transition;wf.transition={};try{e(!1),t()}finally{ye=n,wf.transition=r}}function BS(){return rn().memoizedState}function bj(e,t,n){var r=Fr(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},VS(e))WS(t,n);else if(n=xS(e,t,n,r),n!==null){var o=wt();vn(n,e,r,o),US(n,t,r)}}function wj(e,t,n){var r=Fr(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(VS(e))WS(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var a=t.lastRenderedState,l=i(a,n);if(o.hasEagerState=!0,o.eagerState=l,wn(l,a)){var s=t.interleaved;s===null?(o.next=o,gg(t)):(o.next=s.next,s.next=o),t.interleaved=o;return}}catch{}finally{}n=xS(e,t,o,r),n!==null&&(o=wt(),vn(n,e,r,o),US(n,t,r))}}function VS(e){var t=e.alternate;return e===je||t!==null&&t===je}function WS(e,t){Da=Mc=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function US(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ng(e,n)}}var Ac={readContext:nn,useCallback:lt,useContext:lt,useEffect:lt,useImperativeHandle:lt,useInsertionEffect:lt,useLayoutEffect:lt,useMemo:lt,useReducer:lt,useRef:lt,useState:lt,useDebugValue:lt,useDeferredValue:lt,useTransition:lt,useMutableSource:lt,useSyncExternalStore:lt,useId:lt,unstable_isNewReconciler:!1},Sj={readContext:nn,useCallback:function(e,t){return On().memoizedState=[e,t===void 0?null:t],e},useContext:nn,useEffect:ty,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Bl(4194308,4,LS.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Bl(4194308,4,e,t)},useInsertionEffect:function(e,t){return Bl(4,2,e,t)},useMemo:function(e,t){var n=On();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=On();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=bj.bind(null,je,e),[r.memoizedState,e]},useRef:function(e){var t=On();return e={current:e},t.memoizedState=e},useState:ey,useDebugValue:_g,useDeferredValue:function(e){return On().memoizedState=e},useTransition:function(){var e=ey(!1),t=e[0];return e=xj.bind(null,e[1]),On().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=je,o=On();if(Pe){if(n===void 0)throw Error(H(407));n=n()}else{if(n=t(),Je===null)throw Error(H(349));xo&30||OS(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,ty(jS.bind(null,r,i,e),[e]),r.flags|=2048,fs(9,TS.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=On(),t=Je.identifierPrefix;if(Pe){var n=tr,r=er;n=(r&~(1<<32-gn(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=us++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=yj++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Ej={readContext:nn,useCallback:FS,useContext:nn,useEffect:Cg,useImperativeHandle:RS,useInsertionEffect:AS,useLayoutEffect:DS,useMemo:zS,useReducer:Sf,useRef:MS,useState:function(){return Sf(ds)},useDebugValue:_g,useDeferredValue:function(e){var t=rn();return NS(t,He.memoizedState,e)},useTransition:function(){var e=Sf(ds)[0],t=rn().memoizedState;return[e,t]},useMutableSource:kS,useSyncExternalStore:PS,useId:BS,unstable_isNewReconciler:!1},Cj={readContext:nn,useCallback:FS,useContext:nn,useEffect:Cg,useImperativeHandle:RS,useInsertionEffect:AS,useLayoutEffect:DS,useMemo:zS,useReducer:Ef,useRef:MS,useState:function(){return Ef(ds)},useDebugValue:_g,useDeferredValue:function(e){var t=rn();return He===null?t.memoizedState=e:NS(t,He.memoizedState,e)},useTransition:function(){var e=Ef(ds)[0],t=rn().memoizedState;return[e,t]},useMutableSource:kS,useSyncExternalStore:PS,useId:BS,unstable_isNewReconciler:!1};function Ci(e,t){try{var n="",r=t;do n+=ZO(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function Cf(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function jh(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var _j=typeof WeakMap=="function"?WeakMap:Map;function HS(e,t,n){n=nr(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Lc||(Lc=!0,Nh=r),jh(e,t)},n}function GS(e,t,n){n=nr(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){jh(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){jh(e,t),typeof r!="function"&&(Rr===null?Rr=new Set([this]):Rr.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function ny(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new _j;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=zj.bind(null,e,t,n),t.then(e,e))}function ry(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function oy(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=nr(-1,1),t.tag=2,Lr(n,t,1))),n.lanes|=1),e)}var kj=pr.ReactCurrentOwner,$t=!1;function xt(e,t,n,r){t.child=e===null?CS(t,null,n,r):Si(t,e.child,n,r)}function iy(e,t,n,r,o){n=n.render;var i=t.ref;return pi(t,o),r=Sg(e,t,n,r,i,o),n=Eg(),e!==null&&!$t?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,lr(e,t,o)):(Pe&&n&&ug(t),t.flags|=1,xt(e,t,r,o),t.child)}function ay(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!Mg(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,qS(e,t,i,r,o)):(e=Hl(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&o)){var a=i.memoizedProps;if(n=n.compare,n=n!==null?n:os,n(a,r)&&e.ref===t.ref)return lr(e,t,o)}return t.flags|=1,e=zr(i,r),e.ref=t.ref,e.return=t,t.child=e}function qS(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(os(i,r)&&e.ref===t.ref)if($t=!1,t.pendingProps=r=i,(e.lanes&o)!==0)e.flags&131072&&($t=!0);else return t.lanes=e.lanes,lr(e,t,o)}return $h(e,t,n,r,o)}function YS(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},we(li,zt),zt|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,we(li,zt),zt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,we(li,zt),zt|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,we(li,zt),zt|=r;return xt(e,t,o,n),t.child}function XS(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function $h(e,t,n,r,o){var i=Mt(n)?vo:mt.current;return i=bi(t,i),pi(t,o),n=Sg(e,t,n,r,i,o),r=Eg(),e!==null&&!$t?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,lr(e,t,o)):(Pe&&r&&ug(t),t.flags|=1,xt(e,t,n,o),t.child)}function sy(e,t,n,r,o){if(Mt(n)){var i=!0;kc(t)}else i=!1;if(pi(t,o),t.stateNode===null)Vl(e,t),SS(t,n,r),Th(t,n,r,o),r=!0;else if(e===null){var a=t.stateNode,l=t.memoizedProps;a.props=l;var s=a.context,c=n.contextType;typeof c=="object"&&c!==null?c=nn(c):(c=Mt(n)?vo:mt.current,c=bi(t,c));var d=n.getDerivedStateFromProps,f=typeof d=="function"||typeof a.getSnapshotBeforeUpdate=="function";f||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==r||s!==c)&&Zv(t,a,r,c),wr=!1;var m=t.memoizedState;a.state=m,$c(t,r,a,o),s=t.memoizedState,l!==r||m!==s||It.current||wr?(typeof d=="function"&&(Oh(t,n,d,r),s=t.memoizedState),(l=wr||Qv(t,n,l,r,m,s,c))?(f||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),a.props=r,a.state=s,a.context=c,r=l):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,bS(e,t),l=t.memoizedProps,c=t.type===t.elementType?l:dn(t.type,l),a.props=c,f=t.pendingProps,m=a.context,s=n.contextType,typeof s=="object"&&s!==null?s=nn(s):(s=Mt(n)?vo:mt.current,s=bi(t,s));var p=n.getDerivedStateFromProps;(d=typeof p=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==f||m!==s)&&Zv(t,a,r,s),wr=!1,m=t.memoizedState,a.state=m,$c(t,r,a,o);var h=t.memoizedState;l!==f||m!==h||It.current||wr?(typeof p=="function"&&(Oh(t,n,p,r),h=t.memoizedState),(c=wr||Qv(t,n,c,r,m,h,s)||!1)?(d||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,h,s),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,h,s)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=h),a.props=r,a.state=h,a.context=s,r=c):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return Ih(e,t,n,r,i,o)}function Ih(e,t,n,r,o,i){XS(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return o&&Gv(t,n,!1),lr(e,t,i);r=t.stateNode,kj.current=t;var l=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=Si(t,e.child,null,i),t.child=Si(t,null,l,i)):xt(e,t,l,i),t.memoizedState=r.state,o&&Gv(t,n,!0),t.child}function KS(e){var t=e.stateNode;t.pendingContext?Hv(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Hv(e,t.context,!1),yg(e,t.containerInfo)}function ly(e,t,n,r,o){return wi(),fg(o),t.flags|=256,xt(e,t,n,r),t.child}var Mh={dehydrated:null,treeContext:null,retryLane:0};function Ah(e){return{baseLanes:e,cachePool:null,transitions:null}}function QS(e,t,n){var r=t.pendingProps,o=Te.current,i=!1,a=(t.flags&128)!==0,l;if((l=a)||(l=e!==null&&e.memoizedState===null?!1:(o&2)!==0),l?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),we(Te,o&1),e===null)return kh(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,i?(r=t.mode,i=t.child,a={mode:"hidden",children:a},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=a):i=Iu(a,r,0,null),e=fo(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Ah(n),t.memoizedState=Mh,e):kg(t,a));if(o=e.memoizedState,o!==null&&(l=o.dehydrated,l!==null))return Pj(e,t,a,r,l,o,n);if(i){i=r.fallback,a=t.mode,o=e.child,l=o.sibling;var s={mode:"hidden",children:r.children};return!(a&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=zr(o,s),r.subtreeFlags=o.subtreeFlags&14680064),l!==null?i=zr(l,i):(i=fo(i,a,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,a=e.child.memoizedState,a=a===null?Ah(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},i.memoizedState=a,i.childLanes=e.childLanes&~n,t.memoizedState=Mh,r}return i=e.child,e=i.sibling,r=zr(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function kg(e,t){return t=Iu({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function al(e,t,n,r){return r!==null&&fg(r),Si(t,e.child,null,n),e=kg(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Pj(e,t,n,r,o,i,a){if(n)return t.flags&256?(t.flags&=-257,r=Cf(Error(H(422))),al(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=Iu({mode:"visible",children:r.children},o,0,null),i=fo(i,o,a,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&Si(t,e.child,null,a),t.child.memoizedState=Ah(a),t.memoizedState=Mh,i);if(!(t.mode&1))return al(e,t,a,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var l=r.dgst;return r=l,i=Error(H(419)),r=Cf(i,r,void 0),al(e,t,a,r)}if(l=(a&e.childLanes)!==0,$t||l){if(r=Je,r!==null){switch(a&-a){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|a)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,sr(e,o),vn(r,e,o,-1))}return Ig(),r=Cf(Error(H(421))),al(e,t,a,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=Nj.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,Bt=Dr(o.nextSibling),Ut=t,Pe=!0,hn=null,e!==null&&(Zt[Jt++]=er,Zt[Jt++]=tr,Zt[Jt++]=yo,er=e.id,tr=e.overflow,yo=t),t=kg(t,r.children),t.flags|=4096,t)}function cy(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ph(e.return,t,n)}function _f(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function ZS(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(xt(e,t,r.children,n),r=Te.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&cy(e,n,t);else if(e.tag===19)cy(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(we(Te,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&Ic(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),_f(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&Ic(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}_f(t,!0,n,null,i);break;case"together":_f(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Vl(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function lr(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),bo|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(H(153));if(t.child!==null){for(e=t.child,n=zr(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=zr(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Oj(e,t,n){switch(t.tag){case 3:KS(t),wi();break;case 5:_S(t);break;case 1:Mt(t.type)&&kc(t);break;case 4:yg(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;we(Tc,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(we(Te,Te.current&1),t.flags|=128,null):n&t.child.childLanes?QS(e,t,n):(we(Te,Te.current&1),e=lr(e,t,n),e!==null?e.sibling:null);we(Te,Te.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return ZS(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),we(Te,Te.current),r)break;return null;case 22:case 23:return t.lanes=0,YS(e,t,n)}return lr(e,t,n)}var JS,Dh,e2,t2;JS=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Dh=function(){};e2=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,so(Rn.current);var i=null;switch(n){case"input":o=rh(e,o),r=rh(e,r),i=[];break;case"select":o=$e({},o,{value:void 0}),r=$e({},r,{value:void 0}),i=[];break;case"textarea":o=ah(e,o),r=ah(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Cc)}lh(n,r);var a;n=null;for(c in o)if(!r.hasOwnProperty(c)&&o.hasOwnProperty(c)&&o[c]!=null)if(c==="style"){var l=o[c];for(a in l)l.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Qa.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in r){var s=r[c];if(l=o!=null?o[c]:void 0,r.hasOwnProperty(c)&&s!==l&&(s!=null||l!=null))if(c==="style")if(l){for(a in l)!l.hasOwnProperty(a)||s&&s.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in s)s.hasOwnProperty(a)&&l[a]!==s[a]&&(n||(n={}),n[a]=s[a])}else n||(i||(i=[]),i.push(c,n)),n=s;else c==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,l=l?l.__html:void 0,s!=null&&l!==s&&(i=i||[]).push(c,s)):c==="children"?typeof s!="string"&&typeof s!="number"||(i=i||[]).push(c,""+s):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Qa.hasOwnProperty(c)?(s!=null&&c==="onScroll"&&Se("scroll",e),i||l===s||(i=[])):(i=i||[]).push(c,s))}n&&(i=i||[]).push("style",n);var c=i;(t.updateQueue=c)&&(t.flags|=4)}};t2=function(e,t,n,r){n!==r&&(t.flags|=4)};function la(e,t){if(!Pe)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ct(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Tj(e,t,n){var r=t.pendingProps;switch(dg(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ct(t),null;case 1:return Mt(t.type)&&_c(),ct(t),null;case 3:return r=t.stateNode,Ei(),Ce(It),Ce(mt),bg(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(ol(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,hn!==null&&(Wh(hn),hn=null))),Dh(e,t),ct(t),null;case 5:xg(t);var o=so(cs.current);if(n=t.type,e!==null&&t.stateNode!=null)e2(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(H(166));return ct(t),null}if(e=so(Rn.current),ol(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[An]=t,r[ss]=i,e=(t.mode&1)!==0,n){case"dialog":Se("cancel",r),Se("close",r);break;case"iframe":case"object":case"embed":Se("load",r);break;case"video":case"audio":for(o=0;o<Sa.length;o++)Se(Sa[o],r);break;case"source":Se("error",r);break;case"img":case"image":case"link":Se("error",r),Se("load",r);break;case"details":Se("toggle",r);break;case"input":yv(r,i),Se("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},Se("invalid",r);break;case"textarea":bv(r,i),Se("invalid",r)}lh(n,i),o=null;for(var a in i)if(i.hasOwnProperty(a)){var l=i[a];a==="children"?typeof l=="string"?r.textContent!==l&&(i.suppressHydrationWarning!==!0&&rl(r.textContent,l,e),o=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(i.suppressHydrationWarning!==!0&&rl(r.textContent,l,e),o=["children",""+l]):Qa.hasOwnProperty(a)&&l!=null&&a==="onScroll"&&Se("scroll",r)}switch(n){case"input":Xs(r),xv(r,i,!0);break;case"textarea":Xs(r),wv(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Cc)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Ow(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[An]=t,e[ss]=r,JS(e,t,!1,!1),t.stateNode=e;e:{switch(a=ch(n,r),n){case"dialog":Se("cancel",e),Se("close",e),o=r;break;case"iframe":case"object":case"embed":Se("load",e),o=r;break;case"video":case"audio":for(o=0;o<Sa.length;o++)Se(Sa[o],e);o=r;break;case"source":Se("error",e),o=r;break;case"img":case"image":case"link":Se("error",e),Se("load",e),o=r;break;case"details":Se("toggle",e),o=r;break;case"input":yv(e,r),o=rh(e,r),Se("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=$e({},r,{value:void 0}),Se("invalid",e);break;case"textarea":bv(e,r),o=ah(e,r),Se("invalid",e);break;default:o=r}lh(n,o),l=o;for(i in l)if(l.hasOwnProperty(i)){var s=l[i];i==="style"?$w(e,s):i==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&Tw(e,s)):i==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&Za(e,s):typeof s=="number"&&Za(e,""+s):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Qa.hasOwnProperty(i)?s!=null&&i==="onScroll"&&Se("scroll",e):s!=null&&Km(e,i,s,a))}switch(n){case"input":Xs(e),xv(e,r,!1);break;case"textarea":Xs(e),wv(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Br(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?ci(e,!!r.multiple,i,!1):r.defaultValue!=null&&ci(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=Cc)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ct(t),null;case 6:if(e&&t.stateNode!=null)t2(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(H(166));if(n=so(cs.current),so(Rn.current),ol(t)){if(r=t.stateNode,n=t.memoizedProps,r[An]=t,(i=r.nodeValue!==n)&&(e=Ut,e!==null))switch(e.tag){case 3:rl(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&rl(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[An]=t,t.stateNode=r}return ct(t),null;case 13:if(Ce(Te),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Pe&&Bt!==null&&t.mode&1&&!(t.flags&128))yS(),wi(),t.flags|=98560,i=!1;else if(i=ol(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(H(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(H(317));i[An]=t}else wi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ct(t),i=!1}else hn!==null&&(Wh(hn),hn=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Te.current&1?qe===0&&(qe=3):Ig())),t.updateQueue!==null&&(t.flags|=4),ct(t),null);case 4:return Ei(),Dh(e,t),e===null&&is(t.stateNode.containerInfo),ct(t),null;case 10:return mg(t.type._context),ct(t),null;case 17:return Mt(t.type)&&_c(),ct(t),null;case 19:if(Ce(Te),i=t.memoizedState,i===null)return ct(t),null;if(r=(t.flags&128)!==0,a=i.rendering,a===null)if(r)la(i,!1);else{if(qe!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=Ic(e),a!==null){for(t.flags|=128,la(i,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,a=i.alternate,a===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=a.childLanes,i.lanes=a.lanes,i.child=a.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=a.memoizedProps,i.memoizedState=a.memoizedState,i.updateQueue=a.updateQueue,i.type=a.type,e=a.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return we(Te,Te.current&1|2),t.child}e=e.sibling}i.tail!==null&&Fe()>_i&&(t.flags|=128,r=!0,la(i,!1),t.lanes=4194304)}else{if(!r)if(e=Ic(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),la(i,!0),i.tail===null&&i.tailMode==="hidden"&&!a.alternate&&!Pe)return ct(t),null}else 2*Fe()-i.renderingStartTime>_i&&n!==1073741824&&(t.flags|=128,r=!0,la(i,!1),t.lanes=4194304);i.isBackwards?(a.sibling=t.child,t.child=a):(n=i.last,n!==null?n.sibling=a:t.child=a,i.last=a)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=Fe(),t.sibling=null,n=Te.current,we(Te,r?n&1|2:n&1),t):(ct(t),null);case 22:case 23:return $g(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?zt&1073741824&&(ct(t),t.subtreeFlags&6&&(t.flags|=8192)):ct(t),null;case 24:return null;case 25:return null}throw Error(H(156,t.tag))}function jj(e,t){switch(dg(t),t.tag){case 1:return Mt(t.type)&&_c(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Ei(),Ce(It),Ce(mt),bg(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return xg(t),null;case 13:if(Ce(Te),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(H(340));wi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Ce(Te),null;case 4:return Ei(),null;case 10:return mg(t.type._context),null;case 22:case 23:return $g(),null;case 24:return null;default:return null}}var sl=!1,pt=!1,$j=typeof WeakSet=="function"?WeakSet:Set,q=null;function si(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ae(e,t,r)}else n.current=null}function Lh(e,t,n){try{n()}catch(r){Ae(e,t,r)}}var uy=!1;function Ij(e,t){if(xh=wc,e=iS(),cg(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var a=0,l=-1,s=-1,c=0,d=0,f=e,m=null;t:for(;;){for(var p;f!==n||o!==0&&f.nodeType!==3||(l=a+o),f!==i||r!==0&&f.nodeType!==3||(s=a+r),f.nodeType===3&&(a+=f.nodeValue.length),(p=f.firstChild)!==null;)m=f,f=p;for(;;){if(f===e)break t;if(m===n&&++c===o&&(l=a),m===i&&++d===r&&(s=a),(p=f.nextSibling)!==null)break;f=m,m=f.parentNode}f=p}n=l===-1||s===-1?null:{start:l,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(bh={focusedElem:e,selectionRange:n},wc=!1,q=t;q!==null;)if(t=q,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,q=e;else for(;q!==null;){t=q;try{var h=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(h!==null){var y=h.memoizedProps,b=h.memoizedState,g=t.stateNode,v=g.getSnapshotBeforeUpdate(t.elementType===t.type?y:dn(t.type,y),b);g.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var w=t.stateNode.containerInfo;w.nodeType===1?w.textContent="":w.nodeType===9&&w.documentElement&&w.removeChild(w.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(H(163))}}catch(E){Ae(t,t.return,E)}if(e=t.sibling,e!==null){e.return=t.return,q=e;break}q=t.return}return h=uy,uy=!1,h}function La(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&Lh(t,n,i)}o=o.next}while(o!==r)}}function ju(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Rh(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function n2(e){var t=e.alternate;t!==null&&(e.alternate=null,n2(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[An],delete t[ss],delete t[Eh],delete t[hj],delete t[mj])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function r2(e){return e.tag===5||e.tag===3||e.tag===4}function dy(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||r2(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Fh(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Cc));else if(r!==4&&(e=e.child,e!==null))for(Fh(e,t,n),e=e.sibling;e!==null;)Fh(e,t,n),e=e.sibling}function zh(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(zh(e,t,n),e=e.sibling;e!==null;)zh(e,t,n),e=e.sibling}var ot=null,fn=!1;function yr(e,t,n){for(n=n.child;n!==null;)o2(e,t,n),n=n.sibling}function o2(e,t,n){if(Ln&&typeof Ln.onCommitFiberUnmount=="function")try{Ln.onCommitFiberUnmount(Su,n)}catch{}switch(n.tag){case 5:pt||si(n,t);case 6:var r=ot,o=fn;ot=null,yr(e,t,n),ot=r,fn=o,ot!==null&&(fn?(e=ot,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ot.removeChild(n.stateNode));break;case 18:ot!==null&&(fn?(e=ot,n=n.stateNode,e.nodeType===8?yf(e.parentNode,n):e.nodeType===1&&yf(e,n),ns(e)):yf(ot,n.stateNode));break;case 4:r=ot,o=fn,ot=n.stateNode.containerInfo,fn=!0,yr(e,t,n),ot=r,fn=o;break;case 0:case 11:case 14:case 15:if(!pt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,a=i.destroy;i=i.tag,a!==void 0&&(i&2||i&4)&&Lh(n,t,a),o=o.next}while(o!==r)}yr(e,t,n);break;case 1:if(!pt&&(si(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Ae(n,t,l)}yr(e,t,n);break;case 21:yr(e,t,n);break;case 22:n.mode&1?(pt=(r=pt)||n.memoizedState!==null,yr(e,t,n),pt=r):yr(e,t,n);break;default:yr(e,t,n)}}function fy(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new $j),t.forEach(function(r){var o=Bj.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function sn(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,a=t,l=a;e:for(;l!==null;){switch(l.tag){case 5:ot=l.stateNode,fn=!1;break e;case 3:ot=l.stateNode.containerInfo,fn=!0;break e;case 4:ot=l.stateNode.containerInfo,fn=!0;break e}l=l.return}if(ot===null)throw Error(H(160));o2(i,a,o),ot=null,fn=!1;var s=o.alternate;s!==null&&(s.return=null),o.return=null}catch(c){Ae(o,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)i2(t,e),t=t.sibling}function i2(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(sn(t,e),_n(e),r&4){try{La(3,e,e.return),ju(3,e)}catch(y){Ae(e,e.return,y)}try{La(5,e,e.return)}catch(y){Ae(e,e.return,y)}}break;case 1:sn(t,e),_n(e),r&512&&n!==null&&si(n,n.return);break;case 5:if(sn(t,e),_n(e),r&512&&n!==null&&si(n,n.return),e.flags&32){var o=e.stateNode;try{Za(o,"")}catch(y){Ae(e,e.return,y)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,a=n!==null?n.memoizedProps:i,l=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{l==="input"&&i.type==="radio"&&i.name!=null&&kw(o,i),ch(l,a);var c=ch(l,i);for(a=0;a<s.length;a+=2){var d=s[a],f=s[a+1];d==="style"?$w(o,f):d==="dangerouslySetInnerHTML"?Tw(o,f):d==="children"?Za(o,f):Km(o,d,f,c)}switch(l){case"input":oh(o,i);break;case"textarea":Pw(o,i);break;case"select":var m=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var p=i.value;p!=null?ci(o,!!i.multiple,p,!1):m!==!!i.multiple&&(i.defaultValue!=null?ci(o,!!i.multiple,i.defaultValue,!0):ci(o,!!i.multiple,i.multiple?[]:"",!1))}o[ss]=i}catch(y){Ae(e,e.return,y)}}break;case 6:if(sn(t,e),_n(e),r&4){if(e.stateNode===null)throw Error(H(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(y){Ae(e,e.return,y)}}break;case 3:if(sn(t,e),_n(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ns(t.containerInfo)}catch(y){Ae(e,e.return,y)}break;case 4:sn(t,e),_n(e);break;case 13:sn(t,e),_n(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(Tg=Fe())),r&4&&fy(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(pt=(c=pt)||d,sn(t,e),pt=c):sn(t,e),_n(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!d&&e.mode&1)for(q=e,d=e.child;d!==null;){for(f=q=d;q!==null;){switch(m=q,p=m.child,m.tag){case 0:case 11:case 14:case 15:La(4,m,m.return);break;case 1:si(m,m.return);var h=m.stateNode;if(typeof h.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,h.props=t.memoizedProps,h.state=t.memoizedState,h.componentWillUnmount()}catch(y){Ae(r,n,y)}}break;case 5:si(m,m.return);break;case 22:if(m.memoizedState!==null){hy(f);continue}}p!==null?(p.return=m,q=p):hy(f)}d=d.sibling}e:for(d=null,f=e;;){if(f.tag===5){if(d===null){d=f;try{o=f.stateNode,c?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(l=f.stateNode,s=f.memoizedProps.style,a=s!=null&&s.hasOwnProperty("display")?s.display:null,l.style.display=jw("display",a))}catch(y){Ae(e,e.return,y)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(y){Ae(e,e.return,y)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:sn(t,e),_n(e),r&4&&fy(e);break;case 21:break;default:sn(t,e),_n(e)}}function _n(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(r2(n)){var r=n;break e}n=n.return}throw Error(H(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(Za(o,""),r.flags&=-33);var i=dy(e);zh(e,i,o);break;case 3:case 4:var a=r.stateNode.containerInfo,l=dy(e);Fh(e,l,a);break;default:throw Error(H(161))}}catch(s){Ae(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Mj(e,t,n){q=e,a2(e)}function a2(e,t,n){for(var r=(e.mode&1)!==0;q!==null;){var o=q,i=o.child;if(o.tag===22&&r){var a=o.memoizedState!==null||sl;if(!a){var l=o.alternate,s=l!==null&&l.memoizedState!==null||pt;l=sl;var c=pt;if(sl=a,(pt=s)&&!c)for(q=o;q!==null;)a=q,s=a.child,a.tag===22&&a.memoizedState!==null?my(o):s!==null?(s.return=a,q=s):my(o);for(;i!==null;)q=i,a2(i),i=i.sibling;q=o,sl=l,pt=c}py(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,q=i):py(e)}}function py(e){for(;q!==null;){var t=q;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:pt||ju(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!pt)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:dn(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&Kv(t,i,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Kv(t,a,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&ns(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(H(163))}pt||t.flags&512&&Rh(t)}catch(m){Ae(t,t.return,m)}}if(t===e){q=null;break}if(n=t.sibling,n!==null){n.return=t.return,q=n;break}q=t.return}}function hy(e){for(;q!==null;){var t=q;if(t===e){q=null;break}var n=t.sibling;if(n!==null){n.return=t.return,q=n;break}q=t.return}}function my(e){for(;q!==null;){var t=q;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{ju(4,t)}catch(s){Ae(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(s){Ae(t,o,s)}}var i=t.return;try{Rh(t)}catch(s){Ae(t,i,s)}break;case 5:var a=t.return;try{Rh(t)}catch(s){Ae(t,a,s)}}}catch(s){Ae(t,t.return,s)}if(t===e){q=null;break}var l=t.sibling;if(l!==null){l.return=t.return,q=l;break}q=t.return}}var Aj=Math.ceil,Dc=pr.ReactCurrentDispatcher,Pg=pr.ReactCurrentOwner,tn=pr.ReactCurrentBatchConfig,ue=0,Je=null,We=null,at=0,zt=0,li=Hr(0),qe=0,ps=null,bo=0,$u=0,Og=0,Ra=null,jt=null,Tg=0,_i=1/0,qn=null,Lc=!1,Nh=null,Rr=null,ll=!1,Pr=null,Rc=0,Fa=0,Bh=null,Wl=-1,Ul=0;function wt(){return ue&6?Fe():Wl!==-1?Wl:Wl=Fe()}function Fr(e){return e.mode&1?ue&2&&at!==0?at&-at:vj.transition!==null?(Ul===0&&(Ul=Ww()),Ul):(e=ye,e!==0||(e=window.event,e=e===void 0?16:Kw(e.type)),e):1}function vn(e,t,n,r){if(50<Fa)throw Fa=0,Bh=null,Error(H(185));ks(e,n,r),(!(ue&2)||e!==Je)&&(e===Je&&(!(ue&2)&&($u|=n),qe===4&&Er(e,at)),At(e,r),n===1&&ue===0&&!(t.mode&1)&&(_i=Fe()+500,Pu&&Gr()))}function At(e,t){var n=e.callbackNode;vT(e,t);var r=bc(e,e===Je?at:0);if(r===0)n!==null&&Cv(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Cv(n),t===1)e.tag===0?gj(gy.bind(null,e)):mS(gy.bind(null,e)),fj(function(){!(ue&6)&&Gr()}),n=null;else{switch(Uw(r)){case 1:n=tg;break;case 4:n=Bw;break;case 16:n=xc;break;case 536870912:n=Vw;break;default:n=xc}n=h2(n,s2.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function s2(e,t){if(Wl=-1,Ul=0,ue&6)throw Error(H(327));var n=e.callbackNode;if(hi()&&e.callbackNode!==n)return null;var r=bc(e,e===Je?at:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Fc(e,r);else{t=r;var o=ue;ue|=2;var i=c2();(Je!==e||at!==t)&&(qn=null,_i=Fe()+500,uo(e,t));do try{Rj();break}catch(l){l2(e,l)}while(1);hg(),Dc.current=i,ue=o,We!==null?t=0:(Je=null,at=0,t=qe)}if(t!==0){if(t===2&&(o=hh(e),o!==0&&(r=o,t=Vh(e,o))),t===1)throw n=ps,uo(e,0),Er(e,r),At(e,Fe()),n;if(t===6)Er(e,r);else{if(o=e.current.alternate,!(r&30)&&!Dj(o)&&(t=Fc(e,r),t===2&&(i=hh(e),i!==0&&(r=i,t=Vh(e,i))),t===1))throw n=ps,uo(e,0),Er(e,r),At(e,Fe()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(H(345));case 2:Jr(e,jt,qn);break;case 3:if(Er(e,r),(r&130023424)===r&&(t=Tg+500-Fe(),10<t)){if(bc(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){wt(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Sh(Jr.bind(null,e,jt,qn),t);break}Jr(e,jt,qn);break;case 4:if(Er(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var a=31-gn(r);i=1<<a,a=t[a],a>o&&(o=a),r&=~i}if(r=o,r=Fe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Aj(r/1960))-r,10<r){e.timeoutHandle=Sh(Jr.bind(null,e,jt,qn),r);break}Jr(e,jt,qn);break;case 5:Jr(e,jt,qn);break;default:throw Error(H(329))}}}return At(e,Fe()),e.callbackNode===n?s2.bind(null,e):null}function Vh(e,t){var n=Ra;return e.current.memoizedState.isDehydrated&&(uo(e,t).flags|=256),e=Fc(e,t),e!==2&&(t=jt,jt=n,t!==null&&Wh(t)),e}function Wh(e){jt===null?jt=e:jt.push.apply(jt,e)}function Dj(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!wn(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Er(e,t){for(t&=~Og,t&=~$u,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-gn(t),r=1<<n;e[n]=-1,t&=~r}}function gy(e){if(ue&6)throw Error(H(327));hi();var t=bc(e,0);if(!(t&1))return At(e,Fe()),null;var n=Fc(e,t);if(e.tag!==0&&n===2){var r=hh(e);r!==0&&(t=r,n=Vh(e,r))}if(n===1)throw n=ps,uo(e,0),Er(e,t),At(e,Fe()),n;if(n===6)throw Error(H(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Jr(e,jt,qn),At(e,Fe()),null}function jg(e,t){var n=ue;ue|=1;try{return e(t)}finally{ue=n,ue===0&&(_i=Fe()+500,Pu&&Gr())}}function wo(e){Pr!==null&&Pr.tag===0&&!(ue&6)&&hi();var t=ue;ue|=1;var n=tn.transition,r=ye;try{if(tn.transition=null,ye=1,e)return e()}finally{ye=r,tn.transition=n,ue=t,!(ue&6)&&Gr()}}function $g(){zt=li.current,Ce(li)}function uo(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,dj(n)),We!==null)for(n=We.return;n!==null;){var r=n;switch(dg(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&_c();break;case 3:Ei(),Ce(It),Ce(mt),bg();break;case 5:xg(r);break;case 4:Ei();break;case 13:Ce(Te);break;case 19:Ce(Te);break;case 10:mg(r.type._context);break;case 22:case 23:$g()}n=n.return}if(Je=e,We=e=zr(e.current,null),at=zt=t,qe=0,ps=null,Og=$u=bo=0,jt=Ra=null,ao!==null){for(t=0;t<ao.length;t++)if(n=ao[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var a=i.next;i.next=o,r.next=a}n.pending=r}ao=null}return e}function l2(e,t){do{var n=We;try{if(hg(),Nl.current=Ac,Mc){for(var r=je.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}Mc=!1}if(xo=0,Ze=He=je=null,Da=!1,us=0,Pg.current=null,n===null||n.return===null){qe=1,ps=t,We=null;break}e:{var i=e,a=n.return,l=n,s=t;if(t=at,l.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var c=s,d=l,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var m=d.alternate;m?(d.updateQueue=m.updateQueue,d.memoizedState=m.memoizedState,d.lanes=m.lanes):(d.updateQueue=null,d.memoizedState=null)}var p=ry(a);if(p!==null){p.flags&=-257,oy(p,a,l,i,t),p.mode&1&&ny(i,c,t),t=p,s=c;var h=t.updateQueue;if(h===null){var y=new Set;y.add(s),t.updateQueue=y}else h.add(s);break e}else{if(!(t&1)){ny(i,c,t),Ig();break e}s=Error(H(426))}}else if(Pe&&l.mode&1){var b=ry(a);if(b!==null){!(b.flags&65536)&&(b.flags|=256),oy(b,a,l,i,t),fg(Ci(s,l));break e}}i=s=Ci(s,l),qe!==4&&(qe=2),Ra===null?Ra=[i]:Ra.push(i),i=a;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var g=HS(i,s,t);Xv(i,g);break e;case 1:l=s;var v=i.type,w=i.stateNode;if(!(i.flags&128)&&(typeof v.getDerivedStateFromError=="function"||w!==null&&typeof w.componentDidCatch=="function"&&(Rr===null||!Rr.has(w)))){i.flags|=65536,t&=-t,i.lanes|=t;var E=GS(i,l,t);Xv(i,E);break e}}i=i.return}while(i!==null)}d2(n)}catch(S){t=S,We===n&&n!==null&&(We=n=n.return);continue}break}while(1)}function c2(){var e=Dc.current;return Dc.current=Ac,e===null?Ac:e}function Ig(){(qe===0||qe===3||qe===2)&&(qe=4),Je===null||!(bo&268435455)&&!($u&268435455)||Er(Je,at)}function Fc(e,t){var n=ue;ue|=2;var r=c2();(Je!==e||at!==t)&&(qn=null,uo(e,t));do try{Lj();break}catch(o){l2(e,o)}while(1);if(hg(),ue=n,Dc.current=r,We!==null)throw Error(H(261));return Je=null,at=0,qe}function Lj(){for(;We!==null;)u2(We)}function Rj(){for(;We!==null&&!lT();)u2(We)}function u2(e){var t=p2(e.alternate,e,zt);e.memoizedProps=e.pendingProps,t===null?d2(e):We=t,Pg.current=null}function d2(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=jj(n,t),n!==null){n.flags&=32767,We=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{qe=6,We=null;return}}else if(n=Tj(n,t,zt),n!==null){We=n;return}if(t=t.sibling,t!==null){We=t;return}We=t=e}while(t!==null);qe===0&&(qe=5)}function Jr(e,t,n){var r=ye,o=tn.transition;try{tn.transition=null,ye=1,Fj(e,t,n,r)}finally{tn.transition=o,ye=r}return null}function Fj(e,t,n,r){do hi();while(Pr!==null);if(ue&6)throw Error(H(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(H(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(yT(e,i),e===Je&&(We=Je=null,at=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ll||(ll=!0,h2(xc,function(){return hi(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=tn.transition,tn.transition=null;var a=ye;ye=1;var l=ue;ue|=4,Pg.current=null,Ij(e,n),i2(n,e),oj(bh),wc=!!xh,bh=xh=null,e.current=n,Mj(n),cT(),ue=l,ye=a,tn.transition=i}else e.current=n;if(ll&&(ll=!1,Pr=e,Rc=o),i=e.pendingLanes,i===0&&(Rr=null),fT(n.stateNode),At(e,Fe()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(Lc)throw Lc=!1,e=Nh,Nh=null,e;return Rc&1&&e.tag!==0&&hi(),i=e.pendingLanes,i&1?e===Bh?Fa++:(Fa=0,Bh=e):Fa=0,Gr(),null}function hi(){if(Pr!==null){var e=Uw(Rc),t=tn.transition,n=ye;try{if(tn.transition=null,ye=16>e?16:e,Pr===null)var r=!1;else{if(e=Pr,Pr=null,Rc=0,ue&6)throw Error(H(331));var o=ue;for(ue|=4,q=e.current;q!==null;){var i=q,a=i.child;if(q.flags&16){var l=i.deletions;if(l!==null){for(var s=0;s<l.length;s++){var c=l[s];for(q=c;q!==null;){var d=q;switch(d.tag){case 0:case 11:case 15:La(8,d,i)}var f=d.child;if(f!==null)f.return=d,q=f;else for(;q!==null;){d=q;var m=d.sibling,p=d.return;if(n2(d),d===c){q=null;break}if(m!==null){m.return=p,q=m;break}q=p}}}var h=i.alternate;if(h!==null){var y=h.child;if(y!==null){h.child=null;do{var b=y.sibling;y.sibling=null,y=b}while(y!==null)}}q=i}}if(i.subtreeFlags&2064&&a!==null)a.return=i,q=a;else e:for(;q!==null;){if(i=q,i.flags&2048)switch(i.tag){case 0:case 11:case 15:La(9,i,i.return)}var g=i.sibling;if(g!==null){g.return=i.return,q=g;break e}q=i.return}}var v=e.current;for(q=v;q!==null;){a=q;var w=a.child;if(a.subtreeFlags&2064&&w!==null)w.return=a,q=w;else e:for(a=v;q!==null;){if(l=q,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:ju(9,l)}}catch(S){Ae(l,l.return,S)}if(l===a){q=null;break e}var E=l.sibling;if(E!==null){E.return=l.return,q=E;break e}q=l.return}}if(ue=o,Gr(),Ln&&typeof Ln.onPostCommitFiberRoot=="function")try{Ln.onPostCommitFiberRoot(Su,e)}catch{}r=!0}return r}finally{ye=n,tn.transition=t}}return!1}function vy(e,t,n){t=Ci(n,t),t=HS(e,t,1),e=Lr(e,t,1),t=wt(),e!==null&&(ks(e,1,t),At(e,t))}function Ae(e,t,n){if(e.tag===3)vy(e,e,n);else for(;t!==null;){if(t.tag===3){vy(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Rr===null||!Rr.has(r))){e=Ci(n,e),e=GS(t,e,1),t=Lr(t,e,1),e=wt(),t!==null&&(ks(t,1,e),At(t,e));break}}t=t.return}}function zj(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=wt(),e.pingedLanes|=e.suspendedLanes&n,Je===e&&(at&n)===n&&(qe===4||qe===3&&(at&130023424)===at&&500>Fe()-Tg?uo(e,0):Og|=n),At(e,t)}function f2(e,t){t===0&&(e.mode&1?(t=Zs,Zs<<=1,!(Zs&130023424)&&(Zs=4194304)):t=1);var n=wt();e=sr(e,t),e!==null&&(ks(e,t,n),At(e,n))}function Nj(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),f2(e,n)}function Bj(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(H(314))}r!==null&&r.delete(t),f2(e,n)}var p2;p2=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||It.current)$t=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return $t=!1,Oj(e,t,n);$t=!!(e.flags&131072)}else $t=!1,Pe&&t.flags&1048576&&gS(t,Oc,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Vl(e,t),e=t.pendingProps;var o=bi(t,mt.current);pi(t,n),o=Sg(null,t,r,e,o,n);var i=Eg();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Mt(r)?(i=!0,kc(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,vg(t),o.updater=Ou,t.stateNode=o,o._reactInternals=t,Th(t,r,e,n),t=Ih(null,t,r,!0,i,n)):(t.tag=0,Pe&&i&&ug(t),xt(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Vl(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=Wj(r),e=dn(r,e),o){case 0:t=$h(null,t,r,e,n);break e;case 1:t=sy(null,t,r,e,n);break e;case 11:t=iy(null,t,r,e,n);break e;case 14:t=ay(null,t,r,dn(r.type,e),n);break e}throw Error(H(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:dn(r,o),$h(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:dn(r,o),sy(e,t,r,o,n);case 3:e:{if(KS(t),e===null)throw Error(H(387));r=t.pendingProps,i=t.memoizedState,o=i.element,bS(e,t),$c(t,r,null,n);var a=t.memoizedState;if(r=a.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=Ci(Error(H(423)),t),t=ly(e,t,r,n,o);break e}else if(r!==o){o=Ci(Error(H(424)),t),t=ly(e,t,r,n,o);break e}else for(Bt=Dr(t.stateNode.containerInfo.firstChild),Ut=t,Pe=!0,hn=null,n=CS(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(wi(),r===o){t=lr(e,t,n);break e}xt(e,t,r,n)}t=t.child}return t;case 5:return _S(t),e===null&&kh(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,a=o.children,wh(r,o)?a=null:i!==null&&wh(r,i)&&(t.flags|=32),XS(e,t),xt(e,t,a,n),t.child;case 6:return e===null&&kh(t),null;case 13:return QS(e,t,n);case 4:return yg(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Si(t,null,r,n):xt(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:dn(r,o),iy(e,t,r,o,n);case 7:return xt(e,t,t.pendingProps,n),t.child;case 8:return xt(e,t,t.pendingProps.children,n),t.child;case 12:return xt(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,a=o.value,we(Tc,r._currentValue),r._currentValue=a,i!==null)if(wn(i.value,a)){if(i.children===o.children&&!It.current){t=lr(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var l=i.dependencies;if(l!==null){a=i.child;for(var s=l.firstContext;s!==null;){if(s.context===r){if(i.tag===1){s=nr(-1,n&-n),s.tag=2;var c=i.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?s.next=s:(s.next=d.next,d.next=s),c.pending=s}}i.lanes|=n,s=i.alternate,s!==null&&(s.lanes|=n),Ph(i.return,n,t),l.lanes|=n;break}s=s.next}}else if(i.tag===10)a=i.type===t.type?null:i.child;else if(i.tag===18){if(a=i.return,a===null)throw Error(H(341));a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),Ph(a,n,t),a=i.sibling}else a=i.child;if(a!==null)a.return=i;else for(a=i;a!==null;){if(a===t){a=null;break}if(i=a.sibling,i!==null){i.return=a.return,a=i;break}a=a.return}i=a}xt(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,pi(t,n),o=nn(o),r=r(o),t.flags|=1,xt(e,t,r,n),t.child;case 14:return r=t.type,o=dn(r,t.pendingProps),o=dn(r.type,o),ay(e,t,r,o,n);case 15:return qS(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:dn(r,o),Vl(e,t),t.tag=1,Mt(r)?(e=!0,kc(t)):e=!1,pi(t,n),SS(t,r,o),Th(t,r,o,n),Ih(null,t,r,!0,e,n);case 19:return ZS(e,t,n);case 22:return YS(e,t,n)}throw Error(H(156,t.tag))};function h2(e,t){return Nw(e,t)}function Vj(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function en(e,t,n,r){return new Vj(e,t,n,r)}function Mg(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Wj(e){if(typeof e=="function")return Mg(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Zm)return 11;if(e===Jm)return 14}return 2}function zr(e,t){var n=e.alternate;return n===null?(n=en(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Hl(e,t,n,r,o,i){var a=2;if(r=e,typeof e=="function")Mg(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case Zo:return fo(n.children,o,i,t);case Qm:a=8,o|=8;break;case Jp:return e=en(12,n,t,o|2),e.elementType=Jp,e.lanes=i,e;case eh:return e=en(13,n,t,o),e.elementType=eh,e.lanes=i,e;case th:return e=en(19,n,t,o),e.elementType=th,e.lanes=i,e;case Ew:return Iu(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ww:a=10;break e;case Sw:a=9;break e;case Zm:a=11;break e;case Jm:a=14;break e;case br:a=16,r=null;break e}throw Error(H(130,e==null?e:typeof e,""))}return t=en(a,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function fo(e,t,n,r){return e=en(7,e,r,t),e.lanes=n,e}function Iu(e,t,n,r){return e=en(22,e,r,t),e.elementType=Ew,e.lanes=n,e.stateNode={isHidden:!1},e}function kf(e,t,n){return e=en(6,e,null,t),e.lanes=n,e}function Pf(e,t,n){return t=en(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Uj(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=sf(0),this.expirationTimes=sf(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=sf(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Ag(e,t,n,r,o,i,a,l,s){return e=new Uj(e,t,n,l,s),t===1?(t=1,i===!0&&(t|=8)):t=0,i=en(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},vg(i),e}function Hj(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Qo,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function m2(e){if(!e)return Vr;e=e._reactInternals;e:{if(To(e)!==e||e.tag!==1)throw Error(H(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Mt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(H(171))}if(e.tag===1){var n=e.type;if(Mt(n))return hS(e,n,t)}return t}function g2(e,t,n,r,o,i,a,l,s){return e=Ag(n,r,!0,e,o,i,a,l,s),e.context=m2(null),n=e.current,r=wt(),o=Fr(n),i=nr(r,o),i.callback=t??null,Lr(n,i,o),e.current.lanes=o,ks(e,o,r),At(e,r),e}function Mu(e,t,n,r){var o=t.current,i=wt(),a=Fr(o);return n=m2(n),t.context===null?t.context=n:t.pendingContext=n,t=nr(i,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Lr(o,t,a),e!==null&&(vn(e,o,a,i),zl(e,o,a)),a}function zc(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function yy(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Dg(e,t){yy(e,t),(e=e.alternate)&&yy(e,t)}function Gj(){return null}var v2=typeof reportError=="function"?reportError:function(e){console.error(e)};function Lg(e){this._internalRoot=e}Au.prototype.render=Lg.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(H(409));Mu(e,t,null,null)};Au.prototype.unmount=Lg.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;wo(function(){Mu(null,e,null,null)}),t[ar]=null}};function Au(e){this._internalRoot=e}Au.prototype.unstable_scheduleHydration=function(e){if(e){var t=qw();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Sr.length&&t!==0&&t<Sr[n].priority;n++);Sr.splice(n,0,e),n===0&&Xw(e)}};function Rg(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Du(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function xy(){}function qj(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var c=zc(a);i.call(c)}}var a=g2(t,r,e,0,null,!1,!1,"",xy);return e._reactRootContainer=a,e[ar]=a.current,is(e.nodeType===8?e.parentNode:e),wo(),a}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var l=r;r=function(){var c=zc(s);l.call(c)}}var s=Ag(e,0,!1,null,null,!1,!1,"",xy);return e._reactRootContainer=s,e[ar]=s.current,is(e.nodeType===8?e.parentNode:e),wo(function(){Mu(t,s,n,r)}),s}function Lu(e,t,n,r,o){var i=n._reactRootContainer;if(i){var a=i;if(typeof o=="function"){var l=o;o=function(){var s=zc(a);l.call(s)}}Mu(t,a,e,o)}else a=qj(n,t,e,o,r);return zc(a)}Hw=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=wa(t.pendingLanes);n!==0&&(ng(t,n|1),At(t,Fe()),!(ue&6)&&(_i=Fe()+500,Gr()))}break;case 13:wo(function(){var r=sr(e,1);if(r!==null){var o=wt();vn(r,e,1,o)}}),Dg(e,1)}};rg=function(e){if(e.tag===13){var t=sr(e,134217728);if(t!==null){var n=wt();vn(t,e,134217728,n)}Dg(e,134217728)}};Gw=function(e){if(e.tag===13){var t=Fr(e),n=sr(e,t);if(n!==null){var r=wt();vn(n,e,t,r)}Dg(e,t)}};qw=function(){return ye};Yw=function(e,t){var n=ye;try{return ye=e,t()}finally{ye=n}};dh=function(e,t,n){switch(t){case"input":if(oh(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=ku(r);if(!o)throw Error(H(90));_w(r),oh(r,o)}}}break;case"textarea":Pw(e,n);break;case"select":t=n.value,t!=null&&ci(e,!!n.multiple,t,!1)}};Aw=jg;Dw=wo;var Yj={usingClientEntryPoint:!1,Events:[Os,ni,ku,Iw,Mw,jg]},ca={findFiberByHostInstance:io,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Xj={bundleType:ca.bundleType,version:ca.version,rendererPackageName:ca.rendererPackageName,rendererConfig:ca.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:pr.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Fw(e),e===null?null:e.stateNode},findFiberByHostInstance:ca.findFiberByHostInstance||Gj,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var cl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!cl.isDisabled&&cl.supportsFiber)try{Su=cl.inject(Xj),Ln=cl}catch{}}Yt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Yj;Yt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Rg(t))throw Error(H(200));return Hj(e,t,null,n)};Yt.createRoot=function(e,t){if(!Rg(e))throw Error(H(299));var n=!1,r="",o=v2;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Ag(e,1,!1,null,null,n,!1,r,o),e[ar]=t.current,is(e.nodeType===8?e.parentNode:e),new Lg(t)};Yt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(H(188)):(e=Object.keys(e).join(","),Error(H(268,e)));return e=Fw(t),e=e===null?null:e.stateNode,e};Yt.flushSync=function(e){return wo(e)};Yt.hydrate=function(e,t,n){if(!Du(t))throw Error(H(200));return Lu(null,e,t,!0,n)};Yt.hydrateRoot=function(e,t,n){if(!Rg(e))throw Error(H(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",a=v2;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=g2(t,null,e,1,n??null,o,!1,i,a),e[ar]=t.current,is(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new Au(t)};Yt.render=function(e,t,n){if(!Du(t))throw Error(H(200));return Lu(null,e,t,!1,n)};Yt.unmountComponentAtNode=function(e){if(!Du(e))throw Error(H(40));return e._reactRootContainer?(wo(function(){Lu(null,null,e,!1,function(){e._reactRootContainer=null,e[ar]=null})}),!0):!1};Yt.unstable_batchedUpdates=jg;Yt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Du(n))throw Error(H(200));if(e==null||e._reactInternals===void 0)throw Error(H(38));return Lu(e,t,n,!1,r)};Yt.version="18.2.0-next-9e3b772b8-20220608";function y2(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(y2)}catch(e){console.error(e)}}y2(),gw.exports=Yt;var Ru=gw.exports,by=Ru;Qp.createRoot=by.createRoot,Qp.hydrateRoot=by.hydrateRoot;var ht=function(){return ht=Object.assign||function(t){for(var n,r=1,o=arguments.length;r<o;r++){n=arguments[r];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},ht.apply(this,arguments)};function ki(e,t,n){if(n||arguments.length===2)for(var r=0,o=t.length,i;r<o;r++)(i||!(r in t))&&(i||(i=Array.prototype.slice.call(t,0,r)),i[r]=t[r]);return e.concat(i||Array.prototype.slice.call(t))}function Kj(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var Qj=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|popover|popoverTarget|popoverTargetAction|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,Zj=Kj(function(e){return Qj.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),Ee="-ms-",za="-moz-",fe="-webkit-",x2="comm",Fu="rule",Fg="decl",Jj="@import",e$="@namespace",b2="@keyframes",t$="@layer",w2=Math.abs,zg=String.fromCharCode,Uh=Object.assign;function n$(e,t){return Ge(e,0)^45?(((t<<2^Ge(e,0))<<2^Ge(e,1))<<2^Ge(e,2))<<2^Ge(e,3):0}function S2(e){return e.trim()}function Yn(e,t){return(e=t.exec(e))?e[0]:e}function oe(e,t,n){return e.replace(t,n)}function Gl(e,t,n){return e.indexOf(t,n)}function Ge(e,t){return e.charCodeAt(t)|0}function So(e,t,n){return e.slice(t,n)}function pn(e){return e.length}function E2(e){return e.length}function Ea(e,t){return t.push(e),e}function r$(e,t){return e.map(t).join("")}function wy(e,t){return e.filter(function(n){return!Yn(n,t)})}var zu=1,Pi=1,C2=0,on=0,Be=0,Wi="";function Nu(e,t,n,r,o,i,a,l){return{value:e,root:t,parent:n,type:r,props:o,children:i,line:zu,column:Pi,length:a,return:"",siblings:l}}function xr(e,t){return Uh(Nu("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function Lo(e){for(;e.root;)e=xr(e.root,{children:[e]});Ea(e,e.siblings)}function o$(){return Be}function i$(){return Be=on>0?Ge(Wi,--on):0,Pi--,Be===10&&(Pi=1,zu--),Be}function yn(){return Be=on<C2?Ge(Wi,on++):0,Pi++,Be===10&&(Pi=1,zu++),Be}function Or(){return Ge(Wi,on)}function ql(){return on}function Bu(e,t){return So(Wi,e,t)}function hs(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function a$(e){return zu=Pi=1,C2=pn(Wi=e),on=0,[]}function s$(e){return Wi="",e}function Of(e){return S2(Bu(on-1,Hh(e===91?e+2:e===40?e+1:e)))}function l$(e){for(;(Be=Or())&&Be<33;)yn();return hs(e)>2||hs(Be)>3?"":" "}function c$(e,t){for(;--t&&yn()&&!(Be<48||Be>102||Be>57&&Be<65||Be>70&&Be<97););return Bu(e,ql()+(t<6&&Or()==32&&yn()==32))}function Hh(e){for(;yn();)switch(Be){case e:return on;case 34:case 39:e!==34&&e!==39&&Hh(Be);break;case 40:e===41&&Hh(e);break;case 92:yn();break}return on}function u$(e,t){for(;yn()&&e+Be!==47+10;)if(e+Be===42+42&&Or()===47)break;return"/*"+Bu(t,on-1)+"*"+zg(e===47?e:yn())}function d$(e){for(;!hs(Or());)yn();return Bu(e,on)}function f$(e){return s$(Yl("",null,null,null,[""],e=a$(e),0,[0],e))}function Yl(e,t,n,r,o,i,a,l,s){for(var c=0,d=0,f=a,m=0,p=0,h=0,y=1,b=1,g=1,v=0,w="",E=o,S=i,P=r,k=w;b;)switch(h=v,v=yn()){case 40:if(h!=108&&Ge(k,f-1)==58){Gl(k+=oe(Of(v),"&","&\f"),"&\f",w2(c?l[c-1]:0))!=-1&&(g=-1);break}case 34:case 39:case 91:k+=Of(v);break;case 9:case 10:case 13:case 32:k+=l$(h);break;case 92:k+=c$(ql()-1,7);continue;case 47:switch(Or()){case 42:case 47:Ea(p$(u$(yn(),ql()),t,n,s),s),(hs(h||1)==5||hs(Or()||1)==5)&&pn(k)&&So(k,-1,void 0)!==" "&&(k+=" ");break;default:k+="/"}break;case 123*y:l[c++]=pn(k)*g;case 125*y:case 59:case 0:switch(v){case 0:case 125:b=0;case 59+d:g==-1&&(k=oe(k,/\f/g,"")),p>0&&(pn(k)-f||y===0&&h===47)&&Ea(p>32?Ey(k+";",r,n,f-1,s):Ey(oe(k," ","")+";",r,n,f-2,s),s);break;case 59:k+=";";default:if(Ea(P=Sy(k,t,n,c,d,o,l,w,E=[],S=[],f,i),i),v===123)if(d===0)Yl(k,t,P,P,E,i,f,l,S);else{switch(m){case 99:if(Ge(k,3)===110)break;case 108:if(Ge(k,2)===97)break;default:d=0;case 100:case 109:case 115:}d?Yl(e,P,P,r&&Ea(Sy(e,P,P,0,0,o,l,w,o,E=[],f,S),S),o,S,f,l,r?E:S):Yl(k,P,P,P,[""],S,0,l,S)}}c=d=p=0,y=g=1,w=k="",f=a;break;case 58:f=1+pn(k),p=h;default:if(y<1){if(v==123)--y;else if(v==125&&y++==0&&i$()==125)continue}switch(k+=zg(v),v*y){case 38:g=d>0?1:(k+="\f",-1);break;case 44:l[c++]=(pn(k)-1)*g,g=1;break;case 64:Or()===45&&(k+=Of(yn())),m=Or(),d=f=pn(w=k+=d$(ql())),v++;break;case 45:h===45&&pn(k)==2&&(y=0)}}return i}function Sy(e,t,n,r,o,i,a,l,s,c,d,f){for(var m=o-1,p=o===0?i:[""],h=E2(p),y=0,b=0,g=0;y<r;++y)for(var v=0,w=So(e,m+1,m=w2(b=a[y])),E=e;v<h;++v)(E=S2(b>0?p[v]+" "+w:oe(w,/&\f/g,p[v])))&&(s[g++]=E);return Nu(e,t,n,o===0?Fu:l,s,c,d,f)}function p$(e,t,n,r){return Nu(e,t,n,x2,zg(o$()),So(e,2,-2),0,r)}function Ey(e,t,n,r,o){return Nu(e,t,n,Fg,So(e,0,r),So(e,r+1,-1),r,o)}function _2(e,t,n){switch(n$(e,t)){case 5103:return fe+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return fe+e+e;case 4855:return fe+e.replace("add","source-over").replace("substract","source-out").replace("intersect","source-in").replace("exclude","xor")+e;case 4789:return za+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return fe+e+za+e+Ee+e+e;case 5936:switch(Ge(e,t+11)){case 114:return fe+e+Ee+oe(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return fe+e+Ee+oe(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return fe+e+Ee+oe(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return fe+e+Ee+e+e;case 6165:return fe+e+Ee+"flex-"+e+e;case 5187:return fe+e+oe(e,/(\w+).+(:[^]+)/,fe+"box-$1$2"+Ee+"flex-$1$2")+e;case 5443:return fe+e+Ee+"flex-item-"+oe(e,/flex-|-self/g,"")+(Yn(e,/flex-|baseline/)?"":Ee+"grid-row-"+oe(e,/flex-|-self/g,""))+e;case 4675:return fe+e+Ee+"flex-line-pack"+oe(e,/align-content|flex-|-self/g,"")+e;case 5548:return fe+e+Ee+oe(e,"shrink","negative")+e;case 5292:return fe+e+Ee+oe(e,"basis","preferred-size")+e;case 6060:return fe+"box-"+oe(e,"-grow","")+fe+e+Ee+oe(e,"grow","positive")+e;case 4554:return fe+oe(e,/([^-])(transform)/g,"$1"+fe+"$2")+e;case 6187:return oe(oe(oe(e,/(zoom-|grab)/,fe+"$1"),/(image-set)/,fe+"$1"),e,"")+e;case 5495:case 3959:return oe(e,/(image-set\([^]*)/,fe+"$1$`$1");case 4968:return oe(oe(e,/(.+:)(flex-)?(.*)/,fe+"box-pack:$3"+Ee+"flex-pack:$3"),/space-between/,"justify")+fe+e+e;case 4200:if(!Yn(e,/flex-|baseline/))return Ee+"grid-column-align"+So(e,t)+e;break;case 2592:case 3360:return Ee+oe(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,o){return t=o,Yn(r.props,/grid-\w+-end/)})?~Gl(e+(n=n[t].value),"span",0)?e:Ee+oe(e,"-start","")+e+Ee+"grid-row-span:"+(~Gl(n,"span",0)?Yn(n,/\d+/):+Yn(n,/\d+/)-+Yn(e,/\d+/))+";":Ee+oe(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return Yn(r.props,/grid-\w+-start/)})?e:Ee+oe(oe(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return oe(e,/(.+)-inline(.+)/,fe+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(pn(e)-1-t>6)switch(Ge(e,t+1)){case 109:if(Ge(e,t+4)!==45)break;case 102:return oe(e,/(.+:)(.+)-([^]+)/,"$1"+fe+"$2-$3$1"+za+(Ge(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Gl(e,"stretch",0)?_2(oe(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return oe(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,o,i,a,l,s,c){return Ee+o+":"+i+c+(a?Ee+o+"-span:"+(l?s:+s-+i)+c:"")+e});case 4949:if(Ge(e,t+6)===121)return oe(e,":",":"+fe)+e;break;case 6444:switch(Ge(e,Ge(e,14)===45?18:11)){case 120:return oe(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+fe+(Ge(e,14)===45?"inline-":"")+"box$3$1"+fe+"$2$3$1"+Ee+"$2box$3")+e;case 100:return oe(e,":",":"+Ee)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return oe(e,"scroll-","scroll-snap-")+e}return e}function Nc(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function h$(e,t,n,r){switch(e.type){case t$:if(e.children.length)break;case Jj:case e$:case Fg:return e.return=e.return||e.value;case x2:return"";case b2:return e.return=e.value+"{"+Nc(e.children,r)+"}";case Fu:if(!pn(e.value=e.props.join(",")))return""}return pn(n=Nc(e.children,r))?e.return=e.value+"{"+n+"}":""}function m$(e){var t=E2(e);return function(n,r,o,i){for(var a="",l=0;l<t;l++)a+=e[l](n,r,o,i)||"";return a}}function g$(e){return function(t){t.root||(t=t.return)&&e(t)}}function v$(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case Fg:e.return=_2(e.value,e.length,n);return;case b2:return Nc([xr(e,{value:oe(e.value,"@","@"+fe)})],r);case Fu:if(e.length)return r$(n=e.props,function(o){switch(Yn(o,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Lo(xr(e,{props:[oe(o,/:(read-\w+)/,":"+za+"$1")]})),Lo(xr(e,{props:[o]})),Uh(e,{props:wy(n,r)});break;case"::placeholder":Lo(xr(e,{props:[oe(o,/:(plac\w+)/,":"+fe+"input-$1")]})),Lo(xr(e,{props:[oe(o,/:(plac\w+)/,":"+za+"$1")]})),Lo(xr(e,{props:[oe(o,/:(plac\w+)/,Ee+"input-$1")]})),Lo(xr(e,{props:[o]})),Uh(e,{props:wy(n,r)});break}return""})}}var y$={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Oi=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",k2="active",P2="data-styled-version",Vu="6.3.11",Ng=`/*!sc*/
`,Na=typeof window<"u"&&typeof document<"u",x$=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY),b$={};function js(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var Xl=new Map,Bc=new Map,Kl=1,Ca=function(e){if(Xl.has(e))return Xl.get(e);for(;Bc.has(Kl);)Kl++;var t=Kl++;return Xl.set(e,t),Bc.set(t,e),t},w$=function(e,t){Kl=t+1,Xl.set(e,t),Bc.set(t,e)},Bg=Object.freeze([]),Ti=Object.freeze({});function O2(e,t,n){return n===void 0&&(n=Ti),e.theme!==n.theme&&e.theme||t||n.theme}var T2=new Set(["a","abbr","address","area","article","aside","audio","b","bdi","bdo","blockquote","body","button","br","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","main","map","mark","menu","meter","nav","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","slot","small","span","strong","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","switch","symbol","text","textPath","tspan","use"]),S$=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,E$=/(^-|-$)/g;function Cy(e){return e.replace(S$,"-").replace(E$,"")}var C$=/(a)(d)/gi,_y=function(e){return String.fromCharCode(e+(e>25?39:97))};function Gh(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=_y(t%52)+n;return(_y(t%52)+n).replace(C$,"$1-$2")}var Tf,eo=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},j2=function(e){return eo(5381,e)};function Vg(e){return Gh(j2(e)>>>0)}function _$(e){return e.displayName||e.name||"Component"}function jf(e){return typeof e=="string"&&!0}var $2=typeof Symbol=="function"&&Symbol.for,I2=$2?Symbol.for("react.memo"):60115,k$=$2?Symbol.for("react.forward_ref"):60112,P$={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},O$={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},M2={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},T$=((Tf={})[k$]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Tf[I2]=M2,Tf);function ky(e){return("type"in(t=e)&&t.type.$$typeof)===I2?M2:"$$typeof"in e?T$[e.$$typeof]:P$;var t}var j$=Object.defineProperty,$$=Object.getOwnPropertyNames,Py=Object.getOwnPropertySymbols,I$=Object.getOwnPropertyDescriptor,M$=Object.getPrototypeOf,Oy=Object.prototype;function A2(e,t,n){if(typeof t!="string"){if(Oy){var r=M$(t);r&&r!==Oy&&A2(e,r,n)}var o=$$(t);Py&&(o=o.concat(Py(t)));for(var i=ky(e),a=ky(t),l=0;l<o.length;++l){var s=o[l];if(!(s in O$||n&&n[s]||a&&s in a||i&&s in i)){var c=I$(t,s);try{j$(e,s,c)}catch{}}}}return e}function ji(e){return typeof e=="function"}function Wg(e){return typeof e=="object"&&"styledComponentId"in e}function lo(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Vc(e,t){return e.join(t||"")}function ms(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function qh(e,t,n){if(n===void 0&&(n=!1),!n&&!ms(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=qh(e[r],t[r]);else if(ms(t))for(var r in t)e[r]=qh(e[r],t[r]);return e}function Ug(e,t){Object.defineProperty(e,"toString",{value:t})}var A$=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t,this._cGroup=0,this._cIndex=0}return e.prototype.indexOfGroup=function(t){if(t===this._cGroup)return this._cIndex;var n=this._cIndex;if(t>this._cGroup)for(var r=this._cGroup;r<t;r++)n+=this.groupSizes[r];else for(r=this._cGroup-1;r>=t;r--)n-=this.groupSizes[r];return this._cGroup=t,this._cIndex=n,n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,o=r.length,i=o;t>=i;)if((i<<=1)<0)throw js(16,"".concat(t));this.groupSizes=new Uint32Array(i),this.groupSizes.set(r),this.length=i;for(var a=o;a<i;a++)this.groupSizes[a]=0}for(var l=this.indexOfGroup(t+1),s=0,c=(a=0,n.length);a<c;a++)this.tag.insertRule(l,n[a])&&(this.groupSizes[t]++,l++,s++);s>0&&this._cGroup>t&&(this._cIndex+=s)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),o=r+n;this.groupSizes[t]=0;for(var i=r;i<o;i++)this.tag.deleteRule(r);n>0&&this._cGroup>t&&(this._cIndex-=n)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],o=this.indexOfGroup(t),i=o+r,a=o;a<i;a++)n+=this.tag.getRule(a)+Ng;return n},e}(),D$="style[".concat(Oi,"][").concat(P2,'="').concat(Vu,'"]'),L$=new RegExp("^".concat(Oi,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Ty=function(e){return typeof ShadowRoot<"u"&&e instanceof ShadowRoot||"host"in e&&e.nodeType===11},Yh=function(e){if(!e)return document;if(Ty(e))return e;if("getRootNode"in e){var t=e.getRootNode();if(Ty(t))return t}return document},R$=function(e,t,n){for(var r,o=n.split(","),i=0,a=o.length;i<a;i++)(r=o[i])&&e.registerName(t,r)},F$=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(Ng),o=[],i=0,a=r.length;i<a;i++){var l=r[i].trim();if(l){var s=l.match(L$);if(s){var c=0|parseInt(s[1],10),d=s[2];c!==0&&(w$(d,c),R$(e,d,s[3]),e.getTag().insertRules(c,o)),o.length=0}else o.push(l)}}},$f=function(e){for(var t=Yh(e.options.target).querySelectorAll(D$),n=0,r=t.length;n<r;n++){var o=t[n];o&&o.getAttribute(Oi)!==k2&&(F$(e,o),o.parentNode&&o.parentNode.removeChild(o))}};function z$(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var D2=function(e){var t=document.head,n=e||t,r=document.createElement("style"),o=function(l){var s=Array.from(l.querySelectorAll("style[".concat(Oi,"]")));return s[s.length-1]}(n),i=o!==void 0?o.nextSibling:null;r.setAttribute(Oi,k2),r.setAttribute(P2,Vu);var a=z$();return a&&r.setAttribute("nonce",a),n.insertBefore(r,i),r},N$=function(){function e(t){this.element=D2(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){var r;if(n.sheet)return n.sheet;for(var o=(r=n.getRootNode().styleSheets)!==null&&r!==void 0?r:document.styleSheets,i=0,a=o.length;i<a;i++){var l=o[i];if(l.ownerNode===n)return l}throw js(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),B$=function(){function e(t){this.element=D2(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),V$=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(t===this.length?this.rules.push(n):this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),jy=Na,W$={isServer:!Na,useCSSOMInjection:!x$},Wc=function(){function e(t,n,r){t===void 0&&(t=Ti),n===void 0&&(n={});var o=this;this.options=ht(ht({},W$),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&Na&&jy&&(jy=!1,$f(this)),Ug(this,function(){return function(i){for(var a=i.getTag(),l=a.length,s="",c=function(f){var m=function(g){return Bc.get(g)}(f);if(m===void 0)return"continue";var p=i.names.get(m);if(p===void 0||!p.size)return"continue";var h=a.getGroup(f);if(h.length===0)return"continue";var y=Oi+".g"+f+'[id="'+m+'"]',b="";p.forEach(function(g){g.length>0&&(b+=g+",")}),s+=h+y+'{content:"'+b+'"}'+Ng},d=0;d<l;d++)c(d);return s}(o)})}return e.registerId=function(t){return Ca(t)},e.prototype.rehydrate=function(){!this.server&&Na&&$f(this)},e.prototype.reconstructWithOptions=function(t,n){n===void 0&&(n=!0);var r=new e(ht(ht({},this.options),t),this.gs,n&&this.names||void 0);return!this.server&&Na&&t.target!==this.options.target&&Yh(this.options.target)!==Yh(t.target)&&$f(r),r},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,o=n.target;return n.isServer?new V$(o):r?new N$(o):new B$(o)}(this.options),new A$(t)));var t},e.prototype.hasNameForId=function(t,n){var r,o;return(o=(r=this.names.get(t))===null||r===void 0?void 0:r.has(n))!==null&&o!==void 0&&o},e.prototype.registerName=function(t,n){Ca(t);var r=this.names.get(t);r?r.add(n):this.names.set(t,new Set([n]))},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(Ca(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(Ca(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),U$=/&/g,Xn=47,to=42;function $y(e){if(e.indexOf("}")===-1)return!1;for(var t=e.length,n=0,r=0,o=!1,i=0;i<t;i++){var a=e.charCodeAt(i);if(r!==0||o||a!==Xn||e.charCodeAt(i+1)!==to)if(o)a===to&&e.charCodeAt(i+1)===Xn&&(o=!1,i++);else if(a!==34&&a!==39||i!==0&&e.charCodeAt(i-1)===92){if(r===0){if(a===123)n++;else if(a===125&&--n<0)return!0}}else r===0?r=a:r===a&&(r=0);else o=!0,i++}return n!==0||r!==0}function L2(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=L2(n.children,t)),n})}function H$(e){var t,n,r,o=e===void 0?Ti:e,i=o.options,a=i===void 0?Ti:i,l=o.plugins,s=l===void 0?Bg:l,c=function(h,y,b){return b.startsWith(n)&&b.endsWith(n)&&b.replaceAll(n,"").length>0?".".concat(t):h},d=s.slice();d.push(function(h){h.type===Fu&&h.value.includes("&")&&(r||(r=new RegExp("\\".concat(n,"\\b"),"g")),h.props[0]=h.props[0].replace(U$,n).replace(r,c))}),a.prefix&&d.push(v$),d.push(h$);var f=[],m=m$(d.concat(g$(function(h){return f.push(h)}))),p=function(h,y,b,g){y===void 0&&(y=""),b===void 0&&(b=""),g===void 0&&(g="&"),t=g,n=y,r=void 0;var v=function(E){if(!$y(E))return E;for(var S=E.length,P="",k=0,_=0,T=0,$=!1,I=0;I<S;I++){var M=E.charCodeAt(I);if(T!==0||$||M!==Xn||E.charCodeAt(I+1)!==to)if($)M===to&&E.charCodeAt(I+1)===Xn&&($=!1,I++);else if(M!==34&&M!==39||I!==0&&E.charCodeAt(I-1)===92){if(T===0)if(M===123)_++;else if(M===125){if(--_<0){for(var j=I+1;j<S;){var R=E.charCodeAt(j);if(R===59||R===10)break;j++}j<S&&E.charCodeAt(j)===59&&j++,_=0,I=j-1,k=j;continue}_===0&&(P+=E.substring(k,I+1),k=I+1)}else M===59&&_===0&&(P+=E.substring(k,I+1),k=I+1)}else T===0?T=M:T===M&&(T=0);else $=!0,I++}if(k<S){var D=E.substring(k);$y(D)||(P+=D)}return P}(function(E){if(E.indexOf("//")===-1)return E;for(var S=E.length,P=[],k=0,_=0,T=0,$=0;_<S;){var I=E.charCodeAt(_);if(I!==34&&I!==39||_!==0&&E.charCodeAt(_-1)===92)if(T===0)if(I===Xn&&_+1<S&&E.charCodeAt(_+1)===to){for(_+=2;_+1<S&&(E.charCodeAt(_)!==to||E.charCodeAt(_+1)!==Xn);)_++;_+=2}else if(I===40&&_>=3&&(32|E.charCodeAt(_-1))==108&&(32|E.charCodeAt(_-2))==114&&(32|E.charCodeAt(_-3))==117)$=1,_++;else if($>0)I===41?$--:I===40&&$++,_++;else if(I===to&&_+1<S&&E.charCodeAt(_+1)===Xn)_>k&&P.push(E.substring(k,_)),k=_+=2;else if(I===Xn&&_+1<S&&E.charCodeAt(_+1)===Xn){for(_>k&&P.push(E.substring(k,_));_<S&&E.charCodeAt(_)!==10;)_++;k=_}else _++;else _++;else T===0?T=I:T===I&&(T=0),_++}return k===0?E:(k<S&&P.push(E.substring(k)),P.join(""))}(h)),w=f$(b||y?"".concat(b," ").concat(y," { ").concat(v," }"):v);return a.namespace&&(w=L2(w,a.namespace)),f=[],Nc(w,m),f};return p.hash=s.length?s.reduce(function(h,y){return y.name||js(15),eo(h,y.name)},5381).toString():"",p}var G$=new Wc,Xh=H$(),R2=Z.createContext({shouldForwardProp:void 0,styleSheet:G$,stylis:Xh});R2.Consumer;Z.createContext(void 0);function Kh(){return Z.useContext(R2)}var F2=function(){function e(t,n){var r=this;this.inject=function(o,i){i===void 0&&(i=Xh);var a=r.name+i.hash;o.hasNameForId(r.id,a)||o.insertRules(r.id,a,i(r.rules,a,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,Ug(this,function(){throw js(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=Xh),this.name+t.hash},e}();function q$(e,t){return t==null||typeof t=="boolean"||t===""?"":typeof t!="number"||t===0||e in y$||e.startsWith("--")?String(t).trim():"".concat(t,"px")}var Y$=function(e){return e>="A"&&e<="Z"};function Iy(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;Y$(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var z2=function(e){return e==null||e===!1||e===""},N2=function(e){var t=[];for(var n in e){var r=e[n];e.hasOwnProperty(n)&&!z2(r)&&(Array.isArray(r)&&r.isCss||ji(r)?t.push("".concat(Iy(n),":"),r,";"):ms(r)?t.push.apply(t,ki(ki(["".concat(n," {")],N2(r),!1),["}"],!1)):t.push("".concat(Iy(n),": ").concat(q$(n,r),";")))}return t};function Nr(e,t,n,r,o){if(o===void 0&&(o=[]),typeof e=="string")return e&&o.push(e),o;if(z2(e))return o;if(Wg(e))return o.push(".".concat(e.styledComponentId)),o;if(ji(e)){if(!ji(a=e)||a.prototype&&a.prototype.isReactComponent||!t)return o.push(e),o;var i=e(t);return Nr(i,t,n,r,o)}var a;if(e instanceof F2)return n?(e.inject(n,r),o.push(e.getName(r))):o.push(e),o;if(ms(e)){for(var l=N2(e),s=0;s<l.length;s++)o.push(l[s]);return o}if(!Array.isArray(e))return o.push(e.toString()),o;for(s=0;s<e.length;s++)Nr(e[s],t,n,r,o);return o}function B2(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(ji(n)&&!Wg(n))return!1}return!0}var X$=j2(Vu),K$=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&B2(t),this.componentId=n,this.baseHash=eo(X$,n),this.baseStyle=r,Wc.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var o=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r).className:"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))o=lo(o,this.staticRulesId);else{var i=Vc(Nr(this.rules,t,n,r)),a=Gh(eo(this.baseHash,i)>>>0);if(!n.hasNameForId(this.componentId,a)){var l=r(i,".".concat(a),void 0,this.componentId);n.insertRules(this.componentId,a,l)}o=lo(o,a),this.staticRulesId=a}else{for(var s=eo(this.baseHash,r.hash),c="",d=0;d<this.rules.length;d++){var f=this.rules[d];if(typeof f=="string")c+=f;else if(f){var m=Vc(Nr(f,t,n,r));s=eo(eo(s,String(d)),m),c+=m}}if(c){var p=Gh(s>>>0);if(!n.hasNameForId(this.componentId,p)){var h=r(c,".".concat(p),void 0,this.componentId);n.insertRules(this.componentId,p,h)}o=lo(o,p)}}return{className:o,css:typeof window>"u"?n.getTag().getGroup(Ca(this.componentId)):""}},e}(),Hg=Z.createContext(void 0);Hg.Consumer;var If={};function Q$(e,t,n){var r=Wg(e),o=e,i=!jf(e),a=t.attrs,l=a===void 0?Bg:a,s=t.componentId,c=s===void 0?function(E,S){var P=typeof E!="string"?"sc":Cy(E);If[P]=(If[P]||0)+1;var k="".concat(P,"-").concat(Vg(Vu+P+If[P]));return S?"".concat(S,"-").concat(k):k}(t.displayName,t.parentComponentId):s,d=t.displayName,f=d===void 0?function(E){return jf(E)?"styled.".concat(E):"Styled(".concat(_$(E),")")}(e):d,m=t.displayName&&t.componentId?"".concat(Cy(t.displayName),"-").concat(t.componentId):t.componentId||c,p=r&&o.attrs?o.attrs.concat(l).filter(Boolean):l,h=t.shouldForwardProp;if(r&&o.shouldForwardProp){var y=o.shouldForwardProp;if(t.shouldForwardProp){var b=t.shouldForwardProp;h=function(E,S){return y(E,S)&&b(E,S)}}else h=y}var g=new K$(n,m,r?o.componentStyle:void 0);function v(E,S){return function(P,k,_){var T=P.attrs,$=P.componentStyle,I=P.defaultProps,M=P.foldedComponentIds,j=P.styledComponentId,R=P.target,D=Z.useContext(Hg),F=Kh(),L=P.shouldForwardProp||F.shouldForwardProp,O=O2(k,D,I)||Ti,A=function(W,Y,Q){for(var ie,re=ht(ht({},Y),{className:void 0,theme:Q}),be=0;be<W.length;be+=1){var Le=ji(ie=W[be])?ie(re):ie;for(var Re in Le)Re==="className"?re.className=lo(re.className,Le[Re]):Re==="style"?re.style=ht(ht({},re.style),Le[Re]):re[Re]=Le[Re]}return"className"in Y&&typeof Y.className=="string"&&(re.className=lo(re.className,Y.className)),re}(T,k,O),N=A.as||R,B={};for(var z in A)A[z]===void 0||z[0]==="$"||z==="as"||z==="theme"&&A.theme===O||(z==="forwardedAs"?B.as=A.forwardedAs:L&&!L(z,N)||(B[z]=A[z]));var V=function(W,Y){var Q=Kh(),ie=W.generateAndInjectStyles(Y,Q.styleSheet,Q.stylis);return ie}($,A),U=V.className,G=lo(M,j);return U&&(G+=" "+U),A.className&&(G+=" "+A.className),B[jf(N)&&!T2.has(N)?"class":"className"]=G,_&&(B.ref=_),x.createElement(N,B)}(w,E,S)}v.displayName=f;var w=Z.forwardRef(v);return w.attrs=p,w.componentStyle=g,w.displayName=f,w.shouldForwardProp=h,w.foldedComponentIds=r?lo(o.foldedComponentIds,o.styledComponentId):"",w.styledComponentId=m,w.target=r?o.target:e,Object.defineProperty(w,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(E){this._foldedDefaultProps=r?function(S){for(var P=[],k=1;k<arguments.length;k++)P[k-1]=arguments[k];for(var _=0,T=P;_<T.length;_++)qh(S,T[_],!0);return S}({},o.defaultProps,E):E}}),Ug(w,function(){return".".concat(w.styledComponentId)}),i&&A2(w,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),w}function My(e,t){for(var n=[e[0]],r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n}var Ay=function(e){return Object.assign(e,{isCss:!0})};function Gg(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(ji(e)||ms(e))return Ay(Nr(My(Bg,ki([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?Nr(r):Ay(Nr(My(r,t)))}function Qh(e,t,n){if(n===void 0&&(n=Ti),!t)throw js(1,t);var r=function(o){for(var i=[],a=1;a<arguments.length;a++)i[a-1]=arguments[a];return e(t,n,Gg.apply(void 0,ki([o],i,!1)))};return r.attrs=function(o){return Qh(e,t,ht(ht({},n),{attrs:Array.prototype.concat(n.attrs,o).filter(Boolean)}))},r.withConfig=function(o){return Qh(e,t,ht(ht({},n),o))},r}var V2=function(e){return Qh(Q$,e)},C=V2;T2.forEach(function(e){C[e]=V2(e)});var Z$=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=B2(t),Wc.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,r,o){var i=o(Vc(Nr(this.rules,n,r,o)),""),a=this.componentId+t;r.insertRules(a,a,i)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,r,o){t>2&&Wc.registerId(this.componentId+t);var i=this.componentId+t;this.isStatic?r.hasNameForId(i,i)||this.createStyles(t,n,r,o):(this.removeStyles(t,r),this.createStyles(t,n,r,o))},e}();function J$(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=Gg.apply(void 0,ki([e],t,!1)),o="sc-global-".concat(Vg(JSON.stringify(r))),i=new Z$(r,o),a=new WeakMap,l=function(c){var d=Kh(),f=Z.useContext(Hg),m=a.get(d.styleSheet);return m===void 0&&(m=d.styleSheet.allocateGSInstance(o),a.set(d.styleSheet,m)),(typeof window>"u"||!d.styleSheet.server)&&s(m,c,d.styleSheet,f,d.stylis),Z.useLayoutEffect(function(){return d.styleSheet.server||s(m,c,d.styleSheet,f,d.stylis),function(){var p;i.removeStyles(m,d.styleSheet),p=d.styleSheet.options.target,typeof document<"u"&&(p??document).querySelectorAll('style[data-styled-global="'.concat(o,'"]')).forEach(function(h){return h.remove()})}},[m,c,d.styleSheet,f,d.stylis]),null};function s(c,d,f,m,p){if(i.isStatic)i.renderStyles(c,b$,f,p);else{var h=ht(ht({},d),{theme:O2(d,m,l.defaultProps)});i.renderStyles(c,h,f,p)}}return Z.memo(l)}function qg(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=Vc(Gg.apply(void 0,ki([e],t,!1))),o=Vg(r);return new F2(o,r)}const e4=C.div`
position: sticky;
  top: 0;
  z-index: 1000;
      background: radial-gradient(circle at 50% 45%, #5c5149 0%, #4b3c34 35%, #352b25 65%, #1b1412 100%);


`,t4=C.div`
  width: 100%;
  max-width: 750px;
  padding: 10px;
  padding-left: 10px;
  padding-right: 10px;
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
`,n4=C.div`
width: 100%;
  display: flex;
      gap: 10px;

  flex-direction: column;
  @media screen and (min-width: 768px) {
    justify-content: space-around;
  }
`,r4=C.div`

  display: flex;
  @media screen and (max-width: 1023px) {
    justify-content: space-between;
  }
`,o4=C.div`
  display: flex;
  justify-content: space-around;
  

  @media screen and (min-width: 1023px) {
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    flex: 1;
  }
`,i4=C.button`
        order: 1;



    border:none;
  

    background:transparent;

    color:  var(--white-color);

    cursor:pointer;

    transition:.3s;
      @media screen and (min-width: 768px) {
    order: 3;
    padding-left:15px;
  }

    
`;C(ge)`
  color: var(--main-brand-color);
  display: none;
  align-items: center;
  text-align: center;
  justify-content: center;
  @media screen and (min-width: 768px) {
    display: flex;
  }
`;C.img`
  display: flex;
  width: 50px;
  height: 50px;

  justify-content: center;
  align-items: center;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;C.img`
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
    width: 100px;
    height: 100px;

    justify-content: center;
    align-items: center;
  }
`;const a4=C(ge)`
  font-size: 40px;
  font-family: Poiret One;
  font-family: 'MyFont'; 
  
  font-weight: 400;
  color: var(--white-color);
  letter-spacing:0.2em;

  /* &::after {
    content: '.';
    color: var(--orange-color); 
    margin-left: 2px;
  } */
`;C.h1`
  color: var(--white-color);
  font-family: DM Serif Display;
  margin-left: 70px;
`;const s4=C.svg`
  width: 30px;
  height: 30px;
  fill: var(--white-color);
`,l4=C.button`
order:4;
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

  @media (max-width: 1023px) {
    display: block;
  }

  cursor: pointer;
  transition: background 0.2s ease;

  &:hover {
  }
`;C.div`
  z-index: 9999;
`;C.a`
  color: var(--black-color);
`;const c4=C.div`
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
`,u4=C.button`
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
`,d4=C.nav`
  display: flex;
  flex-direction: column;
  gap: 25px;
`,Ro=C(ge)`
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
`,f4=C.div`
  margin-top: auto;
  border-top: 1px solid #eee;
  padding-top: 20px;
  font-size: 14px;
  color: #888;
  text-align: center;
`,p4=C.div`
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
`,h4=C.div`
  position: relative;
  display: flex;
  align-items: center;
  background: #ffffff2b;
  border-radius: 12px;

  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.12);
  width: 100%;
  max-width: 750px;

  @media screen and (min-width: 768px) {
    max-width: 1448px;
    margin-left: auto;
    margin-right: auto;
  }
`,m4=C.input`
  border: none;
  outline: none;
  padding: 14px 22px;
  font-size: 20px;
  background-color: transparent;
  color: var(--white-color);
  width: 100%;
  max-width: 750px;
  padding: 10px;

  ::placeholder {
    color: #a09589;
  }

  @media screen and (min-width: 768px) {
    max-width: 1448px;
  }
`,g4=C.button`
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
`,v4=C.svg`
  width: 24px;
  height: 24px;
`,y4=C.ul`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;

  border-radius: 12px;
  background: rgb(255, 255, 255);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
  border: 1px solid #eee;
  max-height: 500px;
  overflow-y: auto;
  z-index: 500;
  /* max-width:600px */
`,x4=C.li`
font-family: var(--second-font);
  display: flex;
  gap: 15px;
  padding: 10px;
  cursor: pointer;

  &:hover {
    background: #f5f5f5;
  }
  &:not(:last-child) {
    border-bottom: 1px solid rgba(0, 0, 0, 0.06); 
  }


`,b4=C.img`
 width: 100px;
    height: 100px;
    object-fit: cover;
 `,w4=C.h3`
      text-align: left;
      font-size: 18px;
      font-weight: 400;

`,S4=C.h3`
 font-weight: 500;
      font-size: 20px;
         

`,E4=C.div`
display: flex;
flex-direction: column;
    align-items: flex-start;
    gap: 10px;

      @media screen and (min-width: 768px) {
   flex-direction: row;
  justify-content: space-between; 
  align-items: center;            
  width: 100%;
  padding-right: 20px;
  
  }

    
`,xn="/Didiv/assets/symbol-defs-fb9ce9f0.svg",C4=()=>{const[e,t]=x.useState(""),[n,r]=x.useState([]),[o,i]=x.useState(!1),a=et(),l=x.useRef(null);x.useEffect(()=>{if(e.trim().length<2){r([]),i(!1);return}const c=setTimeout(async()=>{try{const f=await(await fetch(`https://backenddidiv-production.up.railway.app/api/products?filters[name][$containsi]=${e}&populate=*`)).json();r(f.data),i(!0)}catch(d){console.error(d)}},300);return()=>clearTimeout(c)},[e]),x.useEffect(()=>{const c=d=>{l.current&&!l.current.contains(d.target)&&i(!1)};return document.addEventListener("mousedown",c),()=>{document.removeEventListener("mousedown",c)}},[]);const s=c=>{t(""),i(!1),a(`/product/${c.slug??c.id}`)};return u.jsxs(h4,{ref:l,children:[u.jsx(m4,{name:"site-search",value:e,onChange:c=>t(c.target.value),placeholder:"Пошук",autoComplete:"off",onFocus:()=>e.trim().length>=2&&i(!0)}),u.jsx(g4,{className:"search-button",children:u.jsx(v4,{children:u.jsx("use",{href:`${xn}#icon-search`})})}),o&&n.length>0&&u.jsx(y4,{children:n.map(c=>{var m,p;const f=c.new_price&&c.new_price<c.price?c.new_price:c.price;return u.jsxs(x4,{onClick:()=>s(c),children:[u.jsx(b4,{src:((p=(m=c.images)==null?void 0:m[0])==null?void 0:p.url)||"/nofoto.png",alt:""}),u.jsxs(E4,{children:[u.jsx(w4,{children:c.name}),u.jsxs(S4,{children:[f," грн."]})]})]},c.id)})})]})};var W2={exports:{}},U2={};/**
 * @license React
 * use-sync-external-store-with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $s=x;function _4(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var k4=typeof Object.is=="function"?Object.is:_4,P4=$s.useSyncExternalStore,O4=$s.useRef,T4=$s.useEffect,j4=$s.useMemo,$4=$s.useDebugValue;U2.useSyncExternalStoreWithSelector=function(e,t,n,r,o){var i=O4(null);if(i.current===null){var a={hasValue:!1,value:null};i.current=a}else a=i.current;i=j4(function(){function s(p){if(!c){if(c=!0,d=p,p=r(p),o!==void 0&&a.hasValue){var h=a.value;if(o(h,p))return f=h}return f=p}if(h=f,k4(d,p))return h;var y=r(p);return o!==void 0&&o(h,y)?(d=p,h):(d=p,f=y)}var c=!1,d,f,m=n===void 0?null:n;return[function(){return s(t())},m===null?void 0:function(){return s(m())}]},[t,n,r,o]);var l=P4(e,i[0],i[1]);return T4(function(){a.hasValue=!0,a.value=l},[l]),$4(l),l};W2.exports=U2;var I4=W2.exports;function M4(e){e()}function A4(){let e=null,t=null;return{clear(){e=null,t=null},notify(){M4(()=>{let n=e;for(;n;)n.callback(),n=n.next})},get(){const n=[];let r=e;for(;r;)n.push(r),r=r.next;return n},subscribe(n){let r=!0;const o=t={callback:n,next:null,prev:t};return o.prev?o.prev.next=o:e=o,function(){!r||e===null||(r=!1,o.next?o.next.prev=o.prev:t=o.prev,o.prev?o.prev.next=o.next:e=o.next)}}}}var Dy={notify(){},get:()=>[]};function D4(e,t){let n,r=Dy,o=0,i=!1;function a(y){d();const b=r.subscribe(y);let g=!1;return()=>{g||(g=!0,b(),f())}}function l(){r.notify()}function s(){h.onStateChange&&h.onStateChange()}function c(){return i}function d(){o++,n||(n=t?t.addNestedSub(s):e.subscribe(s),r=A4())}function f(){o--,n&&o===0&&(n(),n=void 0,r.clear(),r=Dy)}function m(){i||(i=!0,d())}function p(){i&&(i=!1,f())}const h={addNestedSub:a,notifyNestedSubs:l,handleChangeWrapper:s,isSubscribed:c,trySubscribe:m,tryUnsubscribe:p,getListeners:()=>r};return h}var L4=()=>typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",R4=L4(),F4=()=>typeof navigator<"u"&&navigator.product==="ReactNative",z4=F4(),N4=()=>R4||z4?x.useLayoutEffect:x.useEffect,B4=N4(),Mf=Symbol.for("react-redux-context"),Af=typeof globalThis<"u"?globalThis:{};function V4(){if(!x.createContext)return{};const e=Af[Mf]??(Af[Mf]=new Map);let t=e.get(x.createContext);return t||(t=x.createContext(null),e.set(x.createContext,t)),t}var Wr=V4();function W4(e){const{children:t,context:n,serverState:r,store:o}=e,i=x.useMemo(()=>{const s=D4(o);return{store:o,subscription:s,getServerState:r?()=>r:void 0}},[o,r]),a=x.useMemo(()=>o.getState(),[o]);B4(()=>{const{subscription:s}=i;return s.onStateChange=s.notifyNestedSubs,s.trySubscribe(),a!==o.getState()&&s.notifyNestedSubs(),()=>{s.tryUnsubscribe(),s.onStateChange=void 0}},[i,a]);const l=n||Wr;return x.createElement(l.Provider,{value:i},t)}var U4=W4;function Yg(e=Wr){return function(){return x.useContext(e)}}var H2=Yg();function G2(e=Wr){const t=e===Wr?H2:Yg(e),n=()=>{const{store:r}=t();return r};return Object.assign(n,{withTypes:()=>n}),n}var H4=G2();function G4(e=Wr){const t=e===Wr?H4:G2(e),n=()=>t().dispatch;return Object.assign(n,{withTypes:()=>n}),n}var Lt=G4(),q4=(e,t)=>e===t;function Y4(e=Wr){const t=e===Wr?H2:Yg(e),n=(r,o={})=>{const{equalityFn:i=q4}=typeof o=="function"?{equalityFn:o}:o,a=t(),{store:l,subscription:s,getServerState:c}=a;x.useRef(!0);const d=x.useCallback({[r.name](m){return r(m)}}[r.name],[r]),f=I4.useSyncExternalStoreWithSelector(s.addNestedSub,l.getState,c||l.getState,d,i);return x.useDebugValue(f),f};return Object.assign(n,{withTypes:()=>n}),n}var Ye=Y4();const X4=C(ge)`
      display: flex;
    align-items: center;
    align-content: center;
    justify-content: center;
    
    @media screen and (min-width: 1023px) {
   order: 2;
  margin-right: 10px;
  
  }
       
`,K4=C.svg`
  width: 30px;
  height: 30px;
 fill: var(--white-color);
`,Q4=C.div`

width:30px;
height:30px;

  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 28px; 
  cursor: pointer;
`,Z4=C.div`
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
`,J4=({onClick:e})=>{const t=Ye(n=>n.cart.items.length);return u.jsx(X4,{to:"/cart",children:u.jsxs(Q4,{onClick:e,children:[u.jsx(K4,{children:u.jsx("use",{href:`${xn}#icon-cart`})}),t>0&&u.jsx(Z4,{children:t})]})})},e3=C.nav`
  display: flex;
  gap: 20px;

  @media (max-width: 1023px) {
    display: none;
  }
  @media (min-width: 768px) {
    order: 1;
    gap: 30px;
    margin-right: auto;
    margin-left: auto;
  }
  @media (min-width: 1023px) {
    gap: 5px;
  }
  @media (min-width: 1225px) {
    gap: 25px;
  }
`,Fo=C(ge)`
  font-size: 20px;
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
    text-shadow: 0 0 5px rgba(255, 255, 255, 0.8);
  }

  @media (max-width: 1225px) {
    &:not(:last-child)::after {
      content: '';
      display: inline-block;
      width: 2.5px;
      height: 26px;
      background-color: var(--orange-color);
      vertical-align: middle;
      border-radius: 2px;
      margin-left: 10px;
    }
  }
  @media (min-width: 1225px) {
    &:not(:last-child)::after {
      content: '';
      display: inline-block;
      width: 2.5px;
      height: 26px;
      background-color: var(--orange-color);
      vertical-align: middle;
      border-radius: 2px;
      margin-left: 30px;
    }
  }
`,t3=()=>u.jsxs(e3,{children:[u.jsx(Fo,{to:"/",children:"Головна"}),u.jsx(Fo,{to:"/catalog",children:"Каталог"}),u.jsx(Fo,{to:"/catalog/new",children:"Новинки"}),u.jsx(Fo,{to:"/catalog/sale",children:"Акційні товари"}),u.jsx(Fo,{to:"/about",children:"Про нас"}),u.jsx(Fo,{to:"/contacts",children:"Контакти"})]}),n3=C.svg`
  width: 24px;
  height: 24px;
  fill: var(--white-color);
`,r3=C(ge)`
      display: flex;
    align-items: center;
    align-content: center;
    justify-content: center;
    
    @media screen and (min-width: 1023px) {
   order: 2;
 
  }
       
`,o3=C.div`

width:30px;
height:30px;

  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 28px; /* розмір іконки */
  cursor: pointer;
`,i3=C.div`

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
`,a3=({onClick:e})=>{const t=Ye(n=>n.favorites.items.length);return u.jsx(r3,{to:"/favorite",children:u.jsxs(o3,{onClick:e,children:[u.jsx(n3,{children:u.jsx("use",{href:`${xn}#icon-heart`})}),t>0&&u.jsx(i3,{children:t})]})})};/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q2=(...e)=>e.filter((t,n,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===n).join(" ").trim();/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s3=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l3=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,n,r)=>r?r.toUpperCase():n.toLowerCase());/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ly=e=>{const t=l3(e);return t.charAt(0).toUpperCase()+t.slice(1)};/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var c3={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u3=e=>{for(const t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0;return!1};/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d3=x.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:o="",children:i,iconNode:a,...l},s)=>x.createElement("svg",{ref:s,...c3,width:t,height:t,stroke:e,strokeWidth:r?Number(n)*24/Number(t):n,className:q2("lucide",o),...!i&&!u3(l)&&{"aria-hidden":"true"},...l},[...a.map(([c,d])=>x.createElement(c,d)),...Array.isArray(i)?i:[i]]));/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tt=(e,t)=>{const n=x.forwardRef(({className:r,...o},i)=>x.createElement(d3,{ref:i,iconNode:t,className:q2(`lucide-${s3(Ly(e))}`,`lucide-${e}`,r),...o}));return n.displayName=Ly(e),n};/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f3=[["path",{d:"m3 16 4 4 4-4",key:"1co6wj"}],["path",{d:"M7 20V4",key:"1yoxec"}],["path",{d:"M11 4h4",key:"6d7r33"}],["path",{d:"M11 8h7",key:"djye34"}],["path",{d:"M11 12h10",key:"1438ji"}]],Wu=tt("arrow-down-narrow-wide",f3);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p3=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],Uu=tt("arrow-right",p3);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h3=[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"M9 9h.01",key:"1q5me6"}],["path",{d:"M15 15h.01",key:"lqbp3k"}]],m3=tt("badge-percent",h3);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g3=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],v3=tt("chevron-down",g3);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y3=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],x3=tt("chevron-up",y3);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b3=[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]],po=tt("eye-off",b3);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w3=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],ho=tt("eye",w3);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S3=[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",key:"mvr1a0"}]],Is=tt("heart",S3);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E3=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"r6nss1"}]],C3=tt("house",E3);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _3=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],k3=tt("info",_3);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P3=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 .83.18 2 2 0 0 0 .83-.18l8.58-3.9a1 1 0 0 0 0-1.831z",key:"zzgyd3"}],["path",{d:"M16 17h6",key:"1ook5g"}],["path",{d:"M19 14v6",key:"1ckrd5"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 .825.178",key:"1ia9y3"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l2.116-.962",key:"jksky3"}]],O3=tt("layers-plus",P3);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T3=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],j3=tt("mail",T3);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $3=[["path",{d:"M16 10a4 4 0 0 1-8 0",key:"1ltviw"}],["path",{d:"M3.103 6.034h17.794",key:"awc11p"}],["path",{d:"M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z",key:"o988cm"}]],I3=tt("shopping-bag",$3);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M3=[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]],Ui=tt("shopping-cart",M3);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A3=[["path",{d:"M10 5H3",key:"1qgfaw"}],["path",{d:"M12 19H3",key:"yhmn1j"}],["path",{d:"M14 3v4",key:"1sua03"}],["path",{d:"M16 17v4",key:"1q0r14"}],["path",{d:"M21 12h-9",key:"1o4lsq"}],["path",{d:"M21 19h-5",key:"1rlt1p"}],["path",{d:"M21 5h-7",key:"1oszz2"}],["path",{d:"M8 10v4",key:"tgpxqk"}],["path",{d:"M8 12H3",key:"a7s4jb"}]],Y2=tt("sliders-horizontal",A3);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D3=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],X2=tt("trash-2",D3);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L3=[["circle",{cx:"12",cy:"8",r:"5",key:"1hypcn"}],["path",{d:"M20 21a8 8 0 0 0-16 0",key:"rfgkzh"}]],R3=tt("user-round",L3);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F3=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],K2=tt("x",F3),z3=({openLogin:e})=>{const[t,n]=x.useState(!1),r=et(),o=async()=>{const i=localStorage.getItem("token");if(!i){e();return}try{const a=await fetch("https://backenddidiv-production.up.railway.app/api/users/me",{headers:{Authorization:`Bearer ${i}`}});if(a.status===401){localStorage.removeItem("token"),localStorage.removeItem("user"),localStorage.removeItem("persist:cart"),localStorage.removeItem("persist:favorites"),window.location.reload(),e();return}if(!a.ok){console.error("Помилка перевірки авторизації:",a.status);return}r("/account/orders")}catch(a){console.error("Помилка перевірки авторизації:",a)}};return u.jsx(e4,{children:u.jsx(t4,{children:u.jsxs(n4,{children:[u.jsxs(r4,{children:[u.jsx(a4,{to:"/",children:"Дідів хлів"}),u.jsxs(o4,{children:[u.jsx(J4,{}),u.jsx(i4,{onClick:o,children:u.jsx(R3,{size:28,color:"#f2ebd4",strokeWidth:1.9})}),u.jsx(a3,{}),u.jsx(t3,{}),u.jsx(l4,{onClick:()=>n(!t),children:u.jsx(s4,{children:u.jsx("use",{href:`${xn}#icon-menu`})})}),u.jsx(p4,{open:t,onClick:()=>n(!1)}),u.jsxs(c4,{open:t,children:[u.jsx(u4,{onClick:()=>n(!1),children:u.jsx(K2,{size:28,strokeWidth:1.5})}),u.jsxs(d4,{children:[u.jsxs(Ro,{onClick:()=>n(!1),to:"/",children:[u.jsx(C3,{size:22,strokeWidth:1.5})," Головна"]}),u.jsxs(Ro,{onClick:()=>n(!1),to:"/catalog",children:[u.jsx(I3,{size:22,strokeWidth:1.5})," Каталог"]}),u.jsxs(Ro,{onClick:()=>n(!1),to:"/catalog/new",children:[u.jsx(O3,{size:22,strokeWidth:1.5}),"Новинки"]}),u.jsxs(Ro,{onClick:()=>n(!1),to:"/catalog/sale",children:[u.jsx(m3,{size:22,strokeWidth:1.5}),"Акційні товари"]}),u.jsxs(Ro,{onClick:()=>n(!1),to:"/about",children:[u.jsx(k3,{size:22,strokeWidth:1.5})," Про нас"]}),u.jsxs(Ro,{onClick:()=>n(!1),to:"/contacts",children:[u.jsx(j3,{size:22,strokeWidth:1.5})," Контакти"]})]}),u.jsx(f4,{children:u.jsx("p",{children:"© 2020 Дідів Хлів"})})]})]})]}),u.jsx(C4,{})]})})})},N3=C.div`

   background: radial-gradient(
    circle at 50% 45%,
    #5c5149 0%,
    #4b3c34 35%,
    #352b25 65%,
    #1b1412 100%
  );
`,B3=C.footer`
 
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
`,V3=C.div`
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
`,Df=C.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center; /* Центруємо контент всередині колонки */

  @media screen and (min-width: 768px) {
    align-items: flex-start; /* На десктопі — по лівому краю */
    min-width: 150px;
    flex: 1;
  }
`,Lf=C.h3`
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
`,kn=C(ge)`
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
`,W3=C.div`
  display: flex;
  gap: 20px;
  margin-top: 10px;
  justify-content: center;

  @media screen and (min-width: 768px) {
    justify-content: flex-start;
  }
`,Rf=C.a`
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
`,U3=()=>u.jsx(N3,{children:u.jsxs(B3,{children:[u.jsxs(V3,{children:[u.jsxs(Df,{children:[u.jsx(Lf,{children:"Навігація"}),u.jsx(kn,{to:"/",children:"Головна"}),u.jsx(kn,{to:"/about",children:"Про нас"}),u.jsx(kn,{to:"/catalog",children:"Каталог"}),u.jsx(kn,{to:"/contacts",children:"Контакти"})]}),u.jsxs(Df,{children:[u.jsx(Lf,{children:"Інформація"}),u.jsx(kn,{to:"/delivery",children:"Оплата і доставка"}),u.jsx(kn,{children:"Повернення"}),u.jsx(kn,{children:"Гарантія"}),u.jsx(kn,{children:"Політика конфіденційності"})]})]}),u.jsxs(Df,{children:[u.jsx(Lf,{children:"Контакти"}),u.jsx(kn,{href:"tel:+380979999999",children:"+38 (097) 999-99-99"}),u.jsx(kn,{href:"mailto:email@email.com",children:"email@email.com"}),u.jsxs(W3,{children:[u.jsx(Rf,{href:"https://www.instagram.com/didivxliv?igsh=MXhsNWRjdW5rajYwdQ==",target:"_blank",rel:"noopener noreferrer",children:u.jsx("svg",{width:"20px",children:u.jsx("use",{href:`${xn}#icon-instagram`})})}),u.jsx(Rf,{href:"https://t.me/didivxliv",target:"_blank",rel:"noopener noreferrer",children:u.jsx("svg",{width:"20px",children:u.jsx("use",{href:`${xn}#icon-telegram`})})}),u.jsx(Rf,{href:"https://www.olx.ua/uk/hobbi-otdyh-i-sport/velo/q-%D0%B4%D1%96%D0%B4%D1%96%D0%B2-%D1%85%D0%BB%D1%96%D0%B2/?srsltid=AfmBOoqjzHkKNGxhNyAXVf2_KVV6h3JQFklEk0AjrDFh7tlO2-HZJPSS",target:"_blank",rel:"noopener noreferrer",children:u.jsx("svg",{width:"27px",height:"27px",style:{marginTop:"5px"},children:u.jsx("use",{href:`${xn}#icon-olx`})})})]})]})]})}),H3=({openLogin:e,openRegister:t})=>u.jsxs(u.Fragment,{children:[u.jsx(z3,{openLogin:e,openRegister:t}),u.jsx("main",{style:{flex:1},children:u.jsx(fw,{})}),u.jsx(U3,{})]}),G3=C.section`
  width: 100%;
  font-family: var(--main-font);
  padding-top: 30px;
`,q3=C.h2`
  font-size: 30px;
  text-transform: uppercase;
  font-weight: 700;
  margin-bottom: 20px;
  color: #333;
  text-align: center;

  @media screen and (min-width: 768px) {
    font-size: 35px;
  }
`,Y3=C.div`
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
`,X3=C.div`
  position: relative;
  font-family: var(--second-font);
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  min-width: 0;
  border: 2px solid #eee;
  border-radius: 12px;
  padding: 10px;
  background-color: #f5f5f5;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 26%);
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.02);
  }
  @media screen and (max-width: 768px) {
    width: 100%;
  }
   ${({$soldOut:e})=>e&&`
      opacity: 0.55;
      filter: grayscale(100%);
    `}
`,K3=C.p`
  font-family: var(--second-font);
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 11px;
  font-weight: 500;
  text-transform: uppercase;
  padding: 4px 10px;
  border-radius: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.344);
  background: var(--red-color);
  color: #fff;
  z-index: 10;
  @media screen and (max-width: 480px) {
    font-size: 10px;
    padding: 3px 8px;
    top: 8px;
    right: 8px;
  }
`,Q3=C(ge)`
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
`,Z3=C.span`
  position: absolute;
  top: 10px;
  left: 10px;
  background-color: var(--orange-color);
  color: white;
  font-size: 11px;
  font-weight: 500;
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
`,J3=C.div`
  padding: 10px 0;
`,e5=C.h3`
  font-size: 20px;
  font-weight: 600;

  color: #333;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 16px;
`,t5=C.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;C.span`
  font-size: 17px;
  font-weight: 800;
  color: var(--black-color);
`;C.button`
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
    background: var(--orange-color);
    color: white;
  }
`;C(ge)`
  color: var(--white-color);
  padding: 10px 20px;
  background: var(--orange-color);
  border-radius: 15px;
  text-decoration: none;
`;const n5=C(ge)`
  display: flex;
  background: var(--orange-color);
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
    padding: 20px;
  }
`,r5=C.div`
  text-align: center;
  color: white;

  p {
    font-size: 24px;
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 12px;
  }
`,o5=C.div`
  width: 40px;
  height: 40px;
  border: 2px solid white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`;function Q2(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(n=Q2(e[t]))&&(r&&(r+=" "),r+=n)}else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function mo(){for(var e,t,n=0,r="",o=arguments.length;n<o;n++)(e=arguments[n])&&(t=Q2(e))&&(r&&(r+=" "),r+=t);return r}function i5(e){if(!e||typeof document>"u")return;let t=document.head||document.getElementsByTagName("head")[0],n=document.createElement("style");n.type="text/css",t.firstChild?t.insertBefore(n,t.firstChild):t.appendChild(n),n.styleSheet?n.styleSheet.cssText=e:n.appendChild(document.createTextNode(e))}i5(`:root{--toastify-color-light: #fff;--toastify-color-dark: #121212;--toastify-color-info: #3498db;--toastify-color-success: #07bc0c;--toastify-color-warning: #f1c40f;--toastify-color-error: hsl(6, 78%, 57%);--toastify-color-transparent: rgba(255, 255, 255, .7);--toastify-icon-color-info: var(--toastify-color-info);--toastify-icon-color-success: var(--toastify-color-success);--toastify-icon-color-warning: var(--toastify-color-warning);--toastify-icon-color-error: var(--toastify-color-error);--toastify-container-width: fit-content;--toastify-toast-width: 320px;--toastify-toast-offset: 16px;--toastify-toast-top: max(var(--toastify-toast-offset), env(safe-area-inset-top));--toastify-toast-right: max(var(--toastify-toast-offset), env(safe-area-inset-right));--toastify-toast-left: max(var(--toastify-toast-offset), env(safe-area-inset-left));--toastify-toast-bottom: max(var(--toastify-toast-offset), env(safe-area-inset-bottom));--toastify-toast-background: #fff;--toastify-toast-padding: 14px;--toastify-toast-min-height: 64px;--toastify-toast-max-height: 800px;--toastify-toast-bd-radius: 6px;--toastify-toast-shadow: 0px 4px 12px rgba(0, 0, 0, .1);--toastify-font-family: sans-serif;--toastify-z-index: 9999;--toastify-text-color-light: #757575;--toastify-text-color-dark: #fff;--toastify-text-color-info: #fff;--toastify-text-color-success: #fff;--toastify-text-color-warning: #fff;--toastify-text-color-error: #fff;--toastify-spinner-color: #616161;--toastify-spinner-color-empty-area: #e0e0e0;--toastify-color-progress-light: linear-gradient(to right, #4cd964, #5ac8fa, #007aff, #34aadc, #5856d6, #ff2d55);--toastify-color-progress-dark: #bb86fc;--toastify-color-progress-info: var(--toastify-color-info);--toastify-color-progress-success: var(--toastify-color-success);--toastify-color-progress-warning: var(--toastify-color-warning);--toastify-color-progress-error: var(--toastify-color-error);--toastify-color-progress-bgo: .2}.Toastify__toast-container{z-index:var(--toastify-z-index);-webkit-transform:translate3d(0,0,var(--toastify-z-index));position:fixed;width:var(--toastify-container-width);box-sizing:border-box;color:#fff;display:flex;flex-direction:column}.Toastify__toast-container--top-left{top:var(--toastify-toast-top);left:var(--toastify-toast-left)}.Toastify__toast-container--top-center{top:var(--toastify-toast-top);left:50%;transform:translate(-50%);align-items:center}.Toastify__toast-container--top-right{top:var(--toastify-toast-top);right:var(--toastify-toast-right);align-items:end}.Toastify__toast-container--bottom-left{bottom:var(--toastify-toast-bottom);left:var(--toastify-toast-left)}.Toastify__toast-container--bottom-center{bottom:var(--toastify-toast-bottom);left:50%;transform:translate(-50%);align-items:center}.Toastify__toast-container--bottom-right{bottom:var(--toastify-toast-bottom);right:var(--toastify-toast-right);align-items:end}.Toastify__toast{--y: 0;position:relative;touch-action:none;width:var(--toastify-toast-width);min-height:var(--toastify-toast-min-height);box-sizing:border-box;margin-bottom:1rem;padding:var(--toastify-toast-padding);border-radius:var(--toastify-toast-bd-radius);box-shadow:var(--toastify-toast-shadow);max-height:var(--toastify-toast-max-height);font-family:var(--toastify-font-family);z-index:0;display:flex;flex:1 auto;align-items:center;word-break:break-word}@media only screen and (max-width: 480px){.Toastify__toast-container{width:100vw;left:env(safe-area-inset-left);margin:0}.Toastify__toast-container--top-left,.Toastify__toast-container--top-center,.Toastify__toast-container--top-right{top:env(safe-area-inset-top);transform:translate(0)}.Toastify__toast-container--bottom-left,.Toastify__toast-container--bottom-center,.Toastify__toast-container--bottom-right{bottom:env(safe-area-inset-bottom);transform:translate(0)}.Toastify__toast-container--rtl{right:env(safe-area-inset-right);left:initial}.Toastify__toast{--toastify-toast-width: 100%;margin-bottom:0;border-radius:0}}.Toastify__toast-container[data-stacked=true]{width:var(--toastify-toast-width)}.Toastify__toast--stacked{position:absolute;width:100%;transform:translate3d(0,var(--y),0) scale(var(--s));transition:transform .3s}.Toastify__toast--stacked[data-collapsed] .Toastify__toast-body,.Toastify__toast--stacked[data-collapsed] .Toastify__close-button{transition:opacity .1s}.Toastify__toast--stacked[data-collapsed=false]{overflow:visible}.Toastify__toast--stacked[data-collapsed=true]:not(:last-child)>*{opacity:0}.Toastify__toast--stacked:after{content:"";position:absolute;left:0;right:0;height:calc(var(--g) * 1px);bottom:100%}.Toastify__toast--stacked[data-pos=top]{top:0}.Toastify__toast--stacked[data-pos=bot]{bottom:0}.Toastify__toast--stacked[data-pos=bot].Toastify__toast--stacked:before{transform-origin:top}.Toastify__toast--stacked[data-pos=top].Toastify__toast--stacked:before{transform-origin:bottom}.Toastify__toast--stacked:before{content:"";position:absolute;left:0;right:0;bottom:0;height:100%;transform:scaleY(3);z-index:-1}.Toastify__toast--rtl{direction:rtl}.Toastify__toast--close-on-click{cursor:pointer}.Toastify__toast-icon{margin-inline-end:10px;width:22px;flex-shrink:0;display:flex}.Toastify--animate{animation-fill-mode:both;animation-duration:.5s}.Toastify--animate-icon{animation-fill-mode:both;animation-duration:.3s}.Toastify__toast-theme--dark{background:var(--toastify-color-dark);color:var(--toastify-text-color-dark)}.Toastify__toast-theme--light,.Toastify__toast-theme--colored.Toastify__toast--default{background:var(--toastify-color-light);color:var(--toastify-text-color-light)}.Toastify__toast-theme--colored.Toastify__toast--info{color:var(--toastify-text-color-info);background:var(--toastify-color-info)}.Toastify__toast-theme--colored.Toastify__toast--success{color:var(--toastify-text-color-success);background:var(--toastify-color-success)}.Toastify__toast-theme--colored.Toastify__toast--warning{color:var(--toastify-text-color-warning);background:var(--toastify-color-warning)}.Toastify__toast-theme--colored.Toastify__toast--error{color:var(--toastify-text-color-error);background:var(--toastify-color-error)}.Toastify__progress-bar-theme--light{background:var(--toastify-color-progress-light)}.Toastify__progress-bar-theme--dark{background:var(--toastify-color-progress-dark)}.Toastify__progress-bar--info{background:var(--toastify-color-progress-info)}.Toastify__progress-bar--success{background:var(--toastify-color-progress-success)}.Toastify__progress-bar--warning{background:var(--toastify-color-progress-warning)}.Toastify__progress-bar--error{background:var(--toastify-color-progress-error)}.Toastify__progress-bar-theme--colored.Toastify__progress-bar--info,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--success,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--warning,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--error{background:var(--toastify-color-transparent)}.Toastify__close-button{color:#fff;position:absolute;top:6px;right:6px;background:transparent;outline:none;border:none;padding:0;cursor:pointer;opacity:.7;transition:.3s ease;z-index:1}.Toastify__toast--rtl .Toastify__close-button{left:6px;right:unset}.Toastify__close-button--light{color:#000;opacity:.3}.Toastify__close-button>svg{fill:currentColor;height:16px;width:14px}.Toastify__close-button:hover,.Toastify__close-button:focus{opacity:1}@keyframes Toastify__trackProgress{0%{transform:scaleX(1)}to{transform:scaleX(0)}}.Toastify__progress-bar{position:absolute;bottom:0;left:0;width:100%;height:100%;z-index:1;opacity:.7;transform-origin:left}.Toastify__progress-bar--animated{animation:Toastify__trackProgress linear 1 forwards}.Toastify__progress-bar--controlled{transition:transform .2s}.Toastify__progress-bar--rtl{right:0;left:initial;transform-origin:right;border-bottom-left-radius:initial}.Toastify__progress-bar--wrp{position:absolute;overflow:hidden;bottom:0;left:0;width:100%;height:5px;border-bottom-left-radius:var(--toastify-toast-bd-radius);border-bottom-right-radius:var(--toastify-toast-bd-radius)}.Toastify__progress-bar--wrp[data-hidden=true]{opacity:0}.Toastify__progress-bar--bg{opacity:var(--toastify-color-progress-bgo);width:100%;height:100%}.Toastify__spinner{width:20px;height:20px;box-sizing:border-box;border:2px solid;border-radius:100%;border-color:var(--toastify-spinner-color-empty-area);border-right-color:var(--toastify-spinner-color);animation:Toastify__spin .65s linear infinite}@keyframes Toastify__bounceInRight{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(3000px,0,0)}60%{opacity:1;transform:translate3d(-25px,0,0)}75%{transform:translate3d(10px,0,0)}90%{transform:translate3d(-5px,0,0)}to{transform:none}}@keyframes Toastify__bounceOutRight{20%{opacity:1;transform:translate3d(-20px,var(--y),0)}to{opacity:0;transform:translate3d(2000px,var(--y),0)}}@keyframes Toastify__bounceInLeft{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(-3000px,0,0)}60%{opacity:1;transform:translate3d(25px,0,0)}75%{transform:translate3d(-10px,0,0)}90%{transform:translate3d(5px,0,0)}to{transform:none}}@keyframes Toastify__bounceOutLeft{20%{opacity:1;transform:translate3d(20px,var(--y),0)}to{opacity:0;transform:translate3d(-2000px,var(--y),0)}}@keyframes Toastify__bounceInUp{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,3000px,0)}60%{opacity:1;transform:translate3d(0,-20px,0)}75%{transform:translate3d(0,10px,0)}90%{transform:translate3d(0,-5px,0)}to{transform:translateZ(0)}}@keyframes Toastify__bounceOutUp{20%{transform:translate3d(0,calc(var(--y) - 10px),0)}40%,45%{opacity:1;transform:translate3d(0,calc(var(--y) + 20px),0)}to{opacity:0;transform:translate3d(0,-2000px,0)}}@keyframes Toastify__bounceInDown{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,-3000px,0)}60%{opacity:1;transform:translate3d(0,25px,0)}75%{transform:translate3d(0,-10px,0)}90%{transform:translate3d(0,5px,0)}to{transform:none}}@keyframes Toastify__bounceOutDown{20%{transform:translate3d(0,calc(var(--y) - 10px),0)}40%,45%{opacity:1;transform:translate3d(0,calc(var(--y) + 20px),0)}to{opacity:0;transform:translate3d(0,2000px,0)}}.Toastify__bounce-enter--top-left,.Toastify__bounce-enter--bottom-left{animation-name:Toastify__bounceInLeft}.Toastify__bounce-enter--top-right,.Toastify__bounce-enter--bottom-right{animation-name:Toastify__bounceInRight}.Toastify__bounce-enter--top-center{animation-name:Toastify__bounceInDown}.Toastify__bounce-enter--bottom-center{animation-name:Toastify__bounceInUp}.Toastify__bounce-exit--top-left,.Toastify__bounce-exit--bottom-left{animation-name:Toastify__bounceOutLeft}.Toastify__bounce-exit--top-right,.Toastify__bounce-exit--bottom-right{animation-name:Toastify__bounceOutRight}.Toastify__bounce-exit--top-center{animation-name:Toastify__bounceOutUp}.Toastify__bounce-exit--bottom-center{animation-name:Toastify__bounceOutDown}@keyframes Toastify__zoomIn{0%{opacity:0;transform:scale3d(.3,.3,.3)}50%{opacity:1}}@keyframes Toastify__zoomOut{0%{opacity:1}50%{opacity:0;transform:translate3d(0,var(--y),0) scale3d(.3,.3,.3)}to{opacity:0}}.Toastify__zoom-enter{animation-name:Toastify__zoomIn}.Toastify__zoom-exit{animation-name:Toastify__zoomOut}@keyframes Toastify__flipIn{0%{transform:perspective(400px) rotateX(90deg);animation-timing-function:ease-in;opacity:0}40%{transform:perspective(400px) rotateX(-20deg);animation-timing-function:ease-in}60%{transform:perspective(400px) rotateX(10deg);opacity:1}80%{transform:perspective(400px) rotateX(-5deg)}to{transform:perspective(400px)}}@keyframes Toastify__flipOut{0%{transform:translate3d(0,var(--y),0) perspective(400px)}30%{transform:translate3d(0,var(--y),0) perspective(400px) rotateX(-20deg);opacity:1}to{transform:translate3d(0,var(--y),0) perspective(400px) rotateX(90deg);opacity:0}}.Toastify__flip-enter{animation-name:Toastify__flipIn}.Toastify__flip-exit{animation-name:Toastify__flipOut}@keyframes Toastify__slideInRight{0%{transform:translate3d(110%,0,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInLeft{0%{transform:translate3d(-110%,0,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInUp{0%{transform:translate3d(0,110%,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInDown{0%{transform:translate3d(0,-110%,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideOutRight{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(110%,var(--y),0)}}@keyframes Toastify__slideOutLeft{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(-110%,var(--y),0)}}@keyframes Toastify__slideOutDown{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(0,500px,0)}}@keyframes Toastify__slideOutUp{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(0,-500px,0)}}.Toastify__slide-enter--top-left,.Toastify__slide-enter--bottom-left{animation-name:Toastify__slideInLeft}.Toastify__slide-enter--top-right,.Toastify__slide-enter--bottom-right{animation-name:Toastify__slideInRight}.Toastify__slide-enter--top-center{animation-name:Toastify__slideInDown}.Toastify__slide-enter--bottom-center{animation-name:Toastify__slideInUp}.Toastify__slide-exit--top-left,.Toastify__slide-exit--bottom-left{animation-name:Toastify__slideOutLeft;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--top-right,.Toastify__slide-exit--bottom-right{animation-name:Toastify__slideOutRight;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--top-center{animation-name:Toastify__slideOutUp;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--bottom-center{animation-name:Toastify__slideOutDown;animation-timing-function:ease-in;animation-duration:.3s}@keyframes Toastify__spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}
`);var Ms=e=>typeof e=="number"&&!isNaN(e),Eo=e=>typeof e=="string",cr=e=>typeof e=="function",a5=e=>Eo(e)||Ms(e),Zh=e=>Eo(e)||cr(e)?e:null,s5=(e,t)=>e===!1||Ms(e)&&e>0?e:t,Jh=e=>x.isValidElement(e)||Eo(e)||cr(e)||Ms(e);function l5(e,t,n=300){let{scrollHeight:r,style:o}=e;requestAnimationFrame(()=>{o.minHeight="initial",o.height=r+"px",o.transition=`all ${n}ms`,requestAnimationFrame(()=>{o.height="0",o.padding="0",o.margin="0",setTimeout(t,n)})})}function c5({enter:e,exit:t,appendPosition:n=!1,collapse:r=!0,collapseDuration:o=300}){return function({children:i,position:a,preventExitTransition:l,done:s,nodeRef:c,isIn:d,playToast:f}){let m=n?`${e}--${a}`:e,p=n?`${t}--${a}`:t,h=x.useRef(0);return x.useLayoutEffect(()=>{let y=c.current,b=m.split(" "),g=v=>{v.target===c.current&&(f(),y.removeEventListener("animationend",g),y.removeEventListener("animationcancel",g),h.current===0&&v.type!=="animationcancel"&&y.classList.remove(...b))};y.classList.add(...b),y.addEventListener("animationend",g),y.addEventListener("animationcancel",g)},[]),x.useEffect(()=>{let y=c.current,b=()=>{y.removeEventListener("animationend",b),r?l5(y,s,o):s()};d||(l?b():(h.current=1,y.className+=` ${p}`,y.addEventListener("animationend",b)))},[d]),Z.createElement(Z.Fragment,null,i)}}function Ry(e,t){return{content:Z2(e.content,e.props),containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,reason:e.removalReason,status:t}}function Z2(e,t,n=!1){return x.isValidElement(e)&&!Eo(e.type)?x.cloneElement(e,{closeToast:t.closeToast,toastProps:t,data:t.data,isPaused:n}):cr(e)?e({closeToast:t.closeToast,toastProps:t,data:t.data,isPaused:n}):e}function u5({closeToast:e,theme:t,ariaLabel:n="close"}){return Z.createElement("button",{className:`Toastify__close-button Toastify__close-button--${t}`,type:"button",onClick:r=>{r.stopPropagation(),e(!0)},"aria-label":n},Z.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},Z.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function d5({delay:e,isRunning:t,closeToast:n,type:r="default",hide:o,className:i,controlledProgress:a,progress:l,rtl:s,isIn:c,theme:d}){let f=o||a&&l===0,m={animationDuration:`${e}ms`,animationPlayState:t?"running":"paused"};a&&(m.transform=`scaleX(${l})`);let p=mo("Toastify__progress-bar",a?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${d}`,`Toastify__progress-bar--${r}`,{"Toastify__progress-bar--rtl":s}),h=cr(i)?i({rtl:s,type:r,defaultClassName:p}):mo(p,i),y={[a&&l>=1?"onTransitionEnd":"onAnimationEnd"]:a&&l<1?null:()=>{c&&n()}};return Z.createElement("div",{className:"Toastify__progress-bar--wrp","data-hidden":f},Z.createElement("div",{className:`Toastify__progress-bar--bg Toastify__progress-bar-theme--${d} Toastify__progress-bar--${r}`}),Z.createElement("div",{role:"progressbar","aria-hidden":f?"true":"false","aria-label":"notification timer",className:h,style:m,...y}))}var f5=1,J2=()=>`${f5++}`;function p5(e,t,n){let r=1,o=0,i=[],a=[],l=t,s=new Map,c=new Set,d=v=>(c.add(v),()=>c.delete(v)),f=()=>{a=Array.from(s.values()),c.forEach(v=>v())},m=({containerId:v,toastId:w,updateId:E})=>{let S=v?v!==e:e!==1,P=s.has(w)&&E==null;return S||P},p=(v,w)=>{s.forEach(E=>{var S;(w==null||w===E.props.toastId)&&((S=E.toggle)==null||S.call(E,v))})},h=v=>{var w,E;(E=(w=v.props)==null?void 0:w.onClose)==null||E.call(w,v.removalReason),v.isActive=!1},y=v=>{if(v==null)s.forEach(h);else{let w=s.get(v);w&&h(w)}f()},b=()=>{o-=i.length,i=[]},g=v=>{var w,E;let{toastId:S,updateId:P}=v.props,k=P==null;v.staleId&&s.delete(v.staleId),v.isActive=!0,s.set(S,v),f(),n(Ry(v,k?"added":"updated")),k&&((E=(w=v.props).onOpen)==null||E.call(w))};return{id:e,props:l,observe:d,toggle:p,removeToast:y,toasts:s,clearQueue:b,buildToast:(v,w)=>{if(m(w))return;let{toastId:E,updateId:S,data:P,staleId:k,delay:_}=w,T=S==null;T&&o++;let $={...l,style:l.toastStyle,key:r++,...Object.fromEntries(Object.entries(w).filter(([M,j])=>j!=null)),toastId:E,updateId:S,data:P,isIn:!1,className:Zh(w.className||l.toastClassName),progressClassName:Zh(w.progressClassName||l.progressClassName),autoClose:w.isLoading?!1:s5(w.autoClose,l.autoClose),closeToast(M){s.get(E).removalReason=M,y(E)},deleteToast(){let M=s.get(E);if(M!=null){if(n(Ry(M,"removed")),s.delete(E),o--,o<0&&(o=0),i.length>0){g(i.shift());return}f()}}};$.closeButton=l.closeButton,w.closeButton===!1||Jh(w.closeButton)?$.closeButton=w.closeButton:w.closeButton===!0&&($.closeButton=Jh(l.closeButton)?l.closeButton:!0);let I={content:v,props:$,staleId:k};l.limit&&l.limit>0&&o>l.limit&&T?i.push(I):Ms(_)?setTimeout(()=>{g(I)},_):g(I)},setProps(v){l=v},setToggle:(v,w)=>{let E=s.get(v);E&&(E.toggle=w)},isToastActive:v=>{var w;return(w=s.get(v))==null?void 0:w.isActive},getSnapshot:()=>a}}var bt=new Map,gs=[],em=new Set,h5=e=>em.forEach(t=>t(e)),eE=()=>bt.size>0;function m5(){gs.forEach(e=>nE(e.content,e.options)),gs=[]}var g5=(e,{containerId:t})=>{var n;return(n=bt.get(t||1))==null?void 0:n.toasts.get(e)};function tE(e,t){var n;if(t)return!!((n=bt.get(t))!=null&&n.isToastActive(e));let r=!1;return bt.forEach(o=>{o.isToastActive(e)&&(r=!0)}),r}function v5(e){if(!eE()){gs=gs.filter(t=>e!=null&&t.options.toastId!==e);return}if(e==null||a5(e))bt.forEach(t=>{t.removeToast(e)});else if(e&&("containerId"in e||"id"in e)){let t=bt.get(e.containerId);t?t.removeToast(e.id):bt.forEach(n=>{n.removeToast(e.id)})}}var y5=(e={})=>{bt.forEach(t=>{t.props.limit&&(!e.containerId||t.id===e.containerId)&&t.clearQueue()})};function nE(e,t){Jh(e)&&(eE()||gs.push({content:e,options:t}),bt.forEach(n=>{n.buildToast(e,t)}))}function x5(e){var t;(t=bt.get(e.containerId||1))==null||t.setToggle(e.id,e.fn)}function rE(e,t){bt.forEach(n=>{(t==null||!(t!=null&&t.containerId)||(t==null?void 0:t.containerId)===n.id)&&n.toggle(e,t==null?void 0:t.id)})}function b5(e){let t=e.containerId||1;return{subscribe(n){let r=p5(t,e,h5);bt.set(t,r);let o=r.observe(n);return m5(),()=>{o(),bt.delete(t)}},setProps(n){var r;(r=bt.get(t))==null||r.setProps(n)},getSnapshot(){var n;return(n=bt.get(t))==null?void 0:n.getSnapshot()}}}function w5(e){return em.add(e),()=>{em.delete(e)}}function S5(e){return e&&(Eo(e.toastId)||Ms(e.toastId))?e.toastId:J2()}function As(e,t){return nE(e,t),t.toastId}function Hu(e,t){return{...t,type:t&&t.type||e,toastId:S5(t)}}function Gu(e){return(t,n)=>As(t,Hu(e,n))}function K(e,t){return As(e,Hu("default",t))}K.loading=(e,t)=>As(e,Hu("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...t}));function E5(e,{pending:t,error:n,success:r},o){let i;t&&(i=Eo(t)?K.loading(t,o):K.loading(t.render,{...o,...t}));let a={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},l=(c,d,f)=>{if(d==null){K.dismiss(i);return}let m={type:c,...a,...o,data:f},p=Eo(d)?{render:d}:d;return i?K.update(i,{...m,...p}):K(p.render,{...m,...p}),f},s=cr(e)?e():e;return s.then(c=>l("success",r,c)).catch(c=>l("error",n,c)),s}K.promise=E5;K.success=Gu("success");K.info=Gu("info");K.error=Gu("error");K.warning=Gu("warning");K.warn=K.warning;K.dark=(e,t)=>As(e,Hu("default",{theme:"dark",...t}));function C5(e){v5(e)}K.dismiss=C5;K.clearWaitingQueue=y5;K.isActive=tE;K.update=(e,t={})=>{let n=g5(e,t);if(n){let{props:r,content:o}=n,i={delay:100,...r,...t,toastId:t.toastId||e,updateId:J2()};i.toastId!==e&&(i.staleId=e);let a=i.render||o;delete i.render,As(a,i)}};K.done=e=>{K.update(e,{progress:1})};K.onChange=w5;K.play=e=>rE(!0,e);K.pause=e=>rE(!1,e);function _5(e){var t;let{subscribe:n,getSnapshot:r,setProps:o}=x.useRef(b5(e)).current;o(e);let i=(t=x.useSyncExternalStore(n,r,r))==null?void 0:t.slice();function a(l){if(!i)return[];let s=new Map;return e.newestOnTop&&i.reverse(),i.forEach(c=>{let{position:d}=c.props;s.has(d)||s.set(d,[]),s.get(d).push(c)}),Array.from(s,c=>l(c[0],c[1]))}return{getToastToRender:a,isToastActive:tE,count:i==null?void 0:i.length}}function k5(e){let[t,n]=x.useState(!1),[r,o]=x.useState(!1),i=x.useRef(null),a=x.useRef({start:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,didMove:!1}).current,{autoClose:l,pauseOnHover:s,closeToast:c,onClick:d,closeOnClick:f}=e;x5({id:e.toastId,containerId:e.containerId,fn:n}),x.useEffect(()=>{if(e.pauseOnFocusLoss)return m(),()=>{p()}},[e.pauseOnFocusLoss]);function m(){document.hasFocus()||g(),window.addEventListener("focus",b),window.addEventListener("blur",g)}function p(){window.removeEventListener("focus",b),window.removeEventListener("blur",g)}function h(k){if(e.draggable===!0||e.draggable===k.pointerType){v();let _=i.current;a.canCloseOnClick=!0,a.canDrag=!0,_.style.transition="none",e.draggableDirection==="x"?(a.start=k.clientX,a.removalDistance=_.offsetWidth*(e.draggablePercent/100)):(a.start=k.clientY,a.removalDistance=_.offsetHeight*(e.draggablePercent===80?e.draggablePercent*1.5:e.draggablePercent)/100)}}function y(k){let{top:_,bottom:T,left:$,right:I}=i.current.getBoundingClientRect();k.nativeEvent.type!=="touchend"&&e.pauseOnHover&&k.clientX>=$&&k.clientX<=I&&k.clientY>=_&&k.clientY<=T?g():b()}function b(){n(!0)}function g(){n(!1)}function v(){a.didMove=!1,document.addEventListener("pointermove",E),document.addEventListener("pointerup",S)}function w(){document.removeEventListener("pointermove",E),document.removeEventListener("pointerup",S)}function E(k){let _=i.current;if(a.canDrag&&_){a.didMove=!0,t&&g(),e.draggableDirection==="x"?a.delta=k.clientX-a.start:a.delta=k.clientY-a.start,a.start!==k.clientX&&(a.canCloseOnClick=!1);let T=e.draggableDirection==="x"?`${a.delta}px, var(--y)`:`0, calc(${a.delta}px + var(--y))`;_.style.transform=`translate3d(${T},0)`,_.style.opacity=`${1-Math.abs(a.delta/a.removalDistance)}`}}function S(){w();let k=i.current;if(a.canDrag&&a.didMove&&k){if(a.canDrag=!1,Math.abs(a.delta)>a.removalDistance){o(!0),e.closeToast(!0),e.collapseAll();return}k.style.transition="transform 0.2s, opacity 0.2s",k.style.removeProperty("transform"),k.style.removeProperty("opacity")}}let P={onPointerDown:h,onPointerUp:y};return l&&s&&(P.onMouseEnter=g,e.stacked||(P.onMouseLeave=b)),f&&(P.onClick=k=>{d&&d(k),a.canCloseOnClick&&c(!0)}),{playToast:b,pauseToast:g,isRunning:t,preventExitTransition:r,toastRef:i,eventHandlers:P}}var P5=typeof window<"u"?x.useLayoutEffect:x.useEffect,qu=({theme:e,type:t,isLoading:n,...r})=>Z.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:e==="colored"?"currentColor":`var(--toastify-icon-color-${t})`,...r});function O5(e){return Z.createElement(qu,{...e},Z.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))}function T5(e){return Z.createElement(qu,{...e},Z.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))}function j5(e){return Z.createElement(qu,{...e},Z.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))}function $5(e){return Z.createElement(qu,{...e},Z.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))}function I5(){return Z.createElement("div",{className:"Toastify__spinner"})}var tm={info:T5,warning:O5,success:j5,error:$5,spinner:I5},M5=e=>e in tm;function A5({theme:e,type:t,isLoading:n,icon:r}){let o=null,i={theme:e,type:t};return r===!1||(cr(r)?o=r({...i,isLoading:n}):x.isValidElement(r)?o=x.cloneElement(r,i):n?o=tm.spinner():M5(t)&&(o=tm[t](i))),o}var D5=e=>{let{isRunning:t,preventExitTransition:n,toastRef:r,eventHandlers:o,playToast:i}=k5(e),{closeButton:a,children:l,autoClose:s,onClick:c,type:d,hideProgressBar:f,closeToast:m,transition:p,position:h,className:y,style:b,progressClassName:g,updateId:v,role:w,progress:E,rtl:S,toastId:P,deleteToast:k,isIn:_,isLoading:T,closeOnClick:$,theme:I,ariaLabel:M}=e,j=mo("Toastify__toast",`Toastify__toast-theme--${I}`,`Toastify__toast--${d}`,{"Toastify__toast--rtl":S},{"Toastify__toast--close-on-click":$}),R=cr(y)?y({rtl:S,position:h,type:d,defaultClassName:j}):mo(j,y),D=A5(e),F=!!E||!s,L={closeToast:m,type:d,theme:I},O=null;return a===!1||(cr(a)?O=a(L):x.isValidElement(a)?O=x.cloneElement(a,L):O=u5(L)),Z.createElement(p,{isIn:_,done:k,position:h,preventExitTransition:n,nodeRef:r,playToast:i},Z.createElement("div",{id:P,tabIndex:0,onClick:c,"data-in":_,className:R,...o,style:b,ref:r,..._&&{role:w,"aria-label":M}},D!=null&&Z.createElement("div",{className:mo("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!T})},D),Z2(l,e,!t),O,!e.customProgressBar&&Z.createElement(d5,{...v&&!F?{key:`p-${v}`}:{},rtl:S,theme:I,delay:s,isRunning:t,isIn:_,closeToast:m,hide:f,type:d,className:g,controlledProgress:F,progress:E||0})))},L5=(e,t=!1)=>({enter:`Toastify--animate Toastify__${e}-enter`,exit:`Toastify--animate Toastify__${e}-exit`,appendPosition:t}),R5=c5(L5("bounce",!0)),F5={position:"top-right",transition:R5,autoClose:5e3,closeButton:!0,pauseOnHover:!0,pauseOnFocusLoss:!0,draggable:"touch",draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light","aria-label":"Notifications Alt+T",hotKeys:e=>e.altKey&&e.code==="KeyT"};function Un(e){let t={...F5,...e},n=e.stacked,[r,o]=x.useState(!0),i=x.useRef(null),{getToastToRender:a,isToastActive:l,count:s}=_5(t),{className:c,style:d,rtl:f,containerId:m,hotKeys:p}=t;function h(b){let g=mo("Toastify__toast-container",`Toastify__toast-container--${b}`,{"Toastify__toast-container--rtl":f});return cr(c)?c({position:b,rtl:f,defaultClassName:g}):mo(g,Zh(c))}function y(){n&&(o(!0),K.play())}return P5(()=>{var b;if(n){let g=i.current.querySelectorAll('[data-in="true"]'),v=12,w=(b=t.position)==null?void 0:b.includes("top"),E=0,S=0;Array.from(g).reverse().forEach((P,k)=>{let _=P;_.classList.add("Toastify__toast--stacked"),k>0&&(_.dataset.collapsed=`${r}`),_.dataset.pos||(_.dataset.pos=w?"top":"bot");let T=E*(r?.2:1)+(r?0:v*k);_.style.setProperty("--y",`${w?T:T*-1}px`),_.style.setProperty("--g",`${v}`),_.style.setProperty("--s",`${1-(r?S:0)}`),E+=_.offsetHeight,S+=.025})}},[r,s,n]),x.useEffect(()=>{function b(g){var v;let w=i.current;p(g)&&((v=w.querySelector('[tabIndex="0"]'))==null||v.focus(),o(!1),K.pause()),g.key==="Escape"&&(document.activeElement===w||w!=null&&w.contains(document.activeElement))&&(o(!0),K.play())}return document.addEventListener("keydown",b),()=>{document.removeEventListener("keydown",b)}},[p]),Z.createElement("section",{ref:i,className:"Toastify",id:m,onMouseEnter:()=>{n&&(o(!1),K.pause())},onMouseLeave:y,"aria-live":"polite","aria-atomic":"false","aria-relevant":"additions text","aria-label":t["aria-label"]},a((b,g)=>{let v=g.length?{...d}:{...d,pointerEvents:"none"};return Z.createElement("div",{tabIndex:-1,className:h(b),"data-stacked":n,style:v,key:`c-${b}`},g.map(({content:w,props:E})=>Z.createElement(D5,{...E,stacked:n,collapseAll:y,isIn:l(E.toastId,E.containerId),key:`t-${E.key}`},w)))}))}const ur="/Didiv/assets/nofoto-2f8d9d99.png",z5=C.div`
`,N5=C.div`
display: flex;
    justify-content: space-between;
    align-items: center;
        margin-bottom: 10px;

    
`,B5=C.h2`
  text-align: center;
  font-size:34px;
  font-weight:600px;
      margin-right: auto;
    margin-left: auto;
     
          @media screen and (min-width: 768px) {
 margin-right: 0;
    margin-left: 0;
    padding-left:30px;
   font-size:40px;
  }
       @media screen and (min-width: 890px) {
 
  }

`,V5=C.div`
width: 100vw;
height:30vw;

  @media screen and (min-width: 768px) {
   width: 60vw; 

  height: 80vw;
  }
   @media screen and (min-width: 1200px) {
     width: 80vw; 
   max-width: 1155px;
  height:40vw;
  }
      
`;C.div``;const W5=C.div`
  flex: 1;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
 align-items: stretch;
  gap: 24px;
  width: 100%;
  max-width: 750px;


  @media screen and (max-width: 768px) {
    width: 100%;
    max-width: 750px;

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
`,U5=C.div`
display: flex;        
  flex-direction: column;
  position: relative;
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
 ${({$soldOut:e})=>e&&`
      opacity: 0.55;
      filter: grayscale(100%);
    `}

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
`,oE=C.div`
  position: relative;
  display: block;
 `,Yu=C.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;

  padding: 8px 16px;
  border-radius: 6px;

  background: rgba(0, 0, 0, 0.75);
  color: white;

  font-size: 18px;
  font-weight: 700;
  text-transform: uppercase;
  white-space: nowrap;
`,Xg=C.div`
    font-family: var(--second-font);
  position: absolute;
  top: 20px;
  right: 20px; 
 font-size: 11px;
 font-weight: 500;
  text-transform: uppercase;
  padding: 4px 10px;
  border-radius: 20px; 
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.344);
  background: var(--red-color);
  color: #fff;
  z-index: 10;
  @media screen and (max-width: 480px) {
    font-size: 10px;
    padding: 3px 8px;
    top: 15px;
  right: 15px;
  }
`,Kg=C.div`
    font-family: var(--second-font);
 position: absolute;
top: 20px;
  left: 20px; 
  background-color:var( --orange-color); 
  color: white;
  font-size: 11px;
  font-weight: 500;
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
    top: 15px;
    left: 15px;
  }
`,H5=C.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  padding:10px;
`,G5=C.div`
margin-top: auto;
  padding: 10px;
      display: flex;
    align-content: center;
    align-items: center;
        justify-content: space-between;
`,q5=C.p`
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
`;C.p`
     font-size: 17px;
    font-weight: 800;

`;const iE=C.div.attrs({className:"card-buttons"})`
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
`,Uc=C.button`
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
`;C.svg`
  width: 24px;
  height: 24px;
  fill: var(--white-color);
`;C.svg`
  width: 24px;
  height: 24px;
  fill: var(--white-color);
`;const Y5=C.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  flex-wrap: wrap;
  gap: 5px;
`,Ff=C.button`
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
`,X5=C.div`
  position: relative;
  display: inline-block;
   @media screen and (max-width: 768px) {
  display:none;
  }

`,K5=C.button`
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
`,Q5=C.div`
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
`,zo=C.div`
  padding: 10px 12px;
  cursor: pointer;

  &:hover {
    background: #f0f0f0;
  }
`,aE=C.div`
  text-align: center;
  width: 100px;
 
`,sE=C.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 2px;
`,lE=C.span`
  font-size: 18px;
  font-weight: 600;
  color: ${({$discount:e})=>"#111"};
`,cE=C.span`
  font-size: 13px;
  color: #999;
  text-decoration: line-through;
`,uE=C.span`
  position: absolute;
  top: -10px;
  right: -10px;

  font-size: 10px;
  font-weight: 700;
  line-height: 1;

  color: #fff;
  background:var(--red-color);

  padding: 2px 4px;
  border-radius: 6px;

  white-space: nowrap;
`;function rt(e){return`Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}var Z5=(()=>typeof Symbol=="function"&&Symbol.observable||"@@observable")(),Fy=Z5,zf=()=>Math.random().toString(36).substring(7).split("").join("."),J5={INIT:`@@redux/INIT${zf()}`,REPLACE:`@@redux/REPLACE${zf()}`,PROBE_UNKNOWN_ACTION:()=>`@@redux/PROBE_UNKNOWN_ACTION${zf()}`},Hc=J5;function Qg(e){if(typeof e!="object"||e===null)return!1;let t=e;for(;Object.getPrototypeOf(t)!==null;)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t||Object.getPrototypeOf(e)===null}function Zg(e,t,n){if(typeof e!="function")throw new Error(rt(2));if(typeof t=="function"&&typeof n=="function"||typeof n=="function"&&typeof arguments[3]=="function")throw new Error(rt(0));if(typeof t=="function"&&typeof n>"u"&&(n=t,t=void 0),typeof n<"u"){if(typeof n!="function")throw new Error(rt(1));return n(Zg)(e,t)}let r=e,o=t,i=new Map,a=i,l=0,s=!1;function c(){a===i&&(a=new Map,i.forEach((b,g)=>{a.set(g,b)}))}function d(){if(s)throw new Error(rt(3));return o}function f(b){if(typeof b!="function")throw new Error(rt(4));if(s)throw new Error(rt(5));let g=!0;c();const v=l++;return a.set(v,b),function(){if(g){if(s)throw new Error(rt(6));g=!1,c(),a.delete(v),i=null}}}function m(b){if(!Qg(b))throw new Error(rt(7));if(typeof b.type>"u")throw new Error(rt(8));if(typeof b.type!="string")throw new Error(rt(17));if(s)throw new Error(rt(9));try{s=!0,o=r(o,b)}finally{s=!1}return(i=a).forEach(v=>{v()}),b}function p(b){if(typeof b!="function")throw new Error(rt(10));r=b,m({type:Hc.REPLACE})}function h(){const b=f;return{subscribe(g){if(typeof g!="object"||g===null)throw new Error(rt(11));function v(){const E=g;E.next&&E.next(d())}return v(),{unsubscribe:b(v)}},[Fy](){return this}}}return m({type:Hc.INIT}),{dispatch:m,subscribe:f,getState:d,replaceReducer:p,[Fy]:h}}function eI(e){Object.keys(e).forEach(t=>{const n=e[t];if(typeof n(void 0,{type:Hc.INIT})>"u")throw new Error(rt(12));if(typeof n(void 0,{type:Hc.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(rt(13))})}function tI(e){const t=Object.keys(e),n={};for(let i=0;i<t.length;i++){const a=t[i];typeof e[a]=="function"&&(n[a]=e[a])}const r=Object.keys(n);let o;try{eI(n)}catch(i){o=i}return function(a={},l){if(o)throw o;let s=!1;const c={};for(let d=0;d<r.length;d++){const f=r[d],m=n[f],p=a[f],h=m(p,l);if(typeof h>"u")throw l&&l.type,new Error(rt(14));c[f]=h,s=s||h!==p}return s=s||r.length!==Object.keys(a).length,s?c:a}}function Gc(...e){return e.length===0?t=>t:e.length===1?e[0]:e.reduce((t,n)=>(...r)=>t(n(...r)))}function nI(...e){return t=>(n,r)=>{const o=t(n,r);let i=()=>{throw new Error(rt(15))};const a={getState:o.getState,dispatch:(s,...c)=>i(s,...c)},l=e.map(s=>s(a));return i=Gc(...l)(o.dispatch),{...o,dispatch:i}}}function rI(e){return Qg(e)&&"type"in e&&typeof e.type=="string"}var dE=Symbol.for("immer-nothing"),zy=Symbol.for("immer-draftable"),St=Symbol.for("immer-state");function mn(e,...t){throw new Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)}var Vt=Object,$i=Vt.getPrototypeOf,qc="constructor",Xu="prototype",nm="configurable",Yc="enumerable",Ql="writable",vs="value",dr=e=>!!e&&!!e[St];function Sn(e){var t;return e?fE(e)||Qu(e)||!!e[zy]||!!((t=e[qc])!=null&&t[zy])||Zu(e)||Ju(e):!1}var oI=Vt[Xu][qc].toString(),Ny=new WeakMap;function fE(e){if(!e||!Jg(e))return!1;const t=$i(e);if(t===null||t===Vt[Xu])return!0;const n=Vt.hasOwnProperty.call(t,qc)&&t[qc];if(n===Object)return!0;if(!Xo(n))return!1;let r=Ny.get(n);return r===void 0&&(r=Function.toString.call(n),Ny.set(n,r)),r===oI}function Ku(e,t,n=!0){Ds(e)===0?(n?Reflect.ownKeys(e):Vt.keys(e)).forEach(o=>{t(o,e[o],e)}):e.forEach((r,o)=>t(o,r,e))}function Ds(e){const t=e[St];return t?t.type_:Qu(e)?1:Zu(e)?2:Ju(e)?3:0}var By=(e,t,n=Ds(e))=>n===2?e.has(t):Vt[Xu].hasOwnProperty.call(e,t),rm=(e,t,n=Ds(e))=>n===2?e.get(t):e[t],Xc=(e,t,n,r=Ds(e))=>{r===2?e.set(t,n):r===3?e.add(n):e[t]=n};function iI(e,t){return e===t?e!==0||1/e===1/t:e!==e&&t!==t}var Qu=Array.isArray,Zu=e=>e instanceof Map,Ju=e=>e instanceof Set,Jg=e=>typeof e=="object",Xo=e=>typeof e=="function",Nf=e=>typeof e=="boolean";function aI(e){const t=+e;return Number.isInteger(t)&&String(t)===e}var Zn=e=>e.copy_||e.base_,e0=e=>e.modified_?e.copy_:e.base_;function om(e,t){if(Zu(e))return new Map(e);if(Ju(e))return new Set(e);if(Qu(e))return Array[Xu].slice.call(e);const n=fE(e);if(t===!0||t==="class_only"&&!n){const r=Vt.getOwnPropertyDescriptors(e);delete r[St];let o=Reflect.ownKeys(r);for(let i=0;i<o.length;i++){const a=o[i],l=r[a];l[Ql]===!1&&(l[Ql]=!0,l[nm]=!0),(l.get||l.set)&&(r[a]={[nm]:!0,[Ql]:!0,[Yc]:l[Yc],[vs]:e[a]})}return Vt.create($i(e),r)}else{const r=$i(e);if(r!==null&&n)return{...e};const o=Vt.create(r);return Vt.assign(o,e)}}function t0(e,t=!1){return ed(e)||dr(e)||!Sn(e)||(Ds(e)>1&&Vt.defineProperties(e,{set:ul,add:ul,clear:ul,delete:ul}),Vt.freeze(e),t&&Ku(e,(n,r)=>{t0(r,!0)},!1)),e}function sI(){mn(2)}var ul={[vs]:sI};function ed(e){return e===null||!Jg(e)?!0:Vt.isFrozen(e)}var Kc="MapSet",im="Patches",Vy="ArrayMethods",pE={};function Co(e){const t=pE[e];return t||mn(0,e),t}var Wy=e=>!!pE[e],ys,hE=()=>ys,lI=(e,t)=>({drafts_:[],parent_:e,immer_:t,canAutoFreeze_:!0,unfinalizedDrafts_:0,handledSet_:new Set,processedForPatches_:new Set,mapSetPlugin_:Wy(Kc)?Co(Kc):void 0,arrayMethodsPlugin_:Wy(Vy)?Co(Vy):void 0});function Uy(e,t){t&&(e.patchPlugin_=Co(im),e.patches_=[],e.inversePatches_=[],e.patchListener_=t)}function am(e){sm(e),e.drafts_.forEach(cI),e.drafts_=null}function sm(e){e===ys&&(ys=e.parent_)}var Hy=e=>ys=lI(ys,e);function cI(e){const t=e[St];t.type_===0||t.type_===1?t.revoke_():t.revoked_=!0}function Gy(e,t){t.unfinalizedDrafts_=t.drafts_.length;const n=t.drafts_[0];if(e!==void 0&&e!==n){n[St].modified_&&(am(t),mn(4)),Sn(e)&&(e=qy(t,e));const{patchPlugin_:o}=t;o&&o.generateReplacementPatches_(n[St].base_,e,t)}else e=qy(t,n);return uI(t,e,!0),am(t),t.patches_&&t.patchListener_(t.patches_,t.inversePatches_),e!==dE?e:void 0}function qy(e,t){if(ed(t))return t;const n=t[St];if(!n)return Qc(t,e.handledSet_,e);if(!td(n,e))return t;if(!n.modified_)return n.base_;if(!n.finalized_){const{callbacks_:r}=n;if(r)for(;r.length>0;)r.pop()(e);vE(n,e)}return n.copy_}function uI(e,t,n=!1){!e.parent_&&e.immer_.autoFreeze_&&e.canAutoFreeze_&&t0(t,n)}function mE(e){e.finalized_=!0,e.scope_.unfinalizedDrafts_--}var td=(e,t)=>e.scope_===t,dI=[];function gE(e,t,n,r){const o=Zn(e),i=e.type_;if(r!==void 0&&rm(o,r,i)===t){Xc(o,r,n,i);return}if(!e.draftLocations_){const l=e.draftLocations_=new Map;Ku(o,(s,c)=>{if(dr(c)){const d=l.get(c)||[];d.push(s),l.set(c,d)}})}const a=e.draftLocations_.get(t)??dI;for(const l of a)Xc(o,l,n,i)}function fI(e,t,n){e.callbacks_.push(function(o){var l;const i=t;if(!i||!td(i,o))return;(l=o.mapSetPlugin_)==null||l.fixSetContents(i);const a=e0(i);gE(e,i.draft_??i,a,n),vE(i,o)})}function vE(e,t){var r;if(e.modified_&&!e.finalized_&&(e.type_===3||e.type_===1&&e.allIndicesReassigned_||(((r=e.assigned_)==null?void 0:r.size)??0)>0)){const{patchPlugin_:o}=t;if(o){const i=o.getPath(e);i&&o.generatePatches_(e,i,t)}mE(e)}}function pI(e,t,n){const{scope_:r}=e;if(dr(n)){const o=n[St];td(o,r)&&o.callbacks_.push(function(){Zl(e);const a=e0(o);gE(e,n,a,t)})}else Sn(n)&&e.callbacks_.push(function(){const i=Zn(e);e.type_===3?i.has(n)&&Qc(n,r.handledSet_,r):rm(i,t,e.type_)===n&&r.drafts_.length>1&&(e.assigned_.get(t)??!1)===!0&&e.copy_&&Qc(rm(e.copy_,t,e.type_),r.handledSet_,r)})}function Qc(e,t,n){return!n.immer_.autoFreeze_&&n.unfinalizedDrafts_<1||dr(e)||t.has(e)||!Sn(e)||ed(e)||(t.add(e),Ku(e,(r,o)=>{if(dr(o)){const i=o[St];if(td(i,n)){const a=e0(i);Xc(e,r,a,e.type_),mE(i)}}else Sn(o)&&Qc(o,t,n)})),e}function hI(e,t){const n=Qu(e),r={type_:n?1:0,scope_:t?t.scope_:hE(),modified_:!1,finalized_:!1,assigned_:void 0,parent_:t,base_:e,draft_:null,copy_:null,revoke_:null,isManual_:!1,callbacks_:void 0};let o=r,i=Zc;n&&(o=[r],i=xs);const{revoke:a,proxy:l}=Proxy.revocable(o,i);return r.draft_=l,r.revoke_=a,[l,r]}var Zc={get(e,t){if(t===St)return e;let n=e.scope_.arrayMethodsPlugin_;const r=e.type_===1&&typeof t=="string";if(r&&n!=null&&n.isArrayOperationMethod(t))return n.createMethodInterceptor(e,t);const o=Zn(e);if(!By(o,t,e.type_))return mI(e,o,t);const i=o[t];if(e.finalized_||!Sn(i)||r&&e.operationMethod&&(n!=null&&n.isMutatingArrayMethod(e.operationMethod))&&aI(t))return i;if(i===Bf(e.base_,t)){Zl(e);const a=e.type_===1?+t:t,l=cm(e.scope_,i,e,a);return e.copy_[a]=l}return i},has(e,t){return t in Zn(e)},ownKeys(e){return Reflect.ownKeys(Zn(e))},set(e,t,n){const r=yE(Zn(e),t);if(r!=null&&r.set)return r.set.call(e.draft_,n),!0;if(!e.modified_){const o=Bf(Zn(e),t),i=o==null?void 0:o[St];if(i&&i.base_===n)return e.copy_[t]=n,e.assigned_.set(t,!1),!0;if(iI(n,o)&&(n!==void 0||By(e.base_,t,e.type_)))return!0;Zl(e),lm(e)}return e.copy_[t]===n&&(n!==void 0||t in e.copy_)||Number.isNaN(n)&&Number.isNaN(e.copy_[t])||(e.copy_[t]=n,e.assigned_.set(t,!0),pI(e,t,n)),!0},deleteProperty(e,t){return Zl(e),Bf(e.base_,t)!==void 0||t in e.base_?(e.assigned_.set(t,!1),lm(e)):e.assigned_.delete(t),e.copy_&&delete e.copy_[t],!0},getOwnPropertyDescriptor(e,t){const n=Zn(e),r=Reflect.getOwnPropertyDescriptor(n,t);return r&&{[Ql]:!0,[nm]:e.type_!==1||t!=="length",[Yc]:r[Yc],[vs]:n[t]}},defineProperty(){mn(11)},getPrototypeOf(e){return $i(e.base_)},setPrototypeOf(){mn(12)}},xs={};for(let e in Zc){let t=Zc[e];xs[e]=function(){const n=arguments;return n[0]=n[0][0],t.apply(this,n)}}xs.deleteProperty=function(e,t){return xs.set.call(this,e,t,void 0)};xs.set=function(e,t,n){return Zc.set.call(this,e[0],t,n,e[0])};function Bf(e,t){const n=e[St];return(n?Zn(n):e)[t]}function mI(e,t,n){var o;const r=yE(t,n);return r?vs in r?r[vs]:(o=r.get)==null?void 0:o.call(e.draft_):void 0}function yE(e,t){if(!(t in e))return;let n=$i(e);for(;n;){const r=Object.getOwnPropertyDescriptor(n,t);if(r)return r;n=$i(n)}}function lm(e){e.modified_||(e.modified_=!0,e.parent_&&lm(e.parent_))}function Zl(e){e.copy_||(e.assigned_=new Map,e.copy_=om(e.base_,e.scope_.immer_.useStrictShallowCopy_))}var gI=class{constructor(e){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.useStrictIteration_=!1,this.produce=(t,n,r)=>{if(Xo(t)&&!Xo(n)){const i=n;n=t;const a=this;return function(s=i,...c){return a.produce(s,d=>n.call(this,d,...c))}}Xo(n)||mn(6),r!==void 0&&!Xo(r)&&mn(7);let o;if(Sn(t)){const i=Hy(this),a=cm(i,t,void 0);let l=!0;try{o=n(a),l=!1}finally{l?am(i):sm(i)}return Uy(i,r),Gy(o,i)}else if(!t||!Jg(t)){if(o=n(t),o===void 0&&(o=t),o===dE&&(o=void 0),this.autoFreeze_&&t0(o,!0),r){const i=[],a=[];Co(im).generateReplacementPatches_(t,o,{patches_:i,inversePatches_:a}),r(i,a)}return o}else mn(1,t)},this.produceWithPatches=(t,n)=>{if(Xo(t))return(a,...l)=>this.produceWithPatches(a,s=>t(s,...l));let r,o;return[this.produce(t,n,(a,l)=>{r=a,o=l}),r,o]},Nf(e==null?void 0:e.autoFreeze)&&this.setAutoFreeze(e.autoFreeze),Nf(e==null?void 0:e.useStrictShallowCopy)&&this.setUseStrictShallowCopy(e.useStrictShallowCopy),Nf(e==null?void 0:e.useStrictIteration)&&this.setUseStrictIteration(e.useStrictIteration)}createDraft(e){Sn(e)||mn(8),dr(e)&&(e=vI(e));const t=Hy(this),n=cm(t,e,void 0);return n[St].isManual_=!0,sm(t),n}finishDraft(e,t){const n=e&&e[St];(!n||!n.isManual_)&&mn(9);const{scope_:r}=n;return Uy(r,t),Gy(void 0,r)}setAutoFreeze(e){this.autoFreeze_=e}setUseStrictShallowCopy(e){this.useStrictShallowCopy_=e}setUseStrictIteration(e){this.useStrictIteration_=e}shouldUseStrictIteration(){return this.useStrictIteration_}applyPatches(e,t){let n;for(n=t.length-1;n>=0;n--){const o=t[n];if(o.path.length===0&&o.op==="replace"){e=o.value;break}}n>-1&&(t=t.slice(n+1));const r=Co(im).applyPatches_;return dr(e)?r(e,t):this.produce(e,o=>r(o,t))}};function cm(e,t,n,r){const[o,i]=Zu(t)?Co(Kc).proxyMap_(t,n):Ju(t)?Co(Kc).proxySet_(t,n):hI(t,n);return((n==null?void 0:n.scope_)??hE()).drafts_.push(o),i.callbacks_=(n==null?void 0:n.callbacks_)??[],i.key_=r,n&&r!==void 0?fI(n,i,r):i.callbacks_.push(function(s){var d;(d=s.mapSetPlugin_)==null||d.fixSetContents(i);const{patchPlugin_:c}=s;i.modified_&&c&&c.generatePatches_(i,[],s)}),o}function vI(e){return dr(e)||mn(10,e),xE(e)}function xE(e){if(!Sn(e)||ed(e))return e;const t=e[St];let n,r=!0;if(t){if(!t.modified_)return t.base_;t.finalized_=!0,n=om(e,t.scope_.immer_.useStrictShallowCopy_),r=t.scope_.immer_.shouldUseStrictIteration()}else n=om(e,!0);return Ku(n,(o,i)=>{Xc(n,o,xE(i))},r),t&&(t.finalized_=!1),n}var yI=new gI,bE=yI.produce;function wE(e){return({dispatch:n,getState:r})=>o=>i=>typeof i=="function"?i(n,r,e):o(i)}var xI=wE(),bI=wE,wI=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?Gc:Gc.apply(null,arguments)};function Yy(e,t){function n(...r){if(t){let o=t(...r);if(!o)throw new Error(rr(0));return{type:e,payload:o.payload,..."meta"in o&&{meta:o.meta},..."error"in o&&{error:o.error}}}return{type:e,payload:r[0]}}return n.toString=()=>`${e}`,n.type=e,n.match=r=>rI(r)&&r.type===e,n}var SE=class _a extends Array{constructor(...t){super(...t),Object.setPrototypeOf(this,_a.prototype)}static get[Symbol.species](){return _a}concat(...t){return super.concat.apply(this,t)}prepend(...t){return t.length===1&&Array.isArray(t[0])?new _a(...t[0].concat(this)):new _a(...t.concat(this))}};function Xy(e){return Sn(e)?bE(e,()=>{}):e}function dl(e,t,n){return e.has(t)?e.get(t):e.set(t,n(t)).get(t)}function SI(e){return typeof e=="boolean"}var EI=()=>function(t){const{thunk:n=!0,immutableCheck:r=!0,serializableCheck:o=!0,actionCreatorCheck:i=!0}=t??{};let a=new SE;return n&&(SI(n)?a.push(xI):a.push(bI(n.extraArgument))),a},CI="RTK_autoBatch",Ky=e=>t=>{setTimeout(t,e)},_I=(e={type:"raf"})=>t=>(...n)=>{const r=t(...n);let o=!0,i=!1,a=!1;const l=new Set,s=e.type==="tick"?queueMicrotask:e.type==="raf"?typeof window<"u"&&window.requestAnimationFrame?window.requestAnimationFrame:Ky(10):e.type==="callback"?e.queueNotification:Ky(e.timeout),c=()=>{a=!1,i&&(i=!1,l.forEach(d=>d()))};return Object.assign({},r,{subscribe(d){const f=()=>o&&d(),m=r.subscribe(f);return l.add(d),()=>{m(),l.delete(d)}},dispatch(d){var f;try{return o=!((f=d==null?void 0:d.meta)!=null&&f[CI]),i=!o,i&&(a||(a=!0,s(c))),r.dispatch(d)}finally{o=!0}}})},kI=e=>function(n){const{autoBatch:r=!0}=n??{};let o=new SE(e);return r&&o.push(_I(typeof r=="object"?r:void 0)),o};function PI(e){const t=EI(),{reducer:n=void 0,middleware:r,devTools:o=!0,duplicateMiddlewareCheck:i=!0,preloadedState:a=void 0,enhancers:l=void 0}=e||{};let s;if(typeof n=="function")s=n;else if(Qg(n))s=tI(n);else throw new Error(rr(1));let c;typeof r=="function"?c=r(t):c=t();let d=Gc;o&&(d=wI({trace:!1,...typeof o=="object"&&o}));const f=nI(...c),m=kI(f);let p=typeof l=="function"?l(m):m();const h=d(...p);return Zg(s,a,h)}function EE(e){const t={},n=[];let r;const o={addCase(i,a){const l=typeof i=="string"?i:i.type;if(!l)throw new Error(rr(28));if(l in t)throw new Error(rr(29));return t[l]=a,o},addAsyncThunk(i,a){return a.pending&&(t[i.pending.type]=a.pending),a.rejected&&(t[i.rejected.type]=a.rejected),a.fulfilled&&(t[i.fulfilled.type]=a.fulfilled),a.settled&&n.push({matcher:i.settled,reducer:a.settled}),o},addMatcher(i,a){return n.push({matcher:i,reducer:a}),o},addDefaultCase(i){return r=i,o}};return e(o),[t,n,r]}function OI(e){return typeof e=="function"}function TI(e,t){let[n,r,o]=EE(t),i;if(OI(e))i=()=>Xy(e());else{const l=Xy(e);i=()=>l}function a(l=i(),s){let c=[n[s.type],...r.filter(({matcher:d})=>d(s)).map(({reducer:d})=>d)];return c.filter(d=>!!d).length===0&&(c=[o]),c.reduce((d,f)=>{if(f)if(dr(d)){const p=f(d,s);return p===void 0?d:p}else{if(Sn(d))return bE(d,m=>f(m,s));{const m=f(d,s);if(m===void 0){if(d===null)return d;throw Error("A case reducer on a non-draftable value must not return undefined")}return m}}return d},l)}return a.getInitialState=i,a}var jI=Symbol.for("rtk-slice-createasyncthunk");function $I(e,t){return`${e}/${t}`}function II({creators:e}={}){var n;const t=(n=e==null?void 0:e.asyncThunk)==null?void 0:n[jI];return function(o){const{name:i,reducerPath:a=i}=o;if(!i)throw new Error(rr(11));typeof process<"u";const l=(typeof o.reducers=="function"?o.reducers(AI()):o.reducers)||{},s=Object.keys(l),c={sliceCaseReducersByName:{},sliceCaseReducersByType:{},actionCreators:{},sliceMatchers:[]},d={addCase(E,S){const P=typeof E=="string"?E:E.type;if(!P)throw new Error(rr(12));if(P in c.sliceCaseReducersByType)throw new Error(rr(13));return c.sliceCaseReducersByType[P]=S,d},addMatcher(E,S){return c.sliceMatchers.push({matcher:E,reducer:S}),d},exposeAction(E,S){return c.actionCreators[E]=S,d},exposeCaseReducer(E,S){return c.sliceCaseReducersByName[E]=S,d}};s.forEach(E=>{const S=l[E],P={reducerName:E,type:$I(i,E),createNotation:typeof o.reducers=="function"};LI(S)?FI(P,S,d,t):DI(P,S,d)});function f(){const[E={},S=[],P=void 0]=typeof o.extraReducers=="function"?EE(o.extraReducers):[o.extraReducers],k={...E,...c.sliceCaseReducersByType};return TI(o.initialState,_=>{for(let T in k)_.addCase(T,k[T]);for(let T of c.sliceMatchers)_.addMatcher(T.matcher,T.reducer);for(let T of S)_.addMatcher(T.matcher,T.reducer);P&&_.addDefaultCase(P)})}const m=E=>E,p=new Map,h=new WeakMap;let y;function b(E,S){return y||(y=f()),y(E,S)}function g(){return y||(y=f()),y.getInitialState()}function v(E,S=!1){function P(_){let T=_[E];return typeof T>"u"&&S&&(T=dl(h,P,g)),T}function k(_=m){const T=dl(p,S,()=>new WeakMap);return dl(T,_,()=>{const $={};for(const[I,M]of Object.entries(o.selectors??{}))$[I]=MI(M,_,()=>dl(h,_,g),S);return $})}return{reducerPath:E,getSelectors:k,get selectors(){return k(P)},selectSlice:P}}const w={name:i,reducer:b,actions:c.actionCreators,caseReducers:c.sliceCaseReducersByName,getInitialState:g,...v(a),injectInto(E,{reducerPath:S,...P}={}){const k=S??a;return E.inject({reducerPath:k,reducer:b},P),{...w,...v(k,!0)}}};return w}}function MI(e,t,n,r){function o(i,...a){let l=t(i);return typeof l>"u"&&r&&(l=n()),e(l,...a)}return o.unwrapped=e,o}var CE=II();function AI(){function e(t,n){return{_reducerDefinitionType:"asyncThunk",payloadCreator:t,...n}}return e.withTypes=()=>e,{reducer(t){return Object.assign({[t.name](...n){return t(...n)}}[t.name],{_reducerDefinitionType:"reducer"})},preparedReducer(t,n){return{_reducerDefinitionType:"reducerWithPrepare",prepare:t,reducer:n}},asyncThunk:e}}function DI({type:e,reducerName:t,createNotation:n},r,o){let i,a;if("reducer"in r){if(n&&!RI(r))throw new Error(rr(17));i=r.reducer,a=r.prepare}else i=r;o.addCase(e,i).exposeCaseReducer(t,i).exposeAction(t,a?Yy(e,a):Yy(e))}function LI(e){return e._reducerDefinitionType==="asyncThunk"}function RI(e){return e._reducerDefinitionType==="reducerWithPrepare"}function FI({type:e,reducerName:t},n,r,o){if(!o)throw new Error(rr(18));const{payloadCreator:i,fulfilled:a,pending:l,rejected:s,settled:c,options:d}=n,f=o(e,i,d);r.exposeAction(t,f),a&&r.addCase(f.fulfilled,a),l&&r.addCase(f.pending,l),s&&r.addCase(f.rejected,s),c&&r.addMatcher(f.settled,c),r.exposeCaseReducer(t,{fulfilled:a||fl,pending:l||fl,rejected:s||fl,settled:c||fl})}function fl(){}function rr(e){return`Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}const _E=CE({name:"favorites",initialState:{items:[]},reducers:{toggleFavorite:(e,t)=>{const n=t.payload;e.items.find(o=>o.id===n.id)?e.items=e.items.filter(o=>o.id!==n.id):e.items.push(n)},clearFavorite:e=>{e.items=[]},setFavorites(e,t){e.items=t.payload},addFavorite(e,t){e.items.some(r=>r.id===t.payload.id)||e.items.push(t.payload)},removeFavorite(e,t){e.items=e.items.filter(n=>n.id!==t.payload)}}}),{toggleFavorite:zY,clearFavorite:Ls,addFavorite:Qy,removeFavorite:Zy,setFavorites:zI}=_E.actions,NI=_E.reducer,BI=async(e,t,n,r)=>{const o=t==null?void 0:t.find(a=>{var l;return((l=a.product)==null?void 0:l.documentId)===(e==null?void 0:e.documentId)});if(o){const a=o.user.map(l=>l.documentId);if(!a.includes(n)){a.push(n);const l=await fetch(`https://backenddidiv-production.up.railway.app/api/favorites/${o.documentId}`,{method:"PUT",headers:{"Content-Type":"application/json",Authorization:`Bearer ${r}`},body:JSON.stringify({data:{user:a}})});if(!l.ok)throw new Error("Не вдалося оновити favorite");return await l.json()}return o}const i=await fetch("https://backenddidiv-production.up.railway.app/api/favorites",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${r}`},body:JSON.stringify({data:{product:e.documentId,user:[n]}})});if(!i.ok)throw new Error("Не вдалося створити favorite");return await i.json()},VI=async(e,t,n,r)=>{var l;const o=t==null?void 0:t.find(s=>{var c;return((c=s.product)==null?void 0:c.documentId)===(e==null?void 0:e.documentId)});if(!o)return;const i=(l=o.user)==null?void 0:l.filter(s=>s.documentId!==n).map(s=>s.documentId);if((i==null?void 0:i.length)===0){if(!(await fetch(`https://backenddidiv-production.up.railway.app/api/favorites/${o.documentId}`,{method:"DELETE",headers:{Authorization:`Bearer ${r}`}})).ok)throw new Error("Не вдалося видалити favorite");return}const a=await fetch(`https://backenddidiv-production.up.railway.app/api/favorites/${o.documentId}`,{method:"PUT",headers:{"Content-Type":"application/json",Authorization:`Bearer ${r}`},body:JSON.stringify({data:{user:i}})});if(!a.ok)throw new Error("Не вдалося оновити favorite");return await a.json()},jo=async(e,t,n,r)=>{const o=localStorage.getItem("token"),i=JSON.parse(localStorage.getItem("user"));if(!o||!i)return t?(n(Zy(e.id)),r.warning(`${e.name} видалено з обраного`)):(n(Qy(e)),r.success(`${e.name} додано в обране`)),!0;const a=i.documentId,l=i.id;try{const s=await fetch(`https://backenddidiv-production.up.railway.app/api/users/${l}?populate[favorites][populate][0]=product&populate[favorites][populate][1]=user`,{headers:{Authorization:`Bearer ${o}`}});if(!s.ok)throw new Error("Не вдалося отримати favorites користувача");const c=await s.json(),d=await fetch("https://backenddidiv-production.up.railway.app/api/favorites?populate=*",{headers:{Authorization:`Bearer ${o}`}}),{data:f}=await d.json(),m=c==null?void 0:c.favorites;return t?(await VI(e,m,a,o),n(Zy(e.id)),r.warning(`${e.name} видалено з обраного`),!0):(await BI(e,f,a,o),n(Qy(e)),r.success(`${e.name} додано в обране`),!0)}catch{return r.error("Не вдалося оновити обране"),!1}},kE=CE({name:"cart",initialState:{items:[]},reducers:{addToCart:(e,t)=>{const n=t.payload,r=e.items.find(o=>o.id===n.id);if(r){if(r.quantity>=n.stock)return;r.quantity+=1}else e.items.push({...n,quantity:1})},setCartItemQuantity:(e,t)=>{const{id:n,quantity:r}=t.payload,o=e.items.find(i=>i.id===n);o&&(o.quantity=r)},removeFromCart:(e,t)=>{const n=t.payload;e.items=e.items.filter(r=>r.id!==n.id)},clearCart:e=>{e.items=[]},addAllToCart:(e,t)=>{const n=t.payload.map(r=>({...r,quantity:r.quantity||1}));e.items.push(...n)},setCartItems:(e,t)=>{e.items=t.payload},incrementQuantity:(e,t)=>{const{id:n,stock:r}=t.payload,o=e.items.find(i=>i.id===n);o&&o.quantity<r&&(o.quantity+=1)},decrementQuantity:(e,t)=>{const n=e.items.find(r=>r.id===t.payload);n&&n.quantity>1&&(n.quantity-=1)}}}),{setCartItems:PE,addToCart:Jy,setCartItemQuantity:e1,removeFromCart:OE,clearCart:fr,addAllToCart:WI,incrementQuantity:t1,decrementQuantity:n1}=kE.actions,UI=kE.reducer,HI=async(e,t,n,r)=>{const o=await fetch("https://backenddidiv-production.up.railway.app/api/cart-items",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${r}`},body:JSON.stringify({data:{product:e,quantity:t,user:n}})});if(!o.ok)throw new Error("Не вдалося створити CartItem");return o.json()},GI=async(e,t,n)=>{const r=await fetch(`https://backenddidiv-production.up.railway.app/api/cart-items/${e}`,{method:"PUT",headers:{"Content-Type":"application/json",Authorization:`Bearer ${n}`},body:JSON.stringify({data:{quantity:t}})});if(!r.ok)throw new Error("Не вдалося оновити CartItem");return r.json()},Hi=async(e,t,n,r)=>{const o=localStorage.getItem("token"),i=JSON.parse(localStorage.getItem("user"));if(!o||!i){for(let l=0;l<t;l++)n(Jy(e));return r.success(`${e.name} додано в кошик!`),!0}const a=i.id;try{const l=await fetch(`https://backenddidiv-production.up.railway.app/api/cart-items?filters[user][id][$eq]=${a}&populate=product`,{headers:{Authorization:`Bearer ${o}`}});if(!l.ok)throw new Error("Не вдалося отримати кошик користувача");const{data:s}=await l.json(),c=s.find(d=>{var f;return((f=d.product)==null?void 0:f.documentId)===e.documentId});if(c){const d=c.quantity+t;if(d>e.stock)return r.warning(`Доступно лише ${e.stock} шт.`),!1;await GI(c.documentId,d,o),n(e1({id:e.id,quantity:d}))}else await HI(e.documentId,t,a,o),n(Jy({...e})),t>1&&n(e1({id:e.id,quantity:t}));return r.success(`${e.name} додано в кошик!`),!0}catch(l){return console.error(l),r.error("Не вдалося додати товар у кошик"),!1}},TE=()=>{const e=Lt(),[t,n]=x.useState([]),r=Ye(s=>s.favorites.items),o=Ye(s=>s.cart.items),i=et();x.useEffect(()=>{const s=new Date,c=new Date;c.setDate(s.getDate()-7);const d=c.toISOString();fetch(`https://backenddidiv-production.up.railway.app/api/products?populate=*&filters[createdAt][$gte]=${d}`).then(f=>f.json()).then(f=>n(f.data)).catch(f=>console.error("Помилка завантаження нових товарів:",f))},[]);const a=(s,c)=>{c.stopPropagation();const d=r.some(f=>f.id===(s==null?void 0:s.id));jo(s,d,e,K)},l=[...t].sort(()=>Math.random()-.5).slice(0,3);return!t||t.length===0?null:u.jsxs(G3,{children:[u.jsx(Un,{}),u.jsx(q3,{children:"Нові товари"}),u.jsxs(Y3,{children:[l.map(s=>{var w;const c=r.some(E=>E.id===s.id),d=(s==null?void 0:s.available)??!0,f=(s==null?void 0:s.stock)===0,m=o.find(E=>E.id===s.id),h=(m?m.quantity:0)>=(s.stock||0),y=s.new_price&&s.new_price<s.price,b=y?s.new_price:s.price,g=y?Math.round((s.price-s.new_price)/s.price*100):0,v=async()=>{if(h){K.warning("Товар вже в кошику (досягнуто максимум)");return}if(h){K.warning(`Доступно лише ${s.stock} шт.`);return}await Hi(s,1,e,K)};return u.jsxs(X3,{onClick:()=>i(`/product/${s.slug??s.id}`),$soldOut:f,children:[u.jsxs(Q3,{children:[u.jsx(Z3,{children:"Новинка"}),f&&u.jsx(Yu,{children:"Продано"}),!d&&u.jsx(K3,{children:"Бронь"}),u.jsx("img",{src:((w=s.images)==null?void 0:w[0].url)||ur,alt:s.name,onError:E=>{E.currentTarget.onerror=null,E.currentTarget.src=ur}}),u.jsx("div",{className:"overlay"})]}),u.jsxs(J3,{children:[u.jsx(e5,{children:s.name}),u.jsxs(t5,{children:[u.jsx(aE,{children:u.jsxs(sE,{children:[u.jsxs(lE,{$discount:y,children:[b==null?void 0:b.toLocaleString()," грн"]}),y&&u.jsxs(cE,{children:[s.price.toLocaleString()," грн"]}),y&&u.jsxs(uE,{children:["-",g,"%"]})]})}),u.jsxs(iE,{children:[d&&!f&&u.jsx(Uc,{onClick:E=>v(),children:u.jsx(Ui,{size:24,color:m?"var(--orange-color)":"black",strokeWidth:2})}),!f&&u.jsx(Uc,{onClick:E=>a(s,E),children:u.jsx(Is,{size:24,fill:c?"#ff4d4f":"none",color:c?"#ff4d4f":"#000000",strokeWidth:c?1:2})})]})]})]})]},s.id)}),u.jsx(n5,{to:"/catalog/new",children:u.jsxs(r5,{children:[u.jsx("p",{children:"Усі новинки"}),u.jsx(o5,{children:u.jsx(Uu,{size:24})})]})})]})]})};function te(){return te=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},te.apply(this,arguments)}function qI(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function YI(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var XI=function(){function e(n){var r=this;this._insertTag=function(o){var i;r.tags.length===0?r.insertionPoint?i=r.insertionPoint.nextSibling:r.prepend?i=r.container.firstChild:i=r.before:i=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(o,i),r.tags.push(o)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(r){r.forEach(this._insertTag)},t.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(YI(this));var o=this.tags[this.tags.length-1];if(this.isSpeedy){var i=qI(o);try{i.insertRule(r,i.cssRules.length)}catch{}}else o.appendChild(document.createTextNode(r));this.ctr++},t.flush=function(){this.tags.forEach(function(r){return r.parentNode&&r.parentNode.removeChild(r)}),this.tags=[],this.ctr=0},e}(),dt="-ms-",Jc="-moz-",pe="-webkit-",jE="comm",n0="rule",r0="decl",KI="@import",$E="@keyframes",QI="@layer",ZI=Math.abs,nd=String.fromCharCode,JI=Object.assign;function eM(e,t){return it(e,0)^45?(((t<<2^it(e,0))<<2^it(e,1))<<2^it(e,2))<<2^it(e,3):0}function IE(e){return e.trim()}function tM(e,t){return(e=t.exec(e))?e[0]:e}function he(e,t,n){return e.replace(t,n)}function um(e,t){return e.indexOf(t)}function it(e,t){return e.charCodeAt(t)|0}function bs(e,t,n){return e.slice(t,n)}function jn(e){return e.length}function o0(e){return e.length}function pl(e,t){return t.push(e),e}function nM(e,t){return e.map(t).join("")}var rd=1,Ii=1,ME=0,Dt=0,Ve=0,Gi="";function od(e,t,n,r,o,i,a){return{value:e,root:t,parent:n,type:r,props:o,children:i,line:rd,column:Ii,length:a,return:""}}function ua(e,t){return JI(od("",null,null,"",null,null,0),e,{length:-e.length},t)}function rM(){return Ve}function oM(){return Ve=Dt>0?it(Gi,--Dt):0,Ii--,Ve===10&&(Ii=1,rd--),Ve}function Ht(){return Ve=Dt<ME?it(Gi,Dt++):0,Ii++,Ve===10&&(Ii=1,rd++),Ve}function Fn(){return it(Gi,Dt)}function Jl(){return Dt}function Rs(e,t){return bs(Gi,e,t)}function ws(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function AE(e){return rd=Ii=1,ME=jn(Gi=e),Dt=0,[]}function DE(e){return Gi="",e}function ec(e){return IE(Rs(Dt-1,dm(e===91?e+2:e===40?e+1:e)))}function iM(e){for(;(Ve=Fn())&&Ve<33;)Ht();return ws(e)>2||ws(Ve)>3?"":" "}function aM(e,t){for(;--t&&Ht()&&!(Ve<48||Ve>102||Ve>57&&Ve<65||Ve>70&&Ve<97););return Rs(e,Jl()+(t<6&&Fn()==32&&Ht()==32))}function dm(e){for(;Ht();)switch(Ve){case e:return Dt;case 34:case 39:e!==34&&e!==39&&dm(Ve);break;case 40:e===41&&dm(e);break;case 92:Ht();break}return Dt}function sM(e,t){for(;Ht()&&e+Ve!==47+10;)if(e+Ve===42+42&&Fn()===47)break;return"/*"+Rs(t,Dt-1)+"*"+nd(e===47?e:Ht())}function lM(e){for(;!ws(Fn());)Ht();return Rs(e,Dt)}function cM(e){return DE(tc("",null,null,null,[""],e=AE(e),0,[0],e))}function tc(e,t,n,r,o,i,a,l,s){for(var c=0,d=0,f=a,m=0,p=0,h=0,y=1,b=1,g=1,v=0,w="",E=o,S=i,P=r,k=w;b;)switch(h=v,v=Ht()){case 40:if(h!=108&&it(k,f-1)==58){um(k+=he(ec(v),"&","&\f"),"&\f")!=-1&&(g=-1);break}case 34:case 39:case 91:k+=ec(v);break;case 9:case 10:case 13:case 32:k+=iM(h);break;case 92:k+=aM(Jl()-1,7);continue;case 47:switch(Fn()){case 42:case 47:pl(uM(sM(Ht(),Jl()),t,n),s);break;default:k+="/"}break;case 123*y:l[c++]=jn(k)*g;case 125*y:case 59:case 0:switch(v){case 0:case 125:b=0;case 59+d:g==-1&&(k=he(k,/\f/g,"")),p>0&&jn(k)-f&&pl(p>32?o1(k+";",r,n,f-1):o1(he(k," ","")+";",r,n,f-2),s);break;case 59:k+=";";default:if(pl(P=r1(k,t,n,c,d,o,l,w,E=[],S=[],f),i),v===123)if(d===0)tc(k,t,P,P,E,i,f,l,S);else switch(m===99&&it(k,3)===110?100:m){case 100:case 108:case 109:case 115:tc(e,P,P,r&&pl(r1(e,P,P,0,0,o,l,w,o,E=[],f),S),o,S,f,l,r?E:S);break;default:tc(k,P,P,P,[""],S,0,l,S)}}c=d=p=0,y=g=1,w=k="",f=a;break;case 58:f=1+jn(k),p=h;default:if(y<1){if(v==123)--y;else if(v==125&&y++==0&&oM()==125)continue}switch(k+=nd(v),v*y){case 38:g=d>0?1:(k+="\f",-1);break;case 44:l[c++]=(jn(k)-1)*g,g=1;break;case 64:Fn()===45&&(k+=ec(Ht())),m=Fn(),d=f=jn(w=k+=lM(Jl())),v++;break;case 45:h===45&&jn(k)==2&&(y=0)}}return i}function r1(e,t,n,r,o,i,a,l,s,c,d){for(var f=o-1,m=o===0?i:[""],p=o0(m),h=0,y=0,b=0;h<r;++h)for(var g=0,v=bs(e,f+1,f=ZI(y=a[h])),w=e;g<p;++g)(w=IE(y>0?m[g]+" "+v:he(v,/&\f/g,m[g])))&&(s[b++]=w);return od(e,t,n,o===0?n0:l,s,c,d)}function uM(e,t,n){return od(e,t,n,jE,nd(rM()),bs(e,2,-2),0)}function o1(e,t,n,r){return od(e,t,n,r0,bs(e,0,r),bs(e,r+1,-1),r)}function mi(e,t){for(var n="",r=o0(e),o=0;o<r;o++)n+=t(e[o],o,e,t)||"";return n}function dM(e,t,n,r){switch(e.type){case QI:if(e.children.length)break;case KI:case r0:return e.return=e.return||e.value;case jE:return"";case $E:return e.return=e.value+"{"+mi(e.children,r)+"}";case n0:e.value=e.props.join(",")}return jn(n=mi(e.children,r))?e.return=e.value+"{"+n+"}":""}function fM(e){var t=o0(e);return function(n,r,o,i){for(var a="",l=0;l<t;l++)a+=e[l](n,r,o,i)||"";return a}}function pM(e){return function(t){t.root||(t=t.return)&&e(t)}}function hM(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var mM=function(t,n,r){for(var o=0,i=0;o=i,i=Fn(),o===38&&i===12&&(n[r]=1),!ws(i);)Ht();return Rs(t,Dt)},gM=function(t,n){var r=-1,o=44;do switch(ws(o)){case 0:o===38&&Fn()===12&&(n[r]=1),t[r]+=mM(Dt-1,n,r);break;case 2:t[r]+=ec(o);break;case 4:if(o===44){t[++r]=Fn()===58?"&\f":"",n[r]=t[r].length;break}default:t[r]+=nd(o)}while(o=Ht());return t},vM=function(t,n){return DE(gM(AE(t),n))},i1=new WeakMap,yM=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var n=t.value,r=t.parent,o=t.column===r.column&&t.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(t.props.length===1&&n.charCodeAt(0)!==58&&!i1.get(r))&&!o){i1.set(t,!0);for(var i=[],a=vM(n,i),l=r.props,s=0,c=0;s<a.length;s++)for(var d=0;d<l.length;d++,c++)t.props[c]=i[s]?a[s].replace(/&\f/g,l[d]):l[d]+" "+a[s]}}},xM=function(t){if(t.type==="decl"){var n=t.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(t.return="",t.value="")}};function LE(e,t){switch(eM(e,t)){case 5103:return pe+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return pe+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return pe+e+Jc+e+dt+e+e;case 6828:case 4268:return pe+e+dt+e+e;case 6165:return pe+e+dt+"flex-"+e+e;case 5187:return pe+e+he(e,/(\w+).+(:[^]+)/,pe+"box-$1$2"+dt+"flex-$1$2")+e;case 5443:return pe+e+dt+"flex-item-"+he(e,/flex-|-self/,"")+e;case 4675:return pe+e+dt+"flex-line-pack"+he(e,/align-content|flex-|-self/,"")+e;case 5548:return pe+e+dt+he(e,"shrink","negative")+e;case 5292:return pe+e+dt+he(e,"basis","preferred-size")+e;case 6060:return pe+"box-"+he(e,"-grow","")+pe+e+dt+he(e,"grow","positive")+e;case 4554:return pe+he(e,/([^-])(transform)/g,"$1"+pe+"$2")+e;case 6187:return he(he(he(e,/(zoom-|grab)/,pe+"$1"),/(image-set)/,pe+"$1"),e,"")+e;case 5495:case 3959:return he(e,/(image-set\([^]*)/,pe+"$1$`$1");case 4968:return he(he(e,/(.+:)(flex-)?(.*)/,pe+"box-pack:$3"+dt+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+pe+e+e;case 4095:case 3583:case 4068:case 2532:return he(e,/(.+)-inline(.+)/,pe+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(jn(e)-1-t>6)switch(it(e,t+1)){case 109:if(it(e,t+4)!==45)break;case 102:return he(e,/(.+:)(.+)-([^]+)/,"$1"+pe+"$2-$3$1"+Jc+(it(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~um(e,"stretch")?LE(he(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(it(e,t+1)!==115)break;case 6444:switch(it(e,jn(e)-3-(~um(e,"!important")&&10))){case 107:return he(e,":",":"+pe)+e;case 101:return he(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+pe+(it(e,14)===45?"inline-":"")+"box$3$1"+pe+"$2$3$1"+dt+"$2box$3")+e}break;case 5936:switch(it(e,t+11)){case 114:return pe+e+dt+he(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return pe+e+dt+he(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return pe+e+dt+he(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return pe+e+dt+e+e}return e}var bM=function(t,n,r,o){if(t.length>-1&&!t.return)switch(t.type){case r0:t.return=LE(t.value,t.length);break;case $E:return mi([ua(t,{value:he(t.value,"@","@"+pe)})],o);case n0:if(t.length)return nM(t.props,function(i){switch(tM(i,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return mi([ua(t,{props:[he(i,/:(read-\w+)/,":"+Jc+"$1")]})],o);case"::placeholder":return mi([ua(t,{props:[he(i,/:(plac\w+)/,":"+pe+"input-$1")]}),ua(t,{props:[he(i,/:(plac\w+)/,":"+Jc+"$1")]}),ua(t,{props:[he(i,/:(plac\w+)/,dt+"input-$1")]})],o)}return""})}},wM=[bM],SM=function(t){var n=t.key;if(n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(y){var b=y.getAttribute("data-emotion");b.indexOf(" ")!==-1&&(document.head.appendChild(y),y.setAttribute("data-s",""))})}var o=t.stylisPlugins||wM,i={},a,l=[];a=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(y){for(var b=y.getAttribute("data-emotion").split(" "),g=1;g<b.length;g++)i[b[g]]=!0;l.push(y)});var s,c=[yM,xM];{var d,f=[dM,pM(function(y){d.insert(y)})],m=fM(c.concat(o,f)),p=function(b){return mi(cM(b),m)};s=function(b,g,v,w){d=v,p(b?b+"{"+g.styles+"}":g.styles),w&&(h.inserted[g.name]=!0)}}var h={key:n,sheet:new XI({key:n,container:a,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:i,registered:{},insert:s};return h.sheet.hydrate(l),h},RE={exports:{}},xe={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nt=typeof Symbol=="function"&&Symbol.for,i0=nt?Symbol.for("react.element"):60103,a0=nt?Symbol.for("react.portal"):60106,id=nt?Symbol.for("react.fragment"):60107,ad=nt?Symbol.for("react.strict_mode"):60108,sd=nt?Symbol.for("react.profiler"):60114,ld=nt?Symbol.for("react.provider"):60109,cd=nt?Symbol.for("react.context"):60110,s0=nt?Symbol.for("react.async_mode"):60111,ud=nt?Symbol.for("react.concurrent_mode"):60111,dd=nt?Symbol.for("react.forward_ref"):60112,fd=nt?Symbol.for("react.suspense"):60113,EM=nt?Symbol.for("react.suspense_list"):60120,pd=nt?Symbol.for("react.memo"):60115,hd=nt?Symbol.for("react.lazy"):60116,CM=nt?Symbol.for("react.block"):60121,_M=nt?Symbol.for("react.fundamental"):60117,kM=nt?Symbol.for("react.responder"):60118,PM=nt?Symbol.for("react.scope"):60119;function Kt(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case i0:switch(e=e.type,e){case s0:case ud:case id:case sd:case ad:case fd:return e;default:switch(e=e&&e.$$typeof,e){case cd:case dd:case hd:case pd:case ld:return e;default:return t}}case a0:return t}}}function FE(e){return Kt(e)===ud}xe.AsyncMode=s0;xe.ConcurrentMode=ud;xe.ContextConsumer=cd;xe.ContextProvider=ld;xe.Element=i0;xe.ForwardRef=dd;xe.Fragment=id;xe.Lazy=hd;xe.Memo=pd;xe.Portal=a0;xe.Profiler=sd;xe.StrictMode=ad;xe.Suspense=fd;xe.isAsyncMode=function(e){return FE(e)||Kt(e)===s0};xe.isConcurrentMode=FE;xe.isContextConsumer=function(e){return Kt(e)===cd};xe.isContextProvider=function(e){return Kt(e)===ld};xe.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===i0};xe.isForwardRef=function(e){return Kt(e)===dd};xe.isFragment=function(e){return Kt(e)===id};xe.isLazy=function(e){return Kt(e)===hd};xe.isMemo=function(e){return Kt(e)===pd};xe.isPortal=function(e){return Kt(e)===a0};xe.isProfiler=function(e){return Kt(e)===sd};xe.isStrictMode=function(e){return Kt(e)===ad};xe.isSuspense=function(e){return Kt(e)===fd};xe.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===id||e===ud||e===sd||e===ad||e===fd||e===EM||typeof e=="object"&&e!==null&&(e.$$typeof===hd||e.$$typeof===pd||e.$$typeof===ld||e.$$typeof===cd||e.$$typeof===dd||e.$$typeof===_M||e.$$typeof===kM||e.$$typeof===PM||e.$$typeof===CM)};xe.typeOf=Kt;RE.exports=xe;var OM=RE.exports,zE=OM,TM={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},jM={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},NE={};NE[zE.ForwardRef]=TM;NE[zE.Memo]=jM;var $M=!0;function BE(e,t,n){var r="";return n.split(" ").forEach(function(o){e[o]!==void 0?t.push(e[o]+";"):r+=o+" "}),r}var l0=function(t,n,r){var o=t.key+"-"+n.name;(r===!1||$M===!1)&&t.registered[o]===void 0&&(t.registered[o]=n.styles)},VE=function(t,n,r){l0(t,n,r);var o=t.key+"-"+n.name;if(t.inserted[n.name]===void 0){var i=n;do t.insert(n===i?"."+o:"",i,t.sheet,!0),i=i.next;while(i!==void 0)}};function IM(e){for(var t=0,n,r=0,o=e.length;o>=4;++r,o-=4)n=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(o){case 3:t^=(e.charCodeAt(r+2)&255)<<16;case 2:t^=(e.charCodeAt(r+1)&255)<<8;case 1:t^=e.charCodeAt(r)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var MM={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},AM=/[A-Z]|^ms/g,DM=/_EMO_([^_]+?)_([^]*?)_EMO_/g,WE=function(t){return t.charCodeAt(1)===45},a1=function(t){return t!=null&&typeof t!="boolean"},Vf=hM(function(e){return WE(e)?e:e.replace(AM,"-$&").toLowerCase()}),s1=function(t,n){switch(t){case"animation":case"animationName":if(typeof n=="string")return n.replace(DM,function(r,o,i){return $n={name:o,styles:i,next:$n},o})}return MM[t]!==1&&!WE(t)&&typeof n=="number"&&n!==0?n+"px":n};function Ss(e,t,n){if(n==null)return"";if(n.__emotion_styles!==void 0)return n;switch(typeof n){case"boolean":return"";case"object":{if(n.anim===1)return $n={name:n.name,styles:n.styles,next:$n},n.name;if(n.styles!==void 0){var r=n.next;if(r!==void 0)for(;r!==void 0;)$n={name:r.name,styles:r.styles,next:$n},r=r.next;var o=n.styles+";";return o}return LM(e,t,n)}case"function":{if(e!==void 0){var i=$n,a=n(e);return $n=i,Ss(e,t,a)}break}}if(t==null)return n;var l=t[n];return l!==void 0?l:n}function LM(e,t,n){var r="";if(Array.isArray(n))for(var o=0;o<n.length;o++)r+=Ss(e,t,n[o])+";";else for(var i in n){var a=n[i];if(typeof a!="object")t!=null&&t[a]!==void 0?r+=i+"{"+t[a]+"}":a1(a)&&(r+=Vf(i)+":"+s1(i,a)+";");else if(Array.isArray(a)&&typeof a[0]=="string"&&(t==null||t[a[0]]===void 0))for(var l=0;l<a.length;l++)a1(a[l])&&(r+=Vf(i)+":"+s1(i,a[l])+";");else{var s=Ss(e,t,a);switch(i){case"animation":case"animationName":{r+=Vf(i)+":"+s+";";break}default:r+=i+"{"+s+"}"}}}return r}var l1=/label:\s*([^\s;\n{]+)\s*(;|$)/g,$n,c0=function(t,n,r){if(t.length===1&&typeof t[0]=="object"&&t[0]!==null&&t[0].styles!==void 0)return t[0];var o=!0,i="";$n=void 0;var a=t[0];a==null||a.raw===void 0?(o=!1,i+=Ss(r,n,a)):i+=a[0];for(var l=1;l<t.length;l++)i+=Ss(r,n,t[l]),o&&(i+=a[l]);l1.lastIndex=0;for(var s="",c;(c=l1.exec(i))!==null;)s+="-"+c[1];var d=IM(i)+s;return{name:d,styles:i,next:$n}},RM=function(t){return t()},FM=qp["useInsertionEffect"]?qp["useInsertionEffect"]:!1,UE=FM||RM,u0={}.hasOwnProperty,HE=x.createContext(typeof HTMLElement<"u"?SM({key:"css"}):null);HE.Provider;var GE=function(t){return x.forwardRef(function(n,r){var o=x.useContext(HE);return t(n,o,r)})},qE=x.createContext({}),fm="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",zM=function(t,n){var r={};for(var o in n)u0.call(n,o)&&(r[o]=n[o]);return r[fm]=t,r},NM=function(t){var n=t.cache,r=t.serialized,o=t.isStringTag;return l0(n,r,o),UE(function(){return VE(n,r,o)}),null},BM=GE(function(e,t,n){var r=e.css;typeof r=="string"&&t.registered[r]!==void 0&&(r=t.registered[r]);var o=e[fm],i=[r],a="";typeof e.className=="string"?a=BE(t.registered,i,e.className):e.className!=null&&(a=e.className+" ");var l=c0(i,void 0,x.useContext(qE));a+=t.key+"-"+l.name;var s={};for(var c in e)u0.call(e,c)&&c!=="css"&&c!==fm&&(s[c]=e[c]);return s.ref=n,s.className=a,x.createElement(x.Fragment,null,x.createElement(NM,{cache:t,serialized:l,isStringTag:typeof o=="string"}),x.createElement(o,s))}),VM=BM,J=function(t,n){var r=arguments;if(n==null||!u0.call(n,"css"))return x.createElement.apply(void 0,r);var o=r.length,i=new Array(o);i[0]=VM,i[1]=zM(t,n);for(var a=2;a<o;a++)i[a]=r[a];return x.createElement.apply(null,i)};function d0(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return c0(t)}var WM=function(){var t=d0.apply(void 0,arguments),n="animation-"+t.name;return{name:n,styles:"@keyframes "+n+"{"+t.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},UM=Zj,HM=function(t){return t!=="theme"},c1=function(t){return typeof t=="string"&&t.charCodeAt(0)>96?UM:HM},u1=function(t,n,r){var o;if(n){var i=n.shouldForwardProp;o=t.__emotion_forwardProp&&i?function(a){return t.__emotion_forwardProp(a)&&i(a)}:i}return typeof o!="function"&&r&&(o=t.__emotion_forwardProp),o},GM=function(t){var n=t.cache,r=t.serialized,o=t.isStringTag;return l0(n,r,o),UE(function(){return VE(n,r,o)}),null},qM=function e(t,n){var r=t.__emotion_real===t,o=r&&t.__emotion_base||t,i,a;n!==void 0&&(i=n.label,a=n.target);var l=u1(t,n,r),s=l||c1(o),c=!s("as");return function(){var d=arguments,f=r&&t.__emotion_styles!==void 0?t.__emotion_styles.slice(0):[];if(i!==void 0&&f.push("label:"+i+";"),d[0]==null||d[0].raw===void 0)f.push.apply(f,d);else{f.push(d[0][0]);for(var m=d.length,p=1;p<m;p++)f.push(d[p],d[0][p])}var h=GE(function(y,b,g){var v=c&&y.as||o,w="",E=[],S=y;if(y.theme==null){S={};for(var P in y)S[P]=y[P];S.theme=x.useContext(qE)}typeof y.className=="string"?w=BE(b.registered,E,y.className):y.className!=null&&(w=y.className+" ");var k=c0(f.concat(E),b.registered,S);w+=b.key+"-"+k.name,a!==void 0&&(w+=" "+a);var _=c&&l===void 0?c1(v):s,T={};for(var $ in y)c&&$==="as"||_($)&&(T[$]=y[$]);return T.className=w,T.ref=g,x.createElement(x.Fragment,null,x.createElement(GM,{cache:b,serialized:k,isStringTag:typeof v=="string"}),x.createElement(v,T))});return h.displayName=i!==void 0?i:"Styled("+(typeof o=="string"?o:o.displayName||o.name||"Component")+")",h.defaultProps=t.defaultProps,h.__emotion_real=h,h.__emotion_base=o,h.__emotion_styles=f,h.__emotion_forwardProp=l,Object.defineProperty(h,"toString",{value:function(){return"."+a}}),h.withComponent=function(y,b){return e(y,te({},n,b,{shouldForwardProp:u1(h,b,!0)})).apply(void 0,f)},h}},YM=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],Ne=qM.bind();YM.forEach(function(e){Ne[e]=Ne(e)});const XM=Ne.section`
  background-color: var(--second-background);

`,KM=Ne.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  align-items: center;
  padding-top: 20px;
  padding-left: 10px;
  padding-right: 10px;
  @media screen and (min-width: 768px) {
    display: flex;
    max-width: 994px;
    padding-left: 30px;
    padding-right: 30px;
  }
  @media screen and (min-width: 1200px) {
    max-width: 1448px;
  }
`,YE=Ne.div`
  font-family: var(--main-font);
  font-size: 14px;
  color: #8c8c8c;
     margin-right: auto;

  a {
    text-decoration: none;
    color: inherit;
  }
`,QM=Ne.div`

`,ZM=Ne.h1`
  font-size: 32px;
  font-family: var(--main-font);
  color: var(--black-color);
  text-transform: uppercase;
  margin-bottom: 20px;
`,JM=Ne.div`
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
`;Ne.div`
  position: absolute;
  inset: 0; /* займає всю картку */
  background: rgba(0, 0, 0, 0.622); /* чорний з прозорістю 25% */
`;const eA=Ne(ge)`
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
`,tA=Ne.div`
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
`,nA=Ne.img`
  width: 100%;
  height: 200px;
  object-fit: cover;

  display: block;
  @media screen and (max-width: 768px) {
    height: 250px;
  }
`,rA=Ne.p`
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
`;var oA={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"};iA(oA);function iA(e){var t={};for(var n in e)e.hasOwnProperty(n)&&(t[e[n]]=n);return t}var aA="#4fa94d",sA={"aria-busy":!0,role:"progressbar"},lA=C.div`
  display: ${e=>e.$visible?"flex":"none"};
`,cA="http://www.w3.org/2000/svg",$o=({height:e=100,width:t=100,radius:n=5,color:r=aA,ariaLabel:o="ball-triangle-loading",wrapperClass:i,wrapperStyle:a,visible:l=!0})=>u.jsx(lA,{style:{...a},$visible:l,className:i,"data-testid":"ball-triangle-loading","aria-label":o,...sA,children:u.jsxs("svg",{height:e,width:t,stroke:r,viewBox:"0 0 57 57",xmlns:cA,"data-testid":"ball-triangle-svg",children:[u.jsx("title",{children:"Ball Triangle"}),u.jsx("desc",{children:"Animated representation of three balls"}),u.jsx("g",{fill:"none",fillRule:"evenodd",children:u.jsxs("g",{transform:"translate(1 1)",strokeWidth:"2",children:[u.jsxs("circle",{cx:"5",cy:"50",r:n,children:[u.jsx("animate",{attributeName:"cy",begin:"0s",dur:"2.2s",values:"50;5;50;50",calcMode:"linear",repeatCount:"indefinite"}),u.jsx("animate",{attributeName:"cx",begin:"0s",dur:"2.2s",values:"5;27;49;5",calcMode:"linear",repeatCount:"indefinite"})]}),u.jsxs("circle",{cx:"27",cy:"5",r:n,children:[u.jsx("animate",{attributeName:"cy",begin:"0s",dur:"2.2s",from:"5",to:"5",values:"5;50;50;5",calcMode:"linear",repeatCount:"indefinite"}),u.jsx("animate",{attributeName:"cx",begin:"0s",dur:"2.2s",from:"27",to:"27",values:"27;49;5;27",calcMode:"linear",repeatCount:"indefinite"})]}),u.jsxs("circle",{cx:"49",cy:"50",r:n,children:[u.jsx("animate",{attributeName:"cy",begin:"0s",dur:"2.2s",values:"50;50;5;50",calcMode:"linear",repeatCount:"indefinite"}),u.jsx("animate",{attributeName:"cx",from:"49",to:"49",begin:"0s",dur:"2.2s",values:"49;5;27;49",calcMode:"linear",repeatCount:"indefinite"})]})]})})]})}),cn=242.776657104492,uA=1.6,dA=qg`
12.5% {
  stroke-dasharray: ${cn*.14}px, ${cn}px;
  stroke-dashoffset: -${cn*.11}px;
}
43.75% {
  stroke-dasharray: ${cn*.35}px, ${cn}px;
  stroke-dashoffset: -${cn*.35}px;
}
100% {
  stroke-dasharray: ${cn*.01}px, ${cn}px;
  stroke-dashoffset: -${cn*.99}px;
}
`;C.path`
  stroke-dasharray: ${cn*.01}px, ${cn};
  stroke-dashoffset: 0;
  animation: ${dA} ${uA}s linear infinite;
`;var fA=qg`
to {
   transform: rotate(360deg);
 }
`;C.svg`
  animation: ${fA} ${e=>String(e.$animationDuration).endsWith("s")?String(e.$animationDuration):`${e.$animationDuration}s`} steps(12, end) infinite;
`;C.polyline`
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
`;var pA=qg`
to {
   stroke-dashoffset: 136;
 }
`;C.polygon`
  stroke-dasharray: 17;
  animation: ${pA} 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;
`;C.svg`
  transform-origin: 50% 65%;
`;const hA=()=>{const[e,t]=x.useState([]),[n,r]=x.useState(!0);return x.useEffect(()=>{async function o(){try{r(!0);const a=await(await fetch("https://backenddidiv-production.up.railway.app/api/categories?populate=*&pagination[limit]=50&sort=title:asc")).json();t(a.data.map(l=>{var s;return{id:l.id,title:l.title,image:(s=l.image)==null?void 0:s.url}}))}catch(i){console.error("Помилка запиту:",i)}finally{r(!1)}}o()},[]),n?u.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"100vw",height:"100vh"},children:u.jsx($o,{height:100,width:100,radius:5,color:"var(--orange-color)",ariaLabel:"ball-triangle-loading",wrapperStyle:{},wrapperClass:"",visible:!0})}):u.jsx(XM,{children:u.jsxs(KM,{children:[u.jsxs(YE,{children:[u.jsx(ge,{to:"/",children:"Головна"})," / ",u.jsx(ge,{to:"/catalog",children:"Каталог"})]}),u.jsx(QM,{children:u.jsx(TE,{})}),u.jsx(ZM,{children:"Каталог"}),u.jsx(JM,{children:e.map(o=>u.jsxs(eA,{to:`/catalog/${o.title}`,children:[u.jsx(tA,{children:u.jsx(nA,{src:o.image,alt:o.title})}),u.jsx(rA,{children:o.title})]},o.id))})]})})},mA=Ne.div`

padding-top: 100px;
padding-bottom: 250px;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`,gA=Ne.h1`
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
`,vA=Ne.p`
  color: #191919;
  font-size: 18px;
  max-width: 600px;
      text-align: center;
      margin-bottom: 50px;
      @media screen and (min-width: 768px) {
 font-size: 25px;
  }
`,yA=Ne(ge)`

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

  
`,xA=()=>u.jsxs(mA,{children:[u.jsxs(gA,{children:[" ",u.jsx("span",{children:"404"}),"  PAGE NOT FOUND"]}),u.jsx(vA,{children:" Ой, схоже, ти збився з маршруту! На жаль, ця сторінка безслідно зникла десь на бездоріжжі. Спробуй повернутися на головну "}),u.jsx(yA,{children:" На головну"})]});const bA=C.div`
width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
   font-family: var(--main-font);
`,wA=C.div`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  margin: 0;
`;var XE={},KE={},md={},QE={exports:{}},Fs={};/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var d1=Object.getOwnPropertySymbols,SA=Object.prototype.hasOwnProperty,EA=Object.prototype.propertyIsEnumerable;function CA(e){if(e==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}function _A(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de",Object.getOwnPropertyNames(e)[0]==="5")return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;var r=Object.getOwnPropertyNames(t).map(function(i){return t[i]});if(r.join("")!=="0123456789")return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach(function(i){o[i]=i}),Object.keys(Object.assign({},o)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}var kA=_A()?Object.assign:function(e,t){for(var n,r=CA(e),o,i=1;i<arguments.length;i++){n=Object(arguments[i]);for(var a in n)SA.call(n,a)&&(r[a]=n[a]);if(d1){o=d1(n);for(var l=0;l<o.length;l++)EA.call(n,o[l])&&(r[o[l]]=n[o[l]])}}return r},ZE={exports:{}},de={};/** @license React v17.0.2
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var f0=kA,qi=60103,JE=60106;de.Fragment=60107;de.StrictMode=60108;de.Profiler=60114;var eC=60109,tC=60110,nC=60112;de.Suspense=60113;var rC=60115,oC=60116;if(typeof Symbol=="function"&&Symbol.for){var ln=Symbol.for;qi=ln("react.element"),JE=ln("react.portal"),de.Fragment=ln("react.fragment"),de.StrictMode=ln("react.strict_mode"),de.Profiler=ln("react.profiler"),eC=ln("react.provider"),tC=ln("react.context"),nC=ln("react.forward_ref"),de.Suspense=ln("react.suspense"),rC=ln("react.memo"),oC=ln("react.lazy")}var f1=typeof Symbol=="function"&&Symbol.iterator;function PA(e){return e===null||typeof e!="object"?null:(e=f1&&e[f1]||e["@@iterator"],typeof e=="function"?e:null)}function zs(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var iC={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},aC={};function Yi(e,t,n){this.props=e,this.context=t,this.refs=aC,this.updater=n||iC}Yi.prototype.isReactComponent={};Yi.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error(zs(85));this.updater.enqueueSetState(this,e,t,"setState")};Yi.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function sC(){}sC.prototype=Yi.prototype;function p0(e,t,n){this.props=e,this.context=t,this.refs=aC,this.updater=n||iC}var h0=p0.prototype=new sC;h0.constructor=p0;f0(h0,Yi.prototype);h0.isPureReactComponent=!0;var m0={current:null},lC=Object.prototype.hasOwnProperty,cC={key:!0,ref:!0,__self:!0,__source:!0};function uC(e,t,n){var r,o={},i=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(i=""+t.key),t)lC.call(t,r)&&!cC.hasOwnProperty(r)&&(o[r]=t[r]);var l=arguments.length-2;if(l===1)o.children=n;else if(1<l){for(var s=Array(l),c=0;c<l;c++)s[c]=arguments[c+2];o.children=s}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)o[r]===void 0&&(o[r]=l[r]);return{$$typeof:qi,type:e,key:i,ref:a,props:o,_owner:m0.current}}function OA(e,t){return{$$typeof:qi,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function g0(e){return typeof e=="object"&&e!==null&&e.$$typeof===qi}function TA(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var p1=/\/+/g;function Wf(e,t){return typeof e=="object"&&e!==null&&e.key!=null?TA(""+e.key):t.toString(36)}function nc(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(i){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case qi:case JE:a=!0}}if(a)return a=e,o=o(a),e=r===""?"."+Wf(a,0):r,Array.isArray(o)?(n="",e!=null&&(n=e.replace(p1,"$&/")+"/"),nc(o,t,n,"",function(c){return c})):o!=null&&(g0(o)&&(o=OA(o,n+(!o.key||a&&a.key===o.key?"":(""+o.key).replace(p1,"$&/")+"/")+e)),t.push(o)),1;if(a=0,r=r===""?".":r+":",Array.isArray(e))for(var l=0;l<e.length;l++){i=e[l];var s=r+Wf(i,l);a+=nc(i,t,n,s,o)}else if(s=PA(e),typeof s=="function")for(e=s.call(e),l=0;!(i=e.next()).done;)i=i.value,s=r+Wf(i,l++),a+=nc(i,t,n,s,o);else if(i==="object")throw t=""+e,Error(zs(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t));return a}function hl(e,t,n){if(e==null)return e;var r=[],o=0;return nc(e,r,"","",function(i){return t.call(n,i,o++)}),r}function jA(e){if(e._status===-1){var t=e._result;t=t(),e._status=0,e._result=t,t.then(function(n){e._status===0&&(n=n.default,e._status=1,e._result=n)},function(n){e._status===0&&(e._status=2,e._result=n)})}if(e._status===1)return e._result;throw e._result}var dC={current:null};function hr(){var e=dC.current;if(e===null)throw Error(zs(321));return e}var $A={ReactCurrentDispatcher:dC,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:m0,IsSomeRendererActing:{current:!1},assign:f0};de.Children={map:hl,forEach:function(e,t,n){hl(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return hl(e,function(){t++}),t},toArray:function(e){return hl(e,function(t){return t})||[]},only:function(e){if(!g0(e))throw Error(zs(143));return e}};de.Component=Yi;de.PureComponent=p0;de.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$A;de.cloneElement=function(e,t,n){if(e==null)throw Error(zs(267,e));var r=f0({},e.props),o=e.key,i=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,a=m0.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in t)lC.call(t,s)&&!cC.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&l!==void 0?l[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){l=Array(s);for(var c=0;c<s;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:qi,type:e.type,key:o,ref:i,props:r,_owner:a}};de.createContext=function(e,t){return t===void 0&&(t=null),e={$$typeof:tC,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider={$$typeof:eC,_context:e},e.Consumer=e};de.createElement=uC;de.createFactory=function(e){var t=uC.bind(null,e);return t.type=e,t};de.createRef=function(){return{current:null}};de.forwardRef=function(e){return{$$typeof:nC,render:e}};de.isValidElement=g0;de.lazy=function(e){return{$$typeof:oC,_payload:{_status:-1,_result:e},_init:jA}};de.memo=function(e,t){return{$$typeof:rC,type:e,compare:t===void 0?null:t}};de.useCallback=function(e,t){return hr().useCallback(e,t)};de.useContext=function(e,t){return hr().useContext(e,t)};de.useDebugValue=function(){};de.useEffect=function(e,t){return hr().useEffect(e,t)};de.useImperativeHandle=function(e,t,n){return hr().useImperativeHandle(e,t,n)};de.useLayoutEffect=function(e,t){return hr().useLayoutEffect(e,t)};de.useMemo=function(e,t){return hr().useMemo(e,t)};de.useReducer=function(e,t,n){return hr().useReducer(e,t,n)};de.useRef=function(e){return hr().useRef(e)};de.useState=function(e){return hr().useState(e)};de.version="17.0.2";ZE.exports=de;var IA=ZE.exports;/** @license React v17.0.2
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var MA=IA,fC=60103;Fs.Fragment=60107;if(typeof Symbol=="function"&&Symbol.for){var h1=Symbol.for;fC=h1("react.element"),Fs.Fragment=h1("react.fragment")}var AA=MA.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,DA=Object.prototype.hasOwnProperty,LA={key:!0,ref:!0,__self:!0,__source:!0};function pC(e,t,n){var r,o={},i=null,a=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)DA.call(t,r)&&!LA.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:fC,type:e,key:i,ref:a,props:o,_owner:AA.current}}Fs.jsx=pC;Fs.jsxs=pC;QE.exports=Fs;var Rt=QE.exports,hC={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var t={}.hasOwnProperty;function n(){for(var i="",a=0;a<arguments.length;a++){var l=arguments[a];l&&(i=o(i,r(l)))}return i}function r(i){if(typeof i=="string"||typeof i=="number")return i;if(typeof i!="object")return"";if(Array.isArray(i))return n.apply(null,i);if(i.toString!==Object.prototype.toString&&!i.toString.toString().includes("[native code]"))return i.toString();var a="";for(var l in i)t.call(i,l)&&i[l]&&(a=o(a,l));return a}function o(i,a){return a?i?i+" "+a:i+a:i}e.exports?(n.default=n,e.exports=n):window.classNames=n})()})(hC);var Ft=hC.exports;const RA={"lds-circle":"_lds-circle_qlxhy_1"},FA=Object.freeze(Object.defineProperty({__proto__:null,default:RA},Symbol.toStringTag,{value:"Module"})),zA=Et(FA);var mC=ne&&ne.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(md,"__esModule",{value:!0});md.Circle=void 0;const NA=Rt,BA=mC(Ft),VA=mC(zA);function WA({color:e="#7f58af",size:t=64,className:n,style:r,...o}){return(0,NA.jsx)("div",{className:(0,BA.default)(VA.default["lds-circle"],n),style:{background:e,width:t,height:t,...r},...o})}md.Circle=WA;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Circle=void 0;var t=md;Object.defineProperty(e,"Circle",{enumerable:!0,get:function(){return t.Circle}})})(KE);var gC={},gd={};const UA={"lds-default":"_lds-default_wt1n8_1"},HA=Object.freeze(Object.defineProperty({__proto__:null,default:UA},Symbol.toStringTag,{value:"Module"})),GA=Et(HA);var vC=ne&&ne.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(gd,"__esModule",{value:!0});gd.Default=void 0;const m1=Rt,qA=vC(Ft),YA=vC(GA);function XA({color:e="#7f58af",size:t=80,className:n,style:r,...o}){const i=[...Array(12)].map((a,l)=>(0,m1.jsx)("div",{style:{background:`${e}`,width:t*.075,height:t*.075}},l));return(0,m1.jsx)("div",{className:(0,qA.default)(YA.default["lds-default"],n),style:{height:t,width:t,...r},...o,children:i})}gd.Default=XA;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Default=void 0;var t=gd;Object.defineProperty(e,"Default",{enumerable:!0,get:function(){return t.Default}})})(gC);var yC={},vd={};const KA={"lds-dual-ring":"_lds-dual-ring_pbai0_1","lds-dual-ring-after":"_lds-dual-ring-after_pbai0_6"},QA=Object.freeze(Object.defineProperty({__proto__:null,default:KA},Symbol.toStringTag,{value:"Module"})),ZA=Et(QA);var xC=ne&&ne.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(vd,"__esModule",{value:!0});vd.DualRing=void 0;const g1=Rt,v1=xC(Ft),y1=xC(ZA);function JA({color:e="#7f58af",size:t=80,className:n,style:r,...o}){return(0,g1.jsx)("div",{className:(0,v1.default)(y1.default["lds-dual-ring"],n),style:{width:t,height:t,...r},...o,children:(0,g1.jsx)("div",{className:(0,v1.default)(y1.default["lds-dual-ring-after"]),style:{borderColor:`${e} transparent`,borderWidth:t*.1,width:t*.7-6,height:t*.7-6}})})}vd.DualRing=JA;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.DualRing=void 0;var t=vd;Object.defineProperty(e,"DualRing",{enumerable:!0,get:function(){return t.DualRing}})})(yC);var bC={},yd={};const eD={"lds-ellipsis":"_lds-ellipsis_1fzd3_1","lds-ellipsis1":"_lds-ellipsis1_1fzd3_1","lds-ellipsis2":"_lds-ellipsis2_1fzd3_1","lds-ellipsis3":"_lds-ellipsis3_1fzd3_1"},tD=Object.freeze(Object.defineProperty({__proto__:null,default:eD},Symbol.toStringTag,{value:"Module"})),nD=Et(tD);var wC=ne&&ne.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(yd,"__esModule",{value:!0});yd.Ellipsis=void 0;const x1=Rt,rD=wC(Ft),oD=wC(nD);function iD({color:e="#7f58af",size:t=80,className:n,style:r,...o}){const i=[...Array(4)].map((a,l)=>(0,x1.jsx)("div",{style:{background:`${e}`}},l));return(0,x1.jsx)("div",{className:(0,rD.default)(oD.default["lds-ellipsis"],n),style:{...r,width:t,height:t},...o,children:i})}yd.Ellipsis=iD;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Ellipsis=void 0;var t=yd;Object.defineProperty(e,"Ellipsis",{enumerable:!0,get:function(){return t.Ellipsis}})})(bC);var SC={},xd={};const aD={"lds-facebook":"_lds-facebook_1ts9g_1"},sD=Object.freeze(Object.defineProperty({__proto__:null,default:aD},Symbol.toStringTag,{value:"Module"})),lD=Et(sD);var EC=ne&&ne.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(xd,"__esModule",{value:!0});xd.Facebook=void 0;const b1=Rt,cD=EC(Ft),uD=EC(lD);function dD({color:e="#7f58af",size:t=80,className:n,style:r,...o}){const i=[...Array(3)].map((a,l)=>(0,b1.jsx)("div",{style:{background:`${e}`}},l));return(0,b1.jsx)("div",{className:(0,cD.default)(uD.default["lds-facebook"],n),style:{width:t,height:t,...r},...o,children:i})}xd.Facebook=dD;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Facebook=void 0;var t=xd;Object.defineProperty(e,"Facebook",{enumerable:!0,get:function(){return t.Facebook}})})(SC);var CC={},bd={};const fD={"lds-grid":"_lds-grid_1ftub_1"},pD=Object.freeze(Object.defineProperty({__proto__:null,default:fD},Symbol.toStringTag,{value:"Module"})),hD=Et(pD);var _C=ne&&ne.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(bd,"__esModule",{value:!0});bd.Grid=void 0;const w1=Rt,mD=_C(Ft),gD=_C(hD);function vD({color:e="#7f58af",size:t=80,className:n,style:r,...o}){const i=[...Array(9)].map((a,l)=>(0,w1.jsx)("div",{style:{background:`${e}`}},l));return(0,w1.jsx)("div",{className:(0,mD.default)(gD.default["lds-grid"],n),style:{width:t,height:t,...r},...o,children:i})}bd.Grid=vD;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Grid=void 0;var t=bd;Object.defineProperty(e,"Grid",{enumerable:!0,get:function(){return t.Grid}})})(CC);var kC={},wd={};const yD={"lds-heart":"_lds-heart_e4yfg_1","div-after":"_div-after_e4yfg_18","div-before":"_div-before_e4yfg_19"},xD=Object.freeze(Object.defineProperty({__proto__:null,default:yD},Symbol.toStringTag,{value:"Module"})),bD=Et(xD);var PC=ne&&ne.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(wd,"__esModule",{value:!0});wd.Heart=void 0;const ml=Rt,Uf=PC(Ft),Hf=PC(bD);function wD({color:e="#7f58af",size:t=80,className:n,style:r,...o}){return(0,ml.jsx)("div",{className:(0,Uf.default)(Hf.default["lds-heart"],n),style:{width:t,height:t,...r},...o,children:(0,ml.jsxs)("div",{style:{background:e,width:t*.4,height:t*.4,left:t*.3,top:t*.3},children:[(0,ml.jsx)("div",{className:(0,Uf.default)(Hf.default["div-before"]),style:{background:e,width:t*.4,height:t*.4,left:-t*.3}}),(0,ml.jsx)("div",{className:(0,Uf.default)(Hf.default["div-after"]),style:{background:e,width:t*.4,height:t*.4,top:-t*.3}})]})})}wd.Heart=wD;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Heart=void 0;var t=wd;Object.defineProperty(e,"Heart",{enumerable:!0,get:function(){return t.Heart}})})(kC);var OC={},Sd={};const SD={"lds-hourglass":"_lds-hourglass_mn3qi_1","lds-hourglass-after":"_lds-hourglass-after_mn3qi_7"},ED=Object.freeze(Object.defineProperty({__proto__:null,default:SD},Symbol.toStringTag,{value:"Module"})),CD=Et(ED);var TC=ne&&ne.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Sd,"__esModule",{value:!0});Sd.Hourglass=void 0;const S1=Rt,E1=TC(Ft),C1=TC(CD);function _D({color:e="#7f58af",size:t=32,className:n,style:r}){return(0,S1.jsx)("div",{className:(0,E1.default)(C1.default["lds-hourglass"],n),style:{...r},children:(0,S1.jsx)("div",{className:(0,E1.default)(C1.default["lds-hourglass-after"]),style:{background:e,borderWidth:t,borderHeight:t}})})}Sd.Hourglass=_D;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Hourglass=void 0;var t=Sd;Object.defineProperty(e,"Hourglass",{enumerable:!0,get:function(){return t.Hourglass}})})(OC);var jC={},Ed={};const $C="_center_1rufi_10",IC="_spin_1rufi_1",kD={"lds-orbitals":"_lds-orbitals_1rufi_1",center:$C,"outer-spin":"_outer-spin_1rufi_19","inner-spin":"_inner-spin_1rufi_20","inner-arc":"_inner-arc_1rufi_25","inner-arc_start-a":"_inner-arc_start-a_1rufi_32","inner-arc_end-a":"_inner-arc_end-a_1rufi_36","inner-moon-a":"_inner-moon-a_1rufi_40","inner-moon-b":"_inner-moon-b_1rufi_49","inner-arc_start-b":"_inner-arc_start-b_1rufi_58","inner-arc_end-b":"_inner-arc_end-b_1rufi_62","outer-arc":"_outer-arc_1rufi_66","outer-arc_start-a":"_outer-arc_start-a_1rufi_73","outer-arc_end-a":"_outer-arc_end-a_1rufi_77","outer-moon-a":"_outer-moon-a_1rufi_81","outer-moon-b":"_outer-moon-b_1rufi_90","outer-arc_start-b":"_outer-arc_start-b_1rufi_99","outer-arc_end-b":"_outer-arc_end-b_1rufi_103",spin:IC},PD=Object.freeze(Object.defineProperty({__proto__:null,center:$C,default:kD,spin:IC},Symbol.toStringTag,{value:"Module"})),OD=Et(PD);var MC=ne&&ne.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Ed,"__esModule",{value:!0});Ed.Orbitals=void 0;const ut=Rt,vt=MC(Ft),ke=MC(OD);function TD({color:e="#7f58af",className:t,style:n}){return(0,ut.jsxs)("div",{className:(0,vt.default)(ke.default["lds-orbitals"],t),style:{...n},children:[(0,ut.jsx)("div",{className:ke.default.center,style:{background:e}}),(0,ut.jsxs)("div",{className:(0,vt.default)(ke.default["inner-spin"]),children:[(0,ut.jsx)("div",{className:(0,vt.default)(ke.default["inner-arc"],ke.default["inner-arc_start-a"]),style:{borderColor:e}}),(0,ut.jsx)("div",{className:(0,vt.default)(ke.default["inner-arc"],ke.default["inner-arc_end-a"]),style:{borderColor:e}}),(0,ut.jsx)("div",{className:(0,vt.default)(ke.default["inner-arc"],ke.default["inner-arc_start-b"]),style:{borderColor:e}}),(0,ut.jsx)("div",{className:(0,vt.default)(ke.default["inner-arc"],ke.default["inner-arc_end-b"]),style:{borderColor:e}}),(0,ut.jsx)("div",{className:(0,vt.default)(ke.default["inner-moon-a"]),style:{background:e}}),(0,ut.jsx)("div",{className:(0,vt.default)(ke.default["inner-moon-b"]),style:{background:e}})]}),(0,ut.jsxs)("div",{className:(0,vt.default)(ke.default["outer-spin"]),children:[(0,ut.jsx)("div",{className:(0,vt.default)(ke.default["outer-arc"],ke.default["outer-arc_start-a"]),style:{borderColor:e}}),(0,ut.jsx)("div",{className:(0,vt.default)(ke.default["outer-arc"],ke.default["outer-arc_end-a"]),style:{borderColor:e}}),(0,ut.jsx)("div",{className:(0,vt.default)(ke.default["outer-arc"],ke.default["outer-arc_start-b"]),style:{borderColor:e}}),(0,ut.jsx)("div",{className:(0,vt.default)(ke.default["outer-arc"],ke.default["outer-arc_end-b"]),style:{borderColor:e}}),(0,ut.jsx)("div",{className:(0,vt.default)(ke.default["outer-moon-a"]),style:{background:e}}),(0,ut.jsx)("div",{className:(0,vt.default)(ke.default["outer-moon-b"]),style:{background:e}})]})]})}Ed.Orbitals=TD;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Orbitals=void 0;var t=Ed;Object.defineProperty(e,"Orbitals",{enumerable:!0,get:function(){return t.Orbitals}})})(jC);var AC={},Cd={};const jD={"lds-ring":"_lds-ring_xgxdp_1"},$D=Object.freeze(Object.defineProperty({__proto__:null,default:jD},Symbol.toStringTag,{value:"Module"})),ID=Et($D);var DC=ne&&ne.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Cd,"__esModule",{value:!0});Cd.Ring=void 0;const _1=Rt,MD=DC(Ft),AD=DC(ID);function DD({color:e="#7f58af",size:t=80,className:n,style:r}){const o=[...Array(4)].map((i,a)=>(0,_1.jsx)("div",{style:{borderColor:`${e} transparent transparent transparent`,width:t*.8,height:t*.8,margin:t*.1,borderWidth:t*.1}},a));return(0,_1.jsx)("div",{className:(0,MD.default)(AD.default["lds-ring"],n),style:{width:t,height:t,...r},children:o})}Cd.Ring=DD;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Ring=void 0;var t=Cd;Object.defineProperty(e,"Ring",{enumerable:!0,get:function(){return t.Ring}})})(AC);var LC={},_d={};const LD={"lds-ripple":"_lds-ripple_1lgcf_1"},RD=Object.freeze(Object.defineProperty({__proto__:null,default:LD},Symbol.toStringTag,{value:"Module"})),FD=Et(RD);var RC=ne&&ne.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(_d,"__esModule",{value:!0});_d.Ripple=void 0;const k1=Rt,zD=RC(Ft),ND=RC(FD);function BD({color:e="#7f58af",size:t=80,className:n,style:r}){const o=[...Array(2)].map((i,a)=>(0,k1.jsx)("div",{style:{borderColor:`${e}`,borderWidth:t*.05}},a));return(0,k1.jsx)("div",{className:(0,zD.default)(ND.default["lds-ripple"],n),style:{width:t,height:t,...r},children:o})}_d.Ripple=BD;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Ripple=void 0;var t=_d;Object.defineProperty(e,"Ripple",{enumerable:!0,get:function(){return t.Ripple}})})(LC);var FC={},kd={};const VD={"lds-roller":"_lds-roller_ks1ij_1","div-after":"_div-after_ks1ij_11"},WD=Object.freeze(Object.defineProperty({__proto__:null,default:VD},Symbol.toStringTag,{value:"Module"})),UD=Et(WD);var zC=ne&&ne.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(kd,"__esModule",{value:!0});kd.Roller=void 0;const Gf=Rt,P1=zC(Ft),O1=zC(UD);function HD({color:e="#7f58af",className:t,style:n}){const r=[...Array(8)].map((o,i)=>(0,Gf.jsx)("div",{children:(0,Gf.jsx)("div",{className:(0,P1.default)(O1.default["div-after"]),style:{background:e}})},i));return(0,Gf.jsx)("div",{className:(0,P1.default)(O1.default["lds-roller"],t),style:{...n},children:r})}kd.Roller=HD;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Roller=void 0;var t=kd;Object.defineProperty(e,"Roller",{enumerable:!0,get:function(){return t.Roller}})})(FC);var NC={},Pd={};const GD={"lds-spinner":"_lds-spinner_flf3t_1","div-after":"_div-after_flf3t_12"},qD=Object.freeze(Object.defineProperty({__proto__:null,default:GD},Symbol.toStringTag,{value:"Module"})),YD=Et(qD);var BC=ne&&ne.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Pd,"__esModule",{value:!0});Pd.Spinner=void 0;const qf=Rt,T1=BC(Ft),j1=BC(YD);function XD({color:e="#7f58af",className:t,style:n}){const r=[...Array(12)].map((o,i)=>(0,qf.jsx)("div",{children:(0,qf.jsx)("div",{className:(0,T1.default)(j1.default["div-after"]),style:{background:e}})},i));return(0,qf.jsx)("div",{className:(0,T1.default)(j1.default["lds-spinner"],t),style:{...n},children:r})}Pd.Spinner=XD;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Spinner=void 0;var t=Pd;Object.defineProperty(e,"Spinner",{enumerable:!0,get:function(){return t.Spinner}})})(NC);var VC={},Od={};const WC="_left_v9vlb_30",UC="_right_v9vlb_33",HC="_anim_v9vlb_37",KD={"lds-ouroboro":"_lds-ouroboro_v9vlb_1",left:WC,right:UC,anim:HC,"lds-ouroboro-rotate":"_lds-ouroboro-rotate_v9vlb_1"},QD=Object.freeze(Object.defineProperty({__proto__:null,anim:HC,default:KD,left:WC,right:UC},Symbol.toStringTag,{value:"Module"})),ZD=Et(QD);var GC=ne&&ne.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Od,"__esModule",{value:!0});Od.Ouroboro=void 0;const da=Rt,fa=GC(Ft),pa=GC(ZD);function JD({color:e="#7f58af",style:t,className:n}){return(0,da.jsxs)("div",{className:(0,fa.default)(pa.default["lds-ouroboro"],n),style:{...t},children:[(0,da.jsx)("span",{className:(0,fa.default)(pa.default.left),children:(0,da.jsx)("span",{className:(0,fa.default)(pa.default.anim),style:{background:e}})}),(0,da.jsx)("span",{className:(0,fa.default)(pa.default.right),children:(0,da.jsx)("span",{className:(0,fa.default)(pa.default.anim),style:{background:e}})})]})}Od.Ouroboro=JD;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Ouroboro=void 0;var t=Od;Object.defineProperty(e,"Ouroboro",{enumerable:!0,get:function(){return t.Ouroboro}})})(VC);(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Ouroboro=e.Spinner=e.Roller=e.Ripple=e.Ring=e.Orbitals=e.Hourglass=e.Heart=e.Grid=e.Facebook=e.Ellipsis=e.DualRing=e.Default=e.Circle=void 0;const t=KE;Object.defineProperty(e,"Circle",{enumerable:!0,get:function(){return t.Circle}});const n=gC;Object.defineProperty(e,"Default",{enumerable:!0,get:function(){return n.Default}});const r=yC;Object.defineProperty(e,"DualRing",{enumerable:!0,get:function(){return r.DualRing}});const o=bC;Object.defineProperty(e,"Ellipsis",{enumerable:!0,get:function(){return o.Ellipsis}});const i=SC;Object.defineProperty(e,"Facebook",{enumerable:!0,get:function(){return i.Facebook}});const a=CC;Object.defineProperty(e,"Grid",{enumerable:!0,get:function(){return a.Grid}});const l=kC;Object.defineProperty(e,"Heart",{enumerable:!0,get:function(){return l.Heart}});const s=OC;Object.defineProperty(e,"Hourglass",{enumerable:!0,get:function(){return s.Hourglass}});const c=jC;Object.defineProperty(e,"Orbitals",{enumerable:!0,get:function(){return c.Orbitals}});const d=AC;Object.defineProperty(e,"Ring",{enumerable:!0,get:function(){return d.Ring}});const f=LC;Object.defineProperty(e,"Ripple",{enumerable:!0,get:function(){return f.Ripple}});const m=FC;Object.defineProperty(e,"Roller",{enumerable:!0,get:function(){return m.Roller}});const p=NC;Object.defineProperty(e,"Spinner",{enumerable:!0,get:function(){return p.Spinner}});const h=VC;Object.defineProperty(e,"Ouroboro",{enumerable:!0,get:function(){return h.Ouroboro}})})(XE);const e6=()=>u.jsx(wA,{children:u.jsx(XE.Default,{color:"#6d433da8"})});const t6="/Didiv/assets/Ancient_Kyiv-2153f7e6.ttf",n6=J$`
:root {
  /* colors */
  --black-color: #1d0f0a;
  --main-brand-color: #382116;
  --second-color: #927052;
  --white-color: #f2ebd4; 
    --second-white: #f0eae7; 
  --orange-color: #f47920;
  --yellow-color: #e0941a;
  --red-color: #b41f1f;
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
  src: url(${t6}) format('truetype');
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
`,r6=C.div`
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
`,o6=C(ge)`
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
`,i6=C.h2`

  font-size: 30px;
  text-transform: uppercase;
  margin-bottom: 20px;
  color: #333;
  @media screen and (min-width: 768px) {
    font-size: 35px;
  }
`,a6=C.h3`

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
`,s6=C.a`

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
`,l6=C.div`
  width: 40px;
  height: 40px;
  border: 2px solid white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`,c6=()=>{const[e,t]=x.useState([]);return x.useEffect(()=>{async function n(){try{const r=await fetch("https://backenddidiv-production.up.railway.app/api/categories?populate=image&sort=title:asc",{credentials:"omit"});if(!r.ok){console.error("Server error:",r.status);return}const o=await r.json();if(!o.data){console.error("No data field:",o);return}t(o.data.map(i=>{var a;return{title:i.title,image:(a=i.image)==null?void 0:a.url}}))}catch(r){console.error("Fetch error:",r)}}n()},[]),u.jsxs(u.Fragment,{children:[u.jsx(i6,{children:"Каталог"}),u.jsxs(r6,{children:[e.slice(0,7).map(n=>u.jsx(o6,{to:`catalog/${n.title}`,bg:n.image,isBig:n.big,children:u.jsx(a6,{children:n.title})},n.title)),u.jsxs(s6,{href:"catalog",children:[u.jsx("p",{children:"Весь каталог"}),u.jsx(l6,{children:u.jsx(Uu,{size:24})})]})]})]})};function $1(e){return e!==null&&typeof e=="object"&&"constructor"in e&&e.constructor===Object}function v0(e={},t={}){const n=["__proto__","constructor","prototype"];Object.keys(t).filter(r=>n.indexOf(r)<0).forEach(r=>{typeof e[r]>"u"?e[r]=t[r]:$1(t[r])&&$1(e[r])&&Object.keys(t[r]).length>0&&v0(e[r],t[r])})}const qC={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector(){return null},querySelectorAll(){return[]},getElementById(){return null},createEvent(){return{initEvent(){}}},createElement(){return{children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName(){return[]}}},createElementNS(){return{}},importNode(){return null},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function zn(){const e=typeof document<"u"?document:{};return v0(e,qC),e}const u6={document:qC,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle(){return{getPropertyValue(){return""}}},Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia(){return{}},requestAnimationFrame(e){return typeof setTimeout>"u"?(e(),null):setTimeout(e,0)},cancelAnimationFrame(e){typeof setTimeout>"u"||clearTimeout(e)}};function kt(){const e=typeof window<"u"?window:{};return v0(e,u6),e}function d6(e=""){return e.trim().split(" ").filter(t=>!!t.trim())}function f6(e){const t=e;Object.keys(t).forEach(n=>{try{t[n]=null}catch{}try{delete t[n]}catch{}})}function YC(e,t=0){return setTimeout(e,t)}function eu(){return Date.now()}function p6(e){const t=kt();let n;return t.getComputedStyle&&(n=t.getComputedStyle(e,null)),!n&&e.currentStyle&&(n=e.currentStyle),n||(n=e.style),n}function h6(e,t="x"){const n=kt();let r,o,i;const a=p6(e);return n.WebKitCSSMatrix?(o=a.transform||a.webkitTransform,o.split(",").length>6&&(o=o.split(", ").map(l=>l.replace(",",".")).join(", ")),i=new n.WebKitCSSMatrix(o==="none"?"":o)):(i=a.MozTransform||a.OTransform||a.MsTransform||a.msTransform||a.transform||a.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),r=i.toString().split(",")),t==="x"&&(n.WebKitCSSMatrix?o=i.m41:r.length===16?o=parseFloat(r[12]):o=parseFloat(r[4])),t==="y"&&(n.WebKitCSSMatrix?o=i.m42:r.length===16?o=parseFloat(r[13]):o=parseFloat(r[5])),o||0}function gl(e){return typeof e=="object"&&e!==null&&e.constructor&&Object.prototype.toString.call(e).slice(8,-1)==="Object"}function m6(e){return typeof window<"u"&&typeof window.HTMLElement<"u"?e instanceof HTMLElement:e&&(e.nodeType===1||e.nodeType===11)}function Nt(...e){const t=Object(e[0]);for(let n=1;n<e.length;n+=1){const r=e[n];if(r!=null&&!m6(r)){const o=Object.keys(Object(r)).filter(i=>i!=="__proto__"&&i!=="constructor"&&i!=="prototype");for(let i=0,a=o.length;i<a;i+=1){const l=o[i],s=Object.getOwnPropertyDescriptor(r,l);s!==void 0&&s.enumerable&&(gl(t[l])&&gl(r[l])?r[l].__swiper__?t[l]=r[l]:Nt(t[l],r[l]):!gl(t[l])&&gl(r[l])?(t[l]={},r[l].__swiper__?t[l]=r[l]:Nt(t[l],r[l])):t[l]=r[l])}}}return t}function No(e,t,n){e.style.setProperty(t,n)}function XC({swiper:e,targetPosition:t,side:n}){const r=kt(),o=-e.translate;let i=null,a;const l=e.params.speed;e.wrapperEl.style.scrollSnapType="none",r.cancelAnimationFrame(e.cssModeFrameID);const s=t>o?"next":"prev",c=(f,m)=>s==="next"&&f>=m||s==="prev"&&f<=m,d=()=>{a=new Date().getTime(),i===null&&(i=a);const f=Math.max(Math.min((a-i)/l,1),0),m=.5-Math.cos(f*Math.PI)/2;let p=o+m*(t-o);if(c(p,t)&&(p=t),e.wrapperEl.scrollTo({[n]:p}),c(p,t)){e.wrapperEl.style.overflow="hidden",e.wrapperEl.style.scrollSnapType="",setTimeout(()=>{e.wrapperEl.style.overflow="",e.wrapperEl.scrollTo({[n]:p})}),r.cancelAnimationFrame(e.cssModeFrameID);return}e.cssModeFrameID=r.requestAnimationFrame(d)};d()}function Dn(e,t=""){const n=kt(),r=[...e.children];return n.HTMLSlotElement&&e instanceof HTMLSlotElement&&r.push(...e.assignedElements()),t?r.filter(o=>o.matches(t)):r}function g6(e,t){const n=[t];for(;n.length>0;){const r=n.shift();if(e===r)return!0;n.push(...r.children,...r.shadowRoot?r.shadowRoot.children:[],...r.assignedElements?r.assignedElements():[])}}function v6(e,t){const n=kt();let r=t.contains(e);return!r&&n.HTMLSlotElement&&t instanceof HTMLSlotElement&&(r=[...t.assignedElements()].includes(e),r||(r=g6(e,t))),r}function tu(e){try{console.warn(e);return}catch{}}function nu(e,t=[]){const n=document.createElement(e);return n.classList.add(...Array.isArray(t)?t:d6(t)),n}function y6(e,t){const n=[];for(;e.previousElementSibling;){const r=e.previousElementSibling;t?r.matches(t)&&n.push(r):n.push(r),e=r}return n}function x6(e,t){const n=[];for(;e.nextElementSibling;){const r=e.nextElementSibling;t?r.matches(t)&&n.push(r):n.push(r),e=r}return n}function Tr(e,t){return kt().getComputedStyle(e,null).getPropertyValue(t)}function ru(e){let t=e,n;if(t){for(n=0;(t=t.previousSibling)!==null;)t.nodeType===1&&(n+=1);return n}}function KC(e,t){const n=[];let r=e.parentElement;for(;r;)t?r.matches(t)&&n.push(r):n.push(r),r=r.parentElement;return n}function pm(e,t,n){const r=kt();return n?e[t==="width"?"offsetWidth":"offsetHeight"]+parseFloat(r.getComputedStyle(e,null).getPropertyValue(t==="width"?"margin-right":"margin-top"))+parseFloat(r.getComputedStyle(e,null).getPropertyValue(t==="width"?"margin-left":"margin-bottom")):e.offsetWidth}function Qe(e){return(Array.isArray(e)?e:[e]).filter(t=>!!t)}function Es(e,t=""){typeof trustedTypes<"u"?e.innerHTML=trustedTypes.createPolicy("html",{createHTML:n=>n}).createHTML(t):e.innerHTML=t}function QC(e,t,n,r){return e.params.createElements&&Object.keys(r).forEach(o=>{if(!n[o]&&n.auto===!0){let i=Dn(e.el,`.${r[o]}`)[0];i||(i=nu("div",r[o]),i.className=r[o],e.el.append(i)),n[o]=i,t[o]=i}}),n}const I1='<svg class="swiper-navigation-icon" width="11" height="20" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.38296 20.0762C0.111788 19.805 0.111788 19.3654 0.38296 19.0942L9.19758 10.2796L0.38296 1.46497C0.111788 1.19379 0.111788 0.754138 0.38296 0.482966C0.654131 0.211794 1.09379 0.211794 1.36496 0.482966L10.4341 9.55214C10.8359 9.9539 10.8359 10.6053 10.4341 11.007L1.36496 20.0762C1.09379 20.3474 0.654131 20.3474 0.38296 20.0762Z" fill="currentColor"/></svg>';function b6({swiper:e,extendParams:t,on:n,emit:r}){t({navigation:{nextEl:null,prevEl:null,addIcons:!0,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock",navigationDisabledClass:"swiper-navigation-disabled"}}),e.navigation={nextEl:null,prevEl:null,arrowSvg:I1};function o(p){let h;return p&&typeof p=="string"&&e.isElement&&(h=e.el.querySelector(p)||e.hostEl.querySelector(p),h)?h:(p&&(typeof p=="string"&&(h=[...document.querySelectorAll(p)]),e.params.uniqueNavElements&&typeof p=="string"&&h&&h.length>1&&e.el.querySelectorAll(p).length===1?h=e.el.querySelector(p):h&&h.length===1&&(h=h[0])),p&&!h?p:h)}function i(p,h){const y=e.params.navigation;p=Qe(p),p.forEach(b=>{b&&(b.classList[h?"add":"remove"](...y.disabledClass.split(" ")),b.tagName==="BUTTON"&&(b.disabled=h),e.params.watchOverflow&&e.enabled&&b.classList[e.isLocked?"add":"remove"](y.lockClass))})}function a(){const{nextEl:p,prevEl:h}=e.navigation;if(e.params.loop){i(h,!1),i(p,!1);return}i(h,e.isBeginning&&!e.params.rewind),i(p,e.isEnd&&!e.params.rewind)}function l(p){p.preventDefault(),!(e.isBeginning&&!e.params.loop&&!e.params.rewind)&&(e.slidePrev(),r("navigationPrev"))}function s(p){p.preventDefault(),!(e.isEnd&&!e.params.loop&&!e.params.rewind)&&(e.slideNext(),r("navigationNext"))}function c(){const p=e.params.navigation;if(e.params.navigation=QC(e,e.originalParams.navigation,e.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),!(p.nextEl||p.prevEl))return;let h=o(p.nextEl),y=o(p.prevEl);Object.assign(e.navigation,{nextEl:h,prevEl:y}),h=Qe(h),y=Qe(y);const b=(g,v)=>{if(g){if(p.addIcons&&g.matches(".swiper-button-next,.swiper-button-prev")&&!g.querySelector("svg")){const w=document.createElement("div");Es(w,I1),g.appendChild(w.querySelector("svg")),w.remove()}g.addEventListener("click",v==="next"?s:l)}!e.enabled&&g&&g.classList.add(...p.lockClass.split(" "))};h.forEach(g=>b(g,"next")),y.forEach(g=>b(g,"prev"))}function d(){let{nextEl:p,prevEl:h}=e.navigation;p=Qe(p),h=Qe(h);const y=(b,g)=>{b.removeEventListener("click",g==="next"?s:l),b.classList.remove(...e.params.navigation.disabledClass.split(" "))};p.forEach(b=>y(b,"next")),h.forEach(b=>y(b,"prev"))}n("init",()=>{e.params.navigation.enabled===!1?m():(c(),a())}),n("toEdge fromEdge lock unlock",()=>{a()}),n("destroy",()=>{d()}),n("enable disable",()=>{let{nextEl:p,prevEl:h}=e.navigation;if(p=Qe(p),h=Qe(h),e.enabled){a();return}[...p,...h].filter(y=>!!y).forEach(y=>y.classList.add(e.params.navigation.lockClass))}),n("click",(p,h)=>{let{nextEl:y,prevEl:b}=e.navigation;y=Qe(y),b=Qe(b);const g=h.target;let v=b.includes(g)||y.includes(g);if(e.isElement&&!v){const w=h.path||h.composedPath&&h.composedPath();w&&(v=w.find(E=>y.includes(E)||b.includes(E)))}if(e.params.navigation.hideOnClick&&!v){if(e.pagination&&e.params.pagination&&e.params.pagination.clickable&&(e.pagination.el===g||e.pagination.el.contains(g)))return;let w;y.length?w=y[0].classList.contains(e.params.navigation.hiddenClass):b.length&&(w=b[0].classList.contains(e.params.navigation.hiddenClass)),r(w===!0?"navigationShow":"navigationHide"),[...y,...b].filter(E=>!!E).forEach(E=>E.classList.toggle(e.params.navigation.hiddenClass))}});const f=()=>{e.el.classList.remove(...e.params.navigation.navigationDisabledClass.split(" ")),c(),a()},m=()=>{e.el.classList.add(...e.params.navigation.navigationDisabledClass.split(" ")),d()};Object.assign(e.navigation,{enable:f,disable:m,update:a,init:c,destroy:d})}function ha(e=""){return`.${e.trim().replace(/([\.:!+\/()[\]#>~*^$|=,'"@{}\\])/g,"\\$1").replace(/ /g,".")}`}function w6({swiper:e,extendParams:t,on:n,emit:r}){const o="swiper-pagination";t({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:g=>g,formatFractionTotal:g=>g,bulletClass:`${o}-bullet`,bulletActiveClass:`${o}-bullet-active`,modifierClass:`${o}-`,currentClass:`${o}-current`,totalClass:`${o}-total`,hiddenClass:`${o}-hidden`,progressbarFillClass:`${o}-progressbar-fill`,progressbarOppositeClass:`${o}-progressbar-opposite`,clickableClass:`${o}-clickable`,lockClass:`${o}-lock`,horizontalClass:`${o}-horizontal`,verticalClass:`${o}-vertical`,paginationDisabledClass:`${o}-disabled`}}),e.pagination={el:null,bullets:[]};let i,a=0;function l(){return!e.params.pagination.el||!e.pagination.el||Array.isArray(e.pagination.el)&&e.pagination.el.length===0}function s(g,v){const{bulletActiveClass:w}=e.params.pagination;g&&(g=g[`${v==="prev"?"previous":"next"}ElementSibling`],g&&(g.classList.add(`${w}-${v}`),g=g[`${v==="prev"?"previous":"next"}ElementSibling`],g&&g.classList.add(`${w}-${v}-${v}`)))}function c(g,v,w){if(g=g%w,v=v%w,v===g+1)return"next";if(v===g-1)return"previous"}function d(g){const v=g.target.closest(ha(e.params.pagination.bulletClass));if(!v)return;g.preventDefault();const w=ru(v)*e.params.slidesPerGroup;if(e.params.loop){if(e.realIndex===w)return;const E=c(e.realIndex,w,e.slides.length);E==="next"?e.slideNext():E==="previous"?e.slidePrev():e.slideToLoop(w)}else e.slideTo(w)}function f(){const g=e.rtl,v=e.params.pagination;if(l())return;let w=e.pagination.el;w=Qe(w);let E,S;const P=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.slides.length,k=e.params.loop?Math.ceil(P/e.params.slidesPerGroup):e.snapGrid.length;if(e.params.loop?(S=e.previousRealIndex||0,E=e.params.slidesPerGroup>1?Math.floor(e.realIndex/e.params.slidesPerGroup):e.realIndex):typeof e.snapIndex<"u"?(E=e.snapIndex,S=e.previousSnapIndex):(S=e.previousIndex||0,E=e.activeIndex||0),v.type==="bullets"&&e.pagination.bullets&&e.pagination.bullets.length>0){const _=e.pagination.bullets;let T,$,I;if(v.dynamicBullets&&(i=pm(_[0],e.isHorizontal()?"width":"height",!0),w.forEach(M=>{M.style[e.isHorizontal()?"width":"height"]=`${i*(v.dynamicMainBullets+4)}px`}),v.dynamicMainBullets>1&&S!==void 0&&(a+=E-(S||0),a>v.dynamicMainBullets-1?a=v.dynamicMainBullets-1:a<0&&(a=0)),T=Math.max(E-a,0),$=T+(Math.min(_.length,v.dynamicMainBullets)-1),I=($+T)/2),_.forEach(M=>{const j=[...["","-next","-next-next","-prev","-prev-prev","-main"].map(R=>`${v.bulletActiveClass}${R}`)].map(R=>typeof R=="string"&&R.includes(" ")?R.split(" "):R).flat();M.classList.remove(...j)}),w.length>1)_.forEach(M=>{const j=ru(M);j===E?M.classList.add(...v.bulletActiveClass.split(" ")):e.isElement&&M.setAttribute("part","bullet"),v.dynamicBullets&&(j>=T&&j<=$&&M.classList.add(...`${v.bulletActiveClass}-main`.split(" ")),j===T&&s(M,"prev"),j===$&&s(M,"next"))});else{const M=_[E];if(M&&M.classList.add(...v.bulletActiveClass.split(" ")),e.isElement&&_.forEach((j,R)=>{j.setAttribute("part",R===E?"bullet-active":"bullet")}),v.dynamicBullets){const j=_[T],R=_[$];for(let D=T;D<=$;D+=1)_[D]&&_[D].classList.add(...`${v.bulletActiveClass}-main`.split(" "));s(j,"prev"),s(R,"next")}}if(v.dynamicBullets){const M=Math.min(_.length,v.dynamicMainBullets+4),j=(i*M-i)/2-I*i,R=g?"right":"left";_.forEach(D=>{D.style[e.isHorizontal()?R:"top"]=`${j}px`})}}w.forEach((_,T)=>{if(v.type==="fraction"&&(_.querySelectorAll(ha(v.currentClass)).forEach($=>{$.textContent=v.formatFractionCurrent(E+1)}),_.querySelectorAll(ha(v.totalClass)).forEach($=>{$.textContent=v.formatFractionTotal(k)})),v.type==="progressbar"){let $;v.progressbarOpposite?$=e.isHorizontal()?"vertical":"horizontal":$=e.isHorizontal()?"horizontal":"vertical";const I=(E+1)/k;let M=1,j=1;$==="horizontal"?M=I:j=I,_.querySelectorAll(ha(v.progressbarFillClass)).forEach(R=>{R.style.transform=`translate3d(0,0,0) scaleX(${M}) scaleY(${j})`,R.style.transitionDuration=`${e.params.speed}ms`})}v.type==="custom"&&v.renderCustom?(Es(_,v.renderCustom(e,E+1,k)),T===0&&r("paginationRender",_)):(T===0&&r("paginationRender",_),r("paginationUpdate",_)),e.params.watchOverflow&&e.enabled&&_.classList[e.isLocked?"add":"remove"](v.lockClass)})}function m(){const g=e.params.pagination;if(l())return;const v=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.grid&&e.params.grid.rows>1?e.slides.length/Math.ceil(e.params.grid.rows):e.slides.length;let w=e.pagination.el;w=Qe(w);let E="";if(g.type==="bullets"){let S=e.params.loop?Math.ceil(v/e.params.slidesPerGroup):e.snapGrid.length;e.params.freeMode&&e.params.freeMode.enabled&&S>v&&(S=v);for(let P=0;P<S;P+=1)g.renderBullet?E+=g.renderBullet.call(e,P,g.bulletClass):E+=`<${g.bulletElement} ${e.isElement?'part="bullet"':""} class="${g.bulletClass}"></${g.bulletElement}>`}g.type==="fraction"&&(g.renderFraction?E=g.renderFraction.call(e,g.currentClass,g.totalClass):E=`<span class="${g.currentClass}"></span> / <span class="${g.totalClass}"></span>`),g.type==="progressbar"&&(g.renderProgressbar?E=g.renderProgressbar.call(e,g.progressbarFillClass):E=`<span class="${g.progressbarFillClass}"></span>`),e.pagination.bullets=[],w.forEach(S=>{g.type!=="custom"&&Es(S,E||""),g.type==="bullets"&&e.pagination.bullets.push(...S.querySelectorAll(ha(g.bulletClass)))}),g.type!=="custom"&&r("paginationRender",w[0])}function p(){e.params.pagination=QC(e,e.originalParams.pagination,e.params.pagination,{el:"swiper-pagination"});const g=e.params.pagination;if(!g.el)return;let v;typeof g.el=="string"&&e.isElement&&(v=e.el.querySelector(g.el)),!v&&typeof g.el=="string"&&(v=[...document.querySelectorAll(g.el)]),v||(v=g.el),!(!v||v.length===0)&&(e.params.uniqueNavElements&&typeof g.el=="string"&&Array.isArray(v)&&v.length>1&&(v=[...e.el.querySelectorAll(g.el)],v.length>1&&(v=v.find(w=>KC(w,".swiper")[0]===e.el))),Array.isArray(v)&&v.length===1&&(v=v[0]),Object.assign(e.pagination,{el:v}),v=Qe(v),v.forEach(w=>{g.type==="bullets"&&g.clickable&&w.classList.add(...(g.clickableClass||"").split(" ")),w.classList.add(g.modifierClass+g.type),w.classList.add(e.isHorizontal()?g.horizontalClass:g.verticalClass),g.type==="bullets"&&g.dynamicBullets&&(w.classList.add(`${g.modifierClass}${g.type}-dynamic`),a=0,g.dynamicMainBullets<1&&(g.dynamicMainBullets=1)),g.type==="progressbar"&&g.progressbarOpposite&&w.classList.add(g.progressbarOppositeClass),g.clickable&&w.addEventListener("click",d),e.enabled||w.classList.add(g.lockClass)}))}function h(){const g=e.params.pagination;if(l())return;let v=e.pagination.el;v&&(v=Qe(v),v.forEach(w=>{w.classList.remove(g.hiddenClass),w.classList.remove(g.modifierClass+g.type),w.classList.remove(e.isHorizontal()?g.horizontalClass:g.verticalClass),g.clickable&&(w.classList.remove(...(g.clickableClass||"").split(" ")),w.removeEventListener("click",d))})),e.pagination.bullets&&e.pagination.bullets.forEach(w=>w.classList.remove(...g.bulletActiveClass.split(" ")))}n("changeDirection",()=>{if(!e.pagination||!e.pagination.el)return;const g=e.params.pagination;let{el:v}=e.pagination;v=Qe(v),v.forEach(w=>{w.classList.remove(g.horizontalClass,g.verticalClass),w.classList.add(e.isHorizontal()?g.horizontalClass:g.verticalClass)})}),n("init",()=>{e.params.pagination.enabled===!1?b():(p(),m(),f())}),n("activeIndexChange",()=>{typeof e.snapIndex>"u"&&f()}),n("snapIndexChange",()=>{f()}),n("snapGridLengthChange",()=>{m(),f()}),n("destroy",()=>{h()}),n("enable disable",()=>{let{el:g}=e.pagination;g&&(g=Qe(g),g.forEach(v=>v.classList[e.enabled?"remove":"add"](e.params.pagination.lockClass)))}),n("lock unlock",()=>{f()}),n("click",(g,v)=>{const w=v.target,E=Qe(e.pagination.el);if(e.params.pagination.el&&e.params.pagination.hideOnClick&&E&&E.length>0&&!w.classList.contains(e.params.pagination.bulletClass)){if(e.navigation&&(e.navigation.nextEl&&w===e.navigation.nextEl||e.navigation.prevEl&&w===e.navigation.prevEl))return;const S=E[0].classList.contains(e.params.pagination.hiddenClass);r(S===!0?"paginationShow":"paginationHide"),E.forEach(P=>P.classList.toggle(e.params.pagination.hiddenClass))}});const y=()=>{e.el.classList.remove(e.params.pagination.paginationDisabledClass);let{el:g}=e.pagination;g&&(g=Qe(g),g.forEach(v=>v.classList.remove(e.params.pagination.paginationDisabledClass))),p(),m(),f()},b=()=>{e.el.classList.add(e.params.pagination.paginationDisabledClass);let{el:g}=e.pagination;g&&(g=Qe(g),g.forEach(v=>v.classList.add(e.params.pagination.paginationDisabledClass))),h()};Object.assign(e.pagination,{enable:y,disable:b,render:m,update:f,init:p,destroy:h})}function S6({swiper:e,extendParams:t,on:n,emit:r,params:o}){e.autoplay={running:!1,paused:!1,timeLeft:0},t({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!1,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}});let i,a,l=o&&o.autoplay?o.autoplay.delay:3e3,s=o&&o.autoplay?o.autoplay.delay:3e3,c,d=new Date().getTime(),f,m,p,h,y,b;function g(L){!e||e.destroyed||!e.wrapperEl||L.target===e.wrapperEl&&(e.wrapperEl.removeEventListener("transitionend",g),!(b||L.detail&&L.detail.bySwiperTouchMove)&&T())}const v=()=>{if(e.destroyed||!e.autoplay.running)return;e.autoplay.paused?f=!0:f&&(s=c,f=!1);const L=e.autoplay.paused?c:d+s-new Date().getTime();e.autoplay.timeLeft=L,r("autoplayTimeLeft",L,L/l),a=requestAnimationFrame(()=>{v()})},w=()=>{let L;return e.virtual&&e.params.virtual.enabled?L=e.slides.find(A=>A.classList.contains("swiper-slide-active")):L=e.slides[e.activeIndex],L?parseInt(L.getAttribute("data-swiper-autoplay"),10):void 0},E=()=>{let L=e.params.autoplay.delay;const O=w();return!Number.isNaN(O)&&O>0&&(L=O),L},S=L=>{if(e.destroyed||!e.autoplay.running)return;cancelAnimationFrame(a),v();let O=L;typeof O>"u"&&(O=E(),l=O,s=O),c=O;const A=e.params.speed,N=()=>{!e||e.destroyed||(e.params.autoplay.reverseDirection?!e.isBeginning||e.params.loop||e.params.rewind?(e.slidePrev(A,!0,!0),r("autoplay")):e.params.autoplay.stopOnLastSlide||(e.slideTo(e.slides.length-1,A,!0,!0),r("autoplay")):!e.isEnd||e.params.loop||e.params.rewind?(e.slideNext(A,!0,!0),r("autoplay")):e.params.autoplay.stopOnLastSlide||(e.slideTo(0,A,!0,!0),r("autoplay")),e.params.cssMode&&(d=new Date().getTime(),requestAnimationFrame(()=>{S()})))};return O>0?(clearTimeout(i),i=setTimeout(()=>{N()},O)):requestAnimationFrame(()=>{N()}),O},P=()=>{d=new Date().getTime(),e.autoplay.running=!0,S(),r("autoplayStart")},k=()=>{e.autoplay.running=!1,clearTimeout(i),cancelAnimationFrame(a),r("autoplayStop")},_=(L,O)=>{if(e.destroyed||!e.autoplay.running)return;clearTimeout(i),L||(y=!0);const A=()=>{r("autoplayPause"),e.params.autoplay.waitForTransition?e.wrapperEl.addEventListener("transitionend",g):T()};if(e.autoplay.paused=!0,O){A();return}c=(c||e.params.autoplay.delay)-(new Date().getTime()-d),!(e.isEnd&&c<0&&!e.params.loop)&&(c<0&&(c=0),A())},T=()=>{e.isEnd&&c<0&&!e.params.loop||e.destroyed||!e.autoplay.running||(d=new Date().getTime(),y?(y=!1,S(c)):S(),e.autoplay.paused=!1,r("autoplayResume"))},$=()=>{if(e.destroyed||!e.autoplay.running)return;const L=zn();L.visibilityState==="hidden"&&(y=!0,_(!0)),L.visibilityState==="visible"&&T()},I=L=>{L.pointerType==="mouse"&&(y=!0,b=!0,!(e.animating||e.autoplay.paused)&&_(!0))},M=L=>{L.pointerType==="mouse"&&(b=!1,e.autoplay.paused&&T())},j=()=>{e.params.autoplay.pauseOnMouseEnter&&(e.el.addEventListener("pointerenter",I),e.el.addEventListener("pointerleave",M))},R=()=>{e.el&&typeof e.el!="string"&&(e.el.removeEventListener("pointerenter",I),e.el.removeEventListener("pointerleave",M))},D=()=>{zn().addEventListener("visibilitychange",$)},F=()=>{zn().removeEventListener("visibilitychange",$)};n("init",()=>{e.params.autoplay.enabled&&(j(),D(),P())}),n("destroy",()=>{R(),F(),e.autoplay.running&&k()}),n("_freeModeStaticRelease",()=>{(p||y)&&T()}),n("_freeModeNoMomentumRelease",()=>{e.params.autoplay.disableOnInteraction?k():_(!0,!0)}),n("beforeTransitionStart",(L,O,A)=>{e.destroyed||!e.autoplay.running||(A||!e.params.autoplay.disableOnInteraction?_(!0,!0):k())}),n("sliderFirstMove",()=>{if(!(e.destroyed||!e.autoplay.running)){if(e.params.autoplay.disableOnInteraction){k();return}m=!0,p=!1,y=!1,h=setTimeout(()=>{y=!0,p=!0,_(!0)},200)}}),n("touchEnd",()=>{if(!(e.destroyed||!e.autoplay.running||!m)){if(clearTimeout(h),clearTimeout(i),e.params.autoplay.disableOnInteraction){p=!1,m=!1;return}p&&e.params.cssMode&&T(),p=!1,m=!1}}),n("slideChange",()=>{e.destroyed||!e.autoplay.running||e.autoplay.paused&&(c=E(),l=E())}),Object.assign(e.autoplay,{start:P,stop:k,pause:_,resume:T})}let Yf;function E6(){const e=kt(),t=zn();return{smoothScroll:t.documentElement&&t.documentElement.style&&"scrollBehavior"in t.documentElement.style,touch:!!("ontouchstart"in e||e.DocumentTouch&&t instanceof e.DocumentTouch)}}function ZC(){return Yf||(Yf=E6()),Yf}let Xf;function C6({userAgent:e}={}){const t=ZC(),n=kt(),r=n.navigator.platform,o=e||n.navigator.userAgent,i={ios:!1,android:!1},a=n.screen.width,l=n.screen.height,s=o.match(/(Android);?[\s\/]+([\d.]+)?/);let c=o.match(/(iPad)(?!\1).*OS\s([\d_]+)/);const d=o.match(/(iPod)(.*OS\s([\d_]+))?/),f=!c&&o.match(/(iPhone\sOS|iOS)\s([\d_]+)/),m=r==="Win32";let p=r==="MacIntel";const h=["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"];return!c&&p&&t.touch&&h.indexOf(`${a}x${l}`)>=0&&(c=o.match(/(Version)\/([\d.]+)/),c||(c=[0,1,"13_0_0"]),p=!1),s&&!m&&(i.os="android",i.android=!0),(c||f||d)&&(i.os="ios",i.ios=!0),i}function JC(e={}){return Xf||(Xf=C6(e)),Xf}let Kf;function _6(){const e=kt(),t=JC();let n=!1;function r(){const l=e.navigator.userAgent.toLowerCase();return l.indexOf("safari")>=0&&l.indexOf("chrome")<0&&l.indexOf("android")<0}if(r()){const l=String(e.navigator.userAgent);if(l.includes("Version/")){const[s,c]=l.split("Version/")[1].split(" ")[0].split(".").map(d=>Number(d));n=s<16||s===16&&c<2}}const o=/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent),i=r(),a=i||o&&t.ios;return{isSafari:n||i,needPerspectiveFix:n,need3dFix:a,isWebView:o}}function e_(){return Kf||(Kf=_6()),Kf}function k6({swiper:e,on:t,emit:n}){const r=kt();let o=null,i=null;const a=()=>{!e||e.destroyed||!e.initialized||(n("beforeResize"),n("resize"))},l=()=>{!e||e.destroyed||!e.initialized||(o=new ResizeObserver(d=>{i=r.requestAnimationFrame(()=>{const{width:f,height:m}=e;let p=f,h=m;d.forEach(({contentBoxSize:y,contentRect:b,target:g})=>{g&&g!==e.el||(p=b?b.width:(y[0]||y).inlineSize,h=b?b.height:(y[0]||y).blockSize)}),(p!==f||h!==m)&&a()})}),o.observe(e.el))},s=()=>{i&&r.cancelAnimationFrame(i),o&&o.unobserve&&e.el&&(o.unobserve(e.el),o=null)},c=()=>{!e||e.destroyed||!e.initialized||n("orientationchange")};t("init",()=>{if(e.params.resizeObserver&&typeof r.ResizeObserver<"u"){l();return}r.addEventListener("resize",a),r.addEventListener("orientationchange",c)}),t("destroy",()=>{s(),r.removeEventListener("resize",a),r.removeEventListener("orientationchange",c)})}function P6({swiper:e,extendParams:t,on:n,emit:r}){const o=[],i=kt(),a=(c,d={})=>{const f=i.MutationObserver||i.WebkitMutationObserver,m=new f(p=>{if(e.__preventObserver__)return;if(p.length===1){r("observerUpdate",p[0]);return}const h=function(){r("observerUpdate",p[0])};i.requestAnimationFrame?i.requestAnimationFrame(h):i.setTimeout(h,0)});m.observe(c,{attributes:typeof d.attributes>"u"?!0:d.attributes,childList:e.isElement||(typeof d.childList>"u"?!0:d).childList,characterData:typeof d.characterData>"u"?!0:d.characterData}),o.push(m)},l=()=>{if(e.params.observer){if(e.params.observeParents){const c=KC(e.hostEl);for(let d=0;d<c.length;d+=1)a(c[d])}a(e.hostEl,{childList:e.params.observeSlideChildren}),a(e.wrapperEl,{attributes:!1})}},s=()=>{o.forEach(c=>{c.disconnect()}),o.splice(0,o.length)};t({observer:!1,observeParents:!1,observeSlideChildren:!1}),n("init",l),n("destroy",s)}var O6={on(e,t,n){const r=this;if(!r.eventsListeners||r.destroyed||typeof t!="function")return r;const o=n?"unshift":"push";return e.split(" ").forEach(i=>{r.eventsListeners[i]||(r.eventsListeners[i]=[]),r.eventsListeners[i][o](t)}),r},once(e,t,n){const r=this;if(!r.eventsListeners||r.destroyed||typeof t!="function")return r;function o(...i){r.off(e,o),o.__emitterProxy&&delete o.__emitterProxy,t.apply(r,i)}return o.__emitterProxy=t,r.on(e,o,n)},onAny(e,t){const n=this;if(!n.eventsListeners||n.destroyed||typeof e!="function")return n;const r=t?"unshift":"push";return n.eventsAnyListeners.indexOf(e)<0&&n.eventsAnyListeners[r](e),n},offAny(e){const t=this;if(!t.eventsListeners||t.destroyed||!t.eventsAnyListeners)return t;const n=t.eventsAnyListeners.indexOf(e);return n>=0&&t.eventsAnyListeners.splice(n,1),t},off(e,t){const n=this;return!n.eventsListeners||n.destroyed||!n.eventsListeners||e.split(" ").forEach(r=>{typeof t>"u"?n.eventsListeners[r]=[]:n.eventsListeners[r]&&n.eventsListeners[r].forEach((o,i)=>{(o===t||o.__emitterProxy&&o.__emitterProxy===t)&&n.eventsListeners[r].splice(i,1)})}),n},emit(...e){const t=this;if(!t.eventsListeners||t.destroyed||!t.eventsListeners)return t;let n,r,o;return typeof e[0]=="string"||Array.isArray(e[0])?(n=e[0],r=e.slice(1,e.length),o=t):(n=e[0].events,r=e[0].data,o=e[0].context||t),r.unshift(o),(Array.isArray(n)?n:n.split(" ")).forEach(a=>{t.eventsAnyListeners&&t.eventsAnyListeners.length&&t.eventsAnyListeners.forEach(l=>{l.apply(o,[a,...r])}),t.eventsListeners&&t.eventsListeners[a]&&t.eventsListeners[a].forEach(l=>{l.apply(o,r)})}),t}};function T6(){const e=this;let t,n;const r=e.el;typeof e.params.width<"u"&&e.params.width!==null?t=e.params.width:t=r.clientWidth,typeof e.params.height<"u"&&e.params.height!==null?n=e.params.height:n=r.clientHeight,!(t===0&&e.isHorizontal()||n===0&&e.isVertical())&&(t=t-parseInt(Tr(r,"padding-left")||0,10)-parseInt(Tr(r,"padding-right")||0,10),n=n-parseInt(Tr(r,"padding-top")||0,10)-parseInt(Tr(r,"padding-bottom")||0,10),Number.isNaN(t)&&(t=0),Number.isNaN(n)&&(n=0),Object.assign(e,{width:t,height:n,size:e.isHorizontal()?t:n}))}function j6(){const e=this;function t($,I){return parseFloat($.getPropertyValue(e.getDirectionLabel(I))||0)}const n=e.params,{wrapperEl:r,slidesEl:o,rtlTranslate:i,wrongRTL:a}=e,l=e.virtual&&n.virtual.enabled,s=l?e.virtual.slides.length:e.slides.length,c=Dn(o,`.${e.params.slideClass}, swiper-slide`),d=l?e.virtual.slides.length:c.length;let f=[];const m=[],p=[];let h=n.slidesOffsetBefore;typeof h=="function"&&(h=n.slidesOffsetBefore.call(e));let y=n.slidesOffsetAfter;typeof y=="function"&&(y=n.slidesOffsetAfter.call(e));const b=e.snapGrid.length,g=e.slidesGrid.length,v=e.size-h-y;let w=n.spaceBetween,E=-h,S=0,P=0;if(typeof v>"u")return;typeof w=="string"&&w.indexOf("%")>=0?w=parseFloat(w.replace("%",""))/100*v:typeof w=="string"&&(w=parseFloat(w)),e.virtualSize=-w-h-y,c.forEach($=>{i?$.style.marginLeft="":$.style.marginRight="",$.style.marginBottom="",$.style.marginTop=""}),n.centeredSlides&&n.cssMode&&(No(r,"--swiper-centered-offset-before",""),No(r,"--swiper-centered-offset-after","")),n.cssMode&&(No(r,"--swiper-slides-offset-before",`${h}px`),No(r,"--swiper-slides-offset-after",`${y}px`));const k=n.grid&&n.grid.rows>1&&e.grid;k?e.grid.initSlides(c):e.grid&&e.grid.unsetSlides();let _;const T=n.slidesPerView==="auto"&&n.breakpoints&&Object.keys(n.breakpoints).filter($=>typeof n.breakpoints[$].slidesPerView<"u").length>0;for(let $=0;$<d;$+=1){_=0;const I=c[$];if(!(I&&(k&&e.grid.updateSlide($,I,c),Tr(I,"display")==="none"))){if(l&&n.slidesPerView==="auto")n.virtual.slidesPerViewAutoSlideSize&&(_=n.virtual.slidesPerViewAutoSlideSize),_&&I&&(n.roundLengths&&(_=Math.floor(_)),I.style[e.getDirectionLabel("width")]=`${_}px`);else if(n.slidesPerView==="auto"){T&&(I.style[e.getDirectionLabel("width")]="");const M=getComputedStyle(I),j=I.style.transform,R=I.style.webkitTransform;if(j&&(I.style.transform="none"),R&&(I.style.webkitTransform="none"),n.roundLengths)_=e.isHorizontal()?pm(I,"width",!0):pm(I,"height",!0);else{const D=t(M,"width"),F=t(M,"padding-left"),L=t(M,"padding-right"),O=t(M,"margin-left"),A=t(M,"margin-right"),N=M.getPropertyValue("box-sizing");if(N&&N==="border-box")_=D+O+A;else{const{clientWidth:B,offsetWidth:z}=I;_=D+F+L+O+A+(z-B)}}j&&(I.style.transform=j),R&&(I.style.webkitTransform=R),n.roundLengths&&(_=Math.floor(_))}else _=(v-(n.slidesPerView-1)*w)/n.slidesPerView,n.roundLengths&&(_=Math.floor(_)),I&&(I.style[e.getDirectionLabel("width")]=`${_}px`);I&&(I.swiperSlideSize=_),p.push(_),n.centeredSlides?(E=E+_/2+S/2+w,S===0&&$!==0&&(E=E-v/2-w),$===0&&(E=E-v/2-w),Math.abs(E)<1/1e3&&(E=0),n.roundLengths&&(E=Math.floor(E)),P%n.slidesPerGroup===0&&f.push(E),m.push(E)):(n.roundLengths&&(E=Math.floor(E)),(P-Math.min(e.params.slidesPerGroupSkip,P))%e.params.slidesPerGroup===0&&f.push(E),m.push(E),E=E+_+w),e.virtualSize+=_+w,S=_,P+=1}}if(e.virtualSize=Math.max(e.virtualSize,v)+y,i&&a&&(n.effect==="slide"||n.effect==="coverflow")&&(r.style.width=`${e.virtualSize+w}px`),n.setWrapperSize&&(r.style[e.getDirectionLabel("width")]=`${e.virtualSize+w}px`),k&&e.grid.updateWrapperSize(_,f),!n.centeredSlides){const $=n.slidesPerView!=="auto"&&n.slidesPerView%1!==0,I=n.snapToSlideEdge&&!n.loop&&(n.slidesPerView==="auto"||$);let M=f.length;if(I){let R;if(n.slidesPerView==="auto"){R=1;let D=0;for(let F=p.length-1;F>=0&&(D+=p[F]+(F<p.length-1?w:0),D<=v);F-=1)R=p.length-F}else R=Math.floor(n.slidesPerView);M=Math.max(d-R,0)}const j=[];for(let R=0;R<f.length;R+=1){let D=f[R];n.roundLengths&&(D=Math.floor(D)),I?R<=M&&j.push(D):f[R]<=e.virtualSize-v&&j.push(D)}f=j,Math.floor(e.virtualSize-v)-Math.floor(f[f.length-1])>1&&(I||f.push(e.virtualSize-v))}if(l&&n.loop){const $=p[0]+w;if(n.slidesPerGroup>1){const I=Math.ceil((e.virtual.slidesBefore+e.virtual.slidesAfter)/n.slidesPerGroup),M=$*n.slidesPerGroup;for(let j=0;j<I;j+=1)f.push(f[f.length-1]+M)}for(let I=0;I<e.virtual.slidesBefore+e.virtual.slidesAfter;I+=1)n.slidesPerGroup===1&&f.push(f[f.length-1]+$),m.push(m[m.length-1]+$),e.virtualSize+=$}if(f.length===0&&(f=[0]),w!==0){const $=e.isHorizontal()&&i?"marginLeft":e.getDirectionLabel("marginRight");c.filter((I,M)=>!n.cssMode||n.loop?!0:M!==c.length-1).forEach(I=>{I.style[$]=`${w}px`})}if(n.centeredSlides&&n.centeredSlidesBounds){let $=0;p.forEach(M=>{$+=M+(w||0)}),$-=w;const I=$>v?$-v:0;f=f.map(M=>M<=0?-h:M>I?I+y:M)}if(n.centerInsufficientSlides){let $=0;if(p.forEach(I=>{$+=I+(w||0)}),$-=w,$<v){const I=(v-$)/2;f.forEach((M,j)=>{f[j]=M-I}),m.forEach((M,j)=>{m[j]=M+I})}}if(Object.assign(e,{slides:c,snapGrid:f,slidesGrid:m,slidesSizesGrid:p}),n.centeredSlides&&n.cssMode&&!n.centeredSlidesBounds){No(r,"--swiper-centered-offset-before",`${-f[0]}px`),No(r,"--swiper-centered-offset-after",`${e.size/2-p[p.length-1]/2}px`);const $=-e.snapGrid[0],I=-e.slidesGrid[0];e.snapGrid=e.snapGrid.map(M=>M+$),e.slidesGrid=e.slidesGrid.map(M=>M+I)}if(d!==s&&e.emit("slidesLengthChange"),f.length!==b&&(e.params.watchOverflow&&e.checkOverflow(),e.emit("snapGridLengthChange")),m.length!==g&&e.emit("slidesGridLengthChange"),n.watchSlidesProgress&&e.updateSlidesOffset(),e.emit("slidesUpdated"),!l&&!n.cssMode&&(n.effect==="slide"||n.effect==="fade")){const $=`${n.containerModifierClass}backface-hidden`,I=e.el.classList.contains($);d<=n.maxBackfaceHiddenSlides?I||e.el.classList.add($):I&&e.el.classList.remove($)}}function $6(e){const t=this,n=[],r=t.virtual&&t.params.virtual.enabled;let o=0,i;typeof e=="number"?t.setTransition(e):e===!0&&t.setTransition(t.params.speed);const a=l=>r?t.slides[t.getSlideIndexByData(l)]:t.slides[l];if(t.params.slidesPerView!=="auto"&&t.params.slidesPerView>1)if(t.params.centeredSlides)(t.visibleSlides||[]).forEach(l=>{n.push(l)});else for(i=0;i<Math.ceil(t.params.slidesPerView);i+=1){const l=t.activeIndex+i;if(l>t.slides.length&&!r)break;n.push(a(l))}else n.push(a(t.activeIndex));for(i=0;i<n.length;i+=1)if(typeof n[i]<"u"){const l=n[i].offsetHeight;o=l>o?l:o}(o||o===0)&&(t.wrapperEl.style.height=`${o}px`)}function I6(){const e=this,t=e.slides,n=e.isElement?e.isHorizontal()?e.wrapperEl.offsetLeft:e.wrapperEl.offsetTop:0;for(let r=0;r<t.length;r+=1)t[r].swiperSlideOffset=(e.isHorizontal()?t[r].offsetLeft:t[r].offsetTop)-n-e.cssOverflowAdjustment()}const M1=(e,t,n)=>{t&&!e.classList.contains(n)?e.classList.add(n):!t&&e.classList.contains(n)&&e.classList.remove(n)};function M6(e=this&&this.translate||0){const t=this,n=t.params,{slides:r,rtlTranslate:o,snapGrid:i}=t;if(r.length===0)return;typeof r[0].swiperSlideOffset>"u"&&t.updateSlidesOffset();let a=-e;o&&(a=e),t.visibleSlidesIndexes=[],t.visibleSlides=[];let l=n.spaceBetween;typeof l=="string"&&l.indexOf("%")>=0?l=parseFloat(l.replace("%",""))/100*t.size:typeof l=="string"&&(l=parseFloat(l));for(let s=0;s<r.length;s+=1){const c=r[s];let d=c.swiperSlideOffset;n.cssMode&&n.centeredSlides&&(d-=r[0].swiperSlideOffset);const f=(a+(n.centeredSlides?t.minTranslate():0)-d)/(c.swiperSlideSize+l),m=(a-i[0]+(n.centeredSlides?t.minTranslate():0)-d)/(c.swiperSlideSize+l),p=-(a-d),h=p+t.slidesSizesGrid[s],y=p>=0&&p<=t.size-t.slidesSizesGrid[s],b=p>=0&&p<t.size-1||h>1&&h<=t.size||p<=0&&h>=t.size;b&&(t.visibleSlides.push(c),t.visibleSlidesIndexes.push(s)),M1(c,b,n.slideVisibleClass),M1(c,y,n.slideFullyVisibleClass),c.progress=o?-f:f,c.originalProgress=o?-m:m}}function A6(e){const t=this;if(typeof e>"u"){const d=t.rtlTranslate?-1:1;e=t&&t.translate&&t.translate*d||0}const n=t.params,r=t.maxTranslate()-t.minTranslate();let{progress:o,isBeginning:i,isEnd:a,progressLoop:l}=t;const s=i,c=a;if(r===0)o=0,i=!0,a=!0;else{o=(e-t.minTranslate())/r;const d=Math.abs(e-t.minTranslate())<1,f=Math.abs(e-t.maxTranslate())<1;i=d||o<=0,a=f||o>=1,d&&(o=0),f&&(o=1)}if(n.loop){const d=t.getSlideIndexByData(0),f=t.getSlideIndexByData(t.slides.length-1),m=t.slidesGrid[d],p=t.slidesGrid[f],h=t.slidesGrid[t.slidesGrid.length-1],y=Math.abs(e);y>=m?l=(y-m)/h:l=(y+h-p)/h,l>1&&(l-=1)}Object.assign(t,{progress:o,progressLoop:l,isBeginning:i,isEnd:a}),(n.watchSlidesProgress||n.centeredSlides&&n.autoHeight)&&t.updateSlidesProgress(e),i&&!s&&t.emit("reachBeginning toEdge"),a&&!c&&t.emit("reachEnd toEdge"),(s&&!i||c&&!a)&&t.emit("fromEdge"),t.emit("progress",o)}const Qf=(e,t,n)=>{t&&!e.classList.contains(n)?e.classList.add(n):!t&&e.classList.contains(n)&&e.classList.remove(n)};function D6(){const e=this,{slides:t,params:n,slidesEl:r,activeIndex:o}=e,i=e.virtual&&n.virtual.enabled,a=e.grid&&n.grid&&n.grid.rows>1,l=f=>Dn(r,`.${n.slideClass}${f}, swiper-slide${f}`)[0];let s,c,d;if(i)if(n.loop){let f=o-e.virtual.slidesBefore;f<0&&(f=e.virtual.slides.length+f),f>=e.virtual.slides.length&&(f-=e.virtual.slides.length),s=l(`[data-swiper-slide-index="${f}"]`)}else s=l(`[data-swiper-slide-index="${o}"]`);else a?(s=t.find(f=>f.column===o),d=t.find(f=>f.column===o+1),c=t.find(f=>f.column===o-1)):s=t[o];s&&(a||(d=x6(s,`.${n.slideClass}, swiper-slide`)[0],n.loop&&!d&&(d=t[0]),c=y6(s,`.${n.slideClass}, swiper-slide`)[0],n.loop&&!c===0&&(c=t[t.length-1]))),t.forEach(f=>{Qf(f,f===s,n.slideActiveClass),Qf(f,f===d,n.slideNextClass),Qf(f,f===c,n.slidePrevClass)}),e.emitSlidesClasses()}const rc=(e,t)=>{if(!e||e.destroyed||!e.params)return;const n=()=>e.isElement?"swiper-slide":`.${e.params.slideClass}`,r=t.closest(n());if(r){let o=r.querySelector(`.${e.params.lazyPreloaderClass}`);!o&&e.isElement&&(r.shadowRoot?o=r.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`):requestAnimationFrame(()=>{r.shadowRoot&&(o=r.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`),o&&!o.lazyPreloaderManaged&&o.remove())})),o&&!o.lazyPreloaderManaged&&o.remove()}},Zf=(e,t)=>{if(!e.slides[t])return;const n=e.slides[t].querySelector('[loading="lazy"]');n&&n.removeAttribute("loading")},hm=e=>{if(!e||e.destroyed||!e.params)return;let t=e.params.lazyPreloadPrevNext;const n=e.slides.length;if(!n||!t||t<0)return;t=Math.min(t,n);const r=e.params.slidesPerView==="auto"?e.slidesPerViewDynamic():Math.ceil(e.params.slidesPerView),o=e.activeIndex;if(e.params.grid&&e.params.grid.rows>1){const a=o,l=[a-t];l.push(...Array.from({length:t}).map((s,c)=>a+r+c)),e.slides.forEach((s,c)=>{l.includes(s.column)&&Zf(e,c)});return}const i=o+r-1;if(e.params.rewind||e.params.loop)for(let a=o-t;a<=i+t;a+=1){const l=(a%n+n)%n;(l<o||l>i)&&Zf(e,l)}else for(let a=Math.max(o-t,0);a<=Math.min(i+t,n-1);a+=1)a!==o&&(a>i||a<o)&&Zf(e,a)};function L6(e){const{slidesGrid:t,params:n}=e,r=e.rtlTranslate?e.translate:-e.translate;let o;for(let i=0;i<t.length;i+=1)typeof t[i+1]<"u"?r>=t[i]&&r<t[i+1]-(t[i+1]-t[i])/2?o=i:r>=t[i]&&r<t[i+1]&&(o=i+1):r>=t[i]&&(o=i);return n.normalizeSlideIndex&&(o<0||typeof o>"u")&&(o=0),o}function R6(e){const t=this,n=t.rtlTranslate?t.translate:-t.translate,{snapGrid:r,params:o,activeIndex:i,realIndex:a,snapIndex:l}=t;let s=e,c;const d=p=>{let h=p-t.virtual.slidesBefore;return h<0&&(h=t.virtual.slides.length+h),h>=t.virtual.slides.length&&(h-=t.virtual.slides.length),h};if(typeof s>"u"&&(s=L6(t)),r.indexOf(n)>=0)c=r.indexOf(n);else{const p=Math.min(o.slidesPerGroupSkip,s);c=p+Math.floor((s-p)/o.slidesPerGroup)}if(c>=r.length&&(c=r.length-1),s===i&&!t.params.loop){c!==l&&(t.snapIndex=c,t.emit("snapIndexChange"));return}if(s===i&&t.params.loop&&t.virtual&&t.params.virtual.enabled){t.realIndex=d(s);return}const f=t.grid&&o.grid&&o.grid.rows>1;let m;if(t.virtual&&o.virtual.enabled)o.loop?m=d(s):m=s;else if(f){const p=t.slides.find(y=>y.column===s);let h=parseInt(p.getAttribute("data-swiper-slide-index"),10);Number.isNaN(h)&&(h=Math.max(t.slides.indexOf(p),0)),m=Math.floor(h/o.grid.rows)}else if(t.slides[s]){const p=t.slides[s].getAttribute("data-swiper-slide-index");p?m=parseInt(p,10):m=s}else m=s;Object.assign(t,{previousSnapIndex:l,snapIndex:c,previousRealIndex:a,realIndex:m,previousIndex:i,activeIndex:s}),t.initialized&&hm(t),t.emit("activeIndexChange"),t.emit("snapIndexChange"),(t.initialized||t.params.runCallbacksOnInit)&&(a!==m&&t.emit("realIndexChange"),t.emit("slideChange"))}function F6(e,t){const n=this,r=n.params;let o=e.closest(`.${r.slideClass}, swiper-slide`);!o&&n.isElement&&t&&t.length>1&&t.includes(e)&&[...t.slice(t.indexOf(e)+1,t.length)].forEach(l=>{!o&&l.matches&&l.matches(`.${r.slideClass}, swiper-slide`)&&(o=l)});let i=!1,a;if(o){for(let l=0;l<n.slides.length;l+=1)if(n.slides[l]===o){i=!0,a=l;break}}if(o&&i)n.clickedSlide=o,n.virtual&&n.params.virtual.enabled?n.clickedIndex=parseInt(o.getAttribute("data-swiper-slide-index"),10):n.clickedIndex=a;else{n.clickedSlide=void 0,n.clickedIndex=void 0;return}r.slideToClickedSlide&&n.clickedIndex!==void 0&&n.clickedIndex!==n.activeIndex&&n.slideToClickedSlide()}var z6={updateSize:T6,updateSlides:j6,updateAutoHeight:$6,updateSlidesOffset:I6,updateSlidesProgress:M6,updateProgress:A6,updateSlidesClasses:D6,updateActiveIndex:R6,updateClickedSlide:F6};function N6(e=this.isHorizontal()?"x":"y"){const t=this,{params:n,rtlTranslate:r,translate:o,wrapperEl:i}=t;if(n.virtualTranslate)return r?-o:o;if(n.cssMode)return o;let a=h6(i,e);return a+=t.cssOverflowAdjustment(),r&&(a=-a),a||0}function B6(e,t){const n=this,{rtlTranslate:r,params:o,wrapperEl:i,progress:a}=n;let l=0,s=0;const c=0;n.isHorizontal()?l=r?-e:e:s=e,o.roundLengths&&(l=Math.floor(l),s=Math.floor(s)),n.previousTranslate=n.translate,n.translate=n.isHorizontal()?l:s,o.cssMode?i[n.isHorizontal()?"scrollLeft":"scrollTop"]=n.isHorizontal()?-l:-s:o.virtualTranslate||(n.isHorizontal()?l-=n.cssOverflowAdjustment():s-=n.cssOverflowAdjustment(),i.style.transform=`translate3d(${l}px, ${s}px, ${c}px)`);let d;const f=n.maxTranslate()-n.minTranslate();f===0?d=0:d=(e-n.minTranslate())/f,d!==a&&n.updateProgress(e),n.emit("setTranslate",n.translate,t)}function V6(){return-this.snapGrid[0]}function W6(){return-this.snapGrid[this.snapGrid.length-1]}function U6(e=0,t=this.params.speed,n=!0,r=!0,o){const i=this,{params:a,wrapperEl:l}=i;if(i.animating&&a.preventInteractionOnTransition)return!1;const s=i.minTranslate(),c=i.maxTranslate();let d;if(r&&e>s?d=s:r&&e<c?d=c:d=e,i.updateProgress(d),a.cssMode){const f=i.isHorizontal();if(t===0)l[f?"scrollLeft":"scrollTop"]=-d;else{if(!i.support.smoothScroll)return XC({swiper:i,targetPosition:-d,side:f?"left":"top"}),!0;l.scrollTo({[f?"left":"top"]:-d,behavior:"smooth"})}return!0}return t===0?(i.setTransition(0),i.setTranslate(d),n&&(i.emit("beforeTransitionStart",t,o),i.emit("transitionEnd"))):(i.setTransition(t),i.setTranslate(d),n&&(i.emit("beforeTransitionStart",t,o),i.emit("transitionStart")),i.animating||(i.animating=!0,i.onTranslateToWrapperTransitionEnd||(i.onTranslateToWrapperTransitionEnd=function(m){!i||i.destroyed||m.target===this&&(i.wrapperEl.removeEventListener("transitionend",i.onTranslateToWrapperTransitionEnd),i.onTranslateToWrapperTransitionEnd=null,delete i.onTranslateToWrapperTransitionEnd,i.animating=!1,n&&i.emit("transitionEnd"))}),i.wrapperEl.addEventListener("transitionend",i.onTranslateToWrapperTransitionEnd))),!0}var H6={getTranslate:N6,setTranslate:B6,minTranslate:V6,maxTranslate:W6,translateTo:U6};function G6(e,t){const n=this;n.params.cssMode||(n.wrapperEl.style.transitionDuration=`${e}ms`,n.wrapperEl.style.transitionDelay=e===0?"0ms":""),n.emit("setTransition",e,t)}function t_({swiper:e,runCallbacks:t,direction:n,step:r}){const{activeIndex:o,previousIndex:i}=e;let a=n;a||(o>i?a="next":o<i?a="prev":a="reset"),e.emit(`transition${r}`),t&&a==="reset"?e.emit(`slideResetTransition${r}`):t&&o!==i&&(e.emit(`slideChangeTransition${r}`),a==="next"?e.emit(`slideNextTransition${r}`):e.emit(`slidePrevTransition${r}`))}function q6(e=!0,t){const n=this,{params:r}=n;r.cssMode||(r.autoHeight&&n.updateAutoHeight(),t_({swiper:n,runCallbacks:e,direction:t,step:"Start"}))}function Y6(e=!0,t){const n=this,{params:r}=n;n.animating=!1,!r.cssMode&&(n.setTransition(0),t_({swiper:n,runCallbacks:e,direction:t,step:"End"}))}var X6={setTransition:G6,transitionStart:q6,transitionEnd:Y6};function K6(e=0,t,n=!0,r,o){typeof e=="string"&&(e=parseInt(e,10));const i=this;let a=e;a<0&&(a=0);const{params:l,snapGrid:s,slidesGrid:c,previousIndex:d,activeIndex:f,rtlTranslate:m,wrapperEl:p,enabled:h}=i;if(!h&&!r&&!o||i.destroyed||i.animating&&l.preventInteractionOnTransition)return!1;typeof t>"u"&&(t=i.params.speed);const y=Math.min(i.params.slidesPerGroupSkip,a);let b=y+Math.floor((a-y)/i.params.slidesPerGroup);b>=s.length&&(b=s.length-1);const g=-s[b];if(l.normalizeSlideIndex)for(let k=0;k<c.length;k+=1){const _=-Math.floor(g*100),T=Math.floor(c[k]*100),$=Math.floor(c[k+1]*100);typeof c[k+1]<"u"?_>=T&&_<$-($-T)/2?a=k:_>=T&&_<$&&(a=k+1):_>=T&&(a=k)}if(i.initialized&&a!==f&&(!i.allowSlideNext&&(m?g>i.translate&&g>i.minTranslate():g<i.translate&&g<i.minTranslate())||!i.allowSlidePrev&&g>i.translate&&g>i.maxTranslate()&&(f||0)!==a))return!1;a!==(d||0)&&n&&i.emit("beforeSlideChangeStart"),i.updateProgress(g);let v;a>f?v="next":a<f?v="prev":v="reset";const w=i.virtual&&i.params.virtual.enabled;if(!(w&&o)&&(m&&-g===i.translate||!m&&g===i.translate))return i.updateActiveIndex(a),l.autoHeight&&i.updateAutoHeight(),i.updateSlidesClasses(),l.effect!=="slide"&&i.setTranslate(g),v!=="reset"&&(i.transitionStart(n,v),i.transitionEnd(n,v)),!1;if(l.cssMode){const k=i.isHorizontal(),_=m?g:-g;if(t===0)w&&(i.wrapperEl.style.scrollSnapType="none",i._immediateVirtual=!0),w&&!i._cssModeVirtualInitialSet&&i.params.initialSlide>0?(i._cssModeVirtualInitialSet=!0,requestAnimationFrame(()=>{p[k?"scrollLeft":"scrollTop"]=_})):p[k?"scrollLeft":"scrollTop"]=_,w&&requestAnimationFrame(()=>{i.wrapperEl.style.scrollSnapType="",i._immediateVirtual=!1});else{if(!i.support.smoothScroll)return XC({swiper:i,targetPosition:_,side:k?"left":"top"}),!0;p.scrollTo({[k?"left":"top"]:_,behavior:"smooth"})}return!0}const P=e_().isSafari;return w&&!o&&P&&i.isElement&&i.virtual.update(!1,!1,a),i.setTransition(t),i.setTranslate(g),i.updateActiveIndex(a),i.updateSlidesClasses(),i.emit("beforeTransitionStart",t,r),i.transitionStart(n,v),t===0?i.transitionEnd(n,v):i.animating||(i.animating=!0,i.onSlideToWrapperTransitionEnd||(i.onSlideToWrapperTransitionEnd=function(_){!i||i.destroyed||_.target===this&&(i.wrapperEl.removeEventListener("transitionend",i.onSlideToWrapperTransitionEnd),i.onSlideToWrapperTransitionEnd=null,delete i.onSlideToWrapperTransitionEnd,i.transitionEnd(n,v))}),i.wrapperEl.addEventListener("transitionend",i.onSlideToWrapperTransitionEnd)),!0}function Q6(e=0,t,n=!0,r){typeof e=="string"&&(e=parseInt(e,10));const o=this;if(o.destroyed)return;typeof t>"u"&&(t=o.params.speed);const i=o.grid&&o.params.grid&&o.params.grid.rows>1;let a=e;if(o.params.loop)if(o.virtual&&o.params.virtual.enabled)a=a+o.virtual.slidesBefore;else{let l;if(i){const y=a*o.params.grid.rows;l=o.slides.find(b=>b.getAttribute("data-swiper-slide-index")*1===y).column}else l=o.getSlideIndexByData(a);const s=i?Math.ceil(o.slides.length/o.params.grid.rows):o.slides.length,{centeredSlides:c,slidesOffsetBefore:d,slidesOffsetAfter:f}=o.params,m=c||!!d||!!f;let p=o.params.slidesPerView;p==="auto"?p=o.slidesPerViewDynamic():(p=Math.ceil(parseFloat(o.params.slidesPerView,10)),m&&p%2===0&&(p=p+1));let h=s-l<p;if(m&&(h=h||l<Math.ceil(p/2)),r&&m&&o.params.slidesPerView!=="auto"&&!i&&(h=!1),h){const y=m?l<o.activeIndex?"prev":"next":l-o.activeIndex-1<o.params.slidesPerView?"next":"prev";o.loopFix({direction:y,slideTo:!0,activeSlideIndex:y==="next"?l+1:l-s+1,slideRealIndex:y==="next"?o.realIndex:void 0})}if(i){const y=a*o.params.grid.rows;a=o.slides.find(b=>b.getAttribute("data-swiper-slide-index")*1===y).column}else a=o.getSlideIndexByData(a)}return requestAnimationFrame(()=>{o.slideTo(a,t,n,r)}),o}function Z6(e,t=!0,n){const r=this,{enabled:o,params:i,animating:a}=r;if(!o||r.destroyed)return r;typeof e>"u"&&(e=r.params.speed);let l=i.slidesPerGroup;i.slidesPerView==="auto"&&i.slidesPerGroup===1&&i.slidesPerGroupAuto&&(l=Math.max(r.slidesPerViewDynamic("current",!0),1));const s=r.activeIndex<i.slidesPerGroupSkip?1:l,c=r.virtual&&i.virtual.enabled;if(i.loop){if(a&&!c&&i.loopPreventsSliding)return!1;if(r.loopFix({direction:"next"}),r._clientLeft=r.wrapperEl.clientLeft,r.activeIndex===r.slides.length-1&&i.cssMode)return requestAnimationFrame(()=>{r.slideTo(r.activeIndex+s,e,t,n)}),!0}return i.rewind&&r.isEnd?r.slideTo(0,e,t,n):r.slideTo(r.activeIndex+s,e,t,n)}function J6(e,t=!0,n){const r=this,{params:o,snapGrid:i,slidesGrid:a,rtlTranslate:l,enabled:s,animating:c}=r;if(!s||r.destroyed)return r;typeof e>"u"&&(e=r.params.speed);const d=r.virtual&&o.virtual.enabled;if(o.loop){if(c&&!d&&o.loopPreventsSliding)return!1;r.loopFix({direction:"prev"}),r._clientLeft=r.wrapperEl.clientLeft}const f=l?r.translate:-r.translate;function m(v){return v<0?-Math.floor(Math.abs(v)):Math.floor(v)}const p=m(f),h=i.map(v=>m(v)),y=o.freeMode&&o.freeMode.enabled;let b=i[h.indexOf(p)-1];if(typeof b>"u"&&(o.cssMode||y)){let v;i.forEach((w,E)=>{p>=w&&(v=E)}),typeof v<"u"&&(b=y?i[v]:i[v>0?v-1:v])}let g=0;if(typeof b<"u"&&(g=a.indexOf(b),g<0&&(g=r.activeIndex-1),o.slidesPerView==="auto"&&o.slidesPerGroup===1&&o.slidesPerGroupAuto&&(g=g-r.slidesPerViewDynamic("previous",!0)+1,g=Math.max(g,0))),o.rewind&&r.isBeginning){const v=r.params.virtual&&r.params.virtual.enabled&&r.virtual?r.virtual.slides.length-1:r.slides.length-1;return r.slideTo(v,e,t,n)}else if(o.loop&&r.activeIndex===0&&o.cssMode)return requestAnimationFrame(()=>{r.slideTo(g,e,t,n)}),!0;return r.slideTo(g,e,t,n)}function eL(e,t=!0,n){const r=this;if(!r.destroyed)return typeof e>"u"&&(e=r.params.speed),r.slideTo(r.activeIndex,e,t,n)}function tL(e,t=!0,n,r=.5){const o=this;if(o.destroyed)return;typeof e>"u"&&(e=o.params.speed);let i=o.activeIndex;const a=Math.min(o.params.slidesPerGroupSkip,i),l=a+Math.floor((i-a)/o.params.slidesPerGroup),s=o.rtlTranslate?o.translate:-o.translate;if(s>=o.snapGrid[l]){const c=o.snapGrid[l],d=o.snapGrid[l+1];s-c>(d-c)*r&&(i+=o.params.slidesPerGroup)}else{const c=o.snapGrid[l-1],d=o.snapGrid[l];s-c<=(d-c)*r&&(i-=o.params.slidesPerGroup)}return i=Math.max(i,0),i=Math.min(i,o.slidesGrid.length-1),o.slideTo(i,e,t,n)}function nL(){const e=this;if(e.destroyed)return;const{params:t,slidesEl:n}=e,r=t.slidesPerView==="auto"?e.slidesPerViewDynamic():t.slidesPerView;let o=e.getSlideIndexWhenGrid(e.clickedIndex),i;const a=e.isElement?"swiper-slide":`.${t.slideClass}`,l=e.grid&&e.params.grid&&e.params.grid.rows>1;if(t.loop){if(e.animating)return;i=parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"),10),t.centeredSlides?e.slideToLoop(i):o>(l?(e.slides.length-r)/2-(e.params.grid.rows-1):e.slides.length-r)?(e.loopFix(),o=e.getSlideIndex(Dn(n,`${a}[data-swiper-slide-index="${i}"]`)[0]),YC(()=>{e.slideTo(o)})):e.slideTo(o)}else e.slideTo(o)}var rL={slideTo:K6,slideToLoop:Q6,slideNext:Z6,slidePrev:J6,slideReset:eL,slideToClosest:tL,slideToClickedSlide:nL};function oL(e,t){const n=this,{params:r,slidesEl:o}=n;if(!r.loop||n.virtual&&n.params.virtual.enabled)return;const i=()=>{Dn(o,`.${r.slideClass}, swiper-slide`).forEach((h,y)=>{h.setAttribute("data-swiper-slide-index",y)})},a=()=>{const p=Dn(o,`.${r.slideBlankClass}`);p.forEach(h=>{h.remove()}),p.length>0&&(n.recalcSlides(),n.updateSlides())},l=n.grid&&r.grid&&r.grid.rows>1;r.loopAddBlankSlides&&(r.slidesPerGroup>1||l)&&a();const s=r.slidesPerGroup*(l?r.grid.rows:1),c=n.slides.length%s!==0,d=l&&n.slides.length%r.grid.rows!==0,f=p=>{for(let h=0;h<p;h+=1){const y=n.isElement?nu("swiper-slide",[r.slideBlankClass]):nu("div",[r.slideClass,r.slideBlankClass]);n.slidesEl.append(y)}};if(c){if(r.loopAddBlankSlides){const p=s-n.slides.length%s;f(p),n.recalcSlides(),n.updateSlides()}else tu("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");i()}else if(d){if(r.loopAddBlankSlides){const p=r.grid.rows-n.slides.length%r.grid.rows;f(p),n.recalcSlides(),n.updateSlides()}else tu("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");i()}else i();const m=r.centeredSlides||!!r.slidesOffsetBefore||!!r.slidesOffsetAfter;n.loopFix({slideRealIndex:e,direction:m?void 0:"next",initial:t})}function iL({slideRealIndex:e,slideTo:t=!0,direction:n,setTranslate:r,activeSlideIndex:o,initial:i,byController:a,byMousewheel:l}={}){const s=this;if(!s.params.loop)return;s.emit("beforeLoopFix");const{slides:c,allowSlidePrev:d,allowSlideNext:f,slidesEl:m,params:p}=s,{centeredSlides:h,slidesOffsetBefore:y,slidesOffsetAfter:b,initialSlide:g}=p,v=h||!!y||!!b;if(s.allowSlidePrev=!0,s.allowSlideNext=!0,s.virtual&&p.virtual.enabled){t&&(!v&&s.snapIndex===0?s.slideTo(s.virtual.slides.length,0,!1,!0):v&&s.snapIndex<p.slidesPerView?s.slideTo(s.virtual.slides.length+s.snapIndex,0,!1,!0):s.snapIndex===s.snapGrid.length-1&&s.slideTo(s.virtual.slidesBefore,0,!1,!0)),s.allowSlidePrev=d,s.allowSlideNext=f,s.emit("loopFix");return}let w=p.slidesPerView;w==="auto"?w=s.slidesPerViewDynamic():(w=Math.ceil(parseFloat(p.slidesPerView,10)),v&&w%2===0&&(w=w+1));const E=p.slidesPerGroupAuto?w:p.slidesPerGroup;let S=v?Math.max(E,Math.ceil(w/2)):E;S%E!==0&&(S+=E-S%E),S+=p.loopAdditionalSlides,s.loopedSlides=S;const P=s.grid&&p.grid&&p.grid.rows>1;c.length<w+S||s.params.effect==="cards"&&c.length<w+S*2?tu("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled or not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"):P&&p.grid.fill==="row"&&tu("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");const k=[],_=[],T=P?Math.ceil(c.length/p.grid.rows):c.length,$=i&&T-g<w&&!v;let I=$?g:s.activeIndex;typeof o>"u"?o=s.getSlideIndex(c.find(O=>O.classList.contains(p.slideActiveClass))):I=o;const M=n==="next"||!n,j=n==="prev"||!n;let R=0,D=0;const L=(P?c[o].column:o)+(v&&typeof r>"u"?-w/2+.5:0);if(L<S){R=Math.max(S-L,E);for(let O=0;O<S-L;O+=1){const A=O-Math.floor(O/T)*T;if(P){const N=T-A-1;for(let B=c.length-1;B>=0;B-=1)c[B].column===N&&k.push(B)}else k.push(T-A-1)}}else if(L+w>T-S){D=Math.max(L-(T-S*2),E),$&&(D=Math.max(D,w-T+g+1));for(let O=0;O<D;O+=1){const A=O-Math.floor(O/T)*T;P?c.forEach((N,B)=>{N.column===A&&_.push(B)}):_.push(A)}}if(s.__preventObserver__=!0,requestAnimationFrame(()=>{s.__preventObserver__=!1}),s.params.effect==="cards"&&c.length<w+S*2&&(_.includes(o)&&_.splice(_.indexOf(o),1),k.includes(o)&&k.splice(k.indexOf(o),1)),j&&k.forEach(O=>{c[O].swiperLoopMoveDOM=!0,m.prepend(c[O]),c[O].swiperLoopMoveDOM=!1}),M&&_.forEach(O=>{c[O].swiperLoopMoveDOM=!0,m.append(c[O]),c[O].swiperLoopMoveDOM=!1}),s.recalcSlides(),p.slidesPerView==="auto"?s.updateSlides():P&&(k.length>0&&j||_.length>0&&M)&&s.slides.forEach((O,A)=>{s.grid.updateSlide(A,O,s.slides)}),p.watchSlidesProgress&&s.updateSlidesOffset(),t){if(k.length>0&&j){if(typeof e>"u"){const O=s.slidesGrid[I],N=s.slidesGrid[I+R]-O;l?s.setTranslate(s.translate-N):(s.slideTo(I+Math.ceil(R),0,!1,!0),r&&(s.touchEventsData.startTranslate=s.touchEventsData.startTranslate-N,s.touchEventsData.currentTranslate=s.touchEventsData.currentTranslate-N))}else if(r){const O=P?k.length/p.grid.rows:k.length;s.slideTo(s.activeIndex+O,0,!1,!0),s.touchEventsData.currentTranslate=s.translate}}else if(_.length>0&&M)if(typeof e>"u"){const O=s.slidesGrid[I],N=s.slidesGrid[I-D]-O;l?s.setTranslate(s.translate-N):(s.slideTo(I-D,0,!1,!0),r&&(s.touchEventsData.startTranslate=s.touchEventsData.startTranslate-N,s.touchEventsData.currentTranslate=s.touchEventsData.currentTranslate-N))}else{const O=P?_.length/p.grid.rows:_.length;s.slideTo(s.activeIndex-O,0,!1,!0)}}if(s.allowSlidePrev=d,s.allowSlideNext=f,s.controller&&s.controller.control&&!a){const O={slideRealIndex:e,direction:n,setTranslate:r,activeSlideIndex:o,byController:!0};Array.isArray(s.controller.control)?s.controller.control.forEach(A=>{!A.destroyed&&A.params.loop&&A.loopFix({...O,slideTo:A.params.slidesPerView===p.slidesPerView?t:!1})}):s.controller.control instanceof s.constructor&&s.controller.control.params.loop&&s.controller.control.loopFix({...O,slideTo:s.controller.control.params.slidesPerView===p.slidesPerView?t:!1})}s.emit("loopFix")}function aL(){const e=this,{params:t,slidesEl:n}=e;if(!t.loop||!n||e.virtual&&e.params.virtual.enabled)return;e.recalcSlides();const r=[];e.slides.forEach(o=>{const i=typeof o.swiperSlideIndex>"u"?o.getAttribute("data-swiper-slide-index")*1:o.swiperSlideIndex;r[i]=o}),e.slides.forEach(o=>{o.removeAttribute("data-swiper-slide-index")}),r.forEach(o=>{n.append(o)}),e.recalcSlides(),e.slideTo(e.realIndex,0)}var sL={loopCreate:oL,loopFix:iL,loopDestroy:aL};function lL(e){const t=this;if(!t.params.simulateTouch||t.params.watchOverflow&&t.isLocked||t.params.cssMode)return;const n=t.params.touchEventsTarget==="container"?t.el:t.wrapperEl;t.isElement&&(t.__preventObserver__=!0),n.style.cursor="move",n.style.cursor=e?"grabbing":"grab",t.isElement&&requestAnimationFrame(()=>{t.__preventObserver__=!1})}function cL(){const e=this;e.params.watchOverflow&&e.isLocked||e.params.cssMode||(e.isElement&&(e.__preventObserver__=!0),e[e.params.touchEventsTarget==="container"?"el":"wrapperEl"].style.cursor="",e.isElement&&requestAnimationFrame(()=>{e.__preventObserver__=!1}))}var uL={setGrabCursor:lL,unsetGrabCursor:cL};function dL(e,t=this){function n(r){if(!r||r===zn()||r===kt())return null;r.assignedSlot&&(r=r.assignedSlot);const o=r.closest(e);return!o&&!r.getRootNode?null:o||n(r.getRootNode().host)}return n(t)}function A1(e,t,n){const r=kt(),{params:o}=e,i=o.edgeSwipeDetection,a=o.edgeSwipeThreshold;return i&&(n<=a||n>=r.innerWidth-a)?i==="prevent"?(t.preventDefault(),!0):!1:!0}function fL(e){const t=this,n=zn();let r=e;r.originalEvent&&(r=r.originalEvent);const o=t.touchEventsData;if(r.type==="pointerdown"){if(o.pointerId!==null&&o.pointerId!==r.pointerId)return;o.pointerId=r.pointerId}else r.type==="touchstart"&&r.targetTouches.length===1&&(o.touchId=r.targetTouches[0].identifier);if(r.type==="touchstart"){A1(t,r,r.targetTouches[0].pageX);return}const{params:i,touches:a,enabled:l}=t;if(!l||!i.simulateTouch&&r.pointerType==="mouse"||t.animating&&i.preventInteractionOnTransition)return;!t.animating&&i.cssMode&&i.loop&&t.loopFix();let s=r.target;if(i.touchEventsTarget==="wrapper"&&!v6(s,t.wrapperEl)||"which"in r&&r.which===3||"button"in r&&r.button>0||o.isTouched&&o.isMoved)return;const c=!!i.noSwipingClass&&i.noSwipingClass!=="",d=r.composedPath?r.composedPath():r.path;c&&r.target&&r.target.shadowRoot&&d&&(s=d[0]);const f=i.noSwipingSelector?i.noSwipingSelector:`.${i.noSwipingClass}`,m=!!(r.target&&r.target.shadowRoot);if(i.noSwiping&&(m?dL(f,s):s.closest(f))){t.allowClick=!0;return}if(i.swipeHandler&&!s.closest(i.swipeHandler))return;a.currentX=r.pageX,a.currentY=r.pageY;const p=a.currentX,h=a.currentY;if(!A1(t,r,p))return;Object.assign(o,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),a.startX=p,a.startY=h,o.touchStartTime=eu(),t.allowClick=!0,t.updateSize(),t.swipeDirection=void 0,i.threshold>0&&(o.allowThresholdMove=!1);let y=!0;s.matches(o.focusableElements)&&(y=!1,s.nodeName==="SELECT"&&(o.isTouched=!1)),n.activeElement&&n.activeElement.matches(o.focusableElements)&&n.activeElement!==s&&(r.pointerType==="mouse"||r.pointerType!=="mouse"&&!s.matches(o.focusableElements))&&n.activeElement.blur();const b=y&&t.allowTouchMove&&i.touchStartPreventDefault;(i.touchStartForcePreventDefault||b)&&!s.isContentEditable&&r.preventDefault(),i.freeMode&&i.freeMode.enabled&&t.freeMode&&t.animating&&!i.cssMode&&t.freeMode.onTouchStart(),t.emit("touchStart",r)}function pL(e){const t=zn(),n=this,r=n.touchEventsData,{params:o,touches:i,rtlTranslate:a,enabled:l}=n;if(!l||!o.simulateTouch&&e.pointerType==="mouse")return;let s=e;if(s.originalEvent&&(s=s.originalEvent),s.type==="pointermove"&&(r.touchId!==null||s.pointerId!==r.pointerId))return;let c;if(s.type==="touchmove"){if(c=[...s.changedTouches].find(P=>P.identifier===r.touchId),!c||c.identifier!==r.touchId)return}else c=s;if(!r.isTouched){r.startMoving&&r.isScrolling&&n.emit("touchMoveOpposite",s);return}const d=c.pageX,f=c.pageY;if(s.preventedByNestedSwiper){i.startX=d,i.startY=f;return}if(!n.allowTouchMove){s.target.matches(r.focusableElements)||(n.allowClick=!1),r.isTouched&&(Object.assign(i,{startX:d,startY:f,currentX:d,currentY:f}),r.touchStartTime=eu());return}if(o.touchReleaseOnEdges&&!o.loop)if(n.isVertical()){if(f<i.startY&&n.translate<=n.maxTranslate()||f>i.startY&&n.translate>=n.minTranslate()){r.isTouched=!1,r.isMoved=!1;return}}else{if(a&&(d>i.startX&&-n.translate<=n.maxTranslate()||d<i.startX&&-n.translate>=n.minTranslate()))return;if(!a&&(d<i.startX&&n.translate<=n.maxTranslate()||d>i.startX&&n.translate>=n.minTranslate()))return}if(t.activeElement&&t.activeElement.matches(r.focusableElements)&&t.activeElement!==s.target&&s.pointerType!=="mouse"&&t.activeElement.blur(),t.activeElement&&s.target===t.activeElement&&s.target.matches(r.focusableElements)){r.isMoved=!0,n.allowClick=!1;return}r.allowTouchCallbacks&&n.emit("touchMove",s),i.previousX=i.currentX,i.previousY=i.currentY,i.currentX=d,i.currentY=f;const m=i.currentX-i.startX,p=i.currentY-i.startY;if(n.params.threshold&&Math.sqrt(m**2+p**2)<n.params.threshold)return;if(typeof r.isScrolling>"u"){let P;n.isHorizontal()&&i.currentY===i.startY||n.isVertical()&&i.currentX===i.startX?r.isScrolling=!1:m*m+p*p>=25&&(P=Math.atan2(Math.abs(p),Math.abs(m))*180/Math.PI,r.isScrolling=n.isHorizontal()?P>o.touchAngle:90-P>o.touchAngle)}if(r.isScrolling&&n.emit("touchMoveOpposite",s),typeof r.startMoving>"u"&&(i.currentX!==i.startX||i.currentY!==i.startY)&&(r.startMoving=!0),r.isScrolling||s.type==="touchmove"&&r.preventTouchMoveFromPointerMove){r.isTouched=!1;return}if(!r.startMoving)return;n.allowClick=!1,!o.cssMode&&s.cancelable&&s.preventDefault(),o.touchMoveStopPropagation&&!o.nested&&s.stopPropagation();let h=n.isHorizontal()?m:p,y=n.isHorizontal()?i.currentX-i.previousX:i.currentY-i.previousY;o.oneWayMovement&&(h=Math.abs(h)*(a?1:-1),y=Math.abs(y)*(a?1:-1)),i.diff=h,h*=o.touchRatio,a&&(h=-h,y=-y);const b=n.touchesDirection;n.swipeDirection=h>0?"prev":"next",n.touchesDirection=y>0?"prev":"next";const g=n.params.loop&&!o.cssMode,v=n.touchesDirection==="next"&&n.allowSlideNext||n.touchesDirection==="prev"&&n.allowSlidePrev;if(!r.isMoved){if(g&&v&&n.loopFix({direction:n.swipeDirection}),r.startTranslate=n.getTranslate(),n.setTransition(0),n.animating){const P=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0,detail:{bySwiperTouchMove:!0}});n.wrapperEl.dispatchEvent(P)}r.allowMomentumBounce=!1,o.grabCursor&&(n.allowSlideNext===!0||n.allowSlidePrev===!0)&&n.setGrabCursor(!0),n.emit("sliderFirstMove",s)}let w;if(new Date().getTime(),o._loopSwapReset!==!1&&r.isMoved&&r.allowThresholdMove&&b!==n.touchesDirection&&g&&v&&Math.abs(h)>=1){Object.assign(i,{startX:d,startY:f,currentX:d,currentY:f,startTranslate:r.currentTranslate}),r.loopSwapReset=!0,r.startTranslate=r.currentTranslate;return}n.emit("sliderMove",s),r.isMoved=!0,r.currentTranslate=h+r.startTranslate;let E=!0,S=o.resistanceRatio;if(o.touchReleaseOnEdges&&(S=0),h>0?(g&&v&&!w&&r.allowThresholdMove&&r.currentTranslate>(o.centeredSlides?n.minTranslate()-n.slidesSizesGrid[n.activeIndex+1]-(o.slidesPerView!=="auto"&&n.slides.length-o.slidesPerView>=2?n.slidesSizesGrid[n.activeIndex+1]+n.params.spaceBetween:0)-n.params.spaceBetween:n.minTranslate())&&n.loopFix({direction:"prev",setTranslate:!0,activeSlideIndex:0}),r.currentTranslate>n.minTranslate()&&(E=!1,o.resistance&&(r.currentTranslate=n.minTranslate()-1+(-n.minTranslate()+r.startTranslate+h)**S))):h<0&&(g&&v&&!w&&r.allowThresholdMove&&r.currentTranslate<(o.centeredSlides?n.maxTranslate()+n.slidesSizesGrid[n.slidesSizesGrid.length-1]+n.params.spaceBetween+(o.slidesPerView!=="auto"&&n.slides.length-o.slidesPerView>=2?n.slidesSizesGrid[n.slidesSizesGrid.length-1]+n.params.spaceBetween:0):n.maxTranslate())&&n.loopFix({direction:"next",setTranslate:!0,activeSlideIndex:n.slides.length-(o.slidesPerView==="auto"?n.slidesPerViewDynamic():Math.ceil(parseFloat(o.slidesPerView,10)))}),r.currentTranslate<n.maxTranslate()&&(E=!1,o.resistance&&(r.currentTranslate=n.maxTranslate()+1-(n.maxTranslate()-r.startTranslate-h)**S))),E&&(s.preventedByNestedSwiper=!0),!n.allowSlideNext&&n.swipeDirection==="next"&&r.currentTranslate<r.startTranslate&&(r.currentTranslate=r.startTranslate),!n.allowSlidePrev&&n.swipeDirection==="prev"&&r.currentTranslate>r.startTranslate&&(r.currentTranslate=r.startTranslate),!n.allowSlidePrev&&!n.allowSlideNext&&(r.currentTranslate=r.startTranslate),o.threshold>0)if(Math.abs(h)>o.threshold||r.allowThresholdMove){if(!r.allowThresholdMove){r.allowThresholdMove=!0,i.startX=i.currentX,i.startY=i.currentY,r.currentTranslate=r.startTranslate,i.diff=n.isHorizontal()?i.currentX-i.startX:i.currentY-i.startY;return}}else{r.currentTranslate=r.startTranslate;return}!o.followFinger||o.cssMode||((o.freeMode&&o.freeMode.enabled&&n.freeMode||o.watchSlidesProgress)&&(n.updateActiveIndex(),n.updateSlidesClasses()),o.freeMode&&o.freeMode.enabled&&n.freeMode&&n.freeMode.onTouchMove(),n.updateProgress(r.currentTranslate),n.setTranslate(r.currentTranslate))}function hL(e){const t=this,n=t.touchEventsData;let r=e;r.originalEvent&&(r=r.originalEvent);let o;if(r.type==="touchend"||r.type==="touchcancel"){if(o=[...r.changedTouches].find(S=>S.identifier===n.touchId),!o||o.identifier!==n.touchId)return}else{if(n.touchId!==null||r.pointerId!==n.pointerId)return;o=r}if(["pointercancel","pointerout","pointerleave","contextmenu"].includes(r.type)&&!(["pointercancel","contextmenu"].includes(r.type)&&(t.browser.isSafari||t.browser.isWebView)))return;n.pointerId=null,n.touchId=null;const{params:a,touches:l,rtlTranslate:s,slidesGrid:c,enabled:d}=t;if(!d||!a.simulateTouch&&r.pointerType==="mouse")return;if(n.allowTouchCallbacks&&t.emit("touchEnd",r),n.allowTouchCallbacks=!1,!n.isTouched){n.isMoved&&a.grabCursor&&t.setGrabCursor(!1),n.isMoved=!1,n.startMoving=!1;return}a.grabCursor&&n.isMoved&&n.isTouched&&(t.allowSlideNext===!0||t.allowSlidePrev===!0)&&t.setGrabCursor(!1);const f=eu(),m=f-n.touchStartTime;if(t.allowClick){const S=r.path||r.composedPath&&r.composedPath();t.updateClickedSlide(S&&S[0]||r.target,S),t.emit("tap click",r),m<300&&f-n.lastClickTime<300&&t.emit("doubleTap doubleClick",r)}if(n.lastClickTime=eu(),YC(()=>{t.destroyed||(t.allowClick=!0)}),!n.isTouched||!n.isMoved||!t.swipeDirection||l.diff===0&&!n.loopSwapReset||n.currentTranslate===n.startTranslate&&!n.loopSwapReset){n.isTouched=!1,n.isMoved=!1,n.startMoving=!1;return}n.isTouched=!1,n.isMoved=!1,n.startMoving=!1;let p;if(a.followFinger?p=s?t.translate:-t.translate:p=-n.currentTranslate,a.cssMode)return;if(a.freeMode&&a.freeMode.enabled){t.freeMode.onTouchEnd({currentPos:p});return}const h=p>=-t.maxTranslate()&&!t.params.loop;let y=0,b=t.slidesSizesGrid[0];for(let S=0;S<c.length;S+=S<a.slidesPerGroupSkip?1:a.slidesPerGroup){const P=S<a.slidesPerGroupSkip-1?1:a.slidesPerGroup;typeof c[S+P]<"u"?(h||p>=c[S]&&p<c[S+P])&&(y=S,b=c[S+P]-c[S]):(h||p>=c[S])&&(y=S,b=c[c.length-1]-c[c.length-2])}let g=null,v=null;a.rewind&&(t.isBeginning?v=a.virtual&&a.virtual.enabled&&t.virtual?t.virtual.slides.length-1:t.slides.length-1:t.isEnd&&(g=0));const w=(p-c[y])/b,E=y<a.slidesPerGroupSkip-1?1:a.slidesPerGroup;if(m>a.longSwipesMs){if(!a.longSwipes){t.slideTo(t.activeIndex);return}t.swipeDirection==="next"&&(w>=a.longSwipesRatio?t.slideTo(a.rewind&&t.isEnd?g:y+E):t.slideTo(y)),t.swipeDirection==="prev"&&(w>1-a.longSwipesRatio?t.slideTo(y+E):v!==null&&w<0&&Math.abs(w)>a.longSwipesRatio?t.slideTo(v):t.slideTo(y))}else{if(!a.shortSwipes){t.slideTo(t.activeIndex);return}t.navigation&&(r.target===t.navigation.nextEl||r.target===t.navigation.prevEl)?r.target===t.navigation.nextEl?t.slideTo(y+E):t.slideTo(y):(t.swipeDirection==="next"&&t.slideTo(g!==null?g:y+E),t.swipeDirection==="prev"&&t.slideTo(v!==null?v:y))}}function D1(){const e=this,{params:t,el:n}=e;if(n&&n.offsetWidth===0)return;t.breakpoints&&e.setBreakpoint();const{allowSlideNext:r,allowSlidePrev:o,snapGrid:i}=e,a=e.virtual&&e.params.virtual.enabled;e.allowSlideNext=!0,e.allowSlidePrev=!0,e.updateSize(),e.updateSlides(),e.updateSlidesClasses();const l=a&&t.loop;(t.slidesPerView==="auto"||t.slidesPerView>1)&&e.isEnd&&!e.isBeginning&&!e.params.centeredSlides&&!l?e.slideTo(e.slides.length-1,0,!1,!0):e.params.loop&&!a?e.slideToLoop(e.realIndex,0,!1,!0):e.slideTo(e.activeIndex,0,!1,!0),e.autoplay&&e.autoplay.running&&e.autoplay.paused&&(clearTimeout(e.autoplay.resizeTimeout),e.autoplay.resizeTimeout=setTimeout(()=>{e.autoplay&&e.autoplay.running&&e.autoplay.paused&&e.autoplay.resume()},500)),e.allowSlidePrev=o,e.allowSlideNext=r,e.params.watchOverflow&&i!==e.snapGrid&&e.checkOverflow()}function mL(e){const t=this;t.enabled&&(t.allowClick||(t.params.preventClicks&&e.preventDefault(),t.params.preventClicksPropagation&&t.animating&&(e.stopPropagation(),e.stopImmediatePropagation())))}function gL(){const e=this,{wrapperEl:t,rtlTranslate:n,enabled:r}=e;if(!r)return;e.previousTranslate=e.translate,e.isHorizontal()?e.translate=-t.scrollLeft:e.translate=-t.scrollTop,e.translate===0&&(e.translate=0),e.updateActiveIndex(),e.updateSlidesClasses();let o;const i=e.maxTranslate()-e.minTranslate();i===0?o=0:o=(e.translate-e.minTranslate())/i,o!==e.progress&&e.updateProgress(n?-e.translate:e.translate),e.emit("setTranslate",e.translate,!1)}function vL(e){const t=this;rc(t,e.target),!(t.params.cssMode||t.params.slidesPerView!=="auto"&&!t.params.autoHeight)&&t.update()}function yL(){const e=this;e.documentTouchHandlerProceeded||(e.documentTouchHandlerProceeded=!0,e.params.touchReleaseOnEdges&&(e.el.style.touchAction="auto"))}const n_=(e,t)=>{const n=zn(),{params:r,el:o,wrapperEl:i,device:a}=e,l=!!r.nested,s=t==="on"?"addEventListener":"removeEventListener",c=t;!o||typeof o=="string"||(n[s]("touchstart",e.onDocumentTouchStart,{passive:!1,capture:l}),o[s]("touchstart",e.onTouchStart,{passive:!1}),o[s]("pointerdown",e.onTouchStart,{passive:!1}),n[s]("touchmove",e.onTouchMove,{passive:!1,capture:l}),n[s]("pointermove",e.onTouchMove,{passive:!1,capture:l}),n[s]("touchend",e.onTouchEnd,{passive:!0}),n[s]("pointerup",e.onTouchEnd,{passive:!0}),n[s]("pointercancel",e.onTouchEnd,{passive:!0}),n[s]("touchcancel",e.onTouchEnd,{passive:!0}),n[s]("pointerout",e.onTouchEnd,{passive:!0}),n[s]("pointerleave",e.onTouchEnd,{passive:!0}),n[s]("contextmenu",e.onTouchEnd,{passive:!0}),(r.preventClicks||r.preventClicksPropagation)&&o[s]("click",e.onClick,!0),r.cssMode&&i[s]("scroll",e.onScroll),r.updateOnWindowResize?e[c](a.ios||a.android?"resize orientationchange observerUpdate":"resize observerUpdate",D1,!0):e[c]("observerUpdate",D1,!0),o[s]("load",e.onLoad,{capture:!0}))};function xL(){const e=this,{params:t}=e;e.onTouchStart=fL.bind(e),e.onTouchMove=pL.bind(e),e.onTouchEnd=hL.bind(e),e.onDocumentTouchStart=yL.bind(e),t.cssMode&&(e.onScroll=gL.bind(e)),e.onClick=mL.bind(e),e.onLoad=vL.bind(e),n_(e,"on")}function bL(){n_(this,"off")}var wL={attachEvents:xL,detachEvents:bL};const L1=(e,t)=>e.grid&&t.grid&&t.grid.rows>1;function SL(){const e=this,{realIndex:t,initialized:n,params:r,el:o}=e,i=r.breakpoints;if(!i||i&&Object.keys(i).length===0)return;const a=zn(),l=r.breakpointsBase==="window"||!r.breakpointsBase?r.breakpointsBase:"container",s=["window","container"].includes(r.breakpointsBase)||!r.breakpointsBase?e.el:a.querySelector(r.breakpointsBase),c=e.getBreakpoint(i,l,s);if(!c||e.currentBreakpoint===c)return;const f=(c in i?i[c]:void 0)||e.originalParams,m=L1(e,r),p=L1(e,f),h=e.params.grabCursor,y=f.grabCursor,b=r.enabled;m&&!p?(o.classList.remove(`${r.containerModifierClass}grid`,`${r.containerModifierClass}grid-column`),e.emitContainerClasses()):!m&&p&&(o.classList.add(`${r.containerModifierClass}grid`),(f.grid.fill&&f.grid.fill==="column"||!f.grid.fill&&r.grid.fill==="column")&&o.classList.add(`${r.containerModifierClass}grid-column`),e.emitContainerClasses()),h&&!y?e.unsetGrabCursor():!h&&y&&e.setGrabCursor(),["navigation","pagination","scrollbar"].forEach(P=>{if(typeof f[P]>"u")return;const k=r[P]&&r[P].enabled,_=f[P]&&f[P].enabled;k&&!_&&e[P].disable(),!k&&_&&e[P].enable()});const g=f.direction&&f.direction!==r.direction,v=r.loop&&(f.slidesPerView!==r.slidesPerView||g),w=r.loop;g&&n&&e.changeDirection(),Nt(e.params,f);const E=e.params.enabled,S=e.params.loop;Object.assign(e,{allowTouchMove:e.params.allowTouchMove,allowSlideNext:e.params.allowSlideNext,allowSlidePrev:e.params.allowSlidePrev}),b&&!E?e.disable():!b&&E&&e.enable(),e.currentBreakpoint=c,e.emit("_beforeBreakpoint",f),n&&(v?(e.loopDestroy(),e.loopCreate(t),e.updateSlides()):!w&&S?(e.loopCreate(t),e.updateSlides()):w&&!S&&e.loopDestroy()),e.emit("breakpoint",f)}function EL(e,t="window",n){if(!e||t==="container"&&!n)return;let r=!1;const o=kt(),i=t==="window"?o.innerHeight:n.clientHeight,a=Object.keys(e).map(l=>{if(typeof l=="string"&&l.indexOf("@")===0){const s=parseFloat(l.substr(1));return{value:i*s,point:l}}return{value:l,point:l}});a.sort((l,s)=>parseInt(l.value,10)-parseInt(s.value,10));for(let l=0;l<a.length;l+=1){const{point:s,value:c}=a[l];t==="window"?o.matchMedia(`(min-width: ${c}px)`).matches&&(r=s):c<=n.clientWidth&&(r=s)}return r||"max"}var CL={setBreakpoint:SL,getBreakpoint:EL};function _L(e,t){const n=[];return e.forEach(r=>{typeof r=="object"?Object.keys(r).forEach(o=>{r[o]&&n.push(t+o)}):typeof r=="string"&&n.push(t+r)}),n}function kL(){const e=this,{classNames:t,params:n,rtl:r,el:o,device:i}=e,a=_L(["initialized",n.direction,{"free-mode":e.params.freeMode&&n.freeMode.enabled},{autoheight:n.autoHeight},{rtl:r},{grid:n.grid&&n.grid.rows>1},{"grid-column":n.grid&&n.grid.rows>1&&n.grid.fill==="column"},{android:i.android},{ios:i.ios},{"css-mode":n.cssMode},{centered:n.cssMode&&n.centeredSlides},{"watch-progress":n.watchSlidesProgress}],n.containerModifierClass);t.push(...a),o.classList.add(...t),e.emitContainerClasses()}function PL(){const e=this,{el:t,classNames:n}=e;!t||typeof t=="string"||(t.classList.remove(...n),e.emitContainerClasses())}var OL={addClasses:kL,removeClasses:PL};function TL(){const e=this,{isLocked:t,params:n}=e,{slidesOffsetBefore:r}=n;if(r){const o=e.slides.length-1,i=e.slidesGrid[o]+e.slidesSizesGrid[o]+r*2;e.isLocked=e.size>i}else e.isLocked=e.snapGrid.length===1;n.allowSlideNext===!0&&(e.allowSlideNext=!e.isLocked),n.allowSlidePrev===!0&&(e.allowSlidePrev=!e.isLocked),t&&t!==e.isLocked&&(e.isEnd=!1),t!==e.isLocked&&e.emit(e.isLocked?"lock":"unlock")}var jL={checkOverflow:TL},mm={init:!0,direction:"horizontal",oneWayMovement:!1,swiperElementNodeName:"SWIPER-CONTAINER",touchEventsTarget:"wrapper",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,eventsPrefix:"swiper",enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,snapToSlideEdge:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:5,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,loop:!1,loopAddBlankSlides:!0,loopAdditionalSlides:0,loopPreventsSliding:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,maxBackfaceHiddenSlides:10,containerModifierClass:"swiper-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-blank",slideActiveClass:"swiper-slide-active",slideVisibleClass:"swiper-slide-visible",slideFullyVisibleClass:"swiper-slide-fully-visible",slideNextClass:"swiper-slide-next",slidePrevClass:"swiper-slide-prev",wrapperClass:"swiper-wrapper",lazyPreloaderClass:"swiper-lazy-preloader",lazyPreloadPrevNext:0,runCallbacksOnInit:!0,_emitClasses:!1};function $L(e,t){return function(r={}){const o=Object.keys(r)[0],i=r[o];if(typeof i!="object"||i===null){Nt(t,r);return}if(e[o]===!0&&(e[o]={enabled:!0}),o==="navigation"&&e[o]&&e[o].enabled&&!e[o].prevEl&&!e[o].nextEl&&(e[o].auto=!0),["pagination","scrollbar"].indexOf(o)>=0&&e[o]&&e[o].enabled&&!e[o].el&&(e[o].auto=!0),!(o in e&&"enabled"in i)){Nt(t,r);return}typeof e[o]=="object"&&!("enabled"in e[o])&&(e[o].enabled=!0),e[o]||(e[o]={enabled:!1}),Nt(t,r)}}const Jf={eventsEmitter:O6,update:z6,translate:H6,transition:X6,slide:rL,loop:sL,grabCursor:uL,events:wL,breakpoints:CL,checkOverflow:jL,classes:OL},ep={};let y0=class Gn{constructor(...t){let n,r;t.length===1&&t[0].constructor&&Object.prototype.toString.call(t[0]).slice(8,-1)==="Object"?r=t[0]:[n,r]=t,r||(r={}),r=Nt({},r),n&&!r.el&&(r.el=n);const o=zn();if(r.el&&typeof r.el=="string"&&o.querySelectorAll(r.el).length>1){const s=[];return o.querySelectorAll(r.el).forEach(c=>{const d=Nt({},r,{el:c});s.push(new Gn(d))}),s}const i=this;i.__swiper__=!0,i.support=ZC(),i.device=JC({userAgent:r.userAgent}),i.browser=e_(),i.eventsListeners={},i.eventsAnyListeners=[],i.modules=[...i.__modules__],r.modules&&Array.isArray(r.modules)&&r.modules.forEach(s=>{typeof s=="function"&&i.modules.indexOf(s)<0&&i.modules.push(s)});const a={};i.modules.forEach(s=>{s({params:r,swiper:i,extendParams:$L(r,a),on:i.on.bind(i),once:i.once.bind(i),off:i.off.bind(i),emit:i.emit.bind(i)})});const l=Nt({},mm,a);return i.params=Nt({},l,ep,r),i.originalParams=Nt({},i.params),i.passedParams=Nt({},r),i.params&&i.params.on&&Object.keys(i.params.on).forEach(s=>{i.on(s,i.params.on[s])}),i.params&&i.params.onAny&&i.onAny(i.params.onAny),Object.assign(i,{enabled:i.params.enabled,el:n,classNames:[],slides:[],slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal(){return i.params.direction==="horizontal"},isVertical(){return i.params.direction==="vertical"},activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,cssOverflowAdjustment(){return Math.trunc(this.translate/2**23)*2**23},allowSlideNext:i.params.allowSlideNext,allowSlidePrev:i.params.allowSlidePrev,touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:i.params.focusableElements,lastClickTime:0,clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,startMoving:void 0,pointerId:null,touchId:null},allowClick:!0,allowTouchMove:i.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),i.emit("_swiper"),i.params.init&&i.init(),i}getDirectionLabel(t){return this.isHorizontal()?t:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[t]}getSlideIndex(t){const{slidesEl:n,params:r}=this,o=Dn(n,`.${r.slideClass}, swiper-slide`),i=ru(o[0]);return ru(t)-i}getSlideIndexByData(t){return this.getSlideIndex(this.slides.find(n=>n.getAttribute("data-swiper-slide-index")*1===t))}getSlideIndexWhenGrid(t){return this.grid&&this.params.grid&&this.params.grid.rows>1&&(this.params.grid.fill==="column"?t=Math.floor(t/this.params.grid.rows):this.params.grid.fill==="row"&&(t=t%Math.ceil(this.slides.length/this.params.grid.rows))),t}recalcSlides(){const t=this,{slidesEl:n,params:r}=t;t.slides=Dn(n,`.${r.slideClass}, swiper-slide`)}enable(){const t=this;t.enabled||(t.enabled=!0,t.params.grabCursor&&t.setGrabCursor(),t.emit("enable"))}disable(){const t=this;t.enabled&&(t.enabled=!1,t.params.grabCursor&&t.unsetGrabCursor(),t.emit("disable"))}setProgress(t,n){const r=this;t=Math.min(Math.max(t,0),1);const o=r.minTranslate(),a=(r.maxTranslate()-o)*t+o;r.translateTo(a,typeof n>"u"?0:n),r.updateActiveIndex(),r.updateSlidesClasses()}emitContainerClasses(){const t=this;if(!t.params._emitClasses||!t.el)return;const n=t.el.className.split(" ").filter(r=>r.indexOf("swiper")===0||r.indexOf(t.params.containerModifierClass)===0);t.emit("_containerClasses",n.join(" "))}getSlideClasses(t){const n=this;return n.destroyed?"":t.className.split(" ").filter(r=>r.indexOf("swiper-slide")===0||r.indexOf(n.params.slideClass)===0).join(" ")}emitSlidesClasses(){const t=this;if(!t.params._emitClasses||!t.el)return;const n=[];t.slides.forEach(r=>{const o=t.getSlideClasses(r);n.push({slideEl:r,classNames:o}),t.emit("_slideClass",r,o)}),t.emit("_slideClasses",n)}slidesPerViewDynamic(t="current",n=!1){const r=this,{params:o,slides:i,slidesGrid:a,slidesSizesGrid:l,size:s,activeIndex:c}=r;let d=1;if(typeof o.slidesPerView=="number")return o.slidesPerView;if(o.centeredSlides){let f=i[c]?Math.ceil(i[c].swiperSlideSize):0,m;for(let p=c+1;p<i.length;p+=1)i[p]&&!m&&(f+=Math.ceil(i[p].swiperSlideSize),d+=1,f>s&&(m=!0));for(let p=c-1;p>=0;p-=1)i[p]&&!m&&(f+=i[p].swiperSlideSize,d+=1,f>s&&(m=!0))}else if(t==="current")for(let f=c+1;f<i.length;f+=1)(n?a[f]+l[f]-a[c]<s:a[f]-a[c]<s)&&(d+=1);else for(let f=c-1;f>=0;f-=1)a[c]-a[f]<s&&(d+=1);return d}update(){const t=this;if(!t||t.destroyed)return;const{snapGrid:n,params:r}=t;r.breakpoints&&t.setBreakpoint(),[...t.el.querySelectorAll('[loading="lazy"]')].forEach(a=>{a.complete&&rc(t,a)}),t.updateSize(),t.updateSlides(),t.updateProgress(),t.updateSlidesClasses();function o(){const a=t.rtlTranslate?t.translate*-1:t.translate,l=Math.min(Math.max(a,t.maxTranslate()),t.minTranslate());t.setTranslate(l),t.updateActiveIndex(),t.updateSlidesClasses()}let i;if(r.freeMode&&r.freeMode.enabled&&!r.cssMode)o(),r.autoHeight&&t.updateAutoHeight();else{if((r.slidesPerView==="auto"||r.slidesPerView>1)&&t.isEnd&&!r.centeredSlides){const a=t.virtual&&r.virtual.enabled?t.virtual.slides:t.slides;i=t.slideTo(a.length-1,0,!1,!0)}else i=t.slideTo(t.activeIndex,0,!1,!0);i||o()}r.watchOverflow&&n!==t.snapGrid&&t.checkOverflow(),t.emit("update")}changeDirection(t,n=!0){const r=this,o=r.params.direction;return t||(t=o==="horizontal"?"vertical":"horizontal"),t===o||t!=="horizontal"&&t!=="vertical"||(r.el.classList.remove(`${r.params.containerModifierClass}${o}`),r.el.classList.add(`${r.params.containerModifierClass}${t}`),r.emitContainerClasses(),r.params.direction=t,r.slides.forEach(i=>{t==="vertical"?i.style.width="":i.style.height=""}),r.emit("changeDirection"),n&&r.update()),r}changeLanguageDirection(t){const n=this;n.rtl&&t==="rtl"||!n.rtl&&t==="ltr"||(n.rtl=t==="rtl",n.rtlTranslate=n.params.direction==="horizontal"&&n.rtl,n.rtl?(n.el.classList.add(`${n.params.containerModifierClass}rtl`),n.el.dir="rtl"):(n.el.classList.remove(`${n.params.containerModifierClass}rtl`),n.el.dir="ltr"),n.update())}mount(t){const n=this;if(n.mounted)return!0;let r=t||n.params.el;if(typeof r=="string"&&(r=document.querySelector(r)),!r)return!1;r.swiper=n,r.parentNode&&r.parentNode.host&&r.parentNode.host.nodeName===n.params.swiperElementNodeName.toUpperCase()&&(n.isElement=!0);const o=()=>`.${(n.params.wrapperClass||"").trim().split(" ").join(".")}`;let a=(()=>r&&r.shadowRoot&&r.shadowRoot.querySelector?r.shadowRoot.querySelector(o()):Dn(r,o())[0])();return!a&&n.params.createElements&&(a=nu("div",n.params.wrapperClass),r.append(a),Dn(r,`.${n.params.slideClass}`).forEach(l=>{a.append(l)})),Object.assign(n,{el:r,wrapperEl:a,slidesEl:n.isElement&&!r.parentNode.host.slideSlots?r.parentNode.host:a,hostEl:n.isElement?r.parentNode.host:r,mounted:!0,rtl:r.dir.toLowerCase()==="rtl"||Tr(r,"direction")==="rtl",rtlTranslate:n.params.direction==="horizontal"&&(r.dir.toLowerCase()==="rtl"||Tr(r,"direction")==="rtl"),wrongRTL:Tr(a,"display")==="-webkit-box"}),!0}init(t){const n=this;if(n.initialized||n.mount(t)===!1)return n;n.emit("beforeInit"),n.params.breakpoints&&n.setBreakpoint(),n.addClasses(),n.updateSize(),n.updateSlides(),n.params.watchOverflow&&n.checkOverflow(),n.params.grabCursor&&n.enabled&&n.setGrabCursor(),n.params.loop&&n.virtual&&n.params.virtual.enabled?n.slideTo(n.params.initialSlide+n.virtual.slidesBefore,0,n.params.runCallbacksOnInit,!1,!0):n.slideTo(n.params.initialSlide,0,n.params.runCallbacksOnInit,!1,!0),n.params.loop&&n.loopCreate(void 0,!0),n.attachEvents();const o=[...n.el.querySelectorAll('[loading="lazy"]')];return n.isElement&&o.push(...n.hostEl.querySelectorAll('[loading="lazy"]')),o.forEach(i=>{i.complete?rc(n,i):i.addEventListener("load",a=>{rc(n,a.target)})}),hm(n),n.initialized=!0,hm(n),n.emit("init"),n.emit("afterInit"),n}destroy(t=!0,n=!0){const r=this,{params:o,el:i,wrapperEl:a,slides:l}=r;return typeof r.params>"u"||r.destroyed||(r.emit("beforeDestroy"),r.initialized=!1,r.detachEvents(),o.loop&&r.loopDestroy(),n&&(r.removeClasses(),i&&typeof i!="string"&&i.removeAttribute("style"),a&&a.removeAttribute("style"),l&&l.length&&l.forEach(s=>{s.classList.remove(o.slideVisibleClass,o.slideFullyVisibleClass,o.slideActiveClass,o.slideNextClass,o.slidePrevClass),s.removeAttribute("style"),s.removeAttribute("data-swiper-slide-index")})),r.emit("destroy"),Object.keys(r.eventsListeners).forEach(s=>{r.off(s)}),t!==!1&&(r.el&&typeof r.el!="string"&&(r.el.swiper=null),f6(r)),r.destroyed=!0),null}static extendDefaults(t){Nt(ep,t)}static get extendedDefaults(){return ep}static get defaults(){return mm}static installModule(t){Gn.prototype.__modules__||(Gn.prototype.__modules__=[]);const n=Gn.prototype.__modules__;typeof t=="function"&&n.indexOf(t)<0&&n.push(t)}static use(t){return Array.isArray(t)?(t.forEach(n=>Gn.installModule(n)),Gn):(Gn.installModule(t),Gn)}};Object.keys(Jf).forEach(e=>{Object.keys(Jf[e]).forEach(t=>{y0.prototype[t]=Jf[e][t]})});y0.use([k6,P6]);const r_=["eventsPrefix","injectStyles","injectStylesUrls","modules","init","_direction","oneWayMovement","swiperElementNodeName","touchEventsTarget","initialSlide","_speed","cssMode","updateOnWindowResize","resizeObserver","nested","focusableElements","_enabled","_width","_height","preventInteractionOnTransition","userAgent","url","_edgeSwipeDetection","_edgeSwipeThreshold","_freeMode","_autoHeight","setWrapperSize","virtualTranslate","_effect","breakpoints","breakpointsBase","_spaceBetween","_slidesPerView","maxBackfaceHiddenSlides","_grid","_slidesPerGroup","_slidesPerGroupSkip","_slidesPerGroupAuto","_centeredSlides","_centeredSlidesBounds","_slidesOffsetBefore","_slidesOffsetAfter","normalizeSlideIndex","_centerInsufficientSlides","_snapToSlideEdge","_watchOverflow","roundLengths","touchRatio","touchAngle","simulateTouch","_shortSwipes","_longSwipes","longSwipesRatio","longSwipesMs","_followFinger","allowTouchMove","_threshold","touchMoveStopPropagation","touchStartPreventDefault","touchStartForcePreventDefault","touchReleaseOnEdges","uniqueNavElements","_resistance","_resistanceRatio","_watchSlidesProgress","_grabCursor","preventClicks","preventClicksPropagation","_slideToClickedSlide","_loop","loopAdditionalSlides","loopAddBlankSlides","loopPreventsSliding","_rewind","_allowSlidePrev","_allowSlideNext","_swipeHandler","_noSwiping","noSwipingClass","noSwipingSelector","passiveListeners","containerModifierClass","slideClass","slideActiveClass","slideVisibleClass","slideFullyVisibleClass","slideNextClass","slidePrevClass","slideBlankClass","wrapperClass","lazyPreloaderClass","lazyPreloadPrevNext","runCallbacksOnInit","observer","observeParents","observeSlideChildren","a11y","_autoplay","_controller","coverflowEffect","cubeEffect","fadeEffect","flipEffect","creativeEffect","cardsEffect","hashNavigation","history","keyboard","mousewheel","_navigation","_pagination","parallax","_scrollbar","_thumbs","virtual","zoom","control"];function _o(e){return typeof e=="object"&&e!==null&&e.constructor&&Object.prototype.toString.call(e).slice(8,-1)==="Object"&&!e.__swiper__}function gi(e,t){const n=["__proto__","constructor","prototype"];Object.keys(t).filter(r=>n.indexOf(r)<0).forEach(r=>{typeof e[r]>"u"?e[r]=t[r]:_o(t[r])&&_o(e[r])&&Object.keys(t[r]).length>0?t[r].__swiper__?e[r]=t[r]:gi(e[r],t[r]):e[r]=t[r]})}function o_(e={}){return e.navigation&&typeof e.navigation.nextEl>"u"&&typeof e.navigation.prevEl>"u"}function i_(e={}){return e.pagination&&typeof e.pagination.el>"u"}function a_(e={}){return e.scrollbar&&typeof e.scrollbar.el>"u"}function s_(e=""){const t=e.split(" ").map(r=>r.trim()).filter(r=>!!r),n=[];return t.forEach(r=>{n.indexOf(r)<0&&n.push(r)}),n.join(" ")}function IL(e=""){return e?e.includes("swiper-wrapper")?e:`swiper-wrapper ${e}`:"swiper-wrapper"}function ML({swiper:e,slides:t,passedParams:n,changedParams:r,nextEl:o,prevEl:i,scrollbarEl:a,paginationEl:l}){const s=r.filter(_=>_!=="children"&&_!=="direction"&&_!=="wrapperClass"),{params:c,pagination:d,navigation:f,scrollbar:m,virtual:p,thumbs:h}=e;let y,b,g,v,w,E,S,P;r.includes("thumbs")&&n.thumbs&&n.thumbs.swiper&&!n.thumbs.swiper.destroyed&&c.thumbs&&(!c.thumbs.swiper||c.thumbs.swiper.destroyed)&&(y=!0),r.includes("controller")&&n.controller&&n.controller.control&&c.controller&&!c.controller.control&&(b=!0),r.includes("pagination")&&n.pagination&&(n.pagination.el||l)&&(c.pagination||c.pagination===!1)&&d&&!d.el&&(g=!0),r.includes("scrollbar")&&n.scrollbar&&(n.scrollbar.el||a)&&(c.scrollbar||c.scrollbar===!1)&&m&&!m.el&&(v=!0),r.includes("navigation")&&n.navigation&&(n.navigation.prevEl||i)&&(n.navigation.nextEl||o)&&(c.navigation||c.navigation===!1)&&f&&!f.prevEl&&!f.nextEl&&(w=!0);const k=_=>{e[_]&&(e[_].destroy(),_==="navigation"?(e.isElement&&(e[_].prevEl.remove(),e[_].nextEl.remove()),c[_].prevEl=void 0,c[_].nextEl=void 0,e[_].prevEl=void 0,e[_].nextEl=void 0):(e.isElement&&e[_].el.remove(),c[_].el=void 0,e[_].el=void 0))};r.includes("loop")&&e.isElement&&(c.loop&&!n.loop?E=!0:!c.loop&&n.loop?S=!0:P=!0),s.forEach(_=>{if(_o(c[_])&&_o(n[_]))Object.assign(c[_],n[_]),(_==="navigation"||_==="pagination"||_==="scrollbar")&&"enabled"in n[_]&&!n[_].enabled&&k(_);else{const T=n[_];(T===!0||T===!1)&&(_==="navigation"||_==="pagination"||_==="scrollbar")?T===!1&&k(_):c[_]=n[_]}}),s.includes("controller")&&!b&&e.controller&&e.controller.control&&c.controller&&c.controller.control&&(e.controller.control=c.controller.control),r.includes("children")&&t&&p&&c.virtual.enabled?(p.slides=t,p.update(!0)):r.includes("virtual")&&p&&c.virtual.enabled&&(t&&(p.slides=t),p.update(!0)),r.includes("children")&&t&&c.loop&&(P=!0),y&&h.init()&&h.update(!0),b&&(e.controller.control=c.controller.control),g&&(e.isElement&&(!l||typeof l=="string")&&(l=document.createElement("div"),l.classList.add("swiper-pagination"),l.part.add("pagination"),e.el.appendChild(l)),l&&(c.pagination.el=l),d.init(),d.render(),d.update()),v&&(e.isElement&&(!a||typeof a=="string")&&(a=document.createElement("div"),a.classList.add("swiper-scrollbar"),a.part.add("scrollbar"),e.el.appendChild(a)),a&&(c.scrollbar.el=a),m.init(),m.updateSize(),m.setTranslate()),w&&(e.isElement&&((!o||typeof o=="string")&&(o=document.createElement("div"),o.classList.add("swiper-button-next"),Es(o,e.navigation.arrowSvg),o.part.add("button-next"),e.el.appendChild(o)),(!i||typeof i=="string")&&(i=document.createElement("div"),i.classList.add("swiper-button-prev"),Es(i,e.navigation.arrowSvg),i.part.add("button-prev"),e.el.appendChild(i))),o&&(c.navigation.nextEl=o),i&&(c.navigation.prevEl=i),f.init(),f.update()),r.includes("allowSlideNext")&&(e.allowSlideNext=n.allowSlideNext),r.includes("allowSlidePrev")&&(e.allowSlidePrev=n.allowSlidePrev),r.includes("direction")&&e.changeDirection(n.direction,!1),(E||P)&&e.loopDestroy(),(S||P)&&e.loopCreate(),e.update()}function AL(e={},t=!0){const n={on:{}},r={},o={};gi(n,mm),n._emitClasses=!0,n.init=!1;const i={},a=r_.map(s=>s.replace(/_/,"")),l=Object.assign({},e);return Object.keys(l).forEach(s=>{typeof e[s]>"u"||(a.indexOf(s)>=0?_o(e[s])?(n[s]={},o[s]={},gi(n[s],e[s]),gi(o[s],e[s])):(n[s]=e[s],o[s]=e[s]):s.search(/on[A-Z]/)===0&&typeof e[s]=="function"?t?r[`${s[2].toLowerCase()}${s.substr(3)}`]=e[s]:n.on[`${s[2].toLowerCase()}${s.substr(3)}`]=e[s]:i[s]=e[s])}),["navigation","pagination","scrollbar"].forEach(s=>{n[s]===!0&&(n[s]={}),n[s]===!1&&delete n[s]}),{params:n,passedParams:o,rest:i,events:r}}function DL({el:e,nextEl:t,prevEl:n,paginationEl:r,scrollbarEl:o,swiper:i},a){o_(a)&&t&&n&&(i.params.navigation.nextEl=t,i.originalParams.navigation.nextEl=t,i.params.navigation.prevEl=n,i.originalParams.navigation.prevEl=n),i_(a)&&r&&(i.params.pagination.el=r,i.originalParams.pagination.el=r),a_(a)&&o&&(i.params.scrollbar.el=o,i.originalParams.scrollbar.el=o),i.init(e)}function LL(e,t,n,r,o){const i=[];if(!t)return i;const a=s=>{i.indexOf(s)<0&&i.push(s)};if(n&&r){const s=r.map(o),c=n.map(o);s.join("")!==c.join("")&&a("children"),r.length!==n.length&&a("children")}return r_.filter(s=>s[0]==="_").map(s=>s.replace(/_/,"")).forEach(s=>{if(s in e&&s in t)if(_o(e[s])&&_o(t[s])){const c=Object.keys(e[s]),d=Object.keys(t[s]);c.length!==d.length?a(s):(c.forEach(f=>{e[s][f]!==t[s][f]&&a(s)}),d.forEach(f=>{e[s][f]!==t[s][f]&&a(s)}))}else e[s]!==t[s]&&a(s)}),i}const RL=e=>{!e||e.destroyed||!e.params.virtual||e.params.virtual&&!e.params.virtual.enabled||(e.updateSlides(),e.updateProgress(),e.updateSlidesClasses(),e.emit("_virtualUpdated"),e.parallax&&e.params.parallax&&e.params.parallax.enabled&&e.parallax.setTranslate())};function ou(){return ou=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ou.apply(this,arguments)}function l_(e){return e.type&&e.type.displayName&&e.type.displayName.includes("SwiperSlide")}function c_(e){const t=[];return Z.Children.toArray(e).forEach(n=>{l_(n)?t.push(n):n.props&&n.props.children&&c_(n.props.children).forEach(r=>t.push(r))}),t}function FL(e){const t=[],n={"container-start":[],"container-end":[],"wrapper-start":[],"wrapper-end":[]};return Z.Children.toArray(e).forEach(r=>{if(l_(r))t.push(r);else if(r.props&&r.props.slot&&n[r.props.slot])n[r.props.slot].push(r);else if(r.props&&r.props.children){const o=c_(r.props.children);o.length>0?o.forEach(i=>t.push(i)):n["container-end"].push(r)}else n["container-end"].push(r)}),{slides:t,slots:n}}function zL(e,t,n){if(!n)return null;const r=d=>{let f=d;return d<0?f=t.length+d:f>=t.length&&(f=f-t.length),f},o=e.isHorizontal()?{[e.rtlTranslate?"right":"left"]:`${n.offset}px`}:{top:`${n.offset}px`},{from:i,to:a}=n,l=e.params.loop?-t.length:0,s=e.params.loop?t.length*2:t.length,c=[];for(let d=l;d<s;d+=1)d>=i&&d<=a&&c.push(t[r(d)]);return c.map((d,f)=>Z.cloneElement(d,{swiper:e,style:o,key:d.props.virtualIndex||d.key||`slide-${f}`}))}function Ba(e,t){return typeof window>"u"?x.useEffect(e,t):x.useLayoutEffect(e,t)}const R1=x.createContext(null),NL=x.createContext(null),u_=x.forwardRef(({className:e,tag:t="div",wrapperTag:n="div",children:r,onSwiper:o,...i}={},a)=>{let l=!1;const[s,c]=x.useState("swiper"),[d,f]=x.useState(null),[m,p]=x.useState(!1),h=x.useRef(!1),y=x.useRef(null),b=x.useRef(null),g=x.useRef(null),v=x.useRef(null),w=x.useRef(null),E=x.useRef(null),S=x.useRef(null),P=x.useRef(null),{params:k,passedParams:_,rest:T,events:$}=AL(i),{slides:I,slots:M}=FL(r),j=()=>{p(!m)};Object.assign(k.on,{_containerClasses(O,A){c(A)}});const R=()=>{Object.assign(k.on,$),l=!0;const O={...k};if(delete O.wrapperClass,b.current=new y0(O),b.current.virtual&&b.current.params.virtual.enabled){b.current.virtual.slides=I;const A={cache:!1,slides:I,renderExternal:f,renderExternalUpdate:!1};gi(b.current.params.virtual,A),gi(b.current.originalParams.virtual,A)}};y.current||R(),b.current&&b.current.on("_beforeBreakpoint",j);const D=()=>{l||!$||!b.current||Object.keys($).forEach(O=>{b.current.on(O,$[O])})},F=()=>{!$||!b.current||Object.keys($).forEach(O=>{b.current.off(O,$[O])})};x.useEffect(()=>()=>{b.current&&b.current.off("_beforeBreakpoint",j)}),x.useEffect(()=>{!h.current&&b.current&&(b.current.emitSlidesClasses(),h.current=!0)}),Ba(()=>{if(a&&(a.current=y.current),!!y.current)return b.current.destroyed&&R(),DL({el:y.current,nextEl:w.current,prevEl:E.current,paginationEl:S.current,scrollbarEl:P.current,swiper:b.current},k),o&&!b.current.destroyed&&o(b.current),()=>{b.current&&!b.current.destroyed&&b.current.destroy(!0,!1)}},[]),Ba(()=>{D();const O=LL(_,g.current,I,v.current,A=>A.key);return g.current=_,v.current=I,O.length&&b.current&&!b.current.destroyed&&ML({swiper:b.current,slides:I,passedParams:_,changedParams:O,nextEl:w.current,prevEl:E.current,scrollbarEl:P.current,paginationEl:S.current}),()=>{F()}}),Ba(()=>{RL(b.current)},[d]);function L(){return k.virtual?zL(b.current,I,d):I.map((O,A)=>Z.cloneElement(O,{swiper:b.current,swiperSlideIndex:A}))}return Z.createElement(t,ou({ref:y,className:s_(`${s}${e?` ${e}`:""}`)},T),Z.createElement(NL.Provider,{value:b.current},M["container-start"],Z.createElement(n,{className:IL(k.wrapperClass)},M["wrapper-start"],L(),M["wrapper-end"]),o_(k)&&Z.createElement(Z.Fragment,null,Z.createElement("div",{ref:E,className:"swiper-button-prev"}),Z.createElement("div",{ref:w,className:"swiper-button-next"})),a_(k)&&Z.createElement("div",{ref:P,className:"swiper-scrollbar"}),i_(k)&&Z.createElement("div",{ref:S,className:"swiper-pagination"}),M["container-end"]))});u_.displayName="Swiper";const d_=x.forwardRef(({tag:e="div",children:t,className:n="",swiper:r,zoom:o,lazy:i,virtualIndex:a,swiperSlideIndex:l,...s}={},c)=>{const d=x.useRef(null),[f,m]=x.useState("swiper-slide"),[p,h]=x.useState(!1);function y(w,E,S){E===d.current&&m(S)}Ba(()=>{if(typeof l<"u"&&(d.current.swiperSlideIndex=l),c&&(c.current=d.current),!(!d.current||!r)){if(r.destroyed){f!=="swiper-slide"&&m("swiper-slide");return}return r.on("_slideClass",y),()=>{r&&r.off("_slideClass",y)}}}),Ba(()=>{r&&d.current&&!r.destroyed&&m(r.getSlideClasses(d.current))},[r]);const b={isActive:f.indexOf("swiper-slide-active")>=0,isVisible:f.indexOf("swiper-slide-visible")>=0,isPrev:f.indexOf("swiper-slide-prev")>=0,isNext:f.indexOf("swiper-slide-next")>=0},g=()=>typeof t=="function"?t(b):t,v=()=>{h(!0)};return Z.createElement(e,ou({ref:d,className:s_(`${f}${n?` ${n}`:""}`),"data-swiper-slide-index":a,onLoad:v},s),o&&Z.createElement(R1.Provider,{value:b},Z.createElement("div",{className:"swiper-zoom-container","data-swiper-zoom":typeof o=="number"?o:void 0},g(),i&&!p&&Z.createElement("div",{className:"swiper-lazy-preloader",ref:w=>{w&&(w.lazyPreloaderManaged=!0)}}))),!o&&Z.createElement(R1.Provider,{value:b},g(),i&&!p&&Z.createElement("div",{className:"swiper-lazy-preloader",ref:w=>{w&&(w.lazyPreloaderManaged=!0)}})))});d_.displayName="SwiperSlide";const BL=C.section`
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
`,VL=C.div`
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
`,WL=C.div`
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
`,UL=C(ge)`
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
`,HL=[{id:1,title:"Дідів хлів - найкращий вибір для Вашого велосипеда",desc:"Якісні запчастини, професійний серевіс та індивідуальний підхід. Створюйте ідеальний байк разом з нами",img:"/Didiv/bike2-hero.jpeg",btn:"До каталогу",url:"/catalog"},{id:2,title:"Постійне оновлення товару",desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam reprehenderit obcaecati molestias est alias vitae laboriosam nulla perferendis officia incidunt aliquid voluptatem iste libero, officiis ex modi enim repellat. Consectetur!",img:"/Didiv/inside.webp",btn:"До новинок",url:"/catalog/new"}],GL=()=>u.jsx(BL,{children:u.jsx(u_,{modules:[b6,S6,w6],spaceBetween:0,slidesPerView:1,navigation:!0,pagination:{clickable:!0},autoplay:{delay:5e3},loop:!0,children:HL.map(e=>u.jsx(d_,{children:u.jsx(VL,{bg:e.img,children:u.jsxs(WL,{children:[u.jsx("h1",{children:e.title}),u.jsx("p",{children:e.desc}),u.jsx(UL,{to:e.url,children:e.btn})]})})},e.id))})}),qL=C.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  margin-bottom:30px;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`,tp=C.div`
  background-color: #ffffffde;
  padding: 20px;
  border: 1px solid #e3e2e2;
  border-radius: 8px;
`,np=C.div`
  font-size: 24px;
  font-weight: bold;
  color: var(--orange-color);
`,rp=C.div`
  font-size: 14px;
  color: #888;
`,f_=()=>u.jsxs(qL,{children:[u.jsxs(tp,{children:[u.jsx(np,{children:"3000+"}),u.jsx(rp,{children:"Перевірених деталей"})]}),u.jsxs(tp,{children:[u.jsx(np,{children:"6 років"}),u.jsx(rp,{children:"Досвіду на ринку"})]}),u.jsxs(tp,{children:[u.jsx(np,{children:"100%"}),u.jsx(rp,{children:"Контроль якості"})]})]}),YL=Ne.div`
  background:var(--background-color);
`,XL=Ne.div`
  width: 100%;
  max-width: 750px;

  padding-left: 10px;
  padding-right: 10px;
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
`;Ne.h1`
  margin: 0;
  margin-right: 10px;
  color: #ffffff;
  text-shadow:
    0 0 5px #00baff,
    0 0 10px #00baff,
    0 0 20px #00baff,
    0 0 40px #00baff,
    0 0 80px #00baff;
`;Ne.img`
  width: 40px;
  height: 40px;
  object-fit: cover;
`;const KL=()=>u.jsx(YL,{children:u.jsxs(XL,{children:[u.jsx(GL,{}),u.jsx(TE,{}),u.jsx(c6,{}),u.jsx(f_,{})]})}),QL=C.div`
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
`,ZL=C.section`
  background-color:  var(--second-background);
`,JL=C.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  justify-content: flex-start;
  margin-bottom: 16px;

  @media (min-width: 768px) {
    display: none;
  }
`,e8=C.button`
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
`,t8=C.svg`
  width: 20px;
  height: 20px;
  fill: var(--white-color);
`,n8=C.button`
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
`;C.svg`
  width: 20px;
  height: 20px;
  fill: var(--white-color);
`;const r8=C.div`
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
`,o8=C.div`
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
`;C.button`
  font-size: 20px;
  border: none;
  background: none;
  margin-bottom: 20px;
`;const i8=C.div`
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
`;C.div`
  flex: 1;
  padding: 20px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;const a8=C.div`
  padding: 20px;
  border-top: 1px solid #eee;
  background: white;
`,s8=C.button`
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
`,p_=C.button`
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
`,l8=C.div`
  position: relative;
  display: inline-block;

`,c8=C.div`
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
`,Bo=C.div`
  padding: 10px 12px;
  cursor: pointer;

  &:hover {
    background: #f0f0f0;
  }
`;var Xi=TypeError;const u8={},d8=Object.freeze(Object.defineProperty({__proto__:null,default:u8},Symbol.toStringTag,{value:"Module"})),f8=Et(d8);var x0=typeof Map=="function"&&Map.prototype,op=Object.getOwnPropertyDescriptor&&x0?Object.getOwnPropertyDescriptor(Map.prototype,"size"):null,iu=x0&&op&&typeof op.get=="function"?op.get:null,F1=x0&&Map.prototype.forEach,b0=typeof Set=="function"&&Set.prototype,ip=Object.getOwnPropertyDescriptor&&b0?Object.getOwnPropertyDescriptor(Set.prototype,"size"):null,au=b0&&ip&&typeof ip.get=="function"?ip.get:null,z1=b0&&Set.prototype.forEach,p8=typeof WeakMap=="function"&&WeakMap.prototype,Va=p8?WeakMap.prototype.has:null,h8=typeof WeakSet=="function"&&WeakSet.prototype,Wa=h8?WeakSet.prototype.has:null,m8=typeof WeakRef=="function"&&WeakRef.prototype,N1=m8?WeakRef.prototype.deref:null,g8=Boolean.prototype.valueOf,v8=Object.prototype.toString,y8=Function.prototype.toString,x8=String.prototype.match,w0=String.prototype.slice,jr=String.prototype.replace,b8=String.prototype.toUpperCase,B1=String.prototype.toLowerCase,h_=RegExp.prototype.test,V1=Array.prototype.concat,In=Array.prototype.join,w8=Array.prototype.slice,W1=Math.floor,gm=typeof BigInt=="function"?BigInt.prototype.valueOf:null,ap=Object.getOwnPropertySymbols,vm=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Symbol.prototype.toString:null,Mi=typeof Symbol=="function"&&typeof Symbol.iterator=="object",Ua=typeof Symbol=="function"&&Symbol.toStringTag&&(typeof Symbol.toStringTag===Mi||"symbol")?Symbol.toStringTag:null,m_=Object.prototype.propertyIsEnumerable,U1=(typeof Reflect=="function"?Reflect.getPrototypeOf:Object.getPrototypeOf)||([].__proto__===Array.prototype?function(e){return e.__proto__}:null);function H1(e,t){if(e===1/0||e===-1/0||e!==e||e&&e>-1e3&&e<1e3||h_.call(/e/,t))return t;var n=/[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;if(typeof e=="number"){var r=e<0?-W1(-e):W1(e);if(r!==e){var o=String(r),i=w0.call(t,o.length+1);return jr.call(o,n,"$&_")+"."+jr.call(jr.call(i,/([0-9]{3})/g,"$&_"),/_$/,"")}}return jr.call(t,n,"$&_")}var ym=f8,G1=ym.custom,q1=y_(G1)?G1:null,g_={__proto__:null,double:'"',single:"'"},S8={__proto__:null,double:/(["\\])/g,single:/(['\\])/g},Td=function e(t,n,r,o){var i=n||{};if(Kn(i,"quoteStyle")&&!Kn(g_,i.quoteStyle))throw new TypeError('option "quoteStyle" must be "single" or "double"');if(Kn(i,"maxStringLength")&&(typeof i.maxStringLength=="number"?i.maxStringLength<0&&i.maxStringLength!==1/0:i.maxStringLength!==null))throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');var a=Kn(i,"customInspect")?i.customInspect:!0;if(typeof a!="boolean"&&a!=="symbol")throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");if(Kn(i,"indent")&&i.indent!==null&&i.indent!=="	"&&!(parseInt(i.indent,10)===i.indent&&i.indent>0))throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');if(Kn(i,"numericSeparator")&&typeof i.numericSeparator!="boolean")throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');var l=i.numericSeparator;if(typeof t>"u")return"undefined";if(t===null)return"null";if(typeof t=="boolean")return t?"true":"false";if(typeof t=="string")return b_(t,i);if(typeof t=="number"){if(t===0)return 1/0/t>0?"0":"-0";var s=String(t);return l?H1(t,s):s}if(typeof t=="bigint"){var c=String(t)+"n";return l?H1(t,c):c}var d=typeof i.depth>"u"?5:i.depth;if(typeof r>"u"&&(r=0),r>=d&&d>0&&typeof t=="object")return xm(t)?"[Array]":"[Object]";var f=N8(i,r);if(typeof o>"u")o=[];else if(x_(o,t)>=0)return"[Circular]";function m(j,R,D){if(R&&(o=w8.call(o),o.push(R)),D){var F={depth:i.depth};return Kn(i,"quoteStyle")&&(F.quoteStyle=i.quoteStyle),e(j,F,r+1,o)}return e(j,i,r+1,o)}if(typeof t=="function"&&!Y1(t)){var p=$8(t),h=vl(t,m);return"[Function"+(p?": "+p:" (anonymous)")+"]"+(h.length>0?" { "+In.call(h,", ")+" }":"")}if(y_(t)){var y=Mi?jr.call(String(t),/^(Symbol\(.*\))_[^)]*$/,"$1"):vm.call(t);return typeof t=="object"&&!Mi?ma(y):y}if(R8(t)){for(var b="<"+B1.call(String(t.nodeName)),g=t.attributes||[],v=0;v<g.length;v++)b+=" "+g[v].name+"="+v_(E8(g[v].value),"double",i);return b+=">",t.childNodes&&t.childNodes.length&&(b+="..."),b+="</"+B1.call(String(t.nodeName))+">",b}if(xm(t)){if(t.length===0)return"[]";var w=vl(t,m);return f&&!z8(w)?"["+bm(w,f)+"]":"[ "+In.call(w,", ")+" ]"}if(_8(t)){var E=vl(t,m);return!("cause"in Error.prototype)&&"cause"in t&&!m_.call(t,"cause")?"{ ["+String(t)+"] "+In.call(V1.call("[cause]: "+m(t.cause),E),", ")+" }":E.length===0?"["+String(t)+"]":"{ ["+String(t)+"] "+In.call(E,", ")+" }"}if(typeof t=="object"&&a){if(q1&&typeof t[q1]=="function"&&ym)return ym(t,{depth:d-r});if(a!=="symbol"&&typeof t.inspect=="function")return t.inspect()}if(I8(t)){var S=[];return F1&&F1.call(t,function(j,R){S.push(m(R,t,!0)+" => "+m(j,t))}),X1("Map",iu.call(t),S,f)}if(D8(t)){var P=[];return z1&&z1.call(t,function(j){P.push(m(j,t))}),X1("Set",au.call(t),P,f)}if(M8(t))return sp("WeakMap");if(L8(t))return sp("WeakSet");if(A8(t))return sp("WeakRef");if(P8(t))return ma(m(Number(t)));if(T8(t))return ma(m(gm.call(t)));if(O8(t))return ma(g8.call(t));if(k8(t))return ma(m(String(t)));if(typeof window<"u"&&t===window)return"{ [object Window] }";if(typeof globalThis<"u"&&t===globalThis||typeof ne<"u"&&t===ne)return"{ [object globalThis] }";if(!C8(t)&&!Y1(t)){var k=vl(t,m),_=U1?U1(t)===Object.prototype:t instanceof Object||t.constructor===Object,T=t instanceof Object?"":"null prototype",$=!_&&Ua&&Object(t)===t&&Ua in t?w0.call(qr(t),8,-1):T?"Object":"",I=_||typeof t.constructor!="function"?"":t.constructor.name?t.constructor.name+" ":"",M=I+($||T?"["+In.call(V1.call([],$||[],T||[]),": ")+"] ":"");return k.length===0?M+"{}":f?M+"{"+bm(k,f)+"}":M+"{ "+In.call(k,", ")+" }"}return String(t)};function v_(e,t,n){var r=n.quoteStyle||t,o=g_[r];return o+e+o}function E8(e){return jr.call(String(e),/"/g,"&quot;")}function Io(e){return!Ua||!(typeof e=="object"&&(Ua in e||typeof e[Ua]<"u"))}function xm(e){return qr(e)==="[object Array]"&&Io(e)}function C8(e){return qr(e)==="[object Date]"&&Io(e)}function Y1(e){return qr(e)==="[object RegExp]"&&Io(e)}function _8(e){return qr(e)==="[object Error]"&&Io(e)}function k8(e){return qr(e)==="[object String]"&&Io(e)}function P8(e){return qr(e)==="[object Number]"&&Io(e)}function O8(e){return qr(e)==="[object Boolean]"&&Io(e)}function y_(e){if(Mi)return e&&typeof e=="object"&&e instanceof Symbol;if(typeof e=="symbol")return!0;if(!e||typeof e!="object"||!vm)return!1;try{return vm.call(e),!0}catch{}return!1}function T8(e){if(!e||typeof e!="object"||!gm)return!1;try{return gm.call(e),!0}catch{}return!1}var j8=Object.prototype.hasOwnProperty||function(e){return e in this};function Kn(e,t){return j8.call(e,t)}function qr(e){return v8.call(e)}function $8(e){if(e.name)return e.name;var t=x8.call(y8.call(e),/^function\s*([\w$]+)/);return t?t[1]:null}function x_(e,t){if(e.indexOf)return e.indexOf(t);for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1}function I8(e){if(!iu||!e||typeof e!="object")return!1;try{iu.call(e);try{au.call(e)}catch{return!0}return e instanceof Map}catch{}return!1}function M8(e){if(!Va||!e||typeof e!="object")return!1;try{Va.call(e,Va);try{Wa.call(e,Wa)}catch{return!0}return e instanceof WeakMap}catch{}return!1}function A8(e){if(!N1||!e||typeof e!="object")return!1;try{return N1.call(e),!0}catch{}return!1}function D8(e){if(!au||!e||typeof e!="object")return!1;try{au.call(e);try{iu.call(e)}catch{return!0}return e instanceof Set}catch{}return!1}function L8(e){if(!Wa||!e||typeof e!="object")return!1;try{Wa.call(e,Wa);try{Va.call(e,Va)}catch{return!0}return e instanceof WeakSet}catch{}return!1}function R8(e){return!e||typeof e!="object"?!1:typeof HTMLElement<"u"&&e instanceof HTMLElement?!0:typeof e.nodeName=="string"&&typeof e.getAttribute=="function"}function b_(e,t){if(e.length>t.maxStringLength){var n=e.length-t.maxStringLength,r="... "+n+" more character"+(n>1?"s":"");return b_(w0.call(e,0,t.maxStringLength),t)+r}var o=S8[t.quoteStyle||"single"];o.lastIndex=0;var i=jr.call(jr.call(e,o,"\\$1"),/[\x00-\x1f]/g,F8);return v_(i,"single",t)}function F8(e){var t=e.charCodeAt(0),n={8:"b",9:"t",10:"n",12:"f",13:"r"}[t];return n?"\\"+n:"\\x"+(t<16?"0":"")+b8.call(t.toString(16))}function ma(e){return"Object("+e+")"}function sp(e){return e+" { ? }"}function X1(e,t,n,r){var o=r?bm(n,r):In.call(n,", ");return e+" ("+t+") {"+o+"}"}function z8(e){for(var t=0;t<e.length;t++)if(x_(e[t],`
`)>=0)return!1;return!0}function N8(e,t){var n;if(e.indent==="	")n="	";else if(typeof e.indent=="number"&&e.indent>0)n=In.call(Array(e.indent+1)," ");else return null;return{base:n,prev:In.call(Array(t+1),n)}}function bm(e,t){if(e.length===0)return"";var n=`
`+t.prev+t.base;return n+In.call(e,","+n)+`
`+t.prev}function vl(e,t){var n=xm(e),r=[];if(n){r.length=e.length;for(var o=0;o<e.length;o++)r[o]=Kn(e,o)?t(e[o],e):""}var i=typeof ap=="function"?ap(e):[],a;if(Mi){a={};for(var l=0;l<i.length;l++)a["$"+i[l]]=i[l]}for(var s in e)Kn(e,s)&&(n&&String(Number(s))===s&&s<e.length||Mi&&a["$"+s]instanceof Symbol||(h_.call(/[^\w$]/,s)?r.push(t(s,e)+": "+t(e[s],e)):r.push(s+": "+t(e[s],e))));if(typeof ap=="function")for(var c=0;c<i.length;c++)m_.call(e,i[c])&&r.push("["+t(i[c])+"]: "+t(e[i[c]],e));return r}var B8=Td,V8=Xi,jd=function(e,t,n){for(var r=e,o;(o=r.next)!=null;r=o)if(o.key===t)return r.next=o.next,n||(o.next=e.next,e.next=o),o},W8=function(e,t){if(e){var n=jd(e,t);return n&&n.value}},U8=function(e,t,n){var r=jd(e,t);r?r.value=n:e.next={key:t,next:e.next,value:n}},H8=function(e,t){return e?!!jd(e,t):!1},G8=function(e,t){if(e)return jd(e,t,!0)},q8=function(){var t,n={assert:function(r){if(!n.has(r))throw new V8("Side channel does not contain "+B8(r))},delete:function(r){var o=G8(t,r);return o&&t&&!t.next&&(t=void 0),!!o},get:function(r){return W8(t,r)},has:function(r){return H8(t,r)},set:function(r,o){t||(t={next:void 0}),U8(t,r,o)}};return n},w_=Object,Y8=Error,X8=EvalError,K8=RangeError,Q8=ReferenceError,Z8=SyntaxError,J8=URIError,eR=Math.abs,tR=Math.floor,nR=Math.max,rR=Math.min,oR=Math.pow,iR=Math.round,aR=Number.isNaN||function(t){return t!==t},sR=aR,lR=function(t){return sR(t)||t===0?t:t<0?-1:1},cR=Object.getOwnPropertyDescriptor,oc=cR;if(oc)try{oc([],"length")}catch{oc=null}var S_=oc,ic=Object.defineProperty||!1;if(ic)try{ic({},"a",{value:1})}catch{ic=!1}var E_=ic,lp,K1;function uR(){return K1||(K1=1,lp=function(){if(typeof Symbol!="function"||typeof Object.getOwnPropertySymbols!="function")return!1;if(typeof Symbol.iterator=="symbol")return!0;var t={},n=Symbol("test"),r=Object(n);if(typeof n=="string"||Object.prototype.toString.call(n)!=="[object Symbol]"||Object.prototype.toString.call(r)!=="[object Symbol]")return!1;var o=42;t[n]=o;for(var i in t)return!1;if(typeof Object.keys=="function"&&Object.keys(t).length!==0||typeof Object.getOwnPropertyNames=="function"&&Object.getOwnPropertyNames(t).length!==0)return!1;var a=Object.getOwnPropertySymbols(t);if(a.length!==1||a[0]!==n||!Object.prototype.propertyIsEnumerable.call(t,n))return!1;if(typeof Object.getOwnPropertyDescriptor=="function"){var l=Object.getOwnPropertyDescriptor(t,n);if(l.value!==o||l.enumerable!==!0)return!1}return!0}),lp}var cp,Q1;function dR(){if(Q1)return cp;Q1=1;var e=typeof Symbol<"u"&&Symbol,t=uR();return cp=function(){return typeof e!="function"||typeof Symbol!="function"||typeof e("foo")!="symbol"||typeof Symbol("bar")!="symbol"?!1:t()},cp}var up,Z1;function C_(){return Z1||(Z1=1,up=typeof Reflect<"u"&&Reflect.getPrototypeOf||null),up}var dp,J1;function __(){if(J1)return dp;J1=1;var e=w_;return dp=e.getPrototypeOf||null,dp}var fR="Function.prototype.bind called on incompatible ",pR=Object.prototype.toString,hR=Math.max,mR="[object Function]",ex=function(t,n){for(var r=[],o=0;o<t.length;o+=1)r[o]=t[o];for(var i=0;i<n.length;i+=1)r[i+t.length]=n[i];return r},gR=function(t,n){for(var r=[],o=n||0,i=0;o<t.length;o+=1,i+=1)r[i]=t[o];return r},vR=function(e,t){for(var n="",r=0;r<e.length;r+=1)n+=e[r],r+1<e.length&&(n+=t);return n},yR=function(t){var n=this;if(typeof n!="function"||pR.apply(n)!==mR)throw new TypeError(fR+n);for(var r=gR(arguments,1),o,i=function(){if(this instanceof o){var d=n.apply(this,ex(r,arguments));return Object(d)===d?d:this}return n.apply(t,ex(r,arguments))},a=hR(0,n.length-r.length),l=[],s=0;s<a;s++)l[s]="$"+s;if(o=Function("binder","return function ("+vR(l,",")+"){ return binder.apply(this,arguments); }")(i),n.prototype){var c=function(){};c.prototype=n.prototype,o.prototype=new c,c.prototype=null}return o},xR=yR,$d=Function.prototype.bind||xR,S0=Function.prototype.call,fp,tx;function k_(){return tx||(tx=1,fp=Function.prototype.apply),fp}var bR=typeof Reflect<"u"&&Reflect&&Reflect.apply,wR=$d,SR=k_(),ER=S0,CR=bR,_R=CR||wR.call(ER,SR),kR=$d,PR=Xi,OR=S0,TR=_R,P_=function(t){if(t.length<1||typeof t[0]!="function")throw new PR("a function is required");return TR(kR,OR,t)},pp,nx;function jR(){if(nx)return pp;nx=1;var e=P_,t=S_,n;try{n=[].__proto__===Array.prototype}catch(a){if(!a||typeof a!="object"||!("code"in a)||a.code!=="ERR_PROTO_ACCESS")throw a}var r=!!n&&t&&t(Object.prototype,"__proto__"),o=Object,i=o.getPrototypeOf;return pp=r&&typeof r.get=="function"?e([r.get]):typeof i=="function"?function(l){return i(l==null?l:o(l))}:!1,pp}var hp,rx;function $R(){if(rx)return hp;rx=1;var e=C_(),t=__(),n=jR();return hp=e?function(o){return e(o)}:t?function(o){if(!o||typeof o!="object"&&typeof o!="function")throw new TypeError("getProto: not an object");return t(o)}:n?function(o){return n(o)}:null,hp}var mp,ox;function IR(){if(ox)return mp;ox=1;var e=Function.prototype.call,t=Object.prototype.hasOwnProperty,n=$d;return mp=n.call(e,t),mp}var ae,MR=w_,AR=Y8,DR=X8,LR=K8,RR=Q8,Ai=Z8,vi=Xi,FR=J8,zR=eR,NR=tR,BR=nR,VR=rR,WR=oR,UR=iR,HR=lR,O_=Function,gp=function(e){try{return O_('"use strict"; return ('+e+").constructor;")()}catch{}},Cs=S_,GR=E_,vp=function(){throw new vi},qR=Cs?function(){try{return arguments.callee,vp}catch{try{return Cs(arguments,"callee").get}catch{return vp}}}():vp,Vo=dR()(),Xe=$R(),YR=__(),XR=C_(),T_=k_(),Ns=S0,Ko={},KR=typeof Uint8Array>"u"||!Xe?ae:Xe(Uint8Array),go={__proto__:null,"%AggregateError%":typeof AggregateError>"u"?ae:AggregateError,"%Array%":Array,"%ArrayBuffer%":typeof ArrayBuffer>"u"?ae:ArrayBuffer,"%ArrayIteratorPrototype%":Vo&&Xe?Xe([][Symbol.iterator]()):ae,"%AsyncFromSyncIteratorPrototype%":ae,"%AsyncFunction%":Ko,"%AsyncGenerator%":Ko,"%AsyncGeneratorFunction%":Ko,"%AsyncIteratorPrototype%":Ko,"%Atomics%":typeof Atomics>"u"?ae:Atomics,"%BigInt%":typeof BigInt>"u"?ae:BigInt,"%BigInt64Array%":typeof BigInt64Array>"u"?ae:BigInt64Array,"%BigUint64Array%":typeof BigUint64Array>"u"?ae:BigUint64Array,"%Boolean%":Boolean,"%DataView%":typeof DataView>"u"?ae:DataView,"%Date%":Date,"%decodeURI%":decodeURI,"%decodeURIComponent%":decodeURIComponent,"%encodeURI%":encodeURI,"%encodeURIComponent%":encodeURIComponent,"%Error%":AR,"%eval%":eval,"%EvalError%":DR,"%Float16Array%":typeof Float16Array>"u"?ae:Float16Array,"%Float32Array%":typeof Float32Array>"u"?ae:Float32Array,"%Float64Array%":typeof Float64Array>"u"?ae:Float64Array,"%FinalizationRegistry%":typeof FinalizationRegistry>"u"?ae:FinalizationRegistry,"%Function%":O_,"%GeneratorFunction%":Ko,"%Int8Array%":typeof Int8Array>"u"?ae:Int8Array,"%Int16Array%":typeof Int16Array>"u"?ae:Int16Array,"%Int32Array%":typeof Int32Array>"u"?ae:Int32Array,"%isFinite%":isFinite,"%isNaN%":isNaN,"%IteratorPrototype%":Vo&&Xe?Xe(Xe([][Symbol.iterator]())):ae,"%JSON%":typeof JSON=="object"?JSON:ae,"%Map%":typeof Map>"u"?ae:Map,"%MapIteratorPrototype%":typeof Map>"u"||!Vo||!Xe?ae:Xe(new Map()[Symbol.iterator]()),"%Math%":Math,"%Number%":Number,"%Object%":MR,"%Object.getOwnPropertyDescriptor%":Cs,"%parseFloat%":parseFloat,"%parseInt%":parseInt,"%Promise%":typeof Promise>"u"?ae:Promise,"%Proxy%":typeof Proxy>"u"?ae:Proxy,"%RangeError%":LR,"%ReferenceError%":RR,"%Reflect%":typeof Reflect>"u"?ae:Reflect,"%RegExp%":RegExp,"%Set%":typeof Set>"u"?ae:Set,"%SetIteratorPrototype%":typeof Set>"u"||!Vo||!Xe?ae:Xe(new Set()[Symbol.iterator]()),"%SharedArrayBuffer%":typeof SharedArrayBuffer>"u"?ae:SharedArrayBuffer,"%String%":String,"%StringIteratorPrototype%":Vo&&Xe?Xe(""[Symbol.iterator]()):ae,"%Symbol%":Vo?Symbol:ae,"%SyntaxError%":Ai,"%ThrowTypeError%":qR,"%TypedArray%":KR,"%TypeError%":vi,"%Uint8Array%":typeof Uint8Array>"u"?ae:Uint8Array,"%Uint8ClampedArray%":typeof Uint8ClampedArray>"u"?ae:Uint8ClampedArray,"%Uint16Array%":typeof Uint16Array>"u"?ae:Uint16Array,"%Uint32Array%":typeof Uint32Array>"u"?ae:Uint32Array,"%URIError%":FR,"%WeakMap%":typeof WeakMap>"u"?ae:WeakMap,"%WeakRef%":typeof WeakRef>"u"?ae:WeakRef,"%WeakSet%":typeof WeakSet>"u"?ae:WeakSet,"%Function.prototype.call%":Ns,"%Function.prototype.apply%":T_,"%Object.defineProperty%":GR,"%Object.getPrototypeOf%":YR,"%Math.abs%":zR,"%Math.floor%":NR,"%Math.max%":BR,"%Math.min%":VR,"%Math.pow%":WR,"%Math.round%":UR,"%Math.sign%":HR,"%Reflect.getPrototypeOf%":XR};if(Xe)try{null.error}catch(e){var QR=Xe(Xe(e));go["%Error.prototype%"]=QR}var ZR=function e(t){var n;if(t==="%AsyncFunction%")n=gp("async function () {}");else if(t==="%GeneratorFunction%")n=gp("function* () {}");else if(t==="%AsyncGeneratorFunction%")n=gp("async function* () {}");else if(t==="%AsyncGenerator%"){var r=e("%AsyncGeneratorFunction%");r&&(n=r.prototype)}else if(t==="%AsyncIteratorPrototype%"){var o=e("%AsyncGenerator%");o&&Xe&&(n=Xe(o.prototype))}return go[t]=n,n},ix={__proto__:null,"%ArrayBufferPrototype%":["ArrayBuffer","prototype"],"%ArrayPrototype%":["Array","prototype"],"%ArrayProto_entries%":["Array","prototype","entries"],"%ArrayProto_forEach%":["Array","prototype","forEach"],"%ArrayProto_keys%":["Array","prototype","keys"],"%ArrayProto_values%":["Array","prototype","values"],"%AsyncFunctionPrototype%":["AsyncFunction","prototype"],"%AsyncGenerator%":["AsyncGeneratorFunction","prototype"],"%AsyncGeneratorPrototype%":["AsyncGeneratorFunction","prototype","prototype"],"%BooleanPrototype%":["Boolean","prototype"],"%DataViewPrototype%":["DataView","prototype"],"%DatePrototype%":["Date","prototype"],"%ErrorPrototype%":["Error","prototype"],"%EvalErrorPrototype%":["EvalError","prototype"],"%Float32ArrayPrototype%":["Float32Array","prototype"],"%Float64ArrayPrototype%":["Float64Array","prototype"],"%FunctionPrototype%":["Function","prototype"],"%Generator%":["GeneratorFunction","prototype"],"%GeneratorPrototype%":["GeneratorFunction","prototype","prototype"],"%Int8ArrayPrototype%":["Int8Array","prototype"],"%Int16ArrayPrototype%":["Int16Array","prototype"],"%Int32ArrayPrototype%":["Int32Array","prototype"],"%JSONParse%":["JSON","parse"],"%JSONStringify%":["JSON","stringify"],"%MapPrototype%":["Map","prototype"],"%NumberPrototype%":["Number","prototype"],"%ObjectPrototype%":["Object","prototype"],"%ObjProto_toString%":["Object","prototype","toString"],"%ObjProto_valueOf%":["Object","prototype","valueOf"],"%PromisePrototype%":["Promise","prototype"],"%PromiseProto_then%":["Promise","prototype","then"],"%Promise_all%":["Promise","all"],"%Promise_reject%":["Promise","reject"],"%Promise_resolve%":["Promise","resolve"],"%RangeErrorPrototype%":["RangeError","prototype"],"%ReferenceErrorPrototype%":["ReferenceError","prototype"],"%RegExpPrototype%":["RegExp","prototype"],"%SetPrototype%":["Set","prototype"],"%SharedArrayBufferPrototype%":["SharedArrayBuffer","prototype"],"%StringPrototype%":["String","prototype"],"%SymbolPrototype%":["Symbol","prototype"],"%SyntaxErrorPrototype%":["SyntaxError","prototype"],"%TypedArrayPrototype%":["TypedArray","prototype"],"%TypeErrorPrototype%":["TypeError","prototype"],"%Uint8ArrayPrototype%":["Uint8Array","prototype"],"%Uint8ClampedArrayPrototype%":["Uint8ClampedArray","prototype"],"%Uint16ArrayPrototype%":["Uint16Array","prototype"],"%Uint32ArrayPrototype%":["Uint32Array","prototype"],"%URIErrorPrototype%":["URIError","prototype"],"%WeakMapPrototype%":["WeakMap","prototype"],"%WeakSetPrototype%":["WeakSet","prototype"]},Bs=$d,su=IR(),JR=Bs.call(Ns,Array.prototype.concat),eF=Bs.call(T_,Array.prototype.splice),ax=Bs.call(Ns,String.prototype.replace),lu=Bs.call(Ns,String.prototype.slice),tF=Bs.call(Ns,RegExp.prototype.exec),nF=/[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,rF=/\\(\\)?/g,oF=function(t){var n=lu(t,0,1),r=lu(t,-1);if(n==="%"&&r!=="%")throw new Ai("invalid intrinsic syntax, expected closing `%`");if(r==="%"&&n!=="%")throw new Ai("invalid intrinsic syntax, expected opening `%`");var o=[];return ax(t,nF,function(i,a,l,s){o[o.length]=l?ax(s,rF,"$1"):a||i}),o},iF=function(t,n){var r=t,o;if(su(ix,r)&&(o=ix[r],r="%"+o[0]+"%"),su(go,r)){var i=go[r];if(i===Ko&&(i=ZR(r)),typeof i>"u"&&!n)throw new vi("intrinsic "+t+" exists, but is not available. Please file an issue!");return{alias:o,name:r,value:i}}throw new Ai("intrinsic "+t+" does not exist!")},E0=function(t,n){if(typeof t!="string"||t.length===0)throw new vi("intrinsic name must be a non-empty string");if(arguments.length>1&&typeof n!="boolean")throw new vi('"allowMissing" argument must be a boolean');if(tF(/^%?[^%]*%?$/,t)===null)throw new Ai("`%` may not be present anywhere but at the beginning and end of the intrinsic name");var r=oF(t),o=r.length>0?r[0]:"",i=iF("%"+o+"%",n),a=i.name,l=i.value,s=!1,c=i.alias;c&&(o=c[0],eF(r,JR([0,1],c)));for(var d=1,f=!0;d<r.length;d+=1){var m=r[d],p=lu(m,0,1),h=lu(m,-1);if((p==='"'||p==="'"||p==="`"||h==='"'||h==="'"||h==="`")&&p!==h)throw new Ai("property names with quotes must have matching quotes");if((m==="constructor"||!f)&&(s=!0),o+="."+m,a="%"+o+"%",su(go,a))l=go[a];else if(l!=null){if(!(m in l)){if(!n)throw new vi("base intrinsic for "+t+" exists, but the property is not available.");return}if(Cs&&d+1>=r.length){var y=Cs(l,m);f=!!y,f&&"get"in y&&!("originalValue"in y.get)?l=y.get:l=l[m]}else f=su(l,m),l=l[m];f&&!s&&(go[a]=l)}}return l},j_=E0,$_=P_,aF=$_([j_("%String.prototype.indexOf%")]),I_=function(t,n){var r=j_(t,!!n);return typeof r=="function"&&aF(t,".prototype.")>-1?$_([r]):r},sF=E0,Vs=I_,lF=Td,cF=Xi,sx=sF("%Map%",!0),uF=Vs("Map.prototype.get",!0),dF=Vs("Map.prototype.set",!0),fF=Vs("Map.prototype.has",!0),pF=Vs("Map.prototype.delete",!0),hF=Vs("Map.prototype.size",!0),M_=!!sx&&function(){var t,n={assert:function(r){if(!n.has(r))throw new cF("Side channel does not contain "+lF(r))},delete:function(r){if(t){var o=pF(t,r);return hF(t)===0&&(t=void 0),o}return!1},get:function(r){if(t)return uF(t,r)},has:function(r){return t?fF(t,r):!1},set:function(r,o){t||(t=new sx),dF(t,r,o)}};return n},mF=E0,Id=I_,gF=Td,yl=M_,vF=Xi,Wo=mF("%WeakMap%",!0),yF=Id("WeakMap.prototype.get",!0),xF=Id("WeakMap.prototype.set",!0),bF=Id("WeakMap.prototype.has",!0),wF=Id("WeakMap.prototype.delete",!0),SF=Wo?function(){var t,n,r={assert:function(o){if(!r.has(o))throw new vF("Side channel does not contain "+gF(o))},delete:function(o){if(Wo&&o&&(typeof o=="object"||typeof o=="function")){if(t)return wF(t,o)}else if(yl&&n)return n.delete(o);return!1},get:function(o){return Wo&&o&&(typeof o=="object"||typeof o=="function")&&t?yF(t,o):n&&n.get(o)},has:function(o){return Wo&&o&&(typeof o=="object"||typeof o=="function")&&t?bF(t,o):!!n&&n.has(o)},set:function(o,i){Wo&&o&&(typeof o=="object"||typeof o=="function")?(t||(t=new Wo),xF(t,o,i)):yl&&(n||(n=yl()),n.set(o,i))}};return r}:yl,EF=Xi,CF=Td,_F=q8,kF=M_,PF=SF,OF=PF||kF||_F,C0=function(){var t,n={assert:function(r){if(!n.has(r)){var o=r&&Object(r)===r?"the given object key":CF(r);throw new EF("Side channel does not contain "+o)}},delete:function(r){return!!t&&t.delete(r)},get:function(r){return t&&t.get(r)},has:function(r){return!!t&&t.has(r)},set:function(r,o){t||(t=OF()),t.set(r,o)}};return n},lx=String.prototype.replace,cx=/%20/g,xl={RFC1738:"RFC1738",RFC3986:"RFC3986",WHATWG:"WHATWG"},_0={default:xl.RFC3986,formatters:{RFC1738:function(e){return lx.call(e,cx,"+")},RFC3986:function(e){return String(e)},WHATWG:function(e){return lx.call(e,cx,"+")}},RFC1738:xl.RFC1738,RFC3986:xl.RFC3986,WHATWG:xl.WHATWG},yp=_0,Md=C0,ux=E_,ac=Object.prototype.hasOwnProperty,Mn=Array.isArray,Ad=Md(),Cr=function(t,n){return Ad.set(t,n),t},no=function(t){return Ad.has(t)},ka=function(t){return Ad.get(t)},wm=function(t,n){Ad.set(t,n)},k0=Md(),bl=function(t,n){return k0.set(t,n),t},xp=function(t){return k0.has(t)},dx=function(t){return k0.get(t)},Pn=function(){for(var e=[],t=0;t<256;++t)e[e.length]="%"+((t<16?"0":"")+t.toString(16)).toUpperCase();return e}(),TF=function(t){for(;t.length>1;){var n=t.pop(),r=n.obj[n.prop];if(Mn(r)){for(var o=[],i=0;i<r.length;++i)typeof r[i]<"u"&&(o[o.length]=r[i]);n.obj[n.prop]=o}}},co=function(t,n){for(var r=n&&n.plainObjects?{__proto__:null}:{},o=0;o<t.length;++o)typeof t[o]<"u"&&(r[o]=t[o]);return r},cu=function(t,n,r){n==="__proto__"&&ux?ux(t,n,{configurable:!0,enumerable:!0,value:r,writable:!0}):t[n]=r},jF=function(t,n){for(var r=n,o=Object.keys(t),i=0;i<o.length;++i){var a=parseInt(o[i],10);String(a)===o[i]&&a>r&&(r=a)}return r},fx=function(t){for(var n=0,r=0;r<t.length;++r)ac.call(t,r)&&(n+=1);return n},px=function(t,n,r){var o=[t,n];if(r&&typeof r.arrayLimit=="number"&&o.length>r.arrayLimit){if(r.throwOnLimitExceeded)throw new RangeError("Array limit exceeded. Only "+r.arrayLimit+" element"+(r.arrayLimit===1?"":"s")+" allowed in an array.");return Cr(co(o,r),1)}return o},$F=function e(t,n,r){if(!n)return t;if(typeof n!="object"&&typeof n!="function"){if(Mn(t)){var o=t.length;if(r&&typeof r.arrayLimit=="number"&&fx(t)>=r.arrayLimit){if(r.throwOnLimitExceeded)throw new RangeError("Array limit exceeded. Only "+r.arrayLimit+" element"+(r.arrayLimit===1?"":"s")+" allowed in an array.");return Cr(co(t.concat(n),r),o)}t[o]=n}else if(t&&typeof t=="object")if(no(t)){var i=ka(t)+1;t[i]=n,wm(t,i)}else if(r&&r.strictMerge&&xp(t)){var a=dx(t)+1;if(r.throwOnLimitExceeded&&typeof r.arrayLimit=="number"&&a>=r.arrayLimit)throw new RangeError("Array limit exceeded. Only "+r.arrayLimit+" element"+(r.arrayLimit===1?"":"s")+" allowed in an array.");t[a]=n,bl(t,a)}else if(r&&r.strictMerge){var l=px(t,n,r);return Mn(l)?bl(l,1):l}else(r&&(r.plainObjects||r.allowPrototypes)||!ac.call(Object.prototype,n))&&(t[n]=!0);else return px(t,n,r);return t}if(!t||typeof t!="object"){if(no(n)){for(var s=Object.keys(n),c=r&&r.plainObjects?{__proto__:null,0:t}:{0:t},d=0;d<s.length;d++){var f=parseInt(s[d],10);c[f+1]=n[s[d]]}return Cr(c,ka(n)+1)}var m=[t].concat(n);if(r&&typeof r.arrayLimit=="number"&&m.length>r.arrayLimit){if(r.throwOnLimitExceeded)throw new RangeError("Array limit exceeded. Only "+r.arrayLimit+" element"+(r.arrayLimit===1?"":"s")+" allowed in an array.");return Cr(co(m,r),m.length-1)}return m}var p=t;if(Mn(t)&&!Mn(n)&&(p=co(t,r),xp(t)&&bl(p,t.length-1)),Mn(t)&&Mn(n)){if(n.forEach(function(h,y){if(ac.call(t,y)){var b=t[y];b&&typeof b=="object"&&h&&typeof h=="object"?t[y]=e(b,h,r):t[t.length]=h}else t[y]=h}),r&&typeof r.arrayLimit=="number"&&fx(t)>r.arrayLimit){if(r.throwOnLimitExceeded)throw new RangeError("Array limit exceeded. Only "+r.arrayLimit+" element"+(r.arrayLimit===1?"":"s")+" allowed in an array.");return Cr(co(t,r),t.length-1)}return t}return Object.keys(n).reduce(function(h,y){var b=n[y];if(ac.call(h,y)?cu(h,y,e(h[y],b,r)):cu(h,y,b),no(n)&&!no(h)&&Cr(h,jF(h,ka(n))),no(h)){var g=parseInt(y,10);String(g)===y&&g>=0&&g>ka(h)&&wm(h,g)}if(xp(h)){var v=parseInt(y,10);String(v)===y&&v>dx(h)&&bl(h,v)}return h},p)},IF=function(t,n){return Object.keys(n).reduce(function(r,o){return cu(r,o,n[o]),r},t)},MF=function(e,t,n){if(typeof e=="string"&&e.indexOf("%")===-1)return e.indexOf("+")===-1?e:e.replace(/\+/g," ");var r=e.replace(/\+/g," ");if(n==="iso-8859-1")return r.replace(/%[0-9a-f]{2}/gi,unescape);try{return decodeURIComponent(r)}catch{return r}},AF=typeof Symbol=="function"&&typeof Symbol.toPrimitive=="symbol",DF=Array.prototype.join,LF=Array.prototype.toString,RF=Object.prototype.toString,A_=function e(t,n){if(!t||typeof t!="object"&&typeof t!="function"||AF&&t[Symbol.toPrimitive]!=null)return t;if(Mn(t)&&t.toString===LF&&t.join===DF){var r=n||Md();if(r.has(t))return"";r.set(t,!0);for(var o,i=0;i<t.length;i+=1){var a=t[i],l=e(a,r);if(!o&&l!==a){o=[];for(var s=0;s<i;s+=1)o[s]=t[s]}o&&(o[i]=l)}return r.delete(t),o||t}if(typeof t.toString=="function")return t;var c=t.valueOf;if(typeof c=="function"){var d=c.call(t);if(!d||typeof d!="object"&&typeof d!="function")return String(d)}return RF.call(t)},wl=1024,FF=function(t,n,r,o,i){if(t.length===0)return t;var a=t;if(typeof t=="symbol"?a=Symbol.prototype.toString.call(t):typeof t!="string"&&(a=String(A_(t))),r==="iso-8859-1")return escape(a).replace(/%u[0-9a-f]{4}/gi,function(y){return"%26%23"+parseInt(y.slice(2),16)+"%3B"}).replace(/\+/g,"%2B");for(var l="",s=0;s<a.length;s+=wl){var c=a.length>=wl?a.slice(s,s+wl):a;if(s+wl<a.length){var d=c.charCodeAt(c.length-1);d>=55296&&d<=56319&&(c=c.slice(0,-1),s-=1)}for(var f=[],m=0;m<c.length;++m){var p=c.charCodeAt(m);if(p===45||p===46||p===95||p===126&&i!==yp.WHATWG||p>=48&&p<=57||p>=65&&p<=90||p>=97&&p<=122||i===yp.RFC1738&&(p===40||p===41)||i===yp.WHATWG&&p===42){f[f.length]=c.charAt(m);continue}if(p<128){f[f.length]=Pn[p];continue}if(p<2048){f[f.length]=Pn[192|p>>6]+Pn[128|p&63];continue}if(p<55296||p>=57344){f[f.length]=Pn[224|p>>12]+Pn[128|p>>6&63]+Pn[128|p&63];continue}var h=c.charCodeAt(m+1);p<=56319&&h>=56320&&h<=57343?(m+=1,p=65536+((p&1023)<<10|h&1023),f[f.length]=Pn[240|p>>18]+Pn[128|p>>12&63]+Pn[128|p>>6&63]+Pn[128|p&63]):f[f.length]="%EF%BF%BD"}l+=f.join("")}return l},zF=function(t){for(var n=[{obj:{o:t},prop:"o"}],r=Md(),o=0;o<n.length;++o)for(var i=n[o],a=i.obj[i.prop],l=Object.keys(a),s=0;s<l.length;++s){var c=l[s],d=a[c];typeof d=="object"&&d!==null&&!r.has(d)&&(n[n.length]={obj:a,prop:c},r.set(d,!0))}return TF(n),t},NF=function(t){return Object.prototype.toString.call(t)==="[object RegExp]"},BF=function(t){return!t||typeof t!="object"?!1:!!(t.constructor&&typeof t.constructor.isBuffer=="function"&&t.constructor.isBuffer(t))},VF=function(t,n,r,o,i){if(no(t)){if(i)throw new RangeError("Array limit exceeded. Only "+r+" element"+(r===1?"":"s")+" allowed in an array.");for(var a=Mn(n)?n:[n],l=ka(t),s=0;s<a.length;++s)l+=1,t[l]=a[s];return wm(t,l),t}var c=[].concat(t,n);if(c.length>r){if(i)throw new RangeError("Array limit exceeded. Only "+r+" element"+(r===1?"":"s")+" allowed in an array.");return Cr(co(c,{plainObjects:o}),c.length-1)}return c},WF=function(t,n){if(Mn(t)){for(var r=[],o=0;o<t.length;o+=1)r[r.length]=n(t[o]);return r}return n(t)},D_={arrayToObject:co,assign:IF,combine:VF,compact:zF,decode:MF,encode:FF,isBuffer:BF,isOverflow:no,isRegExp:NF,markOverflow:Cr,maybeMap:WF,merge:$F,setProperty:cu,toCoercible:A_},L_=C0,Pa=D_,Ha=_0,hx=Object.prototype.hasOwnProperty,R_={brackets:function(t){return t+"[]"},comma:"comma",indices:function(t,n){return t+"["+n+"]"},repeat:function(t){return t}},Tn=Array.isArray,UF=Array.prototype.push,F_=function(e,t){UF.apply(e,Tn(t)?t:[t])},HF=Date.prototype.toISOString,mx=Ha.default,Me={addQueryPrefix:!1,allowDots:!1,allowEmptyArrays:!1,arrayFormat:"indices",charset:"utf-8",charsetSentinel:!1,commaRoundTrip:!1,delimiter:"&",depth:1/0,encode:!0,encodeDotInKeys:!1,encoder:Pa.encode,encodeValuesOnly:!1,filter:void 0,format:mx,formatter:Ha.formatters[mx],indices:!1,serializeDate:function(t){return HF.call(t)},skipNulls:!1,strictNullHandling:!1},GF=function(t){return typeof t=="string"||typeof t=="number"||typeof t=="boolean"||typeof t=="symbol"||typeof t=="bigint"},bp={},qF=function e(t,n,r,o,i,a,l,s,c,d,f,m,p,h,y,b,g,v,w,E){var S=t;if(E>w)throw new RangeError("Input depth exceeded depth option of "+w);for(var P=v,k=0,_=!1;(P=P.get(bp))!==void 0&&!_;){var T=P.get(t);if(k+=1,typeof T<"u"){if(T===k)throw new RangeError("Cyclic object value");_=!0}typeof P.get(bp)>"u"&&(k=0)}if(S=typeof d=="function"?d(n,S):S,S instanceof Date?S=p(S):r==="comma"&&Tn(S)&&(S=Pa.maybeMap(S,function(z){return z instanceof Date?p(z):z})),S===null){if(a)return y(c&&!b?c(n,Me.encoder,g,"key",h):n);S=""}if(GF(S)||Pa.isBuffer(S)){if(c){var $=b?n:c(n,Me.encoder,g,"key",h);return[y($)+"="+y(c(S,Me.encoder,g,"value",h))]}return[y(n)+"="+y(String(S))]}var I=[];if(typeof S>"u")return I;var M;if(r==="comma"&&Tn(S))b&&c&&(S=Pa.maybeMap(S,function(z){return z==null?z:c(z,Me.encoder,g,"value",h)})),M=[{value:S.length>0?Pa.toCoercible(S).join(",")||null:void 0}];else if(Tn(d))M=d;else{var j=Object.keys(S);M=f?j.sort(f):j}var R=String(n),D=o&&Tn(S)&&S.length===1?R+"[]":R;if(i&&Tn(S)&&S.length===0&&Object.keys(S).length===0)return y(c&&!b?c(D,Me.encoder,g,"key",h):D)+"[]";for(var F=0;F<M.length;++F){var L=M[F],O=typeof L=="object"&&L&&typeof L.value<"u"?L.value:S[L];if(!(l&&O===null)){var A=m&&s?String(L).replace(/\./g,"%2E"):String(L),N=Tn(S)?typeof r=="function"?r(D,A):D:D+(m?"."+A:"["+A+"]");v.set(t,k);var B=L_();B.set(bp,v),F_(I,e(O,N,r,o,i,a,l,s,r==="comma"&&b&&Tn(S)?null:c,d,f,m,p,h,y,b,g,B,w,E+1))}}return I},YF=function(t){if(!t)return Me;if(typeof t.allowEmptyArrays<"u"&&typeof t.allowEmptyArrays!="boolean")throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");if(typeof t.encodeDotInKeys<"u"&&typeof t.encodeDotInKeys!="boolean")throw new TypeError("`encodeDotInKeys` option can only be `true` or `false`, when provided");if(t.encoder!==null&&typeof t.encoder<"u"&&typeof t.encoder!="function")throw new TypeError("Encoder has to be a function.");var n=t.charset||Me.charset;if(typeof t.charset<"u"&&t.charset!=="utf-8"&&t.charset!=="iso-8859-1")throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");var r=Ha.default;if(typeof t.format<"u"){if(!hx.call(Ha.formatters,t.format))throw new TypeError("Unknown format option provided.");r=t.format}var o=Ha.formatters[r],i=Me.filter;(typeof t.filter=="function"||Tn(t.filter))&&(i=t.filter);var a;if(hx.call(R_,t.arrayFormat)?a=t.arrayFormat:"indices"in t?a=t.indices?"indices":"repeat":a=Me.arrayFormat,"commaRoundTrip"in t&&typeof t.commaRoundTrip!="boolean")throw new TypeError("`commaRoundTrip` must be a boolean, or absent");var l=typeof t.allowDots>"u"?t.encodeDotInKeys===!0?!0:Me.allowDots:!!t.allowDots;return{addQueryPrefix:typeof t.addQueryPrefix=="boolean"?t.addQueryPrefix:Me.addQueryPrefix,allowDots:l,allowEmptyArrays:typeof t.allowEmptyArrays=="boolean"?!!t.allowEmptyArrays:Me.allowEmptyArrays,arrayFormat:a,charset:n,charsetSentinel:typeof t.charsetSentinel=="boolean"?t.charsetSentinel:Me.charsetSentinel,commaRoundTrip:!!t.commaRoundTrip,delimiter:typeof t.delimiter>"u"?Me.delimiter:t.delimiter,depth:typeof t.depth=="number"?t.depth:Me.depth,encode:typeof t.encode=="boolean"?t.encode:Me.encode,encodeDotInKeys:typeof t.encodeDotInKeys=="boolean"?t.encodeDotInKeys:Me.encodeDotInKeys,encoder:typeof t.encoder=="function"?t.encoder:Me.encoder,encodeValuesOnly:typeof t.encodeValuesOnly=="boolean"?t.encodeValuesOnly:Me.encodeValuesOnly,filter:i,format:r,formatter:o,serializeDate:typeof t.serializeDate=="function"?t.serializeDate:Me.serializeDate,skipNulls:typeof t.skipNulls=="boolean"?t.skipNulls:Me.skipNulls,sort:typeof t.sort=="function"?t.sort:null,strictNullHandling:typeof t.strictNullHandling=="boolean"?t.strictNullHandling:Me.strictNullHandling}},XF=function(e,t){var n=e,r=YF(t),o,i;typeof r.filter=="function"?(i=r.filter,n=i("",n)):Tn(r.filter)&&(i=r.filter.slice(),o=i);var a=[];if(typeof n!="object"||n===null)return"";var l=R_[r.arrayFormat],s=l==="comma"&&r.commaRoundTrip;o||(o=Object.keys(n)),r.sort&&o.sort(r.sort);for(var c=L_(),d=0;d<o.length;++d){var f=o[d];if(!(typeof f>"u"||f===null)){var m=n[f];if(!(r.skipNulls&&m===null)){var p=r.encodeDotInKeys?String(f).replace(/\./g,"%2E"):String(f);F_(a,qF(m,p,l,s,r.allowEmptyArrays,r.strictNullHandling,r.skipNulls,r.encodeDotInKeys,r.encode?r.encoder:null,i,r.sort,r.allowDots,r.serializeDate,r.format,r.formatter,r.encodeValuesOnly,r.charset,c,r.depth,0))}}}var h=a.join(r.delimiter),y=r.addQueryPrefix===!0?"?":"";return r.charsetSentinel&&(r.charset==="iso-8859-1"?y+="utf8=%26%2310003%3B"+r.delimiter:y+="utf8=%E2%9C%93"+r.delimiter),h.length>0?y+h:""},KF=C0,Wt=D_,sc=Object.prototype.hasOwnProperty,Ga=Array.isArray,z_=Object.getPrototypeOf,gx=String.fromCharCode,QF=function(t){if(!t||typeof t!="object")return!1;if(Ga(t))return!0;var n=z_(t);return n===Object.prototype||n===null},ZF=function(t){if(Ga(t)){var n=[];return n.length=t.length,n}return z_(t)===null?{__proto__:null}:{}},JF=function(t){for(var n=KF(),r={},o=[{source:t,target:r}],i=0;i<o.length;++i)for(var a=o[i].source,l=o[i].target,s=Object.keys(a),c=0;c<s.length;++c){var d=a[s[c]];if(QF(d)){if(!n.has(d)){var f=ZF(d);n.set(d,f),o[o.length]={source:d,target:f}}Wt.setProperty(l,s[c],n.get(d))}else Wt.setProperty(l,s[c],d)}return r},Oe={allowDots:!1,allowEmptyArrays:!1,allowPrototypes:!1,allowSparse:!1,arrayLimit:20,charset:"utf-8",charsetSentinel:!1,comma:!1,decodeDotInKeys:!1,decoder:Wt.decode,delimiter:"&",depth:5,duplicates:"combine",ignoreQueryPrefix:!1,interpretNumericEntities:!1,parameterLimit:1e3,parseArrays:!0,plainObjects:!1,strictDepth:!1,strictMerge:!0,strictNullHandling:!1,throwOnLimitExceeded:!1},ez=function(e){return e.replace(/&#(\d+);/g,function(t,n){var r=parseInt(n,10);return r>65535&&r<=1114111?(r-=65536,gx(55296|r>>10,56320|r&1023)):gx(r)})},N_=function(e,t,n){if(e&&typeof e=="string"&&t.comma&&e.indexOf(",")>-1){if(t.throwOnLimitExceeded)for(var r=0,o=e.indexOf(",");o>-1;){if(r+=1,r>=t.arrayLimit)throw new RangeError("Array limit exceeded. Only "+t.arrayLimit+" element"+(t.arrayLimit===1?"":"s")+" allowed in an array.");o=e.indexOf(",",o+1)}return e.split(",")}if(t.throwOnLimitExceeded&&n>=t.arrayLimit&&n>0)throw new RangeError("Array limit exceeded. Only "+t.arrayLimit+" element"+(t.arrayLimit===1?"":"s")+" allowed in an array.");return e},tz="utf8=%26%2310003%3B",nz="utf8=%E2%9C%93",rz=function(t,n){var r={__proto__:null},o=n.ignoreQueryPrefix?t.replace(/^\?/,""):t;o=o.replace(/%5B/gi,"[").replace(/%5D/gi,"]");var i=n.parameterLimit===1/0?void 0:n.parameterLimit,a=o.split(n.delimiter,n.throwOnLimitExceeded&&typeof i<"u"?i+1:i);if(n.throwOnLimitExceeded&&typeof i<"u"&&a.length>i)throw new RangeError("Parameter limit exceeded. Only "+i+" parameter"+(i===1?"":"s")+" allowed.");var l=-1,s,c=n.charset;if(n.charsetSentinel)for(s=0;s<a.length;++s)a[s].indexOf("utf8=")===0&&(a[s]===nz?c="utf-8":a[s]===tz&&(c="iso-8859-1"),l=s,s=a.length);for(s=0;s<a.length;++s)if(s!==l){var d=a[s],f=d.indexOf("]="),m=f===-1?d.indexOf("="):f+1,p=m>1&&d.slice(m-2,m)==="[]",h,y;if(m===-1?(h=n.decoder(d,Oe.decoder,c,"key"),y=n.strictNullHandling?null:""):(h=n.decoder(d.slice(0,m),Oe.decoder,c,"key"),h!==null&&(y=Wt.maybeMap(N_(d.slice(m+1),n,Ga(r[h])&&(n.duplicates==="combine"||p)?r[h].length:0),function(g){return n.decoder(g,Oe.decoder,c,"value")}))),y&&n.interpretNumericEntities&&c==="iso-8859-1"&&(y=Wt.maybeMap(y,function(g){return g&&ez(String(g))})),p&&(y=Ga(y)?[y]:y),n.comma&&Ga(y)&&y.length>n.arrayLimit&&(y=Wt.combine([],y,n.arrayLimit,n.plainObjects,n.throwOnLimitExceeded)),h!==null){var b=sc.call(r,h);b&&(n.duplicates==="combine"||p)?r[h]=Wt.combine(r[h],y,n.arrayLimit,n.plainObjects,n.throwOnLimitExceeded):(!b||n.duplicates==="last")&&(r[h]=y)}}return r},B_=function(t){return t.charAt(0)==="["&&t.charAt(t.length-1)==="]"?t.slice(1,-1):t},oz=function(e,t,n,r){var o=0;if(e.length>0&&e[e.length-1]==="[]"){var i=e.slice(0,-1).join("");o=Array.isArray(t)&&t[i]?t[i].length:0}for(var a=r?t:N_(t,n,o),l=e.length-1;l>=0;--l){var s,c=e[l];if(c==="[]"&&n.parseArrays)Wt.isOverflow(a)?s=a:s=n.allowEmptyArrays&&(a===""||n.strictNullHandling&&a===null)?[]:Wt.combine([],a,n.arrayLimit,n.plainObjects,n.throwOnLimitExceeded);else{s=n.plainObjects?{__proto__:null}:{};var d=B_(c),f=n.decodeDotInKeys?d.replace(/%2E/gi,"."):d,m=parseInt(f,10),p=!isNaN(m)&&c!==f&&String(m)===f&&m>=0&&n.parseArrays;if(!n.parseArrays&&f==="")s[0]=a;else if(p&&m<n.arrayLimit)s=[],s[m]=a;else{if(p&&n.throwOnLimitExceeded)throw new RangeError("Array limit exceeded. Only "+n.arrayLimit+" element"+(n.arrayLimit===1?"":"s")+" allowed in an array.");p?(s[m]=a,Wt.markOverflow(s,m)):f!=="__proto__"&&(s[f]=a)}}a=s}return a},iz=function(t){for(var n="",r=0,o=0;o<t.length;o+=1){var i=t.charCodeAt(o);if(i===91)r+=1,n+="[";else if(i===93)r>0&&(r-=1),n+="]";else if(i===46&&r===0&&o+1<t.length&&t.charCodeAt(o+1)!==46&&t.charCodeAt(o+1)!==91){for(var a=o+1,l=a;l<t.length&&t.charCodeAt(l)!==46&&t.charCodeAt(l)!==91;)l+=1;n+="["+t.slice(a,l)+"]",o=l-1}else n+=t.charAt(o)}return n},az=function(t,n){var r=n.allowDots?iz(t):t;if(n.depth<=0)return!n.plainObjects&&sc.call(Object.prototype,B_(r))&&!n.allowPrototypes?void 0:[r];var o=[],i=r.indexOf("["),a=i>=0?r.slice(0,i):r;if(a){if(!n.plainObjects&&sc.call(Object.prototype,a)&&!n.allowPrototypes)return;o[o.length]=a}for(var l=r.length,s=i,c=0;s>=0&&c<n.depth;){for(var d=1,f=s+1,m=-1;f<l&&m<0;){var p=r.charCodeAt(f);p===91?d+=1:p===93&&(d-=1,d===0&&(m=f)),f+=1}if(m<0)return o[o.length]="["+r.slice(s)+"]",o;var h=r.slice(s,m+1),y=h.slice(1,-1);if(!n.plainObjects&&sc.call(Object.prototype,y)&&!n.allowPrototypes)return;o[o.length]=h,c+=1,s=r.indexOf("[",m+1)}if(s>=0){if(n.strictDepth===!0)throw new RangeError("Input depth exceeded depth option of "+n.depth+" and strictDepth is true");o[o.length]="["+r.slice(s)+"]"}return o},sz=function(t,n,r,o){if(t){var i=az(t,r);if(i)return oz(i,n,r,o)}},lz=function(t){if(!t)return Oe;if(typeof t.allowEmptyArrays<"u"&&typeof t.allowEmptyArrays!="boolean")throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");if(typeof t.decodeDotInKeys<"u"&&typeof t.decodeDotInKeys!="boolean")throw new TypeError("`decodeDotInKeys` option can only be `true` or `false`, when provided");if(t.decoder!==null&&typeof t.decoder<"u"&&typeof t.decoder!="function")throw new TypeError("Decoder has to be a function.");if(typeof t.charset<"u"&&t.charset!=="utf-8"&&t.charset!=="iso-8859-1")throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");if(typeof t.throwOnLimitExceeded<"u"&&typeof t.throwOnLimitExceeded!="boolean")throw new TypeError("`throwOnLimitExceeded` option must be a boolean");var n=typeof t.charset>"u"?Oe.charset:t.charset,r=typeof t.duplicates>"u"?Oe.duplicates:t.duplicates;if(r!=="combine"&&r!=="first"&&r!=="last")throw new TypeError("The duplicates option must be either combine, first, or last");var o=typeof t.allowDots>"u"?t.decodeDotInKeys===!0?!0:Oe.allowDots:!!t.allowDots;return{allowDots:o,allowEmptyArrays:typeof t.allowEmptyArrays=="boolean"?!!t.allowEmptyArrays:Oe.allowEmptyArrays,allowPrototypes:typeof t.allowPrototypes=="boolean"?t.allowPrototypes:Oe.allowPrototypes,allowSparse:typeof t.allowSparse=="boolean"?t.allowSparse:Oe.allowSparse,arrayLimit:typeof t.arrayLimit=="number"?t.arrayLimit:Oe.arrayLimit,charset:n,charsetSentinel:typeof t.charsetSentinel=="boolean"?t.charsetSentinel:Oe.charsetSentinel,comma:typeof t.comma=="boolean"?t.comma:Oe.comma,decodeDotInKeys:typeof t.decodeDotInKeys=="boolean"?t.decodeDotInKeys:Oe.decodeDotInKeys,decoder:typeof t.decoder=="function"?t.decoder:Oe.decoder,delimiter:typeof t.delimiter=="string"||Wt.isRegExp(t.delimiter)?t.delimiter:Oe.delimiter,depth:typeof t.depth=="number"||t.depth===!1?+t.depth:Oe.depth,duplicates:r,ignoreQueryPrefix:t.ignoreQueryPrefix===!0,interpretNumericEntities:typeof t.interpretNumericEntities=="boolean"?t.interpretNumericEntities:Oe.interpretNumericEntities,parameterLimit:typeof t.parameterLimit=="number"?t.parameterLimit:Oe.parameterLimit,parseArrays:t.parseArrays!==!1,plainObjects:typeof t.plainObjects=="boolean"?t.plainObjects:Oe.plainObjects,strictDepth:typeof t.strictDepth=="boolean"?!!t.strictDepth:Oe.strictDepth,strictMerge:typeof t.strictMerge=="boolean"?!!t.strictMerge:Oe.strictMerge,strictNullHandling:typeof t.strictNullHandling=="boolean"?t.strictNullHandling:Oe.strictNullHandling,throwOnLimitExceeded:typeof t.throwOnLimitExceeded=="boolean"?t.throwOnLimitExceeded:!1}},cz=function(e,t){var n=lz(t);if(e===""||e===null||typeof e>"u")return n.plainObjects?{__proto__:null}:{};for(var r=typeof e=="string"?rz(e,n):JF(e),o=n.plainObjects?{__proto__:null}:{},i=Object.keys(r),a=0;a<i.length;++a){var l=i[a],s=sz(l,r[l],n,typeof e=="string");o=Wt.merge(o,s,n)}return n.allowSparse===!0?o:Wt.compact(o)},uz=XF,dz=cz,fz=_0,pz={formats:fz,parse:dz,stringify:uz};const Dd=Ri(pz),hz=C.aside`

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
`,mz=C.h3`
    display: flex;
    gap: 110px;
margin-bottom: 15px;
font-size: 20px;
font-family: var(--main-font);
  
`;C.label`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 4px;
  font-size: 14px;
`;const gz=C.div`
  border-bottom: 1px solid #eee;
  padding: 12px;
  margin-bottom: 12px;

  &:last-child {
    border-bottom: none;
  }
`,vz=C.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  padding: 8px 0;
  
  &:hover p {
    color: #85683d;
  }
`,yz=C.p`
  font-weight: 600;
  font-size: 16px;
  margin: 0;
  color: #222;
  transition: color 0.2s;
`,xz=C.span`
  border: solid #555;
  border-width: 0 2px 2px 0;
  display: inline-block;
  padding: 3px;
  transform: ${e=>e.isOpen?"rotate(-135deg)":"rotate(45deg)"};
  transition: transform 0.3s ease;
`,bz=C.div`
  max-height: ${e=>e.isOpen?"500px":"0"};
  overflow: hidden;
  transition: max-height 0.3s ease-in-out, opacity 0.3s;
  opacity: ${e=>e.isOpen?"1":"0"};
  padding: ${e=>e.isOpen?"12px":"0"};
`,wz=C.label`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  cursor: pointer;
  font-size: 15px;
  color: #444;

  &:hover span:first-of-type {
    border-color: #85683d;
  }
`,Sm=C.input.attrs({type:"checkbox"})`
  display: none;
`,Sz=C.span`
  width: 20px;
  height: 20px;
  border: 2px solid #ddd;
  border-radius: 4px;
  margin-right: 12px;
  position: relative;
  flex-shrink: 0;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);

  ${Sm}:checked + & {
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

  ${Sm}:checked + &::after {
    opacity: 1;
  }
`;var Em={},P0={},O0={},Ki={};Object.defineProperty(Ki,"__esModule",{value:!0});Ki.Direction=void 0;var vx;(function(e){e.Right="to right",e.Left="to left",e.Down="to bottom",e.Up="to top"})(vx||(Ki.Direction=vx={}));(function(e){var t=ne&&ne.__spreadArray||function(M,j,R){if(R||arguments.length===2)for(var D=0,F=j.length,L;D<F;D++)(L||!(D in j))&&(L||(L=Array.prototype.slice.call(j,0,D)),L[D]=j[D]);return M.concat(L||Array.prototype.slice.call(j))};Object.defineProperty(e,"__esModule",{value:!0}),e.isIOS=e.useThumbOverlap=e.assertUnreachable=e.voidFn=e.getTrackBackground=e.replaceAt=e.schd=e.translate=e.getClosestThumbIndex=e.translateThumbs=e.getPaddingAndBorder=e.getMargin=e.checkInitialOverlap=e.checkValuesAgainstBoundaries=e.checkBoundaries=e.isVertical=e.relativeValue=e.normalizeValue=e.isStepDivisible=e.isTouchEvent=e.getStepDecimals=void 0;var n=x,r=Ki,o=function(M){var j=M.toString().split(".")[1];return j?j.length:0};e.getStepDecimals=o;function i(M){return M.touches&&M.touches.length||M.changedTouches&&M.changedTouches.length}e.isTouchEvent=i;function a(M,j,R){var D=(j-M)/R,F=8,L=Number(D.toFixed(F));return parseInt(L.toString(),10)===L}e.isStepDivisible=a;function l(M,j,R,D,F,L,O){var A=1e11;if(M=Math.round(M*A)/A,!L){var N=O[j-1],B=O[j+1];if(N&&N>M)return N;if(B&&B<M)return B}if(M>D)return D;if(M<R)return R;var z=Math.floor(M*A-R*A)%Math.floor(F*A),V=Math.floor(M*A-Math.abs(z)),U=z===0?M:V/A,G=Math.abs(z/A)<F/2?U:U+F,W=(0,e.getStepDecimals)(F);return parseFloat(G.toFixed(W))}e.normalizeValue=l;function s(M,j,R){return(M-j)/(R-j)}e.relativeValue=s;function c(M){return M===r.Direction.Up||M===r.Direction.Down}e.isVertical=c;function d(M,j,R){if(j>=R)throw new RangeError("min (".concat(j,") is equal/bigger than max (").concat(R,")"));if(M<j)throw new RangeError("value (".concat(M,") is smaller than min (").concat(j,")"));if(M>R)throw new RangeError("value (".concat(M,") is bigger than max (").concat(R,")"))}e.checkBoundaries=d;function f(M,j,R){return M<j?j:M>R?R:M}e.checkValuesAgainstBoundaries=f;function m(M){if(!(M.length<2)&&!M.slice(1).every(function(j,R){return M[R]<=j}))throw new RangeError("values={[".concat(M,"]} needs to be sorted when allowOverlap={false}"))}e.checkInitialOverlap=m;function p(M){var j=window.getComputedStyle(M);return{top:parseInt(j["margin-top"],10),bottom:parseInt(j["margin-bottom"],10),left:parseInt(j["margin-left"],10),right:parseInt(j["margin-right"],10)}}e.getMargin=p;function h(M){var j=window.getComputedStyle(M);return{top:parseInt(j["padding-top"],10)+parseInt(j["border-top-width"],10),bottom:parseInt(j["padding-bottom"],10)+parseInt(j["border-bottom-width"],10),left:parseInt(j["padding-left"],10)+parseInt(j["border-left-width"],10),right:parseInt(j["padding-right"],10)+parseInt(j["border-right-width"],10)}}e.getPaddingAndBorder=h;function y(M,j,R){var D=R?-1:1;M.forEach(function(F,L){return g(F,D*j[L].x,j[L].y)})}e.translateThumbs=y;function b(M,j,R,D){for(var F=0,L=$(M[0],j,R,D),O=1;O<M.length;O++){var A=$(M[O],j,R,D);A<L&&(L=A,F=O)}return F}e.getClosestThumbIndex=b;function g(M,j,R){M.style.transform="translate(".concat(j,"px, ").concat(R,"px)")}e.translate=g;var v=function(M){var j=[],R=null,D=function(){for(var F=[],L=0;L<arguments.length;L++)F[L]=arguments[L];j=F,!R&&(R=requestAnimationFrame(function(){R=null,M.apply(void 0,j)}))};return D};e.schd=v;function w(M,j,R){var D=M.slice(0);return D[j]=R,D}e.replaceAt=w;function E(M){var j=M.values,R=M.colors,D=M.min,F=M.max,L=M.direction,O=L===void 0?r.Direction.Right:L,A=M.rtl,N=A===void 0?!1:A;N&&O===r.Direction.Right?O=r.Direction.Left:N&&r.Direction.Left&&(O=r.Direction.Right);var B=j.slice(0).sort(function(V,U){return V-U}).map(function(V){return(V-D)/(F-D)*100}),z=B.reduce(function(V,U,G){return"".concat(V,", ").concat(R[G]," ").concat(U,"%, ").concat(R[G+1]," ").concat(U,"%")},"");return"linear-gradient(".concat(O,", ").concat(R[0]," 0%").concat(z,", ").concat(R[R.length-1]," 100%)")}e.getTrackBackground=E;function S(){}e.voidFn=S;function P(M){throw new Error("Didn't expect to get here")}e.assertUnreachable=P;var k=function(M,j,R,D,F){F===void 0&&(F=function(O){return O});var L=Math.ceil(t([M],Array.from(M.children),!0).reduce(function(O,A){var N=Math.ceil(A.getBoundingClientRect().width);if(A.innerText&&A.innerText.includes(R)&&A.childElementCount===0){var B=A.cloneNode(!0);B.innerHTML=F(j.toFixed(D)),B.style.visibility="hidden",document.body.appendChild(B),N=Math.ceil(B.getBoundingClientRect().width),document.body.removeChild(B)}return N>O?N:O},M.getBoundingClientRect().width));return L},_=function(M,j,R,D,F,L,O){O===void 0&&(O=function(B){return B});var A=[],N=function(B){var z=k(R[B],D[B],F,L,O),V=j[B].x;j.forEach(function(U,G){var W=U.x,Y=k(R[G],D[G],F,L,O);B!==G&&(V>=W&&V<=W+Y||V+z>=W&&V+z<=W+Y)&&(A.includes(G)||(A.push(B),A.push(G),A=t(t([],A,!0),[B,G],!1),N(G)))})};return N(M),Array.from(new Set(A.sort()))},T=function(M,j,R,D,F,L){D===void 0&&(D=.1),F===void 0&&(F=" - "),L===void 0&&(L=function(G){return G});var O=(0,e.getStepDecimals)(D),A=(0,n.useState)({}),N=A[0],B=A[1],z=(0,n.useState)(L(j[R].toFixed(O))),V=z[0],U=z[1];return(0,n.useEffect)(function(){if(M){var G=M.getThumbs();if(G.length<1)return;var W={},Y=M.getOffsets(),Q=_(R,Y,G,j,F,O,L),ie=L(j[R].toFixed(O));if(Q.length){var re=Q.reduce(function(Pt,Zi,Us,Ji){return Pt.length?t(t([],Pt,!0),[Y[Ji[Us]].x],!1):[Y[Ji[Us]].x]},[]);if(Math.min.apply(Math,re)===Y[R].x){var be=[];Q.forEach(function(Pt){be.push(j[Pt].toFixed(O))}),ie=Array.from(new Set(be.sort(function(Pt,Zi){return parseFloat(Pt)-parseFloat(Zi)}))).map(L).join(F);var Le=Math.min.apply(Math,re),Re=Math.max.apply(Math,re),Ao=G[Q[re.indexOf(Re)]].getBoundingClientRect().width;W.left="".concat(Math.abs(Le-(Re+Ao))/2,"px"),W.transform="translate(-50%, 0)"}else W.visibility="hidden"}U(ie),B(W)}},[M,j]),[V,N]};e.useThumbOverlap=T;function $(M,j,R,D){var F=M.getBoundingClientRect(),L=F.left,O=F.top,A=F.width,N=F.height;return c(D)?Math.abs(R-(O+N/2)):Math.abs(j-(L+A/2))}var I=function(){var M,j=((M=navigator.userAgentData)===null||M===void 0?void 0:M.platform)||navigator.platform;return["iPad Simulator","iPhone Simulator","iPod Simulator","iPad","iPhone","iPod"].includes(j)||navigator.userAgent.includes("Mac")&&"ontouchend"in document};e.isIOS=I})(O0);var Ez=ne&&ne.__extends||function(){var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,o){r.__proto__=o}||function(r,o){for(var i in o)Object.prototype.hasOwnProperty.call(o,i)&&(r[i]=o[i])},e(t,n)};return function(t,n){if(typeof n!="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");e(t,n);function r(){this.constructor=t}t.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}}(),Cz=ne&&ne.__createBinding||(Object.create?function(e,t,n,r){r===void 0&&(r=n);var o=Object.getOwnPropertyDescriptor(t,n);(!o||("get"in o?!t.__esModule:o.writable||o.configurable))&&(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,o)}:function(e,t,n,r){r===void 0&&(r=n),e[r]=t[n]}),_z=ne&&ne.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),kz=ne&&ne.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)n!=="default"&&Object.prototype.hasOwnProperty.call(e,n)&&Cz(t,e,n);return _z(t,e),t},yx=ne&&ne.__spreadArray||function(e,t,n){if(n||arguments.length===2)for(var r=0,o=t.length,i;r<o;r++)(i||!(r in t))&&(i||(i=Array.prototype.slice.call(t,0,r)),i[r]=t[r]);return e.concat(i||Array.prototype.slice.call(t))};Object.defineProperty(P0,"__esModule",{value:!0});var Sl=kz(x),le=O0,Ue=Ki,Pz=["ArrowRight","ArrowUp","k","PageUp"],Oz=["ArrowLeft","ArrowDown","j","PageDown"],Tz=function(e){Ez(t,e);function t(n){var r=e.call(this,n)||this;if(r.trackRef=Sl.createRef(),r.thumbRefs=[],r.state={draggedTrackPos:[-1,-1],draggedThumbIndex:-1,thumbZIndexes:new Array(r.props.values.length).fill(0).map(function(o,i){return i}),isChanged:!1,markOffsets:[]},r.getOffsets=function(){var o=r.props,i=o.direction,a=o.values,l=o.min,s=o.max,c=r.trackRef.current;if(!c)return console.warn("No track element found."),[];var d=c.getBoundingClientRect(),f=(0,le.getPaddingAndBorder)(c);return r.getThumbs().map(function(m,p){var h={x:0,y:0},y=m.getBoundingClientRect(),b=(0,le.getMargin)(m);switch(i){case Ue.Direction.Right:return h.x=(b.left+f.left)*-1,h.y=((y.height-d.height)/2+f.top)*-1,h.x+=d.width*(0,le.relativeValue)(a[p],l,s)-y.width/2,h;case Ue.Direction.Left:return h.x=(b.right+f.right)*-1,h.y=((y.height-d.height)/2+f.top)*-1,h.x+=d.width-d.width*(0,le.relativeValue)(a[p],l,s)-y.width/2,h;case Ue.Direction.Up:return h.x=((y.width-d.width)/2+b.left+f.left)*-1,h.y=-f.left,h.y+=d.height-d.height*(0,le.relativeValue)(a[p],l,s)-y.height/2,h;case Ue.Direction.Down:return h.x=((y.width-d.width)/2+b.left+f.left)*-1,h.y=-f.left,h.y+=d.height*(0,le.relativeValue)(a[p],l,s)-y.height/2,h;default:return(0,le.assertUnreachable)(i)}})},r.getThumbs=function(){return r.trackRef&&r.trackRef.current?Array.from(r.trackRef.current.children).filter(function(o){return o.hasAttribute("aria-valuenow")}):(console.warn("No thumbs found in the track container. Did you forget to pass & spread the `props` param in renderTrack?"),[])},r.getTargetIndex=function(o){return r.getThumbs().findIndex(function(i){return i===o.target||i.contains(o.target)})},r.addTouchEvents=function(o){document.addEventListener("touchmove",r.schdOnTouchMove,{passive:!1}),document.addEventListener("touchend",r.schdOnEnd,{passive:!1}),document.addEventListener("touchcancel",r.schdOnEnd,{passive:!1})},r.addMouseEvents=function(o){document.addEventListener("mousemove",r.schdOnMouseMove),document.addEventListener("mouseup",r.schdOnEnd)},r.onMouseDownTrack=function(o){var i;if(!(o.button!==0||(0,le.isIOS)()))if(o.persist(),o.preventDefault(),r.addMouseEvents(o.nativeEvent),r.props.values.length>1&&r.props.draggableTrack){if(r.thumbRefs.some(function(l){var s;return(s=l.current)===null||s===void 0?void 0:s.contains(o.target)}))return;r.setState({draggedTrackPos:[o.clientX,o.clientY]},function(){return r.onMove(o.clientX,o.clientY)})}else{var a=(0,le.getClosestThumbIndex)(r.thumbRefs.map(function(l){return l.current}),o.clientX,o.clientY,r.props.direction);(i=r.thumbRefs[a].current)===null||i===void 0||i.focus(),r.setState({draggedThumbIndex:a},function(){return r.onMove(o.clientX,o.clientY)})}},r.onResize=function(){(0,le.translateThumbs)(r.getThumbs(),r.getOffsets(),r.props.rtl),r.calculateMarkOffsets()},r.onTouchStartTrack=function(o){var i;if(o.persist(),r.addTouchEvents(o.nativeEvent),r.props.values.length>1&&r.props.draggableTrack){if(r.thumbRefs.some(function(l){var s;return(s=l.current)===null||s===void 0?void 0:s.contains(o.target)}))return;r.setState({draggedTrackPos:[o.touches[0].clientX,o.touches[0].clientY]},function(){return r.onMove(o.touches[0].clientX,o.touches[0].clientY)})}else{var a=(0,le.getClosestThumbIndex)(r.thumbRefs.map(function(l){return l.current}),o.touches[0].clientX,o.touches[0].clientY,r.props.direction);(i=r.thumbRefs[a].current)===null||i===void 0||i.focus(),r.setState({draggedThumbIndex:a},function(){return r.onMove(o.touches[0].clientX,o.touches[0].clientY)})}},r.onMouseOrTouchStart=function(o){if(!r.props.disabled){var i=(0,le.isTouchEvent)(o);if(!(!i&&o.button!==0)){var a=r.getTargetIndex(o);a!==-1&&(i?r.addTouchEvents(o):r.addMouseEvents(o),r.setState({draggedThumbIndex:a,thumbZIndexes:r.state.thumbZIndexes.map(function(l,s){return s===a?Math.max.apply(Math,r.state.thumbZIndexes):l<=r.state.thumbZIndexes[a]?l:l-1})}))}}},r.onMouseMove=function(o){o.preventDefault(),r.onMove(o.clientX,o.clientY)},r.onTouchMove=function(o){o.preventDefault(),r.onMove(o.touches[0].clientX,o.touches[0].clientY)},r.onKeyDown=function(o){var i=r.props,a=i.values,l=i.onChange,s=i.step,c=i.rtl,d=i.direction,f=r.state.isChanged,m=r.getTargetIndex(o.nativeEvent),p=c||d===Ue.Direction.Left||d===Ue.Direction.Down?-1:1;m!==-1&&(Pz.includes(o.key)?(o.preventDefault(),r.setState({draggedThumbIndex:m,isChanged:!0}),l((0,le.replaceAt)(a,m,r.normalizeValue(a[m]+p*(o.key==="PageUp"?s*10:s),m)))):Oz.includes(o.key)?(o.preventDefault(),r.setState({draggedThumbIndex:m,isChanged:!0}),l((0,le.replaceAt)(a,m,r.normalizeValue(a[m]-p*(o.key==="PageDown"?s*10:s),m)))):o.key==="Tab"?r.setState({draggedThumbIndex:-1},function(){f&&r.fireOnFinalChange()}):f&&r.fireOnFinalChange())},r.onKeyUp=function(o){var i=r.state.isChanged;r.setState({draggedThumbIndex:-1},function(){i&&r.fireOnFinalChange()})},r.onMove=function(o,i){var a=r.state,l=a.draggedThumbIndex,s=a.draggedTrackPos,c=r.props,d=c.direction,f=c.min,m=c.max,p=c.onChange,h=c.values,y=c.step,b=c.rtl;if(l===-1&&s[0]===-1&&s[1]===-1)return null;var g=r.trackRef.current;if(!g)return null;var v=g.getBoundingClientRect(),w=(0,le.isVertical)(d)?v.height:v.width;if(s[0]!==-1&&s[1]!==-1){var E=o-s[0],S=i-s[1],P=0;switch(d){case Ue.Direction.Right:case Ue.Direction.Left:P=E/w*(m-f);break;case Ue.Direction.Down:case Ue.Direction.Up:P=S/w*(m-f);break;default:(0,le.assertUnreachable)(d)}if(b&&(P*=-1),Math.abs(P)>=y/2){for(var k=0;k<r.thumbRefs.length;k++){if(h[k]===m&&Math.sign(P)===1||h[k]===f&&Math.sign(P)===-1)return;var _=h[k]+P;_>m?P=m-h[k]:_<f&&(P=f-h[k])}for(var T=h.slice(0),k=0;k<r.thumbRefs.length;k++)T=(0,le.replaceAt)(T,k,r.normalizeValue(h[k]+P,k));r.setState({draggedTrackPos:[o,i]}),p(T)}}else{var $=0;switch(d){case Ue.Direction.Right:$=(o-v.left)/w*(m-f)+f;break;case Ue.Direction.Left:$=(w-(o-v.left))/w*(m-f)+f;break;case Ue.Direction.Down:$=(i-v.top)/w*(m-f)+f;break;case Ue.Direction.Up:$=(w-(i-v.top))/w*(m-f)+f;break;default:(0,le.assertUnreachable)(d)}b&&($=m+f-$),Math.abs(h[l]-$)>=y/2&&p((0,le.replaceAt)(h,l,r.normalizeValue($,l)))}},r.normalizeValue=function(o,i){var a=r.props,l=a.min,s=a.max,c=a.step,d=a.allowOverlap,f=a.values;return(0,le.normalizeValue)(o,i,l,s,c,d,f)},r.onEnd=function(o){if(o.preventDefault(),document.removeEventListener("mousemove",r.schdOnMouseMove),document.removeEventListener("touchmove",r.schdOnTouchMove),document.removeEventListener("mouseup",r.schdOnEnd),document.removeEventListener("touchend",r.schdOnEnd),document.removeEventListener("touchcancel",r.schdOnEnd),r.state.draggedThumbIndex===-1&&r.state.draggedTrackPos[0]===-1&&r.state.draggedTrackPos[1]===-1)return null;r.setState({draggedThumbIndex:-1,draggedTrackPos:[-1,-1]},function(){r.fireOnFinalChange()})},r.fireOnFinalChange=function(){r.setState({isChanged:!1});var o=r.props,i=o.onFinalChange,a=o.values;i&&i(a)},r.updateMarkRefs=function(o){if(!o.renderMark){r.numOfMarks=void 0,r.markRefs=void 0;return}r.numOfMarks=(o.max-o.min)/r.props.step,r.markRefs=[];for(var i=0;i<r.numOfMarks+1;i++)r.markRefs[i]=Sl.createRef()},r.calculateMarkOffsets=function(){if(!(!r.props.renderMark||!r.trackRef||!r.numOfMarks||!r.markRefs||r.trackRef.current===null)){for(var o=window.getComputedStyle(r.trackRef.current),i=parseInt(o.width,10),a=parseInt(o.height,10),l=parseInt(o.paddingLeft,10),s=parseInt(o.paddingTop,10),c=[],d=0;d<r.numOfMarks+1;d++){var f=9999,m=9999;if(r.markRefs[d].current){var p=r.markRefs[d].current.getBoundingClientRect();f=p.height,m=p.width}r.props.direction===Ue.Direction.Left||r.props.direction===Ue.Direction.Right?c.push([Math.round(i/r.numOfMarks*d+l-m/2),-Math.round((f-a)/2)]):c.push([Math.round(a/r.numOfMarks*d+s-f/2),-Math.round((m-i)/2)])}r.setState({markOffsets:c})}},n.step===0)throw new Error('"step" property should be a positive number');return r.schdOnMouseMove=(0,le.schd)(r.onMouseMove),r.schdOnTouchMove=(0,le.schd)(r.onTouchMove),r.schdOnEnd=(0,le.schd)(r.onEnd),r.thumbRefs=n.values.map(function(){return Sl.createRef()}),r.updateMarkRefs(n),r}return t.prototype.componentDidMount=function(){var n=this,r=this.props,o=r.values,i=r.min,a=r.step;this.resizeObserver=window.ResizeObserver?new window.ResizeObserver(this.onResize):{observe:function(){return window.addEventListener("resize",n.onResize)},unobserve:function(){return window.removeEventListener("resize",n.onResize)}},document.addEventListener("touchstart",this.onMouseOrTouchStart,{passive:!1}),document.addEventListener("mousedown",this.onMouseOrTouchStart,{passive:!1}),!this.props.allowOverlap&&(0,le.checkInitialOverlap)(this.props.values),this.props.values.forEach(function(l){return(0,le.checkBoundaries)(l,n.props.min,n.props.max)}),this.resizeObserver.observe(this.trackRef.current),(0,le.translateThumbs)(this.getThumbs(),this.getOffsets(),this.props.rtl),this.calculateMarkOffsets(),o.forEach(function(l){(0,le.isStepDivisible)(i,l,a)||console.warn("The `values` property is in conflict with the current `step`, `min`, and `max` properties. Please provide values that are accessible using the min, max, and step values.")})},t.prototype.componentDidUpdate=function(n,r){var o=this.props,i=o.max,a=o.min,l=o.step,s=o.values,c=o.rtl;(n.max!==i||n.min!==a||n.step!==l)&&this.updateMarkRefs(this.props),(0,le.translateThumbs)(this.getThumbs(),this.getOffsets(),c),(n.max!==i||n.min!==a||n.step!==l||r.markOffsets.length!==this.state.markOffsets.length)&&(this.calculateMarkOffsets(),s.forEach(function(d){(0,le.isStepDivisible)(a,d,l)||console.warn("The `values` property is in conflict with the current `step`, `min`, and `max` properties. Please provide values that are accessible using the min, max, and step values.")}))},t.prototype.componentWillUnmount=function(){var n={passive:!1};document.removeEventListener("mousedown",this.onMouseOrTouchStart,n),document.removeEventListener("mousemove",this.schdOnMouseMove),document.removeEventListener("touchmove",this.schdOnTouchMove),document.removeEventListener("touchstart",this.onMouseOrTouchStart),document.removeEventListener("mouseup",this.schdOnEnd),document.removeEventListener("touchend",this.schdOnEnd),this.resizeObserver.unobserve(this.trackRef.current)},t.prototype.render=function(){var n=this,r=this.props,o=r.label,i=r.labelledBy,a=r.renderTrack,l=r.renderThumb,s=r.renderMark,c=s===void 0?function(){return null}:s,d=r.values,f=r.min,m=r.max,p=r.allowOverlap,h=r.disabled,y=this.state,b=y.draggedThumbIndex,g=y.thumbZIndexes,v=y.markOffsets;return a({props:{style:{transform:"scale(1)",cursor:b>-1?"grabbing":this.props.draggableTrack?(0,le.isVertical)(this.props.direction)?"ns-resize":"ew-resize":d.length===1&&!h?"pointer":"inherit"},onMouseDown:h?le.voidFn:this.onMouseDownTrack,onTouchStart:h?le.voidFn:this.onTouchStartTrack,ref:this.trackRef},isDragged:this.state.draggedThumbIndex>-1,disabled:h,children:yx(yx([],v.map(function(w,E,S){return c({props:{style:n.props.direction===Ue.Direction.Left||n.props.direction===Ue.Direction.Right?{position:"absolute",left:"".concat(w[0],"px"),marginTop:"".concat(w[1],"px")}:{position:"absolute",top:"".concat(w[0],"px"),marginLeft:"".concat(w[1],"px")},key:"mark".concat(E),ref:n.markRefs[E]},index:E})}),!0),d.map(function(w,E){var S=n.state.draggedThumbIndex===E;return l({index:E,value:w,isDragged:S,props:{style:{position:"absolute",zIndex:g[E],cursor:h?"inherit":S?"grabbing":"grab",userSelect:"none",touchAction:"none",WebkitUserSelect:"none",MozUserSelect:"none",msUserSelect:"none"},key:E,tabIndex:h?void 0:0,"aria-valuemax":p?m:d[E+1]||m,"aria-valuemin":p?f:d[E-1]||f,"aria-valuenow":w,draggable:!1,ref:n.thumbRefs[E],"aria-label":o,"aria-labelledby":i,role:"slider",onKeyDown:h?le.voidFn:n.onKeyDown,onKeyUp:h?le.voidFn:n.onKeyUp}})}),!0)})},t.defaultProps={label:"Accessibility label",labelledBy:null,step:1,direction:Ue.Direction.Right,rtl:!1,disabled:!1,allowOverlap:!1,draggableTrack:!1,min:0,max:100},t}(Sl.Component);P0.default=Tz;(function(e){var t=ne&&ne.__importDefault||function(i){return i&&i.__esModule?i:{default:i}};Object.defineProperty(e,"__esModule",{value:!0}),e.checkValuesAgainstBoundaries=e.relativeValue=e.useThumbOverlap=e.Direction=e.getTrackBackground=e.Range=void 0;var n=t(P0);e.Range=n.default;var r=O0;Object.defineProperty(e,"getTrackBackground",{enumerable:!0,get:function(){return r.getTrackBackground}}),Object.defineProperty(e,"useThumbOverlap",{enumerable:!0,get:function(){return r.useThumbOverlap}}),Object.defineProperty(e,"relativeValue",{enumerable:!0,get:function(){return r.relativeValue}}),Object.defineProperty(e,"checkValuesAgainstBoundaries",{enumerable:!0,get:function(){return r.checkValuesAgainstBoundaries}});var o=Ki;Object.defineProperty(e,"Direction",{enumerable:!0,get:function(){return o.Direction}})})(Em);const jz=C.div`
  padding: 20px 0;
`,$z=C.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`,xx=C.input`
  width: 100%;
  padding: 8px 12px;
  border: 1px solid  #85683d;
  border-radius: 6px;
  font-size: 14px;

  &:focus {
    outline: none;
    border-color:  #583d2d;
  }
`;C.span`
  display: flex;
  align-items: center;
  color: #999;
`;const Iz=C.div`
  height: 6px;
  width: 100%;
  border-radius: 4px;
  background: ${({background:e})=>e};
`,Mz=C.div`
  height: 18px;
  width: 18px;
  border-radius: 50%;
  background: #583d2d;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`,V_=({childValues:e,onChange:t})=>{const i=(e==null?void 0:e[0])??10,a=(e==null?void 0:e[1])??1e4,l=i!==a,[s,c]=x.useState([i,a]);x.useEffect(()=>{e&&e.length===2&&(c(e),t&&t(e))},[e,t]);const d=p=>{c(p),t&&t(p)},f=(p,h)=>{const y=h===""?"":Number(h),b=[...s];b[p]=y,d(b)},m=p=>{const h=[...s];p===0?((h[0]===""||h[0]<i)&&(h[0]=i),h[0]>h[1]-50&&(h[0]=h[1]-50)):((h[1]===""||h[1]>a)&&(h[1]=a),h[1]<h[0]+50&&(h[1]=h[0]+50)),d(h)};return u.jsx(u.Fragment,{children:l&&u.jsxs(jz,{children:[u.jsxs($z,{children:[u.jsx(xx,{type:"number",value:s[0],min:i,max:s[1],onChange:p=>f(0,p.target.value),onBlur:()=>m(0)}),u.jsx(xx,{type:"number",value:s[1],min:s[0],max:a,onChange:p=>f(1,p.target.value),onBlur:()=>m(1)})]}),u.jsx(Em.Range,{values:s,step:50,min:i,max:a,onChange:d,renderTrack:({props:p,children:h})=>u.jsx(Iz,{...p,background:Em.getTrackBackground({values:s,colors:["#ddd","#85683d","#ddd"],min:i,max:a}),children:h}),renderThumb:({props:p})=>u.jsx(Mz,{...p})})]})})},Az=({childValues:e,category:t,selectedFilters:n,setSelectedFilters:r,setPriceRange:o})=>{const[i,a]=x.useState([]),[l,s]=x.useState({});x.useEffect(()=>{t&&(async()=>{try{const h=Dd.stringify({populate:{attributes:{populate:{label:{populate:"*"},value:{populate:"*"}}},category:!0},filters:{category:{title:{$eq:t}}},pagination:{pageSize:200}},{encodeValuesOnly:!0}),g=(await(await fetch(`https://backenddidiv-production.up.railway.app/api/products?${h}`)).json()).data||[],v={},w=new Set;g.forEach(S=>{var P;(P=S.attributes)==null||P.forEach(k=>{var $,I,M,j;const _=(($=k.label)==null?void 0:$.label)??((I=k.label)==null?void 0:I.name)??((M=k.label)==null?void 0:M.title),T=(j=k.value)==null?void 0:j.value;!_||!T||(v[_]||(v[_]=new Set),v[_].add(T))}),S.condition&&w.add(S.condition)});const E=Object.entries(v).map(([S,P])=>({type:"checkbox",label:S,name:S.toLowerCase(),options:Array.from(P)}));w.size>0&&E.push({type:"checkbox",label:"Стан",name:"condition",options:Array.from(w)}),a(E),console.log("Fetched filters:",E)}catch(h){console.error(h)}})()},[t]);const c=p=>{s(h=>({...h,[p]:!h[p]}))},d=(p,h)=>{r(y=>{const b=y[p]||[];return b.includes(h)?{...y,[p]:b.filter(g=>g!==h)}:{...y,[p]:[...b,h]}})},f=Object.values(n).some(p=>Array.isArray(p)&&p.length>0),m=()=>{f&&r({})};return u.jsxs(hz,{children:[u.jsxs(mz,{children:["Фільтри ",u.jsx(Y2,{size:20})]}),(i||[]).map(p=>{var y;const h=!!l[p.name];return u.jsxs(gz,{children:[u.jsxs(vz,{onClick:()=>c(p.name),children:[u.jsx(yz,{children:p.label}),u.jsx(xz,{isOpen:h})]}),u.jsxs(bz,{isOpen:h,children:[p.type==="checkbox"&&((y=p.options)==null?void 0:y.map(b=>{var g;return u.jsxs(wz,{children:[u.jsx(Sm,{checked:((g=n[p.name])==null?void 0:g.includes(b))||!1,onChange:()=>d(p.name,b)}),u.jsx(Sz,{}),b]},b)})),p.type==="range"&&u.jsx(V_,{onChange:o,childValues:e})]})]},p.name)}),u.jsx(p_,{onClick:m,disabled:!f,children:"Скинути обрані фільтри"})]})},Dz=C.aside`
  width: 100%;
  max-width: 400px;
  background: #ffffff;
  padding: 20px;
  border-radius: 12px;
  font-size: 20px;
font-family: var(--main-font);
`;C.h3`
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 20px;
  color: #333;
`;const Lz=C.div`
  border-bottom: 1px solid #eee;
  padding: 12px;
  margin-bottom: 12px;

  &:last-child {
    border-bottom: none;
  }
`,Rz=C.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  padding: 8px 0;
  
  &:hover p {
    color: #85683d;
  }
`,Fz=C.p`
  font-weight: 600;
  font-size: 16px;
  margin: 0;
  color: #222;
  transition: color 0.2s;
`,zz=C.span`
  border: solid #555;
  border-width: 0 2px 2px 0;
  display: inline-block;
  padding: 3px;
  transform: ${e=>e.isOpen?"rotate(-135deg)":"rotate(45deg)"};
  transition: transform 0.3s ease;
`,Nz=C.div`
  max-height: ${e=>e.isOpen?"500px":"0"};
  overflow: hidden;
  transition: max-height 0.3s ease-in-out, opacity 0.3s;
  opacity: ${e=>e.isOpen?"1":"0"};
  padding: ${e=>e.isOpen?"12px":"0"};
`,Bz=C.label`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  cursor: pointer;
  font-size: 15px;
  color: #444;

  &:hover span:first-of-type {
    border-color: #85683d;
  }
`,Cm=C.input.attrs({type:"checkbox"})`
  display: none;
`,Vz=C.span`
  width: 20px;
  height: 20px;
  border: 2px solid #ddd;
  border-radius: 4px;
  margin-right: 12px;
  position: relative;
  flex-shrink: 0;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);

  ${Cm}:checked + & {
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

  ${Cm}:checked + &::after {
    opacity: 1;
  }
`,Wz=({childValues:e,category:t,selectedFilters:n,setSelectedFilters:r,setPriceRange:o})=>{const[i,a]=x.useState({}),[l,s]=x.useState([]);x.useEffect(()=>{t&&(async()=>{try{const m=Dd.stringify({populate:{attributes:{populate:{label:{populate:"*"},value:{populate:"*"}}},category:!0},filters:{category:{title:{$eq:t}}},pagination:{pageSize:200}},{encodeValuesOnly:!0}),y=(await(await fetch(`https://backenddidiv-production.up.railway.app/api/products?${m}`)).json()).data||[],b={},g=new Set;y.forEach(w=>{var E;(E=w.attributes)==null||E.forEach(S=>{var _,T,$,I;const P=((_=S.label)==null?void 0:_.label)??((T=S.label)==null?void 0:T.name)??(($=S.label)==null?void 0:$.title),k=(I=S.value)==null?void 0:I.value;!P||!k||(b[P]||(b[P]=new Set),b[P].add(k))}),w.condition&&g.add(w.condition)});const v=Object.entries(b).map(([w,E])=>({type:"checkbox",label:w,name:w.toLowerCase(),options:Array.from(E)}));g.size>0&&v.push({type:"checkbox",label:"Стан",name:"condition",options:Array.from(g)}),s(v)}catch(m){console.error(m)}})()},[t]);const c=f=>{a(m=>({...m,[f]:!m[f]}))},d=(f,m)=>{r(p=>{const h=p[f]||[];return h.includes(m)?{...p,[f]:h.filter(y=>y!==m)}:{...p,[f]:[...h,m]}})};return u.jsx(Dz,{children:(l||[]).map(f=>{var p;const m=!!i[f.name];return u.jsxs(Lz,{children:[u.jsxs(Rz,{onClick:()=>c(f.name),children:[u.jsx(Fz,{children:f.label}),u.jsx(zz,{isOpen:m})]}),u.jsxs(Nz,{isOpen:m,children:[f.type==="checkbox"&&((p=f.options)==null?void 0:p.map(h=>{var y;return u.jsxs(Bz,{children:[u.jsx(Cm,{checked:((y=n[f.name])==null?void 0:y.includes(h))||!1,onChange:()=>d(f.name,h)}),u.jsx(Vz,{}),h]},h)})),f.type==="range"&&u.jsx(V_,{onChange:o,childValues:e})]})]},f.name)})})},Uz=({setValues:e,category:t,selectedFilters:n={},priceRange:r,sortType:o,setIsSortOpen:i,isSortOpen:a,setSortType:l,sortOrder:s,setSortOrder:c})=>{const[d,f]=x.useState([]),[m,p]=x.useState(!0),[h,y]=x.useState(1),b=24;let g=d;const v=x.useRef(null);x.useEffect(()=>{const j=R=>{v.current&&!v.current.contains(R.target)&&i(!1)};return document.addEventListener("mousedown",j),()=>{document.removeEventListener("mousedown",j)}},[i]),x.useEffect(()=>{(async()=>{try{p(!0);const R=Dd.stringify({populate:{attributes:{populate:{label:{populate:"*"},value:{populate:"*"}}},category:!0,images:!0},filters:{category:{title:{$eq:t}}},pagination:{pageSize:500}},{encodeValuesOnly:!0}),F=await(await fetch(`https://backenddidiv-production.up.railway.app/api/products?${R}`)).json();f(F.data);const L=Date.now(),O=7*24*60*60*1e3,A=F.data.filter(B=>{if(B.stock>0||!B.sold_date)return!0;const z=new Date(B.sold_date).getTime();return L-z<O});f(A);const N=F.data.map(B=>B.price);if(N.length>0){let B=Math.min(...N),z=Math.max(...N);e([B,z])}}catch(R){console.error("Error fetching products:",R)}finally{p(!1)}})()},[t,e]),x.useEffect(()=>{y(1)},[t,n,r]),x.useEffect(()=>{window.scrollTo({top:0,behavior:"smooth"})},[h]);const w=et(),E=Lt(),S=Ye(j=>j.favorites.items),P=Ye(j=>j.cart.items),k=(j,R)=>{R.stopPropagation();const D=S.some(F=>F.id===(j==null?void 0:j.id));jo(j,D,E,K)};Object.keys(n).forEach(j=>{const R=n[j];Array.isArray(R)&&R.length>0&&(g=g.filter(D=>{var F;return j==="condition"?R.includes(D.condition):(F=D.attributes)==null?void 0:F.some(L=>{var N,B,z,V,U;const O=(((N=L.label)==null?void 0:N.label)??((B=L.label)==null?void 0:B.name)??((z=L.label)==null?void 0:z.title)??((V=L.label)==null?void 0:V.value)??"").toString().toLowerCase(),A=(U=L.value)==null?void 0:U.value;return O===j.toLowerCase()&&R.includes(A)})}))}),r&&r.length;const _=x.useMemo(()=>{const j=[...g],R=D=>D.new_price&&D.new_price<D.price?D.new_price:D.price;switch(o){case"name":return j.sort((D,F)=>s==="asc"?D.name.localeCompare(F.name):F.name.localeCompare(D.name));case"price":return j.sort((D,F)=>{const L=R(D),O=R(F);return s==="asc"?L-O:O-L});case"date":return j.sort((D,F)=>s==="asc"?new Date(D.createdAt)-new Date(F.createdAt):new Date(F.createdAt)-new Date(D.createdAt));default:return j}},[o,g,s]),T=h*b,$=T-b,I=_.slice($,T),M=Math.ceil(g.length/b);return m?u.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"100vw",height:"100vh"},children:u.jsx($o,{height:100,width:100,radius:5,color:"var(--orange-color)",ariaLabel:"ball-triangle-loading",wrapperStyle:{},wrapperClass:"",visible:!0})}):u.jsxs(z5,{children:[u.jsxs(N5,{children:[u.jsx(B5,{children:t}),u.jsxs(X5,{ref:v,children:[u.jsxs(K5,{onClick:()=>i(j=>!j),children:["Сортування",u.jsx(Wu,{strokeWidth:.9,size:22})]}),a&&u.jsxs(Q5,{children:[u.jsx(zo,{onClick:()=>{l("name"),c("asc"),i(!1)},children:"А-Я"}),u.jsx(zo,{onClick:()=>{l("name"),c("desc"),i(!1)},children:"Я-А"}),u.jsx(zo,{onClick:()=>{l("price"),c("asc"),i(!1)},children:"Ціна ↑"}),u.jsx(zo,{onClick:()=>{l("price"),c("desc"),i(!1)},children:"Ціна ↓"}),u.jsx(zo,{onClick:()=>{l("date"),c("desc"),i(!1)},children:"Спочатку новіші"}),u.jsx(zo,{onClick:()=>{l("date"),c("asc"),i(!1)},children:"Спочатку старіші"})]})]})]}),u.jsx(Un,{autoClose:1500}),g.length===0?u.jsx(V5,{children:u.jsx("p",{style:{textAlign:"center",fontSize:"30px",marginTop:"50px",marginLeft:"auto",marginRight:"auto"},children:"Нічого не знайдено 😢"})}):u.jsx(W5,{children:I.map(j=>{var G,W,Y;const R=S.some(Q=>Q.id===j.id),D=j!=null&&j.createdAt?Date.now()-new Date(j.createdAt).getTime()<7*24*60*60*1e3:!1,F=P.find(Q=>Q.id===j.id),L=(j==null?void 0:j.available)??!0,O=(j==null?void 0:j.stock)===0,A=j.new_price&&j.new_price<j.price,N=A?j.new_price:j.price,B=A?Math.round((j.price-j.new_price)/j.price*100):0,z=j?P.find(Q=>Q.id===j.id):null,V=(z==null?void 0:z.quantity)||0,U=async(Q,ie)=>{if(ie.stopPropagation(),V>=Q.stock){K.warning("Товар вже в кошику (досягнуто максимум)");return}if(V+1>Q.stock){K.warning(`Доступно лише ${Q.stock} шт.`);return}await Hi(Q,1,E,K)};return u.jsxs(U5,{onClick:()=>w(`/product/${j.slug??j.id}`),$soldOut:O,style:{cursor:"pointer"},children:[u.jsxs(oE,{children:[D&&u.jsx(Kg,{children:"Новинка"}),!L&&u.jsx(Xg,{children:"Бронь"}),O&&u.jsx(Yu,{children:"Продано"}),u.jsx(H5,{src:((W=(G=j.images)==null?void 0:G[0])==null?void 0:W.url)||"/placeholder.jpg",alt:j.name,onError:Q=>{Q.currentTarget.onerror=null,Q.currentTarget.src=ur}})]}),u.jsx(q5,{children:j.name}),u.jsxs(G5,{children:[u.jsx(aE,{children:u.jsxs(sE,{children:[u.jsxs(lE,{$discount:A,children:[N==null?void 0:N.toLocaleString()," грн"]}),A&&u.jsxs(cE,{children:[(Y=j.price)==null?void 0:Y.toLocaleString()," грн"]}),A&&u.jsxs(uE,{children:["-",B,"%"]})]})}),u.jsxs(iE,{children:[L&&!O&&u.jsx(Uc,{onClick:Q=>U(j,Q),children:u.jsx(Ui,{size:24,color:F?"var(--orange-color)":"black",strokeWidth:2})}),!O&&u.jsx(Uc,{onClick:Q=>k(j,Q),children:u.jsx(Is,{size:24,fill:R?"#ff4d4f":"none",color:R?"#ff4d4f":"#000000",strokeWidth:R?1:2})})]})]})]},j.id)})}),g.length>b&&u.jsxs(Y5,{children:[u.jsx(Ff,{onClick:()=>y(j=>Math.max(j-1,1)),disabled:h===1,children:"Назад"}),Array.from({length:M},(j,R)=>u.jsx(Ff,{onClick:()=>y(R+1),active:h===R+1,children:R+1},R)),u.jsx(Ff,{onClick:()=>y(j=>Math.min(j+1,M)),disabled:h===M,children:"Вперед"})]})]})},Hz=()=>{const[e,t]=x.useState({}),{category:n}=cw(),[r,o]=x.useState(!1),[i,a]=x.useState(!1),[l,s]=x.useState("date"),[c,d]=x.useState("desc");console.log(e,"selectedFilters");const[f,m]=x.useState([]),[p,h]=x.useState([0,0]),y=Object.values(e).some(g=>Array.isArray(g)&&g.length>0),b=()=>{y&&t({})};return u.jsxs(ZL,{children:[u.jsxs(QL,{children:[u.jsxs(JL,{children:[u.jsxs(e8,{onClick:()=>o(!0),children:["Фільтр",u.jsx(t8,{children:u.jsx("use",{href:`${xn}#icon-filter`})})]}),u.jsxs(l8,{children:[u.jsxs(n8,{onClick:()=>a(g=>!g),children:["Сортування",u.jsx(Wu,{strokeWidth:.9,size:22})]}),i&&u.jsxs(c8,{children:[u.jsx(Bo,{onClick:()=>{s("name"),d("asc"),a(!1)},children:"А-Я"}),u.jsx(Bo,{onClick:()=>{s("name"),d("desc"),a(!1)},children:"Я-А"}),u.jsx(Bo,{onClick:()=>{s("price"),d("asc"),a(!1)},children:"Ціна ↑"}),u.jsx(Bo,{onClick:()=>{s("price"),d("desc"),a(!1)},children:"Ціна ↓"}),u.jsx(Bo,{onClick:()=>{s("date"),d("desc"),a(!1)},children:"Спочатку новіші"}),u.jsx(Bo,{onClick:()=>{s("date"),d("asc"),a(!1)},children:"Спочатку старіші"})]})]})]}),u.jsx(Az,{category:n,selectedFilters:e,setSelectedFilters:t,childValues:f,priceRange:p,setPriceRange:h}),u.jsx(Uz,{priceRange:p,values:f,setValues:m,category:n,selectedFilters:e,sortType:l,setIsSortOpen:a,isSortOpen:i,setSortType:s,sortOrder:c,setSortOrder:d}),r&&u.jsx(r8,{onClick:()=>o(!1),open:r,children:u.jsxs(o8,{onClick:g=>g.stopPropagation(),open:r,children:[u.jsxs(i8,{children:[u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[u.jsx(Y2,{size:20}),u.jsx("h2",{children:"Фільтри"})]}),u.jsx(K2,{size:24,onClick:()=>o(!1),style:{cursor:"pointer"}})]}),u.jsx(Wz,{childValues:f,category:n,selectedFilters:e,setSelectedFilters:t,priceRange:p,setPriceRange:h}),u.jsxs(a8,{children:[u.jsx(p_,{onClick:b,disabled:!y,children:"Скинути обрані фільтри"}),u.jsx(s8,{onClick:()=>o(!1),children:"Показати результати"})]})]})})]})," "]})},bx=C.div`
  width: 100%;
  max-width: 750px;
  margin: 0 auto;
  padding: 20px;
    padding-left: 10px;
  padding-right: 10px;
  font-family: var(--main-font);
  @media screen and (min-width: 768px) {
    max-width: 994px;
    padding-left: 30px;
    padding-right: 30px;
  }
  @media screen and (min-width: 1200px) {
    max-width: 1448px;
    
  }
`,Gz=C.div`
  font-family: var(--main-font);
  font-size: 14px;
  color: #8c8c8c;
  margin-bottom: 15px;

  a {
    text-decoration: none;
    color: inherit;
  }
`,qz=C.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,Yz=C.div``,Xz=C.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;

  padding: 10px 20px;
  border-radius: 6px;

  background: rgba(0, 0, 0, 0.75);
  color: #fff;

  font-size: 20px;
  font-weight: 700;
  text-transform: uppercase;
  white-space: nowrap;
`;C.div`
  position: absolute;
  top: 10px;
  left: 10px;
  background: #27ae60;
  color: white;
  padding: 5px 15px;
  font-weight: bold;
  z-index: 2;
`;const Kz=C.img`
  width: 100%;
  border-radius: 4px;
  background: #f9f9f9;
   @media screen and (max-width: 300px) {
   width: 260px;
  }
`,Qz=C.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
      flex-wrap: wrap;
`,Zz=C.img`
  width: 60px;
  height: 60px;
  border: 1px solid #ddd;
  cursor: pointer;
  object-fit: cover;
`,Jz=C.div``,eN=C.h1`
  font-size: 28px;
  margin-bottom: 10px;
  color: #333;
  font-family: var(--second-font);
  font-weight: 500;
`,tN=C.p`
   font-size: 17px;
  margin-bottom: 10px;
  color: #151414;
    font-family: var(--second-font);

`,nN=C.div`

  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 20px;
`,rN=C.div`
  display: flex;
  align-items: center;
  gap: 15px;
  
    width: max-content;

  margin-bottom: 20px;
  padding: 6px 15px;
  border-radius: 20px;
font-family: var(--second-font);
  background: var(--red-color);
  box-shadow: 0 6px 6px -4px rgba(0, 0, 0, 0.35);
  color: #fff;
  font-size: 20px;
  font-weight: 400;
  text-transform: uppercase;

`,oN=C.span`
  color: #27ae60;
  font-size: 17px;
`,iN=C.div`
  background: #fdfdfd;
  border: 1px solid #eee;
  padding: 25px;
  border-radius: 8px;
   @media screen and (max-width: 300px) {
   width: 260px;
  }
`,aN=C.div`
  font-family: var(--second-font);
  font-weight: 500;
  display: flex;
  align-items: baseline;
  gap: 15px;
  margin-bottom: 20px;
`,wx=C.span`
  font-size: 32px;
  font-weight: 700;
    color: ${({$discount:e})=>e?"var(--red-color)":"#111"};
`,sN=C.span`
  font-size: 14px;
  text-decoration: line-through;
  color: #999;
`,lN=C.span`
  background:var(--red-color);
  color: white;
  font-size: 12px;
  padding: 2px 6px;
  border-radius: 6px;
`,cN=C.div`
  display: flex;
  gap: 15px;
  margin-bottom: 15px;
  font-family: var(--second-font);
  font-weight: 500;
`,uN=C.div`
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
`,dN=C.button`
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
    &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    pointer-events: none;
  }
`;C.div`
  margin-top: 30px;
`;C.p`
  font-weight: bold;
  margin-bottom: 10px;
`;C.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;C.div`
  padding: 8px 15px;
  border: 1px solid ${e=>e.active?"#27ae60":"#ddd"};
  border-radius: 4px;
  font-size: 13px;
  cursor: pointer;
  background: ${e=>e.active?"#f0fff4":"white"};
`;const Sx=C.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  /* max-width: 800px; */
   @media (min-width: 767px) {
    padding-top:18px;
  }
`,fN=C.h3`
font-family: var(--second-font);
      border-bottom: 2px solid #717171;
    border-bottom: 2px solid var(--second-color);
    color: var(--second-color);
      padding: 10px 0;
`,Ex=C.div`
font-family: var(--second-font);
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #eee;
  padding-bottom: 6px;

  span {
    color: #777;
  }

  b {
    color: #222;
    font-weight: 400;
  }
`;C.div`
  margin: 20px 0;
  font-size: 14px;
  color: #444;
`;const pN=C.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  align-items: start;

  @media (max-width: 767px) {
    display: block;
  }
`,Cx=C.div`
  font-family: var(--second-font);
  font-weight: 500;
  margin-top: 20px;
`,_x=C.div`
  display: flex;
  gap: 30px;
  border-bottom: 1px solid #ccc;
`,ga=C.button`
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
`,kx=C.div`
  font-family: var(--second-font);
  font-weight: 500;
  padding: 15px;
  background: #fff;
`,Px=C.p`
  font-size: 20px;
  font-family: var(--second-font);
  font-weight: 300;
`,hN=C.button`
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
 &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
 
&:not(:disabled):hover {
  border-color: #bbb;
}
`,mN=C.svg`
  width: 20px;
  height: 20px;

  fill: ${({$active:e})=>e?"white":" var(--black-color)"};
`,W_=C.span`

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
`,gN=C.div`
  position: relative;
  display: inline-block;

  &:hover ${W_} {
  opacity: ${({$active:e})=>e?1:0};
    transform: translateX(-50%) translateY(0);
  }
`,U_="carousel",H_="controller",vN="navigation",yN="no-scroll",T0="portal",xN="root",G_="toolbar",Ox="zoom",wp="loading",Sp="error",Ep="complete",bN="placeholder",wN=e=>`active-slide-${e}`,SN="fullsize",j0="flex_center",EN="no_scroll",q_="no_scroll_padding",$0="slide",Y_="slide_wrapper",CN="slide_wrapper_interactive",ro="prev",oo="next",Tx="swipe",Di="close",X_="onPointerDown",K_="onPointerMove",Q_="onPointerUp",Z_="onPointerLeave",J_="onPointerCancel",I0="onKeyDown",_N="onKeyUp",M0="onWheel",kN="Escape",PN="ArrowLeft",ON="ArrowRight",TN="button",_m="icon",ek="contain",jx="cover",tk="Unknown action type",nk="yarl__";function Nn(...e){return e.filter(Boolean).join(" ")}function ce(e){return`${nk}${e}`}function Tt(e){return`--${nk}${e}`}function Ws(e,t){return`${e}${t?`_${t}`:""}`}function A0(e){return t=>Ws(e,t)}function Li(e,t){var n;return(n=e==null?void 0:e[t])!==null&&n!==void 0?n:t}function jN(e,t,n){return Li(e,"{index} of {total}").replace(/\{index}/g,`${z0(n,t.length)+1}`).replace(/\{total}/g,`${t.length}`)}function D0(...e){return()=>{e.forEach(t=>{t()})}}function mr(e,t,n){return()=>{const r=x.useContext(n);if(!r)throw new Error(`${e} must be used within a ${t}.Provider`);return r}}function L0(){return typeof window<"u"}function R0(e,t=0){const n=10**t;return Math.round((e+Number.EPSILON)*n)/n}function Qi(e){return e.type===void 0||e.type==="image"}function F0(e,t){return e.imageFit===jx||e.imageFit!==ek&&t===jx}function Ld(e){return typeof e=="string"?Number.parseInt(e,10):e}function uu(e){if(typeof e=="number")return{pixel:e};if(typeof e=="string"){const t=Ld(e);return e.endsWith("%")?{percent:t}:{pixel:t}}return{pixel:0}}function $N(e,t){const n=uu(t),r=n.percent!==void 0?e.width/100*n.percent:n.pixel;return{width:Math.max(e.width-2*r,0),height:Math.max(e.height-2*r,0)}}function IN(){return(L0()?window==null?void 0:window.devicePixelRatio:void 0)||1}function z0(e,t){return t>0?(e%t+t)%t:0}function rk(e){return e.length>0}function ok(e,t){return e[z0(t,e.length)]}function km(e,t){return rk(e)?ok(e,t):void 0}function MN(e){return Qi(e)?e.src:void 0}function AN(e,t,n){if(!n)return e;const{buttons:r,...o}=e,i=r.findIndex(l=>l===t),a=x.isValidElement(n)?x.cloneElement(n,{key:t},null):n;if(i>=0){const l=[...r];return l.splice(i,1,a),{buttons:l,...o}}return{buttons:[a,...r],...o}}function DN(e,t,n=0){return Math.min(e.preload,Math.max(e.finite?t.length-1:Math.floor(t.length/2),n))}const LN=Number(x.version.split(".")[0])>=19;function RN(e){return{inert:LN?e:e?"":void 0}}function FN(e){e.scrollTop}const Pm={open:!1,close:()=>{},index:0,slides:[],render:{},plugins:[],toolbar:{buttons:[Di]},labels:{},animation:{fade:250,swipe:500,easing:{fade:"ease",swipe:"ease-out",navigation:"ease-in-out"}},carousel:{finite:!1,preload:2,padding:"16px",spacing:"30%",imageFit:ek,imageProps:{}},controller:{ref:null,focus:!0,aria:!1,touchAction:"none",closeOnPullUp:!1,closeOnPullDown:!1,closeOnBackdropClick:!1,preventDefaultWheelX:!0,preventDefaultWheelY:!1,disableSwipeNavigation:!1},portal:{},noScroll:{disabled:!1},on:{},styles:{},className:""};function Yr(e,t){return{name:e,component:t}}function Ke(e,t){return{module:e,children:t}}function ik(e,t,n){return e.module.name===t?n(e):e.children?[Ke(e.module,e.children.flatMap(r=>{var o;return(o=ik(r,t,n))!==null&&o!==void 0?o:[]}))]:[e]}function Uo(e,t,n){return e.flatMap(r=>{var o;return(o=ik(r,t,n))!==null&&o!==void 0?o:[]})}function zN(e,t=[],n=[]){let r=e;const o=p=>{const h=[...r];for(;h.length>0;){const y=h.pop();if((y==null?void 0:y.module.name)===p)return!0;y!=null&&y.children&&h.push(...y.children)}return!1},i=(p,h)=>{if(p===""){r=[Ke(h,r)];return}r=Uo(r,p,y=>[Ke(h,[y])])},a=(p,h)=>{r=Uo(r,p,y=>[Ke(y.module,[Ke(h,y.children)])])},l=(p,h,y)=>{r=Uo(r,p,b=>{var g;return[Ke(b.module,[...y?[Ke(h)]:[],...(g=b.children)!==null&&g!==void 0?g:[],...y?[]:[Ke(h)]])]})},s=(p,h,y)=>{r=Uo(r,p,b=>[...y?[Ke(h)]:[],b,...y?[]:[Ke(h)]])},c=p=>{a(H_,p)},d=(p,h)=>{r=Uo(r,p,y=>[Ke(h,y.children)])},f=p=>{r=Uo(r,p,h=>h.children)},m=p=>{n.push(p)};return t.forEach(p=>{p({contains:o,addParent:i,append:a,addChild:l,addSibling:s,addModule:c,replace:d,remove:f,augment:m})}),{config:r,augmentation:p=>n.reduce((h,y)=>y(h),p)}}const ak=x.createContext(null),sk=mr("useA11yContext","A11yContext",ak);function NN({children:e}){const[t,n]=x.useState(!1),[r,o]=x.useState(!1),i=x.useMemo(()=>({focusWithin:t,trackFocusWithin:(l,s)=>{const c=d=>f=>{var m;f.currentTarget.contains(f.relatedTarget)||n(d),(m=d?l:s)===null||m===void 0||m(f)};return{onFocus:c(!0),onBlur:c(!1)}},autoPlaying:r,setAutoPlaying:o}),[t,r]);return x.createElement(ak.Provider,{value:i},e)}const lk=x.createContext(null),Rd=mr("useDocument","DocumentContext",lk);function BN({nodeRef:e,children:t}){const n=x.useMemo(()=>{const r=i=>{var a;return((a=i||e.current)===null||a===void 0?void 0:a.ownerDocument)||document};return{getOwnerDocument:r,getOwnerWindow:i=>{var a;return((a=r(i))===null||a===void 0?void 0:a.defaultView)||window}}},[e]);return x.createElement(lk.Provider,{value:n},t)}const ck=x.createContext(null),Fd=mr("useEvents","EventsContext",ck);function VN({children:e}){const[t]=x.useState({});x.useEffect(()=>()=>{Object.keys(t).forEach(r=>delete t[r])},[t]);const n=x.useMemo(()=>{const r=(a,l)=>{var s;(s=t[a])===null||s===void 0||s.splice(0,t[a].length,...t[a].filter(c=>c!==l))};return{publish:(...[a,l])=>{var s;(s=t[a])===null||s===void 0||s.forEach(c=>c(l))},subscribe:(a,l)=>(t[a]||(t[a]=[]),t[a].push(l),()=>r(a,l)),unsubscribe:r}},[t]);return x.createElement(ck.Provider,{value:n},e)}const uk=x.createContext(null),an=mr("useLightboxProps","LightboxPropsContext",uk);function WN({children:e,...t}){return x.createElement(uk.Provider,{value:t},e)}const dk=x.createContext(null),Xr=mr("useLightboxState","LightboxStateContext",dk),fk=x.createContext(null),UN=mr("useLightboxDispatch","LightboxDispatchContext",fk);function HN(e,t){switch(t.type){case"swipe":{const{slides:n}=e,r=(t==null?void 0:t.increment)||0,o=e.globalIndex+r,i=z0(o,n.length),a=km(n,i),l=r||t.duration!==void 0?{increment:r,duration:t.duration,easing:t.easing}:void 0;return{slides:n,currentIndex:i,globalIndex:o,currentSlide:a,animation:l}}case"update":return t.slides!==e.slides||t.index!==e.currentIndex?{slides:t.slides,currentIndex:t.index,globalIndex:t.index,currentSlide:km(t.slides,t.index)}:e;default:throw new Error(tk)}}function GN({slides:e,index:t,children:n}){const[r,o]=x.useReducer(HN,{slides:e,currentIndex:t,globalIndex:t,currentSlide:km(e,t)}),[i,a]=x.useState(e),[l,s]=x.useState(t);(e!==i||t!==l)&&(a(e),s(t),o({type:"update",slides:e,index:t}));const c=x.useMemo(()=>({...r,state:r,dispatch:o}),[r,o]);return x.createElement(fk.Provider,{value:o},x.createElement(dk.Provider,{value:c},n))}const pk=x.createContext(null),zd=mr("useTimeouts","TimeoutsContext",pk);function qN({children:e}){const[t]=x.useState([]);x.useEffect(()=>()=>{t.forEach(r=>window.clearTimeout(r)),t.splice(0,t.length)},[t]);const n=x.useMemo(()=>{const r=a=>{t.splice(0,t.length,...t.filter(l=>l!==a))};return{setTimeout:(a,l)=>{const s=window.setTimeout(()=>{r(s),a()},l);return t.push(s),s},clearTimeout:a=>{a!==void 0&&(r(a),window.clearTimeout(a))}}},[t]);return x.createElement(pk.Provider,{value:n},e)}const N0=x.forwardRef(function({label:t,className:n,icon:r,renderIcon:o,onClick:i,style:a,...l},s){const{styles:c,labels:d}=an(),f=Li(d,t);return x.createElement("button",{ref:s,type:"button",title:f,"aria-label":f,className:Nn(ce(TN),n),onClick:i,style:{...a,...c.button},...l},o?o():x.createElement(r,{className:ce(_m),style:c.icon}))});function YN(e,t){const n=r=>x.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24","aria-hidden":"true",focusable:"false",...r},t);return n.displayName=e,n}function Mo(e,t){return YN(e,x.createElement("g",{fill:"currentColor"},x.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),t))}const XN=Mo("Close",x.createElement("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"})),KN=Mo("Previous",x.createElement("path",{d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"})),QN=Mo("Next",x.createElement("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"})),ZN=Mo("Loading",x.createElement(x.Fragment,null,Array.from({length:8}).map((e,t,n)=>x.createElement("line",{key:t,x1:"12",y1:"6.5",x2:"12",y2:"1.8",strokeLinecap:"round",strokeWidth:"2.6",stroke:"currentColor",strokeOpacity:1/n.length*(t+1),transform:`rotate(${360/n.length*t}, 12, 12)`})))),JN=Mo("Error",x.createElement("path",{d:"M21.9,21.9l-8.49-8.49l0,0L3.59,3.59l0,0L2.1,2.1L0.69,3.51L3,5.83V19c0,1.1,0.9,2,2,2h13.17l2.31,2.31L21.9,21.9z M5,18 l3.5-4.5l2.5,3.01L12.17,15l3,3H5z M21,18.17L5.83,3H19c1.1,0,2,0.9,2,2V18.17z"})),Bn=L0()?x.useLayoutEffect:x.useEffect;function B0(){const[e,t]=x.useState(!1);return x.useEffect(()=>{var n,r;const o=(n=window.matchMedia)===null||n===void 0?void 0:n.call(window,"(prefers-reduced-motion: reduce)");t(o==null?void 0:o.matches);const i=a=>t(a.matches);return(r=o==null?void 0:o.addEventListener)===null||r===void 0||r.call(o,"change",i),()=>{var a;return(a=o==null?void 0:o.removeEventListener)===null||a===void 0?void 0:a.call(o,"change",i)}},[]),e}function e7(e){let t=0,n=0,r=0;const i=window.getComputedStyle(e).transform.match(/matrix.*\((.+)\)/);if(i){const a=i[1].split(",").map(Ld);a.length===6?(t=a[4],n=a[5]):a.length===16&&(t=a[12],n=a[13],r=a[14])}return{x:t,y:n,z:r}}function $x(e,t){const n=x.useRef(void 0),r=x.useRef(void 0),o=B0();return Bn(()=>{var i,a,l;if(e.current&&n.current!==void 0&&!o){const{keyframes:s,duration:c,easing:d,onfinish:f}=t(n.current,e.current.getBoundingClientRect(),e7(e.current))||{};if(s&&c){(i=r.current)===null||i===void 0||i.cancel(),r.current=void 0;try{r.current=(l=(a=e.current).animate)===null||l===void 0?void 0:l.call(a,s,{duration:c,easing:d})}catch(m){console.error(m)}r.current&&(r.current.onfinish=()=>{r.current=void 0,f==null||f()})}}n.current=void 0}),{prepareAnimation:i=>{n.current=i},isAnimationPlaying:()=>{var i;return((i=r.current)===null||i===void 0?void 0:i.playState)==="running"}}}function hk(){const e=x.useRef(null),t=x.useRef(void 0),[n,r]=x.useState();return{setContainerRef:x.useCallback(i=>{e.current=i,t.current&&(t.current.disconnect(),t.current=void 0);const a=()=>{if(i){const l=window.getComputedStyle(i),s=c=>parseFloat(c)||0;r({width:Math.round(i.clientWidth-s(l.paddingLeft)-s(l.paddingRight)),height:Math.round(i.clientHeight-s(l.paddingTop)-s(l.paddingBottom))})}else r(void 0)};a(),i&&typeof ResizeObserver<"u"&&(t.current=new ResizeObserver(a),t.current.observe(i))},[]),containerRef:e,containerRect:n}}function lc(){const e=x.useRef(void 0),{setTimeout:t,clearTimeout:n}=zd();return x.useCallback((r,o)=>{n(e.current),e.current=t(r,o>0?o:0)},[t,n])}function ve(e){const t=x.useRef(e);return Bn(()=>{t.current=e}),x.useCallback((...n)=>{var r;return(r=t.current)===null||r===void 0?void 0:r.call(t,...n)},[])}function Ix(e,t){typeof e=="function"?e(t):e&&(e.current=t)}function Om(e,t){return x.useMemo(()=>e==null&&t==null?null:n=>{Ix(e,n),Ix(t,n)},[e,t])}function t7(e,t=!1){const n=x.useRef(!1);Bn(()=>{t&&n.current&&(n.current=!1,e())},[t,e]);const r=x.useCallback(()=>{n.current=!0},[]),o=x.useCallback(()=>{n.current=!1},[]);return{onFocus:r,onBlur:o}}function V0(){const[e,t]=x.useState(!1);return Bn(()=>{t(window.getComputedStyle(window.document.documentElement).direction==="rtl")},[]),e}function n7(){const[e]=x.useState({}),t=x.useCallback((o,i)=>{var a;(a=e[o])===null||a===void 0||a.forEach(l=>{i.isPropagationStopped()||l(i)})},[e]),n=x.useMemo(()=>({onPointerDown:o=>t(X_,o),onPointerMove:o=>t(K_,o),onPointerUp:o=>t(Q_,o),onPointerLeave:o=>t(Z_,o),onPointerCancel:o=>t(J_,o),onKeyDown:o=>t(I0,o),onKeyUp:o=>t(_N,o),onWheel:o=>t(M0,o)}),[t]),r=x.useCallback((o,i)=>(e[o]||(e[o]=[]),e[o].unshift(i),()=>{const a=e[o];a&&a.splice(0,a.length,...a.filter(l=>l!==i))}),[e]);return{registerSensors:n,subscribeSensors:r}}function Mx(e,t){const n=x.useRef(0),r=lc(),o=ve((...i)=>{n.current=Date.now(),e(i)});return x.useCallback((...i)=>{r(()=>{o(i)},t-(Date.now()-n.current))},[t,o,r])}const Cp=A0("slide"),_p=A0("slide_image");function du({slide:e,offset:t,render:n,rect:r,imageFit:o,imageProps:i,onClick:a,onLoad:l,onError:s,style:c}){var d,f,m,p,h,y,b,g;const[v,w]=x.useState(wp),{publish:E}=Fd(),{setTimeout:S}=zd(),P=x.useRef(null);x.useEffect(()=>{t===0&&E(wN(v))},[t,v,E]);const k=ve(z=>{("decode"in z?z.decode():Promise.resolve()).catch(()=>{}).then(()=>{z.parentNode&&(w(Ep),S(()=>{l==null||l(z)},0))})}),_=x.useCallback(z=>{P.current=z,z!=null&&z.complete&&k(z)},[k]),T=x.useCallback(z=>{k(z.currentTarget)},[k]),$=ve(()=>{w(Sp),s==null||s()}),I=F0(e,o),M=(z,V)=>Number.isFinite(z)?z:V,j=M(Math.max(...((f=(d=e.srcSet)===null||d===void 0?void 0:d.map(z=>z.width))!==null&&f!==void 0?f:[]).concat(e.width?[e.width]:[]).filter(Boolean)),((m=P.current)===null||m===void 0?void 0:m.naturalWidth)||0),R=M(Math.max(...((h=(p=e.srcSet)===null||p===void 0?void 0:p.map(z=>z.height))!==null&&h!==void 0?h:[]).concat(e.height?[e.height]:[]).filter(Boolean)),((y=P.current)===null||y===void 0?void 0:y.naturalHeight)||0),D=j&&R?{maxWidth:`min(${j}px, 100%)`,maxHeight:`min(${R}px, 100%)`}:{maxWidth:"100%",maxHeight:"100%"},F=(b=e.srcSet)===null||b===void 0?void 0:b.slice().sort((z,V)=>z.width-V.width).map(z=>`${z.src} ${z.width}w`).join(", "),L=()=>r&&!I&&e.width&&e.height?r.height/e.height*e.width:Number.MAX_VALUE,O=F&&r&&L0()?`${Math.round(Math.min(L(),r.width))}px`:void 0,{style:A,className:N,...B}=(typeof i=="function"?i(e):i)||{};return x.createElement(x.Fragment,null,x.createElement("img",{ref:_,onLoad:T,onError:$,onClick:a,draggable:!1,className:Nn(ce(_p()),I&&ce(_p("cover")),v!==Ep&&ce(_p("loading")),N),style:{...D,...c,...A},...B,alt:(g=e.alt)!==null&&g!==void 0?g:"",sizes:O,srcSet:F,src:e.src}),v!==Ep&&x.createElement("div",{className:ce(Cp(bN))},v===wp&&(n!=null&&n.iconLoading?n.iconLoading():x.createElement(ZN,{className:Nn(ce(_m),ce(Cp(wp)))})),v===Sp&&(n!=null&&n.iconError?n.iconError():x.createElement(JN,{className:Nn(ce(_m),ce(Cp(Sp)))}))))}const r7=x.forwardRef(function({className:t,children:n,onFocus:r,onBlur:o,...i},a){const l=x.useRef(null),{trackFocusWithin:s}=sk();return x.createElement(BN,{nodeRef:l},x.createElement("div",{ref:Om(a,l),className:Nn(ce("root"),t),...s(r,o),...i},n))});var ft;(function(e){e[e.NONE=0]="NONE",e[e.SWIPE=1]="SWIPE",e[e.PULL=2]="PULL",e[e.ANIMATION=3]="ANIMATION"})(ft||(ft={}));function mk(e,t,n,r,o){x.useEffect(()=>o?()=>{}:D0(e(X_,t),e(K_,n),e(Q_,r),e(Z_,r),e(J_,r)),[e,t,n,r,o])}var un;(function(e){e[e.NONE=0]="NONE",e[e.SWIPE=1]="SWIPE",e[e.PULL=2]="PULL"})(un||(un={}));const kp=30;function o7({disableSwipeNavigation:e,closeOnBackdropClick:t},n,r,o,i,a,l,s,c,d,f,m,p,h,y,b){const g=x.useRef(0),v=x.useRef([]),w=x.useRef(void 0),E=x.useRef(0),S=x.useRef(un.NONE),P=x.useCallback(j=>{w.current===j.pointerId&&(w.current=void 0,S.current=un.NONE);const R=v.current;R.splice(0,R.length,...R.filter(D=>D.pointerId!==j.pointerId))},[]),k=x.useCallback(j=>{P(j),j.persist(),v.current.push(j)},[P]),_=x.useCallback(j=>v.current.find(({pointerId:R})=>j.pointerId===R),[]),T=ve(j=>{k(j)}),$=(j,R)=>f&&j>R||d&&j<-R,I=ve(j=>{const R=_(j);if(R)if(w.current===j.pointerId){const D=Date.now()-E.current,F=g.current;S.current===un.SWIPE?Math.abs(F)>.3*o||Math.abs(F)>5&&D<i?s(F,D):c(F):S.current===un.PULL&&($(F,2*kp)?h(F,D):y(F)),g.current=0,S.current=un.NONE}else{const{target:D}=j;t&&D instanceof HTMLElement&&D===R.target&&(D.classList.contains(ce($0))||D.classList.contains(ce(Y_)))&&b()}P(j)}),M=ve(j=>{const R=_(j);if(R){const D=w.current===j.pointerId;if(j.buttons===0){D&&g.current!==0?I(j):P(R);return}const F=j.clientX-R.clientX,L=j.clientY-R.clientY;if(w.current===void 0){const O=A=>{k(j),w.current=j.pointerId,E.current=Date.now(),S.current=A};Math.abs(F)>Math.abs(L)&&Math.abs(F)>kp&&r(F)?e||(O(un.SWIPE),a()):Math.abs(L)>Math.abs(F)&&$(L,kp)&&(O(un.PULL),m())}else D&&(S.current===un.SWIPE?(g.current=F,l(F)):S.current===un.PULL&&(g.current=L,p(L)))}});mk(n,T,M,I)}function i7({preventDefaultWheelX:e,preventDefaultWheelY:t}){const n=x.useRef(null),r=ve(o=>{const i=Math.abs(o.deltaX)>Math.abs(o.deltaY);(i&&e||!i&&t||o.ctrlKey)&&o.preventDefault()});return x.useCallback(o=>{var i;o?o.addEventListener("wheel",r,{passive:!1}):(i=n.current)===null||i===void 0||i.removeEventListener("wheel",r),n.current=o},[r])}function a7(e,t,n,r,o,i,a,l,s){const c=x.useRef(0),d=x.useRef(0),f=x.useRef(void 0),m=x.useRef(void 0),p=x.useRef(0),h=x.useRef(void 0),y=x.useRef(0),{setTimeout:b,clearTimeout:g}=zd(),v=x.useCallback(()=>{f.current&&(g(f.current),f.current=void 0)},[g]),w=x.useCallback(()=>{m.current&&(g(m.current),m.current=void 0)},[g]),E=ve(()=>{e!==ft.SWIPE&&(c.current=0,y.current=0,v(),w())});x.useEffect(E,[e,E]);const S=ve(k=>{m.current=void 0,c.current===k&&s(c.current)}),P=ve(k=>{if(k.ctrlKey||Math.abs(k.deltaY)>Math.abs(k.deltaX))return;const _=T=>{p.current=T,g(h.current),h.current=T>0?b(()=>{p.current=0,h.current=void 0},300):void 0};if(e===ft.NONE){if(Math.abs(k.deltaX)<=1.2*Math.abs(p.current)){_(k.deltaX);return}if(!n(-k.deltaX))return;if(d.current+=k.deltaX,v(),Math.abs(d.current)>30)d.current=0,_(0),y.current=Date.now(),i();else{const T=d.current;f.current=b(()=>{f.current=void 0,T===d.current&&(d.current=0)},o)}}else if(e===ft.SWIPE){let T=c.current-k.deltaX;if(T=Math.min(Math.abs(T),r)*Math.sign(T),c.current=T,a(T),w(),Math.abs(T)>.2*r){_(k.deltaX),l(T,Date.now()-y.current);return}m.current=b(()=>S(T),2*o)}else _(k.deltaX)});x.useEffect(()=>t(M0,P),[t,P])}const Ax=A0("container"),gk=x.createContext(null),gr=mr("useController","ControllerContext",gk);function s7({children:e,...t}){var n;const{carousel:r,animation:o,controller:i,on:a,styles:l,render:s}=t,{closeOnPullUp:c,closeOnPullDown:d,preventDefaultWheelX:f,preventDefaultWheelY:m}=i,[p,h]=x.useState(),y=Xr(),b=UN(),[g,v]=x.useState(ft.NONE),w=x.useRef(0),E=x.useRef(0),S=x.useRef(1),{registerSensors:P,subscribeSensors:k}=n7(),{subscribe:_,publish:T}=Fd(),$=lc(),I=lc(),M=lc(),{containerRef:j,setContainerRef:R,containerRect:D}=hk(),F=Om(i7({preventDefaultWheelX:f,preventDefaultWheelY:m}),R),L=x.useRef(null),O=Om(L,void 0),{getOwnerDocument:A}=Rd(),N=V0(),B=X=>(N?-1:1)*(typeof X=="number"?X:1),z=ve(()=>{var X;return(X=j.current)===null||X===void 0?void 0:X.focus()}),V=ve(()=>t),U=ve(()=>y),G=x.useCallback(X=>T(ro,X),[T]),W=x.useCallback(X=>T(oo,X),[T]),Y=x.useCallback(()=>T(Di),[T]),Q=X=>!(r.finite&&(B(X)>0&&y.currentIndex===0||B(X)<0&&y.currentIndex===y.slides.length-1)),ie=X=>{var _e;w.current=X,(_e=j.current)===null||_e===void 0||_e.style.setProperty(Tt("swipe_offset"),`${Math.round(X)}px`)},re=X=>{var _e,gt;E.current=X,S.current=(()=>{const ea=(()=>d&&X>0?X:c&&X<0?-X:0)();return Math.min(Math.max(R0(1-ea/60*(1-.5),2),.5),1)})(),(_e=j.current)===null||_e===void 0||_e.style.setProperty(Tt("pull_offset"),`${Math.round(X)}px`),(gt=j.current)===null||gt===void 0||gt.style.setProperty(Tt("pull_opacity"),`${S.current}`)},{prepareAnimation:be}=$x(L,(X,_e,gt)=>{if(L.current&&D)return{keyframes:[{transform:`translate(0, ${X.rect.y-_e.y+gt.y}px)`,opacity:X.opacity},{transform:"translate(0, 0)",opacity:1}],duration:X.duration,easing:o.easing.fade}}),Le=(X,_e)=>{if(c||d){re(X);let gt=0;L.current&&(gt=o.fade*(_e?2:1),be({rect:L.current.getBoundingClientRect(),opacity:S.current,duration:gt})),M(()=>{re(0),v(ft.NONE)},gt),v(ft.ANIMATION),_e||Y()}},{prepareAnimation:Re,isAnimationPlaying:Ao}=$x(L,(X,_e,gt)=>{var En;if(L.current&&D&&(!((En=y.animation)===null||En===void 0)&&En.duration)){const Qt=uu(r.spacing),ea=(Qt.percent?Qt.percent*D.width/100:Qt.pixel)||0;return{keyframes:[{transform:`translate(${B(y.globalIndex-X.index)*(D.width+ea)+X.rect.x-_e.x+gt.x}px, 0)`},{transform:"translate(0, 0)"}],duration:y.animation.duration,easing:y.animation.easing}}}),Pt=ve(X=>{var _e,gt;const En=X.offset||0,Qt=En?o.swipe:(_e=o.navigation)!==null&&_e!==void 0?_e:o.swipe,ea=!En&&!Ao()?o.easing.navigation:o.easing.swipe;let{direction:Hs}=X;const Gs=(gt=X.count)!==null&&gt!==void 0?gt:1;let Qd=ft.ANIMATION,Cn=Qt*Gs;if(!Hs){const ta=D==null?void 0:D.width,ov=X.duration||0,Jd=ta?Qt/ta*Math.abs(En):Qt;Gs!==0?(ov<Jd?Cn=Cn/Jd*Math.max(ov,Jd/5):ta&&(Cn=Qt/ta*(ta-Math.abs(En))),Hs=B(En)>0?ro:oo):Cn=Qt/2}let Zd=0;Hs===ro?Q(B(1))?Zd=-Gs:(Qd=ft.NONE,Cn=Qt):Hs===oo&&(Q(B(-1))?Zd=Gs:(Qd=ft.NONE,Cn=Qt)),Cn=Math.round(Cn),I(()=>{ie(0),v(ft.NONE)},Cn),L.current&&Re({rect:L.current.getBoundingClientRect(),index:y.globalIndex}),v(Qd),T(Tx,{type:"swipe",increment:Zd,duration:Cn,easing:ea})});x.useEffect(()=>{var X,_e;!((X=y.animation)===null||X===void 0)&&X.increment&&(!((_e=y.animation)===null||_e===void 0)&&_e.duration)&&$(()=>b({type:"swipe",increment:0}),y.animation.duration)},[y.animation,b,$]);const Zi=[k,Q,(D==null?void 0:D.width)||0,o.swipe,()=>v(ft.SWIPE),X=>ie(X),(X,_e)=>Pt({offset:X,duration:_e,count:1}),X=>Pt({offset:X,count:0})],Us=[()=>{d&&v(ft.PULL)},X=>re(X),X=>Le(X),X=>Le(X,!0)];o7(i,...Zi,c,d,...Us,Y),a7(g,...Zi);const Ji=ve(()=>{i.focus&&A().querySelector(`.${ce(T0)} .${ce(Ax())}`)&&z()});x.useEffect(Ji,[Ji]);const rv=ve(()=>{var X;(X=a.view)===null||X===void 0||X.call(a,{index:y.currentIndex})});x.useEffect(rv,[y.globalIndex,rv]),x.useEffect(()=>D0(_(ro,X=>Pt({direction:ro,...X})),_(oo,X=>Pt({direction:oo,...X})),_(Tx,X=>b(X))),[_,Pt,b]);const CP=x.useMemo(()=>({prev:G,next:W,close:Y,focus:z,slideRect:D?$N(D,r.padding):{width:0,height:0},containerRect:D||{width:0,height:0},subscribeSensors:k,containerRef:j,setCarouselRef:O,toolbarWidth:p,setToolbarWidth:h}),[G,W,Y,z,k,D,j,O,p,h,r.padding]);return x.useImperativeHandle(i.ref,()=>({prev:G,next:W,close:Y,focus:z,getLightboxProps:V,getLightboxState:U}),[G,W,Y,z,V,U]),x.createElement("div",{ref:F,className:Nn(ce(Ax()),ce(j0)),style:{...g===ft.SWIPE?{[Tt("swipe_offset")]:`${Math.round(w.current)}px`}:null,...g===ft.PULL?{[Tt("pull_offset")]:`${Math.round(E.current)}px`,[Tt("pull_opacity")]:`${S.current}`}:null,...i.touchAction!=="none"?{[Tt("controller_touch_action")]:i.touchAction}:null,...l.container},tabIndex:-1,...P},D&&x.createElement(gk.Provider,{value:CP},e,(n=s.controls)===null||n===void 0?void 0:n.call(s)))}const l7=Yr(H_,s7);function Kr(e){return Ws(U_,e)}function Dx(e){return Ws($0,e)}function c7({slide:e,offset:t}){const n=x.useRef(null),{currentIndex:r,slides:o}=Xr(),{slideRect:i,focus:a}=gr(),{render:l,carousel:{imageFit:s,imageProps:c},on:{click:d},styles:{slide:f},labels:m}=an(),{getOwnerDocument:p}=Rd(),h=t!==0;x.useEffect(()=>{var b;h&&(!((b=n.current)===null||b===void 0)&&b.contains(p().activeElement))&&a()},[h,a,p]);const y=()=>{var b,g,v,w;let E=(b=l.slide)===null||b===void 0?void 0:b.call(l,{slide:e,offset:t,rect:i});return!E&&Qi(e)&&(E=x.createElement(du,{slide:e,offset:t,render:l,rect:i,imageFit:s,imageProps:c,onClick:h?void 0:()=>d==null?void 0:d({index:r})})),E?x.createElement(x.Fragment,null,(g=l.slideHeader)===null||g===void 0?void 0:g.call(l,{slide:e}),((v=l.slideContainer)!==null&&v!==void 0?v:({children:S})=>S)({slide:e,children:E}),(w=l.slideFooter)===null||w===void 0?void 0:w.call(l,{slide:e})):null};return x.createElement("div",{ref:n,className:Nn(ce(Dx()),!h&&ce(Dx("current")),ce(j0)),...RN(h),style:f,role:"group","aria-roledescription":Li(m,"Slide"),"aria-label":jN(m,o,r+t)},y())}function u7(){const e=an().styles.slide;return x.createElement("div",{className:ce($0),style:e})}function d7({carousel:e,labels:t}){const{slides:n,currentIndex:r,globalIndex:o}=Xr(),{setCarouselRef:i}=gr(),{autoPlaying:a,focusWithin:l}=sk(),s=uu(e.spacing),c=uu(e.padding),d=DN(e,n,1),f=[];if(rk(n))for(let m=r-d;m<=r+d;m+=1){const p=ok(n,m),h=o-r+m,y=e.finite&&(m<0||m>n.length-1);f.push(y?{key:h}:{key:[`${h}`,MN(p)].filter(Boolean).join("|"),offset:m-r,slide:p})}return x.createElement("div",{ref:i,className:Nn(ce(Kr()),f.length>0&&ce(Kr("with_slides"))),style:{[`${Tt(Kr("slides_count"))}`]:f.length,[`${Tt(Kr("spacing_px"))}`]:s.pixel||0,[`${Tt(Kr("spacing_percent"))}`]:s.percent||0,[`${Tt(Kr("padding_px"))}`]:c.pixel||0,[`${Tt(Kr("padding_percent"))}`]:c.percent||0},role:"region","aria-live":a&&!l?"off":"polite","aria-roledescription":Li(t,"Carousel"),"aria-label":Li(t,"Photo gallery")},f.map(({key:m,slide:p,offset:h})=>p?x.createElement(c7,{key:m,slide:p,offset:h}):x.createElement(u7,{key:m})))}const f7=Yr(U_,d7);function vk(){const{carousel:e}=an(),{slides:t,currentIndex:n}=Xr(),r=t.length===0||e.finite&&n===0,o=t.length===0||e.finite&&n===t.length-1;return{prevDisabled:r,nextDisabled:o}}function p7(e){var t;const n=V0(),{publish:r}=Fd(),{animation:o}=an(),{prevDisabled:i,nextDisabled:a}=vk(),l=((t=o.navigation)!==null&&t!==void 0?t:o.swipe)/2,s=Mx(()=>r(ro),l),c=Mx(()=>r(oo),l),d=ve(f=>{switch(f.key){case kN:r(Di);break;case PN:(n?a:i)||(n?c:s)();break;case ON:(n?i:a)||(n?s:c)();break}});x.useEffect(()=>e(I0,d),[e,d])}function Lx({label:e,icon:t,renderIcon:n,action:r,onClick:o,disabled:i,style:a}){return x.createElement(N0,{label:e,icon:t,renderIcon:n,className:ce(`navigation_${r}`),disabled:i,onClick:o,style:a,...t7(gr().focus,i)})}function h7({render:{buttonPrev:e,buttonNext:t,iconPrev:n,iconNext:r},styles:o}){const{prev:i,next:a,subscribeSensors:l}=gr(),{prevDisabled:s,nextDisabled:c}=vk();return p7(l),x.createElement(x.Fragment,null,e?e():x.createElement(Lx,{label:"Previous",action:ro,icon:KN,renderIcon:n,style:o.navigationPrev,disabled:s,onClick:i}),t?t():x.createElement(Lx,{label:"Next",action:oo,icon:QN,renderIcon:r,style:o.navigationNext,disabled:c,onClick:a}))}const m7=Yr(vN,h7),Rx=ce(EN),g7=ce(q_);function v7(e){return"style"in e}function Fx(e,t,n){const r=window.getComputedStyle(e),o=n?"padding-left":"padding-right",i=n?r.paddingLeft:r.paddingRight,a=e.style.getPropertyValue(o);return e.style.setProperty(o,`${(Ld(i)||0)+t}px`),()=>{a?e.style.setProperty(o,a):e.style.removeProperty(o)}}function y7({noScroll:{disabled:e},children:t}){const n=V0(),{getOwnerDocument:r,getOwnerWindow:o}=Rd();return x.useEffect(()=>{if(e)return()=>{};const i=[],a=o(),{body:l,documentElement:s}=r(),c=Math.round(a.innerWidth-s.clientWidth);if(c>0){i.push(Fx(l,c,n));const d=l.getElementsByTagName("*");for(let f=0;f<d.length;f+=1){const m=d[f];v7(m)&&a.getComputedStyle(m).getPropertyValue("position")==="fixed"&&!m.classList.contains(g7)&&i.push(Fx(m,c,n))}}return l.classList.add(Rx),()=>{l.classList.remove(Rx),i.forEach(d=>d())}},[n,e,r,o]),x.createElement(x.Fragment,null,t)}const x7=Yr(yN,y7);function zx(e){return Ws(T0,e)}function Nx(e,t,n){const r=e.getAttribute(t);return e.setAttribute(t,n),()=>{r?e.setAttribute(t,r):e.removeAttribute(t)}}function b7({children:e,animation:t,styles:n,className:r,on:o,portal:i,close:a,labels:l}){const[s,c]=x.useState(!1),[d,f]=x.useState(!1),m=x.useRef([]),p=x.useRef(null),{setTimeout:h}=zd(),{subscribe:y}=Fd(),g=B0()?0:t.fade;x.useEffect(()=>(c(!0),()=>{c(!1),f(!1)}),[]);const v=ve(()=>{m.current.forEach(P=>P()),m.current=[]}),w=ve(()=>{var P;f(!1),v(),(P=o.exiting)===null||P===void 0||P.call(o),h(()=>{var k;(k=o.exited)===null||k===void 0||k.call(o),a()},g)});x.useEffect(()=>y(Di,w),[y,w]);const E=ve(P=>{var k,_,T;FN(P),f(!0),(k=o.entering)===null||k===void 0||k.call(o);const $=(T=(_=P.parentNode)===null||_===void 0?void 0:_.children)!==null&&T!==void 0?T:[];for(let I=0;I<$.length;I+=1){const M=$[I];["TEMPLATE","SCRIPT","STYLE"].indexOf(M.tagName)===-1&&M!==P&&(m.current.push(Nx(M,"inert","")),m.current.push(Nx(M,"aria-hidden","true")))}m.current.push(()=>{var I,M;(M=(I=p.current)===null||I===void 0?void 0:I.focus)===null||M===void 0||M.call(I)}),h(()=>{var I;(I=o.entered)===null||I===void 0||I.call(o)},g)}),S=x.useCallback(P=>{P?E(P):v()},[E,v]);return s?Ru.createPortal(x.createElement(r7,{ref:S,className:Nn(r,ce(zx()),ce(q_),d&&ce(zx("open"))),"aria-modal":!0,role:"dialog","aria-label":Li(l,"Lightbox"),style:{...t.fade!==Pm.animation.fade?{[Tt("fade_animation_duration")]:`${g}ms`}:null,...t.easing.fade!==Pm.animation.easing.fade?{[Tt("fade_animation_timing_function")]:t.easing.fade}:null,...n.root},onFocus:P=>{p.current||(p.current=P.relatedTarget)}},e),i.root||document.body):null}const w7=Yr(T0,b7);function S7({children:e}){return x.createElement(x.Fragment,null,e)}const E7=Yr(xN,S7);function C7(e){return Ws(G_,e)}function _7({toolbar:{buttons:e},render:{buttonClose:t,iconClose:n},styles:r}){const{close:o,setToolbarWidth:i}=gr(),{setContainerRef:a,containerRect:l}=hk();Bn(()=>{i(l==null?void 0:l.width)},[i,l==null?void 0:l.width]);const s=()=>t?t():x.createElement(N0,{key:Di,label:"Close",icon:XN,renderIcon:n,onClick:o});return x.createElement("div",{ref:a,style:r.toolbar,className:ce(C7())},e==null?void 0:e.map(c=>c===Di?s():c))}const k7=Yr(G_,_7);function yk(e,t){var n;return x.createElement(e.module.component,{key:e.module.name,...t},(n=e.children)===null||n===void 0?void 0:n.map(r=>yk(r,t)))}function P7(e,t={}){const{easing:n,...r}=e,{easing:o,...i}=t;return{easing:{...n,...o},...r,...i}}function O7({carousel:e,animation:t,render:n,toolbar:r,controller:o,noScroll:i,on:a,plugins:l,slides:s,index:c,...d}){const{animation:f,carousel:m,render:p,toolbar:h,controller:y,noScroll:b,on:g,slides:v,index:w,plugins:E,...S}=Pm,{config:P,augmentation:k}=zN([Ke(w7,[Ke(x7,[Ke(l7,[Ke(f7),Ke(k7),Ke(m7)])])])],l||E),_=k({animation:P7(f,t),carousel:{...m,...e},render:{...p,...n},toolbar:{...h,...r},controller:{...y,...o},noScroll:{...b,...i},on:{...g,...a},...S,...d});return _.open?x.createElement(WN,{..._},x.createElement(GN,{slides:s||v,index:Ld(c||w)},x.createElement(qN,null,x.createElement(VN,null,x.createElement(NN,null,yk(Ke(E7,P),_)))))):null}const T7={minZoom:1,maxZoomPixelRatio:1,zoomInMultiplier:2,doubleTapDelay:300,doubleClickDelay:500,doubleClickMaxStops:2,keyboardMoveDistance:50,wheelZoomDistanceFactor:100,pinchZoomDistanceFactor:100,pinchZoomV4:!1,scrollToZoom:!1};function j7(e){return Math.min(Math.max(e,Number.EPSILON),1)}function xk(e){const{minZoom:t,...n}={...T7,...e};return{minZoom:j7(t),...n}}function $7(e,t,n,r){const o=x.useRef(void 0),i=x.useRef(void 0),{zoom:a}=an().animation,l=B0(),s=ve(()=>{var c,d,f;if((c=o.current)===null||c===void 0||c.cancel(),o.current=void 0,i.current&&(r!=null&&r.current)){try{o.current=(f=(d=r.current).animate)===null||f===void 0?void 0:f.call(d,[{transform:i.current},{transform:`scale(${e}) translateX(${t}px) translateY(${n}px)`}],{duration:l?0:a??500,easing:o.current?"ease-out":"ease-in-out"})}catch(m){console.error(m)}i.current=void 0,o.current&&(o.current.onfinish=()=>{o.current=void 0})}});return Bn(s,[e,t,n,s]),x.useCallback(()=>{i.current=r!=null&&r.current?window.getComputedStyle(r.current).transform:void 0},[r])}function I7(e,t){const{on:n}=an(),r=ve(()=>{var o;t||(o=n.zoom)===null||o===void 0||o.call(n,{zoom:e})});x.useEffect(r,[e,r])}function Nd(){const{zoom:e}=an();return xk(e)}function M7(e,t){var n,r;let o={width:0,height:0},i={width:0,height:0};const{currentSlide:a}=Xr(),{imageFit:l}=an().carousel,{maxZoomPixelRatio:s}=Nd();if(e&&a){const d={...a,...t};if(Qi(d)){const f=F0(d,l),m=Math.max(...(((n=d.srcSet)===null||n===void 0?void 0:n.map(h=>h.width))||[]).concat(d.width?[d.width]:[])),p=Math.max(...(((r=d.srcSet)===null||r===void 0?void 0:r.map(h=>h.height))||[]).concat(d.height?[d.height]:[]));m>0&&p>0&&e.width>0&&e.height>0&&(i=f?{width:Math.round(Math.min(m,e.width/e.height*p)),height:Math.round(Math.min(p,e.height/e.width*m))}:{width:m,height:p},i={width:i.width*s,height:i.height*s},o=f?{width:Math.min(e.width,i.width,m),height:Math.min(e.height,i.height,p)}:{width:Math.round(Math.min(e.width,e.height/p*m,m)),height:Math.round(Math.min(e.height,e.width/m*p,p))})}}const c=o.width?Math.max(R0(i.width/o.width,5),1):1;return{imageRect:o,maxZoom:c}}function Bx(e,t){return Math.hypot(e.clientX-t.clientX,e.clientY-t.clientY)}function Vx(e,t,n=100,r=2){return e*Math.min(1+Math.abs(t/n),r)**Math.sign(t)}function A7(e,t,n,r,o,i,a,l,s){const c=x.useRef([]),d=x.useRef(0),f=x.useRef(void 0),{globalIndex:m}=Xr(),{getOwnerWindow:p}=Rd(),{containerRef:h,subscribeSensors:y}=gr(),{keyboardMoveDistance:b,zoomInMultiplier:g,wheelZoomDistanceFactor:v,scrollToZoom:w,doubleTapDelay:E,doubleClickDelay:S,doubleClickMaxStops:P,pinchZoomDistanceFactor:k,pinchZoomV4:_}=Nd(),T=x.useCallback(O=>{if(h.current){const{pageX:A,pageY:N}=O,{scrollX:B,scrollY:z}=p(),{left:V,top:U,width:G,height:W}=h.current.getBoundingClientRect();return[A-V-B-G/2,N-U-z-W/2]}return[]},[h,p]),$=ve(O=>{const{key:A,metaKey:N,ctrlKey:B}=O,z=N||B,V=()=>{O.preventDefault(),O.stopPropagation()};if(e>1){const U=(G,W)=>{V(),l(G,W)};A==="ArrowDown"?U(0,b):A==="ArrowUp"?U(0,-b):A==="ArrowLeft"?U(-b,0):A==="ArrowRight"&&U(b,0)}A==="+"||z&&A==="="?(V(),o()):A==="-"||z&&A==="_"?(V(),i()):z&&A==="0"&&(V(),a(1))}),I=ve(O=>{if((O.ctrlKey||w)&&Math.abs(O.deltaY)>Math.abs(O.deltaX)){O.stopPropagation(),a(Vx(e,-O.deltaY,v),!0,...T(O));return}e>1&&(O.stopPropagation(),w||l(O.deltaX,O.deltaY))}),M=x.useCallback(O=>{const A=c.current;A.splice(0,A.length,...A.filter(N=>N.pointerId!==O.pointerId))},[]),j=x.useCallback(O=>{M(O),O.persist(),c.current.push(O)},[M]),R=ve(O=>{var A;const N=c.current;if(O.pointerType==="mouse"&&O.buttons>1||!(!((A=s==null?void 0:s.current)===null||A===void 0)&&A.contains(O.target)))return;e>1&&O.stopPropagation();const{timeStamp:B}=O;if(N.length===0&&B-d.current<(O.pointerType==="touch"?E:S)){d.current=0;const z=e>=1?e!==n?e*Math.max(n**(1/P),g):1:e!==t?e/Math.max(t**(-1/P),g):1;a(z,!1,...T(O))}else d.current=B;if(j(O),N.length===2){const z=Bx(N[0],N[1]);f.current={previousDistance:z,initialDistance:Math.max(z,1),initialZoom:e}}}),D=ve(O=>{const A=c.current,N=A.find(B=>B.pointerId===O.pointerId);if(A.length===2&&f.current){O.stopPropagation(),j(O);const B=Bx(A[0],A[1]),z=_?f.current.initialZoom/f.current.initialDistance*B:Vx(e,B-f.current.previousDistance,k);a(z,!0,...A.map(V=>T(V)).reduce((V,U)=>U.map((G,W)=>V[W]+G/2))),f.current.previousDistance=B;return}e>1&&(O.stopPropagation(),N&&(A.length===1&&l((N.clientX-O.clientX)/e,(N.clientY-O.clientY)/e),j(O)))}),F=x.useCallback(O=>{const A=c.current;A.length===2&&A.find(N=>N.pointerId===O.pointerId)&&(f.current=void 0),M(O)},[M]),L=x.useCallback(()=>{const O=c.current;O.splice(0,O.length),d.current=0,f.current=void 0},[]);mk(y,R,D,F,r),x.useEffect(L,[m,L]),x.useEffect(()=>r?()=>{}:D0(L,y(I0,$),y(M0,I)),[r,y,L,$,I])}function D7(e,t,n){const[r,o]=x.useState(1),[i,a]=x.useState(0),[l,s]=x.useState(0),c=$7(r,i,l,n),{currentSlide:d,globalIndex:f}=Xr(),{containerRect:m,slideRect:p}=gr(),{minZoom:h,zoomInMultiplier:y}=Nd(),b=d&&Qi(d)?d.src:void 0,g=!b||!(n!=null&&n.current);Bn(()=>{o(1),a(0),s(0)},[f,b]);const v=x.useCallback((k,_,T)=>{const $=T||r,I=i-(k||0),M=l-(_||0),j=(e.width*$-p.width)/2/$,R=(e.height*$-p.height)/2/$;a(Math.min(Math.abs(I),Math.max(j,0))*Math.sign(I)),s(Math.min(Math.abs(M),Math.max(R,0))*Math.sign(M))},[r,i,l,p,e.width,e.height]),w=x.useCallback((k,_,T,$)=>{const I=R0(k+.01<t?k-.01>h?k:h:t,5);_||c(),v(T?T*(1/r-1/I):0,$?$*(1/r-1/I):0,I),o(I)},[r,h,t,v,c]),E=ve(()=>{r>1&&(r>t&&w(t,!0),v())});Bn(E,[m.width,m.height,E]);const S=x.useCallback(()=>{const k=r*y;w(r<1&&k>1?1:k)},[r,y,w]),P=x.useCallback(()=>{const k=r/y;w(r>1&&k<1?1:k)},[r,y,w]);return{zoom:r,offsetX:i,offsetY:l,disabled:g,changeOffsets:v,changeZoom:w,zoomIn:S,zoomOut:P}}const bk=x.createContext(null),W0=mr("useZoom","ZoomControllerContext",bk);function L7({children:e}){const[t,n]=x.useState(),{slideRect:r}=gr(),{ref:o,minZoom:i}=Nd(),{imageRect:a,maxZoom:l}=M7(r,t==null?void 0:t.imageDimensions),{zoom:s,offsetX:c,offsetY:d,disabled:f,changeZoom:m,changeOffsets:p,zoomIn:h,zoomOut:y}=D7(a,l,t==null?void 0:t.zoomWrapperRef);I7(s,f),A7(s,i,l,f,h,y,m,p,t==null?void 0:t.zoomWrapperRef);const b=x.useMemo(()=>({zoom:s,minZoom:i,maxZoom:l,offsetX:c,offsetY:d,disabled:f,zoomIn:h,zoomOut:y,changeZoom:m}),[s,i,l,c,d,f,h,y,m]);x.useImperativeHandle(o,()=>b,[b]);const g=x.useMemo(()=>({...b,setZoomWrapper:n}),[b,n]);return x.createElement(bk.Provider,{value:g},e)}const R7=Mo("ZoomIn",x.createElement(x.Fragment,null,x.createElement("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}),x.createElement("path",{d:"M12 10h-2v2H9v-2H7V9h2V7h1v2h2v1z"}))),F7=Mo("ZoomOut",x.createElement("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14zM7 9h5v1H7z"})),Wx=x.forwardRef(function({zoomIn:t,onLoseFocus:n},r){const o=x.useRef(!1),i=x.useRef(!1),{zoom:a,minZoom:l,maxZoom:s,zoomIn:c,zoomOut:d,disabled:f}=W0(),{render:m}=an(),p=f||(t?a>=s:a<=l);return x.useEffect(()=>{p&&o.current&&i.current&&n(),p||(o.current=!0)},[p,n]),x.createElement(N0,{ref:r,disabled:p,label:t?"Zoom in":"Zoom out",icon:t?R7:F7,renderIcon:t?m.iconZoomIn:m.iconZoomOut,onClick:t?c:d,onFocus:()=>{i.current=!0},onBlur:()=>{i.current=!1}})});function z7(){const e=x.useRef(null),t=x.useRef(null),{focus:n}=gr(),r=x.useCallback(a=>{var l,s;!((l=a.current)===null||l===void 0)&&l.disabled?n():(s=a.current)===null||s===void 0||s.focus()},[n]),o=x.useCallback(()=>r(e),[r]),i=x.useCallback(()=>r(t),[r]);return x.createElement(x.Fragment,null,x.createElement(Wx,{zoomIn:!0,ref:e,onLoseFocus:i}),x.createElement(Wx,{ref:t,onLoseFocus:o}))}function N7(){const{render:e}=an(),t=W0();return e.buttonZoom?x.createElement(x.Fragment,null,e.buttonZoom(t)):x.createElement(z7,null)}function B7(e){var t;return(((t=e.srcSet)===null||t===void 0?void 0:t.length)||0)>0}function V7({current:e,preload:t},{type:n,source:r}){switch(n){case"fetch":return e?{current:e,preload:r}:{current:r};case"done":return r===t?{current:r}:{current:e,preload:t};default:throw new Error(tk)}}function W7(e){var t,n;const[{current:r,preload:o},i]=x.useReducer(V7,{}),{slide:a,rect:l,imageFit:s,render:c,interactive:d}=e,f=a.srcSet.sort((S,P)=>S.width-P.width),m=(t=a.width)!==null&&t!==void 0?t:f[f.length-1].width,p=(n=a.height)!==null&&n!==void 0?n:f[f.length-1].height,h=F0(a,s),y=Math.max(...f.map(S=>S.width)),b=Math.min((h?Math.max:Math.min)(l.width,m*(l.height/p)),y),g=IN(),v=ve(()=>{var S;const P=(S=f.find(k=>k.width>=b*g))!==null&&S!==void 0?S:f[f.length-1];(!r||f.findIndex(k=>k.src===r)<f.findIndex(k=>k===P))&&i({type:"fetch",source:P.src})});Bn(v,[l.width,l.height,g,v]);const w=ve(S=>i({type:"done",source:S})),E={WebkitTransform:d?"initial":"translateZ(0)"};return h||Object.assign(E,l.width/l.height<m/p?{width:"100%",height:"auto"}:{width:"auto",height:"100%"}),x.createElement(x.Fragment,null,o&&o!==r&&x.createElement(du,{key:"preload",...e,offset:void 0,slide:{...a,src:o,srcSet:void 0},style:{position:"absolute",visibility:"hidden",...E},onLoad:()=>w(o),render:{...c,iconLoading:()=>null,iconError:()=>null}}),r&&x.createElement(du,{key:"current",...e,slide:{...a,src:r,srcSet:void 0},style:E}))}function U7({render:e,slide:t,offset:n,rect:r}){var o;const[i,a]=x.useState(),l=x.useRef(null),{zoom:s,maxZoom:c,offsetX:d,offsetY:f,setZoomWrapper:m}=W0(),p=s>1,{carousel:h,on:y}=an(),{currentIndex:b}=Xr();Bn(()=>n===0?(m({zoomWrapperRef:l,imageDimensions:i}),()=>m(void 0)):()=>{},[n,i,m]);let g=(o=e.slide)===null||o===void 0?void 0:o.call(e,{slide:t,offset:n,rect:r,zoom:s,maxZoom:c});if(!g&&Qi(t)){const v={slide:t,offset:n,rect:r,render:e,imageFit:h.imageFit,imageProps:h.imageProps,onClick:n===0?()=>{var w;return(w=y.click)===null||w===void 0?void 0:w.call(y,{index:b})}:void 0};g=B7(t)?x.createElement(W7,{...v,slide:t,interactive:p,rect:n===0?{width:r.width*s,height:r.height*s}:r}):x.createElement(du,{onLoad:w=>a({width:w.naturalWidth,height:w.naturalHeight}),...v})}return g?x.createElement("div",{ref:l,className:Nn(ce(SN),ce(j0),ce(Y_),p&&ce(CN)),style:n===0?{transform:`scale(${s}) translateX(${d}px) translateY(${f}px)`}:void 0},g):null}const H7=({augment:e,addModule:t})=>{e(({zoom:n,toolbar:r,render:o,controller:i,...a})=>{const l=xk(n);return{zoom:l,toolbar:AN(r,Ox,x.createElement(N7,null)),render:{...o,slide:s=>{var c;return Qi(s.slide)?x.createElement(U7,{render:o,...s}):(c=o.slide)===null||c===void 0?void 0:c.call(o,s)}},controller:{...i,preventDefaultWheelY:l.scrollToZoom},...a}}),t(Yr(Ox,L7))};var wk={exports:{}};(function(e,t){(function(n,r){e.exports=r()})(ne,function(){var n=1e3,r=6e4,o=36e5,i="millisecond",a="second",l="minute",s="hour",c="day",d="week",f="month",m="quarter",p="year",h="date",y="Invalid Date",b=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,g=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,v={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(R){var D=["th","st","nd","rd"],F=R%100;return"["+R+(D[(F-20)%10]||D[F]||D[0])+"]"}},w=function(R,D,F){var L=String(R);return!L||L.length>=D?R:""+Array(D+1-L.length).join(F)+R},E={s:w,z:function(R){var D=-R.utcOffset(),F=Math.abs(D),L=Math.floor(F/60),O=F%60;return(D<=0?"+":"-")+w(L,2,"0")+":"+w(O,2,"0")},m:function R(D,F){if(D.date()<F.date())return-R(F,D);var L=12*(F.year()-D.year())+(F.month()-D.month()),O=D.clone().add(L,f),A=F-O<0,N=D.clone().add(L+(A?-1:1),f);return+(-(L+(F-O)/(A?O-N:N-O))||0)},a:function(R){return R<0?Math.ceil(R)||0:Math.floor(R)},p:function(R){return{M:f,y:p,w:d,d:c,D:h,h:s,m:l,s:a,ms:i,Q:m}[R]||String(R||"").toLowerCase().replace(/s$/,"")},u:function(R){return R===void 0}},S="en",P={};P[S]=v;var k="$isDayjsObject",_=function(R){return R instanceof M||!(!R||!R[k])},T=function R(D,F,L){var O;if(!D)return S;if(typeof D=="string"){var A=D.toLowerCase();P[A]&&(O=A),F&&(P[A]=F,O=A);var N=D.split("-");if(!O&&N.length>1)return R(N[0])}else{var B=D.name;P[B]=D,O=B}return!L&&O&&(S=O),O||!L&&S},$=function(R,D){if(_(R))return R.clone();var F=typeof D=="object"?D:{};return F.date=R,F.args=arguments,new M(F)},I=E;I.l=T,I.i=_,I.w=function(R,D){return $(R,{locale:D.$L,utc:D.$u,x:D.$x,$offset:D.$offset})};var M=function(){function R(F){this.$L=T(F.locale,null,!0),this.parse(F),this.$x=this.$x||F.x||{},this[k]=!0}var D=R.prototype;return D.parse=function(F){this.$d=function(L){var O=L.date,A=L.utc;if(O===null)return new Date(NaN);if(I.u(O))return new Date;if(O instanceof Date)return new Date(O);if(typeof O=="string"&&!/Z$/i.test(O)){var N=O.match(b);if(N){var B=N[2]-1||0,z=(N[7]||"0").substring(0,3);return A?new Date(Date.UTC(N[1],B,N[3]||1,N[4]||0,N[5]||0,N[6]||0,z)):new Date(N[1],B,N[3]||1,N[4]||0,N[5]||0,N[6]||0,z)}}return new Date(O)}(F),this.init()},D.init=function(){var F=this.$d;this.$y=F.getFullYear(),this.$M=F.getMonth(),this.$D=F.getDate(),this.$W=F.getDay(),this.$H=F.getHours(),this.$m=F.getMinutes(),this.$s=F.getSeconds(),this.$ms=F.getMilliseconds()},D.$utils=function(){return I},D.isValid=function(){return this.$d.toString()!==y},D.isSame=function(F,L){var O=$(F);return this.startOf(L)<=O&&O<=this.endOf(L)},D.isAfter=function(F,L){return $(F)<this.startOf(L)},D.isBefore=function(F,L){return this.endOf(L)<$(F)},D.$g=function(F,L,O){return I.u(F)?this[L]:this.set(O,F)},D.unix=function(){return Math.floor(this.valueOf()/1e3)},D.valueOf=function(){return this.$d.getTime()},D.startOf=function(F,L){var O=this,A=!!I.u(L)||L,N=I.p(F),B=function(ie,re){var be=I.w(O.$u?Date.UTC(O.$y,re,ie):new Date(O.$y,re,ie),O);return A?be:be.endOf(c)},z=function(ie,re){return I.w(O.toDate()[ie].apply(O.toDate("s"),(A?[0,0,0,0]:[23,59,59,999]).slice(re)),O)},V=this.$W,U=this.$M,G=this.$D,W="set"+(this.$u?"UTC":"");switch(N){case p:return A?B(1,0):B(31,11);case f:return A?B(1,U):B(0,U+1);case d:var Y=this.$locale().weekStart||0,Q=(V<Y?V+7:V)-Y;return B(A?G-Q:G+(6-Q),U);case c:case h:return z(W+"Hours",0);case s:return z(W+"Minutes",1);case l:return z(W+"Seconds",2);case a:return z(W+"Milliseconds",3);default:return this.clone()}},D.endOf=function(F){return this.startOf(F,!1)},D.$set=function(F,L){var O,A=I.p(F),N="set"+(this.$u?"UTC":""),B=(O={},O[c]=N+"Date",O[h]=N+"Date",O[f]=N+"Month",O[p]=N+"FullYear",O[s]=N+"Hours",O[l]=N+"Minutes",O[a]=N+"Seconds",O[i]=N+"Milliseconds",O)[A],z=A===c?this.$D+(L-this.$W):L;if(A===f||A===p){var V=this.clone().set(h,1);V.$d[B](z),V.init(),this.$d=V.set(h,Math.min(this.$D,V.daysInMonth())).$d}else B&&this.$d[B](z);return this.init(),this},D.set=function(F,L){return this.clone().$set(F,L)},D.get=function(F){return this[I.p(F)]()},D.add=function(F,L){var O,A=this;F=Number(F);var N=I.p(L),B=function(U){var G=$(A);return I.w(G.date(G.date()+Math.round(U*F)),A)};if(N===f)return this.set(f,this.$M+F);if(N===p)return this.set(p,this.$y+F);if(N===c)return B(1);if(N===d)return B(7);var z=(O={},O[l]=r,O[s]=o,O[a]=n,O)[N]||1,V=this.$d.getTime()+F*z;return I.w(V,this)},D.subtract=function(F,L){return this.add(-1*F,L)},D.format=function(F){var L=this,O=this.$locale();if(!this.isValid())return O.invalidDate||y;var A=F||"YYYY-MM-DDTHH:mm:ssZ",N=I.z(this),B=this.$H,z=this.$m,V=this.$M,U=O.weekdays,G=O.months,W=O.meridiem,Y=function(re,be,Le,Re){return re&&(re[be]||re(L,A))||Le[be].slice(0,Re)},Q=function(re){return I.s(B%12||12,re,"0")},ie=W||function(re,be,Le){var Re=re<12?"AM":"PM";return Le?Re.toLowerCase():Re};return A.replace(g,function(re,be){return be||function(Le){switch(Le){case"YY":return String(L.$y).slice(-2);case"YYYY":return I.s(L.$y,4,"0");case"M":return V+1;case"MM":return I.s(V+1,2,"0");case"MMM":return Y(O.monthsShort,V,G,3);case"MMMM":return Y(G,V);case"D":return L.$D;case"DD":return I.s(L.$D,2,"0");case"d":return String(L.$W);case"dd":return Y(O.weekdaysMin,L.$W,U,2);case"ddd":return Y(O.weekdaysShort,L.$W,U,3);case"dddd":return U[L.$W];case"H":return String(B);case"HH":return I.s(B,2,"0");case"h":return Q(1);case"hh":return Q(2);case"a":return ie(B,z,!0);case"A":return ie(B,z,!1);case"m":return String(z);case"mm":return I.s(z,2,"0");case"s":return String(L.$s);case"ss":return I.s(L.$s,2,"0");case"SSS":return I.s(L.$ms,3,"0");case"Z":return N}return null}(re)||N.replace(":","")})},D.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},D.diff=function(F,L,O){var A,N=this,B=I.p(L),z=$(F),V=(z.utcOffset()-this.utcOffset())*r,U=this-z,G=function(){return I.m(N,z)};switch(B){case p:A=G()/12;break;case f:A=G();break;case m:A=G()/3;break;case d:A=(U-V)/6048e5;break;case c:A=(U-V)/864e5;break;case s:A=U/o;break;case l:A=U/r;break;case a:A=U/n;break;default:A=U}return O?A:I.a(A)},D.daysInMonth=function(){return this.endOf(f).$D},D.$locale=function(){return P[this.$L]},D.locale=function(F,L){if(!F)return this.$L;var O=this.clone(),A=T(F,L,!0);return A&&(O.$L=A),O},D.clone=function(){return I.w(this.$d,this)},D.toDate=function(){return new Date(this.valueOf())},D.toJSON=function(){return this.isValid()?this.toISOString():null},D.toISOString=function(){return this.$d.toISOString()},D.toString=function(){return this.$d.toUTCString()},R}(),j=M.prototype;return $.prototype=j,[["$ms",i],["$s",a],["$m",l],["$H",s],["$W",c],["$M",f],["$y",p],["$D",h]].forEach(function(R){j[R[1]]=function(D){return this.$g(D,R[0],R[1])}}),$.extend=function(R,D){return R.$i||(R(D,M,$),R.$i=!0),$},$.locale=T,$.isDayjs=_,$.unix=function(R){return $(1e3*R)},$.en=P[S],$.Ls=P,$.p={},$})})(wk);var G7=wk.exports;const Ux=Ri(G7),q7=C.div`
  /* max-width: 800px; */
  margin: 20px auto;

  font-family: var(--second-font);
`;C.h3`
  font-size: 18px;
  color: #4a3632; // Темний колір з твого футера
  margin-bottom: 20px;
  text-transform: uppercase;
  letter-spacing: 1px;
`;const Y7=C.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  background: var(--second-background);
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 40px;
`,X7=C.input`
    max-width: 700px;

  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 4px;

  outline: none;
    font-size:20px;
  font-weight:400;

  &:focus {
    border-color: var(--brown-color);
  }
`,K7=C.textarea`
    max-width: 700px;

  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 4px;

  min-height: 150px;

  resize: vertical;
  outline: none;
   user-select: text;
    font-size:20px;

  &:focus {
    border-color: var(--brown-color);
  }
`,Q7=C.button`
  font-family: var(--main-font);
  background-color: var(--brown-color);
  color: white;
  padding: 18px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 600;
  font-size:20px;
  transition: opacity 0.2s;
   max-width: 400px;

  &:hover {
    opacity: 0.9;
  }
`,Z7=C.div`
  margin-top: 30px;
`,J7=C.div`
  border-bottom: 1px solid #eee;
  padding: 20px 0;
`,e9=C.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
`,t9=C.span`
  font-weight: bold;
  color: #333;
`,n9=C.span`
  font-size: 12px;
  color: #999;
`,r9=C.p`
  font-size: 15px;
  color: #555;
  margin: 5px 0;
`,o9=C.div`
  margin-top: 15px;
  padding: 15px;
  background: var(--second-background);

  border-left: 3px solid var(--brown-color);
  font-size: 14px;
    border-radius: 0 10px 10px 0;

`,i9=C.div`
  font-weight: bold;
  color: #4a3632;
  margin-bottom: 5px;
  display: flex;
  align-items: center;
  gap: 5px;
  
  &::before {
    content: '●';
    font-size: 10px;
    color: var(--orange-color);
  }
`,Hx=({productId:e,questions:t})=>{const[n,r]=x.useState(""),[o,i]=x.useState(""),a=async l=>{l.preventDefault(),(await fetch("https://backenddidiv-production.up.railway.app/api/questions",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({data:{question:n,userName:o,product:e}})})).ok&&(K.success("Запитання надіслано! Воно з’явиться після модерації."),r(""),i(""))};return u.jsxs(q7,{children:[u.jsx(Un,{autoClose:1500}),u.jsxs(Y7,{onSubmit:a,children:[u.jsx(X7,{placeholder:"Ваше ім'я",value:o,onChange:l=>i(l.target.value),required:!0}),u.jsx(K7,{placeholder:"Запитайте нас про цей товар...",value:n,onChange:l=>r(l.target.value),required:!0}),u.jsx(Q7,{children:"Надіслати запитання"})]}),u.jsx(Z7,{children:t&&t.length>0?t.map(l=>l.answer?u.jsxs(J7,{children:[u.jsxs(e9,{children:[u.jsx(t9,{children:l.userName||"Гість"}),u.jsx(n9,{children:new Date(l.createdAt).toLocaleDateString()})]}),u.jsx(r9,{children:l.question}),u.jsxs(o9,{children:[u.jsx(i9,{children:"Адміністратор"}),u.jsx("p",{children:l.answer})]})]},l.id):null):u.jsx("p",{style:{textAlign:"center",color:"#999"},children:"Запитань поки немає. Будьте першим!"})})]})},a9=()=>{var O,A,N;const{identifier:e}=cw(),[t,n]=x.useState([]),[r,o]=x.useState(1),[i,a]=x.useState("description"),[l,s]=x.useState(null),[c,d]=x.useState(!1),[f,m]=x.useState(0),[p,h]=x.useState(!0),y=!isNaN(e),b=t.find(B=>y?String(B.id)===String(e):B.slug===e);console.log(b,"product"),console.log(b==null?void 0:b.condition,"product.condition");const g=b?Ux().diff(Ux(b.createdAt),"day")<7:!1,w=(B=>{const[z,V]=x.useState(!1);return x.useEffect(()=>{const U=window.matchMedia(B),G=()=>V(U.matches);return G(),U.addEventListener("change",G),()=>U.removeEventListener("change",G)},[B]),z})("(min-width: 768px)"),E=Ye(B=>B.cart.items),S=b?E.find(B=>B.id===b.id):null,P=(S==null?void 0:S.quantity)||0;x.useEffect(()=>{(async()=>{try{h(!0);const z=Dd.stringify({populate:{attributes:{populate:{label:{populate:"*"},value:{populate:"*"}}},features:{populate:{features_label:{populate:"*"},features_value:{populate:"*"}}},category:!0,images:!0},filters:y?{id:{$eq:e}}:{slug:{$eq:e}}},{encodeValuesOnly:!0}),U=await(await fetch(`https://backenddidiv-production.up.railway.app/api/products?${z}`)).json();n(U.data)}catch(z){console.error("Error fetching products:",z)}finally{h(!1)}})()},[e,y]);const k=(b==null?void 0:b.available)??!0,_=(b==null?void 0:b.stock)===0;x.useEffect(()=>{var B,z;b&&b.images&&s((z=(B=b.images)==null?void 0:B[0])==null?void 0:z.url)},[b]);const T=((b==null?void 0:b.images)??[]).map(B=>({src:B.url})),$=()=>{const B=b.images.findIndex(z=>z.url===l);m(B>=0?B:0),d(!0)},I=Lt(),j=Ye(B=>B.favorites.items).some(B=>B.id===(b==null?void 0:b.id)),R=async()=>{if(!_){if(P>=b.stock){K.warning("Товар вже в кошику (досягнуто максимум)");return}if(P+r>b.stock){K.warning(`Доступно лише ${b.stock} шт.`);return}await Hi(b,r,I,K)}},D=(B,z)=>{z.stopPropagation(),jo(B,j,I,K)},F=(b==null?void 0:b.new_price)&&(b==null?void 0:b.new_price)<b.price,L=F?Math.round((b.price-b.new_price)/b.price*100):0;return p?u.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"100vw",height:"100vh"},children:u.jsx($o,{height:100,width:100,radius:5,color:"var(--orange-color)",ariaLabel:"ball-triangle-loading",wrapperStyle:{},wrapperClass:"",visible:!0})}):b?u.jsxs(bx,{children:[" ",u.jsx(Un,{autoClose:1500}),u.jsxs(Gz,{children:[u.jsx(ge,{to:"/",children:"Головна"})," / ",u.jsx(ge,{to:"/catalog",children:"Каталог"})," /"," ",u.jsx(ge,{to:`/catalog/${(O=b.category)==null?void 0:O.title}`,children:(A=b.category)==null?void 0:A.title})," ","/ ",b.name]}),u.jsxs(qz,{children:[u.jsxs(Yz,{children:[u.jsxs("div",{style:{position:"relative"},children:[u.jsx(Kz,{src:l||ur,alt:b.name,onClick:_?void 0:$,style:{filter:_?"grayscale(100%)":"none",opacity:_?.55:1,cursor:_?"default":"pointer"}}),_&&u.jsx(Xz,{children:"ПРОДАНО"})]}),u.jsx(Qz,{children:(b.images??[]).map(B=>{const z=B.url;return u.jsx(Zz,{src:z,onClick:()=>!_&&s(z),style:{cursor:_?"default":"pointer",opacity:l===z?1:.4,filter:_?"grayscale(100%)":"none"}},B.id)})})]}),u.jsx(O7,{open:c,close:()=>d(!1),index:f,slides:T,controller:{closeOnBackdropClick:!0},on:{view:({index:B})=>{var z,V;m(B),(V=(z=b==null?void 0:b.images)==null?void 0:z[B])!=null&&V.url&&s(b.images[B].url)}},plugins:[H7],zoom:{maxZoomPixelRatio:3,zoomInMultiplier:2,doubleTapDelay:300,doubleClickDelay:300,doubleClickEnabled:!0,pinchZoomDistanceFactor:100,scrollToZoom:!0}}),u.jsxs(Jz,{children:[u.jsx(eN,{children:b.name}),u.jsxs(tN,{children:["Артикул: ",b.sku??""]}),u.jsx(nN,{children:g&&u.jsx(oN,{children:"● Новий товар"})}),!k&&u.jsx(rN,{children:"Бронь"}),u.jsxs(iN,{children:[u.jsx(aN,{children:F?u.jsxs(u.Fragment,{children:[u.jsxs(wx,{$discount:!0,children:[b.new_price.toLocaleString()," грн"]}),u.jsxs(sN,{children:[b.price.toLocaleString()," грн"]}),u.jsxs(lN,{children:["-",L,"%"]})]}):u.jsxs(wx,{children:[(N=b.price)==null?void 0:N.toLocaleString()," грн"]})}),u.jsxs(cN,{children:[u.jsxs(uN,{children:[u.jsx("button",{onClick:()=>o(Math.max(1,r-1)),disabled:_,children:"-"}),u.jsx("span",{children:r}),u.jsxs(gN,{$active:r>=b.stock,children:[u.jsx("button",{onClick:()=>o(Math.min(b.stock,r+1)),disabled:_||r>=b.stock,children:"+"}),u.jsxs(W_,{children:["Максимум: ",b.stock]})]})]}),u.jsxs(dN,{onClick:R,disabled:!k||_,children:[" ",u.jsx(Ui,{size:25}),u.jsx("span",{children:"В КОШИК"})]}),u.jsxs(hN,{$active:j,onClick:B=>{_||D(b,B)},disabled:_,children:[u.jsxs(mN,{$active:j,children:[" ",u.jsx("use",{href:`${xn}#icon-heart`})]}),u.jsx("span",{children:"В ОБРАНЕ"})]})]})]})]})]}),!w&&u.jsxs(Cx,{children:[u.jsxs(_x,{children:[u.jsx(ga,{active:i==="description",onClick:()=>a("description"),children:"Опис"}),u.jsx(ga,{active:i==="attributes",onClick:()=>a("attributes"),children:"Характеристики"}),u.jsx(ga,{active:i==="FAQ",onClick:()=>a("FAQ"),children:"Питання та відповіді"})]}),u.jsxs(kx,{children:[i==="description"&&u.jsx(Px,{children:b.description}),i==="attributes"&&u.jsx(Sx,{children:(()=>{const B=(V=[],U=!1)=>V.map(G=>{var Q,ie,re,be;const W=U?(Q=G.features_label)==null?void 0:Q.label:(ie=G.label)==null?void 0:ie.label,Y=U?(re=G.features_value)==null?void 0:re.value:(be=G.value)==null?void 0:be.value;return!W||!Y?null:{id:G.id??`${W}-${Y}`,label:W,value:Y}}).filter(Boolean),z=[...B(b.attributes),...B(b.features,!0),...b.condition?[{id:"condition",label:"Стан",value:b.condition}]:[]];return z.length?z.map((V,U)=>u.jsxs(Ex,{children:[u.jsx("span",{children:V.label}),u.jsx("b",{children:V.value})]},`${V.id}-${U}`)):u.jsx("p",{children:"Характеристики відсутні"})})()}),i==="FAQ"&&u.jsx(Hx,{productId:b.documentId,questions:b.questions})]})]}),w&&u.jsxs(pN,{children:[u.jsxs(Cx,{children:[u.jsxs(_x,{children:[u.jsx(ga,{active:i==="description",onClick:()=>a("description"),children:"Опис"}),u.jsx(ga,{active:i==="FAQ",onClick:()=>a("FAQ"),children:"Питання та відповіді"})]}),u.jsxs(kx,{children:[i==="description"&&u.jsx(Px,{children:b.description}),i==="FAQ"&&u.jsx(Hx,{productId:b.documentId,questions:b.questions})]})]}),u.jsxs(Sx,{children:[u.jsx(fN,{children:" Характеристики"}),(()=>{console.log("FEATURES:",b.features),console.log("ATTRIBUTES:",b.attributes);const B=(G=[],W=!1)=>G.map(Y=>{var re,be,Le,Re;const Q=W?(re=Y.features_label)==null?void 0:re.label:(be=Y.label)==null?void 0:be.label,ie=W?(Le=Y.features_value)==null?void 0:Le.value:(Re=Y.value)==null?void 0:Re.value;return!Q||!ie?null:{id:Y.id??`${Q}-${ie}`,label:Q,value:ie}}).filter(Boolean),z=B(b.attributes),V=B(b.features,!0);console.log(b.condition,"product.condition");const U=[...z,...V,...b.condition?[{id:"condition",label:"Стан",value:b.condition}]:[]];return console.log("ALL SPECS:",U),U.length?U.map((G,W)=>u.jsxs(Ex,{children:[u.jsx("span",{children:G.label}),u.jsx("b",{children:G.value})]},`${G.id}-${W}`)):u.jsx("p",{children:"Характеристики відсутні"})})()]})]})]}):u.jsx(bx,{children:"Товар не знайдено"})};var U0="persist:",Sk="persist/FLUSH",H0="persist/REHYDRATE",Ek="persist/PAUSE",Ck="persist/PERSIST",_k="persist/PURGE",kk="persist/REGISTER",s9=-1;function cc(e){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?cc=function(n){return typeof n}:cc=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},cc(e)}function Gx(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function l9(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Gx(n,!0).forEach(function(r){c9(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Gx(n).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function c9(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u9(e,t,n,r){r.debug;var o=l9({},n);return e&&cc(e)==="object"&&Object.keys(e).forEach(function(i){i!=="_persist"&&t[i]===n[i]&&(o[i]=e[i])}),o}function d9(e){var t=e.blacklist||null,n=e.whitelist||null,r=e.transforms||[],o=e.throttle||0,i="".concat(e.keyPrefix!==void 0?e.keyPrefix:U0).concat(e.key),a=e.storage,l;e.serialize===!1?l=function(S){return S}:typeof e.serialize=="function"?l=e.serialize:l=f9;var s=e.writeFailHandler||null,c={},d={},f=[],m=null,p=null,h=function(S){Object.keys(S).forEach(function(P){g(P)&&c[P]!==S[P]&&f.indexOf(P)===-1&&f.push(P)}),Object.keys(c).forEach(function(P){S[P]===void 0&&g(P)&&f.indexOf(P)===-1&&c[P]!==void 0&&f.push(P)}),m===null&&(m=setInterval(y,o)),c=S};function y(){if(f.length===0){m&&clearInterval(m),m=null;return}var E=f.shift(),S=r.reduce(function(P,k){return k.in(P,E,c)},c[E]);if(S!==void 0)try{d[E]=l(S)}catch(P){console.error("redux-persist/createPersistoid: error serializing state",P)}else delete d[E];f.length===0&&b()}function b(){Object.keys(d).forEach(function(E){c[E]===void 0&&delete d[E]}),p=a.setItem(i,l(d)).catch(v)}function g(E){return!(n&&n.indexOf(E)===-1&&E!=="_persist"||t&&t.indexOf(E)!==-1)}function v(E){s&&s(E)}var w=function(){for(;f.length!==0;)y();return p||Promise.resolve()};return{update:h,flush:w}}function f9(e){return JSON.stringify(e)}function p9(e){var t=e.transforms||[],n="".concat(e.keyPrefix!==void 0?e.keyPrefix:U0).concat(e.key),r=e.storage;e.debug;var o;return e.deserialize===!1?o=function(a){return a}:typeof e.deserialize=="function"?o=e.deserialize:o=h9,r.getItem(n).then(function(i){if(i)try{var a={},l=o(i);return Object.keys(l).forEach(function(s){a[s]=t.reduceRight(function(c,d){return d.out(c,s,l)},o(l[s]))}),a}catch(s){throw s}else return})}function h9(e){return JSON.parse(e)}function m9(e){var t=e.storage,n="".concat(e.keyPrefix!==void 0?e.keyPrefix:U0).concat(e.key);return t.removeItem(n,g9)}function g9(e){}function qx(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function Hn(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?qx(n,!0).forEach(function(r){v9(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):qx(n).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function v9(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function y9(e,t){if(e==null)return{};var n=x9(e,t),r,o;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function x9(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}var b9=5e3;function Pk(e,t){var n=e.version!==void 0?e.version:s9;e.debug;var r=e.stateReconciler===void 0?u9:e.stateReconciler,o=e.getStoredState||p9,i=e.timeout!==void 0?e.timeout:b9,a=null,l=!1,s=!0,c=function(f){return f._persist.rehydrated&&a&&!s&&a.update(f),f};return function(d,f){var m=d||{},p=m._persist,h=y9(m,["_persist"]),y=h;if(f.type===Ck){var b=!1,g=function(_,T){b||(f.rehydrate(e.key,_,T),b=!0)};if(i&&setTimeout(function(){!b&&g(void 0,new Error('redux-persist: persist timed out for persist key "'.concat(e.key,'"')))},i),s=!1,a||(a=d9(e)),p)return Hn({},t(y,f),{_persist:p});if(typeof f.rehydrate!="function"||typeof f.register!="function")throw new Error("redux-persist: either rehydrate or register is not a function on the PERSIST action. This can happen if the action is being replayed. This is an unexplored use case, please open an issue and we will figure out a resolution.");return f.register(e.key),o(e).then(function(k){var _=e.migrate||function(T,$){return Promise.resolve(T)};_(k,n).then(function(T){g(T)},function(T){g(void 0,T)})},function(k){g(void 0,k)}),Hn({},t(y,f),{_persist:{version:n,rehydrated:!1}})}else{if(f.type===_k)return l=!0,f.result(m9(e)),Hn({},t(y,f),{_persist:p});if(f.type===Sk)return f.result(a&&a.flush()),Hn({},t(y,f),{_persist:p});if(f.type===Ek)s=!0;else if(f.type===H0){if(l)return Hn({},y,{_persist:Hn({},p,{rehydrated:!0})});if(f.key===e.key){var v=t(y,f),w=f.payload,E=r!==!1&&w!==void 0?r(w,d,v,e):v,S=Hn({},E,{_persist:Hn({},p,{rehydrated:!0})});return c(S)}}}if(!p)return t(d,f);var P=t(y,f);return P===y?d:c(Hn({},P,{_persist:p}))}}function Yx(e){return E9(e)||S9(e)||w9()}function w9(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function S9(e){if(Symbol.iterator in Object(e)||Object.prototype.toString.call(e)==="[object Arguments]")return Array.from(e)}function E9(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}function Xx(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function Tm(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Xx(n,!0).forEach(function(r){C9(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Xx(n).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function C9(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Ok={registry:[],bootstrapped:!1},_9=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:Ok,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case kk:return Tm({},t,{registry:[].concat(Yx(t.registry),[n.key])});case H0:var r=t.registry.indexOf(n.key),o=Yx(t.registry);return o.splice(r,1),Tm({},t,{registry:o,bootstrapped:o.length===0});default:return t}};function k9(e,t,n){var r=n||!1,o=Zg(_9,Ok,t&&t.enhancer?t.enhancer:void 0),i=function(c){o.dispatch({type:kk,key:c})},a=function(c,d,f){var m={type:H0,payload:d,err:f,key:c};e.dispatch(m),o.dispatch(m),r&&l.getState().bootstrapped&&(r(),r=!1)},l=Tm({},o,{purge:function(){var c=[];return e.dispatch({type:_k,result:function(f){c.push(f)}}),Promise.all(c)},flush:function(){var c=[];return e.dispatch({type:Sk,result:function(f){c.push(f)}}),Promise.all(c)},pause:function(){e.dispatch({type:Ek})},persist:function(){e.dispatch({type:Ck,register:i,rehydrate:a})}});return t&&t.manualPersist||l.persist(),l}var G0={},q0={};q0.__esModule=!0;q0.default=T9;function uc(e){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?uc=function(n){return typeof n}:uc=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},uc(e)}function Pp(){}var P9={getItem:Pp,setItem:Pp,removeItem:Pp};function O9(e){if((typeof self>"u"?"undefined":uc(self))!=="object"||!(e in self))return!1;try{var t=self[e],n="redux-persist ".concat(e," test");t.setItem(n,"test"),t.getItem(n),t.removeItem(n)}catch{return!1}return!0}function T9(e){var t="".concat(e,"Storage");return O9(t)?self[t]:P9}G0.__esModule=!0;G0.default=I9;var j9=$9(q0);function $9(e){return e&&e.__esModule?e:{default:e}}function I9(e){var t=(0,j9.default)(e);return{getItem:function(r){return new Promise(function(o,i){o(t.getItem(r))})},setItem:function(r,o){return new Promise(function(i,a){i(t.setItem(r,o))})},removeItem:function(r){return new Promise(function(o,i){o(t.removeItem(r))})}}}var Y0=void 0,M9=A9(G0);function A9(e){return e&&e.__esModule?e:{default:e}}var D9=(0,M9.default)("local");Y0=D9;const L9={key:"cart",storage:Y0},R9={key:"favorites",storage:Y0},F9=Pk(L9,UI),z9=Pk(R9,NI),Tk=PI({reducer:{cart:F9,favorites:z9},middleware:e=>e({serializableCheck:!1})}),Bd=k9(Tk),N9=C.div`
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

  
`,B9=C.nav`
  font-family: var(--main-font);
  font-size: 14px;
  color: #8c8c8c;
  margin-bottom: 15px;
`,V9=C.h1`
  font-size:24px;
 
  font-weight: 800;
  margin-bottom: 20px;
  @media screen and (min-width: 768px) {
  font-size:30px;
  }
  
`,W9=C.div`
  display: flex;
  flex-direction: column;
  gap: 20px; 
  width: 100%;
  
  @media screen and (min-width:  895px) {
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between; 
  }
`,U9=C.div`
  flex: 1; 
  width: 100%;
  border: 1px solid #eee;
  border-radius: 12px;
`,H9=C.div`
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
  &.unavailable {
  opacity: 0.5;
  filter: grayscale(100%);
}
&.sold-out {
  opacity: 0.65;
}

  @media screen and (min-width: 895px) {
    display: grid;
    grid-template-columns: 100px 1.5fr 230px 80px; 
    align-items: center;
    gap: 20px;
  }
  
`,jk=C.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  padding: 8px 16px;
  border-radius: 6px;

  background: rgba(0, 0, 0, 0.75);
  color: white;

  font-size: 18px;
  font-weight: 700;
  text-transform: uppercase;
  white-space: nowrap;
@media screen and (min-width:895px){
   padding: 3px 9px;
    font-size: 13px;
     font-weight: 400;
}
 `,G9=C.img`
  width: 100%;
  height: auto;
  border-radius: 4px;
`,q9=C.div`
  h3 {
    font-size: 16px;
    font-weight: 300;
    margin: 0;
    line-height: 1.4;
  }
`,Y9=C.div`

  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  gap: 30px;
`,X9=C.div`

  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  gap: 30px;
`;C.div`
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
`;const Vd=C.div`
  text-align: center;
  width: 100px;
 
`,Wd=C.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 2px;
`,Ud=C.span`
  font-size: 18px;
  font-weight: 600;
  color: ${({$discount:e})=>"#111"};
`,Hd=C.span`
  font-size: 13px;
  color: #999;
  text-decoration: line-through;
`,Gd=C.span`
    font-family: var(--second-font);
  position: absolute;
  top: -10px;
  right: -10px;

  font-size: 10px;
  font-weight: 700;
  line-height: 1;

  color: #fff;
  background:var(--red-color);

  padding: 2px 4px;
  border-radius: 6px;

  white-space: nowrap;
`,K9=C.button`
  background: 'none';
  border: 'none';
  cursor: 'pointer';
  color: '#ccc';
`,Q9=C.button`
  background: 'none';
  border: 'none';
  cursor: 'pointer';
  color: '#ccc';


&:disabled {
  cursor: not-allowed;
  opacity: 0.5;
}
`,Z9=C.div`

  background: #fff;
  border: 1px solid #eee;
  border-radius: 12px;
  padding: 24px;

  top: 20px;
  @media screen and (max-width: 895px) {
    width: 100%;
    max-width: 850px;
    padding: 10px;
  }
   @media screen and (min-width:  895pxpx) {
    
   width: 400px;
  
  }
`,J9=C.div`
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
`,eB=C(ge)`
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
`,tB=C.button`
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
  
`;C.svg`
  width: 25px;
  height: 25px;
  fill: ${({$active:e})=>e?"var(--red-color)":"var(--black-color)"};
`;const nB=C.div`
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
`,rB=C.div`
 font-family: var(--main-font);
  font-size: 14px;
  color: #8c8c8c;
  margin-bottom: 15px;
`,oB=C.div`
  background-color: #fdfaf7;
`,iB=C.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 80px 20px;
  background-color: #fdfaf7;
  text-align: center;
  flex: 1;
`;C.h1`
  font-size: 32px;
  color: #333;
  margin-bottom: 40px;
  font-weight: 600;
`;const aB=C.img`
  width: 250px;
  height: auto;
  margin-bottom: 30px;
`,sB=C.h2`
  font-size: 28px;
  color: #333;
  margin-bottom: 10px;
`,lB=C.p`
  font-size: 18px;
  color: #666;
  margin-bottom: 40px;
`,cB=C.button`
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
`,uB=()=>u.jsx(oB,{children:u.jsxs(nB,{children:[u.jsx(rB,{children:"Головна / Кошик"}),u.jsxs(iB,{children:[u.jsx(aB,{src:"/Didiv/empty-cart.png",alt:"Порожній кошик"}),u.jsx(sB,{children:"Ваш кошик порожній"}),u.jsx(lB,{children:"Ви ще не додали жодного товару в кошик"}),u.jsx(cB,{onClick:()=>window.location.href="/Didiv/catalog",children:"Перейти до покупок"})]})]})}),dB=C.div`
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
`,fB=({item:e,cartItem:t,user:n,token:r,disabled:o,isSoldOut:i})=>{const a=Lt(),l=async()=>{if(o)return;const c=e.quantity+1;if(!n){a(t1({id:e.id,stock:e.stock}));return}try{if(!(await fetch(`https://backenddidiv-production.up.railway.app/api/cart-items/${t.documentId}`,{method:"PUT",headers:{"Content-Type":"application/json",Authorization:`Bearer ${r}`},body:JSON.stringify({data:{quantity:c}})})).ok)throw new Error("Не вдалося оновити кількість");a(t1({id:e.id,stock:e.stock}))}catch(d){console.error("Помилка оновлення кількості:",d)}},s=async()=>{if(o)return;const c=e.quantity-1;if(!n){a(n1(e.id));return}try{if(!(await fetch(`https://backenddidiv-production.up.railway.app/api/cart-items/${t.documentId}`,{method:"PUT",headers:{"Content-Type":"application/json",Authorization:`Bearer ${r}`},body:JSON.stringify({data:{quantity:c}})})).ok)throw new Error("Не вдалося оновити кількість");a(n1(e.id))}catch(d){console.error("Помилка оновлення кількості:",d)}};return u.jsxs(dB,{children:[u.jsx("button",{onClick:s,disabled:i||e.quantity<=1,children:"-"}),u.jsx("span",{children:e.quantity}),u.jsx("button",{onClick:l,disabled:i||e.quantity>=e.stock,children:"+"})]})},pB=async(e,t,n)=>{try{const r=await fetch(`https://backenddidiv-production.up.railway.app/api/cart-items?filters[user][id][$eq]=${e}`,{headers:{Authorization:`Bearer ${n}`}});if(!r.ok)throw new Error("Не вдалося отримати товари кошика");const o=await r.json();await Promise.all(o.data.map(async i=>{if(!(await fetch(`https://backenddidiv-production.up.railway.app/api/cart-items/${i.documentId}`,{method:"DELETE",headers:{Authorization:`Bearer ${n}`}})).ok)throw new Error("Не вдалося видалити товар з кошика")})),t(fr())}catch(r){throw console.error("clearCartFromBackend error:",r),r}},hB=C.div`
  color: var(-black-color);
  font-family: var(--main-font);
  width: 100%;
  max-width: 750px;
  padding: 20px;
    padding-left: 10px;
  padding-right: 10px;
  margin: 0 auto;
 
  @media screen and (min-width: 768px) {
    max-width: 994px;
    padding: 30px;
  }
  @media screen and (min-width: 1200px) {
   max-width: 1448px;
  
  }
`,mB=C.div`
  font-family: var(--main-font);
  font-size: 14px;
  color: #8c8c8c;
  margin-bottom: 15px;

  a {
    text-decoration: none;
    color: inherit;
  }
`,gB=C.h1`
color: var(--black-color);
 font-family: var(--main-font);
  font-size: 30px;
  font-weight: 800;
  margin-bottom: 32px;
`,vB=C.div`

   display: flex;
  flex-direction: column;
  gap: 20px; 
  width: 100%;
  
  @media screen and (min-width: 895px) {
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between; 
  }
`,yB=C.div`
   flex: 1; 
  width: 100%;
  border: 1px solid #eee;
  border-radius: 12px;
`,xB=C.div`
position: relative;
    overflow: hidden;
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

  @media screen and (min-width: 895px) {
    display: grid;
    grid-template-columns: 150px 1.5fr 0.7fr; 
    align-items: center;
    gap: 20px;
  }
`,$k=C.div`
   font-family: var(--second-font);
  position: absolute;
  top: 10px;
  right: 10px; 
 font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  padding: 4px 10px;
  border-radius: 20px; 
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.344);
  background: var(--red-color);
  color: #fff;
  z-index: 10;
  @media screen and (max-width: 480px) {
    font-size: 10px;
    padding: 3px 8px;
    top: 8px;
  right: 8px;
  }
`;C.div`
  display: flex;
  align-items: center;
  gap: 20px;
  flex: 1;
`;const bB=C.div`
  position: relative;
`,wB=C.img`
   width: 100%;
  height: auto;
  border-radius: 4px;
`,SB=C.h3`
 font-size: 20px;
    font-weight: 300;
    margin: 0;
    line-height: 1.4;
    @media screen and (max-width: 768px) {
    border-bottom: 1px solid #eee;
    padding-bottom:10px;
  }
    
`,EB=C.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
   @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;C.p`
  font-size: 17px;
  font-weight: 500;
  white-space: nowrap;
  width: 100px;
  text-align: center;
`;const CB=C.div`
  display: flex;
  gap: 16px;
`,Kx=C.button`
  background: none;
  border: none;
  cursor: pointer;
  color: #1a1a1a;
  padding: 8px;
  transition: opacity 0.2s ease;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.4;
  }
`,_B=C.div`
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
  @media screen and (max-width: 895px) {
    width: 100%;
    max-width: 850px;
    padding: 10px;
  }
   @media screen and (min-width: 895px) {
    
   max-width: 400px;
  
  }
`,kB=C.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  font-size: 15px;
  color: #555;
`,PB=C.button`
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
`;C.button`
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
`;const OB=async(e,t,n,r)=>{try{const o=await fetch(`https://backenddidiv-production.up.railway.app/api/cart-items?filters[user][id][$eq]=${t}&filters[product][id][$eq]=${e.id}`,{headers:{Authorization:`Bearer ${r}`}});if(!o.ok)throw new Error("Не вдалося знайти товар у кошику");const a=(await o.json()).data[0];if(!a)throw new Error("Товар у кошику не знайдено");if(!(await fetch(`https://backenddidiv-production.up.railway.app/api/cart-items/${a.documentId}`,{method:"DELETE",headers:{Authorization:`Bearer ${r}`}})).ok)throw new Error("Не вдалося видалити товар");n(OE(e))}catch(o){throw console.error("deleteCartItemFromBackend error:",o),o}},TB=()=>{const e=Lt(),t=et(),n=localStorage.getItem("token"),r=JSON.parse(localStorage.getItem("user")),[o,i]=x.useState([]),a=Ye(S=>S.cart.items),[l,s]=x.useState([]),[c,d]=x.useState([]),[f,m]=x.useState(!0),p=a.filter(S=>S.available!==!1&&S.stock>0).reduce((S,P)=>S+P.quantity,0),h=a.filter(S=>S.available!==!1&&S.stock>0).reduce((S,P)=>S+(P.new_price??P.price)*(P.quantity||1),0),y=Ye(S=>S.favorites.items),b=l.length===0,g=async()=>{localStorage.removeItem("token"),localStorage.removeItem("user"),e(Ls()),e(fr()),s([]),d([]),await Bd.purge(),t("/",{replace:!0})};x.useEffect(()=>{(async()=>{if(!n||!r){s(a),m(!1);return}try{const P=await fetch(`https://backenddidiv-production.up.railway.app/api/cart-items?filters[user][documentId][$eq]=${r.documentId}&populate[product][populate]=*`,{headers:{Authorization:`Bearer ${n}`}});if(P.status===401){g();return}if(!P.ok)throw new Error("Не вдалося отримати кошик");const k=await P.json();d(k.data);const _=k.data.map(T=>T.product?{...T.product,quantity:T.quantity}:null).filter(Boolean);s(_),e(PE(_))}catch(P){console.error(P),K.error("Не вдалося завантажити кошик")}finally{m(!1)}})()},[]),x.useEffect(()=>{s(a)},[a]);const v=(S,P)=>{P.stopPropagation();const k=y.some(_=>_.id===(S==null?void 0:S.id));jo(S,k,e,K)},w=async S=>{i(P=>[...P,S.id]);try{if(!r){setTimeout(()=>{e(OE(S)),i(P=>P.filter(k=>k!==S.id))},300);return}await OB(S,r.id,e,n),setTimeout(()=>{i(P=>P.filter(k=>k!==S.id))},300)}catch{i(k=>k.filter(_=>_!==S.id)),K.error("Не вдалося видалити товар з кошика")}},E=async()=>{if(!r){e(fr()),s([]);return}try{await pB(r.id,e,n),s([])}catch{K.error("Не вдалося очистити кошик")}};return f?u.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"100vw",height:"100vh"},children:u.jsx($o,{height:100,width:100,radius:5,color:"var(--orange-color)",ariaLabel:"ball-triangle-loading",wrapperStyle:{},wrapperClass:"",visible:!0})}):u.jsx(u.Fragment,{children:b?u.jsx(uB,{}):u.jsxs(N9,{children:[u.jsx(Un,{autoClose:1500}),u.jsxs(B9,{children:[" ",u.jsx(ge,{to:"/",style:{color:"inherit",textDecoration:"none"},children:"Головна"})," ","/"," ",u.jsx(ge,{to:"/cart",style:{color:"inherit",textDecoration:"none"},children:"Кошик"})]}),u.jsx(V9,{children:"Кошик"}),u.jsxs(W9,{children:[u.jsx(U9,{children:l.map((S,P)=>{var R,D;const k=c.find(F=>{var L;return((L=F.product)==null?void 0:L.documentId)===S.documentId}),_=y.some(F=>F.id===S.id),T=S.new_price&&S.new_price<S.price,$=(S==null?void 0:S.available)??!0,I=(S==null?void 0:S.stock)===0,M=T?S.new_price:S.price,j=T?Math.round((S.price-S.new_price)/S.price*100):0;return u.jsxs(H9,{className:`
    ${o.includes(S.id)?"removing":""}
    ${$?"":"unavailable"}
    ${I?"sold-out":""}
  `,children:[u.jsxs(oE,{onClick:()=>t(`/product/${S.slug??S.id}`),children:[!$&&u.jsx($k,{children:"Бронь"})," ",I&&u.jsx(jk,{children:"Продано"}),u.jsx(G9,{src:((D=(R=S.images)==null?void 0:R[0])==null?void 0:D.url)||"/nofoto.png",alt:S.name,style:{filter:I?"grayscale(100%)":"none",opacity:I?.55:1},onError:F=>{F.currentTarget.onerror=null,F.currentTarget.src=ur}})]}),u.jsx(q9,{onClick:()=>t(`/product/${S.slug??S.id}`),children:u.jsx("h3",{children:S.name})}),u.jsxs(Y9,{children:[u.jsx(fB,{item:S,cartItem:k,user:r,token:n,disabled:I,isSoldOut:I}),u.jsx(Vd,{children:u.jsxs(Wd,{children:[u.jsxs(Ud,{$discount:T,children:[(M*(S.quantity||1)).toLocaleString()," ","грн"]}),T&&u.jsxs(u.Fragment,{children:[u.jsxs(Hd,{children:[(S.price*(S.quantity||1)).toLocaleString()," ","грн"]}),u.jsxs(Gd,{children:["-",j,"%"]})]})]})})]}),u.jsxs(X9,{children:[u.jsx(Q9,{onClick:F=>{I||v(S,F)},disabled:I,style:{background:"none",border:"none",cursor:"pointer",color:"#ccc"},children:u.jsx(Is,{size:22,fill:_?"#ff4d4f":"none",color:_?"#ff4d4f":"#999"})}),u.jsx(K9,{onClick:()=>w(S),style:{background:"none",border:"none",cursor:"pointer",color:"#000000"},children:u.jsx(X2,{size:22})})]})]},`${S.id}-${P}`)})}),u.jsxs(Z9,{children:[u.jsxs(J9,{children:[u.jsx("span",{children:"Всього в обраному:"}),u.jsxs("strong",{children:[p," шт."]}),u.jsx("span",{children:"На суму:"}),u.jsxs("strong",{children:[h," грн"]})]}),u.jsx(eB,{to:"/checkout",onClick:S=>{p===0&&(S.preventDefault(),K.warning("У кошику немає доступних товарів"))},children:"Оформити замовлення"}),u.jsx(tB,{onClick:E,children:"Oчистити кошик"})]})]})]})})},jB=C.div`
  padding: 20px 40px;
  font-size: 14px;
  color: #8c8c8c;
  background-color: #fdfaf7;
   @media screen and (min-width: 1200px) {
    max-width: 1448px;
   margin-left: auto;
  margin-right: auto;
  }
   a {
    text-decoration: none;
    color: inherit;
  }
`,$B=C.div`
   
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 80px 20px;
  background-color: #fdfaf7;
  text-align: center;
  flex: 1;
`;C.h1`

  font-size: 32px;
  color: #333;
  margin-bottom: 40px;
  font-weight: 600;
 
`;const IB=C.img`
  width: 250px;
  height: auto;
  margin-bottom: 30px;
`;C.h2`
  font-size: 28px;
  color: #333;
  margin-bottom: 10px;
`;const MB=C.p`
  font-size: 18px;
  color: #666;
  margin-bottom: 40px;
`,AB=C.button`
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
`,DB=()=>u.jsxs(u.Fragment,{children:[u.jsxs(jB,{children:[u.jsx(ge,{to:"/",children:"Головна"})," / ",u.jsx(ge,{to:"/favorite",children:"Обране"})," "]}),u.jsxs($B,{children:[u.jsx(IB,{src:"/Didiv/sad.png",alt:"Порожній кошик"}),u.jsx(MB,{children:"Ви ще не додали жодного товару в обране"}),u.jsx(AB,{onClick:()=>window.location.href="/Didiv/catalog",children:"Перейти до вибору"})]})]}),LB=()=>{const e=Lt(),t=et(),n=localStorage.getItem("token"),r=JSON.parse(localStorage.getItem("user")),o=Ye(v=>v.favorites.items),[i,a]=x.useState([]),[l,s]=x.useState(!0),[c,d]=x.useState([]),f=Ye(v=>v.cart.items),m=async()=>{localStorage.removeItem("token"),localStorage.removeItem("user"),e(Ls()),e(fr()),a([]),await Bd.purge(),t("/",{replace:!0})};x.useEffect(()=>{(async()=>{if(!n||!r){a(o),s(!1);return}try{const w=await fetch(`https://backenddidiv-production.up.railway.app/api/favorites?filters[user][documentId][$eq]=${r.documentId}&populate[product][populate]=*`,{headers:{Authorization:`Bearer ${n}`}});if(w.status===401){m();return}if(!w.ok)throw new Error("Не вдалося отримати обране");const S=(await w.json()).data.map(P=>P.product).filter(Boolean);a(S)}catch(w){console.error(w),K.error("Не вдалося завантажити обране"),a(o)}finally{s(!1)}})()},[]);const p=()=>{const v=i.filter(w=>w.available!==!1&&w.stock!==0).map(w=>{const E=f.find(_=>_.id===w.id),S=(E==null?void 0:E.quantity)??0,k=Number(w.stock??0)-S;return k<=0?null:{...w,quantity:k}}).filter(Boolean);if(v.length===0){K.error("Усі товари вже в максимальній кількості");return}e(WI(v)),K.success("Додано максимально доступну кількість товарів")},h=i.filter(v=>v.available!==!1&&v.stock!==0).length,y=i.filter(v=>v.available!==!1&&v.stock>0).reduce((v,w)=>v+(w.new_price??w.price)*(w.quantity||1),0),b=async(v,w)=>{w.stopPropagation();const E=i.some(P=>P.documentId===v.documentId);d(P=>[...P,v.id]),await jo(v,E,e,K)&&E?setTimeout(()=>{a(P=>P.filter(k=>k.documentId!==v.documentId)),d(P=>P.filter(k=>k!==v.id))},300):d(P=>P.filter(k=>k!==v.id))},g=i.length===0;return l?u.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"100vw",height:"100vh"},children:u.jsx($o,{height:100,width:100,radius:5,color:"var(--orange-color)",ariaLabel:"ball-triangle-loading",wrapperStyle:{},wrapperClass:"",visible:!0})}):u.jsx(u.Fragment,{children:g?u.jsx(DB,{}):u.jsxs(hB,{children:[u.jsx(Un,{autoClose:1500}),u.jsxs(mB,{children:[u.jsx(ge,{to:"/",children:"Головна"})," / ",u.jsx(ge,{to:"/favorite",children:"Обране"})," "," "]}),u.jsx(gB,{children:"Обране"}),u.jsxs(vB,{children:[u.jsx(yB,{children:i.map(v=>{var T,$;const w=v.new_price&&v.new_price<v.price,E=w?v.new_price:v.price,S=(v==null?void 0:v.available)??!0,P=(v==null?void 0:v.stock)===0,k=w?Math.round((v.price-v.new_price)/v.price*100):0,_=async I=>{const M=f.find(R=>R.id===I.id);if((M?M.quantity:0)>=I.stock){K.error(`Вибачте, доступно лише ${I.stock} шт.`);return}await Hi(I,1,e,K)};return u.jsxs(xB,{className:c.includes(v.id)?"removing":"",children:[u.jsxs(bB,{onClick:()=>t(`/product/${v.slug??v.id}`),children:[" ",!S&&u.jsx($k,{children:"Бронь"}),P&&u.jsx(jk,{children:"Продано"}),u.jsx(wB,{src:(($=(T=v.images)==null?void 0:T[0])==null?void 0:$.url)||ur,alt:v.name,style:{filter:P?"grayscale(100%)":"none",opacity:P?.55:1},onError:I=>{I.currentTarget.onerror=null}})]}),u.jsx(SB,{onClick:()=>t(`/product/${v.slug??v.id}`),children:v.name}),u.jsxs(EB,{children:[u.jsx(Vd,{children:u.jsxs(Wd,{children:[u.jsxs(Ud,{$discount:w,children:[(E*(v.quantity||1)).toLocaleString()," ","грн"]}),w&&u.jsxs(u.Fragment,{children:[u.jsxs(Hd,{children:[(v.price*(v.quantity||1)).toLocaleString()," ","грн"]}),u.jsxs(Gd,{children:["-",k,"%"]})]})]})}),u.jsxs(CB,{children:[u.jsx(Kx,{onClick:()=>{P||_(v)},disabled:!S||P,children:u.jsx(Ui,{size:30})}),u.jsx(Kx,{onClick:I=>b(v,I),children:u.jsx(X2,{size:30})})]})]})]},v.id)})}),u.jsxs(_B,{children:[u.jsxs(kB,{children:[u.jsx("span",{children:"Всього в обраному:"}),u.jsxs("strong",{children:[h," шт."]}),u.jsx("span",{children:"На суму:"}),u.jsxs("strong",{children:[y," грн"]})]}),u.jsx("hr",{style:{border:"0",borderTop:"1px solid #eee",margin:"20px 0"}}),u.jsx(PB,{onClick:()=>p(),children:"Додати все до кошика"})]})]})]})})},RB=C.div`
  background-color: #fdfaf7;
  min-height: 80vh;
  padding-bottom: 60px;
`,FB=C.div`
  padding: 15px 20px;
  font-size: 12px;
  color: #8c8c8c;

  @media screen and (min-width: 768px) {
    padding: 20px 40px;
    font-size: 14px;
  }
`,zB=C.article`
  max-width: 800px; // Обмежуємо ширину для зручного читання тексту
  margin: 0 auto;
  padding: 0 20px;

  @media screen and (min-width: 768px) {
    padding: 0 40px;
  }
`,NB=C.h1`
  font-size: 28px;
  color: #333;
  margin-bottom: 30px;
  font-weight: 600;

  @media screen and (min-width: 768px) {
    font-size: 36px;
    margin-bottom: 40px;
  }
`;C.section`
  margin-bottom: 30px;
`;C.h2`
  font-size: 20px;
  color: #4a332a; // Колір як у футері для акцентів
  margin-bottom: 15px;
  font-weight: 500;
`;C.p`
  font-size: 16px;
  line-height: 1.6;
  color: #555;
  margin-bottom: 15px;
`;C.ul`
  margin-left: 20px;
  margin-bottom: 15px;
  
  li {
    margin-bottom: 8px;
    color: #555;
    line-height: 1.5;
  }
`;const BB=({title:e,children:t,breadcrumbPath:n})=>u.jsxs(RB,{children:[u.jsxs(FB,{children:["Головна / ",n]}),u.jsxs(zB,{children:[u.jsx(NB,{children:e}),t]})]}),Qx=C.section`
  margin-bottom: 30px;

  @media screen and (min-width: 768px) {
    margin-bottom: 40px;
  }
`,Zx=C.h2`
  font-size: 20px;
  color: #4a332a;
  margin-bottom: 15px;
  font-weight: 600;

  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`,Jx=C.p`
  font-size: 16px;
  line-height: 1.6;
  color: #555;
  margin-bottom: 15px;
`,eb=C.ul`
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
`,VB=()=>u.jsxs(BB,{title:"Оплата і доставка",breadcrumbPath:"Доставка",children:[u.jsxs(Qx,{children:[u.jsx(Zx,{children:"Способи доставки"}),u.jsx(Jx,{children:"Ми доставляємо замовлення по всій Україні за допомогою:"}),u.jsxs(eb,{children:[u.jsx("li",{children:"Нова Пошта (у відділення або кур1єром)"}),u.jsx("li",{children:"Самовивіз з нашого магазину"}),u.jsx("li",{children:"Укрпошта"})]})]}),u.jsxs(Qx,{children:[u.jsx(Zx,{children:"Варіанти оплати"}),u.jsx(Jx,{children:"Ви можете обрати зручний для вас спосіб оплати:"}),u.jsxs(eb,{children:[u.jsx("li",{children:"Оплата карткою на сайті (Visa/Mastercard)"}),u.jsx("li",{children:"Післяплата (накладений платіж) при отриманні"}),u.jsx("li",{children:"Безготівковий розрахунок"})]})]})]});function ko(e){"@babel/helpers - typeof";return ko=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ko(e)}function WB(e,t){if(ko(e)!=="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(ko(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Ik(e){var t=WB(e,"string");return ko(t)==="symbol"?t:String(t)}function Oa(e,t,n){return t=Ik(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function tb(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function ee(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?tb(Object(n),!0).forEach(function(r){Oa(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):tb(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function UB(e){if(Array.isArray(e))return e}function HB(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,o,i,a,l=[],s=!0,c=!1;try{if(i=(n=n.call(e)).next,t===0){if(Object(n)!==n)return;s=!1}else for(;!(s=(r=i.call(n)).done)&&(l.push(r.value),l.length!==t);s=!0);}catch(d){c=!0,o=d}finally{try{if(!s&&n.return!=null&&(a=n.return(),Object(a)!==a))return}finally{if(c)throw o}}return l}}function jm(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Mk(e,t){if(e){if(typeof e=="string")return jm(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return jm(e,t)}}function GB(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function or(e,t){return UB(e)||HB(e,t)||Mk(e,t)||GB()}function qB(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function vr(e,t){if(e==null)return{};var n=qB(e,t),r,o;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var YB=["defaultInputValue","defaultMenuIsOpen","defaultValue","inputValue","menuIsOpen","onChange","onInputChange","onMenuClose","onMenuOpen","value"];function XB(e){var t=e.defaultInputValue,n=t===void 0?"":t,r=e.defaultMenuIsOpen,o=r===void 0?!1:r,i=e.defaultValue,a=i===void 0?null:i,l=e.inputValue,s=e.menuIsOpen,c=e.onChange,d=e.onInputChange,f=e.onMenuClose,m=e.onMenuOpen,p=e.value,h=vr(e,YB),y=x.useState(l!==void 0?l:n),b=or(y,2),g=b[0],v=b[1],w=x.useState(s!==void 0?s:o),E=or(w,2),S=E[0],P=E[1],k=x.useState(p!==void 0?p:a),_=or(k,2),T=_[0],$=_[1],I=x.useCallback(function(O,A){typeof c=="function"&&c(O,A),$(O)},[c]),M=x.useCallback(function(O,A){var N;typeof d=="function"&&(N=d(O,A)),v(N!==void 0?N:O)},[d]),j=x.useCallback(function(){typeof m=="function"&&m(),P(!0)},[m]),R=x.useCallback(function(){typeof f=="function"&&f(),P(!1)},[f]),D=l!==void 0?l:g,F=s!==void 0?s:S,L=p!==void 0?p:T;return ee(ee({},h),{},{inputValue:D,menuIsOpen:F,onChange:I,onInputChange:M,onMenuClose:R,onMenuOpen:j,value:L})}function KB(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function nb(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,Ik(r.key),r)}}function QB(e,t,n){return t&&nb(e.prototype,t),n&&nb(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function $m(e,t){return $m=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,o){return r.__proto__=o,r},$m(e,t)}function ZB(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&$m(e,t)}function fu(e){return fu=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},fu(e)}function JB(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function eV(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function tV(e,t){if(t&&(ko(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return eV(e)}function nV(e){var t=JB();return function(){var r=fu(e),o;if(t){var i=fu(this).constructor;o=Reflect.construct(r,arguments,i)}else o=r.apply(this,arguments);return tV(this,o)}}function rV(e){if(Array.isArray(e))return jm(e)}function oV(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function iV(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function X0(e){return rV(e)||oV(e)||Mk(e)||iV()}function aV(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}const sV=Math.min,lV=Math.max,pu=Math.round,El=Math.floor,hu=e=>({x:e,y:e});function cV(e){const{x:t,y:n,width:r,height:o}=e;return{width:r,height:o,top:n,left:t,right:t+r,bottom:n+o,x:t,y:n}}function qd(){return typeof window<"u"}function Ak(e){return Lk(e)?(e.nodeName||"").toLowerCase():"#document"}function bn(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function Dk(e){var t;return(t=(Lk(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function Lk(e){return qd()?e instanceof Node||e instanceof bn(e).Node:!1}function Im(e){return qd()?e instanceof Element||e instanceof bn(e).Element:!1}function K0(e){return qd()?e instanceof HTMLElement||e instanceof bn(e).HTMLElement:!1}function rb(e){return!qd()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof bn(e).ShadowRoot}function Rk(e){const{overflow:t,overflowX:n,overflowY:r,display:o}=Q0(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&o!=="inline"&&o!=="contents"}let Op;function uV(){return Op==null&&(Op=typeof CSS<"u"&&CSS.supports&&CSS.supports("-webkit-backdrop-filter","none")),Op}function dV(e){return/^(html|body|#document)$/.test(Ak(e))}function Q0(e){return bn(e).getComputedStyle(e)}function fV(e){if(Ak(e)==="html")return e;const t=e.assignedSlot||e.parentNode||rb(e)&&e.host||Dk(e);return rb(t)?t.host:t}function Fk(e){const t=fV(e);return dV(t)?e.ownerDocument?e.ownerDocument.body:e.body:K0(t)&&Rk(t)?t:Fk(t)}function mu(e,t,n){var r;t===void 0&&(t=[]),n===void 0&&(n=!0);const o=Fk(e),i=o===((r=e.ownerDocument)==null?void 0:r.body),a=bn(o);if(i){const l=Mm(a);return t.concat(a,a.visualViewport||[],Rk(o)?o:[],l&&n?mu(l):[])}else return t.concat(o,mu(o,[],n))}function Mm(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function pV(e){const t=Q0(e);let n=parseFloat(t.width)||0,r=parseFloat(t.height)||0;const o=K0(e),i=o?e.offsetWidth:n,a=o?e.offsetHeight:r,l=pu(n)!==i||pu(r)!==a;return l&&(n=i,r=a),{width:n,height:r,$:l}}function Z0(e){return Im(e)?e:e.contextElement}function Tp(e){const t=Z0(e);if(!K0(t))return hu(1);const n=t.getBoundingClientRect(),{width:r,height:o,$:i}=pV(t);let a=(i?pu(n.width):n.width)/r,l=(i?pu(n.height):n.height)/o;return(!a||!Number.isFinite(a))&&(a=1),(!l||!Number.isFinite(l))&&(l=1),{x:a,y:l}}const hV=hu(0);function mV(e){const t=bn(e);return!uV()||!t.visualViewport?hV:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function gV(e,t,n){return t===void 0&&(t=!1),!n||t&&n!==bn(e)?!1:t}function ob(e,t,n,r){t===void 0&&(t=!1),n===void 0&&(n=!1);const o=e.getBoundingClientRect(),i=Z0(e);let a=hu(1);t&&(r?Im(r)&&(a=Tp(r)):a=Tp(e));const l=gV(i,n,r)?mV(i):hu(0);let s=(o.left+l.x)/a.x,c=(o.top+l.y)/a.y,d=o.width/a.x,f=o.height/a.y;if(i){const m=bn(i),p=r&&Im(r)?bn(r):r;let h=m,y=Mm(h);for(;y&&r&&p!==h;){const b=Tp(y),g=y.getBoundingClientRect(),v=Q0(y),w=g.left+(y.clientLeft+parseFloat(v.paddingLeft))*b.x,E=g.top+(y.clientTop+parseFloat(v.paddingTop))*b.y;s*=b.x,c*=b.y,d*=b.x,f*=b.y,s+=w,c+=E,h=bn(y),y=Mm(h)}}return cV({width:d,height:f,x:s,y:c})}function zk(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function vV(e,t){let n=null,r;const o=Dk(e);function i(){var l;clearTimeout(r),(l=n)==null||l.disconnect(),n=null}function a(l,s){l===void 0&&(l=!1),s===void 0&&(s=1),i();const c=e.getBoundingClientRect(),{left:d,top:f,width:m,height:p}=c;if(l||t(),!m||!p)return;const h=El(f),y=El(o.clientWidth-(d+m)),b=El(o.clientHeight-(f+p)),g=El(d),w={rootMargin:-h+"px "+-y+"px "+-b+"px "+-g+"px",threshold:lV(0,sV(1,s))||1};let E=!0;function S(P){const k=P[0].intersectionRatio;if(k!==s){if(!E)return a();k?a(!1,k):r=setTimeout(()=>{a(!1,1e-7)},1e3)}k===1&&!zk(c,e.getBoundingClientRect())&&a(),E=!1}try{n=new IntersectionObserver(S,{...w,root:o.ownerDocument})}catch{n=new IntersectionObserver(S,w)}n.observe(e)}return a(!0),i}function yV(e,t,n,r){r===void 0&&(r={});const{ancestorScroll:o=!0,ancestorResize:i=!0,elementResize:a=typeof ResizeObserver=="function",layoutShift:l=typeof IntersectionObserver=="function",animationFrame:s=!1}=r,c=Z0(e),d=o||i?[...c?mu(c):[],...t?mu(t):[]]:[];d.forEach(g=>{o&&g.addEventListener("scroll",n,{passive:!0}),i&&g.addEventListener("resize",n)});const f=c&&l?vV(c,n):null;let m=-1,p=null;a&&(p=new ResizeObserver(g=>{let[v]=g;v&&v.target===c&&p&&t&&(p.unobserve(t),cancelAnimationFrame(m),m=requestAnimationFrame(()=>{var w;(w=p)==null||w.observe(t)})),n()}),c&&!s&&p.observe(c),t&&p.observe(t));let h,y=s?ob(e):null;s&&b();function b(){const g=ob(e);y&&!zk(y,g)&&n(),y=g,h=requestAnimationFrame(b)}return n(),()=>{var g;d.forEach(v=>{o&&v.removeEventListener("scroll",n),i&&v.removeEventListener("resize",n)}),f==null||f(),(g=p)==null||g.disconnect(),p=null,s&&cancelAnimationFrame(h)}}var Am=x.useLayoutEffect,xV=["className","clearValue","cx","getStyles","getClassNames","getValue","hasValue","isMulti","isRtl","options","selectOption","selectProps","setValue","theme"],gu=function(){};function bV(e,t){return t?t[0]==="-"?e+t:e+"__"+t:e}function wV(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),o=2;o<n;o++)r[o-2]=arguments[o];var i=[].concat(r);if(t&&e)for(var a in t)t.hasOwnProperty(a)&&t[a]&&i.push("".concat(bV(e,a)));return i.filter(function(l){return l}).map(function(l){return String(l).trim()}).join(" ")}var ib=function(t){return jV(t)?t.filter(Boolean):ko(t)==="object"&&t!==null?[t]:[]},Nk=function(t){t.className,t.clearValue,t.cx,t.getStyles,t.getClassNames,t.getValue,t.hasValue,t.isMulti,t.isRtl,t.options,t.selectOption,t.selectProps,t.setValue,t.theme;var n=vr(t,xV);return ee({},n)},De=function(t,n,r){var o=t.cx,i=t.getStyles,a=t.getClassNames,l=t.className;return{css:i(n,t),className:o(r??{},a(n,t),l)}};function Yd(e){return[document.documentElement,document.body,window].indexOf(e)>-1}function SV(e){return Yd(e)?window.innerHeight:e.clientHeight}function Bk(e){return Yd(e)?window.pageYOffset:e.scrollTop}function vu(e,t){if(Yd(e)){window.scrollTo(0,t);return}e.scrollTop=t}function EV(e){var t=getComputedStyle(e),n=t.position==="absolute",r=/(auto|scroll)/;if(t.position==="fixed")return document.documentElement;for(var o=e;o=o.parentElement;)if(t=getComputedStyle(o),!(n&&t.position==="static")&&r.test(t.overflow+t.overflowY+t.overflowX))return o;return document.documentElement}function CV(e,t,n,r){return n*((e=e/r-1)*e*e+1)+t}function Cl(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:200,r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:gu,o=Bk(e),i=t-o,a=10,l=0;function s(){l+=a;var c=CV(l,o,i,n);vu(e,c),l<n?window.requestAnimationFrame(s):r(e)}s()}function ab(e,t){var n=e.getBoundingClientRect(),r=t.getBoundingClientRect(),o=t.offsetHeight/3;r.bottom+o>n.bottom?vu(e,Math.min(t.offsetTop+t.clientHeight-e.offsetHeight+o,e.scrollHeight)):r.top-o<n.top&&vu(e,Math.max(t.offsetTop-o,0))}function _V(e){var t=e.getBoundingClientRect();return{bottom:t.bottom,height:t.height,left:t.left,right:t.right,top:t.top,width:t.width}}function sb(){try{return document.createEvent("TouchEvent"),!0}catch{return!1}}function kV(){try{return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}catch{return!1}}var Vk=!1,PV={get passive(){return Vk=!0}},_l=typeof window<"u"?window:{};_l.addEventListener&&_l.removeEventListener&&(_l.addEventListener("p",gu,PV),_l.removeEventListener("p",gu,!1));var OV=Vk;function TV(e){return e!=null}function jV(e){return Array.isArray(e)}function kl(e,t,n){return e?t:n}var $V=function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];var i=Object.entries(t).filter(function(a){var l=or(a,1),s=l[0];return!r.includes(s)});return i.reduce(function(a,l){var s=or(l,2),c=s[0],d=s[1];return a[c]=d,a},{})},IV=["children","innerProps"],MV=["children","innerProps"];function AV(e){var t=e.maxHeight,n=e.menuEl,r=e.minHeight,o=e.placement,i=e.shouldScroll,a=e.isFixedPosition,l=e.controlHeight,s=EV(n),c={placement:"bottom",maxHeight:t};if(!n||!n.offsetParent)return c;var d=s.getBoundingClientRect(),f=d.height,m=n.getBoundingClientRect(),p=m.bottom,h=m.height,y=m.top,b=n.offsetParent.getBoundingClientRect(),g=b.top,v=a?window.innerHeight:SV(s),w=Bk(s),E=parseInt(getComputedStyle(n).marginBottom,10),S=parseInt(getComputedStyle(n).marginTop,10),P=g-S,k=v-y,_=P+w,T=f-w-y,$=p-v+w+E,I=w+y-S,M=160;switch(o){case"auto":case"bottom":if(k>=h)return{placement:"bottom",maxHeight:t};if(T>=h&&!a)return i&&Cl(s,$,M),{placement:"bottom",maxHeight:t};if(!a&&T>=r||a&&k>=r){i&&Cl(s,$,M);var j=a?k-E:T-E;return{placement:"bottom",maxHeight:j}}if(o==="auto"||a){var R=t,D=a?P:_;return D>=r&&(R=Math.min(D-E-l,t)),{placement:"top",maxHeight:R}}if(o==="bottom")return i&&vu(s,$),{placement:"bottom",maxHeight:t};break;case"top":if(P>=h)return{placement:"top",maxHeight:t};if(_>=h&&!a)return i&&Cl(s,I,M),{placement:"top",maxHeight:t};if(!a&&_>=r||a&&P>=r){var F=t;return(!a&&_>=r||a&&P>=r)&&(F=a?P-S:_-S),i&&Cl(s,I,M),{placement:"top",maxHeight:F}}return{placement:"bottom",maxHeight:t};default:throw new Error('Invalid placement provided "'.concat(o,'".'))}return c}function DV(e){var t={bottom:"top",top:"bottom"};return e?t[e]:"bottom"}var Wk=function(t){return t==="auto"?"bottom":t},LV=function(t,n){var r,o=t.placement,i=t.theme,a=i.borderRadius,l=i.spacing,s=i.colors;return ee((r={label:"menu"},Oa(r,DV(o),"100%"),Oa(r,"position","absolute"),Oa(r,"width","100%"),Oa(r,"zIndex",1),r),n?{}:{backgroundColor:s.neutral0,borderRadius:a,boxShadow:"0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)",marginBottom:l.menuGutter,marginTop:l.menuGutter})},Uk=x.createContext(null),RV=function(t){var n=t.children,r=t.minMenuHeight,o=t.maxMenuHeight,i=t.menuPlacement,a=t.menuPosition,l=t.menuShouldScrollIntoView,s=t.theme,c=x.useContext(Uk)||{},d=c.setPortalPlacement,f=x.useRef(null),m=x.useState(o),p=or(m,2),h=p[0],y=p[1],b=x.useState(null),g=or(b,2),v=g[0],w=g[1],E=s.spacing.controlHeight;return Am(function(){var S=f.current;if(S){var P=a==="fixed",k=l&&!P,_=AV({maxHeight:o,menuEl:S,minHeight:r,placement:i,shouldScroll:k,isFixedPosition:P,controlHeight:E});y(_.maxHeight),w(_.placement),d==null||d(_.placement)}},[o,i,a,l,r,d,E]),n({ref:f,placerProps:ee(ee({},t),{},{placement:v||Wk(i),maxHeight:h})})},FV=function(t){var n=t.children,r=t.innerRef,o=t.innerProps;return J("div",te({},De(t,"menu",{menu:!0}),{ref:r},o),n)},zV=FV,NV=function(t,n){var r=t.maxHeight,o=t.theme.spacing.baseUnit;return ee({maxHeight:r,overflowY:"auto",position:"relative",WebkitOverflowScrolling:"touch"},n?{}:{paddingBottom:o,paddingTop:o})},BV=function(t){var n=t.children,r=t.innerProps,o=t.innerRef,i=t.isMulti;return J("div",te({},De(t,"menuList",{"menu-list":!0,"menu-list--is-multi":i}),{ref:o},r),n)},Hk=function(t,n){var r=t.theme,o=r.spacing.baseUnit,i=r.colors;return ee({textAlign:"center"},n?{}:{color:i.neutral40,padding:"".concat(o*2,"px ").concat(o*3,"px")})},VV=Hk,WV=Hk,UV=function(t){var n=t.children,r=n===void 0?"No options":n,o=t.innerProps,i=vr(t,IV);return J("div",te({},De(ee(ee({},i),{},{children:r,innerProps:o}),"noOptionsMessage",{"menu-notice":!0,"menu-notice--no-options":!0}),o),r)},HV=function(t){var n=t.children,r=n===void 0?"Loading...":n,o=t.innerProps,i=vr(t,MV);return J("div",te({},De(ee(ee({},i),{},{children:r,innerProps:o}),"loadingMessage",{"menu-notice":!0,"menu-notice--loading":!0}),o),r)},GV=function(t){var n=t.rect,r=t.offset,o=t.position;return{left:n.left,position:o,top:r,width:n.width,zIndex:1}},qV=function(t){var n=t.appendTo,r=t.children,o=t.controlElement,i=t.innerProps,a=t.menuPlacement,l=t.menuPosition,s=x.useRef(null),c=x.useRef(null),d=x.useState(Wk(a)),f=or(d,2),m=f[0],p=f[1],h=x.useMemo(function(){return{setPortalPlacement:p}},[]),y=x.useState(null),b=or(y,2),g=b[0],v=b[1],w=x.useCallback(function(){if(o){var k=_V(o),_=l==="fixed"?0:window.pageYOffset,T=k[m]+_;(T!==(g==null?void 0:g.offset)||k.left!==(g==null?void 0:g.rect.left)||k.width!==(g==null?void 0:g.rect.width))&&v({offset:T,rect:k})}},[o,l,m,g==null?void 0:g.offset,g==null?void 0:g.rect.left,g==null?void 0:g.rect.width]);Am(function(){w()},[w]);var E=x.useCallback(function(){typeof c.current=="function"&&(c.current(),c.current=null),o&&s.current&&(c.current=yV(o,s.current,w,{elementResize:"ResizeObserver"in window}))},[o,w]);Am(function(){E()},[E]);var S=x.useCallback(function(k){s.current=k,E()},[E]);if(!n&&l!=="fixed"||!g)return null;var P=J("div",te({ref:S},De(ee(ee({},t),{},{offset:g.offset,position:l,rect:g.rect}),"menuPortal",{"menu-portal":!0}),i),r);return J(Uk.Provider,{value:h},n?Ru.createPortal(P,n):P)},YV=function(t){var n=t.isDisabled,r=t.isRtl;return{label:"container",direction:r?"rtl":void 0,pointerEvents:n?"none":void 0,position:"relative"}},XV=function(t){var n=t.children,r=t.innerProps,o=t.isDisabled,i=t.isRtl;return J("div",te({},De(t,"container",{"--is-disabled":o,"--is-rtl":i}),r),n)},KV=function(t,n){var r=t.theme.spacing,o=t.isMulti,i=t.hasValue,a=t.selectProps.controlShouldRenderValue;return ee({alignItems:"center",display:o&&i&&a?"flex":"grid",flex:1,flexWrap:"wrap",WebkitOverflowScrolling:"touch",position:"relative",overflow:"hidden"},n?{}:{padding:"".concat(r.baseUnit/2,"px ").concat(r.baseUnit*2,"px")})},QV=function(t){var n=t.children,r=t.innerProps,o=t.isMulti,i=t.hasValue;return J("div",te({},De(t,"valueContainer",{"value-container":!0,"value-container--is-multi":o,"value-container--has-value":i}),r),n)},ZV=function(){return{alignItems:"center",alignSelf:"stretch",display:"flex",flexShrink:0}},JV=function(t){var n=t.children,r=t.innerProps;return J("div",te({},De(t,"indicatorsContainer",{indicators:!0}),r),n)},lb,eW=["size"],tW=["innerProps","isRtl","size"],nW={name:"8mmkcg",styles:"display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0"},Gk=function(t){var n=t.size,r=vr(t,eW);return J("svg",te({height:n,width:n,viewBox:"0 0 20 20","aria-hidden":"true",focusable:"false",css:nW},r))},J0=function(t){return J(Gk,te({size:20},t),J("path",{d:"M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"}))},qk=function(t){return J(Gk,te({size:20},t),J("path",{d:"M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"}))},Yk=function(t,n){var r=t.isFocused,o=t.theme,i=o.spacing.baseUnit,a=o.colors;return ee({label:"indicatorContainer",display:"flex",transition:"color 150ms"},n?{}:{color:r?a.neutral60:a.neutral20,padding:i*2,":hover":{color:r?a.neutral80:a.neutral40}})},rW=Yk,oW=function(t){var n=t.children,r=t.innerProps;return J("div",te({},De(t,"dropdownIndicator",{indicator:!0,"dropdown-indicator":!0}),r),n||J(qk,null))},iW=Yk,aW=function(t){var n=t.children,r=t.innerProps;return J("div",te({},De(t,"clearIndicator",{indicator:!0,"clear-indicator":!0}),r),n||J(J0,null))},sW=function(t,n){var r=t.isDisabled,o=t.theme,i=o.spacing.baseUnit,a=o.colors;return ee({label:"indicatorSeparator",alignSelf:"stretch",width:1},n?{}:{backgroundColor:r?a.neutral10:a.neutral20,marginBottom:i*2,marginTop:i*2})},lW=function(t){var n=t.innerProps;return J("span",te({},n,De(t,"indicatorSeparator",{"indicator-separator":!0})))},cW=WM(lb||(lb=aV([`
  0%, 80%, 100% { opacity: 0; }
  40% { opacity: 1; }
`]))),uW=function(t,n){var r=t.isFocused,o=t.size,i=t.theme,a=i.colors,l=i.spacing.baseUnit;return ee({label:"loadingIndicator",display:"flex",transition:"color 150ms",alignSelf:"center",fontSize:o,lineHeight:1,marginRight:o,textAlign:"center",verticalAlign:"middle"},n?{}:{color:r?a.neutral60:a.neutral20,padding:l*2})},jp=function(t){var n=t.delay,r=t.offset;return J("span",{css:d0({animation:"".concat(cW," 1s ease-in-out ").concat(n,"ms infinite;"),backgroundColor:"currentColor",borderRadius:"1em",display:"inline-block",marginLeft:r?"1em":void 0,height:"1em",verticalAlign:"top",width:"1em"},"","")})},dW=function(t){var n=t.innerProps,r=t.isRtl,o=t.size,i=o===void 0?4:o,a=vr(t,tW);return J("div",te({},De(ee(ee({},a),{},{innerProps:n,isRtl:r,size:i}),"loadingIndicator",{indicator:!0,"loading-indicator":!0}),n),J(jp,{delay:0,offset:r}),J(jp,{delay:160,offset:!0}),J(jp,{delay:320,offset:!r}))},fW=function(t,n){var r=t.isDisabled,o=t.isFocused,i=t.theme,a=i.colors,l=i.borderRadius,s=i.spacing;return ee({label:"control",alignItems:"center",cursor:"default",display:"flex",flexWrap:"wrap",justifyContent:"space-between",minHeight:s.controlHeight,outline:"0 !important",position:"relative",transition:"all 100ms"},n?{}:{backgroundColor:r?a.neutral5:a.neutral0,borderColor:r?a.neutral10:o?a.primary:a.neutral20,borderRadius:l,borderStyle:"solid",borderWidth:1,boxShadow:o?"0 0 0 1px ".concat(a.primary):void 0,"&:hover":{borderColor:o?a.primary:a.neutral30}})},pW=function(t){var n=t.children,r=t.isDisabled,o=t.isFocused,i=t.innerRef,a=t.innerProps,l=t.menuIsOpen;return J("div",te({ref:i},De(t,"control",{control:!0,"control--is-disabled":r,"control--is-focused":o,"control--menu-is-open":l}),a,{"aria-disabled":r||void 0}),n)},hW=pW,mW=["data"],gW=function(t,n){var r=t.theme.spacing;return n?{}:{paddingBottom:r.baseUnit*2,paddingTop:r.baseUnit*2}},vW=function(t){var n=t.children,r=t.cx,o=t.getStyles,i=t.getClassNames,a=t.Heading,l=t.headingProps,s=t.innerProps,c=t.label,d=t.theme,f=t.selectProps;return J("div",te({},De(t,"group",{group:!0}),s),J(a,te({},l,{selectProps:f,theme:d,getStyles:o,getClassNames:i,cx:r}),c),J("div",null,n))},yW=function(t,n){var r=t.theme,o=r.colors,i=r.spacing;return ee({label:"group",cursor:"default",display:"block"},n?{}:{color:o.neutral40,fontSize:"75%",fontWeight:500,marginBottom:"0.25em",paddingLeft:i.baseUnit*3,paddingRight:i.baseUnit*3,textTransform:"uppercase"})},xW=function(t){var n=Nk(t);n.data;var r=vr(n,mW);return J("div",te({},De(t,"groupHeading",{"group-heading":!0}),r))},bW=vW,wW=["innerRef","isDisabled","isHidden","inputClassName"],SW=function(t,n){var r=t.isDisabled,o=t.value,i=t.theme,a=i.spacing,l=i.colors;return ee(ee({visibility:r?"hidden":"visible",transform:o?"translateZ(0)":""},EW),n?{}:{margin:a.baseUnit/2,paddingBottom:a.baseUnit/2,paddingTop:a.baseUnit/2,color:l.neutral80})},Xk={gridArea:"1 / 2",font:"inherit",minWidth:"2px",border:0,margin:0,outline:0,padding:0},EW={flex:"1 1 auto",display:"inline-grid",gridArea:"1 / 1 / 2 / 3",gridTemplateColumns:"0 min-content","&:after":ee({content:'attr(data-value) " "',visibility:"hidden",whiteSpace:"pre"},Xk)},CW=function(t){return ee({label:"input",color:"inherit",background:0,opacity:t?0:1,width:"100%"},Xk)},_W=function(t){var n=t.cx,r=t.value,o=Nk(t),i=o.innerRef,a=o.isDisabled,l=o.isHidden,s=o.inputClassName,c=vr(o,wW);return J("div",te({},De(t,"input",{"input-container":!0}),{"data-value":r||""}),J("input",te({className:n({input:!0},s),ref:i,style:CW(l),disabled:a},c)))},kW=_W,PW=function(t,n){var r=t.theme,o=r.spacing,i=r.borderRadius,a=r.colors;return ee({label:"multiValue",display:"flex",minWidth:0},n?{}:{backgroundColor:a.neutral10,borderRadius:i/2,margin:o.baseUnit/2})},OW=function(t,n){var r=t.theme,o=r.borderRadius,i=r.colors,a=t.cropWithEllipsis;return ee({overflow:"hidden",textOverflow:a||a===void 0?"ellipsis":void 0,whiteSpace:"nowrap"},n?{}:{borderRadius:o/2,color:i.neutral80,fontSize:"85%",padding:3,paddingLeft:6})},TW=function(t,n){var r=t.theme,o=r.spacing,i=r.borderRadius,a=r.colors,l=t.isFocused;return ee({alignItems:"center",display:"flex"},n?{}:{borderRadius:i/2,backgroundColor:l?a.dangerLight:void 0,paddingLeft:o.baseUnit,paddingRight:o.baseUnit,":hover":{backgroundColor:a.dangerLight,color:a.danger}})},Kk=function(t){var n=t.children,r=t.innerProps;return J("div",r,n)},jW=Kk,$W=Kk;function IW(e){var t=e.children,n=e.innerProps;return J("div",te({role:"button"},n),t||J(J0,{size:14}))}var MW=function(t){var n=t.children,r=t.components,o=t.data,i=t.innerProps,a=t.isDisabled,l=t.removeProps,s=t.selectProps,c=r.Container,d=r.Label,f=r.Remove;return J(c,{data:o,innerProps:ee(ee({},De(t,"multiValue",{"multi-value":!0,"multi-value--is-disabled":a})),i),selectProps:s},J(d,{data:o,innerProps:ee({},De(t,"multiValueLabel",{"multi-value__label":!0})),selectProps:s},n),J(f,{data:o,innerProps:ee(ee({},De(t,"multiValueRemove",{"multi-value__remove":!0})),{},{"aria-label":"Remove ".concat(n||"option")},l),selectProps:s}))},AW=MW,DW=function(t,n){var r=t.isDisabled,o=t.isFocused,i=t.isSelected,a=t.theme,l=a.spacing,s=a.colors;return ee({label:"option",cursor:"default",display:"block",fontSize:"inherit",width:"100%",userSelect:"none",WebkitTapHighlightColor:"rgba(0, 0, 0, 0)"},n?{}:{backgroundColor:i?s.primary:o?s.primary25:"transparent",color:r?s.neutral20:i?s.neutral0:"inherit",padding:"".concat(l.baseUnit*2,"px ").concat(l.baseUnit*3,"px"),":active":{backgroundColor:r?void 0:i?s.primary:s.primary50}})},LW=function(t){var n=t.children,r=t.isDisabled,o=t.isFocused,i=t.isSelected,a=t.innerRef,l=t.innerProps;return J("div",te({},De(t,"option",{option:!0,"option--is-disabled":r,"option--is-focused":o,"option--is-selected":i}),{ref:a,"aria-disabled":r},l),n)},RW=LW,FW=function(t,n){var r=t.theme,o=r.spacing,i=r.colors;return ee({label:"placeholder",gridArea:"1 / 1 / 2 / 3"},n?{}:{color:i.neutral50,marginLeft:o.baseUnit/2,marginRight:o.baseUnit/2})},zW=function(t){var n=t.children,r=t.innerProps;return J("div",te({},De(t,"placeholder",{placeholder:!0}),r),n)},NW=zW,BW=function(t,n){var r=t.isDisabled,o=t.theme,i=o.spacing,a=o.colors;return ee({label:"singleValue",gridArea:"1 / 1 / 2 / 3",maxWidth:"100%",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},n?{}:{color:r?a.neutral40:a.neutral80,marginLeft:i.baseUnit/2,marginRight:i.baseUnit/2})},VW=function(t){var n=t.children,r=t.isDisabled,o=t.innerProps;return J("div",te({},De(t,"singleValue",{"single-value":!0,"single-value--is-disabled":r}),o),n)},WW=VW,UW={ClearIndicator:aW,Control:hW,DropdownIndicator:oW,DownChevron:qk,CrossIcon:J0,Group:bW,GroupHeading:xW,IndicatorsContainer:JV,IndicatorSeparator:lW,Input:kW,LoadingIndicator:dW,Menu:zV,MenuList:BV,MenuPortal:qV,LoadingMessage:HV,NoOptionsMessage:UV,MultiValue:AW,MultiValueContainer:jW,MultiValueLabel:$W,MultiValueRemove:IW,Option:RW,Placeholder:NW,SelectContainer:XV,SingleValue:WW,ValueContainer:QV},HW=function(t){return ee(ee({},UW),t.components)},cb=Number.isNaN||function(t){return typeof t=="number"&&t!==t};function GW(e,t){return!!(e===t||cb(e)&&cb(t))}function qW(e,t){if(e.length!==t.length)return!1;for(var n=0;n<e.length;n++)if(!GW(e[n],t[n]))return!1;return!0}function YW(e,t){t===void 0&&(t=qW);var n=null;function r(){for(var o=[],i=0;i<arguments.length;i++)o[i]=arguments[i];if(n&&n.lastThis===this&&t(o,n.lastArgs))return n.lastResult;var a=e.apply(this,o);return n={lastResult:a,lastArgs:o,lastThis:this},a}return r.clear=function(){n=null},r}var XW={name:"7pg0cj-a11yText",styles:"label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap"},KW=function(t){return J("span",te({css:XW},t))},ub=KW,QW={guidance:function(t){var n=t.isSearchable,r=t.isMulti,o=t.tabSelectsValue,i=t.context,a=t.isInitialFocus;switch(i){case"menu":return"Use Up and Down to choose options, press Enter to select the currently focused option, press Escape to exit the menu".concat(o?", press Tab to select the option and exit the menu":"",".");case"input":return a?"".concat(t["aria-label"]||"Select"," is focused ").concat(n?",type to refine list":"",", press Down to open the menu, ").concat(r?" press left to focus selected values":""):"";case"value":return"Use left and right to toggle between focused values, press Backspace to remove the currently focused value";default:return""}},onChange:function(t){var n=t.action,r=t.label,o=r===void 0?"":r,i=t.labels,a=t.isDisabled;switch(n){case"deselect-option":case"pop-value":case"remove-value":return"option ".concat(o,", deselected.");case"clear":return"All selected options have been cleared.";case"initial-input-focus":return"option".concat(i.length>1?"s":""," ").concat(i.join(","),", selected.");case"select-option":return a?"option ".concat(o," is disabled. Select another option."):"option ".concat(o,", selected.");default:return""}},onFocus:function(t){var n=t.context,r=t.focused,o=t.options,i=t.label,a=i===void 0?"":i,l=t.selectValue,s=t.isDisabled,c=t.isSelected,d=t.isAppleDevice,f=function(y,b){return y&&y.length?"".concat(y.indexOf(b)+1," of ").concat(y.length):""};if(n==="value"&&l)return"value ".concat(a," focused, ").concat(f(l,r),".");if(n==="menu"&&d){var m=s?" disabled":"",p="".concat(c?" selected":"").concat(m);return"".concat(a).concat(p,", ").concat(f(o,r),".")}return""},onFilter:function(t){var n=t.inputValue,r=t.resultsMessage;return"".concat(r).concat(n?" for search term "+n:"",".")}},ZW=function(t){var n=t.ariaSelection,r=t.focusedOption,o=t.focusedValue,i=t.focusableOptions,a=t.isFocused,l=t.selectValue,s=t.selectProps,c=t.id,d=t.isAppleDevice,f=s.ariaLiveMessages,m=s.getOptionLabel,p=s.inputValue,h=s.isMulti,y=s.isOptionDisabled,b=s.isSearchable,g=s.menuIsOpen,v=s.options,w=s.screenReaderStatus,E=s.tabSelectsValue,S=s.isLoading,P=s["aria-label"],k=s["aria-live"],_=x.useMemo(function(){return ee(ee({},QW),f||{})},[f]),T=x.useMemo(function(){var D="";if(n&&_.onChange){var F=n.option,L=n.options,O=n.removedValue,A=n.removedValues,N=n.value,B=function(Q){return Array.isArray(Q)?null:Q},z=O||F||B(N),V=z?m(z):"",U=L||A||void 0,G=U?U.map(m):[],W=ee({isDisabled:z&&y(z,l),label:V,labels:G},n);D=_.onChange(W)}return D},[n,_,y,l,m]),$=x.useMemo(function(){var D="",F=r||o,L=!!(r&&l&&l.includes(r));if(F&&_.onFocus){var O={focused:F,label:m(F),isDisabled:y(F,l),isSelected:L,options:i,context:F===r?"menu":"value",selectValue:l,isAppleDevice:d};D=_.onFocus(O)}return D},[r,o,m,y,_,i,l,d]),I=x.useMemo(function(){var D="";if(g&&v.length&&!S&&_.onFilter){var F=w({count:i.length});D=_.onFilter({inputValue:p,resultsMessage:F})}return D},[i,p,g,_,v,w,S]),M=(n==null?void 0:n.action)==="initial-input-focus",j=x.useMemo(function(){var D="";if(_.guidance){var F=o?"value":g?"menu":"input";D=_.guidance({"aria-label":P,context:F,isDisabled:r&&y(r,l),isMulti:h,isSearchable:b,tabSelectsValue:E,isInitialFocus:M})}return D},[P,r,o,h,y,b,g,_,l,E,M]),R=J(x.Fragment,null,J("span",{id:"aria-selection"},T),J("span",{id:"aria-focused"},$),J("span",{id:"aria-results"},I),J("span",{id:"aria-guidance"},j));return J(x.Fragment,null,J(ub,{id:c},M&&R),J(ub,{"aria-live":k,"aria-atomic":"false","aria-relevant":"additions text",role:"log"},a&&!M&&R))},JW=ZW,Dm=[{base:"A",letters:"AⒶＡÀÁÂẦẤẪẨÃĀĂẰẮẴẲȦǠÄǞẢÅǺǍȀȂẠẬẶḀĄȺⱯ"},{base:"AA",letters:"Ꜳ"},{base:"AE",letters:"ÆǼǢ"},{base:"AO",letters:"Ꜵ"},{base:"AU",letters:"Ꜷ"},{base:"AV",letters:"ꜸꜺ"},{base:"AY",letters:"Ꜽ"},{base:"B",letters:"BⒷＢḂḄḆɃƂƁ"},{base:"C",letters:"CⒸＣĆĈĊČÇḈƇȻꜾ"},{base:"D",letters:"DⒹＤḊĎḌḐḒḎĐƋƊƉꝹ"},{base:"DZ",letters:"ǱǄ"},{base:"Dz",letters:"ǲǅ"},{base:"E",letters:"EⒺＥÈÉÊỀẾỄỂẼĒḔḖĔĖËẺĚȄȆẸỆȨḜĘḘḚƐƎ"},{base:"F",letters:"FⒻＦḞƑꝻ"},{base:"G",letters:"GⒼＧǴĜḠĞĠǦĢǤƓꞠꝽꝾ"},{base:"H",letters:"HⒽＨĤḢḦȞḤḨḪĦⱧⱵꞍ"},{base:"I",letters:"IⒾＩÌÍÎĨĪĬİÏḮỈǏȈȊỊĮḬƗ"},{base:"J",letters:"JⒿＪĴɈ"},{base:"K",letters:"KⓀＫḰǨḲĶḴƘⱩꝀꝂꝄꞢ"},{base:"L",letters:"LⓁＬĿĹĽḶḸĻḼḺŁȽⱢⱠꝈꝆꞀ"},{base:"LJ",letters:"Ǉ"},{base:"Lj",letters:"ǈ"},{base:"M",letters:"MⓂＭḾṀṂⱮƜ"},{base:"N",letters:"NⓃＮǸŃÑṄŇṆŅṊṈȠƝꞐꞤ"},{base:"NJ",letters:"Ǌ"},{base:"Nj",letters:"ǋ"},{base:"O",letters:"OⓄＯÒÓÔỒỐỖỔÕṌȬṎŌṐṒŎȮȰÖȪỎŐǑȌȎƠỜỚỠỞỢỌỘǪǬØǾƆƟꝊꝌ"},{base:"OI",letters:"Ƣ"},{base:"OO",letters:"Ꝏ"},{base:"OU",letters:"Ȣ"},{base:"P",letters:"PⓅＰṔṖƤⱣꝐꝒꝔ"},{base:"Q",letters:"QⓆＱꝖꝘɊ"},{base:"R",letters:"RⓇＲŔṘŘȐȒṚṜŖṞɌⱤꝚꞦꞂ"},{base:"S",letters:"SⓈＳẞŚṤŜṠŠṦṢṨȘŞⱾꞨꞄ"},{base:"T",letters:"TⓉＴṪŤṬȚŢṰṮŦƬƮȾꞆ"},{base:"TZ",letters:"Ꜩ"},{base:"U",letters:"UⓊＵÙÚÛŨṸŪṺŬÜǛǗǕǙỦŮŰǓȔȖƯỪỨỮỬỰỤṲŲṶṴɄ"},{base:"V",letters:"VⓋＶṼṾƲꝞɅ"},{base:"VY",letters:"Ꝡ"},{base:"W",letters:"WⓌＷẀẂŴẆẄẈⱲ"},{base:"X",letters:"XⓍＸẊẌ"},{base:"Y",letters:"YⓎＹỲÝŶỸȲẎŸỶỴƳɎỾ"},{base:"Z",letters:"ZⓏＺŹẐŻŽẒẔƵȤⱿⱫꝢ"},{base:"a",letters:"aⓐａẚàáâầấẫẩãāăằắẵẳȧǡäǟảåǻǎȁȃạậặḁąⱥɐ"},{base:"aa",letters:"ꜳ"},{base:"ae",letters:"æǽǣ"},{base:"ao",letters:"ꜵ"},{base:"au",letters:"ꜷ"},{base:"av",letters:"ꜹꜻ"},{base:"ay",letters:"ꜽ"},{base:"b",letters:"bⓑｂḃḅḇƀƃɓ"},{base:"c",letters:"cⓒｃćĉċčçḉƈȼꜿↄ"},{base:"d",letters:"dⓓｄḋďḍḑḓḏđƌɖɗꝺ"},{base:"dz",letters:"ǳǆ"},{base:"e",letters:"eⓔｅèéêềếễểẽēḕḗĕėëẻěȅȇẹệȩḝęḙḛɇɛǝ"},{base:"f",letters:"fⓕｆḟƒꝼ"},{base:"g",letters:"gⓖｇǵĝḡğġǧģǥɠꞡᵹꝿ"},{base:"h",letters:"hⓗｈĥḣḧȟḥḩḫẖħⱨⱶɥ"},{base:"hv",letters:"ƕ"},{base:"i",letters:"iⓘｉìíîĩīĭïḯỉǐȉȋịįḭɨı"},{base:"j",letters:"jⓙｊĵǰɉ"},{base:"k",letters:"kⓚｋḱǩḳķḵƙⱪꝁꝃꝅꞣ"},{base:"l",letters:"lⓛｌŀĺľḷḹļḽḻſłƚɫⱡꝉꞁꝇ"},{base:"lj",letters:"ǉ"},{base:"m",letters:"mⓜｍḿṁṃɱɯ"},{base:"n",letters:"nⓝｎǹńñṅňṇņṋṉƞɲŉꞑꞥ"},{base:"nj",letters:"ǌ"},{base:"o",letters:"oⓞｏòóôồốỗổõṍȭṏōṑṓŏȯȱöȫỏőǒȍȏơờớỡởợọộǫǭøǿɔꝋꝍɵ"},{base:"oi",letters:"ƣ"},{base:"ou",letters:"ȣ"},{base:"oo",letters:"ꝏ"},{base:"p",letters:"pⓟｐṕṗƥᵽꝑꝓꝕ"},{base:"q",letters:"qⓠｑɋꝗꝙ"},{base:"r",letters:"rⓡｒŕṙřȑȓṛṝŗṟɍɽꝛꞧꞃ"},{base:"s",letters:"sⓢｓßśṥŝṡšṧṣṩșşȿꞩꞅẛ"},{base:"t",letters:"tⓣｔṫẗťṭțţṱṯŧƭʈⱦꞇ"},{base:"tz",letters:"ꜩ"},{base:"u",letters:"uⓤｕùúûũṹūṻŭüǜǘǖǚủůűǔȕȗưừứữửựụṳųṷṵʉ"},{base:"v",letters:"vⓥｖṽṿʋꝟʌ"},{base:"vy",letters:"ꝡ"},{base:"w",letters:"wⓦｗẁẃŵẇẅẘẉⱳ"},{base:"x",letters:"xⓧｘẋẍ"},{base:"y",letters:"yⓨｙỳýŷỹȳẏÿỷẙỵƴɏỿ"},{base:"z",letters:"zⓩｚźẑżžẓẕƶȥɀⱬꝣ"}],eU=new RegExp("["+Dm.map(function(e){return e.letters}).join("")+"]","g"),Qk={};for(var $p=0;$p<Dm.length;$p++)for(var Ip=Dm[$p],Mp=0;Mp<Ip.letters.length;Mp++)Qk[Ip.letters[Mp]]=Ip.base;var Zk=function(t){return t.replace(eU,function(n){return Qk[n]})},tU=YW(Zk),db=function(t){return t.replace(/^\s+|\s+$/g,"")},nU=function(t){return"".concat(t.label," ").concat(t.value)},rU=function(t){return function(n,r){if(n.data.__isNew__)return!0;var o=ee({ignoreCase:!0,ignoreAccents:!0,stringify:nU,trim:!0,matchFrom:"any"},t),i=o.ignoreCase,a=o.ignoreAccents,l=o.stringify,s=o.trim,c=o.matchFrom,d=s?db(r):r,f=s?db(l(n)):l(n);return i&&(d=d.toLowerCase(),f=f.toLowerCase()),a&&(d=tU(d),f=Zk(f)),c==="start"?f.substr(0,d.length)===d:f.indexOf(d)>-1}},oU=["innerRef"];function iU(e){var t=e.innerRef,n=vr(e,oU),r=$V(n,"onExited","in","enter","exit","appear");return J("input",te({ref:t},r,{css:d0({label:"dummyInput",background:0,border:0,caretColor:"transparent",fontSize:"inherit",gridArea:"1 / 1 / 2 / 3",outline:0,padding:0,width:1,color:"transparent",left:-100,opacity:0,position:"relative",transform:"scale(.01)"},"","")}))}var aU=function(t){t.cancelable&&t.preventDefault(),t.stopPropagation()};function sU(e){var t=e.isEnabled,n=e.onBottomArrive,r=e.onBottomLeave,o=e.onTopArrive,i=e.onTopLeave,a=x.useRef(!1),l=x.useRef(!1),s=x.useRef(0),c=x.useRef(null),d=x.useCallback(function(b,g){if(c.current!==null){var v=c.current,w=v.scrollTop,E=v.scrollHeight,S=v.clientHeight,P=c.current,k=g>0,_=E-S-w,T=!1;_>g&&a.current&&(r&&r(b),a.current=!1),k&&l.current&&(i&&i(b),l.current=!1),k&&g>_?(n&&!a.current&&n(b),P.scrollTop=E,T=!0,a.current=!0):!k&&-g>w&&(o&&!l.current&&o(b),P.scrollTop=0,T=!0,l.current=!0),T&&aU(b)}},[n,r,o,i]),f=x.useCallback(function(b){d(b,b.deltaY)},[d]),m=x.useCallback(function(b){s.current=b.changedTouches[0].clientY},[]),p=x.useCallback(function(b){var g=s.current-b.changedTouches[0].clientY;d(b,g)},[d]),h=x.useCallback(function(b){if(b){var g=OV?{passive:!1}:!1;b.addEventListener("wheel",f,g),b.addEventListener("touchstart",m,g),b.addEventListener("touchmove",p,g)}},[p,m,f]),y=x.useCallback(function(b){b&&(b.removeEventListener("wheel",f,!1),b.removeEventListener("touchstart",m,!1),b.removeEventListener("touchmove",p,!1))},[p,m,f]);return x.useEffect(function(){if(t){var b=c.current;return h(b),function(){y(b)}}},[t,h,y]),function(b){c.current=b}}var fb=["boxSizing","height","overflow","paddingRight","position"],pb={boxSizing:"border-box",overflow:"hidden",position:"relative",height:"100%"};function hb(e){e.cancelable&&e.preventDefault()}function mb(e){e.stopPropagation()}function gb(){var e=this.scrollTop,t=this.scrollHeight,n=e+this.offsetHeight;e===0?this.scrollTop=1:n===t&&(this.scrollTop=e-1)}function vb(){return"ontouchstart"in window||navigator.maxTouchPoints}var yb=!!(typeof window<"u"&&window.document&&window.document.createElement),va=0,Ho={capture:!1,passive:!1};function lU(e){var t=e.isEnabled,n=e.accountForScrollbars,r=n===void 0?!0:n,o=x.useRef({}),i=x.useRef(null),a=x.useCallback(function(s){if(yb){var c=document.body,d=c&&c.style;if(r&&fb.forEach(function(h){var y=d&&d[h];o.current[h]=y}),r&&va<1){var f=parseInt(o.current.paddingRight,10)||0,m=document.body?document.body.clientWidth:0,p=window.innerWidth-m+f||0;Object.keys(pb).forEach(function(h){var y=pb[h];d&&(d[h]=y)}),d&&(d.paddingRight="".concat(p,"px"))}c&&vb()&&(c.addEventListener("touchmove",hb,Ho),s&&(s.addEventListener("touchstart",gb,Ho),s.addEventListener("touchmove",mb,Ho))),va+=1}},[r]),l=x.useCallback(function(s){if(yb){var c=document.body,d=c&&c.style;va=Math.max(va-1,0),r&&va<1&&fb.forEach(function(f){var m=o.current[f];d&&(d[f]=m)}),c&&vb()&&(c.removeEventListener("touchmove",hb,Ho),s&&(s.removeEventListener("touchstart",gb,Ho),s.removeEventListener("touchmove",mb,Ho)))}},[r]);return x.useEffect(function(){if(t){var s=i.current;return a(s),function(){l(s)}}},[t,a,l]),function(s){i.current=s}}var cU=function(t){var n=t.target;return n.ownerDocument.activeElement&&n.ownerDocument.activeElement.blur()},uU={name:"1kfdb0e",styles:"position:fixed;left:0;bottom:0;right:0;top:0"};function dU(e){var t=e.children,n=e.lockEnabled,r=e.captureEnabled,o=r===void 0?!0:r,i=e.onBottomArrive,a=e.onBottomLeave,l=e.onTopArrive,s=e.onTopLeave,c=sU({isEnabled:o,onBottomArrive:i,onBottomLeave:a,onTopArrive:l,onTopLeave:s}),d=lU({isEnabled:n}),f=function(p){c(p),d(p)};return J(x.Fragment,null,n&&J("div",{onClick:cU,css:uU}),t(f))}var fU={name:"1a0ro4n-requiredInput",styles:"label:requiredInput;opacity:0;pointer-events:none;position:absolute;bottom:0;left:0;right:0;width:100%"},pU=function(t){var n=t.name,r=t.onFocus;return J("input",{required:!0,name:n,tabIndex:-1,"aria-hidden":"true",onFocus:r,css:fU,value:"",onChange:function(){}})},hU=pU;function ev(e){var t;return typeof window<"u"&&window.navigator!=null?e.test(((t=window.navigator.userAgentData)===null||t===void 0?void 0:t.platform)||window.navigator.platform):!1}function mU(){return ev(/^iPhone/i)}function Jk(){return ev(/^Mac/i)}function gU(){return ev(/^iPad/i)||Jk()&&navigator.maxTouchPoints>1}function vU(){return mU()||gU()}function yU(){return Jk()||vU()}var xU=function(t){return t.label},bU=function(t){return t.label},wU=function(t){return t.value},SU=function(t){return!!t.isDisabled},EU={clearIndicator:iW,container:YV,control:fW,dropdownIndicator:rW,group:gW,groupHeading:yW,indicatorsContainer:ZV,indicatorSeparator:sW,input:SW,loadingIndicator:uW,loadingMessage:WV,menu:LV,menuList:NV,menuPortal:GV,multiValue:PW,multiValueLabel:OW,multiValueRemove:TW,noOptionsMessage:VV,option:DW,placeholder:FW,singleValue:BW,valueContainer:KV},CU={primary:"#2684FF",primary75:"#4C9AFF",primary50:"#B2D4FF",primary25:"#DEEBFF",danger:"#DE350B",dangerLight:"#FFBDAD",neutral0:"hsl(0, 0%, 100%)",neutral5:"hsl(0, 0%, 95%)",neutral10:"hsl(0, 0%, 90%)",neutral20:"hsl(0, 0%, 80%)",neutral30:"hsl(0, 0%, 70%)",neutral40:"hsl(0, 0%, 60%)",neutral50:"hsl(0, 0%, 50%)",neutral60:"hsl(0, 0%, 40%)",neutral70:"hsl(0, 0%, 30%)",neutral80:"hsl(0, 0%, 20%)",neutral90:"hsl(0, 0%, 10%)"},_U=4,eP=4,kU=38,PU=eP*2,OU={baseUnit:eP,controlHeight:kU,menuGutter:PU},Ap={borderRadius:_U,colors:CU,spacing:OU},TU={"aria-live":"polite",backspaceRemovesValue:!0,blurInputOnSelect:sb(),captureMenuScroll:!sb(),classNames:{},closeMenuOnSelect:!0,closeMenuOnScroll:!1,components:{},controlShouldRenderValue:!0,escapeClearsValue:!1,filterOption:rU(),formatGroupLabel:xU,getOptionLabel:bU,getOptionValue:wU,isDisabled:!1,isLoading:!1,isMulti:!1,isRtl:!1,isSearchable:!0,isOptionDisabled:SU,loadingMessage:function(){return"Loading..."},maxMenuHeight:300,minMenuHeight:140,menuIsOpen:!1,menuPlacement:"bottom",menuPosition:"absolute",menuShouldBlockScroll:!1,menuShouldScrollIntoView:!kV(),noOptionsMessage:function(){return"No options"},openMenuOnFocus:!1,openMenuOnClick:!0,options:[],pageSize:5,placeholder:"Select...",screenReaderStatus:function(t){var n=t.count;return"".concat(n," result").concat(n!==1?"s":""," available")},styles:{},tabIndex:0,tabSelectsValue:!0,unstyled:!1};function xb(e,t,n,r){var o=rP(e,t,n),i=oP(e,t,n),a=nP(e,t),l=yu(e,t);return{type:"option",data:t,isDisabled:o,isSelected:i,label:a,value:l,index:r}}function dc(e,t){return e.options.map(function(n,r){if("options"in n){var o=n.options.map(function(a,l){return xb(e,a,t,l)}).filter(function(a){return wb(e,a)});return o.length>0?{type:"group",data:n,options:o,index:r}:void 0}var i=xb(e,n,t,r);return wb(e,i)?i:void 0}).filter(TV)}function tP(e){return e.reduce(function(t,n){return n.type==="group"?t.push.apply(t,X0(n.options.map(function(r){return r.data}))):t.push(n.data),t},[])}function bb(e,t){return e.reduce(function(n,r){return r.type==="group"?n.push.apply(n,X0(r.options.map(function(o){return{data:o.data,id:"".concat(t,"-").concat(r.index,"-").concat(o.index)}}))):n.push({data:r.data,id:"".concat(t,"-").concat(r.index)}),n},[])}function jU(e,t){return tP(dc(e,t))}function wb(e,t){var n=e.inputValue,r=n===void 0?"":n,o=t.data,i=t.isSelected,a=t.label,l=t.value;return(!aP(e)||!i)&&iP(e,{label:a,value:l,data:o},r)}function $U(e,t){var n=e.focusedValue,r=e.selectValue,o=r.indexOf(n);if(o>-1){var i=t.indexOf(n);if(i>-1)return n;if(o<t.length)return t[o]}return null}function IU(e,t){var n=e.focusedOption;return n&&t.indexOf(n)>-1?n:t[0]}var Dp=function(t,n){var r,o=(r=t.find(function(i){return i.data===n}))===null||r===void 0?void 0:r.id;return o||null},nP=function(t,n){return t.getOptionLabel(n)},yu=function(t,n){return t.getOptionValue(n)};function rP(e,t,n){return typeof e.isOptionDisabled=="function"?e.isOptionDisabled(t,n):!1}function oP(e,t,n){if(n.indexOf(t)>-1)return!0;if(typeof e.isOptionSelected=="function")return e.isOptionSelected(t,n);var r=yu(e,t);return n.some(function(o){return yu(e,o)===r})}function iP(e,t,n){return e.filterOption?e.filterOption(t,n):!0}var aP=function(t){var n=t.hideSelectedOptions,r=t.isMulti;return n===void 0?r:n},MU=1,sP=function(e){ZB(n,e);var t=nV(n);function n(r){var o;if(KB(this,n),o=t.call(this,r),o.state={ariaSelection:null,focusedOption:null,focusedOptionId:null,focusableOptionsWithIds:[],focusedValue:null,inputIsHidden:!1,isFocused:!1,selectValue:[],clearFocusValueOnUpdate:!1,prevWasFocused:!1,inputIsHiddenAfterUpdate:void 0,prevProps:void 0,instancePrefix:"",isAppleDevice:!1},o.blockOptionHover=!1,o.isComposing=!1,o.commonProps=void 0,o.initialTouchX=0,o.initialTouchY=0,o.openAfterFocus=!1,o.scrollToFocusedOptionOnUpdate=!1,o.userIsDragging=void 0,o.controlRef=null,o.getControlRef=function(s){o.controlRef=s},o.focusedOptionRef=null,o.getFocusedOptionRef=function(s){o.focusedOptionRef=s},o.menuListRef=null,o.getMenuListRef=function(s){o.menuListRef=s},o.inputRef=null,o.getInputRef=function(s){o.inputRef=s},o.focus=o.focusInput,o.blur=o.blurInput,o.onChange=function(s,c){var d=o.props,f=d.onChange,m=d.name;c.name=m,o.ariaOnChange(s,c),f(s,c)},o.setValue=function(s,c,d){var f=o.props,m=f.closeMenuOnSelect,p=f.isMulti,h=f.inputValue;o.onInputChange("",{action:"set-value",prevInputValue:h}),m&&(o.setState({inputIsHiddenAfterUpdate:!p}),o.onMenuClose()),o.setState({clearFocusValueOnUpdate:!0}),o.onChange(s,{action:c,option:d})},o.selectOption=function(s){var c=o.props,d=c.blurInputOnSelect,f=c.isMulti,m=c.name,p=o.state.selectValue,h=f&&o.isOptionSelected(s,p),y=o.isOptionDisabled(s,p);if(h){var b=o.getOptionValue(s);o.setValue(p.filter(function(g){return o.getOptionValue(g)!==b}),"deselect-option",s)}else if(!y)f?o.setValue([].concat(X0(p),[s]),"select-option",s):o.setValue(s,"select-option");else{o.ariaOnChange(s,{action:"select-option",option:s,name:m});return}d&&o.blurInput()},o.removeValue=function(s){var c=o.props.isMulti,d=o.state.selectValue,f=o.getOptionValue(s),m=d.filter(function(h){return o.getOptionValue(h)!==f}),p=kl(c,m,m[0]||null);o.onChange(p,{action:"remove-value",removedValue:s}),o.focusInput()},o.clearValue=function(){var s=o.state.selectValue;o.onChange(kl(o.props.isMulti,[],null),{action:"clear",removedValues:s})},o.popValue=function(){var s=o.props.isMulti,c=o.state.selectValue,d=c[c.length-1],f=c.slice(0,c.length-1),m=kl(s,f,f[0]||null);d&&o.onChange(m,{action:"pop-value",removedValue:d})},o.getFocusedOptionId=function(s){return Dp(o.state.focusableOptionsWithIds,s)},o.getFocusableOptionsWithIds=function(){return bb(dc(o.props,o.state.selectValue),o.getElementId("option"))},o.getValue=function(){return o.state.selectValue},o.cx=function(){for(var s=arguments.length,c=new Array(s),d=0;d<s;d++)c[d]=arguments[d];return wV.apply(void 0,[o.props.classNamePrefix].concat(c))},o.getOptionLabel=function(s){return nP(o.props,s)},o.getOptionValue=function(s){return yu(o.props,s)},o.getStyles=function(s,c){var d=o.props.unstyled,f=EU[s](c,d);f.boxSizing="border-box";var m=o.props.styles[s];return m?m(f,c):f},o.getClassNames=function(s,c){var d,f;return(d=(f=o.props.classNames)[s])===null||d===void 0?void 0:d.call(f,c)},o.getElementId=function(s){return"".concat(o.state.instancePrefix,"-").concat(s)},o.getComponents=function(){return HW(o.props)},o.buildCategorizedOptions=function(){return dc(o.props,o.state.selectValue)},o.getCategorizedOptions=function(){return o.props.menuIsOpen?o.buildCategorizedOptions():[]},o.buildFocusableOptions=function(){return tP(o.buildCategorizedOptions())},o.getFocusableOptions=function(){return o.props.menuIsOpen?o.buildFocusableOptions():[]},o.ariaOnChange=function(s,c){o.setState({ariaSelection:ee({value:s},c)})},o.onMenuMouseDown=function(s){s.button===0&&(s.stopPropagation(),s.preventDefault(),o.focusInput())},o.onMenuMouseMove=function(s){o.blockOptionHover=!1},o.onControlMouseDown=function(s){if(!s.defaultPrevented){var c=o.props.openMenuOnClick;o.state.isFocused?o.props.menuIsOpen?s.target.tagName!=="INPUT"&&s.target.tagName!=="TEXTAREA"&&o.onMenuClose():c&&o.openMenu("first"):(c&&(o.openAfterFocus=!0),o.focusInput()),s.target.tagName!=="INPUT"&&s.target.tagName!=="TEXTAREA"&&s.preventDefault()}},o.onDropdownIndicatorMouseDown=function(s){if(!(s&&s.type==="mousedown"&&s.button!==0)&&!o.props.isDisabled){var c=o.props,d=c.isMulti,f=c.menuIsOpen;o.focusInput(),f?(o.setState({inputIsHiddenAfterUpdate:!d}),o.onMenuClose()):o.openMenu("first"),s.preventDefault()}},o.onClearIndicatorMouseDown=function(s){s&&s.type==="mousedown"&&s.button!==0||(o.clearValue(),s.preventDefault(),o.openAfterFocus=!1,s.type==="touchend"?o.focusInput():setTimeout(function(){return o.focusInput()}))},o.onScroll=function(s){typeof o.props.closeMenuOnScroll=="boolean"?s.target instanceof HTMLElement&&Yd(s.target)&&o.props.onMenuClose():typeof o.props.closeMenuOnScroll=="function"&&o.props.closeMenuOnScroll(s)&&o.props.onMenuClose()},o.onCompositionStart=function(){o.isComposing=!0},o.onCompositionEnd=function(){o.isComposing=!1},o.onTouchStart=function(s){var c=s.touches,d=c&&c.item(0);d&&(o.initialTouchX=d.clientX,o.initialTouchY=d.clientY,o.userIsDragging=!1)},o.onTouchMove=function(s){var c=s.touches,d=c&&c.item(0);if(d){var f=Math.abs(d.clientX-o.initialTouchX),m=Math.abs(d.clientY-o.initialTouchY),p=5;o.userIsDragging=f>p||m>p}},o.onTouchEnd=function(s){o.userIsDragging||(o.controlRef&&!o.controlRef.contains(s.target)&&o.menuListRef&&!o.menuListRef.contains(s.target)&&o.blurInput(),o.initialTouchX=0,o.initialTouchY=0)},o.onControlTouchEnd=function(s){o.userIsDragging||o.onControlMouseDown(s)},o.onClearIndicatorTouchEnd=function(s){o.userIsDragging||o.onClearIndicatorMouseDown(s)},o.onDropdownIndicatorTouchEnd=function(s){o.userIsDragging||o.onDropdownIndicatorMouseDown(s)},o.handleInputChange=function(s){var c=o.props.inputValue,d=s.currentTarget.value;o.setState({inputIsHiddenAfterUpdate:!1}),o.onInputChange(d,{action:"input-change",prevInputValue:c}),o.props.menuIsOpen||o.onMenuOpen()},o.onInputFocus=function(s){o.props.onFocus&&o.props.onFocus(s),o.setState({inputIsHiddenAfterUpdate:!1,isFocused:!0}),(o.openAfterFocus||o.props.openMenuOnFocus)&&o.openMenu("first"),o.openAfterFocus=!1},o.onInputBlur=function(s){var c=o.props.inputValue;if(o.menuListRef&&o.menuListRef.contains(document.activeElement)){o.inputRef.focus();return}o.props.onBlur&&o.props.onBlur(s),o.onInputChange("",{action:"input-blur",prevInputValue:c}),o.onMenuClose(),o.setState({focusedValue:null,isFocused:!1})},o.onOptionHover=function(s){if(!(o.blockOptionHover||o.state.focusedOption===s)){var c=o.getFocusableOptions(),d=c.indexOf(s);o.setState({focusedOption:s,focusedOptionId:d>-1?o.getFocusedOptionId(s):null})}},o.shouldHideSelectedOptions=function(){return aP(o.props)},o.onValueInputFocus=function(s){s.preventDefault(),s.stopPropagation(),o.focus()},o.onKeyDown=function(s){var c=o.props,d=c.isMulti,f=c.backspaceRemovesValue,m=c.escapeClearsValue,p=c.inputValue,h=c.isClearable,y=c.isDisabled,b=c.menuIsOpen,g=c.onKeyDown,v=c.tabSelectsValue,w=c.openMenuOnFocus,E=o.state,S=E.focusedOption,P=E.focusedValue,k=E.selectValue;if(!y&&!(typeof g=="function"&&(g(s),s.defaultPrevented))){switch(o.blockOptionHover=!0,s.key){case"ArrowLeft":if(!d||p)return;o.focusValue("previous");break;case"ArrowRight":if(!d||p)return;o.focusValue("next");break;case"Delete":case"Backspace":if(p)return;if(P)o.removeValue(P);else{if(!f)return;d?o.popValue():h&&o.clearValue()}break;case"Tab":if(o.isComposing||s.shiftKey||!b||!v||!S||w&&o.isOptionSelected(S,k))return;o.selectOption(S);break;case"Enter":if(s.keyCode===229)break;if(b){if(!S||o.isComposing)return;o.selectOption(S);break}return;case"Escape":b?(o.setState({inputIsHiddenAfterUpdate:!1}),o.onInputChange("",{action:"menu-close",prevInputValue:p}),o.onMenuClose()):h&&m&&o.clearValue();break;case" ":if(p)return;if(!b){o.openMenu("first");break}if(!S)return;o.selectOption(S);break;case"ArrowUp":b?o.focusOption("up"):o.openMenu("last");break;case"ArrowDown":b?o.focusOption("down"):o.openMenu("first");break;case"PageUp":if(!b)return;o.focusOption("pageup");break;case"PageDown":if(!b)return;o.focusOption("pagedown");break;case"Home":if(!b)return;o.focusOption("first");break;case"End":if(!b)return;o.focusOption("last");break;default:return}s.preventDefault()}},o.state.instancePrefix="react-select-"+(o.props.instanceId||++MU),o.state.selectValue=ib(r.value),r.menuIsOpen&&o.state.selectValue.length){var i=o.getFocusableOptionsWithIds(),a=o.buildFocusableOptions(),l=a.indexOf(o.state.selectValue[0]);o.state.focusableOptionsWithIds=i,o.state.focusedOption=a[l],o.state.focusedOptionId=Dp(i,a[l])}return o}return QB(n,[{key:"componentDidMount",value:function(){this.startListeningComposition(),this.startListeningToTouch(),this.props.closeMenuOnScroll&&document&&document.addEventListener&&document.addEventListener("scroll",this.onScroll,!0),this.props.autoFocus&&this.focusInput(),this.props.menuIsOpen&&this.state.focusedOption&&this.menuListRef&&this.focusedOptionRef&&ab(this.menuListRef,this.focusedOptionRef),yU()&&this.setState({isAppleDevice:!0})}},{key:"componentDidUpdate",value:function(o){var i=this.props,a=i.isDisabled,l=i.menuIsOpen,s=this.state.isFocused;(s&&!a&&o.isDisabled||s&&l&&!o.menuIsOpen)&&this.focusInput(),s&&a&&!o.isDisabled?this.setState({isFocused:!1},this.onMenuClose):!s&&!a&&o.isDisabled&&this.inputRef===document.activeElement&&this.setState({isFocused:!0}),this.menuListRef&&this.focusedOptionRef&&this.scrollToFocusedOptionOnUpdate&&(ab(this.menuListRef,this.focusedOptionRef),this.scrollToFocusedOptionOnUpdate=!1)}},{key:"componentWillUnmount",value:function(){this.stopListeningComposition(),this.stopListeningToTouch(),document.removeEventListener("scroll",this.onScroll,!0)}},{key:"onMenuOpen",value:function(){this.props.onMenuOpen()}},{key:"onMenuClose",value:function(){this.onInputChange("",{action:"menu-close",prevInputValue:this.props.inputValue}),this.props.onMenuClose()}},{key:"onInputChange",value:function(o,i){this.props.onInputChange(o,i)}},{key:"focusInput",value:function(){this.inputRef&&this.inputRef.focus()}},{key:"blurInput",value:function(){this.inputRef&&this.inputRef.blur()}},{key:"openMenu",value:function(o){var i=this,a=this.state,l=a.selectValue,s=a.isFocused,c=this.buildFocusableOptions(),d=o==="first"?0:c.length-1;if(!this.props.isMulti){var f=c.indexOf(l[0]);f>-1&&(d=f)}this.scrollToFocusedOptionOnUpdate=!(s&&this.menuListRef),this.setState({inputIsHiddenAfterUpdate:!1,focusedValue:null,focusedOption:c[d],focusedOptionId:this.getFocusedOptionId(c[d])},function(){return i.onMenuOpen()})}},{key:"focusValue",value:function(o){var i=this.state,a=i.selectValue,l=i.focusedValue;if(this.props.isMulti){this.setState({focusedOption:null});var s=a.indexOf(l);l||(s=-1);var c=a.length-1,d=-1;if(a.length){switch(o){case"previous":s===0?d=0:s===-1?d=c:d=s-1;break;case"next":s>-1&&s<c&&(d=s+1);break}this.setState({inputIsHidden:d!==-1,focusedValue:a[d]})}}}},{key:"focusOption",value:function(){var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"first",i=this.props.pageSize,a=this.state.focusedOption,l=this.getFocusableOptions();if(l.length){var s=0,c=l.indexOf(a);a||(c=-1),o==="up"?s=c>0?c-1:l.length-1:o==="down"?s=(c+1)%l.length:o==="pageup"?(s=c-i,s<0&&(s=0)):o==="pagedown"?(s=c+i,s>l.length-1&&(s=l.length-1)):o==="last"&&(s=l.length-1),this.scrollToFocusedOptionOnUpdate=!0,this.setState({focusedOption:l[s],focusedValue:null,focusedOptionId:this.getFocusedOptionId(l[s])})}}},{key:"getTheme",value:function(){return this.props.theme?typeof this.props.theme=="function"?this.props.theme(Ap):ee(ee({},Ap),this.props.theme):Ap}},{key:"getCommonProps",value:function(){var o=this.clearValue,i=this.cx,a=this.getStyles,l=this.getClassNames,s=this.getValue,c=this.selectOption,d=this.setValue,f=this.props,m=f.isMulti,p=f.isRtl,h=f.options,y=this.hasValue();return{clearValue:o,cx:i,getStyles:a,getClassNames:l,getValue:s,hasValue:y,isMulti:m,isRtl:p,options:h,selectOption:c,selectProps:f,setValue:d,theme:this.getTheme()}}},{key:"hasValue",value:function(){var o=this.state.selectValue;return o.length>0}},{key:"hasOptions",value:function(){return!!this.getFocusableOptions().length}},{key:"isClearable",value:function(){var o=this.props,i=o.isClearable,a=o.isMulti;return i===void 0?a:i}},{key:"isOptionDisabled",value:function(o,i){return rP(this.props,o,i)}},{key:"isOptionSelected",value:function(o,i){return oP(this.props,o,i)}},{key:"filterOption",value:function(o,i){return iP(this.props,o,i)}},{key:"formatOptionLabel",value:function(o,i){if(typeof this.props.formatOptionLabel=="function"){var a=this.props.inputValue,l=this.state.selectValue;return this.props.formatOptionLabel(o,{context:i,inputValue:a,selectValue:l})}else return this.getOptionLabel(o)}},{key:"formatGroupLabel",value:function(o){return this.props.formatGroupLabel(o)}},{key:"startListeningComposition",value:function(){document&&document.addEventListener&&(document.addEventListener("compositionstart",this.onCompositionStart,!1),document.addEventListener("compositionend",this.onCompositionEnd,!1))}},{key:"stopListeningComposition",value:function(){document&&document.removeEventListener&&(document.removeEventListener("compositionstart",this.onCompositionStart),document.removeEventListener("compositionend",this.onCompositionEnd))}},{key:"startListeningToTouch",value:function(){document&&document.addEventListener&&(document.addEventListener("touchstart",this.onTouchStart,!1),document.addEventListener("touchmove",this.onTouchMove,!1),document.addEventListener("touchend",this.onTouchEnd,!1))}},{key:"stopListeningToTouch",value:function(){document&&document.removeEventListener&&(document.removeEventListener("touchstart",this.onTouchStart),document.removeEventListener("touchmove",this.onTouchMove),document.removeEventListener("touchend",this.onTouchEnd))}},{key:"renderInput",value:function(){var o=this.props,i=o.isDisabled,a=o.isSearchable,l=o.inputId,s=o.inputValue,c=o.tabIndex,d=o.form,f=o.menuIsOpen,m=o.required,p=this.getComponents(),h=p.Input,y=this.state,b=y.inputIsHidden,g=y.ariaSelection,v=this.commonProps,w=l||this.getElementId("input"),E=ee(ee(ee({"aria-autocomplete":"list","aria-expanded":f,"aria-haspopup":!0,"aria-errormessage":this.props["aria-errormessage"],"aria-invalid":this.props["aria-invalid"],"aria-label":this.props["aria-label"],"aria-labelledby":this.props["aria-labelledby"],"aria-required":m,role:"combobox","aria-activedescendant":this.state.isAppleDevice?void 0:this.state.focusedOptionId||""},f&&{"aria-controls":this.getElementId("listbox")}),!a&&{"aria-readonly":!0}),this.hasValue()?(g==null?void 0:g.action)==="initial-input-focus"&&{"aria-describedby":this.getElementId("live-region")}:{"aria-describedby":this.getElementId("placeholder")});return a?x.createElement(h,te({},v,{autoCapitalize:"none",autoComplete:"off",autoCorrect:"off",id:w,innerRef:this.getInputRef,isDisabled:i,isHidden:b,onBlur:this.onInputBlur,onChange:this.handleInputChange,onFocus:this.onInputFocus,spellCheck:"false",tabIndex:c,form:d,type:"text",value:s},E)):x.createElement(iU,te({id:w,innerRef:this.getInputRef,onBlur:this.onInputBlur,onChange:gu,onFocus:this.onInputFocus,disabled:i,tabIndex:c,inputMode:"none",form:d,value:""},E))}},{key:"renderPlaceholderOrValue",value:function(){var o=this,i=this.getComponents(),a=i.MultiValue,l=i.MultiValueContainer,s=i.MultiValueLabel,c=i.MultiValueRemove,d=i.SingleValue,f=i.Placeholder,m=this.commonProps,p=this.props,h=p.controlShouldRenderValue,y=p.isDisabled,b=p.isMulti,g=p.inputValue,v=p.placeholder,w=this.state,E=w.selectValue,S=w.focusedValue,P=w.isFocused;if(!this.hasValue()||!h)return g?null:x.createElement(f,te({},m,{key:"placeholder",isDisabled:y,isFocused:P,innerProps:{id:this.getElementId("placeholder")}}),v);if(b)return E.map(function(_,T){var $=_===S,I="".concat(o.getOptionLabel(_),"-").concat(o.getOptionValue(_));return x.createElement(a,te({},m,{components:{Container:l,Label:s,Remove:c},isFocused:$,isDisabled:y,key:I,index:T,removeProps:{onClick:function(){return o.removeValue(_)},onTouchEnd:function(){return o.removeValue(_)},onMouseDown:function(j){j.preventDefault()}},data:_}),o.formatOptionLabel(_,"value"))});if(g)return null;var k=E[0];return x.createElement(d,te({},m,{data:k,isDisabled:y}),this.formatOptionLabel(k,"value"))}},{key:"renderClearIndicator",value:function(){var o=this.getComponents(),i=o.ClearIndicator,a=this.commonProps,l=this.props,s=l.isDisabled,c=l.isLoading,d=this.state.isFocused;if(!this.isClearable()||!i||s||!this.hasValue()||c)return null;var f={onMouseDown:this.onClearIndicatorMouseDown,onTouchEnd:this.onClearIndicatorTouchEnd,"aria-hidden":"true"};return x.createElement(i,te({},a,{innerProps:f,isFocused:d}))}},{key:"renderLoadingIndicator",value:function(){var o=this.getComponents(),i=o.LoadingIndicator,a=this.commonProps,l=this.props,s=l.isDisabled,c=l.isLoading,d=this.state.isFocused;if(!i||!c)return null;var f={"aria-hidden":"true"};return x.createElement(i,te({},a,{innerProps:f,isDisabled:s,isFocused:d}))}},{key:"renderIndicatorSeparator",value:function(){var o=this.getComponents(),i=o.DropdownIndicator,a=o.IndicatorSeparator;if(!i||!a)return null;var l=this.commonProps,s=this.props.isDisabled,c=this.state.isFocused;return x.createElement(a,te({},l,{isDisabled:s,isFocused:c}))}},{key:"renderDropdownIndicator",value:function(){var o=this.getComponents(),i=o.DropdownIndicator;if(!i)return null;var a=this.commonProps,l=this.props.isDisabled,s=this.state.isFocused,c={onMouseDown:this.onDropdownIndicatorMouseDown,onTouchEnd:this.onDropdownIndicatorTouchEnd,"aria-hidden":"true"};return x.createElement(i,te({},a,{innerProps:c,isDisabled:l,isFocused:s}))}},{key:"renderMenu",value:function(){var o=this,i=this.getComponents(),a=i.Group,l=i.GroupHeading,s=i.Menu,c=i.MenuList,d=i.MenuPortal,f=i.LoadingMessage,m=i.NoOptionsMessage,p=i.Option,h=this.commonProps,y=this.state.focusedOption,b=this.props,g=b.captureMenuScroll,v=b.inputValue,w=b.isLoading,E=b.loadingMessage,S=b.minMenuHeight,P=b.maxMenuHeight,k=b.menuIsOpen,_=b.menuPlacement,T=b.menuPosition,$=b.menuPortalTarget,I=b.menuShouldBlockScroll,M=b.menuShouldScrollIntoView,j=b.noOptionsMessage,R=b.onMenuScrollToTop,D=b.onMenuScrollToBottom;if(!k)return null;var F=function(V,U){var G=V.type,W=V.data,Y=V.isDisabled,Q=V.isSelected,ie=V.label,re=V.value,be=y===W,Le=Y?void 0:function(){return o.onOptionHover(W)},Re=Y?void 0:function(){return o.selectOption(W)},Ao="".concat(o.getElementId("option"),"-").concat(U),Pt={id:Ao,onClick:Re,onMouseMove:Le,onMouseOver:Le,tabIndex:-1,role:"option","aria-selected":o.state.isAppleDevice?void 0:Q};return x.createElement(p,te({},h,{innerProps:Pt,data:W,isDisabled:Y,isSelected:Q,key:Ao,label:ie,type:G,value:re,isFocused:be,innerRef:be?o.getFocusedOptionRef:void 0}),o.formatOptionLabel(V.data,"menu"))},L;if(this.hasOptions())L=this.getCategorizedOptions().map(function(z){if(z.type==="group"){var V=z.data,U=z.options,G=z.index,W="".concat(o.getElementId("group"),"-").concat(G),Y="".concat(W,"-heading");return x.createElement(a,te({},h,{key:W,data:V,options:U,Heading:l,headingProps:{id:Y,data:z.data},label:o.formatGroupLabel(z.data)}),z.options.map(function(Q){return F(Q,"".concat(G,"-").concat(Q.index))}))}else if(z.type==="option")return F(z,"".concat(z.index))});else if(w){var O=E({inputValue:v});if(O===null)return null;L=x.createElement(f,h,O)}else{var A=j({inputValue:v});if(A===null)return null;L=x.createElement(m,h,A)}var N={minMenuHeight:S,maxMenuHeight:P,menuPlacement:_,menuPosition:T,menuShouldScrollIntoView:M},B=x.createElement(RV,te({},h,N),function(z){var V=z.ref,U=z.placerProps,G=U.placement,W=U.maxHeight;return x.createElement(s,te({},h,N,{innerRef:V,innerProps:{onMouseDown:o.onMenuMouseDown,onMouseMove:o.onMenuMouseMove},isLoading:w,placement:G}),x.createElement(dU,{captureEnabled:g,onTopArrive:R,onBottomArrive:D,lockEnabled:I},function(Y){return x.createElement(c,te({},h,{innerRef:function(ie){o.getMenuListRef(ie),Y(ie)},innerProps:{role:"listbox","aria-multiselectable":h.isMulti,id:o.getElementId("listbox")},isLoading:w,maxHeight:W,focusedOption:y}),L)}))});return $||T==="fixed"?x.createElement(d,te({},h,{appendTo:$,controlElement:this.controlRef,menuPlacement:_,menuPosition:T}),B):B}},{key:"renderFormField",value:function(){var o=this,i=this.props,a=i.delimiter,l=i.isDisabled,s=i.isMulti,c=i.name,d=i.required,f=this.state.selectValue;if(d&&!this.hasValue()&&!l)return x.createElement(hU,{name:c,onFocus:this.onValueInputFocus});if(!(!c||l))if(s)if(a){var m=f.map(function(y){return o.getOptionValue(y)}).join(a);return x.createElement("input",{name:c,type:"hidden",value:m})}else{var p=f.length>0?f.map(function(y,b){return x.createElement("input",{key:"i-".concat(b),name:c,type:"hidden",value:o.getOptionValue(y)})}):x.createElement("input",{name:c,type:"hidden",value:""});return x.createElement("div",null,p)}else{var h=f[0]?this.getOptionValue(f[0]):"";return x.createElement("input",{name:c,type:"hidden",value:h})}}},{key:"renderLiveRegion",value:function(){var o=this.commonProps,i=this.state,a=i.ariaSelection,l=i.focusedOption,s=i.focusedValue,c=i.isFocused,d=i.selectValue,f=this.getFocusableOptions();return x.createElement(JW,te({},o,{id:this.getElementId("live-region"),ariaSelection:a,focusedOption:l,focusedValue:s,isFocused:c,selectValue:d,focusableOptions:f,isAppleDevice:this.state.isAppleDevice}))}},{key:"render",value:function(){var o=this.getComponents(),i=o.Control,a=o.IndicatorsContainer,l=o.SelectContainer,s=o.ValueContainer,c=this.props,d=c.className,f=c.id,m=c.isDisabled,p=c.menuIsOpen,h=this.state.isFocused,y=this.commonProps=this.getCommonProps();return x.createElement(l,te({},y,{className:d,innerProps:{id:f,onKeyDown:this.onKeyDown},isDisabled:m,isFocused:h}),this.renderLiveRegion(),x.createElement(i,te({},y,{innerRef:this.getControlRef,innerProps:{onMouseDown:this.onControlMouseDown,onTouchEnd:this.onControlTouchEnd},isDisabled:m,isFocused:h,menuIsOpen:p}),x.createElement(s,te({},y,{isDisabled:m}),this.renderPlaceholderOrValue(),this.renderInput()),x.createElement(a,te({},y,{isDisabled:m}),this.renderClearIndicator(),this.renderLoadingIndicator(),this.renderIndicatorSeparator(),this.renderDropdownIndicator())),this.renderMenu(),this.renderFormField())}}],[{key:"getDerivedStateFromProps",value:function(o,i){var a=i.prevProps,l=i.clearFocusValueOnUpdate,s=i.inputIsHiddenAfterUpdate,c=i.ariaSelection,d=i.isFocused,f=i.prevWasFocused,m=i.instancePrefix,p=o.options,h=o.value,y=o.menuIsOpen,b=o.inputValue,g=o.isMulti,v=ib(h),w={};if(a&&(h!==a.value||p!==a.options||y!==a.menuIsOpen||b!==a.inputValue)){var E=y?jU(o,v):[],S=y?bb(dc(o,v),"".concat(m,"-option")):[],P=l?$U(i,v):null,k=IU(i,E),_=Dp(S,k);w={selectValue:v,focusedOption:k,focusedOptionId:_,focusableOptionsWithIds:S,focusedValue:P,clearFocusValueOnUpdate:!1}}var T=s!=null&&o!==a?{inputIsHidden:s,inputIsHiddenAfterUpdate:void 0}:{},$=c,I=d&&f;return d&&!I&&($={value:kl(g,v,v[0]||null),options:v,action:"initial-input-focus"},I=!f),(c==null?void 0:c.action)==="initial-input-focus"&&($=null),ee(ee(ee({},w),T),{},{prevProps:o,ariaSelection:$,prevWasFocused:I})}}]),n}(x.Component);sP.defaultProps=TU;var AU=x.forwardRef(function(e,t){var n=XB(e);return x.createElement(sP,te({ref:t},n))}),Xd=AU;const DU=C.div`
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
`,LU=C.label`
  font-size: 14px;
  color: #666;
  margin-bottom: 5px;
`,RU=({cityOptions:e,selectedCity:t,onChange:n,onInputChange:r})=>u.jsxs(DU,{children:[u.jsx(LU,{children:"Місто"}),u.jsx(Xd,{options:e,onInputChange:r,onChange:n,placeholder:"Почніть вводити місто...",value:t,noOptionsMessage:()=>"Введіть назву міста"})]}),FU=C.div`
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
`,zU=C.label`
  font-size: 14px;
  color: #666;
  margin-bottom: 5px;
`,NU=({options:e=[],value:t,onChange:n,selectedCity:r})=>u.jsxs(FU,{children:[u.jsx(zU,{children:"Спосіб доставки"}),u.jsx(Xd,{options:e,placeholder:"Оберіть спосіб доставки...",isDisabled:!r,value:e.find(o=>o.value===t)||null,onChange:o=>n(o.value)})]}),Sb=C.div`
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
`,Eb=C.label`
  font-size: 14px;
  color: #666;
  margin-bottom: 5px;
`,BU=({deliveryMethod:e,officeOptions:t,selectedOffice:n,selectedUkrOffice:r,setSelectedOffice:o,setSelectedUkrOffice:i})=>e==="nova"?u.jsxs(Sb,{children:[u.jsx(Eb,{children:"Відділення Нової пошти"}),u.jsx(Xd,{options:t,onChange:a=>o(a),value:n,placeholder:"Оберіть відділення..."})]}):e==="ukr"?u.jsxs(Sb,{children:[u.jsx(Eb,{children:"Адреса доставки (Укрпошта)"}),u.jsx("input",{type:"text",value:r,onChange:a=>i(a.target.value),placeholder:"Наприклад:  вул. Шевченка, 10, індекс 01001",style:{padding:"8px 12px",border:"1px solid #c6c5c5",borderRadius:"4px",outline:"none"}})]}):null,VU=C.div`
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
`;C.span`
  color: #e74c3c;
  font-size: 11px;
  margin-top: 4px;
  text-align: left;
  font-weight: 500;
`;const WU=C.button`
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
`,UU=C.ul`
  list-style: none;
  padding: 0;
  padding-right:10px;
  margin: 0 0 20px 0;
  max-height: 240px; 
  overflow-y: auto;  
  border-bottom: 1px solid #eee;

  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-thumb {
    background: #ccc;
    border-radius: 4px;
  }
`,HU=C.li`
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
`,GU=C.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 6px;
  border: 1px solid #eee;
  background-color: #f9f9f9;
`,qU=C.div`
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
`,YU=C.div`
  text-align: center;
  width: 100px;
 
`,XU=C.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 2px;
`,KU=C.span`
  font-size: 18px;
  font-weight: 600;
  color: ${({$discount:e})=>"#111"};
`,QU=C.span`
  font-size: 13px;
  color: #999;
  text-decoration: line-through;
`,ZU=C.span`
  position: absolute;
  top: -10px;
  right: -10px;

  font-size: 10px;
  font-weight: 700;
  line-height: 1;

  color: #fff;
  background:var(--red-color);

  padding: 2px 4px;
  border-radius: 6px;

  white-space: nowrap;
`,JU=C.div`
  width: 100%;
  max-width: 750px;
  padding-left: 10px;
  padding-right: 10px;
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
`;C.h2`
  text-align: left;
  color: #fff;
  font-size: 28px;
  margin-bottom: 30px;
  font-weight: 700;
`;const eH=C.div`
  display: flex;
  flex-direction: column;
  /* gap: 30px; */
  text-align: left;

  @media screen and (min-width: 1200px) {
    flex-direction: row;
    align-items: flex-start;
  }
`,tH=C.div`
  background: #ffffff;
  border-radius: 12px;
  padding: 25px;
  flex: 1;
`;C.form`
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
`;C.div`
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
`;C.label`
  font-size: 14px;
  color: #666;
  margin-bottom: 5px;
`;C.input`
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 16px;
  outline: none;

  &:focus {
    border-color: #f58220; /* Помаранчевий колір з кнопки */
  }
`;C.div`
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
`;C.span`
  color: #e74c3c;
  font-size: 11px;
  margin-top: 4px;
  text-align: left;
  font-weight: 500;
`;C.button`
  width: 100%;
  padding: 15px;
  background-color: var(--orange-color); 
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
`;C.ul`
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
`;C.li`
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
`;C.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 6px;
  border: 1px solid #eee;
  background-color: #f9f9f9;
`;C.div`
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
`;C.button`
`;const nH=C.div`
  display: flex;
  align-items: center;
  gap: 12px;

  padding: 18px 2px 28px;

  font-size: 16px;
     color: var(--black-color);
`,rH=C.input`
  width: 20px;
  height: 20px;

  accent-color: #5b4637;
  cursor: pointer;

  flex-shrink: 0;
`,oH=C.label`
  font-size: 16px;
  line-height: 1.4;

      color: var(--black-color);
  cursor: pointer;
`,iH=({cartItems:e,totalAmount:t,totalQuantity:n,isFormValid:r,handleSubmit:o,noCall:i,setNoCall:a})=>u.jsxs(VU,{children:[u.jsx("h3",{children:"Ваше замовлення"}),u.jsx(UU,{children:e.map((l,s)=>{var p,h;const c=l.new_price&&l.new_price<l.price,d=c?l.new_price:l.price,f=c?Math.round((l.price-l.new_price)/l.price*100):0,m=l.available!==!1?d*(l.quantity||1):0;return u.jsxs(HU,{children:[u.jsx(GU,{src:((h=(p=l.images)==null?void 0:p[0])==null?void 0:h.url)||ur,alt:l.name}),u.jsxs(qU,{children:[u.jsx("p",{className:"item-name",children:l.name}),u.jsxs("p",{className:"item-details",children:[l.quantity," шт. × ",l.price," грн"]})]}),u.jsx(YU,{children:u.jsxs(XU,{children:[u.jsxs(KU,{$discount:c,children:[m.toLocaleString()," грн"]}),c&&u.jsxs(u.Fragment,{children:[u.jsxs(QU,{children:[(l.price*(l.quantity||1)).toLocaleString()," грн"]}),u.jsxs(ZU,{children:["-",f,"%"]})]})]})})]},`${l.id}-${s}`)})}),u.jsxs("div",{className:"summary-row",children:[u.jsxs("span",{children:["Товари (",n,")"]}),u.jsxs("span",{children:[t," грн"]})]}),u.jsxs("div",{className:"summary-row",children:[u.jsx("span",{children:"Доставка"}),u.jsx("span",{children:"За тарифами перевізника"})]}),u.jsx("hr",{}),u.jsxs("div",{className:"total",children:[u.jsx("span",{children:"Всього до сплати:"}),u.jsxs("span",{children:[t," грн"]})]}),u.jsxs(nH,{children:[u.jsx(rH,{type:"checkbox",id:"noCall",checked:i,onChange:l=>a(l.target.checked)}),u.jsx(oH,{htmlFor:"noCall",children:"Не передзвонювати"})]}),u.jsx(WU,{type:"submit",disabled:!r,onClick:o,style:{opacity:r?1:.5,cursor:r?"pointer":"not-allowed"},children:"Підтвердити замовлення"}),!r&&u.jsx("p",{style:{color:"#888",fontSize:"12px",marginTop:"10px",textAlign:"center"},children:"Заповніть всі поля правильно, щоб продовжити"})]});var lP={exports:{}};function aH(e){return e&&typeof e=="object"&&"default"in e?e.default:e}var Lp=aH(x),sH=Ru;function lH(e,t){for(var n=Object.getOwnPropertyNames(t),r=0;r<n.length;r++){var o=n[r],i=Object.getOwnPropertyDescriptor(t,o);i&&i.configurable&&e[o]===void 0&&Object.defineProperty(e,o,i)}return e}function Lm(){return(Lm=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function cH(e,t){e.prototype=Object.create(t.prototype),lH(e.prototype.constructor=e,t)}function uH(e,t){if(e==null)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],0<=t.indexOf(n)||(o[n]=e[n]);return o}function Go(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var dH=function(e,t,n,r,o,i,a,l){if(!e){var s;if(t===void 0)s=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var c=[n,r,o,i,a,l],d=0;(s=new Error(t.replace(/%s/g,function(){return c[d++]}))).name="Invariant Violation"}throw s.framesToPop=1,s}},Cb=dH;function _b(e,t,n){if("selectionStart"in e&&"selectionEnd"in e)e.selectionStart=t,e.selectionEnd=n;else{var r=e.createTextRange();r.collapse(!0),r.moveStart("character",t),r.moveEnd("character",n-t),r.select()}}function fH(e){var t=0,n=0;if("selectionStart"in e&&"selectionEnd"in e)t=e.selectionStart,n=e.selectionEnd;else{var r=document.selection.createRange();r.parentElement()===e&&(t=-r.moveStart("character",-e.value.length),n=-r.moveEnd("character",-e.value.length))}return{start:t,end:n,length:n-t}}var pH={9:"[0-9]",a:"[A-Za-z]","*":"[A-Za-z0-9]"},hH="_";function kb(e,t,n){var r="",o="",i=null,a=[];if(t===void 0&&(t=hH),n==null&&(n=pH),!e||typeof e!="string")return{maskChar:t,formatChars:n,mask:null,prefix:null,lastEditablePosition:null,permanents:[]};var l=!1;return e.split("").forEach(function(s){l=!l&&s==="\\"||(l||!n[s]?(a.push(r.length),r.length===a.length-1&&(o+=s)):i=r.length+1,r+=s,!1)}),{maskChar:t,formatChars:n,prefix:o,mask:r,lastEditablePosition:i,permanents:a}}function qt(e,t){return e.permanents.indexOf(t)!==-1}function Kd(e,t,n){var r=e.mask,o=e.formatChars;if(!n)return!1;if(qt(e,t))return r[t]===n;var i=o[r[t]];return new RegExp(i).test(n)}function Pb(e,t){return t.split("").every(function(n,r){return qt(e,r)||!Kd(e,r,n)})}function Ta(e,t){var n=e.maskChar,r=e.prefix;if(!n){for(;t.length>r.length&&qt(e,t.length-1);)t=t.slice(0,t.length-1);return t.length}for(var o=r.length,i=t.length;i>=r.length;i--){var a=t[i];if(!qt(e,i)&&Kd(e,i,a)){o=i+1;break}}return o}function cP(e,t){return Ta(e,t)===e.mask.length}function Jn(e,t){var n=e.maskChar,r=e.mask,o=e.prefix;if(!n){for((t=Rm(e,"",t,0)).length<o.length&&(t=o);t.length<r.length&&qt(e,t.length);)t+=r[t.length];return t}if(t)return Rm(e,Jn(e,""),t,0);for(var i=0;i<r.length;i++)qt(e,i)?t+=r[i]:t+=n;return t}function mH(e,t,n,r){var o=n+r,i=e.maskChar,a=e.mask,l=e.prefix,s=t.split("");if(i)return s.map(function(d,f){return f<n||o<=f?d:qt(e,f)?a[f]:i}).join("");for(var c=o;c<s.length;c++)qt(e,c)&&(s[c]="");return n=Math.max(l.length,n),s.splice(n,o-n),t=s.join(""),Jn(e,t)}function Rm(e,t,n,r){var o=e.mask,i=e.maskChar,a=e.prefix,l=n.split(""),s=cP(e,t);return!i&&r>t.length&&(t+=o.slice(t.length,r)),l.every(function(c){for(;p=c,qt(e,m=r)&&p!==o[m];){if(r>=t.length&&(t+=o[r]),d=c,f=r,i&&qt(e,f)&&d===i)return!0;if(++r>=o.length)return!1}var d,f,m,p;return!Kd(e,r,c)&&c!==i||(r<t.length?t=i||s||r<a.length?t.slice(0,r)+c+t.slice(r+1):(t=t.slice(0,r)+c+t.slice(r),Jn(e,t)):i||(t+=c),++r<o.length)}),t}function gH(e,t,n,r){var o=e.mask,i=e.maskChar,a=n.split(""),l=r;return a.every(function(s){for(;d=s,qt(e,c=r)&&d!==o[c];)if(++r>=o.length)return!1;var c,d;return(Kd(e,r,s)||s===i)&&r++,r<o.length}),r-l}function vH(e,t){for(var n=t;0<=n;--n)if(!qt(e,n))return n;return null}function qa(e,t){for(var n=e.mask,r=t;r<n.length;++r)if(!qt(e,r))return r;return null}function Rp(e){return e||e===0?e+"":""}function yH(e,t,n,r,o){var i=e.mask,a=e.prefix,l=e.lastEditablePosition,s=t,c="",d=0,f=0,m=Math.min(o.start,n.start);return n.end>o.start?f=(d=gH(e,r,c=s.slice(o.start,n.end),m))?o.length:0:s.length<r.length&&(f=r.length-s.length),s=r,f&&(f===1&&!o.length&&(m=o.start===n.start?qa(e,n.start):vH(e,n.start)),s=mH(e,s,m,f)),s=Rm(e,s,c,m),(m+=d)>=i.length?m=i.length:m<a.length&&!d?m=a.length:m>=a.length&&m<l&&d&&(m=qa(e,m)),c||(c=null),{value:s=Jn(e,s),enteredString:c,selection:{start:m,end:m}}}function xH(){var e=new RegExp("windows","i"),t=new RegExp("phone","i"),n=navigator.userAgent;return e.test(n)&&t.test(n)}function Ot(e){return typeof e=="function"}function bH(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame}function uP(){return window.cancelAnimationFrame||window.webkitCancelRequestAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame}function Ob(e){return(uP()?bH():function(){return setTimeout(e,1e3/60)})(e)}function Fp(e){(uP()||clearTimeout)(e)}var wH=function(e){function t(r){var o=e.call(this,r)||this;o.focused=!1,o.mounted=!1,o.previousSelection=null,o.selectionDeferId=null,o.saveSelectionLoopDeferId=null,o.saveSelectionLoop=function(){o.previousSelection=o.getSelection(),o.saveSelectionLoopDeferId=Ob(o.saveSelectionLoop)},o.runSaveSelectionLoop=function(){o.saveSelectionLoopDeferId===null&&o.saveSelectionLoop()},o.stopSaveSelectionLoop=function(){o.saveSelectionLoopDeferId!==null&&(Fp(o.saveSelectionLoopDeferId),o.saveSelectionLoopDeferId=null,o.previousSelection=null)},o.getInputDOMNode=function(){if(!o.mounted)return null;var h=sH.findDOMNode(Go(Go(o))),y=typeof window<"u"&&h instanceof window.Element;if(h&&!y)return null;if(h.nodeName!=="INPUT"&&(h=h.querySelector("input")),!h)throw new Error("react-input-mask: inputComponent doesn't contain input node");return h},o.getInputValue=function(){var h=o.getInputDOMNode();return h?h.value:null},o.setInputValue=function(h){var y=o.getInputDOMNode();y&&(o.value=h,y.value=h)},o.setCursorToEnd=function(){var h=Ta(o.maskOptions,o.value),y=qa(o.maskOptions,h);y!==null&&o.setCursorPosition(y)},o.setSelection=function(h,y,b){b===void 0&&(b={});var g=o.getInputDOMNode(),v=o.isFocused();g&&v&&(b.deferred||_b(g,h,y),o.selectionDeferId!==null&&Fp(o.selectionDeferId),o.selectionDeferId=Ob(function(){o.selectionDeferId=null,_b(g,h,y)}),o.previousSelection={start:h,end:y,length:Math.abs(y-h)})},o.getSelection=function(){return fH(o.getInputDOMNode())},o.getCursorPosition=function(){return o.getSelection().start},o.setCursorPosition=function(h){o.setSelection(h,h)},o.isFocused=function(){return o.focused},o.getBeforeMaskedValueChangeConfig=function(){var h=o.maskOptions,y=h.mask,b=h.maskChar,g=h.permanents,v=h.formatChars;return{mask:y,maskChar:b,permanents:g,alwaysShowMask:!!o.props.alwaysShowMask,formatChars:v}},o.isInputAutofilled=function(h,y,b,g){var v=o.getInputDOMNode();try{if(v.matches(":-webkit-autofill"))return!0}catch{}return!o.focused||g.end<b.length&&y.end===h.length},o.onChange=function(h){var y=Go(Go(o)).beforePasteState,b=Go(Go(o)).previousSelection,g=o.props.beforeMaskedValueChange,v=o.getInputValue(),w=o.value,E=o.getSelection();o.isInputAutofilled(v,E,w,b)&&(w=Jn(o.maskOptions,""),b={start:0,end:0,length:0}),y&&(b=y.selection,w=y.value,E={start:b.start+v.length,end:b.start+v.length,length:0},v=w.slice(0,b.start)+v+w.slice(b.end),o.beforePasteState=null);var S=yH(o.maskOptions,v,E,w,b),P=S.enteredString,k=S.selection,_=S.value;if(Ot(g)){var T=g({value:_,selection:k},{value:w,selection:b},P,o.getBeforeMaskedValueChangeConfig());_=T.value,k=T.selection}o.setInputValue(_),Ot(o.props.onChange)&&o.props.onChange(h),o.isWindowsPhoneBrowser?o.setSelection(k.start,k.end,{deferred:!0}):o.setSelection(k.start,k.end)},o.onFocus=function(h){var y=o.props.beforeMaskedValueChange,b=o.maskOptions,g=b.mask,v=b.prefix;if(o.focused=!0,o.mounted=!0,g){if(o.value)Ta(o.maskOptions,o.value)<o.maskOptions.mask.length&&o.setCursorToEnd();else{var w=Jn(o.maskOptions,v),E=Jn(o.maskOptions,w),S=Ta(o.maskOptions,E),P=qa(o.maskOptions,S),k={start:P,end:P};if(Ot(y)){var _=y({value:E,selection:k},{value:o.value,selection:null},null,o.getBeforeMaskedValueChangeConfig());E=_.value,k=_.selection}var T=E!==o.getInputValue();T&&o.setInputValue(E),T&&Ot(o.props.onChange)&&o.props.onChange(h),o.setSelection(k.start,k.end)}o.runSaveSelectionLoop()}Ot(o.props.onFocus)&&o.props.onFocus(h)},o.onBlur=function(h){var y=o.props.beforeMaskedValueChange,b=o.maskOptions.mask;if(o.stopSaveSelectionLoop(),o.focused=!1,b&&!o.props.alwaysShowMask&&Pb(o.maskOptions,o.value)){var g="";Ot(y)&&(g=y({value:g,selection:null},{value:o.value,selection:o.previousSelection},null,o.getBeforeMaskedValueChangeConfig()).value);var v=g!==o.getInputValue();v&&o.setInputValue(g),v&&Ot(o.props.onChange)&&o.props.onChange(h)}Ot(o.props.onBlur)&&o.props.onBlur(h)},o.onMouseDown=function(h){if(!o.focused&&document.addEventListener){o.mouseDownX=h.clientX,o.mouseDownY=h.clientY,o.mouseDownTime=new Date().getTime();var y=function b(g){if(document.removeEventListener("mouseup",b),o.focused){var v=Math.abs(g.clientX-o.mouseDownX),w=Math.abs(g.clientY-o.mouseDownY),E=Math.max(v,w),S=new Date().getTime()-o.mouseDownTime;(E<=10&&S<=200||E<=5&&S<=300)&&o.setCursorToEnd()}};document.addEventListener("mouseup",y)}Ot(o.props.onMouseDown)&&o.props.onMouseDown(h)},o.onPaste=function(h){Ot(o.props.onPaste)&&o.props.onPaste(h),h.defaultPrevented||(o.beforePasteState={value:o.getInputValue(),selection:o.getSelection()},o.setInputValue(""))},o.handleRef=function(h){o.props.children==null&&Ot(o.props.inputRef)&&o.props.inputRef(h)};var i=r.mask,a=r.maskChar,l=r.formatChars,s=r.alwaysShowMask,c=r.beforeMaskedValueChange,d=r.defaultValue,f=r.value;o.maskOptions=kb(i,a,l),d==null&&(d=""),f==null&&(f=d);var m=Rp(f);if(o.maskOptions.mask&&(s||m)&&(m=Jn(o.maskOptions,m),Ot(c))){var p=r.value;r.value==null&&(p=d),m=c({value:m,selection:null},{value:p=Rp(p),selection:null},null,o.getBeforeMaskedValueChangeConfig()).value}return o.value=m,o}cH(t,e);var n=t.prototype;return n.componentDidMount=function(){this.mounted=!0,this.getInputDOMNode()&&(this.isWindowsPhoneBrowser=xH(),this.maskOptions.mask&&this.getInputValue()!==this.value&&this.setInputValue(this.value))},n.componentDidUpdate=function(){var r=this.previousSelection,o=this.props,i=o.beforeMaskedValueChange,a=o.alwaysShowMask,l=o.mask,s=o.maskChar,c=o.formatChars,d=this.maskOptions,f=a||this.isFocused(),m=this.props.value!=null,p=m?Rp(this.props.value):this.value,h=r?r.start:null;if(this.maskOptions=kb(l,s,c),this.maskOptions.mask){!d.mask&&this.isFocused()&&this.runSaveSelectionLoop();var y=this.maskOptions.mask&&this.maskOptions.mask!==d.mask;if(d.mask||m||(p=this.getInputValue()),(y||this.maskOptions.mask&&(p||f))&&(p=Jn(this.maskOptions,p)),y){var b=Ta(this.maskOptions,p);(h===null||b<h)&&(h=cP(this.maskOptions,p)?b:qa(this.maskOptions,b))}!this.maskOptions.mask||!Pb(this.maskOptions,p)||f||m&&this.props.value||(p="");var g={start:h,end:h};if(Ot(i)){var v=i({value:p,selection:g},{value:this.value,selection:this.previousSelection},null,this.getBeforeMaskedValueChangeConfig());p=v.value,g=v.selection}this.value=p;var w=this.getInputValue()!==this.value;w?(this.setInputValue(this.value),this.forceUpdate()):y&&this.forceUpdate();var E=!1;g.start!=null&&g.end!=null&&(E=!r||r.start!==g.start||r.end!==g.end),(E||w)&&this.setSelection(g.start,g.end)}else d.mask&&(this.stopSaveSelectionLoop(),this.forceUpdate())},n.componentWillUnmount=function(){this.mounted=!1,this.selectionDeferId!==null&&Fp(this.selectionDeferId),this.stopSaveSelectionLoop()},n.render=function(){var r,o=this.props,i=(o.mask,o.alwaysShowMask,o.maskChar,o.formatChars,o.inputRef,o.beforeMaskedValueChange,o.children),a=uH(o,["mask","alwaysShowMask","maskChar","formatChars","inputRef","beforeMaskedValueChange","children"]);if(i){Ot(i)||Cb(!1);var l=["onChange","onPaste","onMouseDown","onFocus","onBlur","value","disabled","readOnly"],s=Lm({},a);l.forEach(function(d){return delete s[d]}),r=i(s),l.filter(function(d){return r.props[d]!=null&&r.props[d]!==a[d]}).length&&Cb(!1)}else r=Lp.createElement("input",Lm({ref:this.handleRef},a));var c={onFocus:this.onFocus,onBlur:this.onBlur};return this.maskOptions.mask&&(a.disabled||a.readOnly||(c.onChange=this.onChange,c.onPaste=this.onPaste,c.onMouseDown=this.onMouseDown),a.value!=null&&(c.value=this.value)),r=Lp.cloneElement(r,c)},t}(Lp.Component),SH=wH;lP.exports=SH;var EH=lP.exports;const CH=Ri(EH);C.div`
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
`;C.h2`
  text-align: left;
  color: #fff;
  font-size: 28px;
  margin-bottom: 30px;
  font-weight: 700;
`;C.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  text-align: left;

  @media screen and (min-width: 1200px) {
    flex-direction: row;
    align-items: flex-start;
  }
`;C.div`
  background: #ffffff;
  border-radius: 12px;
  padding: 25px;
  flex: 1;
`;C.form`
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
`;const zp=C.div`
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
`,Np=C.label`
  font-size: 14px;
  color: #666;
  margin-bottom: 5px;
`,Bp=C.input`
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 16px;
  outline: none;

  &:focus {
    border-color: #f58220; /* Помаранчевий колір з кнопки */
  }
`;C.div`
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
`;const Vp=C.span`
  color: #e74c3c;
  font-size: 11px;
  margin-top: 4px;
  text-align: left;
  font-weight: 500;
`;C.button`
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
`;C.ul`
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
`;C.li`
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
`;C.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 6px;
  border: 1px solid #eee;
  background-color: #f9f9f9;
`;C.div`
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
`;const _H=({formData:e,setFormData:t,errors:n})=>{const r=o=>{const{name:i,value:a}=o.target;i==="phone"&&!a.startsWith("+38 (0")||t(l=>({...l,[i]:a}))};return u.jsxs(u.Fragment,{children:[u.jsx("h3",{children:"Контактні дані"}),u.jsxs(zp,{children:[u.jsx(Np,{children:"Прізвище та ім’я"}),u.jsx(Bp,{type:"text",name:"fullName",value:e.fullName,onChange:r,placeholder:"Прізвище Ім'я",autoComplete:"name"}),n.fullName&&u.jsx(Vp,{children:n.fullName})]}),u.jsxs(zp,{children:[u.jsx(Np,{children:"Номер телефону"}),u.jsx(CH,{mask:"+38 (099) 999-99-99",maskChar:"_",name:"phone",autoComplete:"tel",value:e.phone,onChange:r,children:o=>u.jsx(Bp,{...o,type:"tel"})}),n.phone&&u.jsx(Vp,{children:n.phone})]}),u.jsxs(zp,{children:[u.jsx(Np,{children:"E-mail"}),u.jsx(Bp,{type:"email",name:"email",value:e.email,onChange:r,placeholder:"email@example.com",autoComplete:"email"}),n.email&&u.jsx(Vp,{children:n.email})]})]})},kH=({options:e,value:t,onChange:n,error:r})=>{const o=e.find(i=>i.value===t)||null;return u.jsxs("div",{style:{marginBottom:"20px"},children:[u.jsx("label",{style:{display:"block",marginBottom:"8px"},children:"Спосіб оплати"}),u.jsx(Xd,{options:e,value:o,onChange:i=>n(i==null?void 0:i.value),placeholder:"Оберіть спосіб оплати",styles:{control:i=>({...i,borderColor:r?"red":i.borderColor})}}),r&&u.jsx("span",{style:{color:"red",fontSize:"12px"},children:"Оберіть спосіб оплати"})]})},PH=e=>{if(!e)return"";const t=e.replace(/\D/g,"");return t.length!==10?e:`+38 (${t.slice(0,3)}) ${t.slice(3,6)}-${t.slice(6,8)}-${t.slice(8,10)}`},Tb=async(e,t,n)=>{if(!(e!=null&&e.documentId)||!t)return;const r=await fetch(`https://backenddidiv-production.up.railway.app/api/cart-items?filters[user][documentId][$eq]=${e.documentId}`,{headers:{Authorization:`Bearer ${t}`}});if(!r.ok)throw new Error("Не вдалося отримати кошик");const{data:o}=await r.json();await Promise.all(o.map(i=>fetch(`https://backenddidiv-production.up.railway.app/api/cart-items/${i.documentId}`,{method:"DELETE",headers:{Authorization:`Bearer ${t}`}}))),n(fr())},jb={}.VITE_NP_API_KEY,$b="https://api.novaposhta.ua/v2.0/json/",OH=()=>{const e=Ye(z=>z.cart.items),t=et(),n=Lt(),r=localStorage.getItem("token"),o=x.useMemo(()=>{const z=localStorage.getItem("user");return z?JSON.parse(z):null},[]),[i,a]=x.useState({fullName:"",phone:"+38(0",email:"",city:"",postOffice:""}),[l,s]=x.useState(""),[c,d]=x.useState(null),[f,m]=x.useState(null),[p,h]=x.useState(null),[y,b]=x.useState(null),[g,v]=x.useState([]),[w,E]=x.useState([]),[S,P]=x.useState(null),[k,_]=x.useState(!1),T=x.useRef(!1);x.useEffect(()=>{!o||T.current||(T.current=!0,a({fullName:`${o.last_name||""} ${o.first_name||""}`.trim(),phone:PH(o.phone),email:o.email||""}))},[o]);const $=e.filter(z=>z.available!==!1&&z.stock!==0).reduce((z,V)=>z+(V.new_price??V.price)*V.quantity,0),I=e.filter(z=>z.available!==!1&&z.stock!==0),M=e.filter(z=>z.available!==!1&&z.stock!==0).reduce((z,V)=>z+V.quantity,0),R=(()=>{const z=new Date().getFullYear().toString().slice(-2),V=Date.now().toString().slice(-4),U=Math.floor(100+Math.random()*900);return`${z}${V}${U}`})();x.useEffect(()=>{if(l.length<2)return;const z=setTimeout(async()=>{try{const V=await fetch($b,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({apiKey:jb,modelName:"Address",calledMethod:"getCities",methodProperties:{FindByString:l}})});if(!V.ok)throw new Error(`HTTP помилка: ${V.status}`);const U=await V.json();U.success&&Array.isArray(U.data)?v(U.data.map(G=>({value:G.Ref,label:G.Description}))):(console.warn("API Нової Пошти повернуло помилку або порожній список міст:",U.errors),v([]))}catch(V){console.error("Не вдалося завантажити міста:",V)}},500);return()=>clearTimeout(z)},[l]),x.useEffect(()=>{if(!c||f!=="nova")return;(async()=>{try{const V=await fetch($b,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({apiKey:jb,modelName:"AddressGeneral",calledMethod:"getWarehouses",methodProperties:{CityRef:c.value}})});if(!V.ok)throw new Error(`HTTP помилка: ${V.status}`);const U=await V.json();U.success&&Array.isArray(U.data)?E(U.data.map(G=>({value:G.Ref,label:G.Description}))):(console.warn("API Нової Пошти повернуло помилку або порожній список відділень:",U.errors),E([]))}catch(V){console.error("Не вдалося завантажити відділення Нової Пошти:",V)}})()},[c,f]);const D=z=>{d(z),a(V=>({...V,city:(z==null?void 0:z.label)||"",postOffice:""})),m(null),h(null),b(null)},F=()=>{const z={};return i.fullName.trim().split(" ").length<2&&(z.fullName="Введіть прізвище та ім'я"),/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(i.email)||(z.email="Некоректний email"),i.phone.replace(/\D/g,"").length<12&&(z.phone="Номер неповний"),c||(z.city=!0),f==="nova"&&!p&&(z.postOffice=!0),f==="ukr"&&!y&&(z.postOffice=!0),f||(z.delivery=!0),S||(z.payment=!0),z},L=x.useMemo(F,[i,f,p,y,c,S]),O=Object.keys(L).length===0&&e.length>0,A=async z=>{if(z.preventDefault(),!S){alert("Оберіть спосіб оплати");return}const V={"Content-Type":"application/json"};r&&(V.Authorization=`Bearer ${r}`);try{if(!(await fetch("https://backenddidiv-production.up.railway.app/api/orders",{method:"POST",headers:V,body:JSON.stringify({data:{name:i.fullName,phone:i.phone,email:i.email,city:i.city,date:new Date().toISOString(),products:e==null?void 0:e.map(W=>{var Y;return{id:W==null?void 0:W.id,name:W==null?void 0:W.name,quantity:W==null?void 0:W.quantity,price:(W==null?void 0:W.new_price)??W.price,image:(Y=W==null?void 0:W.images)==null?void 0:Y[0].url,slug:W==null?void 0:W.slug}}),status_order:"pending",order_number:R,no_call:k,...(o==null?void 0:o.documentId)&&{user:o.documentId},payment_method:S==="liqpay"?"Онлайн (LiqPay)":S==="cod"?"Післяплата":S==="bank_transfer"?"Оплата за реквізитами":"",delivery_method:f==="nova"?"Нова Пошта":f==="ukr"?"УкрПошта":"Самовивіз",delivery_address:f==="nova"?p==null?void 0:p.label:f==="ukr"?y:"Самовивіз"}})})).ok)throw new Error("Не вдалося створити замовлення");for(const W of e){const Y=Math.max(0,W.stock-W.quantity);(await fetch(`https://backenddidiv-production.up.railway.app/api/products/${W.documentId}`,{method:"PUT",headers:{"Content-Type":"application/json",...r&&{Authorization:`Bearer ${r}`}},body:JSON.stringify({data:{stock:Y,...Y===0&&{sold_date:new Date().toISOString()}}})})).ok||console.error(`Не вдалося оновити stock товару ${W.name}`)}if(S==="liqpay"){const W=await fetch("https://backenddidiv-production.up.railway.app/api/liqpay/create",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({amount:$,order_number:R})}),{data:Y,signature:Q}=await W.json();await Tb(o,r,n);const ie=document.createElement("form");ie.method="POST",ie.action="https://www.liqpay.ua/api/3/checkout",ie.innerHTML=`
        <input type="hidden" name="data" value="${Y}" />
        <input type="hidden" name="signature" value="${Q}" />
      `,document.body.appendChild(ie),ie.requestSubmit();return}const G={...i,name:i.fullName,city:c.label,deliveryMethod:f==="nova"?"Нова Пошта":f==="ukr"?"УкрПошта":"Самовивіз",address:f==="nova"?p==null?void 0:p.label:f==="ukr"?y:"Самовивіз",products:e==null?void 0:e.map(W=>({id:W.id,name:W.name,quantity:W.quantity,price:W.new_price??W.price})),total:$,order_number:R,delivery_address:f==="nova"?p==null?void 0:p.label:f==="ukr"?y:"Самовивіз",payment_method:S==="liqpay"?"Онлайн (LiqPay)":S==="cod"?"Післяплата":S==="bank_transfer"?"Оплата за реквізитами":""};await Tb(o,r,n),t("/order-confirmation",{state:{order:G}})}catch(U){console.error(U),alert("Помилка оформлення")}},N=x.useMemo(()=>[{value:"nova",label:"Нова пошта"},{value:"ukr",label:"Укрпошта"}],[]),B=[{value:"liqpay",label:"Онлайн оплата (LiqPay)"},{value:"cod",label:"Післяплата"},{value:"bank_transfer",label:"Оплата за реквізитами"}];return u.jsx(JU,{children:u.jsxs(eH,{children:[u.jsxs(tH,{children:[u.jsx(_H,{formData:i,setFormData:a,errors:L}),u.jsx(RU,{cityOptions:g,selectedCity:c,onChange:D,onInputChange:s}),u.jsx(NU,{options:N,value:f,onChange:m,selectedCity:c}),u.jsx(BU,{deliveryMethod:f,officeOptions:w,selectedOffice:p,selectedUkrOffice:y,setSelectedOffice:h,setSelectedUkrOffice:b}),u.jsx(kH,{options:B,value:S,onChange:P,error:L.payment})]}),u.jsx(iH,{cartItems:I,totalAmount:$,totalQuantity:M,isFormValid:O,handleSubmit:A,setNoCall:_,noCall:k})]})})},TH=C.div`
font-family: var(--main-font);
  max-width: 800px;
  margin: 40px auto;
  padding: 40px 20px;
  background: #ffffff;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  text-align: center;
  font-family: 'Inter', sans-serif;
`,jH=C.h1`
font-family: var(--second-font);
  color: var(--orange-color); 
  font-size: 28px;
  font-weight: 800;
  margin-bottom: 16px;
`,Qr=C.p`
font-family: var(--second-font);
  font-size: 16px;
  color: #555;
  line-height: 1.6;
  margin-bottom: 8px;

  strong {
    color: #1a1a1a;
  }
`,$H=C.div`
font-family: var(--second-font);
  background: #f8f9fa;
  border-radius: 12px;
  padding: 24px;
  margin: 30px 0;
  text-align: left;
  border: 1px solid #edf2f7;
`,IH=C.h3`
  font-size: 18px;
  font-weight: 500;
  color: #1a1a1a;
  margin-bottom: 16px;
  border-bottom: 2px solid #e2e8f0;
  padding-bottom: 8px;
`,MH=C.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 20px;
`,AH=C.li`
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
`;C.div`
  background: #fff4e5; 
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 30px;
  border: 1px solid #ffe3c1;
`;const DH=C.div`
  display: flex;
  gap: 15px;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 20px;
`,Ib=C.button`
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
`,LH=()=>{var m,p;const e=et(),t=Wn(),[n]=mw(),r=Lt(),o=(m=t.state)==null?void 0:m.order,i=n.get("orderId"),[a,l]=x.useState(o||null),[s,c]=x.useState(!o);x.useEffect(()=>{r(fr())},[r]),x.useEffect(()=>{o||(i?fetch(`https://backenddidiv-production.up.railway.app/api/orders?filters[order_number][$eq]=${i}&populate=*`).then(h=>h.json()).then(h=>{var y;((y=h.data)==null?void 0:y.length)>0&&l(h.data[0]),c(!1)}).catch(()=>c(!1)):c(!1))},[i,o]);const f=((a==null?void 0:a.products)??[]).reduce((h,y)=>h+Number(y.new_price??y.price)*(y.quantity||1),0);return s?u.jsx("div",{children:"Завантаження..."}):a?u.jsxs(TH,{children:[u.jsx(jH,{children:"Дякуємо за ваше замовлення!"}),u.jsxs(Qr,{children:["Ваше замовлення ",u.jsxs("strong",{children:["№",a.order_number]})," успішно прийняте."]}),u.jsx(Qr,{children:"Ми зв’яжемось з Вами в найближчий час"}),u.jsxs($H,{children:[u.jsx(IH,{children:"Деталі замовлення:"}),u.jsx(MH,{children:(p=a.products)==null?void 0:p.map(h=>u.jsxs(AH,{children:[u.jsxs("span",{className:"item-info",children:[h.name," (x",h.quantity,")"]}),u.jsxs("span",{className:"item-price",children:[(h.new_price??h.price)*(h.quantity||1)," грн"]})]},h.id))}),u.jsxs(Qr,{children:[u.jsx("strong",{children:"На суму:"})," ",f," грн."]}),u.jsxs(Qr,{children:[u.jsx("strong",{children:"Отрмувач:"})," ",a.name,", ",a.phone,"."]}),u.jsxs(Qr,{children:[u.jsx("strong",{children:"Спосіб доставки:"})," ",a.deliveryMethod,"."]}),u.jsxs(Qr,{children:[u.jsx("strong",{children:"Адреса отримання:"})," ",a.city,","," ",a.delivery_address,"."]}),u.jsxs(Qr,{children:[u.jsx("strong",{children:"Спосіб оплати:"})," ",a.payment_method,"."]})]}),u.jsxs(DH,{children:[u.jsx(Ib,{onClick:()=>e("/"),children:"Повернутися на головну"}),u.jsx(Ib,{onClick:()=>e("/catalog"),children:"Продовжити покупки"})]})]}):u.jsxs("div",{children:["Замовлення не знайдено",u.jsx("button",{onClick:()=>e("/"),children:"На головну"})]})},RH=C.section`
  background-color: var(--second-background);
`,FH=C.div`
  width: 100%;
  max-width: 750px;
  padding-left: 10px;
  padding-right: 10px;
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
`,zH=C.section`
  padding: 40px 0;
  background-color: #f9f9f980;
  border-radius: 12px;
  margin-bottom: 30px;
`,NH=C.h1`
  font-family: var(--main-font);
  font-size: 28px;
  color: var(--black-color);
  margin-bottom: 10px;

  @media screen and (min-width: 768px) {
    font-size: 42px;
  }
`,BH=C.p`

  font-size: 16px;
  color: #666;
`,VH=C.section`
  margin-bottom: 50px;
`,WH=C.p`
  font-family: var(--second-font);
  font-weight:400;
  font-size: 18px;
  line-height: 1.6;
  max-width: 800px;
  margin: 0 auto 40px;
  color: #444;
`,UH=C.section`
  margin-bottom: 60px;
`,HH=C.h2`
  margin-bottom: 30px;
`,GH=C.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
`,Pl=C.div`
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
`,qH=()=>u.jsxs(RH,{children:[u.jsxs(FH,{children:[u.jsxs(zH,{children:[u.jsx(NH,{children:"Про Дідів Хлів"}),u.jsx(BH,{children:"Даємо друге життя якісним велозапчастинам"})]}),u.jsxs(VH,{children:[u.jsx(WH,{children:"Бізнес створений з переконанням, що обладнання може бути доступним. Ми спеціалізуємося на розборі цікавих і унікальних велосипедів, усі запчастини перевірені нами. Стараємося пропонувати тільки найкраще від Shimano, Sram, Campagnolo та інших світових брендів."}),u.jsx(f_,{})]}),u.jsxs(UH,{children:[u.jsx(HH,{children:"Наша майстерня"}),u.jsxs(GH,{children:[u.jsx(Pl,{color:"#e2e2e2",children:"Фото майстерні"}),u.jsx(Pl,{color:"#d1d1d1",children:"Процес діагностики"}),u.jsx(Pl,{color:"#bcbcbc",children:"Склад запчастин"}),u.jsx(Pl,{color:"#a8a8a8",children:"Готові велосипеди"})]})]})]})," "]}),YH=()=>{const{pathname:e}=Wn();return x.useEffect(()=>{window.scrollTo(0,0)},[e]),null},XH=C.section`
  background-color:  var(--second-background);
  padding: 40px 0;
  min-height: 80vh;
`,KH=C.div`
  width: 100%;
  max-width: 750px;
  padding-left: 10px;
  padding-right: 10px;
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
`,QH=C.h1`
  font-family: var(--main-font); 
  font-size: 32px;
  color: var(--black-color);
  margin-bottom: 10px;
  text-transform: uppercase;
`,ZH=C.p`
  color: #585555;
  margin-bottom: 40px;
`,JH=C.div`
font-family: var(--second-font);
font-weight: 400;
  display: grid;
  gap: 40px;
  text-align: left;

  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    align-items: start;
  }
`,eG=C.div`
height: 427px;
  display: grid;
  gap: 25px;
    background: #ffffff;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
`,Ol=C.div`
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
`,tG=C.div`
  background: #ffffff;
  padding: 40px 30px;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%; 
`,nG=C.h2`
  margin-bottom: 15px;
  color: var(--brown-color);
  font-size: 24px;
  font-family: var(--main-font);
`,rG=C.p`
  color: #666;
  font-size: 14px;
  line-height: 1.6;
  margin-bottom: 30px;
`,oG=C.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
  
  @media screen and (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`,Mb=C.a`
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
`;C.div`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: bold;
`;const iG=C.div`
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

 
`,aG=()=>u.jsx(XH,{children:u.jsxs(KH,{children:[u.jsx(QH,{children:"Контакти"}),u.jsx(ZH,{children:"Зв’яжіться з нами для консультації або замовлення"}),u.jsxs(JH,{children:[u.jsxs(eG,{children:[u.jsxs(Ol,{children:[u.jsx("h3",{children:"Адреса"}),u.jsx("p",{children:"вул. Казармена 6Г, Київ, Україна"}),u.jsx("a",{style:{color:"black",fontWeight:"500",fontSize:"0.9rem",display:"inline-block",marginTop:"5px",cursor:"pointer"},href:"https://www.google.com/maps/search/?api=1&query=вул.+Казармена+6Г,+Київ,+Україна",target:"_blank",rel:"noopener noreferrer",children:"📍 Показати на карті"})]}),u.jsxs(Ol,{children:[u.jsx("h3",{children:"Телефон"}),u.jsx("p",{children:"+38 (097) 123-45-67"})]}),u.jsxs(Ol,{children:[u.jsx("h3",{children:"Email"}),u.jsx("p",{children:"didivhliv.com"})]}),u.jsxs(Ol,{children:[u.jsx("h3",{children:"Графік роботи"}),u.jsx("p",{children:"З 11:00 - 20:00"}),u.jsx("p",{children:"Вихідні: Пн, Чт"})]})]}),u.jsxs(tG,{children:[u.jsx(nG,{children:"Ми в соцмережах"}),u.jsx(rG,{children:"Слідкуйте за нашими новинами, новими надходженнями та крутими вело-поїздками у зручному для вас форматі."}),u.jsxs(oG,{children:[u.jsxs(Mb,{href:"https://www.instagram.com/didivxliv?igsh=MXhsNWRjdW5rajYwdQ==",target:"_blank",rel:"noopener noreferrer",children:[u.jsx("svg",{width:"20px",children:u.jsx("use",{href:`${xn}#icon-instagram`})}),u.jsx("span",{children:"Instagram"})]}),u.jsxs(Mb,{href:"https://t.me/didivxliv",target:"_blank",rel:"noopener noreferrer",children:[u.jsx("svg",{width:"20px",children:u.jsx("use",{href:`${xn}#icon-telegram`})}),u.jsx("span",{children:"Telegram"})]})]}),u.jsx(iG,{children:"Приєднуйся до спільноти!"})]})]})]})}),sG=C.section`
  background-color:  var(--second-background);
`,lG=C.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
    margin-left: auto;
  margin-right: auto;
  align-items: center;
        padding: 20px 10px;
min-height: calc(100vh - 120px); 
/* min-height: 100vh; */
 @media screen and (min-width: 768px) {
    max-width: 994px;
    padding-left: 30px;
    padding-right: 30px;
  }
  @media screen and (min-width: 1200px) {
    max-width: 1448px;
   
  }
  
`,cG=C.div`
 
     width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  
`,uG=C.h1`
  /* flex: 1;
   text-align:center; */

    font-size: 25px;
font-family: var(--main-font);
color: var( --black-color);
text-transform: uppercase;
 @media screen and (min-width: 360px) {
  font-size: 32px;
  }
`,dG=C.div`
  position: relative;
  display: inline-block;
    /* flex-shrink: 0; */
`,fG=C.div`
 width: 100%;
  display: grid;
  gap: 15px;

  grid-template-columns: 1fr;
      margin-bottom: 30px;
      @media screen and (max-width: 768px) 
  {
        width: 100%;
        max-width: 750px;
        grid-template-columns: repeat(2, 1fr);
        gap: 10px;
    }

  @media screen and (min-width: 768px) {
 
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
  }

  @media screen and (min-width: 1440px) {

    grid-template-columns: repeat(4, 1fr);
  }
`,pG=C.div`
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
   ${({$soldOut:e})=>e&&`
      opacity: 0.55;
      filter: grayscale(100%);
    `}
`,hG=C.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  padding:10px;

`,mG=C.div`
  padding: 10px;
      display: flex;
    align-content: center;
    align-items: center;
        justify-content: space-between;
`,gG=C.p`
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
 
`;C.p`
 font-size: 17px;
    font-weight: 800;
 
`;C.svg`
  width: 24px;
  height: 24px;
  fill: var(--white-color);
`;C.svg`
  width: 24px;
  height: 24px;
  fill: var(--white-color);
`;const vG=C.div.attrs({className:"card-buttons"})`
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
`,dP=C.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  flex-wrap: wrap;
  gap: 5px;
  margin-bottom: 15px;
  margin-top: auto; 
 padding-top: 40px; 
`,yi=C.button`
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
`,yG=C.button`
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
`,xG=C.div`
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
`,qo=C.div`
  padding: 10px 12px;
  cursor: pointer;

  &:hover {
    background: #f0f0f0;
  }
`,fP=C.div`
  height: 80vh;
          display: flex;
          flex-direction:
          column;
          justify-content: center;
          align-items: center;
          font-size: 30px;
`,pP=C(ge)`
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
  
`,bG=C.section`
  background-color: var(--second-background);
  /* min-height: 100vh; */
`,wG=C.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-left: auto;
  margin-right: auto;

  padding: 30px 10px;
  min-height: calc(100vh - 180px); /* 180px — це приблизна висота твоєї темної шапки */


  @media screen and (min-width: 768px) {
    max-width: 994px;
    padding: 40px 30px;
  }

  @media screen and (min-width: 1200px) {
    max-width: 1448px;
  }
`,SG=C.div`
width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`,EG=C.h1`

    font-size: 25px;
font-family: var(--main-font);
color: var( --black-color);
text-transform: uppercase;
 @media screen and (min-width: 360px) {
  font-size: 32px;
  }


@media screen and (min-width: 768px) {

  text-align:center;

  }

`,CG=C.div`
  width: 100%;
  display: grid;
  gap: 15px;

  grid-template-columns: 1fr;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
  }
`,_G=C.div`
position: relative;
  background: #fff;
  border-radius: 16px;
  overflow: hidden;

  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);

  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;

  &:hover {
    @media screen and (min-width: 768px) {
      transform: scale(1.05);
      box-shadow: 0 10px 24px rgba(0, 0, 0, 0.12);
    }
  }
   ${({$soldOut:e})=>e&&`
      opacity: 0.55;
      filter: grayscale(100%);
    `}
`;C.div`
  position: absolute;
  top: 25px;
  left: 25px;

  padding: 6px 12px;
  border-radius: 20px;

  background: var(--red-color);
  color: #fff;
  font-size: 14px;
  font-weight: 400;
  text-transform: uppercase;
  z-index: 10;
`;const hP=C.div`
  position: relative;
`,kG=C.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
 padding: 10px;
`,PG=C.p`
  font-family: var(--second-font);
  font-size: 16px;
  font-weight: 500;

  padding: 0 16px;
  margin-bottom: 10px;

  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

  overflow: hidden;
  text-overflow: ellipsis;

  min-height: 40px;
`,OG=C.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 10px 10px;
`;C.span`
  font-size: 16px;
  font-weight: 700;

  &:last-child {
    font-size: 14px;
    color: #999;
    text-decoration: line-through;
    font-weight: 400;
  }
`;const TG=C.div.attrs({className:"card-buttons"})`
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
`,xu=C.button`
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
`;C.svg`
  width: 24px;
  height: 24px;
  fill: var(--white-color);
`;C.svg`
  width: 24px;
  height: 24px;
  fill: var(--white-color);
`;const jG=C.div`
  position: relative;
  display: inline-block;
  display:flex;
  
`,$G=C.div`
  position: absolute;
  top: 110%;
  right: 0;

  background: white;
  border: 1px solid #ddd;
  border-radius: 8px;

  min-width: 160px;
  padding: 6px 0;


  box-shadow:5px 5px 20px rgba(0,0,0,0.1);
  z-index: 1000;
`,Yo=C.div`
  padding: 10px 12px;
  cursor: pointer;

  &:hover {
    background: #f0f0f0;
  }
`,IG=C.button`
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
`,MG=()=>{const[e,t]=x.useState([]),[n,r]=x.useState(!0),o=Ye(S=>S.favorites.items),i=Ye(S=>S.cart.items),[a,l]=x.useState(!1),[s,c]=x.useState("date"),[d,f]=x.useState("asc"),[m,p]=x.useState(1),[h,y]=x.useState(1),b=et(),g=Lt(),v=x.useRef(null);x.useEffect(()=>{const S=P=>{v.current&&!v.current.contains(P.target)&&l(!1)};return document.addEventListener("mousedown",S),()=>{document.removeEventListener("mousedown",S)}},[]),x.useEffect(()=>{window.scrollTo({top:0,behavior:"smooth"})},[m]),x.useEffect(()=>{(async()=>{const P=new Date,k=new Date;k.setDate(P.getDate()-7);const _=k.toISOString();try{r(!0);const T=await fetch(`https://backenddidiv-production.up.railway.app/api/products?populate=*&filters[createdAt][$gte]=${_}&pagination[page]=${m}&pagination[pageSize]=24`);if(!T.ok)throw new Error(`HTTP error! Status: ${T.status}`);const $=await T.json();t($.data),y($.meta.pagination.pageCount)}catch(T){console.error("Помилка при завантаженні продуктів:",T)}finally{r(!1)}})()},[m]);const w=x.useMemo(()=>{const S=[...e],P=k=>k.new_price&&k.new_price<k.price?k.new_price:k.price;switch(s){case"name":return S.sort((k,_)=>d==="asc"?k.name.localeCompare(_.name):_.name.localeCompare(k.name));case"price":return S.sort((k,_)=>{const T=P(k),$=P(_);return d==="asc"?T-$:$-T});case"date":return S.sort((k,_)=>d==="asc"?new Date(k.createdAt)-new Date(_.createdAt):new Date(_.createdAt)-new Date(k.createdAt));default:return S}},[s,e,d]),E=(S,P)=>{P.stopPropagation();const k=o.some(_=>_.id===(S==null?void 0:S.id));jo(S,k,g,K)};return n?u.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"100vw",height:"100vh"},children:u.jsx($o,{height:100,width:100,radius:5,color:"var(--orange-color)",ariaLabel:"ball-triangle-loading",wrapperStyle:{},wrapperClass:"",visible:!0})}):w.length===0?u.jsxs(fP,{children:[u.jsx("p",{style:{textAlign:"center"},children:"Нажаль, нічого нового за останній тиждень"}),u.jsxs(pP,{to:"/catalog",children:[u.jsx("p",{children:"Весь каталог"}),u.jsx(Uu,{size:24})]})]}):u.jsxs(sG,{children:[u.jsxs(lG,{children:[u.jsx(Un,{autoClose:1500}),u.jsxs(YE,{children:[u.jsx(ge,{to:"/",children:"Головна"})," / ",u.jsx(ge,{to:"/catalog/new",children:"Новинки"})]}),u.jsxs(cG,{children:[u.jsx(uG,{children:"Нові товари "}),u.jsxs(dG,{ref:v,children:[u.jsxs(yG,{onClick:()=>l(S=>!S),children:["Сортування",u.jsx(Wu,{strokeWidth:.9,size:22})]}),a&&u.jsxs(xG,{children:[u.jsx(qo,{onClick:()=>{c("name"),f("asc"),l(!1)},children:"А-Я"}),u.jsx(qo,{onClick:()=>{c("name"),f("desc"),l(!1)},children:"Я-А"}),u.jsx(qo,{onClick:()=>{c("price"),f("asc"),l(!1)},children:"Ціна ↑"}),u.jsx(qo,{onClick:()=>{c("price"),f("desc"),l(!1)},children:"Ціна ↓"}),u.jsx(qo,{onClick:()=>{c("date"),f("desc"),l(!1)},children:"Спочатку новіші"}),u.jsx(qo,{onClick:()=>{c("date"),f("asc"),l(!1)},children:"Спочатку старіші"})]})]})]}),u.jsx(fG,{children:w.map(S=>{var F,L,O;const P=o.some(A=>A.id===S.id),k=(S==null?void 0:S.available)??!0,_=(S==null?void 0:S.stock)===0,T=i.find(A=>A.id===S.id),I=(T?T.quantity:0)>=(S.stock||0),M=S.new_price&&S.new_price<S.price,j=M?S.new_price:S.price,R=M?Math.round((S.price-S.new_price)/S.price*100):0,D=async(A,N)=>{if(N.stopPropagation(),I){K.error("Товар уже у кошику");return}await Hi(A,1,g,K)};return u.jsxs(pG,{onClick:()=>b(`/product/${S.slug??S.id}`),$soldOut:_,children:[!k&&u.jsx(Xg,{children:"Бронь"}),u.jsx(Kg,{children:"Новинка"}),u.jsxs(hP,{children:[_&&u.jsx(Yu,{children:"Продано"}),u.jsx(hG,{src:((L=(F=S.images)==null?void 0:F[0])==null?void 0:L.url)||ur,alt:S.name})]}),u.jsx(gG,{children:S.name}),u.jsxs(mG,{children:[u.jsx(Vd,{children:u.jsxs(Wd,{children:[u.jsxs(Ud,{$discount:M,children:[j==null?void 0:j.toLocaleString()," грн"]}),M&&u.jsxs(Hd,{children:[(O=S.price)==null?void 0:O.toLocaleString()," грн"]}),M&&u.jsxs(Gd,{children:["-",R,"%"]})]})}),u.jsxs(vG,{children:[k&&!_&&u.jsx(xu,{onClick:A=>D(S,A),children:u.jsx(Ui,{size:24,color:T?"var(--orange-color)":"black",strokeWidth:2})}),!_&&u.jsx(xu,{onClick:A=>E(S,A),children:u.jsx(Is,{size:24,fill:P?"#ff4d4f":"none",color:P?"#ff4d4f":"#000000",strokeWidth:P?1:2})})]})]})]},S.id)})}),u.jsxs(dP,{children:[u.jsx(yi,{onClick:()=>p(S=>Math.max(S-1,1)),disabled:m===1,children:"Назад"}),Array.from({length:h},(S,P)=>u.jsx(yi,{onClick:()=>p(P+1),active:m===P+1,children:P+1},P)),u.jsx(yi,{onClick:()=>p(S=>Math.min(S+1,h)),disabled:m===h,children:"Вперед"})]})]})," "]})},AG=()=>{const[e,t]=x.useState([]),[n,r]=x.useState(!0),[o,i]=x.useState(!1),[a,l]=x.useState("date"),[s,c]=x.useState("desc"),[d,f]=x.useState(1),m=24,p=et(),h=Lt(),y=Ye(_=>_.favorites.items),b=Ye(_=>_.cart.items),g=x.useRef(null);x.useEffect(()=>{const _=T=>{g.current&&!g.current.contains(T.target)&&i(!1)};return document.addEventListener("mousedown",_),()=>{document.removeEventListener("mousedown",_)}},[]),x.useEffect(()=>{(async()=>{const T="https://backenddidiv-production.up.railway.app";try{const I=await(await fetch(`${T}/api/products?filters[new_price][$notNull]=true&pagination[pageSize]=500&populate=*`)).json(),M=Date.now(),j=7*24*60*60*1e3,R=I.data.filter(D=>{if(D.stock>0||!D.sold_date)return!0;const F=new Date(D.sold_date).getTime();return M-F<j});t(R),r(!1)}catch($){console.log($)}})()},[]),x.useEffect(()=>{window.scrollTo({top:0,behavior:"smooth"})},[d]);const v=x.useMemo(()=>{const _=[...e];switch(a){case"name":return _.sort((T,$)=>s==="asc"?T.name.localeCompare($.name):$.name.localeCompare(T.name));case"price":return _.sort((T,$)=>s==="asc"?T.new_price-$.new_price:$.new_price-T.new_price);case"date":return _.sort((T,$)=>s==="asc"?new Date(T.createdAt)-new Date($.createdAt):new Date($.createdAt)-new Date(T.createdAt));default:return _}},[a,e,s]),w=d*m,E=w-m,S=v.slice(E,w),P=Math.ceil(e.length/m),k=(_,T)=>{T.stopPropagation();const $=y.some(I=>I.id===(_==null?void 0:_.id));jo(_,$,h,K)};return n?u.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"100vw",height:"100vh"},children:u.jsx($o,{height:100,width:100,radius:5,color:"var(--orange-color)",ariaLabel:"ball-triangle-loading",wrapperStyle:{},wrapperClass:"",visible:!0})}):e.length===0?u.jsxs(fP,{children:[u.jsx("p",{style:{textAlign:"center"},children:"Нажаль, поки знижок немає"}),u.jsxs(pP,{to:"/catalog",children:[u.jsx("p",{children:"Весь каталог"}),u.jsx(Uu,{size:24})]})]}):u.jsx(bG,{children:u.jsxs(wG,{children:[u.jsx(Un,{autoClose:1500}),u.jsxs(SG,{children:[u.jsx(EG,{children:"Акційні товари"}),u.jsxs(jG,{ref:g,children:[u.jsxs(IG,{onClick:()=>i(_=>!_),children:["Сортування",u.jsx(Wu,{strokeWidth:.9,size:22})]}),o&&u.jsxs($G,{children:[u.jsx(Yo,{onClick:()=>{l("name"),c("asc"),i(!1)},children:"А-Я"}),u.jsx(Yo,{onClick:()=>{l("name"),c("desc"),i(!1)},children:"Я-А"}),u.jsx(Yo,{onClick:()=>{l("price"),c("asc"),i(!1)},children:"Ціна ↑"}),u.jsx(Yo,{onClick:()=>{l("price"),c("desc"),i(!1)},children:"Ціна ↓"}),u.jsx(Yo,{onClick:()=>{l("date"),c("desc"),i(!1)},children:"Спочатку новіші"}),u.jsx(Yo,{onClick:()=>{l("date"),c("asc"),i(!1)},children:"Спочатку старіші"})]})]})]}),u.jsx(CG,{children:S.map(_=>{var N,B;const T=_.new_price&&_.new_price<_.price,$=_!=null&&_.createdAt?Date.now()-new Date(_.createdAt).getTime()<7*24*60*60*1e3:!1,I=T?_.new_price:_.price,M=(_==null?void 0:_.available)??!0,j=(_==null?void 0:_.stock)===0,R=T?Math.round((_.price-_.new_price)/_.price*100):0,D=y.some(z=>z.id===_.id),F=b.find(z=>z.id===_.id),O=(F?F.quantity:0)>=(_.stock||0),A=async(z,V)=>{if(V.stopPropagation(),O){K.error("Товар уже у кошику");return}await Hi(_,1,h,K)};return u.jsxs(_G,{onClick:()=>p(`/product/${_.slug??_.id}`),style:{cursor:"pointer"},$soldOut:j,children:[" ",$&&u.jsx(Kg,{children:"Новинка"}),!M&&u.jsx(Xg,{children:"Бронь"}),u.jsxs(hP,{children:[j&&u.jsx(Yu,{children:"Продано"}),u.jsx(kG,{src:((B=(N=_.images)==null?void 0:N[0])==null?void 0:B.url)||"/nofoto.png"})]}),u.jsx(PG,{children:_.name}),u.jsxs(OG,{children:[u.jsx(Vd,{children:u.jsxs(Wd,{children:[u.jsxs(Ud,{$discount:T,children:[I==null?void 0:I.toLocaleString()," грн"]}),T&&u.jsxs(Hd,{children:[_.price.toLocaleString()," грн"]}),T&&u.jsxs(Gd,{children:["-",R,"%"]})]})}),u.jsxs(TG,{children:[M&&!j&&u.jsx(xu,{onClick:z=>A(_,z),children:u.jsx(Ui,{size:24,color:F?"var(--orange-color)":"black",strokeWidth:2})}),!j&&u.jsx(xu,{onClick:z=>k(_,z),children:u.jsx(Is,{size:24,fill:D?"#ff4d4f":"none",color:D?"#ff4d4f":"#000000",strokeWidth:D?1:2})})]})]})]},_.id)})}),v.length>m&&u.jsxs(dP,{children:[u.jsx(yi,{onClick:()=>f(_=>Math.max(_-1,1)),disabled:d===1,children:"Назад"}),Array.from({length:P},(_,T)=>u.jsx(yi,{onClick:()=>f(T+1),active:d===T+1,children:T+1},T)),u.jsx(yi,{onClick:()=>f(_=>Math.min(_+1,P)),disabled:d===P,children:"Вперед"})]})]})})},DG=C.div`
  position: fixed;
  inset: 0;
  background: rgba(25, 20, 16, 0.6);
  backdrop-filter: blur(4px);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  z-index: 999;
`,LG=C.div`
  width: 100%;
  max-width: 360px;

  background: #fbf8f3;
  border-radius: 32px;
  padding: 28px 24px;

  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.18);

  position: relative;

  @media screen and (min-width: 768px) {
    max-width: 500px;
    padding: 40px;
    border-radius: 36px;
    margin-top: 100px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 580px;
    padding: 48px;
    margin-top: 130px;
  }
`,RG=C.button`
  position: absolute;
  top: 18px;
  right: 18px;

  width: 42px;
  height: 42px;

  border: none;
  background: transparent;

  font-size: 30px;
  color: #3d2f29;

  cursor: pointer;
`,FG=C.h2`
  text-align: center;

  font-size: 30px;
  font-weight: 300;

  color: #312620;

  margin-bottom: 10px;

  @media screen and (min-width: 768px) {
    font-size: 42px;
  }
`,zG=C.p`
  text-align: center;
  color: #8d837d;

  margin-bottom: 32px;
`,NG=C.div`
  display: flex;

  background: #efe8df;

  border-radius: 40px;

  padding: 5px;

  margin-bottom: 35px;
`,Ab=C.button`
  flex: 1;

  height: 48px;

  border: none;

  border-radius: 30px;

  cursor: pointer;

  font-size: 16px;

  transition: 0.3s;

  background: ${({active:e})=>e?"#ff7a00":"transparent"};
  color: ${({active:e})=>e?"#fff":"#3d2f29"};

  font-weight: 500;
`,ya=C.input`
  width: 100%;

  height: 56px;

  border-radius: 18px;

  border: 1px solid #ded6cc;

  background: white;

  padding: 0 18px;

  font-size: 16px;

  margin-bottom: 18px;

  outline: none;

  transition: 0.3s;

  &:focus {
    border-color: #ff7a00;
    box-shadow: 0 0 0 3px rgba(255, 122, 0, 0.15);
  }
`,BG=C.button`
  width: 100%;
  height: 58px;

  border: none;

  border-radius: 18px;

  background: #ff7a00;

  color: white;

  font-size: 18px;

  font-weight: 600;

  cursor: pointer;

  transition: 0.3s;

  &:hover {
    background: #eb6f00;
    transform: translateY(-2px);
  }

  &:disabled {
    background-color: #ccc;
    color: #666;
    cursor: not-allowed;
  }
`,Db=C.div`
  position: relative;
  width: 100%;
`,Lb=C.button`
  position: absolute;
  top: 40%;
  right: 18px;

  transform: translateY(-50%);

  border: none;
  background: transparent;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  color: #8d837d;

  padding: 0;

  &:hover {
    color: #ff7a00;
  }
`,VG=C.p`
  margin: 10px 0;
  color: #2e7d32;
  font-size: 14px;
  text-align: center;
`,WG=C.p`
  margin-top: 28px;

  text-align: center;

  color: #8b817a;

  font-size: 15px;

  span {
    color: #ff7a00;
    cursor: pointer;
    font-weight: 600;
  }
`,UG=C.p`
  margin-bottom: 20px;

  text-align: center;

  color: #8b817a;

  font-size: 15px;

  span {
    color: #ff7a00;
    cursor: pointer;
    font-weight: 600;
  }
`,Tl=C.p`
  margin: -8px 0 8px;
  color: var(--red-color);
  font-size: 15px;
  margin-bottom: 20px;
`,HG=async(e,t,n)=>{e.length&&await Promise.all(e.map(async r=>{const o=await fetch(`https://backenddidiv-production.up.railway.app/api/favorites?filters[product][documentId][$eq]=${r.documentId}&populate=user`,{headers:{Authorization:`Bearer ${t}`}});if(!o.ok){console.error(await o.json());return}const i=await o.json();if(i.data.length>0){const l=i.data[0],s=l.user||[];if(s.some(f=>f.documentId===n))return;const d=await fetch(`https://backenddidiv-production.up.railway.app/api/favorites/${l.documentId}`,{method:"PUT",headers:{Authorization:`Bearer ${t}`,"Content-Type":"application/json"},body:JSON.stringify({data:{user:[...s.map(f=>f.documentId),n]}})});d.ok||console.error(await d.json());return}const a=await fetch("https://backenddidiv-production.up.railway.app/api/favorites",{method:"POST",headers:{Authorization:`Bearer ${t}`,"Content-Type":"application/json"},body:JSON.stringify({data:{product:r.documentId,user:[n]}})});a.ok||console.error(await a.json())}))},GG=async(e,t,n)=>{e.length&&await Promise.all(e.map(async r=>{const o=await fetch(`https://backenddidiv-production.up.railway.app/api/cart-items?filters[user][documentId][$eq]=${n}&filters[product][documentId][$eq]=${r.documentId}`,{headers:{Authorization:`Bearer ${t}`}});if(!o.ok){console.error(await o.json());return}const i=await o.json();if(i.data.length>0){const l=i.data[0],s=await fetch(`https://backenddidiv-production.up.railway.app/api/cart-items/${l.documentId}`,{method:"PUT",headers:{Authorization:`Bearer ${t}`,"Content-Type":"application/json"},body:JSON.stringify({data:{quantity:r.quantity}})});s.ok||console.error(await s.json());return}const a=await fetch("https://backenddidiv-production.up.railway.app/api/cart-items",{method:"POST",headers:{Authorization:`Bearer ${t}`,"Content-Type":"application/json"},body:JSON.stringify({data:{product:r.documentId,user:n,quantity:r.quantity}})});a.ok||console.error(await a.json())}))},qG=async(e,t)=>{const n=await fetch(`https://backenddidiv-production.up.railway.app/api/cart-items?filters[user][documentId][$eq]=${t}&populate[product][populate]=*`,{headers:{Authorization:`Bearer ${e}`}});if(!n.ok)throw new Error("Не вдалося отримати кошик");return(await n.json()).data.map(o=>o.product?{...o.product,quantity:o.quantity}:null).filter(Boolean)},YG=({isOpen:e,onClose:t,mode:n,setMode:r,localFavorites:o,localCartItems:i})=>{const[a,l]=x.useState(!1),[s,c]=x.useState(!1),[d,f]=x.useState({first_name:"",last_name:"",email:"",password:"",confirmPassword:""}),[m,p]=x.useState({first_name:"",last_name:"",email:"",password:"",confirmPassword:""}),[h,y]=x.useState(!1),b=Lt();if(x.useEffect(()=>{const _=T=>{T.key==="Escape"&&t()};return window.addEventListener("keydown",_),()=>window.removeEventListener("keydown",_)},[t]),!e)return null;const g=_=>{const{name:T,value:$}=_.target;p(I=>({...I,[T]:$})),f(I=>({...I,[T]:""}))},v=_=>{_.target===_.currentTarget&&t()},w=async()=>{f({first_name:"",last_name:"",email:"",password:"",confirmPassword:""});const _=await fetch("https://backenddidiv-production.up.railway.app/api/auth/local",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({identifier:m.email,password:m.password})}),T=await _.json();if(!_.ok){f({email:"Неправильна електронна пошта або пароль",password:"Неправильна електронна пошта або пароль",confirmPassword:""});return}localStorage.setItem("token",T.jwt),localStorage.setItem("user",JSON.stringify(T.user)),await HG(o,T.jwt,T.user.documentId),await GG(i,T.jwt,T.user.documentId);const $=await qG(T.jwt,T.user.documentId);b(PE($)),t()},E=async()=>{var I,M,j,R,D,F;f({email:"",password:"",confirmPassword:""});const _=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;if(!m.first_name.trim()){f(L=>({...L,first_name:"Введіть ім'я"}));return}if(!m.last_name.trim()){f(L=>({...L,last_name:"Введіть прізвище"}));return}if(!m.email.trim()){f(L=>({...L,email:"Введіть електронну пошту"}));return}if(!_.test(m.email)){f(L=>({...L,email:"Введіть правильну електронну пошту"}));return}if(!m.password){f(L=>({...L,password:"Введіть пароль"}));return}if(m.password.length<6){f(L=>({...L,password:"Пароль має містити щонайменше 6 символів"}));return}if(m.password!==m.confirmPassword){f(L=>({...L,confirmPassword:"Паролі не співпадають"}));return}const T=await fetch("https://backenddidiv-production.up.railway.app/api/auth/local/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:m.email,email:m.email,password:m.password})}),$=await T.json();if(!T.ok){(M=(I=$.error)==null?void 0:I.message)!=null&&M.toLowerCase().includes("already")||(R=(j=$.error)==null?void 0:j.message)!=null&&R.toLowerCase().includes("taken")||(F=(D=$.error)==null?void 0:D.message)!=null&&F.toLowerCase().includes("email")?f(L=>({...L,email:"Ця пошта вже зареєстрована"})):f(L=>{var O;return{...L,email:((O=$.error)==null?void 0:O.message)||"Не вдалося зареєструватися"}});return}localStorage.setItem("token",$.jwt);try{const L=localStorage.getItem("token");localStorage.setItem("user",JSON.stringify($.user));const O=await fetch(`https://backenddidiv-production.up.railway.app/api/users/${$.user.id}`,{method:"PUT",headers:{Authorization:`Bearer ${L}`,"Content-Type":"application/json"},body:JSON.stringify({first_name:m.first_name,last_name:m.last_name})});if(!O.ok)throw new Error("Помилка оновлення");const A=await O.json();localStorage.setItem("user",JSON.stringify(A))}catch(L){console.error(L),alert("Не вдалося оновити дані")}t()},S=()=>{r("forgotPassword"),y(!1),f({first_name:"",last_name:"",email:"",password:"",confirmPassword:""})},P=_=>{r(_),f({email:"",password:"",confirmPassword:""})},k=async()=>{if(f({email:"",password:"",confirmPassword:""}),!m.email.trim()){f(T=>({...T,email:"Введіть електронну пошту"}));return}if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(m.email)){f(T=>({...T,email:"Введіть правильну електронну пошту"}));return}try{const T=await fetch("https://backenddidiv-production.up.railway.app/api/auth/forgot-password",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:m.email})}),$=await T.json();if(!T.ok){f(I=>{var M;return{...I,email:((M=$.error)==null?void 0:M.message)||"Не вдалося надіслати лист"}});return}y(!0)}catch(T){console.error(T),f($=>({...$,email:"Помилка з’єднання із сервером"}))}};return u.jsxs(u.Fragment,{children:[" ",u.jsx(Un,{autoClose:1500}),u.jsx(DG,{onClick:v,children:u.jsxs(LG,{children:[u.jsx(RG,{onClick:t,children:"×"}),u.jsx(FG,{children:n==="login"?"Вхід":n==="register"?"Реєстрація":"Відновлення пароля"}),u.jsx(zG,{children:n==="login"?"Увійдіть до свого акаунта":n==="register"?"Створіть новий акаунт":"Введіть email, щоб отримати посилання для відновлення пароля"}),u.jsxs(NG,{children:[u.jsx(Ab,{active:n==="login",onClick:()=>P("login"),children:"Вхід"}),u.jsx(Ab,{active:n==="register",onClick:()=>P("register"),children:"Реєстрація"})]}),n==="register"&&u.jsxs(u.Fragment,{children:[u.jsx(ya,{name:"first_name",value:m.first_name,onChange:g,placeholder:"Ім'я"}),d.first_name&&u.jsx(Tl,{children:d.first_name}),u.jsx(ya,{name:"last_name",value:m.last_name,onChange:g,placeholder:"Прізвище"}),d.last_name&&u.jsx(Tl,{children:d.last_name})]}),u.jsx(ya,{name:"email",type:"email",value:m.email,onChange:g,placeholder:"Email"}),n!=="forgotPassword"&&u.jsxs(u.Fragment,{children:[u.jsxs(Db,{children:[u.jsx(ya,{name:"password",type:a?"text":"password",value:m.password,onChange:g,placeholder:"Пароль"}),u.jsx(Lb,{type:"button",onClick:()=>l(_=>!_),children:a?u.jsx(po,{size:20}):u.jsx(ho,{size:20})})]}),d.password&&u.jsx(Tl,{children:d.password})]}),n==="register"&&u.jsxs(Db,{children:[u.jsx(ya,{name:"confirmPassword",type:s?"text":"password",value:m.confirmPassword,onChange:g,placeholder:"Повторіть пароль"}),u.jsx(Lb,{type:"button",onClick:()=>c(_=>!_),children:s?u.jsx(po,{size:20}):u.jsx(ho,{size:20})})]}),d.confirmPassword&&u.jsx(Tl,{children:d.confirmPassword}),n==="login"&&u.jsx(UG,{children:u.jsx("span",{onClick:S,children:"Забули пароль?"})}),n==="forgotPassword"&&h&&u.jsx(VG,{children:"Перевірте свою пошту. Ми надіслали вам посилання для відновлення пароля."}),u.jsx(BG,{disabled:n==="forgotPassword"&&h,onClick:n==="login"?w:n==="register"?E:k,children:n==="login"?"Увійти":n==="register"?"Зареєструватися":"Надіслати посилання"}),u.jsx(WG,{children:n==="login"?u.jsxs(u.Fragment,{children:["Немає акаунта?"," ",u.jsx("span",{onClick:()=>r("register"),children:"Зареєструватися"})]}):u.jsxs(u.Fragment,{children:["Вже є акаунт?"," ",u.jsx("span",{onClick:()=>r("login"),children:"Увійти"})]})})]})})," "]})},XG=({isLoggedIn:e,children:t})=>e?t:u.jsx(AO,{to:"/",replace:!0}),KG=C.main`
 width: 100%;
  max-width: 750px;
  padding: 10px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
    padding: 30px 10px;

  @media screen and (min-width: 768px) {
     gap: 20px;
    flex-direction: row;
   max-width: 994px;
    padding: 40px 30px;
  }
  @media screen and (min-width: 1200px) {
   max-width: 1448px;
    display: grid;
    grid-template-columns: 350px 1fr;
    gap: 40px;
    align-items: start;
  }

`,QG=C.section`
 flex: 1;
  display: flex;
  flex-direction: column;
`,ZG=C.aside`
  background: #fff;
  border-radius: 24px;
  padding: 24px;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.08);
   @media screen and (min-width: 768px) {

  }

  @media screen and (min-width: 1440px) {
    position: sticky;
    top: 110px;
  }
`,JG=C.div`
   display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 28px;
  min-width: 0;
  
`,eq=C.div`
   width: 70px;
  height: 70px;
  min-width: 70px;
  min-height: 70px;
  flex-shrink: 0;

  border-radius: 50%;
  background: #4c3a30;

  color: white;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 26px;
`,tq=C.div`
  min-width: 0;
  flex: 1;
`,nq=C.h3`
  margin-bottom: 4px;
`,rq=C.p`
  color: #777;
   overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  min-width: 0;
  width: 100%;
   flex: 1;
  
`,Rb=C.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`,jl=C(hw)`
  height: 48px;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  color: #333;

  &.active,
  &.active:hover {
    background: #5b4637;
    color: #fff;
  }

  &:hover,
  &.logout:hover {
    background: #f5f1ec;
  }
  transition: 0.25s;
  &.logout {
    background-color: transparent;
  }
`,oq=C.div`
  position: fixed;
  inset: 0;
  z-index: 9999;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 20px;

  background: rgba(47, 36, 30, 0.55);
  backdrop-filter: blur(6px);

  animation: fadeIn 0.2s ease;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }
`,iq=C.div`
  width: 100%;
  max-width: 460px;

  padding: 42px 38px 34px;

  border-radius: 24px;

  background: linear-gradient(
    135deg,
    #f7f6f5 0%,
    #ebe9e7 100%
  );

  box-shadow:
    0 25px 70px rgba(30, 20, 15, 0.3),
    0 0 0 1px rgba(255, 255, 255, 0.6);

  animation: modalShow 0.25s ease;

  @keyframes modalShow {
    from {
      opacity: 0;
      transform: scale(0.95) translateY(15px);
    }

    to {
      opacity: 1;
      transform: scale(1) translateY(0);
    }
  }
`,aq=C.h2`
  margin: 0 0 14px;

  text-align: center;

  color:var(--black-color);
  font-family: var(--second-font);

  font-size: 28px;
  font-weight: 300;
`,sq=C.p`
  margin: 0 auto 32px;
   font-family: var(--second-font);

  max-width: 360px;

  text-align: center;

  color: #3c3734;

  font-size: 16px;
  line-height: 1.6;
`,lq=C.div`
  display: flex;
  gap: 14px;

  justify-content: center;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`,cq=C.button`
  flex: 1;

  min-height: 58px;

  border: 1px solid #c9c4c0;
  border-radius: 16px;

  background: transparent;

  color: #5d5048;

  font-size: 16px;
  font-weight: 400;

  cursor: pointer;

  transition: all 0.2s ease;

  &:hover {
    background: #e5e1de;
    border-color: #a79f99;
  }
`,uq=C.button`
  flex: 1;

  min-height: 58px;

  border: none;
  border-radius: 16px;

  background: linear-gradient(
    135deg,
    #ff9400 0%,
    #ff7300 100%
  );

  color: white;

  font-size: 16px;
  font-weight: 400;

  cursor: pointer;

  box-shadow: 0 8px 20px rgba(255, 126, 0, 0.25);

  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-2px);

    box-shadow: 0 12px 24px rgba(255, 126, 0, 0.35);
  }

  &:active {
    transform: translateY(0);
  }
`,mP=({onClose:e,onConfirm:t})=>u.jsx(oq,{onClick:e,children:u.jsxs(iq,{onClick:n=>n.stopPropagation(),children:[u.jsx(aq,{children:"Вийти з акаунту?"}),u.jsx(sq,{children:"Ви впевнені, що хочете вийти з особистого кабінету?"}),u.jsxs(lq,{children:[u.jsx(cq,{onClick:e,children:"Скасувати"}),u.jsx(uq,{onClick:t,children:"Вийти"})]})]})}),dq=()=>{var c,d;const[e,t]=x.useState(""),[n,r]=x.useState(""),[o,i]=x.useState(!1),a=Lt(),l=et();x.useEffect(()=>{(async()=>{try{const m=localStorage.getItem("token"),h=await(await fetch("https://backenddidiv-production.up.railway.app/api/users/me",{headers:{Authorization:`Bearer ${m}`}})).json();t(h.first_name),r(h.email)}catch(m){console.error(m)}})()},[]);const s=async()=>{localStorage.removeItem("token"),localStorage.removeItem("user"),a(Ls()),a(fr()),await Bd.purge(),l("/",{replace:!0})};return u.jsxs(ZG,{children:[o&&u.jsx(mP,{onClose:()=>i(!1),onConfirm:s}),u.jsxs(JG,{children:[u.jsx(eq,{children:((d=(c=e||e)==null?void 0:c[0])==null?void 0:d.toUpperCase())||"?"}),u.jsxs(tq,{children:[u.jsx(nq,{children:e}),u.jsx(rq,{children:n})]})]}),u.jsxs(Rb,{children:[u.jsxs(Rb,{children:[u.jsx(jl,{to:"/account/profile",children:"Особисті дані"}),u.jsx(jl,{to:"/account/orders",children:"Замовлення"}),u.jsx(jl,{to:"/account/password",children:"Змінити пароль"})]}),u.jsx(jl,{as:"button",className:"logout",onClick:()=>i(!0),children:"Вийти"})]})]})};var tv={};tv.match=vq;tv.parse=gP;var fq=/(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,pq=/\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,hq=/^(?:(min|max)-)?(.+)/,mq=/(em|rem|px|cm|mm|in|pt|pc)?$/,gq=/(dpi|dpcm|dppx)?$/;function vq(e,t){return gP(e).some(function(n){var r=n.inverse,o=n.type==="all"||t.type===n.type;if(o&&r||!(o||r))return!1;var i=n.expressions.every(function(a){var l=a.feature,s=a.modifier,c=a.value,d=t[l];if(!d)return!1;switch(l){case"orientation":case"scan":return d.toLowerCase()===c.toLowerCase();case"width":case"height":case"device-width":case"device-height":c=Nb(c),d=Nb(d);break;case"resolution":c=zb(c),d=zb(d);break;case"aspect-ratio":case"device-aspect-ratio":case"device-pixel-ratio":c=Fb(c),d=Fb(d);break;case"grid":case"color":case"color-index":case"monochrome":c=parseInt(c,10)||1,d=parseInt(d,10)||0;break}switch(s){case"min":return d>=c;case"max":return d<=c;default:return d===c}});return i&&!r||!i&&r})}function gP(e){return e.split(",").map(function(t){t=t.trim();var n=t.match(fq),r=n[1],o=n[2],i=n[3]||"",a={};return a.inverse=!!r&&r.toLowerCase()==="not",a.type=o?o.toLowerCase():"all",i=i.match(/\([^\)]+\)/g)||[],a.expressions=i.map(function(l){var s=l.match(pq),c=s[1].toLowerCase().match(hq);return{modifier:c[1],feature:c[2],value:s[2]}}),a})}function Fb(e){var t=Number(e),n;return t||(n=e.match(/^(\d+)\s*\/\s*(\d+)$/),t=n[1]/n[2]),t}function zb(e){var t=parseFloat(e),n=String(e).match(gq)[1];switch(n){case"dpcm":return t/2.54;case"dppx":return t*96;default:return t}}function Nb(e){var t=parseFloat(e),n=String(e).match(mq)[1];switch(n){case"em":return t*16;case"rem":return t*16;case"cm":return t*96/2.54;case"mm":return t*96/2.54/10;case"in":return t*96;case"pt":return t*72;case"pc":return t*72/12;default:return t}}var yq=tv.match,Bb=typeof window<"u"?window.matchMedia:null;function xq(e,t,n){var r=this,o;Bb&&!n&&(o=Bb.call(window,e)),o?(this.matches=o.matches,this.media=o.media,o.addListener(l)):(this.matches=yq(e,t),this.media=e),this.addListener=i,this.removeListener=a,this.dispose=s;function i(c){o&&o.addListener(c)}function a(c){o&&o.removeListener(c)}function l(c){r.matches=c.matches,r.media=c.media}function s(){o&&o.removeListener(l)}}function bq(e,t,n){return new xq(e,t,n)}var wq=bq;const Sq=Ri(wq);var Eq=/[A-Z]/g,Cq=/^ms-/,Wp={};function _q(e){return"-"+e.toLowerCase()}function vP(e){if(Wp.hasOwnProperty(e))return Wp[e];var t=e.replace(Eq,_q);return Wp[e]=Cq.test(t)?"-"+t:t}function kq(e,t){if(e===t)return!0;if(!e||!t)return!1;const n=Object.keys(e),r=Object.keys(t),o=n.length;if(r.length!==o)return!1;for(let i=0;i<o;i++){const a=n[i];if(e[a]!==t[a]||!Object.prototype.hasOwnProperty.call(t,a))return!1}return!0}var yP={exports:{}},Pq="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Oq=Pq,Tq=Oq;function xP(){}function bP(){}bP.resetWarningCache=xP;var jq=function(){function e(r,o,i,a,l,s){if(s!==Tq){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:bP,resetWarningCache:xP};return n.PropTypes=n,n};yP.exports=jq();var $q=yP.exports;const me=Ri($q),yt=me.oneOfType([me.string,me.number]),nv={all:me.bool,grid:me.bool,aural:me.bool,braille:me.bool,handheld:me.bool,print:me.bool,projection:me.bool,screen:me.bool,tty:me.bool,tv:me.bool,embossed:me.bool},wP={orientation:me.oneOf(["portrait","landscape"]),scan:me.oneOf(["progressive","interlace"]),aspectRatio:me.string,deviceAspectRatio:me.string,height:yt,deviceHeight:yt,width:yt,deviceWidth:yt,color:me.bool,colorIndex:me.bool,monochrome:me.bool,resolution:yt,type:Object.keys(nv)},{type:NY,...Iq}=wP,SP={minAspectRatio:me.string,maxAspectRatio:me.string,minDeviceAspectRatio:me.string,maxDeviceAspectRatio:me.string,minHeight:yt,maxHeight:yt,minDeviceHeight:yt,maxDeviceHeight:yt,minWidth:yt,maxWidth:yt,minDeviceWidth:yt,maxDeviceWidth:yt,minColor:me.number,maxColor:me.number,minColorIndex:me.number,maxColorIndex:me.number,minMonochrome:me.number,maxMonochrome:me.number,minResolution:yt,maxResolution:yt,...Iq},Mq={...nv,...SP};var Aq={all:Mq,types:nv,matchers:wP,features:SP};const Dq=e=>`not ${e}`,Lq=(e,t)=>{const n=vP(e);return typeof t=="number"&&(t=`${t}px`),t===!0?n:t===!1?Dq(n):`(${n}: ${t})`},Rq=e=>e.join(" and "),Fq=e=>{const t=[];return Object.keys(Aq.all).forEach(n=>{const r=e[n];r!=null&&t.push(Lq(n,r))}),Rq(t)},zq=x.createContext(void 0),Nq=e=>e.query||Fq(e),Vb=e=>e?Object.keys(e).reduce((n,r)=>(n[vP(r)]=e[r],n),{}):void 0,EP=()=>{const e=x.useRef(!1);return x.useEffect(()=>{e.current=!0},[]),e.current},Bq=e=>{const t=x.useContext(zq),n=()=>Vb(e)||Vb(t),[r,o]=x.useState(n);return x.useEffect(()=>{const i=n();kq(r,i)||o(i)},[e,t]),r},Vq=e=>{const t=()=>Nq(e),[n,r]=x.useState(t);return x.useEffect(()=>{const o=t();n!==o&&r(o)},[e]),n},Wq=(e,t)=>{const n=()=>Sq(e,t||{},!!t),[r,o]=x.useState(n),i=EP();return x.useEffect(()=>{if(i){const a=n();return o(a),()=>{a&&a.dispose()}}},[e,t]),r},Uq=e=>{const[t,n]=x.useState(e.matches);return x.useEffect(()=>{const r=o=>{n(o.matches)};return e.addListener(r),n(e.matches),()=>{e.removeListener(r)}},[e]),t},Hq=(e,t,n)=>{const r=Bq(t),o=Vq(e);if(!o)throw new Error("Invalid or missing MediaQuery!");const i=Wq(o,r),a=Uq(i),l=EP();return x.useEffect(()=>{l&&n&&n(a)},[a]),x.useEffect(()=>()=>{i&&i.dispose()},[]),a},Gq=C.div`
  margin-bottom: 24px;
`,qq=C.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 28px;
`,Yq=C.div`
  width: 70px;
  height: 70px;

  border-radius: 50%;
  background: #4c3a30;

  color: white;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 26px;
`,Xq=C.h3`
  margin-bottom: 4px;
`,Kq=C.p`
  color: #777;
`,Qq=C.button`
  width: 100%;
  height: 54px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 20px;

  border: none;
  border-radius: 18px;

  background: #5b4637;
  color: white;

  cursor: pointer;
`,Zq=C.div`
  margin-top: 12px;

  display: flex;
  flex-direction: column;

  background: white;

  border-radius: 18px;

  overflow: hidden;

  box-shadow: 0 8px 20px rgba(0,0,0,.08);
`,$l=C(hw)`
  padding: 18px;

  color: #333;
  text-decoration: none;

  transition: .2s;

  &:hover{
    background:#f7f4ef;
  }

  &.active{
    background:#5b4637;
    color:white;
  }

  &:not(:last-child){
    border-bottom:1px solid #ececec;
  }
  
  transition: 0.25s;
  &.logout {
    background-color: transparent;
      color: #333;
  }
`,Jq=()=>{var h,y;const[e,t]=x.useState(!1),[n,r]=x.useState(!1),[o,i]=x.useState(""),[a,l]=x.useState(""),s=Lt(),c=et(),d=Wn(),f=async()=>{localStorage.removeItem("token"),localStorage.removeItem("user"),s(Ls()),s(fr()),await Bd.purge(),c("/",{replace:!0})};x.useEffect(()=>{(async()=>{try{const g=localStorage.getItem("token"),w=await(await fetch("https://backenddidiv-production.up.railway.app/api/users/me",{headers:{Authorization:`Bearer ${g}`}})).json();i(w.first_name),l(w.email)}catch(g){console.error(g)}})()},[]);const p={"/account":"Особисті дані","/account/profile":"Особисті дані","/account/orders":"Замовлення","/account/favorites":"Обране","/account/password":"Змінити пароль"}[d.pathname]||"Особисті дані";return u.jsxs(Gq,{children:[n&&u.jsx(mP,{onClose:()=>r(!1),onConfirm:f}),u.jsxs(qq,{children:[u.jsx(Yq,{children:((y=(h=o||o)==null?void 0:h[0])==null?void 0:y.toUpperCase())||"?"}),u.jsxs("div",{children:[u.jsx(Xq,{children:o}),u.jsx(Kq,{children:a})]})]}),u.jsxs(Qq,{onClick:()=>t(b=>!b),children:[p,e?u.jsx(x3,{size:22}):u.jsx(v3,{size:22})]}),e&&u.jsxs(Zq,{children:[u.jsx($l,{to:"/account/profile",onClick:()=>t(!1),children:"Особисті дані"}),u.jsx($l,{to:"/account/orders",onClick:()=>t(!1),children:"Замовлення"}),u.jsx($l,{to:"/account/password",onClick:()=>t(!1),children:"Змінити пароль"}),u.jsx($l,{className:"logout",onClick:()=>r(!0),children:"Вийти"})]})]})},eY=()=>{const e=Hq({maxWidth:767});return u.jsxs(KG,{className:"container",children:[e?u.jsx(Jq,{}):u.jsx(dq,{}),u.jsx(QG,{children:u.jsx(fw,{})})]})},tY=C.div`
  background: white;
  border-radius: 24px;
  padding: 24px;
  box-shadow: 0 6px 18px rgba(0,0,0,.08);

  @media screen and (min-width:768px) {
    padding: 32px;
  }

  @media screen and (min-width:1440px) {
    padding: 40px;
  }
`,nY=C.h2`
  margin-bottom: 28px;
`,Il=C.label`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 20px;
`,Ml=C.input`
  height: 52px;

  padding: 0 18px;

  border-radius: 14px;
  border: 1px solid #ddd;

  &:focus {
    outline: none;
    border-color: #ef7d1a;
  }
`,rY=C.button`
  width: 220px;
  height: 52px;

  border: none;
  border-radius: 14px;

  background: #ef7d1a;
  color: white;

  cursor: pointer;
   &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`,Wb=()=>{const[e,t]=x.useState({first_name:"",last_name:"",email:"",phone:""}),[n,r]=x.useState({first_name:"",last_name:"",email:"",phone:""}),[o,i]=x.useState(null),[a,l]=x.useState(!0),s=et();x.useEffect(()=>{(async()=>{try{const p=localStorage.getItem("token"),h=await fetch("https://backenddidiv-production.up.railway.app/api/users/me",{headers:{Authorization:`Bearer ${p}`}});if(h.status===401){localStorage.removeItem("token"),localStorage.removeItem("user"),s("/login",{replace:!0});return}if(!h.ok)throw new Error(`HTTP error: ${h.status}`);const y=await h.json();i(y.id);const b={first_name:y.first_name||"",last_name:y.last_name||"",email:y.email||"",phone:y.phone||""};r(b),t(b)}catch(p){console.error(p)}finally{l(!1)}})()},[s]);const c=m=>{const{name:p,value:h}=m.target;r(y=>({...y,[p]:h}))},d=n.first_name!==e.first_name||n.last_name!==e.last_name||n.phone!==e.phone,f=async()=>{try{const m=localStorage.getItem("token"),p=await fetch(`https://backenddidiv-production.up.railway.app/api/users/${o}`,{method:"PUT",headers:{Authorization:`Bearer ${m}`,"Content-Type":"application/json"},body:JSON.stringify({first_name:n.first_name,last_name:n.last_name,phone:n.phone})});if(!p.ok)throw new Error("Помилка оновлення");const h=await p.json();localStorage.setItem("user",JSON.stringify(h)),t(n),K.success("Дані оновлено успішно")}catch(m){console.error(m),K.error("Не вдалось оновити дані")}};return a?u.jsx("p",{children:"Завантаження..."}):u.jsxs(tY,{children:[u.jsx(Un,{autoClose:1500}),u.jsx(nY,{children:"Особисті дані"}),u.jsxs(Il,{children:["Ім я",u.jsx(Ml,{name:"first_name",value:n.first_name,onChange:c})]}),u.jsxs(Il,{children:["Прізвище",u.jsx(Ml,{name:"last_name",value:n.last_name,onChange:c})]}),u.jsxs(Il,{children:["Email",u.jsx(Ml,{value:n.email,disabled:!0})]}),u.jsxs(Il,{children:["Телефон",u.jsx(Ml,{name:"phone",value:n.phone,onChange:c})]}),u.jsx(rY,{onClick:f,disabled:!d,children:"Зберегти"})]})},oY=C.div`
  width: 100%;
  max-width: 750px;

  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    max-width: 994px;
    
    
  }

  @media screen and (min-width: 1200px) {
    max-width: 1448px;
  }
`,iY=C.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
  }
`,aY=C.div`
  flex-grow: 1;
  background-color: #ffffff;
  border-radius: 20px;
  padding: 24px;
     box-shadow: 0 6px 18px rgba(0, 0, 0, 0.08);
  text-align: left;
`,sY=C.h1`
  font-family: var(--main-font);
  font-size: 28px;
  color: var(--black-color);
  margin-bottom: 24px;
`,lY=C.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`,cY=C.div`
  border: 1px solid #e0e0e0;
  border-radius: 16px;
  padding: 20px;
  background-color: #fff;
`,uY=C.div`
  display: flex;
  flex-direction: column;
      align-items: flex-start;
      align-items: flex-start;
       gap: 8px;
`,dY=C.div`
  display: flex;
  justify-content: space-between;
    align-items: flex-start;
  border-bottom: 1px solid #f0f0f0;
  padding-bottom: 12px;
  margin-bottom: 16px;
  flex-wrap: wrap;
  gap: 8px;

  /* div {
    display: flex;
    flex-direction: row;
    gap: 12px;
  } */
`,fY=C.span`
  font-family: var(--second-font);
  font-weight: 700;
  font-size: 16px;
`,pY=C.p`
  font-family: var(--second-font);
  font-weight: 400;
  font-size: 16px;
 `,hY=C.span`
  margin-left: auto;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 16px;
  font-weight: 700;

  background-color: ${e=>e.status==="pending"?"#fff0e6":e.status==="confirmed"?"#e8f0fe":e.status==="paid"?"#e6f4ea":e.status==="delivered"?"#e0f2fe":e.status==="done"?"#dcfce7":e.status==="cancelled"?"#fce8e6":"#f1f3f4"};

  color: ${e=>e.status==="pending"?"#d97706":e.status==="confirmed"?"#1a73e8":e.status==="paid"?"#137333":e.status==="delivered"?"#0369a1":e.status==="done"?"#15803d":e.status==="cancelled"?"#d93025":"#5f6368"};
`,mY=C.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`,gY=C.div`
  font-family: var(--second-font);
  display: flex;
  align-items: center;
  gap: 16px;

  img {
    width: 60px;
    height: 60px;
    object-fit: cover;
    border-radius: 8px;
  }
`,vY=C.div`
  flex-grow: 1;

  p {
    margin: 0;
    font-size: 14px;
    font-weight: 500;
  }

  span {
    font-size: 13px;
    color: #666;
  }
`,yY=C.div`
  font-family: var(--second-font);
  margin-top: 16px;
  padding-top: 12px;
  border-top: 1px dashed #e0e0e0;
  font-size: 13px;
  color: #555;
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`,xY=()=>{const[e,t]=x.useState([]),[n,r]=x.useState(!0),o=localStorage.getItem("token"),i=(()=>{try{return JSON.parse(localStorage.getItem("user")||"null")}catch{return null}})(),a=et(),l={pending:"Створено",confirmed:"Підтверджено",paid:"Сплачено",delivered:"Доставлено",done:"Завершено",cancelled:"Скасовано"};return x.useEffect(()=>{if(!o||!(i!=null&&i.email)){r(!1);return}(async()=>{try{const c=await fetch(`https://backenddidiv-production.up.railway.app/api/orders?filters[email][$eq]=${encodeURIComponent(i.email)}`,{headers:{Authorization:`Bearer ${o}`}});if(c.status===401){localStorage.removeItem("token"),localStorage.removeItem("user"),a("/login",{replace:!0});return}if(!c.ok)throw new Error(`HTTP ${c.status}`);const d=await c.json(),f=Array.isArray(d)?d:d.data||[];t(f)}catch(c){console.error("Помилка завантаження замовлень:",c)}finally{r(!1)}})()},[o,i==null?void 0:i.email,a]),u.jsx(oY,{children:u.jsx(iY,{children:u.jsxs(aY,{children:[u.jsx(sY,{children:"Мої замовлення"}),n?u.jsx("p",{children:"Завантаження замовлень..."}):e.length===0?u.jsx("p",{children:"У вас поки немає замовлень."}):u.jsx(lY,{children:[...e].sort((s,c)=>{var m,p;const d=new Date(((m=s.attributes)==null?void 0:m.date)||s.date);return new Date(((p=c.attributes)==null?void 0:p.date)||c.date)-d}).map(s=>{const c=s.attributes||s,d=typeof c.products=="string"?JSON.parse(c.products):c.products||[];return u.jsxs(cY,{children:[u.jsxs(dY,{children:[u.jsxs(uY,{children:[u.jsxs(fY,{children:["№ ",c.order_number]}),c.date&&u.jsxs(pY,{children:["Дата створення замовлення:"," ",new Date(c.date).toLocaleDateString("uk-UA")]})]}),u.jsx(hY,{status:c.status_order,children:l[c.status_order]||"Створено"})]}),u.jsx(mY,{children:d.map(f=>u.jsxs(gY,{onClick:()=>a(`/product/${f.slug}`),children:[u.jsx("img",{src:f.image||ur,alt:f.name}),u.jsxs(vY,{children:[u.jsx("p",{children:f.name}),u.jsxs("span",{children:[f.quantity," шт. × ",f.price," грн"]})]})]},f.id))}),u.jsxs(yY,{children:[c.city&&u.jsxs("span",{children:[u.jsx("b",{children:"Місто:"})," ",c.city]}),c.delivery_method&&u.jsxs("span",{children:[u.jsx("b",{children:"Доставка:"})," ",c.delivery_method]}),c.delivery_address&&u.jsxs("span",{children:[u.jsx("b",{children:"Адреса:"})," ",c.delivery_address]}),c.ttn&&u.jsxs("span",{children:[u.jsx("b",{children:"ТТН:"})," ",c.ttn]})]})]},s.id||c.order_number)})})]})})})},bY=C.div`
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
`,wY=C.div`
  width: 100%;
  max-width: 500px;
  margin: 60px auto;
`,Ub=C.h1`
  margin: 0 0 12px;

  font-size: 30px;
  line-height: 1.2;
  font-weight: 300;

  color: #312620;
  text-align: center;

  @media screen and (min-width: 768px) {
    font-size: 42px;
  }
`,SY=C.p`
  margin: 0 0 32px;

  font-size: 15px;
  line-height: 1.5;

  color: #8d837d;

  text-align: center;
`,EY=C.form`
  display: flex;
  flex-direction: column;
  gap: 18px;
`,Hb=C.label`
  display: flex;
  flex-direction: column;
  gap: 8px;

  font-size: 14px;
  color: #3d2f29;
`,Gb=C.input`
  width: 100%;
  height: 56px;

  box-sizing: border-box;

  padding: 0 18px;

  border: 1px solid #ded6cc;
  border-radius: 18px;

  background: #fff;

  font-family: inherit;
  font-size: 16px;
  color: #312620;

  outline: none;

  transition:
    border-color 0.3s ease,
    box-shadow 0.3s ease;

  &:focus {
    border-color: #ff7a00;

    box-shadow: 0 0 0 3px rgba(255, 122, 0, 0.15);
  }

  &::placeholder {
    color: #aaa29b;
  }

  &:hover {
    border-color: #cfc5ba;
  }
`,Ya=C.div`
  position: relative;
  width: 100%;
 
`,Xa=C.button`
  position: absolute;
  top:50%;
  right: 18px;

  transform: translateY(-50%);

  border: none;
  background: transparent;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  color: #8d837d;

  padding: 0;

  &:hover {
    color: #ff7a00;
  }
`,CY=C.button`
  width: 100%;
  height: 58px;

  padding: 0 20px;

  border: none;
  border-radius: 18px;

  background: #ff7a00;
  color: #fff;

  font-family: inherit;
  font-size: 18px;
  font-weight: 600;

  cursor: pointer;

  transition:
    background 0.3s ease,
    transform 0.3s ease,
    box-shadow 0.3s ease;

  &:hover {
    background: #eb6f00;
    transform: translateY(-2px);

    box-shadow: 0 8px 20px rgba(255, 122, 0, 0.2);
  }

  &:active {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.5;
    cursor: default;
    transform: none;
    box-shadow: none;
  }
`,_Y=C.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items:center;`,kY=C.button`
margin-top: 50px;
   margin-left:auto;
   margin-right:auto;
  height: 58px;

  padding: 0 20px;

  border: none;
  border-radius: 18px;

  background: #ff7a00;
  color: #fff;

  font-family: inherit;
  font-size: 18px;
  font-weight: 600;

  cursor: pointer;

  transition:
    background 0.3s ease,
    transform 0.3s ease,
    box-shadow 0.3s ease;

  &:hover {
    background: #eb6f00;
    transform: translateY(-2px);

    box-shadow: 0 8px 20px rgba(255, 122, 0, 0.2);
  }

  &:active {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.5;
    cursor: default;
    transform: none;
    box-shadow: none;
  }
`,PY=C.p`
  margin: -8px 0 8px;

  font-size: 14px;
  line-height: 1.4;

  color: #c62828;
`,OY=C.p`
  margin: 20px 0 0;

  font-size: 15px;
  line-height: 1.5;

  color: #555;

  text-align: center;
`,TY=({openLogin:e})=>{const[t]=mw(),n=et(),r=t.get("code"),[o,i]=x.useState(""),[a,l]=x.useState(!1),[s,c]=x.useState(!1),[d,f]=x.useState(""),[m,p]=x.useState(""),[h,y]=x.useState(!1),[b,g]=x.useState(!1),v=async E=>{var S;if(E.preventDefault(),p(""),!r){p("Посилання для відновлення пароля недійсне.");return}if(o.length<6){p("Пароль має містити щонайменше 6 символів.");return}if(o!==d){p("Паролі не збігаються.");return}g(!0);try{const P=await fetch("https://backenddidiv-production.up.railway.app/api/auth/reset-password",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({code:r,password:o,passwordConfirmation:d})}),k=await P.json();if(!P.ok)throw new Error(((S=k==null?void 0:k.error)==null?void 0:S.message)||"Не вдалося змінити пароль.");y(!0)}catch{p("Сталася помилка. Спробуйте ще раз.")}finally{g(!1)}},w=()=>{n("/"),e()};return u.jsx(bY,{children:u.jsx(wY,{children:h?u.jsxs(_Y,{children:[u.jsx(Ub,{children:"Пароль змінено"}),u.jsx(OY,{children:"Ваш пароль успішно змінено. Тепер ви можете увійти до свого акаунта."}),u.jsx(kY,{type:"button",onClick:w,children:"Увійти"})]}):u.jsxs(u.Fragment,{children:[u.jsx(Ub,{children:"Новий пароль"}),u.jsx(SY,{children:"Введіть новий пароль для вашого облікового запису."}),u.jsxs(EY,{onSubmit:v,children:[u.jsxs(Hb,{children:["Новий пароль",u.jsxs(Ya,{children:[u.jsx(Gb,{type:a?"text":"password",value:o,onChange:E=>i(E.target.value),placeholder:"Введіть новий пароль",autoComplete:"new-password"}),u.jsx(Xa,{type:"button",onClick:()=>l(E=>!E),children:a?u.jsx(po,{size:20}):u.jsx(ho,{size:20})})," "]})]}),u.jsxs(Hb,{children:["Повторіть пароль",u.jsxs(Ya,{children:[u.jsx(Gb,{type:s?"text":"password",value:d,onChange:E=>f(E.target.value),placeholder:"Повторіть новий пароль",autoComplete:"new-password"}),u.jsx(Xa,{type:"button",onClick:()=>c(E=>!E),children:s?u.jsx(po,{size:20}):u.jsx(ho,{size:20})})]})]}),m&&u.jsx(PY,{children:m}),u.jsx(CY,{type:"submit",disabled:b,children:b?"Збереження...":"Змінити пароль"})]})]})})})},jY=C.div`
 background: white;
  border-radius: 24px;
  padding: 24px;
  box-shadow: 0 6px 18px rgba(0,0,0,.08);

  @media screen and (min-width:768px) {
    padding: 32px;
  }

  @media screen and (min-width:1440px) {
    padding: 40px;
  }
`,$Y=C.form`
  width: 100%;
  max-width: 480px;

  margin: 0 auto;
   @media screen and (min-width:768px) {
    margin-right:auto;
    margin-left: 0;
    
  }
`,IY=C.h1`
  margin: 0 0 12px;

    font-family: var(--main-font);
    font-size: 28px;
    color: var(--black-color);
  font-weight: 500;
  line-height: 1.15;
  letter-spacing: -0.03em;

  color: #111;

  @media screen and (min-width: 768px) {
    font-size: 40px;
  }
`,MY=C.p`
  margin: 0 0 40px;

  font-size: 17px;
  line-height: 1.5;

  color: #777;
`,Up=C.div`
  display: flex;
  flex-direction: column;
 font-family: var(--second-font);
 font-weight:300;
  margin-bottom: 24px;
`,Hp=C.label`
  margin-bottom: 9px;

  font-size: 16px;
  line-height: 1.3;

  color: #333;
`,Gp=C.input`
  width: 100%;
  height: 48px;

  padding: 0 14px;

  box-sizing: border-box;

      padding: 0 18px;
    border-radius: 14px;
    border: 1px solid #ddd;
 

  background: transparent;

  font-family: inherit;
  font-size: 18px;
  color: #111;

  outline: none;

  transition:
    border-color 180ms ease,
    background-color 180ms ease;

  &::placeholder {
    color: #aaa;
  }

  &:hover {
    border-color: #aaa;
  }

  &:focus {
    border-color: #111;
    background: #fafafa;
  }

  &:disabled {
    opacity: 0.6;
  }
`,AY=C.button`
  width: 100%;
  height: 50px;

  margin-top: 8px;

    border: none;
    border-radius: 14px;
    background: #ef7d1a;
    color: white;
  cursor: pointer;
 

  font-family: inherit;
  font-size: 18px;
  font-weight: 500;

  cursor: pointer;

  transition:
    background-color 180ms ease,
    color 180ms ease,
    opacity 180ms ease;

  &:hover:not(:disabled) {
    background: #e47616;
    color: #ffffff;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;C.button`
  width: 100%;

  margin-top: 14px;
  padding: 12px 0;

  border: 0;
  background: transparent;

  font-family: inherit;
  font-size: 14px;
  color: #777;

  cursor: pointer;

  transition: color 180ms ease;

  &:hover {
    color: #111;
  }
`;const DY=C.p`
  margin: -4px 0 20px;

  font-size: 13px;
  line-height: 1.4;

  color: #b42318;
`,LY=C.p`
  margin: -4px 0 20px;

  font-size: 13px;
  line-height: 1.4;

  color: #26734d;
`,RY=()=>{const[e,t]=x.useState(!1),[n,r]=x.useState(!1),[o,i]=x.useState(!1),[a,l]=x.useState({currentPassword:"",newPassword:"",confirmPassword:""}),[s,c]=x.useState(""),[d,f]=x.useState(""),[m,p]=x.useState(!1),h=b=>{const{name:g,value:v}=b.target;l(w=>({...w,[g]:v})),c(""),f("")},y=async b=>{if(b.preventDefault(),c(""),f(""),!a.currentPassword||!a.newPassword||!a.confirmPassword){c("Заповніть усі поля.");return}if(a.newPassword.length<6){c("Новий пароль повинен містити щонайменше 6 символів.");return}if(a.newPassword!==a.confirmPassword){c("Нові паролі не співпадають.");return}if(a.currentPassword===a.newPassword){c("Новий пароль повинен відрізнятися від поточного.");return}try{p(!0);const g=localStorage.getItem("token"),v=await fetch("https://backenddidiv-production.up.railway.app/api/auth/change-password",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${g}`},body:JSON.stringify({currentPassword:a.currentPassword,password:a.newPassword,passwordConfirmation:a.newPassword})}),w=await v.json().catch(()=>null);if(!v.ok)throw new Error((w==null?void 0:w.message)||"Не вдалося змінити пароль.");f("Пароль успішно змінено."),l({currentPassword:"",newPassword:"",confirmPassword:""})}catch(g){c(g.message||"Сталася помилка. Спробуйте ще раз.")}finally{p(!1)}};return u.jsx(jY,{children:u.jsxs($Y,{onSubmit:y,children:[u.jsx(IY,{children:"Зміна пароля"}),u.jsx(MY,{children:"Введіть поточний пароль і встановіть новий."}),u.jsxs(Up,{children:[u.jsx(Hp,{htmlFor:"currentPassword",children:"Поточний пароль"}),u.jsxs(Ya,{children:[u.jsx(Gp,{id:"currentPassword",name:"currentPassword",type:e?"text":"password",value:a.currentPassword,onChange:h,autoComplete:"current-password",placeholder:"Введіть поточний пароль"}),u.jsx(Xa,{type:"button",onClick:()=>t(b=>!b),children:e?u.jsx(po,{size:20}):u.jsx(ho,{size:20})})]})]}),u.jsxs(Up,{children:[u.jsx(Hp,{htmlFor:"newPassword",children:"Новий пароль"}),u.jsxs(Ya,{children:[u.jsx(Gp,{id:"newPassword",name:"newPassword",type:n?"text":"password",value:a.newPassword,onChange:h,autoComplete:"new-password",placeholder:"Введіть новий пароль"}),u.jsx(Xa,{type:"button",onClick:()=>r(b=>!b),children:n?u.jsx(po,{size:20}):u.jsx(ho,{size:20})})]})]}),u.jsxs(Up,{children:[u.jsx(Hp,{htmlFor:"confirmPassword",children:"Підтвердження нового пароля"}),u.jsxs(Ya,{children:[u.jsx(Gp,{id:"confirmPassword",name:"confirmPassword",type:o?"text":"password",value:a.confirmPassword,onChange:h,autoComplete:"new-password",placeholder:"Повторіть новий пароль"}),u.jsx(Xa,{type:"button",onClick:()=>i(b=>!b),children:o?u.jsx(po,{size:20}):u.jsx(ho,{size:20})})]})]}),s&&u.jsx(DY,{children:s}),d&&u.jsx(LY,{children:d}),u.jsx(AY,{type:"submit",disabled:m,children:m?"Зміна пароля...":"Змінити пароль"})]})})};function FY(){const e=Lt(),[t,n]=x.useState(!1),[r,o]=x.useState("login"),i=!!localStorage.getItem("token"),a=localStorage.getItem("token"),l=JSON.parse(localStorage.getItem("user")||"null"),s=l==null?void 0:l.documentId,c=Ye(f=>f.favorites.items),d=Ye(f=>f.cart.items);return x.useEffect(()=>{if(!a)return;(async()=>{try{const m=await fetch("https://backenddidiv-production.up.railway.app/api/users/me",{headers:{Authorization:`Bearer ${a}`}});if(m.status===401){localStorage.removeItem("token"),localStorage.removeItem("user"),e(fr()),e(Ls()),window.location.reload();return}m.ok||console.error("Auth check error:",m.status)}catch(m){console.error("Помилка перевірки авторизації:",m)}})()},[a,e]),x.useEffect(()=>{if(!a||!s)return;(async()=>{const m=localStorage.getItem("token");if(!m)return;const y=(await(await fetch(`https://backenddidiv-production.up.railway.app/api/favorites?filters[user][documentId][$eq]=${s}&populate=product.images`,{headers:{Authorization:`Bearer ${m}`}})).json()).data.map(b=>({...b.product,favoriteId:b.id,favoriteDocumentId:b.documentId}));e(zI(y))})()},[s,e,a]),u.jsxs(bA,{children:[u.jsx(n6,{}),u.jsx(YH,{}),u.jsxs(x.Suspense,{fallback:u.jsx(e6,{}),children:[u.jsx(LO,{children:u.jsxs(Ie,{path:"/",element:u.jsx(H3,{openLogin:()=>{o("login"),n(!0)},openRegister:()=>{o("register"),n(!0)}}),children:[u.jsx(Ie,{index:!0,element:u.jsx(KL,{})}),u.jsx(Ie,{path:"catalog",element:u.jsx(hA,{})}),u.jsx(Ie,{path:"/catalog/:category",element:u.jsx(Hz,{})}),u.jsx(Ie,{path:"/product/:identifier",element:u.jsx(a9,{})}),u.jsx(Ie,{path:"cart",element:u.jsx(TB,{})}),u.jsx(Ie,{path:"favorite",element:u.jsx(LB,{})}),u.jsx(Ie,{path:"/catalog/new",element:u.jsx(MG,{})}),u.jsx(Ie,{path:"/catalog/sale",element:u.jsx(AG,{})}),u.jsx(Ie,{path:"checkout",element:u.jsx(OH,{})}),u.jsx(Ie,{path:"/order-confirmation",element:u.jsx(LH,{})}),u.jsx(Ie,{path:"about",element:u.jsx(qH,{})}),u.jsx(Ie,{path:"contacts",element:u.jsx(aG,{})}),u.jsx(Ie,{path:"delivery",element:u.jsx(VB,{})}),u.jsx(Ie,{path:"/reset-password",element:u.jsx(TY,{openLogin:()=>{o("login"),n(!0)}})}),u.jsxs(Ie,{path:"account",element:u.jsx(XG,{isLoggedIn:i,children:u.jsx(eY,{})}),children:[u.jsx(Ie,{index:!0,element:u.jsx(Wb,{})}),u.jsx(Ie,{path:"profile",element:u.jsx(Wb,{})}),u.jsx(Ie,{path:"orders",element:u.jsx(xY,{})}),u.jsx(Ie,{path:"password",element:u.jsx(RY,{})})]}),u.jsx(Ie,{path:"*",element:u.jsx(xA,{})})]})}),u.jsx(YG,{localFavorites:c,localCartItems:d,isOpen:t,mode:r,onClose:()=>n(!1),setMode:o})]})]})}Qp.createRoot(document.getElementById("root")).render(u.jsx(U4,{store:Tk,children:u.jsx(Z.StrictMode,{children:u.jsx(WO,{basename:"/Didiv/",children:u.jsx(FY,{})})})}));
