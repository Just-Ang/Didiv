function PP(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();var ne=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Ro(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function Ct(e){if(e.__esModule)return e;var t=e.default;if(typeof t=="function"){var n=function r(){return this instanceof r?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach(function(r){var i=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(n,r,i.get?i:{enumerable:!0,get:function(){return e[r]}})}),n}var Xb={exports:{}},bu={},Kb={exports:{}},ae={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _s=Symbol.for("react.element"),OP=Symbol.for("react.portal"),TP=Symbol.for("react.fragment"),jP=Symbol.for("react.strict_mode"),$P=Symbol.for("react.profiler"),IP=Symbol.for("react.provider"),MP=Symbol.for("react.context"),AP=Symbol.for("react.forward_ref"),DP=Symbol.for("react.suspense"),LP=Symbol.for("react.memo"),RP=Symbol.for("react.lazy"),av=Symbol.iterator;function FP(e){return e===null||typeof e!="object"?null:(e=av&&e[av]||e["@@iterator"],typeof e=="function"?e:null)}var Qb={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Zb=Object.assign,Jb={};function Fo(e,t,n){this.props=e,this.context=t,this.refs=Jb,this.updater=n||Qb}Fo.prototype.isReactComponent={};Fo.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Fo.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function ew(){}ew.prototype=Fo.prototype;function zm(e,t,n){this.props=e,this.context=t,this.refs=Jb,this.updater=n||Qb}var Nm=zm.prototype=new ew;Nm.constructor=zm;Zb(Nm,Fo.prototype);Nm.isPureReactComponent=!0;var sv=Array.isArray,tw=Object.prototype.hasOwnProperty,Bm={current:null},nw={key:!0,ref:!0,__self:!0,__source:!0};function rw(e,t,n){var r,i={},o=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(o=""+t.key),t)tw.call(t,r)&&!nw.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var s=Array(l),c=0;c<l;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:_s,type:e,key:o,ref:a,props:i,_owner:Bm.current}}function zP(e,t){return{$$typeof:_s,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Vm(e){return typeof e=="object"&&e!==null&&e.$$typeof===_s}function NP(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var lv=/\/+/g;function ef(e,t){return typeof e=="object"&&e!==null&&e.key!=null?NP(""+e.key):t.toString(36)}function Al(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case _s:case OP:a=!0}}if(a)return a=e,i=i(a),e=r===""?"."+ef(a,0):r,sv(i)?(n="",e!=null&&(n=e.replace(lv,"$&/")+"/"),Al(i,t,n,"",function(c){return c})):i!=null&&(Vm(i)&&(i=zP(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(lv,"$&/")+"/")+e)),t.push(i)),1;if(a=0,r=r===""?".":r+":",sv(e))for(var l=0;l<e.length;l++){o=e[l];var s=r+ef(o,l);a+=Al(o,t,n,s,i)}else if(s=FP(e),typeof s=="function")for(e=s.call(e),l=0;!(o=e.next()).done;)o=o.value,s=r+ef(o,l++),a+=Al(o,t,n,s,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function qs(e,t,n){if(e==null)return e;var r=[],i=0;return Al(e,r,"","",function(o){return t.call(n,o,i++)}),r}function BP(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Et={current:null},Dl={transition:null},VP={ReactCurrentDispatcher:Et,ReactCurrentBatchConfig:Dl,ReactCurrentOwner:Bm};ae.Children={map:qs,forEach:function(e,t,n){qs(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return qs(e,function(){t++}),t},toArray:function(e){return qs(e,function(t){return t})||[]},only:function(e){if(!Vm(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};ae.Component=Fo;ae.Fragment=TP;ae.Profiler=$P;ae.PureComponent=zm;ae.StrictMode=jP;ae.Suspense=DP;ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=VP;ae.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Zb({},e.props),i=e.key,o=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,a=Bm.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in t)tw.call(t,s)&&!nw.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&l!==void 0?l[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){l=Array(s);for(var c=0;c<s;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:_s,type:e.type,key:i,ref:o,props:r,_owner:a}};ae.createContext=function(e){return e={$$typeof:MP,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:IP,_context:e},e.Consumer=e};ae.createElement=rw;ae.createFactory=function(e){var t=rw.bind(null,e);return t.type=e,t};ae.createRef=function(){return{current:null}};ae.forwardRef=function(e){return{$$typeof:AP,render:e}};ae.isValidElement=Vm;ae.lazy=function(e){return{$$typeof:RP,_payload:{_status:-1,_result:e},_init:BP}};ae.memo=function(e,t){return{$$typeof:LP,type:e,compare:t===void 0?null:t}};ae.startTransition=function(e){var t=Dl.transition;Dl.transition={};try{e()}finally{Dl.transition=t}};ae.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};ae.useCallback=function(e,t){return Et.current.useCallback(e,t)};ae.useContext=function(e){return Et.current.useContext(e)};ae.useDebugValue=function(){};ae.useDeferredValue=function(e){return Et.current.useDeferredValue(e)};ae.useEffect=function(e,t){return Et.current.useEffect(e,t)};ae.useId=function(){return Et.current.useId()};ae.useImperativeHandle=function(e,t,n){return Et.current.useImperativeHandle(e,t,n)};ae.useInsertionEffect=function(e,t){return Et.current.useInsertionEffect(e,t)};ae.useLayoutEffect=function(e,t){return Et.current.useLayoutEffect(e,t)};ae.useMemo=function(e,t){return Et.current.useMemo(e,t)};ae.useReducer=function(e,t,n){return Et.current.useReducer(e,t,n)};ae.useRef=function(e){return Et.current.useRef(e)};ae.useState=function(e){return Et.current.useState(e)};ae.useSyncExternalStore=function(e,t,n){return Et.current.useSyncExternalStore(e,t,n)};ae.useTransition=function(){return Et.current.useTransition()};ae.version="18.2.0";Kb.exports=ae;var x=Kb.exports;const Q=Ro(x),Yp=PP({__proto__:null,default:Q},[x]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var WP=x,UP=Symbol.for("react.element"),HP=Symbol.for("react.fragment"),GP=Object.prototype.hasOwnProperty,qP=WP.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,YP={key:!0,ref:!0,__self:!0,__source:!0};function iw(e,t,n){var r,i={},o=null,a=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)GP.call(t,r)&&!YP.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:UP,type:e,key:o,ref:a,props:i,_owner:qP.current}}bu.Fragment=HP;bu.jsx=iw;bu.jsxs=iw;Xb.exports=bu;var u=Xb.exports;/**
 * @remix-run/router v1.8.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ka(){return Ka=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ka.apply(this,arguments)}var _r;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(_r||(_r={}));const cv="popstate";function XP(e){e===void 0&&(e={});function t(r,i){let{pathname:o,search:a,hash:l}=r.location;return Xp("",{pathname:o,search:a,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:fc(i)}return QP(t,n,null,e)}function Re(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Wm(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function KP(){return Math.random().toString(36).substr(2,8)}function uv(e,t){return{usr:e.state,key:e.key,idx:t}}function Xp(e,t,n,r){return n===void 0&&(n=null),Ka({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?zo(t):t,{state:n,key:t&&t.key||r||KP()})}function fc(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function zo(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function QP(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,a=i.history,l=_r.Pop,s=null,c=d();c==null&&(c=0,a.replaceState(Ka({},a.state,{idx:c}),""));function d(){return(a.state||{idx:null}).idx}function f(){l=_r.Pop;let w=d(),g=w==null?null:w-c;c=w,s&&s({action:l,location:y.location,delta:g})}function m(w,g){l=_r.Push;let v=Xp(y.location,w,g);n&&n(v,w),c=d()+1;let b=uv(v,c),C=y.createHref(v);try{a.pushState(b,"",C)}catch(S){if(S instanceof DOMException&&S.name==="DataCloneError")throw S;i.location.assign(C)}o&&s&&s({action:l,location:y.location,delta:1})}function p(w,g){l=_r.Replace;let v=Xp(y.location,w,g);n&&n(v,w),c=d();let b=uv(v,c),C=y.createHref(v);a.replaceState(b,"",C),o&&s&&s({action:l,location:y.location,delta:0})}function h(w){let g=i.location.origin!=="null"?i.location.origin:i.location.href,v=typeof w=="string"?w:fc(w);return Re(g,"No window.location.(origin|href) available to create URL for href: "+v),new URL(v,g)}let y={get action(){return l},get location(){return e(i,a)},listen(w){if(s)throw new Error("A history only accepts one active listener");return i.addEventListener(cv,f),s=w,()=>{i.removeEventListener(cv,f),s=null}},createHref(w){return t(i,w)},createURL:h,encodeLocation(w){let g=h(w);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:m,replace:p,go(w){return a.go(w)}};return y}var dv;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(dv||(dv={}));function ZP(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?zo(t):t,i=Um(r.pathname||"/",n);if(i==null)return null;let o=ow(e);JP(o);let a=null;for(let l=0;a==null&&l<o.length;++l)a=lO(o[l],dO(i));return a}function ow(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,a,l)=>{let s={relativePath:l===void 0?o.path||"":l,caseSensitive:o.caseSensitive===!0,childrenIndex:a,route:o};s.relativePath.startsWith("/")&&(Re(s.relativePath.startsWith(r),'Absolute route path "'+s.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),s.relativePath=s.relativePath.slice(r.length));let c=$r([r,s.relativePath]),d=n.concat(s);o.children&&o.children.length>0&&(Re(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),ow(o.children,t,d,c)),!(o.path==null&&!o.index)&&t.push({path:c,score:aO(c,o.index),routesMeta:d})};return e.forEach((o,a)=>{var l;if(o.path===""||!((l=o.path)!=null&&l.includes("?")))i(o,a);else for(let s of aw(o.path))i(o,a,s)}),t}function aw(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let a=aw(r.join("/")),l=[];return l.push(...a.map(s=>s===""?o:[o,s].join("/"))),i&&l.push(...a),l.map(s=>e.startsWith("/")&&s===""?"/":s)}function JP(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:sO(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const eO=/^:\w+$/,tO=3,nO=2,rO=1,iO=10,oO=-2,fv=e=>e==="*";function aO(e,t){let n=e.split("/"),r=n.length;return n.some(fv)&&(r+=oO),t&&(r+=nO),n.filter(i=>!fv(i)).reduce((i,o)=>i+(eO.test(o)?tO:o===""?rO:iO),r)}function sO(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function lO(e,t){let{routesMeta:n}=e,r={},i="/",o=[];for(let a=0;a<n.length;++a){let l=n[a],s=a===n.length-1,c=i==="/"?t:t.slice(i.length)||"/",d=cO({path:l.relativePath,caseSensitive:l.caseSensitive,end:s},c);if(!d)return null;Object.assign(r,d.params);let f=l.route;o.push({params:r,pathname:$r([i,d.pathname]),pathnameBase:mO($r([i,d.pathnameBase])),route:f}),d.pathnameBase!=="/"&&(i=$r([i,d.pathnameBase]))}return o}function cO(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=uO(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],a=o.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((c,d,f)=>{if(d==="*"){let m=l[f]||"";a=o.slice(0,o.length-m.length).replace(/(.)\/+$/,"$1")}return c[d]=fO(l[f]||"",d),c},{}),pathname:o,pathnameBase:a,pattern:e}}function uO(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Wm(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(a,l)=>(r.push(l),"/([^\\/]+)"));return e.endsWith("*")?(r.push("*"),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function dO(e){try{return decodeURI(e)}catch(t){return Wm(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function fO(e,t){try{return decodeURIComponent(e)}catch(n){return Wm(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function Um(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function pO(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?zo(e):e;return{pathname:n?n.startsWith("/")?n:hO(n,t):t,search:gO(r),hash:vO(i)}}function hO(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function tf(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Hm(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Gm(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=zo(e):(i=Ka({},e),Re(!i.pathname||!i.pathname.includes("?"),tf("?","pathname","search",i)),Re(!i.pathname||!i.pathname.includes("#"),tf("#","pathname","hash",i)),Re(!i.search||!i.search.includes("#"),tf("#","search","hash",i)));let o=e===""||i.pathname==="",a=o?"/":i.pathname,l;if(r||a==null)l=n;else{let f=t.length-1;if(a.startsWith("..")){let m=a.split("/");for(;m[0]==="..";)m.shift(),f-=1;i.pathname=m.join("/")}l=f>=0?t[f]:"/"}let s=pO(i,l),c=a&&a!=="/"&&a.endsWith("/"),d=(o||a===".")&&n.endsWith("/");return!s.pathname.endsWith("/")&&(c||d)&&(s.pathname+="/"),s}const $r=e=>e.join("/").replace(/\/\/+/g,"/"),mO=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),gO=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,vO=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function yO(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const sw=["post","put","patch","delete"];new Set(sw);const xO=["get",...sw];new Set(xO);/**
 * React Router v6.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function pc(){return pc=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},pc.apply(this,arguments)}const qm=x.createContext(null),lw=x.createContext(null),ki=x.createContext(null),wu=x.createContext(null),Vn=x.createContext({outlet:null,matches:[],isDataRoute:!1}),cw=x.createContext(null);function bO(e,t){let{relative:n}=t===void 0?{}:t;No()||Re(!1);let{basename:r,navigator:i}=x.useContext(ki),{hash:o,pathname:a,search:l}=Ym(e,{relative:n}),s=a;return r!=="/"&&(s=a==="/"?r:$r([r,a])),i.createHref({pathname:s,search:l,hash:o})}function No(){return x.useContext(wu)!=null}function Wn(){return No()||Re(!1),x.useContext(wu).location}function uw(e){x.useContext(ki).static||x.useLayoutEffect(e)}function et(){let{isDataRoute:e}=x.useContext(Vn);return e?DO():wO()}function wO(){No()||Re(!1);let e=x.useContext(qm),{basename:t,navigator:n}=x.useContext(ki),{matches:r}=x.useContext(Vn),{pathname:i}=Wn(),o=JSON.stringify(Hm(r).map(s=>s.pathnameBase)),a=x.useRef(!1);return uw(()=>{a.current=!0}),x.useCallback(function(s,c){if(c===void 0&&(c={}),!a.current)return;if(typeof s=="number"){n.go(s);return}let d=Gm(s,JSON.parse(o),i,c.relative==="path");e==null&&t!=="/"&&(d.pathname=d.pathname==="/"?t:$r([t,d.pathname])),(c.replace?n.replace:n.push)(d,c.state,c)},[t,n,o,i,e])}const SO=x.createContext(null);function CO(e){let t=x.useContext(Vn).outlet;return t&&x.createElement(SO.Provider,{value:e},t)}function dw(){let{matches:e}=x.useContext(Vn),t=e[e.length-1];return t?t.params:{}}function Ym(e,t){let{relative:n}=t===void 0?{}:t,{matches:r}=x.useContext(Vn),{pathname:i}=Wn(),o=JSON.stringify(Hm(r).map(a=>a.pathnameBase));return x.useMemo(()=>Gm(e,JSON.parse(o),i,n==="path"),[e,o,i,n])}function EO(e,t){return _O(e,t)}function _O(e,t,n){No()||Re(!1);let{navigator:r}=x.useContext(ki),{matches:i}=x.useContext(Vn),o=i[i.length-1],a=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let s=Wn(),c;if(t){var d;let y=typeof t=="string"?zo(t):t;l==="/"||(d=y.pathname)!=null&&d.startsWith(l)||Re(!1),c=y}else c=s;let f=c.pathname||"/",m=l==="/"?f:f.slice(l.length)||"/",p=ZP(e,{pathname:m}),h=jO(p&&p.map(y=>Object.assign({},y,{params:Object.assign({},a,y.params),pathname:$r([l,r.encodeLocation?r.encodeLocation(y.pathname).pathname:y.pathname]),pathnameBase:y.pathnameBase==="/"?l:$r([l,r.encodeLocation?r.encodeLocation(y.pathnameBase).pathname:y.pathnameBase])})),i,n);return t&&h?x.createElement(wu.Provider,{value:{location:pc({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:_r.Pop}},h):h}function kO(){let e=AO(),t=yO(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},o=null;return x.createElement(x.Fragment,null,x.createElement("h2",null,"Unexpected Application Error!"),x.createElement("h3",{style:{fontStyle:"italic"}},t),n?x.createElement("pre",{style:i},n):null,o)}const PO=x.createElement(kO,null);class OO extends x.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error||n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?x.createElement(Vn.Provider,{value:this.props.routeContext},x.createElement(cw.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function TO(e){let{routeContext:t,match:n,children:r}=e,i=x.useContext(qm);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),x.createElement(Vn.Provider,{value:t},r)}function jO(e,t,n){var r;if(t===void 0&&(t=[]),n===void 0&&(n=null),e==null){var i;if((i=n)!=null&&i.errors)e=n.matches;else return null}let o=e,a=(r=n)==null?void 0:r.errors;if(a!=null){let l=o.findIndex(s=>s.route.id&&(a==null?void 0:a[s.route.id]));l>=0||Re(!1),o=o.slice(0,Math.min(o.length,l+1))}return o.reduceRight((l,s,c)=>{let d=s.route.id?a==null?void 0:a[s.route.id]:null,f=null;n&&(f=s.route.errorElement||PO);let m=t.concat(o.slice(0,c+1)),p=()=>{let h;return d?h=f:s.route.Component?h=x.createElement(s.route.Component,null):s.route.element?h=s.route.element:h=l,x.createElement(TO,{match:s,routeContext:{outlet:l,matches:m,isDataRoute:n!=null},children:h})};return n&&(s.route.ErrorBoundary||s.route.errorElement||c===0)?x.createElement(OO,{location:n.location,revalidation:n.revalidation,component:f,error:d,children:p(),routeContext:{outlet:null,matches:m,isDataRoute:!0}}):p()},null)}var fw=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(fw||{}),hc=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(hc||{});function $O(e){let t=x.useContext(qm);return t||Re(!1),t}function IO(e){let t=x.useContext(lw);return t||Re(!1),t}function MO(e){let t=x.useContext(Vn);return t||Re(!1),t}function pw(e){let t=MO(),n=t.matches[t.matches.length-1];return n.route.id||Re(!1),n.route.id}function AO(){var e;let t=x.useContext(cw),n=IO(hc.UseRouteError),r=pw(hc.UseRouteError);return t||((e=n.errors)==null?void 0:e[r])}function DO(){let{router:e}=$O(fw.UseNavigateStable),t=pw(hc.UseNavigateStable),n=x.useRef(!1);return uw(()=>{n.current=!0}),x.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,pc({fromRouteId:t},o)))},[e,t])}function LO(e){let{to:t,replace:n,state:r,relative:i}=e;No()||Re(!1);let{matches:o}=x.useContext(Vn),{pathname:a}=Wn(),l=et(),s=Gm(t,Hm(o).map(d=>d.pathnameBase),a,i==="path"),c=JSON.stringify(s);return x.useEffect(()=>l(JSON.parse(c),{replace:n,state:r,relative:i}),[l,c,i,n,r]),null}function hw(e){return CO(e.context)}function Ie(e){Re(!1)}function RO(e){let{basename:t="/",children:n=null,location:r,navigationType:i=_r.Pop,navigator:o,static:a=!1}=e;No()&&Re(!1);let l=t.replace(/^\/*/,"/"),s=x.useMemo(()=>({basename:l,navigator:o,static:a}),[l,o,a]);typeof r=="string"&&(r=zo(r));let{pathname:c="/",search:d="",hash:f="",state:m=null,key:p="default"}=r,h=x.useMemo(()=>{let y=Um(c,l);return y==null?null:{location:{pathname:y,search:d,hash:f,state:m,key:p},navigationType:i}},[l,c,d,f,m,p,i]);return h==null?null:x.createElement(ki.Provider,{value:s},x.createElement(wu.Provider,{children:n,value:h}))}function FO(e){let{children:t,location:n}=e;return EO(Kp(t),n)}new Promise(()=>{});function Kp(e,t){t===void 0&&(t=[]);let n=[];return x.Children.forEach(e,(r,i)=>{if(!x.isValidElement(r))return;let o=[...t,i];if(r.type===x.Fragment){n.push.apply(n,Kp(r.props.children,o));return}r.type!==Ie&&Re(!1),!r.props.index||!r.props.children||Re(!1);let a={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(a.children=Kp(r.props.children,o)),n.push(a)}),n}/**
 * React Router DOM v6.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function mc(){return mc=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},mc.apply(this,arguments)}function mw(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function zO(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function NO(e,t){return e.button===0&&(!t||t==="_self")&&!zO(e)}function Qp(e){return e===void 0&&(e=""),new URLSearchParams(typeof e=="string"||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce((t,n)=>{let r=e[n];return t.concat(Array.isArray(r)?r.map(i=>[n,i]):[[n,r]])},[]))}function BO(e,t){let n=Qp(e);return t&&t.forEach((r,i)=>{n.has(i)||t.getAll(i).forEach(o=>{n.append(i,o)})}),n}const VO=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],WO=["aria-current","caseSensitive","className","end","style","to","children"],UO="startTransition",pv=Yp[UO];function HO(e){let{basename:t,children:n,future:r,window:i}=e,o=x.useRef();o.current==null&&(o.current=XP({window:i,v5Compat:!0}));let a=o.current,[l,s]=x.useState({action:a.action,location:a.location}),{v7_startTransition:c}=r||{},d=x.useCallback(f=>{c&&pv?pv(()=>s(f)):s(f)},[s,c]);return x.useLayoutEffect(()=>a.listen(d),[a,d]),x.createElement(RO,{basename:t,children:n,location:l.location,navigationType:l.action,navigator:a})}const GO=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",qO=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ge=x.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:o,replace:a,state:l,target:s,to:c,preventScrollReset:d}=t,f=mw(t,VO),{basename:m}=x.useContext(ki),p,h=!1;if(typeof c=="string"&&qO.test(c)&&(p=c,GO))try{let v=new URL(window.location.href),b=c.startsWith("//")?new URL(v.protocol+c):new URL(c),C=Um(b.pathname,m);b.origin===v.origin&&C!=null?c=C+b.search+b.hash:h=!0}catch{}let y=bO(c,{relative:i}),w=YO(c,{replace:a,state:l,target:s,preventScrollReset:d,relative:i});function g(v){r&&r(v),v.defaultPrevented||w(v)}return x.createElement("a",mc({},f,{href:p||y,onClick:h||o?r:g,ref:n,target:s}))}),gw=x.forwardRef(function(t,n){let{"aria-current":r="page",caseSensitive:i=!1,className:o="",end:a=!1,style:l,to:s,children:c}=t,d=mw(t,WO),f=Ym(s,{relative:d.relative}),m=Wn(),p=x.useContext(lw),{navigator:h}=x.useContext(ki),y=h.encodeLocation?h.encodeLocation(f).pathname:f.pathname,w=m.pathname,g=p&&p.navigation&&p.navigation.location?p.navigation.location.pathname:null;i||(w=w.toLowerCase(),g=g?g.toLowerCase():null,y=y.toLowerCase());let v=w===y||!a&&w.startsWith(y)&&w.charAt(y.length)==="/",b=g!=null&&(g===y||!a&&g.startsWith(y)&&g.charAt(y.length)==="/"),C=v?r:void 0,S;typeof o=="function"?S=o({isActive:v,isPending:b}):S=[o,v?"active":null,b?"pending":null].filter(Boolean).join(" ");let P=typeof l=="function"?l({isActive:v,isPending:b}):l;return x.createElement(ge,mc({},d,{"aria-current":C,className:S,ref:n,style:P,to:s}),typeof c=="function"?c({isActive:v,isPending:b}):c)});var hv;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher"})(hv||(hv={}));var mv;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(mv||(mv={}));function YO(e,t){let{target:n,replace:r,state:i,preventScrollReset:o,relative:a}=t===void 0?{}:t,l=et(),s=Wn(),c=Ym(e,{relative:a});return x.useCallback(d=>{if(NO(d,n)){d.preventDefault();let f=r!==void 0?r:fc(s)===fc(c);l(e,{replace:f,state:i,preventScrollReset:o,relative:a})}},[s,l,c,r,i,n,e,o,a])}function vw(e){let t=x.useRef(Qp(e)),n=x.useRef(!1),r=Wn(),i=x.useMemo(()=>BO(r.search,n.current?null:t.current),[r.search]),o=et(),a=x.useCallback((l,s)=>{const c=Qp(typeof l=="function"?l(i):l);n.current=!0,o("?"+c,s)},[o,i]);return[i,a]}var Zp={},yw={exports:{}},Yt={},xw={exports:{}},bw={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(O,A){var N=O.length;O.push(A);e:for(;0<N;){var B=N-1>>>1,L=O[B];if(0<i(L,A))O[B]=A,O[N]=L,N=B;else break e}}function n(O){return O.length===0?null:O[0]}function r(O){if(O.length===0)return null;var A=O[0],N=O.pop();if(N!==A){O[0]=N;e:for(var B=0,L=O.length,V=L>>>1;B<V;){var W=2*(B+1)-1,G=O[W],U=W+1,K=O[U];if(0>i(G,N))U<L&&0>i(K,G)?(O[B]=K,O[U]=N,B=U):(O[B]=G,O[W]=N,B=W);else if(U<L&&0>i(K,N))O[B]=K,O[U]=N,B=U;else break e}}return A}function i(O,A){var N=O.sortIndex-A.sortIndex;return N!==0?N:O.id-A.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var a=Date,l=a.now();e.unstable_now=function(){return a.now()-l}}var s=[],c=[],d=1,f=null,m=3,p=!1,h=!1,y=!1,w=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function b(O){for(var A=n(c);A!==null;){if(A.callback===null)r(c);else if(A.startTime<=O)r(c),A.sortIndex=A.expirationTime,t(s,A);else break;A=n(c)}}function C(O){if(y=!1,b(O),!h)if(n(s)!==null)h=!0,z(S);else{var A=n(c);A!==null&&R(C,A.startTime-O)}}function S(O,A){h=!1,y&&(y=!1,g(_),_=-1),p=!0;var N=m;try{for(b(A),f=n(s);f!==null&&(!(f.expirationTime>A)||O&&!I());){var B=f.callback;if(typeof B=="function"){f.callback=null,m=f.priorityLevel;var L=B(f.expirationTime<=A);A=e.unstable_now(),typeof L=="function"?f.callback=L:f===n(s)&&r(s),b(A)}else r(s);f=n(s)}if(f!==null)var V=!0;else{var W=n(c);W!==null&&R(C,W.startTime-A),V=!1}return V}finally{f=null,m=N,p=!1}}var P=!1,k=null,_=-1,T=5,$=-1;function I(){return!(e.unstable_now()-$<T)}function M(){if(k!==null){var O=e.unstable_now();$=O;var A=!0;try{A=k(!0,O)}finally{A?j():(P=!1,k=null)}}else P=!1}var j;if(typeof v=="function")j=function(){v(M)};else if(typeof MessageChannel<"u"){var F=new MessageChannel,D=F.port2;F.port1.onmessage=M,j=function(){D.postMessage(null)}}else j=function(){w(M,0)};function z(O){k=O,P||(P=!0,j())}function R(O,A){_=w(function(){O(e.unstable_now())},A)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(O){O.callback=null},e.unstable_continueExecution=function(){h||p||(h=!0,z(S))},e.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<O?Math.floor(1e3/O):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(O){switch(m){case 1:case 2:case 3:var A=3;break;default:A=m}var N=m;m=A;try{return O()}finally{m=N}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(O,A){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var N=m;m=O;try{return A()}finally{m=N}},e.unstable_scheduleCallback=function(O,A,N){var B=e.unstable_now();switch(typeof N=="object"&&N!==null?(N=N.delay,N=typeof N=="number"&&0<N?B+N:B):N=B,O){case 1:var L=-1;break;case 2:L=250;break;case 5:L=1073741823;break;case 4:L=1e4;break;default:L=5e3}return L=N+L,O={id:d++,callback:A,priorityLevel:O,startTime:N,expirationTime:L,sortIndex:-1},N>B?(O.sortIndex=N,t(c,O),n(s)===null&&O===n(c)&&(y?(g(_),_=-1):y=!0,R(C,N-B))):(O.sortIndex=L,t(s,O),h||p||(h=!0,z(S))),O},e.unstable_shouldYield=I,e.unstable_wrapCallback=function(O){var A=m;return function(){var N=m;m=A;try{return O.apply(this,arguments)}finally{m=N}}}})(bw);xw.exports=bw;var XO=xw.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ww=x,Gt=XO;function H(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Sw=new Set,Qa={};function Pi(e,t){xo(e,t),xo(e+"Capture",t)}function xo(e,t){for(Qa[e]=t,e=0;e<t.length;e++)Sw.add(t[e])}var or=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Jp=Object.prototype.hasOwnProperty,KO=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,gv={},vv={};function QO(e){return Jp.call(vv,e)?!0:Jp.call(gv,e)?!1:KO.test(e)?vv[e]=!0:(gv[e]=!0,!1)}function ZO(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function JO(e,t,n,r){if(t===null||typeof t>"u"||ZO(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function _t(e,t,n,r,i,o,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=a}var st={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){st[e]=new _t(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];st[t]=new _t(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){st[e]=new _t(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){st[e]=new _t(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){st[e]=new _t(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){st[e]=new _t(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){st[e]=new _t(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){st[e]=new _t(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){st[e]=new _t(e,5,!1,e.toLowerCase(),null,!1,!1)});var Xm=/[\-:]([a-z])/g;function Km(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Xm,Km);st[t]=new _t(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Xm,Km);st[t]=new _t(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Xm,Km);st[t]=new _t(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){st[e]=new _t(e,1,!1,e.toLowerCase(),null,!1,!1)});st.xlinkHref=new _t("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){st[e]=new _t(e,1,!1,e.toLowerCase(),null,!0,!0)});function Qm(e,t,n,r){var i=st.hasOwnProperty(t)?st[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(JO(t,n,i,r)&&(n=null),r||i===null?QO(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var pr=ww.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ys=Symbol.for("react.element"),Ki=Symbol.for("react.portal"),Qi=Symbol.for("react.fragment"),Zm=Symbol.for("react.strict_mode"),eh=Symbol.for("react.profiler"),Cw=Symbol.for("react.provider"),Ew=Symbol.for("react.context"),Jm=Symbol.for("react.forward_ref"),th=Symbol.for("react.suspense"),nh=Symbol.for("react.suspense_list"),eg=Symbol.for("react.memo"),br=Symbol.for("react.lazy"),_w=Symbol.for("react.offscreen"),yv=Symbol.iterator;function na(e){return e===null||typeof e!="object"?null:(e=yv&&e[yv]||e["@@iterator"],typeof e=="function"?e:null)}var $e=Object.assign,nf;function xa(e){if(nf===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);nf=t&&t[1]||""}return`
`+nf+e}var rf=!1;function of(e,t){if(!e||rf)return"";rf=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),o=r.stack.split(`
`),a=i.length-1,l=o.length-1;1<=a&&0<=l&&i[a]!==o[l];)l--;for(;1<=a&&0<=l;a--,l--)if(i[a]!==o[l]){if(a!==1||l!==1)do if(a--,l--,0>l||i[a]!==o[l]){var s=`
`+i[a].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=a&&0<=l);break}}}finally{rf=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?xa(e):""}function eT(e){switch(e.tag){case 5:return xa(e.type);case 16:return xa("Lazy");case 13:return xa("Suspense");case 19:return xa("SuspenseList");case 0:case 2:case 15:return e=of(e.type,!1),e;case 11:return e=of(e.type.render,!1),e;case 1:return e=of(e.type,!0),e;default:return""}}function rh(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Qi:return"Fragment";case Ki:return"Portal";case eh:return"Profiler";case Zm:return"StrictMode";case th:return"Suspense";case nh:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Ew:return(e.displayName||"Context")+".Consumer";case Cw:return(e._context.displayName||"Context")+".Provider";case Jm:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case eg:return t=e.displayName||null,t!==null?t:rh(e.type)||"Memo";case br:t=e._payload,e=e._init;try{return rh(e(t))}catch{}}return null}function tT(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return rh(t);case 8:return t===Zm?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Br(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function kw(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function nT(e){var t=kw(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(a){r=""+a,o.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Xs(e){e._valueTracker||(e._valueTracker=nT(e))}function Pw(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=kw(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function gc(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ih(e,t){var n=t.checked;return $e({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function xv(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Br(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Ow(e,t){t=t.checked,t!=null&&Qm(e,"checked",t,!1)}function oh(e,t){Ow(e,t);var n=Br(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ah(e,t.type,n):t.hasOwnProperty("defaultValue")&&ah(e,t.type,Br(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function bv(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function ah(e,t,n){(t!=="number"||gc(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var ba=Array.isArray;function lo(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Br(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function sh(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(H(91));return $e({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function wv(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(H(92));if(ba(n)){if(1<n.length)throw Error(H(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Br(n)}}function Tw(e,t){var n=Br(t.value),r=Br(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Sv(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function jw(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function lh(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?jw(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Ks,$w=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Ks=Ks||document.createElement("div"),Ks.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Ks.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Za(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var ja={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},rT=["Webkit","ms","Moz","O"];Object.keys(ja).forEach(function(e){rT.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),ja[t]=ja[e]})});function Iw(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||ja.hasOwnProperty(e)&&ja[e]?(""+t).trim():t+"px"}function Mw(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Iw(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var iT=$e({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ch(e,t){if(t){if(iT[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(H(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(H(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(H(61))}if(t.style!=null&&typeof t.style!="object")throw Error(H(62))}}function uh(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var dh=null;function tg(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var fh=null,co=null,uo=null;function Cv(e){if(e=Os(e)){if(typeof fh!="function")throw Error(H(280));var t=e.stateNode;t&&(t=ku(t),fh(e.stateNode,e.type,t))}}function Aw(e){co?uo?uo.push(e):uo=[e]:co=e}function Dw(){if(co){var e=co,t=uo;if(uo=co=null,Cv(e),t)for(e=0;e<t.length;e++)Cv(t[e])}}function Lw(e,t){return e(t)}function Rw(){}var af=!1;function Fw(e,t,n){if(af)return e(t,n);af=!0;try{return Lw(e,t,n)}finally{af=!1,(co!==null||uo!==null)&&(Rw(),Dw())}}function Ja(e,t){var n=e.stateNode;if(n===null)return null;var r=ku(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(H(231,t,typeof n));return n}var ph=!1;if(or)try{var ra={};Object.defineProperty(ra,"passive",{get:function(){ph=!0}}),window.addEventListener("test",ra,ra),window.removeEventListener("test",ra,ra)}catch{ph=!1}function oT(e,t,n,r,i,o,a,l,s){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(d){this.onError(d)}}var $a=!1,vc=null,yc=!1,hh=null,aT={onError:function(e){$a=!0,vc=e}};function sT(e,t,n,r,i,o,a,l,s){$a=!1,vc=null,oT.apply(aT,arguments)}function lT(e,t,n,r,i,o,a,l,s){if(sT.apply(this,arguments),$a){if($a){var c=vc;$a=!1,vc=null}else throw Error(H(198));yc||(yc=!0,hh=c)}}function Oi(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function zw(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Ev(e){if(Oi(e)!==e)throw Error(H(188))}function cT(e){var t=e.alternate;if(!t){if(t=Oi(e),t===null)throw Error(H(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return Ev(i),e;if(o===r)return Ev(i),t;o=o.sibling}throw Error(H(188))}if(n.return!==r.return)n=i,r=o;else{for(var a=!1,l=i.child;l;){if(l===n){a=!0,n=i,r=o;break}if(l===r){a=!0,r=i,n=o;break}l=l.sibling}if(!a){for(l=o.child;l;){if(l===n){a=!0,n=o,r=i;break}if(l===r){a=!0,r=o,n=i;break}l=l.sibling}if(!a)throw Error(H(189))}}if(n.alternate!==r)throw Error(H(190))}if(n.tag!==3)throw Error(H(188));return n.stateNode.current===n?e:t}function Nw(e){return e=cT(e),e!==null?Bw(e):null}function Bw(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Bw(e);if(t!==null)return t;e=e.sibling}return null}var Vw=Gt.unstable_scheduleCallback,_v=Gt.unstable_cancelCallback,uT=Gt.unstable_shouldYield,dT=Gt.unstable_requestPaint,Le=Gt.unstable_now,fT=Gt.unstable_getCurrentPriorityLevel,ng=Gt.unstable_ImmediatePriority,Ww=Gt.unstable_UserBlockingPriority,xc=Gt.unstable_NormalPriority,pT=Gt.unstable_LowPriority,Uw=Gt.unstable_IdlePriority,Su=null,Ln=null;function hT(e){if(Ln&&typeof Ln.onCommitFiberRoot=="function")try{Ln.onCommitFiberRoot(Su,e,void 0,(e.current.flags&128)===128)}catch{}}var gn=Math.clz32?Math.clz32:vT,mT=Math.log,gT=Math.LN2;function vT(e){return e>>>=0,e===0?32:31-(mT(e)/gT|0)|0}var Qs=64,Zs=4194304;function wa(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function bc(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,a=n&268435455;if(a!==0){var l=a&~i;l!==0?r=wa(l):(o&=a,o!==0&&(r=wa(o)))}else a=n&~i,a!==0?r=wa(a):o!==0&&(r=wa(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-gn(t),i=1<<n,r|=e[n],t&=~i;return r}function yT(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function xT(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var a=31-gn(o),l=1<<a,s=i[a];s===-1?(!(l&n)||l&r)&&(i[a]=yT(l,t)):s<=t&&(e.expiredLanes|=l),o&=~l}}function mh(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Hw(){var e=Qs;return Qs<<=1,!(Qs&4194240)&&(Qs=64),e}function sf(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ks(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-gn(t),e[t]=n}function bT(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-gn(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function rg(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-gn(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var ye=0;function Gw(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var qw,ig,Yw,Xw,Kw,gh=!1,Js=[],Ir=null,Mr=null,Ar=null,es=new Map,ts=new Map,Sr=[],wT="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function kv(e,t){switch(e){case"focusin":case"focusout":Ir=null;break;case"dragenter":case"dragleave":Mr=null;break;case"mouseover":case"mouseout":Ar=null;break;case"pointerover":case"pointerout":es.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ts.delete(t.pointerId)}}function ia(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=Os(t),t!==null&&ig(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function ST(e,t,n,r,i){switch(t){case"focusin":return Ir=ia(Ir,e,t,n,r,i),!0;case"dragenter":return Mr=ia(Mr,e,t,n,r,i),!0;case"mouseover":return Ar=ia(Ar,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return es.set(o,ia(es.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,ts.set(o,ia(ts.get(o)||null,e,t,n,r,i)),!0}return!1}function Qw(e){var t=oi(e.target);if(t!==null){var n=Oi(t);if(n!==null){if(t=n.tag,t===13){if(t=zw(n),t!==null){e.blockedOn=t,Kw(e.priority,function(){Yw(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ll(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=vh(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);dh=r,n.target.dispatchEvent(r),dh=null}else return t=Os(n),t!==null&&ig(t),e.blockedOn=n,!1;t.shift()}return!0}function Pv(e,t,n){Ll(e)&&n.delete(t)}function CT(){gh=!1,Ir!==null&&Ll(Ir)&&(Ir=null),Mr!==null&&Ll(Mr)&&(Mr=null),Ar!==null&&Ll(Ar)&&(Ar=null),es.forEach(Pv),ts.forEach(Pv)}function oa(e,t){e.blockedOn===t&&(e.blockedOn=null,gh||(gh=!0,Gt.unstable_scheduleCallback(Gt.unstable_NormalPriority,CT)))}function ns(e){function t(i){return oa(i,e)}if(0<Js.length){oa(Js[0],e);for(var n=1;n<Js.length;n++){var r=Js[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Ir!==null&&oa(Ir,e),Mr!==null&&oa(Mr,e),Ar!==null&&oa(Ar,e),es.forEach(t),ts.forEach(t),n=0;n<Sr.length;n++)r=Sr[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Sr.length&&(n=Sr[0],n.blockedOn===null);)Qw(n),n.blockedOn===null&&Sr.shift()}var fo=pr.ReactCurrentBatchConfig,wc=!0;function ET(e,t,n,r){var i=ye,o=fo.transition;fo.transition=null;try{ye=1,og(e,t,n,r)}finally{ye=i,fo.transition=o}}function _T(e,t,n,r){var i=ye,o=fo.transition;fo.transition=null;try{ye=4,og(e,t,n,r)}finally{ye=i,fo.transition=o}}function og(e,t,n,r){if(wc){var i=vh(e,t,n,r);if(i===null)vf(e,t,r,Sc,n),kv(e,r);else if(ST(i,e,t,n,r))r.stopPropagation();else if(kv(e,r),t&4&&-1<wT.indexOf(e)){for(;i!==null;){var o=Os(i);if(o!==null&&qw(o),o=vh(e,t,n,r),o===null&&vf(e,t,r,Sc,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else vf(e,t,r,null,n)}}var Sc=null;function vh(e,t,n,r){if(Sc=null,e=tg(r),e=oi(e),e!==null)if(t=Oi(e),t===null)e=null;else if(n=t.tag,n===13){if(e=zw(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Sc=e,null}function Zw(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(fT()){case ng:return 1;case Ww:return 4;case xc:case pT:return 16;case Uw:return 536870912;default:return 16}default:return 16}}var kr=null,ag=null,Rl=null;function Jw(){if(Rl)return Rl;var e,t=ag,n=t.length,r,i="value"in kr?kr.value:kr.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===i[o-r];r++);return Rl=i.slice(e,1<r?1-r:void 0)}function Fl(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function el(){return!0}function Ov(){return!1}function Xt(e){function t(n,r,i,o,a){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=a,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(o):o[l]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?el:Ov,this.isPropagationStopped=Ov,this}return $e(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=el)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=el)},persist:function(){},isPersistent:el}),t}var Bo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},sg=Xt(Bo),Ps=$e({},Bo,{view:0,detail:0}),kT=Xt(Ps),lf,cf,aa,Cu=$e({},Ps,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:lg,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==aa&&(aa&&e.type==="mousemove"?(lf=e.screenX-aa.screenX,cf=e.screenY-aa.screenY):cf=lf=0,aa=e),lf)},movementY:function(e){return"movementY"in e?e.movementY:cf}}),Tv=Xt(Cu),PT=$e({},Cu,{dataTransfer:0}),OT=Xt(PT),TT=$e({},Ps,{relatedTarget:0}),uf=Xt(TT),jT=$e({},Bo,{animationName:0,elapsedTime:0,pseudoElement:0}),$T=Xt(jT),IT=$e({},Bo,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),MT=Xt(IT),AT=$e({},Bo,{data:0}),jv=Xt(AT),DT={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},LT={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},RT={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function FT(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=RT[e])?!!t[e]:!1}function lg(){return FT}var zT=$e({},Ps,{key:function(e){if(e.key){var t=DT[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Fl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?LT[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:lg,charCode:function(e){return e.type==="keypress"?Fl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Fl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),NT=Xt(zT),BT=$e({},Cu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),$v=Xt(BT),VT=$e({},Ps,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:lg}),WT=Xt(VT),UT=$e({},Bo,{propertyName:0,elapsedTime:0,pseudoElement:0}),HT=Xt(UT),GT=$e({},Cu,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),qT=Xt(GT),YT=[9,13,27,32],cg=or&&"CompositionEvent"in window,Ia=null;or&&"documentMode"in document&&(Ia=document.documentMode);var XT=or&&"TextEvent"in window&&!Ia,eS=or&&(!cg||Ia&&8<Ia&&11>=Ia),Iv=String.fromCharCode(32),Mv=!1;function tS(e,t){switch(e){case"keyup":return YT.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function nS(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Zi=!1;function KT(e,t){switch(e){case"compositionend":return nS(t);case"keypress":return t.which!==32?null:(Mv=!0,Iv);case"textInput":return e=t.data,e===Iv&&Mv?null:e;default:return null}}function QT(e,t){if(Zi)return e==="compositionend"||!cg&&tS(e,t)?(e=Jw(),Rl=ag=kr=null,Zi=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return eS&&t.locale!=="ko"?null:t.data;default:return null}}var ZT={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Av(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!ZT[e.type]:t==="textarea"}function rS(e,t,n,r){Aw(r),t=Cc(t,"onChange"),0<t.length&&(n=new sg("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Ma=null,rs=null;function JT(e){hS(e,0)}function Eu(e){var t=to(e);if(Pw(t))return e}function ej(e,t){if(e==="change")return t}var iS=!1;if(or){var df;if(or){var ff="oninput"in document;if(!ff){var Dv=document.createElement("div");Dv.setAttribute("oninput","return;"),ff=typeof Dv.oninput=="function"}df=ff}else df=!1;iS=df&&(!document.documentMode||9<document.documentMode)}function Lv(){Ma&&(Ma.detachEvent("onpropertychange",oS),rs=Ma=null)}function oS(e){if(e.propertyName==="value"&&Eu(rs)){var t=[];rS(t,rs,e,tg(e)),Fw(JT,t)}}function tj(e,t,n){e==="focusin"?(Lv(),Ma=t,rs=n,Ma.attachEvent("onpropertychange",oS)):e==="focusout"&&Lv()}function nj(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Eu(rs)}function rj(e,t){if(e==="click")return Eu(t)}function ij(e,t){if(e==="input"||e==="change")return Eu(t)}function oj(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var wn=typeof Object.is=="function"?Object.is:oj;function is(e,t){if(wn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Jp.call(t,i)||!wn(e[i],t[i]))return!1}return!0}function Rv(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Fv(e,t){var n=Rv(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Rv(n)}}function aS(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?aS(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function sS(){for(var e=window,t=gc();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=gc(e.document)}return t}function ug(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function aj(e){var t=sS(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&aS(n.ownerDocument.documentElement,n)){if(r!==null&&ug(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=Fv(n,o);var a=Fv(n,r);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var sj=or&&"documentMode"in document&&11>=document.documentMode,Ji=null,yh=null,Aa=null,xh=!1;function zv(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;xh||Ji==null||Ji!==gc(r)||(r=Ji,"selectionStart"in r&&ug(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Aa&&is(Aa,r)||(Aa=r,r=Cc(yh,"onSelect"),0<r.length&&(t=new sg("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Ji)))}function tl(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var eo={animationend:tl("Animation","AnimationEnd"),animationiteration:tl("Animation","AnimationIteration"),animationstart:tl("Animation","AnimationStart"),transitionend:tl("Transition","TransitionEnd")},pf={},lS={};or&&(lS=document.createElement("div").style,"AnimationEvent"in window||(delete eo.animationend.animation,delete eo.animationiteration.animation,delete eo.animationstart.animation),"TransitionEvent"in window||delete eo.transitionend.transition);function _u(e){if(pf[e])return pf[e];if(!eo[e])return e;var t=eo[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in lS)return pf[e]=t[n];return e}var cS=_u("animationend"),uS=_u("animationiteration"),dS=_u("animationstart"),fS=_u("transitionend"),pS=new Map,Nv="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ur(e,t){pS.set(e,t),Pi(t,[e])}for(var hf=0;hf<Nv.length;hf++){var mf=Nv[hf],lj=mf.toLowerCase(),cj=mf[0].toUpperCase()+mf.slice(1);Ur(lj,"on"+cj)}Ur(cS,"onAnimationEnd");Ur(uS,"onAnimationIteration");Ur(dS,"onAnimationStart");Ur("dblclick","onDoubleClick");Ur("focusin","onFocus");Ur("focusout","onBlur");Ur(fS,"onTransitionEnd");xo("onMouseEnter",["mouseout","mouseover"]);xo("onMouseLeave",["mouseout","mouseover"]);xo("onPointerEnter",["pointerout","pointerover"]);xo("onPointerLeave",["pointerout","pointerover"]);Pi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Pi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Pi("onBeforeInput",["compositionend","keypress","textInput","paste"]);Pi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Pi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Pi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Sa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),uj=new Set("cancel close invalid load scroll toggle".split(" ").concat(Sa));function Bv(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,lT(r,t,void 0,e),e.currentTarget=null}function hS(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var a=r.length-1;0<=a;a--){var l=r[a],s=l.instance,c=l.currentTarget;if(l=l.listener,s!==o&&i.isPropagationStopped())break e;Bv(i,l,c),o=s}else for(a=0;a<r.length;a++){if(l=r[a],s=l.instance,c=l.currentTarget,l=l.listener,s!==o&&i.isPropagationStopped())break e;Bv(i,l,c),o=s}}}if(yc)throw e=hh,yc=!1,hh=null,e}function we(e,t){var n=t[Eh];n===void 0&&(n=t[Eh]=new Set);var r=e+"__bubble";n.has(r)||(mS(t,e,2,!1),n.add(r))}function gf(e,t,n){var r=0;t&&(r|=4),mS(n,e,r,t)}var nl="_reactListening"+Math.random().toString(36).slice(2);function os(e){if(!e[nl]){e[nl]=!0,Sw.forEach(function(n){n!=="selectionchange"&&(uj.has(n)||gf(n,!1,e),gf(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[nl]||(t[nl]=!0,gf("selectionchange",!1,t))}}function mS(e,t,n,r){switch(Zw(t)){case 1:var i=ET;break;case 4:i=_T;break;default:i=og}n=i.bind(null,t,n,e),i=void 0,!ph||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function vf(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(a===4)for(a=r.return;a!==null;){var s=a.tag;if((s===3||s===4)&&(s=a.stateNode.containerInfo,s===i||s.nodeType===8&&s.parentNode===i))return;a=a.return}for(;l!==null;){if(a=oi(l),a===null)return;if(s=a.tag,s===5||s===6){r=o=a;continue e}l=l.parentNode}}r=r.return}Fw(function(){var c=o,d=tg(n),f=[];e:{var m=pS.get(e);if(m!==void 0){var p=sg,h=e;switch(e){case"keypress":if(Fl(n)===0)break e;case"keydown":case"keyup":p=NT;break;case"focusin":h="focus",p=uf;break;case"focusout":h="blur",p=uf;break;case"beforeblur":case"afterblur":p=uf;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Tv;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=OT;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=WT;break;case cS:case uS:case dS:p=$T;break;case fS:p=HT;break;case"scroll":p=kT;break;case"wheel":p=qT;break;case"copy":case"cut":case"paste":p=MT;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=$v}var y=(t&4)!==0,w=!y&&e==="scroll",g=y?m!==null?m+"Capture":null:m;y=[];for(var v=c,b;v!==null;){b=v;var C=b.stateNode;if(b.tag===5&&C!==null&&(b=C,g!==null&&(C=Ja(v,g),C!=null&&y.push(as(v,C,b)))),w)break;v=v.return}0<y.length&&(m=new p(m,h,null,n,d),f.push({event:m,listeners:y}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",p=e==="mouseout"||e==="pointerout",m&&n!==dh&&(h=n.relatedTarget||n.fromElement)&&(oi(h)||h[ar]))break e;if((p||m)&&(m=d.window===d?d:(m=d.ownerDocument)?m.defaultView||m.parentWindow:window,p?(h=n.relatedTarget||n.toElement,p=c,h=h?oi(h):null,h!==null&&(w=Oi(h),h!==w||h.tag!==5&&h.tag!==6)&&(h=null)):(p=null,h=c),p!==h)){if(y=Tv,C="onMouseLeave",g="onMouseEnter",v="mouse",(e==="pointerout"||e==="pointerover")&&(y=$v,C="onPointerLeave",g="onPointerEnter",v="pointer"),w=p==null?m:to(p),b=h==null?m:to(h),m=new y(C,v+"leave",p,n,d),m.target=w,m.relatedTarget=b,C=null,oi(d)===c&&(y=new y(g,v+"enter",h,n,d),y.target=b,y.relatedTarget=w,C=y),w=C,p&&h)t:{for(y=p,g=h,v=0,b=y;b;b=Ai(b))v++;for(b=0,C=g;C;C=Ai(C))b++;for(;0<v-b;)y=Ai(y),v--;for(;0<b-v;)g=Ai(g),b--;for(;v--;){if(y===g||g!==null&&y===g.alternate)break t;y=Ai(y),g=Ai(g)}y=null}else y=null;p!==null&&Vv(f,m,p,y,!1),h!==null&&w!==null&&Vv(f,w,h,y,!0)}}e:{if(m=c?to(c):window,p=m.nodeName&&m.nodeName.toLowerCase(),p==="select"||p==="input"&&m.type==="file")var S=ej;else if(Av(m))if(iS)S=ij;else{S=nj;var P=tj}else(p=m.nodeName)&&p.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(S=rj);if(S&&(S=S(e,c))){rS(f,S,n,d);break e}P&&P(e,m,c),e==="focusout"&&(P=m._wrapperState)&&P.controlled&&m.type==="number"&&ah(m,"number",m.value)}switch(P=c?to(c):window,e){case"focusin":(Av(P)||P.contentEditable==="true")&&(Ji=P,yh=c,Aa=null);break;case"focusout":Aa=yh=Ji=null;break;case"mousedown":xh=!0;break;case"contextmenu":case"mouseup":case"dragend":xh=!1,zv(f,n,d);break;case"selectionchange":if(sj)break;case"keydown":case"keyup":zv(f,n,d)}var k;if(cg)e:{switch(e){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else Zi?tS(e,n)&&(_="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(_="onCompositionStart");_&&(eS&&n.locale!=="ko"&&(Zi||_!=="onCompositionStart"?_==="onCompositionEnd"&&Zi&&(k=Jw()):(kr=d,ag="value"in kr?kr.value:kr.textContent,Zi=!0)),P=Cc(c,_),0<P.length&&(_=new jv(_,e,null,n,d),f.push({event:_,listeners:P}),k?_.data=k:(k=nS(n),k!==null&&(_.data=k)))),(k=XT?KT(e,n):QT(e,n))&&(c=Cc(c,"onBeforeInput"),0<c.length&&(d=new jv("onBeforeInput","beforeinput",null,n,d),f.push({event:d,listeners:c}),d.data=k))}hS(f,t)})}function as(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Cc(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Ja(e,n),o!=null&&r.unshift(as(e,o,i)),o=Ja(e,t),o!=null&&r.push(as(e,o,i))),e=e.return}return r}function Ai(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Vv(e,t,n,r,i){for(var o=t._reactName,a=[];n!==null&&n!==r;){var l=n,s=l.alternate,c=l.stateNode;if(s!==null&&s===r)break;l.tag===5&&c!==null&&(l=c,i?(s=Ja(n,o),s!=null&&a.unshift(as(n,s,l))):i||(s=Ja(n,o),s!=null&&a.push(as(n,s,l)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var dj=/\r\n?/g,fj=/\u0000|\uFFFD/g;function Wv(e){return(typeof e=="string"?e:""+e).replace(dj,`
`).replace(fj,"")}function rl(e,t,n){if(t=Wv(t),Wv(e)!==t&&n)throw Error(H(425))}function Ec(){}var bh=null,wh=null;function Sh(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ch=typeof setTimeout=="function"?setTimeout:void 0,pj=typeof clearTimeout=="function"?clearTimeout:void 0,Uv=typeof Promise=="function"?Promise:void 0,hj=typeof queueMicrotask=="function"?queueMicrotask:typeof Uv<"u"?function(e){return Uv.resolve(null).then(e).catch(mj)}:Ch;function mj(e){setTimeout(function(){throw e})}function yf(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),ns(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);ns(t)}function Dr(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Hv(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Vo=Math.random().toString(36).slice(2),An="__reactFiber$"+Vo,ss="__reactProps$"+Vo,ar="__reactContainer$"+Vo,Eh="__reactEvents$"+Vo,gj="__reactListeners$"+Vo,vj="__reactHandles$"+Vo;function oi(e){var t=e[An];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ar]||n[An]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Hv(e);e!==null;){if(n=e[An])return n;e=Hv(e)}return t}e=n,n=e.parentNode}return null}function Os(e){return e=e[An]||e[ar],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function to(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(H(33))}function ku(e){return e[ss]||null}var _h=[],no=-1;function Hr(e){return{current:e}}function Ce(e){0>no||(e.current=_h[no],_h[no]=null,no--)}function be(e,t){no++,_h[no]=e.current,e.current=t}var Vr={},mt=Hr(Vr),It=Hr(!1),gi=Vr;function bo(e,t){var n=e.type.contextTypes;if(!n)return Vr;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Mt(e){return e=e.childContextTypes,e!=null}function _c(){Ce(It),Ce(mt)}function Gv(e,t,n){if(mt.current!==Vr)throw Error(H(168));be(mt,t),be(It,n)}function gS(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(H(108,tT(e)||"Unknown",i));return $e({},n,r)}function kc(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Vr,gi=mt.current,be(mt,e),be(It,It.current),!0}function qv(e,t,n){var r=e.stateNode;if(!r)throw Error(H(169));n?(e=gS(e,t,gi),r.__reactInternalMemoizedMergedChildContext=e,Ce(It),Ce(mt),be(mt,e)):Ce(It),be(It,n)}var Qn=null,Pu=!1,xf=!1;function vS(e){Qn===null?Qn=[e]:Qn.push(e)}function yj(e){Pu=!0,vS(e)}function Gr(){if(!xf&&Qn!==null){xf=!0;var e=0,t=ye;try{var n=Qn;for(ye=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Qn=null,Pu=!1}catch(i){throw Qn!==null&&(Qn=Qn.slice(e+1)),Vw(ng,Gr),i}finally{ye=t,xf=!1}}return null}var ro=[],io=0,Pc=null,Oc=0,Zt=[],Jt=0,vi=null,er=1,tr="";function Zr(e,t){ro[io++]=Oc,ro[io++]=Pc,Pc=e,Oc=t}function yS(e,t,n){Zt[Jt++]=er,Zt[Jt++]=tr,Zt[Jt++]=vi,vi=e;var r=er;e=tr;var i=32-gn(r)-1;r&=~(1<<i),n+=1;var o=32-gn(t)+i;if(30<o){var a=i-i%5;o=(r&(1<<a)-1).toString(32),r>>=a,i-=a,er=1<<32-gn(t)+i|n<<i|r,tr=o+e}else er=1<<o|n<<i|r,tr=e}function dg(e){e.return!==null&&(Zr(e,1),yS(e,1,0))}function fg(e){for(;e===Pc;)Pc=ro[--io],ro[io]=null,Oc=ro[--io],ro[io]=null;for(;e===vi;)vi=Zt[--Jt],Zt[Jt]=null,tr=Zt[--Jt],Zt[Jt]=null,er=Zt[--Jt],Zt[Jt]=null}var Ut=null,Bt=null,ke=!1,hn=null;function xS(e,t){var n=en(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Yv(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ut=e,Bt=Dr(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ut=e,Bt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=vi!==null?{id:er,overflow:tr}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=en(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ut=e,Bt=null,!0):!1;default:return!1}}function kh(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ph(e){if(ke){var t=Bt;if(t){var n=t;if(!Yv(e,t)){if(kh(e))throw Error(H(418));t=Dr(n.nextSibling);var r=Ut;t&&Yv(e,t)?xS(r,n):(e.flags=e.flags&-4097|2,ke=!1,Ut=e)}}else{if(kh(e))throw Error(H(418));e.flags=e.flags&-4097|2,ke=!1,Ut=e}}}function Xv(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ut=e}function il(e){if(e!==Ut)return!1;if(!ke)return Xv(e),ke=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Sh(e.type,e.memoizedProps)),t&&(t=Bt)){if(kh(e))throw bS(),Error(H(418));for(;t;)xS(e,t),t=Dr(t.nextSibling)}if(Xv(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(H(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Bt=Dr(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Bt=null}}else Bt=Ut?Dr(e.stateNode.nextSibling):null;return!0}function bS(){for(var e=Bt;e;)e=Dr(e.nextSibling)}function wo(){Bt=Ut=null,ke=!1}function pg(e){hn===null?hn=[e]:hn.push(e)}var xj=pr.ReactCurrentBatchConfig;function dn(e,t){if(e&&e.defaultProps){t=$e({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Tc=Hr(null),jc=null,oo=null,hg=null;function mg(){hg=oo=jc=null}function gg(e){var t=Tc.current;Ce(Tc),e._currentValue=t}function Oh(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function po(e,t){jc=e,hg=oo=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&($t=!0),e.firstContext=null)}function nn(e){var t=e._currentValue;if(hg!==e)if(e={context:e,memoizedValue:t,next:null},oo===null){if(jc===null)throw Error(H(308));oo=e,jc.dependencies={lanes:0,firstContext:e}}else oo=oo.next=e;return t}var ai=null;function vg(e){ai===null?ai=[e]:ai.push(e)}function wS(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,vg(t)):(n.next=i.next,i.next=n),t.interleaved=n,sr(e,r)}function sr(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var wr=!1;function yg(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function SS(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function nr(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Lr(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,ue&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,sr(e,n)}return i=r.interleaved,i===null?(t.next=t,vg(r)):(t.next=i.next,i.next=t),r.interleaved=t,sr(e,n)}function zl(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,rg(e,n)}}function Kv(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=a:o=o.next=a,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function $c(e,t,n,r){var i=e.updateQueue;wr=!1;var o=i.firstBaseUpdate,a=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var s=l,c=s.next;s.next=null,a===null?o=c:a.next=c,a=s;var d=e.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==a&&(l===null?d.firstBaseUpdate=c:l.next=c,d.lastBaseUpdate=s))}if(o!==null){var f=i.baseState;a=0,d=c=s=null,l=o;do{var m=l.lane,p=l.eventTime;if((r&m)===m){d!==null&&(d=d.next={eventTime:p,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var h=e,y=l;switch(m=t,p=n,y.tag){case 1:if(h=y.payload,typeof h=="function"){f=h.call(p,f,m);break e}f=h;break e;case 3:h.flags=h.flags&-65537|128;case 0:if(h=y.payload,m=typeof h=="function"?h.call(p,f,m):h,m==null)break e;f=$e({},f,m);break e;case 2:wr=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,m=i.effects,m===null?i.effects=[l]:m.push(l))}else p={eventTime:p,lane:m,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(c=d=p,s=f):d=d.next=p,a|=m;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;m=l,l=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(1);if(d===null&&(s=f),i.baseState=s,i.firstBaseUpdate=c,i.lastBaseUpdate=d,t=i.shared.interleaved,t!==null){i=t;do a|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);xi|=a,e.lanes=a,e.memoizedState=f}}function Qv(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(H(191,i));i.call(r)}}}var CS=new ww.Component().refs;function Th(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:$e({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ou={isMounted:function(e){return(e=e._reactInternals)?Oi(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=wt(),i=Fr(e),o=nr(r,i);o.payload=t,n!=null&&(o.callback=n),t=Lr(e,o,i),t!==null&&(vn(t,e,i,r),zl(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=wt(),i=Fr(e),o=nr(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=Lr(e,o,i),t!==null&&(vn(t,e,i,r),zl(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=wt(),r=Fr(e),i=nr(n,r);i.tag=2,t!=null&&(i.callback=t),t=Lr(e,i,r),t!==null&&(vn(t,e,r,n),zl(t,e,r))}};function Zv(e,t,n,r,i,o,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,a):t.prototype&&t.prototype.isPureReactComponent?!is(n,r)||!is(i,o):!0}function ES(e,t,n){var r=!1,i=Vr,o=t.contextType;return typeof o=="object"&&o!==null?o=nn(o):(i=Mt(t)?gi:mt.current,r=t.contextTypes,o=(r=r!=null)?bo(e,i):Vr),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ou,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Jv(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ou.enqueueReplaceState(t,t.state,null)}function jh(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=CS,yg(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=nn(o):(o=Mt(t)?gi:mt.current,i.context=bo(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Th(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Ou.enqueueReplaceState(i,i.state,null),$c(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function sa(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(H(309));var r=n.stateNode}if(!r)throw Error(H(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(a){var l=i.refs;l===CS&&(l=i.refs={}),a===null?delete l[o]:l[o]=a},t._stringRef=o,t)}if(typeof e!="string")throw Error(H(284));if(!n._owner)throw Error(H(290,e))}return e}function ol(e,t){throw e=Object.prototype.toString.call(t),Error(H(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function ey(e){var t=e._init;return t(e._payload)}function _S(e){function t(g,v){if(e){var b=g.deletions;b===null?(g.deletions=[v],g.flags|=16):b.push(v)}}function n(g,v){if(!e)return null;for(;v!==null;)t(g,v),v=v.sibling;return null}function r(g,v){for(g=new Map;v!==null;)v.key!==null?g.set(v.key,v):g.set(v.index,v),v=v.sibling;return g}function i(g,v){return g=zr(g,v),g.index=0,g.sibling=null,g}function o(g,v,b){return g.index=b,e?(b=g.alternate,b!==null?(b=b.index,b<v?(g.flags|=2,v):b):(g.flags|=2,v)):(g.flags|=1048576,v)}function a(g){return e&&g.alternate===null&&(g.flags|=2),g}function l(g,v,b,C){return v===null||v.tag!==6?(v=kf(b,g.mode,C),v.return=g,v):(v=i(v,b),v.return=g,v)}function s(g,v,b,C){var S=b.type;return S===Qi?d(g,v,b.props.children,C,b.key):v!==null&&(v.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===br&&ey(S)===v.type)?(C=i(v,b.props),C.ref=sa(g,v,b),C.return=g,C):(C=Hl(b.type,b.key,b.props,null,g.mode,C),C.ref=sa(g,v,b),C.return=g,C)}function c(g,v,b,C){return v===null||v.tag!==4||v.stateNode.containerInfo!==b.containerInfo||v.stateNode.implementation!==b.implementation?(v=Pf(b,g.mode,C),v.return=g,v):(v=i(v,b.children||[]),v.return=g,v)}function d(g,v,b,C,S){return v===null||v.tag!==7?(v=di(b,g.mode,C,S),v.return=g,v):(v=i(v,b),v.return=g,v)}function f(g,v,b){if(typeof v=="string"&&v!==""||typeof v=="number")return v=kf(""+v,g.mode,b),v.return=g,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Ys:return b=Hl(v.type,v.key,v.props,null,g.mode,b),b.ref=sa(g,null,v),b.return=g,b;case Ki:return v=Pf(v,g.mode,b),v.return=g,v;case br:var C=v._init;return f(g,C(v._payload),b)}if(ba(v)||na(v))return v=di(v,g.mode,b,null),v.return=g,v;ol(g,v)}return null}function m(g,v,b,C){var S=v!==null?v.key:null;if(typeof b=="string"&&b!==""||typeof b=="number")return S!==null?null:l(g,v,""+b,C);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case Ys:return b.key===S?s(g,v,b,C):null;case Ki:return b.key===S?c(g,v,b,C):null;case br:return S=b._init,m(g,v,S(b._payload),C)}if(ba(b)||na(b))return S!==null?null:d(g,v,b,C,null);ol(g,b)}return null}function p(g,v,b,C,S){if(typeof C=="string"&&C!==""||typeof C=="number")return g=g.get(b)||null,l(v,g,""+C,S);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case Ys:return g=g.get(C.key===null?b:C.key)||null,s(v,g,C,S);case Ki:return g=g.get(C.key===null?b:C.key)||null,c(v,g,C,S);case br:var P=C._init;return p(g,v,b,P(C._payload),S)}if(ba(C)||na(C))return g=g.get(b)||null,d(v,g,C,S,null);ol(v,C)}return null}function h(g,v,b,C){for(var S=null,P=null,k=v,_=v=0,T=null;k!==null&&_<b.length;_++){k.index>_?(T=k,k=null):T=k.sibling;var $=m(g,k,b[_],C);if($===null){k===null&&(k=T);break}e&&k&&$.alternate===null&&t(g,k),v=o($,v,_),P===null?S=$:P.sibling=$,P=$,k=T}if(_===b.length)return n(g,k),ke&&Zr(g,_),S;if(k===null){for(;_<b.length;_++)k=f(g,b[_],C),k!==null&&(v=o(k,v,_),P===null?S=k:P.sibling=k,P=k);return ke&&Zr(g,_),S}for(k=r(g,k);_<b.length;_++)T=p(k,g,_,b[_],C),T!==null&&(e&&T.alternate!==null&&k.delete(T.key===null?_:T.key),v=o(T,v,_),P===null?S=T:P.sibling=T,P=T);return e&&k.forEach(function(I){return t(g,I)}),ke&&Zr(g,_),S}function y(g,v,b,C){var S=na(b);if(typeof S!="function")throw Error(H(150));if(b=S.call(b),b==null)throw Error(H(151));for(var P=S=null,k=v,_=v=0,T=null,$=b.next();k!==null&&!$.done;_++,$=b.next()){k.index>_?(T=k,k=null):T=k.sibling;var I=m(g,k,$.value,C);if(I===null){k===null&&(k=T);break}e&&k&&I.alternate===null&&t(g,k),v=o(I,v,_),P===null?S=I:P.sibling=I,P=I,k=T}if($.done)return n(g,k),ke&&Zr(g,_),S;if(k===null){for(;!$.done;_++,$=b.next())$=f(g,$.value,C),$!==null&&(v=o($,v,_),P===null?S=$:P.sibling=$,P=$);return ke&&Zr(g,_),S}for(k=r(g,k);!$.done;_++,$=b.next())$=p(k,g,_,$.value,C),$!==null&&(e&&$.alternate!==null&&k.delete($.key===null?_:$.key),v=o($,v,_),P===null?S=$:P.sibling=$,P=$);return e&&k.forEach(function(M){return t(g,M)}),ke&&Zr(g,_),S}function w(g,v,b,C){if(typeof b=="object"&&b!==null&&b.type===Qi&&b.key===null&&(b=b.props.children),typeof b=="object"&&b!==null){switch(b.$$typeof){case Ys:e:{for(var S=b.key,P=v;P!==null;){if(P.key===S){if(S=b.type,S===Qi){if(P.tag===7){n(g,P.sibling),v=i(P,b.props.children),v.return=g,g=v;break e}}else if(P.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===br&&ey(S)===P.type){n(g,P.sibling),v=i(P,b.props),v.ref=sa(g,P,b),v.return=g,g=v;break e}n(g,P);break}else t(g,P);P=P.sibling}b.type===Qi?(v=di(b.props.children,g.mode,C,b.key),v.return=g,g=v):(C=Hl(b.type,b.key,b.props,null,g.mode,C),C.ref=sa(g,v,b),C.return=g,g=C)}return a(g);case Ki:e:{for(P=b.key;v!==null;){if(v.key===P)if(v.tag===4&&v.stateNode.containerInfo===b.containerInfo&&v.stateNode.implementation===b.implementation){n(g,v.sibling),v=i(v,b.children||[]),v.return=g,g=v;break e}else{n(g,v);break}else t(g,v);v=v.sibling}v=Pf(b,g.mode,C),v.return=g,g=v}return a(g);case br:return P=b._init,w(g,v,P(b._payload),C)}if(ba(b))return h(g,v,b,C);if(na(b))return y(g,v,b,C);ol(g,b)}return typeof b=="string"&&b!==""||typeof b=="number"?(b=""+b,v!==null&&v.tag===6?(n(g,v.sibling),v=i(v,b),v.return=g,g=v):(n(g,v),v=kf(b,g.mode,C),v.return=g,g=v),a(g)):n(g,v)}return w}var So=_S(!0),kS=_S(!1),Ts={},Rn=Hr(Ts),ls=Hr(Ts),cs=Hr(Ts);function si(e){if(e===Ts)throw Error(H(174));return e}function xg(e,t){switch(be(cs,t),be(ls,e),be(Rn,Ts),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:lh(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=lh(t,e)}Ce(Rn),be(Rn,t)}function Co(){Ce(Rn),Ce(ls),Ce(cs)}function PS(e){si(cs.current);var t=si(Rn.current),n=lh(t,e.type);t!==n&&(be(ls,e),be(Rn,n))}function bg(e){ls.current===e&&(Ce(Rn),Ce(ls))}var Te=Hr(0);function Ic(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var bf=[];function wg(){for(var e=0;e<bf.length;e++)bf[e]._workInProgressVersionPrimary=null;bf.length=0}var Nl=pr.ReactCurrentDispatcher,wf=pr.ReactCurrentBatchConfig,yi=0,je=null,We=null,Ze=null,Mc=!1,Da=!1,us=0,bj=0;function lt(){throw Error(H(321))}function Sg(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!wn(e[n],t[n]))return!1;return!0}function Cg(e,t,n,r,i,o){if(yi=o,je=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Nl.current=e===null||e.memoizedState===null?Ej:_j,e=n(r,i),Da){o=0;do{if(Da=!1,us=0,25<=o)throw Error(H(301));o+=1,Ze=We=null,t.updateQueue=null,Nl.current=kj,e=n(r,i)}while(Da)}if(Nl.current=Ac,t=We!==null&&We.next!==null,yi=0,Ze=We=je=null,Mc=!1,t)throw Error(H(300));return e}function Eg(){var e=us!==0;return us=0,e}function On(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ze===null?je.memoizedState=Ze=e:Ze=Ze.next=e,Ze}function rn(){if(We===null){var e=je.alternate;e=e!==null?e.memoizedState:null}else e=We.next;var t=Ze===null?je.memoizedState:Ze.next;if(t!==null)Ze=t,We=e;else{if(e===null)throw Error(H(310));We=e,e={memoizedState:We.memoizedState,baseState:We.baseState,baseQueue:We.baseQueue,queue:We.queue,next:null},Ze===null?je.memoizedState=Ze=e:Ze=Ze.next=e}return Ze}function ds(e,t){return typeof t=="function"?t(e):t}function Sf(e){var t=rn(),n=t.queue;if(n===null)throw Error(H(311));n.lastRenderedReducer=e;var r=We,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var a=i.next;i.next=o.next,o.next=a}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var l=a=null,s=null,c=o;do{var d=c.lane;if((yi&d)===d)s!==null&&(s=s.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var f={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};s===null?(l=s=f,a=r):s=s.next=f,je.lanes|=d,xi|=d}c=c.next}while(c!==null&&c!==o);s===null?a=r:s.next=l,wn(r,t.memoizedState)||($t=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,je.lanes|=o,xi|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Cf(e){var t=rn(),n=t.queue;if(n===null)throw Error(H(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var a=i=i.next;do o=e(o,a.action),a=a.next;while(a!==i);wn(o,t.memoizedState)||($t=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function OS(){}function TS(e,t){var n=je,r=rn(),i=t(),o=!wn(r.memoizedState,i);if(o&&(r.memoizedState=i,$t=!0),r=r.queue,_g(IS.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||Ze!==null&&Ze.memoizedState.tag&1){if(n.flags|=2048,fs(9,$S.bind(null,n,r,i,t),void 0,null),Je===null)throw Error(H(349));yi&30||jS(n,t,i)}return i}function jS(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=je.updateQueue,t===null?(t={lastEffect:null,stores:null},je.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function $S(e,t,n,r){t.value=n,t.getSnapshot=r,MS(t)&&AS(e)}function IS(e,t,n){return n(function(){MS(t)&&AS(e)})}function MS(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!wn(e,n)}catch{return!0}}function AS(e){var t=sr(e,1);t!==null&&vn(t,e,1,-1)}function ty(e){var t=On();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ds,lastRenderedState:e},t.queue=e,e=e.dispatch=Cj.bind(null,je,e),[t.memoizedState,e]}function fs(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=je.updateQueue,t===null?(t={lastEffect:null,stores:null},je.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function DS(){return rn().memoizedState}function Bl(e,t,n,r){var i=On();je.flags|=e,i.memoizedState=fs(1|t,n,void 0,r===void 0?null:r)}function Tu(e,t,n,r){var i=rn();r=r===void 0?null:r;var o=void 0;if(We!==null){var a=We.memoizedState;if(o=a.destroy,r!==null&&Sg(r,a.deps)){i.memoizedState=fs(t,n,o,r);return}}je.flags|=e,i.memoizedState=fs(1|t,n,o,r)}function ny(e,t){return Bl(8390656,8,e,t)}function _g(e,t){return Tu(2048,8,e,t)}function LS(e,t){return Tu(4,2,e,t)}function RS(e,t){return Tu(4,4,e,t)}function FS(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function zS(e,t,n){return n=n!=null?n.concat([e]):null,Tu(4,4,FS.bind(null,t,e),n)}function kg(){}function NS(e,t){var n=rn();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Sg(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function BS(e,t){var n=rn();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Sg(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function VS(e,t,n){return yi&21?(wn(n,t)||(n=Hw(),je.lanes|=n,xi|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,$t=!0),e.memoizedState=n)}function wj(e,t){var n=ye;ye=n!==0&&4>n?n:4,e(!0);var r=wf.transition;wf.transition={};try{e(!1),t()}finally{ye=n,wf.transition=r}}function WS(){return rn().memoizedState}function Sj(e,t,n){var r=Fr(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},US(e))HS(t,n);else if(n=wS(e,t,n,r),n!==null){var i=wt();vn(n,e,r,i),GS(n,t,r)}}function Cj(e,t,n){var r=Fr(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(US(e))HS(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var a=t.lastRenderedState,l=o(a,n);if(i.hasEagerState=!0,i.eagerState=l,wn(l,a)){var s=t.interleaved;s===null?(i.next=i,vg(t)):(i.next=s.next,s.next=i),t.interleaved=i;return}}catch{}finally{}n=wS(e,t,i,r),n!==null&&(i=wt(),vn(n,e,r,i),GS(n,t,r))}}function US(e){var t=e.alternate;return e===je||t!==null&&t===je}function HS(e,t){Da=Mc=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function GS(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,rg(e,n)}}var Ac={readContext:nn,useCallback:lt,useContext:lt,useEffect:lt,useImperativeHandle:lt,useInsertionEffect:lt,useLayoutEffect:lt,useMemo:lt,useReducer:lt,useRef:lt,useState:lt,useDebugValue:lt,useDeferredValue:lt,useTransition:lt,useMutableSource:lt,useSyncExternalStore:lt,useId:lt,unstable_isNewReconciler:!1},Ej={readContext:nn,useCallback:function(e,t){return On().memoizedState=[e,t===void 0?null:t],e},useContext:nn,useEffect:ny,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Bl(4194308,4,FS.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Bl(4194308,4,e,t)},useInsertionEffect:function(e,t){return Bl(4,2,e,t)},useMemo:function(e,t){var n=On();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=On();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Sj.bind(null,je,e),[r.memoizedState,e]},useRef:function(e){var t=On();return e={current:e},t.memoizedState=e},useState:ty,useDebugValue:kg,useDeferredValue:function(e){return On().memoizedState=e},useTransition:function(){var e=ty(!1),t=e[0];return e=wj.bind(null,e[1]),On().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=je,i=On();if(ke){if(n===void 0)throw Error(H(407));n=n()}else{if(n=t(),Je===null)throw Error(H(349));yi&30||jS(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,ny(IS.bind(null,r,o,e),[e]),r.flags|=2048,fs(9,$S.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=On(),t=Je.identifierPrefix;if(ke){var n=tr,r=er;n=(r&~(1<<32-gn(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=us++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=bj++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},_j={readContext:nn,useCallback:NS,useContext:nn,useEffect:_g,useImperativeHandle:zS,useInsertionEffect:LS,useLayoutEffect:RS,useMemo:BS,useReducer:Sf,useRef:DS,useState:function(){return Sf(ds)},useDebugValue:kg,useDeferredValue:function(e){var t=rn();return VS(t,We.memoizedState,e)},useTransition:function(){var e=Sf(ds)[0],t=rn().memoizedState;return[e,t]},useMutableSource:OS,useSyncExternalStore:TS,useId:WS,unstable_isNewReconciler:!1},kj={readContext:nn,useCallback:NS,useContext:nn,useEffect:_g,useImperativeHandle:zS,useInsertionEffect:LS,useLayoutEffect:RS,useMemo:BS,useReducer:Cf,useRef:DS,useState:function(){return Cf(ds)},useDebugValue:kg,useDeferredValue:function(e){var t=rn();return We===null?t.memoizedState=e:VS(t,We.memoizedState,e)},useTransition:function(){var e=Cf(ds)[0],t=rn().memoizedState;return[e,t]},useMutableSource:OS,useSyncExternalStore:TS,useId:WS,unstable_isNewReconciler:!1};function Eo(e,t){try{var n="",r=t;do n+=eT(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function Ef(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function $h(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Pj=typeof WeakMap=="function"?WeakMap:Map;function qS(e,t,n){n=nr(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Lc||(Lc=!0,Bh=r),$h(e,t)},n}function YS(e,t,n){n=nr(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){$h(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){$h(e,t),typeof r!="function"&&(Rr===null?Rr=new Set([this]):Rr.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function ry(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Pj;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Bj.bind(null,e,t,n),t.then(e,e))}function iy(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function oy(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=nr(-1,1),t.tag=2,Lr(n,t,1))),n.lanes|=1),e)}var Oj=pr.ReactCurrentOwner,$t=!1;function xt(e,t,n,r){t.child=e===null?kS(t,null,n,r):So(t,e.child,n,r)}function ay(e,t,n,r,i){n=n.render;var o=t.ref;return po(t,i),r=Cg(e,t,n,r,o,i),n=Eg(),e!==null&&!$t?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,lr(e,t,i)):(ke&&n&&dg(t),t.flags|=1,xt(e,t,r,i),t.child)}function sy(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!Ag(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,XS(e,t,o,r,i)):(e=Hl(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var a=o.memoizedProps;if(n=n.compare,n=n!==null?n:is,n(a,r)&&e.ref===t.ref)return lr(e,t,i)}return t.flags|=1,e=zr(o,r),e.ref=t.ref,e.return=t,t.child=e}function XS(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(is(o,r)&&e.ref===t.ref)if($t=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&($t=!0);else return t.lanes=e.lanes,lr(e,t,i)}return Ih(e,t,n,r,i)}function KS(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},be(so,zt),zt|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,be(so,zt),zt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,be(so,zt),zt|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,be(so,zt),zt|=r;return xt(e,t,i,n),t.child}function QS(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ih(e,t,n,r,i){var o=Mt(n)?gi:mt.current;return o=bo(t,o),po(t,i),n=Cg(e,t,n,r,o,i),r=Eg(),e!==null&&!$t?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,lr(e,t,i)):(ke&&r&&dg(t),t.flags|=1,xt(e,t,n,i),t.child)}function ly(e,t,n,r,i){if(Mt(n)){var o=!0;kc(t)}else o=!1;if(po(t,i),t.stateNode===null)Vl(e,t),ES(t,n,r),jh(t,n,r,i),r=!0;else if(e===null){var a=t.stateNode,l=t.memoizedProps;a.props=l;var s=a.context,c=n.contextType;typeof c=="object"&&c!==null?c=nn(c):(c=Mt(n)?gi:mt.current,c=bo(t,c));var d=n.getDerivedStateFromProps,f=typeof d=="function"||typeof a.getSnapshotBeforeUpdate=="function";f||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==r||s!==c)&&Jv(t,a,r,c),wr=!1;var m=t.memoizedState;a.state=m,$c(t,r,a,i),s=t.memoizedState,l!==r||m!==s||It.current||wr?(typeof d=="function"&&(Th(t,n,d,r),s=t.memoizedState),(l=wr||Zv(t,n,l,r,m,s,c))?(f||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),a.props=r,a.state=s,a.context=c,r=l):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,SS(e,t),l=t.memoizedProps,c=t.type===t.elementType?l:dn(t.type,l),a.props=c,f=t.pendingProps,m=a.context,s=n.contextType,typeof s=="object"&&s!==null?s=nn(s):(s=Mt(n)?gi:mt.current,s=bo(t,s));var p=n.getDerivedStateFromProps;(d=typeof p=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==f||m!==s)&&Jv(t,a,r,s),wr=!1,m=t.memoizedState,a.state=m,$c(t,r,a,i);var h=t.memoizedState;l!==f||m!==h||It.current||wr?(typeof p=="function"&&(Th(t,n,p,r),h=t.memoizedState),(c=wr||Zv(t,n,c,r,m,h,s)||!1)?(d||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,h,s),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,h,s)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=h),a.props=r,a.state=h,a.context=s,r=c):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return Mh(e,t,n,r,o,i)}function Mh(e,t,n,r,i,o){QS(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return i&&qv(t,n,!1),lr(e,t,o);r=t.stateNode,Oj.current=t;var l=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=So(t,e.child,null,o),t.child=So(t,null,l,o)):xt(e,t,l,o),t.memoizedState=r.state,i&&qv(t,n,!0),t.child}function ZS(e){var t=e.stateNode;t.pendingContext?Gv(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Gv(e,t.context,!1),xg(e,t.containerInfo)}function cy(e,t,n,r,i){return wo(),pg(i),t.flags|=256,xt(e,t,n,r),t.child}var Ah={dehydrated:null,treeContext:null,retryLane:0};function Dh(e){return{baseLanes:e,cachePool:null,transitions:null}}function JS(e,t,n){var r=t.pendingProps,i=Te.current,o=!1,a=(t.flags&128)!==0,l;if((l=a)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),be(Te,i&1),e===null)return Ph(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,o?(r=t.mode,o=t.child,a={mode:"hidden",children:a},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=a):o=Iu(a,r,0,null),e=di(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Dh(n),t.memoizedState=Ah,e):Pg(t,a));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return Tj(e,t,a,r,l,i,n);if(o){o=r.fallback,a=t.mode,i=e.child,l=i.sibling;var s={mode:"hidden",children:r.children};return!(a&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=zr(i,s),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?o=zr(l,o):(o=di(o,a,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,a=e.child.memoizedState,a=a===null?Dh(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},o.memoizedState=a,o.childLanes=e.childLanes&~n,t.memoizedState=Ah,r}return o=e.child,e=o.sibling,r=zr(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Pg(e,t){return t=Iu({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function al(e,t,n,r){return r!==null&&pg(r),So(t,e.child,null,n),e=Pg(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Tj(e,t,n,r,i,o,a){if(n)return t.flags&256?(t.flags&=-257,r=Ef(Error(H(422))),al(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=Iu({mode:"visible",children:r.children},i,0,null),o=di(o,i,a,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&So(t,e.child,null,a),t.child.memoizedState=Dh(a),t.memoizedState=Ah,o);if(!(t.mode&1))return al(e,t,a,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,o=Error(H(419)),r=Ef(o,r,void 0),al(e,t,a,r)}if(l=(a&e.childLanes)!==0,$t||l){if(r=Je,r!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|a)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,sr(e,i),vn(r,e,i,-1))}return Mg(),r=Ef(Error(H(421))),al(e,t,a,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Vj.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,Bt=Dr(i.nextSibling),Ut=t,ke=!0,hn=null,e!==null&&(Zt[Jt++]=er,Zt[Jt++]=tr,Zt[Jt++]=vi,er=e.id,tr=e.overflow,vi=t),t=Pg(t,r.children),t.flags|=4096,t)}function uy(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Oh(e.return,t,n)}function _f(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function e2(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(xt(e,t,r.children,n),r=Te.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&uy(e,n,t);else if(e.tag===19)uy(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(be(Te,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Ic(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),_f(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Ic(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}_f(t,!0,n,null,o);break;case"together":_f(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Vl(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function lr(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),xi|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(H(153));if(t.child!==null){for(e=t.child,n=zr(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=zr(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function jj(e,t,n){switch(t.tag){case 3:ZS(t),wo();break;case 5:PS(t);break;case 1:Mt(t.type)&&kc(t);break;case 4:xg(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;be(Tc,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(be(Te,Te.current&1),t.flags|=128,null):n&t.child.childLanes?JS(e,t,n):(be(Te,Te.current&1),e=lr(e,t,n),e!==null?e.sibling:null);be(Te,Te.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return e2(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),be(Te,Te.current),r)break;return null;case 22:case 23:return t.lanes=0,KS(e,t,n)}return lr(e,t,n)}var t2,Lh,n2,r2;t2=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Lh=function(){};n2=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,si(Rn.current);var o=null;switch(n){case"input":i=ih(e,i),r=ih(e,r),o=[];break;case"select":i=$e({},i,{value:void 0}),r=$e({},r,{value:void 0}),o=[];break;case"textarea":i=sh(e,i),r=sh(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Ec)}ch(n,r);var a;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var l=i[c];for(a in l)l.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Qa.hasOwnProperty(c)?o||(o=[]):(o=o||[]).push(c,null));for(c in r){var s=r[c];if(l=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&s!==l&&(s!=null||l!=null))if(c==="style")if(l){for(a in l)!l.hasOwnProperty(a)||s&&s.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in s)s.hasOwnProperty(a)&&l[a]!==s[a]&&(n||(n={}),n[a]=s[a])}else n||(o||(o=[]),o.push(c,n)),n=s;else c==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,l=l?l.__html:void 0,s!=null&&l!==s&&(o=o||[]).push(c,s)):c==="children"?typeof s!="string"&&typeof s!="number"||(o=o||[]).push(c,""+s):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Qa.hasOwnProperty(c)?(s!=null&&c==="onScroll"&&we("scroll",e),o||l===s||(o=[])):(o=o||[]).push(c,s))}n&&(o=o||[]).push("style",n);var c=o;(t.updateQueue=c)&&(t.flags|=4)}};r2=function(e,t,n,r){n!==r&&(t.flags|=4)};function la(e,t){if(!ke)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ct(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function $j(e,t,n){var r=t.pendingProps;switch(fg(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ct(t),null;case 1:return Mt(t.type)&&_c(),ct(t),null;case 3:return r=t.stateNode,Co(),Ce(It),Ce(mt),wg(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(il(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,hn!==null&&(Uh(hn),hn=null))),Lh(e,t),ct(t),null;case 5:bg(t);var i=si(cs.current);if(n=t.type,e!==null&&t.stateNode!=null)n2(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(H(166));return ct(t),null}if(e=si(Rn.current),il(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[An]=t,r[ss]=o,e=(t.mode&1)!==0,n){case"dialog":we("cancel",r),we("close",r);break;case"iframe":case"object":case"embed":we("load",r);break;case"video":case"audio":for(i=0;i<Sa.length;i++)we(Sa[i],r);break;case"source":we("error",r);break;case"img":case"image":case"link":we("error",r),we("load",r);break;case"details":we("toggle",r);break;case"input":xv(r,o),we("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},we("invalid",r);break;case"textarea":wv(r,o),we("invalid",r)}ch(n,o),i=null;for(var a in o)if(o.hasOwnProperty(a)){var l=o[a];a==="children"?typeof l=="string"?r.textContent!==l&&(o.suppressHydrationWarning!==!0&&rl(r.textContent,l,e),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(o.suppressHydrationWarning!==!0&&rl(r.textContent,l,e),i=["children",""+l]):Qa.hasOwnProperty(a)&&l!=null&&a==="onScroll"&&we("scroll",r)}switch(n){case"input":Xs(r),bv(r,o,!0);break;case"textarea":Xs(r),Sv(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Ec)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=jw(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[An]=t,e[ss]=r,t2(e,t,!1,!1),t.stateNode=e;e:{switch(a=uh(n,r),n){case"dialog":we("cancel",e),we("close",e),i=r;break;case"iframe":case"object":case"embed":we("load",e),i=r;break;case"video":case"audio":for(i=0;i<Sa.length;i++)we(Sa[i],e);i=r;break;case"source":we("error",e),i=r;break;case"img":case"image":case"link":we("error",e),we("load",e),i=r;break;case"details":we("toggle",e),i=r;break;case"input":xv(e,r),i=ih(e,r),we("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=$e({},r,{value:void 0}),we("invalid",e);break;case"textarea":wv(e,r),i=sh(e,r),we("invalid",e);break;default:i=r}ch(n,i),l=i;for(o in l)if(l.hasOwnProperty(o)){var s=l[o];o==="style"?Mw(e,s):o==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&$w(e,s)):o==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&Za(e,s):typeof s=="number"&&Za(e,""+s):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Qa.hasOwnProperty(o)?s!=null&&o==="onScroll"&&we("scroll",e):s!=null&&Qm(e,o,s,a))}switch(n){case"input":Xs(e),bv(e,r,!1);break;case"textarea":Xs(e),Sv(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Br(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?lo(e,!!r.multiple,o,!1):r.defaultValue!=null&&lo(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Ec)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ct(t),null;case 6:if(e&&t.stateNode!=null)r2(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(H(166));if(n=si(cs.current),si(Rn.current),il(t)){if(r=t.stateNode,n=t.memoizedProps,r[An]=t,(o=r.nodeValue!==n)&&(e=Ut,e!==null))switch(e.tag){case 3:rl(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&rl(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[An]=t,t.stateNode=r}return ct(t),null;case 13:if(Ce(Te),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ke&&Bt!==null&&t.mode&1&&!(t.flags&128))bS(),wo(),t.flags|=98560,o=!1;else if(o=il(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(H(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(H(317));o[An]=t}else wo(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ct(t),o=!1}else hn!==null&&(Uh(hn),hn=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Te.current&1?He===0&&(He=3):Mg())),t.updateQueue!==null&&(t.flags|=4),ct(t),null);case 4:return Co(),Lh(e,t),e===null&&os(t.stateNode.containerInfo),ct(t),null;case 10:return gg(t.type._context),ct(t),null;case 17:return Mt(t.type)&&_c(),ct(t),null;case 19:if(Ce(Te),o=t.memoizedState,o===null)return ct(t),null;if(r=(t.flags&128)!==0,a=o.rendering,a===null)if(r)la(o,!1);else{if(He!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=Ic(e),a!==null){for(t.flags|=128,la(o,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,a=o.alternate,a===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=a.childLanes,o.lanes=a.lanes,o.child=a.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=a.memoizedProps,o.memoizedState=a.memoizedState,o.updateQueue=a.updateQueue,o.type=a.type,e=a.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return be(Te,Te.current&1|2),t.child}e=e.sibling}o.tail!==null&&Le()>_o&&(t.flags|=128,r=!0,la(o,!1),t.lanes=4194304)}else{if(!r)if(e=Ic(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),la(o,!0),o.tail===null&&o.tailMode==="hidden"&&!a.alternate&&!ke)return ct(t),null}else 2*Le()-o.renderingStartTime>_o&&n!==1073741824&&(t.flags|=128,r=!0,la(o,!1),t.lanes=4194304);o.isBackwards?(a.sibling=t.child,t.child=a):(n=o.last,n!==null?n.sibling=a:t.child=a,o.last=a)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Le(),t.sibling=null,n=Te.current,be(Te,r?n&1|2:n&1),t):(ct(t),null);case 22:case 23:return Ig(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?zt&1073741824&&(ct(t),t.subtreeFlags&6&&(t.flags|=8192)):ct(t),null;case 24:return null;case 25:return null}throw Error(H(156,t.tag))}function Ij(e,t){switch(fg(t),t.tag){case 1:return Mt(t.type)&&_c(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Co(),Ce(It),Ce(mt),wg(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return bg(t),null;case 13:if(Ce(Te),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(H(340));wo()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Ce(Te),null;case 4:return Co(),null;case 10:return gg(t.type._context),null;case 22:case 23:return Ig(),null;case 24:return null;default:return null}}var sl=!1,pt=!1,Mj=typeof WeakSet=="function"?WeakSet:Set,q=null;function ao(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ae(e,t,r)}else n.current=null}function Rh(e,t,n){try{n()}catch(r){Ae(e,t,r)}}var dy=!1;function Aj(e,t){if(bh=wc,e=sS(),ug(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var a=0,l=-1,s=-1,c=0,d=0,f=e,m=null;t:for(;;){for(var p;f!==n||i!==0&&f.nodeType!==3||(l=a+i),f!==o||r!==0&&f.nodeType!==3||(s=a+r),f.nodeType===3&&(a+=f.nodeValue.length),(p=f.firstChild)!==null;)m=f,f=p;for(;;){if(f===e)break t;if(m===n&&++c===i&&(l=a),m===o&&++d===r&&(s=a),(p=f.nextSibling)!==null)break;f=m,m=f.parentNode}f=p}n=l===-1||s===-1?null:{start:l,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(wh={focusedElem:e,selectionRange:n},wc=!1,q=t;q!==null;)if(t=q,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,q=e;else for(;q!==null;){t=q;try{var h=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(h!==null){var y=h.memoizedProps,w=h.memoizedState,g=t.stateNode,v=g.getSnapshotBeforeUpdate(t.elementType===t.type?y:dn(t.type,y),w);g.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var b=t.stateNode.containerInfo;b.nodeType===1?b.textContent="":b.nodeType===9&&b.documentElement&&b.removeChild(b.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(H(163))}}catch(C){Ae(t,t.return,C)}if(e=t.sibling,e!==null){e.return=t.return,q=e;break}q=t.return}return h=dy,dy=!1,h}function La(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Rh(t,n,o)}i=i.next}while(i!==r)}}function ju(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Fh(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function i2(e){var t=e.alternate;t!==null&&(e.alternate=null,i2(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[An],delete t[ss],delete t[Eh],delete t[gj],delete t[vj])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function o2(e){return e.tag===5||e.tag===3||e.tag===4}function fy(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||o2(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function zh(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ec));else if(r!==4&&(e=e.child,e!==null))for(zh(e,t,n),e=e.sibling;e!==null;)zh(e,t,n),e=e.sibling}function Nh(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Nh(e,t,n),e=e.sibling;e!==null;)Nh(e,t,n),e=e.sibling}var it=null,fn=!1;function yr(e,t,n){for(n=n.child;n!==null;)a2(e,t,n),n=n.sibling}function a2(e,t,n){if(Ln&&typeof Ln.onCommitFiberUnmount=="function")try{Ln.onCommitFiberUnmount(Su,n)}catch{}switch(n.tag){case 5:pt||ao(n,t);case 6:var r=it,i=fn;it=null,yr(e,t,n),it=r,fn=i,it!==null&&(fn?(e=it,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):it.removeChild(n.stateNode));break;case 18:it!==null&&(fn?(e=it,n=n.stateNode,e.nodeType===8?yf(e.parentNode,n):e.nodeType===1&&yf(e,n),ns(e)):yf(it,n.stateNode));break;case 4:r=it,i=fn,it=n.stateNode.containerInfo,fn=!0,yr(e,t,n),it=r,fn=i;break;case 0:case 11:case 14:case 15:if(!pt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,a=o.destroy;o=o.tag,a!==void 0&&(o&2||o&4)&&Rh(n,t,a),i=i.next}while(i!==r)}yr(e,t,n);break;case 1:if(!pt&&(ao(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Ae(n,t,l)}yr(e,t,n);break;case 21:yr(e,t,n);break;case 22:n.mode&1?(pt=(r=pt)||n.memoizedState!==null,yr(e,t,n),pt=r):yr(e,t,n);break;default:yr(e,t,n)}}function py(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Mj),t.forEach(function(r){var i=Wj.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function sn(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,a=t,l=a;e:for(;l!==null;){switch(l.tag){case 5:it=l.stateNode,fn=!1;break e;case 3:it=l.stateNode.containerInfo,fn=!0;break e;case 4:it=l.stateNode.containerInfo,fn=!0;break e}l=l.return}if(it===null)throw Error(H(160));a2(o,a,i),it=null,fn=!1;var s=i.alternate;s!==null&&(s.return=null),i.return=null}catch(c){Ae(i,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)s2(t,e),t=t.sibling}function s2(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(sn(t,e),_n(e),r&4){try{La(3,e,e.return),ju(3,e)}catch(y){Ae(e,e.return,y)}try{La(5,e,e.return)}catch(y){Ae(e,e.return,y)}}break;case 1:sn(t,e),_n(e),r&512&&n!==null&&ao(n,n.return);break;case 5:if(sn(t,e),_n(e),r&512&&n!==null&&ao(n,n.return),e.flags&32){var i=e.stateNode;try{Za(i,"")}catch(y){Ae(e,e.return,y)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,a=n!==null?n.memoizedProps:o,l=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{l==="input"&&o.type==="radio"&&o.name!=null&&Ow(i,o),uh(l,a);var c=uh(l,o);for(a=0;a<s.length;a+=2){var d=s[a],f=s[a+1];d==="style"?Mw(i,f):d==="dangerouslySetInnerHTML"?$w(i,f):d==="children"?Za(i,f):Qm(i,d,f,c)}switch(l){case"input":oh(i,o);break;case"textarea":Tw(i,o);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var p=o.value;p!=null?lo(i,!!o.multiple,p,!1):m!==!!o.multiple&&(o.defaultValue!=null?lo(i,!!o.multiple,o.defaultValue,!0):lo(i,!!o.multiple,o.multiple?[]:"",!1))}i[ss]=o}catch(y){Ae(e,e.return,y)}}break;case 6:if(sn(t,e),_n(e),r&4){if(e.stateNode===null)throw Error(H(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(y){Ae(e,e.return,y)}}break;case 3:if(sn(t,e),_n(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ns(t.containerInfo)}catch(y){Ae(e,e.return,y)}break;case 4:sn(t,e),_n(e);break;case 13:sn(t,e),_n(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(jg=Le())),r&4&&py(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(pt=(c=pt)||d,sn(t,e),pt=c):sn(t,e),_n(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!d&&e.mode&1)for(q=e,d=e.child;d!==null;){for(f=q=d;q!==null;){switch(m=q,p=m.child,m.tag){case 0:case 11:case 14:case 15:La(4,m,m.return);break;case 1:ao(m,m.return);var h=m.stateNode;if(typeof h.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,h.props=t.memoizedProps,h.state=t.memoizedState,h.componentWillUnmount()}catch(y){Ae(r,n,y)}}break;case 5:ao(m,m.return);break;case 22:if(m.memoizedState!==null){my(f);continue}}p!==null?(p.return=m,q=p):my(f)}d=d.sibling}e:for(d=null,f=e;;){if(f.tag===5){if(d===null){d=f;try{i=f.stateNode,c?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(l=f.stateNode,s=f.memoizedProps.style,a=s!=null&&s.hasOwnProperty("display")?s.display:null,l.style.display=Iw("display",a))}catch(y){Ae(e,e.return,y)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(y){Ae(e,e.return,y)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:sn(t,e),_n(e),r&4&&py(e);break;case 21:break;default:sn(t,e),_n(e)}}function _n(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(o2(n)){var r=n;break e}n=n.return}throw Error(H(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Za(i,""),r.flags&=-33);var o=fy(e);Nh(e,o,i);break;case 3:case 4:var a=r.stateNode.containerInfo,l=fy(e);zh(e,l,a);break;default:throw Error(H(161))}}catch(s){Ae(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Dj(e,t,n){q=e,l2(e)}function l2(e,t,n){for(var r=(e.mode&1)!==0;q!==null;){var i=q,o=i.child;if(i.tag===22&&r){var a=i.memoizedState!==null||sl;if(!a){var l=i.alternate,s=l!==null&&l.memoizedState!==null||pt;l=sl;var c=pt;if(sl=a,(pt=s)&&!c)for(q=i;q!==null;)a=q,s=a.child,a.tag===22&&a.memoizedState!==null?gy(i):s!==null?(s.return=a,q=s):gy(i);for(;o!==null;)q=o,l2(o),o=o.sibling;q=i,sl=l,pt=c}hy(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,q=o):hy(e)}}function hy(e){for(;q!==null;){var t=q;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:pt||ju(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!pt)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:dn(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Qv(t,o,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Qv(t,a,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&ns(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(H(163))}pt||t.flags&512&&Fh(t)}catch(m){Ae(t,t.return,m)}}if(t===e){q=null;break}if(n=t.sibling,n!==null){n.return=t.return,q=n;break}q=t.return}}function my(e){for(;q!==null;){var t=q;if(t===e){q=null;break}var n=t.sibling;if(n!==null){n.return=t.return,q=n;break}q=t.return}}function gy(e){for(;q!==null;){var t=q;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{ju(4,t)}catch(s){Ae(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(s){Ae(t,i,s)}}var o=t.return;try{Fh(t)}catch(s){Ae(t,o,s)}break;case 5:var a=t.return;try{Fh(t)}catch(s){Ae(t,a,s)}}}catch(s){Ae(t,t.return,s)}if(t===e){q=null;break}var l=t.sibling;if(l!==null){l.return=t.return,q=l;break}q=t.return}}var Lj=Math.ceil,Dc=pr.ReactCurrentDispatcher,Og=pr.ReactCurrentOwner,tn=pr.ReactCurrentBatchConfig,ue=0,Je=null,Be=null,at=0,zt=0,so=Hr(0),He=0,ps=null,xi=0,$u=0,Tg=0,Ra=null,jt=null,jg=0,_o=1/0,qn=null,Lc=!1,Bh=null,Rr=null,ll=!1,Pr=null,Rc=0,Fa=0,Vh=null,Wl=-1,Ul=0;function wt(){return ue&6?Le():Wl!==-1?Wl:Wl=Le()}function Fr(e){return e.mode&1?ue&2&&at!==0?at&-at:xj.transition!==null?(Ul===0&&(Ul=Hw()),Ul):(e=ye,e!==0||(e=window.event,e=e===void 0?16:Zw(e.type)),e):1}function vn(e,t,n,r){if(50<Fa)throw Fa=0,Vh=null,Error(H(185));ks(e,n,r),(!(ue&2)||e!==Je)&&(e===Je&&(!(ue&2)&&($u|=n),He===4&&Cr(e,at)),At(e,r),n===1&&ue===0&&!(t.mode&1)&&(_o=Le()+500,Pu&&Gr()))}function At(e,t){var n=e.callbackNode;xT(e,t);var r=bc(e,e===Je?at:0);if(r===0)n!==null&&_v(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&_v(n),t===1)e.tag===0?yj(vy.bind(null,e)):vS(vy.bind(null,e)),hj(function(){!(ue&6)&&Gr()}),n=null;else{switch(Gw(r)){case 1:n=ng;break;case 4:n=Ww;break;case 16:n=xc;break;case 536870912:n=Uw;break;default:n=xc}n=g2(n,c2.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function c2(e,t){if(Wl=-1,Ul=0,ue&6)throw Error(H(327));var n=e.callbackNode;if(ho()&&e.callbackNode!==n)return null;var r=bc(e,e===Je?at:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Fc(e,r);else{t=r;var i=ue;ue|=2;var o=d2();(Je!==e||at!==t)&&(qn=null,_o=Le()+500,ui(e,t));do try{zj();break}catch(l){u2(e,l)}while(1);mg(),Dc.current=o,ue=i,Be!==null?t=0:(Je=null,at=0,t=He)}if(t!==0){if(t===2&&(i=mh(e),i!==0&&(r=i,t=Wh(e,i))),t===1)throw n=ps,ui(e,0),Cr(e,r),At(e,Le()),n;if(t===6)Cr(e,r);else{if(i=e.current.alternate,!(r&30)&&!Rj(i)&&(t=Fc(e,r),t===2&&(o=mh(e),o!==0&&(r=o,t=Wh(e,o))),t===1))throw n=ps,ui(e,0),Cr(e,r),At(e,Le()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(H(345));case 2:Jr(e,jt,qn);break;case 3:if(Cr(e,r),(r&130023424)===r&&(t=jg+500-Le(),10<t)){if(bc(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){wt(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Ch(Jr.bind(null,e,jt,qn),t);break}Jr(e,jt,qn);break;case 4:if(Cr(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var a=31-gn(r);o=1<<a,a=t[a],a>i&&(i=a),r&=~o}if(r=i,r=Le()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Lj(r/1960))-r,10<r){e.timeoutHandle=Ch(Jr.bind(null,e,jt,qn),r);break}Jr(e,jt,qn);break;case 5:Jr(e,jt,qn);break;default:throw Error(H(329))}}}return At(e,Le()),e.callbackNode===n?c2.bind(null,e):null}function Wh(e,t){var n=Ra;return e.current.memoizedState.isDehydrated&&(ui(e,t).flags|=256),e=Fc(e,t),e!==2&&(t=jt,jt=n,t!==null&&Uh(t)),e}function Uh(e){jt===null?jt=e:jt.push.apply(jt,e)}function Rj(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!wn(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Cr(e,t){for(t&=~Tg,t&=~$u,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-gn(t),r=1<<n;e[n]=-1,t&=~r}}function vy(e){if(ue&6)throw Error(H(327));ho();var t=bc(e,0);if(!(t&1))return At(e,Le()),null;var n=Fc(e,t);if(e.tag!==0&&n===2){var r=mh(e);r!==0&&(t=r,n=Wh(e,r))}if(n===1)throw n=ps,ui(e,0),Cr(e,t),At(e,Le()),n;if(n===6)throw Error(H(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Jr(e,jt,qn),At(e,Le()),null}function $g(e,t){var n=ue;ue|=1;try{return e(t)}finally{ue=n,ue===0&&(_o=Le()+500,Pu&&Gr())}}function bi(e){Pr!==null&&Pr.tag===0&&!(ue&6)&&ho();var t=ue;ue|=1;var n=tn.transition,r=ye;try{if(tn.transition=null,ye=1,e)return e()}finally{ye=r,tn.transition=n,ue=t,!(ue&6)&&Gr()}}function Ig(){zt=so.current,Ce(so)}function ui(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,pj(n)),Be!==null)for(n=Be.return;n!==null;){var r=n;switch(fg(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&_c();break;case 3:Co(),Ce(It),Ce(mt),wg();break;case 5:bg(r);break;case 4:Co();break;case 13:Ce(Te);break;case 19:Ce(Te);break;case 10:gg(r.type._context);break;case 22:case 23:Ig()}n=n.return}if(Je=e,Be=e=zr(e.current,null),at=zt=t,He=0,ps=null,Tg=$u=xi=0,jt=Ra=null,ai!==null){for(t=0;t<ai.length;t++)if(n=ai[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var a=o.next;o.next=i,r.next=a}n.pending=r}ai=null}return e}function u2(e,t){do{var n=Be;try{if(mg(),Nl.current=Ac,Mc){for(var r=je.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Mc=!1}if(yi=0,Ze=We=je=null,Da=!1,us=0,Og.current=null,n===null||n.return===null){He=1,ps=t,Be=null;break}e:{var o=e,a=n.return,l=n,s=t;if(t=at,l.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var c=s,d=l,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var m=d.alternate;m?(d.updateQueue=m.updateQueue,d.memoizedState=m.memoizedState,d.lanes=m.lanes):(d.updateQueue=null,d.memoizedState=null)}var p=iy(a);if(p!==null){p.flags&=-257,oy(p,a,l,o,t),p.mode&1&&ry(o,c,t),t=p,s=c;var h=t.updateQueue;if(h===null){var y=new Set;y.add(s),t.updateQueue=y}else h.add(s);break e}else{if(!(t&1)){ry(o,c,t),Mg();break e}s=Error(H(426))}}else if(ke&&l.mode&1){var w=iy(a);if(w!==null){!(w.flags&65536)&&(w.flags|=256),oy(w,a,l,o,t),pg(Eo(s,l));break e}}o=s=Eo(s,l),He!==4&&(He=2),Ra===null?Ra=[o]:Ra.push(o),o=a;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var g=qS(o,s,t);Kv(o,g);break e;case 1:l=s;var v=o.type,b=o.stateNode;if(!(o.flags&128)&&(typeof v.getDerivedStateFromError=="function"||b!==null&&typeof b.componentDidCatch=="function"&&(Rr===null||!Rr.has(b)))){o.flags|=65536,t&=-t,o.lanes|=t;var C=YS(o,l,t);Kv(o,C);break e}}o=o.return}while(o!==null)}p2(n)}catch(S){t=S,Be===n&&n!==null&&(Be=n=n.return);continue}break}while(1)}function d2(){var e=Dc.current;return Dc.current=Ac,e===null?Ac:e}function Mg(){(He===0||He===3||He===2)&&(He=4),Je===null||!(xi&268435455)&&!($u&268435455)||Cr(Je,at)}function Fc(e,t){var n=ue;ue|=2;var r=d2();(Je!==e||at!==t)&&(qn=null,ui(e,t));do try{Fj();break}catch(i){u2(e,i)}while(1);if(mg(),ue=n,Dc.current=r,Be!==null)throw Error(H(261));return Je=null,at=0,He}function Fj(){for(;Be!==null;)f2(Be)}function zj(){for(;Be!==null&&!uT();)f2(Be)}function f2(e){var t=m2(e.alternate,e,zt);e.memoizedProps=e.pendingProps,t===null?p2(e):Be=t,Og.current=null}function p2(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Ij(n,t),n!==null){n.flags&=32767,Be=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{He=6,Be=null;return}}else if(n=$j(n,t,zt),n!==null){Be=n;return}if(t=t.sibling,t!==null){Be=t;return}Be=t=e}while(t!==null);He===0&&(He=5)}function Jr(e,t,n){var r=ye,i=tn.transition;try{tn.transition=null,ye=1,Nj(e,t,n,r)}finally{tn.transition=i,ye=r}return null}function Nj(e,t,n,r){do ho();while(Pr!==null);if(ue&6)throw Error(H(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(H(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(bT(e,o),e===Je&&(Be=Je=null,at=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ll||(ll=!0,g2(xc,function(){return ho(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=tn.transition,tn.transition=null;var a=ye;ye=1;var l=ue;ue|=4,Og.current=null,Aj(e,n),s2(n,e),aj(wh),wc=!!bh,wh=bh=null,e.current=n,Dj(n),dT(),ue=l,ye=a,tn.transition=o}else e.current=n;if(ll&&(ll=!1,Pr=e,Rc=i),o=e.pendingLanes,o===0&&(Rr=null),hT(n.stateNode),At(e,Le()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Lc)throw Lc=!1,e=Bh,Bh=null,e;return Rc&1&&e.tag!==0&&ho(),o=e.pendingLanes,o&1?e===Vh?Fa++:(Fa=0,Vh=e):Fa=0,Gr(),null}function ho(){if(Pr!==null){var e=Gw(Rc),t=tn.transition,n=ye;try{if(tn.transition=null,ye=16>e?16:e,Pr===null)var r=!1;else{if(e=Pr,Pr=null,Rc=0,ue&6)throw Error(H(331));var i=ue;for(ue|=4,q=e.current;q!==null;){var o=q,a=o.child;if(q.flags&16){var l=o.deletions;if(l!==null){for(var s=0;s<l.length;s++){var c=l[s];for(q=c;q!==null;){var d=q;switch(d.tag){case 0:case 11:case 15:La(8,d,o)}var f=d.child;if(f!==null)f.return=d,q=f;else for(;q!==null;){d=q;var m=d.sibling,p=d.return;if(i2(d),d===c){q=null;break}if(m!==null){m.return=p,q=m;break}q=p}}}var h=o.alternate;if(h!==null){var y=h.child;if(y!==null){h.child=null;do{var w=y.sibling;y.sibling=null,y=w}while(y!==null)}}q=o}}if(o.subtreeFlags&2064&&a!==null)a.return=o,q=a;else e:for(;q!==null;){if(o=q,o.flags&2048)switch(o.tag){case 0:case 11:case 15:La(9,o,o.return)}var g=o.sibling;if(g!==null){g.return=o.return,q=g;break e}q=o.return}}var v=e.current;for(q=v;q!==null;){a=q;var b=a.child;if(a.subtreeFlags&2064&&b!==null)b.return=a,q=b;else e:for(a=v;q!==null;){if(l=q,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:ju(9,l)}}catch(S){Ae(l,l.return,S)}if(l===a){q=null;break e}var C=l.sibling;if(C!==null){C.return=l.return,q=C;break e}q=l.return}}if(ue=i,Gr(),Ln&&typeof Ln.onPostCommitFiberRoot=="function")try{Ln.onPostCommitFiberRoot(Su,e)}catch{}r=!0}return r}finally{ye=n,tn.transition=t}}return!1}function yy(e,t,n){t=Eo(n,t),t=qS(e,t,1),e=Lr(e,t,1),t=wt(),e!==null&&(ks(e,1,t),At(e,t))}function Ae(e,t,n){if(e.tag===3)yy(e,e,n);else for(;t!==null;){if(t.tag===3){yy(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Rr===null||!Rr.has(r))){e=Eo(n,e),e=YS(t,e,1),t=Lr(t,e,1),e=wt(),t!==null&&(ks(t,1,e),At(t,e));break}}t=t.return}}function Bj(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=wt(),e.pingedLanes|=e.suspendedLanes&n,Je===e&&(at&n)===n&&(He===4||He===3&&(at&130023424)===at&&500>Le()-jg?ui(e,0):Tg|=n),At(e,t)}function h2(e,t){t===0&&(e.mode&1?(t=Zs,Zs<<=1,!(Zs&130023424)&&(Zs=4194304)):t=1);var n=wt();e=sr(e,t),e!==null&&(ks(e,t,n),At(e,n))}function Vj(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),h2(e,n)}function Wj(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(H(314))}r!==null&&r.delete(t),h2(e,n)}var m2;m2=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||It.current)$t=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return $t=!1,jj(e,t,n);$t=!!(e.flags&131072)}else $t=!1,ke&&t.flags&1048576&&yS(t,Oc,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Vl(e,t),e=t.pendingProps;var i=bo(t,mt.current);po(t,n),i=Cg(null,t,r,e,i,n);var o=Eg();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Mt(r)?(o=!0,kc(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,yg(t),i.updater=Ou,t.stateNode=i,i._reactInternals=t,jh(t,r,e,n),t=Mh(null,t,r,!0,o,n)):(t.tag=0,ke&&o&&dg(t),xt(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Vl(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Hj(r),e=dn(r,e),i){case 0:t=Ih(null,t,r,e,n);break e;case 1:t=ly(null,t,r,e,n);break e;case 11:t=ay(null,t,r,e,n);break e;case 14:t=sy(null,t,r,dn(r.type,e),n);break e}throw Error(H(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:dn(r,i),Ih(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:dn(r,i),ly(e,t,r,i,n);case 3:e:{if(ZS(t),e===null)throw Error(H(387));r=t.pendingProps,o=t.memoizedState,i=o.element,SS(e,t),$c(t,r,null,n);var a=t.memoizedState;if(r=a.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Eo(Error(H(423)),t),t=cy(e,t,r,n,i);break e}else if(r!==i){i=Eo(Error(H(424)),t),t=cy(e,t,r,n,i);break e}else for(Bt=Dr(t.stateNode.containerInfo.firstChild),Ut=t,ke=!0,hn=null,n=kS(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(wo(),r===i){t=lr(e,t,n);break e}xt(e,t,r,n)}t=t.child}return t;case 5:return PS(t),e===null&&Ph(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,a=i.children,Sh(r,i)?a=null:o!==null&&Sh(r,o)&&(t.flags|=32),QS(e,t),xt(e,t,a,n),t.child;case 6:return e===null&&Ph(t),null;case 13:return JS(e,t,n);case 4:return xg(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=So(t,null,r,n):xt(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:dn(r,i),ay(e,t,r,i,n);case 7:return xt(e,t,t.pendingProps,n),t.child;case 8:return xt(e,t,t.pendingProps.children,n),t.child;case 12:return xt(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,a=i.value,be(Tc,r._currentValue),r._currentValue=a,o!==null)if(wn(o.value,a)){if(o.children===i.children&&!It.current){t=lr(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var l=o.dependencies;if(l!==null){a=o.child;for(var s=l.firstContext;s!==null;){if(s.context===r){if(o.tag===1){s=nr(-1,n&-n),s.tag=2;var c=o.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?s.next=s:(s.next=d.next,d.next=s),c.pending=s}}o.lanes|=n,s=o.alternate,s!==null&&(s.lanes|=n),Oh(o.return,n,t),l.lanes|=n;break}s=s.next}}else if(o.tag===10)a=o.type===t.type?null:o.child;else if(o.tag===18){if(a=o.return,a===null)throw Error(H(341));a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),Oh(a,n,t),a=o.sibling}else a=o.child;if(a!==null)a.return=o;else for(a=o;a!==null;){if(a===t){a=null;break}if(o=a.sibling,o!==null){o.return=a.return,a=o;break}a=a.return}o=a}xt(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,po(t,n),i=nn(i),r=r(i),t.flags|=1,xt(e,t,r,n),t.child;case 14:return r=t.type,i=dn(r,t.pendingProps),i=dn(r.type,i),sy(e,t,r,i,n);case 15:return XS(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:dn(r,i),Vl(e,t),t.tag=1,Mt(r)?(e=!0,kc(t)):e=!1,po(t,n),ES(t,r,i),jh(t,r,i,n),Mh(null,t,r,!0,e,n);case 19:return e2(e,t,n);case 22:return KS(e,t,n)}throw Error(H(156,t.tag))};function g2(e,t){return Vw(e,t)}function Uj(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function en(e,t,n,r){return new Uj(e,t,n,r)}function Ag(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Hj(e){if(typeof e=="function")return Ag(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Jm)return 11;if(e===eg)return 14}return 2}function zr(e,t){var n=e.alternate;return n===null?(n=en(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Hl(e,t,n,r,i,o){var a=2;if(r=e,typeof e=="function")Ag(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case Qi:return di(n.children,i,o,t);case Zm:a=8,i|=8;break;case eh:return e=en(12,n,t,i|2),e.elementType=eh,e.lanes=o,e;case th:return e=en(13,n,t,i),e.elementType=th,e.lanes=o,e;case nh:return e=en(19,n,t,i),e.elementType=nh,e.lanes=o,e;case _w:return Iu(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Cw:a=10;break e;case Ew:a=9;break e;case Jm:a=11;break e;case eg:a=14;break e;case br:a=16,r=null;break e}throw Error(H(130,e==null?e:typeof e,""))}return t=en(a,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function di(e,t,n,r){return e=en(7,e,r,t),e.lanes=n,e}function Iu(e,t,n,r){return e=en(22,e,r,t),e.elementType=_w,e.lanes=n,e.stateNode={isHidden:!1},e}function kf(e,t,n){return e=en(6,e,null,t),e.lanes=n,e}function Pf(e,t,n){return t=en(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Gj(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=sf(0),this.expirationTimes=sf(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=sf(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Dg(e,t,n,r,i,o,a,l,s){return e=new Gj(e,t,n,l,s),t===1?(t=1,o===!0&&(t|=8)):t=0,o=en(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},yg(o),e}function qj(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ki,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function v2(e){if(!e)return Vr;e=e._reactInternals;e:{if(Oi(e)!==e||e.tag!==1)throw Error(H(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Mt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(H(171))}if(e.tag===1){var n=e.type;if(Mt(n))return gS(e,n,t)}return t}function y2(e,t,n,r,i,o,a,l,s){return e=Dg(n,r,!0,e,i,o,a,l,s),e.context=v2(null),n=e.current,r=wt(),i=Fr(n),o=nr(r,i),o.callback=t??null,Lr(n,o,i),e.current.lanes=i,ks(e,i,r),At(e,r),e}function Mu(e,t,n,r){var i=t.current,o=wt(),a=Fr(i);return n=v2(n),t.context===null?t.context=n:t.pendingContext=n,t=nr(o,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Lr(i,t,a),e!==null&&(vn(e,i,a,o),zl(e,i,a)),a}function zc(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function xy(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Lg(e,t){xy(e,t),(e=e.alternate)&&xy(e,t)}function Yj(){return null}var x2=typeof reportError=="function"?reportError:function(e){console.error(e)};function Rg(e){this._internalRoot=e}Au.prototype.render=Rg.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(H(409));Mu(e,t,null,null)};Au.prototype.unmount=Rg.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;bi(function(){Mu(null,e,null,null)}),t[ar]=null}};function Au(e){this._internalRoot=e}Au.prototype.unstable_scheduleHydration=function(e){if(e){var t=Xw();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Sr.length&&t!==0&&t<Sr[n].priority;n++);Sr.splice(n,0,e),n===0&&Qw(e)}};function Fg(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Du(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function by(){}function Xj(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var c=zc(a);o.call(c)}}var a=y2(t,r,e,0,null,!1,!1,"",by);return e._reactRootContainer=a,e[ar]=a.current,os(e.nodeType===8?e.parentNode:e),bi(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var c=zc(s);l.call(c)}}var s=Dg(e,0,!1,null,null,!1,!1,"",by);return e._reactRootContainer=s,e[ar]=s.current,os(e.nodeType===8?e.parentNode:e),bi(function(){Mu(t,s,n,r)}),s}function Lu(e,t,n,r,i){var o=n._reactRootContainer;if(o){var a=o;if(typeof i=="function"){var l=i;i=function(){var s=zc(a);l.call(s)}}Mu(t,a,e,i)}else a=Xj(n,t,e,i,r);return zc(a)}qw=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=wa(t.pendingLanes);n!==0&&(rg(t,n|1),At(t,Le()),!(ue&6)&&(_o=Le()+500,Gr()))}break;case 13:bi(function(){var r=sr(e,1);if(r!==null){var i=wt();vn(r,e,1,i)}}),Lg(e,1)}};ig=function(e){if(e.tag===13){var t=sr(e,134217728);if(t!==null){var n=wt();vn(t,e,134217728,n)}Lg(e,134217728)}};Yw=function(e){if(e.tag===13){var t=Fr(e),n=sr(e,t);if(n!==null){var r=wt();vn(n,e,t,r)}Lg(e,t)}};Xw=function(){return ye};Kw=function(e,t){var n=ye;try{return ye=e,t()}finally{ye=n}};fh=function(e,t,n){switch(t){case"input":if(oh(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=ku(r);if(!i)throw Error(H(90));Pw(r),oh(r,i)}}}break;case"textarea":Tw(e,n);break;case"select":t=n.value,t!=null&&lo(e,!!n.multiple,t,!1)}};Lw=$g;Rw=bi;var Kj={usingClientEntryPoint:!1,Events:[Os,to,ku,Aw,Dw,$g]},ca={findFiberByHostInstance:oi,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Qj={bundleType:ca.bundleType,version:ca.version,rendererPackageName:ca.rendererPackageName,rendererConfig:ca.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:pr.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Nw(e),e===null?null:e.stateNode},findFiberByHostInstance:ca.findFiberByHostInstance||Yj,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var cl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!cl.isDisabled&&cl.supportsFiber)try{Su=cl.inject(Qj),Ln=cl}catch{}}Yt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Kj;Yt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Fg(t))throw Error(H(200));return qj(e,t,null,n)};Yt.createRoot=function(e,t){if(!Fg(e))throw Error(H(299));var n=!1,r="",i=x2;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Dg(e,1,!1,null,null,n,!1,r,i),e[ar]=t.current,os(e.nodeType===8?e.parentNode:e),new Rg(t)};Yt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(H(188)):(e=Object.keys(e).join(","),Error(H(268,e)));return e=Nw(t),e=e===null?null:e.stateNode,e};Yt.flushSync=function(e){return bi(e)};Yt.hydrate=function(e,t,n){if(!Du(t))throw Error(H(200));return Lu(null,e,t,!0,n)};Yt.hydrateRoot=function(e,t,n){if(!Fg(e))throw Error(H(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",a=x2;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=y2(t,null,e,1,n??null,i,!1,o,a),e[ar]=t.current,os(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Au(t)};Yt.render=function(e,t,n){if(!Du(t))throw Error(H(200));return Lu(null,e,t,!1,n)};Yt.unmountComponentAtNode=function(e){if(!Du(e))throw Error(H(40));return e._reactRootContainer?(bi(function(){Lu(null,null,e,!1,function(){e._reactRootContainer=null,e[ar]=null})}),!0):!1};Yt.unstable_batchedUpdates=$g;Yt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Du(n))throw Error(H(200));if(e==null||e._reactInternals===void 0)throw Error(H(38));return Lu(e,t,n,!1,r)};Yt.version="18.2.0-next-9e3b772b8-20220608";function b2(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(b2)}catch(e){console.error(e)}}b2(),yw.exports=Yt;var Ru=yw.exports,wy=Ru;Zp.createRoot=wy.createRoot,Zp.hydrateRoot=wy.hydrateRoot;var ht=function(){return ht=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},ht.apply(this,arguments)};function ko(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,o;r<i;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))}function Zj(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var Jj=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|popover|popoverTarget|popoverTargetAction|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,e$=Zj(function(e){return Jj.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),Se="-ms-",za="-moz-",fe="-webkit-",w2="comm",Fu="rule",zg="decl",t$="@import",n$="@namespace",S2="@keyframes",r$="@layer",C2=Math.abs,Ng=String.fromCharCode,Hh=Object.assign;function i$(e,t){return Ue(e,0)^45?(((t<<2^Ue(e,0))<<2^Ue(e,1))<<2^Ue(e,2))<<2^Ue(e,3):0}function E2(e){return e.trim()}function Yn(e,t){return(e=t.exec(e))?e[0]:e}function re(e,t,n){return e.replace(t,n)}function Gl(e,t,n){return e.indexOf(t,n)}function Ue(e,t){return e.charCodeAt(t)|0}function wi(e,t,n){return e.slice(t,n)}function pn(e){return e.length}function _2(e){return e.length}function Ca(e,t){return t.push(e),e}function o$(e,t){return e.map(t).join("")}function Sy(e,t){return e.filter(function(n){return!Yn(n,t)})}var zu=1,Po=1,k2=0,on=0,ze=0,Wo="";function Nu(e,t,n,r,i,o,a,l){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:zu,column:Po,length:a,return:"",siblings:l}}function xr(e,t){return Hh(Nu("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function Di(e){for(;e.root;)e=xr(e.root,{children:[e]});Ca(e,e.siblings)}function a$(){return ze}function s$(){return ze=on>0?Ue(Wo,--on):0,Po--,ze===10&&(Po=1,zu--),ze}function yn(){return ze=on<k2?Ue(Wo,on++):0,Po++,ze===10&&(Po=1,zu++),ze}function Or(){return Ue(Wo,on)}function ql(){return on}function Bu(e,t){return wi(Wo,e,t)}function hs(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function l$(e){return zu=Po=1,k2=pn(Wo=e),on=0,[]}function c$(e){return Wo="",e}function Of(e){return E2(Bu(on-1,Gh(e===91?e+2:e===40?e+1:e)))}function u$(e){for(;(ze=Or())&&ze<33;)yn();return hs(e)>2||hs(ze)>3?"":" "}function d$(e,t){for(;--t&&yn()&&!(ze<48||ze>102||ze>57&&ze<65||ze>70&&ze<97););return Bu(e,ql()+(t<6&&Or()==32&&yn()==32))}function Gh(e){for(;yn();)switch(ze){case e:return on;case 34:case 39:e!==34&&e!==39&&Gh(ze);break;case 40:e===41&&Gh(e);break;case 92:yn();break}return on}function f$(e,t){for(;yn()&&e+ze!==47+10;)if(e+ze===42+42&&Or()===47)break;return"/*"+Bu(t,on-1)+"*"+Ng(e===47?e:yn())}function p$(e){for(;!hs(Or());)yn();return Bu(e,on)}function h$(e){return c$(Yl("",null,null,null,[""],e=l$(e),0,[0],e))}function Yl(e,t,n,r,i,o,a,l,s){for(var c=0,d=0,f=a,m=0,p=0,h=0,y=1,w=1,g=1,v=0,b="",C=i,S=o,P=r,k=b;w;)switch(h=v,v=yn()){case 40:if(h!=108&&Ue(k,f-1)==58){Gl(k+=re(Of(v),"&","&\f"),"&\f",C2(c?l[c-1]:0))!=-1&&(g=-1);break}case 34:case 39:case 91:k+=Of(v);break;case 9:case 10:case 13:case 32:k+=u$(h);break;case 92:k+=d$(ql()-1,7);continue;case 47:switch(Or()){case 42:case 47:Ca(m$(f$(yn(),ql()),t,n,s),s),(hs(h||1)==5||hs(Or()||1)==5)&&pn(k)&&wi(k,-1,void 0)!==" "&&(k+=" ");break;default:k+="/"}break;case 123*y:l[c++]=pn(k)*g;case 125*y:case 59:case 0:switch(v){case 0:case 125:w=0;case 59+d:g==-1&&(k=re(k,/\f/g,"")),p>0&&(pn(k)-f||y===0&&h===47)&&Ca(p>32?Ey(k+";",r,n,f-1,s):Ey(re(k," ","")+";",r,n,f-2,s),s);break;case 59:k+=";";default:if(Ca(P=Cy(k,t,n,c,d,i,l,b,C=[],S=[],f,o),o),v===123)if(d===0)Yl(k,t,P,P,C,o,f,l,S);else{switch(m){case 99:if(Ue(k,3)===110)break;case 108:if(Ue(k,2)===97)break;default:d=0;case 100:case 109:case 115:}d?Yl(e,P,P,r&&Ca(Cy(e,P,P,0,0,i,l,b,i,C=[],f,S),S),i,S,f,l,r?C:S):Yl(k,P,P,P,[""],S,0,l,S)}}c=d=p=0,y=g=1,b=k="",f=a;break;case 58:f=1+pn(k),p=h;default:if(y<1){if(v==123)--y;else if(v==125&&y++==0&&s$()==125)continue}switch(k+=Ng(v),v*y){case 38:g=d>0?1:(k+="\f",-1);break;case 44:l[c++]=(pn(k)-1)*g,g=1;break;case 64:Or()===45&&(k+=Of(yn())),m=Or(),d=f=pn(b=k+=p$(ql())),v++;break;case 45:h===45&&pn(k)==2&&(y=0)}}return o}function Cy(e,t,n,r,i,o,a,l,s,c,d,f){for(var m=i-1,p=i===0?o:[""],h=_2(p),y=0,w=0,g=0;y<r;++y)for(var v=0,b=wi(e,m+1,m=C2(w=a[y])),C=e;v<h;++v)(C=E2(w>0?p[v]+" "+b:re(b,/&\f/g,p[v])))&&(s[g++]=C);return Nu(e,t,n,i===0?Fu:l,s,c,d,f)}function m$(e,t,n,r){return Nu(e,t,n,w2,Ng(a$()),wi(e,2,-2),0,r)}function Ey(e,t,n,r,i){return Nu(e,t,n,zg,wi(e,0,r),wi(e,r+1,-1),r,i)}function P2(e,t,n){switch(i$(e,t)){case 5103:return fe+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return fe+e+e;case 4855:return fe+e.replace("add","source-over").replace("substract","source-out").replace("intersect","source-in").replace("exclude","xor")+e;case 4789:return za+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return fe+e+za+e+Se+e+e;case 5936:switch(Ue(e,t+11)){case 114:return fe+e+Se+re(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return fe+e+Se+re(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return fe+e+Se+re(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return fe+e+Se+e+e;case 6165:return fe+e+Se+"flex-"+e+e;case 5187:return fe+e+re(e,/(\w+).+(:[^]+)/,fe+"box-$1$2"+Se+"flex-$1$2")+e;case 5443:return fe+e+Se+"flex-item-"+re(e,/flex-|-self/g,"")+(Yn(e,/flex-|baseline/)?"":Se+"grid-row-"+re(e,/flex-|-self/g,""))+e;case 4675:return fe+e+Se+"flex-line-pack"+re(e,/align-content|flex-|-self/g,"")+e;case 5548:return fe+e+Se+re(e,"shrink","negative")+e;case 5292:return fe+e+Se+re(e,"basis","preferred-size")+e;case 6060:return fe+"box-"+re(e,"-grow","")+fe+e+Se+re(e,"grow","positive")+e;case 4554:return fe+re(e,/([^-])(transform)/g,"$1"+fe+"$2")+e;case 6187:return re(re(re(e,/(zoom-|grab)/,fe+"$1"),/(image-set)/,fe+"$1"),e,"")+e;case 5495:case 3959:return re(e,/(image-set\([^]*)/,fe+"$1$`$1");case 4968:return re(re(e,/(.+:)(flex-)?(.*)/,fe+"box-pack:$3"+Se+"flex-pack:$3"),/space-between/,"justify")+fe+e+e;case 4200:if(!Yn(e,/flex-|baseline/))return Se+"grid-column-align"+wi(e,t)+e;break;case 2592:case 3360:return Se+re(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,i){return t=i,Yn(r.props,/grid-\w+-end/)})?~Gl(e+(n=n[t].value),"span",0)?e:Se+re(e,"-start","")+e+Se+"grid-row-span:"+(~Gl(n,"span",0)?Yn(n,/\d+/):+Yn(n,/\d+/)-+Yn(e,/\d+/))+";":Se+re(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return Yn(r.props,/grid-\w+-start/)})?e:Se+re(re(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return re(e,/(.+)-inline(.+)/,fe+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(pn(e)-1-t>6)switch(Ue(e,t+1)){case 109:if(Ue(e,t+4)!==45)break;case 102:return re(e,/(.+:)(.+)-([^]+)/,"$1"+fe+"$2-$3$1"+za+(Ue(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Gl(e,"stretch",0)?P2(re(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return re(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,o,a,l,s,c){return Se+i+":"+o+c+(a?Se+i+"-span:"+(l?s:+s-+o)+c:"")+e});case 4949:if(Ue(e,t+6)===121)return re(e,":",":"+fe)+e;break;case 6444:switch(Ue(e,Ue(e,14)===45?18:11)){case 120:return re(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+fe+(Ue(e,14)===45?"inline-":"")+"box$3$1"+fe+"$2$3$1"+Se+"$2box$3")+e;case 100:return re(e,":",":"+Se)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return re(e,"scroll-","scroll-snap-")+e}return e}function Nc(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function g$(e,t,n,r){switch(e.type){case r$:if(e.children.length)break;case t$:case n$:case zg:return e.return=e.return||e.value;case w2:return"";case S2:return e.return=e.value+"{"+Nc(e.children,r)+"}";case Fu:if(!pn(e.value=e.props.join(",")))return""}return pn(n=Nc(e.children,r))?e.return=e.value+"{"+n+"}":""}function v$(e){var t=_2(e);return function(n,r,i,o){for(var a="",l=0;l<t;l++)a+=e[l](n,r,i,o)||"";return a}}function y$(e){return function(t){t.root||(t=t.return)&&e(t)}}function x$(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case zg:e.return=P2(e.value,e.length,n);return;case S2:return Nc([xr(e,{value:re(e.value,"@","@"+fe)})],r);case Fu:if(e.length)return o$(n=e.props,function(i){switch(Yn(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Di(xr(e,{props:[re(i,/:(read-\w+)/,":"+za+"$1")]})),Di(xr(e,{props:[i]})),Hh(e,{props:Sy(n,r)});break;case"::placeholder":Di(xr(e,{props:[re(i,/:(plac\w+)/,":"+fe+"input-$1")]})),Di(xr(e,{props:[re(i,/:(plac\w+)/,":"+za+"$1")]})),Di(xr(e,{props:[re(i,/:(plac\w+)/,Se+"input-$1")]})),Di(xr(e,{props:[i]})),Hh(e,{props:Sy(n,r)});break}return""})}}var b$={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Oo=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",O2="active",T2="data-styled-version",Vu="6.3.11",Bg=`/*!sc*/
`,Na=typeof window<"u"&&typeof document<"u",w$=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY),S$={};function js(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var Xl=new Map,Bc=new Map,Kl=1,Ea=function(e){if(Xl.has(e))return Xl.get(e);for(;Bc.has(Kl);)Kl++;var t=Kl++;return Xl.set(e,t),Bc.set(t,e),t},C$=function(e,t){Kl=t+1,Xl.set(e,t),Bc.set(t,e)},Vg=Object.freeze([]),To=Object.freeze({});function j2(e,t,n){return n===void 0&&(n=To),e.theme!==n.theme&&e.theme||t||n.theme}var $2=new Set(["a","abbr","address","area","article","aside","audio","b","bdi","bdo","blockquote","body","button","br","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","main","map","mark","menu","meter","nav","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","slot","small","span","strong","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","switch","symbol","text","textPath","tspan","use"]),E$=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,_$=/(^-|-$)/g;function _y(e){return e.replace(E$,"-").replace(_$,"")}var k$=/(a)(d)/gi,ky=function(e){return String.fromCharCode(e+(e>25?39:97))};function qh(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=ky(t%52)+n;return(ky(t%52)+n).replace(k$,"$1-$2")}var Tf,ei=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},I2=function(e){return ei(5381,e)};function Wg(e){return qh(I2(e)>>>0)}function P$(e){return e.displayName||e.name||"Component"}function jf(e){return typeof e=="string"&&!0}var M2=typeof Symbol=="function"&&Symbol.for,A2=M2?Symbol.for("react.memo"):60115,O$=M2?Symbol.for("react.forward_ref"):60112,T$={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},j$={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},D2={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},$$=((Tf={})[O$]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Tf[A2]=D2,Tf);function Py(e){return("type"in(t=e)&&t.type.$$typeof)===A2?D2:"$$typeof"in e?$$[e.$$typeof]:T$;var t}var I$=Object.defineProperty,M$=Object.getOwnPropertyNames,Oy=Object.getOwnPropertySymbols,A$=Object.getOwnPropertyDescriptor,D$=Object.getPrototypeOf,Ty=Object.prototype;function L2(e,t,n){if(typeof t!="string"){if(Ty){var r=D$(t);r&&r!==Ty&&L2(e,r,n)}var i=M$(t);Oy&&(i=i.concat(Oy(t)));for(var o=Py(e),a=Py(t),l=0;l<i.length;++l){var s=i[l];if(!(s in j$||n&&n[s]||a&&s in a||o&&s in o)){var c=A$(t,s);try{I$(e,s,c)}catch{}}}}return e}function jo(e){return typeof e=="function"}function Ug(e){return typeof e=="object"&&"styledComponentId"in e}function li(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Vc(e,t){return e.join(t||"")}function ms(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Yh(e,t,n){if(n===void 0&&(n=!1),!n&&!ms(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=Yh(e[r],t[r]);else if(ms(t))for(var r in t)e[r]=Yh(e[r],t[r]);return e}function Hg(e,t){Object.defineProperty(e,"toString",{value:t})}var L$=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t,this._cGroup=0,this._cIndex=0}return e.prototype.indexOfGroup=function(t){if(t===this._cGroup)return this._cIndex;var n=this._cIndex;if(t>this._cGroup)for(var r=this._cGroup;r<t;r++)n+=this.groupSizes[r];else for(r=this._cGroup-1;r>=t;r--)n-=this.groupSizes[r];return this._cGroup=t,this._cIndex=n,n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,o=i;t>=o;)if((o<<=1)<0)throw js(16,"".concat(t));this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var a=i;a<o;a++)this.groupSizes[a]=0}for(var l=this.indexOfGroup(t+1),s=0,c=(a=0,n.length);a<c;a++)this.tag.insertRule(l,n[a])&&(this.groupSizes[t]++,l++,s++);s>0&&this._cGroup>t&&(this._cIndex+=s)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),i=r+n;this.groupSizes[t]=0;for(var o=r;o<i;o++)this.tag.deleteRule(r);n>0&&this._cGroup>t&&(this._cIndex-=n)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],i=this.indexOfGroup(t),o=i+r,a=i;a<o;a++)n+=this.tag.getRule(a)+Bg;return n},e}(),R$="style[".concat(Oo,"][").concat(T2,'="').concat(Vu,'"]'),F$=new RegExp("^".concat(Oo,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),jy=function(e){return typeof ShadowRoot<"u"&&e instanceof ShadowRoot||"host"in e&&e.nodeType===11},Xh=function(e){if(!e)return document;if(jy(e))return e;if("getRootNode"in e){var t=e.getRootNode();if(jy(t))return t}return document},z$=function(e,t,n){for(var r,i=n.split(","),o=0,a=i.length;o<a;o++)(r=i[o])&&e.registerName(t,r)},N$=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(Bg),i=[],o=0,a=r.length;o<a;o++){var l=r[o].trim();if(l){var s=l.match(F$);if(s){var c=0|parseInt(s[1],10),d=s[2];c!==0&&(C$(d,c),z$(e,d,s[3]),e.getTag().insertRules(c,i)),i.length=0}else i.push(l)}}},$f=function(e){for(var t=Xh(e.options.target).querySelectorAll(R$),n=0,r=t.length;n<r;n++){var i=t[n];i&&i.getAttribute(Oo)!==O2&&(N$(e,i),i.parentNode&&i.parentNode.removeChild(i))}};function B$(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var R2=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(l){var s=Array.from(l.querySelectorAll("style[".concat(Oo,"]")));return s[s.length-1]}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(Oo,O2),r.setAttribute(T2,Vu);var a=B$();return a&&r.setAttribute("nonce",a),n.insertBefore(r,o),r},V$=function(){function e(t){this.element=R2(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){var r;if(n.sheet)return n.sheet;for(var i=(r=n.getRootNode().styleSheets)!==null&&r!==void 0?r:document.styleSheets,o=0,a=i.length;o<a;o++){var l=i[o];if(l.ownerNode===n)return l}throw js(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),W$=function(){function e(t){this.element=R2(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),U$=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(t===this.length?this.rules.push(n):this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),$y=Na,H$={isServer:!Na,useCSSOMInjection:!w$},Wc=function(){function e(t,n,r){t===void 0&&(t=To),n===void 0&&(n={});var i=this;this.options=ht(ht({},H$),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&Na&&$y&&($y=!1,$f(this)),Hg(this,function(){return function(o){for(var a=o.getTag(),l=a.length,s="",c=function(f){var m=function(g){return Bc.get(g)}(f);if(m===void 0)return"continue";var p=o.names.get(m);if(p===void 0||!p.size)return"continue";var h=a.getGroup(f);if(h.length===0)return"continue";var y=Oo+".g"+f+'[id="'+m+'"]',w="";p.forEach(function(g){g.length>0&&(w+=g+",")}),s+=h+y+'{content:"'+w+'"}'+Bg},d=0;d<l;d++)c(d);return s}(i)})}return e.registerId=function(t){return Ea(t)},e.prototype.rehydrate=function(){!this.server&&Na&&$f(this)},e.prototype.reconstructWithOptions=function(t,n){n===void 0&&(n=!0);var r=new e(ht(ht({},this.options),t),this.gs,n&&this.names||void 0);return!this.server&&Na&&t.target!==this.options.target&&Xh(this.options.target)!==Xh(t.target)&&$f(r),r},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new U$(i):r?new V$(i):new W$(i)}(this.options),new L$(t)));var t},e.prototype.hasNameForId=function(t,n){var r,i;return(i=(r=this.names.get(t))===null||r===void 0?void 0:r.has(n))!==null&&i!==void 0&&i},e.prototype.registerName=function(t,n){Ea(t);var r=this.names.get(t);r?r.add(n):this.names.set(t,new Set([n]))},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(Ea(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(Ea(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),G$=/&/g,Xn=47,ti=42;function Iy(e){if(e.indexOf("}")===-1)return!1;for(var t=e.length,n=0,r=0,i=!1,o=0;o<t;o++){var a=e.charCodeAt(o);if(r!==0||i||a!==Xn||e.charCodeAt(o+1)!==ti)if(i)a===ti&&e.charCodeAt(o+1)===Xn&&(i=!1,o++);else if(a!==34&&a!==39||o!==0&&e.charCodeAt(o-1)===92){if(r===0){if(a===123)n++;else if(a===125&&--n<0)return!0}}else r===0?r=a:r===a&&(r=0);else i=!0,o++}return n!==0||r!==0}function F2(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=F2(n.children,t)),n})}function q$(e){var t,n,r,i=e===void 0?To:e,o=i.options,a=o===void 0?To:o,l=i.plugins,s=l===void 0?Vg:l,c=function(h,y,w){return w.startsWith(n)&&w.endsWith(n)&&w.replaceAll(n,"").length>0?".".concat(t):h},d=s.slice();d.push(function(h){h.type===Fu&&h.value.includes("&")&&(r||(r=new RegExp("\\".concat(n,"\\b"),"g")),h.props[0]=h.props[0].replace(G$,n).replace(r,c))}),a.prefix&&d.push(x$),d.push(g$);var f=[],m=v$(d.concat(y$(function(h){return f.push(h)}))),p=function(h,y,w,g){y===void 0&&(y=""),w===void 0&&(w=""),g===void 0&&(g="&"),t=g,n=y,r=void 0;var v=function(C){if(!Iy(C))return C;for(var S=C.length,P="",k=0,_=0,T=0,$=!1,I=0;I<S;I++){var M=C.charCodeAt(I);if(T!==0||$||M!==Xn||C.charCodeAt(I+1)!==ti)if($)M===ti&&C.charCodeAt(I+1)===Xn&&($=!1,I++);else if(M!==34&&M!==39||I!==0&&C.charCodeAt(I-1)===92){if(T===0)if(M===123)_++;else if(M===125){if(--_<0){for(var j=I+1;j<S;){var F=C.charCodeAt(j);if(F===59||F===10)break;j++}j<S&&C.charCodeAt(j)===59&&j++,_=0,I=j-1,k=j;continue}_===0&&(P+=C.substring(k,I+1),k=I+1)}else M===59&&_===0&&(P+=C.substring(k,I+1),k=I+1)}else T===0?T=M:T===M&&(T=0);else $=!0,I++}if(k<S){var D=C.substring(k);Iy(D)||(P+=D)}return P}(function(C){if(C.indexOf("//")===-1)return C;for(var S=C.length,P=[],k=0,_=0,T=0,$=0;_<S;){var I=C.charCodeAt(_);if(I!==34&&I!==39||_!==0&&C.charCodeAt(_-1)===92)if(T===0)if(I===Xn&&_+1<S&&C.charCodeAt(_+1)===ti){for(_+=2;_+1<S&&(C.charCodeAt(_)!==ti||C.charCodeAt(_+1)!==Xn);)_++;_+=2}else if(I===40&&_>=3&&(32|C.charCodeAt(_-1))==108&&(32|C.charCodeAt(_-2))==114&&(32|C.charCodeAt(_-3))==117)$=1,_++;else if($>0)I===41?$--:I===40&&$++,_++;else if(I===ti&&_+1<S&&C.charCodeAt(_+1)===Xn)_>k&&P.push(C.substring(k,_)),k=_+=2;else if(I===Xn&&_+1<S&&C.charCodeAt(_+1)===Xn){for(_>k&&P.push(C.substring(k,_));_<S&&C.charCodeAt(_)!==10;)_++;k=_}else _++;else _++;else T===0?T=I:T===I&&(T=0),_++}return k===0?C:(k<S&&P.push(C.substring(k)),P.join(""))}(h)),b=h$(w||y?"".concat(w," ").concat(y," { ").concat(v," }"):v);return a.namespace&&(b=F2(b,a.namespace)),f=[],Nc(b,m),f};return p.hash=s.length?s.reduce(function(h,y){return y.name||js(15),ei(h,y.name)},5381).toString():"",p}var Y$=new Wc,Kh=q$(),z2=Q.createContext({shouldForwardProp:void 0,styleSheet:Y$,stylis:Kh});z2.Consumer;Q.createContext(void 0);function Qh(){return Q.useContext(z2)}var N2=function(){function e(t,n){var r=this;this.inject=function(i,o){o===void 0&&(o=Kh);var a=r.name+o.hash;i.hasNameForId(r.id,a)||i.insertRules(r.id,a,o(r.rules,a,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,Hg(this,function(){throw js(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=Kh),this.name+t.hash},e}();function X$(e,t){return t==null||typeof t=="boolean"||t===""?"":typeof t!="number"||t===0||e in b$||e.startsWith("--")?String(t).trim():"".concat(t,"px")}var K$=function(e){return e>="A"&&e<="Z"};function My(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;K$(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var B2=function(e){return e==null||e===!1||e===""},V2=function(e){var t=[];for(var n in e){var r=e[n];e.hasOwnProperty(n)&&!B2(r)&&(Array.isArray(r)&&r.isCss||jo(r)?t.push("".concat(My(n),":"),r,";"):ms(r)?t.push.apply(t,ko(ko(["".concat(n," {")],V2(r),!1),["}"],!1)):t.push("".concat(My(n),": ").concat(X$(n,r),";")))}return t};function Nr(e,t,n,r,i){if(i===void 0&&(i=[]),typeof e=="string")return e&&i.push(e),i;if(B2(e))return i;if(Ug(e))return i.push(".".concat(e.styledComponentId)),i;if(jo(e)){if(!jo(a=e)||a.prototype&&a.prototype.isReactComponent||!t)return i.push(e),i;var o=e(t);return Nr(o,t,n,r,i)}var a;if(e instanceof N2)return n?(e.inject(n,r),i.push(e.getName(r))):i.push(e),i;if(ms(e)){for(var l=V2(e),s=0;s<l.length;s++)i.push(l[s]);return i}if(!Array.isArray(e))return i.push(e.toString()),i;for(s=0;s<e.length;s++)Nr(e[s],t,n,r,i);return i}function W2(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(jo(n)&&!Ug(n))return!1}return!0}var Q$=I2(Vu),Z$=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&W2(t),this.componentId=n,this.baseHash=ei(Q$,n),this.baseStyle=r,Wc.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r).className:"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=li(i,this.staticRulesId);else{var o=Vc(Nr(this.rules,t,n,r)),a=qh(ei(this.baseHash,o)>>>0);if(!n.hasNameForId(this.componentId,a)){var l=r(o,".".concat(a),void 0,this.componentId);n.insertRules(this.componentId,a,l)}i=li(i,a),this.staticRulesId=a}else{for(var s=ei(this.baseHash,r.hash),c="",d=0;d<this.rules.length;d++){var f=this.rules[d];if(typeof f=="string")c+=f;else if(f){var m=Vc(Nr(f,t,n,r));s=ei(ei(s,String(d)),m),c+=m}}if(c){var p=qh(s>>>0);if(!n.hasNameForId(this.componentId,p)){var h=r(c,".".concat(p),void 0,this.componentId);n.insertRules(this.componentId,p,h)}i=li(i,p)}}return{className:i,css:typeof window>"u"?n.getTag().getGroup(Ea(this.componentId)):""}},e}(),Gg=Q.createContext(void 0);Gg.Consumer;var If={};function J$(e,t,n){var r=Ug(e),i=e,o=!jf(e),a=t.attrs,l=a===void 0?Vg:a,s=t.componentId,c=s===void 0?function(C,S){var P=typeof C!="string"?"sc":_y(C);If[P]=(If[P]||0)+1;var k="".concat(P,"-").concat(Wg(Vu+P+If[P]));return S?"".concat(S,"-").concat(k):k}(t.displayName,t.parentComponentId):s,d=t.displayName,f=d===void 0?function(C){return jf(C)?"styled.".concat(C):"Styled(".concat(P$(C),")")}(e):d,m=t.displayName&&t.componentId?"".concat(_y(t.displayName),"-").concat(t.componentId):t.componentId||c,p=r&&i.attrs?i.attrs.concat(l).filter(Boolean):l,h=t.shouldForwardProp;if(r&&i.shouldForwardProp){var y=i.shouldForwardProp;if(t.shouldForwardProp){var w=t.shouldForwardProp;h=function(C,S){return y(C,S)&&w(C,S)}}else h=y}var g=new Z$(n,m,r?i.componentStyle:void 0);function v(C,S){return function(P,k,_){var T=P.attrs,$=P.componentStyle,I=P.defaultProps,M=P.foldedComponentIds,j=P.styledComponentId,F=P.target,D=Q.useContext(Gg),z=Qh(),R=P.shouldForwardProp||z.shouldForwardProp,O=j2(k,D,I)||To,A=function(U,K,Z){for(var se,ie=ht(ht({},K),{className:void 0,theme:Z}),Pe=0;Pe<U.length;Pe+=1){var qe=jo(se=U[Pe])?se(ie):se;for(var Ye in qe)Ye==="className"?ie.className=li(ie.className,qe[Ye]):Ye==="style"?ie.style=ht(ht({},ie.style),qe[Ye]):ie[Ye]=qe[Ye]}return"className"in K&&typeof K.className=="string"&&(ie.className=li(ie.className,K.className)),ie}(T,k,O),N=A.as||F,B={};for(var L in A)A[L]===void 0||L[0]==="$"||L==="as"||L==="theme"&&A.theme===O||(L==="forwardedAs"?B.as=A.forwardedAs:R&&!R(L,N)||(B[L]=A[L]));var V=function(U,K){var Z=Qh(),se=U.generateAndInjectStyles(K,Z.styleSheet,Z.stylis);return se}($,A),W=V.className,G=li(M,j);return W&&(G+=" "+W),A.className&&(G+=" "+A.className),B[jf(N)&&!$2.has(N)?"class":"className"]=G,_&&(B.ref=_),x.createElement(N,B)}(b,C,S)}v.displayName=f;var b=Q.forwardRef(v);return b.attrs=p,b.componentStyle=g,b.displayName=f,b.shouldForwardProp=h,b.foldedComponentIds=r?li(i.foldedComponentIds,i.styledComponentId):"",b.styledComponentId=m,b.target=r?i.target:e,Object.defineProperty(b,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(C){this._foldedDefaultProps=r?function(S){for(var P=[],k=1;k<arguments.length;k++)P[k-1]=arguments[k];for(var _=0,T=P;_<T.length;_++)Yh(S,T[_],!0);return S}({},i.defaultProps,C):C}}),Hg(b,function(){return".".concat(b.styledComponentId)}),o&&L2(b,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),b}function Ay(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var Dy=function(e){return Object.assign(e,{isCss:!0})};function qg(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(jo(e)||ms(e))return Dy(Nr(Ay(Vg,ko([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?Nr(r):Dy(Nr(Ay(r,t)))}function Zh(e,t,n){if(n===void 0&&(n=To),!t)throw js(1,t);var r=function(i){for(var o=[],a=1;a<arguments.length;a++)o[a-1]=arguments[a];return e(t,n,qg.apply(void 0,ko([i],o,!1)))};return r.attrs=function(i){return Zh(e,t,ht(ht({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return Zh(e,t,ht(ht({},n),i))},r}var U2=function(e){return Zh(J$,e)},E=U2;$2.forEach(function(e){E[e]=U2(e)});var e4=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=W2(t),Wc.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,r,i){var o=i(Vc(Nr(this.rules,n,r,i)),""),a=this.componentId+t;r.insertRules(a,a,o)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,r,i){t>2&&Wc.registerId(this.componentId+t);var o=this.componentId+t;this.isStatic?r.hasNameForId(o,o)||this.createStyles(t,n,r,i):(this.removeStyles(t,r),this.createStyles(t,n,r,i))},e}();function t4(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=qg.apply(void 0,ko([e],t,!1)),i="sc-global-".concat(Wg(JSON.stringify(r))),o=new e4(r,i),a=new WeakMap,l=function(c){var d=Qh(),f=Q.useContext(Gg),m=a.get(d.styleSheet);return m===void 0&&(m=d.styleSheet.allocateGSInstance(i),a.set(d.styleSheet,m)),(typeof window>"u"||!d.styleSheet.server)&&s(m,c,d.styleSheet,f,d.stylis),Q.useLayoutEffect(function(){return d.styleSheet.server||s(m,c,d.styleSheet,f,d.stylis),function(){var p;o.removeStyles(m,d.styleSheet),p=d.styleSheet.options.target,typeof document<"u"&&(p??document).querySelectorAll('style[data-styled-global="'.concat(i,'"]')).forEach(function(h){return h.remove()})}},[m,c,d.styleSheet,f,d.stylis]),null};function s(c,d,f,m,p){if(o.isStatic)o.renderStyles(c,S$,f,p);else{var h=ht(ht({},d),{theme:j2(d,m,l.defaultProps)});o.renderStyles(c,h,f,p)}}return Q.memo(l)}function Yg(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=Vc(qg.apply(void 0,ko([e],t,!1))),i=Wg(r);return new N2(i,r)}const n4=E.div`
position: sticky;
  top: 0;
  z-index: 1000;
      background: radial-gradient(circle at 50% 45%, #5c5149 0%, #4b3c34 35%, #352b25 65%, #1b1412 100%);


`,r4=E.div`
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
`,i4=E.div`
width: 100%;
  display: flex;
      gap: 10px;

  flex-direction: column;
  @media screen and (min-width: 768px) {
    justify-content: space-around;
  }
`,o4=E.div`

  display: flex;
  @media screen and (max-width: 1023px) {
    justify-content: space-between;
  }
`,a4=E.div`
  display: flex;
  justify-content: space-around;
  

  @media screen and (min-width: 1023px) {
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    flex: 1;
  }
`,s4=E.button`
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

    
`;E(ge)`
  color: var(--main-brand-color);
  display: none;
  align-items: center;
  text-align: center;
  justify-content: center;
  @media screen and (min-width: 768px) {
    display: flex;
  }
`;E.img`
  display: flex;
  width: 50px;
  height: 50px;

  justify-content: center;
  align-items: center;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;E.img`
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
    width: 100px;
    height: 100px;

    justify-content: center;
    align-items: center;
  }
`;const l4=E(ge)`
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
`;E.h1`
  color: var(--white-color);
  font-family: DM Serif Display;
  margin-left: 70px;
`;const c4=E.svg`
  width: 30px;
  height: 30px;
  fill: var(--white-color);
`,u4=E.button`
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
`;E.div`
  z-index: 9999;
`;E.a`
  color: var(--black-color);
`;const d4=E.div`
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
`,f4=E.button`
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
`,p4=E.nav`
  display: flex;
  flex-direction: column;
  gap: 25px;
`,Li=E(ge)`
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
`,h4=E.div`
  margin-top: auto;
  border-top: 1px solid #eee;
  padding-top: 20px;
  font-size: 14px;
  color: #888;
  text-align: center;
`,m4=E.div`
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
`,g4=E.div`
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
`,v4=E.input`
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
`,y4=E.button`
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
`,x4=E.svg`
  width: 24px;
  height: 24px;
`,b4=E.ul`
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
`,w4=E.li`
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


`,S4=E.img`
 width: 100px;
    height: 100px;
    object-fit: cover;
 `,C4=E.h3`
      text-align: left;
      font-size: 18px;
      font-weight: 400;

`,E4=E.h3`
 font-weight: 500;
      font-size: 20px;
         

`,_4=E.div`
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

    
`,xn="/assets/symbol-defs-fb9ce9f0.svg",k4=()=>{const[e,t]=x.useState(""),[n,r]=x.useState([]),[i,o]=x.useState(!1),a=et(),l=x.useRef(null);x.useEffect(()=>{if(e.trim().length<2){r([]),o(!1);return}const c=setTimeout(async()=>{try{const f=await(await fetch(`https://backenddidiv-production.up.railway.app/api/products?filters[name][$containsi]=${e}&populate=*`)).json();r(f.data),o(!0)}catch(d){console.error(d)}},300);return()=>clearTimeout(c)},[e]),x.useEffect(()=>{const c=d=>{l.current&&!l.current.contains(d.target)&&o(!1)};return document.addEventListener("mousedown",c),()=>{document.removeEventListener("mousedown",c)}},[]);const s=c=>{t(""),o(!1),a(`/product/${c.slug??c.id}`)};return u.jsxs(g4,{ref:l,children:[u.jsx(v4,{name:"site-search",value:e,onChange:c=>t(c.target.value),placeholder:"Пошук",autoComplete:"off",onFocus:()=>e.trim().length>=2&&o(!0)}),u.jsx(y4,{className:"search-button",children:u.jsx(x4,{children:u.jsx("use",{href:`${xn}#icon-search`})})}),i&&n.length>0&&u.jsx(b4,{children:n.map(c=>{var m,p;const f=c.new_price&&c.new_price<c.price?c.new_price:c.price;return u.jsxs(w4,{onClick:()=>s(c),children:[u.jsx(S4,{src:((p=(m=c.images)==null?void 0:m[0])==null?void 0:p.url)||"/nofoto.png",alt:""}),u.jsxs(_4,{children:[u.jsx(C4,{children:c.name}),u.jsxs(E4,{children:[f," грн."]})]})]},c.id)})})]})};var H2={exports:{}},G2={};/**
 * @license React
 * use-sync-external-store-with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $s=x;function P4(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var O4=typeof Object.is=="function"?Object.is:P4,T4=$s.useSyncExternalStore,j4=$s.useRef,$4=$s.useEffect,I4=$s.useMemo,M4=$s.useDebugValue;G2.useSyncExternalStoreWithSelector=function(e,t,n,r,i){var o=j4(null);if(o.current===null){var a={hasValue:!1,value:null};o.current=a}else a=o.current;o=I4(function(){function s(p){if(!c){if(c=!0,d=p,p=r(p),i!==void 0&&a.hasValue){var h=a.value;if(i(h,p))return f=h}return f=p}if(h=f,O4(d,p))return h;var y=r(p);return i!==void 0&&i(h,y)?(d=p,h):(d=p,f=y)}var c=!1,d,f,m=n===void 0?null:n;return[function(){return s(t())},m===null?void 0:function(){return s(m())}]},[t,n,r,i]);var l=T4(e,o[0],o[1]);return $4(function(){a.hasValue=!0,a.value=l},[l]),M4(l),l};H2.exports=G2;var A4=H2.exports;function D4(e){e()}function L4(){let e=null,t=null;return{clear(){e=null,t=null},notify(){D4(()=>{let n=e;for(;n;)n.callback(),n=n.next})},get(){const n=[];let r=e;for(;r;)n.push(r),r=r.next;return n},subscribe(n){let r=!0;const i=t={callback:n,next:null,prev:t};return i.prev?i.prev.next=i:e=i,function(){!r||e===null||(r=!1,i.next?i.next.prev=i.prev:t=i.prev,i.prev?i.prev.next=i.next:e=i.next)}}}}var Ly={notify(){},get:()=>[]};function R4(e,t){let n,r=Ly,i=0,o=!1;function a(y){d();const w=r.subscribe(y);let g=!1;return()=>{g||(g=!0,w(),f())}}function l(){r.notify()}function s(){h.onStateChange&&h.onStateChange()}function c(){return o}function d(){i++,n||(n=t?t.addNestedSub(s):e.subscribe(s),r=L4())}function f(){i--,n&&i===0&&(n(),n=void 0,r.clear(),r=Ly)}function m(){o||(o=!0,d())}function p(){o&&(o=!1,f())}const h={addNestedSub:a,notifyNestedSubs:l,handleChangeWrapper:s,isSubscribed:c,trySubscribe:m,tryUnsubscribe:p,getListeners:()=>r};return h}var F4=()=>typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",z4=F4(),N4=()=>typeof navigator<"u"&&navigator.product==="ReactNative",B4=N4(),V4=()=>z4||B4?x.useLayoutEffect:x.useEffect,W4=V4(),Mf=Symbol.for("react-redux-context"),Af=typeof globalThis<"u"?globalThis:{};function U4(){if(!x.createContext)return{};const e=Af[Mf]??(Af[Mf]=new Map);let t=e.get(x.createContext);return t||(t=x.createContext(null),e.set(x.createContext,t)),t}var Wr=U4();function H4(e){const{children:t,context:n,serverState:r,store:i}=e,o=x.useMemo(()=>{const s=R4(i);return{store:i,subscription:s,getServerState:r?()=>r:void 0}},[i,r]),a=x.useMemo(()=>i.getState(),[i]);W4(()=>{const{subscription:s}=o;return s.onStateChange=s.notifyNestedSubs,s.trySubscribe(),a!==i.getState()&&s.notifyNestedSubs(),()=>{s.tryUnsubscribe(),s.onStateChange=void 0}},[o,a]);const l=n||Wr;return x.createElement(l.Provider,{value:o},t)}var G4=H4;function Xg(e=Wr){return function(){return x.useContext(e)}}var q2=Xg();function Y2(e=Wr){const t=e===Wr?q2:Xg(e),n=()=>{const{store:r}=t();return r};return Object.assign(n,{withTypes:()=>n}),n}var q4=Y2();function Y4(e=Wr){const t=e===Wr?q4:Y2(e),n=()=>t().dispatch;return Object.assign(n,{withTypes:()=>n}),n}var Lt=Y4(),X4=(e,t)=>e===t;function K4(e=Wr){const t=e===Wr?q2:Xg(e),n=(r,i={})=>{const{equalityFn:o=X4}=typeof i=="function"?{equalityFn:i}:i,a=t(),{store:l,subscription:s,getServerState:c}=a;x.useRef(!0);const d=x.useCallback({[r.name](m){return r(m)}}[r.name],[r]),f=A4.useSyncExternalStoreWithSelector(s.addNestedSub,l.getState,c||l.getState,d,o);return x.useDebugValue(f),f};return Object.assign(n,{withTypes:()=>n}),n}var Ge=K4();const Q4=E(ge)`
      display: flex;
    align-items: center;
    align-content: center;
    justify-content: center;
    
    @media screen and (min-width: 1023px) {
   order: 2;
  margin-right: 10px;
  
  }
       
`,Z4=E.svg`
  width: 30px;
  height: 30px;
 fill: var(--white-color);
`,J4=E.div`

width:30px;
height:30px;

  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 28px; 
  cursor: pointer;
`,e3=E.div`
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
`,t3=({onClick:e})=>{const t=Ge(n=>n.cart.items.length);return u.jsx(Q4,{to:"/cart",children:u.jsxs(J4,{onClick:e,children:[u.jsx(Z4,{children:u.jsx("use",{href:`${xn}#icon-cart`})}),t>0&&u.jsx(e3,{children:t})]})})},n3=E.nav`
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
`,Ri=E(ge)`
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
`,r3=()=>u.jsxs(n3,{children:[u.jsx(Ri,{to:"/",children:"Головна"}),u.jsx(Ri,{to:"/catalog",children:"Каталог"}),u.jsx(Ri,{to:"/catalog/new",children:"Новинки"}),u.jsx(Ri,{to:"/catalog/sale",children:"Акційні товари"}),u.jsx(Ri,{to:"/about",children:"Про нас"}),u.jsx(Ri,{to:"/contacts",children:"Контакти"})]}),i3=E.svg`
  width: 24px;
  height: 24px;
  fill: var(--white-color);
`,o3=E(ge)`
      display: flex;
    align-items: center;
    align-content: center;
    justify-content: center;
    
    @media screen and (min-width: 1023px) {
   order: 2;
 
  }
       
`,a3=E.div`

width:30px;
height:30px;

  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 28px; /* розмір іконки */
  cursor: pointer;
`,s3=E.div`

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
`,l3=({onClick:e})=>{const t=Ge(n=>n.favorites.items.length);return u.jsx(o3,{to:"/favorite",children:u.jsxs(a3,{onClick:e,children:[u.jsx(i3,{children:u.jsx("use",{href:`${xn}#icon-heart`})}),t>0&&u.jsx(s3,{children:t})]})})};/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X2=(...e)=>e.filter((t,n,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===n).join(" ").trim();/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c3=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u3=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,n,r)=>r?r.toUpperCase():n.toLowerCase());/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ry=e=>{const t=u3(e);return t.charAt(0).toUpperCase()+t.slice(1)};/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var d3={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f3=e=>{for(const t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0;return!1};/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p3=x.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:i="",children:o,iconNode:a,...l},s)=>x.createElement("svg",{ref:s,...d3,width:t,height:t,stroke:e,strokeWidth:r?Number(n)*24/Number(t):n,className:X2("lucide",i),...!o&&!f3(l)&&{"aria-hidden":"true"},...l},[...a.map(([c,d])=>x.createElement(c,d)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tt=(e,t)=>{const n=x.forwardRef(({className:r,...i},o)=>x.createElement(p3,{ref:o,iconNode:t,className:X2(`lucide-${c3(Ry(e))}`,`lucide-${e}`,r),...i}));return n.displayName=Ry(e),n};/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h3=[["path",{d:"m3 16 4 4 4-4",key:"1co6wj"}],["path",{d:"M7 20V4",key:"1yoxec"}],["path",{d:"M11 4h4",key:"6d7r33"}],["path",{d:"M11 8h7",key:"djye34"}],["path",{d:"M11 12h10",key:"1438ji"}]],Wu=tt("arrow-down-narrow-wide",h3);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m3=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],Uu=tt("arrow-right",m3);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g3=[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"M9 9h.01",key:"1q5me6"}],["path",{d:"M15 15h.01",key:"lqbp3k"}]],v3=tt("badge-percent",g3);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y3=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],x3=tt("chevron-down",y3);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b3=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],w3=tt("chevron-up",b3);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S3=[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]],fi=tt("eye-off",S3);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C3=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],pi=tt("eye",C3);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E3=[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",key:"mvr1a0"}]],Is=tt("heart",E3);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _3=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"r6nss1"}]],k3=tt("house",_3);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P3=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],O3=tt("info",P3);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T3=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 .83.18 2 2 0 0 0 .83-.18l8.58-3.9a1 1 0 0 0 0-1.831z",key:"zzgyd3"}],["path",{d:"M16 17h6",key:"1ook5g"}],["path",{d:"M19 14v6",key:"1ckrd5"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 .825.178",key:"1ia9y3"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l2.116-.962",key:"jksky3"}]],j3=tt("layers-plus",T3);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $3=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],I3=tt("mail",$3);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M3=[["path",{d:"M16 10a4 4 0 0 1-8 0",key:"1ltviw"}],["path",{d:"M3.103 6.034h17.794",key:"awc11p"}],["path",{d:"M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z",key:"o988cm"}]],A3=tt("shopping-bag",M3);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D3=[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]],Uo=tt("shopping-cart",D3);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L3=[["path",{d:"M10 5H3",key:"1qgfaw"}],["path",{d:"M12 19H3",key:"yhmn1j"}],["path",{d:"M14 3v4",key:"1sua03"}],["path",{d:"M16 17v4",key:"1q0r14"}],["path",{d:"M21 12h-9",key:"1o4lsq"}],["path",{d:"M21 19h-5",key:"1rlt1p"}],["path",{d:"M21 5h-7",key:"1oszz2"}],["path",{d:"M8 10v4",key:"tgpxqk"}],["path",{d:"M8 12H3",key:"a7s4jb"}]],K2=tt("sliders-horizontal",L3);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R3=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],Q2=tt("trash-2",R3);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F3=[["circle",{cx:"12",cy:"8",r:"5",key:"1hypcn"}],["path",{d:"M20 21a8 8 0 0 0-16 0",key:"rfgkzh"}]],z3=tt("user-round",F3);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N3=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Z2=tt("x",N3),B3=({openLogin:e})=>{const[t,n]=x.useState(!1),r=et(),i=async()=>{const o=localStorage.getItem("token");if(!o){e();return}try{const a=await fetch("https://backenddidiv-production.up.railway.app/api/users/me",{headers:{Authorization:`Bearer ${o}`}});if(a.status===401){localStorage.removeItem("token"),localStorage.removeItem("user"),localStorage.removeItem("persist:cart"),localStorage.removeItem("persist:favorites"),window.location.reload(),e();return}if(!a.ok){console.error("Помилка перевірки авторизації:",a.status);return}r("/account/orders")}catch(a){console.error("Помилка перевірки авторизації:",a)}};return u.jsx(n4,{children:u.jsx(r4,{children:u.jsxs(i4,{children:[u.jsxs(o4,{children:[u.jsx(l4,{to:"/",children:"Дідів хлів"}),u.jsxs(a4,{children:[u.jsx(t3,{}),u.jsx(s4,{onClick:i,children:u.jsx(z3,{size:28,color:"#f2ebd4",strokeWidth:1.9})}),u.jsx(l3,{}),u.jsx(r3,{}),u.jsx(u4,{onClick:()=>n(!t),children:u.jsx(c4,{children:u.jsx("use",{href:`${xn}#icon-menu`})})}),u.jsx(m4,{open:t,onClick:()=>n(!1)}),u.jsxs(d4,{open:t,children:[u.jsx(f4,{onClick:()=>n(!1),children:u.jsx(Z2,{size:28,strokeWidth:1.5})}),u.jsxs(p4,{children:[u.jsxs(Li,{onClick:()=>n(!1),to:"/",children:[u.jsx(k3,{size:22,strokeWidth:1.5})," Головна"]}),u.jsxs(Li,{onClick:()=>n(!1),to:"/catalog",children:[u.jsx(A3,{size:22,strokeWidth:1.5})," Каталог"]}),u.jsxs(Li,{onClick:()=>n(!1),to:"/catalog/new",children:[u.jsx(j3,{size:22,strokeWidth:1.5}),"Новинки"]}),u.jsxs(Li,{onClick:()=>n(!1),to:"/catalog/sale",children:[u.jsx(v3,{size:22,strokeWidth:1.5}),"Акційні товари"]}),u.jsxs(Li,{onClick:()=>n(!1),to:"/about",children:[u.jsx(O3,{size:22,strokeWidth:1.5})," Про нас"]}),u.jsxs(Li,{onClick:()=>n(!1),to:"/contacts",children:[u.jsx(I3,{size:22,strokeWidth:1.5})," Контакти"]})]}),u.jsx(h4,{children:u.jsx("p",{children:"© 2020 Дідів Хлів"})})]})]})]}),u.jsx(k4,{})]})})})},V3=E.div`

   background: radial-gradient(
    circle at 50% 45%,
    #5c5149 0%,
    #4b3c34 35%,
    #352b25 65%,
    #1b1412 100%
  );
`,W3=E.footer`
 
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
`,U3=E.div`
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
`,Df=E.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center; /* Центруємо контент всередині колонки */

  @media screen and (min-width: 768px) {
    align-items: flex-start; /* На десктопі — по лівому краю */
    min-width: 150px;
    flex: 1;
  }
`,Lf=E.h3`
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
`,kn=E(ge)`
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
`,H3=E.div`
  display: flex;
  gap: 20px;
  margin-top: 10px;
  justify-content: center;

  @media screen and (min-width: 768px) {
    justify-content: flex-start;
  }
`,Rf=E.a`
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
`,G3=()=>u.jsx(V3,{children:u.jsxs(W3,{children:[u.jsxs(U3,{children:[u.jsxs(Df,{children:[u.jsx(Lf,{children:"Навігація"}),u.jsx(kn,{to:"/",children:"Головна"}),u.jsx(kn,{to:"/about",children:"Про нас"}),u.jsx(kn,{to:"/catalog",children:"Каталог"}),u.jsx(kn,{to:"/contacts",children:"Контакти"})]}),u.jsxs(Df,{children:[u.jsx(Lf,{children:"Інформація"}),u.jsx(kn,{to:"/delivery",children:"Оплата і доставка"}),u.jsx(kn,{children:"Повернення"}),u.jsx(kn,{children:"Гарантія"}),u.jsx(kn,{children:"Політика конфіденційності"})]})]}),u.jsxs(Df,{children:[u.jsx(Lf,{children:"Контакти"}),u.jsx(kn,{href:"tel:+380979999999",children:"+38 (097) 999-99-99"}),u.jsx(kn,{href:"mailto:email@email.com",children:"email@email.com"}),u.jsxs(H3,{children:[u.jsx(Rf,{href:"https://www.instagram.com/didivxliv?igsh=MXhsNWRjdW5rajYwdQ==",target:"_blank",rel:"noopener noreferrer",children:u.jsx("svg",{width:"20px",children:u.jsx("use",{href:`${xn}#icon-instagram`})})}),u.jsx(Rf,{href:"https://t.me/didivxliv",target:"_blank",rel:"noopener noreferrer",children:u.jsx("svg",{width:"20px",children:u.jsx("use",{href:`${xn}#icon-telegram`})})}),u.jsx(Rf,{href:"https://www.olx.ua/uk/hobbi-otdyh-i-sport/velo/q-%D0%B4%D1%96%D0%B4%D1%96%D0%B2-%D1%85%D0%BB%D1%96%D0%B2/?srsltid=AfmBOoqjzHkKNGxhNyAXVf2_KVV6h3JQFklEk0AjrDFh7tlO2-HZJPSS",target:"_blank",rel:"noopener noreferrer",children:u.jsx("svg",{width:"27px",height:"27px",style:{marginTop:"5px"},children:u.jsx("use",{href:`${xn}#icon-olx`})})})]})]})]})}),q3=({openLogin:e,openRegister:t})=>u.jsxs(u.Fragment,{children:[u.jsx(B3,{openLogin:e,openRegister:t}),u.jsx("main",{style:{flex:1},children:u.jsx(hw,{})}),u.jsx(G3,{})]}),Y3=E.section`
  width: 100%;
  font-family: var(--main-font);
  padding-top: 30px;
`,X3=E.h2`
  font-size: 30px;
  text-transform: uppercase;
  font-weight: 700;
  margin-bottom: 20px;
  color: #333;
  text-align: center;

  @media screen and (min-width: 768px) {
    font-size: 35px;
  }
`,K3=E.div`
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
`,Q3=E.div`
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
`,Z3=E.p`
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
`,J3=E(ge)`
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
`,e5=E.span`
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
`,t5=E.div`
  padding: 10px 0;
`,n5=E.h3`
  font-size: 20px;
  font-weight: 600;

  color: #333;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 16px;
`,r5=E.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;E.span`
  font-size: 17px;
  font-weight: 800;
  color: var(--black-color);
`;E.button`
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
`;E(ge)`
  color: var(--white-color);
  padding: 10px 20px;
  background: var(--orange-color);
  border-radius: 15px;
  text-decoration: none;
`;const i5=E(ge)`
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
`,o5=E.div`
  text-align: center;
  color: white;

  p {
    font-size: 24px;
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 12px;
  }
`,a5=E.div`
  width: 40px;
  height: 40px;
  border: 2px solid white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`;function J2(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var i=e.length;for(t=0;t<i;t++)e[t]&&(n=J2(e[t]))&&(r&&(r+=" "),r+=n)}else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function hi(){for(var e,t,n=0,r="",i=arguments.length;n<i;n++)(e=arguments[n])&&(t=J2(e))&&(r&&(r+=" "),r+=t);return r}function s5(e){if(!e||typeof document>"u")return;let t=document.head||document.getElementsByTagName("head")[0],n=document.createElement("style");n.type="text/css",t.firstChild?t.insertBefore(n,t.firstChild):t.appendChild(n),n.styleSheet?n.styleSheet.cssText=e:n.appendChild(document.createTextNode(e))}s5(`:root{--toastify-color-light: #fff;--toastify-color-dark: #121212;--toastify-color-info: #3498db;--toastify-color-success: #07bc0c;--toastify-color-warning: #f1c40f;--toastify-color-error: hsl(6, 78%, 57%);--toastify-color-transparent: rgba(255, 255, 255, .7);--toastify-icon-color-info: var(--toastify-color-info);--toastify-icon-color-success: var(--toastify-color-success);--toastify-icon-color-warning: var(--toastify-color-warning);--toastify-icon-color-error: var(--toastify-color-error);--toastify-container-width: fit-content;--toastify-toast-width: 320px;--toastify-toast-offset: 16px;--toastify-toast-top: max(var(--toastify-toast-offset), env(safe-area-inset-top));--toastify-toast-right: max(var(--toastify-toast-offset), env(safe-area-inset-right));--toastify-toast-left: max(var(--toastify-toast-offset), env(safe-area-inset-left));--toastify-toast-bottom: max(var(--toastify-toast-offset), env(safe-area-inset-bottom));--toastify-toast-background: #fff;--toastify-toast-padding: 14px;--toastify-toast-min-height: 64px;--toastify-toast-max-height: 800px;--toastify-toast-bd-radius: 6px;--toastify-toast-shadow: 0px 4px 12px rgba(0, 0, 0, .1);--toastify-font-family: sans-serif;--toastify-z-index: 9999;--toastify-text-color-light: #757575;--toastify-text-color-dark: #fff;--toastify-text-color-info: #fff;--toastify-text-color-success: #fff;--toastify-text-color-warning: #fff;--toastify-text-color-error: #fff;--toastify-spinner-color: #616161;--toastify-spinner-color-empty-area: #e0e0e0;--toastify-color-progress-light: linear-gradient(to right, #4cd964, #5ac8fa, #007aff, #34aadc, #5856d6, #ff2d55);--toastify-color-progress-dark: #bb86fc;--toastify-color-progress-info: var(--toastify-color-info);--toastify-color-progress-success: var(--toastify-color-success);--toastify-color-progress-warning: var(--toastify-color-warning);--toastify-color-progress-error: var(--toastify-color-error);--toastify-color-progress-bgo: .2}.Toastify__toast-container{z-index:var(--toastify-z-index);-webkit-transform:translate3d(0,0,var(--toastify-z-index));position:fixed;width:var(--toastify-container-width);box-sizing:border-box;color:#fff;display:flex;flex-direction:column}.Toastify__toast-container--top-left{top:var(--toastify-toast-top);left:var(--toastify-toast-left)}.Toastify__toast-container--top-center{top:var(--toastify-toast-top);left:50%;transform:translate(-50%);align-items:center}.Toastify__toast-container--top-right{top:var(--toastify-toast-top);right:var(--toastify-toast-right);align-items:end}.Toastify__toast-container--bottom-left{bottom:var(--toastify-toast-bottom);left:var(--toastify-toast-left)}.Toastify__toast-container--bottom-center{bottom:var(--toastify-toast-bottom);left:50%;transform:translate(-50%);align-items:center}.Toastify__toast-container--bottom-right{bottom:var(--toastify-toast-bottom);right:var(--toastify-toast-right);align-items:end}.Toastify__toast{--y: 0;position:relative;touch-action:none;width:var(--toastify-toast-width);min-height:var(--toastify-toast-min-height);box-sizing:border-box;margin-bottom:1rem;padding:var(--toastify-toast-padding);border-radius:var(--toastify-toast-bd-radius);box-shadow:var(--toastify-toast-shadow);max-height:var(--toastify-toast-max-height);font-family:var(--toastify-font-family);z-index:0;display:flex;flex:1 auto;align-items:center;word-break:break-word}@media only screen and (max-width: 480px){.Toastify__toast-container{width:100vw;left:env(safe-area-inset-left);margin:0}.Toastify__toast-container--top-left,.Toastify__toast-container--top-center,.Toastify__toast-container--top-right{top:env(safe-area-inset-top);transform:translate(0)}.Toastify__toast-container--bottom-left,.Toastify__toast-container--bottom-center,.Toastify__toast-container--bottom-right{bottom:env(safe-area-inset-bottom);transform:translate(0)}.Toastify__toast-container--rtl{right:env(safe-area-inset-right);left:initial}.Toastify__toast{--toastify-toast-width: 100%;margin-bottom:0;border-radius:0}}.Toastify__toast-container[data-stacked=true]{width:var(--toastify-toast-width)}.Toastify__toast--stacked{position:absolute;width:100%;transform:translate3d(0,var(--y),0) scale(var(--s));transition:transform .3s}.Toastify__toast--stacked[data-collapsed] .Toastify__toast-body,.Toastify__toast--stacked[data-collapsed] .Toastify__close-button{transition:opacity .1s}.Toastify__toast--stacked[data-collapsed=false]{overflow:visible}.Toastify__toast--stacked[data-collapsed=true]:not(:last-child)>*{opacity:0}.Toastify__toast--stacked:after{content:"";position:absolute;left:0;right:0;height:calc(var(--g) * 1px);bottom:100%}.Toastify__toast--stacked[data-pos=top]{top:0}.Toastify__toast--stacked[data-pos=bot]{bottom:0}.Toastify__toast--stacked[data-pos=bot].Toastify__toast--stacked:before{transform-origin:top}.Toastify__toast--stacked[data-pos=top].Toastify__toast--stacked:before{transform-origin:bottom}.Toastify__toast--stacked:before{content:"";position:absolute;left:0;right:0;bottom:0;height:100%;transform:scaleY(3);z-index:-1}.Toastify__toast--rtl{direction:rtl}.Toastify__toast--close-on-click{cursor:pointer}.Toastify__toast-icon{margin-inline-end:10px;width:22px;flex-shrink:0;display:flex}.Toastify--animate{animation-fill-mode:both;animation-duration:.5s}.Toastify--animate-icon{animation-fill-mode:both;animation-duration:.3s}.Toastify__toast-theme--dark{background:var(--toastify-color-dark);color:var(--toastify-text-color-dark)}.Toastify__toast-theme--light,.Toastify__toast-theme--colored.Toastify__toast--default{background:var(--toastify-color-light);color:var(--toastify-text-color-light)}.Toastify__toast-theme--colored.Toastify__toast--info{color:var(--toastify-text-color-info);background:var(--toastify-color-info)}.Toastify__toast-theme--colored.Toastify__toast--success{color:var(--toastify-text-color-success);background:var(--toastify-color-success)}.Toastify__toast-theme--colored.Toastify__toast--warning{color:var(--toastify-text-color-warning);background:var(--toastify-color-warning)}.Toastify__toast-theme--colored.Toastify__toast--error{color:var(--toastify-text-color-error);background:var(--toastify-color-error)}.Toastify__progress-bar-theme--light{background:var(--toastify-color-progress-light)}.Toastify__progress-bar-theme--dark{background:var(--toastify-color-progress-dark)}.Toastify__progress-bar--info{background:var(--toastify-color-progress-info)}.Toastify__progress-bar--success{background:var(--toastify-color-progress-success)}.Toastify__progress-bar--warning{background:var(--toastify-color-progress-warning)}.Toastify__progress-bar--error{background:var(--toastify-color-progress-error)}.Toastify__progress-bar-theme--colored.Toastify__progress-bar--info,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--success,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--warning,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--error{background:var(--toastify-color-transparent)}.Toastify__close-button{color:#fff;position:absolute;top:6px;right:6px;background:transparent;outline:none;border:none;padding:0;cursor:pointer;opacity:.7;transition:.3s ease;z-index:1}.Toastify__toast--rtl .Toastify__close-button{left:6px;right:unset}.Toastify__close-button--light{color:#000;opacity:.3}.Toastify__close-button>svg{fill:currentColor;height:16px;width:14px}.Toastify__close-button:hover,.Toastify__close-button:focus{opacity:1}@keyframes Toastify__trackProgress{0%{transform:scaleX(1)}to{transform:scaleX(0)}}.Toastify__progress-bar{position:absolute;bottom:0;left:0;width:100%;height:100%;z-index:1;opacity:.7;transform-origin:left}.Toastify__progress-bar--animated{animation:Toastify__trackProgress linear 1 forwards}.Toastify__progress-bar--controlled{transition:transform .2s}.Toastify__progress-bar--rtl{right:0;left:initial;transform-origin:right;border-bottom-left-radius:initial}.Toastify__progress-bar--wrp{position:absolute;overflow:hidden;bottom:0;left:0;width:100%;height:5px;border-bottom-left-radius:var(--toastify-toast-bd-radius);border-bottom-right-radius:var(--toastify-toast-bd-radius)}.Toastify__progress-bar--wrp[data-hidden=true]{opacity:0}.Toastify__progress-bar--bg{opacity:var(--toastify-color-progress-bgo);width:100%;height:100%}.Toastify__spinner{width:20px;height:20px;box-sizing:border-box;border:2px solid;border-radius:100%;border-color:var(--toastify-spinner-color-empty-area);border-right-color:var(--toastify-spinner-color);animation:Toastify__spin .65s linear infinite}@keyframes Toastify__bounceInRight{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(3000px,0,0)}60%{opacity:1;transform:translate3d(-25px,0,0)}75%{transform:translate3d(10px,0,0)}90%{transform:translate3d(-5px,0,0)}to{transform:none}}@keyframes Toastify__bounceOutRight{20%{opacity:1;transform:translate3d(-20px,var(--y),0)}to{opacity:0;transform:translate3d(2000px,var(--y),0)}}@keyframes Toastify__bounceInLeft{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(-3000px,0,0)}60%{opacity:1;transform:translate3d(25px,0,0)}75%{transform:translate3d(-10px,0,0)}90%{transform:translate3d(5px,0,0)}to{transform:none}}@keyframes Toastify__bounceOutLeft{20%{opacity:1;transform:translate3d(20px,var(--y),0)}to{opacity:0;transform:translate3d(-2000px,var(--y),0)}}@keyframes Toastify__bounceInUp{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,3000px,0)}60%{opacity:1;transform:translate3d(0,-20px,0)}75%{transform:translate3d(0,10px,0)}90%{transform:translate3d(0,-5px,0)}to{transform:translateZ(0)}}@keyframes Toastify__bounceOutUp{20%{transform:translate3d(0,calc(var(--y) - 10px),0)}40%,45%{opacity:1;transform:translate3d(0,calc(var(--y) + 20px),0)}to{opacity:0;transform:translate3d(0,-2000px,0)}}@keyframes Toastify__bounceInDown{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,-3000px,0)}60%{opacity:1;transform:translate3d(0,25px,0)}75%{transform:translate3d(0,-10px,0)}90%{transform:translate3d(0,5px,0)}to{transform:none}}@keyframes Toastify__bounceOutDown{20%{transform:translate3d(0,calc(var(--y) - 10px),0)}40%,45%{opacity:1;transform:translate3d(0,calc(var(--y) + 20px),0)}to{opacity:0;transform:translate3d(0,2000px,0)}}.Toastify__bounce-enter--top-left,.Toastify__bounce-enter--bottom-left{animation-name:Toastify__bounceInLeft}.Toastify__bounce-enter--top-right,.Toastify__bounce-enter--bottom-right{animation-name:Toastify__bounceInRight}.Toastify__bounce-enter--top-center{animation-name:Toastify__bounceInDown}.Toastify__bounce-enter--bottom-center{animation-name:Toastify__bounceInUp}.Toastify__bounce-exit--top-left,.Toastify__bounce-exit--bottom-left{animation-name:Toastify__bounceOutLeft}.Toastify__bounce-exit--top-right,.Toastify__bounce-exit--bottom-right{animation-name:Toastify__bounceOutRight}.Toastify__bounce-exit--top-center{animation-name:Toastify__bounceOutUp}.Toastify__bounce-exit--bottom-center{animation-name:Toastify__bounceOutDown}@keyframes Toastify__zoomIn{0%{opacity:0;transform:scale3d(.3,.3,.3)}50%{opacity:1}}@keyframes Toastify__zoomOut{0%{opacity:1}50%{opacity:0;transform:translate3d(0,var(--y),0) scale3d(.3,.3,.3)}to{opacity:0}}.Toastify__zoom-enter{animation-name:Toastify__zoomIn}.Toastify__zoom-exit{animation-name:Toastify__zoomOut}@keyframes Toastify__flipIn{0%{transform:perspective(400px) rotateX(90deg);animation-timing-function:ease-in;opacity:0}40%{transform:perspective(400px) rotateX(-20deg);animation-timing-function:ease-in}60%{transform:perspective(400px) rotateX(10deg);opacity:1}80%{transform:perspective(400px) rotateX(-5deg)}to{transform:perspective(400px)}}@keyframes Toastify__flipOut{0%{transform:translate3d(0,var(--y),0) perspective(400px)}30%{transform:translate3d(0,var(--y),0) perspective(400px) rotateX(-20deg);opacity:1}to{transform:translate3d(0,var(--y),0) perspective(400px) rotateX(90deg);opacity:0}}.Toastify__flip-enter{animation-name:Toastify__flipIn}.Toastify__flip-exit{animation-name:Toastify__flipOut}@keyframes Toastify__slideInRight{0%{transform:translate3d(110%,0,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInLeft{0%{transform:translate3d(-110%,0,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInUp{0%{transform:translate3d(0,110%,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInDown{0%{transform:translate3d(0,-110%,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideOutRight{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(110%,var(--y),0)}}@keyframes Toastify__slideOutLeft{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(-110%,var(--y),0)}}@keyframes Toastify__slideOutDown{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(0,500px,0)}}@keyframes Toastify__slideOutUp{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(0,-500px,0)}}.Toastify__slide-enter--top-left,.Toastify__slide-enter--bottom-left{animation-name:Toastify__slideInLeft}.Toastify__slide-enter--top-right,.Toastify__slide-enter--bottom-right{animation-name:Toastify__slideInRight}.Toastify__slide-enter--top-center{animation-name:Toastify__slideInDown}.Toastify__slide-enter--bottom-center{animation-name:Toastify__slideInUp}.Toastify__slide-exit--top-left,.Toastify__slide-exit--bottom-left{animation-name:Toastify__slideOutLeft;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--top-right,.Toastify__slide-exit--bottom-right{animation-name:Toastify__slideOutRight;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--top-center{animation-name:Toastify__slideOutUp;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--bottom-center{animation-name:Toastify__slideOutDown;animation-timing-function:ease-in;animation-duration:.3s}@keyframes Toastify__spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}
`);var Ms=e=>typeof e=="number"&&!isNaN(e),Si=e=>typeof e=="string",cr=e=>typeof e=="function",l5=e=>Si(e)||Ms(e),Jh=e=>Si(e)||cr(e)?e:null,c5=(e,t)=>e===!1||Ms(e)&&e>0?e:t,em=e=>x.isValidElement(e)||Si(e)||cr(e)||Ms(e);function u5(e,t,n=300){let{scrollHeight:r,style:i}=e;requestAnimationFrame(()=>{i.minHeight="initial",i.height=r+"px",i.transition=`all ${n}ms`,requestAnimationFrame(()=>{i.height="0",i.padding="0",i.margin="0",setTimeout(t,n)})})}function d5({enter:e,exit:t,appendPosition:n=!1,collapse:r=!0,collapseDuration:i=300}){return function({children:o,position:a,preventExitTransition:l,done:s,nodeRef:c,isIn:d,playToast:f}){let m=n?`${e}--${a}`:e,p=n?`${t}--${a}`:t,h=x.useRef(0);return x.useLayoutEffect(()=>{let y=c.current,w=m.split(" "),g=v=>{v.target===c.current&&(f(),y.removeEventListener("animationend",g),y.removeEventListener("animationcancel",g),h.current===0&&v.type!=="animationcancel"&&y.classList.remove(...w))};y.classList.add(...w),y.addEventListener("animationend",g),y.addEventListener("animationcancel",g)},[]),x.useEffect(()=>{let y=c.current,w=()=>{y.removeEventListener("animationend",w),r?u5(y,s,i):s()};d||(l?w():(h.current=1,y.className+=` ${p}`,y.addEventListener("animationend",w)))},[d]),Q.createElement(Q.Fragment,null,o)}}function Fy(e,t){return{content:eC(e.content,e.props),containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,reason:e.removalReason,status:t}}function eC(e,t,n=!1){return x.isValidElement(e)&&!Si(e.type)?x.cloneElement(e,{closeToast:t.closeToast,toastProps:t,data:t.data,isPaused:n}):cr(e)?e({closeToast:t.closeToast,toastProps:t,data:t.data,isPaused:n}):e}function f5({closeToast:e,theme:t,ariaLabel:n="close"}){return Q.createElement("button",{className:`Toastify__close-button Toastify__close-button--${t}`,type:"button",onClick:r=>{r.stopPropagation(),e(!0)},"aria-label":n},Q.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},Q.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function p5({delay:e,isRunning:t,closeToast:n,type:r="default",hide:i,className:o,controlledProgress:a,progress:l,rtl:s,isIn:c,theme:d}){let f=i||a&&l===0,m={animationDuration:`${e}ms`,animationPlayState:t?"running":"paused"};a&&(m.transform=`scaleX(${l})`);let p=hi("Toastify__progress-bar",a?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${d}`,`Toastify__progress-bar--${r}`,{"Toastify__progress-bar--rtl":s}),h=cr(o)?o({rtl:s,type:r,defaultClassName:p}):hi(p,o),y={[a&&l>=1?"onTransitionEnd":"onAnimationEnd"]:a&&l<1?null:()=>{c&&n()}};return Q.createElement("div",{className:"Toastify__progress-bar--wrp","data-hidden":f},Q.createElement("div",{className:`Toastify__progress-bar--bg Toastify__progress-bar-theme--${d} Toastify__progress-bar--${r}`}),Q.createElement("div",{role:"progressbar","aria-hidden":f?"true":"false","aria-label":"notification timer",className:h,style:m,...y}))}var h5=1,tC=()=>`${h5++}`;function m5(e,t,n){let r=1,i=0,o=[],a=[],l=t,s=new Map,c=new Set,d=v=>(c.add(v),()=>c.delete(v)),f=()=>{a=Array.from(s.values()),c.forEach(v=>v())},m=({containerId:v,toastId:b,updateId:C})=>{let S=v?v!==e:e!==1,P=s.has(b)&&C==null;return S||P},p=(v,b)=>{s.forEach(C=>{var S;(b==null||b===C.props.toastId)&&((S=C.toggle)==null||S.call(C,v))})},h=v=>{var b,C;(C=(b=v.props)==null?void 0:b.onClose)==null||C.call(b,v.removalReason),v.isActive=!1},y=v=>{if(v==null)s.forEach(h);else{let b=s.get(v);b&&h(b)}f()},w=()=>{i-=o.length,o=[]},g=v=>{var b,C;let{toastId:S,updateId:P}=v.props,k=P==null;v.staleId&&s.delete(v.staleId),v.isActive=!0,s.set(S,v),f(),n(Fy(v,k?"added":"updated")),k&&((C=(b=v.props).onOpen)==null||C.call(b))};return{id:e,props:l,observe:d,toggle:p,removeToast:y,toasts:s,clearQueue:w,buildToast:(v,b)=>{if(m(b))return;let{toastId:C,updateId:S,data:P,staleId:k,delay:_}=b,T=S==null;T&&i++;let $={...l,style:l.toastStyle,key:r++,...Object.fromEntries(Object.entries(b).filter(([M,j])=>j!=null)),toastId:C,updateId:S,data:P,isIn:!1,className:Jh(b.className||l.toastClassName),progressClassName:Jh(b.progressClassName||l.progressClassName),autoClose:b.isLoading?!1:c5(b.autoClose,l.autoClose),closeToast(M){s.get(C).removalReason=M,y(C)},deleteToast(){let M=s.get(C);if(M!=null){if(n(Fy(M,"removed")),s.delete(C),i--,i<0&&(i=0),o.length>0){g(o.shift());return}f()}}};$.closeButton=l.closeButton,b.closeButton===!1||em(b.closeButton)?$.closeButton=b.closeButton:b.closeButton===!0&&($.closeButton=em(l.closeButton)?l.closeButton:!0);let I={content:v,props:$,staleId:k};l.limit&&l.limit>0&&i>l.limit&&T?o.push(I):Ms(_)?setTimeout(()=>{g(I)},_):g(I)},setProps(v){l=v},setToggle:(v,b)=>{let C=s.get(v);C&&(C.toggle=b)},isToastActive:v=>{var b;return(b=s.get(v))==null?void 0:b.isActive},getSnapshot:()=>a}}var bt=new Map,gs=[],tm=new Set,g5=e=>tm.forEach(t=>t(e)),nC=()=>bt.size>0;function v5(){gs.forEach(e=>iC(e.content,e.options)),gs=[]}var y5=(e,{containerId:t})=>{var n;return(n=bt.get(t||1))==null?void 0:n.toasts.get(e)};function rC(e,t){var n;if(t)return!!((n=bt.get(t))!=null&&n.isToastActive(e));let r=!1;return bt.forEach(i=>{i.isToastActive(e)&&(r=!0)}),r}function x5(e){if(!nC()){gs=gs.filter(t=>e!=null&&t.options.toastId!==e);return}if(e==null||l5(e))bt.forEach(t=>{t.removeToast(e)});else if(e&&("containerId"in e||"id"in e)){let t=bt.get(e.containerId);t?t.removeToast(e.id):bt.forEach(n=>{n.removeToast(e.id)})}}var b5=(e={})=>{bt.forEach(t=>{t.props.limit&&(!e.containerId||t.id===e.containerId)&&t.clearQueue()})};function iC(e,t){em(e)&&(nC()||gs.push({content:e,options:t}),bt.forEach(n=>{n.buildToast(e,t)}))}function w5(e){var t;(t=bt.get(e.containerId||1))==null||t.setToggle(e.id,e.fn)}function oC(e,t){bt.forEach(n=>{(t==null||!(t!=null&&t.containerId)||(t==null?void 0:t.containerId)===n.id)&&n.toggle(e,t==null?void 0:t.id)})}function S5(e){let t=e.containerId||1;return{subscribe(n){let r=m5(t,e,g5);bt.set(t,r);let i=r.observe(n);return v5(),()=>{i(),bt.delete(t)}},setProps(n){var r;(r=bt.get(t))==null||r.setProps(n)},getSnapshot(){var n;return(n=bt.get(t))==null?void 0:n.getSnapshot()}}}function C5(e){return tm.add(e),()=>{tm.delete(e)}}function E5(e){return e&&(Si(e.toastId)||Ms(e.toastId))?e.toastId:tC()}function As(e,t){return iC(e,t),t.toastId}function Hu(e,t){return{...t,type:t&&t.type||e,toastId:E5(t)}}function Gu(e){return(t,n)=>As(t,Hu(e,n))}function X(e,t){return As(e,Hu("default",t))}X.loading=(e,t)=>As(e,Hu("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...t}));function _5(e,{pending:t,error:n,success:r},i){let o;t&&(o=Si(t)?X.loading(t,i):X.loading(t.render,{...i,...t}));let a={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},l=(c,d,f)=>{if(d==null){X.dismiss(o);return}let m={type:c,...a,...i,data:f},p=Si(d)?{render:d}:d;return o?X.update(o,{...m,...p}):X(p.render,{...m,...p}),f},s=cr(e)?e():e;return s.then(c=>l("success",r,c)).catch(c=>l("error",n,c)),s}X.promise=_5;X.success=Gu("success");X.info=Gu("info");X.error=Gu("error");X.warning=Gu("warning");X.warn=X.warning;X.dark=(e,t)=>As(e,Hu("default",{theme:"dark",...t}));function k5(e){x5(e)}X.dismiss=k5;X.clearWaitingQueue=b5;X.isActive=rC;X.update=(e,t={})=>{let n=y5(e,t);if(n){let{props:r,content:i}=n,o={delay:100,...r,...t,toastId:t.toastId||e,updateId:tC()};o.toastId!==e&&(o.staleId=e);let a=o.render||i;delete o.render,As(a,o)}};X.done=e=>{X.update(e,{progress:1})};X.onChange=C5;X.play=e=>oC(!0,e);X.pause=e=>oC(!1,e);function P5(e){var t;let{subscribe:n,getSnapshot:r,setProps:i}=x.useRef(S5(e)).current;i(e);let o=(t=x.useSyncExternalStore(n,r,r))==null?void 0:t.slice();function a(l){if(!o)return[];let s=new Map;return e.newestOnTop&&o.reverse(),o.forEach(c=>{let{position:d}=c.props;s.has(d)||s.set(d,[]),s.get(d).push(c)}),Array.from(s,c=>l(c[0],c[1]))}return{getToastToRender:a,isToastActive:rC,count:o==null?void 0:o.length}}function O5(e){let[t,n]=x.useState(!1),[r,i]=x.useState(!1),o=x.useRef(null),a=x.useRef({start:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,didMove:!1}).current,{autoClose:l,pauseOnHover:s,closeToast:c,onClick:d,closeOnClick:f}=e;w5({id:e.toastId,containerId:e.containerId,fn:n}),x.useEffect(()=>{if(e.pauseOnFocusLoss)return m(),()=>{p()}},[e.pauseOnFocusLoss]);function m(){document.hasFocus()||g(),window.addEventListener("focus",w),window.addEventListener("blur",g)}function p(){window.removeEventListener("focus",w),window.removeEventListener("blur",g)}function h(k){if(e.draggable===!0||e.draggable===k.pointerType){v();let _=o.current;a.canCloseOnClick=!0,a.canDrag=!0,_.style.transition="none",e.draggableDirection==="x"?(a.start=k.clientX,a.removalDistance=_.offsetWidth*(e.draggablePercent/100)):(a.start=k.clientY,a.removalDistance=_.offsetHeight*(e.draggablePercent===80?e.draggablePercent*1.5:e.draggablePercent)/100)}}function y(k){let{top:_,bottom:T,left:$,right:I}=o.current.getBoundingClientRect();k.nativeEvent.type!=="touchend"&&e.pauseOnHover&&k.clientX>=$&&k.clientX<=I&&k.clientY>=_&&k.clientY<=T?g():w()}function w(){n(!0)}function g(){n(!1)}function v(){a.didMove=!1,document.addEventListener("pointermove",C),document.addEventListener("pointerup",S)}function b(){document.removeEventListener("pointermove",C),document.removeEventListener("pointerup",S)}function C(k){let _=o.current;if(a.canDrag&&_){a.didMove=!0,t&&g(),e.draggableDirection==="x"?a.delta=k.clientX-a.start:a.delta=k.clientY-a.start,a.start!==k.clientX&&(a.canCloseOnClick=!1);let T=e.draggableDirection==="x"?`${a.delta}px, var(--y)`:`0, calc(${a.delta}px + var(--y))`;_.style.transform=`translate3d(${T},0)`,_.style.opacity=`${1-Math.abs(a.delta/a.removalDistance)}`}}function S(){b();let k=o.current;if(a.canDrag&&a.didMove&&k){if(a.canDrag=!1,Math.abs(a.delta)>a.removalDistance){i(!0),e.closeToast(!0),e.collapseAll();return}k.style.transition="transform 0.2s, opacity 0.2s",k.style.removeProperty("transform"),k.style.removeProperty("opacity")}}let P={onPointerDown:h,onPointerUp:y};return l&&s&&(P.onMouseEnter=g,e.stacked||(P.onMouseLeave=w)),f&&(P.onClick=k=>{d&&d(k),a.canCloseOnClick&&c(!0)}),{playToast:w,pauseToast:g,isRunning:t,preventExitTransition:r,toastRef:o,eventHandlers:P}}var T5=typeof window<"u"?x.useLayoutEffect:x.useEffect,qu=({theme:e,type:t,isLoading:n,...r})=>Q.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:e==="colored"?"currentColor":`var(--toastify-icon-color-${t})`,...r});function j5(e){return Q.createElement(qu,{...e},Q.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))}function $5(e){return Q.createElement(qu,{...e},Q.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))}function I5(e){return Q.createElement(qu,{...e},Q.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))}function M5(e){return Q.createElement(qu,{...e},Q.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))}function A5(){return Q.createElement("div",{className:"Toastify__spinner"})}var nm={info:$5,warning:j5,success:I5,error:M5,spinner:A5},D5=e=>e in nm;function L5({theme:e,type:t,isLoading:n,icon:r}){let i=null,o={theme:e,type:t};return r===!1||(cr(r)?i=r({...o,isLoading:n}):x.isValidElement(r)?i=x.cloneElement(r,o):n?i=nm.spinner():D5(t)&&(i=nm[t](o))),i}var R5=e=>{let{isRunning:t,preventExitTransition:n,toastRef:r,eventHandlers:i,playToast:o}=O5(e),{closeButton:a,children:l,autoClose:s,onClick:c,type:d,hideProgressBar:f,closeToast:m,transition:p,position:h,className:y,style:w,progressClassName:g,updateId:v,role:b,progress:C,rtl:S,toastId:P,deleteToast:k,isIn:_,isLoading:T,closeOnClick:$,theme:I,ariaLabel:M}=e,j=hi("Toastify__toast",`Toastify__toast-theme--${I}`,`Toastify__toast--${d}`,{"Toastify__toast--rtl":S},{"Toastify__toast--close-on-click":$}),F=cr(y)?y({rtl:S,position:h,type:d,defaultClassName:j}):hi(j,y),D=L5(e),z=!!C||!s,R={closeToast:m,type:d,theme:I},O=null;return a===!1||(cr(a)?O=a(R):x.isValidElement(a)?O=x.cloneElement(a,R):O=f5(R)),Q.createElement(p,{isIn:_,done:k,position:h,preventExitTransition:n,nodeRef:r,playToast:o},Q.createElement("div",{id:P,tabIndex:0,onClick:c,"data-in":_,className:F,...i,style:w,ref:r,..._&&{role:b,"aria-label":M}},D!=null&&Q.createElement("div",{className:hi("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!T})},D),eC(l,e,!t),O,!e.customProgressBar&&Q.createElement(p5,{...v&&!z?{key:`p-${v}`}:{},rtl:S,theme:I,delay:s,isRunning:t,isIn:_,closeToast:m,hide:f,type:d,className:g,controlledProgress:z,progress:C||0})))},F5=(e,t=!1)=>({enter:`Toastify--animate Toastify__${e}-enter`,exit:`Toastify--animate Toastify__${e}-exit`,appendPosition:t}),z5=d5(F5("bounce",!0)),N5={position:"top-right",transition:z5,autoClose:5e3,closeButton:!0,pauseOnHover:!0,pauseOnFocusLoss:!0,draggable:"touch",draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light","aria-label":"Notifications Alt+T",hotKeys:e=>e.altKey&&e.code==="KeyT"};function Un(e){let t={...N5,...e},n=e.stacked,[r,i]=x.useState(!0),o=x.useRef(null),{getToastToRender:a,isToastActive:l,count:s}=P5(t),{className:c,style:d,rtl:f,containerId:m,hotKeys:p}=t;function h(w){let g=hi("Toastify__toast-container",`Toastify__toast-container--${w}`,{"Toastify__toast-container--rtl":f});return cr(c)?c({position:w,rtl:f,defaultClassName:g}):hi(g,Jh(c))}function y(){n&&(i(!0),X.play())}return T5(()=>{var w;if(n){let g=o.current.querySelectorAll('[data-in="true"]'),v=12,b=(w=t.position)==null?void 0:w.includes("top"),C=0,S=0;Array.from(g).reverse().forEach((P,k)=>{let _=P;_.classList.add("Toastify__toast--stacked"),k>0&&(_.dataset.collapsed=`${r}`),_.dataset.pos||(_.dataset.pos=b?"top":"bot");let T=C*(r?.2:1)+(r?0:v*k);_.style.setProperty("--y",`${b?T:T*-1}px`),_.style.setProperty("--g",`${v}`),_.style.setProperty("--s",`${1-(r?S:0)}`),C+=_.offsetHeight,S+=.025})}},[r,s,n]),x.useEffect(()=>{function w(g){var v;let b=o.current;p(g)&&((v=b.querySelector('[tabIndex="0"]'))==null||v.focus(),i(!1),X.pause()),g.key==="Escape"&&(document.activeElement===b||b!=null&&b.contains(document.activeElement))&&(i(!0),X.play())}return document.addEventListener("keydown",w),()=>{document.removeEventListener("keydown",w)}},[p]),Q.createElement("section",{ref:o,className:"Toastify",id:m,onMouseEnter:()=>{n&&(i(!1),X.pause())},onMouseLeave:y,"aria-live":"polite","aria-atomic":"false","aria-relevant":"additions text","aria-label":t["aria-label"]},a((w,g)=>{let v=g.length?{...d}:{...d,pointerEvents:"none"};return Q.createElement("div",{tabIndex:-1,className:h(w),"data-stacked":n,style:v,key:`c-${w}`},g.map(({content:b,props:C})=>Q.createElement(R5,{...C,stacked:n,collapseAll:y,isIn:l(C.toastId,C.containerId),key:`t-${C.key}`},b)))}))}const ur="/assets/nofoto-2f8d9d99.png",B5=E.div`
`,V5=E.div`
display: flex;
    justify-content: space-between;
    align-items: center;
        margin-bottom: 10px;

    
`,W5=E.h2`
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

`,U5=E.div`
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
      
`;E.div``;const H5=E.div`
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
`,G5=E.div`
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
`,aC=E.div`
  position: relative;
  display: block;
 `,Yu=E.div`
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
`,Kg=E.div`
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
`,Qg=E.div`
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
`,q5=E.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  padding:10px;
`,Y5=E.div`
margin-top: auto;
  padding: 10px;
      display: flex;
    align-content: center;
    align-items: center;
        justify-content: space-between;
`,X5=E.p`
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
`;E.p`
     font-size: 17px;
    font-weight: 800;

`;const sC=E.div.attrs({className:"card-buttons"})`
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
`,Uc=E.button`
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
`;E.svg`
  width: 24px;
  height: 24px;
  fill: var(--white-color);
`;E.svg`
  width: 24px;
  height: 24px;
  fill: var(--white-color);
`;const K5=E.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  flex-wrap: wrap;
  gap: 5px;
`,Ff=E.button`
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
`,Q5=E.div`
  position: relative;
  display: inline-block;
   @media screen and (max-width: 768px) {
  display:none;
  }

`,Z5=E.button`
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
`,J5=E.div`
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
`,Fi=E.div`
  padding: 10px 12px;
  cursor: pointer;

  &:hover {
    background: #f0f0f0;
  }
`,lC=E.div`
  text-align: center;
  width: 100px;
 
`,cC=E.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 2px;
`,uC=E.span`
  font-size: 18px;
  font-weight: 600;
  color: ${({$discount:e})=>"#111"};
`,dC=E.span`
  font-size: 13px;
  color: #999;
  text-decoration: line-through;
`,fC=E.span`
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
`;function rt(e){return`Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}var eI=(()=>typeof Symbol=="function"&&Symbol.observable||"@@observable")(),zy=eI,zf=()=>Math.random().toString(36).substring(7).split("").join("."),tI={INIT:`@@redux/INIT${zf()}`,REPLACE:`@@redux/REPLACE${zf()}`,PROBE_UNKNOWN_ACTION:()=>`@@redux/PROBE_UNKNOWN_ACTION${zf()}`},Hc=tI;function Zg(e){if(typeof e!="object"||e===null)return!1;let t=e;for(;Object.getPrototypeOf(t)!==null;)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t||Object.getPrototypeOf(e)===null}function Jg(e,t,n){if(typeof e!="function")throw new Error(rt(2));if(typeof t=="function"&&typeof n=="function"||typeof n=="function"&&typeof arguments[3]=="function")throw new Error(rt(0));if(typeof t=="function"&&typeof n>"u"&&(n=t,t=void 0),typeof n<"u"){if(typeof n!="function")throw new Error(rt(1));return n(Jg)(e,t)}let r=e,i=t,o=new Map,a=o,l=0,s=!1;function c(){a===o&&(a=new Map,o.forEach((w,g)=>{a.set(g,w)}))}function d(){if(s)throw new Error(rt(3));return i}function f(w){if(typeof w!="function")throw new Error(rt(4));if(s)throw new Error(rt(5));let g=!0;c();const v=l++;return a.set(v,w),function(){if(g){if(s)throw new Error(rt(6));g=!1,c(),a.delete(v),o=null}}}function m(w){if(!Zg(w))throw new Error(rt(7));if(typeof w.type>"u")throw new Error(rt(8));if(typeof w.type!="string")throw new Error(rt(17));if(s)throw new Error(rt(9));try{s=!0,i=r(i,w)}finally{s=!1}return(o=a).forEach(v=>{v()}),w}function p(w){if(typeof w!="function")throw new Error(rt(10));r=w,m({type:Hc.REPLACE})}function h(){const w=f;return{subscribe(g){if(typeof g!="object"||g===null)throw new Error(rt(11));function v(){const C=g;C.next&&C.next(d())}return v(),{unsubscribe:w(v)}},[zy](){return this}}}return m({type:Hc.INIT}),{dispatch:m,subscribe:f,getState:d,replaceReducer:p,[zy]:h}}function nI(e){Object.keys(e).forEach(t=>{const n=e[t];if(typeof n(void 0,{type:Hc.INIT})>"u")throw new Error(rt(12));if(typeof n(void 0,{type:Hc.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(rt(13))})}function rI(e){const t=Object.keys(e),n={};for(let o=0;o<t.length;o++){const a=t[o];typeof e[a]=="function"&&(n[a]=e[a])}const r=Object.keys(n);let i;try{nI(n)}catch(o){i=o}return function(a={},l){if(i)throw i;let s=!1;const c={};for(let d=0;d<r.length;d++){const f=r[d],m=n[f],p=a[f],h=m(p,l);if(typeof h>"u")throw l&&l.type,new Error(rt(14));c[f]=h,s=s||h!==p}return s=s||r.length!==Object.keys(a).length,s?c:a}}function Gc(...e){return e.length===0?t=>t:e.length===1?e[0]:e.reduce((t,n)=>(...r)=>t(n(...r)))}function iI(...e){return t=>(n,r)=>{const i=t(n,r);let o=()=>{throw new Error(rt(15))};const a={getState:i.getState,dispatch:(s,...c)=>o(s,...c)},l=e.map(s=>s(a));return o=Gc(...l)(i.dispatch),{...i,dispatch:o}}}function oI(e){return Zg(e)&&"type"in e&&typeof e.type=="string"}var pC=Symbol.for("immer-nothing"),Ny=Symbol.for("immer-draftable"),St=Symbol.for("immer-state");function mn(e,...t){throw new Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)}var Vt=Object,$o=Vt.getPrototypeOf,qc="constructor",Xu="prototype",rm="configurable",Yc="enumerable",Ql="writable",vs="value",dr=e=>!!e&&!!e[St];function Sn(e){var t;return e?hC(e)||Qu(e)||!!e[Ny]||!!((t=e[qc])!=null&&t[Ny])||Zu(e)||Ju(e):!1}var aI=Vt[Xu][qc].toString(),By=new WeakMap;function hC(e){if(!e||!e0(e))return!1;const t=$o(e);if(t===null||t===Vt[Xu])return!0;const n=Vt.hasOwnProperty.call(t,qc)&&t[qc];if(n===Object)return!0;if(!Yi(n))return!1;let r=By.get(n);return r===void 0&&(r=Function.toString.call(n),By.set(n,r)),r===aI}function Ku(e,t,n=!0){Ds(e)===0?(n?Reflect.ownKeys(e):Vt.keys(e)).forEach(i=>{t(i,e[i],e)}):e.forEach((r,i)=>t(i,r,e))}function Ds(e){const t=e[St];return t?t.type_:Qu(e)?1:Zu(e)?2:Ju(e)?3:0}var Vy=(e,t,n=Ds(e))=>n===2?e.has(t):Vt[Xu].hasOwnProperty.call(e,t),im=(e,t,n=Ds(e))=>n===2?e.get(t):e[t],Xc=(e,t,n,r=Ds(e))=>{r===2?e.set(t,n):r===3?e.add(n):e[t]=n};function sI(e,t){return e===t?e!==0||1/e===1/t:e!==e&&t!==t}var Qu=Array.isArray,Zu=e=>e instanceof Map,Ju=e=>e instanceof Set,e0=e=>typeof e=="object",Yi=e=>typeof e=="function",Nf=e=>typeof e=="boolean";function lI(e){const t=+e;return Number.isInteger(t)&&String(t)===e}var Zn=e=>e.copy_||e.base_,t0=e=>e.modified_?e.copy_:e.base_;function om(e,t){if(Zu(e))return new Map(e);if(Ju(e))return new Set(e);if(Qu(e))return Array[Xu].slice.call(e);const n=hC(e);if(t===!0||t==="class_only"&&!n){const r=Vt.getOwnPropertyDescriptors(e);delete r[St];let i=Reflect.ownKeys(r);for(let o=0;o<i.length;o++){const a=i[o],l=r[a];l[Ql]===!1&&(l[Ql]=!0,l[rm]=!0),(l.get||l.set)&&(r[a]={[rm]:!0,[Ql]:!0,[Yc]:l[Yc],[vs]:e[a]})}return Vt.create($o(e),r)}else{const r=$o(e);if(r!==null&&n)return{...e};const i=Vt.create(r);return Vt.assign(i,e)}}function n0(e,t=!1){return ed(e)||dr(e)||!Sn(e)||(Ds(e)>1&&Vt.defineProperties(e,{set:ul,add:ul,clear:ul,delete:ul}),Vt.freeze(e),t&&Ku(e,(n,r)=>{n0(r,!0)},!1)),e}function cI(){mn(2)}var ul={[vs]:cI};function ed(e){return e===null||!e0(e)?!0:Vt.isFrozen(e)}var Kc="MapSet",am="Patches",Wy="ArrayMethods",mC={};function Ci(e){const t=mC[e];return t||mn(0,e),t}var Uy=e=>!!mC[e],ys,gC=()=>ys,uI=(e,t)=>({drafts_:[],parent_:e,immer_:t,canAutoFreeze_:!0,unfinalizedDrafts_:0,handledSet_:new Set,processedForPatches_:new Set,mapSetPlugin_:Uy(Kc)?Ci(Kc):void 0,arrayMethodsPlugin_:Uy(Wy)?Ci(Wy):void 0});function Hy(e,t){t&&(e.patchPlugin_=Ci(am),e.patches_=[],e.inversePatches_=[],e.patchListener_=t)}function sm(e){lm(e),e.drafts_.forEach(dI),e.drafts_=null}function lm(e){e===ys&&(ys=e.parent_)}var Gy=e=>ys=uI(ys,e);function dI(e){const t=e[St];t.type_===0||t.type_===1?t.revoke_():t.revoked_=!0}function qy(e,t){t.unfinalizedDrafts_=t.drafts_.length;const n=t.drafts_[0];if(e!==void 0&&e!==n){n[St].modified_&&(sm(t),mn(4)),Sn(e)&&(e=Yy(t,e));const{patchPlugin_:i}=t;i&&i.generateReplacementPatches_(n[St].base_,e,t)}else e=Yy(t,n);return fI(t,e,!0),sm(t),t.patches_&&t.patchListener_(t.patches_,t.inversePatches_),e!==pC?e:void 0}function Yy(e,t){if(ed(t))return t;const n=t[St];if(!n)return Qc(t,e.handledSet_,e);if(!td(n,e))return t;if(!n.modified_)return n.base_;if(!n.finalized_){const{callbacks_:r}=n;if(r)for(;r.length>0;)r.pop()(e);xC(n,e)}return n.copy_}function fI(e,t,n=!1){!e.parent_&&e.immer_.autoFreeze_&&e.canAutoFreeze_&&n0(t,n)}function vC(e){e.finalized_=!0,e.scope_.unfinalizedDrafts_--}var td=(e,t)=>e.scope_===t,pI=[];function yC(e,t,n,r){const i=Zn(e),o=e.type_;if(r!==void 0&&im(i,r,o)===t){Xc(i,r,n,o);return}if(!e.draftLocations_){const l=e.draftLocations_=new Map;Ku(i,(s,c)=>{if(dr(c)){const d=l.get(c)||[];d.push(s),l.set(c,d)}})}const a=e.draftLocations_.get(t)??pI;for(const l of a)Xc(i,l,n,o)}function hI(e,t,n){e.callbacks_.push(function(i){var l;const o=t;if(!o||!td(o,i))return;(l=i.mapSetPlugin_)==null||l.fixSetContents(o);const a=t0(o);yC(e,o.draft_??o,a,n),xC(o,i)})}function xC(e,t){var r;if(e.modified_&&!e.finalized_&&(e.type_===3||e.type_===1&&e.allIndicesReassigned_||(((r=e.assigned_)==null?void 0:r.size)??0)>0)){const{patchPlugin_:i}=t;if(i){const o=i.getPath(e);o&&i.generatePatches_(e,o,t)}vC(e)}}function mI(e,t,n){const{scope_:r}=e;if(dr(n)){const i=n[St];td(i,r)&&i.callbacks_.push(function(){Zl(e);const a=t0(i);yC(e,n,a,t)})}else Sn(n)&&e.callbacks_.push(function(){const o=Zn(e);e.type_===3?o.has(n)&&Qc(n,r.handledSet_,r):im(o,t,e.type_)===n&&r.drafts_.length>1&&(e.assigned_.get(t)??!1)===!0&&e.copy_&&Qc(im(e.copy_,t,e.type_),r.handledSet_,r)})}function Qc(e,t,n){return!n.immer_.autoFreeze_&&n.unfinalizedDrafts_<1||dr(e)||t.has(e)||!Sn(e)||ed(e)||(t.add(e),Ku(e,(r,i)=>{if(dr(i)){const o=i[St];if(td(o,n)){const a=t0(o);Xc(e,r,a,e.type_),vC(o)}}else Sn(i)&&Qc(i,t,n)})),e}function gI(e,t){const n=Qu(e),r={type_:n?1:0,scope_:t?t.scope_:gC(),modified_:!1,finalized_:!1,assigned_:void 0,parent_:t,base_:e,draft_:null,copy_:null,revoke_:null,isManual_:!1,callbacks_:void 0};let i=r,o=Zc;n&&(i=[r],o=xs);const{revoke:a,proxy:l}=Proxy.revocable(i,o);return r.draft_=l,r.revoke_=a,[l,r]}var Zc={get(e,t){if(t===St)return e;let n=e.scope_.arrayMethodsPlugin_;const r=e.type_===1&&typeof t=="string";if(r&&n!=null&&n.isArrayOperationMethod(t))return n.createMethodInterceptor(e,t);const i=Zn(e);if(!Vy(i,t,e.type_))return vI(e,i,t);const o=i[t];if(e.finalized_||!Sn(o)||r&&e.operationMethod&&(n!=null&&n.isMutatingArrayMethod(e.operationMethod))&&lI(t))return o;if(o===Bf(e.base_,t)){Zl(e);const a=e.type_===1?+t:t,l=um(e.scope_,o,e,a);return e.copy_[a]=l}return o},has(e,t){return t in Zn(e)},ownKeys(e){return Reflect.ownKeys(Zn(e))},set(e,t,n){const r=bC(Zn(e),t);if(r!=null&&r.set)return r.set.call(e.draft_,n),!0;if(!e.modified_){const i=Bf(Zn(e),t),o=i==null?void 0:i[St];if(o&&o.base_===n)return e.copy_[t]=n,e.assigned_.set(t,!1),!0;if(sI(n,i)&&(n!==void 0||Vy(e.base_,t,e.type_)))return!0;Zl(e),cm(e)}return e.copy_[t]===n&&(n!==void 0||t in e.copy_)||Number.isNaN(n)&&Number.isNaN(e.copy_[t])||(e.copy_[t]=n,e.assigned_.set(t,!0),mI(e,t,n)),!0},deleteProperty(e,t){return Zl(e),Bf(e.base_,t)!==void 0||t in e.base_?(e.assigned_.set(t,!1),cm(e)):e.assigned_.delete(t),e.copy_&&delete e.copy_[t],!0},getOwnPropertyDescriptor(e,t){const n=Zn(e),r=Reflect.getOwnPropertyDescriptor(n,t);return r&&{[Ql]:!0,[rm]:e.type_!==1||t!=="length",[Yc]:r[Yc],[vs]:n[t]}},defineProperty(){mn(11)},getPrototypeOf(e){return $o(e.base_)},setPrototypeOf(){mn(12)}},xs={};for(let e in Zc){let t=Zc[e];xs[e]=function(){const n=arguments;return n[0]=n[0][0],t.apply(this,n)}}xs.deleteProperty=function(e,t){return xs.set.call(this,e,t,void 0)};xs.set=function(e,t,n){return Zc.set.call(this,e[0],t,n,e[0])};function Bf(e,t){const n=e[St];return(n?Zn(n):e)[t]}function vI(e,t,n){var i;const r=bC(t,n);return r?vs in r?r[vs]:(i=r.get)==null?void 0:i.call(e.draft_):void 0}function bC(e,t){if(!(t in e))return;let n=$o(e);for(;n;){const r=Object.getOwnPropertyDescriptor(n,t);if(r)return r;n=$o(n)}}function cm(e){e.modified_||(e.modified_=!0,e.parent_&&cm(e.parent_))}function Zl(e){e.copy_||(e.assigned_=new Map,e.copy_=om(e.base_,e.scope_.immer_.useStrictShallowCopy_))}var yI=class{constructor(e){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.useStrictIteration_=!1,this.produce=(t,n,r)=>{if(Yi(t)&&!Yi(n)){const o=n;n=t;const a=this;return function(s=o,...c){return a.produce(s,d=>n.call(this,d,...c))}}Yi(n)||mn(6),r!==void 0&&!Yi(r)&&mn(7);let i;if(Sn(t)){const o=Gy(this),a=um(o,t,void 0);let l=!0;try{i=n(a),l=!1}finally{l?sm(o):lm(o)}return Hy(o,r),qy(i,o)}else if(!t||!e0(t)){if(i=n(t),i===void 0&&(i=t),i===pC&&(i=void 0),this.autoFreeze_&&n0(i,!0),r){const o=[],a=[];Ci(am).generateReplacementPatches_(t,i,{patches_:o,inversePatches_:a}),r(o,a)}return i}else mn(1,t)},this.produceWithPatches=(t,n)=>{if(Yi(t))return(a,...l)=>this.produceWithPatches(a,s=>t(s,...l));let r,i;return[this.produce(t,n,(a,l)=>{r=a,i=l}),r,i]},Nf(e==null?void 0:e.autoFreeze)&&this.setAutoFreeze(e.autoFreeze),Nf(e==null?void 0:e.useStrictShallowCopy)&&this.setUseStrictShallowCopy(e.useStrictShallowCopy),Nf(e==null?void 0:e.useStrictIteration)&&this.setUseStrictIteration(e.useStrictIteration)}createDraft(e){Sn(e)||mn(8),dr(e)&&(e=xI(e));const t=Gy(this),n=um(t,e,void 0);return n[St].isManual_=!0,lm(t),n}finishDraft(e,t){const n=e&&e[St];(!n||!n.isManual_)&&mn(9);const{scope_:r}=n;return Hy(r,t),qy(void 0,r)}setAutoFreeze(e){this.autoFreeze_=e}setUseStrictShallowCopy(e){this.useStrictShallowCopy_=e}setUseStrictIteration(e){this.useStrictIteration_=e}shouldUseStrictIteration(){return this.useStrictIteration_}applyPatches(e,t){let n;for(n=t.length-1;n>=0;n--){const i=t[n];if(i.path.length===0&&i.op==="replace"){e=i.value;break}}n>-1&&(t=t.slice(n+1));const r=Ci(am).applyPatches_;return dr(e)?r(e,t):this.produce(e,i=>r(i,t))}};function um(e,t,n,r){const[i,o]=Zu(t)?Ci(Kc).proxyMap_(t,n):Ju(t)?Ci(Kc).proxySet_(t,n):gI(t,n);return((n==null?void 0:n.scope_)??gC()).drafts_.push(i),o.callbacks_=(n==null?void 0:n.callbacks_)??[],o.key_=r,n&&r!==void 0?hI(n,o,r):o.callbacks_.push(function(s){var d;(d=s.mapSetPlugin_)==null||d.fixSetContents(o);const{patchPlugin_:c}=s;o.modified_&&c&&c.generatePatches_(o,[],s)}),i}function xI(e){return dr(e)||mn(10,e),wC(e)}function wC(e){if(!Sn(e)||ed(e))return e;const t=e[St];let n,r=!0;if(t){if(!t.modified_)return t.base_;t.finalized_=!0,n=om(e,t.scope_.immer_.useStrictShallowCopy_),r=t.scope_.immer_.shouldUseStrictIteration()}else n=om(e,!0);return Ku(n,(i,o)=>{Xc(n,i,wC(o))},r),t&&(t.finalized_=!1),n}var bI=new yI,SC=bI.produce;function CC(e){return({dispatch:n,getState:r})=>i=>o=>typeof o=="function"?o(n,r,e):i(o)}var wI=CC(),SI=CC,CI=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?Gc:Gc.apply(null,arguments)};function Xy(e,t){function n(...r){if(t){let i=t(...r);if(!i)throw new Error(rr(0));return{type:e,payload:i.payload,..."meta"in i&&{meta:i.meta},..."error"in i&&{error:i.error}}}return{type:e,payload:r[0]}}return n.toString=()=>`${e}`,n.type=e,n.match=r=>oI(r)&&r.type===e,n}var EC=class _a extends Array{constructor(...t){super(...t),Object.setPrototypeOf(this,_a.prototype)}static get[Symbol.species](){return _a}concat(...t){return super.concat.apply(this,t)}prepend(...t){return t.length===1&&Array.isArray(t[0])?new _a(...t[0].concat(this)):new _a(...t.concat(this))}};function Ky(e){return Sn(e)?SC(e,()=>{}):e}function dl(e,t,n){return e.has(t)?e.get(t):e.set(t,n(t)).get(t)}function EI(e){return typeof e=="boolean"}var _I=()=>function(t){const{thunk:n=!0,immutableCheck:r=!0,serializableCheck:i=!0,actionCreatorCheck:o=!0}=t??{};let a=new EC;return n&&(EI(n)?a.push(wI):a.push(SI(n.extraArgument))),a},kI="RTK_autoBatch",Qy=e=>t=>{setTimeout(t,e)},PI=(e={type:"raf"})=>t=>(...n)=>{const r=t(...n);let i=!0,o=!1,a=!1;const l=new Set,s=e.type==="tick"?queueMicrotask:e.type==="raf"?typeof window<"u"&&window.requestAnimationFrame?window.requestAnimationFrame:Qy(10):e.type==="callback"?e.queueNotification:Qy(e.timeout),c=()=>{a=!1,o&&(o=!1,l.forEach(d=>d()))};return Object.assign({},r,{subscribe(d){const f=()=>i&&d(),m=r.subscribe(f);return l.add(d),()=>{m(),l.delete(d)}},dispatch(d){var f;try{return i=!((f=d==null?void 0:d.meta)!=null&&f[kI]),o=!i,o&&(a||(a=!0,s(c))),r.dispatch(d)}finally{i=!0}}})},OI=e=>function(n){const{autoBatch:r=!0}=n??{};let i=new EC(e);return r&&i.push(PI(typeof r=="object"?r:void 0)),i};function TI(e){const t=_I(),{reducer:n=void 0,middleware:r,devTools:i=!0,duplicateMiddlewareCheck:o=!0,preloadedState:a=void 0,enhancers:l=void 0}=e||{};let s;if(typeof n=="function")s=n;else if(Zg(n))s=rI(n);else throw new Error(rr(1));let c;typeof r=="function"?c=r(t):c=t();let d=Gc;i&&(d=CI({trace:!1,...typeof i=="object"&&i}));const f=iI(...c),m=OI(f);let p=typeof l=="function"?l(m):m();const h=d(...p);return Jg(s,a,h)}function _C(e){const t={},n=[];let r;const i={addCase(o,a){const l=typeof o=="string"?o:o.type;if(!l)throw new Error(rr(28));if(l in t)throw new Error(rr(29));return t[l]=a,i},addAsyncThunk(o,a){return a.pending&&(t[o.pending.type]=a.pending),a.rejected&&(t[o.rejected.type]=a.rejected),a.fulfilled&&(t[o.fulfilled.type]=a.fulfilled),a.settled&&n.push({matcher:o.settled,reducer:a.settled}),i},addMatcher(o,a){return n.push({matcher:o,reducer:a}),i},addDefaultCase(o){return r=o,i}};return e(i),[t,n,r]}function jI(e){return typeof e=="function"}function $I(e,t){let[n,r,i]=_C(t),o;if(jI(e))o=()=>Ky(e());else{const l=Ky(e);o=()=>l}function a(l=o(),s){let c=[n[s.type],...r.filter(({matcher:d})=>d(s)).map(({reducer:d})=>d)];return c.filter(d=>!!d).length===0&&(c=[i]),c.reduce((d,f)=>{if(f)if(dr(d)){const p=f(d,s);return p===void 0?d:p}else{if(Sn(d))return SC(d,m=>f(m,s));{const m=f(d,s);if(m===void 0){if(d===null)return d;throw Error("A case reducer on a non-draftable value must not return undefined")}return m}}return d},l)}return a.getInitialState=o,a}var II=Symbol.for("rtk-slice-createasyncthunk");function MI(e,t){return`${e}/${t}`}function AI({creators:e}={}){var n;const t=(n=e==null?void 0:e.asyncThunk)==null?void 0:n[II];return function(i){const{name:o,reducerPath:a=o}=i;if(!o)throw new Error(rr(11));typeof process<"u";const l=(typeof i.reducers=="function"?i.reducers(LI()):i.reducers)||{},s=Object.keys(l),c={sliceCaseReducersByName:{},sliceCaseReducersByType:{},actionCreators:{},sliceMatchers:[]},d={addCase(C,S){const P=typeof C=="string"?C:C.type;if(!P)throw new Error(rr(12));if(P in c.sliceCaseReducersByType)throw new Error(rr(13));return c.sliceCaseReducersByType[P]=S,d},addMatcher(C,S){return c.sliceMatchers.push({matcher:C,reducer:S}),d},exposeAction(C,S){return c.actionCreators[C]=S,d},exposeCaseReducer(C,S){return c.sliceCaseReducersByName[C]=S,d}};s.forEach(C=>{const S=l[C],P={reducerName:C,type:MI(o,C),createNotation:typeof i.reducers=="function"};FI(S)?NI(P,S,d,t):RI(P,S,d)});function f(){const[C={},S=[],P=void 0]=typeof i.extraReducers=="function"?_C(i.extraReducers):[i.extraReducers],k={...C,...c.sliceCaseReducersByType};return $I(i.initialState,_=>{for(let T in k)_.addCase(T,k[T]);for(let T of c.sliceMatchers)_.addMatcher(T.matcher,T.reducer);for(let T of S)_.addMatcher(T.matcher,T.reducer);P&&_.addDefaultCase(P)})}const m=C=>C,p=new Map,h=new WeakMap;let y;function w(C,S){return y||(y=f()),y(C,S)}function g(){return y||(y=f()),y.getInitialState()}function v(C,S=!1){function P(_){let T=_[C];return typeof T>"u"&&S&&(T=dl(h,P,g)),T}function k(_=m){const T=dl(p,S,()=>new WeakMap);return dl(T,_,()=>{const $={};for(const[I,M]of Object.entries(i.selectors??{}))$[I]=DI(M,_,()=>dl(h,_,g),S);return $})}return{reducerPath:C,getSelectors:k,get selectors(){return k(P)},selectSlice:P}}const b={name:o,reducer:w,actions:c.actionCreators,caseReducers:c.sliceCaseReducersByName,getInitialState:g,...v(a),injectInto(C,{reducerPath:S,...P}={}){const k=S??a;return C.inject({reducerPath:k,reducer:w},P),{...b,...v(k,!0)}}};return b}}function DI(e,t,n,r){function i(o,...a){let l=t(o);return typeof l>"u"&&r&&(l=n()),e(l,...a)}return i.unwrapped=e,i}var kC=AI();function LI(){function e(t,n){return{_reducerDefinitionType:"asyncThunk",payloadCreator:t,...n}}return e.withTypes=()=>e,{reducer(t){return Object.assign({[t.name](...n){return t(...n)}}[t.name],{_reducerDefinitionType:"reducer"})},preparedReducer(t,n){return{_reducerDefinitionType:"reducerWithPrepare",prepare:t,reducer:n}},asyncThunk:e}}function RI({type:e,reducerName:t,createNotation:n},r,i){let o,a;if("reducer"in r){if(n&&!zI(r))throw new Error(rr(17));o=r.reducer,a=r.prepare}else o=r;i.addCase(e,o).exposeCaseReducer(t,o).exposeAction(t,a?Xy(e,a):Xy(e))}function FI(e){return e._reducerDefinitionType==="asyncThunk"}function zI(e){return e._reducerDefinitionType==="reducerWithPrepare"}function NI({type:e,reducerName:t},n,r,i){if(!i)throw new Error(rr(18));const{payloadCreator:o,fulfilled:a,pending:l,rejected:s,settled:c,options:d}=n,f=i(e,o,d);r.exposeAction(t,f),a&&r.addCase(f.fulfilled,a),l&&r.addCase(f.pending,l),s&&r.addCase(f.rejected,s),c&&r.addMatcher(f.settled,c),r.exposeCaseReducer(t,{fulfilled:a||fl,pending:l||fl,rejected:s||fl,settled:c||fl})}function fl(){}function rr(e){return`Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}const PC=kC({name:"favorites",initialState:{items:[]},reducers:{toggleFavorite:(e,t)=>{const n=t.payload;e.items.find(i=>i.id===n.id)?e.items=e.items.filter(i=>i.id!==n.id):e.items.push(n)},clearFavorite:e=>{e.items=[]},setFavorites(e,t){e.items=t.payload},addFavorite(e,t){e.items.some(r=>r.id===t.payload.id)||e.items.push(t.payload)},removeFavorite(e,t){e.items=e.items.filter(n=>n.id!==t.payload)}}}),{toggleFavorite:BY,clearFavorite:Ls,addFavorite:Zy,removeFavorite:Jy,setFavorites:BI}=PC.actions,VI=PC.reducer,WI=async(e,t,n,r)=>{const i=t==null?void 0:t.find(a=>{var l;return((l=a.product)==null?void 0:l.documentId)===(e==null?void 0:e.documentId)});if(i){const a=i.user.map(l=>l.documentId);if(!a.includes(n)){a.push(n);const l=await fetch(`https://backenddidiv-production.up.railway.app/api/favorites/${i.documentId}`,{method:"PUT",headers:{"Content-Type":"application/json",Authorization:`Bearer ${r}`},body:JSON.stringify({data:{user:a}})});if(!l.ok)throw new Error("Не вдалося оновити favorite");return await l.json()}return i}const o=await fetch("https://backenddidiv-production.up.railway.app/api/favorites",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${r}`},body:JSON.stringify({data:{product:e.documentId,user:[n]}})});if(!o.ok)throw new Error("Не вдалося створити favorite");return await o.json()},UI=async(e,t,n,r)=>{var l;const i=t==null?void 0:t.find(s=>{var c;return((c=s.product)==null?void 0:c.documentId)===(e==null?void 0:e.documentId)});if(!i)return;const o=(l=i.user)==null?void 0:l.filter(s=>s.documentId!==n).map(s=>s.documentId);if((o==null?void 0:o.length)===0){if(!(await fetch(`https://backenddidiv-production.up.railway.app/api/favorites/${i.documentId}`,{method:"DELETE",headers:{Authorization:`Bearer ${r}`}})).ok)throw new Error("Не вдалося видалити favorite");return}const a=await fetch(`https://backenddidiv-production.up.railway.app/api/favorites/${i.documentId}`,{method:"PUT",headers:{"Content-Type":"application/json",Authorization:`Bearer ${r}`},body:JSON.stringify({data:{user:o}})});if(!a.ok)throw new Error("Не вдалося оновити favorite");return await a.json()},Ti=async(e,t,n,r)=>{const i=localStorage.getItem("token"),o=JSON.parse(localStorage.getItem("user"));if(!i||!o)return t?(n(Jy(e.id)),r.warning(`${e.name} видалено з обраного`)):(n(Zy(e)),r.success(`${e.name} додано в обране`)),!0;const a=o.documentId,l=o.id;try{const s=await fetch(`https://backenddidiv-production.up.railway.app/api/users/${l}?populate[favorites][populate][0]=product&populate[favorites][populate][1]=user`,{headers:{Authorization:`Bearer ${i}`}});if(!s.ok)throw new Error("Не вдалося отримати favorites користувача");const c=await s.json(),d=await fetch("https://backenddidiv-production.up.railway.app/api/favorites?populate=*",{headers:{Authorization:`Bearer ${i}`}}),{data:f}=await d.json(),m=c==null?void 0:c.favorites;return t?(await UI(e,m,a,i),n(Jy(e.id)),r.warning(`${e.name} видалено з обраного`),!0):(await WI(e,f,a,i),n(Zy(e)),r.success(`${e.name} додано в обране`),!0)}catch{return r.error("Не вдалося оновити обране"),!1}},OC=kC({name:"cart",initialState:{items:[]},reducers:{addToCart:(e,t)=>{const n=t.payload,r=e.items.find(i=>i.id===n.id);if(r){if(r.quantity>=n.stock)return;r.quantity+=1}else e.items.push({...n,quantity:1})},setCartItemQuantity:(e,t)=>{const{id:n,quantity:r}=t.payload,i=e.items.find(o=>o.id===n);i&&(i.quantity=r)},removeFromCart:(e,t)=>{const n=t.payload;e.items=e.items.filter(r=>r.id!==n.id)},clearCart:e=>{e.items=[]},addAllToCart:(e,t)=>{const n=t.payload.map(r=>({...r,quantity:r.quantity||1}));e.items.push(...n)},setCartItems:(e,t)=>{e.items=t.payload},incrementQuantity:(e,t)=>{const{id:n,stock:r}=t.payload,i=e.items.find(o=>o.id===n);i&&i.quantity<r&&(i.quantity+=1)},decrementQuantity:(e,t)=>{const n=e.items.find(r=>r.id===t.payload);n&&n.quantity>1&&(n.quantity-=1)}}}),{setCartItems:TC,addToCart:e1,setCartItemQuantity:t1,removeFromCart:jC,clearCart:fr,addAllToCart:HI,incrementQuantity:n1,decrementQuantity:r1}=OC.actions,GI=OC.reducer,qI=async(e,t,n,r)=>{const i=await fetch("https://backenddidiv-production.up.railway.app/api/cart-items",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${r}`},body:JSON.stringify({data:{product:e,quantity:t,user:n}})});if(!i.ok)throw new Error("Не вдалося створити CartItem");return i.json()},YI=async(e,t,n)=>{const r=await fetch(`https://backenddidiv-production.up.railway.app/api/cart-items/${e}`,{method:"PUT",headers:{"Content-Type":"application/json",Authorization:`Bearer ${n}`},body:JSON.stringify({data:{quantity:t}})});if(!r.ok)throw new Error("Не вдалося оновити CartItem");return r.json()},Ho=async(e,t,n,r)=>{const i=localStorage.getItem("token"),o=JSON.parse(localStorage.getItem("user"));if(!i||!o){for(let l=0;l<t;l++)n(e1(e));return r.success(`${e.name} додано в кошик!`),!0}const a=o.id;try{const l=await fetch(`https://backenddidiv-production.up.railway.app/api/cart-items?filters[user][id][$eq]=${a}&populate=product`,{headers:{Authorization:`Bearer ${i}`}});if(!l.ok)throw new Error("Не вдалося отримати кошик користувача");const{data:s}=await l.json(),c=s.find(d=>{var f;return((f=d.product)==null?void 0:f.documentId)===e.documentId});if(c){const d=c.quantity+t;if(d>e.stock)return r.warning(`Доступно лише ${e.stock} шт.`),!1;await YI(c.documentId,d,i),n(t1({id:e.id,quantity:d}))}else await qI(e.documentId,t,a,i),n(e1({...e})),t>1&&n(t1({id:e.id,quantity:t}));return r.success(`${e.name} додано в кошик!`),!0}catch(l){return console.error(l),r.error("Не вдалося додати товар у кошик"),!1}},$C=()=>{const e=Lt(),[t,n]=x.useState([]),r=Ge(s=>s.favorites.items),i=Ge(s=>s.cart.items),o=et();x.useEffect(()=>{const s=new Date,c=new Date;c.setDate(s.getDate()-7);const d=c.toISOString();fetch(`https://backenddidiv-production.up.railway.app/api/products?populate=*&filters[createdAt][$gte]=${d}`).then(f=>f.json()).then(f=>n(f.data)).catch(f=>console.error("Помилка завантаження нових товарів:",f))},[]);const a=(s,c)=>{c.stopPropagation();const d=r.some(f=>f.id===(s==null?void 0:s.id));Ti(s,d,e,X)},l=[...t].sort(()=>Math.random()-.5).slice(0,3);return!t||t.length===0?null:u.jsxs(Y3,{children:[u.jsx(Un,{}),u.jsx(X3,{children:"Нові товари"}),u.jsxs(K3,{children:[l.map(s=>{var b;const c=r.some(C=>C.id===s.id),d=(s==null?void 0:s.available)??!0,f=(s==null?void 0:s.stock)===0,m=i.find(C=>C.id===s.id),h=(m?m.quantity:0)>=(s.stock||0),y=s.new_price&&s.new_price<s.price,w=y?s.new_price:s.price,g=y?Math.round((s.price-s.new_price)/s.price*100):0,v=async()=>{if(h){X.warning("Товар вже в кошику (досягнуто максимум)");return}if(h){X.warning(`Доступно лише ${s.stock} шт.`);return}await Ho(s,1,e,X)};return u.jsxs(Q3,{onClick:()=>o(`/product/${s.slug??s.id}`),$soldOut:f,children:[u.jsxs(J3,{children:[u.jsx(e5,{children:"Новинка"}),f&&u.jsx(Yu,{children:"Продано"}),!d&&u.jsx(Z3,{children:"Бронь"}),u.jsx("img",{src:((b=s.images)==null?void 0:b[0].url)||ur,alt:s.name,onError:C=>{C.currentTarget.onerror=null,C.currentTarget.src=ur}}),u.jsx("div",{className:"overlay"})]}),u.jsxs(t5,{children:[u.jsx(n5,{children:s.name}),u.jsxs(r5,{children:[u.jsx(lC,{children:u.jsxs(cC,{children:[u.jsxs(uC,{$discount:y,children:[w==null?void 0:w.toLocaleString()," грн"]}),y&&u.jsxs(dC,{children:[s.price.toLocaleString()," грн"]}),y&&u.jsxs(fC,{children:["-",g,"%"]})]})}),u.jsxs(sC,{children:[d&&!f&&u.jsx(Uc,{onClick:C=>v(),children:u.jsx(Uo,{size:24,color:m?"var(--orange-color)":"black",strokeWidth:2})}),!f&&u.jsx(Uc,{onClick:C=>a(s,C),children:u.jsx(Is,{size:24,fill:c?"#ff4d4f":"none",color:c?"#ff4d4f":"#000000",strokeWidth:c?1:2})})]})]})]})]},s.id)}),u.jsx(i5,{to:"/catalog/new",children:u.jsxs(o5,{children:[u.jsx("p",{children:"Усі новинки"}),u.jsx(a5,{children:u.jsx(Uu,{size:24})})]})})]})]})};function te(){return te=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},te.apply(this,arguments)}function XI(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function KI(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var QI=function(){function e(n){var r=this;this._insertTag=function(i){var o;r.tags.length===0?r.insertionPoint?o=r.insertionPoint.nextSibling:r.prepend?o=r.container.firstChild:o=r.before:o=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(i,o),r.tags.push(i)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(r){r.forEach(this._insertTag)},t.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(KI(this));var i=this.tags[this.tags.length-1];if(this.isSpeedy){var o=XI(i);try{o.insertRule(r,o.cssRules.length)}catch{}}else i.appendChild(document.createTextNode(r));this.ctr++},t.flush=function(){this.tags.forEach(function(r){return r.parentNode&&r.parentNode.removeChild(r)}),this.tags=[],this.ctr=0},e}(),dt="-ms-",Jc="-moz-",pe="-webkit-",IC="comm",r0="rule",i0="decl",ZI="@import",MC="@keyframes",JI="@layer",eM=Math.abs,nd=String.fromCharCode,tM=Object.assign;function nM(e,t){return ot(e,0)^45?(((t<<2^ot(e,0))<<2^ot(e,1))<<2^ot(e,2))<<2^ot(e,3):0}function AC(e){return e.trim()}function rM(e,t){return(e=t.exec(e))?e[0]:e}function he(e,t,n){return e.replace(t,n)}function dm(e,t){return e.indexOf(t)}function ot(e,t){return e.charCodeAt(t)|0}function bs(e,t,n){return e.slice(t,n)}function jn(e){return e.length}function o0(e){return e.length}function pl(e,t){return t.push(e),e}function iM(e,t){return e.map(t).join("")}var rd=1,Io=1,DC=0,Dt=0,Ne=0,Go="";function id(e,t,n,r,i,o,a){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:rd,column:Io,length:a,return:""}}function ua(e,t){return tM(id("",null,null,"",null,null,0),e,{length:-e.length},t)}function oM(){return Ne}function aM(){return Ne=Dt>0?ot(Go,--Dt):0,Io--,Ne===10&&(Io=1,rd--),Ne}function Ht(){return Ne=Dt<DC?ot(Go,Dt++):0,Io++,Ne===10&&(Io=1,rd++),Ne}function Fn(){return ot(Go,Dt)}function Jl(){return Dt}function Rs(e,t){return bs(Go,e,t)}function ws(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function LC(e){return rd=Io=1,DC=jn(Go=e),Dt=0,[]}function RC(e){return Go="",e}function ec(e){return AC(Rs(Dt-1,fm(e===91?e+2:e===40?e+1:e)))}function sM(e){for(;(Ne=Fn())&&Ne<33;)Ht();return ws(e)>2||ws(Ne)>3?"":" "}function lM(e,t){for(;--t&&Ht()&&!(Ne<48||Ne>102||Ne>57&&Ne<65||Ne>70&&Ne<97););return Rs(e,Jl()+(t<6&&Fn()==32&&Ht()==32))}function fm(e){for(;Ht();)switch(Ne){case e:return Dt;case 34:case 39:e!==34&&e!==39&&fm(Ne);break;case 40:e===41&&fm(e);break;case 92:Ht();break}return Dt}function cM(e,t){for(;Ht()&&e+Ne!==47+10;)if(e+Ne===42+42&&Fn()===47)break;return"/*"+Rs(t,Dt-1)+"*"+nd(e===47?e:Ht())}function uM(e){for(;!ws(Fn());)Ht();return Rs(e,Dt)}function dM(e){return RC(tc("",null,null,null,[""],e=LC(e),0,[0],e))}function tc(e,t,n,r,i,o,a,l,s){for(var c=0,d=0,f=a,m=0,p=0,h=0,y=1,w=1,g=1,v=0,b="",C=i,S=o,P=r,k=b;w;)switch(h=v,v=Ht()){case 40:if(h!=108&&ot(k,f-1)==58){dm(k+=he(ec(v),"&","&\f"),"&\f")!=-1&&(g=-1);break}case 34:case 39:case 91:k+=ec(v);break;case 9:case 10:case 13:case 32:k+=sM(h);break;case 92:k+=lM(Jl()-1,7);continue;case 47:switch(Fn()){case 42:case 47:pl(fM(cM(Ht(),Jl()),t,n),s);break;default:k+="/"}break;case 123*y:l[c++]=jn(k)*g;case 125*y:case 59:case 0:switch(v){case 0:case 125:w=0;case 59+d:g==-1&&(k=he(k,/\f/g,"")),p>0&&jn(k)-f&&pl(p>32?o1(k+";",r,n,f-1):o1(he(k," ","")+";",r,n,f-2),s);break;case 59:k+=";";default:if(pl(P=i1(k,t,n,c,d,i,l,b,C=[],S=[],f),o),v===123)if(d===0)tc(k,t,P,P,C,o,f,l,S);else switch(m===99&&ot(k,3)===110?100:m){case 100:case 108:case 109:case 115:tc(e,P,P,r&&pl(i1(e,P,P,0,0,i,l,b,i,C=[],f),S),i,S,f,l,r?C:S);break;default:tc(k,P,P,P,[""],S,0,l,S)}}c=d=p=0,y=g=1,b=k="",f=a;break;case 58:f=1+jn(k),p=h;default:if(y<1){if(v==123)--y;else if(v==125&&y++==0&&aM()==125)continue}switch(k+=nd(v),v*y){case 38:g=d>0?1:(k+="\f",-1);break;case 44:l[c++]=(jn(k)-1)*g,g=1;break;case 64:Fn()===45&&(k+=ec(Ht())),m=Fn(),d=f=jn(b=k+=uM(Jl())),v++;break;case 45:h===45&&jn(k)==2&&(y=0)}}return o}function i1(e,t,n,r,i,o,a,l,s,c,d){for(var f=i-1,m=i===0?o:[""],p=o0(m),h=0,y=0,w=0;h<r;++h)for(var g=0,v=bs(e,f+1,f=eM(y=a[h])),b=e;g<p;++g)(b=AC(y>0?m[g]+" "+v:he(v,/&\f/g,m[g])))&&(s[w++]=b);return id(e,t,n,i===0?r0:l,s,c,d)}function fM(e,t,n){return id(e,t,n,IC,nd(oM()),bs(e,2,-2),0)}function o1(e,t,n,r){return id(e,t,n,i0,bs(e,0,r),bs(e,r+1,-1),r)}function mo(e,t){for(var n="",r=o0(e),i=0;i<r;i++)n+=t(e[i],i,e,t)||"";return n}function pM(e,t,n,r){switch(e.type){case JI:if(e.children.length)break;case ZI:case i0:return e.return=e.return||e.value;case IC:return"";case MC:return e.return=e.value+"{"+mo(e.children,r)+"}";case r0:e.value=e.props.join(",")}return jn(n=mo(e.children,r))?e.return=e.value+"{"+n+"}":""}function hM(e){var t=o0(e);return function(n,r,i,o){for(var a="",l=0;l<t;l++)a+=e[l](n,r,i,o)||"";return a}}function mM(e){return function(t){t.root||(t=t.return)&&e(t)}}function gM(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var vM=function(t,n,r){for(var i=0,o=0;i=o,o=Fn(),i===38&&o===12&&(n[r]=1),!ws(o);)Ht();return Rs(t,Dt)},yM=function(t,n){var r=-1,i=44;do switch(ws(i)){case 0:i===38&&Fn()===12&&(n[r]=1),t[r]+=vM(Dt-1,n,r);break;case 2:t[r]+=ec(i);break;case 4:if(i===44){t[++r]=Fn()===58?"&\f":"",n[r]=t[r].length;break}default:t[r]+=nd(i)}while(i=Ht());return t},xM=function(t,n){return RC(yM(LC(t),n))},a1=new WeakMap,bM=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var n=t.value,r=t.parent,i=t.column===r.column&&t.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(t.props.length===1&&n.charCodeAt(0)!==58&&!a1.get(r))&&!i){a1.set(t,!0);for(var o=[],a=xM(n,o),l=r.props,s=0,c=0;s<a.length;s++)for(var d=0;d<l.length;d++,c++)t.props[c]=o[s]?a[s].replace(/&\f/g,l[d]):l[d]+" "+a[s]}}},wM=function(t){if(t.type==="decl"){var n=t.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(t.return="",t.value="")}};function FC(e,t){switch(nM(e,t)){case 5103:return pe+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return pe+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return pe+e+Jc+e+dt+e+e;case 6828:case 4268:return pe+e+dt+e+e;case 6165:return pe+e+dt+"flex-"+e+e;case 5187:return pe+e+he(e,/(\w+).+(:[^]+)/,pe+"box-$1$2"+dt+"flex-$1$2")+e;case 5443:return pe+e+dt+"flex-item-"+he(e,/flex-|-self/,"")+e;case 4675:return pe+e+dt+"flex-line-pack"+he(e,/align-content|flex-|-self/,"")+e;case 5548:return pe+e+dt+he(e,"shrink","negative")+e;case 5292:return pe+e+dt+he(e,"basis","preferred-size")+e;case 6060:return pe+"box-"+he(e,"-grow","")+pe+e+dt+he(e,"grow","positive")+e;case 4554:return pe+he(e,/([^-])(transform)/g,"$1"+pe+"$2")+e;case 6187:return he(he(he(e,/(zoom-|grab)/,pe+"$1"),/(image-set)/,pe+"$1"),e,"")+e;case 5495:case 3959:return he(e,/(image-set\([^]*)/,pe+"$1$`$1");case 4968:return he(he(e,/(.+:)(flex-)?(.*)/,pe+"box-pack:$3"+dt+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+pe+e+e;case 4095:case 3583:case 4068:case 2532:return he(e,/(.+)-inline(.+)/,pe+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(jn(e)-1-t>6)switch(ot(e,t+1)){case 109:if(ot(e,t+4)!==45)break;case 102:return he(e,/(.+:)(.+)-([^]+)/,"$1"+pe+"$2-$3$1"+Jc+(ot(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~dm(e,"stretch")?FC(he(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(ot(e,t+1)!==115)break;case 6444:switch(ot(e,jn(e)-3-(~dm(e,"!important")&&10))){case 107:return he(e,":",":"+pe)+e;case 101:return he(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+pe+(ot(e,14)===45?"inline-":"")+"box$3$1"+pe+"$2$3$1"+dt+"$2box$3")+e}break;case 5936:switch(ot(e,t+11)){case 114:return pe+e+dt+he(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return pe+e+dt+he(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return pe+e+dt+he(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return pe+e+dt+e+e}return e}var SM=function(t,n,r,i){if(t.length>-1&&!t.return)switch(t.type){case i0:t.return=FC(t.value,t.length);break;case MC:return mo([ua(t,{value:he(t.value,"@","@"+pe)})],i);case r0:if(t.length)return iM(t.props,function(o){switch(rM(o,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return mo([ua(t,{props:[he(o,/:(read-\w+)/,":"+Jc+"$1")]})],i);case"::placeholder":return mo([ua(t,{props:[he(o,/:(plac\w+)/,":"+pe+"input-$1")]}),ua(t,{props:[he(o,/:(plac\w+)/,":"+Jc+"$1")]}),ua(t,{props:[he(o,/:(plac\w+)/,dt+"input-$1")]})],i)}return""})}},CM=[SM],EM=function(t){var n=t.key;if(n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(y){var w=y.getAttribute("data-emotion");w.indexOf(" ")!==-1&&(document.head.appendChild(y),y.setAttribute("data-s",""))})}var i=t.stylisPlugins||CM,o={},a,l=[];a=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(y){for(var w=y.getAttribute("data-emotion").split(" "),g=1;g<w.length;g++)o[w[g]]=!0;l.push(y)});var s,c=[bM,wM];{var d,f=[pM,mM(function(y){d.insert(y)})],m=hM(c.concat(i,f)),p=function(w){return mo(dM(w),m)};s=function(w,g,v,b){d=v,p(w?w+"{"+g.styles+"}":g.styles),b&&(h.inserted[g.name]=!0)}}var h={key:n,sheet:new QI({key:n,container:a,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:o,registered:{},insert:s};return h.sheet.hydrate(l),h},zC={exports:{}},xe={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nt=typeof Symbol=="function"&&Symbol.for,a0=nt?Symbol.for("react.element"):60103,s0=nt?Symbol.for("react.portal"):60106,od=nt?Symbol.for("react.fragment"):60107,ad=nt?Symbol.for("react.strict_mode"):60108,sd=nt?Symbol.for("react.profiler"):60114,ld=nt?Symbol.for("react.provider"):60109,cd=nt?Symbol.for("react.context"):60110,l0=nt?Symbol.for("react.async_mode"):60111,ud=nt?Symbol.for("react.concurrent_mode"):60111,dd=nt?Symbol.for("react.forward_ref"):60112,fd=nt?Symbol.for("react.suspense"):60113,_M=nt?Symbol.for("react.suspense_list"):60120,pd=nt?Symbol.for("react.memo"):60115,hd=nt?Symbol.for("react.lazy"):60116,kM=nt?Symbol.for("react.block"):60121,PM=nt?Symbol.for("react.fundamental"):60117,OM=nt?Symbol.for("react.responder"):60118,TM=nt?Symbol.for("react.scope"):60119;function Kt(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case a0:switch(e=e.type,e){case l0:case ud:case od:case sd:case ad:case fd:return e;default:switch(e=e&&e.$$typeof,e){case cd:case dd:case hd:case pd:case ld:return e;default:return t}}case s0:return t}}}function NC(e){return Kt(e)===ud}xe.AsyncMode=l0;xe.ConcurrentMode=ud;xe.ContextConsumer=cd;xe.ContextProvider=ld;xe.Element=a0;xe.ForwardRef=dd;xe.Fragment=od;xe.Lazy=hd;xe.Memo=pd;xe.Portal=s0;xe.Profiler=sd;xe.StrictMode=ad;xe.Suspense=fd;xe.isAsyncMode=function(e){return NC(e)||Kt(e)===l0};xe.isConcurrentMode=NC;xe.isContextConsumer=function(e){return Kt(e)===cd};xe.isContextProvider=function(e){return Kt(e)===ld};xe.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===a0};xe.isForwardRef=function(e){return Kt(e)===dd};xe.isFragment=function(e){return Kt(e)===od};xe.isLazy=function(e){return Kt(e)===hd};xe.isMemo=function(e){return Kt(e)===pd};xe.isPortal=function(e){return Kt(e)===s0};xe.isProfiler=function(e){return Kt(e)===sd};xe.isStrictMode=function(e){return Kt(e)===ad};xe.isSuspense=function(e){return Kt(e)===fd};xe.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===od||e===ud||e===sd||e===ad||e===fd||e===_M||typeof e=="object"&&e!==null&&(e.$$typeof===hd||e.$$typeof===pd||e.$$typeof===ld||e.$$typeof===cd||e.$$typeof===dd||e.$$typeof===PM||e.$$typeof===OM||e.$$typeof===TM||e.$$typeof===kM)};xe.typeOf=Kt;zC.exports=xe;var jM=zC.exports,BC=jM,$M={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},IM={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},VC={};VC[BC.ForwardRef]=$M;VC[BC.Memo]=IM;var MM=!0;function WC(e,t,n){var r="";return n.split(" ").forEach(function(i){e[i]!==void 0?t.push(e[i]+";"):r+=i+" "}),r}var c0=function(t,n,r){var i=t.key+"-"+n.name;(r===!1||MM===!1)&&t.registered[i]===void 0&&(t.registered[i]=n.styles)},UC=function(t,n,r){c0(t,n,r);var i=t.key+"-"+n.name;if(t.inserted[n.name]===void 0){var o=n;do t.insert(n===o?"."+i:"",o,t.sheet,!0),o=o.next;while(o!==void 0)}};function AM(e){for(var t=0,n,r=0,i=e.length;i>=4;++r,i-=4)n=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(i){case 3:t^=(e.charCodeAt(r+2)&255)<<16;case 2:t^=(e.charCodeAt(r+1)&255)<<8;case 1:t^=e.charCodeAt(r)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var DM={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},LM=/[A-Z]|^ms/g,RM=/_EMO_([^_]+?)_([^]*?)_EMO_/g,HC=function(t){return t.charCodeAt(1)===45},s1=function(t){return t!=null&&typeof t!="boolean"},Vf=gM(function(e){return HC(e)?e:e.replace(LM,"-$&").toLowerCase()}),l1=function(t,n){switch(t){case"animation":case"animationName":if(typeof n=="string")return n.replace(RM,function(r,i,o){return $n={name:i,styles:o,next:$n},i})}return DM[t]!==1&&!HC(t)&&typeof n=="number"&&n!==0?n+"px":n};function Ss(e,t,n){if(n==null)return"";if(n.__emotion_styles!==void 0)return n;switch(typeof n){case"boolean":return"";case"object":{if(n.anim===1)return $n={name:n.name,styles:n.styles,next:$n},n.name;if(n.styles!==void 0){var r=n.next;if(r!==void 0)for(;r!==void 0;)$n={name:r.name,styles:r.styles,next:$n},r=r.next;var i=n.styles+";";return i}return FM(e,t,n)}case"function":{if(e!==void 0){var o=$n,a=n(e);return $n=o,Ss(e,t,a)}break}}if(t==null)return n;var l=t[n];return l!==void 0?l:n}function FM(e,t,n){var r="";if(Array.isArray(n))for(var i=0;i<n.length;i++)r+=Ss(e,t,n[i])+";";else for(var o in n){var a=n[o];if(typeof a!="object")t!=null&&t[a]!==void 0?r+=o+"{"+t[a]+"}":s1(a)&&(r+=Vf(o)+":"+l1(o,a)+";");else if(Array.isArray(a)&&typeof a[0]=="string"&&(t==null||t[a[0]]===void 0))for(var l=0;l<a.length;l++)s1(a[l])&&(r+=Vf(o)+":"+l1(o,a[l])+";");else{var s=Ss(e,t,a);switch(o){case"animation":case"animationName":{r+=Vf(o)+":"+s+";";break}default:r+=o+"{"+s+"}"}}}return r}var c1=/label:\s*([^\s;\n{]+)\s*(;|$)/g,$n,u0=function(t,n,r){if(t.length===1&&typeof t[0]=="object"&&t[0]!==null&&t[0].styles!==void 0)return t[0];var i=!0,o="";$n=void 0;var a=t[0];a==null||a.raw===void 0?(i=!1,o+=Ss(r,n,a)):o+=a[0];for(var l=1;l<t.length;l++)o+=Ss(r,n,t[l]),i&&(o+=a[l]);c1.lastIndex=0;for(var s="",c;(c=c1.exec(o))!==null;)s+="-"+c[1];var d=AM(o)+s;return{name:d,styles:o,next:$n}},zM=function(t){return t()},NM=Yp["useInsertionEffect"]?Yp["useInsertionEffect"]:!1,GC=NM||zM,d0={}.hasOwnProperty,qC=x.createContext(typeof HTMLElement<"u"?EM({key:"css"}):null);qC.Provider;var YC=function(t){return x.forwardRef(function(n,r){var i=x.useContext(qC);return t(n,i,r)})},XC=x.createContext({}),pm="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",BM=function(t,n){var r={};for(var i in n)d0.call(n,i)&&(r[i]=n[i]);return r[pm]=t,r},VM=function(t){var n=t.cache,r=t.serialized,i=t.isStringTag;return c0(n,r,i),GC(function(){return UC(n,r,i)}),null},WM=YC(function(e,t,n){var r=e.css;typeof r=="string"&&t.registered[r]!==void 0&&(r=t.registered[r]);var i=e[pm],o=[r],a="";typeof e.className=="string"?a=WC(t.registered,o,e.className):e.className!=null&&(a=e.className+" ");var l=u0(o,void 0,x.useContext(XC));a+=t.key+"-"+l.name;var s={};for(var c in e)d0.call(e,c)&&c!=="css"&&c!==pm&&(s[c]=e[c]);return s.ref=n,s.className=a,x.createElement(x.Fragment,null,x.createElement(VM,{cache:t,serialized:l,isStringTag:typeof i=="string"}),x.createElement(i,s))}),UM=WM,J=function(t,n){var r=arguments;if(n==null||!d0.call(n,"css"))return x.createElement.apply(void 0,r);var i=r.length,o=new Array(i);o[0]=UM,o[1]=BM(t,n);for(var a=2;a<i;a++)o[a]=r[a];return x.createElement.apply(null,o)};function f0(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return u0(t)}var HM=function(){var t=f0.apply(void 0,arguments),n="animation-"+t.name;return{name:n,styles:"@keyframes "+n+"{"+t.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},GM=e$,qM=function(t){return t!=="theme"},u1=function(t){return typeof t=="string"&&t.charCodeAt(0)>96?GM:qM},d1=function(t,n,r){var i;if(n){var o=n.shouldForwardProp;i=t.__emotion_forwardProp&&o?function(a){return t.__emotion_forwardProp(a)&&o(a)}:o}return typeof i!="function"&&r&&(i=t.__emotion_forwardProp),i},YM=function(t){var n=t.cache,r=t.serialized,i=t.isStringTag;return c0(n,r,i),GC(function(){return UC(n,r,i)}),null},XM=function e(t,n){var r=t.__emotion_real===t,i=r&&t.__emotion_base||t,o,a;n!==void 0&&(o=n.label,a=n.target);var l=d1(t,n,r),s=l||u1(i),c=!s("as");return function(){var d=arguments,f=r&&t.__emotion_styles!==void 0?t.__emotion_styles.slice(0):[];if(o!==void 0&&f.push("label:"+o+";"),d[0]==null||d[0].raw===void 0)f.push.apply(f,d);else{f.push(d[0][0]);for(var m=d.length,p=1;p<m;p++)f.push(d[p],d[0][p])}var h=YC(function(y,w,g){var v=c&&y.as||i,b="",C=[],S=y;if(y.theme==null){S={};for(var P in y)S[P]=y[P];S.theme=x.useContext(XC)}typeof y.className=="string"?b=WC(w.registered,C,y.className):y.className!=null&&(b=y.className+" ");var k=u0(f.concat(C),w.registered,S);b+=w.key+"-"+k.name,a!==void 0&&(b+=" "+a);var _=c&&l===void 0?u1(v):s,T={};for(var $ in y)c&&$==="as"||_($)&&(T[$]=y[$]);return T.className=b,T.ref=g,x.createElement(x.Fragment,null,x.createElement(YM,{cache:w,serialized:k,isStringTag:typeof v=="string"}),x.createElement(v,T))});return h.displayName=o!==void 0?o:"Styled("+(typeof i=="string"?i:i.displayName||i.name||"Component")+")",h.defaultProps=t.defaultProps,h.__emotion_real=h,h.__emotion_base=i,h.__emotion_styles=f,h.__emotion_forwardProp=l,Object.defineProperty(h,"toString",{value:function(){return"."+a}}),h.withComponent=function(y,w){return e(y,te({},n,w,{shouldForwardProp:d1(h,w,!0)})).apply(void 0,f)},h}},KM=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],Fe=XM.bind();KM.forEach(function(e){Fe[e]=Fe(e)});const QM=Fe.section`
  background-color: var(--second-background);

`,ZM=Fe.div`
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
`,KC=Fe.div`
  font-family: var(--main-font);
  font-size: 14px;
  color: #8c8c8c;
     margin-right: auto;

  a {
    text-decoration: none;
    color: inherit;
  }
`,JM=Fe.div`

`,eA=Fe.h1`
  font-size: 32px;
  font-family: var(--main-font);
  color: var(--black-color);
  text-transform: uppercase;
  margin-bottom: 20px;
`,tA=Fe.div`
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
`;Fe.div`
  position: absolute;
  inset: 0; /* займає всю картку */
  background: rgba(0, 0, 0, 0.622); /* чорний з прозорістю 25% */
`;const nA=Fe(ge)`
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
`,rA=Fe.div`
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
`,iA=Fe.img`
  width: 100%;
  height: 200px;
  object-fit: cover;

  display: block;
  @media screen and (max-width: 768px) {
    height: 250px;
  }
`,oA=Fe.p`
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
`;var aA={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"};sA(aA);function sA(e){var t={};for(var n in e)e.hasOwnProperty(n)&&(t[e[n]]=n);return t}var lA="#4fa94d",cA={"aria-busy":!0,role:"progressbar"},uA=E.div`
  display: ${e=>e.$visible?"flex":"none"};
`,dA="http://www.w3.org/2000/svg",ji=({height:e=100,width:t=100,radius:n=5,color:r=lA,ariaLabel:i="ball-triangle-loading",wrapperClass:o,wrapperStyle:a,visible:l=!0})=>u.jsx(uA,{style:{...a},$visible:l,className:o,"data-testid":"ball-triangle-loading","aria-label":i,...cA,children:u.jsxs("svg",{height:e,width:t,stroke:r,viewBox:"0 0 57 57",xmlns:dA,"data-testid":"ball-triangle-svg",children:[u.jsx("title",{children:"Ball Triangle"}),u.jsx("desc",{children:"Animated representation of three balls"}),u.jsx("g",{fill:"none",fillRule:"evenodd",children:u.jsxs("g",{transform:"translate(1 1)",strokeWidth:"2",children:[u.jsxs("circle",{cx:"5",cy:"50",r:n,children:[u.jsx("animate",{attributeName:"cy",begin:"0s",dur:"2.2s",values:"50;5;50;50",calcMode:"linear",repeatCount:"indefinite"}),u.jsx("animate",{attributeName:"cx",begin:"0s",dur:"2.2s",values:"5;27;49;5",calcMode:"linear",repeatCount:"indefinite"})]}),u.jsxs("circle",{cx:"27",cy:"5",r:n,children:[u.jsx("animate",{attributeName:"cy",begin:"0s",dur:"2.2s",from:"5",to:"5",values:"5;50;50;5",calcMode:"linear",repeatCount:"indefinite"}),u.jsx("animate",{attributeName:"cx",begin:"0s",dur:"2.2s",from:"27",to:"27",values:"27;49;5;27",calcMode:"linear",repeatCount:"indefinite"})]}),u.jsxs("circle",{cx:"49",cy:"50",r:n,children:[u.jsx("animate",{attributeName:"cy",begin:"0s",dur:"2.2s",values:"50;50;5;50",calcMode:"linear",repeatCount:"indefinite"}),u.jsx("animate",{attributeName:"cx",from:"49",to:"49",begin:"0s",dur:"2.2s",values:"49;5;27;49",calcMode:"linear",repeatCount:"indefinite"})]})]})})]})}),cn=242.776657104492,fA=1.6,pA=Yg`
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
`;E.path`
  stroke-dasharray: ${cn*.01}px, ${cn};
  stroke-dashoffset: 0;
  animation: ${pA} ${fA}s linear infinite;
`;var hA=Yg`
to {
   transform: rotate(360deg);
 }
`;E.svg`
  animation: ${hA} ${e=>String(e.$animationDuration).endsWith("s")?String(e.$animationDuration):`${e.$animationDuration}s`} steps(12, end) infinite;
`;E.polyline`
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
`;var mA=Yg`
to {
   stroke-dashoffset: 136;
 }
`;E.polygon`
  stroke-dasharray: 17;
  animation: ${mA} 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;
`;E.svg`
  transform-origin: 50% 65%;
`;const gA=()=>{const[e,t]=x.useState([]),[n,r]=x.useState(!0);return x.useEffect(()=>{async function i(){try{r(!0);const a=await(await fetch("https://backenddidiv-production.up.railway.app/api/categories?populate=*&pagination[limit]=50&sort=title:asc")).json();t(a.data.map(l=>{var s;return{id:l.id,title:l.title,image:(s=l.image)==null?void 0:s.url}}))}catch(o){console.error("Помилка запиту:",o)}finally{r(!1)}}i()},[]),n?u.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"100vw",height:"100vh"},children:u.jsx(ji,{height:100,width:100,radius:5,color:"var(--orange-color)",ariaLabel:"ball-triangle-loading",wrapperStyle:{},wrapperClass:"",visible:!0})}):u.jsx(QM,{children:u.jsxs(ZM,{children:[u.jsxs(KC,{children:[u.jsx(ge,{to:"/",children:"Головна"})," / ",u.jsx(ge,{to:"/catalog",children:"Каталог"})]}),u.jsx(JM,{children:u.jsx($C,{})}),u.jsx(eA,{children:"Каталог"}),u.jsx(tA,{children:e.map(i=>u.jsxs(nA,{to:`/catalog/${i.title}`,children:[u.jsx(rA,{children:u.jsx(iA,{src:i.image,alt:i.title})}),u.jsx(oA,{children:i.title})]},i.id))})]})})},vA=Fe.div`

padding-top: 100px;
padding-bottom: 250px;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`,yA=Fe.h1`
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
`,xA=Fe.p`
  color: #191919;
  font-size: 18px;
  max-width: 600px;
      text-align: center;
      margin-bottom: 50px;
      @media screen and (min-width: 768px) {
 font-size: 25px;
  }
`,bA=Fe(ge)`

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

  
`,wA=()=>u.jsxs(vA,{children:[u.jsxs(yA,{children:[" ",u.jsx("span",{children:"404"}),"  PAGE NOT FOUND"]}),u.jsx(xA,{children:" Ой, схоже, ти збився з маршруту! На жаль, ця сторінка безслідно зникла десь на бездоріжжі. Спробуй повернутися на головну "}),u.jsx(bA,{children:" На головну"})]});const SA=E.div`
width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
   font-family: var(--main-font);
`,CA=E.div`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  margin: 0;
`;var QC={},ZC={},md={},JC={exports:{}},Fs={};/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var f1=Object.getOwnPropertySymbols,EA=Object.prototype.hasOwnProperty,_A=Object.prototype.propertyIsEnumerable;function kA(e){if(e==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}function PA(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de",Object.getOwnPropertyNames(e)[0]==="5")return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;var r=Object.getOwnPropertyNames(t).map(function(o){return t[o]});if(r.join("")!=="0123456789")return!1;var i={};return"abcdefghijklmnopqrst".split("").forEach(function(o){i[o]=o}),Object.keys(Object.assign({},i)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}var OA=PA()?Object.assign:function(e,t){for(var n,r=kA(e),i,o=1;o<arguments.length;o++){n=Object(arguments[o]);for(var a in n)EA.call(n,a)&&(r[a]=n[a]);if(f1){i=f1(n);for(var l=0;l<i.length;l++)_A.call(n,i[l])&&(r[i[l]]=n[i[l]])}}return r},eE={exports:{}},de={};/** @license React v17.0.2
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var p0=OA,qo=60103,tE=60106;de.Fragment=60107;de.StrictMode=60108;de.Profiler=60114;var nE=60109,rE=60110,iE=60112;de.Suspense=60113;var oE=60115,aE=60116;if(typeof Symbol=="function"&&Symbol.for){var ln=Symbol.for;qo=ln("react.element"),tE=ln("react.portal"),de.Fragment=ln("react.fragment"),de.StrictMode=ln("react.strict_mode"),de.Profiler=ln("react.profiler"),nE=ln("react.provider"),rE=ln("react.context"),iE=ln("react.forward_ref"),de.Suspense=ln("react.suspense"),oE=ln("react.memo"),aE=ln("react.lazy")}var p1=typeof Symbol=="function"&&Symbol.iterator;function TA(e){return e===null||typeof e!="object"?null:(e=p1&&e[p1]||e["@@iterator"],typeof e=="function"?e:null)}function zs(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var sE={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},lE={};function Yo(e,t,n){this.props=e,this.context=t,this.refs=lE,this.updater=n||sE}Yo.prototype.isReactComponent={};Yo.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error(zs(85));this.updater.enqueueSetState(this,e,t,"setState")};Yo.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function cE(){}cE.prototype=Yo.prototype;function h0(e,t,n){this.props=e,this.context=t,this.refs=lE,this.updater=n||sE}var m0=h0.prototype=new cE;m0.constructor=h0;p0(m0,Yo.prototype);m0.isPureReactComponent=!0;var g0={current:null},uE=Object.prototype.hasOwnProperty,dE={key:!0,ref:!0,__self:!0,__source:!0};function fE(e,t,n){var r,i={},o=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(o=""+t.key),t)uE.call(t,r)&&!dE.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var s=Array(l),c=0;c<l;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:qo,type:e,key:o,ref:a,props:i,_owner:g0.current}}function jA(e,t){return{$$typeof:qo,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function v0(e){return typeof e=="object"&&e!==null&&e.$$typeof===qo}function $A(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var h1=/\/+/g;function Wf(e,t){return typeof e=="object"&&e!==null&&e.key!=null?$A(""+e.key):t.toString(36)}function nc(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case qo:case tE:a=!0}}if(a)return a=e,i=i(a),e=r===""?"."+Wf(a,0):r,Array.isArray(i)?(n="",e!=null&&(n=e.replace(h1,"$&/")+"/"),nc(i,t,n,"",function(c){return c})):i!=null&&(v0(i)&&(i=jA(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(h1,"$&/")+"/")+e)),t.push(i)),1;if(a=0,r=r===""?".":r+":",Array.isArray(e))for(var l=0;l<e.length;l++){o=e[l];var s=r+Wf(o,l);a+=nc(o,t,n,s,i)}else if(s=TA(e),typeof s=="function")for(e=s.call(e),l=0;!(o=e.next()).done;)o=o.value,s=r+Wf(o,l++),a+=nc(o,t,n,s,i);else if(o==="object")throw t=""+e,Error(zs(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t));return a}function hl(e,t,n){if(e==null)return e;var r=[],i=0;return nc(e,r,"","",function(o){return t.call(n,o,i++)}),r}function IA(e){if(e._status===-1){var t=e._result;t=t(),e._status=0,e._result=t,t.then(function(n){e._status===0&&(n=n.default,e._status=1,e._result=n)},function(n){e._status===0&&(e._status=2,e._result=n)})}if(e._status===1)return e._result;throw e._result}var pE={current:null};function hr(){var e=pE.current;if(e===null)throw Error(zs(321));return e}var MA={ReactCurrentDispatcher:pE,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:g0,IsSomeRendererActing:{current:!1},assign:p0};de.Children={map:hl,forEach:function(e,t,n){hl(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return hl(e,function(){t++}),t},toArray:function(e){return hl(e,function(t){return t})||[]},only:function(e){if(!v0(e))throw Error(zs(143));return e}};de.Component=Yo;de.PureComponent=h0;de.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=MA;de.cloneElement=function(e,t,n){if(e==null)throw Error(zs(267,e));var r=p0({},e.props),i=e.key,o=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,a=g0.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in t)uE.call(t,s)&&!dE.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&l!==void 0?l[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){l=Array(s);for(var c=0;c<s;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:qo,type:e.type,key:i,ref:o,props:r,_owner:a}};de.createContext=function(e,t){return t===void 0&&(t=null),e={$$typeof:rE,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider={$$typeof:nE,_context:e},e.Consumer=e};de.createElement=fE;de.createFactory=function(e){var t=fE.bind(null,e);return t.type=e,t};de.createRef=function(){return{current:null}};de.forwardRef=function(e){return{$$typeof:iE,render:e}};de.isValidElement=v0;de.lazy=function(e){return{$$typeof:aE,_payload:{_status:-1,_result:e},_init:IA}};de.memo=function(e,t){return{$$typeof:oE,type:e,compare:t===void 0?null:t}};de.useCallback=function(e,t){return hr().useCallback(e,t)};de.useContext=function(e,t){return hr().useContext(e,t)};de.useDebugValue=function(){};de.useEffect=function(e,t){return hr().useEffect(e,t)};de.useImperativeHandle=function(e,t,n){return hr().useImperativeHandle(e,t,n)};de.useLayoutEffect=function(e,t){return hr().useLayoutEffect(e,t)};de.useMemo=function(e,t){return hr().useMemo(e,t)};de.useReducer=function(e,t,n){return hr().useReducer(e,t,n)};de.useRef=function(e){return hr().useRef(e)};de.useState=function(e){return hr().useState(e)};de.version="17.0.2";eE.exports=de;var AA=eE.exports;/** @license React v17.0.2
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var DA=AA,hE=60103;Fs.Fragment=60107;if(typeof Symbol=="function"&&Symbol.for){var m1=Symbol.for;hE=m1("react.element"),Fs.Fragment=m1("react.fragment")}var LA=DA.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,RA=Object.prototype.hasOwnProperty,FA={key:!0,ref:!0,__self:!0,__source:!0};function mE(e,t,n){var r,i={},o=null,a=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)RA.call(t,r)&&!FA.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:hE,type:e,key:o,ref:a,props:i,_owner:LA.current}}Fs.jsx=mE;Fs.jsxs=mE;JC.exports=Fs;var Rt=JC.exports,gE={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var t={}.hasOwnProperty;function n(){for(var o="",a=0;a<arguments.length;a++){var l=arguments[a];l&&(o=i(o,r(l)))}return o}function r(o){if(typeof o=="string"||typeof o=="number")return o;if(typeof o!="object")return"";if(Array.isArray(o))return n.apply(null,o);if(o.toString!==Object.prototype.toString&&!o.toString.toString().includes("[native code]"))return o.toString();var a="";for(var l in o)t.call(o,l)&&o[l]&&(a=i(a,l));return a}function i(o,a){return a?o?o+" "+a:o+a:o}e.exports?(n.default=n,e.exports=n):window.classNames=n})()})(gE);var Ft=gE.exports;const zA={"lds-circle":"_lds-circle_qlxhy_1"},NA=Object.freeze(Object.defineProperty({__proto__:null,default:zA},Symbol.toStringTag,{value:"Module"})),BA=Ct(NA);var vE=ne&&ne.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(md,"__esModule",{value:!0});md.Circle=void 0;const VA=Rt,WA=vE(Ft),UA=vE(BA);function HA({color:e="#7f58af",size:t=64,className:n,style:r,...i}){return(0,VA.jsx)("div",{className:(0,WA.default)(UA.default["lds-circle"],n),style:{background:e,width:t,height:t,...r},...i})}md.Circle=HA;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Circle=void 0;var t=md;Object.defineProperty(e,"Circle",{enumerable:!0,get:function(){return t.Circle}})})(ZC);var yE={},gd={};const GA={"lds-default":"_lds-default_wt1n8_1"},qA=Object.freeze(Object.defineProperty({__proto__:null,default:GA},Symbol.toStringTag,{value:"Module"})),YA=Ct(qA);var xE=ne&&ne.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(gd,"__esModule",{value:!0});gd.Default=void 0;const g1=Rt,XA=xE(Ft),KA=xE(YA);function QA({color:e="#7f58af",size:t=80,className:n,style:r,...i}){const o=[...Array(12)].map((a,l)=>(0,g1.jsx)("div",{style:{background:`${e}`,width:t*.075,height:t*.075}},l));return(0,g1.jsx)("div",{className:(0,XA.default)(KA.default["lds-default"],n),style:{height:t,width:t,...r},...i,children:o})}gd.Default=QA;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Default=void 0;var t=gd;Object.defineProperty(e,"Default",{enumerable:!0,get:function(){return t.Default}})})(yE);var bE={},vd={};const ZA={"lds-dual-ring":"_lds-dual-ring_pbai0_1","lds-dual-ring-after":"_lds-dual-ring-after_pbai0_6"},JA=Object.freeze(Object.defineProperty({__proto__:null,default:ZA},Symbol.toStringTag,{value:"Module"})),eD=Ct(JA);var wE=ne&&ne.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(vd,"__esModule",{value:!0});vd.DualRing=void 0;const v1=Rt,y1=wE(Ft),x1=wE(eD);function tD({color:e="#7f58af",size:t=80,className:n,style:r,...i}){return(0,v1.jsx)("div",{className:(0,y1.default)(x1.default["lds-dual-ring"],n),style:{width:t,height:t,...r},...i,children:(0,v1.jsx)("div",{className:(0,y1.default)(x1.default["lds-dual-ring-after"]),style:{borderColor:`${e} transparent`,borderWidth:t*.1,width:t*.7-6,height:t*.7-6}})})}vd.DualRing=tD;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.DualRing=void 0;var t=vd;Object.defineProperty(e,"DualRing",{enumerable:!0,get:function(){return t.DualRing}})})(bE);var SE={},yd={};const nD={"lds-ellipsis":"_lds-ellipsis_1fzd3_1","lds-ellipsis1":"_lds-ellipsis1_1fzd3_1","lds-ellipsis2":"_lds-ellipsis2_1fzd3_1","lds-ellipsis3":"_lds-ellipsis3_1fzd3_1"},rD=Object.freeze(Object.defineProperty({__proto__:null,default:nD},Symbol.toStringTag,{value:"Module"})),iD=Ct(rD);var CE=ne&&ne.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(yd,"__esModule",{value:!0});yd.Ellipsis=void 0;const b1=Rt,oD=CE(Ft),aD=CE(iD);function sD({color:e="#7f58af",size:t=80,className:n,style:r,...i}){const o=[...Array(4)].map((a,l)=>(0,b1.jsx)("div",{style:{background:`${e}`}},l));return(0,b1.jsx)("div",{className:(0,oD.default)(aD.default["lds-ellipsis"],n),style:{...r,width:t,height:t},...i,children:o})}yd.Ellipsis=sD;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Ellipsis=void 0;var t=yd;Object.defineProperty(e,"Ellipsis",{enumerable:!0,get:function(){return t.Ellipsis}})})(SE);var EE={},xd={};const lD={"lds-facebook":"_lds-facebook_1ts9g_1"},cD=Object.freeze(Object.defineProperty({__proto__:null,default:lD},Symbol.toStringTag,{value:"Module"})),uD=Ct(cD);var _E=ne&&ne.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(xd,"__esModule",{value:!0});xd.Facebook=void 0;const w1=Rt,dD=_E(Ft),fD=_E(uD);function pD({color:e="#7f58af",size:t=80,className:n,style:r,...i}){const o=[...Array(3)].map((a,l)=>(0,w1.jsx)("div",{style:{background:`${e}`}},l));return(0,w1.jsx)("div",{className:(0,dD.default)(fD.default["lds-facebook"],n),style:{width:t,height:t,...r},...i,children:o})}xd.Facebook=pD;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Facebook=void 0;var t=xd;Object.defineProperty(e,"Facebook",{enumerable:!0,get:function(){return t.Facebook}})})(EE);var kE={},bd={};const hD={"lds-grid":"_lds-grid_1ftub_1"},mD=Object.freeze(Object.defineProperty({__proto__:null,default:hD},Symbol.toStringTag,{value:"Module"})),gD=Ct(mD);var PE=ne&&ne.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(bd,"__esModule",{value:!0});bd.Grid=void 0;const S1=Rt,vD=PE(Ft),yD=PE(gD);function xD({color:e="#7f58af",size:t=80,className:n,style:r,...i}){const o=[...Array(9)].map((a,l)=>(0,S1.jsx)("div",{style:{background:`${e}`}},l));return(0,S1.jsx)("div",{className:(0,vD.default)(yD.default["lds-grid"],n),style:{width:t,height:t,...r},...i,children:o})}bd.Grid=xD;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Grid=void 0;var t=bd;Object.defineProperty(e,"Grid",{enumerable:!0,get:function(){return t.Grid}})})(kE);var OE={},wd={};const bD={"lds-heart":"_lds-heart_e4yfg_1","div-after":"_div-after_e4yfg_18","div-before":"_div-before_e4yfg_19"},wD=Object.freeze(Object.defineProperty({__proto__:null,default:bD},Symbol.toStringTag,{value:"Module"})),SD=Ct(wD);var TE=ne&&ne.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(wd,"__esModule",{value:!0});wd.Heart=void 0;const ml=Rt,Uf=TE(Ft),Hf=TE(SD);function CD({color:e="#7f58af",size:t=80,className:n,style:r,...i}){return(0,ml.jsx)("div",{className:(0,Uf.default)(Hf.default["lds-heart"],n),style:{width:t,height:t,...r},...i,children:(0,ml.jsxs)("div",{style:{background:e,width:t*.4,height:t*.4,left:t*.3,top:t*.3},children:[(0,ml.jsx)("div",{className:(0,Uf.default)(Hf.default["div-before"]),style:{background:e,width:t*.4,height:t*.4,left:-t*.3}}),(0,ml.jsx)("div",{className:(0,Uf.default)(Hf.default["div-after"]),style:{background:e,width:t*.4,height:t*.4,top:-t*.3}})]})})}wd.Heart=CD;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Heart=void 0;var t=wd;Object.defineProperty(e,"Heart",{enumerable:!0,get:function(){return t.Heart}})})(OE);var jE={},Sd={};const ED={"lds-hourglass":"_lds-hourglass_mn3qi_1","lds-hourglass-after":"_lds-hourglass-after_mn3qi_7"},_D=Object.freeze(Object.defineProperty({__proto__:null,default:ED},Symbol.toStringTag,{value:"Module"})),kD=Ct(_D);var $E=ne&&ne.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Sd,"__esModule",{value:!0});Sd.Hourglass=void 0;const C1=Rt,E1=$E(Ft),_1=$E(kD);function PD({color:e="#7f58af",size:t=32,className:n,style:r}){return(0,C1.jsx)("div",{className:(0,E1.default)(_1.default["lds-hourglass"],n),style:{...r},children:(0,C1.jsx)("div",{className:(0,E1.default)(_1.default["lds-hourglass-after"]),style:{background:e,borderWidth:t,borderHeight:t}})})}Sd.Hourglass=PD;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Hourglass=void 0;var t=Sd;Object.defineProperty(e,"Hourglass",{enumerable:!0,get:function(){return t.Hourglass}})})(jE);var IE={},Cd={};const ME="_center_1rufi_10",AE="_spin_1rufi_1",OD={"lds-orbitals":"_lds-orbitals_1rufi_1",center:ME,"outer-spin":"_outer-spin_1rufi_19","inner-spin":"_inner-spin_1rufi_20","inner-arc":"_inner-arc_1rufi_25","inner-arc_start-a":"_inner-arc_start-a_1rufi_32","inner-arc_end-a":"_inner-arc_end-a_1rufi_36","inner-moon-a":"_inner-moon-a_1rufi_40","inner-moon-b":"_inner-moon-b_1rufi_49","inner-arc_start-b":"_inner-arc_start-b_1rufi_58","inner-arc_end-b":"_inner-arc_end-b_1rufi_62","outer-arc":"_outer-arc_1rufi_66","outer-arc_start-a":"_outer-arc_start-a_1rufi_73","outer-arc_end-a":"_outer-arc_end-a_1rufi_77","outer-moon-a":"_outer-moon-a_1rufi_81","outer-moon-b":"_outer-moon-b_1rufi_90","outer-arc_start-b":"_outer-arc_start-b_1rufi_99","outer-arc_end-b":"_outer-arc_end-b_1rufi_103",spin:AE},TD=Object.freeze(Object.defineProperty({__proto__:null,center:ME,default:OD,spin:AE},Symbol.toStringTag,{value:"Module"})),jD=Ct(TD);var DE=ne&&ne.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Cd,"__esModule",{value:!0});Cd.Orbitals=void 0;const ut=Rt,vt=DE(Ft),_e=DE(jD);function $D({color:e="#7f58af",className:t,style:n}){return(0,ut.jsxs)("div",{className:(0,vt.default)(_e.default["lds-orbitals"],t),style:{...n},children:[(0,ut.jsx)("div",{className:_e.default.center,style:{background:e}}),(0,ut.jsxs)("div",{className:(0,vt.default)(_e.default["inner-spin"]),children:[(0,ut.jsx)("div",{className:(0,vt.default)(_e.default["inner-arc"],_e.default["inner-arc_start-a"]),style:{borderColor:e}}),(0,ut.jsx)("div",{className:(0,vt.default)(_e.default["inner-arc"],_e.default["inner-arc_end-a"]),style:{borderColor:e}}),(0,ut.jsx)("div",{className:(0,vt.default)(_e.default["inner-arc"],_e.default["inner-arc_start-b"]),style:{borderColor:e}}),(0,ut.jsx)("div",{className:(0,vt.default)(_e.default["inner-arc"],_e.default["inner-arc_end-b"]),style:{borderColor:e}}),(0,ut.jsx)("div",{className:(0,vt.default)(_e.default["inner-moon-a"]),style:{background:e}}),(0,ut.jsx)("div",{className:(0,vt.default)(_e.default["inner-moon-b"]),style:{background:e}})]}),(0,ut.jsxs)("div",{className:(0,vt.default)(_e.default["outer-spin"]),children:[(0,ut.jsx)("div",{className:(0,vt.default)(_e.default["outer-arc"],_e.default["outer-arc_start-a"]),style:{borderColor:e}}),(0,ut.jsx)("div",{className:(0,vt.default)(_e.default["outer-arc"],_e.default["outer-arc_end-a"]),style:{borderColor:e}}),(0,ut.jsx)("div",{className:(0,vt.default)(_e.default["outer-arc"],_e.default["outer-arc_start-b"]),style:{borderColor:e}}),(0,ut.jsx)("div",{className:(0,vt.default)(_e.default["outer-arc"],_e.default["outer-arc_end-b"]),style:{borderColor:e}}),(0,ut.jsx)("div",{className:(0,vt.default)(_e.default["outer-moon-a"]),style:{background:e}}),(0,ut.jsx)("div",{className:(0,vt.default)(_e.default["outer-moon-b"]),style:{background:e}})]})]})}Cd.Orbitals=$D;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Orbitals=void 0;var t=Cd;Object.defineProperty(e,"Orbitals",{enumerable:!0,get:function(){return t.Orbitals}})})(IE);var LE={},Ed={};const ID={"lds-ring":"_lds-ring_xgxdp_1"},MD=Object.freeze(Object.defineProperty({__proto__:null,default:ID},Symbol.toStringTag,{value:"Module"})),AD=Ct(MD);var RE=ne&&ne.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Ed,"__esModule",{value:!0});Ed.Ring=void 0;const k1=Rt,DD=RE(Ft),LD=RE(AD);function RD({color:e="#7f58af",size:t=80,className:n,style:r}){const i=[...Array(4)].map((o,a)=>(0,k1.jsx)("div",{style:{borderColor:`${e} transparent transparent transparent`,width:t*.8,height:t*.8,margin:t*.1,borderWidth:t*.1}},a));return(0,k1.jsx)("div",{className:(0,DD.default)(LD.default["lds-ring"],n),style:{width:t,height:t,...r},children:i})}Ed.Ring=RD;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Ring=void 0;var t=Ed;Object.defineProperty(e,"Ring",{enumerable:!0,get:function(){return t.Ring}})})(LE);var FE={},_d={};const FD={"lds-ripple":"_lds-ripple_1lgcf_1"},zD=Object.freeze(Object.defineProperty({__proto__:null,default:FD},Symbol.toStringTag,{value:"Module"})),ND=Ct(zD);var zE=ne&&ne.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(_d,"__esModule",{value:!0});_d.Ripple=void 0;const P1=Rt,BD=zE(Ft),VD=zE(ND);function WD({color:e="#7f58af",size:t=80,className:n,style:r}){const i=[...Array(2)].map((o,a)=>(0,P1.jsx)("div",{style:{borderColor:`${e}`,borderWidth:t*.05}},a));return(0,P1.jsx)("div",{className:(0,BD.default)(VD.default["lds-ripple"],n),style:{width:t,height:t,...r},children:i})}_d.Ripple=WD;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Ripple=void 0;var t=_d;Object.defineProperty(e,"Ripple",{enumerable:!0,get:function(){return t.Ripple}})})(FE);var NE={},kd={};const UD={"lds-roller":"_lds-roller_ks1ij_1","div-after":"_div-after_ks1ij_11"},HD=Object.freeze(Object.defineProperty({__proto__:null,default:UD},Symbol.toStringTag,{value:"Module"})),GD=Ct(HD);var BE=ne&&ne.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(kd,"__esModule",{value:!0});kd.Roller=void 0;const Gf=Rt,O1=BE(Ft),T1=BE(GD);function qD({color:e="#7f58af",className:t,style:n}){const r=[...Array(8)].map((i,o)=>(0,Gf.jsx)("div",{children:(0,Gf.jsx)("div",{className:(0,O1.default)(T1.default["div-after"]),style:{background:e}})},o));return(0,Gf.jsx)("div",{className:(0,O1.default)(T1.default["lds-roller"],t),style:{...n},children:r})}kd.Roller=qD;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Roller=void 0;var t=kd;Object.defineProperty(e,"Roller",{enumerable:!0,get:function(){return t.Roller}})})(NE);var VE={},Pd={};const YD={"lds-spinner":"_lds-spinner_flf3t_1","div-after":"_div-after_flf3t_12"},XD=Object.freeze(Object.defineProperty({__proto__:null,default:YD},Symbol.toStringTag,{value:"Module"})),KD=Ct(XD);var WE=ne&&ne.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Pd,"__esModule",{value:!0});Pd.Spinner=void 0;const qf=Rt,j1=WE(Ft),$1=WE(KD);function QD({color:e="#7f58af",className:t,style:n}){const r=[...Array(12)].map((i,o)=>(0,qf.jsx)("div",{children:(0,qf.jsx)("div",{className:(0,j1.default)($1.default["div-after"]),style:{background:e}})},o));return(0,qf.jsx)("div",{className:(0,j1.default)($1.default["lds-spinner"],t),style:{...n},children:r})}Pd.Spinner=QD;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Spinner=void 0;var t=Pd;Object.defineProperty(e,"Spinner",{enumerable:!0,get:function(){return t.Spinner}})})(VE);var UE={},Od={};const HE="_left_v9vlb_30",GE="_right_v9vlb_33",qE="_anim_v9vlb_37",ZD={"lds-ouroboro":"_lds-ouroboro_v9vlb_1",left:HE,right:GE,anim:qE,"lds-ouroboro-rotate":"_lds-ouroboro-rotate_v9vlb_1"},JD=Object.freeze(Object.defineProperty({__proto__:null,anim:qE,default:ZD,left:HE,right:GE},Symbol.toStringTag,{value:"Module"})),e6=Ct(JD);var YE=ne&&ne.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Od,"__esModule",{value:!0});Od.Ouroboro=void 0;const da=Rt,fa=YE(Ft),pa=YE(e6);function t6({color:e="#7f58af",style:t,className:n}){return(0,da.jsxs)("div",{className:(0,fa.default)(pa.default["lds-ouroboro"],n),style:{...t},children:[(0,da.jsx)("span",{className:(0,fa.default)(pa.default.left),children:(0,da.jsx)("span",{className:(0,fa.default)(pa.default.anim),style:{background:e}})}),(0,da.jsx)("span",{className:(0,fa.default)(pa.default.right),children:(0,da.jsx)("span",{className:(0,fa.default)(pa.default.anim),style:{background:e}})})]})}Od.Ouroboro=t6;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Ouroboro=void 0;var t=Od;Object.defineProperty(e,"Ouroboro",{enumerable:!0,get:function(){return t.Ouroboro}})})(UE);(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Ouroboro=e.Spinner=e.Roller=e.Ripple=e.Ring=e.Orbitals=e.Hourglass=e.Heart=e.Grid=e.Facebook=e.Ellipsis=e.DualRing=e.Default=e.Circle=void 0;const t=ZC;Object.defineProperty(e,"Circle",{enumerable:!0,get:function(){return t.Circle}});const n=yE;Object.defineProperty(e,"Default",{enumerable:!0,get:function(){return n.Default}});const r=bE;Object.defineProperty(e,"DualRing",{enumerable:!0,get:function(){return r.DualRing}});const i=SE;Object.defineProperty(e,"Ellipsis",{enumerable:!0,get:function(){return i.Ellipsis}});const o=EE;Object.defineProperty(e,"Facebook",{enumerable:!0,get:function(){return o.Facebook}});const a=kE;Object.defineProperty(e,"Grid",{enumerable:!0,get:function(){return a.Grid}});const l=OE;Object.defineProperty(e,"Heart",{enumerable:!0,get:function(){return l.Heart}});const s=jE;Object.defineProperty(e,"Hourglass",{enumerable:!0,get:function(){return s.Hourglass}});const c=IE;Object.defineProperty(e,"Orbitals",{enumerable:!0,get:function(){return c.Orbitals}});const d=LE;Object.defineProperty(e,"Ring",{enumerable:!0,get:function(){return d.Ring}});const f=FE;Object.defineProperty(e,"Ripple",{enumerable:!0,get:function(){return f.Ripple}});const m=NE;Object.defineProperty(e,"Roller",{enumerable:!0,get:function(){return m.Roller}});const p=VE;Object.defineProperty(e,"Spinner",{enumerable:!0,get:function(){return p.Spinner}});const h=UE;Object.defineProperty(e,"Ouroboro",{enumerable:!0,get:function(){return h.Ouroboro}})})(QC);const n6=()=>u.jsx(CA,{children:u.jsx(QC.Default,{color:"#6d433da8"})});const r6="/assets/Ancient_Kyiv-2153f7e6.ttf",i6=t4`
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
  src: url(${r6}) format('truetype');
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
`,o6=E.div`
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
`,a6=E(ge)`
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
`,s6=E.h2`

  font-size: 30px;
  text-transform: uppercase;
  margin-bottom: 20px;
  color: #333;
  @media screen and (min-width: 768px) {
    font-size: 35px;
  }
`,l6=E.h3`

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
`,c6=E.a`

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
`,u6=E.div`
  width: 40px;
  height: 40px;
  border: 2px solid white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`,d6=()=>{const[e,t]=x.useState([]);return x.useEffect(()=>{async function n(){try{const r=await fetch("https://backenddidiv-production.up.railway.app/api/categories?populate=image&sort=title:asc",{credentials:"omit"});if(!r.ok){console.error("Server error:",r.status);return}const i=await r.json();if(!i.data){console.error("No data field:",i);return}t(i.data.map(o=>{var a;return{title:o.title,image:(a=o.image)==null?void 0:a.url}}))}catch(r){console.error("Fetch error:",r)}}n()},[]),u.jsxs(u.Fragment,{children:[u.jsx(s6,{children:"Каталог"}),u.jsxs(o6,{children:[e.slice(0,7).map(n=>u.jsx(a6,{to:`catalog/${n.title}`,bg:n.image,isBig:n.big,children:u.jsx(l6,{children:n.title})},n.title)),u.jsxs(c6,{href:"catalog",children:[u.jsx("p",{children:"Весь каталог"}),u.jsx(u6,{children:u.jsx(Uu,{size:24})})]})]})]})};function I1(e){return e!==null&&typeof e=="object"&&"constructor"in e&&e.constructor===Object}function y0(e={},t={}){const n=["__proto__","constructor","prototype"];Object.keys(t).filter(r=>n.indexOf(r)<0).forEach(r=>{typeof e[r]>"u"?e[r]=t[r]:I1(t[r])&&I1(e[r])&&Object.keys(t[r]).length>0&&y0(e[r],t[r])})}const XE={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector(){return null},querySelectorAll(){return[]},getElementById(){return null},createEvent(){return{initEvent(){}}},createElement(){return{children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName(){return[]}}},createElementNS(){return{}},importNode(){return null},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function zn(){const e=typeof document<"u"?document:{};return y0(e,XE),e}const f6={document:XE,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle(){return{getPropertyValue(){return""}}},Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia(){return{}},requestAnimationFrame(e){return typeof setTimeout>"u"?(e(),null):setTimeout(e,0)},cancelAnimationFrame(e){typeof setTimeout>"u"||clearTimeout(e)}};function kt(){const e=typeof window<"u"?window:{};return y0(e,f6),e}function p6(e=""){return e.trim().split(" ").filter(t=>!!t.trim())}function h6(e){const t=e;Object.keys(t).forEach(n=>{try{t[n]=null}catch{}try{delete t[n]}catch{}})}function KE(e,t=0){return setTimeout(e,t)}function eu(){return Date.now()}function m6(e){const t=kt();let n;return t.getComputedStyle&&(n=t.getComputedStyle(e,null)),!n&&e.currentStyle&&(n=e.currentStyle),n||(n=e.style),n}function g6(e,t="x"){const n=kt();let r,i,o;const a=m6(e);return n.WebKitCSSMatrix?(i=a.transform||a.webkitTransform,i.split(",").length>6&&(i=i.split(", ").map(l=>l.replace(",",".")).join(", ")),o=new n.WebKitCSSMatrix(i==="none"?"":i)):(o=a.MozTransform||a.OTransform||a.MsTransform||a.msTransform||a.transform||a.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),r=o.toString().split(",")),t==="x"&&(n.WebKitCSSMatrix?i=o.m41:r.length===16?i=parseFloat(r[12]):i=parseFloat(r[4])),t==="y"&&(n.WebKitCSSMatrix?i=o.m42:r.length===16?i=parseFloat(r[13]):i=parseFloat(r[5])),i||0}function gl(e){return typeof e=="object"&&e!==null&&e.constructor&&Object.prototype.toString.call(e).slice(8,-1)==="Object"}function v6(e){return typeof window<"u"&&typeof window.HTMLElement<"u"?e instanceof HTMLElement:e&&(e.nodeType===1||e.nodeType===11)}function Nt(...e){const t=Object(e[0]);for(let n=1;n<e.length;n+=1){const r=e[n];if(r!=null&&!v6(r)){const i=Object.keys(Object(r)).filter(o=>o!=="__proto__"&&o!=="constructor"&&o!=="prototype");for(let o=0,a=i.length;o<a;o+=1){const l=i[o],s=Object.getOwnPropertyDescriptor(r,l);s!==void 0&&s.enumerable&&(gl(t[l])&&gl(r[l])?r[l].__swiper__?t[l]=r[l]:Nt(t[l],r[l]):!gl(t[l])&&gl(r[l])?(t[l]={},r[l].__swiper__?t[l]=r[l]:Nt(t[l],r[l])):t[l]=r[l])}}}return t}function zi(e,t,n){e.style.setProperty(t,n)}function QE({swiper:e,targetPosition:t,side:n}){const r=kt(),i=-e.translate;let o=null,a;const l=e.params.speed;e.wrapperEl.style.scrollSnapType="none",r.cancelAnimationFrame(e.cssModeFrameID);const s=t>i?"next":"prev",c=(f,m)=>s==="next"&&f>=m||s==="prev"&&f<=m,d=()=>{a=new Date().getTime(),o===null&&(o=a);const f=Math.max(Math.min((a-o)/l,1),0),m=.5-Math.cos(f*Math.PI)/2;let p=i+m*(t-i);if(c(p,t)&&(p=t),e.wrapperEl.scrollTo({[n]:p}),c(p,t)){e.wrapperEl.style.overflow="hidden",e.wrapperEl.style.scrollSnapType="",setTimeout(()=>{e.wrapperEl.style.overflow="",e.wrapperEl.scrollTo({[n]:p})}),r.cancelAnimationFrame(e.cssModeFrameID);return}e.cssModeFrameID=r.requestAnimationFrame(d)};d()}function Dn(e,t=""){const n=kt(),r=[...e.children];return n.HTMLSlotElement&&e instanceof HTMLSlotElement&&r.push(...e.assignedElements()),t?r.filter(i=>i.matches(t)):r}function y6(e,t){const n=[t];for(;n.length>0;){const r=n.shift();if(e===r)return!0;n.push(...r.children,...r.shadowRoot?r.shadowRoot.children:[],...r.assignedElements?r.assignedElements():[])}}function x6(e,t){const n=kt();let r=t.contains(e);return!r&&n.HTMLSlotElement&&t instanceof HTMLSlotElement&&(r=[...t.assignedElements()].includes(e),r||(r=y6(e,t))),r}function tu(e){try{console.warn(e);return}catch{}}function nu(e,t=[]){const n=document.createElement(e);return n.classList.add(...Array.isArray(t)?t:p6(t)),n}function b6(e,t){const n=[];for(;e.previousElementSibling;){const r=e.previousElementSibling;t?r.matches(t)&&n.push(r):n.push(r),e=r}return n}function w6(e,t){const n=[];for(;e.nextElementSibling;){const r=e.nextElementSibling;t?r.matches(t)&&n.push(r):n.push(r),e=r}return n}function Tr(e,t){return kt().getComputedStyle(e,null).getPropertyValue(t)}function ru(e){let t=e,n;if(t){for(n=0;(t=t.previousSibling)!==null;)t.nodeType===1&&(n+=1);return n}}function ZE(e,t){const n=[];let r=e.parentElement;for(;r;)t?r.matches(t)&&n.push(r):n.push(r),r=r.parentElement;return n}function hm(e,t,n){const r=kt();return n?e[t==="width"?"offsetWidth":"offsetHeight"]+parseFloat(r.getComputedStyle(e,null).getPropertyValue(t==="width"?"margin-right":"margin-top"))+parseFloat(r.getComputedStyle(e,null).getPropertyValue(t==="width"?"margin-left":"margin-bottom")):e.offsetWidth}function Qe(e){return(Array.isArray(e)?e:[e]).filter(t=>!!t)}function Cs(e,t=""){typeof trustedTypes<"u"?e.innerHTML=trustedTypes.createPolicy("html",{createHTML:n=>n}).createHTML(t):e.innerHTML=t}function JE(e,t,n,r){return e.params.createElements&&Object.keys(r).forEach(i=>{if(!n[i]&&n.auto===!0){let o=Dn(e.el,`.${r[i]}`)[0];o||(o=nu("div",r[i]),o.className=r[i],e.el.append(o)),n[i]=o,t[i]=o}}),n}const M1='<svg class="swiper-navigation-icon" width="11" height="20" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.38296 20.0762C0.111788 19.805 0.111788 19.3654 0.38296 19.0942L9.19758 10.2796L0.38296 1.46497C0.111788 1.19379 0.111788 0.754138 0.38296 0.482966C0.654131 0.211794 1.09379 0.211794 1.36496 0.482966L10.4341 9.55214C10.8359 9.9539 10.8359 10.6053 10.4341 11.007L1.36496 20.0762C1.09379 20.3474 0.654131 20.3474 0.38296 20.0762Z" fill="currentColor"/></svg>';function S6({swiper:e,extendParams:t,on:n,emit:r}){t({navigation:{nextEl:null,prevEl:null,addIcons:!0,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock",navigationDisabledClass:"swiper-navigation-disabled"}}),e.navigation={nextEl:null,prevEl:null,arrowSvg:M1};function i(p){let h;return p&&typeof p=="string"&&e.isElement&&(h=e.el.querySelector(p)||e.hostEl.querySelector(p),h)?h:(p&&(typeof p=="string"&&(h=[...document.querySelectorAll(p)]),e.params.uniqueNavElements&&typeof p=="string"&&h&&h.length>1&&e.el.querySelectorAll(p).length===1?h=e.el.querySelector(p):h&&h.length===1&&(h=h[0])),p&&!h?p:h)}function o(p,h){const y=e.params.navigation;p=Qe(p),p.forEach(w=>{w&&(w.classList[h?"add":"remove"](...y.disabledClass.split(" ")),w.tagName==="BUTTON"&&(w.disabled=h),e.params.watchOverflow&&e.enabled&&w.classList[e.isLocked?"add":"remove"](y.lockClass))})}function a(){const{nextEl:p,prevEl:h}=e.navigation;if(e.params.loop){o(h,!1),o(p,!1);return}o(h,e.isBeginning&&!e.params.rewind),o(p,e.isEnd&&!e.params.rewind)}function l(p){p.preventDefault(),!(e.isBeginning&&!e.params.loop&&!e.params.rewind)&&(e.slidePrev(),r("navigationPrev"))}function s(p){p.preventDefault(),!(e.isEnd&&!e.params.loop&&!e.params.rewind)&&(e.slideNext(),r("navigationNext"))}function c(){const p=e.params.navigation;if(e.params.navigation=JE(e,e.originalParams.navigation,e.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),!(p.nextEl||p.prevEl))return;let h=i(p.nextEl),y=i(p.prevEl);Object.assign(e.navigation,{nextEl:h,prevEl:y}),h=Qe(h),y=Qe(y);const w=(g,v)=>{if(g){if(p.addIcons&&g.matches(".swiper-button-next,.swiper-button-prev")&&!g.querySelector("svg")){const b=document.createElement("div");Cs(b,M1),g.appendChild(b.querySelector("svg")),b.remove()}g.addEventListener("click",v==="next"?s:l)}!e.enabled&&g&&g.classList.add(...p.lockClass.split(" "))};h.forEach(g=>w(g,"next")),y.forEach(g=>w(g,"prev"))}function d(){let{nextEl:p,prevEl:h}=e.navigation;p=Qe(p),h=Qe(h);const y=(w,g)=>{w.removeEventListener("click",g==="next"?s:l),w.classList.remove(...e.params.navigation.disabledClass.split(" "))};p.forEach(w=>y(w,"next")),h.forEach(w=>y(w,"prev"))}n("init",()=>{e.params.navigation.enabled===!1?m():(c(),a())}),n("toEdge fromEdge lock unlock",()=>{a()}),n("destroy",()=>{d()}),n("enable disable",()=>{let{nextEl:p,prevEl:h}=e.navigation;if(p=Qe(p),h=Qe(h),e.enabled){a();return}[...p,...h].filter(y=>!!y).forEach(y=>y.classList.add(e.params.navigation.lockClass))}),n("click",(p,h)=>{let{nextEl:y,prevEl:w}=e.navigation;y=Qe(y),w=Qe(w);const g=h.target;let v=w.includes(g)||y.includes(g);if(e.isElement&&!v){const b=h.path||h.composedPath&&h.composedPath();b&&(v=b.find(C=>y.includes(C)||w.includes(C)))}if(e.params.navigation.hideOnClick&&!v){if(e.pagination&&e.params.pagination&&e.params.pagination.clickable&&(e.pagination.el===g||e.pagination.el.contains(g)))return;let b;y.length?b=y[0].classList.contains(e.params.navigation.hiddenClass):w.length&&(b=w[0].classList.contains(e.params.navigation.hiddenClass)),r(b===!0?"navigationShow":"navigationHide"),[...y,...w].filter(C=>!!C).forEach(C=>C.classList.toggle(e.params.navigation.hiddenClass))}});const f=()=>{e.el.classList.remove(...e.params.navigation.navigationDisabledClass.split(" ")),c(),a()},m=()=>{e.el.classList.add(...e.params.navigation.navigationDisabledClass.split(" ")),d()};Object.assign(e.navigation,{enable:f,disable:m,update:a,init:c,destroy:d})}function ha(e=""){return`.${e.trim().replace(/([\.:!+\/()[\]#>~*^$|=,'"@{}\\])/g,"\\$1").replace(/ /g,".")}`}function C6({swiper:e,extendParams:t,on:n,emit:r}){const i="swiper-pagination";t({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:g=>g,formatFractionTotal:g=>g,bulletClass:`${i}-bullet`,bulletActiveClass:`${i}-bullet-active`,modifierClass:`${i}-`,currentClass:`${i}-current`,totalClass:`${i}-total`,hiddenClass:`${i}-hidden`,progressbarFillClass:`${i}-progressbar-fill`,progressbarOppositeClass:`${i}-progressbar-opposite`,clickableClass:`${i}-clickable`,lockClass:`${i}-lock`,horizontalClass:`${i}-horizontal`,verticalClass:`${i}-vertical`,paginationDisabledClass:`${i}-disabled`}}),e.pagination={el:null,bullets:[]};let o,a=0;function l(){return!e.params.pagination.el||!e.pagination.el||Array.isArray(e.pagination.el)&&e.pagination.el.length===0}function s(g,v){const{bulletActiveClass:b}=e.params.pagination;g&&(g=g[`${v==="prev"?"previous":"next"}ElementSibling`],g&&(g.classList.add(`${b}-${v}`),g=g[`${v==="prev"?"previous":"next"}ElementSibling`],g&&g.classList.add(`${b}-${v}-${v}`)))}function c(g,v,b){if(g=g%b,v=v%b,v===g+1)return"next";if(v===g-1)return"previous"}function d(g){const v=g.target.closest(ha(e.params.pagination.bulletClass));if(!v)return;g.preventDefault();const b=ru(v)*e.params.slidesPerGroup;if(e.params.loop){if(e.realIndex===b)return;const C=c(e.realIndex,b,e.slides.length);C==="next"?e.slideNext():C==="previous"?e.slidePrev():e.slideToLoop(b)}else e.slideTo(b)}function f(){const g=e.rtl,v=e.params.pagination;if(l())return;let b=e.pagination.el;b=Qe(b);let C,S;const P=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.slides.length,k=e.params.loop?Math.ceil(P/e.params.slidesPerGroup):e.snapGrid.length;if(e.params.loop?(S=e.previousRealIndex||0,C=e.params.slidesPerGroup>1?Math.floor(e.realIndex/e.params.slidesPerGroup):e.realIndex):typeof e.snapIndex<"u"?(C=e.snapIndex,S=e.previousSnapIndex):(S=e.previousIndex||0,C=e.activeIndex||0),v.type==="bullets"&&e.pagination.bullets&&e.pagination.bullets.length>0){const _=e.pagination.bullets;let T,$,I;if(v.dynamicBullets&&(o=hm(_[0],e.isHorizontal()?"width":"height",!0),b.forEach(M=>{M.style[e.isHorizontal()?"width":"height"]=`${o*(v.dynamicMainBullets+4)}px`}),v.dynamicMainBullets>1&&S!==void 0&&(a+=C-(S||0),a>v.dynamicMainBullets-1?a=v.dynamicMainBullets-1:a<0&&(a=0)),T=Math.max(C-a,0),$=T+(Math.min(_.length,v.dynamicMainBullets)-1),I=($+T)/2),_.forEach(M=>{const j=[...["","-next","-next-next","-prev","-prev-prev","-main"].map(F=>`${v.bulletActiveClass}${F}`)].map(F=>typeof F=="string"&&F.includes(" ")?F.split(" "):F).flat();M.classList.remove(...j)}),b.length>1)_.forEach(M=>{const j=ru(M);j===C?M.classList.add(...v.bulletActiveClass.split(" ")):e.isElement&&M.setAttribute("part","bullet"),v.dynamicBullets&&(j>=T&&j<=$&&M.classList.add(...`${v.bulletActiveClass}-main`.split(" ")),j===T&&s(M,"prev"),j===$&&s(M,"next"))});else{const M=_[C];if(M&&M.classList.add(...v.bulletActiveClass.split(" ")),e.isElement&&_.forEach((j,F)=>{j.setAttribute("part",F===C?"bullet-active":"bullet")}),v.dynamicBullets){const j=_[T],F=_[$];for(let D=T;D<=$;D+=1)_[D]&&_[D].classList.add(...`${v.bulletActiveClass}-main`.split(" "));s(j,"prev"),s(F,"next")}}if(v.dynamicBullets){const M=Math.min(_.length,v.dynamicMainBullets+4),j=(o*M-o)/2-I*o,F=g?"right":"left";_.forEach(D=>{D.style[e.isHorizontal()?F:"top"]=`${j}px`})}}b.forEach((_,T)=>{if(v.type==="fraction"&&(_.querySelectorAll(ha(v.currentClass)).forEach($=>{$.textContent=v.formatFractionCurrent(C+1)}),_.querySelectorAll(ha(v.totalClass)).forEach($=>{$.textContent=v.formatFractionTotal(k)})),v.type==="progressbar"){let $;v.progressbarOpposite?$=e.isHorizontal()?"vertical":"horizontal":$=e.isHorizontal()?"horizontal":"vertical";const I=(C+1)/k;let M=1,j=1;$==="horizontal"?M=I:j=I,_.querySelectorAll(ha(v.progressbarFillClass)).forEach(F=>{F.style.transform=`translate3d(0,0,0) scaleX(${M}) scaleY(${j})`,F.style.transitionDuration=`${e.params.speed}ms`})}v.type==="custom"&&v.renderCustom?(Cs(_,v.renderCustom(e,C+1,k)),T===0&&r("paginationRender",_)):(T===0&&r("paginationRender",_),r("paginationUpdate",_)),e.params.watchOverflow&&e.enabled&&_.classList[e.isLocked?"add":"remove"](v.lockClass)})}function m(){const g=e.params.pagination;if(l())return;const v=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.grid&&e.params.grid.rows>1?e.slides.length/Math.ceil(e.params.grid.rows):e.slides.length;let b=e.pagination.el;b=Qe(b);let C="";if(g.type==="bullets"){let S=e.params.loop?Math.ceil(v/e.params.slidesPerGroup):e.snapGrid.length;e.params.freeMode&&e.params.freeMode.enabled&&S>v&&(S=v);for(let P=0;P<S;P+=1)g.renderBullet?C+=g.renderBullet.call(e,P,g.bulletClass):C+=`<${g.bulletElement} ${e.isElement?'part="bullet"':""} class="${g.bulletClass}"></${g.bulletElement}>`}g.type==="fraction"&&(g.renderFraction?C=g.renderFraction.call(e,g.currentClass,g.totalClass):C=`<span class="${g.currentClass}"></span> / <span class="${g.totalClass}"></span>`),g.type==="progressbar"&&(g.renderProgressbar?C=g.renderProgressbar.call(e,g.progressbarFillClass):C=`<span class="${g.progressbarFillClass}"></span>`),e.pagination.bullets=[],b.forEach(S=>{g.type!=="custom"&&Cs(S,C||""),g.type==="bullets"&&e.pagination.bullets.push(...S.querySelectorAll(ha(g.bulletClass)))}),g.type!=="custom"&&r("paginationRender",b[0])}function p(){e.params.pagination=JE(e,e.originalParams.pagination,e.params.pagination,{el:"swiper-pagination"});const g=e.params.pagination;if(!g.el)return;let v;typeof g.el=="string"&&e.isElement&&(v=e.el.querySelector(g.el)),!v&&typeof g.el=="string"&&(v=[...document.querySelectorAll(g.el)]),v||(v=g.el),!(!v||v.length===0)&&(e.params.uniqueNavElements&&typeof g.el=="string"&&Array.isArray(v)&&v.length>1&&(v=[...e.el.querySelectorAll(g.el)],v.length>1&&(v=v.find(b=>ZE(b,".swiper")[0]===e.el))),Array.isArray(v)&&v.length===1&&(v=v[0]),Object.assign(e.pagination,{el:v}),v=Qe(v),v.forEach(b=>{g.type==="bullets"&&g.clickable&&b.classList.add(...(g.clickableClass||"").split(" ")),b.classList.add(g.modifierClass+g.type),b.classList.add(e.isHorizontal()?g.horizontalClass:g.verticalClass),g.type==="bullets"&&g.dynamicBullets&&(b.classList.add(`${g.modifierClass}${g.type}-dynamic`),a=0,g.dynamicMainBullets<1&&(g.dynamicMainBullets=1)),g.type==="progressbar"&&g.progressbarOpposite&&b.classList.add(g.progressbarOppositeClass),g.clickable&&b.addEventListener("click",d),e.enabled||b.classList.add(g.lockClass)}))}function h(){const g=e.params.pagination;if(l())return;let v=e.pagination.el;v&&(v=Qe(v),v.forEach(b=>{b.classList.remove(g.hiddenClass),b.classList.remove(g.modifierClass+g.type),b.classList.remove(e.isHorizontal()?g.horizontalClass:g.verticalClass),g.clickable&&(b.classList.remove(...(g.clickableClass||"").split(" ")),b.removeEventListener("click",d))})),e.pagination.bullets&&e.pagination.bullets.forEach(b=>b.classList.remove(...g.bulletActiveClass.split(" ")))}n("changeDirection",()=>{if(!e.pagination||!e.pagination.el)return;const g=e.params.pagination;let{el:v}=e.pagination;v=Qe(v),v.forEach(b=>{b.classList.remove(g.horizontalClass,g.verticalClass),b.classList.add(e.isHorizontal()?g.horizontalClass:g.verticalClass)})}),n("init",()=>{e.params.pagination.enabled===!1?w():(p(),m(),f())}),n("activeIndexChange",()=>{typeof e.snapIndex>"u"&&f()}),n("snapIndexChange",()=>{f()}),n("snapGridLengthChange",()=>{m(),f()}),n("destroy",()=>{h()}),n("enable disable",()=>{let{el:g}=e.pagination;g&&(g=Qe(g),g.forEach(v=>v.classList[e.enabled?"remove":"add"](e.params.pagination.lockClass)))}),n("lock unlock",()=>{f()}),n("click",(g,v)=>{const b=v.target,C=Qe(e.pagination.el);if(e.params.pagination.el&&e.params.pagination.hideOnClick&&C&&C.length>0&&!b.classList.contains(e.params.pagination.bulletClass)){if(e.navigation&&(e.navigation.nextEl&&b===e.navigation.nextEl||e.navigation.prevEl&&b===e.navigation.prevEl))return;const S=C[0].classList.contains(e.params.pagination.hiddenClass);r(S===!0?"paginationShow":"paginationHide"),C.forEach(P=>P.classList.toggle(e.params.pagination.hiddenClass))}});const y=()=>{e.el.classList.remove(e.params.pagination.paginationDisabledClass);let{el:g}=e.pagination;g&&(g=Qe(g),g.forEach(v=>v.classList.remove(e.params.pagination.paginationDisabledClass))),p(),m(),f()},w=()=>{e.el.classList.add(e.params.pagination.paginationDisabledClass);let{el:g}=e.pagination;g&&(g=Qe(g),g.forEach(v=>v.classList.add(e.params.pagination.paginationDisabledClass))),h()};Object.assign(e.pagination,{enable:y,disable:w,render:m,update:f,init:p,destroy:h})}function E6({swiper:e,extendParams:t,on:n,emit:r,params:i}){e.autoplay={running:!1,paused:!1,timeLeft:0},t({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!1,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}});let o,a,l=i&&i.autoplay?i.autoplay.delay:3e3,s=i&&i.autoplay?i.autoplay.delay:3e3,c,d=new Date().getTime(),f,m,p,h,y,w;function g(R){!e||e.destroyed||!e.wrapperEl||R.target===e.wrapperEl&&(e.wrapperEl.removeEventListener("transitionend",g),!(w||R.detail&&R.detail.bySwiperTouchMove)&&T())}const v=()=>{if(e.destroyed||!e.autoplay.running)return;e.autoplay.paused?f=!0:f&&(s=c,f=!1);const R=e.autoplay.paused?c:d+s-new Date().getTime();e.autoplay.timeLeft=R,r("autoplayTimeLeft",R,R/l),a=requestAnimationFrame(()=>{v()})},b=()=>{let R;return e.virtual&&e.params.virtual.enabled?R=e.slides.find(A=>A.classList.contains("swiper-slide-active")):R=e.slides[e.activeIndex],R?parseInt(R.getAttribute("data-swiper-autoplay"),10):void 0},C=()=>{let R=e.params.autoplay.delay;const O=b();return!Number.isNaN(O)&&O>0&&(R=O),R},S=R=>{if(e.destroyed||!e.autoplay.running)return;cancelAnimationFrame(a),v();let O=R;typeof O>"u"&&(O=C(),l=O,s=O),c=O;const A=e.params.speed,N=()=>{!e||e.destroyed||(e.params.autoplay.reverseDirection?!e.isBeginning||e.params.loop||e.params.rewind?(e.slidePrev(A,!0,!0),r("autoplay")):e.params.autoplay.stopOnLastSlide||(e.slideTo(e.slides.length-1,A,!0,!0),r("autoplay")):!e.isEnd||e.params.loop||e.params.rewind?(e.slideNext(A,!0,!0),r("autoplay")):e.params.autoplay.stopOnLastSlide||(e.slideTo(0,A,!0,!0),r("autoplay")),e.params.cssMode&&(d=new Date().getTime(),requestAnimationFrame(()=>{S()})))};return O>0?(clearTimeout(o),o=setTimeout(()=>{N()},O)):requestAnimationFrame(()=>{N()}),O},P=()=>{d=new Date().getTime(),e.autoplay.running=!0,S(),r("autoplayStart")},k=()=>{e.autoplay.running=!1,clearTimeout(o),cancelAnimationFrame(a),r("autoplayStop")},_=(R,O)=>{if(e.destroyed||!e.autoplay.running)return;clearTimeout(o),R||(y=!0);const A=()=>{r("autoplayPause"),e.params.autoplay.waitForTransition?e.wrapperEl.addEventListener("transitionend",g):T()};if(e.autoplay.paused=!0,O){A();return}c=(c||e.params.autoplay.delay)-(new Date().getTime()-d),!(e.isEnd&&c<0&&!e.params.loop)&&(c<0&&(c=0),A())},T=()=>{e.isEnd&&c<0&&!e.params.loop||e.destroyed||!e.autoplay.running||(d=new Date().getTime(),y?(y=!1,S(c)):S(),e.autoplay.paused=!1,r("autoplayResume"))},$=()=>{if(e.destroyed||!e.autoplay.running)return;const R=zn();R.visibilityState==="hidden"&&(y=!0,_(!0)),R.visibilityState==="visible"&&T()},I=R=>{R.pointerType==="mouse"&&(y=!0,w=!0,!(e.animating||e.autoplay.paused)&&_(!0))},M=R=>{R.pointerType==="mouse"&&(w=!1,e.autoplay.paused&&T())},j=()=>{e.params.autoplay.pauseOnMouseEnter&&(e.el.addEventListener("pointerenter",I),e.el.addEventListener("pointerleave",M))},F=()=>{e.el&&typeof e.el!="string"&&(e.el.removeEventListener("pointerenter",I),e.el.removeEventListener("pointerleave",M))},D=()=>{zn().addEventListener("visibilitychange",$)},z=()=>{zn().removeEventListener("visibilitychange",$)};n("init",()=>{e.params.autoplay.enabled&&(j(),D(),P())}),n("destroy",()=>{F(),z(),e.autoplay.running&&k()}),n("_freeModeStaticRelease",()=>{(p||y)&&T()}),n("_freeModeNoMomentumRelease",()=>{e.params.autoplay.disableOnInteraction?k():_(!0,!0)}),n("beforeTransitionStart",(R,O,A)=>{e.destroyed||!e.autoplay.running||(A||!e.params.autoplay.disableOnInteraction?_(!0,!0):k())}),n("sliderFirstMove",()=>{if(!(e.destroyed||!e.autoplay.running)){if(e.params.autoplay.disableOnInteraction){k();return}m=!0,p=!1,y=!1,h=setTimeout(()=>{y=!0,p=!0,_(!0)},200)}}),n("touchEnd",()=>{if(!(e.destroyed||!e.autoplay.running||!m)){if(clearTimeout(h),clearTimeout(o),e.params.autoplay.disableOnInteraction){p=!1,m=!1;return}p&&e.params.cssMode&&T(),p=!1,m=!1}}),n("slideChange",()=>{e.destroyed||!e.autoplay.running||e.autoplay.paused&&(c=C(),l=C())}),Object.assign(e.autoplay,{start:P,stop:k,pause:_,resume:T})}let Yf;function _6(){const e=kt(),t=zn();return{smoothScroll:t.documentElement&&t.documentElement.style&&"scrollBehavior"in t.documentElement.style,touch:!!("ontouchstart"in e||e.DocumentTouch&&t instanceof e.DocumentTouch)}}function e_(){return Yf||(Yf=_6()),Yf}let Xf;function k6({userAgent:e}={}){const t=e_(),n=kt(),r=n.navigator.platform,i=e||n.navigator.userAgent,o={ios:!1,android:!1},a=n.screen.width,l=n.screen.height,s=i.match(/(Android);?[\s\/]+([\d.]+)?/);let c=i.match(/(iPad)(?!\1).*OS\s([\d_]+)/);const d=i.match(/(iPod)(.*OS\s([\d_]+))?/),f=!c&&i.match(/(iPhone\sOS|iOS)\s([\d_]+)/),m=r==="Win32";let p=r==="MacIntel";const h=["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"];return!c&&p&&t.touch&&h.indexOf(`${a}x${l}`)>=0&&(c=i.match(/(Version)\/([\d.]+)/),c||(c=[0,1,"13_0_0"]),p=!1),s&&!m&&(o.os="android",o.android=!0),(c||f||d)&&(o.os="ios",o.ios=!0),o}function t_(e={}){return Xf||(Xf=k6(e)),Xf}let Kf;function P6(){const e=kt(),t=t_();let n=!1;function r(){const l=e.navigator.userAgent.toLowerCase();return l.indexOf("safari")>=0&&l.indexOf("chrome")<0&&l.indexOf("android")<0}if(r()){const l=String(e.navigator.userAgent);if(l.includes("Version/")){const[s,c]=l.split("Version/")[1].split(" ")[0].split(".").map(d=>Number(d));n=s<16||s===16&&c<2}}const i=/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent),o=r(),a=o||i&&t.ios;return{isSafari:n||o,needPerspectiveFix:n,need3dFix:a,isWebView:i}}function n_(){return Kf||(Kf=P6()),Kf}function O6({swiper:e,on:t,emit:n}){const r=kt();let i=null,o=null;const a=()=>{!e||e.destroyed||!e.initialized||(n("beforeResize"),n("resize"))},l=()=>{!e||e.destroyed||!e.initialized||(i=new ResizeObserver(d=>{o=r.requestAnimationFrame(()=>{const{width:f,height:m}=e;let p=f,h=m;d.forEach(({contentBoxSize:y,contentRect:w,target:g})=>{g&&g!==e.el||(p=w?w.width:(y[0]||y).inlineSize,h=w?w.height:(y[0]||y).blockSize)}),(p!==f||h!==m)&&a()})}),i.observe(e.el))},s=()=>{o&&r.cancelAnimationFrame(o),i&&i.unobserve&&e.el&&(i.unobserve(e.el),i=null)},c=()=>{!e||e.destroyed||!e.initialized||n("orientationchange")};t("init",()=>{if(e.params.resizeObserver&&typeof r.ResizeObserver<"u"){l();return}r.addEventListener("resize",a),r.addEventListener("orientationchange",c)}),t("destroy",()=>{s(),r.removeEventListener("resize",a),r.removeEventListener("orientationchange",c)})}function T6({swiper:e,extendParams:t,on:n,emit:r}){const i=[],o=kt(),a=(c,d={})=>{const f=o.MutationObserver||o.WebkitMutationObserver,m=new f(p=>{if(e.__preventObserver__)return;if(p.length===1){r("observerUpdate",p[0]);return}const h=function(){r("observerUpdate",p[0])};o.requestAnimationFrame?o.requestAnimationFrame(h):o.setTimeout(h,0)});m.observe(c,{attributes:typeof d.attributes>"u"?!0:d.attributes,childList:e.isElement||(typeof d.childList>"u"?!0:d).childList,characterData:typeof d.characterData>"u"?!0:d.characterData}),i.push(m)},l=()=>{if(e.params.observer){if(e.params.observeParents){const c=ZE(e.hostEl);for(let d=0;d<c.length;d+=1)a(c[d])}a(e.hostEl,{childList:e.params.observeSlideChildren}),a(e.wrapperEl,{attributes:!1})}},s=()=>{i.forEach(c=>{c.disconnect()}),i.splice(0,i.length)};t({observer:!1,observeParents:!1,observeSlideChildren:!1}),n("init",l),n("destroy",s)}var j6={on(e,t,n){const r=this;if(!r.eventsListeners||r.destroyed||typeof t!="function")return r;const i=n?"unshift":"push";return e.split(" ").forEach(o=>{r.eventsListeners[o]||(r.eventsListeners[o]=[]),r.eventsListeners[o][i](t)}),r},once(e,t,n){const r=this;if(!r.eventsListeners||r.destroyed||typeof t!="function")return r;function i(...o){r.off(e,i),i.__emitterProxy&&delete i.__emitterProxy,t.apply(r,o)}return i.__emitterProxy=t,r.on(e,i,n)},onAny(e,t){const n=this;if(!n.eventsListeners||n.destroyed||typeof e!="function")return n;const r=t?"unshift":"push";return n.eventsAnyListeners.indexOf(e)<0&&n.eventsAnyListeners[r](e),n},offAny(e){const t=this;if(!t.eventsListeners||t.destroyed||!t.eventsAnyListeners)return t;const n=t.eventsAnyListeners.indexOf(e);return n>=0&&t.eventsAnyListeners.splice(n,1),t},off(e,t){const n=this;return!n.eventsListeners||n.destroyed||!n.eventsListeners||e.split(" ").forEach(r=>{typeof t>"u"?n.eventsListeners[r]=[]:n.eventsListeners[r]&&n.eventsListeners[r].forEach((i,o)=>{(i===t||i.__emitterProxy&&i.__emitterProxy===t)&&n.eventsListeners[r].splice(o,1)})}),n},emit(...e){const t=this;if(!t.eventsListeners||t.destroyed||!t.eventsListeners)return t;let n,r,i;return typeof e[0]=="string"||Array.isArray(e[0])?(n=e[0],r=e.slice(1,e.length),i=t):(n=e[0].events,r=e[0].data,i=e[0].context||t),r.unshift(i),(Array.isArray(n)?n:n.split(" ")).forEach(a=>{t.eventsAnyListeners&&t.eventsAnyListeners.length&&t.eventsAnyListeners.forEach(l=>{l.apply(i,[a,...r])}),t.eventsListeners&&t.eventsListeners[a]&&t.eventsListeners[a].forEach(l=>{l.apply(i,r)})}),t}};function $6(){const e=this;let t,n;const r=e.el;typeof e.params.width<"u"&&e.params.width!==null?t=e.params.width:t=r.clientWidth,typeof e.params.height<"u"&&e.params.height!==null?n=e.params.height:n=r.clientHeight,!(t===0&&e.isHorizontal()||n===0&&e.isVertical())&&(t=t-parseInt(Tr(r,"padding-left")||0,10)-parseInt(Tr(r,"padding-right")||0,10),n=n-parseInt(Tr(r,"padding-top")||0,10)-parseInt(Tr(r,"padding-bottom")||0,10),Number.isNaN(t)&&(t=0),Number.isNaN(n)&&(n=0),Object.assign(e,{width:t,height:n,size:e.isHorizontal()?t:n}))}function I6(){const e=this;function t($,I){return parseFloat($.getPropertyValue(e.getDirectionLabel(I))||0)}const n=e.params,{wrapperEl:r,slidesEl:i,rtlTranslate:o,wrongRTL:a}=e,l=e.virtual&&n.virtual.enabled,s=l?e.virtual.slides.length:e.slides.length,c=Dn(i,`.${e.params.slideClass}, swiper-slide`),d=l?e.virtual.slides.length:c.length;let f=[];const m=[],p=[];let h=n.slidesOffsetBefore;typeof h=="function"&&(h=n.slidesOffsetBefore.call(e));let y=n.slidesOffsetAfter;typeof y=="function"&&(y=n.slidesOffsetAfter.call(e));const w=e.snapGrid.length,g=e.slidesGrid.length,v=e.size-h-y;let b=n.spaceBetween,C=-h,S=0,P=0;if(typeof v>"u")return;typeof b=="string"&&b.indexOf("%")>=0?b=parseFloat(b.replace("%",""))/100*v:typeof b=="string"&&(b=parseFloat(b)),e.virtualSize=-b-h-y,c.forEach($=>{o?$.style.marginLeft="":$.style.marginRight="",$.style.marginBottom="",$.style.marginTop=""}),n.centeredSlides&&n.cssMode&&(zi(r,"--swiper-centered-offset-before",""),zi(r,"--swiper-centered-offset-after","")),n.cssMode&&(zi(r,"--swiper-slides-offset-before",`${h}px`),zi(r,"--swiper-slides-offset-after",`${y}px`));const k=n.grid&&n.grid.rows>1&&e.grid;k?e.grid.initSlides(c):e.grid&&e.grid.unsetSlides();let _;const T=n.slidesPerView==="auto"&&n.breakpoints&&Object.keys(n.breakpoints).filter($=>typeof n.breakpoints[$].slidesPerView<"u").length>0;for(let $=0;$<d;$+=1){_=0;const I=c[$];if(!(I&&(k&&e.grid.updateSlide($,I,c),Tr(I,"display")==="none"))){if(l&&n.slidesPerView==="auto")n.virtual.slidesPerViewAutoSlideSize&&(_=n.virtual.slidesPerViewAutoSlideSize),_&&I&&(n.roundLengths&&(_=Math.floor(_)),I.style[e.getDirectionLabel("width")]=`${_}px`);else if(n.slidesPerView==="auto"){T&&(I.style[e.getDirectionLabel("width")]="");const M=getComputedStyle(I),j=I.style.transform,F=I.style.webkitTransform;if(j&&(I.style.transform="none"),F&&(I.style.webkitTransform="none"),n.roundLengths)_=e.isHorizontal()?hm(I,"width",!0):hm(I,"height",!0);else{const D=t(M,"width"),z=t(M,"padding-left"),R=t(M,"padding-right"),O=t(M,"margin-left"),A=t(M,"margin-right"),N=M.getPropertyValue("box-sizing");if(N&&N==="border-box")_=D+O+A;else{const{clientWidth:B,offsetWidth:L}=I;_=D+z+R+O+A+(L-B)}}j&&(I.style.transform=j),F&&(I.style.webkitTransform=F),n.roundLengths&&(_=Math.floor(_))}else _=(v-(n.slidesPerView-1)*b)/n.slidesPerView,n.roundLengths&&(_=Math.floor(_)),I&&(I.style[e.getDirectionLabel("width")]=`${_}px`);I&&(I.swiperSlideSize=_),p.push(_),n.centeredSlides?(C=C+_/2+S/2+b,S===0&&$!==0&&(C=C-v/2-b),$===0&&(C=C-v/2-b),Math.abs(C)<1/1e3&&(C=0),n.roundLengths&&(C=Math.floor(C)),P%n.slidesPerGroup===0&&f.push(C),m.push(C)):(n.roundLengths&&(C=Math.floor(C)),(P-Math.min(e.params.slidesPerGroupSkip,P))%e.params.slidesPerGroup===0&&f.push(C),m.push(C),C=C+_+b),e.virtualSize+=_+b,S=_,P+=1}}if(e.virtualSize=Math.max(e.virtualSize,v)+y,o&&a&&(n.effect==="slide"||n.effect==="coverflow")&&(r.style.width=`${e.virtualSize+b}px`),n.setWrapperSize&&(r.style[e.getDirectionLabel("width")]=`${e.virtualSize+b}px`),k&&e.grid.updateWrapperSize(_,f),!n.centeredSlides){const $=n.slidesPerView!=="auto"&&n.slidesPerView%1!==0,I=n.snapToSlideEdge&&!n.loop&&(n.slidesPerView==="auto"||$);let M=f.length;if(I){let F;if(n.slidesPerView==="auto"){F=1;let D=0;for(let z=p.length-1;z>=0&&(D+=p[z]+(z<p.length-1?b:0),D<=v);z-=1)F=p.length-z}else F=Math.floor(n.slidesPerView);M=Math.max(d-F,0)}const j=[];for(let F=0;F<f.length;F+=1){let D=f[F];n.roundLengths&&(D=Math.floor(D)),I?F<=M&&j.push(D):f[F]<=e.virtualSize-v&&j.push(D)}f=j,Math.floor(e.virtualSize-v)-Math.floor(f[f.length-1])>1&&(I||f.push(e.virtualSize-v))}if(l&&n.loop){const $=p[0]+b;if(n.slidesPerGroup>1){const I=Math.ceil((e.virtual.slidesBefore+e.virtual.slidesAfter)/n.slidesPerGroup),M=$*n.slidesPerGroup;for(let j=0;j<I;j+=1)f.push(f[f.length-1]+M)}for(let I=0;I<e.virtual.slidesBefore+e.virtual.slidesAfter;I+=1)n.slidesPerGroup===1&&f.push(f[f.length-1]+$),m.push(m[m.length-1]+$),e.virtualSize+=$}if(f.length===0&&(f=[0]),b!==0){const $=e.isHorizontal()&&o?"marginLeft":e.getDirectionLabel("marginRight");c.filter((I,M)=>!n.cssMode||n.loop?!0:M!==c.length-1).forEach(I=>{I.style[$]=`${b}px`})}if(n.centeredSlides&&n.centeredSlidesBounds){let $=0;p.forEach(M=>{$+=M+(b||0)}),$-=b;const I=$>v?$-v:0;f=f.map(M=>M<=0?-h:M>I?I+y:M)}if(n.centerInsufficientSlides){let $=0;if(p.forEach(I=>{$+=I+(b||0)}),$-=b,$<v){const I=(v-$)/2;f.forEach((M,j)=>{f[j]=M-I}),m.forEach((M,j)=>{m[j]=M+I})}}if(Object.assign(e,{slides:c,snapGrid:f,slidesGrid:m,slidesSizesGrid:p}),n.centeredSlides&&n.cssMode&&!n.centeredSlidesBounds){zi(r,"--swiper-centered-offset-before",`${-f[0]}px`),zi(r,"--swiper-centered-offset-after",`${e.size/2-p[p.length-1]/2}px`);const $=-e.snapGrid[0],I=-e.slidesGrid[0];e.snapGrid=e.snapGrid.map(M=>M+$),e.slidesGrid=e.slidesGrid.map(M=>M+I)}if(d!==s&&e.emit("slidesLengthChange"),f.length!==w&&(e.params.watchOverflow&&e.checkOverflow(),e.emit("snapGridLengthChange")),m.length!==g&&e.emit("slidesGridLengthChange"),n.watchSlidesProgress&&e.updateSlidesOffset(),e.emit("slidesUpdated"),!l&&!n.cssMode&&(n.effect==="slide"||n.effect==="fade")){const $=`${n.containerModifierClass}backface-hidden`,I=e.el.classList.contains($);d<=n.maxBackfaceHiddenSlides?I||e.el.classList.add($):I&&e.el.classList.remove($)}}function M6(e){const t=this,n=[],r=t.virtual&&t.params.virtual.enabled;let i=0,o;typeof e=="number"?t.setTransition(e):e===!0&&t.setTransition(t.params.speed);const a=l=>r?t.slides[t.getSlideIndexByData(l)]:t.slides[l];if(t.params.slidesPerView!=="auto"&&t.params.slidesPerView>1)if(t.params.centeredSlides)(t.visibleSlides||[]).forEach(l=>{n.push(l)});else for(o=0;o<Math.ceil(t.params.slidesPerView);o+=1){const l=t.activeIndex+o;if(l>t.slides.length&&!r)break;n.push(a(l))}else n.push(a(t.activeIndex));for(o=0;o<n.length;o+=1)if(typeof n[o]<"u"){const l=n[o].offsetHeight;i=l>i?l:i}(i||i===0)&&(t.wrapperEl.style.height=`${i}px`)}function A6(){const e=this,t=e.slides,n=e.isElement?e.isHorizontal()?e.wrapperEl.offsetLeft:e.wrapperEl.offsetTop:0;for(let r=0;r<t.length;r+=1)t[r].swiperSlideOffset=(e.isHorizontal()?t[r].offsetLeft:t[r].offsetTop)-n-e.cssOverflowAdjustment()}const A1=(e,t,n)=>{t&&!e.classList.contains(n)?e.classList.add(n):!t&&e.classList.contains(n)&&e.classList.remove(n)};function D6(e=this&&this.translate||0){const t=this,n=t.params,{slides:r,rtlTranslate:i,snapGrid:o}=t;if(r.length===0)return;typeof r[0].swiperSlideOffset>"u"&&t.updateSlidesOffset();let a=-e;i&&(a=e),t.visibleSlidesIndexes=[],t.visibleSlides=[];let l=n.spaceBetween;typeof l=="string"&&l.indexOf("%")>=0?l=parseFloat(l.replace("%",""))/100*t.size:typeof l=="string"&&(l=parseFloat(l));for(let s=0;s<r.length;s+=1){const c=r[s];let d=c.swiperSlideOffset;n.cssMode&&n.centeredSlides&&(d-=r[0].swiperSlideOffset);const f=(a+(n.centeredSlides?t.minTranslate():0)-d)/(c.swiperSlideSize+l),m=(a-o[0]+(n.centeredSlides?t.minTranslate():0)-d)/(c.swiperSlideSize+l),p=-(a-d),h=p+t.slidesSizesGrid[s],y=p>=0&&p<=t.size-t.slidesSizesGrid[s],w=p>=0&&p<t.size-1||h>1&&h<=t.size||p<=0&&h>=t.size;w&&(t.visibleSlides.push(c),t.visibleSlidesIndexes.push(s)),A1(c,w,n.slideVisibleClass),A1(c,y,n.slideFullyVisibleClass),c.progress=i?-f:f,c.originalProgress=i?-m:m}}function L6(e){const t=this;if(typeof e>"u"){const d=t.rtlTranslate?-1:1;e=t&&t.translate&&t.translate*d||0}const n=t.params,r=t.maxTranslate()-t.minTranslate();let{progress:i,isBeginning:o,isEnd:a,progressLoop:l}=t;const s=o,c=a;if(r===0)i=0,o=!0,a=!0;else{i=(e-t.minTranslate())/r;const d=Math.abs(e-t.minTranslate())<1,f=Math.abs(e-t.maxTranslate())<1;o=d||i<=0,a=f||i>=1,d&&(i=0),f&&(i=1)}if(n.loop){const d=t.getSlideIndexByData(0),f=t.getSlideIndexByData(t.slides.length-1),m=t.slidesGrid[d],p=t.slidesGrid[f],h=t.slidesGrid[t.slidesGrid.length-1],y=Math.abs(e);y>=m?l=(y-m)/h:l=(y+h-p)/h,l>1&&(l-=1)}Object.assign(t,{progress:i,progressLoop:l,isBeginning:o,isEnd:a}),(n.watchSlidesProgress||n.centeredSlides&&n.autoHeight)&&t.updateSlidesProgress(e),o&&!s&&t.emit("reachBeginning toEdge"),a&&!c&&t.emit("reachEnd toEdge"),(s&&!o||c&&!a)&&t.emit("fromEdge"),t.emit("progress",i)}const Qf=(e,t,n)=>{t&&!e.classList.contains(n)?e.classList.add(n):!t&&e.classList.contains(n)&&e.classList.remove(n)};function R6(){const e=this,{slides:t,params:n,slidesEl:r,activeIndex:i}=e,o=e.virtual&&n.virtual.enabled,a=e.grid&&n.grid&&n.grid.rows>1,l=f=>Dn(r,`.${n.slideClass}${f}, swiper-slide${f}`)[0];let s,c,d;if(o)if(n.loop){let f=i-e.virtual.slidesBefore;f<0&&(f=e.virtual.slides.length+f),f>=e.virtual.slides.length&&(f-=e.virtual.slides.length),s=l(`[data-swiper-slide-index="${f}"]`)}else s=l(`[data-swiper-slide-index="${i}"]`);else a?(s=t.find(f=>f.column===i),d=t.find(f=>f.column===i+1),c=t.find(f=>f.column===i-1)):s=t[i];s&&(a||(d=w6(s,`.${n.slideClass}, swiper-slide`)[0],n.loop&&!d&&(d=t[0]),c=b6(s,`.${n.slideClass}, swiper-slide`)[0],n.loop&&!c===0&&(c=t[t.length-1]))),t.forEach(f=>{Qf(f,f===s,n.slideActiveClass),Qf(f,f===d,n.slideNextClass),Qf(f,f===c,n.slidePrevClass)}),e.emitSlidesClasses()}const rc=(e,t)=>{if(!e||e.destroyed||!e.params)return;const n=()=>e.isElement?"swiper-slide":`.${e.params.slideClass}`,r=t.closest(n());if(r){let i=r.querySelector(`.${e.params.lazyPreloaderClass}`);!i&&e.isElement&&(r.shadowRoot?i=r.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`):requestAnimationFrame(()=>{r.shadowRoot&&(i=r.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`),i&&!i.lazyPreloaderManaged&&i.remove())})),i&&!i.lazyPreloaderManaged&&i.remove()}},Zf=(e,t)=>{if(!e.slides[t])return;const n=e.slides[t].querySelector('[loading="lazy"]');n&&n.removeAttribute("loading")},mm=e=>{if(!e||e.destroyed||!e.params)return;let t=e.params.lazyPreloadPrevNext;const n=e.slides.length;if(!n||!t||t<0)return;t=Math.min(t,n);const r=e.params.slidesPerView==="auto"?e.slidesPerViewDynamic():Math.ceil(e.params.slidesPerView),i=e.activeIndex;if(e.params.grid&&e.params.grid.rows>1){const a=i,l=[a-t];l.push(...Array.from({length:t}).map((s,c)=>a+r+c)),e.slides.forEach((s,c)=>{l.includes(s.column)&&Zf(e,c)});return}const o=i+r-1;if(e.params.rewind||e.params.loop)for(let a=i-t;a<=o+t;a+=1){const l=(a%n+n)%n;(l<i||l>o)&&Zf(e,l)}else for(let a=Math.max(i-t,0);a<=Math.min(o+t,n-1);a+=1)a!==i&&(a>o||a<i)&&Zf(e,a)};function F6(e){const{slidesGrid:t,params:n}=e,r=e.rtlTranslate?e.translate:-e.translate;let i;for(let o=0;o<t.length;o+=1)typeof t[o+1]<"u"?r>=t[o]&&r<t[o+1]-(t[o+1]-t[o])/2?i=o:r>=t[o]&&r<t[o+1]&&(i=o+1):r>=t[o]&&(i=o);return n.normalizeSlideIndex&&(i<0||typeof i>"u")&&(i=0),i}function z6(e){const t=this,n=t.rtlTranslate?t.translate:-t.translate,{snapGrid:r,params:i,activeIndex:o,realIndex:a,snapIndex:l}=t;let s=e,c;const d=p=>{let h=p-t.virtual.slidesBefore;return h<0&&(h=t.virtual.slides.length+h),h>=t.virtual.slides.length&&(h-=t.virtual.slides.length),h};if(typeof s>"u"&&(s=F6(t)),r.indexOf(n)>=0)c=r.indexOf(n);else{const p=Math.min(i.slidesPerGroupSkip,s);c=p+Math.floor((s-p)/i.slidesPerGroup)}if(c>=r.length&&(c=r.length-1),s===o&&!t.params.loop){c!==l&&(t.snapIndex=c,t.emit("snapIndexChange"));return}if(s===o&&t.params.loop&&t.virtual&&t.params.virtual.enabled){t.realIndex=d(s);return}const f=t.grid&&i.grid&&i.grid.rows>1;let m;if(t.virtual&&i.virtual.enabled)i.loop?m=d(s):m=s;else if(f){const p=t.slides.find(y=>y.column===s);let h=parseInt(p.getAttribute("data-swiper-slide-index"),10);Number.isNaN(h)&&(h=Math.max(t.slides.indexOf(p),0)),m=Math.floor(h/i.grid.rows)}else if(t.slides[s]){const p=t.slides[s].getAttribute("data-swiper-slide-index");p?m=parseInt(p,10):m=s}else m=s;Object.assign(t,{previousSnapIndex:l,snapIndex:c,previousRealIndex:a,realIndex:m,previousIndex:o,activeIndex:s}),t.initialized&&mm(t),t.emit("activeIndexChange"),t.emit("snapIndexChange"),(t.initialized||t.params.runCallbacksOnInit)&&(a!==m&&t.emit("realIndexChange"),t.emit("slideChange"))}function N6(e,t){const n=this,r=n.params;let i=e.closest(`.${r.slideClass}, swiper-slide`);!i&&n.isElement&&t&&t.length>1&&t.includes(e)&&[...t.slice(t.indexOf(e)+1,t.length)].forEach(l=>{!i&&l.matches&&l.matches(`.${r.slideClass}, swiper-slide`)&&(i=l)});let o=!1,a;if(i){for(let l=0;l<n.slides.length;l+=1)if(n.slides[l]===i){o=!0,a=l;break}}if(i&&o)n.clickedSlide=i,n.virtual&&n.params.virtual.enabled?n.clickedIndex=parseInt(i.getAttribute("data-swiper-slide-index"),10):n.clickedIndex=a;else{n.clickedSlide=void 0,n.clickedIndex=void 0;return}r.slideToClickedSlide&&n.clickedIndex!==void 0&&n.clickedIndex!==n.activeIndex&&n.slideToClickedSlide()}var B6={updateSize:$6,updateSlides:I6,updateAutoHeight:M6,updateSlidesOffset:A6,updateSlidesProgress:D6,updateProgress:L6,updateSlidesClasses:R6,updateActiveIndex:z6,updateClickedSlide:N6};function V6(e=this.isHorizontal()?"x":"y"){const t=this,{params:n,rtlTranslate:r,translate:i,wrapperEl:o}=t;if(n.virtualTranslate)return r?-i:i;if(n.cssMode)return i;let a=g6(o,e);return a+=t.cssOverflowAdjustment(),r&&(a=-a),a||0}function W6(e,t){const n=this,{rtlTranslate:r,params:i,wrapperEl:o,progress:a}=n;let l=0,s=0;const c=0;n.isHorizontal()?l=r?-e:e:s=e,i.roundLengths&&(l=Math.floor(l),s=Math.floor(s)),n.previousTranslate=n.translate,n.translate=n.isHorizontal()?l:s,i.cssMode?o[n.isHorizontal()?"scrollLeft":"scrollTop"]=n.isHorizontal()?-l:-s:i.virtualTranslate||(n.isHorizontal()?l-=n.cssOverflowAdjustment():s-=n.cssOverflowAdjustment(),o.style.transform=`translate3d(${l}px, ${s}px, ${c}px)`);let d;const f=n.maxTranslate()-n.minTranslate();f===0?d=0:d=(e-n.minTranslate())/f,d!==a&&n.updateProgress(e),n.emit("setTranslate",n.translate,t)}function U6(){return-this.snapGrid[0]}function H6(){return-this.snapGrid[this.snapGrid.length-1]}function G6(e=0,t=this.params.speed,n=!0,r=!0,i){const o=this,{params:a,wrapperEl:l}=o;if(o.animating&&a.preventInteractionOnTransition)return!1;const s=o.minTranslate(),c=o.maxTranslate();let d;if(r&&e>s?d=s:r&&e<c?d=c:d=e,o.updateProgress(d),a.cssMode){const f=o.isHorizontal();if(t===0)l[f?"scrollLeft":"scrollTop"]=-d;else{if(!o.support.smoothScroll)return QE({swiper:o,targetPosition:-d,side:f?"left":"top"}),!0;l.scrollTo({[f?"left":"top"]:-d,behavior:"smooth"})}return!0}return t===0?(o.setTransition(0),o.setTranslate(d),n&&(o.emit("beforeTransitionStart",t,i),o.emit("transitionEnd"))):(o.setTransition(t),o.setTranslate(d),n&&(o.emit("beforeTransitionStart",t,i),o.emit("transitionStart")),o.animating||(o.animating=!0,o.onTranslateToWrapperTransitionEnd||(o.onTranslateToWrapperTransitionEnd=function(m){!o||o.destroyed||m.target===this&&(o.wrapperEl.removeEventListener("transitionend",o.onTranslateToWrapperTransitionEnd),o.onTranslateToWrapperTransitionEnd=null,delete o.onTranslateToWrapperTransitionEnd,o.animating=!1,n&&o.emit("transitionEnd"))}),o.wrapperEl.addEventListener("transitionend",o.onTranslateToWrapperTransitionEnd))),!0}var q6={getTranslate:V6,setTranslate:W6,minTranslate:U6,maxTranslate:H6,translateTo:G6};function Y6(e,t){const n=this;n.params.cssMode||(n.wrapperEl.style.transitionDuration=`${e}ms`,n.wrapperEl.style.transitionDelay=e===0?"0ms":""),n.emit("setTransition",e,t)}function r_({swiper:e,runCallbacks:t,direction:n,step:r}){const{activeIndex:i,previousIndex:o}=e;let a=n;a||(i>o?a="next":i<o?a="prev":a="reset"),e.emit(`transition${r}`),t&&a==="reset"?e.emit(`slideResetTransition${r}`):t&&i!==o&&(e.emit(`slideChangeTransition${r}`),a==="next"?e.emit(`slideNextTransition${r}`):e.emit(`slidePrevTransition${r}`))}function X6(e=!0,t){const n=this,{params:r}=n;r.cssMode||(r.autoHeight&&n.updateAutoHeight(),r_({swiper:n,runCallbacks:e,direction:t,step:"Start"}))}function K6(e=!0,t){const n=this,{params:r}=n;n.animating=!1,!r.cssMode&&(n.setTransition(0),r_({swiper:n,runCallbacks:e,direction:t,step:"End"}))}var Q6={setTransition:Y6,transitionStart:X6,transitionEnd:K6};function Z6(e=0,t,n=!0,r,i){typeof e=="string"&&(e=parseInt(e,10));const o=this;let a=e;a<0&&(a=0);const{params:l,snapGrid:s,slidesGrid:c,previousIndex:d,activeIndex:f,rtlTranslate:m,wrapperEl:p,enabled:h}=o;if(!h&&!r&&!i||o.destroyed||o.animating&&l.preventInteractionOnTransition)return!1;typeof t>"u"&&(t=o.params.speed);const y=Math.min(o.params.slidesPerGroupSkip,a);let w=y+Math.floor((a-y)/o.params.slidesPerGroup);w>=s.length&&(w=s.length-1);const g=-s[w];if(l.normalizeSlideIndex)for(let k=0;k<c.length;k+=1){const _=-Math.floor(g*100),T=Math.floor(c[k]*100),$=Math.floor(c[k+1]*100);typeof c[k+1]<"u"?_>=T&&_<$-($-T)/2?a=k:_>=T&&_<$&&(a=k+1):_>=T&&(a=k)}if(o.initialized&&a!==f&&(!o.allowSlideNext&&(m?g>o.translate&&g>o.minTranslate():g<o.translate&&g<o.minTranslate())||!o.allowSlidePrev&&g>o.translate&&g>o.maxTranslate()&&(f||0)!==a))return!1;a!==(d||0)&&n&&o.emit("beforeSlideChangeStart"),o.updateProgress(g);let v;a>f?v="next":a<f?v="prev":v="reset";const b=o.virtual&&o.params.virtual.enabled;if(!(b&&i)&&(m&&-g===o.translate||!m&&g===o.translate))return o.updateActiveIndex(a),l.autoHeight&&o.updateAutoHeight(),o.updateSlidesClasses(),l.effect!=="slide"&&o.setTranslate(g),v!=="reset"&&(o.transitionStart(n,v),o.transitionEnd(n,v)),!1;if(l.cssMode){const k=o.isHorizontal(),_=m?g:-g;if(t===0)b&&(o.wrapperEl.style.scrollSnapType="none",o._immediateVirtual=!0),b&&!o._cssModeVirtualInitialSet&&o.params.initialSlide>0?(o._cssModeVirtualInitialSet=!0,requestAnimationFrame(()=>{p[k?"scrollLeft":"scrollTop"]=_})):p[k?"scrollLeft":"scrollTop"]=_,b&&requestAnimationFrame(()=>{o.wrapperEl.style.scrollSnapType="",o._immediateVirtual=!1});else{if(!o.support.smoothScroll)return QE({swiper:o,targetPosition:_,side:k?"left":"top"}),!0;p.scrollTo({[k?"left":"top"]:_,behavior:"smooth"})}return!0}const P=n_().isSafari;return b&&!i&&P&&o.isElement&&o.virtual.update(!1,!1,a),o.setTransition(t),o.setTranslate(g),o.updateActiveIndex(a),o.updateSlidesClasses(),o.emit("beforeTransitionStart",t,r),o.transitionStart(n,v),t===0?o.transitionEnd(n,v):o.animating||(o.animating=!0,o.onSlideToWrapperTransitionEnd||(o.onSlideToWrapperTransitionEnd=function(_){!o||o.destroyed||_.target===this&&(o.wrapperEl.removeEventListener("transitionend",o.onSlideToWrapperTransitionEnd),o.onSlideToWrapperTransitionEnd=null,delete o.onSlideToWrapperTransitionEnd,o.transitionEnd(n,v))}),o.wrapperEl.addEventListener("transitionend",o.onSlideToWrapperTransitionEnd)),!0}function J6(e=0,t,n=!0,r){typeof e=="string"&&(e=parseInt(e,10));const i=this;if(i.destroyed)return;typeof t>"u"&&(t=i.params.speed);const o=i.grid&&i.params.grid&&i.params.grid.rows>1;let a=e;if(i.params.loop)if(i.virtual&&i.params.virtual.enabled)a=a+i.virtual.slidesBefore;else{let l;if(o){const y=a*i.params.grid.rows;l=i.slides.find(w=>w.getAttribute("data-swiper-slide-index")*1===y).column}else l=i.getSlideIndexByData(a);const s=o?Math.ceil(i.slides.length/i.params.grid.rows):i.slides.length,{centeredSlides:c,slidesOffsetBefore:d,slidesOffsetAfter:f}=i.params,m=c||!!d||!!f;let p=i.params.slidesPerView;p==="auto"?p=i.slidesPerViewDynamic():(p=Math.ceil(parseFloat(i.params.slidesPerView,10)),m&&p%2===0&&(p=p+1));let h=s-l<p;if(m&&(h=h||l<Math.ceil(p/2)),r&&m&&i.params.slidesPerView!=="auto"&&!o&&(h=!1),h){const y=m?l<i.activeIndex?"prev":"next":l-i.activeIndex-1<i.params.slidesPerView?"next":"prev";i.loopFix({direction:y,slideTo:!0,activeSlideIndex:y==="next"?l+1:l-s+1,slideRealIndex:y==="next"?i.realIndex:void 0})}if(o){const y=a*i.params.grid.rows;a=i.slides.find(w=>w.getAttribute("data-swiper-slide-index")*1===y).column}else a=i.getSlideIndexByData(a)}return requestAnimationFrame(()=>{i.slideTo(a,t,n,r)}),i}function eL(e,t=!0,n){const r=this,{enabled:i,params:o,animating:a}=r;if(!i||r.destroyed)return r;typeof e>"u"&&(e=r.params.speed);let l=o.slidesPerGroup;o.slidesPerView==="auto"&&o.slidesPerGroup===1&&o.slidesPerGroupAuto&&(l=Math.max(r.slidesPerViewDynamic("current",!0),1));const s=r.activeIndex<o.slidesPerGroupSkip?1:l,c=r.virtual&&o.virtual.enabled;if(o.loop){if(a&&!c&&o.loopPreventsSliding)return!1;if(r.loopFix({direction:"next"}),r._clientLeft=r.wrapperEl.clientLeft,r.activeIndex===r.slides.length-1&&o.cssMode)return requestAnimationFrame(()=>{r.slideTo(r.activeIndex+s,e,t,n)}),!0}return o.rewind&&r.isEnd?r.slideTo(0,e,t,n):r.slideTo(r.activeIndex+s,e,t,n)}function tL(e,t=!0,n){const r=this,{params:i,snapGrid:o,slidesGrid:a,rtlTranslate:l,enabled:s,animating:c}=r;if(!s||r.destroyed)return r;typeof e>"u"&&(e=r.params.speed);const d=r.virtual&&i.virtual.enabled;if(i.loop){if(c&&!d&&i.loopPreventsSliding)return!1;r.loopFix({direction:"prev"}),r._clientLeft=r.wrapperEl.clientLeft}const f=l?r.translate:-r.translate;function m(v){return v<0?-Math.floor(Math.abs(v)):Math.floor(v)}const p=m(f),h=o.map(v=>m(v)),y=i.freeMode&&i.freeMode.enabled;let w=o[h.indexOf(p)-1];if(typeof w>"u"&&(i.cssMode||y)){let v;o.forEach((b,C)=>{p>=b&&(v=C)}),typeof v<"u"&&(w=y?o[v]:o[v>0?v-1:v])}let g=0;if(typeof w<"u"&&(g=a.indexOf(w),g<0&&(g=r.activeIndex-1),i.slidesPerView==="auto"&&i.slidesPerGroup===1&&i.slidesPerGroupAuto&&(g=g-r.slidesPerViewDynamic("previous",!0)+1,g=Math.max(g,0))),i.rewind&&r.isBeginning){const v=r.params.virtual&&r.params.virtual.enabled&&r.virtual?r.virtual.slides.length-1:r.slides.length-1;return r.slideTo(v,e,t,n)}else if(i.loop&&r.activeIndex===0&&i.cssMode)return requestAnimationFrame(()=>{r.slideTo(g,e,t,n)}),!0;return r.slideTo(g,e,t,n)}function nL(e,t=!0,n){const r=this;if(!r.destroyed)return typeof e>"u"&&(e=r.params.speed),r.slideTo(r.activeIndex,e,t,n)}function rL(e,t=!0,n,r=.5){const i=this;if(i.destroyed)return;typeof e>"u"&&(e=i.params.speed);let o=i.activeIndex;const a=Math.min(i.params.slidesPerGroupSkip,o),l=a+Math.floor((o-a)/i.params.slidesPerGroup),s=i.rtlTranslate?i.translate:-i.translate;if(s>=i.snapGrid[l]){const c=i.snapGrid[l],d=i.snapGrid[l+1];s-c>(d-c)*r&&(o+=i.params.slidesPerGroup)}else{const c=i.snapGrid[l-1],d=i.snapGrid[l];s-c<=(d-c)*r&&(o-=i.params.slidesPerGroup)}return o=Math.max(o,0),o=Math.min(o,i.slidesGrid.length-1),i.slideTo(o,e,t,n)}function iL(){const e=this;if(e.destroyed)return;const{params:t,slidesEl:n}=e,r=t.slidesPerView==="auto"?e.slidesPerViewDynamic():t.slidesPerView;let i=e.getSlideIndexWhenGrid(e.clickedIndex),o;const a=e.isElement?"swiper-slide":`.${t.slideClass}`,l=e.grid&&e.params.grid&&e.params.grid.rows>1;if(t.loop){if(e.animating)return;o=parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"),10),t.centeredSlides?e.slideToLoop(o):i>(l?(e.slides.length-r)/2-(e.params.grid.rows-1):e.slides.length-r)?(e.loopFix(),i=e.getSlideIndex(Dn(n,`${a}[data-swiper-slide-index="${o}"]`)[0]),KE(()=>{e.slideTo(i)})):e.slideTo(i)}else e.slideTo(i)}var oL={slideTo:Z6,slideToLoop:J6,slideNext:eL,slidePrev:tL,slideReset:nL,slideToClosest:rL,slideToClickedSlide:iL};function aL(e,t){const n=this,{params:r,slidesEl:i}=n;if(!r.loop||n.virtual&&n.params.virtual.enabled)return;const o=()=>{Dn(i,`.${r.slideClass}, swiper-slide`).forEach((h,y)=>{h.setAttribute("data-swiper-slide-index",y)})},a=()=>{const p=Dn(i,`.${r.slideBlankClass}`);p.forEach(h=>{h.remove()}),p.length>0&&(n.recalcSlides(),n.updateSlides())},l=n.grid&&r.grid&&r.grid.rows>1;r.loopAddBlankSlides&&(r.slidesPerGroup>1||l)&&a();const s=r.slidesPerGroup*(l?r.grid.rows:1),c=n.slides.length%s!==0,d=l&&n.slides.length%r.grid.rows!==0,f=p=>{for(let h=0;h<p;h+=1){const y=n.isElement?nu("swiper-slide",[r.slideBlankClass]):nu("div",[r.slideClass,r.slideBlankClass]);n.slidesEl.append(y)}};if(c){if(r.loopAddBlankSlides){const p=s-n.slides.length%s;f(p),n.recalcSlides(),n.updateSlides()}else tu("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");o()}else if(d){if(r.loopAddBlankSlides){const p=r.grid.rows-n.slides.length%r.grid.rows;f(p),n.recalcSlides(),n.updateSlides()}else tu("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");o()}else o();const m=r.centeredSlides||!!r.slidesOffsetBefore||!!r.slidesOffsetAfter;n.loopFix({slideRealIndex:e,direction:m?void 0:"next",initial:t})}function sL({slideRealIndex:e,slideTo:t=!0,direction:n,setTranslate:r,activeSlideIndex:i,initial:o,byController:a,byMousewheel:l}={}){const s=this;if(!s.params.loop)return;s.emit("beforeLoopFix");const{slides:c,allowSlidePrev:d,allowSlideNext:f,slidesEl:m,params:p}=s,{centeredSlides:h,slidesOffsetBefore:y,slidesOffsetAfter:w,initialSlide:g}=p,v=h||!!y||!!w;if(s.allowSlidePrev=!0,s.allowSlideNext=!0,s.virtual&&p.virtual.enabled){t&&(!v&&s.snapIndex===0?s.slideTo(s.virtual.slides.length,0,!1,!0):v&&s.snapIndex<p.slidesPerView?s.slideTo(s.virtual.slides.length+s.snapIndex,0,!1,!0):s.snapIndex===s.snapGrid.length-1&&s.slideTo(s.virtual.slidesBefore,0,!1,!0)),s.allowSlidePrev=d,s.allowSlideNext=f,s.emit("loopFix");return}let b=p.slidesPerView;b==="auto"?b=s.slidesPerViewDynamic():(b=Math.ceil(parseFloat(p.slidesPerView,10)),v&&b%2===0&&(b=b+1));const C=p.slidesPerGroupAuto?b:p.slidesPerGroup;let S=v?Math.max(C,Math.ceil(b/2)):C;S%C!==0&&(S+=C-S%C),S+=p.loopAdditionalSlides,s.loopedSlides=S;const P=s.grid&&p.grid&&p.grid.rows>1;c.length<b+S||s.params.effect==="cards"&&c.length<b+S*2?tu("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled or not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"):P&&p.grid.fill==="row"&&tu("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");const k=[],_=[],T=P?Math.ceil(c.length/p.grid.rows):c.length,$=o&&T-g<b&&!v;let I=$?g:s.activeIndex;typeof i>"u"?i=s.getSlideIndex(c.find(O=>O.classList.contains(p.slideActiveClass))):I=i;const M=n==="next"||!n,j=n==="prev"||!n;let F=0,D=0;const R=(P?c[i].column:i)+(v&&typeof r>"u"?-b/2+.5:0);if(R<S){F=Math.max(S-R,C);for(let O=0;O<S-R;O+=1){const A=O-Math.floor(O/T)*T;if(P){const N=T-A-1;for(let B=c.length-1;B>=0;B-=1)c[B].column===N&&k.push(B)}else k.push(T-A-1)}}else if(R+b>T-S){D=Math.max(R-(T-S*2),C),$&&(D=Math.max(D,b-T+g+1));for(let O=0;O<D;O+=1){const A=O-Math.floor(O/T)*T;P?c.forEach((N,B)=>{N.column===A&&_.push(B)}):_.push(A)}}if(s.__preventObserver__=!0,requestAnimationFrame(()=>{s.__preventObserver__=!1}),s.params.effect==="cards"&&c.length<b+S*2&&(_.includes(i)&&_.splice(_.indexOf(i),1),k.includes(i)&&k.splice(k.indexOf(i),1)),j&&k.forEach(O=>{c[O].swiperLoopMoveDOM=!0,m.prepend(c[O]),c[O].swiperLoopMoveDOM=!1}),M&&_.forEach(O=>{c[O].swiperLoopMoveDOM=!0,m.append(c[O]),c[O].swiperLoopMoveDOM=!1}),s.recalcSlides(),p.slidesPerView==="auto"?s.updateSlides():P&&(k.length>0&&j||_.length>0&&M)&&s.slides.forEach((O,A)=>{s.grid.updateSlide(A,O,s.slides)}),p.watchSlidesProgress&&s.updateSlidesOffset(),t){if(k.length>0&&j){if(typeof e>"u"){const O=s.slidesGrid[I],N=s.slidesGrid[I+F]-O;l?s.setTranslate(s.translate-N):(s.slideTo(I+Math.ceil(F),0,!1,!0),r&&(s.touchEventsData.startTranslate=s.touchEventsData.startTranslate-N,s.touchEventsData.currentTranslate=s.touchEventsData.currentTranslate-N))}else if(r){const O=P?k.length/p.grid.rows:k.length;s.slideTo(s.activeIndex+O,0,!1,!0),s.touchEventsData.currentTranslate=s.translate}}else if(_.length>0&&M)if(typeof e>"u"){const O=s.slidesGrid[I],N=s.slidesGrid[I-D]-O;l?s.setTranslate(s.translate-N):(s.slideTo(I-D,0,!1,!0),r&&(s.touchEventsData.startTranslate=s.touchEventsData.startTranslate-N,s.touchEventsData.currentTranslate=s.touchEventsData.currentTranslate-N))}else{const O=P?_.length/p.grid.rows:_.length;s.slideTo(s.activeIndex-O,0,!1,!0)}}if(s.allowSlidePrev=d,s.allowSlideNext=f,s.controller&&s.controller.control&&!a){const O={slideRealIndex:e,direction:n,setTranslate:r,activeSlideIndex:i,byController:!0};Array.isArray(s.controller.control)?s.controller.control.forEach(A=>{!A.destroyed&&A.params.loop&&A.loopFix({...O,slideTo:A.params.slidesPerView===p.slidesPerView?t:!1})}):s.controller.control instanceof s.constructor&&s.controller.control.params.loop&&s.controller.control.loopFix({...O,slideTo:s.controller.control.params.slidesPerView===p.slidesPerView?t:!1})}s.emit("loopFix")}function lL(){const e=this,{params:t,slidesEl:n}=e;if(!t.loop||!n||e.virtual&&e.params.virtual.enabled)return;e.recalcSlides();const r=[];e.slides.forEach(i=>{const o=typeof i.swiperSlideIndex>"u"?i.getAttribute("data-swiper-slide-index")*1:i.swiperSlideIndex;r[o]=i}),e.slides.forEach(i=>{i.removeAttribute("data-swiper-slide-index")}),r.forEach(i=>{n.append(i)}),e.recalcSlides(),e.slideTo(e.realIndex,0)}var cL={loopCreate:aL,loopFix:sL,loopDestroy:lL};function uL(e){const t=this;if(!t.params.simulateTouch||t.params.watchOverflow&&t.isLocked||t.params.cssMode)return;const n=t.params.touchEventsTarget==="container"?t.el:t.wrapperEl;t.isElement&&(t.__preventObserver__=!0),n.style.cursor="move",n.style.cursor=e?"grabbing":"grab",t.isElement&&requestAnimationFrame(()=>{t.__preventObserver__=!1})}function dL(){const e=this;e.params.watchOverflow&&e.isLocked||e.params.cssMode||(e.isElement&&(e.__preventObserver__=!0),e[e.params.touchEventsTarget==="container"?"el":"wrapperEl"].style.cursor="",e.isElement&&requestAnimationFrame(()=>{e.__preventObserver__=!1}))}var fL={setGrabCursor:uL,unsetGrabCursor:dL};function pL(e,t=this){function n(r){if(!r||r===zn()||r===kt())return null;r.assignedSlot&&(r=r.assignedSlot);const i=r.closest(e);return!i&&!r.getRootNode?null:i||n(r.getRootNode().host)}return n(t)}function D1(e,t,n){const r=kt(),{params:i}=e,o=i.edgeSwipeDetection,a=i.edgeSwipeThreshold;return o&&(n<=a||n>=r.innerWidth-a)?o==="prevent"?(t.preventDefault(),!0):!1:!0}function hL(e){const t=this,n=zn();let r=e;r.originalEvent&&(r=r.originalEvent);const i=t.touchEventsData;if(r.type==="pointerdown"){if(i.pointerId!==null&&i.pointerId!==r.pointerId)return;i.pointerId=r.pointerId}else r.type==="touchstart"&&r.targetTouches.length===1&&(i.touchId=r.targetTouches[0].identifier);if(r.type==="touchstart"){D1(t,r,r.targetTouches[0].pageX);return}const{params:o,touches:a,enabled:l}=t;if(!l||!o.simulateTouch&&r.pointerType==="mouse"||t.animating&&o.preventInteractionOnTransition)return;!t.animating&&o.cssMode&&o.loop&&t.loopFix();let s=r.target;if(o.touchEventsTarget==="wrapper"&&!x6(s,t.wrapperEl)||"which"in r&&r.which===3||"button"in r&&r.button>0||i.isTouched&&i.isMoved)return;const c=!!o.noSwipingClass&&o.noSwipingClass!=="",d=r.composedPath?r.composedPath():r.path;c&&r.target&&r.target.shadowRoot&&d&&(s=d[0]);const f=o.noSwipingSelector?o.noSwipingSelector:`.${o.noSwipingClass}`,m=!!(r.target&&r.target.shadowRoot);if(o.noSwiping&&(m?pL(f,s):s.closest(f))){t.allowClick=!0;return}if(o.swipeHandler&&!s.closest(o.swipeHandler))return;a.currentX=r.pageX,a.currentY=r.pageY;const p=a.currentX,h=a.currentY;if(!D1(t,r,p))return;Object.assign(i,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),a.startX=p,a.startY=h,i.touchStartTime=eu(),t.allowClick=!0,t.updateSize(),t.swipeDirection=void 0,o.threshold>0&&(i.allowThresholdMove=!1);let y=!0;s.matches(i.focusableElements)&&(y=!1,s.nodeName==="SELECT"&&(i.isTouched=!1)),n.activeElement&&n.activeElement.matches(i.focusableElements)&&n.activeElement!==s&&(r.pointerType==="mouse"||r.pointerType!=="mouse"&&!s.matches(i.focusableElements))&&n.activeElement.blur();const w=y&&t.allowTouchMove&&o.touchStartPreventDefault;(o.touchStartForcePreventDefault||w)&&!s.isContentEditable&&r.preventDefault(),o.freeMode&&o.freeMode.enabled&&t.freeMode&&t.animating&&!o.cssMode&&t.freeMode.onTouchStart(),t.emit("touchStart",r)}function mL(e){const t=zn(),n=this,r=n.touchEventsData,{params:i,touches:o,rtlTranslate:a,enabled:l}=n;if(!l||!i.simulateTouch&&e.pointerType==="mouse")return;let s=e;if(s.originalEvent&&(s=s.originalEvent),s.type==="pointermove"&&(r.touchId!==null||s.pointerId!==r.pointerId))return;let c;if(s.type==="touchmove"){if(c=[...s.changedTouches].find(P=>P.identifier===r.touchId),!c||c.identifier!==r.touchId)return}else c=s;if(!r.isTouched){r.startMoving&&r.isScrolling&&n.emit("touchMoveOpposite",s);return}const d=c.pageX,f=c.pageY;if(s.preventedByNestedSwiper){o.startX=d,o.startY=f;return}if(!n.allowTouchMove){s.target.matches(r.focusableElements)||(n.allowClick=!1),r.isTouched&&(Object.assign(o,{startX:d,startY:f,currentX:d,currentY:f}),r.touchStartTime=eu());return}if(i.touchReleaseOnEdges&&!i.loop)if(n.isVertical()){if(f<o.startY&&n.translate<=n.maxTranslate()||f>o.startY&&n.translate>=n.minTranslate()){r.isTouched=!1,r.isMoved=!1;return}}else{if(a&&(d>o.startX&&-n.translate<=n.maxTranslate()||d<o.startX&&-n.translate>=n.minTranslate()))return;if(!a&&(d<o.startX&&n.translate<=n.maxTranslate()||d>o.startX&&n.translate>=n.minTranslate()))return}if(t.activeElement&&t.activeElement.matches(r.focusableElements)&&t.activeElement!==s.target&&s.pointerType!=="mouse"&&t.activeElement.blur(),t.activeElement&&s.target===t.activeElement&&s.target.matches(r.focusableElements)){r.isMoved=!0,n.allowClick=!1;return}r.allowTouchCallbacks&&n.emit("touchMove",s),o.previousX=o.currentX,o.previousY=o.currentY,o.currentX=d,o.currentY=f;const m=o.currentX-o.startX,p=o.currentY-o.startY;if(n.params.threshold&&Math.sqrt(m**2+p**2)<n.params.threshold)return;if(typeof r.isScrolling>"u"){let P;n.isHorizontal()&&o.currentY===o.startY||n.isVertical()&&o.currentX===o.startX?r.isScrolling=!1:m*m+p*p>=25&&(P=Math.atan2(Math.abs(p),Math.abs(m))*180/Math.PI,r.isScrolling=n.isHorizontal()?P>i.touchAngle:90-P>i.touchAngle)}if(r.isScrolling&&n.emit("touchMoveOpposite",s),typeof r.startMoving>"u"&&(o.currentX!==o.startX||o.currentY!==o.startY)&&(r.startMoving=!0),r.isScrolling||s.type==="touchmove"&&r.preventTouchMoveFromPointerMove){r.isTouched=!1;return}if(!r.startMoving)return;n.allowClick=!1,!i.cssMode&&s.cancelable&&s.preventDefault(),i.touchMoveStopPropagation&&!i.nested&&s.stopPropagation();let h=n.isHorizontal()?m:p,y=n.isHorizontal()?o.currentX-o.previousX:o.currentY-o.previousY;i.oneWayMovement&&(h=Math.abs(h)*(a?1:-1),y=Math.abs(y)*(a?1:-1)),o.diff=h,h*=i.touchRatio,a&&(h=-h,y=-y);const w=n.touchesDirection;n.swipeDirection=h>0?"prev":"next",n.touchesDirection=y>0?"prev":"next";const g=n.params.loop&&!i.cssMode,v=n.touchesDirection==="next"&&n.allowSlideNext||n.touchesDirection==="prev"&&n.allowSlidePrev;if(!r.isMoved){if(g&&v&&n.loopFix({direction:n.swipeDirection}),r.startTranslate=n.getTranslate(),n.setTransition(0),n.animating){const P=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0,detail:{bySwiperTouchMove:!0}});n.wrapperEl.dispatchEvent(P)}r.allowMomentumBounce=!1,i.grabCursor&&(n.allowSlideNext===!0||n.allowSlidePrev===!0)&&n.setGrabCursor(!0),n.emit("sliderFirstMove",s)}let b;if(new Date().getTime(),i._loopSwapReset!==!1&&r.isMoved&&r.allowThresholdMove&&w!==n.touchesDirection&&g&&v&&Math.abs(h)>=1){Object.assign(o,{startX:d,startY:f,currentX:d,currentY:f,startTranslate:r.currentTranslate}),r.loopSwapReset=!0,r.startTranslate=r.currentTranslate;return}n.emit("sliderMove",s),r.isMoved=!0,r.currentTranslate=h+r.startTranslate;let C=!0,S=i.resistanceRatio;if(i.touchReleaseOnEdges&&(S=0),h>0?(g&&v&&!b&&r.allowThresholdMove&&r.currentTranslate>(i.centeredSlides?n.minTranslate()-n.slidesSizesGrid[n.activeIndex+1]-(i.slidesPerView!=="auto"&&n.slides.length-i.slidesPerView>=2?n.slidesSizesGrid[n.activeIndex+1]+n.params.spaceBetween:0)-n.params.spaceBetween:n.minTranslate())&&n.loopFix({direction:"prev",setTranslate:!0,activeSlideIndex:0}),r.currentTranslate>n.minTranslate()&&(C=!1,i.resistance&&(r.currentTranslate=n.minTranslate()-1+(-n.minTranslate()+r.startTranslate+h)**S))):h<0&&(g&&v&&!b&&r.allowThresholdMove&&r.currentTranslate<(i.centeredSlides?n.maxTranslate()+n.slidesSizesGrid[n.slidesSizesGrid.length-1]+n.params.spaceBetween+(i.slidesPerView!=="auto"&&n.slides.length-i.slidesPerView>=2?n.slidesSizesGrid[n.slidesSizesGrid.length-1]+n.params.spaceBetween:0):n.maxTranslate())&&n.loopFix({direction:"next",setTranslate:!0,activeSlideIndex:n.slides.length-(i.slidesPerView==="auto"?n.slidesPerViewDynamic():Math.ceil(parseFloat(i.slidesPerView,10)))}),r.currentTranslate<n.maxTranslate()&&(C=!1,i.resistance&&(r.currentTranslate=n.maxTranslate()+1-(n.maxTranslate()-r.startTranslate-h)**S))),C&&(s.preventedByNestedSwiper=!0),!n.allowSlideNext&&n.swipeDirection==="next"&&r.currentTranslate<r.startTranslate&&(r.currentTranslate=r.startTranslate),!n.allowSlidePrev&&n.swipeDirection==="prev"&&r.currentTranslate>r.startTranslate&&(r.currentTranslate=r.startTranslate),!n.allowSlidePrev&&!n.allowSlideNext&&(r.currentTranslate=r.startTranslate),i.threshold>0)if(Math.abs(h)>i.threshold||r.allowThresholdMove){if(!r.allowThresholdMove){r.allowThresholdMove=!0,o.startX=o.currentX,o.startY=o.currentY,r.currentTranslate=r.startTranslate,o.diff=n.isHorizontal()?o.currentX-o.startX:o.currentY-o.startY;return}}else{r.currentTranslate=r.startTranslate;return}!i.followFinger||i.cssMode||((i.freeMode&&i.freeMode.enabled&&n.freeMode||i.watchSlidesProgress)&&(n.updateActiveIndex(),n.updateSlidesClasses()),i.freeMode&&i.freeMode.enabled&&n.freeMode&&n.freeMode.onTouchMove(),n.updateProgress(r.currentTranslate),n.setTranslate(r.currentTranslate))}function gL(e){const t=this,n=t.touchEventsData;let r=e;r.originalEvent&&(r=r.originalEvent);let i;if(r.type==="touchend"||r.type==="touchcancel"){if(i=[...r.changedTouches].find(S=>S.identifier===n.touchId),!i||i.identifier!==n.touchId)return}else{if(n.touchId!==null||r.pointerId!==n.pointerId)return;i=r}if(["pointercancel","pointerout","pointerleave","contextmenu"].includes(r.type)&&!(["pointercancel","contextmenu"].includes(r.type)&&(t.browser.isSafari||t.browser.isWebView)))return;n.pointerId=null,n.touchId=null;const{params:a,touches:l,rtlTranslate:s,slidesGrid:c,enabled:d}=t;if(!d||!a.simulateTouch&&r.pointerType==="mouse")return;if(n.allowTouchCallbacks&&t.emit("touchEnd",r),n.allowTouchCallbacks=!1,!n.isTouched){n.isMoved&&a.grabCursor&&t.setGrabCursor(!1),n.isMoved=!1,n.startMoving=!1;return}a.grabCursor&&n.isMoved&&n.isTouched&&(t.allowSlideNext===!0||t.allowSlidePrev===!0)&&t.setGrabCursor(!1);const f=eu(),m=f-n.touchStartTime;if(t.allowClick){const S=r.path||r.composedPath&&r.composedPath();t.updateClickedSlide(S&&S[0]||r.target,S),t.emit("tap click",r),m<300&&f-n.lastClickTime<300&&t.emit("doubleTap doubleClick",r)}if(n.lastClickTime=eu(),KE(()=>{t.destroyed||(t.allowClick=!0)}),!n.isTouched||!n.isMoved||!t.swipeDirection||l.diff===0&&!n.loopSwapReset||n.currentTranslate===n.startTranslate&&!n.loopSwapReset){n.isTouched=!1,n.isMoved=!1,n.startMoving=!1;return}n.isTouched=!1,n.isMoved=!1,n.startMoving=!1;let p;if(a.followFinger?p=s?t.translate:-t.translate:p=-n.currentTranslate,a.cssMode)return;if(a.freeMode&&a.freeMode.enabled){t.freeMode.onTouchEnd({currentPos:p});return}const h=p>=-t.maxTranslate()&&!t.params.loop;let y=0,w=t.slidesSizesGrid[0];for(let S=0;S<c.length;S+=S<a.slidesPerGroupSkip?1:a.slidesPerGroup){const P=S<a.slidesPerGroupSkip-1?1:a.slidesPerGroup;typeof c[S+P]<"u"?(h||p>=c[S]&&p<c[S+P])&&(y=S,w=c[S+P]-c[S]):(h||p>=c[S])&&(y=S,w=c[c.length-1]-c[c.length-2])}let g=null,v=null;a.rewind&&(t.isBeginning?v=a.virtual&&a.virtual.enabled&&t.virtual?t.virtual.slides.length-1:t.slides.length-1:t.isEnd&&(g=0));const b=(p-c[y])/w,C=y<a.slidesPerGroupSkip-1?1:a.slidesPerGroup;if(m>a.longSwipesMs){if(!a.longSwipes){t.slideTo(t.activeIndex);return}t.swipeDirection==="next"&&(b>=a.longSwipesRatio?t.slideTo(a.rewind&&t.isEnd?g:y+C):t.slideTo(y)),t.swipeDirection==="prev"&&(b>1-a.longSwipesRatio?t.slideTo(y+C):v!==null&&b<0&&Math.abs(b)>a.longSwipesRatio?t.slideTo(v):t.slideTo(y))}else{if(!a.shortSwipes){t.slideTo(t.activeIndex);return}t.navigation&&(r.target===t.navigation.nextEl||r.target===t.navigation.prevEl)?r.target===t.navigation.nextEl?t.slideTo(y+C):t.slideTo(y):(t.swipeDirection==="next"&&t.slideTo(g!==null?g:y+C),t.swipeDirection==="prev"&&t.slideTo(v!==null?v:y))}}function L1(){const e=this,{params:t,el:n}=e;if(n&&n.offsetWidth===0)return;t.breakpoints&&e.setBreakpoint();const{allowSlideNext:r,allowSlidePrev:i,snapGrid:o}=e,a=e.virtual&&e.params.virtual.enabled;e.allowSlideNext=!0,e.allowSlidePrev=!0,e.updateSize(),e.updateSlides(),e.updateSlidesClasses();const l=a&&t.loop;(t.slidesPerView==="auto"||t.slidesPerView>1)&&e.isEnd&&!e.isBeginning&&!e.params.centeredSlides&&!l?e.slideTo(e.slides.length-1,0,!1,!0):e.params.loop&&!a?e.slideToLoop(e.realIndex,0,!1,!0):e.slideTo(e.activeIndex,0,!1,!0),e.autoplay&&e.autoplay.running&&e.autoplay.paused&&(clearTimeout(e.autoplay.resizeTimeout),e.autoplay.resizeTimeout=setTimeout(()=>{e.autoplay&&e.autoplay.running&&e.autoplay.paused&&e.autoplay.resume()},500)),e.allowSlidePrev=i,e.allowSlideNext=r,e.params.watchOverflow&&o!==e.snapGrid&&e.checkOverflow()}function vL(e){const t=this;t.enabled&&(t.allowClick||(t.params.preventClicks&&e.preventDefault(),t.params.preventClicksPropagation&&t.animating&&(e.stopPropagation(),e.stopImmediatePropagation())))}function yL(){const e=this,{wrapperEl:t,rtlTranslate:n,enabled:r}=e;if(!r)return;e.previousTranslate=e.translate,e.isHorizontal()?e.translate=-t.scrollLeft:e.translate=-t.scrollTop,e.translate===0&&(e.translate=0),e.updateActiveIndex(),e.updateSlidesClasses();let i;const o=e.maxTranslate()-e.minTranslate();o===0?i=0:i=(e.translate-e.minTranslate())/o,i!==e.progress&&e.updateProgress(n?-e.translate:e.translate),e.emit("setTranslate",e.translate,!1)}function xL(e){const t=this;rc(t,e.target),!(t.params.cssMode||t.params.slidesPerView!=="auto"&&!t.params.autoHeight)&&t.update()}function bL(){const e=this;e.documentTouchHandlerProceeded||(e.documentTouchHandlerProceeded=!0,e.params.touchReleaseOnEdges&&(e.el.style.touchAction="auto"))}const i_=(e,t)=>{const n=zn(),{params:r,el:i,wrapperEl:o,device:a}=e,l=!!r.nested,s=t==="on"?"addEventListener":"removeEventListener",c=t;!i||typeof i=="string"||(n[s]("touchstart",e.onDocumentTouchStart,{passive:!1,capture:l}),i[s]("touchstart",e.onTouchStart,{passive:!1}),i[s]("pointerdown",e.onTouchStart,{passive:!1}),n[s]("touchmove",e.onTouchMove,{passive:!1,capture:l}),n[s]("pointermove",e.onTouchMove,{passive:!1,capture:l}),n[s]("touchend",e.onTouchEnd,{passive:!0}),n[s]("pointerup",e.onTouchEnd,{passive:!0}),n[s]("pointercancel",e.onTouchEnd,{passive:!0}),n[s]("touchcancel",e.onTouchEnd,{passive:!0}),n[s]("pointerout",e.onTouchEnd,{passive:!0}),n[s]("pointerleave",e.onTouchEnd,{passive:!0}),n[s]("contextmenu",e.onTouchEnd,{passive:!0}),(r.preventClicks||r.preventClicksPropagation)&&i[s]("click",e.onClick,!0),r.cssMode&&o[s]("scroll",e.onScroll),r.updateOnWindowResize?e[c](a.ios||a.android?"resize orientationchange observerUpdate":"resize observerUpdate",L1,!0):e[c]("observerUpdate",L1,!0),i[s]("load",e.onLoad,{capture:!0}))};function wL(){const e=this,{params:t}=e;e.onTouchStart=hL.bind(e),e.onTouchMove=mL.bind(e),e.onTouchEnd=gL.bind(e),e.onDocumentTouchStart=bL.bind(e),t.cssMode&&(e.onScroll=yL.bind(e)),e.onClick=vL.bind(e),e.onLoad=xL.bind(e),i_(e,"on")}function SL(){i_(this,"off")}var CL={attachEvents:wL,detachEvents:SL};const R1=(e,t)=>e.grid&&t.grid&&t.grid.rows>1;function EL(){const e=this,{realIndex:t,initialized:n,params:r,el:i}=e,o=r.breakpoints;if(!o||o&&Object.keys(o).length===0)return;const a=zn(),l=r.breakpointsBase==="window"||!r.breakpointsBase?r.breakpointsBase:"container",s=["window","container"].includes(r.breakpointsBase)||!r.breakpointsBase?e.el:a.querySelector(r.breakpointsBase),c=e.getBreakpoint(o,l,s);if(!c||e.currentBreakpoint===c)return;const f=(c in o?o[c]:void 0)||e.originalParams,m=R1(e,r),p=R1(e,f),h=e.params.grabCursor,y=f.grabCursor,w=r.enabled;m&&!p?(i.classList.remove(`${r.containerModifierClass}grid`,`${r.containerModifierClass}grid-column`),e.emitContainerClasses()):!m&&p&&(i.classList.add(`${r.containerModifierClass}grid`),(f.grid.fill&&f.grid.fill==="column"||!f.grid.fill&&r.grid.fill==="column")&&i.classList.add(`${r.containerModifierClass}grid-column`),e.emitContainerClasses()),h&&!y?e.unsetGrabCursor():!h&&y&&e.setGrabCursor(),["navigation","pagination","scrollbar"].forEach(P=>{if(typeof f[P]>"u")return;const k=r[P]&&r[P].enabled,_=f[P]&&f[P].enabled;k&&!_&&e[P].disable(),!k&&_&&e[P].enable()});const g=f.direction&&f.direction!==r.direction,v=r.loop&&(f.slidesPerView!==r.slidesPerView||g),b=r.loop;g&&n&&e.changeDirection(),Nt(e.params,f);const C=e.params.enabled,S=e.params.loop;Object.assign(e,{allowTouchMove:e.params.allowTouchMove,allowSlideNext:e.params.allowSlideNext,allowSlidePrev:e.params.allowSlidePrev}),w&&!C?e.disable():!w&&C&&e.enable(),e.currentBreakpoint=c,e.emit("_beforeBreakpoint",f),n&&(v?(e.loopDestroy(),e.loopCreate(t),e.updateSlides()):!b&&S?(e.loopCreate(t),e.updateSlides()):b&&!S&&e.loopDestroy()),e.emit("breakpoint",f)}function _L(e,t="window",n){if(!e||t==="container"&&!n)return;let r=!1;const i=kt(),o=t==="window"?i.innerHeight:n.clientHeight,a=Object.keys(e).map(l=>{if(typeof l=="string"&&l.indexOf("@")===0){const s=parseFloat(l.substr(1));return{value:o*s,point:l}}return{value:l,point:l}});a.sort((l,s)=>parseInt(l.value,10)-parseInt(s.value,10));for(let l=0;l<a.length;l+=1){const{point:s,value:c}=a[l];t==="window"?i.matchMedia(`(min-width: ${c}px)`).matches&&(r=s):c<=n.clientWidth&&(r=s)}return r||"max"}var kL={setBreakpoint:EL,getBreakpoint:_L};function PL(e,t){const n=[];return e.forEach(r=>{typeof r=="object"?Object.keys(r).forEach(i=>{r[i]&&n.push(t+i)}):typeof r=="string"&&n.push(t+r)}),n}function OL(){const e=this,{classNames:t,params:n,rtl:r,el:i,device:o}=e,a=PL(["initialized",n.direction,{"free-mode":e.params.freeMode&&n.freeMode.enabled},{autoheight:n.autoHeight},{rtl:r},{grid:n.grid&&n.grid.rows>1},{"grid-column":n.grid&&n.grid.rows>1&&n.grid.fill==="column"},{android:o.android},{ios:o.ios},{"css-mode":n.cssMode},{centered:n.cssMode&&n.centeredSlides},{"watch-progress":n.watchSlidesProgress}],n.containerModifierClass);t.push(...a),i.classList.add(...t),e.emitContainerClasses()}function TL(){const e=this,{el:t,classNames:n}=e;!t||typeof t=="string"||(t.classList.remove(...n),e.emitContainerClasses())}var jL={addClasses:OL,removeClasses:TL};function $L(){const e=this,{isLocked:t,params:n}=e,{slidesOffsetBefore:r}=n;if(r){const i=e.slides.length-1,o=e.slidesGrid[i]+e.slidesSizesGrid[i]+r*2;e.isLocked=e.size>o}else e.isLocked=e.snapGrid.length===1;n.allowSlideNext===!0&&(e.allowSlideNext=!e.isLocked),n.allowSlidePrev===!0&&(e.allowSlidePrev=!e.isLocked),t&&t!==e.isLocked&&(e.isEnd=!1),t!==e.isLocked&&e.emit(e.isLocked?"lock":"unlock")}var IL={checkOverflow:$L},gm={init:!0,direction:"horizontal",oneWayMovement:!1,swiperElementNodeName:"SWIPER-CONTAINER",touchEventsTarget:"wrapper",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,eventsPrefix:"swiper",enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,snapToSlideEdge:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:5,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,loop:!1,loopAddBlankSlides:!0,loopAdditionalSlides:0,loopPreventsSliding:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,maxBackfaceHiddenSlides:10,containerModifierClass:"swiper-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-blank",slideActiveClass:"swiper-slide-active",slideVisibleClass:"swiper-slide-visible",slideFullyVisibleClass:"swiper-slide-fully-visible",slideNextClass:"swiper-slide-next",slidePrevClass:"swiper-slide-prev",wrapperClass:"swiper-wrapper",lazyPreloaderClass:"swiper-lazy-preloader",lazyPreloadPrevNext:0,runCallbacksOnInit:!0,_emitClasses:!1};function ML(e,t){return function(r={}){const i=Object.keys(r)[0],o=r[i];if(typeof o!="object"||o===null){Nt(t,r);return}if(e[i]===!0&&(e[i]={enabled:!0}),i==="navigation"&&e[i]&&e[i].enabled&&!e[i].prevEl&&!e[i].nextEl&&(e[i].auto=!0),["pagination","scrollbar"].indexOf(i)>=0&&e[i]&&e[i].enabled&&!e[i].el&&(e[i].auto=!0),!(i in e&&"enabled"in o)){Nt(t,r);return}typeof e[i]=="object"&&!("enabled"in e[i])&&(e[i].enabled=!0),e[i]||(e[i]={enabled:!1}),Nt(t,r)}}const Jf={eventsEmitter:j6,update:B6,translate:q6,transition:Q6,slide:oL,loop:cL,grabCursor:fL,events:CL,breakpoints:kL,checkOverflow:IL,classes:jL},ep={};let x0=class Gn{constructor(...t){let n,r;t.length===1&&t[0].constructor&&Object.prototype.toString.call(t[0]).slice(8,-1)==="Object"?r=t[0]:[n,r]=t,r||(r={}),r=Nt({},r),n&&!r.el&&(r.el=n);const i=zn();if(r.el&&typeof r.el=="string"&&i.querySelectorAll(r.el).length>1){const s=[];return i.querySelectorAll(r.el).forEach(c=>{const d=Nt({},r,{el:c});s.push(new Gn(d))}),s}const o=this;o.__swiper__=!0,o.support=e_(),o.device=t_({userAgent:r.userAgent}),o.browser=n_(),o.eventsListeners={},o.eventsAnyListeners=[],o.modules=[...o.__modules__],r.modules&&Array.isArray(r.modules)&&r.modules.forEach(s=>{typeof s=="function"&&o.modules.indexOf(s)<0&&o.modules.push(s)});const a={};o.modules.forEach(s=>{s({params:r,swiper:o,extendParams:ML(r,a),on:o.on.bind(o),once:o.once.bind(o),off:o.off.bind(o),emit:o.emit.bind(o)})});const l=Nt({},gm,a);return o.params=Nt({},l,ep,r),o.originalParams=Nt({},o.params),o.passedParams=Nt({},r),o.params&&o.params.on&&Object.keys(o.params.on).forEach(s=>{o.on(s,o.params.on[s])}),o.params&&o.params.onAny&&o.onAny(o.params.onAny),Object.assign(o,{enabled:o.params.enabled,el:n,classNames:[],slides:[],slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal(){return o.params.direction==="horizontal"},isVertical(){return o.params.direction==="vertical"},activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,cssOverflowAdjustment(){return Math.trunc(this.translate/2**23)*2**23},allowSlideNext:o.params.allowSlideNext,allowSlidePrev:o.params.allowSlidePrev,touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:o.params.focusableElements,lastClickTime:0,clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,startMoving:void 0,pointerId:null,touchId:null},allowClick:!0,allowTouchMove:o.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),o.emit("_swiper"),o.params.init&&o.init(),o}getDirectionLabel(t){return this.isHorizontal()?t:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[t]}getSlideIndex(t){const{slidesEl:n,params:r}=this,i=Dn(n,`.${r.slideClass}, swiper-slide`),o=ru(i[0]);return ru(t)-o}getSlideIndexByData(t){return this.getSlideIndex(this.slides.find(n=>n.getAttribute("data-swiper-slide-index")*1===t))}getSlideIndexWhenGrid(t){return this.grid&&this.params.grid&&this.params.grid.rows>1&&(this.params.grid.fill==="column"?t=Math.floor(t/this.params.grid.rows):this.params.grid.fill==="row"&&(t=t%Math.ceil(this.slides.length/this.params.grid.rows))),t}recalcSlides(){const t=this,{slidesEl:n,params:r}=t;t.slides=Dn(n,`.${r.slideClass}, swiper-slide`)}enable(){const t=this;t.enabled||(t.enabled=!0,t.params.grabCursor&&t.setGrabCursor(),t.emit("enable"))}disable(){const t=this;t.enabled&&(t.enabled=!1,t.params.grabCursor&&t.unsetGrabCursor(),t.emit("disable"))}setProgress(t,n){const r=this;t=Math.min(Math.max(t,0),1);const i=r.minTranslate(),a=(r.maxTranslate()-i)*t+i;r.translateTo(a,typeof n>"u"?0:n),r.updateActiveIndex(),r.updateSlidesClasses()}emitContainerClasses(){const t=this;if(!t.params._emitClasses||!t.el)return;const n=t.el.className.split(" ").filter(r=>r.indexOf("swiper")===0||r.indexOf(t.params.containerModifierClass)===0);t.emit("_containerClasses",n.join(" "))}getSlideClasses(t){const n=this;return n.destroyed?"":t.className.split(" ").filter(r=>r.indexOf("swiper-slide")===0||r.indexOf(n.params.slideClass)===0).join(" ")}emitSlidesClasses(){const t=this;if(!t.params._emitClasses||!t.el)return;const n=[];t.slides.forEach(r=>{const i=t.getSlideClasses(r);n.push({slideEl:r,classNames:i}),t.emit("_slideClass",r,i)}),t.emit("_slideClasses",n)}slidesPerViewDynamic(t="current",n=!1){const r=this,{params:i,slides:o,slidesGrid:a,slidesSizesGrid:l,size:s,activeIndex:c}=r;let d=1;if(typeof i.slidesPerView=="number")return i.slidesPerView;if(i.centeredSlides){let f=o[c]?Math.ceil(o[c].swiperSlideSize):0,m;for(let p=c+1;p<o.length;p+=1)o[p]&&!m&&(f+=Math.ceil(o[p].swiperSlideSize),d+=1,f>s&&(m=!0));for(let p=c-1;p>=0;p-=1)o[p]&&!m&&(f+=o[p].swiperSlideSize,d+=1,f>s&&(m=!0))}else if(t==="current")for(let f=c+1;f<o.length;f+=1)(n?a[f]+l[f]-a[c]<s:a[f]-a[c]<s)&&(d+=1);else for(let f=c-1;f>=0;f-=1)a[c]-a[f]<s&&(d+=1);return d}update(){const t=this;if(!t||t.destroyed)return;const{snapGrid:n,params:r}=t;r.breakpoints&&t.setBreakpoint(),[...t.el.querySelectorAll('[loading="lazy"]')].forEach(a=>{a.complete&&rc(t,a)}),t.updateSize(),t.updateSlides(),t.updateProgress(),t.updateSlidesClasses();function i(){const a=t.rtlTranslate?t.translate*-1:t.translate,l=Math.min(Math.max(a,t.maxTranslate()),t.minTranslate());t.setTranslate(l),t.updateActiveIndex(),t.updateSlidesClasses()}let o;if(r.freeMode&&r.freeMode.enabled&&!r.cssMode)i(),r.autoHeight&&t.updateAutoHeight();else{if((r.slidesPerView==="auto"||r.slidesPerView>1)&&t.isEnd&&!r.centeredSlides){const a=t.virtual&&r.virtual.enabled?t.virtual.slides:t.slides;o=t.slideTo(a.length-1,0,!1,!0)}else o=t.slideTo(t.activeIndex,0,!1,!0);o||i()}r.watchOverflow&&n!==t.snapGrid&&t.checkOverflow(),t.emit("update")}changeDirection(t,n=!0){const r=this,i=r.params.direction;return t||(t=i==="horizontal"?"vertical":"horizontal"),t===i||t!=="horizontal"&&t!=="vertical"||(r.el.classList.remove(`${r.params.containerModifierClass}${i}`),r.el.classList.add(`${r.params.containerModifierClass}${t}`),r.emitContainerClasses(),r.params.direction=t,r.slides.forEach(o=>{t==="vertical"?o.style.width="":o.style.height=""}),r.emit("changeDirection"),n&&r.update()),r}changeLanguageDirection(t){const n=this;n.rtl&&t==="rtl"||!n.rtl&&t==="ltr"||(n.rtl=t==="rtl",n.rtlTranslate=n.params.direction==="horizontal"&&n.rtl,n.rtl?(n.el.classList.add(`${n.params.containerModifierClass}rtl`),n.el.dir="rtl"):(n.el.classList.remove(`${n.params.containerModifierClass}rtl`),n.el.dir="ltr"),n.update())}mount(t){const n=this;if(n.mounted)return!0;let r=t||n.params.el;if(typeof r=="string"&&(r=document.querySelector(r)),!r)return!1;r.swiper=n,r.parentNode&&r.parentNode.host&&r.parentNode.host.nodeName===n.params.swiperElementNodeName.toUpperCase()&&(n.isElement=!0);const i=()=>`.${(n.params.wrapperClass||"").trim().split(" ").join(".")}`;let a=(()=>r&&r.shadowRoot&&r.shadowRoot.querySelector?r.shadowRoot.querySelector(i()):Dn(r,i())[0])();return!a&&n.params.createElements&&(a=nu("div",n.params.wrapperClass),r.append(a),Dn(r,`.${n.params.slideClass}`).forEach(l=>{a.append(l)})),Object.assign(n,{el:r,wrapperEl:a,slidesEl:n.isElement&&!r.parentNode.host.slideSlots?r.parentNode.host:a,hostEl:n.isElement?r.parentNode.host:r,mounted:!0,rtl:r.dir.toLowerCase()==="rtl"||Tr(r,"direction")==="rtl",rtlTranslate:n.params.direction==="horizontal"&&(r.dir.toLowerCase()==="rtl"||Tr(r,"direction")==="rtl"),wrongRTL:Tr(a,"display")==="-webkit-box"}),!0}init(t){const n=this;if(n.initialized||n.mount(t)===!1)return n;n.emit("beforeInit"),n.params.breakpoints&&n.setBreakpoint(),n.addClasses(),n.updateSize(),n.updateSlides(),n.params.watchOverflow&&n.checkOverflow(),n.params.grabCursor&&n.enabled&&n.setGrabCursor(),n.params.loop&&n.virtual&&n.params.virtual.enabled?n.slideTo(n.params.initialSlide+n.virtual.slidesBefore,0,n.params.runCallbacksOnInit,!1,!0):n.slideTo(n.params.initialSlide,0,n.params.runCallbacksOnInit,!1,!0),n.params.loop&&n.loopCreate(void 0,!0),n.attachEvents();const i=[...n.el.querySelectorAll('[loading="lazy"]')];return n.isElement&&i.push(...n.hostEl.querySelectorAll('[loading="lazy"]')),i.forEach(o=>{o.complete?rc(n,o):o.addEventListener("load",a=>{rc(n,a.target)})}),mm(n),n.initialized=!0,mm(n),n.emit("init"),n.emit("afterInit"),n}destroy(t=!0,n=!0){const r=this,{params:i,el:o,wrapperEl:a,slides:l}=r;return typeof r.params>"u"||r.destroyed||(r.emit("beforeDestroy"),r.initialized=!1,r.detachEvents(),i.loop&&r.loopDestroy(),n&&(r.removeClasses(),o&&typeof o!="string"&&o.removeAttribute("style"),a&&a.removeAttribute("style"),l&&l.length&&l.forEach(s=>{s.classList.remove(i.slideVisibleClass,i.slideFullyVisibleClass,i.slideActiveClass,i.slideNextClass,i.slidePrevClass),s.removeAttribute("style"),s.removeAttribute("data-swiper-slide-index")})),r.emit("destroy"),Object.keys(r.eventsListeners).forEach(s=>{r.off(s)}),t!==!1&&(r.el&&typeof r.el!="string"&&(r.el.swiper=null),h6(r)),r.destroyed=!0),null}static extendDefaults(t){Nt(ep,t)}static get extendedDefaults(){return ep}static get defaults(){return gm}static installModule(t){Gn.prototype.__modules__||(Gn.prototype.__modules__=[]);const n=Gn.prototype.__modules__;typeof t=="function"&&n.indexOf(t)<0&&n.push(t)}static use(t){return Array.isArray(t)?(t.forEach(n=>Gn.installModule(n)),Gn):(Gn.installModule(t),Gn)}};Object.keys(Jf).forEach(e=>{Object.keys(Jf[e]).forEach(t=>{x0.prototype[t]=Jf[e][t]})});x0.use([O6,T6]);const o_=["eventsPrefix","injectStyles","injectStylesUrls","modules","init","_direction","oneWayMovement","swiperElementNodeName","touchEventsTarget","initialSlide","_speed","cssMode","updateOnWindowResize","resizeObserver","nested","focusableElements","_enabled","_width","_height","preventInteractionOnTransition","userAgent","url","_edgeSwipeDetection","_edgeSwipeThreshold","_freeMode","_autoHeight","setWrapperSize","virtualTranslate","_effect","breakpoints","breakpointsBase","_spaceBetween","_slidesPerView","maxBackfaceHiddenSlides","_grid","_slidesPerGroup","_slidesPerGroupSkip","_slidesPerGroupAuto","_centeredSlides","_centeredSlidesBounds","_slidesOffsetBefore","_slidesOffsetAfter","normalizeSlideIndex","_centerInsufficientSlides","_snapToSlideEdge","_watchOverflow","roundLengths","touchRatio","touchAngle","simulateTouch","_shortSwipes","_longSwipes","longSwipesRatio","longSwipesMs","_followFinger","allowTouchMove","_threshold","touchMoveStopPropagation","touchStartPreventDefault","touchStartForcePreventDefault","touchReleaseOnEdges","uniqueNavElements","_resistance","_resistanceRatio","_watchSlidesProgress","_grabCursor","preventClicks","preventClicksPropagation","_slideToClickedSlide","_loop","loopAdditionalSlides","loopAddBlankSlides","loopPreventsSliding","_rewind","_allowSlidePrev","_allowSlideNext","_swipeHandler","_noSwiping","noSwipingClass","noSwipingSelector","passiveListeners","containerModifierClass","slideClass","slideActiveClass","slideVisibleClass","slideFullyVisibleClass","slideNextClass","slidePrevClass","slideBlankClass","wrapperClass","lazyPreloaderClass","lazyPreloadPrevNext","runCallbacksOnInit","observer","observeParents","observeSlideChildren","a11y","_autoplay","_controller","coverflowEffect","cubeEffect","fadeEffect","flipEffect","creativeEffect","cardsEffect","hashNavigation","history","keyboard","mousewheel","_navigation","_pagination","parallax","_scrollbar","_thumbs","virtual","zoom","control"];function Ei(e){return typeof e=="object"&&e!==null&&e.constructor&&Object.prototype.toString.call(e).slice(8,-1)==="Object"&&!e.__swiper__}function go(e,t){const n=["__proto__","constructor","prototype"];Object.keys(t).filter(r=>n.indexOf(r)<0).forEach(r=>{typeof e[r]>"u"?e[r]=t[r]:Ei(t[r])&&Ei(e[r])&&Object.keys(t[r]).length>0?t[r].__swiper__?e[r]=t[r]:go(e[r],t[r]):e[r]=t[r]})}function a_(e={}){return e.navigation&&typeof e.navigation.nextEl>"u"&&typeof e.navigation.prevEl>"u"}function s_(e={}){return e.pagination&&typeof e.pagination.el>"u"}function l_(e={}){return e.scrollbar&&typeof e.scrollbar.el>"u"}function c_(e=""){const t=e.split(" ").map(r=>r.trim()).filter(r=>!!r),n=[];return t.forEach(r=>{n.indexOf(r)<0&&n.push(r)}),n.join(" ")}function AL(e=""){return e?e.includes("swiper-wrapper")?e:`swiper-wrapper ${e}`:"swiper-wrapper"}function DL({swiper:e,slides:t,passedParams:n,changedParams:r,nextEl:i,prevEl:o,scrollbarEl:a,paginationEl:l}){const s=r.filter(_=>_!=="children"&&_!=="direction"&&_!=="wrapperClass"),{params:c,pagination:d,navigation:f,scrollbar:m,virtual:p,thumbs:h}=e;let y,w,g,v,b,C,S,P;r.includes("thumbs")&&n.thumbs&&n.thumbs.swiper&&!n.thumbs.swiper.destroyed&&c.thumbs&&(!c.thumbs.swiper||c.thumbs.swiper.destroyed)&&(y=!0),r.includes("controller")&&n.controller&&n.controller.control&&c.controller&&!c.controller.control&&(w=!0),r.includes("pagination")&&n.pagination&&(n.pagination.el||l)&&(c.pagination||c.pagination===!1)&&d&&!d.el&&(g=!0),r.includes("scrollbar")&&n.scrollbar&&(n.scrollbar.el||a)&&(c.scrollbar||c.scrollbar===!1)&&m&&!m.el&&(v=!0),r.includes("navigation")&&n.navigation&&(n.navigation.prevEl||o)&&(n.navigation.nextEl||i)&&(c.navigation||c.navigation===!1)&&f&&!f.prevEl&&!f.nextEl&&(b=!0);const k=_=>{e[_]&&(e[_].destroy(),_==="navigation"?(e.isElement&&(e[_].prevEl.remove(),e[_].nextEl.remove()),c[_].prevEl=void 0,c[_].nextEl=void 0,e[_].prevEl=void 0,e[_].nextEl=void 0):(e.isElement&&e[_].el.remove(),c[_].el=void 0,e[_].el=void 0))};r.includes("loop")&&e.isElement&&(c.loop&&!n.loop?C=!0:!c.loop&&n.loop?S=!0:P=!0),s.forEach(_=>{if(Ei(c[_])&&Ei(n[_]))Object.assign(c[_],n[_]),(_==="navigation"||_==="pagination"||_==="scrollbar")&&"enabled"in n[_]&&!n[_].enabled&&k(_);else{const T=n[_];(T===!0||T===!1)&&(_==="navigation"||_==="pagination"||_==="scrollbar")?T===!1&&k(_):c[_]=n[_]}}),s.includes("controller")&&!w&&e.controller&&e.controller.control&&c.controller&&c.controller.control&&(e.controller.control=c.controller.control),r.includes("children")&&t&&p&&c.virtual.enabled?(p.slides=t,p.update(!0)):r.includes("virtual")&&p&&c.virtual.enabled&&(t&&(p.slides=t),p.update(!0)),r.includes("children")&&t&&c.loop&&(P=!0),y&&h.init()&&h.update(!0),w&&(e.controller.control=c.controller.control),g&&(e.isElement&&(!l||typeof l=="string")&&(l=document.createElement("div"),l.classList.add("swiper-pagination"),l.part.add("pagination"),e.el.appendChild(l)),l&&(c.pagination.el=l),d.init(),d.render(),d.update()),v&&(e.isElement&&(!a||typeof a=="string")&&(a=document.createElement("div"),a.classList.add("swiper-scrollbar"),a.part.add("scrollbar"),e.el.appendChild(a)),a&&(c.scrollbar.el=a),m.init(),m.updateSize(),m.setTranslate()),b&&(e.isElement&&((!i||typeof i=="string")&&(i=document.createElement("div"),i.classList.add("swiper-button-next"),Cs(i,e.navigation.arrowSvg),i.part.add("button-next"),e.el.appendChild(i)),(!o||typeof o=="string")&&(o=document.createElement("div"),o.classList.add("swiper-button-prev"),Cs(o,e.navigation.arrowSvg),o.part.add("button-prev"),e.el.appendChild(o))),i&&(c.navigation.nextEl=i),o&&(c.navigation.prevEl=o),f.init(),f.update()),r.includes("allowSlideNext")&&(e.allowSlideNext=n.allowSlideNext),r.includes("allowSlidePrev")&&(e.allowSlidePrev=n.allowSlidePrev),r.includes("direction")&&e.changeDirection(n.direction,!1),(C||P)&&e.loopDestroy(),(S||P)&&e.loopCreate(),e.update()}function LL(e={},t=!0){const n={on:{}},r={},i={};go(n,gm),n._emitClasses=!0,n.init=!1;const o={},a=o_.map(s=>s.replace(/_/,"")),l=Object.assign({},e);return Object.keys(l).forEach(s=>{typeof e[s]>"u"||(a.indexOf(s)>=0?Ei(e[s])?(n[s]={},i[s]={},go(n[s],e[s]),go(i[s],e[s])):(n[s]=e[s],i[s]=e[s]):s.search(/on[A-Z]/)===0&&typeof e[s]=="function"?t?r[`${s[2].toLowerCase()}${s.substr(3)}`]=e[s]:n.on[`${s[2].toLowerCase()}${s.substr(3)}`]=e[s]:o[s]=e[s])}),["navigation","pagination","scrollbar"].forEach(s=>{n[s]===!0&&(n[s]={}),n[s]===!1&&delete n[s]}),{params:n,passedParams:i,rest:o,events:r}}function RL({el:e,nextEl:t,prevEl:n,paginationEl:r,scrollbarEl:i,swiper:o},a){a_(a)&&t&&n&&(o.params.navigation.nextEl=t,o.originalParams.navigation.nextEl=t,o.params.navigation.prevEl=n,o.originalParams.navigation.prevEl=n),s_(a)&&r&&(o.params.pagination.el=r,o.originalParams.pagination.el=r),l_(a)&&i&&(o.params.scrollbar.el=i,o.originalParams.scrollbar.el=i),o.init(e)}function FL(e,t,n,r,i){const o=[];if(!t)return o;const a=s=>{o.indexOf(s)<0&&o.push(s)};if(n&&r){const s=r.map(i),c=n.map(i);s.join("")!==c.join("")&&a("children"),r.length!==n.length&&a("children")}return o_.filter(s=>s[0]==="_").map(s=>s.replace(/_/,"")).forEach(s=>{if(s in e&&s in t)if(Ei(e[s])&&Ei(t[s])){const c=Object.keys(e[s]),d=Object.keys(t[s]);c.length!==d.length?a(s):(c.forEach(f=>{e[s][f]!==t[s][f]&&a(s)}),d.forEach(f=>{e[s][f]!==t[s][f]&&a(s)}))}else e[s]!==t[s]&&a(s)}),o}const zL=e=>{!e||e.destroyed||!e.params.virtual||e.params.virtual&&!e.params.virtual.enabled||(e.updateSlides(),e.updateProgress(),e.updateSlidesClasses(),e.emit("_virtualUpdated"),e.parallax&&e.params.parallax&&e.params.parallax.enabled&&e.parallax.setTranslate())};function iu(){return iu=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},iu.apply(this,arguments)}function u_(e){return e.type&&e.type.displayName&&e.type.displayName.includes("SwiperSlide")}function d_(e){const t=[];return Q.Children.toArray(e).forEach(n=>{u_(n)?t.push(n):n.props&&n.props.children&&d_(n.props.children).forEach(r=>t.push(r))}),t}function NL(e){const t=[],n={"container-start":[],"container-end":[],"wrapper-start":[],"wrapper-end":[]};return Q.Children.toArray(e).forEach(r=>{if(u_(r))t.push(r);else if(r.props&&r.props.slot&&n[r.props.slot])n[r.props.slot].push(r);else if(r.props&&r.props.children){const i=d_(r.props.children);i.length>0?i.forEach(o=>t.push(o)):n["container-end"].push(r)}else n["container-end"].push(r)}),{slides:t,slots:n}}function BL(e,t,n){if(!n)return null;const r=d=>{let f=d;return d<0?f=t.length+d:f>=t.length&&(f=f-t.length),f},i=e.isHorizontal()?{[e.rtlTranslate?"right":"left"]:`${n.offset}px`}:{top:`${n.offset}px`},{from:o,to:a}=n,l=e.params.loop?-t.length:0,s=e.params.loop?t.length*2:t.length,c=[];for(let d=l;d<s;d+=1)d>=o&&d<=a&&c.push(t[r(d)]);return c.map((d,f)=>Q.cloneElement(d,{swiper:e,style:i,key:d.props.virtualIndex||d.key||`slide-${f}`}))}function Ba(e,t){return typeof window>"u"?x.useEffect(e,t):x.useLayoutEffect(e,t)}const F1=x.createContext(null),VL=x.createContext(null),f_=x.forwardRef(({className:e,tag:t="div",wrapperTag:n="div",children:r,onSwiper:i,...o}={},a)=>{let l=!1;const[s,c]=x.useState("swiper"),[d,f]=x.useState(null),[m,p]=x.useState(!1),h=x.useRef(!1),y=x.useRef(null),w=x.useRef(null),g=x.useRef(null),v=x.useRef(null),b=x.useRef(null),C=x.useRef(null),S=x.useRef(null),P=x.useRef(null),{params:k,passedParams:_,rest:T,events:$}=LL(o),{slides:I,slots:M}=NL(r),j=()=>{p(!m)};Object.assign(k.on,{_containerClasses(O,A){c(A)}});const F=()=>{Object.assign(k.on,$),l=!0;const O={...k};if(delete O.wrapperClass,w.current=new x0(O),w.current.virtual&&w.current.params.virtual.enabled){w.current.virtual.slides=I;const A={cache:!1,slides:I,renderExternal:f,renderExternalUpdate:!1};go(w.current.params.virtual,A),go(w.current.originalParams.virtual,A)}};y.current||F(),w.current&&w.current.on("_beforeBreakpoint",j);const D=()=>{l||!$||!w.current||Object.keys($).forEach(O=>{w.current.on(O,$[O])})},z=()=>{!$||!w.current||Object.keys($).forEach(O=>{w.current.off(O,$[O])})};x.useEffect(()=>()=>{w.current&&w.current.off("_beforeBreakpoint",j)}),x.useEffect(()=>{!h.current&&w.current&&(w.current.emitSlidesClasses(),h.current=!0)}),Ba(()=>{if(a&&(a.current=y.current),!!y.current)return w.current.destroyed&&F(),RL({el:y.current,nextEl:b.current,prevEl:C.current,paginationEl:S.current,scrollbarEl:P.current,swiper:w.current},k),i&&!w.current.destroyed&&i(w.current),()=>{w.current&&!w.current.destroyed&&w.current.destroy(!0,!1)}},[]),Ba(()=>{D();const O=FL(_,g.current,I,v.current,A=>A.key);return g.current=_,v.current=I,O.length&&w.current&&!w.current.destroyed&&DL({swiper:w.current,slides:I,passedParams:_,changedParams:O,nextEl:b.current,prevEl:C.current,scrollbarEl:P.current,paginationEl:S.current}),()=>{z()}}),Ba(()=>{zL(w.current)},[d]);function R(){return k.virtual?BL(w.current,I,d):I.map((O,A)=>Q.cloneElement(O,{swiper:w.current,swiperSlideIndex:A}))}return Q.createElement(t,iu({ref:y,className:c_(`${s}${e?` ${e}`:""}`)},T),Q.createElement(VL.Provider,{value:w.current},M["container-start"],Q.createElement(n,{className:AL(k.wrapperClass)},M["wrapper-start"],R(),M["wrapper-end"]),a_(k)&&Q.createElement(Q.Fragment,null,Q.createElement("div",{ref:C,className:"swiper-button-prev"}),Q.createElement("div",{ref:b,className:"swiper-button-next"})),l_(k)&&Q.createElement("div",{ref:P,className:"swiper-scrollbar"}),s_(k)&&Q.createElement("div",{ref:S,className:"swiper-pagination"}),M["container-end"]))});f_.displayName="Swiper";const p_=x.forwardRef(({tag:e="div",children:t,className:n="",swiper:r,zoom:i,lazy:o,virtualIndex:a,swiperSlideIndex:l,...s}={},c)=>{const d=x.useRef(null),[f,m]=x.useState("swiper-slide"),[p,h]=x.useState(!1);function y(b,C,S){C===d.current&&m(S)}Ba(()=>{if(typeof l<"u"&&(d.current.swiperSlideIndex=l),c&&(c.current=d.current),!(!d.current||!r)){if(r.destroyed){f!=="swiper-slide"&&m("swiper-slide");return}return r.on("_slideClass",y),()=>{r&&r.off("_slideClass",y)}}}),Ba(()=>{r&&d.current&&!r.destroyed&&m(r.getSlideClasses(d.current))},[r]);const w={isActive:f.indexOf("swiper-slide-active")>=0,isVisible:f.indexOf("swiper-slide-visible")>=0,isPrev:f.indexOf("swiper-slide-prev")>=0,isNext:f.indexOf("swiper-slide-next")>=0},g=()=>typeof t=="function"?t(w):t,v=()=>{h(!0)};return Q.createElement(e,iu({ref:d,className:c_(`${f}${n?` ${n}`:""}`),"data-swiper-slide-index":a,onLoad:v},s),i&&Q.createElement(F1.Provider,{value:w},Q.createElement("div",{className:"swiper-zoom-container","data-swiper-zoom":typeof i=="number"?i:void 0},g(),o&&!p&&Q.createElement("div",{className:"swiper-lazy-preloader",ref:b=>{b&&(b.lazyPreloaderManaged=!0)}}))),!i&&Q.createElement(F1.Provider,{value:w},g(),o&&!p&&Q.createElement("div",{className:"swiper-lazy-preloader",ref:b=>{b&&(b.lazyPreloaderManaged=!0)}})))});p_.displayName="SwiperSlide";const WL=E.section`
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
`,UL=E.div`
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
`,HL=E.div`
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
`,GL=E(ge)`
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
`,qL=[{id:1,title:"Дідів хлів - найкращий вибір для Вашого велосипеда",desc:"Якісні запчастини, професійний серевіс та індивідуальний підхід. Створюйте ідеальний байк разом з нами",img:"/bike2-hero.jpeg",btn:"До каталогу",url:"/catalog"},{id:2,title:"Постійне оновлення товару",desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam reprehenderit obcaecati molestias est alias vitae laboriosam nulla perferendis officia incidunt aliquid voluptatem iste libero, officiis ex modi enim repellat. Consectetur!",img:"/inside.webp",btn:"До новинок",url:"/catalog/new"}],YL=()=>u.jsx(WL,{children:u.jsx(f_,{modules:[S6,E6,C6],spaceBetween:0,slidesPerView:1,navigation:!0,pagination:{clickable:!0},autoplay:{delay:5e3},loop:!0,children:qL.map(e=>u.jsx(p_,{children:u.jsx(UL,{bg:e.img,children:u.jsxs(HL,{children:[u.jsx("h1",{children:e.title}),u.jsx("p",{children:e.desc}),u.jsx(GL,{to:e.url,children:e.btn})]})})},e.id))})}),XL=E.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  margin-bottom:30px;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`,tp=E.div`
  background-color: #ffffffde;
  padding: 20px;
  border: 1px solid #e3e2e2;
  border-radius: 8px;
`,np=E.div`
  font-size: 24px;
  font-weight: bold;
  color: var(--orange-color);
`,rp=E.div`
  font-size: 14px;
  color: #888;
`,h_=()=>u.jsxs(XL,{children:[u.jsxs(tp,{children:[u.jsx(np,{children:"3000+"}),u.jsx(rp,{children:"Перевірених деталей"})]}),u.jsxs(tp,{children:[u.jsx(np,{children:"6 років"}),u.jsx(rp,{children:"Досвіду на ринку"})]}),u.jsxs(tp,{children:[u.jsx(np,{children:"100%"}),u.jsx(rp,{children:"Контроль якості"})]})]}),KL=Fe.div`
  background:var(--background-color);
`,QL=Fe.div`
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
`;const ZL=()=>u.jsx(KL,{children:u.jsxs(QL,{children:[u.jsx(YL,{}),u.jsx($C,{}),u.jsx(d6,{}),u.jsx(h_,{})]})}),JL=E.div`
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
`,e8=E.section`
  background-color:  var(--second-background);
`,t8=E.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  justify-content: flex-start;
  margin-bottom: 16px;

  @media (min-width: 768px) {
    display: none;
  }
`,n8=E.button`
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
`,r8=E.svg`
  width: 20px;
  height: 20px;
  fill: var(--white-color);
`,i8=E.button`
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
`;E.svg`
  width: 20px;
  height: 20px;
  fill: var(--white-color);
`;const o8=E.div`
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
`,a8=E.div`
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
`;E.button`
  font-size: 20px;
  border: none;
  background: none;
  margin-bottom: 20px;
`;const s8=E.div`
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
`;E.div`
  flex: 1;
  padding: 20px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;const l8=E.div`
  padding: 20px;
  border-top: 1px solid #eee;
  background: white;
`,c8=E.button`
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
`,m_=E.button`
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
`,u8=E.div`
  position: relative;
  display: inline-block;

`,d8=E.div`
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
`,Ni=E.div`
  padding: 10px 12px;
  cursor: pointer;

  &:hover {
    background: #f0f0f0;
  }
`;var Xo=TypeError;const f8={},p8=Object.freeze(Object.defineProperty({__proto__:null,default:f8},Symbol.toStringTag,{value:"Module"})),h8=Ct(p8);var b0=typeof Map=="function"&&Map.prototype,ip=Object.getOwnPropertyDescriptor&&b0?Object.getOwnPropertyDescriptor(Map.prototype,"size"):null,ou=b0&&ip&&typeof ip.get=="function"?ip.get:null,z1=b0&&Map.prototype.forEach,w0=typeof Set=="function"&&Set.prototype,op=Object.getOwnPropertyDescriptor&&w0?Object.getOwnPropertyDescriptor(Set.prototype,"size"):null,au=w0&&op&&typeof op.get=="function"?op.get:null,N1=w0&&Set.prototype.forEach,m8=typeof WeakMap=="function"&&WeakMap.prototype,Va=m8?WeakMap.prototype.has:null,g8=typeof WeakSet=="function"&&WeakSet.prototype,Wa=g8?WeakSet.prototype.has:null,v8=typeof WeakRef=="function"&&WeakRef.prototype,B1=v8?WeakRef.prototype.deref:null,y8=Boolean.prototype.valueOf,x8=Object.prototype.toString,b8=Function.prototype.toString,w8=String.prototype.match,S0=String.prototype.slice,jr=String.prototype.replace,S8=String.prototype.toUpperCase,V1=String.prototype.toLowerCase,g_=RegExp.prototype.test,W1=Array.prototype.concat,In=Array.prototype.join,C8=Array.prototype.slice,U1=Math.floor,vm=typeof BigInt=="function"?BigInt.prototype.valueOf:null,ap=Object.getOwnPropertySymbols,ym=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Symbol.prototype.toString:null,Mo=typeof Symbol=="function"&&typeof Symbol.iterator=="object",Ua=typeof Symbol=="function"&&Symbol.toStringTag&&(typeof Symbol.toStringTag===Mo||"symbol")?Symbol.toStringTag:null,v_=Object.prototype.propertyIsEnumerable,H1=(typeof Reflect=="function"?Reflect.getPrototypeOf:Object.getPrototypeOf)||([].__proto__===Array.prototype?function(e){return e.__proto__}:null);function G1(e,t){if(e===1/0||e===-1/0||e!==e||e&&e>-1e3&&e<1e3||g_.call(/e/,t))return t;var n=/[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;if(typeof e=="number"){var r=e<0?-U1(-e):U1(e);if(r!==e){var i=String(r),o=S0.call(t,i.length+1);return jr.call(i,n,"$&_")+"."+jr.call(jr.call(o,/([0-9]{3})/g,"$&_"),/_$/,"")}}return jr.call(t,n,"$&_")}var xm=h8,q1=xm.custom,Y1=b_(q1)?q1:null,y_={__proto__:null,double:'"',single:"'"},E8={__proto__:null,double:/(["\\])/g,single:/(['\\])/g},Td=function e(t,n,r,i){var o=n||{};if(Kn(o,"quoteStyle")&&!Kn(y_,o.quoteStyle))throw new TypeError('option "quoteStyle" must be "single" or "double"');if(Kn(o,"maxStringLength")&&(typeof o.maxStringLength=="number"?o.maxStringLength<0&&o.maxStringLength!==1/0:o.maxStringLength!==null))throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');var a=Kn(o,"customInspect")?o.customInspect:!0;if(typeof a!="boolean"&&a!=="symbol")throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");if(Kn(o,"indent")&&o.indent!==null&&o.indent!=="	"&&!(parseInt(o.indent,10)===o.indent&&o.indent>0))throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');if(Kn(o,"numericSeparator")&&typeof o.numericSeparator!="boolean")throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');var l=o.numericSeparator;if(typeof t>"u")return"undefined";if(t===null)return"null";if(typeof t=="boolean")return t?"true":"false";if(typeof t=="string")return S_(t,o);if(typeof t=="number"){if(t===0)return 1/0/t>0?"0":"-0";var s=String(t);return l?G1(t,s):s}if(typeof t=="bigint"){var c=String(t)+"n";return l?G1(t,c):c}var d=typeof o.depth>"u"?5:o.depth;if(typeof r>"u"&&(r=0),r>=d&&d>0&&typeof t=="object")return bm(t)?"[Array]":"[Object]";var f=V8(o,r);if(typeof i>"u")i=[];else if(w_(i,t)>=0)return"[Circular]";function m(j,F,D){if(F&&(i=C8.call(i),i.push(F)),D){var z={depth:o.depth};return Kn(o,"quoteStyle")&&(z.quoteStyle=o.quoteStyle),e(j,z,r+1,i)}return e(j,o,r+1,i)}if(typeof t=="function"&&!X1(t)){var p=M8(t),h=vl(t,m);return"[Function"+(p?": "+p:" (anonymous)")+"]"+(h.length>0?" { "+In.call(h,", ")+" }":"")}if(b_(t)){var y=Mo?jr.call(String(t),/^(Symbol\(.*\))_[^)]*$/,"$1"):ym.call(t);return typeof t=="object"&&!Mo?ma(y):y}if(z8(t)){for(var w="<"+V1.call(String(t.nodeName)),g=t.attributes||[],v=0;v<g.length;v++)w+=" "+g[v].name+"="+x_(_8(g[v].value),"double",o);return w+=">",t.childNodes&&t.childNodes.length&&(w+="..."),w+="</"+V1.call(String(t.nodeName))+">",w}if(bm(t)){if(t.length===0)return"[]";var b=vl(t,m);return f&&!B8(b)?"["+wm(b,f)+"]":"[ "+In.call(b,", ")+" ]"}if(P8(t)){var C=vl(t,m);return!("cause"in Error.prototype)&&"cause"in t&&!v_.call(t,"cause")?"{ ["+String(t)+"] "+In.call(W1.call("[cause]: "+m(t.cause),C),", ")+" }":C.length===0?"["+String(t)+"]":"{ ["+String(t)+"] "+In.call(C,", ")+" }"}if(typeof t=="object"&&a){if(Y1&&typeof t[Y1]=="function"&&xm)return xm(t,{depth:d-r});if(a!=="symbol"&&typeof t.inspect=="function")return t.inspect()}if(A8(t)){var S=[];return z1&&z1.call(t,function(j,F){S.push(m(F,t,!0)+" => "+m(j,t))}),K1("Map",ou.call(t),S,f)}if(R8(t)){var P=[];return N1&&N1.call(t,function(j){P.push(m(j,t))}),K1("Set",au.call(t),P,f)}if(D8(t))return sp("WeakMap");if(F8(t))return sp("WeakSet");if(L8(t))return sp("WeakRef");if(T8(t))return ma(m(Number(t)));if($8(t))return ma(m(vm.call(t)));if(j8(t))return ma(y8.call(t));if(O8(t))return ma(m(String(t)));if(typeof window<"u"&&t===window)return"{ [object Window] }";if(typeof globalThis<"u"&&t===globalThis||typeof ne<"u"&&t===ne)return"{ [object globalThis] }";if(!k8(t)&&!X1(t)){var k=vl(t,m),_=H1?H1(t)===Object.prototype:t instanceof Object||t.constructor===Object,T=t instanceof Object?"":"null prototype",$=!_&&Ua&&Object(t)===t&&Ua in t?S0.call(qr(t),8,-1):T?"Object":"",I=_||typeof t.constructor!="function"?"":t.constructor.name?t.constructor.name+" ":"",M=I+($||T?"["+In.call(W1.call([],$||[],T||[]),": ")+"] ":"");return k.length===0?M+"{}":f?M+"{"+wm(k,f)+"}":M+"{ "+In.call(k,", ")+" }"}return String(t)};function x_(e,t,n){var r=n.quoteStyle||t,i=y_[r];return i+e+i}function _8(e){return jr.call(String(e),/"/g,"&quot;")}function $i(e){return!Ua||!(typeof e=="object"&&(Ua in e||typeof e[Ua]<"u"))}function bm(e){return qr(e)==="[object Array]"&&$i(e)}function k8(e){return qr(e)==="[object Date]"&&$i(e)}function X1(e){return qr(e)==="[object RegExp]"&&$i(e)}function P8(e){return qr(e)==="[object Error]"&&$i(e)}function O8(e){return qr(e)==="[object String]"&&$i(e)}function T8(e){return qr(e)==="[object Number]"&&$i(e)}function j8(e){return qr(e)==="[object Boolean]"&&$i(e)}function b_(e){if(Mo)return e&&typeof e=="object"&&e instanceof Symbol;if(typeof e=="symbol")return!0;if(!e||typeof e!="object"||!ym)return!1;try{return ym.call(e),!0}catch{}return!1}function $8(e){if(!e||typeof e!="object"||!vm)return!1;try{return vm.call(e),!0}catch{}return!1}var I8=Object.prototype.hasOwnProperty||function(e){return e in this};function Kn(e,t){return I8.call(e,t)}function qr(e){return x8.call(e)}function M8(e){if(e.name)return e.name;var t=w8.call(b8.call(e),/^function\s*([\w$]+)/);return t?t[1]:null}function w_(e,t){if(e.indexOf)return e.indexOf(t);for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1}function A8(e){if(!ou||!e||typeof e!="object")return!1;try{ou.call(e);try{au.call(e)}catch{return!0}return e instanceof Map}catch{}return!1}function D8(e){if(!Va||!e||typeof e!="object")return!1;try{Va.call(e,Va);try{Wa.call(e,Wa)}catch{return!0}return e instanceof WeakMap}catch{}return!1}function L8(e){if(!B1||!e||typeof e!="object")return!1;try{return B1.call(e),!0}catch{}return!1}function R8(e){if(!au||!e||typeof e!="object")return!1;try{au.call(e);try{ou.call(e)}catch{return!0}return e instanceof Set}catch{}return!1}function F8(e){if(!Wa||!e||typeof e!="object")return!1;try{Wa.call(e,Wa);try{Va.call(e,Va)}catch{return!0}return e instanceof WeakSet}catch{}return!1}function z8(e){return!e||typeof e!="object"?!1:typeof HTMLElement<"u"&&e instanceof HTMLElement?!0:typeof e.nodeName=="string"&&typeof e.getAttribute=="function"}function S_(e,t){if(e.length>t.maxStringLength){var n=e.length-t.maxStringLength,r="... "+n+" more character"+(n>1?"s":"");return S_(S0.call(e,0,t.maxStringLength),t)+r}var i=E8[t.quoteStyle||"single"];i.lastIndex=0;var o=jr.call(jr.call(e,i,"\\$1"),/[\x00-\x1f]/g,N8);return x_(o,"single",t)}function N8(e){var t=e.charCodeAt(0),n={8:"b",9:"t",10:"n",12:"f",13:"r"}[t];return n?"\\"+n:"\\x"+(t<16?"0":"")+S8.call(t.toString(16))}function ma(e){return"Object("+e+")"}function sp(e){return e+" { ? }"}function K1(e,t,n,r){var i=r?wm(n,r):In.call(n,", ");return e+" ("+t+") {"+i+"}"}function B8(e){for(var t=0;t<e.length;t++)if(w_(e[t],`
`)>=0)return!1;return!0}function V8(e,t){var n;if(e.indent==="	")n="	";else if(typeof e.indent=="number"&&e.indent>0)n=In.call(Array(e.indent+1)," ");else return null;return{base:n,prev:In.call(Array(t+1),n)}}function wm(e,t){if(e.length===0)return"";var n=`
`+t.prev+t.base;return n+In.call(e,","+n)+`
`+t.prev}function vl(e,t){var n=bm(e),r=[];if(n){r.length=e.length;for(var i=0;i<e.length;i++)r[i]=Kn(e,i)?t(e[i],e):""}var o=typeof ap=="function"?ap(e):[],a;if(Mo){a={};for(var l=0;l<o.length;l++)a["$"+o[l]]=o[l]}for(var s in e)Kn(e,s)&&(n&&String(Number(s))===s&&s<e.length||Mo&&a["$"+s]instanceof Symbol||(g_.call(/[^\w$]/,s)?r.push(t(s,e)+": "+t(e[s],e)):r.push(s+": "+t(e[s],e))));if(typeof ap=="function")for(var c=0;c<o.length;c++)v_.call(e,o[c])&&r.push("["+t(o[c])+"]: "+t(e[o[c]],e));return r}var W8=Td,U8=Xo,jd=function(e,t,n){for(var r=e,i;(i=r.next)!=null;r=i)if(i.key===t)return r.next=i.next,n||(i.next=e.next,e.next=i),i},H8=function(e,t){if(e){var n=jd(e,t);return n&&n.value}},G8=function(e,t,n){var r=jd(e,t);r?r.value=n:e.next={key:t,next:e.next,value:n}},q8=function(e,t){return e?!!jd(e,t):!1},Y8=function(e,t){if(e)return jd(e,t,!0)},X8=function(){var t,n={assert:function(r){if(!n.has(r))throw new U8("Side channel does not contain "+W8(r))},delete:function(r){var i=Y8(t,r);return i&&t&&!t.next&&(t=void 0),!!i},get:function(r){return H8(t,r)},has:function(r){return q8(t,r)},set:function(r,i){t||(t={next:void 0}),G8(t,r,i)}};return n},C_=Object,K8=Error,Q8=EvalError,Z8=RangeError,J8=ReferenceError,eR=SyntaxError,tR=URIError,nR=Math.abs,rR=Math.floor,iR=Math.max,oR=Math.min,aR=Math.pow,sR=Math.round,lR=Number.isNaN||function(t){return t!==t},cR=lR,uR=function(t){return cR(t)||t===0?t:t<0?-1:1},dR=Object.getOwnPropertyDescriptor,ic=dR;if(ic)try{ic([],"length")}catch{ic=null}var E_=ic,oc=Object.defineProperty||!1;if(oc)try{oc({},"a",{value:1})}catch{oc=!1}var __=oc,lp,Q1;function fR(){return Q1||(Q1=1,lp=function(){if(typeof Symbol!="function"||typeof Object.getOwnPropertySymbols!="function")return!1;if(typeof Symbol.iterator=="symbol")return!0;var t={},n=Symbol("test"),r=Object(n);if(typeof n=="string"||Object.prototype.toString.call(n)!=="[object Symbol]"||Object.prototype.toString.call(r)!=="[object Symbol]")return!1;var i=42;t[n]=i;for(var o in t)return!1;if(typeof Object.keys=="function"&&Object.keys(t).length!==0||typeof Object.getOwnPropertyNames=="function"&&Object.getOwnPropertyNames(t).length!==0)return!1;var a=Object.getOwnPropertySymbols(t);if(a.length!==1||a[0]!==n||!Object.prototype.propertyIsEnumerable.call(t,n))return!1;if(typeof Object.getOwnPropertyDescriptor=="function"){var l=Object.getOwnPropertyDescriptor(t,n);if(l.value!==i||l.enumerable!==!0)return!1}return!0}),lp}var cp,Z1;function pR(){if(Z1)return cp;Z1=1;var e=typeof Symbol<"u"&&Symbol,t=fR();return cp=function(){return typeof e!="function"||typeof Symbol!="function"||typeof e("foo")!="symbol"||typeof Symbol("bar")!="symbol"?!1:t()},cp}var up,J1;function k_(){return J1||(J1=1,up=typeof Reflect<"u"&&Reflect.getPrototypeOf||null),up}var dp,ex;function P_(){if(ex)return dp;ex=1;var e=C_;return dp=e.getPrototypeOf||null,dp}var hR="Function.prototype.bind called on incompatible ",mR=Object.prototype.toString,gR=Math.max,vR="[object Function]",tx=function(t,n){for(var r=[],i=0;i<t.length;i+=1)r[i]=t[i];for(var o=0;o<n.length;o+=1)r[o+t.length]=n[o];return r},yR=function(t,n){for(var r=[],i=n||0,o=0;i<t.length;i+=1,o+=1)r[o]=t[i];return r},xR=function(e,t){for(var n="",r=0;r<e.length;r+=1)n+=e[r],r+1<e.length&&(n+=t);return n},bR=function(t){var n=this;if(typeof n!="function"||mR.apply(n)!==vR)throw new TypeError(hR+n);for(var r=yR(arguments,1),i,o=function(){if(this instanceof i){var d=n.apply(this,tx(r,arguments));return Object(d)===d?d:this}return n.apply(t,tx(r,arguments))},a=gR(0,n.length-r.length),l=[],s=0;s<a;s++)l[s]="$"+s;if(i=Function("binder","return function ("+xR(l,",")+"){ return binder.apply(this,arguments); }")(o),n.prototype){var c=function(){};c.prototype=n.prototype,i.prototype=new c,c.prototype=null}return i},wR=bR,$d=Function.prototype.bind||wR,fp,nx;function C0(){return nx||(nx=1,fp=Function.prototype.call),fp}var pp,rx;function O_(){return rx||(rx=1,pp=Function.prototype.apply),pp}var SR=typeof Reflect<"u"&&Reflect&&Reflect.apply,CR=$d,ER=O_(),_R=C0(),kR=SR,PR=kR||CR.call(_R,ER),OR=$d,TR=Xo,jR=C0(),$R=PR,T_=function(t){if(t.length<1||typeof t[0]!="function")throw new TR("a function is required");return $R(OR,jR,t)},hp,ix;function IR(){if(ix)return hp;ix=1;var e=T_,t=E_,n;try{n=[].__proto__===Array.prototype}catch(a){if(!a||typeof a!="object"||!("code"in a)||a.code!=="ERR_PROTO_ACCESS")throw a}var r=!!n&&t&&t(Object.prototype,"__proto__"),i=Object,o=i.getPrototypeOf;return hp=r&&typeof r.get=="function"?e([r.get]):typeof o=="function"?function(l){return o(l==null?l:i(l))}:!1,hp}var mp,ox;function MR(){if(ox)return mp;ox=1;var e=k_(),t=P_(),n=IR();return mp=e?function(i){return e(i)}:t?function(i){if(!i||typeof i!="object"&&typeof i!="function")throw new TypeError("getProto: not an object");return t(i)}:n?function(i){return n(i)}:null,mp}var gp,ax;function AR(){if(ax)return gp;ax=1;var e=Function.prototype.call,t=Object.prototype.hasOwnProperty,n=$d;return gp=n.call(e,t),gp}var oe,DR=C_,LR=K8,RR=Q8,FR=Z8,zR=J8,Ao=eR,vo=Xo,NR=tR,BR=nR,VR=rR,WR=iR,UR=oR,HR=aR,GR=sR,qR=uR,j_=Function,vp=function(e){try{return j_('"use strict"; return ('+e+").constructor;")()}catch{}},Es=E_,YR=__,yp=function(){throw new vo},XR=Es?function(){try{return arguments.callee,yp}catch{try{return Es(arguments,"callee").get}catch{return yp}}}():yp,Bi=pR()(),Xe=MR(),KR=P_(),QR=k_(),$_=O_(),Ns=C0(),Xi={},ZR=typeof Uint8Array>"u"||!Xe?oe:Xe(Uint8Array),mi={__proto__:null,"%AggregateError%":typeof AggregateError>"u"?oe:AggregateError,"%Array%":Array,"%ArrayBuffer%":typeof ArrayBuffer>"u"?oe:ArrayBuffer,"%ArrayIteratorPrototype%":Bi&&Xe?Xe([][Symbol.iterator]()):oe,"%AsyncFromSyncIteratorPrototype%":oe,"%AsyncFunction%":Xi,"%AsyncGenerator%":Xi,"%AsyncGeneratorFunction%":Xi,"%AsyncIteratorPrototype%":Xi,"%Atomics%":typeof Atomics>"u"?oe:Atomics,"%BigInt%":typeof BigInt>"u"?oe:BigInt,"%BigInt64Array%":typeof BigInt64Array>"u"?oe:BigInt64Array,"%BigUint64Array%":typeof BigUint64Array>"u"?oe:BigUint64Array,"%Boolean%":Boolean,"%DataView%":typeof DataView>"u"?oe:DataView,"%Date%":Date,"%decodeURI%":decodeURI,"%decodeURIComponent%":decodeURIComponent,"%encodeURI%":encodeURI,"%encodeURIComponent%":encodeURIComponent,"%Error%":LR,"%eval%":eval,"%EvalError%":RR,"%Float16Array%":typeof Float16Array>"u"?oe:Float16Array,"%Float32Array%":typeof Float32Array>"u"?oe:Float32Array,"%Float64Array%":typeof Float64Array>"u"?oe:Float64Array,"%FinalizationRegistry%":typeof FinalizationRegistry>"u"?oe:FinalizationRegistry,"%Function%":j_,"%GeneratorFunction%":Xi,"%Int8Array%":typeof Int8Array>"u"?oe:Int8Array,"%Int16Array%":typeof Int16Array>"u"?oe:Int16Array,"%Int32Array%":typeof Int32Array>"u"?oe:Int32Array,"%isFinite%":isFinite,"%isNaN%":isNaN,"%IteratorPrototype%":Bi&&Xe?Xe(Xe([][Symbol.iterator]())):oe,"%JSON%":typeof JSON=="object"?JSON:oe,"%Map%":typeof Map>"u"?oe:Map,"%MapIteratorPrototype%":typeof Map>"u"||!Bi||!Xe?oe:Xe(new Map()[Symbol.iterator]()),"%Math%":Math,"%Number%":Number,"%Object%":DR,"%Object.getOwnPropertyDescriptor%":Es,"%parseFloat%":parseFloat,"%parseInt%":parseInt,"%Promise%":typeof Promise>"u"?oe:Promise,"%Proxy%":typeof Proxy>"u"?oe:Proxy,"%RangeError%":FR,"%ReferenceError%":zR,"%Reflect%":typeof Reflect>"u"?oe:Reflect,"%RegExp%":RegExp,"%Set%":typeof Set>"u"?oe:Set,"%SetIteratorPrototype%":typeof Set>"u"||!Bi||!Xe?oe:Xe(new Set()[Symbol.iterator]()),"%SharedArrayBuffer%":typeof SharedArrayBuffer>"u"?oe:SharedArrayBuffer,"%String%":String,"%StringIteratorPrototype%":Bi&&Xe?Xe(""[Symbol.iterator]()):oe,"%Symbol%":Bi?Symbol:oe,"%SyntaxError%":Ao,"%ThrowTypeError%":XR,"%TypedArray%":ZR,"%TypeError%":vo,"%Uint8Array%":typeof Uint8Array>"u"?oe:Uint8Array,"%Uint8ClampedArray%":typeof Uint8ClampedArray>"u"?oe:Uint8ClampedArray,"%Uint16Array%":typeof Uint16Array>"u"?oe:Uint16Array,"%Uint32Array%":typeof Uint32Array>"u"?oe:Uint32Array,"%URIError%":NR,"%WeakMap%":typeof WeakMap>"u"?oe:WeakMap,"%WeakRef%":typeof WeakRef>"u"?oe:WeakRef,"%WeakSet%":typeof WeakSet>"u"?oe:WeakSet,"%Function.prototype.call%":Ns,"%Function.prototype.apply%":$_,"%Object.defineProperty%":YR,"%Object.getPrototypeOf%":KR,"%Math.abs%":BR,"%Math.floor%":VR,"%Math.max%":WR,"%Math.min%":UR,"%Math.pow%":HR,"%Math.round%":GR,"%Math.sign%":qR,"%Reflect.getPrototypeOf%":QR};if(Xe)try{null.error}catch(e){var JR=Xe(Xe(e));mi["%Error.prototype%"]=JR}var eF=function e(t){var n;if(t==="%AsyncFunction%")n=vp("async function () {}");else if(t==="%GeneratorFunction%")n=vp("function* () {}");else if(t==="%AsyncGeneratorFunction%")n=vp("async function* () {}");else if(t==="%AsyncGenerator%"){var r=e("%AsyncGeneratorFunction%");r&&(n=r.prototype)}else if(t==="%AsyncIteratorPrototype%"){var i=e("%AsyncGenerator%");i&&Xe&&(n=Xe(i.prototype))}return mi[t]=n,n},sx={__proto__:null,"%ArrayBufferPrototype%":["ArrayBuffer","prototype"],"%ArrayPrototype%":["Array","prototype"],"%ArrayProto_entries%":["Array","prototype","entries"],"%ArrayProto_forEach%":["Array","prototype","forEach"],"%ArrayProto_keys%":["Array","prototype","keys"],"%ArrayProto_values%":["Array","prototype","values"],"%AsyncFunctionPrototype%":["AsyncFunction","prototype"],"%AsyncGenerator%":["AsyncGeneratorFunction","prototype"],"%AsyncGeneratorPrototype%":["AsyncGeneratorFunction","prototype","prototype"],"%BooleanPrototype%":["Boolean","prototype"],"%DataViewPrototype%":["DataView","prototype"],"%DatePrototype%":["Date","prototype"],"%ErrorPrototype%":["Error","prototype"],"%EvalErrorPrototype%":["EvalError","prototype"],"%Float32ArrayPrototype%":["Float32Array","prototype"],"%Float64ArrayPrototype%":["Float64Array","prototype"],"%FunctionPrototype%":["Function","prototype"],"%Generator%":["GeneratorFunction","prototype"],"%GeneratorPrototype%":["GeneratorFunction","prototype","prototype"],"%Int8ArrayPrototype%":["Int8Array","prototype"],"%Int16ArrayPrototype%":["Int16Array","prototype"],"%Int32ArrayPrototype%":["Int32Array","prototype"],"%JSONParse%":["JSON","parse"],"%JSONStringify%":["JSON","stringify"],"%MapPrototype%":["Map","prototype"],"%NumberPrototype%":["Number","prototype"],"%ObjectPrototype%":["Object","prototype"],"%ObjProto_toString%":["Object","prototype","toString"],"%ObjProto_valueOf%":["Object","prototype","valueOf"],"%PromisePrototype%":["Promise","prototype"],"%PromiseProto_then%":["Promise","prototype","then"],"%Promise_all%":["Promise","all"],"%Promise_reject%":["Promise","reject"],"%Promise_resolve%":["Promise","resolve"],"%RangeErrorPrototype%":["RangeError","prototype"],"%ReferenceErrorPrototype%":["ReferenceError","prototype"],"%RegExpPrototype%":["RegExp","prototype"],"%SetPrototype%":["Set","prototype"],"%SharedArrayBufferPrototype%":["SharedArrayBuffer","prototype"],"%StringPrototype%":["String","prototype"],"%SymbolPrototype%":["Symbol","prototype"],"%SyntaxErrorPrototype%":["SyntaxError","prototype"],"%TypedArrayPrototype%":["TypedArray","prototype"],"%TypeErrorPrototype%":["TypeError","prototype"],"%Uint8ArrayPrototype%":["Uint8Array","prototype"],"%Uint8ClampedArrayPrototype%":["Uint8ClampedArray","prototype"],"%Uint16ArrayPrototype%":["Uint16Array","prototype"],"%Uint32ArrayPrototype%":["Uint32Array","prototype"],"%URIErrorPrototype%":["URIError","prototype"],"%WeakMapPrototype%":["WeakMap","prototype"],"%WeakSetPrototype%":["WeakSet","prototype"]},Bs=$d,su=AR(),tF=Bs.call(Ns,Array.prototype.concat),nF=Bs.call($_,Array.prototype.splice),lx=Bs.call(Ns,String.prototype.replace),lu=Bs.call(Ns,String.prototype.slice),rF=Bs.call(Ns,RegExp.prototype.exec),iF=/[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,oF=/\\(\\)?/g,aF=function(t){var n=lu(t,0,1),r=lu(t,-1);if(n==="%"&&r!=="%")throw new Ao("invalid intrinsic syntax, expected closing `%`");if(r==="%"&&n!=="%")throw new Ao("invalid intrinsic syntax, expected opening `%`");var i=[];return lx(t,iF,function(o,a,l,s){i[i.length]=l?lx(s,oF,"$1"):a||o}),i},sF=function(t,n){var r=t,i;if(su(sx,r)&&(i=sx[r],r="%"+i[0]+"%"),su(mi,r)){var o=mi[r];if(o===Xi&&(o=eF(r)),typeof o>"u"&&!n)throw new vo("intrinsic "+t+" exists, but is not available. Please file an issue!");return{alias:i,name:r,value:o}}throw new Ao("intrinsic "+t+" does not exist!")},E0=function(t,n){if(typeof t!="string"||t.length===0)throw new vo("intrinsic name must be a non-empty string");if(arguments.length>1&&typeof n!="boolean")throw new vo('"allowMissing" argument must be a boolean');if(rF(/^%?[^%]*%?$/,t)===null)throw new Ao("`%` may not be present anywhere but at the beginning and end of the intrinsic name");var r=aF(t),i=r.length>0?r[0]:"",o=sF("%"+i+"%",n),a=o.name,l=o.value,s=!1,c=o.alias;c&&(i=c[0],nF(r,tF([0,1],c)));for(var d=1,f=!0;d<r.length;d+=1){var m=r[d],p=lu(m,0,1),h=lu(m,-1);if((p==='"'||p==="'"||p==="`"||h==='"'||h==="'"||h==="`")&&p!==h)throw new Ao("property names with quotes must have matching quotes");if((m==="constructor"||!f)&&(s=!0),i+="."+m,a="%"+i+"%",su(mi,a))l=mi[a];else if(l!=null){if(!(m in l)){if(!n)throw new vo("base intrinsic for "+t+" exists, but the property is not available.");return}if(Es&&d+1>=r.length){var y=Es(l,m);f=!!y,f&&"get"in y&&!("originalValue"in y.get)?l=y.get:l=l[m]}else f=su(l,m),l=l[m];f&&!s&&(mi[a]=l)}}return l},I_=E0,M_=T_,lF=M_([I_("%String.prototype.indexOf%")]),A_=function(t,n){var r=I_(t,!!n);return typeof r=="function"&&lF(t,".prototype.")>-1?M_([r]):r},cF=E0,Vs=A_,uF=Td,dF=Xo,cx=cF("%Map%",!0),fF=Vs("Map.prototype.get",!0),pF=Vs("Map.prototype.set",!0),hF=Vs("Map.prototype.has",!0),mF=Vs("Map.prototype.delete",!0),gF=Vs("Map.prototype.size",!0),D_=!!cx&&function(){var t,n={assert:function(r){if(!n.has(r))throw new dF("Side channel does not contain "+uF(r))},delete:function(r){if(t){var i=mF(t,r);return gF(t)===0&&(t=void 0),i}return!1},get:function(r){if(t)return fF(t,r)},has:function(r){return t?hF(t,r):!1},set:function(r,i){t||(t=new cx),pF(t,r,i)}};return n},vF=E0,Id=A_,yF=Td,yl=D_,xF=Xo,Vi=vF("%WeakMap%",!0),bF=Id("WeakMap.prototype.get",!0),wF=Id("WeakMap.prototype.set",!0),SF=Id("WeakMap.prototype.has",!0),CF=Id("WeakMap.prototype.delete",!0),EF=Vi?function(){var t,n,r={assert:function(i){if(!r.has(i))throw new xF("Side channel does not contain "+yF(i))},delete:function(i){if(Vi&&i&&(typeof i=="object"||typeof i=="function")){if(t)return CF(t,i)}else if(yl&&n)return n.delete(i);return!1},get:function(i){return Vi&&i&&(typeof i=="object"||typeof i=="function")&&t?bF(t,i):n&&n.get(i)},has:function(i){return Vi&&i&&(typeof i=="object"||typeof i=="function")&&t?SF(t,i):!!n&&n.has(i)},set:function(i,o){Vi&&i&&(typeof i=="object"||typeof i=="function")?(t||(t=new Vi),wF(t,i,o)):yl&&(n||(n=yl()),n.set(i,o))}};return r}:yl,_F=Xo,kF=Td,PF=X8,OF=D_,TF=EF,jF=TF||OF||PF,_0=function(){var t,n={assert:function(r){if(!n.has(r)){var i=r&&Object(r)===r?"the given object key":kF(r);throw new _F("Side channel does not contain "+i)}},delete:function(r){return!!t&&t.delete(r)},get:function(r){return t&&t.get(r)},has:function(r){return!!t&&t.has(r)},set:function(r,i){t||(t=jF()),t.set(r,i)}};return n},ux=String.prototype.replace,dx=/%20/g,xl={RFC1738:"RFC1738",RFC3986:"RFC3986",WHATWG:"WHATWG"},k0={default:xl.RFC3986,formatters:{RFC1738:function(e){return ux.call(e,dx,"+")},RFC3986:function(e){return String(e)},WHATWG:function(e){return ux.call(e,dx,"+")}},RFC1738:xl.RFC1738,RFC3986:xl.RFC3986,WHATWG:xl.WHATWG},xp=k0,Md=_0,fx=__,ac=Object.prototype.hasOwnProperty,Mn=Array.isArray,Ad=Md(),Er=function(t,n){return Ad.set(t,n),t},ni=function(t){return Ad.has(t)},ka=function(t){return Ad.get(t)},Sm=function(t,n){Ad.set(t,n)},P0=Md(),bl=function(t,n){return P0.set(t,n),t},bp=function(t){return P0.has(t)},px=function(t){return P0.get(t)},Pn=function(){for(var e=[],t=0;t<256;++t)e[e.length]="%"+((t<16?"0":"")+t.toString(16)).toUpperCase();return e}(),$F=function(t){for(;t.length>1;){var n=t.pop(),r=n.obj[n.prop];if(Mn(r)){for(var i=[],o=0;o<r.length;++o)typeof r[o]<"u"&&(i[i.length]=r[o]);n.obj[n.prop]=i}}},ci=function(t,n){for(var r=n&&n.plainObjects?{__proto__:null}:{},i=0;i<t.length;++i)typeof t[i]<"u"&&(r[i]=t[i]);return r},cu=function(t,n,r){n==="__proto__"&&fx?fx(t,n,{configurable:!0,enumerable:!0,value:r,writable:!0}):t[n]=r},IF=function(t,n){for(var r=n,i=Object.keys(t),o=0;o<i.length;++o){var a=parseInt(i[o],10);String(a)===i[o]&&a>r&&(r=a)}return r},hx=function(t){for(var n=0,r=0;r<t.length;++r)ac.call(t,r)&&(n+=1);return n},mx=function(t,n,r){var i=[t,n];if(r&&typeof r.arrayLimit=="number"&&i.length>r.arrayLimit){if(r.throwOnLimitExceeded)throw new RangeError("Array limit exceeded. Only "+r.arrayLimit+" element"+(r.arrayLimit===1?"":"s")+" allowed in an array.");return Er(ci(i,r),1)}return i},MF=function e(t,n,r){if(!n)return t;if(typeof n!="object"&&typeof n!="function"){if(Mn(t)){var i=t.length;if(r&&typeof r.arrayLimit=="number"&&hx(t)>=r.arrayLimit){if(r.throwOnLimitExceeded)throw new RangeError("Array limit exceeded. Only "+r.arrayLimit+" element"+(r.arrayLimit===1?"":"s")+" allowed in an array.");return Er(ci(t.concat(n),r),i)}t[i]=n}else if(t&&typeof t=="object")if(ni(t)){var o=ka(t)+1;t[o]=n,Sm(t,o)}else if(r&&r.strictMerge&&bp(t)){var a=px(t)+1;if(r.throwOnLimitExceeded&&typeof r.arrayLimit=="number"&&a>=r.arrayLimit)throw new RangeError("Array limit exceeded. Only "+r.arrayLimit+" element"+(r.arrayLimit===1?"":"s")+" allowed in an array.");t[a]=n,bl(t,a)}else if(r&&r.strictMerge){var l=mx(t,n,r);return Mn(l)?bl(l,1):l}else(r&&(r.plainObjects||r.allowPrototypes)||!ac.call(Object.prototype,n))&&(t[n]=!0);else return mx(t,n,r);return t}if(!t||typeof t!="object"){if(ni(n)){for(var s=Object.keys(n),c=r&&r.plainObjects?{__proto__:null,0:t}:{0:t},d=0;d<s.length;d++){var f=parseInt(s[d],10);c[f+1]=n[s[d]]}return Er(c,ka(n)+1)}var m=[t].concat(n);if(r&&typeof r.arrayLimit=="number"&&m.length>r.arrayLimit){if(r.throwOnLimitExceeded)throw new RangeError("Array limit exceeded. Only "+r.arrayLimit+" element"+(r.arrayLimit===1?"":"s")+" allowed in an array.");return Er(ci(m,r),m.length-1)}return m}var p=t;if(Mn(t)&&!Mn(n)&&(p=ci(t,r),bp(t)&&bl(p,t.length-1)),Mn(t)&&Mn(n)){if(n.forEach(function(h,y){if(ac.call(t,y)){var w=t[y];w&&typeof w=="object"&&h&&typeof h=="object"?t[y]=e(w,h,r):t[t.length]=h}else t[y]=h}),r&&typeof r.arrayLimit=="number"&&hx(t)>r.arrayLimit){if(r.throwOnLimitExceeded)throw new RangeError("Array limit exceeded. Only "+r.arrayLimit+" element"+(r.arrayLimit===1?"":"s")+" allowed in an array.");return Er(ci(t,r),t.length-1)}return t}return Object.keys(n).reduce(function(h,y){var w=n[y];if(ac.call(h,y)?cu(h,y,e(h[y],w,r)):cu(h,y,w),ni(n)&&!ni(h)&&Er(h,IF(h,ka(n))),ni(h)){var g=parseInt(y,10);String(g)===y&&g>=0&&g>ka(h)&&Sm(h,g)}if(bp(h)){var v=parseInt(y,10);String(v)===y&&v>px(h)&&bl(h,v)}return h},p)},AF=function(t,n){return Object.keys(n).reduce(function(r,i){return cu(r,i,n[i]),r},t)},DF=function(e,t,n){if(typeof e=="string"&&e.indexOf("%")===-1)return e.indexOf("+")===-1?e:e.replace(/\+/g," ");var r=e.replace(/\+/g," ");if(n==="iso-8859-1")return r.replace(/%[0-9a-f]{2}/gi,unescape);try{return decodeURIComponent(r)}catch{return r}},LF=typeof Symbol=="function"&&typeof Symbol.toPrimitive=="symbol",RF=Array.prototype.join,FF=Array.prototype.toString,zF=Object.prototype.toString,L_=function e(t,n){if(!t||typeof t!="object"&&typeof t!="function"||LF&&t[Symbol.toPrimitive]!=null)return t;if(Mn(t)&&t.toString===FF&&t.join===RF){var r=n||Md();if(r.has(t))return"";r.set(t,!0);for(var i,o=0;o<t.length;o+=1){var a=t[o],l=e(a,r);if(!i&&l!==a){i=[];for(var s=0;s<o;s+=1)i[s]=t[s]}i&&(i[o]=l)}return r.delete(t),i||t}if(typeof t.toString=="function")return t;var c=t.valueOf;if(typeof c=="function"){var d=c.call(t);if(!d||typeof d!="object"&&typeof d!="function")return String(d)}return zF.call(t)},wl=1024,NF=function(t,n,r,i,o){if(t.length===0)return t;var a=t;if(typeof t=="symbol"?a=Symbol.prototype.toString.call(t):typeof t!="string"&&(a=String(L_(t))),r==="iso-8859-1")return escape(a).replace(/%u[0-9a-f]{4}/gi,function(y){return"%26%23"+parseInt(y.slice(2),16)+"%3B"}).replace(/\+/g,"%2B");for(var l="",s=0;s<a.length;s+=wl){var c=a.length>=wl?a.slice(s,s+wl):a;if(s+wl<a.length){var d=c.charCodeAt(c.length-1);d>=55296&&d<=56319&&(c=c.slice(0,-1),s-=1)}for(var f=[],m=0;m<c.length;++m){var p=c.charCodeAt(m);if(p===45||p===46||p===95||p===126&&o!==xp.WHATWG||p>=48&&p<=57||p>=65&&p<=90||p>=97&&p<=122||o===xp.RFC1738&&(p===40||p===41)||o===xp.WHATWG&&p===42){f[f.length]=c.charAt(m);continue}if(p<128){f[f.length]=Pn[p];continue}if(p<2048){f[f.length]=Pn[192|p>>6]+Pn[128|p&63];continue}if(p<55296||p>=57344){f[f.length]=Pn[224|p>>12]+Pn[128|p>>6&63]+Pn[128|p&63];continue}var h=c.charCodeAt(m+1);p<=56319&&h>=56320&&h<=57343?(m+=1,p=65536+((p&1023)<<10|h&1023),f[f.length]=Pn[240|p>>18]+Pn[128|p>>12&63]+Pn[128|p>>6&63]+Pn[128|p&63]):f[f.length]="%EF%BF%BD"}l+=f.join("")}return l},BF=function(t){for(var n=[{obj:{o:t},prop:"o"}],r=Md(),i=0;i<n.length;++i)for(var o=n[i],a=o.obj[o.prop],l=Object.keys(a),s=0;s<l.length;++s){var c=l[s],d=a[c];typeof d=="object"&&d!==null&&!r.has(d)&&(n[n.length]={obj:a,prop:c},r.set(d,!0))}return $F(n),t},VF=function(t){return Object.prototype.toString.call(t)==="[object RegExp]"},WF=function(t){return!t||typeof t!="object"?!1:!!(t.constructor&&typeof t.constructor.isBuffer=="function"&&t.constructor.isBuffer(t))},UF=function(t,n,r,i,o){if(ni(t)){if(o)throw new RangeError("Array limit exceeded. Only "+r+" element"+(r===1?"":"s")+" allowed in an array.");for(var a=Mn(n)?n:[n],l=ka(t),s=0;s<a.length;++s)l+=1,t[l]=a[s];return Sm(t,l),t}var c=[].concat(t,n);if(c.length>r){if(o)throw new RangeError("Array limit exceeded. Only "+r+" element"+(r===1?"":"s")+" allowed in an array.");return Er(ci(c,{plainObjects:i}),c.length-1)}return c},HF=function(t,n){if(Mn(t)){for(var r=[],i=0;i<t.length;i+=1)r[r.length]=n(t[i]);return r}return n(t)},R_={arrayToObject:ci,assign:AF,combine:UF,compact:BF,decode:DF,encode:NF,isBuffer:WF,isOverflow:ni,isRegExp:VF,markOverflow:Er,maybeMap:HF,merge:MF,setProperty:cu,toCoercible:L_},F_=_0,Pa=R_,Ha=k0,gx=Object.prototype.hasOwnProperty,z_={brackets:function(t){return t+"[]"},comma:"comma",indices:function(t,n){return t+"["+n+"]"},repeat:function(t){return t}},Tn=Array.isArray,GF=Array.prototype.push,N_=function(e,t){GF.apply(e,Tn(t)?t:[t])},qF=Date.prototype.toISOString,vx=Ha.default,Me={addQueryPrefix:!1,allowDots:!1,allowEmptyArrays:!1,arrayFormat:"indices",charset:"utf-8",charsetSentinel:!1,commaRoundTrip:!1,delimiter:"&",depth:1/0,encode:!0,encodeDotInKeys:!1,encoder:Pa.encode,encodeValuesOnly:!1,filter:void 0,format:vx,formatter:Ha.formatters[vx],indices:!1,serializeDate:function(t){return qF.call(t)},skipNulls:!1,strictNullHandling:!1},YF=function(t){return typeof t=="string"||typeof t=="number"||typeof t=="boolean"||typeof t=="symbol"||typeof t=="bigint"},wp={},XF=function e(t,n,r,i,o,a,l,s,c,d,f,m,p,h,y,w,g,v,b,C){var S=t;if(C>b)throw new RangeError("Input depth exceeded depth option of "+b);for(var P=v,k=0,_=!1;(P=P.get(wp))!==void 0&&!_;){var T=P.get(t);if(k+=1,typeof T<"u"){if(T===k)throw new RangeError("Cyclic object value");_=!0}typeof P.get(wp)>"u"&&(k=0)}if(S=typeof d=="function"?d(n,S):S,S instanceof Date?S=p(S):r==="comma"&&Tn(S)&&(S=Pa.maybeMap(S,function(L){return L instanceof Date?p(L):L})),S===null){if(a)return y(c&&!w?c(n,Me.encoder,g,"key",h):n);S=""}if(YF(S)||Pa.isBuffer(S)){if(c){var $=w?n:c(n,Me.encoder,g,"key",h);return[y($)+"="+y(c(S,Me.encoder,g,"value",h))]}return[y(n)+"="+y(String(S))]}var I=[];if(typeof S>"u")return I;var M;if(r==="comma"&&Tn(S))w&&c&&(S=Pa.maybeMap(S,function(L){return L==null?L:c(L,Me.encoder,g,"value",h)})),M=[{value:S.length>0?Pa.toCoercible(S).join(",")||null:void 0}];else if(Tn(d))M=d;else{var j=Object.keys(S);M=f?j.sort(f):j}var F=String(n),D=i&&Tn(S)&&S.length===1?F+"[]":F;if(o&&Tn(S)&&S.length===0&&Object.keys(S).length===0)return y(c&&!w?c(D,Me.encoder,g,"key",h):D)+"[]";for(var z=0;z<M.length;++z){var R=M[z],O=typeof R=="object"&&R&&typeof R.value<"u"?R.value:S[R];if(!(l&&O===null)){var A=m&&s?String(R).replace(/\./g,"%2E"):String(R),N=Tn(S)?typeof r=="function"?r(D,A):D:D+(m?"."+A:"["+A+"]");v.set(t,k);var B=F_();B.set(wp,v),N_(I,e(O,N,r,i,o,a,l,s,r==="comma"&&w&&Tn(S)?null:c,d,f,m,p,h,y,w,g,B,b,C+1))}}return I},KF=function(t){if(!t)return Me;if(typeof t.allowEmptyArrays<"u"&&typeof t.allowEmptyArrays!="boolean")throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");if(typeof t.encodeDotInKeys<"u"&&typeof t.encodeDotInKeys!="boolean")throw new TypeError("`encodeDotInKeys` option can only be `true` or `false`, when provided");if(t.encoder!==null&&typeof t.encoder<"u"&&typeof t.encoder!="function")throw new TypeError("Encoder has to be a function.");var n=t.charset||Me.charset;if(typeof t.charset<"u"&&t.charset!=="utf-8"&&t.charset!=="iso-8859-1")throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");var r=Ha.default;if(typeof t.format<"u"){if(!gx.call(Ha.formatters,t.format))throw new TypeError("Unknown format option provided.");r=t.format}var i=Ha.formatters[r],o=Me.filter;(typeof t.filter=="function"||Tn(t.filter))&&(o=t.filter);var a;if(gx.call(z_,t.arrayFormat)?a=t.arrayFormat:"indices"in t?a=t.indices?"indices":"repeat":a=Me.arrayFormat,"commaRoundTrip"in t&&typeof t.commaRoundTrip!="boolean")throw new TypeError("`commaRoundTrip` must be a boolean, or absent");var l=typeof t.allowDots>"u"?t.encodeDotInKeys===!0?!0:Me.allowDots:!!t.allowDots;return{addQueryPrefix:typeof t.addQueryPrefix=="boolean"?t.addQueryPrefix:Me.addQueryPrefix,allowDots:l,allowEmptyArrays:typeof t.allowEmptyArrays=="boolean"?!!t.allowEmptyArrays:Me.allowEmptyArrays,arrayFormat:a,charset:n,charsetSentinel:typeof t.charsetSentinel=="boolean"?t.charsetSentinel:Me.charsetSentinel,commaRoundTrip:!!t.commaRoundTrip,delimiter:typeof t.delimiter>"u"?Me.delimiter:t.delimiter,depth:typeof t.depth=="number"?t.depth:Me.depth,encode:typeof t.encode=="boolean"?t.encode:Me.encode,encodeDotInKeys:typeof t.encodeDotInKeys=="boolean"?t.encodeDotInKeys:Me.encodeDotInKeys,encoder:typeof t.encoder=="function"?t.encoder:Me.encoder,encodeValuesOnly:typeof t.encodeValuesOnly=="boolean"?t.encodeValuesOnly:Me.encodeValuesOnly,filter:o,format:r,formatter:i,serializeDate:typeof t.serializeDate=="function"?t.serializeDate:Me.serializeDate,skipNulls:typeof t.skipNulls=="boolean"?t.skipNulls:Me.skipNulls,sort:typeof t.sort=="function"?t.sort:null,strictNullHandling:typeof t.strictNullHandling=="boolean"?t.strictNullHandling:Me.strictNullHandling}},QF=function(e,t){var n=e,r=KF(t),i,o;typeof r.filter=="function"?(o=r.filter,n=o("",n)):Tn(r.filter)&&(o=r.filter.slice(),i=o);var a=[];if(typeof n!="object"||n===null)return"";var l=z_[r.arrayFormat],s=l==="comma"&&r.commaRoundTrip;i||(i=Object.keys(n)),r.sort&&i.sort(r.sort);for(var c=F_(),d=0;d<i.length;++d){var f=i[d];if(!(typeof f>"u"||f===null)){var m=n[f];if(!(r.skipNulls&&m===null)){var p=r.encodeDotInKeys?String(f).replace(/\./g,"%2E"):String(f);N_(a,XF(m,p,l,s,r.allowEmptyArrays,r.strictNullHandling,r.skipNulls,r.encodeDotInKeys,r.encode?r.encoder:null,o,r.sort,r.allowDots,r.serializeDate,r.format,r.formatter,r.encodeValuesOnly,r.charset,c,r.depth,0))}}}var h=a.join(r.delimiter),y=r.addQueryPrefix===!0?"?":"";return r.charsetSentinel&&(r.charset==="iso-8859-1"?y+="utf8=%26%2310003%3B"+r.delimiter:y+="utf8=%E2%9C%93"+r.delimiter),h.length>0?y+h:""},ZF=_0,Wt=R_,sc=Object.prototype.hasOwnProperty,Ga=Array.isArray,B_=Object.getPrototypeOf,yx=String.fromCharCode,JF=function(t){if(!t||typeof t!="object")return!1;if(Ga(t))return!0;var n=B_(t);return n===Object.prototype||n===null},ez=function(t){if(Ga(t)){var n=[];return n.length=t.length,n}return B_(t)===null?{__proto__:null}:{}},tz=function(t){for(var n=ZF(),r={},i=[{source:t,target:r}],o=0;o<i.length;++o)for(var a=i[o].source,l=i[o].target,s=Object.keys(a),c=0;c<s.length;++c){var d=a[s[c]];if(JF(d)){if(!n.has(d)){var f=ez(d);n.set(d,f),i[i.length]={source:d,target:f}}Wt.setProperty(l,s[c],n.get(d))}else Wt.setProperty(l,s[c],d)}return r},Oe={allowDots:!1,allowEmptyArrays:!1,allowPrototypes:!1,allowSparse:!1,arrayLimit:20,charset:"utf-8",charsetSentinel:!1,comma:!1,decodeDotInKeys:!1,decoder:Wt.decode,delimiter:"&",depth:5,duplicates:"combine",ignoreQueryPrefix:!1,interpretNumericEntities:!1,parameterLimit:1e3,parseArrays:!0,plainObjects:!1,strictDepth:!1,strictMerge:!0,strictNullHandling:!1,throwOnLimitExceeded:!1},nz=function(e){return e.replace(/&#(\d+);/g,function(t,n){var r=parseInt(n,10);return r>65535&&r<=1114111?(r-=65536,yx(55296|r>>10,56320|r&1023)):yx(r)})},V_=function(e,t,n){if(e&&typeof e=="string"&&t.comma&&e.indexOf(",")>-1){if(t.throwOnLimitExceeded)for(var r=0,i=e.indexOf(",");i>-1;){if(r+=1,r>=t.arrayLimit)throw new RangeError("Array limit exceeded. Only "+t.arrayLimit+" element"+(t.arrayLimit===1?"":"s")+" allowed in an array.");i=e.indexOf(",",i+1)}return e.split(",")}if(t.throwOnLimitExceeded&&n>=t.arrayLimit&&n>0)throw new RangeError("Array limit exceeded. Only "+t.arrayLimit+" element"+(t.arrayLimit===1?"":"s")+" allowed in an array.");return e},rz="utf8=%26%2310003%3B",iz="utf8=%E2%9C%93",oz=function(t,n){var r={__proto__:null},i=n.ignoreQueryPrefix?t.replace(/^\?/,""):t;i=i.replace(/%5B/gi,"[").replace(/%5D/gi,"]");var o=n.parameterLimit===1/0?void 0:n.parameterLimit,a=i.split(n.delimiter,n.throwOnLimitExceeded&&typeof o<"u"?o+1:o);if(n.throwOnLimitExceeded&&typeof o<"u"&&a.length>o)throw new RangeError("Parameter limit exceeded. Only "+o+" parameter"+(o===1?"":"s")+" allowed.");var l=-1,s,c=n.charset;if(n.charsetSentinel)for(s=0;s<a.length;++s)a[s].indexOf("utf8=")===0&&(a[s]===iz?c="utf-8":a[s]===rz&&(c="iso-8859-1"),l=s,s=a.length);for(s=0;s<a.length;++s)if(s!==l){var d=a[s],f=d.indexOf("]="),m=f===-1?d.indexOf("="):f+1,p=m>1&&d.slice(m-2,m)==="[]",h,y;if(m===-1?(h=n.decoder(d,Oe.decoder,c,"key"),y=n.strictNullHandling?null:""):(h=n.decoder(d.slice(0,m),Oe.decoder,c,"key"),h!==null&&(y=Wt.maybeMap(V_(d.slice(m+1),n,Ga(r[h])&&(n.duplicates==="combine"||p)?r[h].length:0),function(g){return n.decoder(g,Oe.decoder,c,"value")}))),y&&n.interpretNumericEntities&&c==="iso-8859-1"&&(y=Wt.maybeMap(y,function(g){return g&&nz(String(g))})),p&&(y=Ga(y)?[y]:y),n.comma&&Ga(y)&&y.length>n.arrayLimit&&(y=Wt.combine([],y,n.arrayLimit,n.plainObjects,n.throwOnLimitExceeded)),h!==null){var w=sc.call(r,h);w&&(n.duplicates==="combine"||p)?r[h]=Wt.combine(r[h],y,n.arrayLimit,n.plainObjects,n.throwOnLimitExceeded):(!w||n.duplicates==="last")&&(r[h]=y)}}return r},W_=function(t){return t.charAt(0)==="["&&t.charAt(t.length-1)==="]"?t.slice(1,-1):t},az=function(e,t,n,r){var i=0;if(e.length>0&&e[e.length-1]==="[]"){var o=e.slice(0,-1).join("");i=Array.isArray(t)&&t[o]?t[o].length:0}for(var a=r?t:V_(t,n,i),l=e.length-1;l>=0;--l){var s,c=e[l];if(c==="[]"&&n.parseArrays)Wt.isOverflow(a)?s=a:s=n.allowEmptyArrays&&(a===""||n.strictNullHandling&&a===null)?[]:Wt.combine([],a,n.arrayLimit,n.plainObjects,n.throwOnLimitExceeded);else{s=n.plainObjects?{__proto__:null}:{};var d=W_(c),f=n.decodeDotInKeys?d.replace(/%2E/gi,"."):d,m=parseInt(f,10),p=!isNaN(m)&&c!==f&&String(m)===f&&m>=0&&n.parseArrays;if(!n.parseArrays&&f==="")s[0]=a;else if(p&&m<n.arrayLimit)s=[],s[m]=a;else{if(p&&n.throwOnLimitExceeded)throw new RangeError("Array limit exceeded. Only "+n.arrayLimit+" element"+(n.arrayLimit===1?"":"s")+" allowed in an array.");p?(s[m]=a,Wt.markOverflow(s,m)):f!=="__proto__"&&(s[f]=a)}}a=s}return a},sz=function(t){for(var n="",r=0,i=0;i<t.length;i+=1){var o=t.charCodeAt(i);if(o===91)r+=1,n+="[";else if(o===93)r>0&&(r-=1),n+="]";else if(o===46&&r===0&&i+1<t.length&&t.charCodeAt(i+1)!==46&&t.charCodeAt(i+1)!==91){for(var a=i+1,l=a;l<t.length&&t.charCodeAt(l)!==46&&t.charCodeAt(l)!==91;)l+=1;n+="["+t.slice(a,l)+"]",i=l-1}else n+=t.charAt(i)}return n},lz=function(t,n){var r=n.allowDots?sz(t):t;if(n.depth<=0)return!n.plainObjects&&sc.call(Object.prototype,W_(r))&&!n.allowPrototypes?void 0:[r];var i=[],o=r.indexOf("["),a=o>=0?r.slice(0,o):r;if(a){if(!n.plainObjects&&sc.call(Object.prototype,a)&&!n.allowPrototypes)return;i[i.length]=a}for(var l=r.length,s=o,c=0;s>=0&&c<n.depth;){for(var d=1,f=s+1,m=-1;f<l&&m<0;){var p=r.charCodeAt(f);p===91?d+=1:p===93&&(d-=1,d===0&&(m=f)),f+=1}if(m<0)return i[i.length]="["+r.slice(s)+"]",i;var h=r.slice(s,m+1),y=h.slice(1,-1);if(!n.plainObjects&&sc.call(Object.prototype,y)&&!n.allowPrototypes)return;i[i.length]=h,c+=1,s=r.indexOf("[",m+1)}if(s>=0){if(n.strictDepth===!0)throw new RangeError("Input depth exceeded depth option of "+n.depth+" and strictDepth is true");i[i.length]="["+r.slice(s)+"]"}return i},cz=function(t,n,r,i){if(t){var o=lz(t,r);if(o)return az(o,n,r,i)}},uz=function(t){if(!t)return Oe;if(typeof t.allowEmptyArrays<"u"&&typeof t.allowEmptyArrays!="boolean")throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");if(typeof t.decodeDotInKeys<"u"&&typeof t.decodeDotInKeys!="boolean")throw new TypeError("`decodeDotInKeys` option can only be `true` or `false`, when provided");if(t.decoder!==null&&typeof t.decoder<"u"&&typeof t.decoder!="function")throw new TypeError("Decoder has to be a function.");if(typeof t.charset<"u"&&t.charset!=="utf-8"&&t.charset!=="iso-8859-1")throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");if(typeof t.throwOnLimitExceeded<"u"&&typeof t.throwOnLimitExceeded!="boolean")throw new TypeError("`throwOnLimitExceeded` option must be a boolean");var n=typeof t.charset>"u"?Oe.charset:t.charset,r=typeof t.duplicates>"u"?Oe.duplicates:t.duplicates;if(r!=="combine"&&r!=="first"&&r!=="last")throw new TypeError("The duplicates option must be either combine, first, or last");var i=typeof t.allowDots>"u"?t.decodeDotInKeys===!0?!0:Oe.allowDots:!!t.allowDots;return{allowDots:i,allowEmptyArrays:typeof t.allowEmptyArrays=="boolean"?!!t.allowEmptyArrays:Oe.allowEmptyArrays,allowPrototypes:typeof t.allowPrototypes=="boolean"?t.allowPrototypes:Oe.allowPrototypes,allowSparse:typeof t.allowSparse=="boolean"?t.allowSparse:Oe.allowSparse,arrayLimit:typeof t.arrayLimit=="number"?t.arrayLimit:Oe.arrayLimit,charset:n,charsetSentinel:typeof t.charsetSentinel=="boolean"?t.charsetSentinel:Oe.charsetSentinel,comma:typeof t.comma=="boolean"?t.comma:Oe.comma,decodeDotInKeys:typeof t.decodeDotInKeys=="boolean"?t.decodeDotInKeys:Oe.decodeDotInKeys,decoder:typeof t.decoder=="function"?t.decoder:Oe.decoder,delimiter:typeof t.delimiter=="string"||Wt.isRegExp(t.delimiter)?t.delimiter:Oe.delimiter,depth:typeof t.depth=="number"||t.depth===!1?+t.depth:Oe.depth,duplicates:r,ignoreQueryPrefix:t.ignoreQueryPrefix===!0,interpretNumericEntities:typeof t.interpretNumericEntities=="boolean"?t.interpretNumericEntities:Oe.interpretNumericEntities,parameterLimit:typeof t.parameterLimit=="number"?t.parameterLimit:Oe.parameterLimit,parseArrays:t.parseArrays!==!1,plainObjects:typeof t.plainObjects=="boolean"?t.plainObjects:Oe.plainObjects,strictDepth:typeof t.strictDepth=="boolean"?!!t.strictDepth:Oe.strictDepth,strictMerge:typeof t.strictMerge=="boolean"?!!t.strictMerge:Oe.strictMerge,strictNullHandling:typeof t.strictNullHandling=="boolean"?t.strictNullHandling:Oe.strictNullHandling,throwOnLimitExceeded:typeof t.throwOnLimitExceeded=="boolean"?t.throwOnLimitExceeded:!1}},dz=function(e,t){var n=uz(t);if(e===""||e===null||typeof e>"u")return n.plainObjects?{__proto__:null}:{};for(var r=typeof e=="string"?oz(e,n):tz(e),i=n.plainObjects?{__proto__:null}:{},o=Object.keys(r),a=0;a<o.length;++a){var l=o[a],s=cz(l,r[l],n,typeof e=="string");i=Wt.merge(i,s,n)}return n.allowSparse===!0?i:Wt.compact(i)},fz=QF,pz=dz,hz=k0,mz={formats:hz,parse:pz,stringify:fz};const Dd=Ro(mz),gz=E.aside`

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
`,vz=E.h3`
    display: flex;
    gap: 110px;
margin-bottom: 15px;
font-size: 20px;
font-family: var(--main-font);
  
`;E.label`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 4px;
  font-size: 14px;
`;const yz=E.div`
  border-bottom: 1px solid #eee;
  padding: 12px;
  margin-bottom: 12px;

  &:last-child {
    border-bottom: none;
  }
`,xz=E.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  padding: 8px 0;
  
  &:hover p {
    color: #85683d;
  }
`,bz=E.p`
  font-weight: 600;
  font-size: 16px;
  margin: 0;
  color: #222;
  transition: color 0.2s;
`,wz=E.span`
  border: solid #555;
  border-width: 0 2px 2px 0;
  display: inline-block;
  padding: 3px;
  transform: ${e=>e.isOpen?"rotate(-135deg)":"rotate(45deg)"};
  transition: transform 0.3s ease;
`,Sz=E.div`
  max-height: ${e=>e.isOpen?"500px":"0"};
  overflow: hidden;
  transition: max-height 0.3s ease-in-out, opacity 0.3s;
  opacity: ${e=>e.isOpen?"1":"0"};
  padding: ${e=>e.isOpen?"12px":"0"};
`,Cz=E.label`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  cursor: pointer;
  font-size: 15px;
  color: #444;

  &:hover span:first-of-type {
    border-color: #85683d;
  }
`,Cm=E.input.attrs({type:"checkbox"})`
  display: none;
`,Ez=E.span`
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
`;var Em={},O0={},T0={},Ko={};Object.defineProperty(Ko,"__esModule",{value:!0});Ko.Direction=void 0;var xx;(function(e){e.Right="to right",e.Left="to left",e.Down="to bottom",e.Up="to top"})(xx||(Ko.Direction=xx={}));(function(e){var t=ne&&ne.__spreadArray||function(M,j,F){if(F||arguments.length===2)for(var D=0,z=j.length,R;D<z;D++)(R||!(D in j))&&(R||(R=Array.prototype.slice.call(j,0,D)),R[D]=j[D]);return M.concat(R||Array.prototype.slice.call(j))};Object.defineProperty(e,"__esModule",{value:!0}),e.isIOS=e.useThumbOverlap=e.assertUnreachable=e.voidFn=e.getTrackBackground=e.replaceAt=e.schd=e.translate=e.getClosestThumbIndex=e.translateThumbs=e.getPaddingAndBorder=e.getMargin=e.checkInitialOverlap=e.checkValuesAgainstBoundaries=e.checkBoundaries=e.isVertical=e.relativeValue=e.normalizeValue=e.isStepDivisible=e.isTouchEvent=e.getStepDecimals=void 0;var n=x,r=Ko,i=function(M){var j=M.toString().split(".")[1];return j?j.length:0};e.getStepDecimals=i;function o(M){return M.touches&&M.touches.length||M.changedTouches&&M.changedTouches.length}e.isTouchEvent=o;function a(M,j,F){var D=(j-M)/F,z=8,R=Number(D.toFixed(z));return parseInt(R.toString(),10)===R}e.isStepDivisible=a;function l(M,j,F,D,z,R,O){var A=1e11;if(M=Math.round(M*A)/A,!R){var N=O[j-1],B=O[j+1];if(N&&N>M)return N;if(B&&B<M)return B}if(M>D)return D;if(M<F)return F;var L=Math.floor(M*A-F*A)%Math.floor(z*A),V=Math.floor(M*A-Math.abs(L)),W=L===0?M:V/A,G=Math.abs(L/A)<z/2?W:W+z,U=(0,e.getStepDecimals)(z);return parseFloat(G.toFixed(U))}e.normalizeValue=l;function s(M,j,F){return(M-j)/(F-j)}e.relativeValue=s;function c(M){return M===r.Direction.Up||M===r.Direction.Down}e.isVertical=c;function d(M,j,F){if(j>=F)throw new RangeError("min (".concat(j,") is equal/bigger than max (").concat(F,")"));if(M<j)throw new RangeError("value (".concat(M,") is smaller than min (").concat(j,")"));if(M>F)throw new RangeError("value (".concat(M,") is bigger than max (").concat(F,")"))}e.checkBoundaries=d;function f(M,j,F){return M<j?j:M>F?F:M}e.checkValuesAgainstBoundaries=f;function m(M){if(!(M.length<2)&&!M.slice(1).every(function(j,F){return M[F]<=j}))throw new RangeError("values={[".concat(M,"]} needs to be sorted when allowOverlap={false}"))}e.checkInitialOverlap=m;function p(M){var j=window.getComputedStyle(M);return{top:parseInt(j["margin-top"],10),bottom:parseInt(j["margin-bottom"],10),left:parseInt(j["margin-left"],10),right:parseInt(j["margin-right"],10)}}e.getMargin=p;function h(M){var j=window.getComputedStyle(M);return{top:parseInt(j["padding-top"],10)+parseInt(j["border-top-width"],10),bottom:parseInt(j["padding-bottom"],10)+parseInt(j["border-bottom-width"],10),left:parseInt(j["padding-left"],10)+parseInt(j["border-left-width"],10),right:parseInt(j["padding-right"],10)+parseInt(j["border-right-width"],10)}}e.getPaddingAndBorder=h;function y(M,j,F){var D=F?-1:1;M.forEach(function(z,R){return g(z,D*j[R].x,j[R].y)})}e.translateThumbs=y;function w(M,j,F,D){for(var z=0,R=$(M[0],j,F,D),O=1;O<M.length;O++){var A=$(M[O],j,F,D);A<R&&(R=A,z=O)}return z}e.getClosestThumbIndex=w;function g(M,j,F){M.style.transform="translate(".concat(j,"px, ").concat(F,"px)")}e.translate=g;var v=function(M){var j=[],F=null,D=function(){for(var z=[],R=0;R<arguments.length;R++)z[R]=arguments[R];j=z,!F&&(F=requestAnimationFrame(function(){F=null,M.apply(void 0,j)}))};return D};e.schd=v;function b(M,j,F){var D=M.slice(0);return D[j]=F,D}e.replaceAt=b;function C(M){var j=M.values,F=M.colors,D=M.min,z=M.max,R=M.direction,O=R===void 0?r.Direction.Right:R,A=M.rtl,N=A===void 0?!1:A;N&&O===r.Direction.Right?O=r.Direction.Left:N&&r.Direction.Left&&(O=r.Direction.Right);var B=j.slice(0).sort(function(V,W){return V-W}).map(function(V){return(V-D)/(z-D)*100}),L=B.reduce(function(V,W,G){return"".concat(V,", ").concat(F[G]," ").concat(W,"%, ").concat(F[G+1]," ").concat(W,"%")},"");return"linear-gradient(".concat(O,", ").concat(F[0]," 0%").concat(L,", ").concat(F[F.length-1]," 100%)")}e.getTrackBackground=C;function S(){}e.voidFn=S;function P(M){throw new Error("Didn't expect to get here")}e.assertUnreachable=P;var k=function(M,j,F,D,z){z===void 0&&(z=function(O){return O});var R=Math.ceil(t([M],Array.from(M.children),!0).reduce(function(O,A){var N=Math.ceil(A.getBoundingClientRect().width);if(A.innerText&&A.innerText.includes(F)&&A.childElementCount===0){var B=A.cloneNode(!0);B.innerHTML=z(j.toFixed(D)),B.style.visibility="hidden",document.body.appendChild(B),N=Math.ceil(B.getBoundingClientRect().width),document.body.removeChild(B)}return N>O?N:O},M.getBoundingClientRect().width));return R},_=function(M,j,F,D,z,R,O){O===void 0&&(O=function(B){return B});var A=[],N=function(B){var L=k(F[B],D[B],z,R,O),V=j[B].x;j.forEach(function(W,G){var U=W.x,K=k(F[G],D[G],z,R,O);B!==G&&(V>=U&&V<=U+K||V+L>=U&&V+L<=U+K)&&(A.includes(G)||(A.push(B),A.push(G),A=t(t([],A,!0),[B,G],!1),N(G)))})};return N(M),Array.from(new Set(A.sort()))},T=function(M,j,F,D,z,R){D===void 0&&(D=.1),z===void 0&&(z=" - "),R===void 0&&(R=function(G){return G});var O=(0,e.getStepDecimals)(D),A=(0,n.useState)({}),N=A[0],B=A[1],L=(0,n.useState)(R(j[F].toFixed(O))),V=L[0],W=L[1];return(0,n.useEffect)(function(){if(M){var G=M.getThumbs();if(G.length<1)return;var U={},K=M.getOffsets(),Z=_(F,K,G,j,z,O,R),se=R(j[F].toFixed(O));if(Z.length){var ie=Z.reduce(function(Pt,Zo,Us,Jo){return Pt.length?t(t([],Pt,!0),[K[Jo[Us]].x],!1):[K[Jo[Us]].x]},[]);if(Math.min.apply(Math,ie)===K[F].x){var Pe=[];Z.forEach(function(Pt){Pe.push(j[Pt].toFixed(O))}),se=Array.from(new Set(Pe.sort(function(Pt,Zo){return parseFloat(Pt)-parseFloat(Zo)}))).map(R).join(z);var qe=Math.min.apply(Math,ie),Ye=Math.max.apply(Math,ie),Mi=G[Z[ie.indexOf(Ye)]].getBoundingClientRect().width;U.left="".concat(Math.abs(qe-(Ye+Mi))/2,"px"),U.transform="translate(-50%, 0)"}else U.visibility="hidden"}W(se),B(U)}},[M,j]),[V,N]};e.useThumbOverlap=T;function $(M,j,F,D){var z=M.getBoundingClientRect(),R=z.left,O=z.top,A=z.width,N=z.height;return c(D)?Math.abs(F-(O+N/2)):Math.abs(j-(R+A/2))}var I=function(){var M,j=((M=navigator.userAgentData)===null||M===void 0?void 0:M.platform)||navigator.platform;return["iPad Simulator","iPhone Simulator","iPod Simulator","iPad","iPhone","iPod"].includes(j)||navigator.userAgent.includes("Mac")&&"ontouchend"in document};e.isIOS=I})(T0);var _z=ne&&ne.__extends||function(){var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,i){r.__proto__=i}||function(r,i){for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(r[o]=i[o])},e(t,n)};return function(t,n){if(typeof n!="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");e(t,n);function r(){this.constructor=t}t.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}}(),kz=ne&&ne.__createBinding||(Object.create?function(e,t,n,r){r===void 0&&(r=n);var i=Object.getOwnPropertyDescriptor(t,n);(!i||("get"in i?!t.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,i)}:function(e,t,n,r){r===void 0&&(r=n),e[r]=t[n]}),Pz=ne&&ne.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),Oz=ne&&ne.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)n!=="default"&&Object.prototype.hasOwnProperty.call(e,n)&&kz(t,e,n);return Pz(t,e),t},bx=ne&&ne.__spreadArray||function(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,o;r<i;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))};Object.defineProperty(O0,"__esModule",{value:!0});var Sl=Oz(x),le=T0,Ve=Ko,Tz=["ArrowRight","ArrowUp","k","PageUp"],jz=["ArrowLeft","ArrowDown","j","PageDown"],$z=function(e){_z(t,e);function t(n){var r=e.call(this,n)||this;if(r.trackRef=Sl.createRef(),r.thumbRefs=[],r.state={draggedTrackPos:[-1,-1],draggedThumbIndex:-1,thumbZIndexes:new Array(r.props.values.length).fill(0).map(function(i,o){return o}),isChanged:!1,markOffsets:[]},r.getOffsets=function(){var i=r.props,o=i.direction,a=i.values,l=i.min,s=i.max,c=r.trackRef.current;if(!c)return console.warn("No track element found."),[];var d=c.getBoundingClientRect(),f=(0,le.getPaddingAndBorder)(c);return r.getThumbs().map(function(m,p){var h={x:0,y:0},y=m.getBoundingClientRect(),w=(0,le.getMargin)(m);switch(o){case Ve.Direction.Right:return h.x=(w.left+f.left)*-1,h.y=((y.height-d.height)/2+f.top)*-1,h.x+=d.width*(0,le.relativeValue)(a[p],l,s)-y.width/2,h;case Ve.Direction.Left:return h.x=(w.right+f.right)*-1,h.y=((y.height-d.height)/2+f.top)*-1,h.x+=d.width-d.width*(0,le.relativeValue)(a[p],l,s)-y.width/2,h;case Ve.Direction.Up:return h.x=((y.width-d.width)/2+w.left+f.left)*-1,h.y=-f.left,h.y+=d.height-d.height*(0,le.relativeValue)(a[p],l,s)-y.height/2,h;case Ve.Direction.Down:return h.x=((y.width-d.width)/2+w.left+f.left)*-1,h.y=-f.left,h.y+=d.height*(0,le.relativeValue)(a[p],l,s)-y.height/2,h;default:return(0,le.assertUnreachable)(o)}})},r.getThumbs=function(){return r.trackRef&&r.trackRef.current?Array.from(r.trackRef.current.children).filter(function(i){return i.hasAttribute("aria-valuenow")}):(console.warn("No thumbs found in the track container. Did you forget to pass & spread the `props` param in renderTrack?"),[])},r.getTargetIndex=function(i){return r.getThumbs().findIndex(function(o){return o===i.target||o.contains(i.target)})},r.addTouchEvents=function(i){document.addEventListener("touchmove",r.schdOnTouchMove,{passive:!1}),document.addEventListener("touchend",r.schdOnEnd,{passive:!1}),document.addEventListener("touchcancel",r.schdOnEnd,{passive:!1})},r.addMouseEvents=function(i){document.addEventListener("mousemove",r.schdOnMouseMove),document.addEventListener("mouseup",r.schdOnEnd)},r.onMouseDownTrack=function(i){var o;if(!(i.button!==0||(0,le.isIOS)()))if(i.persist(),i.preventDefault(),r.addMouseEvents(i.nativeEvent),r.props.values.length>1&&r.props.draggableTrack){if(r.thumbRefs.some(function(l){var s;return(s=l.current)===null||s===void 0?void 0:s.contains(i.target)}))return;r.setState({draggedTrackPos:[i.clientX,i.clientY]},function(){return r.onMove(i.clientX,i.clientY)})}else{var a=(0,le.getClosestThumbIndex)(r.thumbRefs.map(function(l){return l.current}),i.clientX,i.clientY,r.props.direction);(o=r.thumbRefs[a].current)===null||o===void 0||o.focus(),r.setState({draggedThumbIndex:a},function(){return r.onMove(i.clientX,i.clientY)})}},r.onResize=function(){(0,le.translateThumbs)(r.getThumbs(),r.getOffsets(),r.props.rtl),r.calculateMarkOffsets()},r.onTouchStartTrack=function(i){var o;if(i.persist(),r.addTouchEvents(i.nativeEvent),r.props.values.length>1&&r.props.draggableTrack){if(r.thumbRefs.some(function(l){var s;return(s=l.current)===null||s===void 0?void 0:s.contains(i.target)}))return;r.setState({draggedTrackPos:[i.touches[0].clientX,i.touches[0].clientY]},function(){return r.onMove(i.touches[0].clientX,i.touches[0].clientY)})}else{var a=(0,le.getClosestThumbIndex)(r.thumbRefs.map(function(l){return l.current}),i.touches[0].clientX,i.touches[0].clientY,r.props.direction);(o=r.thumbRefs[a].current)===null||o===void 0||o.focus(),r.setState({draggedThumbIndex:a},function(){return r.onMove(i.touches[0].clientX,i.touches[0].clientY)})}},r.onMouseOrTouchStart=function(i){if(!r.props.disabled){var o=(0,le.isTouchEvent)(i);if(!(!o&&i.button!==0)){var a=r.getTargetIndex(i);a!==-1&&(o?r.addTouchEvents(i):r.addMouseEvents(i),r.setState({draggedThumbIndex:a,thumbZIndexes:r.state.thumbZIndexes.map(function(l,s){return s===a?Math.max.apply(Math,r.state.thumbZIndexes):l<=r.state.thumbZIndexes[a]?l:l-1})}))}}},r.onMouseMove=function(i){i.preventDefault(),r.onMove(i.clientX,i.clientY)},r.onTouchMove=function(i){i.preventDefault(),r.onMove(i.touches[0].clientX,i.touches[0].clientY)},r.onKeyDown=function(i){var o=r.props,a=o.values,l=o.onChange,s=o.step,c=o.rtl,d=o.direction,f=r.state.isChanged,m=r.getTargetIndex(i.nativeEvent),p=c||d===Ve.Direction.Left||d===Ve.Direction.Down?-1:1;m!==-1&&(Tz.includes(i.key)?(i.preventDefault(),r.setState({draggedThumbIndex:m,isChanged:!0}),l((0,le.replaceAt)(a,m,r.normalizeValue(a[m]+p*(i.key==="PageUp"?s*10:s),m)))):jz.includes(i.key)?(i.preventDefault(),r.setState({draggedThumbIndex:m,isChanged:!0}),l((0,le.replaceAt)(a,m,r.normalizeValue(a[m]-p*(i.key==="PageDown"?s*10:s),m)))):i.key==="Tab"?r.setState({draggedThumbIndex:-1},function(){f&&r.fireOnFinalChange()}):f&&r.fireOnFinalChange())},r.onKeyUp=function(i){var o=r.state.isChanged;r.setState({draggedThumbIndex:-1},function(){o&&r.fireOnFinalChange()})},r.onMove=function(i,o){var a=r.state,l=a.draggedThumbIndex,s=a.draggedTrackPos,c=r.props,d=c.direction,f=c.min,m=c.max,p=c.onChange,h=c.values,y=c.step,w=c.rtl;if(l===-1&&s[0]===-1&&s[1]===-1)return null;var g=r.trackRef.current;if(!g)return null;var v=g.getBoundingClientRect(),b=(0,le.isVertical)(d)?v.height:v.width;if(s[0]!==-1&&s[1]!==-1){var C=i-s[0],S=o-s[1],P=0;switch(d){case Ve.Direction.Right:case Ve.Direction.Left:P=C/b*(m-f);break;case Ve.Direction.Down:case Ve.Direction.Up:P=S/b*(m-f);break;default:(0,le.assertUnreachable)(d)}if(w&&(P*=-1),Math.abs(P)>=y/2){for(var k=0;k<r.thumbRefs.length;k++){if(h[k]===m&&Math.sign(P)===1||h[k]===f&&Math.sign(P)===-1)return;var _=h[k]+P;_>m?P=m-h[k]:_<f&&(P=f-h[k])}for(var T=h.slice(0),k=0;k<r.thumbRefs.length;k++)T=(0,le.replaceAt)(T,k,r.normalizeValue(h[k]+P,k));r.setState({draggedTrackPos:[i,o]}),p(T)}}else{var $=0;switch(d){case Ve.Direction.Right:$=(i-v.left)/b*(m-f)+f;break;case Ve.Direction.Left:$=(b-(i-v.left))/b*(m-f)+f;break;case Ve.Direction.Down:$=(o-v.top)/b*(m-f)+f;break;case Ve.Direction.Up:$=(b-(o-v.top))/b*(m-f)+f;break;default:(0,le.assertUnreachable)(d)}w&&($=m+f-$),Math.abs(h[l]-$)>=y/2&&p((0,le.replaceAt)(h,l,r.normalizeValue($,l)))}},r.normalizeValue=function(i,o){var a=r.props,l=a.min,s=a.max,c=a.step,d=a.allowOverlap,f=a.values;return(0,le.normalizeValue)(i,o,l,s,c,d,f)},r.onEnd=function(i){if(i.preventDefault(),document.removeEventListener("mousemove",r.schdOnMouseMove),document.removeEventListener("touchmove",r.schdOnTouchMove),document.removeEventListener("mouseup",r.schdOnEnd),document.removeEventListener("touchend",r.schdOnEnd),document.removeEventListener("touchcancel",r.schdOnEnd),r.state.draggedThumbIndex===-1&&r.state.draggedTrackPos[0]===-1&&r.state.draggedTrackPos[1]===-1)return null;r.setState({draggedThumbIndex:-1,draggedTrackPos:[-1,-1]},function(){r.fireOnFinalChange()})},r.fireOnFinalChange=function(){r.setState({isChanged:!1});var i=r.props,o=i.onFinalChange,a=i.values;o&&o(a)},r.updateMarkRefs=function(i){if(!i.renderMark){r.numOfMarks=void 0,r.markRefs=void 0;return}r.numOfMarks=(i.max-i.min)/r.props.step,r.markRefs=[];for(var o=0;o<r.numOfMarks+1;o++)r.markRefs[o]=Sl.createRef()},r.calculateMarkOffsets=function(){if(!(!r.props.renderMark||!r.trackRef||!r.numOfMarks||!r.markRefs||r.trackRef.current===null)){for(var i=window.getComputedStyle(r.trackRef.current),o=parseInt(i.width,10),a=parseInt(i.height,10),l=parseInt(i.paddingLeft,10),s=parseInt(i.paddingTop,10),c=[],d=0;d<r.numOfMarks+1;d++){var f=9999,m=9999;if(r.markRefs[d].current){var p=r.markRefs[d].current.getBoundingClientRect();f=p.height,m=p.width}r.props.direction===Ve.Direction.Left||r.props.direction===Ve.Direction.Right?c.push([Math.round(o/r.numOfMarks*d+l-m/2),-Math.round((f-a)/2)]):c.push([Math.round(a/r.numOfMarks*d+s-f/2),-Math.round((m-o)/2)])}r.setState({markOffsets:c})}},n.step===0)throw new Error('"step" property should be a positive number');return r.schdOnMouseMove=(0,le.schd)(r.onMouseMove),r.schdOnTouchMove=(0,le.schd)(r.onTouchMove),r.schdOnEnd=(0,le.schd)(r.onEnd),r.thumbRefs=n.values.map(function(){return Sl.createRef()}),r.updateMarkRefs(n),r}return t.prototype.componentDidMount=function(){var n=this,r=this.props,i=r.values,o=r.min,a=r.step;this.resizeObserver=window.ResizeObserver?new window.ResizeObserver(this.onResize):{observe:function(){return window.addEventListener("resize",n.onResize)},unobserve:function(){return window.removeEventListener("resize",n.onResize)}},document.addEventListener("touchstart",this.onMouseOrTouchStart,{passive:!1}),document.addEventListener("mousedown",this.onMouseOrTouchStart,{passive:!1}),!this.props.allowOverlap&&(0,le.checkInitialOverlap)(this.props.values),this.props.values.forEach(function(l){return(0,le.checkBoundaries)(l,n.props.min,n.props.max)}),this.resizeObserver.observe(this.trackRef.current),(0,le.translateThumbs)(this.getThumbs(),this.getOffsets(),this.props.rtl),this.calculateMarkOffsets(),i.forEach(function(l){(0,le.isStepDivisible)(o,l,a)||console.warn("The `values` property is in conflict with the current `step`, `min`, and `max` properties. Please provide values that are accessible using the min, max, and step values.")})},t.prototype.componentDidUpdate=function(n,r){var i=this.props,o=i.max,a=i.min,l=i.step,s=i.values,c=i.rtl;(n.max!==o||n.min!==a||n.step!==l)&&this.updateMarkRefs(this.props),(0,le.translateThumbs)(this.getThumbs(),this.getOffsets(),c),(n.max!==o||n.min!==a||n.step!==l||r.markOffsets.length!==this.state.markOffsets.length)&&(this.calculateMarkOffsets(),s.forEach(function(d){(0,le.isStepDivisible)(a,d,l)||console.warn("The `values` property is in conflict with the current `step`, `min`, and `max` properties. Please provide values that are accessible using the min, max, and step values.")}))},t.prototype.componentWillUnmount=function(){var n={passive:!1};document.removeEventListener("mousedown",this.onMouseOrTouchStart,n),document.removeEventListener("mousemove",this.schdOnMouseMove),document.removeEventListener("touchmove",this.schdOnTouchMove),document.removeEventListener("touchstart",this.onMouseOrTouchStart),document.removeEventListener("mouseup",this.schdOnEnd),document.removeEventListener("touchend",this.schdOnEnd),this.resizeObserver.unobserve(this.trackRef.current)},t.prototype.render=function(){var n=this,r=this.props,i=r.label,o=r.labelledBy,a=r.renderTrack,l=r.renderThumb,s=r.renderMark,c=s===void 0?function(){return null}:s,d=r.values,f=r.min,m=r.max,p=r.allowOverlap,h=r.disabled,y=this.state,w=y.draggedThumbIndex,g=y.thumbZIndexes,v=y.markOffsets;return a({props:{style:{transform:"scale(1)",cursor:w>-1?"grabbing":this.props.draggableTrack?(0,le.isVertical)(this.props.direction)?"ns-resize":"ew-resize":d.length===1&&!h?"pointer":"inherit"},onMouseDown:h?le.voidFn:this.onMouseDownTrack,onTouchStart:h?le.voidFn:this.onTouchStartTrack,ref:this.trackRef},isDragged:this.state.draggedThumbIndex>-1,disabled:h,children:bx(bx([],v.map(function(b,C,S){return c({props:{style:n.props.direction===Ve.Direction.Left||n.props.direction===Ve.Direction.Right?{position:"absolute",left:"".concat(b[0],"px"),marginTop:"".concat(b[1],"px")}:{position:"absolute",top:"".concat(b[0],"px"),marginLeft:"".concat(b[1],"px")},key:"mark".concat(C),ref:n.markRefs[C]},index:C})}),!0),d.map(function(b,C){var S=n.state.draggedThumbIndex===C;return l({index:C,value:b,isDragged:S,props:{style:{position:"absolute",zIndex:g[C],cursor:h?"inherit":S?"grabbing":"grab",userSelect:"none",touchAction:"none",WebkitUserSelect:"none",MozUserSelect:"none",msUserSelect:"none"},key:C,tabIndex:h?void 0:0,"aria-valuemax":p?m:d[C+1]||m,"aria-valuemin":p?f:d[C-1]||f,"aria-valuenow":b,draggable:!1,ref:n.thumbRefs[C],"aria-label":i,"aria-labelledby":o,role:"slider",onKeyDown:h?le.voidFn:n.onKeyDown,onKeyUp:h?le.voidFn:n.onKeyUp}})}),!0)})},t.defaultProps={label:"Accessibility label",labelledBy:null,step:1,direction:Ve.Direction.Right,rtl:!1,disabled:!1,allowOverlap:!1,draggableTrack:!1,min:0,max:100},t}(Sl.Component);O0.default=$z;(function(e){var t=ne&&ne.__importDefault||function(o){return o&&o.__esModule?o:{default:o}};Object.defineProperty(e,"__esModule",{value:!0}),e.checkValuesAgainstBoundaries=e.relativeValue=e.useThumbOverlap=e.Direction=e.getTrackBackground=e.Range=void 0;var n=t(O0);e.Range=n.default;var r=T0;Object.defineProperty(e,"getTrackBackground",{enumerable:!0,get:function(){return r.getTrackBackground}}),Object.defineProperty(e,"useThumbOverlap",{enumerable:!0,get:function(){return r.useThumbOverlap}}),Object.defineProperty(e,"relativeValue",{enumerable:!0,get:function(){return r.relativeValue}}),Object.defineProperty(e,"checkValuesAgainstBoundaries",{enumerable:!0,get:function(){return r.checkValuesAgainstBoundaries}});var i=Ko;Object.defineProperty(e,"Direction",{enumerable:!0,get:function(){return i.Direction}})})(Em);const Iz=E.div`
  padding: 20px 0;
`,Mz=E.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`,wx=E.input`
  width: 100%;
  padding: 8px 12px;
  border: 1px solid  #85683d;
  border-radius: 6px;
  font-size: 14px;

  &:focus {
    outline: none;
    border-color:  #583d2d;
  }
`;E.span`
  display: flex;
  align-items: center;
  color: #999;
`;const Az=E.div`
  height: 6px;
  width: 100%;
  border-radius: 4px;
  background: ${({background:e})=>e};
`,Dz=E.div`
  height: 18px;
  width: 18px;
  border-radius: 50%;
  background: #583d2d;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`,U_=({childValues:e,onChange:t})=>{const o=(e==null?void 0:e[0])??10,a=(e==null?void 0:e[1])??1e4,l=o!==a,[s,c]=x.useState([o,a]);x.useEffect(()=>{e&&e.length===2&&(c(e),t&&t(e))},[e,t]);const d=p=>{c(p),t&&t(p)},f=(p,h)=>{const y=h===""?"":Number(h),w=[...s];w[p]=y,d(w)},m=p=>{const h=[...s];p===0?((h[0]===""||h[0]<o)&&(h[0]=o),h[0]>h[1]-50&&(h[0]=h[1]-50)):((h[1]===""||h[1]>a)&&(h[1]=a),h[1]<h[0]+50&&(h[1]=h[0]+50)),d(h)};return u.jsx(u.Fragment,{children:l&&u.jsxs(Iz,{children:[u.jsxs(Mz,{children:[u.jsx(wx,{type:"number",value:s[0],min:o,max:s[1],onChange:p=>f(0,p.target.value),onBlur:()=>m(0)}),u.jsx(wx,{type:"number",value:s[1],min:s[0],max:a,onChange:p=>f(1,p.target.value),onBlur:()=>m(1)})]}),u.jsx(Em.Range,{values:s,step:50,min:o,max:a,onChange:d,renderTrack:({props:p,children:h})=>u.jsx(Az,{...p,background:Em.getTrackBackground({values:s,colors:["#ddd","#85683d","#ddd"],min:o,max:a}),children:h}),renderThumb:({props:p})=>u.jsx(Dz,{...p})})]})})},Lz=({childValues:e,category:t,selectedFilters:n,setSelectedFilters:r,setPriceRange:i})=>{const[o,a]=x.useState([]),[l,s]=x.useState({});x.useEffect(()=>{t&&(async()=>{try{const h=Dd.stringify({populate:{attributes:{populate:{label:{populate:"*"},value:{populate:"*"}}},category:!0},filters:{category:{title:{$eq:t}}},pagination:{pageSize:200}},{encodeValuesOnly:!0}),g=(await(await fetch(`https://backenddidiv-production.up.railway.app/api/products?${h}`)).json()).data||[],v={};g.forEach(C=>{var S;(S=C.attributes)==null||S.forEach(P=>{var T,$,I,M;const k=((T=P.label)==null?void 0:T.label)??(($=P.label)==null?void 0:$.name)??((I=P.label)==null?void 0:I.title),_=(M=P.value)==null?void 0:M.value;!k||!_||(v[k]||(v[k]=new Set),v[k].add(_))})});const b=Object.entries(v).map(([C,S])=>({type:"checkbox",label:C,name:C.toLowerCase(),options:Array.from(S)}));a(b)}catch(h){console.error(h)}})()},[t]);const c=p=>{s(h=>({...h,[p]:!h[p]}))},d=(p,h)=>{r(y=>{const w=y[p]||[];return w.includes(h)?{...y,[p]:w.filter(g=>g!==h)}:{...y,[p]:[...w,h]}})},f=Object.values(n).some(p=>Array.isArray(p)&&p.length>0),m=()=>{f&&r({})};return u.jsxs(gz,{children:[u.jsxs(vz,{children:["Фільтри ",u.jsx(K2,{size:20})]}),(o||[]).map(p=>{var y;const h=!!l[p.name];return u.jsxs(yz,{children:[u.jsxs(xz,{onClick:()=>c(p.name),children:[u.jsx(bz,{children:p.label}),u.jsx(wz,{isOpen:h})]}),u.jsxs(Sz,{isOpen:h,children:[p.type==="checkbox"&&((y=p.options)==null?void 0:y.map(w=>{var g;return u.jsxs(Cz,{children:[u.jsx(Cm,{checked:((g=n[p.name])==null?void 0:g.includes(w))||!1,onChange:()=>d(p.name,w)}),u.jsx(Ez,{}),w]},w)})),p.type==="range"&&u.jsx(U_,{onChange:i,childValues:e})]})]},p.name)}),u.jsx(m_,{onClick:m,disabled:!f,children:"Скинути обрані фільтри"})]})},Rz=E.aside`
  width: 100%;
  max-width: 400px;
  background: #ffffff;
  padding: 20px;
  border-radius: 12px;
  font-size: 20px;
font-family: var(--main-font);
`;E.h3`
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 20px;
  color: #333;
`;const Fz=E.div`
  border-bottom: 1px solid #eee;
  padding: 12px;
  margin-bottom: 12px;

  &:last-child {
    border-bottom: none;
  }
`,zz=E.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  padding: 8px 0;
  
  &:hover p {
    color: #85683d;
  }
`,Nz=E.p`
  font-weight: 600;
  font-size: 16px;
  margin: 0;
  color: #222;
  transition: color 0.2s;
`,Bz=E.span`
  border: solid #555;
  border-width: 0 2px 2px 0;
  display: inline-block;
  padding: 3px;
  transform: ${e=>e.isOpen?"rotate(-135deg)":"rotate(45deg)"};
  transition: transform 0.3s ease;
`,Vz=E.div`
  max-height: ${e=>e.isOpen?"500px":"0"};
  overflow: hidden;
  transition: max-height 0.3s ease-in-out, opacity 0.3s;
  opacity: ${e=>e.isOpen?"1":"0"};
  padding: ${e=>e.isOpen?"12px":"0"};
`,Wz=E.label`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  cursor: pointer;
  font-size: 15px;
  color: #444;

  &:hover span:first-of-type {
    border-color: #85683d;
  }
`,_m=E.input.attrs({type:"checkbox"})`
  display: none;
`,Uz=E.span`
  width: 20px;
  height: 20px;
  border: 2px solid #ddd;
  border-radius: 4px;
  margin-right: 12px;
  position: relative;
  flex-shrink: 0;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);

  ${_m}:checked + & {
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

  ${_m}:checked + &::after {
    opacity: 1;
  }
`,Hz=({childValues:e,category:t,selectedFilters:n,setSelectedFilters:r,setPriceRange:i})=>{const[o,a]=x.useState({}),[l,s]=x.useState([]);x.useEffect(()=>{t&&(async()=>{try{const m=Dd.stringify({populate:{attributes:{populate:{label:{populate:"*"},value:{populate:"*"}}},category:!0},filters:{category:{title:{$eq:t}}},pagination:{pageSize:200}},{encodeValuesOnly:!0}),y=(await(await fetch(`https://backenddidiv-production.up.railway.app/api/products?${m}`)).json()).data||[],w={};y.forEach(v=>{var b;(b=v.attributes)==null||b.forEach(C=>{var k,_,T,$;const S=((k=C.label)==null?void 0:k.label)??((_=C.label)==null?void 0:_.name)??((T=C.label)==null?void 0:T.title),P=($=C.value)==null?void 0:$.value;!S||!P||(w[S]||(w[S]=new Set),w[S].add(P))})});const g=Object.entries(w).map(([v,b])=>({type:"checkbox",label:v,name:v.toLowerCase(),options:Array.from(b)}));s(g)}catch(m){console.error(m)}})()},[t]);const c=f=>{a(m=>({...m,[f]:!m[f]}))},d=(f,m)=>{r(p=>{const h=p[f]||[];return h.includes(m)?{...p,[f]:h.filter(y=>y!==m)}:{...p,[f]:[...h,m]}})};return u.jsx(Rz,{children:(l||[]).map(f=>{var p;const m=!!o[f.name];return u.jsxs(Fz,{children:[u.jsxs(zz,{onClick:()=>c(f.name),children:[u.jsx(Nz,{children:f.label}),u.jsx(Bz,{isOpen:m})]}),u.jsxs(Vz,{isOpen:m,children:[f.type==="checkbox"&&((p=f.options)==null?void 0:p.map(h=>{var y;return u.jsxs(Wz,{children:[u.jsx(_m,{checked:((y=n[f.name])==null?void 0:y.includes(h))||!1,onChange:()=>d(f.name,h)}),u.jsx(Uz,{}),h]},h)})),f.type==="range"&&u.jsx(U_,{onChange:i,childValues:e})]})]},f.name)})})},Gz=({setValues:e,category:t,selectedFilters:n={},priceRange:r,sortType:i,setIsSortOpen:o,isSortOpen:a,setSortType:l,sortOrder:s,setSortOrder:c})=>{const[d,f]=x.useState([]),[m,p]=x.useState(!0),[h,y]=x.useState(1),w=24;let g=d;const v=x.useRef(null);x.useEffect(()=>{const j=F=>{v.current&&!v.current.contains(F.target)&&o(!1)};return document.addEventListener("mousedown",j),()=>{document.removeEventListener("mousedown",j)}},[o]),x.useEffect(()=>{(async()=>{try{p(!0);const F=Dd.stringify({populate:{attributes:{populate:{label:{populate:"*"},value:{populate:"*"}}},category:!0,images:!0},filters:{category:{title:{$eq:t}}},pagination:{pageSize:500}},{encodeValuesOnly:!0}),z=await(await fetch(`https://backenddidiv-production.up.railway.app/api/products?${F}`)).json();f(z.data);const R=Date.now(),O=7*24*60*60*1e3,A=z.data.filter(B=>{if(B.stock>0||!B.sold_date)return!0;const L=new Date(B.sold_date).getTime();return R-L<O});f(A);const N=z.data.map(B=>B.price);if(N.length>0){let B=Math.min(...N),L=Math.max(...N);e([B,L])}}catch(F){console.error("Error fetching products:",F)}finally{p(!1)}})()},[t,e]),x.useEffect(()=>{y(1)},[t,n,r]),x.useEffect(()=>{window.scrollTo({top:0,behavior:"smooth"})},[h]);const b=et(),C=Lt(),S=Ge(j=>j.favorites.items),P=Ge(j=>j.cart.items),k=(j,F)=>{F.stopPropagation();const D=S.some(z=>z.id===(j==null?void 0:j.id));Ti(j,D,C,X)};Object.keys(n).forEach(j=>{const F=n[j];Array.isArray(F)&&F.length>0&&(g=g.filter(D=>{var z;return(z=D.attributes)==null?void 0:z.some(R=>{var N,B,L,V,W;const O=(((N=R.label)==null?void 0:N.label)??((B=R.label)==null?void 0:B.name)??((L=R.label)==null?void 0:L.title)??((V=R.label)==null?void 0:V.value)??"").toString().toLowerCase(),A=(W=R.value)==null?void 0:W.value;return O===j.toLowerCase()&&F.includes(A)})}))}),r&&r.length;const _=x.useMemo(()=>{const j=[...g],F=D=>D.new_price&&D.new_price<D.price?D.new_price:D.price;switch(i){case"name":return j.sort((D,z)=>s==="asc"?D.name.localeCompare(z.name):z.name.localeCompare(D.name));case"price":return j.sort((D,z)=>{const R=F(D),O=F(z);return s==="asc"?R-O:O-R});case"date":return j.sort((D,z)=>s==="asc"?new Date(D.createdAt)-new Date(z.createdAt):new Date(z.createdAt)-new Date(D.createdAt));default:return j}},[i,g,s]),T=h*w,$=T-w,I=_.slice($,T),M=Math.ceil(g.length/w);return m?u.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"100vw",height:"100vh"},children:u.jsx(ji,{height:100,width:100,radius:5,color:"var(--orange-color)",ariaLabel:"ball-triangle-loading",wrapperStyle:{},wrapperClass:"",visible:!0})}):u.jsxs(B5,{children:[u.jsxs(V5,{children:[u.jsx(W5,{children:t}),u.jsxs(Q5,{ref:v,children:[u.jsxs(Z5,{onClick:()=>o(j=>!j),children:["Сортування",u.jsx(Wu,{strokeWidth:.9,size:22})]}),a&&u.jsxs(J5,{children:[u.jsx(Fi,{onClick:()=>{l("name"),c("asc"),o(!1)},children:"А-Я"}),u.jsx(Fi,{onClick:()=>{l("name"),c("desc"),o(!1)},children:"Я-А"}),u.jsx(Fi,{onClick:()=>{l("price"),c("asc"),o(!1)},children:"Ціна ↑"}),u.jsx(Fi,{onClick:()=>{l("price"),c("desc"),o(!1)},children:"Ціна ↓"}),u.jsx(Fi,{onClick:()=>{l("date"),c("desc"),o(!1)},children:"Спочатку новіші"}),u.jsx(Fi,{onClick:()=>{l("date"),c("asc"),o(!1)},children:"Спочатку старіші"})]})]})]}),u.jsx(Un,{autoClose:1500}),g.length===0?u.jsx(U5,{children:u.jsx("p",{style:{textAlign:"center",fontSize:"30px",marginTop:"50px",marginLeft:"auto",marginRight:"auto"},children:"Нічого не знайдено 😢"})}):u.jsx(H5,{children:I.map(j=>{var G,U,K;const F=S.some(Z=>Z.id===j.id),D=j!=null&&j.createdAt?Date.now()-new Date(j.createdAt).getTime()<7*24*60*60*1e3:!1,z=P.find(Z=>Z.id===j.id),R=(j==null?void 0:j.available)??!0,O=(j==null?void 0:j.stock)===0,A=j.new_price&&j.new_price<j.price,N=A?j.new_price:j.price,B=A?Math.round((j.price-j.new_price)/j.price*100):0,L=j?P.find(Z=>Z.id===j.id):null,V=(L==null?void 0:L.quantity)||0,W=async(Z,se)=>{if(se.stopPropagation(),V>=Z.stock){X.warning("Товар вже в кошику (досягнуто максимум)");return}if(V+1>Z.stock){X.warning(`Доступно лише ${Z.stock} шт.`);return}await Ho(Z,1,C,X)};return u.jsxs(G5,{onClick:()=>b(`/product/${j.slug??j.id}`),$soldOut:O,style:{cursor:"pointer"},children:[u.jsxs(aC,{children:[D&&u.jsx(Qg,{children:"Новинка"}),!R&&u.jsx(Kg,{children:"Бронь"}),O&&u.jsx(Yu,{children:"Продано"}),u.jsx(q5,{src:((U=(G=j.images)==null?void 0:G[0])==null?void 0:U.url)||"/placeholder.jpg",alt:j.name,onError:Z=>{Z.currentTarget.onerror=null,Z.currentTarget.src=ur}})]}),u.jsx(X5,{children:j.name}),u.jsxs(Y5,{children:[u.jsx(lC,{children:u.jsxs(cC,{children:[u.jsxs(uC,{$discount:A,children:[N==null?void 0:N.toLocaleString()," грн"]}),A&&u.jsxs(dC,{children:[(K=j.price)==null?void 0:K.toLocaleString()," грн"]}),A&&u.jsxs(fC,{children:["-",B,"%"]})]})}),u.jsxs(sC,{children:[R&&!O&&u.jsx(Uc,{onClick:Z=>W(j,Z),children:u.jsx(Uo,{size:24,color:z?"var(--orange-color)":"black",strokeWidth:2})}),!O&&u.jsx(Uc,{onClick:Z=>k(j,Z),children:u.jsx(Is,{size:24,fill:F?"#ff4d4f":"none",color:F?"#ff4d4f":"#000000",strokeWidth:F?1:2})})]})]})]},j.id)})}),g.length>w&&u.jsxs(K5,{children:[u.jsx(Ff,{onClick:()=>y(j=>Math.max(j-1,1)),disabled:h===1,children:"Назад"}),Array.from({length:M},(j,F)=>u.jsx(Ff,{onClick:()=>y(F+1),active:h===F+1,children:F+1},F)),u.jsx(Ff,{onClick:()=>y(j=>Math.min(j+1,M)),disabled:h===M,children:"Вперед"})]})]})},qz=()=>{const[e,t]=x.useState({}),{category:n}=dw(),[r,i]=x.useState(!1),[o,a]=x.useState(!1),[l,s]=x.useState("date"),[c,d]=x.useState("desc");console.log(e,"selectedFilters");const[f,m]=x.useState([]),[p,h]=x.useState([0,0]),y=Object.values(e).some(g=>Array.isArray(g)&&g.length>0),w=()=>{y&&t({})};return u.jsxs(e8,{children:[u.jsxs(JL,{children:[u.jsxs(t8,{children:[u.jsxs(n8,{onClick:()=>i(!0),children:["Фільтр",u.jsx(r8,{children:u.jsx("use",{href:`${xn}#icon-filter`})})]}),u.jsxs(u8,{children:[u.jsxs(i8,{onClick:()=>a(g=>!g),children:["Сортування",u.jsx(Wu,{strokeWidth:.9,size:22})]}),o&&u.jsxs(d8,{children:[u.jsx(Ni,{onClick:()=>{s("name"),d("asc"),a(!1)},children:"А-Я"}),u.jsx(Ni,{onClick:()=>{s("name"),d("desc"),a(!1)},children:"Я-А"}),u.jsx(Ni,{onClick:()=>{s("price"),d("asc"),a(!1)},children:"Ціна ↑"}),u.jsx(Ni,{onClick:()=>{s("price"),d("desc"),a(!1)},children:"Ціна ↓"}),u.jsx(Ni,{onClick:()=>{s("date"),d("desc"),a(!1)},children:"Спочатку новіші"}),u.jsx(Ni,{onClick:()=>{s("date"),d("asc"),a(!1)},children:"Спочатку старіші"})]})]})]}),u.jsx(Lz,{category:n,selectedFilters:e,setSelectedFilters:t,childValues:f,priceRange:p,setPriceRange:h}),u.jsx(Gz,{priceRange:p,values:f,setValues:m,category:n,selectedFilters:e,sortType:l,setIsSortOpen:a,isSortOpen:o,setSortType:s,sortOrder:c,setSortOrder:d}),r&&u.jsx(o8,{onClick:()=>i(!1),open:r,children:u.jsxs(a8,{onClick:g=>g.stopPropagation(),open:r,children:[u.jsxs(s8,{children:[u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[u.jsx(K2,{size:20}),u.jsx("h2",{children:"Фільтри"})]}),u.jsx(Z2,{size:24,onClick:()=>i(!1),style:{cursor:"pointer"}})]}),u.jsx(Hz,{childValues:f,category:n,selectedFilters:e,setSelectedFilters:t,priceRange:p,setPriceRange:h}),u.jsxs(l8,{children:[u.jsx(m_,{onClick:w,disabled:!y,children:"Скинути обрані фільтри"}),u.jsx(c8,{onClick:()=>i(!1),children:"Показати результати"})]})]})})]})," "]})},Sx=E.div`
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
`,Yz=E.div`
  font-family: var(--main-font);
  font-size: 14px;
  color: #8c8c8c;
  margin-bottom: 15px;

  a {
    text-decoration: none;
    color: inherit;
  }
`,Xz=E.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,Kz=E.div``,Qz=E.div`
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
`;E.div`
  position: absolute;
  top: 10px;
  left: 10px;
  background: #27ae60;
  color: white;
  padding: 5px 15px;
  font-weight: bold;
  z-index: 2;
`;const Zz=E.img`
  width: 100%;
  border-radius: 4px;
  background: #f9f9f9;
   @media screen and (max-width: 300px) {
   width: 260px;
  }
`,Jz=E.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
      flex-wrap: wrap;
`,eN=E.img`
  width: 60px;
  height: 60px;
  border: 1px solid #ddd;
  cursor: pointer;
  object-fit: cover;
`,tN=E.div``,nN=E.h1`
  font-size: 28px;
  margin-bottom: 10px;
  color: #333;
  font-family: var(--second-font);
  font-weight: 500;
`,rN=E.p`
   font-size: 17px;
  margin-bottom: 10px;
  color: #151414;
    font-family: var(--second-font);

`,iN=E.div`

  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 20px;
`,oN=E.div`
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

`,aN=E.span`
  color: #27ae60;
  font-size: 17px;
`,sN=E.div`
  background: #fdfdfd;
  border: 1px solid #eee;
  padding: 25px;
  border-radius: 8px;
   @media screen and (max-width: 300px) {
   width: 260px;
  }
`,lN=E.div`
  font-family: var(--second-font);
  font-weight: 500;
  display: flex;
  align-items: baseline;
  gap: 15px;
  margin-bottom: 20px;
`,Cx=E.span`
  font-size: 32px;
  font-weight: 700;
    color: ${({$discount:e})=>e?"var(--red-color)":"#111"};
`,cN=E.span`
  font-size: 14px;
  text-decoration: line-through;
  color: #999;
`,uN=E.span`
  background:var(--red-color);
  color: white;
  font-size: 12px;
  padding: 2px 6px;
  border-radius: 6px;
`,dN=E.div`
  display: flex;
  gap: 15px;
  margin-bottom: 15px;
  font-family: var(--second-font);
  font-weight: 500;
`,fN=E.div`
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
`,pN=E.button`
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
`;E.div`
  margin-top: 30px;
`;E.p`
  font-weight: bold;
  margin-bottom: 10px;
`;E.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;E.div`
  padding: 8px 15px;
  border: 1px solid ${e=>e.active?"#27ae60":"#ddd"};
  border-radius: 4px;
  font-size: 13px;
  cursor: pointer;
  background: ${e=>e.active?"#f0fff4":"white"};
`;const Ex=E.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  /* max-width: 800px; */
   @media (min-width: 767px) {
    padding-top:18px;
  }
`,hN=E.h3`
font-family: var(--second-font);
      border-bottom: 2px solid #717171;
    border-bottom: 2px solid var(--second-color);
    color: var(--second-color);
      padding: 10px 0;
`,_x=E.div`
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
`;E.div`
  margin: 20px 0;
  font-size: 14px;
  color: #444;
`;const mN=E.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  align-items: start;

  @media (max-width: 767px) {
    display: block;
  }
`,kx=E.div`
  font-family: var(--second-font);
  font-weight: 500;
  margin-top: 20px;
`,Px=E.div`
  display: flex;
  gap: 30px;
  border-bottom: 1px solid #ccc;
`,ga=E.button`
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
`,Ox=E.div`
  font-family: var(--second-font);
  font-weight: 500;
  padding: 15px;
  background: #fff;
`,Tx=E.p`
  font-size: 20px;
  font-family: var(--second-font);
  font-weight: 300;
`,gN=E.button`
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
`,vN=E.svg`
  width: 20px;
  height: 20px;

  fill: ${({$active:e})=>e?"white":" var(--black-color)"};
`,H_=E.span`

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
`,yN=E.div`
  position: relative;
  display: inline-block;

  &:hover ${H_} {
  opacity: ${({$active:e})=>e?1:0};
    transform: translateX(-50%) translateY(0);
  }
`,G_="carousel",q_="controller",xN="navigation",bN="no-scroll",j0="portal",wN="root",Y_="toolbar",jx="zoom",Sp="loading",Cp="error",Ep="complete",SN="placeholder",CN=e=>`active-slide-${e}`,EN="fullsize",$0="flex_center",_N="no_scroll",X_="no_scroll_padding",I0="slide",K_="slide_wrapper",kN="slide_wrapper_interactive",ri="prev",ii="next",$x="swipe",Do="close",Q_="onPointerDown",Z_="onPointerMove",J_="onPointerUp",ek="onPointerLeave",tk="onPointerCancel",M0="onKeyDown",PN="onKeyUp",A0="onWheel",ON="Escape",TN="ArrowLeft",jN="ArrowRight",$N="button",km="icon",nk="contain",Ix="cover",rk="Unknown action type",ik="yarl__";function Nn(...e){return e.filter(Boolean).join(" ")}function ce(e){return`${ik}${e}`}function Tt(e){return`--${ik}${e}`}function Ws(e,t){return`${e}${t?`_${t}`:""}`}function D0(e){return t=>Ws(e,t)}function Lo(e,t){var n;return(n=e==null?void 0:e[t])!==null&&n!==void 0?n:t}function IN(e,t,n){return Lo(e,"{index} of {total}").replace(/\{index}/g,`${N0(n,t.length)+1}`).replace(/\{total}/g,`${t.length}`)}function L0(...e){return()=>{e.forEach(t=>{t()})}}function mr(e,t,n){return()=>{const r=x.useContext(n);if(!r)throw new Error(`${e} must be used within a ${t}.Provider`);return r}}function R0(){return typeof window<"u"}function F0(e,t=0){const n=10**t;return Math.round((e+Number.EPSILON)*n)/n}function Qo(e){return e.type===void 0||e.type==="image"}function z0(e,t){return e.imageFit===Ix||e.imageFit!==nk&&t===Ix}function Ld(e){return typeof e=="string"?Number.parseInt(e,10):e}function uu(e){if(typeof e=="number")return{pixel:e};if(typeof e=="string"){const t=Ld(e);return e.endsWith("%")?{percent:t}:{pixel:t}}return{pixel:0}}function MN(e,t){const n=uu(t),r=n.percent!==void 0?e.width/100*n.percent:n.pixel;return{width:Math.max(e.width-2*r,0),height:Math.max(e.height-2*r,0)}}function AN(){return(R0()?window==null?void 0:window.devicePixelRatio:void 0)||1}function N0(e,t){return t>0?(e%t+t)%t:0}function ok(e){return e.length>0}function ak(e,t){return e[N0(t,e.length)]}function Pm(e,t){return ok(e)?ak(e,t):void 0}function DN(e){return Qo(e)?e.src:void 0}function LN(e,t,n){if(!n)return e;const{buttons:r,...i}=e,o=r.findIndex(l=>l===t),a=x.isValidElement(n)?x.cloneElement(n,{key:t},null):n;if(o>=0){const l=[...r];return l.splice(o,1,a),{buttons:l,...i}}return{buttons:[a,...r],...i}}function RN(e,t,n=0){return Math.min(e.preload,Math.max(e.finite?t.length-1:Math.floor(t.length/2),n))}const FN=Number(x.version.split(".")[0])>=19;function zN(e){return{inert:FN?e:e?"":void 0}}function NN(e){e.scrollTop}const Om={open:!1,close:()=>{},index:0,slides:[],render:{},plugins:[],toolbar:{buttons:[Do]},labels:{},animation:{fade:250,swipe:500,easing:{fade:"ease",swipe:"ease-out",navigation:"ease-in-out"}},carousel:{finite:!1,preload:2,padding:"16px",spacing:"30%",imageFit:nk,imageProps:{}},controller:{ref:null,focus:!0,aria:!1,touchAction:"none",closeOnPullUp:!1,closeOnPullDown:!1,closeOnBackdropClick:!1,preventDefaultWheelX:!0,preventDefaultWheelY:!1,disableSwipeNavigation:!1},portal:{},noScroll:{disabled:!1},on:{},styles:{},className:""};function Yr(e,t){return{name:e,component:t}}function Ke(e,t){return{module:e,children:t}}function sk(e,t,n){return e.module.name===t?n(e):e.children?[Ke(e.module,e.children.flatMap(r=>{var i;return(i=sk(r,t,n))!==null&&i!==void 0?i:[]}))]:[e]}function Wi(e,t,n){return e.flatMap(r=>{var i;return(i=sk(r,t,n))!==null&&i!==void 0?i:[]})}function BN(e,t=[],n=[]){let r=e;const i=p=>{const h=[...r];for(;h.length>0;){const y=h.pop();if((y==null?void 0:y.module.name)===p)return!0;y!=null&&y.children&&h.push(...y.children)}return!1},o=(p,h)=>{if(p===""){r=[Ke(h,r)];return}r=Wi(r,p,y=>[Ke(h,[y])])},a=(p,h)=>{r=Wi(r,p,y=>[Ke(y.module,[Ke(h,y.children)])])},l=(p,h,y)=>{r=Wi(r,p,w=>{var g;return[Ke(w.module,[...y?[Ke(h)]:[],...(g=w.children)!==null&&g!==void 0?g:[],...y?[]:[Ke(h)]])]})},s=(p,h,y)=>{r=Wi(r,p,w=>[...y?[Ke(h)]:[],w,...y?[]:[Ke(h)]])},c=p=>{a(q_,p)},d=(p,h)=>{r=Wi(r,p,y=>[Ke(h,y.children)])},f=p=>{r=Wi(r,p,h=>h.children)},m=p=>{n.push(p)};return t.forEach(p=>{p({contains:i,addParent:o,append:a,addChild:l,addSibling:s,addModule:c,replace:d,remove:f,augment:m})}),{config:r,augmentation:p=>n.reduce((h,y)=>y(h),p)}}const lk=x.createContext(null),ck=mr("useA11yContext","A11yContext",lk);function VN({children:e}){const[t,n]=x.useState(!1),[r,i]=x.useState(!1),o=x.useMemo(()=>({focusWithin:t,trackFocusWithin:(l,s)=>{const c=d=>f=>{var m;f.currentTarget.contains(f.relatedTarget)||n(d),(m=d?l:s)===null||m===void 0||m(f)};return{onFocus:c(!0),onBlur:c(!1)}},autoPlaying:r,setAutoPlaying:i}),[t,r]);return x.createElement(lk.Provider,{value:o},e)}const uk=x.createContext(null),Rd=mr("useDocument","DocumentContext",uk);function WN({nodeRef:e,children:t}){const n=x.useMemo(()=>{const r=o=>{var a;return((a=o||e.current)===null||a===void 0?void 0:a.ownerDocument)||document};return{getOwnerDocument:r,getOwnerWindow:o=>{var a;return((a=r(o))===null||a===void 0?void 0:a.defaultView)||window}}},[e]);return x.createElement(uk.Provider,{value:n},t)}const dk=x.createContext(null),Fd=mr("useEvents","EventsContext",dk);function UN({children:e}){const[t]=x.useState({});x.useEffect(()=>()=>{Object.keys(t).forEach(r=>delete t[r])},[t]);const n=x.useMemo(()=>{const r=(a,l)=>{var s;(s=t[a])===null||s===void 0||s.splice(0,t[a].length,...t[a].filter(c=>c!==l))};return{publish:(...[a,l])=>{var s;(s=t[a])===null||s===void 0||s.forEach(c=>c(l))},subscribe:(a,l)=>(t[a]||(t[a]=[]),t[a].push(l),()=>r(a,l)),unsubscribe:r}},[t]);return x.createElement(dk.Provider,{value:n},e)}const fk=x.createContext(null),an=mr("useLightboxProps","LightboxPropsContext",fk);function HN({children:e,...t}){return x.createElement(fk.Provider,{value:t},e)}const pk=x.createContext(null),Xr=mr("useLightboxState","LightboxStateContext",pk),hk=x.createContext(null),GN=mr("useLightboxDispatch","LightboxDispatchContext",hk);function qN(e,t){switch(t.type){case"swipe":{const{slides:n}=e,r=(t==null?void 0:t.increment)||0,i=e.globalIndex+r,o=N0(i,n.length),a=Pm(n,o),l=r||t.duration!==void 0?{increment:r,duration:t.duration,easing:t.easing}:void 0;return{slides:n,currentIndex:o,globalIndex:i,currentSlide:a,animation:l}}case"update":return t.slides!==e.slides||t.index!==e.currentIndex?{slides:t.slides,currentIndex:t.index,globalIndex:t.index,currentSlide:Pm(t.slides,t.index)}:e;default:throw new Error(rk)}}function YN({slides:e,index:t,children:n}){const[r,i]=x.useReducer(qN,{slides:e,currentIndex:t,globalIndex:t,currentSlide:Pm(e,t)}),[o,a]=x.useState(e),[l,s]=x.useState(t);(e!==o||t!==l)&&(a(e),s(t),i({type:"update",slides:e,index:t}));const c=x.useMemo(()=>({...r,state:r,dispatch:i}),[r,i]);return x.createElement(hk.Provider,{value:i},x.createElement(pk.Provider,{value:c},n))}const mk=x.createContext(null),zd=mr("useTimeouts","TimeoutsContext",mk);function XN({children:e}){const[t]=x.useState([]);x.useEffect(()=>()=>{t.forEach(r=>window.clearTimeout(r)),t.splice(0,t.length)},[t]);const n=x.useMemo(()=>{const r=a=>{t.splice(0,t.length,...t.filter(l=>l!==a))};return{setTimeout:(a,l)=>{const s=window.setTimeout(()=>{r(s),a()},l);return t.push(s),s},clearTimeout:a=>{a!==void 0&&(r(a),window.clearTimeout(a))}}},[t]);return x.createElement(mk.Provider,{value:n},e)}const B0=x.forwardRef(function({label:t,className:n,icon:r,renderIcon:i,onClick:o,style:a,...l},s){const{styles:c,labels:d}=an(),f=Lo(d,t);return x.createElement("button",{ref:s,type:"button",title:f,"aria-label":f,className:Nn(ce($N),n),onClick:o,style:{...a,...c.button},...l},i?i():x.createElement(r,{className:ce(km),style:c.icon}))});function KN(e,t){const n=r=>x.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24","aria-hidden":"true",focusable:"false",...r},t);return n.displayName=e,n}function Ii(e,t){return KN(e,x.createElement("g",{fill:"currentColor"},x.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),t))}const QN=Ii("Close",x.createElement("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"})),ZN=Ii("Previous",x.createElement("path",{d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"})),JN=Ii("Next",x.createElement("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"})),e7=Ii("Loading",x.createElement(x.Fragment,null,Array.from({length:8}).map((e,t,n)=>x.createElement("line",{key:t,x1:"12",y1:"6.5",x2:"12",y2:"1.8",strokeLinecap:"round",strokeWidth:"2.6",stroke:"currentColor",strokeOpacity:1/n.length*(t+1),transform:`rotate(${360/n.length*t}, 12, 12)`})))),t7=Ii("Error",x.createElement("path",{d:"M21.9,21.9l-8.49-8.49l0,0L3.59,3.59l0,0L2.1,2.1L0.69,3.51L3,5.83V19c0,1.1,0.9,2,2,2h13.17l2.31,2.31L21.9,21.9z M5,18 l3.5-4.5l2.5,3.01L12.17,15l3,3H5z M21,18.17L5.83,3H19c1.1,0,2,0.9,2,2V18.17z"})),Bn=R0()?x.useLayoutEffect:x.useEffect;function V0(){const[e,t]=x.useState(!1);return x.useEffect(()=>{var n,r;const i=(n=window.matchMedia)===null||n===void 0?void 0:n.call(window,"(prefers-reduced-motion: reduce)");t(i==null?void 0:i.matches);const o=a=>t(a.matches);return(r=i==null?void 0:i.addEventListener)===null||r===void 0||r.call(i,"change",o),()=>{var a;return(a=i==null?void 0:i.removeEventListener)===null||a===void 0?void 0:a.call(i,"change",o)}},[]),e}function n7(e){let t=0,n=0,r=0;const o=window.getComputedStyle(e).transform.match(/matrix.*\((.+)\)/);if(o){const a=o[1].split(",").map(Ld);a.length===6?(t=a[4],n=a[5]):a.length===16&&(t=a[12],n=a[13],r=a[14])}return{x:t,y:n,z:r}}function Mx(e,t){const n=x.useRef(void 0),r=x.useRef(void 0),i=V0();return Bn(()=>{var o,a,l;if(e.current&&n.current!==void 0&&!i){const{keyframes:s,duration:c,easing:d,onfinish:f}=t(n.current,e.current.getBoundingClientRect(),n7(e.current))||{};if(s&&c){(o=r.current)===null||o===void 0||o.cancel(),r.current=void 0;try{r.current=(l=(a=e.current).animate)===null||l===void 0?void 0:l.call(a,s,{duration:c,easing:d})}catch(m){console.error(m)}r.current&&(r.current.onfinish=()=>{r.current=void 0,f==null||f()})}}n.current=void 0}),{prepareAnimation:o=>{n.current=o},isAnimationPlaying:()=>{var o;return((o=r.current)===null||o===void 0?void 0:o.playState)==="running"}}}function gk(){const e=x.useRef(null),t=x.useRef(void 0),[n,r]=x.useState();return{setContainerRef:x.useCallback(o=>{e.current=o,t.current&&(t.current.disconnect(),t.current=void 0);const a=()=>{if(o){const l=window.getComputedStyle(o),s=c=>parseFloat(c)||0;r({width:Math.round(o.clientWidth-s(l.paddingLeft)-s(l.paddingRight)),height:Math.round(o.clientHeight-s(l.paddingTop)-s(l.paddingBottom))})}else r(void 0)};a(),o&&typeof ResizeObserver<"u"&&(t.current=new ResizeObserver(a),t.current.observe(o))},[]),containerRef:e,containerRect:n}}function lc(){const e=x.useRef(void 0),{setTimeout:t,clearTimeout:n}=zd();return x.useCallback((r,i)=>{n(e.current),e.current=t(r,i>0?i:0)},[t,n])}function ve(e){const t=x.useRef(e);return Bn(()=>{t.current=e}),x.useCallback((...n)=>{var r;return(r=t.current)===null||r===void 0?void 0:r.call(t,...n)},[])}function Ax(e,t){typeof e=="function"?e(t):e&&(e.current=t)}function Tm(e,t){return x.useMemo(()=>e==null&&t==null?null:n=>{Ax(e,n),Ax(t,n)},[e,t])}function r7(e,t=!1){const n=x.useRef(!1);Bn(()=>{t&&n.current&&(n.current=!1,e())},[t,e]);const r=x.useCallback(()=>{n.current=!0},[]),i=x.useCallback(()=>{n.current=!1},[]);return{onFocus:r,onBlur:i}}function W0(){const[e,t]=x.useState(!1);return Bn(()=>{t(window.getComputedStyle(window.document.documentElement).direction==="rtl")},[]),e}function i7(){const[e]=x.useState({}),t=x.useCallback((i,o)=>{var a;(a=e[i])===null||a===void 0||a.forEach(l=>{o.isPropagationStopped()||l(o)})},[e]),n=x.useMemo(()=>({onPointerDown:i=>t(Q_,i),onPointerMove:i=>t(Z_,i),onPointerUp:i=>t(J_,i),onPointerLeave:i=>t(ek,i),onPointerCancel:i=>t(tk,i),onKeyDown:i=>t(M0,i),onKeyUp:i=>t(PN,i),onWheel:i=>t(A0,i)}),[t]),r=x.useCallback((i,o)=>(e[i]||(e[i]=[]),e[i].unshift(o),()=>{const a=e[i];a&&a.splice(0,a.length,...a.filter(l=>l!==o))}),[e]);return{registerSensors:n,subscribeSensors:r}}function Dx(e,t){const n=x.useRef(0),r=lc(),i=ve((...o)=>{n.current=Date.now(),e(o)});return x.useCallback((...o)=>{r(()=>{i(o)},t-(Date.now()-n.current))},[t,i,r])}const _p=D0("slide"),kp=D0("slide_image");function du({slide:e,offset:t,render:n,rect:r,imageFit:i,imageProps:o,onClick:a,onLoad:l,onError:s,style:c}){var d,f,m,p,h,y,w,g;const[v,b]=x.useState(Sp),{publish:C}=Fd(),{setTimeout:S}=zd(),P=x.useRef(null);x.useEffect(()=>{t===0&&C(CN(v))},[t,v,C]);const k=ve(L=>{("decode"in L?L.decode():Promise.resolve()).catch(()=>{}).then(()=>{L.parentNode&&(b(Ep),S(()=>{l==null||l(L)},0))})}),_=x.useCallback(L=>{P.current=L,L!=null&&L.complete&&k(L)},[k]),T=x.useCallback(L=>{k(L.currentTarget)},[k]),$=ve(()=>{b(Cp),s==null||s()}),I=z0(e,i),M=(L,V)=>Number.isFinite(L)?L:V,j=M(Math.max(...((f=(d=e.srcSet)===null||d===void 0?void 0:d.map(L=>L.width))!==null&&f!==void 0?f:[]).concat(e.width?[e.width]:[]).filter(Boolean)),((m=P.current)===null||m===void 0?void 0:m.naturalWidth)||0),F=M(Math.max(...((h=(p=e.srcSet)===null||p===void 0?void 0:p.map(L=>L.height))!==null&&h!==void 0?h:[]).concat(e.height?[e.height]:[]).filter(Boolean)),((y=P.current)===null||y===void 0?void 0:y.naturalHeight)||0),D=j&&F?{maxWidth:`min(${j}px, 100%)`,maxHeight:`min(${F}px, 100%)`}:{maxWidth:"100%",maxHeight:"100%"},z=(w=e.srcSet)===null||w===void 0?void 0:w.slice().sort((L,V)=>L.width-V.width).map(L=>`${L.src} ${L.width}w`).join(", "),R=()=>r&&!I&&e.width&&e.height?r.height/e.height*e.width:Number.MAX_VALUE,O=z&&r&&R0()?`${Math.round(Math.min(R(),r.width))}px`:void 0,{style:A,className:N,...B}=(typeof o=="function"?o(e):o)||{};return x.createElement(x.Fragment,null,x.createElement("img",{ref:_,onLoad:T,onError:$,onClick:a,draggable:!1,className:Nn(ce(kp()),I&&ce(kp("cover")),v!==Ep&&ce(kp("loading")),N),style:{...D,...c,...A},...B,alt:(g=e.alt)!==null&&g!==void 0?g:"",sizes:O,srcSet:z,src:e.src}),v!==Ep&&x.createElement("div",{className:ce(_p(SN))},v===Sp&&(n!=null&&n.iconLoading?n.iconLoading():x.createElement(e7,{className:Nn(ce(km),ce(_p(Sp)))})),v===Cp&&(n!=null&&n.iconError?n.iconError():x.createElement(t7,{className:Nn(ce(km),ce(_p(Cp)))}))))}const o7=x.forwardRef(function({className:t,children:n,onFocus:r,onBlur:i,...o},a){const l=x.useRef(null),{trackFocusWithin:s}=ck();return x.createElement(WN,{nodeRef:l},x.createElement("div",{ref:Tm(a,l),className:Nn(ce("root"),t),...s(r,i),...o},n))});var ft;(function(e){e[e.NONE=0]="NONE",e[e.SWIPE=1]="SWIPE",e[e.PULL=2]="PULL",e[e.ANIMATION=3]="ANIMATION"})(ft||(ft={}));function vk(e,t,n,r,i){x.useEffect(()=>i?()=>{}:L0(e(Q_,t),e(Z_,n),e(J_,r),e(ek,r),e(tk,r)),[e,t,n,r,i])}var un;(function(e){e[e.NONE=0]="NONE",e[e.SWIPE=1]="SWIPE",e[e.PULL=2]="PULL"})(un||(un={}));const Pp=30;function a7({disableSwipeNavigation:e,closeOnBackdropClick:t},n,r,i,o,a,l,s,c,d,f,m,p,h,y,w){const g=x.useRef(0),v=x.useRef([]),b=x.useRef(void 0),C=x.useRef(0),S=x.useRef(un.NONE),P=x.useCallback(j=>{b.current===j.pointerId&&(b.current=void 0,S.current=un.NONE);const F=v.current;F.splice(0,F.length,...F.filter(D=>D.pointerId!==j.pointerId))},[]),k=x.useCallback(j=>{P(j),j.persist(),v.current.push(j)},[P]),_=x.useCallback(j=>v.current.find(({pointerId:F})=>j.pointerId===F),[]),T=ve(j=>{k(j)}),$=(j,F)=>f&&j>F||d&&j<-F,I=ve(j=>{const F=_(j);if(F)if(b.current===j.pointerId){const D=Date.now()-C.current,z=g.current;S.current===un.SWIPE?Math.abs(z)>.3*i||Math.abs(z)>5&&D<o?s(z,D):c(z):S.current===un.PULL&&($(z,2*Pp)?h(z,D):y(z)),g.current=0,S.current=un.NONE}else{const{target:D}=j;t&&D instanceof HTMLElement&&D===F.target&&(D.classList.contains(ce(I0))||D.classList.contains(ce(K_)))&&w()}P(j)}),M=ve(j=>{const F=_(j);if(F){const D=b.current===j.pointerId;if(j.buttons===0){D&&g.current!==0?I(j):P(F);return}const z=j.clientX-F.clientX,R=j.clientY-F.clientY;if(b.current===void 0){const O=A=>{k(j),b.current=j.pointerId,C.current=Date.now(),S.current=A};Math.abs(z)>Math.abs(R)&&Math.abs(z)>Pp&&r(z)?e||(O(un.SWIPE),a()):Math.abs(R)>Math.abs(z)&&$(R,Pp)&&(O(un.PULL),m())}else D&&(S.current===un.SWIPE?(g.current=z,l(z)):S.current===un.PULL&&(g.current=R,p(R)))}});vk(n,T,M,I)}function s7({preventDefaultWheelX:e,preventDefaultWheelY:t}){const n=x.useRef(null),r=ve(i=>{const o=Math.abs(i.deltaX)>Math.abs(i.deltaY);(o&&e||!o&&t||i.ctrlKey)&&i.preventDefault()});return x.useCallback(i=>{var o;i?i.addEventListener("wheel",r,{passive:!1}):(o=n.current)===null||o===void 0||o.removeEventListener("wheel",r),n.current=i},[r])}function l7(e,t,n,r,i,o,a,l,s){const c=x.useRef(0),d=x.useRef(0),f=x.useRef(void 0),m=x.useRef(void 0),p=x.useRef(0),h=x.useRef(void 0),y=x.useRef(0),{setTimeout:w,clearTimeout:g}=zd(),v=x.useCallback(()=>{f.current&&(g(f.current),f.current=void 0)},[g]),b=x.useCallback(()=>{m.current&&(g(m.current),m.current=void 0)},[g]),C=ve(()=>{e!==ft.SWIPE&&(c.current=0,y.current=0,v(),b())});x.useEffect(C,[e,C]);const S=ve(k=>{m.current=void 0,c.current===k&&s(c.current)}),P=ve(k=>{if(k.ctrlKey||Math.abs(k.deltaY)>Math.abs(k.deltaX))return;const _=T=>{p.current=T,g(h.current),h.current=T>0?w(()=>{p.current=0,h.current=void 0},300):void 0};if(e===ft.NONE){if(Math.abs(k.deltaX)<=1.2*Math.abs(p.current)){_(k.deltaX);return}if(!n(-k.deltaX))return;if(d.current+=k.deltaX,v(),Math.abs(d.current)>30)d.current=0,_(0),y.current=Date.now(),o();else{const T=d.current;f.current=w(()=>{f.current=void 0,T===d.current&&(d.current=0)},i)}}else if(e===ft.SWIPE){let T=c.current-k.deltaX;if(T=Math.min(Math.abs(T),r)*Math.sign(T),c.current=T,a(T),b(),Math.abs(T)>.2*r){_(k.deltaX),l(T,Date.now()-y.current);return}m.current=w(()=>S(T),2*i)}else _(k.deltaX)});x.useEffect(()=>t(A0,P),[t,P])}const Lx=D0("container"),yk=x.createContext(null),gr=mr("useController","ControllerContext",yk);function c7({children:e,...t}){var n;const{carousel:r,animation:i,controller:o,on:a,styles:l,render:s}=t,{closeOnPullUp:c,closeOnPullDown:d,preventDefaultWheelX:f,preventDefaultWheelY:m}=o,[p,h]=x.useState(),y=Xr(),w=GN(),[g,v]=x.useState(ft.NONE),b=x.useRef(0),C=x.useRef(0),S=x.useRef(1),{registerSensors:P,subscribeSensors:k}=i7(),{subscribe:_,publish:T}=Fd(),$=lc(),I=lc(),M=lc(),{containerRef:j,setContainerRef:F,containerRect:D}=gk(),z=Tm(s7({preventDefaultWheelX:f,preventDefaultWheelY:m}),F),R=x.useRef(null),O=Tm(R,void 0),{getOwnerDocument:A}=Rd(),N=W0(),B=Y=>(N?-1:1)*(typeof Y=="number"?Y:1),L=ve(()=>{var Y;return(Y=j.current)===null||Y===void 0?void 0:Y.focus()}),V=ve(()=>t),W=ve(()=>y),G=x.useCallback(Y=>T(ri,Y),[T]),U=x.useCallback(Y=>T(ii,Y),[T]),K=x.useCallback(()=>T(Do),[T]),Z=Y=>!(r.finite&&(B(Y)>0&&y.currentIndex===0||B(Y)<0&&y.currentIndex===y.slides.length-1)),se=Y=>{var Ee;b.current=Y,(Ee=j.current)===null||Ee===void 0||Ee.style.setProperty(Tt("swipe_offset"),`${Math.round(Y)}px`)},ie=Y=>{var Ee,gt;C.current=Y,S.current=(()=>{const ea=(()=>d&&Y>0?Y:c&&Y<0?-Y:0)();return Math.min(Math.max(F0(1-ea/60*(1-.5),2),.5),1)})(),(Ee=j.current)===null||Ee===void 0||Ee.style.setProperty(Tt("pull_offset"),`${Math.round(Y)}px`),(gt=j.current)===null||gt===void 0||gt.style.setProperty(Tt("pull_opacity"),`${S.current}`)},{prepareAnimation:Pe}=Mx(R,(Y,Ee,gt)=>{if(R.current&&D)return{keyframes:[{transform:`translate(0, ${Y.rect.y-Ee.y+gt.y}px)`,opacity:Y.opacity},{transform:"translate(0, 0)",opacity:1}],duration:Y.duration,easing:i.easing.fade}}),qe=(Y,Ee)=>{if(c||d){ie(Y);let gt=0;R.current&&(gt=i.fade*(Ee?2:1),Pe({rect:R.current.getBoundingClientRect(),opacity:S.current,duration:gt})),M(()=>{ie(0),v(ft.NONE)},gt),v(ft.ANIMATION),Ee||K()}},{prepareAnimation:Ye,isAnimationPlaying:Mi}=Mx(R,(Y,Ee,gt)=>{var Cn;if(R.current&&D&&(!((Cn=y.animation)===null||Cn===void 0)&&Cn.duration)){const Qt=uu(r.spacing),ea=(Qt.percent?Qt.percent*D.width/100:Qt.pixel)||0;return{keyframes:[{transform:`translate(${B(y.globalIndex-Y.index)*(D.width+ea)+Y.rect.x-Ee.x+gt.x}px, 0)`},{transform:"translate(0, 0)"}],duration:y.animation.duration,easing:y.animation.easing}}}),Pt=ve(Y=>{var Ee,gt;const Cn=Y.offset||0,Qt=Cn?i.swipe:(Ee=i.navigation)!==null&&Ee!==void 0?Ee:i.swipe,ea=!Cn&&!Mi()?i.easing.navigation:i.easing.swipe;let{direction:Hs}=Y;const Gs=(gt=Y.count)!==null&&gt!==void 0?gt:1;let Qd=ft.ANIMATION,En=Qt*Gs;if(!Hs){const ta=D==null?void 0:D.width,ov=Y.duration||0,Jd=ta?Qt/ta*Math.abs(Cn):Qt;Gs!==0?(ov<Jd?En=En/Jd*Math.max(ov,Jd/5):ta&&(En=Qt/ta*(ta-Math.abs(Cn))),Hs=B(Cn)>0?ri:ii):En=Qt/2}let Zd=0;Hs===ri?Z(B(1))?Zd=-Gs:(Qd=ft.NONE,En=Qt):Hs===ii&&(Z(B(-1))?Zd=Gs:(Qd=ft.NONE,En=Qt)),En=Math.round(En),I(()=>{se(0),v(ft.NONE)},En),R.current&&Ye({rect:R.current.getBoundingClientRect(),index:y.globalIndex}),v(Qd),T($x,{type:"swipe",increment:Zd,duration:En,easing:ea})});x.useEffect(()=>{var Y,Ee;!((Y=y.animation)===null||Y===void 0)&&Y.increment&&(!((Ee=y.animation)===null||Ee===void 0)&&Ee.duration)&&$(()=>w({type:"swipe",increment:0}),y.animation.duration)},[y.animation,w,$]);const Zo=[k,Z,(D==null?void 0:D.width)||0,i.swipe,()=>v(ft.SWIPE),Y=>se(Y),(Y,Ee)=>Pt({offset:Y,duration:Ee,count:1}),Y=>Pt({offset:Y,count:0})],Us=[()=>{d&&v(ft.PULL)},Y=>ie(Y),Y=>qe(Y),Y=>qe(Y,!0)];a7(o,...Zo,c,d,...Us,K),l7(g,...Zo);const Jo=ve(()=>{o.focus&&A().querySelector(`.${ce(j0)} .${ce(Lx())}`)&&L()});x.useEffect(Jo,[Jo]);const iv=ve(()=>{var Y;(Y=a.view)===null||Y===void 0||Y.call(a,{index:y.currentIndex})});x.useEffect(iv,[y.globalIndex,iv]),x.useEffect(()=>L0(_(ri,Y=>Pt({direction:ri,...Y})),_(ii,Y=>Pt({direction:ii,...Y})),_($x,Y=>w(Y))),[_,Pt,w]);const kP=x.useMemo(()=>({prev:G,next:U,close:K,focus:L,slideRect:D?MN(D,r.padding):{width:0,height:0},containerRect:D||{width:0,height:0},subscribeSensors:k,containerRef:j,setCarouselRef:O,toolbarWidth:p,setToolbarWidth:h}),[G,U,K,L,k,D,j,O,p,h,r.padding]);return x.useImperativeHandle(o.ref,()=>({prev:G,next:U,close:K,focus:L,getLightboxProps:V,getLightboxState:W}),[G,U,K,L,V,W]),x.createElement("div",{ref:z,className:Nn(ce(Lx()),ce($0)),style:{...g===ft.SWIPE?{[Tt("swipe_offset")]:`${Math.round(b.current)}px`}:null,...g===ft.PULL?{[Tt("pull_offset")]:`${Math.round(C.current)}px`,[Tt("pull_opacity")]:`${S.current}`}:null,...o.touchAction!=="none"?{[Tt("controller_touch_action")]:o.touchAction}:null,...l.container},tabIndex:-1,...P},D&&x.createElement(yk.Provider,{value:kP},e,(n=s.controls)===null||n===void 0?void 0:n.call(s)))}const u7=Yr(q_,c7);function Kr(e){return Ws(G_,e)}function Rx(e){return Ws(I0,e)}function d7({slide:e,offset:t}){const n=x.useRef(null),{currentIndex:r,slides:i}=Xr(),{slideRect:o,focus:a}=gr(),{render:l,carousel:{imageFit:s,imageProps:c},on:{click:d},styles:{slide:f},labels:m}=an(),{getOwnerDocument:p}=Rd(),h=t!==0;x.useEffect(()=>{var w;h&&(!((w=n.current)===null||w===void 0)&&w.contains(p().activeElement))&&a()},[h,a,p]);const y=()=>{var w,g,v,b;let C=(w=l.slide)===null||w===void 0?void 0:w.call(l,{slide:e,offset:t,rect:o});return!C&&Qo(e)&&(C=x.createElement(du,{slide:e,offset:t,render:l,rect:o,imageFit:s,imageProps:c,onClick:h?void 0:()=>d==null?void 0:d({index:r})})),C?x.createElement(x.Fragment,null,(g=l.slideHeader)===null||g===void 0?void 0:g.call(l,{slide:e}),((v=l.slideContainer)!==null&&v!==void 0?v:({children:S})=>S)({slide:e,children:C}),(b=l.slideFooter)===null||b===void 0?void 0:b.call(l,{slide:e})):null};return x.createElement("div",{ref:n,className:Nn(ce(Rx()),!h&&ce(Rx("current")),ce($0)),...zN(h),style:f,role:"group","aria-roledescription":Lo(m,"Slide"),"aria-label":IN(m,i,r+t)},y())}function f7(){const e=an().styles.slide;return x.createElement("div",{className:ce(I0),style:e})}function p7({carousel:e,labels:t}){const{slides:n,currentIndex:r,globalIndex:i}=Xr(),{setCarouselRef:o}=gr(),{autoPlaying:a,focusWithin:l}=ck(),s=uu(e.spacing),c=uu(e.padding),d=RN(e,n,1),f=[];if(ok(n))for(let m=r-d;m<=r+d;m+=1){const p=ak(n,m),h=i-r+m,y=e.finite&&(m<0||m>n.length-1);f.push(y?{key:h}:{key:[`${h}`,DN(p)].filter(Boolean).join("|"),offset:m-r,slide:p})}return x.createElement("div",{ref:o,className:Nn(ce(Kr()),f.length>0&&ce(Kr("with_slides"))),style:{[`${Tt(Kr("slides_count"))}`]:f.length,[`${Tt(Kr("spacing_px"))}`]:s.pixel||0,[`${Tt(Kr("spacing_percent"))}`]:s.percent||0,[`${Tt(Kr("padding_px"))}`]:c.pixel||0,[`${Tt(Kr("padding_percent"))}`]:c.percent||0},role:"region","aria-live":a&&!l?"off":"polite","aria-roledescription":Lo(t,"Carousel"),"aria-label":Lo(t,"Photo gallery")},f.map(({key:m,slide:p,offset:h})=>p?x.createElement(d7,{key:m,slide:p,offset:h}):x.createElement(f7,{key:m})))}const h7=Yr(G_,p7);function xk(){const{carousel:e}=an(),{slides:t,currentIndex:n}=Xr(),r=t.length===0||e.finite&&n===0,i=t.length===0||e.finite&&n===t.length-1;return{prevDisabled:r,nextDisabled:i}}function m7(e){var t;const n=W0(),{publish:r}=Fd(),{animation:i}=an(),{prevDisabled:o,nextDisabled:a}=xk(),l=((t=i.navigation)!==null&&t!==void 0?t:i.swipe)/2,s=Dx(()=>r(ri),l),c=Dx(()=>r(ii),l),d=ve(f=>{switch(f.key){case ON:r(Do);break;case TN:(n?a:o)||(n?c:s)();break;case jN:(n?o:a)||(n?s:c)();break}});x.useEffect(()=>e(M0,d),[e,d])}function Fx({label:e,icon:t,renderIcon:n,action:r,onClick:i,disabled:o,style:a}){return x.createElement(B0,{label:e,icon:t,renderIcon:n,className:ce(`navigation_${r}`),disabled:o,onClick:i,style:a,...r7(gr().focus,o)})}function g7({render:{buttonPrev:e,buttonNext:t,iconPrev:n,iconNext:r},styles:i}){const{prev:o,next:a,subscribeSensors:l}=gr(),{prevDisabled:s,nextDisabled:c}=xk();return m7(l),x.createElement(x.Fragment,null,e?e():x.createElement(Fx,{label:"Previous",action:ri,icon:ZN,renderIcon:n,style:i.navigationPrev,disabled:s,onClick:o}),t?t():x.createElement(Fx,{label:"Next",action:ii,icon:JN,renderIcon:r,style:i.navigationNext,disabled:c,onClick:a}))}const v7=Yr(xN,g7),zx=ce(_N),y7=ce(X_);function x7(e){return"style"in e}function Nx(e,t,n){const r=window.getComputedStyle(e),i=n?"padding-left":"padding-right",o=n?r.paddingLeft:r.paddingRight,a=e.style.getPropertyValue(i);return e.style.setProperty(i,`${(Ld(o)||0)+t}px`),()=>{a?e.style.setProperty(i,a):e.style.removeProperty(i)}}function b7({noScroll:{disabled:e},children:t}){const n=W0(),{getOwnerDocument:r,getOwnerWindow:i}=Rd();return x.useEffect(()=>{if(e)return()=>{};const o=[],a=i(),{body:l,documentElement:s}=r(),c=Math.round(a.innerWidth-s.clientWidth);if(c>0){o.push(Nx(l,c,n));const d=l.getElementsByTagName("*");for(let f=0;f<d.length;f+=1){const m=d[f];x7(m)&&a.getComputedStyle(m).getPropertyValue("position")==="fixed"&&!m.classList.contains(y7)&&o.push(Nx(m,c,n))}}return l.classList.add(zx),()=>{l.classList.remove(zx),o.forEach(d=>d())}},[n,e,r,i]),x.createElement(x.Fragment,null,t)}const w7=Yr(bN,b7);function Bx(e){return Ws(j0,e)}function Vx(e,t,n){const r=e.getAttribute(t);return e.setAttribute(t,n),()=>{r?e.setAttribute(t,r):e.removeAttribute(t)}}function S7({children:e,animation:t,styles:n,className:r,on:i,portal:o,close:a,labels:l}){const[s,c]=x.useState(!1),[d,f]=x.useState(!1),m=x.useRef([]),p=x.useRef(null),{setTimeout:h}=zd(),{subscribe:y}=Fd(),g=V0()?0:t.fade;x.useEffect(()=>(c(!0),()=>{c(!1),f(!1)}),[]);const v=ve(()=>{m.current.forEach(P=>P()),m.current=[]}),b=ve(()=>{var P;f(!1),v(),(P=i.exiting)===null||P===void 0||P.call(i),h(()=>{var k;(k=i.exited)===null||k===void 0||k.call(i),a()},g)});x.useEffect(()=>y(Do,b),[y,b]);const C=ve(P=>{var k,_,T;NN(P),f(!0),(k=i.entering)===null||k===void 0||k.call(i);const $=(T=(_=P.parentNode)===null||_===void 0?void 0:_.children)!==null&&T!==void 0?T:[];for(let I=0;I<$.length;I+=1){const M=$[I];["TEMPLATE","SCRIPT","STYLE"].indexOf(M.tagName)===-1&&M!==P&&(m.current.push(Vx(M,"inert","")),m.current.push(Vx(M,"aria-hidden","true")))}m.current.push(()=>{var I,M;(M=(I=p.current)===null||I===void 0?void 0:I.focus)===null||M===void 0||M.call(I)}),h(()=>{var I;(I=i.entered)===null||I===void 0||I.call(i)},g)}),S=x.useCallback(P=>{P?C(P):v()},[C,v]);return s?Ru.createPortal(x.createElement(o7,{ref:S,className:Nn(r,ce(Bx()),ce(X_),d&&ce(Bx("open"))),"aria-modal":!0,role:"dialog","aria-label":Lo(l,"Lightbox"),style:{...t.fade!==Om.animation.fade?{[Tt("fade_animation_duration")]:`${g}ms`}:null,...t.easing.fade!==Om.animation.easing.fade?{[Tt("fade_animation_timing_function")]:t.easing.fade}:null,...n.root},onFocus:P=>{p.current||(p.current=P.relatedTarget)}},e),o.root||document.body):null}const C7=Yr(j0,S7);function E7({children:e}){return x.createElement(x.Fragment,null,e)}const _7=Yr(wN,E7);function k7(e){return Ws(Y_,e)}function P7({toolbar:{buttons:e},render:{buttonClose:t,iconClose:n},styles:r}){const{close:i,setToolbarWidth:o}=gr(),{setContainerRef:a,containerRect:l}=gk();Bn(()=>{o(l==null?void 0:l.width)},[o,l==null?void 0:l.width]);const s=()=>t?t():x.createElement(B0,{key:Do,label:"Close",icon:QN,renderIcon:n,onClick:i});return x.createElement("div",{ref:a,style:r.toolbar,className:ce(k7())},e==null?void 0:e.map(c=>c===Do?s():c))}const O7=Yr(Y_,P7);function bk(e,t){var n;return x.createElement(e.module.component,{key:e.module.name,...t},(n=e.children)===null||n===void 0?void 0:n.map(r=>bk(r,t)))}function T7(e,t={}){const{easing:n,...r}=e,{easing:i,...o}=t;return{easing:{...n,...i},...r,...o}}function j7({carousel:e,animation:t,render:n,toolbar:r,controller:i,noScroll:o,on:a,plugins:l,slides:s,index:c,...d}){const{animation:f,carousel:m,render:p,toolbar:h,controller:y,noScroll:w,on:g,slides:v,index:b,plugins:C,...S}=Om,{config:P,augmentation:k}=BN([Ke(C7,[Ke(w7,[Ke(u7,[Ke(h7),Ke(O7),Ke(v7)])])])],l||C),_=k({animation:T7(f,t),carousel:{...m,...e},render:{...p,...n},toolbar:{...h,...r},controller:{...y,...i},noScroll:{...w,...o},on:{...g,...a},...S,...d});return _.open?x.createElement(HN,{..._},x.createElement(YN,{slides:s||v,index:Ld(c||b)},x.createElement(XN,null,x.createElement(UN,null,x.createElement(VN,null,bk(Ke(_7,P),_)))))):null}const $7={minZoom:1,maxZoomPixelRatio:1,zoomInMultiplier:2,doubleTapDelay:300,doubleClickDelay:500,doubleClickMaxStops:2,keyboardMoveDistance:50,wheelZoomDistanceFactor:100,pinchZoomDistanceFactor:100,pinchZoomV4:!1,scrollToZoom:!1};function I7(e){return Math.min(Math.max(e,Number.EPSILON),1)}function wk(e){const{minZoom:t,...n}={...$7,...e};return{minZoom:I7(t),...n}}function M7(e,t,n,r){const i=x.useRef(void 0),o=x.useRef(void 0),{zoom:a}=an().animation,l=V0(),s=ve(()=>{var c,d,f;if((c=i.current)===null||c===void 0||c.cancel(),i.current=void 0,o.current&&(r!=null&&r.current)){try{i.current=(f=(d=r.current).animate)===null||f===void 0?void 0:f.call(d,[{transform:o.current},{transform:`scale(${e}) translateX(${t}px) translateY(${n}px)`}],{duration:l?0:a??500,easing:i.current?"ease-out":"ease-in-out"})}catch(m){console.error(m)}o.current=void 0,i.current&&(i.current.onfinish=()=>{i.current=void 0})}});return Bn(s,[e,t,n,s]),x.useCallback(()=>{o.current=r!=null&&r.current?window.getComputedStyle(r.current).transform:void 0},[r])}function A7(e,t){const{on:n}=an(),r=ve(()=>{var i;t||(i=n.zoom)===null||i===void 0||i.call(n,{zoom:e})});x.useEffect(r,[e,r])}function Nd(){const{zoom:e}=an();return wk(e)}function D7(e,t){var n,r;let i={width:0,height:0},o={width:0,height:0};const{currentSlide:a}=Xr(),{imageFit:l}=an().carousel,{maxZoomPixelRatio:s}=Nd();if(e&&a){const d={...a,...t};if(Qo(d)){const f=z0(d,l),m=Math.max(...(((n=d.srcSet)===null||n===void 0?void 0:n.map(h=>h.width))||[]).concat(d.width?[d.width]:[])),p=Math.max(...(((r=d.srcSet)===null||r===void 0?void 0:r.map(h=>h.height))||[]).concat(d.height?[d.height]:[]));m>0&&p>0&&e.width>0&&e.height>0&&(o=f?{width:Math.round(Math.min(m,e.width/e.height*p)),height:Math.round(Math.min(p,e.height/e.width*m))}:{width:m,height:p},o={width:o.width*s,height:o.height*s},i=f?{width:Math.min(e.width,o.width,m),height:Math.min(e.height,o.height,p)}:{width:Math.round(Math.min(e.width,e.height/p*m,m)),height:Math.round(Math.min(e.height,e.width/m*p,p))})}}const c=i.width?Math.max(F0(o.width/i.width,5),1):1;return{imageRect:i,maxZoom:c}}function Wx(e,t){return Math.hypot(e.clientX-t.clientX,e.clientY-t.clientY)}function Ux(e,t,n=100,r=2){return e*Math.min(1+Math.abs(t/n),r)**Math.sign(t)}function L7(e,t,n,r,i,o,a,l,s){const c=x.useRef([]),d=x.useRef(0),f=x.useRef(void 0),{globalIndex:m}=Xr(),{getOwnerWindow:p}=Rd(),{containerRef:h,subscribeSensors:y}=gr(),{keyboardMoveDistance:w,zoomInMultiplier:g,wheelZoomDistanceFactor:v,scrollToZoom:b,doubleTapDelay:C,doubleClickDelay:S,doubleClickMaxStops:P,pinchZoomDistanceFactor:k,pinchZoomV4:_}=Nd(),T=x.useCallback(O=>{if(h.current){const{pageX:A,pageY:N}=O,{scrollX:B,scrollY:L}=p(),{left:V,top:W,width:G,height:U}=h.current.getBoundingClientRect();return[A-V-B-G/2,N-W-L-U/2]}return[]},[h,p]),$=ve(O=>{const{key:A,metaKey:N,ctrlKey:B}=O,L=N||B,V=()=>{O.preventDefault(),O.stopPropagation()};if(e>1){const W=(G,U)=>{V(),l(G,U)};A==="ArrowDown"?W(0,w):A==="ArrowUp"?W(0,-w):A==="ArrowLeft"?W(-w,0):A==="ArrowRight"&&W(w,0)}A==="+"||L&&A==="="?(V(),i()):A==="-"||L&&A==="_"?(V(),o()):L&&A==="0"&&(V(),a(1))}),I=ve(O=>{if((O.ctrlKey||b)&&Math.abs(O.deltaY)>Math.abs(O.deltaX)){O.stopPropagation(),a(Ux(e,-O.deltaY,v),!0,...T(O));return}e>1&&(O.stopPropagation(),b||l(O.deltaX,O.deltaY))}),M=x.useCallback(O=>{const A=c.current;A.splice(0,A.length,...A.filter(N=>N.pointerId!==O.pointerId))},[]),j=x.useCallback(O=>{M(O),O.persist(),c.current.push(O)},[M]),F=ve(O=>{var A;const N=c.current;if(O.pointerType==="mouse"&&O.buttons>1||!(!((A=s==null?void 0:s.current)===null||A===void 0)&&A.contains(O.target)))return;e>1&&O.stopPropagation();const{timeStamp:B}=O;if(N.length===0&&B-d.current<(O.pointerType==="touch"?C:S)){d.current=0;const L=e>=1?e!==n?e*Math.max(n**(1/P),g):1:e!==t?e/Math.max(t**(-1/P),g):1;a(L,!1,...T(O))}else d.current=B;if(j(O),N.length===2){const L=Wx(N[0],N[1]);f.current={previousDistance:L,initialDistance:Math.max(L,1),initialZoom:e}}}),D=ve(O=>{const A=c.current,N=A.find(B=>B.pointerId===O.pointerId);if(A.length===2&&f.current){O.stopPropagation(),j(O);const B=Wx(A[0],A[1]),L=_?f.current.initialZoom/f.current.initialDistance*B:Ux(e,B-f.current.previousDistance,k);a(L,!0,...A.map(V=>T(V)).reduce((V,W)=>W.map((G,U)=>V[U]+G/2))),f.current.previousDistance=B;return}e>1&&(O.stopPropagation(),N&&(A.length===1&&l((N.clientX-O.clientX)/e,(N.clientY-O.clientY)/e),j(O)))}),z=x.useCallback(O=>{const A=c.current;A.length===2&&A.find(N=>N.pointerId===O.pointerId)&&(f.current=void 0),M(O)},[M]),R=x.useCallback(()=>{const O=c.current;O.splice(0,O.length),d.current=0,f.current=void 0},[]);vk(y,F,D,z,r),x.useEffect(R,[m,R]),x.useEffect(()=>r?()=>{}:L0(R,y(M0,$),y(A0,I)),[r,y,R,$,I])}function R7(e,t,n){const[r,i]=x.useState(1),[o,a]=x.useState(0),[l,s]=x.useState(0),c=M7(r,o,l,n),{currentSlide:d,globalIndex:f}=Xr(),{containerRect:m,slideRect:p}=gr(),{minZoom:h,zoomInMultiplier:y}=Nd(),w=d&&Qo(d)?d.src:void 0,g=!w||!(n!=null&&n.current);Bn(()=>{i(1),a(0),s(0)},[f,w]);const v=x.useCallback((k,_,T)=>{const $=T||r,I=o-(k||0),M=l-(_||0),j=(e.width*$-p.width)/2/$,F=(e.height*$-p.height)/2/$;a(Math.min(Math.abs(I),Math.max(j,0))*Math.sign(I)),s(Math.min(Math.abs(M),Math.max(F,0))*Math.sign(M))},[r,o,l,p,e.width,e.height]),b=x.useCallback((k,_,T,$)=>{const I=F0(k+.01<t?k-.01>h?k:h:t,5);_||c(),v(T?T*(1/r-1/I):0,$?$*(1/r-1/I):0,I),i(I)},[r,h,t,v,c]),C=ve(()=>{r>1&&(r>t&&b(t,!0),v())});Bn(C,[m.width,m.height,C]);const S=x.useCallback(()=>{const k=r*y;b(r<1&&k>1?1:k)},[r,y,b]),P=x.useCallback(()=>{const k=r/y;b(r>1&&k<1?1:k)},[r,y,b]);return{zoom:r,offsetX:o,offsetY:l,disabled:g,changeOffsets:v,changeZoom:b,zoomIn:S,zoomOut:P}}const Sk=x.createContext(null),U0=mr("useZoom","ZoomControllerContext",Sk);function F7({children:e}){const[t,n]=x.useState(),{slideRect:r}=gr(),{ref:i,minZoom:o}=Nd(),{imageRect:a,maxZoom:l}=D7(r,t==null?void 0:t.imageDimensions),{zoom:s,offsetX:c,offsetY:d,disabled:f,changeZoom:m,changeOffsets:p,zoomIn:h,zoomOut:y}=R7(a,l,t==null?void 0:t.zoomWrapperRef);A7(s,f),L7(s,o,l,f,h,y,m,p,t==null?void 0:t.zoomWrapperRef);const w=x.useMemo(()=>({zoom:s,minZoom:o,maxZoom:l,offsetX:c,offsetY:d,disabled:f,zoomIn:h,zoomOut:y,changeZoom:m}),[s,o,l,c,d,f,h,y,m]);x.useImperativeHandle(i,()=>w,[w]);const g=x.useMemo(()=>({...w,setZoomWrapper:n}),[w,n]);return x.createElement(Sk.Provider,{value:g},e)}const z7=Ii("ZoomIn",x.createElement(x.Fragment,null,x.createElement("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}),x.createElement("path",{d:"M12 10h-2v2H9v-2H7V9h2V7h1v2h2v1z"}))),N7=Ii("ZoomOut",x.createElement("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14zM7 9h5v1H7z"})),Hx=x.forwardRef(function({zoomIn:t,onLoseFocus:n},r){const i=x.useRef(!1),o=x.useRef(!1),{zoom:a,minZoom:l,maxZoom:s,zoomIn:c,zoomOut:d,disabled:f}=U0(),{render:m}=an(),p=f||(t?a>=s:a<=l);return x.useEffect(()=>{p&&i.current&&o.current&&n(),p||(i.current=!0)},[p,n]),x.createElement(B0,{ref:r,disabled:p,label:t?"Zoom in":"Zoom out",icon:t?z7:N7,renderIcon:t?m.iconZoomIn:m.iconZoomOut,onClick:t?c:d,onFocus:()=>{o.current=!0},onBlur:()=>{o.current=!1}})});function B7(){const e=x.useRef(null),t=x.useRef(null),{focus:n}=gr(),r=x.useCallback(a=>{var l,s;!((l=a.current)===null||l===void 0)&&l.disabled?n():(s=a.current)===null||s===void 0||s.focus()},[n]),i=x.useCallback(()=>r(e),[r]),o=x.useCallback(()=>r(t),[r]);return x.createElement(x.Fragment,null,x.createElement(Hx,{zoomIn:!0,ref:e,onLoseFocus:o}),x.createElement(Hx,{ref:t,onLoseFocus:i}))}function V7(){const{render:e}=an(),t=U0();return e.buttonZoom?x.createElement(x.Fragment,null,e.buttonZoom(t)):x.createElement(B7,null)}function W7(e){var t;return(((t=e.srcSet)===null||t===void 0?void 0:t.length)||0)>0}function U7({current:e,preload:t},{type:n,source:r}){switch(n){case"fetch":return e?{current:e,preload:r}:{current:r};case"done":return r===t?{current:r}:{current:e,preload:t};default:throw new Error(rk)}}function H7(e){var t,n;const[{current:r,preload:i},o]=x.useReducer(U7,{}),{slide:a,rect:l,imageFit:s,render:c,interactive:d}=e,f=a.srcSet.sort((S,P)=>S.width-P.width),m=(t=a.width)!==null&&t!==void 0?t:f[f.length-1].width,p=(n=a.height)!==null&&n!==void 0?n:f[f.length-1].height,h=z0(a,s),y=Math.max(...f.map(S=>S.width)),w=Math.min((h?Math.max:Math.min)(l.width,m*(l.height/p)),y),g=AN(),v=ve(()=>{var S;const P=(S=f.find(k=>k.width>=w*g))!==null&&S!==void 0?S:f[f.length-1];(!r||f.findIndex(k=>k.src===r)<f.findIndex(k=>k===P))&&o({type:"fetch",source:P.src})});Bn(v,[l.width,l.height,g,v]);const b=ve(S=>o({type:"done",source:S})),C={WebkitTransform:d?"initial":"translateZ(0)"};return h||Object.assign(C,l.width/l.height<m/p?{width:"100%",height:"auto"}:{width:"auto",height:"100%"}),x.createElement(x.Fragment,null,i&&i!==r&&x.createElement(du,{key:"preload",...e,offset:void 0,slide:{...a,src:i,srcSet:void 0},style:{position:"absolute",visibility:"hidden",...C},onLoad:()=>b(i),render:{...c,iconLoading:()=>null,iconError:()=>null}}),r&&x.createElement(du,{key:"current",...e,slide:{...a,src:r,srcSet:void 0},style:C}))}function G7({render:e,slide:t,offset:n,rect:r}){var i;const[o,a]=x.useState(),l=x.useRef(null),{zoom:s,maxZoom:c,offsetX:d,offsetY:f,setZoomWrapper:m}=U0(),p=s>1,{carousel:h,on:y}=an(),{currentIndex:w}=Xr();Bn(()=>n===0?(m({zoomWrapperRef:l,imageDimensions:o}),()=>m(void 0)):()=>{},[n,o,m]);let g=(i=e.slide)===null||i===void 0?void 0:i.call(e,{slide:t,offset:n,rect:r,zoom:s,maxZoom:c});if(!g&&Qo(t)){const v={slide:t,offset:n,rect:r,render:e,imageFit:h.imageFit,imageProps:h.imageProps,onClick:n===0?()=>{var b;return(b=y.click)===null||b===void 0?void 0:b.call(y,{index:w})}:void 0};g=W7(t)?x.createElement(H7,{...v,slide:t,interactive:p,rect:n===0?{width:r.width*s,height:r.height*s}:r}):x.createElement(du,{onLoad:b=>a({width:b.naturalWidth,height:b.naturalHeight}),...v})}return g?x.createElement("div",{ref:l,className:Nn(ce(EN),ce($0),ce(K_),p&&ce(kN)),style:n===0?{transform:`scale(${s}) translateX(${d}px) translateY(${f}px)`}:void 0},g):null}const q7=({augment:e,addModule:t})=>{e(({zoom:n,toolbar:r,render:i,controller:o,...a})=>{const l=wk(n);return{zoom:l,toolbar:LN(r,jx,x.createElement(V7,null)),render:{...i,slide:s=>{var c;return Qo(s.slide)?x.createElement(G7,{render:i,...s}):(c=i.slide)===null||c===void 0?void 0:c.call(i,s)}},controller:{...o,preventDefaultWheelY:l.scrollToZoom},...a}}),t(Yr(jx,F7))};var Ck={exports:{}};(function(e,t){(function(n,r){e.exports=r()})(ne,function(){var n=1e3,r=6e4,i=36e5,o="millisecond",a="second",l="minute",s="hour",c="day",d="week",f="month",m="quarter",p="year",h="date",y="Invalid Date",w=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,g=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,v={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(F){var D=["th","st","nd","rd"],z=F%100;return"["+F+(D[(z-20)%10]||D[z]||D[0])+"]"}},b=function(F,D,z){var R=String(F);return!R||R.length>=D?F:""+Array(D+1-R.length).join(z)+F},C={s:b,z:function(F){var D=-F.utcOffset(),z=Math.abs(D),R=Math.floor(z/60),O=z%60;return(D<=0?"+":"-")+b(R,2,"0")+":"+b(O,2,"0")},m:function F(D,z){if(D.date()<z.date())return-F(z,D);var R=12*(z.year()-D.year())+(z.month()-D.month()),O=D.clone().add(R,f),A=z-O<0,N=D.clone().add(R+(A?-1:1),f);return+(-(R+(z-O)/(A?O-N:N-O))||0)},a:function(F){return F<0?Math.ceil(F)||0:Math.floor(F)},p:function(F){return{M:f,y:p,w:d,d:c,D:h,h:s,m:l,s:a,ms:o,Q:m}[F]||String(F||"").toLowerCase().replace(/s$/,"")},u:function(F){return F===void 0}},S="en",P={};P[S]=v;var k="$isDayjsObject",_=function(F){return F instanceof M||!(!F||!F[k])},T=function F(D,z,R){var O;if(!D)return S;if(typeof D=="string"){var A=D.toLowerCase();P[A]&&(O=A),z&&(P[A]=z,O=A);var N=D.split("-");if(!O&&N.length>1)return F(N[0])}else{var B=D.name;P[B]=D,O=B}return!R&&O&&(S=O),O||!R&&S},$=function(F,D){if(_(F))return F.clone();var z=typeof D=="object"?D:{};return z.date=F,z.args=arguments,new M(z)},I=C;I.l=T,I.i=_,I.w=function(F,D){return $(F,{locale:D.$L,utc:D.$u,x:D.$x,$offset:D.$offset})};var M=function(){function F(z){this.$L=T(z.locale,null,!0),this.parse(z),this.$x=this.$x||z.x||{},this[k]=!0}var D=F.prototype;return D.parse=function(z){this.$d=function(R){var O=R.date,A=R.utc;if(O===null)return new Date(NaN);if(I.u(O))return new Date;if(O instanceof Date)return new Date(O);if(typeof O=="string"&&!/Z$/i.test(O)){var N=O.match(w);if(N){var B=N[2]-1||0,L=(N[7]||"0").substring(0,3);return A?new Date(Date.UTC(N[1],B,N[3]||1,N[4]||0,N[5]||0,N[6]||0,L)):new Date(N[1],B,N[3]||1,N[4]||0,N[5]||0,N[6]||0,L)}}return new Date(O)}(z),this.init()},D.init=function(){var z=this.$d;this.$y=z.getFullYear(),this.$M=z.getMonth(),this.$D=z.getDate(),this.$W=z.getDay(),this.$H=z.getHours(),this.$m=z.getMinutes(),this.$s=z.getSeconds(),this.$ms=z.getMilliseconds()},D.$utils=function(){return I},D.isValid=function(){return this.$d.toString()!==y},D.isSame=function(z,R){var O=$(z);return this.startOf(R)<=O&&O<=this.endOf(R)},D.isAfter=function(z,R){return $(z)<this.startOf(R)},D.isBefore=function(z,R){return this.endOf(R)<$(z)},D.$g=function(z,R,O){return I.u(z)?this[R]:this.set(O,z)},D.unix=function(){return Math.floor(this.valueOf()/1e3)},D.valueOf=function(){return this.$d.getTime()},D.startOf=function(z,R){var O=this,A=!!I.u(R)||R,N=I.p(z),B=function(se,ie){var Pe=I.w(O.$u?Date.UTC(O.$y,ie,se):new Date(O.$y,ie,se),O);return A?Pe:Pe.endOf(c)},L=function(se,ie){return I.w(O.toDate()[se].apply(O.toDate("s"),(A?[0,0,0,0]:[23,59,59,999]).slice(ie)),O)},V=this.$W,W=this.$M,G=this.$D,U="set"+(this.$u?"UTC":"");switch(N){case p:return A?B(1,0):B(31,11);case f:return A?B(1,W):B(0,W+1);case d:var K=this.$locale().weekStart||0,Z=(V<K?V+7:V)-K;return B(A?G-Z:G+(6-Z),W);case c:case h:return L(U+"Hours",0);case s:return L(U+"Minutes",1);case l:return L(U+"Seconds",2);case a:return L(U+"Milliseconds",3);default:return this.clone()}},D.endOf=function(z){return this.startOf(z,!1)},D.$set=function(z,R){var O,A=I.p(z),N="set"+(this.$u?"UTC":""),B=(O={},O[c]=N+"Date",O[h]=N+"Date",O[f]=N+"Month",O[p]=N+"FullYear",O[s]=N+"Hours",O[l]=N+"Minutes",O[a]=N+"Seconds",O[o]=N+"Milliseconds",O)[A],L=A===c?this.$D+(R-this.$W):R;if(A===f||A===p){var V=this.clone().set(h,1);V.$d[B](L),V.init(),this.$d=V.set(h,Math.min(this.$D,V.daysInMonth())).$d}else B&&this.$d[B](L);return this.init(),this},D.set=function(z,R){return this.clone().$set(z,R)},D.get=function(z){return this[I.p(z)]()},D.add=function(z,R){var O,A=this;z=Number(z);var N=I.p(R),B=function(W){var G=$(A);return I.w(G.date(G.date()+Math.round(W*z)),A)};if(N===f)return this.set(f,this.$M+z);if(N===p)return this.set(p,this.$y+z);if(N===c)return B(1);if(N===d)return B(7);var L=(O={},O[l]=r,O[s]=i,O[a]=n,O)[N]||1,V=this.$d.getTime()+z*L;return I.w(V,this)},D.subtract=function(z,R){return this.add(-1*z,R)},D.format=function(z){var R=this,O=this.$locale();if(!this.isValid())return O.invalidDate||y;var A=z||"YYYY-MM-DDTHH:mm:ssZ",N=I.z(this),B=this.$H,L=this.$m,V=this.$M,W=O.weekdays,G=O.months,U=O.meridiem,K=function(ie,Pe,qe,Ye){return ie&&(ie[Pe]||ie(R,A))||qe[Pe].slice(0,Ye)},Z=function(ie){return I.s(B%12||12,ie,"0")},se=U||function(ie,Pe,qe){var Ye=ie<12?"AM":"PM";return qe?Ye.toLowerCase():Ye};return A.replace(g,function(ie,Pe){return Pe||function(qe){switch(qe){case"YY":return String(R.$y).slice(-2);case"YYYY":return I.s(R.$y,4,"0");case"M":return V+1;case"MM":return I.s(V+1,2,"0");case"MMM":return K(O.monthsShort,V,G,3);case"MMMM":return K(G,V);case"D":return R.$D;case"DD":return I.s(R.$D,2,"0");case"d":return String(R.$W);case"dd":return K(O.weekdaysMin,R.$W,W,2);case"ddd":return K(O.weekdaysShort,R.$W,W,3);case"dddd":return W[R.$W];case"H":return String(B);case"HH":return I.s(B,2,"0");case"h":return Z(1);case"hh":return Z(2);case"a":return se(B,L,!0);case"A":return se(B,L,!1);case"m":return String(L);case"mm":return I.s(L,2,"0");case"s":return String(R.$s);case"ss":return I.s(R.$s,2,"0");case"SSS":return I.s(R.$ms,3,"0");case"Z":return N}return null}(ie)||N.replace(":","")})},D.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},D.diff=function(z,R,O){var A,N=this,B=I.p(R),L=$(z),V=(L.utcOffset()-this.utcOffset())*r,W=this-L,G=function(){return I.m(N,L)};switch(B){case p:A=G()/12;break;case f:A=G();break;case m:A=G()/3;break;case d:A=(W-V)/6048e5;break;case c:A=(W-V)/864e5;break;case s:A=W/i;break;case l:A=W/r;break;case a:A=W/n;break;default:A=W}return O?A:I.a(A)},D.daysInMonth=function(){return this.endOf(f).$D},D.$locale=function(){return P[this.$L]},D.locale=function(z,R){if(!z)return this.$L;var O=this.clone(),A=T(z,R,!0);return A&&(O.$L=A),O},D.clone=function(){return I.w(this.$d,this)},D.toDate=function(){return new Date(this.valueOf())},D.toJSON=function(){return this.isValid()?this.toISOString():null},D.toISOString=function(){return this.$d.toISOString()},D.toString=function(){return this.$d.toUTCString()},F}(),j=M.prototype;return $.prototype=j,[["$ms",o],["$s",a],["$m",l],["$H",s],["$W",c],["$M",f],["$y",p],["$D",h]].forEach(function(F){j[F[1]]=function(D){return this.$g(D,F[0],F[1])}}),$.extend=function(F,D){return F.$i||(F(D,M,$),F.$i=!0),$},$.locale=T,$.isDayjs=_,$.unix=function(F){return $(1e3*F)},$.en=P[S],$.Ls=P,$.p={},$})})(Ck);var Y7=Ck.exports;const Gx=Ro(Y7),X7=E.div`
  /* max-width: 800px; */
  margin: 20px auto;

  font-family: var(--second-font);
`;E.h3`
  font-size: 18px;
  color: #4a3632; // Темний колір з твого футера
  margin-bottom: 20px;
  text-transform: uppercase;
  letter-spacing: 1px;
`;const K7=E.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  background: var(--second-background);
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 40px;
`,Q7=E.input`
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
`,Z7=E.textarea`
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
`,J7=E.button`
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
`,e9=E.div`
  margin-top: 30px;
`,t9=E.div`
  border-bottom: 1px solid #eee;
  padding: 20px 0;
`,n9=E.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
`,r9=E.span`
  font-weight: bold;
  color: #333;
`,i9=E.span`
  font-size: 12px;
  color: #999;
`,o9=E.p`
  font-size: 15px;
  color: #555;
  margin: 5px 0;
`,a9=E.div`
  margin-top: 15px;
  padding: 15px;
  background: var(--second-background);

  border-left: 3px solid var(--brown-color);
  font-size: 14px;
    border-radius: 0 10px 10px 0;

`,s9=E.div`
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
`,qx=({productId:e,questions:t})=>{const[n,r]=x.useState(""),[i,o]=x.useState(""),a=async l=>{l.preventDefault(),(await fetch("https://backenddidiv-production.up.railway.app/api/questions",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({data:{question:n,userName:i,product:e}})})).ok&&(X.success("Запитання надіслано! Воно з’явиться після модерації."),r(""),o(""))};return u.jsxs(X7,{children:[u.jsx(Un,{autoClose:1500}),u.jsxs(K7,{onSubmit:a,children:[u.jsx(Q7,{placeholder:"Ваше ім'я",value:i,onChange:l=>o(l.target.value),required:!0}),u.jsx(Z7,{placeholder:"Запитайте нас про цей товар...",value:n,onChange:l=>r(l.target.value),required:!0}),u.jsx(J7,{children:"Надіслати запитання"})]}),u.jsx(e9,{children:t&&t.length>0?t.map(l=>l.answer?u.jsxs(t9,{children:[u.jsxs(n9,{children:[u.jsx(r9,{children:l.userName||"Гість"}),u.jsx(i9,{children:new Date(l.createdAt).toLocaleDateString()})]}),u.jsx(o9,{children:l.question}),u.jsxs(a9,{children:[u.jsx(s9,{children:"Адміністратор"}),u.jsx("p",{children:l.answer})]})]},l.id):null):u.jsx("p",{style:{textAlign:"center",color:"#999"},children:"Запитань поки немає. Будьте першим!"})})]})},l9=()=>{var O,A,N,B;const{identifier:e}=dw(),[t,n]=x.useState([]),[r,i]=x.useState(1),[o,a]=x.useState("description"),[l,s]=x.useState(null),[c,d]=x.useState(!1),[f,m]=x.useState(0),[p,h]=x.useState(!0),y=!isNaN(e),w=t.find(L=>y?String(L.id)===String(e):L.slug===e),g=w?Gx().diff(Gx(w.createdAt),"day")<7:!1,b=(L=>{const[V,W]=x.useState(!1);return x.useEffect(()=>{const G=window.matchMedia(L),U=()=>W(G.matches);return U(),G.addEventListener("change",U),()=>G.removeEventListener("change",U)},[L]),V})("(min-width: 768px)"),C=Ge(L=>L.cart.items),S=w?C.find(L=>L.id===w.id):null,P=(S==null?void 0:S.quantity)||0;x.useEffect(()=>{(async()=>{try{h(!0);const V=Dd.stringify({populate:{attributes:{populate:{label:{populate:"*"},value:{populate:"*"}}},features:{populate:"*"},category:!0,images:!0},filters:y?{id:{$eq:e}}:{slug:{$eq:e}}},{encodeValuesOnly:!0}),G=await(await fetch(`https://backenddidiv-production.up.railway.app/api/products?${V}`)).json();n(G.data)}catch(V){console.error("Error fetching products:",V)}finally{h(!1)}})()},[e,y]);const k=(w==null?void 0:w.available)??!0,_=(w==null?void 0:w.stock)===0;x.useEffect(()=>{var L,V;w&&w.images&&s((V=(L=w.images)==null?void 0:L[0])==null?void 0:V.url)},[w]);const T=((w==null?void 0:w.images)??[]).map(L=>({src:L.url})),$=()=>{const L=w.images.findIndex(V=>V.url===l);m(L>=0?L:0),d(!0)},I=Lt(),j=Ge(L=>L.favorites.items).some(L=>L.id===(w==null?void 0:w.id)),F=async()=>{if(!_){if(P>=w.stock){X.warning("Товар вже в кошику (досягнуто максимум)");return}if(P+r>w.stock){X.warning(`Доступно лише ${w.stock} шт.`);return}await Ho(w,r,I,X)}},D=(L,V)=>{V.stopPropagation(),Ti(L,j,I,X)},z=(w==null?void 0:w.new_price)&&(w==null?void 0:w.new_price)<w.price,R=z?Math.round((w.price-w.new_price)/w.price*100):0;return p?u.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"100vw",height:"100vh"},children:u.jsx(ji,{height:100,width:100,radius:5,color:"var(--orange-color)",ariaLabel:"ball-triangle-loading",wrapperStyle:{},wrapperClass:"",visible:!0})}):w?u.jsxs(Sx,{children:[" ",u.jsx(Un,{autoClose:1500}),u.jsxs(Yz,{children:[u.jsx(ge,{to:"/",children:"Головна"})," / ",u.jsx(ge,{to:"/catalog",children:"Каталог"})," /"," ",u.jsx(ge,{to:`/catalog/${(O=w.category)==null?void 0:O.title}`,children:(A=w.category)==null?void 0:A.title})," /"," ",w.name]}),u.jsxs(Xz,{children:[u.jsxs(Kz,{children:[u.jsxs("div",{style:{position:"relative"},children:[u.jsx(Zz,{src:l||ur,alt:w.name,onClick:_?void 0:$,style:{filter:_?"grayscale(100%)":"none",opacity:_?.55:1,cursor:_?"default":"pointer"}}),_&&u.jsx(Qz,{children:"ПРОДАНО"})]}),u.jsx(Jz,{children:(w.images??[]).map(L=>{const V=L.url;return u.jsx(eN,{src:V,onClick:()=>!_&&s(V),style:{cursor:_?"default":"pointer",opacity:l===V?1:.4,filter:_?"grayscale(100%)":"none"}},L.id)})})]}),u.jsx(j7,{open:c,close:()=>d(!1),index:f,slides:T,controller:{closeOnBackdropClick:!0},on:{view:({index:L})=>{var V,W;m(L),(W=(V=w==null?void 0:w.images)==null?void 0:V[L])!=null&&W.url&&s(w.images[L].url)}},plugins:[q7],zoom:{maxZoomPixelRatio:3,zoomInMultiplier:2,doubleTapDelay:300,doubleClickDelay:300,doubleClickEnabled:!0,pinchZoomDistanceFactor:100,scrollToZoom:!0}}),u.jsxs(tN,{children:[u.jsx(nN,{children:w.name}),u.jsxs(rN,{children:["Артикул: ",w.sku??""]}),u.jsx(iN,{children:g&&u.jsx(aN,{children:"● Новий товар"})}),!k&&u.jsx(oN,{children:"Бронь"}),u.jsxs(sN,{children:[u.jsx(lN,{children:z?u.jsxs(u.Fragment,{children:[u.jsxs(Cx,{$discount:!0,children:[w.new_price.toLocaleString()," грн"]}),u.jsxs(cN,{children:[w.price.toLocaleString()," грн"]}),u.jsxs(uN,{children:["-",R,"%"]})]}):u.jsxs(Cx,{children:[(N=w.price)==null?void 0:N.toLocaleString()," грн"]})}),u.jsxs(dN,{children:[u.jsxs(fN,{children:[u.jsx("button",{onClick:()=>i(Math.max(1,r-1)),disabled:_,children:"-"}),u.jsx("span",{children:r}),u.jsxs(yN,{$active:r>=w.stock,children:[u.jsx("button",{onClick:()=>i(Math.min(w.stock,r+1)),disabled:_||r>=w.stock,children:"+"}),u.jsxs(H_,{children:["Максимум: ",w.stock]})]})]}),u.jsxs(pN,{onClick:F,disabled:!k||_,children:[" ",u.jsx(Uo,{size:25}),u.jsx("span",{children:"В КОШИК"})]}),u.jsxs(gN,{$active:j,onClick:L=>{_||D(w,L)},disabled:_,children:[u.jsxs(vN,{$active:j,children:[" ",u.jsx("use",{href:`${xn}#icon-heart`})]}),u.jsx("span",{children:"В ОБРАНЕ"})]})]})]})]})]}),!b&&u.jsxs(kx,{children:[u.jsxs(Px,{children:[u.jsx(ga,{active:o==="description",onClick:()=>a("description"),children:"Опис"}),u.jsx(ga,{active:o==="attributes",onClick:()=>a("attributes"),children:"Характеристики"}),u.jsx(ga,{active:o==="FAQ",onClick:()=>a("FAQ"),children:"Питання та відповіді"})]}),u.jsxs(Ox,{children:[o==="description"&&u.jsx(Tx,{children:w.description}),o==="attributes"&&u.jsx(Ex,{children:(B=w.attributes)!=null&&B.length?w.attributes.map(L=>u.jsxs(_x,{children:[u.jsx("span",{children:L.label}),u.jsx("b",{children:L.value})]},L.id)):u.jsx("p",{children:"Характеристики відсутні"})}),o==="FAQ"&&u.jsx(qx,{productId:w.documentId,questions:w.questions})]})]}),b&&u.jsxs(mN,{children:[u.jsxs(kx,{children:[u.jsxs(Px,{children:[u.jsx(ga,{active:o==="description",onClick:()=>a("description"),children:"Опис"}),u.jsx(ga,{active:o==="FAQ",onClick:()=>a("FAQ"),children:"Питання та відповіді"})]}),u.jsxs(Ox,{children:[o==="description"&&u.jsx(Tx,{children:w.description}),o==="FAQ"&&u.jsx(qx,{productId:w.documentId,questions:w.questions})]})]}),u.jsxs(Ex,{children:[u.jsx(hN,{children:" Характеристики"}),(()=>{const L=(w.attributes||[]).map(W=>{var K,Z,se,ie,Pe;const G=((K=W.label)==null?void 0:K.label)??((Z=W.label)==null?void 0:Z.name)??((se=W.label)==null?void 0:se.title)??((ie=W.label)==null?void 0:ie.value)??"",U=((Pe=W.value)==null?void 0:Pe.value)??"";return!G||!U?null:{id:W.id??`${G}-${U}`,label:G,value:U}}).filter(Boolean);console.log(L,"normalizedAttributes");const V=[...L,...w.features||[]];return V.length?V.map((W,G)=>u.jsxs(_x,{children:[u.jsx("span",{children:W.label}),u.jsx("b",{children:W.value})]},`${W.id}-${G}`)):u.jsx("p",{children:"Характеристики відсутні"})})()]})]})]}):u.jsx(Sx,{children:"Товар не знайдено"})};var H0="persist:",Ek="persist/FLUSH",G0="persist/REHYDRATE",_k="persist/PAUSE",kk="persist/PERSIST",Pk="persist/PURGE",Ok="persist/REGISTER",c9=-1;function cc(e){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?cc=function(n){return typeof n}:cc=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},cc(e)}function Yx(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function u9(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Yx(n,!0).forEach(function(r){d9(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Yx(n).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function d9(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function f9(e,t,n,r){r.debug;var i=u9({},n);return e&&cc(e)==="object"&&Object.keys(e).forEach(function(o){o!=="_persist"&&t[o]===n[o]&&(i[o]=e[o])}),i}function p9(e){var t=e.blacklist||null,n=e.whitelist||null,r=e.transforms||[],i=e.throttle||0,o="".concat(e.keyPrefix!==void 0?e.keyPrefix:H0).concat(e.key),a=e.storage,l;e.serialize===!1?l=function(S){return S}:typeof e.serialize=="function"?l=e.serialize:l=h9;var s=e.writeFailHandler||null,c={},d={},f=[],m=null,p=null,h=function(S){Object.keys(S).forEach(function(P){g(P)&&c[P]!==S[P]&&f.indexOf(P)===-1&&f.push(P)}),Object.keys(c).forEach(function(P){S[P]===void 0&&g(P)&&f.indexOf(P)===-1&&c[P]!==void 0&&f.push(P)}),m===null&&(m=setInterval(y,i)),c=S};function y(){if(f.length===0){m&&clearInterval(m),m=null;return}var C=f.shift(),S=r.reduce(function(P,k){return k.in(P,C,c)},c[C]);if(S!==void 0)try{d[C]=l(S)}catch(P){console.error("redux-persist/createPersistoid: error serializing state",P)}else delete d[C];f.length===0&&w()}function w(){Object.keys(d).forEach(function(C){c[C]===void 0&&delete d[C]}),p=a.setItem(o,l(d)).catch(v)}function g(C){return!(n&&n.indexOf(C)===-1&&C!=="_persist"||t&&t.indexOf(C)!==-1)}function v(C){s&&s(C)}var b=function(){for(;f.length!==0;)y();return p||Promise.resolve()};return{update:h,flush:b}}function h9(e){return JSON.stringify(e)}function m9(e){var t=e.transforms||[],n="".concat(e.keyPrefix!==void 0?e.keyPrefix:H0).concat(e.key),r=e.storage;e.debug;var i;return e.deserialize===!1?i=function(a){return a}:typeof e.deserialize=="function"?i=e.deserialize:i=g9,r.getItem(n).then(function(o){if(o)try{var a={},l=i(o);return Object.keys(l).forEach(function(s){a[s]=t.reduceRight(function(c,d){return d.out(c,s,l)},i(l[s]))}),a}catch(s){throw s}else return})}function g9(e){return JSON.parse(e)}function v9(e){var t=e.storage,n="".concat(e.keyPrefix!==void 0?e.keyPrefix:H0).concat(e.key);return t.removeItem(n,y9)}function y9(e){}function Xx(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Hn(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Xx(n,!0).forEach(function(r){x9(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Xx(n).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function x9(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b9(e,t){if(e==null)return{};var n=w9(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function w9(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}var S9=5e3;function Tk(e,t){var n=e.version!==void 0?e.version:c9;e.debug;var r=e.stateReconciler===void 0?f9:e.stateReconciler,i=e.getStoredState||m9,o=e.timeout!==void 0?e.timeout:S9,a=null,l=!1,s=!0,c=function(f){return f._persist.rehydrated&&a&&!s&&a.update(f),f};return function(d,f){var m=d||{},p=m._persist,h=b9(m,["_persist"]),y=h;if(f.type===kk){var w=!1,g=function(_,T){w||(f.rehydrate(e.key,_,T),w=!0)};if(o&&setTimeout(function(){!w&&g(void 0,new Error('redux-persist: persist timed out for persist key "'.concat(e.key,'"')))},o),s=!1,a||(a=p9(e)),p)return Hn({},t(y,f),{_persist:p});if(typeof f.rehydrate!="function"||typeof f.register!="function")throw new Error("redux-persist: either rehydrate or register is not a function on the PERSIST action. This can happen if the action is being replayed. This is an unexplored use case, please open an issue and we will figure out a resolution.");return f.register(e.key),i(e).then(function(k){var _=e.migrate||function(T,$){return Promise.resolve(T)};_(k,n).then(function(T){g(T)},function(T){g(void 0,T)})},function(k){g(void 0,k)}),Hn({},t(y,f),{_persist:{version:n,rehydrated:!1}})}else{if(f.type===Pk)return l=!0,f.result(v9(e)),Hn({},t(y,f),{_persist:p});if(f.type===Ek)return f.result(a&&a.flush()),Hn({},t(y,f),{_persist:p});if(f.type===_k)s=!0;else if(f.type===G0){if(l)return Hn({},y,{_persist:Hn({},p,{rehydrated:!0})});if(f.key===e.key){var v=t(y,f),b=f.payload,C=r!==!1&&b!==void 0?r(b,d,v,e):v,S=Hn({},C,{_persist:Hn({},p,{rehydrated:!0})});return c(S)}}}if(!p)return t(d,f);var P=t(y,f);return P===y?d:c(Hn({},P,{_persist:p}))}}function Kx(e){return _9(e)||E9(e)||C9()}function C9(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function E9(e){if(Symbol.iterator in Object(e)||Object.prototype.toString.call(e)==="[object Arguments]")return Array.from(e)}function _9(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}function Qx(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function jm(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Qx(n,!0).forEach(function(r){k9(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Qx(n).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function k9(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var jk={registry:[],bootstrapped:!1},P9=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:jk,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case Ok:return jm({},t,{registry:[].concat(Kx(t.registry),[n.key])});case G0:var r=t.registry.indexOf(n.key),i=Kx(t.registry);return i.splice(r,1),jm({},t,{registry:i,bootstrapped:i.length===0});default:return t}};function O9(e,t,n){var r=n||!1,i=Jg(P9,jk,t&&t.enhancer?t.enhancer:void 0),o=function(c){i.dispatch({type:Ok,key:c})},a=function(c,d,f){var m={type:G0,payload:d,err:f,key:c};e.dispatch(m),i.dispatch(m),r&&l.getState().bootstrapped&&(r(),r=!1)},l=jm({},i,{purge:function(){var c=[];return e.dispatch({type:Pk,result:function(f){c.push(f)}}),Promise.all(c)},flush:function(){var c=[];return e.dispatch({type:Ek,result:function(f){c.push(f)}}),Promise.all(c)},pause:function(){e.dispatch({type:_k})},persist:function(){e.dispatch({type:kk,register:o,rehydrate:a})}});return t&&t.manualPersist||l.persist(),l}var q0={},Y0={};Y0.__esModule=!0;Y0.default=$9;function uc(e){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?uc=function(n){return typeof n}:uc=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},uc(e)}function Op(){}var T9={getItem:Op,setItem:Op,removeItem:Op};function j9(e){if((typeof self>"u"?"undefined":uc(self))!=="object"||!(e in self))return!1;try{var t=self[e],n="redux-persist ".concat(e," test");t.setItem(n,"test"),t.getItem(n),t.removeItem(n)}catch{return!1}return!0}function $9(e){var t="".concat(e,"Storage");return j9(t)?self[t]:T9}q0.__esModule=!0;q0.default=A9;var I9=M9(Y0);function M9(e){return e&&e.__esModule?e:{default:e}}function A9(e){var t=(0,I9.default)(e);return{getItem:function(r){return new Promise(function(i,o){i(t.getItem(r))})},setItem:function(r,i){return new Promise(function(o,a){o(t.setItem(r,i))})},removeItem:function(r){return new Promise(function(i,o){i(t.removeItem(r))})}}}var X0=void 0,D9=L9(q0);function L9(e){return e&&e.__esModule?e:{default:e}}var R9=(0,D9.default)("local");X0=R9;const F9={key:"cart",storage:X0},z9={key:"favorites",storage:X0},N9=Tk(F9,GI),B9=Tk(z9,VI),$k=TI({reducer:{cart:N9,favorites:B9},middleware:e=>e({serializableCheck:!1})}),Bd=O9($k),V9=E.div`
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

  
`,W9=E.nav`
  font-family: var(--main-font);
  font-size: 14px;
  color: #8c8c8c;
  margin-bottom: 15px;
`,U9=E.h1`
  font-size:24px;
 
  font-weight: 800;
  margin-bottom: 20px;
  @media screen and (min-width: 768px) {
  font-size:30px;
  }
  
`,H9=E.div`
  display: flex;
  flex-direction: column;
  gap: 20px; 
  width: 100%;
  
  @media screen and (min-width:  895px) {
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between; 
  }
`,G9=E.div`
  flex: 1; 
  width: 100%;
  border: 1px solid #eee;
  border-radius: 12px;
`,q9=E.div`
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
  
`,Ik=E.div`
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
 `,Y9=E.img`
  width: 100%;
  height: auto;
  border-radius: 4px;
`,X9=E.div`
  h3 {
    font-size: 16px;
    font-weight: 300;
    margin: 0;
    line-height: 1.4;
  }
`,K9=E.div`

  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  gap: 30px;
`,Q9=E.div`

  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  gap: 30px;
`;E.div`
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
`;const Vd=E.div`
  text-align: center;
  width: 100px;
 
`,Wd=E.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 2px;
`,Ud=E.span`
  font-size: 18px;
  font-weight: 600;
  color: ${({$discount:e})=>"#111"};
`,Hd=E.span`
  font-size: 13px;
  color: #999;
  text-decoration: line-through;
`,Gd=E.span`
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
`,Z9=E.button`
  background: 'none';
  border: 'none';
  cursor: 'pointer';
  color: '#ccc';
`,J9=E.button`
  background: 'none';
  border: 'none';
  cursor: 'pointer';
  color: '#ccc';


&:disabled {
  cursor: not-allowed;
  opacity: 0.5;
}
`,eB=E.div`

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
`,tB=E.div`
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
`,nB=E(ge)`
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
`,rB=E.button`
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
  
`;E.svg`
  width: 25px;
  height: 25px;
  fill: ${({$active:e})=>e?"var(--red-color)":"var(--black-color)"};
`;const iB=E.div`
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
`,oB=E.div`
 font-family: var(--main-font);
  font-size: 14px;
  color: #8c8c8c;
  margin-bottom: 15px;
`,aB=E.div`
  background-color: #fdfaf7;
`,sB=E.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 80px 20px;
  background-color: #fdfaf7;
  text-align: center;
  flex: 1;
`;E.h1`
  font-size: 32px;
  color: #333;
  margin-bottom: 40px;
  font-weight: 600;
`;const lB=E.img`
  width: 250px;
  height: auto;
  margin-bottom: 30px;
`,cB=E.h2`
  font-size: 28px;
  color: #333;
  margin-bottom: 10px;
`,uB=E.p`
  font-size: 18px;
  color: #666;
  margin-bottom: 40px;
`,dB=E.button`
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
`,fB=()=>u.jsx(aB,{children:u.jsxs(iB,{children:[u.jsx(oB,{children:"Головна / Кошик"}),u.jsxs(sB,{children:[u.jsx(lB,{src:"/empty-cart.png",alt:"Порожній кошик"}),u.jsx(cB,{children:"Ваш кошик порожній"}),u.jsx(uB,{children:"Ви ще не додали жодного товару в кошик"}),u.jsx(dB,{onClick:()=>window.location.href="/Didiv/catalog",children:"Перейти до покупок"})]})]})}),pB=E.div`
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
`,hB=({item:e,cartItem:t,user:n,token:r,disabled:i,isSoldOut:o})=>{const a=Lt(),l=async()=>{if(i)return;const c=e.quantity+1;if(!n){a(n1({id:e.id,stock:e.stock}));return}try{if(!(await fetch(`https://backenddidiv-production.up.railway.app/api/cart-items/${t.documentId}`,{method:"PUT",headers:{"Content-Type":"application/json",Authorization:`Bearer ${r}`},body:JSON.stringify({data:{quantity:c}})})).ok)throw new Error("Не вдалося оновити кількість");a(n1({id:e.id,stock:e.stock}))}catch(d){console.error("Помилка оновлення кількості:",d)}},s=async()=>{if(i)return;const c=e.quantity-1;if(!n){a(r1(e.id));return}try{if(!(await fetch(`https://backenddidiv-production.up.railway.app/api/cart-items/${t.documentId}`,{method:"PUT",headers:{"Content-Type":"application/json",Authorization:`Bearer ${r}`},body:JSON.stringify({data:{quantity:c}})})).ok)throw new Error("Не вдалося оновити кількість");a(r1(e.id))}catch(d){console.error("Помилка оновлення кількості:",d)}};return u.jsxs(pB,{children:[u.jsx("button",{onClick:s,disabled:o||e.quantity<=1,children:"-"}),u.jsx("span",{children:e.quantity}),u.jsx("button",{onClick:l,disabled:o||e.quantity>=e.stock,children:"+"})]})},mB=async(e,t,n)=>{try{const r=await fetch(`https://backenddidiv-production.up.railway.app/api/cart-items?filters[user][id][$eq]=${e}`,{headers:{Authorization:`Bearer ${n}`}});if(!r.ok)throw new Error("Не вдалося отримати товари кошика");const i=await r.json();await Promise.all(i.data.map(async o=>{if(!(await fetch(`https://backenddidiv-production.up.railway.app/api/cart-items/${o.documentId}`,{method:"DELETE",headers:{Authorization:`Bearer ${n}`}})).ok)throw new Error("Не вдалося видалити товар з кошика")})),t(fr())}catch(r){throw console.error("clearCartFromBackend error:",r),r}},gB=E.div`
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
`,vB=E.div`
  font-family: var(--main-font);
  font-size: 14px;
  color: #8c8c8c;
  margin-bottom: 15px;

  a {
    text-decoration: none;
    color: inherit;
  }
`,yB=E.h1`
color: var(--black-color);
 font-family: var(--main-font);
  font-size: 30px;
  font-weight: 800;
  margin-bottom: 32px;
`,xB=E.div`

   display: flex;
  flex-direction: column;
  gap: 20px; 
  width: 100%;
  
  @media screen and (min-width: 895px) {
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between; 
  }
`,bB=E.div`
   flex: 1; 
  width: 100%;
  border: 1px solid #eee;
  border-radius: 12px;
`,wB=E.div`
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
`,Mk=E.div`
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
`;E.div`
  display: flex;
  align-items: center;
  gap: 20px;
  flex: 1;
`;const SB=E.div`
  position: relative;
`,CB=E.img`
   width: 100%;
  height: auto;
  border-radius: 4px;
`,EB=E.h3`
 font-size: 20px;
    font-weight: 300;
    margin: 0;
    line-height: 1.4;
    @media screen and (max-width: 768px) {
    border-bottom: 1px solid #eee;
    padding-bottom:10px;
  }
    
`,_B=E.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
   @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;E.p`
  font-size: 17px;
  font-weight: 500;
  white-space: nowrap;
  width: 100px;
  text-align: center;
`;const kB=E.div`
  display: flex;
  gap: 16px;
`,Zx=E.button`
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
`,PB=E.div`
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
`,OB=E.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  font-size: 15px;
  color: #555;
`,TB=E.button`
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
`;E.button`
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
`;const jB=async(e,t,n,r)=>{try{const i=await fetch(`https://backenddidiv-production.up.railway.app/api/cart-items?filters[user][id][$eq]=${t}&filters[product][id][$eq]=${e.id}`,{headers:{Authorization:`Bearer ${r}`}});if(!i.ok)throw new Error("Не вдалося знайти товар у кошику");const a=(await i.json()).data[0];if(!a)throw new Error("Товар у кошику не знайдено");if(!(await fetch(`https://backenddidiv-production.up.railway.app/api/cart-items/${a.documentId}`,{method:"DELETE",headers:{Authorization:`Bearer ${r}`}})).ok)throw new Error("Не вдалося видалити товар");n(jC(e))}catch(i){throw console.error("deleteCartItemFromBackend error:",i),i}},$B=()=>{const e=Lt(),t=et(),n=localStorage.getItem("token"),r=JSON.parse(localStorage.getItem("user")),[i,o]=x.useState([]),a=Ge(S=>S.cart.items),[l,s]=x.useState([]),[c,d]=x.useState([]),[f,m]=x.useState(!0),p=a.filter(S=>S.available!==!1&&S.stock>0).reduce((S,P)=>S+P.quantity,0),h=a.filter(S=>S.available!==!1&&S.stock>0).reduce((S,P)=>S+(P.new_price??P.price)*(P.quantity||1),0),y=Ge(S=>S.favorites.items),w=l.length===0,g=async()=>{localStorage.removeItem("token"),localStorage.removeItem("user"),e(Ls()),e(fr()),s([]),d([]),await Bd.purge(),t("/",{replace:!0})};x.useEffect(()=>{(async()=>{if(!n||!r){s(a),m(!1);return}try{const P=await fetch(`https://backenddidiv-production.up.railway.app/api/cart-items?filters[user][documentId][$eq]=${r.documentId}&populate[product][populate]=*`,{headers:{Authorization:`Bearer ${n}`}});if(P.status===401){g();return}if(!P.ok)throw new Error("Не вдалося отримати кошик");const k=await P.json();d(k.data);const _=k.data.map(T=>T.product?{...T.product,quantity:T.quantity}:null).filter(Boolean);s(_),e(TC(_))}catch(P){console.error(P),X.error("Не вдалося завантажити кошик")}finally{m(!1)}})()},[]),x.useEffect(()=>{s(a)},[a]);const v=(S,P)=>{P.stopPropagation();const k=y.some(_=>_.id===(S==null?void 0:S.id));Ti(S,k,e,X)},b=async S=>{o(P=>[...P,S.id]);try{if(!r){setTimeout(()=>{e(jC(S)),o(P=>P.filter(k=>k!==S.id))},300);return}await jB(S,r.id,e,n),setTimeout(()=>{o(P=>P.filter(k=>k!==S.id))},300)}catch{o(k=>k.filter(_=>_!==S.id)),X.error("Не вдалося видалити товар з кошика")}},C=async()=>{if(!r){e(fr()),s([]);return}try{await mB(r.id,e,n),s([])}catch{X.error("Не вдалося очистити кошик")}};return f?u.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"100vw",height:"100vh"},children:u.jsx(ji,{height:100,width:100,radius:5,color:"var(--orange-color)",ariaLabel:"ball-triangle-loading",wrapperStyle:{},wrapperClass:"",visible:!0})}):u.jsx(u.Fragment,{children:w?u.jsx(fB,{}):u.jsxs(V9,{children:[u.jsx(Un,{autoClose:1500}),u.jsxs(W9,{children:[" ",u.jsx(ge,{to:"/",style:{color:"inherit",textDecoration:"none"},children:"Головна"})," ","/"," ",u.jsx(ge,{to:"/cart",style:{color:"inherit",textDecoration:"none"},children:"Кошик"})]}),u.jsx(U9,{children:"Кошик"}),u.jsxs(H9,{children:[u.jsx(G9,{children:l.map((S,P)=>{var F,D;const k=c.find(z=>{var R;return((R=z.product)==null?void 0:R.documentId)===S.documentId}),_=y.some(z=>z.id===S.id),T=S.new_price&&S.new_price<S.price,$=(S==null?void 0:S.available)??!0,I=(S==null?void 0:S.stock)===0,M=T?S.new_price:S.price,j=T?Math.round((S.price-S.new_price)/S.price*100):0;return u.jsxs(q9,{className:`
    ${i.includes(S.id)?"removing":""}
    ${$?"":"unavailable"}
    ${I?"sold-out":""}
  `,children:[u.jsxs(aC,{onClick:()=>t(`/product/${S.slug??S.id}`),children:[!$&&u.jsx(Mk,{children:"Бронь"})," ",I&&u.jsx(Ik,{children:"Продано"}),u.jsx(Y9,{src:((D=(F=S.images)==null?void 0:F[0])==null?void 0:D.url)||"/nofoto.png",alt:S.name,style:{filter:I?"grayscale(100%)":"none",opacity:I?.55:1},onError:z=>{z.currentTarget.onerror=null,z.currentTarget.src=ur}})]}),u.jsx(X9,{onClick:()=>t(`/product/${S.slug??S.id}`),children:u.jsx("h3",{children:S.name})}),u.jsxs(K9,{children:[u.jsx(hB,{item:S,cartItem:k,user:r,token:n,disabled:I,isSoldOut:I}),u.jsx(Vd,{children:u.jsxs(Wd,{children:[u.jsxs(Ud,{$discount:T,children:[(M*(S.quantity||1)).toLocaleString()," ","грн"]}),T&&u.jsxs(u.Fragment,{children:[u.jsxs(Hd,{children:[(S.price*(S.quantity||1)).toLocaleString()," ","грн"]}),u.jsxs(Gd,{children:["-",j,"%"]})]})]})})]}),u.jsxs(Q9,{children:[u.jsx(J9,{onClick:z=>{I||v(S,z)},disabled:I,style:{background:"none",border:"none",cursor:"pointer",color:"#ccc"},children:u.jsx(Is,{size:22,fill:_?"#ff4d4f":"none",color:_?"#ff4d4f":"#999"})}),u.jsx(Z9,{onClick:()=>b(S),style:{background:"none",border:"none",cursor:"pointer",color:"#000000"},children:u.jsx(Q2,{size:22})})]})]},`${S.id}-${P}`)})}),u.jsxs(eB,{children:[u.jsxs(tB,{children:[u.jsx("span",{children:"Всього в обраному:"}),u.jsxs("strong",{children:[p," шт."]}),u.jsx("span",{children:"На суму:"}),u.jsxs("strong",{children:[h," грн"]})]}),u.jsx(nB,{to:"/checkout",onClick:S=>{p===0&&(S.preventDefault(),X.warning("У кошику немає доступних товарів"))},children:"Оформити замовлення"}),u.jsx(rB,{onClick:C,children:"Oчистити кошик"})]})]})]})})},IB=E.div`
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
`,MB=E.div`
   
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 80px 20px;
  background-color: #fdfaf7;
  text-align: center;
  flex: 1;
`;E.h1`

  font-size: 32px;
  color: #333;
  margin-bottom: 40px;
  font-weight: 600;
 
`;const AB=E.img`
  width: 250px;
  height: auto;
  margin-bottom: 30px;
`;E.h2`
  font-size: 28px;
  color: #333;
  margin-bottom: 10px;
`;const DB=E.p`
  font-size: 18px;
  color: #666;
  margin-bottom: 40px;
`,LB=E.button`
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
`,RB=()=>u.jsxs(u.Fragment,{children:[u.jsxs(IB,{children:[u.jsx(ge,{to:"/",children:"Головна"})," / ",u.jsx(ge,{to:"/favorite",children:"Обране"})," "]}),u.jsxs(MB,{children:[u.jsx(AB,{src:"/sad.png",alt:"Порожній кошик"}),u.jsx(DB,{children:"Ви ще не додали жодного товару в обране"}),u.jsx(LB,{onClick:()=>window.location.href="/Didiv/catalog",children:"Перейти до вибору"})]})]}),FB=()=>{const e=Lt(),t=et(),n=localStorage.getItem("token"),r=JSON.parse(localStorage.getItem("user")),i=Ge(v=>v.favorites.items),[o,a]=x.useState([]),[l,s]=x.useState(!0),[c,d]=x.useState([]),f=Ge(v=>v.cart.items),m=async()=>{localStorage.removeItem("token"),localStorage.removeItem("user"),e(Ls()),e(fr()),a([]),await Bd.purge(),t("/",{replace:!0})};x.useEffect(()=>{(async()=>{if(!n||!r){a(i),s(!1);return}try{const b=await fetch(`https://backenddidiv-production.up.railway.app/api/favorites?filters[user][documentId][$eq]=${r.documentId}&populate[product][populate]=*`,{headers:{Authorization:`Bearer ${n}`}});if(b.status===401){m();return}if(!b.ok)throw new Error("Не вдалося отримати обране");const S=(await b.json()).data.map(P=>P.product).filter(Boolean);a(S)}catch(b){console.error(b),X.error("Не вдалося завантажити обране"),a(i)}finally{s(!1)}})()},[]);const p=()=>{const v=o.filter(b=>b.available!==!1&&b.stock!==0).map(b=>{const C=f.find(_=>_.id===b.id),S=(C==null?void 0:C.quantity)??0,k=Number(b.stock??0)-S;return k<=0?null:{...b,quantity:k}}).filter(Boolean);if(v.length===0){X.error("Усі товари вже в максимальній кількості");return}e(HI(v)),X.success("Додано максимально доступну кількість товарів")},h=o.filter(v=>v.available!==!1&&v.stock!==0).length,y=o.filter(v=>v.available!==!1&&v.stock>0).reduce((v,b)=>v+(b.new_price??b.price)*(b.quantity||1),0),w=async(v,b)=>{b.stopPropagation();const C=o.some(P=>P.documentId===v.documentId);d(P=>[...P,v.id]),await Ti(v,C,e,X)&&C?setTimeout(()=>{a(P=>P.filter(k=>k.documentId!==v.documentId)),d(P=>P.filter(k=>k!==v.id))},300):d(P=>P.filter(k=>k!==v.id))},g=o.length===0;return l?u.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"100vw",height:"100vh"},children:u.jsx(ji,{height:100,width:100,radius:5,color:"var(--orange-color)",ariaLabel:"ball-triangle-loading",wrapperStyle:{},wrapperClass:"",visible:!0})}):u.jsx(u.Fragment,{children:g?u.jsx(RB,{}):u.jsxs(gB,{children:[u.jsx(Un,{autoClose:1500}),u.jsxs(vB,{children:[u.jsx(ge,{to:"/",children:"Головна"})," / ",u.jsx(ge,{to:"/favorite",children:"Обране"})," "," "]}),u.jsx(yB,{children:"Обране"}),u.jsxs(xB,{children:[u.jsx(bB,{children:o.map(v=>{var T,$;const b=v.new_price&&v.new_price<v.price,C=b?v.new_price:v.price,S=(v==null?void 0:v.available)??!0,P=(v==null?void 0:v.stock)===0,k=b?Math.round((v.price-v.new_price)/v.price*100):0,_=async I=>{const M=f.find(F=>F.id===I.id);if((M?M.quantity:0)>=I.stock){X.error(`Вибачте, доступно лише ${I.stock} шт.`);return}await Ho(I,1,e,X)};return u.jsxs(wB,{className:c.includes(v.id)?"removing":"",children:[u.jsxs(SB,{onClick:()=>t(`/product/${v.slug??v.id}`),children:[" ",!S&&u.jsx(Mk,{children:"Бронь"}),P&&u.jsx(Ik,{children:"Продано"}),u.jsx(CB,{src:(($=(T=v.images)==null?void 0:T[0])==null?void 0:$.url)||ur,alt:v.name,style:{filter:P?"grayscale(100%)":"none",opacity:P?.55:1},onError:I=>{I.currentTarget.onerror=null}})]}),u.jsx(EB,{onClick:()=>t(`/product/${v.slug??v.id}`),children:v.name}),u.jsxs(_B,{children:[u.jsx(Vd,{children:u.jsxs(Wd,{children:[u.jsxs(Ud,{$discount:b,children:[(C*(v.quantity||1)).toLocaleString()," ","грн"]}),b&&u.jsxs(u.Fragment,{children:[u.jsxs(Hd,{children:[(v.price*(v.quantity||1)).toLocaleString()," ","грн"]}),u.jsxs(Gd,{children:["-",k,"%"]})]})]})}),u.jsxs(kB,{children:[u.jsx(Zx,{onClick:()=>{P||_(v)},disabled:!S||P,children:u.jsx(Uo,{size:30})}),u.jsx(Zx,{onClick:I=>w(v,I),children:u.jsx(Q2,{size:30})})]})]})]},v.id)})}),u.jsxs(PB,{children:[u.jsxs(OB,{children:[u.jsx("span",{children:"Всього в обраному:"}),u.jsxs("strong",{children:[h," шт."]}),u.jsx("span",{children:"На суму:"}),u.jsxs("strong",{children:[y," грн"]})]}),u.jsx("hr",{style:{border:"0",borderTop:"1px solid #eee",margin:"20px 0"}}),u.jsx(TB,{onClick:()=>p(),children:"Додати все до кошика"})]})]})]})})},zB=E.div`
  background-color: #fdfaf7;
  min-height: 80vh;
  padding-bottom: 60px;
`,NB=E.div`
  padding: 15px 20px;
  font-size: 12px;
  color: #8c8c8c;

  @media screen and (min-width: 768px) {
    padding: 20px 40px;
    font-size: 14px;
  }
`,BB=E.article`
  max-width: 800px; // Обмежуємо ширину для зручного читання тексту
  margin: 0 auto;
  padding: 0 20px;

  @media screen and (min-width: 768px) {
    padding: 0 40px;
  }
`,VB=E.h1`
  font-size: 28px;
  color: #333;
  margin-bottom: 30px;
  font-weight: 600;

  @media screen and (min-width: 768px) {
    font-size: 36px;
    margin-bottom: 40px;
  }
`;E.section`
  margin-bottom: 30px;
`;E.h2`
  font-size: 20px;
  color: #4a332a; // Колір як у футері для акцентів
  margin-bottom: 15px;
  font-weight: 500;
`;E.p`
  font-size: 16px;
  line-height: 1.6;
  color: #555;
  margin-bottom: 15px;
`;E.ul`
  margin-left: 20px;
  margin-bottom: 15px;
  
  li {
    margin-bottom: 8px;
    color: #555;
    line-height: 1.5;
  }
`;const WB=({title:e,children:t,breadcrumbPath:n})=>u.jsxs(zB,{children:[u.jsxs(NB,{children:["Головна / ",n]}),u.jsxs(BB,{children:[u.jsx(VB,{children:e}),t]})]}),Jx=E.section`
  margin-bottom: 30px;

  @media screen and (min-width: 768px) {
    margin-bottom: 40px;
  }
`,eb=E.h2`
  font-size: 20px;
  color: #4a332a;
  margin-bottom: 15px;
  font-weight: 600;

  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`,tb=E.p`
  font-size: 16px;
  line-height: 1.6;
  color: #555;
  margin-bottom: 15px;
`,nb=E.ul`
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
`,UB=()=>u.jsxs(WB,{title:"Оплата і доставка",breadcrumbPath:"Доставка",children:[u.jsxs(Jx,{children:[u.jsx(eb,{children:"Способи доставки"}),u.jsx(tb,{children:"Ми доставляємо замовлення по всій Україні за допомогою:"}),u.jsxs(nb,{children:[u.jsx("li",{children:"Нова Пошта (у відділення або кур1єром)"}),u.jsx("li",{children:"Самовивіз з нашого магазину"}),u.jsx("li",{children:"Укрпошта"})]})]}),u.jsxs(Jx,{children:[u.jsx(eb,{children:"Варіанти оплати"}),u.jsx(tb,{children:"Ви можете обрати зручний для вас спосіб оплати:"}),u.jsxs(nb,{children:[u.jsx("li",{children:"Оплата карткою на сайті (Visa/Mastercard)"}),u.jsx("li",{children:"Післяплата (накладений платіж) при отриманні"}),u.jsx("li",{children:"Безготівковий розрахунок"})]})]})]});function _i(e){"@babel/helpers - typeof";return _i=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},_i(e)}function HB(e,t){if(_i(e)!=="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(_i(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Ak(e){var t=HB(e,"string");return _i(t)==="symbol"?t:String(t)}function Oa(e,t,n){return t=Ak(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function rb(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function ee(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?rb(Object(n),!0).forEach(function(r){Oa(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):rb(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function GB(e){if(Array.isArray(e))return e}function qB(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,i,o,a,l=[],s=!0,c=!1;try{if(o=(n=n.call(e)).next,t===0){if(Object(n)!==n)return;s=!1}else for(;!(s=(r=o.call(n)).done)&&(l.push(r.value),l.length!==t);s=!0);}catch(d){c=!0,i=d}finally{try{if(!s&&n.return!=null&&(a=n.return(),Object(a)!==a))return}finally{if(c)throw i}}return l}}function $m(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Dk(e,t){if(e){if(typeof e=="string")return $m(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return $m(e,t)}}function YB(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ir(e,t){return GB(e)||qB(e,t)||Dk(e,t)||YB()}function XB(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function vr(e,t){if(e==null)return{};var n=XB(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var KB=["defaultInputValue","defaultMenuIsOpen","defaultValue","inputValue","menuIsOpen","onChange","onInputChange","onMenuClose","onMenuOpen","value"];function QB(e){var t=e.defaultInputValue,n=t===void 0?"":t,r=e.defaultMenuIsOpen,i=r===void 0?!1:r,o=e.defaultValue,a=o===void 0?null:o,l=e.inputValue,s=e.menuIsOpen,c=e.onChange,d=e.onInputChange,f=e.onMenuClose,m=e.onMenuOpen,p=e.value,h=vr(e,KB),y=x.useState(l!==void 0?l:n),w=ir(y,2),g=w[0],v=w[1],b=x.useState(s!==void 0?s:i),C=ir(b,2),S=C[0],P=C[1],k=x.useState(p!==void 0?p:a),_=ir(k,2),T=_[0],$=_[1],I=x.useCallback(function(O,A){typeof c=="function"&&c(O,A),$(O)},[c]),M=x.useCallback(function(O,A){var N;typeof d=="function"&&(N=d(O,A)),v(N!==void 0?N:O)},[d]),j=x.useCallback(function(){typeof m=="function"&&m(),P(!0)},[m]),F=x.useCallback(function(){typeof f=="function"&&f(),P(!1)},[f]),D=l!==void 0?l:g,z=s!==void 0?s:S,R=p!==void 0?p:T;return ee(ee({},h),{},{inputValue:D,menuIsOpen:z,onChange:I,onInputChange:M,onMenuClose:F,onMenuOpen:j,value:R})}function ZB(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function ib(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,Ak(r.key),r)}}function JB(e,t,n){return t&&ib(e.prototype,t),n&&ib(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function Im(e,t){return Im=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},Im(e,t)}function eV(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Im(e,t)}function fu(e){return fu=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},fu(e)}function tV(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function nV(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function rV(e,t){if(t&&(_i(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return nV(e)}function iV(e){var t=tV();return function(){var r=fu(e),i;if(t){var o=fu(this).constructor;i=Reflect.construct(r,arguments,o)}else i=r.apply(this,arguments);return rV(this,i)}}function oV(e){if(Array.isArray(e))return $m(e)}function aV(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function sV(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function K0(e){return oV(e)||aV(e)||Dk(e)||sV()}function lV(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}const cV=Math.min,uV=Math.max,pu=Math.round,Cl=Math.floor,hu=e=>({x:e,y:e});function dV(e){const{x:t,y:n,width:r,height:i}=e;return{width:r,height:i,top:n,left:t,right:t+r,bottom:n+i,x:t,y:n}}function qd(){return typeof window<"u"}function Lk(e){return Fk(e)?(e.nodeName||"").toLowerCase():"#document"}function bn(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function Rk(e){var t;return(t=(Fk(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function Fk(e){return qd()?e instanceof Node||e instanceof bn(e).Node:!1}function Mm(e){return qd()?e instanceof Element||e instanceof bn(e).Element:!1}function Q0(e){return qd()?e instanceof HTMLElement||e instanceof bn(e).HTMLElement:!1}function ob(e){return!qd()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof bn(e).ShadowRoot}function zk(e){const{overflow:t,overflowX:n,overflowY:r,display:i}=Z0(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&i!=="inline"&&i!=="contents"}let Tp;function fV(){return Tp==null&&(Tp=typeof CSS<"u"&&CSS.supports&&CSS.supports("-webkit-backdrop-filter","none")),Tp}function pV(e){return/^(html|body|#document)$/.test(Lk(e))}function Z0(e){return bn(e).getComputedStyle(e)}function hV(e){if(Lk(e)==="html")return e;const t=e.assignedSlot||e.parentNode||ob(e)&&e.host||Rk(e);return ob(t)?t.host:t}function Nk(e){const t=hV(e);return pV(t)?e.ownerDocument?e.ownerDocument.body:e.body:Q0(t)&&zk(t)?t:Nk(t)}function mu(e,t,n){var r;t===void 0&&(t=[]),n===void 0&&(n=!0);const i=Nk(e),o=i===((r=e.ownerDocument)==null?void 0:r.body),a=bn(i);if(o){const l=Am(a);return t.concat(a,a.visualViewport||[],zk(i)?i:[],l&&n?mu(l):[])}else return t.concat(i,mu(i,[],n))}function Am(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function mV(e){const t=Z0(e);let n=parseFloat(t.width)||0,r=parseFloat(t.height)||0;const i=Q0(e),o=i?e.offsetWidth:n,a=i?e.offsetHeight:r,l=pu(n)!==o||pu(r)!==a;return l&&(n=o,r=a),{width:n,height:r,$:l}}function J0(e){return Mm(e)?e:e.contextElement}function jp(e){const t=J0(e);if(!Q0(t))return hu(1);const n=t.getBoundingClientRect(),{width:r,height:i,$:o}=mV(t);let a=(o?pu(n.width):n.width)/r,l=(o?pu(n.height):n.height)/i;return(!a||!Number.isFinite(a))&&(a=1),(!l||!Number.isFinite(l))&&(l=1),{x:a,y:l}}const gV=hu(0);function vV(e){const t=bn(e);return!fV()||!t.visualViewport?gV:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function yV(e,t,n){return t===void 0&&(t=!1),!n||t&&n!==bn(e)?!1:t}function ab(e,t,n,r){t===void 0&&(t=!1),n===void 0&&(n=!1);const i=e.getBoundingClientRect(),o=J0(e);let a=hu(1);t&&(r?Mm(r)&&(a=jp(r)):a=jp(e));const l=yV(o,n,r)?vV(o):hu(0);let s=(i.left+l.x)/a.x,c=(i.top+l.y)/a.y,d=i.width/a.x,f=i.height/a.y;if(o){const m=bn(o),p=r&&Mm(r)?bn(r):r;let h=m,y=Am(h);for(;y&&r&&p!==h;){const w=jp(y),g=y.getBoundingClientRect(),v=Z0(y),b=g.left+(y.clientLeft+parseFloat(v.paddingLeft))*w.x,C=g.top+(y.clientTop+parseFloat(v.paddingTop))*w.y;s*=w.x,c*=w.y,d*=w.x,f*=w.y,s+=b,c+=C,h=bn(y),y=Am(h)}}return dV({width:d,height:f,x:s,y:c})}function Bk(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function xV(e,t){let n=null,r;const i=Rk(e);function o(){var l;clearTimeout(r),(l=n)==null||l.disconnect(),n=null}function a(l,s){l===void 0&&(l=!1),s===void 0&&(s=1),o();const c=e.getBoundingClientRect(),{left:d,top:f,width:m,height:p}=c;if(l||t(),!m||!p)return;const h=Cl(f),y=Cl(i.clientWidth-(d+m)),w=Cl(i.clientHeight-(f+p)),g=Cl(d),b={rootMargin:-h+"px "+-y+"px "+-w+"px "+-g+"px",threshold:uV(0,cV(1,s))||1};let C=!0;function S(P){const k=P[0].intersectionRatio;if(k!==s){if(!C)return a();k?a(!1,k):r=setTimeout(()=>{a(!1,1e-7)},1e3)}k===1&&!Bk(c,e.getBoundingClientRect())&&a(),C=!1}try{n=new IntersectionObserver(S,{...b,root:i.ownerDocument})}catch{n=new IntersectionObserver(S,b)}n.observe(e)}return a(!0),o}function bV(e,t,n,r){r===void 0&&(r={});const{ancestorScroll:i=!0,ancestorResize:o=!0,elementResize:a=typeof ResizeObserver=="function",layoutShift:l=typeof IntersectionObserver=="function",animationFrame:s=!1}=r,c=J0(e),d=i||o?[...c?mu(c):[],...t?mu(t):[]]:[];d.forEach(g=>{i&&g.addEventListener("scroll",n,{passive:!0}),o&&g.addEventListener("resize",n)});const f=c&&l?xV(c,n):null;let m=-1,p=null;a&&(p=new ResizeObserver(g=>{let[v]=g;v&&v.target===c&&p&&t&&(p.unobserve(t),cancelAnimationFrame(m),m=requestAnimationFrame(()=>{var b;(b=p)==null||b.observe(t)})),n()}),c&&!s&&p.observe(c),t&&p.observe(t));let h,y=s?ab(e):null;s&&w();function w(){const g=ab(e);y&&!Bk(y,g)&&n(),y=g,h=requestAnimationFrame(w)}return n(),()=>{var g;d.forEach(v=>{i&&v.removeEventListener("scroll",n),o&&v.removeEventListener("resize",n)}),f==null||f(),(g=p)==null||g.disconnect(),p=null,s&&cancelAnimationFrame(h)}}var Dm=x.useLayoutEffect,wV=["className","clearValue","cx","getStyles","getClassNames","getValue","hasValue","isMulti","isRtl","options","selectOption","selectProps","setValue","theme"],gu=function(){};function SV(e,t){return t?t[0]==="-"?e+t:e+"__"+t:e}function CV(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var o=[].concat(r);if(t&&e)for(var a in t)t.hasOwnProperty(a)&&t[a]&&o.push("".concat(SV(e,a)));return o.filter(function(l){return l}).map(function(l){return String(l).trim()}).join(" ")}var sb=function(t){return IV(t)?t.filter(Boolean):_i(t)==="object"&&t!==null?[t]:[]},Vk=function(t){t.className,t.clearValue,t.cx,t.getStyles,t.getClassNames,t.getValue,t.hasValue,t.isMulti,t.isRtl,t.options,t.selectOption,t.selectProps,t.setValue,t.theme;var n=vr(t,wV);return ee({},n)},De=function(t,n,r){var i=t.cx,o=t.getStyles,a=t.getClassNames,l=t.className;return{css:o(n,t),className:i(r??{},a(n,t),l)}};function Yd(e){return[document.documentElement,document.body,window].indexOf(e)>-1}function EV(e){return Yd(e)?window.innerHeight:e.clientHeight}function Wk(e){return Yd(e)?window.pageYOffset:e.scrollTop}function vu(e,t){if(Yd(e)){window.scrollTo(0,t);return}e.scrollTop=t}function _V(e){var t=getComputedStyle(e),n=t.position==="absolute",r=/(auto|scroll)/;if(t.position==="fixed")return document.documentElement;for(var i=e;i=i.parentElement;)if(t=getComputedStyle(i),!(n&&t.position==="static")&&r.test(t.overflow+t.overflowY+t.overflowX))return i;return document.documentElement}function kV(e,t,n,r){return n*((e=e/r-1)*e*e+1)+t}function El(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:200,r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:gu,i=Wk(e),o=t-i,a=10,l=0;function s(){l+=a;var c=kV(l,i,o,n);vu(e,c),l<n?window.requestAnimationFrame(s):r(e)}s()}function lb(e,t){var n=e.getBoundingClientRect(),r=t.getBoundingClientRect(),i=t.offsetHeight/3;r.bottom+i>n.bottom?vu(e,Math.min(t.offsetTop+t.clientHeight-e.offsetHeight+i,e.scrollHeight)):r.top-i<n.top&&vu(e,Math.max(t.offsetTop-i,0))}function PV(e){var t=e.getBoundingClientRect();return{bottom:t.bottom,height:t.height,left:t.left,right:t.right,top:t.top,width:t.width}}function cb(){try{return document.createEvent("TouchEvent"),!0}catch{return!1}}function OV(){try{return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}catch{return!1}}var Uk=!1,TV={get passive(){return Uk=!0}},_l=typeof window<"u"?window:{};_l.addEventListener&&_l.removeEventListener&&(_l.addEventListener("p",gu,TV),_l.removeEventListener("p",gu,!1));var jV=Uk;function $V(e){return e!=null}function IV(e){return Array.isArray(e)}function kl(e,t,n){return e?t:n}var MV=function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];var o=Object.entries(t).filter(function(a){var l=ir(a,1),s=l[0];return!r.includes(s)});return o.reduce(function(a,l){var s=ir(l,2),c=s[0],d=s[1];return a[c]=d,a},{})},AV=["children","innerProps"],DV=["children","innerProps"];function LV(e){var t=e.maxHeight,n=e.menuEl,r=e.minHeight,i=e.placement,o=e.shouldScroll,a=e.isFixedPosition,l=e.controlHeight,s=_V(n),c={placement:"bottom",maxHeight:t};if(!n||!n.offsetParent)return c;var d=s.getBoundingClientRect(),f=d.height,m=n.getBoundingClientRect(),p=m.bottom,h=m.height,y=m.top,w=n.offsetParent.getBoundingClientRect(),g=w.top,v=a?window.innerHeight:EV(s),b=Wk(s),C=parseInt(getComputedStyle(n).marginBottom,10),S=parseInt(getComputedStyle(n).marginTop,10),P=g-S,k=v-y,_=P+b,T=f-b-y,$=p-v+b+C,I=b+y-S,M=160;switch(i){case"auto":case"bottom":if(k>=h)return{placement:"bottom",maxHeight:t};if(T>=h&&!a)return o&&El(s,$,M),{placement:"bottom",maxHeight:t};if(!a&&T>=r||a&&k>=r){o&&El(s,$,M);var j=a?k-C:T-C;return{placement:"bottom",maxHeight:j}}if(i==="auto"||a){var F=t,D=a?P:_;return D>=r&&(F=Math.min(D-C-l,t)),{placement:"top",maxHeight:F}}if(i==="bottom")return o&&vu(s,$),{placement:"bottom",maxHeight:t};break;case"top":if(P>=h)return{placement:"top",maxHeight:t};if(_>=h&&!a)return o&&El(s,I,M),{placement:"top",maxHeight:t};if(!a&&_>=r||a&&P>=r){var z=t;return(!a&&_>=r||a&&P>=r)&&(z=a?P-S:_-S),o&&El(s,I,M),{placement:"top",maxHeight:z}}return{placement:"bottom",maxHeight:t};default:throw new Error('Invalid placement provided "'.concat(i,'".'))}return c}function RV(e){var t={bottom:"top",top:"bottom"};return e?t[e]:"bottom"}var Hk=function(t){return t==="auto"?"bottom":t},FV=function(t,n){var r,i=t.placement,o=t.theme,a=o.borderRadius,l=o.spacing,s=o.colors;return ee((r={label:"menu"},Oa(r,RV(i),"100%"),Oa(r,"position","absolute"),Oa(r,"width","100%"),Oa(r,"zIndex",1),r),n?{}:{backgroundColor:s.neutral0,borderRadius:a,boxShadow:"0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)",marginBottom:l.menuGutter,marginTop:l.menuGutter})},Gk=x.createContext(null),zV=function(t){var n=t.children,r=t.minMenuHeight,i=t.maxMenuHeight,o=t.menuPlacement,a=t.menuPosition,l=t.menuShouldScrollIntoView,s=t.theme,c=x.useContext(Gk)||{},d=c.setPortalPlacement,f=x.useRef(null),m=x.useState(i),p=ir(m,2),h=p[0],y=p[1],w=x.useState(null),g=ir(w,2),v=g[0],b=g[1],C=s.spacing.controlHeight;return Dm(function(){var S=f.current;if(S){var P=a==="fixed",k=l&&!P,_=LV({maxHeight:i,menuEl:S,minHeight:r,placement:o,shouldScroll:k,isFixedPosition:P,controlHeight:C});y(_.maxHeight),b(_.placement),d==null||d(_.placement)}},[i,o,a,l,r,d,C]),n({ref:f,placerProps:ee(ee({},t),{},{placement:v||Hk(o),maxHeight:h})})},NV=function(t){var n=t.children,r=t.innerRef,i=t.innerProps;return J("div",te({},De(t,"menu",{menu:!0}),{ref:r},i),n)},BV=NV,VV=function(t,n){var r=t.maxHeight,i=t.theme.spacing.baseUnit;return ee({maxHeight:r,overflowY:"auto",position:"relative",WebkitOverflowScrolling:"touch"},n?{}:{paddingBottom:i,paddingTop:i})},WV=function(t){var n=t.children,r=t.innerProps,i=t.innerRef,o=t.isMulti;return J("div",te({},De(t,"menuList",{"menu-list":!0,"menu-list--is-multi":o}),{ref:i},r),n)},qk=function(t,n){var r=t.theme,i=r.spacing.baseUnit,o=r.colors;return ee({textAlign:"center"},n?{}:{color:o.neutral40,padding:"".concat(i*2,"px ").concat(i*3,"px")})},UV=qk,HV=qk,GV=function(t){var n=t.children,r=n===void 0?"No options":n,i=t.innerProps,o=vr(t,AV);return J("div",te({},De(ee(ee({},o),{},{children:r,innerProps:i}),"noOptionsMessage",{"menu-notice":!0,"menu-notice--no-options":!0}),i),r)},qV=function(t){var n=t.children,r=n===void 0?"Loading...":n,i=t.innerProps,o=vr(t,DV);return J("div",te({},De(ee(ee({},o),{},{children:r,innerProps:i}),"loadingMessage",{"menu-notice":!0,"menu-notice--loading":!0}),i),r)},YV=function(t){var n=t.rect,r=t.offset,i=t.position;return{left:n.left,position:i,top:r,width:n.width,zIndex:1}},XV=function(t){var n=t.appendTo,r=t.children,i=t.controlElement,o=t.innerProps,a=t.menuPlacement,l=t.menuPosition,s=x.useRef(null),c=x.useRef(null),d=x.useState(Hk(a)),f=ir(d,2),m=f[0],p=f[1],h=x.useMemo(function(){return{setPortalPlacement:p}},[]),y=x.useState(null),w=ir(y,2),g=w[0],v=w[1],b=x.useCallback(function(){if(i){var k=PV(i),_=l==="fixed"?0:window.pageYOffset,T=k[m]+_;(T!==(g==null?void 0:g.offset)||k.left!==(g==null?void 0:g.rect.left)||k.width!==(g==null?void 0:g.rect.width))&&v({offset:T,rect:k})}},[i,l,m,g==null?void 0:g.offset,g==null?void 0:g.rect.left,g==null?void 0:g.rect.width]);Dm(function(){b()},[b]);var C=x.useCallback(function(){typeof c.current=="function"&&(c.current(),c.current=null),i&&s.current&&(c.current=bV(i,s.current,b,{elementResize:"ResizeObserver"in window}))},[i,b]);Dm(function(){C()},[C]);var S=x.useCallback(function(k){s.current=k,C()},[C]);if(!n&&l!=="fixed"||!g)return null;var P=J("div",te({ref:S},De(ee(ee({},t),{},{offset:g.offset,position:l,rect:g.rect}),"menuPortal",{"menu-portal":!0}),o),r);return J(Gk.Provider,{value:h},n?Ru.createPortal(P,n):P)},KV=function(t){var n=t.isDisabled,r=t.isRtl;return{label:"container",direction:r?"rtl":void 0,pointerEvents:n?"none":void 0,position:"relative"}},QV=function(t){var n=t.children,r=t.innerProps,i=t.isDisabled,o=t.isRtl;return J("div",te({},De(t,"container",{"--is-disabled":i,"--is-rtl":o}),r),n)},ZV=function(t,n){var r=t.theme.spacing,i=t.isMulti,o=t.hasValue,a=t.selectProps.controlShouldRenderValue;return ee({alignItems:"center",display:i&&o&&a?"flex":"grid",flex:1,flexWrap:"wrap",WebkitOverflowScrolling:"touch",position:"relative",overflow:"hidden"},n?{}:{padding:"".concat(r.baseUnit/2,"px ").concat(r.baseUnit*2,"px")})},JV=function(t){var n=t.children,r=t.innerProps,i=t.isMulti,o=t.hasValue;return J("div",te({},De(t,"valueContainer",{"value-container":!0,"value-container--is-multi":i,"value-container--has-value":o}),r),n)},eW=function(){return{alignItems:"center",alignSelf:"stretch",display:"flex",flexShrink:0}},tW=function(t){var n=t.children,r=t.innerProps;return J("div",te({},De(t,"indicatorsContainer",{indicators:!0}),r),n)},ub,nW=["size"],rW=["innerProps","isRtl","size"],iW={name:"8mmkcg",styles:"display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0"},Yk=function(t){var n=t.size,r=vr(t,nW);return J("svg",te({height:n,width:n,viewBox:"0 0 20 20","aria-hidden":"true",focusable:"false",css:iW},r))},ev=function(t){return J(Yk,te({size:20},t),J("path",{d:"M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"}))},Xk=function(t){return J(Yk,te({size:20},t),J("path",{d:"M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"}))},Kk=function(t,n){var r=t.isFocused,i=t.theme,o=i.spacing.baseUnit,a=i.colors;return ee({label:"indicatorContainer",display:"flex",transition:"color 150ms"},n?{}:{color:r?a.neutral60:a.neutral20,padding:o*2,":hover":{color:r?a.neutral80:a.neutral40}})},oW=Kk,aW=function(t){var n=t.children,r=t.innerProps;return J("div",te({},De(t,"dropdownIndicator",{indicator:!0,"dropdown-indicator":!0}),r),n||J(Xk,null))},sW=Kk,lW=function(t){var n=t.children,r=t.innerProps;return J("div",te({},De(t,"clearIndicator",{indicator:!0,"clear-indicator":!0}),r),n||J(ev,null))},cW=function(t,n){var r=t.isDisabled,i=t.theme,o=i.spacing.baseUnit,a=i.colors;return ee({label:"indicatorSeparator",alignSelf:"stretch",width:1},n?{}:{backgroundColor:r?a.neutral10:a.neutral20,marginBottom:o*2,marginTop:o*2})},uW=function(t){var n=t.innerProps;return J("span",te({},n,De(t,"indicatorSeparator",{"indicator-separator":!0})))},dW=HM(ub||(ub=lV([`
  0%, 80%, 100% { opacity: 0; }
  40% { opacity: 1; }
`]))),fW=function(t,n){var r=t.isFocused,i=t.size,o=t.theme,a=o.colors,l=o.spacing.baseUnit;return ee({label:"loadingIndicator",display:"flex",transition:"color 150ms",alignSelf:"center",fontSize:i,lineHeight:1,marginRight:i,textAlign:"center",verticalAlign:"middle"},n?{}:{color:r?a.neutral60:a.neutral20,padding:l*2})},$p=function(t){var n=t.delay,r=t.offset;return J("span",{css:f0({animation:"".concat(dW," 1s ease-in-out ").concat(n,"ms infinite;"),backgroundColor:"currentColor",borderRadius:"1em",display:"inline-block",marginLeft:r?"1em":void 0,height:"1em",verticalAlign:"top",width:"1em"},"","")})},pW=function(t){var n=t.innerProps,r=t.isRtl,i=t.size,o=i===void 0?4:i,a=vr(t,rW);return J("div",te({},De(ee(ee({},a),{},{innerProps:n,isRtl:r,size:o}),"loadingIndicator",{indicator:!0,"loading-indicator":!0}),n),J($p,{delay:0,offset:r}),J($p,{delay:160,offset:!0}),J($p,{delay:320,offset:!r}))},hW=function(t,n){var r=t.isDisabled,i=t.isFocused,o=t.theme,a=o.colors,l=o.borderRadius,s=o.spacing;return ee({label:"control",alignItems:"center",cursor:"default",display:"flex",flexWrap:"wrap",justifyContent:"space-between",minHeight:s.controlHeight,outline:"0 !important",position:"relative",transition:"all 100ms"},n?{}:{backgroundColor:r?a.neutral5:a.neutral0,borderColor:r?a.neutral10:i?a.primary:a.neutral20,borderRadius:l,borderStyle:"solid",borderWidth:1,boxShadow:i?"0 0 0 1px ".concat(a.primary):void 0,"&:hover":{borderColor:i?a.primary:a.neutral30}})},mW=function(t){var n=t.children,r=t.isDisabled,i=t.isFocused,o=t.innerRef,a=t.innerProps,l=t.menuIsOpen;return J("div",te({ref:o},De(t,"control",{control:!0,"control--is-disabled":r,"control--is-focused":i,"control--menu-is-open":l}),a,{"aria-disabled":r||void 0}),n)},gW=mW,vW=["data"],yW=function(t,n){var r=t.theme.spacing;return n?{}:{paddingBottom:r.baseUnit*2,paddingTop:r.baseUnit*2}},xW=function(t){var n=t.children,r=t.cx,i=t.getStyles,o=t.getClassNames,a=t.Heading,l=t.headingProps,s=t.innerProps,c=t.label,d=t.theme,f=t.selectProps;return J("div",te({},De(t,"group",{group:!0}),s),J(a,te({},l,{selectProps:f,theme:d,getStyles:i,getClassNames:o,cx:r}),c),J("div",null,n))},bW=function(t,n){var r=t.theme,i=r.colors,o=r.spacing;return ee({label:"group",cursor:"default",display:"block"},n?{}:{color:i.neutral40,fontSize:"75%",fontWeight:500,marginBottom:"0.25em",paddingLeft:o.baseUnit*3,paddingRight:o.baseUnit*3,textTransform:"uppercase"})},wW=function(t){var n=Vk(t);n.data;var r=vr(n,vW);return J("div",te({},De(t,"groupHeading",{"group-heading":!0}),r))},SW=xW,CW=["innerRef","isDisabled","isHidden","inputClassName"],EW=function(t,n){var r=t.isDisabled,i=t.value,o=t.theme,a=o.spacing,l=o.colors;return ee(ee({visibility:r?"hidden":"visible",transform:i?"translateZ(0)":""},_W),n?{}:{margin:a.baseUnit/2,paddingBottom:a.baseUnit/2,paddingTop:a.baseUnit/2,color:l.neutral80})},Qk={gridArea:"1 / 2",font:"inherit",minWidth:"2px",border:0,margin:0,outline:0,padding:0},_W={flex:"1 1 auto",display:"inline-grid",gridArea:"1 / 1 / 2 / 3",gridTemplateColumns:"0 min-content","&:after":ee({content:'attr(data-value) " "',visibility:"hidden",whiteSpace:"pre"},Qk)},kW=function(t){return ee({label:"input",color:"inherit",background:0,opacity:t?0:1,width:"100%"},Qk)},PW=function(t){var n=t.cx,r=t.value,i=Vk(t),o=i.innerRef,a=i.isDisabled,l=i.isHidden,s=i.inputClassName,c=vr(i,CW);return J("div",te({},De(t,"input",{"input-container":!0}),{"data-value":r||""}),J("input",te({className:n({input:!0},s),ref:o,style:kW(l),disabled:a},c)))},OW=PW,TW=function(t,n){var r=t.theme,i=r.spacing,o=r.borderRadius,a=r.colors;return ee({label:"multiValue",display:"flex",minWidth:0},n?{}:{backgroundColor:a.neutral10,borderRadius:o/2,margin:i.baseUnit/2})},jW=function(t,n){var r=t.theme,i=r.borderRadius,o=r.colors,a=t.cropWithEllipsis;return ee({overflow:"hidden",textOverflow:a||a===void 0?"ellipsis":void 0,whiteSpace:"nowrap"},n?{}:{borderRadius:i/2,color:o.neutral80,fontSize:"85%",padding:3,paddingLeft:6})},$W=function(t,n){var r=t.theme,i=r.spacing,o=r.borderRadius,a=r.colors,l=t.isFocused;return ee({alignItems:"center",display:"flex"},n?{}:{borderRadius:o/2,backgroundColor:l?a.dangerLight:void 0,paddingLeft:i.baseUnit,paddingRight:i.baseUnit,":hover":{backgroundColor:a.dangerLight,color:a.danger}})},Zk=function(t){var n=t.children,r=t.innerProps;return J("div",r,n)},IW=Zk,MW=Zk;function AW(e){var t=e.children,n=e.innerProps;return J("div",te({role:"button"},n),t||J(ev,{size:14}))}var DW=function(t){var n=t.children,r=t.components,i=t.data,o=t.innerProps,a=t.isDisabled,l=t.removeProps,s=t.selectProps,c=r.Container,d=r.Label,f=r.Remove;return J(c,{data:i,innerProps:ee(ee({},De(t,"multiValue",{"multi-value":!0,"multi-value--is-disabled":a})),o),selectProps:s},J(d,{data:i,innerProps:ee({},De(t,"multiValueLabel",{"multi-value__label":!0})),selectProps:s},n),J(f,{data:i,innerProps:ee(ee({},De(t,"multiValueRemove",{"multi-value__remove":!0})),{},{"aria-label":"Remove ".concat(n||"option")},l),selectProps:s}))},LW=DW,RW=function(t,n){var r=t.isDisabled,i=t.isFocused,o=t.isSelected,a=t.theme,l=a.spacing,s=a.colors;return ee({label:"option",cursor:"default",display:"block",fontSize:"inherit",width:"100%",userSelect:"none",WebkitTapHighlightColor:"rgba(0, 0, 0, 0)"},n?{}:{backgroundColor:o?s.primary:i?s.primary25:"transparent",color:r?s.neutral20:o?s.neutral0:"inherit",padding:"".concat(l.baseUnit*2,"px ").concat(l.baseUnit*3,"px"),":active":{backgroundColor:r?void 0:o?s.primary:s.primary50}})},FW=function(t){var n=t.children,r=t.isDisabled,i=t.isFocused,o=t.isSelected,a=t.innerRef,l=t.innerProps;return J("div",te({},De(t,"option",{option:!0,"option--is-disabled":r,"option--is-focused":i,"option--is-selected":o}),{ref:a,"aria-disabled":r},l),n)},zW=FW,NW=function(t,n){var r=t.theme,i=r.spacing,o=r.colors;return ee({label:"placeholder",gridArea:"1 / 1 / 2 / 3"},n?{}:{color:o.neutral50,marginLeft:i.baseUnit/2,marginRight:i.baseUnit/2})},BW=function(t){var n=t.children,r=t.innerProps;return J("div",te({},De(t,"placeholder",{placeholder:!0}),r),n)},VW=BW,WW=function(t,n){var r=t.isDisabled,i=t.theme,o=i.spacing,a=i.colors;return ee({label:"singleValue",gridArea:"1 / 1 / 2 / 3",maxWidth:"100%",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},n?{}:{color:r?a.neutral40:a.neutral80,marginLeft:o.baseUnit/2,marginRight:o.baseUnit/2})},UW=function(t){var n=t.children,r=t.isDisabled,i=t.innerProps;return J("div",te({},De(t,"singleValue",{"single-value":!0,"single-value--is-disabled":r}),i),n)},HW=UW,GW={ClearIndicator:lW,Control:gW,DropdownIndicator:aW,DownChevron:Xk,CrossIcon:ev,Group:SW,GroupHeading:wW,IndicatorsContainer:tW,IndicatorSeparator:uW,Input:OW,LoadingIndicator:pW,Menu:BV,MenuList:WV,MenuPortal:XV,LoadingMessage:qV,NoOptionsMessage:GV,MultiValue:LW,MultiValueContainer:IW,MultiValueLabel:MW,MultiValueRemove:AW,Option:zW,Placeholder:VW,SelectContainer:QV,SingleValue:HW,ValueContainer:JV},qW=function(t){return ee(ee({},GW),t.components)},db=Number.isNaN||function(t){return typeof t=="number"&&t!==t};function YW(e,t){return!!(e===t||db(e)&&db(t))}function XW(e,t){if(e.length!==t.length)return!1;for(var n=0;n<e.length;n++)if(!YW(e[n],t[n]))return!1;return!0}function KW(e,t){t===void 0&&(t=XW);var n=null;function r(){for(var i=[],o=0;o<arguments.length;o++)i[o]=arguments[o];if(n&&n.lastThis===this&&t(i,n.lastArgs))return n.lastResult;var a=e.apply(this,i);return n={lastResult:a,lastArgs:i,lastThis:this},a}return r.clear=function(){n=null},r}var QW={name:"7pg0cj-a11yText",styles:"label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap"},ZW=function(t){return J("span",te({css:QW},t))},fb=ZW,JW={guidance:function(t){var n=t.isSearchable,r=t.isMulti,i=t.tabSelectsValue,o=t.context,a=t.isInitialFocus;switch(o){case"menu":return"Use Up and Down to choose options, press Enter to select the currently focused option, press Escape to exit the menu".concat(i?", press Tab to select the option and exit the menu":"",".");case"input":return a?"".concat(t["aria-label"]||"Select"," is focused ").concat(n?",type to refine list":"",", press Down to open the menu, ").concat(r?" press left to focus selected values":""):"";case"value":return"Use left and right to toggle between focused values, press Backspace to remove the currently focused value";default:return""}},onChange:function(t){var n=t.action,r=t.label,i=r===void 0?"":r,o=t.labels,a=t.isDisabled;switch(n){case"deselect-option":case"pop-value":case"remove-value":return"option ".concat(i,", deselected.");case"clear":return"All selected options have been cleared.";case"initial-input-focus":return"option".concat(o.length>1?"s":""," ").concat(o.join(","),", selected.");case"select-option":return a?"option ".concat(i," is disabled. Select another option."):"option ".concat(i,", selected.");default:return""}},onFocus:function(t){var n=t.context,r=t.focused,i=t.options,o=t.label,a=o===void 0?"":o,l=t.selectValue,s=t.isDisabled,c=t.isSelected,d=t.isAppleDevice,f=function(y,w){return y&&y.length?"".concat(y.indexOf(w)+1," of ").concat(y.length):""};if(n==="value"&&l)return"value ".concat(a," focused, ").concat(f(l,r),".");if(n==="menu"&&d){var m=s?" disabled":"",p="".concat(c?" selected":"").concat(m);return"".concat(a).concat(p,", ").concat(f(i,r),".")}return""},onFilter:function(t){var n=t.inputValue,r=t.resultsMessage;return"".concat(r).concat(n?" for search term "+n:"",".")}},eU=function(t){var n=t.ariaSelection,r=t.focusedOption,i=t.focusedValue,o=t.focusableOptions,a=t.isFocused,l=t.selectValue,s=t.selectProps,c=t.id,d=t.isAppleDevice,f=s.ariaLiveMessages,m=s.getOptionLabel,p=s.inputValue,h=s.isMulti,y=s.isOptionDisabled,w=s.isSearchable,g=s.menuIsOpen,v=s.options,b=s.screenReaderStatus,C=s.tabSelectsValue,S=s.isLoading,P=s["aria-label"],k=s["aria-live"],_=x.useMemo(function(){return ee(ee({},JW),f||{})},[f]),T=x.useMemo(function(){var D="";if(n&&_.onChange){var z=n.option,R=n.options,O=n.removedValue,A=n.removedValues,N=n.value,B=function(Z){return Array.isArray(Z)?null:Z},L=O||z||B(N),V=L?m(L):"",W=R||A||void 0,G=W?W.map(m):[],U=ee({isDisabled:L&&y(L,l),label:V,labels:G},n);D=_.onChange(U)}return D},[n,_,y,l,m]),$=x.useMemo(function(){var D="",z=r||i,R=!!(r&&l&&l.includes(r));if(z&&_.onFocus){var O={focused:z,label:m(z),isDisabled:y(z,l),isSelected:R,options:o,context:z===r?"menu":"value",selectValue:l,isAppleDevice:d};D=_.onFocus(O)}return D},[r,i,m,y,_,o,l,d]),I=x.useMemo(function(){var D="";if(g&&v.length&&!S&&_.onFilter){var z=b({count:o.length});D=_.onFilter({inputValue:p,resultsMessage:z})}return D},[o,p,g,_,v,b,S]),M=(n==null?void 0:n.action)==="initial-input-focus",j=x.useMemo(function(){var D="";if(_.guidance){var z=i?"value":g?"menu":"input";D=_.guidance({"aria-label":P,context:z,isDisabled:r&&y(r,l),isMulti:h,isSearchable:w,tabSelectsValue:C,isInitialFocus:M})}return D},[P,r,i,h,y,w,g,_,l,C,M]),F=J(x.Fragment,null,J("span",{id:"aria-selection"},T),J("span",{id:"aria-focused"},$),J("span",{id:"aria-results"},I),J("span",{id:"aria-guidance"},j));return J(x.Fragment,null,J(fb,{id:c},M&&F),J(fb,{"aria-live":k,"aria-atomic":"false","aria-relevant":"additions text",role:"log"},a&&!M&&F))},tU=eU,Lm=[{base:"A",letters:"AⒶＡÀÁÂẦẤẪẨÃĀĂẰẮẴẲȦǠÄǞẢÅǺǍȀȂẠẬẶḀĄȺⱯ"},{base:"AA",letters:"Ꜳ"},{base:"AE",letters:"ÆǼǢ"},{base:"AO",letters:"Ꜵ"},{base:"AU",letters:"Ꜷ"},{base:"AV",letters:"ꜸꜺ"},{base:"AY",letters:"Ꜽ"},{base:"B",letters:"BⒷＢḂḄḆɃƂƁ"},{base:"C",letters:"CⒸＣĆĈĊČÇḈƇȻꜾ"},{base:"D",letters:"DⒹＤḊĎḌḐḒḎĐƋƊƉꝹ"},{base:"DZ",letters:"ǱǄ"},{base:"Dz",letters:"ǲǅ"},{base:"E",letters:"EⒺＥÈÉÊỀẾỄỂẼĒḔḖĔĖËẺĚȄȆẸỆȨḜĘḘḚƐƎ"},{base:"F",letters:"FⒻＦḞƑꝻ"},{base:"G",letters:"GⒼＧǴĜḠĞĠǦĢǤƓꞠꝽꝾ"},{base:"H",letters:"HⒽＨĤḢḦȞḤḨḪĦⱧⱵꞍ"},{base:"I",letters:"IⒾＩÌÍÎĨĪĬİÏḮỈǏȈȊỊĮḬƗ"},{base:"J",letters:"JⒿＪĴɈ"},{base:"K",letters:"KⓀＫḰǨḲĶḴƘⱩꝀꝂꝄꞢ"},{base:"L",letters:"LⓁＬĿĹĽḶḸĻḼḺŁȽⱢⱠꝈꝆꞀ"},{base:"LJ",letters:"Ǉ"},{base:"Lj",letters:"ǈ"},{base:"M",letters:"MⓂＭḾṀṂⱮƜ"},{base:"N",letters:"NⓃＮǸŃÑṄŇṆŅṊṈȠƝꞐꞤ"},{base:"NJ",letters:"Ǌ"},{base:"Nj",letters:"ǋ"},{base:"O",letters:"OⓄＯÒÓÔỒỐỖỔÕṌȬṎŌṐṒŎȮȰÖȪỎŐǑȌȎƠỜỚỠỞỢỌỘǪǬØǾƆƟꝊꝌ"},{base:"OI",letters:"Ƣ"},{base:"OO",letters:"Ꝏ"},{base:"OU",letters:"Ȣ"},{base:"P",letters:"PⓅＰṔṖƤⱣꝐꝒꝔ"},{base:"Q",letters:"QⓆＱꝖꝘɊ"},{base:"R",letters:"RⓇＲŔṘŘȐȒṚṜŖṞɌⱤꝚꞦꞂ"},{base:"S",letters:"SⓈＳẞŚṤŜṠŠṦṢṨȘŞⱾꞨꞄ"},{base:"T",letters:"TⓉＴṪŤṬȚŢṰṮŦƬƮȾꞆ"},{base:"TZ",letters:"Ꜩ"},{base:"U",letters:"UⓊＵÙÚÛŨṸŪṺŬÜǛǗǕǙỦŮŰǓȔȖƯỪỨỮỬỰỤṲŲṶṴɄ"},{base:"V",letters:"VⓋＶṼṾƲꝞɅ"},{base:"VY",letters:"Ꝡ"},{base:"W",letters:"WⓌＷẀẂŴẆẄẈⱲ"},{base:"X",letters:"XⓍＸẊẌ"},{base:"Y",letters:"YⓎＹỲÝŶỸȲẎŸỶỴƳɎỾ"},{base:"Z",letters:"ZⓏＺŹẐŻŽẒẔƵȤⱿⱫꝢ"},{base:"a",letters:"aⓐａẚàáâầấẫẩãāăằắẵẳȧǡäǟảåǻǎȁȃạậặḁąⱥɐ"},{base:"aa",letters:"ꜳ"},{base:"ae",letters:"æǽǣ"},{base:"ao",letters:"ꜵ"},{base:"au",letters:"ꜷ"},{base:"av",letters:"ꜹꜻ"},{base:"ay",letters:"ꜽ"},{base:"b",letters:"bⓑｂḃḅḇƀƃɓ"},{base:"c",letters:"cⓒｃćĉċčçḉƈȼꜿↄ"},{base:"d",letters:"dⓓｄḋďḍḑḓḏđƌɖɗꝺ"},{base:"dz",letters:"ǳǆ"},{base:"e",letters:"eⓔｅèéêềếễểẽēḕḗĕėëẻěȅȇẹệȩḝęḙḛɇɛǝ"},{base:"f",letters:"fⓕｆḟƒꝼ"},{base:"g",letters:"gⓖｇǵĝḡğġǧģǥɠꞡᵹꝿ"},{base:"h",letters:"hⓗｈĥḣḧȟḥḩḫẖħⱨⱶɥ"},{base:"hv",letters:"ƕ"},{base:"i",letters:"iⓘｉìíîĩīĭïḯỉǐȉȋịįḭɨı"},{base:"j",letters:"jⓙｊĵǰɉ"},{base:"k",letters:"kⓚｋḱǩḳķḵƙⱪꝁꝃꝅꞣ"},{base:"l",letters:"lⓛｌŀĺľḷḹļḽḻſłƚɫⱡꝉꞁꝇ"},{base:"lj",letters:"ǉ"},{base:"m",letters:"mⓜｍḿṁṃɱɯ"},{base:"n",letters:"nⓝｎǹńñṅňṇņṋṉƞɲŉꞑꞥ"},{base:"nj",letters:"ǌ"},{base:"o",letters:"oⓞｏòóôồốỗổõṍȭṏōṑṓŏȯȱöȫỏőǒȍȏơờớỡởợọộǫǭøǿɔꝋꝍɵ"},{base:"oi",letters:"ƣ"},{base:"ou",letters:"ȣ"},{base:"oo",letters:"ꝏ"},{base:"p",letters:"pⓟｐṕṗƥᵽꝑꝓꝕ"},{base:"q",letters:"qⓠｑɋꝗꝙ"},{base:"r",letters:"rⓡｒŕṙřȑȓṛṝŗṟɍɽꝛꞧꞃ"},{base:"s",letters:"sⓢｓßśṥŝṡšṧṣṩșşȿꞩꞅẛ"},{base:"t",letters:"tⓣｔṫẗťṭțţṱṯŧƭʈⱦꞇ"},{base:"tz",letters:"ꜩ"},{base:"u",letters:"uⓤｕùúûũṹūṻŭüǜǘǖǚủůűǔȕȗưừứữửựụṳųṷṵʉ"},{base:"v",letters:"vⓥｖṽṿʋꝟʌ"},{base:"vy",letters:"ꝡ"},{base:"w",letters:"wⓦｗẁẃŵẇẅẘẉⱳ"},{base:"x",letters:"xⓧｘẋẍ"},{base:"y",letters:"yⓨｙỳýŷỹȳẏÿỷẙỵƴɏỿ"},{base:"z",letters:"zⓩｚźẑżžẓẕƶȥɀⱬꝣ"}],nU=new RegExp("["+Lm.map(function(e){return e.letters}).join("")+"]","g"),Jk={};for(var Ip=0;Ip<Lm.length;Ip++)for(var Mp=Lm[Ip],Ap=0;Ap<Mp.letters.length;Ap++)Jk[Mp.letters[Ap]]=Mp.base;var eP=function(t){return t.replace(nU,function(n){return Jk[n]})},rU=KW(eP),pb=function(t){return t.replace(/^\s+|\s+$/g,"")},iU=function(t){return"".concat(t.label," ").concat(t.value)},oU=function(t){return function(n,r){if(n.data.__isNew__)return!0;var i=ee({ignoreCase:!0,ignoreAccents:!0,stringify:iU,trim:!0,matchFrom:"any"},t),o=i.ignoreCase,a=i.ignoreAccents,l=i.stringify,s=i.trim,c=i.matchFrom,d=s?pb(r):r,f=s?pb(l(n)):l(n);return o&&(d=d.toLowerCase(),f=f.toLowerCase()),a&&(d=rU(d),f=eP(f)),c==="start"?f.substr(0,d.length)===d:f.indexOf(d)>-1}},aU=["innerRef"];function sU(e){var t=e.innerRef,n=vr(e,aU),r=MV(n,"onExited","in","enter","exit","appear");return J("input",te({ref:t},r,{css:f0({label:"dummyInput",background:0,border:0,caretColor:"transparent",fontSize:"inherit",gridArea:"1 / 1 / 2 / 3",outline:0,padding:0,width:1,color:"transparent",left:-100,opacity:0,position:"relative",transform:"scale(.01)"},"","")}))}var lU=function(t){t.cancelable&&t.preventDefault(),t.stopPropagation()};function cU(e){var t=e.isEnabled,n=e.onBottomArrive,r=e.onBottomLeave,i=e.onTopArrive,o=e.onTopLeave,a=x.useRef(!1),l=x.useRef(!1),s=x.useRef(0),c=x.useRef(null),d=x.useCallback(function(w,g){if(c.current!==null){var v=c.current,b=v.scrollTop,C=v.scrollHeight,S=v.clientHeight,P=c.current,k=g>0,_=C-S-b,T=!1;_>g&&a.current&&(r&&r(w),a.current=!1),k&&l.current&&(o&&o(w),l.current=!1),k&&g>_?(n&&!a.current&&n(w),P.scrollTop=C,T=!0,a.current=!0):!k&&-g>b&&(i&&!l.current&&i(w),P.scrollTop=0,T=!0,l.current=!0),T&&lU(w)}},[n,r,i,o]),f=x.useCallback(function(w){d(w,w.deltaY)},[d]),m=x.useCallback(function(w){s.current=w.changedTouches[0].clientY},[]),p=x.useCallback(function(w){var g=s.current-w.changedTouches[0].clientY;d(w,g)},[d]),h=x.useCallback(function(w){if(w){var g=jV?{passive:!1}:!1;w.addEventListener("wheel",f,g),w.addEventListener("touchstart",m,g),w.addEventListener("touchmove",p,g)}},[p,m,f]),y=x.useCallback(function(w){w&&(w.removeEventListener("wheel",f,!1),w.removeEventListener("touchstart",m,!1),w.removeEventListener("touchmove",p,!1))},[p,m,f]);return x.useEffect(function(){if(t){var w=c.current;return h(w),function(){y(w)}}},[t,h,y]),function(w){c.current=w}}var hb=["boxSizing","height","overflow","paddingRight","position"],mb={boxSizing:"border-box",overflow:"hidden",position:"relative",height:"100%"};function gb(e){e.cancelable&&e.preventDefault()}function vb(e){e.stopPropagation()}function yb(){var e=this.scrollTop,t=this.scrollHeight,n=e+this.offsetHeight;e===0?this.scrollTop=1:n===t&&(this.scrollTop=e-1)}function xb(){return"ontouchstart"in window||navigator.maxTouchPoints}var bb=!!(typeof window<"u"&&window.document&&window.document.createElement),va=0,Ui={capture:!1,passive:!1};function uU(e){var t=e.isEnabled,n=e.accountForScrollbars,r=n===void 0?!0:n,i=x.useRef({}),o=x.useRef(null),a=x.useCallback(function(s){if(bb){var c=document.body,d=c&&c.style;if(r&&hb.forEach(function(h){var y=d&&d[h];i.current[h]=y}),r&&va<1){var f=parseInt(i.current.paddingRight,10)||0,m=document.body?document.body.clientWidth:0,p=window.innerWidth-m+f||0;Object.keys(mb).forEach(function(h){var y=mb[h];d&&(d[h]=y)}),d&&(d.paddingRight="".concat(p,"px"))}c&&xb()&&(c.addEventListener("touchmove",gb,Ui),s&&(s.addEventListener("touchstart",yb,Ui),s.addEventListener("touchmove",vb,Ui))),va+=1}},[r]),l=x.useCallback(function(s){if(bb){var c=document.body,d=c&&c.style;va=Math.max(va-1,0),r&&va<1&&hb.forEach(function(f){var m=i.current[f];d&&(d[f]=m)}),c&&xb()&&(c.removeEventListener("touchmove",gb,Ui),s&&(s.removeEventListener("touchstart",yb,Ui),s.removeEventListener("touchmove",vb,Ui)))}},[r]);return x.useEffect(function(){if(t){var s=o.current;return a(s),function(){l(s)}}},[t,a,l]),function(s){o.current=s}}var dU=function(t){var n=t.target;return n.ownerDocument.activeElement&&n.ownerDocument.activeElement.blur()},fU={name:"1kfdb0e",styles:"position:fixed;left:0;bottom:0;right:0;top:0"};function pU(e){var t=e.children,n=e.lockEnabled,r=e.captureEnabled,i=r===void 0?!0:r,o=e.onBottomArrive,a=e.onBottomLeave,l=e.onTopArrive,s=e.onTopLeave,c=cU({isEnabled:i,onBottomArrive:o,onBottomLeave:a,onTopArrive:l,onTopLeave:s}),d=uU({isEnabled:n}),f=function(p){c(p),d(p)};return J(x.Fragment,null,n&&J("div",{onClick:dU,css:fU}),t(f))}var hU={name:"1a0ro4n-requiredInput",styles:"label:requiredInput;opacity:0;pointer-events:none;position:absolute;bottom:0;left:0;right:0;width:100%"},mU=function(t){var n=t.name,r=t.onFocus;return J("input",{required:!0,name:n,tabIndex:-1,"aria-hidden":"true",onFocus:r,css:hU,value:"",onChange:function(){}})},gU=mU;function tv(e){var t;return typeof window<"u"&&window.navigator!=null?e.test(((t=window.navigator.userAgentData)===null||t===void 0?void 0:t.platform)||window.navigator.platform):!1}function vU(){return tv(/^iPhone/i)}function tP(){return tv(/^Mac/i)}function yU(){return tv(/^iPad/i)||tP()&&navigator.maxTouchPoints>1}function xU(){return vU()||yU()}function bU(){return tP()||xU()}var wU=function(t){return t.label},SU=function(t){return t.label},CU=function(t){return t.value},EU=function(t){return!!t.isDisabled},_U={clearIndicator:sW,container:KV,control:hW,dropdownIndicator:oW,group:yW,groupHeading:bW,indicatorsContainer:eW,indicatorSeparator:cW,input:EW,loadingIndicator:fW,loadingMessage:HV,menu:FV,menuList:VV,menuPortal:YV,multiValue:TW,multiValueLabel:jW,multiValueRemove:$W,noOptionsMessage:UV,option:RW,placeholder:NW,singleValue:WW,valueContainer:ZV},kU={primary:"#2684FF",primary75:"#4C9AFF",primary50:"#B2D4FF",primary25:"#DEEBFF",danger:"#DE350B",dangerLight:"#FFBDAD",neutral0:"hsl(0, 0%, 100%)",neutral5:"hsl(0, 0%, 95%)",neutral10:"hsl(0, 0%, 90%)",neutral20:"hsl(0, 0%, 80%)",neutral30:"hsl(0, 0%, 70%)",neutral40:"hsl(0, 0%, 60%)",neutral50:"hsl(0, 0%, 50%)",neutral60:"hsl(0, 0%, 40%)",neutral70:"hsl(0, 0%, 30%)",neutral80:"hsl(0, 0%, 20%)",neutral90:"hsl(0, 0%, 10%)"},PU=4,nP=4,OU=38,TU=nP*2,jU={baseUnit:nP,controlHeight:OU,menuGutter:TU},Dp={borderRadius:PU,colors:kU,spacing:jU},$U={"aria-live":"polite",backspaceRemovesValue:!0,blurInputOnSelect:cb(),captureMenuScroll:!cb(),classNames:{},closeMenuOnSelect:!0,closeMenuOnScroll:!1,components:{},controlShouldRenderValue:!0,escapeClearsValue:!1,filterOption:oU(),formatGroupLabel:wU,getOptionLabel:SU,getOptionValue:CU,isDisabled:!1,isLoading:!1,isMulti:!1,isRtl:!1,isSearchable:!0,isOptionDisabled:EU,loadingMessage:function(){return"Loading..."},maxMenuHeight:300,minMenuHeight:140,menuIsOpen:!1,menuPlacement:"bottom",menuPosition:"absolute",menuShouldBlockScroll:!1,menuShouldScrollIntoView:!OV(),noOptionsMessage:function(){return"No options"},openMenuOnFocus:!1,openMenuOnClick:!0,options:[],pageSize:5,placeholder:"Select...",screenReaderStatus:function(t){var n=t.count;return"".concat(n," result").concat(n!==1?"s":""," available")},styles:{},tabIndex:0,tabSelectsValue:!0,unstyled:!1};function wb(e,t,n,r){var i=oP(e,t,n),o=aP(e,t,n),a=iP(e,t),l=yu(e,t);return{type:"option",data:t,isDisabled:i,isSelected:o,label:a,value:l,index:r}}function dc(e,t){return e.options.map(function(n,r){if("options"in n){var i=n.options.map(function(a,l){return wb(e,a,t,l)}).filter(function(a){return Cb(e,a)});return i.length>0?{type:"group",data:n,options:i,index:r}:void 0}var o=wb(e,n,t,r);return Cb(e,o)?o:void 0}).filter($V)}function rP(e){return e.reduce(function(t,n){return n.type==="group"?t.push.apply(t,K0(n.options.map(function(r){return r.data}))):t.push(n.data),t},[])}function Sb(e,t){return e.reduce(function(n,r){return r.type==="group"?n.push.apply(n,K0(r.options.map(function(i){return{data:i.data,id:"".concat(t,"-").concat(r.index,"-").concat(i.index)}}))):n.push({data:r.data,id:"".concat(t,"-").concat(r.index)}),n},[])}function IU(e,t){return rP(dc(e,t))}function Cb(e,t){var n=e.inputValue,r=n===void 0?"":n,i=t.data,o=t.isSelected,a=t.label,l=t.value;return(!lP(e)||!o)&&sP(e,{label:a,value:l,data:i},r)}function MU(e,t){var n=e.focusedValue,r=e.selectValue,i=r.indexOf(n);if(i>-1){var o=t.indexOf(n);if(o>-1)return n;if(i<t.length)return t[i]}return null}function AU(e,t){var n=e.focusedOption;return n&&t.indexOf(n)>-1?n:t[0]}var Lp=function(t,n){var r,i=(r=t.find(function(o){return o.data===n}))===null||r===void 0?void 0:r.id;return i||null},iP=function(t,n){return t.getOptionLabel(n)},yu=function(t,n){return t.getOptionValue(n)};function oP(e,t,n){return typeof e.isOptionDisabled=="function"?e.isOptionDisabled(t,n):!1}function aP(e,t,n){if(n.indexOf(t)>-1)return!0;if(typeof e.isOptionSelected=="function")return e.isOptionSelected(t,n);var r=yu(e,t);return n.some(function(i){return yu(e,i)===r})}function sP(e,t,n){return e.filterOption?e.filterOption(t,n):!0}var lP=function(t){var n=t.hideSelectedOptions,r=t.isMulti;return n===void 0?r:n},DU=1,cP=function(e){eV(n,e);var t=iV(n);function n(r){var i;if(ZB(this,n),i=t.call(this,r),i.state={ariaSelection:null,focusedOption:null,focusedOptionId:null,focusableOptionsWithIds:[],focusedValue:null,inputIsHidden:!1,isFocused:!1,selectValue:[],clearFocusValueOnUpdate:!1,prevWasFocused:!1,inputIsHiddenAfterUpdate:void 0,prevProps:void 0,instancePrefix:"",isAppleDevice:!1},i.blockOptionHover=!1,i.isComposing=!1,i.commonProps=void 0,i.initialTouchX=0,i.initialTouchY=0,i.openAfterFocus=!1,i.scrollToFocusedOptionOnUpdate=!1,i.userIsDragging=void 0,i.controlRef=null,i.getControlRef=function(s){i.controlRef=s},i.focusedOptionRef=null,i.getFocusedOptionRef=function(s){i.focusedOptionRef=s},i.menuListRef=null,i.getMenuListRef=function(s){i.menuListRef=s},i.inputRef=null,i.getInputRef=function(s){i.inputRef=s},i.focus=i.focusInput,i.blur=i.blurInput,i.onChange=function(s,c){var d=i.props,f=d.onChange,m=d.name;c.name=m,i.ariaOnChange(s,c),f(s,c)},i.setValue=function(s,c,d){var f=i.props,m=f.closeMenuOnSelect,p=f.isMulti,h=f.inputValue;i.onInputChange("",{action:"set-value",prevInputValue:h}),m&&(i.setState({inputIsHiddenAfterUpdate:!p}),i.onMenuClose()),i.setState({clearFocusValueOnUpdate:!0}),i.onChange(s,{action:c,option:d})},i.selectOption=function(s){var c=i.props,d=c.blurInputOnSelect,f=c.isMulti,m=c.name,p=i.state.selectValue,h=f&&i.isOptionSelected(s,p),y=i.isOptionDisabled(s,p);if(h){var w=i.getOptionValue(s);i.setValue(p.filter(function(g){return i.getOptionValue(g)!==w}),"deselect-option",s)}else if(!y)f?i.setValue([].concat(K0(p),[s]),"select-option",s):i.setValue(s,"select-option");else{i.ariaOnChange(s,{action:"select-option",option:s,name:m});return}d&&i.blurInput()},i.removeValue=function(s){var c=i.props.isMulti,d=i.state.selectValue,f=i.getOptionValue(s),m=d.filter(function(h){return i.getOptionValue(h)!==f}),p=kl(c,m,m[0]||null);i.onChange(p,{action:"remove-value",removedValue:s}),i.focusInput()},i.clearValue=function(){var s=i.state.selectValue;i.onChange(kl(i.props.isMulti,[],null),{action:"clear",removedValues:s})},i.popValue=function(){var s=i.props.isMulti,c=i.state.selectValue,d=c[c.length-1],f=c.slice(0,c.length-1),m=kl(s,f,f[0]||null);d&&i.onChange(m,{action:"pop-value",removedValue:d})},i.getFocusedOptionId=function(s){return Lp(i.state.focusableOptionsWithIds,s)},i.getFocusableOptionsWithIds=function(){return Sb(dc(i.props,i.state.selectValue),i.getElementId("option"))},i.getValue=function(){return i.state.selectValue},i.cx=function(){for(var s=arguments.length,c=new Array(s),d=0;d<s;d++)c[d]=arguments[d];return CV.apply(void 0,[i.props.classNamePrefix].concat(c))},i.getOptionLabel=function(s){return iP(i.props,s)},i.getOptionValue=function(s){return yu(i.props,s)},i.getStyles=function(s,c){var d=i.props.unstyled,f=_U[s](c,d);f.boxSizing="border-box";var m=i.props.styles[s];return m?m(f,c):f},i.getClassNames=function(s,c){var d,f;return(d=(f=i.props.classNames)[s])===null||d===void 0?void 0:d.call(f,c)},i.getElementId=function(s){return"".concat(i.state.instancePrefix,"-").concat(s)},i.getComponents=function(){return qW(i.props)},i.buildCategorizedOptions=function(){return dc(i.props,i.state.selectValue)},i.getCategorizedOptions=function(){return i.props.menuIsOpen?i.buildCategorizedOptions():[]},i.buildFocusableOptions=function(){return rP(i.buildCategorizedOptions())},i.getFocusableOptions=function(){return i.props.menuIsOpen?i.buildFocusableOptions():[]},i.ariaOnChange=function(s,c){i.setState({ariaSelection:ee({value:s},c)})},i.onMenuMouseDown=function(s){s.button===0&&(s.stopPropagation(),s.preventDefault(),i.focusInput())},i.onMenuMouseMove=function(s){i.blockOptionHover=!1},i.onControlMouseDown=function(s){if(!s.defaultPrevented){var c=i.props.openMenuOnClick;i.state.isFocused?i.props.menuIsOpen?s.target.tagName!=="INPUT"&&s.target.tagName!=="TEXTAREA"&&i.onMenuClose():c&&i.openMenu("first"):(c&&(i.openAfterFocus=!0),i.focusInput()),s.target.tagName!=="INPUT"&&s.target.tagName!=="TEXTAREA"&&s.preventDefault()}},i.onDropdownIndicatorMouseDown=function(s){if(!(s&&s.type==="mousedown"&&s.button!==0)&&!i.props.isDisabled){var c=i.props,d=c.isMulti,f=c.menuIsOpen;i.focusInput(),f?(i.setState({inputIsHiddenAfterUpdate:!d}),i.onMenuClose()):i.openMenu("first"),s.preventDefault()}},i.onClearIndicatorMouseDown=function(s){s&&s.type==="mousedown"&&s.button!==0||(i.clearValue(),s.preventDefault(),i.openAfterFocus=!1,s.type==="touchend"?i.focusInput():setTimeout(function(){return i.focusInput()}))},i.onScroll=function(s){typeof i.props.closeMenuOnScroll=="boolean"?s.target instanceof HTMLElement&&Yd(s.target)&&i.props.onMenuClose():typeof i.props.closeMenuOnScroll=="function"&&i.props.closeMenuOnScroll(s)&&i.props.onMenuClose()},i.onCompositionStart=function(){i.isComposing=!0},i.onCompositionEnd=function(){i.isComposing=!1},i.onTouchStart=function(s){var c=s.touches,d=c&&c.item(0);d&&(i.initialTouchX=d.clientX,i.initialTouchY=d.clientY,i.userIsDragging=!1)},i.onTouchMove=function(s){var c=s.touches,d=c&&c.item(0);if(d){var f=Math.abs(d.clientX-i.initialTouchX),m=Math.abs(d.clientY-i.initialTouchY),p=5;i.userIsDragging=f>p||m>p}},i.onTouchEnd=function(s){i.userIsDragging||(i.controlRef&&!i.controlRef.contains(s.target)&&i.menuListRef&&!i.menuListRef.contains(s.target)&&i.blurInput(),i.initialTouchX=0,i.initialTouchY=0)},i.onControlTouchEnd=function(s){i.userIsDragging||i.onControlMouseDown(s)},i.onClearIndicatorTouchEnd=function(s){i.userIsDragging||i.onClearIndicatorMouseDown(s)},i.onDropdownIndicatorTouchEnd=function(s){i.userIsDragging||i.onDropdownIndicatorMouseDown(s)},i.handleInputChange=function(s){var c=i.props.inputValue,d=s.currentTarget.value;i.setState({inputIsHiddenAfterUpdate:!1}),i.onInputChange(d,{action:"input-change",prevInputValue:c}),i.props.menuIsOpen||i.onMenuOpen()},i.onInputFocus=function(s){i.props.onFocus&&i.props.onFocus(s),i.setState({inputIsHiddenAfterUpdate:!1,isFocused:!0}),(i.openAfterFocus||i.props.openMenuOnFocus)&&i.openMenu("first"),i.openAfterFocus=!1},i.onInputBlur=function(s){var c=i.props.inputValue;if(i.menuListRef&&i.menuListRef.contains(document.activeElement)){i.inputRef.focus();return}i.props.onBlur&&i.props.onBlur(s),i.onInputChange("",{action:"input-blur",prevInputValue:c}),i.onMenuClose(),i.setState({focusedValue:null,isFocused:!1})},i.onOptionHover=function(s){if(!(i.blockOptionHover||i.state.focusedOption===s)){var c=i.getFocusableOptions(),d=c.indexOf(s);i.setState({focusedOption:s,focusedOptionId:d>-1?i.getFocusedOptionId(s):null})}},i.shouldHideSelectedOptions=function(){return lP(i.props)},i.onValueInputFocus=function(s){s.preventDefault(),s.stopPropagation(),i.focus()},i.onKeyDown=function(s){var c=i.props,d=c.isMulti,f=c.backspaceRemovesValue,m=c.escapeClearsValue,p=c.inputValue,h=c.isClearable,y=c.isDisabled,w=c.menuIsOpen,g=c.onKeyDown,v=c.tabSelectsValue,b=c.openMenuOnFocus,C=i.state,S=C.focusedOption,P=C.focusedValue,k=C.selectValue;if(!y&&!(typeof g=="function"&&(g(s),s.defaultPrevented))){switch(i.blockOptionHover=!0,s.key){case"ArrowLeft":if(!d||p)return;i.focusValue("previous");break;case"ArrowRight":if(!d||p)return;i.focusValue("next");break;case"Delete":case"Backspace":if(p)return;if(P)i.removeValue(P);else{if(!f)return;d?i.popValue():h&&i.clearValue()}break;case"Tab":if(i.isComposing||s.shiftKey||!w||!v||!S||b&&i.isOptionSelected(S,k))return;i.selectOption(S);break;case"Enter":if(s.keyCode===229)break;if(w){if(!S||i.isComposing)return;i.selectOption(S);break}return;case"Escape":w?(i.setState({inputIsHiddenAfterUpdate:!1}),i.onInputChange("",{action:"menu-close",prevInputValue:p}),i.onMenuClose()):h&&m&&i.clearValue();break;case" ":if(p)return;if(!w){i.openMenu("first");break}if(!S)return;i.selectOption(S);break;case"ArrowUp":w?i.focusOption("up"):i.openMenu("last");break;case"ArrowDown":w?i.focusOption("down"):i.openMenu("first");break;case"PageUp":if(!w)return;i.focusOption("pageup");break;case"PageDown":if(!w)return;i.focusOption("pagedown");break;case"Home":if(!w)return;i.focusOption("first");break;case"End":if(!w)return;i.focusOption("last");break;default:return}s.preventDefault()}},i.state.instancePrefix="react-select-"+(i.props.instanceId||++DU),i.state.selectValue=sb(r.value),r.menuIsOpen&&i.state.selectValue.length){var o=i.getFocusableOptionsWithIds(),a=i.buildFocusableOptions(),l=a.indexOf(i.state.selectValue[0]);i.state.focusableOptionsWithIds=o,i.state.focusedOption=a[l],i.state.focusedOptionId=Lp(o,a[l])}return i}return JB(n,[{key:"componentDidMount",value:function(){this.startListeningComposition(),this.startListeningToTouch(),this.props.closeMenuOnScroll&&document&&document.addEventListener&&document.addEventListener("scroll",this.onScroll,!0),this.props.autoFocus&&this.focusInput(),this.props.menuIsOpen&&this.state.focusedOption&&this.menuListRef&&this.focusedOptionRef&&lb(this.menuListRef,this.focusedOptionRef),bU()&&this.setState({isAppleDevice:!0})}},{key:"componentDidUpdate",value:function(i){var o=this.props,a=o.isDisabled,l=o.menuIsOpen,s=this.state.isFocused;(s&&!a&&i.isDisabled||s&&l&&!i.menuIsOpen)&&this.focusInput(),s&&a&&!i.isDisabled?this.setState({isFocused:!1},this.onMenuClose):!s&&!a&&i.isDisabled&&this.inputRef===document.activeElement&&this.setState({isFocused:!0}),this.menuListRef&&this.focusedOptionRef&&this.scrollToFocusedOptionOnUpdate&&(lb(this.menuListRef,this.focusedOptionRef),this.scrollToFocusedOptionOnUpdate=!1)}},{key:"componentWillUnmount",value:function(){this.stopListeningComposition(),this.stopListeningToTouch(),document.removeEventListener("scroll",this.onScroll,!0)}},{key:"onMenuOpen",value:function(){this.props.onMenuOpen()}},{key:"onMenuClose",value:function(){this.onInputChange("",{action:"menu-close",prevInputValue:this.props.inputValue}),this.props.onMenuClose()}},{key:"onInputChange",value:function(i,o){this.props.onInputChange(i,o)}},{key:"focusInput",value:function(){this.inputRef&&this.inputRef.focus()}},{key:"blurInput",value:function(){this.inputRef&&this.inputRef.blur()}},{key:"openMenu",value:function(i){var o=this,a=this.state,l=a.selectValue,s=a.isFocused,c=this.buildFocusableOptions(),d=i==="first"?0:c.length-1;if(!this.props.isMulti){var f=c.indexOf(l[0]);f>-1&&(d=f)}this.scrollToFocusedOptionOnUpdate=!(s&&this.menuListRef),this.setState({inputIsHiddenAfterUpdate:!1,focusedValue:null,focusedOption:c[d],focusedOptionId:this.getFocusedOptionId(c[d])},function(){return o.onMenuOpen()})}},{key:"focusValue",value:function(i){var o=this.state,a=o.selectValue,l=o.focusedValue;if(this.props.isMulti){this.setState({focusedOption:null});var s=a.indexOf(l);l||(s=-1);var c=a.length-1,d=-1;if(a.length){switch(i){case"previous":s===0?d=0:s===-1?d=c:d=s-1;break;case"next":s>-1&&s<c&&(d=s+1);break}this.setState({inputIsHidden:d!==-1,focusedValue:a[d]})}}}},{key:"focusOption",value:function(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"first",o=this.props.pageSize,a=this.state.focusedOption,l=this.getFocusableOptions();if(l.length){var s=0,c=l.indexOf(a);a||(c=-1),i==="up"?s=c>0?c-1:l.length-1:i==="down"?s=(c+1)%l.length:i==="pageup"?(s=c-o,s<0&&(s=0)):i==="pagedown"?(s=c+o,s>l.length-1&&(s=l.length-1)):i==="last"&&(s=l.length-1),this.scrollToFocusedOptionOnUpdate=!0,this.setState({focusedOption:l[s],focusedValue:null,focusedOptionId:this.getFocusedOptionId(l[s])})}}},{key:"getTheme",value:function(){return this.props.theme?typeof this.props.theme=="function"?this.props.theme(Dp):ee(ee({},Dp),this.props.theme):Dp}},{key:"getCommonProps",value:function(){var i=this.clearValue,o=this.cx,a=this.getStyles,l=this.getClassNames,s=this.getValue,c=this.selectOption,d=this.setValue,f=this.props,m=f.isMulti,p=f.isRtl,h=f.options,y=this.hasValue();return{clearValue:i,cx:o,getStyles:a,getClassNames:l,getValue:s,hasValue:y,isMulti:m,isRtl:p,options:h,selectOption:c,selectProps:f,setValue:d,theme:this.getTheme()}}},{key:"hasValue",value:function(){var i=this.state.selectValue;return i.length>0}},{key:"hasOptions",value:function(){return!!this.getFocusableOptions().length}},{key:"isClearable",value:function(){var i=this.props,o=i.isClearable,a=i.isMulti;return o===void 0?a:o}},{key:"isOptionDisabled",value:function(i,o){return oP(this.props,i,o)}},{key:"isOptionSelected",value:function(i,o){return aP(this.props,i,o)}},{key:"filterOption",value:function(i,o){return sP(this.props,i,o)}},{key:"formatOptionLabel",value:function(i,o){if(typeof this.props.formatOptionLabel=="function"){var a=this.props.inputValue,l=this.state.selectValue;return this.props.formatOptionLabel(i,{context:o,inputValue:a,selectValue:l})}else return this.getOptionLabel(i)}},{key:"formatGroupLabel",value:function(i){return this.props.formatGroupLabel(i)}},{key:"startListeningComposition",value:function(){document&&document.addEventListener&&(document.addEventListener("compositionstart",this.onCompositionStart,!1),document.addEventListener("compositionend",this.onCompositionEnd,!1))}},{key:"stopListeningComposition",value:function(){document&&document.removeEventListener&&(document.removeEventListener("compositionstart",this.onCompositionStart),document.removeEventListener("compositionend",this.onCompositionEnd))}},{key:"startListeningToTouch",value:function(){document&&document.addEventListener&&(document.addEventListener("touchstart",this.onTouchStart,!1),document.addEventListener("touchmove",this.onTouchMove,!1),document.addEventListener("touchend",this.onTouchEnd,!1))}},{key:"stopListeningToTouch",value:function(){document&&document.removeEventListener&&(document.removeEventListener("touchstart",this.onTouchStart),document.removeEventListener("touchmove",this.onTouchMove),document.removeEventListener("touchend",this.onTouchEnd))}},{key:"renderInput",value:function(){var i=this.props,o=i.isDisabled,a=i.isSearchable,l=i.inputId,s=i.inputValue,c=i.tabIndex,d=i.form,f=i.menuIsOpen,m=i.required,p=this.getComponents(),h=p.Input,y=this.state,w=y.inputIsHidden,g=y.ariaSelection,v=this.commonProps,b=l||this.getElementId("input"),C=ee(ee(ee({"aria-autocomplete":"list","aria-expanded":f,"aria-haspopup":!0,"aria-errormessage":this.props["aria-errormessage"],"aria-invalid":this.props["aria-invalid"],"aria-label":this.props["aria-label"],"aria-labelledby":this.props["aria-labelledby"],"aria-required":m,role:"combobox","aria-activedescendant":this.state.isAppleDevice?void 0:this.state.focusedOptionId||""},f&&{"aria-controls":this.getElementId("listbox")}),!a&&{"aria-readonly":!0}),this.hasValue()?(g==null?void 0:g.action)==="initial-input-focus"&&{"aria-describedby":this.getElementId("live-region")}:{"aria-describedby":this.getElementId("placeholder")});return a?x.createElement(h,te({},v,{autoCapitalize:"none",autoComplete:"off",autoCorrect:"off",id:b,innerRef:this.getInputRef,isDisabled:o,isHidden:w,onBlur:this.onInputBlur,onChange:this.handleInputChange,onFocus:this.onInputFocus,spellCheck:"false",tabIndex:c,form:d,type:"text",value:s},C)):x.createElement(sU,te({id:b,innerRef:this.getInputRef,onBlur:this.onInputBlur,onChange:gu,onFocus:this.onInputFocus,disabled:o,tabIndex:c,inputMode:"none",form:d,value:""},C))}},{key:"renderPlaceholderOrValue",value:function(){var i=this,o=this.getComponents(),a=o.MultiValue,l=o.MultiValueContainer,s=o.MultiValueLabel,c=o.MultiValueRemove,d=o.SingleValue,f=o.Placeholder,m=this.commonProps,p=this.props,h=p.controlShouldRenderValue,y=p.isDisabled,w=p.isMulti,g=p.inputValue,v=p.placeholder,b=this.state,C=b.selectValue,S=b.focusedValue,P=b.isFocused;if(!this.hasValue()||!h)return g?null:x.createElement(f,te({},m,{key:"placeholder",isDisabled:y,isFocused:P,innerProps:{id:this.getElementId("placeholder")}}),v);if(w)return C.map(function(_,T){var $=_===S,I="".concat(i.getOptionLabel(_),"-").concat(i.getOptionValue(_));return x.createElement(a,te({},m,{components:{Container:l,Label:s,Remove:c},isFocused:$,isDisabled:y,key:I,index:T,removeProps:{onClick:function(){return i.removeValue(_)},onTouchEnd:function(){return i.removeValue(_)},onMouseDown:function(j){j.preventDefault()}},data:_}),i.formatOptionLabel(_,"value"))});if(g)return null;var k=C[0];return x.createElement(d,te({},m,{data:k,isDisabled:y}),this.formatOptionLabel(k,"value"))}},{key:"renderClearIndicator",value:function(){var i=this.getComponents(),o=i.ClearIndicator,a=this.commonProps,l=this.props,s=l.isDisabled,c=l.isLoading,d=this.state.isFocused;if(!this.isClearable()||!o||s||!this.hasValue()||c)return null;var f={onMouseDown:this.onClearIndicatorMouseDown,onTouchEnd:this.onClearIndicatorTouchEnd,"aria-hidden":"true"};return x.createElement(o,te({},a,{innerProps:f,isFocused:d}))}},{key:"renderLoadingIndicator",value:function(){var i=this.getComponents(),o=i.LoadingIndicator,a=this.commonProps,l=this.props,s=l.isDisabled,c=l.isLoading,d=this.state.isFocused;if(!o||!c)return null;var f={"aria-hidden":"true"};return x.createElement(o,te({},a,{innerProps:f,isDisabled:s,isFocused:d}))}},{key:"renderIndicatorSeparator",value:function(){var i=this.getComponents(),o=i.DropdownIndicator,a=i.IndicatorSeparator;if(!o||!a)return null;var l=this.commonProps,s=this.props.isDisabled,c=this.state.isFocused;return x.createElement(a,te({},l,{isDisabled:s,isFocused:c}))}},{key:"renderDropdownIndicator",value:function(){var i=this.getComponents(),o=i.DropdownIndicator;if(!o)return null;var a=this.commonProps,l=this.props.isDisabled,s=this.state.isFocused,c={onMouseDown:this.onDropdownIndicatorMouseDown,onTouchEnd:this.onDropdownIndicatorTouchEnd,"aria-hidden":"true"};return x.createElement(o,te({},a,{innerProps:c,isDisabled:l,isFocused:s}))}},{key:"renderMenu",value:function(){var i=this,o=this.getComponents(),a=o.Group,l=o.GroupHeading,s=o.Menu,c=o.MenuList,d=o.MenuPortal,f=o.LoadingMessage,m=o.NoOptionsMessage,p=o.Option,h=this.commonProps,y=this.state.focusedOption,w=this.props,g=w.captureMenuScroll,v=w.inputValue,b=w.isLoading,C=w.loadingMessage,S=w.minMenuHeight,P=w.maxMenuHeight,k=w.menuIsOpen,_=w.menuPlacement,T=w.menuPosition,$=w.menuPortalTarget,I=w.menuShouldBlockScroll,M=w.menuShouldScrollIntoView,j=w.noOptionsMessage,F=w.onMenuScrollToTop,D=w.onMenuScrollToBottom;if(!k)return null;var z=function(V,W){var G=V.type,U=V.data,K=V.isDisabled,Z=V.isSelected,se=V.label,ie=V.value,Pe=y===U,qe=K?void 0:function(){return i.onOptionHover(U)},Ye=K?void 0:function(){return i.selectOption(U)},Mi="".concat(i.getElementId("option"),"-").concat(W),Pt={id:Mi,onClick:Ye,onMouseMove:qe,onMouseOver:qe,tabIndex:-1,role:"option","aria-selected":i.state.isAppleDevice?void 0:Z};return x.createElement(p,te({},h,{innerProps:Pt,data:U,isDisabled:K,isSelected:Z,key:Mi,label:se,type:G,value:ie,isFocused:Pe,innerRef:Pe?i.getFocusedOptionRef:void 0}),i.formatOptionLabel(V.data,"menu"))},R;if(this.hasOptions())R=this.getCategorizedOptions().map(function(L){if(L.type==="group"){var V=L.data,W=L.options,G=L.index,U="".concat(i.getElementId("group"),"-").concat(G),K="".concat(U,"-heading");return x.createElement(a,te({},h,{key:U,data:V,options:W,Heading:l,headingProps:{id:K,data:L.data},label:i.formatGroupLabel(L.data)}),L.options.map(function(Z){return z(Z,"".concat(G,"-").concat(Z.index))}))}else if(L.type==="option")return z(L,"".concat(L.index))});else if(b){var O=C({inputValue:v});if(O===null)return null;R=x.createElement(f,h,O)}else{var A=j({inputValue:v});if(A===null)return null;R=x.createElement(m,h,A)}var N={minMenuHeight:S,maxMenuHeight:P,menuPlacement:_,menuPosition:T,menuShouldScrollIntoView:M},B=x.createElement(zV,te({},h,N),function(L){var V=L.ref,W=L.placerProps,G=W.placement,U=W.maxHeight;return x.createElement(s,te({},h,N,{innerRef:V,innerProps:{onMouseDown:i.onMenuMouseDown,onMouseMove:i.onMenuMouseMove},isLoading:b,placement:G}),x.createElement(pU,{captureEnabled:g,onTopArrive:F,onBottomArrive:D,lockEnabled:I},function(K){return x.createElement(c,te({},h,{innerRef:function(se){i.getMenuListRef(se),K(se)},innerProps:{role:"listbox","aria-multiselectable":h.isMulti,id:i.getElementId("listbox")},isLoading:b,maxHeight:U,focusedOption:y}),R)}))});return $||T==="fixed"?x.createElement(d,te({},h,{appendTo:$,controlElement:this.controlRef,menuPlacement:_,menuPosition:T}),B):B}},{key:"renderFormField",value:function(){var i=this,o=this.props,a=o.delimiter,l=o.isDisabled,s=o.isMulti,c=o.name,d=o.required,f=this.state.selectValue;if(d&&!this.hasValue()&&!l)return x.createElement(gU,{name:c,onFocus:this.onValueInputFocus});if(!(!c||l))if(s)if(a){var m=f.map(function(y){return i.getOptionValue(y)}).join(a);return x.createElement("input",{name:c,type:"hidden",value:m})}else{var p=f.length>0?f.map(function(y,w){return x.createElement("input",{key:"i-".concat(w),name:c,type:"hidden",value:i.getOptionValue(y)})}):x.createElement("input",{name:c,type:"hidden",value:""});return x.createElement("div",null,p)}else{var h=f[0]?this.getOptionValue(f[0]):"";return x.createElement("input",{name:c,type:"hidden",value:h})}}},{key:"renderLiveRegion",value:function(){var i=this.commonProps,o=this.state,a=o.ariaSelection,l=o.focusedOption,s=o.focusedValue,c=o.isFocused,d=o.selectValue,f=this.getFocusableOptions();return x.createElement(tU,te({},i,{id:this.getElementId("live-region"),ariaSelection:a,focusedOption:l,focusedValue:s,isFocused:c,selectValue:d,focusableOptions:f,isAppleDevice:this.state.isAppleDevice}))}},{key:"render",value:function(){var i=this.getComponents(),o=i.Control,a=i.IndicatorsContainer,l=i.SelectContainer,s=i.ValueContainer,c=this.props,d=c.className,f=c.id,m=c.isDisabled,p=c.menuIsOpen,h=this.state.isFocused,y=this.commonProps=this.getCommonProps();return x.createElement(l,te({},y,{className:d,innerProps:{id:f,onKeyDown:this.onKeyDown},isDisabled:m,isFocused:h}),this.renderLiveRegion(),x.createElement(o,te({},y,{innerRef:this.getControlRef,innerProps:{onMouseDown:this.onControlMouseDown,onTouchEnd:this.onControlTouchEnd},isDisabled:m,isFocused:h,menuIsOpen:p}),x.createElement(s,te({},y,{isDisabled:m}),this.renderPlaceholderOrValue(),this.renderInput()),x.createElement(a,te({},y,{isDisabled:m}),this.renderClearIndicator(),this.renderLoadingIndicator(),this.renderIndicatorSeparator(),this.renderDropdownIndicator())),this.renderMenu(),this.renderFormField())}}],[{key:"getDerivedStateFromProps",value:function(i,o){var a=o.prevProps,l=o.clearFocusValueOnUpdate,s=o.inputIsHiddenAfterUpdate,c=o.ariaSelection,d=o.isFocused,f=o.prevWasFocused,m=o.instancePrefix,p=i.options,h=i.value,y=i.menuIsOpen,w=i.inputValue,g=i.isMulti,v=sb(h),b={};if(a&&(h!==a.value||p!==a.options||y!==a.menuIsOpen||w!==a.inputValue)){var C=y?IU(i,v):[],S=y?Sb(dc(i,v),"".concat(m,"-option")):[],P=l?MU(o,v):null,k=AU(o,C),_=Lp(S,k);b={selectValue:v,focusedOption:k,focusedOptionId:_,focusableOptionsWithIds:S,focusedValue:P,clearFocusValueOnUpdate:!1}}var T=s!=null&&i!==a?{inputIsHidden:s,inputIsHiddenAfterUpdate:void 0}:{},$=c,I=d&&f;return d&&!I&&($={value:kl(g,v,v[0]||null),options:v,action:"initial-input-focus"},I=!f),(c==null?void 0:c.action)==="initial-input-focus"&&($=null),ee(ee(ee({},b),T),{},{prevProps:i,ariaSelection:$,prevWasFocused:I})}}]),n}(x.Component);cP.defaultProps=$U;var LU=x.forwardRef(function(e,t){var n=QB(e);return x.createElement(cP,te({ref:t},n))}),Xd=LU;const RU=E.div`
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
`,FU=E.label`
  font-size: 14px;
  color: #666;
  margin-bottom: 5px;
`,zU=({cityOptions:e,selectedCity:t,onChange:n,onInputChange:r})=>u.jsxs(RU,{children:[u.jsx(FU,{children:"Місто"}),u.jsx(Xd,{options:e,onInputChange:r,onChange:n,placeholder:"Почніть вводити місто...",value:t,noOptionsMessage:()=>"Введіть назву міста"})]}),NU=E.div`
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
`,BU=E.label`
  font-size: 14px;
  color: #666;
  margin-bottom: 5px;
`,VU=({options:e=[],value:t,onChange:n,selectedCity:r})=>u.jsxs(NU,{children:[u.jsx(BU,{children:"Спосіб доставки"}),u.jsx(Xd,{options:e,placeholder:"Оберіть спосіб доставки...",isDisabled:!r,value:e.find(i=>i.value===t)||null,onChange:i=>n(i.value)})]}),Eb=E.div`
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
`,_b=E.label`
  font-size: 14px;
  color: #666;
  margin-bottom: 5px;
`,WU=({deliveryMethod:e,officeOptions:t,selectedOffice:n,selectedUkrOffice:r,setSelectedOffice:i,setSelectedUkrOffice:o})=>e==="nova"?u.jsxs(Eb,{children:[u.jsx(_b,{children:"Відділення Нової пошти"}),u.jsx(Xd,{options:t,onChange:a=>i(a),value:n,placeholder:"Оберіть відділення..."})]}):e==="ukr"?u.jsxs(Eb,{children:[u.jsx(_b,{children:"Адреса доставки (Укрпошта)"}),u.jsx("input",{type:"text",value:r,onChange:a=>o(a.target.value),placeholder:"Наприклад:  вул. Шевченка, 10, індекс 01001",style:{padding:"8px 12px",border:"1px solid #c6c5c5",borderRadius:"4px",outline:"none"}})]}):null,UU=E.div`
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
`;E.span`
  color: #e74c3c;
  font-size: 11px;
  margin-top: 4px;
  text-align: left;
  font-weight: 500;
`;const HU=E.button`
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
`,GU=E.ul`
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
`,qU=E.li`
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
`,YU=E.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 6px;
  border: 1px solid #eee;
  background-color: #f9f9f9;
`,XU=E.div`
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
`,KU=E.div`
  text-align: center;
  width: 100px;
 
`,QU=E.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 2px;
`,ZU=E.span`
  font-size: 18px;
  font-weight: 600;
  color: ${({$discount:e})=>"#111"};
`,JU=E.span`
  font-size: 13px;
  color: #999;
  text-decoration: line-through;
`,eH=E.span`
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
`,tH=E.div`
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
`;E.h2`
  text-align: left;
  color: #fff;
  font-size: 28px;
  margin-bottom: 30px;
  font-weight: 700;
`;const nH=E.div`
  display: flex;
  flex-direction: column;
  /* gap: 30px; */
  text-align: left;

  @media screen and (min-width: 1200px) {
    flex-direction: row;
    align-items: flex-start;
  }
`,rH=E.div`
  background: #ffffff;
  border-radius: 12px;
  padding: 25px;
  flex: 1;
`;E.form`
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
`;E.div`
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
`;E.label`
  font-size: 14px;
  color: #666;
  margin-bottom: 5px;
`;E.input`
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 16px;
  outline: none;

  &:focus {
    border-color: #f58220; /* Помаранчевий колір з кнопки */
  }
`;E.div`
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
`;E.span`
  color: #e74c3c;
  font-size: 11px;
  margin-top: 4px;
  text-align: left;
  font-weight: 500;
`;E.button`
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
`;E.ul`
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
`;E.li`
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
`;E.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 6px;
  border: 1px solid #eee;
  background-color: #f9f9f9;
`;E.div`
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
`;E.button`
`;const iH=E.div`
  display: flex;
  align-items: center;
  gap: 12px;

  padding: 18px 2px 28px;

  font-size: 16px;
     color: var(--black-color);
`,oH=E.input`
  width: 20px;
  height: 20px;

  accent-color: #5b4637;
  cursor: pointer;

  flex-shrink: 0;
`,aH=E.label`
  font-size: 16px;
  line-height: 1.4;

      color: var(--black-color);
  cursor: pointer;
`,sH=({cartItems:e,totalAmount:t,totalQuantity:n,isFormValid:r,handleSubmit:i,noCall:o,setNoCall:a})=>u.jsxs(UU,{children:[u.jsx("h3",{children:"Ваше замовлення"}),u.jsx(GU,{children:e.map((l,s)=>{var p,h;const c=l.new_price&&l.new_price<l.price,d=c?l.new_price:l.price,f=c?Math.round((l.price-l.new_price)/l.price*100):0,m=l.available!==!1?d*(l.quantity||1):0;return u.jsxs(qU,{children:[u.jsx(YU,{src:((h=(p=l.images)==null?void 0:p[0])==null?void 0:h.url)||ur,alt:l.name}),u.jsxs(XU,{children:[u.jsx("p",{className:"item-name",children:l.name}),u.jsxs("p",{className:"item-details",children:[l.quantity," шт. × ",l.price," грн"]})]}),u.jsx(KU,{children:u.jsxs(QU,{children:[u.jsxs(ZU,{$discount:c,children:[m.toLocaleString()," грн"]}),c&&u.jsxs(u.Fragment,{children:[u.jsxs(JU,{children:[(l.price*(l.quantity||1)).toLocaleString()," грн"]}),u.jsxs(eH,{children:["-",f,"%"]})]})]})})]},`${l.id}-${s}`)})}),u.jsxs("div",{className:"summary-row",children:[u.jsxs("span",{children:["Товари (",n,")"]}),u.jsxs("span",{children:[t," грн"]})]}),u.jsxs("div",{className:"summary-row",children:[u.jsx("span",{children:"Доставка"}),u.jsx("span",{children:"За тарифами перевізника"})]}),u.jsx("hr",{}),u.jsxs("div",{className:"total",children:[u.jsx("span",{children:"Всього до сплати:"}),u.jsxs("span",{children:[t," грн"]})]}),u.jsxs(iH,{children:[u.jsx(oH,{type:"checkbox",id:"noCall",checked:o,onChange:l=>a(l.target.checked)}),u.jsx(aH,{htmlFor:"noCall",children:"Не передзвонювати"})]}),u.jsx(HU,{type:"submit",disabled:!r,onClick:i,style:{opacity:r?1:.5,cursor:r?"pointer":"not-allowed"},children:"Підтвердити замовлення"}),!r&&u.jsx("p",{style:{color:"#888",fontSize:"12px",marginTop:"10px",textAlign:"center"},children:"Заповніть всі поля правильно, щоб продовжити"})]});var uP={exports:{}};function lH(e){return e&&typeof e=="object"&&"default"in e?e.default:e}var Rp=lH(x),cH=Ru;function uH(e,t){for(var n=Object.getOwnPropertyNames(t),r=0;r<n.length;r++){var i=n[r],o=Object.getOwnPropertyDescriptor(t,i);o&&o.configurable&&e[i]===void 0&&Object.defineProperty(e,i,o)}return e}function Rm(){return(Rm=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function dH(e,t){e.prototype=Object.create(t.prototype),uH(e.prototype.constructor=e,t)}function fH(e,t){if(e==null)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],0<=t.indexOf(n)||(i[n]=e[n]);return i}function Hi(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var pH=function(e,t,n,r,i,o,a,l){if(!e){var s;if(t===void 0)s=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var c=[n,r,i,o,a,l],d=0;(s=new Error(t.replace(/%s/g,function(){return c[d++]}))).name="Invariant Violation"}throw s.framesToPop=1,s}},kb=pH;function Pb(e,t,n){if("selectionStart"in e&&"selectionEnd"in e)e.selectionStart=t,e.selectionEnd=n;else{var r=e.createTextRange();r.collapse(!0),r.moveStart("character",t),r.moveEnd("character",n-t),r.select()}}function hH(e){var t=0,n=0;if("selectionStart"in e&&"selectionEnd"in e)t=e.selectionStart,n=e.selectionEnd;else{var r=document.selection.createRange();r.parentElement()===e&&(t=-r.moveStart("character",-e.value.length),n=-r.moveEnd("character",-e.value.length))}return{start:t,end:n,length:n-t}}var mH={9:"[0-9]",a:"[A-Za-z]","*":"[A-Za-z0-9]"},gH="_";function Ob(e,t,n){var r="",i="",o=null,a=[];if(t===void 0&&(t=gH),n==null&&(n=mH),!e||typeof e!="string")return{maskChar:t,formatChars:n,mask:null,prefix:null,lastEditablePosition:null,permanents:[]};var l=!1;return e.split("").forEach(function(s){l=!l&&s==="\\"||(l||!n[s]?(a.push(r.length),r.length===a.length-1&&(i+=s)):o=r.length+1,r+=s,!1)}),{maskChar:t,formatChars:n,prefix:i,mask:r,lastEditablePosition:o,permanents:a}}function qt(e,t){return e.permanents.indexOf(t)!==-1}function Kd(e,t,n){var r=e.mask,i=e.formatChars;if(!n)return!1;if(qt(e,t))return r[t]===n;var o=i[r[t]];return new RegExp(o).test(n)}function Tb(e,t){return t.split("").every(function(n,r){return qt(e,r)||!Kd(e,r,n)})}function Ta(e,t){var n=e.maskChar,r=e.prefix;if(!n){for(;t.length>r.length&&qt(e,t.length-1);)t=t.slice(0,t.length-1);return t.length}for(var i=r.length,o=t.length;o>=r.length;o--){var a=t[o];if(!qt(e,o)&&Kd(e,o,a)){i=o+1;break}}return i}function dP(e,t){return Ta(e,t)===e.mask.length}function Jn(e,t){var n=e.maskChar,r=e.mask,i=e.prefix;if(!n){for((t=Fm(e,"",t,0)).length<i.length&&(t=i);t.length<r.length&&qt(e,t.length);)t+=r[t.length];return t}if(t)return Fm(e,Jn(e,""),t,0);for(var o=0;o<r.length;o++)qt(e,o)?t+=r[o]:t+=n;return t}function vH(e,t,n,r){var i=n+r,o=e.maskChar,a=e.mask,l=e.prefix,s=t.split("");if(o)return s.map(function(d,f){return f<n||i<=f?d:qt(e,f)?a[f]:o}).join("");for(var c=i;c<s.length;c++)qt(e,c)&&(s[c]="");return n=Math.max(l.length,n),s.splice(n,i-n),t=s.join(""),Jn(e,t)}function Fm(e,t,n,r){var i=e.mask,o=e.maskChar,a=e.prefix,l=n.split(""),s=dP(e,t);return!o&&r>t.length&&(t+=i.slice(t.length,r)),l.every(function(c){for(;p=c,qt(e,m=r)&&p!==i[m];){if(r>=t.length&&(t+=i[r]),d=c,f=r,o&&qt(e,f)&&d===o)return!0;if(++r>=i.length)return!1}var d,f,m,p;return!Kd(e,r,c)&&c!==o||(r<t.length?t=o||s||r<a.length?t.slice(0,r)+c+t.slice(r+1):(t=t.slice(0,r)+c+t.slice(r),Jn(e,t)):o||(t+=c),++r<i.length)}),t}function yH(e,t,n,r){var i=e.mask,o=e.maskChar,a=n.split(""),l=r;return a.every(function(s){for(;d=s,qt(e,c=r)&&d!==i[c];)if(++r>=i.length)return!1;var c,d;return(Kd(e,r,s)||s===o)&&r++,r<i.length}),r-l}function xH(e,t){for(var n=t;0<=n;--n)if(!qt(e,n))return n;return null}function qa(e,t){for(var n=e.mask,r=t;r<n.length;++r)if(!qt(e,r))return r;return null}function Fp(e){return e||e===0?e+"":""}function bH(e,t,n,r,i){var o=e.mask,a=e.prefix,l=e.lastEditablePosition,s=t,c="",d=0,f=0,m=Math.min(i.start,n.start);return n.end>i.start?f=(d=yH(e,r,c=s.slice(i.start,n.end),m))?i.length:0:s.length<r.length&&(f=r.length-s.length),s=r,f&&(f===1&&!i.length&&(m=i.start===n.start?qa(e,n.start):xH(e,n.start)),s=vH(e,s,m,f)),s=Fm(e,s,c,m),(m+=d)>=o.length?m=o.length:m<a.length&&!d?m=a.length:m>=a.length&&m<l&&d&&(m=qa(e,m)),c||(c=null),{value:s=Jn(e,s),enteredString:c,selection:{start:m,end:m}}}function wH(){var e=new RegExp("windows","i"),t=new RegExp("phone","i"),n=navigator.userAgent;return e.test(n)&&t.test(n)}function Ot(e){return typeof e=="function"}function SH(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame}function fP(){return window.cancelAnimationFrame||window.webkitCancelRequestAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame}function jb(e){return(fP()?SH():function(){return setTimeout(e,1e3/60)})(e)}function zp(e){(fP()||clearTimeout)(e)}var CH=function(e){function t(r){var i=e.call(this,r)||this;i.focused=!1,i.mounted=!1,i.previousSelection=null,i.selectionDeferId=null,i.saveSelectionLoopDeferId=null,i.saveSelectionLoop=function(){i.previousSelection=i.getSelection(),i.saveSelectionLoopDeferId=jb(i.saveSelectionLoop)},i.runSaveSelectionLoop=function(){i.saveSelectionLoopDeferId===null&&i.saveSelectionLoop()},i.stopSaveSelectionLoop=function(){i.saveSelectionLoopDeferId!==null&&(zp(i.saveSelectionLoopDeferId),i.saveSelectionLoopDeferId=null,i.previousSelection=null)},i.getInputDOMNode=function(){if(!i.mounted)return null;var h=cH.findDOMNode(Hi(Hi(i))),y=typeof window<"u"&&h instanceof window.Element;if(h&&!y)return null;if(h.nodeName!=="INPUT"&&(h=h.querySelector("input")),!h)throw new Error("react-input-mask: inputComponent doesn't contain input node");return h},i.getInputValue=function(){var h=i.getInputDOMNode();return h?h.value:null},i.setInputValue=function(h){var y=i.getInputDOMNode();y&&(i.value=h,y.value=h)},i.setCursorToEnd=function(){var h=Ta(i.maskOptions,i.value),y=qa(i.maskOptions,h);y!==null&&i.setCursorPosition(y)},i.setSelection=function(h,y,w){w===void 0&&(w={});var g=i.getInputDOMNode(),v=i.isFocused();g&&v&&(w.deferred||Pb(g,h,y),i.selectionDeferId!==null&&zp(i.selectionDeferId),i.selectionDeferId=jb(function(){i.selectionDeferId=null,Pb(g,h,y)}),i.previousSelection={start:h,end:y,length:Math.abs(y-h)})},i.getSelection=function(){return hH(i.getInputDOMNode())},i.getCursorPosition=function(){return i.getSelection().start},i.setCursorPosition=function(h){i.setSelection(h,h)},i.isFocused=function(){return i.focused},i.getBeforeMaskedValueChangeConfig=function(){var h=i.maskOptions,y=h.mask,w=h.maskChar,g=h.permanents,v=h.formatChars;return{mask:y,maskChar:w,permanents:g,alwaysShowMask:!!i.props.alwaysShowMask,formatChars:v}},i.isInputAutofilled=function(h,y,w,g){var v=i.getInputDOMNode();try{if(v.matches(":-webkit-autofill"))return!0}catch{}return!i.focused||g.end<w.length&&y.end===h.length},i.onChange=function(h){var y=Hi(Hi(i)).beforePasteState,w=Hi(Hi(i)).previousSelection,g=i.props.beforeMaskedValueChange,v=i.getInputValue(),b=i.value,C=i.getSelection();i.isInputAutofilled(v,C,b,w)&&(b=Jn(i.maskOptions,""),w={start:0,end:0,length:0}),y&&(w=y.selection,b=y.value,C={start:w.start+v.length,end:w.start+v.length,length:0},v=b.slice(0,w.start)+v+b.slice(w.end),i.beforePasteState=null);var S=bH(i.maskOptions,v,C,b,w),P=S.enteredString,k=S.selection,_=S.value;if(Ot(g)){var T=g({value:_,selection:k},{value:b,selection:w},P,i.getBeforeMaskedValueChangeConfig());_=T.value,k=T.selection}i.setInputValue(_),Ot(i.props.onChange)&&i.props.onChange(h),i.isWindowsPhoneBrowser?i.setSelection(k.start,k.end,{deferred:!0}):i.setSelection(k.start,k.end)},i.onFocus=function(h){var y=i.props.beforeMaskedValueChange,w=i.maskOptions,g=w.mask,v=w.prefix;if(i.focused=!0,i.mounted=!0,g){if(i.value)Ta(i.maskOptions,i.value)<i.maskOptions.mask.length&&i.setCursorToEnd();else{var b=Jn(i.maskOptions,v),C=Jn(i.maskOptions,b),S=Ta(i.maskOptions,C),P=qa(i.maskOptions,S),k={start:P,end:P};if(Ot(y)){var _=y({value:C,selection:k},{value:i.value,selection:null},null,i.getBeforeMaskedValueChangeConfig());C=_.value,k=_.selection}var T=C!==i.getInputValue();T&&i.setInputValue(C),T&&Ot(i.props.onChange)&&i.props.onChange(h),i.setSelection(k.start,k.end)}i.runSaveSelectionLoop()}Ot(i.props.onFocus)&&i.props.onFocus(h)},i.onBlur=function(h){var y=i.props.beforeMaskedValueChange,w=i.maskOptions.mask;if(i.stopSaveSelectionLoop(),i.focused=!1,w&&!i.props.alwaysShowMask&&Tb(i.maskOptions,i.value)){var g="";Ot(y)&&(g=y({value:g,selection:null},{value:i.value,selection:i.previousSelection},null,i.getBeforeMaskedValueChangeConfig()).value);var v=g!==i.getInputValue();v&&i.setInputValue(g),v&&Ot(i.props.onChange)&&i.props.onChange(h)}Ot(i.props.onBlur)&&i.props.onBlur(h)},i.onMouseDown=function(h){if(!i.focused&&document.addEventListener){i.mouseDownX=h.clientX,i.mouseDownY=h.clientY,i.mouseDownTime=new Date().getTime();var y=function w(g){if(document.removeEventListener("mouseup",w),i.focused){var v=Math.abs(g.clientX-i.mouseDownX),b=Math.abs(g.clientY-i.mouseDownY),C=Math.max(v,b),S=new Date().getTime()-i.mouseDownTime;(C<=10&&S<=200||C<=5&&S<=300)&&i.setCursorToEnd()}};document.addEventListener("mouseup",y)}Ot(i.props.onMouseDown)&&i.props.onMouseDown(h)},i.onPaste=function(h){Ot(i.props.onPaste)&&i.props.onPaste(h),h.defaultPrevented||(i.beforePasteState={value:i.getInputValue(),selection:i.getSelection()},i.setInputValue(""))},i.handleRef=function(h){i.props.children==null&&Ot(i.props.inputRef)&&i.props.inputRef(h)};var o=r.mask,a=r.maskChar,l=r.formatChars,s=r.alwaysShowMask,c=r.beforeMaskedValueChange,d=r.defaultValue,f=r.value;i.maskOptions=Ob(o,a,l),d==null&&(d=""),f==null&&(f=d);var m=Fp(f);if(i.maskOptions.mask&&(s||m)&&(m=Jn(i.maskOptions,m),Ot(c))){var p=r.value;r.value==null&&(p=d),m=c({value:m,selection:null},{value:p=Fp(p),selection:null},null,i.getBeforeMaskedValueChangeConfig()).value}return i.value=m,i}dH(t,e);var n=t.prototype;return n.componentDidMount=function(){this.mounted=!0,this.getInputDOMNode()&&(this.isWindowsPhoneBrowser=wH(),this.maskOptions.mask&&this.getInputValue()!==this.value&&this.setInputValue(this.value))},n.componentDidUpdate=function(){var r=this.previousSelection,i=this.props,o=i.beforeMaskedValueChange,a=i.alwaysShowMask,l=i.mask,s=i.maskChar,c=i.formatChars,d=this.maskOptions,f=a||this.isFocused(),m=this.props.value!=null,p=m?Fp(this.props.value):this.value,h=r?r.start:null;if(this.maskOptions=Ob(l,s,c),this.maskOptions.mask){!d.mask&&this.isFocused()&&this.runSaveSelectionLoop();var y=this.maskOptions.mask&&this.maskOptions.mask!==d.mask;if(d.mask||m||(p=this.getInputValue()),(y||this.maskOptions.mask&&(p||f))&&(p=Jn(this.maskOptions,p)),y){var w=Ta(this.maskOptions,p);(h===null||w<h)&&(h=dP(this.maskOptions,p)?w:qa(this.maskOptions,w))}!this.maskOptions.mask||!Tb(this.maskOptions,p)||f||m&&this.props.value||(p="");var g={start:h,end:h};if(Ot(o)){var v=o({value:p,selection:g},{value:this.value,selection:this.previousSelection},null,this.getBeforeMaskedValueChangeConfig());p=v.value,g=v.selection}this.value=p;var b=this.getInputValue()!==this.value;b?(this.setInputValue(this.value),this.forceUpdate()):y&&this.forceUpdate();var C=!1;g.start!=null&&g.end!=null&&(C=!r||r.start!==g.start||r.end!==g.end),(C||b)&&this.setSelection(g.start,g.end)}else d.mask&&(this.stopSaveSelectionLoop(),this.forceUpdate())},n.componentWillUnmount=function(){this.mounted=!1,this.selectionDeferId!==null&&zp(this.selectionDeferId),this.stopSaveSelectionLoop()},n.render=function(){var r,i=this.props,o=(i.mask,i.alwaysShowMask,i.maskChar,i.formatChars,i.inputRef,i.beforeMaskedValueChange,i.children),a=fH(i,["mask","alwaysShowMask","maskChar","formatChars","inputRef","beforeMaskedValueChange","children"]);if(o){Ot(o)||kb(!1);var l=["onChange","onPaste","onMouseDown","onFocus","onBlur","value","disabled","readOnly"],s=Rm({},a);l.forEach(function(d){return delete s[d]}),r=o(s),l.filter(function(d){return r.props[d]!=null&&r.props[d]!==a[d]}).length&&kb(!1)}else r=Rp.createElement("input",Rm({ref:this.handleRef},a));var c={onFocus:this.onFocus,onBlur:this.onBlur};return this.maskOptions.mask&&(a.disabled||a.readOnly||(c.onChange=this.onChange,c.onPaste=this.onPaste,c.onMouseDown=this.onMouseDown),a.value!=null&&(c.value=this.value)),r=Rp.cloneElement(r,c)},t}(Rp.Component),EH=CH;uP.exports=EH;var _H=uP.exports;const kH=Ro(_H);E.div`
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
`;E.h2`
  text-align: left;
  color: #fff;
  font-size: 28px;
  margin-bottom: 30px;
  font-weight: 700;
`;E.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  text-align: left;

  @media screen and (min-width: 1200px) {
    flex-direction: row;
    align-items: flex-start;
  }
`;E.div`
  background: #ffffff;
  border-radius: 12px;
  padding: 25px;
  flex: 1;
`;E.form`
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
`;const Np=E.div`
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
`,Bp=E.label`
  font-size: 14px;
  color: #666;
  margin-bottom: 5px;
`,Vp=E.input`
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 16px;
  outline: none;

  &:focus {
    border-color: #f58220; /* Помаранчевий колір з кнопки */
  }
`;E.div`
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
`;const Wp=E.span`
  color: #e74c3c;
  font-size: 11px;
  margin-top: 4px;
  text-align: left;
  font-weight: 500;
`;E.button`
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
`;E.ul`
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
`;E.li`
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
`;E.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 6px;
  border: 1px solid #eee;
  background-color: #f9f9f9;
`;E.div`
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
`;const PH=({formData:e,setFormData:t,errors:n})=>{const r=i=>{const{name:o,value:a}=i.target;o==="phone"&&!a.startsWith("+38 (0")||t(l=>({...l,[o]:a}))};return u.jsxs(u.Fragment,{children:[u.jsx("h3",{children:"Контактні дані"}),u.jsxs(Np,{children:[u.jsx(Bp,{children:"Прізвище та ім’я"}),u.jsx(Vp,{type:"text",name:"fullName",value:e.fullName,onChange:r,placeholder:"Прізвище Ім'я",autoComplete:"name"}),n.fullName&&u.jsx(Wp,{children:n.fullName})]}),u.jsxs(Np,{children:[u.jsx(Bp,{children:"Номер телефону"}),u.jsx(kH,{mask:"+38 (099) 999-99-99",maskChar:"_",name:"phone",autoComplete:"tel",value:e.phone,onChange:r,children:i=>u.jsx(Vp,{...i,type:"tel"})}),n.phone&&u.jsx(Wp,{children:n.phone})]}),u.jsxs(Np,{children:[u.jsx(Bp,{children:"E-mail"}),u.jsx(Vp,{type:"email",name:"email",value:e.email,onChange:r,placeholder:"email@example.com",autoComplete:"email"}),n.email&&u.jsx(Wp,{children:n.email})]})]})},OH=({options:e,value:t,onChange:n,error:r})=>{const i=e.find(o=>o.value===t)||null;return u.jsxs("div",{style:{marginBottom:"20px"},children:[u.jsx("label",{style:{display:"block",marginBottom:"8px"},children:"Спосіб оплати"}),u.jsx(Xd,{options:e,value:i,onChange:o=>n(o==null?void 0:o.value),placeholder:"Оберіть спосіб оплати",styles:{control:o=>({...o,borderColor:r?"red":o.borderColor})}}),r&&u.jsx("span",{style:{color:"red",fontSize:"12px"},children:"Оберіть спосіб оплати"})]})},TH=e=>{if(!e)return"";const t=e.replace(/\D/g,"");return t.length!==10?e:`+38 (${t.slice(0,3)}) ${t.slice(3,6)}-${t.slice(6,8)}-${t.slice(8,10)}`},$b=async(e,t,n)=>{if(!(e!=null&&e.documentId)||!t)return;const r=await fetch(`https://backenddidiv-production.up.railway.app/api/cart-items?filters[user][documentId][$eq]=${e.documentId}`,{headers:{Authorization:`Bearer ${t}`}});if(!r.ok)throw new Error("Не вдалося отримати кошик");const{data:i}=await r.json();await Promise.all(i.map(o=>fetch(`https://backenddidiv-production.up.railway.app/api/cart-items/${o.documentId}`,{method:"DELETE",headers:{Authorization:`Bearer ${t}`}}))),n(fr())},Ib={}.VITE_NP_API_KEY,Mb="https://api.novaposhta.ua/v2.0/json/",jH=()=>{const e=Ge(L=>L.cart.items),t=et(),n=Lt(),r=localStorage.getItem("token"),i=x.useMemo(()=>{const L=localStorage.getItem("user");return L?JSON.parse(L):null},[]),[o,a]=x.useState({fullName:"",phone:"+38(0",email:"",city:"",postOffice:""}),[l,s]=x.useState(""),[c,d]=x.useState(null),[f,m]=x.useState(null),[p,h]=x.useState(null),[y,w]=x.useState(null),[g,v]=x.useState([]),[b,C]=x.useState([]),[S,P]=x.useState(null),[k,_]=x.useState(!1),T=x.useRef(!1);x.useEffect(()=>{!i||T.current||(T.current=!0,a({fullName:`${i.last_name||""} ${i.first_name||""}`.trim(),phone:TH(i.phone),email:i.email||""}))},[i]);const $=e.filter(L=>L.available!==!1&&L.stock!==0).reduce((L,V)=>L+(V.new_price??V.price)*V.quantity,0),I=e.filter(L=>L.available!==!1&&L.stock!==0),M=e.filter(L=>L.available!==!1&&L.stock!==0).reduce((L,V)=>L+V.quantity,0),F=(()=>{const L=new Date().getFullYear().toString().slice(-2),V=Date.now().toString().slice(-4),W=Math.floor(100+Math.random()*900);return`${L}${V}${W}`})();x.useEffect(()=>{if(l.length<2)return;const L=setTimeout(async()=>{try{const V=await fetch(Mb,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({apiKey:Ib,modelName:"Address",calledMethod:"getCities",methodProperties:{FindByString:l}})});if(!V.ok)throw new Error(`HTTP помилка: ${V.status}`);const W=await V.json();W.success&&Array.isArray(W.data)?v(W.data.map(G=>({value:G.Ref,label:G.Description}))):(console.warn("API Нової Пошти повернуло помилку або порожній список міст:",W.errors),v([]))}catch(V){console.error("Не вдалося завантажити міста:",V)}},500);return()=>clearTimeout(L)},[l]),x.useEffect(()=>{if(!c||f!=="nova")return;(async()=>{try{const V=await fetch(Mb,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({apiKey:Ib,modelName:"AddressGeneral",calledMethod:"getWarehouses",methodProperties:{CityRef:c.value}})});if(!V.ok)throw new Error(`HTTP помилка: ${V.status}`);const W=await V.json();W.success&&Array.isArray(W.data)?C(W.data.map(G=>({value:G.Ref,label:G.Description}))):(console.warn("API Нової Пошти повернуло помилку або порожній список відділень:",W.errors),C([]))}catch(V){console.error("Не вдалося завантажити відділення Нової Пошти:",V)}})()},[c,f]);const D=L=>{d(L),a(V=>({...V,city:(L==null?void 0:L.label)||"",postOffice:""})),m(null),h(null),w(null)},z=()=>{const L={};return o.fullName.trim().split(" ").length<2&&(L.fullName="Введіть прізвище та ім'я"),/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(o.email)||(L.email="Некоректний email"),o.phone.replace(/\D/g,"").length<12&&(L.phone="Номер неповний"),c||(L.city=!0),f==="nova"&&!p&&(L.postOffice=!0),f==="ukr"&&!y&&(L.postOffice=!0),f||(L.delivery=!0),S||(L.payment=!0),L},R=x.useMemo(z,[o,f,p,y,c,S]),O=Object.keys(R).length===0&&e.length>0,A=async L=>{if(L.preventDefault(),!S){alert("Оберіть спосіб оплати");return}const V={"Content-Type":"application/json"};r&&(V.Authorization=`Bearer ${r}`);try{if(!(await fetch("https://backenddidiv-production.up.railway.app/api/orders",{method:"POST",headers:V,body:JSON.stringify({data:{name:o.fullName,phone:o.phone,email:o.email,city:o.city,date:new Date().toISOString(),products:e==null?void 0:e.map(U=>{var K;return{id:U==null?void 0:U.id,name:U==null?void 0:U.name,quantity:U==null?void 0:U.quantity,price:(U==null?void 0:U.new_price)??U.price,image:(K=U==null?void 0:U.images)==null?void 0:K[0].url,slug:U==null?void 0:U.slug}}),status_order:"pending",order_number:F,no_call:k,...(i==null?void 0:i.documentId)&&{user:i.documentId},payment_method:S==="liqpay"?"Онлайн (LiqPay)":S==="cod"?"Післяплата":S==="bank_transfer"?"Оплата за реквізитами":"",delivery_method:f==="nova"?"Нова Пошта":f==="ukr"?"УкрПошта":"Самовивіз",delivery_address:f==="nova"?p==null?void 0:p.label:f==="ukr"?y:"Самовивіз"}})})).ok)throw new Error("Не вдалося створити замовлення");for(const U of e){const K=Math.max(0,U.stock-U.quantity);(await fetch(`https://backenddidiv-production.up.railway.app/api/products/${U.documentId}`,{method:"PUT",headers:{"Content-Type":"application/json",...r&&{Authorization:`Bearer ${r}`}},body:JSON.stringify({data:{stock:K,...K===0&&{sold_date:new Date().toISOString()}}})})).ok||console.error(`Не вдалося оновити stock товару ${U.name}`)}if(S==="liqpay"){const U=await fetch("https://backenddidiv-production.up.railway.app/api/liqpay/create",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({amount:$,order_number:F})}),{data:K,signature:Z}=await U.json();await $b(i,r,n);const se=document.createElement("form");se.method="POST",se.action="https://www.liqpay.ua/api/3/checkout",se.innerHTML=`
        <input type="hidden" name="data" value="${K}" />
        <input type="hidden" name="signature" value="${Z}" />
      `,document.body.appendChild(se),se.requestSubmit();return}const G={...o,name:o.fullName,city:c.label,deliveryMethod:f==="nova"?"Нова Пошта":f==="ukr"?"УкрПошта":"Самовивіз",address:f==="nova"?p==null?void 0:p.label:f==="ukr"?y:"Самовивіз",products:e==null?void 0:e.map(U=>({id:U.id,name:U.name,quantity:U.quantity,price:U.new_price??U.price})),total:$,order_number:F,delivery_address:f==="nova"?p==null?void 0:p.label:f==="ukr"?y:"Самовивіз",payment_method:S==="liqpay"?"Онлайн (LiqPay)":S==="cod"?"Післяплата":S==="bank_transfer"?"Оплата за реквізитами":""};await $b(i,r,n),t("/order-confirmation",{state:{order:G}})}catch(W){console.error(W),alert("Помилка оформлення")}},N=x.useMemo(()=>[{value:"nova",label:"Нова пошта"},{value:"ukr",label:"Укрпошта"}],[]),B=[{value:"liqpay",label:"Онлайн оплата (LiqPay)"},{value:"cod",label:"Післяплата"},{value:"bank_transfer",label:"Оплата за реквізитами"}];return u.jsx(tH,{children:u.jsxs(nH,{children:[u.jsxs(rH,{children:[u.jsx(PH,{formData:o,setFormData:a,errors:R}),u.jsx(zU,{cityOptions:g,selectedCity:c,onChange:D,onInputChange:s}),u.jsx(VU,{options:N,value:f,onChange:m,selectedCity:c}),u.jsx(WU,{deliveryMethod:f,officeOptions:b,selectedOffice:p,selectedUkrOffice:y,setSelectedOffice:h,setSelectedUkrOffice:w}),u.jsx(OH,{options:B,value:S,onChange:P,error:R.payment})]}),u.jsx(sH,{cartItems:I,totalAmount:$,totalQuantity:M,isFormValid:O,handleSubmit:A,setNoCall:_,noCall:k})]})})},$H=E.div`
font-family: var(--main-font);
  max-width: 800px;
  margin: 40px auto;
  padding: 40px 20px;
  background: #ffffff;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  text-align: center;
  font-family: 'Inter', sans-serif;
`,IH=E.h1`
font-family: var(--second-font);
  color: var(--orange-color); 
  font-size: 28px;
  font-weight: 800;
  margin-bottom: 16px;
`,Qr=E.p`
font-family: var(--second-font);
  font-size: 16px;
  color: #555;
  line-height: 1.6;
  margin-bottom: 8px;

  strong {
    color: #1a1a1a;
  }
`,MH=E.div`
font-family: var(--second-font);
  background: #f8f9fa;
  border-radius: 12px;
  padding: 24px;
  margin: 30px 0;
  text-align: left;
  border: 1px solid #edf2f7;
`,AH=E.h3`
  font-size: 18px;
  font-weight: 500;
  color: #1a1a1a;
  margin-bottom: 16px;
  border-bottom: 2px solid #e2e8f0;
  padding-bottom: 8px;
`,DH=E.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 20px;
`,LH=E.li`
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
`;E.div`
  background: #fff4e5; 
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 30px;
  border: 1px solid #ffe3c1;
`;const RH=E.div`
  display: flex;
  gap: 15px;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 20px;
`,Ab=E.button`
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
`,FH=()=>{var m,p;const e=et(),t=Wn(),[n]=vw(),r=Lt(),i=(m=t.state)==null?void 0:m.order,o=n.get("orderId"),[a,l]=x.useState(i||null),[s,c]=x.useState(!i);x.useEffect(()=>{r(fr())},[r]),x.useEffect(()=>{i||(o?fetch(`https://backenddidiv-production.up.railway.app/api/orders?filters[order_number][$eq]=${o}&populate=*`).then(h=>h.json()).then(h=>{var y;((y=h.data)==null?void 0:y.length)>0&&l(h.data[0]),c(!1)}).catch(()=>c(!1)):c(!1))},[o,i]);const f=((a==null?void 0:a.products)??[]).reduce((h,y)=>h+Number(y.new_price??y.price)*(y.quantity||1),0);return s?u.jsx("div",{children:"Завантаження..."}):a?u.jsxs($H,{children:[u.jsx(IH,{children:"Дякуємо за ваше замовлення!"}),u.jsxs(Qr,{children:["Ваше замовлення ",u.jsxs("strong",{children:["№",a.order_number]})," успішно прийняте."]}),u.jsx(Qr,{children:"Ми зв’яжемось з Вами в найближчий час"}),u.jsxs(MH,{children:[u.jsx(AH,{children:"Деталі замовлення:"}),u.jsx(DH,{children:(p=a.products)==null?void 0:p.map(h=>u.jsxs(LH,{children:[u.jsxs("span",{className:"item-info",children:[h.name," (x",h.quantity,")"]}),u.jsxs("span",{className:"item-price",children:[(h.new_price??h.price)*(h.quantity||1)," грн"]})]},h.id))}),u.jsxs(Qr,{children:[u.jsx("strong",{children:"На суму:"})," ",f," грн."]}),u.jsxs(Qr,{children:[u.jsx("strong",{children:"Отрмувач:"})," ",a.name,", ",a.phone,"."]}),u.jsxs(Qr,{children:[u.jsx("strong",{children:"Спосіб доставки:"})," ",a.deliveryMethod,"."]}),u.jsxs(Qr,{children:[u.jsx("strong",{children:"Адреса отримання:"})," ",a.city,","," ",a.delivery_address,"."]}),u.jsxs(Qr,{children:[u.jsx("strong",{children:"Спосіб оплати:"})," ",a.payment_method,"."]})]}),u.jsxs(RH,{children:[u.jsx(Ab,{onClick:()=>e("/"),children:"Повернутися на головну"}),u.jsx(Ab,{onClick:()=>e("/catalog"),children:"Продовжити покупки"})]})]}):u.jsxs("div",{children:["Замовлення не знайдено",u.jsx("button",{onClick:()=>e("/"),children:"На головну"})]})},zH=E.section`
  background-color: var(--second-background);
`,NH=E.div`
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
`,BH=E.section`
  padding: 40px 0;
  background-color: #f9f9f980;
  border-radius: 12px;
  margin-bottom: 30px;
`,VH=E.h1`
  font-family: var(--main-font);
  font-size: 28px;
  color: var(--black-color);
  margin-bottom: 10px;

  @media screen and (min-width: 768px) {
    font-size: 42px;
  }
`,WH=E.p`

  font-size: 16px;
  color: #666;
`,UH=E.section`
  margin-bottom: 50px;
`,HH=E.p`
  font-family: var(--second-font);
  font-weight:400;
  font-size: 18px;
  line-height: 1.6;
  max-width: 800px;
  margin: 0 auto 40px;
  color: #444;
`,GH=E.section`
  margin-bottom: 60px;
`,qH=E.h2`
  margin-bottom: 30px;
`,YH=E.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
`,Pl=E.div`
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
`,XH=()=>u.jsxs(zH,{children:[u.jsxs(NH,{children:[u.jsxs(BH,{children:[u.jsx(VH,{children:"Про Дідів Хлів"}),u.jsx(WH,{children:"Даємо друге життя якісним велозапчастинам"})]}),u.jsxs(UH,{children:[u.jsx(HH,{children:"Бізнес створений з переконанням, що обладнання може бути доступним. Ми спеціалізуємося на розборі цікавих і унікальних велосипедів, усі запчастини перевірені нами. Стараємося пропонувати тільки найкраще від Shimano, Sram, Campagnolo та інших світових брендів."}),u.jsx(h_,{})]}),u.jsxs(GH,{children:[u.jsx(qH,{children:"Наша майстерня"}),u.jsxs(YH,{children:[u.jsx(Pl,{color:"#e2e2e2",children:"Фото майстерні"}),u.jsx(Pl,{color:"#d1d1d1",children:"Процес діагностики"}),u.jsx(Pl,{color:"#bcbcbc",children:"Склад запчастин"}),u.jsx(Pl,{color:"#a8a8a8",children:"Готові велосипеди"})]})]})]})," "]}),KH=()=>{const{pathname:e}=Wn();return x.useEffect(()=>{window.scrollTo(0,0)},[e]),null},QH=E.section`
  background-color:  var(--second-background);
  padding: 40px 0;
  min-height: 80vh;
`,ZH=E.div`
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
`,JH=E.h1`
  font-family: var(--main-font); 
  font-size: 32px;
  color: var(--black-color);
  margin-bottom: 10px;
  text-transform: uppercase;
`,eG=E.p`
  color: #585555;
  margin-bottom: 40px;
`,tG=E.div`
font-family: var(--second-font);
font-weight: 400;
  display: grid;
  gap: 40px;
  text-align: left;

  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    align-items: start;
  }
`,nG=E.div`
height: 427px;
  display: grid;
  gap: 25px;
    background: #ffffff;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
`,Ol=E.div`
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
`,rG=E.div`
  background: #ffffff;
  padding: 40px 30px;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%; 
`,iG=E.h2`
  margin-bottom: 15px;
  color: var(--brown-color);
  font-size: 24px;
  font-family: var(--main-font);
`,oG=E.p`
  color: #666;
  font-size: 14px;
  line-height: 1.6;
  margin-bottom: 30px;
`,aG=E.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
  
  @media screen and (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`,Db=E.a`
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
`;E.div`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: bold;
`;const sG=E.div`
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

 
`,lG=()=>u.jsx(QH,{children:u.jsxs(ZH,{children:[u.jsx(JH,{children:"Контакти"}),u.jsx(eG,{children:"Зв’яжіться з нами для консультації або замовлення"}),u.jsxs(tG,{children:[u.jsxs(nG,{children:[u.jsxs(Ol,{children:[u.jsx("h3",{children:"Адреса"}),u.jsx("p",{children:"вул. Казармена 6Г, Київ, Україна"}),u.jsx("a",{style:{color:"black",fontWeight:"500",fontSize:"0.9rem",display:"inline-block",marginTop:"5px",cursor:"pointer"},href:"https://www.google.com/maps/search/?api=1&query=вул.+Казармена+6Г,+Київ,+Україна",target:"_blank",rel:"noopener noreferrer",children:"📍 Показати на карті"})]}),u.jsxs(Ol,{children:[u.jsx("h3",{children:"Телефон"}),u.jsx("p",{children:"+38 (097) 123-45-67"})]}),u.jsxs(Ol,{children:[u.jsx("h3",{children:"Email"}),u.jsx("p",{children:"didivhliv.com"})]}),u.jsxs(Ol,{children:[u.jsx("h3",{children:"Графік роботи"}),u.jsx("p",{children:"З 11:00 - 20:00"}),u.jsx("p",{children:"Вихідні: Пн, Чт"})]})]}),u.jsxs(rG,{children:[u.jsx(iG,{children:"Ми в соцмережах"}),u.jsx(oG,{children:"Слідкуйте за нашими новинами, новими надходженнями та крутими вело-поїздками у зручному для вас форматі."}),u.jsxs(aG,{children:[u.jsxs(Db,{href:"https://www.instagram.com/didivxliv?igsh=MXhsNWRjdW5rajYwdQ==",target:"_blank",rel:"noopener noreferrer",children:[u.jsx("svg",{width:"20px",children:u.jsx("use",{href:`${xn}#icon-instagram`})}),u.jsx("span",{children:"Instagram"})]}),u.jsxs(Db,{href:"https://t.me/didivxliv",target:"_blank",rel:"noopener noreferrer",children:[u.jsx("svg",{width:"20px",children:u.jsx("use",{href:`${xn}#icon-telegram`})}),u.jsx("span",{children:"Telegram"})]})]}),u.jsx(sG,{children:"Приєднуйся до спільноти!"})]})]})]})}),cG=E.section`
  background-color:  var(--second-background);
`,uG=E.div`
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
  
`,dG=E.div`
 
     width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  
`,fG=E.h1`
  /* flex: 1;
   text-align:center; */

    font-size: 25px;
font-family: var(--main-font);
color: var( --black-color);
text-transform: uppercase;
 @media screen and (min-width: 360px) {
  font-size: 32px;
  }
`,pG=E.div`
  position: relative;
  display: inline-block;
    /* flex-shrink: 0; */
`,hG=E.div`
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
`,mG=E.div`
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
`,gG=E.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  padding:10px;

`,vG=E.div`
  padding: 10px;
      display: flex;
    align-content: center;
    align-items: center;
        justify-content: space-between;
`,yG=E.p`
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
 
`;E.p`
 font-size: 17px;
    font-weight: 800;
 
`;E.svg`
  width: 24px;
  height: 24px;
  fill: var(--white-color);
`;E.svg`
  width: 24px;
  height: 24px;
  fill: var(--white-color);
`;const xG=E.div.attrs({className:"card-buttons"})`
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
`,pP=E.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  flex-wrap: wrap;
  gap: 5px;
  margin-bottom: 15px;
  margin-top: auto; 
 padding-top: 40px; 
`,yo=E.button`
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
`,bG=E.button`
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
`,wG=E.div`
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
`,Gi=E.div`
  padding: 10px 12px;
  cursor: pointer;

  &:hover {
    background: #f0f0f0;
  }
`,hP=E.div`
  height: 80vh;
          display: flex;
          flex-direction:
          column;
          justify-content: center;
          align-items: center;
          font-size: 30px;
`,mP=E(ge)`
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
  
`,SG=E.section`
  background-color: var(--second-background);
  /* min-height: 100vh; */
`,CG=E.div`
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
`,EG=E.div`
width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`,_G=E.h1`

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

`,kG=E.div`
  width: 100%;
  display: grid;
  gap: 15px;

  grid-template-columns: 1fr;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
  }
`,PG=E.div`
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
`;E.div`
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
`;const gP=E.div`
  position: relative;
`,OG=E.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
 padding: 10px;
`,TG=E.p`
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
`,jG=E.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 10px 10px;
`;E.span`
  font-size: 16px;
  font-weight: 700;

  &:last-child {
    font-size: 14px;
    color: #999;
    text-decoration: line-through;
    font-weight: 400;
  }
`;const $G=E.div.attrs({className:"card-buttons"})`
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
`,xu=E.button`
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
`;E.svg`
  width: 24px;
  height: 24px;
  fill: var(--white-color);
`;E.svg`
  width: 24px;
  height: 24px;
  fill: var(--white-color);
`;const IG=E.div`
  position: relative;
  display: inline-block;
  display:flex;
  
`,MG=E.div`
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
`,qi=E.div`
  padding: 10px 12px;
  cursor: pointer;

  &:hover {
    background: #f0f0f0;
  }
`,AG=E.button`
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
`,DG=()=>{const[e,t]=x.useState([]),[n,r]=x.useState(!0),i=Ge(S=>S.favorites.items),o=Ge(S=>S.cart.items),[a,l]=x.useState(!1),[s,c]=x.useState("date"),[d,f]=x.useState("asc"),[m,p]=x.useState(1),[h,y]=x.useState(1),w=et(),g=Lt(),v=x.useRef(null);x.useEffect(()=>{const S=P=>{v.current&&!v.current.contains(P.target)&&l(!1)};return document.addEventListener("mousedown",S),()=>{document.removeEventListener("mousedown",S)}},[]),x.useEffect(()=>{window.scrollTo({top:0,behavior:"smooth"})},[m]),x.useEffect(()=>{(async()=>{const P=new Date,k=new Date;k.setDate(P.getDate()-7);const _=k.toISOString();try{r(!0);const T=await fetch(`https://backenddidiv-production.up.railway.app/api/products?populate=*&filters[createdAt][$gte]=${_}&pagination[page]=${m}&pagination[pageSize]=24`);if(!T.ok)throw new Error(`HTTP error! Status: ${T.status}`);const $=await T.json();t($.data),y($.meta.pagination.pageCount)}catch(T){console.error("Помилка при завантаженні продуктів:",T)}finally{r(!1)}})()},[m]);const b=x.useMemo(()=>{const S=[...e],P=k=>k.new_price&&k.new_price<k.price?k.new_price:k.price;switch(s){case"name":return S.sort((k,_)=>d==="asc"?k.name.localeCompare(_.name):_.name.localeCompare(k.name));case"price":return S.sort((k,_)=>{const T=P(k),$=P(_);return d==="asc"?T-$:$-T});case"date":return S.sort((k,_)=>d==="asc"?new Date(k.createdAt)-new Date(_.createdAt):new Date(_.createdAt)-new Date(k.createdAt));default:return S}},[s,e,d]),C=(S,P)=>{P.stopPropagation();const k=i.some(_=>_.id===(S==null?void 0:S.id));Ti(S,k,g,X)};return n?u.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"100vw",height:"100vh"},children:u.jsx(ji,{height:100,width:100,radius:5,color:"var(--orange-color)",ariaLabel:"ball-triangle-loading",wrapperStyle:{},wrapperClass:"",visible:!0})}):b.length===0?u.jsxs(hP,{children:[u.jsx("p",{style:{textAlign:"center"},children:"Нажаль, нічого нового за останній тиждень"}),u.jsxs(mP,{to:"/catalog",children:[u.jsx("p",{children:"Весь каталог"}),u.jsx(Uu,{size:24})]})]}):u.jsxs(cG,{children:[u.jsxs(uG,{children:[u.jsx(Un,{autoClose:1500}),u.jsxs(KC,{children:[u.jsx(ge,{to:"/",children:"Головна"})," / ",u.jsx(ge,{to:"/catalog/new",children:"Новинки"})]}),u.jsxs(dG,{children:[u.jsx(fG,{children:"Нові товари "}),u.jsxs(pG,{ref:v,children:[u.jsxs(bG,{onClick:()=>l(S=>!S),children:["Сортування",u.jsx(Wu,{strokeWidth:.9,size:22})]}),a&&u.jsxs(wG,{children:[u.jsx(Gi,{onClick:()=>{c("name"),f("asc"),l(!1)},children:"А-Я"}),u.jsx(Gi,{onClick:()=>{c("name"),f("desc"),l(!1)},children:"Я-А"}),u.jsx(Gi,{onClick:()=>{c("price"),f("asc"),l(!1)},children:"Ціна ↑"}),u.jsx(Gi,{onClick:()=>{c("price"),f("desc"),l(!1)},children:"Ціна ↓"}),u.jsx(Gi,{onClick:()=>{c("date"),f("desc"),l(!1)},children:"Спочатку новіші"}),u.jsx(Gi,{onClick:()=>{c("date"),f("asc"),l(!1)},children:"Спочатку старіші"})]})]})]}),u.jsx(hG,{children:b.map(S=>{var z,R,O;const P=i.some(A=>A.id===S.id),k=(S==null?void 0:S.available)??!0,_=(S==null?void 0:S.stock)===0,T=o.find(A=>A.id===S.id),I=(T?T.quantity:0)>=(S.stock||0),M=S.new_price&&S.new_price<S.price,j=M?S.new_price:S.price,F=M?Math.round((S.price-S.new_price)/S.price*100):0,D=async(A,N)=>{if(N.stopPropagation(),I){X.error("Товар уже у кошику");return}await Ho(A,1,g,X)};return u.jsxs(mG,{onClick:()=>w(`/product/${S.slug??S.id}`),$soldOut:_,children:[!k&&u.jsx(Kg,{children:"Бронь"}),u.jsx(Qg,{children:"Новинка"}),u.jsxs(gP,{children:[_&&u.jsx(Yu,{children:"Продано"}),u.jsx(gG,{src:((R=(z=S.images)==null?void 0:z[0])==null?void 0:R.url)||ur,alt:S.name})]}),u.jsx(yG,{children:S.name}),u.jsxs(vG,{children:[u.jsx(Vd,{children:u.jsxs(Wd,{children:[u.jsxs(Ud,{$discount:M,children:[j==null?void 0:j.toLocaleString()," грн"]}),M&&u.jsxs(Hd,{children:[(O=S.price)==null?void 0:O.toLocaleString()," грн"]}),M&&u.jsxs(Gd,{children:["-",F,"%"]})]})}),u.jsxs(xG,{children:[k&&!_&&u.jsx(xu,{onClick:A=>D(S,A),children:u.jsx(Uo,{size:24,color:T?"var(--orange-color)":"black",strokeWidth:2})}),!_&&u.jsx(xu,{onClick:A=>C(S,A),children:u.jsx(Is,{size:24,fill:P?"#ff4d4f":"none",color:P?"#ff4d4f":"#000000",strokeWidth:P?1:2})})]})]})]},S.id)})}),u.jsxs(pP,{children:[u.jsx(yo,{onClick:()=>p(S=>Math.max(S-1,1)),disabled:m===1,children:"Назад"}),Array.from({length:h},(S,P)=>u.jsx(yo,{onClick:()=>p(P+1),active:m===P+1,children:P+1},P)),u.jsx(yo,{onClick:()=>p(S=>Math.min(S+1,h)),disabled:m===h,children:"Вперед"})]})]})," "]})},LG=()=>{const[e,t]=x.useState([]),[n,r]=x.useState(!0),[i,o]=x.useState(!1),[a,l]=x.useState("date"),[s,c]=x.useState("desc"),[d,f]=x.useState(1),m=24,p=et(),h=Lt(),y=Ge(_=>_.favorites.items),w=Ge(_=>_.cart.items),g=x.useRef(null);x.useEffect(()=>{const _=T=>{g.current&&!g.current.contains(T.target)&&o(!1)};return document.addEventListener("mousedown",_),()=>{document.removeEventListener("mousedown",_)}},[]),x.useEffect(()=>{(async()=>{const T="https://backenddidiv-production.up.railway.app";try{const I=await(await fetch(`${T}/api/products?filters[new_price][$notNull]=true&pagination[pageSize]=500&populate=*`)).json(),M=Date.now(),j=7*24*60*60*1e3,F=I.data.filter(D=>{if(D.stock>0||!D.sold_date)return!0;const z=new Date(D.sold_date).getTime();return M-z<j});t(F),r(!1)}catch($){console.log($)}})()},[]),x.useEffect(()=>{window.scrollTo({top:0,behavior:"smooth"})},[d]);const v=x.useMemo(()=>{const _=[...e];switch(a){case"name":return _.sort((T,$)=>s==="asc"?T.name.localeCompare($.name):$.name.localeCompare(T.name));case"price":return _.sort((T,$)=>s==="asc"?T.new_price-$.new_price:$.new_price-T.new_price);case"date":return _.sort((T,$)=>s==="asc"?new Date(T.createdAt)-new Date($.createdAt):new Date($.createdAt)-new Date(T.createdAt));default:return _}},[a,e,s]),b=d*m,C=b-m,S=v.slice(C,b),P=Math.ceil(e.length/m),k=(_,T)=>{T.stopPropagation();const $=y.some(I=>I.id===(_==null?void 0:_.id));Ti(_,$,h,X)};return n?u.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"100vw",height:"100vh"},children:u.jsx(ji,{height:100,width:100,radius:5,color:"var(--orange-color)",ariaLabel:"ball-triangle-loading",wrapperStyle:{},wrapperClass:"",visible:!0})}):e.length===0?u.jsxs(hP,{children:[u.jsx("p",{style:{textAlign:"center"},children:"Нажаль, поки знижок немає"}),u.jsxs(mP,{to:"/catalog",children:[u.jsx("p",{children:"Весь каталог"}),u.jsx(Uu,{size:24})]})]}):u.jsx(SG,{children:u.jsxs(CG,{children:[u.jsx(Un,{autoClose:1500}),u.jsxs(EG,{children:[u.jsx(_G,{children:"Акційні товари"}),u.jsxs(IG,{ref:g,children:[u.jsxs(AG,{onClick:()=>o(_=>!_),children:["Сортування",u.jsx(Wu,{strokeWidth:.9,size:22})]}),i&&u.jsxs(MG,{children:[u.jsx(qi,{onClick:()=>{l("name"),c("asc"),o(!1)},children:"А-Я"}),u.jsx(qi,{onClick:()=>{l("name"),c("desc"),o(!1)},children:"Я-А"}),u.jsx(qi,{onClick:()=>{l("price"),c("asc"),o(!1)},children:"Ціна ↑"}),u.jsx(qi,{onClick:()=>{l("price"),c("desc"),o(!1)},children:"Ціна ↓"}),u.jsx(qi,{onClick:()=>{l("date"),c("desc"),o(!1)},children:"Спочатку новіші"}),u.jsx(qi,{onClick:()=>{l("date"),c("asc"),o(!1)},children:"Спочатку старіші"})]})]})]}),u.jsx(kG,{children:S.map(_=>{var N,B;const T=_.new_price&&_.new_price<_.price,$=_!=null&&_.createdAt?Date.now()-new Date(_.createdAt).getTime()<7*24*60*60*1e3:!1,I=T?_.new_price:_.price,M=(_==null?void 0:_.available)??!0,j=(_==null?void 0:_.stock)===0,F=T?Math.round((_.price-_.new_price)/_.price*100):0,D=y.some(L=>L.id===_.id),z=w.find(L=>L.id===_.id),O=(z?z.quantity:0)>=(_.stock||0),A=async(L,V)=>{if(V.stopPropagation(),O){X.error("Товар уже у кошику");return}await Ho(_,1,h,X)};return u.jsxs(PG,{onClick:()=>p(`/product/${_.slug??_.id}`),style:{cursor:"pointer"},$soldOut:j,children:[" ",$&&u.jsx(Qg,{children:"Новинка"}),!M&&u.jsx(Kg,{children:"Бронь"}),u.jsxs(gP,{children:[j&&u.jsx(Yu,{children:"Продано"}),u.jsx(OG,{src:((B=(N=_.images)==null?void 0:N[0])==null?void 0:B.url)||"/nofoto.png"})]}),u.jsx(TG,{children:_.name}),u.jsxs(jG,{children:[u.jsx(Vd,{children:u.jsxs(Wd,{children:[u.jsxs(Ud,{$discount:T,children:[I==null?void 0:I.toLocaleString()," грн"]}),T&&u.jsxs(Hd,{children:[_.price.toLocaleString()," грн"]}),T&&u.jsxs(Gd,{children:["-",F,"%"]})]})}),u.jsxs($G,{children:[M&&!j&&u.jsx(xu,{onClick:L=>A(_,L),children:u.jsx(Uo,{size:24,color:z?"var(--orange-color)":"black",strokeWidth:2})}),!j&&u.jsx(xu,{onClick:L=>k(_,L),children:u.jsx(Is,{size:24,fill:D?"#ff4d4f":"none",color:D?"#ff4d4f":"#000000",strokeWidth:D?1:2})})]})]})]},_.id)})}),v.length>m&&u.jsxs(pP,{children:[u.jsx(yo,{onClick:()=>f(_=>Math.max(_-1,1)),disabled:d===1,children:"Назад"}),Array.from({length:P},(_,T)=>u.jsx(yo,{onClick:()=>f(T+1),active:d===T+1,children:T+1},T)),u.jsx(yo,{onClick:()=>f(_=>Math.min(_+1,P)),disabled:d===P,children:"Вперед"})]})]})})},RG=E.div`
  position: fixed;
  inset: 0;
  background: rgba(25, 20, 16, 0.6);
  backdrop-filter: blur(4px);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  z-index: 999;
`,FG=E.div`
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
`,zG=E.button`
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
`,NG=E.h2`
  text-align: center;

  font-size: 30px;
  font-weight: 300;

  color: #312620;

  margin-bottom: 10px;

  @media screen and (min-width: 768px) {
    font-size: 42px;
  }
`,BG=E.p`
  text-align: center;
  color: #8d837d;

  margin-bottom: 32px;
`,VG=E.div`
  display: flex;

  background: #efe8df;

  border-radius: 40px;

  padding: 5px;

  margin-bottom: 35px;
`,Lb=E.button`
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
`,ya=E.input`
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
`,WG=E.button`
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
`,Rb=E.div`
  position: relative;
  width: 100%;
`,Fb=E.button`
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
`,UG=E.p`
  margin: 10px 0;
  color: #2e7d32;
  font-size: 14px;
  text-align: center;
`,HG=E.p`
  margin-top: 28px;

  text-align: center;

  color: #8b817a;

  font-size: 15px;

  span {
    color: #ff7a00;
    cursor: pointer;
    font-weight: 600;
  }
`,GG=E.p`
  margin-bottom: 20px;

  text-align: center;

  color: #8b817a;

  font-size: 15px;

  span {
    color: #ff7a00;
    cursor: pointer;
    font-weight: 600;
  }
`,Tl=E.p`
  margin: -8px 0 8px;
  color: var(--red-color);
  font-size: 15px;
  margin-bottom: 20px;
`,qG=async(e,t,n)=>{e.length&&await Promise.all(e.map(async r=>{const i=await fetch(`https://backenddidiv-production.up.railway.app/api/favorites?filters[product][documentId][$eq]=${r.documentId}&populate=user`,{headers:{Authorization:`Bearer ${t}`}});if(!i.ok){console.error(await i.json());return}const o=await i.json();if(o.data.length>0){const l=o.data[0],s=l.user||[];if(s.some(f=>f.documentId===n))return;const d=await fetch(`https://backenddidiv-production.up.railway.app/api/favorites/${l.documentId}`,{method:"PUT",headers:{Authorization:`Bearer ${t}`,"Content-Type":"application/json"},body:JSON.stringify({data:{user:[...s.map(f=>f.documentId),n]}})});d.ok||console.error(await d.json());return}const a=await fetch("https://backenddidiv-production.up.railway.app/api/favorites",{method:"POST",headers:{Authorization:`Bearer ${t}`,"Content-Type":"application/json"},body:JSON.stringify({data:{product:r.documentId,user:[n]}})});a.ok||console.error(await a.json())}))},YG=async(e,t,n)=>{e.length&&await Promise.all(e.map(async r=>{const i=await fetch(`https://backenddidiv-production.up.railway.app/api/cart-items?filters[user][documentId][$eq]=${n}&filters[product][documentId][$eq]=${r.documentId}`,{headers:{Authorization:`Bearer ${t}`}});if(!i.ok){console.error(await i.json());return}const o=await i.json();if(o.data.length>0){const l=o.data[0],s=await fetch(`https://backenddidiv-production.up.railway.app/api/cart-items/${l.documentId}`,{method:"PUT",headers:{Authorization:`Bearer ${t}`,"Content-Type":"application/json"},body:JSON.stringify({data:{quantity:r.quantity}})});s.ok||console.error(await s.json());return}const a=await fetch("https://backenddidiv-production.up.railway.app/api/cart-items",{method:"POST",headers:{Authorization:`Bearer ${t}`,"Content-Type":"application/json"},body:JSON.stringify({data:{product:r.documentId,user:n,quantity:r.quantity}})});a.ok||console.error(await a.json())}))},XG=async(e,t)=>{const n=await fetch(`https://backenddidiv-production.up.railway.app/api/cart-items?filters[user][documentId][$eq]=${t}&populate[product][populate]=*`,{headers:{Authorization:`Bearer ${e}`}});if(!n.ok)throw new Error("Не вдалося отримати кошик");return(await n.json()).data.map(i=>i.product?{...i.product,quantity:i.quantity}:null).filter(Boolean)},KG=({isOpen:e,onClose:t,mode:n,setMode:r,localFavorites:i,localCartItems:o})=>{const[a,l]=x.useState(!1),[s,c]=x.useState(!1),[d,f]=x.useState({first_name:"",last_name:"",email:"",password:"",confirmPassword:""}),[m,p]=x.useState({first_name:"",last_name:"",email:"",password:"",confirmPassword:""}),[h,y]=x.useState(!1),w=Lt();if(x.useEffect(()=>{const _=T=>{T.key==="Escape"&&t()};return window.addEventListener("keydown",_),()=>window.removeEventListener("keydown",_)},[t]),!e)return null;const g=_=>{const{name:T,value:$}=_.target;p(I=>({...I,[T]:$})),f(I=>({...I,[T]:""}))},v=_=>{_.target===_.currentTarget&&t()},b=async()=>{f({first_name:"",last_name:"",email:"",password:"",confirmPassword:""});const _=await fetch("https://backenddidiv-production.up.railway.app/api/auth/local",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({identifier:m.email,password:m.password})}),T=await _.json();if(!_.ok){f({email:"Неправильна електронна пошта або пароль",password:"Неправильна електронна пошта або пароль",confirmPassword:""});return}localStorage.setItem("token",T.jwt),localStorage.setItem("user",JSON.stringify(T.user)),await qG(i,T.jwt,T.user.documentId),await YG(o,T.jwt,T.user.documentId);const $=await XG(T.jwt,T.user.documentId);w(TC($)),t()},C=async()=>{var I,M,j,F,D,z;f({email:"",password:"",confirmPassword:""});const _=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;if(!m.first_name.trim()){f(R=>({...R,first_name:"Введіть ім'я"}));return}if(!m.last_name.trim()){f(R=>({...R,last_name:"Введіть прізвище"}));return}if(!m.email.trim()){f(R=>({...R,email:"Введіть електронну пошту"}));return}if(!_.test(m.email)){f(R=>({...R,email:"Введіть правильну електронну пошту"}));return}if(!m.password){f(R=>({...R,password:"Введіть пароль"}));return}if(m.password.length<6){f(R=>({...R,password:"Пароль має містити щонайменше 6 символів"}));return}if(m.password!==m.confirmPassword){f(R=>({...R,confirmPassword:"Паролі не співпадають"}));return}const T=await fetch("https://backenddidiv-production.up.railway.app/api/auth/local/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:m.email,email:m.email,password:m.password})}),$=await T.json();if(!T.ok){(M=(I=$.error)==null?void 0:I.message)!=null&&M.toLowerCase().includes("already")||(F=(j=$.error)==null?void 0:j.message)!=null&&F.toLowerCase().includes("taken")||(z=(D=$.error)==null?void 0:D.message)!=null&&z.toLowerCase().includes("email")?f(R=>({...R,email:"Ця пошта вже зареєстрована"})):f(R=>{var O;return{...R,email:((O=$.error)==null?void 0:O.message)||"Не вдалося зареєструватися"}});return}localStorage.setItem("token",$.jwt);try{const R=localStorage.getItem("token");localStorage.setItem("user",JSON.stringify($.user));const O=await fetch(`https://backenddidiv-production.up.railway.app/api/users/${$.user.id}`,{method:"PUT",headers:{Authorization:`Bearer ${R}`,"Content-Type":"application/json"},body:JSON.stringify({first_name:m.first_name,last_name:m.last_name})});if(!O.ok)throw new Error("Помилка оновлення");const A=await O.json();localStorage.setItem("user",JSON.stringify(A))}catch(R){console.error(R),alert("Не вдалося оновити дані")}t()},S=()=>{r("forgotPassword"),y(!1),f({first_name:"",last_name:"",email:"",password:"",confirmPassword:""})},P=_=>{r(_),f({email:"",password:"",confirmPassword:""})},k=async()=>{if(f({email:"",password:"",confirmPassword:""}),!m.email.trim()){f(T=>({...T,email:"Введіть електронну пошту"}));return}if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(m.email)){f(T=>({...T,email:"Введіть правильну електронну пошту"}));return}try{const T=await fetch("https://backenddidiv-production.up.railway.app/api/auth/forgot-password",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:m.email})}),$=await T.json();if(!T.ok){f(I=>{var M;return{...I,email:((M=$.error)==null?void 0:M.message)||"Не вдалося надіслати лист"}});return}y(!0)}catch(T){console.error(T),f($=>({...$,email:"Помилка з’єднання із сервером"}))}};return u.jsxs(u.Fragment,{children:[" ",u.jsx(Un,{autoClose:1500}),u.jsx(RG,{onClick:v,children:u.jsxs(FG,{children:[u.jsx(zG,{onClick:t,children:"×"}),u.jsx(NG,{children:n==="login"?"Вхід":n==="register"?"Реєстрація":"Відновлення пароля"}),u.jsx(BG,{children:n==="login"?"Увійдіть до свого акаунта":n==="register"?"Створіть новий акаунт":"Введіть email, щоб отримати посилання для відновлення пароля"}),u.jsxs(VG,{children:[u.jsx(Lb,{active:n==="login",onClick:()=>P("login"),children:"Вхід"}),u.jsx(Lb,{active:n==="register",onClick:()=>P("register"),children:"Реєстрація"})]}),n==="register"&&u.jsxs(u.Fragment,{children:[u.jsx(ya,{name:"first_name",value:m.first_name,onChange:g,placeholder:"Ім'я"}),d.first_name&&u.jsx(Tl,{children:d.first_name}),u.jsx(ya,{name:"last_name",value:m.last_name,onChange:g,placeholder:"Прізвище"}),d.last_name&&u.jsx(Tl,{children:d.last_name})]}),u.jsx(ya,{name:"email",type:"email",value:m.email,onChange:g,placeholder:"Email"}),n!=="forgotPassword"&&u.jsxs(u.Fragment,{children:[u.jsxs(Rb,{children:[u.jsx(ya,{name:"password",type:a?"text":"password",value:m.password,onChange:g,placeholder:"Пароль"}),u.jsx(Fb,{type:"button",onClick:()=>l(_=>!_),children:a?u.jsx(fi,{size:20}):u.jsx(pi,{size:20})})]}),d.password&&u.jsx(Tl,{children:d.password})]}),n==="register"&&u.jsxs(Rb,{children:[u.jsx(ya,{name:"confirmPassword",type:s?"text":"password",value:m.confirmPassword,onChange:g,placeholder:"Повторіть пароль"}),u.jsx(Fb,{type:"button",onClick:()=>c(_=>!_),children:s?u.jsx(fi,{size:20}):u.jsx(pi,{size:20})})]}),d.confirmPassword&&u.jsx(Tl,{children:d.confirmPassword}),n==="login"&&u.jsx(GG,{children:u.jsx("span",{onClick:S,children:"Забули пароль?"})}),n==="forgotPassword"&&h&&u.jsx(UG,{children:"Перевірте свою пошту. Ми надіслали вам посилання для відновлення пароля."}),u.jsx(WG,{disabled:n==="forgotPassword"&&h,onClick:n==="login"?b:n==="register"?C:k,children:n==="login"?"Увійти":n==="register"?"Зареєструватися":"Надіслати посилання"}),u.jsx(HG,{children:n==="login"?u.jsxs(u.Fragment,{children:["Немає акаунта?"," ",u.jsx("span",{onClick:()=>r("register"),children:"Зареєструватися"})]}):u.jsxs(u.Fragment,{children:["Вже є акаунт?"," ",u.jsx("span",{onClick:()=>r("login"),children:"Увійти"})]})})]})})," "]})},QG=({isLoggedIn:e,children:t})=>e?t:u.jsx(LO,{to:"/",replace:!0}),ZG=E.main`
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

`,JG=E.section`
 flex: 1;
  display: flex;
  flex-direction: column;
`,eq=E.aside`
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
`,tq=E.div`
   display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 28px;
  min-width: 0;
  
`,nq=E.div`
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
`,rq=E.div`
  min-width: 0;
  flex: 1;
`,iq=E.h3`
  margin-bottom: 4px;
`,oq=E.p`
  color: #777;
   overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  min-width: 0;
  width: 100%;
   flex: 1;
  
`,zb=E.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`,jl=E(gw)`
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
`,aq=E.div`
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
`,sq=E.div`
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
`,lq=E.h2`
  margin: 0 0 14px;

  text-align: center;

  color:var(--black-color);
  font-family: var(--second-font);

  font-size: 28px;
  font-weight: 300;
`,cq=E.p`
  margin: 0 auto 32px;
   font-family: var(--second-font);

  max-width: 360px;

  text-align: center;

  color: #3c3734;

  font-size: 16px;
  line-height: 1.6;
`,uq=E.div`
  display: flex;
  gap: 14px;

  justify-content: center;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`,dq=E.button`
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
`,fq=E.button`
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
`,vP=({onClose:e,onConfirm:t})=>u.jsx(aq,{onClick:e,children:u.jsxs(sq,{onClick:n=>n.stopPropagation(),children:[u.jsx(lq,{children:"Вийти з акаунту?"}),u.jsx(cq,{children:"Ви впевнені, що хочете вийти з особистого кабінету?"}),u.jsxs(uq,{children:[u.jsx(dq,{onClick:e,children:"Скасувати"}),u.jsx(fq,{onClick:t,children:"Вийти"})]})]})}),pq=()=>{var c,d;const[e,t]=x.useState(""),[n,r]=x.useState(""),[i,o]=x.useState(!1),a=Lt(),l=et();x.useEffect(()=>{(async()=>{try{const m=localStorage.getItem("token"),h=await(await fetch("https://backenddidiv-production.up.railway.app/api/users/me",{headers:{Authorization:`Bearer ${m}`}})).json();t(h.first_name),r(h.email)}catch(m){console.error(m)}})()},[]);const s=async()=>{localStorage.removeItem("token"),localStorage.removeItem("user"),a(Ls()),a(fr()),await Bd.purge(),l("/",{replace:!0})};return u.jsxs(eq,{children:[i&&u.jsx(vP,{onClose:()=>o(!1),onConfirm:s}),u.jsxs(tq,{children:[u.jsx(nq,{children:((d=(c=e||e)==null?void 0:c[0])==null?void 0:d.toUpperCase())||"?"}),u.jsxs(rq,{children:[u.jsx(iq,{children:e}),u.jsx(oq,{children:n})]})]}),u.jsxs(zb,{children:[u.jsxs(zb,{children:[u.jsx(jl,{to:"/account/profile",children:"Особисті дані"}),u.jsx(jl,{to:"/account/orders",children:"Замовлення"}),u.jsx(jl,{to:"/account/password",children:"Змінити пароль"})]}),u.jsx(jl,{as:"button",className:"logout",onClick:()=>o(!0),children:"Вийти"})]})]})};var nv={};nv.match=xq;nv.parse=yP;var hq=/(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,mq=/\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,gq=/^(?:(min|max)-)?(.+)/,vq=/(em|rem|px|cm|mm|in|pt|pc)?$/,yq=/(dpi|dpcm|dppx)?$/;function xq(e,t){return yP(e).some(function(n){var r=n.inverse,i=n.type==="all"||t.type===n.type;if(i&&r||!(i||r))return!1;var o=n.expressions.every(function(a){var l=a.feature,s=a.modifier,c=a.value,d=t[l];if(!d)return!1;switch(l){case"orientation":case"scan":return d.toLowerCase()===c.toLowerCase();case"width":case"height":case"device-width":case"device-height":c=Vb(c),d=Vb(d);break;case"resolution":c=Bb(c),d=Bb(d);break;case"aspect-ratio":case"device-aspect-ratio":case"device-pixel-ratio":c=Nb(c),d=Nb(d);break;case"grid":case"color":case"color-index":case"monochrome":c=parseInt(c,10)||1,d=parseInt(d,10)||0;break}switch(s){case"min":return d>=c;case"max":return d<=c;default:return d===c}});return o&&!r||!o&&r})}function yP(e){return e.split(",").map(function(t){t=t.trim();var n=t.match(hq),r=n[1],i=n[2],o=n[3]||"",a={};return a.inverse=!!r&&r.toLowerCase()==="not",a.type=i?i.toLowerCase():"all",o=o.match(/\([^\)]+\)/g)||[],a.expressions=o.map(function(l){var s=l.match(mq),c=s[1].toLowerCase().match(gq);return{modifier:c[1],feature:c[2],value:s[2]}}),a})}function Nb(e){var t=Number(e),n;return t||(n=e.match(/^(\d+)\s*\/\s*(\d+)$/),t=n[1]/n[2]),t}function Bb(e){var t=parseFloat(e),n=String(e).match(yq)[1];switch(n){case"dpcm":return t/2.54;case"dppx":return t*96;default:return t}}function Vb(e){var t=parseFloat(e),n=String(e).match(vq)[1];switch(n){case"em":return t*16;case"rem":return t*16;case"cm":return t*96/2.54;case"mm":return t*96/2.54/10;case"in":return t*96;case"pt":return t*72;case"pc":return t*72/12;default:return t}}var bq=nv.match,Wb=typeof window<"u"?window.matchMedia:null;function wq(e,t,n){var r=this,i;Wb&&!n&&(i=Wb.call(window,e)),i?(this.matches=i.matches,this.media=i.media,i.addListener(l)):(this.matches=bq(e,t),this.media=e),this.addListener=o,this.removeListener=a,this.dispose=s;function o(c){i&&i.addListener(c)}function a(c){i&&i.removeListener(c)}function l(c){r.matches=c.matches,r.media=c.media}function s(){i&&i.removeListener(l)}}function Sq(e,t,n){return new wq(e,t,n)}var Cq=Sq;const Eq=Ro(Cq);var _q=/[A-Z]/g,kq=/^ms-/,Up={};function Pq(e){return"-"+e.toLowerCase()}function xP(e){if(Up.hasOwnProperty(e))return Up[e];var t=e.replace(_q,Pq);return Up[e]=kq.test(t)?"-"+t:t}function Oq(e,t){if(e===t)return!0;if(!e||!t)return!1;const n=Object.keys(e),r=Object.keys(t),i=n.length;if(r.length!==i)return!1;for(let o=0;o<i;o++){const a=n[o];if(e[a]!==t[a]||!Object.prototype.hasOwnProperty.call(t,a))return!1}return!0}var bP={exports:{}},Tq="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",jq=Tq,$q=jq;function wP(){}function SP(){}SP.resetWarningCache=wP;var Iq=function(){function e(r,i,o,a,l,s){if(s!==$q){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:SP,resetWarningCache:wP};return n.PropTypes=n,n};bP.exports=Iq();var Mq=bP.exports;const me=Ro(Mq),yt=me.oneOfType([me.string,me.number]),rv={all:me.bool,grid:me.bool,aural:me.bool,braille:me.bool,handheld:me.bool,print:me.bool,projection:me.bool,screen:me.bool,tty:me.bool,tv:me.bool,embossed:me.bool},CP={orientation:me.oneOf(["portrait","landscape"]),scan:me.oneOf(["progressive","interlace"]),aspectRatio:me.string,deviceAspectRatio:me.string,height:yt,deviceHeight:yt,width:yt,deviceWidth:yt,color:me.bool,colorIndex:me.bool,monochrome:me.bool,resolution:yt,type:Object.keys(rv)},{type:VY,...Aq}=CP,EP={minAspectRatio:me.string,maxAspectRatio:me.string,minDeviceAspectRatio:me.string,maxDeviceAspectRatio:me.string,minHeight:yt,maxHeight:yt,minDeviceHeight:yt,maxDeviceHeight:yt,minWidth:yt,maxWidth:yt,minDeviceWidth:yt,maxDeviceWidth:yt,minColor:me.number,maxColor:me.number,minColorIndex:me.number,maxColorIndex:me.number,minMonochrome:me.number,maxMonochrome:me.number,minResolution:yt,maxResolution:yt,...Aq},Dq={...rv,...EP};var Lq={all:Dq,types:rv,matchers:CP,features:EP};const Rq=e=>`not ${e}`,Fq=(e,t)=>{const n=xP(e);return typeof t=="number"&&(t=`${t}px`),t===!0?n:t===!1?Rq(n):`(${n}: ${t})`},zq=e=>e.join(" and "),Nq=e=>{const t=[];return Object.keys(Lq.all).forEach(n=>{const r=e[n];r!=null&&t.push(Fq(n,r))}),zq(t)},Bq=x.createContext(void 0),Vq=e=>e.query||Nq(e),Ub=e=>e?Object.keys(e).reduce((n,r)=>(n[xP(r)]=e[r],n),{}):void 0,_P=()=>{const e=x.useRef(!1);return x.useEffect(()=>{e.current=!0},[]),e.current},Wq=e=>{const t=x.useContext(Bq),n=()=>Ub(e)||Ub(t),[r,i]=x.useState(n);return x.useEffect(()=>{const o=n();Oq(r,o)||i(o)},[e,t]),r},Uq=e=>{const t=()=>Vq(e),[n,r]=x.useState(t);return x.useEffect(()=>{const i=t();n!==i&&r(i)},[e]),n},Hq=(e,t)=>{const n=()=>Eq(e,t||{},!!t),[r,i]=x.useState(n),o=_P();return x.useEffect(()=>{if(o){const a=n();return i(a),()=>{a&&a.dispose()}}},[e,t]),r},Gq=e=>{const[t,n]=x.useState(e.matches);return x.useEffect(()=>{const r=i=>{n(i.matches)};return e.addListener(r),n(e.matches),()=>{e.removeListener(r)}},[e]),t},qq=(e,t,n)=>{const r=Wq(t),i=Uq(e);if(!i)throw new Error("Invalid or missing MediaQuery!");const o=Hq(i,r),a=Gq(o),l=_P();return x.useEffect(()=>{l&&n&&n(a)},[a]),x.useEffect(()=>()=>{o&&o.dispose()},[]),a},Yq=E.div`
  margin-bottom: 24px;
`,Xq=E.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 28px;
`,Kq=E.div`
  width: 70px;
  height: 70px;

  border-radius: 50%;
  background: #4c3a30;

  color: white;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 26px;
`,Qq=E.h3`
  margin-bottom: 4px;
`,Zq=E.p`
  color: #777;
`,Jq=E.button`
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
`,eY=E.div`
  margin-top: 12px;

  display: flex;
  flex-direction: column;

  background: white;

  border-radius: 18px;

  overflow: hidden;

  box-shadow: 0 8px 20px rgba(0,0,0,.08);
`,$l=E(gw)`
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
`,tY=()=>{var h,y;const[e,t]=x.useState(!1),[n,r]=x.useState(!1),[i,o]=x.useState(""),[a,l]=x.useState(""),s=Lt(),c=et(),d=Wn(),f=async()=>{localStorage.removeItem("token"),localStorage.removeItem("user"),s(Ls()),s(fr()),await Bd.purge(),c("/",{replace:!0})};x.useEffect(()=>{(async()=>{try{const g=localStorage.getItem("token"),b=await(await fetch("https://backenddidiv-production.up.railway.app/api/users/me",{headers:{Authorization:`Bearer ${g}`}})).json();o(b.first_name),l(b.email)}catch(g){console.error(g)}})()},[]);const p={"/account":"Особисті дані","/account/profile":"Особисті дані","/account/orders":"Замовлення","/account/favorites":"Обране","/account/password":"Змінити пароль"}[d.pathname]||"Особисті дані";return u.jsxs(Yq,{children:[n&&u.jsx(vP,{onClose:()=>r(!1),onConfirm:f}),u.jsxs(Xq,{children:[u.jsx(Kq,{children:((y=(h=i||i)==null?void 0:h[0])==null?void 0:y.toUpperCase())||"?"}),u.jsxs("div",{children:[u.jsx(Qq,{children:i}),u.jsx(Zq,{children:a})]})]}),u.jsxs(Jq,{onClick:()=>t(w=>!w),children:[p,e?u.jsx(w3,{size:22}):u.jsx(x3,{size:22})]}),e&&u.jsxs(eY,{children:[u.jsx($l,{to:"/account/profile",onClick:()=>t(!1),children:"Особисті дані"}),u.jsx($l,{to:"/account/orders",onClick:()=>t(!1),children:"Замовлення"}),u.jsx($l,{to:"/account/password",onClick:()=>t(!1),children:"Змінити пароль"}),u.jsx($l,{className:"logout",onClick:()=>r(!0),children:"Вийти"})]})]})},nY=()=>{const e=qq({maxWidth:767});return u.jsxs(ZG,{className:"container",children:[e?u.jsx(tY,{}):u.jsx(pq,{}),u.jsx(JG,{children:u.jsx(hw,{})})]})},rY=E.div`
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
`,iY=E.h2`
  margin-bottom: 28px;
`,Il=E.label`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 20px;
`,Ml=E.input`
  height: 52px;

  padding: 0 18px;

  border-radius: 14px;
  border: 1px solid #ddd;

  &:focus {
    outline: none;
    border-color: #ef7d1a;
  }
`,oY=E.button`
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
`,Hb=()=>{const[e,t]=x.useState({first_name:"",last_name:"",email:"",phone:""}),[n,r]=x.useState({first_name:"",last_name:"",email:"",phone:""}),[i,o]=x.useState(null),[a,l]=x.useState(!0),s=et();x.useEffect(()=>{(async()=>{try{const p=localStorage.getItem("token"),h=await fetch("https://backenddidiv-production.up.railway.app/api/users/me",{headers:{Authorization:`Bearer ${p}`}});if(h.status===401){localStorage.removeItem("token"),localStorage.removeItem("user"),s("/login",{replace:!0});return}if(!h.ok)throw new Error(`HTTP error: ${h.status}`);const y=await h.json();o(y.id);const w={first_name:y.first_name||"",last_name:y.last_name||"",email:y.email||"",phone:y.phone||""};r(w),t(w)}catch(p){console.error(p)}finally{l(!1)}})()},[s]);const c=m=>{const{name:p,value:h}=m.target;r(y=>({...y,[p]:h}))},d=n.first_name!==e.first_name||n.last_name!==e.last_name||n.phone!==e.phone,f=async()=>{try{const m=localStorage.getItem("token"),p=await fetch(`https://backenddidiv-production.up.railway.app/api/users/${i}`,{method:"PUT",headers:{Authorization:`Bearer ${m}`,"Content-Type":"application/json"},body:JSON.stringify({first_name:n.first_name,last_name:n.last_name,phone:n.phone})});if(!p.ok)throw new Error("Помилка оновлення");const h=await p.json();localStorage.setItem("user",JSON.stringify(h)),t(n),X.success("Дані оновлено успішно")}catch(m){console.error(m),X.error("Не вдалось оновити дані")}};return a?u.jsx("p",{children:"Завантаження..."}):u.jsxs(rY,{children:[u.jsx(Un,{autoClose:1500}),u.jsx(iY,{children:"Особисті дані"}),u.jsxs(Il,{children:["Ім я",u.jsx(Ml,{name:"first_name",value:n.first_name,onChange:c})]}),u.jsxs(Il,{children:["Прізвище",u.jsx(Ml,{name:"last_name",value:n.last_name,onChange:c})]}),u.jsxs(Il,{children:["Email",u.jsx(Ml,{value:n.email,disabled:!0})]}),u.jsxs(Il,{children:["Телефон",u.jsx(Ml,{name:"phone",value:n.phone,onChange:c})]}),u.jsx(oY,{onClick:f,disabled:!d,children:"Зберегти"})]})},aY=E.div`
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
`,sY=E.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
  }
`,lY=E.div`
  flex-grow: 1;
  background-color: #ffffff;
  border-radius: 20px;
  padding: 24px;
     box-shadow: 0 6px 18px rgba(0, 0, 0, 0.08);
  text-align: left;
`,cY=E.h1`
  font-family: var(--main-font);
  font-size: 28px;
  color: var(--black-color);
  margin-bottom: 24px;
`,uY=E.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`,dY=E.div`
  border: 1px solid #e0e0e0;
  border-radius: 16px;
  padding: 20px;
  background-color: #fff;
`,fY=E.div`
  display: flex;
  flex-direction: column;
      align-items: flex-start;
      align-items: flex-start;
       gap: 8px;
`,pY=E.div`
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
`,hY=E.span`
  font-family: var(--second-font);
  font-weight: 700;
  font-size: 16px;
`,mY=E.p`
  font-family: var(--second-font);
  font-weight: 400;
  font-size: 16px;
 `,gY=E.span`
  margin-left: auto;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 16px;
  font-weight: 700;

  background-color: ${e=>e.status==="pending"?"#fff0e6":e.status==="confirmed"?"#e8f0fe":e.status==="paid"?"#e6f4ea":e.status==="delivered"?"#e0f2fe":e.status==="done"?"#dcfce7":e.status==="cancelled"?"#fce8e6":"#f1f3f4"};

  color: ${e=>e.status==="pending"?"#d97706":e.status==="confirmed"?"#1a73e8":e.status==="paid"?"#137333":e.status==="delivered"?"#0369a1":e.status==="done"?"#15803d":e.status==="cancelled"?"#d93025":"#5f6368"};
`,vY=E.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`,yY=E.div`
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
`,xY=E.div`
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
`,bY=E.div`
  font-family: var(--second-font);
  margin-top: 16px;
  padding-top: 12px;
  border-top: 1px dashed #e0e0e0;
  font-size: 13px;
  color: #555;
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`,wY=()=>{const[e,t]=x.useState([]),[n,r]=x.useState(!0),i=localStorage.getItem("token"),o=(()=>{try{return JSON.parse(localStorage.getItem("user")||"null")}catch{return null}})(),a=et(),l={pending:"Створено",confirmed:"Підтверджено",paid:"Сплачено",delivered:"Доставлено",done:"Завершено",cancelled:"Скасовано"};return x.useEffect(()=>{if(!i||!(o!=null&&o.email)){r(!1);return}(async()=>{try{const c=await fetch(`https://backenddidiv-production.up.railway.app/api/orders?filters[email][$eq]=${encodeURIComponent(o.email)}`,{headers:{Authorization:`Bearer ${i}`}});if(c.status===401){localStorage.removeItem("token"),localStorage.removeItem("user"),a("/login",{replace:!0});return}if(!c.ok)throw new Error(`HTTP ${c.status}`);const d=await c.json(),f=Array.isArray(d)?d:d.data||[];t(f)}catch(c){console.error("Помилка завантаження замовлень:",c)}finally{r(!1)}})()},[i,o==null?void 0:o.email,a]),u.jsx(aY,{children:u.jsx(sY,{children:u.jsxs(lY,{children:[u.jsx(cY,{children:"Мої замовлення"}),n?u.jsx("p",{children:"Завантаження замовлень..."}):e.length===0?u.jsx("p",{children:"У вас поки немає замовлень."}):u.jsx(uY,{children:[...e].sort((s,c)=>{var m,p;const d=new Date(((m=s.attributes)==null?void 0:m.date)||s.date);return new Date(((p=c.attributes)==null?void 0:p.date)||c.date)-d}).map(s=>{const c=s.attributes||s,d=typeof c.products=="string"?JSON.parse(c.products):c.products||[];return u.jsxs(dY,{children:[u.jsxs(pY,{children:[u.jsxs(fY,{children:[u.jsxs(hY,{children:["№ ",c.order_number]}),c.date&&u.jsxs(mY,{children:["Дата створення замовлення:"," ",new Date(c.date).toLocaleDateString("uk-UA")]})]}),u.jsx(gY,{status:c.status_order,children:l[c.status_order]||"Створено"})]}),u.jsx(vY,{children:d.map(f=>u.jsxs(yY,{onClick:()=>a(`/product/${f.slug}`),children:[u.jsx("img",{src:f.image||ur,alt:f.name}),u.jsxs(xY,{children:[u.jsx("p",{children:f.name}),u.jsxs("span",{children:[f.quantity," шт. × ",f.price," грн"]})]})]},f.id))}),u.jsxs(bY,{children:[c.city&&u.jsxs("span",{children:[u.jsx("b",{children:"Місто:"})," ",c.city]}),c.delivery_method&&u.jsxs("span",{children:[u.jsx("b",{children:"Доставка:"})," ",c.delivery_method]}),c.delivery_address&&u.jsxs("span",{children:[u.jsx("b",{children:"Адреса:"})," ",c.delivery_address]}),c.ttn&&u.jsxs("span",{children:[u.jsx("b",{children:"ТТН:"})," ",c.ttn]})]})]},s.id||c.order_number)})})]})})})},SY=E.div`
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
`,CY=E.div`
  width: 100%;
  max-width: 500px;
  margin: 60px auto;
`,Gb=E.h1`
  margin: 0 0 12px;

  font-size: 30px;
  line-height: 1.2;
  font-weight: 300;

  color: #312620;
  text-align: center;

  @media screen and (min-width: 768px) {
    font-size: 42px;
  }
`,EY=E.p`
  margin: 0 0 32px;

  font-size: 15px;
  line-height: 1.5;

  color: #8d837d;

  text-align: center;
`,_Y=E.form`
  display: flex;
  flex-direction: column;
  gap: 18px;
`,qb=E.label`
  display: flex;
  flex-direction: column;
  gap: 8px;

  font-size: 14px;
  color: #3d2f29;
`,Yb=E.input`
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
`,Ya=E.div`
  position: relative;
  width: 100%;
 
`,Xa=E.button`
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
`,kY=E.button`
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
`,PY=E.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items:center;`,OY=E.button`
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
`,TY=E.p`
  margin: -8px 0 8px;

  font-size: 14px;
  line-height: 1.4;

  color: #c62828;
`,jY=E.p`
  margin: 20px 0 0;

  font-size: 15px;
  line-height: 1.5;

  color: #555;

  text-align: center;
`,$Y=({openLogin:e})=>{const[t]=vw(),n=et(),r=t.get("code"),[i,o]=x.useState(""),[a,l]=x.useState(!1),[s,c]=x.useState(!1),[d,f]=x.useState(""),[m,p]=x.useState(""),[h,y]=x.useState(!1),[w,g]=x.useState(!1),v=async C=>{var S;if(C.preventDefault(),p(""),!r){p("Посилання для відновлення пароля недійсне.");return}if(i.length<6){p("Пароль має містити щонайменше 6 символів.");return}if(i!==d){p("Паролі не збігаються.");return}g(!0);try{const P=await fetch("https://backenddidiv-production.up.railway.app/api/auth/reset-password",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({code:r,password:i,passwordConfirmation:d})}),k=await P.json();if(!P.ok)throw new Error(((S=k==null?void 0:k.error)==null?void 0:S.message)||"Не вдалося змінити пароль.");y(!0)}catch{p("Сталася помилка. Спробуйте ще раз.")}finally{g(!1)}},b=()=>{n("/"),e()};return u.jsx(SY,{children:u.jsx(CY,{children:h?u.jsxs(PY,{children:[u.jsx(Gb,{children:"Пароль змінено"}),u.jsx(jY,{children:"Ваш пароль успішно змінено. Тепер ви можете увійти до свого акаунта."}),u.jsx(OY,{type:"button",onClick:b,children:"Увійти"})]}):u.jsxs(u.Fragment,{children:[u.jsx(Gb,{children:"Новий пароль"}),u.jsx(EY,{children:"Введіть новий пароль для вашого облікового запису."}),u.jsxs(_Y,{onSubmit:v,children:[u.jsxs(qb,{children:["Новий пароль",u.jsxs(Ya,{children:[u.jsx(Yb,{type:a?"text":"password",value:i,onChange:C=>o(C.target.value),placeholder:"Введіть новий пароль",autoComplete:"new-password"}),u.jsx(Xa,{type:"button",onClick:()=>l(C=>!C),children:a?u.jsx(fi,{size:20}):u.jsx(pi,{size:20})})," "]})]}),u.jsxs(qb,{children:["Повторіть пароль",u.jsxs(Ya,{children:[u.jsx(Yb,{type:s?"text":"password",value:d,onChange:C=>f(C.target.value),placeholder:"Повторіть новий пароль",autoComplete:"new-password"}),u.jsx(Xa,{type:"button",onClick:()=>c(C=>!C),children:s?u.jsx(fi,{size:20}):u.jsx(pi,{size:20})})]})]}),m&&u.jsx(TY,{children:m}),u.jsx(kY,{type:"submit",disabled:w,children:w?"Збереження...":"Змінити пароль"})]})]})})})},IY=E.div`
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
`,MY=E.form`
  width: 100%;
  max-width: 480px;

  margin: 0 auto;
   @media screen and (min-width:768px) {
    margin-right:auto;
    margin-left: 0;
    
  }
`,AY=E.h1`
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
`,DY=E.p`
  margin: 0 0 40px;

  font-size: 17px;
  line-height: 1.5;

  color: #777;
`,Hp=E.div`
  display: flex;
  flex-direction: column;
 font-family: var(--second-font);
 font-weight:300;
  margin-bottom: 24px;
`,Gp=E.label`
  margin-bottom: 9px;

  font-size: 16px;
  line-height: 1.3;

  color: #333;
`,qp=E.input`
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
`,LY=E.button`
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
`;E.button`
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
`;const RY=E.p`
  margin: -4px 0 20px;

  font-size: 13px;
  line-height: 1.4;

  color: #b42318;
`,FY=E.p`
  margin: -4px 0 20px;

  font-size: 13px;
  line-height: 1.4;

  color: #26734d;
`,zY=()=>{const[e,t]=x.useState(!1),[n,r]=x.useState(!1),[i,o]=x.useState(!1),[a,l]=x.useState({currentPassword:"",newPassword:"",confirmPassword:""}),[s,c]=x.useState(""),[d,f]=x.useState(""),[m,p]=x.useState(!1),h=w=>{const{name:g,value:v}=w.target;l(b=>({...b,[g]:v})),c(""),f("")},y=async w=>{if(w.preventDefault(),c(""),f(""),!a.currentPassword||!a.newPassword||!a.confirmPassword){c("Заповніть усі поля.");return}if(a.newPassword.length<6){c("Новий пароль повинен містити щонайменше 6 символів.");return}if(a.newPassword!==a.confirmPassword){c("Нові паролі не співпадають.");return}if(a.currentPassword===a.newPassword){c("Новий пароль повинен відрізнятися від поточного.");return}try{p(!0);const g=localStorage.getItem("token"),v=await fetch("https://backenddidiv-production.up.railway.app/api/auth/change-password",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${g}`},body:JSON.stringify({currentPassword:a.currentPassword,password:a.newPassword,passwordConfirmation:a.newPassword})}),b=await v.json().catch(()=>null);if(!v.ok)throw new Error((b==null?void 0:b.message)||"Не вдалося змінити пароль.");f("Пароль успішно змінено."),l({currentPassword:"",newPassword:"",confirmPassword:""})}catch(g){c(g.message||"Сталася помилка. Спробуйте ще раз.")}finally{p(!1)}};return u.jsx(IY,{children:u.jsxs(MY,{onSubmit:y,children:[u.jsx(AY,{children:"Зміна пароля"}),u.jsx(DY,{children:"Введіть поточний пароль і встановіть новий."}),u.jsxs(Hp,{children:[u.jsx(Gp,{htmlFor:"currentPassword",children:"Поточний пароль"}),u.jsxs(Ya,{children:[u.jsx(qp,{id:"currentPassword",name:"currentPassword",type:e?"text":"password",value:a.currentPassword,onChange:h,autoComplete:"current-password",placeholder:"Введіть поточний пароль"}),u.jsx(Xa,{type:"button",onClick:()=>t(w=>!w),children:e?u.jsx(fi,{size:20}):u.jsx(pi,{size:20})})]})]}),u.jsxs(Hp,{children:[u.jsx(Gp,{htmlFor:"newPassword",children:"Новий пароль"}),u.jsxs(Ya,{children:[u.jsx(qp,{id:"newPassword",name:"newPassword",type:n?"text":"password",value:a.newPassword,onChange:h,autoComplete:"new-password",placeholder:"Введіть новий пароль"}),u.jsx(Xa,{type:"button",onClick:()=>r(w=>!w),children:n?u.jsx(fi,{size:20}):u.jsx(pi,{size:20})})]})]}),u.jsxs(Hp,{children:[u.jsx(Gp,{htmlFor:"confirmPassword",children:"Підтвердження нового пароля"}),u.jsxs(Ya,{children:[u.jsx(qp,{id:"confirmPassword",name:"confirmPassword",type:i?"text":"password",value:a.confirmPassword,onChange:h,autoComplete:"new-password",placeholder:"Повторіть новий пароль"}),u.jsx(Xa,{type:"button",onClick:()=>o(w=>!w),children:i?u.jsx(fi,{size:20}):u.jsx(pi,{size:20})})]})]}),s&&u.jsx(RY,{children:s}),d&&u.jsx(FY,{children:d}),u.jsx(LY,{type:"submit",disabled:m,children:m?"Зміна пароля...":"Змінити пароль"})]})})};function NY(){const e=Lt(),[t,n]=x.useState(!1),[r,i]=x.useState("login"),o=!!localStorage.getItem("token"),a=localStorage.getItem("token"),l=JSON.parse(localStorage.getItem("user")||"null"),s=l==null?void 0:l.documentId,c=Ge(f=>f.favorites.items),d=Ge(f=>f.cart.items);return x.useEffect(()=>{if(!a)return;(async()=>{try{const m=await fetch("https://backenddidiv-production.up.railway.app/api/users/me",{headers:{Authorization:`Bearer ${a}`}});if(m.status===401){localStorage.removeItem("token"),localStorage.removeItem("user"),e(fr()),e(Ls()),window.location.reload();return}m.ok||console.error("Auth check error:",m.status)}catch(m){console.error("Помилка перевірки авторизації:",m)}})()},[a,e]),x.useEffect(()=>{if(!a||!s)return;(async()=>{const m=localStorage.getItem("token");if(!m)return;const y=(await(await fetch(`https://backenddidiv-production.up.railway.app/api/favorites?filters[user][documentId][$eq]=${s}&populate=product.images`,{headers:{Authorization:`Bearer ${m}`}})).json()).data.map(w=>({...w.product,favoriteId:w.id,favoriteDocumentId:w.documentId}));e(BI(y))})()},[s,e,a]),u.jsxs(SA,{children:[u.jsx(i6,{}),u.jsx(KH,{}),u.jsxs(x.Suspense,{fallback:u.jsx(n6,{}),children:[u.jsx(FO,{children:u.jsxs(Ie,{path:"/",element:u.jsx(q3,{openLogin:()=>{i("login"),n(!0)},openRegister:()=>{i("register"),n(!0)}}),children:[u.jsx(Ie,{index:!0,element:u.jsx(ZL,{})}),u.jsx(Ie,{path:"catalog",element:u.jsx(gA,{})}),u.jsx(Ie,{path:"/catalog/:category",element:u.jsx(qz,{})}),u.jsx(Ie,{path:"/product/:identifier",element:u.jsx(l9,{})}),u.jsx(Ie,{path:"cart",element:u.jsx($B,{})}),u.jsx(Ie,{path:"favorite",element:u.jsx(FB,{})}),u.jsx(Ie,{path:"/catalog/new",element:u.jsx(DG,{})}),u.jsx(Ie,{path:"/catalog/sale",element:u.jsx(LG,{})}),u.jsx(Ie,{path:"checkout",element:u.jsx(jH,{})}),u.jsx(Ie,{path:"/order-confirmation",element:u.jsx(FH,{})}),u.jsx(Ie,{path:"about",element:u.jsx(XH,{})}),u.jsx(Ie,{path:"contacts",element:u.jsx(lG,{})}),u.jsx(Ie,{path:"delivery",element:u.jsx(UB,{})}),u.jsx(Ie,{path:"/reset-password",element:u.jsx($Y,{openLogin:()=>{i("login"),n(!0)}})}),u.jsxs(Ie,{path:"account",element:u.jsx(QG,{isLoggedIn:o,children:u.jsx(nY,{})}),children:[u.jsx(Ie,{index:!0,element:u.jsx(Hb,{})}),u.jsx(Ie,{path:"profile",element:u.jsx(Hb,{})}),u.jsx(Ie,{path:"orders",element:u.jsx(wY,{})}),u.jsx(Ie,{path:"password",element:u.jsx(zY,{})})]}),u.jsx(Ie,{path:"*",element:u.jsx(wA,{})})]})}),u.jsx(KG,{localFavorites:c,localCartItems:d,isOpen:t,mode:r,onClose:()=>n(!1),setMode:i})]})]})}Zp.createRoot(document.getElementById("root")).render(u.jsx(G4,{store:$k,children:u.jsx(Q.StrictMode,{children:u.jsx(HO,{basename:"/",children:u.jsx(NY,{})})})}));
