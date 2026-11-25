function jP(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();var ne=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Ro(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function Ct(e){if(e.__esModule)return e;var t=e.default;if(typeof t=="function"){var n=function r(){return this instanceof r?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach(function(r){var i=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(n,r,i.get?i:{enumerable:!0,get:function(){return e[r]}})}),n}var Zb={exports:{}},bu={},Jb={exports:{}},oe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _s=Symbol.for("react.element"),$P=Symbol.for("react.portal"),IP=Symbol.for("react.fragment"),MP=Symbol.for("react.strict_mode"),AP=Symbol.for("react.profiler"),DP=Symbol.for("react.provider"),LP=Symbol.for("react.context"),RP=Symbol.for("react.forward_ref"),FP=Symbol.for("react.suspense"),zP=Symbol.for("react.memo"),NP=Symbol.for("react.lazy"),lv=Symbol.iterator;function BP(e){return e===null||typeof e!="object"?null:(e=lv&&e[lv]||e["@@iterator"],typeof e=="function"?e:null)}var ew={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},tw=Object.assign,nw={};function Fo(e,t,n){this.props=e,this.context=t,this.refs=nw,this.updater=n||ew}Fo.prototype.isReactComponent={};Fo.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Fo.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function rw(){}rw.prototype=Fo.prototype;function Nm(e,t,n){this.props=e,this.context=t,this.refs=nw,this.updater=n||ew}var Bm=Nm.prototype=new rw;Bm.constructor=Nm;tw(Bm,Fo.prototype);Bm.isPureReactComponent=!0;var cv=Array.isArray,iw=Object.prototype.hasOwnProperty,Vm={current:null},ow={key:!0,ref:!0,__self:!0,__source:!0};function aw(e,t,n){var r,i={},o=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(o=""+t.key),t)iw.call(t,r)&&!ow.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var s=Array(l),c=0;c<l;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:_s,type:e,key:o,ref:a,props:i,_owner:Vm.current}}function VP(e,t){return{$$typeof:_s,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Wm(e){return typeof e=="object"&&e!==null&&e.$$typeof===_s}function WP(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var uv=/\/+/g;function Jd(e,t){return typeof e=="object"&&e!==null&&e.key!=null?WP(""+e.key):t.toString(36)}function Al(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case _s:case $P:a=!0}}if(a)return a=e,i=i(a),e=r===""?"."+Jd(a,0):r,cv(i)?(n="",e!=null&&(n=e.replace(uv,"$&/")+"/"),Al(i,t,n,"",function(c){return c})):i!=null&&(Wm(i)&&(i=VP(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(uv,"$&/")+"/")+e)),t.push(i)),1;if(a=0,r=r===""?".":r+":",cv(e))for(var l=0;l<e.length;l++){o=e[l];var s=r+Jd(o,l);a+=Al(o,t,n,s,i)}else if(s=BP(e),typeof s=="function")for(e=s.call(e),l=0;!(o=e.next()).done;)o=o.value,s=r+Jd(o,l++),a+=Al(o,t,n,s,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function qs(e,t,n){if(e==null)return e;var r=[],i=0;return Al(e,r,"","",function(o){return t.call(n,o,i++)}),r}function UP(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Et={current:null},Dl={transition:null},HP={ReactCurrentDispatcher:Et,ReactCurrentBatchConfig:Dl,ReactCurrentOwner:Vm};oe.Children={map:qs,forEach:function(e,t,n){qs(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return qs(e,function(){t++}),t},toArray:function(e){return qs(e,function(t){return t})||[]},only:function(e){if(!Wm(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};oe.Component=Fo;oe.Fragment=IP;oe.Profiler=AP;oe.PureComponent=Nm;oe.StrictMode=MP;oe.Suspense=FP;oe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=HP;oe.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=tw({},e.props),i=e.key,o=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,a=Vm.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in t)iw.call(t,s)&&!ow.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&l!==void 0?l[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){l=Array(s);for(var c=0;c<s;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:_s,type:e.type,key:i,ref:o,props:r,_owner:a}};oe.createContext=function(e){return e={$$typeof:LP,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:DP,_context:e},e.Consumer=e};oe.createElement=aw;oe.createFactory=function(e){var t=aw.bind(null,e);return t.type=e,t};oe.createRef=function(){return{current:null}};oe.forwardRef=function(e){return{$$typeof:RP,render:e}};oe.isValidElement=Wm;oe.lazy=function(e){return{$$typeof:NP,_payload:{_status:-1,_result:e},_init:UP}};oe.memo=function(e,t){return{$$typeof:zP,type:e,compare:t===void 0?null:t}};oe.startTransition=function(e){var t=Dl.transition;Dl.transition={};try{e()}finally{Dl.transition=t}};oe.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};oe.useCallback=function(e,t){return Et.current.useCallback(e,t)};oe.useContext=function(e){return Et.current.useContext(e)};oe.useDebugValue=function(){};oe.useDeferredValue=function(e){return Et.current.useDeferredValue(e)};oe.useEffect=function(e,t){return Et.current.useEffect(e,t)};oe.useId=function(){return Et.current.useId()};oe.useImperativeHandle=function(e,t,n){return Et.current.useImperativeHandle(e,t,n)};oe.useInsertionEffect=function(e,t){return Et.current.useInsertionEffect(e,t)};oe.useLayoutEffect=function(e,t){return Et.current.useLayoutEffect(e,t)};oe.useMemo=function(e,t){return Et.current.useMemo(e,t)};oe.useReducer=function(e,t,n){return Et.current.useReducer(e,t,n)};oe.useRef=function(e){return Et.current.useRef(e)};oe.useState=function(e){return Et.current.useState(e)};oe.useSyncExternalStore=function(e,t,n){return Et.current.useSyncExternalStore(e,t,n)};oe.useTransition=function(){return Et.current.useTransition()};oe.version="18.2.0";Jb.exports=oe;var x=Jb.exports;const K=Ro(x),Xp=jP({__proto__:null,default:K},[x]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var GP=x,qP=Symbol.for("react.element"),YP=Symbol.for("react.fragment"),XP=Object.prototype.hasOwnProperty,KP=GP.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,QP={key:!0,ref:!0,__self:!0,__source:!0};function sw(e,t,n){var r,i={},o=null,a=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)XP.call(t,r)&&!QP.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:qP,type:e,key:o,ref:a,props:i,_owner:KP.current}}bu.Fragment=YP;bu.jsx=sw;bu.jsxs=sw;Zb.exports=bu;var u=Zb.exports;/**
 * @remix-run/router v1.8.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ka(){return Ka=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ka.apply(this,arguments)}var _r;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(_r||(_r={}));const dv="popstate";function ZP(e){e===void 0&&(e={});function t(r,i){let{pathname:o,search:a,hash:l}=r.location;return Kp("",{pathname:o,search:a,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:fc(i)}return eO(t,n,null,e)}function Le(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Um(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function JP(){return Math.random().toString(36).substr(2,8)}function fv(e,t){return{usr:e.state,key:e.key,idx:t}}function Kp(e,t,n,r){return n===void 0&&(n=null),Ka({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?zo(t):t,{state:n,key:t&&t.key||r||JP()})}function fc(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function zo(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function eO(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,a=i.history,l=_r.Pop,s=null,c=f();c==null&&(c=0,a.replaceState(Ka({},a.state,{idx:c}),""));function f(){return(a.state||{idx:null}).idx}function d(){l=_r.Pop;let w=f(),g=w==null?null:w-c;c=w,s&&s({action:l,location:y.location,delta:g})}function h(w,g){l=_r.Push;let v=Kp(y.location,w,g);n&&n(v,w),c=f()+1;let b=fv(v,c),C=y.createHref(v);try{a.pushState(b,"",C)}catch(S){if(S instanceof DOMException&&S.name==="DataCloneError")throw S;i.location.assign(C)}o&&s&&s({action:l,location:y.location,delta:1})}function p(w,g){l=_r.Replace;let v=Kp(y.location,w,g);n&&n(v,w),c=f();let b=fv(v,c),C=y.createHref(v);a.replaceState(b,"",C),o&&s&&s({action:l,location:y.location,delta:0})}function m(w){let g=i.location.origin!=="null"?i.location.origin:i.location.href,v=typeof w=="string"?w:fc(w);return Le(g,"No window.location.(origin|href) available to create URL for href: "+v),new URL(v,g)}let y={get action(){return l},get location(){return e(i,a)},listen(w){if(s)throw new Error("A history only accepts one active listener");return i.addEventListener(dv,d),s=w,()=>{i.removeEventListener(dv,d),s=null}},createHref(w){return t(i,w)},createURL:m,encodeLocation(w){let g=m(w);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:h,replace:p,go(w){return a.go(w)}};return y}var pv;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(pv||(pv={}));function tO(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?zo(t):t,i=Hm(r.pathname||"/",n);if(i==null)return null;let o=lw(e);nO(o);let a=null;for(let l=0;a==null&&l<o.length;++l)a=dO(o[l],hO(i));return a}function lw(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,a,l)=>{let s={relativePath:l===void 0?o.path||"":l,caseSensitive:o.caseSensitive===!0,childrenIndex:a,route:o};s.relativePath.startsWith("/")&&(Le(s.relativePath.startsWith(r),'Absolute route path "'+s.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),s.relativePath=s.relativePath.slice(r.length));let c=$r([r,s.relativePath]),f=n.concat(s);o.children&&o.children.length>0&&(Le(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),lw(o.children,t,f,c)),!(o.path==null&&!o.index)&&t.push({path:c,score:cO(c,o.index),routesMeta:f})};return e.forEach((o,a)=>{var l;if(o.path===""||!((l=o.path)!=null&&l.includes("?")))i(o,a);else for(let s of cw(o.path))i(o,a,s)}),t}function cw(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let a=cw(r.join("/")),l=[];return l.push(...a.map(s=>s===""?o:[o,s].join("/"))),i&&l.push(...a),l.map(s=>e.startsWith("/")&&s===""?"/":s)}function nO(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:uO(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const rO=/^:\w+$/,iO=3,oO=2,aO=1,sO=10,lO=-2,hv=e=>e==="*";function cO(e,t){let n=e.split("/"),r=n.length;return n.some(hv)&&(r+=lO),t&&(r+=oO),n.filter(i=>!hv(i)).reduce((i,o)=>i+(rO.test(o)?iO:o===""?aO:sO),r)}function uO(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function dO(e,t){let{routesMeta:n}=e,r={},i="/",o=[];for(let a=0;a<n.length;++a){let l=n[a],s=a===n.length-1,c=i==="/"?t:t.slice(i.length)||"/",f=fO({path:l.relativePath,caseSensitive:l.caseSensitive,end:s},c);if(!f)return null;Object.assign(r,f.params);let d=l.route;o.push({params:r,pathname:$r([i,f.pathname]),pathnameBase:yO($r([i,f.pathnameBase])),route:d}),f.pathnameBase!=="/"&&(i=$r([i,f.pathnameBase]))}return o}function fO(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=pO(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],a=o.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((c,f,d)=>{if(f==="*"){let h=l[d]||"";a=o.slice(0,o.length-h.length).replace(/(.)\/+$/,"$1")}return c[f]=mO(l[d]||"",f),c},{}),pathname:o,pathnameBase:a,pattern:e}}function pO(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Um(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(a,l)=>(r.push(l),"/([^\\/]+)"));return e.endsWith("*")?(r.push("*"),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function hO(e){try{return decodeURI(e)}catch(t){return Um(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function mO(e,t){try{return decodeURIComponent(e)}catch(n){return Um(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function Hm(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function gO(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?zo(e):e;return{pathname:n?n.startsWith("/")?n:vO(n,t):t,search:xO(r),hash:bO(i)}}function vO(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function ef(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Gm(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function qm(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=zo(e):(i=Ka({},e),Le(!i.pathname||!i.pathname.includes("?"),ef("?","pathname","search",i)),Le(!i.pathname||!i.pathname.includes("#"),ef("#","pathname","hash",i)),Le(!i.search||!i.search.includes("#"),ef("#","search","hash",i)));let o=e===""||i.pathname==="",a=o?"/":i.pathname,l;if(r||a==null)l=n;else{let d=t.length-1;if(a.startsWith("..")){let h=a.split("/");for(;h[0]==="..";)h.shift(),d-=1;i.pathname=h.join("/")}l=d>=0?t[d]:"/"}let s=gO(i,l),c=a&&a!=="/"&&a.endsWith("/"),f=(o||a===".")&&n.endsWith("/");return!s.pathname.endsWith("/")&&(c||f)&&(s.pathname+="/"),s}const $r=e=>e.join("/").replace(/\/\/+/g,"/"),yO=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),xO=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,bO=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function wO(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const uw=["post","put","patch","delete"];new Set(uw);const SO=["get",...uw];new Set(SO);/**
 * React Router v6.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function pc(){return pc=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},pc.apply(this,arguments)}const Ym=x.createContext(null),dw=x.createContext(null),ki=x.createContext(null),wu=x.createContext(null),Vn=x.createContext({outlet:null,matches:[],isDataRoute:!1}),fw=x.createContext(null);function CO(e,t){let{relative:n}=t===void 0?{}:t;No()||Le(!1);let{basename:r,navigator:i}=x.useContext(ki),{hash:o,pathname:a,search:l}=Xm(e,{relative:n}),s=a;return r!=="/"&&(s=a==="/"?r:$r([r,a])),i.createHref({pathname:s,search:l,hash:o})}function No(){return x.useContext(wu)!=null}function Wn(){return No()||Le(!1),x.useContext(wu).location}function pw(e){x.useContext(ki).static||x.useLayoutEffect(e)}function et(){let{isDataRoute:e}=x.useContext(Vn);return e?FO():EO()}function EO(){No()||Le(!1);let e=x.useContext(Ym),{basename:t,navigator:n}=x.useContext(ki),{matches:r}=x.useContext(Vn),{pathname:i}=Wn(),o=JSON.stringify(Gm(r).map(s=>s.pathnameBase)),a=x.useRef(!1);return pw(()=>{a.current=!0}),x.useCallback(function(s,c){if(c===void 0&&(c={}),!a.current)return;if(typeof s=="number"){n.go(s);return}let f=qm(s,JSON.parse(o),i,c.relative==="path");e==null&&t!=="/"&&(f.pathname=f.pathname==="/"?t:$r([t,f.pathname])),(c.replace?n.replace:n.push)(f,c.state,c)},[t,n,o,i,e])}const _O=x.createContext(null);function kO(e){let t=x.useContext(Vn).outlet;return t&&x.createElement(_O.Provider,{value:e},t)}function hw(){let{matches:e}=x.useContext(Vn),t=e[e.length-1];return t?t.params:{}}function Xm(e,t){let{relative:n}=t===void 0?{}:t,{matches:r}=x.useContext(Vn),{pathname:i}=Wn(),o=JSON.stringify(Gm(r).map(a=>a.pathnameBase));return x.useMemo(()=>qm(e,JSON.parse(o),i,n==="path"),[e,o,i,n])}function PO(e,t){return OO(e,t)}function OO(e,t,n){No()||Le(!1);let{navigator:r}=x.useContext(ki),{matches:i}=x.useContext(Vn),o=i[i.length-1],a=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let s=Wn(),c;if(t){var f;let y=typeof t=="string"?zo(t):t;l==="/"||(f=y.pathname)!=null&&f.startsWith(l)||Le(!1),c=y}else c=s;let d=c.pathname||"/",h=l==="/"?d:d.slice(l.length)||"/",p=tO(e,{pathname:h}),m=MO(p&&p.map(y=>Object.assign({},y,{params:Object.assign({},a,y.params),pathname:$r([l,r.encodeLocation?r.encodeLocation(y.pathname).pathname:y.pathname]),pathnameBase:y.pathnameBase==="/"?l:$r([l,r.encodeLocation?r.encodeLocation(y.pathnameBase).pathname:y.pathnameBase])})),i,n);return t&&m?x.createElement(wu.Provider,{value:{location:pc({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:_r.Pop}},m):m}function TO(){let e=RO(),t=wO(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},o=null;return x.createElement(x.Fragment,null,x.createElement("h2",null,"Unexpected Application Error!"),x.createElement("h3",{style:{fontStyle:"italic"}},t),n?x.createElement("pre",{style:i},n):null,o)}const jO=x.createElement(TO,null);class $O extends x.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error||n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?x.createElement(Vn.Provider,{value:this.props.routeContext},x.createElement(fw.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function IO(e){let{routeContext:t,match:n,children:r}=e,i=x.useContext(Ym);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),x.createElement(Vn.Provider,{value:t},r)}function MO(e,t,n){var r;if(t===void 0&&(t=[]),n===void 0&&(n=null),e==null){var i;if((i=n)!=null&&i.errors)e=n.matches;else return null}let o=e,a=(r=n)==null?void 0:r.errors;if(a!=null){let l=o.findIndex(s=>s.route.id&&(a==null?void 0:a[s.route.id]));l>=0||Le(!1),o=o.slice(0,Math.min(o.length,l+1))}return o.reduceRight((l,s,c)=>{let f=s.route.id?a==null?void 0:a[s.route.id]:null,d=null;n&&(d=s.route.errorElement||jO);let h=t.concat(o.slice(0,c+1)),p=()=>{let m;return f?m=d:s.route.Component?m=x.createElement(s.route.Component,null):s.route.element?m=s.route.element:m=l,x.createElement(IO,{match:s,routeContext:{outlet:l,matches:h,isDataRoute:n!=null},children:m})};return n&&(s.route.ErrorBoundary||s.route.errorElement||c===0)?x.createElement($O,{location:n.location,revalidation:n.revalidation,component:d,error:f,children:p(),routeContext:{outlet:null,matches:h,isDataRoute:!0}}):p()},null)}var mw=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(mw||{}),hc=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(hc||{});function AO(e){let t=x.useContext(Ym);return t||Le(!1),t}function DO(e){let t=x.useContext(dw);return t||Le(!1),t}function LO(e){let t=x.useContext(Vn);return t||Le(!1),t}function gw(e){let t=LO(),n=t.matches[t.matches.length-1];return n.route.id||Le(!1),n.route.id}function RO(){var e;let t=x.useContext(fw),n=DO(hc.UseRouteError),r=gw(hc.UseRouteError);return t||((e=n.errors)==null?void 0:e[r])}function FO(){let{router:e}=AO(mw.UseNavigateStable),t=gw(hc.UseNavigateStable),n=x.useRef(!1);return pw(()=>{n.current=!0}),x.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,pc({fromRouteId:t},o)))},[e,t])}function zO(e){let{to:t,replace:n,state:r,relative:i}=e;No()||Le(!1);let{matches:o}=x.useContext(Vn),{pathname:a}=Wn(),l=et(),s=qm(t,Gm(o).map(f=>f.pathnameBase),a,i==="path"),c=JSON.stringify(s);return x.useEffect(()=>l(JSON.parse(c),{replace:n,state:r,relative:i}),[l,c,i,n,r]),null}function vw(e){return kO(e.context)}function $e(e){Le(!1)}function NO(e){let{basename:t="/",children:n=null,location:r,navigationType:i=_r.Pop,navigator:o,static:a=!1}=e;No()&&Le(!1);let l=t.replace(/^\/*/,"/"),s=x.useMemo(()=>({basename:l,navigator:o,static:a}),[l,o,a]);typeof r=="string"&&(r=zo(r));let{pathname:c="/",search:f="",hash:d="",state:h=null,key:p="default"}=r,m=x.useMemo(()=>{let y=Hm(c,l);return y==null?null:{location:{pathname:y,search:f,hash:d,state:h,key:p},navigationType:i}},[l,c,f,d,h,p,i]);return m==null?null:x.createElement(ki.Provider,{value:s},x.createElement(wu.Provider,{children:n,value:m}))}function BO(e){let{children:t,location:n}=e;return PO(Qp(t),n)}new Promise(()=>{});function Qp(e,t){t===void 0&&(t=[]);let n=[];return x.Children.forEach(e,(r,i)=>{if(!x.isValidElement(r))return;let o=[...t,i];if(r.type===x.Fragment){n.push.apply(n,Qp(r.props.children,o));return}r.type!==$e&&Le(!1),!r.props.index||!r.props.children||Le(!1);let a={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(a.children=Qp(r.props.children,o)),n.push(a)}),n}/**
 * React Router DOM v6.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function mc(){return mc=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},mc.apply(this,arguments)}function yw(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function VO(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function WO(e,t){return e.button===0&&(!t||t==="_self")&&!VO(e)}function Zp(e){return e===void 0&&(e=""),new URLSearchParams(typeof e=="string"||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce((t,n)=>{let r=e[n];return t.concat(Array.isArray(r)?r.map(i=>[n,i]):[[n,r]])},[]))}function UO(e,t){let n=Zp(e);return t&&t.forEach((r,i)=>{n.has(i)||t.getAll(i).forEach(o=>{n.append(i,o)})}),n}const HO=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],GO=["aria-current","caseSensitive","className","end","style","to","children"],qO="startTransition",mv=Xp[qO];function YO(e){let{basename:t,children:n,future:r,window:i}=e,o=x.useRef();o.current==null&&(o.current=ZP({window:i,v5Compat:!0}));let a=o.current,[l,s]=x.useState({action:a.action,location:a.location}),{v7_startTransition:c}=r||{},f=x.useCallback(d=>{c&&mv?mv(()=>s(d)):s(d)},[s,c]);return x.useLayoutEffect(()=>a.listen(f),[a,f]),x.createElement(NO,{basename:t,children:n,location:l.location,navigationType:l.action,navigator:a})}const XO=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",KO=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ge=x.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:o,replace:a,state:l,target:s,to:c,preventScrollReset:f}=t,d=yw(t,HO),{basename:h}=x.useContext(ki),p,m=!1;if(typeof c=="string"&&KO.test(c)&&(p=c,XO))try{let v=new URL(window.location.href),b=c.startsWith("//")?new URL(v.protocol+c):new URL(c),C=Hm(b.pathname,h);b.origin===v.origin&&C!=null?c=C+b.search+b.hash:m=!0}catch{}let y=CO(c,{relative:i}),w=QO(c,{replace:a,state:l,target:s,preventScrollReset:f,relative:i});function g(v){r&&r(v),v.defaultPrevented||w(v)}return x.createElement("a",mc({},d,{href:p||y,onClick:m||o?r:g,ref:n,target:s}))}),xw=x.forwardRef(function(t,n){let{"aria-current":r="page",caseSensitive:i=!1,className:o="",end:a=!1,style:l,to:s,children:c}=t,f=yw(t,GO),d=Xm(s,{relative:f.relative}),h=Wn(),p=x.useContext(dw),{navigator:m}=x.useContext(ki),y=m.encodeLocation?m.encodeLocation(d).pathname:d.pathname,w=h.pathname,g=p&&p.navigation&&p.navigation.location?p.navigation.location.pathname:null;i||(w=w.toLowerCase(),g=g?g.toLowerCase():null,y=y.toLowerCase());let v=w===y||!a&&w.startsWith(y)&&w.charAt(y.length)==="/",b=g!=null&&(g===y||!a&&g.startsWith(y)&&g.charAt(y.length)==="/"),C=v?r:void 0,S;typeof o=="function"?S=o({isActive:v,isPending:b}):S=[o,v?"active":null,b?"pending":null].filter(Boolean).join(" ");let P=typeof l=="function"?l({isActive:v,isPending:b}):l;return x.createElement(ge,mc({},f,{"aria-current":C,className:S,ref:n,style:P,to:s}),typeof c=="function"?c({isActive:v,isPending:b}):c)});var gv;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher"})(gv||(gv={}));var vv;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(vv||(vv={}));function QO(e,t){let{target:n,replace:r,state:i,preventScrollReset:o,relative:a}=t===void 0?{}:t,l=et(),s=Wn(),c=Xm(e,{relative:a});return x.useCallback(f=>{if(WO(f,n)){f.preventDefault();let d=r!==void 0?r:fc(s)===fc(c);l(e,{replace:d,state:i,preventScrollReset:o,relative:a})}},[s,l,c,r,i,n,e,o,a])}function bw(e){let t=x.useRef(Zp(e)),n=x.useRef(!1),r=Wn(),i=x.useMemo(()=>UO(r.search,n.current?null:t.current),[r.search]),o=et(),a=x.useCallback((l,s)=>{const c=Zp(typeof l=="function"?l(i):l);n.current=!0,o("?"+c,s)},[o,i]);return[i,a]}var Jp={},ww={exports:{}},Yt={},Sw={exports:{}},Cw={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(O,A){var N=O.length;O.push(A);e:for(;0<N;){var B=N-1>>>1,L=O[B];if(0<i(L,A))O[B]=A,O[N]=L,N=B;else break e}}function n(O){return O.length===0?null:O[0]}function r(O){if(O.length===0)return null;var A=O[0],N=O.pop();if(N!==A){O[0]=N;e:for(var B=0,L=O.length,V=L>>>1;B<V;){var H=2*(B+1)-1,G=O[H],W=H+1,Q=O[W];if(0>i(G,N))W<L&&0>i(Q,G)?(O[B]=Q,O[W]=N,B=W):(O[B]=G,O[H]=N,B=H);else if(W<L&&0>i(Q,N))O[B]=Q,O[W]=N,B=W;else break e}}return A}function i(O,A){var N=O.sortIndex-A.sortIndex;return N!==0?N:O.id-A.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var a=Date,l=a.now();e.unstable_now=function(){return a.now()-l}}var s=[],c=[],f=1,d=null,h=3,p=!1,m=!1,y=!1,w=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function b(O){for(var A=n(c);A!==null;){if(A.callback===null)r(c);else if(A.startTime<=O)r(c),A.sortIndex=A.expirationTime,t(s,A);else break;A=n(c)}}function C(O){if(y=!1,b(O),!m)if(n(s)!==null)m=!0,z(S);else{var A=n(c);A!==null&&R(C,A.startTime-O)}}function S(O,A){m=!1,y&&(y=!1,g(_),_=-1),p=!0;var N=h;try{for(b(A),d=n(s);d!==null&&(!(d.expirationTime>A)||O&&!I());){var B=d.callback;if(typeof B=="function"){d.callback=null,h=d.priorityLevel;var L=B(d.expirationTime<=A);A=e.unstable_now(),typeof L=="function"?d.callback=L:d===n(s)&&r(s),b(A)}else r(s);d=n(s)}if(d!==null)var V=!0;else{var H=n(c);H!==null&&R(C,H.startTime-A),V=!1}return V}finally{d=null,h=N,p=!1}}var P=!1,k=null,_=-1,T=5,$=-1;function I(){return!(e.unstable_now()-$<T)}function M(){if(k!==null){var O=e.unstable_now();$=O;var A=!0;try{A=k(!0,O)}finally{A?j():(P=!1,k=null)}}else P=!1}var j;if(typeof v=="function")j=function(){v(M)};else if(typeof MessageChannel<"u"){var F=new MessageChannel,D=F.port2;F.port1.onmessage=M,j=function(){D.postMessage(null)}}else j=function(){w(M,0)};function z(O){k=O,P||(P=!0,j())}function R(O,A){_=w(function(){O(e.unstable_now())},A)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(O){O.callback=null},e.unstable_continueExecution=function(){m||p||(m=!0,z(S))},e.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<O?Math.floor(1e3/O):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(O){switch(h){case 1:case 2:case 3:var A=3;break;default:A=h}var N=h;h=A;try{return O()}finally{h=N}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(O,A){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var N=h;h=O;try{return A()}finally{h=N}},e.unstable_scheduleCallback=function(O,A,N){var B=e.unstable_now();switch(typeof N=="object"&&N!==null?(N=N.delay,N=typeof N=="number"&&0<N?B+N:B):N=B,O){case 1:var L=-1;break;case 2:L=250;break;case 5:L=1073741823;break;case 4:L=1e4;break;default:L=5e3}return L=N+L,O={id:f++,callback:A,priorityLevel:O,startTime:N,expirationTime:L,sortIndex:-1},N>B?(O.sortIndex=N,t(c,O),n(s)===null&&O===n(c)&&(y?(g(_),_=-1):y=!0,R(C,N-B))):(O.sortIndex=L,t(s,O),m||p||(m=!0,z(S))),O},e.unstable_shouldYield=I,e.unstable_wrapCallback=function(O){var A=h;return function(){var N=h;h=A;try{return O.apply(this,arguments)}finally{h=N}}}})(Cw);Sw.exports=Cw;var ZO=Sw.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ew=x,Gt=ZO;function U(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var _w=new Set,Qa={};function Pi(e,t){xo(e,t),xo(e+"Capture",t)}function xo(e,t){for(Qa[e]=t,e=0;e<t.length;e++)_w.add(t[e])}var or=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),eh=Object.prototype.hasOwnProperty,JO=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,yv={},xv={};function eT(e){return eh.call(xv,e)?!0:eh.call(yv,e)?!1:JO.test(e)?xv[e]=!0:(yv[e]=!0,!1)}function tT(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function nT(e,t,n,r){if(t===null||typeof t>"u"||tT(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function _t(e,t,n,r,i,o,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=a}var st={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){st[e]=new _t(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];st[t]=new _t(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){st[e]=new _t(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){st[e]=new _t(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){st[e]=new _t(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){st[e]=new _t(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){st[e]=new _t(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){st[e]=new _t(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){st[e]=new _t(e,5,!1,e.toLowerCase(),null,!1,!1)});var Km=/[\-:]([a-z])/g;function Qm(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Km,Qm);st[t]=new _t(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Km,Qm);st[t]=new _t(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Km,Qm);st[t]=new _t(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){st[e]=new _t(e,1,!1,e.toLowerCase(),null,!1,!1)});st.xlinkHref=new _t("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){st[e]=new _t(e,1,!1,e.toLowerCase(),null,!0,!0)});function Zm(e,t,n,r){var i=st.hasOwnProperty(t)?st[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(nT(t,n,i,r)&&(n=null),r||i===null?eT(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var pr=Ew.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ys=Symbol.for("react.element"),Ki=Symbol.for("react.portal"),Qi=Symbol.for("react.fragment"),Jm=Symbol.for("react.strict_mode"),th=Symbol.for("react.profiler"),kw=Symbol.for("react.provider"),Pw=Symbol.for("react.context"),eg=Symbol.for("react.forward_ref"),nh=Symbol.for("react.suspense"),rh=Symbol.for("react.suspense_list"),tg=Symbol.for("react.memo"),br=Symbol.for("react.lazy"),Ow=Symbol.for("react.offscreen"),bv=Symbol.iterator;function na(e){return e===null||typeof e!="object"?null:(e=bv&&e[bv]||e["@@iterator"],typeof e=="function"?e:null)}var je=Object.assign,tf;function xa(e){if(tf===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);tf=t&&t[1]||""}return`
`+tf+e}var nf=!1;function rf(e,t){if(!e||nf)return"";nf=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),o=r.stack.split(`
`),a=i.length-1,l=o.length-1;1<=a&&0<=l&&i[a]!==o[l];)l--;for(;1<=a&&0<=l;a--,l--)if(i[a]!==o[l]){if(a!==1||l!==1)do if(a--,l--,0>l||i[a]!==o[l]){var s=`
`+i[a].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=a&&0<=l);break}}}finally{nf=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?xa(e):""}function rT(e){switch(e.tag){case 5:return xa(e.type);case 16:return xa("Lazy");case 13:return xa("Suspense");case 19:return xa("SuspenseList");case 0:case 2:case 15:return e=rf(e.type,!1),e;case 11:return e=rf(e.type.render,!1),e;case 1:return e=rf(e.type,!0),e;default:return""}}function ih(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Qi:return"Fragment";case Ki:return"Portal";case th:return"Profiler";case Jm:return"StrictMode";case nh:return"Suspense";case rh:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Pw:return(e.displayName||"Context")+".Consumer";case kw:return(e._context.displayName||"Context")+".Provider";case eg:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case tg:return t=e.displayName||null,t!==null?t:ih(e.type)||"Memo";case br:t=e._payload,e=e._init;try{return ih(e(t))}catch{}}return null}function iT(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ih(t);case 8:return t===Jm?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Br(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Tw(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function oT(e){var t=Tw(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(a){r=""+a,o.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Xs(e){e._valueTracker||(e._valueTracker=oT(e))}function jw(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Tw(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function gc(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function oh(e,t){var n=t.checked;return je({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function wv(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Br(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function $w(e,t){t=t.checked,t!=null&&Zm(e,"checked",t,!1)}function ah(e,t){$w(e,t);var n=Br(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?sh(e,t.type,n):t.hasOwnProperty("defaultValue")&&sh(e,t.type,Br(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Sv(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function sh(e,t,n){(t!=="number"||gc(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var ba=Array.isArray;function lo(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Br(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function lh(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(U(91));return je({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Cv(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(U(92));if(ba(n)){if(1<n.length)throw Error(U(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Br(n)}}function Iw(e,t){var n=Br(t.value),r=Br(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Ev(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Mw(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ch(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Mw(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Ks,Aw=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Ks=Ks||document.createElement("div"),Ks.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Ks.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Za(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var ja={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},aT=["Webkit","ms","Moz","O"];Object.keys(ja).forEach(function(e){aT.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),ja[t]=ja[e]})});function Dw(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||ja.hasOwnProperty(e)&&ja[e]?(""+t).trim():t+"px"}function Lw(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Dw(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var sT=je({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function uh(e,t){if(t){if(sT[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(U(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(U(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(U(61))}if(t.style!=null&&typeof t.style!="object")throw Error(U(62))}}function dh(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var fh=null;function ng(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ph=null,co=null,uo=null;function _v(e){if(e=Os(e)){if(typeof ph!="function")throw Error(U(280));var t=e.stateNode;t&&(t=ku(t),ph(e.stateNode,e.type,t))}}function Rw(e){co?uo?uo.push(e):uo=[e]:co=e}function Fw(){if(co){var e=co,t=uo;if(uo=co=null,_v(e),t)for(e=0;e<t.length;e++)_v(t[e])}}function zw(e,t){return e(t)}function Nw(){}var of=!1;function Bw(e,t,n){if(of)return e(t,n);of=!0;try{return zw(e,t,n)}finally{of=!1,(co!==null||uo!==null)&&(Nw(),Fw())}}function Ja(e,t){var n=e.stateNode;if(n===null)return null;var r=ku(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(U(231,t,typeof n));return n}var hh=!1;if(or)try{var ra={};Object.defineProperty(ra,"passive",{get:function(){hh=!0}}),window.addEventListener("test",ra,ra),window.removeEventListener("test",ra,ra)}catch{hh=!1}function lT(e,t,n,r,i,o,a,l,s){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(f){this.onError(f)}}var $a=!1,vc=null,yc=!1,mh=null,cT={onError:function(e){$a=!0,vc=e}};function uT(e,t,n,r,i,o,a,l,s){$a=!1,vc=null,lT.apply(cT,arguments)}function dT(e,t,n,r,i,o,a,l,s){if(uT.apply(this,arguments),$a){if($a){var c=vc;$a=!1,vc=null}else throw Error(U(198));yc||(yc=!0,mh=c)}}function Oi(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Vw(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function kv(e){if(Oi(e)!==e)throw Error(U(188))}function fT(e){var t=e.alternate;if(!t){if(t=Oi(e),t===null)throw Error(U(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return kv(i),e;if(o===r)return kv(i),t;o=o.sibling}throw Error(U(188))}if(n.return!==r.return)n=i,r=o;else{for(var a=!1,l=i.child;l;){if(l===n){a=!0,n=i,r=o;break}if(l===r){a=!0,r=i,n=o;break}l=l.sibling}if(!a){for(l=o.child;l;){if(l===n){a=!0,n=o,r=i;break}if(l===r){a=!0,r=o,n=i;break}l=l.sibling}if(!a)throw Error(U(189))}}if(n.alternate!==r)throw Error(U(190))}if(n.tag!==3)throw Error(U(188));return n.stateNode.current===n?e:t}function Ww(e){return e=fT(e),e!==null?Uw(e):null}function Uw(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Uw(e);if(t!==null)return t;e=e.sibling}return null}var Hw=Gt.unstable_scheduleCallback,Pv=Gt.unstable_cancelCallback,pT=Gt.unstable_shouldYield,hT=Gt.unstable_requestPaint,De=Gt.unstable_now,mT=Gt.unstable_getCurrentPriorityLevel,rg=Gt.unstable_ImmediatePriority,Gw=Gt.unstable_UserBlockingPriority,xc=Gt.unstable_NormalPriority,gT=Gt.unstable_LowPriority,qw=Gt.unstable_IdlePriority,Su=null,Ln=null;function vT(e){if(Ln&&typeof Ln.onCommitFiberRoot=="function")try{Ln.onCommitFiberRoot(Su,e,void 0,(e.current.flags&128)===128)}catch{}}var gn=Math.clz32?Math.clz32:bT,yT=Math.log,xT=Math.LN2;function bT(e){return e>>>=0,e===0?32:31-(yT(e)/xT|0)|0}var Qs=64,Zs=4194304;function wa(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function bc(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,a=n&268435455;if(a!==0){var l=a&~i;l!==0?r=wa(l):(o&=a,o!==0&&(r=wa(o)))}else a=n&~i,a!==0?r=wa(a):o!==0&&(r=wa(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-gn(t),i=1<<n,r|=e[n],t&=~i;return r}function wT(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ST(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var a=31-gn(o),l=1<<a,s=i[a];s===-1?(!(l&n)||l&r)&&(i[a]=wT(l,t)):s<=t&&(e.expiredLanes|=l),o&=~l}}function gh(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Yw(){var e=Qs;return Qs<<=1,!(Qs&4194240)&&(Qs=64),e}function af(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ks(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-gn(t),e[t]=n}function CT(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-gn(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function ig(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-gn(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var ye=0;function Xw(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Kw,og,Qw,Zw,Jw,vh=!1,Js=[],Ir=null,Mr=null,Ar=null,es=new Map,ts=new Map,Sr=[],ET="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ov(e,t){switch(e){case"focusin":case"focusout":Ir=null;break;case"dragenter":case"dragleave":Mr=null;break;case"mouseover":case"mouseout":Ar=null;break;case"pointerover":case"pointerout":es.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ts.delete(t.pointerId)}}function ia(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=Os(t),t!==null&&og(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function _T(e,t,n,r,i){switch(t){case"focusin":return Ir=ia(Ir,e,t,n,r,i),!0;case"dragenter":return Mr=ia(Mr,e,t,n,r,i),!0;case"mouseover":return Ar=ia(Ar,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return es.set(o,ia(es.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,ts.set(o,ia(ts.get(o)||null,e,t,n,r,i)),!0}return!1}function eS(e){var t=oi(e.target);if(t!==null){var n=Oi(t);if(n!==null){if(t=n.tag,t===13){if(t=Vw(n),t!==null){e.blockedOn=t,Jw(e.priority,function(){Qw(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ll(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=yh(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);fh=r,n.target.dispatchEvent(r),fh=null}else return t=Os(n),t!==null&&og(t),e.blockedOn=n,!1;t.shift()}return!0}function Tv(e,t,n){Ll(e)&&n.delete(t)}function kT(){vh=!1,Ir!==null&&Ll(Ir)&&(Ir=null),Mr!==null&&Ll(Mr)&&(Mr=null),Ar!==null&&Ll(Ar)&&(Ar=null),es.forEach(Tv),ts.forEach(Tv)}function oa(e,t){e.blockedOn===t&&(e.blockedOn=null,vh||(vh=!0,Gt.unstable_scheduleCallback(Gt.unstable_NormalPriority,kT)))}function ns(e){function t(i){return oa(i,e)}if(0<Js.length){oa(Js[0],e);for(var n=1;n<Js.length;n++){var r=Js[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Ir!==null&&oa(Ir,e),Mr!==null&&oa(Mr,e),Ar!==null&&oa(Ar,e),es.forEach(t),ts.forEach(t),n=0;n<Sr.length;n++)r=Sr[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Sr.length&&(n=Sr[0],n.blockedOn===null);)eS(n),n.blockedOn===null&&Sr.shift()}var fo=pr.ReactCurrentBatchConfig,wc=!0;function PT(e,t,n,r){var i=ye,o=fo.transition;fo.transition=null;try{ye=1,ag(e,t,n,r)}finally{ye=i,fo.transition=o}}function OT(e,t,n,r){var i=ye,o=fo.transition;fo.transition=null;try{ye=4,ag(e,t,n,r)}finally{ye=i,fo.transition=o}}function ag(e,t,n,r){if(wc){var i=yh(e,t,n,r);if(i===null)gf(e,t,r,Sc,n),Ov(e,r);else if(_T(i,e,t,n,r))r.stopPropagation();else if(Ov(e,r),t&4&&-1<ET.indexOf(e)){for(;i!==null;){var o=Os(i);if(o!==null&&Kw(o),o=yh(e,t,n,r),o===null&&gf(e,t,r,Sc,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else gf(e,t,r,null,n)}}var Sc=null;function yh(e,t,n,r){if(Sc=null,e=ng(r),e=oi(e),e!==null)if(t=Oi(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Vw(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Sc=e,null}function tS(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(mT()){case rg:return 1;case Gw:return 4;case xc:case gT:return 16;case qw:return 536870912;default:return 16}default:return 16}}var kr=null,sg=null,Rl=null;function nS(){if(Rl)return Rl;var e,t=sg,n=t.length,r,i="value"in kr?kr.value:kr.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===i[o-r];r++);return Rl=i.slice(e,1<r?1-r:void 0)}function Fl(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function el(){return!0}function jv(){return!1}function Xt(e){function t(n,r,i,o,a){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=a,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(o):o[l]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?el:jv,this.isPropagationStopped=jv,this}return je(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=el)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=el)},persist:function(){},isPersistent:el}),t}var Bo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},lg=Xt(Bo),Ps=je({},Bo,{view:0,detail:0}),TT=Xt(Ps),sf,lf,aa,Cu=je({},Ps,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:cg,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==aa&&(aa&&e.type==="mousemove"?(sf=e.screenX-aa.screenX,lf=e.screenY-aa.screenY):lf=sf=0,aa=e),sf)},movementY:function(e){return"movementY"in e?e.movementY:lf}}),$v=Xt(Cu),jT=je({},Cu,{dataTransfer:0}),$T=Xt(jT),IT=je({},Ps,{relatedTarget:0}),cf=Xt(IT),MT=je({},Bo,{animationName:0,elapsedTime:0,pseudoElement:0}),AT=Xt(MT),DT=je({},Bo,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),LT=Xt(DT),RT=je({},Bo,{data:0}),Iv=Xt(RT),FT={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},zT={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},NT={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function BT(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=NT[e])?!!t[e]:!1}function cg(){return BT}var VT=je({},Ps,{key:function(e){if(e.key){var t=FT[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Fl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?zT[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:cg,charCode:function(e){return e.type==="keypress"?Fl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Fl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),WT=Xt(VT),UT=je({},Cu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Mv=Xt(UT),HT=je({},Ps,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:cg}),GT=Xt(HT),qT=je({},Bo,{propertyName:0,elapsedTime:0,pseudoElement:0}),YT=Xt(qT),XT=je({},Cu,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),KT=Xt(XT),QT=[9,13,27,32],ug=or&&"CompositionEvent"in window,Ia=null;or&&"documentMode"in document&&(Ia=document.documentMode);var ZT=or&&"TextEvent"in window&&!Ia,rS=or&&(!ug||Ia&&8<Ia&&11>=Ia),Av=String.fromCharCode(32),Dv=!1;function iS(e,t){switch(e){case"keyup":return QT.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function oS(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Zi=!1;function JT(e,t){switch(e){case"compositionend":return oS(t);case"keypress":return t.which!==32?null:(Dv=!0,Av);case"textInput":return e=t.data,e===Av&&Dv?null:e;default:return null}}function ej(e,t){if(Zi)return e==="compositionend"||!ug&&iS(e,t)?(e=nS(),Rl=sg=kr=null,Zi=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return rS&&t.locale!=="ko"?null:t.data;default:return null}}var tj={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Lv(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!tj[e.type]:t==="textarea"}function aS(e,t,n,r){Rw(r),t=Cc(t,"onChange"),0<t.length&&(n=new lg("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Ma=null,rs=null;function nj(e){vS(e,0)}function Eu(e){var t=to(e);if(jw(t))return e}function rj(e,t){if(e==="change")return t}var sS=!1;if(or){var uf;if(or){var df="oninput"in document;if(!df){var Rv=document.createElement("div");Rv.setAttribute("oninput","return;"),df=typeof Rv.oninput=="function"}uf=df}else uf=!1;sS=uf&&(!document.documentMode||9<document.documentMode)}function Fv(){Ma&&(Ma.detachEvent("onpropertychange",lS),rs=Ma=null)}function lS(e){if(e.propertyName==="value"&&Eu(rs)){var t=[];aS(t,rs,e,ng(e)),Bw(nj,t)}}function ij(e,t,n){e==="focusin"?(Fv(),Ma=t,rs=n,Ma.attachEvent("onpropertychange",lS)):e==="focusout"&&Fv()}function oj(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Eu(rs)}function aj(e,t){if(e==="click")return Eu(t)}function sj(e,t){if(e==="input"||e==="change")return Eu(t)}function lj(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var wn=typeof Object.is=="function"?Object.is:lj;function is(e,t){if(wn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!eh.call(t,i)||!wn(e[i],t[i]))return!1}return!0}function zv(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Nv(e,t){var n=zv(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=zv(n)}}function cS(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?cS(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function uS(){for(var e=window,t=gc();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=gc(e.document)}return t}function dg(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function cj(e){var t=uS(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&cS(n.ownerDocument.documentElement,n)){if(r!==null&&dg(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=Nv(n,o);var a=Nv(n,r);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var uj=or&&"documentMode"in document&&11>=document.documentMode,Ji=null,xh=null,Aa=null,bh=!1;function Bv(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;bh||Ji==null||Ji!==gc(r)||(r=Ji,"selectionStart"in r&&dg(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Aa&&is(Aa,r)||(Aa=r,r=Cc(xh,"onSelect"),0<r.length&&(t=new lg("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Ji)))}function tl(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var eo={animationend:tl("Animation","AnimationEnd"),animationiteration:tl("Animation","AnimationIteration"),animationstart:tl("Animation","AnimationStart"),transitionend:tl("Transition","TransitionEnd")},ff={},dS={};or&&(dS=document.createElement("div").style,"AnimationEvent"in window||(delete eo.animationend.animation,delete eo.animationiteration.animation,delete eo.animationstart.animation),"TransitionEvent"in window||delete eo.transitionend.transition);function _u(e){if(ff[e])return ff[e];if(!eo[e])return e;var t=eo[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in dS)return ff[e]=t[n];return e}var fS=_u("animationend"),pS=_u("animationiteration"),hS=_u("animationstart"),mS=_u("transitionend"),gS=new Map,Vv="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ur(e,t){gS.set(e,t),Pi(t,[e])}for(var pf=0;pf<Vv.length;pf++){var hf=Vv[pf],dj=hf.toLowerCase(),fj=hf[0].toUpperCase()+hf.slice(1);Ur(dj,"on"+fj)}Ur(fS,"onAnimationEnd");Ur(pS,"onAnimationIteration");Ur(hS,"onAnimationStart");Ur("dblclick","onDoubleClick");Ur("focusin","onFocus");Ur("focusout","onBlur");Ur(mS,"onTransitionEnd");xo("onMouseEnter",["mouseout","mouseover"]);xo("onMouseLeave",["mouseout","mouseover"]);xo("onPointerEnter",["pointerout","pointerover"]);xo("onPointerLeave",["pointerout","pointerover"]);Pi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Pi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Pi("onBeforeInput",["compositionend","keypress","textInput","paste"]);Pi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Pi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Pi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Sa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),pj=new Set("cancel close invalid load scroll toggle".split(" ").concat(Sa));function Wv(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,dT(r,t,void 0,e),e.currentTarget=null}function vS(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var a=r.length-1;0<=a;a--){var l=r[a],s=l.instance,c=l.currentTarget;if(l=l.listener,s!==o&&i.isPropagationStopped())break e;Wv(i,l,c),o=s}else for(a=0;a<r.length;a++){if(l=r[a],s=l.instance,c=l.currentTarget,l=l.listener,s!==o&&i.isPropagationStopped())break e;Wv(i,l,c),o=s}}}if(yc)throw e=mh,yc=!1,mh=null,e}function we(e,t){var n=t[_h];n===void 0&&(n=t[_h]=new Set);var r=e+"__bubble";n.has(r)||(yS(t,e,2,!1),n.add(r))}function mf(e,t,n){var r=0;t&&(r|=4),yS(n,e,r,t)}var nl="_reactListening"+Math.random().toString(36).slice(2);function os(e){if(!e[nl]){e[nl]=!0,_w.forEach(function(n){n!=="selectionchange"&&(pj.has(n)||mf(n,!1,e),mf(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[nl]||(t[nl]=!0,mf("selectionchange",!1,t))}}function yS(e,t,n,r){switch(tS(t)){case 1:var i=PT;break;case 4:i=OT;break;default:i=ag}n=i.bind(null,t,n,e),i=void 0,!hh||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function gf(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(a===4)for(a=r.return;a!==null;){var s=a.tag;if((s===3||s===4)&&(s=a.stateNode.containerInfo,s===i||s.nodeType===8&&s.parentNode===i))return;a=a.return}for(;l!==null;){if(a=oi(l),a===null)return;if(s=a.tag,s===5||s===6){r=o=a;continue e}l=l.parentNode}}r=r.return}Bw(function(){var c=o,f=ng(n),d=[];e:{var h=gS.get(e);if(h!==void 0){var p=lg,m=e;switch(e){case"keypress":if(Fl(n)===0)break e;case"keydown":case"keyup":p=WT;break;case"focusin":m="focus",p=cf;break;case"focusout":m="blur",p=cf;break;case"beforeblur":case"afterblur":p=cf;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=$v;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=$T;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=GT;break;case fS:case pS:case hS:p=AT;break;case mS:p=YT;break;case"scroll":p=TT;break;case"wheel":p=KT;break;case"copy":case"cut":case"paste":p=LT;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Mv}var y=(t&4)!==0,w=!y&&e==="scroll",g=y?h!==null?h+"Capture":null:h;y=[];for(var v=c,b;v!==null;){b=v;var C=b.stateNode;if(b.tag===5&&C!==null&&(b=C,g!==null&&(C=Ja(v,g),C!=null&&y.push(as(v,C,b)))),w)break;v=v.return}0<y.length&&(h=new p(h,m,null,n,f),d.push({event:h,listeners:y}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",p=e==="mouseout"||e==="pointerout",h&&n!==fh&&(m=n.relatedTarget||n.fromElement)&&(oi(m)||m[ar]))break e;if((p||h)&&(h=f.window===f?f:(h=f.ownerDocument)?h.defaultView||h.parentWindow:window,p?(m=n.relatedTarget||n.toElement,p=c,m=m?oi(m):null,m!==null&&(w=Oi(m),m!==w||m.tag!==5&&m.tag!==6)&&(m=null)):(p=null,m=c),p!==m)){if(y=$v,C="onMouseLeave",g="onMouseEnter",v="mouse",(e==="pointerout"||e==="pointerover")&&(y=Mv,C="onPointerLeave",g="onPointerEnter",v="pointer"),w=p==null?h:to(p),b=m==null?h:to(m),h=new y(C,v+"leave",p,n,f),h.target=w,h.relatedTarget=b,C=null,oi(f)===c&&(y=new y(g,v+"enter",m,n,f),y.target=b,y.relatedTarget=w,C=y),w=C,p&&m)t:{for(y=p,g=m,v=0,b=y;b;b=Ai(b))v++;for(b=0,C=g;C;C=Ai(C))b++;for(;0<v-b;)y=Ai(y),v--;for(;0<b-v;)g=Ai(g),b--;for(;v--;){if(y===g||g!==null&&y===g.alternate)break t;y=Ai(y),g=Ai(g)}y=null}else y=null;p!==null&&Uv(d,h,p,y,!1),m!==null&&w!==null&&Uv(d,w,m,y,!0)}}e:{if(h=c?to(c):window,p=h.nodeName&&h.nodeName.toLowerCase(),p==="select"||p==="input"&&h.type==="file")var S=rj;else if(Lv(h))if(sS)S=sj;else{S=oj;var P=ij}else(p=h.nodeName)&&p.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(S=aj);if(S&&(S=S(e,c))){aS(d,S,n,f);break e}P&&P(e,h,c),e==="focusout"&&(P=h._wrapperState)&&P.controlled&&h.type==="number"&&sh(h,"number",h.value)}switch(P=c?to(c):window,e){case"focusin":(Lv(P)||P.contentEditable==="true")&&(Ji=P,xh=c,Aa=null);break;case"focusout":Aa=xh=Ji=null;break;case"mousedown":bh=!0;break;case"contextmenu":case"mouseup":case"dragend":bh=!1,Bv(d,n,f);break;case"selectionchange":if(uj)break;case"keydown":case"keyup":Bv(d,n,f)}var k;if(ug)e:{switch(e){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else Zi?iS(e,n)&&(_="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(_="onCompositionStart");_&&(rS&&n.locale!=="ko"&&(Zi||_!=="onCompositionStart"?_==="onCompositionEnd"&&Zi&&(k=nS()):(kr=f,sg="value"in kr?kr.value:kr.textContent,Zi=!0)),P=Cc(c,_),0<P.length&&(_=new Iv(_,e,null,n,f),d.push({event:_,listeners:P}),k?_.data=k:(k=oS(n),k!==null&&(_.data=k)))),(k=ZT?JT(e,n):ej(e,n))&&(c=Cc(c,"onBeforeInput"),0<c.length&&(f=new Iv("onBeforeInput","beforeinput",null,n,f),d.push({event:f,listeners:c}),f.data=k))}vS(d,t)})}function as(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Cc(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Ja(e,n),o!=null&&r.unshift(as(e,o,i)),o=Ja(e,t),o!=null&&r.push(as(e,o,i))),e=e.return}return r}function Ai(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Uv(e,t,n,r,i){for(var o=t._reactName,a=[];n!==null&&n!==r;){var l=n,s=l.alternate,c=l.stateNode;if(s!==null&&s===r)break;l.tag===5&&c!==null&&(l=c,i?(s=Ja(n,o),s!=null&&a.unshift(as(n,s,l))):i||(s=Ja(n,o),s!=null&&a.push(as(n,s,l)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var hj=/\r\n?/g,mj=/\u0000|\uFFFD/g;function Hv(e){return(typeof e=="string"?e:""+e).replace(hj,`
`).replace(mj,"")}function rl(e,t,n){if(t=Hv(t),Hv(e)!==t&&n)throw Error(U(425))}function Ec(){}var wh=null,Sh=null;function Ch(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Eh=typeof setTimeout=="function"?setTimeout:void 0,gj=typeof clearTimeout=="function"?clearTimeout:void 0,Gv=typeof Promise=="function"?Promise:void 0,vj=typeof queueMicrotask=="function"?queueMicrotask:typeof Gv<"u"?function(e){return Gv.resolve(null).then(e).catch(yj)}:Eh;function yj(e){setTimeout(function(){throw e})}function vf(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),ns(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);ns(t)}function Dr(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function qv(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Vo=Math.random().toString(36).slice(2),An="__reactFiber$"+Vo,ss="__reactProps$"+Vo,ar="__reactContainer$"+Vo,_h="__reactEvents$"+Vo,xj="__reactListeners$"+Vo,bj="__reactHandles$"+Vo;function oi(e){var t=e[An];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ar]||n[An]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=qv(e);e!==null;){if(n=e[An])return n;e=qv(e)}return t}e=n,n=e.parentNode}return null}function Os(e){return e=e[An]||e[ar],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function to(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(U(33))}function ku(e){return e[ss]||null}var kh=[],no=-1;function Hr(e){return{current:e}}function Ce(e){0>no||(e.current=kh[no],kh[no]=null,no--)}function be(e,t){no++,kh[no]=e.current,e.current=t}var Vr={},mt=Hr(Vr),It=Hr(!1),gi=Vr;function bo(e,t){var n=e.type.contextTypes;if(!n)return Vr;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Mt(e){return e=e.childContextTypes,e!=null}function _c(){Ce(It),Ce(mt)}function Yv(e,t,n){if(mt.current!==Vr)throw Error(U(168));be(mt,t),be(It,n)}function xS(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(U(108,iT(e)||"Unknown",i));return je({},n,r)}function kc(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Vr,gi=mt.current,be(mt,e),be(It,It.current),!0}function Xv(e,t,n){var r=e.stateNode;if(!r)throw Error(U(169));n?(e=xS(e,t,gi),r.__reactInternalMemoizedMergedChildContext=e,Ce(It),Ce(mt),be(mt,e)):Ce(It),be(It,n)}var Qn=null,Pu=!1,yf=!1;function bS(e){Qn===null?Qn=[e]:Qn.push(e)}function wj(e){Pu=!0,bS(e)}function Gr(){if(!yf&&Qn!==null){yf=!0;var e=0,t=ye;try{var n=Qn;for(ye=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Qn=null,Pu=!1}catch(i){throw Qn!==null&&(Qn=Qn.slice(e+1)),Hw(rg,Gr),i}finally{ye=t,yf=!1}}return null}var ro=[],io=0,Pc=null,Oc=0,Zt=[],Jt=0,vi=null,er=1,tr="";function Zr(e,t){ro[io++]=Oc,ro[io++]=Pc,Pc=e,Oc=t}function wS(e,t,n){Zt[Jt++]=er,Zt[Jt++]=tr,Zt[Jt++]=vi,vi=e;var r=er;e=tr;var i=32-gn(r)-1;r&=~(1<<i),n+=1;var o=32-gn(t)+i;if(30<o){var a=i-i%5;o=(r&(1<<a)-1).toString(32),r>>=a,i-=a,er=1<<32-gn(t)+i|n<<i|r,tr=o+e}else er=1<<o|n<<i|r,tr=e}function fg(e){e.return!==null&&(Zr(e,1),wS(e,1,0))}function pg(e){for(;e===Pc;)Pc=ro[--io],ro[io]=null,Oc=ro[--io],ro[io]=null;for(;e===vi;)vi=Zt[--Jt],Zt[Jt]=null,tr=Zt[--Jt],Zt[Jt]=null,er=Zt[--Jt],Zt[Jt]=null}var Ut=null,Bt=null,ke=!1,hn=null;function SS(e,t){var n=en(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Kv(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ut=e,Bt=Dr(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ut=e,Bt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=vi!==null?{id:er,overflow:tr}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=en(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ut=e,Bt=null,!0):!1;default:return!1}}function Ph(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Oh(e){if(ke){var t=Bt;if(t){var n=t;if(!Kv(e,t)){if(Ph(e))throw Error(U(418));t=Dr(n.nextSibling);var r=Ut;t&&Kv(e,t)?SS(r,n):(e.flags=e.flags&-4097|2,ke=!1,Ut=e)}}else{if(Ph(e))throw Error(U(418));e.flags=e.flags&-4097|2,ke=!1,Ut=e}}}function Qv(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ut=e}function il(e){if(e!==Ut)return!1;if(!ke)return Qv(e),ke=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ch(e.type,e.memoizedProps)),t&&(t=Bt)){if(Ph(e))throw CS(),Error(U(418));for(;t;)SS(e,t),t=Dr(t.nextSibling)}if(Qv(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(U(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Bt=Dr(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Bt=null}}else Bt=Ut?Dr(e.stateNode.nextSibling):null;return!0}function CS(){for(var e=Bt;e;)e=Dr(e.nextSibling)}function wo(){Bt=Ut=null,ke=!1}function hg(e){hn===null?hn=[e]:hn.push(e)}var Sj=pr.ReactCurrentBatchConfig;function dn(e,t){if(e&&e.defaultProps){t=je({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Tc=Hr(null),jc=null,oo=null,mg=null;function gg(){mg=oo=jc=null}function vg(e){var t=Tc.current;Ce(Tc),e._currentValue=t}function Th(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function po(e,t){jc=e,mg=oo=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&($t=!0),e.firstContext=null)}function nn(e){var t=e._currentValue;if(mg!==e)if(e={context:e,memoizedValue:t,next:null},oo===null){if(jc===null)throw Error(U(308));oo=e,jc.dependencies={lanes:0,firstContext:e}}else oo=oo.next=e;return t}var ai=null;function yg(e){ai===null?ai=[e]:ai.push(e)}function ES(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,yg(t)):(n.next=i.next,i.next=n),t.interleaved=n,sr(e,r)}function sr(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var wr=!1;function xg(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function _S(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function nr(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Lr(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,ce&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,sr(e,n)}return i=r.interleaved,i===null?(t.next=t,yg(r)):(t.next=i.next,i.next=t),r.interleaved=t,sr(e,n)}function zl(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ig(e,n)}}function Zv(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=a:o=o.next=a,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function $c(e,t,n,r){var i=e.updateQueue;wr=!1;var o=i.firstBaseUpdate,a=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var s=l,c=s.next;s.next=null,a===null?o=c:a.next=c,a=s;var f=e.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==a&&(l===null?f.firstBaseUpdate=c:l.next=c,f.lastBaseUpdate=s))}if(o!==null){var d=i.baseState;a=0,f=c=s=null,l=o;do{var h=l.lane,p=l.eventTime;if((r&h)===h){f!==null&&(f=f.next={eventTime:p,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var m=e,y=l;switch(h=t,p=n,y.tag){case 1:if(m=y.payload,typeof m=="function"){d=m.call(p,d,h);break e}d=m;break e;case 3:m.flags=m.flags&-65537|128;case 0:if(m=y.payload,h=typeof m=="function"?m.call(p,d,h):m,h==null)break e;d=je({},d,h);break e;case 2:wr=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,h=i.effects,h===null?i.effects=[l]:h.push(l))}else p={eventTime:p,lane:h,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(c=f=p,s=d):f=f.next=p,a|=h;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;h=l,l=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(1);if(f===null&&(s=d),i.baseState=s,i.firstBaseUpdate=c,i.lastBaseUpdate=f,t=i.shared.interleaved,t!==null){i=t;do a|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);xi|=a,e.lanes=a,e.memoizedState=d}}function Jv(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(U(191,i));i.call(r)}}}var kS=new Ew.Component().refs;function jh(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:je({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ou={isMounted:function(e){return(e=e._reactInternals)?Oi(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=wt(),i=Fr(e),o=nr(r,i);o.payload=t,n!=null&&(o.callback=n),t=Lr(e,o,i),t!==null&&(vn(t,e,i,r),zl(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=wt(),i=Fr(e),o=nr(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=Lr(e,o,i),t!==null&&(vn(t,e,i,r),zl(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=wt(),r=Fr(e),i=nr(n,r);i.tag=2,t!=null&&(i.callback=t),t=Lr(e,i,r),t!==null&&(vn(t,e,r,n),zl(t,e,r))}};function ey(e,t,n,r,i,o,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,a):t.prototype&&t.prototype.isPureReactComponent?!is(n,r)||!is(i,o):!0}function PS(e,t,n){var r=!1,i=Vr,o=t.contextType;return typeof o=="object"&&o!==null?o=nn(o):(i=Mt(t)?gi:mt.current,r=t.contextTypes,o=(r=r!=null)?bo(e,i):Vr),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ou,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function ty(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ou.enqueueReplaceState(t,t.state,null)}function $h(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=kS,xg(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=nn(o):(o=Mt(t)?gi:mt.current,i.context=bo(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(jh(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Ou.enqueueReplaceState(i,i.state,null),$c(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function sa(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(U(309));var r=n.stateNode}if(!r)throw Error(U(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(a){var l=i.refs;l===kS&&(l=i.refs={}),a===null?delete l[o]:l[o]=a},t._stringRef=o,t)}if(typeof e!="string")throw Error(U(284));if(!n._owner)throw Error(U(290,e))}return e}function ol(e,t){throw e=Object.prototype.toString.call(t),Error(U(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function ny(e){var t=e._init;return t(e._payload)}function OS(e){function t(g,v){if(e){var b=g.deletions;b===null?(g.deletions=[v],g.flags|=16):b.push(v)}}function n(g,v){if(!e)return null;for(;v!==null;)t(g,v),v=v.sibling;return null}function r(g,v){for(g=new Map;v!==null;)v.key!==null?g.set(v.key,v):g.set(v.index,v),v=v.sibling;return g}function i(g,v){return g=zr(g,v),g.index=0,g.sibling=null,g}function o(g,v,b){return g.index=b,e?(b=g.alternate,b!==null?(b=b.index,b<v?(g.flags|=2,v):b):(g.flags|=2,v)):(g.flags|=1048576,v)}function a(g){return e&&g.alternate===null&&(g.flags|=2),g}function l(g,v,b,C){return v===null||v.tag!==6?(v=_f(b,g.mode,C),v.return=g,v):(v=i(v,b),v.return=g,v)}function s(g,v,b,C){var S=b.type;return S===Qi?f(g,v,b.props.children,C,b.key):v!==null&&(v.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===br&&ny(S)===v.type)?(C=i(v,b.props),C.ref=sa(g,v,b),C.return=g,C):(C=Hl(b.type,b.key,b.props,null,g.mode,C),C.ref=sa(g,v,b),C.return=g,C)}function c(g,v,b,C){return v===null||v.tag!==4||v.stateNode.containerInfo!==b.containerInfo||v.stateNode.implementation!==b.implementation?(v=kf(b,g.mode,C),v.return=g,v):(v=i(v,b.children||[]),v.return=g,v)}function f(g,v,b,C,S){return v===null||v.tag!==7?(v=di(b,g.mode,C,S),v.return=g,v):(v=i(v,b),v.return=g,v)}function d(g,v,b){if(typeof v=="string"&&v!==""||typeof v=="number")return v=_f(""+v,g.mode,b),v.return=g,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Ys:return b=Hl(v.type,v.key,v.props,null,g.mode,b),b.ref=sa(g,null,v),b.return=g,b;case Ki:return v=kf(v,g.mode,b),v.return=g,v;case br:var C=v._init;return d(g,C(v._payload),b)}if(ba(v)||na(v))return v=di(v,g.mode,b,null),v.return=g,v;ol(g,v)}return null}function h(g,v,b,C){var S=v!==null?v.key:null;if(typeof b=="string"&&b!==""||typeof b=="number")return S!==null?null:l(g,v,""+b,C);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case Ys:return b.key===S?s(g,v,b,C):null;case Ki:return b.key===S?c(g,v,b,C):null;case br:return S=b._init,h(g,v,S(b._payload),C)}if(ba(b)||na(b))return S!==null?null:f(g,v,b,C,null);ol(g,b)}return null}function p(g,v,b,C,S){if(typeof C=="string"&&C!==""||typeof C=="number")return g=g.get(b)||null,l(v,g,""+C,S);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case Ys:return g=g.get(C.key===null?b:C.key)||null,s(v,g,C,S);case Ki:return g=g.get(C.key===null?b:C.key)||null,c(v,g,C,S);case br:var P=C._init;return p(g,v,b,P(C._payload),S)}if(ba(C)||na(C))return g=g.get(b)||null,f(v,g,C,S,null);ol(v,C)}return null}function m(g,v,b,C){for(var S=null,P=null,k=v,_=v=0,T=null;k!==null&&_<b.length;_++){k.index>_?(T=k,k=null):T=k.sibling;var $=h(g,k,b[_],C);if($===null){k===null&&(k=T);break}e&&k&&$.alternate===null&&t(g,k),v=o($,v,_),P===null?S=$:P.sibling=$,P=$,k=T}if(_===b.length)return n(g,k),ke&&Zr(g,_),S;if(k===null){for(;_<b.length;_++)k=d(g,b[_],C),k!==null&&(v=o(k,v,_),P===null?S=k:P.sibling=k,P=k);return ke&&Zr(g,_),S}for(k=r(g,k);_<b.length;_++)T=p(k,g,_,b[_],C),T!==null&&(e&&T.alternate!==null&&k.delete(T.key===null?_:T.key),v=o(T,v,_),P===null?S=T:P.sibling=T,P=T);return e&&k.forEach(function(I){return t(g,I)}),ke&&Zr(g,_),S}function y(g,v,b,C){var S=na(b);if(typeof S!="function")throw Error(U(150));if(b=S.call(b),b==null)throw Error(U(151));for(var P=S=null,k=v,_=v=0,T=null,$=b.next();k!==null&&!$.done;_++,$=b.next()){k.index>_?(T=k,k=null):T=k.sibling;var I=h(g,k,$.value,C);if(I===null){k===null&&(k=T);break}e&&k&&I.alternate===null&&t(g,k),v=o(I,v,_),P===null?S=I:P.sibling=I,P=I,k=T}if($.done)return n(g,k),ke&&Zr(g,_),S;if(k===null){for(;!$.done;_++,$=b.next())$=d(g,$.value,C),$!==null&&(v=o($,v,_),P===null?S=$:P.sibling=$,P=$);return ke&&Zr(g,_),S}for(k=r(g,k);!$.done;_++,$=b.next())$=p(k,g,_,$.value,C),$!==null&&(e&&$.alternate!==null&&k.delete($.key===null?_:$.key),v=o($,v,_),P===null?S=$:P.sibling=$,P=$);return e&&k.forEach(function(M){return t(g,M)}),ke&&Zr(g,_),S}function w(g,v,b,C){if(typeof b=="object"&&b!==null&&b.type===Qi&&b.key===null&&(b=b.props.children),typeof b=="object"&&b!==null){switch(b.$$typeof){case Ys:e:{for(var S=b.key,P=v;P!==null;){if(P.key===S){if(S=b.type,S===Qi){if(P.tag===7){n(g,P.sibling),v=i(P,b.props.children),v.return=g,g=v;break e}}else if(P.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===br&&ny(S)===P.type){n(g,P.sibling),v=i(P,b.props),v.ref=sa(g,P,b),v.return=g,g=v;break e}n(g,P);break}else t(g,P);P=P.sibling}b.type===Qi?(v=di(b.props.children,g.mode,C,b.key),v.return=g,g=v):(C=Hl(b.type,b.key,b.props,null,g.mode,C),C.ref=sa(g,v,b),C.return=g,g=C)}return a(g);case Ki:e:{for(P=b.key;v!==null;){if(v.key===P)if(v.tag===4&&v.stateNode.containerInfo===b.containerInfo&&v.stateNode.implementation===b.implementation){n(g,v.sibling),v=i(v,b.children||[]),v.return=g,g=v;break e}else{n(g,v);break}else t(g,v);v=v.sibling}v=kf(b,g.mode,C),v.return=g,g=v}return a(g);case br:return P=b._init,w(g,v,P(b._payload),C)}if(ba(b))return m(g,v,b,C);if(na(b))return y(g,v,b,C);ol(g,b)}return typeof b=="string"&&b!==""||typeof b=="number"?(b=""+b,v!==null&&v.tag===6?(n(g,v.sibling),v=i(v,b),v.return=g,g=v):(n(g,v),v=_f(b,g.mode,C),v.return=g,g=v),a(g)):n(g,v)}return w}var So=OS(!0),TS=OS(!1),Ts={},Rn=Hr(Ts),ls=Hr(Ts),cs=Hr(Ts);function si(e){if(e===Ts)throw Error(U(174));return e}function bg(e,t){switch(be(cs,t),be(ls,e),be(Rn,Ts),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ch(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ch(t,e)}Ce(Rn),be(Rn,t)}function Co(){Ce(Rn),Ce(ls),Ce(cs)}function jS(e){si(cs.current);var t=si(Rn.current),n=ch(t,e.type);t!==n&&(be(ls,e),be(Rn,n))}function wg(e){ls.current===e&&(Ce(Rn),Ce(ls))}var Oe=Hr(0);function Ic(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var xf=[];function Sg(){for(var e=0;e<xf.length;e++)xf[e]._workInProgressVersionPrimary=null;xf.length=0}var Nl=pr.ReactCurrentDispatcher,bf=pr.ReactCurrentBatchConfig,yi=0,Te=null,We=null,Ze=null,Mc=!1,Da=!1,us=0,Cj=0;function lt(){throw Error(U(321))}function Cg(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!wn(e[n],t[n]))return!1;return!0}function Eg(e,t,n,r,i,o){if(yi=o,Te=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Nl.current=e===null||e.memoizedState===null?Pj:Oj,e=n(r,i),Da){o=0;do{if(Da=!1,us=0,25<=o)throw Error(U(301));o+=1,Ze=We=null,t.updateQueue=null,Nl.current=Tj,e=n(r,i)}while(Da)}if(Nl.current=Ac,t=We!==null&&We.next!==null,yi=0,Ze=We=Te=null,Mc=!1,t)throw Error(U(300));return e}function _g(){var e=us!==0;return us=0,e}function On(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ze===null?Te.memoizedState=Ze=e:Ze=Ze.next=e,Ze}function rn(){if(We===null){var e=Te.alternate;e=e!==null?e.memoizedState:null}else e=We.next;var t=Ze===null?Te.memoizedState:Ze.next;if(t!==null)Ze=t,We=e;else{if(e===null)throw Error(U(310));We=e,e={memoizedState:We.memoizedState,baseState:We.baseState,baseQueue:We.baseQueue,queue:We.queue,next:null},Ze===null?Te.memoizedState=Ze=e:Ze=Ze.next=e}return Ze}function ds(e,t){return typeof t=="function"?t(e):t}function wf(e){var t=rn(),n=t.queue;if(n===null)throw Error(U(311));n.lastRenderedReducer=e;var r=We,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var a=i.next;i.next=o.next,o.next=a}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var l=a=null,s=null,c=o;do{var f=c.lane;if((yi&f)===f)s!==null&&(s=s.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var d={lane:f,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};s===null?(l=s=d,a=r):s=s.next=d,Te.lanes|=f,xi|=f}c=c.next}while(c!==null&&c!==o);s===null?a=r:s.next=l,wn(r,t.memoizedState)||($t=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,Te.lanes|=o,xi|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Sf(e){var t=rn(),n=t.queue;if(n===null)throw Error(U(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var a=i=i.next;do o=e(o,a.action),a=a.next;while(a!==i);wn(o,t.memoizedState)||($t=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function $S(){}function IS(e,t){var n=Te,r=rn(),i=t(),o=!wn(r.memoizedState,i);if(o&&(r.memoizedState=i,$t=!0),r=r.queue,kg(DS.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||Ze!==null&&Ze.memoizedState.tag&1){if(n.flags|=2048,fs(9,AS.bind(null,n,r,i,t),void 0,null),Je===null)throw Error(U(349));yi&30||MS(n,t,i)}return i}function MS(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Te.updateQueue,t===null?(t={lastEffect:null,stores:null},Te.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function AS(e,t,n,r){t.value=n,t.getSnapshot=r,LS(t)&&RS(e)}function DS(e,t,n){return n(function(){LS(t)&&RS(e)})}function LS(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!wn(e,n)}catch{return!0}}function RS(e){var t=sr(e,1);t!==null&&vn(t,e,1,-1)}function ry(e){var t=On();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ds,lastRenderedState:e},t.queue=e,e=e.dispatch=kj.bind(null,Te,e),[t.memoizedState,e]}function fs(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Te.updateQueue,t===null?(t={lastEffect:null,stores:null},Te.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function FS(){return rn().memoizedState}function Bl(e,t,n,r){var i=On();Te.flags|=e,i.memoizedState=fs(1|t,n,void 0,r===void 0?null:r)}function Tu(e,t,n,r){var i=rn();r=r===void 0?null:r;var o=void 0;if(We!==null){var a=We.memoizedState;if(o=a.destroy,r!==null&&Cg(r,a.deps)){i.memoizedState=fs(t,n,o,r);return}}Te.flags|=e,i.memoizedState=fs(1|t,n,o,r)}function iy(e,t){return Bl(8390656,8,e,t)}function kg(e,t){return Tu(2048,8,e,t)}function zS(e,t){return Tu(4,2,e,t)}function NS(e,t){return Tu(4,4,e,t)}function BS(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function VS(e,t,n){return n=n!=null?n.concat([e]):null,Tu(4,4,BS.bind(null,t,e),n)}function Pg(){}function WS(e,t){var n=rn();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Cg(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function US(e,t){var n=rn();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Cg(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function HS(e,t,n){return yi&21?(wn(n,t)||(n=Yw(),Te.lanes|=n,xi|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,$t=!0),e.memoizedState=n)}function Ej(e,t){var n=ye;ye=n!==0&&4>n?n:4,e(!0);var r=bf.transition;bf.transition={};try{e(!1),t()}finally{ye=n,bf.transition=r}}function GS(){return rn().memoizedState}function _j(e,t,n){var r=Fr(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},qS(e))YS(t,n);else if(n=ES(e,t,n,r),n!==null){var i=wt();vn(n,e,r,i),XS(n,t,r)}}function kj(e,t,n){var r=Fr(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(qS(e))YS(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var a=t.lastRenderedState,l=o(a,n);if(i.hasEagerState=!0,i.eagerState=l,wn(l,a)){var s=t.interleaved;s===null?(i.next=i,yg(t)):(i.next=s.next,s.next=i),t.interleaved=i;return}}catch{}finally{}n=ES(e,t,i,r),n!==null&&(i=wt(),vn(n,e,r,i),XS(n,t,r))}}function qS(e){var t=e.alternate;return e===Te||t!==null&&t===Te}function YS(e,t){Da=Mc=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function XS(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ig(e,n)}}var Ac={readContext:nn,useCallback:lt,useContext:lt,useEffect:lt,useImperativeHandle:lt,useInsertionEffect:lt,useLayoutEffect:lt,useMemo:lt,useReducer:lt,useRef:lt,useState:lt,useDebugValue:lt,useDeferredValue:lt,useTransition:lt,useMutableSource:lt,useSyncExternalStore:lt,useId:lt,unstable_isNewReconciler:!1},Pj={readContext:nn,useCallback:function(e,t){return On().memoizedState=[e,t===void 0?null:t],e},useContext:nn,useEffect:iy,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Bl(4194308,4,BS.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Bl(4194308,4,e,t)},useInsertionEffect:function(e,t){return Bl(4,2,e,t)},useMemo:function(e,t){var n=On();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=On();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=_j.bind(null,Te,e),[r.memoizedState,e]},useRef:function(e){var t=On();return e={current:e},t.memoizedState=e},useState:ry,useDebugValue:Pg,useDeferredValue:function(e){return On().memoizedState=e},useTransition:function(){var e=ry(!1),t=e[0];return e=Ej.bind(null,e[1]),On().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Te,i=On();if(ke){if(n===void 0)throw Error(U(407));n=n()}else{if(n=t(),Je===null)throw Error(U(349));yi&30||MS(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,iy(DS.bind(null,r,o,e),[e]),r.flags|=2048,fs(9,AS.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=On(),t=Je.identifierPrefix;if(ke){var n=tr,r=er;n=(r&~(1<<32-gn(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=us++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Cj++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Oj={readContext:nn,useCallback:WS,useContext:nn,useEffect:kg,useImperativeHandle:VS,useInsertionEffect:zS,useLayoutEffect:NS,useMemo:US,useReducer:wf,useRef:FS,useState:function(){return wf(ds)},useDebugValue:Pg,useDeferredValue:function(e){var t=rn();return HS(t,We.memoizedState,e)},useTransition:function(){var e=wf(ds)[0],t=rn().memoizedState;return[e,t]},useMutableSource:$S,useSyncExternalStore:IS,useId:GS,unstable_isNewReconciler:!1},Tj={readContext:nn,useCallback:WS,useContext:nn,useEffect:kg,useImperativeHandle:VS,useInsertionEffect:zS,useLayoutEffect:NS,useMemo:US,useReducer:Sf,useRef:FS,useState:function(){return Sf(ds)},useDebugValue:Pg,useDeferredValue:function(e){var t=rn();return We===null?t.memoizedState=e:HS(t,We.memoizedState,e)},useTransition:function(){var e=Sf(ds)[0],t=rn().memoizedState;return[e,t]},useMutableSource:$S,useSyncExternalStore:IS,useId:GS,unstable_isNewReconciler:!1};function Eo(e,t){try{var n="",r=t;do n+=rT(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function Cf(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Ih(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var jj=typeof WeakMap=="function"?WeakMap:Map;function KS(e,t,n){n=nr(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Lc||(Lc=!0,Vh=r),Ih(e,t)},n}function QS(e,t,n){n=nr(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Ih(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Ih(e,t),typeof r!="function"&&(Rr===null?Rr=new Set([this]):Rr.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function oy(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new jj;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Uj.bind(null,e,t,n),t.then(e,e))}function ay(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function sy(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=nr(-1,1),t.tag=2,Lr(n,t,1))),n.lanes|=1),e)}var $j=pr.ReactCurrentOwner,$t=!1;function xt(e,t,n,r){t.child=e===null?TS(t,null,n,r):So(t,e.child,n,r)}function ly(e,t,n,r,i){n=n.render;var o=t.ref;return po(t,i),r=Eg(e,t,n,r,o,i),n=_g(),e!==null&&!$t?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,lr(e,t,i)):(ke&&n&&fg(t),t.flags|=1,xt(e,t,r,i),t.child)}function cy(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!Dg(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,ZS(e,t,o,r,i)):(e=Hl(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var a=o.memoizedProps;if(n=n.compare,n=n!==null?n:is,n(a,r)&&e.ref===t.ref)return lr(e,t,i)}return t.flags|=1,e=zr(o,r),e.ref=t.ref,e.return=t,t.child=e}function ZS(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(is(o,r)&&e.ref===t.ref)if($t=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&($t=!0);else return t.lanes=e.lanes,lr(e,t,i)}return Mh(e,t,n,r,i)}function JS(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},be(so,zt),zt|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,be(so,zt),zt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,be(so,zt),zt|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,be(so,zt),zt|=r;return xt(e,t,i,n),t.child}function e2(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Mh(e,t,n,r,i){var o=Mt(n)?gi:mt.current;return o=bo(t,o),po(t,i),n=Eg(e,t,n,r,o,i),r=_g(),e!==null&&!$t?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,lr(e,t,i)):(ke&&r&&fg(t),t.flags|=1,xt(e,t,n,i),t.child)}function uy(e,t,n,r,i){if(Mt(n)){var o=!0;kc(t)}else o=!1;if(po(t,i),t.stateNode===null)Vl(e,t),PS(t,n,r),$h(t,n,r,i),r=!0;else if(e===null){var a=t.stateNode,l=t.memoizedProps;a.props=l;var s=a.context,c=n.contextType;typeof c=="object"&&c!==null?c=nn(c):(c=Mt(n)?gi:mt.current,c=bo(t,c));var f=n.getDerivedStateFromProps,d=typeof f=="function"||typeof a.getSnapshotBeforeUpdate=="function";d||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==r||s!==c)&&ty(t,a,r,c),wr=!1;var h=t.memoizedState;a.state=h,$c(t,r,a,i),s=t.memoizedState,l!==r||h!==s||It.current||wr?(typeof f=="function"&&(jh(t,n,f,r),s=t.memoizedState),(l=wr||ey(t,n,l,r,h,s,c))?(d||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),a.props=r,a.state=s,a.context=c,r=l):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,_S(e,t),l=t.memoizedProps,c=t.type===t.elementType?l:dn(t.type,l),a.props=c,d=t.pendingProps,h=a.context,s=n.contextType,typeof s=="object"&&s!==null?s=nn(s):(s=Mt(n)?gi:mt.current,s=bo(t,s));var p=n.getDerivedStateFromProps;(f=typeof p=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==d||h!==s)&&ty(t,a,r,s),wr=!1,h=t.memoizedState,a.state=h,$c(t,r,a,i);var m=t.memoizedState;l!==d||h!==m||It.current||wr?(typeof p=="function"&&(jh(t,n,p,r),m=t.memoizedState),(c=wr||ey(t,n,c,r,h,m,s)||!1)?(f||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,m,s),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,m,s)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=m),a.props=r,a.state=m,a.context=s,r=c):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return Ah(e,t,n,r,o,i)}function Ah(e,t,n,r,i,o){e2(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return i&&Xv(t,n,!1),lr(e,t,o);r=t.stateNode,$j.current=t;var l=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=So(t,e.child,null,o),t.child=So(t,null,l,o)):xt(e,t,l,o),t.memoizedState=r.state,i&&Xv(t,n,!0),t.child}function t2(e){var t=e.stateNode;t.pendingContext?Yv(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Yv(e,t.context,!1),bg(e,t.containerInfo)}function dy(e,t,n,r,i){return wo(),hg(i),t.flags|=256,xt(e,t,n,r),t.child}var Dh={dehydrated:null,treeContext:null,retryLane:0};function Lh(e){return{baseLanes:e,cachePool:null,transitions:null}}function n2(e,t,n){var r=t.pendingProps,i=Oe.current,o=!1,a=(t.flags&128)!==0,l;if((l=a)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),be(Oe,i&1),e===null)return Oh(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,o?(r=t.mode,o=t.child,a={mode:"hidden",children:a},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=a):o=Iu(a,r,0,null),e=di(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Lh(n),t.memoizedState=Dh,e):Og(t,a));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return Ij(e,t,a,r,l,i,n);if(o){o=r.fallback,a=t.mode,i=e.child,l=i.sibling;var s={mode:"hidden",children:r.children};return!(a&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=zr(i,s),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?o=zr(l,o):(o=di(o,a,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,a=e.child.memoizedState,a=a===null?Lh(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},o.memoizedState=a,o.childLanes=e.childLanes&~n,t.memoizedState=Dh,r}return o=e.child,e=o.sibling,r=zr(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Og(e,t){return t=Iu({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function al(e,t,n,r){return r!==null&&hg(r),So(t,e.child,null,n),e=Og(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Ij(e,t,n,r,i,o,a){if(n)return t.flags&256?(t.flags&=-257,r=Cf(Error(U(422))),al(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=Iu({mode:"visible",children:r.children},i,0,null),o=di(o,i,a,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&So(t,e.child,null,a),t.child.memoizedState=Lh(a),t.memoizedState=Dh,o);if(!(t.mode&1))return al(e,t,a,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,o=Error(U(419)),r=Cf(o,r,void 0),al(e,t,a,r)}if(l=(a&e.childLanes)!==0,$t||l){if(r=Je,r!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|a)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,sr(e,i),vn(r,e,i,-1))}return Ag(),r=Cf(Error(U(421))),al(e,t,a,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Hj.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,Bt=Dr(i.nextSibling),Ut=t,ke=!0,hn=null,e!==null&&(Zt[Jt++]=er,Zt[Jt++]=tr,Zt[Jt++]=vi,er=e.id,tr=e.overflow,vi=t),t=Og(t,r.children),t.flags|=4096,t)}function fy(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Th(e.return,t,n)}function Ef(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function r2(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(xt(e,t,r.children,n),r=Oe.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&fy(e,n,t);else if(e.tag===19)fy(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(be(Oe,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Ic(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Ef(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Ic(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Ef(t,!0,n,null,o);break;case"together":Ef(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Vl(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function lr(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),xi|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(U(153));if(t.child!==null){for(e=t.child,n=zr(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=zr(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Mj(e,t,n){switch(t.tag){case 3:t2(t),wo();break;case 5:jS(t);break;case 1:Mt(t.type)&&kc(t);break;case 4:bg(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;be(Tc,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(be(Oe,Oe.current&1),t.flags|=128,null):n&t.child.childLanes?n2(e,t,n):(be(Oe,Oe.current&1),e=lr(e,t,n),e!==null?e.sibling:null);be(Oe,Oe.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return r2(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),be(Oe,Oe.current),r)break;return null;case 22:case 23:return t.lanes=0,JS(e,t,n)}return lr(e,t,n)}var i2,Rh,o2,a2;i2=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Rh=function(){};o2=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,si(Rn.current);var o=null;switch(n){case"input":i=oh(e,i),r=oh(e,r),o=[];break;case"select":i=je({},i,{value:void 0}),r=je({},r,{value:void 0}),o=[];break;case"textarea":i=lh(e,i),r=lh(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Ec)}uh(n,r);var a;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var l=i[c];for(a in l)l.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Qa.hasOwnProperty(c)?o||(o=[]):(o=o||[]).push(c,null));for(c in r){var s=r[c];if(l=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&s!==l&&(s!=null||l!=null))if(c==="style")if(l){for(a in l)!l.hasOwnProperty(a)||s&&s.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in s)s.hasOwnProperty(a)&&l[a]!==s[a]&&(n||(n={}),n[a]=s[a])}else n||(o||(o=[]),o.push(c,n)),n=s;else c==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,l=l?l.__html:void 0,s!=null&&l!==s&&(o=o||[]).push(c,s)):c==="children"?typeof s!="string"&&typeof s!="number"||(o=o||[]).push(c,""+s):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Qa.hasOwnProperty(c)?(s!=null&&c==="onScroll"&&we("scroll",e),o||l===s||(o=[])):(o=o||[]).push(c,s))}n&&(o=o||[]).push("style",n);var c=o;(t.updateQueue=c)&&(t.flags|=4)}};a2=function(e,t,n,r){n!==r&&(t.flags|=4)};function la(e,t){if(!ke)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ct(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Aj(e,t,n){var r=t.pendingProps;switch(pg(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ct(t),null;case 1:return Mt(t.type)&&_c(),ct(t),null;case 3:return r=t.stateNode,Co(),Ce(It),Ce(mt),Sg(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(il(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,hn!==null&&(Hh(hn),hn=null))),Rh(e,t),ct(t),null;case 5:wg(t);var i=si(cs.current);if(n=t.type,e!==null&&t.stateNode!=null)o2(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(U(166));return ct(t),null}if(e=si(Rn.current),il(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[An]=t,r[ss]=o,e=(t.mode&1)!==0,n){case"dialog":we("cancel",r),we("close",r);break;case"iframe":case"object":case"embed":we("load",r);break;case"video":case"audio":for(i=0;i<Sa.length;i++)we(Sa[i],r);break;case"source":we("error",r);break;case"img":case"image":case"link":we("error",r),we("load",r);break;case"details":we("toggle",r);break;case"input":wv(r,o),we("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},we("invalid",r);break;case"textarea":Cv(r,o),we("invalid",r)}uh(n,o),i=null;for(var a in o)if(o.hasOwnProperty(a)){var l=o[a];a==="children"?typeof l=="string"?r.textContent!==l&&(o.suppressHydrationWarning!==!0&&rl(r.textContent,l,e),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(o.suppressHydrationWarning!==!0&&rl(r.textContent,l,e),i=["children",""+l]):Qa.hasOwnProperty(a)&&l!=null&&a==="onScroll"&&we("scroll",r)}switch(n){case"input":Xs(r),Sv(r,o,!0);break;case"textarea":Xs(r),Ev(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Ec)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Mw(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[An]=t,e[ss]=r,i2(e,t,!1,!1),t.stateNode=e;e:{switch(a=dh(n,r),n){case"dialog":we("cancel",e),we("close",e),i=r;break;case"iframe":case"object":case"embed":we("load",e),i=r;break;case"video":case"audio":for(i=0;i<Sa.length;i++)we(Sa[i],e);i=r;break;case"source":we("error",e),i=r;break;case"img":case"image":case"link":we("error",e),we("load",e),i=r;break;case"details":we("toggle",e),i=r;break;case"input":wv(e,r),i=oh(e,r),we("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=je({},r,{value:void 0}),we("invalid",e);break;case"textarea":Cv(e,r),i=lh(e,r),we("invalid",e);break;default:i=r}uh(n,i),l=i;for(o in l)if(l.hasOwnProperty(o)){var s=l[o];o==="style"?Lw(e,s):o==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&Aw(e,s)):o==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&Za(e,s):typeof s=="number"&&Za(e,""+s):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Qa.hasOwnProperty(o)?s!=null&&o==="onScroll"&&we("scroll",e):s!=null&&Zm(e,o,s,a))}switch(n){case"input":Xs(e),Sv(e,r,!1);break;case"textarea":Xs(e),Ev(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Br(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?lo(e,!!r.multiple,o,!1):r.defaultValue!=null&&lo(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Ec)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ct(t),null;case 6:if(e&&t.stateNode!=null)a2(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(U(166));if(n=si(cs.current),si(Rn.current),il(t)){if(r=t.stateNode,n=t.memoizedProps,r[An]=t,(o=r.nodeValue!==n)&&(e=Ut,e!==null))switch(e.tag){case 3:rl(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&rl(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[An]=t,t.stateNode=r}return ct(t),null;case 13:if(Ce(Oe),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ke&&Bt!==null&&t.mode&1&&!(t.flags&128))CS(),wo(),t.flags|=98560,o=!1;else if(o=il(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(U(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(U(317));o[An]=t}else wo(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ct(t),o=!1}else hn!==null&&(Hh(hn),hn=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Oe.current&1?He===0&&(He=3):Ag())),t.updateQueue!==null&&(t.flags|=4),ct(t),null);case 4:return Co(),Rh(e,t),e===null&&os(t.stateNode.containerInfo),ct(t),null;case 10:return vg(t.type._context),ct(t),null;case 17:return Mt(t.type)&&_c(),ct(t),null;case 19:if(Ce(Oe),o=t.memoizedState,o===null)return ct(t),null;if(r=(t.flags&128)!==0,a=o.rendering,a===null)if(r)la(o,!1);else{if(He!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=Ic(e),a!==null){for(t.flags|=128,la(o,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,a=o.alternate,a===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=a.childLanes,o.lanes=a.lanes,o.child=a.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=a.memoizedProps,o.memoizedState=a.memoizedState,o.updateQueue=a.updateQueue,o.type=a.type,e=a.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return be(Oe,Oe.current&1|2),t.child}e=e.sibling}o.tail!==null&&De()>_o&&(t.flags|=128,r=!0,la(o,!1),t.lanes=4194304)}else{if(!r)if(e=Ic(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),la(o,!0),o.tail===null&&o.tailMode==="hidden"&&!a.alternate&&!ke)return ct(t),null}else 2*De()-o.renderingStartTime>_o&&n!==1073741824&&(t.flags|=128,r=!0,la(o,!1),t.lanes=4194304);o.isBackwards?(a.sibling=t.child,t.child=a):(n=o.last,n!==null?n.sibling=a:t.child=a,o.last=a)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=De(),t.sibling=null,n=Oe.current,be(Oe,r?n&1|2:n&1),t):(ct(t),null);case 22:case 23:return Mg(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?zt&1073741824&&(ct(t),t.subtreeFlags&6&&(t.flags|=8192)):ct(t),null;case 24:return null;case 25:return null}throw Error(U(156,t.tag))}function Dj(e,t){switch(pg(t),t.tag){case 1:return Mt(t.type)&&_c(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Co(),Ce(It),Ce(mt),Sg(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return wg(t),null;case 13:if(Ce(Oe),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(U(340));wo()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Ce(Oe),null;case 4:return Co(),null;case 10:return vg(t.type._context),null;case 22:case 23:return Mg(),null;case 24:return null;default:return null}}var sl=!1,pt=!1,Lj=typeof WeakSet=="function"?WeakSet:Set,q=null;function ao(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Me(e,t,r)}else n.current=null}function Fh(e,t,n){try{n()}catch(r){Me(e,t,r)}}var py=!1;function Rj(e,t){if(wh=wc,e=uS(),dg(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var a=0,l=-1,s=-1,c=0,f=0,d=e,h=null;t:for(;;){for(var p;d!==n||i!==0&&d.nodeType!==3||(l=a+i),d!==o||r!==0&&d.nodeType!==3||(s=a+r),d.nodeType===3&&(a+=d.nodeValue.length),(p=d.firstChild)!==null;)h=d,d=p;for(;;){if(d===e)break t;if(h===n&&++c===i&&(l=a),h===o&&++f===r&&(s=a),(p=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=p}n=l===-1||s===-1?null:{start:l,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(Sh={focusedElem:e,selectionRange:n},wc=!1,q=t;q!==null;)if(t=q,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,q=e;else for(;q!==null;){t=q;try{var m=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(m!==null){var y=m.memoizedProps,w=m.memoizedState,g=t.stateNode,v=g.getSnapshotBeforeUpdate(t.elementType===t.type?y:dn(t.type,y),w);g.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var b=t.stateNode.containerInfo;b.nodeType===1?b.textContent="":b.nodeType===9&&b.documentElement&&b.removeChild(b.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(U(163))}}catch(C){Me(t,t.return,C)}if(e=t.sibling,e!==null){e.return=t.return,q=e;break}q=t.return}return m=py,py=!1,m}function La(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Fh(t,n,o)}i=i.next}while(i!==r)}}function ju(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function zh(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function s2(e){var t=e.alternate;t!==null&&(e.alternate=null,s2(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[An],delete t[ss],delete t[_h],delete t[xj],delete t[bj])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function l2(e){return e.tag===5||e.tag===3||e.tag===4}function hy(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||l2(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Nh(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ec));else if(r!==4&&(e=e.child,e!==null))for(Nh(e,t,n),e=e.sibling;e!==null;)Nh(e,t,n),e=e.sibling}function Bh(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Bh(e,t,n),e=e.sibling;e!==null;)Bh(e,t,n),e=e.sibling}var it=null,fn=!1;function yr(e,t,n){for(n=n.child;n!==null;)c2(e,t,n),n=n.sibling}function c2(e,t,n){if(Ln&&typeof Ln.onCommitFiberUnmount=="function")try{Ln.onCommitFiberUnmount(Su,n)}catch{}switch(n.tag){case 5:pt||ao(n,t);case 6:var r=it,i=fn;it=null,yr(e,t,n),it=r,fn=i,it!==null&&(fn?(e=it,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):it.removeChild(n.stateNode));break;case 18:it!==null&&(fn?(e=it,n=n.stateNode,e.nodeType===8?vf(e.parentNode,n):e.nodeType===1&&vf(e,n),ns(e)):vf(it,n.stateNode));break;case 4:r=it,i=fn,it=n.stateNode.containerInfo,fn=!0,yr(e,t,n),it=r,fn=i;break;case 0:case 11:case 14:case 15:if(!pt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,a=o.destroy;o=o.tag,a!==void 0&&(o&2||o&4)&&Fh(n,t,a),i=i.next}while(i!==r)}yr(e,t,n);break;case 1:if(!pt&&(ao(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Me(n,t,l)}yr(e,t,n);break;case 21:yr(e,t,n);break;case 22:n.mode&1?(pt=(r=pt)||n.memoizedState!==null,yr(e,t,n),pt=r):yr(e,t,n);break;default:yr(e,t,n)}}function my(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Lj),t.forEach(function(r){var i=Gj.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function sn(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,a=t,l=a;e:for(;l!==null;){switch(l.tag){case 5:it=l.stateNode,fn=!1;break e;case 3:it=l.stateNode.containerInfo,fn=!0;break e;case 4:it=l.stateNode.containerInfo,fn=!0;break e}l=l.return}if(it===null)throw Error(U(160));c2(o,a,i),it=null,fn=!1;var s=i.alternate;s!==null&&(s.return=null),i.return=null}catch(c){Me(i,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)u2(t,e),t=t.sibling}function u2(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(sn(t,e),_n(e),r&4){try{La(3,e,e.return),ju(3,e)}catch(y){Me(e,e.return,y)}try{La(5,e,e.return)}catch(y){Me(e,e.return,y)}}break;case 1:sn(t,e),_n(e),r&512&&n!==null&&ao(n,n.return);break;case 5:if(sn(t,e),_n(e),r&512&&n!==null&&ao(n,n.return),e.flags&32){var i=e.stateNode;try{Za(i,"")}catch(y){Me(e,e.return,y)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,a=n!==null?n.memoizedProps:o,l=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{l==="input"&&o.type==="radio"&&o.name!=null&&$w(i,o),dh(l,a);var c=dh(l,o);for(a=0;a<s.length;a+=2){var f=s[a],d=s[a+1];f==="style"?Lw(i,d):f==="dangerouslySetInnerHTML"?Aw(i,d):f==="children"?Za(i,d):Zm(i,f,d,c)}switch(l){case"input":ah(i,o);break;case"textarea":Iw(i,o);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var p=o.value;p!=null?lo(i,!!o.multiple,p,!1):h!==!!o.multiple&&(o.defaultValue!=null?lo(i,!!o.multiple,o.defaultValue,!0):lo(i,!!o.multiple,o.multiple?[]:"",!1))}i[ss]=o}catch(y){Me(e,e.return,y)}}break;case 6:if(sn(t,e),_n(e),r&4){if(e.stateNode===null)throw Error(U(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(y){Me(e,e.return,y)}}break;case 3:if(sn(t,e),_n(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ns(t.containerInfo)}catch(y){Me(e,e.return,y)}break;case 4:sn(t,e),_n(e);break;case 13:sn(t,e),_n(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||($g=De())),r&4&&my(e);break;case 22:if(f=n!==null&&n.memoizedState!==null,e.mode&1?(pt=(c=pt)||f,sn(t,e),pt=c):sn(t,e),_n(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!f&&e.mode&1)for(q=e,f=e.child;f!==null;){for(d=q=f;q!==null;){switch(h=q,p=h.child,h.tag){case 0:case 11:case 14:case 15:La(4,h,h.return);break;case 1:ao(h,h.return);var m=h.stateNode;if(typeof m.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,m.props=t.memoizedProps,m.state=t.memoizedState,m.componentWillUnmount()}catch(y){Me(r,n,y)}}break;case 5:ao(h,h.return);break;case 22:if(h.memoizedState!==null){vy(d);continue}}p!==null?(p.return=h,q=p):vy(d)}f=f.sibling}e:for(f=null,d=e;;){if(d.tag===5){if(f===null){f=d;try{i=d.stateNode,c?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(l=d.stateNode,s=d.memoizedProps.style,a=s!=null&&s.hasOwnProperty("display")?s.display:null,l.style.display=Dw("display",a))}catch(y){Me(e,e.return,y)}}}else if(d.tag===6){if(f===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(y){Me(e,e.return,y)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;f===d&&(f=null),d=d.return}f===d&&(f=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:sn(t,e),_n(e),r&4&&my(e);break;case 21:break;default:sn(t,e),_n(e)}}function _n(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(l2(n)){var r=n;break e}n=n.return}throw Error(U(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Za(i,""),r.flags&=-33);var o=hy(e);Bh(e,o,i);break;case 3:case 4:var a=r.stateNode.containerInfo,l=hy(e);Nh(e,l,a);break;default:throw Error(U(161))}}catch(s){Me(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Fj(e,t,n){q=e,d2(e)}function d2(e,t,n){for(var r=(e.mode&1)!==0;q!==null;){var i=q,o=i.child;if(i.tag===22&&r){var a=i.memoizedState!==null||sl;if(!a){var l=i.alternate,s=l!==null&&l.memoizedState!==null||pt;l=sl;var c=pt;if(sl=a,(pt=s)&&!c)for(q=i;q!==null;)a=q,s=a.child,a.tag===22&&a.memoizedState!==null?yy(i):s!==null?(s.return=a,q=s):yy(i);for(;o!==null;)q=o,d2(o),o=o.sibling;q=i,sl=l,pt=c}gy(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,q=o):gy(e)}}function gy(e){for(;q!==null;){var t=q;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:pt||ju(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!pt)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:dn(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Jv(t,o,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Jv(t,a,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var f=c.memoizedState;if(f!==null){var d=f.dehydrated;d!==null&&ns(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(U(163))}pt||t.flags&512&&zh(t)}catch(h){Me(t,t.return,h)}}if(t===e){q=null;break}if(n=t.sibling,n!==null){n.return=t.return,q=n;break}q=t.return}}function vy(e){for(;q!==null;){var t=q;if(t===e){q=null;break}var n=t.sibling;if(n!==null){n.return=t.return,q=n;break}q=t.return}}function yy(e){for(;q!==null;){var t=q;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{ju(4,t)}catch(s){Me(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(s){Me(t,i,s)}}var o=t.return;try{zh(t)}catch(s){Me(t,o,s)}break;case 5:var a=t.return;try{zh(t)}catch(s){Me(t,a,s)}}}catch(s){Me(t,t.return,s)}if(t===e){q=null;break}var l=t.sibling;if(l!==null){l.return=t.return,q=l;break}q=t.return}}var zj=Math.ceil,Dc=pr.ReactCurrentDispatcher,Tg=pr.ReactCurrentOwner,tn=pr.ReactCurrentBatchConfig,ce=0,Je=null,Be=null,at=0,zt=0,so=Hr(0),He=0,ps=null,xi=0,$u=0,jg=0,Ra=null,jt=null,$g=0,_o=1/0,qn=null,Lc=!1,Vh=null,Rr=null,ll=!1,Pr=null,Rc=0,Fa=0,Wh=null,Wl=-1,Ul=0;function wt(){return ce&6?De():Wl!==-1?Wl:Wl=De()}function Fr(e){return e.mode&1?ce&2&&at!==0?at&-at:Sj.transition!==null?(Ul===0&&(Ul=Yw()),Ul):(e=ye,e!==0||(e=window.event,e=e===void 0?16:tS(e.type)),e):1}function vn(e,t,n,r){if(50<Fa)throw Fa=0,Wh=null,Error(U(185));ks(e,n,r),(!(ce&2)||e!==Je)&&(e===Je&&(!(ce&2)&&($u|=n),He===4&&Cr(e,at)),At(e,r),n===1&&ce===0&&!(t.mode&1)&&(_o=De()+500,Pu&&Gr()))}function At(e,t){var n=e.callbackNode;ST(e,t);var r=bc(e,e===Je?at:0);if(r===0)n!==null&&Pv(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Pv(n),t===1)e.tag===0?wj(xy.bind(null,e)):bS(xy.bind(null,e)),vj(function(){!(ce&6)&&Gr()}),n=null;else{switch(Xw(r)){case 1:n=rg;break;case 4:n=Gw;break;case 16:n=xc;break;case 536870912:n=qw;break;default:n=xc}n=x2(n,f2.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function f2(e,t){if(Wl=-1,Ul=0,ce&6)throw Error(U(327));var n=e.callbackNode;if(ho()&&e.callbackNode!==n)return null;var r=bc(e,e===Je?at:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Fc(e,r);else{t=r;var i=ce;ce|=2;var o=h2();(Je!==e||at!==t)&&(qn=null,_o=De()+500,ui(e,t));do try{Vj();break}catch(l){p2(e,l)}while(1);gg(),Dc.current=o,ce=i,Be!==null?t=0:(Je=null,at=0,t=He)}if(t!==0){if(t===2&&(i=gh(e),i!==0&&(r=i,t=Uh(e,i))),t===1)throw n=ps,ui(e,0),Cr(e,r),At(e,De()),n;if(t===6)Cr(e,r);else{if(i=e.current.alternate,!(r&30)&&!Nj(i)&&(t=Fc(e,r),t===2&&(o=gh(e),o!==0&&(r=o,t=Uh(e,o))),t===1))throw n=ps,ui(e,0),Cr(e,r),At(e,De()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(U(345));case 2:Jr(e,jt,qn);break;case 3:if(Cr(e,r),(r&130023424)===r&&(t=$g+500-De(),10<t)){if(bc(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){wt(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Eh(Jr.bind(null,e,jt,qn),t);break}Jr(e,jt,qn);break;case 4:if(Cr(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var a=31-gn(r);o=1<<a,a=t[a],a>i&&(i=a),r&=~o}if(r=i,r=De()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*zj(r/1960))-r,10<r){e.timeoutHandle=Eh(Jr.bind(null,e,jt,qn),r);break}Jr(e,jt,qn);break;case 5:Jr(e,jt,qn);break;default:throw Error(U(329))}}}return At(e,De()),e.callbackNode===n?f2.bind(null,e):null}function Uh(e,t){var n=Ra;return e.current.memoizedState.isDehydrated&&(ui(e,t).flags|=256),e=Fc(e,t),e!==2&&(t=jt,jt=n,t!==null&&Hh(t)),e}function Hh(e){jt===null?jt=e:jt.push.apply(jt,e)}function Nj(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!wn(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Cr(e,t){for(t&=~jg,t&=~$u,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-gn(t),r=1<<n;e[n]=-1,t&=~r}}function xy(e){if(ce&6)throw Error(U(327));ho();var t=bc(e,0);if(!(t&1))return At(e,De()),null;var n=Fc(e,t);if(e.tag!==0&&n===2){var r=gh(e);r!==0&&(t=r,n=Uh(e,r))}if(n===1)throw n=ps,ui(e,0),Cr(e,t),At(e,De()),n;if(n===6)throw Error(U(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Jr(e,jt,qn),At(e,De()),null}function Ig(e,t){var n=ce;ce|=1;try{return e(t)}finally{ce=n,ce===0&&(_o=De()+500,Pu&&Gr())}}function bi(e){Pr!==null&&Pr.tag===0&&!(ce&6)&&ho();var t=ce;ce|=1;var n=tn.transition,r=ye;try{if(tn.transition=null,ye=1,e)return e()}finally{ye=r,tn.transition=n,ce=t,!(ce&6)&&Gr()}}function Mg(){zt=so.current,Ce(so)}function ui(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,gj(n)),Be!==null)for(n=Be.return;n!==null;){var r=n;switch(pg(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&_c();break;case 3:Co(),Ce(It),Ce(mt),Sg();break;case 5:wg(r);break;case 4:Co();break;case 13:Ce(Oe);break;case 19:Ce(Oe);break;case 10:vg(r.type._context);break;case 22:case 23:Mg()}n=n.return}if(Je=e,Be=e=zr(e.current,null),at=zt=t,He=0,ps=null,jg=$u=xi=0,jt=Ra=null,ai!==null){for(t=0;t<ai.length;t++)if(n=ai[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var a=o.next;o.next=i,r.next=a}n.pending=r}ai=null}return e}function p2(e,t){do{var n=Be;try{if(gg(),Nl.current=Ac,Mc){for(var r=Te.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Mc=!1}if(yi=0,Ze=We=Te=null,Da=!1,us=0,Tg.current=null,n===null||n.return===null){He=1,ps=t,Be=null;break}e:{var o=e,a=n.return,l=n,s=t;if(t=at,l.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var c=s,f=l,d=f.tag;if(!(f.mode&1)&&(d===0||d===11||d===15)){var h=f.alternate;h?(f.updateQueue=h.updateQueue,f.memoizedState=h.memoizedState,f.lanes=h.lanes):(f.updateQueue=null,f.memoizedState=null)}var p=ay(a);if(p!==null){p.flags&=-257,sy(p,a,l,o,t),p.mode&1&&oy(o,c,t),t=p,s=c;var m=t.updateQueue;if(m===null){var y=new Set;y.add(s),t.updateQueue=y}else m.add(s);break e}else{if(!(t&1)){oy(o,c,t),Ag();break e}s=Error(U(426))}}else if(ke&&l.mode&1){var w=ay(a);if(w!==null){!(w.flags&65536)&&(w.flags|=256),sy(w,a,l,o,t),hg(Eo(s,l));break e}}o=s=Eo(s,l),He!==4&&(He=2),Ra===null?Ra=[o]:Ra.push(o),o=a;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var g=KS(o,s,t);Zv(o,g);break e;case 1:l=s;var v=o.type,b=o.stateNode;if(!(o.flags&128)&&(typeof v.getDerivedStateFromError=="function"||b!==null&&typeof b.componentDidCatch=="function"&&(Rr===null||!Rr.has(b)))){o.flags|=65536,t&=-t,o.lanes|=t;var C=QS(o,l,t);Zv(o,C);break e}}o=o.return}while(o!==null)}g2(n)}catch(S){t=S,Be===n&&n!==null&&(Be=n=n.return);continue}break}while(1)}function h2(){var e=Dc.current;return Dc.current=Ac,e===null?Ac:e}function Ag(){(He===0||He===3||He===2)&&(He=4),Je===null||!(xi&268435455)&&!($u&268435455)||Cr(Je,at)}function Fc(e,t){var n=ce;ce|=2;var r=h2();(Je!==e||at!==t)&&(qn=null,ui(e,t));do try{Bj();break}catch(i){p2(e,i)}while(1);if(gg(),ce=n,Dc.current=r,Be!==null)throw Error(U(261));return Je=null,at=0,He}function Bj(){for(;Be!==null;)m2(Be)}function Vj(){for(;Be!==null&&!pT();)m2(Be)}function m2(e){var t=y2(e.alternate,e,zt);e.memoizedProps=e.pendingProps,t===null?g2(e):Be=t,Tg.current=null}function g2(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Dj(n,t),n!==null){n.flags&=32767,Be=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{He=6,Be=null;return}}else if(n=Aj(n,t,zt),n!==null){Be=n;return}if(t=t.sibling,t!==null){Be=t;return}Be=t=e}while(t!==null);He===0&&(He=5)}function Jr(e,t,n){var r=ye,i=tn.transition;try{tn.transition=null,ye=1,Wj(e,t,n,r)}finally{tn.transition=i,ye=r}return null}function Wj(e,t,n,r){do ho();while(Pr!==null);if(ce&6)throw Error(U(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(U(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(CT(e,o),e===Je&&(Be=Je=null,at=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ll||(ll=!0,x2(xc,function(){return ho(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=tn.transition,tn.transition=null;var a=ye;ye=1;var l=ce;ce|=4,Tg.current=null,Rj(e,n),u2(n,e),cj(Sh),wc=!!wh,Sh=wh=null,e.current=n,Fj(n),hT(),ce=l,ye=a,tn.transition=o}else e.current=n;if(ll&&(ll=!1,Pr=e,Rc=i),o=e.pendingLanes,o===0&&(Rr=null),vT(n.stateNode),At(e,De()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Lc)throw Lc=!1,e=Vh,Vh=null,e;return Rc&1&&e.tag!==0&&ho(),o=e.pendingLanes,o&1?e===Wh?Fa++:(Fa=0,Wh=e):Fa=0,Gr(),null}function ho(){if(Pr!==null){var e=Xw(Rc),t=tn.transition,n=ye;try{if(tn.transition=null,ye=16>e?16:e,Pr===null)var r=!1;else{if(e=Pr,Pr=null,Rc=0,ce&6)throw Error(U(331));var i=ce;for(ce|=4,q=e.current;q!==null;){var o=q,a=o.child;if(q.flags&16){var l=o.deletions;if(l!==null){for(var s=0;s<l.length;s++){var c=l[s];for(q=c;q!==null;){var f=q;switch(f.tag){case 0:case 11:case 15:La(8,f,o)}var d=f.child;if(d!==null)d.return=f,q=d;else for(;q!==null;){f=q;var h=f.sibling,p=f.return;if(s2(f),f===c){q=null;break}if(h!==null){h.return=p,q=h;break}q=p}}}var m=o.alternate;if(m!==null){var y=m.child;if(y!==null){m.child=null;do{var w=y.sibling;y.sibling=null,y=w}while(y!==null)}}q=o}}if(o.subtreeFlags&2064&&a!==null)a.return=o,q=a;else e:for(;q!==null;){if(o=q,o.flags&2048)switch(o.tag){case 0:case 11:case 15:La(9,o,o.return)}var g=o.sibling;if(g!==null){g.return=o.return,q=g;break e}q=o.return}}var v=e.current;for(q=v;q!==null;){a=q;var b=a.child;if(a.subtreeFlags&2064&&b!==null)b.return=a,q=b;else e:for(a=v;q!==null;){if(l=q,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:ju(9,l)}}catch(S){Me(l,l.return,S)}if(l===a){q=null;break e}var C=l.sibling;if(C!==null){C.return=l.return,q=C;break e}q=l.return}}if(ce=i,Gr(),Ln&&typeof Ln.onPostCommitFiberRoot=="function")try{Ln.onPostCommitFiberRoot(Su,e)}catch{}r=!0}return r}finally{ye=n,tn.transition=t}}return!1}function by(e,t,n){t=Eo(n,t),t=KS(e,t,1),e=Lr(e,t,1),t=wt(),e!==null&&(ks(e,1,t),At(e,t))}function Me(e,t,n){if(e.tag===3)by(e,e,n);else for(;t!==null;){if(t.tag===3){by(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Rr===null||!Rr.has(r))){e=Eo(n,e),e=QS(t,e,1),t=Lr(t,e,1),e=wt(),t!==null&&(ks(t,1,e),At(t,e));break}}t=t.return}}function Uj(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=wt(),e.pingedLanes|=e.suspendedLanes&n,Je===e&&(at&n)===n&&(He===4||He===3&&(at&130023424)===at&&500>De()-$g?ui(e,0):jg|=n),At(e,t)}function v2(e,t){t===0&&(e.mode&1?(t=Zs,Zs<<=1,!(Zs&130023424)&&(Zs=4194304)):t=1);var n=wt();e=sr(e,t),e!==null&&(ks(e,t,n),At(e,n))}function Hj(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),v2(e,n)}function Gj(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(U(314))}r!==null&&r.delete(t),v2(e,n)}var y2;y2=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||It.current)$t=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return $t=!1,Mj(e,t,n);$t=!!(e.flags&131072)}else $t=!1,ke&&t.flags&1048576&&wS(t,Oc,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Vl(e,t),e=t.pendingProps;var i=bo(t,mt.current);po(t,n),i=Eg(null,t,r,e,i,n);var o=_g();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Mt(r)?(o=!0,kc(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,xg(t),i.updater=Ou,t.stateNode=i,i._reactInternals=t,$h(t,r,e,n),t=Ah(null,t,r,!0,o,n)):(t.tag=0,ke&&o&&fg(t),xt(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Vl(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Yj(r),e=dn(r,e),i){case 0:t=Mh(null,t,r,e,n);break e;case 1:t=uy(null,t,r,e,n);break e;case 11:t=ly(null,t,r,e,n);break e;case 14:t=cy(null,t,r,dn(r.type,e),n);break e}throw Error(U(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:dn(r,i),Mh(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:dn(r,i),uy(e,t,r,i,n);case 3:e:{if(t2(t),e===null)throw Error(U(387));r=t.pendingProps,o=t.memoizedState,i=o.element,_S(e,t),$c(t,r,null,n);var a=t.memoizedState;if(r=a.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Eo(Error(U(423)),t),t=dy(e,t,r,n,i);break e}else if(r!==i){i=Eo(Error(U(424)),t),t=dy(e,t,r,n,i);break e}else for(Bt=Dr(t.stateNode.containerInfo.firstChild),Ut=t,ke=!0,hn=null,n=TS(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(wo(),r===i){t=lr(e,t,n);break e}xt(e,t,r,n)}t=t.child}return t;case 5:return jS(t),e===null&&Oh(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,a=i.children,Ch(r,i)?a=null:o!==null&&Ch(r,o)&&(t.flags|=32),e2(e,t),xt(e,t,a,n),t.child;case 6:return e===null&&Oh(t),null;case 13:return n2(e,t,n);case 4:return bg(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=So(t,null,r,n):xt(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:dn(r,i),ly(e,t,r,i,n);case 7:return xt(e,t,t.pendingProps,n),t.child;case 8:return xt(e,t,t.pendingProps.children,n),t.child;case 12:return xt(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,a=i.value,be(Tc,r._currentValue),r._currentValue=a,o!==null)if(wn(o.value,a)){if(o.children===i.children&&!It.current){t=lr(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var l=o.dependencies;if(l!==null){a=o.child;for(var s=l.firstContext;s!==null;){if(s.context===r){if(o.tag===1){s=nr(-1,n&-n),s.tag=2;var c=o.updateQueue;if(c!==null){c=c.shared;var f=c.pending;f===null?s.next=s:(s.next=f.next,f.next=s),c.pending=s}}o.lanes|=n,s=o.alternate,s!==null&&(s.lanes|=n),Th(o.return,n,t),l.lanes|=n;break}s=s.next}}else if(o.tag===10)a=o.type===t.type?null:o.child;else if(o.tag===18){if(a=o.return,a===null)throw Error(U(341));a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),Th(a,n,t),a=o.sibling}else a=o.child;if(a!==null)a.return=o;else for(a=o;a!==null;){if(a===t){a=null;break}if(o=a.sibling,o!==null){o.return=a.return,a=o;break}a=a.return}o=a}xt(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,po(t,n),i=nn(i),r=r(i),t.flags|=1,xt(e,t,r,n),t.child;case 14:return r=t.type,i=dn(r,t.pendingProps),i=dn(r.type,i),cy(e,t,r,i,n);case 15:return ZS(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:dn(r,i),Vl(e,t),t.tag=1,Mt(r)?(e=!0,kc(t)):e=!1,po(t,n),PS(t,r,i),$h(t,r,i,n),Ah(null,t,r,!0,e,n);case 19:return r2(e,t,n);case 22:return JS(e,t,n)}throw Error(U(156,t.tag))};function x2(e,t){return Hw(e,t)}function qj(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function en(e,t,n,r){return new qj(e,t,n,r)}function Dg(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Yj(e){if(typeof e=="function")return Dg(e)?1:0;if(e!=null){if(e=e.$$typeof,e===eg)return 11;if(e===tg)return 14}return 2}function zr(e,t){var n=e.alternate;return n===null?(n=en(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Hl(e,t,n,r,i,o){var a=2;if(r=e,typeof e=="function")Dg(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case Qi:return di(n.children,i,o,t);case Jm:a=8,i|=8;break;case th:return e=en(12,n,t,i|2),e.elementType=th,e.lanes=o,e;case nh:return e=en(13,n,t,i),e.elementType=nh,e.lanes=o,e;case rh:return e=en(19,n,t,i),e.elementType=rh,e.lanes=o,e;case Ow:return Iu(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case kw:a=10;break e;case Pw:a=9;break e;case eg:a=11;break e;case tg:a=14;break e;case br:a=16,r=null;break e}throw Error(U(130,e==null?e:typeof e,""))}return t=en(a,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function di(e,t,n,r){return e=en(7,e,r,t),e.lanes=n,e}function Iu(e,t,n,r){return e=en(22,e,r,t),e.elementType=Ow,e.lanes=n,e.stateNode={isHidden:!1},e}function _f(e,t,n){return e=en(6,e,null,t),e.lanes=n,e}function kf(e,t,n){return t=en(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Xj(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=af(0),this.expirationTimes=af(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=af(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Lg(e,t,n,r,i,o,a,l,s){return e=new Xj(e,t,n,l,s),t===1?(t=1,o===!0&&(t|=8)):t=0,o=en(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},xg(o),e}function Kj(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ki,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function b2(e){if(!e)return Vr;e=e._reactInternals;e:{if(Oi(e)!==e||e.tag!==1)throw Error(U(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Mt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(U(171))}if(e.tag===1){var n=e.type;if(Mt(n))return xS(e,n,t)}return t}function w2(e,t,n,r,i,o,a,l,s){return e=Lg(n,r,!0,e,i,o,a,l,s),e.context=b2(null),n=e.current,r=wt(),i=Fr(n),o=nr(r,i),o.callback=t??null,Lr(n,o,i),e.current.lanes=i,ks(e,i,r),At(e,r),e}function Mu(e,t,n,r){var i=t.current,o=wt(),a=Fr(i);return n=b2(n),t.context===null?t.context=n:t.pendingContext=n,t=nr(o,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Lr(i,t,a),e!==null&&(vn(e,i,a,o),zl(e,i,a)),a}function zc(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function wy(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Rg(e,t){wy(e,t),(e=e.alternate)&&wy(e,t)}function Qj(){return null}var S2=typeof reportError=="function"?reportError:function(e){console.error(e)};function Fg(e){this._internalRoot=e}Au.prototype.render=Fg.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(U(409));Mu(e,t,null,null)};Au.prototype.unmount=Fg.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;bi(function(){Mu(null,e,null,null)}),t[ar]=null}};function Au(e){this._internalRoot=e}Au.prototype.unstable_scheduleHydration=function(e){if(e){var t=Zw();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Sr.length&&t!==0&&t<Sr[n].priority;n++);Sr.splice(n,0,e),n===0&&eS(e)}};function zg(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Du(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Sy(){}function Zj(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var c=zc(a);o.call(c)}}var a=w2(t,r,e,0,null,!1,!1,"",Sy);return e._reactRootContainer=a,e[ar]=a.current,os(e.nodeType===8?e.parentNode:e),bi(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var c=zc(s);l.call(c)}}var s=Lg(e,0,!1,null,null,!1,!1,"",Sy);return e._reactRootContainer=s,e[ar]=s.current,os(e.nodeType===8?e.parentNode:e),bi(function(){Mu(t,s,n,r)}),s}function Lu(e,t,n,r,i){var o=n._reactRootContainer;if(o){var a=o;if(typeof i=="function"){var l=i;i=function(){var s=zc(a);l.call(s)}}Mu(t,a,e,i)}else a=Zj(n,t,e,i,r);return zc(a)}Kw=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=wa(t.pendingLanes);n!==0&&(ig(t,n|1),At(t,De()),!(ce&6)&&(_o=De()+500,Gr()))}break;case 13:bi(function(){var r=sr(e,1);if(r!==null){var i=wt();vn(r,e,1,i)}}),Rg(e,1)}};og=function(e){if(e.tag===13){var t=sr(e,134217728);if(t!==null){var n=wt();vn(t,e,134217728,n)}Rg(e,134217728)}};Qw=function(e){if(e.tag===13){var t=Fr(e),n=sr(e,t);if(n!==null){var r=wt();vn(n,e,t,r)}Rg(e,t)}};Zw=function(){return ye};Jw=function(e,t){var n=ye;try{return ye=e,t()}finally{ye=n}};ph=function(e,t,n){switch(t){case"input":if(ah(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=ku(r);if(!i)throw Error(U(90));jw(r),ah(r,i)}}}break;case"textarea":Iw(e,n);break;case"select":t=n.value,t!=null&&lo(e,!!n.multiple,t,!1)}};zw=Ig;Nw=bi;var Jj={usingClientEntryPoint:!1,Events:[Os,to,ku,Rw,Fw,Ig]},ca={findFiberByHostInstance:oi,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},e$={bundleType:ca.bundleType,version:ca.version,rendererPackageName:ca.rendererPackageName,rendererConfig:ca.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:pr.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Ww(e),e===null?null:e.stateNode},findFiberByHostInstance:ca.findFiberByHostInstance||Qj,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var cl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!cl.isDisabled&&cl.supportsFiber)try{Su=cl.inject(e$),Ln=cl}catch{}}Yt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Jj;Yt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!zg(t))throw Error(U(200));return Kj(e,t,null,n)};Yt.createRoot=function(e,t){if(!zg(e))throw Error(U(299));var n=!1,r="",i=S2;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Lg(e,1,!1,null,null,n,!1,r,i),e[ar]=t.current,os(e.nodeType===8?e.parentNode:e),new Fg(t)};Yt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(U(188)):(e=Object.keys(e).join(","),Error(U(268,e)));return e=Ww(t),e=e===null?null:e.stateNode,e};Yt.flushSync=function(e){return bi(e)};Yt.hydrate=function(e,t,n){if(!Du(t))throw Error(U(200));return Lu(null,e,t,!0,n)};Yt.hydrateRoot=function(e,t,n){if(!zg(e))throw Error(U(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",a=S2;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=w2(t,null,e,1,n??null,i,!1,o,a),e[ar]=t.current,os(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Au(t)};Yt.render=function(e,t,n){if(!Du(t))throw Error(U(200));return Lu(null,e,t,!1,n)};Yt.unmountComponentAtNode=function(e){if(!Du(e))throw Error(U(40));return e._reactRootContainer?(bi(function(){Lu(null,null,e,!1,function(){e._reactRootContainer=null,e[ar]=null})}),!0):!1};Yt.unstable_batchedUpdates=Ig;Yt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Du(n))throw Error(U(200));if(e==null||e._reactInternals===void 0)throw Error(U(38));return Lu(e,t,n,!1,r)};Yt.version="18.2.0-next-9e3b772b8-20220608";function C2(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(C2)}catch(e){console.error(e)}}C2(),ww.exports=Yt;var Ru=ww.exports,Cy=Ru;Jp.createRoot=Cy.createRoot,Jp.hydrateRoot=Cy.hydrateRoot;var ht=function(){return ht=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},ht.apply(this,arguments)};function ko(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,o;r<i;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))}function t$(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var n$=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|popover|popoverTarget|popoverTargetAction|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,r$=t$(function(e){return n$.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),Se="-ms-",za="-moz-",fe="-webkit-",E2="comm",Fu="rule",Ng="decl",i$="@import",o$="@namespace",_2="@keyframes",a$="@layer",k2=Math.abs,Bg=String.fromCharCode,Gh=Object.assign;function s$(e,t){return Ue(e,0)^45?(((t<<2^Ue(e,0))<<2^Ue(e,1))<<2^Ue(e,2))<<2^Ue(e,3):0}function P2(e){return e.trim()}function Yn(e,t){return(e=t.exec(e))?e[0]:e}function re(e,t,n){return e.replace(t,n)}function Gl(e,t,n){return e.indexOf(t,n)}function Ue(e,t){return e.charCodeAt(t)|0}function wi(e,t,n){return e.slice(t,n)}function pn(e){return e.length}function O2(e){return e.length}function Ca(e,t){return t.push(e),e}function l$(e,t){return e.map(t).join("")}function Ey(e,t){return e.filter(function(n){return!Yn(n,t)})}var zu=1,Po=1,T2=0,on=0,ze=0,Wo="";function Nu(e,t,n,r,i,o,a,l){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:zu,column:Po,length:a,return:"",siblings:l}}function xr(e,t){return Gh(Nu("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function Di(e){for(;e.root;)e=xr(e.root,{children:[e]});Ca(e,e.siblings)}function c$(){return ze}function u$(){return ze=on>0?Ue(Wo,--on):0,Po--,ze===10&&(Po=1,zu--),ze}function yn(){return ze=on<T2?Ue(Wo,on++):0,Po++,ze===10&&(Po=1,zu++),ze}function Or(){return Ue(Wo,on)}function ql(){return on}function Bu(e,t){return wi(Wo,e,t)}function hs(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function d$(e){return zu=Po=1,T2=pn(Wo=e),on=0,[]}function f$(e){return Wo="",e}function Pf(e){return P2(Bu(on-1,qh(e===91?e+2:e===40?e+1:e)))}function p$(e){for(;(ze=Or())&&ze<33;)yn();return hs(e)>2||hs(ze)>3?"":" "}function h$(e,t){for(;--t&&yn()&&!(ze<48||ze>102||ze>57&&ze<65||ze>70&&ze<97););return Bu(e,ql()+(t<6&&Or()==32&&yn()==32))}function qh(e){for(;yn();)switch(ze){case e:return on;case 34:case 39:e!==34&&e!==39&&qh(ze);break;case 40:e===41&&qh(e);break;case 92:yn();break}return on}function m$(e,t){for(;yn()&&e+ze!==47+10;)if(e+ze===42+42&&Or()===47)break;return"/*"+Bu(t,on-1)+"*"+Bg(e===47?e:yn())}function g$(e){for(;!hs(Or());)yn();return Bu(e,on)}function v$(e){return f$(Yl("",null,null,null,[""],e=d$(e),0,[0],e))}function Yl(e,t,n,r,i,o,a,l,s){for(var c=0,f=0,d=a,h=0,p=0,m=0,y=1,w=1,g=1,v=0,b="",C=i,S=o,P=r,k=b;w;)switch(m=v,v=yn()){case 40:if(m!=108&&Ue(k,d-1)==58){Gl(k+=re(Pf(v),"&","&\f"),"&\f",k2(c?l[c-1]:0))!=-1&&(g=-1);break}case 34:case 39:case 91:k+=Pf(v);break;case 9:case 10:case 13:case 32:k+=p$(m);break;case 92:k+=h$(ql()-1,7);continue;case 47:switch(Or()){case 42:case 47:Ca(y$(m$(yn(),ql()),t,n,s),s),(hs(m||1)==5||hs(Or()||1)==5)&&pn(k)&&wi(k,-1,void 0)!==" "&&(k+=" ");break;default:k+="/"}break;case 123*y:l[c++]=pn(k)*g;case 125*y:case 59:case 0:switch(v){case 0:case 125:w=0;case 59+f:g==-1&&(k=re(k,/\f/g,"")),p>0&&(pn(k)-d||y===0&&m===47)&&Ca(p>32?ky(k+";",r,n,d-1,s):ky(re(k," ","")+";",r,n,d-2,s),s);break;case 59:k+=";";default:if(Ca(P=_y(k,t,n,c,f,i,l,b,C=[],S=[],d,o),o),v===123)if(f===0)Yl(k,t,P,P,C,o,d,l,S);else{switch(h){case 99:if(Ue(k,3)===110)break;case 108:if(Ue(k,2)===97)break;default:f=0;case 100:case 109:case 115:}f?Yl(e,P,P,r&&Ca(_y(e,P,P,0,0,i,l,b,i,C=[],d,S),S),i,S,d,l,r?C:S):Yl(k,P,P,P,[""],S,0,l,S)}}c=f=p=0,y=g=1,b=k="",d=a;break;case 58:d=1+pn(k),p=m;default:if(y<1){if(v==123)--y;else if(v==125&&y++==0&&u$()==125)continue}switch(k+=Bg(v),v*y){case 38:g=f>0?1:(k+="\f",-1);break;case 44:l[c++]=(pn(k)-1)*g,g=1;break;case 64:Or()===45&&(k+=Pf(yn())),h=Or(),f=d=pn(b=k+=g$(ql())),v++;break;case 45:m===45&&pn(k)==2&&(y=0)}}return o}function _y(e,t,n,r,i,o,a,l,s,c,f,d){for(var h=i-1,p=i===0?o:[""],m=O2(p),y=0,w=0,g=0;y<r;++y)for(var v=0,b=wi(e,h+1,h=k2(w=a[y])),C=e;v<m;++v)(C=P2(w>0?p[v]+" "+b:re(b,/&\f/g,p[v])))&&(s[g++]=C);return Nu(e,t,n,i===0?Fu:l,s,c,f,d)}function y$(e,t,n,r){return Nu(e,t,n,E2,Bg(c$()),wi(e,2,-2),0,r)}function ky(e,t,n,r,i){return Nu(e,t,n,Ng,wi(e,0,r),wi(e,r+1,-1),r,i)}function j2(e,t,n){switch(s$(e,t)){case 5103:return fe+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return fe+e+e;case 4855:return fe+e.replace("add","source-over").replace("substract","source-out").replace("intersect","source-in").replace("exclude","xor")+e;case 4789:return za+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return fe+e+za+e+Se+e+e;case 5936:switch(Ue(e,t+11)){case 114:return fe+e+Se+re(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return fe+e+Se+re(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return fe+e+Se+re(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return fe+e+Se+e+e;case 6165:return fe+e+Se+"flex-"+e+e;case 5187:return fe+e+re(e,/(\w+).+(:[^]+)/,fe+"box-$1$2"+Se+"flex-$1$2")+e;case 5443:return fe+e+Se+"flex-item-"+re(e,/flex-|-self/g,"")+(Yn(e,/flex-|baseline/)?"":Se+"grid-row-"+re(e,/flex-|-self/g,""))+e;case 4675:return fe+e+Se+"flex-line-pack"+re(e,/align-content|flex-|-self/g,"")+e;case 5548:return fe+e+Se+re(e,"shrink","negative")+e;case 5292:return fe+e+Se+re(e,"basis","preferred-size")+e;case 6060:return fe+"box-"+re(e,"-grow","")+fe+e+Se+re(e,"grow","positive")+e;case 4554:return fe+re(e,/([^-])(transform)/g,"$1"+fe+"$2")+e;case 6187:return re(re(re(e,/(zoom-|grab)/,fe+"$1"),/(image-set)/,fe+"$1"),e,"")+e;case 5495:case 3959:return re(e,/(image-set\([^]*)/,fe+"$1$`$1");case 4968:return re(re(e,/(.+:)(flex-)?(.*)/,fe+"box-pack:$3"+Se+"flex-pack:$3"),/space-between/,"justify")+fe+e+e;case 4200:if(!Yn(e,/flex-|baseline/))return Se+"grid-column-align"+wi(e,t)+e;break;case 2592:case 3360:return Se+re(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,i){return t=i,Yn(r.props,/grid-\w+-end/)})?~Gl(e+(n=n[t].value),"span",0)?e:Se+re(e,"-start","")+e+Se+"grid-row-span:"+(~Gl(n,"span",0)?Yn(n,/\d+/):+Yn(n,/\d+/)-+Yn(e,/\d+/))+";":Se+re(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return Yn(r.props,/grid-\w+-start/)})?e:Se+re(re(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return re(e,/(.+)-inline(.+)/,fe+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(pn(e)-1-t>6)switch(Ue(e,t+1)){case 109:if(Ue(e,t+4)!==45)break;case 102:return re(e,/(.+:)(.+)-([^]+)/,"$1"+fe+"$2-$3$1"+za+(Ue(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Gl(e,"stretch",0)?j2(re(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return re(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,o,a,l,s,c){return Se+i+":"+o+c+(a?Se+i+"-span:"+(l?s:+s-+o)+c:"")+e});case 4949:if(Ue(e,t+6)===121)return re(e,":",":"+fe)+e;break;case 6444:switch(Ue(e,Ue(e,14)===45?18:11)){case 120:return re(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+fe+(Ue(e,14)===45?"inline-":"")+"box$3$1"+fe+"$2$3$1"+Se+"$2box$3")+e;case 100:return re(e,":",":"+Se)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return re(e,"scroll-","scroll-snap-")+e}return e}function Nc(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function x$(e,t,n,r){switch(e.type){case a$:if(e.children.length)break;case i$:case o$:case Ng:return e.return=e.return||e.value;case E2:return"";case _2:return e.return=e.value+"{"+Nc(e.children,r)+"}";case Fu:if(!pn(e.value=e.props.join(",")))return""}return pn(n=Nc(e.children,r))?e.return=e.value+"{"+n+"}":""}function b$(e){var t=O2(e);return function(n,r,i,o){for(var a="",l=0;l<t;l++)a+=e[l](n,r,i,o)||"";return a}}function w$(e){return function(t){t.root||(t=t.return)&&e(t)}}function S$(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case Ng:e.return=j2(e.value,e.length,n);return;case _2:return Nc([xr(e,{value:re(e.value,"@","@"+fe)})],r);case Fu:if(e.length)return l$(n=e.props,function(i){switch(Yn(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Di(xr(e,{props:[re(i,/:(read-\w+)/,":"+za+"$1")]})),Di(xr(e,{props:[i]})),Gh(e,{props:Ey(n,r)});break;case"::placeholder":Di(xr(e,{props:[re(i,/:(plac\w+)/,":"+fe+"input-$1")]})),Di(xr(e,{props:[re(i,/:(plac\w+)/,":"+za+"$1")]})),Di(xr(e,{props:[re(i,/:(plac\w+)/,Se+"input-$1")]})),Di(xr(e,{props:[i]})),Gh(e,{props:Ey(n,r)});break}return""})}}var C$={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Oo=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",$2="active",I2="data-styled-version",Vu="6.3.11",Vg=`/*!sc*/
`,Na=typeof window<"u"&&typeof document<"u",E$=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY),_$={};function js(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var Xl=new Map,Bc=new Map,Kl=1,Ea=function(e){if(Xl.has(e))return Xl.get(e);for(;Bc.has(Kl);)Kl++;var t=Kl++;return Xl.set(e,t),Bc.set(t,e),t},k$=function(e,t){Kl=t+1,Xl.set(e,t),Bc.set(t,e)},Wg=Object.freeze([]),To=Object.freeze({});function M2(e,t,n){return n===void 0&&(n=To),e.theme!==n.theme&&e.theme||t||n.theme}var A2=new Set(["a","abbr","address","area","article","aside","audio","b","bdi","bdo","blockquote","body","button","br","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","main","map","mark","menu","meter","nav","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","slot","small","span","strong","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","switch","symbol","text","textPath","tspan","use"]),P$=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,O$=/(^-|-$)/g;function Py(e){return e.replace(P$,"-").replace(O$,"")}var T$=/(a)(d)/gi,Oy=function(e){return String.fromCharCode(e+(e>25?39:97))};function Yh(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=Oy(t%52)+n;return(Oy(t%52)+n).replace(T$,"$1-$2")}var Of,ei=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},D2=function(e){return ei(5381,e)};function Ug(e){return Yh(D2(e)>>>0)}function j$(e){return e.displayName||e.name||"Component"}function Tf(e){return typeof e=="string"&&!0}var L2=typeof Symbol=="function"&&Symbol.for,R2=L2?Symbol.for("react.memo"):60115,$$=L2?Symbol.for("react.forward_ref"):60112,I$={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},M$={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},F2={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},A$=((Of={})[$$]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Of[R2]=F2,Of);function Ty(e){return("type"in(t=e)&&t.type.$$typeof)===R2?F2:"$$typeof"in e?A$[e.$$typeof]:I$;var t}var D$=Object.defineProperty,L$=Object.getOwnPropertyNames,jy=Object.getOwnPropertySymbols,R$=Object.getOwnPropertyDescriptor,F$=Object.getPrototypeOf,$y=Object.prototype;function z2(e,t,n){if(typeof t!="string"){if($y){var r=F$(t);r&&r!==$y&&z2(e,r,n)}var i=L$(t);jy&&(i=i.concat(jy(t)));for(var o=Ty(e),a=Ty(t),l=0;l<i.length;++l){var s=i[l];if(!(s in M$||n&&n[s]||a&&s in a||o&&s in o)){var c=R$(t,s);try{D$(e,s,c)}catch{}}}}return e}function jo(e){return typeof e=="function"}function Hg(e){return typeof e=="object"&&"styledComponentId"in e}function li(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Vc(e,t){return e.join(t||"")}function ms(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Xh(e,t,n){if(n===void 0&&(n=!1),!n&&!ms(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=Xh(e[r],t[r]);else if(ms(t))for(var r in t)e[r]=Xh(e[r],t[r]);return e}function Gg(e,t){Object.defineProperty(e,"toString",{value:t})}var z$=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t,this._cGroup=0,this._cIndex=0}return e.prototype.indexOfGroup=function(t){if(t===this._cGroup)return this._cIndex;var n=this._cIndex;if(t>this._cGroup)for(var r=this._cGroup;r<t;r++)n+=this.groupSizes[r];else for(r=this._cGroup-1;r>=t;r--)n-=this.groupSizes[r];return this._cGroup=t,this._cIndex=n,n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,o=i;t>=o;)if((o<<=1)<0)throw js(16,"".concat(t));this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var a=i;a<o;a++)this.groupSizes[a]=0}for(var l=this.indexOfGroup(t+1),s=0,c=(a=0,n.length);a<c;a++)this.tag.insertRule(l,n[a])&&(this.groupSizes[t]++,l++,s++);s>0&&this._cGroup>t&&(this._cIndex+=s)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),i=r+n;this.groupSizes[t]=0;for(var o=r;o<i;o++)this.tag.deleteRule(r);n>0&&this._cGroup>t&&(this._cIndex-=n)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],i=this.indexOfGroup(t),o=i+r,a=i;a<o;a++)n+=this.tag.getRule(a)+Vg;return n},e}(),N$="style[".concat(Oo,"][").concat(I2,'="').concat(Vu,'"]'),B$=new RegExp("^".concat(Oo,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Iy=function(e){return typeof ShadowRoot<"u"&&e instanceof ShadowRoot||"host"in e&&e.nodeType===11},Kh=function(e){if(!e)return document;if(Iy(e))return e;if("getRootNode"in e){var t=e.getRootNode();if(Iy(t))return t}return document},V$=function(e,t,n){for(var r,i=n.split(","),o=0,a=i.length;o<a;o++)(r=i[o])&&e.registerName(t,r)},W$=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(Vg),i=[],o=0,a=r.length;o<a;o++){var l=r[o].trim();if(l){var s=l.match(B$);if(s){var c=0|parseInt(s[1],10),f=s[2];c!==0&&(k$(f,c),V$(e,f,s[3]),e.getTag().insertRules(c,i)),i.length=0}else i.push(l)}}},jf=function(e){for(var t=Kh(e.options.target).querySelectorAll(N$),n=0,r=t.length;n<r;n++){var i=t[n];i&&i.getAttribute(Oo)!==$2&&(W$(e,i),i.parentNode&&i.parentNode.removeChild(i))}};function U$(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var N2=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(l){var s=Array.from(l.querySelectorAll("style[".concat(Oo,"]")));return s[s.length-1]}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(Oo,$2),r.setAttribute(I2,Vu);var a=U$();return a&&r.setAttribute("nonce",a),n.insertBefore(r,o),r},H$=function(){function e(t){this.element=N2(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){var r;if(n.sheet)return n.sheet;for(var i=(r=n.getRootNode().styleSheets)!==null&&r!==void 0?r:document.styleSheets,o=0,a=i.length;o<a;o++){var l=i[o];if(l.ownerNode===n)return l}throw js(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),G$=function(){function e(t){this.element=N2(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),q$=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(t===this.length?this.rules.push(n):this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),My=Na,Y$={isServer:!Na,useCSSOMInjection:!E$},Wc=function(){function e(t,n,r){t===void 0&&(t=To),n===void 0&&(n={});var i=this;this.options=ht(ht({},Y$),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&Na&&My&&(My=!1,jf(this)),Gg(this,function(){return function(o){for(var a=o.getTag(),l=a.length,s="",c=function(d){var h=function(g){return Bc.get(g)}(d);if(h===void 0)return"continue";var p=o.names.get(h);if(p===void 0||!p.size)return"continue";var m=a.getGroup(d);if(m.length===0)return"continue";var y=Oo+".g"+d+'[id="'+h+'"]',w="";p.forEach(function(g){g.length>0&&(w+=g+",")}),s+=m+y+'{content:"'+w+'"}'+Vg},f=0;f<l;f++)c(f);return s}(i)})}return e.registerId=function(t){return Ea(t)},e.prototype.rehydrate=function(){!this.server&&Na&&jf(this)},e.prototype.reconstructWithOptions=function(t,n){n===void 0&&(n=!0);var r=new e(ht(ht({},this.options),t),this.gs,n&&this.names||void 0);return!this.server&&Na&&t.target!==this.options.target&&Kh(this.options.target)!==Kh(t.target)&&jf(r),r},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new q$(i):r?new H$(i):new G$(i)}(this.options),new z$(t)));var t},e.prototype.hasNameForId=function(t,n){var r,i;return(i=(r=this.names.get(t))===null||r===void 0?void 0:r.has(n))!==null&&i!==void 0&&i},e.prototype.registerName=function(t,n){Ea(t);var r=this.names.get(t);r?r.add(n):this.names.set(t,new Set([n]))},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(Ea(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(Ea(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),X$=/&/g,Xn=47,ti=42;function Ay(e){if(e.indexOf("}")===-1)return!1;for(var t=e.length,n=0,r=0,i=!1,o=0;o<t;o++){var a=e.charCodeAt(o);if(r!==0||i||a!==Xn||e.charCodeAt(o+1)!==ti)if(i)a===ti&&e.charCodeAt(o+1)===Xn&&(i=!1,o++);else if(a!==34&&a!==39||o!==0&&e.charCodeAt(o-1)===92){if(r===0){if(a===123)n++;else if(a===125&&--n<0)return!0}}else r===0?r=a:r===a&&(r=0);else i=!0,o++}return n!==0||r!==0}function B2(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=B2(n.children,t)),n})}function K$(e){var t,n,r,i=e===void 0?To:e,o=i.options,a=o===void 0?To:o,l=i.plugins,s=l===void 0?Wg:l,c=function(m,y,w){return w.startsWith(n)&&w.endsWith(n)&&w.replaceAll(n,"").length>0?".".concat(t):m},f=s.slice();f.push(function(m){m.type===Fu&&m.value.includes("&")&&(r||(r=new RegExp("\\".concat(n,"\\b"),"g")),m.props[0]=m.props[0].replace(X$,n).replace(r,c))}),a.prefix&&f.push(S$),f.push(x$);var d=[],h=b$(f.concat(w$(function(m){return d.push(m)}))),p=function(m,y,w,g){y===void 0&&(y=""),w===void 0&&(w=""),g===void 0&&(g="&"),t=g,n=y,r=void 0;var v=function(C){if(!Ay(C))return C;for(var S=C.length,P="",k=0,_=0,T=0,$=!1,I=0;I<S;I++){var M=C.charCodeAt(I);if(T!==0||$||M!==Xn||C.charCodeAt(I+1)!==ti)if($)M===ti&&C.charCodeAt(I+1)===Xn&&($=!1,I++);else if(M!==34&&M!==39||I!==0&&C.charCodeAt(I-1)===92){if(T===0)if(M===123)_++;else if(M===125){if(--_<0){for(var j=I+1;j<S;){var F=C.charCodeAt(j);if(F===59||F===10)break;j++}j<S&&C.charCodeAt(j)===59&&j++,_=0,I=j-1,k=j;continue}_===0&&(P+=C.substring(k,I+1),k=I+1)}else M===59&&_===0&&(P+=C.substring(k,I+1),k=I+1)}else T===0?T=M:T===M&&(T=0);else $=!0,I++}if(k<S){var D=C.substring(k);Ay(D)||(P+=D)}return P}(function(C){if(C.indexOf("//")===-1)return C;for(var S=C.length,P=[],k=0,_=0,T=0,$=0;_<S;){var I=C.charCodeAt(_);if(I!==34&&I!==39||_!==0&&C.charCodeAt(_-1)===92)if(T===0)if(I===Xn&&_+1<S&&C.charCodeAt(_+1)===ti){for(_+=2;_+1<S&&(C.charCodeAt(_)!==ti||C.charCodeAt(_+1)!==Xn);)_++;_+=2}else if(I===40&&_>=3&&(32|C.charCodeAt(_-1))==108&&(32|C.charCodeAt(_-2))==114&&(32|C.charCodeAt(_-3))==117)$=1,_++;else if($>0)I===41?$--:I===40&&$++,_++;else if(I===ti&&_+1<S&&C.charCodeAt(_+1)===Xn)_>k&&P.push(C.substring(k,_)),k=_+=2;else if(I===Xn&&_+1<S&&C.charCodeAt(_+1)===Xn){for(_>k&&P.push(C.substring(k,_));_<S&&C.charCodeAt(_)!==10;)_++;k=_}else _++;else _++;else T===0?T=I:T===I&&(T=0),_++}return k===0?C:(k<S&&P.push(C.substring(k)),P.join(""))}(m)),b=v$(w||y?"".concat(w," ").concat(y," { ").concat(v," }"):v);return a.namespace&&(b=B2(b,a.namespace)),d=[],Nc(b,h),d};return p.hash=s.length?s.reduce(function(m,y){return y.name||js(15),ei(m,y.name)},5381).toString():"",p}var Q$=new Wc,Qh=K$(),V2=K.createContext({shouldForwardProp:void 0,styleSheet:Q$,stylis:Qh});V2.Consumer;K.createContext(void 0);function Zh(){return K.useContext(V2)}var W2=function(){function e(t,n){var r=this;this.inject=function(i,o){o===void 0&&(o=Qh);var a=r.name+o.hash;i.hasNameForId(r.id,a)||i.insertRules(r.id,a,o(r.rules,a,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,Gg(this,function(){throw js(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=Qh),this.name+t.hash},e}();function Z$(e,t){return t==null||typeof t=="boolean"||t===""?"":typeof t!="number"||t===0||e in C$||e.startsWith("--")?String(t).trim():"".concat(t,"px")}var J$=function(e){return e>="A"&&e<="Z"};function Dy(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;J$(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var U2=function(e){return e==null||e===!1||e===""},H2=function(e){var t=[];for(var n in e){var r=e[n];e.hasOwnProperty(n)&&!U2(r)&&(Array.isArray(r)&&r.isCss||jo(r)?t.push("".concat(Dy(n),":"),r,";"):ms(r)?t.push.apply(t,ko(ko(["".concat(n," {")],H2(r),!1),["}"],!1)):t.push("".concat(Dy(n),": ").concat(Z$(n,r),";")))}return t};function Nr(e,t,n,r,i){if(i===void 0&&(i=[]),typeof e=="string")return e&&i.push(e),i;if(U2(e))return i;if(Hg(e))return i.push(".".concat(e.styledComponentId)),i;if(jo(e)){if(!jo(a=e)||a.prototype&&a.prototype.isReactComponent||!t)return i.push(e),i;var o=e(t);return Nr(o,t,n,r,i)}var a;if(e instanceof W2)return n?(e.inject(n,r),i.push(e.getName(r))):i.push(e),i;if(ms(e)){for(var l=H2(e),s=0;s<l.length;s++)i.push(l[s]);return i}if(!Array.isArray(e))return i.push(e.toString()),i;for(s=0;s<e.length;s++)Nr(e[s],t,n,r,i);return i}function G2(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(jo(n)&&!Hg(n))return!1}return!0}var e4=D2(Vu),t4=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&G2(t),this.componentId=n,this.baseHash=ei(e4,n),this.baseStyle=r,Wc.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r).className:"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=li(i,this.staticRulesId);else{var o=Vc(Nr(this.rules,t,n,r)),a=Yh(ei(this.baseHash,o)>>>0);if(!n.hasNameForId(this.componentId,a)){var l=r(o,".".concat(a),void 0,this.componentId);n.insertRules(this.componentId,a,l)}i=li(i,a),this.staticRulesId=a}else{for(var s=ei(this.baseHash,r.hash),c="",f=0;f<this.rules.length;f++){var d=this.rules[f];if(typeof d=="string")c+=d;else if(d){var h=Vc(Nr(d,t,n,r));s=ei(ei(s,String(f)),h),c+=h}}if(c){var p=Yh(s>>>0);if(!n.hasNameForId(this.componentId,p)){var m=r(c,".".concat(p),void 0,this.componentId);n.insertRules(this.componentId,p,m)}i=li(i,p)}}return{className:i,css:typeof window>"u"?n.getTag().getGroup(Ea(this.componentId)):""}},e}(),qg=K.createContext(void 0);qg.Consumer;var $f={};function n4(e,t,n){var r=Hg(e),i=e,o=!Tf(e),a=t.attrs,l=a===void 0?Wg:a,s=t.componentId,c=s===void 0?function(C,S){var P=typeof C!="string"?"sc":Py(C);$f[P]=($f[P]||0)+1;var k="".concat(P,"-").concat(Ug(Vu+P+$f[P]));return S?"".concat(S,"-").concat(k):k}(t.displayName,t.parentComponentId):s,f=t.displayName,d=f===void 0?function(C){return Tf(C)?"styled.".concat(C):"Styled(".concat(j$(C),")")}(e):f,h=t.displayName&&t.componentId?"".concat(Py(t.displayName),"-").concat(t.componentId):t.componentId||c,p=r&&i.attrs?i.attrs.concat(l).filter(Boolean):l,m=t.shouldForwardProp;if(r&&i.shouldForwardProp){var y=i.shouldForwardProp;if(t.shouldForwardProp){var w=t.shouldForwardProp;m=function(C,S){return y(C,S)&&w(C,S)}}else m=y}var g=new t4(n,h,r?i.componentStyle:void 0);function v(C,S){return function(P,k,_){var T=P.attrs,$=P.componentStyle,I=P.defaultProps,M=P.foldedComponentIds,j=P.styledComponentId,F=P.target,D=K.useContext(qg),z=Zh(),R=P.shouldForwardProp||z.shouldForwardProp,O=M2(k,D,I)||To,A=function(W,Q,te){for(var de,ae=ht(ht({},Q),{className:void 0,theme:te}),Fe=0;Fe<W.length;Fe+=1){var qe=jo(de=W[Fe])?de(ae):de;for(var Ye in qe)Ye==="className"?ae.className=li(ae.className,qe[Ye]):Ye==="style"?ae.style=ht(ht({},ae.style),qe[Ye]):ae[Ye]=qe[Ye]}return"className"in Q&&typeof Q.className=="string"&&(ae.className=li(ae.className,Q.className)),ae}(T,k,O),N=A.as||F,B={};for(var L in A)A[L]===void 0||L[0]==="$"||L==="as"||L==="theme"&&A.theme===O||(L==="forwardedAs"?B.as=A.forwardedAs:R&&!R(L,N)||(B[L]=A[L]));var V=function(W,Q){var te=Zh(),de=W.generateAndInjectStyles(Q,te.styleSheet,te.stylis);return de}($,A),H=V.className,G=li(M,j);return H&&(G+=" "+H),A.className&&(G+=" "+A.className),B[Tf(N)&&!A2.has(N)?"class":"className"]=G,_&&(B.ref=_),x.createElement(N,B)}(b,C,S)}v.displayName=d;var b=K.forwardRef(v);return b.attrs=p,b.componentStyle=g,b.displayName=d,b.shouldForwardProp=m,b.foldedComponentIds=r?li(i.foldedComponentIds,i.styledComponentId):"",b.styledComponentId=h,b.target=r?i.target:e,Object.defineProperty(b,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(C){this._foldedDefaultProps=r?function(S){for(var P=[],k=1;k<arguments.length;k++)P[k-1]=arguments[k];for(var _=0,T=P;_<T.length;_++)Xh(S,T[_],!0);return S}({},i.defaultProps,C):C}}),Gg(b,function(){return".".concat(b.styledComponentId)}),o&&z2(b,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),b}function Ly(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var Ry=function(e){return Object.assign(e,{isCss:!0})};function Yg(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(jo(e)||ms(e))return Ry(Nr(Ly(Wg,ko([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?Nr(r):Ry(Nr(Ly(r,t)))}function Jh(e,t,n){if(n===void 0&&(n=To),!t)throw js(1,t);var r=function(i){for(var o=[],a=1;a<arguments.length;a++)o[a-1]=arguments[a];return e(t,n,Yg.apply(void 0,ko([i],o,!1)))};return r.attrs=function(i){return Jh(e,t,ht(ht({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return Jh(e,t,ht(ht({},n),i))},r}var q2=function(e){return Jh(n4,e)},E=q2;A2.forEach(function(e){E[e]=q2(e)});var r4=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=G2(t),Wc.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,r,i){var o=i(Vc(Nr(this.rules,n,r,i)),""),a=this.componentId+t;r.insertRules(a,a,o)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,r,i){t>2&&Wc.registerId(this.componentId+t);var o=this.componentId+t;this.isStatic?r.hasNameForId(o,o)||this.createStyles(t,n,r,i):(this.removeStyles(t,r),this.createStyles(t,n,r,i))},e}();function i4(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=Yg.apply(void 0,ko([e],t,!1)),i="sc-global-".concat(Ug(JSON.stringify(r))),o=new r4(r,i),a=new WeakMap,l=function(c){var f=Zh(),d=K.useContext(qg),h=a.get(f.styleSheet);return h===void 0&&(h=f.styleSheet.allocateGSInstance(i),a.set(f.styleSheet,h)),(typeof window>"u"||!f.styleSheet.server)&&s(h,c,f.styleSheet,d,f.stylis),K.useLayoutEffect(function(){return f.styleSheet.server||s(h,c,f.styleSheet,d,f.stylis),function(){var p;o.removeStyles(h,f.styleSheet),p=f.styleSheet.options.target,typeof document<"u"&&(p??document).querySelectorAll('style[data-styled-global="'.concat(i,'"]')).forEach(function(m){return m.remove()})}},[h,c,f.styleSheet,d,f.stylis]),null};function s(c,f,d,h,p){if(o.isStatic)o.renderStyles(c,_$,d,p);else{var m=ht(ht({},f),{theme:M2(f,h,l.defaultProps)});o.renderStyles(c,m,d,p)}}return K.memo(l)}function Xg(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=Vc(Yg.apply(void 0,ko([e],t,!1))),i=Ug(r);return new W2(i,r)}const o4=E.div`
position: sticky;
  top: 0;
  z-index: 1000;
      background: radial-gradient(circle at 50% 45%, #5c5149 0%, #4b3c34 35%, #352b25 65%, #1b1412 100%);


`,a4=E.div`
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
`,s4=E.div`
width: 100%;
  display: flex;
      gap: 10px;

  flex-direction: column;
  @media screen and (min-width: 768px) {
    justify-content: space-around;
  }
`,l4=E.div`

  display: flex;
  @media screen and (max-width: 1023px) {
    justify-content: space-between;
  }
`,c4=E.div`
  display: flex;
  justify-content: space-around;
  

  @media screen and (min-width: 1023px) {
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    flex: 1;
  }
`,u4=E.button`
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
`;const d4=E(ge)`
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
`;const f4=E.svg`
  width: 30px;
  height: 30px;
  fill: var(--white-color);
`,p4=E.button`
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
`;const h4=E.div`
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
`,m4=E.button`
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
`,g4=E.nav`
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
`,v4=E.div`
  margin-top: auto;
  border-top: 1px solid #eee;
  padding-top: 20px;
  font-size: 14px;
  color: #888;
  text-align: center;
`,y4=E.div`
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
`,x4=E.div`
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
`,b4=E.input`
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
`,w4=E.button`
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
`,S4=E.svg`
  width: 24px;
  height: 24px;
`,C4=E.ul`
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
`,E4=E.li`
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


`,_4=E.img`
 width: 100px;
    height: 100px;
    object-fit: cover;
 `,k4=E.h3`
      text-align: left;
      font-size: 18px;
      font-weight: 400;

`,P4=E.h3`
 font-weight: 500;
      font-size: 20px;
         

`,O4=E.div`
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

    
`,xn="/assets/symbol-defs-fb9ce9f0.svg",T4=()=>{const[e,t]=x.useState(""),[n,r]=x.useState([]),[i,o]=x.useState(!1),a=et(),l=x.useRef(null);x.useEffect(()=>{if(e.trim().length<2){r([]),o(!1);return}const c=setTimeout(async()=>{try{const d=await(await fetch(`https://backenddidiv-production.up.railway.app/api/products?filters[name][$containsi]=${e}&populate=*`)).json();r(d.data),o(!0)}catch(f){console.error(f)}},300);return()=>clearTimeout(c)},[e]),x.useEffect(()=>{const c=f=>{l.current&&!l.current.contains(f.target)&&o(!1)};return document.addEventListener("mousedown",c),()=>{document.removeEventListener("mousedown",c)}},[]);const s=c=>{t(""),o(!1),a(`/product/${c.slug??c.id}`)};return u.jsxs(x4,{ref:l,children:[u.jsx(b4,{name:"site-search",value:e,onChange:c=>t(c.target.value),placeholder:"Пошук",autoComplete:"off",onFocus:()=>e.trim().length>=2&&o(!0)}),u.jsx(w4,{className:"search-button",children:u.jsx(S4,{children:u.jsx("use",{href:`${xn}#icon-search`})})}),i&&n.length>0&&u.jsx(C4,{children:n.map(c=>{var h,p;const d=c.new_price&&c.new_price<c.price?c.new_price:c.price;return u.jsxs(E4,{onClick:()=>s(c),children:[u.jsx(_4,{src:((p=(h=c.images)==null?void 0:h[0])==null?void 0:p.url)||"/nofoto.png",alt:""}),u.jsxs(O4,{children:[u.jsx(k4,{children:c.name}),u.jsxs(P4,{children:[d," грн."]})]})]},c.id)})})]})};var Y2={exports:{}},X2={};/**
 * @license React
 * use-sync-external-store-with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $s=x;function j4(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var $4=typeof Object.is=="function"?Object.is:j4,I4=$s.useSyncExternalStore,M4=$s.useRef,A4=$s.useEffect,D4=$s.useMemo,L4=$s.useDebugValue;X2.useSyncExternalStoreWithSelector=function(e,t,n,r,i){var o=M4(null);if(o.current===null){var a={hasValue:!1,value:null};o.current=a}else a=o.current;o=D4(function(){function s(p){if(!c){if(c=!0,f=p,p=r(p),i!==void 0&&a.hasValue){var m=a.value;if(i(m,p))return d=m}return d=p}if(m=d,$4(f,p))return m;var y=r(p);return i!==void 0&&i(m,y)?(f=p,m):(f=p,d=y)}var c=!1,f,d,h=n===void 0?null:n;return[function(){return s(t())},h===null?void 0:function(){return s(h())}]},[t,n,r,i]);var l=I4(e,o[0],o[1]);return A4(function(){a.hasValue=!0,a.value=l},[l]),L4(l),l};Y2.exports=X2;var R4=Y2.exports;function F4(e){e()}function z4(){let e=null,t=null;return{clear(){e=null,t=null},notify(){F4(()=>{let n=e;for(;n;)n.callback(),n=n.next})},get(){const n=[];let r=e;for(;r;)n.push(r),r=r.next;return n},subscribe(n){let r=!0;const i=t={callback:n,next:null,prev:t};return i.prev?i.prev.next=i:e=i,function(){!r||e===null||(r=!1,i.next?i.next.prev=i.prev:t=i.prev,i.prev?i.prev.next=i.next:e=i.next)}}}}var Fy={notify(){},get:()=>[]};function N4(e,t){let n,r=Fy,i=0,o=!1;function a(y){f();const w=r.subscribe(y);let g=!1;return()=>{g||(g=!0,w(),d())}}function l(){r.notify()}function s(){m.onStateChange&&m.onStateChange()}function c(){return o}function f(){i++,n||(n=t?t.addNestedSub(s):e.subscribe(s),r=z4())}function d(){i--,n&&i===0&&(n(),n=void 0,r.clear(),r=Fy)}function h(){o||(o=!0,f())}function p(){o&&(o=!1,d())}const m={addNestedSub:a,notifyNestedSubs:l,handleChangeWrapper:s,isSubscribed:c,trySubscribe:h,tryUnsubscribe:p,getListeners:()=>r};return m}var B4=()=>typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",V4=B4(),W4=()=>typeof navigator<"u"&&navigator.product==="ReactNative",U4=W4(),H4=()=>V4||U4?x.useLayoutEffect:x.useEffect,G4=H4(),If=Symbol.for("react-redux-context"),Mf=typeof globalThis<"u"?globalThis:{};function q4(){if(!x.createContext)return{};const e=Mf[If]??(Mf[If]=new Map);let t=e.get(x.createContext);return t||(t=x.createContext(null),e.set(x.createContext,t)),t}var Wr=q4();function Y4(e){const{children:t,context:n,serverState:r,store:i}=e,o=x.useMemo(()=>{const s=N4(i);return{store:i,subscription:s,getServerState:r?()=>r:void 0}},[i,r]),a=x.useMemo(()=>i.getState(),[i]);G4(()=>{const{subscription:s}=o;return s.onStateChange=s.notifyNestedSubs,s.trySubscribe(),a!==i.getState()&&s.notifyNestedSubs(),()=>{s.tryUnsubscribe(),s.onStateChange=void 0}},[o,a]);const l=n||Wr;return x.createElement(l.Provider,{value:o},t)}var X4=Y4;function Kg(e=Wr){return function(){return x.useContext(e)}}var K2=Kg();function Q2(e=Wr){const t=e===Wr?K2:Kg(e),n=()=>{const{store:r}=t();return r};return Object.assign(n,{withTypes:()=>n}),n}var K4=Q2();function Q4(e=Wr){const t=e===Wr?K4:Q2(e),n=()=>t().dispatch;return Object.assign(n,{withTypes:()=>n}),n}var Lt=Q4(),Z4=(e,t)=>e===t;function J4(e=Wr){const t=e===Wr?K2:Kg(e),n=(r,i={})=>{const{equalityFn:o=Z4}=typeof i=="function"?{equalityFn:i}:i,a=t(),{store:l,subscription:s,getServerState:c}=a;x.useRef(!0);const f=x.useCallback({[r.name](h){return r(h)}}[r.name],[r]),d=R4.useSyncExternalStoreWithSelector(s.addNestedSub,l.getState,c||l.getState,f,o);return x.useDebugValue(d),d};return Object.assign(n,{withTypes:()=>n}),n}var Ge=J4();const e3=E(ge)`
      display: flex;
    align-items: center;
    align-content: center;
    justify-content: center;
    
    @media screen and (min-width: 1023px) {
   order: 2;
  margin-right: 10px;
  
  }
       
`,t3=E.svg`
  width: 30px;
  height: 30px;
 fill: var(--white-color);
`,n3=E.div`

width:30px;
height:30px;

  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 28px; 
  cursor: pointer;
`,r3=E.div`
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
`,i3=({onClick:e})=>{const t=Ge(n=>n.cart.items.length);return u.jsx(e3,{to:"/cart",children:u.jsxs(n3,{onClick:e,children:[u.jsx(t3,{children:u.jsx("use",{href:`${xn}#icon-cart`})}),t>0&&u.jsx(r3,{children:t})]})})},o3=E.nav`
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
`,a3=()=>u.jsxs(o3,{children:[u.jsx(Ri,{to:"/",children:"Головна"}),u.jsx(Ri,{to:"/catalog",children:"Каталог"}),u.jsx(Ri,{to:"/catalog/new",children:"Новинки"}),u.jsx(Ri,{to:"/catalog/sale",children:"Акційні товари"}),u.jsx(Ri,{to:"/about",children:"Про нас"}),u.jsx(Ri,{to:"/contacts",children:"Контакти"})]}),s3=E.svg`
  width: 24px;
  height: 24px;
  fill: var(--white-color);
`,l3=E(ge)`
      display: flex;
    align-items: center;
    align-content: center;
    justify-content: center;
    
    @media screen and (min-width: 1023px) {
   order: 2;
 
  }
       
`,c3=E.div`

width:30px;
height:30px;

  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 28px; /* розмір іконки */
  cursor: pointer;
`,u3=E.div`

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
`,d3=({onClick:e})=>{const t=Ge(n=>n.favorites.items.length);return u.jsx(l3,{to:"/favorite",children:u.jsxs(c3,{onClick:e,children:[u.jsx(s3,{children:u.jsx("use",{href:`${xn}#icon-heart`})}),t>0&&u.jsx(u3,{children:t})]})})};/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z2=(...e)=>e.filter((t,n,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===n).join(" ").trim();/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f3=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p3=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,n,r)=>r?r.toUpperCase():n.toLowerCase());/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zy=e=>{const t=p3(e);return t.charAt(0).toUpperCase()+t.slice(1)};/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var h3={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m3=e=>{for(const t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0;return!1};/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g3=x.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:i="",children:o,iconNode:a,...l},s)=>x.createElement("svg",{ref:s,...h3,width:t,height:t,stroke:e,strokeWidth:r?Number(n)*24/Number(t):n,className:Z2("lucide",i),...!o&&!m3(l)&&{"aria-hidden":"true"},...l},[...a.map(([c,f])=>x.createElement(c,f)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tt=(e,t)=>{const n=x.forwardRef(({className:r,...i},o)=>x.createElement(g3,{ref:o,iconNode:t,className:Z2(`lucide-${f3(zy(e))}`,`lucide-${e}`,r),...i}));return n.displayName=zy(e),n};/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v3=[["path",{d:"m3 16 4 4 4-4",key:"1co6wj"}],["path",{d:"M7 20V4",key:"1yoxec"}],["path",{d:"M11 4h4",key:"6d7r33"}],["path",{d:"M11 8h7",key:"djye34"}],["path",{d:"M11 12h10",key:"1438ji"}]],Wu=tt("arrow-down-narrow-wide",v3);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y3=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],Uu=tt("arrow-right",y3);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x3=[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"M9 9h.01",key:"1q5me6"}],["path",{d:"M15 15h.01",key:"lqbp3k"}]],b3=tt("badge-percent",x3);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w3=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],S3=tt("chevron-down",w3);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C3=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],E3=tt("chevron-up",C3);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _3=[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]],fi=tt("eye-off",_3);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k3=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],pi=tt("eye",k3);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P3=[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",key:"mvr1a0"}]],Is=tt("heart",P3);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O3=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"r6nss1"}]],T3=tt("house",O3);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j3=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],$3=tt("info",j3);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I3=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 .83.18 2 2 0 0 0 .83-.18l8.58-3.9a1 1 0 0 0 0-1.831z",key:"zzgyd3"}],["path",{d:"M16 17h6",key:"1ook5g"}],["path",{d:"M19 14v6",key:"1ckrd5"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 .825.178",key:"1ia9y3"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l2.116-.962",key:"jksky3"}]],M3=tt("layers-plus",I3);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A3=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],D3=tt("mail",A3);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L3=[["path",{d:"M16 10a4 4 0 0 1-8 0",key:"1ltviw"}],["path",{d:"M3.103 6.034h17.794",key:"awc11p"}],["path",{d:"M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z",key:"o988cm"}]],R3=tt("shopping-bag",L3);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F3=[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]],Uo=tt("shopping-cart",F3);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z3=[["path",{d:"M10 5H3",key:"1qgfaw"}],["path",{d:"M12 19H3",key:"yhmn1j"}],["path",{d:"M14 3v4",key:"1sua03"}],["path",{d:"M16 17v4",key:"1q0r14"}],["path",{d:"M21 12h-9",key:"1o4lsq"}],["path",{d:"M21 19h-5",key:"1rlt1p"}],["path",{d:"M21 5h-7",key:"1oszz2"}],["path",{d:"M8 10v4",key:"tgpxqk"}],["path",{d:"M8 12H3",key:"a7s4jb"}]],J2=tt("sliders-horizontal",z3);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N3=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],eC=tt("trash-2",N3);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B3=[["circle",{cx:"12",cy:"8",r:"5",key:"1hypcn"}],["path",{d:"M20 21a8 8 0 0 0-16 0",key:"rfgkzh"}]],V3=tt("user-round",B3);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W3=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],tC=tt("x",W3),U3=({openLogin:e})=>{const[t,n]=x.useState(!1),r=et(),i=async()=>{const o=localStorage.getItem("token");if(!o){e();return}try{const a=await fetch("https://backenddidiv-production.up.railway.app/api/users/me",{headers:{Authorization:`Bearer ${o}`}});if(a.status===401){localStorage.removeItem("token"),localStorage.removeItem("user"),localStorage.removeItem("persist:cart"),localStorage.removeItem("persist:favorites"),window.location.reload(),e();return}if(!a.ok){console.error("Помилка перевірки авторизації:",a.status);return}r("/account/orders")}catch(a){console.error("Помилка перевірки авторизації:",a)}};return u.jsx(o4,{children:u.jsx(a4,{children:u.jsxs(s4,{children:[u.jsxs(l4,{children:[u.jsx(d4,{to:"/",children:"Дідів хлів"}),u.jsxs(c4,{children:[u.jsx(i3,{}),u.jsx(u4,{onClick:i,children:u.jsx(V3,{size:28,color:"#f2ebd4",strokeWidth:1.9})}),u.jsx(d3,{}),u.jsx(a3,{}),u.jsx(p4,{onClick:()=>n(!t),children:u.jsx(f4,{children:u.jsx("use",{href:`${xn}#icon-menu`})})}),u.jsx(y4,{open:t,onClick:()=>n(!1)}),u.jsxs(h4,{open:t,children:[u.jsx(m4,{onClick:()=>n(!1),children:u.jsx(tC,{size:28,strokeWidth:1.5})}),u.jsxs(g4,{children:[u.jsxs(Li,{onClick:()=>n(!1),to:"/",children:[u.jsx(T3,{size:22,strokeWidth:1.5})," Головна"]}),u.jsxs(Li,{onClick:()=>n(!1),to:"/catalog",children:[u.jsx(R3,{size:22,strokeWidth:1.5})," Каталог"]}),u.jsxs(Li,{onClick:()=>n(!1),to:"/catalog/new",children:[u.jsx(M3,{size:22,strokeWidth:1.5}),"Новинки"]}),u.jsxs(Li,{onClick:()=>n(!1),to:"/catalog/sale",children:[u.jsx(b3,{size:22,strokeWidth:1.5}),"Акційні товари"]}),u.jsxs(Li,{onClick:()=>n(!1),to:"/about",children:[u.jsx($3,{size:22,strokeWidth:1.5})," Про нас"]}),u.jsxs(Li,{onClick:()=>n(!1),to:"/contacts",children:[u.jsx(D3,{size:22,strokeWidth:1.5})," Контакти"]})]}),u.jsx(v4,{children:u.jsx("p",{children:"© 2020 Дідів Хлів"})})]})]})]}),u.jsx(T4,{})]})})})},H3=E.div`

   background: radial-gradient(
    circle at 50% 45%,
    #5c5149 0%,
    #4b3c34 35%,
    #352b25 65%,
    #1b1412 100%
  );
`,G3=E.footer`
 
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
`,q3=E.div`
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
`,Af=E.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center; /* Центруємо контент всередині колонки */

  @media screen and (min-width: 768px) {
    align-items: flex-start; /* На десктопі — по лівому краю */
    min-width: 150px;
    flex: 1;
  }
`,Df=E.h3`
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
`,Y3=E.div`
  display: flex;
  gap: 20px;
  margin-top: 10px;
  justify-content: center;

  @media screen and (min-width: 768px) {
    justify-content: flex-start;
  }
`,Lf=E.a`
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
`,X3=()=>u.jsx(H3,{children:u.jsxs(G3,{children:[u.jsxs(q3,{children:[u.jsxs(Af,{children:[u.jsx(Df,{children:"Навігація"}),u.jsx(kn,{to:"/",children:"Головна"}),u.jsx(kn,{to:"/about",children:"Про нас"}),u.jsx(kn,{to:"/catalog",children:"Каталог"}),u.jsx(kn,{to:"/contacts",children:"Контакти"})]}),u.jsxs(Af,{children:[u.jsx(Df,{children:"Інформація"}),u.jsx(kn,{to:"/delivery",children:"Оплата і доставка"}),u.jsx(kn,{children:"Повернення"}),u.jsx(kn,{children:"Гарантія"}),u.jsx(kn,{children:"Політика конфіденційності"})]})]}),u.jsxs(Af,{children:[u.jsx(Df,{children:"Контакти"}),u.jsx(kn,{href:"tel:+380979999999",children:"+38 (097) 999-99-99"}),u.jsx(kn,{href:"mailto:email@email.com",children:"email@email.com"}),u.jsxs(Y3,{children:[u.jsx(Lf,{href:"https://www.instagram.com/didivxliv?igsh=MXhsNWRjdW5rajYwdQ==",target:"_blank",rel:"noopener noreferrer",children:u.jsx("svg",{width:"20px",children:u.jsx("use",{href:`${xn}#icon-instagram`})})}),u.jsx(Lf,{href:"https://t.me/didivxliv",target:"_blank",rel:"noopener noreferrer",children:u.jsx("svg",{width:"20px",children:u.jsx("use",{href:`${xn}#icon-telegram`})})}),u.jsx(Lf,{href:"https://www.olx.ua/uk/hobbi-otdyh-i-sport/velo/q-%D0%B4%D1%96%D0%B4%D1%96%D0%B2-%D1%85%D0%BB%D1%96%D0%B2/?srsltid=AfmBOoqjzHkKNGxhNyAXVf2_KVV6h3JQFklEk0AjrDFh7tlO2-HZJPSS",target:"_blank",rel:"noopener noreferrer",children:u.jsx("svg",{width:"27px",height:"27px",style:{marginTop:"5px"},children:u.jsx("use",{href:`${xn}#icon-olx`})})})]})]})]})}),K3=({openLogin:e,openRegister:t})=>u.jsxs(u.Fragment,{children:[u.jsx(U3,{openLogin:e,openRegister:t}),u.jsx("main",{style:{flex:1},children:u.jsx(vw,{})}),u.jsx(X3,{})]}),Q3=E.section`
  width: 100%;
  font-family: var(--main-font);
  padding-top: 30px;
`,Z3=E.h2`
  font-size: 30px;
  text-transform: uppercase;
  font-weight: 700;
  margin-bottom: 20px;
  color: #333;
  text-align: center;

  @media screen and (min-width: 768px) {
    font-size: 35px;
  }
`,J3=E.div`
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
`,e5=E.div`
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
`,t5=E.p`
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
`,n5=E(ge)`
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
`,r5=E.span`
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
`,i5=E.div`
  padding: 10px 0;
`,o5=E.h3`
  font-size: 20px;
  font-weight: 600;

  color: #333;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 16px;
`,a5=E.div`
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
`;const s5=E(ge)`
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
`,l5=E.div`
  text-align: center;
  color: white;

  p {
    font-size: 24px;
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 12px;
  }
`,c5=E.div`
  width: 40px;
  height: 40px;
  border: 2px solid white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`;function nC(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var i=e.length;for(t=0;t<i;t++)e[t]&&(n=nC(e[t]))&&(r&&(r+=" "),r+=n)}else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function hi(){for(var e,t,n=0,r="",i=arguments.length;n<i;n++)(e=arguments[n])&&(t=nC(e))&&(r&&(r+=" "),r+=t);return r}function u5(e){if(!e||typeof document>"u")return;let t=document.head||document.getElementsByTagName("head")[0],n=document.createElement("style");n.type="text/css",t.firstChild?t.insertBefore(n,t.firstChild):t.appendChild(n),n.styleSheet?n.styleSheet.cssText=e:n.appendChild(document.createTextNode(e))}u5(`:root{--toastify-color-light: #fff;--toastify-color-dark: #121212;--toastify-color-info: #3498db;--toastify-color-success: #07bc0c;--toastify-color-warning: #f1c40f;--toastify-color-error: hsl(6, 78%, 57%);--toastify-color-transparent: rgba(255, 255, 255, .7);--toastify-icon-color-info: var(--toastify-color-info);--toastify-icon-color-success: var(--toastify-color-success);--toastify-icon-color-warning: var(--toastify-color-warning);--toastify-icon-color-error: var(--toastify-color-error);--toastify-container-width: fit-content;--toastify-toast-width: 320px;--toastify-toast-offset: 16px;--toastify-toast-top: max(var(--toastify-toast-offset), env(safe-area-inset-top));--toastify-toast-right: max(var(--toastify-toast-offset), env(safe-area-inset-right));--toastify-toast-left: max(var(--toastify-toast-offset), env(safe-area-inset-left));--toastify-toast-bottom: max(var(--toastify-toast-offset), env(safe-area-inset-bottom));--toastify-toast-background: #fff;--toastify-toast-padding: 14px;--toastify-toast-min-height: 64px;--toastify-toast-max-height: 800px;--toastify-toast-bd-radius: 6px;--toastify-toast-shadow: 0px 4px 12px rgba(0, 0, 0, .1);--toastify-font-family: sans-serif;--toastify-z-index: 9999;--toastify-text-color-light: #757575;--toastify-text-color-dark: #fff;--toastify-text-color-info: #fff;--toastify-text-color-success: #fff;--toastify-text-color-warning: #fff;--toastify-text-color-error: #fff;--toastify-spinner-color: #616161;--toastify-spinner-color-empty-area: #e0e0e0;--toastify-color-progress-light: linear-gradient(to right, #4cd964, #5ac8fa, #007aff, #34aadc, #5856d6, #ff2d55);--toastify-color-progress-dark: #bb86fc;--toastify-color-progress-info: var(--toastify-color-info);--toastify-color-progress-success: var(--toastify-color-success);--toastify-color-progress-warning: var(--toastify-color-warning);--toastify-color-progress-error: var(--toastify-color-error);--toastify-color-progress-bgo: .2}.Toastify__toast-container{z-index:var(--toastify-z-index);-webkit-transform:translate3d(0,0,var(--toastify-z-index));position:fixed;width:var(--toastify-container-width);box-sizing:border-box;color:#fff;display:flex;flex-direction:column}.Toastify__toast-container--top-left{top:var(--toastify-toast-top);left:var(--toastify-toast-left)}.Toastify__toast-container--top-center{top:var(--toastify-toast-top);left:50%;transform:translate(-50%);align-items:center}.Toastify__toast-container--top-right{top:var(--toastify-toast-top);right:var(--toastify-toast-right);align-items:end}.Toastify__toast-container--bottom-left{bottom:var(--toastify-toast-bottom);left:var(--toastify-toast-left)}.Toastify__toast-container--bottom-center{bottom:var(--toastify-toast-bottom);left:50%;transform:translate(-50%);align-items:center}.Toastify__toast-container--bottom-right{bottom:var(--toastify-toast-bottom);right:var(--toastify-toast-right);align-items:end}.Toastify__toast{--y: 0;position:relative;touch-action:none;width:var(--toastify-toast-width);min-height:var(--toastify-toast-min-height);box-sizing:border-box;margin-bottom:1rem;padding:var(--toastify-toast-padding);border-radius:var(--toastify-toast-bd-radius);box-shadow:var(--toastify-toast-shadow);max-height:var(--toastify-toast-max-height);font-family:var(--toastify-font-family);z-index:0;display:flex;flex:1 auto;align-items:center;word-break:break-word}@media only screen and (max-width: 480px){.Toastify__toast-container{width:100vw;left:env(safe-area-inset-left);margin:0}.Toastify__toast-container--top-left,.Toastify__toast-container--top-center,.Toastify__toast-container--top-right{top:env(safe-area-inset-top);transform:translate(0)}.Toastify__toast-container--bottom-left,.Toastify__toast-container--bottom-center,.Toastify__toast-container--bottom-right{bottom:env(safe-area-inset-bottom);transform:translate(0)}.Toastify__toast-container--rtl{right:env(safe-area-inset-right);left:initial}.Toastify__toast{--toastify-toast-width: 100%;margin-bottom:0;border-radius:0}}.Toastify__toast-container[data-stacked=true]{width:var(--toastify-toast-width)}.Toastify__toast--stacked{position:absolute;width:100%;transform:translate3d(0,var(--y),0) scale(var(--s));transition:transform .3s}.Toastify__toast--stacked[data-collapsed] .Toastify__toast-body,.Toastify__toast--stacked[data-collapsed] .Toastify__close-button{transition:opacity .1s}.Toastify__toast--stacked[data-collapsed=false]{overflow:visible}.Toastify__toast--stacked[data-collapsed=true]:not(:last-child)>*{opacity:0}.Toastify__toast--stacked:after{content:"";position:absolute;left:0;right:0;height:calc(var(--g) * 1px);bottom:100%}.Toastify__toast--stacked[data-pos=top]{top:0}.Toastify__toast--stacked[data-pos=bot]{bottom:0}.Toastify__toast--stacked[data-pos=bot].Toastify__toast--stacked:before{transform-origin:top}.Toastify__toast--stacked[data-pos=top].Toastify__toast--stacked:before{transform-origin:bottom}.Toastify__toast--stacked:before{content:"";position:absolute;left:0;right:0;bottom:0;height:100%;transform:scaleY(3);z-index:-1}.Toastify__toast--rtl{direction:rtl}.Toastify__toast--close-on-click{cursor:pointer}.Toastify__toast-icon{margin-inline-end:10px;width:22px;flex-shrink:0;display:flex}.Toastify--animate{animation-fill-mode:both;animation-duration:.5s}.Toastify--animate-icon{animation-fill-mode:both;animation-duration:.3s}.Toastify__toast-theme--dark{background:var(--toastify-color-dark);color:var(--toastify-text-color-dark)}.Toastify__toast-theme--light,.Toastify__toast-theme--colored.Toastify__toast--default{background:var(--toastify-color-light);color:var(--toastify-text-color-light)}.Toastify__toast-theme--colored.Toastify__toast--info{color:var(--toastify-text-color-info);background:var(--toastify-color-info)}.Toastify__toast-theme--colored.Toastify__toast--success{color:var(--toastify-text-color-success);background:var(--toastify-color-success)}.Toastify__toast-theme--colored.Toastify__toast--warning{color:var(--toastify-text-color-warning);background:var(--toastify-color-warning)}.Toastify__toast-theme--colored.Toastify__toast--error{color:var(--toastify-text-color-error);background:var(--toastify-color-error)}.Toastify__progress-bar-theme--light{background:var(--toastify-color-progress-light)}.Toastify__progress-bar-theme--dark{background:var(--toastify-color-progress-dark)}.Toastify__progress-bar--info{background:var(--toastify-color-progress-info)}.Toastify__progress-bar--success{background:var(--toastify-color-progress-success)}.Toastify__progress-bar--warning{background:var(--toastify-color-progress-warning)}.Toastify__progress-bar--error{background:var(--toastify-color-progress-error)}.Toastify__progress-bar-theme--colored.Toastify__progress-bar--info,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--success,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--warning,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--error{background:var(--toastify-color-transparent)}.Toastify__close-button{color:#fff;position:absolute;top:6px;right:6px;background:transparent;outline:none;border:none;padding:0;cursor:pointer;opacity:.7;transition:.3s ease;z-index:1}.Toastify__toast--rtl .Toastify__close-button{left:6px;right:unset}.Toastify__close-button--light{color:#000;opacity:.3}.Toastify__close-button>svg{fill:currentColor;height:16px;width:14px}.Toastify__close-button:hover,.Toastify__close-button:focus{opacity:1}@keyframes Toastify__trackProgress{0%{transform:scaleX(1)}to{transform:scaleX(0)}}.Toastify__progress-bar{position:absolute;bottom:0;left:0;width:100%;height:100%;z-index:1;opacity:.7;transform-origin:left}.Toastify__progress-bar--animated{animation:Toastify__trackProgress linear 1 forwards}.Toastify__progress-bar--controlled{transition:transform .2s}.Toastify__progress-bar--rtl{right:0;left:initial;transform-origin:right;border-bottom-left-radius:initial}.Toastify__progress-bar--wrp{position:absolute;overflow:hidden;bottom:0;left:0;width:100%;height:5px;border-bottom-left-radius:var(--toastify-toast-bd-radius);border-bottom-right-radius:var(--toastify-toast-bd-radius)}.Toastify__progress-bar--wrp[data-hidden=true]{opacity:0}.Toastify__progress-bar--bg{opacity:var(--toastify-color-progress-bgo);width:100%;height:100%}.Toastify__spinner{width:20px;height:20px;box-sizing:border-box;border:2px solid;border-radius:100%;border-color:var(--toastify-spinner-color-empty-area);border-right-color:var(--toastify-spinner-color);animation:Toastify__spin .65s linear infinite}@keyframes Toastify__bounceInRight{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(3000px,0,0)}60%{opacity:1;transform:translate3d(-25px,0,0)}75%{transform:translate3d(10px,0,0)}90%{transform:translate3d(-5px,0,0)}to{transform:none}}@keyframes Toastify__bounceOutRight{20%{opacity:1;transform:translate3d(-20px,var(--y),0)}to{opacity:0;transform:translate3d(2000px,var(--y),0)}}@keyframes Toastify__bounceInLeft{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(-3000px,0,0)}60%{opacity:1;transform:translate3d(25px,0,0)}75%{transform:translate3d(-10px,0,0)}90%{transform:translate3d(5px,0,0)}to{transform:none}}@keyframes Toastify__bounceOutLeft{20%{opacity:1;transform:translate3d(20px,var(--y),0)}to{opacity:0;transform:translate3d(-2000px,var(--y),0)}}@keyframes Toastify__bounceInUp{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,3000px,0)}60%{opacity:1;transform:translate3d(0,-20px,0)}75%{transform:translate3d(0,10px,0)}90%{transform:translate3d(0,-5px,0)}to{transform:translateZ(0)}}@keyframes Toastify__bounceOutUp{20%{transform:translate3d(0,calc(var(--y) - 10px),0)}40%,45%{opacity:1;transform:translate3d(0,calc(var(--y) + 20px),0)}to{opacity:0;transform:translate3d(0,-2000px,0)}}@keyframes Toastify__bounceInDown{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,-3000px,0)}60%{opacity:1;transform:translate3d(0,25px,0)}75%{transform:translate3d(0,-10px,0)}90%{transform:translate3d(0,5px,0)}to{transform:none}}@keyframes Toastify__bounceOutDown{20%{transform:translate3d(0,calc(var(--y) - 10px),0)}40%,45%{opacity:1;transform:translate3d(0,calc(var(--y) + 20px),0)}to{opacity:0;transform:translate3d(0,2000px,0)}}.Toastify__bounce-enter--top-left,.Toastify__bounce-enter--bottom-left{animation-name:Toastify__bounceInLeft}.Toastify__bounce-enter--top-right,.Toastify__bounce-enter--bottom-right{animation-name:Toastify__bounceInRight}.Toastify__bounce-enter--top-center{animation-name:Toastify__bounceInDown}.Toastify__bounce-enter--bottom-center{animation-name:Toastify__bounceInUp}.Toastify__bounce-exit--top-left,.Toastify__bounce-exit--bottom-left{animation-name:Toastify__bounceOutLeft}.Toastify__bounce-exit--top-right,.Toastify__bounce-exit--bottom-right{animation-name:Toastify__bounceOutRight}.Toastify__bounce-exit--top-center{animation-name:Toastify__bounceOutUp}.Toastify__bounce-exit--bottom-center{animation-name:Toastify__bounceOutDown}@keyframes Toastify__zoomIn{0%{opacity:0;transform:scale3d(.3,.3,.3)}50%{opacity:1}}@keyframes Toastify__zoomOut{0%{opacity:1}50%{opacity:0;transform:translate3d(0,var(--y),0) scale3d(.3,.3,.3)}to{opacity:0}}.Toastify__zoom-enter{animation-name:Toastify__zoomIn}.Toastify__zoom-exit{animation-name:Toastify__zoomOut}@keyframes Toastify__flipIn{0%{transform:perspective(400px) rotateX(90deg);animation-timing-function:ease-in;opacity:0}40%{transform:perspective(400px) rotateX(-20deg);animation-timing-function:ease-in}60%{transform:perspective(400px) rotateX(10deg);opacity:1}80%{transform:perspective(400px) rotateX(-5deg)}to{transform:perspective(400px)}}@keyframes Toastify__flipOut{0%{transform:translate3d(0,var(--y),0) perspective(400px)}30%{transform:translate3d(0,var(--y),0) perspective(400px) rotateX(-20deg);opacity:1}to{transform:translate3d(0,var(--y),0) perspective(400px) rotateX(90deg);opacity:0}}.Toastify__flip-enter{animation-name:Toastify__flipIn}.Toastify__flip-exit{animation-name:Toastify__flipOut}@keyframes Toastify__slideInRight{0%{transform:translate3d(110%,0,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInLeft{0%{transform:translate3d(-110%,0,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInUp{0%{transform:translate3d(0,110%,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInDown{0%{transform:translate3d(0,-110%,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideOutRight{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(110%,var(--y),0)}}@keyframes Toastify__slideOutLeft{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(-110%,var(--y),0)}}@keyframes Toastify__slideOutDown{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(0,500px,0)}}@keyframes Toastify__slideOutUp{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(0,-500px,0)}}.Toastify__slide-enter--top-left,.Toastify__slide-enter--bottom-left{animation-name:Toastify__slideInLeft}.Toastify__slide-enter--top-right,.Toastify__slide-enter--bottom-right{animation-name:Toastify__slideInRight}.Toastify__slide-enter--top-center{animation-name:Toastify__slideInDown}.Toastify__slide-enter--bottom-center{animation-name:Toastify__slideInUp}.Toastify__slide-exit--top-left,.Toastify__slide-exit--bottom-left{animation-name:Toastify__slideOutLeft;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--top-right,.Toastify__slide-exit--bottom-right{animation-name:Toastify__slideOutRight;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--top-center{animation-name:Toastify__slideOutUp;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--bottom-center{animation-name:Toastify__slideOutDown;animation-timing-function:ease-in;animation-duration:.3s}@keyframes Toastify__spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}
`);var Ms=e=>typeof e=="number"&&!isNaN(e),Si=e=>typeof e=="string",cr=e=>typeof e=="function",d5=e=>Si(e)||Ms(e),em=e=>Si(e)||cr(e)?e:null,f5=(e,t)=>e===!1||Ms(e)&&e>0?e:t,tm=e=>x.isValidElement(e)||Si(e)||cr(e)||Ms(e);function p5(e,t,n=300){let{scrollHeight:r,style:i}=e;requestAnimationFrame(()=>{i.minHeight="initial",i.height=r+"px",i.transition=`all ${n}ms`,requestAnimationFrame(()=>{i.height="0",i.padding="0",i.margin="0",setTimeout(t,n)})})}function h5({enter:e,exit:t,appendPosition:n=!1,collapse:r=!0,collapseDuration:i=300}){return function({children:o,position:a,preventExitTransition:l,done:s,nodeRef:c,isIn:f,playToast:d}){let h=n?`${e}--${a}`:e,p=n?`${t}--${a}`:t,m=x.useRef(0);return x.useLayoutEffect(()=>{let y=c.current,w=h.split(" "),g=v=>{v.target===c.current&&(d(),y.removeEventListener("animationend",g),y.removeEventListener("animationcancel",g),m.current===0&&v.type!=="animationcancel"&&y.classList.remove(...w))};y.classList.add(...w),y.addEventListener("animationend",g),y.addEventListener("animationcancel",g)},[]),x.useEffect(()=>{let y=c.current,w=()=>{y.removeEventListener("animationend",w),r?p5(y,s,i):s()};f||(l?w():(m.current=1,y.className+=` ${p}`,y.addEventListener("animationend",w)))},[f]),K.createElement(K.Fragment,null,o)}}function Ny(e,t){return{content:rC(e.content,e.props),containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,reason:e.removalReason,status:t}}function rC(e,t,n=!1){return x.isValidElement(e)&&!Si(e.type)?x.cloneElement(e,{closeToast:t.closeToast,toastProps:t,data:t.data,isPaused:n}):cr(e)?e({closeToast:t.closeToast,toastProps:t,data:t.data,isPaused:n}):e}function m5({closeToast:e,theme:t,ariaLabel:n="close"}){return K.createElement("button",{className:`Toastify__close-button Toastify__close-button--${t}`,type:"button",onClick:r=>{r.stopPropagation(),e(!0)},"aria-label":n},K.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},K.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function g5({delay:e,isRunning:t,closeToast:n,type:r="default",hide:i,className:o,controlledProgress:a,progress:l,rtl:s,isIn:c,theme:f}){let d=i||a&&l===0,h={animationDuration:`${e}ms`,animationPlayState:t?"running":"paused"};a&&(h.transform=`scaleX(${l})`);let p=hi("Toastify__progress-bar",a?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${f}`,`Toastify__progress-bar--${r}`,{"Toastify__progress-bar--rtl":s}),m=cr(o)?o({rtl:s,type:r,defaultClassName:p}):hi(p,o),y={[a&&l>=1?"onTransitionEnd":"onAnimationEnd"]:a&&l<1?null:()=>{c&&n()}};return K.createElement("div",{className:"Toastify__progress-bar--wrp","data-hidden":d},K.createElement("div",{className:`Toastify__progress-bar--bg Toastify__progress-bar-theme--${f} Toastify__progress-bar--${r}`}),K.createElement("div",{role:"progressbar","aria-hidden":d?"true":"false","aria-label":"notification timer",className:m,style:h,...y}))}var v5=1,iC=()=>`${v5++}`;function y5(e,t,n){let r=1,i=0,o=[],a=[],l=t,s=new Map,c=new Set,f=v=>(c.add(v),()=>c.delete(v)),d=()=>{a=Array.from(s.values()),c.forEach(v=>v())},h=({containerId:v,toastId:b,updateId:C})=>{let S=v?v!==e:e!==1,P=s.has(b)&&C==null;return S||P},p=(v,b)=>{s.forEach(C=>{var S;(b==null||b===C.props.toastId)&&((S=C.toggle)==null||S.call(C,v))})},m=v=>{var b,C;(C=(b=v.props)==null?void 0:b.onClose)==null||C.call(b,v.removalReason),v.isActive=!1},y=v=>{if(v==null)s.forEach(m);else{let b=s.get(v);b&&m(b)}d()},w=()=>{i-=o.length,o=[]},g=v=>{var b,C;let{toastId:S,updateId:P}=v.props,k=P==null;v.staleId&&s.delete(v.staleId),v.isActive=!0,s.set(S,v),d(),n(Ny(v,k?"added":"updated")),k&&((C=(b=v.props).onOpen)==null||C.call(b))};return{id:e,props:l,observe:f,toggle:p,removeToast:y,toasts:s,clearQueue:w,buildToast:(v,b)=>{if(h(b))return;let{toastId:C,updateId:S,data:P,staleId:k,delay:_}=b,T=S==null;T&&i++;let $={...l,style:l.toastStyle,key:r++,...Object.fromEntries(Object.entries(b).filter(([M,j])=>j!=null)),toastId:C,updateId:S,data:P,isIn:!1,className:em(b.className||l.toastClassName),progressClassName:em(b.progressClassName||l.progressClassName),autoClose:b.isLoading?!1:f5(b.autoClose,l.autoClose),closeToast(M){s.get(C).removalReason=M,y(C)},deleteToast(){let M=s.get(C);if(M!=null){if(n(Ny(M,"removed")),s.delete(C),i--,i<0&&(i=0),o.length>0){g(o.shift());return}d()}}};$.closeButton=l.closeButton,b.closeButton===!1||tm(b.closeButton)?$.closeButton=b.closeButton:b.closeButton===!0&&($.closeButton=tm(l.closeButton)?l.closeButton:!0);let I={content:v,props:$,staleId:k};l.limit&&l.limit>0&&i>l.limit&&T?o.push(I):Ms(_)?setTimeout(()=>{g(I)},_):g(I)},setProps(v){l=v},setToggle:(v,b)=>{let C=s.get(v);C&&(C.toggle=b)},isToastActive:v=>{var b;return(b=s.get(v))==null?void 0:b.isActive},getSnapshot:()=>a}}var bt=new Map,gs=[],nm=new Set,x5=e=>nm.forEach(t=>t(e)),oC=()=>bt.size>0;function b5(){gs.forEach(e=>sC(e.content,e.options)),gs=[]}var w5=(e,{containerId:t})=>{var n;return(n=bt.get(t||1))==null?void 0:n.toasts.get(e)};function aC(e,t){var n;if(t)return!!((n=bt.get(t))!=null&&n.isToastActive(e));let r=!1;return bt.forEach(i=>{i.isToastActive(e)&&(r=!0)}),r}function S5(e){if(!oC()){gs=gs.filter(t=>e!=null&&t.options.toastId!==e);return}if(e==null||d5(e))bt.forEach(t=>{t.removeToast(e)});else if(e&&("containerId"in e||"id"in e)){let t=bt.get(e.containerId);t?t.removeToast(e.id):bt.forEach(n=>{n.removeToast(e.id)})}}var C5=(e={})=>{bt.forEach(t=>{t.props.limit&&(!e.containerId||t.id===e.containerId)&&t.clearQueue()})};function sC(e,t){tm(e)&&(oC()||gs.push({content:e,options:t}),bt.forEach(n=>{n.buildToast(e,t)}))}function E5(e){var t;(t=bt.get(e.containerId||1))==null||t.setToggle(e.id,e.fn)}function lC(e,t){bt.forEach(n=>{(t==null||!(t!=null&&t.containerId)||(t==null?void 0:t.containerId)===n.id)&&n.toggle(e,t==null?void 0:t.id)})}function _5(e){let t=e.containerId||1;return{subscribe(n){let r=y5(t,e,x5);bt.set(t,r);let i=r.observe(n);return b5(),()=>{i(),bt.delete(t)}},setProps(n){var r;(r=bt.get(t))==null||r.setProps(n)},getSnapshot(){var n;return(n=bt.get(t))==null?void 0:n.getSnapshot()}}}function k5(e){return nm.add(e),()=>{nm.delete(e)}}function P5(e){return e&&(Si(e.toastId)||Ms(e.toastId))?e.toastId:iC()}function As(e,t){return sC(e,t),t.toastId}function Hu(e,t){return{...t,type:t&&t.type||e,toastId:P5(t)}}function Gu(e){return(t,n)=>As(t,Hu(e,n))}function X(e,t){return As(e,Hu("default",t))}X.loading=(e,t)=>As(e,Hu("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...t}));function O5(e,{pending:t,error:n,success:r},i){let o;t&&(o=Si(t)?X.loading(t,i):X.loading(t.render,{...i,...t}));let a={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},l=(c,f,d)=>{if(f==null){X.dismiss(o);return}let h={type:c,...a,...i,data:d},p=Si(f)?{render:f}:f;return o?X.update(o,{...h,...p}):X(p.render,{...h,...p}),d},s=cr(e)?e():e;return s.then(c=>l("success",r,c)).catch(c=>l("error",n,c)),s}X.promise=O5;X.success=Gu("success");X.info=Gu("info");X.error=Gu("error");X.warning=Gu("warning");X.warn=X.warning;X.dark=(e,t)=>As(e,Hu("default",{theme:"dark",...t}));function T5(e){S5(e)}X.dismiss=T5;X.clearWaitingQueue=C5;X.isActive=aC;X.update=(e,t={})=>{let n=w5(e,t);if(n){let{props:r,content:i}=n,o={delay:100,...r,...t,toastId:t.toastId||e,updateId:iC()};o.toastId!==e&&(o.staleId=e);let a=o.render||i;delete o.render,As(a,o)}};X.done=e=>{X.update(e,{progress:1})};X.onChange=k5;X.play=e=>lC(!0,e);X.pause=e=>lC(!1,e);function j5(e){var t;let{subscribe:n,getSnapshot:r,setProps:i}=x.useRef(_5(e)).current;i(e);let o=(t=x.useSyncExternalStore(n,r,r))==null?void 0:t.slice();function a(l){if(!o)return[];let s=new Map;return e.newestOnTop&&o.reverse(),o.forEach(c=>{let{position:f}=c.props;s.has(f)||s.set(f,[]),s.get(f).push(c)}),Array.from(s,c=>l(c[0],c[1]))}return{getToastToRender:a,isToastActive:aC,count:o==null?void 0:o.length}}function $5(e){let[t,n]=x.useState(!1),[r,i]=x.useState(!1),o=x.useRef(null),a=x.useRef({start:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,didMove:!1}).current,{autoClose:l,pauseOnHover:s,closeToast:c,onClick:f,closeOnClick:d}=e;E5({id:e.toastId,containerId:e.containerId,fn:n}),x.useEffect(()=>{if(e.pauseOnFocusLoss)return h(),()=>{p()}},[e.pauseOnFocusLoss]);function h(){document.hasFocus()||g(),window.addEventListener("focus",w),window.addEventListener("blur",g)}function p(){window.removeEventListener("focus",w),window.removeEventListener("blur",g)}function m(k){if(e.draggable===!0||e.draggable===k.pointerType){v();let _=o.current;a.canCloseOnClick=!0,a.canDrag=!0,_.style.transition="none",e.draggableDirection==="x"?(a.start=k.clientX,a.removalDistance=_.offsetWidth*(e.draggablePercent/100)):(a.start=k.clientY,a.removalDistance=_.offsetHeight*(e.draggablePercent===80?e.draggablePercent*1.5:e.draggablePercent)/100)}}function y(k){let{top:_,bottom:T,left:$,right:I}=o.current.getBoundingClientRect();k.nativeEvent.type!=="touchend"&&e.pauseOnHover&&k.clientX>=$&&k.clientX<=I&&k.clientY>=_&&k.clientY<=T?g():w()}function w(){n(!0)}function g(){n(!1)}function v(){a.didMove=!1,document.addEventListener("pointermove",C),document.addEventListener("pointerup",S)}function b(){document.removeEventListener("pointermove",C),document.removeEventListener("pointerup",S)}function C(k){let _=o.current;if(a.canDrag&&_){a.didMove=!0,t&&g(),e.draggableDirection==="x"?a.delta=k.clientX-a.start:a.delta=k.clientY-a.start,a.start!==k.clientX&&(a.canCloseOnClick=!1);let T=e.draggableDirection==="x"?`${a.delta}px, var(--y)`:`0, calc(${a.delta}px + var(--y))`;_.style.transform=`translate3d(${T},0)`,_.style.opacity=`${1-Math.abs(a.delta/a.removalDistance)}`}}function S(){b();let k=o.current;if(a.canDrag&&a.didMove&&k){if(a.canDrag=!1,Math.abs(a.delta)>a.removalDistance){i(!0),e.closeToast(!0),e.collapseAll();return}k.style.transition="transform 0.2s, opacity 0.2s",k.style.removeProperty("transform"),k.style.removeProperty("opacity")}}let P={onPointerDown:m,onPointerUp:y};return l&&s&&(P.onMouseEnter=g,e.stacked||(P.onMouseLeave=w)),d&&(P.onClick=k=>{f&&f(k),a.canCloseOnClick&&c(!0)}),{playToast:w,pauseToast:g,isRunning:t,preventExitTransition:r,toastRef:o,eventHandlers:P}}var I5=typeof window<"u"?x.useLayoutEffect:x.useEffect,qu=({theme:e,type:t,isLoading:n,...r})=>K.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:e==="colored"?"currentColor":`var(--toastify-icon-color-${t})`,...r});function M5(e){return K.createElement(qu,{...e},K.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))}function A5(e){return K.createElement(qu,{...e},K.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))}function D5(e){return K.createElement(qu,{...e},K.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))}function L5(e){return K.createElement(qu,{...e},K.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))}function R5(){return K.createElement("div",{className:"Toastify__spinner"})}var rm={info:A5,warning:M5,success:D5,error:L5,spinner:R5},F5=e=>e in rm;function z5({theme:e,type:t,isLoading:n,icon:r}){let i=null,o={theme:e,type:t};return r===!1||(cr(r)?i=r({...o,isLoading:n}):x.isValidElement(r)?i=x.cloneElement(r,o):n?i=rm.spinner():F5(t)&&(i=rm[t](o))),i}var N5=e=>{let{isRunning:t,preventExitTransition:n,toastRef:r,eventHandlers:i,playToast:o}=$5(e),{closeButton:a,children:l,autoClose:s,onClick:c,type:f,hideProgressBar:d,closeToast:h,transition:p,position:m,className:y,style:w,progressClassName:g,updateId:v,role:b,progress:C,rtl:S,toastId:P,deleteToast:k,isIn:_,isLoading:T,closeOnClick:$,theme:I,ariaLabel:M}=e,j=hi("Toastify__toast",`Toastify__toast-theme--${I}`,`Toastify__toast--${f}`,{"Toastify__toast--rtl":S},{"Toastify__toast--close-on-click":$}),F=cr(y)?y({rtl:S,position:m,type:f,defaultClassName:j}):hi(j,y),D=z5(e),z=!!C||!s,R={closeToast:h,type:f,theme:I},O=null;return a===!1||(cr(a)?O=a(R):x.isValidElement(a)?O=x.cloneElement(a,R):O=m5(R)),K.createElement(p,{isIn:_,done:k,position:m,preventExitTransition:n,nodeRef:r,playToast:o},K.createElement("div",{id:P,tabIndex:0,onClick:c,"data-in":_,className:F,...i,style:w,ref:r,..._&&{role:b,"aria-label":M}},D!=null&&K.createElement("div",{className:hi("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!T})},D),rC(l,e,!t),O,!e.customProgressBar&&K.createElement(g5,{...v&&!z?{key:`p-${v}`}:{},rtl:S,theme:I,delay:s,isRunning:t,isIn:_,closeToast:h,hide:d,type:f,className:g,controlledProgress:z,progress:C||0})))},B5=(e,t=!1)=>({enter:`Toastify--animate Toastify__${e}-enter`,exit:`Toastify--animate Toastify__${e}-exit`,appendPosition:t}),V5=h5(B5("bounce",!0)),W5={position:"top-right",transition:V5,autoClose:5e3,closeButton:!0,pauseOnHover:!0,pauseOnFocusLoss:!0,draggable:"touch",draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light","aria-label":"Notifications Alt+T",hotKeys:e=>e.altKey&&e.code==="KeyT"};function Un(e){let t={...W5,...e},n=e.stacked,[r,i]=x.useState(!0),o=x.useRef(null),{getToastToRender:a,isToastActive:l,count:s}=j5(t),{className:c,style:f,rtl:d,containerId:h,hotKeys:p}=t;function m(w){let g=hi("Toastify__toast-container",`Toastify__toast-container--${w}`,{"Toastify__toast-container--rtl":d});return cr(c)?c({position:w,rtl:d,defaultClassName:g}):hi(g,em(c))}function y(){n&&(i(!0),X.play())}return I5(()=>{var w;if(n){let g=o.current.querySelectorAll('[data-in="true"]'),v=12,b=(w=t.position)==null?void 0:w.includes("top"),C=0,S=0;Array.from(g).reverse().forEach((P,k)=>{let _=P;_.classList.add("Toastify__toast--stacked"),k>0&&(_.dataset.collapsed=`${r}`),_.dataset.pos||(_.dataset.pos=b?"top":"bot");let T=C*(r?.2:1)+(r?0:v*k);_.style.setProperty("--y",`${b?T:T*-1}px`),_.style.setProperty("--g",`${v}`),_.style.setProperty("--s",`${1-(r?S:0)}`),C+=_.offsetHeight,S+=.025})}},[r,s,n]),x.useEffect(()=>{function w(g){var v;let b=o.current;p(g)&&((v=b.querySelector('[tabIndex="0"]'))==null||v.focus(),i(!1),X.pause()),g.key==="Escape"&&(document.activeElement===b||b!=null&&b.contains(document.activeElement))&&(i(!0),X.play())}return document.addEventListener("keydown",w),()=>{document.removeEventListener("keydown",w)}},[p]),K.createElement("section",{ref:o,className:"Toastify",id:h,onMouseEnter:()=>{n&&(i(!1),X.pause())},onMouseLeave:y,"aria-live":"polite","aria-atomic":"false","aria-relevant":"additions text","aria-label":t["aria-label"]},a((w,g)=>{let v=g.length?{...f}:{...f,pointerEvents:"none"};return K.createElement("div",{tabIndex:-1,className:m(w),"data-stacked":n,style:v,key:`c-${w}`},g.map(({content:b,props:C})=>K.createElement(N5,{...C,stacked:n,collapseAll:y,isIn:l(C.toastId,C.containerId),key:`t-${C.key}`},b)))}))}const ur="/assets/nofoto-2f8d9d99.png",U5=E.div`
`,H5=E.div`
display: flex;
    justify-content: space-between;
    align-items: center;
        margin-bottom: 10px;

    
`,G5=E.h2`
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

`,q5=E.div`
width: 100vw;
height:30vw;

  @media screen and (min-width: 768px) {
  width: 60vw;
  height:80vw;
  }
   @media screen and (min-width: 1200px) {
 
  height:40vw;
  }
      
`;E.div``;const Y5=E.div`
  flex: 1;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: start;
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
`,X5=E.div`
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
`,cC=E.div`
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
`,Qg=E.div`
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
`,Zg=E.div`
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
`,K5=E.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  padding:10px;
`,Q5=E.div`
  padding: 10px;
      display: flex;
    align-content: center;
    align-items: center;
        justify-content: space-between;
`,Z5=E.p`
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

`;const uC=E.div.attrs({className:"card-buttons"})`
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
`;const J5=E.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  flex-wrap: wrap;
  gap: 5px;
`,Rf=E.button`
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
`,eI=E.div`
  position: relative;
  display: inline-block;
   @media screen and (max-width: 768px) {
  display:none;
  }

`,tI=E.button`
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
`,nI=E.div`
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
`,dC=E.div`
  text-align: center;
  width: 100px;
 
`,fC=E.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 2px;
`,pC=E.span`
  font-size: 18px;
  font-weight: 600;
  color: ${({$discount:e})=>"#111"};
`,hC=E.span`
  font-size: 13px;
  color: #999;
  text-decoration: line-through;
`,mC=E.span`
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
`;function rt(e){return`Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}var rI=(()=>typeof Symbol=="function"&&Symbol.observable||"@@observable")(),By=rI,Ff=()=>Math.random().toString(36).substring(7).split("").join("."),iI={INIT:`@@redux/INIT${Ff()}`,REPLACE:`@@redux/REPLACE${Ff()}`,PROBE_UNKNOWN_ACTION:()=>`@@redux/PROBE_UNKNOWN_ACTION${Ff()}`},Hc=iI;function Jg(e){if(typeof e!="object"||e===null)return!1;let t=e;for(;Object.getPrototypeOf(t)!==null;)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t||Object.getPrototypeOf(e)===null}function e0(e,t,n){if(typeof e!="function")throw new Error(rt(2));if(typeof t=="function"&&typeof n=="function"||typeof n=="function"&&typeof arguments[3]=="function")throw new Error(rt(0));if(typeof t=="function"&&typeof n>"u"&&(n=t,t=void 0),typeof n<"u"){if(typeof n!="function")throw new Error(rt(1));return n(e0)(e,t)}let r=e,i=t,o=new Map,a=o,l=0,s=!1;function c(){a===o&&(a=new Map,o.forEach((w,g)=>{a.set(g,w)}))}function f(){if(s)throw new Error(rt(3));return i}function d(w){if(typeof w!="function")throw new Error(rt(4));if(s)throw new Error(rt(5));let g=!0;c();const v=l++;return a.set(v,w),function(){if(g){if(s)throw new Error(rt(6));g=!1,c(),a.delete(v),o=null}}}function h(w){if(!Jg(w))throw new Error(rt(7));if(typeof w.type>"u")throw new Error(rt(8));if(typeof w.type!="string")throw new Error(rt(17));if(s)throw new Error(rt(9));try{s=!0,i=r(i,w)}finally{s=!1}return(o=a).forEach(v=>{v()}),w}function p(w){if(typeof w!="function")throw new Error(rt(10));r=w,h({type:Hc.REPLACE})}function m(){const w=d;return{subscribe(g){if(typeof g!="object"||g===null)throw new Error(rt(11));function v(){const C=g;C.next&&C.next(f())}return v(),{unsubscribe:w(v)}},[By](){return this}}}return h({type:Hc.INIT}),{dispatch:h,subscribe:d,getState:f,replaceReducer:p,[By]:m}}function oI(e){Object.keys(e).forEach(t=>{const n=e[t];if(typeof n(void 0,{type:Hc.INIT})>"u")throw new Error(rt(12));if(typeof n(void 0,{type:Hc.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(rt(13))})}function aI(e){const t=Object.keys(e),n={};for(let o=0;o<t.length;o++){const a=t[o];typeof e[a]=="function"&&(n[a]=e[a])}const r=Object.keys(n);let i;try{oI(n)}catch(o){i=o}return function(a={},l){if(i)throw i;let s=!1;const c={};for(let f=0;f<r.length;f++){const d=r[f],h=n[d],p=a[d],m=h(p,l);if(typeof m>"u")throw l&&l.type,new Error(rt(14));c[d]=m,s=s||m!==p}return s=s||r.length!==Object.keys(a).length,s?c:a}}function Gc(...e){return e.length===0?t=>t:e.length===1?e[0]:e.reduce((t,n)=>(...r)=>t(n(...r)))}function sI(...e){return t=>(n,r)=>{const i=t(n,r);let o=()=>{throw new Error(rt(15))};const a={getState:i.getState,dispatch:(s,...c)=>o(s,...c)},l=e.map(s=>s(a));return o=Gc(...l)(i.dispatch),{...i,dispatch:o}}}function lI(e){return Jg(e)&&"type"in e&&typeof e.type=="string"}var gC=Symbol.for("immer-nothing"),Vy=Symbol.for("immer-draftable"),St=Symbol.for("immer-state");function mn(e,...t){throw new Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)}var Vt=Object,$o=Vt.getPrototypeOf,qc="constructor",Xu="prototype",im="configurable",Yc="enumerable",Ql="writable",vs="value",dr=e=>!!e&&!!e[St];function Sn(e){var t;return e?vC(e)||Qu(e)||!!e[Vy]||!!((t=e[qc])!=null&&t[Vy])||Zu(e)||Ju(e):!1}var cI=Vt[Xu][qc].toString(),Wy=new WeakMap;function vC(e){if(!e||!t0(e))return!1;const t=$o(e);if(t===null||t===Vt[Xu])return!0;const n=Vt.hasOwnProperty.call(t,qc)&&t[qc];if(n===Object)return!0;if(!Yi(n))return!1;let r=Wy.get(n);return r===void 0&&(r=Function.toString.call(n),Wy.set(n,r)),r===cI}function Ku(e,t,n=!0){Ds(e)===0?(n?Reflect.ownKeys(e):Vt.keys(e)).forEach(i=>{t(i,e[i],e)}):e.forEach((r,i)=>t(i,r,e))}function Ds(e){const t=e[St];return t?t.type_:Qu(e)?1:Zu(e)?2:Ju(e)?3:0}var Uy=(e,t,n=Ds(e))=>n===2?e.has(t):Vt[Xu].hasOwnProperty.call(e,t),om=(e,t,n=Ds(e))=>n===2?e.get(t):e[t],Xc=(e,t,n,r=Ds(e))=>{r===2?e.set(t,n):r===3?e.add(n):e[t]=n};function uI(e,t){return e===t?e!==0||1/e===1/t:e!==e&&t!==t}var Qu=Array.isArray,Zu=e=>e instanceof Map,Ju=e=>e instanceof Set,t0=e=>typeof e=="object",Yi=e=>typeof e=="function",zf=e=>typeof e=="boolean";function dI(e){const t=+e;return Number.isInteger(t)&&String(t)===e}var Zn=e=>e.copy_||e.base_,n0=e=>e.modified_?e.copy_:e.base_;function am(e,t){if(Zu(e))return new Map(e);if(Ju(e))return new Set(e);if(Qu(e))return Array[Xu].slice.call(e);const n=vC(e);if(t===!0||t==="class_only"&&!n){const r=Vt.getOwnPropertyDescriptors(e);delete r[St];let i=Reflect.ownKeys(r);for(let o=0;o<i.length;o++){const a=i[o],l=r[a];l[Ql]===!1&&(l[Ql]=!0,l[im]=!0),(l.get||l.set)&&(r[a]={[im]:!0,[Ql]:!0,[Yc]:l[Yc],[vs]:e[a]})}return Vt.create($o(e),r)}else{const r=$o(e);if(r!==null&&n)return{...e};const i=Vt.create(r);return Vt.assign(i,e)}}function r0(e,t=!1){return ed(e)||dr(e)||!Sn(e)||(Ds(e)>1&&Vt.defineProperties(e,{set:ul,add:ul,clear:ul,delete:ul}),Vt.freeze(e),t&&Ku(e,(n,r)=>{r0(r,!0)},!1)),e}function fI(){mn(2)}var ul={[vs]:fI};function ed(e){return e===null||!t0(e)?!0:Vt.isFrozen(e)}var Kc="MapSet",sm="Patches",Hy="ArrayMethods",yC={};function Ci(e){const t=yC[e];return t||mn(0,e),t}var Gy=e=>!!yC[e],ys,xC=()=>ys,pI=(e,t)=>({drafts_:[],parent_:e,immer_:t,canAutoFreeze_:!0,unfinalizedDrafts_:0,handledSet_:new Set,processedForPatches_:new Set,mapSetPlugin_:Gy(Kc)?Ci(Kc):void 0,arrayMethodsPlugin_:Gy(Hy)?Ci(Hy):void 0});function qy(e,t){t&&(e.patchPlugin_=Ci(sm),e.patches_=[],e.inversePatches_=[],e.patchListener_=t)}function lm(e){cm(e),e.drafts_.forEach(hI),e.drafts_=null}function cm(e){e===ys&&(ys=e.parent_)}var Yy=e=>ys=pI(ys,e);function hI(e){const t=e[St];t.type_===0||t.type_===1?t.revoke_():t.revoked_=!0}function Xy(e,t){t.unfinalizedDrafts_=t.drafts_.length;const n=t.drafts_[0];if(e!==void 0&&e!==n){n[St].modified_&&(lm(t),mn(4)),Sn(e)&&(e=Ky(t,e));const{patchPlugin_:i}=t;i&&i.generateReplacementPatches_(n[St].base_,e,t)}else e=Ky(t,n);return mI(t,e,!0),lm(t),t.patches_&&t.patchListener_(t.patches_,t.inversePatches_),e!==gC?e:void 0}function Ky(e,t){if(ed(t))return t;const n=t[St];if(!n)return Qc(t,e.handledSet_,e);if(!td(n,e))return t;if(!n.modified_)return n.base_;if(!n.finalized_){const{callbacks_:r}=n;if(r)for(;r.length>0;)r.pop()(e);SC(n,e)}return n.copy_}function mI(e,t,n=!1){!e.parent_&&e.immer_.autoFreeze_&&e.canAutoFreeze_&&r0(t,n)}function bC(e){e.finalized_=!0,e.scope_.unfinalizedDrafts_--}var td=(e,t)=>e.scope_===t,gI=[];function wC(e,t,n,r){const i=Zn(e),o=e.type_;if(r!==void 0&&om(i,r,o)===t){Xc(i,r,n,o);return}if(!e.draftLocations_){const l=e.draftLocations_=new Map;Ku(i,(s,c)=>{if(dr(c)){const f=l.get(c)||[];f.push(s),l.set(c,f)}})}const a=e.draftLocations_.get(t)??gI;for(const l of a)Xc(i,l,n,o)}function vI(e,t,n){e.callbacks_.push(function(i){var l;const o=t;if(!o||!td(o,i))return;(l=i.mapSetPlugin_)==null||l.fixSetContents(o);const a=n0(o);wC(e,o.draft_??o,a,n),SC(o,i)})}function SC(e,t){var r;if(e.modified_&&!e.finalized_&&(e.type_===3||e.type_===1&&e.allIndicesReassigned_||(((r=e.assigned_)==null?void 0:r.size)??0)>0)){const{patchPlugin_:i}=t;if(i){const o=i.getPath(e);o&&i.generatePatches_(e,o,t)}bC(e)}}function yI(e,t,n){const{scope_:r}=e;if(dr(n)){const i=n[St];td(i,r)&&i.callbacks_.push(function(){Zl(e);const a=n0(i);wC(e,n,a,t)})}else Sn(n)&&e.callbacks_.push(function(){const o=Zn(e);e.type_===3?o.has(n)&&Qc(n,r.handledSet_,r):om(o,t,e.type_)===n&&r.drafts_.length>1&&(e.assigned_.get(t)??!1)===!0&&e.copy_&&Qc(om(e.copy_,t,e.type_),r.handledSet_,r)})}function Qc(e,t,n){return!n.immer_.autoFreeze_&&n.unfinalizedDrafts_<1||dr(e)||t.has(e)||!Sn(e)||ed(e)||(t.add(e),Ku(e,(r,i)=>{if(dr(i)){const o=i[St];if(td(o,n)){const a=n0(o);Xc(e,r,a,e.type_),bC(o)}}else Sn(i)&&Qc(i,t,n)})),e}function xI(e,t){const n=Qu(e),r={type_:n?1:0,scope_:t?t.scope_:xC(),modified_:!1,finalized_:!1,assigned_:void 0,parent_:t,base_:e,draft_:null,copy_:null,revoke_:null,isManual_:!1,callbacks_:void 0};let i=r,o=Zc;n&&(i=[r],o=xs);const{revoke:a,proxy:l}=Proxy.revocable(i,o);return r.draft_=l,r.revoke_=a,[l,r]}var Zc={get(e,t){if(t===St)return e;let n=e.scope_.arrayMethodsPlugin_;const r=e.type_===1&&typeof t=="string";if(r&&n!=null&&n.isArrayOperationMethod(t))return n.createMethodInterceptor(e,t);const i=Zn(e);if(!Uy(i,t,e.type_))return bI(e,i,t);const o=i[t];if(e.finalized_||!Sn(o)||r&&e.operationMethod&&(n!=null&&n.isMutatingArrayMethod(e.operationMethod))&&dI(t))return o;if(o===Nf(e.base_,t)){Zl(e);const a=e.type_===1?+t:t,l=dm(e.scope_,o,e,a);return e.copy_[a]=l}return o},has(e,t){return t in Zn(e)},ownKeys(e){return Reflect.ownKeys(Zn(e))},set(e,t,n){const r=CC(Zn(e),t);if(r!=null&&r.set)return r.set.call(e.draft_,n),!0;if(!e.modified_){const i=Nf(Zn(e),t),o=i==null?void 0:i[St];if(o&&o.base_===n)return e.copy_[t]=n,e.assigned_.set(t,!1),!0;if(uI(n,i)&&(n!==void 0||Uy(e.base_,t,e.type_)))return!0;Zl(e),um(e)}return e.copy_[t]===n&&(n!==void 0||t in e.copy_)||Number.isNaN(n)&&Number.isNaN(e.copy_[t])||(e.copy_[t]=n,e.assigned_.set(t,!0),yI(e,t,n)),!0},deleteProperty(e,t){return Zl(e),Nf(e.base_,t)!==void 0||t in e.base_?(e.assigned_.set(t,!1),um(e)):e.assigned_.delete(t),e.copy_&&delete e.copy_[t],!0},getOwnPropertyDescriptor(e,t){const n=Zn(e),r=Reflect.getOwnPropertyDescriptor(n,t);return r&&{[Ql]:!0,[im]:e.type_!==1||t!=="length",[Yc]:r[Yc],[vs]:n[t]}},defineProperty(){mn(11)},getPrototypeOf(e){return $o(e.base_)},setPrototypeOf(){mn(12)}},xs={};for(let e in Zc){let t=Zc[e];xs[e]=function(){const n=arguments;return n[0]=n[0][0],t.apply(this,n)}}xs.deleteProperty=function(e,t){return xs.set.call(this,e,t,void 0)};xs.set=function(e,t,n){return Zc.set.call(this,e[0],t,n,e[0])};function Nf(e,t){const n=e[St];return(n?Zn(n):e)[t]}function bI(e,t,n){var i;const r=CC(t,n);return r?vs in r?r[vs]:(i=r.get)==null?void 0:i.call(e.draft_):void 0}function CC(e,t){if(!(t in e))return;let n=$o(e);for(;n;){const r=Object.getOwnPropertyDescriptor(n,t);if(r)return r;n=$o(n)}}function um(e){e.modified_||(e.modified_=!0,e.parent_&&um(e.parent_))}function Zl(e){e.copy_||(e.assigned_=new Map,e.copy_=am(e.base_,e.scope_.immer_.useStrictShallowCopy_))}var wI=class{constructor(e){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.useStrictIteration_=!1,this.produce=(t,n,r)=>{if(Yi(t)&&!Yi(n)){const o=n;n=t;const a=this;return function(s=o,...c){return a.produce(s,f=>n.call(this,f,...c))}}Yi(n)||mn(6),r!==void 0&&!Yi(r)&&mn(7);let i;if(Sn(t)){const o=Yy(this),a=dm(o,t,void 0);let l=!0;try{i=n(a),l=!1}finally{l?lm(o):cm(o)}return qy(o,r),Xy(i,o)}else if(!t||!t0(t)){if(i=n(t),i===void 0&&(i=t),i===gC&&(i=void 0),this.autoFreeze_&&r0(i,!0),r){const o=[],a=[];Ci(sm).generateReplacementPatches_(t,i,{patches_:o,inversePatches_:a}),r(o,a)}return i}else mn(1,t)},this.produceWithPatches=(t,n)=>{if(Yi(t))return(a,...l)=>this.produceWithPatches(a,s=>t(s,...l));let r,i;return[this.produce(t,n,(a,l)=>{r=a,i=l}),r,i]},zf(e==null?void 0:e.autoFreeze)&&this.setAutoFreeze(e.autoFreeze),zf(e==null?void 0:e.useStrictShallowCopy)&&this.setUseStrictShallowCopy(e.useStrictShallowCopy),zf(e==null?void 0:e.useStrictIteration)&&this.setUseStrictIteration(e.useStrictIteration)}createDraft(e){Sn(e)||mn(8),dr(e)&&(e=SI(e));const t=Yy(this),n=dm(t,e,void 0);return n[St].isManual_=!0,cm(t),n}finishDraft(e,t){const n=e&&e[St];(!n||!n.isManual_)&&mn(9);const{scope_:r}=n;return qy(r,t),Xy(void 0,r)}setAutoFreeze(e){this.autoFreeze_=e}setUseStrictShallowCopy(e){this.useStrictShallowCopy_=e}setUseStrictIteration(e){this.useStrictIteration_=e}shouldUseStrictIteration(){return this.useStrictIteration_}applyPatches(e,t){let n;for(n=t.length-1;n>=0;n--){const i=t[n];if(i.path.length===0&&i.op==="replace"){e=i.value;break}}n>-1&&(t=t.slice(n+1));const r=Ci(sm).applyPatches_;return dr(e)?r(e,t):this.produce(e,i=>r(i,t))}};function dm(e,t,n,r){const[i,o]=Zu(t)?Ci(Kc).proxyMap_(t,n):Ju(t)?Ci(Kc).proxySet_(t,n):xI(t,n);return((n==null?void 0:n.scope_)??xC()).drafts_.push(i),o.callbacks_=(n==null?void 0:n.callbacks_)??[],o.key_=r,n&&r!==void 0?vI(n,o,r):o.callbacks_.push(function(s){var f;(f=s.mapSetPlugin_)==null||f.fixSetContents(o);const{patchPlugin_:c}=s;o.modified_&&c&&c.generatePatches_(o,[],s)}),i}function SI(e){return dr(e)||mn(10,e),EC(e)}function EC(e){if(!Sn(e)||ed(e))return e;const t=e[St];let n,r=!0;if(t){if(!t.modified_)return t.base_;t.finalized_=!0,n=am(e,t.scope_.immer_.useStrictShallowCopy_),r=t.scope_.immer_.shouldUseStrictIteration()}else n=am(e,!0);return Ku(n,(i,o)=>{Xc(n,i,EC(o))},r),t&&(t.finalized_=!1),n}var CI=new wI,_C=CI.produce;function kC(e){return({dispatch:n,getState:r})=>i=>o=>typeof o=="function"?o(n,r,e):i(o)}var EI=kC(),_I=kC,kI=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?Gc:Gc.apply(null,arguments)};function Qy(e,t){function n(...r){if(t){let i=t(...r);if(!i)throw new Error(rr(0));return{type:e,payload:i.payload,..."meta"in i&&{meta:i.meta},..."error"in i&&{error:i.error}}}return{type:e,payload:r[0]}}return n.toString=()=>`${e}`,n.type=e,n.match=r=>lI(r)&&r.type===e,n}var PC=class _a extends Array{constructor(...t){super(...t),Object.setPrototypeOf(this,_a.prototype)}static get[Symbol.species](){return _a}concat(...t){return super.concat.apply(this,t)}prepend(...t){return t.length===1&&Array.isArray(t[0])?new _a(...t[0].concat(this)):new _a(...t.concat(this))}};function Zy(e){return Sn(e)?_C(e,()=>{}):e}function dl(e,t,n){return e.has(t)?e.get(t):e.set(t,n(t)).get(t)}function PI(e){return typeof e=="boolean"}var OI=()=>function(t){const{thunk:n=!0,immutableCheck:r=!0,serializableCheck:i=!0,actionCreatorCheck:o=!0}=t??{};let a=new PC;return n&&(PI(n)?a.push(EI):a.push(_I(n.extraArgument))),a},TI="RTK_autoBatch",Jy=e=>t=>{setTimeout(t,e)},jI=(e={type:"raf"})=>t=>(...n)=>{const r=t(...n);let i=!0,o=!1,a=!1;const l=new Set,s=e.type==="tick"?queueMicrotask:e.type==="raf"?typeof window<"u"&&window.requestAnimationFrame?window.requestAnimationFrame:Jy(10):e.type==="callback"?e.queueNotification:Jy(e.timeout),c=()=>{a=!1,o&&(o=!1,l.forEach(f=>f()))};return Object.assign({},r,{subscribe(f){const d=()=>i&&f(),h=r.subscribe(d);return l.add(f),()=>{h(),l.delete(f)}},dispatch(f){var d;try{return i=!((d=f==null?void 0:f.meta)!=null&&d[TI]),o=!i,o&&(a||(a=!0,s(c))),r.dispatch(f)}finally{i=!0}}})},$I=e=>function(n){const{autoBatch:r=!0}=n??{};let i=new PC(e);return r&&i.push(jI(typeof r=="object"?r:void 0)),i};function II(e){const t=OI(),{reducer:n=void 0,middleware:r,devTools:i=!0,duplicateMiddlewareCheck:o=!0,preloadedState:a=void 0,enhancers:l=void 0}=e||{};let s;if(typeof n=="function")s=n;else if(Jg(n))s=aI(n);else throw new Error(rr(1));let c;typeof r=="function"?c=r(t):c=t();let f=Gc;i&&(f=kI({trace:!1,...typeof i=="object"&&i}));const d=sI(...c),h=$I(d);let p=typeof l=="function"?l(h):h();const m=f(...p);return e0(s,a,m)}function OC(e){const t={},n=[];let r;const i={addCase(o,a){const l=typeof o=="string"?o:o.type;if(!l)throw new Error(rr(28));if(l in t)throw new Error(rr(29));return t[l]=a,i},addAsyncThunk(o,a){return a.pending&&(t[o.pending.type]=a.pending),a.rejected&&(t[o.rejected.type]=a.rejected),a.fulfilled&&(t[o.fulfilled.type]=a.fulfilled),a.settled&&n.push({matcher:o.settled,reducer:a.settled}),i},addMatcher(o,a){return n.push({matcher:o,reducer:a}),i},addDefaultCase(o){return r=o,i}};return e(i),[t,n,r]}function MI(e){return typeof e=="function"}function AI(e,t){let[n,r,i]=OC(t),o;if(MI(e))o=()=>Zy(e());else{const l=Zy(e);o=()=>l}function a(l=o(),s){let c=[n[s.type],...r.filter(({matcher:f})=>f(s)).map(({reducer:f})=>f)];return c.filter(f=>!!f).length===0&&(c=[i]),c.reduce((f,d)=>{if(d)if(dr(f)){const p=d(f,s);return p===void 0?f:p}else{if(Sn(f))return _C(f,h=>d(h,s));{const h=d(f,s);if(h===void 0){if(f===null)return f;throw Error("A case reducer on a non-draftable value must not return undefined")}return h}}return f},l)}return a.getInitialState=o,a}var DI=Symbol.for("rtk-slice-createasyncthunk");function LI(e,t){return`${e}/${t}`}function RI({creators:e}={}){var n;const t=(n=e==null?void 0:e.asyncThunk)==null?void 0:n[DI];return function(i){const{name:o,reducerPath:a=o}=i;if(!o)throw new Error(rr(11));typeof process<"u";const l=(typeof i.reducers=="function"?i.reducers(zI()):i.reducers)||{},s=Object.keys(l),c={sliceCaseReducersByName:{},sliceCaseReducersByType:{},actionCreators:{},sliceMatchers:[]},f={addCase(C,S){const P=typeof C=="string"?C:C.type;if(!P)throw new Error(rr(12));if(P in c.sliceCaseReducersByType)throw new Error(rr(13));return c.sliceCaseReducersByType[P]=S,f},addMatcher(C,S){return c.sliceMatchers.push({matcher:C,reducer:S}),f},exposeAction(C,S){return c.actionCreators[C]=S,f},exposeCaseReducer(C,S){return c.sliceCaseReducersByName[C]=S,f}};s.forEach(C=>{const S=l[C],P={reducerName:C,type:LI(o,C),createNotation:typeof i.reducers=="function"};BI(S)?WI(P,S,f,t):NI(P,S,f)});function d(){const[C={},S=[],P=void 0]=typeof i.extraReducers=="function"?OC(i.extraReducers):[i.extraReducers],k={...C,...c.sliceCaseReducersByType};return AI(i.initialState,_=>{for(let T in k)_.addCase(T,k[T]);for(let T of c.sliceMatchers)_.addMatcher(T.matcher,T.reducer);for(let T of S)_.addMatcher(T.matcher,T.reducer);P&&_.addDefaultCase(P)})}const h=C=>C,p=new Map,m=new WeakMap;let y;function w(C,S){return y||(y=d()),y(C,S)}function g(){return y||(y=d()),y.getInitialState()}function v(C,S=!1){function P(_){let T=_[C];return typeof T>"u"&&S&&(T=dl(m,P,g)),T}function k(_=h){const T=dl(p,S,()=>new WeakMap);return dl(T,_,()=>{const $={};for(const[I,M]of Object.entries(i.selectors??{}))$[I]=FI(M,_,()=>dl(m,_,g),S);return $})}return{reducerPath:C,getSelectors:k,get selectors(){return k(P)},selectSlice:P}}const b={name:o,reducer:w,actions:c.actionCreators,caseReducers:c.sliceCaseReducersByName,getInitialState:g,...v(a),injectInto(C,{reducerPath:S,...P}={}){const k=S??a;return C.inject({reducerPath:k,reducer:w},P),{...b,...v(k,!0)}}};return b}}function FI(e,t,n,r){function i(o,...a){let l=t(o);return typeof l>"u"&&r&&(l=n()),e(l,...a)}return i.unwrapped=e,i}var TC=RI();function zI(){function e(t,n){return{_reducerDefinitionType:"asyncThunk",payloadCreator:t,...n}}return e.withTypes=()=>e,{reducer(t){return Object.assign({[t.name](...n){return t(...n)}}[t.name],{_reducerDefinitionType:"reducer"})},preparedReducer(t,n){return{_reducerDefinitionType:"reducerWithPrepare",prepare:t,reducer:n}},asyncThunk:e}}function NI({type:e,reducerName:t,createNotation:n},r,i){let o,a;if("reducer"in r){if(n&&!VI(r))throw new Error(rr(17));o=r.reducer,a=r.prepare}else o=r;i.addCase(e,o).exposeCaseReducer(t,o).exposeAction(t,a?Qy(e,a):Qy(e))}function BI(e){return e._reducerDefinitionType==="asyncThunk"}function VI(e){return e._reducerDefinitionType==="reducerWithPrepare"}function WI({type:e,reducerName:t},n,r,i){if(!i)throw new Error(rr(18));const{payloadCreator:o,fulfilled:a,pending:l,rejected:s,settled:c,options:f}=n,d=i(e,o,f);r.exposeAction(t,d),a&&r.addCase(d.fulfilled,a),l&&r.addCase(d.pending,l),s&&r.addCase(d.rejected,s),c&&r.addMatcher(d.settled,c),r.exposeCaseReducer(t,{fulfilled:a||fl,pending:l||fl,rejected:s||fl,settled:c||fl})}function fl(){}function rr(e){return`Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}const jC=TC({name:"favorites",initialState:{items:[]},reducers:{toggleFavorite:(e,t)=>{const n=t.payload;e.items.find(i=>i.id===n.id)?e.items=e.items.filter(i=>i.id!==n.id):e.items.push(n)},clearFavorite:e=>{e.items=[]},setFavorites(e,t){e.items=t.payload},addFavorite(e,t){e.items.some(r=>r.id===t.payload.id)||e.items.push(t.payload)},removeFavorite(e,t){e.items=e.items.filter(n=>n.id!==t.payload)}}}),{toggleFavorite:RY,clearFavorite:Ls,addFavorite:e1,removeFavorite:t1,setFavorites:UI}=jC.actions,HI=jC.reducer,GI=async(e,t,n,r)=>{const i=t==null?void 0:t.find(a=>{var l;return((l=a.product)==null?void 0:l.documentId)===(e==null?void 0:e.documentId)});if(i){const a=i.user.map(l=>l.documentId);if(!a.includes(n)){a.push(n);const l=await fetch(`https://backenddidiv-production.up.railway.app/api/favorites/${i.documentId}`,{method:"PUT",headers:{"Content-Type":"application/json",Authorization:`Bearer ${r}`},body:JSON.stringify({data:{user:a}})});if(!l.ok)throw new Error("Не вдалося оновити favorite");return await l.json()}return i}const o=await fetch("https://backenddidiv-production.up.railway.app/api/favorites",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${r}`},body:JSON.stringify({data:{product:e.documentId,user:[n]}})});if(!o.ok)throw new Error("Не вдалося створити favorite");return await o.json()},qI=async(e,t,n,r)=>{var l;const i=t==null?void 0:t.find(s=>{var c;return((c=s.product)==null?void 0:c.documentId)===(e==null?void 0:e.documentId)});if(!i)return;const o=(l=i.user)==null?void 0:l.filter(s=>s.documentId!==n).map(s=>s.documentId);if((o==null?void 0:o.length)===0){if(!(await fetch(`https://backenddidiv-production.up.railway.app/api/favorites/${i.documentId}`,{method:"DELETE",headers:{Authorization:`Bearer ${r}`}})).ok)throw new Error("Не вдалося видалити favorite");return}const a=await fetch(`https://backenddidiv-production.up.railway.app/api/favorites/${i.documentId}`,{method:"PUT",headers:{"Content-Type":"application/json",Authorization:`Bearer ${r}`},body:JSON.stringify({data:{user:o}})});if(!a.ok)throw new Error("Не вдалося оновити favorite");return await a.json()},Ti=async(e,t,n,r)=>{const i=localStorage.getItem("token"),o=JSON.parse(localStorage.getItem("user"));if(!i||!o)return t?(n(t1(e.id)),r.warning(`${e.name} видалено з обраного`)):(n(e1(e)),r.success(`${e.name} додано в обране`)),!0;const a=o.documentId,l=o.id;try{const s=await fetch(`https://backenddidiv-production.up.railway.app/api/users/${l}?populate[favorites][populate][0]=product&populate[favorites][populate][1]=user`,{headers:{Authorization:`Bearer ${i}`}});if(!s.ok)throw new Error("Не вдалося отримати favorites користувача");const c=await s.json(),f=await fetch("https://backenddidiv-production.up.railway.app/api/favorites?populate=*",{headers:{Authorization:`Bearer ${i}`}}),{data:d}=await f.json(),h=c==null?void 0:c.favorites;return t?(await qI(e,h,a,i),n(t1(e.id)),r.warning(`${e.name} видалено з обраного`),!0):(await GI(e,d,a,i),n(e1(e)),r.success(`${e.name} додано в обране`),!0)}catch{return r.error("Не вдалося оновити обране"),!1}},$C=TC({name:"cart",initialState:{items:[]},reducers:{addToCart:(e,t)=>{const n=t.payload,r=e.items.find(i=>i.id===n.id);if(r){if(r.quantity>=n.stock)return;r.quantity+=1}else e.items.push({...n,quantity:1})},setCartItemQuantity:(e,t)=>{const{id:n,quantity:r}=t.payload,i=e.items.find(o=>o.id===n);i&&(i.quantity=r)},removeFromCart:(e,t)=>{const n=t.payload;e.items=e.items.filter(r=>r.id!==n.id)},clearCart:e=>{e.items=[]},addAllToCart:(e,t)=>{const n=t.payload.map(r=>({...r,quantity:r.quantity||1}));e.items.push(...n)},setCartItems:(e,t)=>{e.items=t.payload},incrementQuantity:(e,t)=>{const{id:n,stock:r}=t.payload,i=e.items.find(o=>o.id===n);i&&i.quantity<r&&(i.quantity+=1)},decrementQuantity:(e,t)=>{const n=e.items.find(r=>r.id===t.payload);n&&n.quantity>1&&(n.quantity-=1)}}}),{setCartItems:IC,addToCart:n1,setCartItemQuantity:r1,removeFromCart:MC,clearCart:fr,addAllToCart:YI,incrementQuantity:i1,decrementQuantity:o1}=$C.actions,XI=$C.reducer,KI=async(e,t,n,r)=>{const i=await fetch("https://backenddidiv-production.up.railway.app/api/cart-items",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${r}`},body:JSON.stringify({data:{product:e,quantity:t,user:n}})});if(!i.ok)throw new Error("Не вдалося створити CartItem");return i.json()},QI=async(e,t,n)=>{const r=await fetch(`https://backenddidiv-production.up.railway.app/api/cart-items/${e}`,{method:"PUT",headers:{"Content-Type":"application/json",Authorization:`Bearer ${n}`},body:JSON.stringify({data:{quantity:t}})});if(!r.ok)throw new Error("Не вдалося оновити CartItem");return r.json()},Ho=async(e,t,n,r)=>{const i=localStorage.getItem("token"),o=JSON.parse(localStorage.getItem("user"));if(!i||!o){for(let l=0;l<t;l++)n(n1(e));return r.success(`${e.name} додано в кошик!`),!0}const a=o.id;try{const l=await fetch(`https://backenddidiv-production.up.railway.app/api/cart-items?filters[user][id][$eq]=${a}&populate=product`,{headers:{Authorization:`Bearer ${i}`}});if(!l.ok)throw new Error("Не вдалося отримати кошик користувача");const{data:s}=await l.json(),c=s.find(f=>{var d;return((d=f.product)==null?void 0:d.documentId)===e.documentId});if(c){const f=c.quantity+t;if(f>e.stock)return r.warning(`Доступно лише ${e.stock} шт.`),!1;await QI(c.documentId,f,i),n(r1({id:e.id,quantity:f}))}else await KI(e.documentId,t,a,i),n(n1({...e})),t>1&&n(r1({id:e.id,quantity:t}));return r.success(`${e.name} додано в кошик!`),!0}catch(l){return console.error(l),r.error("Не вдалося додати товар у кошик"),!1}},AC=()=>{const e=Lt(),[t,n]=x.useState([]),r=Ge(s=>s.favorites.items),i=Ge(s=>s.cart.items),o=et();x.useEffect(()=>{const s=new Date,c=new Date;c.setDate(s.getDate()-7);const f=c.toISOString();fetch(`https://backenddidiv-production.up.railway.app/api/products?populate=*&filters[createdAt][$gte]=${f}`).then(d=>d.json()).then(d=>n(d.data)).catch(d=>console.error("Помилка завантаження нових товарів:",d))},[]);const a=(s,c)=>{c.stopPropagation();const f=r.some(d=>d.id===(s==null?void 0:s.id));Ti(s,f,e,X)},l=[...t].sort(()=>Math.random()-.5).slice(0,3);return!t||t.length===0?null:u.jsxs(Q3,{children:[u.jsx(Un,{}),u.jsx(Z3,{children:"Нові товари"}),u.jsxs(J3,{children:[l.map(s=>{var b;const c=r.some(C=>C.id===s.id),f=(s==null?void 0:s.available)??!0,d=(s==null?void 0:s.stock)===0,h=i.find(C=>C.id===s.id),m=(h?h.quantity:0)>=(s.stock||0),y=s.new_price&&s.new_price<s.price,w=y?s.new_price:s.price,g=y?Math.round((s.price-s.new_price)/s.price*100):0,v=async()=>{if(m){X.warning("Товар вже в кошику (досягнуто максимум)");return}if(m){X.warning(`Доступно лише ${s.stock} шт.`);return}await Ho(s,1,e,X)};return u.jsxs(e5,{onClick:()=>o(`/product/${s.slug??s.id}`),$soldOut:d,children:[u.jsxs(n5,{children:[u.jsx(r5,{children:"Новинка"}),d&&u.jsx(Yu,{children:"Продано"}),!f&&u.jsx(t5,{children:"Бронь"}),u.jsx("img",{src:((b=s.images)==null?void 0:b[0].url)||ur,alt:s.name,onError:C=>{C.currentTarget.onerror=null,C.currentTarget.src=ur}}),u.jsx("div",{className:"overlay"})]}),u.jsxs(i5,{children:[u.jsx(o5,{children:s.name}),u.jsxs(a5,{children:[u.jsx(dC,{children:u.jsxs(fC,{children:[u.jsxs(pC,{$discount:y,children:[w==null?void 0:w.toLocaleString()," грн"]}),y&&u.jsxs(hC,{children:[s.price.toLocaleString()," грн"]}),y&&u.jsxs(mC,{children:["-",g,"%"]})]})}),u.jsxs(uC,{children:[f&&!d&&u.jsx(Uc,{onClick:C=>v(),children:u.jsx(Uo,{size:24,color:h?"var(--orange-color)":"black",strokeWidth:2})}),!d&&u.jsx(Uc,{onClick:C=>a(s,C),children:u.jsx(Is,{size:24,fill:c?"#ff4d4f":"none",color:c?"#ff4d4f":"#000000",strokeWidth:c?1:2})})]})]})]})]},s.id)}),u.jsx(s5,{to:"/catalog/new",children:u.jsxs(l5,{children:[u.jsx("p",{children:"Усі новинки"}),u.jsx(c5,{children:u.jsx(Uu,{size:24})})]})})]})]})};function ee(){return ee=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ee.apply(this,arguments)}function ZI(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function JI(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var eM=function(){function e(n){var r=this;this._insertTag=function(i){var o;r.tags.length===0?r.insertionPoint?o=r.insertionPoint.nextSibling:r.prepend?o=r.container.firstChild:o=r.before:o=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(i,o),r.tags.push(i)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(r){r.forEach(this._insertTag)},t.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(JI(this));var i=this.tags[this.tags.length-1];if(this.isSpeedy){var o=ZI(i);try{o.insertRule(r,o.cssRules.length)}catch{}}else i.appendChild(document.createTextNode(r));this.ctr++},t.flush=function(){this.tags.forEach(function(r){return r.parentNode&&r.parentNode.removeChild(r)}),this.tags=[],this.ctr=0},e}(),dt="-ms-",Jc="-moz-",pe="-webkit-",DC="comm",i0="rule",o0="decl",tM="@import",LC="@keyframes",nM="@layer",rM=Math.abs,nd=String.fromCharCode,iM=Object.assign;function oM(e,t){return ot(e,0)^45?(((t<<2^ot(e,0))<<2^ot(e,1))<<2^ot(e,2))<<2^ot(e,3):0}function RC(e){return e.trim()}function aM(e,t){return(e=t.exec(e))?e[0]:e}function he(e,t,n){return e.replace(t,n)}function fm(e,t){return e.indexOf(t)}function ot(e,t){return e.charCodeAt(t)|0}function bs(e,t,n){return e.slice(t,n)}function jn(e){return e.length}function a0(e){return e.length}function pl(e,t){return t.push(e),e}function sM(e,t){return e.map(t).join("")}var rd=1,Io=1,FC=0,Dt=0,Ne=0,Go="";function id(e,t,n,r,i,o,a){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:rd,column:Io,length:a,return:""}}function ua(e,t){return iM(id("",null,null,"",null,null,0),e,{length:-e.length},t)}function lM(){return Ne}function cM(){return Ne=Dt>0?ot(Go,--Dt):0,Io--,Ne===10&&(Io=1,rd--),Ne}function Ht(){return Ne=Dt<FC?ot(Go,Dt++):0,Io++,Ne===10&&(Io=1,rd++),Ne}function Fn(){return ot(Go,Dt)}function Jl(){return Dt}function Rs(e,t){return bs(Go,e,t)}function ws(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function zC(e){return rd=Io=1,FC=jn(Go=e),Dt=0,[]}function NC(e){return Go="",e}function ec(e){return RC(Rs(Dt-1,pm(e===91?e+2:e===40?e+1:e)))}function uM(e){for(;(Ne=Fn())&&Ne<33;)Ht();return ws(e)>2||ws(Ne)>3?"":" "}function dM(e,t){for(;--t&&Ht()&&!(Ne<48||Ne>102||Ne>57&&Ne<65||Ne>70&&Ne<97););return Rs(e,Jl()+(t<6&&Fn()==32&&Ht()==32))}function pm(e){for(;Ht();)switch(Ne){case e:return Dt;case 34:case 39:e!==34&&e!==39&&pm(Ne);break;case 40:e===41&&pm(e);break;case 92:Ht();break}return Dt}function fM(e,t){for(;Ht()&&e+Ne!==47+10;)if(e+Ne===42+42&&Fn()===47)break;return"/*"+Rs(t,Dt-1)+"*"+nd(e===47?e:Ht())}function pM(e){for(;!ws(Fn());)Ht();return Rs(e,Dt)}function hM(e){return NC(tc("",null,null,null,[""],e=zC(e),0,[0],e))}function tc(e,t,n,r,i,o,a,l,s){for(var c=0,f=0,d=a,h=0,p=0,m=0,y=1,w=1,g=1,v=0,b="",C=i,S=o,P=r,k=b;w;)switch(m=v,v=Ht()){case 40:if(m!=108&&ot(k,d-1)==58){fm(k+=he(ec(v),"&","&\f"),"&\f")!=-1&&(g=-1);break}case 34:case 39:case 91:k+=ec(v);break;case 9:case 10:case 13:case 32:k+=uM(m);break;case 92:k+=dM(Jl()-1,7);continue;case 47:switch(Fn()){case 42:case 47:pl(mM(fM(Ht(),Jl()),t,n),s);break;default:k+="/"}break;case 123*y:l[c++]=jn(k)*g;case 125*y:case 59:case 0:switch(v){case 0:case 125:w=0;case 59+f:g==-1&&(k=he(k,/\f/g,"")),p>0&&jn(k)-d&&pl(p>32?s1(k+";",r,n,d-1):s1(he(k," ","")+";",r,n,d-2),s);break;case 59:k+=";";default:if(pl(P=a1(k,t,n,c,f,i,l,b,C=[],S=[],d),o),v===123)if(f===0)tc(k,t,P,P,C,o,d,l,S);else switch(h===99&&ot(k,3)===110?100:h){case 100:case 108:case 109:case 115:tc(e,P,P,r&&pl(a1(e,P,P,0,0,i,l,b,i,C=[],d),S),i,S,d,l,r?C:S);break;default:tc(k,P,P,P,[""],S,0,l,S)}}c=f=p=0,y=g=1,b=k="",d=a;break;case 58:d=1+jn(k),p=m;default:if(y<1){if(v==123)--y;else if(v==125&&y++==0&&cM()==125)continue}switch(k+=nd(v),v*y){case 38:g=f>0?1:(k+="\f",-1);break;case 44:l[c++]=(jn(k)-1)*g,g=1;break;case 64:Fn()===45&&(k+=ec(Ht())),h=Fn(),f=d=jn(b=k+=pM(Jl())),v++;break;case 45:m===45&&jn(k)==2&&(y=0)}}return o}function a1(e,t,n,r,i,o,a,l,s,c,f){for(var d=i-1,h=i===0?o:[""],p=a0(h),m=0,y=0,w=0;m<r;++m)for(var g=0,v=bs(e,d+1,d=rM(y=a[m])),b=e;g<p;++g)(b=RC(y>0?h[g]+" "+v:he(v,/&\f/g,h[g])))&&(s[w++]=b);return id(e,t,n,i===0?i0:l,s,c,f)}function mM(e,t,n){return id(e,t,n,DC,nd(lM()),bs(e,2,-2),0)}function s1(e,t,n,r){return id(e,t,n,o0,bs(e,0,r),bs(e,r+1,-1),r)}function mo(e,t){for(var n="",r=a0(e),i=0;i<r;i++)n+=t(e[i],i,e,t)||"";return n}function gM(e,t,n,r){switch(e.type){case nM:if(e.children.length)break;case tM:case o0:return e.return=e.return||e.value;case DC:return"";case LC:return e.return=e.value+"{"+mo(e.children,r)+"}";case i0:e.value=e.props.join(",")}return jn(n=mo(e.children,r))?e.return=e.value+"{"+n+"}":""}function vM(e){var t=a0(e);return function(n,r,i,o){for(var a="",l=0;l<t;l++)a+=e[l](n,r,i,o)||"";return a}}function yM(e){return function(t){t.root||(t=t.return)&&e(t)}}function xM(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var bM=function(t,n,r){for(var i=0,o=0;i=o,o=Fn(),i===38&&o===12&&(n[r]=1),!ws(o);)Ht();return Rs(t,Dt)},wM=function(t,n){var r=-1,i=44;do switch(ws(i)){case 0:i===38&&Fn()===12&&(n[r]=1),t[r]+=bM(Dt-1,n,r);break;case 2:t[r]+=ec(i);break;case 4:if(i===44){t[++r]=Fn()===58?"&\f":"",n[r]=t[r].length;break}default:t[r]+=nd(i)}while(i=Ht());return t},SM=function(t,n){return NC(wM(zC(t),n))},l1=new WeakMap,CM=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var n=t.value,r=t.parent,i=t.column===r.column&&t.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(t.props.length===1&&n.charCodeAt(0)!==58&&!l1.get(r))&&!i){l1.set(t,!0);for(var o=[],a=SM(n,o),l=r.props,s=0,c=0;s<a.length;s++)for(var f=0;f<l.length;f++,c++)t.props[c]=o[s]?a[s].replace(/&\f/g,l[f]):l[f]+" "+a[s]}}},EM=function(t){if(t.type==="decl"){var n=t.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(t.return="",t.value="")}};function BC(e,t){switch(oM(e,t)){case 5103:return pe+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return pe+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return pe+e+Jc+e+dt+e+e;case 6828:case 4268:return pe+e+dt+e+e;case 6165:return pe+e+dt+"flex-"+e+e;case 5187:return pe+e+he(e,/(\w+).+(:[^]+)/,pe+"box-$1$2"+dt+"flex-$1$2")+e;case 5443:return pe+e+dt+"flex-item-"+he(e,/flex-|-self/,"")+e;case 4675:return pe+e+dt+"flex-line-pack"+he(e,/align-content|flex-|-self/,"")+e;case 5548:return pe+e+dt+he(e,"shrink","negative")+e;case 5292:return pe+e+dt+he(e,"basis","preferred-size")+e;case 6060:return pe+"box-"+he(e,"-grow","")+pe+e+dt+he(e,"grow","positive")+e;case 4554:return pe+he(e,/([^-])(transform)/g,"$1"+pe+"$2")+e;case 6187:return he(he(he(e,/(zoom-|grab)/,pe+"$1"),/(image-set)/,pe+"$1"),e,"")+e;case 5495:case 3959:return he(e,/(image-set\([^]*)/,pe+"$1$`$1");case 4968:return he(he(e,/(.+:)(flex-)?(.*)/,pe+"box-pack:$3"+dt+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+pe+e+e;case 4095:case 3583:case 4068:case 2532:return he(e,/(.+)-inline(.+)/,pe+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(jn(e)-1-t>6)switch(ot(e,t+1)){case 109:if(ot(e,t+4)!==45)break;case 102:return he(e,/(.+:)(.+)-([^]+)/,"$1"+pe+"$2-$3$1"+Jc+(ot(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~fm(e,"stretch")?BC(he(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(ot(e,t+1)!==115)break;case 6444:switch(ot(e,jn(e)-3-(~fm(e,"!important")&&10))){case 107:return he(e,":",":"+pe)+e;case 101:return he(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+pe+(ot(e,14)===45?"inline-":"")+"box$3$1"+pe+"$2$3$1"+dt+"$2box$3")+e}break;case 5936:switch(ot(e,t+11)){case 114:return pe+e+dt+he(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return pe+e+dt+he(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return pe+e+dt+he(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return pe+e+dt+e+e}return e}var _M=function(t,n,r,i){if(t.length>-1&&!t.return)switch(t.type){case o0:t.return=BC(t.value,t.length);break;case LC:return mo([ua(t,{value:he(t.value,"@","@"+pe)})],i);case i0:if(t.length)return sM(t.props,function(o){switch(aM(o,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return mo([ua(t,{props:[he(o,/:(read-\w+)/,":"+Jc+"$1")]})],i);case"::placeholder":return mo([ua(t,{props:[he(o,/:(plac\w+)/,":"+pe+"input-$1")]}),ua(t,{props:[he(o,/:(plac\w+)/,":"+Jc+"$1")]}),ua(t,{props:[he(o,/:(plac\w+)/,dt+"input-$1")]})],i)}return""})}},kM=[_M],PM=function(t){var n=t.key;if(n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(y){var w=y.getAttribute("data-emotion");w.indexOf(" ")!==-1&&(document.head.appendChild(y),y.setAttribute("data-s",""))})}var i=t.stylisPlugins||kM,o={},a,l=[];a=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(y){for(var w=y.getAttribute("data-emotion").split(" "),g=1;g<w.length;g++)o[w[g]]=!0;l.push(y)});var s,c=[CM,EM];{var f,d=[gM,yM(function(y){f.insert(y)})],h=vM(c.concat(i,d)),p=function(w){return mo(hM(w),h)};s=function(w,g,v,b){f=v,p(w?w+"{"+g.styles+"}":g.styles),b&&(m.inserted[g.name]=!0)}}var m={key:n,sheet:new eM({key:n,container:a,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:o,registered:{},insert:s};return m.sheet.hydrate(l),m},VC={exports:{}},xe={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nt=typeof Symbol=="function"&&Symbol.for,s0=nt?Symbol.for("react.element"):60103,l0=nt?Symbol.for("react.portal"):60106,od=nt?Symbol.for("react.fragment"):60107,ad=nt?Symbol.for("react.strict_mode"):60108,sd=nt?Symbol.for("react.profiler"):60114,ld=nt?Symbol.for("react.provider"):60109,cd=nt?Symbol.for("react.context"):60110,c0=nt?Symbol.for("react.async_mode"):60111,ud=nt?Symbol.for("react.concurrent_mode"):60111,dd=nt?Symbol.for("react.forward_ref"):60112,fd=nt?Symbol.for("react.suspense"):60113,OM=nt?Symbol.for("react.suspense_list"):60120,pd=nt?Symbol.for("react.memo"):60115,hd=nt?Symbol.for("react.lazy"):60116,TM=nt?Symbol.for("react.block"):60121,jM=nt?Symbol.for("react.fundamental"):60117,$M=nt?Symbol.for("react.responder"):60118,IM=nt?Symbol.for("react.scope"):60119;function Kt(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case s0:switch(e=e.type,e){case c0:case ud:case od:case sd:case ad:case fd:return e;default:switch(e=e&&e.$$typeof,e){case cd:case dd:case hd:case pd:case ld:return e;default:return t}}case l0:return t}}}function WC(e){return Kt(e)===ud}xe.AsyncMode=c0;xe.ConcurrentMode=ud;xe.ContextConsumer=cd;xe.ContextProvider=ld;xe.Element=s0;xe.ForwardRef=dd;xe.Fragment=od;xe.Lazy=hd;xe.Memo=pd;xe.Portal=l0;xe.Profiler=sd;xe.StrictMode=ad;xe.Suspense=fd;xe.isAsyncMode=function(e){return WC(e)||Kt(e)===c0};xe.isConcurrentMode=WC;xe.isContextConsumer=function(e){return Kt(e)===cd};xe.isContextProvider=function(e){return Kt(e)===ld};xe.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===s0};xe.isForwardRef=function(e){return Kt(e)===dd};xe.isFragment=function(e){return Kt(e)===od};xe.isLazy=function(e){return Kt(e)===hd};xe.isMemo=function(e){return Kt(e)===pd};xe.isPortal=function(e){return Kt(e)===l0};xe.isProfiler=function(e){return Kt(e)===sd};xe.isStrictMode=function(e){return Kt(e)===ad};xe.isSuspense=function(e){return Kt(e)===fd};xe.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===od||e===ud||e===sd||e===ad||e===fd||e===OM||typeof e=="object"&&e!==null&&(e.$$typeof===hd||e.$$typeof===pd||e.$$typeof===ld||e.$$typeof===cd||e.$$typeof===dd||e.$$typeof===jM||e.$$typeof===$M||e.$$typeof===IM||e.$$typeof===TM)};xe.typeOf=Kt;VC.exports=xe;var MM=VC.exports,UC=MM,AM={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},DM={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},HC={};HC[UC.ForwardRef]=AM;HC[UC.Memo]=DM;var LM=!0;function GC(e,t,n){var r="";return n.split(" ").forEach(function(i){e[i]!==void 0?t.push(e[i]+";"):r+=i+" "}),r}var u0=function(t,n,r){var i=t.key+"-"+n.name;(r===!1||LM===!1)&&t.registered[i]===void 0&&(t.registered[i]=n.styles)},qC=function(t,n,r){u0(t,n,r);var i=t.key+"-"+n.name;if(t.inserted[n.name]===void 0){var o=n;do t.insert(n===o?"."+i:"",o,t.sheet,!0),o=o.next;while(o!==void 0)}};function RM(e){for(var t=0,n,r=0,i=e.length;i>=4;++r,i-=4)n=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(i){case 3:t^=(e.charCodeAt(r+2)&255)<<16;case 2:t^=(e.charCodeAt(r+1)&255)<<8;case 1:t^=e.charCodeAt(r)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var FM={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},zM=/[A-Z]|^ms/g,NM=/_EMO_([^_]+?)_([^]*?)_EMO_/g,YC=function(t){return t.charCodeAt(1)===45},c1=function(t){return t!=null&&typeof t!="boolean"},Bf=xM(function(e){return YC(e)?e:e.replace(zM,"-$&").toLowerCase()}),u1=function(t,n){switch(t){case"animation":case"animationName":if(typeof n=="string")return n.replace(NM,function(r,i,o){return $n={name:i,styles:o,next:$n},i})}return FM[t]!==1&&!YC(t)&&typeof n=="number"&&n!==0?n+"px":n};function Ss(e,t,n){if(n==null)return"";if(n.__emotion_styles!==void 0)return n;switch(typeof n){case"boolean":return"";case"object":{if(n.anim===1)return $n={name:n.name,styles:n.styles,next:$n},n.name;if(n.styles!==void 0){var r=n.next;if(r!==void 0)for(;r!==void 0;)$n={name:r.name,styles:r.styles,next:$n},r=r.next;var i=n.styles+";";return i}return BM(e,t,n)}case"function":{if(e!==void 0){var o=$n,a=n(e);return $n=o,Ss(e,t,a)}break}}if(t==null)return n;var l=t[n];return l!==void 0?l:n}function BM(e,t,n){var r="";if(Array.isArray(n))for(var i=0;i<n.length;i++)r+=Ss(e,t,n[i])+";";else for(var o in n){var a=n[o];if(typeof a!="object")t!=null&&t[a]!==void 0?r+=o+"{"+t[a]+"}":c1(a)&&(r+=Bf(o)+":"+u1(o,a)+";");else if(Array.isArray(a)&&typeof a[0]=="string"&&(t==null||t[a[0]]===void 0))for(var l=0;l<a.length;l++)c1(a[l])&&(r+=Bf(o)+":"+u1(o,a[l])+";");else{var s=Ss(e,t,a);switch(o){case"animation":case"animationName":{r+=Bf(o)+":"+s+";";break}default:r+=o+"{"+s+"}"}}}return r}var d1=/label:\s*([^\s;\n{]+)\s*(;|$)/g,$n,d0=function(t,n,r){if(t.length===1&&typeof t[0]=="object"&&t[0]!==null&&t[0].styles!==void 0)return t[0];var i=!0,o="";$n=void 0;var a=t[0];a==null||a.raw===void 0?(i=!1,o+=Ss(r,n,a)):o+=a[0];for(var l=1;l<t.length;l++)o+=Ss(r,n,t[l]),i&&(o+=a[l]);d1.lastIndex=0;for(var s="",c;(c=d1.exec(o))!==null;)s+="-"+c[1];var f=RM(o)+s;return{name:f,styles:o,next:$n}},VM=function(t){return t()},WM=Xp["useInsertionEffect"]?Xp["useInsertionEffect"]:!1,XC=WM||VM,f0={}.hasOwnProperty,KC=x.createContext(typeof HTMLElement<"u"?PM({key:"css"}):null);KC.Provider;var QC=function(t){return x.forwardRef(function(n,r){var i=x.useContext(KC);return t(n,i,r)})},ZC=x.createContext({}),hm="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",UM=function(t,n){var r={};for(var i in n)f0.call(n,i)&&(r[i]=n[i]);return r[hm]=t,r},HM=function(t){var n=t.cache,r=t.serialized,i=t.isStringTag;return u0(n,r,i),XC(function(){return qC(n,r,i)}),null},GM=QC(function(e,t,n){var r=e.css;typeof r=="string"&&t.registered[r]!==void 0&&(r=t.registered[r]);var i=e[hm],o=[r],a="";typeof e.className=="string"?a=GC(t.registered,o,e.className):e.className!=null&&(a=e.className+" ");var l=d0(o,void 0,x.useContext(ZC));a+=t.key+"-"+l.name;var s={};for(var c in e)f0.call(e,c)&&c!=="css"&&c!==hm&&(s[c]=e[c]);return s.ref=n,s.className=a,x.createElement(x.Fragment,null,x.createElement(HM,{cache:t,serialized:l,isStringTag:typeof i=="string"}),x.createElement(i,s))}),qM=GM,Z=function(t,n){var r=arguments;if(n==null||!f0.call(n,"css"))return x.createElement.apply(void 0,r);var i=r.length,o=new Array(i);o[0]=qM,o[1]=UM(t,n);for(var a=2;a<i;a++)o[a]=r[a];return x.createElement.apply(null,o)};function p0(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return d0(t)}var YM=function(){var t=p0.apply(void 0,arguments),n="animation-"+t.name;return{name:n,styles:"@keyframes "+n+"{"+t.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},XM=r$,KM=function(t){return t!=="theme"},f1=function(t){return typeof t=="string"&&t.charCodeAt(0)>96?XM:KM},p1=function(t,n,r){var i;if(n){var o=n.shouldForwardProp;i=t.__emotion_forwardProp&&o?function(a){return t.__emotion_forwardProp(a)&&o(a)}:o}return typeof i!="function"&&r&&(i=t.__emotion_forwardProp),i},QM=function(t){var n=t.cache,r=t.serialized,i=t.isStringTag;return u0(n,r,i),XC(function(){return qC(n,r,i)}),null},ZM=function e(t,n){var r=t.__emotion_real===t,i=r&&t.__emotion_base||t,o,a;n!==void 0&&(o=n.label,a=n.target);var l=p1(t,n,r),s=l||f1(i),c=!s("as");return function(){var f=arguments,d=r&&t.__emotion_styles!==void 0?t.__emotion_styles.slice(0):[];if(o!==void 0&&d.push("label:"+o+";"),f[0]==null||f[0].raw===void 0)d.push.apply(d,f);else{d.push(f[0][0]);for(var h=f.length,p=1;p<h;p++)d.push(f[p],f[0][p])}var m=QC(function(y,w,g){var v=c&&y.as||i,b="",C=[],S=y;if(y.theme==null){S={};for(var P in y)S[P]=y[P];S.theme=x.useContext(ZC)}typeof y.className=="string"?b=GC(w.registered,C,y.className):y.className!=null&&(b=y.className+" ");var k=d0(d.concat(C),w.registered,S);b+=w.key+"-"+k.name,a!==void 0&&(b+=" "+a);var _=c&&l===void 0?f1(v):s,T={};for(var $ in y)c&&$==="as"||_($)&&(T[$]=y[$]);return T.className=b,T.ref=g,x.createElement(x.Fragment,null,x.createElement(QM,{cache:w,serialized:k,isStringTag:typeof v=="string"}),x.createElement(v,T))});return m.displayName=o!==void 0?o:"Styled("+(typeof i=="string"?i:i.displayName||i.name||"Component")+")",m.defaultProps=t.defaultProps,m.__emotion_real=m,m.__emotion_base=i,m.__emotion_styles=d,m.__emotion_forwardProp=l,Object.defineProperty(m,"toString",{value:function(){return"."+a}}),m.withComponent=function(y,w){return e(y,ee({},n,w,{shouldForwardProp:p1(m,w,!0)})).apply(void 0,d)},m}},JM=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],Re=ZM.bind();JM.forEach(function(e){Re[e]=Re(e)});const eA=Re.section`
  background-color: var(--second-background);

`,tA=Re.div`
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
`,JC=Re.div`
  font-family: var(--main-font);
  font-size: 14px;
  color: #8c8c8c;
     margin-right: auto;

  a {
    text-decoration: none;
    color: inherit;
  }
`,nA=Re.div`

`,rA=Re.h1`
  font-size: 32px;
  font-family: var(--main-font);
  color: var(--black-color);
  text-transform: uppercase;
  margin-bottom: 20px;
`,iA=Re.div`
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
`;const oA=Re(ge)`
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
`,aA=Re.div`
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
`,sA=Re.img`
  width: 100%;
  height: 200px;
  object-fit: cover;

  display: block;
  @media screen and (max-width: 768px) {
    height: 250px;
  }
`,lA=Re.p`
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
`;var cA={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"};uA(cA);function uA(e){var t={};for(var n in e)e.hasOwnProperty(n)&&(t[e[n]]=n);return t}var dA="#4fa94d",fA={"aria-busy":!0,role:"progressbar"},pA=E.div`
  display: ${e=>e.$visible?"flex":"none"};
`,hA="http://www.w3.org/2000/svg",ji=({height:e=100,width:t=100,radius:n=5,color:r=dA,ariaLabel:i="ball-triangle-loading",wrapperClass:o,wrapperStyle:a,visible:l=!0})=>u.jsx(pA,{style:{...a},$visible:l,className:o,"data-testid":"ball-triangle-loading","aria-label":i,...fA,children:u.jsxs("svg",{height:e,width:t,stroke:r,viewBox:"0 0 57 57",xmlns:hA,"data-testid":"ball-triangle-svg",children:[u.jsx("title",{children:"Ball Triangle"}),u.jsx("desc",{children:"Animated representation of three balls"}),u.jsx("g",{fill:"none",fillRule:"evenodd",children:u.jsxs("g",{transform:"translate(1 1)",strokeWidth:"2",children:[u.jsxs("circle",{cx:"5",cy:"50",r:n,children:[u.jsx("animate",{attributeName:"cy",begin:"0s",dur:"2.2s",values:"50;5;50;50",calcMode:"linear",repeatCount:"indefinite"}),u.jsx("animate",{attributeName:"cx",begin:"0s",dur:"2.2s",values:"5;27;49;5",calcMode:"linear",repeatCount:"indefinite"})]}),u.jsxs("circle",{cx:"27",cy:"5",r:n,children:[u.jsx("animate",{attributeName:"cy",begin:"0s",dur:"2.2s",from:"5",to:"5",values:"5;50;50;5",calcMode:"linear",repeatCount:"indefinite"}),u.jsx("animate",{attributeName:"cx",begin:"0s",dur:"2.2s",from:"27",to:"27",values:"27;49;5;27",calcMode:"linear",repeatCount:"indefinite"})]}),u.jsxs("circle",{cx:"49",cy:"50",r:n,children:[u.jsx("animate",{attributeName:"cy",begin:"0s",dur:"2.2s",values:"50;50;5;50",calcMode:"linear",repeatCount:"indefinite"}),u.jsx("animate",{attributeName:"cx",from:"49",to:"49",begin:"0s",dur:"2.2s",values:"49;5;27;49",calcMode:"linear",repeatCount:"indefinite"})]})]})})]})}),cn=242.776657104492,mA=1.6,gA=Xg`
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
  animation: ${gA} ${mA}s linear infinite;
`;var vA=Xg`
to {
   transform: rotate(360deg);
 }
`;E.svg`
  animation: ${vA} ${e=>String(e.$animationDuration).endsWith("s")?String(e.$animationDuration):`${e.$animationDuration}s`} steps(12, end) infinite;
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
`;var yA=Xg`
to {
   stroke-dashoffset: 136;
 }
`;E.polygon`
  stroke-dasharray: 17;
  animation: ${yA} 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;
`;E.svg`
  transform-origin: 50% 65%;
`;const xA=()=>{const[e,t]=x.useState([]),[n,r]=x.useState(!0);return x.useEffect(()=>{async function i(){try{r(!0);const a=await(await fetch("https://backenddidiv-production.up.railway.app/api/categories?populate=*&pagination[limit]=50&sort=title:asc")).json();t(a.data.map(l=>{var s;return{id:l.id,title:l.title,image:(s=l.image)==null?void 0:s.url}}))}catch(o){console.error("Помилка запиту:",o)}finally{r(!1)}}i()},[]),n?u.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"100vw",height:"100vh"},children:u.jsx(ji,{height:100,width:100,radius:5,color:"var(--orange-color)",ariaLabel:"ball-triangle-loading",wrapperStyle:{},wrapperClass:"",visible:!0})}):u.jsx(eA,{children:u.jsxs(tA,{children:[u.jsxs(JC,{children:[u.jsx(ge,{to:"/",children:"Головна"})," / ",u.jsx(ge,{to:"/catalog",children:"Каталог"})]}),u.jsx(nA,{children:u.jsx(AC,{})}),u.jsx(rA,{children:"Каталог"}),u.jsx(iA,{children:e.map(i=>u.jsxs(oA,{to:`/catalog/${i.title}`,children:[u.jsx(aA,{children:u.jsx(sA,{src:i.image,alt:i.title})}),u.jsx(lA,{children:i.title})]},i.id))})]})})},bA=Re.div`

padding-top: 100px;
padding-bottom: 250px;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`,wA=Re.h1`
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
`,SA=Re.p`
  color: #191919;
  font-size: 18px;
  max-width: 600px;
      text-align: center;
      margin-bottom: 50px;
      @media screen and (min-width: 768px) {
 font-size: 25px;
  }
`,CA=Re(ge)`

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

  
`,EA=()=>u.jsxs(bA,{children:[u.jsxs(wA,{children:[" ",u.jsx("span",{children:"404"}),"  PAGE NOT FOUND"]}),u.jsx(SA,{children:" Ой, схоже, ти збився з маршруту! На жаль, ця сторінка безслідно зникла десь на бездоріжжі. Спробуй повернутися на головну "}),u.jsx(CA,{children:" На головну"})]});const _A=E.div`
width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
   font-family: var(--main-font);
`,kA=E.div`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  margin: 0;
`;var eE={},tE={},md={},nE={exports:{}},Fs={};/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var h1=Object.getOwnPropertySymbols,PA=Object.prototype.hasOwnProperty,OA=Object.prototype.propertyIsEnumerable;function TA(e){if(e==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}function jA(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de",Object.getOwnPropertyNames(e)[0]==="5")return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;var r=Object.getOwnPropertyNames(t).map(function(o){return t[o]});if(r.join("")!=="0123456789")return!1;var i={};return"abcdefghijklmnopqrst".split("").forEach(function(o){i[o]=o}),Object.keys(Object.assign({},i)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}var $A=jA()?Object.assign:function(e,t){for(var n,r=TA(e),i,o=1;o<arguments.length;o++){n=Object(arguments[o]);for(var a in n)PA.call(n,a)&&(r[a]=n[a]);if(h1){i=h1(n);for(var l=0;l<i.length;l++)OA.call(n,i[l])&&(r[i[l]]=n[i[l]])}}return r},rE={exports:{}},ue={};/** @license React v17.0.2
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var h0=$A,qo=60103,iE=60106;ue.Fragment=60107;ue.StrictMode=60108;ue.Profiler=60114;var oE=60109,aE=60110,sE=60112;ue.Suspense=60113;var lE=60115,cE=60116;if(typeof Symbol=="function"&&Symbol.for){var ln=Symbol.for;qo=ln("react.element"),iE=ln("react.portal"),ue.Fragment=ln("react.fragment"),ue.StrictMode=ln("react.strict_mode"),ue.Profiler=ln("react.profiler"),oE=ln("react.provider"),aE=ln("react.context"),sE=ln("react.forward_ref"),ue.Suspense=ln("react.suspense"),lE=ln("react.memo"),cE=ln("react.lazy")}var m1=typeof Symbol=="function"&&Symbol.iterator;function IA(e){return e===null||typeof e!="object"?null:(e=m1&&e[m1]||e["@@iterator"],typeof e=="function"?e:null)}function zs(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var uE={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},dE={};function Yo(e,t,n){this.props=e,this.context=t,this.refs=dE,this.updater=n||uE}Yo.prototype.isReactComponent={};Yo.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error(zs(85));this.updater.enqueueSetState(this,e,t,"setState")};Yo.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function fE(){}fE.prototype=Yo.prototype;function m0(e,t,n){this.props=e,this.context=t,this.refs=dE,this.updater=n||uE}var g0=m0.prototype=new fE;g0.constructor=m0;h0(g0,Yo.prototype);g0.isPureReactComponent=!0;var v0={current:null},pE=Object.prototype.hasOwnProperty,hE={key:!0,ref:!0,__self:!0,__source:!0};function mE(e,t,n){var r,i={},o=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(o=""+t.key),t)pE.call(t,r)&&!hE.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var s=Array(l),c=0;c<l;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:qo,type:e,key:o,ref:a,props:i,_owner:v0.current}}function MA(e,t){return{$$typeof:qo,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function y0(e){return typeof e=="object"&&e!==null&&e.$$typeof===qo}function AA(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var g1=/\/+/g;function Vf(e,t){return typeof e=="object"&&e!==null&&e.key!=null?AA(""+e.key):t.toString(36)}function nc(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case qo:case iE:a=!0}}if(a)return a=e,i=i(a),e=r===""?"."+Vf(a,0):r,Array.isArray(i)?(n="",e!=null&&(n=e.replace(g1,"$&/")+"/"),nc(i,t,n,"",function(c){return c})):i!=null&&(y0(i)&&(i=MA(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(g1,"$&/")+"/")+e)),t.push(i)),1;if(a=0,r=r===""?".":r+":",Array.isArray(e))for(var l=0;l<e.length;l++){o=e[l];var s=r+Vf(o,l);a+=nc(o,t,n,s,i)}else if(s=IA(e),typeof s=="function")for(e=s.call(e),l=0;!(o=e.next()).done;)o=o.value,s=r+Vf(o,l++),a+=nc(o,t,n,s,i);else if(o==="object")throw t=""+e,Error(zs(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t));return a}function hl(e,t,n){if(e==null)return e;var r=[],i=0;return nc(e,r,"","",function(o){return t.call(n,o,i++)}),r}function DA(e){if(e._status===-1){var t=e._result;t=t(),e._status=0,e._result=t,t.then(function(n){e._status===0&&(n=n.default,e._status=1,e._result=n)},function(n){e._status===0&&(e._status=2,e._result=n)})}if(e._status===1)return e._result;throw e._result}var gE={current:null};function hr(){var e=gE.current;if(e===null)throw Error(zs(321));return e}var LA={ReactCurrentDispatcher:gE,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:v0,IsSomeRendererActing:{current:!1},assign:h0};ue.Children={map:hl,forEach:function(e,t,n){hl(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return hl(e,function(){t++}),t},toArray:function(e){return hl(e,function(t){return t})||[]},only:function(e){if(!y0(e))throw Error(zs(143));return e}};ue.Component=Yo;ue.PureComponent=m0;ue.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=LA;ue.cloneElement=function(e,t,n){if(e==null)throw Error(zs(267,e));var r=h0({},e.props),i=e.key,o=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,a=v0.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in t)pE.call(t,s)&&!hE.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&l!==void 0?l[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){l=Array(s);for(var c=0;c<s;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:qo,type:e.type,key:i,ref:o,props:r,_owner:a}};ue.createContext=function(e,t){return t===void 0&&(t=null),e={$$typeof:aE,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider={$$typeof:oE,_context:e},e.Consumer=e};ue.createElement=mE;ue.createFactory=function(e){var t=mE.bind(null,e);return t.type=e,t};ue.createRef=function(){return{current:null}};ue.forwardRef=function(e){return{$$typeof:sE,render:e}};ue.isValidElement=y0;ue.lazy=function(e){return{$$typeof:cE,_payload:{_status:-1,_result:e},_init:DA}};ue.memo=function(e,t){return{$$typeof:lE,type:e,compare:t===void 0?null:t}};ue.useCallback=function(e,t){return hr().useCallback(e,t)};ue.useContext=function(e,t){return hr().useContext(e,t)};ue.useDebugValue=function(){};ue.useEffect=function(e,t){return hr().useEffect(e,t)};ue.useImperativeHandle=function(e,t,n){return hr().useImperativeHandle(e,t,n)};ue.useLayoutEffect=function(e,t){return hr().useLayoutEffect(e,t)};ue.useMemo=function(e,t){return hr().useMemo(e,t)};ue.useReducer=function(e,t,n){return hr().useReducer(e,t,n)};ue.useRef=function(e){return hr().useRef(e)};ue.useState=function(e){return hr().useState(e)};ue.version="17.0.2";rE.exports=ue;var RA=rE.exports;/** @license React v17.0.2
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var FA=RA,vE=60103;Fs.Fragment=60107;if(typeof Symbol=="function"&&Symbol.for){var v1=Symbol.for;vE=v1("react.element"),Fs.Fragment=v1("react.fragment")}var zA=FA.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,NA=Object.prototype.hasOwnProperty,BA={key:!0,ref:!0,__self:!0,__source:!0};function yE(e,t,n){var r,i={},o=null,a=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)NA.call(t,r)&&!BA.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:vE,type:e,key:o,ref:a,props:i,_owner:zA.current}}Fs.jsx=yE;Fs.jsxs=yE;nE.exports=Fs;var Rt=nE.exports,xE={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var t={}.hasOwnProperty;function n(){for(var o="",a=0;a<arguments.length;a++){var l=arguments[a];l&&(o=i(o,r(l)))}return o}function r(o){if(typeof o=="string"||typeof o=="number")return o;if(typeof o!="object")return"";if(Array.isArray(o))return n.apply(null,o);if(o.toString!==Object.prototype.toString&&!o.toString.toString().includes("[native code]"))return o.toString();var a="";for(var l in o)t.call(o,l)&&o[l]&&(a=i(a,l));return a}function i(o,a){return a?o?o+" "+a:o+a:o}e.exports?(n.default=n,e.exports=n):window.classNames=n})()})(xE);var Ft=xE.exports;const VA={"lds-circle":"_lds-circle_qlxhy_1"},WA=Object.freeze(Object.defineProperty({__proto__:null,default:VA},Symbol.toStringTag,{value:"Module"})),UA=Ct(WA);var bE=ne&&ne.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(md,"__esModule",{value:!0});md.Circle=void 0;const HA=Rt,GA=bE(Ft),qA=bE(UA);function YA({color:e="#7f58af",size:t=64,className:n,style:r,...i}){return(0,HA.jsx)("div",{className:(0,GA.default)(qA.default["lds-circle"],n),style:{background:e,width:t,height:t,...r},...i})}md.Circle=YA;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Circle=void 0;var t=md;Object.defineProperty(e,"Circle",{enumerable:!0,get:function(){return t.Circle}})})(tE);var wE={},gd={};const XA={"lds-default":"_lds-default_wt1n8_1"},KA=Object.freeze(Object.defineProperty({__proto__:null,default:XA},Symbol.toStringTag,{value:"Module"})),QA=Ct(KA);var SE=ne&&ne.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(gd,"__esModule",{value:!0});gd.Default=void 0;const y1=Rt,ZA=SE(Ft),JA=SE(QA);function eD({color:e="#7f58af",size:t=80,className:n,style:r,...i}){const o=[...Array(12)].map((a,l)=>(0,y1.jsx)("div",{style:{background:`${e}`,width:t*.075,height:t*.075}},l));return(0,y1.jsx)("div",{className:(0,ZA.default)(JA.default["lds-default"],n),style:{height:t,width:t,...r},...i,children:o})}gd.Default=eD;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Default=void 0;var t=gd;Object.defineProperty(e,"Default",{enumerable:!0,get:function(){return t.Default}})})(wE);var CE={},vd={};const tD={"lds-dual-ring":"_lds-dual-ring_pbai0_1","lds-dual-ring-after":"_lds-dual-ring-after_pbai0_6"},nD=Object.freeze(Object.defineProperty({__proto__:null,default:tD},Symbol.toStringTag,{value:"Module"})),rD=Ct(nD);var EE=ne&&ne.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(vd,"__esModule",{value:!0});vd.DualRing=void 0;const x1=Rt,b1=EE(Ft),w1=EE(rD);function iD({color:e="#7f58af",size:t=80,className:n,style:r,...i}){return(0,x1.jsx)("div",{className:(0,b1.default)(w1.default["lds-dual-ring"],n),style:{width:t,height:t,...r},...i,children:(0,x1.jsx)("div",{className:(0,b1.default)(w1.default["lds-dual-ring-after"]),style:{borderColor:`${e} transparent`,borderWidth:t*.1,width:t*.7-6,height:t*.7-6}})})}vd.DualRing=iD;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.DualRing=void 0;var t=vd;Object.defineProperty(e,"DualRing",{enumerable:!0,get:function(){return t.DualRing}})})(CE);var _E={},yd={};const oD={"lds-ellipsis":"_lds-ellipsis_1fzd3_1","lds-ellipsis1":"_lds-ellipsis1_1fzd3_1","lds-ellipsis2":"_lds-ellipsis2_1fzd3_1","lds-ellipsis3":"_lds-ellipsis3_1fzd3_1"},aD=Object.freeze(Object.defineProperty({__proto__:null,default:oD},Symbol.toStringTag,{value:"Module"})),sD=Ct(aD);var kE=ne&&ne.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(yd,"__esModule",{value:!0});yd.Ellipsis=void 0;const S1=Rt,lD=kE(Ft),cD=kE(sD);function uD({color:e="#7f58af",size:t=80,className:n,style:r,...i}){const o=[...Array(4)].map((a,l)=>(0,S1.jsx)("div",{style:{background:`${e}`}},l));return(0,S1.jsx)("div",{className:(0,lD.default)(cD.default["lds-ellipsis"],n),style:{...r,width:t,height:t},...i,children:o})}yd.Ellipsis=uD;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Ellipsis=void 0;var t=yd;Object.defineProperty(e,"Ellipsis",{enumerable:!0,get:function(){return t.Ellipsis}})})(_E);var PE={},xd={};const dD={"lds-facebook":"_lds-facebook_1ts9g_1"},fD=Object.freeze(Object.defineProperty({__proto__:null,default:dD},Symbol.toStringTag,{value:"Module"})),pD=Ct(fD);var OE=ne&&ne.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(xd,"__esModule",{value:!0});xd.Facebook=void 0;const C1=Rt,hD=OE(Ft),mD=OE(pD);function gD({color:e="#7f58af",size:t=80,className:n,style:r,...i}){const o=[...Array(3)].map((a,l)=>(0,C1.jsx)("div",{style:{background:`${e}`}},l));return(0,C1.jsx)("div",{className:(0,hD.default)(mD.default["lds-facebook"],n),style:{width:t,height:t,...r},...i,children:o})}xd.Facebook=gD;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Facebook=void 0;var t=xd;Object.defineProperty(e,"Facebook",{enumerable:!0,get:function(){return t.Facebook}})})(PE);var TE={},bd={};const vD={"lds-grid":"_lds-grid_1ftub_1"},yD=Object.freeze(Object.defineProperty({__proto__:null,default:vD},Symbol.toStringTag,{value:"Module"})),xD=Ct(yD);var jE=ne&&ne.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(bd,"__esModule",{value:!0});bd.Grid=void 0;const E1=Rt,bD=jE(Ft),wD=jE(xD);function SD({color:e="#7f58af",size:t=80,className:n,style:r,...i}){const o=[...Array(9)].map((a,l)=>(0,E1.jsx)("div",{style:{background:`${e}`}},l));return(0,E1.jsx)("div",{className:(0,bD.default)(wD.default["lds-grid"],n),style:{width:t,height:t,...r},...i,children:o})}bd.Grid=SD;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Grid=void 0;var t=bd;Object.defineProperty(e,"Grid",{enumerable:!0,get:function(){return t.Grid}})})(TE);var $E={},wd={};const CD={"lds-heart":"_lds-heart_e4yfg_1","div-after":"_div-after_e4yfg_18","div-before":"_div-before_e4yfg_19"},ED=Object.freeze(Object.defineProperty({__proto__:null,default:CD},Symbol.toStringTag,{value:"Module"})),_D=Ct(ED);var IE=ne&&ne.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(wd,"__esModule",{value:!0});wd.Heart=void 0;const ml=Rt,Wf=IE(Ft),Uf=IE(_D);function kD({color:e="#7f58af",size:t=80,className:n,style:r,...i}){return(0,ml.jsx)("div",{className:(0,Wf.default)(Uf.default["lds-heart"],n),style:{width:t,height:t,...r},...i,children:(0,ml.jsxs)("div",{style:{background:e,width:t*.4,height:t*.4,left:t*.3,top:t*.3},children:[(0,ml.jsx)("div",{className:(0,Wf.default)(Uf.default["div-before"]),style:{background:e,width:t*.4,height:t*.4,left:-t*.3}}),(0,ml.jsx)("div",{className:(0,Wf.default)(Uf.default["div-after"]),style:{background:e,width:t*.4,height:t*.4,top:-t*.3}})]})})}wd.Heart=kD;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Heart=void 0;var t=wd;Object.defineProperty(e,"Heart",{enumerable:!0,get:function(){return t.Heart}})})($E);var ME={},Sd={};const PD={"lds-hourglass":"_lds-hourglass_mn3qi_1","lds-hourglass-after":"_lds-hourglass-after_mn3qi_7"},OD=Object.freeze(Object.defineProperty({__proto__:null,default:PD},Symbol.toStringTag,{value:"Module"})),TD=Ct(OD);var AE=ne&&ne.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Sd,"__esModule",{value:!0});Sd.Hourglass=void 0;const _1=Rt,k1=AE(Ft),P1=AE(TD);function jD({color:e="#7f58af",size:t=32,className:n,style:r}){return(0,_1.jsx)("div",{className:(0,k1.default)(P1.default["lds-hourglass"],n),style:{...r},children:(0,_1.jsx)("div",{className:(0,k1.default)(P1.default["lds-hourglass-after"]),style:{background:e,borderWidth:t,borderHeight:t}})})}Sd.Hourglass=jD;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Hourglass=void 0;var t=Sd;Object.defineProperty(e,"Hourglass",{enumerable:!0,get:function(){return t.Hourglass}})})(ME);var DE={},Cd={};const LE="_center_1rufi_10",RE="_spin_1rufi_1",$D={"lds-orbitals":"_lds-orbitals_1rufi_1",center:LE,"outer-spin":"_outer-spin_1rufi_19","inner-spin":"_inner-spin_1rufi_20","inner-arc":"_inner-arc_1rufi_25","inner-arc_start-a":"_inner-arc_start-a_1rufi_32","inner-arc_end-a":"_inner-arc_end-a_1rufi_36","inner-moon-a":"_inner-moon-a_1rufi_40","inner-moon-b":"_inner-moon-b_1rufi_49","inner-arc_start-b":"_inner-arc_start-b_1rufi_58","inner-arc_end-b":"_inner-arc_end-b_1rufi_62","outer-arc":"_outer-arc_1rufi_66","outer-arc_start-a":"_outer-arc_start-a_1rufi_73","outer-arc_end-a":"_outer-arc_end-a_1rufi_77","outer-moon-a":"_outer-moon-a_1rufi_81","outer-moon-b":"_outer-moon-b_1rufi_90","outer-arc_start-b":"_outer-arc_start-b_1rufi_99","outer-arc_end-b":"_outer-arc_end-b_1rufi_103",spin:RE},ID=Object.freeze(Object.defineProperty({__proto__:null,center:LE,default:$D,spin:RE},Symbol.toStringTag,{value:"Module"})),MD=Ct(ID);var FE=ne&&ne.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Cd,"__esModule",{value:!0});Cd.Orbitals=void 0;const ut=Rt,vt=FE(Ft),_e=FE(MD);function AD({color:e="#7f58af",className:t,style:n}){return(0,ut.jsxs)("div",{className:(0,vt.default)(_e.default["lds-orbitals"],t),style:{...n},children:[(0,ut.jsx)("div",{className:_e.default.center,style:{background:e}}),(0,ut.jsxs)("div",{className:(0,vt.default)(_e.default["inner-spin"]),children:[(0,ut.jsx)("div",{className:(0,vt.default)(_e.default["inner-arc"],_e.default["inner-arc_start-a"]),style:{borderColor:e}}),(0,ut.jsx)("div",{className:(0,vt.default)(_e.default["inner-arc"],_e.default["inner-arc_end-a"]),style:{borderColor:e}}),(0,ut.jsx)("div",{className:(0,vt.default)(_e.default["inner-arc"],_e.default["inner-arc_start-b"]),style:{borderColor:e}}),(0,ut.jsx)("div",{className:(0,vt.default)(_e.default["inner-arc"],_e.default["inner-arc_end-b"]),style:{borderColor:e}}),(0,ut.jsx)("div",{className:(0,vt.default)(_e.default["inner-moon-a"]),style:{background:e}}),(0,ut.jsx)("div",{className:(0,vt.default)(_e.default["inner-moon-b"]),style:{background:e}})]}),(0,ut.jsxs)("div",{className:(0,vt.default)(_e.default["outer-spin"]),children:[(0,ut.jsx)("div",{className:(0,vt.default)(_e.default["outer-arc"],_e.default["outer-arc_start-a"]),style:{borderColor:e}}),(0,ut.jsx)("div",{className:(0,vt.default)(_e.default["outer-arc"],_e.default["outer-arc_end-a"]),style:{borderColor:e}}),(0,ut.jsx)("div",{className:(0,vt.default)(_e.default["outer-arc"],_e.default["outer-arc_start-b"]),style:{borderColor:e}}),(0,ut.jsx)("div",{className:(0,vt.default)(_e.default["outer-arc"],_e.default["outer-arc_end-b"]),style:{borderColor:e}}),(0,ut.jsx)("div",{className:(0,vt.default)(_e.default["outer-moon-a"]),style:{background:e}}),(0,ut.jsx)("div",{className:(0,vt.default)(_e.default["outer-moon-b"]),style:{background:e}})]})]})}Cd.Orbitals=AD;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Orbitals=void 0;var t=Cd;Object.defineProperty(e,"Orbitals",{enumerable:!0,get:function(){return t.Orbitals}})})(DE);var zE={},Ed={};const DD={"lds-ring":"_lds-ring_xgxdp_1"},LD=Object.freeze(Object.defineProperty({__proto__:null,default:DD},Symbol.toStringTag,{value:"Module"})),RD=Ct(LD);var NE=ne&&ne.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Ed,"__esModule",{value:!0});Ed.Ring=void 0;const O1=Rt,FD=NE(Ft),zD=NE(RD);function ND({color:e="#7f58af",size:t=80,className:n,style:r}){const i=[...Array(4)].map((o,a)=>(0,O1.jsx)("div",{style:{borderColor:`${e} transparent transparent transparent`,width:t*.8,height:t*.8,margin:t*.1,borderWidth:t*.1}},a));return(0,O1.jsx)("div",{className:(0,FD.default)(zD.default["lds-ring"],n),style:{width:t,height:t,...r},children:i})}Ed.Ring=ND;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Ring=void 0;var t=Ed;Object.defineProperty(e,"Ring",{enumerable:!0,get:function(){return t.Ring}})})(zE);var BE={},_d={};const BD={"lds-ripple":"_lds-ripple_1lgcf_1"},VD=Object.freeze(Object.defineProperty({__proto__:null,default:BD},Symbol.toStringTag,{value:"Module"})),WD=Ct(VD);var VE=ne&&ne.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(_d,"__esModule",{value:!0});_d.Ripple=void 0;const T1=Rt,UD=VE(Ft),HD=VE(WD);function GD({color:e="#7f58af",size:t=80,className:n,style:r}){const i=[...Array(2)].map((o,a)=>(0,T1.jsx)("div",{style:{borderColor:`${e}`,borderWidth:t*.05}},a));return(0,T1.jsx)("div",{className:(0,UD.default)(HD.default["lds-ripple"],n),style:{width:t,height:t,...r},children:i})}_d.Ripple=GD;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Ripple=void 0;var t=_d;Object.defineProperty(e,"Ripple",{enumerable:!0,get:function(){return t.Ripple}})})(BE);var WE={},kd={};const qD={"lds-roller":"_lds-roller_ks1ij_1","div-after":"_div-after_ks1ij_11"},YD=Object.freeze(Object.defineProperty({__proto__:null,default:qD},Symbol.toStringTag,{value:"Module"})),XD=Ct(YD);var UE=ne&&ne.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(kd,"__esModule",{value:!0});kd.Roller=void 0;const Hf=Rt,j1=UE(Ft),$1=UE(XD);function KD({color:e="#7f58af",className:t,style:n}){const r=[...Array(8)].map((i,o)=>(0,Hf.jsx)("div",{children:(0,Hf.jsx)("div",{className:(0,j1.default)($1.default["div-after"]),style:{background:e}})},o));return(0,Hf.jsx)("div",{className:(0,j1.default)($1.default["lds-roller"],t),style:{...n},children:r})}kd.Roller=KD;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Roller=void 0;var t=kd;Object.defineProperty(e,"Roller",{enumerable:!0,get:function(){return t.Roller}})})(WE);var HE={},Pd={};const QD={"lds-spinner":"_lds-spinner_flf3t_1","div-after":"_div-after_flf3t_12"},ZD=Object.freeze(Object.defineProperty({__proto__:null,default:QD},Symbol.toStringTag,{value:"Module"})),JD=Ct(ZD);var GE=ne&&ne.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Pd,"__esModule",{value:!0});Pd.Spinner=void 0;const Gf=Rt,I1=GE(Ft),M1=GE(JD);function e6({color:e="#7f58af",className:t,style:n}){const r=[...Array(12)].map((i,o)=>(0,Gf.jsx)("div",{children:(0,Gf.jsx)("div",{className:(0,I1.default)(M1.default["div-after"]),style:{background:e}})},o));return(0,Gf.jsx)("div",{className:(0,I1.default)(M1.default["lds-spinner"],t),style:{...n},children:r})}Pd.Spinner=e6;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Spinner=void 0;var t=Pd;Object.defineProperty(e,"Spinner",{enumerable:!0,get:function(){return t.Spinner}})})(HE);var qE={},Od={};const YE="_left_v9vlb_30",XE="_right_v9vlb_33",KE="_anim_v9vlb_37",t6={"lds-ouroboro":"_lds-ouroboro_v9vlb_1",left:YE,right:XE,anim:KE,"lds-ouroboro-rotate":"_lds-ouroboro-rotate_v9vlb_1"},n6=Object.freeze(Object.defineProperty({__proto__:null,anim:KE,default:t6,left:YE,right:XE},Symbol.toStringTag,{value:"Module"})),r6=Ct(n6);var QE=ne&&ne.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Od,"__esModule",{value:!0});Od.Ouroboro=void 0;const da=Rt,fa=QE(Ft),pa=QE(r6);function i6({color:e="#7f58af",style:t,className:n}){return(0,da.jsxs)("div",{className:(0,fa.default)(pa.default["lds-ouroboro"],n),style:{...t},children:[(0,da.jsx)("span",{className:(0,fa.default)(pa.default.left),children:(0,da.jsx)("span",{className:(0,fa.default)(pa.default.anim),style:{background:e}})}),(0,da.jsx)("span",{className:(0,fa.default)(pa.default.right),children:(0,da.jsx)("span",{className:(0,fa.default)(pa.default.anim),style:{background:e}})})]})}Od.Ouroboro=i6;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Ouroboro=void 0;var t=Od;Object.defineProperty(e,"Ouroboro",{enumerable:!0,get:function(){return t.Ouroboro}})})(qE);(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Ouroboro=e.Spinner=e.Roller=e.Ripple=e.Ring=e.Orbitals=e.Hourglass=e.Heart=e.Grid=e.Facebook=e.Ellipsis=e.DualRing=e.Default=e.Circle=void 0;const t=tE;Object.defineProperty(e,"Circle",{enumerable:!0,get:function(){return t.Circle}});const n=wE;Object.defineProperty(e,"Default",{enumerable:!0,get:function(){return n.Default}});const r=CE;Object.defineProperty(e,"DualRing",{enumerable:!0,get:function(){return r.DualRing}});const i=_E;Object.defineProperty(e,"Ellipsis",{enumerable:!0,get:function(){return i.Ellipsis}});const o=PE;Object.defineProperty(e,"Facebook",{enumerable:!0,get:function(){return o.Facebook}});const a=TE;Object.defineProperty(e,"Grid",{enumerable:!0,get:function(){return a.Grid}});const l=$E;Object.defineProperty(e,"Heart",{enumerable:!0,get:function(){return l.Heart}});const s=ME;Object.defineProperty(e,"Hourglass",{enumerable:!0,get:function(){return s.Hourglass}});const c=DE;Object.defineProperty(e,"Orbitals",{enumerable:!0,get:function(){return c.Orbitals}});const f=zE;Object.defineProperty(e,"Ring",{enumerable:!0,get:function(){return f.Ring}});const d=BE;Object.defineProperty(e,"Ripple",{enumerable:!0,get:function(){return d.Ripple}});const h=WE;Object.defineProperty(e,"Roller",{enumerable:!0,get:function(){return h.Roller}});const p=HE;Object.defineProperty(e,"Spinner",{enumerable:!0,get:function(){return p.Spinner}});const m=qE;Object.defineProperty(e,"Ouroboro",{enumerable:!0,get:function(){return m.Ouroboro}})})(eE);const o6=()=>u.jsx(kA,{children:u.jsx(eE.Default,{color:"#6d433da8"})});const a6="/assets/Ancient_Kyiv-2153f7e6.ttf",s6=i4`
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
  src: url(${a6}) format('truetype');
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
`,l6=E.div`
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
`,c6=E(ge)`
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
`,u6=E.h2`

  font-size: 30px;
  text-transform: uppercase;
  margin-bottom: 20px;
  color: #333;
  @media screen and (min-width: 768px) {
    font-size: 35px;
  }
`,d6=E.h3`

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
`,f6=E.a`

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
`,p6=E.div`
  width: 40px;
  height: 40px;
  border: 2px solid white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`,h6=()=>{const[e,t]=x.useState([]);return x.useEffect(()=>{async function n(){try{const r=await fetch("https://backenddidiv-production.up.railway.app/api/categories?populate=image&sort=title:asc",{credentials:"omit"});if(!r.ok){console.error("Server error:",r.status);return}const i=await r.json();if(!i.data){console.error("No data field:",i);return}t(i.data.map(o=>{var a;return{title:o.title,image:(a=o.image)==null?void 0:a.url}}))}catch(r){console.error("Fetch error:",r)}}n()},[]),u.jsxs(u.Fragment,{children:[u.jsx(u6,{children:"Каталог"}),u.jsxs(l6,{children:[e.slice(0,7).map(n=>u.jsx(c6,{to:`catalog/${n.title}`,bg:n.image,isBig:n.big,children:u.jsx(d6,{children:n.title})},n.title)),u.jsxs(f6,{href:"catalog",children:[u.jsx("p",{children:"Весь каталог"}),u.jsx(p6,{children:u.jsx(Uu,{size:24})})]})]})]})};function A1(e){return e!==null&&typeof e=="object"&&"constructor"in e&&e.constructor===Object}function x0(e={},t={}){const n=["__proto__","constructor","prototype"];Object.keys(t).filter(r=>n.indexOf(r)<0).forEach(r=>{typeof e[r]>"u"?e[r]=t[r]:A1(t[r])&&A1(e[r])&&Object.keys(t[r]).length>0&&x0(e[r],t[r])})}const ZE={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector(){return null},querySelectorAll(){return[]},getElementById(){return null},createEvent(){return{initEvent(){}}},createElement(){return{children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName(){return[]}}},createElementNS(){return{}},importNode(){return null},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function zn(){const e=typeof document<"u"?document:{};return x0(e,ZE),e}const m6={document:ZE,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle(){return{getPropertyValue(){return""}}},Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia(){return{}},requestAnimationFrame(e){return typeof setTimeout>"u"?(e(),null):setTimeout(e,0)},cancelAnimationFrame(e){typeof setTimeout>"u"||clearTimeout(e)}};function kt(){const e=typeof window<"u"?window:{};return x0(e,m6),e}function g6(e=""){return e.trim().split(" ").filter(t=>!!t.trim())}function v6(e){const t=e;Object.keys(t).forEach(n=>{try{t[n]=null}catch{}try{delete t[n]}catch{}})}function JE(e,t=0){return setTimeout(e,t)}function eu(){return Date.now()}function y6(e){const t=kt();let n;return t.getComputedStyle&&(n=t.getComputedStyle(e,null)),!n&&e.currentStyle&&(n=e.currentStyle),n||(n=e.style),n}function x6(e,t="x"){const n=kt();let r,i,o;const a=y6(e);return n.WebKitCSSMatrix?(i=a.transform||a.webkitTransform,i.split(",").length>6&&(i=i.split(", ").map(l=>l.replace(",",".")).join(", ")),o=new n.WebKitCSSMatrix(i==="none"?"":i)):(o=a.MozTransform||a.OTransform||a.MsTransform||a.msTransform||a.transform||a.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),r=o.toString().split(",")),t==="x"&&(n.WebKitCSSMatrix?i=o.m41:r.length===16?i=parseFloat(r[12]):i=parseFloat(r[4])),t==="y"&&(n.WebKitCSSMatrix?i=o.m42:r.length===16?i=parseFloat(r[13]):i=parseFloat(r[5])),i||0}function gl(e){return typeof e=="object"&&e!==null&&e.constructor&&Object.prototype.toString.call(e).slice(8,-1)==="Object"}function b6(e){return typeof window<"u"&&typeof window.HTMLElement<"u"?e instanceof HTMLElement:e&&(e.nodeType===1||e.nodeType===11)}function Nt(...e){const t=Object(e[0]);for(let n=1;n<e.length;n+=1){const r=e[n];if(r!=null&&!b6(r)){const i=Object.keys(Object(r)).filter(o=>o!=="__proto__"&&o!=="constructor"&&o!=="prototype");for(let o=0,a=i.length;o<a;o+=1){const l=i[o],s=Object.getOwnPropertyDescriptor(r,l);s!==void 0&&s.enumerable&&(gl(t[l])&&gl(r[l])?r[l].__swiper__?t[l]=r[l]:Nt(t[l],r[l]):!gl(t[l])&&gl(r[l])?(t[l]={},r[l].__swiper__?t[l]=r[l]:Nt(t[l],r[l])):t[l]=r[l])}}}return t}function zi(e,t,n){e.style.setProperty(t,n)}function e_({swiper:e,targetPosition:t,side:n}){const r=kt(),i=-e.translate;let o=null,a;const l=e.params.speed;e.wrapperEl.style.scrollSnapType="none",r.cancelAnimationFrame(e.cssModeFrameID);const s=t>i?"next":"prev",c=(d,h)=>s==="next"&&d>=h||s==="prev"&&d<=h,f=()=>{a=new Date().getTime(),o===null&&(o=a);const d=Math.max(Math.min((a-o)/l,1),0),h=.5-Math.cos(d*Math.PI)/2;let p=i+h*(t-i);if(c(p,t)&&(p=t),e.wrapperEl.scrollTo({[n]:p}),c(p,t)){e.wrapperEl.style.overflow="hidden",e.wrapperEl.style.scrollSnapType="",setTimeout(()=>{e.wrapperEl.style.overflow="",e.wrapperEl.scrollTo({[n]:p})}),r.cancelAnimationFrame(e.cssModeFrameID);return}e.cssModeFrameID=r.requestAnimationFrame(f)};f()}function Dn(e,t=""){const n=kt(),r=[...e.children];return n.HTMLSlotElement&&e instanceof HTMLSlotElement&&r.push(...e.assignedElements()),t?r.filter(i=>i.matches(t)):r}function w6(e,t){const n=[t];for(;n.length>0;){const r=n.shift();if(e===r)return!0;n.push(...r.children,...r.shadowRoot?r.shadowRoot.children:[],...r.assignedElements?r.assignedElements():[])}}function S6(e,t){const n=kt();let r=t.contains(e);return!r&&n.HTMLSlotElement&&t instanceof HTMLSlotElement&&(r=[...t.assignedElements()].includes(e),r||(r=w6(e,t))),r}function tu(e){try{console.warn(e);return}catch{}}function nu(e,t=[]){const n=document.createElement(e);return n.classList.add(...Array.isArray(t)?t:g6(t)),n}function C6(e,t){const n=[];for(;e.previousElementSibling;){const r=e.previousElementSibling;t?r.matches(t)&&n.push(r):n.push(r),e=r}return n}function E6(e,t){const n=[];for(;e.nextElementSibling;){const r=e.nextElementSibling;t?r.matches(t)&&n.push(r):n.push(r),e=r}return n}function Tr(e,t){return kt().getComputedStyle(e,null).getPropertyValue(t)}function ru(e){let t=e,n;if(t){for(n=0;(t=t.previousSibling)!==null;)t.nodeType===1&&(n+=1);return n}}function t_(e,t){const n=[];let r=e.parentElement;for(;r;)t?r.matches(t)&&n.push(r):n.push(r),r=r.parentElement;return n}function mm(e,t,n){const r=kt();return n?e[t==="width"?"offsetWidth":"offsetHeight"]+parseFloat(r.getComputedStyle(e,null).getPropertyValue(t==="width"?"margin-right":"margin-top"))+parseFloat(r.getComputedStyle(e,null).getPropertyValue(t==="width"?"margin-left":"margin-bottom")):e.offsetWidth}function Qe(e){return(Array.isArray(e)?e:[e]).filter(t=>!!t)}function Cs(e,t=""){typeof trustedTypes<"u"?e.innerHTML=trustedTypes.createPolicy("html",{createHTML:n=>n}).createHTML(t):e.innerHTML=t}function n_(e,t,n,r){return e.params.createElements&&Object.keys(r).forEach(i=>{if(!n[i]&&n.auto===!0){let o=Dn(e.el,`.${r[i]}`)[0];o||(o=nu("div",r[i]),o.className=r[i],e.el.append(o)),n[i]=o,t[i]=o}}),n}const D1='<svg class="swiper-navigation-icon" width="11" height="20" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.38296 20.0762C0.111788 19.805 0.111788 19.3654 0.38296 19.0942L9.19758 10.2796L0.38296 1.46497C0.111788 1.19379 0.111788 0.754138 0.38296 0.482966C0.654131 0.211794 1.09379 0.211794 1.36496 0.482966L10.4341 9.55214C10.8359 9.9539 10.8359 10.6053 10.4341 11.007L1.36496 20.0762C1.09379 20.3474 0.654131 20.3474 0.38296 20.0762Z" fill="currentColor"/></svg>';function _6({swiper:e,extendParams:t,on:n,emit:r}){t({navigation:{nextEl:null,prevEl:null,addIcons:!0,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock",navigationDisabledClass:"swiper-navigation-disabled"}}),e.navigation={nextEl:null,prevEl:null,arrowSvg:D1};function i(p){let m;return p&&typeof p=="string"&&e.isElement&&(m=e.el.querySelector(p)||e.hostEl.querySelector(p),m)?m:(p&&(typeof p=="string"&&(m=[...document.querySelectorAll(p)]),e.params.uniqueNavElements&&typeof p=="string"&&m&&m.length>1&&e.el.querySelectorAll(p).length===1?m=e.el.querySelector(p):m&&m.length===1&&(m=m[0])),p&&!m?p:m)}function o(p,m){const y=e.params.navigation;p=Qe(p),p.forEach(w=>{w&&(w.classList[m?"add":"remove"](...y.disabledClass.split(" ")),w.tagName==="BUTTON"&&(w.disabled=m),e.params.watchOverflow&&e.enabled&&w.classList[e.isLocked?"add":"remove"](y.lockClass))})}function a(){const{nextEl:p,prevEl:m}=e.navigation;if(e.params.loop){o(m,!1),o(p,!1);return}o(m,e.isBeginning&&!e.params.rewind),o(p,e.isEnd&&!e.params.rewind)}function l(p){p.preventDefault(),!(e.isBeginning&&!e.params.loop&&!e.params.rewind)&&(e.slidePrev(),r("navigationPrev"))}function s(p){p.preventDefault(),!(e.isEnd&&!e.params.loop&&!e.params.rewind)&&(e.slideNext(),r("navigationNext"))}function c(){const p=e.params.navigation;if(e.params.navigation=n_(e,e.originalParams.navigation,e.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),!(p.nextEl||p.prevEl))return;let m=i(p.nextEl),y=i(p.prevEl);Object.assign(e.navigation,{nextEl:m,prevEl:y}),m=Qe(m),y=Qe(y);const w=(g,v)=>{if(g){if(p.addIcons&&g.matches(".swiper-button-next,.swiper-button-prev")&&!g.querySelector("svg")){const b=document.createElement("div");Cs(b,D1),g.appendChild(b.querySelector("svg")),b.remove()}g.addEventListener("click",v==="next"?s:l)}!e.enabled&&g&&g.classList.add(...p.lockClass.split(" "))};m.forEach(g=>w(g,"next")),y.forEach(g=>w(g,"prev"))}function f(){let{nextEl:p,prevEl:m}=e.navigation;p=Qe(p),m=Qe(m);const y=(w,g)=>{w.removeEventListener("click",g==="next"?s:l),w.classList.remove(...e.params.navigation.disabledClass.split(" "))};p.forEach(w=>y(w,"next")),m.forEach(w=>y(w,"prev"))}n("init",()=>{e.params.navigation.enabled===!1?h():(c(),a())}),n("toEdge fromEdge lock unlock",()=>{a()}),n("destroy",()=>{f()}),n("enable disable",()=>{let{nextEl:p,prevEl:m}=e.navigation;if(p=Qe(p),m=Qe(m),e.enabled){a();return}[...p,...m].filter(y=>!!y).forEach(y=>y.classList.add(e.params.navigation.lockClass))}),n("click",(p,m)=>{let{nextEl:y,prevEl:w}=e.navigation;y=Qe(y),w=Qe(w);const g=m.target;let v=w.includes(g)||y.includes(g);if(e.isElement&&!v){const b=m.path||m.composedPath&&m.composedPath();b&&(v=b.find(C=>y.includes(C)||w.includes(C)))}if(e.params.navigation.hideOnClick&&!v){if(e.pagination&&e.params.pagination&&e.params.pagination.clickable&&(e.pagination.el===g||e.pagination.el.contains(g)))return;let b;y.length?b=y[0].classList.contains(e.params.navigation.hiddenClass):w.length&&(b=w[0].classList.contains(e.params.navigation.hiddenClass)),r(b===!0?"navigationShow":"navigationHide"),[...y,...w].filter(C=>!!C).forEach(C=>C.classList.toggle(e.params.navigation.hiddenClass))}});const d=()=>{e.el.classList.remove(...e.params.navigation.navigationDisabledClass.split(" ")),c(),a()},h=()=>{e.el.classList.add(...e.params.navigation.navigationDisabledClass.split(" ")),f()};Object.assign(e.navigation,{enable:d,disable:h,update:a,init:c,destroy:f})}function ha(e=""){return`.${e.trim().replace(/([\.:!+\/()[\]#>~*^$|=,'"@{}\\])/g,"\\$1").replace(/ /g,".")}`}function k6({swiper:e,extendParams:t,on:n,emit:r}){const i="swiper-pagination";t({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:g=>g,formatFractionTotal:g=>g,bulletClass:`${i}-bullet`,bulletActiveClass:`${i}-bullet-active`,modifierClass:`${i}-`,currentClass:`${i}-current`,totalClass:`${i}-total`,hiddenClass:`${i}-hidden`,progressbarFillClass:`${i}-progressbar-fill`,progressbarOppositeClass:`${i}-progressbar-opposite`,clickableClass:`${i}-clickable`,lockClass:`${i}-lock`,horizontalClass:`${i}-horizontal`,verticalClass:`${i}-vertical`,paginationDisabledClass:`${i}-disabled`}}),e.pagination={el:null,bullets:[]};let o,a=0;function l(){return!e.params.pagination.el||!e.pagination.el||Array.isArray(e.pagination.el)&&e.pagination.el.length===0}function s(g,v){const{bulletActiveClass:b}=e.params.pagination;g&&(g=g[`${v==="prev"?"previous":"next"}ElementSibling`],g&&(g.classList.add(`${b}-${v}`),g=g[`${v==="prev"?"previous":"next"}ElementSibling`],g&&g.classList.add(`${b}-${v}-${v}`)))}function c(g,v,b){if(g=g%b,v=v%b,v===g+1)return"next";if(v===g-1)return"previous"}function f(g){const v=g.target.closest(ha(e.params.pagination.bulletClass));if(!v)return;g.preventDefault();const b=ru(v)*e.params.slidesPerGroup;if(e.params.loop){if(e.realIndex===b)return;const C=c(e.realIndex,b,e.slides.length);C==="next"?e.slideNext():C==="previous"?e.slidePrev():e.slideToLoop(b)}else e.slideTo(b)}function d(){const g=e.rtl,v=e.params.pagination;if(l())return;let b=e.pagination.el;b=Qe(b);let C,S;const P=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.slides.length,k=e.params.loop?Math.ceil(P/e.params.slidesPerGroup):e.snapGrid.length;if(e.params.loop?(S=e.previousRealIndex||0,C=e.params.slidesPerGroup>1?Math.floor(e.realIndex/e.params.slidesPerGroup):e.realIndex):typeof e.snapIndex<"u"?(C=e.snapIndex,S=e.previousSnapIndex):(S=e.previousIndex||0,C=e.activeIndex||0),v.type==="bullets"&&e.pagination.bullets&&e.pagination.bullets.length>0){const _=e.pagination.bullets;let T,$,I;if(v.dynamicBullets&&(o=mm(_[0],e.isHorizontal()?"width":"height",!0),b.forEach(M=>{M.style[e.isHorizontal()?"width":"height"]=`${o*(v.dynamicMainBullets+4)}px`}),v.dynamicMainBullets>1&&S!==void 0&&(a+=C-(S||0),a>v.dynamicMainBullets-1?a=v.dynamicMainBullets-1:a<0&&(a=0)),T=Math.max(C-a,0),$=T+(Math.min(_.length,v.dynamicMainBullets)-1),I=($+T)/2),_.forEach(M=>{const j=[...["","-next","-next-next","-prev","-prev-prev","-main"].map(F=>`${v.bulletActiveClass}${F}`)].map(F=>typeof F=="string"&&F.includes(" ")?F.split(" "):F).flat();M.classList.remove(...j)}),b.length>1)_.forEach(M=>{const j=ru(M);j===C?M.classList.add(...v.bulletActiveClass.split(" ")):e.isElement&&M.setAttribute("part","bullet"),v.dynamicBullets&&(j>=T&&j<=$&&M.classList.add(...`${v.bulletActiveClass}-main`.split(" ")),j===T&&s(M,"prev"),j===$&&s(M,"next"))});else{const M=_[C];if(M&&M.classList.add(...v.bulletActiveClass.split(" ")),e.isElement&&_.forEach((j,F)=>{j.setAttribute("part",F===C?"bullet-active":"bullet")}),v.dynamicBullets){const j=_[T],F=_[$];for(let D=T;D<=$;D+=1)_[D]&&_[D].classList.add(...`${v.bulletActiveClass}-main`.split(" "));s(j,"prev"),s(F,"next")}}if(v.dynamicBullets){const M=Math.min(_.length,v.dynamicMainBullets+4),j=(o*M-o)/2-I*o,F=g?"right":"left";_.forEach(D=>{D.style[e.isHorizontal()?F:"top"]=`${j}px`})}}b.forEach((_,T)=>{if(v.type==="fraction"&&(_.querySelectorAll(ha(v.currentClass)).forEach($=>{$.textContent=v.formatFractionCurrent(C+1)}),_.querySelectorAll(ha(v.totalClass)).forEach($=>{$.textContent=v.formatFractionTotal(k)})),v.type==="progressbar"){let $;v.progressbarOpposite?$=e.isHorizontal()?"vertical":"horizontal":$=e.isHorizontal()?"horizontal":"vertical";const I=(C+1)/k;let M=1,j=1;$==="horizontal"?M=I:j=I,_.querySelectorAll(ha(v.progressbarFillClass)).forEach(F=>{F.style.transform=`translate3d(0,0,0) scaleX(${M}) scaleY(${j})`,F.style.transitionDuration=`${e.params.speed}ms`})}v.type==="custom"&&v.renderCustom?(Cs(_,v.renderCustom(e,C+1,k)),T===0&&r("paginationRender",_)):(T===0&&r("paginationRender",_),r("paginationUpdate",_)),e.params.watchOverflow&&e.enabled&&_.classList[e.isLocked?"add":"remove"](v.lockClass)})}function h(){const g=e.params.pagination;if(l())return;const v=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.grid&&e.params.grid.rows>1?e.slides.length/Math.ceil(e.params.grid.rows):e.slides.length;let b=e.pagination.el;b=Qe(b);let C="";if(g.type==="bullets"){let S=e.params.loop?Math.ceil(v/e.params.slidesPerGroup):e.snapGrid.length;e.params.freeMode&&e.params.freeMode.enabled&&S>v&&(S=v);for(let P=0;P<S;P+=1)g.renderBullet?C+=g.renderBullet.call(e,P,g.bulletClass):C+=`<${g.bulletElement} ${e.isElement?'part="bullet"':""} class="${g.bulletClass}"></${g.bulletElement}>`}g.type==="fraction"&&(g.renderFraction?C=g.renderFraction.call(e,g.currentClass,g.totalClass):C=`<span class="${g.currentClass}"></span> / <span class="${g.totalClass}"></span>`),g.type==="progressbar"&&(g.renderProgressbar?C=g.renderProgressbar.call(e,g.progressbarFillClass):C=`<span class="${g.progressbarFillClass}"></span>`),e.pagination.bullets=[],b.forEach(S=>{g.type!=="custom"&&Cs(S,C||""),g.type==="bullets"&&e.pagination.bullets.push(...S.querySelectorAll(ha(g.bulletClass)))}),g.type!=="custom"&&r("paginationRender",b[0])}function p(){e.params.pagination=n_(e,e.originalParams.pagination,e.params.pagination,{el:"swiper-pagination"});const g=e.params.pagination;if(!g.el)return;let v;typeof g.el=="string"&&e.isElement&&(v=e.el.querySelector(g.el)),!v&&typeof g.el=="string"&&(v=[...document.querySelectorAll(g.el)]),v||(v=g.el),!(!v||v.length===0)&&(e.params.uniqueNavElements&&typeof g.el=="string"&&Array.isArray(v)&&v.length>1&&(v=[...e.el.querySelectorAll(g.el)],v.length>1&&(v=v.find(b=>t_(b,".swiper")[0]===e.el))),Array.isArray(v)&&v.length===1&&(v=v[0]),Object.assign(e.pagination,{el:v}),v=Qe(v),v.forEach(b=>{g.type==="bullets"&&g.clickable&&b.classList.add(...(g.clickableClass||"").split(" ")),b.classList.add(g.modifierClass+g.type),b.classList.add(e.isHorizontal()?g.horizontalClass:g.verticalClass),g.type==="bullets"&&g.dynamicBullets&&(b.classList.add(`${g.modifierClass}${g.type}-dynamic`),a=0,g.dynamicMainBullets<1&&(g.dynamicMainBullets=1)),g.type==="progressbar"&&g.progressbarOpposite&&b.classList.add(g.progressbarOppositeClass),g.clickable&&b.addEventListener("click",f),e.enabled||b.classList.add(g.lockClass)}))}function m(){const g=e.params.pagination;if(l())return;let v=e.pagination.el;v&&(v=Qe(v),v.forEach(b=>{b.classList.remove(g.hiddenClass),b.classList.remove(g.modifierClass+g.type),b.classList.remove(e.isHorizontal()?g.horizontalClass:g.verticalClass),g.clickable&&(b.classList.remove(...(g.clickableClass||"").split(" ")),b.removeEventListener("click",f))})),e.pagination.bullets&&e.pagination.bullets.forEach(b=>b.classList.remove(...g.bulletActiveClass.split(" ")))}n("changeDirection",()=>{if(!e.pagination||!e.pagination.el)return;const g=e.params.pagination;let{el:v}=e.pagination;v=Qe(v),v.forEach(b=>{b.classList.remove(g.horizontalClass,g.verticalClass),b.classList.add(e.isHorizontal()?g.horizontalClass:g.verticalClass)})}),n("init",()=>{e.params.pagination.enabled===!1?w():(p(),h(),d())}),n("activeIndexChange",()=>{typeof e.snapIndex>"u"&&d()}),n("snapIndexChange",()=>{d()}),n("snapGridLengthChange",()=>{h(),d()}),n("destroy",()=>{m()}),n("enable disable",()=>{let{el:g}=e.pagination;g&&(g=Qe(g),g.forEach(v=>v.classList[e.enabled?"remove":"add"](e.params.pagination.lockClass)))}),n("lock unlock",()=>{d()}),n("click",(g,v)=>{const b=v.target,C=Qe(e.pagination.el);if(e.params.pagination.el&&e.params.pagination.hideOnClick&&C&&C.length>0&&!b.classList.contains(e.params.pagination.bulletClass)){if(e.navigation&&(e.navigation.nextEl&&b===e.navigation.nextEl||e.navigation.prevEl&&b===e.navigation.prevEl))return;const S=C[0].classList.contains(e.params.pagination.hiddenClass);r(S===!0?"paginationShow":"paginationHide"),C.forEach(P=>P.classList.toggle(e.params.pagination.hiddenClass))}});const y=()=>{e.el.classList.remove(e.params.pagination.paginationDisabledClass);let{el:g}=e.pagination;g&&(g=Qe(g),g.forEach(v=>v.classList.remove(e.params.pagination.paginationDisabledClass))),p(),h(),d()},w=()=>{e.el.classList.add(e.params.pagination.paginationDisabledClass);let{el:g}=e.pagination;g&&(g=Qe(g),g.forEach(v=>v.classList.add(e.params.pagination.paginationDisabledClass))),m()};Object.assign(e.pagination,{enable:y,disable:w,render:h,update:d,init:p,destroy:m})}function P6({swiper:e,extendParams:t,on:n,emit:r,params:i}){e.autoplay={running:!1,paused:!1,timeLeft:0},t({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!1,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}});let o,a,l=i&&i.autoplay?i.autoplay.delay:3e3,s=i&&i.autoplay?i.autoplay.delay:3e3,c,f=new Date().getTime(),d,h,p,m,y,w;function g(R){!e||e.destroyed||!e.wrapperEl||R.target===e.wrapperEl&&(e.wrapperEl.removeEventListener("transitionend",g),!(w||R.detail&&R.detail.bySwiperTouchMove)&&T())}const v=()=>{if(e.destroyed||!e.autoplay.running)return;e.autoplay.paused?d=!0:d&&(s=c,d=!1);const R=e.autoplay.paused?c:f+s-new Date().getTime();e.autoplay.timeLeft=R,r("autoplayTimeLeft",R,R/l),a=requestAnimationFrame(()=>{v()})},b=()=>{let R;return e.virtual&&e.params.virtual.enabled?R=e.slides.find(A=>A.classList.contains("swiper-slide-active")):R=e.slides[e.activeIndex],R?parseInt(R.getAttribute("data-swiper-autoplay"),10):void 0},C=()=>{let R=e.params.autoplay.delay;const O=b();return!Number.isNaN(O)&&O>0&&(R=O),R},S=R=>{if(e.destroyed||!e.autoplay.running)return;cancelAnimationFrame(a),v();let O=R;typeof O>"u"&&(O=C(),l=O,s=O),c=O;const A=e.params.speed,N=()=>{!e||e.destroyed||(e.params.autoplay.reverseDirection?!e.isBeginning||e.params.loop||e.params.rewind?(e.slidePrev(A,!0,!0),r("autoplay")):e.params.autoplay.stopOnLastSlide||(e.slideTo(e.slides.length-1,A,!0,!0),r("autoplay")):!e.isEnd||e.params.loop||e.params.rewind?(e.slideNext(A,!0,!0),r("autoplay")):e.params.autoplay.stopOnLastSlide||(e.slideTo(0,A,!0,!0),r("autoplay")),e.params.cssMode&&(f=new Date().getTime(),requestAnimationFrame(()=>{S()})))};return O>0?(clearTimeout(o),o=setTimeout(()=>{N()},O)):requestAnimationFrame(()=>{N()}),O},P=()=>{f=new Date().getTime(),e.autoplay.running=!0,S(),r("autoplayStart")},k=()=>{e.autoplay.running=!1,clearTimeout(o),cancelAnimationFrame(a),r("autoplayStop")},_=(R,O)=>{if(e.destroyed||!e.autoplay.running)return;clearTimeout(o),R||(y=!0);const A=()=>{r("autoplayPause"),e.params.autoplay.waitForTransition?e.wrapperEl.addEventListener("transitionend",g):T()};if(e.autoplay.paused=!0,O){A();return}c=(c||e.params.autoplay.delay)-(new Date().getTime()-f),!(e.isEnd&&c<0&&!e.params.loop)&&(c<0&&(c=0),A())},T=()=>{e.isEnd&&c<0&&!e.params.loop||e.destroyed||!e.autoplay.running||(f=new Date().getTime(),y?(y=!1,S(c)):S(),e.autoplay.paused=!1,r("autoplayResume"))},$=()=>{if(e.destroyed||!e.autoplay.running)return;const R=zn();R.visibilityState==="hidden"&&(y=!0,_(!0)),R.visibilityState==="visible"&&T()},I=R=>{R.pointerType==="mouse"&&(y=!0,w=!0,!(e.animating||e.autoplay.paused)&&_(!0))},M=R=>{R.pointerType==="mouse"&&(w=!1,e.autoplay.paused&&T())},j=()=>{e.params.autoplay.pauseOnMouseEnter&&(e.el.addEventListener("pointerenter",I),e.el.addEventListener("pointerleave",M))},F=()=>{e.el&&typeof e.el!="string"&&(e.el.removeEventListener("pointerenter",I),e.el.removeEventListener("pointerleave",M))},D=()=>{zn().addEventListener("visibilitychange",$)},z=()=>{zn().removeEventListener("visibilitychange",$)};n("init",()=>{e.params.autoplay.enabled&&(j(),D(),P())}),n("destroy",()=>{F(),z(),e.autoplay.running&&k()}),n("_freeModeStaticRelease",()=>{(p||y)&&T()}),n("_freeModeNoMomentumRelease",()=>{e.params.autoplay.disableOnInteraction?k():_(!0,!0)}),n("beforeTransitionStart",(R,O,A)=>{e.destroyed||!e.autoplay.running||(A||!e.params.autoplay.disableOnInteraction?_(!0,!0):k())}),n("sliderFirstMove",()=>{if(!(e.destroyed||!e.autoplay.running)){if(e.params.autoplay.disableOnInteraction){k();return}h=!0,p=!1,y=!1,m=setTimeout(()=>{y=!0,p=!0,_(!0)},200)}}),n("touchEnd",()=>{if(!(e.destroyed||!e.autoplay.running||!h)){if(clearTimeout(m),clearTimeout(o),e.params.autoplay.disableOnInteraction){p=!1,h=!1;return}p&&e.params.cssMode&&T(),p=!1,h=!1}}),n("slideChange",()=>{e.destroyed||!e.autoplay.running||e.autoplay.paused&&(c=C(),l=C())}),Object.assign(e.autoplay,{start:P,stop:k,pause:_,resume:T})}let qf;function O6(){const e=kt(),t=zn();return{smoothScroll:t.documentElement&&t.documentElement.style&&"scrollBehavior"in t.documentElement.style,touch:!!("ontouchstart"in e||e.DocumentTouch&&t instanceof e.DocumentTouch)}}function r_(){return qf||(qf=O6()),qf}let Yf;function T6({userAgent:e}={}){const t=r_(),n=kt(),r=n.navigator.platform,i=e||n.navigator.userAgent,o={ios:!1,android:!1},a=n.screen.width,l=n.screen.height,s=i.match(/(Android);?[\s\/]+([\d.]+)?/);let c=i.match(/(iPad)(?!\1).*OS\s([\d_]+)/);const f=i.match(/(iPod)(.*OS\s([\d_]+))?/),d=!c&&i.match(/(iPhone\sOS|iOS)\s([\d_]+)/),h=r==="Win32";let p=r==="MacIntel";const m=["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"];return!c&&p&&t.touch&&m.indexOf(`${a}x${l}`)>=0&&(c=i.match(/(Version)\/([\d.]+)/),c||(c=[0,1,"13_0_0"]),p=!1),s&&!h&&(o.os="android",o.android=!0),(c||d||f)&&(o.os="ios",o.ios=!0),o}function i_(e={}){return Yf||(Yf=T6(e)),Yf}let Xf;function j6(){const e=kt(),t=i_();let n=!1;function r(){const l=e.navigator.userAgent.toLowerCase();return l.indexOf("safari")>=0&&l.indexOf("chrome")<0&&l.indexOf("android")<0}if(r()){const l=String(e.navigator.userAgent);if(l.includes("Version/")){const[s,c]=l.split("Version/")[1].split(" ")[0].split(".").map(f=>Number(f));n=s<16||s===16&&c<2}}const i=/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent),o=r(),a=o||i&&t.ios;return{isSafari:n||o,needPerspectiveFix:n,need3dFix:a,isWebView:i}}function o_(){return Xf||(Xf=j6()),Xf}function $6({swiper:e,on:t,emit:n}){const r=kt();let i=null,o=null;const a=()=>{!e||e.destroyed||!e.initialized||(n("beforeResize"),n("resize"))},l=()=>{!e||e.destroyed||!e.initialized||(i=new ResizeObserver(f=>{o=r.requestAnimationFrame(()=>{const{width:d,height:h}=e;let p=d,m=h;f.forEach(({contentBoxSize:y,contentRect:w,target:g})=>{g&&g!==e.el||(p=w?w.width:(y[0]||y).inlineSize,m=w?w.height:(y[0]||y).blockSize)}),(p!==d||m!==h)&&a()})}),i.observe(e.el))},s=()=>{o&&r.cancelAnimationFrame(o),i&&i.unobserve&&e.el&&(i.unobserve(e.el),i=null)},c=()=>{!e||e.destroyed||!e.initialized||n("orientationchange")};t("init",()=>{if(e.params.resizeObserver&&typeof r.ResizeObserver<"u"){l();return}r.addEventListener("resize",a),r.addEventListener("orientationchange",c)}),t("destroy",()=>{s(),r.removeEventListener("resize",a),r.removeEventListener("orientationchange",c)})}function I6({swiper:e,extendParams:t,on:n,emit:r}){const i=[],o=kt(),a=(c,f={})=>{const d=o.MutationObserver||o.WebkitMutationObserver,h=new d(p=>{if(e.__preventObserver__)return;if(p.length===1){r("observerUpdate",p[0]);return}const m=function(){r("observerUpdate",p[0])};o.requestAnimationFrame?o.requestAnimationFrame(m):o.setTimeout(m,0)});h.observe(c,{attributes:typeof f.attributes>"u"?!0:f.attributes,childList:e.isElement||(typeof f.childList>"u"?!0:f).childList,characterData:typeof f.characterData>"u"?!0:f.characterData}),i.push(h)},l=()=>{if(e.params.observer){if(e.params.observeParents){const c=t_(e.hostEl);for(let f=0;f<c.length;f+=1)a(c[f])}a(e.hostEl,{childList:e.params.observeSlideChildren}),a(e.wrapperEl,{attributes:!1})}},s=()=>{i.forEach(c=>{c.disconnect()}),i.splice(0,i.length)};t({observer:!1,observeParents:!1,observeSlideChildren:!1}),n("init",l),n("destroy",s)}var M6={on(e,t,n){const r=this;if(!r.eventsListeners||r.destroyed||typeof t!="function")return r;const i=n?"unshift":"push";return e.split(" ").forEach(o=>{r.eventsListeners[o]||(r.eventsListeners[o]=[]),r.eventsListeners[o][i](t)}),r},once(e,t,n){const r=this;if(!r.eventsListeners||r.destroyed||typeof t!="function")return r;function i(...o){r.off(e,i),i.__emitterProxy&&delete i.__emitterProxy,t.apply(r,o)}return i.__emitterProxy=t,r.on(e,i,n)},onAny(e,t){const n=this;if(!n.eventsListeners||n.destroyed||typeof e!="function")return n;const r=t?"unshift":"push";return n.eventsAnyListeners.indexOf(e)<0&&n.eventsAnyListeners[r](e),n},offAny(e){const t=this;if(!t.eventsListeners||t.destroyed||!t.eventsAnyListeners)return t;const n=t.eventsAnyListeners.indexOf(e);return n>=0&&t.eventsAnyListeners.splice(n,1),t},off(e,t){const n=this;return!n.eventsListeners||n.destroyed||!n.eventsListeners||e.split(" ").forEach(r=>{typeof t>"u"?n.eventsListeners[r]=[]:n.eventsListeners[r]&&n.eventsListeners[r].forEach((i,o)=>{(i===t||i.__emitterProxy&&i.__emitterProxy===t)&&n.eventsListeners[r].splice(o,1)})}),n},emit(...e){const t=this;if(!t.eventsListeners||t.destroyed||!t.eventsListeners)return t;let n,r,i;return typeof e[0]=="string"||Array.isArray(e[0])?(n=e[0],r=e.slice(1,e.length),i=t):(n=e[0].events,r=e[0].data,i=e[0].context||t),r.unshift(i),(Array.isArray(n)?n:n.split(" ")).forEach(a=>{t.eventsAnyListeners&&t.eventsAnyListeners.length&&t.eventsAnyListeners.forEach(l=>{l.apply(i,[a,...r])}),t.eventsListeners&&t.eventsListeners[a]&&t.eventsListeners[a].forEach(l=>{l.apply(i,r)})}),t}};function A6(){const e=this;let t,n;const r=e.el;typeof e.params.width<"u"&&e.params.width!==null?t=e.params.width:t=r.clientWidth,typeof e.params.height<"u"&&e.params.height!==null?n=e.params.height:n=r.clientHeight,!(t===0&&e.isHorizontal()||n===0&&e.isVertical())&&(t=t-parseInt(Tr(r,"padding-left")||0,10)-parseInt(Tr(r,"padding-right")||0,10),n=n-parseInt(Tr(r,"padding-top")||0,10)-parseInt(Tr(r,"padding-bottom")||0,10),Number.isNaN(t)&&(t=0),Number.isNaN(n)&&(n=0),Object.assign(e,{width:t,height:n,size:e.isHorizontal()?t:n}))}function D6(){const e=this;function t($,I){return parseFloat($.getPropertyValue(e.getDirectionLabel(I))||0)}const n=e.params,{wrapperEl:r,slidesEl:i,rtlTranslate:o,wrongRTL:a}=e,l=e.virtual&&n.virtual.enabled,s=l?e.virtual.slides.length:e.slides.length,c=Dn(i,`.${e.params.slideClass}, swiper-slide`),f=l?e.virtual.slides.length:c.length;let d=[];const h=[],p=[];let m=n.slidesOffsetBefore;typeof m=="function"&&(m=n.slidesOffsetBefore.call(e));let y=n.slidesOffsetAfter;typeof y=="function"&&(y=n.slidesOffsetAfter.call(e));const w=e.snapGrid.length,g=e.slidesGrid.length,v=e.size-m-y;let b=n.spaceBetween,C=-m,S=0,P=0;if(typeof v>"u")return;typeof b=="string"&&b.indexOf("%")>=0?b=parseFloat(b.replace("%",""))/100*v:typeof b=="string"&&(b=parseFloat(b)),e.virtualSize=-b-m-y,c.forEach($=>{o?$.style.marginLeft="":$.style.marginRight="",$.style.marginBottom="",$.style.marginTop=""}),n.centeredSlides&&n.cssMode&&(zi(r,"--swiper-centered-offset-before",""),zi(r,"--swiper-centered-offset-after","")),n.cssMode&&(zi(r,"--swiper-slides-offset-before",`${m}px`),zi(r,"--swiper-slides-offset-after",`${y}px`));const k=n.grid&&n.grid.rows>1&&e.grid;k?e.grid.initSlides(c):e.grid&&e.grid.unsetSlides();let _;const T=n.slidesPerView==="auto"&&n.breakpoints&&Object.keys(n.breakpoints).filter($=>typeof n.breakpoints[$].slidesPerView<"u").length>0;for(let $=0;$<f;$+=1){_=0;const I=c[$];if(!(I&&(k&&e.grid.updateSlide($,I,c),Tr(I,"display")==="none"))){if(l&&n.slidesPerView==="auto")n.virtual.slidesPerViewAutoSlideSize&&(_=n.virtual.slidesPerViewAutoSlideSize),_&&I&&(n.roundLengths&&(_=Math.floor(_)),I.style[e.getDirectionLabel("width")]=`${_}px`);else if(n.slidesPerView==="auto"){T&&(I.style[e.getDirectionLabel("width")]="");const M=getComputedStyle(I),j=I.style.transform,F=I.style.webkitTransform;if(j&&(I.style.transform="none"),F&&(I.style.webkitTransform="none"),n.roundLengths)_=e.isHorizontal()?mm(I,"width",!0):mm(I,"height",!0);else{const D=t(M,"width"),z=t(M,"padding-left"),R=t(M,"padding-right"),O=t(M,"margin-left"),A=t(M,"margin-right"),N=M.getPropertyValue("box-sizing");if(N&&N==="border-box")_=D+O+A;else{const{clientWidth:B,offsetWidth:L}=I;_=D+z+R+O+A+(L-B)}}j&&(I.style.transform=j),F&&(I.style.webkitTransform=F),n.roundLengths&&(_=Math.floor(_))}else _=(v-(n.slidesPerView-1)*b)/n.slidesPerView,n.roundLengths&&(_=Math.floor(_)),I&&(I.style[e.getDirectionLabel("width")]=`${_}px`);I&&(I.swiperSlideSize=_),p.push(_),n.centeredSlides?(C=C+_/2+S/2+b,S===0&&$!==0&&(C=C-v/2-b),$===0&&(C=C-v/2-b),Math.abs(C)<1/1e3&&(C=0),n.roundLengths&&(C=Math.floor(C)),P%n.slidesPerGroup===0&&d.push(C),h.push(C)):(n.roundLengths&&(C=Math.floor(C)),(P-Math.min(e.params.slidesPerGroupSkip,P))%e.params.slidesPerGroup===0&&d.push(C),h.push(C),C=C+_+b),e.virtualSize+=_+b,S=_,P+=1}}if(e.virtualSize=Math.max(e.virtualSize,v)+y,o&&a&&(n.effect==="slide"||n.effect==="coverflow")&&(r.style.width=`${e.virtualSize+b}px`),n.setWrapperSize&&(r.style[e.getDirectionLabel("width")]=`${e.virtualSize+b}px`),k&&e.grid.updateWrapperSize(_,d),!n.centeredSlides){const $=n.slidesPerView!=="auto"&&n.slidesPerView%1!==0,I=n.snapToSlideEdge&&!n.loop&&(n.slidesPerView==="auto"||$);let M=d.length;if(I){let F;if(n.slidesPerView==="auto"){F=1;let D=0;for(let z=p.length-1;z>=0&&(D+=p[z]+(z<p.length-1?b:0),D<=v);z-=1)F=p.length-z}else F=Math.floor(n.slidesPerView);M=Math.max(f-F,0)}const j=[];for(let F=0;F<d.length;F+=1){let D=d[F];n.roundLengths&&(D=Math.floor(D)),I?F<=M&&j.push(D):d[F]<=e.virtualSize-v&&j.push(D)}d=j,Math.floor(e.virtualSize-v)-Math.floor(d[d.length-1])>1&&(I||d.push(e.virtualSize-v))}if(l&&n.loop){const $=p[0]+b;if(n.slidesPerGroup>1){const I=Math.ceil((e.virtual.slidesBefore+e.virtual.slidesAfter)/n.slidesPerGroup),M=$*n.slidesPerGroup;for(let j=0;j<I;j+=1)d.push(d[d.length-1]+M)}for(let I=0;I<e.virtual.slidesBefore+e.virtual.slidesAfter;I+=1)n.slidesPerGroup===1&&d.push(d[d.length-1]+$),h.push(h[h.length-1]+$),e.virtualSize+=$}if(d.length===0&&(d=[0]),b!==0){const $=e.isHorizontal()&&o?"marginLeft":e.getDirectionLabel("marginRight");c.filter((I,M)=>!n.cssMode||n.loop?!0:M!==c.length-1).forEach(I=>{I.style[$]=`${b}px`})}if(n.centeredSlides&&n.centeredSlidesBounds){let $=0;p.forEach(M=>{$+=M+(b||0)}),$-=b;const I=$>v?$-v:0;d=d.map(M=>M<=0?-m:M>I?I+y:M)}if(n.centerInsufficientSlides){let $=0;if(p.forEach(I=>{$+=I+(b||0)}),$-=b,$<v){const I=(v-$)/2;d.forEach((M,j)=>{d[j]=M-I}),h.forEach((M,j)=>{h[j]=M+I})}}if(Object.assign(e,{slides:c,snapGrid:d,slidesGrid:h,slidesSizesGrid:p}),n.centeredSlides&&n.cssMode&&!n.centeredSlidesBounds){zi(r,"--swiper-centered-offset-before",`${-d[0]}px`),zi(r,"--swiper-centered-offset-after",`${e.size/2-p[p.length-1]/2}px`);const $=-e.snapGrid[0],I=-e.slidesGrid[0];e.snapGrid=e.snapGrid.map(M=>M+$),e.slidesGrid=e.slidesGrid.map(M=>M+I)}if(f!==s&&e.emit("slidesLengthChange"),d.length!==w&&(e.params.watchOverflow&&e.checkOverflow(),e.emit("snapGridLengthChange")),h.length!==g&&e.emit("slidesGridLengthChange"),n.watchSlidesProgress&&e.updateSlidesOffset(),e.emit("slidesUpdated"),!l&&!n.cssMode&&(n.effect==="slide"||n.effect==="fade")){const $=`${n.containerModifierClass}backface-hidden`,I=e.el.classList.contains($);f<=n.maxBackfaceHiddenSlides?I||e.el.classList.add($):I&&e.el.classList.remove($)}}function L6(e){const t=this,n=[],r=t.virtual&&t.params.virtual.enabled;let i=0,o;typeof e=="number"?t.setTransition(e):e===!0&&t.setTransition(t.params.speed);const a=l=>r?t.slides[t.getSlideIndexByData(l)]:t.slides[l];if(t.params.slidesPerView!=="auto"&&t.params.slidesPerView>1)if(t.params.centeredSlides)(t.visibleSlides||[]).forEach(l=>{n.push(l)});else for(o=0;o<Math.ceil(t.params.slidesPerView);o+=1){const l=t.activeIndex+o;if(l>t.slides.length&&!r)break;n.push(a(l))}else n.push(a(t.activeIndex));for(o=0;o<n.length;o+=1)if(typeof n[o]<"u"){const l=n[o].offsetHeight;i=l>i?l:i}(i||i===0)&&(t.wrapperEl.style.height=`${i}px`)}function R6(){const e=this,t=e.slides,n=e.isElement?e.isHorizontal()?e.wrapperEl.offsetLeft:e.wrapperEl.offsetTop:0;for(let r=0;r<t.length;r+=1)t[r].swiperSlideOffset=(e.isHorizontal()?t[r].offsetLeft:t[r].offsetTop)-n-e.cssOverflowAdjustment()}const L1=(e,t,n)=>{t&&!e.classList.contains(n)?e.classList.add(n):!t&&e.classList.contains(n)&&e.classList.remove(n)};function F6(e=this&&this.translate||0){const t=this,n=t.params,{slides:r,rtlTranslate:i,snapGrid:o}=t;if(r.length===0)return;typeof r[0].swiperSlideOffset>"u"&&t.updateSlidesOffset();let a=-e;i&&(a=e),t.visibleSlidesIndexes=[],t.visibleSlides=[];let l=n.spaceBetween;typeof l=="string"&&l.indexOf("%")>=0?l=parseFloat(l.replace("%",""))/100*t.size:typeof l=="string"&&(l=parseFloat(l));for(let s=0;s<r.length;s+=1){const c=r[s];let f=c.swiperSlideOffset;n.cssMode&&n.centeredSlides&&(f-=r[0].swiperSlideOffset);const d=(a+(n.centeredSlides?t.minTranslate():0)-f)/(c.swiperSlideSize+l),h=(a-o[0]+(n.centeredSlides?t.minTranslate():0)-f)/(c.swiperSlideSize+l),p=-(a-f),m=p+t.slidesSizesGrid[s],y=p>=0&&p<=t.size-t.slidesSizesGrid[s],w=p>=0&&p<t.size-1||m>1&&m<=t.size||p<=0&&m>=t.size;w&&(t.visibleSlides.push(c),t.visibleSlidesIndexes.push(s)),L1(c,w,n.slideVisibleClass),L1(c,y,n.slideFullyVisibleClass),c.progress=i?-d:d,c.originalProgress=i?-h:h}}function z6(e){const t=this;if(typeof e>"u"){const f=t.rtlTranslate?-1:1;e=t&&t.translate&&t.translate*f||0}const n=t.params,r=t.maxTranslate()-t.minTranslate();let{progress:i,isBeginning:o,isEnd:a,progressLoop:l}=t;const s=o,c=a;if(r===0)i=0,o=!0,a=!0;else{i=(e-t.minTranslate())/r;const f=Math.abs(e-t.minTranslate())<1,d=Math.abs(e-t.maxTranslate())<1;o=f||i<=0,a=d||i>=1,f&&(i=0),d&&(i=1)}if(n.loop){const f=t.getSlideIndexByData(0),d=t.getSlideIndexByData(t.slides.length-1),h=t.slidesGrid[f],p=t.slidesGrid[d],m=t.slidesGrid[t.slidesGrid.length-1],y=Math.abs(e);y>=h?l=(y-h)/m:l=(y+m-p)/m,l>1&&(l-=1)}Object.assign(t,{progress:i,progressLoop:l,isBeginning:o,isEnd:a}),(n.watchSlidesProgress||n.centeredSlides&&n.autoHeight)&&t.updateSlidesProgress(e),o&&!s&&t.emit("reachBeginning toEdge"),a&&!c&&t.emit("reachEnd toEdge"),(s&&!o||c&&!a)&&t.emit("fromEdge"),t.emit("progress",i)}const Kf=(e,t,n)=>{t&&!e.classList.contains(n)?e.classList.add(n):!t&&e.classList.contains(n)&&e.classList.remove(n)};function N6(){const e=this,{slides:t,params:n,slidesEl:r,activeIndex:i}=e,o=e.virtual&&n.virtual.enabled,a=e.grid&&n.grid&&n.grid.rows>1,l=d=>Dn(r,`.${n.slideClass}${d}, swiper-slide${d}`)[0];let s,c,f;if(o)if(n.loop){let d=i-e.virtual.slidesBefore;d<0&&(d=e.virtual.slides.length+d),d>=e.virtual.slides.length&&(d-=e.virtual.slides.length),s=l(`[data-swiper-slide-index="${d}"]`)}else s=l(`[data-swiper-slide-index="${i}"]`);else a?(s=t.find(d=>d.column===i),f=t.find(d=>d.column===i+1),c=t.find(d=>d.column===i-1)):s=t[i];s&&(a||(f=E6(s,`.${n.slideClass}, swiper-slide`)[0],n.loop&&!f&&(f=t[0]),c=C6(s,`.${n.slideClass}, swiper-slide`)[0],n.loop&&!c===0&&(c=t[t.length-1]))),t.forEach(d=>{Kf(d,d===s,n.slideActiveClass),Kf(d,d===f,n.slideNextClass),Kf(d,d===c,n.slidePrevClass)}),e.emitSlidesClasses()}const rc=(e,t)=>{if(!e||e.destroyed||!e.params)return;const n=()=>e.isElement?"swiper-slide":`.${e.params.slideClass}`,r=t.closest(n());if(r){let i=r.querySelector(`.${e.params.lazyPreloaderClass}`);!i&&e.isElement&&(r.shadowRoot?i=r.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`):requestAnimationFrame(()=>{r.shadowRoot&&(i=r.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`),i&&!i.lazyPreloaderManaged&&i.remove())})),i&&!i.lazyPreloaderManaged&&i.remove()}},Qf=(e,t)=>{if(!e.slides[t])return;const n=e.slides[t].querySelector('[loading="lazy"]');n&&n.removeAttribute("loading")},gm=e=>{if(!e||e.destroyed||!e.params)return;let t=e.params.lazyPreloadPrevNext;const n=e.slides.length;if(!n||!t||t<0)return;t=Math.min(t,n);const r=e.params.slidesPerView==="auto"?e.slidesPerViewDynamic():Math.ceil(e.params.slidesPerView),i=e.activeIndex;if(e.params.grid&&e.params.grid.rows>1){const a=i,l=[a-t];l.push(...Array.from({length:t}).map((s,c)=>a+r+c)),e.slides.forEach((s,c)=>{l.includes(s.column)&&Qf(e,c)});return}const o=i+r-1;if(e.params.rewind||e.params.loop)for(let a=i-t;a<=o+t;a+=1){const l=(a%n+n)%n;(l<i||l>o)&&Qf(e,l)}else for(let a=Math.max(i-t,0);a<=Math.min(o+t,n-1);a+=1)a!==i&&(a>o||a<i)&&Qf(e,a)};function B6(e){const{slidesGrid:t,params:n}=e,r=e.rtlTranslate?e.translate:-e.translate;let i;for(let o=0;o<t.length;o+=1)typeof t[o+1]<"u"?r>=t[o]&&r<t[o+1]-(t[o+1]-t[o])/2?i=o:r>=t[o]&&r<t[o+1]&&(i=o+1):r>=t[o]&&(i=o);return n.normalizeSlideIndex&&(i<0||typeof i>"u")&&(i=0),i}function V6(e){const t=this,n=t.rtlTranslate?t.translate:-t.translate,{snapGrid:r,params:i,activeIndex:o,realIndex:a,snapIndex:l}=t;let s=e,c;const f=p=>{let m=p-t.virtual.slidesBefore;return m<0&&(m=t.virtual.slides.length+m),m>=t.virtual.slides.length&&(m-=t.virtual.slides.length),m};if(typeof s>"u"&&(s=B6(t)),r.indexOf(n)>=0)c=r.indexOf(n);else{const p=Math.min(i.slidesPerGroupSkip,s);c=p+Math.floor((s-p)/i.slidesPerGroup)}if(c>=r.length&&(c=r.length-1),s===o&&!t.params.loop){c!==l&&(t.snapIndex=c,t.emit("snapIndexChange"));return}if(s===o&&t.params.loop&&t.virtual&&t.params.virtual.enabled){t.realIndex=f(s);return}const d=t.grid&&i.grid&&i.grid.rows>1;let h;if(t.virtual&&i.virtual.enabled)i.loop?h=f(s):h=s;else if(d){const p=t.slides.find(y=>y.column===s);let m=parseInt(p.getAttribute("data-swiper-slide-index"),10);Number.isNaN(m)&&(m=Math.max(t.slides.indexOf(p),0)),h=Math.floor(m/i.grid.rows)}else if(t.slides[s]){const p=t.slides[s].getAttribute("data-swiper-slide-index");p?h=parseInt(p,10):h=s}else h=s;Object.assign(t,{previousSnapIndex:l,snapIndex:c,previousRealIndex:a,realIndex:h,previousIndex:o,activeIndex:s}),t.initialized&&gm(t),t.emit("activeIndexChange"),t.emit("snapIndexChange"),(t.initialized||t.params.runCallbacksOnInit)&&(a!==h&&t.emit("realIndexChange"),t.emit("slideChange"))}function W6(e,t){const n=this,r=n.params;let i=e.closest(`.${r.slideClass}, swiper-slide`);!i&&n.isElement&&t&&t.length>1&&t.includes(e)&&[...t.slice(t.indexOf(e)+1,t.length)].forEach(l=>{!i&&l.matches&&l.matches(`.${r.slideClass}, swiper-slide`)&&(i=l)});let o=!1,a;if(i){for(let l=0;l<n.slides.length;l+=1)if(n.slides[l]===i){o=!0,a=l;break}}if(i&&o)n.clickedSlide=i,n.virtual&&n.params.virtual.enabled?n.clickedIndex=parseInt(i.getAttribute("data-swiper-slide-index"),10):n.clickedIndex=a;else{n.clickedSlide=void 0,n.clickedIndex=void 0;return}r.slideToClickedSlide&&n.clickedIndex!==void 0&&n.clickedIndex!==n.activeIndex&&n.slideToClickedSlide()}var U6={updateSize:A6,updateSlides:D6,updateAutoHeight:L6,updateSlidesOffset:R6,updateSlidesProgress:F6,updateProgress:z6,updateSlidesClasses:N6,updateActiveIndex:V6,updateClickedSlide:W6};function H6(e=this.isHorizontal()?"x":"y"){const t=this,{params:n,rtlTranslate:r,translate:i,wrapperEl:o}=t;if(n.virtualTranslate)return r?-i:i;if(n.cssMode)return i;let a=x6(o,e);return a+=t.cssOverflowAdjustment(),r&&(a=-a),a||0}function G6(e,t){const n=this,{rtlTranslate:r,params:i,wrapperEl:o,progress:a}=n;let l=0,s=0;const c=0;n.isHorizontal()?l=r?-e:e:s=e,i.roundLengths&&(l=Math.floor(l),s=Math.floor(s)),n.previousTranslate=n.translate,n.translate=n.isHorizontal()?l:s,i.cssMode?o[n.isHorizontal()?"scrollLeft":"scrollTop"]=n.isHorizontal()?-l:-s:i.virtualTranslate||(n.isHorizontal()?l-=n.cssOverflowAdjustment():s-=n.cssOverflowAdjustment(),o.style.transform=`translate3d(${l}px, ${s}px, ${c}px)`);let f;const d=n.maxTranslate()-n.minTranslate();d===0?f=0:f=(e-n.minTranslate())/d,f!==a&&n.updateProgress(e),n.emit("setTranslate",n.translate,t)}function q6(){return-this.snapGrid[0]}function Y6(){return-this.snapGrid[this.snapGrid.length-1]}function X6(e=0,t=this.params.speed,n=!0,r=!0,i){const o=this,{params:a,wrapperEl:l}=o;if(o.animating&&a.preventInteractionOnTransition)return!1;const s=o.minTranslate(),c=o.maxTranslate();let f;if(r&&e>s?f=s:r&&e<c?f=c:f=e,o.updateProgress(f),a.cssMode){const d=o.isHorizontal();if(t===0)l[d?"scrollLeft":"scrollTop"]=-f;else{if(!o.support.smoothScroll)return e_({swiper:o,targetPosition:-f,side:d?"left":"top"}),!0;l.scrollTo({[d?"left":"top"]:-f,behavior:"smooth"})}return!0}return t===0?(o.setTransition(0),o.setTranslate(f),n&&(o.emit("beforeTransitionStart",t,i),o.emit("transitionEnd"))):(o.setTransition(t),o.setTranslate(f),n&&(o.emit("beforeTransitionStart",t,i),o.emit("transitionStart")),o.animating||(o.animating=!0,o.onTranslateToWrapperTransitionEnd||(o.onTranslateToWrapperTransitionEnd=function(h){!o||o.destroyed||h.target===this&&(o.wrapperEl.removeEventListener("transitionend",o.onTranslateToWrapperTransitionEnd),o.onTranslateToWrapperTransitionEnd=null,delete o.onTranslateToWrapperTransitionEnd,o.animating=!1,n&&o.emit("transitionEnd"))}),o.wrapperEl.addEventListener("transitionend",o.onTranslateToWrapperTransitionEnd))),!0}var K6={getTranslate:H6,setTranslate:G6,minTranslate:q6,maxTranslate:Y6,translateTo:X6};function Q6(e,t){const n=this;n.params.cssMode||(n.wrapperEl.style.transitionDuration=`${e}ms`,n.wrapperEl.style.transitionDelay=e===0?"0ms":""),n.emit("setTransition",e,t)}function a_({swiper:e,runCallbacks:t,direction:n,step:r}){const{activeIndex:i,previousIndex:o}=e;let a=n;a||(i>o?a="next":i<o?a="prev":a="reset"),e.emit(`transition${r}`),t&&a==="reset"?e.emit(`slideResetTransition${r}`):t&&i!==o&&(e.emit(`slideChangeTransition${r}`),a==="next"?e.emit(`slideNextTransition${r}`):e.emit(`slidePrevTransition${r}`))}function Z6(e=!0,t){const n=this,{params:r}=n;r.cssMode||(r.autoHeight&&n.updateAutoHeight(),a_({swiper:n,runCallbacks:e,direction:t,step:"Start"}))}function J6(e=!0,t){const n=this,{params:r}=n;n.animating=!1,!r.cssMode&&(n.setTransition(0),a_({swiper:n,runCallbacks:e,direction:t,step:"End"}))}var eL={setTransition:Q6,transitionStart:Z6,transitionEnd:J6};function tL(e=0,t,n=!0,r,i){typeof e=="string"&&(e=parseInt(e,10));const o=this;let a=e;a<0&&(a=0);const{params:l,snapGrid:s,slidesGrid:c,previousIndex:f,activeIndex:d,rtlTranslate:h,wrapperEl:p,enabled:m}=o;if(!m&&!r&&!i||o.destroyed||o.animating&&l.preventInteractionOnTransition)return!1;typeof t>"u"&&(t=o.params.speed);const y=Math.min(o.params.slidesPerGroupSkip,a);let w=y+Math.floor((a-y)/o.params.slidesPerGroup);w>=s.length&&(w=s.length-1);const g=-s[w];if(l.normalizeSlideIndex)for(let k=0;k<c.length;k+=1){const _=-Math.floor(g*100),T=Math.floor(c[k]*100),$=Math.floor(c[k+1]*100);typeof c[k+1]<"u"?_>=T&&_<$-($-T)/2?a=k:_>=T&&_<$&&(a=k+1):_>=T&&(a=k)}if(o.initialized&&a!==d&&(!o.allowSlideNext&&(h?g>o.translate&&g>o.minTranslate():g<o.translate&&g<o.minTranslate())||!o.allowSlidePrev&&g>o.translate&&g>o.maxTranslate()&&(d||0)!==a))return!1;a!==(f||0)&&n&&o.emit("beforeSlideChangeStart"),o.updateProgress(g);let v;a>d?v="next":a<d?v="prev":v="reset";const b=o.virtual&&o.params.virtual.enabled;if(!(b&&i)&&(h&&-g===o.translate||!h&&g===o.translate))return o.updateActiveIndex(a),l.autoHeight&&o.updateAutoHeight(),o.updateSlidesClasses(),l.effect!=="slide"&&o.setTranslate(g),v!=="reset"&&(o.transitionStart(n,v),o.transitionEnd(n,v)),!1;if(l.cssMode){const k=o.isHorizontal(),_=h?g:-g;if(t===0)b&&(o.wrapperEl.style.scrollSnapType="none",o._immediateVirtual=!0),b&&!o._cssModeVirtualInitialSet&&o.params.initialSlide>0?(o._cssModeVirtualInitialSet=!0,requestAnimationFrame(()=>{p[k?"scrollLeft":"scrollTop"]=_})):p[k?"scrollLeft":"scrollTop"]=_,b&&requestAnimationFrame(()=>{o.wrapperEl.style.scrollSnapType="",o._immediateVirtual=!1});else{if(!o.support.smoothScroll)return e_({swiper:o,targetPosition:_,side:k?"left":"top"}),!0;p.scrollTo({[k?"left":"top"]:_,behavior:"smooth"})}return!0}const P=o_().isSafari;return b&&!i&&P&&o.isElement&&o.virtual.update(!1,!1,a),o.setTransition(t),o.setTranslate(g),o.updateActiveIndex(a),o.updateSlidesClasses(),o.emit("beforeTransitionStart",t,r),o.transitionStart(n,v),t===0?o.transitionEnd(n,v):o.animating||(o.animating=!0,o.onSlideToWrapperTransitionEnd||(o.onSlideToWrapperTransitionEnd=function(_){!o||o.destroyed||_.target===this&&(o.wrapperEl.removeEventListener("transitionend",o.onSlideToWrapperTransitionEnd),o.onSlideToWrapperTransitionEnd=null,delete o.onSlideToWrapperTransitionEnd,o.transitionEnd(n,v))}),o.wrapperEl.addEventListener("transitionend",o.onSlideToWrapperTransitionEnd)),!0}function nL(e=0,t,n=!0,r){typeof e=="string"&&(e=parseInt(e,10));const i=this;if(i.destroyed)return;typeof t>"u"&&(t=i.params.speed);const o=i.grid&&i.params.grid&&i.params.grid.rows>1;let a=e;if(i.params.loop)if(i.virtual&&i.params.virtual.enabled)a=a+i.virtual.slidesBefore;else{let l;if(o){const y=a*i.params.grid.rows;l=i.slides.find(w=>w.getAttribute("data-swiper-slide-index")*1===y).column}else l=i.getSlideIndexByData(a);const s=o?Math.ceil(i.slides.length/i.params.grid.rows):i.slides.length,{centeredSlides:c,slidesOffsetBefore:f,slidesOffsetAfter:d}=i.params,h=c||!!f||!!d;let p=i.params.slidesPerView;p==="auto"?p=i.slidesPerViewDynamic():(p=Math.ceil(parseFloat(i.params.slidesPerView,10)),h&&p%2===0&&(p=p+1));let m=s-l<p;if(h&&(m=m||l<Math.ceil(p/2)),r&&h&&i.params.slidesPerView!=="auto"&&!o&&(m=!1),m){const y=h?l<i.activeIndex?"prev":"next":l-i.activeIndex-1<i.params.slidesPerView?"next":"prev";i.loopFix({direction:y,slideTo:!0,activeSlideIndex:y==="next"?l+1:l-s+1,slideRealIndex:y==="next"?i.realIndex:void 0})}if(o){const y=a*i.params.grid.rows;a=i.slides.find(w=>w.getAttribute("data-swiper-slide-index")*1===y).column}else a=i.getSlideIndexByData(a)}return requestAnimationFrame(()=>{i.slideTo(a,t,n,r)}),i}function rL(e,t=!0,n){const r=this,{enabled:i,params:o,animating:a}=r;if(!i||r.destroyed)return r;typeof e>"u"&&(e=r.params.speed);let l=o.slidesPerGroup;o.slidesPerView==="auto"&&o.slidesPerGroup===1&&o.slidesPerGroupAuto&&(l=Math.max(r.slidesPerViewDynamic("current",!0),1));const s=r.activeIndex<o.slidesPerGroupSkip?1:l,c=r.virtual&&o.virtual.enabled;if(o.loop){if(a&&!c&&o.loopPreventsSliding)return!1;if(r.loopFix({direction:"next"}),r._clientLeft=r.wrapperEl.clientLeft,r.activeIndex===r.slides.length-1&&o.cssMode)return requestAnimationFrame(()=>{r.slideTo(r.activeIndex+s,e,t,n)}),!0}return o.rewind&&r.isEnd?r.slideTo(0,e,t,n):r.slideTo(r.activeIndex+s,e,t,n)}function iL(e,t=!0,n){const r=this,{params:i,snapGrid:o,slidesGrid:a,rtlTranslate:l,enabled:s,animating:c}=r;if(!s||r.destroyed)return r;typeof e>"u"&&(e=r.params.speed);const f=r.virtual&&i.virtual.enabled;if(i.loop){if(c&&!f&&i.loopPreventsSliding)return!1;r.loopFix({direction:"prev"}),r._clientLeft=r.wrapperEl.clientLeft}const d=l?r.translate:-r.translate;function h(v){return v<0?-Math.floor(Math.abs(v)):Math.floor(v)}const p=h(d),m=o.map(v=>h(v)),y=i.freeMode&&i.freeMode.enabled;let w=o[m.indexOf(p)-1];if(typeof w>"u"&&(i.cssMode||y)){let v;o.forEach((b,C)=>{p>=b&&(v=C)}),typeof v<"u"&&(w=y?o[v]:o[v>0?v-1:v])}let g=0;if(typeof w<"u"&&(g=a.indexOf(w),g<0&&(g=r.activeIndex-1),i.slidesPerView==="auto"&&i.slidesPerGroup===1&&i.slidesPerGroupAuto&&(g=g-r.slidesPerViewDynamic("previous",!0)+1,g=Math.max(g,0))),i.rewind&&r.isBeginning){const v=r.params.virtual&&r.params.virtual.enabled&&r.virtual?r.virtual.slides.length-1:r.slides.length-1;return r.slideTo(v,e,t,n)}else if(i.loop&&r.activeIndex===0&&i.cssMode)return requestAnimationFrame(()=>{r.slideTo(g,e,t,n)}),!0;return r.slideTo(g,e,t,n)}function oL(e,t=!0,n){const r=this;if(!r.destroyed)return typeof e>"u"&&(e=r.params.speed),r.slideTo(r.activeIndex,e,t,n)}function aL(e,t=!0,n,r=.5){const i=this;if(i.destroyed)return;typeof e>"u"&&(e=i.params.speed);let o=i.activeIndex;const a=Math.min(i.params.slidesPerGroupSkip,o),l=a+Math.floor((o-a)/i.params.slidesPerGroup),s=i.rtlTranslate?i.translate:-i.translate;if(s>=i.snapGrid[l]){const c=i.snapGrid[l],f=i.snapGrid[l+1];s-c>(f-c)*r&&(o+=i.params.slidesPerGroup)}else{const c=i.snapGrid[l-1],f=i.snapGrid[l];s-c<=(f-c)*r&&(o-=i.params.slidesPerGroup)}return o=Math.max(o,0),o=Math.min(o,i.slidesGrid.length-1),i.slideTo(o,e,t,n)}function sL(){const e=this;if(e.destroyed)return;const{params:t,slidesEl:n}=e,r=t.slidesPerView==="auto"?e.slidesPerViewDynamic():t.slidesPerView;let i=e.getSlideIndexWhenGrid(e.clickedIndex),o;const a=e.isElement?"swiper-slide":`.${t.slideClass}`,l=e.grid&&e.params.grid&&e.params.grid.rows>1;if(t.loop){if(e.animating)return;o=parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"),10),t.centeredSlides?e.slideToLoop(o):i>(l?(e.slides.length-r)/2-(e.params.grid.rows-1):e.slides.length-r)?(e.loopFix(),i=e.getSlideIndex(Dn(n,`${a}[data-swiper-slide-index="${o}"]`)[0]),JE(()=>{e.slideTo(i)})):e.slideTo(i)}else e.slideTo(i)}var lL={slideTo:tL,slideToLoop:nL,slideNext:rL,slidePrev:iL,slideReset:oL,slideToClosest:aL,slideToClickedSlide:sL};function cL(e,t){const n=this,{params:r,slidesEl:i}=n;if(!r.loop||n.virtual&&n.params.virtual.enabled)return;const o=()=>{Dn(i,`.${r.slideClass}, swiper-slide`).forEach((m,y)=>{m.setAttribute("data-swiper-slide-index",y)})},a=()=>{const p=Dn(i,`.${r.slideBlankClass}`);p.forEach(m=>{m.remove()}),p.length>0&&(n.recalcSlides(),n.updateSlides())},l=n.grid&&r.grid&&r.grid.rows>1;r.loopAddBlankSlides&&(r.slidesPerGroup>1||l)&&a();const s=r.slidesPerGroup*(l?r.grid.rows:1),c=n.slides.length%s!==0,f=l&&n.slides.length%r.grid.rows!==0,d=p=>{for(let m=0;m<p;m+=1){const y=n.isElement?nu("swiper-slide",[r.slideBlankClass]):nu("div",[r.slideClass,r.slideBlankClass]);n.slidesEl.append(y)}};if(c){if(r.loopAddBlankSlides){const p=s-n.slides.length%s;d(p),n.recalcSlides(),n.updateSlides()}else tu("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");o()}else if(f){if(r.loopAddBlankSlides){const p=r.grid.rows-n.slides.length%r.grid.rows;d(p),n.recalcSlides(),n.updateSlides()}else tu("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");o()}else o();const h=r.centeredSlides||!!r.slidesOffsetBefore||!!r.slidesOffsetAfter;n.loopFix({slideRealIndex:e,direction:h?void 0:"next",initial:t})}function uL({slideRealIndex:e,slideTo:t=!0,direction:n,setTranslate:r,activeSlideIndex:i,initial:o,byController:a,byMousewheel:l}={}){const s=this;if(!s.params.loop)return;s.emit("beforeLoopFix");const{slides:c,allowSlidePrev:f,allowSlideNext:d,slidesEl:h,params:p}=s,{centeredSlides:m,slidesOffsetBefore:y,slidesOffsetAfter:w,initialSlide:g}=p,v=m||!!y||!!w;if(s.allowSlidePrev=!0,s.allowSlideNext=!0,s.virtual&&p.virtual.enabled){t&&(!v&&s.snapIndex===0?s.slideTo(s.virtual.slides.length,0,!1,!0):v&&s.snapIndex<p.slidesPerView?s.slideTo(s.virtual.slides.length+s.snapIndex,0,!1,!0):s.snapIndex===s.snapGrid.length-1&&s.slideTo(s.virtual.slidesBefore,0,!1,!0)),s.allowSlidePrev=f,s.allowSlideNext=d,s.emit("loopFix");return}let b=p.slidesPerView;b==="auto"?b=s.slidesPerViewDynamic():(b=Math.ceil(parseFloat(p.slidesPerView,10)),v&&b%2===0&&(b=b+1));const C=p.slidesPerGroupAuto?b:p.slidesPerGroup;let S=v?Math.max(C,Math.ceil(b/2)):C;S%C!==0&&(S+=C-S%C),S+=p.loopAdditionalSlides,s.loopedSlides=S;const P=s.grid&&p.grid&&p.grid.rows>1;c.length<b+S||s.params.effect==="cards"&&c.length<b+S*2?tu("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled or not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"):P&&p.grid.fill==="row"&&tu("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");const k=[],_=[],T=P?Math.ceil(c.length/p.grid.rows):c.length,$=o&&T-g<b&&!v;let I=$?g:s.activeIndex;typeof i>"u"?i=s.getSlideIndex(c.find(O=>O.classList.contains(p.slideActiveClass))):I=i;const M=n==="next"||!n,j=n==="prev"||!n;let F=0,D=0;const R=(P?c[i].column:i)+(v&&typeof r>"u"?-b/2+.5:0);if(R<S){F=Math.max(S-R,C);for(let O=0;O<S-R;O+=1){const A=O-Math.floor(O/T)*T;if(P){const N=T-A-1;for(let B=c.length-1;B>=0;B-=1)c[B].column===N&&k.push(B)}else k.push(T-A-1)}}else if(R+b>T-S){D=Math.max(R-(T-S*2),C),$&&(D=Math.max(D,b-T+g+1));for(let O=0;O<D;O+=1){const A=O-Math.floor(O/T)*T;P?c.forEach((N,B)=>{N.column===A&&_.push(B)}):_.push(A)}}if(s.__preventObserver__=!0,requestAnimationFrame(()=>{s.__preventObserver__=!1}),s.params.effect==="cards"&&c.length<b+S*2&&(_.includes(i)&&_.splice(_.indexOf(i),1),k.includes(i)&&k.splice(k.indexOf(i),1)),j&&k.forEach(O=>{c[O].swiperLoopMoveDOM=!0,h.prepend(c[O]),c[O].swiperLoopMoveDOM=!1}),M&&_.forEach(O=>{c[O].swiperLoopMoveDOM=!0,h.append(c[O]),c[O].swiperLoopMoveDOM=!1}),s.recalcSlides(),p.slidesPerView==="auto"?s.updateSlides():P&&(k.length>0&&j||_.length>0&&M)&&s.slides.forEach((O,A)=>{s.grid.updateSlide(A,O,s.slides)}),p.watchSlidesProgress&&s.updateSlidesOffset(),t){if(k.length>0&&j){if(typeof e>"u"){const O=s.slidesGrid[I],N=s.slidesGrid[I+F]-O;l?s.setTranslate(s.translate-N):(s.slideTo(I+Math.ceil(F),0,!1,!0),r&&(s.touchEventsData.startTranslate=s.touchEventsData.startTranslate-N,s.touchEventsData.currentTranslate=s.touchEventsData.currentTranslate-N))}else if(r){const O=P?k.length/p.grid.rows:k.length;s.slideTo(s.activeIndex+O,0,!1,!0),s.touchEventsData.currentTranslate=s.translate}}else if(_.length>0&&M)if(typeof e>"u"){const O=s.slidesGrid[I],N=s.slidesGrid[I-D]-O;l?s.setTranslate(s.translate-N):(s.slideTo(I-D,0,!1,!0),r&&(s.touchEventsData.startTranslate=s.touchEventsData.startTranslate-N,s.touchEventsData.currentTranslate=s.touchEventsData.currentTranslate-N))}else{const O=P?_.length/p.grid.rows:_.length;s.slideTo(s.activeIndex-O,0,!1,!0)}}if(s.allowSlidePrev=f,s.allowSlideNext=d,s.controller&&s.controller.control&&!a){const O={slideRealIndex:e,direction:n,setTranslate:r,activeSlideIndex:i,byController:!0};Array.isArray(s.controller.control)?s.controller.control.forEach(A=>{!A.destroyed&&A.params.loop&&A.loopFix({...O,slideTo:A.params.slidesPerView===p.slidesPerView?t:!1})}):s.controller.control instanceof s.constructor&&s.controller.control.params.loop&&s.controller.control.loopFix({...O,slideTo:s.controller.control.params.slidesPerView===p.slidesPerView?t:!1})}s.emit("loopFix")}function dL(){const e=this,{params:t,slidesEl:n}=e;if(!t.loop||!n||e.virtual&&e.params.virtual.enabled)return;e.recalcSlides();const r=[];e.slides.forEach(i=>{const o=typeof i.swiperSlideIndex>"u"?i.getAttribute("data-swiper-slide-index")*1:i.swiperSlideIndex;r[o]=i}),e.slides.forEach(i=>{i.removeAttribute("data-swiper-slide-index")}),r.forEach(i=>{n.append(i)}),e.recalcSlides(),e.slideTo(e.realIndex,0)}var fL={loopCreate:cL,loopFix:uL,loopDestroy:dL};function pL(e){const t=this;if(!t.params.simulateTouch||t.params.watchOverflow&&t.isLocked||t.params.cssMode)return;const n=t.params.touchEventsTarget==="container"?t.el:t.wrapperEl;t.isElement&&(t.__preventObserver__=!0),n.style.cursor="move",n.style.cursor=e?"grabbing":"grab",t.isElement&&requestAnimationFrame(()=>{t.__preventObserver__=!1})}function hL(){const e=this;e.params.watchOverflow&&e.isLocked||e.params.cssMode||(e.isElement&&(e.__preventObserver__=!0),e[e.params.touchEventsTarget==="container"?"el":"wrapperEl"].style.cursor="",e.isElement&&requestAnimationFrame(()=>{e.__preventObserver__=!1}))}var mL={setGrabCursor:pL,unsetGrabCursor:hL};function gL(e,t=this){function n(r){if(!r||r===zn()||r===kt())return null;r.assignedSlot&&(r=r.assignedSlot);const i=r.closest(e);return!i&&!r.getRootNode?null:i||n(r.getRootNode().host)}return n(t)}function R1(e,t,n){const r=kt(),{params:i}=e,o=i.edgeSwipeDetection,a=i.edgeSwipeThreshold;return o&&(n<=a||n>=r.innerWidth-a)?o==="prevent"?(t.preventDefault(),!0):!1:!0}function vL(e){const t=this,n=zn();let r=e;r.originalEvent&&(r=r.originalEvent);const i=t.touchEventsData;if(r.type==="pointerdown"){if(i.pointerId!==null&&i.pointerId!==r.pointerId)return;i.pointerId=r.pointerId}else r.type==="touchstart"&&r.targetTouches.length===1&&(i.touchId=r.targetTouches[0].identifier);if(r.type==="touchstart"){R1(t,r,r.targetTouches[0].pageX);return}const{params:o,touches:a,enabled:l}=t;if(!l||!o.simulateTouch&&r.pointerType==="mouse"||t.animating&&o.preventInteractionOnTransition)return;!t.animating&&o.cssMode&&o.loop&&t.loopFix();let s=r.target;if(o.touchEventsTarget==="wrapper"&&!S6(s,t.wrapperEl)||"which"in r&&r.which===3||"button"in r&&r.button>0||i.isTouched&&i.isMoved)return;const c=!!o.noSwipingClass&&o.noSwipingClass!=="",f=r.composedPath?r.composedPath():r.path;c&&r.target&&r.target.shadowRoot&&f&&(s=f[0]);const d=o.noSwipingSelector?o.noSwipingSelector:`.${o.noSwipingClass}`,h=!!(r.target&&r.target.shadowRoot);if(o.noSwiping&&(h?gL(d,s):s.closest(d))){t.allowClick=!0;return}if(o.swipeHandler&&!s.closest(o.swipeHandler))return;a.currentX=r.pageX,a.currentY=r.pageY;const p=a.currentX,m=a.currentY;if(!R1(t,r,p))return;Object.assign(i,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),a.startX=p,a.startY=m,i.touchStartTime=eu(),t.allowClick=!0,t.updateSize(),t.swipeDirection=void 0,o.threshold>0&&(i.allowThresholdMove=!1);let y=!0;s.matches(i.focusableElements)&&(y=!1,s.nodeName==="SELECT"&&(i.isTouched=!1)),n.activeElement&&n.activeElement.matches(i.focusableElements)&&n.activeElement!==s&&(r.pointerType==="mouse"||r.pointerType!=="mouse"&&!s.matches(i.focusableElements))&&n.activeElement.blur();const w=y&&t.allowTouchMove&&o.touchStartPreventDefault;(o.touchStartForcePreventDefault||w)&&!s.isContentEditable&&r.preventDefault(),o.freeMode&&o.freeMode.enabled&&t.freeMode&&t.animating&&!o.cssMode&&t.freeMode.onTouchStart(),t.emit("touchStart",r)}function yL(e){const t=zn(),n=this,r=n.touchEventsData,{params:i,touches:o,rtlTranslate:a,enabled:l}=n;if(!l||!i.simulateTouch&&e.pointerType==="mouse")return;let s=e;if(s.originalEvent&&(s=s.originalEvent),s.type==="pointermove"&&(r.touchId!==null||s.pointerId!==r.pointerId))return;let c;if(s.type==="touchmove"){if(c=[...s.changedTouches].find(P=>P.identifier===r.touchId),!c||c.identifier!==r.touchId)return}else c=s;if(!r.isTouched){r.startMoving&&r.isScrolling&&n.emit("touchMoveOpposite",s);return}const f=c.pageX,d=c.pageY;if(s.preventedByNestedSwiper){o.startX=f,o.startY=d;return}if(!n.allowTouchMove){s.target.matches(r.focusableElements)||(n.allowClick=!1),r.isTouched&&(Object.assign(o,{startX:f,startY:d,currentX:f,currentY:d}),r.touchStartTime=eu());return}if(i.touchReleaseOnEdges&&!i.loop)if(n.isVertical()){if(d<o.startY&&n.translate<=n.maxTranslate()||d>o.startY&&n.translate>=n.minTranslate()){r.isTouched=!1,r.isMoved=!1;return}}else{if(a&&(f>o.startX&&-n.translate<=n.maxTranslate()||f<o.startX&&-n.translate>=n.minTranslate()))return;if(!a&&(f<o.startX&&n.translate<=n.maxTranslate()||f>o.startX&&n.translate>=n.minTranslate()))return}if(t.activeElement&&t.activeElement.matches(r.focusableElements)&&t.activeElement!==s.target&&s.pointerType!=="mouse"&&t.activeElement.blur(),t.activeElement&&s.target===t.activeElement&&s.target.matches(r.focusableElements)){r.isMoved=!0,n.allowClick=!1;return}r.allowTouchCallbacks&&n.emit("touchMove",s),o.previousX=o.currentX,o.previousY=o.currentY,o.currentX=f,o.currentY=d;const h=o.currentX-o.startX,p=o.currentY-o.startY;if(n.params.threshold&&Math.sqrt(h**2+p**2)<n.params.threshold)return;if(typeof r.isScrolling>"u"){let P;n.isHorizontal()&&o.currentY===o.startY||n.isVertical()&&o.currentX===o.startX?r.isScrolling=!1:h*h+p*p>=25&&(P=Math.atan2(Math.abs(p),Math.abs(h))*180/Math.PI,r.isScrolling=n.isHorizontal()?P>i.touchAngle:90-P>i.touchAngle)}if(r.isScrolling&&n.emit("touchMoveOpposite",s),typeof r.startMoving>"u"&&(o.currentX!==o.startX||o.currentY!==o.startY)&&(r.startMoving=!0),r.isScrolling||s.type==="touchmove"&&r.preventTouchMoveFromPointerMove){r.isTouched=!1;return}if(!r.startMoving)return;n.allowClick=!1,!i.cssMode&&s.cancelable&&s.preventDefault(),i.touchMoveStopPropagation&&!i.nested&&s.stopPropagation();let m=n.isHorizontal()?h:p,y=n.isHorizontal()?o.currentX-o.previousX:o.currentY-o.previousY;i.oneWayMovement&&(m=Math.abs(m)*(a?1:-1),y=Math.abs(y)*(a?1:-1)),o.diff=m,m*=i.touchRatio,a&&(m=-m,y=-y);const w=n.touchesDirection;n.swipeDirection=m>0?"prev":"next",n.touchesDirection=y>0?"prev":"next";const g=n.params.loop&&!i.cssMode,v=n.touchesDirection==="next"&&n.allowSlideNext||n.touchesDirection==="prev"&&n.allowSlidePrev;if(!r.isMoved){if(g&&v&&n.loopFix({direction:n.swipeDirection}),r.startTranslate=n.getTranslate(),n.setTransition(0),n.animating){const P=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0,detail:{bySwiperTouchMove:!0}});n.wrapperEl.dispatchEvent(P)}r.allowMomentumBounce=!1,i.grabCursor&&(n.allowSlideNext===!0||n.allowSlidePrev===!0)&&n.setGrabCursor(!0),n.emit("sliderFirstMove",s)}let b;if(new Date().getTime(),i._loopSwapReset!==!1&&r.isMoved&&r.allowThresholdMove&&w!==n.touchesDirection&&g&&v&&Math.abs(m)>=1){Object.assign(o,{startX:f,startY:d,currentX:f,currentY:d,startTranslate:r.currentTranslate}),r.loopSwapReset=!0,r.startTranslate=r.currentTranslate;return}n.emit("sliderMove",s),r.isMoved=!0,r.currentTranslate=m+r.startTranslate;let C=!0,S=i.resistanceRatio;if(i.touchReleaseOnEdges&&(S=0),m>0?(g&&v&&!b&&r.allowThresholdMove&&r.currentTranslate>(i.centeredSlides?n.minTranslate()-n.slidesSizesGrid[n.activeIndex+1]-(i.slidesPerView!=="auto"&&n.slides.length-i.slidesPerView>=2?n.slidesSizesGrid[n.activeIndex+1]+n.params.spaceBetween:0)-n.params.spaceBetween:n.minTranslate())&&n.loopFix({direction:"prev",setTranslate:!0,activeSlideIndex:0}),r.currentTranslate>n.minTranslate()&&(C=!1,i.resistance&&(r.currentTranslate=n.minTranslate()-1+(-n.minTranslate()+r.startTranslate+m)**S))):m<0&&(g&&v&&!b&&r.allowThresholdMove&&r.currentTranslate<(i.centeredSlides?n.maxTranslate()+n.slidesSizesGrid[n.slidesSizesGrid.length-1]+n.params.spaceBetween+(i.slidesPerView!=="auto"&&n.slides.length-i.slidesPerView>=2?n.slidesSizesGrid[n.slidesSizesGrid.length-1]+n.params.spaceBetween:0):n.maxTranslate())&&n.loopFix({direction:"next",setTranslate:!0,activeSlideIndex:n.slides.length-(i.slidesPerView==="auto"?n.slidesPerViewDynamic():Math.ceil(parseFloat(i.slidesPerView,10)))}),r.currentTranslate<n.maxTranslate()&&(C=!1,i.resistance&&(r.currentTranslate=n.maxTranslate()+1-(n.maxTranslate()-r.startTranslate-m)**S))),C&&(s.preventedByNestedSwiper=!0),!n.allowSlideNext&&n.swipeDirection==="next"&&r.currentTranslate<r.startTranslate&&(r.currentTranslate=r.startTranslate),!n.allowSlidePrev&&n.swipeDirection==="prev"&&r.currentTranslate>r.startTranslate&&(r.currentTranslate=r.startTranslate),!n.allowSlidePrev&&!n.allowSlideNext&&(r.currentTranslate=r.startTranslate),i.threshold>0)if(Math.abs(m)>i.threshold||r.allowThresholdMove){if(!r.allowThresholdMove){r.allowThresholdMove=!0,o.startX=o.currentX,o.startY=o.currentY,r.currentTranslate=r.startTranslate,o.diff=n.isHorizontal()?o.currentX-o.startX:o.currentY-o.startY;return}}else{r.currentTranslate=r.startTranslate;return}!i.followFinger||i.cssMode||((i.freeMode&&i.freeMode.enabled&&n.freeMode||i.watchSlidesProgress)&&(n.updateActiveIndex(),n.updateSlidesClasses()),i.freeMode&&i.freeMode.enabled&&n.freeMode&&n.freeMode.onTouchMove(),n.updateProgress(r.currentTranslate),n.setTranslate(r.currentTranslate))}function xL(e){const t=this,n=t.touchEventsData;let r=e;r.originalEvent&&(r=r.originalEvent);let i;if(r.type==="touchend"||r.type==="touchcancel"){if(i=[...r.changedTouches].find(S=>S.identifier===n.touchId),!i||i.identifier!==n.touchId)return}else{if(n.touchId!==null||r.pointerId!==n.pointerId)return;i=r}if(["pointercancel","pointerout","pointerleave","contextmenu"].includes(r.type)&&!(["pointercancel","contextmenu"].includes(r.type)&&(t.browser.isSafari||t.browser.isWebView)))return;n.pointerId=null,n.touchId=null;const{params:a,touches:l,rtlTranslate:s,slidesGrid:c,enabled:f}=t;if(!f||!a.simulateTouch&&r.pointerType==="mouse")return;if(n.allowTouchCallbacks&&t.emit("touchEnd",r),n.allowTouchCallbacks=!1,!n.isTouched){n.isMoved&&a.grabCursor&&t.setGrabCursor(!1),n.isMoved=!1,n.startMoving=!1;return}a.grabCursor&&n.isMoved&&n.isTouched&&(t.allowSlideNext===!0||t.allowSlidePrev===!0)&&t.setGrabCursor(!1);const d=eu(),h=d-n.touchStartTime;if(t.allowClick){const S=r.path||r.composedPath&&r.composedPath();t.updateClickedSlide(S&&S[0]||r.target,S),t.emit("tap click",r),h<300&&d-n.lastClickTime<300&&t.emit("doubleTap doubleClick",r)}if(n.lastClickTime=eu(),JE(()=>{t.destroyed||(t.allowClick=!0)}),!n.isTouched||!n.isMoved||!t.swipeDirection||l.diff===0&&!n.loopSwapReset||n.currentTranslate===n.startTranslate&&!n.loopSwapReset){n.isTouched=!1,n.isMoved=!1,n.startMoving=!1;return}n.isTouched=!1,n.isMoved=!1,n.startMoving=!1;let p;if(a.followFinger?p=s?t.translate:-t.translate:p=-n.currentTranslate,a.cssMode)return;if(a.freeMode&&a.freeMode.enabled){t.freeMode.onTouchEnd({currentPos:p});return}const m=p>=-t.maxTranslate()&&!t.params.loop;let y=0,w=t.slidesSizesGrid[0];for(let S=0;S<c.length;S+=S<a.slidesPerGroupSkip?1:a.slidesPerGroup){const P=S<a.slidesPerGroupSkip-1?1:a.slidesPerGroup;typeof c[S+P]<"u"?(m||p>=c[S]&&p<c[S+P])&&(y=S,w=c[S+P]-c[S]):(m||p>=c[S])&&(y=S,w=c[c.length-1]-c[c.length-2])}let g=null,v=null;a.rewind&&(t.isBeginning?v=a.virtual&&a.virtual.enabled&&t.virtual?t.virtual.slides.length-1:t.slides.length-1:t.isEnd&&(g=0));const b=(p-c[y])/w,C=y<a.slidesPerGroupSkip-1?1:a.slidesPerGroup;if(h>a.longSwipesMs){if(!a.longSwipes){t.slideTo(t.activeIndex);return}t.swipeDirection==="next"&&(b>=a.longSwipesRatio?t.slideTo(a.rewind&&t.isEnd?g:y+C):t.slideTo(y)),t.swipeDirection==="prev"&&(b>1-a.longSwipesRatio?t.slideTo(y+C):v!==null&&b<0&&Math.abs(b)>a.longSwipesRatio?t.slideTo(v):t.slideTo(y))}else{if(!a.shortSwipes){t.slideTo(t.activeIndex);return}t.navigation&&(r.target===t.navigation.nextEl||r.target===t.navigation.prevEl)?r.target===t.navigation.nextEl?t.slideTo(y+C):t.slideTo(y):(t.swipeDirection==="next"&&t.slideTo(g!==null?g:y+C),t.swipeDirection==="prev"&&t.slideTo(v!==null?v:y))}}function F1(){const e=this,{params:t,el:n}=e;if(n&&n.offsetWidth===0)return;t.breakpoints&&e.setBreakpoint();const{allowSlideNext:r,allowSlidePrev:i,snapGrid:o}=e,a=e.virtual&&e.params.virtual.enabled;e.allowSlideNext=!0,e.allowSlidePrev=!0,e.updateSize(),e.updateSlides(),e.updateSlidesClasses();const l=a&&t.loop;(t.slidesPerView==="auto"||t.slidesPerView>1)&&e.isEnd&&!e.isBeginning&&!e.params.centeredSlides&&!l?e.slideTo(e.slides.length-1,0,!1,!0):e.params.loop&&!a?e.slideToLoop(e.realIndex,0,!1,!0):e.slideTo(e.activeIndex,0,!1,!0),e.autoplay&&e.autoplay.running&&e.autoplay.paused&&(clearTimeout(e.autoplay.resizeTimeout),e.autoplay.resizeTimeout=setTimeout(()=>{e.autoplay&&e.autoplay.running&&e.autoplay.paused&&e.autoplay.resume()},500)),e.allowSlidePrev=i,e.allowSlideNext=r,e.params.watchOverflow&&o!==e.snapGrid&&e.checkOverflow()}function bL(e){const t=this;t.enabled&&(t.allowClick||(t.params.preventClicks&&e.preventDefault(),t.params.preventClicksPropagation&&t.animating&&(e.stopPropagation(),e.stopImmediatePropagation())))}function wL(){const e=this,{wrapperEl:t,rtlTranslate:n,enabled:r}=e;if(!r)return;e.previousTranslate=e.translate,e.isHorizontal()?e.translate=-t.scrollLeft:e.translate=-t.scrollTop,e.translate===0&&(e.translate=0),e.updateActiveIndex(),e.updateSlidesClasses();let i;const o=e.maxTranslate()-e.minTranslate();o===0?i=0:i=(e.translate-e.minTranslate())/o,i!==e.progress&&e.updateProgress(n?-e.translate:e.translate),e.emit("setTranslate",e.translate,!1)}function SL(e){const t=this;rc(t,e.target),!(t.params.cssMode||t.params.slidesPerView!=="auto"&&!t.params.autoHeight)&&t.update()}function CL(){const e=this;e.documentTouchHandlerProceeded||(e.documentTouchHandlerProceeded=!0,e.params.touchReleaseOnEdges&&(e.el.style.touchAction="auto"))}const s_=(e,t)=>{const n=zn(),{params:r,el:i,wrapperEl:o,device:a}=e,l=!!r.nested,s=t==="on"?"addEventListener":"removeEventListener",c=t;!i||typeof i=="string"||(n[s]("touchstart",e.onDocumentTouchStart,{passive:!1,capture:l}),i[s]("touchstart",e.onTouchStart,{passive:!1}),i[s]("pointerdown",e.onTouchStart,{passive:!1}),n[s]("touchmove",e.onTouchMove,{passive:!1,capture:l}),n[s]("pointermove",e.onTouchMove,{passive:!1,capture:l}),n[s]("touchend",e.onTouchEnd,{passive:!0}),n[s]("pointerup",e.onTouchEnd,{passive:!0}),n[s]("pointercancel",e.onTouchEnd,{passive:!0}),n[s]("touchcancel",e.onTouchEnd,{passive:!0}),n[s]("pointerout",e.onTouchEnd,{passive:!0}),n[s]("pointerleave",e.onTouchEnd,{passive:!0}),n[s]("contextmenu",e.onTouchEnd,{passive:!0}),(r.preventClicks||r.preventClicksPropagation)&&i[s]("click",e.onClick,!0),r.cssMode&&o[s]("scroll",e.onScroll),r.updateOnWindowResize?e[c](a.ios||a.android?"resize orientationchange observerUpdate":"resize observerUpdate",F1,!0):e[c]("observerUpdate",F1,!0),i[s]("load",e.onLoad,{capture:!0}))};function EL(){const e=this,{params:t}=e;e.onTouchStart=vL.bind(e),e.onTouchMove=yL.bind(e),e.onTouchEnd=xL.bind(e),e.onDocumentTouchStart=CL.bind(e),t.cssMode&&(e.onScroll=wL.bind(e)),e.onClick=bL.bind(e),e.onLoad=SL.bind(e),s_(e,"on")}function _L(){s_(this,"off")}var kL={attachEvents:EL,detachEvents:_L};const z1=(e,t)=>e.grid&&t.grid&&t.grid.rows>1;function PL(){const e=this,{realIndex:t,initialized:n,params:r,el:i}=e,o=r.breakpoints;if(!o||o&&Object.keys(o).length===0)return;const a=zn(),l=r.breakpointsBase==="window"||!r.breakpointsBase?r.breakpointsBase:"container",s=["window","container"].includes(r.breakpointsBase)||!r.breakpointsBase?e.el:a.querySelector(r.breakpointsBase),c=e.getBreakpoint(o,l,s);if(!c||e.currentBreakpoint===c)return;const d=(c in o?o[c]:void 0)||e.originalParams,h=z1(e,r),p=z1(e,d),m=e.params.grabCursor,y=d.grabCursor,w=r.enabled;h&&!p?(i.classList.remove(`${r.containerModifierClass}grid`,`${r.containerModifierClass}grid-column`),e.emitContainerClasses()):!h&&p&&(i.classList.add(`${r.containerModifierClass}grid`),(d.grid.fill&&d.grid.fill==="column"||!d.grid.fill&&r.grid.fill==="column")&&i.classList.add(`${r.containerModifierClass}grid-column`),e.emitContainerClasses()),m&&!y?e.unsetGrabCursor():!m&&y&&e.setGrabCursor(),["navigation","pagination","scrollbar"].forEach(P=>{if(typeof d[P]>"u")return;const k=r[P]&&r[P].enabled,_=d[P]&&d[P].enabled;k&&!_&&e[P].disable(),!k&&_&&e[P].enable()});const g=d.direction&&d.direction!==r.direction,v=r.loop&&(d.slidesPerView!==r.slidesPerView||g),b=r.loop;g&&n&&e.changeDirection(),Nt(e.params,d);const C=e.params.enabled,S=e.params.loop;Object.assign(e,{allowTouchMove:e.params.allowTouchMove,allowSlideNext:e.params.allowSlideNext,allowSlidePrev:e.params.allowSlidePrev}),w&&!C?e.disable():!w&&C&&e.enable(),e.currentBreakpoint=c,e.emit("_beforeBreakpoint",d),n&&(v?(e.loopDestroy(),e.loopCreate(t),e.updateSlides()):!b&&S?(e.loopCreate(t),e.updateSlides()):b&&!S&&e.loopDestroy()),e.emit("breakpoint",d)}function OL(e,t="window",n){if(!e||t==="container"&&!n)return;let r=!1;const i=kt(),o=t==="window"?i.innerHeight:n.clientHeight,a=Object.keys(e).map(l=>{if(typeof l=="string"&&l.indexOf("@")===0){const s=parseFloat(l.substr(1));return{value:o*s,point:l}}return{value:l,point:l}});a.sort((l,s)=>parseInt(l.value,10)-parseInt(s.value,10));for(let l=0;l<a.length;l+=1){const{point:s,value:c}=a[l];t==="window"?i.matchMedia(`(min-width: ${c}px)`).matches&&(r=s):c<=n.clientWidth&&(r=s)}return r||"max"}var TL={setBreakpoint:PL,getBreakpoint:OL};function jL(e,t){const n=[];return e.forEach(r=>{typeof r=="object"?Object.keys(r).forEach(i=>{r[i]&&n.push(t+i)}):typeof r=="string"&&n.push(t+r)}),n}function $L(){const e=this,{classNames:t,params:n,rtl:r,el:i,device:o}=e,a=jL(["initialized",n.direction,{"free-mode":e.params.freeMode&&n.freeMode.enabled},{autoheight:n.autoHeight},{rtl:r},{grid:n.grid&&n.grid.rows>1},{"grid-column":n.grid&&n.grid.rows>1&&n.grid.fill==="column"},{android:o.android},{ios:o.ios},{"css-mode":n.cssMode},{centered:n.cssMode&&n.centeredSlides},{"watch-progress":n.watchSlidesProgress}],n.containerModifierClass);t.push(...a),i.classList.add(...t),e.emitContainerClasses()}function IL(){const e=this,{el:t,classNames:n}=e;!t||typeof t=="string"||(t.classList.remove(...n),e.emitContainerClasses())}var ML={addClasses:$L,removeClasses:IL};function AL(){const e=this,{isLocked:t,params:n}=e,{slidesOffsetBefore:r}=n;if(r){const i=e.slides.length-1,o=e.slidesGrid[i]+e.slidesSizesGrid[i]+r*2;e.isLocked=e.size>o}else e.isLocked=e.snapGrid.length===1;n.allowSlideNext===!0&&(e.allowSlideNext=!e.isLocked),n.allowSlidePrev===!0&&(e.allowSlidePrev=!e.isLocked),t&&t!==e.isLocked&&(e.isEnd=!1),t!==e.isLocked&&e.emit(e.isLocked?"lock":"unlock")}var DL={checkOverflow:AL},vm={init:!0,direction:"horizontal",oneWayMovement:!1,swiperElementNodeName:"SWIPER-CONTAINER",touchEventsTarget:"wrapper",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,eventsPrefix:"swiper",enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,snapToSlideEdge:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:5,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,loop:!1,loopAddBlankSlides:!0,loopAdditionalSlides:0,loopPreventsSliding:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,maxBackfaceHiddenSlides:10,containerModifierClass:"swiper-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-blank",slideActiveClass:"swiper-slide-active",slideVisibleClass:"swiper-slide-visible",slideFullyVisibleClass:"swiper-slide-fully-visible",slideNextClass:"swiper-slide-next",slidePrevClass:"swiper-slide-prev",wrapperClass:"swiper-wrapper",lazyPreloaderClass:"swiper-lazy-preloader",lazyPreloadPrevNext:0,runCallbacksOnInit:!0,_emitClasses:!1};function LL(e,t){return function(r={}){const i=Object.keys(r)[0],o=r[i];if(typeof o!="object"||o===null){Nt(t,r);return}if(e[i]===!0&&(e[i]={enabled:!0}),i==="navigation"&&e[i]&&e[i].enabled&&!e[i].prevEl&&!e[i].nextEl&&(e[i].auto=!0),["pagination","scrollbar"].indexOf(i)>=0&&e[i]&&e[i].enabled&&!e[i].el&&(e[i].auto=!0),!(i in e&&"enabled"in o)){Nt(t,r);return}typeof e[i]=="object"&&!("enabled"in e[i])&&(e[i].enabled=!0),e[i]||(e[i]={enabled:!1}),Nt(t,r)}}const Zf={eventsEmitter:M6,update:U6,translate:K6,transition:eL,slide:lL,loop:fL,grabCursor:mL,events:kL,breakpoints:TL,checkOverflow:DL,classes:ML},Jf={};let b0=class Gn{constructor(...t){let n,r;t.length===1&&t[0].constructor&&Object.prototype.toString.call(t[0]).slice(8,-1)==="Object"?r=t[0]:[n,r]=t,r||(r={}),r=Nt({},r),n&&!r.el&&(r.el=n);const i=zn();if(r.el&&typeof r.el=="string"&&i.querySelectorAll(r.el).length>1){const s=[];return i.querySelectorAll(r.el).forEach(c=>{const f=Nt({},r,{el:c});s.push(new Gn(f))}),s}const o=this;o.__swiper__=!0,o.support=r_(),o.device=i_({userAgent:r.userAgent}),o.browser=o_(),o.eventsListeners={},o.eventsAnyListeners=[],o.modules=[...o.__modules__],r.modules&&Array.isArray(r.modules)&&r.modules.forEach(s=>{typeof s=="function"&&o.modules.indexOf(s)<0&&o.modules.push(s)});const a={};o.modules.forEach(s=>{s({params:r,swiper:o,extendParams:LL(r,a),on:o.on.bind(o),once:o.once.bind(o),off:o.off.bind(o),emit:o.emit.bind(o)})});const l=Nt({},vm,a);return o.params=Nt({},l,Jf,r),o.originalParams=Nt({},o.params),o.passedParams=Nt({},r),o.params&&o.params.on&&Object.keys(o.params.on).forEach(s=>{o.on(s,o.params.on[s])}),o.params&&o.params.onAny&&o.onAny(o.params.onAny),Object.assign(o,{enabled:o.params.enabled,el:n,classNames:[],slides:[],slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal(){return o.params.direction==="horizontal"},isVertical(){return o.params.direction==="vertical"},activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,cssOverflowAdjustment(){return Math.trunc(this.translate/2**23)*2**23},allowSlideNext:o.params.allowSlideNext,allowSlidePrev:o.params.allowSlidePrev,touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:o.params.focusableElements,lastClickTime:0,clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,startMoving:void 0,pointerId:null,touchId:null},allowClick:!0,allowTouchMove:o.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),o.emit("_swiper"),o.params.init&&o.init(),o}getDirectionLabel(t){return this.isHorizontal()?t:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[t]}getSlideIndex(t){const{slidesEl:n,params:r}=this,i=Dn(n,`.${r.slideClass}, swiper-slide`),o=ru(i[0]);return ru(t)-o}getSlideIndexByData(t){return this.getSlideIndex(this.slides.find(n=>n.getAttribute("data-swiper-slide-index")*1===t))}getSlideIndexWhenGrid(t){return this.grid&&this.params.grid&&this.params.grid.rows>1&&(this.params.grid.fill==="column"?t=Math.floor(t/this.params.grid.rows):this.params.grid.fill==="row"&&(t=t%Math.ceil(this.slides.length/this.params.grid.rows))),t}recalcSlides(){const t=this,{slidesEl:n,params:r}=t;t.slides=Dn(n,`.${r.slideClass}, swiper-slide`)}enable(){const t=this;t.enabled||(t.enabled=!0,t.params.grabCursor&&t.setGrabCursor(),t.emit("enable"))}disable(){const t=this;t.enabled&&(t.enabled=!1,t.params.grabCursor&&t.unsetGrabCursor(),t.emit("disable"))}setProgress(t,n){const r=this;t=Math.min(Math.max(t,0),1);const i=r.minTranslate(),a=(r.maxTranslate()-i)*t+i;r.translateTo(a,typeof n>"u"?0:n),r.updateActiveIndex(),r.updateSlidesClasses()}emitContainerClasses(){const t=this;if(!t.params._emitClasses||!t.el)return;const n=t.el.className.split(" ").filter(r=>r.indexOf("swiper")===0||r.indexOf(t.params.containerModifierClass)===0);t.emit("_containerClasses",n.join(" "))}getSlideClasses(t){const n=this;return n.destroyed?"":t.className.split(" ").filter(r=>r.indexOf("swiper-slide")===0||r.indexOf(n.params.slideClass)===0).join(" ")}emitSlidesClasses(){const t=this;if(!t.params._emitClasses||!t.el)return;const n=[];t.slides.forEach(r=>{const i=t.getSlideClasses(r);n.push({slideEl:r,classNames:i}),t.emit("_slideClass",r,i)}),t.emit("_slideClasses",n)}slidesPerViewDynamic(t="current",n=!1){const r=this,{params:i,slides:o,slidesGrid:a,slidesSizesGrid:l,size:s,activeIndex:c}=r;let f=1;if(typeof i.slidesPerView=="number")return i.slidesPerView;if(i.centeredSlides){let d=o[c]?Math.ceil(o[c].swiperSlideSize):0,h;for(let p=c+1;p<o.length;p+=1)o[p]&&!h&&(d+=Math.ceil(o[p].swiperSlideSize),f+=1,d>s&&(h=!0));for(let p=c-1;p>=0;p-=1)o[p]&&!h&&(d+=o[p].swiperSlideSize,f+=1,d>s&&(h=!0))}else if(t==="current")for(let d=c+1;d<o.length;d+=1)(n?a[d]+l[d]-a[c]<s:a[d]-a[c]<s)&&(f+=1);else for(let d=c-1;d>=0;d-=1)a[c]-a[d]<s&&(f+=1);return f}update(){const t=this;if(!t||t.destroyed)return;const{snapGrid:n,params:r}=t;r.breakpoints&&t.setBreakpoint(),[...t.el.querySelectorAll('[loading="lazy"]')].forEach(a=>{a.complete&&rc(t,a)}),t.updateSize(),t.updateSlides(),t.updateProgress(),t.updateSlidesClasses();function i(){const a=t.rtlTranslate?t.translate*-1:t.translate,l=Math.min(Math.max(a,t.maxTranslate()),t.minTranslate());t.setTranslate(l),t.updateActiveIndex(),t.updateSlidesClasses()}let o;if(r.freeMode&&r.freeMode.enabled&&!r.cssMode)i(),r.autoHeight&&t.updateAutoHeight();else{if((r.slidesPerView==="auto"||r.slidesPerView>1)&&t.isEnd&&!r.centeredSlides){const a=t.virtual&&r.virtual.enabled?t.virtual.slides:t.slides;o=t.slideTo(a.length-1,0,!1,!0)}else o=t.slideTo(t.activeIndex,0,!1,!0);o||i()}r.watchOverflow&&n!==t.snapGrid&&t.checkOverflow(),t.emit("update")}changeDirection(t,n=!0){const r=this,i=r.params.direction;return t||(t=i==="horizontal"?"vertical":"horizontal"),t===i||t!=="horizontal"&&t!=="vertical"||(r.el.classList.remove(`${r.params.containerModifierClass}${i}`),r.el.classList.add(`${r.params.containerModifierClass}${t}`),r.emitContainerClasses(),r.params.direction=t,r.slides.forEach(o=>{t==="vertical"?o.style.width="":o.style.height=""}),r.emit("changeDirection"),n&&r.update()),r}changeLanguageDirection(t){const n=this;n.rtl&&t==="rtl"||!n.rtl&&t==="ltr"||(n.rtl=t==="rtl",n.rtlTranslate=n.params.direction==="horizontal"&&n.rtl,n.rtl?(n.el.classList.add(`${n.params.containerModifierClass}rtl`),n.el.dir="rtl"):(n.el.classList.remove(`${n.params.containerModifierClass}rtl`),n.el.dir="ltr"),n.update())}mount(t){const n=this;if(n.mounted)return!0;let r=t||n.params.el;if(typeof r=="string"&&(r=document.querySelector(r)),!r)return!1;r.swiper=n,r.parentNode&&r.parentNode.host&&r.parentNode.host.nodeName===n.params.swiperElementNodeName.toUpperCase()&&(n.isElement=!0);const i=()=>`.${(n.params.wrapperClass||"").trim().split(" ").join(".")}`;let a=(()=>r&&r.shadowRoot&&r.shadowRoot.querySelector?r.shadowRoot.querySelector(i()):Dn(r,i())[0])();return!a&&n.params.createElements&&(a=nu("div",n.params.wrapperClass),r.append(a),Dn(r,`.${n.params.slideClass}`).forEach(l=>{a.append(l)})),Object.assign(n,{el:r,wrapperEl:a,slidesEl:n.isElement&&!r.parentNode.host.slideSlots?r.parentNode.host:a,hostEl:n.isElement?r.parentNode.host:r,mounted:!0,rtl:r.dir.toLowerCase()==="rtl"||Tr(r,"direction")==="rtl",rtlTranslate:n.params.direction==="horizontal"&&(r.dir.toLowerCase()==="rtl"||Tr(r,"direction")==="rtl"),wrongRTL:Tr(a,"display")==="-webkit-box"}),!0}init(t){const n=this;if(n.initialized||n.mount(t)===!1)return n;n.emit("beforeInit"),n.params.breakpoints&&n.setBreakpoint(),n.addClasses(),n.updateSize(),n.updateSlides(),n.params.watchOverflow&&n.checkOverflow(),n.params.grabCursor&&n.enabled&&n.setGrabCursor(),n.params.loop&&n.virtual&&n.params.virtual.enabled?n.slideTo(n.params.initialSlide+n.virtual.slidesBefore,0,n.params.runCallbacksOnInit,!1,!0):n.slideTo(n.params.initialSlide,0,n.params.runCallbacksOnInit,!1,!0),n.params.loop&&n.loopCreate(void 0,!0),n.attachEvents();const i=[...n.el.querySelectorAll('[loading="lazy"]')];return n.isElement&&i.push(...n.hostEl.querySelectorAll('[loading="lazy"]')),i.forEach(o=>{o.complete?rc(n,o):o.addEventListener("load",a=>{rc(n,a.target)})}),gm(n),n.initialized=!0,gm(n),n.emit("init"),n.emit("afterInit"),n}destroy(t=!0,n=!0){const r=this,{params:i,el:o,wrapperEl:a,slides:l}=r;return typeof r.params>"u"||r.destroyed||(r.emit("beforeDestroy"),r.initialized=!1,r.detachEvents(),i.loop&&r.loopDestroy(),n&&(r.removeClasses(),o&&typeof o!="string"&&o.removeAttribute("style"),a&&a.removeAttribute("style"),l&&l.length&&l.forEach(s=>{s.classList.remove(i.slideVisibleClass,i.slideFullyVisibleClass,i.slideActiveClass,i.slideNextClass,i.slidePrevClass),s.removeAttribute("style"),s.removeAttribute("data-swiper-slide-index")})),r.emit("destroy"),Object.keys(r.eventsListeners).forEach(s=>{r.off(s)}),t!==!1&&(r.el&&typeof r.el!="string"&&(r.el.swiper=null),v6(r)),r.destroyed=!0),null}static extendDefaults(t){Nt(Jf,t)}static get extendedDefaults(){return Jf}static get defaults(){return vm}static installModule(t){Gn.prototype.__modules__||(Gn.prototype.__modules__=[]);const n=Gn.prototype.__modules__;typeof t=="function"&&n.indexOf(t)<0&&n.push(t)}static use(t){return Array.isArray(t)?(t.forEach(n=>Gn.installModule(n)),Gn):(Gn.installModule(t),Gn)}};Object.keys(Zf).forEach(e=>{Object.keys(Zf[e]).forEach(t=>{b0.prototype[t]=Zf[e][t]})});b0.use([$6,I6]);const l_=["eventsPrefix","injectStyles","injectStylesUrls","modules","init","_direction","oneWayMovement","swiperElementNodeName","touchEventsTarget","initialSlide","_speed","cssMode","updateOnWindowResize","resizeObserver","nested","focusableElements","_enabled","_width","_height","preventInteractionOnTransition","userAgent","url","_edgeSwipeDetection","_edgeSwipeThreshold","_freeMode","_autoHeight","setWrapperSize","virtualTranslate","_effect","breakpoints","breakpointsBase","_spaceBetween","_slidesPerView","maxBackfaceHiddenSlides","_grid","_slidesPerGroup","_slidesPerGroupSkip","_slidesPerGroupAuto","_centeredSlides","_centeredSlidesBounds","_slidesOffsetBefore","_slidesOffsetAfter","normalizeSlideIndex","_centerInsufficientSlides","_snapToSlideEdge","_watchOverflow","roundLengths","touchRatio","touchAngle","simulateTouch","_shortSwipes","_longSwipes","longSwipesRatio","longSwipesMs","_followFinger","allowTouchMove","_threshold","touchMoveStopPropagation","touchStartPreventDefault","touchStartForcePreventDefault","touchReleaseOnEdges","uniqueNavElements","_resistance","_resistanceRatio","_watchSlidesProgress","_grabCursor","preventClicks","preventClicksPropagation","_slideToClickedSlide","_loop","loopAdditionalSlides","loopAddBlankSlides","loopPreventsSliding","_rewind","_allowSlidePrev","_allowSlideNext","_swipeHandler","_noSwiping","noSwipingClass","noSwipingSelector","passiveListeners","containerModifierClass","slideClass","slideActiveClass","slideVisibleClass","slideFullyVisibleClass","slideNextClass","slidePrevClass","slideBlankClass","wrapperClass","lazyPreloaderClass","lazyPreloadPrevNext","runCallbacksOnInit","observer","observeParents","observeSlideChildren","a11y","_autoplay","_controller","coverflowEffect","cubeEffect","fadeEffect","flipEffect","creativeEffect","cardsEffect","hashNavigation","history","keyboard","mousewheel","_navigation","_pagination","parallax","_scrollbar","_thumbs","virtual","zoom","control"];function Ei(e){return typeof e=="object"&&e!==null&&e.constructor&&Object.prototype.toString.call(e).slice(8,-1)==="Object"&&!e.__swiper__}function go(e,t){const n=["__proto__","constructor","prototype"];Object.keys(t).filter(r=>n.indexOf(r)<0).forEach(r=>{typeof e[r]>"u"?e[r]=t[r]:Ei(t[r])&&Ei(e[r])&&Object.keys(t[r]).length>0?t[r].__swiper__?e[r]=t[r]:go(e[r],t[r]):e[r]=t[r]})}function c_(e={}){return e.navigation&&typeof e.navigation.nextEl>"u"&&typeof e.navigation.prevEl>"u"}function u_(e={}){return e.pagination&&typeof e.pagination.el>"u"}function d_(e={}){return e.scrollbar&&typeof e.scrollbar.el>"u"}function f_(e=""){const t=e.split(" ").map(r=>r.trim()).filter(r=>!!r),n=[];return t.forEach(r=>{n.indexOf(r)<0&&n.push(r)}),n.join(" ")}function RL(e=""){return e?e.includes("swiper-wrapper")?e:`swiper-wrapper ${e}`:"swiper-wrapper"}function FL({swiper:e,slides:t,passedParams:n,changedParams:r,nextEl:i,prevEl:o,scrollbarEl:a,paginationEl:l}){const s=r.filter(_=>_!=="children"&&_!=="direction"&&_!=="wrapperClass"),{params:c,pagination:f,navigation:d,scrollbar:h,virtual:p,thumbs:m}=e;let y,w,g,v,b,C,S,P;r.includes("thumbs")&&n.thumbs&&n.thumbs.swiper&&!n.thumbs.swiper.destroyed&&c.thumbs&&(!c.thumbs.swiper||c.thumbs.swiper.destroyed)&&(y=!0),r.includes("controller")&&n.controller&&n.controller.control&&c.controller&&!c.controller.control&&(w=!0),r.includes("pagination")&&n.pagination&&(n.pagination.el||l)&&(c.pagination||c.pagination===!1)&&f&&!f.el&&(g=!0),r.includes("scrollbar")&&n.scrollbar&&(n.scrollbar.el||a)&&(c.scrollbar||c.scrollbar===!1)&&h&&!h.el&&(v=!0),r.includes("navigation")&&n.navigation&&(n.navigation.prevEl||o)&&(n.navigation.nextEl||i)&&(c.navigation||c.navigation===!1)&&d&&!d.prevEl&&!d.nextEl&&(b=!0);const k=_=>{e[_]&&(e[_].destroy(),_==="navigation"?(e.isElement&&(e[_].prevEl.remove(),e[_].nextEl.remove()),c[_].prevEl=void 0,c[_].nextEl=void 0,e[_].prevEl=void 0,e[_].nextEl=void 0):(e.isElement&&e[_].el.remove(),c[_].el=void 0,e[_].el=void 0))};r.includes("loop")&&e.isElement&&(c.loop&&!n.loop?C=!0:!c.loop&&n.loop?S=!0:P=!0),s.forEach(_=>{if(Ei(c[_])&&Ei(n[_]))Object.assign(c[_],n[_]),(_==="navigation"||_==="pagination"||_==="scrollbar")&&"enabled"in n[_]&&!n[_].enabled&&k(_);else{const T=n[_];(T===!0||T===!1)&&(_==="navigation"||_==="pagination"||_==="scrollbar")?T===!1&&k(_):c[_]=n[_]}}),s.includes("controller")&&!w&&e.controller&&e.controller.control&&c.controller&&c.controller.control&&(e.controller.control=c.controller.control),r.includes("children")&&t&&p&&c.virtual.enabled?(p.slides=t,p.update(!0)):r.includes("virtual")&&p&&c.virtual.enabled&&(t&&(p.slides=t),p.update(!0)),r.includes("children")&&t&&c.loop&&(P=!0),y&&m.init()&&m.update(!0),w&&(e.controller.control=c.controller.control),g&&(e.isElement&&(!l||typeof l=="string")&&(l=document.createElement("div"),l.classList.add("swiper-pagination"),l.part.add("pagination"),e.el.appendChild(l)),l&&(c.pagination.el=l),f.init(),f.render(),f.update()),v&&(e.isElement&&(!a||typeof a=="string")&&(a=document.createElement("div"),a.classList.add("swiper-scrollbar"),a.part.add("scrollbar"),e.el.appendChild(a)),a&&(c.scrollbar.el=a),h.init(),h.updateSize(),h.setTranslate()),b&&(e.isElement&&((!i||typeof i=="string")&&(i=document.createElement("div"),i.classList.add("swiper-button-next"),Cs(i,e.navigation.arrowSvg),i.part.add("button-next"),e.el.appendChild(i)),(!o||typeof o=="string")&&(o=document.createElement("div"),o.classList.add("swiper-button-prev"),Cs(o,e.navigation.arrowSvg),o.part.add("button-prev"),e.el.appendChild(o))),i&&(c.navigation.nextEl=i),o&&(c.navigation.prevEl=o),d.init(),d.update()),r.includes("allowSlideNext")&&(e.allowSlideNext=n.allowSlideNext),r.includes("allowSlidePrev")&&(e.allowSlidePrev=n.allowSlidePrev),r.includes("direction")&&e.changeDirection(n.direction,!1),(C||P)&&e.loopDestroy(),(S||P)&&e.loopCreate(),e.update()}function zL(e={},t=!0){const n={on:{}},r={},i={};go(n,vm),n._emitClasses=!0,n.init=!1;const o={},a=l_.map(s=>s.replace(/_/,"")),l=Object.assign({},e);return Object.keys(l).forEach(s=>{typeof e[s]>"u"||(a.indexOf(s)>=0?Ei(e[s])?(n[s]={},i[s]={},go(n[s],e[s]),go(i[s],e[s])):(n[s]=e[s],i[s]=e[s]):s.search(/on[A-Z]/)===0&&typeof e[s]=="function"?t?r[`${s[2].toLowerCase()}${s.substr(3)}`]=e[s]:n.on[`${s[2].toLowerCase()}${s.substr(3)}`]=e[s]:o[s]=e[s])}),["navigation","pagination","scrollbar"].forEach(s=>{n[s]===!0&&(n[s]={}),n[s]===!1&&delete n[s]}),{params:n,passedParams:i,rest:o,events:r}}function NL({el:e,nextEl:t,prevEl:n,paginationEl:r,scrollbarEl:i,swiper:o},a){c_(a)&&t&&n&&(o.params.navigation.nextEl=t,o.originalParams.navigation.nextEl=t,o.params.navigation.prevEl=n,o.originalParams.navigation.prevEl=n),u_(a)&&r&&(o.params.pagination.el=r,o.originalParams.pagination.el=r),d_(a)&&i&&(o.params.scrollbar.el=i,o.originalParams.scrollbar.el=i),o.init(e)}function BL(e,t,n,r,i){const o=[];if(!t)return o;const a=s=>{o.indexOf(s)<0&&o.push(s)};if(n&&r){const s=r.map(i),c=n.map(i);s.join("")!==c.join("")&&a("children"),r.length!==n.length&&a("children")}return l_.filter(s=>s[0]==="_").map(s=>s.replace(/_/,"")).forEach(s=>{if(s in e&&s in t)if(Ei(e[s])&&Ei(t[s])){const c=Object.keys(e[s]),f=Object.keys(t[s]);c.length!==f.length?a(s):(c.forEach(d=>{e[s][d]!==t[s][d]&&a(s)}),f.forEach(d=>{e[s][d]!==t[s][d]&&a(s)}))}else e[s]!==t[s]&&a(s)}),o}const VL=e=>{!e||e.destroyed||!e.params.virtual||e.params.virtual&&!e.params.virtual.enabled||(e.updateSlides(),e.updateProgress(),e.updateSlidesClasses(),e.emit("_virtualUpdated"),e.parallax&&e.params.parallax&&e.params.parallax.enabled&&e.parallax.setTranslate())};function iu(){return iu=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},iu.apply(this,arguments)}function p_(e){return e.type&&e.type.displayName&&e.type.displayName.includes("SwiperSlide")}function h_(e){const t=[];return K.Children.toArray(e).forEach(n=>{p_(n)?t.push(n):n.props&&n.props.children&&h_(n.props.children).forEach(r=>t.push(r))}),t}function WL(e){const t=[],n={"container-start":[],"container-end":[],"wrapper-start":[],"wrapper-end":[]};return K.Children.toArray(e).forEach(r=>{if(p_(r))t.push(r);else if(r.props&&r.props.slot&&n[r.props.slot])n[r.props.slot].push(r);else if(r.props&&r.props.children){const i=h_(r.props.children);i.length>0?i.forEach(o=>t.push(o)):n["container-end"].push(r)}else n["container-end"].push(r)}),{slides:t,slots:n}}function UL(e,t,n){if(!n)return null;const r=f=>{let d=f;return f<0?d=t.length+f:d>=t.length&&(d=d-t.length),d},i=e.isHorizontal()?{[e.rtlTranslate?"right":"left"]:`${n.offset}px`}:{top:`${n.offset}px`},{from:o,to:a}=n,l=e.params.loop?-t.length:0,s=e.params.loop?t.length*2:t.length,c=[];for(let f=l;f<s;f+=1)f>=o&&f<=a&&c.push(t[r(f)]);return c.map((f,d)=>K.cloneElement(f,{swiper:e,style:i,key:f.props.virtualIndex||f.key||`slide-${d}`}))}function Ba(e,t){return typeof window>"u"?x.useEffect(e,t):x.useLayoutEffect(e,t)}const N1=x.createContext(null),HL=x.createContext(null),m_=x.forwardRef(({className:e,tag:t="div",wrapperTag:n="div",children:r,onSwiper:i,...o}={},a)=>{let l=!1;const[s,c]=x.useState("swiper"),[f,d]=x.useState(null),[h,p]=x.useState(!1),m=x.useRef(!1),y=x.useRef(null),w=x.useRef(null),g=x.useRef(null),v=x.useRef(null),b=x.useRef(null),C=x.useRef(null),S=x.useRef(null),P=x.useRef(null),{params:k,passedParams:_,rest:T,events:$}=zL(o),{slides:I,slots:M}=WL(r),j=()=>{p(!h)};Object.assign(k.on,{_containerClasses(O,A){c(A)}});const F=()=>{Object.assign(k.on,$),l=!0;const O={...k};if(delete O.wrapperClass,w.current=new b0(O),w.current.virtual&&w.current.params.virtual.enabled){w.current.virtual.slides=I;const A={cache:!1,slides:I,renderExternal:d,renderExternalUpdate:!1};go(w.current.params.virtual,A),go(w.current.originalParams.virtual,A)}};y.current||F(),w.current&&w.current.on("_beforeBreakpoint",j);const D=()=>{l||!$||!w.current||Object.keys($).forEach(O=>{w.current.on(O,$[O])})},z=()=>{!$||!w.current||Object.keys($).forEach(O=>{w.current.off(O,$[O])})};x.useEffect(()=>()=>{w.current&&w.current.off("_beforeBreakpoint",j)}),x.useEffect(()=>{!m.current&&w.current&&(w.current.emitSlidesClasses(),m.current=!0)}),Ba(()=>{if(a&&(a.current=y.current),!!y.current)return w.current.destroyed&&F(),NL({el:y.current,nextEl:b.current,prevEl:C.current,paginationEl:S.current,scrollbarEl:P.current,swiper:w.current},k),i&&!w.current.destroyed&&i(w.current),()=>{w.current&&!w.current.destroyed&&w.current.destroy(!0,!1)}},[]),Ba(()=>{D();const O=BL(_,g.current,I,v.current,A=>A.key);return g.current=_,v.current=I,O.length&&w.current&&!w.current.destroyed&&FL({swiper:w.current,slides:I,passedParams:_,changedParams:O,nextEl:b.current,prevEl:C.current,scrollbarEl:P.current,paginationEl:S.current}),()=>{z()}}),Ba(()=>{VL(w.current)},[f]);function R(){return k.virtual?UL(w.current,I,f):I.map((O,A)=>K.cloneElement(O,{swiper:w.current,swiperSlideIndex:A}))}return K.createElement(t,iu({ref:y,className:f_(`${s}${e?` ${e}`:""}`)},T),K.createElement(HL.Provider,{value:w.current},M["container-start"],K.createElement(n,{className:RL(k.wrapperClass)},M["wrapper-start"],R(),M["wrapper-end"]),c_(k)&&K.createElement(K.Fragment,null,K.createElement("div",{ref:C,className:"swiper-button-prev"}),K.createElement("div",{ref:b,className:"swiper-button-next"})),d_(k)&&K.createElement("div",{ref:P,className:"swiper-scrollbar"}),u_(k)&&K.createElement("div",{ref:S,className:"swiper-pagination"}),M["container-end"]))});m_.displayName="Swiper";const g_=x.forwardRef(({tag:e="div",children:t,className:n="",swiper:r,zoom:i,lazy:o,virtualIndex:a,swiperSlideIndex:l,...s}={},c)=>{const f=x.useRef(null),[d,h]=x.useState("swiper-slide"),[p,m]=x.useState(!1);function y(b,C,S){C===f.current&&h(S)}Ba(()=>{if(typeof l<"u"&&(f.current.swiperSlideIndex=l),c&&(c.current=f.current),!(!f.current||!r)){if(r.destroyed){d!=="swiper-slide"&&h("swiper-slide");return}return r.on("_slideClass",y),()=>{r&&r.off("_slideClass",y)}}}),Ba(()=>{r&&f.current&&!r.destroyed&&h(r.getSlideClasses(f.current))},[r]);const w={isActive:d.indexOf("swiper-slide-active")>=0,isVisible:d.indexOf("swiper-slide-visible")>=0,isPrev:d.indexOf("swiper-slide-prev")>=0,isNext:d.indexOf("swiper-slide-next")>=0},g=()=>typeof t=="function"?t(w):t,v=()=>{m(!0)};return K.createElement(e,iu({ref:f,className:f_(`${d}${n?` ${n}`:""}`),"data-swiper-slide-index":a,onLoad:v},s),i&&K.createElement(N1.Provider,{value:w},K.createElement("div",{className:"swiper-zoom-container","data-swiper-zoom":typeof i=="number"?i:void 0},g(),o&&!p&&K.createElement("div",{className:"swiper-lazy-preloader",ref:b=>{b&&(b.lazyPreloaderManaged=!0)}}))),!i&&K.createElement(N1.Provider,{value:w},g(),o&&!p&&K.createElement("div",{className:"swiper-lazy-preloader",ref:b=>{b&&(b.lazyPreloaderManaged=!0)}})))});g_.displayName="SwiperSlide";const GL=E.section`
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
`,qL=E.div`
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
`,YL=E.div`
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
`,XL=E(ge)`
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
`,KL=[{id:1,title:"Дідів хлів - найкращий вибір для Вашого велосипеда",desc:"Якісні запчастини, професійний серевіс та індивідуальний підхід. Створюйте ідеальний байк разом з нами",img:"/bike2-hero.jpeg",btn:"До каталогу",url:"/catalog"},{id:2,title:"Постійне оновлення товару",desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam reprehenderit obcaecati molestias est alias vitae laboriosam nulla perferendis officia incidunt aliquid voluptatem iste libero, officiis ex modi enim repellat. Consectetur!",img:"/inside.webp",btn:"До новинок",url:"/catalog/new"}],QL=()=>u.jsx(GL,{children:u.jsx(m_,{modules:[_6,P6,k6],spaceBetween:0,slidesPerView:1,navigation:!0,pagination:{clickable:!0},autoplay:{delay:5e3},loop:!0,children:KL.map(e=>u.jsx(g_,{children:u.jsx(qL,{bg:e.img,children:u.jsxs(YL,{children:[u.jsx("h1",{children:e.title}),u.jsx("p",{children:e.desc}),u.jsx(XL,{to:e.url,children:e.btn})]})})},e.id))})}),ZL=E.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  margin-bottom:30px;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`,ep=E.div`
  background-color: #ffffffde;
  padding: 20px;
  border: 1px solid #e3e2e2;
  border-radius: 8px;
`,tp=E.div`
  font-size: 24px;
  font-weight: bold;
  color: var(--orange-color);
`,np=E.div`
  font-size: 14px;
  color: #888;
`,v_=()=>u.jsxs(ZL,{children:[u.jsxs(ep,{children:[u.jsx(tp,{children:"3000+"}),u.jsx(np,{children:"Перевірених деталей"})]}),u.jsxs(ep,{children:[u.jsx(tp,{children:"6 років"}),u.jsx(np,{children:"Досвіду на ринку"})]}),u.jsxs(ep,{children:[u.jsx(tp,{children:"100%"}),u.jsx(np,{children:"Контроль якості"})]})]}),JL=Re.div`
  background:var(--background-color);
`,e8=Re.div`
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
`;const t8=()=>u.jsx(JL,{children:u.jsxs(e8,{children:[u.jsx(QL,{}),u.jsx(AC,{}),u.jsx(h6,{}),u.jsx(v_,{})]})}),n8=E.div`
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
`,r8=E.section`
  background-color:  var(--second-background);
`,i8=E.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  justify-content: flex-start;
  margin-bottom: 16px;

  @media (min-width: 768px) {
    display: none;
  }
`,o8=E.button`
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
`,a8=E.svg`
  width: 20px;
  height: 20px;
  fill: var(--white-color);
`,s8=E.button`
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
`;const l8=E.div`
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
`,c8=E.div`
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
`;const u8=E.div`
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
`;const d8=E.div`
  padding: 20px;
  border-top: 1px solid #eee;
  background: white;
`,f8=E.button`
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
`,y_=E.button`
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
`,p8=E.div`
  position: relative;
  display: inline-block;

`,h8=E.div`
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
`;var Xo=TypeError;const m8={},g8=Object.freeze(Object.defineProperty({__proto__:null,default:m8},Symbol.toStringTag,{value:"Module"})),v8=Ct(g8);var w0=typeof Map=="function"&&Map.prototype,rp=Object.getOwnPropertyDescriptor&&w0?Object.getOwnPropertyDescriptor(Map.prototype,"size"):null,ou=w0&&rp&&typeof rp.get=="function"?rp.get:null,B1=w0&&Map.prototype.forEach,S0=typeof Set=="function"&&Set.prototype,ip=Object.getOwnPropertyDescriptor&&S0?Object.getOwnPropertyDescriptor(Set.prototype,"size"):null,au=S0&&ip&&typeof ip.get=="function"?ip.get:null,V1=S0&&Set.prototype.forEach,y8=typeof WeakMap=="function"&&WeakMap.prototype,Va=y8?WeakMap.prototype.has:null,x8=typeof WeakSet=="function"&&WeakSet.prototype,Wa=x8?WeakSet.prototype.has:null,b8=typeof WeakRef=="function"&&WeakRef.prototype,W1=b8?WeakRef.prototype.deref:null,w8=Boolean.prototype.valueOf,S8=Object.prototype.toString,C8=Function.prototype.toString,E8=String.prototype.match,C0=String.prototype.slice,jr=String.prototype.replace,_8=String.prototype.toUpperCase,U1=String.prototype.toLowerCase,x_=RegExp.prototype.test,H1=Array.prototype.concat,In=Array.prototype.join,k8=Array.prototype.slice,G1=Math.floor,ym=typeof BigInt=="function"?BigInt.prototype.valueOf:null,op=Object.getOwnPropertySymbols,xm=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Symbol.prototype.toString:null,Mo=typeof Symbol=="function"&&typeof Symbol.iterator=="object",Ua=typeof Symbol=="function"&&Symbol.toStringTag&&(typeof Symbol.toStringTag===Mo||"symbol")?Symbol.toStringTag:null,b_=Object.prototype.propertyIsEnumerable,q1=(typeof Reflect=="function"?Reflect.getPrototypeOf:Object.getPrototypeOf)||([].__proto__===Array.prototype?function(e){return e.__proto__}:null);function Y1(e,t){if(e===1/0||e===-1/0||e!==e||e&&e>-1e3&&e<1e3||x_.call(/e/,t))return t;var n=/[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;if(typeof e=="number"){var r=e<0?-G1(-e):G1(e);if(r!==e){var i=String(r),o=C0.call(t,i.length+1);return jr.call(i,n,"$&_")+"."+jr.call(jr.call(o,/([0-9]{3})/g,"$&_"),/_$/,"")}}return jr.call(t,n,"$&_")}var bm=v8,X1=bm.custom,K1=C_(X1)?X1:null,w_={__proto__:null,double:'"',single:"'"},P8={__proto__:null,double:/(["\\])/g,single:/(['\\])/g},Td=function e(t,n,r,i){var o=n||{};if(Kn(o,"quoteStyle")&&!Kn(w_,o.quoteStyle))throw new TypeError('option "quoteStyle" must be "single" or "double"');if(Kn(o,"maxStringLength")&&(typeof o.maxStringLength=="number"?o.maxStringLength<0&&o.maxStringLength!==1/0:o.maxStringLength!==null))throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');var a=Kn(o,"customInspect")?o.customInspect:!0;if(typeof a!="boolean"&&a!=="symbol")throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");if(Kn(o,"indent")&&o.indent!==null&&o.indent!=="	"&&!(parseInt(o.indent,10)===o.indent&&o.indent>0))throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');if(Kn(o,"numericSeparator")&&typeof o.numericSeparator!="boolean")throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');var l=o.numericSeparator;if(typeof t>"u")return"undefined";if(t===null)return"null";if(typeof t=="boolean")return t?"true":"false";if(typeof t=="string")return __(t,o);if(typeof t=="number"){if(t===0)return 1/0/t>0?"0":"-0";var s=String(t);return l?Y1(t,s):s}if(typeof t=="bigint"){var c=String(t)+"n";return l?Y1(t,c):c}var f=typeof o.depth>"u"?5:o.depth;if(typeof r>"u"&&(r=0),r>=f&&f>0&&typeof t=="object")return wm(t)?"[Array]":"[Object]";var d=H8(o,r);if(typeof i>"u")i=[];else if(E_(i,t)>=0)return"[Circular]";function h(j,F,D){if(F&&(i=k8.call(i),i.push(F)),D){var z={depth:o.depth};return Kn(o,"quoteStyle")&&(z.quoteStyle=o.quoteStyle),e(j,z,r+1,i)}return e(j,o,r+1,i)}if(typeof t=="function"&&!Q1(t)){var p=L8(t),m=vl(t,h);return"[Function"+(p?": "+p:" (anonymous)")+"]"+(m.length>0?" { "+In.call(m,", ")+" }":"")}if(C_(t)){var y=Mo?jr.call(String(t),/^(Symbol\(.*\))_[^)]*$/,"$1"):xm.call(t);return typeof t=="object"&&!Mo?ma(y):y}if(V8(t)){for(var w="<"+U1.call(String(t.nodeName)),g=t.attributes||[],v=0;v<g.length;v++)w+=" "+g[v].name+"="+S_(O8(g[v].value),"double",o);return w+=">",t.childNodes&&t.childNodes.length&&(w+="..."),w+="</"+U1.call(String(t.nodeName))+">",w}if(wm(t)){if(t.length===0)return"[]";var b=vl(t,h);return d&&!U8(b)?"["+Sm(b,d)+"]":"[ "+In.call(b,", ")+" ]"}if(j8(t)){var C=vl(t,h);return!("cause"in Error.prototype)&&"cause"in t&&!b_.call(t,"cause")?"{ ["+String(t)+"] "+In.call(H1.call("[cause]: "+h(t.cause),C),", ")+" }":C.length===0?"["+String(t)+"]":"{ ["+String(t)+"] "+In.call(C,", ")+" }"}if(typeof t=="object"&&a){if(K1&&typeof t[K1]=="function"&&bm)return bm(t,{depth:f-r});if(a!=="symbol"&&typeof t.inspect=="function")return t.inspect()}if(R8(t)){var S=[];return B1&&B1.call(t,function(j,F){S.push(h(F,t,!0)+" => "+h(j,t))}),Z1("Map",ou.call(t),S,d)}if(N8(t)){var P=[];return V1&&V1.call(t,function(j){P.push(h(j,t))}),Z1("Set",au.call(t),P,d)}if(F8(t))return ap("WeakMap");if(B8(t))return ap("WeakSet");if(z8(t))return ap("WeakRef");if(I8(t))return ma(h(Number(t)));if(A8(t))return ma(h(ym.call(t)));if(M8(t))return ma(w8.call(t));if($8(t))return ma(h(String(t)));if(typeof window<"u"&&t===window)return"{ [object Window] }";if(typeof globalThis<"u"&&t===globalThis||typeof ne<"u"&&t===ne)return"{ [object globalThis] }";if(!T8(t)&&!Q1(t)){var k=vl(t,h),_=q1?q1(t)===Object.prototype:t instanceof Object||t.constructor===Object,T=t instanceof Object?"":"null prototype",$=!_&&Ua&&Object(t)===t&&Ua in t?C0.call(qr(t),8,-1):T?"Object":"",I=_||typeof t.constructor!="function"?"":t.constructor.name?t.constructor.name+" ":"",M=I+($||T?"["+In.call(H1.call([],$||[],T||[]),": ")+"] ":"");return k.length===0?M+"{}":d?M+"{"+Sm(k,d)+"}":M+"{ "+In.call(k,", ")+" }"}return String(t)};function S_(e,t,n){var r=n.quoteStyle||t,i=w_[r];return i+e+i}function O8(e){return jr.call(String(e),/"/g,"&quot;")}function $i(e){return!Ua||!(typeof e=="object"&&(Ua in e||typeof e[Ua]<"u"))}function wm(e){return qr(e)==="[object Array]"&&$i(e)}function T8(e){return qr(e)==="[object Date]"&&$i(e)}function Q1(e){return qr(e)==="[object RegExp]"&&$i(e)}function j8(e){return qr(e)==="[object Error]"&&$i(e)}function $8(e){return qr(e)==="[object String]"&&$i(e)}function I8(e){return qr(e)==="[object Number]"&&$i(e)}function M8(e){return qr(e)==="[object Boolean]"&&$i(e)}function C_(e){if(Mo)return e&&typeof e=="object"&&e instanceof Symbol;if(typeof e=="symbol")return!0;if(!e||typeof e!="object"||!xm)return!1;try{return xm.call(e),!0}catch{}return!1}function A8(e){if(!e||typeof e!="object"||!ym)return!1;try{return ym.call(e),!0}catch{}return!1}var D8=Object.prototype.hasOwnProperty||function(e){return e in this};function Kn(e,t){return D8.call(e,t)}function qr(e){return S8.call(e)}function L8(e){if(e.name)return e.name;var t=E8.call(C8.call(e),/^function\s*([\w$]+)/);return t?t[1]:null}function E_(e,t){if(e.indexOf)return e.indexOf(t);for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1}function R8(e){if(!ou||!e||typeof e!="object")return!1;try{ou.call(e);try{au.call(e)}catch{return!0}return e instanceof Map}catch{}return!1}function F8(e){if(!Va||!e||typeof e!="object")return!1;try{Va.call(e,Va);try{Wa.call(e,Wa)}catch{return!0}return e instanceof WeakMap}catch{}return!1}function z8(e){if(!W1||!e||typeof e!="object")return!1;try{return W1.call(e),!0}catch{}return!1}function N8(e){if(!au||!e||typeof e!="object")return!1;try{au.call(e);try{ou.call(e)}catch{return!0}return e instanceof Set}catch{}return!1}function B8(e){if(!Wa||!e||typeof e!="object")return!1;try{Wa.call(e,Wa);try{Va.call(e,Va)}catch{return!0}return e instanceof WeakSet}catch{}return!1}function V8(e){return!e||typeof e!="object"?!1:typeof HTMLElement<"u"&&e instanceof HTMLElement?!0:typeof e.nodeName=="string"&&typeof e.getAttribute=="function"}function __(e,t){if(e.length>t.maxStringLength){var n=e.length-t.maxStringLength,r="... "+n+" more character"+(n>1?"s":"");return __(C0.call(e,0,t.maxStringLength),t)+r}var i=P8[t.quoteStyle||"single"];i.lastIndex=0;var o=jr.call(jr.call(e,i,"\\$1"),/[\x00-\x1f]/g,W8);return S_(o,"single",t)}function W8(e){var t=e.charCodeAt(0),n={8:"b",9:"t",10:"n",12:"f",13:"r"}[t];return n?"\\"+n:"\\x"+(t<16?"0":"")+_8.call(t.toString(16))}function ma(e){return"Object("+e+")"}function ap(e){return e+" { ? }"}function Z1(e,t,n,r){var i=r?Sm(n,r):In.call(n,", ");return e+" ("+t+") {"+i+"}"}function U8(e){for(var t=0;t<e.length;t++)if(E_(e[t],`
`)>=0)return!1;return!0}function H8(e,t){var n;if(e.indent==="	")n="	";else if(typeof e.indent=="number"&&e.indent>0)n=In.call(Array(e.indent+1)," ");else return null;return{base:n,prev:In.call(Array(t+1),n)}}function Sm(e,t){if(e.length===0)return"";var n=`
`+t.prev+t.base;return n+In.call(e,","+n)+`
`+t.prev}function vl(e,t){var n=wm(e),r=[];if(n){r.length=e.length;for(var i=0;i<e.length;i++)r[i]=Kn(e,i)?t(e[i],e):""}var o=typeof op=="function"?op(e):[],a;if(Mo){a={};for(var l=0;l<o.length;l++)a["$"+o[l]]=o[l]}for(var s in e)Kn(e,s)&&(n&&String(Number(s))===s&&s<e.length||Mo&&a["$"+s]instanceof Symbol||(x_.call(/[^\w$]/,s)?r.push(t(s,e)+": "+t(e[s],e)):r.push(s+": "+t(e[s],e))));if(typeof op=="function")for(var c=0;c<o.length;c++)b_.call(e,o[c])&&r.push("["+t(o[c])+"]: "+t(e[o[c]],e));return r}var G8=Td,q8=Xo,jd=function(e,t,n){for(var r=e,i;(i=r.next)!=null;r=i)if(i.key===t)return r.next=i.next,n||(i.next=e.next,e.next=i),i},Y8=function(e,t){if(e){var n=jd(e,t);return n&&n.value}},X8=function(e,t,n){var r=jd(e,t);r?r.value=n:e.next={key:t,next:e.next,value:n}},K8=function(e,t){return e?!!jd(e,t):!1},Q8=function(e,t){if(e)return jd(e,t,!0)},Z8=function(){var t,n={assert:function(r){if(!n.has(r))throw new q8("Side channel does not contain "+G8(r))},delete:function(r){var i=Q8(t,r);return i&&t&&!t.next&&(t=void 0),!!i},get:function(r){return Y8(t,r)},has:function(r){return K8(t,r)},set:function(r,i){t||(t={next:void 0}),X8(t,r,i)}};return n},k_=Object,J8=Error,eR=EvalError,tR=RangeError,nR=ReferenceError,rR=SyntaxError,iR=URIError,oR=Math.abs,aR=Math.floor,sR=Math.max,lR=Math.min,cR=Math.pow,uR=Math.round,dR=Number.isNaN||function(t){return t!==t},fR=dR,pR=function(t){return fR(t)||t===0?t:t<0?-1:1},hR=Object.getOwnPropertyDescriptor,ic=hR;if(ic)try{ic([],"length")}catch{ic=null}var P_=ic,oc=Object.defineProperty||!1;if(oc)try{oc({},"a",{value:1})}catch{oc=!1}var O_=oc,sp,J1;function mR(){return J1||(J1=1,sp=function(){if(typeof Symbol!="function"||typeof Object.getOwnPropertySymbols!="function")return!1;if(typeof Symbol.iterator=="symbol")return!0;var t={},n=Symbol("test"),r=Object(n);if(typeof n=="string"||Object.prototype.toString.call(n)!=="[object Symbol]"||Object.prototype.toString.call(r)!=="[object Symbol]")return!1;var i=42;t[n]=i;for(var o in t)return!1;if(typeof Object.keys=="function"&&Object.keys(t).length!==0||typeof Object.getOwnPropertyNames=="function"&&Object.getOwnPropertyNames(t).length!==0)return!1;var a=Object.getOwnPropertySymbols(t);if(a.length!==1||a[0]!==n||!Object.prototype.propertyIsEnumerable.call(t,n))return!1;if(typeof Object.getOwnPropertyDescriptor=="function"){var l=Object.getOwnPropertyDescriptor(t,n);if(l.value!==i||l.enumerable!==!0)return!1}return!0}),sp}var lp,ex;function gR(){if(ex)return lp;ex=1;var e=typeof Symbol<"u"&&Symbol,t=mR();return lp=function(){return typeof e!="function"||typeof Symbol!="function"||typeof e("foo")!="symbol"||typeof Symbol("bar")!="symbol"?!1:t()},lp}var cp,tx;function T_(){return tx||(tx=1,cp=typeof Reflect<"u"&&Reflect.getPrototypeOf||null),cp}var up,nx;function j_(){if(nx)return up;nx=1;var e=k_;return up=e.getPrototypeOf||null,up}var dp,rx;function vR(){if(rx)return dp;rx=1;var e="Function.prototype.bind called on incompatible ",t=Object.prototype.toString,n=Math.max,r="[object Function]",i=function(s,c){for(var f=[],d=0;d<s.length;d+=1)f[d]=s[d];for(var h=0;h<c.length;h+=1)f[h+s.length]=c[h];return f},o=function(s,c){for(var f=[],d=c||0,h=0;d<s.length;d+=1,h+=1)f[h]=s[d];return f},a=function(l,s){for(var c="",f=0;f<l.length;f+=1)c+=l[f],f+1<l.length&&(c+=s);return c};return dp=function(s){var c=this;if(typeof c!="function"||t.apply(c)!==r)throw new TypeError(e+c);for(var f=o(arguments,1),d,h=function(){if(this instanceof d){var g=c.apply(this,i(f,arguments));return Object(g)===g?g:this}return c.apply(s,i(f,arguments))},p=n(0,c.length-f.length),m=[],y=0;y<p;y++)m[y]="$"+y;if(d=Function("binder","return function ("+a(m,",")+"){ return binder.apply(this,arguments); }")(h),c.prototype){var w=function(){};w.prototype=c.prototype,d.prototype=new w,w.prototype=null}return d},dp}var fp,ix;function $d(){if(ix)return fp;ix=1;var e=vR();return fp=Function.prototype.bind||e,fp}var pp,ox;function E0(){return ox||(ox=1,pp=Function.prototype.call),pp}var hp,ax;function $_(){return ax||(ax=1,hp=Function.prototype.apply),hp}var yR=typeof Reflect<"u"&&Reflect&&Reflect.apply,xR=$d(),bR=$_(),wR=E0(),SR=yR,CR=SR||xR.call(wR,bR),ER=$d(),_R=Xo,kR=E0(),PR=CR,I_=function(t){if(t.length<1||typeof t[0]!="function")throw new _R("a function is required");return PR(ER,kR,t)},mp,sx;function OR(){if(sx)return mp;sx=1;var e=I_,t=P_,n;try{n=[].__proto__===Array.prototype}catch(a){if(!a||typeof a!="object"||!("code"in a)||a.code!=="ERR_PROTO_ACCESS")throw a}var r=!!n&&t&&t(Object.prototype,"__proto__"),i=Object,o=i.getPrototypeOf;return mp=r&&typeof r.get=="function"?e([r.get]):typeof o=="function"?function(l){return o(l==null?l:i(l))}:!1,mp}var gp,lx;function TR(){if(lx)return gp;lx=1;var e=T_(),t=j_(),n=OR();return gp=e?function(i){return e(i)}:t?function(i){if(!i||typeof i!="object"&&typeof i!="function")throw new TypeError("getProto: not an object");return t(i)}:n?function(i){return n(i)}:null,gp}var vp,cx;function jR(){if(cx)return vp;cx=1;var e=Function.prototype.call,t=Object.prototype.hasOwnProperty,n=$d();return vp=n.call(e,t),vp}var ie,$R=k_,IR=J8,MR=eR,AR=tR,DR=nR,Ao=rR,vo=Xo,LR=iR,RR=oR,FR=aR,zR=sR,NR=lR,BR=cR,VR=uR,WR=pR,M_=Function,yp=function(e){try{return M_('"use strict"; return ('+e+").constructor;")()}catch{}},Es=P_,UR=O_,xp=function(){throw new vo},HR=Es?function(){try{return arguments.callee,xp}catch{try{return Es(arguments,"callee").get}catch{return xp}}}():xp,Bi=gR()(),Xe=TR(),GR=j_(),qR=T_(),A_=$_(),Ns=E0(),Xi={},YR=typeof Uint8Array>"u"||!Xe?ie:Xe(Uint8Array),mi={__proto__:null,"%AggregateError%":typeof AggregateError>"u"?ie:AggregateError,"%Array%":Array,"%ArrayBuffer%":typeof ArrayBuffer>"u"?ie:ArrayBuffer,"%ArrayIteratorPrototype%":Bi&&Xe?Xe([][Symbol.iterator]()):ie,"%AsyncFromSyncIteratorPrototype%":ie,"%AsyncFunction%":Xi,"%AsyncGenerator%":Xi,"%AsyncGeneratorFunction%":Xi,"%AsyncIteratorPrototype%":Xi,"%Atomics%":typeof Atomics>"u"?ie:Atomics,"%BigInt%":typeof BigInt>"u"?ie:BigInt,"%BigInt64Array%":typeof BigInt64Array>"u"?ie:BigInt64Array,"%BigUint64Array%":typeof BigUint64Array>"u"?ie:BigUint64Array,"%Boolean%":Boolean,"%DataView%":typeof DataView>"u"?ie:DataView,"%Date%":Date,"%decodeURI%":decodeURI,"%decodeURIComponent%":decodeURIComponent,"%encodeURI%":encodeURI,"%encodeURIComponent%":encodeURIComponent,"%Error%":IR,"%eval%":eval,"%EvalError%":MR,"%Float16Array%":typeof Float16Array>"u"?ie:Float16Array,"%Float32Array%":typeof Float32Array>"u"?ie:Float32Array,"%Float64Array%":typeof Float64Array>"u"?ie:Float64Array,"%FinalizationRegistry%":typeof FinalizationRegistry>"u"?ie:FinalizationRegistry,"%Function%":M_,"%GeneratorFunction%":Xi,"%Int8Array%":typeof Int8Array>"u"?ie:Int8Array,"%Int16Array%":typeof Int16Array>"u"?ie:Int16Array,"%Int32Array%":typeof Int32Array>"u"?ie:Int32Array,"%isFinite%":isFinite,"%isNaN%":isNaN,"%IteratorPrototype%":Bi&&Xe?Xe(Xe([][Symbol.iterator]())):ie,"%JSON%":typeof JSON=="object"?JSON:ie,"%Map%":typeof Map>"u"?ie:Map,"%MapIteratorPrototype%":typeof Map>"u"||!Bi||!Xe?ie:Xe(new Map()[Symbol.iterator]()),"%Math%":Math,"%Number%":Number,"%Object%":$R,"%Object.getOwnPropertyDescriptor%":Es,"%parseFloat%":parseFloat,"%parseInt%":parseInt,"%Promise%":typeof Promise>"u"?ie:Promise,"%Proxy%":typeof Proxy>"u"?ie:Proxy,"%RangeError%":AR,"%ReferenceError%":DR,"%Reflect%":typeof Reflect>"u"?ie:Reflect,"%RegExp%":RegExp,"%Set%":typeof Set>"u"?ie:Set,"%SetIteratorPrototype%":typeof Set>"u"||!Bi||!Xe?ie:Xe(new Set()[Symbol.iterator]()),"%SharedArrayBuffer%":typeof SharedArrayBuffer>"u"?ie:SharedArrayBuffer,"%String%":String,"%StringIteratorPrototype%":Bi&&Xe?Xe(""[Symbol.iterator]()):ie,"%Symbol%":Bi?Symbol:ie,"%SyntaxError%":Ao,"%ThrowTypeError%":HR,"%TypedArray%":YR,"%TypeError%":vo,"%Uint8Array%":typeof Uint8Array>"u"?ie:Uint8Array,"%Uint8ClampedArray%":typeof Uint8ClampedArray>"u"?ie:Uint8ClampedArray,"%Uint16Array%":typeof Uint16Array>"u"?ie:Uint16Array,"%Uint32Array%":typeof Uint32Array>"u"?ie:Uint32Array,"%URIError%":LR,"%WeakMap%":typeof WeakMap>"u"?ie:WeakMap,"%WeakRef%":typeof WeakRef>"u"?ie:WeakRef,"%WeakSet%":typeof WeakSet>"u"?ie:WeakSet,"%Function.prototype.call%":Ns,"%Function.prototype.apply%":A_,"%Object.defineProperty%":UR,"%Object.getPrototypeOf%":GR,"%Math.abs%":RR,"%Math.floor%":FR,"%Math.max%":zR,"%Math.min%":NR,"%Math.pow%":BR,"%Math.round%":VR,"%Math.sign%":WR,"%Reflect.getPrototypeOf%":qR};if(Xe)try{null.error}catch(e){var XR=Xe(Xe(e));mi["%Error.prototype%"]=XR}var KR=function e(t){var n;if(t==="%AsyncFunction%")n=yp("async function () {}");else if(t==="%GeneratorFunction%")n=yp("function* () {}");else if(t==="%AsyncGeneratorFunction%")n=yp("async function* () {}");else if(t==="%AsyncGenerator%"){var r=e("%AsyncGeneratorFunction%");r&&(n=r.prototype)}else if(t==="%AsyncIteratorPrototype%"){var i=e("%AsyncGenerator%");i&&Xe&&(n=Xe(i.prototype))}return mi[t]=n,n},ux={__proto__:null,"%ArrayBufferPrototype%":["ArrayBuffer","prototype"],"%ArrayPrototype%":["Array","prototype"],"%ArrayProto_entries%":["Array","prototype","entries"],"%ArrayProto_forEach%":["Array","prototype","forEach"],"%ArrayProto_keys%":["Array","prototype","keys"],"%ArrayProto_values%":["Array","prototype","values"],"%AsyncFunctionPrototype%":["AsyncFunction","prototype"],"%AsyncGenerator%":["AsyncGeneratorFunction","prototype"],"%AsyncGeneratorPrototype%":["AsyncGeneratorFunction","prototype","prototype"],"%BooleanPrototype%":["Boolean","prototype"],"%DataViewPrototype%":["DataView","prototype"],"%DatePrototype%":["Date","prototype"],"%ErrorPrototype%":["Error","prototype"],"%EvalErrorPrototype%":["EvalError","prototype"],"%Float32ArrayPrototype%":["Float32Array","prototype"],"%Float64ArrayPrototype%":["Float64Array","prototype"],"%FunctionPrototype%":["Function","prototype"],"%Generator%":["GeneratorFunction","prototype"],"%GeneratorPrototype%":["GeneratorFunction","prototype","prototype"],"%Int8ArrayPrototype%":["Int8Array","prototype"],"%Int16ArrayPrototype%":["Int16Array","prototype"],"%Int32ArrayPrototype%":["Int32Array","prototype"],"%JSONParse%":["JSON","parse"],"%JSONStringify%":["JSON","stringify"],"%MapPrototype%":["Map","prototype"],"%NumberPrototype%":["Number","prototype"],"%ObjectPrototype%":["Object","prototype"],"%ObjProto_toString%":["Object","prototype","toString"],"%ObjProto_valueOf%":["Object","prototype","valueOf"],"%PromisePrototype%":["Promise","prototype"],"%PromiseProto_then%":["Promise","prototype","then"],"%Promise_all%":["Promise","all"],"%Promise_reject%":["Promise","reject"],"%Promise_resolve%":["Promise","resolve"],"%RangeErrorPrototype%":["RangeError","prototype"],"%ReferenceErrorPrototype%":["ReferenceError","prototype"],"%RegExpPrototype%":["RegExp","prototype"],"%SetPrototype%":["Set","prototype"],"%SharedArrayBufferPrototype%":["SharedArrayBuffer","prototype"],"%StringPrototype%":["String","prototype"],"%SymbolPrototype%":["Symbol","prototype"],"%SyntaxErrorPrototype%":["SyntaxError","prototype"],"%TypedArrayPrototype%":["TypedArray","prototype"],"%TypeErrorPrototype%":["TypeError","prototype"],"%Uint8ArrayPrototype%":["Uint8Array","prototype"],"%Uint8ClampedArrayPrototype%":["Uint8ClampedArray","prototype"],"%Uint16ArrayPrototype%":["Uint16Array","prototype"],"%Uint32ArrayPrototype%":["Uint32Array","prototype"],"%URIErrorPrototype%":["URIError","prototype"],"%WeakMapPrototype%":["WeakMap","prototype"],"%WeakSetPrototype%":["WeakSet","prototype"]},Bs=$d(),su=jR(),QR=Bs.call(Ns,Array.prototype.concat),ZR=Bs.call(A_,Array.prototype.splice),dx=Bs.call(Ns,String.prototype.replace),lu=Bs.call(Ns,String.prototype.slice),JR=Bs.call(Ns,RegExp.prototype.exec),eF=/[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,tF=/\\(\\)?/g,nF=function(t){var n=lu(t,0,1),r=lu(t,-1);if(n==="%"&&r!=="%")throw new Ao("invalid intrinsic syntax, expected closing `%`");if(r==="%"&&n!=="%")throw new Ao("invalid intrinsic syntax, expected opening `%`");var i=[];return dx(t,eF,function(o,a,l,s){i[i.length]=l?dx(s,tF,"$1"):a||o}),i},rF=function(t,n){var r=t,i;if(su(ux,r)&&(i=ux[r],r="%"+i[0]+"%"),su(mi,r)){var o=mi[r];if(o===Xi&&(o=KR(r)),typeof o>"u"&&!n)throw new vo("intrinsic "+t+" exists, but is not available. Please file an issue!");return{alias:i,name:r,value:o}}throw new Ao("intrinsic "+t+" does not exist!")},_0=function(t,n){if(typeof t!="string"||t.length===0)throw new vo("intrinsic name must be a non-empty string");if(arguments.length>1&&typeof n!="boolean")throw new vo('"allowMissing" argument must be a boolean');if(JR(/^%?[^%]*%?$/,t)===null)throw new Ao("`%` may not be present anywhere but at the beginning and end of the intrinsic name");var r=nF(t),i=r.length>0?r[0]:"",o=rF("%"+i+"%",n),a=o.name,l=o.value,s=!1,c=o.alias;c&&(i=c[0],ZR(r,QR([0,1],c)));for(var f=1,d=!0;f<r.length;f+=1){var h=r[f],p=lu(h,0,1),m=lu(h,-1);if((p==='"'||p==="'"||p==="`"||m==='"'||m==="'"||m==="`")&&p!==m)throw new Ao("property names with quotes must have matching quotes");if((h==="constructor"||!d)&&(s=!0),i+="."+h,a="%"+i+"%",su(mi,a))l=mi[a];else if(l!=null){if(!(h in l)){if(!n)throw new vo("base intrinsic for "+t+" exists, but the property is not available.");return}if(Es&&f+1>=r.length){var y=Es(l,h);d=!!y,d&&"get"in y&&!("originalValue"in y.get)?l=y.get:l=l[h]}else d=su(l,h),l=l[h];d&&!s&&(mi[a]=l)}}return l},D_=_0,L_=I_,iF=L_([D_("%String.prototype.indexOf%")]),R_=function(t,n){var r=D_(t,!!n);return typeof r=="function"&&iF(t,".prototype.")>-1?L_([r]):r},oF=_0,Vs=R_,aF=Td,sF=Xo,fx=oF("%Map%",!0),lF=Vs("Map.prototype.get",!0),cF=Vs("Map.prototype.set",!0),uF=Vs("Map.prototype.has",!0),dF=Vs("Map.prototype.delete",!0),fF=Vs("Map.prototype.size",!0),F_=!!fx&&function(){var t,n={assert:function(r){if(!n.has(r))throw new sF("Side channel does not contain "+aF(r))},delete:function(r){if(t){var i=dF(t,r);return fF(t)===0&&(t=void 0),i}return!1},get:function(r){if(t)return lF(t,r)},has:function(r){return t?uF(t,r):!1},set:function(r,i){t||(t=new fx),cF(t,r,i)}};return n},pF=_0,Id=R_,hF=Td,yl=F_,mF=Xo,Vi=pF("%WeakMap%",!0),gF=Id("WeakMap.prototype.get",!0),vF=Id("WeakMap.prototype.set",!0),yF=Id("WeakMap.prototype.has",!0),xF=Id("WeakMap.prototype.delete",!0),bF=Vi?function(){var t,n,r={assert:function(i){if(!r.has(i))throw new mF("Side channel does not contain "+hF(i))},delete:function(i){if(Vi&&i&&(typeof i=="object"||typeof i=="function")){if(t)return xF(t,i)}else if(yl&&n)return n.delete(i);return!1},get:function(i){return Vi&&i&&(typeof i=="object"||typeof i=="function")&&t?gF(t,i):n&&n.get(i)},has:function(i){return Vi&&i&&(typeof i=="object"||typeof i=="function")&&t?yF(t,i):!!n&&n.has(i)},set:function(i,o){Vi&&i&&(typeof i=="object"||typeof i=="function")?(t||(t=new Vi),vF(t,i,o)):yl&&(n||(n=yl()),n.set(i,o))}};return r}:yl,wF=Xo,SF=Td,CF=Z8,EF=F_,_F=bF,kF=_F||EF||CF,k0=function(){var t,n={assert:function(r){if(!n.has(r)){var i=r&&Object(r)===r?"the given object key":SF(r);throw new wF("Side channel does not contain "+i)}},delete:function(r){return!!t&&t.delete(r)},get:function(r){return t&&t.get(r)},has:function(r){return!!t&&t.has(r)},set:function(r,i){t||(t=kF()),t.set(r,i)}};return n},px=String.prototype.replace,hx=/%20/g,xl={RFC1738:"RFC1738",RFC3986:"RFC3986",WHATWG:"WHATWG"},P0={default:xl.RFC3986,formatters:{RFC1738:function(e){return px.call(e,hx,"+")},RFC3986:function(e){return String(e)},WHATWG:function(e){return px.call(e,hx,"+")}},RFC1738:xl.RFC1738,RFC3986:xl.RFC3986,WHATWG:xl.WHATWG},bp=P0,Md=k0,mx=O_,ac=Object.prototype.hasOwnProperty,Mn=Array.isArray,Ad=Md(),Er=function(t,n){return Ad.set(t,n),t},ni=function(t){return Ad.has(t)},ka=function(t){return Ad.get(t)},Cm=function(t,n){Ad.set(t,n)},O0=Md(),bl=function(t,n){return O0.set(t,n),t},wp=function(t){return O0.has(t)},gx=function(t){return O0.get(t)},Pn=function(){for(var e=[],t=0;t<256;++t)e[e.length]="%"+((t<16?"0":"")+t.toString(16)).toUpperCase();return e}(),PF=function(t){for(;t.length>1;){var n=t.pop(),r=n.obj[n.prop];if(Mn(r)){for(var i=[],o=0;o<r.length;++o)typeof r[o]<"u"&&(i[i.length]=r[o]);n.obj[n.prop]=i}}},ci=function(t,n){for(var r=n&&n.plainObjects?{__proto__:null}:{},i=0;i<t.length;++i)typeof t[i]<"u"&&(r[i]=t[i]);return r},cu=function(t,n,r){n==="__proto__"&&mx?mx(t,n,{configurable:!0,enumerable:!0,value:r,writable:!0}):t[n]=r},OF=function(t,n){for(var r=n,i=Object.keys(t),o=0;o<i.length;++o){var a=parseInt(i[o],10);String(a)===i[o]&&a>r&&(r=a)}return r},vx=function(t){for(var n=0,r=0;r<t.length;++r)ac.call(t,r)&&(n+=1);return n},yx=function(t,n,r){var i=[t,n];if(r&&typeof r.arrayLimit=="number"&&i.length>r.arrayLimit){if(r.throwOnLimitExceeded)throw new RangeError("Array limit exceeded. Only "+r.arrayLimit+" element"+(r.arrayLimit===1?"":"s")+" allowed in an array.");return Er(ci(i,r),1)}return i},TF=function e(t,n,r){if(!n)return t;if(typeof n!="object"&&typeof n!="function"){if(Mn(t)){var i=t.length;if(r&&typeof r.arrayLimit=="number"&&vx(t)>=r.arrayLimit){if(r.throwOnLimitExceeded)throw new RangeError("Array limit exceeded. Only "+r.arrayLimit+" element"+(r.arrayLimit===1?"":"s")+" allowed in an array.");return Er(ci(t.concat(n),r),i)}t[i]=n}else if(t&&typeof t=="object")if(ni(t)){var o=ka(t)+1;t[o]=n,Cm(t,o)}else if(r&&r.strictMerge&&wp(t)){var a=gx(t)+1;if(r.throwOnLimitExceeded&&typeof r.arrayLimit=="number"&&a>=r.arrayLimit)throw new RangeError("Array limit exceeded. Only "+r.arrayLimit+" element"+(r.arrayLimit===1?"":"s")+" allowed in an array.");t[a]=n,bl(t,a)}else if(r&&r.strictMerge){var l=yx(t,n,r);return Mn(l)?bl(l,1):l}else(r&&(r.plainObjects||r.allowPrototypes)||!ac.call(Object.prototype,n))&&(t[n]=!0);else return yx(t,n,r);return t}if(!t||typeof t!="object"){if(ni(n)){for(var s=Object.keys(n),c=r&&r.plainObjects?{__proto__:null,0:t}:{0:t},f=0;f<s.length;f++){var d=parseInt(s[f],10);c[d+1]=n[s[f]]}return Er(c,ka(n)+1)}var h=[t].concat(n);if(r&&typeof r.arrayLimit=="number"&&h.length>r.arrayLimit){if(r.throwOnLimitExceeded)throw new RangeError("Array limit exceeded. Only "+r.arrayLimit+" element"+(r.arrayLimit===1?"":"s")+" allowed in an array.");return Er(ci(h,r),h.length-1)}return h}var p=t;if(Mn(t)&&!Mn(n)&&(p=ci(t,r),wp(t)&&bl(p,t.length-1)),Mn(t)&&Mn(n)){if(n.forEach(function(m,y){if(ac.call(t,y)){var w=t[y];w&&typeof w=="object"&&m&&typeof m=="object"?t[y]=e(w,m,r):t[t.length]=m}else t[y]=m}),r&&typeof r.arrayLimit=="number"&&vx(t)>r.arrayLimit){if(r.throwOnLimitExceeded)throw new RangeError("Array limit exceeded. Only "+r.arrayLimit+" element"+(r.arrayLimit===1?"":"s")+" allowed in an array.");return Er(ci(t,r),t.length-1)}return t}return Object.keys(n).reduce(function(m,y){var w=n[y];if(ac.call(m,y)?cu(m,y,e(m[y],w,r)):cu(m,y,w),ni(n)&&!ni(m)&&Er(m,OF(m,ka(n))),ni(m)){var g=parseInt(y,10);String(g)===y&&g>=0&&g>ka(m)&&Cm(m,g)}if(wp(m)){var v=parseInt(y,10);String(v)===y&&v>gx(m)&&bl(m,v)}return m},p)},jF=function(t,n){return Object.keys(n).reduce(function(r,i){return cu(r,i,n[i]),r},t)},$F=function(e,t,n){if(typeof e=="string"&&e.indexOf("%")===-1)return e.indexOf("+")===-1?e:e.replace(/\+/g," ");var r=e.replace(/\+/g," ");if(n==="iso-8859-1")return r.replace(/%[0-9a-f]{2}/gi,unescape);try{return decodeURIComponent(r)}catch{return r}},IF=typeof Symbol=="function"&&typeof Symbol.toPrimitive=="symbol",MF=Array.prototype.join,AF=Array.prototype.toString,DF=Object.prototype.toString,z_=function e(t,n){if(!t||typeof t!="object"&&typeof t!="function"||IF&&t[Symbol.toPrimitive]!=null)return t;if(Mn(t)&&t.toString===AF&&t.join===MF){var r=n||Md();if(r.has(t))return"";r.set(t,!0);for(var i,o=0;o<t.length;o+=1){var a=t[o],l=e(a,r);if(!i&&l!==a){i=[];for(var s=0;s<o;s+=1)i[s]=t[s]}i&&(i[o]=l)}return r.delete(t),i||t}if(typeof t.toString=="function")return t;var c=t.valueOf;if(typeof c=="function"){var f=c.call(t);if(!f||typeof f!="object"&&typeof f!="function")return String(f)}return DF.call(t)},wl=1024,LF=function(t,n,r,i,o){if(t.length===0)return t;var a=t;if(typeof t=="symbol"?a=Symbol.prototype.toString.call(t):typeof t!="string"&&(a=String(z_(t))),r==="iso-8859-1")return escape(a).replace(/%u[0-9a-f]{4}/gi,function(y){return"%26%23"+parseInt(y.slice(2),16)+"%3B"}).replace(/\+/g,"%2B");for(var l="",s=0;s<a.length;s+=wl){var c=a.length>=wl?a.slice(s,s+wl):a;if(s+wl<a.length){var f=c.charCodeAt(c.length-1);f>=55296&&f<=56319&&(c=c.slice(0,-1),s-=1)}for(var d=[],h=0;h<c.length;++h){var p=c.charCodeAt(h);if(p===45||p===46||p===95||p===126&&o!==bp.WHATWG||p>=48&&p<=57||p>=65&&p<=90||p>=97&&p<=122||o===bp.RFC1738&&(p===40||p===41)||o===bp.WHATWG&&p===42){d[d.length]=c.charAt(h);continue}if(p<128){d[d.length]=Pn[p];continue}if(p<2048){d[d.length]=Pn[192|p>>6]+Pn[128|p&63];continue}if(p<55296||p>=57344){d[d.length]=Pn[224|p>>12]+Pn[128|p>>6&63]+Pn[128|p&63];continue}var m=c.charCodeAt(h+1);p<=56319&&m>=56320&&m<=57343?(h+=1,p=65536+((p&1023)<<10|m&1023),d[d.length]=Pn[240|p>>18]+Pn[128|p>>12&63]+Pn[128|p>>6&63]+Pn[128|p&63]):d[d.length]="%EF%BF%BD"}l+=d.join("")}return l},RF=function(t){for(var n=[{obj:{o:t},prop:"o"}],r=Md(),i=0;i<n.length;++i)for(var o=n[i],a=o.obj[o.prop],l=Object.keys(a),s=0;s<l.length;++s){var c=l[s],f=a[c];typeof f=="object"&&f!==null&&!r.has(f)&&(n[n.length]={obj:a,prop:c},r.set(f,!0))}return PF(n),t},FF=function(t){return Object.prototype.toString.call(t)==="[object RegExp]"},zF=function(t){return!t||typeof t!="object"?!1:!!(t.constructor&&typeof t.constructor.isBuffer=="function"&&t.constructor.isBuffer(t))},NF=function(t,n,r,i,o){if(ni(t)){if(o)throw new RangeError("Array limit exceeded. Only "+r+" element"+(r===1?"":"s")+" allowed in an array.");for(var a=Mn(n)?n:[n],l=ka(t),s=0;s<a.length;++s)l+=1,t[l]=a[s];return Cm(t,l),t}var c=[].concat(t,n);if(c.length>r){if(o)throw new RangeError("Array limit exceeded. Only "+r+" element"+(r===1?"":"s")+" allowed in an array.");return Er(ci(c,{plainObjects:i}),c.length-1)}return c},BF=function(t,n){if(Mn(t)){for(var r=[],i=0;i<t.length;i+=1)r[r.length]=n(t[i]);return r}return n(t)},N_={arrayToObject:ci,assign:jF,combine:NF,compact:RF,decode:$F,encode:LF,isBuffer:zF,isOverflow:ni,isRegExp:FF,markOverflow:Er,maybeMap:BF,merge:TF,setProperty:cu,toCoercible:z_},B_=k0,Pa=N_,Ha=P0,xx=Object.prototype.hasOwnProperty,V_={brackets:function(t){return t+"[]"},comma:"comma",indices:function(t,n){return t+"["+n+"]"},repeat:function(t){return t}},Tn=Array.isArray,VF=Array.prototype.push,W_=function(e,t){VF.apply(e,Tn(t)?t:[t])},WF=Date.prototype.toISOString,bx=Ha.default,Ie={addQueryPrefix:!1,allowDots:!1,allowEmptyArrays:!1,arrayFormat:"indices",charset:"utf-8",charsetSentinel:!1,commaRoundTrip:!1,delimiter:"&",depth:1/0,encode:!0,encodeDotInKeys:!1,encoder:Pa.encode,encodeValuesOnly:!1,filter:void 0,format:bx,formatter:Ha.formatters[bx],indices:!1,serializeDate:function(t){return WF.call(t)},skipNulls:!1,strictNullHandling:!1},UF=function(t){return typeof t=="string"||typeof t=="number"||typeof t=="boolean"||typeof t=="symbol"||typeof t=="bigint"},Sp={},HF=function e(t,n,r,i,o,a,l,s,c,f,d,h,p,m,y,w,g,v,b,C){var S=t;if(C>b)throw new RangeError("Input depth exceeded depth option of "+b);for(var P=v,k=0,_=!1;(P=P.get(Sp))!==void 0&&!_;){var T=P.get(t);if(k+=1,typeof T<"u"){if(T===k)throw new RangeError("Cyclic object value");_=!0}typeof P.get(Sp)>"u"&&(k=0)}if(S=typeof f=="function"?f(n,S):S,S instanceof Date?S=p(S):r==="comma"&&Tn(S)&&(S=Pa.maybeMap(S,function(L){return L instanceof Date?p(L):L})),S===null){if(a)return y(c&&!w?c(n,Ie.encoder,g,"key",m):n);S=""}if(UF(S)||Pa.isBuffer(S)){if(c){var $=w?n:c(n,Ie.encoder,g,"key",m);return[y($)+"="+y(c(S,Ie.encoder,g,"value",m))]}return[y(n)+"="+y(String(S))]}var I=[];if(typeof S>"u")return I;var M;if(r==="comma"&&Tn(S))w&&c&&(S=Pa.maybeMap(S,function(L){return L==null?L:c(L,Ie.encoder,g,"value",m)})),M=[{value:S.length>0?Pa.toCoercible(S).join(",")||null:void 0}];else if(Tn(f))M=f;else{var j=Object.keys(S);M=d?j.sort(d):j}var F=String(n),D=i&&Tn(S)&&S.length===1?F+"[]":F;if(o&&Tn(S)&&S.length===0&&Object.keys(S).length===0)return y(c&&!w?c(D,Ie.encoder,g,"key",m):D)+"[]";for(var z=0;z<M.length;++z){var R=M[z],O=typeof R=="object"&&R&&typeof R.value<"u"?R.value:S[R];if(!(l&&O===null)){var A=h&&s?String(R).replace(/\./g,"%2E"):String(R),N=Tn(S)?typeof r=="function"?r(D,A):D:D+(h?"."+A:"["+A+"]");v.set(t,k);var B=B_();B.set(Sp,v),W_(I,e(O,N,r,i,o,a,l,s,r==="comma"&&w&&Tn(S)?null:c,f,d,h,p,m,y,w,g,B,b,C+1))}}return I},GF=function(t){if(!t)return Ie;if(typeof t.allowEmptyArrays<"u"&&typeof t.allowEmptyArrays!="boolean")throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");if(typeof t.encodeDotInKeys<"u"&&typeof t.encodeDotInKeys!="boolean")throw new TypeError("`encodeDotInKeys` option can only be `true` or `false`, when provided");if(t.encoder!==null&&typeof t.encoder<"u"&&typeof t.encoder!="function")throw new TypeError("Encoder has to be a function.");var n=t.charset||Ie.charset;if(typeof t.charset<"u"&&t.charset!=="utf-8"&&t.charset!=="iso-8859-1")throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");var r=Ha.default;if(typeof t.format<"u"){if(!xx.call(Ha.formatters,t.format))throw new TypeError("Unknown format option provided.");r=t.format}var i=Ha.formatters[r],o=Ie.filter;(typeof t.filter=="function"||Tn(t.filter))&&(o=t.filter);var a;if(xx.call(V_,t.arrayFormat)?a=t.arrayFormat:"indices"in t?a=t.indices?"indices":"repeat":a=Ie.arrayFormat,"commaRoundTrip"in t&&typeof t.commaRoundTrip!="boolean")throw new TypeError("`commaRoundTrip` must be a boolean, or absent");var l=typeof t.allowDots>"u"?t.encodeDotInKeys===!0?!0:Ie.allowDots:!!t.allowDots;return{addQueryPrefix:typeof t.addQueryPrefix=="boolean"?t.addQueryPrefix:Ie.addQueryPrefix,allowDots:l,allowEmptyArrays:typeof t.allowEmptyArrays=="boolean"?!!t.allowEmptyArrays:Ie.allowEmptyArrays,arrayFormat:a,charset:n,charsetSentinel:typeof t.charsetSentinel=="boolean"?t.charsetSentinel:Ie.charsetSentinel,commaRoundTrip:!!t.commaRoundTrip,delimiter:typeof t.delimiter>"u"?Ie.delimiter:t.delimiter,depth:typeof t.depth=="number"?t.depth:Ie.depth,encode:typeof t.encode=="boolean"?t.encode:Ie.encode,encodeDotInKeys:typeof t.encodeDotInKeys=="boolean"?t.encodeDotInKeys:Ie.encodeDotInKeys,encoder:typeof t.encoder=="function"?t.encoder:Ie.encoder,encodeValuesOnly:typeof t.encodeValuesOnly=="boolean"?t.encodeValuesOnly:Ie.encodeValuesOnly,filter:o,format:r,formatter:i,serializeDate:typeof t.serializeDate=="function"?t.serializeDate:Ie.serializeDate,skipNulls:typeof t.skipNulls=="boolean"?t.skipNulls:Ie.skipNulls,sort:typeof t.sort=="function"?t.sort:null,strictNullHandling:typeof t.strictNullHandling=="boolean"?t.strictNullHandling:Ie.strictNullHandling}},qF=function(e,t){var n=e,r=GF(t),i,o;typeof r.filter=="function"?(o=r.filter,n=o("",n)):Tn(r.filter)&&(o=r.filter.slice(),i=o);var a=[];if(typeof n!="object"||n===null)return"";var l=V_[r.arrayFormat],s=l==="comma"&&r.commaRoundTrip;i||(i=Object.keys(n)),r.sort&&i.sort(r.sort);for(var c=B_(),f=0;f<i.length;++f){var d=i[f];if(!(typeof d>"u"||d===null)){var h=n[d];if(!(r.skipNulls&&h===null)){var p=r.encodeDotInKeys?String(d).replace(/\./g,"%2E"):String(d);W_(a,HF(h,p,l,s,r.allowEmptyArrays,r.strictNullHandling,r.skipNulls,r.encodeDotInKeys,r.encode?r.encoder:null,o,r.sort,r.allowDots,r.serializeDate,r.format,r.formatter,r.encodeValuesOnly,r.charset,c,r.depth,0))}}}var m=a.join(r.delimiter),y=r.addQueryPrefix===!0?"?":"";return r.charsetSentinel&&(r.charset==="iso-8859-1"?y+="utf8=%26%2310003%3B"+r.delimiter:y+="utf8=%E2%9C%93"+r.delimiter),m.length>0?y+m:""},YF=k0,Wt=N_,sc=Object.prototype.hasOwnProperty,Ga=Array.isArray,U_=Object.getPrototypeOf,wx=String.fromCharCode,XF=function(t){if(!t||typeof t!="object")return!1;if(Ga(t))return!0;var n=U_(t);return n===Object.prototype||n===null},KF=function(t){if(Ga(t)){var n=[];return n.length=t.length,n}return U_(t)===null?{__proto__:null}:{}},QF=function(t){for(var n=YF(),r={},i=[{source:t,target:r}],o=0;o<i.length;++o)for(var a=i[o].source,l=i[o].target,s=Object.keys(a),c=0;c<s.length;++c){var f=a[s[c]];if(XF(f)){if(!n.has(f)){var d=KF(f);n.set(f,d),i[i.length]={source:f,target:d}}Wt.setProperty(l,s[c],n.get(f))}else Wt.setProperty(l,s[c],f)}return r},Pe={allowDots:!1,allowEmptyArrays:!1,allowPrototypes:!1,allowSparse:!1,arrayLimit:20,charset:"utf-8",charsetSentinel:!1,comma:!1,decodeDotInKeys:!1,decoder:Wt.decode,delimiter:"&",depth:5,duplicates:"combine",ignoreQueryPrefix:!1,interpretNumericEntities:!1,parameterLimit:1e3,parseArrays:!0,plainObjects:!1,strictDepth:!1,strictMerge:!0,strictNullHandling:!1,throwOnLimitExceeded:!1},ZF=function(e){return e.replace(/&#(\d+);/g,function(t,n){var r=parseInt(n,10);return r>65535&&r<=1114111?(r-=65536,wx(55296|r>>10,56320|r&1023)):wx(r)})},H_=function(e,t,n){if(e&&typeof e=="string"&&t.comma&&e.indexOf(",")>-1){if(t.throwOnLimitExceeded)for(var r=0,i=e.indexOf(",");i>-1;){if(r+=1,r>=t.arrayLimit)throw new RangeError("Array limit exceeded. Only "+t.arrayLimit+" element"+(t.arrayLimit===1?"":"s")+" allowed in an array.");i=e.indexOf(",",i+1)}return e.split(",")}if(t.throwOnLimitExceeded&&n>=t.arrayLimit&&n>0)throw new RangeError("Array limit exceeded. Only "+t.arrayLimit+" element"+(t.arrayLimit===1?"":"s")+" allowed in an array.");return e},JF="utf8=%26%2310003%3B",ez="utf8=%E2%9C%93",tz=function(t,n){var r={__proto__:null},i=n.ignoreQueryPrefix?t.replace(/^\?/,""):t;i=i.replace(/%5B/gi,"[").replace(/%5D/gi,"]");var o=n.parameterLimit===1/0?void 0:n.parameterLimit,a=i.split(n.delimiter,n.throwOnLimitExceeded&&typeof o<"u"?o+1:o);if(n.throwOnLimitExceeded&&typeof o<"u"&&a.length>o)throw new RangeError("Parameter limit exceeded. Only "+o+" parameter"+(o===1?"":"s")+" allowed.");var l=-1,s,c=n.charset;if(n.charsetSentinel)for(s=0;s<a.length;++s)a[s].indexOf("utf8=")===0&&(a[s]===ez?c="utf-8":a[s]===JF&&(c="iso-8859-1"),l=s,s=a.length);for(s=0;s<a.length;++s)if(s!==l){var f=a[s],d=f.indexOf("]="),h=d===-1?f.indexOf("="):d+1,p=h>1&&f.slice(h-2,h)==="[]",m,y;if(h===-1?(m=n.decoder(f,Pe.decoder,c,"key"),y=n.strictNullHandling?null:""):(m=n.decoder(f.slice(0,h),Pe.decoder,c,"key"),m!==null&&(y=Wt.maybeMap(H_(f.slice(h+1),n,Ga(r[m])&&(n.duplicates==="combine"||p)?r[m].length:0),function(g){return n.decoder(g,Pe.decoder,c,"value")}))),y&&n.interpretNumericEntities&&c==="iso-8859-1"&&(y=Wt.maybeMap(y,function(g){return g&&ZF(String(g))})),p&&(y=Ga(y)?[y]:y),n.comma&&Ga(y)&&y.length>n.arrayLimit&&(y=Wt.combine([],y,n.arrayLimit,n.plainObjects,n.throwOnLimitExceeded)),m!==null){var w=sc.call(r,m);w&&(n.duplicates==="combine"||p)?r[m]=Wt.combine(r[m],y,n.arrayLimit,n.plainObjects,n.throwOnLimitExceeded):(!w||n.duplicates==="last")&&(r[m]=y)}}return r},G_=function(t){return t.charAt(0)==="["&&t.charAt(t.length-1)==="]"?t.slice(1,-1):t},nz=function(e,t,n,r){var i=0;if(e.length>0&&e[e.length-1]==="[]"){var o=e.slice(0,-1).join("");i=Array.isArray(t)&&t[o]?t[o].length:0}for(var a=r?t:H_(t,n,i),l=e.length-1;l>=0;--l){var s,c=e[l];if(c==="[]"&&n.parseArrays)Wt.isOverflow(a)?s=a:s=n.allowEmptyArrays&&(a===""||n.strictNullHandling&&a===null)?[]:Wt.combine([],a,n.arrayLimit,n.plainObjects,n.throwOnLimitExceeded);else{s=n.plainObjects?{__proto__:null}:{};var f=G_(c),d=n.decodeDotInKeys?f.replace(/%2E/gi,"."):f,h=parseInt(d,10),p=!isNaN(h)&&c!==d&&String(h)===d&&h>=0&&n.parseArrays;if(!n.parseArrays&&d==="")s[0]=a;else if(p&&h<n.arrayLimit)s=[],s[h]=a;else{if(p&&n.throwOnLimitExceeded)throw new RangeError("Array limit exceeded. Only "+n.arrayLimit+" element"+(n.arrayLimit===1?"":"s")+" allowed in an array.");p?(s[h]=a,Wt.markOverflow(s,h)):d!=="__proto__"&&(s[d]=a)}}a=s}return a},rz=function(t){for(var n="",r=0,i=0;i<t.length;i+=1){var o=t.charCodeAt(i);if(o===91)r+=1,n+="[";else if(o===93)r>0&&(r-=1),n+="]";else if(o===46&&r===0&&i+1<t.length&&t.charCodeAt(i+1)!==46&&t.charCodeAt(i+1)!==91){for(var a=i+1,l=a;l<t.length&&t.charCodeAt(l)!==46&&t.charCodeAt(l)!==91;)l+=1;n+="["+t.slice(a,l)+"]",i=l-1}else n+=t.charAt(i)}return n},iz=function(t,n){var r=n.allowDots?rz(t):t;if(n.depth<=0)return!n.plainObjects&&sc.call(Object.prototype,G_(r))&&!n.allowPrototypes?void 0:[r];var i=[],o=r.indexOf("["),a=o>=0?r.slice(0,o):r;if(a){if(!n.plainObjects&&sc.call(Object.prototype,a)&&!n.allowPrototypes)return;i[i.length]=a}for(var l=r.length,s=o,c=0;s>=0&&c<n.depth;){for(var f=1,d=s+1,h=-1;d<l&&h<0;){var p=r.charCodeAt(d);p===91?f+=1:p===93&&(f-=1,f===0&&(h=d)),d+=1}if(h<0)return i[i.length]="["+r.slice(s)+"]",i;var m=r.slice(s,h+1),y=m.slice(1,-1);if(!n.plainObjects&&sc.call(Object.prototype,y)&&!n.allowPrototypes)return;i[i.length]=m,c+=1,s=r.indexOf("[",h+1)}if(s>=0){if(n.strictDepth===!0)throw new RangeError("Input depth exceeded depth option of "+n.depth+" and strictDepth is true");i[i.length]="["+r.slice(s)+"]"}return i},oz=function(t,n,r,i){if(t){var o=iz(t,r);if(o)return nz(o,n,r,i)}},az=function(t){if(!t)return Pe;if(typeof t.allowEmptyArrays<"u"&&typeof t.allowEmptyArrays!="boolean")throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");if(typeof t.decodeDotInKeys<"u"&&typeof t.decodeDotInKeys!="boolean")throw new TypeError("`decodeDotInKeys` option can only be `true` or `false`, when provided");if(t.decoder!==null&&typeof t.decoder<"u"&&typeof t.decoder!="function")throw new TypeError("Decoder has to be a function.");if(typeof t.charset<"u"&&t.charset!=="utf-8"&&t.charset!=="iso-8859-1")throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");if(typeof t.throwOnLimitExceeded<"u"&&typeof t.throwOnLimitExceeded!="boolean")throw new TypeError("`throwOnLimitExceeded` option must be a boolean");var n=typeof t.charset>"u"?Pe.charset:t.charset,r=typeof t.duplicates>"u"?Pe.duplicates:t.duplicates;if(r!=="combine"&&r!=="first"&&r!=="last")throw new TypeError("The duplicates option must be either combine, first, or last");var i=typeof t.allowDots>"u"?t.decodeDotInKeys===!0?!0:Pe.allowDots:!!t.allowDots;return{allowDots:i,allowEmptyArrays:typeof t.allowEmptyArrays=="boolean"?!!t.allowEmptyArrays:Pe.allowEmptyArrays,allowPrototypes:typeof t.allowPrototypes=="boolean"?t.allowPrototypes:Pe.allowPrototypes,allowSparse:typeof t.allowSparse=="boolean"?t.allowSparse:Pe.allowSparse,arrayLimit:typeof t.arrayLimit=="number"?t.arrayLimit:Pe.arrayLimit,charset:n,charsetSentinel:typeof t.charsetSentinel=="boolean"?t.charsetSentinel:Pe.charsetSentinel,comma:typeof t.comma=="boolean"?t.comma:Pe.comma,decodeDotInKeys:typeof t.decodeDotInKeys=="boolean"?t.decodeDotInKeys:Pe.decodeDotInKeys,decoder:typeof t.decoder=="function"?t.decoder:Pe.decoder,delimiter:typeof t.delimiter=="string"||Wt.isRegExp(t.delimiter)?t.delimiter:Pe.delimiter,depth:typeof t.depth=="number"||t.depth===!1?+t.depth:Pe.depth,duplicates:r,ignoreQueryPrefix:t.ignoreQueryPrefix===!0,interpretNumericEntities:typeof t.interpretNumericEntities=="boolean"?t.interpretNumericEntities:Pe.interpretNumericEntities,parameterLimit:typeof t.parameterLimit=="number"?t.parameterLimit:Pe.parameterLimit,parseArrays:t.parseArrays!==!1,plainObjects:typeof t.plainObjects=="boolean"?t.plainObjects:Pe.plainObjects,strictDepth:typeof t.strictDepth=="boolean"?!!t.strictDepth:Pe.strictDepth,strictMerge:typeof t.strictMerge=="boolean"?!!t.strictMerge:Pe.strictMerge,strictNullHandling:typeof t.strictNullHandling=="boolean"?t.strictNullHandling:Pe.strictNullHandling,throwOnLimitExceeded:typeof t.throwOnLimitExceeded=="boolean"?t.throwOnLimitExceeded:!1}},sz=function(e,t){var n=az(t);if(e===""||e===null||typeof e>"u")return n.plainObjects?{__proto__:null}:{};for(var r=typeof e=="string"?tz(e,n):QF(e),i=n.plainObjects?{__proto__:null}:{},o=Object.keys(r),a=0;a<o.length;++a){var l=o[a],s=oz(l,r[l],n,typeof e=="string");i=Wt.merge(i,s,n)}return n.allowSparse===!0?i:Wt.compact(i)},lz=qF,cz=sz,uz=P0,dz={formats:uz,parse:cz,stringify:lz};const T0=Ro(dz),fz=E.aside`

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
`,pz=E.h3`
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
`;const hz=E.div`
  border-bottom: 1px solid #eee;
  padding: 12px;
  margin-bottom: 12px;

  &:last-child {
    border-bottom: none;
  }
`,mz=E.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  padding: 8px 0;
  
  &:hover p {
    color: #85683d;
  }
`,gz=E.p`
  font-weight: 600;
  font-size: 16px;
  margin: 0;
  color: #222;
  transition: color 0.2s;
`,vz=E.span`
  border: solid #555;
  border-width: 0 2px 2px 0;
  display: inline-block;
  padding: 3px;
  transform: ${e=>e.isOpen?"rotate(-135deg)":"rotate(45deg)"};
  transition: transform 0.3s ease;
`,yz=E.div`
  max-height: ${e=>e.isOpen?"500px":"0"};
  overflow: hidden;
  transition: max-height 0.3s ease-in-out, opacity 0.3s;
  opacity: ${e=>e.isOpen?"1":"0"};
  padding: ${e=>e.isOpen?"12px":"0"};
`,xz=E.label`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  cursor: pointer;
  font-size: 15px;
  color: #444;

  &:hover span:first-of-type {
    border-color: #85683d;
  }
`,Em=E.input.attrs({type:"checkbox"})`
  display: none;
`,bz=E.span`
  width: 20px;
  height: 20px;
  border: 2px solid #ddd;
  border-radius: 4px;
  margin-right: 12px;
  position: relative;
  flex-shrink: 0;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);

  ${Em}:checked + & {
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

  ${Em}:checked + &::after {
    opacity: 1;
  }
`;var _m={},j0={},$0={},Ko={};Object.defineProperty(Ko,"__esModule",{value:!0});Ko.Direction=void 0;var Sx;(function(e){e.Right="to right",e.Left="to left",e.Down="to bottom",e.Up="to top"})(Sx||(Ko.Direction=Sx={}));(function(e){var t=ne&&ne.__spreadArray||function(M,j,F){if(F||arguments.length===2)for(var D=0,z=j.length,R;D<z;D++)(R||!(D in j))&&(R||(R=Array.prototype.slice.call(j,0,D)),R[D]=j[D]);return M.concat(R||Array.prototype.slice.call(j))};Object.defineProperty(e,"__esModule",{value:!0}),e.isIOS=e.useThumbOverlap=e.assertUnreachable=e.voidFn=e.getTrackBackground=e.replaceAt=e.schd=e.translate=e.getClosestThumbIndex=e.translateThumbs=e.getPaddingAndBorder=e.getMargin=e.checkInitialOverlap=e.checkValuesAgainstBoundaries=e.checkBoundaries=e.isVertical=e.relativeValue=e.normalizeValue=e.isStepDivisible=e.isTouchEvent=e.getStepDecimals=void 0;var n=x,r=Ko,i=function(M){var j=M.toString().split(".")[1];return j?j.length:0};e.getStepDecimals=i;function o(M){return M.touches&&M.touches.length||M.changedTouches&&M.changedTouches.length}e.isTouchEvent=o;function a(M,j,F){var D=(j-M)/F,z=8,R=Number(D.toFixed(z));return parseInt(R.toString(),10)===R}e.isStepDivisible=a;function l(M,j,F,D,z,R,O){var A=1e11;if(M=Math.round(M*A)/A,!R){var N=O[j-1],B=O[j+1];if(N&&N>M)return N;if(B&&B<M)return B}if(M>D)return D;if(M<F)return F;var L=Math.floor(M*A-F*A)%Math.floor(z*A),V=Math.floor(M*A-Math.abs(L)),H=L===0?M:V/A,G=Math.abs(L/A)<z/2?H:H+z,W=(0,e.getStepDecimals)(z);return parseFloat(G.toFixed(W))}e.normalizeValue=l;function s(M,j,F){return(M-j)/(F-j)}e.relativeValue=s;function c(M){return M===r.Direction.Up||M===r.Direction.Down}e.isVertical=c;function f(M,j,F){if(j>=F)throw new RangeError("min (".concat(j,") is equal/bigger than max (").concat(F,")"));if(M<j)throw new RangeError("value (".concat(M,") is smaller than min (").concat(j,")"));if(M>F)throw new RangeError("value (".concat(M,") is bigger than max (").concat(F,")"))}e.checkBoundaries=f;function d(M,j,F){return M<j?j:M>F?F:M}e.checkValuesAgainstBoundaries=d;function h(M){if(!(M.length<2)&&!M.slice(1).every(function(j,F){return M[F]<=j}))throw new RangeError("values={[".concat(M,"]} needs to be sorted when allowOverlap={false}"))}e.checkInitialOverlap=h;function p(M){var j=window.getComputedStyle(M);return{top:parseInt(j["margin-top"],10),bottom:parseInt(j["margin-bottom"],10),left:parseInt(j["margin-left"],10),right:parseInt(j["margin-right"],10)}}e.getMargin=p;function m(M){var j=window.getComputedStyle(M);return{top:parseInt(j["padding-top"],10)+parseInt(j["border-top-width"],10),bottom:parseInt(j["padding-bottom"],10)+parseInt(j["border-bottom-width"],10),left:parseInt(j["padding-left"],10)+parseInt(j["border-left-width"],10),right:parseInt(j["padding-right"],10)+parseInt(j["border-right-width"],10)}}e.getPaddingAndBorder=m;function y(M,j,F){var D=F?-1:1;M.forEach(function(z,R){return g(z,D*j[R].x,j[R].y)})}e.translateThumbs=y;function w(M,j,F,D){for(var z=0,R=$(M[0],j,F,D),O=1;O<M.length;O++){var A=$(M[O],j,F,D);A<R&&(R=A,z=O)}return z}e.getClosestThumbIndex=w;function g(M,j,F){M.style.transform="translate(".concat(j,"px, ").concat(F,"px)")}e.translate=g;var v=function(M){var j=[],F=null,D=function(){for(var z=[],R=0;R<arguments.length;R++)z[R]=arguments[R];j=z,!F&&(F=requestAnimationFrame(function(){F=null,M.apply(void 0,j)}))};return D};e.schd=v;function b(M,j,F){var D=M.slice(0);return D[j]=F,D}e.replaceAt=b;function C(M){var j=M.values,F=M.colors,D=M.min,z=M.max,R=M.direction,O=R===void 0?r.Direction.Right:R,A=M.rtl,N=A===void 0?!1:A;N&&O===r.Direction.Right?O=r.Direction.Left:N&&r.Direction.Left&&(O=r.Direction.Right);var B=j.slice(0).sort(function(V,H){return V-H}).map(function(V){return(V-D)/(z-D)*100}),L=B.reduce(function(V,H,G){return"".concat(V,", ").concat(F[G]," ").concat(H,"%, ").concat(F[G+1]," ").concat(H,"%")},"");return"linear-gradient(".concat(O,", ").concat(F[0]," 0%").concat(L,", ").concat(F[F.length-1]," 100%)")}e.getTrackBackground=C;function S(){}e.voidFn=S;function P(M){throw new Error("Didn't expect to get here")}e.assertUnreachable=P;var k=function(M,j,F,D,z){z===void 0&&(z=function(O){return O});var R=Math.ceil(t([M],Array.from(M.children),!0).reduce(function(O,A){var N=Math.ceil(A.getBoundingClientRect().width);if(A.innerText&&A.innerText.includes(F)&&A.childElementCount===0){var B=A.cloneNode(!0);B.innerHTML=z(j.toFixed(D)),B.style.visibility="hidden",document.body.appendChild(B),N=Math.ceil(B.getBoundingClientRect().width),document.body.removeChild(B)}return N>O?N:O},M.getBoundingClientRect().width));return R},_=function(M,j,F,D,z,R,O){O===void 0&&(O=function(B){return B});var A=[],N=function(B){var L=k(F[B],D[B],z,R,O),V=j[B].x;j.forEach(function(H,G){var W=H.x,Q=k(F[G],D[G],z,R,O);B!==G&&(V>=W&&V<=W+Q||V+L>=W&&V+L<=W+Q)&&(A.includes(G)||(A.push(B),A.push(G),A=t(t([],A,!0),[B,G],!1),N(G)))})};return N(M),Array.from(new Set(A.sort()))},T=function(M,j,F,D,z,R){D===void 0&&(D=.1),z===void 0&&(z=" - "),R===void 0&&(R=function(G){return G});var O=(0,e.getStepDecimals)(D),A=(0,n.useState)({}),N=A[0],B=A[1],L=(0,n.useState)(R(j[F].toFixed(O))),V=L[0],H=L[1];return(0,n.useEffect)(function(){if(M){var G=M.getThumbs();if(G.length<1)return;var W={},Q=M.getOffsets(),te=_(F,Q,G,j,z,O,R),de=R(j[F].toFixed(O));if(te.length){var ae=te.reduce(function(Pt,Zo,Us,Jo){return Pt.length?t(t([],Pt,!0),[Q[Jo[Us]].x],!1):[Q[Jo[Us]].x]},[]);if(Math.min.apply(Math,ae)===Q[F].x){var Fe=[];te.forEach(function(Pt){Fe.push(j[Pt].toFixed(O))}),de=Array.from(new Set(Fe.sort(function(Pt,Zo){return parseFloat(Pt)-parseFloat(Zo)}))).map(R).join(z);var qe=Math.min.apply(Math,ae),Ye=Math.max.apply(Math,ae),Mi=G[te[ae.indexOf(Ye)]].getBoundingClientRect().width;W.left="".concat(Math.abs(qe-(Ye+Mi))/2,"px"),W.transform="translate(-50%, 0)"}else W.visibility="hidden"}H(de),B(W)}},[M,j]),[V,N]};e.useThumbOverlap=T;function $(M,j,F,D){var z=M.getBoundingClientRect(),R=z.left,O=z.top,A=z.width,N=z.height;return c(D)?Math.abs(F-(O+N/2)):Math.abs(j-(R+A/2))}var I=function(){var M,j=((M=navigator.userAgentData)===null||M===void 0?void 0:M.platform)||navigator.platform;return["iPad Simulator","iPhone Simulator","iPod Simulator","iPad","iPhone","iPod"].includes(j)||navigator.userAgent.includes("Mac")&&"ontouchend"in document};e.isIOS=I})($0);var wz=ne&&ne.__extends||function(){var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,i){r.__proto__=i}||function(r,i){for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(r[o]=i[o])},e(t,n)};return function(t,n){if(typeof n!="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");e(t,n);function r(){this.constructor=t}t.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}}(),Sz=ne&&ne.__createBinding||(Object.create?function(e,t,n,r){r===void 0&&(r=n);var i=Object.getOwnPropertyDescriptor(t,n);(!i||("get"in i?!t.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,i)}:function(e,t,n,r){r===void 0&&(r=n),e[r]=t[n]}),Cz=ne&&ne.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),Ez=ne&&ne.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)n!=="default"&&Object.prototype.hasOwnProperty.call(e,n)&&Sz(t,e,n);return Cz(t,e),t},Cx=ne&&ne.__spreadArray||function(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,o;r<i;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))};Object.defineProperty(j0,"__esModule",{value:!0});var Sl=Ez(x),se=$0,Ve=Ko,_z=["ArrowRight","ArrowUp","k","PageUp"],kz=["ArrowLeft","ArrowDown","j","PageDown"],Pz=function(e){wz(t,e);function t(n){var r=e.call(this,n)||this;if(r.trackRef=Sl.createRef(),r.thumbRefs=[],r.state={draggedTrackPos:[-1,-1],draggedThumbIndex:-1,thumbZIndexes:new Array(r.props.values.length).fill(0).map(function(i,o){return o}),isChanged:!1,markOffsets:[]},r.getOffsets=function(){var i=r.props,o=i.direction,a=i.values,l=i.min,s=i.max,c=r.trackRef.current;if(!c)return console.warn("No track element found."),[];var f=c.getBoundingClientRect(),d=(0,se.getPaddingAndBorder)(c);return r.getThumbs().map(function(h,p){var m={x:0,y:0},y=h.getBoundingClientRect(),w=(0,se.getMargin)(h);switch(o){case Ve.Direction.Right:return m.x=(w.left+d.left)*-1,m.y=((y.height-f.height)/2+d.top)*-1,m.x+=f.width*(0,se.relativeValue)(a[p],l,s)-y.width/2,m;case Ve.Direction.Left:return m.x=(w.right+d.right)*-1,m.y=((y.height-f.height)/2+d.top)*-1,m.x+=f.width-f.width*(0,se.relativeValue)(a[p],l,s)-y.width/2,m;case Ve.Direction.Up:return m.x=((y.width-f.width)/2+w.left+d.left)*-1,m.y=-d.left,m.y+=f.height-f.height*(0,se.relativeValue)(a[p],l,s)-y.height/2,m;case Ve.Direction.Down:return m.x=((y.width-f.width)/2+w.left+d.left)*-1,m.y=-d.left,m.y+=f.height*(0,se.relativeValue)(a[p],l,s)-y.height/2,m;default:return(0,se.assertUnreachable)(o)}})},r.getThumbs=function(){return r.trackRef&&r.trackRef.current?Array.from(r.trackRef.current.children).filter(function(i){return i.hasAttribute("aria-valuenow")}):(console.warn("No thumbs found in the track container. Did you forget to pass & spread the `props` param in renderTrack?"),[])},r.getTargetIndex=function(i){return r.getThumbs().findIndex(function(o){return o===i.target||o.contains(i.target)})},r.addTouchEvents=function(i){document.addEventListener("touchmove",r.schdOnTouchMove,{passive:!1}),document.addEventListener("touchend",r.schdOnEnd,{passive:!1}),document.addEventListener("touchcancel",r.schdOnEnd,{passive:!1})},r.addMouseEvents=function(i){document.addEventListener("mousemove",r.schdOnMouseMove),document.addEventListener("mouseup",r.schdOnEnd)},r.onMouseDownTrack=function(i){var o;if(!(i.button!==0||(0,se.isIOS)()))if(i.persist(),i.preventDefault(),r.addMouseEvents(i.nativeEvent),r.props.values.length>1&&r.props.draggableTrack){if(r.thumbRefs.some(function(l){var s;return(s=l.current)===null||s===void 0?void 0:s.contains(i.target)}))return;r.setState({draggedTrackPos:[i.clientX,i.clientY]},function(){return r.onMove(i.clientX,i.clientY)})}else{var a=(0,se.getClosestThumbIndex)(r.thumbRefs.map(function(l){return l.current}),i.clientX,i.clientY,r.props.direction);(o=r.thumbRefs[a].current)===null||o===void 0||o.focus(),r.setState({draggedThumbIndex:a},function(){return r.onMove(i.clientX,i.clientY)})}},r.onResize=function(){(0,se.translateThumbs)(r.getThumbs(),r.getOffsets(),r.props.rtl),r.calculateMarkOffsets()},r.onTouchStartTrack=function(i){var o;if(i.persist(),r.addTouchEvents(i.nativeEvent),r.props.values.length>1&&r.props.draggableTrack){if(r.thumbRefs.some(function(l){var s;return(s=l.current)===null||s===void 0?void 0:s.contains(i.target)}))return;r.setState({draggedTrackPos:[i.touches[0].clientX,i.touches[0].clientY]},function(){return r.onMove(i.touches[0].clientX,i.touches[0].clientY)})}else{var a=(0,se.getClosestThumbIndex)(r.thumbRefs.map(function(l){return l.current}),i.touches[0].clientX,i.touches[0].clientY,r.props.direction);(o=r.thumbRefs[a].current)===null||o===void 0||o.focus(),r.setState({draggedThumbIndex:a},function(){return r.onMove(i.touches[0].clientX,i.touches[0].clientY)})}},r.onMouseOrTouchStart=function(i){if(!r.props.disabled){var o=(0,se.isTouchEvent)(i);if(!(!o&&i.button!==0)){var a=r.getTargetIndex(i);a!==-1&&(o?r.addTouchEvents(i):r.addMouseEvents(i),r.setState({draggedThumbIndex:a,thumbZIndexes:r.state.thumbZIndexes.map(function(l,s){return s===a?Math.max.apply(Math,r.state.thumbZIndexes):l<=r.state.thumbZIndexes[a]?l:l-1})}))}}},r.onMouseMove=function(i){i.preventDefault(),r.onMove(i.clientX,i.clientY)},r.onTouchMove=function(i){i.preventDefault(),r.onMove(i.touches[0].clientX,i.touches[0].clientY)},r.onKeyDown=function(i){var o=r.props,a=o.values,l=o.onChange,s=o.step,c=o.rtl,f=o.direction,d=r.state.isChanged,h=r.getTargetIndex(i.nativeEvent),p=c||f===Ve.Direction.Left||f===Ve.Direction.Down?-1:1;h!==-1&&(_z.includes(i.key)?(i.preventDefault(),r.setState({draggedThumbIndex:h,isChanged:!0}),l((0,se.replaceAt)(a,h,r.normalizeValue(a[h]+p*(i.key==="PageUp"?s*10:s),h)))):kz.includes(i.key)?(i.preventDefault(),r.setState({draggedThumbIndex:h,isChanged:!0}),l((0,se.replaceAt)(a,h,r.normalizeValue(a[h]-p*(i.key==="PageDown"?s*10:s),h)))):i.key==="Tab"?r.setState({draggedThumbIndex:-1},function(){d&&r.fireOnFinalChange()}):d&&r.fireOnFinalChange())},r.onKeyUp=function(i){var o=r.state.isChanged;r.setState({draggedThumbIndex:-1},function(){o&&r.fireOnFinalChange()})},r.onMove=function(i,o){var a=r.state,l=a.draggedThumbIndex,s=a.draggedTrackPos,c=r.props,f=c.direction,d=c.min,h=c.max,p=c.onChange,m=c.values,y=c.step,w=c.rtl;if(l===-1&&s[0]===-1&&s[1]===-1)return null;var g=r.trackRef.current;if(!g)return null;var v=g.getBoundingClientRect(),b=(0,se.isVertical)(f)?v.height:v.width;if(s[0]!==-1&&s[1]!==-1){var C=i-s[0],S=o-s[1],P=0;switch(f){case Ve.Direction.Right:case Ve.Direction.Left:P=C/b*(h-d);break;case Ve.Direction.Down:case Ve.Direction.Up:P=S/b*(h-d);break;default:(0,se.assertUnreachable)(f)}if(w&&(P*=-1),Math.abs(P)>=y/2){for(var k=0;k<r.thumbRefs.length;k++){if(m[k]===h&&Math.sign(P)===1||m[k]===d&&Math.sign(P)===-1)return;var _=m[k]+P;_>h?P=h-m[k]:_<d&&(P=d-m[k])}for(var T=m.slice(0),k=0;k<r.thumbRefs.length;k++)T=(0,se.replaceAt)(T,k,r.normalizeValue(m[k]+P,k));r.setState({draggedTrackPos:[i,o]}),p(T)}}else{var $=0;switch(f){case Ve.Direction.Right:$=(i-v.left)/b*(h-d)+d;break;case Ve.Direction.Left:$=(b-(i-v.left))/b*(h-d)+d;break;case Ve.Direction.Down:$=(o-v.top)/b*(h-d)+d;break;case Ve.Direction.Up:$=(b-(o-v.top))/b*(h-d)+d;break;default:(0,se.assertUnreachable)(f)}w&&($=h+d-$),Math.abs(m[l]-$)>=y/2&&p((0,se.replaceAt)(m,l,r.normalizeValue($,l)))}},r.normalizeValue=function(i,o){var a=r.props,l=a.min,s=a.max,c=a.step,f=a.allowOverlap,d=a.values;return(0,se.normalizeValue)(i,o,l,s,c,f,d)},r.onEnd=function(i){if(i.preventDefault(),document.removeEventListener("mousemove",r.schdOnMouseMove),document.removeEventListener("touchmove",r.schdOnTouchMove),document.removeEventListener("mouseup",r.schdOnEnd),document.removeEventListener("touchend",r.schdOnEnd),document.removeEventListener("touchcancel",r.schdOnEnd),r.state.draggedThumbIndex===-1&&r.state.draggedTrackPos[0]===-1&&r.state.draggedTrackPos[1]===-1)return null;r.setState({draggedThumbIndex:-1,draggedTrackPos:[-1,-1]},function(){r.fireOnFinalChange()})},r.fireOnFinalChange=function(){r.setState({isChanged:!1});var i=r.props,o=i.onFinalChange,a=i.values;o&&o(a)},r.updateMarkRefs=function(i){if(!i.renderMark){r.numOfMarks=void 0,r.markRefs=void 0;return}r.numOfMarks=(i.max-i.min)/r.props.step,r.markRefs=[];for(var o=0;o<r.numOfMarks+1;o++)r.markRefs[o]=Sl.createRef()},r.calculateMarkOffsets=function(){if(!(!r.props.renderMark||!r.trackRef||!r.numOfMarks||!r.markRefs||r.trackRef.current===null)){for(var i=window.getComputedStyle(r.trackRef.current),o=parseInt(i.width,10),a=parseInt(i.height,10),l=parseInt(i.paddingLeft,10),s=parseInt(i.paddingTop,10),c=[],f=0;f<r.numOfMarks+1;f++){var d=9999,h=9999;if(r.markRefs[f].current){var p=r.markRefs[f].current.getBoundingClientRect();d=p.height,h=p.width}r.props.direction===Ve.Direction.Left||r.props.direction===Ve.Direction.Right?c.push([Math.round(o/r.numOfMarks*f+l-h/2),-Math.round((d-a)/2)]):c.push([Math.round(a/r.numOfMarks*f+s-d/2),-Math.round((h-o)/2)])}r.setState({markOffsets:c})}},n.step===0)throw new Error('"step" property should be a positive number');return r.schdOnMouseMove=(0,se.schd)(r.onMouseMove),r.schdOnTouchMove=(0,se.schd)(r.onTouchMove),r.schdOnEnd=(0,se.schd)(r.onEnd),r.thumbRefs=n.values.map(function(){return Sl.createRef()}),r.updateMarkRefs(n),r}return t.prototype.componentDidMount=function(){var n=this,r=this.props,i=r.values,o=r.min,a=r.step;this.resizeObserver=window.ResizeObserver?new window.ResizeObserver(this.onResize):{observe:function(){return window.addEventListener("resize",n.onResize)},unobserve:function(){return window.removeEventListener("resize",n.onResize)}},document.addEventListener("touchstart",this.onMouseOrTouchStart,{passive:!1}),document.addEventListener("mousedown",this.onMouseOrTouchStart,{passive:!1}),!this.props.allowOverlap&&(0,se.checkInitialOverlap)(this.props.values),this.props.values.forEach(function(l){return(0,se.checkBoundaries)(l,n.props.min,n.props.max)}),this.resizeObserver.observe(this.trackRef.current),(0,se.translateThumbs)(this.getThumbs(),this.getOffsets(),this.props.rtl),this.calculateMarkOffsets(),i.forEach(function(l){(0,se.isStepDivisible)(o,l,a)||console.warn("The `values` property is in conflict with the current `step`, `min`, and `max` properties. Please provide values that are accessible using the min, max, and step values.")})},t.prototype.componentDidUpdate=function(n,r){var i=this.props,o=i.max,a=i.min,l=i.step,s=i.values,c=i.rtl;(n.max!==o||n.min!==a||n.step!==l)&&this.updateMarkRefs(this.props),(0,se.translateThumbs)(this.getThumbs(),this.getOffsets(),c),(n.max!==o||n.min!==a||n.step!==l||r.markOffsets.length!==this.state.markOffsets.length)&&(this.calculateMarkOffsets(),s.forEach(function(f){(0,se.isStepDivisible)(a,f,l)||console.warn("The `values` property is in conflict with the current `step`, `min`, and `max` properties. Please provide values that are accessible using the min, max, and step values.")}))},t.prototype.componentWillUnmount=function(){var n={passive:!1};document.removeEventListener("mousedown",this.onMouseOrTouchStart,n),document.removeEventListener("mousemove",this.schdOnMouseMove),document.removeEventListener("touchmove",this.schdOnTouchMove),document.removeEventListener("touchstart",this.onMouseOrTouchStart),document.removeEventListener("mouseup",this.schdOnEnd),document.removeEventListener("touchend",this.schdOnEnd),this.resizeObserver.unobserve(this.trackRef.current)},t.prototype.render=function(){var n=this,r=this.props,i=r.label,o=r.labelledBy,a=r.renderTrack,l=r.renderThumb,s=r.renderMark,c=s===void 0?function(){return null}:s,f=r.values,d=r.min,h=r.max,p=r.allowOverlap,m=r.disabled,y=this.state,w=y.draggedThumbIndex,g=y.thumbZIndexes,v=y.markOffsets;return a({props:{style:{transform:"scale(1)",cursor:w>-1?"grabbing":this.props.draggableTrack?(0,se.isVertical)(this.props.direction)?"ns-resize":"ew-resize":f.length===1&&!m?"pointer":"inherit"},onMouseDown:m?se.voidFn:this.onMouseDownTrack,onTouchStart:m?se.voidFn:this.onTouchStartTrack,ref:this.trackRef},isDragged:this.state.draggedThumbIndex>-1,disabled:m,children:Cx(Cx([],v.map(function(b,C,S){return c({props:{style:n.props.direction===Ve.Direction.Left||n.props.direction===Ve.Direction.Right?{position:"absolute",left:"".concat(b[0],"px"),marginTop:"".concat(b[1],"px")}:{position:"absolute",top:"".concat(b[0],"px"),marginLeft:"".concat(b[1],"px")},key:"mark".concat(C),ref:n.markRefs[C]},index:C})}),!0),f.map(function(b,C){var S=n.state.draggedThumbIndex===C;return l({index:C,value:b,isDragged:S,props:{style:{position:"absolute",zIndex:g[C],cursor:m?"inherit":S?"grabbing":"grab",userSelect:"none",touchAction:"none",WebkitUserSelect:"none",MozUserSelect:"none",msUserSelect:"none"},key:C,tabIndex:m?void 0:0,"aria-valuemax":p?h:f[C+1]||h,"aria-valuemin":p?d:f[C-1]||d,"aria-valuenow":b,draggable:!1,ref:n.thumbRefs[C],"aria-label":i,"aria-labelledby":o,role:"slider",onKeyDown:m?se.voidFn:n.onKeyDown,onKeyUp:m?se.voidFn:n.onKeyUp}})}),!0)})},t.defaultProps={label:"Accessibility label",labelledBy:null,step:1,direction:Ve.Direction.Right,rtl:!1,disabled:!1,allowOverlap:!1,draggableTrack:!1,min:0,max:100},t}(Sl.Component);j0.default=Pz;(function(e){var t=ne&&ne.__importDefault||function(o){return o&&o.__esModule?o:{default:o}};Object.defineProperty(e,"__esModule",{value:!0}),e.checkValuesAgainstBoundaries=e.relativeValue=e.useThumbOverlap=e.Direction=e.getTrackBackground=e.Range=void 0;var n=t(j0);e.Range=n.default;var r=$0;Object.defineProperty(e,"getTrackBackground",{enumerable:!0,get:function(){return r.getTrackBackground}}),Object.defineProperty(e,"useThumbOverlap",{enumerable:!0,get:function(){return r.useThumbOverlap}}),Object.defineProperty(e,"relativeValue",{enumerable:!0,get:function(){return r.relativeValue}}),Object.defineProperty(e,"checkValuesAgainstBoundaries",{enumerable:!0,get:function(){return r.checkValuesAgainstBoundaries}});var i=Ko;Object.defineProperty(e,"Direction",{enumerable:!0,get:function(){return i.Direction}})})(_m);const Oz=E.div`
  padding: 20px 0;
`,Tz=E.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`,Ex=E.input`
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
`;const jz=E.div`
  height: 6px;
  width: 100%;
  border-radius: 4px;
  background: ${({background:e})=>e};
`,$z=E.div`
  height: 18px;
  width: 18px;
  border-radius: 50%;
  background: #583d2d;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`,q_=({childValues:e,onChange:t})=>{const o=(e==null?void 0:e[0])??10,a=(e==null?void 0:e[1])??1e4,l=o!==a,[s,c]=x.useState([o,a]);x.useEffect(()=>{e&&e.length===2&&(c(e),t&&t(e))},[e,t]);const f=p=>{c(p),t&&t(p)},d=(p,m)=>{const y=m===""?"":Number(m),w=[...s];w[p]=y,f(w)},h=p=>{const m=[...s];p===0?((m[0]===""||m[0]<o)&&(m[0]=o),m[0]>m[1]-50&&(m[0]=m[1]-50)):((m[1]===""||m[1]>a)&&(m[1]=a),m[1]<m[0]+50&&(m[1]=m[0]+50)),f(m)};return u.jsx(u.Fragment,{children:l&&u.jsxs(Oz,{children:[u.jsxs(Tz,{children:[u.jsx(Ex,{type:"number",value:s[0],min:o,max:s[1],onChange:p=>d(0,p.target.value),onBlur:()=>h(0)}),u.jsx(Ex,{type:"number",value:s[1],min:s[0],max:a,onChange:p=>d(1,p.target.value),onBlur:()=>h(1)})]}),u.jsx(_m.Range,{values:s,step:50,min:o,max:a,onChange:f,renderTrack:({props:p,children:m})=>u.jsx(jz,{...p,background:_m.getTrackBackground({values:s,colors:["#ddd","#85683d","#ddd"],min:o,max:a}),children:m}),renderThumb:({props:p})=>u.jsx($z,{...p})})]})})},Iz=({childValues:e,category:t,selectedFilters:n,setSelectedFilters:r,setPriceRange:i})=>{const[o,a]=x.useState([]),[l,s]=x.useState({});x.useEffect(()=>{t&&(async()=>{try{const m=T0.stringify({populate:{attributes:{populate:{label:{populate:"*"},value:{populate:"*"}}},category:!0},filters:{category:{title:{$eq:t}}},pagination:{pageSize:200}},{encodeValuesOnly:!0}),g=(await(await fetch(`https://backenddidiv-production.up.railway.app/api/products?${m}`)).json()).data||[],v={};g.forEach(C=>{var S;(S=C.attributes)==null||S.forEach(P=>{var T,$,I,M;const k=((T=P.label)==null?void 0:T.label)??(($=P.label)==null?void 0:$.name)??((I=P.label)==null?void 0:I.title),_=(M=P.value)==null?void 0:M.value;!k||!_||(v[k]||(v[k]=new Set),v[k].add(_))})});const b=Object.entries(v).map(([C,S])=>({type:"checkbox",label:C,name:C.toLowerCase(),options:Array.from(S)}));a(b)}catch(m){console.error(m)}})()},[t]);const c=p=>{s(m=>({...m,[p]:!m[p]}))},f=(p,m)=>{r(y=>{const w=y[p]||[];return w.includes(m)?{...y,[p]:w.filter(g=>g!==m)}:{...y,[p]:[...w,m]}})},d=Object.values(n).some(p=>Array.isArray(p)&&p.length>0),h=()=>{d&&r({})};return u.jsxs(fz,{children:[u.jsxs(pz,{children:["Фільтри ",u.jsx(J2,{size:20})]}),(o||[]).map(p=>{var y;const m=!!l[p.name];return u.jsxs(hz,{children:[u.jsxs(mz,{onClick:()=>c(p.name),children:[u.jsx(gz,{children:p.label}),u.jsx(vz,{isOpen:m})]}),u.jsxs(yz,{isOpen:m,children:[p.type==="checkbox"&&((y=p.options)==null?void 0:y.map(w=>{var g;return u.jsxs(xz,{children:[u.jsx(Em,{checked:((g=n[p.name])==null?void 0:g.includes(w))||!1,onChange:()=>f(p.name,w)}),u.jsx(bz,{}),w]},w)})),p.type==="range"&&u.jsx(q_,{onChange:i,childValues:e})]})]},p.name)}),u.jsx(y_,{onClick:h,disabled:!d,children:"Скинути обрані фільтри"})]})},Mz=E.aside`
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
`;const Az=E.div`
  border-bottom: 1px solid #eee;
  padding: 12px;
  margin-bottom: 12px;

  &:last-child {
    border-bottom: none;
  }
`,Dz=E.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  padding: 8px 0;
  
  &:hover p {
    color: #85683d;
  }
`,Lz=E.p`
  font-weight: 600;
  font-size: 16px;
  margin: 0;
  color: #222;
  transition: color 0.2s;
`,Rz=E.span`
  border: solid #555;
  border-width: 0 2px 2px 0;
  display: inline-block;
  padding: 3px;
  transform: ${e=>e.isOpen?"rotate(-135deg)":"rotate(45deg)"};
  transition: transform 0.3s ease;
`,Fz=E.div`
  max-height: ${e=>e.isOpen?"500px":"0"};
  overflow: hidden;
  transition: max-height 0.3s ease-in-out, opacity 0.3s;
  opacity: ${e=>e.isOpen?"1":"0"};
  padding: ${e=>e.isOpen?"12px":"0"};
`,zz=E.label`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  cursor: pointer;
  font-size: 15px;
  color: #444;

  &:hover span:first-of-type {
    border-color: #85683d;
  }
`,km=E.input.attrs({type:"checkbox"})`
  display: none;
`,Nz=E.span`
  width: 20px;
  height: 20px;
  border: 2px solid #ddd;
  border-radius: 4px;
  margin-right: 12px;
  position: relative;
  flex-shrink: 0;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);

  ${km}:checked + & {
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

  ${km}:checked + &::after {
    opacity: 1;
  }
`,Bz=({childValues:e,category:t,selectedFilters:n,setSelectedFilters:r,setPriceRange:i})=>{const[o,a]=x.useState({}),[l,s]=x.useState([]);x.useEffect(()=>{t&&(async()=>{try{const h=T0.stringify({populate:{attributes:{populate:{label:{populate:"*"},value:{populate:"*"}}},category:!0},filters:{category:{title:{$eq:t}}},pagination:{pageSize:200}},{encodeValuesOnly:!0}),y=(await(await fetch(`https://backenddidiv-production.up.railway.app/api/products?${h}`)).json()).data||[],w={};y.forEach(v=>{var b;(b=v.attributes)==null||b.forEach(C=>{var k,_,T,$;const S=((k=C.label)==null?void 0:k.label)??((_=C.label)==null?void 0:_.name)??((T=C.label)==null?void 0:T.title),P=($=C.value)==null?void 0:$.value;!S||!P||(w[S]||(w[S]=new Set),w[S].add(P))})});const g=Object.entries(w).map(([v,b])=>({type:"checkbox",label:v,name:v.toLowerCase(),options:Array.from(b)}));s(g)}catch(h){console.error(h)}})()},[t]);const c=d=>{a(h=>({...h,[d]:!h[d]}))},f=(d,h)=>{r(p=>{const m=p[d]||[];return m.includes(h)?{...p,[d]:m.filter(y=>y!==h)}:{...p,[d]:[...m,h]}})};return u.jsx(Mz,{children:(l||[]).map(d=>{var p;const h=!!o[d.name];return u.jsxs(Az,{children:[u.jsxs(Dz,{onClick:()=>c(d.name),children:[u.jsx(Lz,{children:d.label}),u.jsx(Rz,{isOpen:h})]}),u.jsxs(Fz,{isOpen:h,children:[d.type==="checkbox"&&((p=d.options)==null?void 0:p.map(m=>{var y;return u.jsxs(zz,{children:[u.jsx(km,{checked:((y=n[d.name])==null?void 0:y.includes(m))||!1,onChange:()=>f(d.name,m)}),u.jsx(Nz,{}),m]},m)})),d.type==="range"&&u.jsx(q_,{onChange:i,childValues:e})]})]},d.name)})})},Vz=({setValues:e,category:t,selectedFilters:n={},priceRange:r,sortType:i,setIsSortOpen:o,isSortOpen:a,setSortType:l,sortOrder:s,setSortOrder:c})=>{const[f,d]=x.useState([]),[h,p]=x.useState(!0),[m,y]=x.useState(1),w=24;let g=f;const v=x.useRef(null);x.useEffect(()=>{const j=F=>{v.current&&!v.current.contains(F.target)&&o(!1)};return document.addEventListener("mousedown",j),()=>{document.removeEventListener("mousedown",j)}},[o]),x.useEffect(()=>{(async()=>{try{p(!0);const F=T0.stringify({populate:{attributes:{populate:{label:{populate:"*"},value:{populate:"*"}}},category:!0,images:!0},filters:{category:{title:{$eq:t}}},pagination:{pageSize:500}},{encodeValuesOnly:!0}),z=await(await fetch(`https://backenddidiv-production.up.railway.app/api/products?${F}`)).json();d(z.data);const R=Date.now(),O=7*24*60*60*1e3,A=z.data.filter(B=>{if(B.stock>0||!B.sold_date)return!0;const L=new Date(B.sold_date).getTime();return R-L<O});d(A);const N=z.data.map(B=>B.price);if(N.length>0){let B=Math.min(...N),L=Math.max(...N);e([B,L])}}catch(F){console.error("Error fetching products:",F)}finally{p(!1)}})()},[t,e]),x.useEffect(()=>{y(1)},[t,n,r]),x.useEffect(()=>{window.scrollTo({top:0,behavior:"smooth"})},[m]);const b=et(),C=Lt(),S=Ge(j=>j.favorites.items),P=Ge(j=>j.cart.items),k=(j,F)=>{F.stopPropagation();const D=S.some(z=>z.id===(j==null?void 0:j.id));Ti(j,D,C,X)};Object.keys(n).forEach(j=>{const F=n[j];Array.isArray(F)&&F.length>0&&(g=g.filter(D=>{var z;return(z=D.attributes)==null?void 0:z.some(R=>{var N,B,L,V,H;const O=(((N=R.label)==null?void 0:N.label)??((B=R.label)==null?void 0:B.name)??((L=R.label)==null?void 0:L.title)??((V=R.label)==null?void 0:V.value)??"").toString().toLowerCase(),A=(H=R.value)==null?void 0:H.value;return O===j.toLowerCase()&&F.includes(A)})}))}),r&&r.length;const _=x.useMemo(()=>{const j=[...g],F=D=>D.new_price&&D.new_price<D.price?D.new_price:D.price;switch(i){case"name":return j.sort((D,z)=>s==="asc"?D.name.localeCompare(z.name):z.name.localeCompare(D.name));case"price":return j.sort((D,z)=>{const R=F(D),O=F(z);return s==="asc"?R-O:O-R});case"date":return j.sort((D,z)=>s==="asc"?new Date(D.createdAt)-new Date(z.createdAt):new Date(z.createdAt)-new Date(D.createdAt));default:return j}},[i,g,s]),T=m*w,$=T-w,I=_.slice($,T),M=Math.ceil(g.length/w);return h?u.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"100vw",height:"100vh"},children:u.jsx(ji,{height:100,width:100,radius:5,color:"var(--orange-color)",ariaLabel:"ball-triangle-loading",wrapperStyle:{},wrapperClass:"",visible:!0})}):u.jsxs(U5,{children:[u.jsxs(H5,{children:[u.jsx(G5,{children:t}),u.jsxs(eI,{ref:v,children:[u.jsxs(tI,{onClick:()=>o(j=>!j),children:["Сортування",u.jsx(Wu,{strokeWidth:.9,size:22})]}),a&&u.jsxs(nI,{children:[u.jsx(Fi,{onClick:()=>{l("name"),c("asc"),o(!1)},children:"А-Я"}),u.jsx(Fi,{onClick:()=>{l("name"),c("desc"),o(!1)},children:"Я-А"}),u.jsx(Fi,{onClick:()=>{l("price"),c("asc"),o(!1)},children:"Ціна ↑"}),u.jsx(Fi,{onClick:()=>{l("price"),c("desc"),o(!1)},children:"Ціна ↓"}),u.jsx(Fi,{onClick:()=>{l("date"),c("desc"),o(!1)},children:"Спочатку новіші"}),u.jsx(Fi,{onClick:()=>{l("date"),c("asc"),o(!1)},children:"Спочатку старіші"})]})]})]}),u.jsx(Un,{autoClose:1500}),g.length===0?u.jsx(q5,{children:u.jsx("p",{style:{textAlign:"center",fontSize:"30px",marginTop:"50px",marginLeft:"auto",marginRight:"auto"},children:"Нічого не знайдено 😢"})}):u.jsx(Y5,{children:I.map(j=>{var G,W,Q;const F=S.some(te=>te.id===j.id),D=j!=null&&j.createdAt?Date.now()-new Date(j.createdAt).getTime()<7*24*60*60*1e3:!1,z=P.find(te=>te.id===j.id),R=(j==null?void 0:j.available)??!0,O=(j==null?void 0:j.stock)===0,A=j.new_price&&j.new_price<j.price,N=A?j.new_price:j.price,B=A?Math.round((j.price-j.new_price)/j.price*100):0,L=j?P.find(te=>te.id===j.id):null,V=(L==null?void 0:L.quantity)||0,H=async(te,de)=>{if(de.stopPropagation(),V>=te.stock){X.warning("Товар вже в кошику (досягнуто максимум)");return}if(V+1>te.stock){X.warning(`Доступно лише ${te.stock} шт.`);return}await Ho(te,1,C,X)};return u.jsxs(X5,{onClick:()=>b(`/product/${j.slug??j.id}`),$soldOut:O,style:{cursor:"pointer"},children:[u.jsxs(cC,{children:[D&&u.jsx(Zg,{children:"Новинка"}),!R&&u.jsx(Qg,{children:"Бронь"}),O&&u.jsx(Yu,{children:"Продано"}),u.jsx(K5,{src:((W=(G=j.images)==null?void 0:G[0])==null?void 0:W.url)||"/placeholder.jpg",alt:j.name,onError:te=>{te.currentTarget.onerror=null,te.currentTarget.src=ur}})]}),u.jsx(Z5,{children:j.name}),u.jsxs(Q5,{children:[u.jsx(dC,{children:u.jsxs(fC,{children:[u.jsxs(pC,{$discount:A,children:[N==null?void 0:N.toLocaleString()," грн"]}),A&&u.jsxs(hC,{children:[(Q=j.price)==null?void 0:Q.toLocaleString()," грн"]}),A&&u.jsxs(mC,{children:["-",B,"%"]})]})}),u.jsxs(uC,{children:[R&&!O&&u.jsx(Uc,{onClick:te=>H(j,te),children:u.jsx(Uo,{size:24,color:z?"var(--orange-color)":"black",strokeWidth:2})}),!O&&u.jsx(Uc,{onClick:te=>k(j,te),children:u.jsx(Is,{size:24,fill:F?"#ff4d4f":"none",color:F?"#ff4d4f":"#000000",strokeWidth:F?1:2})})]})]})]},j.id)})}),g.length>w&&u.jsxs(J5,{children:[u.jsx(Rf,{onClick:()=>y(j=>Math.max(j-1,1)),disabled:m===1,children:"Назад"}),Array.from({length:M},(j,F)=>u.jsx(Rf,{onClick:()=>y(F+1),active:m===F+1,children:F+1},F)),u.jsx(Rf,{onClick:()=>y(j=>Math.min(j+1,M)),disabled:m===M,children:"Вперед"})]})]})},Wz=()=>{const[e,t]=x.useState({}),{category:n}=hw(),[r,i]=x.useState(!1),[o,a]=x.useState(!1),[l,s]=x.useState("date"),[c,f]=x.useState("desc");console.log(e,"selectedFilters");const[d,h]=x.useState([]),[p,m]=x.useState([0,0]),y=Object.values(e).some(g=>Array.isArray(g)&&g.length>0),w=()=>{y&&t({})};return u.jsxs(r8,{children:[u.jsxs(n8,{children:[u.jsxs(i8,{children:[u.jsxs(o8,{onClick:()=>i(!0),children:["Фільтр",u.jsx(a8,{children:u.jsx("use",{href:`${xn}#icon-filter`})})]}),u.jsxs(p8,{children:[u.jsxs(s8,{onClick:()=>a(g=>!g),children:["Сортування",u.jsx(Wu,{strokeWidth:.9,size:22})]}),o&&u.jsxs(h8,{children:[u.jsx(Ni,{onClick:()=>{s("name"),f("asc"),a(!1)},children:"А-Я"}),u.jsx(Ni,{onClick:()=>{s("name"),f("desc"),a(!1)},children:"Я-А"}),u.jsx(Ni,{onClick:()=>{s("price"),f("asc"),a(!1)},children:"Ціна ↑"}),u.jsx(Ni,{onClick:()=>{s("price"),f("desc"),a(!1)},children:"Ціна ↓"}),u.jsx(Ni,{onClick:()=>{s("date"),f("desc"),a(!1)},children:"Спочатку новіші"}),u.jsx(Ni,{onClick:()=>{s("date"),f("asc"),a(!1)},children:"Спочатку старіші"})]})]})]}),u.jsx(Iz,{category:n,selectedFilters:e,setSelectedFilters:t,childValues:d,priceRange:p,setPriceRange:m}),u.jsx(Vz,{priceRange:p,values:d,setValues:h,category:n,selectedFilters:e,sortType:l,setIsSortOpen:a,isSortOpen:o,setSortType:s,sortOrder:c,setSortOrder:f}),r&&u.jsx(l8,{onClick:()=>i(!1),open:r,children:u.jsxs(c8,{onClick:g=>g.stopPropagation(),open:r,children:[u.jsxs(u8,{children:[u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[u.jsx(J2,{size:20}),u.jsx("h2",{children:"Фільтри"})]}),u.jsx(tC,{size:24,onClick:()=>i(!1),style:{cursor:"pointer"}})]}),u.jsx(Bz,{childValues:d,category:n,selectedFilters:e,setSelectedFilters:t,priceRange:p,setPriceRange:m}),u.jsxs(d8,{children:[u.jsx(y_,{onClick:w,disabled:!y,children:"Скинути обрані фільтри"}),u.jsx(f8,{onClick:()=>i(!1),children:"Показати результати"})]})]})})]})," "]})},_x=E.div`
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
`,Uz=E.div`
  font-family: var(--main-font);
  font-size: 14px;
  color: #8c8c8c;
  margin-bottom: 15px;

  a {
    text-decoration: none;
    color: inherit;
  }
`,Hz=E.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,Gz=E.div``,qz=E.div`
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
`;const Yz=E.img`
  width: 100%;
  border-radius: 4px;
  background: #f9f9f9;
   @media screen and (max-width: 300px) {
   width: 260px;
  }
`,Xz=E.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
      flex-wrap: wrap;
`,Kz=E.img`
  width: 60px;
  height: 60px;
  border: 1px solid #ddd;
  cursor: pointer;
  object-fit: cover;
`,Qz=E.div``,Zz=E.h1`
  font-size: 28px;
  margin-bottom: 10px;
  color: #333;
  font-family: var(--second-font);
  font-weight: 500;
`,Jz=E.p`
   font-size: 17px;
  margin-bottom: 10px;
  color: #151414;
    font-family: var(--second-font);

`,eN=E.div`

  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 20px;
`,tN=E.div`
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

`,nN=E.span`
  color: #27ae60;
  font-size: 17px;
`,rN=E.div`
  background: #fdfdfd;
  border: 1px solid #eee;
  padding: 25px;
  border-radius: 8px;
   @media screen and (max-width: 300px) {
   width: 260px;
  }
`,iN=E.div`
  font-family: var(--second-font);
  font-weight: 500;
  display: flex;
  align-items: baseline;
  gap: 15px;
  margin-bottom: 20px;
`,kx=E.span`
  font-size: 32px;
  font-weight: 700;
    color: ${({$discount:e})=>e?"var(--red-color)":"#111"};
`,oN=E.span`
  font-size: 14px;
  text-decoration: line-through;
  color: #999;
`,aN=E.span`
  background:var(--red-color);
  color: white;
  font-size: 12px;
  padding: 2px 6px;
  border-radius: 6px;
`,sN=E.div`
  display: flex;
  gap: 15px;
  margin-bottom: 15px;
  font-family: var(--second-font);
  font-weight: 500;
`,lN=E.div`
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
`,cN=E.button`
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
`;const Px=E.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  /* max-width: 800px; */
   @media (min-width: 767px) {
    padding-top:18px;
  }
`,uN=E.h3`
font-family: var(--second-font);
      border-bottom: 2px solid #717171;
    border-bottom: 2px solid var(--second-color);
    color: var(--second-color);
      padding: 10px 0;
`,Ox=E.div`
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
`;const dN=E.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  align-items: start;

  @media (max-width: 767px) {
    display: block;
  }
`,Tx=E.div`
  font-family: var(--second-font);
  font-weight: 500;
  margin-top: 20px;
`,jx=E.div`
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
`,$x=E.div`
  font-family: var(--second-font);
  font-weight: 500;
  padding: 15px;
  background: #fff;
`,Ix=E.p`
  font-size: 20px;
  font-family: var(--second-font);
  font-weight: 300;
`,fN=E.button`
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
`,pN=E.svg`
  width: 20px;
  height: 20px;

  fill: ${({$active:e})=>e?"white":" var(--black-color)"};
`,Y_=E.span`

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
`,hN=E.div`
  position: relative;
  display: inline-block;

  &:hover ${Y_} {
  opacity: ${({$active:e})=>e?1:0};
    transform: translateX(-50%) translateY(0);
  }
`,X_="carousel",K_="controller",mN="navigation",gN="no-scroll",I0="portal",vN="root",Q_="toolbar",Mx="zoom",Cp="loading",Ep="error",_p="complete",yN="placeholder",xN=e=>`active-slide-${e}`,bN="fullsize",M0="flex_center",wN="no_scroll",Z_="no_scroll_padding",A0="slide",J_="slide_wrapper",SN="slide_wrapper_interactive",ri="prev",ii="next",Ax="swipe",Do="close",ek="onPointerDown",tk="onPointerMove",nk="onPointerUp",rk="onPointerLeave",ik="onPointerCancel",D0="onKeyDown",CN="onKeyUp",L0="onWheel",EN="Escape",_N="ArrowLeft",kN="ArrowRight",PN="button",Pm="icon",ok="contain",Dx="cover",ak="Unknown action type",sk="yarl__";function Nn(...e){return e.filter(Boolean).join(" ")}function le(e){return`${sk}${e}`}function Tt(e){return`--${sk}${e}`}function Ws(e,t){return`${e}${t?`_${t}`:""}`}function R0(e){return t=>Ws(e,t)}function Lo(e,t){var n;return(n=e==null?void 0:e[t])!==null&&n!==void 0?n:t}function ON(e,t,n){return Lo(e,"{index} of {total}").replace(/\{index}/g,`${V0(n,t.length)+1}`).replace(/\{total}/g,`${t.length}`)}function F0(...e){return()=>{e.forEach(t=>{t()})}}function mr(e,t,n){return()=>{const r=x.useContext(n);if(!r)throw new Error(`${e} must be used within a ${t}.Provider`);return r}}function z0(){return typeof window<"u"}function N0(e,t=0){const n=10**t;return Math.round((e+Number.EPSILON)*n)/n}function Qo(e){return e.type===void 0||e.type==="image"}function B0(e,t){return e.imageFit===Dx||e.imageFit!==ok&&t===Dx}function Dd(e){return typeof e=="string"?Number.parseInt(e,10):e}function uu(e){if(typeof e=="number")return{pixel:e};if(typeof e=="string"){const t=Dd(e);return e.endsWith("%")?{percent:t}:{pixel:t}}return{pixel:0}}function TN(e,t){const n=uu(t),r=n.percent!==void 0?e.width/100*n.percent:n.pixel;return{width:Math.max(e.width-2*r,0),height:Math.max(e.height-2*r,0)}}function jN(){return(z0()?window==null?void 0:window.devicePixelRatio:void 0)||1}function V0(e,t){return t>0?(e%t+t)%t:0}function lk(e){return e.length>0}function ck(e,t){return e[V0(t,e.length)]}function Om(e,t){return lk(e)?ck(e,t):void 0}function $N(e){return Qo(e)?e.src:void 0}function IN(e,t,n){if(!n)return e;const{buttons:r,...i}=e,o=r.findIndex(l=>l===t),a=x.isValidElement(n)?x.cloneElement(n,{key:t},null):n;if(o>=0){const l=[...r];return l.splice(o,1,a),{buttons:l,...i}}return{buttons:[a,...r],...i}}function MN(e,t,n=0){return Math.min(e.preload,Math.max(e.finite?t.length-1:Math.floor(t.length/2),n))}const AN=Number(x.version.split(".")[0])>=19;function DN(e){return{inert:AN?e:e?"":void 0}}function LN(e){e.scrollTop}const Tm={open:!1,close:()=>{},index:0,slides:[],render:{},plugins:[],toolbar:{buttons:[Do]},labels:{},animation:{fade:250,swipe:500,easing:{fade:"ease",swipe:"ease-out",navigation:"ease-in-out"}},carousel:{finite:!1,preload:2,padding:"16px",spacing:"30%",imageFit:ok,imageProps:{}},controller:{ref:null,focus:!0,aria:!1,touchAction:"none",closeOnPullUp:!1,closeOnPullDown:!1,closeOnBackdropClick:!1,preventDefaultWheelX:!0,preventDefaultWheelY:!1,disableSwipeNavigation:!1},portal:{},noScroll:{disabled:!1},on:{},styles:{},className:""};function Yr(e,t){return{name:e,component:t}}function Ke(e,t){return{module:e,children:t}}function uk(e,t,n){return e.module.name===t?n(e):e.children?[Ke(e.module,e.children.flatMap(r=>{var i;return(i=uk(r,t,n))!==null&&i!==void 0?i:[]}))]:[e]}function Wi(e,t,n){return e.flatMap(r=>{var i;return(i=uk(r,t,n))!==null&&i!==void 0?i:[]})}function RN(e,t=[],n=[]){let r=e;const i=p=>{const m=[...r];for(;m.length>0;){const y=m.pop();if((y==null?void 0:y.module.name)===p)return!0;y!=null&&y.children&&m.push(...y.children)}return!1},o=(p,m)=>{if(p===""){r=[Ke(m,r)];return}r=Wi(r,p,y=>[Ke(m,[y])])},a=(p,m)=>{r=Wi(r,p,y=>[Ke(y.module,[Ke(m,y.children)])])},l=(p,m,y)=>{r=Wi(r,p,w=>{var g;return[Ke(w.module,[...y?[Ke(m)]:[],...(g=w.children)!==null&&g!==void 0?g:[],...y?[]:[Ke(m)]])]})},s=(p,m,y)=>{r=Wi(r,p,w=>[...y?[Ke(m)]:[],w,...y?[]:[Ke(m)]])},c=p=>{a(K_,p)},f=(p,m)=>{r=Wi(r,p,y=>[Ke(m,y.children)])},d=p=>{r=Wi(r,p,m=>m.children)},h=p=>{n.push(p)};return t.forEach(p=>{p({contains:i,addParent:o,append:a,addChild:l,addSibling:s,addModule:c,replace:f,remove:d,augment:h})}),{config:r,augmentation:p=>n.reduce((m,y)=>y(m),p)}}const dk=x.createContext(null),fk=mr("useA11yContext","A11yContext",dk);function FN({children:e}){const[t,n]=x.useState(!1),[r,i]=x.useState(!1),o=x.useMemo(()=>({focusWithin:t,trackFocusWithin:(l,s)=>{const c=f=>d=>{var h;d.currentTarget.contains(d.relatedTarget)||n(f),(h=f?l:s)===null||h===void 0||h(d)};return{onFocus:c(!0),onBlur:c(!1)}},autoPlaying:r,setAutoPlaying:i}),[t,r]);return x.createElement(dk.Provider,{value:o},e)}const pk=x.createContext(null),Ld=mr("useDocument","DocumentContext",pk);function zN({nodeRef:e,children:t}){const n=x.useMemo(()=>{const r=o=>{var a;return((a=o||e.current)===null||a===void 0?void 0:a.ownerDocument)||document};return{getOwnerDocument:r,getOwnerWindow:o=>{var a;return((a=r(o))===null||a===void 0?void 0:a.defaultView)||window}}},[e]);return x.createElement(pk.Provider,{value:n},t)}const hk=x.createContext(null),Rd=mr("useEvents","EventsContext",hk);function NN({children:e}){const[t]=x.useState({});x.useEffect(()=>()=>{Object.keys(t).forEach(r=>delete t[r])},[t]);const n=x.useMemo(()=>{const r=(a,l)=>{var s;(s=t[a])===null||s===void 0||s.splice(0,t[a].length,...t[a].filter(c=>c!==l))};return{publish:(...[a,l])=>{var s;(s=t[a])===null||s===void 0||s.forEach(c=>c(l))},subscribe:(a,l)=>(t[a]||(t[a]=[]),t[a].push(l),()=>r(a,l)),unsubscribe:r}},[t]);return x.createElement(hk.Provider,{value:n},e)}const mk=x.createContext(null),an=mr("useLightboxProps","LightboxPropsContext",mk);function BN({children:e,...t}){return x.createElement(mk.Provider,{value:t},e)}const gk=x.createContext(null),Xr=mr("useLightboxState","LightboxStateContext",gk),vk=x.createContext(null),VN=mr("useLightboxDispatch","LightboxDispatchContext",vk);function WN(e,t){switch(t.type){case"swipe":{const{slides:n}=e,r=(t==null?void 0:t.increment)||0,i=e.globalIndex+r,o=V0(i,n.length),a=Om(n,o),l=r||t.duration!==void 0?{increment:r,duration:t.duration,easing:t.easing}:void 0;return{slides:n,currentIndex:o,globalIndex:i,currentSlide:a,animation:l}}case"update":return t.slides!==e.slides||t.index!==e.currentIndex?{slides:t.slides,currentIndex:t.index,globalIndex:t.index,currentSlide:Om(t.slides,t.index)}:e;default:throw new Error(ak)}}function UN({slides:e,index:t,children:n}){const[r,i]=x.useReducer(WN,{slides:e,currentIndex:t,globalIndex:t,currentSlide:Om(e,t)}),[o,a]=x.useState(e),[l,s]=x.useState(t);(e!==o||t!==l)&&(a(e),s(t),i({type:"update",slides:e,index:t}));const c=x.useMemo(()=>({...r,state:r,dispatch:i}),[r,i]);return x.createElement(vk.Provider,{value:i},x.createElement(gk.Provider,{value:c},n))}const yk=x.createContext(null),Fd=mr("useTimeouts","TimeoutsContext",yk);function HN({children:e}){const[t]=x.useState([]);x.useEffect(()=>()=>{t.forEach(r=>window.clearTimeout(r)),t.splice(0,t.length)},[t]);const n=x.useMemo(()=>{const r=a=>{t.splice(0,t.length,...t.filter(l=>l!==a))};return{setTimeout:(a,l)=>{const s=window.setTimeout(()=>{r(s),a()},l);return t.push(s),s},clearTimeout:a=>{a!==void 0&&(r(a),window.clearTimeout(a))}}},[t]);return x.createElement(yk.Provider,{value:n},e)}const W0=x.forwardRef(function({label:t,className:n,icon:r,renderIcon:i,onClick:o,style:a,...l},s){const{styles:c,labels:f}=an(),d=Lo(f,t);return x.createElement("button",{ref:s,type:"button",title:d,"aria-label":d,className:Nn(le(PN),n),onClick:o,style:{...a,...c.button},...l},i?i():x.createElement(r,{className:le(Pm),style:c.icon}))});function GN(e,t){const n=r=>x.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24","aria-hidden":"true",focusable:"false",...r},t);return n.displayName=e,n}function Ii(e,t){return GN(e,x.createElement("g",{fill:"currentColor"},x.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),t))}const qN=Ii("Close",x.createElement("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"})),YN=Ii("Previous",x.createElement("path",{d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"})),XN=Ii("Next",x.createElement("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"})),KN=Ii("Loading",x.createElement(x.Fragment,null,Array.from({length:8}).map((e,t,n)=>x.createElement("line",{key:t,x1:"12",y1:"6.5",x2:"12",y2:"1.8",strokeLinecap:"round",strokeWidth:"2.6",stroke:"currentColor",strokeOpacity:1/n.length*(t+1),transform:`rotate(${360/n.length*t}, 12, 12)`})))),QN=Ii("Error",x.createElement("path",{d:"M21.9,21.9l-8.49-8.49l0,0L3.59,3.59l0,0L2.1,2.1L0.69,3.51L3,5.83V19c0,1.1,0.9,2,2,2h13.17l2.31,2.31L21.9,21.9z M5,18 l3.5-4.5l2.5,3.01L12.17,15l3,3H5z M21,18.17L5.83,3H19c1.1,0,2,0.9,2,2V18.17z"})),Bn=z0()?x.useLayoutEffect:x.useEffect;function U0(){const[e,t]=x.useState(!1);return x.useEffect(()=>{var n,r;const i=(n=window.matchMedia)===null||n===void 0?void 0:n.call(window,"(prefers-reduced-motion: reduce)");t(i==null?void 0:i.matches);const o=a=>t(a.matches);return(r=i==null?void 0:i.addEventListener)===null||r===void 0||r.call(i,"change",o),()=>{var a;return(a=i==null?void 0:i.removeEventListener)===null||a===void 0?void 0:a.call(i,"change",o)}},[]),e}function ZN(e){let t=0,n=0,r=0;const o=window.getComputedStyle(e).transform.match(/matrix.*\((.+)\)/);if(o){const a=o[1].split(",").map(Dd);a.length===6?(t=a[4],n=a[5]):a.length===16&&(t=a[12],n=a[13],r=a[14])}return{x:t,y:n,z:r}}function Lx(e,t){const n=x.useRef(void 0),r=x.useRef(void 0),i=U0();return Bn(()=>{var o,a,l;if(e.current&&n.current!==void 0&&!i){const{keyframes:s,duration:c,easing:f,onfinish:d}=t(n.current,e.current.getBoundingClientRect(),ZN(e.current))||{};if(s&&c){(o=r.current)===null||o===void 0||o.cancel(),r.current=void 0;try{r.current=(l=(a=e.current).animate)===null||l===void 0?void 0:l.call(a,s,{duration:c,easing:f})}catch(h){console.error(h)}r.current&&(r.current.onfinish=()=>{r.current=void 0,d==null||d()})}}n.current=void 0}),{prepareAnimation:o=>{n.current=o},isAnimationPlaying:()=>{var o;return((o=r.current)===null||o===void 0?void 0:o.playState)==="running"}}}function xk(){const e=x.useRef(null),t=x.useRef(void 0),[n,r]=x.useState();return{setContainerRef:x.useCallback(o=>{e.current=o,t.current&&(t.current.disconnect(),t.current=void 0);const a=()=>{if(o){const l=window.getComputedStyle(o),s=c=>parseFloat(c)||0;r({width:Math.round(o.clientWidth-s(l.paddingLeft)-s(l.paddingRight)),height:Math.round(o.clientHeight-s(l.paddingTop)-s(l.paddingBottom))})}else r(void 0)};a(),o&&typeof ResizeObserver<"u"&&(t.current=new ResizeObserver(a),t.current.observe(o))},[]),containerRef:e,containerRect:n}}function lc(){const e=x.useRef(void 0),{setTimeout:t,clearTimeout:n}=Fd();return x.useCallback((r,i)=>{n(e.current),e.current=t(r,i>0?i:0)},[t,n])}function ve(e){const t=x.useRef(e);return Bn(()=>{t.current=e}),x.useCallback((...n)=>{var r;return(r=t.current)===null||r===void 0?void 0:r.call(t,...n)},[])}function Rx(e,t){typeof e=="function"?e(t):e&&(e.current=t)}function jm(e,t){return x.useMemo(()=>e==null&&t==null?null:n=>{Rx(e,n),Rx(t,n)},[e,t])}function JN(e,t=!1){const n=x.useRef(!1);Bn(()=>{t&&n.current&&(n.current=!1,e())},[t,e]);const r=x.useCallback(()=>{n.current=!0},[]),i=x.useCallback(()=>{n.current=!1},[]);return{onFocus:r,onBlur:i}}function H0(){const[e,t]=x.useState(!1);return Bn(()=>{t(window.getComputedStyle(window.document.documentElement).direction==="rtl")},[]),e}function e7(){const[e]=x.useState({}),t=x.useCallback((i,o)=>{var a;(a=e[i])===null||a===void 0||a.forEach(l=>{o.isPropagationStopped()||l(o)})},[e]),n=x.useMemo(()=>({onPointerDown:i=>t(ek,i),onPointerMove:i=>t(tk,i),onPointerUp:i=>t(nk,i),onPointerLeave:i=>t(rk,i),onPointerCancel:i=>t(ik,i),onKeyDown:i=>t(D0,i),onKeyUp:i=>t(CN,i),onWheel:i=>t(L0,i)}),[t]),r=x.useCallback((i,o)=>(e[i]||(e[i]=[]),e[i].unshift(o),()=>{const a=e[i];a&&a.splice(0,a.length,...a.filter(l=>l!==o))}),[e]);return{registerSensors:n,subscribeSensors:r}}function Fx(e,t){const n=x.useRef(0),r=lc(),i=ve((...o)=>{n.current=Date.now(),e(o)});return x.useCallback((...o)=>{r(()=>{i(o)},t-(Date.now()-n.current))},[t,i,r])}const kp=R0("slide"),Pp=R0("slide_image");function du({slide:e,offset:t,render:n,rect:r,imageFit:i,imageProps:o,onClick:a,onLoad:l,onError:s,style:c}){var f,d,h,p,m,y,w,g;const[v,b]=x.useState(Cp),{publish:C}=Rd(),{setTimeout:S}=Fd(),P=x.useRef(null);x.useEffect(()=>{t===0&&C(xN(v))},[t,v,C]);const k=ve(L=>{("decode"in L?L.decode():Promise.resolve()).catch(()=>{}).then(()=>{L.parentNode&&(b(_p),S(()=>{l==null||l(L)},0))})}),_=x.useCallback(L=>{P.current=L,L!=null&&L.complete&&k(L)},[k]),T=x.useCallback(L=>{k(L.currentTarget)},[k]),$=ve(()=>{b(Ep),s==null||s()}),I=B0(e,i),M=(L,V)=>Number.isFinite(L)?L:V,j=M(Math.max(...((d=(f=e.srcSet)===null||f===void 0?void 0:f.map(L=>L.width))!==null&&d!==void 0?d:[]).concat(e.width?[e.width]:[]).filter(Boolean)),((h=P.current)===null||h===void 0?void 0:h.naturalWidth)||0),F=M(Math.max(...((m=(p=e.srcSet)===null||p===void 0?void 0:p.map(L=>L.height))!==null&&m!==void 0?m:[]).concat(e.height?[e.height]:[]).filter(Boolean)),((y=P.current)===null||y===void 0?void 0:y.naturalHeight)||0),D=j&&F?{maxWidth:`min(${j}px, 100%)`,maxHeight:`min(${F}px, 100%)`}:{maxWidth:"100%",maxHeight:"100%"},z=(w=e.srcSet)===null||w===void 0?void 0:w.slice().sort((L,V)=>L.width-V.width).map(L=>`${L.src} ${L.width}w`).join(", "),R=()=>r&&!I&&e.width&&e.height?r.height/e.height*e.width:Number.MAX_VALUE,O=z&&r&&z0()?`${Math.round(Math.min(R(),r.width))}px`:void 0,{style:A,className:N,...B}=(typeof o=="function"?o(e):o)||{};return x.createElement(x.Fragment,null,x.createElement("img",{ref:_,onLoad:T,onError:$,onClick:a,draggable:!1,className:Nn(le(Pp()),I&&le(Pp("cover")),v!==_p&&le(Pp("loading")),N),style:{...D,...c,...A},...B,alt:(g=e.alt)!==null&&g!==void 0?g:"",sizes:O,srcSet:z,src:e.src}),v!==_p&&x.createElement("div",{className:le(kp(yN))},v===Cp&&(n!=null&&n.iconLoading?n.iconLoading():x.createElement(KN,{className:Nn(le(Pm),le(kp(Cp)))})),v===Ep&&(n!=null&&n.iconError?n.iconError():x.createElement(QN,{className:Nn(le(Pm),le(kp(Ep)))}))))}const t7=x.forwardRef(function({className:t,children:n,onFocus:r,onBlur:i,...o},a){const l=x.useRef(null),{trackFocusWithin:s}=fk();return x.createElement(zN,{nodeRef:l},x.createElement("div",{ref:jm(a,l),className:Nn(le("root"),t),...s(r,i),...o},n))});var ft;(function(e){e[e.NONE=0]="NONE",e[e.SWIPE=1]="SWIPE",e[e.PULL=2]="PULL",e[e.ANIMATION=3]="ANIMATION"})(ft||(ft={}));function bk(e,t,n,r,i){x.useEffect(()=>i?()=>{}:F0(e(ek,t),e(tk,n),e(nk,r),e(rk,r),e(ik,r)),[e,t,n,r,i])}var un;(function(e){e[e.NONE=0]="NONE",e[e.SWIPE=1]="SWIPE",e[e.PULL=2]="PULL"})(un||(un={}));const Op=30;function n7({disableSwipeNavigation:e,closeOnBackdropClick:t},n,r,i,o,a,l,s,c,f,d,h,p,m,y,w){const g=x.useRef(0),v=x.useRef([]),b=x.useRef(void 0),C=x.useRef(0),S=x.useRef(un.NONE),P=x.useCallback(j=>{b.current===j.pointerId&&(b.current=void 0,S.current=un.NONE);const F=v.current;F.splice(0,F.length,...F.filter(D=>D.pointerId!==j.pointerId))},[]),k=x.useCallback(j=>{P(j),j.persist(),v.current.push(j)},[P]),_=x.useCallback(j=>v.current.find(({pointerId:F})=>j.pointerId===F),[]),T=ve(j=>{k(j)}),$=(j,F)=>d&&j>F||f&&j<-F,I=ve(j=>{const F=_(j);if(F)if(b.current===j.pointerId){const D=Date.now()-C.current,z=g.current;S.current===un.SWIPE?Math.abs(z)>.3*i||Math.abs(z)>5&&D<o?s(z,D):c(z):S.current===un.PULL&&($(z,2*Op)?m(z,D):y(z)),g.current=0,S.current=un.NONE}else{const{target:D}=j;t&&D instanceof HTMLElement&&D===F.target&&(D.classList.contains(le(A0))||D.classList.contains(le(J_)))&&w()}P(j)}),M=ve(j=>{const F=_(j);if(F){const D=b.current===j.pointerId;if(j.buttons===0){D&&g.current!==0?I(j):P(F);return}const z=j.clientX-F.clientX,R=j.clientY-F.clientY;if(b.current===void 0){const O=A=>{k(j),b.current=j.pointerId,C.current=Date.now(),S.current=A};Math.abs(z)>Math.abs(R)&&Math.abs(z)>Op&&r(z)?e||(O(un.SWIPE),a()):Math.abs(R)>Math.abs(z)&&$(R,Op)&&(O(un.PULL),h())}else D&&(S.current===un.SWIPE?(g.current=z,l(z)):S.current===un.PULL&&(g.current=R,p(R)))}});bk(n,T,M,I)}function r7({preventDefaultWheelX:e,preventDefaultWheelY:t}){const n=x.useRef(null),r=ve(i=>{const o=Math.abs(i.deltaX)>Math.abs(i.deltaY);(o&&e||!o&&t||i.ctrlKey)&&i.preventDefault()});return x.useCallback(i=>{var o;i?i.addEventListener("wheel",r,{passive:!1}):(o=n.current)===null||o===void 0||o.removeEventListener("wheel",r),n.current=i},[r])}function i7(e,t,n,r,i,o,a,l,s){const c=x.useRef(0),f=x.useRef(0),d=x.useRef(void 0),h=x.useRef(void 0),p=x.useRef(0),m=x.useRef(void 0),y=x.useRef(0),{setTimeout:w,clearTimeout:g}=Fd(),v=x.useCallback(()=>{d.current&&(g(d.current),d.current=void 0)},[g]),b=x.useCallback(()=>{h.current&&(g(h.current),h.current=void 0)},[g]),C=ve(()=>{e!==ft.SWIPE&&(c.current=0,y.current=0,v(),b())});x.useEffect(C,[e,C]);const S=ve(k=>{h.current=void 0,c.current===k&&s(c.current)}),P=ve(k=>{if(k.ctrlKey||Math.abs(k.deltaY)>Math.abs(k.deltaX))return;const _=T=>{p.current=T,g(m.current),m.current=T>0?w(()=>{p.current=0,m.current=void 0},300):void 0};if(e===ft.NONE){if(Math.abs(k.deltaX)<=1.2*Math.abs(p.current)){_(k.deltaX);return}if(!n(-k.deltaX))return;if(f.current+=k.deltaX,v(),Math.abs(f.current)>30)f.current=0,_(0),y.current=Date.now(),o();else{const T=f.current;d.current=w(()=>{d.current=void 0,T===f.current&&(f.current=0)},i)}}else if(e===ft.SWIPE){let T=c.current-k.deltaX;if(T=Math.min(Math.abs(T),r)*Math.sign(T),c.current=T,a(T),b(),Math.abs(T)>.2*r){_(k.deltaX),l(T,Date.now()-y.current);return}h.current=w(()=>S(T),2*i)}else _(k.deltaX)});x.useEffect(()=>t(L0,P),[t,P])}const zx=R0("container"),wk=x.createContext(null),gr=mr("useController","ControllerContext",wk);function o7({children:e,...t}){var n;const{carousel:r,animation:i,controller:o,on:a,styles:l,render:s}=t,{closeOnPullUp:c,closeOnPullDown:f,preventDefaultWheelX:d,preventDefaultWheelY:h}=o,[p,m]=x.useState(),y=Xr(),w=VN(),[g,v]=x.useState(ft.NONE),b=x.useRef(0),C=x.useRef(0),S=x.useRef(1),{registerSensors:P,subscribeSensors:k}=e7(),{subscribe:_,publish:T}=Rd(),$=lc(),I=lc(),M=lc(),{containerRef:j,setContainerRef:F,containerRect:D}=xk(),z=jm(r7({preventDefaultWheelX:d,preventDefaultWheelY:h}),F),R=x.useRef(null),O=jm(R,void 0),{getOwnerDocument:A}=Ld(),N=H0(),B=Y=>(N?-1:1)*(typeof Y=="number"?Y:1),L=ve(()=>{var Y;return(Y=j.current)===null||Y===void 0?void 0:Y.focus()}),V=ve(()=>t),H=ve(()=>y),G=x.useCallback(Y=>T(ri,Y),[T]),W=x.useCallback(Y=>T(ii,Y),[T]),Q=x.useCallback(()=>T(Do),[T]),te=Y=>!(r.finite&&(B(Y)>0&&y.currentIndex===0||B(Y)<0&&y.currentIndex===y.slides.length-1)),de=Y=>{var Ee;b.current=Y,(Ee=j.current)===null||Ee===void 0||Ee.style.setProperty(Tt("swipe_offset"),`${Math.round(Y)}px`)},ae=Y=>{var Ee,gt;C.current=Y,S.current=(()=>{const ea=(()=>f&&Y>0?Y:c&&Y<0?-Y:0)();return Math.min(Math.max(N0(1-ea/60*(1-.5),2),.5),1)})(),(Ee=j.current)===null||Ee===void 0||Ee.style.setProperty(Tt("pull_offset"),`${Math.round(Y)}px`),(gt=j.current)===null||gt===void 0||gt.style.setProperty(Tt("pull_opacity"),`${S.current}`)},{prepareAnimation:Fe}=Lx(R,(Y,Ee,gt)=>{if(R.current&&D)return{keyframes:[{transform:`translate(0, ${Y.rect.y-Ee.y+gt.y}px)`,opacity:Y.opacity},{transform:"translate(0, 0)",opacity:1}],duration:Y.duration,easing:i.easing.fade}}),qe=(Y,Ee)=>{if(c||f){ae(Y);let gt=0;R.current&&(gt=i.fade*(Ee?2:1),Fe({rect:R.current.getBoundingClientRect(),opacity:S.current,duration:gt})),M(()=>{ae(0),v(ft.NONE)},gt),v(ft.ANIMATION),Ee||Q()}},{prepareAnimation:Ye,isAnimationPlaying:Mi}=Lx(R,(Y,Ee,gt)=>{var Cn;if(R.current&&D&&(!((Cn=y.animation)===null||Cn===void 0)&&Cn.duration)){const Qt=uu(r.spacing),ea=(Qt.percent?Qt.percent*D.width/100:Qt.pixel)||0;return{keyframes:[{transform:`translate(${B(y.globalIndex-Y.index)*(D.width+ea)+Y.rect.x-Ee.x+gt.x}px, 0)`},{transform:"translate(0, 0)"}],duration:y.animation.duration,easing:y.animation.easing}}}),Pt=ve(Y=>{var Ee,gt;const Cn=Y.offset||0,Qt=Cn?i.swipe:(Ee=i.navigation)!==null&&Ee!==void 0?Ee:i.swipe,ea=!Cn&&!Mi()?i.easing.navigation:i.easing.swipe;let{direction:Hs}=Y;const Gs=(gt=Y.count)!==null&&gt!==void 0?gt:1;let Kd=ft.ANIMATION,En=Qt*Gs;if(!Hs){const ta=D==null?void 0:D.width,sv=Y.duration||0,Zd=ta?Qt/ta*Math.abs(Cn):Qt;Gs!==0?(sv<Zd?En=En/Zd*Math.max(sv,Zd/5):ta&&(En=Qt/ta*(ta-Math.abs(Cn))),Hs=B(Cn)>0?ri:ii):En=Qt/2}let Qd=0;Hs===ri?te(B(1))?Qd=-Gs:(Kd=ft.NONE,En=Qt):Hs===ii&&(te(B(-1))?Qd=Gs:(Kd=ft.NONE,En=Qt)),En=Math.round(En),I(()=>{de(0),v(ft.NONE)},En),R.current&&Ye({rect:R.current.getBoundingClientRect(),index:y.globalIndex}),v(Kd),T(Ax,{type:"swipe",increment:Qd,duration:En,easing:ea})});x.useEffect(()=>{var Y,Ee;!((Y=y.animation)===null||Y===void 0)&&Y.increment&&(!((Ee=y.animation)===null||Ee===void 0)&&Ee.duration)&&$(()=>w({type:"swipe",increment:0}),y.animation.duration)},[y.animation,w,$]);const Zo=[k,te,(D==null?void 0:D.width)||0,i.swipe,()=>v(ft.SWIPE),Y=>de(Y),(Y,Ee)=>Pt({offset:Y,duration:Ee,count:1}),Y=>Pt({offset:Y,count:0})],Us=[()=>{f&&v(ft.PULL)},Y=>ae(Y),Y=>qe(Y),Y=>qe(Y,!0)];n7(o,...Zo,c,f,...Us,Q),i7(g,...Zo);const Jo=ve(()=>{o.focus&&A().querySelector(`.${le(I0)} .${le(zx())}`)&&L()});x.useEffect(Jo,[Jo]);const av=ve(()=>{var Y;(Y=a.view)===null||Y===void 0||Y.call(a,{index:y.currentIndex})});x.useEffect(av,[y.globalIndex,av]),x.useEffect(()=>F0(_(ri,Y=>Pt({direction:ri,...Y})),_(ii,Y=>Pt({direction:ii,...Y})),_(Ax,Y=>w(Y))),[_,Pt,w]);const TP=x.useMemo(()=>({prev:G,next:W,close:Q,focus:L,slideRect:D?TN(D,r.padding):{width:0,height:0},containerRect:D||{width:0,height:0},subscribeSensors:k,containerRef:j,setCarouselRef:O,toolbarWidth:p,setToolbarWidth:m}),[G,W,Q,L,k,D,j,O,p,m,r.padding]);return x.useImperativeHandle(o.ref,()=>({prev:G,next:W,close:Q,focus:L,getLightboxProps:V,getLightboxState:H}),[G,W,Q,L,V,H]),x.createElement("div",{ref:z,className:Nn(le(zx()),le(M0)),style:{...g===ft.SWIPE?{[Tt("swipe_offset")]:`${Math.round(b.current)}px`}:null,...g===ft.PULL?{[Tt("pull_offset")]:`${Math.round(C.current)}px`,[Tt("pull_opacity")]:`${S.current}`}:null,...o.touchAction!=="none"?{[Tt("controller_touch_action")]:o.touchAction}:null,...l.container},tabIndex:-1,...P},D&&x.createElement(wk.Provider,{value:TP},e,(n=s.controls)===null||n===void 0?void 0:n.call(s)))}const a7=Yr(K_,o7);function Kr(e){return Ws(X_,e)}function Nx(e){return Ws(A0,e)}function s7({slide:e,offset:t}){const n=x.useRef(null),{currentIndex:r,slides:i}=Xr(),{slideRect:o,focus:a}=gr(),{render:l,carousel:{imageFit:s,imageProps:c},on:{click:f},styles:{slide:d},labels:h}=an(),{getOwnerDocument:p}=Ld(),m=t!==0;x.useEffect(()=>{var w;m&&(!((w=n.current)===null||w===void 0)&&w.contains(p().activeElement))&&a()},[m,a,p]);const y=()=>{var w,g,v,b;let C=(w=l.slide)===null||w===void 0?void 0:w.call(l,{slide:e,offset:t,rect:o});return!C&&Qo(e)&&(C=x.createElement(du,{slide:e,offset:t,render:l,rect:o,imageFit:s,imageProps:c,onClick:m?void 0:()=>f==null?void 0:f({index:r})})),C?x.createElement(x.Fragment,null,(g=l.slideHeader)===null||g===void 0?void 0:g.call(l,{slide:e}),((v=l.slideContainer)!==null&&v!==void 0?v:({children:S})=>S)({slide:e,children:C}),(b=l.slideFooter)===null||b===void 0?void 0:b.call(l,{slide:e})):null};return x.createElement("div",{ref:n,className:Nn(le(Nx()),!m&&le(Nx("current")),le(M0)),...DN(m),style:d,role:"group","aria-roledescription":Lo(h,"Slide"),"aria-label":ON(h,i,r+t)},y())}function l7(){const e=an().styles.slide;return x.createElement("div",{className:le(A0),style:e})}function c7({carousel:e,labels:t}){const{slides:n,currentIndex:r,globalIndex:i}=Xr(),{setCarouselRef:o}=gr(),{autoPlaying:a,focusWithin:l}=fk(),s=uu(e.spacing),c=uu(e.padding),f=MN(e,n,1),d=[];if(lk(n))for(let h=r-f;h<=r+f;h+=1){const p=ck(n,h),m=i-r+h,y=e.finite&&(h<0||h>n.length-1);d.push(y?{key:m}:{key:[`${m}`,$N(p)].filter(Boolean).join("|"),offset:h-r,slide:p})}return x.createElement("div",{ref:o,className:Nn(le(Kr()),d.length>0&&le(Kr("with_slides"))),style:{[`${Tt(Kr("slides_count"))}`]:d.length,[`${Tt(Kr("spacing_px"))}`]:s.pixel||0,[`${Tt(Kr("spacing_percent"))}`]:s.percent||0,[`${Tt(Kr("padding_px"))}`]:c.pixel||0,[`${Tt(Kr("padding_percent"))}`]:c.percent||0},role:"region","aria-live":a&&!l?"off":"polite","aria-roledescription":Lo(t,"Carousel"),"aria-label":Lo(t,"Photo gallery")},d.map(({key:h,slide:p,offset:m})=>p?x.createElement(s7,{key:h,slide:p,offset:m}):x.createElement(l7,{key:h})))}const u7=Yr(X_,c7);function Sk(){const{carousel:e}=an(),{slides:t,currentIndex:n}=Xr(),r=t.length===0||e.finite&&n===0,i=t.length===0||e.finite&&n===t.length-1;return{prevDisabled:r,nextDisabled:i}}function d7(e){var t;const n=H0(),{publish:r}=Rd(),{animation:i}=an(),{prevDisabled:o,nextDisabled:a}=Sk(),l=((t=i.navigation)!==null&&t!==void 0?t:i.swipe)/2,s=Fx(()=>r(ri),l),c=Fx(()=>r(ii),l),f=ve(d=>{switch(d.key){case EN:r(Do);break;case _N:(n?a:o)||(n?c:s)();break;case kN:(n?o:a)||(n?s:c)();break}});x.useEffect(()=>e(D0,f),[e,f])}function Bx({label:e,icon:t,renderIcon:n,action:r,onClick:i,disabled:o,style:a}){return x.createElement(W0,{label:e,icon:t,renderIcon:n,className:le(`navigation_${r}`),disabled:o,onClick:i,style:a,...JN(gr().focus,o)})}function f7({render:{buttonPrev:e,buttonNext:t,iconPrev:n,iconNext:r},styles:i}){const{prev:o,next:a,subscribeSensors:l}=gr(),{prevDisabled:s,nextDisabled:c}=Sk();return d7(l),x.createElement(x.Fragment,null,e?e():x.createElement(Bx,{label:"Previous",action:ri,icon:YN,renderIcon:n,style:i.navigationPrev,disabled:s,onClick:o}),t?t():x.createElement(Bx,{label:"Next",action:ii,icon:XN,renderIcon:r,style:i.navigationNext,disabled:c,onClick:a}))}const p7=Yr(mN,f7),Vx=le(wN),h7=le(Z_);function m7(e){return"style"in e}function Wx(e,t,n){const r=window.getComputedStyle(e),i=n?"padding-left":"padding-right",o=n?r.paddingLeft:r.paddingRight,a=e.style.getPropertyValue(i);return e.style.setProperty(i,`${(Dd(o)||0)+t}px`),()=>{a?e.style.setProperty(i,a):e.style.removeProperty(i)}}function g7({noScroll:{disabled:e},children:t}){const n=H0(),{getOwnerDocument:r,getOwnerWindow:i}=Ld();return x.useEffect(()=>{if(e)return()=>{};const o=[],a=i(),{body:l,documentElement:s}=r(),c=Math.round(a.innerWidth-s.clientWidth);if(c>0){o.push(Wx(l,c,n));const f=l.getElementsByTagName("*");for(let d=0;d<f.length;d+=1){const h=f[d];m7(h)&&a.getComputedStyle(h).getPropertyValue("position")==="fixed"&&!h.classList.contains(h7)&&o.push(Wx(h,c,n))}}return l.classList.add(Vx),()=>{l.classList.remove(Vx),o.forEach(f=>f())}},[n,e,r,i]),x.createElement(x.Fragment,null,t)}const v7=Yr(gN,g7);function Ux(e){return Ws(I0,e)}function Hx(e,t,n){const r=e.getAttribute(t);return e.setAttribute(t,n),()=>{r?e.setAttribute(t,r):e.removeAttribute(t)}}function y7({children:e,animation:t,styles:n,className:r,on:i,portal:o,close:a,labels:l}){const[s,c]=x.useState(!1),[f,d]=x.useState(!1),h=x.useRef([]),p=x.useRef(null),{setTimeout:m}=Fd(),{subscribe:y}=Rd(),g=U0()?0:t.fade;x.useEffect(()=>(c(!0),()=>{c(!1),d(!1)}),[]);const v=ve(()=>{h.current.forEach(P=>P()),h.current=[]}),b=ve(()=>{var P;d(!1),v(),(P=i.exiting)===null||P===void 0||P.call(i),m(()=>{var k;(k=i.exited)===null||k===void 0||k.call(i),a()},g)});x.useEffect(()=>y(Do,b),[y,b]);const C=ve(P=>{var k,_,T;LN(P),d(!0),(k=i.entering)===null||k===void 0||k.call(i);const $=(T=(_=P.parentNode)===null||_===void 0?void 0:_.children)!==null&&T!==void 0?T:[];for(let I=0;I<$.length;I+=1){const M=$[I];["TEMPLATE","SCRIPT","STYLE"].indexOf(M.tagName)===-1&&M!==P&&(h.current.push(Hx(M,"inert","")),h.current.push(Hx(M,"aria-hidden","true")))}h.current.push(()=>{var I,M;(M=(I=p.current)===null||I===void 0?void 0:I.focus)===null||M===void 0||M.call(I)}),m(()=>{var I;(I=i.entered)===null||I===void 0||I.call(i)},g)}),S=x.useCallback(P=>{P?C(P):v()},[C,v]);return s?Ru.createPortal(x.createElement(t7,{ref:S,className:Nn(r,le(Ux()),le(Z_),f&&le(Ux("open"))),"aria-modal":!0,role:"dialog","aria-label":Lo(l,"Lightbox"),style:{...t.fade!==Tm.animation.fade?{[Tt("fade_animation_duration")]:`${g}ms`}:null,...t.easing.fade!==Tm.animation.easing.fade?{[Tt("fade_animation_timing_function")]:t.easing.fade}:null,...n.root},onFocus:P=>{p.current||(p.current=P.relatedTarget)}},e),o.root||document.body):null}const x7=Yr(I0,y7);function b7({children:e}){return x.createElement(x.Fragment,null,e)}const w7=Yr(vN,b7);function S7(e){return Ws(Q_,e)}function C7({toolbar:{buttons:e},render:{buttonClose:t,iconClose:n},styles:r}){const{close:i,setToolbarWidth:o}=gr(),{setContainerRef:a,containerRect:l}=xk();Bn(()=>{o(l==null?void 0:l.width)},[o,l==null?void 0:l.width]);const s=()=>t?t():x.createElement(W0,{key:Do,label:"Close",icon:qN,renderIcon:n,onClick:i});return x.createElement("div",{ref:a,style:r.toolbar,className:le(S7())},e==null?void 0:e.map(c=>c===Do?s():c))}const E7=Yr(Q_,C7);function Ck(e,t){var n;return x.createElement(e.module.component,{key:e.module.name,...t},(n=e.children)===null||n===void 0?void 0:n.map(r=>Ck(r,t)))}function _7(e,t={}){const{easing:n,...r}=e,{easing:i,...o}=t;return{easing:{...n,...i},...r,...o}}function k7({carousel:e,animation:t,render:n,toolbar:r,controller:i,noScroll:o,on:a,plugins:l,slides:s,index:c,...f}){const{animation:d,carousel:h,render:p,toolbar:m,controller:y,noScroll:w,on:g,slides:v,index:b,plugins:C,...S}=Tm,{config:P,augmentation:k}=RN([Ke(x7,[Ke(v7,[Ke(a7,[Ke(u7),Ke(E7),Ke(p7)])])])],l||C),_=k({animation:_7(d,t),carousel:{...h,...e},render:{...p,...n},toolbar:{...m,...r},controller:{...y,...i},noScroll:{...w,...o},on:{...g,...a},...S,...f});return _.open?x.createElement(BN,{..._},x.createElement(UN,{slides:s||v,index:Dd(c||b)},x.createElement(HN,null,x.createElement(NN,null,x.createElement(FN,null,Ck(Ke(w7,P),_)))))):null}const P7={minZoom:1,maxZoomPixelRatio:1,zoomInMultiplier:2,doubleTapDelay:300,doubleClickDelay:500,doubleClickMaxStops:2,keyboardMoveDistance:50,wheelZoomDistanceFactor:100,pinchZoomDistanceFactor:100,pinchZoomV4:!1,scrollToZoom:!1};function O7(e){return Math.min(Math.max(e,Number.EPSILON),1)}function Ek(e){const{minZoom:t,...n}={...P7,...e};return{minZoom:O7(t),...n}}function T7(e,t,n,r){const i=x.useRef(void 0),o=x.useRef(void 0),{zoom:a}=an().animation,l=U0(),s=ve(()=>{var c,f,d;if((c=i.current)===null||c===void 0||c.cancel(),i.current=void 0,o.current&&(r!=null&&r.current)){try{i.current=(d=(f=r.current).animate)===null||d===void 0?void 0:d.call(f,[{transform:o.current},{transform:`scale(${e}) translateX(${t}px) translateY(${n}px)`}],{duration:l?0:a??500,easing:i.current?"ease-out":"ease-in-out"})}catch(h){console.error(h)}o.current=void 0,i.current&&(i.current.onfinish=()=>{i.current=void 0})}});return Bn(s,[e,t,n,s]),x.useCallback(()=>{o.current=r!=null&&r.current?window.getComputedStyle(r.current).transform:void 0},[r])}function j7(e,t){const{on:n}=an(),r=ve(()=>{var i;t||(i=n.zoom)===null||i===void 0||i.call(n,{zoom:e})});x.useEffect(r,[e,r])}function zd(){const{zoom:e}=an();return Ek(e)}function $7(e,t){var n,r;let i={width:0,height:0},o={width:0,height:0};const{currentSlide:a}=Xr(),{imageFit:l}=an().carousel,{maxZoomPixelRatio:s}=zd();if(e&&a){const f={...a,...t};if(Qo(f)){const d=B0(f,l),h=Math.max(...(((n=f.srcSet)===null||n===void 0?void 0:n.map(m=>m.width))||[]).concat(f.width?[f.width]:[])),p=Math.max(...(((r=f.srcSet)===null||r===void 0?void 0:r.map(m=>m.height))||[]).concat(f.height?[f.height]:[]));h>0&&p>0&&e.width>0&&e.height>0&&(o=d?{width:Math.round(Math.min(h,e.width/e.height*p)),height:Math.round(Math.min(p,e.height/e.width*h))}:{width:h,height:p},o={width:o.width*s,height:o.height*s},i=d?{width:Math.min(e.width,o.width,h),height:Math.min(e.height,o.height,p)}:{width:Math.round(Math.min(e.width,e.height/p*h,h)),height:Math.round(Math.min(e.height,e.width/h*p,p))})}}const c=i.width?Math.max(N0(o.width/i.width,5),1):1;return{imageRect:i,maxZoom:c}}function Gx(e,t){return Math.hypot(e.clientX-t.clientX,e.clientY-t.clientY)}function qx(e,t,n=100,r=2){return e*Math.min(1+Math.abs(t/n),r)**Math.sign(t)}function I7(e,t,n,r,i,o,a,l,s){const c=x.useRef([]),f=x.useRef(0),d=x.useRef(void 0),{globalIndex:h}=Xr(),{getOwnerWindow:p}=Ld(),{containerRef:m,subscribeSensors:y}=gr(),{keyboardMoveDistance:w,zoomInMultiplier:g,wheelZoomDistanceFactor:v,scrollToZoom:b,doubleTapDelay:C,doubleClickDelay:S,doubleClickMaxStops:P,pinchZoomDistanceFactor:k,pinchZoomV4:_}=zd(),T=x.useCallback(O=>{if(m.current){const{pageX:A,pageY:N}=O,{scrollX:B,scrollY:L}=p(),{left:V,top:H,width:G,height:W}=m.current.getBoundingClientRect();return[A-V-B-G/2,N-H-L-W/2]}return[]},[m,p]),$=ve(O=>{const{key:A,metaKey:N,ctrlKey:B}=O,L=N||B,V=()=>{O.preventDefault(),O.stopPropagation()};if(e>1){const H=(G,W)=>{V(),l(G,W)};A==="ArrowDown"?H(0,w):A==="ArrowUp"?H(0,-w):A==="ArrowLeft"?H(-w,0):A==="ArrowRight"&&H(w,0)}A==="+"||L&&A==="="?(V(),i()):A==="-"||L&&A==="_"?(V(),o()):L&&A==="0"&&(V(),a(1))}),I=ve(O=>{if((O.ctrlKey||b)&&Math.abs(O.deltaY)>Math.abs(O.deltaX)){O.stopPropagation(),a(qx(e,-O.deltaY,v),!0,...T(O));return}e>1&&(O.stopPropagation(),b||l(O.deltaX,O.deltaY))}),M=x.useCallback(O=>{const A=c.current;A.splice(0,A.length,...A.filter(N=>N.pointerId!==O.pointerId))},[]),j=x.useCallback(O=>{M(O),O.persist(),c.current.push(O)},[M]),F=ve(O=>{var A;const N=c.current;if(O.pointerType==="mouse"&&O.buttons>1||!(!((A=s==null?void 0:s.current)===null||A===void 0)&&A.contains(O.target)))return;e>1&&O.stopPropagation();const{timeStamp:B}=O;if(N.length===0&&B-f.current<(O.pointerType==="touch"?C:S)){f.current=0;const L=e>=1?e!==n?e*Math.max(n**(1/P),g):1:e!==t?e/Math.max(t**(-1/P),g):1;a(L,!1,...T(O))}else f.current=B;if(j(O),N.length===2){const L=Gx(N[0],N[1]);d.current={previousDistance:L,initialDistance:Math.max(L,1),initialZoom:e}}}),D=ve(O=>{const A=c.current,N=A.find(B=>B.pointerId===O.pointerId);if(A.length===2&&d.current){O.stopPropagation(),j(O);const B=Gx(A[0],A[1]),L=_?d.current.initialZoom/d.current.initialDistance*B:qx(e,B-d.current.previousDistance,k);a(L,!0,...A.map(V=>T(V)).reduce((V,H)=>H.map((G,W)=>V[W]+G/2))),d.current.previousDistance=B;return}e>1&&(O.stopPropagation(),N&&(A.length===1&&l((N.clientX-O.clientX)/e,(N.clientY-O.clientY)/e),j(O)))}),z=x.useCallback(O=>{const A=c.current;A.length===2&&A.find(N=>N.pointerId===O.pointerId)&&(d.current=void 0),M(O)},[M]),R=x.useCallback(()=>{const O=c.current;O.splice(0,O.length),f.current=0,d.current=void 0},[]);bk(y,F,D,z,r),x.useEffect(R,[h,R]),x.useEffect(()=>r?()=>{}:F0(R,y(D0,$),y(L0,I)),[r,y,R,$,I])}function M7(e,t,n){const[r,i]=x.useState(1),[o,a]=x.useState(0),[l,s]=x.useState(0),c=T7(r,o,l,n),{currentSlide:f,globalIndex:d}=Xr(),{containerRect:h,slideRect:p}=gr(),{minZoom:m,zoomInMultiplier:y}=zd(),w=f&&Qo(f)?f.src:void 0,g=!w||!(n!=null&&n.current);Bn(()=>{i(1),a(0),s(0)},[d,w]);const v=x.useCallback((k,_,T)=>{const $=T||r,I=o-(k||0),M=l-(_||0),j=(e.width*$-p.width)/2/$,F=(e.height*$-p.height)/2/$;a(Math.min(Math.abs(I),Math.max(j,0))*Math.sign(I)),s(Math.min(Math.abs(M),Math.max(F,0))*Math.sign(M))},[r,o,l,p,e.width,e.height]),b=x.useCallback((k,_,T,$)=>{const I=N0(k+.01<t?k-.01>m?k:m:t,5);_||c(),v(T?T*(1/r-1/I):0,$?$*(1/r-1/I):0,I),i(I)},[r,m,t,v,c]),C=ve(()=>{r>1&&(r>t&&b(t,!0),v())});Bn(C,[h.width,h.height,C]);const S=x.useCallback(()=>{const k=r*y;b(r<1&&k>1?1:k)},[r,y,b]),P=x.useCallback(()=>{const k=r/y;b(r>1&&k<1?1:k)},[r,y,b]);return{zoom:r,offsetX:o,offsetY:l,disabled:g,changeOffsets:v,changeZoom:b,zoomIn:S,zoomOut:P}}const _k=x.createContext(null),G0=mr("useZoom","ZoomControllerContext",_k);function A7({children:e}){const[t,n]=x.useState(),{slideRect:r}=gr(),{ref:i,minZoom:o}=zd(),{imageRect:a,maxZoom:l}=$7(r,t==null?void 0:t.imageDimensions),{zoom:s,offsetX:c,offsetY:f,disabled:d,changeZoom:h,changeOffsets:p,zoomIn:m,zoomOut:y}=M7(a,l,t==null?void 0:t.zoomWrapperRef);j7(s,d),I7(s,o,l,d,m,y,h,p,t==null?void 0:t.zoomWrapperRef);const w=x.useMemo(()=>({zoom:s,minZoom:o,maxZoom:l,offsetX:c,offsetY:f,disabled:d,zoomIn:m,zoomOut:y,changeZoom:h}),[s,o,l,c,f,d,m,y,h]);x.useImperativeHandle(i,()=>w,[w]);const g=x.useMemo(()=>({...w,setZoomWrapper:n}),[w,n]);return x.createElement(_k.Provider,{value:g},e)}const D7=Ii("ZoomIn",x.createElement(x.Fragment,null,x.createElement("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}),x.createElement("path",{d:"M12 10h-2v2H9v-2H7V9h2V7h1v2h2v1z"}))),L7=Ii("ZoomOut",x.createElement("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14zM7 9h5v1H7z"})),Yx=x.forwardRef(function({zoomIn:t,onLoseFocus:n},r){const i=x.useRef(!1),o=x.useRef(!1),{zoom:a,minZoom:l,maxZoom:s,zoomIn:c,zoomOut:f,disabled:d}=G0(),{render:h}=an(),p=d||(t?a>=s:a<=l);return x.useEffect(()=>{p&&i.current&&o.current&&n(),p||(i.current=!0)},[p,n]),x.createElement(W0,{ref:r,disabled:p,label:t?"Zoom in":"Zoom out",icon:t?D7:L7,renderIcon:t?h.iconZoomIn:h.iconZoomOut,onClick:t?c:f,onFocus:()=>{o.current=!0},onBlur:()=>{o.current=!1}})});function R7(){const e=x.useRef(null),t=x.useRef(null),{focus:n}=gr(),r=x.useCallback(a=>{var l,s;!((l=a.current)===null||l===void 0)&&l.disabled?n():(s=a.current)===null||s===void 0||s.focus()},[n]),i=x.useCallback(()=>r(e),[r]),o=x.useCallback(()=>r(t),[r]);return x.createElement(x.Fragment,null,x.createElement(Yx,{zoomIn:!0,ref:e,onLoseFocus:o}),x.createElement(Yx,{ref:t,onLoseFocus:i}))}function F7(){const{render:e}=an(),t=G0();return e.buttonZoom?x.createElement(x.Fragment,null,e.buttonZoom(t)):x.createElement(R7,null)}function z7(e){var t;return(((t=e.srcSet)===null||t===void 0?void 0:t.length)||0)>0}function N7({current:e,preload:t},{type:n,source:r}){switch(n){case"fetch":return e?{current:e,preload:r}:{current:r};case"done":return r===t?{current:r}:{current:e,preload:t};default:throw new Error(ak)}}function B7(e){var t,n;const[{current:r,preload:i},o]=x.useReducer(N7,{}),{slide:a,rect:l,imageFit:s,render:c,interactive:f}=e,d=a.srcSet.sort((S,P)=>S.width-P.width),h=(t=a.width)!==null&&t!==void 0?t:d[d.length-1].width,p=(n=a.height)!==null&&n!==void 0?n:d[d.length-1].height,m=B0(a,s),y=Math.max(...d.map(S=>S.width)),w=Math.min((m?Math.max:Math.min)(l.width,h*(l.height/p)),y),g=jN(),v=ve(()=>{var S;const P=(S=d.find(k=>k.width>=w*g))!==null&&S!==void 0?S:d[d.length-1];(!r||d.findIndex(k=>k.src===r)<d.findIndex(k=>k===P))&&o({type:"fetch",source:P.src})});Bn(v,[l.width,l.height,g,v]);const b=ve(S=>o({type:"done",source:S})),C={WebkitTransform:f?"initial":"translateZ(0)"};return m||Object.assign(C,l.width/l.height<h/p?{width:"100%",height:"auto"}:{width:"auto",height:"100%"}),x.createElement(x.Fragment,null,i&&i!==r&&x.createElement(du,{key:"preload",...e,offset:void 0,slide:{...a,src:i,srcSet:void 0},style:{position:"absolute",visibility:"hidden",...C},onLoad:()=>b(i),render:{...c,iconLoading:()=>null,iconError:()=>null}}),r&&x.createElement(du,{key:"current",...e,slide:{...a,src:r,srcSet:void 0},style:C}))}function V7({render:e,slide:t,offset:n,rect:r}){var i;const[o,a]=x.useState(),l=x.useRef(null),{zoom:s,maxZoom:c,offsetX:f,offsetY:d,setZoomWrapper:h}=G0(),p=s>1,{carousel:m,on:y}=an(),{currentIndex:w}=Xr();Bn(()=>n===0?(h({zoomWrapperRef:l,imageDimensions:o}),()=>h(void 0)):()=>{},[n,o,h]);let g=(i=e.slide)===null||i===void 0?void 0:i.call(e,{slide:t,offset:n,rect:r,zoom:s,maxZoom:c});if(!g&&Qo(t)){const v={slide:t,offset:n,rect:r,render:e,imageFit:m.imageFit,imageProps:m.imageProps,onClick:n===0?()=>{var b;return(b=y.click)===null||b===void 0?void 0:b.call(y,{index:w})}:void 0};g=z7(t)?x.createElement(B7,{...v,slide:t,interactive:p,rect:n===0?{width:r.width*s,height:r.height*s}:r}):x.createElement(du,{onLoad:b=>a({width:b.naturalWidth,height:b.naturalHeight}),...v})}return g?x.createElement("div",{ref:l,className:Nn(le(bN),le(M0),le(J_),p&&le(SN)),style:n===0?{transform:`scale(${s}) translateX(${f}px) translateY(${d}px)`}:void 0},g):null}const W7=({augment:e,addModule:t})=>{e(({zoom:n,toolbar:r,render:i,controller:o,...a})=>{const l=Ek(n);return{zoom:l,toolbar:IN(r,Mx,x.createElement(F7,null)),render:{...i,slide:s=>{var c;return Qo(s.slide)?x.createElement(V7,{render:i,...s}):(c=i.slide)===null||c===void 0?void 0:c.call(i,s)}},controller:{...o,preventDefaultWheelY:l.scrollToZoom},...a}}),t(Yr(Mx,A7))};var kk={exports:{}};(function(e,t){(function(n,r){e.exports=r()})(ne,function(){var n=1e3,r=6e4,i=36e5,o="millisecond",a="second",l="minute",s="hour",c="day",f="week",d="month",h="quarter",p="year",m="date",y="Invalid Date",w=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,g=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,v={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(F){var D=["th","st","nd","rd"],z=F%100;return"["+F+(D[(z-20)%10]||D[z]||D[0])+"]"}},b=function(F,D,z){var R=String(F);return!R||R.length>=D?F:""+Array(D+1-R.length).join(z)+F},C={s:b,z:function(F){var D=-F.utcOffset(),z=Math.abs(D),R=Math.floor(z/60),O=z%60;return(D<=0?"+":"-")+b(R,2,"0")+":"+b(O,2,"0")},m:function F(D,z){if(D.date()<z.date())return-F(z,D);var R=12*(z.year()-D.year())+(z.month()-D.month()),O=D.clone().add(R,d),A=z-O<0,N=D.clone().add(R+(A?-1:1),d);return+(-(R+(z-O)/(A?O-N:N-O))||0)},a:function(F){return F<0?Math.ceil(F)||0:Math.floor(F)},p:function(F){return{M:d,y:p,w:f,d:c,D:m,h:s,m:l,s:a,ms:o,Q:h}[F]||String(F||"").toLowerCase().replace(/s$/,"")},u:function(F){return F===void 0}},S="en",P={};P[S]=v;var k="$isDayjsObject",_=function(F){return F instanceof M||!(!F||!F[k])},T=function F(D,z,R){var O;if(!D)return S;if(typeof D=="string"){var A=D.toLowerCase();P[A]&&(O=A),z&&(P[A]=z,O=A);var N=D.split("-");if(!O&&N.length>1)return F(N[0])}else{var B=D.name;P[B]=D,O=B}return!R&&O&&(S=O),O||!R&&S},$=function(F,D){if(_(F))return F.clone();var z=typeof D=="object"?D:{};return z.date=F,z.args=arguments,new M(z)},I=C;I.l=T,I.i=_,I.w=function(F,D){return $(F,{locale:D.$L,utc:D.$u,x:D.$x,$offset:D.$offset})};var M=function(){function F(z){this.$L=T(z.locale,null,!0),this.parse(z),this.$x=this.$x||z.x||{},this[k]=!0}var D=F.prototype;return D.parse=function(z){this.$d=function(R){var O=R.date,A=R.utc;if(O===null)return new Date(NaN);if(I.u(O))return new Date;if(O instanceof Date)return new Date(O);if(typeof O=="string"&&!/Z$/i.test(O)){var N=O.match(w);if(N){var B=N[2]-1||0,L=(N[7]||"0").substring(0,3);return A?new Date(Date.UTC(N[1],B,N[3]||1,N[4]||0,N[5]||0,N[6]||0,L)):new Date(N[1],B,N[3]||1,N[4]||0,N[5]||0,N[6]||0,L)}}return new Date(O)}(z),this.init()},D.init=function(){var z=this.$d;this.$y=z.getFullYear(),this.$M=z.getMonth(),this.$D=z.getDate(),this.$W=z.getDay(),this.$H=z.getHours(),this.$m=z.getMinutes(),this.$s=z.getSeconds(),this.$ms=z.getMilliseconds()},D.$utils=function(){return I},D.isValid=function(){return this.$d.toString()!==y},D.isSame=function(z,R){var O=$(z);return this.startOf(R)<=O&&O<=this.endOf(R)},D.isAfter=function(z,R){return $(z)<this.startOf(R)},D.isBefore=function(z,R){return this.endOf(R)<$(z)},D.$g=function(z,R,O){return I.u(z)?this[R]:this.set(O,z)},D.unix=function(){return Math.floor(this.valueOf()/1e3)},D.valueOf=function(){return this.$d.getTime()},D.startOf=function(z,R){var O=this,A=!!I.u(R)||R,N=I.p(z),B=function(de,ae){var Fe=I.w(O.$u?Date.UTC(O.$y,ae,de):new Date(O.$y,ae,de),O);return A?Fe:Fe.endOf(c)},L=function(de,ae){return I.w(O.toDate()[de].apply(O.toDate("s"),(A?[0,0,0,0]:[23,59,59,999]).slice(ae)),O)},V=this.$W,H=this.$M,G=this.$D,W="set"+(this.$u?"UTC":"");switch(N){case p:return A?B(1,0):B(31,11);case d:return A?B(1,H):B(0,H+1);case f:var Q=this.$locale().weekStart||0,te=(V<Q?V+7:V)-Q;return B(A?G-te:G+(6-te),H);case c:case m:return L(W+"Hours",0);case s:return L(W+"Minutes",1);case l:return L(W+"Seconds",2);case a:return L(W+"Milliseconds",3);default:return this.clone()}},D.endOf=function(z){return this.startOf(z,!1)},D.$set=function(z,R){var O,A=I.p(z),N="set"+(this.$u?"UTC":""),B=(O={},O[c]=N+"Date",O[m]=N+"Date",O[d]=N+"Month",O[p]=N+"FullYear",O[s]=N+"Hours",O[l]=N+"Minutes",O[a]=N+"Seconds",O[o]=N+"Milliseconds",O)[A],L=A===c?this.$D+(R-this.$W):R;if(A===d||A===p){var V=this.clone().set(m,1);V.$d[B](L),V.init(),this.$d=V.set(m,Math.min(this.$D,V.daysInMonth())).$d}else B&&this.$d[B](L);return this.init(),this},D.set=function(z,R){return this.clone().$set(z,R)},D.get=function(z){return this[I.p(z)]()},D.add=function(z,R){var O,A=this;z=Number(z);var N=I.p(R),B=function(H){var G=$(A);return I.w(G.date(G.date()+Math.round(H*z)),A)};if(N===d)return this.set(d,this.$M+z);if(N===p)return this.set(p,this.$y+z);if(N===c)return B(1);if(N===f)return B(7);var L=(O={},O[l]=r,O[s]=i,O[a]=n,O)[N]||1,V=this.$d.getTime()+z*L;return I.w(V,this)},D.subtract=function(z,R){return this.add(-1*z,R)},D.format=function(z){var R=this,O=this.$locale();if(!this.isValid())return O.invalidDate||y;var A=z||"YYYY-MM-DDTHH:mm:ssZ",N=I.z(this),B=this.$H,L=this.$m,V=this.$M,H=O.weekdays,G=O.months,W=O.meridiem,Q=function(ae,Fe,qe,Ye){return ae&&(ae[Fe]||ae(R,A))||qe[Fe].slice(0,Ye)},te=function(ae){return I.s(B%12||12,ae,"0")},de=W||function(ae,Fe,qe){var Ye=ae<12?"AM":"PM";return qe?Ye.toLowerCase():Ye};return A.replace(g,function(ae,Fe){return Fe||function(qe){switch(qe){case"YY":return String(R.$y).slice(-2);case"YYYY":return I.s(R.$y,4,"0");case"M":return V+1;case"MM":return I.s(V+1,2,"0");case"MMM":return Q(O.monthsShort,V,G,3);case"MMMM":return Q(G,V);case"D":return R.$D;case"DD":return I.s(R.$D,2,"0");case"d":return String(R.$W);case"dd":return Q(O.weekdaysMin,R.$W,H,2);case"ddd":return Q(O.weekdaysShort,R.$W,H,3);case"dddd":return H[R.$W];case"H":return String(B);case"HH":return I.s(B,2,"0");case"h":return te(1);case"hh":return te(2);case"a":return de(B,L,!0);case"A":return de(B,L,!1);case"m":return String(L);case"mm":return I.s(L,2,"0");case"s":return String(R.$s);case"ss":return I.s(R.$s,2,"0");case"SSS":return I.s(R.$ms,3,"0");case"Z":return N}return null}(ae)||N.replace(":","")})},D.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},D.diff=function(z,R,O){var A,N=this,B=I.p(R),L=$(z),V=(L.utcOffset()-this.utcOffset())*r,H=this-L,G=function(){return I.m(N,L)};switch(B){case p:A=G()/12;break;case d:A=G();break;case h:A=G()/3;break;case f:A=(H-V)/6048e5;break;case c:A=(H-V)/864e5;break;case s:A=H/i;break;case l:A=H/r;break;case a:A=H/n;break;default:A=H}return O?A:I.a(A)},D.daysInMonth=function(){return this.endOf(d).$D},D.$locale=function(){return P[this.$L]},D.locale=function(z,R){if(!z)return this.$L;var O=this.clone(),A=T(z,R,!0);return A&&(O.$L=A),O},D.clone=function(){return I.w(this.$d,this)},D.toDate=function(){return new Date(this.valueOf())},D.toJSON=function(){return this.isValid()?this.toISOString():null},D.toISOString=function(){return this.$d.toISOString()},D.toString=function(){return this.$d.toUTCString()},F}(),j=M.prototype;return $.prototype=j,[["$ms",o],["$s",a],["$m",l],["$H",s],["$W",c],["$M",d],["$y",p],["$D",m]].forEach(function(F){j[F[1]]=function(D){return this.$g(D,F[0],F[1])}}),$.extend=function(F,D){return F.$i||(F(D,M,$),F.$i=!0),$},$.locale=T,$.isDayjs=_,$.unix=function(F){return $(1e3*F)},$.en=P[S],$.Ls=P,$.p={},$})})(kk);var U7=kk.exports;const Xx=Ro(U7),H7=E.div`
  /* max-width: 800px; */
  margin: 20px auto;

  font-family: var(--second-font);
`;E.h3`
  font-size: 18px;
  color: #4a3632; // Темний колір з твого футера
  margin-bottom: 20px;
  text-transform: uppercase;
  letter-spacing: 1px;
`;const G7=E.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  background: var(--second-background);
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 40px;
`,q7=E.input`
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
`,Y7=E.textarea`
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
`,X7=E.button`
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
`,K7=E.div`
  margin-top: 30px;
`,Q7=E.div`
  border-bottom: 1px solid #eee;
  padding: 20px 0;
`,Z7=E.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
`,J7=E.span`
  font-weight: bold;
  color: #333;
`,e9=E.span`
  font-size: 12px;
  color: #999;
`,t9=E.p`
  font-size: 15px;
  color: #555;
  margin: 5px 0;
`,n9=E.div`
  margin-top: 15px;
  padding: 15px;
  background: var(--second-background);

  border-left: 3px solid var(--brown-color);
  font-size: 14px;
    border-radius: 0 10px 10px 0;

`,r9=E.div`
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
`,Kx=({productId:e,questions:t})=>{const[n,r]=x.useState(""),[i,o]=x.useState(""),a=async l=>{l.preventDefault(),(await fetch("https://backenddidiv-production.up.railway.app/api/questions",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({data:{question:n,userName:i,product:e}})})).ok&&(X.success("Запитання надіслано! Воно з’явиться після модерації."),r(""),o(""))};return u.jsxs(H7,{children:[u.jsx(Un,{autoClose:1500}),u.jsxs(G7,{onSubmit:a,children:[u.jsx(q7,{placeholder:"Ваше ім'я",value:i,onChange:l=>o(l.target.value),required:!0}),u.jsx(Y7,{placeholder:"Запитайте нас про цей товар...",value:n,onChange:l=>r(l.target.value),required:!0}),u.jsx(X7,{children:"Надіслати запитання"})]}),u.jsx(K7,{children:t&&t.length>0?t.map(l=>l.answer?u.jsxs(Q7,{children:[u.jsxs(Z7,{children:[u.jsx(J7,{children:l.userName||"Гість"}),u.jsx(e9,{children:new Date(l.createdAt).toLocaleDateString()})]}),u.jsx(t9,{children:l.question}),u.jsxs(n9,{children:[u.jsx(r9,{children:"Адміністратор"}),u.jsx("p",{children:l.answer})]})]},l.id):null):u.jsx("p",{style:{textAlign:"center",color:"#999"},children:"Запитань поки немає. Будьте першим!"})})]})},i9=()=>{var O,A,N,B;const{identifier:e}=hw(),[t,n]=x.useState([]),[r,i]=x.useState(1),[o,a]=x.useState("description"),[l,s]=x.useState(null),[c,f]=x.useState(!1),[d,h]=x.useState(0),[p,m]=x.useState(!0),y=!isNaN(e),w=t.find(L=>y?String(L.id)===String(e):L.slug===e),g=w?Xx().diff(Xx(w.createdAt),"day")<7:!1,b=(L=>{const[V,H]=x.useState(!1);return x.useEffect(()=>{const G=window.matchMedia(L),W=()=>H(G.matches);return W(),G.addEventListener("change",W),()=>G.removeEventListener("change",W)},[L]),V})("(min-width: 768px)"),C=Ge(L=>L.cart.items),S=w?C.find(L=>L.id===w.id):null,P=(S==null?void 0:S.quantity)||0;x.useEffect(()=>{(async()=>{try{m(!0);const V=y?`filters[id][$eq]=${e}`:`filters[slug][$eq]=${e}`,G=await(await fetch(`https://backenddidiv-production.up.railway.app/api/products?${V}&populate=*`)).json();n(G.data)}catch(V){console.error("Error fetching products:",V)}finally{m(!1)}})()},[e,y]);const k=(w==null?void 0:w.available)??!0,_=(w==null?void 0:w.stock)===0;x.useEffect(()=>{var L,V;w&&w.images&&s((V=(L=w.images)==null?void 0:L[0])==null?void 0:V.url)},[w]);const T=((w==null?void 0:w.images)??[]).map(L=>({src:L.url})),$=()=>{const L=w.images.findIndex(V=>V.url===l);h(L>=0?L:0),f(!0)},I=Lt(),j=Ge(L=>L.favorites.items).some(L=>L.id===(w==null?void 0:w.id)),F=async()=>{if(!_){if(P>=w.stock){X.warning("Товар вже в кошику (досягнуто максимум)");return}if(P+r>w.stock){X.warning(`Доступно лише ${w.stock} шт.`);return}await Ho(w,r,I,X)}},D=(L,V)=>{V.stopPropagation(),Ti(L,j,I,X)},z=(w==null?void 0:w.new_price)&&(w==null?void 0:w.new_price)<w.price,R=z?Math.round((w.price-w.new_price)/w.price*100):0;return p?u.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"100vw",height:"100vh"},children:u.jsx(ji,{height:100,width:100,radius:5,color:"var(--orange-color)",ariaLabel:"ball-triangle-loading",wrapperStyle:{},wrapperClass:"",visible:!0})}):w?u.jsxs(_x,{children:[" ",u.jsx(Un,{autoClose:1500}),u.jsxs(Uz,{children:[u.jsx(ge,{to:"/",children:"Головна"})," / ",u.jsx(ge,{to:"/catalog",children:"Каталог"})," /"," ",u.jsx(ge,{to:`/catalog/${(O=w.category)==null?void 0:O.title}`,children:(A=w.category)==null?void 0:A.title})," /"," ",w.name]}),u.jsxs(Hz,{children:[u.jsxs(Gz,{children:[u.jsxs("div",{style:{position:"relative"},children:[u.jsx(Yz,{src:l||ur,alt:w.name,onClick:_?void 0:$,style:{filter:_?"grayscale(100%)":"none",opacity:_?.55:1,cursor:_?"default":"pointer"}}),_&&u.jsx(qz,{children:"ПРОДАНО"})]}),u.jsx(Xz,{children:(w.images??[]).map(L=>{const V=L.url;return u.jsx(Kz,{src:V,onClick:()=>!_&&s(V),style:{cursor:_?"default":"pointer",opacity:l===V?1:.4,filter:_?"grayscale(100%)":"none"}},L.id)})})]}),u.jsx(k7,{open:c,close:()=>f(!1),index:d,slides:T,controller:{closeOnBackdropClick:!0},on:{view:({index:L})=>{var V,H;h(L),(H=(V=w==null?void 0:w.images)==null?void 0:V[L])!=null&&H.url&&s(w.images[L].url)}},plugins:[W7],zoom:{maxZoomPixelRatio:3,zoomInMultiplier:2,doubleTapDelay:300,doubleClickDelay:300,doubleClickEnabled:!0,pinchZoomDistanceFactor:100,scrollToZoom:!0}}),u.jsxs(Qz,{children:[u.jsx(Zz,{children:w.name}),u.jsxs(Jz,{children:["Артикул: ",w.sku??""]}),u.jsx(eN,{children:g&&u.jsx(nN,{children:"● Новий товар"})}),!k&&u.jsx(tN,{children:"Бронь"}),u.jsxs(rN,{children:[u.jsx(iN,{children:z?u.jsxs(u.Fragment,{children:[u.jsxs(kx,{$discount:!0,children:[w.new_price.toLocaleString()," грн"]}),u.jsxs(oN,{children:[w.price.toLocaleString()," грн"]}),u.jsxs(aN,{children:["-",R,"%"]})]}):u.jsxs(kx,{children:[(N=w.price)==null?void 0:N.toLocaleString()," грн"]})}),u.jsxs(sN,{children:[u.jsxs(lN,{children:[u.jsx("button",{onClick:()=>i(Math.max(1,r-1)),disabled:_,children:"-"}),u.jsx("span",{children:r}),u.jsxs(hN,{$active:r>=w.stock,children:[u.jsx("button",{onClick:()=>i(Math.min(w.stock,r+1)),disabled:_||r>=w.stock,children:"+"}),u.jsxs(Y_,{children:["Максимум: ",w.stock]})]})]}),u.jsxs(cN,{onClick:F,disabled:!k||_,children:[" ",u.jsx(Uo,{size:25}),u.jsx("span",{children:"В КОШИК"})]}),u.jsxs(fN,{$active:j,onClick:L=>{_||D(w,L)},disabled:_,children:[u.jsxs(pN,{$active:j,children:[" ",u.jsx("use",{href:`${xn}#icon-heart`})]}),u.jsx("span",{children:"В ОБРАНЕ"})]})]})]})]})]}),!b&&u.jsxs(Tx,{children:[u.jsxs(jx,{children:[u.jsx(ga,{active:o==="description",onClick:()=>a("description"),children:"Опис"}),u.jsx(ga,{active:o==="attributes",onClick:()=>a("attributes"),children:"Характеристики"}),u.jsx(ga,{active:o==="FAQ",onClick:()=>a("FAQ"),children:"Питання та відповіді"})]}),u.jsxs($x,{children:[o==="description"&&u.jsx(Ix,{children:w.description}),o==="attributes"&&u.jsx(Px,{children:(B=w.attributes)!=null&&B.length?w.attributes.map(L=>u.jsxs(Ox,{children:[u.jsx("span",{children:L.label}),u.jsx("b",{children:L.value})]},L.id)):u.jsx("p",{children:"Характеристики відсутні"})}),o==="FAQ"&&u.jsx(Kx,{productId:w.documentId,questions:w.questions})]})]}),b&&u.jsxs(dN,{children:[u.jsxs(Tx,{children:[u.jsxs(jx,{children:[u.jsx(ga,{active:o==="description",onClick:()=>a("description"),children:"Опис"}),u.jsx(ga,{active:o==="FAQ",onClick:()=>a("FAQ"),children:"Питання та відповіді"})]}),u.jsxs($x,{children:[o==="description"&&u.jsx(Ix,{children:w.description}),o==="FAQ"&&u.jsx(Kx,{productId:w.documentId,questions:w.questions})]})]}),u.jsxs(Px,{children:[u.jsx(uN,{children:" Характеристики"}),(()=>{const L=[...w.attributes||[],...w.features||[]];return L.length?L.map((V,H)=>u.jsxs(Ox,{children:[u.jsx("span",{children:V.label}),u.jsx("b",{children:V.value})]},`${V.id}-${H}`)):u.jsx("p",{children:"Характеристики відсутні"})})()]})]})]}):u.jsx(_x,{children:"Товар не знайдено"})};var q0="persist:",Pk="persist/FLUSH",Y0="persist/REHYDRATE",Ok="persist/PAUSE",Tk="persist/PERSIST",jk="persist/PURGE",$k="persist/REGISTER",o9=-1;function cc(e){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?cc=function(n){return typeof n}:cc=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},cc(e)}function Qx(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function a9(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Qx(n,!0).forEach(function(r){s9(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Qx(n).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function s9(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l9(e,t,n,r){r.debug;var i=a9({},n);return e&&cc(e)==="object"&&Object.keys(e).forEach(function(o){o!=="_persist"&&t[o]===n[o]&&(i[o]=e[o])}),i}function c9(e){var t=e.blacklist||null,n=e.whitelist||null,r=e.transforms||[],i=e.throttle||0,o="".concat(e.keyPrefix!==void 0?e.keyPrefix:q0).concat(e.key),a=e.storage,l;e.serialize===!1?l=function(S){return S}:typeof e.serialize=="function"?l=e.serialize:l=u9;var s=e.writeFailHandler||null,c={},f={},d=[],h=null,p=null,m=function(S){Object.keys(S).forEach(function(P){g(P)&&c[P]!==S[P]&&d.indexOf(P)===-1&&d.push(P)}),Object.keys(c).forEach(function(P){S[P]===void 0&&g(P)&&d.indexOf(P)===-1&&c[P]!==void 0&&d.push(P)}),h===null&&(h=setInterval(y,i)),c=S};function y(){if(d.length===0){h&&clearInterval(h),h=null;return}var C=d.shift(),S=r.reduce(function(P,k){return k.in(P,C,c)},c[C]);if(S!==void 0)try{f[C]=l(S)}catch(P){console.error("redux-persist/createPersistoid: error serializing state",P)}else delete f[C];d.length===0&&w()}function w(){Object.keys(f).forEach(function(C){c[C]===void 0&&delete f[C]}),p=a.setItem(o,l(f)).catch(v)}function g(C){return!(n&&n.indexOf(C)===-1&&C!=="_persist"||t&&t.indexOf(C)!==-1)}function v(C){s&&s(C)}var b=function(){for(;d.length!==0;)y();return p||Promise.resolve()};return{update:m,flush:b}}function u9(e){return JSON.stringify(e)}function d9(e){var t=e.transforms||[],n="".concat(e.keyPrefix!==void 0?e.keyPrefix:q0).concat(e.key),r=e.storage;e.debug;var i;return e.deserialize===!1?i=function(a){return a}:typeof e.deserialize=="function"?i=e.deserialize:i=f9,r.getItem(n).then(function(o){if(o)try{var a={},l=i(o);return Object.keys(l).forEach(function(s){a[s]=t.reduceRight(function(c,f){return f.out(c,s,l)},i(l[s]))}),a}catch(s){throw s}else return})}function f9(e){return JSON.parse(e)}function p9(e){var t=e.storage,n="".concat(e.keyPrefix!==void 0?e.keyPrefix:q0).concat(e.key);return t.removeItem(n,h9)}function h9(e){}function Zx(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Hn(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Zx(n,!0).forEach(function(r){m9(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Zx(n).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function m9(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function g9(e,t){if(e==null)return{};var n=v9(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function v9(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}var y9=5e3;function Ik(e,t){var n=e.version!==void 0?e.version:o9;e.debug;var r=e.stateReconciler===void 0?l9:e.stateReconciler,i=e.getStoredState||d9,o=e.timeout!==void 0?e.timeout:y9,a=null,l=!1,s=!0,c=function(d){return d._persist.rehydrated&&a&&!s&&a.update(d),d};return function(f,d){var h=f||{},p=h._persist,m=g9(h,["_persist"]),y=m;if(d.type===Tk){var w=!1,g=function(_,T){w||(d.rehydrate(e.key,_,T),w=!0)};if(o&&setTimeout(function(){!w&&g(void 0,new Error('redux-persist: persist timed out for persist key "'.concat(e.key,'"')))},o),s=!1,a||(a=c9(e)),p)return Hn({},t(y,d),{_persist:p});if(typeof d.rehydrate!="function"||typeof d.register!="function")throw new Error("redux-persist: either rehydrate or register is not a function on the PERSIST action. This can happen if the action is being replayed. This is an unexplored use case, please open an issue and we will figure out a resolution.");return d.register(e.key),i(e).then(function(k){var _=e.migrate||function(T,$){return Promise.resolve(T)};_(k,n).then(function(T){g(T)},function(T){g(void 0,T)})},function(k){g(void 0,k)}),Hn({},t(y,d),{_persist:{version:n,rehydrated:!1}})}else{if(d.type===jk)return l=!0,d.result(p9(e)),Hn({},t(y,d),{_persist:p});if(d.type===Pk)return d.result(a&&a.flush()),Hn({},t(y,d),{_persist:p});if(d.type===Ok)s=!0;else if(d.type===Y0){if(l)return Hn({},y,{_persist:Hn({},p,{rehydrated:!0})});if(d.key===e.key){var v=t(y,d),b=d.payload,C=r!==!1&&b!==void 0?r(b,f,v,e):v,S=Hn({},C,{_persist:Hn({},p,{rehydrated:!0})});return c(S)}}}if(!p)return t(f,d);var P=t(y,d);return P===y?f:c(Hn({},P,{_persist:p}))}}function Jx(e){return w9(e)||b9(e)||x9()}function x9(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function b9(e){if(Symbol.iterator in Object(e)||Object.prototype.toString.call(e)==="[object Arguments]")return Array.from(e)}function w9(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}function eb(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function $m(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?eb(n,!0).forEach(function(r){S9(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):eb(n).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function S9(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Mk={registry:[],bootstrapped:!1},C9=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:Mk,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case $k:return $m({},t,{registry:[].concat(Jx(t.registry),[n.key])});case Y0:var r=t.registry.indexOf(n.key),i=Jx(t.registry);return i.splice(r,1),$m({},t,{registry:i,bootstrapped:i.length===0});default:return t}};function E9(e,t,n){var r=n||!1,i=e0(C9,Mk,t&&t.enhancer?t.enhancer:void 0),o=function(c){i.dispatch({type:$k,key:c})},a=function(c,f,d){var h={type:Y0,payload:f,err:d,key:c};e.dispatch(h),i.dispatch(h),r&&l.getState().bootstrapped&&(r(),r=!1)},l=$m({},i,{purge:function(){var c=[];return e.dispatch({type:jk,result:function(d){c.push(d)}}),Promise.all(c)},flush:function(){var c=[];return e.dispatch({type:Pk,result:function(d){c.push(d)}}),Promise.all(c)},pause:function(){e.dispatch({type:Ok})},persist:function(){e.dispatch({type:Tk,register:o,rehydrate:a})}});return t&&t.manualPersist||l.persist(),l}var X0={},K0={};K0.__esModule=!0;K0.default=P9;function uc(e){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?uc=function(n){return typeof n}:uc=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},uc(e)}function Tp(){}var _9={getItem:Tp,setItem:Tp,removeItem:Tp};function k9(e){if((typeof self>"u"?"undefined":uc(self))!=="object"||!(e in self))return!1;try{var t=self[e],n="redux-persist ".concat(e," test");t.setItem(n,"test"),t.getItem(n),t.removeItem(n)}catch{return!1}return!0}function P9(e){var t="".concat(e,"Storage");return k9(t)?self[t]:_9}X0.__esModule=!0;X0.default=j9;var O9=T9(K0);function T9(e){return e&&e.__esModule?e:{default:e}}function j9(e){var t=(0,O9.default)(e);return{getItem:function(r){return new Promise(function(i,o){i(t.getItem(r))})},setItem:function(r,i){return new Promise(function(o,a){o(t.setItem(r,i))})},removeItem:function(r){return new Promise(function(i,o){i(t.removeItem(r))})}}}var Q0=void 0,$9=I9(X0);function I9(e){return e&&e.__esModule?e:{default:e}}var M9=(0,$9.default)("local");Q0=M9;const A9={key:"cart",storage:Q0},D9={key:"favorites",storage:Q0},L9=Ik(A9,XI),R9=Ik(D9,HI),Ak=II({reducer:{cart:L9,favorites:R9},middleware:e=>e({serializableCheck:!1})}),Nd=E9(Ak),F9=E.div`
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

  
`,z9=E.nav`
  font-family: var(--main-font);
  font-size: 14px;
  color: #8c8c8c;
  margin-bottom: 15px;
`,N9=E.h1`
  font-size:24px;
 
  font-weight: 800;
  margin-bottom: 20px;
  @media screen and (min-width: 768px) {
  font-size:30px;
  }
  
`,B9=E.div`
  display: flex;
  flex-direction: column;
  gap: 20px; 
  width: 100%;
  
  @media screen and (min-width:  895px) {
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between; 
  }
`,V9=E.div`
  flex: 1; 
  width: 100%;
  border: 1px solid #eee;
  border-radius: 12px;
`,W9=E.div`
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
  
`,Dk=E.div`
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
 `,U9=E.img`
  width: 100%;
  height: auto;
  border-radius: 4px;
`,H9=E.div`
  h3 {
    font-size: 16px;
    font-weight: 300;
    margin: 0;
    line-height: 1.4;
  }
`,G9=E.div`

  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  gap: 30px;
`,q9=E.div`

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
`;const Bd=E.div`
  text-align: center;
  width: 100px;
 
`,Vd=E.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 2px;
`,Wd=E.span`
  font-size: 18px;
  font-weight: 600;
  color: ${({$discount:e})=>"#111"};
`,Ud=E.span`
  font-size: 13px;
  color: #999;
  text-decoration: line-through;
`,Hd=E.span`
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
`,Y9=E.button`
  background: 'none';
  border: 'none';
  cursor: 'pointer';
  color: '#ccc';
`,X9=E.button`
  background: 'none';
  border: 'none';
  cursor: 'pointer';
  color: '#ccc';


&:disabled {
  cursor: not-allowed;
  opacity: 0.5;
}
`,K9=E.div`

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
`,Q9=E.div`
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
`,Z9=E(ge)`
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
`,J9=E.button`
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
`;const eB=E.div`
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
`,tB=E.div`
 font-family: var(--main-font);
  font-size: 14px;
  color: #8c8c8c;
  margin-bottom: 15px;
`,nB=E.div`
  background-color: #fdfaf7;
`,rB=E.div`
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
`;const iB=E.img`
  width: 250px;
  height: auto;
  margin-bottom: 30px;
`,oB=E.h2`
  font-size: 28px;
  color: #333;
  margin-bottom: 10px;
`,aB=E.p`
  font-size: 18px;
  color: #666;
  margin-bottom: 40px;
`,sB=E.button`
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
`,lB=()=>u.jsx(nB,{children:u.jsxs(eB,{children:[u.jsx(tB,{children:"Головна / Кошик"}),u.jsxs(rB,{children:[u.jsx(iB,{src:"/empty-cart.png",alt:"Порожній кошик"}),u.jsx(oB,{children:"Ваш кошик порожній"}),u.jsx(aB,{children:"Ви ще не додали жодного товару в кошик"}),u.jsx(sB,{onClick:()=>window.location.href="/Didiv/catalog",children:"Перейти до покупок"})]})]})}),cB=E.div`
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
`,uB=({item:e,cartItem:t,user:n,token:r,disabled:i,isSoldOut:o})=>{const a=Lt(),l=async()=>{if(i)return;const c=e.quantity+1;if(!n){a(i1({id:e.id,stock:e.stock}));return}try{if(!(await fetch(`https://backenddidiv-production.up.railway.app/api/cart-items/${t.documentId}`,{method:"PUT",headers:{"Content-Type":"application/json",Authorization:`Bearer ${r}`},body:JSON.stringify({data:{quantity:c}})})).ok)throw new Error("Не вдалося оновити кількість");a(i1({id:e.id,stock:e.stock}))}catch(f){console.error("Помилка оновлення кількості:",f)}},s=async()=>{if(i)return;const c=e.quantity-1;if(!n){a(o1(e.id));return}try{if(!(await fetch(`https://backenddidiv-production.up.railway.app/api/cart-items/${t.documentId}`,{method:"PUT",headers:{"Content-Type":"application/json",Authorization:`Bearer ${r}`},body:JSON.stringify({data:{quantity:c}})})).ok)throw new Error("Не вдалося оновити кількість");a(o1(e.id))}catch(f){console.error("Помилка оновлення кількості:",f)}};return u.jsxs(cB,{children:[u.jsx("button",{onClick:s,disabled:o||e.quantity<=1,children:"-"}),u.jsx("span",{children:e.quantity}),u.jsx("button",{onClick:l,disabled:o||e.quantity>=e.stock,children:"+"})]})},dB=async(e,t,n)=>{try{const r=await fetch(`https://backenddidiv-production.up.railway.app/api/cart-items?filters[user][id][$eq]=${e}`,{headers:{Authorization:`Bearer ${n}`}});if(!r.ok)throw new Error("Не вдалося отримати товари кошика");const i=await r.json();await Promise.all(i.data.map(async o=>{if(!(await fetch(`https://backenddidiv-production.up.railway.app/api/cart-items/${o.documentId}`,{method:"DELETE",headers:{Authorization:`Bearer ${n}`}})).ok)throw new Error("Не вдалося видалити товар з кошика")})),t(fr())}catch(r){throw console.error("clearCartFromBackend error:",r),r}},fB=E.div`
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
`,pB=E.div`
  font-family: var(--main-font);
  font-size: 14px;
  color: #8c8c8c;
  margin-bottom: 15px;

  a {
    text-decoration: none;
    color: inherit;
  }
`,hB=E.h1`
color: var(--black-color);
 font-family: var(--main-font);
  font-size: 30px;
  font-weight: 800;
  margin-bottom: 32px;
`,mB=E.div`

   display: flex;
  flex-direction: column;
  gap: 20px; 
  width: 100%;
  
  @media screen and (min-width: 895px) {
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between; 
  }
`,gB=E.div`
   flex: 1; 
  width: 100%;
  border: 1px solid #eee;
  border-radius: 12px;
`,vB=E.div`
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
`,Lk=E.div`
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
`;const yB=E.div`
  position: relative;
`,xB=E.img`
   width: 100%;
  height: auto;
  border-radius: 4px;
`,bB=E.h3`
 font-size: 20px;
    font-weight: 300;
    margin: 0;
    line-height: 1.4;
    @media screen and (max-width: 768px) {
    border-bottom: 1px solid #eee;
    padding-bottom:10px;
  }
    
`,wB=E.div`
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
`;const SB=E.div`
  display: flex;
  gap: 16px;
`,tb=E.button`
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
`,CB=E.div`
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
`,EB=E.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  font-size: 15px;
  color: #555;
`,_B=E.button`
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
`;const kB=async(e,t,n,r)=>{try{const i=await fetch(`https://backenddidiv-production.up.railway.app/api/cart-items?filters[user][id][$eq]=${t}&filters[product][id][$eq]=${e.id}`,{headers:{Authorization:`Bearer ${r}`}});if(!i.ok)throw new Error("Не вдалося знайти товар у кошику");const a=(await i.json()).data[0];if(!a)throw new Error("Товар у кошику не знайдено");if(!(await fetch(`https://backenddidiv-production.up.railway.app/api/cart-items/${a.documentId}`,{method:"DELETE",headers:{Authorization:`Bearer ${r}`}})).ok)throw new Error("Не вдалося видалити товар");n(MC(e))}catch(i){throw console.error("deleteCartItemFromBackend error:",i),i}},PB=()=>{const e=Lt(),t=et(),n=localStorage.getItem("token"),r=JSON.parse(localStorage.getItem("user")),[i,o]=x.useState([]),a=Ge(S=>S.cart.items),[l,s]=x.useState([]),[c,f]=x.useState([]),[d,h]=x.useState(!0),p=a.filter(S=>S.available!==!1&&S.stock>0).reduce((S,P)=>S+P.quantity,0),m=a.filter(S=>S.available!==!1&&S.stock>0).reduce((S,P)=>S+(P.new_price??P.price)*(P.quantity||1),0),y=Ge(S=>S.favorites.items),w=l.length===0,g=async()=>{localStorage.removeItem("token"),localStorage.removeItem("user"),e(Ls()),e(fr()),s([]),f([]),await Nd.purge(),t("/",{replace:!0})};x.useEffect(()=>{(async()=>{if(!n||!r){s(a),h(!1);return}try{const P=await fetch(`https://backenddidiv-production.up.railway.app/api/cart-items?filters[user][documentId][$eq]=${r.documentId}&populate[product][populate]=*`,{headers:{Authorization:`Bearer ${n}`}});if(P.status===401){g();return}if(!P.ok)throw new Error("Не вдалося отримати кошик");const k=await P.json();f(k.data);const _=k.data.map(T=>T.product?{...T.product,quantity:T.quantity}:null).filter(Boolean);s(_),e(IC(_))}catch(P){console.error(P),X.error("Не вдалося завантажити кошик")}finally{h(!1)}})()},[]),x.useEffect(()=>{s(a)},[a]);const v=(S,P)=>{P.stopPropagation();const k=y.some(_=>_.id===(S==null?void 0:S.id));Ti(S,k,e,X)},b=async S=>{o(P=>[...P,S.id]);try{if(!r){setTimeout(()=>{e(MC(S)),o(P=>P.filter(k=>k!==S.id))},300);return}await kB(S,r.id,e,n),setTimeout(()=>{o(P=>P.filter(k=>k!==S.id))},300)}catch{o(k=>k.filter(_=>_!==S.id)),X.error("Не вдалося видалити товар з кошика")}},C=async()=>{if(!r){e(fr()),s([]);return}try{await dB(r.id,e,n),s([])}catch{X.error("Не вдалося очистити кошик")}};return d?u.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"100vw",height:"100vh"},children:u.jsx(ji,{height:100,width:100,radius:5,color:"var(--orange-color)",ariaLabel:"ball-triangle-loading",wrapperStyle:{},wrapperClass:"",visible:!0})}):u.jsx(u.Fragment,{children:w?u.jsx(lB,{}):u.jsxs(F9,{children:[u.jsx(Un,{autoClose:1500}),u.jsxs(z9,{children:[" ",u.jsx(ge,{to:"/",style:{color:"inherit",textDecoration:"none"},children:"Головна"})," ","/"," ",u.jsx(ge,{to:"/cart",style:{color:"inherit",textDecoration:"none"},children:"Кошик"})]}),u.jsx(N9,{children:"Кошик"}),u.jsxs(B9,{children:[u.jsx(V9,{children:l.map((S,P)=>{var F,D;const k=c.find(z=>{var R;return((R=z.product)==null?void 0:R.documentId)===S.documentId}),_=y.some(z=>z.id===S.id),T=S.new_price&&S.new_price<S.price,$=(S==null?void 0:S.available)??!0,I=(S==null?void 0:S.stock)===0,M=T?S.new_price:S.price,j=T?Math.round((S.price-S.new_price)/S.price*100):0;return u.jsxs(W9,{className:`
    ${i.includes(S.id)?"removing":""}
    ${$?"":"unavailable"}
    ${I?"sold-out":""}
  `,children:[u.jsxs(cC,{onClick:()=>t(`/product/${S.slug??S.id}`),children:[!$&&u.jsx(Lk,{children:"Бронь"})," ",I&&u.jsx(Dk,{children:"Продано"}),u.jsx(U9,{src:((D=(F=S.images)==null?void 0:F[0])==null?void 0:D.url)||"/nofoto.png",alt:S.name,style:{filter:I?"grayscale(100%)":"none",opacity:I?.55:1},onError:z=>{z.currentTarget.onerror=null,z.currentTarget.src=ur}})]}),u.jsx(H9,{onClick:()=>t(`/product/${S.slug??S.id}`),children:u.jsx("h3",{children:S.name})}),u.jsxs(G9,{children:[u.jsx(uB,{item:S,cartItem:k,user:r,token:n,disabled:I,isSoldOut:I}),u.jsx(Bd,{children:u.jsxs(Vd,{children:[u.jsxs(Wd,{$discount:T,children:[(M*(S.quantity||1)).toLocaleString()," ","грн"]}),T&&u.jsxs(u.Fragment,{children:[u.jsxs(Ud,{children:[(S.price*(S.quantity||1)).toLocaleString()," ","грн"]}),u.jsxs(Hd,{children:["-",j,"%"]})]})]})})]}),u.jsxs(q9,{children:[u.jsx(X9,{onClick:z=>{I||v(S,z)},disabled:I,style:{background:"none",border:"none",cursor:"pointer",color:"#ccc"},children:u.jsx(Is,{size:22,fill:_?"#ff4d4f":"none",color:_?"#ff4d4f":"#999"})}),u.jsx(Y9,{onClick:()=>b(S),style:{background:"none",border:"none",cursor:"pointer",color:"#000000"},children:u.jsx(eC,{size:22})})]})]},`${S.id}-${P}`)})}),u.jsxs(K9,{children:[u.jsxs(Q9,{children:[u.jsx("span",{children:"Всього в обраному:"}),u.jsxs("strong",{children:[p," шт."]}),u.jsx("span",{children:"На суму:"}),u.jsxs("strong",{children:[m," грн"]})]}),u.jsx(Z9,{to:"/checkout",onClick:S=>{p===0&&(S.preventDefault(),X.warning("У кошику немає доступних товарів"))},children:"Оформити замовлення"}),u.jsx(J9,{onClick:C,children:"Oчистити кошик"})]})]})]})})},OB=E.div`
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
`,TB=E.div`
   
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
 
`;const jB=E.img`
  width: 250px;
  height: auto;
  margin-bottom: 30px;
`;E.h2`
  font-size: 28px;
  color: #333;
  margin-bottom: 10px;
`;const $B=E.p`
  font-size: 18px;
  color: #666;
  margin-bottom: 40px;
`,IB=E.button`
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
`,MB=()=>u.jsxs(u.Fragment,{children:[u.jsxs(OB,{children:[u.jsx(ge,{to:"/",children:"Головна"})," / ",u.jsx(ge,{to:"/favorite",children:"Обране"})," "]}),u.jsxs(TB,{children:[u.jsx(jB,{src:"/sad.png",alt:"Порожній кошик"}),u.jsx($B,{children:"Ви ще не додали жодного товару в обране"}),u.jsx(IB,{onClick:()=>window.location.href="/Didiv/catalog",children:"Перейти до вибору"})]})]}),AB=()=>{const e=Lt(),t=et(),n=localStorage.getItem("token"),r=JSON.parse(localStorage.getItem("user")),i=Ge(v=>v.favorites.items),[o,a]=x.useState([]),[l,s]=x.useState(!0),[c,f]=x.useState([]),d=Ge(v=>v.cart.items),h=async()=>{localStorage.removeItem("token"),localStorage.removeItem("user"),e(Ls()),e(fr()),a([]),await Nd.purge(),t("/",{replace:!0})};x.useEffect(()=>{(async()=>{if(!n||!r){a(i),s(!1);return}try{const b=await fetch(`https://backenddidiv-production.up.railway.app/api/favorites?filters[user][documentId][$eq]=${r.documentId}&populate[product][populate]=*`,{headers:{Authorization:`Bearer ${n}`}});if(b.status===401){h();return}if(!b.ok)throw new Error("Не вдалося отримати обране");const S=(await b.json()).data.map(P=>P.product).filter(Boolean);a(S)}catch(b){console.error(b),X.error("Не вдалося завантажити обране"),a(i)}finally{s(!1)}})()},[]);const p=()=>{const v=o.filter(b=>b.available!==!1&&b.stock!==0).map(b=>{const C=d.find(_=>_.id===b.id),S=(C==null?void 0:C.quantity)??0,k=Number(b.stock??0)-S;return k<=0?null:{...b,quantity:k}}).filter(Boolean);if(v.length===0){X.error("Усі товари вже в максимальній кількості");return}e(YI(v)),X.success("Додано максимально доступну кількість товарів")},m=o.filter(v=>v.available!==!1&&v.stock!==0).length,y=o.filter(v=>v.available!==!1&&v.stock>0).reduce((v,b)=>v+(b.new_price??b.price)*(b.quantity||1),0),w=async(v,b)=>{b.stopPropagation();const C=o.some(P=>P.documentId===v.documentId);f(P=>[...P,v.id]),await Ti(v,C,e,X)&&C?setTimeout(()=>{a(P=>P.filter(k=>k.documentId!==v.documentId)),f(P=>P.filter(k=>k!==v.id))},300):f(P=>P.filter(k=>k!==v.id))},g=o.length===0;return l?u.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"100vw",height:"100vh"},children:u.jsx(ji,{height:100,width:100,radius:5,color:"var(--orange-color)",ariaLabel:"ball-triangle-loading",wrapperStyle:{},wrapperClass:"",visible:!0})}):u.jsx(u.Fragment,{children:g?u.jsx(MB,{}):u.jsxs(fB,{children:[u.jsx(Un,{autoClose:1500}),u.jsxs(pB,{children:[u.jsx(ge,{to:"/",children:"Головна"})," / ",u.jsx(ge,{to:"/favorite",children:"Обране"})," "," "]}),u.jsx(hB,{children:"Обране"}),u.jsxs(mB,{children:[u.jsx(gB,{children:o.map(v=>{var T,$;const b=v.new_price&&v.new_price<v.price,C=b?v.new_price:v.price,S=(v==null?void 0:v.available)??!0,P=(v==null?void 0:v.stock)===0,k=b?Math.round((v.price-v.new_price)/v.price*100):0,_=async I=>{const M=d.find(F=>F.id===I.id);if((M?M.quantity:0)>=I.stock){X.error(`Вибачте, доступно лише ${I.stock} шт.`);return}await Ho(I,1,e,X)};return u.jsxs(vB,{className:c.includes(v.id)?"removing":"",children:[u.jsxs(yB,{onClick:()=>t(`/product/${v.slug??v.id}`),children:[" ",!S&&u.jsx(Lk,{children:"Бронь"}),P&&u.jsx(Dk,{children:"Продано"}),u.jsx(xB,{src:(($=(T=v.images)==null?void 0:T[0])==null?void 0:$.url)||ur,alt:v.name,style:{filter:P?"grayscale(100%)":"none",opacity:P?.55:1},onError:I=>{I.currentTarget.onerror=null}})]}),u.jsx(bB,{onClick:()=>t(`/product/${v.slug??v.id}`),children:v.name}),u.jsxs(wB,{children:[u.jsx(Bd,{children:u.jsxs(Vd,{children:[u.jsxs(Wd,{$discount:b,children:[(C*(v.quantity||1)).toLocaleString()," ","грн"]}),b&&u.jsxs(u.Fragment,{children:[u.jsxs(Ud,{children:[(v.price*(v.quantity||1)).toLocaleString()," ","грн"]}),u.jsxs(Hd,{children:["-",k,"%"]})]})]})}),u.jsxs(SB,{children:[u.jsx(tb,{onClick:()=>{P||_(v)},disabled:!S||P,children:u.jsx(Uo,{size:30})}),u.jsx(tb,{onClick:I=>w(v,I),children:u.jsx(eC,{size:30})})]})]})]},v.id)})}),u.jsxs(CB,{children:[u.jsxs(EB,{children:[u.jsx("span",{children:"Всього в обраному:"}),u.jsxs("strong",{children:[m," шт."]}),u.jsx("span",{children:"На суму:"}),u.jsxs("strong",{children:[y," грн"]})]}),u.jsx("hr",{style:{border:"0",borderTop:"1px solid #eee",margin:"20px 0"}}),u.jsx(_B,{onClick:()=>p(),children:"Додати все до кошика"})]})]})]})})},DB=E.div`
  background-color: #fdfaf7;
  min-height: 80vh;
  padding-bottom: 60px;
`,LB=E.div`
  padding: 15px 20px;
  font-size: 12px;
  color: #8c8c8c;

  @media screen and (min-width: 768px) {
    padding: 20px 40px;
    font-size: 14px;
  }
`,RB=E.article`
  max-width: 800px; // Обмежуємо ширину для зручного читання тексту
  margin: 0 auto;
  padding: 0 20px;

  @media screen and (min-width: 768px) {
    padding: 0 40px;
  }
`,FB=E.h1`
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
`;const zB=({title:e,children:t,breadcrumbPath:n})=>u.jsxs(DB,{children:[u.jsxs(LB,{children:["Головна / ",n]}),u.jsxs(RB,{children:[u.jsx(FB,{children:e}),t]})]}),nb=E.section`
  margin-bottom: 30px;

  @media screen and (min-width: 768px) {
    margin-bottom: 40px;
  }
`,rb=E.h2`
  font-size: 20px;
  color: #4a332a;
  margin-bottom: 15px;
  font-weight: 600;

  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`,ib=E.p`
  font-size: 16px;
  line-height: 1.6;
  color: #555;
  margin-bottom: 15px;
`,ob=E.ul`
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
`,NB=()=>u.jsxs(zB,{title:"Оплата і доставка",breadcrumbPath:"Доставка",children:[u.jsxs(nb,{children:[u.jsx(rb,{children:"Способи доставки"}),u.jsx(ib,{children:"Ми доставляємо замовлення по всій Україні за допомогою:"}),u.jsxs(ob,{children:[u.jsx("li",{children:"Нова Пошта (у відділення або кур1єром)"}),u.jsx("li",{children:"Самовивіз з нашого магазину"}),u.jsx("li",{children:"Укрпошта"})]})]}),u.jsxs(nb,{children:[u.jsx(rb,{children:"Варіанти оплати"}),u.jsx(ib,{children:"Ви можете обрати зручний для вас спосіб оплати:"}),u.jsxs(ob,{children:[u.jsx("li",{children:"Оплата карткою на сайті (Visa/Mastercard)"}),u.jsx("li",{children:"Післяплата (накладений платіж) при отриманні"}),u.jsx("li",{children:"Безготівковий розрахунок"})]})]})]});function _i(e){"@babel/helpers - typeof";return _i=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},_i(e)}function BB(e,t){if(_i(e)!=="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(_i(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Rk(e){var t=BB(e,"string");return _i(t)==="symbol"?t:String(t)}function Oa(e,t,n){return t=Rk(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ab(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function J(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?ab(Object(n),!0).forEach(function(r){Oa(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ab(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function VB(e){if(Array.isArray(e))return e}function WB(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,i,o,a,l=[],s=!0,c=!1;try{if(o=(n=n.call(e)).next,t===0){if(Object(n)!==n)return;s=!1}else for(;!(s=(r=o.call(n)).done)&&(l.push(r.value),l.length!==t);s=!0);}catch(f){c=!0,i=f}finally{try{if(!s&&n.return!=null&&(a=n.return(),Object(a)!==a))return}finally{if(c)throw i}}return l}}function Im(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Fk(e,t){if(e){if(typeof e=="string")return Im(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Im(e,t)}}function UB(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ir(e,t){return VB(e)||WB(e,t)||Fk(e,t)||UB()}function HB(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function vr(e,t){if(e==null)return{};var n=HB(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var GB=["defaultInputValue","defaultMenuIsOpen","defaultValue","inputValue","menuIsOpen","onChange","onInputChange","onMenuClose","onMenuOpen","value"];function qB(e){var t=e.defaultInputValue,n=t===void 0?"":t,r=e.defaultMenuIsOpen,i=r===void 0?!1:r,o=e.defaultValue,a=o===void 0?null:o,l=e.inputValue,s=e.menuIsOpen,c=e.onChange,f=e.onInputChange,d=e.onMenuClose,h=e.onMenuOpen,p=e.value,m=vr(e,GB),y=x.useState(l!==void 0?l:n),w=ir(y,2),g=w[0],v=w[1],b=x.useState(s!==void 0?s:i),C=ir(b,2),S=C[0],P=C[1],k=x.useState(p!==void 0?p:a),_=ir(k,2),T=_[0],$=_[1],I=x.useCallback(function(O,A){typeof c=="function"&&c(O,A),$(O)},[c]),M=x.useCallback(function(O,A){var N;typeof f=="function"&&(N=f(O,A)),v(N!==void 0?N:O)},[f]),j=x.useCallback(function(){typeof h=="function"&&h(),P(!0)},[h]),F=x.useCallback(function(){typeof d=="function"&&d(),P(!1)},[d]),D=l!==void 0?l:g,z=s!==void 0?s:S,R=p!==void 0?p:T;return J(J({},m),{},{inputValue:D,menuIsOpen:z,onChange:I,onInputChange:M,onMenuClose:F,onMenuOpen:j,value:R})}function YB(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function sb(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,Rk(r.key),r)}}function XB(e,t,n){return t&&sb(e.prototype,t),n&&sb(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function Mm(e,t){return Mm=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},Mm(e,t)}function KB(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Mm(e,t)}function fu(e){return fu=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},fu(e)}function QB(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function ZB(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function JB(e,t){if(t&&(_i(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return ZB(e)}function eV(e){var t=QB();return function(){var r=fu(e),i;if(t){var o=fu(this).constructor;i=Reflect.construct(r,arguments,o)}else i=r.apply(this,arguments);return JB(this,i)}}function tV(e){if(Array.isArray(e))return Im(e)}function nV(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function rV(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Z0(e){return tV(e)||nV(e)||Fk(e)||rV()}function iV(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}const oV=Math.min,aV=Math.max,pu=Math.round,Cl=Math.floor,hu=e=>({x:e,y:e});function sV(e){const{x:t,y:n,width:r,height:i}=e;return{width:r,height:i,top:n,left:t,right:t+r,bottom:n+i,x:t,y:n}}function Gd(){return typeof window<"u"}function zk(e){return Bk(e)?(e.nodeName||"").toLowerCase():"#document"}function bn(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function Nk(e){var t;return(t=(Bk(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function Bk(e){return Gd()?e instanceof Node||e instanceof bn(e).Node:!1}function Am(e){return Gd()?e instanceof Element||e instanceof bn(e).Element:!1}function J0(e){return Gd()?e instanceof HTMLElement||e instanceof bn(e).HTMLElement:!1}function lb(e){return!Gd()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof bn(e).ShadowRoot}function Vk(e){const{overflow:t,overflowX:n,overflowY:r,display:i}=ev(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&i!=="inline"&&i!=="contents"}let jp;function lV(){return jp==null&&(jp=typeof CSS<"u"&&CSS.supports&&CSS.supports("-webkit-backdrop-filter","none")),jp}function cV(e){return/^(html|body|#document)$/.test(zk(e))}function ev(e){return bn(e).getComputedStyle(e)}function uV(e){if(zk(e)==="html")return e;const t=e.assignedSlot||e.parentNode||lb(e)&&e.host||Nk(e);return lb(t)?t.host:t}function Wk(e){const t=uV(e);return cV(t)?e.ownerDocument?e.ownerDocument.body:e.body:J0(t)&&Vk(t)?t:Wk(t)}function mu(e,t,n){var r;t===void 0&&(t=[]),n===void 0&&(n=!0);const i=Wk(e),o=i===((r=e.ownerDocument)==null?void 0:r.body),a=bn(i);if(o){const l=Dm(a);return t.concat(a,a.visualViewport||[],Vk(i)?i:[],l&&n?mu(l):[])}else return t.concat(i,mu(i,[],n))}function Dm(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function dV(e){const t=ev(e);let n=parseFloat(t.width)||0,r=parseFloat(t.height)||0;const i=J0(e),o=i?e.offsetWidth:n,a=i?e.offsetHeight:r,l=pu(n)!==o||pu(r)!==a;return l&&(n=o,r=a),{width:n,height:r,$:l}}function tv(e){return Am(e)?e:e.contextElement}function $p(e){const t=tv(e);if(!J0(t))return hu(1);const n=t.getBoundingClientRect(),{width:r,height:i,$:o}=dV(t);let a=(o?pu(n.width):n.width)/r,l=(o?pu(n.height):n.height)/i;return(!a||!Number.isFinite(a))&&(a=1),(!l||!Number.isFinite(l))&&(l=1),{x:a,y:l}}const fV=hu(0);function pV(e){const t=bn(e);return!lV()||!t.visualViewport?fV:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function hV(e,t,n){return t===void 0&&(t=!1),!n||t&&n!==bn(e)?!1:t}function cb(e,t,n,r){t===void 0&&(t=!1),n===void 0&&(n=!1);const i=e.getBoundingClientRect(),o=tv(e);let a=hu(1);t&&(r?Am(r)&&(a=$p(r)):a=$p(e));const l=hV(o,n,r)?pV(o):hu(0);let s=(i.left+l.x)/a.x,c=(i.top+l.y)/a.y,f=i.width/a.x,d=i.height/a.y;if(o){const h=bn(o),p=r&&Am(r)?bn(r):r;let m=h,y=Dm(m);for(;y&&r&&p!==m;){const w=$p(y),g=y.getBoundingClientRect(),v=ev(y),b=g.left+(y.clientLeft+parseFloat(v.paddingLeft))*w.x,C=g.top+(y.clientTop+parseFloat(v.paddingTop))*w.y;s*=w.x,c*=w.y,f*=w.x,d*=w.y,s+=b,c+=C,m=bn(y),y=Dm(m)}}return sV({width:f,height:d,x:s,y:c})}function Uk(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function mV(e,t){let n=null,r;const i=Nk(e);function o(){var l;clearTimeout(r),(l=n)==null||l.disconnect(),n=null}function a(l,s){l===void 0&&(l=!1),s===void 0&&(s=1),o();const c=e.getBoundingClientRect(),{left:f,top:d,width:h,height:p}=c;if(l||t(),!h||!p)return;const m=Cl(d),y=Cl(i.clientWidth-(f+h)),w=Cl(i.clientHeight-(d+p)),g=Cl(f),b={rootMargin:-m+"px "+-y+"px "+-w+"px "+-g+"px",threshold:aV(0,oV(1,s))||1};let C=!0;function S(P){const k=P[0].intersectionRatio;if(k!==s){if(!C)return a();k?a(!1,k):r=setTimeout(()=>{a(!1,1e-7)},1e3)}k===1&&!Uk(c,e.getBoundingClientRect())&&a(),C=!1}try{n=new IntersectionObserver(S,{...b,root:i.ownerDocument})}catch{n=new IntersectionObserver(S,b)}n.observe(e)}return a(!0),o}function gV(e,t,n,r){r===void 0&&(r={});const{ancestorScroll:i=!0,ancestorResize:o=!0,elementResize:a=typeof ResizeObserver=="function",layoutShift:l=typeof IntersectionObserver=="function",animationFrame:s=!1}=r,c=tv(e),f=i||o?[...c?mu(c):[],...t?mu(t):[]]:[];f.forEach(g=>{i&&g.addEventListener("scroll",n,{passive:!0}),o&&g.addEventListener("resize",n)});const d=c&&l?mV(c,n):null;let h=-1,p=null;a&&(p=new ResizeObserver(g=>{let[v]=g;v&&v.target===c&&p&&t&&(p.unobserve(t),cancelAnimationFrame(h),h=requestAnimationFrame(()=>{var b;(b=p)==null||b.observe(t)})),n()}),c&&!s&&p.observe(c),t&&p.observe(t));let m,y=s?cb(e):null;s&&w();function w(){const g=cb(e);y&&!Uk(y,g)&&n(),y=g,m=requestAnimationFrame(w)}return n(),()=>{var g;f.forEach(v=>{i&&v.removeEventListener("scroll",n),o&&v.removeEventListener("resize",n)}),d==null||d(),(g=p)==null||g.disconnect(),p=null,s&&cancelAnimationFrame(m)}}var Lm=x.useLayoutEffect,vV=["className","clearValue","cx","getStyles","getClassNames","getValue","hasValue","isMulti","isRtl","options","selectOption","selectProps","setValue","theme"],gu=function(){};function yV(e,t){return t?t[0]==="-"?e+t:e+"__"+t:e}function xV(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var o=[].concat(r);if(t&&e)for(var a in t)t.hasOwnProperty(a)&&t[a]&&o.push("".concat(yV(e,a)));return o.filter(function(l){return l}).map(function(l){return String(l).trim()}).join(" ")}var ub=function(t){return OV(t)?t.filter(Boolean):_i(t)==="object"&&t!==null?[t]:[]},Hk=function(t){t.className,t.clearValue,t.cx,t.getStyles,t.getClassNames,t.getValue,t.hasValue,t.isMulti,t.isRtl,t.options,t.selectOption,t.selectProps,t.setValue,t.theme;var n=vr(t,vV);return J({},n)},Ae=function(t,n,r){var i=t.cx,o=t.getStyles,a=t.getClassNames,l=t.className;return{css:o(n,t),className:i(r??{},a(n,t),l)}};function qd(e){return[document.documentElement,document.body,window].indexOf(e)>-1}function bV(e){return qd(e)?window.innerHeight:e.clientHeight}function Gk(e){return qd(e)?window.pageYOffset:e.scrollTop}function vu(e,t){if(qd(e)){window.scrollTo(0,t);return}e.scrollTop=t}function wV(e){var t=getComputedStyle(e),n=t.position==="absolute",r=/(auto|scroll)/;if(t.position==="fixed")return document.documentElement;for(var i=e;i=i.parentElement;)if(t=getComputedStyle(i),!(n&&t.position==="static")&&r.test(t.overflow+t.overflowY+t.overflowX))return i;return document.documentElement}function SV(e,t,n,r){return n*((e=e/r-1)*e*e+1)+t}function El(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:200,r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:gu,i=Gk(e),o=t-i,a=10,l=0;function s(){l+=a;var c=SV(l,i,o,n);vu(e,c),l<n?window.requestAnimationFrame(s):r(e)}s()}function db(e,t){var n=e.getBoundingClientRect(),r=t.getBoundingClientRect(),i=t.offsetHeight/3;r.bottom+i>n.bottom?vu(e,Math.min(t.offsetTop+t.clientHeight-e.offsetHeight+i,e.scrollHeight)):r.top-i<n.top&&vu(e,Math.max(t.offsetTop-i,0))}function CV(e){var t=e.getBoundingClientRect();return{bottom:t.bottom,height:t.height,left:t.left,right:t.right,top:t.top,width:t.width}}function fb(){try{return document.createEvent("TouchEvent"),!0}catch{return!1}}function EV(){try{return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}catch{return!1}}var qk=!1,_V={get passive(){return qk=!0}},_l=typeof window<"u"?window:{};_l.addEventListener&&_l.removeEventListener&&(_l.addEventListener("p",gu,_V),_l.removeEventListener("p",gu,!1));var kV=qk;function PV(e){return e!=null}function OV(e){return Array.isArray(e)}function kl(e,t,n){return e?t:n}var TV=function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];var o=Object.entries(t).filter(function(a){var l=ir(a,1),s=l[0];return!r.includes(s)});return o.reduce(function(a,l){var s=ir(l,2),c=s[0],f=s[1];return a[c]=f,a},{})},jV=["children","innerProps"],$V=["children","innerProps"];function IV(e){var t=e.maxHeight,n=e.menuEl,r=e.minHeight,i=e.placement,o=e.shouldScroll,a=e.isFixedPosition,l=e.controlHeight,s=wV(n),c={placement:"bottom",maxHeight:t};if(!n||!n.offsetParent)return c;var f=s.getBoundingClientRect(),d=f.height,h=n.getBoundingClientRect(),p=h.bottom,m=h.height,y=h.top,w=n.offsetParent.getBoundingClientRect(),g=w.top,v=a?window.innerHeight:bV(s),b=Gk(s),C=parseInt(getComputedStyle(n).marginBottom,10),S=parseInt(getComputedStyle(n).marginTop,10),P=g-S,k=v-y,_=P+b,T=d-b-y,$=p-v+b+C,I=b+y-S,M=160;switch(i){case"auto":case"bottom":if(k>=m)return{placement:"bottom",maxHeight:t};if(T>=m&&!a)return o&&El(s,$,M),{placement:"bottom",maxHeight:t};if(!a&&T>=r||a&&k>=r){o&&El(s,$,M);var j=a?k-C:T-C;return{placement:"bottom",maxHeight:j}}if(i==="auto"||a){var F=t,D=a?P:_;return D>=r&&(F=Math.min(D-C-l,t)),{placement:"top",maxHeight:F}}if(i==="bottom")return o&&vu(s,$),{placement:"bottom",maxHeight:t};break;case"top":if(P>=m)return{placement:"top",maxHeight:t};if(_>=m&&!a)return o&&El(s,I,M),{placement:"top",maxHeight:t};if(!a&&_>=r||a&&P>=r){var z=t;return(!a&&_>=r||a&&P>=r)&&(z=a?P-S:_-S),o&&El(s,I,M),{placement:"top",maxHeight:z}}return{placement:"bottom",maxHeight:t};default:throw new Error('Invalid placement provided "'.concat(i,'".'))}return c}function MV(e){var t={bottom:"top",top:"bottom"};return e?t[e]:"bottom"}var Yk=function(t){return t==="auto"?"bottom":t},AV=function(t,n){var r,i=t.placement,o=t.theme,a=o.borderRadius,l=o.spacing,s=o.colors;return J((r={label:"menu"},Oa(r,MV(i),"100%"),Oa(r,"position","absolute"),Oa(r,"width","100%"),Oa(r,"zIndex",1),r),n?{}:{backgroundColor:s.neutral0,borderRadius:a,boxShadow:"0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)",marginBottom:l.menuGutter,marginTop:l.menuGutter})},Xk=x.createContext(null),DV=function(t){var n=t.children,r=t.minMenuHeight,i=t.maxMenuHeight,o=t.menuPlacement,a=t.menuPosition,l=t.menuShouldScrollIntoView,s=t.theme,c=x.useContext(Xk)||{},f=c.setPortalPlacement,d=x.useRef(null),h=x.useState(i),p=ir(h,2),m=p[0],y=p[1],w=x.useState(null),g=ir(w,2),v=g[0],b=g[1],C=s.spacing.controlHeight;return Lm(function(){var S=d.current;if(S){var P=a==="fixed",k=l&&!P,_=IV({maxHeight:i,menuEl:S,minHeight:r,placement:o,shouldScroll:k,isFixedPosition:P,controlHeight:C});y(_.maxHeight),b(_.placement),f==null||f(_.placement)}},[i,o,a,l,r,f,C]),n({ref:d,placerProps:J(J({},t),{},{placement:v||Yk(o),maxHeight:m})})},LV=function(t){var n=t.children,r=t.innerRef,i=t.innerProps;return Z("div",ee({},Ae(t,"menu",{menu:!0}),{ref:r},i),n)},RV=LV,FV=function(t,n){var r=t.maxHeight,i=t.theme.spacing.baseUnit;return J({maxHeight:r,overflowY:"auto",position:"relative",WebkitOverflowScrolling:"touch"},n?{}:{paddingBottom:i,paddingTop:i})},zV=function(t){var n=t.children,r=t.innerProps,i=t.innerRef,o=t.isMulti;return Z("div",ee({},Ae(t,"menuList",{"menu-list":!0,"menu-list--is-multi":o}),{ref:i},r),n)},Kk=function(t,n){var r=t.theme,i=r.spacing.baseUnit,o=r.colors;return J({textAlign:"center"},n?{}:{color:o.neutral40,padding:"".concat(i*2,"px ").concat(i*3,"px")})},NV=Kk,BV=Kk,VV=function(t){var n=t.children,r=n===void 0?"No options":n,i=t.innerProps,o=vr(t,jV);return Z("div",ee({},Ae(J(J({},o),{},{children:r,innerProps:i}),"noOptionsMessage",{"menu-notice":!0,"menu-notice--no-options":!0}),i),r)},WV=function(t){var n=t.children,r=n===void 0?"Loading...":n,i=t.innerProps,o=vr(t,$V);return Z("div",ee({},Ae(J(J({},o),{},{children:r,innerProps:i}),"loadingMessage",{"menu-notice":!0,"menu-notice--loading":!0}),i),r)},UV=function(t){var n=t.rect,r=t.offset,i=t.position;return{left:n.left,position:i,top:r,width:n.width,zIndex:1}},HV=function(t){var n=t.appendTo,r=t.children,i=t.controlElement,o=t.innerProps,a=t.menuPlacement,l=t.menuPosition,s=x.useRef(null),c=x.useRef(null),f=x.useState(Yk(a)),d=ir(f,2),h=d[0],p=d[1],m=x.useMemo(function(){return{setPortalPlacement:p}},[]),y=x.useState(null),w=ir(y,2),g=w[0],v=w[1],b=x.useCallback(function(){if(i){var k=CV(i),_=l==="fixed"?0:window.pageYOffset,T=k[h]+_;(T!==(g==null?void 0:g.offset)||k.left!==(g==null?void 0:g.rect.left)||k.width!==(g==null?void 0:g.rect.width))&&v({offset:T,rect:k})}},[i,l,h,g==null?void 0:g.offset,g==null?void 0:g.rect.left,g==null?void 0:g.rect.width]);Lm(function(){b()},[b]);var C=x.useCallback(function(){typeof c.current=="function"&&(c.current(),c.current=null),i&&s.current&&(c.current=gV(i,s.current,b,{elementResize:"ResizeObserver"in window}))},[i,b]);Lm(function(){C()},[C]);var S=x.useCallback(function(k){s.current=k,C()},[C]);if(!n&&l!=="fixed"||!g)return null;var P=Z("div",ee({ref:S},Ae(J(J({},t),{},{offset:g.offset,position:l,rect:g.rect}),"menuPortal",{"menu-portal":!0}),o),r);return Z(Xk.Provider,{value:m},n?Ru.createPortal(P,n):P)},GV=function(t){var n=t.isDisabled,r=t.isRtl;return{label:"container",direction:r?"rtl":void 0,pointerEvents:n?"none":void 0,position:"relative"}},qV=function(t){var n=t.children,r=t.innerProps,i=t.isDisabled,o=t.isRtl;return Z("div",ee({},Ae(t,"container",{"--is-disabled":i,"--is-rtl":o}),r),n)},YV=function(t,n){var r=t.theme.spacing,i=t.isMulti,o=t.hasValue,a=t.selectProps.controlShouldRenderValue;return J({alignItems:"center",display:i&&o&&a?"flex":"grid",flex:1,flexWrap:"wrap",WebkitOverflowScrolling:"touch",position:"relative",overflow:"hidden"},n?{}:{padding:"".concat(r.baseUnit/2,"px ").concat(r.baseUnit*2,"px")})},XV=function(t){var n=t.children,r=t.innerProps,i=t.isMulti,o=t.hasValue;return Z("div",ee({},Ae(t,"valueContainer",{"value-container":!0,"value-container--is-multi":i,"value-container--has-value":o}),r),n)},KV=function(){return{alignItems:"center",alignSelf:"stretch",display:"flex",flexShrink:0}},QV=function(t){var n=t.children,r=t.innerProps;return Z("div",ee({},Ae(t,"indicatorsContainer",{indicators:!0}),r),n)},pb,ZV=["size"],JV=["innerProps","isRtl","size"],eW={name:"8mmkcg",styles:"display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0"},Qk=function(t){var n=t.size,r=vr(t,ZV);return Z("svg",ee({height:n,width:n,viewBox:"0 0 20 20","aria-hidden":"true",focusable:"false",css:eW},r))},nv=function(t){return Z(Qk,ee({size:20},t),Z("path",{d:"M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"}))},Zk=function(t){return Z(Qk,ee({size:20},t),Z("path",{d:"M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"}))},Jk=function(t,n){var r=t.isFocused,i=t.theme,o=i.spacing.baseUnit,a=i.colors;return J({label:"indicatorContainer",display:"flex",transition:"color 150ms"},n?{}:{color:r?a.neutral60:a.neutral20,padding:o*2,":hover":{color:r?a.neutral80:a.neutral40}})},tW=Jk,nW=function(t){var n=t.children,r=t.innerProps;return Z("div",ee({},Ae(t,"dropdownIndicator",{indicator:!0,"dropdown-indicator":!0}),r),n||Z(Zk,null))},rW=Jk,iW=function(t){var n=t.children,r=t.innerProps;return Z("div",ee({},Ae(t,"clearIndicator",{indicator:!0,"clear-indicator":!0}),r),n||Z(nv,null))},oW=function(t,n){var r=t.isDisabled,i=t.theme,o=i.spacing.baseUnit,a=i.colors;return J({label:"indicatorSeparator",alignSelf:"stretch",width:1},n?{}:{backgroundColor:r?a.neutral10:a.neutral20,marginBottom:o*2,marginTop:o*2})},aW=function(t){var n=t.innerProps;return Z("span",ee({},n,Ae(t,"indicatorSeparator",{"indicator-separator":!0})))},sW=YM(pb||(pb=iV([`
  0%, 80%, 100% { opacity: 0; }
  40% { opacity: 1; }
`]))),lW=function(t,n){var r=t.isFocused,i=t.size,o=t.theme,a=o.colors,l=o.spacing.baseUnit;return J({label:"loadingIndicator",display:"flex",transition:"color 150ms",alignSelf:"center",fontSize:i,lineHeight:1,marginRight:i,textAlign:"center",verticalAlign:"middle"},n?{}:{color:r?a.neutral60:a.neutral20,padding:l*2})},Ip=function(t){var n=t.delay,r=t.offset;return Z("span",{css:p0({animation:"".concat(sW," 1s ease-in-out ").concat(n,"ms infinite;"),backgroundColor:"currentColor",borderRadius:"1em",display:"inline-block",marginLeft:r?"1em":void 0,height:"1em",verticalAlign:"top",width:"1em"},"","")})},cW=function(t){var n=t.innerProps,r=t.isRtl,i=t.size,o=i===void 0?4:i,a=vr(t,JV);return Z("div",ee({},Ae(J(J({},a),{},{innerProps:n,isRtl:r,size:o}),"loadingIndicator",{indicator:!0,"loading-indicator":!0}),n),Z(Ip,{delay:0,offset:r}),Z(Ip,{delay:160,offset:!0}),Z(Ip,{delay:320,offset:!r}))},uW=function(t,n){var r=t.isDisabled,i=t.isFocused,o=t.theme,a=o.colors,l=o.borderRadius,s=o.spacing;return J({label:"control",alignItems:"center",cursor:"default",display:"flex",flexWrap:"wrap",justifyContent:"space-between",minHeight:s.controlHeight,outline:"0 !important",position:"relative",transition:"all 100ms"},n?{}:{backgroundColor:r?a.neutral5:a.neutral0,borderColor:r?a.neutral10:i?a.primary:a.neutral20,borderRadius:l,borderStyle:"solid",borderWidth:1,boxShadow:i?"0 0 0 1px ".concat(a.primary):void 0,"&:hover":{borderColor:i?a.primary:a.neutral30}})},dW=function(t){var n=t.children,r=t.isDisabled,i=t.isFocused,o=t.innerRef,a=t.innerProps,l=t.menuIsOpen;return Z("div",ee({ref:o},Ae(t,"control",{control:!0,"control--is-disabled":r,"control--is-focused":i,"control--menu-is-open":l}),a,{"aria-disabled":r||void 0}),n)},fW=dW,pW=["data"],hW=function(t,n){var r=t.theme.spacing;return n?{}:{paddingBottom:r.baseUnit*2,paddingTop:r.baseUnit*2}},mW=function(t){var n=t.children,r=t.cx,i=t.getStyles,o=t.getClassNames,a=t.Heading,l=t.headingProps,s=t.innerProps,c=t.label,f=t.theme,d=t.selectProps;return Z("div",ee({},Ae(t,"group",{group:!0}),s),Z(a,ee({},l,{selectProps:d,theme:f,getStyles:i,getClassNames:o,cx:r}),c),Z("div",null,n))},gW=function(t,n){var r=t.theme,i=r.colors,o=r.spacing;return J({label:"group",cursor:"default",display:"block"},n?{}:{color:i.neutral40,fontSize:"75%",fontWeight:500,marginBottom:"0.25em",paddingLeft:o.baseUnit*3,paddingRight:o.baseUnit*3,textTransform:"uppercase"})},vW=function(t){var n=Hk(t);n.data;var r=vr(n,pW);return Z("div",ee({},Ae(t,"groupHeading",{"group-heading":!0}),r))},yW=mW,xW=["innerRef","isDisabled","isHidden","inputClassName"],bW=function(t,n){var r=t.isDisabled,i=t.value,o=t.theme,a=o.spacing,l=o.colors;return J(J({visibility:r?"hidden":"visible",transform:i?"translateZ(0)":""},wW),n?{}:{margin:a.baseUnit/2,paddingBottom:a.baseUnit/2,paddingTop:a.baseUnit/2,color:l.neutral80})},eP={gridArea:"1 / 2",font:"inherit",minWidth:"2px",border:0,margin:0,outline:0,padding:0},wW={flex:"1 1 auto",display:"inline-grid",gridArea:"1 / 1 / 2 / 3",gridTemplateColumns:"0 min-content","&:after":J({content:'attr(data-value) " "',visibility:"hidden",whiteSpace:"pre"},eP)},SW=function(t){return J({label:"input",color:"inherit",background:0,opacity:t?0:1,width:"100%"},eP)},CW=function(t){var n=t.cx,r=t.value,i=Hk(t),o=i.innerRef,a=i.isDisabled,l=i.isHidden,s=i.inputClassName,c=vr(i,xW);return Z("div",ee({},Ae(t,"input",{"input-container":!0}),{"data-value":r||""}),Z("input",ee({className:n({input:!0},s),ref:o,style:SW(l),disabled:a},c)))},EW=CW,_W=function(t,n){var r=t.theme,i=r.spacing,o=r.borderRadius,a=r.colors;return J({label:"multiValue",display:"flex",minWidth:0},n?{}:{backgroundColor:a.neutral10,borderRadius:o/2,margin:i.baseUnit/2})},kW=function(t,n){var r=t.theme,i=r.borderRadius,o=r.colors,a=t.cropWithEllipsis;return J({overflow:"hidden",textOverflow:a||a===void 0?"ellipsis":void 0,whiteSpace:"nowrap"},n?{}:{borderRadius:i/2,color:o.neutral80,fontSize:"85%",padding:3,paddingLeft:6})},PW=function(t,n){var r=t.theme,i=r.spacing,o=r.borderRadius,a=r.colors,l=t.isFocused;return J({alignItems:"center",display:"flex"},n?{}:{borderRadius:o/2,backgroundColor:l?a.dangerLight:void 0,paddingLeft:i.baseUnit,paddingRight:i.baseUnit,":hover":{backgroundColor:a.dangerLight,color:a.danger}})},tP=function(t){var n=t.children,r=t.innerProps;return Z("div",r,n)},OW=tP,TW=tP;function jW(e){var t=e.children,n=e.innerProps;return Z("div",ee({role:"button"},n),t||Z(nv,{size:14}))}var $W=function(t){var n=t.children,r=t.components,i=t.data,o=t.innerProps,a=t.isDisabled,l=t.removeProps,s=t.selectProps,c=r.Container,f=r.Label,d=r.Remove;return Z(c,{data:i,innerProps:J(J({},Ae(t,"multiValue",{"multi-value":!0,"multi-value--is-disabled":a})),o),selectProps:s},Z(f,{data:i,innerProps:J({},Ae(t,"multiValueLabel",{"multi-value__label":!0})),selectProps:s},n),Z(d,{data:i,innerProps:J(J({},Ae(t,"multiValueRemove",{"multi-value__remove":!0})),{},{"aria-label":"Remove ".concat(n||"option")},l),selectProps:s}))},IW=$W,MW=function(t,n){var r=t.isDisabled,i=t.isFocused,o=t.isSelected,a=t.theme,l=a.spacing,s=a.colors;return J({label:"option",cursor:"default",display:"block",fontSize:"inherit",width:"100%",userSelect:"none",WebkitTapHighlightColor:"rgba(0, 0, 0, 0)"},n?{}:{backgroundColor:o?s.primary:i?s.primary25:"transparent",color:r?s.neutral20:o?s.neutral0:"inherit",padding:"".concat(l.baseUnit*2,"px ").concat(l.baseUnit*3,"px"),":active":{backgroundColor:r?void 0:o?s.primary:s.primary50}})},AW=function(t){var n=t.children,r=t.isDisabled,i=t.isFocused,o=t.isSelected,a=t.innerRef,l=t.innerProps;return Z("div",ee({},Ae(t,"option",{option:!0,"option--is-disabled":r,"option--is-focused":i,"option--is-selected":o}),{ref:a,"aria-disabled":r},l),n)},DW=AW,LW=function(t,n){var r=t.theme,i=r.spacing,o=r.colors;return J({label:"placeholder",gridArea:"1 / 1 / 2 / 3"},n?{}:{color:o.neutral50,marginLeft:i.baseUnit/2,marginRight:i.baseUnit/2})},RW=function(t){var n=t.children,r=t.innerProps;return Z("div",ee({},Ae(t,"placeholder",{placeholder:!0}),r),n)},FW=RW,zW=function(t,n){var r=t.isDisabled,i=t.theme,o=i.spacing,a=i.colors;return J({label:"singleValue",gridArea:"1 / 1 / 2 / 3",maxWidth:"100%",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},n?{}:{color:r?a.neutral40:a.neutral80,marginLeft:o.baseUnit/2,marginRight:o.baseUnit/2})},NW=function(t){var n=t.children,r=t.isDisabled,i=t.innerProps;return Z("div",ee({},Ae(t,"singleValue",{"single-value":!0,"single-value--is-disabled":r}),i),n)},BW=NW,VW={ClearIndicator:iW,Control:fW,DropdownIndicator:nW,DownChevron:Zk,CrossIcon:nv,Group:yW,GroupHeading:vW,IndicatorsContainer:QV,IndicatorSeparator:aW,Input:EW,LoadingIndicator:cW,Menu:RV,MenuList:zV,MenuPortal:HV,LoadingMessage:WV,NoOptionsMessage:VV,MultiValue:IW,MultiValueContainer:OW,MultiValueLabel:TW,MultiValueRemove:jW,Option:DW,Placeholder:FW,SelectContainer:qV,SingleValue:BW,ValueContainer:XV},WW=function(t){return J(J({},VW),t.components)},hb=Number.isNaN||function(t){return typeof t=="number"&&t!==t};function UW(e,t){return!!(e===t||hb(e)&&hb(t))}function HW(e,t){if(e.length!==t.length)return!1;for(var n=0;n<e.length;n++)if(!UW(e[n],t[n]))return!1;return!0}function GW(e,t){t===void 0&&(t=HW);var n=null;function r(){for(var i=[],o=0;o<arguments.length;o++)i[o]=arguments[o];if(n&&n.lastThis===this&&t(i,n.lastArgs))return n.lastResult;var a=e.apply(this,i);return n={lastResult:a,lastArgs:i,lastThis:this},a}return r.clear=function(){n=null},r}var qW={name:"7pg0cj-a11yText",styles:"label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap"},YW=function(t){return Z("span",ee({css:qW},t))},mb=YW,XW={guidance:function(t){var n=t.isSearchable,r=t.isMulti,i=t.tabSelectsValue,o=t.context,a=t.isInitialFocus;switch(o){case"menu":return"Use Up and Down to choose options, press Enter to select the currently focused option, press Escape to exit the menu".concat(i?", press Tab to select the option and exit the menu":"",".");case"input":return a?"".concat(t["aria-label"]||"Select"," is focused ").concat(n?",type to refine list":"",", press Down to open the menu, ").concat(r?" press left to focus selected values":""):"";case"value":return"Use left and right to toggle between focused values, press Backspace to remove the currently focused value";default:return""}},onChange:function(t){var n=t.action,r=t.label,i=r===void 0?"":r,o=t.labels,a=t.isDisabled;switch(n){case"deselect-option":case"pop-value":case"remove-value":return"option ".concat(i,", deselected.");case"clear":return"All selected options have been cleared.";case"initial-input-focus":return"option".concat(o.length>1?"s":""," ").concat(o.join(","),", selected.");case"select-option":return a?"option ".concat(i," is disabled. Select another option."):"option ".concat(i,", selected.");default:return""}},onFocus:function(t){var n=t.context,r=t.focused,i=t.options,o=t.label,a=o===void 0?"":o,l=t.selectValue,s=t.isDisabled,c=t.isSelected,f=t.isAppleDevice,d=function(y,w){return y&&y.length?"".concat(y.indexOf(w)+1," of ").concat(y.length):""};if(n==="value"&&l)return"value ".concat(a," focused, ").concat(d(l,r),".");if(n==="menu"&&f){var h=s?" disabled":"",p="".concat(c?" selected":"").concat(h);return"".concat(a).concat(p,", ").concat(d(i,r),".")}return""},onFilter:function(t){var n=t.inputValue,r=t.resultsMessage;return"".concat(r).concat(n?" for search term "+n:"",".")}},KW=function(t){var n=t.ariaSelection,r=t.focusedOption,i=t.focusedValue,o=t.focusableOptions,a=t.isFocused,l=t.selectValue,s=t.selectProps,c=t.id,f=t.isAppleDevice,d=s.ariaLiveMessages,h=s.getOptionLabel,p=s.inputValue,m=s.isMulti,y=s.isOptionDisabled,w=s.isSearchable,g=s.menuIsOpen,v=s.options,b=s.screenReaderStatus,C=s.tabSelectsValue,S=s.isLoading,P=s["aria-label"],k=s["aria-live"],_=x.useMemo(function(){return J(J({},XW),d||{})},[d]),T=x.useMemo(function(){var D="";if(n&&_.onChange){var z=n.option,R=n.options,O=n.removedValue,A=n.removedValues,N=n.value,B=function(te){return Array.isArray(te)?null:te},L=O||z||B(N),V=L?h(L):"",H=R||A||void 0,G=H?H.map(h):[],W=J({isDisabled:L&&y(L,l),label:V,labels:G},n);D=_.onChange(W)}return D},[n,_,y,l,h]),$=x.useMemo(function(){var D="",z=r||i,R=!!(r&&l&&l.includes(r));if(z&&_.onFocus){var O={focused:z,label:h(z),isDisabled:y(z,l),isSelected:R,options:o,context:z===r?"menu":"value",selectValue:l,isAppleDevice:f};D=_.onFocus(O)}return D},[r,i,h,y,_,o,l,f]),I=x.useMemo(function(){var D="";if(g&&v.length&&!S&&_.onFilter){var z=b({count:o.length});D=_.onFilter({inputValue:p,resultsMessage:z})}return D},[o,p,g,_,v,b,S]),M=(n==null?void 0:n.action)==="initial-input-focus",j=x.useMemo(function(){var D="";if(_.guidance){var z=i?"value":g?"menu":"input";D=_.guidance({"aria-label":P,context:z,isDisabled:r&&y(r,l),isMulti:m,isSearchable:w,tabSelectsValue:C,isInitialFocus:M})}return D},[P,r,i,m,y,w,g,_,l,C,M]),F=Z(x.Fragment,null,Z("span",{id:"aria-selection"},T),Z("span",{id:"aria-focused"},$),Z("span",{id:"aria-results"},I),Z("span",{id:"aria-guidance"},j));return Z(x.Fragment,null,Z(mb,{id:c},M&&F),Z(mb,{"aria-live":k,"aria-atomic":"false","aria-relevant":"additions text",role:"log"},a&&!M&&F))},QW=KW,Rm=[{base:"A",letters:"AⒶＡÀÁÂẦẤẪẨÃĀĂẰẮẴẲȦǠÄǞẢÅǺǍȀȂẠẬẶḀĄȺⱯ"},{base:"AA",letters:"Ꜳ"},{base:"AE",letters:"ÆǼǢ"},{base:"AO",letters:"Ꜵ"},{base:"AU",letters:"Ꜷ"},{base:"AV",letters:"ꜸꜺ"},{base:"AY",letters:"Ꜽ"},{base:"B",letters:"BⒷＢḂḄḆɃƂƁ"},{base:"C",letters:"CⒸＣĆĈĊČÇḈƇȻꜾ"},{base:"D",letters:"DⒹＤḊĎḌḐḒḎĐƋƊƉꝹ"},{base:"DZ",letters:"ǱǄ"},{base:"Dz",letters:"ǲǅ"},{base:"E",letters:"EⒺＥÈÉÊỀẾỄỂẼĒḔḖĔĖËẺĚȄȆẸỆȨḜĘḘḚƐƎ"},{base:"F",letters:"FⒻＦḞƑꝻ"},{base:"G",letters:"GⒼＧǴĜḠĞĠǦĢǤƓꞠꝽꝾ"},{base:"H",letters:"HⒽＨĤḢḦȞḤḨḪĦⱧⱵꞍ"},{base:"I",letters:"IⒾＩÌÍÎĨĪĬİÏḮỈǏȈȊỊĮḬƗ"},{base:"J",letters:"JⒿＪĴɈ"},{base:"K",letters:"KⓀＫḰǨḲĶḴƘⱩꝀꝂꝄꞢ"},{base:"L",letters:"LⓁＬĿĹĽḶḸĻḼḺŁȽⱢⱠꝈꝆꞀ"},{base:"LJ",letters:"Ǉ"},{base:"Lj",letters:"ǈ"},{base:"M",letters:"MⓂＭḾṀṂⱮƜ"},{base:"N",letters:"NⓃＮǸŃÑṄŇṆŅṊṈȠƝꞐꞤ"},{base:"NJ",letters:"Ǌ"},{base:"Nj",letters:"ǋ"},{base:"O",letters:"OⓄＯÒÓÔỒỐỖỔÕṌȬṎŌṐṒŎȮȰÖȪỎŐǑȌȎƠỜỚỠỞỢỌỘǪǬØǾƆƟꝊꝌ"},{base:"OI",letters:"Ƣ"},{base:"OO",letters:"Ꝏ"},{base:"OU",letters:"Ȣ"},{base:"P",letters:"PⓅＰṔṖƤⱣꝐꝒꝔ"},{base:"Q",letters:"QⓆＱꝖꝘɊ"},{base:"R",letters:"RⓇＲŔṘŘȐȒṚṜŖṞɌⱤꝚꞦꞂ"},{base:"S",letters:"SⓈＳẞŚṤŜṠŠṦṢṨȘŞⱾꞨꞄ"},{base:"T",letters:"TⓉＴṪŤṬȚŢṰṮŦƬƮȾꞆ"},{base:"TZ",letters:"Ꜩ"},{base:"U",letters:"UⓊＵÙÚÛŨṸŪṺŬÜǛǗǕǙỦŮŰǓȔȖƯỪỨỮỬỰỤṲŲṶṴɄ"},{base:"V",letters:"VⓋＶṼṾƲꝞɅ"},{base:"VY",letters:"Ꝡ"},{base:"W",letters:"WⓌＷẀẂŴẆẄẈⱲ"},{base:"X",letters:"XⓍＸẊẌ"},{base:"Y",letters:"YⓎＹỲÝŶỸȲẎŸỶỴƳɎỾ"},{base:"Z",letters:"ZⓏＺŹẐŻŽẒẔƵȤⱿⱫꝢ"},{base:"a",letters:"aⓐａẚàáâầấẫẩãāăằắẵẳȧǡäǟảåǻǎȁȃạậặḁąⱥɐ"},{base:"aa",letters:"ꜳ"},{base:"ae",letters:"æǽǣ"},{base:"ao",letters:"ꜵ"},{base:"au",letters:"ꜷ"},{base:"av",letters:"ꜹꜻ"},{base:"ay",letters:"ꜽ"},{base:"b",letters:"bⓑｂḃḅḇƀƃɓ"},{base:"c",letters:"cⓒｃćĉċčçḉƈȼꜿↄ"},{base:"d",letters:"dⓓｄḋďḍḑḓḏđƌɖɗꝺ"},{base:"dz",letters:"ǳǆ"},{base:"e",letters:"eⓔｅèéêềếễểẽēḕḗĕėëẻěȅȇẹệȩḝęḙḛɇɛǝ"},{base:"f",letters:"fⓕｆḟƒꝼ"},{base:"g",letters:"gⓖｇǵĝḡğġǧģǥɠꞡᵹꝿ"},{base:"h",letters:"hⓗｈĥḣḧȟḥḩḫẖħⱨⱶɥ"},{base:"hv",letters:"ƕ"},{base:"i",letters:"iⓘｉìíîĩīĭïḯỉǐȉȋịįḭɨı"},{base:"j",letters:"jⓙｊĵǰɉ"},{base:"k",letters:"kⓚｋḱǩḳķḵƙⱪꝁꝃꝅꞣ"},{base:"l",letters:"lⓛｌŀĺľḷḹļḽḻſłƚɫⱡꝉꞁꝇ"},{base:"lj",letters:"ǉ"},{base:"m",letters:"mⓜｍḿṁṃɱɯ"},{base:"n",letters:"nⓝｎǹńñṅňṇņṋṉƞɲŉꞑꞥ"},{base:"nj",letters:"ǌ"},{base:"o",letters:"oⓞｏòóôồốỗổõṍȭṏōṑṓŏȯȱöȫỏőǒȍȏơờớỡởợọộǫǭøǿɔꝋꝍɵ"},{base:"oi",letters:"ƣ"},{base:"ou",letters:"ȣ"},{base:"oo",letters:"ꝏ"},{base:"p",letters:"pⓟｐṕṗƥᵽꝑꝓꝕ"},{base:"q",letters:"qⓠｑɋꝗꝙ"},{base:"r",letters:"rⓡｒŕṙřȑȓṛṝŗṟɍɽꝛꞧꞃ"},{base:"s",letters:"sⓢｓßśṥŝṡšṧṣṩșşȿꞩꞅẛ"},{base:"t",letters:"tⓣｔṫẗťṭțţṱṯŧƭʈⱦꞇ"},{base:"tz",letters:"ꜩ"},{base:"u",letters:"uⓤｕùúûũṹūṻŭüǜǘǖǚủůűǔȕȗưừứữửựụṳųṷṵʉ"},{base:"v",letters:"vⓥｖṽṿʋꝟʌ"},{base:"vy",letters:"ꝡ"},{base:"w",letters:"wⓦｗẁẃŵẇẅẘẉⱳ"},{base:"x",letters:"xⓧｘẋẍ"},{base:"y",letters:"yⓨｙỳýŷỹȳẏÿỷẙỵƴɏỿ"},{base:"z",letters:"zⓩｚźẑżžẓẕƶȥɀⱬꝣ"}],ZW=new RegExp("["+Rm.map(function(e){return e.letters}).join("")+"]","g"),nP={};for(var Mp=0;Mp<Rm.length;Mp++)for(var Ap=Rm[Mp],Dp=0;Dp<Ap.letters.length;Dp++)nP[Ap.letters[Dp]]=Ap.base;var rP=function(t){return t.replace(ZW,function(n){return nP[n]})},JW=GW(rP),gb=function(t){return t.replace(/^\s+|\s+$/g,"")},eU=function(t){return"".concat(t.label," ").concat(t.value)},tU=function(t){return function(n,r){if(n.data.__isNew__)return!0;var i=J({ignoreCase:!0,ignoreAccents:!0,stringify:eU,trim:!0,matchFrom:"any"},t),o=i.ignoreCase,a=i.ignoreAccents,l=i.stringify,s=i.trim,c=i.matchFrom,f=s?gb(r):r,d=s?gb(l(n)):l(n);return o&&(f=f.toLowerCase(),d=d.toLowerCase()),a&&(f=JW(f),d=rP(d)),c==="start"?d.substr(0,f.length)===f:d.indexOf(f)>-1}},nU=["innerRef"];function rU(e){var t=e.innerRef,n=vr(e,nU),r=TV(n,"onExited","in","enter","exit","appear");return Z("input",ee({ref:t},r,{css:p0({label:"dummyInput",background:0,border:0,caretColor:"transparent",fontSize:"inherit",gridArea:"1 / 1 / 2 / 3",outline:0,padding:0,width:1,color:"transparent",left:-100,opacity:0,position:"relative",transform:"scale(.01)"},"","")}))}var iU=function(t){t.cancelable&&t.preventDefault(),t.stopPropagation()};function oU(e){var t=e.isEnabled,n=e.onBottomArrive,r=e.onBottomLeave,i=e.onTopArrive,o=e.onTopLeave,a=x.useRef(!1),l=x.useRef(!1),s=x.useRef(0),c=x.useRef(null),f=x.useCallback(function(w,g){if(c.current!==null){var v=c.current,b=v.scrollTop,C=v.scrollHeight,S=v.clientHeight,P=c.current,k=g>0,_=C-S-b,T=!1;_>g&&a.current&&(r&&r(w),a.current=!1),k&&l.current&&(o&&o(w),l.current=!1),k&&g>_?(n&&!a.current&&n(w),P.scrollTop=C,T=!0,a.current=!0):!k&&-g>b&&(i&&!l.current&&i(w),P.scrollTop=0,T=!0,l.current=!0),T&&iU(w)}},[n,r,i,o]),d=x.useCallback(function(w){f(w,w.deltaY)},[f]),h=x.useCallback(function(w){s.current=w.changedTouches[0].clientY},[]),p=x.useCallback(function(w){var g=s.current-w.changedTouches[0].clientY;f(w,g)},[f]),m=x.useCallback(function(w){if(w){var g=kV?{passive:!1}:!1;w.addEventListener("wheel",d,g),w.addEventListener("touchstart",h,g),w.addEventListener("touchmove",p,g)}},[p,h,d]),y=x.useCallback(function(w){w&&(w.removeEventListener("wheel",d,!1),w.removeEventListener("touchstart",h,!1),w.removeEventListener("touchmove",p,!1))},[p,h,d]);return x.useEffect(function(){if(t){var w=c.current;return m(w),function(){y(w)}}},[t,m,y]),function(w){c.current=w}}var vb=["boxSizing","height","overflow","paddingRight","position"],yb={boxSizing:"border-box",overflow:"hidden",position:"relative",height:"100%"};function xb(e){e.cancelable&&e.preventDefault()}function bb(e){e.stopPropagation()}function wb(){var e=this.scrollTop,t=this.scrollHeight,n=e+this.offsetHeight;e===0?this.scrollTop=1:n===t&&(this.scrollTop=e-1)}function Sb(){return"ontouchstart"in window||navigator.maxTouchPoints}var Cb=!!(typeof window<"u"&&window.document&&window.document.createElement),va=0,Ui={capture:!1,passive:!1};function aU(e){var t=e.isEnabled,n=e.accountForScrollbars,r=n===void 0?!0:n,i=x.useRef({}),o=x.useRef(null),a=x.useCallback(function(s){if(Cb){var c=document.body,f=c&&c.style;if(r&&vb.forEach(function(m){var y=f&&f[m];i.current[m]=y}),r&&va<1){var d=parseInt(i.current.paddingRight,10)||0,h=document.body?document.body.clientWidth:0,p=window.innerWidth-h+d||0;Object.keys(yb).forEach(function(m){var y=yb[m];f&&(f[m]=y)}),f&&(f.paddingRight="".concat(p,"px"))}c&&Sb()&&(c.addEventListener("touchmove",xb,Ui),s&&(s.addEventListener("touchstart",wb,Ui),s.addEventListener("touchmove",bb,Ui))),va+=1}},[r]),l=x.useCallback(function(s){if(Cb){var c=document.body,f=c&&c.style;va=Math.max(va-1,0),r&&va<1&&vb.forEach(function(d){var h=i.current[d];f&&(f[d]=h)}),c&&Sb()&&(c.removeEventListener("touchmove",xb,Ui),s&&(s.removeEventListener("touchstart",wb,Ui),s.removeEventListener("touchmove",bb,Ui)))}},[r]);return x.useEffect(function(){if(t){var s=o.current;return a(s),function(){l(s)}}},[t,a,l]),function(s){o.current=s}}var sU=function(t){var n=t.target;return n.ownerDocument.activeElement&&n.ownerDocument.activeElement.blur()},lU={name:"1kfdb0e",styles:"position:fixed;left:0;bottom:0;right:0;top:0"};function cU(e){var t=e.children,n=e.lockEnabled,r=e.captureEnabled,i=r===void 0?!0:r,o=e.onBottomArrive,a=e.onBottomLeave,l=e.onTopArrive,s=e.onTopLeave,c=oU({isEnabled:i,onBottomArrive:o,onBottomLeave:a,onTopArrive:l,onTopLeave:s}),f=aU({isEnabled:n}),d=function(p){c(p),f(p)};return Z(x.Fragment,null,n&&Z("div",{onClick:sU,css:lU}),t(d))}var uU={name:"1a0ro4n-requiredInput",styles:"label:requiredInput;opacity:0;pointer-events:none;position:absolute;bottom:0;left:0;right:0;width:100%"},dU=function(t){var n=t.name,r=t.onFocus;return Z("input",{required:!0,name:n,tabIndex:-1,"aria-hidden":"true",onFocus:r,css:uU,value:"",onChange:function(){}})},fU=dU;function rv(e){var t;return typeof window<"u"&&window.navigator!=null?e.test(((t=window.navigator.userAgentData)===null||t===void 0?void 0:t.platform)||window.navigator.platform):!1}function pU(){return rv(/^iPhone/i)}function iP(){return rv(/^Mac/i)}function hU(){return rv(/^iPad/i)||iP()&&navigator.maxTouchPoints>1}function mU(){return pU()||hU()}function gU(){return iP()||mU()}var vU=function(t){return t.label},yU=function(t){return t.label},xU=function(t){return t.value},bU=function(t){return!!t.isDisabled},wU={clearIndicator:rW,container:GV,control:uW,dropdownIndicator:tW,group:hW,groupHeading:gW,indicatorsContainer:KV,indicatorSeparator:oW,input:bW,loadingIndicator:lW,loadingMessage:BV,menu:AV,menuList:FV,menuPortal:UV,multiValue:_W,multiValueLabel:kW,multiValueRemove:PW,noOptionsMessage:NV,option:MW,placeholder:LW,singleValue:zW,valueContainer:YV},SU={primary:"#2684FF",primary75:"#4C9AFF",primary50:"#B2D4FF",primary25:"#DEEBFF",danger:"#DE350B",dangerLight:"#FFBDAD",neutral0:"hsl(0, 0%, 100%)",neutral5:"hsl(0, 0%, 95%)",neutral10:"hsl(0, 0%, 90%)",neutral20:"hsl(0, 0%, 80%)",neutral30:"hsl(0, 0%, 70%)",neutral40:"hsl(0, 0%, 60%)",neutral50:"hsl(0, 0%, 50%)",neutral60:"hsl(0, 0%, 40%)",neutral70:"hsl(0, 0%, 30%)",neutral80:"hsl(0, 0%, 20%)",neutral90:"hsl(0, 0%, 10%)"},CU=4,oP=4,EU=38,_U=oP*2,kU={baseUnit:oP,controlHeight:EU,menuGutter:_U},Lp={borderRadius:CU,colors:SU,spacing:kU},PU={"aria-live":"polite",backspaceRemovesValue:!0,blurInputOnSelect:fb(),captureMenuScroll:!fb(),classNames:{},closeMenuOnSelect:!0,closeMenuOnScroll:!1,components:{},controlShouldRenderValue:!0,escapeClearsValue:!1,filterOption:tU(),formatGroupLabel:vU,getOptionLabel:yU,getOptionValue:xU,isDisabled:!1,isLoading:!1,isMulti:!1,isRtl:!1,isSearchable:!0,isOptionDisabled:bU,loadingMessage:function(){return"Loading..."},maxMenuHeight:300,minMenuHeight:140,menuIsOpen:!1,menuPlacement:"bottom",menuPosition:"absolute",menuShouldBlockScroll:!1,menuShouldScrollIntoView:!EV(),noOptionsMessage:function(){return"No options"},openMenuOnFocus:!1,openMenuOnClick:!0,options:[],pageSize:5,placeholder:"Select...",screenReaderStatus:function(t){var n=t.count;return"".concat(n," result").concat(n!==1?"s":""," available")},styles:{},tabIndex:0,tabSelectsValue:!0,unstyled:!1};function Eb(e,t,n,r){var i=lP(e,t,n),o=cP(e,t,n),a=sP(e,t),l=yu(e,t);return{type:"option",data:t,isDisabled:i,isSelected:o,label:a,value:l,index:r}}function dc(e,t){return e.options.map(function(n,r){if("options"in n){var i=n.options.map(function(a,l){return Eb(e,a,t,l)}).filter(function(a){return kb(e,a)});return i.length>0?{type:"group",data:n,options:i,index:r}:void 0}var o=Eb(e,n,t,r);return kb(e,o)?o:void 0}).filter(PV)}function aP(e){return e.reduce(function(t,n){return n.type==="group"?t.push.apply(t,Z0(n.options.map(function(r){return r.data}))):t.push(n.data),t},[])}function _b(e,t){return e.reduce(function(n,r){return r.type==="group"?n.push.apply(n,Z0(r.options.map(function(i){return{data:i.data,id:"".concat(t,"-").concat(r.index,"-").concat(i.index)}}))):n.push({data:r.data,id:"".concat(t,"-").concat(r.index)}),n},[])}function OU(e,t){return aP(dc(e,t))}function kb(e,t){var n=e.inputValue,r=n===void 0?"":n,i=t.data,o=t.isSelected,a=t.label,l=t.value;return(!dP(e)||!o)&&uP(e,{label:a,value:l,data:i},r)}function TU(e,t){var n=e.focusedValue,r=e.selectValue,i=r.indexOf(n);if(i>-1){var o=t.indexOf(n);if(o>-1)return n;if(i<t.length)return t[i]}return null}function jU(e,t){var n=e.focusedOption;return n&&t.indexOf(n)>-1?n:t[0]}var Rp=function(t,n){var r,i=(r=t.find(function(o){return o.data===n}))===null||r===void 0?void 0:r.id;return i||null},sP=function(t,n){return t.getOptionLabel(n)},yu=function(t,n){return t.getOptionValue(n)};function lP(e,t,n){return typeof e.isOptionDisabled=="function"?e.isOptionDisabled(t,n):!1}function cP(e,t,n){if(n.indexOf(t)>-1)return!0;if(typeof e.isOptionSelected=="function")return e.isOptionSelected(t,n);var r=yu(e,t);return n.some(function(i){return yu(e,i)===r})}function uP(e,t,n){return e.filterOption?e.filterOption(t,n):!0}var dP=function(t){var n=t.hideSelectedOptions,r=t.isMulti;return n===void 0?r:n},$U=1,fP=function(e){KB(n,e);var t=eV(n);function n(r){var i;if(YB(this,n),i=t.call(this,r),i.state={ariaSelection:null,focusedOption:null,focusedOptionId:null,focusableOptionsWithIds:[],focusedValue:null,inputIsHidden:!1,isFocused:!1,selectValue:[],clearFocusValueOnUpdate:!1,prevWasFocused:!1,inputIsHiddenAfterUpdate:void 0,prevProps:void 0,instancePrefix:"",isAppleDevice:!1},i.blockOptionHover=!1,i.isComposing=!1,i.commonProps=void 0,i.initialTouchX=0,i.initialTouchY=0,i.openAfterFocus=!1,i.scrollToFocusedOptionOnUpdate=!1,i.userIsDragging=void 0,i.controlRef=null,i.getControlRef=function(s){i.controlRef=s},i.focusedOptionRef=null,i.getFocusedOptionRef=function(s){i.focusedOptionRef=s},i.menuListRef=null,i.getMenuListRef=function(s){i.menuListRef=s},i.inputRef=null,i.getInputRef=function(s){i.inputRef=s},i.focus=i.focusInput,i.blur=i.blurInput,i.onChange=function(s,c){var f=i.props,d=f.onChange,h=f.name;c.name=h,i.ariaOnChange(s,c),d(s,c)},i.setValue=function(s,c,f){var d=i.props,h=d.closeMenuOnSelect,p=d.isMulti,m=d.inputValue;i.onInputChange("",{action:"set-value",prevInputValue:m}),h&&(i.setState({inputIsHiddenAfterUpdate:!p}),i.onMenuClose()),i.setState({clearFocusValueOnUpdate:!0}),i.onChange(s,{action:c,option:f})},i.selectOption=function(s){var c=i.props,f=c.blurInputOnSelect,d=c.isMulti,h=c.name,p=i.state.selectValue,m=d&&i.isOptionSelected(s,p),y=i.isOptionDisabled(s,p);if(m){var w=i.getOptionValue(s);i.setValue(p.filter(function(g){return i.getOptionValue(g)!==w}),"deselect-option",s)}else if(!y)d?i.setValue([].concat(Z0(p),[s]),"select-option",s):i.setValue(s,"select-option");else{i.ariaOnChange(s,{action:"select-option",option:s,name:h});return}f&&i.blurInput()},i.removeValue=function(s){var c=i.props.isMulti,f=i.state.selectValue,d=i.getOptionValue(s),h=f.filter(function(m){return i.getOptionValue(m)!==d}),p=kl(c,h,h[0]||null);i.onChange(p,{action:"remove-value",removedValue:s}),i.focusInput()},i.clearValue=function(){var s=i.state.selectValue;i.onChange(kl(i.props.isMulti,[],null),{action:"clear",removedValues:s})},i.popValue=function(){var s=i.props.isMulti,c=i.state.selectValue,f=c[c.length-1],d=c.slice(0,c.length-1),h=kl(s,d,d[0]||null);f&&i.onChange(h,{action:"pop-value",removedValue:f})},i.getFocusedOptionId=function(s){return Rp(i.state.focusableOptionsWithIds,s)},i.getFocusableOptionsWithIds=function(){return _b(dc(i.props,i.state.selectValue),i.getElementId("option"))},i.getValue=function(){return i.state.selectValue},i.cx=function(){for(var s=arguments.length,c=new Array(s),f=0;f<s;f++)c[f]=arguments[f];return xV.apply(void 0,[i.props.classNamePrefix].concat(c))},i.getOptionLabel=function(s){return sP(i.props,s)},i.getOptionValue=function(s){return yu(i.props,s)},i.getStyles=function(s,c){var f=i.props.unstyled,d=wU[s](c,f);d.boxSizing="border-box";var h=i.props.styles[s];return h?h(d,c):d},i.getClassNames=function(s,c){var f,d;return(f=(d=i.props.classNames)[s])===null||f===void 0?void 0:f.call(d,c)},i.getElementId=function(s){return"".concat(i.state.instancePrefix,"-").concat(s)},i.getComponents=function(){return WW(i.props)},i.buildCategorizedOptions=function(){return dc(i.props,i.state.selectValue)},i.getCategorizedOptions=function(){return i.props.menuIsOpen?i.buildCategorizedOptions():[]},i.buildFocusableOptions=function(){return aP(i.buildCategorizedOptions())},i.getFocusableOptions=function(){return i.props.menuIsOpen?i.buildFocusableOptions():[]},i.ariaOnChange=function(s,c){i.setState({ariaSelection:J({value:s},c)})},i.onMenuMouseDown=function(s){s.button===0&&(s.stopPropagation(),s.preventDefault(),i.focusInput())},i.onMenuMouseMove=function(s){i.blockOptionHover=!1},i.onControlMouseDown=function(s){if(!s.defaultPrevented){var c=i.props.openMenuOnClick;i.state.isFocused?i.props.menuIsOpen?s.target.tagName!=="INPUT"&&s.target.tagName!=="TEXTAREA"&&i.onMenuClose():c&&i.openMenu("first"):(c&&(i.openAfterFocus=!0),i.focusInput()),s.target.tagName!=="INPUT"&&s.target.tagName!=="TEXTAREA"&&s.preventDefault()}},i.onDropdownIndicatorMouseDown=function(s){if(!(s&&s.type==="mousedown"&&s.button!==0)&&!i.props.isDisabled){var c=i.props,f=c.isMulti,d=c.menuIsOpen;i.focusInput(),d?(i.setState({inputIsHiddenAfterUpdate:!f}),i.onMenuClose()):i.openMenu("first"),s.preventDefault()}},i.onClearIndicatorMouseDown=function(s){s&&s.type==="mousedown"&&s.button!==0||(i.clearValue(),s.preventDefault(),i.openAfterFocus=!1,s.type==="touchend"?i.focusInput():setTimeout(function(){return i.focusInput()}))},i.onScroll=function(s){typeof i.props.closeMenuOnScroll=="boolean"?s.target instanceof HTMLElement&&qd(s.target)&&i.props.onMenuClose():typeof i.props.closeMenuOnScroll=="function"&&i.props.closeMenuOnScroll(s)&&i.props.onMenuClose()},i.onCompositionStart=function(){i.isComposing=!0},i.onCompositionEnd=function(){i.isComposing=!1},i.onTouchStart=function(s){var c=s.touches,f=c&&c.item(0);f&&(i.initialTouchX=f.clientX,i.initialTouchY=f.clientY,i.userIsDragging=!1)},i.onTouchMove=function(s){var c=s.touches,f=c&&c.item(0);if(f){var d=Math.abs(f.clientX-i.initialTouchX),h=Math.abs(f.clientY-i.initialTouchY),p=5;i.userIsDragging=d>p||h>p}},i.onTouchEnd=function(s){i.userIsDragging||(i.controlRef&&!i.controlRef.contains(s.target)&&i.menuListRef&&!i.menuListRef.contains(s.target)&&i.blurInput(),i.initialTouchX=0,i.initialTouchY=0)},i.onControlTouchEnd=function(s){i.userIsDragging||i.onControlMouseDown(s)},i.onClearIndicatorTouchEnd=function(s){i.userIsDragging||i.onClearIndicatorMouseDown(s)},i.onDropdownIndicatorTouchEnd=function(s){i.userIsDragging||i.onDropdownIndicatorMouseDown(s)},i.handleInputChange=function(s){var c=i.props.inputValue,f=s.currentTarget.value;i.setState({inputIsHiddenAfterUpdate:!1}),i.onInputChange(f,{action:"input-change",prevInputValue:c}),i.props.menuIsOpen||i.onMenuOpen()},i.onInputFocus=function(s){i.props.onFocus&&i.props.onFocus(s),i.setState({inputIsHiddenAfterUpdate:!1,isFocused:!0}),(i.openAfterFocus||i.props.openMenuOnFocus)&&i.openMenu("first"),i.openAfterFocus=!1},i.onInputBlur=function(s){var c=i.props.inputValue;if(i.menuListRef&&i.menuListRef.contains(document.activeElement)){i.inputRef.focus();return}i.props.onBlur&&i.props.onBlur(s),i.onInputChange("",{action:"input-blur",prevInputValue:c}),i.onMenuClose(),i.setState({focusedValue:null,isFocused:!1})},i.onOptionHover=function(s){if(!(i.blockOptionHover||i.state.focusedOption===s)){var c=i.getFocusableOptions(),f=c.indexOf(s);i.setState({focusedOption:s,focusedOptionId:f>-1?i.getFocusedOptionId(s):null})}},i.shouldHideSelectedOptions=function(){return dP(i.props)},i.onValueInputFocus=function(s){s.preventDefault(),s.stopPropagation(),i.focus()},i.onKeyDown=function(s){var c=i.props,f=c.isMulti,d=c.backspaceRemovesValue,h=c.escapeClearsValue,p=c.inputValue,m=c.isClearable,y=c.isDisabled,w=c.menuIsOpen,g=c.onKeyDown,v=c.tabSelectsValue,b=c.openMenuOnFocus,C=i.state,S=C.focusedOption,P=C.focusedValue,k=C.selectValue;if(!y&&!(typeof g=="function"&&(g(s),s.defaultPrevented))){switch(i.blockOptionHover=!0,s.key){case"ArrowLeft":if(!f||p)return;i.focusValue("previous");break;case"ArrowRight":if(!f||p)return;i.focusValue("next");break;case"Delete":case"Backspace":if(p)return;if(P)i.removeValue(P);else{if(!d)return;f?i.popValue():m&&i.clearValue()}break;case"Tab":if(i.isComposing||s.shiftKey||!w||!v||!S||b&&i.isOptionSelected(S,k))return;i.selectOption(S);break;case"Enter":if(s.keyCode===229)break;if(w){if(!S||i.isComposing)return;i.selectOption(S);break}return;case"Escape":w?(i.setState({inputIsHiddenAfterUpdate:!1}),i.onInputChange("",{action:"menu-close",prevInputValue:p}),i.onMenuClose()):m&&h&&i.clearValue();break;case" ":if(p)return;if(!w){i.openMenu("first");break}if(!S)return;i.selectOption(S);break;case"ArrowUp":w?i.focusOption("up"):i.openMenu("last");break;case"ArrowDown":w?i.focusOption("down"):i.openMenu("first");break;case"PageUp":if(!w)return;i.focusOption("pageup");break;case"PageDown":if(!w)return;i.focusOption("pagedown");break;case"Home":if(!w)return;i.focusOption("first");break;case"End":if(!w)return;i.focusOption("last");break;default:return}s.preventDefault()}},i.state.instancePrefix="react-select-"+(i.props.instanceId||++$U),i.state.selectValue=ub(r.value),r.menuIsOpen&&i.state.selectValue.length){var o=i.getFocusableOptionsWithIds(),a=i.buildFocusableOptions(),l=a.indexOf(i.state.selectValue[0]);i.state.focusableOptionsWithIds=o,i.state.focusedOption=a[l],i.state.focusedOptionId=Rp(o,a[l])}return i}return XB(n,[{key:"componentDidMount",value:function(){this.startListeningComposition(),this.startListeningToTouch(),this.props.closeMenuOnScroll&&document&&document.addEventListener&&document.addEventListener("scroll",this.onScroll,!0),this.props.autoFocus&&this.focusInput(),this.props.menuIsOpen&&this.state.focusedOption&&this.menuListRef&&this.focusedOptionRef&&db(this.menuListRef,this.focusedOptionRef),gU()&&this.setState({isAppleDevice:!0})}},{key:"componentDidUpdate",value:function(i){var o=this.props,a=o.isDisabled,l=o.menuIsOpen,s=this.state.isFocused;(s&&!a&&i.isDisabled||s&&l&&!i.menuIsOpen)&&this.focusInput(),s&&a&&!i.isDisabled?this.setState({isFocused:!1},this.onMenuClose):!s&&!a&&i.isDisabled&&this.inputRef===document.activeElement&&this.setState({isFocused:!0}),this.menuListRef&&this.focusedOptionRef&&this.scrollToFocusedOptionOnUpdate&&(db(this.menuListRef,this.focusedOptionRef),this.scrollToFocusedOptionOnUpdate=!1)}},{key:"componentWillUnmount",value:function(){this.stopListeningComposition(),this.stopListeningToTouch(),document.removeEventListener("scroll",this.onScroll,!0)}},{key:"onMenuOpen",value:function(){this.props.onMenuOpen()}},{key:"onMenuClose",value:function(){this.onInputChange("",{action:"menu-close",prevInputValue:this.props.inputValue}),this.props.onMenuClose()}},{key:"onInputChange",value:function(i,o){this.props.onInputChange(i,o)}},{key:"focusInput",value:function(){this.inputRef&&this.inputRef.focus()}},{key:"blurInput",value:function(){this.inputRef&&this.inputRef.blur()}},{key:"openMenu",value:function(i){var o=this,a=this.state,l=a.selectValue,s=a.isFocused,c=this.buildFocusableOptions(),f=i==="first"?0:c.length-1;if(!this.props.isMulti){var d=c.indexOf(l[0]);d>-1&&(f=d)}this.scrollToFocusedOptionOnUpdate=!(s&&this.menuListRef),this.setState({inputIsHiddenAfterUpdate:!1,focusedValue:null,focusedOption:c[f],focusedOptionId:this.getFocusedOptionId(c[f])},function(){return o.onMenuOpen()})}},{key:"focusValue",value:function(i){var o=this.state,a=o.selectValue,l=o.focusedValue;if(this.props.isMulti){this.setState({focusedOption:null});var s=a.indexOf(l);l||(s=-1);var c=a.length-1,f=-1;if(a.length){switch(i){case"previous":s===0?f=0:s===-1?f=c:f=s-1;break;case"next":s>-1&&s<c&&(f=s+1);break}this.setState({inputIsHidden:f!==-1,focusedValue:a[f]})}}}},{key:"focusOption",value:function(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"first",o=this.props.pageSize,a=this.state.focusedOption,l=this.getFocusableOptions();if(l.length){var s=0,c=l.indexOf(a);a||(c=-1),i==="up"?s=c>0?c-1:l.length-1:i==="down"?s=(c+1)%l.length:i==="pageup"?(s=c-o,s<0&&(s=0)):i==="pagedown"?(s=c+o,s>l.length-1&&(s=l.length-1)):i==="last"&&(s=l.length-1),this.scrollToFocusedOptionOnUpdate=!0,this.setState({focusedOption:l[s],focusedValue:null,focusedOptionId:this.getFocusedOptionId(l[s])})}}},{key:"getTheme",value:function(){return this.props.theme?typeof this.props.theme=="function"?this.props.theme(Lp):J(J({},Lp),this.props.theme):Lp}},{key:"getCommonProps",value:function(){var i=this.clearValue,o=this.cx,a=this.getStyles,l=this.getClassNames,s=this.getValue,c=this.selectOption,f=this.setValue,d=this.props,h=d.isMulti,p=d.isRtl,m=d.options,y=this.hasValue();return{clearValue:i,cx:o,getStyles:a,getClassNames:l,getValue:s,hasValue:y,isMulti:h,isRtl:p,options:m,selectOption:c,selectProps:d,setValue:f,theme:this.getTheme()}}},{key:"hasValue",value:function(){var i=this.state.selectValue;return i.length>0}},{key:"hasOptions",value:function(){return!!this.getFocusableOptions().length}},{key:"isClearable",value:function(){var i=this.props,o=i.isClearable,a=i.isMulti;return o===void 0?a:o}},{key:"isOptionDisabled",value:function(i,o){return lP(this.props,i,o)}},{key:"isOptionSelected",value:function(i,o){return cP(this.props,i,o)}},{key:"filterOption",value:function(i,o){return uP(this.props,i,o)}},{key:"formatOptionLabel",value:function(i,o){if(typeof this.props.formatOptionLabel=="function"){var a=this.props.inputValue,l=this.state.selectValue;return this.props.formatOptionLabel(i,{context:o,inputValue:a,selectValue:l})}else return this.getOptionLabel(i)}},{key:"formatGroupLabel",value:function(i){return this.props.formatGroupLabel(i)}},{key:"startListeningComposition",value:function(){document&&document.addEventListener&&(document.addEventListener("compositionstart",this.onCompositionStart,!1),document.addEventListener("compositionend",this.onCompositionEnd,!1))}},{key:"stopListeningComposition",value:function(){document&&document.removeEventListener&&(document.removeEventListener("compositionstart",this.onCompositionStart),document.removeEventListener("compositionend",this.onCompositionEnd))}},{key:"startListeningToTouch",value:function(){document&&document.addEventListener&&(document.addEventListener("touchstart",this.onTouchStart,!1),document.addEventListener("touchmove",this.onTouchMove,!1),document.addEventListener("touchend",this.onTouchEnd,!1))}},{key:"stopListeningToTouch",value:function(){document&&document.removeEventListener&&(document.removeEventListener("touchstart",this.onTouchStart),document.removeEventListener("touchmove",this.onTouchMove),document.removeEventListener("touchend",this.onTouchEnd))}},{key:"renderInput",value:function(){var i=this.props,o=i.isDisabled,a=i.isSearchable,l=i.inputId,s=i.inputValue,c=i.tabIndex,f=i.form,d=i.menuIsOpen,h=i.required,p=this.getComponents(),m=p.Input,y=this.state,w=y.inputIsHidden,g=y.ariaSelection,v=this.commonProps,b=l||this.getElementId("input"),C=J(J(J({"aria-autocomplete":"list","aria-expanded":d,"aria-haspopup":!0,"aria-errormessage":this.props["aria-errormessage"],"aria-invalid":this.props["aria-invalid"],"aria-label":this.props["aria-label"],"aria-labelledby":this.props["aria-labelledby"],"aria-required":h,role:"combobox","aria-activedescendant":this.state.isAppleDevice?void 0:this.state.focusedOptionId||""},d&&{"aria-controls":this.getElementId("listbox")}),!a&&{"aria-readonly":!0}),this.hasValue()?(g==null?void 0:g.action)==="initial-input-focus"&&{"aria-describedby":this.getElementId("live-region")}:{"aria-describedby":this.getElementId("placeholder")});return a?x.createElement(m,ee({},v,{autoCapitalize:"none",autoComplete:"off",autoCorrect:"off",id:b,innerRef:this.getInputRef,isDisabled:o,isHidden:w,onBlur:this.onInputBlur,onChange:this.handleInputChange,onFocus:this.onInputFocus,spellCheck:"false",tabIndex:c,form:f,type:"text",value:s},C)):x.createElement(rU,ee({id:b,innerRef:this.getInputRef,onBlur:this.onInputBlur,onChange:gu,onFocus:this.onInputFocus,disabled:o,tabIndex:c,inputMode:"none",form:f,value:""},C))}},{key:"renderPlaceholderOrValue",value:function(){var i=this,o=this.getComponents(),a=o.MultiValue,l=o.MultiValueContainer,s=o.MultiValueLabel,c=o.MultiValueRemove,f=o.SingleValue,d=o.Placeholder,h=this.commonProps,p=this.props,m=p.controlShouldRenderValue,y=p.isDisabled,w=p.isMulti,g=p.inputValue,v=p.placeholder,b=this.state,C=b.selectValue,S=b.focusedValue,P=b.isFocused;if(!this.hasValue()||!m)return g?null:x.createElement(d,ee({},h,{key:"placeholder",isDisabled:y,isFocused:P,innerProps:{id:this.getElementId("placeholder")}}),v);if(w)return C.map(function(_,T){var $=_===S,I="".concat(i.getOptionLabel(_),"-").concat(i.getOptionValue(_));return x.createElement(a,ee({},h,{components:{Container:l,Label:s,Remove:c},isFocused:$,isDisabled:y,key:I,index:T,removeProps:{onClick:function(){return i.removeValue(_)},onTouchEnd:function(){return i.removeValue(_)},onMouseDown:function(j){j.preventDefault()}},data:_}),i.formatOptionLabel(_,"value"))});if(g)return null;var k=C[0];return x.createElement(f,ee({},h,{data:k,isDisabled:y}),this.formatOptionLabel(k,"value"))}},{key:"renderClearIndicator",value:function(){var i=this.getComponents(),o=i.ClearIndicator,a=this.commonProps,l=this.props,s=l.isDisabled,c=l.isLoading,f=this.state.isFocused;if(!this.isClearable()||!o||s||!this.hasValue()||c)return null;var d={onMouseDown:this.onClearIndicatorMouseDown,onTouchEnd:this.onClearIndicatorTouchEnd,"aria-hidden":"true"};return x.createElement(o,ee({},a,{innerProps:d,isFocused:f}))}},{key:"renderLoadingIndicator",value:function(){var i=this.getComponents(),o=i.LoadingIndicator,a=this.commonProps,l=this.props,s=l.isDisabled,c=l.isLoading,f=this.state.isFocused;if(!o||!c)return null;var d={"aria-hidden":"true"};return x.createElement(o,ee({},a,{innerProps:d,isDisabled:s,isFocused:f}))}},{key:"renderIndicatorSeparator",value:function(){var i=this.getComponents(),o=i.DropdownIndicator,a=i.IndicatorSeparator;if(!o||!a)return null;var l=this.commonProps,s=this.props.isDisabled,c=this.state.isFocused;return x.createElement(a,ee({},l,{isDisabled:s,isFocused:c}))}},{key:"renderDropdownIndicator",value:function(){var i=this.getComponents(),o=i.DropdownIndicator;if(!o)return null;var a=this.commonProps,l=this.props.isDisabled,s=this.state.isFocused,c={onMouseDown:this.onDropdownIndicatorMouseDown,onTouchEnd:this.onDropdownIndicatorTouchEnd,"aria-hidden":"true"};return x.createElement(o,ee({},a,{innerProps:c,isDisabled:l,isFocused:s}))}},{key:"renderMenu",value:function(){var i=this,o=this.getComponents(),a=o.Group,l=o.GroupHeading,s=o.Menu,c=o.MenuList,f=o.MenuPortal,d=o.LoadingMessage,h=o.NoOptionsMessage,p=o.Option,m=this.commonProps,y=this.state.focusedOption,w=this.props,g=w.captureMenuScroll,v=w.inputValue,b=w.isLoading,C=w.loadingMessage,S=w.minMenuHeight,P=w.maxMenuHeight,k=w.menuIsOpen,_=w.menuPlacement,T=w.menuPosition,$=w.menuPortalTarget,I=w.menuShouldBlockScroll,M=w.menuShouldScrollIntoView,j=w.noOptionsMessage,F=w.onMenuScrollToTop,D=w.onMenuScrollToBottom;if(!k)return null;var z=function(V,H){var G=V.type,W=V.data,Q=V.isDisabled,te=V.isSelected,de=V.label,ae=V.value,Fe=y===W,qe=Q?void 0:function(){return i.onOptionHover(W)},Ye=Q?void 0:function(){return i.selectOption(W)},Mi="".concat(i.getElementId("option"),"-").concat(H),Pt={id:Mi,onClick:Ye,onMouseMove:qe,onMouseOver:qe,tabIndex:-1,role:"option","aria-selected":i.state.isAppleDevice?void 0:te};return x.createElement(p,ee({},m,{innerProps:Pt,data:W,isDisabled:Q,isSelected:te,key:Mi,label:de,type:G,value:ae,isFocused:Fe,innerRef:Fe?i.getFocusedOptionRef:void 0}),i.formatOptionLabel(V.data,"menu"))},R;if(this.hasOptions())R=this.getCategorizedOptions().map(function(L){if(L.type==="group"){var V=L.data,H=L.options,G=L.index,W="".concat(i.getElementId("group"),"-").concat(G),Q="".concat(W,"-heading");return x.createElement(a,ee({},m,{key:W,data:V,options:H,Heading:l,headingProps:{id:Q,data:L.data},label:i.formatGroupLabel(L.data)}),L.options.map(function(te){return z(te,"".concat(G,"-").concat(te.index))}))}else if(L.type==="option")return z(L,"".concat(L.index))});else if(b){var O=C({inputValue:v});if(O===null)return null;R=x.createElement(d,m,O)}else{var A=j({inputValue:v});if(A===null)return null;R=x.createElement(h,m,A)}var N={minMenuHeight:S,maxMenuHeight:P,menuPlacement:_,menuPosition:T,menuShouldScrollIntoView:M},B=x.createElement(DV,ee({},m,N),function(L){var V=L.ref,H=L.placerProps,G=H.placement,W=H.maxHeight;return x.createElement(s,ee({},m,N,{innerRef:V,innerProps:{onMouseDown:i.onMenuMouseDown,onMouseMove:i.onMenuMouseMove},isLoading:b,placement:G}),x.createElement(cU,{captureEnabled:g,onTopArrive:F,onBottomArrive:D,lockEnabled:I},function(Q){return x.createElement(c,ee({},m,{innerRef:function(de){i.getMenuListRef(de),Q(de)},innerProps:{role:"listbox","aria-multiselectable":m.isMulti,id:i.getElementId("listbox")},isLoading:b,maxHeight:W,focusedOption:y}),R)}))});return $||T==="fixed"?x.createElement(f,ee({},m,{appendTo:$,controlElement:this.controlRef,menuPlacement:_,menuPosition:T}),B):B}},{key:"renderFormField",value:function(){var i=this,o=this.props,a=o.delimiter,l=o.isDisabled,s=o.isMulti,c=o.name,f=o.required,d=this.state.selectValue;if(f&&!this.hasValue()&&!l)return x.createElement(fU,{name:c,onFocus:this.onValueInputFocus});if(!(!c||l))if(s)if(a){var h=d.map(function(y){return i.getOptionValue(y)}).join(a);return x.createElement("input",{name:c,type:"hidden",value:h})}else{var p=d.length>0?d.map(function(y,w){return x.createElement("input",{key:"i-".concat(w),name:c,type:"hidden",value:i.getOptionValue(y)})}):x.createElement("input",{name:c,type:"hidden",value:""});return x.createElement("div",null,p)}else{var m=d[0]?this.getOptionValue(d[0]):"";return x.createElement("input",{name:c,type:"hidden",value:m})}}},{key:"renderLiveRegion",value:function(){var i=this.commonProps,o=this.state,a=o.ariaSelection,l=o.focusedOption,s=o.focusedValue,c=o.isFocused,f=o.selectValue,d=this.getFocusableOptions();return x.createElement(QW,ee({},i,{id:this.getElementId("live-region"),ariaSelection:a,focusedOption:l,focusedValue:s,isFocused:c,selectValue:f,focusableOptions:d,isAppleDevice:this.state.isAppleDevice}))}},{key:"render",value:function(){var i=this.getComponents(),o=i.Control,a=i.IndicatorsContainer,l=i.SelectContainer,s=i.ValueContainer,c=this.props,f=c.className,d=c.id,h=c.isDisabled,p=c.menuIsOpen,m=this.state.isFocused,y=this.commonProps=this.getCommonProps();return x.createElement(l,ee({},y,{className:f,innerProps:{id:d,onKeyDown:this.onKeyDown},isDisabled:h,isFocused:m}),this.renderLiveRegion(),x.createElement(o,ee({},y,{innerRef:this.getControlRef,innerProps:{onMouseDown:this.onControlMouseDown,onTouchEnd:this.onControlTouchEnd},isDisabled:h,isFocused:m,menuIsOpen:p}),x.createElement(s,ee({},y,{isDisabled:h}),this.renderPlaceholderOrValue(),this.renderInput()),x.createElement(a,ee({},y,{isDisabled:h}),this.renderClearIndicator(),this.renderLoadingIndicator(),this.renderIndicatorSeparator(),this.renderDropdownIndicator())),this.renderMenu(),this.renderFormField())}}],[{key:"getDerivedStateFromProps",value:function(i,o){var a=o.prevProps,l=o.clearFocusValueOnUpdate,s=o.inputIsHiddenAfterUpdate,c=o.ariaSelection,f=o.isFocused,d=o.prevWasFocused,h=o.instancePrefix,p=i.options,m=i.value,y=i.menuIsOpen,w=i.inputValue,g=i.isMulti,v=ub(m),b={};if(a&&(m!==a.value||p!==a.options||y!==a.menuIsOpen||w!==a.inputValue)){var C=y?OU(i,v):[],S=y?_b(dc(i,v),"".concat(h,"-option")):[],P=l?TU(o,v):null,k=jU(o,C),_=Rp(S,k);b={selectValue:v,focusedOption:k,focusedOptionId:_,focusableOptionsWithIds:S,focusedValue:P,clearFocusValueOnUpdate:!1}}var T=s!=null&&i!==a?{inputIsHidden:s,inputIsHiddenAfterUpdate:void 0}:{},$=c,I=f&&d;return f&&!I&&($={value:kl(g,v,v[0]||null),options:v,action:"initial-input-focus"},I=!d),(c==null?void 0:c.action)==="initial-input-focus"&&($=null),J(J(J({},b),T),{},{prevProps:i,ariaSelection:$,prevWasFocused:I})}}]),n}(x.Component);fP.defaultProps=PU;var IU=x.forwardRef(function(e,t){var n=qB(e);return x.createElement(fP,ee({ref:t},n))}),Yd=IU;const MU=E.div`
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
`,AU=E.label`
  font-size: 14px;
  color: #666;
  margin-bottom: 5px;
`,DU=({cityOptions:e,selectedCity:t,onChange:n,onInputChange:r})=>u.jsxs(MU,{children:[u.jsx(AU,{children:"Місто"}),u.jsx(Yd,{options:e,onInputChange:r,onChange:n,placeholder:"Почніть вводити місто...",value:t,noOptionsMessage:()=>"Введіть назву міста"})]}),LU=E.div`
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
`,RU=E.label`
  font-size: 14px;
  color: #666;
  margin-bottom: 5px;
`,FU=({options:e=[],value:t,onChange:n,selectedCity:r})=>u.jsxs(LU,{children:[u.jsx(RU,{children:"Спосіб доставки"}),u.jsx(Yd,{options:e,placeholder:"Оберіть спосіб доставки...",isDisabled:!r,value:e.find(i=>i.value===t)||null,onChange:i=>n(i.value)})]}),Pb=E.div`
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
`,Ob=E.label`
  font-size: 14px;
  color: #666;
  margin-bottom: 5px;
`,zU=({deliveryMethod:e,officeOptions:t,selectedOffice:n,selectedUkrOffice:r,setSelectedOffice:i,setSelectedUkrOffice:o})=>e==="nova"?u.jsxs(Pb,{children:[u.jsx(Ob,{children:"Відділення Нової пошти"}),u.jsx(Yd,{options:t,onChange:a=>i(a),value:n,placeholder:"Оберіть відділення..."})]}):e==="ukr"?u.jsxs(Pb,{children:[u.jsx(Ob,{children:"Адреса доставки (Укрпошта)"}),u.jsx("input",{type:"text",value:r,onChange:a=>o(a.target.value),placeholder:"Наприклад:  вул. Шевченка, 10, індекс 01001",style:{padding:"8px 12px",border:"1px solid #c6c5c5",borderRadius:"4px",outline:"none"}})]}):null,NU=E.div`
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
`;const BU=E.button`
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
`,VU=E.ul`
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
`,WU=E.li`
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
`,UU=E.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 6px;
  border: 1px solid #eee;
  background-color: #f9f9f9;
`,HU=E.div`
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
`,GU=E.div`
  text-align: center;
  width: 100px;
 
`,qU=E.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 2px;
`,YU=E.span`
  font-size: 18px;
  font-weight: 600;
  color: ${({$discount:e})=>"#111"};
`,XU=E.span`
  font-size: 13px;
  color: #999;
  text-decoration: line-through;
`,KU=E.span`
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
`,QU=E.div`
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
`;const ZU=E.div`
  display: flex;
  flex-direction: column;
  /* gap: 30px; */
  text-align: left;

  @media screen and (min-width: 1200px) {
    flex-direction: row;
    align-items: flex-start;
  }
`,JU=E.div`
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
`;const eH=E.div`
  display: flex;
  align-items: center;
  gap: 12px;

  padding: 18px 2px 28px;

  font-size: 16px;
     color: var(--black-color);
`,tH=E.input`
  width: 20px;
  height: 20px;

  accent-color: #5b4637;
  cursor: pointer;

  flex-shrink: 0;
`,nH=E.label`
  font-size: 16px;
  line-height: 1.4;

      color: var(--black-color);
  cursor: pointer;
`,rH=({cartItems:e,totalAmount:t,totalQuantity:n,isFormValid:r,handleSubmit:i,noCall:o,setNoCall:a})=>u.jsxs(NU,{children:[u.jsx("h3",{children:"Ваше замовлення"}),u.jsx(VU,{children:e.map((l,s)=>{var p,m;const c=l.new_price&&l.new_price<l.price,f=c?l.new_price:l.price,d=c?Math.round((l.price-l.new_price)/l.price*100):0,h=l.available!==!1?f*(l.quantity||1):0;return u.jsxs(WU,{children:[u.jsx(UU,{src:((m=(p=l.images)==null?void 0:p[0])==null?void 0:m.url)||ur,alt:l.name}),u.jsxs(HU,{children:[u.jsx("p",{className:"item-name",children:l.name}),u.jsxs("p",{className:"item-details",children:[l.quantity," шт. × ",l.price," грн"]})]}),u.jsx(GU,{children:u.jsxs(qU,{children:[u.jsxs(YU,{$discount:c,children:[h.toLocaleString()," грн"]}),c&&u.jsxs(u.Fragment,{children:[u.jsxs(XU,{children:[(l.price*(l.quantity||1)).toLocaleString()," грн"]}),u.jsxs(KU,{children:["-",d,"%"]})]})]})})]},`${l.id}-${s}`)})}),u.jsxs("div",{className:"summary-row",children:[u.jsxs("span",{children:["Товари (",n,")"]}),u.jsxs("span",{children:[t," грн"]})]}),u.jsxs("div",{className:"summary-row",children:[u.jsx("span",{children:"Доставка"}),u.jsx("span",{children:"За тарифами перевізника"})]}),u.jsx("hr",{}),u.jsxs("div",{className:"total",children:[u.jsx("span",{children:"Всього до сплати:"}),u.jsxs("span",{children:[t," грн"]})]}),u.jsxs(eH,{children:[u.jsx(tH,{type:"checkbox",id:"noCall",checked:o,onChange:l=>a(l.target.checked)}),u.jsx(nH,{htmlFor:"noCall",children:"Не передзвонювати"})]}),u.jsx(BU,{type:"submit",disabled:!r,onClick:i,style:{opacity:r?1:.5,cursor:r?"pointer":"not-allowed"},children:"Підтвердити замовлення"}),!r&&u.jsx("p",{style:{color:"#888",fontSize:"12px",marginTop:"10px",textAlign:"center"},children:"Заповніть всі поля правильно, щоб продовжити"})]});var pP={exports:{}};function iH(e){return e&&typeof e=="object"&&"default"in e?e.default:e}var Fp=iH(x),oH=Ru;function aH(e,t){for(var n=Object.getOwnPropertyNames(t),r=0;r<n.length;r++){var i=n[r],o=Object.getOwnPropertyDescriptor(t,i);o&&o.configurable&&e[i]===void 0&&Object.defineProperty(e,i,o)}return e}function Fm(){return(Fm=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function sH(e,t){e.prototype=Object.create(t.prototype),aH(e.prototype.constructor=e,t)}function lH(e,t){if(e==null)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],0<=t.indexOf(n)||(i[n]=e[n]);return i}function Hi(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var cH=function(e,t,n,r,i,o,a,l){if(!e){var s;if(t===void 0)s=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var c=[n,r,i,o,a,l],f=0;(s=new Error(t.replace(/%s/g,function(){return c[f++]}))).name="Invariant Violation"}throw s.framesToPop=1,s}},Tb=cH;function jb(e,t,n){if("selectionStart"in e&&"selectionEnd"in e)e.selectionStart=t,e.selectionEnd=n;else{var r=e.createTextRange();r.collapse(!0),r.moveStart("character",t),r.moveEnd("character",n-t),r.select()}}function uH(e){var t=0,n=0;if("selectionStart"in e&&"selectionEnd"in e)t=e.selectionStart,n=e.selectionEnd;else{var r=document.selection.createRange();r.parentElement()===e&&(t=-r.moveStart("character",-e.value.length),n=-r.moveEnd("character",-e.value.length))}return{start:t,end:n,length:n-t}}var dH={9:"[0-9]",a:"[A-Za-z]","*":"[A-Za-z0-9]"},fH="_";function $b(e,t,n){var r="",i="",o=null,a=[];if(t===void 0&&(t=fH),n==null&&(n=dH),!e||typeof e!="string")return{maskChar:t,formatChars:n,mask:null,prefix:null,lastEditablePosition:null,permanents:[]};var l=!1;return e.split("").forEach(function(s){l=!l&&s==="\\"||(l||!n[s]?(a.push(r.length),r.length===a.length-1&&(i+=s)):o=r.length+1,r+=s,!1)}),{maskChar:t,formatChars:n,prefix:i,mask:r,lastEditablePosition:o,permanents:a}}function qt(e,t){return e.permanents.indexOf(t)!==-1}function Xd(e,t,n){var r=e.mask,i=e.formatChars;if(!n)return!1;if(qt(e,t))return r[t]===n;var o=i[r[t]];return new RegExp(o).test(n)}function Ib(e,t){return t.split("").every(function(n,r){return qt(e,r)||!Xd(e,r,n)})}function Ta(e,t){var n=e.maskChar,r=e.prefix;if(!n){for(;t.length>r.length&&qt(e,t.length-1);)t=t.slice(0,t.length-1);return t.length}for(var i=r.length,o=t.length;o>=r.length;o--){var a=t[o];if(!qt(e,o)&&Xd(e,o,a)){i=o+1;break}}return i}function hP(e,t){return Ta(e,t)===e.mask.length}function Jn(e,t){var n=e.maskChar,r=e.mask,i=e.prefix;if(!n){for((t=zm(e,"",t,0)).length<i.length&&(t=i);t.length<r.length&&qt(e,t.length);)t+=r[t.length];return t}if(t)return zm(e,Jn(e,""),t,0);for(var o=0;o<r.length;o++)qt(e,o)?t+=r[o]:t+=n;return t}function pH(e,t,n,r){var i=n+r,o=e.maskChar,a=e.mask,l=e.prefix,s=t.split("");if(o)return s.map(function(f,d){return d<n||i<=d?f:qt(e,d)?a[d]:o}).join("");for(var c=i;c<s.length;c++)qt(e,c)&&(s[c]="");return n=Math.max(l.length,n),s.splice(n,i-n),t=s.join(""),Jn(e,t)}function zm(e,t,n,r){var i=e.mask,o=e.maskChar,a=e.prefix,l=n.split(""),s=hP(e,t);return!o&&r>t.length&&(t+=i.slice(t.length,r)),l.every(function(c){for(;p=c,qt(e,h=r)&&p!==i[h];){if(r>=t.length&&(t+=i[r]),f=c,d=r,o&&qt(e,d)&&f===o)return!0;if(++r>=i.length)return!1}var f,d,h,p;return!Xd(e,r,c)&&c!==o||(r<t.length?t=o||s||r<a.length?t.slice(0,r)+c+t.slice(r+1):(t=t.slice(0,r)+c+t.slice(r),Jn(e,t)):o||(t+=c),++r<i.length)}),t}function hH(e,t,n,r){var i=e.mask,o=e.maskChar,a=n.split(""),l=r;return a.every(function(s){for(;f=s,qt(e,c=r)&&f!==i[c];)if(++r>=i.length)return!1;var c,f;return(Xd(e,r,s)||s===o)&&r++,r<i.length}),r-l}function mH(e,t){for(var n=t;0<=n;--n)if(!qt(e,n))return n;return null}function qa(e,t){for(var n=e.mask,r=t;r<n.length;++r)if(!qt(e,r))return r;return null}function zp(e){return e||e===0?e+"":""}function gH(e,t,n,r,i){var o=e.mask,a=e.prefix,l=e.lastEditablePosition,s=t,c="",f=0,d=0,h=Math.min(i.start,n.start);return n.end>i.start?d=(f=hH(e,r,c=s.slice(i.start,n.end),h))?i.length:0:s.length<r.length&&(d=r.length-s.length),s=r,d&&(d===1&&!i.length&&(h=i.start===n.start?qa(e,n.start):mH(e,n.start)),s=pH(e,s,h,d)),s=zm(e,s,c,h),(h+=f)>=o.length?h=o.length:h<a.length&&!f?h=a.length:h>=a.length&&h<l&&f&&(h=qa(e,h)),c||(c=null),{value:s=Jn(e,s),enteredString:c,selection:{start:h,end:h}}}function vH(){var e=new RegExp("windows","i"),t=new RegExp("phone","i"),n=navigator.userAgent;return e.test(n)&&t.test(n)}function Ot(e){return typeof e=="function"}function yH(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame}function mP(){return window.cancelAnimationFrame||window.webkitCancelRequestAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame}function Mb(e){return(mP()?yH():function(){return setTimeout(e,1e3/60)})(e)}function Np(e){(mP()||clearTimeout)(e)}var xH=function(e){function t(r){var i=e.call(this,r)||this;i.focused=!1,i.mounted=!1,i.previousSelection=null,i.selectionDeferId=null,i.saveSelectionLoopDeferId=null,i.saveSelectionLoop=function(){i.previousSelection=i.getSelection(),i.saveSelectionLoopDeferId=Mb(i.saveSelectionLoop)},i.runSaveSelectionLoop=function(){i.saveSelectionLoopDeferId===null&&i.saveSelectionLoop()},i.stopSaveSelectionLoop=function(){i.saveSelectionLoopDeferId!==null&&(Np(i.saveSelectionLoopDeferId),i.saveSelectionLoopDeferId=null,i.previousSelection=null)},i.getInputDOMNode=function(){if(!i.mounted)return null;var m=oH.findDOMNode(Hi(Hi(i))),y=typeof window<"u"&&m instanceof window.Element;if(m&&!y)return null;if(m.nodeName!=="INPUT"&&(m=m.querySelector("input")),!m)throw new Error("react-input-mask: inputComponent doesn't contain input node");return m},i.getInputValue=function(){var m=i.getInputDOMNode();return m?m.value:null},i.setInputValue=function(m){var y=i.getInputDOMNode();y&&(i.value=m,y.value=m)},i.setCursorToEnd=function(){var m=Ta(i.maskOptions,i.value),y=qa(i.maskOptions,m);y!==null&&i.setCursorPosition(y)},i.setSelection=function(m,y,w){w===void 0&&(w={});var g=i.getInputDOMNode(),v=i.isFocused();g&&v&&(w.deferred||jb(g,m,y),i.selectionDeferId!==null&&Np(i.selectionDeferId),i.selectionDeferId=Mb(function(){i.selectionDeferId=null,jb(g,m,y)}),i.previousSelection={start:m,end:y,length:Math.abs(y-m)})},i.getSelection=function(){return uH(i.getInputDOMNode())},i.getCursorPosition=function(){return i.getSelection().start},i.setCursorPosition=function(m){i.setSelection(m,m)},i.isFocused=function(){return i.focused},i.getBeforeMaskedValueChangeConfig=function(){var m=i.maskOptions,y=m.mask,w=m.maskChar,g=m.permanents,v=m.formatChars;return{mask:y,maskChar:w,permanents:g,alwaysShowMask:!!i.props.alwaysShowMask,formatChars:v}},i.isInputAutofilled=function(m,y,w,g){var v=i.getInputDOMNode();try{if(v.matches(":-webkit-autofill"))return!0}catch{}return!i.focused||g.end<w.length&&y.end===m.length},i.onChange=function(m){var y=Hi(Hi(i)).beforePasteState,w=Hi(Hi(i)).previousSelection,g=i.props.beforeMaskedValueChange,v=i.getInputValue(),b=i.value,C=i.getSelection();i.isInputAutofilled(v,C,b,w)&&(b=Jn(i.maskOptions,""),w={start:0,end:0,length:0}),y&&(w=y.selection,b=y.value,C={start:w.start+v.length,end:w.start+v.length,length:0},v=b.slice(0,w.start)+v+b.slice(w.end),i.beforePasteState=null);var S=gH(i.maskOptions,v,C,b,w),P=S.enteredString,k=S.selection,_=S.value;if(Ot(g)){var T=g({value:_,selection:k},{value:b,selection:w},P,i.getBeforeMaskedValueChangeConfig());_=T.value,k=T.selection}i.setInputValue(_),Ot(i.props.onChange)&&i.props.onChange(m),i.isWindowsPhoneBrowser?i.setSelection(k.start,k.end,{deferred:!0}):i.setSelection(k.start,k.end)},i.onFocus=function(m){var y=i.props.beforeMaskedValueChange,w=i.maskOptions,g=w.mask,v=w.prefix;if(i.focused=!0,i.mounted=!0,g){if(i.value)Ta(i.maskOptions,i.value)<i.maskOptions.mask.length&&i.setCursorToEnd();else{var b=Jn(i.maskOptions,v),C=Jn(i.maskOptions,b),S=Ta(i.maskOptions,C),P=qa(i.maskOptions,S),k={start:P,end:P};if(Ot(y)){var _=y({value:C,selection:k},{value:i.value,selection:null},null,i.getBeforeMaskedValueChangeConfig());C=_.value,k=_.selection}var T=C!==i.getInputValue();T&&i.setInputValue(C),T&&Ot(i.props.onChange)&&i.props.onChange(m),i.setSelection(k.start,k.end)}i.runSaveSelectionLoop()}Ot(i.props.onFocus)&&i.props.onFocus(m)},i.onBlur=function(m){var y=i.props.beforeMaskedValueChange,w=i.maskOptions.mask;if(i.stopSaveSelectionLoop(),i.focused=!1,w&&!i.props.alwaysShowMask&&Ib(i.maskOptions,i.value)){var g="";Ot(y)&&(g=y({value:g,selection:null},{value:i.value,selection:i.previousSelection},null,i.getBeforeMaskedValueChangeConfig()).value);var v=g!==i.getInputValue();v&&i.setInputValue(g),v&&Ot(i.props.onChange)&&i.props.onChange(m)}Ot(i.props.onBlur)&&i.props.onBlur(m)},i.onMouseDown=function(m){if(!i.focused&&document.addEventListener){i.mouseDownX=m.clientX,i.mouseDownY=m.clientY,i.mouseDownTime=new Date().getTime();var y=function w(g){if(document.removeEventListener("mouseup",w),i.focused){var v=Math.abs(g.clientX-i.mouseDownX),b=Math.abs(g.clientY-i.mouseDownY),C=Math.max(v,b),S=new Date().getTime()-i.mouseDownTime;(C<=10&&S<=200||C<=5&&S<=300)&&i.setCursorToEnd()}};document.addEventListener("mouseup",y)}Ot(i.props.onMouseDown)&&i.props.onMouseDown(m)},i.onPaste=function(m){Ot(i.props.onPaste)&&i.props.onPaste(m),m.defaultPrevented||(i.beforePasteState={value:i.getInputValue(),selection:i.getSelection()},i.setInputValue(""))},i.handleRef=function(m){i.props.children==null&&Ot(i.props.inputRef)&&i.props.inputRef(m)};var o=r.mask,a=r.maskChar,l=r.formatChars,s=r.alwaysShowMask,c=r.beforeMaskedValueChange,f=r.defaultValue,d=r.value;i.maskOptions=$b(o,a,l),f==null&&(f=""),d==null&&(d=f);var h=zp(d);if(i.maskOptions.mask&&(s||h)&&(h=Jn(i.maskOptions,h),Ot(c))){var p=r.value;r.value==null&&(p=f),h=c({value:h,selection:null},{value:p=zp(p),selection:null},null,i.getBeforeMaskedValueChangeConfig()).value}return i.value=h,i}sH(t,e);var n=t.prototype;return n.componentDidMount=function(){this.mounted=!0,this.getInputDOMNode()&&(this.isWindowsPhoneBrowser=vH(),this.maskOptions.mask&&this.getInputValue()!==this.value&&this.setInputValue(this.value))},n.componentDidUpdate=function(){var r=this.previousSelection,i=this.props,o=i.beforeMaskedValueChange,a=i.alwaysShowMask,l=i.mask,s=i.maskChar,c=i.formatChars,f=this.maskOptions,d=a||this.isFocused(),h=this.props.value!=null,p=h?zp(this.props.value):this.value,m=r?r.start:null;if(this.maskOptions=$b(l,s,c),this.maskOptions.mask){!f.mask&&this.isFocused()&&this.runSaveSelectionLoop();var y=this.maskOptions.mask&&this.maskOptions.mask!==f.mask;if(f.mask||h||(p=this.getInputValue()),(y||this.maskOptions.mask&&(p||d))&&(p=Jn(this.maskOptions,p)),y){var w=Ta(this.maskOptions,p);(m===null||w<m)&&(m=hP(this.maskOptions,p)?w:qa(this.maskOptions,w))}!this.maskOptions.mask||!Ib(this.maskOptions,p)||d||h&&this.props.value||(p="");var g={start:m,end:m};if(Ot(o)){var v=o({value:p,selection:g},{value:this.value,selection:this.previousSelection},null,this.getBeforeMaskedValueChangeConfig());p=v.value,g=v.selection}this.value=p;var b=this.getInputValue()!==this.value;b?(this.setInputValue(this.value),this.forceUpdate()):y&&this.forceUpdate();var C=!1;g.start!=null&&g.end!=null&&(C=!r||r.start!==g.start||r.end!==g.end),(C||b)&&this.setSelection(g.start,g.end)}else f.mask&&(this.stopSaveSelectionLoop(),this.forceUpdate())},n.componentWillUnmount=function(){this.mounted=!1,this.selectionDeferId!==null&&Np(this.selectionDeferId),this.stopSaveSelectionLoop()},n.render=function(){var r,i=this.props,o=(i.mask,i.alwaysShowMask,i.maskChar,i.formatChars,i.inputRef,i.beforeMaskedValueChange,i.children),a=lH(i,["mask","alwaysShowMask","maskChar","formatChars","inputRef","beforeMaskedValueChange","children"]);if(o){Ot(o)||Tb(!1);var l=["onChange","onPaste","onMouseDown","onFocus","onBlur","value","disabled","readOnly"],s=Fm({},a);l.forEach(function(f){return delete s[f]}),r=o(s),l.filter(function(f){return r.props[f]!=null&&r.props[f]!==a[f]}).length&&Tb(!1)}else r=Fp.createElement("input",Fm({ref:this.handleRef},a));var c={onFocus:this.onFocus,onBlur:this.onBlur};return this.maskOptions.mask&&(a.disabled||a.readOnly||(c.onChange=this.onChange,c.onPaste=this.onPaste,c.onMouseDown=this.onMouseDown),a.value!=null&&(c.value=this.value)),r=Fp.cloneElement(r,c)},t}(Fp.Component),bH=xH;pP.exports=bH;var wH=pP.exports;const SH=Ro(wH);E.div`
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
`;const Bp=E.div`
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
`,Vp=E.label`
  font-size: 14px;
  color: #666;
  margin-bottom: 5px;
`,Wp=E.input`
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
`;const Up=E.span`
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
`;const CH=({formData:e,setFormData:t,errors:n})=>{const r=i=>{const{name:o,value:a}=i.target;o==="phone"&&!a.startsWith("+38 (0")||t(l=>({...l,[o]:a}))};return u.jsxs(u.Fragment,{children:[u.jsx("h3",{children:"Контактні дані"}),u.jsxs(Bp,{children:[u.jsx(Vp,{children:"Прізвище та ім’я"}),u.jsx(Wp,{type:"text",name:"fullName",value:e.fullName,onChange:r,placeholder:"Прізвище Ім'я",autoComplete:"name"}),n.fullName&&u.jsx(Up,{children:n.fullName})]}),u.jsxs(Bp,{children:[u.jsx(Vp,{children:"Номер телефону"}),u.jsx(SH,{mask:"+38 (099) 999-99-99",maskChar:"_",name:"phone",autoComplete:"tel",value:e.phone,onChange:r,children:i=>u.jsx(Wp,{...i,type:"tel"})}),n.phone&&u.jsx(Up,{children:n.phone})]}),u.jsxs(Bp,{children:[u.jsx(Vp,{children:"E-mail"}),u.jsx(Wp,{type:"email",name:"email",value:e.email,onChange:r,placeholder:"email@example.com",autoComplete:"email"}),n.email&&u.jsx(Up,{children:n.email})]})]})},EH=({options:e,value:t,onChange:n,error:r})=>{const i=e.find(o=>o.value===t)||null;return u.jsxs("div",{style:{marginBottom:"20px"},children:[u.jsx("label",{style:{display:"block",marginBottom:"8px"},children:"Спосіб оплати"}),u.jsx(Yd,{options:e,value:i,onChange:o=>n(o==null?void 0:o.value),placeholder:"Оберіть спосіб оплати",styles:{control:o=>({...o,borderColor:r?"red":o.borderColor})}}),r&&u.jsx("span",{style:{color:"red",fontSize:"12px"},children:"Оберіть спосіб оплати"})]})},_H=e=>{if(!e)return"";const t=e.replace(/\D/g,"");return t.length!==10?e:`+38 (${t.slice(0,3)}) ${t.slice(3,6)}-${t.slice(6,8)}-${t.slice(8,10)}`},Ab=async(e,t,n)=>{if(!(e!=null&&e.documentId)||!t)return;const r=await fetch(`https://backenddidiv-production.up.railway.app/api/cart-items?filters[user][documentId][$eq]=${e.documentId}`,{headers:{Authorization:`Bearer ${t}`}});if(!r.ok)throw new Error("Не вдалося отримати кошик");const{data:i}=await r.json();await Promise.all(i.map(o=>fetch(`https://backenddidiv-production.up.railway.app/api/cart-items/${o.documentId}`,{method:"DELETE",headers:{Authorization:`Bearer ${t}`}}))),n(fr())},Db={}.VITE_NP_API_KEY,Lb="https://api.novaposhta.ua/v2.0/json/",kH=()=>{const e=Ge(L=>L.cart.items),t=et(),n=Lt(),r=localStorage.getItem("token"),i=x.useMemo(()=>{const L=localStorage.getItem("user");return L?JSON.parse(L):null},[]),[o,a]=x.useState({fullName:"",phone:"+38(0",email:"",city:"",postOffice:""}),[l,s]=x.useState(""),[c,f]=x.useState(null),[d,h]=x.useState(null),[p,m]=x.useState(null),[y,w]=x.useState(null),[g,v]=x.useState([]),[b,C]=x.useState([]),[S,P]=x.useState(null),[k,_]=x.useState(!1),T=x.useRef(!1);x.useEffect(()=>{!i||T.current||(T.current=!0,a({fullName:`${i.last_name||""} ${i.first_name||""}`.trim(),phone:_H(i.phone),email:i.email||""}))},[i]);const $=e.filter(L=>L.available!==!1&&L.stock!==0).reduce((L,V)=>L+(V.new_price??V.price)*V.quantity,0),I=e.filter(L=>L.available!==!1&&L.stock!==0),M=e.filter(L=>L.available!==!1&&L.stock!==0).reduce((L,V)=>L+V.quantity,0),F=(()=>{const L=new Date().getFullYear().toString().slice(-2),V=Date.now().toString().slice(-4),H=Math.floor(100+Math.random()*900);return`${L}${V}${H}`})();x.useEffect(()=>{if(l.length<2)return;const L=setTimeout(async()=>{try{const V=await fetch(Lb,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({apiKey:Db,modelName:"Address",calledMethod:"getCities",methodProperties:{FindByString:l}})});if(!V.ok)throw new Error(`HTTP помилка: ${V.status}`);const H=await V.json();H.success&&Array.isArray(H.data)?v(H.data.map(G=>({value:G.Ref,label:G.Description}))):(console.warn("API Нової Пошти повернуло помилку або порожній список міст:",H.errors),v([]))}catch(V){console.error("Не вдалося завантажити міста:",V)}},500);return()=>clearTimeout(L)},[l]),x.useEffect(()=>{if(!c||d!=="nova")return;(async()=>{try{const V=await fetch(Lb,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({apiKey:Db,modelName:"AddressGeneral",calledMethod:"getWarehouses",methodProperties:{CityRef:c.value}})});if(!V.ok)throw new Error(`HTTP помилка: ${V.status}`);const H=await V.json();H.success&&Array.isArray(H.data)?C(H.data.map(G=>({value:G.Ref,label:G.Description}))):(console.warn("API Нової Пошти повернуло помилку або порожній список відділень:",H.errors),C([]))}catch(V){console.error("Не вдалося завантажити відділення Нової Пошти:",V)}})()},[c,d]);const D=L=>{f(L),a(V=>({...V,city:(L==null?void 0:L.label)||"",postOffice:""})),h(null),m(null),w(null)},z=()=>{const L={};return o.fullName.trim().split(" ").length<2&&(L.fullName="Введіть прізвище та ім'я"),/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(o.email)||(L.email="Некоректний email"),o.phone.replace(/\D/g,"").length<12&&(L.phone="Номер неповний"),c||(L.city=!0),d==="nova"&&!p&&(L.postOffice=!0),d==="ukr"&&!y&&(L.postOffice=!0),d||(L.delivery=!0),S||(L.payment=!0),L},R=x.useMemo(z,[o,d,p,y,c,S]),O=Object.keys(R).length===0&&e.length>0,A=async L=>{if(L.preventDefault(),!S){alert("Оберіть спосіб оплати");return}const V={"Content-Type":"application/json"};r&&(V.Authorization=`Bearer ${r}`);try{if(!(await fetch("https://backenddidiv-production.up.railway.app/api/orders",{method:"POST",headers:V,body:JSON.stringify({data:{name:o.fullName,phone:o.phone,email:o.email,city:o.city,date:new Date().toISOString(),products:e==null?void 0:e.map(W=>{var Q;return{id:W==null?void 0:W.id,name:W==null?void 0:W.name,quantity:W==null?void 0:W.quantity,price:(W==null?void 0:W.new_price)??W.price,image:(Q=W==null?void 0:W.images)==null?void 0:Q[0].url,slug:W==null?void 0:W.slug}}),status_order:"pending",order_number:F,no_call:k,...(i==null?void 0:i.documentId)&&{user:i.documentId},payment_method:S==="liqpay"?"Онлайн (LiqPay)":S==="cod"?"Післяплата":S==="bank_transfer"?"Оплата за реквізитами":"",delivery_method:d==="nova"?"Нова Пошта":d==="ukr"?"УкрПошта":"Самовивіз",delivery_address:d==="nova"?p==null?void 0:p.label:d==="ukr"?y:"Самовивіз"}})})).ok)throw new Error("Не вдалося створити замовлення");for(const W of e){const Q=Math.max(0,W.stock-W.quantity);(await fetch(`https://backenddidiv-production.up.railway.app/api/products/${W.documentId}`,{method:"PUT",headers:{"Content-Type":"application/json",...r&&{Authorization:`Bearer ${r}`}},body:JSON.stringify({data:{stock:Q,...Q===0&&{sold_date:new Date().toISOString()}}})})).ok||console.error(`Не вдалося оновити stock товару ${W.name}`)}if(S==="liqpay"){const W=await fetch("https://backenddidiv-production.up.railway.app/api/liqpay/create",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({amount:$,order_number:F})}),{data:Q,signature:te}=await W.json();await Ab(i,r,n);const de=document.createElement("form");de.method="POST",de.action="https://www.liqpay.ua/api/3/checkout",de.innerHTML=`
        <input type="hidden" name="data" value="${Q}" />
        <input type="hidden" name="signature" value="${te}" />
      `,document.body.appendChild(de),de.requestSubmit();return}const G={...o,name:o.fullName,city:c.label,deliveryMethod:d==="nova"?"Нова Пошта":d==="ukr"?"УкрПошта":"Самовивіз",address:d==="nova"?p==null?void 0:p.label:d==="ukr"?y:"Самовивіз",products:e==null?void 0:e.map(W=>({id:W.id,name:W.name,quantity:W.quantity,price:W.new_price??W.price})),total:$,order_number:F,delivery_address:d==="nova"?p==null?void 0:p.label:d==="ukr"?y:"Самовивіз",payment_method:S==="liqpay"?"Онлайн (LiqPay)":S==="cod"?"Післяплата":S==="bank_transfer"?"Оплата за реквізитами":""};await Ab(i,r,n),t("/order-confirmation",{state:{order:G}})}catch(H){console.error(H),alert("Помилка оформлення")}},N=x.useMemo(()=>[{value:"nova",label:"Нова пошта"},{value:"ukr",label:"Укрпошта"}],[]),B=[{value:"liqpay",label:"Онлайн оплата (LiqPay)"},{value:"cod",label:"Післяплата"},{value:"bank_transfer",label:"Оплата за реквізитами"}];return u.jsx(QU,{children:u.jsxs(ZU,{children:[u.jsxs(JU,{children:[u.jsx(CH,{formData:o,setFormData:a,errors:R}),u.jsx(DU,{cityOptions:g,selectedCity:c,onChange:D,onInputChange:s}),u.jsx(FU,{options:N,value:d,onChange:h,selectedCity:c}),u.jsx(zU,{deliveryMethod:d,officeOptions:b,selectedOffice:p,selectedUkrOffice:y,setSelectedOffice:m,setSelectedUkrOffice:w}),u.jsx(EH,{options:B,value:S,onChange:P,error:R.payment})]}),u.jsx(rH,{cartItems:I,totalAmount:$,totalQuantity:M,isFormValid:O,handleSubmit:A,setNoCall:_,noCall:k})]})})},PH=E.div`
font-family: var(--main-font);
  max-width: 800px;
  margin: 40px auto;
  padding: 40px 20px;
  background: #ffffff;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  text-align: center;
  font-family: 'Inter', sans-serif;
`,OH=E.h1`
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
`,TH=E.div`
font-family: var(--second-font);
  background: #f8f9fa;
  border-radius: 12px;
  padding: 24px;
  margin: 30px 0;
  text-align: left;
  border: 1px solid #edf2f7;
`,jH=E.h3`
  font-size: 18px;
  font-weight: 500;
  color: #1a1a1a;
  margin-bottom: 16px;
  border-bottom: 2px solid #e2e8f0;
  padding-bottom: 8px;
`,$H=E.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 20px;
`,IH=E.li`
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
`;const MH=E.div`
  display: flex;
  gap: 15px;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 20px;
`,Rb=E.button`
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
`,AH=()=>{var h,p;const e=et(),t=Wn(),[n]=bw(),r=Lt(),i=(h=t.state)==null?void 0:h.order,o=n.get("orderId"),[a,l]=x.useState(i||null),[s,c]=x.useState(!i);x.useEffect(()=>{r(fr())},[r]),x.useEffect(()=>{i||(o?fetch(`https://backenddidiv-production.up.railway.app/api/orders?filters[order_number][$eq]=${o}&populate=*`).then(m=>m.json()).then(m=>{var y;((y=m.data)==null?void 0:y.length)>0&&l(m.data[0]),c(!1)}).catch(()=>c(!1)):c(!1))},[o,i]);const d=((a==null?void 0:a.products)??[]).reduce((m,y)=>m+Number(y.new_price??y.price)*(y.quantity||1),0);return s?u.jsx("div",{children:"Завантаження..."}):a?u.jsxs(PH,{children:[u.jsx(OH,{children:"Дякуємо за ваше замовлення!"}),u.jsxs(Qr,{children:["Ваше замовлення ",u.jsxs("strong",{children:["№",a.order_number]})," успішно прийняте."]}),u.jsx(Qr,{children:"Ми зв’яжемось з Вами в найближчий час"}),u.jsxs(TH,{children:[u.jsx(jH,{children:"Деталі замовлення:"}),u.jsx($H,{children:(p=a.products)==null?void 0:p.map(m=>u.jsxs(IH,{children:[u.jsxs("span",{className:"item-info",children:[m.name," (x",m.quantity,")"]}),u.jsxs("span",{className:"item-price",children:[(m.new_price??m.price)*(m.quantity||1)," грн"]})]},m.id))}),u.jsxs(Qr,{children:[u.jsx("strong",{children:"На суму:"})," ",d," грн."]}),u.jsxs(Qr,{children:[u.jsx("strong",{children:"Отрмувач:"})," ",a.name,", ",a.phone,"."]}),u.jsxs(Qr,{children:[u.jsx("strong",{children:"Спосіб доставки:"})," ",a.deliveryMethod,"."]}),u.jsxs(Qr,{children:[u.jsx("strong",{children:"Адреса отримання:"})," ",a.city,","," ",a.delivery_address,"."]}),u.jsxs(Qr,{children:[u.jsx("strong",{children:"Спосіб оплати:"})," ",a.payment_method,"."]})]}),u.jsxs(MH,{children:[u.jsx(Rb,{onClick:()=>e("/"),children:"Повернутися на головну"}),u.jsx(Rb,{onClick:()=>e("/catalog"),children:"Продовжити покупки"})]})]}):u.jsxs("div",{children:["Замовлення не знайдено",u.jsx("button",{onClick:()=>e("/"),children:"На головну"})]})},DH=E.section`
  background-color: var(--second-background);
`,LH=E.div`
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
`,RH=E.section`
  padding: 40px 0;
  background-color: #f9f9f980;
  border-radius: 12px;
  margin-bottom: 30px;
`,FH=E.h1`
  font-family: var(--main-font);
  font-size: 28px;
  color: var(--black-color);
  margin-bottom: 10px;

  @media screen and (min-width: 768px) {
    font-size: 42px;
  }
`,zH=E.p`

  font-size: 16px;
  color: #666;
`,NH=E.section`
  margin-bottom: 50px;
`,BH=E.p`
  font-family: var(--second-font);
  font-weight:400;
  font-size: 18px;
  line-height: 1.6;
  max-width: 800px;
  margin: 0 auto 40px;
  color: #444;
`,VH=E.section`
  margin-bottom: 60px;
`,WH=E.h2`
  margin-bottom: 30px;
`,UH=E.div`
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
`,HH=()=>u.jsxs(DH,{children:[u.jsxs(LH,{children:[u.jsxs(RH,{children:[u.jsx(FH,{children:"Про Дідів Хлів"}),u.jsx(zH,{children:"Даємо друге життя якісним велозапчастинам"})]}),u.jsxs(NH,{children:[u.jsx(BH,{children:"Бізнес створений з переконанням, що обладнання може бути доступним. Ми спеціалізуємося на розборі цікавих і унікальних велосипедів, усі запчастини перевірені нами. Стараємося пропонувати тільки найкраще від Shimano, Sram, Campagnolo та інших світових брендів."}),u.jsx(v_,{})]}),u.jsxs(VH,{children:[u.jsx(WH,{children:"Наша майстерня"}),u.jsxs(UH,{children:[u.jsx(Pl,{color:"#e2e2e2",children:"Фото майстерні"}),u.jsx(Pl,{color:"#d1d1d1",children:"Процес діагностики"}),u.jsx(Pl,{color:"#bcbcbc",children:"Склад запчастин"}),u.jsx(Pl,{color:"#a8a8a8",children:"Готові велосипеди"})]})]})]})," "]}),GH=()=>{const{pathname:e}=Wn();return x.useEffect(()=>{window.scrollTo(0,0)},[e]),null},qH=E.section`
  background-color:  var(--second-background);
  padding: 40px 0;
  min-height: 80vh;
`,YH=E.div`
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
`,XH=E.h1`
  font-family: var(--main-font); 
  font-size: 32px;
  color: var(--black-color);
  margin-bottom: 10px;
  text-transform: uppercase;
`,KH=E.p`
  color: #585555;
  margin-bottom: 40px;
`,QH=E.div`
font-family: var(--second-font);
font-weight: 400;
  display: grid;
  gap: 40px;
  text-align: left;

  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    align-items: start;
  }
`,ZH=E.div`
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
`,JH=E.div`
  background: #ffffff;
  padding: 40px 30px;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%; 
`,eG=E.h2`
  margin-bottom: 15px;
  color: var(--brown-color);
  font-size: 24px;
  font-family: var(--main-font);
`,tG=E.p`
  color: #666;
  font-size: 14px;
  line-height: 1.6;
  margin-bottom: 30px;
`,nG=E.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
  
  @media screen and (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`,Fb=E.a`
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
`;const rG=E.div`
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

 
`,iG=()=>u.jsx(qH,{children:u.jsxs(YH,{children:[u.jsx(XH,{children:"Контакти"}),u.jsx(KH,{children:"Зв’яжіться з нами для консультації або замовлення"}),u.jsxs(QH,{children:[u.jsxs(ZH,{children:[u.jsxs(Ol,{children:[u.jsx("h3",{children:"Адреса"}),u.jsx("p",{children:"вул. Казармена 6Г, Київ, Україна"}),u.jsx("a",{style:{color:"black",fontWeight:"500",fontSize:"0.9rem",display:"inline-block",marginTop:"5px",cursor:"pointer"},href:"https://www.google.com/maps/search/?api=1&query=вул.+Казармена+6Г,+Київ,+Україна",target:"_blank",rel:"noopener noreferrer",children:"📍 Показати на карті"})]}),u.jsxs(Ol,{children:[u.jsx("h3",{children:"Телефон"}),u.jsx("p",{children:"+38 (097) 123-45-67"})]}),u.jsxs(Ol,{children:[u.jsx("h3",{children:"Email"}),u.jsx("p",{children:"didivhliv.com"})]}),u.jsxs(Ol,{children:[u.jsx("h3",{children:"Графік роботи"}),u.jsx("p",{children:"З 11:00 - 20:00"}),u.jsx("p",{children:"Вихідні: Пн, Чт"})]})]}),u.jsxs(JH,{children:[u.jsx(eG,{children:"Ми в соцмережах"}),u.jsx(tG,{children:"Слідкуйте за нашими новинами, новими надходженнями та крутими вело-поїздками у зручному для вас форматі."}),u.jsxs(nG,{children:[u.jsxs(Fb,{href:"https://www.instagram.com/didivxliv?igsh=MXhsNWRjdW5rajYwdQ==",target:"_blank",rel:"noopener noreferrer",children:[u.jsx("svg",{width:"20px",children:u.jsx("use",{href:`${xn}#icon-instagram`})}),u.jsx("span",{children:"Instagram"})]}),u.jsxs(Fb,{href:"https://t.me/didivxliv",target:"_blank",rel:"noopener noreferrer",children:[u.jsx("svg",{width:"20px",children:u.jsx("use",{href:`${xn}#icon-telegram`})}),u.jsx("span",{children:"Telegram"})]})]}),u.jsx(rG,{children:"Приєднуйся до спільноти!"})]})]})]})}),oG=E.section`
  background-color:  var(--second-background);
`,aG=E.div`
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
  
`,sG=E.div`
 
     width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  
`,lG=E.h1`
  /* flex: 1;
   text-align:center; */

    font-size: 25px;
font-family: var(--main-font);
color: var( --black-color);
text-transform: uppercase;
 @media screen and (min-width: 360px) {
  font-size: 32px;
  }
`,cG=E.div`
  position: relative;
  display: inline-block;
    /* flex-shrink: 0; */
`,uG=E.div`
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
`,dG=E.div`
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
`,fG=E.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  padding:10px;

`,pG=E.div`
  padding: 10px;
      display: flex;
    align-content: center;
    align-items: center;
        justify-content: space-between;
`,hG=E.p`
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
`;const mG=E.div.attrs({className:"card-buttons"})`
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
`,gP=E.div`
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
`,gG=E.button`
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
`,vG=E.div`
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
`,vP=E.div`
  height: 80vh;
          display: flex;
          flex-direction:
          column;
          justify-content: center;
          align-items: center;
          font-size: 30px;
`,yP=E(ge)`
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
  
`,yG=E.section`
  background-color: var(--second-background);
  /* min-height: 100vh; */
`,xG=E.div`
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
`,bG=E.div`
width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`,wG=E.h1`

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

`,SG=E.div`
  width: 100%;
  display: grid;
  gap: 15px;

  grid-template-columns: 1fr;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
  }
`,CG=E.div`
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
`;const xP=E.div`
  position: relative;
`,EG=E.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
 padding: 10px;
`,_G=E.p`
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
`,kG=E.div`
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
`;const PG=E.div.attrs({className:"card-buttons"})`
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
`;const OG=E.div`
  position: relative;
  display: inline-block;
  display:flex;
  
`,TG=E.div`
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
`,jG=E.button`
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
`,$G=()=>{const[e,t]=x.useState([]),[n,r]=x.useState(!0),i=Ge(S=>S.favorites.items),o=Ge(S=>S.cart.items),[a,l]=x.useState(!1),[s,c]=x.useState("date"),[f,d]=x.useState("asc"),[h,p]=x.useState(1),[m,y]=x.useState(1),w=et(),g=Lt(),v=x.useRef(null);x.useEffect(()=>{const S=P=>{v.current&&!v.current.contains(P.target)&&l(!1)};return document.addEventListener("mousedown",S),()=>{document.removeEventListener("mousedown",S)}},[]),x.useEffect(()=>{window.scrollTo({top:0,behavior:"smooth"})},[h]),x.useEffect(()=>{(async()=>{const P=new Date,k=new Date;k.setDate(P.getDate()-7);const _=k.toISOString();try{r(!0);const T=await fetch(`https://backenddidiv-production.up.railway.app/api/products?populate=*&filters[createdAt][$gte]=${_}&pagination[page]=${h}&pagination[pageSize]=24`);if(!T.ok)throw new Error(`HTTP error! Status: ${T.status}`);const $=await T.json();t($.data),y($.meta.pagination.pageCount)}catch(T){console.error("Помилка при завантаженні продуктів:",T)}finally{r(!1)}})()},[h]);const b=x.useMemo(()=>{const S=[...e],P=k=>k.new_price&&k.new_price<k.price?k.new_price:k.price;switch(s){case"name":return S.sort((k,_)=>f==="asc"?k.name.localeCompare(_.name):_.name.localeCompare(k.name));case"price":return S.sort((k,_)=>{const T=P(k),$=P(_);return f==="asc"?T-$:$-T});case"date":return S.sort((k,_)=>f==="asc"?new Date(k.createdAt)-new Date(_.createdAt):new Date(_.createdAt)-new Date(k.createdAt));default:return S}},[s,e,f]),C=(S,P)=>{P.stopPropagation();const k=i.some(_=>_.id===(S==null?void 0:S.id));Ti(S,k,g,X)};return n?u.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"100vw",height:"100vh"},children:u.jsx(ji,{height:100,width:100,radius:5,color:"var(--orange-color)",ariaLabel:"ball-triangle-loading",wrapperStyle:{},wrapperClass:"",visible:!0})}):b.length===0?u.jsxs(vP,{children:[u.jsx("p",{style:{textAlign:"center"},children:"Нажаль, нічого нового за останній тиждень"}),u.jsxs(yP,{to:"/catalog",children:[u.jsx("p",{children:"Весь каталог"}),u.jsx(Uu,{size:24})]})]}):u.jsxs(oG,{children:[u.jsxs(aG,{children:[u.jsx(Un,{autoClose:1500}),u.jsxs(JC,{children:[u.jsx(ge,{to:"/",children:"Головна"})," / ",u.jsx(ge,{to:"/catalog/new",children:"Новинки"})]}),u.jsxs(sG,{children:[u.jsx(lG,{children:"Нові товари "}),u.jsxs(cG,{ref:v,children:[u.jsxs(gG,{onClick:()=>l(S=>!S),children:["Сортування",u.jsx(Wu,{strokeWidth:.9,size:22})]}),a&&u.jsxs(vG,{children:[u.jsx(Gi,{onClick:()=>{c("name"),d("asc"),l(!1)},children:"А-Я"}),u.jsx(Gi,{onClick:()=>{c("name"),d("desc"),l(!1)},children:"Я-А"}),u.jsx(Gi,{onClick:()=>{c("price"),d("asc"),l(!1)},children:"Ціна ↑"}),u.jsx(Gi,{onClick:()=>{c("price"),d("desc"),l(!1)},children:"Ціна ↓"}),u.jsx(Gi,{onClick:()=>{c("date"),d("desc"),l(!1)},children:"Спочатку новіші"}),u.jsx(Gi,{onClick:()=>{c("date"),d("asc"),l(!1)},children:"Спочатку старіші"})]})]})]}),u.jsx(uG,{children:b.map(S=>{var z,R,O;const P=i.some(A=>A.id===S.id),k=(S==null?void 0:S.available)??!0,_=(S==null?void 0:S.stock)===0,T=o.find(A=>A.id===S.id),I=(T?T.quantity:0)>=(S.stock||0),M=S.new_price&&S.new_price<S.price,j=M?S.new_price:S.price,F=M?Math.round((S.price-S.new_price)/S.price*100):0,D=async(A,N)=>{if(N.stopPropagation(),I){X.error("Товар уже у кошику");return}await Ho(A,1,g,X)};return u.jsxs(dG,{onClick:()=>w(`/product/${S.slug??S.id}`),$soldOut:_,children:[!k&&u.jsx(Qg,{children:"Бронь"}),u.jsx(Zg,{children:"Новинка"}),u.jsxs(xP,{children:[_&&u.jsx(Yu,{children:"Продано"}),u.jsx(fG,{src:((R=(z=S.images)==null?void 0:z[0])==null?void 0:R.url)||ur,alt:S.name})]}),u.jsx(hG,{children:S.name}),u.jsxs(pG,{children:[u.jsx(Bd,{children:u.jsxs(Vd,{children:[u.jsxs(Wd,{$discount:M,children:[j==null?void 0:j.toLocaleString()," грн"]}),M&&u.jsxs(Ud,{children:[(O=S.price)==null?void 0:O.toLocaleString()," грн"]}),M&&u.jsxs(Hd,{children:["-",F,"%"]})]})}),u.jsxs(mG,{children:[k&&!_&&u.jsx(xu,{onClick:A=>D(S,A),children:u.jsx(Uo,{size:24,color:T?"var(--orange-color)":"black",strokeWidth:2})}),!_&&u.jsx(xu,{onClick:A=>C(S,A),children:u.jsx(Is,{size:24,fill:P?"#ff4d4f":"none",color:P?"#ff4d4f":"#000000",strokeWidth:P?1:2})})]})]})]},S.id)})}),u.jsxs(gP,{children:[u.jsx(yo,{onClick:()=>p(S=>Math.max(S-1,1)),disabled:h===1,children:"Назад"}),Array.from({length:m},(S,P)=>u.jsx(yo,{onClick:()=>p(P+1),active:h===P+1,children:P+1},P)),u.jsx(yo,{onClick:()=>p(S=>Math.min(S+1,m)),disabled:h===m,children:"Вперед"})]})]})," "]})},IG=()=>{const[e,t]=x.useState([]),[n,r]=x.useState(!0),[i,o]=x.useState(!1),[a,l]=x.useState("date"),[s,c]=x.useState("desc"),[f,d]=x.useState(1),h=24,p=et(),m=Lt(),y=Ge(_=>_.favorites.items),w=Ge(_=>_.cart.items),g=x.useRef(null);x.useEffect(()=>{const _=T=>{g.current&&!g.current.contains(T.target)&&o(!1)};return document.addEventListener("mousedown",_),()=>{document.removeEventListener("mousedown",_)}},[]),x.useEffect(()=>{(async()=>{const T="https://backenddidiv-production.up.railway.app";try{const I=await(await fetch(`${T}/api/products?filters[new_price][$notNull]=true&pagination[pageSize]=500&populate=*`)).json(),M=Date.now(),j=7*24*60*60*1e3,F=I.data.filter(D=>{if(D.stock>0||!D.sold_date)return!0;const z=new Date(D.sold_date).getTime();return M-z<j});t(F),r(!1)}catch($){console.log($)}})()},[]),x.useEffect(()=>{window.scrollTo({top:0,behavior:"smooth"})},[f]);const v=x.useMemo(()=>{const _=[...e];switch(a){case"name":return _.sort((T,$)=>s==="asc"?T.name.localeCompare($.name):$.name.localeCompare(T.name));case"price":return _.sort((T,$)=>s==="asc"?T.new_price-$.new_price:$.new_price-T.new_price);case"date":return _.sort((T,$)=>s==="asc"?new Date(T.createdAt)-new Date($.createdAt):new Date($.createdAt)-new Date(T.createdAt));default:return _}},[a,e,s]),b=f*h,C=b-h,S=v.slice(C,b),P=Math.ceil(e.length/h),k=(_,T)=>{T.stopPropagation();const $=y.some(I=>I.id===(_==null?void 0:_.id));Ti(_,$,m,X)};return n?u.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"100vw",height:"100vh"},children:u.jsx(ji,{height:100,width:100,radius:5,color:"var(--orange-color)",ariaLabel:"ball-triangle-loading",wrapperStyle:{},wrapperClass:"",visible:!0})}):e.length===0?u.jsxs(vP,{children:[u.jsx("p",{style:{textAlign:"center"},children:"Нажаль, поки знижок немає"}),u.jsxs(yP,{to:"/catalog",children:[u.jsx("p",{children:"Весь каталог"}),u.jsx(Uu,{size:24})]})]}):u.jsx(yG,{children:u.jsxs(xG,{children:[u.jsx(Un,{autoClose:1500}),u.jsxs(bG,{children:[u.jsx(wG,{children:"Акційні товари"}),u.jsxs(OG,{ref:g,children:[u.jsxs(jG,{onClick:()=>o(_=>!_),children:["Сортування",u.jsx(Wu,{strokeWidth:.9,size:22})]}),i&&u.jsxs(TG,{children:[u.jsx(qi,{onClick:()=>{l("name"),c("asc"),o(!1)},children:"А-Я"}),u.jsx(qi,{onClick:()=>{l("name"),c("desc"),o(!1)},children:"Я-А"}),u.jsx(qi,{onClick:()=>{l("price"),c("asc"),o(!1)},children:"Ціна ↑"}),u.jsx(qi,{onClick:()=>{l("price"),c("desc"),o(!1)},children:"Ціна ↓"}),u.jsx(qi,{onClick:()=>{l("date"),c("desc"),o(!1)},children:"Спочатку новіші"}),u.jsx(qi,{onClick:()=>{l("date"),c("asc"),o(!1)},children:"Спочатку старіші"})]})]})]}),u.jsx(SG,{children:S.map(_=>{var N,B;const T=_.new_price&&_.new_price<_.price,$=_!=null&&_.createdAt?Date.now()-new Date(_.createdAt).getTime()<7*24*60*60*1e3:!1,I=T?_.new_price:_.price,M=(_==null?void 0:_.available)??!0,j=(_==null?void 0:_.stock)===0,F=T?Math.round((_.price-_.new_price)/_.price*100):0,D=y.some(L=>L.id===_.id),z=w.find(L=>L.id===_.id),O=(z?z.quantity:0)>=(_.stock||0),A=async(L,V)=>{if(V.stopPropagation(),O){X.error("Товар уже у кошику");return}await Ho(_,1,m,X)};return u.jsxs(CG,{onClick:()=>p(`/product/${_.slug??_.id}`),style:{cursor:"pointer"},$soldOut:j,children:[" ",$&&u.jsx(Zg,{children:"Новинка"}),!M&&u.jsx(Qg,{children:"Бронь"}),u.jsxs(xP,{children:[j&&u.jsx(Yu,{children:"Продано"}),u.jsx(EG,{src:((B=(N=_.images)==null?void 0:N[0])==null?void 0:B.url)||"/nofoto.png"})]}),u.jsx(_G,{children:_.name}),u.jsxs(kG,{children:[u.jsx(Bd,{children:u.jsxs(Vd,{children:[u.jsxs(Wd,{$discount:T,children:[I==null?void 0:I.toLocaleString()," грн"]}),T&&u.jsxs(Ud,{children:[_.price.toLocaleString()," грн"]}),T&&u.jsxs(Hd,{children:["-",F,"%"]})]})}),u.jsxs(PG,{children:[M&&!j&&u.jsx(xu,{onClick:L=>A(_,L),children:u.jsx(Uo,{size:24,color:z?"var(--orange-color)":"black",strokeWidth:2})}),!j&&u.jsx(xu,{onClick:L=>k(_,L),children:u.jsx(Is,{size:24,fill:D?"#ff4d4f":"none",color:D?"#ff4d4f":"#000000",strokeWidth:D?1:2})})]})]})]},_.id)})}),v.length>h&&u.jsxs(gP,{children:[u.jsx(yo,{onClick:()=>d(_=>Math.max(_-1,1)),disabled:f===1,children:"Назад"}),Array.from({length:P},(_,T)=>u.jsx(yo,{onClick:()=>d(T+1),active:f===T+1,children:T+1},T)),u.jsx(yo,{onClick:()=>d(_=>Math.min(_+1,P)),disabled:f===P,children:"Вперед"})]})]})})},MG=E.div`
  position: fixed;
  inset: 0;
  background: rgba(25, 20, 16, 0.6);
  backdrop-filter: blur(4px);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  z-index: 999;
`,AG=E.div`
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
`,DG=E.button`
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
`,LG=E.h2`
  text-align: center;

  font-size: 30px;
  font-weight: 300;

  color: #312620;

  margin-bottom: 10px;

  @media screen and (min-width: 768px) {
    font-size: 42px;
  }
`,RG=E.p`
  text-align: center;
  color: #8d837d;

  margin-bottom: 32px;
`,FG=E.div`
  display: flex;

  background: #efe8df;

  border-radius: 40px;

  padding: 5px;

  margin-bottom: 35px;
`,zb=E.button`
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
`,zG=E.button`
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
`,Nb=E.div`
  position: relative;
  width: 100%;
`,Bb=E.button`
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
`,NG=E.p`
  margin: 10px 0;
  color: #2e7d32;
  font-size: 14px;
  text-align: center;
`,BG=E.p`
  margin-top: 28px;

  text-align: center;

  color: #8b817a;

  font-size: 15px;

  span {
    color: #ff7a00;
    cursor: pointer;
    font-weight: 600;
  }
`,VG=E.p`
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
`,WG=async(e,t,n)=>{e.length&&await Promise.all(e.map(async r=>{const i=await fetch(`https://backenddidiv-production.up.railway.app/api/favorites?filters[product][documentId][$eq]=${r.documentId}&populate=user`,{headers:{Authorization:`Bearer ${t}`}});if(!i.ok){console.error(await i.json());return}const o=await i.json();if(o.data.length>0){const l=o.data[0],s=l.user||[];if(s.some(d=>d.documentId===n))return;const f=await fetch(`https://backenddidiv-production.up.railway.app/api/favorites/${l.documentId}`,{method:"PUT",headers:{Authorization:`Bearer ${t}`,"Content-Type":"application/json"},body:JSON.stringify({data:{user:[...s.map(d=>d.documentId),n]}})});f.ok||console.error(await f.json());return}const a=await fetch("https://backenddidiv-production.up.railway.app/api/favorites",{method:"POST",headers:{Authorization:`Bearer ${t}`,"Content-Type":"application/json"},body:JSON.stringify({data:{product:r.documentId,user:[n]}})});a.ok||console.error(await a.json())}))},UG=async(e,t,n)=>{e.length&&await Promise.all(e.map(async r=>{const i=await fetch(`https://backenddidiv-production.up.railway.app/api/cart-items?filters[user][documentId][$eq]=${n}&filters[product][documentId][$eq]=${r.documentId}`,{headers:{Authorization:`Bearer ${t}`}});if(!i.ok){console.error(await i.json());return}const o=await i.json();if(o.data.length>0){const l=o.data[0],s=await fetch(`https://backenddidiv-production.up.railway.app/api/cart-items/${l.documentId}`,{method:"PUT",headers:{Authorization:`Bearer ${t}`,"Content-Type":"application/json"},body:JSON.stringify({data:{quantity:r.quantity}})});s.ok||console.error(await s.json());return}const a=await fetch("https://backenddidiv-production.up.railway.app/api/cart-items",{method:"POST",headers:{Authorization:`Bearer ${t}`,"Content-Type":"application/json"},body:JSON.stringify({data:{product:r.documentId,user:n,quantity:r.quantity}})});a.ok||console.error(await a.json())}))},HG=async(e,t)=>{const n=await fetch(`https://backenddidiv-production.up.railway.app/api/cart-items?filters[user][documentId][$eq]=${t}&populate[product][populate]=*`,{headers:{Authorization:`Bearer ${e}`}});if(!n.ok)throw new Error("Не вдалося отримати кошик");return(await n.json()).data.map(i=>i.product?{...i.product,quantity:i.quantity}:null).filter(Boolean)},GG=({isOpen:e,onClose:t,mode:n,setMode:r,localFavorites:i,localCartItems:o})=>{const[a,l]=x.useState(!1),[s,c]=x.useState(!1),[f,d]=x.useState({first_name:"",last_name:"",email:"",password:"",confirmPassword:""}),[h,p]=x.useState({first_name:"",last_name:"",email:"",password:"",confirmPassword:""}),[m,y]=x.useState(!1),w=Lt();if(x.useEffect(()=>{const _=T=>{T.key==="Escape"&&t()};return window.addEventListener("keydown",_),()=>window.removeEventListener("keydown",_)},[t]),!e)return null;const g=_=>{const{name:T,value:$}=_.target;p(I=>({...I,[T]:$})),d(I=>({...I,[T]:""}))},v=_=>{_.target===_.currentTarget&&t()},b=async()=>{d({first_name:"",last_name:"",email:"",password:"",confirmPassword:""});const _=await fetch("https://backenddidiv-production.up.railway.app/api/auth/local",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({identifier:h.email,password:h.password})}),T=await _.json();if(!_.ok){d({email:"Неправильна електронна пошта або пароль",password:"Неправильна електронна пошта або пароль",confirmPassword:""});return}localStorage.setItem("token",T.jwt),localStorage.setItem("user",JSON.stringify(T.user)),await WG(i,T.jwt,T.user.documentId),await UG(o,T.jwt,T.user.documentId);const $=await HG(T.jwt,T.user.documentId);w(IC($)),t()},C=async()=>{var I,M,j,F,D,z;d({email:"",password:"",confirmPassword:""});const _=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;if(!h.first_name.trim()){d(R=>({...R,first_name:"Введіть ім'я"}));return}if(!h.last_name.trim()){d(R=>({...R,last_name:"Введіть прізвище"}));return}if(!h.email.trim()){d(R=>({...R,email:"Введіть електронну пошту"}));return}if(!_.test(h.email)){d(R=>({...R,email:"Введіть правильну електронну пошту"}));return}if(!h.password){d(R=>({...R,password:"Введіть пароль"}));return}if(h.password.length<6){d(R=>({...R,password:"Пароль має містити щонайменше 6 символів"}));return}if(h.password!==h.confirmPassword){d(R=>({...R,confirmPassword:"Паролі не співпадають"}));return}const T=await fetch("https://backenddidiv-production.up.railway.app/api/auth/local/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:h.email,email:h.email,password:h.password})}),$=await T.json();if(!T.ok){(M=(I=$.error)==null?void 0:I.message)!=null&&M.toLowerCase().includes("already")||(F=(j=$.error)==null?void 0:j.message)!=null&&F.toLowerCase().includes("taken")||(z=(D=$.error)==null?void 0:D.message)!=null&&z.toLowerCase().includes("email")?d(R=>({...R,email:"Ця пошта вже зареєстрована"})):d(R=>{var O;return{...R,email:((O=$.error)==null?void 0:O.message)||"Не вдалося зареєструватися"}});return}localStorage.setItem("token",$.jwt);try{const R=localStorage.getItem("token");localStorage.setItem("user",JSON.stringify($.user));const O=await fetch(`https://backenddidiv-production.up.railway.app/api/users/${$.user.id}`,{method:"PUT",headers:{Authorization:`Bearer ${R}`,"Content-Type":"application/json"},body:JSON.stringify({first_name:h.first_name,last_name:h.last_name})});if(!O.ok)throw new Error("Помилка оновлення");const A=await O.json();localStorage.setItem("user",JSON.stringify(A))}catch(R){console.error(R),alert("Не вдалося оновити дані")}t()},S=()=>{r("forgotPassword"),y(!1),d({first_name:"",last_name:"",email:"",password:"",confirmPassword:""})},P=_=>{r(_),d({email:"",password:"",confirmPassword:""})},k=async()=>{if(d({email:"",password:"",confirmPassword:""}),!h.email.trim()){d(T=>({...T,email:"Введіть електронну пошту"}));return}if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(h.email)){d(T=>({...T,email:"Введіть правильну електронну пошту"}));return}try{const T=await fetch("https://backenddidiv-production.up.railway.app/api/auth/forgot-password",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:h.email})}),$=await T.json();if(!T.ok){d(I=>{var M;return{...I,email:((M=$.error)==null?void 0:M.message)||"Не вдалося надіслати лист"}});return}y(!0)}catch(T){console.error(T),d($=>({...$,email:"Помилка з’єднання із сервером"}))}};return u.jsxs(u.Fragment,{children:[" ",u.jsx(Un,{autoClose:1500}),u.jsx(MG,{onClick:v,children:u.jsxs(AG,{children:[u.jsx(DG,{onClick:t,children:"×"}),u.jsx(LG,{children:n==="login"?"Вхід":n==="register"?"Реєстрація":"Відновлення пароля"}),u.jsx(RG,{children:n==="login"?"Увійдіть до свого акаунта":n==="register"?"Створіть новий акаунт":"Введіть email, щоб отримати посилання для відновлення пароля"}),u.jsxs(FG,{children:[u.jsx(zb,{active:n==="login",onClick:()=>P("login"),children:"Вхід"}),u.jsx(zb,{active:n==="register",onClick:()=>P("register"),children:"Реєстрація"})]}),n==="register"&&u.jsxs(u.Fragment,{children:[u.jsx(ya,{name:"first_name",value:h.first_name,onChange:g,placeholder:"Ім'я"}),f.first_name&&u.jsx(Tl,{children:f.first_name}),u.jsx(ya,{name:"last_name",value:h.last_name,onChange:g,placeholder:"Прізвище"}),f.last_name&&u.jsx(Tl,{children:f.last_name})]}),u.jsx(ya,{name:"email",type:"email",value:h.email,onChange:g,placeholder:"Email"}),n!=="forgotPassword"&&u.jsxs(u.Fragment,{children:[u.jsxs(Nb,{children:[u.jsx(ya,{name:"password",type:a?"text":"password",value:h.password,onChange:g,placeholder:"Пароль"}),u.jsx(Bb,{type:"button",onClick:()=>l(_=>!_),children:a?u.jsx(fi,{size:20}):u.jsx(pi,{size:20})})]}),f.password&&u.jsx(Tl,{children:f.password})]}),n==="register"&&u.jsxs(Nb,{children:[u.jsx(ya,{name:"confirmPassword",type:s?"text":"password",value:h.confirmPassword,onChange:g,placeholder:"Повторіть пароль"}),u.jsx(Bb,{type:"button",onClick:()=>c(_=>!_),children:s?u.jsx(fi,{size:20}):u.jsx(pi,{size:20})})]}),f.confirmPassword&&u.jsx(Tl,{children:f.confirmPassword}),n==="login"&&u.jsx(VG,{children:u.jsx("span",{onClick:S,children:"Забули пароль?"})}),n==="forgotPassword"&&m&&u.jsx(NG,{children:"Перевірте свою пошту. Ми надіслали вам посилання для відновлення пароля."}),u.jsx(zG,{disabled:n==="forgotPassword"&&m,onClick:n==="login"?b:n==="register"?C:k,children:n==="login"?"Увійти":n==="register"?"Зареєструватися":"Надіслати посилання"}),u.jsx(BG,{children:n==="login"?u.jsxs(u.Fragment,{children:["Немає акаунта?"," ",u.jsx("span",{onClick:()=>r("register"),children:"Зареєструватися"})]}):u.jsxs(u.Fragment,{children:["Вже є акаунт?"," ",u.jsx("span",{onClick:()=>r("login"),children:"Увійти"})]})})]})})," "]})},qG=({isLoggedIn:e,children:t})=>e?t:u.jsx(zO,{to:"/",replace:!0}),YG=E.main`
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

`,XG=E.section`
 flex: 1;
  display: flex;
  flex-direction: column;
`,KG=E.aside`
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
`,QG=E.div`
   display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 28px;
  min-width: 0;
  
`,ZG=E.div`
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
`,JG=E.div`
  min-width: 0;
  flex: 1;
`,eq=E.h3`
  margin-bottom: 4px;
`,tq=E.p`
  color: #777;
   overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  min-width: 0;
  width: 100%;
   flex: 1;
  
`,Vb=E.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`,jl=E(xw)`
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
`,nq=E.div`
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
`,rq=E.div`
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
`,iq=E.h2`
  margin: 0 0 14px;

  text-align: center;

  color:var(--black-color);
  font-family: var(--second-font);

  font-size: 28px;
  font-weight: 300;
`,oq=E.p`
  margin: 0 auto 32px;
   font-family: var(--second-font);

  max-width: 360px;

  text-align: center;

  color: #3c3734;

  font-size: 16px;
  line-height: 1.6;
`,aq=E.div`
  display: flex;
  gap: 14px;

  justify-content: center;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`,sq=E.button`
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
`,lq=E.button`
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
`,bP=({onClose:e,onConfirm:t})=>u.jsx(nq,{onClick:e,children:u.jsxs(rq,{onClick:n=>n.stopPropagation(),children:[u.jsx(iq,{children:"Вийти з акаунту?"}),u.jsx(oq,{children:"Ви впевнені, що хочете вийти з особистого кабінету?"}),u.jsxs(aq,{children:[u.jsx(sq,{onClick:e,children:"Скасувати"}),u.jsx(lq,{onClick:t,children:"Вийти"})]})]})}),cq=()=>{var c,f;const[e,t]=x.useState(""),[n,r]=x.useState(""),[i,o]=x.useState(!1),a=Lt(),l=et();x.useEffect(()=>{(async()=>{try{const h=localStorage.getItem("token"),m=await(await fetch("https://backenddidiv-production.up.railway.app/api/users/me",{headers:{Authorization:`Bearer ${h}`}})).json();t(m.first_name),r(m.email)}catch(h){console.error(h)}})()},[]);const s=async()=>{localStorage.removeItem("token"),localStorage.removeItem("user"),a(Ls()),a(fr()),await Nd.purge(),l("/",{replace:!0})};return u.jsxs(KG,{children:[i&&u.jsx(bP,{onClose:()=>o(!1),onConfirm:s}),u.jsxs(QG,{children:[u.jsx(ZG,{children:((f=(c=e||e)==null?void 0:c[0])==null?void 0:f.toUpperCase())||"?"}),u.jsxs(JG,{children:[u.jsx(eq,{children:e}),u.jsx(tq,{children:n})]})]}),u.jsxs(Vb,{children:[u.jsxs(Vb,{children:[u.jsx(jl,{to:"/account/profile",children:"Особисті дані"}),u.jsx(jl,{to:"/account/orders",children:"Замовлення"}),u.jsx(jl,{to:"/account/password",children:"Змінити пароль"})]}),u.jsx(jl,{as:"button",className:"logout",onClick:()=>o(!0),children:"Вийти"})]})]})};var iv={};iv.match=mq;iv.parse=wP;var uq=/(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,dq=/\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,fq=/^(?:(min|max)-)?(.+)/,pq=/(em|rem|px|cm|mm|in|pt|pc)?$/,hq=/(dpi|dpcm|dppx)?$/;function mq(e,t){return wP(e).some(function(n){var r=n.inverse,i=n.type==="all"||t.type===n.type;if(i&&r||!(i||r))return!1;var o=n.expressions.every(function(a){var l=a.feature,s=a.modifier,c=a.value,f=t[l];if(!f)return!1;switch(l){case"orientation":case"scan":return f.toLowerCase()===c.toLowerCase();case"width":case"height":case"device-width":case"device-height":c=Hb(c),f=Hb(f);break;case"resolution":c=Ub(c),f=Ub(f);break;case"aspect-ratio":case"device-aspect-ratio":case"device-pixel-ratio":c=Wb(c),f=Wb(f);break;case"grid":case"color":case"color-index":case"monochrome":c=parseInt(c,10)||1,f=parseInt(f,10)||0;break}switch(s){case"min":return f>=c;case"max":return f<=c;default:return f===c}});return o&&!r||!o&&r})}function wP(e){return e.split(",").map(function(t){t=t.trim();var n=t.match(uq),r=n[1],i=n[2],o=n[3]||"",a={};return a.inverse=!!r&&r.toLowerCase()==="not",a.type=i?i.toLowerCase():"all",o=o.match(/\([^\)]+\)/g)||[],a.expressions=o.map(function(l){var s=l.match(dq),c=s[1].toLowerCase().match(fq);return{modifier:c[1],feature:c[2],value:s[2]}}),a})}function Wb(e){var t=Number(e),n;return t||(n=e.match(/^(\d+)\s*\/\s*(\d+)$/),t=n[1]/n[2]),t}function Ub(e){var t=parseFloat(e),n=String(e).match(hq)[1];switch(n){case"dpcm":return t/2.54;case"dppx":return t*96;default:return t}}function Hb(e){var t=parseFloat(e),n=String(e).match(pq)[1];switch(n){case"em":return t*16;case"rem":return t*16;case"cm":return t*96/2.54;case"mm":return t*96/2.54/10;case"in":return t*96;case"pt":return t*72;case"pc":return t*72/12;default:return t}}var gq=iv.match,Gb=typeof window<"u"?window.matchMedia:null;function vq(e,t,n){var r=this,i;Gb&&!n&&(i=Gb.call(window,e)),i?(this.matches=i.matches,this.media=i.media,i.addListener(l)):(this.matches=gq(e,t),this.media=e),this.addListener=o,this.removeListener=a,this.dispose=s;function o(c){i&&i.addListener(c)}function a(c){i&&i.removeListener(c)}function l(c){r.matches=c.matches,r.media=c.media}function s(){i&&i.removeListener(l)}}function yq(e,t,n){return new vq(e,t,n)}var xq=yq;const bq=Ro(xq);var wq=/[A-Z]/g,Sq=/^ms-/,Hp={};function Cq(e){return"-"+e.toLowerCase()}function SP(e){if(Hp.hasOwnProperty(e))return Hp[e];var t=e.replace(wq,Cq);return Hp[e]=Sq.test(t)?"-"+t:t}function Eq(e,t){if(e===t)return!0;if(!e||!t)return!1;const n=Object.keys(e),r=Object.keys(t),i=n.length;if(r.length!==i)return!1;for(let o=0;o<i;o++){const a=n[o];if(e[a]!==t[a]||!Object.prototype.hasOwnProperty.call(t,a))return!1}return!0}var CP={exports:{}},_q="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",kq=_q,Pq=kq;function EP(){}function _P(){}_P.resetWarningCache=EP;var Oq=function(){function e(r,i,o,a,l,s){if(s!==Pq){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:_P,resetWarningCache:EP};return n.PropTypes=n,n};CP.exports=Oq();var Tq=CP.exports;const me=Ro(Tq),yt=me.oneOfType([me.string,me.number]),ov={all:me.bool,grid:me.bool,aural:me.bool,braille:me.bool,handheld:me.bool,print:me.bool,projection:me.bool,screen:me.bool,tty:me.bool,tv:me.bool,embossed:me.bool},kP={orientation:me.oneOf(["portrait","landscape"]),scan:me.oneOf(["progressive","interlace"]),aspectRatio:me.string,deviceAspectRatio:me.string,height:yt,deviceHeight:yt,width:yt,deviceWidth:yt,color:me.bool,colorIndex:me.bool,monochrome:me.bool,resolution:yt,type:Object.keys(ov)},{type:FY,...jq}=kP,PP={minAspectRatio:me.string,maxAspectRatio:me.string,minDeviceAspectRatio:me.string,maxDeviceAspectRatio:me.string,minHeight:yt,maxHeight:yt,minDeviceHeight:yt,maxDeviceHeight:yt,minWidth:yt,maxWidth:yt,minDeviceWidth:yt,maxDeviceWidth:yt,minColor:me.number,maxColor:me.number,minColorIndex:me.number,maxColorIndex:me.number,minMonochrome:me.number,maxMonochrome:me.number,minResolution:yt,maxResolution:yt,...jq},$q={...ov,...PP};var Iq={all:$q,types:ov,matchers:kP,features:PP};const Mq=e=>`not ${e}`,Aq=(e,t)=>{const n=SP(e);return typeof t=="number"&&(t=`${t}px`),t===!0?n:t===!1?Mq(n):`(${n}: ${t})`},Dq=e=>e.join(" and "),Lq=e=>{const t=[];return Object.keys(Iq.all).forEach(n=>{const r=e[n];r!=null&&t.push(Aq(n,r))}),Dq(t)},Rq=x.createContext(void 0),Fq=e=>e.query||Lq(e),qb=e=>e?Object.keys(e).reduce((n,r)=>(n[SP(r)]=e[r],n),{}):void 0,OP=()=>{const e=x.useRef(!1);return x.useEffect(()=>{e.current=!0},[]),e.current},zq=e=>{const t=x.useContext(Rq),n=()=>qb(e)||qb(t),[r,i]=x.useState(n);return x.useEffect(()=>{const o=n();Eq(r,o)||i(o)},[e,t]),r},Nq=e=>{const t=()=>Fq(e),[n,r]=x.useState(t);return x.useEffect(()=>{const i=t();n!==i&&r(i)},[e]),n},Bq=(e,t)=>{const n=()=>bq(e,t||{},!!t),[r,i]=x.useState(n),o=OP();return x.useEffect(()=>{if(o){const a=n();return i(a),()=>{a&&a.dispose()}}},[e,t]),r},Vq=e=>{const[t,n]=x.useState(e.matches);return x.useEffect(()=>{const r=i=>{n(i.matches)};return e.addListener(r),n(e.matches),()=>{e.removeListener(r)}},[e]),t},Wq=(e,t,n)=>{const r=zq(t),i=Nq(e);if(!i)throw new Error("Invalid or missing MediaQuery!");const o=Bq(i,r),a=Vq(o),l=OP();return x.useEffect(()=>{l&&n&&n(a)},[a]),x.useEffect(()=>()=>{o&&o.dispose()},[]),a},Uq=E.div`
  margin-bottom: 24px;
`,Hq=E.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 28px;
`,Gq=E.div`
  width: 70px;
  height: 70px;

  border-radius: 50%;
  background: #4c3a30;

  color: white;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 26px;
`,qq=E.h3`
  margin-bottom: 4px;
`,Yq=E.p`
  color: #777;
`,Xq=E.button`
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
`,Kq=E.div`
  margin-top: 12px;

  display: flex;
  flex-direction: column;

  background: white;

  border-radius: 18px;

  overflow: hidden;

  box-shadow: 0 8px 20px rgba(0,0,0,.08);
`,$l=E(xw)`
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
`,Qq=()=>{var m,y;const[e,t]=x.useState(!1),[n,r]=x.useState(!1),[i,o]=x.useState(""),[a,l]=x.useState(""),s=Lt(),c=et(),f=Wn(),d=async()=>{localStorage.removeItem("token"),localStorage.removeItem("user"),s(Ls()),s(fr()),await Nd.purge(),c("/",{replace:!0})};x.useEffect(()=>{(async()=>{try{const g=localStorage.getItem("token"),b=await(await fetch("https://backenddidiv-production.up.railway.app/api/users/me",{headers:{Authorization:`Bearer ${g}`}})).json();o(b.first_name),l(b.email)}catch(g){console.error(g)}})()},[]);const p={"/account":"Особисті дані","/account/profile":"Особисті дані","/account/orders":"Замовлення","/account/favorites":"Обране","/account/password":"Змінити пароль"}[f.pathname]||"Особисті дані";return u.jsxs(Uq,{children:[n&&u.jsx(bP,{onClose:()=>r(!1),onConfirm:d}),u.jsxs(Hq,{children:[u.jsx(Gq,{children:((y=(m=i||i)==null?void 0:m[0])==null?void 0:y.toUpperCase())||"?"}),u.jsxs("div",{children:[u.jsx(qq,{children:i}),u.jsx(Yq,{children:a})]})]}),u.jsxs(Xq,{onClick:()=>t(w=>!w),children:[p,e?u.jsx(E3,{size:22}):u.jsx(S3,{size:22})]}),e&&u.jsxs(Kq,{children:[u.jsx($l,{to:"/account/profile",onClick:()=>t(!1),children:"Особисті дані"}),u.jsx($l,{to:"/account/orders",onClick:()=>t(!1),children:"Замовлення"}),u.jsx($l,{to:"/account/password",onClick:()=>t(!1),children:"Змінити пароль"}),u.jsx($l,{className:"logout",onClick:()=>r(!0),children:"Вийти"})]})]})},Zq=()=>{const e=Wq({maxWidth:767});return u.jsxs(YG,{className:"container",children:[e?u.jsx(Qq,{}):u.jsx(cq,{}),u.jsx(XG,{children:u.jsx(vw,{})})]})},Jq=E.div`
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
`,eY=E.h2`
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
`,tY=E.button`
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
`,Yb=()=>{const[e,t]=x.useState({first_name:"",last_name:"",email:"",phone:""}),[n,r]=x.useState({first_name:"",last_name:"",email:"",phone:""}),[i,o]=x.useState(null),[a,l]=x.useState(!0),s=et();x.useEffect(()=>{(async()=>{try{const p=localStorage.getItem("token"),m=await fetch("https://backenddidiv-production.up.railway.app/api/users/me",{headers:{Authorization:`Bearer ${p}`}});if(m.status===401){localStorage.removeItem("token"),localStorage.removeItem("user"),s("/login",{replace:!0});return}if(!m.ok)throw new Error(`HTTP error: ${m.status}`);const y=await m.json();o(y.id);const w={first_name:y.first_name||"",last_name:y.last_name||"",email:y.email||"",phone:y.phone||""};r(w),t(w)}catch(p){console.error(p)}finally{l(!1)}})()},[s]);const c=h=>{const{name:p,value:m}=h.target;r(y=>({...y,[p]:m}))},f=n.first_name!==e.first_name||n.last_name!==e.last_name||n.phone!==e.phone,d=async()=>{try{const h=localStorage.getItem("token"),p=await fetch(`https://backenddidiv-production.up.railway.app/api/users/${i}`,{method:"PUT",headers:{Authorization:`Bearer ${h}`,"Content-Type":"application/json"},body:JSON.stringify({first_name:n.first_name,last_name:n.last_name,phone:n.phone})});if(!p.ok)throw new Error("Помилка оновлення");const m=await p.json();localStorage.setItem("user",JSON.stringify(m)),t(n),X.success("Дані оновлено успішно")}catch(h){console.error(h),X.error("Не вдалось оновити дані")}};return a?u.jsx("p",{children:"Завантаження..."}):u.jsxs(Jq,{children:[u.jsx(Un,{autoClose:1500}),u.jsx(eY,{children:"Особисті дані"}),u.jsxs(Il,{children:["Ім я",u.jsx(Ml,{name:"first_name",value:n.first_name,onChange:c})]}),u.jsxs(Il,{children:["Прізвище",u.jsx(Ml,{name:"last_name",value:n.last_name,onChange:c})]}),u.jsxs(Il,{children:["Email",u.jsx(Ml,{value:n.email,disabled:!0})]}),u.jsxs(Il,{children:["Телефон",u.jsx(Ml,{name:"phone",value:n.phone,onChange:c})]}),u.jsx(tY,{onClick:d,disabled:!f,children:"Зберегти"})]})},nY=E.div`
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
`,rY=E.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
  }
`,iY=E.div`
  flex-grow: 1;
  background-color: #ffffff;
  border-radius: 20px;
  padding: 24px;
     box-shadow: 0 6px 18px rgba(0, 0, 0, 0.08);
  text-align: left;
`,oY=E.h1`
  font-family: var(--main-font);
  font-size: 28px;
  color: var(--black-color);
  margin-bottom: 24px;
`,aY=E.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`,sY=E.div`
  border: 1px solid #e0e0e0;
  border-radius: 16px;
  padding: 20px;
  background-color: #fff;
`,lY=E.div`
  display: flex;
  flex-direction: column;
      align-items: flex-start;
      align-items: flex-start;
       gap: 8px;
`,cY=E.div`
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
`,uY=E.span`
  font-family: var(--second-font);
  font-weight: 700;
  font-size: 16px;
`,dY=E.p`
  font-family: var(--second-font);
  font-weight: 400;
  font-size: 16px;
 `,fY=E.span`
  margin-left: auto;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 16px;
  font-weight: 700;

  background-color: ${e=>e.status==="pending"?"#fff0e6":e.status==="confirmed"?"#e8f0fe":e.status==="paid"?"#e6f4ea":e.status==="delivered"?"#e0f2fe":e.status==="done"?"#dcfce7":e.status==="cancelled"?"#fce8e6":"#f1f3f4"};

  color: ${e=>e.status==="pending"?"#d97706":e.status==="confirmed"?"#1a73e8":e.status==="paid"?"#137333":e.status==="delivered"?"#0369a1":e.status==="done"?"#15803d":e.status==="cancelled"?"#d93025":"#5f6368"};
`,pY=E.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`,hY=E.div`
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
`,mY=E.div`
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
`,gY=E.div`
  font-family: var(--second-font);
  margin-top: 16px;
  padding-top: 12px;
  border-top: 1px dashed #e0e0e0;
  font-size: 13px;
  color: #555;
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`,vY=()=>{const[e,t]=x.useState([]),[n,r]=x.useState(!0),i=localStorage.getItem("token"),o=(()=>{try{return JSON.parse(localStorage.getItem("user")||"null")}catch{return null}})(),a=et(),l={pending:"Створено",confirmed:"Підтверджено",paid:"Сплачено",delivered:"Доставлено",done:"Завершено",cancelled:"Скасовано"};return x.useEffect(()=>{if(!i||!(o!=null&&o.email)){r(!1);return}(async()=>{try{const c=await fetch(`https://backenddidiv-production.up.railway.app/api/orders?filters[email][$eq]=${encodeURIComponent(o.email)}`,{headers:{Authorization:`Bearer ${i}`}});if(c.status===401){localStorage.removeItem("token"),localStorage.removeItem("user"),a("/login",{replace:!0});return}if(!c.ok)throw new Error(`HTTP ${c.status}`);const f=await c.json(),d=Array.isArray(f)?f:f.data||[];t(d)}catch(c){console.error("Помилка завантаження замовлень:",c)}finally{r(!1)}})()},[i,o==null?void 0:o.email,a]),u.jsx(nY,{children:u.jsx(rY,{children:u.jsxs(iY,{children:[u.jsx(oY,{children:"Мої замовлення"}),n?u.jsx("p",{children:"Завантаження замовлень..."}):e.length===0?u.jsx("p",{children:"У вас поки немає замовлень."}):u.jsx(aY,{children:[...e].sort((s,c)=>{var h,p;const f=new Date(((h=s.attributes)==null?void 0:h.date)||s.date);return new Date(((p=c.attributes)==null?void 0:p.date)||c.date)-f}).map(s=>{const c=s.attributes||s,f=typeof c.products=="string"?JSON.parse(c.products):c.products||[];return u.jsxs(sY,{children:[u.jsxs(cY,{children:[u.jsxs(lY,{children:[u.jsxs(uY,{children:["№ ",c.order_number]}),c.date&&u.jsxs(dY,{children:["Дата створення замовлення:"," ",new Date(c.date).toLocaleDateString("uk-UA")]})]}),u.jsx(fY,{status:c.status_order,children:l[c.status_order]||"Створено"})]}),u.jsx(pY,{children:f.map(d=>u.jsxs(hY,{onClick:()=>a(`/product/${d.slug}`),children:[u.jsx("img",{src:d.image||ur,alt:d.name}),u.jsxs(mY,{children:[u.jsx("p",{children:d.name}),u.jsxs("span",{children:[d.quantity," шт. × ",d.price," грн"]})]})]},d.id))}),u.jsxs(gY,{children:[c.city&&u.jsxs("span",{children:[u.jsx("b",{children:"Місто:"})," ",c.city]}),c.delivery_method&&u.jsxs("span",{children:[u.jsx("b",{children:"Доставка:"})," ",c.delivery_method]}),c.delivery_address&&u.jsxs("span",{children:[u.jsx("b",{children:"Адреса:"})," ",c.delivery_address]}),c.ttn&&u.jsxs("span",{children:[u.jsx("b",{children:"ТТН:"})," ",c.ttn]})]})]},s.id||c.order_number)})})]})})})},yY=E.div`
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
`,xY=E.div`
  width: 100%;
  max-width: 500px;
  margin: 60px auto;
`,Xb=E.h1`
  margin: 0 0 12px;

  font-size: 30px;
  line-height: 1.2;
  font-weight: 300;

  color: #312620;
  text-align: center;

  @media screen and (min-width: 768px) {
    font-size: 42px;
  }
`,bY=E.p`
  margin: 0 0 32px;

  font-size: 15px;
  line-height: 1.5;

  color: #8d837d;

  text-align: center;
`,wY=E.form`
  display: flex;
  flex-direction: column;
  gap: 18px;
`,Kb=E.label`
  display: flex;
  flex-direction: column;
  gap: 8px;

  font-size: 14px;
  color: #3d2f29;
`,Qb=E.input`
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
`,SY=E.button`
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
`,CY=E.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items:center;`,EY=E.button`
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
`,_Y=E.p`
  margin: -8px 0 8px;

  font-size: 14px;
  line-height: 1.4;

  color: #c62828;
`,kY=E.p`
  margin: 20px 0 0;

  font-size: 15px;
  line-height: 1.5;

  color: #555;

  text-align: center;
`,PY=({openLogin:e})=>{const[t]=bw(),n=et(),r=t.get("code"),[i,o]=x.useState(""),[a,l]=x.useState(!1),[s,c]=x.useState(!1),[f,d]=x.useState(""),[h,p]=x.useState(""),[m,y]=x.useState(!1),[w,g]=x.useState(!1),v=async C=>{var S;if(C.preventDefault(),p(""),!r){p("Посилання для відновлення пароля недійсне.");return}if(i.length<6){p("Пароль має містити щонайменше 6 символів.");return}if(i!==f){p("Паролі не збігаються.");return}g(!0);try{const P=await fetch("https://backenddidiv-production.up.railway.app/api/auth/reset-password",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({code:r,password:i,passwordConfirmation:f})}),k=await P.json();if(!P.ok)throw new Error(((S=k==null?void 0:k.error)==null?void 0:S.message)||"Не вдалося змінити пароль.");y(!0)}catch{p("Сталася помилка. Спробуйте ще раз.")}finally{g(!1)}},b=()=>{n("/"),e()};return u.jsx(yY,{children:u.jsx(xY,{children:m?u.jsxs(CY,{children:[u.jsx(Xb,{children:"Пароль змінено"}),u.jsx(kY,{children:"Ваш пароль успішно змінено. Тепер ви можете увійти до свого акаунта."}),u.jsx(EY,{type:"button",onClick:b,children:"Увійти"})]}):u.jsxs(u.Fragment,{children:[u.jsx(Xb,{children:"Новий пароль"}),u.jsx(bY,{children:"Введіть новий пароль для вашого облікового запису."}),u.jsxs(wY,{onSubmit:v,children:[u.jsxs(Kb,{children:["Новий пароль",u.jsxs(Ya,{children:[u.jsx(Qb,{type:a?"text":"password",value:i,onChange:C=>o(C.target.value),placeholder:"Введіть новий пароль",autoComplete:"new-password"}),u.jsx(Xa,{type:"button",onClick:()=>l(C=>!C),children:a?u.jsx(fi,{size:20}):u.jsx(pi,{size:20})})," "]})]}),u.jsxs(Kb,{children:["Повторіть пароль",u.jsxs(Ya,{children:[u.jsx(Qb,{type:s?"text":"password",value:f,onChange:C=>d(C.target.value),placeholder:"Повторіть новий пароль",autoComplete:"new-password"}),u.jsx(Xa,{type:"button",onClick:()=>c(C=>!C),children:s?u.jsx(fi,{size:20}):u.jsx(pi,{size:20})})]})]}),h&&u.jsx(_Y,{children:h}),u.jsx(SY,{type:"submit",disabled:w,children:w?"Збереження...":"Змінити пароль"})]})]})})})},OY=E.div`
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
`,TY=E.form`
  width: 100%;
  max-width: 480px;

  margin: 0 auto;
   @media screen and (min-width:768px) {
    margin-right:auto;
    margin-left: 0;
    
  }
`,jY=E.h1`
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
`,$Y=E.p`
  margin: 0 0 40px;

  font-size: 17px;
  line-height: 1.5;

  color: #777;
`,Gp=E.div`
  display: flex;
  flex-direction: column;
 font-family: var(--second-font);
 font-weight:300;
  margin-bottom: 24px;
`,qp=E.label`
  margin-bottom: 9px;

  font-size: 16px;
  line-height: 1.3;

  color: #333;
`,Yp=E.input`
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
`,IY=E.button`
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
`;const MY=E.p`
  margin: -4px 0 20px;

  font-size: 13px;
  line-height: 1.4;

  color: #b42318;
`,AY=E.p`
  margin: -4px 0 20px;

  font-size: 13px;
  line-height: 1.4;

  color: #26734d;
`,DY=()=>{const[e,t]=x.useState(!1),[n,r]=x.useState(!1),[i,o]=x.useState(!1),[a,l]=x.useState({currentPassword:"",newPassword:"",confirmPassword:""}),[s,c]=x.useState(""),[f,d]=x.useState(""),[h,p]=x.useState(!1),m=w=>{const{name:g,value:v}=w.target;l(b=>({...b,[g]:v})),c(""),d("")},y=async w=>{if(w.preventDefault(),c(""),d(""),!a.currentPassword||!a.newPassword||!a.confirmPassword){c("Заповніть усі поля.");return}if(a.newPassword.length<6){c("Новий пароль повинен містити щонайменше 6 символів.");return}if(a.newPassword!==a.confirmPassword){c("Нові паролі не співпадають.");return}if(a.currentPassword===a.newPassword){c("Новий пароль повинен відрізнятися від поточного.");return}try{p(!0);const g=localStorage.getItem("token"),v=await fetch("https://backenddidiv-production.up.railway.app/api/auth/change-password",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${g}`},body:JSON.stringify({currentPassword:a.currentPassword,password:a.newPassword,passwordConfirmation:a.newPassword})}),b=await v.json().catch(()=>null);if(!v.ok)throw new Error((b==null?void 0:b.message)||"Не вдалося змінити пароль.");d("Пароль успішно змінено."),l({currentPassword:"",newPassword:"",confirmPassword:""})}catch(g){c(g.message||"Сталася помилка. Спробуйте ще раз.")}finally{p(!1)}};return u.jsx(OY,{children:u.jsxs(TY,{onSubmit:y,children:[u.jsx(jY,{children:"Зміна пароля"}),u.jsx($Y,{children:"Введіть поточний пароль і встановіть новий."}),u.jsxs(Gp,{children:[u.jsx(qp,{htmlFor:"currentPassword",children:"Поточний пароль"}),u.jsxs(Ya,{children:[u.jsx(Yp,{id:"currentPassword",name:"currentPassword",type:e?"text":"password",value:a.currentPassword,onChange:m,autoComplete:"current-password",placeholder:"Введіть поточний пароль"}),u.jsx(Xa,{type:"button",onClick:()=>t(w=>!w),children:e?u.jsx(fi,{size:20}):u.jsx(pi,{size:20})})]})]}),u.jsxs(Gp,{children:[u.jsx(qp,{htmlFor:"newPassword",children:"Новий пароль"}),u.jsxs(Ya,{children:[u.jsx(Yp,{id:"newPassword",name:"newPassword",type:n?"text":"password",value:a.newPassword,onChange:m,autoComplete:"new-password",placeholder:"Введіть новий пароль"}),u.jsx(Xa,{type:"button",onClick:()=>r(w=>!w),children:n?u.jsx(fi,{size:20}):u.jsx(pi,{size:20})})]})]}),u.jsxs(Gp,{children:[u.jsx(qp,{htmlFor:"confirmPassword",children:"Підтвердження нового пароля"}),u.jsxs(Ya,{children:[u.jsx(Yp,{id:"confirmPassword",name:"confirmPassword",type:i?"text":"password",value:a.confirmPassword,onChange:m,autoComplete:"new-password",placeholder:"Повторіть новий пароль"}),u.jsx(Xa,{type:"button",onClick:()=>o(w=>!w),children:i?u.jsx(fi,{size:20}):u.jsx(pi,{size:20})})]})]}),s&&u.jsx(MY,{children:s}),f&&u.jsx(AY,{children:f}),u.jsx(IY,{type:"submit",disabled:h,children:h?"Зміна пароля...":"Змінити пароль"})]})})};function LY(){const e=Lt(),[t,n]=x.useState(!1),[r,i]=x.useState("login"),o=!!localStorage.getItem("token"),a=localStorage.getItem("token"),l=JSON.parse(localStorage.getItem("user")||"null"),s=l==null?void 0:l.documentId,c=Ge(d=>d.favorites.items),f=Ge(d=>d.cart.items);return x.useEffect(()=>{if(!a)return;(async()=>{try{const h=await fetch("https://backenddidiv-production.up.railway.app/api/users/me",{headers:{Authorization:`Bearer ${a}`}});if(h.status===401){localStorage.removeItem("token"),localStorage.removeItem("user"),e(fr()),e(Ls()),window.location.reload();return}h.ok||console.error("Auth check error:",h.status)}catch(h){console.error("Помилка перевірки авторизації:",h)}})()},[a,e]),x.useEffect(()=>{if(!a||!s)return;(async()=>{const h=localStorage.getItem("token");if(!h)return;const y=(await(await fetch(`https://backenddidiv-production.up.railway.app/api/favorites?filters[user][documentId][$eq]=${s}&populate=product.images`,{headers:{Authorization:`Bearer ${h}`}})).json()).data.map(w=>({...w.product,favoriteId:w.id,favoriteDocumentId:w.documentId}));e(UI(y))})()},[s,e,a]),u.jsxs(_A,{children:[u.jsx(s6,{}),u.jsx(GH,{}),u.jsxs(x.Suspense,{fallback:u.jsx(o6,{}),children:[u.jsx(BO,{children:u.jsxs($e,{path:"/",element:u.jsx(K3,{openLogin:()=>{i("login"),n(!0)},openRegister:()=>{i("register"),n(!0)}}),children:[u.jsx($e,{index:!0,element:u.jsx(t8,{})}),u.jsx($e,{path:"catalog",element:u.jsx(xA,{})}),u.jsx($e,{path:"/catalog/:category",element:u.jsx(Wz,{})}),u.jsx($e,{path:"/product/:identifier",element:u.jsx(i9,{})}),u.jsx($e,{path:"cart",element:u.jsx(PB,{})}),u.jsx($e,{path:"favorite",element:u.jsx(AB,{})}),u.jsx($e,{path:"/catalog/new",element:u.jsx($G,{})}),u.jsx($e,{path:"/catalog/sale",element:u.jsx(IG,{})}),u.jsx($e,{path:"checkout",element:u.jsx(kH,{})}),u.jsx($e,{path:"/order-confirmation",element:u.jsx(AH,{})}),u.jsx($e,{path:"about",element:u.jsx(HH,{})}),u.jsx($e,{path:"contacts",element:u.jsx(iG,{})}),u.jsx($e,{path:"delivery",element:u.jsx(NB,{})}),u.jsx($e,{path:"/reset-password",element:u.jsx(PY,{openLogin:()=>{i("login"),n(!0)}})}),u.jsxs($e,{path:"account",element:u.jsx(qG,{isLoggedIn:o,children:u.jsx(Zq,{})}),children:[u.jsx($e,{index:!0,element:u.jsx(Yb,{})}),u.jsx($e,{path:"profile",element:u.jsx(Yb,{})}),u.jsx($e,{path:"orders",element:u.jsx(vY,{})}),u.jsx($e,{path:"password",element:u.jsx(DY,{})})]}),u.jsx($e,{path:"*",element:u.jsx(EA,{})})]})}),u.jsx(GG,{localFavorites:c,localCartItems:f,isOpen:t,mode:r,onClose:()=>n(!1),setMode:i})]})]})}Jp.createRoot(document.getElementById("root")).render(u.jsx(X4,{store:Ak,children:u.jsx(K.StrictMode,{children:u.jsx(YO,{basename:"/",children:u.jsx(LY,{})})})}));
