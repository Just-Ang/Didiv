function T_(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();var te=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Gp(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function Pt(e){if(e.__esModule)return e;var t=e.default;if(typeof t=="function"){var n=function r(){return this instanceof r?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach(function(r){var i=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(n,r,i.get?i:{enumerable:!0,get:function(){return e[r]}})}),n}var V1={exports:{}},lu={},U1={exports:{}},re={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var La=Symbol.for("react.element"),O_=Symbol.for("react.portal"),j_=Symbol.for("react.fragment"),M_=Symbol.for("react.strict_mode"),$_=Symbol.for("react.profiler"),I_=Symbol.for("react.provider"),D_=Symbol.for("react.context"),L_=Symbol.for("react.forward_ref"),A_=Symbol.for("react.suspense"),R_=Symbol.for("react.memo"),F_=Symbol.for("react.lazy"),eg=Symbol.iterator;function z_(e){return e===null||typeof e!="object"?null:(e=eg&&e[eg]||e["@@iterator"],typeof e=="function"?e:null)}var H1={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},W1=Object.assign,G1={};function ao(e,t,n){this.props=e,this.context=t,this.refs=G1,this.updater=n||H1}ao.prototype.isReactComponent={};ao.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};ao.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function q1(){}q1.prototype=ao.prototype;function qp(e,t,n){this.props=e,this.context=t,this.refs=G1,this.updater=n||H1}var Yp=qp.prototype=new q1;Yp.constructor=qp;W1(Yp,ao.prototype);Yp.isPureReactComponent=!0;var tg=Array.isArray,Y1=Object.prototype.hasOwnProperty,Xp={current:null},X1={key:!0,ref:!0,__self:!0,__source:!0};function K1(e,t,n){var r,i={},o=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(o=""+t.key),t)Y1.call(t,r)&&!X1.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var s=Array(l),u=0;u<l;u++)s[u]=arguments[u+2];i.children=s}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:La,type:e,key:o,ref:a,props:i,_owner:Xp.current}}function N_(e,t){return{$$typeof:La,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Kp(e){return typeof e=="object"&&e!==null&&e.$$typeof===La}function B_(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var ng=/\/+/g;function Ic(e,t){return typeof e=="object"&&e!==null&&e.key!=null?B_(""+e.key):t.toString(36)}function $s(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case La:case O_:a=!0}}if(a)return a=e,i=i(a),e=r===""?"."+Ic(a,0):r,tg(i)?(n="",e!=null&&(n=e.replace(ng,"$&/")+"/"),$s(i,t,n,"",function(u){return u})):i!=null&&(Kp(i)&&(i=N_(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(ng,"$&/")+"/")+e)),t.push(i)),1;if(a=0,r=r===""?".":r+":",tg(e))for(var l=0;l<e.length;l++){o=e[l];var s=r+Ic(o,l);a+=$s(o,t,n,s,i)}else if(s=z_(e),typeof s=="function")for(e=s.call(e),l=0;!(o=e.next()).done;)o=o.value,s=r+Ic(o,l++),a+=$s(o,t,n,s,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function ts(e,t,n){if(e==null)return e;var r=[],i=0;return $s(e,r,"","",function(o){return t.call(n,o,i++)}),r}function V_(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var mt={current:null},Is={transition:null},U_={ReactCurrentDispatcher:mt,ReactCurrentBatchConfig:Is,ReactCurrentOwner:Xp};re.Children={map:ts,forEach:function(e,t,n){ts(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ts(e,function(){t++}),t},toArray:function(e){return ts(e,function(t){return t})||[]},only:function(e){if(!Kp(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};re.Component=ao;re.Fragment=j_;re.Profiler=$_;re.PureComponent=qp;re.StrictMode=M_;re.Suspense=A_;re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=U_;re.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=W1({},e.props),i=e.key,o=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,a=Xp.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in t)Y1.call(t,s)&&!X1.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&l!==void 0?l[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){l=Array(s);for(var u=0;u<s;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:La,type:e.type,key:i,ref:o,props:r,_owner:a}};re.createContext=function(e){return e={$$typeof:D_,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:I_,_context:e},e.Consumer=e};re.createElement=K1;re.createFactory=function(e){var t=K1.bind(null,e);return t.type=e,t};re.createRef=function(){return{current:null}};re.forwardRef=function(e){return{$$typeof:L_,render:e}};re.isValidElement=Kp;re.lazy=function(e){return{$$typeof:F_,_payload:{_status:-1,_result:e},_init:V_}};re.memo=function(e,t){return{$$typeof:R_,type:e,compare:t===void 0?null:t}};re.startTransition=function(e){var t=Is.transition;Is.transition={};try{e()}finally{Is.transition=t}};re.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};re.useCallback=function(e,t){return mt.current.useCallback(e,t)};re.useContext=function(e){return mt.current.useContext(e)};re.useDebugValue=function(){};re.useDeferredValue=function(e){return mt.current.useDeferredValue(e)};re.useEffect=function(e,t){return mt.current.useEffect(e,t)};re.useId=function(){return mt.current.useId()};re.useImperativeHandle=function(e,t,n){return mt.current.useImperativeHandle(e,t,n)};re.useInsertionEffect=function(e,t){return mt.current.useInsertionEffect(e,t)};re.useLayoutEffect=function(e,t){return mt.current.useLayoutEffect(e,t)};re.useMemo=function(e,t){return mt.current.useMemo(e,t)};re.useReducer=function(e,t,n){return mt.current.useReducer(e,t,n)};re.useRef=function(e){return mt.current.useRef(e)};re.useState=function(e){return mt.current.useState(e)};re.useSyncExternalStore=function(e,t,n){return mt.current.useSyncExternalStore(e,t,n)};re.useTransition=function(){return mt.current.useTransition()};re.version="18.2.0";U1.exports=re;var b=U1.exports;const X=Gp(b),af=T_({__proto__:null,default:X},[b]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var H_=b,W_=Symbol.for("react.element"),G_=Symbol.for("react.fragment"),q_=Object.prototype.hasOwnProperty,Y_=H_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,X_={key:!0,ref:!0,__self:!0,__source:!0};function Q1(e,t,n){var r,i={},o=null,a=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)q_.call(t,r)&&!X_.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:W_,type:e,key:o,ref:a,props:i,_owner:Y_.current}}lu.Fragment=G_;lu.jsx=Q1;lu.jsxs=Q1;V1.exports=lu;var f=V1.exports;/**
 * @remix-run/router v1.8.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function sa(){return sa=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},sa.apply(this,arguments)}var lr;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(lr||(lr={}));const rg="popstate";function K_(e){e===void 0&&(e={});function t(r,i){let{pathname:o,search:a,hash:l}=r.location;return sf("",{pathname:o,search:a,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:al(i)}return Z_(t,n,null,e)}function Le(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Qp(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Q_(){return Math.random().toString(36).substr(2,8)}function ig(e,t){return{usr:e.state,key:e.key,idx:t}}function sf(e,t,n,r){return n===void 0&&(n=null),sa({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?so(t):t,{state:n,key:t&&t.key||r||Q_()})}function al(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function so(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Z_(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,a=i.history,l=lr.Pop,s=null,u=d();u==null&&(u=0,a.replaceState(sa({},a.state,{idx:u}),""));function d(){return(a.state||{idx:null}).idx}function c(){l=lr.Pop;let w=d(),h=w==null?null:w-u;u=w,s&&s({action:l,location:v.location,delta:h})}function y(w,h){l=lr.Push;let g=sf(v.location,w,h);n&&n(g,w),u=d()+1;let x=ig(g,u),S=v.createHref(g);try{a.pushState(x,"",S)}catch(C){if(C instanceof DOMException&&C.name==="DataCloneError")throw C;i.location.assign(S)}o&&s&&s({action:l,location:v.location,delta:1})}function p(w,h){l=lr.Replace;let g=sf(v.location,w,h);n&&n(g,w),u=d();let x=ig(g,u),S=v.createHref(g);a.replaceState(x,"",S),o&&s&&s({action:l,location:v.location,delta:0})}function m(w){let h=i.location.origin!=="null"?i.location.origin:i.location.href,g=typeof w=="string"?w:al(w);return Le(h,"No window.location.(origin|href) available to create URL for href: "+g),new URL(g,h)}let v={get action(){return l},get location(){return e(i,a)},listen(w){if(s)throw new Error("A history only accepts one active listener");return i.addEventListener(rg,c),s=w,()=>{i.removeEventListener(rg,c),s=null}},createHref(w){return t(i,w)},createURL:m,encodeLocation(w){let h=m(w);return{pathname:h.pathname,search:h.search,hash:h.hash}},push:y,replace:p,go(w){return a.go(w)}};return v}var og;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(og||(og={}));function J_(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?so(t):t,i=Zp(r.pathname||"/",n);if(i==null)return null;let o=Z1(e);eC(o);let a=null;for(let l=0;a==null&&l<o.length;++l)a=uC(o[l],fC(i));return a}function Z1(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,a,l)=>{let s={relativePath:l===void 0?o.path||"":l,caseSensitive:o.caseSensitive===!0,childrenIndex:a,route:o};s.relativePath.startsWith("/")&&(Le(s.relativePath.startsWith(r),'Absolute route path "'+s.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),s.relativePath=s.relativePath.slice(r.length));let u=pr([r,s.relativePath]),d=n.concat(s);o.children&&o.children.length>0&&(Le(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Z1(o.children,t,d,u)),!(o.path==null&&!o.index)&&t.push({path:u,score:sC(u,o.index),routesMeta:d})};return e.forEach((o,a)=>{var l;if(o.path===""||!((l=o.path)!=null&&l.includes("?")))i(o,a);else for(let s of J1(o.path))i(o,a,s)}),t}function J1(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let a=J1(r.join("/")),l=[];return l.push(...a.map(s=>s===""?o:[o,s].join("/"))),i&&l.push(...a),l.map(s=>e.startsWith("/")&&s===""?"/":s)}function eC(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:lC(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const tC=/^:\w+$/,nC=3,rC=2,iC=1,oC=10,aC=-2,ag=e=>e==="*";function sC(e,t){let n=e.split("/"),r=n.length;return n.some(ag)&&(r+=aC),t&&(r+=rC),n.filter(i=>!ag(i)).reduce((i,o)=>i+(tC.test(o)?nC:o===""?iC:oC),r)}function lC(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function uC(e,t){let{routesMeta:n}=e,r={},i="/",o=[];for(let a=0;a<n.length;++a){let l=n[a],s=a===n.length-1,u=i==="/"?t:t.slice(i.length)||"/",d=cC({path:l.relativePath,caseSensitive:l.caseSensitive,end:s},u);if(!d)return null;Object.assign(r,d.params);let c=l.route;o.push({params:r,pathname:pr([i,d.pathname]),pathnameBase:gC(pr([i,d.pathnameBase])),route:c}),d.pathnameBase!=="/"&&(i=pr([i,d.pathnameBase]))}return o}function cC(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=dC(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],a=o.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((u,d,c)=>{if(d==="*"){let y=l[c]||"";a=o.slice(0,o.length-y.length).replace(/(.)\/+$/,"$1")}return u[d]=pC(l[c]||"",d),u},{}),pathname:o,pathnameBase:a,pattern:e}}function dC(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Qp(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(a,l)=>(r.push(l),"/([^\\/]+)"));return e.endsWith("*")?(r.push("*"),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function fC(e){try{return decodeURI(e)}catch(t){return Qp(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function pC(e,t){try{return decodeURIComponent(e)}catch(n){return Qp(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function Zp(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function hC(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?so(e):e;return{pathname:n?n.startsWith("/")?n:mC(n,t):t,search:vC(r),hash:yC(i)}}function mC(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Dc(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function ey(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function ty(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=so(e):(i=sa({},e),Le(!i.pathname||!i.pathname.includes("?"),Dc("?","pathname","search",i)),Le(!i.pathname||!i.pathname.includes("#"),Dc("#","pathname","hash",i)),Le(!i.search||!i.search.includes("#"),Dc("#","search","hash",i)));let o=e===""||i.pathname==="",a=o?"/":i.pathname,l;if(r||a==null)l=n;else{let c=t.length-1;if(a.startsWith("..")){let y=a.split("/");for(;y[0]==="..";)y.shift(),c-=1;i.pathname=y.join("/")}l=c>=0?t[c]:"/"}let s=hC(i,l),u=a&&a!=="/"&&a.endsWith("/"),d=(o||a===".")&&n.endsWith("/");return!s.pathname.endsWith("/")&&(u||d)&&(s.pathname+="/"),s}const pr=e=>e.join("/").replace(/\/\/+/g,"/"),gC=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),vC=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,yC=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function xC(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const ny=["post","put","patch","delete"];new Set(ny);const bC=["get",...ny];new Set(bC);/**
 * React Router v6.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function sl(){return sl=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},sl.apply(this,arguments)}const Jp=b.createContext(null),wC=b.createContext(null),lo=b.createContext(null),uu=b.createContext(null),Kn=b.createContext({outlet:null,matches:[],isDataRoute:!1}),ry=b.createContext(null);function SC(e,t){let{relative:n}=t===void 0?{}:t;Aa()||Le(!1);let{basename:r,navigator:i}=b.useContext(lo),{hash:o,pathname:a,search:l}=ay(e,{relative:n}),s=a;return r!=="/"&&(s=a==="/"?r:pr([r,a])),i.createHref({pathname:s,search:l,hash:o})}function Aa(){return b.useContext(uu)!=null}function ri(){return Aa()||Le(!1),b.useContext(uu).location}function iy(e){b.useContext(lo).static||b.useLayoutEffect(e)}function On(){let{isDataRoute:e}=b.useContext(Kn);return e?RC():_C()}function _C(){Aa()||Le(!1);let e=b.useContext(Jp),{basename:t,navigator:n}=b.useContext(lo),{matches:r}=b.useContext(Kn),{pathname:i}=ri(),o=JSON.stringify(ey(r).map(s=>s.pathnameBase)),a=b.useRef(!1);return iy(()=>{a.current=!0}),b.useCallback(function(s,u){if(u===void 0&&(u={}),!a.current)return;if(typeof s=="number"){n.go(s);return}let d=ty(s,JSON.parse(o),i,u.relative==="path");e==null&&t!=="/"&&(d.pathname=d.pathname==="/"?t:pr([t,d.pathname])),(u.replace?n.replace:n.push)(d,u.state,u)},[t,n,o,i,e])}const CC=b.createContext(null);function EC(e){let t=b.useContext(Kn).outlet;return t&&b.createElement(CC.Provider,{value:e},t)}function oy(){let{matches:e}=b.useContext(Kn),t=e[e.length-1];return t?t.params:{}}function ay(e,t){let{relative:n}=t===void 0?{}:t,{matches:r}=b.useContext(Kn),{pathname:i}=ri(),o=JSON.stringify(ey(r).map(a=>a.pathnameBase));return b.useMemo(()=>ty(e,JSON.parse(o),i,n==="path"),[e,o,i,n])}function kC(e,t){return PC(e,t)}function PC(e,t,n){Aa()||Le(!1);let{navigator:r}=b.useContext(lo),{matches:i}=b.useContext(Kn),o=i[i.length-1],a=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let s=ri(),u;if(t){var d;let v=typeof t=="string"?so(t):t;l==="/"||(d=v.pathname)!=null&&d.startsWith(l)||Le(!1),u=v}else u=s;let c=u.pathname||"/",y=l==="/"?c:c.slice(l.length)||"/",p=J_(e,{pathname:y}),m=$C(p&&p.map(v=>Object.assign({},v,{params:Object.assign({},a,v.params),pathname:pr([l,r.encodeLocation?r.encodeLocation(v.pathname).pathname:v.pathname]),pathnameBase:v.pathnameBase==="/"?l:pr([l,r.encodeLocation?r.encodeLocation(v.pathnameBase).pathname:v.pathnameBase])})),i,n);return t&&m?b.createElement(uu.Provider,{value:{location:sl({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:lr.Pop}},m):m}function TC(){let e=AC(),t=xC(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},o=null;return b.createElement(b.Fragment,null,b.createElement("h2",null,"Unexpected Application Error!"),b.createElement("h3",{style:{fontStyle:"italic"}},t),n?b.createElement("pre",{style:i},n):null,o)}const OC=b.createElement(TC,null);class jC extends b.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error||n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?b.createElement(Kn.Provider,{value:this.props.routeContext},b.createElement(ry.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function MC(e){let{routeContext:t,match:n,children:r}=e,i=b.useContext(Jp);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),b.createElement(Kn.Provider,{value:t},r)}function $C(e,t,n){var r;if(t===void 0&&(t=[]),n===void 0&&(n=null),e==null){var i;if((i=n)!=null&&i.errors)e=n.matches;else return null}let o=e,a=(r=n)==null?void 0:r.errors;if(a!=null){let l=o.findIndex(s=>s.route.id&&(a==null?void 0:a[s.route.id]));l>=0||Le(!1),o=o.slice(0,Math.min(o.length,l+1))}return o.reduceRight((l,s,u)=>{let d=s.route.id?a==null?void 0:a[s.route.id]:null,c=null;n&&(c=s.route.errorElement||OC);let y=t.concat(o.slice(0,u+1)),p=()=>{let m;return d?m=c:s.route.Component?m=b.createElement(s.route.Component,null):s.route.element?m=s.route.element:m=l,b.createElement(MC,{match:s,routeContext:{outlet:l,matches:y,isDataRoute:n!=null},children:m})};return n&&(s.route.ErrorBoundary||s.route.errorElement||u===0)?b.createElement(jC,{location:n.location,revalidation:n.revalidation,component:c,error:d,children:p(),routeContext:{outlet:null,matches:y,isDataRoute:!0}}):p()},null)}var sy=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(sy||{}),ll=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(ll||{});function IC(e){let t=b.useContext(Jp);return t||Le(!1),t}function DC(e){let t=b.useContext(wC);return t||Le(!1),t}function LC(e){let t=b.useContext(Kn);return t||Le(!1),t}function ly(e){let t=LC(),n=t.matches[t.matches.length-1];return n.route.id||Le(!1),n.route.id}function AC(){var e;let t=b.useContext(ry),n=DC(ll.UseRouteError),r=ly(ll.UseRouteError);return t||((e=n.errors)==null?void 0:e[r])}function RC(){let{router:e}=IC(sy.UseNavigateStable),t=ly(ll.UseNavigateStable),n=b.useRef(!1);return iy(()=>{n.current=!0}),b.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,sl({fromRouteId:t},o)))},[e,t])}function FC(e){return EC(e.context)}function rt(e){Le(!1)}function zC(e){let{basename:t="/",children:n=null,location:r,navigationType:i=lr.Pop,navigator:o,static:a=!1}=e;Aa()&&Le(!1);let l=t.replace(/^\/*/,"/"),s=b.useMemo(()=>({basename:l,navigator:o,static:a}),[l,o,a]);typeof r=="string"&&(r=so(r));let{pathname:u="/",search:d="",hash:c="",state:y=null,key:p="default"}=r,m=b.useMemo(()=>{let v=Zp(u,l);return v==null?null:{location:{pathname:v,search:d,hash:c,state:y,key:p},navigationType:i}},[l,u,d,c,y,p,i]);return m==null?null:b.createElement(lo.Provider,{value:s},b.createElement(uu.Provider,{children:n,value:m}))}function NC(e){let{children:t,location:n}=e;return kC(lf(t),n)}new Promise(()=>{});function lf(e,t){t===void 0&&(t=[]);let n=[];return b.Children.forEach(e,(r,i)=>{if(!b.isValidElement(r))return;let o=[...t,i];if(r.type===b.Fragment){n.push.apply(n,lf(r.props.children,o));return}r.type!==rt&&Le(!1),!r.props.index||!r.props.children||Le(!1);let a={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(a.children=lf(r.props.children,o)),n.push(a)}),n}/**
 * React Router DOM v6.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function uf(){return uf=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},uf.apply(this,arguments)}function BC(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function VC(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function UC(e,t){return e.button===0&&(!t||t==="_self")&&!VC(e)}function cf(e){return e===void 0&&(e=""),new URLSearchParams(typeof e=="string"||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce((t,n)=>{let r=e[n];return t.concat(Array.isArray(r)?r.map(i=>[n,i]):[[n,r]])},[]))}function HC(e,t){let n=cf(e);return t&&t.forEach((r,i)=>{n.has(i)||t.getAll(i).forEach(o=>{n.append(i,o)})}),n}const WC=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],GC="startTransition",sg=af[GC];function qC(e){let{basename:t,children:n,future:r,window:i}=e,o=b.useRef();o.current==null&&(o.current=K_({window:i,v5Compat:!0}));let a=o.current,[l,s]=b.useState({action:a.action,location:a.location}),{v7_startTransition:u}=r||{},d=b.useCallback(c=>{u&&sg?sg(()=>s(c)):s(c)},[s,u]);return b.useLayoutEffect(()=>a.listen(d),[a,d]),b.createElement(zC,{basename:t,children:n,location:l.location,navigationType:l.action,navigator:a})}const YC=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",XC=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Oe=b.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:o,replace:a,state:l,target:s,to:u,preventScrollReset:d}=t,c=BC(t,WC),{basename:y}=b.useContext(lo),p,m=!1;if(typeof u=="string"&&XC.test(u)&&(p=u,YC))try{let g=new URL(window.location.href),x=u.startsWith("//")?new URL(g.protocol+u):new URL(u),S=Zp(x.pathname,y);x.origin===g.origin&&S!=null?u=S+x.search+x.hash:m=!0}catch{}let v=SC(u,{relative:i}),w=KC(u,{replace:a,state:l,target:s,preventScrollReset:d,relative:i});function h(g){r&&r(g),g.defaultPrevented||w(g)}return b.createElement("a",uf({},c,{href:p||v,onClick:m||o?r:h,ref:n,target:s}))});var lg;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher"})(lg||(lg={}));var ug;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(ug||(ug={}));function KC(e,t){let{target:n,replace:r,state:i,preventScrollReset:o,relative:a}=t===void 0?{}:t,l=On(),s=ri(),u=ay(e,{relative:a});return b.useCallback(d=>{if(UC(d,n)){d.preventDefault();let c=r!==void 0?r:al(s)===al(u);l(e,{replace:c,state:i,preventScrollReset:o,relative:a})}},[s,l,u,r,i,n,e,o,a])}function QC(e){let t=b.useRef(cf(e)),n=b.useRef(!1),r=ri(),i=b.useMemo(()=>HC(r.search,n.current?null:t.current),[r.search]),o=On(),a=b.useCallback((l,s)=>{const u=cf(typeof l=="function"?l(i):l);n.current=!0,o("?"+u,s)},[o,i]);return[i,a]}var df={},uy={exports:{}},Ft={},cy={exports:{}},dy={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(P,I){var z=P.length;P.push(I);e:for(;0<z;){var B=z-1>>>1,N=P[B];if(0<i(N,I))P[B]=I,P[z]=N,z=B;else break e}}function n(P){return P.length===0?null:P[0]}function r(P){if(P.length===0)return null;var I=P[0],z=P.pop();if(z!==I){P[0]=z;e:for(var B=0,N=P.length,U=N>>>1;B<U;){var H=2*(B+1)-1,q=P[H],K=H+1,ee=P[K];if(0>i(q,z))K<N&&0>i(ee,q)?(P[B]=ee,P[K]=z,B=K):(P[B]=q,P[H]=z,B=H);else if(K<N&&0>i(ee,z))P[B]=ee,P[K]=z,B=K;else break e}}return I}function i(P,I){var z=P.sortIndex-I.sortIndex;return z!==0?z:P.id-I.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var a=Date,l=a.now();e.unstable_now=function(){return a.now()-l}}var s=[],u=[],d=1,c=null,y=3,p=!1,m=!1,v=!1,w=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(P){for(var I=n(u);I!==null;){if(I.callback===null)r(u);else if(I.startTime<=P)r(u),I.sortIndex=I.expirationTime,t(s,I);else break;I=n(u)}}function S(P){if(v=!1,x(P),!m)if(n(s)!==null)m=!0,O(C);else{var I=n(u);I!==null&&D(S,I.startTime-P)}}function C(P,I){m=!1,v&&(v=!1,h(_),_=-1),p=!0;var z=y;try{for(x(I),c=n(s);c!==null&&(!(c.expirationTime>I)||P&&!R());){var B=c.callback;if(typeof B=="function"){c.callback=null,y=c.priorityLevel;var N=B(c.expirationTime<=I);I=e.unstable_now(),typeof N=="function"?c.callback=N:c===n(s)&&r(s),x(I)}else r(s);c=n(s)}if(c!==null)var U=!0;else{var H=n(u);H!==null&&D(S,H.startTime-I),U=!1}return U}finally{c=null,y=z,p=!1}}var T=!1,E=null,_=-1,$=5,M=-1;function R(){return!(e.unstable_now()-M<$)}function A(){if(E!==null){var P=e.unstable_now();M=P;var I=!0;try{I=E(!0,P)}finally{I?j():(T=!1,E=null)}}else T=!1}var j;if(typeof g=="function")j=function(){g(A)};else if(typeof MessageChannel<"u"){var F=new MessageChannel,L=F.port2;F.port1.onmessage=A,j=function(){L.postMessage(null)}}else j=function(){w(A,0)};function O(P){E=P,T||(T=!0,j())}function D(P,I){_=w(function(){P(e.unstable_now())},I)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(P){P.callback=null},e.unstable_continueExecution=function(){m||p||(m=!0,O(C))},e.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):$=0<P?Math.floor(1e3/P):5},e.unstable_getCurrentPriorityLevel=function(){return y},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(P){switch(y){case 1:case 2:case 3:var I=3;break;default:I=y}var z=y;y=I;try{return P()}finally{y=z}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(P,I){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var z=y;y=P;try{return I()}finally{y=z}},e.unstable_scheduleCallback=function(P,I,z){var B=e.unstable_now();switch(typeof z=="object"&&z!==null?(z=z.delay,z=typeof z=="number"&&0<z?B+z:B):z=B,P){case 1:var N=-1;break;case 2:N=250;break;case 5:N=1073741823;break;case 4:N=1e4;break;default:N=5e3}return N=z+N,P={id:d++,callback:I,priorityLevel:P,startTime:z,expirationTime:N,sortIndex:-1},z>B?(P.sortIndex=z,t(u,P),n(s)===null&&P===n(u)&&(v?(h(_),_=-1):v=!0,D(S,z-B))):(P.sortIndex=N,t(s,P),m||p||(m=!0,O(C))),P},e.unstable_shouldYield=R,e.unstable_wrapCallback=function(P){var I=y;return function(){var z=y;y=I;try{return P.apply(this,arguments)}finally{y=z}}}})(dy);cy.exports=dy;var ZC=cy.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fy=b,At=ZC;function V(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var py=new Set,la={};function ii(e,t){Ui(e,t),Ui(e+"Capture",t)}function Ui(e,t){for(la[e]=t,e=0;e<t.length;e++)py.add(t[e])}var Hn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ff=Object.prototype.hasOwnProperty,JC=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,cg={},dg={};function eE(e){return ff.call(dg,e)?!0:ff.call(cg,e)?!1:JC.test(e)?dg[e]=!0:(cg[e]=!0,!1)}function tE(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function nE(e,t,n,r){if(t===null||typeof t>"u"||tE(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function gt(e,t,n,r,i,o,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=a}var Je={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Je[e]=new gt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Je[t]=new gt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Je[e]=new gt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Je[e]=new gt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Je[e]=new gt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Je[e]=new gt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Je[e]=new gt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Je[e]=new gt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Je[e]=new gt(e,5,!1,e.toLowerCase(),null,!1,!1)});var eh=/[\-:]([a-z])/g;function th(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(eh,th);Je[t]=new gt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(eh,th);Je[t]=new gt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(eh,th);Je[t]=new gt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Je[e]=new gt(e,1,!1,e.toLowerCase(),null,!1,!1)});Je.xlinkHref=new gt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Je[e]=new gt(e,1,!1,e.toLowerCase(),null,!0,!0)});function nh(e,t,n,r){var i=Je.hasOwnProperty(t)?Je[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(nE(t,n,i,r)&&(n=null),r||i===null?eE(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Qn=fy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ns=Symbol.for("react.element"),Si=Symbol.for("react.portal"),_i=Symbol.for("react.fragment"),rh=Symbol.for("react.strict_mode"),pf=Symbol.for("react.profiler"),hy=Symbol.for("react.provider"),my=Symbol.for("react.context"),ih=Symbol.for("react.forward_ref"),hf=Symbol.for("react.suspense"),mf=Symbol.for("react.suspense_list"),oh=Symbol.for("react.memo"),ir=Symbol.for("react.lazy"),gy=Symbol.for("react.offscreen"),fg=Symbol.iterator;function Co(e){return e===null||typeof e!="object"?null:(e=fg&&e[fg]||e["@@iterator"],typeof e=="function"?e:null)}var ke=Object.assign,Lc;function zo(e){if(Lc===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Lc=t&&t[1]||""}return`
`+Lc+e}var Ac=!1;function Rc(e,t){if(!e||Ac)return"";Ac=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),a=i.length-1,l=o.length-1;1<=a&&0<=l&&i[a]!==o[l];)l--;for(;1<=a&&0<=l;a--,l--)if(i[a]!==o[l]){if(a!==1||l!==1)do if(a--,l--,0>l||i[a]!==o[l]){var s=`
`+i[a].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=a&&0<=l);break}}}finally{Ac=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?zo(e):""}function rE(e){switch(e.tag){case 5:return zo(e.type);case 16:return zo("Lazy");case 13:return zo("Suspense");case 19:return zo("SuspenseList");case 0:case 2:case 15:return e=Rc(e.type,!1),e;case 11:return e=Rc(e.type.render,!1),e;case 1:return e=Rc(e.type,!0),e;default:return""}}function gf(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case _i:return"Fragment";case Si:return"Portal";case pf:return"Profiler";case rh:return"StrictMode";case hf:return"Suspense";case mf:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case my:return(e.displayName||"Context")+".Consumer";case hy:return(e._context.displayName||"Context")+".Provider";case ih:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case oh:return t=e.displayName||null,t!==null?t:gf(e.type)||"Memo";case ir:t=e._payload,e=e._init;try{return gf(e(t))}catch{}}return null}function iE(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return gf(t);case 8:return t===rh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function _r(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function vy(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function oE(e){var t=vy(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(a){r=""+a,o.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function rs(e){e._valueTracker||(e._valueTracker=oE(e))}function yy(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=vy(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function ul(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function vf(e,t){var n=t.checked;return ke({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function pg(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=_r(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function xy(e,t){t=t.checked,t!=null&&nh(e,"checked",t,!1)}function yf(e,t){xy(e,t);var n=_r(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?xf(e,t.type,n):t.hasOwnProperty("defaultValue")&&xf(e,t.type,_r(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function hg(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function xf(e,t,n){(t!=="number"||ul(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var No=Array.isArray;function Di(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+_r(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function bf(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(V(91));return ke({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function mg(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(V(92));if(No(n)){if(1<n.length)throw Error(V(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:_r(n)}}function by(e,t){var n=_r(t.value),r=_r(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function gg(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function wy(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function wf(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?wy(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var is,Sy=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(is=is||document.createElement("div"),is.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=is.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function ua(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Yo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},aE=["Webkit","ms","Moz","O"];Object.keys(Yo).forEach(function(e){aE.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Yo[t]=Yo[e]})});function _y(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Yo.hasOwnProperty(e)&&Yo[e]?(""+t).trim():t+"px"}function Cy(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=_y(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var sE=ke({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Sf(e,t){if(t){if(sE[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(V(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(V(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(V(61))}if(t.style!=null&&typeof t.style!="object")throw Error(V(62))}}function _f(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Cf=null;function ah(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ef=null,Li=null,Ai=null;function vg(e){if(e=za(e)){if(typeof Ef!="function")throw Error(V(280));var t=e.stateNode;t&&(t=hu(t),Ef(e.stateNode,e.type,t))}}function Ey(e){Li?Ai?Ai.push(e):Ai=[e]:Li=e}function ky(){if(Li){var e=Li,t=Ai;if(Ai=Li=null,vg(e),t)for(e=0;e<t.length;e++)vg(t[e])}}function Py(e,t){return e(t)}function Ty(){}var Fc=!1;function Oy(e,t,n){if(Fc)return e(t,n);Fc=!0;try{return Py(e,t,n)}finally{Fc=!1,(Li!==null||Ai!==null)&&(Ty(),ky())}}function ca(e,t){var n=e.stateNode;if(n===null)return null;var r=hu(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(V(231,t,typeof n));return n}var kf=!1;if(Hn)try{var Eo={};Object.defineProperty(Eo,"passive",{get:function(){kf=!0}}),window.addEventListener("test",Eo,Eo),window.removeEventListener("test",Eo,Eo)}catch{kf=!1}function lE(e,t,n,r,i,o,a,l,s){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(d){this.onError(d)}}var Xo=!1,cl=null,dl=!1,Pf=null,uE={onError:function(e){Xo=!0,cl=e}};function cE(e,t,n,r,i,o,a,l,s){Xo=!1,cl=null,lE.apply(uE,arguments)}function dE(e,t,n,r,i,o,a,l,s){if(cE.apply(this,arguments),Xo){if(Xo){var u=cl;Xo=!1,cl=null}else throw Error(V(198));dl||(dl=!0,Pf=u)}}function oi(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function jy(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function yg(e){if(oi(e)!==e)throw Error(V(188))}function fE(e){var t=e.alternate;if(!t){if(t=oi(e),t===null)throw Error(V(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return yg(i),e;if(o===r)return yg(i),t;o=o.sibling}throw Error(V(188))}if(n.return!==r.return)n=i,r=o;else{for(var a=!1,l=i.child;l;){if(l===n){a=!0,n=i,r=o;break}if(l===r){a=!0,r=i,n=o;break}l=l.sibling}if(!a){for(l=o.child;l;){if(l===n){a=!0,n=o,r=i;break}if(l===r){a=!0,r=o,n=i;break}l=l.sibling}if(!a)throw Error(V(189))}}if(n.alternate!==r)throw Error(V(190))}if(n.tag!==3)throw Error(V(188));return n.stateNode.current===n?e:t}function My(e){return e=fE(e),e!==null?$y(e):null}function $y(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=$y(e);if(t!==null)return t;e=e.sibling}return null}var Iy=At.unstable_scheduleCallback,xg=At.unstable_cancelCallback,pE=At.unstable_shouldYield,hE=At.unstable_requestPaint,je=At.unstable_now,mE=At.unstable_getCurrentPriorityLevel,sh=At.unstable_ImmediatePriority,Dy=At.unstable_UserBlockingPriority,fl=At.unstable_NormalPriority,gE=At.unstable_LowPriority,Ly=At.unstable_IdlePriority,cu=null,_n=null;function vE(e){if(_n&&typeof _n.onCommitFiberRoot=="function")try{_n.onCommitFiberRoot(cu,e,void 0,(e.current.flags&128)===128)}catch{}}var sn=Math.clz32?Math.clz32:bE,yE=Math.log,xE=Math.LN2;function bE(e){return e>>>=0,e===0?32:31-(yE(e)/xE|0)|0}var os=64,as=4194304;function Bo(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function pl(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,a=n&268435455;if(a!==0){var l=a&~i;l!==0?r=Bo(l):(o&=a,o!==0&&(r=Bo(o)))}else a=n&~i,a!==0?r=Bo(a):o!==0&&(r=Bo(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-sn(t),i=1<<n,r|=e[n],t&=~i;return r}function wE(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function SE(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var a=31-sn(o),l=1<<a,s=i[a];s===-1?(!(l&n)||l&r)&&(i[a]=wE(l,t)):s<=t&&(e.expiredLanes|=l),o&=~l}}function Tf(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Ay(){var e=os;return os<<=1,!(os&4194240)&&(os=64),e}function zc(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ra(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-sn(t),e[t]=n}function _E(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-sn(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function lh(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-sn(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var he=0;function Ry(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Fy,uh,zy,Ny,By,Of=!1,ss=[],hr=null,mr=null,gr=null,da=new Map,fa=new Map,ar=[],CE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function bg(e,t){switch(e){case"focusin":case"focusout":hr=null;break;case"dragenter":case"dragleave":mr=null;break;case"mouseover":case"mouseout":gr=null;break;case"pointerover":case"pointerout":da.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":fa.delete(t.pointerId)}}function ko(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=za(t),t!==null&&uh(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function EE(e,t,n,r,i){switch(t){case"focusin":return hr=ko(hr,e,t,n,r,i),!0;case"dragenter":return mr=ko(mr,e,t,n,r,i),!0;case"mouseover":return gr=ko(gr,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return da.set(o,ko(da.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,fa.set(o,ko(fa.get(o)||null,e,t,n,r,i)),!0}return!1}function Vy(e){var t=Nr(e.target);if(t!==null){var n=oi(t);if(n!==null){if(t=n.tag,t===13){if(t=jy(n),t!==null){e.blockedOn=t,By(e.priority,function(){zy(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ds(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=jf(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Cf=r,n.target.dispatchEvent(r),Cf=null}else return t=za(n),t!==null&&uh(t),e.blockedOn=n,!1;t.shift()}return!0}function wg(e,t,n){Ds(e)&&n.delete(t)}function kE(){Of=!1,hr!==null&&Ds(hr)&&(hr=null),mr!==null&&Ds(mr)&&(mr=null),gr!==null&&Ds(gr)&&(gr=null),da.forEach(wg),fa.forEach(wg)}function Po(e,t){e.blockedOn===t&&(e.blockedOn=null,Of||(Of=!0,At.unstable_scheduleCallback(At.unstable_NormalPriority,kE)))}function pa(e){function t(i){return Po(i,e)}if(0<ss.length){Po(ss[0],e);for(var n=1;n<ss.length;n++){var r=ss[n];r.blockedOn===e&&(r.blockedOn=null)}}for(hr!==null&&Po(hr,e),mr!==null&&Po(mr,e),gr!==null&&Po(gr,e),da.forEach(t),fa.forEach(t),n=0;n<ar.length;n++)r=ar[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<ar.length&&(n=ar[0],n.blockedOn===null);)Vy(n),n.blockedOn===null&&ar.shift()}var Ri=Qn.ReactCurrentBatchConfig,hl=!0;function PE(e,t,n,r){var i=he,o=Ri.transition;Ri.transition=null;try{he=1,ch(e,t,n,r)}finally{he=i,Ri.transition=o}}function TE(e,t,n,r){var i=he,o=Ri.transition;Ri.transition=null;try{he=4,ch(e,t,n,r)}finally{he=i,Ri.transition=o}}function ch(e,t,n,r){if(hl){var i=jf(e,t,n,r);if(i===null)Xc(e,t,r,ml,n),bg(e,r);else if(EE(i,e,t,n,r))r.stopPropagation();else if(bg(e,r),t&4&&-1<CE.indexOf(e)){for(;i!==null;){var o=za(i);if(o!==null&&Fy(o),o=jf(e,t,n,r),o===null&&Xc(e,t,r,ml,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else Xc(e,t,r,null,n)}}var ml=null;function jf(e,t,n,r){if(ml=null,e=ah(r),e=Nr(e),e!==null)if(t=oi(e),t===null)e=null;else if(n=t.tag,n===13){if(e=jy(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return ml=e,null}function Uy(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(mE()){case sh:return 1;case Dy:return 4;case fl:case gE:return 16;case Ly:return 536870912;default:return 16}default:return 16}}var ur=null,dh=null,Ls=null;function Hy(){if(Ls)return Ls;var e,t=dh,n=t.length,r,i="value"in ur?ur.value:ur.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===i[o-r];r++);return Ls=i.slice(e,1<r?1-r:void 0)}function As(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ls(){return!0}function Sg(){return!1}function zt(e){function t(n,r,i,o,a){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=a,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(o):o[l]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?ls:Sg,this.isPropagationStopped=Sg,this}return ke(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ls)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ls)},persist:function(){},isPersistent:ls}),t}var uo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},fh=zt(uo),Fa=ke({},uo,{view:0,detail:0}),OE=zt(Fa),Nc,Bc,To,du=ke({},Fa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ph,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==To&&(To&&e.type==="mousemove"?(Nc=e.screenX-To.screenX,Bc=e.screenY-To.screenY):Bc=Nc=0,To=e),Nc)},movementY:function(e){return"movementY"in e?e.movementY:Bc}}),_g=zt(du),jE=ke({},du,{dataTransfer:0}),ME=zt(jE),$E=ke({},Fa,{relatedTarget:0}),Vc=zt($E),IE=ke({},uo,{animationName:0,elapsedTime:0,pseudoElement:0}),DE=zt(IE),LE=ke({},uo,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),AE=zt(LE),RE=ke({},uo,{data:0}),Cg=zt(RE),FE={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},zE={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},NE={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function BE(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=NE[e])?!!t[e]:!1}function ph(){return BE}var VE=ke({},Fa,{key:function(e){if(e.key){var t=FE[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=As(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?zE[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ph,charCode:function(e){return e.type==="keypress"?As(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?As(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),UE=zt(VE),HE=ke({},du,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Eg=zt(HE),WE=ke({},Fa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ph}),GE=zt(WE),qE=ke({},uo,{propertyName:0,elapsedTime:0,pseudoElement:0}),YE=zt(qE),XE=ke({},du,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),KE=zt(XE),QE=[9,13,27,32],hh=Hn&&"CompositionEvent"in window,Ko=null;Hn&&"documentMode"in document&&(Ko=document.documentMode);var ZE=Hn&&"TextEvent"in window&&!Ko,Wy=Hn&&(!hh||Ko&&8<Ko&&11>=Ko),kg=String.fromCharCode(32),Pg=!1;function Gy(e,t){switch(e){case"keyup":return QE.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function qy(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ci=!1;function JE(e,t){switch(e){case"compositionend":return qy(t);case"keypress":return t.which!==32?null:(Pg=!0,kg);case"textInput":return e=t.data,e===kg&&Pg?null:e;default:return null}}function ek(e,t){if(Ci)return e==="compositionend"||!hh&&Gy(e,t)?(e=Hy(),Ls=dh=ur=null,Ci=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Wy&&t.locale!=="ko"?null:t.data;default:return null}}var tk={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Tg(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!tk[e.type]:t==="textarea"}function Yy(e,t,n,r){Ey(r),t=gl(t,"onChange"),0<t.length&&(n=new fh("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Qo=null,ha=null;function nk(e){ox(e,0)}function fu(e){var t=Pi(e);if(yy(t))return e}function rk(e,t){if(e==="change")return t}var Xy=!1;if(Hn){var Uc;if(Hn){var Hc="oninput"in document;if(!Hc){var Og=document.createElement("div");Og.setAttribute("oninput","return;"),Hc=typeof Og.oninput=="function"}Uc=Hc}else Uc=!1;Xy=Uc&&(!document.documentMode||9<document.documentMode)}function jg(){Qo&&(Qo.detachEvent("onpropertychange",Ky),ha=Qo=null)}function Ky(e){if(e.propertyName==="value"&&fu(ha)){var t=[];Yy(t,ha,e,ah(e)),Oy(nk,t)}}function ik(e,t,n){e==="focusin"?(jg(),Qo=t,ha=n,Qo.attachEvent("onpropertychange",Ky)):e==="focusout"&&jg()}function ok(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return fu(ha)}function ak(e,t){if(e==="click")return fu(t)}function sk(e,t){if(e==="input"||e==="change")return fu(t)}function lk(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var fn=typeof Object.is=="function"?Object.is:lk;function ma(e,t){if(fn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!ff.call(t,i)||!fn(e[i],t[i]))return!1}return!0}function Mg(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function $g(e,t){var n=Mg(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Mg(n)}}function Qy(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Qy(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Zy(){for(var e=window,t=ul();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=ul(e.document)}return t}function mh(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function uk(e){var t=Zy(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Qy(n.ownerDocument.documentElement,n)){if(r!==null&&mh(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=$g(n,o);var a=$g(n,r);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var ck=Hn&&"documentMode"in document&&11>=document.documentMode,Ei=null,Mf=null,Zo=null,$f=!1;function Ig(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;$f||Ei==null||Ei!==ul(r)||(r=Ei,"selectionStart"in r&&mh(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Zo&&ma(Zo,r)||(Zo=r,r=gl(Mf,"onSelect"),0<r.length&&(t=new fh("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Ei)))}function us(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var ki={animationend:us("Animation","AnimationEnd"),animationiteration:us("Animation","AnimationIteration"),animationstart:us("Animation","AnimationStart"),transitionend:us("Transition","TransitionEnd")},Wc={},Jy={};Hn&&(Jy=document.createElement("div").style,"AnimationEvent"in window||(delete ki.animationend.animation,delete ki.animationiteration.animation,delete ki.animationstart.animation),"TransitionEvent"in window||delete ki.transitionend.transition);function pu(e){if(Wc[e])return Wc[e];if(!ki[e])return e;var t=ki[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Jy)return Wc[e]=t[n];return e}var ex=pu("animationend"),tx=pu("animationiteration"),nx=pu("animationstart"),rx=pu("transitionend"),ix=new Map,Dg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function kr(e,t){ix.set(e,t),ii(t,[e])}for(var Gc=0;Gc<Dg.length;Gc++){var qc=Dg[Gc],dk=qc.toLowerCase(),fk=qc[0].toUpperCase()+qc.slice(1);kr(dk,"on"+fk)}kr(ex,"onAnimationEnd");kr(tx,"onAnimationIteration");kr(nx,"onAnimationStart");kr("dblclick","onDoubleClick");kr("focusin","onFocus");kr("focusout","onBlur");kr(rx,"onTransitionEnd");Ui("onMouseEnter",["mouseout","mouseover"]);Ui("onMouseLeave",["mouseout","mouseover"]);Ui("onPointerEnter",["pointerout","pointerover"]);Ui("onPointerLeave",["pointerout","pointerover"]);ii("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ii("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ii("onBeforeInput",["compositionend","keypress","textInput","paste"]);ii("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ii("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ii("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Vo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),pk=new Set("cancel close invalid load scroll toggle".split(" ").concat(Vo));function Lg(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,dE(r,t,void 0,e),e.currentTarget=null}function ox(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var a=r.length-1;0<=a;a--){var l=r[a],s=l.instance,u=l.currentTarget;if(l=l.listener,s!==o&&i.isPropagationStopped())break e;Lg(i,l,u),o=s}else for(a=0;a<r.length;a++){if(l=r[a],s=l.instance,u=l.currentTarget,l=l.listener,s!==o&&i.isPropagationStopped())break e;Lg(i,l,u),o=s}}}if(dl)throw e=Pf,dl=!1,Pf=null,e}function ve(e,t){var n=t[Rf];n===void 0&&(n=t[Rf]=new Set);var r=e+"__bubble";n.has(r)||(ax(t,e,2,!1),n.add(r))}function Yc(e,t,n){var r=0;t&&(r|=4),ax(n,e,r,t)}var cs="_reactListening"+Math.random().toString(36).slice(2);function ga(e){if(!e[cs]){e[cs]=!0,py.forEach(function(n){n!=="selectionchange"&&(pk.has(n)||Yc(n,!1,e),Yc(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[cs]||(t[cs]=!0,Yc("selectionchange",!1,t))}}function ax(e,t,n,r){switch(Uy(t)){case 1:var i=PE;break;case 4:i=TE;break;default:i=ch}n=i.bind(null,t,n,e),i=void 0,!kf||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Xc(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(a===4)for(a=r.return;a!==null;){var s=a.tag;if((s===3||s===4)&&(s=a.stateNode.containerInfo,s===i||s.nodeType===8&&s.parentNode===i))return;a=a.return}for(;l!==null;){if(a=Nr(l),a===null)return;if(s=a.tag,s===5||s===6){r=o=a;continue e}l=l.parentNode}}r=r.return}Oy(function(){var u=o,d=ah(n),c=[];e:{var y=ix.get(e);if(y!==void 0){var p=fh,m=e;switch(e){case"keypress":if(As(n)===0)break e;case"keydown":case"keyup":p=UE;break;case"focusin":m="focus",p=Vc;break;case"focusout":m="blur",p=Vc;break;case"beforeblur":case"afterblur":p=Vc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=_g;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=ME;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=GE;break;case ex:case tx:case nx:p=DE;break;case rx:p=YE;break;case"scroll":p=OE;break;case"wheel":p=KE;break;case"copy":case"cut":case"paste":p=AE;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Eg}var v=(t&4)!==0,w=!v&&e==="scroll",h=v?y!==null?y+"Capture":null:y;v=[];for(var g=u,x;g!==null;){x=g;var S=x.stateNode;if(x.tag===5&&S!==null&&(x=S,h!==null&&(S=ca(g,h),S!=null&&v.push(va(g,S,x)))),w)break;g=g.return}0<v.length&&(y=new p(y,m,null,n,d),c.push({event:y,listeners:v}))}}if(!(t&7)){e:{if(y=e==="mouseover"||e==="pointerover",p=e==="mouseout"||e==="pointerout",y&&n!==Cf&&(m=n.relatedTarget||n.fromElement)&&(Nr(m)||m[Wn]))break e;if((p||y)&&(y=d.window===d?d:(y=d.ownerDocument)?y.defaultView||y.parentWindow:window,p?(m=n.relatedTarget||n.toElement,p=u,m=m?Nr(m):null,m!==null&&(w=oi(m),m!==w||m.tag!==5&&m.tag!==6)&&(m=null)):(p=null,m=u),p!==m)){if(v=_g,S="onMouseLeave",h="onMouseEnter",g="mouse",(e==="pointerout"||e==="pointerover")&&(v=Eg,S="onPointerLeave",h="onPointerEnter",g="pointer"),w=p==null?y:Pi(p),x=m==null?y:Pi(m),y=new v(S,g+"leave",p,n,d),y.target=w,y.relatedTarget=x,S=null,Nr(d)===u&&(v=new v(h,g+"enter",m,n,d),v.target=x,v.relatedTarget=w,S=v),w=S,p&&m)t:{for(v=p,h=m,g=0,x=v;x;x=ui(x))g++;for(x=0,S=h;S;S=ui(S))x++;for(;0<g-x;)v=ui(v),g--;for(;0<x-g;)h=ui(h),x--;for(;g--;){if(v===h||h!==null&&v===h.alternate)break t;v=ui(v),h=ui(h)}v=null}else v=null;p!==null&&Ag(c,y,p,v,!1),m!==null&&w!==null&&Ag(c,w,m,v,!0)}}e:{if(y=u?Pi(u):window,p=y.nodeName&&y.nodeName.toLowerCase(),p==="select"||p==="input"&&y.type==="file")var C=rk;else if(Tg(y))if(Xy)C=sk;else{C=ok;var T=ik}else(p=y.nodeName)&&p.toLowerCase()==="input"&&(y.type==="checkbox"||y.type==="radio")&&(C=ak);if(C&&(C=C(e,u))){Yy(c,C,n,d);break e}T&&T(e,y,u),e==="focusout"&&(T=y._wrapperState)&&T.controlled&&y.type==="number"&&xf(y,"number",y.value)}switch(T=u?Pi(u):window,e){case"focusin":(Tg(T)||T.contentEditable==="true")&&(Ei=T,Mf=u,Zo=null);break;case"focusout":Zo=Mf=Ei=null;break;case"mousedown":$f=!0;break;case"contextmenu":case"mouseup":case"dragend":$f=!1,Ig(c,n,d);break;case"selectionchange":if(ck)break;case"keydown":case"keyup":Ig(c,n,d)}var E;if(hh)e:{switch(e){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else Ci?Gy(e,n)&&(_="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(_="onCompositionStart");_&&(Wy&&n.locale!=="ko"&&(Ci||_!=="onCompositionStart"?_==="onCompositionEnd"&&Ci&&(E=Hy()):(ur=d,dh="value"in ur?ur.value:ur.textContent,Ci=!0)),T=gl(u,_),0<T.length&&(_=new Cg(_,e,null,n,d),c.push({event:_,listeners:T}),E?_.data=E:(E=qy(n),E!==null&&(_.data=E)))),(E=ZE?JE(e,n):ek(e,n))&&(u=gl(u,"onBeforeInput"),0<u.length&&(d=new Cg("onBeforeInput","beforeinput",null,n,d),c.push({event:d,listeners:u}),d.data=E))}ox(c,t)})}function va(e,t,n){return{instance:e,listener:t,currentTarget:n}}function gl(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=ca(e,n),o!=null&&r.unshift(va(e,o,i)),o=ca(e,t),o!=null&&r.push(va(e,o,i))),e=e.return}return r}function ui(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ag(e,t,n,r,i){for(var o=t._reactName,a=[];n!==null&&n!==r;){var l=n,s=l.alternate,u=l.stateNode;if(s!==null&&s===r)break;l.tag===5&&u!==null&&(l=u,i?(s=ca(n,o),s!=null&&a.unshift(va(n,s,l))):i||(s=ca(n,o),s!=null&&a.push(va(n,s,l)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var hk=/\r\n?/g,mk=/\u0000|\uFFFD/g;function Rg(e){return(typeof e=="string"?e:""+e).replace(hk,`
`).replace(mk,"")}function ds(e,t,n){if(t=Rg(t),Rg(e)!==t&&n)throw Error(V(425))}function vl(){}var If=null,Df=null;function Lf(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Af=typeof setTimeout=="function"?setTimeout:void 0,gk=typeof clearTimeout=="function"?clearTimeout:void 0,Fg=typeof Promise=="function"?Promise:void 0,vk=typeof queueMicrotask=="function"?queueMicrotask:typeof Fg<"u"?function(e){return Fg.resolve(null).then(e).catch(yk)}:Af;function yk(e){setTimeout(function(){throw e})}function Kc(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),pa(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);pa(t)}function vr(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function zg(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var co=Math.random().toString(36).slice(2),wn="__reactFiber$"+co,ya="__reactProps$"+co,Wn="__reactContainer$"+co,Rf="__reactEvents$"+co,xk="__reactListeners$"+co,bk="__reactHandles$"+co;function Nr(e){var t=e[wn];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Wn]||n[wn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=zg(e);e!==null;){if(n=e[wn])return n;e=zg(e)}return t}e=n,n=e.parentNode}return null}function za(e){return e=e[wn]||e[Wn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Pi(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(V(33))}function hu(e){return e[ya]||null}var Ff=[],Ti=-1;function Pr(e){return{current:e}}function xe(e){0>Ti||(e.current=Ff[Ti],Ff[Ti]=null,Ti--)}function ge(e,t){Ti++,Ff[Ti]=e.current,e.current=t}var Cr={},lt=Pr(Cr),_t=Pr(!1),qr=Cr;function Hi(e,t){var n=e.type.contextTypes;if(!n)return Cr;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Ct(e){return e=e.childContextTypes,e!=null}function yl(){xe(_t),xe(lt)}function Ng(e,t,n){if(lt.current!==Cr)throw Error(V(168));ge(lt,t),ge(_t,n)}function sx(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(V(108,iE(e)||"Unknown",i));return ke({},n,r)}function xl(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Cr,qr=lt.current,ge(lt,e),ge(_t,_t.current),!0}function Bg(e,t,n){var r=e.stateNode;if(!r)throw Error(V(169));n?(e=sx(e,t,qr),r.__reactInternalMemoizedMergedChildContext=e,xe(_t),xe(lt),ge(lt,e)):xe(_t),ge(_t,n)}var An=null,mu=!1,Qc=!1;function lx(e){An===null?An=[e]:An.push(e)}function wk(e){mu=!0,lx(e)}function Tr(){if(!Qc&&An!==null){Qc=!0;var e=0,t=he;try{var n=An;for(he=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}An=null,mu=!1}catch(i){throw An!==null&&(An=An.slice(e+1)),Iy(sh,Tr),i}finally{he=t,Qc=!1}}return null}var Oi=[],ji=0,bl=null,wl=0,Ut=[],Ht=0,Yr=null,zn=1,Nn="";function Dr(e,t){Oi[ji++]=wl,Oi[ji++]=bl,bl=e,wl=t}function ux(e,t,n){Ut[Ht++]=zn,Ut[Ht++]=Nn,Ut[Ht++]=Yr,Yr=e;var r=zn;e=Nn;var i=32-sn(r)-1;r&=~(1<<i),n+=1;var o=32-sn(t)+i;if(30<o){var a=i-i%5;o=(r&(1<<a)-1).toString(32),r>>=a,i-=a,zn=1<<32-sn(t)+i|n<<i|r,Nn=o+e}else zn=1<<o|n<<i|r,Nn=e}function gh(e){e.return!==null&&(Dr(e,1),ux(e,1,0))}function vh(e){for(;e===bl;)bl=Oi[--ji],Oi[ji]=null,wl=Oi[--ji],Oi[ji]=null;for(;e===Yr;)Yr=Ut[--Ht],Ut[Ht]=null,Nn=Ut[--Ht],Ut[Ht]=null,zn=Ut[--Ht],Ut[Ht]=null}var Dt=null,$t=null,_e=!1,on=null;function cx(e,t){var n=Wt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Vg(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Dt=e,$t=vr(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Dt=e,$t=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Yr!==null?{id:zn,overflow:Nn}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Wt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Dt=e,$t=null,!0):!1;default:return!1}}function zf(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Nf(e){if(_e){var t=$t;if(t){var n=t;if(!Vg(e,t)){if(zf(e))throw Error(V(418));t=vr(n.nextSibling);var r=Dt;t&&Vg(e,t)?cx(r,n):(e.flags=e.flags&-4097|2,_e=!1,Dt=e)}}else{if(zf(e))throw Error(V(418));e.flags=e.flags&-4097|2,_e=!1,Dt=e}}}function Ug(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Dt=e}function fs(e){if(e!==Dt)return!1;if(!_e)return Ug(e),_e=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Lf(e.type,e.memoizedProps)),t&&(t=$t)){if(zf(e))throw dx(),Error(V(418));for(;t;)cx(e,t),t=vr(t.nextSibling)}if(Ug(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(V(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){$t=vr(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}$t=null}}else $t=Dt?vr(e.stateNode.nextSibling):null;return!0}function dx(){for(var e=$t;e;)e=vr(e.nextSibling)}function Wi(){$t=Dt=null,_e=!1}function yh(e){on===null?on=[e]:on.push(e)}var Sk=Qn.ReactCurrentBatchConfig;function tn(e,t){if(e&&e.defaultProps){t=ke({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Sl=Pr(null),_l=null,Mi=null,xh=null;function bh(){xh=Mi=_l=null}function wh(e){var t=Sl.current;xe(Sl),e._currentValue=t}function Bf(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Fi(e,t){_l=e,xh=Mi=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(St=!0),e.firstContext=null)}function qt(e){var t=e._currentValue;if(xh!==e)if(e={context:e,memoizedValue:t,next:null},Mi===null){if(_l===null)throw Error(V(308));Mi=e,_l.dependencies={lanes:0,firstContext:e}}else Mi=Mi.next=e;return t}var Br=null;function Sh(e){Br===null?Br=[e]:Br.push(e)}function fx(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Sh(t)):(n.next=i.next,i.next=n),t.interleaved=n,Gn(e,r)}function Gn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var or=!1;function _h(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function px(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Bn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function yr(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,se&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Gn(e,n)}return i=r.interleaved,i===null?(t.next=t,Sh(r)):(t.next=i.next,i.next=t),r.interleaved=t,Gn(e,n)}function Rs(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,lh(e,n)}}function Hg(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=a:o=o.next=a,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Cl(e,t,n,r){var i=e.updateQueue;or=!1;var o=i.firstBaseUpdate,a=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var s=l,u=s.next;s.next=null,a===null?o=u:a.next=u,a=s;var d=e.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==a&&(l===null?d.firstBaseUpdate=u:l.next=u,d.lastBaseUpdate=s))}if(o!==null){var c=i.baseState;a=0,d=u=s=null,l=o;do{var y=l.lane,p=l.eventTime;if((r&y)===y){d!==null&&(d=d.next={eventTime:p,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var m=e,v=l;switch(y=t,p=n,v.tag){case 1:if(m=v.payload,typeof m=="function"){c=m.call(p,c,y);break e}c=m;break e;case 3:m.flags=m.flags&-65537|128;case 0:if(m=v.payload,y=typeof m=="function"?m.call(p,c,y):m,y==null)break e;c=ke({},c,y);break e;case 2:or=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,y=i.effects,y===null?i.effects=[l]:y.push(l))}else p={eventTime:p,lane:y,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(u=d=p,s=c):d=d.next=p,a|=y;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;y=l,l=y.next,y.next=null,i.lastBaseUpdate=y,i.shared.pending=null}}while(1);if(d===null&&(s=c),i.baseState=s,i.firstBaseUpdate=u,i.lastBaseUpdate=d,t=i.shared.interleaved,t!==null){i=t;do a|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);Kr|=a,e.lanes=a,e.memoizedState=c}}function Wg(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(V(191,i));i.call(r)}}}var hx=new fy.Component().refs;function Vf(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ke({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var gu={isMounted:function(e){return(e=e._reactInternals)?oi(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=pt(),i=br(e),o=Bn(r,i);o.payload=t,n!=null&&(o.callback=n),t=yr(e,o,i),t!==null&&(ln(t,e,i,r),Rs(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=pt(),i=br(e),o=Bn(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=yr(e,o,i),t!==null&&(ln(t,e,i,r),Rs(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=pt(),r=br(e),i=Bn(n,r);i.tag=2,t!=null&&(i.callback=t),t=yr(e,i,r),t!==null&&(ln(t,e,r,n),Rs(t,e,r))}};function Gg(e,t,n,r,i,o,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,a):t.prototype&&t.prototype.isPureReactComponent?!ma(n,r)||!ma(i,o):!0}function mx(e,t,n){var r=!1,i=Cr,o=t.contextType;return typeof o=="object"&&o!==null?o=qt(o):(i=Ct(t)?qr:lt.current,r=t.contextTypes,o=(r=r!=null)?Hi(e,i):Cr),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=gu,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function qg(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&gu.enqueueReplaceState(t,t.state,null)}function Uf(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=hx,_h(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=qt(o):(o=Ct(t)?qr:lt.current,i.context=Hi(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Vf(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&gu.enqueueReplaceState(i,i.state,null),Cl(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Oo(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(V(309));var r=n.stateNode}if(!r)throw Error(V(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(a){var l=i.refs;l===hx&&(l=i.refs={}),a===null?delete l[o]:l[o]=a},t._stringRef=o,t)}if(typeof e!="string")throw Error(V(284));if(!n._owner)throw Error(V(290,e))}return e}function ps(e,t){throw e=Object.prototype.toString.call(t),Error(V(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Yg(e){var t=e._init;return t(e._payload)}function gx(e){function t(h,g){if(e){var x=h.deletions;x===null?(h.deletions=[g],h.flags|=16):x.push(g)}}function n(h,g){if(!e)return null;for(;g!==null;)t(h,g),g=g.sibling;return null}function r(h,g){for(h=new Map;g!==null;)g.key!==null?h.set(g.key,g):h.set(g.index,g),g=g.sibling;return h}function i(h,g){return h=wr(h,g),h.index=0,h.sibling=null,h}function o(h,g,x){return h.index=x,e?(x=h.alternate,x!==null?(x=x.index,x<g?(h.flags|=2,g):x):(h.flags|=2,g)):(h.flags|=1048576,g)}function a(h){return e&&h.alternate===null&&(h.flags|=2),h}function l(h,g,x,S){return g===null||g.tag!==6?(g=id(x,h.mode,S),g.return=h,g):(g=i(g,x),g.return=h,g)}function s(h,g,x,S){var C=x.type;return C===_i?d(h,g,x.props.children,S,x.key):g!==null&&(g.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===ir&&Yg(C)===g.type)?(S=i(g,x.props),S.ref=Oo(h,g,x),S.return=h,S):(S=Us(x.type,x.key,x.props,null,h.mode,S),S.ref=Oo(h,g,x),S.return=h,S)}function u(h,g,x,S){return g===null||g.tag!==4||g.stateNode.containerInfo!==x.containerInfo||g.stateNode.implementation!==x.implementation?(g=od(x,h.mode,S),g.return=h,g):(g=i(g,x.children||[]),g.return=h,g)}function d(h,g,x,S,C){return g===null||g.tag!==7?(g=Wr(x,h.mode,S,C),g.return=h,g):(g=i(g,x),g.return=h,g)}function c(h,g,x){if(typeof g=="string"&&g!==""||typeof g=="number")return g=id(""+g,h.mode,x),g.return=h,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case ns:return x=Us(g.type,g.key,g.props,null,h.mode,x),x.ref=Oo(h,null,g),x.return=h,x;case Si:return g=od(g,h.mode,x),g.return=h,g;case ir:var S=g._init;return c(h,S(g._payload),x)}if(No(g)||Co(g))return g=Wr(g,h.mode,x,null),g.return=h,g;ps(h,g)}return null}function y(h,g,x,S){var C=g!==null?g.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return C!==null?null:l(h,g,""+x,S);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case ns:return x.key===C?s(h,g,x,S):null;case Si:return x.key===C?u(h,g,x,S):null;case ir:return C=x._init,y(h,g,C(x._payload),S)}if(No(x)||Co(x))return C!==null?null:d(h,g,x,S,null);ps(h,x)}return null}function p(h,g,x,S,C){if(typeof S=="string"&&S!==""||typeof S=="number")return h=h.get(x)||null,l(g,h,""+S,C);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case ns:return h=h.get(S.key===null?x:S.key)||null,s(g,h,S,C);case Si:return h=h.get(S.key===null?x:S.key)||null,u(g,h,S,C);case ir:var T=S._init;return p(h,g,x,T(S._payload),C)}if(No(S)||Co(S))return h=h.get(x)||null,d(g,h,S,C,null);ps(g,S)}return null}function m(h,g,x,S){for(var C=null,T=null,E=g,_=g=0,$=null;E!==null&&_<x.length;_++){E.index>_?($=E,E=null):$=E.sibling;var M=y(h,E,x[_],S);if(M===null){E===null&&(E=$);break}e&&E&&M.alternate===null&&t(h,E),g=o(M,g,_),T===null?C=M:T.sibling=M,T=M,E=$}if(_===x.length)return n(h,E),_e&&Dr(h,_),C;if(E===null){for(;_<x.length;_++)E=c(h,x[_],S),E!==null&&(g=o(E,g,_),T===null?C=E:T.sibling=E,T=E);return _e&&Dr(h,_),C}for(E=r(h,E);_<x.length;_++)$=p(E,h,_,x[_],S),$!==null&&(e&&$.alternate!==null&&E.delete($.key===null?_:$.key),g=o($,g,_),T===null?C=$:T.sibling=$,T=$);return e&&E.forEach(function(R){return t(h,R)}),_e&&Dr(h,_),C}function v(h,g,x,S){var C=Co(x);if(typeof C!="function")throw Error(V(150));if(x=C.call(x),x==null)throw Error(V(151));for(var T=C=null,E=g,_=g=0,$=null,M=x.next();E!==null&&!M.done;_++,M=x.next()){E.index>_?($=E,E=null):$=E.sibling;var R=y(h,E,M.value,S);if(R===null){E===null&&(E=$);break}e&&E&&R.alternate===null&&t(h,E),g=o(R,g,_),T===null?C=R:T.sibling=R,T=R,E=$}if(M.done)return n(h,E),_e&&Dr(h,_),C;if(E===null){for(;!M.done;_++,M=x.next())M=c(h,M.value,S),M!==null&&(g=o(M,g,_),T===null?C=M:T.sibling=M,T=M);return _e&&Dr(h,_),C}for(E=r(h,E);!M.done;_++,M=x.next())M=p(E,h,_,M.value,S),M!==null&&(e&&M.alternate!==null&&E.delete(M.key===null?_:M.key),g=o(M,g,_),T===null?C=M:T.sibling=M,T=M);return e&&E.forEach(function(A){return t(h,A)}),_e&&Dr(h,_),C}function w(h,g,x,S){if(typeof x=="object"&&x!==null&&x.type===_i&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case ns:e:{for(var C=x.key,T=g;T!==null;){if(T.key===C){if(C=x.type,C===_i){if(T.tag===7){n(h,T.sibling),g=i(T,x.props.children),g.return=h,h=g;break e}}else if(T.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===ir&&Yg(C)===T.type){n(h,T.sibling),g=i(T,x.props),g.ref=Oo(h,T,x),g.return=h,h=g;break e}n(h,T);break}else t(h,T);T=T.sibling}x.type===_i?(g=Wr(x.props.children,h.mode,S,x.key),g.return=h,h=g):(S=Us(x.type,x.key,x.props,null,h.mode,S),S.ref=Oo(h,g,x),S.return=h,h=S)}return a(h);case Si:e:{for(T=x.key;g!==null;){if(g.key===T)if(g.tag===4&&g.stateNode.containerInfo===x.containerInfo&&g.stateNode.implementation===x.implementation){n(h,g.sibling),g=i(g,x.children||[]),g.return=h,h=g;break e}else{n(h,g);break}else t(h,g);g=g.sibling}g=od(x,h.mode,S),g.return=h,h=g}return a(h);case ir:return T=x._init,w(h,g,T(x._payload),S)}if(No(x))return m(h,g,x,S);if(Co(x))return v(h,g,x,S);ps(h,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,g!==null&&g.tag===6?(n(h,g.sibling),g=i(g,x),g.return=h,h=g):(n(h,g),g=id(x,h.mode,S),g.return=h,h=g),a(h)):n(h,g)}return w}var Gi=gx(!0),vx=gx(!1),Na={},Cn=Pr(Na),xa=Pr(Na),ba=Pr(Na);function Vr(e){if(e===Na)throw Error(V(174));return e}function Ch(e,t){switch(ge(ba,t),ge(xa,e),ge(Cn,Na),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:wf(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=wf(t,e)}xe(Cn),ge(Cn,t)}function qi(){xe(Cn),xe(xa),xe(ba)}function yx(e){Vr(ba.current);var t=Vr(Cn.current),n=wf(t,e.type);t!==n&&(ge(xa,e),ge(Cn,n))}function Eh(e){xa.current===e&&(xe(Cn),xe(xa))}var Ce=Pr(0);function El(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Zc=[];function kh(){for(var e=0;e<Zc.length;e++)Zc[e]._workInProgressVersionPrimary=null;Zc.length=0}var Fs=Qn.ReactCurrentDispatcher,Jc=Qn.ReactCurrentBatchConfig,Xr=0,Ee=null,Fe=null,We=null,kl=!1,Jo=!1,wa=0,_k=0;function et(){throw Error(V(321))}function Ph(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!fn(e[n],t[n]))return!1;return!0}function Th(e,t,n,r,i,o){if(Xr=o,Ee=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Fs.current=e===null||e.memoizedState===null?Pk:Tk,e=n(r,i),Jo){o=0;do{if(Jo=!1,wa=0,25<=o)throw Error(V(301));o+=1,We=Fe=null,t.updateQueue=null,Fs.current=Ok,e=n(r,i)}while(Jo)}if(Fs.current=Pl,t=Fe!==null&&Fe.next!==null,Xr=0,We=Fe=Ee=null,kl=!1,t)throw Error(V(300));return e}function Oh(){var e=wa!==0;return wa=0,e}function yn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return We===null?Ee.memoizedState=We=e:We=We.next=e,We}function Yt(){if(Fe===null){var e=Ee.alternate;e=e!==null?e.memoizedState:null}else e=Fe.next;var t=We===null?Ee.memoizedState:We.next;if(t!==null)We=t,Fe=e;else{if(e===null)throw Error(V(310));Fe=e,e={memoizedState:Fe.memoizedState,baseState:Fe.baseState,baseQueue:Fe.baseQueue,queue:Fe.queue,next:null},We===null?Ee.memoizedState=We=e:We=We.next=e}return We}function Sa(e,t){return typeof t=="function"?t(e):t}function ed(e){var t=Yt(),n=t.queue;if(n===null)throw Error(V(311));n.lastRenderedReducer=e;var r=Fe,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var a=i.next;i.next=o.next,o.next=a}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var l=a=null,s=null,u=o;do{var d=u.lane;if((Xr&d)===d)s!==null&&(s=s.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var c={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};s===null?(l=s=c,a=r):s=s.next=c,Ee.lanes|=d,Kr|=d}u=u.next}while(u!==null&&u!==o);s===null?a=r:s.next=l,fn(r,t.memoizedState)||(St=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,Ee.lanes|=o,Kr|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function td(e){var t=Yt(),n=t.queue;if(n===null)throw Error(V(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var a=i=i.next;do o=e(o,a.action),a=a.next;while(a!==i);fn(o,t.memoizedState)||(St=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function xx(){}function bx(e,t){var n=Ee,r=Yt(),i=t(),o=!fn(r.memoizedState,i);if(o&&(r.memoizedState=i,St=!0),r=r.queue,jh(_x.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||We!==null&&We.memoizedState.tag&1){if(n.flags|=2048,_a(9,Sx.bind(null,n,r,i,t),void 0,null),Ge===null)throw Error(V(349));Xr&30||wx(n,t,i)}return i}function wx(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Ee.updateQueue,t===null?(t={lastEffect:null,stores:null},Ee.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Sx(e,t,n,r){t.value=n,t.getSnapshot=r,Cx(t)&&Ex(e)}function _x(e,t,n){return n(function(){Cx(t)&&Ex(e)})}function Cx(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!fn(e,n)}catch{return!0}}function Ex(e){var t=Gn(e,1);t!==null&&ln(t,e,1,-1)}function Xg(e){var t=yn();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Sa,lastRenderedState:e},t.queue=e,e=e.dispatch=kk.bind(null,Ee,e),[t.memoizedState,e]}function _a(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Ee.updateQueue,t===null?(t={lastEffect:null,stores:null},Ee.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function kx(){return Yt().memoizedState}function zs(e,t,n,r){var i=yn();Ee.flags|=e,i.memoizedState=_a(1|t,n,void 0,r===void 0?null:r)}function vu(e,t,n,r){var i=Yt();r=r===void 0?null:r;var o=void 0;if(Fe!==null){var a=Fe.memoizedState;if(o=a.destroy,r!==null&&Ph(r,a.deps)){i.memoizedState=_a(t,n,o,r);return}}Ee.flags|=e,i.memoizedState=_a(1|t,n,o,r)}function Kg(e,t){return zs(8390656,8,e,t)}function jh(e,t){return vu(2048,8,e,t)}function Px(e,t){return vu(4,2,e,t)}function Tx(e,t){return vu(4,4,e,t)}function Ox(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function jx(e,t,n){return n=n!=null?n.concat([e]):null,vu(4,4,Ox.bind(null,t,e),n)}function Mh(){}function Mx(e,t){var n=Yt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ph(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function $x(e,t){var n=Yt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ph(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Ix(e,t,n){return Xr&21?(fn(n,t)||(n=Ay(),Ee.lanes|=n,Kr|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,St=!0),e.memoizedState=n)}function Ck(e,t){var n=he;he=n!==0&&4>n?n:4,e(!0);var r=Jc.transition;Jc.transition={};try{e(!1),t()}finally{he=n,Jc.transition=r}}function Dx(){return Yt().memoizedState}function Ek(e,t,n){var r=br(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Lx(e))Ax(t,n);else if(n=fx(e,t,n,r),n!==null){var i=pt();ln(n,e,r,i),Rx(n,t,r)}}function kk(e,t,n){var r=br(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Lx(e))Ax(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var a=t.lastRenderedState,l=o(a,n);if(i.hasEagerState=!0,i.eagerState=l,fn(l,a)){var s=t.interleaved;s===null?(i.next=i,Sh(t)):(i.next=s.next,s.next=i),t.interleaved=i;return}}catch{}finally{}n=fx(e,t,i,r),n!==null&&(i=pt(),ln(n,e,r,i),Rx(n,t,r))}}function Lx(e){var t=e.alternate;return e===Ee||t!==null&&t===Ee}function Ax(e,t){Jo=kl=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Rx(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,lh(e,n)}}var Pl={readContext:qt,useCallback:et,useContext:et,useEffect:et,useImperativeHandle:et,useInsertionEffect:et,useLayoutEffect:et,useMemo:et,useReducer:et,useRef:et,useState:et,useDebugValue:et,useDeferredValue:et,useTransition:et,useMutableSource:et,useSyncExternalStore:et,useId:et,unstable_isNewReconciler:!1},Pk={readContext:qt,useCallback:function(e,t){return yn().memoizedState=[e,t===void 0?null:t],e},useContext:qt,useEffect:Kg,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,zs(4194308,4,Ox.bind(null,t,e),n)},useLayoutEffect:function(e,t){return zs(4194308,4,e,t)},useInsertionEffect:function(e,t){return zs(4,2,e,t)},useMemo:function(e,t){var n=yn();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=yn();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Ek.bind(null,Ee,e),[r.memoizedState,e]},useRef:function(e){var t=yn();return e={current:e},t.memoizedState=e},useState:Xg,useDebugValue:Mh,useDeferredValue:function(e){return yn().memoizedState=e},useTransition:function(){var e=Xg(!1),t=e[0];return e=Ck.bind(null,e[1]),yn().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Ee,i=yn();if(_e){if(n===void 0)throw Error(V(407));n=n()}else{if(n=t(),Ge===null)throw Error(V(349));Xr&30||wx(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,Kg(_x.bind(null,r,o,e),[e]),r.flags|=2048,_a(9,Sx.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=yn(),t=Ge.identifierPrefix;if(_e){var n=Nn,r=zn;n=(r&~(1<<32-sn(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=wa++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=_k++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Tk={readContext:qt,useCallback:Mx,useContext:qt,useEffect:jh,useImperativeHandle:jx,useInsertionEffect:Px,useLayoutEffect:Tx,useMemo:$x,useReducer:ed,useRef:kx,useState:function(){return ed(Sa)},useDebugValue:Mh,useDeferredValue:function(e){var t=Yt();return Ix(t,Fe.memoizedState,e)},useTransition:function(){var e=ed(Sa)[0],t=Yt().memoizedState;return[e,t]},useMutableSource:xx,useSyncExternalStore:bx,useId:Dx,unstable_isNewReconciler:!1},Ok={readContext:qt,useCallback:Mx,useContext:qt,useEffect:jh,useImperativeHandle:jx,useInsertionEffect:Px,useLayoutEffect:Tx,useMemo:$x,useReducer:td,useRef:kx,useState:function(){return td(Sa)},useDebugValue:Mh,useDeferredValue:function(e){var t=Yt();return Fe===null?t.memoizedState=e:Ix(t,Fe.memoizedState,e)},useTransition:function(){var e=td(Sa)[0],t=Yt().memoizedState;return[e,t]},useMutableSource:xx,useSyncExternalStore:bx,useId:Dx,unstable_isNewReconciler:!1};function Yi(e,t){try{var n="",r=t;do n+=rE(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function nd(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Hf(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var jk=typeof WeakMap=="function"?WeakMap:Map;function Fx(e,t,n){n=Bn(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Ol||(Ol=!0,ep=r),Hf(e,t)},n}function zx(e,t,n){n=Bn(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Hf(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Hf(e,t),typeof r!="function"&&(xr===null?xr=new Set([this]):xr.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function Qg(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new jk;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Hk.bind(null,e,t,n),t.then(e,e))}function Zg(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Jg(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Bn(-1,1),t.tag=2,yr(n,t,1))),n.lanes|=1),e)}var Mk=Qn.ReactCurrentOwner,St=!1;function dt(e,t,n,r){t.child=e===null?vx(t,null,n,r):Gi(t,e.child,n,r)}function e0(e,t,n,r,i){n=n.render;var o=t.ref;return Fi(t,i),r=Th(e,t,n,r,o,i),n=Oh(),e!==null&&!St?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,qn(e,t,i)):(_e&&n&&gh(t),t.flags|=1,dt(e,t,r,i),t.child)}function t0(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!zh(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,Nx(e,t,o,r,i)):(e=Us(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var a=o.memoizedProps;if(n=n.compare,n=n!==null?n:ma,n(a,r)&&e.ref===t.ref)return qn(e,t,i)}return t.flags|=1,e=wr(o,r),e.ref=t.ref,e.return=t,t.child=e}function Nx(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(ma(o,r)&&e.ref===t.ref)if(St=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(St=!0);else return t.lanes=e.lanes,qn(e,t,i)}return Wf(e,t,n,r,i)}function Bx(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ge(Ii,jt),jt|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ge(Ii,jt),jt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,ge(Ii,jt),jt|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,ge(Ii,jt),jt|=r;return dt(e,t,i,n),t.child}function Vx(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Wf(e,t,n,r,i){var o=Ct(n)?qr:lt.current;return o=Hi(t,o),Fi(t,i),n=Th(e,t,n,r,o,i),r=Oh(),e!==null&&!St?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,qn(e,t,i)):(_e&&r&&gh(t),t.flags|=1,dt(e,t,n,i),t.child)}function n0(e,t,n,r,i){if(Ct(n)){var o=!0;xl(t)}else o=!1;if(Fi(t,i),t.stateNode===null)Ns(e,t),mx(t,n,r),Uf(t,n,r,i),r=!0;else if(e===null){var a=t.stateNode,l=t.memoizedProps;a.props=l;var s=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=qt(u):(u=Ct(n)?qr:lt.current,u=Hi(t,u));var d=n.getDerivedStateFromProps,c=typeof d=="function"||typeof a.getSnapshotBeforeUpdate=="function";c||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==r||s!==u)&&qg(t,a,r,u),or=!1;var y=t.memoizedState;a.state=y,Cl(t,r,a,i),s=t.memoizedState,l!==r||y!==s||_t.current||or?(typeof d=="function"&&(Vf(t,n,d,r),s=t.memoizedState),(l=or||Gg(t,n,l,r,y,s,u))?(c||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),a.props=r,a.state=s,a.context=u,r=l):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,px(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:tn(t.type,l),a.props=u,c=t.pendingProps,y=a.context,s=n.contextType,typeof s=="object"&&s!==null?s=qt(s):(s=Ct(n)?qr:lt.current,s=Hi(t,s));var p=n.getDerivedStateFromProps;(d=typeof p=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==c||y!==s)&&qg(t,a,r,s),or=!1,y=t.memoizedState,a.state=y,Cl(t,r,a,i);var m=t.memoizedState;l!==c||y!==m||_t.current||or?(typeof p=="function"&&(Vf(t,n,p,r),m=t.memoizedState),(u=or||Gg(t,n,u,r,y,m,s)||!1)?(d||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,m,s),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,m,s)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&y===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&y===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=m),a.props=r,a.state=m,a.context=s,r=u):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&y===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&y===e.memoizedState||(t.flags|=1024),r=!1)}return Gf(e,t,n,r,o,i)}function Gf(e,t,n,r,i,o){Vx(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return i&&Bg(t,n,!1),qn(e,t,o);r=t.stateNode,Mk.current=t;var l=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=Gi(t,e.child,null,o),t.child=Gi(t,null,l,o)):dt(e,t,l,o),t.memoizedState=r.state,i&&Bg(t,n,!0),t.child}function Ux(e){var t=e.stateNode;t.pendingContext?Ng(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Ng(e,t.context,!1),Ch(e,t.containerInfo)}function r0(e,t,n,r,i){return Wi(),yh(i),t.flags|=256,dt(e,t,n,r),t.child}var qf={dehydrated:null,treeContext:null,retryLane:0};function Yf(e){return{baseLanes:e,cachePool:null,transitions:null}}function Hx(e,t,n){var r=t.pendingProps,i=Ce.current,o=!1,a=(t.flags&128)!==0,l;if((l=a)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),ge(Ce,i&1),e===null)return Nf(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,o?(r=t.mode,o=t.child,a={mode:"hidden",children:a},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=a):o=bu(a,r,0,null),e=Wr(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Yf(n),t.memoizedState=qf,e):$h(t,a));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return $k(e,t,a,r,l,i,n);if(o){o=r.fallback,a=t.mode,i=e.child,l=i.sibling;var s={mode:"hidden",children:r.children};return!(a&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=wr(i,s),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?o=wr(l,o):(o=Wr(o,a,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,a=e.child.memoizedState,a=a===null?Yf(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},o.memoizedState=a,o.childLanes=e.childLanes&~n,t.memoizedState=qf,r}return o=e.child,e=o.sibling,r=wr(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function $h(e,t){return t=bu({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function hs(e,t,n,r){return r!==null&&yh(r),Gi(t,e.child,null,n),e=$h(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function $k(e,t,n,r,i,o,a){if(n)return t.flags&256?(t.flags&=-257,r=nd(Error(V(422))),hs(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=bu({mode:"visible",children:r.children},i,0,null),o=Wr(o,i,a,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&Gi(t,e.child,null,a),t.child.memoizedState=Yf(a),t.memoizedState=qf,o);if(!(t.mode&1))return hs(e,t,a,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,o=Error(V(419)),r=nd(o,r,void 0),hs(e,t,a,r)}if(l=(a&e.childLanes)!==0,St||l){if(r=Ge,r!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|a)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Gn(e,i),ln(r,e,i,-1))}return Fh(),r=nd(Error(V(421))),hs(e,t,a,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Wk.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,$t=vr(i.nextSibling),Dt=t,_e=!0,on=null,e!==null&&(Ut[Ht++]=zn,Ut[Ht++]=Nn,Ut[Ht++]=Yr,zn=e.id,Nn=e.overflow,Yr=t),t=$h(t,r.children),t.flags|=4096,t)}function i0(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Bf(e.return,t,n)}function rd(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Wx(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(dt(e,t,r.children,n),r=Ce.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&i0(e,n,t);else if(e.tag===19)i0(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ge(Ce,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&El(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),rd(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&El(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}rd(t,!0,n,null,o);break;case"together":rd(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ns(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function qn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Kr|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(V(153));if(t.child!==null){for(e=t.child,n=wr(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=wr(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Ik(e,t,n){switch(t.tag){case 3:Ux(t),Wi();break;case 5:yx(t);break;case 1:Ct(t.type)&&xl(t);break;case 4:Ch(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;ge(Sl,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(ge(Ce,Ce.current&1),t.flags|=128,null):n&t.child.childLanes?Hx(e,t,n):(ge(Ce,Ce.current&1),e=qn(e,t,n),e!==null?e.sibling:null);ge(Ce,Ce.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Wx(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ge(Ce,Ce.current),r)break;return null;case 22:case 23:return t.lanes=0,Bx(e,t,n)}return qn(e,t,n)}var Gx,Xf,qx,Yx;Gx=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Xf=function(){};qx=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Vr(Cn.current);var o=null;switch(n){case"input":i=vf(e,i),r=vf(e,r),o=[];break;case"select":i=ke({},i,{value:void 0}),r=ke({},r,{value:void 0}),o=[];break;case"textarea":i=bf(e,i),r=bf(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=vl)}Sf(n,r);var a;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(a in l)l.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(la.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var s=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&s!==l&&(s!=null||l!=null))if(u==="style")if(l){for(a in l)!l.hasOwnProperty(a)||s&&s.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in s)s.hasOwnProperty(a)&&l[a]!==s[a]&&(n||(n={}),n[a]=s[a])}else n||(o||(o=[]),o.push(u,n)),n=s;else u==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,l=l?l.__html:void 0,s!=null&&l!==s&&(o=o||[]).push(u,s)):u==="children"?typeof s!="string"&&typeof s!="number"||(o=o||[]).push(u,""+s):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(la.hasOwnProperty(u)?(s!=null&&u==="onScroll"&&ve("scroll",e),o||l===s||(o=[])):(o=o||[]).push(u,s))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};Yx=function(e,t,n,r){n!==r&&(t.flags|=4)};function jo(e,t){if(!_e)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function tt(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Dk(e,t,n){var r=t.pendingProps;switch(vh(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return tt(t),null;case 1:return Ct(t.type)&&yl(),tt(t),null;case 3:return r=t.stateNode,qi(),xe(_t),xe(lt),kh(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(fs(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,on!==null&&(rp(on),on=null))),Xf(e,t),tt(t),null;case 5:Eh(t);var i=Vr(ba.current);if(n=t.type,e!==null&&t.stateNode!=null)qx(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(V(166));return tt(t),null}if(e=Vr(Cn.current),fs(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[wn]=t,r[ya]=o,e=(t.mode&1)!==0,n){case"dialog":ve("cancel",r),ve("close",r);break;case"iframe":case"object":case"embed":ve("load",r);break;case"video":case"audio":for(i=0;i<Vo.length;i++)ve(Vo[i],r);break;case"source":ve("error",r);break;case"img":case"image":case"link":ve("error",r),ve("load",r);break;case"details":ve("toggle",r);break;case"input":pg(r,o),ve("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},ve("invalid",r);break;case"textarea":mg(r,o),ve("invalid",r)}Sf(n,o),i=null;for(var a in o)if(o.hasOwnProperty(a)){var l=o[a];a==="children"?typeof l=="string"?r.textContent!==l&&(o.suppressHydrationWarning!==!0&&ds(r.textContent,l,e),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(o.suppressHydrationWarning!==!0&&ds(r.textContent,l,e),i=["children",""+l]):la.hasOwnProperty(a)&&l!=null&&a==="onScroll"&&ve("scroll",r)}switch(n){case"input":rs(r),hg(r,o,!0);break;case"textarea":rs(r),gg(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=vl)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=wy(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[wn]=t,e[ya]=r,Gx(e,t,!1,!1),t.stateNode=e;e:{switch(a=_f(n,r),n){case"dialog":ve("cancel",e),ve("close",e),i=r;break;case"iframe":case"object":case"embed":ve("load",e),i=r;break;case"video":case"audio":for(i=0;i<Vo.length;i++)ve(Vo[i],e);i=r;break;case"source":ve("error",e),i=r;break;case"img":case"image":case"link":ve("error",e),ve("load",e),i=r;break;case"details":ve("toggle",e),i=r;break;case"input":pg(e,r),i=vf(e,r),ve("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=ke({},r,{value:void 0}),ve("invalid",e);break;case"textarea":mg(e,r),i=bf(e,r),ve("invalid",e);break;default:i=r}Sf(n,i),l=i;for(o in l)if(l.hasOwnProperty(o)){var s=l[o];o==="style"?Cy(e,s):o==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&Sy(e,s)):o==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&ua(e,s):typeof s=="number"&&ua(e,""+s):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(la.hasOwnProperty(o)?s!=null&&o==="onScroll"&&ve("scroll",e):s!=null&&nh(e,o,s,a))}switch(n){case"input":rs(e),hg(e,r,!1);break;case"textarea":rs(e),gg(e);break;case"option":r.value!=null&&e.setAttribute("value",""+_r(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Di(e,!!r.multiple,o,!1):r.defaultValue!=null&&Di(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=vl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return tt(t),null;case 6:if(e&&t.stateNode!=null)Yx(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(V(166));if(n=Vr(ba.current),Vr(Cn.current),fs(t)){if(r=t.stateNode,n=t.memoizedProps,r[wn]=t,(o=r.nodeValue!==n)&&(e=Dt,e!==null))switch(e.tag){case 3:ds(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ds(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[wn]=t,t.stateNode=r}return tt(t),null;case 13:if(xe(Ce),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(_e&&$t!==null&&t.mode&1&&!(t.flags&128))dx(),Wi(),t.flags|=98560,o=!1;else if(o=fs(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(V(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(V(317));o[wn]=t}else Wi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;tt(t),o=!1}else on!==null&&(rp(on),on=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Ce.current&1?Ne===0&&(Ne=3):Fh())),t.updateQueue!==null&&(t.flags|=4),tt(t),null);case 4:return qi(),Xf(e,t),e===null&&ga(t.stateNode.containerInfo),tt(t),null;case 10:return wh(t.type._context),tt(t),null;case 17:return Ct(t.type)&&yl(),tt(t),null;case 19:if(xe(Ce),o=t.memoizedState,o===null)return tt(t),null;if(r=(t.flags&128)!==0,a=o.rendering,a===null)if(r)jo(o,!1);else{if(Ne!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=El(e),a!==null){for(t.flags|=128,jo(o,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,a=o.alternate,a===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=a.childLanes,o.lanes=a.lanes,o.child=a.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=a.memoizedProps,o.memoizedState=a.memoizedState,o.updateQueue=a.updateQueue,o.type=a.type,e=a.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ge(Ce,Ce.current&1|2),t.child}e=e.sibling}o.tail!==null&&je()>Xi&&(t.flags|=128,r=!0,jo(o,!1),t.lanes=4194304)}else{if(!r)if(e=El(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),jo(o,!0),o.tail===null&&o.tailMode==="hidden"&&!a.alternate&&!_e)return tt(t),null}else 2*je()-o.renderingStartTime>Xi&&n!==1073741824&&(t.flags|=128,r=!0,jo(o,!1),t.lanes=4194304);o.isBackwards?(a.sibling=t.child,t.child=a):(n=o.last,n!==null?n.sibling=a:t.child=a,o.last=a)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=je(),t.sibling=null,n=Ce.current,ge(Ce,r?n&1|2:n&1),t):(tt(t),null);case 22:case 23:return Rh(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?jt&1073741824&&(tt(t),t.subtreeFlags&6&&(t.flags|=8192)):tt(t),null;case 24:return null;case 25:return null}throw Error(V(156,t.tag))}function Lk(e,t){switch(vh(t),t.tag){case 1:return Ct(t.type)&&yl(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return qi(),xe(_t),xe(lt),kh(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Eh(t),null;case 13:if(xe(Ce),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(V(340));Wi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return xe(Ce),null;case 4:return qi(),null;case 10:return wh(t.type._context),null;case 22:case 23:return Rh(),null;case 24:return null;default:return null}}var ms=!1,at=!1,Ak=typeof WeakSet=="function"?WeakSet:Set,W=null;function $i(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Pe(e,t,r)}else n.current=null}function Kf(e,t,n){try{n()}catch(r){Pe(e,t,r)}}var o0=!1;function Rk(e,t){if(If=hl,e=Zy(),mh(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var a=0,l=-1,s=-1,u=0,d=0,c=e,y=null;t:for(;;){for(var p;c!==n||i!==0&&c.nodeType!==3||(l=a+i),c!==o||r!==0&&c.nodeType!==3||(s=a+r),c.nodeType===3&&(a+=c.nodeValue.length),(p=c.firstChild)!==null;)y=c,c=p;for(;;){if(c===e)break t;if(y===n&&++u===i&&(l=a),y===o&&++d===r&&(s=a),(p=c.nextSibling)!==null)break;c=y,y=c.parentNode}c=p}n=l===-1||s===-1?null:{start:l,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(Df={focusedElem:e,selectionRange:n},hl=!1,W=t;W!==null;)if(t=W,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,W=e;else for(;W!==null;){t=W;try{var m=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(m!==null){var v=m.memoizedProps,w=m.memoizedState,h=t.stateNode,g=h.getSnapshotBeforeUpdate(t.elementType===t.type?v:tn(t.type,v),w);h.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var x=t.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(V(163))}}catch(S){Pe(t,t.return,S)}if(e=t.sibling,e!==null){e.return=t.return,W=e;break}W=t.return}return m=o0,o0=!1,m}function ea(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Kf(t,n,o)}i=i.next}while(i!==r)}}function yu(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Qf(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Xx(e){var t=e.alternate;t!==null&&(e.alternate=null,Xx(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[wn],delete t[ya],delete t[Rf],delete t[xk],delete t[bk])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Kx(e){return e.tag===5||e.tag===3||e.tag===4}function a0(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Kx(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Zf(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=vl));else if(r!==4&&(e=e.child,e!==null))for(Zf(e,t,n),e=e.sibling;e!==null;)Zf(e,t,n),e=e.sibling}function Jf(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Jf(e,t,n),e=e.sibling;e!==null;)Jf(e,t,n),e=e.sibling}var Ke=null,nn=!1;function nr(e,t,n){for(n=n.child;n!==null;)Qx(e,t,n),n=n.sibling}function Qx(e,t,n){if(_n&&typeof _n.onCommitFiberUnmount=="function")try{_n.onCommitFiberUnmount(cu,n)}catch{}switch(n.tag){case 5:at||$i(n,t);case 6:var r=Ke,i=nn;Ke=null,nr(e,t,n),Ke=r,nn=i,Ke!==null&&(nn?(e=Ke,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Ke.removeChild(n.stateNode));break;case 18:Ke!==null&&(nn?(e=Ke,n=n.stateNode,e.nodeType===8?Kc(e.parentNode,n):e.nodeType===1&&Kc(e,n),pa(e)):Kc(Ke,n.stateNode));break;case 4:r=Ke,i=nn,Ke=n.stateNode.containerInfo,nn=!0,nr(e,t,n),Ke=r,nn=i;break;case 0:case 11:case 14:case 15:if(!at&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,a=o.destroy;o=o.tag,a!==void 0&&(o&2||o&4)&&Kf(n,t,a),i=i.next}while(i!==r)}nr(e,t,n);break;case 1:if(!at&&($i(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Pe(n,t,l)}nr(e,t,n);break;case 21:nr(e,t,n);break;case 22:n.mode&1?(at=(r=at)||n.memoizedState!==null,nr(e,t,n),at=r):nr(e,t,n);break;default:nr(e,t,n)}}function s0(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Ak),t.forEach(function(r){var i=Gk.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Qt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,a=t,l=a;e:for(;l!==null;){switch(l.tag){case 5:Ke=l.stateNode,nn=!1;break e;case 3:Ke=l.stateNode.containerInfo,nn=!0;break e;case 4:Ke=l.stateNode.containerInfo,nn=!0;break e}l=l.return}if(Ke===null)throw Error(V(160));Qx(o,a,i),Ke=null,nn=!1;var s=i.alternate;s!==null&&(s.return=null),i.return=null}catch(u){Pe(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Zx(t,e),t=t.sibling}function Zx(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Qt(t,e),gn(e),r&4){try{ea(3,e,e.return),yu(3,e)}catch(v){Pe(e,e.return,v)}try{ea(5,e,e.return)}catch(v){Pe(e,e.return,v)}}break;case 1:Qt(t,e),gn(e),r&512&&n!==null&&$i(n,n.return);break;case 5:if(Qt(t,e),gn(e),r&512&&n!==null&&$i(n,n.return),e.flags&32){var i=e.stateNode;try{ua(i,"")}catch(v){Pe(e,e.return,v)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,a=n!==null?n.memoizedProps:o,l=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{l==="input"&&o.type==="radio"&&o.name!=null&&xy(i,o),_f(l,a);var u=_f(l,o);for(a=0;a<s.length;a+=2){var d=s[a],c=s[a+1];d==="style"?Cy(i,c):d==="dangerouslySetInnerHTML"?Sy(i,c):d==="children"?ua(i,c):nh(i,d,c,u)}switch(l){case"input":yf(i,o);break;case"textarea":by(i,o);break;case"select":var y=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var p=o.value;p!=null?Di(i,!!o.multiple,p,!1):y!==!!o.multiple&&(o.defaultValue!=null?Di(i,!!o.multiple,o.defaultValue,!0):Di(i,!!o.multiple,o.multiple?[]:"",!1))}i[ya]=o}catch(v){Pe(e,e.return,v)}}break;case 6:if(Qt(t,e),gn(e),r&4){if(e.stateNode===null)throw Error(V(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(v){Pe(e,e.return,v)}}break;case 3:if(Qt(t,e),gn(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{pa(t.containerInfo)}catch(v){Pe(e,e.return,v)}break;case 4:Qt(t,e),gn(e);break;case 13:Qt(t,e),gn(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Lh=je())),r&4&&s0(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(at=(u=at)||d,Qt(t,e),at=u):Qt(t,e),gn(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(W=e,d=e.child;d!==null;){for(c=W=d;W!==null;){switch(y=W,p=y.child,y.tag){case 0:case 11:case 14:case 15:ea(4,y,y.return);break;case 1:$i(y,y.return);var m=y.stateNode;if(typeof m.componentWillUnmount=="function"){r=y,n=y.return;try{t=r,m.props=t.memoizedProps,m.state=t.memoizedState,m.componentWillUnmount()}catch(v){Pe(r,n,v)}}break;case 5:$i(y,y.return);break;case 22:if(y.memoizedState!==null){u0(c);continue}}p!==null?(p.return=y,W=p):u0(c)}d=d.sibling}e:for(d=null,c=e;;){if(c.tag===5){if(d===null){d=c;try{i=c.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(l=c.stateNode,s=c.memoizedProps.style,a=s!=null&&s.hasOwnProperty("display")?s.display:null,l.style.display=_y("display",a))}catch(v){Pe(e,e.return,v)}}}else if(c.tag===6){if(d===null)try{c.stateNode.nodeValue=u?"":c.memoizedProps}catch(v){Pe(e,e.return,v)}}else if((c.tag!==22&&c.tag!==23||c.memoizedState===null||c===e)&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===e)break e;for(;c.sibling===null;){if(c.return===null||c.return===e)break e;d===c&&(d=null),c=c.return}d===c&&(d=null),c.sibling.return=c.return,c=c.sibling}}break;case 19:Qt(t,e),gn(e),r&4&&s0(e);break;case 21:break;default:Qt(t,e),gn(e)}}function gn(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Kx(n)){var r=n;break e}n=n.return}throw Error(V(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(ua(i,""),r.flags&=-33);var o=a0(e);Jf(e,o,i);break;case 3:case 4:var a=r.stateNode.containerInfo,l=a0(e);Zf(e,l,a);break;default:throw Error(V(161))}}catch(s){Pe(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Fk(e,t,n){W=e,Jx(e)}function Jx(e,t,n){for(var r=(e.mode&1)!==0;W!==null;){var i=W,o=i.child;if(i.tag===22&&r){var a=i.memoizedState!==null||ms;if(!a){var l=i.alternate,s=l!==null&&l.memoizedState!==null||at;l=ms;var u=at;if(ms=a,(at=s)&&!u)for(W=i;W!==null;)a=W,s=a.child,a.tag===22&&a.memoizedState!==null?c0(i):s!==null?(s.return=a,W=s):c0(i);for(;o!==null;)W=o,Jx(o),o=o.sibling;W=i,ms=l,at=u}l0(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,W=o):l0(e)}}function l0(e){for(;W!==null;){var t=W;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:at||yu(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!at)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:tn(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Wg(t,o,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Wg(t,a,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var c=d.dehydrated;c!==null&&pa(c)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(V(163))}at||t.flags&512&&Qf(t)}catch(y){Pe(t,t.return,y)}}if(t===e){W=null;break}if(n=t.sibling,n!==null){n.return=t.return,W=n;break}W=t.return}}function u0(e){for(;W!==null;){var t=W;if(t===e){W=null;break}var n=t.sibling;if(n!==null){n.return=t.return,W=n;break}W=t.return}}function c0(e){for(;W!==null;){var t=W;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{yu(4,t)}catch(s){Pe(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(s){Pe(t,i,s)}}var o=t.return;try{Qf(t)}catch(s){Pe(t,o,s)}break;case 5:var a=t.return;try{Qf(t)}catch(s){Pe(t,a,s)}}}catch(s){Pe(t,t.return,s)}if(t===e){W=null;break}var l=t.sibling;if(l!==null){l.return=t.return,W=l;break}W=t.return}}var zk=Math.ceil,Tl=Qn.ReactCurrentDispatcher,Ih=Qn.ReactCurrentOwner,Gt=Qn.ReactCurrentBatchConfig,se=0,Ge=null,De=null,Ze=0,jt=0,Ii=Pr(0),Ne=0,Ca=null,Kr=0,xu=0,Dh=0,ta=null,wt=null,Lh=0,Xi=1/0,In=null,Ol=!1,ep=null,xr=null,gs=!1,cr=null,jl=0,na=0,tp=null,Bs=-1,Vs=0;function pt(){return se&6?je():Bs!==-1?Bs:Bs=je()}function br(e){return e.mode&1?se&2&&Ze!==0?Ze&-Ze:Sk.transition!==null?(Vs===0&&(Vs=Ay()),Vs):(e=he,e!==0||(e=window.event,e=e===void 0?16:Uy(e.type)),e):1}function ln(e,t,n,r){if(50<na)throw na=0,tp=null,Error(V(185));Ra(e,n,r),(!(se&2)||e!==Ge)&&(e===Ge&&(!(se&2)&&(xu|=n),Ne===4&&sr(e,Ze)),Et(e,r),n===1&&se===0&&!(t.mode&1)&&(Xi=je()+500,mu&&Tr()))}function Et(e,t){var n=e.callbackNode;SE(e,t);var r=pl(e,e===Ge?Ze:0);if(r===0)n!==null&&xg(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&xg(n),t===1)e.tag===0?wk(d0.bind(null,e)):lx(d0.bind(null,e)),vk(function(){!(se&6)&&Tr()}),n=null;else{switch(Ry(r)){case 1:n=sh;break;case 4:n=Dy;break;case 16:n=fl;break;case 536870912:n=Ly;break;default:n=fl}n=sb(n,eb.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function eb(e,t){if(Bs=-1,Vs=0,se&6)throw Error(V(327));var n=e.callbackNode;if(zi()&&e.callbackNode!==n)return null;var r=pl(e,e===Ge?Ze:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Ml(e,r);else{t=r;var i=se;se|=2;var o=nb();(Ge!==e||Ze!==t)&&(In=null,Xi=je()+500,Hr(e,t));do try{Vk();break}catch(l){tb(e,l)}while(1);bh(),Tl.current=o,se=i,De!==null?t=0:(Ge=null,Ze=0,t=Ne)}if(t!==0){if(t===2&&(i=Tf(e),i!==0&&(r=i,t=np(e,i))),t===1)throw n=Ca,Hr(e,0),sr(e,r),Et(e,je()),n;if(t===6)sr(e,r);else{if(i=e.current.alternate,!(r&30)&&!Nk(i)&&(t=Ml(e,r),t===2&&(o=Tf(e),o!==0&&(r=o,t=np(e,o))),t===1))throw n=Ca,Hr(e,0),sr(e,r),Et(e,je()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(V(345));case 2:Lr(e,wt,In);break;case 3:if(sr(e,r),(r&130023424)===r&&(t=Lh+500-je(),10<t)){if(pl(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){pt(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Af(Lr.bind(null,e,wt,In),t);break}Lr(e,wt,In);break;case 4:if(sr(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var a=31-sn(r);o=1<<a,a=t[a],a>i&&(i=a),r&=~o}if(r=i,r=je()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*zk(r/1960))-r,10<r){e.timeoutHandle=Af(Lr.bind(null,e,wt,In),r);break}Lr(e,wt,In);break;case 5:Lr(e,wt,In);break;default:throw Error(V(329))}}}return Et(e,je()),e.callbackNode===n?eb.bind(null,e):null}function np(e,t){var n=ta;return e.current.memoizedState.isDehydrated&&(Hr(e,t).flags|=256),e=Ml(e,t),e!==2&&(t=wt,wt=n,t!==null&&rp(t)),e}function rp(e){wt===null?wt=e:wt.push.apply(wt,e)}function Nk(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!fn(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function sr(e,t){for(t&=~Dh,t&=~xu,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-sn(t),r=1<<n;e[n]=-1,t&=~r}}function d0(e){if(se&6)throw Error(V(327));zi();var t=pl(e,0);if(!(t&1))return Et(e,je()),null;var n=Ml(e,t);if(e.tag!==0&&n===2){var r=Tf(e);r!==0&&(t=r,n=np(e,r))}if(n===1)throw n=Ca,Hr(e,0),sr(e,t),Et(e,je()),n;if(n===6)throw Error(V(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Lr(e,wt,In),Et(e,je()),null}function Ah(e,t){var n=se;se|=1;try{return e(t)}finally{se=n,se===0&&(Xi=je()+500,mu&&Tr())}}function Qr(e){cr!==null&&cr.tag===0&&!(se&6)&&zi();var t=se;se|=1;var n=Gt.transition,r=he;try{if(Gt.transition=null,he=1,e)return e()}finally{he=r,Gt.transition=n,se=t,!(se&6)&&Tr()}}function Rh(){jt=Ii.current,xe(Ii)}function Hr(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,gk(n)),De!==null)for(n=De.return;n!==null;){var r=n;switch(vh(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&yl();break;case 3:qi(),xe(_t),xe(lt),kh();break;case 5:Eh(r);break;case 4:qi();break;case 13:xe(Ce);break;case 19:xe(Ce);break;case 10:wh(r.type._context);break;case 22:case 23:Rh()}n=n.return}if(Ge=e,De=e=wr(e.current,null),Ze=jt=t,Ne=0,Ca=null,Dh=xu=Kr=0,wt=ta=null,Br!==null){for(t=0;t<Br.length;t++)if(n=Br[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var a=o.next;o.next=i,r.next=a}n.pending=r}Br=null}return e}function tb(e,t){do{var n=De;try{if(bh(),Fs.current=Pl,kl){for(var r=Ee.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}kl=!1}if(Xr=0,We=Fe=Ee=null,Jo=!1,wa=0,Ih.current=null,n===null||n.return===null){Ne=1,Ca=t,De=null;break}e:{var o=e,a=n.return,l=n,s=t;if(t=Ze,l.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var u=s,d=l,c=d.tag;if(!(d.mode&1)&&(c===0||c===11||c===15)){var y=d.alternate;y?(d.updateQueue=y.updateQueue,d.memoizedState=y.memoizedState,d.lanes=y.lanes):(d.updateQueue=null,d.memoizedState=null)}var p=Zg(a);if(p!==null){p.flags&=-257,Jg(p,a,l,o,t),p.mode&1&&Qg(o,u,t),t=p,s=u;var m=t.updateQueue;if(m===null){var v=new Set;v.add(s),t.updateQueue=v}else m.add(s);break e}else{if(!(t&1)){Qg(o,u,t),Fh();break e}s=Error(V(426))}}else if(_e&&l.mode&1){var w=Zg(a);if(w!==null){!(w.flags&65536)&&(w.flags|=256),Jg(w,a,l,o,t),yh(Yi(s,l));break e}}o=s=Yi(s,l),Ne!==4&&(Ne=2),ta===null?ta=[o]:ta.push(o),o=a;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var h=Fx(o,s,t);Hg(o,h);break e;case 1:l=s;var g=o.type,x=o.stateNode;if(!(o.flags&128)&&(typeof g.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(xr===null||!xr.has(x)))){o.flags|=65536,t&=-t,o.lanes|=t;var S=zx(o,l,t);Hg(o,S);break e}}o=o.return}while(o!==null)}ib(n)}catch(C){t=C,De===n&&n!==null&&(De=n=n.return);continue}break}while(1)}function nb(){var e=Tl.current;return Tl.current=Pl,e===null?Pl:e}function Fh(){(Ne===0||Ne===3||Ne===2)&&(Ne=4),Ge===null||!(Kr&268435455)&&!(xu&268435455)||sr(Ge,Ze)}function Ml(e,t){var n=se;se|=2;var r=nb();(Ge!==e||Ze!==t)&&(In=null,Hr(e,t));do try{Bk();break}catch(i){tb(e,i)}while(1);if(bh(),se=n,Tl.current=r,De!==null)throw Error(V(261));return Ge=null,Ze=0,Ne}function Bk(){for(;De!==null;)rb(De)}function Vk(){for(;De!==null&&!pE();)rb(De)}function rb(e){var t=ab(e.alternate,e,jt);e.memoizedProps=e.pendingProps,t===null?ib(e):De=t,Ih.current=null}function ib(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Lk(n,t),n!==null){n.flags&=32767,De=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ne=6,De=null;return}}else if(n=Dk(n,t,jt),n!==null){De=n;return}if(t=t.sibling,t!==null){De=t;return}De=t=e}while(t!==null);Ne===0&&(Ne=5)}function Lr(e,t,n){var r=he,i=Gt.transition;try{Gt.transition=null,he=1,Uk(e,t,n,r)}finally{Gt.transition=i,he=r}return null}function Uk(e,t,n,r){do zi();while(cr!==null);if(se&6)throw Error(V(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(V(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(_E(e,o),e===Ge&&(De=Ge=null,Ze=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||gs||(gs=!0,sb(fl,function(){return zi(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Gt.transition,Gt.transition=null;var a=he;he=1;var l=se;se|=4,Ih.current=null,Rk(e,n),Zx(n,e),uk(Df),hl=!!If,Df=If=null,e.current=n,Fk(n),hE(),se=l,he=a,Gt.transition=o}else e.current=n;if(gs&&(gs=!1,cr=e,jl=i),o=e.pendingLanes,o===0&&(xr=null),vE(n.stateNode),Et(e,je()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Ol)throw Ol=!1,e=ep,ep=null,e;return jl&1&&e.tag!==0&&zi(),o=e.pendingLanes,o&1?e===tp?na++:(na=0,tp=e):na=0,Tr(),null}function zi(){if(cr!==null){var e=Ry(jl),t=Gt.transition,n=he;try{if(Gt.transition=null,he=16>e?16:e,cr===null)var r=!1;else{if(e=cr,cr=null,jl=0,se&6)throw Error(V(331));var i=se;for(se|=4,W=e.current;W!==null;){var o=W,a=o.child;if(W.flags&16){var l=o.deletions;if(l!==null){for(var s=0;s<l.length;s++){var u=l[s];for(W=u;W!==null;){var d=W;switch(d.tag){case 0:case 11:case 15:ea(8,d,o)}var c=d.child;if(c!==null)c.return=d,W=c;else for(;W!==null;){d=W;var y=d.sibling,p=d.return;if(Xx(d),d===u){W=null;break}if(y!==null){y.return=p,W=y;break}W=p}}}var m=o.alternate;if(m!==null){var v=m.child;if(v!==null){m.child=null;do{var w=v.sibling;v.sibling=null,v=w}while(v!==null)}}W=o}}if(o.subtreeFlags&2064&&a!==null)a.return=o,W=a;else e:for(;W!==null;){if(o=W,o.flags&2048)switch(o.tag){case 0:case 11:case 15:ea(9,o,o.return)}var h=o.sibling;if(h!==null){h.return=o.return,W=h;break e}W=o.return}}var g=e.current;for(W=g;W!==null;){a=W;var x=a.child;if(a.subtreeFlags&2064&&x!==null)x.return=a,W=x;else e:for(a=g;W!==null;){if(l=W,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:yu(9,l)}}catch(C){Pe(l,l.return,C)}if(l===a){W=null;break e}var S=l.sibling;if(S!==null){S.return=l.return,W=S;break e}W=l.return}}if(se=i,Tr(),_n&&typeof _n.onPostCommitFiberRoot=="function")try{_n.onPostCommitFiberRoot(cu,e)}catch{}r=!0}return r}finally{he=n,Gt.transition=t}}return!1}function f0(e,t,n){t=Yi(n,t),t=Fx(e,t,1),e=yr(e,t,1),t=pt(),e!==null&&(Ra(e,1,t),Et(e,t))}function Pe(e,t,n){if(e.tag===3)f0(e,e,n);else for(;t!==null;){if(t.tag===3){f0(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(xr===null||!xr.has(r))){e=Yi(n,e),e=zx(t,e,1),t=yr(t,e,1),e=pt(),t!==null&&(Ra(t,1,e),Et(t,e));break}}t=t.return}}function Hk(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=pt(),e.pingedLanes|=e.suspendedLanes&n,Ge===e&&(Ze&n)===n&&(Ne===4||Ne===3&&(Ze&130023424)===Ze&&500>je()-Lh?Hr(e,0):Dh|=n),Et(e,t)}function ob(e,t){t===0&&(e.mode&1?(t=as,as<<=1,!(as&130023424)&&(as=4194304)):t=1);var n=pt();e=Gn(e,t),e!==null&&(Ra(e,t,n),Et(e,n))}function Wk(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),ob(e,n)}function Gk(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(V(314))}r!==null&&r.delete(t),ob(e,n)}var ab;ab=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||_t.current)St=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return St=!1,Ik(e,t,n);St=!!(e.flags&131072)}else St=!1,_e&&t.flags&1048576&&ux(t,wl,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Ns(e,t),e=t.pendingProps;var i=Hi(t,lt.current);Fi(t,n),i=Th(null,t,r,e,i,n);var o=Oh();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ct(r)?(o=!0,xl(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,_h(t),i.updater=gu,t.stateNode=i,i._reactInternals=t,Uf(t,r,e,n),t=Gf(null,t,r,!0,o,n)):(t.tag=0,_e&&o&&gh(t),dt(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Ns(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Yk(r),e=tn(r,e),i){case 0:t=Wf(null,t,r,e,n);break e;case 1:t=n0(null,t,r,e,n);break e;case 11:t=e0(null,t,r,e,n);break e;case 14:t=t0(null,t,r,tn(r.type,e),n);break e}throw Error(V(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:tn(r,i),Wf(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:tn(r,i),n0(e,t,r,i,n);case 3:e:{if(Ux(t),e===null)throw Error(V(387));r=t.pendingProps,o=t.memoizedState,i=o.element,px(e,t),Cl(t,r,null,n);var a=t.memoizedState;if(r=a.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Yi(Error(V(423)),t),t=r0(e,t,r,n,i);break e}else if(r!==i){i=Yi(Error(V(424)),t),t=r0(e,t,r,n,i);break e}else for($t=vr(t.stateNode.containerInfo.firstChild),Dt=t,_e=!0,on=null,n=vx(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Wi(),r===i){t=qn(e,t,n);break e}dt(e,t,r,n)}t=t.child}return t;case 5:return yx(t),e===null&&Nf(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,a=i.children,Lf(r,i)?a=null:o!==null&&Lf(r,o)&&(t.flags|=32),Vx(e,t),dt(e,t,a,n),t.child;case 6:return e===null&&Nf(t),null;case 13:return Hx(e,t,n);case 4:return Ch(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Gi(t,null,r,n):dt(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:tn(r,i),e0(e,t,r,i,n);case 7:return dt(e,t,t.pendingProps,n),t.child;case 8:return dt(e,t,t.pendingProps.children,n),t.child;case 12:return dt(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,a=i.value,ge(Sl,r._currentValue),r._currentValue=a,o!==null)if(fn(o.value,a)){if(o.children===i.children&&!_t.current){t=qn(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var l=o.dependencies;if(l!==null){a=o.child;for(var s=l.firstContext;s!==null;){if(s.context===r){if(o.tag===1){s=Bn(-1,n&-n),s.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?s.next=s:(s.next=d.next,d.next=s),u.pending=s}}o.lanes|=n,s=o.alternate,s!==null&&(s.lanes|=n),Bf(o.return,n,t),l.lanes|=n;break}s=s.next}}else if(o.tag===10)a=o.type===t.type?null:o.child;else if(o.tag===18){if(a=o.return,a===null)throw Error(V(341));a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),Bf(a,n,t),a=o.sibling}else a=o.child;if(a!==null)a.return=o;else for(a=o;a!==null;){if(a===t){a=null;break}if(o=a.sibling,o!==null){o.return=a.return,a=o;break}a=a.return}o=a}dt(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Fi(t,n),i=qt(i),r=r(i),t.flags|=1,dt(e,t,r,n),t.child;case 14:return r=t.type,i=tn(r,t.pendingProps),i=tn(r.type,i),t0(e,t,r,i,n);case 15:return Nx(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:tn(r,i),Ns(e,t),t.tag=1,Ct(r)?(e=!0,xl(t)):e=!1,Fi(t,n),mx(t,r,i),Uf(t,r,i,n),Gf(null,t,r,!0,e,n);case 19:return Wx(e,t,n);case 22:return Bx(e,t,n)}throw Error(V(156,t.tag))};function sb(e,t){return Iy(e,t)}function qk(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Wt(e,t,n,r){return new qk(e,t,n,r)}function zh(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Yk(e){if(typeof e=="function")return zh(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ih)return 11;if(e===oh)return 14}return 2}function wr(e,t){var n=e.alternate;return n===null?(n=Wt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Us(e,t,n,r,i,o){var a=2;if(r=e,typeof e=="function")zh(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case _i:return Wr(n.children,i,o,t);case rh:a=8,i|=8;break;case pf:return e=Wt(12,n,t,i|2),e.elementType=pf,e.lanes=o,e;case hf:return e=Wt(13,n,t,i),e.elementType=hf,e.lanes=o,e;case mf:return e=Wt(19,n,t,i),e.elementType=mf,e.lanes=o,e;case gy:return bu(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case hy:a=10;break e;case my:a=9;break e;case ih:a=11;break e;case oh:a=14;break e;case ir:a=16,r=null;break e}throw Error(V(130,e==null?e:typeof e,""))}return t=Wt(a,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function Wr(e,t,n,r){return e=Wt(7,e,r,t),e.lanes=n,e}function bu(e,t,n,r){return e=Wt(22,e,r,t),e.elementType=gy,e.lanes=n,e.stateNode={isHidden:!1},e}function id(e,t,n){return e=Wt(6,e,null,t),e.lanes=n,e}function od(e,t,n){return t=Wt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Xk(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=zc(0),this.expirationTimes=zc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=zc(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Nh(e,t,n,r,i,o,a,l,s){return e=new Xk(e,t,n,l,s),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Wt(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},_h(o),e}function Kk(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Si,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function lb(e){if(!e)return Cr;e=e._reactInternals;e:{if(oi(e)!==e||e.tag!==1)throw Error(V(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ct(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(V(171))}if(e.tag===1){var n=e.type;if(Ct(n))return sx(e,n,t)}return t}function ub(e,t,n,r,i,o,a,l,s){return e=Nh(n,r,!0,e,i,o,a,l,s),e.context=lb(null),n=e.current,r=pt(),i=br(n),o=Bn(r,i),o.callback=t??null,yr(n,o,i),e.current.lanes=i,Ra(e,i,r),Et(e,r),e}function wu(e,t,n,r){var i=t.current,o=pt(),a=br(i);return n=lb(n),t.context===null?t.context=n:t.pendingContext=n,t=Bn(o,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=yr(i,t,a),e!==null&&(ln(e,i,a,o),Rs(e,i,a)),a}function $l(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function p0(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Bh(e,t){p0(e,t),(e=e.alternate)&&p0(e,t)}function Qk(){return null}var cb=typeof reportError=="function"?reportError:function(e){console.error(e)};function Vh(e){this._internalRoot=e}Su.prototype.render=Vh.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(V(409));wu(e,t,null,null)};Su.prototype.unmount=Vh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Qr(function(){wu(null,e,null,null)}),t[Wn]=null}};function Su(e){this._internalRoot=e}Su.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ny();e={blockedOn:null,target:e,priority:t};for(var n=0;n<ar.length&&t!==0&&t<ar[n].priority;n++);ar.splice(n,0,e),n===0&&Vy(e)}};function Uh(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function _u(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function h0(){}function Zk(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=$l(a);o.call(u)}}var a=ub(t,r,e,0,null,!1,!1,"",h0);return e._reactRootContainer=a,e[Wn]=a.current,ga(e.nodeType===8?e.parentNode:e),Qr(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=$l(s);l.call(u)}}var s=Nh(e,0,!1,null,null,!1,!1,"",h0);return e._reactRootContainer=s,e[Wn]=s.current,ga(e.nodeType===8?e.parentNode:e),Qr(function(){wu(t,s,n,r)}),s}function Cu(e,t,n,r,i){var o=n._reactRootContainer;if(o){var a=o;if(typeof i=="function"){var l=i;i=function(){var s=$l(a);l.call(s)}}wu(t,a,e,i)}else a=Zk(n,t,e,i,r);return $l(a)}Fy=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Bo(t.pendingLanes);n!==0&&(lh(t,n|1),Et(t,je()),!(se&6)&&(Xi=je()+500,Tr()))}break;case 13:Qr(function(){var r=Gn(e,1);if(r!==null){var i=pt();ln(r,e,1,i)}}),Bh(e,1)}};uh=function(e){if(e.tag===13){var t=Gn(e,134217728);if(t!==null){var n=pt();ln(t,e,134217728,n)}Bh(e,134217728)}};zy=function(e){if(e.tag===13){var t=br(e),n=Gn(e,t);if(n!==null){var r=pt();ln(n,e,t,r)}Bh(e,t)}};Ny=function(){return he};By=function(e,t){var n=he;try{return he=e,t()}finally{he=n}};Ef=function(e,t,n){switch(t){case"input":if(yf(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=hu(r);if(!i)throw Error(V(90));yy(r),yf(r,i)}}}break;case"textarea":by(e,n);break;case"select":t=n.value,t!=null&&Di(e,!!n.multiple,t,!1)}};Py=Ah;Ty=Qr;var Jk={usingClientEntryPoint:!1,Events:[za,Pi,hu,Ey,ky,Ah]},Mo={findFiberByHostInstance:Nr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},eP={bundleType:Mo.bundleType,version:Mo.version,rendererPackageName:Mo.rendererPackageName,rendererConfig:Mo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Qn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=My(e),e===null?null:e.stateNode},findFiberByHostInstance:Mo.findFiberByHostInstance||Qk,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var vs=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!vs.isDisabled&&vs.supportsFiber)try{cu=vs.inject(eP),_n=vs}catch{}}Ft.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Jk;Ft.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Uh(t))throw Error(V(200));return Kk(e,t,null,n)};Ft.createRoot=function(e,t){if(!Uh(e))throw Error(V(299));var n=!1,r="",i=cb;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Nh(e,1,!1,null,null,n,!1,r,i),e[Wn]=t.current,ga(e.nodeType===8?e.parentNode:e),new Vh(t)};Ft.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(V(188)):(e=Object.keys(e).join(","),Error(V(268,e)));return e=My(t),e=e===null?null:e.stateNode,e};Ft.flushSync=function(e){return Qr(e)};Ft.hydrate=function(e,t,n){if(!_u(t))throw Error(V(200));return Cu(null,e,t,!0,n)};Ft.hydrateRoot=function(e,t,n){if(!Uh(e))throw Error(V(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",a=cb;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=ub(t,null,e,1,n??null,i,!1,o,a),e[Wn]=t.current,ga(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Su(t)};Ft.render=function(e,t,n){if(!_u(t))throw Error(V(200));return Cu(null,e,t,!1,n)};Ft.unmountComponentAtNode=function(e){if(!_u(e))throw Error(V(40));return e._reactRootContainer?(Qr(function(){Cu(null,null,e,!1,function(){e._reactRootContainer=null,e[Wn]=null})}),!0):!1};Ft.unstable_batchedUpdates=Ah;Ft.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!_u(n))throw Error(V(200));if(e==null||e._reactInternals===void 0)throw Error(V(38));return Cu(e,t,n,!1,r)};Ft.version="18.2.0-next-9e3b772b8-20220608";function db(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(db)}catch(e){console.error(e)}}db(),uy.exports=Ft;var Eu=uy.exports,m0=Eu;df.createRoot=m0.createRoot,df.hydrateRoot=m0.hydrateRoot;var st=function(){return st=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},st.apply(this,arguments)};function Ki(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,o;r<i;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))}function tP(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var nP=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|popover|popoverTarget|popoverTargetAction|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,rP=tP(function(e){return nP.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),ye="-ms-",ra="-moz-",ue="-webkit-",fb="comm",ku="rule",Hh="decl",iP="@import",oP="@namespace",pb="@keyframes",aP="@layer",hb=Math.abs,Wh=String.fromCharCode,ip=Object.assign;function sP(e,t){return ze(e,0)^45?(((t<<2^ze(e,0))<<2^ze(e,1))<<2^ze(e,2))<<2^ze(e,3):0}function mb(e){return e.trim()}function Dn(e,t){return(e=t.exec(e))?e[0]:e}function ne(e,t,n){return e.replace(t,n)}function Hs(e,t,n){return e.indexOf(t,n)}function ze(e,t){return e.charCodeAt(t)|0}function Zr(e,t,n){return e.slice(t,n)}function rn(e){return e.length}function gb(e){return e.length}function Uo(e,t){return t.push(e),e}function lP(e,t){return e.map(t).join("")}function g0(e,t){return e.filter(function(n){return!Dn(n,t)})}var Pu=1,Qi=1,vb=0,Xt=0,$e=0,fo="";function Tu(e,t,n,r,i,o,a,l){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:Pu,column:Qi,length:a,return:"",siblings:l}}function rr(e,t){return ip(Tu("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function ci(e){for(;e.root;)e=rr(e.root,{children:[e]});Uo(e,e.siblings)}function uP(){return $e}function cP(){return $e=Xt>0?ze(fo,--Xt):0,Qi--,$e===10&&(Qi=1,Pu--),$e}function un(){return $e=Xt<vb?ze(fo,Xt++):0,Qi++,$e===10&&(Qi=1,Pu++),$e}function dr(){return ze(fo,Xt)}function Ws(){return Xt}function Ou(e,t){return Zr(fo,e,t)}function Ea(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function dP(e){return Pu=Qi=1,vb=rn(fo=e),Xt=0,[]}function fP(e){return fo="",e}function ad(e){return mb(Ou(Xt-1,op(e===91?e+2:e===40?e+1:e)))}function pP(e){for(;($e=dr())&&$e<33;)un();return Ea(e)>2||Ea($e)>3?"":" "}function hP(e,t){for(;--t&&un()&&!($e<48||$e>102||$e>57&&$e<65||$e>70&&$e<97););return Ou(e,Ws()+(t<6&&dr()==32&&un()==32))}function op(e){for(;un();)switch($e){case e:return Xt;case 34:case 39:e!==34&&e!==39&&op($e);break;case 40:e===41&&op(e);break;case 92:un();break}return Xt}function mP(e,t){for(;un()&&e+$e!==47+10;)if(e+$e===42+42&&dr()===47)break;return"/*"+Ou(t,Xt-1)+"*"+Wh(e===47?e:un())}function gP(e){for(;!Ea(dr());)un();return Ou(e,Xt)}function vP(e){return fP(Gs("",null,null,null,[""],e=dP(e),0,[0],e))}function Gs(e,t,n,r,i,o,a,l,s){for(var u=0,d=0,c=a,y=0,p=0,m=0,v=1,w=1,h=1,g=0,x="",S=i,C=o,T=r,E=x;w;)switch(m=g,g=un()){case 40:if(m!=108&&ze(E,c-1)==58){Hs(E+=ne(ad(g),"&","&\f"),"&\f",hb(u?l[u-1]:0))!=-1&&(h=-1);break}case 34:case 39:case 91:E+=ad(g);break;case 9:case 10:case 13:case 32:E+=pP(m);break;case 92:E+=hP(Ws()-1,7);continue;case 47:switch(dr()){case 42:case 47:Uo(yP(mP(un(),Ws()),t,n,s),s),(Ea(m||1)==5||Ea(dr()||1)==5)&&rn(E)&&Zr(E,-1,void 0)!==" "&&(E+=" ");break;default:E+="/"}break;case 123*v:l[u++]=rn(E)*h;case 125*v:case 59:case 0:switch(g){case 0:case 125:w=0;case 59+d:h==-1&&(E=ne(E,/\f/g,"")),p>0&&(rn(E)-c||v===0&&m===47)&&Uo(p>32?y0(E+";",r,n,c-1,s):y0(ne(E," ","")+";",r,n,c-2,s),s);break;case 59:E+=";";default:if(Uo(T=v0(E,t,n,u,d,i,l,x,S=[],C=[],c,o),o),g===123)if(d===0)Gs(E,t,T,T,S,o,c,l,C);else{switch(y){case 99:if(ze(E,3)===110)break;case 108:if(ze(E,2)===97)break;default:d=0;case 100:case 109:case 115:}d?Gs(e,T,T,r&&Uo(v0(e,T,T,0,0,i,l,x,i,S=[],c,C),C),i,C,c,l,r?S:C):Gs(E,T,T,T,[""],C,0,l,C)}}u=d=p=0,v=h=1,x=E="",c=a;break;case 58:c=1+rn(E),p=m;default:if(v<1){if(g==123)--v;else if(g==125&&v++==0&&cP()==125)continue}switch(E+=Wh(g),g*v){case 38:h=d>0?1:(E+="\f",-1);break;case 44:l[u++]=(rn(E)-1)*h,h=1;break;case 64:dr()===45&&(E+=ad(un())),y=dr(),d=c=rn(x=E+=gP(Ws())),g++;break;case 45:m===45&&rn(E)==2&&(v=0)}}return o}function v0(e,t,n,r,i,o,a,l,s,u,d,c){for(var y=i-1,p=i===0?o:[""],m=gb(p),v=0,w=0,h=0;v<r;++v)for(var g=0,x=Zr(e,y+1,y=hb(w=a[v])),S=e;g<m;++g)(S=mb(w>0?p[g]+" "+x:ne(x,/&\f/g,p[g])))&&(s[h++]=S);return Tu(e,t,n,i===0?ku:l,s,u,d,c)}function yP(e,t,n,r){return Tu(e,t,n,fb,Wh(uP()),Zr(e,2,-2),0,r)}function y0(e,t,n,r,i){return Tu(e,t,n,Hh,Zr(e,0,r),Zr(e,r+1,-1),r,i)}function yb(e,t,n){switch(sP(e,t)){case 5103:return ue+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return ue+e+e;case 4855:return ue+e.replace("add","source-over").replace("substract","source-out").replace("intersect","source-in").replace("exclude","xor")+e;case 4789:return ra+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return ue+e+ra+e+ye+e+e;case 5936:switch(ze(e,t+11)){case 114:return ue+e+ye+ne(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return ue+e+ye+ne(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return ue+e+ye+ne(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return ue+e+ye+e+e;case 6165:return ue+e+ye+"flex-"+e+e;case 5187:return ue+e+ne(e,/(\w+).+(:[^]+)/,ue+"box-$1$2"+ye+"flex-$1$2")+e;case 5443:return ue+e+ye+"flex-item-"+ne(e,/flex-|-self/g,"")+(Dn(e,/flex-|baseline/)?"":ye+"grid-row-"+ne(e,/flex-|-self/g,""))+e;case 4675:return ue+e+ye+"flex-line-pack"+ne(e,/align-content|flex-|-self/g,"")+e;case 5548:return ue+e+ye+ne(e,"shrink","negative")+e;case 5292:return ue+e+ye+ne(e,"basis","preferred-size")+e;case 6060:return ue+"box-"+ne(e,"-grow","")+ue+e+ye+ne(e,"grow","positive")+e;case 4554:return ue+ne(e,/([^-])(transform)/g,"$1"+ue+"$2")+e;case 6187:return ne(ne(ne(e,/(zoom-|grab)/,ue+"$1"),/(image-set)/,ue+"$1"),e,"")+e;case 5495:case 3959:return ne(e,/(image-set\([^]*)/,ue+"$1$`$1");case 4968:return ne(ne(e,/(.+:)(flex-)?(.*)/,ue+"box-pack:$3"+ye+"flex-pack:$3"),/space-between/,"justify")+ue+e+e;case 4200:if(!Dn(e,/flex-|baseline/))return ye+"grid-column-align"+Zr(e,t)+e;break;case 2592:case 3360:return ye+ne(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,i){return t=i,Dn(r.props,/grid-\w+-end/)})?~Hs(e+(n=n[t].value),"span",0)?e:ye+ne(e,"-start","")+e+ye+"grid-row-span:"+(~Hs(n,"span",0)?Dn(n,/\d+/):+Dn(n,/\d+/)-+Dn(e,/\d+/))+";":ye+ne(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return Dn(r.props,/grid-\w+-start/)})?e:ye+ne(ne(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return ne(e,/(.+)-inline(.+)/,ue+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(rn(e)-1-t>6)switch(ze(e,t+1)){case 109:if(ze(e,t+4)!==45)break;case 102:return ne(e,/(.+:)(.+)-([^]+)/,"$1"+ue+"$2-$3$1"+ra+(ze(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Hs(e,"stretch",0)?yb(ne(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return ne(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,o,a,l,s,u){return ye+i+":"+o+u+(a?ye+i+"-span:"+(l?s:+s-+o)+u:"")+e});case 4949:if(ze(e,t+6)===121)return ne(e,":",":"+ue)+e;break;case 6444:switch(ze(e,ze(e,14)===45?18:11)){case 120:return ne(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+ue+(ze(e,14)===45?"inline-":"")+"box$3$1"+ue+"$2$3$1"+ye+"$2box$3")+e;case 100:return ne(e,":",":"+ye)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return ne(e,"scroll-","scroll-snap-")+e}return e}function Il(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function xP(e,t,n,r){switch(e.type){case aP:if(e.children.length)break;case iP:case oP:case Hh:return e.return=e.return||e.value;case fb:return"";case pb:return e.return=e.value+"{"+Il(e.children,r)+"}";case ku:if(!rn(e.value=e.props.join(",")))return""}return rn(n=Il(e.children,r))?e.return=e.value+"{"+n+"}":""}function bP(e){var t=gb(e);return function(n,r,i,o){for(var a="",l=0;l<t;l++)a+=e[l](n,r,i,o)||"";return a}}function wP(e){return function(t){t.root||(t=t.return)&&e(t)}}function SP(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case Hh:e.return=yb(e.value,e.length,n);return;case pb:return Il([rr(e,{value:ne(e.value,"@","@"+ue)})],r);case ku:if(e.length)return lP(n=e.props,function(i){switch(Dn(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":ci(rr(e,{props:[ne(i,/:(read-\w+)/,":"+ra+"$1")]})),ci(rr(e,{props:[i]})),ip(e,{props:g0(n,r)});break;case"::placeholder":ci(rr(e,{props:[ne(i,/:(plac\w+)/,":"+ue+"input-$1")]})),ci(rr(e,{props:[ne(i,/:(plac\w+)/,":"+ra+"$1")]})),ci(rr(e,{props:[ne(i,/:(plac\w+)/,ye+"input-$1")]})),ci(rr(e,{props:[i]})),ip(e,{props:g0(n,r)});break}return""})}}var _P={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Zi=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",xb="active",bb="data-styled-version",ju="6.3.11",Gh=`/*!sc*/
`,ia=typeof window<"u"&&typeof document<"u",CP=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY),EP={};function Ba(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var qs=new Map,Dl=new Map,Ys=1,Ho=function(e){if(qs.has(e))return qs.get(e);for(;Dl.has(Ys);)Ys++;var t=Ys++;return qs.set(e,t),Dl.set(t,e),t},kP=function(e,t){Ys=t+1,qs.set(e,t),Dl.set(t,e)},qh=Object.freeze([]),Ji=Object.freeze({});function wb(e,t,n){return n===void 0&&(n=Ji),e.theme!==n.theme&&e.theme||t||n.theme}var Sb=new Set(["a","abbr","address","area","article","aside","audio","b","bdi","bdo","blockquote","body","button","br","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","main","map","mark","menu","meter","nav","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","slot","small","span","strong","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","switch","symbol","text","textPath","tspan","use"]),PP=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,TP=/(^-|-$)/g;function x0(e){return e.replace(PP,"-").replace(TP,"")}var OP=/(a)(d)/gi,b0=function(e){return String.fromCharCode(e+(e>25?39:97))};function ap(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=b0(t%52)+n;return(b0(t%52)+n).replace(OP,"$1-$2")}var sd,Ar=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},_b=function(e){return Ar(5381,e)};function Yh(e){return ap(_b(e)>>>0)}function jP(e){return e.displayName||e.name||"Component"}function ld(e){return typeof e=="string"&&!0}var Cb=typeof Symbol=="function"&&Symbol.for,Eb=Cb?Symbol.for("react.memo"):60115,MP=Cb?Symbol.for("react.forward_ref"):60112,$P={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},IP={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},kb={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},DP=((sd={})[MP]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},sd[Eb]=kb,sd);function w0(e){return("type"in(t=e)&&t.type.$$typeof)===Eb?kb:"$$typeof"in e?DP[e.$$typeof]:$P;var t}var LP=Object.defineProperty,AP=Object.getOwnPropertyNames,S0=Object.getOwnPropertySymbols,RP=Object.getOwnPropertyDescriptor,FP=Object.getPrototypeOf,_0=Object.prototype;function Pb(e,t,n){if(typeof t!="string"){if(_0){var r=FP(t);r&&r!==_0&&Pb(e,r,n)}var i=AP(t);S0&&(i=i.concat(S0(t)));for(var o=w0(e),a=w0(t),l=0;l<i.length;++l){var s=i[l];if(!(s in IP||n&&n[s]||a&&s in a||o&&s in o)){var u=RP(t,s);try{LP(e,s,u)}catch{}}}}return e}function eo(e){return typeof e=="function"}function Xh(e){return typeof e=="object"&&"styledComponentId"in e}function Ur(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Ll(e,t){return e.join(t||"")}function ka(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function sp(e,t,n){if(n===void 0&&(n=!1),!n&&!ka(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=sp(e[r],t[r]);else if(ka(t))for(var r in t)e[r]=sp(e[r],t[r]);return e}function Kh(e,t){Object.defineProperty(e,"toString",{value:t})}var zP=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t,this._cGroup=0,this._cIndex=0}return e.prototype.indexOfGroup=function(t){if(t===this._cGroup)return this._cIndex;var n=this._cIndex;if(t>this._cGroup)for(var r=this._cGroup;r<t;r++)n+=this.groupSizes[r];else for(r=this._cGroup-1;r>=t;r--)n-=this.groupSizes[r];return this._cGroup=t,this._cIndex=n,n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,o=i;t>=o;)if((o<<=1)<0)throw Ba(16,"".concat(t));this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var a=i;a<o;a++)this.groupSizes[a]=0}for(var l=this.indexOfGroup(t+1),s=0,u=(a=0,n.length);a<u;a++)this.tag.insertRule(l,n[a])&&(this.groupSizes[t]++,l++,s++);s>0&&this._cGroup>t&&(this._cIndex+=s)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),i=r+n;this.groupSizes[t]=0;for(var o=r;o<i;o++)this.tag.deleteRule(r);n>0&&this._cGroup>t&&(this._cIndex-=n)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],i=this.indexOfGroup(t),o=i+r,a=i;a<o;a++)n+=this.tag.getRule(a)+Gh;return n},e}(),NP="style[".concat(Zi,"][").concat(bb,'="').concat(ju,'"]'),BP=new RegExp("^".concat(Zi,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),C0=function(e){return typeof ShadowRoot<"u"&&e instanceof ShadowRoot||"host"in e&&e.nodeType===11},lp=function(e){if(!e)return document;if(C0(e))return e;if("getRootNode"in e){var t=e.getRootNode();if(C0(t))return t}return document},VP=function(e,t,n){for(var r,i=n.split(","),o=0,a=i.length;o<a;o++)(r=i[o])&&e.registerName(t,r)},UP=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(Gh),i=[],o=0,a=r.length;o<a;o++){var l=r[o].trim();if(l){var s=l.match(BP);if(s){var u=0|parseInt(s[1],10),d=s[2];u!==0&&(kP(d,u),VP(e,d,s[3]),e.getTag().insertRules(u,i)),i.length=0}else i.push(l)}}},ud=function(e){for(var t=lp(e.options.target).querySelectorAll(NP),n=0,r=t.length;n<r;n++){var i=t[n];i&&i.getAttribute(Zi)!==xb&&(UP(e,i),i.parentNode&&i.parentNode.removeChild(i))}};function HP(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Tb=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(l){var s=Array.from(l.querySelectorAll("style[".concat(Zi,"]")));return s[s.length-1]}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(Zi,xb),r.setAttribute(bb,ju);var a=HP();return a&&r.setAttribute("nonce",a),n.insertBefore(r,o),r},WP=function(){function e(t){this.element=Tb(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){var r;if(n.sheet)return n.sheet;for(var i=(r=n.getRootNode().styleSheets)!==null&&r!==void 0?r:document.styleSheets,o=0,a=i.length;o<a;o++){var l=i[o];if(l.ownerNode===n)return l}throw Ba(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),GP=function(){function e(t){this.element=Tb(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),qP=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(t===this.length?this.rules.push(n):this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),E0=ia,YP={isServer:!ia,useCSSOMInjection:!CP},Al=function(){function e(t,n,r){t===void 0&&(t=Ji),n===void 0&&(n={});var i=this;this.options=st(st({},YP),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&ia&&E0&&(E0=!1,ud(this)),Kh(this,function(){return function(o){for(var a=o.getTag(),l=a.length,s="",u=function(c){var y=function(h){return Dl.get(h)}(c);if(y===void 0)return"continue";var p=o.names.get(y);if(p===void 0||!p.size)return"continue";var m=a.getGroup(c);if(m.length===0)return"continue";var v=Zi+".g"+c+'[id="'+y+'"]',w="";p.forEach(function(h){h.length>0&&(w+=h+",")}),s+=m+v+'{content:"'+w+'"}'+Gh},d=0;d<l;d++)u(d);return s}(i)})}return e.registerId=function(t){return Ho(t)},e.prototype.rehydrate=function(){!this.server&&ia&&ud(this)},e.prototype.reconstructWithOptions=function(t,n){n===void 0&&(n=!0);var r=new e(st(st({},this.options),t),this.gs,n&&this.names||void 0);return!this.server&&ia&&t.target!==this.options.target&&lp(this.options.target)!==lp(t.target)&&ud(r),r},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new qP(i):r?new WP(i):new GP(i)}(this.options),new zP(t)));var t},e.prototype.hasNameForId=function(t,n){var r,i;return(i=(r=this.names.get(t))===null||r===void 0?void 0:r.has(n))!==null&&i!==void 0&&i},e.prototype.registerName=function(t,n){Ho(t);var r=this.names.get(t);r?r.add(n):this.names.set(t,new Set([n]))},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(Ho(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(Ho(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),XP=/&/g,Ln=47,Rr=42;function k0(e){if(e.indexOf("}")===-1)return!1;for(var t=e.length,n=0,r=0,i=!1,o=0;o<t;o++){var a=e.charCodeAt(o);if(r!==0||i||a!==Ln||e.charCodeAt(o+1)!==Rr)if(i)a===Rr&&e.charCodeAt(o+1)===Ln&&(i=!1,o++);else if(a!==34&&a!==39||o!==0&&e.charCodeAt(o-1)===92){if(r===0){if(a===123)n++;else if(a===125&&--n<0)return!0}}else r===0?r=a:r===a&&(r=0);else i=!0,o++}return n!==0||r!==0}function Ob(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=Ob(n.children,t)),n})}function KP(e){var t,n,r,i=e===void 0?Ji:e,o=i.options,a=o===void 0?Ji:o,l=i.plugins,s=l===void 0?qh:l,u=function(m,v,w){return w.startsWith(n)&&w.endsWith(n)&&w.replaceAll(n,"").length>0?".".concat(t):m},d=s.slice();d.push(function(m){m.type===ku&&m.value.includes("&")&&(r||(r=new RegExp("\\".concat(n,"\\b"),"g")),m.props[0]=m.props[0].replace(XP,n).replace(r,u))}),a.prefix&&d.push(SP),d.push(xP);var c=[],y=bP(d.concat(wP(function(m){return c.push(m)}))),p=function(m,v,w,h){v===void 0&&(v=""),w===void 0&&(w=""),h===void 0&&(h="&"),t=h,n=v,r=void 0;var g=function(S){if(!k0(S))return S;for(var C=S.length,T="",E=0,_=0,$=0,M=!1,R=0;R<C;R++){var A=S.charCodeAt(R);if($!==0||M||A!==Ln||S.charCodeAt(R+1)!==Rr)if(M)A===Rr&&S.charCodeAt(R+1)===Ln&&(M=!1,R++);else if(A!==34&&A!==39||R!==0&&S.charCodeAt(R-1)===92){if($===0)if(A===123)_++;else if(A===125){if(--_<0){for(var j=R+1;j<C;){var F=S.charCodeAt(j);if(F===59||F===10)break;j++}j<C&&S.charCodeAt(j)===59&&j++,_=0,R=j-1,E=j;continue}_===0&&(T+=S.substring(E,R+1),E=R+1)}else A===59&&_===0&&(T+=S.substring(E,R+1),E=R+1)}else $===0?$=A:$===A&&($=0);else M=!0,R++}if(E<C){var L=S.substring(E);k0(L)||(T+=L)}return T}(function(S){if(S.indexOf("//")===-1)return S;for(var C=S.length,T=[],E=0,_=0,$=0,M=0;_<C;){var R=S.charCodeAt(_);if(R!==34&&R!==39||_!==0&&S.charCodeAt(_-1)===92)if($===0)if(R===Ln&&_+1<C&&S.charCodeAt(_+1)===Rr){for(_+=2;_+1<C&&(S.charCodeAt(_)!==Rr||S.charCodeAt(_+1)!==Ln);)_++;_+=2}else if(R===40&&_>=3&&(32|S.charCodeAt(_-1))==108&&(32|S.charCodeAt(_-2))==114&&(32|S.charCodeAt(_-3))==117)M=1,_++;else if(M>0)R===41?M--:R===40&&M++,_++;else if(R===Rr&&_+1<C&&S.charCodeAt(_+1)===Ln)_>E&&T.push(S.substring(E,_)),E=_+=2;else if(R===Ln&&_+1<C&&S.charCodeAt(_+1)===Ln){for(_>E&&T.push(S.substring(E,_));_<C&&S.charCodeAt(_)!==10;)_++;E=_}else _++;else _++;else $===0?$=R:$===R&&($=0),_++}return E===0?S:(E<C&&T.push(S.substring(E)),T.join(""))}(m)),x=vP(w||v?"".concat(w," ").concat(v," { ").concat(g," }"):g);return a.namespace&&(x=Ob(x,a.namespace)),c=[],Il(x,y),c};return p.hash=s.length?s.reduce(function(m,v){return v.name||Ba(15),Ar(m,v.name)},5381).toString():"",p}var QP=new Al,up=KP(),jb=X.createContext({shouldForwardProp:void 0,styleSheet:QP,stylis:up});jb.Consumer;X.createContext(void 0);function cp(){return X.useContext(jb)}var Mb=function(){function e(t,n){var r=this;this.inject=function(i,o){o===void 0&&(o=up);var a=r.name+o.hash;i.hasNameForId(r.id,a)||i.insertRules(r.id,a,o(r.rules,a,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,Kh(this,function(){throw Ba(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=up),this.name+t.hash},e}();function ZP(e,t){return t==null||typeof t=="boolean"||t===""?"":typeof t!="number"||t===0||e in _P||e.startsWith("--")?String(t).trim():"".concat(t,"px")}var JP=function(e){return e>="A"&&e<="Z"};function P0(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;JP(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var $b=function(e){return e==null||e===!1||e===""},Ib=function(e){var t=[];for(var n in e){var r=e[n];e.hasOwnProperty(n)&&!$b(r)&&(Array.isArray(r)&&r.isCss||eo(r)?t.push("".concat(P0(n),":"),r,";"):ka(r)?t.push.apply(t,Ki(Ki(["".concat(n," {")],Ib(r),!1),["}"],!1)):t.push("".concat(P0(n),": ").concat(ZP(n,r),";")))}return t};function Sr(e,t,n,r,i){if(i===void 0&&(i=[]),typeof e=="string")return e&&i.push(e),i;if($b(e))return i;if(Xh(e))return i.push(".".concat(e.styledComponentId)),i;if(eo(e)){if(!eo(a=e)||a.prototype&&a.prototype.isReactComponent||!t)return i.push(e),i;var o=e(t);return Sr(o,t,n,r,i)}var a;if(e instanceof Mb)return n?(e.inject(n,r),i.push(e.getName(r))):i.push(e),i;if(ka(e)){for(var l=Ib(e),s=0;s<l.length;s++)i.push(l[s]);return i}if(!Array.isArray(e))return i.push(e.toString()),i;for(s=0;s<e.length;s++)Sr(e[s],t,n,r,i);return i}function Db(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(eo(n)&&!Xh(n))return!1}return!0}var eT=_b(ju),tT=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&Db(t),this.componentId=n,this.baseHash=Ar(eT,n),this.baseStyle=r,Al.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r).className:"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=Ur(i,this.staticRulesId);else{var o=Ll(Sr(this.rules,t,n,r)),a=ap(Ar(this.baseHash,o)>>>0);if(!n.hasNameForId(this.componentId,a)){var l=r(o,".".concat(a),void 0,this.componentId);n.insertRules(this.componentId,a,l)}i=Ur(i,a),this.staticRulesId=a}else{for(var s=Ar(this.baseHash,r.hash),u="",d=0;d<this.rules.length;d++){var c=this.rules[d];if(typeof c=="string")u+=c;else if(c){var y=Ll(Sr(c,t,n,r));s=Ar(Ar(s,String(d)),y),u+=y}}if(u){var p=ap(s>>>0);if(!n.hasNameForId(this.componentId,p)){var m=r(u,".".concat(p),void 0,this.componentId);n.insertRules(this.componentId,p,m)}i=Ur(i,p)}}return{className:i,css:typeof window>"u"?n.getTag().getGroup(Ho(this.componentId)):""}},e}(),Qh=X.createContext(void 0);Qh.Consumer;var cd={};function nT(e,t,n){var r=Xh(e),i=e,o=!ld(e),a=t.attrs,l=a===void 0?qh:a,s=t.componentId,u=s===void 0?function(S,C){var T=typeof S!="string"?"sc":x0(S);cd[T]=(cd[T]||0)+1;var E="".concat(T,"-").concat(Yh(ju+T+cd[T]));return C?"".concat(C,"-").concat(E):E}(t.displayName,t.parentComponentId):s,d=t.displayName,c=d===void 0?function(S){return ld(S)?"styled.".concat(S):"Styled(".concat(jP(S),")")}(e):d,y=t.displayName&&t.componentId?"".concat(x0(t.displayName),"-").concat(t.componentId):t.componentId||u,p=r&&i.attrs?i.attrs.concat(l).filter(Boolean):l,m=t.shouldForwardProp;if(r&&i.shouldForwardProp){var v=i.shouldForwardProp;if(t.shouldForwardProp){var w=t.shouldForwardProp;m=function(S,C){return v(S,C)&&w(S,C)}}else m=v}var h=new tT(n,y,r?i.componentStyle:void 0);function g(S,C){return function(T,E,_){var $=T.attrs,M=T.componentStyle,R=T.defaultProps,A=T.foldedComponentIds,j=T.styledComponentId,F=T.target,L=X.useContext(Qh),O=cp(),D=T.shouldForwardProp||O.shouldForwardProp,P=wb(E,L,R)||Ji,I=function(K,ee,fe){for(var be,ie=st(st({},ee),{className:void 0,theme:fe}),Me=0;Me<K.length;Me+=1){var Be=eo(be=K[Me])?be(ie):be;for(var Ve in Be)Ve==="className"?ie.className=Ur(ie.className,Be[Ve]):Ve==="style"?ie.style=st(st({},ie.style),Be[Ve]):ie[Ve]=Be[Ve]}return"className"in ee&&typeof ee.className=="string"&&(ie.className=Ur(ie.className,ee.className)),ie}($,E,P),z=I.as||F,B={};for(var N in I)I[N]===void 0||N[0]==="$"||N==="as"||N==="theme"&&I.theme===P||(N==="forwardedAs"?B.as=I.forwardedAs:D&&!D(N,z)||(B[N]=I[N]));var U=function(K,ee){var fe=cp(),be=K.generateAndInjectStyles(ee,fe.styleSheet,fe.stylis);return be}(M,I),H=U.className,q=Ur(A,j);return H&&(q+=" "+H),I.className&&(q+=" "+I.className),B[ld(z)&&!Sb.has(z)?"class":"className"]=q,_&&(B.ref=_),b.createElement(z,B)}(x,S,C)}g.displayName=c;var x=X.forwardRef(g);return x.attrs=p,x.componentStyle=h,x.displayName=c,x.shouldForwardProp=m,x.foldedComponentIds=r?Ur(i.foldedComponentIds,i.styledComponentId):"",x.styledComponentId=y,x.target=r?i.target:e,Object.defineProperty(x,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(S){this._foldedDefaultProps=r?function(C){for(var T=[],E=1;E<arguments.length;E++)T[E-1]=arguments[E];for(var _=0,$=T;_<$.length;_++)sp(C,$[_],!0);return C}({},i.defaultProps,S):S}}),Kh(x,function(){return".".concat(x.styledComponentId)}),o&&Pb(x,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),x}function T0(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var O0=function(e){return Object.assign(e,{isCss:!0})};function Zh(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(eo(e)||ka(e))return O0(Sr(T0(qh,Ki([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?Sr(r):O0(Sr(T0(r,t)))}function dp(e,t,n){if(n===void 0&&(n=Ji),!t)throw Ba(1,t);var r=function(i){for(var o=[],a=1;a<arguments.length;a++)o[a-1]=arguments[a];return e(t,n,Zh.apply(void 0,Ki([i],o,!1)))};return r.attrs=function(i){return dp(e,t,st(st({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return dp(e,t,st(st({},n),i))},r}var Lb=function(e){return dp(nT,e)},k=Lb;Sb.forEach(function(e){k[e]=Lb(e)});var rT=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=Db(t),Al.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,r,i){var o=i(Ll(Sr(this.rules,n,r,i)),""),a=this.componentId+t;r.insertRules(a,a,o)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,r,i){t>2&&Al.registerId(this.componentId+t);var o=this.componentId+t;this.isStatic?r.hasNameForId(o,o)||this.createStyles(t,n,r,i):(this.removeStyles(t,r),this.createStyles(t,n,r,i))},e}();function iT(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=Zh.apply(void 0,Ki([e],t,!1)),i="sc-global-".concat(Yh(JSON.stringify(r))),o=new rT(r,i),a=new WeakMap,l=function(u){var d=cp(),c=X.useContext(Qh),y=a.get(d.styleSheet);return y===void 0&&(y=d.styleSheet.allocateGSInstance(i),a.set(d.styleSheet,y)),(typeof window>"u"||!d.styleSheet.server)&&s(y,u,d.styleSheet,c,d.stylis),X.useLayoutEffect(function(){return d.styleSheet.server||s(y,u,d.styleSheet,c,d.stylis),function(){var p;o.removeStyles(y,d.styleSheet),p=d.styleSheet.options.target,typeof document<"u"&&(p??document).querySelectorAll('style[data-styled-global="'.concat(i,'"]')).forEach(function(m){return m.remove()})}},[y,u,d.styleSheet,c,d.stylis]),null};function s(u,d,c,y,p){if(o.isStatic)o.renderStyles(u,EP,c,p);else{var m=st(st({},d),{theme:wb(d,y,l.defaultProps)});o.renderStyles(u,m,c,p)}}return X.memo(l)}function Jh(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=Ll(Zh.apply(void 0,Ki([e],t,!1))),i=Yh(r);return new Mb(i,r)}const oT=k.div`
position: sticky;
  top: 0;
  z-index: 1000;
      background: radial-gradient(circle at 50% 45%, #5c5149 0%, #4b3c34 35%, #352b25 65%, #1b1412 100%);


`,aT=k.div`
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
`,sT=k.div`
width: 100%;
  display: flex;
      gap: 10px;

  flex-direction: column;
  @media screen and (min-width: 768px) {
    justify-content: space-around;
  }
`,lT=k.div`

  display: flex;
  @media screen and (max-width: 1023px) {
    justify-content: space-between;
  }
`,uT=k.div`
  display: flex;
  justify-content: space-around;

  @media screen and (min-width: 1023px) {
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    flex: 1;
  }
`;k(Oe)`
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
`;const cT=k(Oe)`
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
`;k.h1`
  color: var(--white-color);
  font-family: DM Serif Display;
  margin-left: 70px;
`;const dT=k.svg`
  width: 30px;
  height: 30px;
  fill: var(--white-color);
`,fT=k.button`
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
`;k.div`
  z-index: 9999;
`;k.a`
  color: var(--black-color);
`;const pT=k.div`
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
`,hT=k.button`
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
`,mT=k.nav`
  display: flex;
  flex-direction: column;
  gap: 25px;
`,di=k(Oe)`
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
`,gT=k.div`
  margin-top: auto;
  border-top: 1px solid #eee;
  padding-top: 20px;
  font-size: 14px;
  color: #888;
  text-align: center;
`,vT=k.div`
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
`,yT=k.div`
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
`,xT=k.input`
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
`,bT=k.button`
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
`,wT=k.svg`
  width: 24px;
  height: 24px;
`,ST=k.ul`
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
`,_T=k.li`
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


`,CT=k.img`
 width: 100px;
    height: 100px;
    object-fit: cover;
 `,ET=k.h3`
      text-align: left;
      font-size: 22px;
      font-weight: 800;

`,kT=k.h3`

      font-size: 22px;
         

`,PT=k.div`
display: flex;
flex-direction: column;
    align-items: flex-start;
    gap: 10px;

      @media screen and (min-width: 768px) {
   flex-direction: row;
  justify-content: space-between; /* Рознесе назву вліво, а ціну вправо */
  align-items: center;            /* Вирівняє їх по вертикалі */
  width: 100%;
  padding-right: 20px;
  
  }

    
`,cn="/Didiv/assets/symbol-defs-fb9ce9f0.svg",TT=()=>{const[e,t]=b.useState(""),[n,r]=b.useState([]),[i,o]=b.useState(!1),a=On(),l=b.useRef(null);b.useEffect(()=>{if(e.trim().length<2){r([]),o(!1);return}const u=setTimeout(async()=>{try{const c=await(await fetch(`https://backenddidiv-production.up.railway.app/api/products?filters[name][$containsi]=${e}&populate=*`)).json();r(c.data),o(!0)}catch(d){console.error(d)}},300);return()=>clearTimeout(u)},[e]),b.useEffect(()=>{const u=d=>{l.current&&!l.current.contains(d.target)&&o(!1)};return document.addEventListener("mousedown",u),()=>{document.removeEventListener("mousedown",u)}},[]);const s=u=>{t(""),o(!1),a(`/product/${u.id}`)};return f.jsxs(yT,{ref:l,children:[f.jsx(xT,{name:"site-search",value:e,onChange:u=>t(u.target.value),placeholder:"Пошук",autoComplete:"off",onFocus:()=>e.trim().length>=2&&o(!0)}),f.jsx(bT,{className:"search-button",children:f.jsx(wT,{children:f.jsx("use",{href:`${cn}#icon-search`})})}),i&&n.length>0&&f.jsx(ST,{children:n.map(u=>{var y,p;const c=u.new_price&&u.new_price<u.price?u.new_price:u.price;return f.jsxs(_T,{onClick:()=>s(u),children:[f.jsx(CT,{src:((p=(y=u.images)==null?void 0:y[0])==null?void 0:p.url)||"/nofoto.png",alt:""}),f.jsxs(PT,{children:[f.jsx(ET,{children:u.name}),f.jsxs(kT,{children:[c," грн."]})]})]},u.id)})})]})};var Ab={exports:{}},Rb={};/**
 * @license React
 * use-sync-external-store-with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Va=b;function OT(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var jT=typeof Object.is=="function"?Object.is:OT,MT=Va.useSyncExternalStore,$T=Va.useRef,IT=Va.useEffect,DT=Va.useMemo,LT=Va.useDebugValue;Rb.useSyncExternalStoreWithSelector=function(e,t,n,r,i){var o=$T(null);if(o.current===null){var a={hasValue:!1,value:null};o.current=a}else a=o.current;o=DT(function(){function s(p){if(!u){if(u=!0,d=p,p=r(p),i!==void 0&&a.hasValue){var m=a.value;if(i(m,p))return c=m}return c=p}if(m=c,jT(d,p))return m;var v=r(p);return i!==void 0&&i(m,v)?(d=p,m):(d=p,c=v)}var u=!1,d,c,y=n===void 0?null:n;return[function(){return s(t())},y===null?void 0:function(){return s(y())}]},[t,n,r,i]);var l=MT(e,o[0],o[1]);return IT(function(){a.hasValue=!0,a.value=l},[l]),LT(l),l};Ab.exports=Rb;var AT=Ab.exports;function RT(e){e()}function FT(){let e=null,t=null;return{clear(){e=null,t=null},notify(){RT(()=>{let n=e;for(;n;)n.callback(),n=n.next})},get(){const n=[];let r=e;for(;r;)n.push(r),r=r.next;return n},subscribe(n){let r=!0;const i=t={callback:n,next:null,prev:t};return i.prev?i.prev.next=i:e=i,function(){!r||e===null||(r=!1,i.next?i.next.prev=i.prev:t=i.prev,i.prev?i.prev.next=i.next:e=i.next)}}}}var j0={notify(){},get:()=>[]};function zT(e,t){let n,r=j0,i=0,o=!1;function a(v){d();const w=r.subscribe(v);let h=!1;return()=>{h||(h=!0,w(),c())}}function l(){r.notify()}function s(){m.onStateChange&&m.onStateChange()}function u(){return o}function d(){i++,n||(n=t?t.addNestedSub(s):e.subscribe(s),r=FT())}function c(){i--,n&&i===0&&(n(),n=void 0,r.clear(),r=j0)}function y(){o||(o=!0,d())}function p(){o&&(o=!1,c())}const m={addNestedSub:a,notifyNestedSubs:l,handleChangeWrapper:s,isSubscribed:u,trySubscribe:y,tryUnsubscribe:p,getListeners:()=>r};return m}var NT=()=>typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",BT=NT(),VT=()=>typeof navigator<"u"&&navigator.product==="ReactNative",UT=VT(),HT=()=>BT||UT?b.useLayoutEffect:b.useEffect,WT=HT(),dd=Symbol.for("react-redux-context"),fd=typeof globalThis<"u"?globalThis:{};function GT(){if(!b.createContext)return{};const e=fd[dd]??(fd[dd]=new Map);let t=e.get(b.createContext);return t||(t=b.createContext(null),e.set(b.createContext,t)),t}var Er=GT();function qT(e){const{children:t,context:n,serverState:r,store:i}=e,o=b.useMemo(()=>{const s=zT(i);return{store:i,subscription:s,getServerState:r?()=>r:void 0}},[i,r]),a=b.useMemo(()=>i.getState(),[i]);WT(()=>{const{subscription:s}=o;return s.onStateChange=s.notifyNestedSubs,s.trySubscribe(),a!==i.getState()&&s.notifyNestedSubs(),()=>{s.tryUnsubscribe(),s.onStateChange=void 0}},[o,a]);const l=n||Er;return b.createElement(l.Provider,{value:o},t)}var YT=qT;function em(e=Er){return function(){return b.useContext(e)}}var Fb=em();function zb(e=Er){const t=e===Er?Fb:em(e),n=()=>{const{store:r}=t();return r};return Object.assign(n,{withTypes:()=>n}),n}var XT=zb();function KT(e=Er){const t=e===Er?XT:zb(e),n=()=>t().dispatch;return Object.assign(n,{withTypes:()=>n}),n}var jn=KT(),QT=(e,t)=>e===t;function ZT(e=Er){const t=e===Er?Fb:em(e),n=(r,i={})=>{const{equalityFn:o=QT}=typeof i=="function"?{equalityFn:i}:i,a=t(),{store:l,subscription:s,getServerState:u}=a;b.useRef(!0);const d=b.useCallback({[r.name](y){return r(y)}}[r.name],[r]),c=AT.useSyncExternalStoreWithSelector(s.addNestedSub,l.getState,u||l.getState,d,o);return b.useDebugValue(c),c};return Object.assign(n,{withTypes:()=>n}),n}var qe=ZT();const JT=k(Oe)`
      display: flex;
    align-items: center;
    align-content: center;
    justify-content: center;
    
    @media screen and (min-width: 1023px) {
   order: 2;
  margin-right: 10px;
  
  }
       
`,eO=k.svg`
  width: 30px;
  height: 30px;
 fill: var(--white-color);
`,tO=k.div`

width:30px;
height:30px;

  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 28px; 
  cursor: pointer;
`,nO=k.div`
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
`,rO=({onClick:e})=>{const t=qe(n=>n.cart.items.length);return f.jsx(JT,{to:"/cart",children:f.jsxs(tO,{onClick:e,children:[f.jsx(eO,{children:f.jsx("use",{href:`${cn}#icon-cart`})}),t>0&&f.jsx(nO,{children:t})]})})},iO=k.nav`
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
`,fi=k(Oe)`
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
`,oO=()=>f.jsxs(iO,{children:[f.jsx(fi,{to:"/",children:"Головна"}),f.jsx(fi,{to:"/catalog",children:"Каталог"}),f.jsx(fi,{to:"/catalog/new",children:"Новинки"}),f.jsx(fi,{to:"/catalog/sale",children:"Акційні товари"}),f.jsx(fi,{to:"/about",children:"Про нас"}),f.jsx(fi,{to:"/contacts",children:"Контакти"})]}),aO=k.svg`
  width: 24px;
  height: 24px;
  fill: var(--white-color);
`,sO=k(Oe)`
      display: flex;
    align-items: center;
    align-content: center;
    justify-content: center;
    
    @media screen and (min-width: 1023px) {
   order: 2;
 
  }
       
`,lO=k.div`

width:30px;
height:30px;

  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 28px; /* розмір іконки */
  cursor: pointer;
`,uO=k.div`

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
`,cO=({onClick:e})=>{const t=qe(n=>n.favorites.items.length);return f.jsx(sO,{to:"/favorite",children:f.jsxs(lO,{onClick:e,children:[f.jsx(aO,{children:f.jsx("use",{href:`${cn}#icon-heart`})}),t>0&&f.jsx(uO,{children:t})]})})};/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nb=(...e)=>e.filter((t,n,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===n).join(" ").trim();/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dO=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fO=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,n,r)=>r?r.toUpperCase():n.toLowerCase());/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M0=e=>{const t=fO(e);return t.charAt(0).toUpperCase()+t.slice(1)};/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var pO={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hO=e=>{for(const t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0;return!1};/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mO=b.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:i="",children:o,iconNode:a,...l},s)=>b.createElement("svg",{ref:s,...pO,width:t,height:t,stroke:e,strokeWidth:r?Number(n)*24/Number(t):n,className:Nb("lucide",i),...!o&&!hO(l)&&{"aria-hidden":"true"},...l},[...a.map(([u,d])=>b.createElement(u,d)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nt=(e,t)=>{const n=b.forwardRef(({className:r,...i},o)=>b.createElement(mO,{ref:o,iconNode:t,className:Nb(`lucide-${dO(M0(e))}`,`lucide-${e}`,r),...i}));return n.displayName=M0(e),n};/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gO=[["path",{d:"m3 16 4 4 4-4",key:"1co6wj"}],["path",{d:"M7 20V4",key:"1yoxec"}],["path",{d:"M11 4h4",key:"6d7r33"}],["path",{d:"M11 8h7",key:"djye34"}],["path",{d:"M11 12h10",key:"1438ji"}]],Mu=Nt("arrow-down-narrow-wide",gO);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vO=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],$u=Nt("arrow-right",vO);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yO=[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"M9 9h.01",key:"1q5me6"}],["path",{d:"M15 15h.01",key:"lqbp3k"}]],xO=Nt("badge-percent",yO);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bO=[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",key:"mvr1a0"}]],Ua=Nt("heart",bO);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wO=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"r6nss1"}]],SO=Nt("house",wO);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _O=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],CO=Nt("info",_O);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EO=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 .83.18 2 2 0 0 0 .83-.18l8.58-3.9a1 1 0 0 0 0-1.831z",key:"zzgyd3"}],["path",{d:"M16 17h6",key:"1ook5g"}],["path",{d:"M19 14v6",key:"1ckrd5"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 .825.178",key:"1ia9y3"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l2.116-.962",key:"jksky3"}]],kO=Nt("layers-plus",EO);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PO=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],TO=Nt("mail",PO);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OO=[["path",{d:"M16 10a4 4 0 0 1-8 0",key:"1ltviw"}],["path",{d:"M3.103 6.034h17.794",key:"awc11p"}],["path",{d:"M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z",key:"o988cm"}]],jO=Nt("shopping-bag",OO);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MO=[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]],po=Nt("shopping-cart",MO);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $O=[["path",{d:"M10 5H3",key:"1qgfaw"}],["path",{d:"M12 19H3",key:"yhmn1j"}],["path",{d:"M14 3v4",key:"1sua03"}],["path",{d:"M16 17v4",key:"1q0r14"}],["path",{d:"M21 12h-9",key:"1o4lsq"}],["path",{d:"M21 19h-5",key:"1rlt1p"}],["path",{d:"M21 5h-7",key:"1oszz2"}],["path",{d:"M8 10v4",key:"tgpxqk"}],["path",{d:"M8 12H3",key:"a7s4jb"}]],Bb=Nt("sliders-horizontal",$O);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IO=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],Vb=Nt("trash-2",IO);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DO=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Ub=Nt("x",DO),LO=()=>{const[e,t]=b.useState(!1);return f.jsx(oT,{children:f.jsx(aT,{children:f.jsxs(sT,{children:[f.jsxs(lT,{children:[f.jsx(cT,{to:"/",children:"Дідів хлів"}),f.jsxs(uT,{children:[f.jsx(rO,{}),f.jsx(cO,{}),f.jsx(oO,{}),f.jsx(fT,{onClick:()=>t(!e),children:f.jsx(dT,{children:f.jsx("use",{href:`${cn}#icon-menu`})})}),f.jsx(vT,{open:e,onClick:()=>t(!1)}),f.jsxs(pT,{open:e,children:[f.jsx(hT,{onClick:()=>t(!1),children:f.jsx(Ub,{size:28,strokeWidth:1.5})}),f.jsxs(mT,{children:[f.jsxs(di,{onClick:()=>t(!1),to:"/",children:[f.jsx(SO,{size:22,strokeWidth:1.5})," Головна"]}),f.jsxs(di,{onClick:()=>t(!1),to:"/catalog",children:[f.jsx(jO,{size:22,strokeWidth:1.5})," Каталог"]}),f.jsxs(di,{onClick:()=>t(!1),to:"/catalog/new",children:[f.jsx(kO,{size:22,strokeWidth:1.5}),"Новинки"]}),f.jsxs(di,{onClick:()=>t(!1),to:"/catalog/sale",children:[f.jsx(xO,{size:22,strokeWidth:1.5}),"Акційні товари"]}),f.jsxs(di,{onClick:()=>t(!1),to:"/about",children:[f.jsx(CO,{size:22,strokeWidth:1.5})," Про нас"]}),f.jsxs(di,{onClick:()=>t(!1),to:"/contacts",children:[f.jsx(TO,{size:22,strokeWidth:1.5})," Контакти"]})]}),f.jsx(gT,{children:f.jsx("p",{children:"© 2020 Дідів Хлів"})})]})]})]}),f.jsx(TT,{})]})})})},AO=k.div`

   background: radial-gradient(
    circle at 50% 45%,
    #5c5149 0%,
    #4b3c34 35%,
    #352b25 65%,
    #1b1412 100%
  );
`,RO=k.footer`
 
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
`,FO=k.div`
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
`,pd=k.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center; /* Центруємо контент всередині колонки */

  @media screen and (min-width: 768px) {
    align-items: flex-start; /* На десктопі — по лівому краю */
    min-width: 150px;
    flex: 1;
  }
`,hd=k.h3`
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
`,vn=k(Oe)`
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
`,zO=k.div`
  display: flex;
  gap: 20px;
  margin-top: 10px;
  justify-content: center;

  @media screen and (min-width: 768px) {
    justify-content: flex-start;
  }
`,md=k.a`
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
`,NO=()=>f.jsx(AO,{children:f.jsxs(RO,{children:[f.jsxs(FO,{children:[f.jsxs(pd,{children:[f.jsx(hd,{children:"Навігація"}),f.jsx(vn,{to:"/",children:"Головна"}),f.jsx(vn,{to:"/about",children:"Про нас"}),f.jsx(vn,{to:"/catalog",children:"Каталог"}),f.jsx(vn,{to:"/contacts",children:"Контакти"})]}),f.jsxs(pd,{children:[f.jsx(hd,{children:"Інформація"}),f.jsx(vn,{to:"/delivery",children:"Оплата і доставка"}),f.jsx(vn,{children:"Повернення"}),f.jsx(vn,{children:"Гарантія"}),f.jsx(vn,{children:"Політика конфіденційності"})]})]}),f.jsxs(pd,{children:[f.jsx(hd,{children:"Контакти"}),f.jsx(vn,{href:"tel:+380979999999",children:"+38 (097) 999-99-99"}),f.jsx(vn,{href:"mailto:email@email.com",children:"email@email.com"}),f.jsxs(zO,{children:[f.jsx(md,{href:"https://www.instagram.com/didivxliv?igsh=MXhsNWRjdW5rajYwdQ==",target:"_blank",rel:"noopener noreferrer",children:f.jsx("svg",{width:"20px",children:f.jsx("use",{href:`${cn}#icon-instagram`})})}),f.jsx(md,{href:"https://t.me/didivxliv",target:"_blank",rel:"noopener noreferrer",children:f.jsx("svg",{width:"20px",children:f.jsx("use",{href:`${cn}#icon-telegram`})})}),f.jsx(md,{href:"https://www.olx.ua/uk/hobbi-otdyh-i-sport/velo/q-%D0%B4%D1%96%D0%B4%D1%96%D0%B2-%D1%85%D0%BB%D1%96%D0%B2/?srsltid=AfmBOoqjzHkKNGxhNyAXVf2_KVV6h3JQFklEk0AjrDFh7tlO2-HZJPSS",target:"_blank",rel:"noopener noreferrer",children:f.jsx("svg",{width:"27px",height:"27px",style:{marginTop:"5px"},children:f.jsx("use",{href:`${cn}#icon-olx`})})})]})]})]})}),BO=()=>f.jsxs(f.Fragment,{children:[f.jsx(LO,{}),f.jsx("main",{style:{flex:1},children:f.jsx(FC,{})}),f.jsx(NO,{})]}),VO=k.section`

  width: 100%;
  font-family: var(--main-font);
  padding-top: 30px;
  
  
`,UO=k.h2`
   font-size: 30px;
      text-transform: uppercase;
  font-weight: 700;
  margin-bottom: 20px;
  color: #333;
      text-align: center;

  @media screen and (min-width: 768px) {
 font-size: 35px;

  }

`,HO=k.div`
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
`,WO=k.div`
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
`,GO=k(Oe)`
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
`,qO=k.span`
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
`,YO=k.div`
  padding: 10px 0;
`,XO=k.h3`
  font-size: 20px;
  font-weight: 600;
 
  color: #333;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
   margin-bottom:16px;
`,KO=k.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
 
`;k.span`
  font-size: 17px;
  font-weight: 800;
  color: var(--black-color);
`;k.button`
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
`;k(Oe)`
color: var(--white-color);
padding: 10px 20px;
 background:var( --orange-color); 
  border-radius: 15px;
  text-decoration: none;

`;const QO=k(Oe)`
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

`,ZO=k.div`
  text-align: center;
  color: white;

  p {
    font-size: 24px;
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 12px;
  }
  
`,JO=k.div`
  width: 40px;
  height: 40px;
  border: 2px solid white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`;function Xe(e){return`Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}var e4=(()=>typeof Symbol=="function"&&Symbol.observable||"@@observable")(),$0=e4,gd=()=>Math.random().toString(36).substring(7).split("").join("."),t4={INIT:`@@redux/INIT${gd()}`,REPLACE:`@@redux/REPLACE${gd()}`,PROBE_UNKNOWN_ACTION:()=>`@@redux/PROBE_UNKNOWN_ACTION${gd()}`},Rl=t4;function tm(e){if(typeof e!="object"||e===null)return!1;let t=e;for(;Object.getPrototypeOf(t)!==null;)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t||Object.getPrototypeOf(e)===null}function nm(e,t,n){if(typeof e!="function")throw new Error(Xe(2));if(typeof t=="function"&&typeof n=="function"||typeof n=="function"&&typeof arguments[3]=="function")throw new Error(Xe(0));if(typeof t=="function"&&typeof n>"u"&&(n=t,t=void 0),typeof n<"u"){if(typeof n!="function")throw new Error(Xe(1));return n(nm)(e,t)}let r=e,i=t,o=new Map,a=o,l=0,s=!1;function u(){a===o&&(a=new Map,o.forEach((w,h)=>{a.set(h,w)}))}function d(){if(s)throw new Error(Xe(3));return i}function c(w){if(typeof w!="function")throw new Error(Xe(4));if(s)throw new Error(Xe(5));let h=!0;u();const g=l++;return a.set(g,w),function(){if(h){if(s)throw new Error(Xe(6));h=!1,u(),a.delete(g),o=null}}}function y(w){if(!tm(w))throw new Error(Xe(7));if(typeof w.type>"u")throw new Error(Xe(8));if(typeof w.type!="string")throw new Error(Xe(17));if(s)throw new Error(Xe(9));try{s=!0,i=r(i,w)}finally{s=!1}return(o=a).forEach(g=>{g()}),w}function p(w){if(typeof w!="function")throw new Error(Xe(10));r=w,y({type:Rl.REPLACE})}function m(){const w=c;return{subscribe(h){if(typeof h!="object"||h===null)throw new Error(Xe(11));function g(){const S=h;S.next&&S.next(d())}return g(),{unsubscribe:w(g)}},[$0](){return this}}}return y({type:Rl.INIT}),{dispatch:y,subscribe:c,getState:d,replaceReducer:p,[$0]:m}}function n4(e){Object.keys(e).forEach(t=>{const n=e[t];if(typeof n(void 0,{type:Rl.INIT})>"u")throw new Error(Xe(12));if(typeof n(void 0,{type:Rl.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(Xe(13))})}function r4(e){const t=Object.keys(e),n={};for(let o=0;o<t.length;o++){const a=t[o];typeof e[a]=="function"&&(n[a]=e[a])}const r=Object.keys(n);let i;try{n4(n)}catch(o){i=o}return function(a={},l){if(i)throw i;let s=!1;const u={};for(let d=0;d<r.length;d++){const c=r[d],y=n[c],p=a[c],m=y(p,l);if(typeof m>"u")throw l&&l.type,new Error(Xe(14));u[c]=m,s=s||m!==p}return s=s||r.length!==Object.keys(a).length,s?u:a}}function Fl(...e){return e.length===0?t=>t:e.length===1?e[0]:e.reduce((t,n)=>(...r)=>t(n(...r)))}function i4(...e){return t=>(n,r)=>{const i=t(n,r);let o=()=>{throw new Error(Xe(15))};const a={getState:i.getState,dispatch:(s,...u)=>o(s,...u)},l=e.map(s=>s(a));return o=Fl(...l)(i.dispatch),{...i,dispatch:o}}}function o4(e){return tm(e)&&"type"in e&&typeof e.type=="string"}var Hb=Symbol.for("immer-nothing"),I0=Symbol.for("immer-draftable"),ht=Symbol.for("immer-state");function an(e,...t){throw new Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)}var It=Object,to=It.getPrototypeOf,zl="constructor",Iu="prototype",fp="configurable",Nl="enumerable",Xs="writable",Pa="value",Yn=e=>!!e&&!!e[ht];function pn(e){var t;return e?Wb(e)||Lu(e)||!!e[I0]||!!((t=e[zl])!=null&&t[I0])||Au(e)||Ru(e):!1}var a4=It[Iu][zl].toString(),D0=new WeakMap;function Wb(e){if(!e||!rm(e))return!1;const t=to(e);if(t===null||t===It[Iu])return!0;const n=It.hasOwnProperty.call(t,zl)&&t[zl];if(n===Object)return!0;if(!wi(n))return!1;let r=D0.get(n);return r===void 0&&(r=Function.toString.call(n),D0.set(n,r)),r===a4}function Du(e,t,n=!0){Ha(e)===0?(n?Reflect.ownKeys(e):It.keys(e)).forEach(i=>{t(i,e[i],e)}):e.forEach((r,i)=>t(i,r,e))}function Ha(e){const t=e[ht];return t?t.type_:Lu(e)?1:Au(e)?2:Ru(e)?3:0}var L0=(e,t,n=Ha(e))=>n===2?e.has(t):It[Iu].hasOwnProperty.call(e,t),pp=(e,t,n=Ha(e))=>n===2?e.get(t):e[t],Bl=(e,t,n,r=Ha(e))=>{r===2?e.set(t,n):r===3?e.add(n):e[t]=n};function s4(e,t){return e===t?e!==0||1/e===1/t:e!==e&&t!==t}var Lu=Array.isArray,Au=e=>e instanceof Map,Ru=e=>e instanceof Set,rm=e=>typeof e=="object",wi=e=>typeof e=="function",vd=e=>typeof e=="boolean";function l4(e){const t=+e;return Number.isInteger(t)&&String(t)===e}var Rn=e=>e.copy_||e.base_,im=e=>e.modified_?e.copy_:e.base_;function hp(e,t){if(Au(e))return new Map(e);if(Ru(e))return new Set(e);if(Lu(e))return Array[Iu].slice.call(e);const n=Wb(e);if(t===!0||t==="class_only"&&!n){const r=It.getOwnPropertyDescriptors(e);delete r[ht];let i=Reflect.ownKeys(r);for(let o=0;o<i.length;o++){const a=i[o],l=r[a];l[Xs]===!1&&(l[Xs]=!0,l[fp]=!0),(l.get||l.set)&&(r[a]={[fp]:!0,[Xs]:!0,[Nl]:l[Nl],[Pa]:e[a]})}return It.create(to(e),r)}else{const r=to(e);if(r!==null&&n)return{...e};const i=It.create(r);return It.assign(i,e)}}function om(e,t=!1){return Fu(e)||Yn(e)||!pn(e)||(Ha(e)>1&&It.defineProperties(e,{set:ys,add:ys,clear:ys,delete:ys}),It.freeze(e),t&&Du(e,(n,r)=>{om(r,!0)},!1)),e}function u4(){an(2)}var ys={[Pa]:u4};function Fu(e){return e===null||!rm(e)?!0:It.isFrozen(e)}var Vl="MapSet",mp="Patches",A0="ArrayMethods",Gb={};function Jr(e){const t=Gb[e];return t||an(0,e),t}var R0=e=>!!Gb[e],Ta,qb=()=>Ta,c4=(e,t)=>({drafts_:[],parent_:e,immer_:t,canAutoFreeze_:!0,unfinalizedDrafts_:0,handledSet_:new Set,processedForPatches_:new Set,mapSetPlugin_:R0(Vl)?Jr(Vl):void 0,arrayMethodsPlugin_:R0(A0)?Jr(A0):void 0});function F0(e,t){t&&(e.patchPlugin_=Jr(mp),e.patches_=[],e.inversePatches_=[],e.patchListener_=t)}function gp(e){vp(e),e.drafts_.forEach(d4),e.drafts_=null}function vp(e){e===Ta&&(Ta=e.parent_)}var z0=e=>Ta=c4(Ta,e);function d4(e){const t=e[ht];t.type_===0||t.type_===1?t.revoke_():t.revoked_=!0}function N0(e,t){t.unfinalizedDrafts_=t.drafts_.length;const n=t.drafts_[0];if(e!==void 0&&e!==n){n[ht].modified_&&(gp(t),an(4)),pn(e)&&(e=B0(t,e));const{patchPlugin_:i}=t;i&&i.generateReplacementPatches_(n[ht].base_,e,t)}else e=B0(t,n);return f4(t,e,!0),gp(t),t.patches_&&t.patchListener_(t.patches_,t.inversePatches_),e!==Hb?e:void 0}function B0(e,t){if(Fu(t))return t;const n=t[ht];if(!n)return Ul(t,e.handledSet_,e);if(!zu(n,e))return t;if(!n.modified_)return n.base_;if(!n.finalized_){const{callbacks_:r}=n;if(r)for(;r.length>0;)r.pop()(e);Kb(n,e)}return n.copy_}function f4(e,t,n=!1){!e.parent_&&e.immer_.autoFreeze_&&e.canAutoFreeze_&&om(t,n)}function Yb(e){e.finalized_=!0,e.scope_.unfinalizedDrafts_--}var zu=(e,t)=>e.scope_===t,p4=[];function Xb(e,t,n,r){const i=Rn(e),o=e.type_;if(r!==void 0&&pp(i,r,o)===t){Bl(i,r,n,o);return}if(!e.draftLocations_){const l=e.draftLocations_=new Map;Du(i,(s,u)=>{if(Yn(u)){const d=l.get(u)||[];d.push(s),l.set(u,d)}})}const a=e.draftLocations_.get(t)??p4;for(const l of a)Bl(i,l,n,o)}function h4(e,t,n){e.callbacks_.push(function(i){var l;const o=t;if(!o||!zu(o,i))return;(l=i.mapSetPlugin_)==null||l.fixSetContents(o);const a=im(o);Xb(e,o.draft_??o,a,n),Kb(o,i)})}function Kb(e,t){var r;if(e.modified_&&!e.finalized_&&(e.type_===3||e.type_===1&&e.allIndicesReassigned_||(((r=e.assigned_)==null?void 0:r.size)??0)>0)){const{patchPlugin_:i}=t;if(i){const o=i.getPath(e);o&&i.generatePatches_(e,o,t)}Yb(e)}}function m4(e,t,n){const{scope_:r}=e;if(Yn(n)){const i=n[ht];zu(i,r)&&i.callbacks_.push(function(){Ks(e);const a=im(i);Xb(e,n,a,t)})}else pn(n)&&e.callbacks_.push(function(){const o=Rn(e);e.type_===3?o.has(n)&&Ul(n,r.handledSet_,r):pp(o,t,e.type_)===n&&r.drafts_.length>1&&(e.assigned_.get(t)??!1)===!0&&e.copy_&&Ul(pp(e.copy_,t,e.type_),r.handledSet_,r)})}function Ul(e,t,n){return!n.immer_.autoFreeze_&&n.unfinalizedDrafts_<1||Yn(e)||t.has(e)||!pn(e)||Fu(e)||(t.add(e),Du(e,(r,i)=>{if(Yn(i)){const o=i[ht];if(zu(o,n)){const a=im(o);Bl(e,r,a,e.type_),Yb(o)}}else pn(i)&&Ul(i,t,n)})),e}function g4(e,t){const n=Lu(e),r={type_:n?1:0,scope_:t?t.scope_:qb(),modified_:!1,finalized_:!1,assigned_:void 0,parent_:t,base_:e,draft_:null,copy_:null,revoke_:null,isManual_:!1,callbacks_:void 0};let i=r,o=Hl;n&&(i=[r],o=Oa);const{revoke:a,proxy:l}=Proxy.revocable(i,o);return r.draft_=l,r.revoke_=a,[l,r]}var Hl={get(e,t){if(t===ht)return e;let n=e.scope_.arrayMethodsPlugin_;const r=e.type_===1&&typeof t=="string";if(r&&n!=null&&n.isArrayOperationMethod(t))return n.createMethodInterceptor(e,t);const i=Rn(e);if(!L0(i,t,e.type_))return v4(e,i,t);const o=i[t];if(e.finalized_||!pn(o)||r&&e.operationMethod&&(n!=null&&n.isMutatingArrayMethod(e.operationMethod))&&l4(t))return o;if(o===yd(e.base_,t)){Ks(e);const a=e.type_===1?+t:t,l=xp(e.scope_,o,e,a);return e.copy_[a]=l}return o},has(e,t){return t in Rn(e)},ownKeys(e){return Reflect.ownKeys(Rn(e))},set(e,t,n){const r=Qb(Rn(e),t);if(r!=null&&r.set)return r.set.call(e.draft_,n),!0;if(!e.modified_){const i=yd(Rn(e),t),o=i==null?void 0:i[ht];if(o&&o.base_===n)return e.copy_[t]=n,e.assigned_.set(t,!1),!0;if(s4(n,i)&&(n!==void 0||L0(e.base_,t,e.type_)))return!0;Ks(e),yp(e)}return e.copy_[t]===n&&(n!==void 0||t in e.copy_)||Number.isNaN(n)&&Number.isNaN(e.copy_[t])||(e.copy_[t]=n,e.assigned_.set(t,!0),m4(e,t,n)),!0},deleteProperty(e,t){return Ks(e),yd(e.base_,t)!==void 0||t in e.base_?(e.assigned_.set(t,!1),yp(e)):e.assigned_.delete(t),e.copy_&&delete e.copy_[t],!0},getOwnPropertyDescriptor(e,t){const n=Rn(e),r=Reflect.getOwnPropertyDescriptor(n,t);return r&&{[Xs]:!0,[fp]:e.type_!==1||t!=="length",[Nl]:r[Nl],[Pa]:n[t]}},defineProperty(){an(11)},getPrototypeOf(e){return to(e.base_)},setPrototypeOf(){an(12)}},Oa={};for(let e in Hl){let t=Hl[e];Oa[e]=function(){const n=arguments;return n[0]=n[0][0],t.apply(this,n)}}Oa.deleteProperty=function(e,t){return Oa.set.call(this,e,t,void 0)};Oa.set=function(e,t,n){return Hl.set.call(this,e[0],t,n,e[0])};function yd(e,t){const n=e[ht];return(n?Rn(n):e)[t]}function v4(e,t,n){var i;const r=Qb(t,n);return r?Pa in r?r[Pa]:(i=r.get)==null?void 0:i.call(e.draft_):void 0}function Qb(e,t){if(!(t in e))return;let n=to(e);for(;n;){const r=Object.getOwnPropertyDescriptor(n,t);if(r)return r;n=to(n)}}function yp(e){e.modified_||(e.modified_=!0,e.parent_&&yp(e.parent_))}function Ks(e){e.copy_||(e.assigned_=new Map,e.copy_=hp(e.base_,e.scope_.immer_.useStrictShallowCopy_))}var y4=class{constructor(e){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.useStrictIteration_=!1,this.produce=(t,n,r)=>{if(wi(t)&&!wi(n)){const o=n;n=t;const a=this;return function(s=o,...u){return a.produce(s,d=>n.call(this,d,...u))}}wi(n)||an(6),r!==void 0&&!wi(r)&&an(7);let i;if(pn(t)){const o=z0(this),a=xp(o,t,void 0);let l=!0;try{i=n(a),l=!1}finally{l?gp(o):vp(o)}return F0(o,r),N0(i,o)}else if(!t||!rm(t)){if(i=n(t),i===void 0&&(i=t),i===Hb&&(i=void 0),this.autoFreeze_&&om(i,!0),r){const o=[],a=[];Jr(mp).generateReplacementPatches_(t,i,{patches_:o,inversePatches_:a}),r(o,a)}return i}else an(1,t)},this.produceWithPatches=(t,n)=>{if(wi(t))return(a,...l)=>this.produceWithPatches(a,s=>t(s,...l));let r,i;return[this.produce(t,n,(a,l)=>{r=a,i=l}),r,i]},vd(e==null?void 0:e.autoFreeze)&&this.setAutoFreeze(e.autoFreeze),vd(e==null?void 0:e.useStrictShallowCopy)&&this.setUseStrictShallowCopy(e.useStrictShallowCopy),vd(e==null?void 0:e.useStrictIteration)&&this.setUseStrictIteration(e.useStrictIteration)}createDraft(e){pn(e)||an(8),Yn(e)&&(e=x4(e));const t=z0(this),n=xp(t,e,void 0);return n[ht].isManual_=!0,vp(t),n}finishDraft(e,t){const n=e&&e[ht];(!n||!n.isManual_)&&an(9);const{scope_:r}=n;return F0(r,t),N0(void 0,r)}setAutoFreeze(e){this.autoFreeze_=e}setUseStrictShallowCopy(e){this.useStrictShallowCopy_=e}setUseStrictIteration(e){this.useStrictIteration_=e}shouldUseStrictIteration(){return this.useStrictIteration_}applyPatches(e,t){let n;for(n=t.length-1;n>=0;n--){const i=t[n];if(i.path.length===0&&i.op==="replace"){e=i.value;break}}n>-1&&(t=t.slice(n+1));const r=Jr(mp).applyPatches_;return Yn(e)?r(e,t):this.produce(e,i=>r(i,t))}};function xp(e,t,n,r){const[i,o]=Au(t)?Jr(Vl).proxyMap_(t,n):Ru(t)?Jr(Vl).proxySet_(t,n):g4(t,n);return((n==null?void 0:n.scope_)??qb()).drafts_.push(i),o.callbacks_=(n==null?void 0:n.callbacks_)??[],o.key_=r,n&&r!==void 0?h4(n,o,r):o.callbacks_.push(function(s){var d;(d=s.mapSetPlugin_)==null||d.fixSetContents(o);const{patchPlugin_:u}=s;o.modified_&&u&&u.generatePatches_(o,[],s)}),i}function x4(e){return Yn(e)||an(10,e),Zb(e)}function Zb(e){if(!pn(e)||Fu(e))return e;const t=e[ht];let n,r=!0;if(t){if(!t.modified_)return t.base_;t.finalized_=!0,n=hp(e,t.scope_.immer_.useStrictShallowCopy_),r=t.scope_.immer_.shouldUseStrictIteration()}else n=hp(e,!0);return Du(n,(i,o)=>{Bl(n,i,Zb(o))},r),t&&(t.finalized_=!1),n}var b4=new y4,Jb=b4.produce;function ew(e){return({dispatch:n,getState:r})=>i=>o=>typeof o=="function"?o(n,r,e):i(o)}var w4=ew(),S4=ew,_4=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?Fl:Fl.apply(null,arguments)};function V0(e,t){function n(...r){if(t){let i=t(...r);if(!i)throw new Error(Vn(0));return{type:e,payload:i.payload,..."meta"in i&&{meta:i.meta},..."error"in i&&{error:i.error}}}return{type:e,payload:r[0]}}return n.toString=()=>`${e}`,n.type=e,n.match=r=>o4(r)&&r.type===e,n}var tw=class Wo extends Array{constructor(...t){super(...t),Object.setPrototypeOf(this,Wo.prototype)}static get[Symbol.species](){return Wo}concat(...t){return super.concat.apply(this,t)}prepend(...t){return t.length===1&&Array.isArray(t[0])?new Wo(...t[0].concat(this)):new Wo(...t.concat(this))}};function U0(e){return pn(e)?Jb(e,()=>{}):e}function xs(e,t,n){return e.has(t)?e.get(t):e.set(t,n(t)).get(t)}function C4(e){return typeof e=="boolean"}var E4=()=>function(t){const{thunk:n=!0,immutableCheck:r=!0,serializableCheck:i=!0,actionCreatorCheck:o=!0}=t??{};let a=new tw;return n&&(C4(n)?a.push(w4):a.push(S4(n.extraArgument))),a},k4="RTK_autoBatch",H0=e=>t=>{setTimeout(t,e)},P4=(e={type:"raf"})=>t=>(...n)=>{const r=t(...n);let i=!0,o=!1,a=!1;const l=new Set,s=e.type==="tick"?queueMicrotask:e.type==="raf"?typeof window<"u"&&window.requestAnimationFrame?window.requestAnimationFrame:H0(10):e.type==="callback"?e.queueNotification:H0(e.timeout),u=()=>{a=!1,o&&(o=!1,l.forEach(d=>d()))};return Object.assign({},r,{subscribe(d){const c=()=>i&&d(),y=r.subscribe(c);return l.add(d),()=>{y(),l.delete(d)}},dispatch(d){var c;try{return i=!((c=d==null?void 0:d.meta)!=null&&c[k4]),o=!i,o&&(a||(a=!0,s(u))),r.dispatch(d)}finally{i=!0}}})},T4=e=>function(n){const{autoBatch:r=!0}=n??{};let i=new tw(e);return r&&i.push(P4(typeof r=="object"?r:void 0)),i};function O4(e){const t=E4(),{reducer:n=void 0,middleware:r,devTools:i=!0,duplicateMiddlewareCheck:o=!0,preloadedState:a=void 0,enhancers:l=void 0}=e||{};let s;if(typeof n=="function")s=n;else if(tm(n))s=r4(n);else throw new Error(Vn(1));let u;typeof r=="function"?u=r(t):u=t();let d=Fl;i&&(d=_4({trace:!1,...typeof i=="object"&&i}));const c=i4(...u),y=T4(c);let p=typeof l=="function"?l(y):y();const m=d(...p);return nm(s,a,m)}function nw(e){const t={},n=[];let r;const i={addCase(o,a){const l=typeof o=="string"?o:o.type;if(!l)throw new Error(Vn(28));if(l in t)throw new Error(Vn(29));return t[l]=a,i},addAsyncThunk(o,a){return a.pending&&(t[o.pending.type]=a.pending),a.rejected&&(t[o.rejected.type]=a.rejected),a.fulfilled&&(t[o.fulfilled.type]=a.fulfilled),a.settled&&n.push({matcher:o.settled,reducer:a.settled}),i},addMatcher(o,a){return n.push({matcher:o,reducer:a}),i},addDefaultCase(o){return r=o,i}};return e(i),[t,n,r]}function j4(e){return typeof e=="function"}function M4(e,t){let[n,r,i]=nw(t),o;if(j4(e))o=()=>U0(e());else{const l=U0(e);o=()=>l}function a(l=o(),s){let u=[n[s.type],...r.filter(({matcher:d})=>d(s)).map(({reducer:d})=>d)];return u.filter(d=>!!d).length===0&&(u=[i]),u.reduce((d,c)=>{if(c)if(Yn(d)){const p=c(d,s);return p===void 0?d:p}else{if(pn(d))return Jb(d,y=>c(y,s));{const y=c(d,s);if(y===void 0){if(d===null)return d;throw Error("A case reducer on a non-draftable value must not return undefined")}return y}}return d},l)}return a.getInitialState=o,a}var $4=Symbol.for("rtk-slice-createasyncthunk");function I4(e,t){return`${e}/${t}`}function D4({creators:e}={}){var n;const t=(n=e==null?void 0:e.asyncThunk)==null?void 0:n[$4];return function(i){const{name:o,reducerPath:a=o}=i;if(!o)throw new Error(Vn(11));typeof process<"u";const l=(typeof i.reducers=="function"?i.reducers(A4()):i.reducers)||{},s=Object.keys(l),u={sliceCaseReducersByName:{},sliceCaseReducersByType:{},actionCreators:{},sliceMatchers:[]},d={addCase(S,C){const T=typeof S=="string"?S:S.type;if(!T)throw new Error(Vn(12));if(T in u.sliceCaseReducersByType)throw new Error(Vn(13));return u.sliceCaseReducersByType[T]=C,d},addMatcher(S,C){return u.sliceMatchers.push({matcher:S,reducer:C}),d},exposeAction(S,C){return u.actionCreators[S]=C,d},exposeCaseReducer(S,C){return u.sliceCaseReducersByName[S]=C,d}};s.forEach(S=>{const C=l[S],T={reducerName:S,type:I4(o,S),createNotation:typeof i.reducers=="function"};F4(C)?N4(T,C,d,t):R4(T,C,d)});function c(){const[S={},C=[],T=void 0]=typeof i.extraReducers=="function"?nw(i.extraReducers):[i.extraReducers],E={...S,...u.sliceCaseReducersByType};return M4(i.initialState,_=>{for(let $ in E)_.addCase($,E[$]);for(let $ of u.sliceMatchers)_.addMatcher($.matcher,$.reducer);for(let $ of C)_.addMatcher($.matcher,$.reducer);T&&_.addDefaultCase(T)})}const y=S=>S,p=new Map,m=new WeakMap;let v;function w(S,C){return v||(v=c()),v(S,C)}function h(){return v||(v=c()),v.getInitialState()}function g(S,C=!1){function T(_){let $=_[S];return typeof $>"u"&&C&&($=xs(m,T,h)),$}function E(_=y){const $=xs(p,C,()=>new WeakMap);return xs($,_,()=>{const M={};for(const[R,A]of Object.entries(i.selectors??{}))M[R]=L4(A,_,()=>xs(m,_,h),C);return M})}return{reducerPath:S,getSelectors:E,get selectors(){return E(T)},selectSlice:T}}const x={name:o,reducer:w,actions:u.actionCreators,caseReducers:u.sliceCaseReducersByName,getInitialState:h,...g(a),injectInto(S,{reducerPath:C,...T}={}){const E=C??a;return S.inject({reducerPath:E,reducer:w},T),{...x,...g(E,!0)}}};return x}}function L4(e,t,n,r){function i(o,...a){let l=t(o);return typeof l>"u"&&r&&(l=n()),e(l,...a)}return i.unwrapped=e,i}var rw=D4();function A4(){function e(t,n){return{_reducerDefinitionType:"asyncThunk",payloadCreator:t,...n}}return e.withTypes=()=>e,{reducer(t){return Object.assign({[t.name](...n){return t(...n)}}[t.name],{_reducerDefinitionType:"reducer"})},preparedReducer(t,n){return{_reducerDefinitionType:"reducerWithPrepare",prepare:t,reducer:n}},asyncThunk:e}}function R4({type:e,reducerName:t,createNotation:n},r,i){let o,a;if("reducer"in r){if(n&&!z4(r))throw new Error(Vn(17));o=r.reducer,a=r.prepare}else o=r;i.addCase(e,o).exposeCaseReducer(t,o).exposeAction(t,a?V0(e,a):V0(e))}function F4(e){return e._reducerDefinitionType==="asyncThunk"}function z4(e){return e._reducerDefinitionType==="reducerWithPrepare"}function N4({type:e,reducerName:t},n,r,i){if(!i)throw new Error(Vn(18));const{payloadCreator:o,fulfilled:a,pending:l,rejected:s,settled:u,options:d}=n,c=i(e,o,d);r.exposeAction(t,c),a&&r.addCase(c.fulfilled,a),l&&r.addCase(c.pending,l),s&&r.addCase(c.rejected,s),u&&r.addMatcher(c.settled,u),r.exposeCaseReducer(t,{fulfilled:a||bs,pending:l||bs,rejected:s||bs,settled:u||bs})}function bs(){}function Vn(e){return`Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}const iw=rw({name:"cart",initialState:{items:[]},reducers:{addToCart:(e,t)=>{const n=t.payload,r=e.items.find(i=>i.id===t.payload.id);r&&r.quantity>=n.stock||(r?r.quantity=(r.quantity||0)+1:e.items.push({...t.payload,quantity:1}))},removeFromCart:(e,t)=>{const n=t.payload;e.items=e.items.filter(r=>r.id!==n.id)},clearCart:e=>{e.items=[]},addAllToCart:(e,t)=>{const n=t.payload.map(r=>({...r,quantity:r.quantity||1}));e.items.push(...n)},incrementQuantity:(e,t)=>{const{id:n,stock:r}=t.payload,i=e.items.find(o=>o.id===n);i&&i.quantity<r&&(i.quantity+=1)},decrementQuantity:(e,t)=>{const n=e.items.find(r=>r.id===t.payload);n&&n.quantity>1&&(n.quantity-=1)}}}),{addToCart:ho,removeFromCart:B4,clearCart:am,addAllToCart:V4,incrementQuantity:U4,decrementQuantity:H4}=iw.actions,W4=iw.reducer;function ow(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var i=e.length;for(t=0;t<i;t++)e[t]&&(n=ow(e[t]))&&(r&&(r+=" "),r+=n)}else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function Gr(){for(var e,t,n=0,r="",i=arguments.length;n<i;n++)(e=arguments[n])&&(t=ow(e))&&(r&&(r+=" "),r+=t);return r}function G4(e){if(!e||typeof document>"u")return;let t=document.head||document.getElementsByTagName("head")[0],n=document.createElement("style");n.type="text/css",t.firstChild?t.insertBefore(n,t.firstChild):t.appendChild(n),n.styleSheet?n.styleSheet.cssText=e:n.appendChild(document.createTextNode(e))}G4(`:root{--toastify-color-light: #fff;--toastify-color-dark: #121212;--toastify-color-info: #3498db;--toastify-color-success: #07bc0c;--toastify-color-warning: #f1c40f;--toastify-color-error: hsl(6, 78%, 57%);--toastify-color-transparent: rgba(255, 255, 255, .7);--toastify-icon-color-info: var(--toastify-color-info);--toastify-icon-color-success: var(--toastify-color-success);--toastify-icon-color-warning: var(--toastify-color-warning);--toastify-icon-color-error: var(--toastify-color-error);--toastify-container-width: fit-content;--toastify-toast-width: 320px;--toastify-toast-offset: 16px;--toastify-toast-top: max(var(--toastify-toast-offset), env(safe-area-inset-top));--toastify-toast-right: max(var(--toastify-toast-offset), env(safe-area-inset-right));--toastify-toast-left: max(var(--toastify-toast-offset), env(safe-area-inset-left));--toastify-toast-bottom: max(var(--toastify-toast-offset), env(safe-area-inset-bottom));--toastify-toast-background: #fff;--toastify-toast-padding: 14px;--toastify-toast-min-height: 64px;--toastify-toast-max-height: 800px;--toastify-toast-bd-radius: 6px;--toastify-toast-shadow: 0px 4px 12px rgba(0, 0, 0, .1);--toastify-font-family: sans-serif;--toastify-z-index: 9999;--toastify-text-color-light: #757575;--toastify-text-color-dark: #fff;--toastify-text-color-info: #fff;--toastify-text-color-success: #fff;--toastify-text-color-warning: #fff;--toastify-text-color-error: #fff;--toastify-spinner-color: #616161;--toastify-spinner-color-empty-area: #e0e0e0;--toastify-color-progress-light: linear-gradient(to right, #4cd964, #5ac8fa, #007aff, #34aadc, #5856d6, #ff2d55);--toastify-color-progress-dark: #bb86fc;--toastify-color-progress-info: var(--toastify-color-info);--toastify-color-progress-success: var(--toastify-color-success);--toastify-color-progress-warning: var(--toastify-color-warning);--toastify-color-progress-error: var(--toastify-color-error);--toastify-color-progress-bgo: .2}.Toastify__toast-container{z-index:var(--toastify-z-index);-webkit-transform:translate3d(0,0,var(--toastify-z-index));position:fixed;width:var(--toastify-container-width);box-sizing:border-box;color:#fff;display:flex;flex-direction:column}.Toastify__toast-container--top-left{top:var(--toastify-toast-top);left:var(--toastify-toast-left)}.Toastify__toast-container--top-center{top:var(--toastify-toast-top);left:50%;transform:translate(-50%);align-items:center}.Toastify__toast-container--top-right{top:var(--toastify-toast-top);right:var(--toastify-toast-right);align-items:end}.Toastify__toast-container--bottom-left{bottom:var(--toastify-toast-bottom);left:var(--toastify-toast-left)}.Toastify__toast-container--bottom-center{bottom:var(--toastify-toast-bottom);left:50%;transform:translate(-50%);align-items:center}.Toastify__toast-container--bottom-right{bottom:var(--toastify-toast-bottom);right:var(--toastify-toast-right);align-items:end}.Toastify__toast{--y: 0;position:relative;touch-action:none;width:var(--toastify-toast-width);min-height:var(--toastify-toast-min-height);box-sizing:border-box;margin-bottom:1rem;padding:var(--toastify-toast-padding);border-radius:var(--toastify-toast-bd-radius);box-shadow:var(--toastify-toast-shadow);max-height:var(--toastify-toast-max-height);font-family:var(--toastify-font-family);z-index:0;display:flex;flex:1 auto;align-items:center;word-break:break-word}@media only screen and (max-width: 480px){.Toastify__toast-container{width:100vw;left:env(safe-area-inset-left);margin:0}.Toastify__toast-container--top-left,.Toastify__toast-container--top-center,.Toastify__toast-container--top-right{top:env(safe-area-inset-top);transform:translate(0)}.Toastify__toast-container--bottom-left,.Toastify__toast-container--bottom-center,.Toastify__toast-container--bottom-right{bottom:env(safe-area-inset-bottom);transform:translate(0)}.Toastify__toast-container--rtl{right:env(safe-area-inset-right);left:initial}.Toastify__toast{--toastify-toast-width: 100%;margin-bottom:0;border-radius:0}}.Toastify__toast-container[data-stacked=true]{width:var(--toastify-toast-width)}.Toastify__toast--stacked{position:absolute;width:100%;transform:translate3d(0,var(--y),0) scale(var(--s));transition:transform .3s}.Toastify__toast--stacked[data-collapsed] .Toastify__toast-body,.Toastify__toast--stacked[data-collapsed] .Toastify__close-button{transition:opacity .1s}.Toastify__toast--stacked[data-collapsed=false]{overflow:visible}.Toastify__toast--stacked[data-collapsed=true]:not(:last-child)>*{opacity:0}.Toastify__toast--stacked:after{content:"";position:absolute;left:0;right:0;height:calc(var(--g) * 1px);bottom:100%}.Toastify__toast--stacked[data-pos=top]{top:0}.Toastify__toast--stacked[data-pos=bot]{bottom:0}.Toastify__toast--stacked[data-pos=bot].Toastify__toast--stacked:before{transform-origin:top}.Toastify__toast--stacked[data-pos=top].Toastify__toast--stacked:before{transform-origin:bottom}.Toastify__toast--stacked:before{content:"";position:absolute;left:0;right:0;bottom:0;height:100%;transform:scaleY(3);z-index:-1}.Toastify__toast--rtl{direction:rtl}.Toastify__toast--close-on-click{cursor:pointer}.Toastify__toast-icon{margin-inline-end:10px;width:22px;flex-shrink:0;display:flex}.Toastify--animate{animation-fill-mode:both;animation-duration:.5s}.Toastify--animate-icon{animation-fill-mode:both;animation-duration:.3s}.Toastify__toast-theme--dark{background:var(--toastify-color-dark);color:var(--toastify-text-color-dark)}.Toastify__toast-theme--light,.Toastify__toast-theme--colored.Toastify__toast--default{background:var(--toastify-color-light);color:var(--toastify-text-color-light)}.Toastify__toast-theme--colored.Toastify__toast--info{color:var(--toastify-text-color-info);background:var(--toastify-color-info)}.Toastify__toast-theme--colored.Toastify__toast--success{color:var(--toastify-text-color-success);background:var(--toastify-color-success)}.Toastify__toast-theme--colored.Toastify__toast--warning{color:var(--toastify-text-color-warning);background:var(--toastify-color-warning)}.Toastify__toast-theme--colored.Toastify__toast--error{color:var(--toastify-text-color-error);background:var(--toastify-color-error)}.Toastify__progress-bar-theme--light{background:var(--toastify-color-progress-light)}.Toastify__progress-bar-theme--dark{background:var(--toastify-color-progress-dark)}.Toastify__progress-bar--info{background:var(--toastify-color-progress-info)}.Toastify__progress-bar--success{background:var(--toastify-color-progress-success)}.Toastify__progress-bar--warning{background:var(--toastify-color-progress-warning)}.Toastify__progress-bar--error{background:var(--toastify-color-progress-error)}.Toastify__progress-bar-theme--colored.Toastify__progress-bar--info,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--success,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--warning,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--error{background:var(--toastify-color-transparent)}.Toastify__close-button{color:#fff;position:absolute;top:6px;right:6px;background:transparent;outline:none;border:none;padding:0;cursor:pointer;opacity:.7;transition:.3s ease;z-index:1}.Toastify__toast--rtl .Toastify__close-button{left:6px;right:unset}.Toastify__close-button--light{color:#000;opacity:.3}.Toastify__close-button>svg{fill:currentColor;height:16px;width:14px}.Toastify__close-button:hover,.Toastify__close-button:focus{opacity:1}@keyframes Toastify__trackProgress{0%{transform:scaleX(1)}to{transform:scaleX(0)}}.Toastify__progress-bar{position:absolute;bottom:0;left:0;width:100%;height:100%;z-index:1;opacity:.7;transform-origin:left}.Toastify__progress-bar--animated{animation:Toastify__trackProgress linear 1 forwards}.Toastify__progress-bar--controlled{transition:transform .2s}.Toastify__progress-bar--rtl{right:0;left:initial;transform-origin:right;border-bottom-left-radius:initial}.Toastify__progress-bar--wrp{position:absolute;overflow:hidden;bottom:0;left:0;width:100%;height:5px;border-bottom-left-radius:var(--toastify-toast-bd-radius);border-bottom-right-radius:var(--toastify-toast-bd-radius)}.Toastify__progress-bar--wrp[data-hidden=true]{opacity:0}.Toastify__progress-bar--bg{opacity:var(--toastify-color-progress-bgo);width:100%;height:100%}.Toastify__spinner{width:20px;height:20px;box-sizing:border-box;border:2px solid;border-radius:100%;border-color:var(--toastify-spinner-color-empty-area);border-right-color:var(--toastify-spinner-color);animation:Toastify__spin .65s linear infinite}@keyframes Toastify__bounceInRight{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(3000px,0,0)}60%{opacity:1;transform:translate3d(-25px,0,0)}75%{transform:translate3d(10px,0,0)}90%{transform:translate3d(-5px,0,0)}to{transform:none}}@keyframes Toastify__bounceOutRight{20%{opacity:1;transform:translate3d(-20px,var(--y),0)}to{opacity:0;transform:translate3d(2000px,var(--y),0)}}@keyframes Toastify__bounceInLeft{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(-3000px,0,0)}60%{opacity:1;transform:translate3d(25px,0,0)}75%{transform:translate3d(-10px,0,0)}90%{transform:translate3d(5px,0,0)}to{transform:none}}@keyframes Toastify__bounceOutLeft{20%{opacity:1;transform:translate3d(20px,var(--y),0)}to{opacity:0;transform:translate3d(-2000px,var(--y),0)}}@keyframes Toastify__bounceInUp{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,3000px,0)}60%{opacity:1;transform:translate3d(0,-20px,0)}75%{transform:translate3d(0,10px,0)}90%{transform:translate3d(0,-5px,0)}to{transform:translateZ(0)}}@keyframes Toastify__bounceOutUp{20%{transform:translate3d(0,calc(var(--y) - 10px),0)}40%,45%{opacity:1;transform:translate3d(0,calc(var(--y) + 20px),0)}to{opacity:0;transform:translate3d(0,-2000px,0)}}@keyframes Toastify__bounceInDown{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,-3000px,0)}60%{opacity:1;transform:translate3d(0,25px,0)}75%{transform:translate3d(0,-10px,0)}90%{transform:translate3d(0,5px,0)}to{transform:none}}@keyframes Toastify__bounceOutDown{20%{transform:translate3d(0,calc(var(--y) - 10px),0)}40%,45%{opacity:1;transform:translate3d(0,calc(var(--y) + 20px),0)}to{opacity:0;transform:translate3d(0,2000px,0)}}.Toastify__bounce-enter--top-left,.Toastify__bounce-enter--bottom-left{animation-name:Toastify__bounceInLeft}.Toastify__bounce-enter--top-right,.Toastify__bounce-enter--bottom-right{animation-name:Toastify__bounceInRight}.Toastify__bounce-enter--top-center{animation-name:Toastify__bounceInDown}.Toastify__bounce-enter--bottom-center{animation-name:Toastify__bounceInUp}.Toastify__bounce-exit--top-left,.Toastify__bounce-exit--bottom-left{animation-name:Toastify__bounceOutLeft}.Toastify__bounce-exit--top-right,.Toastify__bounce-exit--bottom-right{animation-name:Toastify__bounceOutRight}.Toastify__bounce-exit--top-center{animation-name:Toastify__bounceOutUp}.Toastify__bounce-exit--bottom-center{animation-name:Toastify__bounceOutDown}@keyframes Toastify__zoomIn{0%{opacity:0;transform:scale3d(.3,.3,.3)}50%{opacity:1}}@keyframes Toastify__zoomOut{0%{opacity:1}50%{opacity:0;transform:translate3d(0,var(--y),0) scale3d(.3,.3,.3)}to{opacity:0}}.Toastify__zoom-enter{animation-name:Toastify__zoomIn}.Toastify__zoom-exit{animation-name:Toastify__zoomOut}@keyframes Toastify__flipIn{0%{transform:perspective(400px) rotateX(90deg);animation-timing-function:ease-in;opacity:0}40%{transform:perspective(400px) rotateX(-20deg);animation-timing-function:ease-in}60%{transform:perspective(400px) rotateX(10deg);opacity:1}80%{transform:perspective(400px) rotateX(-5deg)}to{transform:perspective(400px)}}@keyframes Toastify__flipOut{0%{transform:translate3d(0,var(--y),0) perspective(400px)}30%{transform:translate3d(0,var(--y),0) perspective(400px) rotateX(-20deg);opacity:1}to{transform:translate3d(0,var(--y),0) perspective(400px) rotateX(90deg);opacity:0}}.Toastify__flip-enter{animation-name:Toastify__flipIn}.Toastify__flip-exit{animation-name:Toastify__flipOut}@keyframes Toastify__slideInRight{0%{transform:translate3d(110%,0,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInLeft{0%{transform:translate3d(-110%,0,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInUp{0%{transform:translate3d(0,110%,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInDown{0%{transform:translate3d(0,-110%,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideOutRight{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(110%,var(--y),0)}}@keyframes Toastify__slideOutLeft{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(-110%,var(--y),0)}}@keyframes Toastify__slideOutDown{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(0,500px,0)}}@keyframes Toastify__slideOutUp{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(0,-500px,0)}}.Toastify__slide-enter--top-left,.Toastify__slide-enter--bottom-left{animation-name:Toastify__slideInLeft}.Toastify__slide-enter--top-right,.Toastify__slide-enter--bottom-right{animation-name:Toastify__slideInRight}.Toastify__slide-enter--top-center{animation-name:Toastify__slideInDown}.Toastify__slide-enter--bottom-center{animation-name:Toastify__slideInUp}.Toastify__slide-exit--top-left,.Toastify__slide-exit--bottom-left{animation-name:Toastify__slideOutLeft;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--top-right,.Toastify__slide-exit--bottom-right{animation-name:Toastify__slideOutRight;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--top-center{animation-name:Toastify__slideOutUp;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--bottom-center{animation-name:Toastify__slideOutDown;animation-timing-function:ease-in;animation-duration:.3s}@keyframes Toastify__spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}
`);var Wa=e=>typeof e=="number"&&!isNaN(e),ei=e=>typeof e=="string",Xn=e=>typeof e=="function",q4=e=>ei(e)||Wa(e),bp=e=>ei(e)||Xn(e)?e:null,Y4=(e,t)=>e===!1||Wa(e)&&e>0?e:t,wp=e=>b.isValidElement(e)||ei(e)||Xn(e)||Wa(e);function X4(e,t,n=300){let{scrollHeight:r,style:i}=e;requestAnimationFrame(()=>{i.minHeight="initial",i.height=r+"px",i.transition=`all ${n}ms`,requestAnimationFrame(()=>{i.height="0",i.padding="0",i.margin="0",setTimeout(t,n)})})}function K4({enter:e,exit:t,appendPosition:n=!1,collapse:r=!0,collapseDuration:i=300}){return function({children:o,position:a,preventExitTransition:l,done:s,nodeRef:u,isIn:d,playToast:c}){let y=n?`${e}--${a}`:e,p=n?`${t}--${a}`:t,m=b.useRef(0);return b.useLayoutEffect(()=>{let v=u.current,w=y.split(" "),h=g=>{g.target===u.current&&(c(),v.removeEventListener("animationend",h),v.removeEventListener("animationcancel",h),m.current===0&&g.type!=="animationcancel"&&v.classList.remove(...w))};v.classList.add(...w),v.addEventListener("animationend",h),v.addEventListener("animationcancel",h)},[]),b.useEffect(()=>{let v=u.current,w=()=>{v.removeEventListener("animationend",w),r?X4(v,s,i):s()};d||(l?w():(m.current=1,v.className+=` ${p}`,v.addEventListener("animationend",w)))},[d]),X.createElement(X.Fragment,null,o)}}function W0(e,t){return{content:aw(e.content,e.props),containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,reason:e.removalReason,status:t}}function aw(e,t,n=!1){return b.isValidElement(e)&&!ei(e.type)?b.cloneElement(e,{closeToast:t.closeToast,toastProps:t,data:t.data,isPaused:n}):Xn(e)?e({closeToast:t.closeToast,toastProps:t,data:t.data,isPaused:n}):e}function Q4({closeToast:e,theme:t,ariaLabel:n="close"}){return X.createElement("button",{className:`Toastify__close-button Toastify__close-button--${t}`,type:"button",onClick:r=>{r.stopPropagation(),e(!0)},"aria-label":n},X.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},X.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function Z4({delay:e,isRunning:t,closeToast:n,type:r="default",hide:i,className:o,controlledProgress:a,progress:l,rtl:s,isIn:u,theme:d}){let c=i||a&&l===0,y={animationDuration:`${e}ms`,animationPlayState:t?"running":"paused"};a&&(y.transform=`scaleX(${l})`);let p=Gr("Toastify__progress-bar",a?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${d}`,`Toastify__progress-bar--${r}`,{"Toastify__progress-bar--rtl":s}),m=Xn(o)?o({rtl:s,type:r,defaultClassName:p}):Gr(p,o),v={[a&&l>=1?"onTransitionEnd":"onAnimationEnd"]:a&&l<1?null:()=>{u&&n()}};return X.createElement("div",{className:"Toastify__progress-bar--wrp","data-hidden":c},X.createElement("div",{className:`Toastify__progress-bar--bg Toastify__progress-bar-theme--${d} Toastify__progress-bar--${r}`}),X.createElement("div",{role:"progressbar","aria-hidden":c?"true":"false","aria-label":"notification timer",className:m,style:y,...v}))}var J4=1,sw=()=>`${J4++}`;function ej(e,t,n){let r=1,i=0,o=[],a=[],l=t,s=new Map,u=new Set,d=g=>(u.add(g),()=>u.delete(g)),c=()=>{a=Array.from(s.values()),u.forEach(g=>g())},y=({containerId:g,toastId:x,updateId:S})=>{let C=g?g!==e:e!==1,T=s.has(x)&&S==null;return C||T},p=(g,x)=>{s.forEach(S=>{var C;(x==null||x===S.props.toastId)&&((C=S.toggle)==null||C.call(S,g))})},m=g=>{var x,S;(S=(x=g.props)==null?void 0:x.onClose)==null||S.call(x,g.removalReason),g.isActive=!1},v=g=>{if(g==null)s.forEach(m);else{let x=s.get(g);x&&m(x)}c()},w=()=>{i-=o.length,o=[]},h=g=>{var x,S;let{toastId:C,updateId:T}=g.props,E=T==null;g.staleId&&s.delete(g.staleId),g.isActive=!0,s.set(C,g),c(),n(W0(g,E?"added":"updated")),E&&((S=(x=g.props).onOpen)==null||S.call(x))};return{id:e,props:l,observe:d,toggle:p,removeToast:v,toasts:s,clearQueue:w,buildToast:(g,x)=>{if(y(x))return;let{toastId:S,updateId:C,data:T,staleId:E,delay:_}=x,$=C==null;$&&i++;let M={...l,style:l.toastStyle,key:r++,...Object.fromEntries(Object.entries(x).filter(([A,j])=>j!=null)),toastId:S,updateId:C,data:T,isIn:!1,className:bp(x.className||l.toastClassName),progressClassName:bp(x.progressClassName||l.progressClassName),autoClose:x.isLoading?!1:Y4(x.autoClose,l.autoClose),closeToast(A){s.get(S).removalReason=A,v(S)},deleteToast(){let A=s.get(S);if(A!=null){if(n(W0(A,"removed")),s.delete(S),i--,i<0&&(i=0),o.length>0){h(o.shift());return}c()}}};M.closeButton=l.closeButton,x.closeButton===!1||wp(x.closeButton)?M.closeButton=x.closeButton:x.closeButton===!0&&(M.closeButton=wp(l.closeButton)?l.closeButton:!0);let R={content:g,props:M,staleId:E};l.limit&&l.limit>0&&i>l.limit&&$?o.push(R):Wa(_)?setTimeout(()=>{h(R)},_):h(R)},setProps(g){l=g},setToggle:(g,x)=>{let S=s.get(g);S&&(S.toggle=x)},isToastActive:g=>{var x;return(x=s.get(g))==null?void 0:x.isActive},getSnapshot:()=>a}}var ft=new Map,ja=[],Sp=new Set,tj=e=>Sp.forEach(t=>t(e)),lw=()=>ft.size>0;function nj(){ja.forEach(e=>cw(e.content,e.options)),ja=[]}var rj=(e,{containerId:t})=>{var n;return(n=ft.get(t||1))==null?void 0:n.toasts.get(e)};function uw(e,t){var n;if(t)return!!((n=ft.get(t))!=null&&n.isToastActive(e));let r=!1;return ft.forEach(i=>{i.isToastActive(e)&&(r=!0)}),r}function ij(e){if(!lw()){ja=ja.filter(t=>e!=null&&t.options.toastId!==e);return}if(e==null||q4(e))ft.forEach(t=>{t.removeToast(e)});else if(e&&("containerId"in e||"id"in e)){let t=ft.get(e.containerId);t?t.removeToast(e.id):ft.forEach(n=>{n.removeToast(e.id)})}}var oj=(e={})=>{ft.forEach(t=>{t.props.limit&&(!e.containerId||t.id===e.containerId)&&t.clearQueue()})};function cw(e,t){wp(e)&&(lw()||ja.push({content:e,options:t}),ft.forEach(n=>{n.buildToast(e,t)}))}function aj(e){var t;(t=ft.get(e.containerId||1))==null||t.setToggle(e.id,e.fn)}function dw(e,t){ft.forEach(n=>{(t==null||!(t!=null&&t.containerId)||(t==null?void 0:t.containerId)===n.id)&&n.toggle(e,t==null?void 0:t.id)})}function sj(e){let t=e.containerId||1;return{subscribe(n){let r=ej(t,e,tj);ft.set(t,r);let i=r.observe(n);return nj(),()=>{i(),ft.delete(t)}},setProps(n){var r;(r=ft.get(t))==null||r.setProps(n)},getSnapshot(){var n;return(n=ft.get(t))==null?void 0:n.getSnapshot()}}}function lj(e){return Sp.add(e),()=>{Sp.delete(e)}}function uj(e){return e&&(ei(e.toastId)||Wa(e.toastId))?e.toastId:sw()}function Ga(e,t){return cw(e,t),t.toastId}function Nu(e,t){return{...t,type:t&&t.type||e,toastId:uj(t)}}function Bu(e){return(t,n)=>Ga(t,Nu(e,n))}function Y(e,t){return Ga(e,Nu("default",t))}Y.loading=(e,t)=>Ga(e,Nu("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...t}));function cj(e,{pending:t,error:n,success:r},i){let o;t&&(o=ei(t)?Y.loading(t,i):Y.loading(t.render,{...i,...t}));let a={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},l=(u,d,c)=>{if(d==null){Y.dismiss(o);return}let y={type:u,...a,...i,data:c},p=ei(d)?{render:d}:d;return o?Y.update(o,{...y,...p}):Y(p.render,{...y,...p}),c},s=Xn(e)?e():e;return s.then(u=>l("success",r,u)).catch(u=>l("error",n,u)),s}Y.promise=cj;Y.success=Bu("success");Y.info=Bu("info");Y.error=Bu("error");Y.warning=Bu("warning");Y.warn=Y.warning;Y.dark=(e,t)=>Ga(e,Nu("default",{theme:"dark",...t}));function dj(e){ij(e)}Y.dismiss=dj;Y.clearWaitingQueue=oj;Y.isActive=uw;Y.update=(e,t={})=>{let n=rj(e,t);if(n){let{props:r,content:i}=n,o={delay:100,...r,...t,toastId:t.toastId||e,updateId:sw()};o.toastId!==e&&(o.staleId=e);let a=o.render||i;delete o.render,Ga(a,o)}};Y.done=e=>{Y.update(e,{progress:1})};Y.onChange=lj;Y.play=e=>dw(!0,e);Y.pause=e=>dw(!1,e);function fj(e){var t;let{subscribe:n,getSnapshot:r,setProps:i}=b.useRef(sj(e)).current;i(e);let o=(t=b.useSyncExternalStore(n,r,r))==null?void 0:t.slice();function a(l){if(!o)return[];let s=new Map;return e.newestOnTop&&o.reverse(),o.forEach(u=>{let{position:d}=u.props;s.has(d)||s.set(d,[]),s.get(d).push(u)}),Array.from(s,u=>l(u[0],u[1]))}return{getToastToRender:a,isToastActive:uw,count:o==null?void 0:o.length}}function pj(e){let[t,n]=b.useState(!1),[r,i]=b.useState(!1),o=b.useRef(null),a=b.useRef({start:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,didMove:!1}).current,{autoClose:l,pauseOnHover:s,closeToast:u,onClick:d,closeOnClick:c}=e;aj({id:e.toastId,containerId:e.containerId,fn:n}),b.useEffect(()=>{if(e.pauseOnFocusLoss)return y(),()=>{p()}},[e.pauseOnFocusLoss]);function y(){document.hasFocus()||h(),window.addEventListener("focus",w),window.addEventListener("blur",h)}function p(){window.removeEventListener("focus",w),window.removeEventListener("blur",h)}function m(E){if(e.draggable===!0||e.draggable===E.pointerType){g();let _=o.current;a.canCloseOnClick=!0,a.canDrag=!0,_.style.transition="none",e.draggableDirection==="x"?(a.start=E.clientX,a.removalDistance=_.offsetWidth*(e.draggablePercent/100)):(a.start=E.clientY,a.removalDistance=_.offsetHeight*(e.draggablePercent===80?e.draggablePercent*1.5:e.draggablePercent)/100)}}function v(E){let{top:_,bottom:$,left:M,right:R}=o.current.getBoundingClientRect();E.nativeEvent.type!=="touchend"&&e.pauseOnHover&&E.clientX>=M&&E.clientX<=R&&E.clientY>=_&&E.clientY<=$?h():w()}function w(){n(!0)}function h(){n(!1)}function g(){a.didMove=!1,document.addEventListener("pointermove",S),document.addEventListener("pointerup",C)}function x(){document.removeEventListener("pointermove",S),document.removeEventListener("pointerup",C)}function S(E){let _=o.current;if(a.canDrag&&_){a.didMove=!0,t&&h(),e.draggableDirection==="x"?a.delta=E.clientX-a.start:a.delta=E.clientY-a.start,a.start!==E.clientX&&(a.canCloseOnClick=!1);let $=e.draggableDirection==="x"?`${a.delta}px, var(--y)`:`0, calc(${a.delta}px + var(--y))`;_.style.transform=`translate3d(${$},0)`,_.style.opacity=`${1-Math.abs(a.delta/a.removalDistance)}`}}function C(){x();let E=o.current;if(a.canDrag&&a.didMove&&E){if(a.canDrag=!1,Math.abs(a.delta)>a.removalDistance){i(!0),e.closeToast(!0),e.collapseAll();return}E.style.transition="transform 0.2s, opacity 0.2s",E.style.removeProperty("transform"),E.style.removeProperty("opacity")}}let T={onPointerDown:m,onPointerUp:v};return l&&s&&(T.onMouseEnter=h,e.stacked||(T.onMouseLeave=w)),c&&(T.onClick=E=>{d&&d(E),a.canCloseOnClick&&u(!0)}),{playToast:w,pauseToast:h,isRunning:t,preventExitTransition:r,toastRef:o,eventHandlers:T}}var hj=typeof window<"u"?b.useLayoutEffect:b.useEffect,Vu=({theme:e,type:t,isLoading:n,...r})=>X.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:e==="colored"?"currentColor":`var(--toastify-icon-color-${t})`,...r});function mj(e){return X.createElement(Vu,{...e},X.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))}function gj(e){return X.createElement(Vu,{...e},X.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))}function vj(e){return X.createElement(Vu,{...e},X.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))}function yj(e){return X.createElement(Vu,{...e},X.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))}function xj(){return X.createElement("div",{className:"Toastify__spinner"})}var _p={info:gj,warning:mj,success:vj,error:yj,spinner:xj},bj=e=>e in _p;function wj({theme:e,type:t,isLoading:n,icon:r}){let i=null,o={theme:e,type:t};return r===!1||(Xn(r)?i=r({...o,isLoading:n}):b.isValidElement(r)?i=b.cloneElement(r,o):n?i=_p.spinner():bj(t)&&(i=_p[t](o))),i}var Sj=e=>{let{isRunning:t,preventExitTransition:n,toastRef:r,eventHandlers:i,playToast:o}=pj(e),{closeButton:a,children:l,autoClose:s,onClick:u,type:d,hideProgressBar:c,closeToast:y,transition:p,position:m,className:v,style:w,progressClassName:h,updateId:g,role:x,progress:S,rtl:C,toastId:T,deleteToast:E,isIn:_,isLoading:$,closeOnClick:M,theme:R,ariaLabel:A}=e,j=Gr("Toastify__toast",`Toastify__toast-theme--${R}`,`Toastify__toast--${d}`,{"Toastify__toast--rtl":C},{"Toastify__toast--close-on-click":M}),F=Xn(v)?v({rtl:C,position:m,type:d,defaultClassName:j}):Gr(j,v),L=wj(e),O=!!S||!s,D={closeToast:y,type:d,theme:R},P=null;return a===!1||(Xn(a)?P=a(D):b.isValidElement(a)?P=b.cloneElement(a,D):P=Q4(D)),X.createElement(p,{isIn:_,done:E,position:m,preventExitTransition:n,nodeRef:r,playToast:o},X.createElement("div",{id:T,tabIndex:0,onClick:u,"data-in":_,className:F,...i,style:w,ref:r,..._&&{role:x,"aria-label":A}},L!=null&&X.createElement("div",{className:Gr("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!$})},L),aw(l,e,!t),P,!e.customProgressBar&&X.createElement(Z4,{...g&&!O?{key:`p-${g}`}:{},rtl:C,theme:R,delay:s,isRunning:t,isIn:_,closeToast:y,hide:c,type:d,className:h,controlledProgress:O,progress:S||0})))},_j=(e,t=!1)=>({enter:`Toastify--animate Toastify__${e}-enter`,exit:`Toastify--animate Toastify__${e}-exit`,appendPosition:t}),Cj=K4(_j("bounce",!0)),Ej={position:"top-right",transition:Cj,autoClose:5e3,closeButton:!0,pauseOnHover:!0,pauseOnFocusLoss:!0,draggable:"touch",draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light","aria-label":"Notifications Alt+T",hotKeys:e=>e.altKey&&e.code==="KeyT"};function Or(e){let t={...Ej,...e},n=e.stacked,[r,i]=b.useState(!0),o=b.useRef(null),{getToastToRender:a,isToastActive:l,count:s}=fj(t),{className:u,style:d,rtl:c,containerId:y,hotKeys:p}=t;function m(w){let h=Gr("Toastify__toast-container",`Toastify__toast-container--${w}`,{"Toastify__toast-container--rtl":c});return Xn(u)?u({position:w,rtl:c,defaultClassName:h}):Gr(h,bp(u))}function v(){n&&(i(!0),Y.play())}return hj(()=>{var w;if(n){let h=o.current.querySelectorAll('[data-in="true"]'),g=12,x=(w=t.position)==null?void 0:w.includes("top"),S=0,C=0;Array.from(h).reverse().forEach((T,E)=>{let _=T;_.classList.add("Toastify__toast--stacked"),E>0&&(_.dataset.collapsed=`${r}`),_.dataset.pos||(_.dataset.pos=x?"top":"bot");let $=S*(r?.2:1)+(r?0:g*E);_.style.setProperty("--y",`${x?$:$*-1}px`),_.style.setProperty("--g",`${g}`),_.style.setProperty("--s",`${1-(r?C:0)}`),S+=_.offsetHeight,C+=.025})}},[r,s,n]),b.useEffect(()=>{function w(h){var g;let x=o.current;p(h)&&((g=x.querySelector('[tabIndex="0"]'))==null||g.focus(),i(!1),Y.pause()),h.key==="Escape"&&(document.activeElement===x||x!=null&&x.contains(document.activeElement))&&(i(!0),Y.play())}return document.addEventListener("keydown",w),()=>{document.removeEventListener("keydown",w)}},[p]),X.createElement("section",{ref:o,className:"Toastify",id:y,onMouseEnter:()=>{n&&(i(!1),Y.pause())},onMouseLeave:v,"aria-live":"polite","aria-atomic":"false","aria-relevant":"additions text","aria-label":t["aria-label"]},a((w,h)=>{let g=h.length?{...d}:{...d,pointerEvents:"none"};return X.createElement("div",{tabIndex:-1,className:m(w),"data-stacked":n,style:g,key:`c-${w}`},h.map(({content:x,props:S})=>X.createElement(Sj,{...S,stacked:n,collapseAll:v,isIn:l(S.toastId,S.containerId),key:`t-${S.key}`},x)))}))}const no="/Didiv/assets/nofoto-2f8d9d99.png",kj=k.div`
`,Pj=k.div`
display: flex;
    justify-content: space-between;
    align-items: center;
        margin-bottom: 10px;

    
`,Tj=k.h2`
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

`,Oj=k.div`
width: 100vw;
height:30vw;

  @media screen and (min-width: 768px) {
  width: 60vw;
  height:80vw;
  }
   @media screen and (min-width: 1200px) {
 
  height:40vw;
  }
      
`;k.div``;const jj=k.div`
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
`,Mj=k.div`
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
`,$j=k.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  padding:20px;
`,Ij=k.div`
  padding: 16px;
      display: flex;
    align-content: center;
    align-items: center;
        justify-content: space-between;
`,Dj=k.p`
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
`;k.p`
     font-size: 17px;
    font-weight: 800;

`;const fw=k.div.attrs({className:"card-buttons"})`
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
`,Wl=k.button`
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
`;const Lj=k.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  flex-wrap: wrap;
  gap: 5px;
`,xd=k.button`
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
`,Aj=k.div`
  position: relative;
  display: inline-block;
   @media screen and (max-width: 768px) {
  display:none;
  }

`,Rj=k.button`
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
`,Fj=k.div`
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
`,pi=k.div`
  padding: 10px 12px;
  cursor: pointer;

  &:hover {
    background: #f0f0f0;
  }
`,pw=k.div`
  text-align: center;
  width: 100px;
 
`,hw=k.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 2px;
`,mw=k.span`
  font-size: 18px;
  font-weight: 600;
  color: ${({$discount:e})=>"#111"};
`,gw=k.span`
  font-size: 13px;
  color: #999;
  text-decoration: line-through;
`,vw=k.span`
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
`,yw=rw({name:"favorites",initialState:{items:[]},reducers:{toggleFavorite:(e,t)=>{const n=t.payload;e.items.find(i=>i.id===n.id)?e.items=e.items.filter(i=>i.id!==n.id):e.items.push(n)},clearFavorite:e=>{e.items=[]}}}),{toggleFavorite:ai,clearFavorite:zj}=yw.actions,Nj=yw.reducer,xw=()=>{const e=jn(),[t,n]=b.useState([]),r=qe(l=>l.favorites.items),i=qe(l=>l.cart.items);b.useEffect(()=>{const l=new Date,s=new Date;s.setDate(l.getDate()-7);const u=s.toISOString();fetch(`https://backenddidiv-production.up.railway.app/api/products?populate=*&filters[createdAt][$gte]=${u}`).then(d=>d.json()).then(d=>n(d.data)).catch(d=>console.error("Помилка завантаження нових товарів:",d))},[]);const o=(l,s)=>{s.stopPropagation();const u=r.some(d=>d.id===l.id);e(ai(l)),u?Y.warning(`${l.name} видалено з обраного`):Y.info(`${l.name} додано в обране`)},a=[...t].sort(()=>Math.random()-.5).slice(0,3);return!t||t.length===0?null:f.jsxs(VO,{children:[f.jsx(Or,{}),f.jsx(UO,{children:"Нові товари"}),f.jsxs(HO,{children:[a.map(l=>{var w;const s=r.some(h=>h.id===l.id),u=i.find(h=>h.id===l.id),c=(u?u.quantity:0)>=(l.stock||0),y=l.new_price&&l.new_price<l.price,p=y?l.new_price:l.price,m=y?Math.round((l.price-l.new_price)/l.price*100):0,v=(h,g)=>{if(g.stopPropagation(),c){Y.error("Товар уже у кошику");return}e(ho({...h,quantity:1})),Y.success(`${h.name} додано в кошик!`)};return f.jsxs(WO,{children:[f.jsxs(GO,{to:`/product/${l.id}`,children:[f.jsx(qO,{children:"Новинка"}),f.jsx("img",{src:((w=l.images)==null?void 0:w[0].url)||no,alt:l.name,onError:h=>{h.currentTarget.onerror=null,h.currentTarget.src=no}}),f.jsx("div",{className:"overlay"})]}),f.jsxs(YO,{children:[f.jsx(XO,{children:l.name}),f.jsxs(KO,{children:[f.jsx(pw,{children:f.jsxs(hw,{children:[f.jsxs(mw,{$discount:y,children:[p.toLocaleString()," грн"]}),y&&f.jsxs(gw,{children:[l.price.toLocaleString()," грн"]}),y&&f.jsxs(vw,{children:["-",m,"%"]})]})}),f.jsxs(fw,{children:[f.jsx(Wl,{onClick:h=>v(l,h),children:f.jsx(po,{size:24,color:u?"var(--orange-color)":"black",strokeWidth:2})}),f.jsx(Wl,{onClick:h=>o(l,h),children:f.jsx(Ua,{size:24,fill:s?"#ff4d4f":"none",color:s?"#ff4d4f":"#000000",strokeWidth:s?1:2})})]})]})]})]},l.id)}),f.jsx(QO,{to:"/catalog/new",children:f.jsxs(ZO,{children:[f.jsx("p",{children:"Усі новинки"}),f.jsx(JO,{children:f.jsx($u,{size:24})})]})})]})]})};function J(){return J=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},J.apply(this,arguments)}function Bj(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function Vj(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var Uj=function(){function e(n){var r=this;this._insertTag=function(i){var o;r.tags.length===0?r.insertionPoint?o=r.insertionPoint.nextSibling:r.prepend?o=r.container.firstChild:o=r.before:o=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(i,o),r.tags.push(i)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(r){r.forEach(this._insertTag)},t.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(Vj(this));var i=this.tags[this.tags.length-1];if(this.isSpeedy){var o=Bj(i);try{o.insertRule(r,o.cssRules.length)}catch{}}else i.appendChild(document.createTextNode(r));this.ctr++},t.flush=function(){this.tags.forEach(function(r){return r.parentNode&&r.parentNode.removeChild(r)}),this.tags=[],this.ctr=0},e}(),it="-ms-",Gl="-moz-",ce="-webkit-",bw="comm",sm="rule",lm="decl",Hj="@import",ww="@keyframes",Wj="@layer",Gj=Math.abs,Uu=String.fromCharCode,qj=Object.assign;function Yj(e,t){return Qe(e,0)^45?(((t<<2^Qe(e,0))<<2^Qe(e,1))<<2^Qe(e,2))<<2^Qe(e,3):0}function Sw(e){return e.trim()}function Xj(e,t){return(e=t.exec(e))?e[0]:e}function de(e,t,n){return e.replace(t,n)}function Cp(e,t){return e.indexOf(t)}function Qe(e,t){return e.charCodeAt(t)|0}function Ma(e,t,n){return e.slice(t,n)}function xn(e){return e.length}function um(e){return e.length}function ws(e,t){return t.push(e),e}function Kj(e,t){return e.map(t).join("")}var Hu=1,ro=1,_w=0,kt=0,Ie=0,mo="";function Wu(e,t,n,r,i,o,a){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:Hu,column:ro,length:a,return:""}}function $o(e,t){return qj(Wu("",null,null,"",null,null,0),e,{length:-e.length},t)}function Qj(){return Ie}function Zj(){return Ie=kt>0?Qe(mo,--kt):0,ro--,Ie===10&&(ro=1,Hu--),Ie}function Lt(){return Ie=kt<_w?Qe(mo,kt++):0,ro++,Ie===10&&(ro=1,Hu++),Ie}function En(){return Qe(mo,kt)}function Qs(){return kt}function qa(e,t){return Ma(mo,e,t)}function $a(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Cw(e){return Hu=ro=1,_w=xn(mo=e),kt=0,[]}function Ew(e){return mo="",e}function Zs(e){return Sw(qa(kt-1,Ep(e===91?e+2:e===40?e+1:e)))}function Jj(e){for(;(Ie=En())&&Ie<33;)Lt();return $a(e)>2||$a(Ie)>3?"":" "}function e3(e,t){for(;--t&&Lt()&&!(Ie<48||Ie>102||Ie>57&&Ie<65||Ie>70&&Ie<97););return qa(e,Qs()+(t<6&&En()==32&&Lt()==32))}function Ep(e){for(;Lt();)switch(Ie){case e:return kt;case 34:case 39:e!==34&&e!==39&&Ep(Ie);break;case 40:e===41&&Ep(e);break;case 92:Lt();break}return kt}function t3(e,t){for(;Lt()&&e+Ie!==47+10;)if(e+Ie===42+42&&En()===47)break;return"/*"+qa(t,kt-1)+"*"+Uu(e===47?e:Lt())}function n3(e){for(;!$a(En());)Lt();return qa(e,kt)}function r3(e){return Ew(Js("",null,null,null,[""],e=Cw(e),0,[0],e))}function Js(e,t,n,r,i,o,a,l,s){for(var u=0,d=0,c=a,y=0,p=0,m=0,v=1,w=1,h=1,g=0,x="",S=i,C=o,T=r,E=x;w;)switch(m=g,g=Lt()){case 40:if(m!=108&&Qe(E,c-1)==58){Cp(E+=de(Zs(g),"&","&\f"),"&\f")!=-1&&(h=-1);break}case 34:case 39:case 91:E+=Zs(g);break;case 9:case 10:case 13:case 32:E+=Jj(m);break;case 92:E+=e3(Qs()-1,7);continue;case 47:switch(En()){case 42:case 47:ws(i3(t3(Lt(),Qs()),t,n),s);break;default:E+="/"}break;case 123*v:l[u++]=xn(E)*h;case 125*v:case 59:case 0:switch(g){case 0:case 125:w=0;case 59+d:h==-1&&(E=de(E,/\f/g,"")),p>0&&xn(E)-c&&ws(p>32?q0(E+";",r,n,c-1):q0(de(E," ","")+";",r,n,c-2),s);break;case 59:E+=";";default:if(ws(T=G0(E,t,n,u,d,i,l,x,S=[],C=[],c),o),g===123)if(d===0)Js(E,t,T,T,S,o,c,l,C);else switch(y===99&&Qe(E,3)===110?100:y){case 100:case 108:case 109:case 115:Js(e,T,T,r&&ws(G0(e,T,T,0,0,i,l,x,i,S=[],c),C),i,C,c,l,r?S:C);break;default:Js(E,T,T,T,[""],C,0,l,C)}}u=d=p=0,v=h=1,x=E="",c=a;break;case 58:c=1+xn(E),p=m;default:if(v<1){if(g==123)--v;else if(g==125&&v++==0&&Zj()==125)continue}switch(E+=Uu(g),g*v){case 38:h=d>0?1:(E+="\f",-1);break;case 44:l[u++]=(xn(E)-1)*h,h=1;break;case 64:En()===45&&(E+=Zs(Lt())),y=En(),d=c=xn(x=E+=n3(Qs())),g++;break;case 45:m===45&&xn(E)==2&&(v=0)}}return o}function G0(e,t,n,r,i,o,a,l,s,u,d){for(var c=i-1,y=i===0?o:[""],p=um(y),m=0,v=0,w=0;m<r;++m)for(var h=0,g=Ma(e,c+1,c=Gj(v=a[m])),x=e;h<p;++h)(x=Sw(v>0?y[h]+" "+g:de(g,/&\f/g,y[h])))&&(s[w++]=x);return Wu(e,t,n,i===0?sm:l,s,u,d)}function i3(e,t,n){return Wu(e,t,n,bw,Uu(Qj()),Ma(e,2,-2),0)}function q0(e,t,n,r){return Wu(e,t,n,lm,Ma(e,0,r),Ma(e,r+1,-1),r)}function Ni(e,t){for(var n="",r=um(e),i=0;i<r;i++)n+=t(e[i],i,e,t)||"";return n}function o3(e,t,n,r){switch(e.type){case Wj:if(e.children.length)break;case Hj:case lm:return e.return=e.return||e.value;case bw:return"";case ww:return e.return=e.value+"{"+Ni(e.children,r)+"}";case sm:e.value=e.props.join(",")}return xn(n=Ni(e.children,r))?e.return=e.value+"{"+n+"}":""}function a3(e){var t=um(e);return function(n,r,i,o){for(var a="",l=0;l<t;l++)a+=e[l](n,r,i,o)||"";return a}}function s3(e){return function(t){t.root||(t=t.return)&&e(t)}}function l3(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var u3=function(t,n,r){for(var i=0,o=0;i=o,o=En(),i===38&&o===12&&(n[r]=1),!$a(o);)Lt();return qa(t,kt)},c3=function(t,n){var r=-1,i=44;do switch($a(i)){case 0:i===38&&En()===12&&(n[r]=1),t[r]+=u3(kt-1,n,r);break;case 2:t[r]+=Zs(i);break;case 4:if(i===44){t[++r]=En()===58?"&\f":"",n[r]=t[r].length;break}default:t[r]+=Uu(i)}while(i=Lt());return t},d3=function(t,n){return Ew(c3(Cw(t),n))},Y0=new WeakMap,f3=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var n=t.value,r=t.parent,i=t.column===r.column&&t.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(t.props.length===1&&n.charCodeAt(0)!==58&&!Y0.get(r))&&!i){Y0.set(t,!0);for(var o=[],a=d3(n,o),l=r.props,s=0,u=0;s<a.length;s++)for(var d=0;d<l.length;d++,u++)t.props[u]=o[s]?a[s].replace(/&\f/g,l[d]):l[d]+" "+a[s]}}},p3=function(t){if(t.type==="decl"){var n=t.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(t.return="",t.value="")}};function kw(e,t){switch(Yj(e,t)){case 5103:return ce+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return ce+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return ce+e+Gl+e+it+e+e;case 6828:case 4268:return ce+e+it+e+e;case 6165:return ce+e+it+"flex-"+e+e;case 5187:return ce+e+de(e,/(\w+).+(:[^]+)/,ce+"box-$1$2"+it+"flex-$1$2")+e;case 5443:return ce+e+it+"flex-item-"+de(e,/flex-|-self/,"")+e;case 4675:return ce+e+it+"flex-line-pack"+de(e,/align-content|flex-|-self/,"")+e;case 5548:return ce+e+it+de(e,"shrink","negative")+e;case 5292:return ce+e+it+de(e,"basis","preferred-size")+e;case 6060:return ce+"box-"+de(e,"-grow","")+ce+e+it+de(e,"grow","positive")+e;case 4554:return ce+de(e,/([^-])(transform)/g,"$1"+ce+"$2")+e;case 6187:return de(de(de(e,/(zoom-|grab)/,ce+"$1"),/(image-set)/,ce+"$1"),e,"")+e;case 5495:case 3959:return de(e,/(image-set\([^]*)/,ce+"$1$`$1");case 4968:return de(de(e,/(.+:)(flex-)?(.*)/,ce+"box-pack:$3"+it+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+ce+e+e;case 4095:case 3583:case 4068:case 2532:return de(e,/(.+)-inline(.+)/,ce+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(xn(e)-1-t>6)switch(Qe(e,t+1)){case 109:if(Qe(e,t+4)!==45)break;case 102:return de(e,/(.+:)(.+)-([^]+)/,"$1"+ce+"$2-$3$1"+Gl+(Qe(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Cp(e,"stretch")?kw(de(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(Qe(e,t+1)!==115)break;case 6444:switch(Qe(e,xn(e)-3-(~Cp(e,"!important")&&10))){case 107:return de(e,":",":"+ce)+e;case 101:return de(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+ce+(Qe(e,14)===45?"inline-":"")+"box$3$1"+ce+"$2$3$1"+it+"$2box$3")+e}break;case 5936:switch(Qe(e,t+11)){case 114:return ce+e+it+de(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return ce+e+it+de(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return ce+e+it+de(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return ce+e+it+e+e}return e}var h3=function(t,n,r,i){if(t.length>-1&&!t.return)switch(t.type){case lm:t.return=kw(t.value,t.length);break;case ww:return Ni([$o(t,{value:de(t.value,"@","@"+ce)})],i);case sm:if(t.length)return Kj(t.props,function(o){switch(Xj(o,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return Ni([$o(t,{props:[de(o,/:(read-\w+)/,":"+Gl+"$1")]})],i);case"::placeholder":return Ni([$o(t,{props:[de(o,/:(plac\w+)/,":"+ce+"input-$1")]}),$o(t,{props:[de(o,/:(plac\w+)/,":"+Gl+"$1")]}),$o(t,{props:[de(o,/:(plac\w+)/,it+"input-$1")]})],i)}return""})}},m3=[h3],g3=function(t){var n=t.key;if(n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(v){var w=v.getAttribute("data-emotion");w.indexOf(" ")!==-1&&(document.head.appendChild(v),v.setAttribute("data-s",""))})}var i=t.stylisPlugins||m3,o={},a,l=[];a=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(v){for(var w=v.getAttribute("data-emotion").split(" "),h=1;h<w.length;h++)o[w[h]]=!0;l.push(v)});var s,u=[f3,p3];{var d,c=[o3,s3(function(v){d.insert(v)})],y=a3(u.concat(i,c)),p=function(w){return Ni(r3(w),y)};s=function(w,h,g,x){d=g,p(w?w+"{"+h.styles+"}":h.styles),x&&(m.inserted[h.name]=!0)}}var m={key:n,sheet:new Uj({key:n,container:a,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:o,registered:{},insert:s};return m.sheet.hydrate(l),m},Pw={exports:{}},me={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ye=typeof Symbol=="function"&&Symbol.for,cm=Ye?Symbol.for("react.element"):60103,dm=Ye?Symbol.for("react.portal"):60106,Gu=Ye?Symbol.for("react.fragment"):60107,qu=Ye?Symbol.for("react.strict_mode"):60108,Yu=Ye?Symbol.for("react.profiler"):60114,Xu=Ye?Symbol.for("react.provider"):60109,Ku=Ye?Symbol.for("react.context"):60110,fm=Ye?Symbol.for("react.async_mode"):60111,Qu=Ye?Symbol.for("react.concurrent_mode"):60111,Zu=Ye?Symbol.for("react.forward_ref"):60112,Ju=Ye?Symbol.for("react.suspense"):60113,v3=Ye?Symbol.for("react.suspense_list"):60120,ec=Ye?Symbol.for("react.memo"):60115,tc=Ye?Symbol.for("react.lazy"):60116,y3=Ye?Symbol.for("react.block"):60121,x3=Ye?Symbol.for("react.fundamental"):60117,b3=Ye?Symbol.for("react.responder"):60118,w3=Ye?Symbol.for("react.scope"):60119;function Bt(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case cm:switch(e=e.type,e){case fm:case Qu:case Gu:case Yu:case qu:case Ju:return e;default:switch(e=e&&e.$$typeof,e){case Ku:case Zu:case tc:case ec:case Xu:return e;default:return t}}case dm:return t}}}function Tw(e){return Bt(e)===Qu}me.AsyncMode=fm;me.ConcurrentMode=Qu;me.ContextConsumer=Ku;me.ContextProvider=Xu;me.Element=cm;me.ForwardRef=Zu;me.Fragment=Gu;me.Lazy=tc;me.Memo=ec;me.Portal=dm;me.Profiler=Yu;me.StrictMode=qu;me.Suspense=Ju;me.isAsyncMode=function(e){return Tw(e)||Bt(e)===fm};me.isConcurrentMode=Tw;me.isContextConsumer=function(e){return Bt(e)===Ku};me.isContextProvider=function(e){return Bt(e)===Xu};me.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===cm};me.isForwardRef=function(e){return Bt(e)===Zu};me.isFragment=function(e){return Bt(e)===Gu};me.isLazy=function(e){return Bt(e)===tc};me.isMemo=function(e){return Bt(e)===ec};me.isPortal=function(e){return Bt(e)===dm};me.isProfiler=function(e){return Bt(e)===Yu};me.isStrictMode=function(e){return Bt(e)===qu};me.isSuspense=function(e){return Bt(e)===Ju};me.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Gu||e===Qu||e===Yu||e===qu||e===Ju||e===v3||typeof e=="object"&&e!==null&&(e.$$typeof===tc||e.$$typeof===ec||e.$$typeof===Xu||e.$$typeof===Ku||e.$$typeof===Zu||e.$$typeof===x3||e.$$typeof===b3||e.$$typeof===w3||e.$$typeof===y3)};me.typeOf=Bt;Pw.exports=me;var S3=Pw.exports,Ow=S3,_3={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},C3={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},jw={};jw[Ow.ForwardRef]=_3;jw[Ow.Memo]=C3;var E3=!0;function Mw(e,t,n){var r="";return n.split(" ").forEach(function(i){e[i]!==void 0?t.push(e[i]+";"):r+=i+" "}),r}var pm=function(t,n,r){var i=t.key+"-"+n.name;(r===!1||E3===!1)&&t.registered[i]===void 0&&(t.registered[i]=n.styles)},$w=function(t,n,r){pm(t,n,r);var i=t.key+"-"+n.name;if(t.inserted[n.name]===void 0){var o=n;do t.insert(n===o?"."+i:"",o,t.sheet,!0),o=o.next;while(o!==void 0)}};function k3(e){for(var t=0,n,r=0,i=e.length;i>=4;++r,i-=4)n=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(i){case 3:t^=(e.charCodeAt(r+2)&255)<<16;case 2:t^=(e.charCodeAt(r+1)&255)<<8;case 1:t^=e.charCodeAt(r)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var P3={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},T3=/[A-Z]|^ms/g,O3=/_EMO_([^_]+?)_([^]*?)_EMO_/g,Iw=function(t){return t.charCodeAt(1)===45},X0=function(t){return t!=null&&typeof t!="boolean"},bd=l3(function(e){return Iw(e)?e:e.replace(T3,"-$&").toLowerCase()}),K0=function(t,n){switch(t){case"animation":case"animationName":if(typeof n=="string")return n.replace(O3,function(r,i,o){return bn={name:i,styles:o,next:bn},i})}return P3[t]!==1&&!Iw(t)&&typeof n=="number"&&n!==0?n+"px":n};function Ia(e,t,n){if(n==null)return"";if(n.__emotion_styles!==void 0)return n;switch(typeof n){case"boolean":return"";case"object":{if(n.anim===1)return bn={name:n.name,styles:n.styles,next:bn},n.name;if(n.styles!==void 0){var r=n.next;if(r!==void 0)for(;r!==void 0;)bn={name:r.name,styles:r.styles,next:bn},r=r.next;var i=n.styles+";";return i}return j3(e,t,n)}case"function":{if(e!==void 0){var o=bn,a=n(e);return bn=o,Ia(e,t,a)}break}}if(t==null)return n;var l=t[n];return l!==void 0?l:n}function j3(e,t,n){var r="";if(Array.isArray(n))for(var i=0;i<n.length;i++)r+=Ia(e,t,n[i])+";";else for(var o in n){var a=n[o];if(typeof a!="object")t!=null&&t[a]!==void 0?r+=o+"{"+t[a]+"}":X0(a)&&(r+=bd(o)+":"+K0(o,a)+";");else if(Array.isArray(a)&&typeof a[0]=="string"&&(t==null||t[a[0]]===void 0))for(var l=0;l<a.length;l++)X0(a[l])&&(r+=bd(o)+":"+K0(o,a[l])+";");else{var s=Ia(e,t,a);switch(o){case"animation":case"animationName":{r+=bd(o)+":"+s+";";break}default:r+=o+"{"+s+"}"}}}return r}var Q0=/label:\s*([^\s;\n{]+)\s*(;|$)/g,bn,hm=function(t,n,r){if(t.length===1&&typeof t[0]=="object"&&t[0]!==null&&t[0].styles!==void 0)return t[0];var i=!0,o="";bn=void 0;var a=t[0];a==null||a.raw===void 0?(i=!1,o+=Ia(r,n,a)):o+=a[0];for(var l=1;l<t.length;l++)o+=Ia(r,n,t[l]),i&&(o+=a[l]);Q0.lastIndex=0;for(var s="",u;(u=Q0.exec(o))!==null;)s+="-"+u[1];var d=k3(o)+s;return{name:d,styles:o,next:bn}},M3=function(t){return t()},$3=af["useInsertionEffect"]?af["useInsertionEffect"]:!1,Dw=$3||M3,mm={}.hasOwnProperty,Lw=b.createContext(typeof HTMLElement<"u"?g3({key:"css"}):null);Lw.Provider;var Aw=function(t){return b.forwardRef(function(n,r){var i=b.useContext(Lw);return t(n,i,r)})},Rw=b.createContext({}),kp="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",I3=function(t,n){var r={};for(var i in n)mm.call(n,i)&&(r[i]=n[i]);return r[kp]=t,r},D3=function(t){var n=t.cache,r=t.serialized,i=t.isStringTag;return pm(n,r,i),Dw(function(){return $w(n,r,i)}),null},L3=Aw(function(e,t,n){var r=e.css;typeof r=="string"&&t.registered[r]!==void 0&&(r=t.registered[r]);var i=e[kp],o=[r],a="";typeof e.className=="string"?a=Mw(t.registered,o,e.className):e.className!=null&&(a=e.className+" ");var l=hm(o,void 0,b.useContext(Rw));a+=t.key+"-"+l.name;var s={};for(var u in e)mm.call(e,u)&&u!=="css"&&u!==kp&&(s[u]=e[u]);return s.ref=n,s.className=a,b.createElement(b.Fragment,null,b.createElement(D3,{cache:t,serialized:l,isStringTag:typeof i=="string"}),b.createElement(i,s))}),A3=L3,Q=function(t,n){var r=arguments;if(n==null||!mm.call(n,"css"))return b.createElement.apply(void 0,r);var i=r.length,o=new Array(i);o[0]=A3,o[1]=I3(t,n);for(var a=2;a<i;a++)o[a]=r[a];return b.createElement.apply(null,o)};function gm(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return hm(t)}var R3=function(){var t=gm.apply(void 0,arguments),n="animation-"+t.name;return{name:n,styles:"@keyframes "+n+"{"+t.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},F3=rP,z3=function(t){return t!=="theme"},Z0=function(t){return typeof t=="string"&&t.charCodeAt(0)>96?F3:z3},J0=function(t,n,r){var i;if(n){var o=n.shouldForwardProp;i=t.__emotion_forwardProp&&o?function(a){return t.__emotion_forwardProp(a)&&o(a)}:o}return typeof i!="function"&&r&&(i=t.__emotion_forwardProp),i},N3=function(t){var n=t.cache,r=t.serialized,i=t.isStringTag;return pm(n,r,i),Dw(function(){return $w(n,r,i)}),null},B3=function e(t,n){var r=t.__emotion_real===t,i=r&&t.__emotion_base||t,o,a;n!==void 0&&(o=n.label,a=n.target);var l=J0(t,n,r),s=l||Z0(i),u=!s("as");return function(){var d=arguments,c=r&&t.__emotion_styles!==void 0?t.__emotion_styles.slice(0):[];if(o!==void 0&&c.push("label:"+o+";"),d[0]==null||d[0].raw===void 0)c.push.apply(c,d);else{c.push(d[0][0]);for(var y=d.length,p=1;p<y;p++)c.push(d[p],d[0][p])}var m=Aw(function(v,w,h){var g=u&&v.as||i,x="",S=[],C=v;if(v.theme==null){C={};for(var T in v)C[T]=v[T];C.theme=b.useContext(Rw)}typeof v.className=="string"?x=Mw(w.registered,S,v.className):v.className!=null&&(x=v.className+" ");var E=hm(c.concat(S),w.registered,C);x+=w.key+"-"+E.name,a!==void 0&&(x+=" "+a);var _=u&&l===void 0?Z0(g):s,$={};for(var M in v)u&&M==="as"||_(M)&&($[M]=v[M]);return $.className=x,$.ref=h,b.createElement(b.Fragment,null,b.createElement(N3,{cache:w,serialized:E,isStringTag:typeof g=="string"}),b.createElement(g,$))});return m.displayName=o!==void 0?o:"Styled("+(typeof i=="string"?i:i.displayName||i.name||"Component")+")",m.defaultProps=t.defaultProps,m.__emotion_real=m,m.__emotion_base=i,m.__emotion_styles=c,m.__emotion_forwardProp=l,Object.defineProperty(m,"toString",{value:function(){return"."+a}}),m.withComponent=function(v,w){return e(v,J({},n,w,{shouldForwardProp:J0(m,w,!0)})).apply(void 0,c)},m}},V3=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],Ae=B3.bind();V3.forEach(function(e){Ae[e]=Ae(e)});const U3=Ae.section`
  background-color: var(--second-background);
`,H3=Ae.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  align-items: center;
  padding-top: 30px;
  padding-left: 10px;
  padding-right: 10px;
  @media screen and (min-width: 768px) {
    max-width: 994px;
    padding-left: 30px;
    padding-right: 30px;
  }
  @media screen and (min-width: 1200px) {
    max-width: 1448px;
  }
`,W3=Ae.div`

`,G3=Ae.h1`
  font-size: 32px;
  font-family: var(--main-font);
  color: var(--black-color);
  text-transform: uppercase;
  margin-bottom: 20px;
`,q3=Ae.div`
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
`;Ae.div`
  position: absolute;
  inset: 0; /* займає всю картку */
  background: rgba(0, 0, 0, 0.622); /* чорний з прозорістю 25% */
`;const Y3=Ae(Oe)`
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
`,X3=Ae.div`
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
`,K3=Ae.img`
  width: 100%;
  height: 200px;
  object-fit: cover;

  display: block;
  @media screen and (max-width: 768px) {
    height: 250px;
  }
`,Q3=Ae.p`
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
`;var Z3={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"};J3(Z3);function J3(e){var t={};for(var n in e)e.hasOwnProperty(n)&&(t[e[n]]=n);return t}var eM="#4fa94d",tM={"aria-busy":!0,role:"progressbar"},nM=k.div`
  display: ${e=>e.$visible?"flex":"none"};
`,rM="http://www.w3.org/2000/svg",Ya=({height:e=100,width:t=100,radius:n=5,color:r=eM,ariaLabel:i="ball-triangle-loading",wrapperClass:o,wrapperStyle:a,visible:l=!0})=>f.jsx(nM,{style:{...a},$visible:l,className:o,"data-testid":"ball-triangle-loading","aria-label":i,...tM,children:f.jsxs("svg",{height:e,width:t,stroke:r,viewBox:"0 0 57 57",xmlns:rM,"data-testid":"ball-triangle-svg",children:[f.jsx("title",{children:"Ball Triangle"}),f.jsx("desc",{children:"Animated representation of three balls"}),f.jsx("g",{fill:"none",fillRule:"evenodd",children:f.jsxs("g",{transform:"translate(1 1)",strokeWidth:"2",children:[f.jsxs("circle",{cx:"5",cy:"50",r:n,children:[f.jsx("animate",{attributeName:"cy",begin:"0s",dur:"2.2s",values:"50;5;50;50",calcMode:"linear",repeatCount:"indefinite"}),f.jsx("animate",{attributeName:"cx",begin:"0s",dur:"2.2s",values:"5;27;49;5",calcMode:"linear",repeatCount:"indefinite"})]}),f.jsxs("circle",{cx:"27",cy:"5",r:n,children:[f.jsx("animate",{attributeName:"cy",begin:"0s",dur:"2.2s",from:"5",to:"5",values:"5;50;50;5",calcMode:"linear",repeatCount:"indefinite"}),f.jsx("animate",{attributeName:"cx",begin:"0s",dur:"2.2s",from:"27",to:"27",values:"27;49;5;27",calcMode:"linear",repeatCount:"indefinite"})]}),f.jsxs("circle",{cx:"49",cy:"50",r:n,children:[f.jsx("animate",{attributeName:"cy",begin:"0s",dur:"2.2s",values:"50;50;5;50",calcMode:"linear",repeatCount:"indefinite"}),f.jsx("animate",{attributeName:"cx",from:"49",to:"49",begin:"0s",dur:"2.2s",values:"49;5;27;49",calcMode:"linear",repeatCount:"indefinite"})]})]})})]})}),Jt=242.776657104492,iM=1.6,oM=Jh`
12.5% {
  stroke-dasharray: ${Jt*.14}px, ${Jt}px;
  stroke-dashoffset: -${Jt*.11}px;
}
43.75% {
  stroke-dasharray: ${Jt*.35}px, ${Jt}px;
  stroke-dashoffset: -${Jt*.35}px;
}
100% {
  stroke-dasharray: ${Jt*.01}px, ${Jt}px;
  stroke-dashoffset: -${Jt*.99}px;
}
`;k.path`
  stroke-dasharray: ${Jt*.01}px, ${Jt};
  stroke-dashoffset: 0;
  animation: ${oM} ${iM}s linear infinite;
`;var aM=Jh`
to {
   transform: rotate(360deg);
 }
`;k.svg`
  animation: ${aM} ${e=>String(e.$animationDuration).endsWith("s")?String(e.$animationDuration):`${e.$animationDuration}s`} steps(12, end) infinite;
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
`;var sM=Jh`
to {
   stroke-dashoffset: 136;
 }
`;k.polygon`
  stroke-dasharray: 17;
  animation: ${sM} 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;
`;k.svg`
  transform-origin: 50% 65%;
`;const lM=()=>{const[e,t]=b.useState([]),[n,r]=b.useState(!0);return b.useEffect(()=>{async function i(){try{r(!0);const a=await(await fetch("https://backenddidiv-production.up.railway.app/api/categories?populate=*&pagination[limit]=50&sort=title:asc")).json();console.log(a),t(a.data.map(l=>{var s;return{id:l.id_title,title:l.title,image:(s=l.image)==null?void 0:s.url}}))}catch(o){console.log(o)}finally{r(!1)}}i()},[]),n?f.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"100vw",height:"100vh"},children:f.jsx(Ya,{height:100,width:100,radius:5,color:"var(--orange-color)",ariaLabel:"ball-triangle-loading",wrapperStyle:{},wrapperClass:"",visible:!0})}):f.jsx(U3,{children:f.jsxs(H3,{children:[f.jsx(W3,{children:f.jsx(xw,{})}),f.jsx(G3,{children:"Каталог"}),f.jsx(q3,{children:e.map(i=>f.jsxs(Y3,{to:`/catalog/${i.title}`,children:[f.jsx(X3,{children:f.jsx(K3,{src:i.image,alt:i.title})}),f.jsx(Q3,{children:i.title})]},i.id))})]})})},uM=Ae.div`

padding-top: 100px;
padding-bottom: 250px;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`,cM=Ae.h1`
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
`,dM=Ae.p`
  color: #191919;
  font-size: 18px;
  max-width: 600px;
      text-align: center;
      margin-bottom: 50px;
      @media screen and (min-width: 768px) {
 font-size: 25px;
  }
`,fM=Ae(Oe)`

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

  
`,pM=()=>f.jsxs(uM,{children:[f.jsxs(cM,{children:[" ",f.jsx("span",{children:"404"}),"  PAGE NOT FOUND"]}),f.jsx(dM,{children:" Ой, схоже, ти збився з маршруту! На жаль, ця сторінка безслідно зникла десь на бездоріжжі. Спробуй повернутися на головну "}),f.jsx(fM,{children:" На головну"})]});const hM=k.div`
width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
   font-family: var(--main-font);
`,mM=k.div`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  margin: 0;
`;var Fw={},zw={},nc={},Nw={exports:{}},Xa={};/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var ev=Object.getOwnPropertySymbols,gM=Object.prototype.hasOwnProperty,vM=Object.prototype.propertyIsEnumerable;function yM(e){if(e==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}function xM(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de",Object.getOwnPropertyNames(e)[0]==="5")return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;var r=Object.getOwnPropertyNames(t).map(function(o){return t[o]});if(r.join("")!=="0123456789")return!1;var i={};return"abcdefghijklmnopqrst".split("").forEach(function(o){i[o]=o}),Object.keys(Object.assign({},i)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}var bM=xM()?Object.assign:function(e,t){for(var n,r=yM(e),i,o=1;o<arguments.length;o++){n=Object(arguments[o]);for(var a in n)gM.call(n,a)&&(r[a]=n[a]);if(ev){i=ev(n);for(var l=0;l<i.length;l++)vM.call(n,i[l])&&(r[i[l]]=n[i[l]])}}return r},Bw={exports:{}},le={};/** @license React v17.0.2
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vm=bM,go=60103,Vw=60106;le.Fragment=60107;le.StrictMode=60108;le.Profiler=60114;var Uw=60109,Hw=60110,Ww=60112;le.Suspense=60113;var Gw=60115,qw=60116;if(typeof Symbol=="function"&&Symbol.for){var Zt=Symbol.for;go=Zt("react.element"),Vw=Zt("react.portal"),le.Fragment=Zt("react.fragment"),le.StrictMode=Zt("react.strict_mode"),le.Profiler=Zt("react.profiler"),Uw=Zt("react.provider"),Hw=Zt("react.context"),Ww=Zt("react.forward_ref"),le.Suspense=Zt("react.suspense"),Gw=Zt("react.memo"),qw=Zt("react.lazy")}var tv=typeof Symbol=="function"&&Symbol.iterator;function wM(e){return e===null||typeof e!="object"?null:(e=tv&&e[tv]||e["@@iterator"],typeof e=="function"?e:null)}function Ka(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Yw={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Xw={};function vo(e,t,n){this.props=e,this.context=t,this.refs=Xw,this.updater=n||Yw}vo.prototype.isReactComponent={};vo.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error(Ka(85));this.updater.enqueueSetState(this,e,t,"setState")};vo.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Kw(){}Kw.prototype=vo.prototype;function ym(e,t,n){this.props=e,this.context=t,this.refs=Xw,this.updater=n||Yw}var xm=ym.prototype=new Kw;xm.constructor=ym;vm(xm,vo.prototype);xm.isPureReactComponent=!0;var bm={current:null},Qw=Object.prototype.hasOwnProperty,Zw={key:!0,ref:!0,__self:!0,__source:!0};function Jw(e,t,n){var r,i={},o=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(o=""+t.key),t)Qw.call(t,r)&&!Zw.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var s=Array(l),u=0;u<l;u++)s[u]=arguments[u+2];i.children=s}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:go,type:e,key:o,ref:a,props:i,_owner:bm.current}}function SM(e,t){return{$$typeof:go,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function wm(e){return typeof e=="object"&&e!==null&&e.$$typeof===go}function _M(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var nv=/\/+/g;function wd(e,t){return typeof e=="object"&&e!==null&&e.key!=null?_M(""+e.key):t.toString(36)}function el(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case go:case Vw:a=!0}}if(a)return a=e,i=i(a),e=r===""?"."+wd(a,0):r,Array.isArray(i)?(n="",e!=null&&(n=e.replace(nv,"$&/")+"/"),el(i,t,n,"",function(u){return u})):i!=null&&(wm(i)&&(i=SM(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(nv,"$&/")+"/")+e)),t.push(i)),1;if(a=0,r=r===""?".":r+":",Array.isArray(e))for(var l=0;l<e.length;l++){o=e[l];var s=r+wd(o,l);a+=el(o,t,n,s,i)}else if(s=wM(e),typeof s=="function")for(e=s.call(e),l=0;!(o=e.next()).done;)o=o.value,s=r+wd(o,l++),a+=el(o,t,n,s,i);else if(o==="object")throw t=""+e,Error(Ka(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t));return a}function Ss(e,t,n){if(e==null)return e;var r=[],i=0;return el(e,r,"","",function(o){return t.call(n,o,i++)}),r}function CM(e){if(e._status===-1){var t=e._result;t=t(),e._status=0,e._result=t,t.then(function(n){e._status===0&&(n=n.default,e._status=1,e._result=n)},function(n){e._status===0&&(e._status=2,e._result=n)})}if(e._status===1)return e._result;throw e._result}var eS={current:null};function Zn(){var e=eS.current;if(e===null)throw Error(Ka(321));return e}var EM={ReactCurrentDispatcher:eS,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:bm,IsSomeRendererActing:{current:!1},assign:vm};le.Children={map:Ss,forEach:function(e,t,n){Ss(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Ss(e,function(){t++}),t},toArray:function(e){return Ss(e,function(t){return t})||[]},only:function(e){if(!wm(e))throw Error(Ka(143));return e}};le.Component=vo;le.PureComponent=ym;le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=EM;le.cloneElement=function(e,t,n){if(e==null)throw Error(Ka(267,e));var r=vm({},e.props),i=e.key,o=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,a=bm.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in t)Qw.call(t,s)&&!Zw.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&l!==void 0?l[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){l=Array(s);for(var u=0;u<s;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:go,type:e.type,key:i,ref:o,props:r,_owner:a}};le.createContext=function(e,t){return t===void 0&&(t=null),e={$$typeof:Hw,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider={$$typeof:Uw,_context:e},e.Consumer=e};le.createElement=Jw;le.createFactory=function(e){var t=Jw.bind(null,e);return t.type=e,t};le.createRef=function(){return{current:null}};le.forwardRef=function(e){return{$$typeof:Ww,render:e}};le.isValidElement=wm;le.lazy=function(e){return{$$typeof:qw,_payload:{_status:-1,_result:e},_init:CM}};le.memo=function(e,t){return{$$typeof:Gw,type:e,compare:t===void 0?null:t}};le.useCallback=function(e,t){return Zn().useCallback(e,t)};le.useContext=function(e,t){return Zn().useContext(e,t)};le.useDebugValue=function(){};le.useEffect=function(e,t){return Zn().useEffect(e,t)};le.useImperativeHandle=function(e,t,n){return Zn().useImperativeHandle(e,t,n)};le.useLayoutEffect=function(e,t){return Zn().useLayoutEffect(e,t)};le.useMemo=function(e,t){return Zn().useMemo(e,t)};le.useReducer=function(e,t,n){return Zn().useReducer(e,t,n)};le.useRef=function(e){return Zn().useRef(e)};le.useState=function(e){return Zn().useState(e)};le.version="17.0.2";Bw.exports=le;var kM=Bw.exports;/** @license React v17.0.2
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var PM=kM,tS=60103;Xa.Fragment=60107;if(typeof Symbol=="function"&&Symbol.for){var rv=Symbol.for;tS=rv("react.element"),Xa.Fragment=rv("react.fragment")}var TM=PM.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,OM=Object.prototype.hasOwnProperty,jM={key:!0,ref:!0,__self:!0,__source:!0};function nS(e,t,n){var r,i={},o=null,a=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)OM.call(t,r)&&!jM.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:tS,type:e,key:o,ref:a,props:i,_owner:TM.current}}Xa.jsx=nS;Xa.jsxs=nS;Nw.exports=Xa;var Tt=Nw.exports,rS={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var t={}.hasOwnProperty;function n(){for(var o="",a=0;a<arguments.length;a++){var l=arguments[a];l&&(o=i(o,r(l)))}return o}function r(o){if(typeof o=="string"||typeof o=="number")return o;if(typeof o!="object")return"";if(Array.isArray(o))return n.apply(null,o);if(o.toString!==Object.prototype.toString&&!o.toString.toString().includes("[native code]"))return o.toString();var a="";for(var l in o)t.call(o,l)&&o[l]&&(a=i(a,l));return a}function i(o,a){return a?o?o+" "+a:o+a:o}e.exports?(n.default=n,e.exports=n):window.classNames=n})()})(rS);var Ot=rS.exports;const MM={"lds-circle":"_lds-circle_qlxhy_1"},$M=Object.freeze(Object.defineProperty({__proto__:null,default:MM},Symbol.toStringTag,{value:"Module"})),IM=Pt($M);var iS=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(nc,"__esModule",{value:!0});nc.Circle=void 0;const DM=Tt,LM=iS(Ot),AM=iS(IM);function RM({color:e="#7f58af",size:t=64,className:n,style:r,...i}){return(0,DM.jsx)("div",{className:(0,LM.default)(AM.default["lds-circle"],n),style:{background:e,width:t,height:t,...r},...i})}nc.Circle=RM;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Circle=void 0;var t=nc;Object.defineProperty(e,"Circle",{enumerable:!0,get:function(){return t.Circle}})})(zw);var oS={},rc={};const FM={"lds-default":"_lds-default_wt1n8_1"},zM=Object.freeze(Object.defineProperty({__proto__:null,default:FM},Symbol.toStringTag,{value:"Module"})),NM=Pt(zM);var aS=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(rc,"__esModule",{value:!0});rc.Default=void 0;const iv=Tt,BM=aS(Ot),VM=aS(NM);function UM({color:e="#7f58af",size:t=80,className:n,style:r,...i}){const o=[...Array(12)].map((a,l)=>(0,iv.jsx)("div",{style:{background:`${e}`,width:t*.075,height:t*.075}},l));return(0,iv.jsx)("div",{className:(0,BM.default)(VM.default["lds-default"],n),style:{height:t,width:t,...r},...i,children:o})}rc.Default=UM;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Default=void 0;var t=rc;Object.defineProperty(e,"Default",{enumerable:!0,get:function(){return t.Default}})})(oS);var sS={},ic={};const HM={"lds-dual-ring":"_lds-dual-ring_pbai0_1","lds-dual-ring-after":"_lds-dual-ring-after_pbai0_6"},WM=Object.freeze(Object.defineProperty({__proto__:null,default:HM},Symbol.toStringTag,{value:"Module"})),GM=Pt(WM);var lS=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(ic,"__esModule",{value:!0});ic.DualRing=void 0;const ov=Tt,av=lS(Ot),sv=lS(GM);function qM({color:e="#7f58af",size:t=80,className:n,style:r,...i}){return(0,ov.jsx)("div",{className:(0,av.default)(sv.default["lds-dual-ring"],n),style:{width:t,height:t,...r},...i,children:(0,ov.jsx)("div",{className:(0,av.default)(sv.default["lds-dual-ring-after"]),style:{borderColor:`${e} transparent`,borderWidth:t*.1,width:t*.7-6,height:t*.7-6}})})}ic.DualRing=qM;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.DualRing=void 0;var t=ic;Object.defineProperty(e,"DualRing",{enumerable:!0,get:function(){return t.DualRing}})})(sS);var uS={},oc={};const YM={"lds-ellipsis":"_lds-ellipsis_1fzd3_1","lds-ellipsis1":"_lds-ellipsis1_1fzd3_1","lds-ellipsis2":"_lds-ellipsis2_1fzd3_1","lds-ellipsis3":"_lds-ellipsis3_1fzd3_1"},XM=Object.freeze(Object.defineProperty({__proto__:null,default:YM},Symbol.toStringTag,{value:"Module"})),KM=Pt(XM);var cS=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(oc,"__esModule",{value:!0});oc.Ellipsis=void 0;const lv=Tt,QM=cS(Ot),ZM=cS(KM);function JM({color:e="#7f58af",size:t=80,className:n,style:r,...i}){const o=[...Array(4)].map((a,l)=>(0,lv.jsx)("div",{style:{background:`${e}`}},l));return(0,lv.jsx)("div",{className:(0,QM.default)(ZM.default["lds-ellipsis"],n),style:{...r,width:t,height:t},...i,children:o})}oc.Ellipsis=JM;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Ellipsis=void 0;var t=oc;Object.defineProperty(e,"Ellipsis",{enumerable:!0,get:function(){return t.Ellipsis}})})(uS);var dS={},ac={};const e5={"lds-facebook":"_lds-facebook_1ts9g_1"},t5=Object.freeze(Object.defineProperty({__proto__:null,default:e5},Symbol.toStringTag,{value:"Module"})),n5=Pt(t5);var fS=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(ac,"__esModule",{value:!0});ac.Facebook=void 0;const uv=Tt,r5=fS(Ot),i5=fS(n5);function o5({color:e="#7f58af",size:t=80,className:n,style:r,...i}){const o=[...Array(3)].map((a,l)=>(0,uv.jsx)("div",{style:{background:`${e}`}},l));return(0,uv.jsx)("div",{className:(0,r5.default)(i5.default["lds-facebook"],n),style:{width:t,height:t,...r},...i,children:o})}ac.Facebook=o5;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Facebook=void 0;var t=ac;Object.defineProperty(e,"Facebook",{enumerable:!0,get:function(){return t.Facebook}})})(dS);var pS={},sc={};const a5={"lds-grid":"_lds-grid_1ftub_1"},s5=Object.freeze(Object.defineProperty({__proto__:null,default:a5},Symbol.toStringTag,{value:"Module"})),l5=Pt(s5);var hS=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(sc,"__esModule",{value:!0});sc.Grid=void 0;const cv=Tt,u5=hS(Ot),c5=hS(l5);function d5({color:e="#7f58af",size:t=80,className:n,style:r,...i}){const o=[...Array(9)].map((a,l)=>(0,cv.jsx)("div",{style:{background:`${e}`}},l));return(0,cv.jsx)("div",{className:(0,u5.default)(c5.default["lds-grid"],n),style:{width:t,height:t,...r},...i,children:o})}sc.Grid=d5;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Grid=void 0;var t=sc;Object.defineProperty(e,"Grid",{enumerable:!0,get:function(){return t.Grid}})})(pS);var mS={},lc={};const f5={"lds-heart":"_lds-heart_e4yfg_1","div-after":"_div-after_e4yfg_18","div-before":"_div-before_e4yfg_19"},p5=Object.freeze(Object.defineProperty({__proto__:null,default:f5},Symbol.toStringTag,{value:"Module"})),h5=Pt(p5);var gS=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(lc,"__esModule",{value:!0});lc.Heart=void 0;const _s=Tt,Sd=gS(Ot),_d=gS(h5);function m5({color:e="#7f58af",size:t=80,className:n,style:r,...i}){return(0,_s.jsx)("div",{className:(0,Sd.default)(_d.default["lds-heart"],n),style:{width:t,height:t,...r},...i,children:(0,_s.jsxs)("div",{style:{background:e,width:t*.4,height:t*.4,left:t*.3,top:t*.3},children:[(0,_s.jsx)("div",{className:(0,Sd.default)(_d.default["div-before"]),style:{background:e,width:t*.4,height:t*.4,left:-t*.3}}),(0,_s.jsx)("div",{className:(0,Sd.default)(_d.default["div-after"]),style:{background:e,width:t*.4,height:t*.4,top:-t*.3}})]})})}lc.Heart=m5;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Heart=void 0;var t=lc;Object.defineProperty(e,"Heart",{enumerable:!0,get:function(){return t.Heart}})})(mS);var vS={},uc={};const g5={"lds-hourglass":"_lds-hourglass_mn3qi_1","lds-hourglass-after":"_lds-hourglass-after_mn3qi_7"},v5=Object.freeze(Object.defineProperty({__proto__:null,default:g5},Symbol.toStringTag,{value:"Module"})),y5=Pt(v5);var yS=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(uc,"__esModule",{value:!0});uc.Hourglass=void 0;const dv=Tt,fv=yS(Ot),pv=yS(y5);function x5({color:e="#7f58af",size:t=32,className:n,style:r}){return(0,dv.jsx)("div",{className:(0,fv.default)(pv.default["lds-hourglass"],n),style:{...r},children:(0,dv.jsx)("div",{className:(0,fv.default)(pv.default["lds-hourglass-after"]),style:{background:e,borderWidth:t,borderHeight:t}})})}uc.Hourglass=x5;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Hourglass=void 0;var t=uc;Object.defineProperty(e,"Hourglass",{enumerable:!0,get:function(){return t.Hourglass}})})(vS);var xS={},cc={};const bS="_center_1rufi_10",wS="_spin_1rufi_1",b5={"lds-orbitals":"_lds-orbitals_1rufi_1",center:bS,"outer-spin":"_outer-spin_1rufi_19","inner-spin":"_inner-spin_1rufi_20","inner-arc":"_inner-arc_1rufi_25","inner-arc_start-a":"_inner-arc_start-a_1rufi_32","inner-arc_end-a":"_inner-arc_end-a_1rufi_36","inner-moon-a":"_inner-moon-a_1rufi_40","inner-moon-b":"_inner-moon-b_1rufi_49","inner-arc_start-b":"_inner-arc_start-b_1rufi_58","inner-arc_end-b":"_inner-arc_end-b_1rufi_62","outer-arc":"_outer-arc_1rufi_66","outer-arc_start-a":"_outer-arc_start-a_1rufi_73","outer-arc_end-a":"_outer-arc_end-a_1rufi_77","outer-moon-a":"_outer-moon-a_1rufi_81","outer-moon-b":"_outer-moon-b_1rufi_90","outer-arc_start-b":"_outer-arc_start-b_1rufi_99","outer-arc_end-b":"_outer-arc_end-b_1rufi_103",spin:wS},w5=Object.freeze(Object.defineProperty({__proto__:null,center:bS,default:b5,spin:wS},Symbol.toStringTag,{value:"Module"})),S5=Pt(w5);var SS=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(cc,"__esModule",{value:!0});cc.Orbitals=void 0;const nt=Tt,ct=SS(Ot),Se=SS(S5);function _5({color:e="#7f58af",className:t,style:n}){return(0,nt.jsxs)("div",{className:(0,ct.default)(Se.default["lds-orbitals"],t),style:{...n},children:[(0,nt.jsx)("div",{className:Se.default.center,style:{background:e}}),(0,nt.jsxs)("div",{className:(0,ct.default)(Se.default["inner-spin"]),children:[(0,nt.jsx)("div",{className:(0,ct.default)(Se.default["inner-arc"],Se.default["inner-arc_start-a"]),style:{borderColor:e}}),(0,nt.jsx)("div",{className:(0,ct.default)(Se.default["inner-arc"],Se.default["inner-arc_end-a"]),style:{borderColor:e}}),(0,nt.jsx)("div",{className:(0,ct.default)(Se.default["inner-arc"],Se.default["inner-arc_start-b"]),style:{borderColor:e}}),(0,nt.jsx)("div",{className:(0,ct.default)(Se.default["inner-arc"],Se.default["inner-arc_end-b"]),style:{borderColor:e}}),(0,nt.jsx)("div",{className:(0,ct.default)(Se.default["inner-moon-a"]),style:{background:e}}),(0,nt.jsx)("div",{className:(0,ct.default)(Se.default["inner-moon-b"]),style:{background:e}})]}),(0,nt.jsxs)("div",{className:(0,ct.default)(Se.default["outer-spin"]),children:[(0,nt.jsx)("div",{className:(0,ct.default)(Se.default["outer-arc"],Se.default["outer-arc_start-a"]),style:{borderColor:e}}),(0,nt.jsx)("div",{className:(0,ct.default)(Se.default["outer-arc"],Se.default["outer-arc_end-a"]),style:{borderColor:e}}),(0,nt.jsx)("div",{className:(0,ct.default)(Se.default["outer-arc"],Se.default["outer-arc_start-b"]),style:{borderColor:e}}),(0,nt.jsx)("div",{className:(0,ct.default)(Se.default["outer-arc"],Se.default["outer-arc_end-b"]),style:{borderColor:e}}),(0,nt.jsx)("div",{className:(0,ct.default)(Se.default["outer-moon-a"]),style:{background:e}}),(0,nt.jsx)("div",{className:(0,ct.default)(Se.default["outer-moon-b"]),style:{background:e}})]})]})}cc.Orbitals=_5;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Orbitals=void 0;var t=cc;Object.defineProperty(e,"Orbitals",{enumerable:!0,get:function(){return t.Orbitals}})})(xS);var _S={},dc={};const C5={"lds-ring":"_lds-ring_xgxdp_1"},E5=Object.freeze(Object.defineProperty({__proto__:null,default:C5},Symbol.toStringTag,{value:"Module"})),k5=Pt(E5);var CS=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(dc,"__esModule",{value:!0});dc.Ring=void 0;const hv=Tt,P5=CS(Ot),T5=CS(k5);function O5({color:e="#7f58af",size:t=80,className:n,style:r}){const i=[...Array(4)].map((o,a)=>(0,hv.jsx)("div",{style:{borderColor:`${e} transparent transparent transparent`,width:t*.8,height:t*.8,margin:t*.1,borderWidth:t*.1}},a));return(0,hv.jsx)("div",{className:(0,P5.default)(T5.default["lds-ring"],n),style:{width:t,height:t,...r},children:i})}dc.Ring=O5;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Ring=void 0;var t=dc;Object.defineProperty(e,"Ring",{enumerable:!0,get:function(){return t.Ring}})})(_S);var ES={},fc={};const j5={"lds-ripple":"_lds-ripple_1lgcf_1"},M5=Object.freeze(Object.defineProperty({__proto__:null,default:j5},Symbol.toStringTag,{value:"Module"})),$5=Pt(M5);var kS=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(fc,"__esModule",{value:!0});fc.Ripple=void 0;const mv=Tt,I5=kS(Ot),D5=kS($5);function L5({color:e="#7f58af",size:t=80,className:n,style:r}){const i=[...Array(2)].map((o,a)=>(0,mv.jsx)("div",{style:{borderColor:`${e}`,borderWidth:t*.05}},a));return(0,mv.jsx)("div",{className:(0,I5.default)(D5.default["lds-ripple"],n),style:{width:t,height:t,...r},children:i})}fc.Ripple=L5;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Ripple=void 0;var t=fc;Object.defineProperty(e,"Ripple",{enumerable:!0,get:function(){return t.Ripple}})})(ES);var PS={},pc={};const A5={"lds-roller":"_lds-roller_ks1ij_1","div-after":"_div-after_ks1ij_11"},R5=Object.freeze(Object.defineProperty({__proto__:null,default:A5},Symbol.toStringTag,{value:"Module"})),F5=Pt(R5);var TS=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(pc,"__esModule",{value:!0});pc.Roller=void 0;const Cd=Tt,gv=TS(Ot),vv=TS(F5);function z5({color:e="#7f58af",className:t,style:n}){const r=[...Array(8)].map((i,o)=>(0,Cd.jsx)("div",{children:(0,Cd.jsx)("div",{className:(0,gv.default)(vv.default["div-after"]),style:{background:e}})},o));return(0,Cd.jsx)("div",{className:(0,gv.default)(vv.default["lds-roller"],t),style:{...n},children:r})}pc.Roller=z5;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Roller=void 0;var t=pc;Object.defineProperty(e,"Roller",{enumerable:!0,get:function(){return t.Roller}})})(PS);var OS={},hc={};const N5={"lds-spinner":"_lds-spinner_flf3t_1","div-after":"_div-after_flf3t_12"},B5=Object.freeze(Object.defineProperty({__proto__:null,default:N5},Symbol.toStringTag,{value:"Module"})),V5=Pt(B5);var jS=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(hc,"__esModule",{value:!0});hc.Spinner=void 0;const Ed=Tt,yv=jS(Ot),xv=jS(V5);function U5({color:e="#7f58af",className:t,style:n}){const r=[...Array(12)].map((i,o)=>(0,Ed.jsx)("div",{children:(0,Ed.jsx)("div",{className:(0,yv.default)(xv.default["div-after"]),style:{background:e}})},o));return(0,Ed.jsx)("div",{className:(0,yv.default)(xv.default["lds-spinner"],t),style:{...n},children:r})}hc.Spinner=U5;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Spinner=void 0;var t=hc;Object.defineProperty(e,"Spinner",{enumerable:!0,get:function(){return t.Spinner}})})(OS);var MS={},mc={};const $S="_left_v9vlb_30",IS="_right_v9vlb_33",DS="_anim_v9vlb_37",H5={"lds-ouroboro":"_lds-ouroboro_v9vlb_1",left:$S,right:IS,anim:DS,"lds-ouroboro-rotate":"_lds-ouroboro-rotate_v9vlb_1"},W5=Object.freeze(Object.defineProperty({__proto__:null,anim:DS,default:H5,left:$S,right:IS},Symbol.toStringTag,{value:"Module"})),G5=Pt(W5);var LS=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(mc,"__esModule",{value:!0});mc.Ouroboro=void 0;const Io=Tt,Do=LS(Ot),Lo=LS(G5);function q5({color:e="#7f58af",style:t,className:n}){return(0,Io.jsxs)("div",{className:(0,Do.default)(Lo.default["lds-ouroboro"],n),style:{...t},children:[(0,Io.jsx)("span",{className:(0,Do.default)(Lo.default.left),children:(0,Io.jsx)("span",{className:(0,Do.default)(Lo.default.anim),style:{background:e}})}),(0,Io.jsx)("span",{className:(0,Do.default)(Lo.default.right),children:(0,Io.jsx)("span",{className:(0,Do.default)(Lo.default.anim),style:{background:e}})})]})}mc.Ouroboro=q5;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Ouroboro=void 0;var t=mc;Object.defineProperty(e,"Ouroboro",{enumerable:!0,get:function(){return t.Ouroboro}})})(MS);(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Ouroboro=e.Spinner=e.Roller=e.Ripple=e.Ring=e.Orbitals=e.Hourglass=e.Heart=e.Grid=e.Facebook=e.Ellipsis=e.DualRing=e.Default=e.Circle=void 0;const t=zw;Object.defineProperty(e,"Circle",{enumerable:!0,get:function(){return t.Circle}});const n=oS;Object.defineProperty(e,"Default",{enumerable:!0,get:function(){return n.Default}});const r=sS;Object.defineProperty(e,"DualRing",{enumerable:!0,get:function(){return r.DualRing}});const i=uS;Object.defineProperty(e,"Ellipsis",{enumerable:!0,get:function(){return i.Ellipsis}});const o=dS;Object.defineProperty(e,"Facebook",{enumerable:!0,get:function(){return o.Facebook}});const a=pS;Object.defineProperty(e,"Grid",{enumerable:!0,get:function(){return a.Grid}});const l=mS;Object.defineProperty(e,"Heart",{enumerable:!0,get:function(){return l.Heart}});const s=vS;Object.defineProperty(e,"Hourglass",{enumerable:!0,get:function(){return s.Hourglass}});const u=xS;Object.defineProperty(e,"Orbitals",{enumerable:!0,get:function(){return u.Orbitals}});const d=_S;Object.defineProperty(e,"Ring",{enumerable:!0,get:function(){return d.Ring}});const c=ES;Object.defineProperty(e,"Ripple",{enumerable:!0,get:function(){return c.Ripple}});const y=PS;Object.defineProperty(e,"Roller",{enumerable:!0,get:function(){return y.Roller}});const p=OS;Object.defineProperty(e,"Spinner",{enumerable:!0,get:function(){return p.Spinner}});const m=MS;Object.defineProperty(e,"Ouroboro",{enumerable:!0,get:function(){return m.Ouroboro}})})(Fw);const Y5=()=>f.jsx(mM,{children:f.jsx(Fw.Default,{color:"#6d433da8"})});const X5="/Didiv/assets/Ancient_Kyiv-2153f7e6.ttf",K5=iT`
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
  src: url(${X5}) format('truetype');
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
`,Q5=k.div`
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
`,Z5=k(Oe)`
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
`,J5=k.h2`

  font-size: 30px;
  text-transform: uppercase;
  margin-bottom: 20px;
  color: #333;
  @media screen and (min-width: 768px) {
    font-size: 35px;
  }
`,e$=k.h3`

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
`,t$=k.a`

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
`,n$=k.div`
  width: 40px;
  height: 40px;
  border: 2px solid white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`,r$=()=>{const[e,t]=b.useState([]);return b.useEffect(()=>{async function n(){try{const r=await fetch("https://backenddidiv-production.up.railway.app/api/categories?populate=image&sort=title:asc",{credentials:"omit"});if(!r.ok){console.error("Server error:",r.status);return}const i=await r.json();if(console.log("API response:",i),!i.data){console.error("No data field:",i);return}t(i.data.map(o=>{var a;return{title:o.title,image:(a=o.image)==null?void 0:a.url}}))}catch(r){console.error("Fetch error:",r)}}n()},[]),console.log(e),f.jsxs(f.Fragment,{children:[f.jsx(J5,{children:"Каталог"}),f.jsxs(Q5,{children:[e.slice(0,7).map(n=>f.jsx(Z5,{to:`catalog/${n.title}`,bg:n.image,isBig:n.big,children:f.jsx(e$,{children:n.title})},n.title)),f.jsxs(t$,{href:"catalog",children:[f.jsx("p",{children:"Весь каталог"}),f.jsx(n$,{children:f.jsx($u,{size:24})})]})]})]})};function bv(e){return e!==null&&typeof e=="object"&&"constructor"in e&&e.constructor===Object}function Sm(e={},t={}){const n=["__proto__","constructor","prototype"];Object.keys(t).filter(r=>n.indexOf(r)<0).forEach(r=>{typeof e[r]>"u"?e[r]=t[r]:bv(t[r])&&bv(e[r])&&Object.keys(t[r]).length>0&&Sm(e[r],t[r])})}const AS={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector(){return null},querySelectorAll(){return[]},getElementById(){return null},createEvent(){return{initEvent(){}}},createElement(){return{children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName(){return[]}}},createElementNS(){return{}},importNode(){return null},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function kn(){const e=typeof document<"u"?document:{};return Sm(e,AS),e}const i$={document:AS,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle(){return{getPropertyValue(){return""}}},Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia(){return{}},requestAnimationFrame(e){return typeof setTimeout>"u"?(e(),null):setTimeout(e,0)},cancelAnimationFrame(e){typeof setTimeout>"u"||clearTimeout(e)}};function vt(){const e=typeof window<"u"?window:{};return Sm(e,i$),e}function o$(e=""){return e.trim().split(" ").filter(t=>!!t.trim())}function a$(e){const t=e;Object.keys(t).forEach(n=>{try{t[n]=null}catch{}try{delete t[n]}catch{}})}function RS(e,t=0){return setTimeout(e,t)}function ql(){return Date.now()}function s$(e){const t=vt();let n;return t.getComputedStyle&&(n=t.getComputedStyle(e,null)),!n&&e.currentStyle&&(n=e.currentStyle),n||(n=e.style),n}function l$(e,t="x"){const n=vt();let r,i,o;const a=s$(e);return n.WebKitCSSMatrix?(i=a.transform||a.webkitTransform,i.split(",").length>6&&(i=i.split(", ").map(l=>l.replace(",",".")).join(", ")),o=new n.WebKitCSSMatrix(i==="none"?"":i)):(o=a.MozTransform||a.OTransform||a.MsTransform||a.msTransform||a.transform||a.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),r=o.toString().split(",")),t==="x"&&(n.WebKitCSSMatrix?i=o.m41:r.length===16?i=parseFloat(r[12]):i=parseFloat(r[4])),t==="y"&&(n.WebKitCSSMatrix?i=o.m42:r.length===16?i=parseFloat(r[13]):i=parseFloat(r[5])),i||0}function Cs(e){return typeof e=="object"&&e!==null&&e.constructor&&Object.prototype.toString.call(e).slice(8,-1)==="Object"}function u$(e){return typeof window<"u"&&typeof window.HTMLElement<"u"?e instanceof HTMLElement:e&&(e.nodeType===1||e.nodeType===11)}function Mt(...e){const t=Object(e[0]);for(let n=1;n<e.length;n+=1){const r=e[n];if(r!=null&&!u$(r)){const i=Object.keys(Object(r)).filter(o=>o!=="__proto__"&&o!=="constructor"&&o!=="prototype");for(let o=0,a=i.length;o<a;o+=1){const l=i[o],s=Object.getOwnPropertyDescriptor(r,l);s!==void 0&&s.enumerable&&(Cs(t[l])&&Cs(r[l])?r[l].__swiper__?t[l]=r[l]:Mt(t[l],r[l]):!Cs(t[l])&&Cs(r[l])?(t[l]={},r[l].__swiper__?t[l]=r[l]:Mt(t[l],r[l])):t[l]=r[l])}}}return t}function hi(e,t,n){e.style.setProperty(t,n)}function FS({swiper:e,targetPosition:t,side:n}){const r=vt(),i=-e.translate;let o=null,a;const l=e.params.speed;e.wrapperEl.style.scrollSnapType="none",r.cancelAnimationFrame(e.cssModeFrameID);const s=t>i?"next":"prev",u=(c,y)=>s==="next"&&c>=y||s==="prev"&&c<=y,d=()=>{a=new Date().getTime(),o===null&&(o=a);const c=Math.max(Math.min((a-o)/l,1),0),y=.5-Math.cos(c*Math.PI)/2;let p=i+y*(t-i);if(u(p,t)&&(p=t),e.wrapperEl.scrollTo({[n]:p}),u(p,t)){e.wrapperEl.style.overflow="hidden",e.wrapperEl.style.scrollSnapType="",setTimeout(()=>{e.wrapperEl.style.overflow="",e.wrapperEl.scrollTo({[n]:p})}),r.cancelAnimationFrame(e.cssModeFrameID);return}e.cssModeFrameID=r.requestAnimationFrame(d)};d()}function Sn(e,t=""){const n=vt(),r=[...e.children];return n.HTMLSlotElement&&e instanceof HTMLSlotElement&&r.push(...e.assignedElements()),t?r.filter(i=>i.matches(t)):r}function c$(e,t){const n=[t];for(;n.length>0;){const r=n.shift();if(e===r)return!0;n.push(...r.children,...r.shadowRoot?r.shadowRoot.children:[],...r.assignedElements?r.assignedElements():[])}}function d$(e,t){const n=vt();let r=t.contains(e);return!r&&n.HTMLSlotElement&&t instanceof HTMLSlotElement&&(r=[...t.assignedElements()].includes(e),r||(r=c$(e,t))),r}function Yl(e){try{console.warn(e);return}catch{}}function Xl(e,t=[]){const n=document.createElement(e);return n.classList.add(...Array.isArray(t)?t:o$(t)),n}function f$(e,t){const n=[];for(;e.previousElementSibling;){const r=e.previousElementSibling;t?r.matches(t)&&n.push(r):n.push(r),e=r}return n}function p$(e,t){const n=[];for(;e.nextElementSibling;){const r=e.nextElementSibling;t?r.matches(t)&&n.push(r):n.push(r),e=r}return n}function fr(e,t){return vt().getComputedStyle(e,null).getPropertyValue(t)}function Kl(e){let t=e,n;if(t){for(n=0;(t=t.previousSibling)!==null;)t.nodeType===1&&(n+=1);return n}}function zS(e,t){const n=[];let r=e.parentElement;for(;r;)t?r.matches(t)&&n.push(r):n.push(r),r=r.parentElement;return n}function Pp(e,t,n){const r=vt();return n?e[t==="width"?"offsetWidth":"offsetHeight"]+parseFloat(r.getComputedStyle(e,null).getPropertyValue(t==="width"?"margin-right":"margin-top"))+parseFloat(r.getComputedStyle(e,null).getPropertyValue(t==="width"?"margin-left":"margin-bottom")):e.offsetWidth}function He(e){return(Array.isArray(e)?e:[e]).filter(t=>!!t)}function Da(e,t=""){typeof trustedTypes<"u"?e.innerHTML=trustedTypes.createPolicy("html",{createHTML:n=>n}).createHTML(t):e.innerHTML=t}function NS(e,t,n,r){return e.params.createElements&&Object.keys(r).forEach(i=>{if(!n[i]&&n.auto===!0){let o=Sn(e.el,`.${r[i]}`)[0];o||(o=Xl("div",r[i]),o.className=r[i],e.el.append(o)),n[i]=o,t[i]=o}}),n}const wv='<svg class="swiper-navigation-icon" width="11" height="20" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.38296 20.0762C0.111788 19.805 0.111788 19.3654 0.38296 19.0942L9.19758 10.2796L0.38296 1.46497C0.111788 1.19379 0.111788 0.754138 0.38296 0.482966C0.654131 0.211794 1.09379 0.211794 1.36496 0.482966L10.4341 9.55214C10.8359 9.9539 10.8359 10.6053 10.4341 11.007L1.36496 20.0762C1.09379 20.3474 0.654131 20.3474 0.38296 20.0762Z" fill="currentColor"/></svg>';function h$({swiper:e,extendParams:t,on:n,emit:r}){t({navigation:{nextEl:null,prevEl:null,addIcons:!0,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock",navigationDisabledClass:"swiper-navigation-disabled"}}),e.navigation={nextEl:null,prevEl:null,arrowSvg:wv};function i(p){let m;return p&&typeof p=="string"&&e.isElement&&(m=e.el.querySelector(p)||e.hostEl.querySelector(p),m)?m:(p&&(typeof p=="string"&&(m=[...document.querySelectorAll(p)]),e.params.uniqueNavElements&&typeof p=="string"&&m&&m.length>1&&e.el.querySelectorAll(p).length===1?m=e.el.querySelector(p):m&&m.length===1&&(m=m[0])),p&&!m?p:m)}function o(p,m){const v=e.params.navigation;p=He(p),p.forEach(w=>{w&&(w.classList[m?"add":"remove"](...v.disabledClass.split(" ")),w.tagName==="BUTTON"&&(w.disabled=m),e.params.watchOverflow&&e.enabled&&w.classList[e.isLocked?"add":"remove"](v.lockClass))})}function a(){const{nextEl:p,prevEl:m}=e.navigation;if(e.params.loop){o(m,!1),o(p,!1);return}o(m,e.isBeginning&&!e.params.rewind),o(p,e.isEnd&&!e.params.rewind)}function l(p){p.preventDefault(),!(e.isBeginning&&!e.params.loop&&!e.params.rewind)&&(e.slidePrev(),r("navigationPrev"))}function s(p){p.preventDefault(),!(e.isEnd&&!e.params.loop&&!e.params.rewind)&&(e.slideNext(),r("navigationNext"))}function u(){const p=e.params.navigation;if(e.params.navigation=NS(e,e.originalParams.navigation,e.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),!(p.nextEl||p.prevEl))return;let m=i(p.nextEl),v=i(p.prevEl);Object.assign(e.navigation,{nextEl:m,prevEl:v}),m=He(m),v=He(v);const w=(h,g)=>{if(h){if(p.addIcons&&h.matches(".swiper-button-next,.swiper-button-prev")&&!h.querySelector("svg")){const x=document.createElement("div");Da(x,wv),h.appendChild(x.querySelector("svg")),x.remove()}h.addEventListener("click",g==="next"?s:l)}!e.enabled&&h&&h.classList.add(...p.lockClass.split(" "))};m.forEach(h=>w(h,"next")),v.forEach(h=>w(h,"prev"))}function d(){let{nextEl:p,prevEl:m}=e.navigation;p=He(p),m=He(m);const v=(w,h)=>{w.removeEventListener("click",h==="next"?s:l),w.classList.remove(...e.params.navigation.disabledClass.split(" "))};p.forEach(w=>v(w,"next")),m.forEach(w=>v(w,"prev"))}n("init",()=>{e.params.navigation.enabled===!1?y():(u(),a())}),n("toEdge fromEdge lock unlock",()=>{a()}),n("destroy",()=>{d()}),n("enable disable",()=>{let{nextEl:p,prevEl:m}=e.navigation;if(p=He(p),m=He(m),e.enabled){a();return}[...p,...m].filter(v=>!!v).forEach(v=>v.classList.add(e.params.navigation.lockClass))}),n("click",(p,m)=>{let{nextEl:v,prevEl:w}=e.navigation;v=He(v),w=He(w);const h=m.target;let g=w.includes(h)||v.includes(h);if(e.isElement&&!g){const x=m.path||m.composedPath&&m.composedPath();x&&(g=x.find(S=>v.includes(S)||w.includes(S)))}if(e.params.navigation.hideOnClick&&!g){if(e.pagination&&e.params.pagination&&e.params.pagination.clickable&&(e.pagination.el===h||e.pagination.el.contains(h)))return;let x;v.length?x=v[0].classList.contains(e.params.navigation.hiddenClass):w.length&&(x=w[0].classList.contains(e.params.navigation.hiddenClass)),r(x===!0?"navigationShow":"navigationHide"),[...v,...w].filter(S=>!!S).forEach(S=>S.classList.toggle(e.params.navigation.hiddenClass))}});const c=()=>{e.el.classList.remove(...e.params.navigation.navigationDisabledClass.split(" ")),u(),a()},y=()=>{e.el.classList.add(...e.params.navigation.navigationDisabledClass.split(" ")),d()};Object.assign(e.navigation,{enable:c,disable:y,update:a,init:u,destroy:d})}function Ao(e=""){return`.${e.trim().replace(/([\.:!+\/()[\]#>~*^$|=,'"@{}\\])/g,"\\$1").replace(/ /g,".")}`}function m$({swiper:e,extendParams:t,on:n,emit:r}){const i="swiper-pagination";t({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:h=>h,formatFractionTotal:h=>h,bulletClass:`${i}-bullet`,bulletActiveClass:`${i}-bullet-active`,modifierClass:`${i}-`,currentClass:`${i}-current`,totalClass:`${i}-total`,hiddenClass:`${i}-hidden`,progressbarFillClass:`${i}-progressbar-fill`,progressbarOppositeClass:`${i}-progressbar-opposite`,clickableClass:`${i}-clickable`,lockClass:`${i}-lock`,horizontalClass:`${i}-horizontal`,verticalClass:`${i}-vertical`,paginationDisabledClass:`${i}-disabled`}}),e.pagination={el:null,bullets:[]};let o,a=0;function l(){return!e.params.pagination.el||!e.pagination.el||Array.isArray(e.pagination.el)&&e.pagination.el.length===0}function s(h,g){const{bulletActiveClass:x}=e.params.pagination;h&&(h=h[`${g==="prev"?"previous":"next"}ElementSibling`],h&&(h.classList.add(`${x}-${g}`),h=h[`${g==="prev"?"previous":"next"}ElementSibling`],h&&h.classList.add(`${x}-${g}-${g}`)))}function u(h,g,x){if(h=h%x,g=g%x,g===h+1)return"next";if(g===h-1)return"previous"}function d(h){const g=h.target.closest(Ao(e.params.pagination.bulletClass));if(!g)return;h.preventDefault();const x=Kl(g)*e.params.slidesPerGroup;if(e.params.loop){if(e.realIndex===x)return;const S=u(e.realIndex,x,e.slides.length);S==="next"?e.slideNext():S==="previous"?e.slidePrev():e.slideToLoop(x)}else e.slideTo(x)}function c(){const h=e.rtl,g=e.params.pagination;if(l())return;let x=e.pagination.el;x=He(x);let S,C;const T=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.slides.length,E=e.params.loop?Math.ceil(T/e.params.slidesPerGroup):e.snapGrid.length;if(e.params.loop?(C=e.previousRealIndex||0,S=e.params.slidesPerGroup>1?Math.floor(e.realIndex/e.params.slidesPerGroup):e.realIndex):typeof e.snapIndex<"u"?(S=e.snapIndex,C=e.previousSnapIndex):(C=e.previousIndex||0,S=e.activeIndex||0),g.type==="bullets"&&e.pagination.bullets&&e.pagination.bullets.length>0){const _=e.pagination.bullets;let $,M,R;if(g.dynamicBullets&&(o=Pp(_[0],e.isHorizontal()?"width":"height",!0),x.forEach(A=>{A.style[e.isHorizontal()?"width":"height"]=`${o*(g.dynamicMainBullets+4)}px`}),g.dynamicMainBullets>1&&C!==void 0&&(a+=S-(C||0),a>g.dynamicMainBullets-1?a=g.dynamicMainBullets-1:a<0&&(a=0)),$=Math.max(S-a,0),M=$+(Math.min(_.length,g.dynamicMainBullets)-1),R=(M+$)/2),_.forEach(A=>{const j=[...["","-next","-next-next","-prev","-prev-prev","-main"].map(F=>`${g.bulletActiveClass}${F}`)].map(F=>typeof F=="string"&&F.includes(" ")?F.split(" "):F).flat();A.classList.remove(...j)}),x.length>1)_.forEach(A=>{const j=Kl(A);j===S?A.classList.add(...g.bulletActiveClass.split(" ")):e.isElement&&A.setAttribute("part","bullet"),g.dynamicBullets&&(j>=$&&j<=M&&A.classList.add(...`${g.bulletActiveClass}-main`.split(" ")),j===$&&s(A,"prev"),j===M&&s(A,"next"))});else{const A=_[S];if(A&&A.classList.add(...g.bulletActiveClass.split(" ")),e.isElement&&_.forEach((j,F)=>{j.setAttribute("part",F===S?"bullet-active":"bullet")}),g.dynamicBullets){const j=_[$],F=_[M];for(let L=$;L<=M;L+=1)_[L]&&_[L].classList.add(...`${g.bulletActiveClass}-main`.split(" "));s(j,"prev"),s(F,"next")}}if(g.dynamicBullets){const A=Math.min(_.length,g.dynamicMainBullets+4),j=(o*A-o)/2-R*o,F=h?"right":"left";_.forEach(L=>{L.style[e.isHorizontal()?F:"top"]=`${j}px`})}}x.forEach((_,$)=>{if(g.type==="fraction"&&(_.querySelectorAll(Ao(g.currentClass)).forEach(M=>{M.textContent=g.formatFractionCurrent(S+1)}),_.querySelectorAll(Ao(g.totalClass)).forEach(M=>{M.textContent=g.formatFractionTotal(E)})),g.type==="progressbar"){let M;g.progressbarOpposite?M=e.isHorizontal()?"vertical":"horizontal":M=e.isHorizontal()?"horizontal":"vertical";const R=(S+1)/E;let A=1,j=1;M==="horizontal"?A=R:j=R,_.querySelectorAll(Ao(g.progressbarFillClass)).forEach(F=>{F.style.transform=`translate3d(0,0,0) scaleX(${A}) scaleY(${j})`,F.style.transitionDuration=`${e.params.speed}ms`})}g.type==="custom"&&g.renderCustom?(Da(_,g.renderCustom(e,S+1,E)),$===0&&r("paginationRender",_)):($===0&&r("paginationRender",_),r("paginationUpdate",_)),e.params.watchOverflow&&e.enabled&&_.classList[e.isLocked?"add":"remove"](g.lockClass)})}function y(){const h=e.params.pagination;if(l())return;const g=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.grid&&e.params.grid.rows>1?e.slides.length/Math.ceil(e.params.grid.rows):e.slides.length;let x=e.pagination.el;x=He(x);let S="";if(h.type==="bullets"){let C=e.params.loop?Math.ceil(g/e.params.slidesPerGroup):e.snapGrid.length;e.params.freeMode&&e.params.freeMode.enabled&&C>g&&(C=g);for(let T=0;T<C;T+=1)h.renderBullet?S+=h.renderBullet.call(e,T,h.bulletClass):S+=`<${h.bulletElement} ${e.isElement?'part="bullet"':""} class="${h.bulletClass}"></${h.bulletElement}>`}h.type==="fraction"&&(h.renderFraction?S=h.renderFraction.call(e,h.currentClass,h.totalClass):S=`<span class="${h.currentClass}"></span> / <span class="${h.totalClass}"></span>`),h.type==="progressbar"&&(h.renderProgressbar?S=h.renderProgressbar.call(e,h.progressbarFillClass):S=`<span class="${h.progressbarFillClass}"></span>`),e.pagination.bullets=[],x.forEach(C=>{h.type!=="custom"&&Da(C,S||""),h.type==="bullets"&&e.pagination.bullets.push(...C.querySelectorAll(Ao(h.bulletClass)))}),h.type!=="custom"&&r("paginationRender",x[0])}function p(){e.params.pagination=NS(e,e.originalParams.pagination,e.params.pagination,{el:"swiper-pagination"});const h=e.params.pagination;if(!h.el)return;let g;typeof h.el=="string"&&e.isElement&&(g=e.el.querySelector(h.el)),!g&&typeof h.el=="string"&&(g=[...document.querySelectorAll(h.el)]),g||(g=h.el),!(!g||g.length===0)&&(e.params.uniqueNavElements&&typeof h.el=="string"&&Array.isArray(g)&&g.length>1&&(g=[...e.el.querySelectorAll(h.el)],g.length>1&&(g=g.find(x=>zS(x,".swiper")[0]===e.el))),Array.isArray(g)&&g.length===1&&(g=g[0]),Object.assign(e.pagination,{el:g}),g=He(g),g.forEach(x=>{h.type==="bullets"&&h.clickable&&x.classList.add(...(h.clickableClass||"").split(" ")),x.classList.add(h.modifierClass+h.type),x.classList.add(e.isHorizontal()?h.horizontalClass:h.verticalClass),h.type==="bullets"&&h.dynamicBullets&&(x.classList.add(`${h.modifierClass}${h.type}-dynamic`),a=0,h.dynamicMainBullets<1&&(h.dynamicMainBullets=1)),h.type==="progressbar"&&h.progressbarOpposite&&x.classList.add(h.progressbarOppositeClass),h.clickable&&x.addEventListener("click",d),e.enabled||x.classList.add(h.lockClass)}))}function m(){const h=e.params.pagination;if(l())return;let g=e.pagination.el;g&&(g=He(g),g.forEach(x=>{x.classList.remove(h.hiddenClass),x.classList.remove(h.modifierClass+h.type),x.classList.remove(e.isHorizontal()?h.horizontalClass:h.verticalClass),h.clickable&&(x.classList.remove(...(h.clickableClass||"").split(" ")),x.removeEventListener("click",d))})),e.pagination.bullets&&e.pagination.bullets.forEach(x=>x.classList.remove(...h.bulletActiveClass.split(" ")))}n("changeDirection",()=>{if(!e.pagination||!e.pagination.el)return;const h=e.params.pagination;let{el:g}=e.pagination;g=He(g),g.forEach(x=>{x.classList.remove(h.horizontalClass,h.verticalClass),x.classList.add(e.isHorizontal()?h.horizontalClass:h.verticalClass)})}),n("init",()=>{e.params.pagination.enabled===!1?w():(p(),y(),c())}),n("activeIndexChange",()=>{typeof e.snapIndex>"u"&&c()}),n("snapIndexChange",()=>{c()}),n("snapGridLengthChange",()=>{y(),c()}),n("destroy",()=>{m()}),n("enable disable",()=>{let{el:h}=e.pagination;h&&(h=He(h),h.forEach(g=>g.classList[e.enabled?"remove":"add"](e.params.pagination.lockClass)))}),n("lock unlock",()=>{c()}),n("click",(h,g)=>{const x=g.target,S=He(e.pagination.el);if(e.params.pagination.el&&e.params.pagination.hideOnClick&&S&&S.length>0&&!x.classList.contains(e.params.pagination.bulletClass)){if(e.navigation&&(e.navigation.nextEl&&x===e.navigation.nextEl||e.navigation.prevEl&&x===e.navigation.prevEl))return;const C=S[0].classList.contains(e.params.pagination.hiddenClass);r(C===!0?"paginationShow":"paginationHide"),S.forEach(T=>T.classList.toggle(e.params.pagination.hiddenClass))}});const v=()=>{e.el.classList.remove(e.params.pagination.paginationDisabledClass);let{el:h}=e.pagination;h&&(h=He(h),h.forEach(g=>g.classList.remove(e.params.pagination.paginationDisabledClass))),p(),y(),c()},w=()=>{e.el.classList.add(e.params.pagination.paginationDisabledClass);let{el:h}=e.pagination;h&&(h=He(h),h.forEach(g=>g.classList.add(e.params.pagination.paginationDisabledClass))),m()};Object.assign(e.pagination,{enable:v,disable:w,render:y,update:c,init:p,destroy:m})}function g$({swiper:e,extendParams:t,on:n,emit:r,params:i}){e.autoplay={running:!1,paused:!1,timeLeft:0},t({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!1,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}});let o,a,l=i&&i.autoplay?i.autoplay.delay:3e3,s=i&&i.autoplay?i.autoplay.delay:3e3,u,d=new Date().getTime(),c,y,p,m,v,w;function h(D){!e||e.destroyed||!e.wrapperEl||D.target===e.wrapperEl&&(e.wrapperEl.removeEventListener("transitionend",h),!(w||D.detail&&D.detail.bySwiperTouchMove)&&$())}const g=()=>{if(e.destroyed||!e.autoplay.running)return;e.autoplay.paused?c=!0:c&&(s=u,c=!1);const D=e.autoplay.paused?u:d+s-new Date().getTime();e.autoplay.timeLeft=D,r("autoplayTimeLeft",D,D/l),a=requestAnimationFrame(()=>{g()})},x=()=>{let D;return e.virtual&&e.params.virtual.enabled?D=e.slides.find(I=>I.classList.contains("swiper-slide-active")):D=e.slides[e.activeIndex],D?parseInt(D.getAttribute("data-swiper-autoplay"),10):void 0},S=()=>{let D=e.params.autoplay.delay;const P=x();return!Number.isNaN(P)&&P>0&&(D=P),D},C=D=>{if(e.destroyed||!e.autoplay.running)return;cancelAnimationFrame(a),g();let P=D;typeof P>"u"&&(P=S(),l=P,s=P),u=P;const I=e.params.speed,z=()=>{!e||e.destroyed||(e.params.autoplay.reverseDirection?!e.isBeginning||e.params.loop||e.params.rewind?(e.slidePrev(I,!0,!0),r("autoplay")):e.params.autoplay.stopOnLastSlide||(e.slideTo(e.slides.length-1,I,!0,!0),r("autoplay")):!e.isEnd||e.params.loop||e.params.rewind?(e.slideNext(I,!0,!0),r("autoplay")):e.params.autoplay.stopOnLastSlide||(e.slideTo(0,I,!0,!0),r("autoplay")),e.params.cssMode&&(d=new Date().getTime(),requestAnimationFrame(()=>{C()})))};return P>0?(clearTimeout(o),o=setTimeout(()=>{z()},P)):requestAnimationFrame(()=>{z()}),P},T=()=>{d=new Date().getTime(),e.autoplay.running=!0,C(),r("autoplayStart")},E=()=>{e.autoplay.running=!1,clearTimeout(o),cancelAnimationFrame(a),r("autoplayStop")},_=(D,P)=>{if(e.destroyed||!e.autoplay.running)return;clearTimeout(o),D||(v=!0);const I=()=>{r("autoplayPause"),e.params.autoplay.waitForTransition?e.wrapperEl.addEventListener("transitionend",h):$()};if(e.autoplay.paused=!0,P){I();return}u=(u||e.params.autoplay.delay)-(new Date().getTime()-d),!(e.isEnd&&u<0&&!e.params.loop)&&(u<0&&(u=0),I())},$=()=>{e.isEnd&&u<0&&!e.params.loop||e.destroyed||!e.autoplay.running||(d=new Date().getTime(),v?(v=!1,C(u)):C(),e.autoplay.paused=!1,r("autoplayResume"))},M=()=>{if(e.destroyed||!e.autoplay.running)return;const D=kn();D.visibilityState==="hidden"&&(v=!0,_(!0)),D.visibilityState==="visible"&&$()},R=D=>{D.pointerType==="mouse"&&(v=!0,w=!0,!(e.animating||e.autoplay.paused)&&_(!0))},A=D=>{D.pointerType==="mouse"&&(w=!1,e.autoplay.paused&&$())},j=()=>{e.params.autoplay.pauseOnMouseEnter&&(e.el.addEventListener("pointerenter",R),e.el.addEventListener("pointerleave",A))},F=()=>{e.el&&typeof e.el!="string"&&(e.el.removeEventListener("pointerenter",R),e.el.removeEventListener("pointerleave",A))},L=()=>{kn().addEventListener("visibilitychange",M)},O=()=>{kn().removeEventListener("visibilitychange",M)};n("init",()=>{e.params.autoplay.enabled&&(j(),L(),T())}),n("destroy",()=>{F(),O(),e.autoplay.running&&E()}),n("_freeModeStaticRelease",()=>{(p||v)&&$()}),n("_freeModeNoMomentumRelease",()=>{e.params.autoplay.disableOnInteraction?E():_(!0,!0)}),n("beforeTransitionStart",(D,P,I)=>{e.destroyed||!e.autoplay.running||(I||!e.params.autoplay.disableOnInteraction?_(!0,!0):E())}),n("sliderFirstMove",()=>{if(!(e.destroyed||!e.autoplay.running)){if(e.params.autoplay.disableOnInteraction){E();return}y=!0,p=!1,v=!1,m=setTimeout(()=>{v=!0,p=!0,_(!0)},200)}}),n("touchEnd",()=>{if(!(e.destroyed||!e.autoplay.running||!y)){if(clearTimeout(m),clearTimeout(o),e.params.autoplay.disableOnInteraction){p=!1,y=!1;return}p&&e.params.cssMode&&$(),p=!1,y=!1}}),n("slideChange",()=>{e.destroyed||!e.autoplay.running||e.autoplay.paused&&(u=S(),l=S())}),Object.assign(e.autoplay,{start:T,stop:E,pause:_,resume:$})}let kd;function v$(){const e=vt(),t=kn();return{smoothScroll:t.documentElement&&t.documentElement.style&&"scrollBehavior"in t.documentElement.style,touch:!!("ontouchstart"in e||e.DocumentTouch&&t instanceof e.DocumentTouch)}}function BS(){return kd||(kd=v$()),kd}let Pd;function y$({userAgent:e}={}){const t=BS(),n=vt(),r=n.navigator.platform,i=e||n.navigator.userAgent,o={ios:!1,android:!1},a=n.screen.width,l=n.screen.height,s=i.match(/(Android);?[\s\/]+([\d.]+)?/);let u=i.match(/(iPad)(?!\1).*OS\s([\d_]+)/);const d=i.match(/(iPod)(.*OS\s([\d_]+))?/),c=!u&&i.match(/(iPhone\sOS|iOS)\s([\d_]+)/),y=r==="Win32";let p=r==="MacIntel";const m=["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"];return!u&&p&&t.touch&&m.indexOf(`${a}x${l}`)>=0&&(u=i.match(/(Version)\/([\d.]+)/),u||(u=[0,1,"13_0_0"]),p=!1),s&&!y&&(o.os="android",o.android=!0),(u||c||d)&&(o.os="ios",o.ios=!0),o}function VS(e={}){return Pd||(Pd=y$(e)),Pd}let Td;function x$(){const e=vt(),t=VS();let n=!1;function r(){const l=e.navigator.userAgent.toLowerCase();return l.indexOf("safari")>=0&&l.indexOf("chrome")<0&&l.indexOf("android")<0}if(r()){const l=String(e.navigator.userAgent);if(l.includes("Version/")){const[s,u]=l.split("Version/")[1].split(" ")[0].split(".").map(d=>Number(d));n=s<16||s===16&&u<2}}const i=/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent),o=r(),a=o||i&&t.ios;return{isSafari:n||o,needPerspectiveFix:n,need3dFix:a,isWebView:i}}function US(){return Td||(Td=x$()),Td}function b$({swiper:e,on:t,emit:n}){const r=vt();let i=null,o=null;const a=()=>{!e||e.destroyed||!e.initialized||(n("beforeResize"),n("resize"))},l=()=>{!e||e.destroyed||!e.initialized||(i=new ResizeObserver(d=>{o=r.requestAnimationFrame(()=>{const{width:c,height:y}=e;let p=c,m=y;d.forEach(({contentBoxSize:v,contentRect:w,target:h})=>{h&&h!==e.el||(p=w?w.width:(v[0]||v).inlineSize,m=w?w.height:(v[0]||v).blockSize)}),(p!==c||m!==y)&&a()})}),i.observe(e.el))},s=()=>{o&&r.cancelAnimationFrame(o),i&&i.unobserve&&e.el&&(i.unobserve(e.el),i=null)},u=()=>{!e||e.destroyed||!e.initialized||n("orientationchange")};t("init",()=>{if(e.params.resizeObserver&&typeof r.ResizeObserver<"u"){l();return}r.addEventListener("resize",a),r.addEventListener("orientationchange",u)}),t("destroy",()=>{s(),r.removeEventListener("resize",a),r.removeEventListener("orientationchange",u)})}function w$({swiper:e,extendParams:t,on:n,emit:r}){const i=[],o=vt(),a=(u,d={})=>{const c=o.MutationObserver||o.WebkitMutationObserver,y=new c(p=>{if(e.__preventObserver__)return;if(p.length===1){r("observerUpdate",p[0]);return}const m=function(){r("observerUpdate",p[0])};o.requestAnimationFrame?o.requestAnimationFrame(m):o.setTimeout(m,0)});y.observe(u,{attributes:typeof d.attributes>"u"?!0:d.attributes,childList:e.isElement||(typeof d.childList>"u"?!0:d).childList,characterData:typeof d.characterData>"u"?!0:d.characterData}),i.push(y)},l=()=>{if(e.params.observer){if(e.params.observeParents){const u=zS(e.hostEl);for(let d=0;d<u.length;d+=1)a(u[d])}a(e.hostEl,{childList:e.params.observeSlideChildren}),a(e.wrapperEl,{attributes:!1})}},s=()=>{i.forEach(u=>{u.disconnect()}),i.splice(0,i.length)};t({observer:!1,observeParents:!1,observeSlideChildren:!1}),n("init",l),n("destroy",s)}var S$={on(e,t,n){const r=this;if(!r.eventsListeners||r.destroyed||typeof t!="function")return r;const i=n?"unshift":"push";return e.split(" ").forEach(o=>{r.eventsListeners[o]||(r.eventsListeners[o]=[]),r.eventsListeners[o][i](t)}),r},once(e,t,n){const r=this;if(!r.eventsListeners||r.destroyed||typeof t!="function")return r;function i(...o){r.off(e,i),i.__emitterProxy&&delete i.__emitterProxy,t.apply(r,o)}return i.__emitterProxy=t,r.on(e,i,n)},onAny(e,t){const n=this;if(!n.eventsListeners||n.destroyed||typeof e!="function")return n;const r=t?"unshift":"push";return n.eventsAnyListeners.indexOf(e)<0&&n.eventsAnyListeners[r](e),n},offAny(e){const t=this;if(!t.eventsListeners||t.destroyed||!t.eventsAnyListeners)return t;const n=t.eventsAnyListeners.indexOf(e);return n>=0&&t.eventsAnyListeners.splice(n,1),t},off(e,t){const n=this;return!n.eventsListeners||n.destroyed||!n.eventsListeners||e.split(" ").forEach(r=>{typeof t>"u"?n.eventsListeners[r]=[]:n.eventsListeners[r]&&n.eventsListeners[r].forEach((i,o)=>{(i===t||i.__emitterProxy&&i.__emitterProxy===t)&&n.eventsListeners[r].splice(o,1)})}),n},emit(...e){const t=this;if(!t.eventsListeners||t.destroyed||!t.eventsListeners)return t;let n,r,i;return typeof e[0]=="string"||Array.isArray(e[0])?(n=e[0],r=e.slice(1,e.length),i=t):(n=e[0].events,r=e[0].data,i=e[0].context||t),r.unshift(i),(Array.isArray(n)?n:n.split(" ")).forEach(a=>{t.eventsAnyListeners&&t.eventsAnyListeners.length&&t.eventsAnyListeners.forEach(l=>{l.apply(i,[a,...r])}),t.eventsListeners&&t.eventsListeners[a]&&t.eventsListeners[a].forEach(l=>{l.apply(i,r)})}),t}};function _$(){const e=this;let t,n;const r=e.el;typeof e.params.width<"u"&&e.params.width!==null?t=e.params.width:t=r.clientWidth,typeof e.params.height<"u"&&e.params.height!==null?n=e.params.height:n=r.clientHeight,!(t===0&&e.isHorizontal()||n===0&&e.isVertical())&&(t=t-parseInt(fr(r,"padding-left")||0,10)-parseInt(fr(r,"padding-right")||0,10),n=n-parseInt(fr(r,"padding-top")||0,10)-parseInt(fr(r,"padding-bottom")||0,10),Number.isNaN(t)&&(t=0),Number.isNaN(n)&&(n=0),Object.assign(e,{width:t,height:n,size:e.isHorizontal()?t:n}))}function C$(){const e=this;function t(M,R){return parseFloat(M.getPropertyValue(e.getDirectionLabel(R))||0)}const n=e.params,{wrapperEl:r,slidesEl:i,rtlTranslate:o,wrongRTL:a}=e,l=e.virtual&&n.virtual.enabled,s=l?e.virtual.slides.length:e.slides.length,u=Sn(i,`.${e.params.slideClass}, swiper-slide`),d=l?e.virtual.slides.length:u.length;let c=[];const y=[],p=[];let m=n.slidesOffsetBefore;typeof m=="function"&&(m=n.slidesOffsetBefore.call(e));let v=n.slidesOffsetAfter;typeof v=="function"&&(v=n.slidesOffsetAfter.call(e));const w=e.snapGrid.length,h=e.slidesGrid.length,g=e.size-m-v;let x=n.spaceBetween,S=-m,C=0,T=0;if(typeof g>"u")return;typeof x=="string"&&x.indexOf("%")>=0?x=parseFloat(x.replace("%",""))/100*g:typeof x=="string"&&(x=parseFloat(x)),e.virtualSize=-x-m-v,u.forEach(M=>{o?M.style.marginLeft="":M.style.marginRight="",M.style.marginBottom="",M.style.marginTop=""}),n.centeredSlides&&n.cssMode&&(hi(r,"--swiper-centered-offset-before",""),hi(r,"--swiper-centered-offset-after","")),n.cssMode&&(hi(r,"--swiper-slides-offset-before",`${m}px`),hi(r,"--swiper-slides-offset-after",`${v}px`));const E=n.grid&&n.grid.rows>1&&e.grid;E?e.grid.initSlides(u):e.grid&&e.grid.unsetSlides();let _;const $=n.slidesPerView==="auto"&&n.breakpoints&&Object.keys(n.breakpoints).filter(M=>typeof n.breakpoints[M].slidesPerView<"u").length>0;for(let M=0;M<d;M+=1){_=0;const R=u[M];if(!(R&&(E&&e.grid.updateSlide(M,R,u),fr(R,"display")==="none"))){if(l&&n.slidesPerView==="auto")n.virtual.slidesPerViewAutoSlideSize&&(_=n.virtual.slidesPerViewAutoSlideSize),_&&R&&(n.roundLengths&&(_=Math.floor(_)),R.style[e.getDirectionLabel("width")]=`${_}px`);else if(n.slidesPerView==="auto"){$&&(R.style[e.getDirectionLabel("width")]="");const A=getComputedStyle(R),j=R.style.transform,F=R.style.webkitTransform;if(j&&(R.style.transform="none"),F&&(R.style.webkitTransform="none"),n.roundLengths)_=e.isHorizontal()?Pp(R,"width",!0):Pp(R,"height",!0);else{const L=t(A,"width"),O=t(A,"padding-left"),D=t(A,"padding-right"),P=t(A,"margin-left"),I=t(A,"margin-right"),z=A.getPropertyValue("box-sizing");if(z&&z==="border-box")_=L+P+I;else{const{clientWidth:B,offsetWidth:N}=R;_=L+O+D+P+I+(N-B)}}j&&(R.style.transform=j),F&&(R.style.webkitTransform=F),n.roundLengths&&(_=Math.floor(_))}else _=(g-(n.slidesPerView-1)*x)/n.slidesPerView,n.roundLengths&&(_=Math.floor(_)),R&&(R.style[e.getDirectionLabel("width")]=`${_}px`);R&&(R.swiperSlideSize=_),p.push(_),n.centeredSlides?(S=S+_/2+C/2+x,C===0&&M!==0&&(S=S-g/2-x),M===0&&(S=S-g/2-x),Math.abs(S)<1/1e3&&(S=0),n.roundLengths&&(S=Math.floor(S)),T%n.slidesPerGroup===0&&c.push(S),y.push(S)):(n.roundLengths&&(S=Math.floor(S)),(T-Math.min(e.params.slidesPerGroupSkip,T))%e.params.slidesPerGroup===0&&c.push(S),y.push(S),S=S+_+x),e.virtualSize+=_+x,C=_,T+=1}}if(e.virtualSize=Math.max(e.virtualSize,g)+v,o&&a&&(n.effect==="slide"||n.effect==="coverflow")&&(r.style.width=`${e.virtualSize+x}px`),n.setWrapperSize&&(r.style[e.getDirectionLabel("width")]=`${e.virtualSize+x}px`),E&&e.grid.updateWrapperSize(_,c),!n.centeredSlides){const M=n.slidesPerView!=="auto"&&n.slidesPerView%1!==0,R=n.snapToSlideEdge&&!n.loop&&(n.slidesPerView==="auto"||M);let A=c.length;if(R){let F;if(n.slidesPerView==="auto"){F=1;let L=0;for(let O=p.length-1;O>=0&&(L+=p[O]+(O<p.length-1?x:0),L<=g);O-=1)F=p.length-O}else F=Math.floor(n.slidesPerView);A=Math.max(d-F,0)}const j=[];for(let F=0;F<c.length;F+=1){let L=c[F];n.roundLengths&&(L=Math.floor(L)),R?F<=A&&j.push(L):c[F]<=e.virtualSize-g&&j.push(L)}c=j,Math.floor(e.virtualSize-g)-Math.floor(c[c.length-1])>1&&(R||c.push(e.virtualSize-g))}if(l&&n.loop){const M=p[0]+x;if(n.slidesPerGroup>1){const R=Math.ceil((e.virtual.slidesBefore+e.virtual.slidesAfter)/n.slidesPerGroup),A=M*n.slidesPerGroup;for(let j=0;j<R;j+=1)c.push(c[c.length-1]+A)}for(let R=0;R<e.virtual.slidesBefore+e.virtual.slidesAfter;R+=1)n.slidesPerGroup===1&&c.push(c[c.length-1]+M),y.push(y[y.length-1]+M),e.virtualSize+=M}if(c.length===0&&(c=[0]),x!==0){const M=e.isHorizontal()&&o?"marginLeft":e.getDirectionLabel("marginRight");u.filter((R,A)=>!n.cssMode||n.loop?!0:A!==u.length-1).forEach(R=>{R.style[M]=`${x}px`})}if(n.centeredSlides&&n.centeredSlidesBounds){let M=0;p.forEach(A=>{M+=A+(x||0)}),M-=x;const R=M>g?M-g:0;c=c.map(A=>A<=0?-m:A>R?R+v:A)}if(n.centerInsufficientSlides){let M=0;if(p.forEach(R=>{M+=R+(x||0)}),M-=x,M<g){const R=(g-M)/2;c.forEach((A,j)=>{c[j]=A-R}),y.forEach((A,j)=>{y[j]=A+R})}}if(Object.assign(e,{slides:u,snapGrid:c,slidesGrid:y,slidesSizesGrid:p}),n.centeredSlides&&n.cssMode&&!n.centeredSlidesBounds){hi(r,"--swiper-centered-offset-before",`${-c[0]}px`),hi(r,"--swiper-centered-offset-after",`${e.size/2-p[p.length-1]/2}px`);const M=-e.snapGrid[0],R=-e.slidesGrid[0];e.snapGrid=e.snapGrid.map(A=>A+M),e.slidesGrid=e.slidesGrid.map(A=>A+R)}if(d!==s&&e.emit("slidesLengthChange"),c.length!==w&&(e.params.watchOverflow&&e.checkOverflow(),e.emit("snapGridLengthChange")),y.length!==h&&e.emit("slidesGridLengthChange"),n.watchSlidesProgress&&e.updateSlidesOffset(),e.emit("slidesUpdated"),!l&&!n.cssMode&&(n.effect==="slide"||n.effect==="fade")){const M=`${n.containerModifierClass}backface-hidden`,R=e.el.classList.contains(M);d<=n.maxBackfaceHiddenSlides?R||e.el.classList.add(M):R&&e.el.classList.remove(M)}}function E$(e){const t=this,n=[],r=t.virtual&&t.params.virtual.enabled;let i=0,o;typeof e=="number"?t.setTransition(e):e===!0&&t.setTransition(t.params.speed);const a=l=>r?t.slides[t.getSlideIndexByData(l)]:t.slides[l];if(t.params.slidesPerView!=="auto"&&t.params.slidesPerView>1)if(t.params.centeredSlides)(t.visibleSlides||[]).forEach(l=>{n.push(l)});else for(o=0;o<Math.ceil(t.params.slidesPerView);o+=1){const l=t.activeIndex+o;if(l>t.slides.length&&!r)break;n.push(a(l))}else n.push(a(t.activeIndex));for(o=0;o<n.length;o+=1)if(typeof n[o]<"u"){const l=n[o].offsetHeight;i=l>i?l:i}(i||i===0)&&(t.wrapperEl.style.height=`${i}px`)}function k$(){const e=this,t=e.slides,n=e.isElement?e.isHorizontal()?e.wrapperEl.offsetLeft:e.wrapperEl.offsetTop:0;for(let r=0;r<t.length;r+=1)t[r].swiperSlideOffset=(e.isHorizontal()?t[r].offsetLeft:t[r].offsetTop)-n-e.cssOverflowAdjustment()}const Sv=(e,t,n)=>{t&&!e.classList.contains(n)?e.classList.add(n):!t&&e.classList.contains(n)&&e.classList.remove(n)};function P$(e=this&&this.translate||0){const t=this,n=t.params,{slides:r,rtlTranslate:i,snapGrid:o}=t;if(r.length===0)return;typeof r[0].swiperSlideOffset>"u"&&t.updateSlidesOffset();let a=-e;i&&(a=e),t.visibleSlidesIndexes=[],t.visibleSlides=[];let l=n.spaceBetween;typeof l=="string"&&l.indexOf("%")>=0?l=parseFloat(l.replace("%",""))/100*t.size:typeof l=="string"&&(l=parseFloat(l));for(let s=0;s<r.length;s+=1){const u=r[s];let d=u.swiperSlideOffset;n.cssMode&&n.centeredSlides&&(d-=r[0].swiperSlideOffset);const c=(a+(n.centeredSlides?t.minTranslate():0)-d)/(u.swiperSlideSize+l),y=(a-o[0]+(n.centeredSlides?t.minTranslate():0)-d)/(u.swiperSlideSize+l),p=-(a-d),m=p+t.slidesSizesGrid[s],v=p>=0&&p<=t.size-t.slidesSizesGrid[s],w=p>=0&&p<t.size-1||m>1&&m<=t.size||p<=0&&m>=t.size;w&&(t.visibleSlides.push(u),t.visibleSlidesIndexes.push(s)),Sv(u,w,n.slideVisibleClass),Sv(u,v,n.slideFullyVisibleClass),u.progress=i?-c:c,u.originalProgress=i?-y:y}}function T$(e){const t=this;if(typeof e>"u"){const d=t.rtlTranslate?-1:1;e=t&&t.translate&&t.translate*d||0}const n=t.params,r=t.maxTranslate()-t.minTranslate();let{progress:i,isBeginning:o,isEnd:a,progressLoop:l}=t;const s=o,u=a;if(r===0)i=0,o=!0,a=!0;else{i=(e-t.minTranslate())/r;const d=Math.abs(e-t.minTranslate())<1,c=Math.abs(e-t.maxTranslate())<1;o=d||i<=0,a=c||i>=1,d&&(i=0),c&&(i=1)}if(n.loop){const d=t.getSlideIndexByData(0),c=t.getSlideIndexByData(t.slides.length-1),y=t.slidesGrid[d],p=t.slidesGrid[c],m=t.slidesGrid[t.slidesGrid.length-1],v=Math.abs(e);v>=y?l=(v-y)/m:l=(v+m-p)/m,l>1&&(l-=1)}Object.assign(t,{progress:i,progressLoop:l,isBeginning:o,isEnd:a}),(n.watchSlidesProgress||n.centeredSlides&&n.autoHeight)&&t.updateSlidesProgress(e),o&&!s&&t.emit("reachBeginning toEdge"),a&&!u&&t.emit("reachEnd toEdge"),(s&&!o||u&&!a)&&t.emit("fromEdge"),t.emit("progress",i)}const Od=(e,t,n)=>{t&&!e.classList.contains(n)?e.classList.add(n):!t&&e.classList.contains(n)&&e.classList.remove(n)};function O$(){const e=this,{slides:t,params:n,slidesEl:r,activeIndex:i}=e,o=e.virtual&&n.virtual.enabled,a=e.grid&&n.grid&&n.grid.rows>1,l=c=>Sn(r,`.${n.slideClass}${c}, swiper-slide${c}`)[0];let s,u,d;if(o)if(n.loop){let c=i-e.virtual.slidesBefore;c<0&&(c=e.virtual.slides.length+c),c>=e.virtual.slides.length&&(c-=e.virtual.slides.length),s=l(`[data-swiper-slide-index="${c}"]`)}else s=l(`[data-swiper-slide-index="${i}"]`);else a?(s=t.find(c=>c.column===i),d=t.find(c=>c.column===i+1),u=t.find(c=>c.column===i-1)):s=t[i];s&&(a||(d=p$(s,`.${n.slideClass}, swiper-slide`)[0],n.loop&&!d&&(d=t[0]),u=f$(s,`.${n.slideClass}, swiper-slide`)[0],n.loop&&!u===0&&(u=t[t.length-1]))),t.forEach(c=>{Od(c,c===s,n.slideActiveClass),Od(c,c===d,n.slideNextClass),Od(c,c===u,n.slidePrevClass)}),e.emitSlidesClasses()}const tl=(e,t)=>{if(!e||e.destroyed||!e.params)return;const n=()=>e.isElement?"swiper-slide":`.${e.params.slideClass}`,r=t.closest(n());if(r){let i=r.querySelector(`.${e.params.lazyPreloaderClass}`);!i&&e.isElement&&(r.shadowRoot?i=r.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`):requestAnimationFrame(()=>{r.shadowRoot&&(i=r.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`),i&&!i.lazyPreloaderManaged&&i.remove())})),i&&!i.lazyPreloaderManaged&&i.remove()}},jd=(e,t)=>{if(!e.slides[t])return;const n=e.slides[t].querySelector('[loading="lazy"]');n&&n.removeAttribute("loading")},Tp=e=>{if(!e||e.destroyed||!e.params)return;let t=e.params.lazyPreloadPrevNext;const n=e.slides.length;if(!n||!t||t<0)return;t=Math.min(t,n);const r=e.params.slidesPerView==="auto"?e.slidesPerViewDynamic():Math.ceil(e.params.slidesPerView),i=e.activeIndex;if(e.params.grid&&e.params.grid.rows>1){const a=i,l=[a-t];l.push(...Array.from({length:t}).map((s,u)=>a+r+u)),e.slides.forEach((s,u)=>{l.includes(s.column)&&jd(e,u)});return}const o=i+r-1;if(e.params.rewind||e.params.loop)for(let a=i-t;a<=o+t;a+=1){const l=(a%n+n)%n;(l<i||l>o)&&jd(e,l)}else for(let a=Math.max(i-t,0);a<=Math.min(o+t,n-1);a+=1)a!==i&&(a>o||a<i)&&jd(e,a)};function j$(e){const{slidesGrid:t,params:n}=e,r=e.rtlTranslate?e.translate:-e.translate;let i;for(let o=0;o<t.length;o+=1)typeof t[o+1]<"u"?r>=t[o]&&r<t[o+1]-(t[o+1]-t[o])/2?i=o:r>=t[o]&&r<t[o+1]&&(i=o+1):r>=t[o]&&(i=o);return n.normalizeSlideIndex&&(i<0||typeof i>"u")&&(i=0),i}function M$(e){const t=this,n=t.rtlTranslate?t.translate:-t.translate,{snapGrid:r,params:i,activeIndex:o,realIndex:a,snapIndex:l}=t;let s=e,u;const d=p=>{let m=p-t.virtual.slidesBefore;return m<0&&(m=t.virtual.slides.length+m),m>=t.virtual.slides.length&&(m-=t.virtual.slides.length),m};if(typeof s>"u"&&(s=j$(t)),r.indexOf(n)>=0)u=r.indexOf(n);else{const p=Math.min(i.slidesPerGroupSkip,s);u=p+Math.floor((s-p)/i.slidesPerGroup)}if(u>=r.length&&(u=r.length-1),s===o&&!t.params.loop){u!==l&&(t.snapIndex=u,t.emit("snapIndexChange"));return}if(s===o&&t.params.loop&&t.virtual&&t.params.virtual.enabled){t.realIndex=d(s);return}const c=t.grid&&i.grid&&i.grid.rows>1;let y;if(t.virtual&&i.virtual.enabled)i.loop?y=d(s):y=s;else if(c){const p=t.slides.find(v=>v.column===s);let m=parseInt(p.getAttribute("data-swiper-slide-index"),10);Number.isNaN(m)&&(m=Math.max(t.slides.indexOf(p),0)),y=Math.floor(m/i.grid.rows)}else if(t.slides[s]){const p=t.slides[s].getAttribute("data-swiper-slide-index");p?y=parseInt(p,10):y=s}else y=s;Object.assign(t,{previousSnapIndex:l,snapIndex:u,previousRealIndex:a,realIndex:y,previousIndex:o,activeIndex:s}),t.initialized&&Tp(t),t.emit("activeIndexChange"),t.emit("snapIndexChange"),(t.initialized||t.params.runCallbacksOnInit)&&(a!==y&&t.emit("realIndexChange"),t.emit("slideChange"))}function $$(e,t){const n=this,r=n.params;let i=e.closest(`.${r.slideClass}, swiper-slide`);!i&&n.isElement&&t&&t.length>1&&t.includes(e)&&[...t.slice(t.indexOf(e)+1,t.length)].forEach(l=>{!i&&l.matches&&l.matches(`.${r.slideClass}, swiper-slide`)&&(i=l)});let o=!1,a;if(i){for(let l=0;l<n.slides.length;l+=1)if(n.slides[l]===i){o=!0,a=l;break}}if(i&&o)n.clickedSlide=i,n.virtual&&n.params.virtual.enabled?n.clickedIndex=parseInt(i.getAttribute("data-swiper-slide-index"),10):n.clickedIndex=a;else{n.clickedSlide=void 0,n.clickedIndex=void 0;return}r.slideToClickedSlide&&n.clickedIndex!==void 0&&n.clickedIndex!==n.activeIndex&&n.slideToClickedSlide()}var I$={updateSize:_$,updateSlides:C$,updateAutoHeight:E$,updateSlidesOffset:k$,updateSlidesProgress:P$,updateProgress:T$,updateSlidesClasses:O$,updateActiveIndex:M$,updateClickedSlide:$$};function D$(e=this.isHorizontal()?"x":"y"){const t=this,{params:n,rtlTranslate:r,translate:i,wrapperEl:o}=t;if(n.virtualTranslate)return r?-i:i;if(n.cssMode)return i;let a=l$(o,e);return a+=t.cssOverflowAdjustment(),r&&(a=-a),a||0}function L$(e,t){const n=this,{rtlTranslate:r,params:i,wrapperEl:o,progress:a}=n;let l=0,s=0;const u=0;n.isHorizontal()?l=r?-e:e:s=e,i.roundLengths&&(l=Math.floor(l),s=Math.floor(s)),n.previousTranslate=n.translate,n.translate=n.isHorizontal()?l:s,i.cssMode?o[n.isHorizontal()?"scrollLeft":"scrollTop"]=n.isHorizontal()?-l:-s:i.virtualTranslate||(n.isHorizontal()?l-=n.cssOverflowAdjustment():s-=n.cssOverflowAdjustment(),o.style.transform=`translate3d(${l}px, ${s}px, ${u}px)`);let d;const c=n.maxTranslate()-n.minTranslate();c===0?d=0:d=(e-n.minTranslate())/c,d!==a&&n.updateProgress(e),n.emit("setTranslate",n.translate,t)}function A$(){return-this.snapGrid[0]}function R$(){return-this.snapGrid[this.snapGrid.length-1]}function F$(e=0,t=this.params.speed,n=!0,r=!0,i){const o=this,{params:a,wrapperEl:l}=o;if(o.animating&&a.preventInteractionOnTransition)return!1;const s=o.minTranslate(),u=o.maxTranslate();let d;if(r&&e>s?d=s:r&&e<u?d=u:d=e,o.updateProgress(d),a.cssMode){const c=o.isHorizontal();if(t===0)l[c?"scrollLeft":"scrollTop"]=-d;else{if(!o.support.smoothScroll)return FS({swiper:o,targetPosition:-d,side:c?"left":"top"}),!0;l.scrollTo({[c?"left":"top"]:-d,behavior:"smooth"})}return!0}return t===0?(o.setTransition(0),o.setTranslate(d),n&&(o.emit("beforeTransitionStart",t,i),o.emit("transitionEnd"))):(o.setTransition(t),o.setTranslate(d),n&&(o.emit("beforeTransitionStart",t,i),o.emit("transitionStart")),o.animating||(o.animating=!0,o.onTranslateToWrapperTransitionEnd||(o.onTranslateToWrapperTransitionEnd=function(y){!o||o.destroyed||y.target===this&&(o.wrapperEl.removeEventListener("transitionend",o.onTranslateToWrapperTransitionEnd),o.onTranslateToWrapperTransitionEnd=null,delete o.onTranslateToWrapperTransitionEnd,o.animating=!1,n&&o.emit("transitionEnd"))}),o.wrapperEl.addEventListener("transitionend",o.onTranslateToWrapperTransitionEnd))),!0}var z$={getTranslate:D$,setTranslate:L$,minTranslate:A$,maxTranslate:R$,translateTo:F$};function N$(e,t){const n=this;n.params.cssMode||(n.wrapperEl.style.transitionDuration=`${e}ms`,n.wrapperEl.style.transitionDelay=e===0?"0ms":""),n.emit("setTransition",e,t)}function HS({swiper:e,runCallbacks:t,direction:n,step:r}){const{activeIndex:i,previousIndex:o}=e;let a=n;a||(i>o?a="next":i<o?a="prev":a="reset"),e.emit(`transition${r}`),t&&a==="reset"?e.emit(`slideResetTransition${r}`):t&&i!==o&&(e.emit(`slideChangeTransition${r}`),a==="next"?e.emit(`slideNextTransition${r}`):e.emit(`slidePrevTransition${r}`))}function B$(e=!0,t){const n=this,{params:r}=n;r.cssMode||(r.autoHeight&&n.updateAutoHeight(),HS({swiper:n,runCallbacks:e,direction:t,step:"Start"}))}function V$(e=!0,t){const n=this,{params:r}=n;n.animating=!1,!r.cssMode&&(n.setTransition(0),HS({swiper:n,runCallbacks:e,direction:t,step:"End"}))}var U$={setTransition:N$,transitionStart:B$,transitionEnd:V$};function H$(e=0,t,n=!0,r,i){typeof e=="string"&&(e=parseInt(e,10));const o=this;let a=e;a<0&&(a=0);const{params:l,snapGrid:s,slidesGrid:u,previousIndex:d,activeIndex:c,rtlTranslate:y,wrapperEl:p,enabled:m}=o;if(!m&&!r&&!i||o.destroyed||o.animating&&l.preventInteractionOnTransition)return!1;typeof t>"u"&&(t=o.params.speed);const v=Math.min(o.params.slidesPerGroupSkip,a);let w=v+Math.floor((a-v)/o.params.slidesPerGroup);w>=s.length&&(w=s.length-1);const h=-s[w];if(l.normalizeSlideIndex)for(let E=0;E<u.length;E+=1){const _=-Math.floor(h*100),$=Math.floor(u[E]*100),M=Math.floor(u[E+1]*100);typeof u[E+1]<"u"?_>=$&&_<M-(M-$)/2?a=E:_>=$&&_<M&&(a=E+1):_>=$&&(a=E)}if(o.initialized&&a!==c&&(!o.allowSlideNext&&(y?h>o.translate&&h>o.minTranslate():h<o.translate&&h<o.minTranslate())||!o.allowSlidePrev&&h>o.translate&&h>o.maxTranslate()&&(c||0)!==a))return!1;a!==(d||0)&&n&&o.emit("beforeSlideChangeStart"),o.updateProgress(h);let g;a>c?g="next":a<c?g="prev":g="reset";const x=o.virtual&&o.params.virtual.enabled;if(!(x&&i)&&(y&&-h===o.translate||!y&&h===o.translate))return o.updateActiveIndex(a),l.autoHeight&&o.updateAutoHeight(),o.updateSlidesClasses(),l.effect!=="slide"&&o.setTranslate(h),g!=="reset"&&(o.transitionStart(n,g),o.transitionEnd(n,g)),!1;if(l.cssMode){const E=o.isHorizontal(),_=y?h:-h;if(t===0)x&&(o.wrapperEl.style.scrollSnapType="none",o._immediateVirtual=!0),x&&!o._cssModeVirtualInitialSet&&o.params.initialSlide>0?(o._cssModeVirtualInitialSet=!0,requestAnimationFrame(()=>{p[E?"scrollLeft":"scrollTop"]=_})):p[E?"scrollLeft":"scrollTop"]=_,x&&requestAnimationFrame(()=>{o.wrapperEl.style.scrollSnapType="",o._immediateVirtual=!1});else{if(!o.support.smoothScroll)return FS({swiper:o,targetPosition:_,side:E?"left":"top"}),!0;p.scrollTo({[E?"left":"top"]:_,behavior:"smooth"})}return!0}const T=US().isSafari;return x&&!i&&T&&o.isElement&&o.virtual.update(!1,!1,a),o.setTransition(t),o.setTranslate(h),o.updateActiveIndex(a),o.updateSlidesClasses(),o.emit("beforeTransitionStart",t,r),o.transitionStart(n,g),t===0?o.transitionEnd(n,g):o.animating||(o.animating=!0,o.onSlideToWrapperTransitionEnd||(o.onSlideToWrapperTransitionEnd=function(_){!o||o.destroyed||_.target===this&&(o.wrapperEl.removeEventListener("transitionend",o.onSlideToWrapperTransitionEnd),o.onSlideToWrapperTransitionEnd=null,delete o.onSlideToWrapperTransitionEnd,o.transitionEnd(n,g))}),o.wrapperEl.addEventListener("transitionend",o.onSlideToWrapperTransitionEnd)),!0}function W$(e=0,t,n=!0,r){typeof e=="string"&&(e=parseInt(e,10));const i=this;if(i.destroyed)return;typeof t>"u"&&(t=i.params.speed);const o=i.grid&&i.params.grid&&i.params.grid.rows>1;let a=e;if(i.params.loop)if(i.virtual&&i.params.virtual.enabled)a=a+i.virtual.slidesBefore;else{let l;if(o){const v=a*i.params.grid.rows;l=i.slides.find(w=>w.getAttribute("data-swiper-slide-index")*1===v).column}else l=i.getSlideIndexByData(a);const s=o?Math.ceil(i.slides.length/i.params.grid.rows):i.slides.length,{centeredSlides:u,slidesOffsetBefore:d,slidesOffsetAfter:c}=i.params,y=u||!!d||!!c;let p=i.params.slidesPerView;p==="auto"?p=i.slidesPerViewDynamic():(p=Math.ceil(parseFloat(i.params.slidesPerView,10)),y&&p%2===0&&(p=p+1));let m=s-l<p;if(y&&(m=m||l<Math.ceil(p/2)),r&&y&&i.params.slidesPerView!=="auto"&&!o&&(m=!1),m){const v=y?l<i.activeIndex?"prev":"next":l-i.activeIndex-1<i.params.slidesPerView?"next":"prev";i.loopFix({direction:v,slideTo:!0,activeSlideIndex:v==="next"?l+1:l-s+1,slideRealIndex:v==="next"?i.realIndex:void 0})}if(o){const v=a*i.params.grid.rows;a=i.slides.find(w=>w.getAttribute("data-swiper-slide-index")*1===v).column}else a=i.getSlideIndexByData(a)}return requestAnimationFrame(()=>{i.slideTo(a,t,n,r)}),i}function G$(e,t=!0,n){const r=this,{enabled:i,params:o,animating:a}=r;if(!i||r.destroyed)return r;typeof e>"u"&&(e=r.params.speed);let l=o.slidesPerGroup;o.slidesPerView==="auto"&&o.slidesPerGroup===1&&o.slidesPerGroupAuto&&(l=Math.max(r.slidesPerViewDynamic("current",!0),1));const s=r.activeIndex<o.slidesPerGroupSkip?1:l,u=r.virtual&&o.virtual.enabled;if(o.loop){if(a&&!u&&o.loopPreventsSliding)return!1;if(r.loopFix({direction:"next"}),r._clientLeft=r.wrapperEl.clientLeft,r.activeIndex===r.slides.length-1&&o.cssMode)return requestAnimationFrame(()=>{r.slideTo(r.activeIndex+s,e,t,n)}),!0}return o.rewind&&r.isEnd?r.slideTo(0,e,t,n):r.slideTo(r.activeIndex+s,e,t,n)}function q$(e,t=!0,n){const r=this,{params:i,snapGrid:o,slidesGrid:a,rtlTranslate:l,enabled:s,animating:u}=r;if(!s||r.destroyed)return r;typeof e>"u"&&(e=r.params.speed);const d=r.virtual&&i.virtual.enabled;if(i.loop){if(u&&!d&&i.loopPreventsSliding)return!1;r.loopFix({direction:"prev"}),r._clientLeft=r.wrapperEl.clientLeft}const c=l?r.translate:-r.translate;function y(g){return g<0?-Math.floor(Math.abs(g)):Math.floor(g)}const p=y(c),m=o.map(g=>y(g)),v=i.freeMode&&i.freeMode.enabled;let w=o[m.indexOf(p)-1];if(typeof w>"u"&&(i.cssMode||v)){let g;o.forEach((x,S)=>{p>=x&&(g=S)}),typeof g<"u"&&(w=v?o[g]:o[g>0?g-1:g])}let h=0;if(typeof w<"u"&&(h=a.indexOf(w),h<0&&(h=r.activeIndex-1),i.slidesPerView==="auto"&&i.slidesPerGroup===1&&i.slidesPerGroupAuto&&(h=h-r.slidesPerViewDynamic("previous",!0)+1,h=Math.max(h,0))),i.rewind&&r.isBeginning){const g=r.params.virtual&&r.params.virtual.enabled&&r.virtual?r.virtual.slides.length-1:r.slides.length-1;return r.slideTo(g,e,t,n)}else if(i.loop&&r.activeIndex===0&&i.cssMode)return requestAnimationFrame(()=>{r.slideTo(h,e,t,n)}),!0;return r.slideTo(h,e,t,n)}function Y$(e,t=!0,n){const r=this;if(!r.destroyed)return typeof e>"u"&&(e=r.params.speed),r.slideTo(r.activeIndex,e,t,n)}function X$(e,t=!0,n,r=.5){const i=this;if(i.destroyed)return;typeof e>"u"&&(e=i.params.speed);let o=i.activeIndex;const a=Math.min(i.params.slidesPerGroupSkip,o),l=a+Math.floor((o-a)/i.params.slidesPerGroup),s=i.rtlTranslate?i.translate:-i.translate;if(s>=i.snapGrid[l]){const u=i.snapGrid[l],d=i.snapGrid[l+1];s-u>(d-u)*r&&(o+=i.params.slidesPerGroup)}else{const u=i.snapGrid[l-1],d=i.snapGrid[l];s-u<=(d-u)*r&&(o-=i.params.slidesPerGroup)}return o=Math.max(o,0),o=Math.min(o,i.slidesGrid.length-1),i.slideTo(o,e,t,n)}function K$(){const e=this;if(e.destroyed)return;const{params:t,slidesEl:n}=e,r=t.slidesPerView==="auto"?e.slidesPerViewDynamic():t.slidesPerView;let i=e.getSlideIndexWhenGrid(e.clickedIndex),o;const a=e.isElement?"swiper-slide":`.${t.slideClass}`,l=e.grid&&e.params.grid&&e.params.grid.rows>1;if(t.loop){if(e.animating)return;o=parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"),10),t.centeredSlides?e.slideToLoop(o):i>(l?(e.slides.length-r)/2-(e.params.grid.rows-1):e.slides.length-r)?(e.loopFix(),i=e.getSlideIndex(Sn(n,`${a}[data-swiper-slide-index="${o}"]`)[0]),RS(()=>{e.slideTo(i)})):e.slideTo(i)}else e.slideTo(i)}var Q$={slideTo:H$,slideToLoop:W$,slideNext:G$,slidePrev:q$,slideReset:Y$,slideToClosest:X$,slideToClickedSlide:K$};function Z$(e,t){const n=this,{params:r,slidesEl:i}=n;if(!r.loop||n.virtual&&n.params.virtual.enabled)return;const o=()=>{Sn(i,`.${r.slideClass}, swiper-slide`).forEach((m,v)=>{m.setAttribute("data-swiper-slide-index",v)})},a=()=>{const p=Sn(i,`.${r.slideBlankClass}`);p.forEach(m=>{m.remove()}),p.length>0&&(n.recalcSlides(),n.updateSlides())},l=n.grid&&r.grid&&r.grid.rows>1;r.loopAddBlankSlides&&(r.slidesPerGroup>1||l)&&a();const s=r.slidesPerGroup*(l?r.grid.rows:1),u=n.slides.length%s!==0,d=l&&n.slides.length%r.grid.rows!==0,c=p=>{for(let m=0;m<p;m+=1){const v=n.isElement?Xl("swiper-slide",[r.slideBlankClass]):Xl("div",[r.slideClass,r.slideBlankClass]);n.slidesEl.append(v)}};if(u){if(r.loopAddBlankSlides){const p=s-n.slides.length%s;c(p),n.recalcSlides(),n.updateSlides()}else Yl("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");o()}else if(d){if(r.loopAddBlankSlides){const p=r.grid.rows-n.slides.length%r.grid.rows;c(p),n.recalcSlides(),n.updateSlides()}else Yl("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");o()}else o();const y=r.centeredSlides||!!r.slidesOffsetBefore||!!r.slidesOffsetAfter;n.loopFix({slideRealIndex:e,direction:y?void 0:"next",initial:t})}function J$({slideRealIndex:e,slideTo:t=!0,direction:n,setTranslate:r,activeSlideIndex:i,initial:o,byController:a,byMousewheel:l}={}){const s=this;if(!s.params.loop)return;s.emit("beforeLoopFix");const{slides:u,allowSlidePrev:d,allowSlideNext:c,slidesEl:y,params:p}=s,{centeredSlides:m,slidesOffsetBefore:v,slidesOffsetAfter:w,initialSlide:h}=p,g=m||!!v||!!w;if(s.allowSlidePrev=!0,s.allowSlideNext=!0,s.virtual&&p.virtual.enabled){t&&(!g&&s.snapIndex===0?s.slideTo(s.virtual.slides.length,0,!1,!0):g&&s.snapIndex<p.slidesPerView?s.slideTo(s.virtual.slides.length+s.snapIndex,0,!1,!0):s.snapIndex===s.snapGrid.length-1&&s.slideTo(s.virtual.slidesBefore,0,!1,!0)),s.allowSlidePrev=d,s.allowSlideNext=c,s.emit("loopFix");return}let x=p.slidesPerView;x==="auto"?x=s.slidesPerViewDynamic():(x=Math.ceil(parseFloat(p.slidesPerView,10)),g&&x%2===0&&(x=x+1));const S=p.slidesPerGroupAuto?x:p.slidesPerGroup;let C=g?Math.max(S,Math.ceil(x/2)):S;C%S!==0&&(C+=S-C%S),C+=p.loopAdditionalSlides,s.loopedSlides=C;const T=s.grid&&p.grid&&p.grid.rows>1;u.length<x+C||s.params.effect==="cards"&&u.length<x+C*2?Yl("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled or not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"):T&&p.grid.fill==="row"&&Yl("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");const E=[],_=[],$=T?Math.ceil(u.length/p.grid.rows):u.length,M=o&&$-h<x&&!g;let R=M?h:s.activeIndex;typeof i>"u"?i=s.getSlideIndex(u.find(P=>P.classList.contains(p.slideActiveClass))):R=i;const A=n==="next"||!n,j=n==="prev"||!n;let F=0,L=0;const D=(T?u[i].column:i)+(g&&typeof r>"u"?-x/2+.5:0);if(D<C){F=Math.max(C-D,S);for(let P=0;P<C-D;P+=1){const I=P-Math.floor(P/$)*$;if(T){const z=$-I-1;for(let B=u.length-1;B>=0;B-=1)u[B].column===z&&E.push(B)}else E.push($-I-1)}}else if(D+x>$-C){L=Math.max(D-($-C*2),S),M&&(L=Math.max(L,x-$+h+1));for(let P=0;P<L;P+=1){const I=P-Math.floor(P/$)*$;T?u.forEach((z,B)=>{z.column===I&&_.push(B)}):_.push(I)}}if(s.__preventObserver__=!0,requestAnimationFrame(()=>{s.__preventObserver__=!1}),s.params.effect==="cards"&&u.length<x+C*2&&(_.includes(i)&&_.splice(_.indexOf(i),1),E.includes(i)&&E.splice(E.indexOf(i),1)),j&&E.forEach(P=>{u[P].swiperLoopMoveDOM=!0,y.prepend(u[P]),u[P].swiperLoopMoveDOM=!1}),A&&_.forEach(P=>{u[P].swiperLoopMoveDOM=!0,y.append(u[P]),u[P].swiperLoopMoveDOM=!1}),s.recalcSlides(),p.slidesPerView==="auto"?s.updateSlides():T&&(E.length>0&&j||_.length>0&&A)&&s.slides.forEach((P,I)=>{s.grid.updateSlide(I,P,s.slides)}),p.watchSlidesProgress&&s.updateSlidesOffset(),t){if(E.length>0&&j){if(typeof e>"u"){const P=s.slidesGrid[R],z=s.slidesGrid[R+F]-P;l?s.setTranslate(s.translate-z):(s.slideTo(R+Math.ceil(F),0,!1,!0),r&&(s.touchEventsData.startTranslate=s.touchEventsData.startTranslate-z,s.touchEventsData.currentTranslate=s.touchEventsData.currentTranslate-z))}else if(r){const P=T?E.length/p.grid.rows:E.length;s.slideTo(s.activeIndex+P,0,!1,!0),s.touchEventsData.currentTranslate=s.translate}}else if(_.length>0&&A)if(typeof e>"u"){const P=s.slidesGrid[R],z=s.slidesGrid[R-L]-P;l?s.setTranslate(s.translate-z):(s.slideTo(R-L,0,!1,!0),r&&(s.touchEventsData.startTranslate=s.touchEventsData.startTranslate-z,s.touchEventsData.currentTranslate=s.touchEventsData.currentTranslate-z))}else{const P=T?_.length/p.grid.rows:_.length;s.slideTo(s.activeIndex-P,0,!1,!0)}}if(s.allowSlidePrev=d,s.allowSlideNext=c,s.controller&&s.controller.control&&!a){const P={slideRealIndex:e,direction:n,setTranslate:r,activeSlideIndex:i,byController:!0};Array.isArray(s.controller.control)?s.controller.control.forEach(I=>{!I.destroyed&&I.params.loop&&I.loopFix({...P,slideTo:I.params.slidesPerView===p.slidesPerView?t:!1})}):s.controller.control instanceof s.constructor&&s.controller.control.params.loop&&s.controller.control.loopFix({...P,slideTo:s.controller.control.params.slidesPerView===p.slidesPerView?t:!1})}s.emit("loopFix")}function eI(){const e=this,{params:t,slidesEl:n}=e;if(!t.loop||!n||e.virtual&&e.params.virtual.enabled)return;e.recalcSlides();const r=[];e.slides.forEach(i=>{const o=typeof i.swiperSlideIndex>"u"?i.getAttribute("data-swiper-slide-index")*1:i.swiperSlideIndex;r[o]=i}),e.slides.forEach(i=>{i.removeAttribute("data-swiper-slide-index")}),r.forEach(i=>{n.append(i)}),e.recalcSlides(),e.slideTo(e.realIndex,0)}var tI={loopCreate:Z$,loopFix:J$,loopDestroy:eI};function nI(e){const t=this;if(!t.params.simulateTouch||t.params.watchOverflow&&t.isLocked||t.params.cssMode)return;const n=t.params.touchEventsTarget==="container"?t.el:t.wrapperEl;t.isElement&&(t.__preventObserver__=!0),n.style.cursor="move",n.style.cursor=e?"grabbing":"grab",t.isElement&&requestAnimationFrame(()=>{t.__preventObserver__=!1})}function rI(){const e=this;e.params.watchOverflow&&e.isLocked||e.params.cssMode||(e.isElement&&(e.__preventObserver__=!0),e[e.params.touchEventsTarget==="container"?"el":"wrapperEl"].style.cursor="",e.isElement&&requestAnimationFrame(()=>{e.__preventObserver__=!1}))}var iI={setGrabCursor:nI,unsetGrabCursor:rI};function oI(e,t=this){function n(r){if(!r||r===kn()||r===vt())return null;r.assignedSlot&&(r=r.assignedSlot);const i=r.closest(e);return!i&&!r.getRootNode?null:i||n(r.getRootNode().host)}return n(t)}function _v(e,t,n){const r=vt(),{params:i}=e,o=i.edgeSwipeDetection,a=i.edgeSwipeThreshold;return o&&(n<=a||n>=r.innerWidth-a)?o==="prevent"?(t.preventDefault(),!0):!1:!0}function aI(e){const t=this,n=kn();let r=e;r.originalEvent&&(r=r.originalEvent);const i=t.touchEventsData;if(r.type==="pointerdown"){if(i.pointerId!==null&&i.pointerId!==r.pointerId)return;i.pointerId=r.pointerId}else r.type==="touchstart"&&r.targetTouches.length===1&&(i.touchId=r.targetTouches[0].identifier);if(r.type==="touchstart"){_v(t,r,r.targetTouches[0].pageX);return}const{params:o,touches:a,enabled:l}=t;if(!l||!o.simulateTouch&&r.pointerType==="mouse"||t.animating&&o.preventInteractionOnTransition)return;!t.animating&&o.cssMode&&o.loop&&t.loopFix();let s=r.target;if(o.touchEventsTarget==="wrapper"&&!d$(s,t.wrapperEl)||"which"in r&&r.which===3||"button"in r&&r.button>0||i.isTouched&&i.isMoved)return;const u=!!o.noSwipingClass&&o.noSwipingClass!=="",d=r.composedPath?r.composedPath():r.path;u&&r.target&&r.target.shadowRoot&&d&&(s=d[0]);const c=o.noSwipingSelector?o.noSwipingSelector:`.${o.noSwipingClass}`,y=!!(r.target&&r.target.shadowRoot);if(o.noSwiping&&(y?oI(c,s):s.closest(c))){t.allowClick=!0;return}if(o.swipeHandler&&!s.closest(o.swipeHandler))return;a.currentX=r.pageX,a.currentY=r.pageY;const p=a.currentX,m=a.currentY;if(!_v(t,r,p))return;Object.assign(i,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),a.startX=p,a.startY=m,i.touchStartTime=ql(),t.allowClick=!0,t.updateSize(),t.swipeDirection=void 0,o.threshold>0&&(i.allowThresholdMove=!1);let v=!0;s.matches(i.focusableElements)&&(v=!1,s.nodeName==="SELECT"&&(i.isTouched=!1)),n.activeElement&&n.activeElement.matches(i.focusableElements)&&n.activeElement!==s&&(r.pointerType==="mouse"||r.pointerType!=="mouse"&&!s.matches(i.focusableElements))&&n.activeElement.blur();const w=v&&t.allowTouchMove&&o.touchStartPreventDefault;(o.touchStartForcePreventDefault||w)&&!s.isContentEditable&&r.preventDefault(),o.freeMode&&o.freeMode.enabled&&t.freeMode&&t.animating&&!o.cssMode&&t.freeMode.onTouchStart(),t.emit("touchStart",r)}function sI(e){const t=kn(),n=this,r=n.touchEventsData,{params:i,touches:o,rtlTranslate:a,enabled:l}=n;if(!l||!i.simulateTouch&&e.pointerType==="mouse")return;let s=e;if(s.originalEvent&&(s=s.originalEvent),s.type==="pointermove"&&(r.touchId!==null||s.pointerId!==r.pointerId))return;let u;if(s.type==="touchmove"){if(u=[...s.changedTouches].find(T=>T.identifier===r.touchId),!u||u.identifier!==r.touchId)return}else u=s;if(!r.isTouched){r.startMoving&&r.isScrolling&&n.emit("touchMoveOpposite",s);return}const d=u.pageX,c=u.pageY;if(s.preventedByNestedSwiper){o.startX=d,o.startY=c;return}if(!n.allowTouchMove){s.target.matches(r.focusableElements)||(n.allowClick=!1),r.isTouched&&(Object.assign(o,{startX:d,startY:c,currentX:d,currentY:c}),r.touchStartTime=ql());return}if(i.touchReleaseOnEdges&&!i.loop)if(n.isVertical()){if(c<o.startY&&n.translate<=n.maxTranslate()||c>o.startY&&n.translate>=n.minTranslate()){r.isTouched=!1,r.isMoved=!1;return}}else{if(a&&(d>o.startX&&-n.translate<=n.maxTranslate()||d<o.startX&&-n.translate>=n.minTranslate()))return;if(!a&&(d<o.startX&&n.translate<=n.maxTranslate()||d>o.startX&&n.translate>=n.minTranslate()))return}if(t.activeElement&&t.activeElement.matches(r.focusableElements)&&t.activeElement!==s.target&&s.pointerType!=="mouse"&&t.activeElement.blur(),t.activeElement&&s.target===t.activeElement&&s.target.matches(r.focusableElements)){r.isMoved=!0,n.allowClick=!1;return}r.allowTouchCallbacks&&n.emit("touchMove",s),o.previousX=o.currentX,o.previousY=o.currentY,o.currentX=d,o.currentY=c;const y=o.currentX-o.startX,p=o.currentY-o.startY;if(n.params.threshold&&Math.sqrt(y**2+p**2)<n.params.threshold)return;if(typeof r.isScrolling>"u"){let T;n.isHorizontal()&&o.currentY===o.startY||n.isVertical()&&o.currentX===o.startX?r.isScrolling=!1:y*y+p*p>=25&&(T=Math.atan2(Math.abs(p),Math.abs(y))*180/Math.PI,r.isScrolling=n.isHorizontal()?T>i.touchAngle:90-T>i.touchAngle)}if(r.isScrolling&&n.emit("touchMoveOpposite",s),typeof r.startMoving>"u"&&(o.currentX!==o.startX||o.currentY!==o.startY)&&(r.startMoving=!0),r.isScrolling||s.type==="touchmove"&&r.preventTouchMoveFromPointerMove){r.isTouched=!1;return}if(!r.startMoving)return;n.allowClick=!1,!i.cssMode&&s.cancelable&&s.preventDefault(),i.touchMoveStopPropagation&&!i.nested&&s.stopPropagation();let m=n.isHorizontal()?y:p,v=n.isHorizontal()?o.currentX-o.previousX:o.currentY-o.previousY;i.oneWayMovement&&(m=Math.abs(m)*(a?1:-1),v=Math.abs(v)*(a?1:-1)),o.diff=m,m*=i.touchRatio,a&&(m=-m,v=-v);const w=n.touchesDirection;n.swipeDirection=m>0?"prev":"next",n.touchesDirection=v>0?"prev":"next";const h=n.params.loop&&!i.cssMode,g=n.touchesDirection==="next"&&n.allowSlideNext||n.touchesDirection==="prev"&&n.allowSlidePrev;if(!r.isMoved){if(h&&g&&n.loopFix({direction:n.swipeDirection}),r.startTranslate=n.getTranslate(),n.setTransition(0),n.animating){const T=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0,detail:{bySwiperTouchMove:!0}});n.wrapperEl.dispatchEvent(T)}r.allowMomentumBounce=!1,i.grabCursor&&(n.allowSlideNext===!0||n.allowSlidePrev===!0)&&n.setGrabCursor(!0),n.emit("sliderFirstMove",s)}let x;if(new Date().getTime(),i._loopSwapReset!==!1&&r.isMoved&&r.allowThresholdMove&&w!==n.touchesDirection&&h&&g&&Math.abs(m)>=1){Object.assign(o,{startX:d,startY:c,currentX:d,currentY:c,startTranslate:r.currentTranslate}),r.loopSwapReset=!0,r.startTranslate=r.currentTranslate;return}n.emit("sliderMove",s),r.isMoved=!0,r.currentTranslate=m+r.startTranslate;let S=!0,C=i.resistanceRatio;if(i.touchReleaseOnEdges&&(C=0),m>0?(h&&g&&!x&&r.allowThresholdMove&&r.currentTranslate>(i.centeredSlides?n.minTranslate()-n.slidesSizesGrid[n.activeIndex+1]-(i.slidesPerView!=="auto"&&n.slides.length-i.slidesPerView>=2?n.slidesSizesGrid[n.activeIndex+1]+n.params.spaceBetween:0)-n.params.spaceBetween:n.minTranslate())&&n.loopFix({direction:"prev",setTranslate:!0,activeSlideIndex:0}),r.currentTranslate>n.minTranslate()&&(S=!1,i.resistance&&(r.currentTranslate=n.minTranslate()-1+(-n.minTranslate()+r.startTranslate+m)**C))):m<0&&(h&&g&&!x&&r.allowThresholdMove&&r.currentTranslate<(i.centeredSlides?n.maxTranslate()+n.slidesSizesGrid[n.slidesSizesGrid.length-1]+n.params.spaceBetween+(i.slidesPerView!=="auto"&&n.slides.length-i.slidesPerView>=2?n.slidesSizesGrid[n.slidesSizesGrid.length-1]+n.params.spaceBetween:0):n.maxTranslate())&&n.loopFix({direction:"next",setTranslate:!0,activeSlideIndex:n.slides.length-(i.slidesPerView==="auto"?n.slidesPerViewDynamic():Math.ceil(parseFloat(i.slidesPerView,10)))}),r.currentTranslate<n.maxTranslate()&&(S=!1,i.resistance&&(r.currentTranslate=n.maxTranslate()+1-(n.maxTranslate()-r.startTranslate-m)**C))),S&&(s.preventedByNestedSwiper=!0),!n.allowSlideNext&&n.swipeDirection==="next"&&r.currentTranslate<r.startTranslate&&(r.currentTranslate=r.startTranslate),!n.allowSlidePrev&&n.swipeDirection==="prev"&&r.currentTranslate>r.startTranslate&&(r.currentTranslate=r.startTranslate),!n.allowSlidePrev&&!n.allowSlideNext&&(r.currentTranslate=r.startTranslate),i.threshold>0)if(Math.abs(m)>i.threshold||r.allowThresholdMove){if(!r.allowThresholdMove){r.allowThresholdMove=!0,o.startX=o.currentX,o.startY=o.currentY,r.currentTranslate=r.startTranslate,o.diff=n.isHorizontal()?o.currentX-o.startX:o.currentY-o.startY;return}}else{r.currentTranslate=r.startTranslate;return}!i.followFinger||i.cssMode||((i.freeMode&&i.freeMode.enabled&&n.freeMode||i.watchSlidesProgress)&&(n.updateActiveIndex(),n.updateSlidesClasses()),i.freeMode&&i.freeMode.enabled&&n.freeMode&&n.freeMode.onTouchMove(),n.updateProgress(r.currentTranslate),n.setTranslate(r.currentTranslate))}function lI(e){const t=this,n=t.touchEventsData;let r=e;r.originalEvent&&(r=r.originalEvent);let i;if(r.type==="touchend"||r.type==="touchcancel"){if(i=[...r.changedTouches].find(C=>C.identifier===n.touchId),!i||i.identifier!==n.touchId)return}else{if(n.touchId!==null||r.pointerId!==n.pointerId)return;i=r}if(["pointercancel","pointerout","pointerleave","contextmenu"].includes(r.type)&&!(["pointercancel","contextmenu"].includes(r.type)&&(t.browser.isSafari||t.browser.isWebView)))return;n.pointerId=null,n.touchId=null;const{params:a,touches:l,rtlTranslate:s,slidesGrid:u,enabled:d}=t;if(!d||!a.simulateTouch&&r.pointerType==="mouse")return;if(n.allowTouchCallbacks&&t.emit("touchEnd",r),n.allowTouchCallbacks=!1,!n.isTouched){n.isMoved&&a.grabCursor&&t.setGrabCursor(!1),n.isMoved=!1,n.startMoving=!1;return}a.grabCursor&&n.isMoved&&n.isTouched&&(t.allowSlideNext===!0||t.allowSlidePrev===!0)&&t.setGrabCursor(!1);const c=ql(),y=c-n.touchStartTime;if(t.allowClick){const C=r.path||r.composedPath&&r.composedPath();t.updateClickedSlide(C&&C[0]||r.target,C),t.emit("tap click",r),y<300&&c-n.lastClickTime<300&&t.emit("doubleTap doubleClick",r)}if(n.lastClickTime=ql(),RS(()=>{t.destroyed||(t.allowClick=!0)}),!n.isTouched||!n.isMoved||!t.swipeDirection||l.diff===0&&!n.loopSwapReset||n.currentTranslate===n.startTranslate&&!n.loopSwapReset){n.isTouched=!1,n.isMoved=!1,n.startMoving=!1;return}n.isTouched=!1,n.isMoved=!1,n.startMoving=!1;let p;if(a.followFinger?p=s?t.translate:-t.translate:p=-n.currentTranslate,a.cssMode)return;if(a.freeMode&&a.freeMode.enabled){t.freeMode.onTouchEnd({currentPos:p});return}const m=p>=-t.maxTranslate()&&!t.params.loop;let v=0,w=t.slidesSizesGrid[0];for(let C=0;C<u.length;C+=C<a.slidesPerGroupSkip?1:a.slidesPerGroup){const T=C<a.slidesPerGroupSkip-1?1:a.slidesPerGroup;typeof u[C+T]<"u"?(m||p>=u[C]&&p<u[C+T])&&(v=C,w=u[C+T]-u[C]):(m||p>=u[C])&&(v=C,w=u[u.length-1]-u[u.length-2])}let h=null,g=null;a.rewind&&(t.isBeginning?g=a.virtual&&a.virtual.enabled&&t.virtual?t.virtual.slides.length-1:t.slides.length-1:t.isEnd&&(h=0));const x=(p-u[v])/w,S=v<a.slidesPerGroupSkip-1?1:a.slidesPerGroup;if(y>a.longSwipesMs){if(!a.longSwipes){t.slideTo(t.activeIndex);return}t.swipeDirection==="next"&&(x>=a.longSwipesRatio?t.slideTo(a.rewind&&t.isEnd?h:v+S):t.slideTo(v)),t.swipeDirection==="prev"&&(x>1-a.longSwipesRatio?t.slideTo(v+S):g!==null&&x<0&&Math.abs(x)>a.longSwipesRatio?t.slideTo(g):t.slideTo(v))}else{if(!a.shortSwipes){t.slideTo(t.activeIndex);return}t.navigation&&(r.target===t.navigation.nextEl||r.target===t.navigation.prevEl)?r.target===t.navigation.nextEl?t.slideTo(v+S):t.slideTo(v):(t.swipeDirection==="next"&&t.slideTo(h!==null?h:v+S),t.swipeDirection==="prev"&&t.slideTo(g!==null?g:v))}}function Cv(){const e=this,{params:t,el:n}=e;if(n&&n.offsetWidth===0)return;t.breakpoints&&e.setBreakpoint();const{allowSlideNext:r,allowSlidePrev:i,snapGrid:o}=e,a=e.virtual&&e.params.virtual.enabled;e.allowSlideNext=!0,e.allowSlidePrev=!0,e.updateSize(),e.updateSlides(),e.updateSlidesClasses();const l=a&&t.loop;(t.slidesPerView==="auto"||t.slidesPerView>1)&&e.isEnd&&!e.isBeginning&&!e.params.centeredSlides&&!l?e.slideTo(e.slides.length-1,0,!1,!0):e.params.loop&&!a?e.slideToLoop(e.realIndex,0,!1,!0):e.slideTo(e.activeIndex,0,!1,!0),e.autoplay&&e.autoplay.running&&e.autoplay.paused&&(clearTimeout(e.autoplay.resizeTimeout),e.autoplay.resizeTimeout=setTimeout(()=>{e.autoplay&&e.autoplay.running&&e.autoplay.paused&&e.autoplay.resume()},500)),e.allowSlidePrev=i,e.allowSlideNext=r,e.params.watchOverflow&&o!==e.snapGrid&&e.checkOverflow()}function uI(e){const t=this;t.enabled&&(t.allowClick||(t.params.preventClicks&&e.preventDefault(),t.params.preventClicksPropagation&&t.animating&&(e.stopPropagation(),e.stopImmediatePropagation())))}function cI(){const e=this,{wrapperEl:t,rtlTranslate:n,enabled:r}=e;if(!r)return;e.previousTranslate=e.translate,e.isHorizontal()?e.translate=-t.scrollLeft:e.translate=-t.scrollTop,e.translate===0&&(e.translate=0),e.updateActiveIndex(),e.updateSlidesClasses();let i;const o=e.maxTranslate()-e.minTranslate();o===0?i=0:i=(e.translate-e.minTranslate())/o,i!==e.progress&&e.updateProgress(n?-e.translate:e.translate),e.emit("setTranslate",e.translate,!1)}function dI(e){const t=this;tl(t,e.target),!(t.params.cssMode||t.params.slidesPerView!=="auto"&&!t.params.autoHeight)&&t.update()}function fI(){const e=this;e.documentTouchHandlerProceeded||(e.documentTouchHandlerProceeded=!0,e.params.touchReleaseOnEdges&&(e.el.style.touchAction="auto"))}const WS=(e,t)=>{const n=kn(),{params:r,el:i,wrapperEl:o,device:a}=e,l=!!r.nested,s=t==="on"?"addEventListener":"removeEventListener",u=t;!i||typeof i=="string"||(n[s]("touchstart",e.onDocumentTouchStart,{passive:!1,capture:l}),i[s]("touchstart",e.onTouchStart,{passive:!1}),i[s]("pointerdown",e.onTouchStart,{passive:!1}),n[s]("touchmove",e.onTouchMove,{passive:!1,capture:l}),n[s]("pointermove",e.onTouchMove,{passive:!1,capture:l}),n[s]("touchend",e.onTouchEnd,{passive:!0}),n[s]("pointerup",e.onTouchEnd,{passive:!0}),n[s]("pointercancel",e.onTouchEnd,{passive:!0}),n[s]("touchcancel",e.onTouchEnd,{passive:!0}),n[s]("pointerout",e.onTouchEnd,{passive:!0}),n[s]("pointerleave",e.onTouchEnd,{passive:!0}),n[s]("contextmenu",e.onTouchEnd,{passive:!0}),(r.preventClicks||r.preventClicksPropagation)&&i[s]("click",e.onClick,!0),r.cssMode&&o[s]("scroll",e.onScroll),r.updateOnWindowResize?e[u](a.ios||a.android?"resize orientationchange observerUpdate":"resize observerUpdate",Cv,!0):e[u]("observerUpdate",Cv,!0),i[s]("load",e.onLoad,{capture:!0}))};function pI(){const e=this,{params:t}=e;e.onTouchStart=aI.bind(e),e.onTouchMove=sI.bind(e),e.onTouchEnd=lI.bind(e),e.onDocumentTouchStart=fI.bind(e),t.cssMode&&(e.onScroll=cI.bind(e)),e.onClick=uI.bind(e),e.onLoad=dI.bind(e),WS(e,"on")}function hI(){WS(this,"off")}var mI={attachEvents:pI,detachEvents:hI};const Ev=(e,t)=>e.grid&&t.grid&&t.grid.rows>1;function gI(){const e=this,{realIndex:t,initialized:n,params:r,el:i}=e,o=r.breakpoints;if(!o||o&&Object.keys(o).length===0)return;const a=kn(),l=r.breakpointsBase==="window"||!r.breakpointsBase?r.breakpointsBase:"container",s=["window","container"].includes(r.breakpointsBase)||!r.breakpointsBase?e.el:a.querySelector(r.breakpointsBase),u=e.getBreakpoint(o,l,s);if(!u||e.currentBreakpoint===u)return;const c=(u in o?o[u]:void 0)||e.originalParams,y=Ev(e,r),p=Ev(e,c),m=e.params.grabCursor,v=c.grabCursor,w=r.enabled;y&&!p?(i.classList.remove(`${r.containerModifierClass}grid`,`${r.containerModifierClass}grid-column`),e.emitContainerClasses()):!y&&p&&(i.classList.add(`${r.containerModifierClass}grid`),(c.grid.fill&&c.grid.fill==="column"||!c.grid.fill&&r.grid.fill==="column")&&i.classList.add(`${r.containerModifierClass}grid-column`),e.emitContainerClasses()),m&&!v?e.unsetGrabCursor():!m&&v&&e.setGrabCursor(),["navigation","pagination","scrollbar"].forEach(T=>{if(typeof c[T]>"u")return;const E=r[T]&&r[T].enabled,_=c[T]&&c[T].enabled;E&&!_&&e[T].disable(),!E&&_&&e[T].enable()});const h=c.direction&&c.direction!==r.direction,g=r.loop&&(c.slidesPerView!==r.slidesPerView||h),x=r.loop;h&&n&&e.changeDirection(),Mt(e.params,c);const S=e.params.enabled,C=e.params.loop;Object.assign(e,{allowTouchMove:e.params.allowTouchMove,allowSlideNext:e.params.allowSlideNext,allowSlidePrev:e.params.allowSlidePrev}),w&&!S?e.disable():!w&&S&&e.enable(),e.currentBreakpoint=u,e.emit("_beforeBreakpoint",c),n&&(g?(e.loopDestroy(),e.loopCreate(t),e.updateSlides()):!x&&C?(e.loopCreate(t),e.updateSlides()):x&&!C&&e.loopDestroy()),e.emit("breakpoint",c)}function vI(e,t="window",n){if(!e||t==="container"&&!n)return;let r=!1;const i=vt(),o=t==="window"?i.innerHeight:n.clientHeight,a=Object.keys(e).map(l=>{if(typeof l=="string"&&l.indexOf("@")===0){const s=parseFloat(l.substr(1));return{value:o*s,point:l}}return{value:l,point:l}});a.sort((l,s)=>parseInt(l.value,10)-parseInt(s.value,10));for(let l=0;l<a.length;l+=1){const{point:s,value:u}=a[l];t==="window"?i.matchMedia(`(min-width: ${u}px)`).matches&&(r=s):u<=n.clientWidth&&(r=s)}return r||"max"}var yI={setBreakpoint:gI,getBreakpoint:vI};function xI(e,t){const n=[];return e.forEach(r=>{typeof r=="object"?Object.keys(r).forEach(i=>{r[i]&&n.push(t+i)}):typeof r=="string"&&n.push(t+r)}),n}function bI(){const e=this,{classNames:t,params:n,rtl:r,el:i,device:o}=e,a=xI(["initialized",n.direction,{"free-mode":e.params.freeMode&&n.freeMode.enabled},{autoheight:n.autoHeight},{rtl:r},{grid:n.grid&&n.grid.rows>1},{"grid-column":n.grid&&n.grid.rows>1&&n.grid.fill==="column"},{android:o.android},{ios:o.ios},{"css-mode":n.cssMode},{centered:n.cssMode&&n.centeredSlides},{"watch-progress":n.watchSlidesProgress}],n.containerModifierClass);t.push(...a),i.classList.add(...t),e.emitContainerClasses()}function wI(){const e=this,{el:t,classNames:n}=e;!t||typeof t=="string"||(t.classList.remove(...n),e.emitContainerClasses())}var SI={addClasses:bI,removeClasses:wI};function _I(){const e=this,{isLocked:t,params:n}=e,{slidesOffsetBefore:r}=n;if(r){const i=e.slides.length-1,o=e.slidesGrid[i]+e.slidesSizesGrid[i]+r*2;e.isLocked=e.size>o}else e.isLocked=e.snapGrid.length===1;n.allowSlideNext===!0&&(e.allowSlideNext=!e.isLocked),n.allowSlidePrev===!0&&(e.allowSlidePrev=!e.isLocked),t&&t!==e.isLocked&&(e.isEnd=!1),t!==e.isLocked&&e.emit(e.isLocked?"lock":"unlock")}var CI={checkOverflow:_I},Op={init:!0,direction:"horizontal",oneWayMovement:!1,swiperElementNodeName:"SWIPER-CONTAINER",touchEventsTarget:"wrapper",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,eventsPrefix:"swiper",enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,snapToSlideEdge:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:5,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,loop:!1,loopAddBlankSlides:!0,loopAdditionalSlides:0,loopPreventsSliding:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,maxBackfaceHiddenSlides:10,containerModifierClass:"swiper-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-blank",slideActiveClass:"swiper-slide-active",slideVisibleClass:"swiper-slide-visible",slideFullyVisibleClass:"swiper-slide-fully-visible",slideNextClass:"swiper-slide-next",slidePrevClass:"swiper-slide-prev",wrapperClass:"swiper-wrapper",lazyPreloaderClass:"swiper-lazy-preloader",lazyPreloadPrevNext:0,runCallbacksOnInit:!0,_emitClasses:!1};function EI(e,t){return function(r={}){const i=Object.keys(r)[0],o=r[i];if(typeof o!="object"||o===null){Mt(t,r);return}if(e[i]===!0&&(e[i]={enabled:!0}),i==="navigation"&&e[i]&&e[i].enabled&&!e[i].prevEl&&!e[i].nextEl&&(e[i].auto=!0),["pagination","scrollbar"].indexOf(i)>=0&&e[i]&&e[i].enabled&&!e[i].el&&(e[i].auto=!0),!(i in e&&"enabled"in o)){Mt(t,r);return}typeof e[i]=="object"&&!("enabled"in e[i])&&(e[i].enabled=!0),e[i]||(e[i]={enabled:!1}),Mt(t,r)}}const Md={eventsEmitter:S$,update:I$,translate:z$,transition:U$,slide:Q$,loop:tI,grabCursor:iI,events:mI,breakpoints:yI,checkOverflow:CI,classes:SI},$d={};let _m=class $n{constructor(...t){let n,r;t.length===1&&t[0].constructor&&Object.prototype.toString.call(t[0]).slice(8,-1)==="Object"?r=t[0]:[n,r]=t,r||(r={}),r=Mt({},r),n&&!r.el&&(r.el=n);const i=kn();if(r.el&&typeof r.el=="string"&&i.querySelectorAll(r.el).length>1){const s=[];return i.querySelectorAll(r.el).forEach(u=>{const d=Mt({},r,{el:u});s.push(new $n(d))}),s}const o=this;o.__swiper__=!0,o.support=BS(),o.device=VS({userAgent:r.userAgent}),o.browser=US(),o.eventsListeners={},o.eventsAnyListeners=[],o.modules=[...o.__modules__],r.modules&&Array.isArray(r.modules)&&r.modules.forEach(s=>{typeof s=="function"&&o.modules.indexOf(s)<0&&o.modules.push(s)});const a={};o.modules.forEach(s=>{s({params:r,swiper:o,extendParams:EI(r,a),on:o.on.bind(o),once:o.once.bind(o),off:o.off.bind(o),emit:o.emit.bind(o)})});const l=Mt({},Op,a);return o.params=Mt({},l,$d,r),o.originalParams=Mt({},o.params),o.passedParams=Mt({},r),o.params&&o.params.on&&Object.keys(o.params.on).forEach(s=>{o.on(s,o.params.on[s])}),o.params&&o.params.onAny&&o.onAny(o.params.onAny),Object.assign(o,{enabled:o.params.enabled,el:n,classNames:[],slides:[],slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal(){return o.params.direction==="horizontal"},isVertical(){return o.params.direction==="vertical"},activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,cssOverflowAdjustment(){return Math.trunc(this.translate/2**23)*2**23},allowSlideNext:o.params.allowSlideNext,allowSlidePrev:o.params.allowSlidePrev,touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:o.params.focusableElements,lastClickTime:0,clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,startMoving:void 0,pointerId:null,touchId:null},allowClick:!0,allowTouchMove:o.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),o.emit("_swiper"),o.params.init&&o.init(),o}getDirectionLabel(t){return this.isHorizontal()?t:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[t]}getSlideIndex(t){const{slidesEl:n,params:r}=this,i=Sn(n,`.${r.slideClass}, swiper-slide`),o=Kl(i[0]);return Kl(t)-o}getSlideIndexByData(t){return this.getSlideIndex(this.slides.find(n=>n.getAttribute("data-swiper-slide-index")*1===t))}getSlideIndexWhenGrid(t){return this.grid&&this.params.grid&&this.params.grid.rows>1&&(this.params.grid.fill==="column"?t=Math.floor(t/this.params.grid.rows):this.params.grid.fill==="row"&&(t=t%Math.ceil(this.slides.length/this.params.grid.rows))),t}recalcSlides(){const t=this,{slidesEl:n,params:r}=t;t.slides=Sn(n,`.${r.slideClass}, swiper-slide`)}enable(){const t=this;t.enabled||(t.enabled=!0,t.params.grabCursor&&t.setGrabCursor(),t.emit("enable"))}disable(){const t=this;t.enabled&&(t.enabled=!1,t.params.grabCursor&&t.unsetGrabCursor(),t.emit("disable"))}setProgress(t,n){const r=this;t=Math.min(Math.max(t,0),1);const i=r.minTranslate(),a=(r.maxTranslate()-i)*t+i;r.translateTo(a,typeof n>"u"?0:n),r.updateActiveIndex(),r.updateSlidesClasses()}emitContainerClasses(){const t=this;if(!t.params._emitClasses||!t.el)return;const n=t.el.className.split(" ").filter(r=>r.indexOf("swiper")===0||r.indexOf(t.params.containerModifierClass)===0);t.emit("_containerClasses",n.join(" "))}getSlideClasses(t){const n=this;return n.destroyed?"":t.className.split(" ").filter(r=>r.indexOf("swiper-slide")===0||r.indexOf(n.params.slideClass)===0).join(" ")}emitSlidesClasses(){const t=this;if(!t.params._emitClasses||!t.el)return;const n=[];t.slides.forEach(r=>{const i=t.getSlideClasses(r);n.push({slideEl:r,classNames:i}),t.emit("_slideClass",r,i)}),t.emit("_slideClasses",n)}slidesPerViewDynamic(t="current",n=!1){const r=this,{params:i,slides:o,slidesGrid:a,slidesSizesGrid:l,size:s,activeIndex:u}=r;let d=1;if(typeof i.slidesPerView=="number")return i.slidesPerView;if(i.centeredSlides){let c=o[u]?Math.ceil(o[u].swiperSlideSize):0,y;for(let p=u+1;p<o.length;p+=1)o[p]&&!y&&(c+=Math.ceil(o[p].swiperSlideSize),d+=1,c>s&&(y=!0));for(let p=u-1;p>=0;p-=1)o[p]&&!y&&(c+=o[p].swiperSlideSize,d+=1,c>s&&(y=!0))}else if(t==="current")for(let c=u+1;c<o.length;c+=1)(n?a[c]+l[c]-a[u]<s:a[c]-a[u]<s)&&(d+=1);else for(let c=u-1;c>=0;c-=1)a[u]-a[c]<s&&(d+=1);return d}update(){const t=this;if(!t||t.destroyed)return;const{snapGrid:n,params:r}=t;r.breakpoints&&t.setBreakpoint(),[...t.el.querySelectorAll('[loading="lazy"]')].forEach(a=>{a.complete&&tl(t,a)}),t.updateSize(),t.updateSlides(),t.updateProgress(),t.updateSlidesClasses();function i(){const a=t.rtlTranslate?t.translate*-1:t.translate,l=Math.min(Math.max(a,t.maxTranslate()),t.minTranslate());t.setTranslate(l),t.updateActiveIndex(),t.updateSlidesClasses()}let o;if(r.freeMode&&r.freeMode.enabled&&!r.cssMode)i(),r.autoHeight&&t.updateAutoHeight();else{if((r.slidesPerView==="auto"||r.slidesPerView>1)&&t.isEnd&&!r.centeredSlides){const a=t.virtual&&r.virtual.enabled?t.virtual.slides:t.slides;o=t.slideTo(a.length-1,0,!1,!0)}else o=t.slideTo(t.activeIndex,0,!1,!0);o||i()}r.watchOverflow&&n!==t.snapGrid&&t.checkOverflow(),t.emit("update")}changeDirection(t,n=!0){const r=this,i=r.params.direction;return t||(t=i==="horizontal"?"vertical":"horizontal"),t===i||t!=="horizontal"&&t!=="vertical"||(r.el.classList.remove(`${r.params.containerModifierClass}${i}`),r.el.classList.add(`${r.params.containerModifierClass}${t}`),r.emitContainerClasses(),r.params.direction=t,r.slides.forEach(o=>{t==="vertical"?o.style.width="":o.style.height=""}),r.emit("changeDirection"),n&&r.update()),r}changeLanguageDirection(t){const n=this;n.rtl&&t==="rtl"||!n.rtl&&t==="ltr"||(n.rtl=t==="rtl",n.rtlTranslate=n.params.direction==="horizontal"&&n.rtl,n.rtl?(n.el.classList.add(`${n.params.containerModifierClass}rtl`),n.el.dir="rtl"):(n.el.classList.remove(`${n.params.containerModifierClass}rtl`),n.el.dir="ltr"),n.update())}mount(t){const n=this;if(n.mounted)return!0;let r=t||n.params.el;if(typeof r=="string"&&(r=document.querySelector(r)),!r)return!1;r.swiper=n,r.parentNode&&r.parentNode.host&&r.parentNode.host.nodeName===n.params.swiperElementNodeName.toUpperCase()&&(n.isElement=!0);const i=()=>`.${(n.params.wrapperClass||"").trim().split(" ").join(".")}`;let a=(()=>r&&r.shadowRoot&&r.shadowRoot.querySelector?r.shadowRoot.querySelector(i()):Sn(r,i())[0])();return!a&&n.params.createElements&&(a=Xl("div",n.params.wrapperClass),r.append(a),Sn(r,`.${n.params.slideClass}`).forEach(l=>{a.append(l)})),Object.assign(n,{el:r,wrapperEl:a,slidesEl:n.isElement&&!r.parentNode.host.slideSlots?r.parentNode.host:a,hostEl:n.isElement?r.parentNode.host:r,mounted:!0,rtl:r.dir.toLowerCase()==="rtl"||fr(r,"direction")==="rtl",rtlTranslate:n.params.direction==="horizontal"&&(r.dir.toLowerCase()==="rtl"||fr(r,"direction")==="rtl"),wrongRTL:fr(a,"display")==="-webkit-box"}),!0}init(t){const n=this;if(n.initialized||n.mount(t)===!1)return n;n.emit("beforeInit"),n.params.breakpoints&&n.setBreakpoint(),n.addClasses(),n.updateSize(),n.updateSlides(),n.params.watchOverflow&&n.checkOverflow(),n.params.grabCursor&&n.enabled&&n.setGrabCursor(),n.params.loop&&n.virtual&&n.params.virtual.enabled?n.slideTo(n.params.initialSlide+n.virtual.slidesBefore,0,n.params.runCallbacksOnInit,!1,!0):n.slideTo(n.params.initialSlide,0,n.params.runCallbacksOnInit,!1,!0),n.params.loop&&n.loopCreate(void 0,!0),n.attachEvents();const i=[...n.el.querySelectorAll('[loading="lazy"]')];return n.isElement&&i.push(...n.hostEl.querySelectorAll('[loading="lazy"]')),i.forEach(o=>{o.complete?tl(n,o):o.addEventListener("load",a=>{tl(n,a.target)})}),Tp(n),n.initialized=!0,Tp(n),n.emit("init"),n.emit("afterInit"),n}destroy(t=!0,n=!0){const r=this,{params:i,el:o,wrapperEl:a,slides:l}=r;return typeof r.params>"u"||r.destroyed||(r.emit("beforeDestroy"),r.initialized=!1,r.detachEvents(),i.loop&&r.loopDestroy(),n&&(r.removeClasses(),o&&typeof o!="string"&&o.removeAttribute("style"),a&&a.removeAttribute("style"),l&&l.length&&l.forEach(s=>{s.classList.remove(i.slideVisibleClass,i.slideFullyVisibleClass,i.slideActiveClass,i.slideNextClass,i.slidePrevClass),s.removeAttribute("style"),s.removeAttribute("data-swiper-slide-index")})),r.emit("destroy"),Object.keys(r.eventsListeners).forEach(s=>{r.off(s)}),t!==!1&&(r.el&&typeof r.el!="string"&&(r.el.swiper=null),a$(r)),r.destroyed=!0),null}static extendDefaults(t){Mt($d,t)}static get extendedDefaults(){return $d}static get defaults(){return Op}static installModule(t){$n.prototype.__modules__||($n.prototype.__modules__=[]);const n=$n.prototype.__modules__;typeof t=="function"&&n.indexOf(t)<0&&n.push(t)}static use(t){return Array.isArray(t)?(t.forEach(n=>$n.installModule(n)),$n):($n.installModule(t),$n)}};Object.keys(Md).forEach(e=>{Object.keys(Md[e]).forEach(t=>{_m.prototype[t]=Md[e][t]})});_m.use([b$,w$]);const GS=["eventsPrefix","injectStyles","injectStylesUrls","modules","init","_direction","oneWayMovement","swiperElementNodeName","touchEventsTarget","initialSlide","_speed","cssMode","updateOnWindowResize","resizeObserver","nested","focusableElements","_enabled","_width","_height","preventInteractionOnTransition","userAgent","url","_edgeSwipeDetection","_edgeSwipeThreshold","_freeMode","_autoHeight","setWrapperSize","virtualTranslate","_effect","breakpoints","breakpointsBase","_spaceBetween","_slidesPerView","maxBackfaceHiddenSlides","_grid","_slidesPerGroup","_slidesPerGroupSkip","_slidesPerGroupAuto","_centeredSlides","_centeredSlidesBounds","_slidesOffsetBefore","_slidesOffsetAfter","normalizeSlideIndex","_centerInsufficientSlides","_snapToSlideEdge","_watchOverflow","roundLengths","touchRatio","touchAngle","simulateTouch","_shortSwipes","_longSwipes","longSwipesRatio","longSwipesMs","_followFinger","allowTouchMove","_threshold","touchMoveStopPropagation","touchStartPreventDefault","touchStartForcePreventDefault","touchReleaseOnEdges","uniqueNavElements","_resistance","_resistanceRatio","_watchSlidesProgress","_grabCursor","preventClicks","preventClicksPropagation","_slideToClickedSlide","_loop","loopAdditionalSlides","loopAddBlankSlides","loopPreventsSliding","_rewind","_allowSlidePrev","_allowSlideNext","_swipeHandler","_noSwiping","noSwipingClass","noSwipingSelector","passiveListeners","containerModifierClass","slideClass","slideActiveClass","slideVisibleClass","slideFullyVisibleClass","slideNextClass","slidePrevClass","slideBlankClass","wrapperClass","lazyPreloaderClass","lazyPreloadPrevNext","runCallbacksOnInit","observer","observeParents","observeSlideChildren","a11y","_autoplay","_controller","coverflowEffect","cubeEffect","fadeEffect","flipEffect","creativeEffect","cardsEffect","hashNavigation","history","keyboard","mousewheel","_navigation","_pagination","parallax","_scrollbar","_thumbs","virtual","zoom","control"];function ti(e){return typeof e=="object"&&e!==null&&e.constructor&&Object.prototype.toString.call(e).slice(8,-1)==="Object"&&!e.__swiper__}function Bi(e,t){const n=["__proto__","constructor","prototype"];Object.keys(t).filter(r=>n.indexOf(r)<0).forEach(r=>{typeof e[r]>"u"?e[r]=t[r]:ti(t[r])&&ti(e[r])&&Object.keys(t[r]).length>0?t[r].__swiper__?e[r]=t[r]:Bi(e[r],t[r]):e[r]=t[r]})}function qS(e={}){return e.navigation&&typeof e.navigation.nextEl>"u"&&typeof e.navigation.prevEl>"u"}function YS(e={}){return e.pagination&&typeof e.pagination.el>"u"}function XS(e={}){return e.scrollbar&&typeof e.scrollbar.el>"u"}function KS(e=""){const t=e.split(" ").map(r=>r.trim()).filter(r=>!!r),n=[];return t.forEach(r=>{n.indexOf(r)<0&&n.push(r)}),n.join(" ")}function kI(e=""){return e?e.includes("swiper-wrapper")?e:`swiper-wrapper ${e}`:"swiper-wrapper"}function PI({swiper:e,slides:t,passedParams:n,changedParams:r,nextEl:i,prevEl:o,scrollbarEl:a,paginationEl:l}){const s=r.filter(_=>_!=="children"&&_!=="direction"&&_!=="wrapperClass"),{params:u,pagination:d,navigation:c,scrollbar:y,virtual:p,thumbs:m}=e;let v,w,h,g,x,S,C,T;r.includes("thumbs")&&n.thumbs&&n.thumbs.swiper&&!n.thumbs.swiper.destroyed&&u.thumbs&&(!u.thumbs.swiper||u.thumbs.swiper.destroyed)&&(v=!0),r.includes("controller")&&n.controller&&n.controller.control&&u.controller&&!u.controller.control&&(w=!0),r.includes("pagination")&&n.pagination&&(n.pagination.el||l)&&(u.pagination||u.pagination===!1)&&d&&!d.el&&(h=!0),r.includes("scrollbar")&&n.scrollbar&&(n.scrollbar.el||a)&&(u.scrollbar||u.scrollbar===!1)&&y&&!y.el&&(g=!0),r.includes("navigation")&&n.navigation&&(n.navigation.prevEl||o)&&(n.navigation.nextEl||i)&&(u.navigation||u.navigation===!1)&&c&&!c.prevEl&&!c.nextEl&&(x=!0);const E=_=>{e[_]&&(e[_].destroy(),_==="navigation"?(e.isElement&&(e[_].prevEl.remove(),e[_].nextEl.remove()),u[_].prevEl=void 0,u[_].nextEl=void 0,e[_].prevEl=void 0,e[_].nextEl=void 0):(e.isElement&&e[_].el.remove(),u[_].el=void 0,e[_].el=void 0))};r.includes("loop")&&e.isElement&&(u.loop&&!n.loop?S=!0:!u.loop&&n.loop?C=!0:T=!0),s.forEach(_=>{if(ti(u[_])&&ti(n[_]))Object.assign(u[_],n[_]),(_==="navigation"||_==="pagination"||_==="scrollbar")&&"enabled"in n[_]&&!n[_].enabled&&E(_);else{const $=n[_];($===!0||$===!1)&&(_==="navigation"||_==="pagination"||_==="scrollbar")?$===!1&&E(_):u[_]=n[_]}}),s.includes("controller")&&!w&&e.controller&&e.controller.control&&u.controller&&u.controller.control&&(e.controller.control=u.controller.control),r.includes("children")&&t&&p&&u.virtual.enabled?(p.slides=t,p.update(!0)):r.includes("virtual")&&p&&u.virtual.enabled&&(t&&(p.slides=t),p.update(!0)),r.includes("children")&&t&&u.loop&&(T=!0),v&&m.init()&&m.update(!0),w&&(e.controller.control=u.controller.control),h&&(e.isElement&&(!l||typeof l=="string")&&(l=document.createElement("div"),l.classList.add("swiper-pagination"),l.part.add("pagination"),e.el.appendChild(l)),l&&(u.pagination.el=l),d.init(),d.render(),d.update()),g&&(e.isElement&&(!a||typeof a=="string")&&(a=document.createElement("div"),a.classList.add("swiper-scrollbar"),a.part.add("scrollbar"),e.el.appendChild(a)),a&&(u.scrollbar.el=a),y.init(),y.updateSize(),y.setTranslate()),x&&(e.isElement&&((!i||typeof i=="string")&&(i=document.createElement("div"),i.classList.add("swiper-button-next"),Da(i,e.navigation.arrowSvg),i.part.add("button-next"),e.el.appendChild(i)),(!o||typeof o=="string")&&(o=document.createElement("div"),o.classList.add("swiper-button-prev"),Da(o,e.navigation.arrowSvg),o.part.add("button-prev"),e.el.appendChild(o))),i&&(u.navigation.nextEl=i),o&&(u.navigation.prevEl=o),c.init(),c.update()),r.includes("allowSlideNext")&&(e.allowSlideNext=n.allowSlideNext),r.includes("allowSlidePrev")&&(e.allowSlidePrev=n.allowSlidePrev),r.includes("direction")&&e.changeDirection(n.direction,!1),(S||T)&&e.loopDestroy(),(C||T)&&e.loopCreate(),e.update()}function TI(e={},t=!0){const n={on:{}},r={},i={};Bi(n,Op),n._emitClasses=!0,n.init=!1;const o={},a=GS.map(s=>s.replace(/_/,"")),l=Object.assign({},e);return Object.keys(l).forEach(s=>{typeof e[s]>"u"||(a.indexOf(s)>=0?ti(e[s])?(n[s]={},i[s]={},Bi(n[s],e[s]),Bi(i[s],e[s])):(n[s]=e[s],i[s]=e[s]):s.search(/on[A-Z]/)===0&&typeof e[s]=="function"?t?r[`${s[2].toLowerCase()}${s.substr(3)}`]=e[s]:n.on[`${s[2].toLowerCase()}${s.substr(3)}`]=e[s]:o[s]=e[s])}),["navigation","pagination","scrollbar"].forEach(s=>{n[s]===!0&&(n[s]={}),n[s]===!1&&delete n[s]}),{params:n,passedParams:i,rest:o,events:r}}function OI({el:e,nextEl:t,prevEl:n,paginationEl:r,scrollbarEl:i,swiper:o},a){qS(a)&&t&&n&&(o.params.navigation.nextEl=t,o.originalParams.navigation.nextEl=t,o.params.navigation.prevEl=n,o.originalParams.navigation.prevEl=n),YS(a)&&r&&(o.params.pagination.el=r,o.originalParams.pagination.el=r),XS(a)&&i&&(o.params.scrollbar.el=i,o.originalParams.scrollbar.el=i),o.init(e)}function jI(e,t,n,r,i){const o=[];if(!t)return o;const a=s=>{o.indexOf(s)<0&&o.push(s)};if(n&&r){const s=r.map(i),u=n.map(i);s.join("")!==u.join("")&&a("children"),r.length!==n.length&&a("children")}return GS.filter(s=>s[0]==="_").map(s=>s.replace(/_/,"")).forEach(s=>{if(s in e&&s in t)if(ti(e[s])&&ti(t[s])){const u=Object.keys(e[s]),d=Object.keys(t[s]);u.length!==d.length?a(s):(u.forEach(c=>{e[s][c]!==t[s][c]&&a(s)}),d.forEach(c=>{e[s][c]!==t[s][c]&&a(s)}))}else e[s]!==t[s]&&a(s)}),o}const MI=e=>{!e||e.destroyed||!e.params.virtual||e.params.virtual&&!e.params.virtual.enabled||(e.updateSlides(),e.updateProgress(),e.updateSlidesClasses(),e.emit("_virtualUpdated"),e.parallax&&e.params.parallax&&e.params.parallax.enabled&&e.parallax.setTranslate())};function Ql(){return Ql=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ql.apply(this,arguments)}function QS(e){return e.type&&e.type.displayName&&e.type.displayName.includes("SwiperSlide")}function ZS(e){const t=[];return X.Children.toArray(e).forEach(n=>{QS(n)?t.push(n):n.props&&n.props.children&&ZS(n.props.children).forEach(r=>t.push(r))}),t}function $I(e){const t=[],n={"container-start":[],"container-end":[],"wrapper-start":[],"wrapper-end":[]};return X.Children.toArray(e).forEach(r=>{if(QS(r))t.push(r);else if(r.props&&r.props.slot&&n[r.props.slot])n[r.props.slot].push(r);else if(r.props&&r.props.children){const i=ZS(r.props.children);i.length>0?i.forEach(o=>t.push(o)):n["container-end"].push(r)}else n["container-end"].push(r)}),{slides:t,slots:n}}function II(e,t,n){if(!n)return null;const r=d=>{let c=d;return d<0?c=t.length+d:c>=t.length&&(c=c-t.length),c},i=e.isHorizontal()?{[e.rtlTranslate?"right":"left"]:`${n.offset}px`}:{top:`${n.offset}px`},{from:o,to:a}=n,l=e.params.loop?-t.length:0,s=e.params.loop?t.length*2:t.length,u=[];for(let d=l;d<s;d+=1)d>=o&&d<=a&&u.push(t[r(d)]);return u.map((d,c)=>X.cloneElement(d,{swiper:e,style:i,key:d.props.virtualIndex||d.key||`slide-${c}`}))}function oa(e,t){return typeof window>"u"?b.useEffect(e,t):b.useLayoutEffect(e,t)}const kv=b.createContext(null),DI=b.createContext(null),JS=b.forwardRef(({className:e,tag:t="div",wrapperTag:n="div",children:r,onSwiper:i,...o}={},a)=>{let l=!1;const[s,u]=b.useState("swiper"),[d,c]=b.useState(null),[y,p]=b.useState(!1),m=b.useRef(!1),v=b.useRef(null),w=b.useRef(null),h=b.useRef(null),g=b.useRef(null),x=b.useRef(null),S=b.useRef(null),C=b.useRef(null),T=b.useRef(null),{params:E,passedParams:_,rest:$,events:M}=TI(o),{slides:R,slots:A}=$I(r),j=()=>{p(!y)};Object.assign(E.on,{_containerClasses(P,I){u(I)}});const F=()=>{Object.assign(E.on,M),l=!0;const P={...E};if(delete P.wrapperClass,w.current=new _m(P),w.current.virtual&&w.current.params.virtual.enabled){w.current.virtual.slides=R;const I={cache:!1,slides:R,renderExternal:c,renderExternalUpdate:!1};Bi(w.current.params.virtual,I),Bi(w.current.originalParams.virtual,I)}};v.current||F(),w.current&&w.current.on("_beforeBreakpoint",j);const L=()=>{l||!M||!w.current||Object.keys(M).forEach(P=>{w.current.on(P,M[P])})},O=()=>{!M||!w.current||Object.keys(M).forEach(P=>{w.current.off(P,M[P])})};b.useEffect(()=>()=>{w.current&&w.current.off("_beforeBreakpoint",j)}),b.useEffect(()=>{!m.current&&w.current&&(w.current.emitSlidesClasses(),m.current=!0)}),oa(()=>{if(a&&(a.current=v.current),!!v.current)return w.current.destroyed&&F(),OI({el:v.current,nextEl:x.current,prevEl:S.current,paginationEl:C.current,scrollbarEl:T.current,swiper:w.current},E),i&&!w.current.destroyed&&i(w.current),()=>{w.current&&!w.current.destroyed&&w.current.destroy(!0,!1)}},[]),oa(()=>{L();const P=jI(_,h.current,R,g.current,I=>I.key);return h.current=_,g.current=R,P.length&&w.current&&!w.current.destroyed&&PI({swiper:w.current,slides:R,passedParams:_,changedParams:P,nextEl:x.current,prevEl:S.current,scrollbarEl:T.current,paginationEl:C.current}),()=>{O()}}),oa(()=>{MI(w.current)},[d]);function D(){return E.virtual?II(w.current,R,d):R.map((P,I)=>X.cloneElement(P,{swiper:w.current,swiperSlideIndex:I}))}return X.createElement(t,Ql({ref:v,className:KS(`${s}${e?` ${e}`:""}`)},$),X.createElement(DI.Provider,{value:w.current},A["container-start"],X.createElement(n,{className:kI(E.wrapperClass)},A["wrapper-start"],D(),A["wrapper-end"]),qS(E)&&X.createElement(X.Fragment,null,X.createElement("div",{ref:S,className:"swiper-button-prev"}),X.createElement("div",{ref:x,className:"swiper-button-next"})),XS(E)&&X.createElement("div",{ref:T,className:"swiper-scrollbar"}),YS(E)&&X.createElement("div",{ref:C,className:"swiper-pagination"}),A["container-end"]))});JS.displayName="Swiper";const e2=b.forwardRef(({tag:e="div",children:t,className:n="",swiper:r,zoom:i,lazy:o,virtualIndex:a,swiperSlideIndex:l,...s}={},u)=>{const d=b.useRef(null),[c,y]=b.useState("swiper-slide"),[p,m]=b.useState(!1);function v(x,S,C){S===d.current&&y(C)}oa(()=>{if(typeof l<"u"&&(d.current.swiperSlideIndex=l),u&&(u.current=d.current),!(!d.current||!r)){if(r.destroyed){c!=="swiper-slide"&&y("swiper-slide");return}return r.on("_slideClass",v),()=>{r&&r.off("_slideClass",v)}}}),oa(()=>{r&&d.current&&!r.destroyed&&y(r.getSlideClasses(d.current))},[r]);const w={isActive:c.indexOf("swiper-slide-active")>=0,isVisible:c.indexOf("swiper-slide-visible")>=0,isPrev:c.indexOf("swiper-slide-prev")>=0,isNext:c.indexOf("swiper-slide-next")>=0},h=()=>typeof t=="function"?t(w):t,g=()=>{m(!0)};return X.createElement(e,Ql({ref:d,className:KS(`${c}${n?` ${n}`:""}`),"data-swiper-slide-index":a,onLoad:g},s),i&&X.createElement(kv.Provider,{value:w},X.createElement("div",{className:"swiper-zoom-container","data-swiper-zoom":typeof i=="number"?i:void 0},h(),o&&!p&&X.createElement("div",{className:"swiper-lazy-preloader",ref:x=>{x&&(x.lazyPreloaderManaged=!0)}}))),!i&&X.createElement(kv.Provider,{value:w},h(),o&&!p&&X.createElement("div",{className:"swiper-lazy-preloader",ref:x=>{x&&(x.lazyPreloaderManaged=!0)}})))});e2.displayName="SwiperSlide";const LI=k.section`
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
`,AI=k.div`
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
`,RI=k.div`
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
`,FI=k(Oe)`
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
`,zI=[{id:1,title:"Дідів хлів - найкращий вибір для Вашого велосипеда",desc:"Якісні запчастини, професійний серевіс та індивідуальний підхід. Створюйте ідеальний байк разом з нами",img:"/Didiv/bike2-hero.jpeg",btn:"До каталогу",url:"/catalog"},{id:2,title:"Постійне оновлення товару",desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam reprehenderit obcaecati molestias est alias vitae laboriosam nulla perferendis officia incidunt aliquid voluptatem iste libero, officiis ex modi enim repellat. Consectetur!",img:"/Didiv/inside.webp",btn:"До новинок",url:"/catalog/new"}],NI=()=>f.jsx(LI,{children:f.jsx(JS,{modules:[h$,g$,m$],spaceBetween:0,slidesPerView:1,navigation:!0,pagination:{clickable:!0},autoplay:{delay:5e3},loop:!0,children:zI.map(e=>f.jsx(e2,{children:f.jsx(AI,{bg:e.img,children:f.jsxs(RI,{children:[f.jsx("h1",{children:e.title}),f.jsx("p",{children:e.desc}),f.jsx(FI,{to:e.url,children:e.btn})]})})},e.id))})}),BI=k.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  margin-bottom:30px;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`,Id=k.div`
  background-color: #ffffffde;
  padding: 20px;
  border: 1px solid #e3e2e2;
  border-radius: 8px;
`,Dd=k.div`
  font-size: 24px;
  font-weight: bold;
  color: var(--orange-color);
`,Ld=k.div`
  font-size: 14px;
  color: #888;
`,t2=()=>f.jsxs(BI,{children:[f.jsxs(Id,{children:[f.jsx(Dd,{children:"3000+"}),f.jsx(Ld,{children:"Перевірених деталей"})]}),f.jsxs(Id,{children:[f.jsx(Dd,{children:"6 років"}),f.jsx(Ld,{children:"Досвіду на ринку"})]}),f.jsxs(Id,{children:[f.jsx(Dd,{children:"100%"}),f.jsx(Ld,{children:"Контроль якості"})]})]}),VI=Ae.div`
  background:var(--background-color);
`,UI=Ae.div`
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
`;Ae.h1`
  margin: 0;
  margin-right: 10px;
  color: #ffffff;
  text-shadow:
    0 0 5px #00baff,
    0 0 10px #00baff,
    0 0 20px #00baff,
    0 0 40px #00baff,
    0 0 80px #00baff;
`;Ae.img`
  width: 40px;
  height: 40px;
  object-fit: cover;
`;const HI=()=>f.jsx(VI,{children:f.jsxs(UI,{children:[f.jsx(NI,{}),f.jsx(xw,{}),f.jsx(r$,{}),f.jsx(t2,{})]})}),WI=k.div`
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
`,GI=k.section`
  background-color:  var(--second-background);
`,qI=k.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  justify-content: flex-start;
  margin-bottom: 16px;

  @media (min-width: 768px) {
    display: none;
  }
`,YI=k.button`
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
`,XI=k.svg`
  width: 20px;
  height: 20px;
  fill: var(--white-color);
`,KI=k.button`
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
`;const QI=k.div`
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
`,ZI=k.div`
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
`;const JI=k.div`
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
`;const eD=k.div`
  padding: 20px;
  border-top: 1px solid #eee;
  background: white;
`,tD=k.button`
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
`,n2=k.button`
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
`,nD=k.div`
  position: relative;
  display: inline-block;

`,rD=k.div`
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
`,mi=k.div`
  padding: 10px 12px;
  cursor: pointer;

  &:hover {
    background: #f0f0f0;
  }
`,iD=k.aside`

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
`,oD=k.h3`
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
`;const aD=k.div`
  border-bottom: 1px solid #eee;
  padding: 12px;
  margin-bottom: 12px;

  &:last-child {
    border-bottom: none;
  }
`,sD=k.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  padding: 8px 0;
  
  &:hover p {
    color: #85683d;
  }
`,lD=k.p`
  font-weight: 600;
  font-size: 16px;
  margin: 0;
  color: #222;
  transition: color 0.2s;
`,uD=k.span`
  border: solid #555;
  border-width: 0 2px 2px 0;
  display: inline-block;
  padding: 3px;
  transform: ${e=>e.isOpen?"rotate(-135deg)":"rotate(45deg)"};
  transition: transform 0.3s ease;
`,cD=k.div`
  max-height: ${e=>e.isOpen?"500px":"0"};
  overflow: hidden;
  transition: max-height 0.3s ease-in-out, opacity 0.3s;
  opacity: ${e=>e.isOpen?"1":"0"};
  padding: ${e=>e.isOpen?"12px":"0"};
`,dD=k.label`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  cursor: pointer;
  font-size: 15px;
  color: #444;

  &:hover span:first-of-type {
    border-color: #85683d;
  }
`,jp=k.input.attrs({type:"checkbox"})`
  display: none;
`,fD=k.span`
  width: 20px;
  height: 20px;
  border: 2px solid #ddd;
  border-radius: 4px;
  margin-right: 12px;
  position: relative;
  flex-shrink: 0;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);

  ${jp}:checked + & {
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

  ${jp}:checked + &::after {
    opacity: 1;
  }
`;var Mp={},Cm={},Em={},yo={};Object.defineProperty(yo,"__esModule",{value:!0});yo.Direction=void 0;var Pv;(function(e){e.Right="to right",e.Left="to left",e.Down="to bottom",e.Up="to top"})(Pv||(yo.Direction=Pv={}));(function(e){var t=te&&te.__spreadArray||function(A,j,F){if(F||arguments.length===2)for(var L=0,O=j.length,D;L<O;L++)(D||!(L in j))&&(D||(D=Array.prototype.slice.call(j,0,L)),D[L]=j[L]);return A.concat(D||Array.prototype.slice.call(j))};Object.defineProperty(e,"__esModule",{value:!0}),e.isIOS=e.useThumbOverlap=e.assertUnreachable=e.voidFn=e.getTrackBackground=e.replaceAt=e.schd=e.translate=e.getClosestThumbIndex=e.translateThumbs=e.getPaddingAndBorder=e.getMargin=e.checkInitialOverlap=e.checkValuesAgainstBoundaries=e.checkBoundaries=e.isVertical=e.relativeValue=e.normalizeValue=e.isStepDivisible=e.isTouchEvent=e.getStepDecimals=void 0;var n=b,r=yo,i=function(A){var j=A.toString().split(".")[1];return j?j.length:0};e.getStepDecimals=i;function o(A){return A.touches&&A.touches.length||A.changedTouches&&A.changedTouches.length}e.isTouchEvent=o;function a(A,j,F){var L=(j-A)/F,O=8,D=Number(L.toFixed(O));return parseInt(D.toString(),10)===D}e.isStepDivisible=a;function l(A,j,F,L,O,D,P){var I=1e11;if(A=Math.round(A*I)/I,!D){var z=P[j-1],B=P[j+1];if(z&&z>A)return z;if(B&&B<A)return B}if(A>L)return L;if(A<F)return F;var N=Math.floor(A*I-F*I)%Math.floor(O*I),U=Math.floor(A*I-Math.abs(N)),H=N===0?A:U/I,q=Math.abs(N/I)<O/2?H:H+O,K=(0,e.getStepDecimals)(O);return parseFloat(q.toFixed(K))}e.normalizeValue=l;function s(A,j,F){return(A-j)/(F-j)}e.relativeValue=s;function u(A){return A===r.Direction.Up||A===r.Direction.Down}e.isVertical=u;function d(A,j,F){if(j>=F)throw new RangeError("min (".concat(j,") is equal/bigger than max (").concat(F,")"));if(A<j)throw new RangeError("value (".concat(A,") is smaller than min (").concat(j,")"));if(A>F)throw new RangeError("value (".concat(A,") is bigger than max (").concat(F,")"))}e.checkBoundaries=d;function c(A,j,F){return A<j?j:A>F?F:A}e.checkValuesAgainstBoundaries=c;function y(A){if(!(A.length<2)&&!A.slice(1).every(function(j,F){return A[F]<=j}))throw new RangeError("values={[".concat(A,"]} needs to be sorted when allowOverlap={false}"))}e.checkInitialOverlap=y;function p(A){var j=window.getComputedStyle(A);return{top:parseInt(j["margin-top"],10),bottom:parseInt(j["margin-bottom"],10),left:parseInt(j["margin-left"],10),right:parseInt(j["margin-right"],10)}}e.getMargin=p;function m(A){var j=window.getComputedStyle(A);return{top:parseInt(j["padding-top"],10)+parseInt(j["border-top-width"],10),bottom:parseInt(j["padding-bottom"],10)+parseInt(j["border-bottom-width"],10),left:parseInt(j["padding-left"],10)+parseInt(j["border-left-width"],10),right:parseInt(j["padding-right"],10)+parseInt(j["border-right-width"],10)}}e.getPaddingAndBorder=m;function v(A,j,F){var L=F?-1:1;A.forEach(function(O,D){return h(O,L*j[D].x,j[D].y)})}e.translateThumbs=v;function w(A,j,F,L){for(var O=0,D=M(A[0],j,F,L),P=1;P<A.length;P++){var I=M(A[P],j,F,L);I<D&&(D=I,O=P)}return O}e.getClosestThumbIndex=w;function h(A,j,F){A.style.transform="translate(".concat(j,"px, ").concat(F,"px)")}e.translate=h;var g=function(A){var j=[],F=null,L=function(){for(var O=[],D=0;D<arguments.length;D++)O[D]=arguments[D];j=O,!F&&(F=requestAnimationFrame(function(){F=null,A.apply(void 0,j)}))};return L};e.schd=g;function x(A,j,F){var L=A.slice(0);return L[j]=F,L}e.replaceAt=x;function S(A){var j=A.values,F=A.colors,L=A.min,O=A.max,D=A.direction,P=D===void 0?r.Direction.Right:D,I=A.rtl,z=I===void 0?!1:I;z&&P===r.Direction.Right?P=r.Direction.Left:z&&r.Direction.Left&&(P=r.Direction.Right);var B=j.slice(0).sort(function(U,H){return U-H}).map(function(U){return(U-L)/(O-L)*100}),N=B.reduce(function(U,H,q){return"".concat(U,", ").concat(F[q]," ").concat(H,"%, ").concat(F[q+1]," ").concat(H,"%")},"");return"linear-gradient(".concat(P,", ").concat(F[0]," 0%").concat(N,", ").concat(F[F.length-1]," 100%)")}e.getTrackBackground=S;function C(){}e.voidFn=C;function T(A){throw new Error("Didn't expect to get here")}e.assertUnreachable=T;var E=function(A,j,F,L,O){O===void 0&&(O=function(P){return P});var D=Math.ceil(t([A],Array.from(A.children),!0).reduce(function(P,I){var z=Math.ceil(I.getBoundingClientRect().width);if(I.innerText&&I.innerText.includes(F)&&I.childElementCount===0){var B=I.cloneNode(!0);B.innerHTML=O(j.toFixed(L)),B.style.visibility="hidden",document.body.appendChild(B),z=Math.ceil(B.getBoundingClientRect().width),document.body.removeChild(B)}return z>P?z:P},A.getBoundingClientRect().width));return D},_=function(A,j,F,L,O,D,P){P===void 0&&(P=function(B){return B});var I=[],z=function(B){var N=E(F[B],L[B],O,D,P),U=j[B].x;j.forEach(function(H,q){var K=H.x,ee=E(F[q],L[q],O,D,P);B!==q&&(U>=K&&U<=K+ee||U+N>=K&&U+N<=K+ee)&&(I.includes(q)||(I.push(B),I.push(q),I=t(t([],I,!0),[B,q],!1),z(q)))})};return z(A),Array.from(new Set(I.sort()))},$=function(A,j,F,L,O,D){L===void 0&&(L=.1),O===void 0&&(O=" - "),D===void 0&&(D=function(q){return q});var P=(0,e.getStepDecimals)(L),I=(0,n.useState)({}),z=I[0],B=I[1],N=(0,n.useState)(D(j[F].toFixed(P))),U=N[0],H=N[1];return(0,n.useEffect)(function(){if(A){var q=A.getThumbs();if(q.length<1)return;var K={},ee=A.getOffsets(),fe=_(F,ee,q,j,O,P,D),be=D(j[F].toFixed(P));if(fe.length){var ie=fe.reduce(function(yt,bo,Za,wo){return yt.length?t(t([],yt,!0),[ee[wo[Za]].x],!1):[ee[wo[Za]].x]},[]);if(Math.min.apply(Math,ie)===ee[F].x){var Me=[];fe.forEach(function(yt){Me.push(j[yt].toFixed(P))}),be=Array.from(new Set(Me.sort(function(yt,bo){return parseFloat(yt)-parseFloat(bo)}))).map(D).join(O);var Be=Math.min.apply(Math,ie),Ve=Math.max.apply(Math,ie),li=q[fe[ie.indexOf(Ve)]].getBoundingClientRect().width;K.left="".concat(Math.abs(Be-(Ve+li))/2,"px"),K.transform="translate(-50%, 0)"}else K.visibility="hidden"}H(be),B(K)}},[A,j]),[U,z]};e.useThumbOverlap=$;function M(A,j,F,L){var O=A.getBoundingClientRect(),D=O.left,P=O.top,I=O.width,z=O.height;return u(L)?Math.abs(F-(P+z/2)):Math.abs(j-(D+I/2))}var R=function(){var A,j=((A=navigator.userAgentData)===null||A===void 0?void 0:A.platform)||navigator.platform;return["iPad Simulator","iPhone Simulator","iPod Simulator","iPad","iPhone","iPod"].includes(j)||navigator.userAgent.includes("Mac")&&"ontouchend"in document};e.isIOS=R})(Em);var pD=te&&te.__extends||function(){var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,i){r.__proto__=i}||function(r,i){for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(r[o]=i[o])},e(t,n)};return function(t,n){if(typeof n!="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");e(t,n);function r(){this.constructor=t}t.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}}(),hD=te&&te.__createBinding||(Object.create?function(e,t,n,r){r===void 0&&(r=n);var i=Object.getOwnPropertyDescriptor(t,n);(!i||("get"in i?!t.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,i)}:function(e,t,n,r){r===void 0&&(r=n),e[r]=t[n]}),mD=te&&te.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),gD=te&&te.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)n!=="default"&&Object.prototype.hasOwnProperty.call(e,n)&&hD(t,e,n);return mD(t,e),t},Tv=te&&te.__spreadArray||function(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,o;r<i;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))};Object.defineProperty(Cm,"__esModule",{value:!0});var Es=gD(b),oe=Em,Re=yo,vD=["ArrowRight","ArrowUp","k","PageUp"],yD=["ArrowLeft","ArrowDown","j","PageDown"],xD=function(e){pD(t,e);function t(n){var r=e.call(this,n)||this;if(r.trackRef=Es.createRef(),r.thumbRefs=[],r.state={draggedTrackPos:[-1,-1],draggedThumbIndex:-1,thumbZIndexes:new Array(r.props.values.length).fill(0).map(function(i,o){return o}),isChanged:!1,markOffsets:[]},r.getOffsets=function(){var i=r.props,o=i.direction,a=i.values,l=i.min,s=i.max,u=r.trackRef.current;if(!u)return console.warn("No track element found."),[];var d=u.getBoundingClientRect(),c=(0,oe.getPaddingAndBorder)(u);return r.getThumbs().map(function(y,p){var m={x:0,y:0},v=y.getBoundingClientRect(),w=(0,oe.getMargin)(y);switch(o){case Re.Direction.Right:return m.x=(w.left+c.left)*-1,m.y=((v.height-d.height)/2+c.top)*-1,m.x+=d.width*(0,oe.relativeValue)(a[p],l,s)-v.width/2,m;case Re.Direction.Left:return m.x=(w.right+c.right)*-1,m.y=((v.height-d.height)/2+c.top)*-1,m.x+=d.width-d.width*(0,oe.relativeValue)(a[p],l,s)-v.width/2,m;case Re.Direction.Up:return m.x=((v.width-d.width)/2+w.left+c.left)*-1,m.y=-c.left,m.y+=d.height-d.height*(0,oe.relativeValue)(a[p],l,s)-v.height/2,m;case Re.Direction.Down:return m.x=((v.width-d.width)/2+w.left+c.left)*-1,m.y=-c.left,m.y+=d.height*(0,oe.relativeValue)(a[p],l,s)-v.height/2,m;default:return(0,oe.assertUnreachable)(o)}})},r.getThumbs=function(){return r.trackRef&&r.trackRef.current?Array.from(r.trackRef.current.children).filter(function(i){return i.hasAttribute("aria-valuenow")}):(console.warn("No thumbs found in the track container. Did you forget to pass & spread the `props` param in renderTrack?"),[])},r.getTargetIndex=function(i){return r.getThumbs().findIndex(function(o){return o===i.target||o.contains(i.target)})},r.addTouchEvents=function(i){document.addEventListener("touchmove",r.schdOnTouchMove,{passive:!1}),document.addEventListener("touchend",r.schdOnEnd,{passive:!1}),document.addEventListener("touchcancel",r.schdOnEnd,{passive:!1})},r.addMouseEvents=function(i){document.addEventListener("mousemove",r.schdOnMouseMove),document.addEventListener("mouseup",r.schdOnEnd)},r.onMouseDownTrack=function(i){var o;if(!(i.button!==0||(0,oe.isIOS)()))if(i.persist(),i.preventDefault(),r.addMouseEvents(i.nativeEvent),r.props.values.length>1&&r.props.draggableTrack){if(r.thumbRefs.some(function(l){var s;return(s=l.current)===null||s===void 0?void 0:s.contains(i.target)}))return;r.setState({draggedTrackPos:[i.clientX,i.clientY]},function(){return r.onMove(i.clientX,i.clientY)})}else{var a=(0,oe.getClosestThumbIndex)(r.thumbRefs.map(function(l){return l.current}),i.clientX,i.clientY,r.props.direction);(o=r.thumbRefs[a].current)===null||o===void 0||o.focus(),r.setState({draggedThumbIndex:a},function(){return r.onMove(i.clientX,i.clientY)})}},r.onResize=function(){(0,oe.translateThumbs)(r.getThumbs(),r.getOffsets(),r.props.rtl),r.calculateMarkOffsets()},r.onTouchStartTrack=function(i){var o;if(i.persist(),r.addTouchEvents(i.nativeEvent),r.props.values.length>1&&r.props.draggableTrack){if(r.thumbRefs.some(function(l){var s;return(s=l.current)===null||s===void 0?void 0:s.contains(i.target)}))return;r.setState({draggedTrackPos:[i.touches[0].clientX,i.touches[0].clientY]},function(){return r.onMove(i.touches[0].clientX,i.touches[0].clientY)})}else{var a=(0,oe.getClosestThumbIndex)(r.thumbRefs.map(function(l){return l.current}),i.touches[0].clientX,i.touches[0].clientY,r.props.direction);(o=r.thumbRefs[a].current)===null||o===void 0||o.focus(),r.setState({draggedThumbIndex:a},function(){return r.onMove(i.touches[0].clientX,i.touches[0].clientY)})}},r.onMouseOrTouchStart=function(i){if(!r.props.disabled){var o=(0,oe.isTouchEvent)(i);if(!(!o&&i.button!==0)){var a=r.getTargetIndex(i);a!==-1&&(o?r.addTouchEvents(i):r.addMouseEvents(i),r.setState({draggedThumbIndex:a,thumbZIndexes:r.state.thumbZIndexes.map(function(l,s){return s===a?Math.max.apply(Math,r.state.thumbZIndexes):l<=r.state.thumbZIndexes[a]?l:l-1})}))}}},r.onMouseMove=function(i){i.preventDefault(),r.onMove(i.clientX,i.clientY)},r.onTouchMove=function(i){i.preventDefault(),r.onMove(i.touches[0].clientX,i.touches[0].clientY)},r.onKeyDown=function(i){var o=r.props,a=o.values,l=o.onChange,s=o.step,u=o.rtl,d=o.direction,c=r.state.isChanged,y=r.getTargetIndex(i.nativeEvent),p=u||d===Re.Direction.Left||d===Re.Direction.Down?-1:1;y!==-1&&(vD.includes(i.key)?(i.preventDefault(),r.setState({draggedThumbIndex:y,isChanged:!0}),l((0,oe.replaceAt)(a,y,r.normalizeValue(a[y]+p*(i.key==="PageUp"?s*10:s),y)))):yD.includes(i.key)?(i.preventDefault(),r.setState({draggedThumbIndex:y,isChanged:!0}),l((0,oe.replaceAt)(a,y,r.normalizeValue(a[y]-p*(i.key==="PageDown"?s*10:s),y)))):i.key==="Tab"?r.setState({draggedThumbIndex:-1},function(){c&&r.fireOnFinalChange()}):c&&r.fireOnFinalChange())},r.onKeyUp=function(i){var o=r.state.isChanged;r.setState({draggedThumbIndex:-1},function(){o&&r.fireOnFinalChange()})},r.onMove=function(i,o){var a=r.state,l=a.draggedThumbIndex,s=a.draggedTrackPos,u=r.props,d=u.direction,c=u.min,y=u.max,p=u.onChange,m=u.values,v=u.step,w=u.rtl;if(l===-1&&s[0]===-1&&s[1]===-1)return null;var h=r.trackRef.current;if(!h)return null;var g=h.getBoundingClientRect(),x=(0,oe.isVertical)(d)?g.height:g.width;if(s[0]!==-1&&s[1]!==-1){var S=i-s[0],C=o-s[1],T=0;switch(d){case Re.Direction.Right:case Re.Direction.Left:T=S/x*(y-c);break;case Re.Direction.Down:case Re.Direction.Up:T=C/x*(y-c);break;default:(0,oe.assertUnreachable)(d)}if(w&&(T*=-1),Math.abs(T)>=v/2){for(var E=0;E<r.thumbRefs.length;E++){if(m[E]===y&&Math.sign(T)===1||m[E]===c&&Math.sign(T)===-1)return;var _=m[E]+T;_>y?T=y-m[E]:_<c&&(T=c-m[E])}for(var $=m.slice(0),E=0;E<r.thumbRefs.length;E++)$=(0,oe.replaceAt)($,E,r.normalizeValue(m[E]+T,E));r.setState({draggedTrackPos:[i,o]}),p($)}}else{var M=0;switch(d){case Re.Direction.Right:M=(i-g.left)/x*(y-c)+c;break;case Re.Direction.Left:M=(x-(i-g.left))/x*(y-c)+c;break;case Re.Direction.Down:M=(o-g.top)/x*(y-c)+c;break;case Re.Direction.Up:M=(x-(o-g.top))/x*(y-c)+c;break;default:(0,oe.assertUnreachable)(d)}w&&(M=y+c-M),Math.abs(m[l]-M)>=v/2&&p((0,oe.replaceAt)(m,l,r.normalizeValue(M,l)))}},r.normalizeValue=function(i,o){var a=r.props,l=a.min,s=a.max,u=a.step,d=a.allowOverlap,c=a.values;return(0,oe.normalizeValue)(i,o,l,s,u,d,c)},r.onEnd=function(i){if(i.preventDefault(),document.removeEventListener("mousemove",r.schdOnMouseMove),document.removeEventListener("touchmove",r.schdOnTouchMove),document.removeEventListener("mouseup",r.schdOnEnd),document.removeEventListener("touchend",r.schdOnEnd),document.removeEventListener("touchcancel",r.schdOnEnd),r.state.draggedThumbIndex===-1&&r.state.draggedTrackPos[0]===-1&&r.state.draggedTrackPos[1]===-1)return null;r.setState({draggedThumbIndex:-1,draggedTrackPos:[-1,-1]},function(){r.fireOnFinalChange()})},r.fireOnFinalChange=function(){r.setState({isChanged:!1});var i=r.props,o=i.onFinalChange,a=i.values;o&&o(a)},r.updateMarkRefs=function(i){if(!i.renderMark){r.numOfMarks=void 0,r.markRefs=void 0;return}r.numOfMarks=(i.max-i.min)/r.props.step,r.markRefs=[];for(var o=0;o<r.numOfMarks+1;o++)r.markRefs[o]=Es.createRef()},r.calculateMarkOffsets=function(){if(!(!r.props.renderMark||!r.trackRef||!r.numOfMarks||!r.markRefs||r.trackRef.current===null)){for(var i=window.getComputedStyle(r.trackRef.current),o=parseInt(i.width,10),a=parseInt(i.height,10),l=parseInt(i.paddingLeft,10),s=parseInt(i.paddingTop,10),u=[],d=0;d<r.numOfMarks+1;d++){var c=9999,y=9999;if(r.markRefs[d].current){var p=r.markRefs[d].current.getBoundingClientRect();c=p.height,y=p.width}r.props.direction===Re.Direction.Left||r.props.direction===Re.Direction.Right?u.push([Math.round(o/r.numOfMarks*d+l-y/2),-Math.round((c-a)/2)]):u.push([Math.round(a/r.numOfMarks*d+s-c/2),-Math.round((y-o)/2)])}r.setState({markOffsets:u})}},n.step===0)throw new Error('"step" property should be a positive number');return r.schdOnMouseMove=(0,oe.schd)(r.onMouseMove),r.schdOnTouchMove=(0,oe.schd)(r.onTouchMove),r.schdOnEnd=(0,oe.schd)(r.onEnd),r.thumbRefs=n.values.map(function(){return Es.createRef()}),r.updateMarkRefs(n),r}return t.prototype.componentDidMount=function(){var n=this,r=this.props,i=r.values,o=r.min,a=r.step;this.resizeObserver=window.ResizeObserver?new window.ResizeObserver(this.onResize):{observe:function(){return window.addEventListener("resize",n.onResize)},unobserve:function(){return window.removeEventListener("resize",n.onResize)}},document.addEventListener("touchstart",this.onMouseOrTouchStart,{passive:!1}),document.addEventListener("mousedown",this.onMouseOrTouchStart,{passive:!1}),!this.props.allowOverlap&&(0,oe.checkInitialOverlap)(this.props.values),this.props.values.forEach(function(l){return(0,oe.checkBoundaries)(l,n.props.min,n.props.max)}),this.resizeObserver.observe(this.trackRef.current),(0,oe.translateThumbs)(this.getThumbs(),this.getOffsets(),this.props.rtl),this.calculateMarkOffsets(),i.forEach(function(l){(0,oe.isStepDivisible)(o,l,a)||console.warn("The `values` property is in conflict with the current `step`, `min`, and `max` properties. Please provide values that are accessible using the min, max, and step values.")})},t.prototype.componentDidUpdate=function(n,r){var i=this.props,o=i.max,a=i.min,l=i.step,s=i.values,u=i.rtl;(n.max!==o||n.min!==a||n.step!==l)&&this.updateMarkRefs(this.props),(0,oe.translateThumbs)(this.getThumbs(),this.getOffsets(),u),(n.max!==o||n.min!==a||n.step!==l||r.markOffsets.length!==this.state.markOffsets.length)&&(this.calculateMarkOffsets(),s.forEach(function(d){(0,oe.isStepDivisible)(a,d,l)||console.warn("The `values` property is in conflict with the current `step`, `min`, and `max` properties. Please provide values that are accessible using the min, max, and step values.")}))},t.prototype.componentWillUnmount=function(){var n={passive:!1};document.removeEventListener("mousedown",this.onMouseOrTouchStart,n),document.removeEventListener("mousemove",this.schdOnMouseMove),document.removeEventListener("touchmove",this.schdOnTouchMove),document.removeEventListener("touchstart",this.onMouseOrTouchStart),document.removeEventListener("mouseup",this.schdOnEnd),document.removeEventListener("touchend",this.schdOnEnd),this.resizeObserver.unobserve(this.trackRef.current)},t.prototype.render=function(){var n=this,r=this.props,i=r.label,o=r.labelledBy,a=r.renderTrack,l=r.renderThumb,s=r.renderMark,u=s===void 0?function(){return null}:s,d=r.values,c=r.min,y=r.max,p=r.allowOverlap,m=r.disabled,v=this.state,w=v.draggedThumbIndex,h=v.thumbZIndexes,g=v.markOffsets;return a({props:{style:{transform:"scale(1)",cursor:w>-1?"grabbing":this.props.draggableTrack?(0,oe.isVertical)(this.props.direction)?"ns-resize":"ew-resize":d.length===1&&!m?"pointer":"inherit"},onMouseDown:m?oe.voidFn:this.onMouseDownTrack,onTouchStart:m?oe.voidFn:this.onTouchStartTrack,ref:this.trackRef},isDragged:this.state.draggedThumbIndex>-1,disabled:m,children:Tv(Tv([],g.map(function(x,S,C){return u({props:{style:n.props.direction===Re.Direction.Left||n.props.direction===Re.Direction.Right?{position:"absolute",left:"".concat(x[0],"px"),marginTop:"".concat(x[1],"px")}:{position:"absolute",top:"".concat(x[0],"px"),marginLeft:"".concat(x[1],"px")},key:"mark".concat(S),ref:n.markRefs[S]},index:S})}),!0),d.map(function(x,S){var C=n.state.draggedThumbIndex===S;return l({index:S,value:x,isDragged:C,props:{style:{position:"absolute",zIndex:h[S],cursor:m?"inherit":C?"grabbing":"grab",userSelect:"none",touchAction:"none",WebkitUserSelect:"none",MozUserSelect:"none",msUserSelect:"none"},key:S,tabIndex:m?void 0:0,"aria-valuemax":p?y:d[S+1]||y,"aria-valuemin":p?c:d[S-1]||c,"aria-valuenow":x,draggable:!1,ref:n.thumbRefs[S],"aria-label":i,"aria-labelledby":o,role:"slider",onKeyDown:m?oe.voidFn:n.onKeyDown,onKeyUp:m?oe.voidFn:n.onKeyUp}})}),!0)})},t.defaultProps={label:"Accessibility label",labelledBy:null,step:1,direction:Re.Direction.Right,rtl:!1,disabled:!1,allowOverlap:!1,draggableTrack:!1,min:0,max:100},t}(Es.Component);Cm.default=xD;(function(e){var t=te&&te.__importDefault||function(o){return o&&o.__esModule?o:{default:o}};Object.defineProperty(e,"__esModule",{value:!0}),e.checkValuesAgainstBoundaries=e.relativeValue=e.useThumbOverlap=e.Direction=e.getTrackBackground=e.Range=void 0;var n=t(Cm);e.Range=n.default;var r=Em;Object.defineProperty(e,"getTrackBackground",{enumerable:!0,get:function(){return r.getTrackBackground}}),Object.defineProperty(e,"useThumbOverlap",{enumerable:!0,get:function(){return r.useThumbOverlap}}),Object.defineProperty(e,"relativeValue",{enumerable:!0,get:function(){return r.relativeValue}}),Object.defineProperty(e,"checkValuesAgainstBoundaries",{enumerable:!0,get:function(){return r.checkValuesAgainstBoundaries}});var i=yo;Object.defineProperty(e,"Direction",{enumerable:!0,get:function(){return i.Direction}})})(Mp);const bD=k.div`
  padding: 20px 0;
`,wD=k.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`,Ov=k.input`
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
`;const SD=k.div`
  height: 6px;
  width: 100%;
  border-radius: 4px;
  background: ${({background:e})=>e};
`,_D=k.div`
  height: 18px;
  width: 18px;
  border-radius: 50%;
  background: #583d2d;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`,r2=({childValues:e,onChange:t})=>{const o=(e==null?void 0:e[0])??10,a=(e==null?void 0:e[1])??1e4,l=o!==a,[s,u]=b.useState([o,a]);b.useEffect(()=>{e&&e.length===2&&(u(e),t&&t(e))},[e,t]);const d=p=>{u(p),t&&t(p)},c=(p,m)=>{const v=m===""?"":Number(m),w=[...s];w[p]=v,d(w)},y=p=>{const m=[...s];p===0?((m[0]===""||m[0]<o)&&(m[0]=o),m[0]>m[1]-50&&(m[0]=m[1]-50)):((m[1]===""||m[1]>a)&&(m[1]=a),m[1]<m[0]+50&&(m[1]=m[0]+50)),d(m)};return f.jsx(f.Fragment,{children:l&&f.jsxs(bD,{children:[f.jsxs(wD,{children:[f.jsx(Ov,{type:"number",value:s[0],min:o,max:s[1],onChange:p=>c(0,p.target.value),onBlur:()=>y(0)}),f.jsx(Ov,{type:"number",value:s[1],min:s[0],max:a,onChange:p=>c(1,p.target.value),onBlur:()=>y(1)})]}),f.jsx(Mp.Range,{values:s,step:50,min:o,max:a,onChange:d,renderTrack:({props:p,children:m})=>f.jsx(SD,{...p,background:Mp.getTrackBackground({values:s,colors:["#ddd","#85683d","#ddd"],min:o,max:a}),children:m}),renderThumb:({props:p})=>f.jsx(_D,{...p})})]})})},CD=({childValues:e,category:t,selectedFilters:n,setSelectedFilters:r,setPriceRange:i})=>{const[o,a]=b.useState([]),[l,s]=b.useState({});b.useEffect(()=>{t&&(async()=>{try{const m=await fetch(`https://backenddidiv-production.up.railway.app/api/products?populate=*&filters[category][title][$eq]=${encodeURIComponent(t)}&pagination[pageSize]=200`);console.log(t);const v=await m.json();console.log("dataaaa",v.data);const w=v.data||[],h={};w.forEach(x=>{var S;(S=x.attributes)==null||S.forEach(C=>{h[C.label]||(h[C.label]=new Set),h[C.label].add(C.value)})});const g=Object.entries(h).map(([x,S])=>({type:"checkbox",label:x,name:x.toLowerCase(),options:Array.from(S)}));console.log("fillltr",g),a(g)}catch(m){console.error(m)}})()},[t]);const u=p=>{s(m=>({...m,[p]:!m[p]}))},d=(p,m)=>{r(v=>{const w=v[p]||[];return w.includes(m)?{...v,[p]:w.filter(h=>h!==m)}:{...v,[p]:[...w,m]}})},c=Object.values(n).some(p=>Array.isArray(p)&&p.length>0),y=()=>{c&&r({})};return console.log(c),f.jsxs(iD,{children:[f.jsxs(oD,{children:["Фільтри ",f.jsx(Bb,{size:20})]}),(o||[]).map(p=>{var v;const m=!!l[p.name];return f.jsxs(aD,{children:[f.jsxs(sD,{onClick:()=>u(p.name),children:[f.jsx(lD,{children:p.label}),f.jsx(uD,{isOpen:m})]}),f.jsxs(cD,{isOpen:m,children:[p.type==="checkbox"&&((v=p.options)==null?void 0:v.map(w=>{var h;return f.jsxs(dD,{children:[f.jsx(jp,{checked:((h=n[p.name])==null?void 0:h.includes(w))||!1,onChange:()=>d(p.name,w)}),f.jsx(fD,{}),w]},w)})),p.type==="range"&&f.jsx(r2,{onChange:i,childValues:e})]})]},p.name)}),f.jsx(n2,{onClick:y,disabled:!c,children:"Скинути обрані фільтри"})]})},ED=k.aside`
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
`;const kD=k.div`
  border-bottom: 1px solid #eee;
  padding: 12px;
  margin-bottom: 12px;

  &:last-child {
    border-bottom: none;
  }
`,PD=k.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  padding: 8px 0;
  
  &:hover p {
    color: #85683d;
  }
`,TD=k.p`
  font-weight: 600;
  font-size: 16px;
  margin: 0;
  color: #222;
  transition: color 0.2s;
`,OD=k.span`
  border: solid #555;
  border-width: 0 2px 2px 0;
  display: inline-block;
  padding: 3px;
  transform: ${e=>e.isOpen?"rotate(-135deg)":"rotate(45deg)"};
  transition: transform 0.3s ease;
`,jD=k.div`
  max-height: ${e=>e.isOpen?"500px":"0"};
  overflow: hidden;
  transition: max-height 0.3s ease-in-out, opacity 0.3s;
  opacity: ${e=>e.isOpen?"1":"0"};
  padding: ${e=>e.isOpen?"12px":"0"};
`,MD=k.label`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  cursor: pointer;
  font-size: 15px;
  color: #444;

  &:hover span:first-of-type {
    border-color: #85683d;
  }
`,$p=k.input.attrs({type:"checkbox"})`
  display: none;
`,$D=k.span`
  width: 20px;
  height: 20px;
  border: 2px solid #ddd;
  border-radius: 4px;
  margin-right: 12px;
  position: relative;
  flex-shrink: 0;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);

  ${$p}:checked + & {
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

  ${$p}:checked + &::after {
    opacity: 1;
  }
`,ID=({childValues:e,category:t,selectedFilters:n,setSelectedFilters:r,setPriceRange:i})=>{const[o,a]=b.useState({}),[l,s]=b.useState([]);b.useEffect(()=>{t&&(async()=>{try{const y=await fetch(`https://backenddidiv-production.up.railway.app/api/products?populate=*&filters[category][title][$eq]=${encodeURIComponent(t)}&pagination[pageSize]=200`);console.log(t);const p=await y.json();console.log("dataaaa",p.data);const m=p.data||[],v={};m.forEach(h=>{var g;(g=h.attributes)==null||g.forEach(x=>{v[x.label]||(v[x.label]=new Set),v[x.label].add(x.value)})});const w=Object.entries(v).map(([h,g])=>({type:"checkbox",label:h,name:h.toLowerCase(),options:Array.from(g)}));console.log("fillltr",w),s(w)}catch(y){console.error(y)}})()},[t]);const u=c=>{a(y=>({...y,[c]:!y[c]}))},d=(c,y)=>{r(p=>{const m=p[c]||[];return m.includes(y)?{...p,[c]:m.filter(v=>v!==y)}:{...p,[c]:[...m,y]}})};return f.jsx(ED,{children:(l||[]).map(c=>{var p;const y=!!o[c.name];return f.jsxs(kD,{children:[f.jsxs(PD,{onClick:()=>u(c.name),children:[f.jsx(TD,{children:c.label}),f.jsx(OD,{isOpen:y})]}),f.jsxs(jD,{isOpen:y,children:[c.type==="checkbox"&&((p=c.options)==null?void 0:p.map(m=>{var v;return f.jsxs(MD,{children:[f.jsx($p,{checked:((v=n[c.name])==null?void 0:v.includes(m))||!1,onChange:()=>d(c.name,m)}),f.jsx($D,{}),m]},m)})),c.type==="range"&&f.jsx(r2,{onChange:i,childValues:e})]})]},c.name)})})},DD=({setValues:e,category:t,selectedFilters:n={},priceRange:r,sortType:i,setIsSortOpen:o,isSortOpen:a,setSortType:l,sortOrder:s,setSortOrder:u})=>{const[d,c]=b.useState([]),[y,p]=b.useState(!0),[m,v]=b.useState(1),w=24;let h=d;const g=b.useRef(null);b.useEffect(()=>{const j=F=>{g.current&&!g.current.contains(F.target)&&o(!1)};return document.addEventListener("mousedown",j),()=>{document.removeEventListener("mousedown",j)}},[o]),b.useEffect(()=>{(async()=>{try{p(!0);const L=await(await fetch(`https://backenddidiv-production.up.railway.app/api/products?populate=*&filters[category][title][$eq]=${encodeURIComponent(t)}&pagination[pageSize]=500`)).json();c(L.data);const O=L.data.map(D=>D.price);if(O.length>0){let D=Math.min(...O),P=Math.max(...O);e([D,P])}}catch(F){console.error("Error fetching products:",F)}finally{p(!1)}})()},[t,e]),b.useEffect(()=>{v(1)},[t,n,r]),b.useEffect(()=>{window.scrollTo({top:0,behavior:"smooth"})},[m]);const x=On(),S=jn(),C=qe(j=>j.favorites.items),T=qe(j=>j.cart.items),E=(j,F)=>{F.stopPropagation();const L=C.some(O=>O.id===j.id);S(ai(j)),L?Y.warning(`${j.name} видалено з обраного`):Y.info(`${j.name} додано в обране`)};if(Object.keys(n).forEach(j=>{const F=n[j];Array.isArray(F)&&F.length>0&&(h=h.filter(L=>{var D;const O=(D=L.attributes)==null?void 0:D.find(P=>P.label.toLowerCase()===j.toLowerCase());return O&&F.includes(O.value)}))}),r&&r.length===2){const[j,F]=r;console.log(j,F)}const _=b.useMemo(()=>{const j=[...h],F=L=>L.new_price&&L.new_price<L.price?L.new_price:L.price;switch(i){case"name":return j.sort((L,O)=>s==="asc"?L.name.localeCompare(O.name):O.name.localeCompare(L.name));case"price":return j.sort((L,O)=>{const D=F(L),P=F(O);return s==="asc"?D-P:P-D});case"date":return j.sort((L,O)=>s==="asc"?new Date(L.createdAt)-new Date(O.createdAt):new Date(O.createdAt)-new Date(L.createdAt));default:return j}},[i,h,s]),$=m*w,M=$-w,R=_.slice(M,$),A=Math.ceil(h.length/w);return y?f.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"100vw",height:"100vh"},children:f.jsx(Ya,{height:100,width:100,radius:5,color:"var(--orange-color)",ariaLabel:"ball-triangle-loading",wrapperStyle:{},wrapperClass:"",visible:!0})}):(console.log(R),console.log("filteredProducts.length:",h.length),console.log("currentProducts.length:",R.length),f.jsxs(kj,{children:[f.jsxs(Pj,{children:[f.jsx(Tj,{children:t}),f.jsxs(Aj,{ref:g,children:[f.jsxs(Rj,{onClick:()=>o(j=>!j),children:["Сортування",f.jsx(Mu,{strokeWidth:.9,size:22})]}),a&&f.jsxs(Fj,{children:[f.jsx(pi,{onClick:()=>{l("name"),u("asc"),o(!1)},children:"А-Я"}),f.jsx(pi,{onClick:()=>{l("name"),u("desc"),o(!1)},children:"Я-А"}),f.jsx(pi,{onClick:()=>{l("price"),u("asc"),o(!1)},children:"Ціна ↑"}),f.jsx(pi,{onClick:()=>{l("price"),u("desc"),o(!1)},children:"Ціна ↓"}),f.jsx(pi,{onClick:()=>{l("date"),u("desc"),o(!1)},children:"Спочатку новіші"}),f.jsx(pi,{onClick:()=>{l("date"),u("asc"),o(!1)},children:"Спочатку старіші"})]})]})]}),f.jsx(Or,{autoClose:1500}),h.length===0?f.jsx(Oj,{children:f.jsx("p",{style:{textAlign:"center",fontSize:"30px",marginTop:"50px",marginLeft:"auto",marginRight:"auto"},children:"Нічого не знайдено 😢"})}):f.jsx(jj,{children:R.map(j=>{var N,U;const F=C.some(H=>H.id===j.id),L=T.find(H=>H.id===j.id),D=(L?L.quantity:0)>=(j.stock||0),P=j.new_price&&j.new_price<j.price,I=P?j.new_price:j.price,z=P?Math.round((j.price-j.new_price)/j.price*100):0,B=(H,q)=>{if(q.stopPropagation(),D){Y.error("Товар уже у кошику");return}S(ho({...H,quantity:1})),Y.success(`${H.name} додано в кошик!`)};return f.jsxs(Mj,{onClick:()=>x(`/product/${j.id}`),style:{cursor:"pointer"},children:[f.jsx($j,{src:((U=(N=j.images)==null?void 0:N[0])==null?void 0:U.url)||"/placeholder.jpg",alt:j.name,onError:H=>{H.currentTarget.onerror=null,H.currentTarget.src=no}}),f.jsx(Dj,{children:j.name}),f.jsxs(Ij,{children:[f.jsx(pw,{children:f.jsxs(hw,{children:[f.jsxs(mw,{$discount:P,children:[I.toLocaleString()," грн"]}),P&&f.jsxs(gw,{children:[j.price.toLocaleString()," грн"]}),P&&f.jsxs(vw,{children:["-",z,"%"]})]})}),f.jsxs(fw,{children:[f.jsx(Wl,{onClick:H=>B(j,H),children:f.jsx(po,{size:24,color:L?"var(--orange-color)":"black",strokeWidth:2})}),f.jsx(Wl,{onClick:H=>E(j,H),children:f.jsx(Ua,{size:24,fill:F?"#ff4d4f":"none",color:F?"#ff4d4f":"#000000",strokeWidth:F?1:2})})]})]})]},j.id)})}),h.length>w&&f.jsxs(Lj,{children:[f.jsx(xd,{onClick:()=>v(j=>Math.max(j-1,1)),disabled:m===1,children:"Назад"}),Array.from({length:A},(j,F)=>f.jsx(xd,{onClick:()=>v(F+1),active:m===F+1,children:F+1},F)),f.jsx(xd,{onClick:()=>v(j=>Math.min(j+1,A)),disabled:m===A,children:"Вперед"})]})]}))},LD=()=>{const[e,t]=b.useState({});console.log(e);const{category:n}=oy(),[r,i]=b.useState(!1),[o,a]=b.useState(!1),[l,s]=b.useState("date"),[u,d]=b.useState("desc"),[c,y]=b.useState([]),[p,m]=b.useState([0,0]);console.log(c),console.log(n);const v=Object.values(e).some(h=>Array.isArray(h)&&h.length>0),w=()=>{v&&t({})};return f.jsxs(GI,{children:[f.jsxs(WI,{children:[f.jsxs(qI,{children:[f.jsxs(YI,{onClick:()=>i(!0),children:["Фільтр",f.jsx(XI,{children:f.jsx("use",{href:`${cn}#icon-filter`})})]}),f.jsxs(nD,{children:[f.jsxs(KI,{onClick:()=>a(h=>!h),children:["Сортування",f.jsx(Mu,{strokeWidth:.9,size:22})]}),o&&f.jsxs(rD,{children:[f.jsx(mi,{onClick:()=>{s("name"),d("asc"),a(!1)},children:"А-Я"}),f.jsx(mi,{onClick:()=>{s("name"),d("desc"),a(!1)},children:"Я-А"}),f.jsx(mi,{onClick:()=>{s("price"),d("asc"),a(!1)},children:"Ціна ↑"}),f.jsx(mi,{onClick:()=>{s("price"),d("desc"),a(!1)},children:"Ціна ↓"}),f.jsx(mi,{onClick:()=>{s("date"),d("desc"),a(!1)},children:"Спочатку новіші"}),f.jsx(mi,{onClick:()=>{s("date"),d("asc"),a(!1)},children:"Спочатку старіші"})]})]})]}),f.jsx(CD,{category:n,selectedFilters:e,setSelectedFilters:t,childValues:c,priceRange:p,setPriceRange:m}),f.jsx(DD,{priceRange:p,values:c,setValues:y,category:n,selectedFilters:e,sortType:l,setIsSortOpen:a,isSortOpen:o,setSortType:s,sortOrder:u,setSortOrder:d}),r&&f.jsx(QI,{onClick:()=>i(!1),open:r,children:f.jsxs(ZI,{onClick:h=>h.stopPropagation(),open:r,children:[f.jsxs(JI,{children:[f.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[f.jsx(Bb,{size:20}),f.jsx("h2",{children:"Фільтри"})]}),f.jsx(Ub,{size:24,onClick:()=>i(!1),style:{cursor:"pointer"}})]}),f.jsx(ID,{childValues:c,category:n,selectedFilters:e,setSelectedFilters:t,priceRange:p,setPriceRange:m}),f.jsxs(eD,{children:[f.jsx(n2,{onClick:w,disabled:!v,children:"Скинути обрані фільтри"}),f.jsx(tD,{onClick:()=>i(!1),children:"Показати результати"})]})]})})]})," "]})},jv=k.div`
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
`,AD=k.div`
  font-family: var(--main-font);
  font-size: 14px;
  color: #8c8c8c;
  margin-bottom: 15px;

  a {
    text-decoration: none;
    color: inherit;
  }
`,RD=k.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,FD=k.div``;k.div`
  position: absolute;
  top: 10px;
  left: 10px;
  background: #27ae60;
  color: white;
  padding: 5px 15px;
  font-weight: bold;
  z-index: 2;
`;const zD=k.img`
  width: 100%;
  border-radius: 4px;
  background: #f9f9f9;
   @media screen and (max-width: 300px) {
   width: 260px;
  }
`,ND=k.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
      flex-wrap: wrap;
`,BD=k.img`
  width: 60px;
  height: 60px;
  border: 1px solid #ddd;
  cursor: pointer;
  object-fit: cover;
`,VD=k.div``,UD=k.h1`
  font-size: 28px;
  margin-bottom: 10px;
  color: #333;
  font-family: var(--second-font);
  font-weight: 500;
`,HD=k.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 20px;
`,WD=k.span`
  color: #27ae60;
  font-size: 17px;
`,GD=k.div`
  background: #fdfdfd;
  border: 1px solid #eee;
  padding: 25px;
  border-radius: 8px;
   @media screen and (max-width: 300px) {
   width: 260px;
  }
`,qD=k.div`
  font-family: var(--second-font);
  font-weight: 500;
  display: flex;
  align-items: baseline;
  gap: 15px;
  margin-bottom: 20px;
`,Mv=k.span`
  font-size: 32px;
  font-weight: 700;
    color: ${({$discount:e})=>e?"var(--red-color)":"#111"};
`,YD=k.span`
  font-size: 14px;
  text-decoration: line-through;
  color: #999;
`,XD=k.span`
  background:var(--red-color);
  color: white;
  font-size: 12px;
  padding: 2px 6px;
  border-radius: 6px;
`,KD=k.div`
  display: flex;
  gap: 15px;
  margin-bottom: 15px;
  font-family: var(--second-font);
  font-weight: 500;
`,QD=k.div`
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
`,ZD=k.button`
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
`;const $v=k.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  /* max-width: 800px; */
   @media (min-width: 767px) {
    padding-top:18px;
  }
`,JD=k.h3`
font-family: var(--second-font);
      border-bottom: 2px solid #717171;
    border-bottom: 2px solid var(--second-color);
    color: var(--second-color);
      padding: 10px 0;
`,Iv=k.div`
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
`,eL=k.div`
  margin: 20px 0;
  font-size: 14px;
  color: #444;
`,tL=k.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  align-items: start;

  @media (max-width: 767px) {
    display: block;
  }
`,Dv=k.div`
  font-family: var(--second-font);
  font-weight: 500;
  margin-top: 20px;
`,Lv=k.div`
  display: flex;
  gap: 30px;
  border-bottom: 1px solid #ccc;
`,Ro=k.button`
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
`,Av=k.div`
  font-family: var(--second-font);
  font-weight: 500;
  padding: 15px;
  background: #fff;
`,Rv=k.p`
  font-size: 20px;
  font-family: var(--second-font);
  font-weight: 300;
`,nL=k.button`
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
`,rL=k.svg`
  width: 20px;
  height: 20px;

  fill: ${({$active:e})=>e?"white":" var(--black-color)"};
`,i2=k.span`

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
`,iL=k.div`
  position: relative;
  display: inline-block;

  &:hover ${i2} {
  opacity: ${({$active:e})=>e?1:0};
    transform: translateX(-50%) translateY(0);
  }
`,o2="carousel",a2="controller",oL="navigation",aL="no-scroll",km="portal",sL="root",s2="toolbar",Fv="zoom",Ad="loading",Rd="error",Fd="complete",lL="placeholder",uL=e=>`active-slide-${e}`,cL="fullsize",Pm="flex_center",dL="no_scroll",l2="no_scroll_padding",Tm="slide",u2="slide_wrapper",fL="slide_wrapper_interactive",Fr="prev",zr="next",zv="swipe",io="close",c2="onPointerDown",d2="onPointerMove",f2="onPointerUp",p2="onPointerLeave",h2="onPointerCancel",Om="onKeyDown",pL="onKeyUp",jm="onWheel",hL="Escape",mL="ArrowLeft",gL="ArrowRight",vL="button",Ip="icon",m2="contain",Nv="cover",g2="Unknown action type",v2="yarl__";function Pn(...e){return e.filter(Boolean).join(" ")}function ae(e){return`${v2}${e}`}function bt(e){return`--${v2}${e}`}function Qa(e,t){return`${e}${t?`_${t}`:""}`}function Mm(e){return t=>Qa(e,t)}function oo(e,t){var n;return(n=e==null?void 0:e[t])!==null&&n!==void 0?n:t}function yL(e,t,n){return oo(e,"{index} of {total}").replace(/\{index}/g,`${Am(n,t.length)+1}`).replace(/\{total}/g,`${t.length}`)}function $m(...e){return()=>{e.forEach(t=>{t()})}}function Jn(e,t,n){return()=>{const r=b.useContext(n);if(!r)throw new Error(`${e} must be used within a ${t}.Provider`);return r}}function Im(){return typeof window<"u"}function Dm(e,t=0){const n=10**t;return Math.round((e+Number.EPSILON)*n)/n}function xo(e){return e.type===void 0||e.type==="image"}function Lm(e,t){return e.imageFit===Nv||e.imageFit!==m2&&t===Nv}function gc(e){return typeof e=="string"?Number.parseInt(e,10):e}function Zl(e){if(typeof e=="number")return{pixel:e};if(typeof e=="string"){const t=gc(e);return e.endsWith("%")?{percent:t}:{pixel:t}}return{pixel:0}}function xL(e,t){const n=Zl(t),r=n.percent!==void 0?e.width/100*n.percent:n.pixel;return{width:Math.max(e.width-2*r,0),height:Math.max(e.height-2*r,0)}}function bL(){return(Im()?window==null?void 0:window.devicePixelRatio:void 0)||1}function Am(e,t){return t>0?(e%t+t)%t:0}function y2(e){return e.length>0}function x2(e,t){return e[Am(t,e.length)]}function Dp(e,t){return y2(e)?x2(e,t):void 0}function wL(e){return xo(e)?e.src:void 0}function SL(e,t,n){if(!n)return e;const{buttons:r,...i}=e,o=r.findIndex(l=>l===t),a=b.isValidElement(n)?b.cloneElement(n,{key:t},null):n;if(o>=0){const l=[...r];return l.splice(o,1,a),{buttons:l,...i}}return{buttons:[a,...r],...i}}function _L(e,t,n=0){return Math.min(e.preload,Math.max(e.finite?t.length-1:Math.floor(t.length/2),n))}const CL=Number(b.version.split(".")[0])>=19;function EL(e){return{inert:CL?e:e?"":void 0}}function kL(e){e.scrollTop}const Lp={open:!1,close:()=>{},index:0,slides:[],render:{},plugins:[],toolbar:{buttons:[io]},labels:{},animation:{fade:250,swipe:500,easing:{fade:"ease",swipe:"ease-out",navigation:"ease-in-out"}},carousel:{finite:!1,preload:2,padding:"16px",spacing:"30%",imageFit:m2,imageProps:{}},controller:{ref:null,focus:!0,aria:!1,touchAction:"none",closeOnPullUp:!1,closeOnPullDown:!1,closeOnBackdropClick:!1,preventDefaultWheelX:!0,preventDefaultWheelY:!1,disableSwipeNavigation:!1},portal:{},noScroll:{disabled:!1},on:{},styles:{},className:""};function jr(e,t){return{name:e,component:t}}function Ue(e,t){return{module:e,children:t}}function b2(e,t,n){return e.module.name===t?n(e):e.children?[Ue(e.module,e.children.flatMap(r=>{var i;return(i=b2(r,t,n))!==null&&i!==void 0?i:[]}))]:[e]}function gi(e,t,n){return e.flatMap(r=>{var i;return(i=b2(r,t,n))!==null&&i!==void 0?i:[]})}function PL(e,t=[],n=[]){let r=e;const i=p=>{const m=[...r];for(;m.length>0;){const v=m.pop();if((v==null?void 0:v.module.name)===p)return!0;v!=null&&v.children&&m.push(...v.children)}return!1},o=(p,m)=>{if(p===""){r=[Ue(m,r)];return}r=gi(r,p,v=>[Ue(m,[v])])},a=(p,m)=>{r=gi(r,p,v=>[Ue(v.module,[Ue(m,v.children)])])},l=(p,m,v)=>{r=gi(r,p,w=>{var h;return[Ue(w.module,[...v?[Ue(m)]:[],...(h=w.children)!==null&&h!==void 0?h:[],...v?[]:[Ue(m)]])]})},s=(p,m,v)=>{r=gi(r,p,w=>[...v?[Ue(m)]:[],w,...v?[]:[Ue(m)]])},u=p=>{a(a2,p)},d=(p,m)=>{r=gi(r,p,v=>[Ue(m,v.children)])},c=p=>{r=gi(r,p,m=>m.children)},y=p=>{n.push(p)};return t.forEach(p=>{p({contains:i,addParent:o,append:a,addChild:l,addSibling:s,addModule:u,replace:d,remove:c,augment:y})}),{config:r,augmentation:p=>n.reduce((m,v)=>v(m),p)}}const w2=b.createContext(null),S2=Jn("useA11yContext","A11yContext",w2);function TL({children:e}){const[t,n]=b.useState(!1),[r,i]=b.useState(!1),o=b.useMemo(()=>({focusWithin:t,trackFocusWithin:(l,s)=>{const u=d=>c=>{var y;c.currentTarget.contains(c.relatedTarget)||n(d),(y=d?l:s)===null||y===void 0||y(c)};return{onFocus:u(!0),onBlur:u(!1)}},autoPlaying:r,setAutoPlaying:i}),[t,r]);return b.createElement(w2.Provider,{value:o},e)}const _2=b.createContext(null),vc=Jn("useDocument","DocumentContext",_2);function OL({nodeRef:e,children:t}){const n=b.useMemo(()=>{const r=o=>{var a;return((a=o||e.current)===null||a===void 0?void 0:a.ownerDocument)||document};return{getOwnerDocument:r,getOwnerWindow:o=>{var a;return((a=r(o))===null||a===void 0?void 0:a.defaultView)||window}}},[e]);return b.createElement(_2.Provider,{value:n},t)}const C2=b.createContext(null),yc=Jn("useEvents","EventsContext",C2);function jL({children:e}){const[t]=b.useState({});b.useEffect(()=>()=>{Object.keys(t).forEach(r=>delete t[r])},[t]);const n=b.useMemo(()=>{const r=(a,l)=>{var s;(s=t[a])===null||s===void 0||s.splice(0,t[a].length,...t[a].filter(u=>u!==l))};return{publish:(...[a,l])=>{var s;(s=t[a])===null||s===void 0||s.forEach(u=>u(l))},subscribe:(a,l)=>(t[a]||(t[a]=[]),t[a].push(l),()=>r(a,l)),unsubscribe:r}},[t]);return b.createElement(C2.Provider,{value:n},e)}const E2=b.createContext(null),Kt=Jn("useLightboxProps","LightboxPropsContext",E2);function ML({children:e,...t}){return b.createElement(E2.Provider,{value:t},e)}const k2=b.createContext(null),Mr=Jn("useLightboxState","LightboxStateContext",k2),P2=b.createContext(null),$L=Jn("useLightboxDispatch","LightboxDispatchContext",P2);function IL(e,t){switch(t.type){case"swipe":{const{slides:n}=e,r=(t==null?void 0:t.increment)||0,i=e.globalIndex+r,o=Am(i,n.length),a=Dp(n,o),l=r||t.duration!==void 0?{increment:r,duration:t.duration,easing:t.easing}:void 0;return{slides:n,currentIndex:o,globalIndex:i,currentSlide:a,animation:l}}case"update":return t.slides!==e.slides||t.index!==e.currentIndex?{slides:t.slides,currentIndex:t.index,globalIndex:t.index,currentSlide:Dp(t.slides,t.index)}:e;default:throw new Error(g2)}}function DL({slides:e,index:t,children:n}){const[r,i]=b.useReducer(IL,{slides:e,currentIndex:t,globalIndex:t,currentSlide:Dp(e,t)}),[o,a]=b.useState(e),[l,s]=b.useState(t);(e!==o||t!==l)&&(a(e),s(t),i({type:"update",slides:e,index:t}));const u=b.useMemo(()=>({...r,state:r,dispatch:i}),[r,i]);return b.createElement(P2.Provider,{value:i},b.createElement(k2.Provider,{value:u},n))}const T2=b.createContext(null),xc=Jn("useTimeouts","TimeoutsContext",T2);function LL({children:e}){const[t]=b.useState([]);b.useEffect(()=>()=>{t.forEach(r=>window.clearTimeout(r)),t.splice(0,t.length)},[t]);const n=b.useMemo(()=>{const r=a=>{t.splice(0,t.length,...t.filter(l=>l!==a))};return{setTimeout:(a,l)=>{const s=window.setTimeout(()=>{r(s),a()},l);return t.push(s),s},clearTimeout:a=>{a!==void 0&&(r(a),window.clearTimeout(a))}}},[t]);return b.createElement(T2.Provider,{value:n},e)}const Rm=b.forwardRef(function({label:t,className:n,icon:r,renderIcon:i,onClick:o,style:a,...l},s){const{styles:u,labels:d}=Kt(),c=oo(d,t);return b.createElement("button",{ref:s,type:"button",title:c,"aria-label":c,className:Pn(ae(vL),n),onClick:o,style:{...a,...u.button},...l},i?i():b.createElement(r,{className:ae(Ip),style:u.icon}))});function AL(e,t){const n=r=>b.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24","aria-hidden":"true",focusable:"false",...r},t);return n.displayName=e,n}function si(e,t){return AL(e,b.createElement("g",{fill:"currentColor"},b.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),t))}const RL=si("Close",b.createElement("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"})),FL=si("Previous",b.createElement("path",{d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"})),zL=si("Next",b.createElement("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"})),NL=si("Loading",b.createElement(b.Fragment,null,Array.from({length:8}).map((e,t,n)=>b.createElement("line",{key:t,x1:"12",y1:"6.5",x2:"12",y2:"1.8",strokeLinecap:"round",strokeWidth:"2.6",stroke:"currentColor",strokeOpacity:1/n.length*(t+1),transform:`rotate(${360/n.length*t}, 12, 12)`})))),BL=si("Error",b.createElement("path",{d:"M21.9,21.9l-8.49-8.49l0,0L3.59,3.59l0,0L2.1,2.1L0.69,3.51L3,5.83V19c0,1.1,0.9,2,2,2h13.17l2.31,2.31L21.9,21.9z M5,18 l3.5-4.5l2.5,3.01L12.17,15l3,3H5z M21,18.17L5.83,3H19c1.1,0,2,0.9,2,2V18.17z"})),Tn=Im()?b.useLayoutEffect:b.useEffect;function Fm(){const[e,t]=b.useState(!1);return b.useEffect(()=>{var n,r;const i=(n=window.matchMedia)===null||n===void 0?void 0:n.call(window,"(prefers-reduced-motion: reduce)");t(i==null?void 0:i.matches);const o=a=>t(a.matches);return(r=i==null?void 0:i.addEventListener)===null||r===void 0||r.call(i,"change",o),()=>{var a;return(a=i==null?void 0:i.removeEventListener)===null||a===void 0?void 0:a.call(i,"change",o)}},[]),e}function VL(e){let t=0,n=0,r=0;const o=window.getComputedStyle(e).transform.match(/matrix.*\((.+)\)/);if(o){const a=o[1].split(",").map(gc);a.length===6?(t=a[4],n=a[5]):a.length===16&&(t=a[12],n=a[13],r=a[14])}return{x:t,y:n,z:r}}function Bv(e,t){const n=b.useRef(void 0),r=b.useRef(void 0),i=Fm();return Tn(()=>{var o,a,l;if(e.current&&n.current!==void 0&&!i){const{keyframes:s,duration:u,easing:d,onfinish:c}=t(n.current,e.current.getBoundingClientRect(),VL(e.current))||{};if(s&&u){(o=r.current)===null||o===void 0||o.cancel(),r.current=void 0;try{r.current=(l=(a=e.current).animate)===null||l===void 0?void 0:l.call(a,s,{duration:u,easing:d})}catch(y){console.error(y)}r.current&&(r.current.onfinish=()=>{r.current=void 0,c==null||c()})}}n.current=void 0}),{prepareAnimation:o=>{n.current=o},isAnimationPlaying:()=>{var o;return((o=r.current)===null||o===void 0?void 0:o.playState)==="running"}}}function O2(){const e=b.useRef(null),t=b.useRef(void 0),[n,r]=b.useState();return{setContainerRef:b.useCallback(o=>{e.current=o,t.current&&(t.current.disconnect(),t.current=void 0);const a=()=>{if(o){const l=window.getComputedStyle(o),s=u=>parseFloat(u)||0;r({width:Math.round(o.clientWidth-s(l.paddingLeft)-s(l.paddingRight)),height:Math.round(o.clientHeight-s(l.paddingTop)-s(l.paddingBottom))})}else r(void 0)};a(),o&&typeof ResizeObserver<"u"&&(t.current=new ResizeObserver(a),t.current.observe(o))},[]),containerRef:e,containerRect:n}}function nl(){const e=b.useRef(void 0),{setTimeout:t,clearTimeout:n}=xc();return b.useCallback((r,i)=>{n(e.current),e.current=t(r,i>0?i:0)},[t,n])}function pe(e){const t=b.useRef(e);return Tn(()=>{t.current=e}),b.useCallback((...n)=>{var r;return(r=t.current)===null||r===void 0?void 0:r.call(t,...n)},[])}function Vv(e,t){typeof e=="function"?e(t):e&&(e.current=t)}function Ap(e,t){return b.useMemo(()=>e==null&&t==null?null:n=>{Vv(e,n),Vv(t,n)},[e,t])}function UL(e,t=!1){const n=b.useRef(!1);Tn(()=>{t&&n.current&&(n.current=!1,e())},[t,e]);const r=b.useCallback(()=>{n.current=!0},[]),i=b.useCallback(()=>{n.current=!1},[]);return{onFocus:r,onBlur:i}}function zm(){const[e,t]=b.useState(!1);return Tn(()=>{t(window.getComputedStyle(window.document.documentElement).direction==="rtl")},[]),e}function HL(){const[e]=b.useState({}),t=b.useCallback((i,o)=>{var a;(a=e[i])===null||a===void 0||a.forEach(l=>{o.isPropagationStopped()||l(o)})},[e]),n=b.useMemo(()=>({onPointerDown:i=>t(c2,i),onPointerMove:i=>t(d2,i),onPointerUp:i=>t(f2,i),onPointerLeave:i=>t(p2,i),onPointerCancel:i=>t(h2,i),onKeyDown:i=>t(Om,i),onKeyUp:i=>t(pL,i),onWheel:i=>t(jm,i)}),[t]),r=b.useCallback((i,o)=>(e[i]||(e[i]=[]),e[i].unshift(o),()=>{const a=e[i];a&&a.splice(0,a.length,...a.filter(l=>l!==o))}),[e]);return{registerSensors:n,subscribeSensors:r}}function Uv(e,t){const n=b.useRef(0),r=nl(),i=pe((...o)=>{n.current=Date.now(),e(o)});return b.useCallback((...o)=>{r(()=>{i(o)},t-(Date.now()-n.current))},[t,i,r])}const zd=Mm("slide"),Nd=Mm("slide_image");function Jl({slide:e,offset:t,render:n,rect:r,imageFit:i,imageProps:o,onClick:a,onLoad:l,onError:s,style:u}){var d,c,y,p,m,v,w,h;const[g,x]=b.useState(Ad),{publish:S}=yc(),{setTimeout:C}=xc(),T=b.useRef(null);b.useEffect(()=>{t===0&&S(uL(g))},[t,g,S]);const E=pe(N=>{("decode"in N?N.decode():Promise.resolve()).catch(()=>{}).then(()=>{N.parentNode&&(x(Fd),C(()=>{l==null||l(N)},0))})}),_=b.useCallback(N=>{T.current=N,N!=null&&N.complete&&E(N)},[E]),$=b.useCallback(N=>{E(N.currentTarget)},[E]),M=pe(()=>{x(Rd),s==null||s()}),R=Lm(e,i),A=(N,U)=>Number.isFinite(N)?N:U,j=A(Math.max(...((c=(d=e.srcSet)===null||d===void 0?void 0:d.map(N=>N.width))!==null&&c!==void 0?c:[]).concat(e.width?[e.width]:[]).filter(Boolean)),((y=T.current)===null||y===void 0?void 0:y.naturalWidth)||0),F=A(Math.max(...((m=(p=e.srcSet)===null||p===void 0?void 0:p.map(N=>N.height))!==null&&m!==void 0?m:[]).concat(e.height?[e.height]:[]).filter(Boolean)),((v=T.current)===null||v===void 0?void 0:v.naturalHeight)||0),L=j&&F?{maxWidth:`min(${j}px, 100%)`,maxHeight:`min(${F}px, 100%)`}:{maxWidth:"100%",maxHeight:"100%"},O=(w=e.srcSet)===null||w===void 0?void 0:w.slice().sort((N,U)=>N.width-U.width).map(N=>`${N.src} ${N.width}w`).join(", "),D=()=>r&&!R&&e.width&&e.height?r.height/e.height*e.width:Number.MAX_VALUE,P=O&&r&&Im()?`${Math.round(Math.min(D(),r.width))}px`:void 0,{style:I,className:z,...B}=(typeof o=="function"?o(e):o)||{};return b.createElement(b.Fragment,null,b.createElement("img",{ref:_,onLoad:$,onError:M,onClick:a,draggable:!1,className:Pn(ae(Nd()),R&&ae(Nd("cover")),g!==Fd&&ae(Nd("loading")),z),style:{...L,...u,...I},...B,alt:(h=e.alt)!==null&&h!==void 0?h:"",sizes:P,srcSet:O,src:e.src}),g!==Fd&&b.createElement("div",{className:ae(zd(lL))},g===Ad&&(n!=null&&n.iconLoading?n.iconLoading():b.createElement(NL,{className:Pn(ae(Ip),ae(zd(Ad)))})),g===Rd&&(n!=null&&n.iconError?n.iconError():b.createElement(BL,{className:Pn(ae(Ip),ae(zd(Rd)))}))))}const WL=b.forwardRef(function({className:t,children:n,onFocus:r,onBlur:i,...o},a){const l=b.useRef(null),{trackFocusWithin:s}=S2();return b.createElement(OL,{nodeRef:l},b.createElement("div",{ref:Ap(a,l),className:Pn(ae("root"),t),...s(r,i),...o},n))});var ot;(function(e){e[e.NONE=0]="NONE",e[e.SWIPE=1]="SWIPE",e[e.PULL=2]="PULL",e[e.ANIMATION=3]="ANIMATION"})(ot||(ot={}));function j2(e,t,n,r,i){b.useEffect(()=>i?()=>{}:$m(e(c2,t),e(d2,n),e(f2,r),e(p2,r),e(h2,r)),[e,t,n,r,i])}var en;(function(e){e[e.NONE=0]="NONE",e[e.SWIPE=1]="SWIPE",e[e.PULL=2]="PULL"})(en||(en={}));const Bd=30;function GL({disableSwipeNavigation:e,closeOnBackdropClick:t},n,r,i,o,a,l,s,u,d,c,y,p,m,v,w){const h=b.useRef(0),g=b.useRef([]),x=b.useRef(void 0),S=b.useRef(0),C=b.useRef(en.NONE),T=b.useCallback(j=>{x.current===j.pointerId&&(x.current=void 0,C.current=en.NONE);const F=g.current;F.splice(0,F.length,...F.filter(L=>L.pointerId!==j.pointerId))},[]),E=b.useCallback(j=>{T(j),j.persist(),g.current.push(j)},[T]),_=b.useCallback(j=>g.current.find(({pointerId:F})=>j.pointerId===F),[]),$=pe(j=>{E(j)}),M=(j,F)=>c&&j>F||d&&j<-F,R=pe(j=>{const F=_(j);if(F)if(x.current===j.pointerId){const L=Date.now()-S.current,O=h.current;C.current===en.SWIPE?Math.abs(O)>.3*i||Math.abs(O)>5&&L<o?s(O,L):u(O):C.current===en.PULL&&(M(O,2*Bd)?m(O,L):v(O)),h.current=0,C.current=en.NONE}else{const{target:L}=j;t&&L instanceof HTMLElement&&L===F.target&&(L.classList.contains(ae(Tm))||L.classList.contains(ae(u2)))&&w()}T(j)}),A=pe(j=>{const F=_(j);if(F){const L=x.current===j.pointerId;if(j.buttons===0){L&&h.current!==0?R(j):T(F);return}const O=j.clientX-F.clientX,D=j.clientY-F.clientY;if(x.current===void 0){const P=I=>{E(j),x.current=j.pointerId,S.current=Date.now(),C.current=I};Math.abs(O)>Math.abs(D)&&Math.abs(O)>Bd&&r(O)?e||(P(en.SWIPE),a()):Math.abs(D)>Math.abs(O)&&M(D,Bd)&&(P(en.PULL),y())}else L&&(C.current===en.SWIPE?(h.current=O,l(O)):C.current===en.PULL&&(h.current=D,p(D)))}});j2(n,$,A,R)}function qL({preventDefaultWheelX:e,preventDefaultWheelY:t}){const n=b.useRef(null),r=pe(i=>{const o=Math.abs(i.deltaX)>Math.abs(i.deltaY);(o&&e||!o&&t||i.ctrlKey)&&i.preventDefault()});return b.useCallback(i=>{var o;i?i.addEventListener("wheel",r,{passive:!1}):(o=n.current)===null||o===void 0||o.removeEventListener("wheel",r),n.current=i},[r])}function YL(e,t,n,r,i,o,a,l,s){const u=b.useRef(0),d=b.useRef(0),c=b.useRef(void 0),y=b.useRef(void 0),p=b.useRef(0),m=b.useRef(void 0),v=b.useRef(0),{setTimeout:w,clearTimeout:h}=xc(),g=b.useCallback(()=>{c.current&&(h(c.current),c.current=void 0)},[h]),x=b.useCallback(()=>{y.current&&(h(y.current),y.current=void 0)},[h]),S=pe(()=>{e!==ot.SWIPE&&(u.current=0,v.current=0,g(),x())});b.useEffect(S,[e,S]);const C=pe(E=>{y.current=void 0,u.current===E&&s(u.current)}),T=pe(E=>{if(E.ctrlKey||Math.abs(E.deltaY)>Math.abs(E.deltaX))return;const _=$=>{p.current=$,h(m.current),m.current=$>0?w(()=>{p.current=0,m.current=void 0},300):void 0};if(e===ot.NONE){if(Math.abs(E.deltaX)<=1.2*Math.abs(p.current)){_(E.deltaX);return}if(!n(-E.deltaX))return;if(d.current+=E.deltaX,g(),Math.abs(d.current)>30)d.current=0,_(0),v.current=Date.now(),o();else{const $=d.current;c.current=w(()=>{c.current=void 0,$===d.current&&(d.current=0)},i)}}else if(e===ot.SWIPE){let $=u.current-E.deltaX;if($=Math.min(Math.abs($),r)*Math.sign($),u.current=$,a($),x(),Math.abs($)>.2*r){_(E.deltaX),l($,Date.now()-v.current);return}y.current=w(()=>C($),2*i)}else _(E.deltaX)});b.useEffect(()=>t(jm,T),[t,T])}const Hv=Mm("container"),M2=b.createContext(null),er=Jn("useController","ControllerContext",M2);function XL({children:e,...t}){var n;const{carousel:r,animation:i,controller:o,on:a,styles:l,render:s}=t,{closeOnPullUp:u,closeOnPullDown:d,preventDefaultWheelX:c,preventDefaultWheelY:y}=o,[p,m]=b.useState(),v=Mr(),w=$L(),[h,g]=b.useState(ot.NONE),x=b.useRef(0),S=b.useRef(0),C=b.useRef(1),{registerSensors:T,subscribeSensors:E}=HL(),{subscribe:_,publish:$}=yc(),M=nl(),R=nl(),A=nl(),{containerRef:j,setContainerRef:F,containerRect:L}=O2(),O=Ap(qL({preventDefaultWheelX:c,preventDefaultWheelY:y}),F),D=b.useRef(null),P=Ap(D,void 0),{getOwnerDocument:I}=vc(),z=zm(),B=G=>(z?-1:1)*(typeof G=="number"?G:1),N=pe(()=>{var G;return(G=j.current)===null||G===void 0?void 0:G.focus()}),U=pe(()=>t),H=pe(()=>v),q=b.useCallback(G=>$(Fr,G),[$]),K=b.useCallback(G=>$(zr,G),[$]),ee=b.useCallback(()=>$(io),[$]),fe=G=>!(r.finite&&(B(G)>0&&v.currentIndex===0||B(G)<0&&v.currentIndex===v.slides.length-1)),be=G=>{var we;x.current=G,(we=j.current)===null||we===void 0||we.style.setProperty(bt("swipe_offset"),`${Math.round(G)}px`)},ie=G=>{var we,ut;S.current=G,C.current=(()=>{const So=(()=>d&&G>0?G:u&&G<0?-G:0)();return Math.min(Math.max(Dm(1-So/60*(1-.5),2),.5),1)})(),(we=j.current)===null||we===void 0||we.style.setProperty(bt("pull_offset"),`${Math.round(G)}px`),(ut=j.current)===null||ut===void 0||ut.style.setProperty(bt("pull_opacity"),`${C.current}`)},{prepareAnimation:Me}=Bv(D,(G,we,ut)=>{if(D.current&&L)return{keyframes:[{transform:`translate(0, ${G.rect.y-we.y+ut.y}px)`,opacity:G.opacity},{transform:"translate(0, 0)",opacity:1}],duration:G.duration,easing:i.easing.fade}}),Be=(G,we)=>{if(u||d){ie(G);let ut=0;D.current&&(ut=i.fade*(we?2:1),Me({rect:D.current.getBoundingClientRect(),opacity:C.current,duration:ut})),A(()=>{ie(0),g(ot.NONE)},ut),g(ot.ANIMATION),we||ee()}},{prepareAnimation:Ve,isAnimationPlaying:li}=Bv(D,(G,we,ut)=>{var hn;if(D.current&&L&&(!((hn=v.animation)===null||hn===void 0)&&hn.duration)){const Vt=Zl(r.spacing),So=(Vt.percent?Vt.percent*L.width/100:Vt.pixel)||0;return{keyframes:[{transform:`translate(${B(v.globalIndex-G.index)*(L.width+So)+G.rect.x-we.x+ut.x}px, 0)`},{transform:"translate(0, 0)"}],duration:v.animation.duration,easing:v.animation.easing}}}),yt=pe(G=>{var we,ut;const hn=G.offset||0,Vt=hn?i.swipe:(we=i.navigation)!==null&&we!==void 0?we:i.swipe,So=!hn&&!li()?i.easing.navigation:i.easing.swipe;let{direction:Ja}=G;const es=(ut=G.count)!==null&&ut!==void 0?ut:1;let jc=ot.ANIMATION,mn=Vt*es;if(!Ja){const _o=L==null?void 0:L.width,Jm=G.duration||0,$c=_o?Vt/_o*Math.abs(hn):Vt;es!==0?(Jm<$c?mn=mn/$c*Math.max(Jm,$c/5):_o&&(mn=Vt/_o*(_o-Math.abs(hn))),Ja=B(hn)>0?Fr:zr):mn=Vt/2}let Mc=0;Ja===Fr?fe(B(1))?Mc=-es:(jc=ot.NONE,mn=Vt):Ja===zr&&(fe(B(-1))?Mc=es:(jc=ot.NONE,mn=Vt)),mn=Math.round(mn),R(()=>{be(0),g(ot.NONE)},mn),D.current&&Ve({rect:D.current.getBoundingClientRect(),index:v.globalIndex}),g(jc),$(zv,{type:"swipe",increment:Mc,duration:mn,easing:So})});b.useEffect(()=>{var G,we;!((G=v.animation)===null||G===void 0)&&G.increment&&(!((we=v.animation)===null||we===void 0)&&we.duration)&&M(()=>w({type:"swipe",increment:0}),v.animation.duration)},[v.animation,w,M]);const bo=[E,fe,(L==null?void 0:L.width)||0,i.swipe,()=>g(ot.SWIPE),G=>be(G),(G,we)=>yt({offset:G,duration:we,count:1}),G=>yt({offset:G,count:0})],Za=[()=>{d&&g(ot.PULL)},G=>ie(G),G=>Be(G),G=>Be(G,!0)];GL(o,...bo,u,d,...Za,ee),YL(h,...bo);const wo=pe(()=>{o.focus&&I().querySelector(`.${ae(km)} .${ae(Hv())}`)&&N()});b.useEffect(wo,[wo]);const Zm=pe(()=>{var G;(G=a.view)===null||G===void 0||G.call(a,{index:v.currentIndex})});b.useEffect(Zm,[v.globalIndex,Zm]),b.useEffect(()=>$m(_(Fr,G=>yt({direction:Fr,...G})),_(zr,G=>yt({direction:zr,...G})),_(zv,G=>w(G))),[_,yt,w]);const P_=b.useMemo(()=>({prev:q,next:K,close:ee,focus:N,slideRect:L?xL(L,r.padding):{width:0,height:0},containerRect:L||{width:0,height:0},subscribeSensors:E,containerRef:j,setCarouselRef:P,toolbarWidth:p,setToolbarWidth:m}),[q,K,ee,N,E,L,j,P,p,m,r.padding]);return b.useImperativeHandle(o.ref,()=>({prev:q,next:K,close:ee,focus:N,getLightboxProps:U,getLightboxState:H}),[q,K,ee,N,U,H]),b.createElement("div",{ref:O,className:Pn(ae(Hv()),ae(Pm)),style:{...h===ot.SWIPE?{[bt("swipe_offset")]:`${Math.round(x.current)}px`}:null,...h===ot.PULL?{[bt("pull_offset")]:`${Math.round(S.current)}px`,[bt("pull_opacity")]:`${C.current}`}:null,...o.touchAction!=="none"?{[bt("controller_touch_action")]:o.touchAction}:null,...l.container},tabIndex:-1,...T},L&&b.createElement(M2.Provider,{value:P_},e,(n=s.controls)===null||n===void 0?void 0:n.call(s)))}const KL=jr(a2,XL);function $r(e){return Qa(o2,e)}function Wv(e){return Qa(Tm,e)}function QL({slide:e,offset:t}){const n=b.useRef(null),{currentIndex:r,slides:i}=Mr(),{slideRect:o,focus:a}=er(),{render:l,carousel:{imageFit:s,imageProps:u},on:{click:d},styles:{slide:c},labels:y}=Kt(),{getOwnerDocument:p}=vc(),m=t!==0;b.useEffect(()=>{var w;m&&(!((w=n.current)===null||w===void 0)&&w.contains(p().activeElement))&&a()},[m,a,p]);const v=()=>{var w,h,g,x;let S=(w=l.slide)===null||w===void 0?void 0:w.call(l,{slide:e,offset:t,rect:o});return!S&&xo(e)&&(S=b.createElement(Jl,{slide:e,offset:t,render:l,rect:o,imageFit:s,imageProps:u,onClick:m?void 0:()=>d==null?void 0:d({index:r})})),S?b.createElement(b.Fragment,null,(h=l.slideHeader)===null||h===void 0?void 0:h.call(l,{slide:e}),((g=l.slideContainer)!==null&&g!==void 0?g:({children:C})=>C)({slide:e,children:S}),(x=l.slideFooter)===null||x===void 0?void 0:x.call(l,{slide:e})):null};return b.createElement("div",{ref:n,className:Pn(ae(Wv()),!m&&ae(Wv("current")),ae(Pm)),...EL(m),style:c,role:"group","aria-roledescription":oo(y,"Slide"),"aria-label":yL(y,i,r+t)},v())}function ZL(){const e=Kt().styles.slide;return b.createElement("div",{className:ae(Tm),style:e})}function JL({carousel:e,labels:t}){const{slides:n,currentIndex:r,globalIndex:i}=Mr(),{setCarouselRef:o}=er(),{autoPlaying:a,focusWithin:l}=S2(),s=Zl(e.spacing),u=Zl(e.padding),d=_L(e,n,1),c=[];if(y2(n))for(let y=r-d;y<=r+d;y+=1){const p=x2(n,y),m=i-r+y,v=e.finite&&(y<0||y>n.length-1);c.push(v?{key:m}:{key:[`${m}`,wL(p)].filter(Boolean).join("|"),offset:y-r,slide:p})}return b.createElement("div",{ref:o,className:Pn(ae($r()),c.length>0&&ae($r("with_slides"))),style:{[`${bt($r("slides_count"))}`]:c.length,[`${bt($r("spacing_px"))}`]:s.pixel||0,[`${bt($r("spacing_percent"))}`]:s.percent||0,[`${bt($r("padding_px"))}`]:u.pixel||0,[`${bt($r("padding_percent"))}`]:u.percent||0},role:"region","aria-live":a&&!l?"off":"polite","aria-roledescription":oo(t,"Carousel"),"aria-label":oo(t,"Photo gallery")},c.map(({key:y,slide:p,offset:m})=>p?b.createElement(QL,{key:y,slide:p,offset:m}):b.createElement(ZL,{key:y})))}const e6=jr(o2,JL);function $2(){const{carousel:e}=Kt(),{slides:t,currentIndex:n}=Mr(),r=t.length===0||e.finite&&n===0,i=t.length===0||e.finite&&n===t.length-1;return{prevDisabled:r,nextDisabled:i}}function t6(e){var t;const n=zm(),{publish:r}=yc(),{animation:i}=Kt(),{prevDisabled:o,nextDisabled:a}=$2(),l=((t=i.navigation)!==null&&t!==void 0?t:i.swipe)/2,s=Uv(()=>r(Fr),l),u=Uv(()=>r(zr),l),d=pe(c=>{switch(c.key){case hL:r(io);break;case mL:(n?a:o)||(n?u:s)();break;case gL:(n?o:a)||(n?s:u)();break}});b.useEffect(()=>e(Om,d),[e,d])}function Gv({label:e,icon:t,renderIcon:n,action:r,onClick:i,disabled:o,style:a}){return b.createElement(Rm,{label:e,icon:t,renderIcon:n,className:ae(`navigation_${r}`),disabled:o,onClick:i,style:a,...UL(er().focus,o)})}function n6({render:{buttonPrev:e,buttonNext:t,iconPrev:n,iconNext:r},styles:i}){const{prev:o,next:a,subscribeSensors:l}=er(),{prevDisabled:s,nextDisabled:u}=$2();return t6(l),b.createElement(b.Fragment,null,e?e():b.createElement(Gv,{label:"Previous",action:Fr,icon:FL,renderIcon:n,style:i.navigationPrev,disabled:s,onClick:o}),t?t():b.createElement(Gv,{label:"Next",action:zr,icon:zL,renderIcon:r,style:i.navigationNext,disabled:u,onClick:a}))}const r6=jr(oL,n6),qv=ae(dL),i6=ae(l2);function o6(e){return"style"in e}function Yv(e,t,n){const r=window.getComputedStyle(e),i=n?"padding-left":"padding-right",o=n?r.paddingLeft:r.paddingRight,a=e.style.getPropertyValue(i);return e.style.setProperty(i,`${(gc(o)||0)+t}px`),()=>{a?e.style.setProperty(i,a):e.style.removeProperty(i)}}function a6({noScroll:{disabled:e},children:t}){const n=zm(),{getOwnerDocument:r,getOwnerWindow:i}=vc();return b.useEffect(()=>{if(e)return()=>{};const o=[],a=i(),{body:l,documentElement:s}=r(),u=Math.round(a.innerWidth-s.clientWidth);if(u>0){o.push(Yv(l,u,n));const d=l.getElementsByTagName("*");for(let c=0;c<d.length;c+=1){const y=d[c];o6(y)&&a.getComputedStyle(y).getPropertyValue("position")==="fixed"&&!y.classList.contains(i6)&&o.push(Yv(y,u,n))}}return l.classList.add(qv),()=>{l.classList.remove(qv),o.forEach(d=>d())}},[n,e,r,i]),b.createElement(b.Fragment,null,t)}const s6=jr(aL,a6);function Xv(e){return Qa(km,e)}function Kv(e,t,n){const r=e.getAttribute(t);return e.setAttribute(t,n),()=>{r?e.setAttribute(t,r):e.removeAttribute(t)}}function l6({children:e,animation:t,styles:n,className:r,on:i,portal:o,close:a,labels:l}){const[s,u]=b.useState(!1),[d,c]=b.useState(!1),y=b.useRef([]),p=b.useRef(null),{setTimeout:m}=xc(),{subscribe:v}=yc(),h=Fm()?0:t.fade;b.useEffect(()=>(u(!0),()=>{u(!1),c(!1)}),[]);const g=pe(()=>{y.current.forEach(T=>T()),y.current=[]}),x=pe(()=>{var T;c(!1),g(),(T=i.exiting)===null||T===void 0||T.call(i),m(()=>{var E;(E=i.exited)===null||E===void 0||E.call(i),a()},h)});b.useEffect(()=>v(io,x),[v,x]);const S=pe(T=>{var E,_,$;kL(T),c(!0),(E=i.entering)===null||E===void 0||E.call(i);const M=($=(_=T.parentNode)===null||_===void 0?void 0:_.children)!==null&&$!==void 0?$:[];for(let R=0;R<M.length;R+=1){const A=M[R];["TEMPLATE","SCRIPT","STYLE"].indexOf(A.tagName)===-1&&A!==T&&(y.current.push(Kv(A,"inert","")),y.current.push(Kv(A,"aria-hidden","true")))}y.current.push(()=>{var R,A;(A=(R=p.current)===null||R===void 0?void 0:R.focus)===null||A===void 0||A.call(R)}),m(()=>{var R;(R=i.entered)===null||R===void 0||R.call(i)},h)}),C=b.useCallback(T=>{T?S(T):g()},[S,g]);return s?Eu.createPortal(b.createElement(WL,{ref:C,className:Pn(r,ae(Xv()),ae(l2),d&&ae(Xv("open"))),"aria-modal":!0,role:"dialog","aria-label":oo(l,"Lightbox"),style:{...t.fade!==Lp.animation.fade?{[bt("fade_animation_duration")]:`${h}ms`}:null,...t.easing.fade!==Lp.animation.easing.fade?{[bt("fade_animation_timing_function")]:t.easing.fade}:null,...n.root},onFocus:T=>{p.current||(p.current=T.relatedTarget)}},e),o.root||document.body):null}const u6=jr(km,l6);function c6({children:e}){return b.createElement(b.Fragment,null,e)}const d6=jr(sL,c6);function f6(e){return Qa(s2,e)}function p6({toolbar:{buttons:e},render:{buttonClose:t,iconClose:n},styles:r}){const{close:i,setToolbarWidth:o}=er(),{setContainerRef:a,containerRect:l}=O2();Tn(()=>{o(l==null?void 0:l.width)},[o,l==null?void 0:l.width]);const s=()=>t?t():b.createElement(Rm,{key:io,label:"Close",icon:RL,renderIcon:n,onClick:i});return b.createElement("div",{ref:a,style:r.toolbar,className:ae(f6())},e==null?void 0:e.map(u=>u===io?s():u))}const h6=jr(s2,p6);function I2(e,t){var n;return b.createElement(e.module.component,{key:e.module.name,...t},(n=e.children)===null||n===void 0?void 0:n.map(r=>I2(r,t)))}function m6(e,t={}){const{easing:n,...r}=e,{easing:i,...o}=t;return{easing:{...n,...i},...r,...o}}function g6({carousel:e,animation:t,render:n,toolbar:r,controller:i,noScroll:o,on:a,plugins:l,slides:s,index:u,...d}){const{animation:c,carousel:y,render:p,toolbar:m,controller:v,noScroll:w,on:h,slides:g,index:x,plugins:S,...C}=Lp,{config:T,augmentation:E}=PL([Ue(u6,[Ue(s6,[Ue(KL,[Ue(e6),Ue(h6),Ue(r6)])])])],l||S),_=E({animation:m6(c,t),carousel:{...y,...e},render:{...p,...n},toolbar:{...m,...r},controller:{...v,...i},noScroll:{...w,...o},on:{...h,...a},...C,...d});return _.open?b.createElement(ML,{..._},b.createElement(DL,{slides:s||g,index:gc(u||x)},b.createElement(LL,null,b.createElement(jL,null,b.createElement(TL,null,I2(Ue(d6,T),_)))))):null}const v6={minZoom:1,maxZoomPixelRatio:1,zoomInMultiplier:2,doubleTapDelay:300,doubleClickDelay:500,doubleClickMaxStops:2,keyboardMoveDistance:50,wheelZoomDistanceFactor:100,pinchZoomDistanceFactor:100,pinchZoomV4:!1,scrollToZoom:!1};function y6(e){return Math.min(Math.max(e,Number.EPSILON),1)}function D2(e){const{minZoom:t,...n}={...v6,...e};return{minZoom:y6(t),...n}}function x6(e,t,n,r){const i=b.useRef(void 0),o=b.useRef(void 0),{zoom:a}=Kt().animation,l=Fm(),s=pe(()=>{var u,d,c;if((u=i.current)===null||u===void 0||u.cancel(),i.current=void 0,o.current&&(r!=null&&r.current)){try{i.current=(c=(d=r.current).animate)===null||c===void 0?void 0:c.call(d,[{transform:o.current},{transform:`scale(${e}) translateX(${t}px) translateY(${n}px)`}],{duration:l?0:a??500,easing:i.current?"ease-out":"ease-in-out"})}catch(y){console.error(y)}o.current=void 0,i.current&&(i.current.onfinish=()=>{i.current=void 0})}});return Tn(s,[e,t,n,s]),b.useCallback(()=>{o.current=r!=null&&r.current?window.getComputedStyle(r.current).transform:void 0},[r])}function b6(e,t){const{on:n}=Kt(),r=pe(()=>{var i;t||(i=n.zoom)===null||i===void 0||i.call(n,{zoom:e})});b.useEffect(r,[e,r])}function bc(){const{zoom:e}=Kt();return D2(e)}function w6(e,t){var n,r;let i={width:0,height:0},o={width:0,height:0};const{currentSlide:a}=Mr(),{imageFit:l}=Kt().carousel,{maxZoomPixelRatio:s}=bc();if(e&&a){const d={...a,...t};if(xo(d)){const c=Lm(d,l),y=Math.max(...(((n=d.srcSet)===null||n===void 0?void 0:n.map(m=>m.width))||[]).concat(d.width?[d.width]:[])),p=Math.max(...(((r=d.srcSet)===null||r===void 0?void 0:r.map(m=>m.height))||[]).concat(d.height?[d.height]:[]));y>0&&p>0&&e.width>0&&e.height>0&&(o=c?{width:Math.round(Math.min(y,e.width/e.height*p)),height:Math.round(Math.min(p,e.height/e.width*y))}:{width:y,height:p},o={width:o.width*s,height:o.height*s},i=c?{width:Math.min(e.width,o.width,y),height:Math.min(e.height,o.height,p)}:{width:Math.round(Math.min(e.width,e.height/p*y,y)),height:Math.round(Math.min(e.height,e.width/y*p,p))})}}const u=i.width?Math.max(Dm(o.width/i.width,5),1):1;return{imageRect:i,maxZoom:u}}function Qv(e,t){return Math.hypot(e.clientX-t.clientX,e.clientY-t.clientY)}function Zv(e,t,n=100,r=2){return e*Math.min(1+Math.abs(t/n),r)**Math.sign(t)}function S6(e,t,n,r,i,o,a,l,s){const u=b.useRef([]),d=b.useRef(0),c=b.useRef(void 0),{globalIndex:y}=Mr(),{getOwnerWindow:p}=vc(),{containerRef:m,subscribeSensors:v}=er(),{keyboardMoveDistance:w,zoomInMultiplier:h,wheelZoomDistanceFactor:g,scrollToZoom:x,doubleTapDelay:S,doubleClickDelay:C,doubleClickMaxStops:T,pinchZoomDistanceFactor:E,pinchZoomV4:_}=bc(),$=b.useCallback(P=>{if(m.current){const{pageX:I,pageY:z}=P,{scrollX:B,scrollY:N}=p(),{left:U,top:H,width:q,height:K}=m.current.getBoundingClientRect();return[I-U-B-q/2,z-H-N-K/2]}return[]},[m,p]),M=pe(P=>{const{key:I,metaKey:z,ctrlKey:B}=P,N=z||B,U=()=>{P.preventDefault(),P.stopPropagation()};if(e>1){const H=(q,K)=>{U(),l(q,K)};I==="ArrowDown"?H(0,w):I==="ArrowUp"?H(0,-w):I==="ArrowLeft"?H(-w,0):I==="ArrowRight"&&H(w,0)}I==="+"||N&&I==="="?(U(),i()):I==="-"||N&&I==="_"?(U(),o()):N&&I==="0"&&(U(),a(1))}),R=pe(P=>{if((P.ctrlKey||x)&&Math.abs(P.deltaY)>Math.abs(P.deltaX)){P.stopPropagation(),a(Zv(e,-P.deltaY,g),!0,...$(P));return}e>1&&(P.stopPropagation(),x||l(P.deltaX,P.deltaY))}),A=b.useCallback(P=>{const I=u.current;I.splice(0,I.length,...I.filter(z=>z.pointerId!==P.pointerId))},[]),j=b.useCallback(P=>{A(P),P.persist(),u.current.push(P)},[A]),F=pe(P=>{var I;const z=u.current;if(P.pointerType==="mouse"&&P.buttons>1||!(!((I=s==null?void 0:s.current)===null||I===void 0)&&I.contains(P.target)))return;e>1&&P.stopPropagation();const{timeStamp:B}=P;if(z.length===0&&B-d.current<(P.pointerType==="touch"?S:C)){d.current=0;const N=e>=1?e!==n?e*Math.max(n**(1/T),h):1:e!==t?e/Math.max(t**(-1/T),h):1;a(N,!1,...$(P))}else d.current=B;if(j(P),z.length===2){const N=Qv(z[0],z[1]);c.current={previousDistance:N,initialDistance:Math.max(N,1),initialZoom:e}}}),L=pe(P=>{const I=u.current,z=I.find(B=>B.pointerId===P.pointerId);if(I.length===2&&c.current){P.stopPropagation(),j(P);const B=Qv(I[0],I[1]),N=_?c.current.initialZoom/c.current.initialDistance*B:Zv(e,B-c.current.previousDistance,E);a(N,!0,...I.map(U=>$(U)).reduce((U,H)=>H.map((q,K)=>U[K]+q/2))),c.current.previousDistance=B;return}e>1&&(P.stopPropagation(),z&&(I.length===1&&l((z.clientX-P.clientX)/e,(z.clientY-P.clientY)/e),j(P)))}),O=b.useCallback(P=>{const I=u.current;I.length===2&&I.find(z=>z.pointerId===P.pointerId)&&(c.current=void 0),A(P)},[A]),D=b.useCallback(()=>{const P=u.current;P.splice(0,P.length),d.current=0,c.current=void 0},[]);j2(v,F,L,O,r),b.useEffect(D,[y,D]),b.useEffect(()=>r?()=>{}:$m(D,v(Om,M),v(jm,R)),[r,v,D,M,R])}function _6(e,t,n){const[r,i]=b.useState(1),[o,a]=b.useState(0),[l,s]=b.useState(0),u=x6(r,o,l,n),{currentSlide:d,globalIndex:c}=Mr(),{containerRect:y,slideRect:p}=er(),{minZoom:m,zoomInMultiplier:v}=bc(),w=d&&xo(d)?d.src:void 0,h=!w||!(n!=null&&n.current);Tn(()=>{i(1),a(0),s(0)},[c,w]);const g=b.useCallback((E,_,$)=>{const M=$||r,R=o-(E||0),A=l-(_||0),j=(e.width*M-p.width)/2/M,F=(e.height*M-p.height)/2/M;a(Math.min(Math.abs(R),Math.max(j,0))*Math.sign(R)),s(Math.min(Math.abs(A),Math.max(F,0))*Math.sign(A))},[r,o,l,p,e.width,e.height]),x=b.useCallback((E,_,$,M)=>{const R=Dm(E+.01<t?E-.01>m?E:m:t,5);_||u(),g($?$*(1/r-1/R):0,M?M*(1/r-1/R):0,R),i(R)},[r,m,t,g,u]),S=pe(()=>{r>1&&(r>t&&x(t,!0),g())});Tn(S,[y.width,y.height,S]);const C=b.useCallback(()=>{const E=r*v;x(r<1&&E>1?1:E)},[r,v,x]),T=b.useCallback(()=>{const E=r/v;x(r>1&&E<1?1:E)},[r,v,x]);return{zoom:r,offsetX:o,offsetY:l,disabled:h,changeOffsets:g,changeZoom:x,zoomIn:C,zoomOut:T}}const L2=b.createContext(null),Nm=Jn("useZoom","ZoomControllerContext",L2);function C6({children:e}){const[t,n]=b.useState(),{slideRect:r}=er(),{ref:i,minZoom:o}=bc(),{imageRect:a,maxZoom:l}=w6(r,t==null?void 0:t.imageDimensions),{zoom:s,offsetX:u,offsetY:d,disabled:c,changeZoom:y,changeOffsets:p,zoomIn:m,zoomOut:v}=_6(a,l,t==null?void 0:t.zoomWrapperRef);b6(s,c),S6(s,o,l,c,m,v,y,p,t==null?void 0:t.zoomWrapperRef);const w=b.useMemo(()=>({zoom:s,minZoom:o,maxZoom:l,offsetX:u,offsetY:d,disabled:c,zoomIn:m,zoomOut:v,changeZoom:y}),[s,o,l,u,d,c,m,v,y]);b.useImperativeHandle(i,()=>w,[w]);const h=b.useMemo(()=>({...w,setZoomWrapper:n}),[w,n]);return b.createElement(L2.Provider,{value:h},e)}const E6=si("ZoomIn",b.createElement(b.Fragment,null,b.createElement("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}),b.createElement("path",{d:"M12 10h-2v2H9v-2H7V9h2V7h1v2h2v1z"}))),k6=si("ZoomOut",b.createElement("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14zM7 9h5v1H7z"})),Jv=b.forwardRef(function({zoomIn:t,onLoseFocus:n},r){const i=b.useRef(!1),o=b.useRef(!1),{zoom:a,minZoom:l,maxZoom:s,zoomIn:u,zoomOut:d,disabled:c}=Nm(),{render:y}=Kt(),p=c||(t?a>=s:a<=l);return b.useEffect(()=>{p&&i.current&&o.current&&n(),p||(i.current=!0)},[p,n]),b.createElement(Rm,{ref:r,disabled:p,label:t?"Zoom in":"Zoom out",icon:t?E6:k6,renderIcon:t?y.iconZoomIn:y.iconZoomOut,onClick:t?u:d,onFocus:()=>{o.current=!0},onBlur:()=>{o.current=!1}})});function P6(){const e=b.useRef(null),t=b.useRef(null),{focus:n}=er(),r=b.useCallback(a=>{var l,s;!((l=a.current)===null||l===void 0)&&l.disabled?n():(s=a.current)===null||s===void 0||s.focus()},[n]),i=b.useCallback(()=>r(e),[r]),o=b.useCallback(()=>r(t),[r]);return b.createElement(b.Fragment,null,b.createElement(Jv,{zoomIn:!0,ref:e,onLoseFocus:o}),b.createElement(Jv,{ref:t,onLoseFocus:i}))}function T6(){const{render:e}=Kt(),t=Nm();return e.buttonZoom?b.createElement(b.Fragment,null,e.buttonZoom(t)):b.createElement(P6,null)}function O6(e){var t;return(((t=e.srcSet)===null||t===void 0?void 0:t.length)||0)>0}function j6({current:e,preload:t},{type:n,source:r}){switch(n){case"fetch":return e?{current:e,preload:r}:{current:r};case"done":return r===t?{current:r}:{current:e,preload:t};default:throw new Error(g2)}}function M6(e){var t,n;const[{current:r,preload:i},o]=b.useReducer(j6,{}),{slide:a,rect:l,imageFit:s,render:u,interactive:d}=e,c=a.srcSet.sort((C,T)=>C.width-T.width),y=(t=a.width)!==null&&t!==void 0?t:c[c.length-1].width,p=(n=a.height)!==null&&n!==void 0?n:c[c.length-1].height,m=Lm(a,s),v=Math.max(...c.map(C=>C.width)),w=Math.min((m?Math.max:Math.min)(l.width,y*(l.height/p)),v),h=bL(),g=pe(()=>{var C;const T=(C=c.find(E=>E.width>=w*h))!==null&&C!==void 0?C:c[c.length-1];(!r||c.findIndex(E=>E.src===r)<c.findIndex(E=>E===T))&&o({type:"fetch",source:T.src})});Tn(g,[l.width,l.height,h,g]);const x=pe(C=>o({type:"done",source:C})),S={WebkitTransform:d?"initial":"translateZ(0)"};return m||Object.assign(S,l.width/l.height<y/p?{width:"100%",height:"auto"}:{width:"auto",height:"100%"}),b.createElement(b.Fragment,null,i&&i!==r&&b.createElement(Jl,{key:"preload",...e,offset:void 0,slide:{...a,src:i,srcSet:void 0},style:{position:"absolute",visibility:"hidden",...S},onLoad:()=>x(i),render:{...u,iconLoading:()=>null,iconError:()=>null}}),r&&b.createElement(Jl,{key:"current",...e,slide:{...a,src:r,srcSet:void 0},style:S}))}function $6({render:e,slide:t,offset:n,rect:r}){var i;const[o,a]=b.useState(),l=b.useRef(null),{zoom:s,maxZoom:u,offsetX:d,offsetY:c,setZoomWrapper:y}=Nm(),p=s>1,{carousel:m,on:v}=Kt(),{currentIndex:w}=Mr();Tn(()=>n===0?(y({zoomWrapperRef:l,imageDimensions:o}),()=>y(void 0)):()=>{},[n,o,y]);let h=(i=e.slide)===null||i===void 0?void 0:i.call(e,{slide:t,offset:n,rect:r,zoom:s,maxZoom:u});if(!h&&xo(t)){const g={slide:t,offset:n,rect:r,render:e,imageFit:m.imageFit,imageProps:m.imageProps,onClick:n===0?()=>{var x;return(x=v.click)===null||x===void 0?void 0:x.call(v,{index:w})}:void 0};h=O6(t)?b.createElement(M6,{...g,slide:t,interactive:p,rect:n===0?{width:r.width*s,height:r.height*s}:r}):b.createElement(Jl,{onLoad:x=>a({width:x.naturalWidth,height:x.naturalHeight}),...g})}return h?b.createElement("div",{ref:l,className:Pn(ae(cL),ae(Pm),ae(u2),p&&ae(fL)),style:n===0?{transform:`scale(${s}) translateX(${d}px) translateY(${c}px)`}:void 0},h):null}const I6=({augment:e,addModule:t})=>{e(({zoom:n,toolbar:r,render:i,controller:o,...a})=>{const l=D2(n);return{zoom:l,toolbar:SL(r,Fv,b.createElement(T6,null)),render:{...i,slide:s=>{var u;return xo(s.slide)?b.createElement($6,{render:i,...s}):(u=i.slide)===null||u===void 0?void 0:u.call(i,s)}},controller:{...o,preventDefaultWheelY:l.scrollToZoom},...a}}),t(jr(Fv,C6))};var A2={exports:{}};(function(e,t){(function(n,r){e.exports=r()})(te,function(){var n=1e3,r=6e4,i=36e5,o="millisecond",a="second",l="minute",s="hour",u="day",d="week",c="month",y="quarter",p="year",m="date",v="Invalid Date",w=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,h=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,g={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(F){var L=["th","st","nd","rd"],O=F%100;return"["+F+(L[(O-20)%10]||L[O]||L[0])+"]"}},x=function(F,L,O){var D=String(F);return!D||D.length>=L?F:""+Array(L+1-D.length).join(O)+F},S={s:x,z:function(F){var L=-F.utcOffset(),O=Math.abs(L),D=Math.floor(O/60),P=O%60;return(L<=0?"+":"-")+x(D,2,"0")+":"+x(P,2,"0")},m:function F(L,O){if(L.date()<O.date())return-F(O,L);var D=12*(O.year()-L.year())+(O.month()-L.month()),P=L.clone().add(D,c),I=O-P<0,z=L.clone().add(D+(I?-1:1),c);return+(-(D+(O-P)/(I?P-z:z-P))||0)},a:function(F){return F<0?Math.ceil(F)||0:Math.floor(F)},p:function(F){return{M:c,y:p,w:d,d:u,D:m,h:s,m:l,s:a,ms:o,Q:y}[F]||String(F||"").toLowerCase().replace(/s$/,"")},u:function(F){return F===void 0}},C="en",T={};T[C]=g;var E="$isDayjsObject",_=function(F){return F instanceof A||!(!F||!F[E])},$=function F(L,O,D){var P;if(!L)return C;if(typeof L=="string"){var I=L.toLowerCase();T[I]&&(P=I),O&&(T[I]=O,P=I);var z=L.split("-");if(!P&&z.length>1)return F(z[0])}else{var B=L.name;T[B]=L,P=B}return!D&&P&&(C=P),P||!D&&C},M=function(F,L){if(_(F))return F.clone();var O=typeof L=="object"?L:{};return O.date=F,O.args=arguments,new A(O)},R=S;R.l=$,R.i=_,R.w=function(F,L){return M(F,{locale:L.$L,utc:L.$u,x:L.$x,$offset:L.$offset})};var A=function(){function F(O){this.$L=$(O.locale,null,!0),this.parse(O),this.$x=this.$x||O.x||{},this[E]=!0}var L=F.prototype;return L.parse=function(O){this.$d=function(D){var P=D.date,I=D.utc;if(P===null)return new Date(NaN);if(R.u(P))return new Date;if(P instanceof Date)return new Date(P);if(typeof P=="string"&&!/Z$/i.test(P)){var z=P.match(w);if(z){var B=z[2]-1||0,N=(z[7]||"0").substring(0,3);return I?new Date(Date.UTC(z[1],B,z[3]||1,z[4]||0,z[5]||0,z[6]||0,N)):new Date(z[1],B,z[3]||1,z[4]||0,z[5]||0,z[6]||0,N)}}return new Date(P)}(O),this.init()},L.init=function(){var O=this.$d;this.$y=O.getFullYear(),this.$M=O.getMonth(),this.$D=O.getDate(),this.$W=O.getDay(),this.$H=O.getHours(),this.$m=O.getMinutes(),this.$s=O.getSeconds(),this.$ms=O.getMilliseconds()},L.$utils=function(){return R},L.isValid=function(){return this.$d.toString()!==v},L.isSame=function(O,D){var P=M(O);return this.startOf(D)<=P&&P<=this.endOf(D)},L.isAfter=function(O,D){return M(O)<this.startOf(D)},L.isBefore=function(O,D){return this.endOf(D)<M(O)},L.$g=function(O,D,P){return R.u(O)?this[D]:this.set(P,O)},L.unix=function(){return Math.floor(this.valueOf()/1e3)},L.valueOf=function(){return this.$d.getTime()},L.startOf=function(O,D){var P=this,I=!!R.u(D)||D,z=R.p(O),B=function(be,ie){var Me=R.w(P.$u?Date.UTC(P.$y,ie,be):new Date(P.$y,ie,be),P);return I?Me:Me.endOf(u)},N=function(be,ie){return R.w(P.toDate()[be].apply(P.toDate("s"),(I?[0,0,0,0]:[23,59,59,999]).slice(ie)),P)},U=this.$W,H=this.$M,q=this.$D,K="set"+(this.$u?"UTC":"");switch(z){case p:return I?B(1,0):B(31,11);case c:return I?B(1,H):B(0,H+1);case d:var ee=this.$locale().weekStart||0,fe=(U<ee?U+7:U)-ee;return B(I?q-fe:q+(6-fe),H);case u:case m:return N(K+"Hours",0);case s:return N(K+"Minutes",1);case l:return N(K+"Seconds",2);case a:return N(K+"Milliseconds",3);default:return this.clone()}},L.endOf=function(O){return this.startOf(O,!1)},L.$set=function(O,D){var P,I=R.p(O),z="set"+(this.$u?"UTC":""),B=(P={},P[u]=z+"Date",P[m]=z+"Date",P[c]=z+"Month",P[p]=z+"FullYear",P[s]=z+"Hours",P[l]=z+"Minutes",P[a]=z+"Seconds",P[o]=z+"Milliseconds",P)[I],N=I===u?this.$D+(D-this.$W):D;if(I===c||I===p){var U=this.clone().set(m,1);U.$d[B](N),U.init(),this.$d=U.set(m,Math.min(this.$D,U.daysInMonth())).$d}else B&&this.$d[B](N);return this.init(),this},L.set=function(O,D){return this.clone().$set(O,D)},L.get=function(O){return this[R.p(O)]()},L.add=function(O,D){var P,I=this;O=Number(O);var z=R.p(D),B=function(H){var q=M(I);return R.w(q.date(q.date()+Math.round(H*O)),I)};if(z===c)return this.set(c,this.$M+O);if(z===p)return this.set(p,this.$y+O);if(z===u)return B(1);if(z===d)return B(7);var N=(P={},P[l]=r,P[s]=i,P[a]=n,P)[z]||1,U=this.$d.getTime()+O*N;return R.w(U,this)},L.subtract=function(O,D){return this.add(-1*O,D)},L.format=function(O){var D=this,P=this.$locale();if(!this.isValid())return P.invalidDate||v;var I=O||"YYYY-MM-DDTHH:mm:ssZ",z=R.z(this),B=this.$H,N=this.$m,U=this.$M,H=P.weekdays,q=P.months,K=P.meridiem,ee=function(ie,Me,Be,Ve){return ie&&(ie[Me]||ie(D,I))||Be[Me].slice(0,Ve)},fe=function(ie){return R.s(B%12||12,ie,"0")},be=K||function(ie,Me,Be){var Ve=ie<12?"AM":"PM";return Be?Ve.toLowerCase():Ve};return I.replace(h,function(ie,Me){return Me||function(Be){switch(Be){case"YY":return String(D.$y).slice(-2);case"YYYY":return R.s(D.$y,4,"0");case"M":return U+1;case"MM":return R.s(U+1,2,"0");case"MMM":return ee(P.monthsShort,U,q,3);case"MMMM":return ee(q,U);case"D":return D.$D;case"DD":return R.s(D.$D,2,"0");case"d":return String(D.$W);case"dd":return ee(P.weekdaysMin,D.$W,H,2);case"ddd":return ee(P.weekdaysShort,D.$W,H,3);case"dddd":return H[D.$W];case"H":return String(B);case"HH":return R.s(B,2,"0");case"h":return fe(1);case"hh":return fe(2);case"a":return be(B,N,!0);case"A":return be(B,N,!1);case"m":return String(N);case"mm":return R.s(N,2,"0");case"s":return String(D.$s);case"ss":return R.s(D.$s,2,"0");case"SSS":return R.s(D.$ms,3,"0");case"Z":return z}return null}(ie)||z.replace(":","")})},L.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},L.diff=function(O,D,P){var I,z=this,B=R.p(D),N=M(O),U=(N.utcOffset()-this.utcOffset())*r,H=this-N,q=function(){return R.m(z,N)};switch(B){case p:I=q()/12;break;case c:I=q();break;case y:I=q()/3;break;case d:I=(H-U)/6048e5;break;case u:I=(H-U)/864e5;break;case s:I=H/i;break;case l:I=H/r;break;case a:I=H/n;break;default:I=H}return P?I:R.a(I)},L.daysInMonth=function(){return this.endOf(c).$D},L.$locale=function(){return T[this.$L]},L.locale=function(O,D){if(!O)return this.$L;var P=this.clone(),I=$(O,D,!0);return I&&(P.$L=I),P},L.clone=function(){return R.w(this.$d,this)},L.toDate=function(){return new Date(this.valueOf())},L.toJSON=function(){return this.isValid()?this.toISOString():null},L.toISOString=function(){return this.$d.toISOString()},L.toString=function(){return this.$d.toUTCString()},F}(),j=A.prototype;return M.prototype=j,[["$ms",o],["$s",a],["$m",l],["$H",s],["$W",u],["$M",c],["$y",p],["$D",m]].forEach(function(F){j[F[1]]=function(L){return this.$g(L,F[0],F[1])}}),M.extend=function(F,L){return F.$i||(F(L,A,M),F.$i=!0),M},M.locale=$,M.isDayjs=_,M.unix=function(F){return M(1e3*F)},M.en=T[C],M.Ls=T,M.p={},M})})(A2);var D6=A2.exports;const e1=Gp(D6),L6=k.div`
  /* max-width: 800px; */
  margin: 20px auto;

  font-family: var(--second-font);
`;k.h3`
  font-size: 18px;
  color: #4a3632; // Темний колір з твого футера
  margin-bottom: 20px;
  text-transform: uppercase;
  letter-spacing: 1px;
`;const A6=k.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  background: var(--second-background);
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 40px;
`,R6=k.input`
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
`,F6=k.textarea`
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
`,z6=k.button`
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
`,N6=k.div`
  margin-top: 30px;
`,B6=k.div`
  border-bottom: 1px solid #eee;
  padding: 20px 0;
`,V6=k.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
`,U6=k.span`
  font-weight: bold;
  color: #333;
`,H6=k.span`
  font-size: 12px;
  color: #999;
`,W6=k.p`
  font-size: 15px;
  color: #555;
  margin: 5px 0;
`,G6=k.div`
  margin-top: 15px;
  padding: 15px;
  background: var(--second-background);

  border-left: 3px solid var(--brown-color);
  font-size: 14px;
    border-radius: 0 10px 10px 0;

`,q6=k.div`
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
`,t1=({productId:e,questions:t})=>{const[n,r]=b.useState(""),[i,o]=b.useState(""),a=async l=>{l.preventDefault();const u=await fetch("https://backenddidiv-production.up.railway.app/api/questions",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({data:{question:n,userName:i,product:e}})});console.log(e),u.ok&&(Y.success("Запитання надіслано! Воно з’явиться після модерації."),r(""),o(""))};return f.jsxs(L6,{children:[f.jsx(Or,{autoClose:1500}),f.jsxs(A6,{onSubmit:a,children:[f.jsx(R6,{placeholder:"Ваше ім'я",value:i,onChange:l=>o(l.target.value),required:!0}),f.jsx(F6,{placeholder:"Запитайте нас про цей товар...",value:n,onChange:l=>r(l.target.value),required:!0}),f.jsx(z6,{children:"Надіслати запитання"})]}),f.jsx(N6,{children:t&&t.length>0?t.map(l=>l.answer?f.jsxs(B6,{children:[f.jsxs(V6,{children:[f.jsx(U6,{children:l.userName||"Гість"}),f.jsx(H6,{children:new Date(l.createdAt).toLocaleDateString()})]}),f.jsx(W6,{children:l.question}),f.jsxs(G6,{children:[f.jsx(q6,{children:"Адміністратор"}),f.jsx("p",{children:l.answer})]})]},l.id):null):f.jsx("p",{style:{textAlign:"center",color:"#999"},children:"Запитань поки немає. Будьте першим!"})})]})},Y6=()=>{var L;const{id:e}=oy(),[t,n]=b.useState([]),[r,i]=b.useState(1),[o,a]=b.useState("description"),[l,s]=b.useState(null),[u,d]=b.useState(!1),[c,y]=b.useState(0);console.log("products",t);const[p,m]=b.useState(!0),v=t.find(O=>O.id===Number(e)),w=v?e1().diff(e1(v.createdAt),"day")<7:!1,g=(O=>{const[D,P]=b.useState(!1);return b.useEffect(()=>{const I=window.matchMedia(O),z=()=>P(I.matches);return z(),I.addEventListener("change",z),()=>I.removeEventListener("change",z)},[O]),D})("(min-width: 768px)"),x=qe(O=>O.cart.items),S=v?x.find(O=>O.id===v.id):null,C=(S==null?void 0:S.quantity)||0;b.useEffect(()=>{(async()=>{try{m(!0);const P=await(await fetch(`https://backenddidiv-production.up.railway.app/api/products?filters[id][$eq]=${e}&populate=*`)).json();n(P.data)}catch(D){console.error("Error fetching products:",D)}finally{m(!1)}})()},[e]),console.log(v),b.useEffect(()=>{var O,D;v&&v.images&&s((D=(O=v.images)==null?void 0:O[0])==null?void 0:D.url)},[v]);const T=((v==null?void 0:v.images)??[]).map(O=>({src:O.url})),E=()=>{const O=v.images.findIndex(D=>D.url===l);y(O>=0?O:0),d(!0)},_=jn(),M=qe(O=>O.favorites.items).some(O=>O.id===(v==null?void 0:v.id)),R=()=>{if(C>=v.stock){Y.warning("Товар вже в кошику (досягнуто максимум)");return}if(C+r>v.stock){Y.warning(`Доступно лише ${v.stock} шт.`);return}_(ho({...v,quantity:r})),Y.success(`${v.name} додано в кошик!`)},A=(O,D)=>{D.stopPropagation(),_(ai(O)),M?Y.warning(`${O.name} видалено з обраного`):Y.info(`${O.name} додано в обране`)},j=(v==null?void 0:v.new_price)&&(v==null?void 0:v.new_price)<v.price,F=j?Math.round((v.price-v.new_price)/v.price*100):0;return p?f.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"100vw",height:"100vh"},children:f.jsx(Ya,{height:100,width:100,radius:5,color:"var(--orange-color)",ariaLabel:"ball-triangle-loading",wrapperStyle:{},wrapperClass:"",visible:!0})}):v?f.jsxs(jv,{children:[" ",f.jsx(Or,{autoClose:1500}),f.jsxs(AD,{children:[f.jsx(Oe,{to:"/",children:"Головна"})," / ",f.jsx(Oe,{to:"/catalog",children:"Каталог"})," /"," ",v.name]}),f.jsxs(RD,{children:[f.jsxs(FD,{children:[f.jsx(zD,{src:l,alt:v.name,onClick:E}),f.jsx(ND,{children:(v.images??[]).map(O=>{const D=O.url;return f.jsx(BD,{src:D,onClick:()=>s(D),style:{cursor:"pointer",opacity:l===D?1:.4}},O.id)})})]}),f.jsx(g6,{open:u,close:()=>d(!1),index:c,slides:T,controller:{closeOnBackdropClick:!0},on:{view:({index:O})=>{var D,P;y(O),(P=(D=v==null?void 0:v.images)==null?void 0:D[O])!=null&&P.url&&s(v.images[O].url)}},plugins:[I6],zoom:{maxZoomPixelRatio:3,zoomInMultiplier:2,doubleTapDelay:300,doubleClickDelay:300,doubleClickEnabled:!0,pinchZoomDistanceFactor:100,scrollToZoom:!0}}),f.jsxs(VD,{children:[f.jsx(UD,{children:v.name}),f.jsx(HD,{children:w&&f.jsx(WD,{children:"● Новий товар"})}),f.jsxs(GD,{children:[f.jsx(qD,{children:j?f.jsxs(f.Fragment,{children:[f.jsxs(Mv,{$discount:!0,children:[v.new_price.toLocaleString()," грн"]}),f.jsxs(YD,{children:[v.price.toLocaleString()," грн"]}),f.jsxs(XD,{children:["-",F,"%"]})]}):f.jsxs(Mv,{children:[v.price.toLocaleString()," грн"]})}),f.jsxs(KD,{children:[f.jsxs(QD,{children:[f.jsx("button",{onClick:()=>i(Math.max(1,r-1)),children:"-"}),f.jsx("span",{children:r}),f.jsxs(iL,{$active:r>=v.stock,children:[f.jsx("button",{onClick:()=>i(Math.min(v.stock,r+1)),disabled:r>=v.stock,children:"+"}),f.jsxs(i2,{children:["Максимум: ",v.stock]})]})]}),f.jsxs(ZD,{onClick:R,children:[" ",f.jsx(po,{size:25}),f.jsx("span",{children:"В КОШИК"})]}),f.jsxs(nL,{$active:M,onClick:O=>A(v,O),children:[f.jsxs(rL,{$active:M,children:[" ",f.jsx("use",{href:`${cn}#icon-heart`})]}),f.jsx("span",{children:"В ОБРАНЕ"})]})]})]}),f.jsxs(eL,{children:[f.jsxs("p",{children:[f.jsx("strong",{children:"Ваше місто:"})," Київ"]}),f.jsx("p",{children:"🚚 Доставка по Україні (Розрахувати вартість)"})]})]})]}),!g&&f.jsxs(Dv,{children:[f.jsxs(Lv,{children:[f.jsx(Ro,{active:o==="description",onClick:()=>a("description"),children:"Опис"}),f.jsx(Ro,{active:o==="attributes",onClick:()=>a("attributes"),children:"Характеристики"}),f.jsx(Ro,{active:o==="FAQ",onClick:()=>a("FAQ"),children:"Питання та відповіді"})]}),f.jsxs(Av,{children:[o==="description"&&f.jsx(Rv,{children:v.description}),o==="attributes"&&f.jsx($v,{children:(L=v.attributes)!=null&&L.length?v.attributes.map(O=>f.jsxs(Iv,{children:[f.jsx("span",{children:O.label}),f.jsx("b",{children:O.value})]},O.id)):f.jsx("p",{children:"Характеристики відсутні"})}),o==="FAQ"&&f.jsx(t1,{productId:v.documentId,questions:v.questions})]})]}),g&&f.jsxs(tL,{children:[f.jsxs(Dv,{children:[f.jsxs(Lv,{children:[f.jsx(Ro,{active:o==="description",onClick:()=>a("description"),children:"Опис"}),f.jsx(Ro,{active:o==="FAQ",onClick:()=>a("FAQ"),children:"Питання та відповіді"})]}),f.jsxs(Av,{children:[o==="description"&&f.jsx(Rv,{children:v.description}),o==="FAQ"&&f.jsx(t1,{productId:v.documentId,questions:v.questions})]})]}),f.jsxs($v,{children:[f.jsx(JD,{children:" Характеристики"}),(()=>{const O=[...v.attributes||[],...v.features||[]];return O.length?O.map((D,P)=>f.jsxs(Iv,{children:[f.jsx("span",{children:D.label}),f.jsx("b",{children:D.value})]},`${D.id}-${P}`)):f.jsx("p",{children:"Характеристики відсутні"})})()]})]})]}):f.jsx(jv,{children:"Товар не знайдено"})},X6=k.div`
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

  
`,K6=k.nav`
  font-family: var(--main-font);
  font-size: 14px;
  color: #8c8c8c;
  margin-bottom: 15px;
`,Q6=k.h1`
  font-size:24px;
 
  font-weight: 800;
  margin-bottom: 20px;
  @media screen and (min-width: 768px) {
  font-size:30px;
  }
  
`,Z6=k.div`
  display: flex;
  flex-direction: column;
  gap: 20px; 
  width: 100%;
  
  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between; 
  }
`,J6=k.div`
  flex: 1; 
  width: 100%;
  border: 1px solid #eee;
  border-radius: 12px;
`,eA=k.div`
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
`,tA=k.img`
  width: 100%;
  height: auto;
  border-radius: 4px;
`,nA=k.div`
  h3 {
    font-size: 16px;
    font-weight: 300;
    margin: 0;
    line-height: 1.4;
  }
`,rA=k.div`

  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  gap: 30px;
`,iA=k.div`

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
`;const wc=k.div`
  text-align: center;
  width: 100px;
 
`,Sc=k.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 2px;
`,_c=k.span`
  font-size: 18px;
  font-weight: 600;
  color: ${({$discount:e})=>"#111"};
`,Cc=k.span`
  font-size: 13px;
  color: #999;
  text-decoration: line-through;
`,Ec=k.span`
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
`,oA=k.button`
  background: 'none';
  border: 'none';
  cursor: 'pointer';
  color: '#ccc';
`,aA=k.button`
  background: 'none';
  border: 'none';
  cursor: 'pointer';
  color: '#ccc';
`,sA=k.div`

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
`,lA=k.div`
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
`,uA=k(Oe)`
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
`,cA=k.button`
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
`;const dA=k.div`
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
`,fA=k.div`
 font-family: var(--main-font);
  font-size: 14px;
  color: #8c8c8c;
  margin-bottom: 15px;
`,pA=k.div`
  background-color: #fdfaf7;
`,hA=k.div`
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
`;const mA=k.img`
  width: 250px;
  height: auto;
  margin-bottom: 30px;
`,gA=k.h2`
  font-size: 28px;
  color: #333;
  margin-bottom: 10px;
`,vA=k.p`
  font-size: 18px;
  color: #666;
  margin-bottom: 40px;
`,yA=k.button`
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
`,xA=()=>f.jsx(pA,{children:f.jsxs(dA,{children:[f.jsx(fA,{children:"Головна / Кошик"}),f.jsxs(hA,{children:[f.jsx(mA,{src:"/Didiv/empty-cart.png",alt:"Порожній кошик"}),f.jsx(gA,{children:"Ваш кошик порожній"}),f.jsx(vA,{children:"Ви ще не додали жодного товару в кошик"}),f.jsx(yA,{onClick:()=>window.location.href="/Didiv/catalog",children:"Перейти до покупок"})]})]})}),bA=k.div`
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
`,wA=({item:e})=>{const t=jn();return f.jsxs(bA,{children:[f.jsx("button",{onClick:()=>t(H4(e.id)),children:"-"}),f.jsx("span",{children:e.quantity}),f.jsx("button",{onClick:()=>t(U4({id:e.id,stock:e.stock})),disabled:e.quantity>=e.stock,children:"+"})]})},SA=()=>{const e=jn(),t=On(),[n,r]=b.useState([]),i=qe(p=>p.cart.items),a=qe(p=>p.cart.items).reduce((p,m)=>p+m.quantity,0),l=i.reduce((p,m)=>p+(m.new_price??m.price)*(m.quantity||1),0),s=qe(p=>p.favorites.items),u=i.length===0,d=(p,m)=>{m.stopPropagation(),console.log(p);const v=s.some(w=>w.id===p.id);e(ai(p)),v?Y.warning(`${p.name} видалено з обраного`):Y.info(`${p.name} додано в обране`)},c=p=>{r(m=>[...m,p.id]),setTimeout(()=>{e(B4(p)),r(m=>m.filter(v=>v!==p.id))},300)},y=()=>{e(am())};return f.jsx(f.Fragment,{children:u?f.jsx(xA,{}):f.jsxs(X6,{children:[f.jsx(Or,{autoClose:1500}),f.jsxs(K6,{children:[" ",f.jsx(Oe,{to:"/",style:{color:"inherit",textDecoration:"none"},children:"Головна"})," ","/"," ",f.jsx(Oe,{to:"/cart",style:{color:"inherit",textDecoration:"none"},children:"Кошик"})]}),f.jsx(Q6,{children:"Кошик"}),f.jsxs(Z6,{children:[f.jsx(J6,{children:i.map((p,m)=>{var x,S;console.log(p);const v=s.some(C=>C.id===p.id),w=p.new_price&&p.new_price<p.price,h=w?p.new_price:p.price,g=w?Math.round((p.price-p.new_price)/p.price*100):0;return f.jsxs(eA,{className:n.includes(p.id)?"removing":"",children:[f.jsx(tA,{src:((S=(x=p.images)==null?void 0:x[0])==null?void 0:S.url)||"/nofoto.png",alt:p.name,onClick:()=>t(`/product/${p.id}`),onError:C=>{C.currentTarget.onerror=null,C.currentTarget.src=no}}),f.jsx(nA,{children:f.jsx("h3",{children:p.name})}),f.jsxs(rA,{children:[f.jsx(wA,{item:{...p,quantity:p.quantity||1}}),f.jsx(wc,{children:f.jsxs(Sc,{children:[f.jsxs(_c,{$discount:w,children:[(h*(p.quantity||1)).toLocaleString()," грн"]}),w&&f.jsxs(f.Fragment,{children:[f.jsxs(Cc,{children:[(p.price*(p.quantity||1)).toLocaleString()," грн"]}),f.jsxs(Ec,{children:["-",g,"%"]})]})]})})]}),f.jsxs(iA,{children:[f.jsx(aA,{onClick:C=>d(p,C),style:{background:"none",border:"none",cursor:"pointer",color:"#ccc"},children:f.jsx(Ua,{size:22,fill:v?"#ff4d4f":"none",color:v?"#ff4d4f":"#999"})}),f.jsx(oA,{onClick:()=>c(p),style:{background:"none",border:"none",cursor:"pointer",color:"#000000"},children:f.jsx(Vb,{size:22})})]})]},`${p.id}-${m}`)})}),f.jsxs(sA,{children:[f.jsxs(lA,{children:[f.jsx("span",{children:"Всього в обраному:"}),f.jsxs("strong",{children:[a," шт."]}),f.jsx("span",{children:"На суму:"}),f.jsxs("strong",{children:[l," грн"]})]}),f.jsx(uA,{to:"/checkout",children:"Оформити замовлення"}),f.jsx(cA,{onClick:y,children:"Oчистити кошик"})]})]})]})})},_A=k.div`
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
`,CA=k.nav`
  font-family: var(--main-font);
  font-size: 14px;
  color: #8c8c8c;
  margin-bottom: 15px;
`,EA=k.h1`
color: var(--black-color);
 font-family: var(--main-font);
  font-size: 30px;
  font-weight: 800;
  margin-bottom: 32px;
`,kA=k.div`

   display: flex;
  flex-direction: column;
  gap: 20px; 
  width: 100%;
  
  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between; 
  }
`,PA=k.div`
   flex: 1; 
  width: 100%;
  border: 1px solid #eee;
  border-radius: 12px;
`,TA=k.div`
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
`;const OA=k.img`
   width: 100%;
  height: auto;
  border-radius: 4px;
`,jA=k.h3`
 font-size: 20px;
    font-weight: 300;
    margin: 0;
    line-height: 1.4;
    @media screen and (max-width: 768px) {
    border-bottom: 1px solid #eee;
    padding-bottom:10px;
  }
    
`,MA=k.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
   @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;k.p`
  font-size: 17px;
  font-weight: 500;
  white-space: nowrap;
  width: 100px;
  text-align: center;
`;const $A=k.div`
  display: flex;
  gap: 16px;
`,n1=k.button`
  background: none;
  border: none;
  cursor: pointer;
  color: #1a1a1a;
  padding: 8px;
  
`,IA=k.div`
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
`,DA=k.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  font-size: 15px;
  color: #555;
`,LA=k.button`
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
`,AA=k.button`
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
`,RA=k.div`
  padding: 20px 40px;
  font-size: 14px;
  color: #8c8c8c;
  background-color: #fdfaf7;
`,FA=k.div`
   
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
`;const zA=k.img`
  width: 250px;
  height: auto;
  margin-bottom: 30px;
`;k.h2`
  font-size: 28px;
  color: #333;
  margin-bottom: 10px;
`;const NA=k.p`
  font-size: 18px;
  color: #666;
  margin-bottom: 40px;
`,BA=k.button`
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
`,VA=()=>f.jsxs(f.Fragment,{children:[f.jsx(RA,{children:"Головна / Обране"}),f.jsxs(FA,{children:[f.jsx(zA,{src:"/Didiv/sad.png",alt:"Порожній кошик"}),f.jsx(NA,{children:"Ви ще не додали жодного товару в обране"}),f.jsx(BA,{onClick:()=>window.location.href="/Didiv/catalog",children:"Перейти до вибору"})]})]}),UA=()=>{const e=jn(),t=On(),n=qe(c=>c.favorites.items),[r,i]=b.useState([]),o=qe(c=>c.cart.items),a=()=>{const c=n.map(y=>{const p=o.find(w=>w.id===y.id),m=p?p.quantity:0,v=y.stock-m;return v<=0?null:{...y,quantity:v}}).filter(Boolean);if(c.length===0){Y.error("Усі товари вже в максимальній кількості");return}e(V4(c)),Y.success("Додано максимально доступну кількість товарів")};console.log(n);const l=n.reduce((c,y)=>c+(y.new_price??y.price)*(y.quantity||1),0),s=(c,y)=>{y.stopPropagation();const p=n.some(m=>m.id===c.id);i(m=>[...m,c.id]),setTimeout(()=>{e(ai(c)),i(m=>m.filter(v=>v!==c.id))},300),p?Y.warning(`${c.name} видалено з обраного`):Y.info(`${c.name} додано в обране`)},u=()=>{e(zj())},d=n.length===0;return f.jsx(f.Fragment,{children:d?f.jsx(VA,{}):f.jsxs(_A,{children:[f.jsx(Or,{autoClose:1500}),f.jsxs(CA,{children:[" ",f.jsx(Oe,{to:"/",style:{color:"inherit",textDecoration:"none"},children:"Головна"})," ","/"," ",f.jsx(Oe,{to:"/favorite",style:{color:"inherit",textDecoration:"none"},children:"Обране"})]}),f.jsx(EA,{children:"Обране"}),f.jsxs(kA,{children:[f.jsx(PA,{children:n.map(c=>{var w,h;const y=c.new_price&&c.new_price<c.price,p=y?c.new_price:c.price,m=y?Math.round((c.price-c.new_price)/c.price*100):0,v=g=>{const x=o.find(C=>C.id===g.id);if((x?x.quantity:0)>=g.stock){Y.error(`Вибачте, доступно лише ${g.stock} шт.`);return}e(ho(g)),Y.success(`${g.name} додано в кошик!`)};return f.jsxs(TA,{className:r.includes(c.id)?"removing":"",children:[f.jsx(OA,{src:((h=(w=c.images)==null?void 0:w[0])==null?void 0:h.url)||"/nofoto.png",alt:c.name,onClick:()=>t(`/product/${c.id}`),onError:g=>{g.currentTarget.onerror=null,g.currentTarget.src="/nofoto.png"}}),f.jsx(jA,{children:c.name}),f.jsxs(MA,{children:[f.jsx(wc,{children:f.jsxs(Sc,{children:[f.jsxs(_c,{$discount:y,children:[(p*(c.quantity||1)).toLocaleString()," грн"]}),y&&f.jsxs(f.Fragment,{children:[f.jsxs(Cc,{children:[(c.price*(c.quantity||1)).toLocaleString()," грн"]}),f.jsxs(Ec,{children:["-",m,"%"]})]})]})}),f.jsxs($A,{children:[f.jsx(n1,{onClick:()=>v(c),children:f.jsx(po,{size:30})}),f.jsx(n1,{onClick:g=>s(c,g),children:f.jsx(Vb,{size:30})})]})]})]},c.id)})}),f.jsxs(IA,{children:[f.jsxs(DA,{children:[f.jsx("span",{children:"Всього в обраному:"}),f.jsxs("strong",{children:[n.length," шт."]}),f.jsx("span",{children:"На суму:"}),f.jsxs("strong",{children:[l," грн"]})]}),f.jsx("hr",{style:{border:"0",borderTop:"1px solid #eee",margin:"20px 0"}}),f.jsx(LA,{onClick:()=>a(),children:"Додати все до кошика"}),f.jsx(AA,{onClick:u,children:"Очистити обрані"})]})]})]})})},HA=k.div`
  background-color: #fdfaf7;
  min-height: 80vh;
  padding-bottom: 60px;
`,WA=k.div`
  padding: 15px 20px;
  font-size: 12px;
  color: #8c8c8c;

  @media screen and (min-width: 768px) {
    padding: 20px 40px;
    font-size: 14px;
  }
`,GA=k.article`
  max-width: 800px; // Обмежуємо ширину для зручного читання тексту
  margin: 0 auto;
  padding: 0 20px;

  @media screen and (min-width: 768px) {
    padding: 0 40px;
  }
`,qA=k.h1`
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
`;const YA=({title:e,children:t,breadcrumbPath:n})=>f.jsxs(HA,{children:[f.jsxs(WA,{children:["Головна / ",n]}),f.jsxs(GA,{children:[f.jsx(qA,{children:e}),t]})]}),r1=k.section`
  margin-bottom: 30px;

  @media screen and (min-width: 768px) {
    margin-bottom: 40px;
  }
`,i1=k.h2`
  font-size: 20px;
  color: #4a332a;
  margin-bottom: 15px;
  font-weight: 600;

  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`,o1=k.p`
  font-size: 16px;
  line-height: 1.6;
  color: #555;
  margin-bottom: 15px;
`,a1=k.ul`
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
`,XA=()=>f.jsxs(YA,{title:"Оплата і доставка",breadcrumbPath:"Доставка",children:[f.jsxs(r1,{children:[f.jsx(i1,{children:"Способи доставки"}),f.jsx(o1,{children:"Ми доставляємо замовлення по всій Україні за допомогою:"}),f.jsxs(a1,{children:[f.jsx("li",{children:"Нова Пошта (у відділення або кур1єром)"}),f.jsx("li",{children:"Самовивіз з нашого магазину"}),f.jsx("li",{children:"Укрпошта"})]})]}),f.jsxs(r1,{children:[f.jsx(i1,{children:"Варіанти оплати"}),f.jsx(o1,{children:"Ви можете обрати зручний для вас спосіб оплати:"}),f.jsxs(a1,{children:[f.jsx("li",{children:"Оплата карткою на сайті (Visa/Mastercard)"}),f.jsx("li",{children:"Післяплата (накладений платіж) при отриманні"}),f.jsx("li",{children:"Безготівковий розрахунок"})]})]})]});function ni(e){"@babel/helpers - typeof";return ni=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ni(e)}function KA(e,t){if(ni(e)!=="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(ni(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function R2(e){var t=KA(e,"string");return ni(t)==="symbol"?t:String(t)}function Go(e,t,n){return t=R2(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s1(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Z(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?s1(Object(n),!0).forEach(function(r){Go(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s1(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function QA(e){if(Array.isArray(e))return e}function ZA(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,i,o,a,l=[],s=!0,u=!1;try{if(o=(n=n.call(e)).next,t===0){if(Object(n)!==n)return;s=!1}else for(;!(s=(r=o.call(n)).done)&&(l.push(r.value),l.length!==t);s=!0);}catch(d){u=!0,i=d}finally{try{if(!s&&n.return!=null&&(a=n.return(),Object(a)!==a))return}finally{if(u)throw i}}return l}}function Rp(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function F2(e,t){if(e){if(typeof e=="string")return Rp(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Rp(e,t)}}function JA(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Un(e,t){return QA(e)||ZA(e,t)||F2(e,t)||JA()}function eR(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function tr(e,t){if(e==null)return{};var n=eR(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var tR=["defaultInputValue","defaultMenuIsOpen","defaultValue","inputValue","menuIsOpen","onChange","onInputChange","onMenuClose","onMenuOpen","value"];function nR(e){var t=e.defaultInputValue,n=t===void 0?"":t,r=e.defaultMenuIsOpen,i=r===void 0?!1:r,o=e.defaultValue,a=o===void 0?null:o,l=e.inputValue,s=e.menuIsOpen,u=e.onChange,d=e.onInputChange,c=e.onMenuClose,y=e.onMenuOpen,p=e.value,m=tr(e,tR),v=b.useState(l!==void 0?l:n),w=Un(v,2),h=w[0],g=w[1],x=b.useState(s!==void 0?s:i),S=Un(x,2),C=S[0],T=S[1],E=b.useState(p!==void 0?p:a),_=Un(E,2),$=_[0],M=_[1],R=b.useCallback(function(P,I){typeof u=="function"&&u(P,I),M(P)},[u]),A=b.useCallback(function(P,I){var z;typeof d=="function"&&(z=d(P,I)),g(z!==void 0?z:P)},[d]),j=b.useCallback(function(){typeof y=="function"&&y(),T(!0)},[y]),F=b.useCallback(function(){typeof c=="function"&&c(),T(!1)},[c]),L=l!==void 0?l:h,O=s!==void 0?s:C,D=p!==void 0?p:$;return Z(Z({},m),{},{inputValue:L,menuIsOpen:O,onChange:R,onInputChange:A,onMenuClose:F,onMenuOpen:j,value:D})}function rR(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l1(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,R2(r.key),r)}}function iR(e,t,n){return t&&l1(e.prototype,t),n&&l1(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function Fp(e,t){return Fp=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},Fp(e,t)}function oR(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Fp(e,t)}function eu(e){return eu=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},eu(e)}function aR(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function sR(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function lR(e,t){if(t&&(ni(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return sR(e)}function uR(e){var t=aR();return function(){var r=eu(e),i;if(t){var o=eu(this).constructor;i=Reflect.construct(r,arguments,o)}else i=r.apply(this,arguments);return lR(this,i)}}function cR(e){if(Array.isArray(e))return Rp(e)}function dR(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function fR(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Bm(e){return cR(e)||dR(e)||F2(e)||fR()}function pR(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}const hR=Math.min,mR=Math.max,tu=Math.round,ks=Math.floor,nu=e=>({x:e,y:e});function gR(e){const{x:t,y:n,width:r,height:i}=e;return{width:r,height:i,top:n,left:t,right:t+r,bottom:n+i,x:t,y:n}}function kc(){return typeof window<"u"}function z2(e){return B2(e)?(e.nodeName||"").toLowerCase():"#document"}function dn(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function N2(e){var t;return(t=(B2(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function B2(e){return kc()?e instanceof Node||e instanceof dn(e).Node:!1}function zp(e){return kc()?e instanceof Element||e instanceof dn(e).Element:!1}function Vm(e){return kc()?e instanceof HTMLElement||e instanceof dn(e).HTMLElement:!1}function u1(e){return!kc()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof dn(e).ShadowRoot}function V2(e){const{overflow:t,overflowX:n,overflowY:r,display:i}=Um(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&i!=="inline"&&i!=="contents"}let Vd;function vR(){return Vd==null&&(Vd=typeof CSS<"u"&&CSS.supports&&CSS.supports("-webkit-backdrop-filter","none")),Vd}function yR(e){return/^(html|body|#document)$/.test(z2(e))}function Um(e){return dn(e).getComputedStyle(e)}function xR(e){if(z2(e)==="html")return e;const t=e.assignedSlot||e.parentNode||u1(e)&&e.host||N2(e);return u1(t)?t.host:t}function U2(e){const t=xR(e);return yR(t)?e.ownerDocument?e.ownerDocument.body:e.body:Vm(t)&&V2(t)?t:U2(t)}function ru(e,t,n){var r;t===void 0&&(t=[]),n===void 0&&(n=!0);const i=U2(e),o=i===((r=e.ownerDocument)==null?void 0:r.body),a=dn(i);if(o){const l=Np(a);return t.concat(a,a.visualViewport||[],V2(i)?i:[],l&&n?ru(l):[])}else return t.concat(i,ru(i,[],n))}function Np(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function bR(e){const t=Um(e);let n=parseFloat(t.width)||0,r=parseFloat(t.height)||0;const i=Vm(e),o=i?e.offsetWidth:n,a=i?e.offsetHeight:r,l=tu(n)!==o||tu(r)!==a;return l&&(n=o,r=a),{width:n,height:r,$:l}}function Hm(e){return zp(e)?e:e.contextElement}function Ud(e){const t=Hm(e);if(!Vm(t))return nu(1);const n=t.getBoundingClientRect(),{width:r,height:i,$:o}=bR(t);let a=(o?tu(n.width):n.width)/r,l=(o?tu(n.height):n.height)/i;return(!a||!Number.isFinite(a))&&(a=1),(!l||!Number.isFinite(l))&&(l=1),{x:a,y:l}}const wR=nu(0);function SR(e){const t=dn(e);return!vR()||!t.visualViewport?wR:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function _R(e,t,n){return t===void 0&&(t=!1),!n||t&&n!==dn(e)?!1:t}function c1(e,t,n,r){t===void 0&&(t=!1),n===void 0&&(n=!1);const i=e.getBoundingClientRect(),o=Hm(e);let a=nu(1);t&&(r?zp(r)&&(a=Ud(r)):a=Ud(e));const l=_R(o,n,r)?SR(o):nu(0);let s=(i.left+l.x)/a.x,u=(i.top+l.y)/a.y,d=i.width/a.x,c=i.height/a.y;if(o){const y=dn(o),p=r&&zp(r)?dn(r):r;let m=y,v=Np(m);for(;v&&r&&p!==m;){const w=Ud(v),h=v.getBoundingClientRect(),g=Um(v),x=h.left+(v.clientLeft+parseFloat(g.paddingLeft))*w.x,S=h.top+(v.clientTop+parseFloat(g.paddingTop))*w.y;s*=w.x,u*=w.y,d*=w.x,c*=w.y,s+=x,u+=S,m=dn(v),v=Np(m)}}return gR({width:d,height:c,x:s,y:u})}function H2(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function CR(e,t){let n=null,r;const i=N2(e);function o(){var l;clearTimeout(r),(l=n)==null||l.disconnect(),n=null}function a(l,s){l===void 0&&(l=!1),s===void 0&&(s=1),o();const u=e.getBoundingClientRect(),{left:d,top:c,width:y,height:p}=u;if(l||t(),!y||!p)return;const m=ks(c),v=ks(i.clientWidth-(d+y)),w=ks(i.clientHeight-(c+p)),h=ks(d),x={rootMargin:-m+"px "+-v+"px "+-w+"px "+-h+"px",threshold:mR(0,hR(1,s))||1};let S=!0;function C(T){const E=T[0].intersectionRatio;if(E!==s){if(!S)return a();E?a(!1,E):r=setTimeout(()=>{a(!1,1e-7)},1e3)}E===1&&!H2(u,e.getBoundingClientRect())&&a(),S=!1}try{n=new IntersectionObserver(C,{...x,root:i.ownerDocument})}catch{n=new IntersectionObserver(C,x)}n.observe(e)}return a(!0),o}function ER(e,t,n,r){r===void 0&&(r={});const{ancestorScroll:i=!0,ancestorResize:o=!0,elementResize:a=typeof ResizeObserver=="function",layoutShift:l=typeof IntersectionObserver=="function",animationFrame:s=!1}=r,u=Hm(e),d=i||o?[...u?ru(u):[],...t?ru(t):[]]:[];d.forEach(h=>{i&&h.addEventListener("scroll",n,{passive:!0}),o&&h.addEventListener("resize",n)});const c=u&&l?CR(u,n):null;let y=-1,p=null;a&&(p=new ResizeObserver(h=>{let[g]=h;g&&g.target===u&&p&&t&&(p.unobserve(t),cancelAnimationFrame(y),y=requestAnimationFrame(()=>{var x;(x=p)==null||x.observe(t)})),n()}),u&&!s&&p.observe(u),t&&p.observe(t));let m,v=s?c1(e):null;s&&w();function w(){const h=c1(e);v&&!H2(v,h)&&n(),v=h,m=requestAnimationFrame(w)}return n(),()=>{var h;d.forEach(g=>{i&&g.removeEventListener("scroll",n),o&&g.removeEventListener("resize",n)}),c==null||c(),(h=p)==null||h.disconnect(),p=null,s&&cancelAnimationFrame(m)}}var Bp=b.useLayoutEffect,kR=["className","clearValue","cx","getStyles","getClassNames","getValue","hasValue","isMulti","isRtl","options","selectOption","selectProps","setValue","theme"],iu=function(){};function PR(e,t){return t?t[0]==="-"?e+t:e+"__"+t:e}function TR(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var o=[].concat(r);if(t&&e)for(var a in t)t.hasOwnProperty(a)&&t[a]&&o.push("".concat(PR(e,a)));return o.filter(function(l){return l}).map(function(l){return String(l).trim()}).join(" ")}var d1=function(t){return RR(t)?t.filter(Boolean):ni(t)==="object"&&t!==null?[t]:[]},W2=function(t){t.className,t.clearValue,t.cx,t.getStyles,t.getClassNames,t.getValue,t.hasValue,t.isMulti,t.isRtl,t.options,t.selectOption,t.selectProps,t.setValue,t.theme;var n=tr(t,kR);return Z({},n)},Te=function(t,n,r){var i=t.cx,o=t.getStyles,a=t.getClassNames,l=t.className;return{css:o(n,t),className:i(r??{},a(n,t),l)}};function Pc(e){return[document.documentElement,document.body,window].indexOf(e)>-1}function OR(e){return Pc(e)?window.innerHeight:e.clientHeight}function G2(e){return Pc(e)?window.pageYOffset:e.scrollTop}function ou(e,t){if(Pc(e)){window.scrollTo(0,t);return}e.scrollTop=t}function jR(e){var t=getComputedStyle(e),n=t.position==="absolute",r=/(auto|scroll)/;if(t.position==="fixed")return document.documentElement;for(var i=e;i=i.parentElement;)if(t=getComputedStyle(i),!(n&&t.position==="static")&&r.test(t.overflow+t.overflowY+t.overflowX))return i;return document.documentElement}function MR(e,t,n,r){return n*((e=e/r-1)*e*e+1)+t}function Ps(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:200,r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:iu,i=G2(e),o=t-i,a=10,l=0;function s(){l+=a;var u=MR(l,i,o,n);ou(e,u),l<n?window.requestAnimationFrame(s):r(e)}s()}function f1(e,t){var n=e.getBoundingClientRect(),r=t.getBoundingClientRect(),i=t.offsetHeight/3;r.bottom+i>n.bottom?ou(e,Math.min(t.offsetTop+t.clientHeight-e.offsetHeight+i,e.scrollHeight)):r.top-i<n.top&&ou(e,Math.max(t.offsetTop-i,0))}function $R(e){var t=e.getBoundingClientRect();return{bottom:t.bottom,height:t.height,left:t.left,right:t.right,top:t.top,width:t.width}}function p1(){try{return document.createEvent("TouchEvent"),!0}catch{return!1}}function IR(){try{return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}catch{return!1}}var q2=!1,DR={get passive(){return q2=!0}},Ts=typeof window<"u"?window:{};Ts.addEventListener&&Ts.removeEventListener&&(Ts.addEventListener("p",iu,DR),Ts.removeEventListener("p",iu,!1));var LR=q2;function AR(e){return e!=null}function RR(e){return Array.isArray(e)}function Os(e,t,n){return e?t:n}var FR=function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];var o=Object.entries(t).filter(function(a){var l=Un(a,1),s=l[0];return!r.includes(s)});return o.reduce(function(a,l){var s=Un(l,2),u=s[0],d=s[1];return a[u]=d,a},{})},zR=["children","innerProps"],NR=["children","innerProps"];function BR(e){var t=e.maxHeight,n=e.menuEl,r=e.minHeight,i=e.placement,o=e.shouldScroll,a=e.isFixedPosition,l=e.controlHeight,s=jR(n),u={placement:"bottom",maxHeight:t};if(!n||!n.offsetParent)return u;var d=s.getBoundingClientRect(),c=d.height,y=n.getBoundingClientRect(),p=y.bottom,m=y.height,v=y.top,w=n.offsetParent.getBoundingClientRect(),h=w.top,g=a?window.innerHeight:OR(s),x=G2(s),S=parseInt(getComputedStyle(n).marginBottom,10),C=parseInt(getComputedStyle(n).marginTop,10),T=h-C,E=g-v,_=T+x,$=c-x-v,M=p-g+x+S,R=x+v-C,A=160;switch(i){case"auto":case"bottom":if(E>=m)return{placement:"bottom",maxHeight:t};if($>=m&&!a)return o&&Ps(s,M,A),{placement:"bottom",maxHeight:t};if(!a&&$>=r||a&&E>=r){o&&Ps(s,M,A);var j=a?E-S:$-S;return{placement:"bottom",maxHeight:j}}if(i==="auto"||a){var F=t,L=a?T:_;return L>=r&&(F=Math.min(L-S-l,t)),{placement:"top",maxHeight:F}}if(i==="bottom")return o&&ou(s,M),{placement:"bottom",maxHeight:t};break;case"top":if(T>=m)return{placement:"top",maxHeight:t};if(_>=m&&!a)return o&&Ps(s,R,A),{placement:"top",maxHeight:t};if(!a&&_>=r||a&&T>=r){var O=t;return(!a&&_>=r||a&&T>=r)&&(O=a?T-C:_-C),o&&Ps(s,R,A),{placement:"top",maxHeight:O}}return{placement:"bottom",maxHeight:t};default:throw new Error('Invalid placement provided "'.concat(i,'".'))}return u}function VR(e){var t={bottom:"top",top:"bottom"};return e?t[e]:"bottom"}var Y2=function(t){return t==="auto"?"bottom":t},UR=function(t,n){var r,i=t.placement,o=t.theme,a=o.borderRadius,l=o.spacing,s=o.colors;return Z((r={label:"menu"},Go(r,VR(i),"100%"),Go(r,"position","absolute"),Go(r,"width","100%"),Go(r,"zIndex",1),r),n?{}:{backgroundColor:s.neutral0,borderRadius:a,boxShadow:"0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)",marginBottom:l.menuGutter,marginTop:l.menuGutter})},X2=b.createContext(null),HR=function(t){var n=t.children,r=t.minMenuHeight,i=t.maxMenuHeight,o=t.menuPlacement,a=t.menuPosition,l=t.menuShouldScrollIntoView,s=t.theme,u=b.useContext(X2)||{},d=u.setPortalPlacement,c=b.useRef(null),y=b.useState(i),p=Un(y,2),m=p[0],v=p[1],w=b.useState(null),h=Un(w,2),g=h[0],x=h[1],S=s.spacing.controlHeight;return Bp(function(){var C=c.current;if(C){var T=a==="fixed",E=l&&!T,_=BR({maxHeight:i,menuEl:C,minHeight:r,placement:o,shouldScroll:E,isFixedPosition:T,controlHeight:S});v(_.maxHeight),x(_.placement),d==null||d(_.placement)}},[i,o,a,l,r,d,S]),n({ref:c,placerProps:Z(Z({},t),{},{placement:g||Y2(o),maxHeight:m})})},WR=function(t){var n=t.children,r=t.innerRef,i=t.innerProps;return Q("div",J({},Te(t,"menu",{menu:!0}),{ref:r},i),n)},GR=WR,qR=function(t,n){var r=t.maxHeight,i=t.theme.spacing.baseUnit;return Z({maxHeight:r,overflowY:"auto",position:"relative",WebkitOverflowScrolling:"touch"},n?{}:{paddingBottom:i,paddingTop:i})},YR=function(t){var n=t.children,r=t.innerProps,i=t.innerRef,o=t.isMulti;return Q("div",J({},Te(t,"menuList",{"menu-list":!0,"menu-list--is-multi":o}),{ref:i},r),n)},K2=function(t,n){var r=t.theme,i=r.spacing.baseUnit,o=r.colors;return Z({textAlign:"center"},n?{}:{color:o.neutral40,padding:"".concat(i*2,"px ").concat(i*3,"px")})},XR=K2,KR=K2,QR=function(t){var n=t.children,r=n===void 0?"No options":n,i=t.innerProps,o=tr(t,zR);return Q("div",J({},Te(Z(Z({},o),{},{children:r,innerProps:i}),"noOptionsMessage",{"menu-notice":!0,"menu-notice--no-options":!0}),i),r)},ZR=function(t){var n=t.children,r=n===void 0?"Loading...":n,i=t.innerProps,o=tr(t,NR);return Q("div",J({},Te(Z(Z({},o),{},{children:r,innerProps:i}),"loadingMessage",{"menu-notice":!0,"menu-notice--loading":!0}),i),r)},JR=function(t){var n=t.rect,r=t.offset,i=t.position;return{left:n.left,position:i,top:r,width:n.width,zIndex:1}},e8=function(t){var n=t.appendTo,r=t.children,i=t.controlElement,o=t.innerProps,a=t.menuPlacement,l=t.menuPosition,s=b.useRef(null),u=b.useRef(null),d=b.useState(Y2(a)),c=Un(d,2),y=c[0],p=c[1],m=b.useMemo(function(){return{setPortalPlacement:p}},[]),v=b.useState(null),w=Un(v,2),h=w[0],g=w[1],x=b.useCallback(function(){if(i){var E=$R(i),_=l==="fixed"?0:window.pageYOffset,$=E[y]+_;($!==(h==null?void 0:h.offset)||E.left!==(h==null?void 0:h.rect.left)||E.width!==(h==null?void 0:h.rect.width))&&g({offset:$,rect:E})}},[i,l,y,h==null?void 0:h.offset,h==null?void 0:h.rect.left,h==null?void 0:h.rect.width]);Bp(function(){x()},[x]);var S=b.useCallback(function(){typeof u.current=="function"&&(u.current(),u.current=null),i&&s.current&&(u.current=ER(i,s.current,x,{elementResize:"ResizeObserver"in window}))},[i,x]);Bp(function(){S()},[S]);var C=b.useCallback(function(E){s.current=E,S()},[S]);if(!n&&l!=="fixed"||!h)return null;var T=Q("div",J({ref:C},Te(Z(Z({},t),{},{offset:h.offset,position:l,rect:h.rect}),"menuPortal",{"menu-portal":!0}),o),r);return Q(X2.Provider,{value:m},n?Eu.createPortal(T,n):T)},t8=function(t){var n=t.isDisabled,r=t.isRtl;return{label:"container",direction:r?"rtl":void 0,pointerEvents:n?"none":void 0,position:"relative"}},n8=function(t){var n=t.children,r=t.innerProps,i=t.isDisabled,o=t.isRtl;return Q("div",J({},Te(t,"container",{"--is-disabled":i,"--is-rtl":o}),r),n)},r8=function(t,n){var r=t.theme.spacing,i=t.isMulti,o=t.hasValue,a=t.selectProps.controlShouldRenderValue;return Z({alignItems:"center",display:i&&o&&a?"flex":"grid",flex:1,flexWrap:"wrap",WebkitOverflowScrolling:"touch",position:"relative",overflow:"hidden"},n?{}:{padding:"".concat(r.baseUnit/2,"px ").concat(r.baseUnit*2,"px")})},i8=function(t){var n=t.children,r=t.innerProps,i=t.isMulti,o=t.hasValue;return Q("div",J({},Te(t,"valueContainer",{"value-container":!0,"value-container--is-multi":i,"value-container--has-value":o}),r),n)},o8=function(){return{alignItems:"center",alignSelf:"stretch",display:"flex",flexShrink:0}},a8=function(t){var n=t.children,r=t.innerProps;return Q("div",J({},Te(t,"indicatorsContainer",{indicators:!0}),r),n)},h1,s8=["size"],l8=["innerProps","isRtl","size"],u8={name:"8mmkcg",styles:"display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0"},Q2=function(t){var n=t.size,r=tr(t,s8);return Q("svg",J({height:n,width:n,viewBox:"0 0 20 20","aria-hidden":"true",focusable:"false",css:u8},r))},Wm=function(t){return Q(Q2,J({size:20},t),Q("path",{d:"M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"}))},Z2=function(t){return Q(Q2,J({size:20},t),Q("path",{d:"M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"}))},J2=function(t,n){var r=t.isFocused,i=t.theme,o=i.spacing.baseUnit,a=i.colors;return Z({label:"indicatorContainer",display:"flex",transition:"color 150ms"},n?{}:{color:r?a.neutral60:a.neutral20,padding:o*2,":hover":{color:r?a.neutral80:a.neutral40}})},c8=J2,d8=function(t){var n=t.children,r=t.innerProps;return Q("div",J({},Te(t,"dropdownIndicator",{indicator:!0,"dropdown-indicator":!0}),r),n||Q(Z2,null))},f8=J2,p8=function(t){var n=t.children,r=t.innerProps;return Q("div",J({},Te(t,"clearIndicator",{indicator:!0,"clear-indicator":!0}),r),n||Q(Wm,null))},h8=function(t,n){var r=t.isDisabled,i=t.theme,o=i.spacing.baseUnit,a=i.colors;return Z({label:"indicatorSeparator",alignSelf:"stretch",width:1},n?{}:{backgroundColor:r?a.neutral10:a.neutral20,marginBottom:o*2,marginTop:o*2})},m8=function(t){var n=t.innerProps;return Q("span",J({},n,Te(t,"indicatorSeparator",{"indicator-separator":!0})))},g8=R3(h1||(h1=pR([`
  0%, 80%, 100% { opacity: 0; }
  40% { opacity: 1; }
`]))),v8=function(t,n){var r=t.isFocused,i=t.size,o=t.theme,a=o.colors,l=o.spacing.baseUnit;return Z({label:"loadingIndicator",display:"flex",transition:"color 150ms",alignSelf:"center",fontSize:i,lineHeight:1,marginRight:i,textAlign:"center",verticalAlign:"middle"},n?{}:{color:r?a.neutral60:a.neutral20,padding:l*2})},Hd=function(t){var n=t.delay,r=t.offset;return Q("span",{css:gm({animation:"".concat(g8," 1s ease-in-out ").concat(n,"ms infinite;"),backgroundColor:"currentColor",borderRadius:"1em",display:"inline-block",marginLeft:r?"1em":void 0,height:"1em",verticalAlign:"top",width:"1em"},"","")})},y8=function(t){var n=t.innerProps,r=t.isRtl,i=t.size,o=i===void 0?4:i,a=tr(t,l8);return Q("div",J({},Te(Z(Z({},a),{},{innerProps:n,isRtl:r,size:o}),"loadingIndicator",{indicator:!0,"loading-indicator":!0}),n),Q(Hd,{delay:0,offset:r}),Q(Hd,{delay:160,offset:!0}),Q(Hd,{delay:320,offset:!r}))},x8=function(t,n){var r=t.isDisabled,i=t.isFocused,o=t.theme,a=o.colors,l=o.borderRadius,s=o.spacing;return Z({label:"control",alignItems:"center",cursor:"default",display:"flex",flexWrap:"wrap",justifyContent:"space-between",minHeight:s.controlHeight,outline:"0 !important",position:"relative",transition:"all 100ms"},n?{}:{backgroundColor:r?a.neutral5:a.neutral0,borderColor:r?a.neutral10:i?a.primary:a.neutral20,borderRadius:l,borderStyle:"solid",borderWidth:1,boxShadow:i?"0 0 0 1px ".concat(a.primary):void 0,"&:hover":{borderColor:i?a.primary:a.neutral30}})},b8=function(t){var n=t.children,r=t.isDisabled,i=t.isFocused,o=t.innerRef,a=t.innerProps,l=t.menuIsOpen;return Q("div",J({ref:o},Te(t,"control",{control:!0,"control--is-disabled":r,"control--is-focused":i,"control--menu-is-open":l}),a,{"aria-disabled":r||void 0}),n)},w8=b8,S8=["data"],_8=function(t,n){var r=t.theme.spacing;return n?{}:{paddingBottom:r.baseUnit*2,paddingTop:r.baseUnit*2}},C8=function(t){var n=t.children,r=t.cx,i=t.getStyles,o=t.getClassNames,a=t.Heading,l=t.headingProps,s=t.innerProps,u=t.label,d=t.theme,c=t.selectProps;return Q("div",J({},Te(t,"group",{group:!0}),s),Q(a,J({},l,{selectProps:c,theme:d,getStyles:i,getClassNames:o,cx:r}),u),Q("div",null,n))},E8=function(t,n){var r=t.theme,i=r.colors,o=r.spacing;return Z({label:"group",cursor:"default",display:"block"},n?{}:{color:i.neutral40,fontSize:"75%",fontWeight:500,marginBottom:"0.25em",paddingLeft:o.baseUnit*3,paddingRight:o.baseUnit*3,textTransform:"uppercase"})},k8=function(t){var n=W2(t);n.data;var r=tr(n,S8);return Q("div",J({},Te(t,"groupHeading",{"group-heading":!0}),r))},P8=C8,T8=["innerRef","isDisabled","isHidden","inputClassName"],O8=function(t,n){var r=t.isDisabled,i=t.value,o=t.theme,a=o.spacing,l=o.colors;return Z(Z({visibility:r?"hidden":"visible",transform:i?"translateZ(0)":""},j8),n?{}:{margin:a.baseUnit/2,paddingBottom:a.baseUnit/2,paddingTop:a.baseUnit/2,color:l.neutral80})},e_={gridArea:"1 / 2",font:"inherit",minWidth:"2px",border:0,margin:0,outline:0,padding:0},j8={flex:"1 1 auto",display:"inline-grid",gridArea:"1 / 1 / 2 / 3",gridTemplateColumns:"0 min-content","&:after":Z({content:'attr(data-value) " "',visibility:"hidden",whiteSpace:"pre"},e_)},M8=function(t){return Z({label:"input",color:"inherit",background:0,opacity:t?0:1,width:"100%"},e_)},$8=function(t){var n=t.cx,r=t.value,i=W2(t),o=i.innerRef,a=i.isDisabled,l=i.isHidden,s=i.inputClassName,u=tr(i,T8);return Q("div",J({},Te(t,"input",{"input-container":!0}),{"data-value":r||""}),Q("input",J({className:n({input:!0},s),ref:o,style:M8(l),disabled:a},u)))},I8=$8,D8=function(t,n){var r=t.theme,i=r.spacing,o=r.borderRadius,a=r.colors;return Z({label:"multiValue",display:"flex",minWidth:0},n?{}:{backgroundColor:a.neutral10,borderRadius:o/2,margin:i.baseUnit/2})},L8=function(t,n){var r=t.theme,i=r.borderRadius,o=r.colors,a=t.cropWithEllipsis;return Z({overflow:"hidden",textOverflow:a||a===void 0?"ellipsis":void 0,whiteSpace:"nowrap"},n?{}:{borderRadius:i/2,color:o.neutral80,fontSize:"85%",padding:3,paddingLeft:6})},A8=function(t,n){var r=t.theme,i=r.spacing,o=r.borderRadius,a=r.colors,l=t.isFocused;return Z({alignItems:"center",display:"flex"},n?{}:{borderRadius:o/2,backgroundColor:l?a.dangerLight:void 0,paddingLeft:i.baseUnit,paddingRight:i.baseUnit,":hover":{backgroundColor:a.dangerLight,color:a.danger}})},t_=function(t){var n=t.children,r=t.innerProps;return Q("div",r,n)},R8=t_,F8=t_;function z8(e){var t=e.children,n=e.innerProps;return Q("div",J({role:"button"},n),t||Q(Wm,{size:14}))}var N8=function(t){var n=t.children,r=t.components,i=t.data,o=t.innerProps,a=t.isDisabled,l=t.removeProps,s=t.selectProps,u=r.Container,d=r.Label,c=r.Remove;return Q(u,{data:i,innerProps:Z(Z({},Te(t,"multiValue",{"multi-value":!0,"multi-value--is-disabled":a})),o),selectProps:s},Q(d,{data:i,innerProps:Z({},Te(t,"multiValueLabel",{"multi-value__label":!0})),selectProps:s},n),Q(c,{data:i,innerProps:Z(Z({},Te(t,"multiValueRemove",{"multi-value__remove":!0})),{},{"aria-label":"Remove ".concat(n||"option")},l),selectProps:s}))},B8=N8,V8=function(t,n){var r=t.isDisabled,i=t.isFocused,o=t.isSelected,a=t.theme,l=a.spacing,s=a.colors;return Z({label:"option",cursor:"default",display:"block",fontSize:"inherit",width:"100%",userSelect:"none",WebkitTapHighlightColor:"rgba(0, 0, 0, 0)"},n?{}:{backgroundColor:o?s.primary:i?s.primary25:"transparent",color:r?s.neutral20:o?s.neutral0:"inherit",padding:"".concat(l.baseUnit*2,"px ").concat(l.baseUnit*3,"px"),":active":{backgroundColor:r?void 0:o?s.primary:s.primary50}})},U8=function(t){var n=t.children,r=t.isDisabled,i=t.isFocused,o=t.isSelected,a=t.innerRef,l=t.innerProps;return Q("div",J({},Te(t,"option",{option:!0,"option--is-disabled":r,"option--is-focused":i,"option--is-selected":o}),{ref:a,"aria-disabled":r},l),n)},H8=U8,W8=function(t,n){var r=t.theme,i=r.spacing,o=r.colors;return Z({label:"placeholder",gridArea:"1 / 1 / 2 / 3"},n?{}:{color:o.neutral50,marginLeft:i.baseUnit/2,marginRight:i.baseUnit/2})},G8=function(t){var n=t.children,r=t.innerProps;return Q("div",J({},Te(t,"placeholder",{placeholder:!0}),r),n)},q8=G8,Y8=function(t,n){var r=t.isDisabled,i=t.theme,o=i.spacing,a=i.colors;return Z({label:"singleValue",gridArea:"1 / 1 / 2 / 3",maxWidth:"100%",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},n?{}:{color:r?a.neutral40:a.neutral80,marginLeft:o.baseUnit/2,marginRight:o.baseUnit/2})},X8=function(t){var n=t.children,r=t.isDisabled,i=t.innerProps;return Q("div",J({},Te(t,"singleValue",{"single-value":!0,"single-value--is-disabled":r}),i),n)},K8=X8,Q8={ClearIndicator:p8,Control:w8,DropdownIndicator:d8,DownChevron:Z2,CrossIcon:Wm,Group:P8,GroupHeading:k8,IndicatorsContainer:a8,IndicatorSeparator:m8,Input:I8,LoadingIndicator:y8,Menu:GR,MenuList:YR,MenuPortal:e8,LoadingMessage:ZR,NoOptionsMessage:QR,MultiValue:B8,MultiValueContainer:R8,MultiValueLabel:F8,MultiValueRemove:z8,Option:H8,Placeholder:q8,SelectContainer:n8,SingleValue:K8,ValueContainer:i8},Z8=function(t){return Z(Z({},Q8),t.components)},m1=Number.isNaN||function(t){return typeof t=="number"&&t!==t};function J8(e,t){return!!(e===t||m1(e)&&m1(t))}function eF(e,t){if(e.length!==t.length)return!1;for(var n=0;n<e.length;n++)if(!J8(e[n],t[n]))return!1;return!0}function tF(e,t){t===void 0&&(t=eF);var n=null;function r(){for(var i=[],o=0;o<arguments.length;o++)i[o]=arguments[o];if(n&&n.lastThis===this&&t(i,n.lastArgs))return n.lastResult;var a=e.apply(this,i);return n={lastResult:a,lastArgs:i,lastThis:this},a}return r.clear=function(){n=null},r}var nF={name:"7pg0cj-a11yText",styles:"label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap"},rF=function(t){return Q("span",J({css:nF},t))},g1=rF,iF={guidance:function(t){var n=t.isSearchable,r=t.isMulti,i=t.tabSelectsValue,o=t.context,a=t.isInitialFocus;switch(o){case"menu":return"Use Up and Down to choose options, press Enter to select the currently focused option, press Escape to exit the menu".concat(i?", press Tab to select the option and exit the menu":"",".");case"input":return a?"".concat(t["aria-label"]||"Select"," is focused ").concat(n?",type to refine list":"",", press Down to open the menu, ").concat(r?" press left to focus selected values":""):"";case"value":return"Use left and right to toggle between focused values, press Backspace to remove the currently focused value";default:return""}},onChange:function(t){var n=t.action,r=t.label,i=r===void 0?"":r,o=t.labels,a=t.isDisabled;switch(n){case"deselect-option":case"pop-value":case"remove-value":return"option ".concat(i,", deselected.");case"clear":return"All selected options have been cleared.";case"initial-input-focus":return"option".concat(o.length>1?"s":""," ").concat(o.join(","),", selected.");case"select-option":return a?"option ".concat(i," is disabled. Select another option."):"option ".concat(i,", selected.");default:return""}},onFocus:function(t){var n=t.context,r=t.focused,i=t.options,o=t.label,a=o===void 0?"":o,l=t.selectValue,s=t.isDisabled,u=t.isSelected,d=t.isAppleDevice,c=function(v,w){return v&&v.length?"".concat(v.indexOf(w)+1," of ").concat(v.length):""};if(n==="value"&&l)return"value ".concat(a," focused, ").concat(c(l,r),".");if(n==="menu"&&d){var y=s?" disabled":"",p="".concat(u?" selected":"").concat(y);return"".concat(a).concat(p,", ").concat(c(i,r),".")}return""},onFilter:function(t){var n=t.inputValue,r=t.resultsMessage;return"".concat(r).concat(n?" for search term "+n:"",".")}},oF=function(t){var n=t.ariaSelection,r=t.focusedOption,i=t.focusedValue,o=t.focusableOptions,a=t.isFocused,l=t.selectValue,s=t.selectProps,u=t.id,d=t.isAppleDevice,c=s.ariaLiveMessages,y=s.getOptionLabel,p=s.inputValue,m=s.isMulti,v=s.isOptionDisabled,w=s.isSearchable,h=s.menuIsOpen,g=s.options,x=s.screenReaderStatus,S=s.tabSelectsValue,C=s.isLoading,T=s["aria-label"],E=s["aria-live"],_=b.useMemo(function(){return Z(Z({},iF),c||{})},[c]),$=b.useMemo(function(){var L="";if(n&&_.onChange){var O=n.option,D=n.options,P=n.removedValue,I=n.removedValues,z=n.value,B=function(fe){return Array.isArray(fe)?null:fe},N=P||O||B(z),U=N?y(N):"",H=D||I||void 0,q=H?H.map(y):[],K=Z({isDisabled:N&&v(N,l),label:U,labels:q},n);L=_.onChange(K)}return L},[n,_,v,l,y]),M=b.useMemo(function(){var L="",O=r||i,D=!!(r&&l&&l.includes(r));if(O&&_.onFocus){var P={focused:O,label:y(O),isDisabled:v(O,l),isSelected:D,options:o,context:O===r?"menu":"value",selectValue:l,isAppleDevice:d};L=_.onFocus(P)}return L},[r,i,y,v,_,o,l,d]),R=b.useMemo(function(){var L="";if(h&&g.length&&!C&&_.onFilter){var O=x({count:o.length});L=_.onFilter({inputValue:p,resultsMessage:O})}return L},[o,p,h,_,g,x,C]),A=(n==null?void 0:n.action)==="initial-input-focus",j=b.useMemo(function(){var L="";if(_.guidance){var O=i?"value":h?"menu":"input";L=_.guidance({"aria-label":T,context:O,isDisabled:r&&v(r,l),isMulti:m,isSearchable:w,tabSelectsValue:S,isInitialFocus:A})}return L},[T,r,i,m,v,w,h,_,l,S,A]),F=Q(b.Fragment,null,Q("span",{id:"aria-selection"},$),Q("span",{id:"aria-focused"},M),Q("span",{id:"aria-results"},R),Q("span",{id:"aria-guidance"},j));return Q(b.Fragment,null,Q(g1,{id:u},A&&F),Q(g1,{"aria-live":E,"aria-atomic":"false","aria-relevant":"additions text",role:"log"},a&&!A&&F))},aF=oF,Vp=[{base:"A",letters:"AⒶＡÀÁÂẦẤẪẨÃĀĂẰẮẴẲȦǠÄǞẢÅǺǍȀȂẠẬẶḀĄȺⱯ"},{base:"AA",letters:"Ꜳ"},{base:"AE",letters:"ÆǼǢ"},{base:"AO",letters:"Ꜵ"},{base:"AU",letters:"Ꜷ"},{base:"AV",letters:"ꜸꜺ"},{base:"AY",letters:"Ꜽ"},{base:"B",letters:"BⒷＢḂḄḆɃƂƁ"},{base:"C",letters:"CⒸＣĆĈĊČÇḈƇȻꜾ"},{base:"D",letters:"DⒹＤḊĎḌḐḒḎĐƋƊƉꝹ"},{base:"DZ",letters:"ǱǄ"},{base:"Dz",letters:"ǲǅ"},{base:"E",letters:"EⒺＥÈÉÊỀẾỄỂẼĒḔḖĔĖËẺĚȄȆẸỆȨḜĘḘḚƐƎ"},{base:"F",letters:"FⒻＦḞƑꝻ"},{base:"G",letters:"GⒼＧǴĜḠĞĠǦĢǤƓꞠꝽꝾ"},{base:"H",letters:"HⒽＨĤḢḦȞḤḨḪĦⱧⱵꞍ"},{base:"I",letters:"IⒾＩÌÍÎĨĪĬİÏḮỈǏȈȊỊĮḬƗ"},{base:"J",letters:"JⒿＪĴɈ"},{base:"K",letters:"KⓀＫḰǨḲĶḴƘⱩꝀꝂꝄꞢ"},{base:"L",letters:"LⓁＬĿĹĽḶḸĻḼḺŁȽⱢⱠꝈꝆꞀ"},{base:"LJ",letters:"Ǉ"},{base:"Lj",letters:"ǈ"},{base:"M",letters:"MⓂＭḾṀṂⱮƜ"},{base:"N",letters:"NⓃＮǸŃÑṄŇṆŅṊṈȠƝꞐꞤ"},{base:"NJ",letters:"Ǌ"},{base:"Nj",letters:"ǋ"},{base:"O",letters:"OⓄＯÒÓÔỒỐỖỔÕṌȬṎŌṐṒŎȮȰÖȪỎŐǑȌȎƠỜỚỠỞỢỌỘǪǬØǾƆƟꝊꝌ"},{base:"OI",letters:"Ƣ"},{base:"OO",letters:"Ꝏ"},{base:"OU",letters:"Ȣ"},{base:"P",letters:"PⓅＰṔṖƤⱣꝐꝒꝔ"},{base:"Q",letters:"QⓆＱꝖꝘɊ"},{base:"R",letters:"RⓇＲŔṘŘȐȒṚṜŖṞɌⱤꝚꞦꞂ"},{base:"S",letters:"SⓈＳẞŚṤŜṠŠṦṢṨȘŞⱾꞨꞄ"},{base:"T",letters:"TⓉＴṪŤṬȚŢṰṮŦƬƮȾꞆ"},{base:"TZ",letters:"Ꜩ"},{base:"U",letters:"UⓊＵÙÚÛŨṸŪṺŬÜǛǗǕǙỦŮŰǓȔȖƯỪỨỮỬỰỤṲŲṶṴɄ"},{base:"V",letters:"VⓋＶṼṾƲꝞɅ"},{base:"VY",letters:"Ꝡ"},{base:"W",letters:"WⓌＷẀẂŴẆẄẈⱲ"},{base:"X",letters:"XⓍＸẊẌ"},{base:"Y",letters:"YⓎＹỲÝŶỸȲẎŸỶỴƳɎỾ"},{base:"Z",letters:"ZⓏＺŹẐŻŽẒẔƵȤⱿⱫꝢ"},{base:"a",letters:"aⓐａẚàáâầấẫẩãāăằắẵẳȧǡäǟảåǻǎȁȃạậặḁąⱥɐ"},{base:"aa",letters:"ꜳ"},{base:"ae",letters:"æǽǣ"},{base:"ao",letters:"ꜵ"},{base:"au",letters:"ꜷ"},{base:"av",letters:"ꜹꜻ"},{base:"ay",letters:"ꜽ"},{base:"b",letters:"bⓑｂḃḅḇƀƃɓ"},{base:"c",letters:"cⓒｃćĉċčçḉƈȼꜿↄ"},{base:"d",letters:"dⓓｄḋďḍḑḓḏđƌɖɗꝺ"},{base:"dz",letters:"ǳǆ"},{base:"e",letters:"eⓔｅèéêềếễểẽēḕḗĕėëẻěȅȇẹệȩḝęḙḛɇɛǝ"},{base:"f",letters:"fⓕｆḟƒꝼ"},{base:"g",letters:"gⓖｇǵĝḡğġǧģǥɠꞡᵹꝿ"},{base:"h",letters:"hⓗｈĥḣḧȟḥḩḫẖħⱨⱶɥ"},{base:"hv",letters:"ƕ"},{base:"i",letters:"iⓘｉìíîĩīĭïḯỉǐȉȋịįḭɨı"},{base:"j",letters:"jⓙｊĵǰɉ"},{base:"k",letters:"kⓚｋḱǩḳķḵƙⱪꝁꝃꝅꞣ"},{base:"l",letters:"lⓛｌŀĺľḷḹļḽḻſłƚɫⱡꝉꞁꝇ"},{base:"lj",letters:"ǉ"},{base:"m",letters:"mⓜｍḿṁṃɱɯ"},{base:"n",letters:"nⓝｎǹńñṅňṇņṋṉƞɲŉꞑꞥ"},{base:"nj",letters:"ǌ"},{base:"o",letters:"oⓞｏòóôồốỗổõṍȭṏōṑṓŏȯȱöȫỏőǒȍȏơờớỡởợọộǫǭøǿɔꝋꝍɵ"},{base:"oi",letters:"ƣ"},{base:"ou",letters:"ȣ"},{base:"oo",letters:"ꝏ"},{base:"p",letters:"pⓟｐṕṗƥᵽꝑꝓꝕ"},{base:"q",letters:"qⓠｑɋꝗꝙ"},{base:"r",letters:"rⓡｒŕṙřȑȓṛṝŗṟɍɽꝛꞧꞃ"},{base:"s",letters:"sⓢｓßśṥŝṡšṧṣṩșşȿꞩꞅẛ"},{base:"t",letters:"tⓣｔṫẗťṭțţṱṯŧƭʈⱦꞇ"},{base:"tz",letters:"ꜩ"},{base:"u",letters:"uⓤｕùúûũṹūṻŭüǜǘǖǚủůűǔȕȗưừứữửựụṳųṷṵʉ"},{base:"v",letters:"vⓥｖṽṿʋꝟʌ"},{base:"vy",letters:"ꝡ"},{base:"w",letters:"wⓦｗẁẃŵẇẅẘẉⱳ"},{base:"x",letters:"xⓧｘẋẍ"},{base:"y",letters:"yⓨｙỳýŷỹȳẏÿỷẙỵƴɏỿ"},{base:"z",letters:"zⓩｚźẑżžẓẕƶȥɀⱬꝣ"}],sF=new RegExp("["+Vp.map(function(e){return e.letters}).join("")+"]","g"),n_={};for(var Wd=0;Wd<Vp.length;Wd++)for(var Gd=Vp[Wd],qd=0;qd<Gd.letters.length;qd++)n_[Gd.letters[qd]]=Gd.base;var r_=function(t){return t.replace(sF,function(n){return n_[n]})},lF=tF(r_),v1=function(t){return t.replace(/^\s+|\s+$/g,"")},uF=function(t){return"".concat(t.label," ").concat(t.value)},cF=function(t){return function(n,r){if(n.data.__isNew__)return!0;var i=Z({ignoreCase:!0,ignoreAccents:!0,stringify:uF,trim:!0,matchFrom:"any"},t),o=i.ignoreCase,a=i.ignoreAccents,l=i.stringify,s=i.trim,u=i.matchFrom,d=s?v1(r):r,c=s?v1(l(n)):l(n);return o&&(d=d.toLowerCase(),c=c.toLowerCase()),a&&(d=lF(d),c=r_(c)),u==="start"?c.substr(0,d.length)===d:c.indexOf(d)>-1}},dF=["innerRef"];function fF(e){var t=e.innerRef,n=tr(e,dF),r=FR(n,"onExited","in","enter","exit","appear");return Q("input",J({ref:t},r,{css:gm({label:"dummyInput",background:0,border:0,caretColor:"transparent",fontSize:"inherit",gridArea:"1 / 1 / 2 / 3",outline:0,padding:0,width:1,color:"transparent",left:-100,opacity:0,position:"relative",transform:"scale(.01)"},"","")}))}var pF=function(t){t.cancelable&&t.preventDefault(),t.stopPropagation()};function hF(e){var t=e.isEnabled,n=e.onBottomArrive,r=e.onBottomLeave,i=e.onTopArrive,o=e.onTopLeave,a=b.useRef(!1),l=b.useRef(!1),s=b.useRef(0),u=b.useRef(null),d=b.useCallback(function(w,h){if(u.current!==null){var g=u.current,x=g.scrollTop,S=g.scrollHeight,C=g.clientHeight,T=u.current,E=h>0,_=S-C-x,$=!1;_>h&&a.current&&(r&&r(w),a.current=!1),E&&l.current&&(o&&o(w),l.current=!1),E&&h>_?(n&&!a.current&&n(w),T.scrollTop=S,$=!0,a.current=!0):!E&&-h>x&&(i&&!l.current&&i(w),T.scrollTop=0,$=!0,l.current=!0),$&&pF(w)}},[n,r,i,o]),c=b.useCallback(function(w){d(w,w.deltaY)},[d]),y=b.useCallback(function(w){s.current=w.changedTouches[0].clientY},[]),p=b.useCallback(function(w){var h=s.current-w.changedTouches[0].clientY;d(w,h)},[d]),m=b.useCallback(function(w){if(w){var h=LR?{passive:!1}:!1;w.addEventListener("wheel",c,h),w.addEventListener("touchstart",y,h),w.addEventListener("touchmove",p,h)}},[p,y,c]),v=b.useCallback(function(w){w&&(w.removeEventListener("wheel",c,!1),w.removeEventListener("touchstart",y,!1),w.removeEventListener("touchmove",p,!1))},[p,y,c]);return b.useEffect(function(){if(t){var w=u.current;return m(w),function(){v(w)}}},[t,m,v]),function(w){u.current=w}}var y1=["boxSizing","height","overflow","paddingRight","position"],x1={boxSizing:"border-box",overflow:"hidden",position:"relative",height:"100%"};function b1(e){e.cancelable&&e.preventDefault()}function w1(e){e.stopPropagation()}function S1(){var e=this.scrollTop,t=this.scrollHeight,n=e+this.offsetHeight;e===0?this.scrollTop=1:n===t&&(this.scrollTop=e-1)}function _1(){return"ontouchstart"in window||navigator.maxTouchPoints}var C1=!!(typeof window<"u"&&window.document&&window.document.createElement),Fo=0,vi={capture:!1,passive:!1};function mF(e){var t=e.isEnabled,n=e.accountForScrollbars,r=n===void 0?!0:n,i=b.useRef({}),o=b.useRef(null),a=b.useCallback(function(s){if(C1){var u=document.body,d=u&&u.style;if(r&&y1.forEach(function(m){var v=d&&d[m];i.current[m]=v}),r&&Fo<1){var c=parseInt(i.current.paddingRight,10)||0,y=document.body?document.body.clientWidth:0,p=window.innerWidth-y+c||0;Object.keys(x1).forEach(function(m){var v=x1[m];d&&(d[m]=v)}),d&&(d.paddingRight="".concat(p,"px"))}u&&_1()&&(u.addEventListener("touchmove",b1,vi),s&&(s.addEventListener("touchstart",S1,vi),s.addEventListener("touchmove",w1,vi))),Fo+=1}},[r]),l=b.useCallback(function(s){if(C1){var u=document.body,d=u&&u.style;Fo=Math.max(Fo-1,0),r&&Fo<1&&y1.forEach(function(c){var y=i.current[c];d&&(d[c]=y)}),u&&_1()&&(u.removeEventListener("touchmove",b1,vi),s&&(s.removeEventListener("touchstart",S1,vi),s.removeEventListener("touchmove",w1,vi)))}},[r]);return b.useEffect(function(){if(t){var s=o.current;return a(s),function(){l(s)}}},[t,a,l]),function(s){o.current=s}}var gF=function(t){var n=t.target;return n.ownerDocument.activeElement&&n.ownerDocument.activeElement.blur()},vF={name:"1kfdb0e",styles:"position:fixed;left:0;bottom:0;right:0;top:0"};function yF(e){var t=e.children,n=e.lockEnabled,r=e.captureEnabled,i=r===void 0?!0:r,o=e.onBottomArrive,a=e.onBottomLeave,l=e.onTopArrive,s=e.onTopLeave,u=hF({isEnabled:i,onBottomArrive:o,onBottomLeave:a,onTopArrive:l,onTopLeave:s}),d=mF({isEnabled:n}),c=function(p){u(p),d(p)};return Q(b.Fragment,null,n&&Q("div",{onClick:gF,css:vF}),t(c))}var xF={name:"1a0ro4n-requiredInput",styles:"label:requiredInput;opacity:0;pointer-events:none;position:absolute;bottom:0;left:0;right:0;width:100%"},bF=function(t){var n=t.name,r=t.onFocus;return Q("input",{required:!0,name:n,tabIndex:-1,"aria-hidden":"true",onFocus:r,css:xF,value:"",onChange:function(){}})},wF=bF;function Gm(e){var t;return typeof window<"u"&&window.navigator!=null?e.test(((t=window.navigator.userAgentData)===null||t===void 0?void 0:t.platform)||window.navigator.platform):!1}function SF(){return Gm(/^iPhone/i)}function i_(){return Gm(/^Mac/i)}function _F(){return Gm(/^iPad/i)||i_()&&navigator.maxTouchPoints>1}function CF(){return SF()||_F()}function EF(){return i_()||CF()}var kF=function(t){return t.label},PF=function(t){return t.label},TF=function(t){return t.value},OF=function(t){return!!t.isDisabled},jF={clearIndicator:f8,container:t8,control:x8,dropdownIndicator:c8,group:_8,groupHeading:E8,indicatorsContainer:o8,indicatorSeparator:h8,input:O8,loadingIndicator:v8,loadingMessage:KR,menu:UR,menuList:qR,menuPortal:JR,multiValue:D8,multiValueLabel:L8,multiValueRemove:A8,noOptionsMessage:XR,option:V8,placeholder:W8,singleValue:Y8,valueContainer:r8},MF={primary:"#2684FF",primary75:"#4C9AFF",primary50:"#B2D4FF",primary25:"#DEEBFF",danger:"#DE350B",dangerLight:"#FFBDAD",neutral0:"hsl(0, 0%, 100%)",neutral5:"hsl(0, 0%, 95%)",neutral10:"hsl(0, 0%, 90%)",neutral20:"hsl(0, 0%, 80%)",neutral30:"hsl(0, 0%, 70%)",neutral40:"hsl(0, 0%, 60%)",neutral50:"hsl(0, 0%, 50%)",neutral60:"hsl(0, 0%, 40%)",neutral70:"hsl(0, 0%, 30%)",neutral80:"hsl(0, 0%, 20%)",neutral90:"hsl(0, 0%, 10%)"},$F=4,o_=4,IF=38,DF=o_*2,LF={baseUnit:o_,controlHeight:IF,menuGutter:DF},Yd={borderRadius:$F,colors:MF,spacing:LF},AF={"aria-live":"polite",backspaceRemovesValue:!0,blurInputOnSelect:p1(),captureMenuScroll:!p1(),classNames:{},closeMenuOnSelect:!0,closeMenuOnScroll:!1,components:{},controlShouldRenderValue:!0,escapeClearsValue:!1,filterOption:cF(),formatGroupLabel:kF,getOptionLabel:PF,getOptionValue:TF,isDisabled:!1,isLoading:!1,isMulti:!1,isRtl:!1,isSearchable:!0,isOptionDisabled:OF,loadingMessage:function(){return"Loading..."},maxMenuHeight:300,minMenuHeight:140,menuIsOpen:!1,menuPlacement:"bottom",menuPosition:"absolute",menuShouldBlockScroll:!1,menuShouldScrollIntoView:!IR(),noOptionsMessage:function(){return"No options"},openMenuOnFocus:!1,openMenuOnClick:!0,options:[],pageSize:5,placeholder:"Select...",screenReaderStatus:function(t){var n=t.count;return"".concat(n," result").concat(n!==1?"s":""," available")},styles:{},tabIndex:0,tabSelectsValue:!0,unstyled:!1};function E1(e,t,n,r){var i=l_(e,t,n),o=u_(e,t,n),a=s_(e,t),l=au(e,t);return{type:"option",data:t,isDisabled:i,isSelected:o,label:a,value:l,index:r}}function rl(e,t){return e.options.map(function(n,r){if("options"in n){var i=n.options.map(function(a,l){return E1(e,a,t,l)}).filter(function(a){return P1(e,a)});return i.length>0?{type:"group",data:n,options:i,index:r}:void 0}var o=E1(e,n,t,r);return P1(e,o)?o:void 0}).filter(AR)}function a_(e){return e.reduce(function(t,n){return n.type==="group"?t.push.apply(t,Bm(n.options.map(function(r){return r.data}))):t.push(n.data),t},[])}function k1(e,t){return e.reduce(function(n,r){return r.type==="group"?n.push.apply(n,Bm(r.options.map(function(i){return{data:i.data,id:"".concat(t,"-").concat(r.index,"-").concat(i.index)}}))):n.push({data:r.data,id:"".concat(t,"-").concat(r.index)}),n},[])}function RF(e,t){return a_(rl(e,t))}function P1(e,t){var n=e.inputValue,r=n===void 0?"":n,i=t.data,o=t.isSelected,a=t.label,l=t.value;return(!d_(e)||!o)&&c_(e,{label:a,value:l,data:i},r)}function FF(e,t){var n=e.focusedValue,r=e.selectValue,i=r.indexOf(n);if(i>-1){var o=t.indexOf(n);if(o>-1)return n;if(i<t.length)return t[i]}return null}function zF(e,t){var n=e.focusedOption;return n&&t.indexOf(n)>-1?n:t[0]}var Xd=function(t,n){var r,i=(r=t.find(function(o){return o.data===n}))===null||r===void 0?void 0:r.id;return i||null},s_=function(t,n){return t.getOptionLabel(n)},au=function(t,n){return t.getOptionValue(n)};function l_(e,t,n){return typeof e.isOptionDisabled=="function"?e.isOptionDisabled(t,n):!1}function u_(e,t,n){if(n.indexOf(t)>-1)return!0;if(typeof e.isOptionSelected=="function")return e.isOptionSelected(t,n);var r=au(e,t);return n.some(function(i){return au(e,i)===r})}function c_(e,t,n){return e.filterOption?e.filterOption(t,n):!0}var d_=function(t){var n=t.hideSelectedOptions,r=t.isMulti;return n===void 0?r:n},NF=1,f_=function(e){oR(n,e);var t=uR(n);function n(r){var i;if(rR(this,n),i=t.call(this,r),i.state={ariaSelection:null,focusedOption:null,focusedOptionId:null,focusableOptionsWithIds:[],focusedValue:null,inputIsHidden:!1,isFocused:!1,selectValue:[],clearFocusValueOnUpdate:!1,prevWasFocused:!1,inputIsHiddenAfterUpdate:void 0,prevProps:void 0,instancePrefix:"",isAppleDevice:!1},i.blockOptionHover=!1,i.isComposing=!1,i.commonProps=void 0,i.initialTouchX=0,i.initialTouchY=0,i.openAfterFocus=!1,i.scrollToFocusedOptionOnUpdate=!1,i.userIsDragging=void 0,i.controlRef=null,i.getControlRef=function(s){i.controlRef=s},i.focusedOptionRef=null,i.getFocusedOptionRef=function(s){i.focusedOptionRef=s},i.menuListRef=null,i.getMenuListRef=function(s){i.menuListRef=s},i.inputRef=null,i.getInputRef=function(s){i.inputRef=s},i.focus=i.focusInput,i.blur=i.blurInput,i.onChange=function(s,u){var d=i.props,c=d.onChange,y=d.name;u.name=y,i.ariaOnChange(s,u),c(s,u)},i.setValue=function(s,u,d){var c=i.props,y=c.closeMenuOnSelect,p=c.isMulti,m=c.inputValue;i.onInputChange("",{action:"set-value",prevInputValue:m}),y&&(i.setState({inputIsHiddenAfterUpdate:!p}),i.onMenuClose()),i.setState({clearFocusValueOnUpdate:!0}),i.onChange(s,{action:u,option:d})},i.selectOption=function(s){var u=i.props,d=u.blurInputOnSelect,c=u.isMulti,y=u.name,p=i.state.selectValue,m=c&&i.isOptionSelected(s,p),v=i.isOptionDisabled(s,p);if(m){var w=i.getOptionValue(s);i.setValue(p.filter(function(h){return i.getOptionValue(h)!==w}),"deselect-option",s)}else if(!v)c?i.setValue([].concat(Bm(p),[s]),"select-option",s):i.setValue(s,"select-option");else{i.ariaOnChange(s,{action:"select-option",option:s,name:y});return}d&&i.blurInput()},i.removeValue=function(s){var u=i.props.isMulti,d=i.state.selectValue,c=i.getOptionValue(s),y=d.filter(function(m){return i.getOptionValue(m)!==c}),p=Os(u,y,y[0]||null);i.onChange(p,{action:"remove-value",removedValue:s}),i.focusInput()},i.clearValue=function(){var s=i.state.selectValue;i.onChange(Os(i.props.isMulti,[],null),{action:"clear",removedValues:s})},i.popValue=function(){var s=i.props.isMulti,u=i.state.selectValue,d=u[u.length-1],c=u.slice(0,u.length-1),y=Os(s,c,c[0]||null);d&&i.onChange(y,{action:"pop-value",removedValue:d})},i.getFocusedOptionId=function(s){return Xd(i.state.focusableOptionsWithIds,s)},i.getFocusableOptionsWithIds=function(){return k1(rl(i.props,i.state.selectValue),i.getElementId("option"))},i.getValue=function(){return i.state.selectValue},i.cx=function(){for(var s=arguments.length,u=new Array(s),d=0;d<s;d++)u[d]=arguments[d];return TR.apply(void 0,[i.props.classNamePrefix].concat(u))},i.getOptionLabel=function(s){return s_(i.props,s)},i.getOptionValue=function(s){return au(i.props,s)},i.getStyles=function(s,u){var d=i.props.unstyled,c=jF[s](u,d);c.boxSizing="border-box";var y=i.props.styles[s];return y?y(c,u):c},i.getClassNames=function(s,u){var d,c;return(d=(c=i.props.classNames)[s])===null||d===void 0?void 0:d.call(c,u)},i.getElementId=function(s){return"".concat(i.state.instancePrefix,"-").concat(s)},i.getComponents=function(){return Z8(i.props)},i.buildCategorizedOptions=function(){return rl(i.props,i.state.selectValue)},i.getCategorizedOptions=function(){return i.props.menuIsOpen?i.buildCategorizedOptions():[]},i.buildFocusableOptions=function(){return a_(i.buildCategorizedOptions())},i.getFocusableOptions=function(){return i.props.menuIsOpen?i.buildFocusableOptions():[]},i.ariaOnChange=function(s,u){i.setState({ariaSelection:Z({value:s},u)})},i.onMenuMouseDown=function(s){s.button===0&&(s.stopPropagation(),s.preventDefault(),i.focusInput())},i.onMenuMouseMove=function(s){i.blockOptionHover=!1},i.onControlMouseDown=function(s){if(!s.defaultPrevented){var u=i.props.openMenuOnClick;i.state.isFocused?i.props.menuIsOpen?s.target.tagName!=="INPUT"&&s.target.tagName!=="TEXTAREA"&&i.onMenuClose():u&&i.openMenu("first"):(u&&(i.openAfterFocus=!0),i.focusInput()),s.target.tagName!=="INPUT"&&s.target.tagName!=="TEXTAREA"&&s.preventDefault()}},i.onDropdownIndicatorMouseDown=function(s){if(!(s&&s.type==="mousedown"&&s.button!==0)&&!i.props.isDisabled){var u=i.props,d=u.isMulti,c=u.menuIsOpen;i.focusInput(),c?(i.setState({inputIsHiddenAfterUpdate:!d}),i.onMenuClose()):i.openMenu("first"),s.preventDefault()}},i.onClearIndicatorMouseDown=function(s){s&&s.type==="mousedown"&&s.button!==0||(i.clearValue(),s.preventDefault(),i.openAfterFocus=!1,s.type==="touchend"?i.focusInput():setTimeout(function(){return i.focusInput()}))},i.onScroll=function(s){typeof i.props.closeMenuOnScroll=="boolean"?s.target instanceof HTMLElement&&Pc(s.target)&&i.props.onMenuClose():typeof i.props.closeMenuOnScroll=="function"&&i.props.closeMenuOnScroll(s)&&i.props.onMenuClose()},i.onCompositionStart=function(){i.isComposing=!0},i.onCompositionEnd=function(){i.isComposing=!1},i.onTouchStart=function(s){var u=s.touches,d=u&&u.item(0);d&&(i.initialTouchX=d.clientX,i.initialTouchY=d.clientY,i.userIsDragging=!1)},i.onTouchMove=function(s){var u=s.touches,d=u&&u.item(0);if(d){var c=Math.abs(d.clientX-i.initialTouchX),y=Math.abs(d.clientY-i.initialTouchY),p=5;i.userIsDragging=c>p||y>p}},i.onTouchEnd=function(s){i.userIsDragging||(i.controlRef&&!i.controlRef.contains(s.target)&&i.menuListRef&&!i.menuListRef.contains(s.target)&&i.blurInput(),i.initialTouchX=0,i.initialTouchY=0)},i.onControlTouchEnd=function(s){i.userIsDragging||i.onControlMouseDown(s)},i.onClearIndicatorTouchEnd=function(s){i.userIsDragging||i.onClearIndicatorMouseDown(s)},i.onDropdownIndicatorTouchEnd=function(s){i.userIsDragging||i.onDropdownIndicatorMouseDown(s)},i.handleInputChange=function(s){var u=i.props.inputValue,d=s.currentTarget.value;i.setState({inputIsHiddenAfterUpdate:!1}),i.onInputChange(d,{action:"input-change",prevInputValue:u}),i.props.menuIsOpen||i.onMenuOpen()},i.onInputFocus=function(s){i.props.onFocus&&i.props.onFocus(s),i.setState({inputIsHiddenAfterUpdate:!1,isFocused:!0}),(i.openAfterFocus||i.props.openMenuOnFocus)&&i.openMenu("first"),i.openAfterFocus=!1},i.onInputBlur=function(s){var u=i.props.inputValue;if(i.menuListRef&&i.menuListRef.contains(document.activeElement)){i.inputRef.focus();return}i.props.onBlur&&i.props.onBlur(s),i.onInputChange("",{action:"input-blur",prevInputValue:u}),i.onMenuClose(),i.setState({focusedValue:null,isFocused:!1})},i.onOptionHover=function(s){if(!(i.blockOptionHover||i.state.focusedOption===s)){var u=i.getFocusableOptions(),d=u.indexOf(s);i.setState({focusedOption:s,focusedOptionId:d>-1?i.getFocusedOptionId(s):null})}},i.shouldHideSelectedOptions=function(){return d_(i.props)},i.onValueInputFocus=function(s){s.preventDefault(),s.stopPropagation(),i.focus()},i.onKeyDown=function(s){var u=i.props,d=u.isMulti,c=u.backspaceRemovesValue,y=u.escapeClearsValue,p=u.inputValue,m=u.isClearable,v=u.isDisabled,w=u.menuIsOpen,h=u.onKeyDown,g=u.tabSelectsValue,x=u.openMenuOnFocus,S=i.state,C=S.focusedOption,T=S.focusedValue,E=S.selectValue;if(!v&&!(typeof h=="function"&&(h(s),s.defaultPrevented))){switch(i.blockOptionHover=!0,s.key){case"ArrowLeft":if(!d||p)return;i.focusValue("previous");break;case"ArrowRight":if(!d||p)return;i.focusValue("next");break;case"Delete":case"Backspace":if(p)return;if(T)i.removeValue(T);else{if(!c)return;d?i.popValue():m&&i.clearValue()}break;case"Tab":if(i.isComposing||s.shiftKey||!w||!g||!C||x&&i.isOptionSelected(C,E))return;i.selectOption(C);break;case"Enter":if(s.keyCode===229)break;if(w){if(!C||i.isComposing)return;i.selectOption(C);break}return;case"Escape":w?(i.setState({inputIsHiddenAfterUpdate:!1}),i.onInputChange("",{action:"menu-close",prevInputValue:p}),i.onMenuClose()):m&&y&&i.clearValue();break;case" ":if(p)return;if(!w){i.openMenu("first");break}if(!C)return;i.selectOption(C);break;case"ArrowUp":w?i.focusOption("up"):i.openMenu("last");break;case"ArrowDown":w?i.focusOption("down"):i.openMenu("first");break;case"PageUp":if(!w)return;i.focusOption("pageup");break;case"PageDown":if(!w)return;i.focusOption("pagedown");break;case"Home":if(!w)return;i.focusOption("first");break;case"End":if(!w)return;i.focusOption("last");break;default:return}s.preventDefault()}},i.state.instancePrefix="react-select-"+(i.props.instanceId||++NF),i.state.selectValue=d1(r.value),r.menuIsOpen&&i.state.selectValue.length){var o=i.getFocusableOptionsWithIds(),a=i.buildFocusableOptions(),l=a.indexOf(i.state.selectValue[0]);i.state.focusableOptionsWithIds=o,i.state.focusedOption=a[l],i.state.focusedOptionId=Xd(o,a[l])}return i}return iR(n,[{key:"componentDidMount",value:function(){this.startListeningComposition(),this.startListeningToTouch(),this.props.closeMenuOnScroll&&document&&document.addEventListener&&document.addEventListener("scroll",this.onScroll,!0),this.props.autoFocus&&this.focusInput(),this.props.menuIsOpen&&this.state.focusedOption&&this.menuListRef&&this.focusedOptionRef&&f1(this.menuListRef,this.focusedOptionRef),EF()&&this.setState({isAppleDevice:!0})}},{key:"componentDidUpdate",value:function(i){var o=this.props,a=o.isDisabled,l=o.menuIsOpen,s=this.state.isFocused;(s&&!a&&i.isDisabled||s&&l&&!i.menuIsOpen)&&this.focusInput(),s&&a&&!i.isDisabled?this.setState({isFocused:!1},this.onMenuClose):!s&&!a&&i.isDisabled&&this.inputRef===document.activeElement&&this.setState({isFocused:!0}),this.menuListRef&&this.focusedOptionRef&&this.scrollToFocusedOptionOnUpdate&&(f1(this.menuListRef,this.focusedOptionRef),this.scrollToFocusedOptionOnUpdate=!1)}},{key:"componentWillUnmount",value:function(){this.stopListeningComposition(),this.stopListeningToTouch(),document.removeEventListener("scroll",this.onScroll,!0)}},{key:"onMenuOpen",value:function(){this.props.onMenuOpen()}},{key:"onMenuClose",value:function(){this.onInputChange("",{action:"menu-close",prevInputValue:this.props.inputValue}),this.props.onMenuClose()}},{key:"onInputChange",value:function(i,o){this.props.onInputChange(i,o)}},{key:"focusInput",value:function(){this.inputRef&&this.inputRef.focus()}},{key:"blurInput",value:function(){this.inputRef&&this.inputRef.blur()}},{key:"openMenu",value:function(i){var o=this,a=this.state,l=a.selectValue,s=a.isFocused,u=this.buildFocusableOptions(),d=i==="first"?0:u.length-1;if(!this.props.isMulti){var c=u.indexOf(l[0]);c>-1&&(d=c)}this.scrollToFocusedOptionOnUpdate=!(s&&this.menuListRef),this.setState({inputIsHiddenAfterUpdate:!1,focusedValue:null,focusedOption:u[d],focusedOptionId:this.getFocusedOptionId(u[d])},function(){return o.onMenuOpen()})}},{key:"focusValue",value:function(i){var o=this.state,a=o.selectValue,l=o.focusedValue;if(this.props.isMulti){this.setState({focusedOption:null});var s=a.indexOf(l);l||(s=-1);var u=a.length-1,d=-1;if(a.length){switch(i){case"previous":s===0?d=0:s===-1?d=u:d=s-1;break;case"next":s>-1&&s<u&&(d=s+1);break}this.setState({inputIsHidden:d!==-1,focusedValue:a[d]})}}}},{key:"focusOption",value:function(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"first",o=this.props.pageSize,a=this.state.focusedOption,l=this.getFocusableOptions();if(l.length){var s=0,u=l.indexOf(a);a||(u=-1),i==="up"?s=u>0?u-1:l.length-1:i==="down"?s=(u+1)%l.length:i==="pageup"?(s=u-o,s<0&&(s=0)):i==="pagedown"?(s=u+o,s>l.length-1&&(s=l.length-1)):i==="last"&&(s=l.length-1),this.scrollToFocusedOptionOnUpdate=!0,this.setState({focusedOption:l[s],focusedValue:null,focusedOptionId:this.getFocusedOptionId(l[s])})}}},{key:"getTheme",value:function(){return this.props.theme?typeof this.props.theme=="function"?this.props.theme(Yd):Z(Z({},Yd),this.props.theme):Yd}},{key:"getCommonProps",value:function(){var i=this.clearValue,o=this.cx,a=this.getStyles,l=this.getClassNames,s=this.getValue,u=this.selectOption,d=this.setValue,c=this.props,y=c.isMulti,p=c.isRtl,m=c.options,v=this.hasValue();return{clearValue:i,cx:o,getStyles:a,getClassNames:l,getValue:s,hasValue:v,isMulti:y,isRtl:p,options:m,selectOption:u,selectProps:c,setValue:d,theme:this.getTheme()}}},{key:"hasValue",value:function(){var i=this.state.selectValue;return i.length>0}},{key:"hasOptions",value:function(){return!!this.getFocusableOptions().length}},{key:"isClearable",value:function(){var i=this.props,o=i.isClearable,a=i.isMulti;return o===void 0?a:o}},{key:"isOptionDisabled",value:function(i,o){return l_(this.props,i,o)}},{key:"isOptionSelected",value:function(i,o){return u_(this.props,i,o)}},{key:"filterOption",value:function(i,o){return c_(this.props,i,o)}},{key:"formatOptionLabel",value:function(i,o){if(typeof this.props.formatOptionLabel=="function"){var a=this.props.inputValue,l=this.state.selectValue;return this.props.formatOptionLabel(i,{context:o,inputValue:a,selectValue:l})}else return this.getOptionLabel(i)}},{key:"formatGroupLabel",value:function(i){return this.props.formatGroupLabel(i)}},{key:"startListeningComposition",value:function(){document&&document.addEventListener&&(document.addEventListener("compositionstart",this.onCompositionStart,!1),document.addEventListener("compositionend",this.onCompositionEnd,!1))}},{key:"stopListeningComposition",value:function(){document&&document.removeEventListener&&(document.removeEventListener("compositionstart",this.onCompositionStart),document.removeEventListener("compositionend",this.onCompositionEnd))}},{key:"startListeningToTouch",value:function(){document&&document.addEventListener&&(document.addEventListener("touchstart",this.onTouchStart,!1),document.addEventListener("touchmove",this.onTouchMove,!1),document.addEventListener("touchend",this.onTouchEnd,!1))}},{key:"stopListeningToTouch",value:function(){document&&document.removeEventListener&&(document.removeEventListener("touchstart",this.onTouchStart),document.removeEventListener("touchmove",this.onTouchMove),document.removeEventListener("touchend",this.onTouchEnd))}},{key:"renderInput",value:function(){var i=this.props,o=i.isDisabled,a=i.isSearchable,l=i.inputId,s=i.inputValue,u=i.tabIndex,d=i.form,c=i.menuIsOpen,y=i.required,p=this.getComponents(),m=p.Input,v=this.state,w=v.inputIsHidden,h=v.ariaSelection,g=this.commonProps,x=l||this.getElementId("input"),S=Z(Z(Z({"aria-autocomplete":"list","aria-expanded":c,"aria-haspopup":!0,"aria-errormessage":this.props["aria-errormessage"],"aria-invalid":this.props["aria-invalid"],"aria-label":this.props["aria-label"],"aria-labelledby":this.props["aria-labelledby"],"aria-required":y,role:"combobox","aria-activedescendant":this.state.isAppleDevice?void 0:this.state.focusedOptionId||""},c&&{"aria-controls":this.getElementId("listbox")}),!a&&{"aria-readonly":!0}),this.hasValue()?(h==null?void 0:h.action)==="initial-input-focus"&&{"aria-describedby":this.getElementId("live-region")}:{"aria-describedby":this.getElementId("placeholder")});return a?b.createElement(m,J({},g,{autoCapitalize:"none",autoComplete:"off",autoCorrect:"off",id:x,innerRef:this.getInputRef,isDisabled:o,isHidden:w,onBlur:this.onInputBlur,onChange:this.handleInputChange,onFocus:this.onInputFocus,spellCheck:"false",tabIndex:u,form:d,type:"text",value:s},S)):b.createElement(fF,J({id:x,innerRef:this.getInputRef,onBlur:this.onInputBlur,onChange:iu,onFocus:this.onInputFocus,disabled:o,tabIndex:u,inputMode:"none",form:d,value:""},S))}},{key:"renderPlaceholderOrValue",value:function(){var i=this,o=this.getComponents(),a=o.MultiValue,l=o.MultiValueContainer,s=o.MultiValueLabel,u=o.MultiValueRemove,d=o.SingleValue,c=o.Placeholder,y=this.commonProps,p=this.props,m=p.controlShouldRenderValue,v=p.isDisabled,w=p.isMulti,h=p.inputValue,g=p.placeholder,x=this.state,S=x.selectValue,C=x.focusedValue,T=x.isFocused;if(!this.hasValue()||!m)return h?null:b.createElement(c,J({},y,{key:"placeholder",isDisabled:v,isFocused:T,innerProps:{id:this.getElementId("placeholder")}}),g);if(w)return S.map(function(_,$){var M=_===C,R="".concat(i.getOptionLabel(_),"-").concat(i.getOptionValue(_));return b.createElement(a,J({},y,{components:{Container:l,Label:s,Remove:u},isFocused:M,isDisabled:v,key:R,index:$,removeProps:{onClick:function(){return i.removeValue(_)},onTouchEnd:function(){return i.removeValue(_)},onMouseDown:function(j){j.preventDefault()}},data:_}),i.formatOptionLabel(_,"value"))});if(h)return null;var E=S[0];return b.createElement(d,J({},y,{data:E,isDisabled:v}),this.formatOptionLabel(E,"value"))}},{key:"renderClearIndicator",value:function(){var i=this.getComponents(),o=i.ClearIndicator,a=this.commonProps,l=this.props,s=l.isDisabled,u=l.isLoading,d=this.state.isFocused;if(!this.isClearable()||!o||s||!this.hasValue()||u)return null;var c={onMouseDown:this.onClearIndicatorMouseDown,onTouchEnd:this.onClearIndicatorTouchEnd,"aria-hidden":"true"};return b.createElement(o,J({},a,{innerProps:c,isFocused:d}))}},{key:"renderLoadingIndicator",value:function(){var i=this.getComponents(),o=i.LoadingIndicator,a=this.commonProps,l=this.props,s=l.isDisabled,u=l.isLoading,d=this.state.isFocused;if(!o||!u)return null;var c={"aria-hidden":"true"};return b.createElement(o,J({},a,{innerProps:c,isDisabled:s,isFocused:d}))}},{key:"renderIndicatorSeparator",value:function(){var i=this.getComponents(),o=i.DropdownIndicator,a=i.IndicatorSeparator;if(!o||!a)return null;var l=this.commonProps,s=this.props.isDisabled,u=this.state.isFocused;return b.createElement(a,J({},l,{isDisabled:s,isFocused:u}))}},{key:"renderDropdownIndicator",value:function(){var i=this.getComponents(),o=i.DropdownIndicator;if(!o)return null;var a=this.commonProps,l=this.props.isDisabled,s=this.state.isFocused,u={onMouseDown:this.onDropdownIndicatorMouseDown,onTouchEnd:this.onDropdownIndicatorTouchEnd,"aria-hidden":"true"};return b.createElement(o,J({},a,{innerProps:u,isDisabled:l,isFocused:s}))}},{key:"renderMenu",value:function(){var i=this,o=this.getComponents(),a=o.Group,l=o.GroupHeading,s=o.Menu,u=o.MenuList,d=o.MenuPortal,c=o.LoadingMessage,y=o.NoOptionsMessage,p=o.Option,m=this.commonProps,v=this.state.focusedOption,w=this.props,h=w.captureMenuScroll,g=w.inputValue,x=w.isLoading,S=w.loadingMessage,C=w.minMenuHeight,T=w.maxMenuHeight,E=w.menuIsOpen,_=w.menuPlacement,$=w.menuPosition,M=w.menuPortalTarget,R=w.menuShouldBlockScroll,A=w.menuShouldScrollIntoView,j=w.noOptionsMessage,F=w.onMenuScrollToTop,L=w.onMenuScrollToBottom;if(!E)return null;var O=function(U,H){var q=U.type,K=U.data,ee=U.isDisabled,fe=U.isSelected,be=U.label,ie=U.value,Me=v===K,Be=ee?void 0:function(){return i.onOptionHover(K)},Ve=ee?void 0:function(){return i.selectOption(K)},li="".concat(i.getElementId("option"),"-").concat(H),yt={id:li,onClick:Ve,onMouseMove:Be,onMouseOver:Be,tabIndex:-1,role:"option","aria-selected":i.state.isAppleDevice?void 0:fe};return b.createElement(p,J({},m,{innerProps:yt,data:K,isDisabled:ee,isSelected:fe,key:li,label:be,type:q,value:ie,isFocused:Me,innerRef:Me?i.getFocusedOptionRef:void 0}),i.formatOptionLabel(U.data,"menu"))},D;if(this.hasOptions())D=this.getCategorizedOptions().map(function(N){if(N.type==="group"){var U=N.data,H=N.options,q=N.index,K="".concat(i.getElementId("group"),"-").concat(q),ee="".concat(K,"-heading");return b.createElement(a,J({},m,{key:K,data:U,options:H,Heading:l,headingProps:{id:ee,data:N.data},label:i.formatGroupLabel(N.data)}),N.options.map(function(fe){return O(fe,"".concat(q,"-").concat(fe.index))}))}else if(N.type==="option")return O(N,"".concat(N.index))});else if(x){var P=S({inputValue:g});if(P===null)return null;D=b.createElement(c,m,P)}else{var I=j({inputValue:g});if(I===null)return null;D=b.createElement(y,m,I)}var z={minMenuHeight:C,maxMenuHeight:T,menuPlacement:_,menuPosition:$,menuShouldScrollIntoView:A},B=b.createElement(HR,J({},m,z),function(N){var U=N.ref,H=N.placerProps,q=H.placement,K=H.maxHeight;return b.createElement(s,J({},m,z,{innerRef:U,innerProps:{onMouseDown:i.onMenuMouseDown,onMouseMove:i.onMenuMouseMove},isLoading:x,placement:q}),b.createElement(yF,{captureEnabled:h,onTopArrive:F,onBottomArrive:L,lockEnabled:R},function(ee){return b.createElement(u,J({},m,{innerRef:function(be){i.getMenuListRef(be),ee(be)},innerProps:{role:"listbox","aria-multiselectable":m.isMulti,id:i.getElementId("listbox")},isLoading:x,maxHeight:K,focusedOption:v}),D)}))});return M||$==="fixed"?b.createElement(d,J({},m,{appendTo:M,controlElement:this.controlRef,menuPlacement:_,menuPosition:$}),B):B}},{key:"renderFormField",value:function(){var i=this,o=this.props,a=o.delimiter,l=o.isDisabled,s=o.isMulti,u=o.name,d=o.required,c=this.state.selectValue;if(d&&!this.hasValue()&&!l)return b.createElement(wF,{name:u,onFocus:this.onValueInputFocus});if(!(!u||l))if(s)if(a){var y=c.map(function(v){return i.getOptionValue(v)}).join(a);return b.createElement("input",{name:u,type:"hidden",value:y})}else{var p=c.length>0?c.map(function(v,w){return b.createElement("input",{key:"i-".concat(w),name:u,type:"hidden",value:i.getOptionValue(v)})}):b.createElement("input",{name:u,type:"hidden",value:""});return b.createElement("div",null,p)}else{var m=c[0]?this.getOptionValue(c[0]):"";return b.createElement("input",{name:u,type:"hidden",value:m})}}},{key:"renderLiveRegion",value:function(){var i=this.commonProps,o=this.state,a=o.ariaSelection,l=o.focusedOption,s=o.focusedValue,u=o.isFocused,d=o.selectValue,c=this.getFocusableOptions();return b.createElement(aF,J({},i,{id:this.getElementId("live-region"),ariaSelection:a,focusedOption:l,focusedValue:s,isFocused:u,selectValue:d,focusableOptions:c,isAppleDevice:this.state.isAppleDevice}))}},{key:"render",value:function(){var i=this.getComponents(),o=i.Control,a=i.IndicatorsContainer,l=i.SelectContainer,s=i.ValueContainer,u=this.props,d=u.className,c=u.id,y=u.isDisabled,p=u.menuIsOpen,m=this.state.isFocused,v=this.commonProps=this.getCommonProps();return b.createElement(l,J({},v,{className:d,innerProps:{id:c,onKeyDown:this.onKeyDown},isDisabled:y,isFocused:m}),this.renderLiveRegion(),b.createElement(o,J({},v,{innerRef:this.getControlRef,innerProps:{onMouseDown:this.onControlMouseDown,onTouchEnd:this.onControlTouchEnd},isDisabled:y,isFocused:m,menuIsOpen:p}),b.createElement(s,J({},v,{isDisabled:y}),this.renderPlaceholderOrValue(),this.renderInput()),b.createElement(a,J({},v,{isDisabled:y}),this.renderClearIndicator(),this.renderLoadingIndicator(),this.renderIndicatorSeparator(),this.renderDropdownIndicator())),this.renderMenu(),this.renderFormField())}}],[{key:"getDerivedStateFromProps",value:function(i,o){var a=o.prevProps,l=o.clearFocusValueOnUpdate,s=o.inputIsHiddenAfterUpdate,u=o.ariaSelection,d=o.isFocused,c=o.prevWasFocused,y=o.instancePrefix,p=i.options,m=i.value,v=i.menuIsOpen,w=i.inputValue,h=i.isMulti,g=d1(m),x={};if(a&&(m!==a.value||p!==a.options||v!==a.menuIsOpen||w!==a.inputValue)){var S=v?RF(i,g):[],C=v?k1(rl(i,g),"".concat(y,"-option")):[],T=l?FF(o,g):null,E=zF(o,S),_=Xd(C,E);x={selectValue:g,focusedOption:E,focusedOptionId:_,focusableOptionsWithIds:C,focusedValue:T,clearFocusValueOnUpdate:!1}}var $=s!=null&&i!==a?{inputIsHidden:s,inputIsHiddenAfterUpdate:void 0}:{},M=u,R=d&&c;return d&&!R&&(M={value:Os(h,g,g[0]||null),options:g,action:"initial-input-focus"},R=!c),(u==null?void 0:u.action)==="initial-input-focus"&&(M=null),Z(Z(Z({},x),$),{},{prevProps:i,ariaSelection:M,prevWasFocused:R})}}]),n}(b.Component);f_.defaultProps=AF;var BF=b.forwardRef(function(e,t){var n=nR(e);return b.createElement(f_,J({ref:t},n))}),Tc=BF;const VF=k.div`
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
`,UF=k.label`
  font-size: 14px;
  color: #666;
  margin-bottom: 5px;
`,HF=({cityOptions:e,selectedCity:t,onChange:n,onInputChange:r})=>f.jsxs(VF,{children:[f.jsx(UF,{children:"Місто"}),f.jsx(Tc,{options:e,onInputChange:r,onChange:n,placeholder:"Почніть вводити місто...",value:t,noOptionsMessage:()=>"Введіть назву міста"})]}),WF=k.div`
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
`,GF=k.label`
  font-size: 14px;
  color: #666;
  margin-bottom: 5px;
`,qF=({options:e=[],value:t,onChange:n,selectedCity:r})=>f.jsxs(WF,{children:[f.jsx(GF,{children:"Спосіб доставки"}),f.jsx(Tc,{options:e,placeholder:"Оберіть спосіб доставки...",isDisabled:!r,value:e.find(i=>i.value===t)||null,onChange:i=>n(i.value)})]}),T1=k.div`
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
`,O1=k.label`
  font-size: 14px;
  color: #666;
  margin-bottom: 5px;
`,YF=({deliveryMethod:e,officeOptions:t,selectedOffice:n,selectedUkrOffice:r,setSelectedOffice:i,setSelectedUkrOffice:o})=>e==="nova"?f.jsxs(T1,{children:[f.jsx(O1,{children:"Відділення Нової пошти"}),f.jsx(Tc,{options:t,onChange:a=>i(a),value:n,placeholder:"Оберіть відділення..."})]}):e==="ukr"?f.jsxs(T1,{children:[f.jsx(O1,{children:"Адреса доставки (Укрпошта)"}),f.jsx("input",{type:"text",value:r,onChange:a=>o(a.target.value),placeholder:"Наприклад:  вул. Шевченка, 10, індекс 01001",style:{padding:"8px 12px",border:"1px solid #c6c5c5",borderRadius:"4px",outline:"none"}})]}):null,XF=k.div`
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
`;const KF=k.button`
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
`,QF=k.ul`
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
`,ZF=k.li`
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
`,JF=k.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 6px;
  border: 1px solid #eee;
  background-color: #f9f9f9;
`,ez=k.div`
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
`,tz=k.div`
  text-align: center;
  width: 100px;
 
`,nz=k.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 2px;
`,rz=k.span`
  font-size: 18px;
  font-weight: 600;
  color: ${({$discount:e})=>"#111"};
`,iz=k.span`
  font-size: 13px;
  color: #999;
  text-decoration: line-through;
`,oz=k.span`
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
`,az=({cartItems:e,totalAmount:t,totalQuantity:n,isFormValid:r,handleSubmit:i})=>f.jsxs(XF,{children:[f.jsx("h3",{children:"Ваше замовлення"}),f.jsx(QF,{children:e.map((o,a)=>{var c,y;const l=o.new_price&&o.new_price<o.price,s=l?o.new_price:o.price,u=l?Math.round((o.price-o.new_price)/o.price*100):0,d=s*(o.quantity||1);return f.jsxs(ZF,{children:[f.jsx(JF,{src:((y=(c=o.images)==null?void 0:c[0])==null?void 0:y.url)||no,alt:o.name}),f.jsxs(ez,{children:[f.jsx("p",{className:"item-name",children:o.name}),f.jsxs("p",{className:"item-details",children:[o.quantity," шт. × ",o.price," грн"]})]}),f.jsx(tz,{children:f.jsxs(nz,{children:[f.jsxs(rz,{$discount:l,children:[d.toLocaleString()," грн"]}),l&&f.jsxs(f.Fragment,{children:[f.jsxs(iz,{children:[(o.price*(o.quantity||1)).toLocaleString()," грн"]}),f.jsxs(oz,{children:["-",u,"%"]})]})]})})]},`${o.id}-${a}`)})}),f.jsxs("div",{className:"summary-row",children:[f.jsxs("span",{children:["Товари (",n,")"]}),f.jsxs("span",{children:[t," грн"]})]}),f.jsxs("div",{className:"summary-row",children:[f.jsx("span",{children:"Доставка"}),f.jsx("span",{children:"За тарифами перевізника"})]}),f.jsx("hr",{}),f.jsxs("div",{className:"total",children:[f.jsx("span",{children:"Всього до сплати:"}),f.jsxs("span",{children:[t," грн"]})]}),f.jsx(KF,{type:"submit",disabled:!r,onClick:i,style:{opacity:r?1:.5,cursor:r?"pointer":"not-allowed"},children:"Підтвердити замовлення"}),!r&&f.jsx("p",{style:{color:"#888",fontSize:"12px",marginTop:"10px",textAlign:"center"},children:"Заповніть всі поля правильно, щоб продовжити"})]});var p_={exports:{}};function sz(e){return e&&typeof e=="object"&&"default"in e?e.default:e}var Kd=sz(b),lz=Eu;function uz(e,t){for(var n=Object.getOwnPropertyNames(t),r=0;r<n.length;r++){var i=n[r],o=Object.getOwnPropertyDescriptor(t,i);o&&o.configurable&&e[i]===void 0&&Object.defineProperty(e,i,o)}return e}function Up(){return(Up=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function cz(e,t){e.prototype=Object.create(t.prototype),uz(e.prototype.constructor=e,t)}function dz(e,t){if(e==null)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],0<=t.indexOf(n)||(i[n]=e[n]);return i}function yi(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var fz=function(e,t,n,r,i,o,a,l){if(!e){var s;if(t===void 0)s=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var u=[n,r,i,o,a,l],d=0;(s=new Error(t.replace(/%s/g,function(){return u[d++]}))).name="Invariant Violation"}throw s.framesToPop=1,s}},j1=fz;function M1(e,t,n){if("selectionStart"in e&&"selectionEnd"in e)e.selectionStart=t,e.selectionEnd=n;else{var r=e.createTextRange();r.collapse(!0),r.moveStart("character",t),r.moveEnd("character",n-t),r.select()}}function pz(e){var t=0,n=0;if("selectionStart"in e&&"selectionEnd"in e)t=e.selectionStart,n=e.selectionEnd;else{var r=document.selection.createRange();r.parentElement()===e&&(t=-r.moveStart("character",-e.value.length),n=-r.moveEnd("character",-e.value.length))}return{start:t,end:n,length:n-t}}var hz={9:"[0-9]",a:"[A-Za-z]","*":"[A-Za-z0-9]"},mz="_";function $1(e,t,n){var r="",i="",o=null,a=[];if(t===void 0&&(t=mz),n==null&&(n=hz),!e||typeof e!="string")return{maskChar:t,formatChars:n,mask:null,prefix:null,lastEditablePosition:null,permanents:[]};var l=!1;return e.split("").forEach(function(s){l=!l&&s==="\\"||(l||!n[s]?(a.push(r.length),r.length===a.length-1&&(i+=s)):o=r.length+1,r+=s,!1)}),{maskChar:t,formatChars:n,prefix:i,mask:r,lastEditablePosition:o,permanents:a}}function Rt(e,t){return e.permanents.indexOf(t)!==-1}function Oc(e,t,n){var r=e.mask,i=e.formatChars;if(!n)return!1;if(Rt(e,t))return r[t]===n;var o=i[r[t]];return new RegExp(o).test(n)}function I1(e,t){return t.split("").every(function(n,r){return Rt(e,r)||!Oc(e,r,n)})}function qo(e,t){var n=e.maskChar,r=e.prefix;if(!n){for(;t.length>r.length&&Rt(e,t.length-1);)t=t.slice(0,t.length-1);return t.length}for(var i=r.length,o=t.length;o>=r.length;o--){var a=t[o];if(!Rt(e,o)&&Oc(e,o,a)){i=o+1;break}}return i}function h_(e,t){return qo(e,t)===e.mask.length}function Fn(e,t){var n=e.maskChar,r=e.mask,i=e.prefix;if(!n){for((t=Hp(e,"",t,0)).length<i.length&&(t=i);t.length<r.length&&Rt(e,t.length);)t+=r[t.length];return t}if(t)return Hp(e,Fn(e,""),t,0);for(var o=0;o<r.length;o++)Rt(e,o)?t+=r[o]:t+=n;return t}function gz(e,t,n,r){var i=n+r,o=e.maskChar,a=e.mask,l=e.prefix,s=t.split("");if(o)return s.map(function(d,c){return c<n||i<=c?d:Rt(e,c)?a[c]:o}).join("");for(var u=i;u<s.length;u++)Rt(e,u)&&(s[u]="");return n=Math.max(l.length,n),s.splice(n,i-n),t=s.join(""),Fn(e,t)}function Hp(e,t,n,r){var i=e.mask,o=e.maskChar,a=e.prefix,l=n.split(""),s=h_(e,t);return!o&&r>t.length&&(t+=i.slice(t.length,r)),l.every(function(u){for(;p=u,Rt(e,y=r)&&p!==i[y];){if(r>=t.length&&(t+=i[r]),d=u,c=r,o&&Rt(e,c)&&d===o)return!0;if(++r>=i.length)return!1}var d,c,y,p;return!Oc(e,r,u)&&u!==o||(r<t.length?t=o||s||r<a.length?t.slice(0,r)+u+t.slice(r+1):(t=t.slice(0,r)+u+t.slice(r),Fn(e,t)):o||(t+=u),++r<i.length)}),t}function vz(e,t,n,r){var i=e.mask,o=e.maskChar,a=n.split(""),l=r;return a.every(function(s){for(;d=s,Rt(e,u=r)&&d!==i[u];)if(++r>=i.length)return!1;var u,d;return(Oc(e,r,s)||s===o)&&r++,r<i.length}),r-l}function yz(e,t){for(var n=t;0<=n;--n)if(!Rt(e,n))return n;return null}function aa(e,t){for(var n=e.mask,r=t;r<n.length;++r)if(!Rt(e,r))return r;return null}function Qd(e){return e||e===0?e+"":""}function xz(e,t,n,r,i){var o=e.mask,a=e.prefix,l=e.lastEditablePosition,s=t,u="",d=0,c=0,y=Math.min(i.start,n.start);return n.end>i.start?c=(d=vz(e,r,u=s.slice(i.start,n.end),y))?i.length:0:s.length<r.length&&(c=r.length-s.length),s=r,c&&(c===1&&!i.length&&(y=i.start===n.start?aa(e,n.start):yz(e,n.start)),s=gz(e,s,y,c)),s=Hp(e,s,u,y),(y+=d)>=o.length?y=o.length:y<a.length&&!d?y=a.length:y>=a.length&&y<l&&d&&(y=aa(e,y)),u||(u=null),{value:s=Fn(e,s),enteredString:u,selection:{start:y,end:y}}}function bz(){var e=new RegExp("windows","i"),t=new RegExp("phone","i"),n=navigator.userAgent;return e.test(n)&&t.test(n)}function xt(e){return typeof e=="function"}function wz(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame}function m_(){return window.cancelAnimationFrame||window.webkitCancelRequestAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame}function D1(e){return(m_()?wz():function(){return setTimeout(e,1e3/60)})(e)}function Zd(e){(m_()||clearTimeout)(e)}var Sz=function(e){function t(r){var i=e.call(this,r)||this;i.focused=!1,i.mounted=!1,i.previousSelection=null,i.selectionDeferId=null,i.saveSelectionLoopDeferId=null,i.saveSelectionLoop=function(){i.previousSelection=i.getSelection(),i.saveSelectionLoopDeferId=D1(i.saveSelectionLoop)},i.runSaveSelectionLoop=function(){i.saveSelectionLoopDeferId===null&&i.saveSelectionLoop()},i.stopSaveSelectionLoop=function(){i.saveSelectionLoopDeferId!==null&&(Zd(i.saveSelectionLoopDeferId),i.saveSelectionLoopDeferId=null,i.previousSelection=null)},i.getInputDOMNode=function(){if(!i.mounted)return null;var m=lz.findDOMNode(yi(yi(i))),v=typeof window<"u"&&m instanceof window.Element;if(m&&!v)return null;if(m.nodeName!=="INPUT"&&(m=m.querySelector("input")),!m)throw new Error("react-input-mask: inputComponent doesn't contain input node");return m},i.getInputValue=function(){var m=i.getInputDOMNode();return m?m.value:null},i.setInputValue=function(m){var v=i.getInputDOMNode();v&&(i.value=m,v.value=m)},i.setCursorToEnd=function(){var m=qo(i.maskOptions,i.value),v=aa(i.maskOptions,m);v!==null&&i.setCursorPosition(v)},i.setSelection=function(m,v,w){w===void 0&&(w={});var h=i.getInputDOMNode(),g=i.isFocused();h&&g&&(w.deferred||M1(h,m,v),i.selectionDeferId!==null&&Zd(i.selectionDeferId),i.selectionDeferId=D1(function(){i.selectionDeferId=null,M1(h,m,v)}),i.previousSelection={start:m,end:v,length:Math.abs(v-m)})},i.getSelection=function(){return pz(i.getInputDOMNode())},i.getCursorPosition=function(){return i.getSelection().start},i.setCursorPosition=function(m){i.setSelection(m,m)},i.isFocused=function(){return i.focused},i.getBeforeMaskedValueChangeConfig=function(){var m=i.maskOptions,v=m.mask,w=m.maskChar,h=m.permanents,g=m.formatChars;return{mask:v,maskChar:w,permanents:h,alwaysShowMask:!!i.props.alwaysShowMask,formatChars:g}},i.isInputAutofilled=function(m,v,w,h){var g=i.getInputDOMNode();try{if(g.matches(":-webkit-autofill"))return!0}catch{}return!i.focused||h.end<w.length&&v.end===m.length},i.onChange=function(m){var v=yi(yi(i)).beforePasteState,w=yi(yi(i)).previousSelection,h=i.props.beforeMaskedValueChange,g=i.getInputValue(),x=i.value,S=i.getSelection();i.isInputAutofilled(g,S,x,w)&&(x=Fn(i.maskOptions,""),w={start:0,end:0,length:0}),v&&(w=v.selection,x=v.value,S={start:w.start+g.length,end:w.start+g.length,length:0},g=x.slice(0,w.start)+g+x.slice(w.end),i.beforePasteState=null);var C=xz(i.maskOptions,g,S,x,w),T=C.enteredString,E=C.selection,_=C.value;if(xt(h)){var $=h({value:_,selection:E},{value:x,selection:w},T,i.getBeforeMaskedValueChangeConfig());_=$.value,E=$.selection}i.setInputValue(_),xt(i.props.onChange)&&i.props.onChange(m),i.isWindowsPhoneBrowser?i.setSelection(E.start,E.end,{deferred:!0}):i.setSelection(E.start,E.end)},i.onFocus=function(m){var v=i.props.beforeMaskedValueChange,w=i.maskOptions,h=w.mask,g=w.prefix;if(i.focused=!0,i.mounted=!0,h){if(i.value)qo(i.maskOptions,i.value)<i.maskOptions.mask.length&&i.setCursorToEnd();else{var x=Fn(i.maskOptions,g),S=Fn(i.maskOptions,x),C=qo(i.maskOptions,S),T=aa(i.maskOptions,C),E={start:T,end:T};if(xt(v)){var _=v({value:S,selection:E},{value:i.value,selection:null},null,i.getBeforeMaskedValueChangeConfig());S=_.value,E=_.selection}var $=S!==i.getInputValue();$&&i.setInputValue(S),$&&xt(i.props.onChange)&&i.props.onChange(m),i.setSelection(E.start,E.end)}i.runSaveSelectionLoop()}xt(i.props.onFocus)&&i.props.onFocus(m)},i.onBlur=function(m){var v=i.props.beforeMaskedValueChange,w=i.maskOptions.mask;if(i.stopSaveSelectionLoop(),i.focused=!1,w&&!i.props.alwaysShowMask&&I1(i.maskOptions,i.value)){var h="";xt(v)&&(h=v({value:h,selection:null},{value:i.value,selection:i.previousSelection},null,i.getBeforeMaskedValueChangeConfig()).value);var g=h!==i.getInputValue();g&&i.setInputValue(h),g&&xt(i.props.onChange)&&i.props.onChange(m)}xt(i.props.onBlur)&&i.props.onBlur(m)},i.onMouseDown=function(m){if(!i.focused&&document.addEventListener){i.mouseDownX=m.clientX,i.mouseDownY=m.clientY,i.mouseDownTime=new Date().getTime();var v=function w(h){if(document.removeEventListener("mouseup",w),i.focused){var g=Math.abs(h.clientX-i.mouseDownX),x=Math.abs(h.clientY-i.mouseDownY),S=Math.max(g,x),C=new Date().getTime()-i.mouseDownTime;(S<=10&&C<=200||S<=5&&C<=300)&&i.setCursorToEnd()}};document.addEventListener("mouseup",v)}xt(i.props.onMouseDown)&&i.props.onMouseDown(m)},i.onPaste=function(m){xt(i.props.onPaste)&&i.props.onPaste(m),m.defaultPrevented||(i.beforePasteState={value:i.getInputValue(),selection:i.getSelection()},i.setInputValue(""))},i.handleRef=function(m){i.props.children==null&&xt(i.props.inputRef)&&i.props.inputRef(m)};var o=r.mask,a=r.maskChar,l=r.formatChars,s=r.alwaysShowMask,u=r.beforeMaskedValueChange,d=r.defaultValue,c=r.value;i.maskOptions=$1(o,a,l),d==null&&(d=""),c==null&&(c=d);var y=Qd(c);if(i.maskOptions.mask&&(s||y)&&(y=Fn(i.maskOptions,y),xt(u))){var p=r.value;r.value==null&&(p=d),y=u({value:y,selection:null},{value:p=Qd(p),selection:null},null,i.getBeforeMaskedValueChangeConfig()).value}return i.value=y,i}cz(t,e);var n=t.prototype;return n.componentDidMount=function(){this.mounted=!0,this.getInputDOMNode()&&(this.isWindowsPhoneBrowser=bz(),this.maskOptions.mask&&this.getInputValue()!==this.value&&this.setInputValue(this.value))},n.componentDidUpdate=function(){var r=this.previousSelection,i=this.props,o=i.beforeMaskedValueChange,a=i.alwaysShowMask,l=i.mask,s=i.maskChar,u=i.formatChars,d=this.maskOptions,c=a||this.isFocused(),y=this.props.value!=null,p=y?Qd(this.props.value):this.value,m=r?r.start:null;if(this.maskOptions=$1(l,s,u),this.maskOptions.mask){!d.mask&&this.isFocused()&&this.runSaveSelectionLoop();var v=this.maskOptions.mask&&this.maskOptions.mask!==d.mask;if(d.mask||y||(p=this.getInputValue()),(v||this.maskOptions.mask&&(p||c))&&(p=Fn(this.maskOptions,p)),v){var w=qo(this.maskOptions,p);(m===null||w<m)&&(m=h_(this.maskOptions,p)?w:aa(this.maskOptions,w))}!this.maskOptions.mask||!I1(this.maskOptions,p)||c||y&&this.props.value||(p="");var h={start:m,end:m};if(xt(o)){var g=o({value:p,selection:h},{value:this.value,selection:this.previousSelection},null,this.getBeforeMaskedValueChangeConfig());p=g.value,h=g.selection}this.value=p;var x=this.getInputValue()!==this.value;x?(this.setInputValue(this.value),this.forceUpdate()):v&&this.forceUpdate();var S=!1;h.start!=null&&h.end!=null&&(S=!r||r.start!==h.start||r.end!==h.end),(S||x)&&this.setSelection(h.start,h.end)}else d.mask&&(this.stopSaveSelectionLoop(),this.forceUpdate())},n.componentWillUnmount=function(){this.mounted=!1,this.selectionDeferId!==null&&Zd(this.selectionDeferId),this.stopSaveSelectionLoop()},n.render=function(){var r,i=this.props,o=(i.mask,i.alwaysShowMask,i.maskChar,i.formatChars,i.inputRef,i.beforeMaskedValueChange,i.children),a=dz(i,["mask","alwaysShowMask","maskChar","formatChars","inputRef","beforeMaskedValueChange","children"]);if(o){xt(o)||j1(!1);var l=["onChange","onPaste","onMouseDown","onFocus","onBlur","value","disabled","readOnly"],s=Up({},a);l.forEach(function(d){return delete s[d]}),r=o(s),l.filter(function(d){return r.props[d]!=null&&r.props[d]!==a[d]}).length&&j1(!1)}else r=Kd.createElement("input",Up({ref:this.handleRef},a));var u={onFocus:this.onFocus,onBlur:this.onBlur};return this.maskOptions.mask&&(a.disabled||a.readOnly||(u.onChange=this.onChange,u.onPaste=this.onPaste,u.onMouseDown=this.onMouseDown),a.value!=null&&(u.value=this.value)),r=Kd.cloneElement(r,u)},t}(Kd.Component),_z=Sz;p_.exports=_z;var Cz=p_.exports;const Ez=Gp(Cz);k.div`
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
`;const Jd=k.div`
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
`,ef=k.label`
  font-size: 14px;
  color: #666;
  margin-bottom: 5px;
`,tf=k.input`
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
`;const nf=k.span`
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
`;const kz=({formData:e,setFormData:t,errors:n})=>{const r=i=>{const{name:o,value:a}=i.target;o==="phone"&&!a.startsWith("+38 (0")||t(l=>({...l,[o]:a}))};return f.jsxs(f.Fragment,{children:[f.jsx("h3",{children:"Контактні дані"}),f.jsxs(Jd,{children:[f.jsx(ef,{children:"Прізвище та ім’я"}),f.jsx(tf,{type:"text",name:"fullName",value:e.fullName,onChange:r,placeholder:"Прізвище Ім'я",autoComplete:"name"}),n.fullName&&f.jsx(nf,{children:n.fullName})]}),f.jsxs(Jd,{children:[f.jsx(ef,{children:"Номер телефону"}),f.jsx(Ez,{mask:"+38 (099) 999-99-99",maskChar:"_",name:"phone",autoComplete:"tel",value:e.phone,onChange:r,children:i=>f.jsx(tf,{...i,type:"tel"})}),n.phone&&f.jsx(nf,{children:n.phone})]}),f.jsxs(Jd,{children:[f.jsx(ef,{children:"E-mail"}),f.jsx(tf,{type:"email",name:"email",value:e.email,onChange:r,placeholder:"email@example.com",autoComplete:"email"}),n.email&&f.jsx(nf,{children:n.email})]})]})},Pz=k.div`
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
`;k.h2`
  text-align: left;
  color: #fff;
  font-size: 28px;
  margin-bottom: 30px;
  font-weight: 700;
`;const Tz=k.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  text-align: left;

  @media screen and (min-width: 1200px) {
    flex-direction: row;
    align-items: flex-start;
  }
`,Oz=k.div`
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
`;const jz=({options:e,value:t,onChange:n,error:r})=>{const i=e.find(o=>o.value===t)||null;return f.jsxs("div",{style:{marginBottom:"20px"},children:[f.jsx("label",{style:{display:"block",marginBottom:"8px"},children:"Спосіб оплати"}),f.jsx(Tc,{options:e,value:i,onChange:o=>n(o==null?void 0:o.value),placeholder:"Оберіть спосіб оплати",styles:{control:o=>({...o,borderColor:r?"red":o.borderColor})}}),r&&f.jsx("span",{style:{color:"red",fontSize:"12px"},children:"Оберіть спосіб оплати"})]})},rf={}.VITE_NP_API_KEY,L1="https://api.novaposhta.ua/v2.0/json/",Mz=()=>{const e=qe(O=>O.cart.items),t=On(),n=jn();console.log("апі",rf);const[r,i]=b.useState({fullName:"",phone:"+38 (0",email:"",city:"",postOffice:""}),[o,a]=b.useState(""),[l,s]=b.useState(null),[u,d]=b.useState(null),[c,y]=b.useState(null),[p,m]=b.useState(null),[v,w]=b.useState([]),[h,g]=b.useState([]),[x,S]=b.useState(null),C=e.reduce((O,D)=>O+(D.new_price??D.price)*D.quantity,0),T=e.reduce((O,D)=>O+D.quantity,0),_=(()=>{const O=new Date().getFullYear().toString().slice(-2),D=Date.now().toString().slice(-4),P=Math.floor(100+Math.random()*900);return`${O}${D}${P}`})();console.log(_),b.useEffect(()=>{if(o.length<2)return;const O=setTimeout(async()=>{const P=await(await fetch(L1,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({apiKey:rf,modelName:"Address",calledMethod:"getCities",methodProperties:{FindByString:o}})})).json();w(P.data.map(I=>({value:I.Ref,label:I.Description})))},500);return()=>clearTimeout(O)},[o]),b.useEffect(()=>{if(!l||u!=="nova")return;(async()=>{const P=await(await fetch(L1,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({apiKey:rf,modelName:"AddressGeneral",calledMethod:"getWarehouses",methodProperties:{CityRef:l.value}})})).json();g(P.data.map(I=>({value:I.Ref,label:I.Description})))})()},[l,u]);const $=O=>{s(O),i(D=>({...D,city:(O==null?void 0:O.label)||"",postOffice:""})),d(null),y(null),m(null)},M=()=>{const O={};return r.fullName.trim().split(" ").length<2&&(O.fullName="Введіть прізвище та ім'я"),/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(r.email)||(O.email="Некоректний email"),r.phone.replace(/\D/g,"").length<12&&(O.phone="Номер неповний"),l||(O.city=!0),u==="nova"&&!c&&(O.postOffice=!0),u==="ukr"&&!p&&(O.postOffice=!0),u||(O.delivery=!0),x||(O.payment=!0),O},R=b.useMemo(M,[r,u,c,p,l,x]),A=Object.keys(R).length===0&&e.length>0,j=async O=>{if(O.preventDefault(),!x){alert("Оберіть спосіб оплати");return}try{if(await fetch("https://backenddidiv-production.up.railway.app/api/orders",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({data:{name:r.fullName,phone:r.phone,email:r.email,city:r.city,products:e==null?void 0:e.map(P=>({id:P.id,name:P.name,quantity:P.quantity,price:P.new_price??P.price})),status_order:"pending",order_number:_,payment_method:x==="liqpay"?"Онлайн (LiqPay)":x==="cod"?"Післяплата":x==="bank_transfer"?"Оплата за реквізитами":"",delivery_method:u==="nova"?"Нова Пошта":u==="ukr"?"УкрПошта":"Самовивіз",delivery_address:u==="nova"?c==null?void 0:c.label:u==="ukr"?p:"Самовивіз"}})}),x==="liqpay"){const P=await fetch("https://backenddidiv-production.up.railway.app/api/liqpay/create",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({amount:C,order_number:_})}),{data:I,signature:z}=await P.json(),B=document.createElement("form");B.method="POST",B.action="https://www.liqpay.ua/api/3/checkout",B.innerHTML=`
        <input type="hidden" name="data" value="${I}" />
        <input type="hidden" name="signature" value="${z}" />
      `,document.body.appendChild(B),B.requestSubmit();return}const D={...r,name:r.fullName,city:l.label,deliveryMethod:u==="nova"?"Нова Пошта":u==="ukr"?"УкрПошта":"Самовивіз",address:u==="nova"?c==null?void 0:c.label:u==="ukr"?p:"Самовивіз",products:e==null?void 0:e.map(P=>({id:P.id,name:P.name,quantity:P.quantity,price:P.new_price??P.price})),total:C,order_number:_,delivery_address:u==="nova"?c==null?void 0:c.label:u==="ukr"?p:"Самовивіз",payment_method:x==="liqpay"?"Онлайн (LiqPay)":x==="cod"?"Післяплата":x==="bank_transfer"?"Оплата за реквізитами":""};n(am()),t("/order-confirmation",{state:{order:D}})}catch(D){console.error(D),alert("Помилка оформлення")}},F=b.useMemo(()=>[{value:"nova",label:"Нова пошта"},{value:"ukr",label:"Укрпошта"}],[]),L=[{value:"liqpay",label:"Онлайн оплата (LiqPay)"},{value:"cod",label:"Післяплата"},{value:"bank_transfer",label:"Оплата за реквізитами"}];return f.jsx(Pz,{children:f.jsxs(Tz,{children:[f.jsxs(Oz,{children:[f.jsx(kz,{formData:r,setFormData:i,errors:R}),f.jsx(HF,{cityOptions:v,selectedCity:l,onChange:$,onInputChange:a}),f.jsx(qF,{options:F,value:u,onChange:d,selectedCity:l}),f.jsx(YF,{deliveryMethod:u,officeOptions:h,selectedOffice:c,selectedUkrOffice:p,setSelectedOffice:y,setSelectedUkrOffice:m}),f.jsx(jz,{options:L,value:x,onChange:S,error:R.payment})]}),f.jsx(az,{cartItems:e,totalAmount:C,totalQuantity:T,isFormValid:A,handleSubmit:j})]})})},$z=k.div`
font-family: var(--main-font);
  max-width: 800px;
  margin: 40px auto;
  padding: 40px 20px;
  background: #ffffff;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  text-align: center;
  font-family: 'Inter', sans-serif;
`,Iz=k.h1`
font-family: var(--second-font);
  color: var(--orange-color); 
  font-size: 28px;
  font-weight: 800;
  margin-bottom: 16px;
`,Ir=k.p`
font-family: var(--second-font);
  font-size: 16px;
  color: #555;
  line-height: 1.6;
  margin-bottom: 8px;

  strong {
    color: #1a1a1a;
  }
`,Dz=k.div`
font-family: var(--second-font);
  background: #f8f9fa;
  border-radius: 12px;
  padding: 24px;
  margin: 30px 0;
  text-align: left;
  border: 1px solid #edf2f7;
`,Lz=k.h3`
  font-size: 18px;
  font-weight: 500;
  color: #1a1a1a;
  margin-bottom: 16px;
  border-bottom: 2px solid #e2e8f0;
  padding-bottom: 8px;
`,Az=k.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 20px;
`,Rz=k.li`
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
`;const Fz=k.div`
  display: flex;
  gap: 15px;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 20px;
`,A1=k.button`
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
`,zz=()=>{var y,p;const e=On(),t=ri(),[n]=QC(),r=jn(),i=(y=t.state)==null?void 0:y.order,o=n.get("orderId"),[a,l]=b.useState(i||null),[s,u]=b.useState(!i);b.useEffect(()=>{r(am())},[r]),b.useEffect(()=>{i||(o?fetch(`https://backenddidiv-production.up.railway.app/api/orders?filters[order_number][$eq]=${o}&populate=*`).then(m=>m.json()).then(m=>{var v;((v=m.data)==null?void 0:v.length)>0&&l(m.data[0]),u(!1)}).catch(()=>u(!1)):u(!1))},[o,i]),console.log(a);const c=((a==null?void 0:a.products)??[]).reduce((m,v)=>m+Number(v.new_price??v.price)*(v.quantity||1),0);return s?f.jsx("div",{children:"Завантаження..."}):a?f.jsxs($z,{children:[f.jsx(Iz,{children:"Дякуємо за ваше замовлення!"}),f.jsxs(Ir,{children:["Ваше замовлення ",f.jsxs("strong",{children:["№",a.order_number]})," успішно прийняте."]}),f.jsx(Ir,{children:"Ми зв’яжемось з Вами в найближчий час"}),f.jsxs(Dz,{children:[f.jsx(Lz,{children:"Деталі замовлення:"}),f.jsx(Az,{children:(p=a.products)==null?void 0:p.map(m=>f.jsxs(Rz,{children:[f.jsxs("span",{className:"item-info",children:[m.name," (x",m.quantity,")"]}),f.jsxs("span",{className:"item-price",children:[(m.new_price??m.price)*(m.quantity||1)," грн"]})]},m.id))}),f.jsxs(Ir,{children:[f.jsx("strong",{children:"На суму:"})," ",c," грн."]}),f.jsxs(Ir,{children:[f.jsx("strong",{children:"Отрмувач:"})," ",a.name,", ",a.phone,"."]}),f.jsxs(Ir,{children:[f.jsx("strong",{children:"Спосіб доставки:"})," ",a.deliveryMethod,"."]}),f.jsxs(Ir,{children:[f.jsx("strong",{children:"Адреса отримання:"})," ",a.city,","," ",a.delivery_address,"."]}),f.jsxs(Ir,{children:[f.jsx("strong",{children:"Спосіб оплати:"})," ",a.payment_method,"."]})]}),f.jsxs(Fz,{children:[f.jsx(A1,{primary:!0,onClick:()=>e("/"),children:"Повернутися на головну"}),f.jsx(A1,{onClick:()=>e("/catalog"),children:"Продовжити покупки"})]})]}):f.jsxs("div",{children:["Замовлення не знайдено",f.jsx("button",{onClick:()=>e("/"),children:"На головну"})]})},Nz=k.section`
  background-color: var(--second-background);
`,Bz=k.div`
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
`,Vz=k.section`
  padding: 40px 0;
  background-color: #f9f9f980;
  border-radius: 12px;
  margin-bottom: 30px;
`,Uz=k.h1`
  font-family: var(--main-font);
  font-size: 28px;
  color: var(--black-color);
  margin-bottom: 10px;

  @media screen and (min-width: 768px) {
    font-size: 42px;
  }
`,Hz=k.p`

  font-size: 16px;
  color: #666;
`,Wz=k.section`
  margin-bottom: 50px;
`,Gz=k.p`
  font-family: var(--second-font);
  font-weight:400;
  font-size: 18px;
  line-height: 1.6;
  max-width: 800px;
  margin: 0 auto 40px;
  color: #444;
`,qz=k.section`
  margin-bottom: 60px;
`,Yz=k.h2`
  margin-bottom: 30px;
`,Xz=k.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
`,js=k.div`
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
`,Kz=()=>f.jsxs(Nz,{children:[f.jsxs(Bz,{children:[f.jsxs(Vz,{children:[f.jsx(Uz,{children:"Про Дідів Хлів"}),f.jsx(Hz,{children:"Даємо друге життя якісним велозапчастинам"})]}),f.jsxs(Wz,{children:[f.jsx(Gz,{children:"Бізнес створений з переконанням, що обладнання може бути доступним. Ми спеціалізуємося на розборі цікавих і унікальних велосипедів, усі запчастини перевірені нами. Стараємося пропонувати тільки найкраще від Shimano, Sram, Campagnolo та інших світових брендів."}),f.jsx(t2,{})]}),f.jsxs(qz,{children:[f.jsx(Yz,{children:"Наша майстерня"}),f.jsxs(Xz,{children:[f.jsx(js,{color:"#e2e2e2",children:"Фото майстерні"}),f.jsx(js,{color:"#d1d1d1",children:"Процес діагностики"}),f.jsx(js,{color:"#bcbcbc",children:"Склад запчастин"}),f.jsx(js,{color:"#a8a8a8",children:"Готові велосипеди"})]})]})]})," "]}),Qz=()=>{const{pathname:e}=ri();return b.useEffect(()=>{window.scrollTo(0,0)},[e]),null},Zz=k.section`
  background-color:  var(--second-background);
  padding: 40px 0;
  min-height: 80vh;
`,Jz=k.div`
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
`,eN=k.h1`
  font-family: var(--main-font); 
  font-size: 32px;
  color: var(--black-color);
  margin-bottom: 10px;
  text-transform: uppercase;
`,tN=k.p`
  color: #585555;
  margin-bottom: 40px;
`,nN=k.div`
font-family: var(--second-font);
font-weight: 400;
  display: grid;
  gap: 40px;
  text-align: left;

  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    align-items: start;
  }
`,rN=k.div`
height: 427px;
  display: grid;
  gap: 25px;
    background: #ffffff;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
`,Ms=k.div`
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
`,iN=k.div`
  background: #ffffff;
  padding: 40px 30px;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%; 
`,oN=k.h2`
  margin-bottom: 15px;
  color: var(--brown-color);
  font-size: 24px;
  font-family: var(--main-font);
`,aN=k.p`
  color: #666;
  font-size: 14px;
  line-height: 1.6;
  margin-bottom: 30px;
`,sN=k.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
  
  @media screen and (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`,R1=k.a`
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
`;const lN=k.div`
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

 
`,uN=()=>f.jsx(Zz,{children:f.jsxs(Jz,{children:[f.jsx(eN,{children:"Контакти"}),f.jsx(tN,{children:"Зв’яжіться з нами для консультації або замовлення"}),f.jsxs(nN,{children:[f.jsxs(rN,{children:[f.jsxs(Ms,{children:[f.jsx("h3",{children:"Адреса"}),f.jsx("p",{children:"вул. Казармена 6Г, Київ, Україна"}),f.jsx("a",{style:{color:"black",fontWeight:"500",fontSize:"0.9rem",display:"inline-block",marginTop:"5px",cursor:"pointer"},href:"https://www.google.com/maps/search/?api=1&query=вул.+Казармена+6Г,+Київ,+Україна",target:"_blank",rel:"noopener noreferrer",children:"📍 Показати на карті"})]}),f.jsxs(Ms,{children:[f.jsx("h3",{children:"Телефон"}),f.jsx("p",{children:"+38 (097) 123-45-67"})]}),f.jsxs(Ms,{children:[f.jsx("h3",{children:"Email"}),f.jsx("p",{children:"didivhliv.com"})]}),f.jsxs(Ms,{children:[f.jsx("h3",{children:"Графік роботи"}),f.jsx("p",{children:"З 11:00 - 20:00"}),f.jsx("p",{children:"Вихідні: Пн, Чт"})]})]}),f.jsxs(iN,{children:[f.jsx(oN,{children:"Ми в соцмережах"}),f.jsx(aN,{children:"Слідкуйте за нашими новинами, новими надходженнями та крутими вело-поїздками у зручному для вас форматі."}),f.jsxs(sN,{children:[f.jsxs(R1,{href:"https://www.instagram.com/didivxliv?igsh=MXhsNWRjdW5rajYwdQ==",target:"_blank",rel:"noopener noreferrer",children:[f.jsx("svg",{width:"20px",children:f.jsx("use",{href:`${cn}#icon-instagram`})}),f.jsx("span",{children:"Instagram"})]}),f.jsxs(R1,{href:"https://t.me/didivxliv",target:"_blank",rel:"noopener noreferrer",children:[f.jsx("svg",{width:"20px",children:f.jsx("use",{href:`${cn}#icon-telegram`})}),f.jsx("span",{children:"Telegram"})]})]}),f.jsx(lN,{children:"Приєднуйся до спільноти!"})]})]})]})}),cN=k.section`
  background-color:  var(--second-background);
`,dN=k.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
    margin-left: auto;
  margin-right: auto;
  align-items: center;
        padding: 40px 30px;
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
  
`,fN=k.div`
     width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  
`,pN=k.h1`

    font-size: 25px;
font-family: var(--main-font);
color: var( --black-color);
text-transform: uppercase;
 @media screen and (min-width: 360px) {
  font-size: 32px;
  }


@media screen and (min-width: 768px) {
  
  }

`,hN=k.div`
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
`,mN=k.div`
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
`,gN=k.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  padding:20px;

`,vN=k.div`
  padding: 16px;
      display: flex;
    align-content: center;
    align-items: center;
        justify-content: space-between;
`,yN=k.p`
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
 
`;k.p`
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
`;const xN=k.div.attrs({className:"card-buttons"})`
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
`,g_=k.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  flex-wrap: wrap;
  gap: 5px;
  margin-bottom: 15px;
  margin-top: auto; 
 padding-top: 40px; 
`,Vi=k.button`
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
`,bN=k.div`
  position: relative;
  display: inline-block;
  

`,wN=k.button`
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
`,SN=k.div`
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
`,xi=k.div`
  padding: 10px 12px;
  cursor: pointer;

  &:hover {
    background: #f0f0f0;
  }
`,v_=k.div`
  height: 80vh;
          display: flex;
          flex-direction:
          column;
          justify-content: center;
          align-items: center;
          font-size: 30px;
`,y_=k(Oe)`
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
  
`,_N=k.section`
  background-color: var(--second-background);
  /* min-height: 100vh; */
`,CN=k.div`
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
`,EN=k.div`
width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`,kN=k.h1`

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

`,PN=k.div`
  width: 100%;
  display: grid;
  gap: 15px;

  grid-template-columns: 1fr;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
  }
`,TN=k.div`
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
`,ON=k.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  padding: 20px;
`,jN=k.p`
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
`,MN=k.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 16px 16px;
`;k.span`
  font-size: 16px;
  font-weight: 700;

  &:last-child {
    font-size: 14px;
    color: #999;
    text-decoration: line-through;
    font-weight: 400;
  }
`;const $N=k.div.attrs({className:"card-buttons"})`
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
`,su=k.button`
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
`;const IN=k.div`
  position: relative;
  display: inline-block;
  display:flex;
  
`,DN=k.div`
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
`,bi=k.div`
  padding: 10px 12px;
  cursor: pointer;

  &:hover {
    background: #f0f0f0;
  }
`,LN=k.button`
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
`,AN=()=>{const[e,t]=b.useState([]),[n,r]=b.useState(!0),i=qe(C=>C.favorites.items),o=qe(C=>C.cart.items),[a,l]=b.useState(!1),[s,u]=b.useState("date"),[d,c]=b.useState("asc"),[y,p]=b.useState(1),[m,v]=b.useState(1),w=On(),h=jn(),g=b.useRef(null);b.useEffect(()=>{const C=T=>{g.current&&!g.current.contains(T.target)&&l(!1)};return document.addEventListener("mousedown",C),()=>{document.removeEventListener("mousedown",C)}},[]),b.useEffect(()=>{window.scrollTo({top:0,behavior:"smooth"})},[y]),b.useEffect(()=>{(async()=>{const T=new Date,E=new Date;E.setDate(T.getDate()-7);const _=E.toISOString();try{r(!0);const $=await fetch(`https://backenddidiv-production.up.railway.app/api/products?populate=*&filters[createdAt][$gte]=${_}&pagination[page]=${y}&pagination[pageSize]=24`);if(!$.ok)throw new Error(`HTTP error! Status: ${$.status}`);const M=await $.json();t(M.data),v(M.meta.pagination.pageCount)}catch($){console.error("Помилка при завантаженні продуктів:",$)}finally{r(!1)}})()},[y]);const x=b.useMemo(()=>{const C=[...e],T=E=>E.new_price&&E.new_price<E.price?E.new_price:E.price;switch(s){case"name":return C.sort((E,_)=>d==="asc"?E.name.localeCompare(_.name):_.name.localeCompare(E.name));case"price":return C.sort((E,_)=>{const $=T(E),M=T(_);return d==="asc"?$-M:M-$});case"date":return C.sort((E,_)=>d==="asc"?new Date(E.createdAt)-new Date(_.createdAt):new Date(_.createdAt)-new Date(E.createdAt));default:return C}},[s,e,d]),S=(C,T)=>{T.stopPropagation();const E=i.some(_=>_.id===C.id);h(ai(C)),E?Y.warning(`${C.name} видалено з обраного`):Y.info(`${C.name} додано в обране`)};return n?f.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"100vw",height:"100vh"},children:f.jsx(Ya,{height:100,width:100,radius:5,color:"var(--orange-color)",ariaLabel:"ball-triangle-loading",wrapperStyle:{},wrapperClass:"",visible:!0})}):x.length===0?f.jsxs(v_,{children:[f.jsx("p",{style:{textAlign:"center"},children:"Нажаль, нічого нового за останній тиждень"}),f.jsxs(y_,{to:"/catalog",children:[f.jsx("p",{children:"Весь каталог"}),f.jsx($u,{size:24})]})]}):f.jsxs(cN,{children:[f.jsxs(dN,{children:[f.jsx(Or,{autoClose:1500}),f.jsxs(fN,{children:[f.jsx(pN,{children:"Нові товари "}),f.jsxs(bN,{ref:g,children:[f.jsxs(wN,{onClick:()=>l(C=>!C),children:["Сортування",f.jsx(Mu,{strokeWidth:.9,size:22})]}),a&&f.jsxs(SN,{children:[f.jsx(xi,{onClick:()=>{u("name"),c("asc"),l(!1)},children:"А-Я"}),f.jsx(xi,{onClick:()=>{u("name"),c("desc"),l(!1)},children:"Я-А"}),f.jsx(xi,{onClick:()=>{u("price"),c("asc"),l(!1)},children:"Ціна ↑"}),f.jsx(xi,{onClick:()=>{u("price"),c("desc"),l(!1)},children:"Ціна ↓"}),f.jsx(xi,{onClick:()=>{u("date"),c("desc"),l(!1)},children:"Спочатку новіші"}),f.jsx(xi,{onClick:()=>{u("date"),c("asc"),l(!1)},children:"Спочатку старіші"})]})]})]}),f.jsx(hN,{children:x.map(C=>{var F,L;const T=i.some(O=>O.id===C.id),E=o.find(O=>O.id===C.id),$=(E?E.quantity:0)>=(C.stock||0),M=C.new_price&&C.new_price<C.price,R=M?C.new_price:C.price,A=M?Math.round((C.price-C.new_price)/C.price*100):0,j=(O,D)=>{if(D.stopPropagation(),$){Y.error("Товар уже у кошику");return}h(ho({...O,quantity:1})),Y.success(`${O.name} додано в кошик!`)};return f.jsxs(mN,{onClick:()=>w(`/product/${C.id}`),children:[f.jsx(gN,{src:((L=(F=C.images)==null?void 0:F[0])==null?void 0:L.url)||no,alt:C.name}),f.jsx(yN,{children:C.name}),f.jsxs(vN,{children:[f.jsx(wc,{children:f.jsxs(Sc,{children:[f.jsxs(_c,{$discount:M,children:[R.toLocaleString()," грн"]}),M&&f.jsxs(Cc,{children:[C.price.toLocaleString()," грн"]}),M&&f.jsxs(Ec,{children:["-",A,"%"]})]})}),f.jsxs(xN,{children:[f.jsx(su,{onClick:O=>j(C,O),children:f.jsx(po,{size:24,color:E?"var(--orange-color)":"black",strokeWidth:2})}),f.jsx(su,{onClick:O=>S(C,O),children:f.jsx(Ua,{size:24,fill:T?"#ff4d4f":"none",color:T?"#ff4d4f":"#000000",strokeWidth:T?1:2})})]})]})]},C.id)})}),f.jsxs(g_,{children:[f.jsx(Vi,{onClick:()=>p(C=>Math.max(C-1,1)),disabled:y===1,children:"Назад"}),Array.from({length:m},(C,T)=>f.jsx(Vi,{onClick:()=>p(T+1),active:y===T+1,children:T+1},T)),f.jsx(Vi,{onClick:()=>p(C=>Math.min(C+1,m)),disabled:y===m,children:"Вперед"})]})]})," "]})},RN=()=>{const[e,t]=b.useState([]),[n,r]=b.useState(!0),[i,o]=b.useState(!1),[a,l]=b.useState("date"),[s,u]=b.useState("desc"),[d,c]=b.useState(1),y=24;console.log(i);const p=On(),m=jn(),v=qe(_=>_.favorites.items),w=qe(_=>_.cart.items),h=b.useRef(null);b.useEffect(()=>{const _=$=>{h.current&&!h.current.contains($.target)&&o(!1)};return document.addEventListener("mousedown",_),()=>{document.removeEventListener("mousedown",_)}},[]),b.useEffect(()=>{(async()=>{const $="https://backenddidiv-production.up.railway.app";try{const R=await(await fetch(`${$}/api/products?filters[new_price][$notNull]=true&pagination[pageSize]=500&populate=*`)).json();console.log(R.data),t(R.data),r(!1)}catch(M){console.log(M)}})()},[]),b.useEffect(()=>{window.scrollTo({top:0,behavior:"smooth"})},[d]);const g=b.useMemo(()=>{const _=[...e];switch(a){case"name":return _.sort(($,M)=>s==="asc"?$.name.localeCompare(M.name):M.name.localeCompare($.name));case"price":return _.sort(($,M)=>s==="asc"?$.new_price-M.new_price:M.new_price-$.new_price);case"date":return _.sort(($,M)=>s==="asc"?new Date($.createdAt)-new Date(M.createdAt):new Date(M.createdAt)-new Date($.createdAt));default:return _}},[a,e,s]),x=d*y,S=x-y,C=g.slice(S,x),T=Math.ceil(e.length/y),E=(_,$)=>{$.stopPropagation();const M=v.some(R=>R.id===_.id);m(ai(_)),M?Y.warning(`${_.name} видалено з обраного`):Y.info(`${_.name} додано в обране`)};return n?f.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"100vw",height:"100vh"},children:f.jsx(Ya,{height:100,width:100,radius:5,color:"var(--orange-color)",ariaLabel:"ball-triangle-loading",wrapperStyle:{},wrapperClass:"",visible:!0})}):e.length===0?f.jsxs(v_,{children:[f.jsx("p",{style:{textAlign:"center"},children:"Нажаль, поки знижок немає"}),f.jsxs(y_,{to:"/catalog",children:[f.jsx("p",{children:"Весь каталог"}),f.jsx($u,{size:24})]})]}):f.jsx(_N,{children:f.jsxs(CN,{children:[f.jsx(Or,{autoClose:1500}),f.jsxs(EN,{children:[f.jsx(kN,{children:"Акційні товари"}),f.jsxs(IN,{ref:h,children:[f.jsxs(LN,{onClick:()=>o(_=>!_),children:["Сортування",f.jsx(Mu,{strokeWidth:.9,size:22})]}),i&&f.jsxs(DN,{children:[f.jsx(bi,{onClick:()=>{l("name"),u("asc"),o(!1)},children:"А-Я"}),f.jsx(bi,{onClick:()=>{l("name"),u("desc"),o(!1)},children:"Я-А"}),f.jsx(bi,{onClick:()=>{l("price"),u("asc"),o(!1)},children:"Ціна ↑"}),f.jsx(bi,{onClick:()=>{l("price"),u("desc"),o(!1)},children:"Ціна ↓"}),f.jsx(bi,{onClick:()=>{l("date"),u("desc"),o(!1)},children:"Спочатку новіші"}),f.jsx(bi,{onClick:()=>{l("date"),u("asc"),o(!1)},children:"Спочатку старіші"})]})]})]}),f.jsx(PN,{children:C.map(_=>{var D,P;const $=_.new_price&&_.new_price<_.price,M=$?_.new_price:_.price,R=$?Math.round((_.price-_.new_price)/_.price*100):0,A=v.some(I=>I.id===_.id),j=w.find(I=>I.id===_.id),L=(j?j.quantity:0)>=(_.stock||0),O=(I,z)=>{if(z.stopPropagation(),L){Y.error("Товар уже у кошику");return}m(ho({...I,quantity:1})),Y.success(`${I.name} додано в кошик!`)};return f.jsxs(TN,{onClick:()=>p(`/product/${_.id}`),style:{cursor:"pointer"},children:[f.jsx(ON,{src:((P=(D=_.images)==null?void 0:D[0])==null?void 0:P.url)||"/nofoto.png"}),f.jsx(jN,{children:_.name}),f.jsxs(MN,{children:[f.jsx(wc,{children:f.jsxs(Sc,{children:[f.jsxs(_c,{$discount:$,children:[M.toLocaleString()," грн"]}),$&&f.jsxs(Cc,{children:[_.price.toLocaleString()," грн"]}),$&&f.jsxs(Ec,{children:["-",R,"%"]})]})}),f.jsxs($N,{children:[f.jsx(su,{onClick:I=>O(_,I),children:f.jsx(po,{size:24,color:j?"var(--orange-color)":"black",strokeWidth:2})}),f.jsx(su,{onClick:I=>E(_,I),children:f.jsx(Ua,{size:24,fill:A?"#ff4d4f":"none",color:A?"#ff4d4f":"#000000",strokeWidth:A?1:2})})]})]})]},_.id)})}),g.length>y&&f.jsxs(g_,{children:[f.jsx(Vi,{onClick:()=>c(_=>Math.max(_-1,1)),disabled:d===1,children:"Назад"}),Array.from({length:T},(_,$)=>f.jsx(Vi,{onClick:()=>c($+1),active:d===$+1,children:$+1},$)),f.jsx(Vi,{onClick:()=>c(_=>Math.min(_+1,T)),disabled:d===T,children:"Вперед"})]})]})})};function FN(){return f.jsxs(hM,{children:[f.jsx(K5,{}),f.jsx(Qz,{}),f.jsx(b.Suspense,{fallback:f.jsx(Y5,{}),children:f.jsx(NC,{children:f.jsxs(rt,{path:"/",element:f.jsx(BO,{}),children:[f.jsx(rt,{index:!0,element:f.jsx(HI,{})}),f.jsx(rt,{path:"catalog",element:f.jsx(lM,{})}),f.jsx(rt,{path:"/catalog/:category",element:f.jsx(LD,{})}),f.jsx(rt,{path:"/product/:id",element:f.jsx(Y6,{})}),f.jsx(rt,{path:"cart",element:f.jsx(SA,{})}),f.jsx(rt,{path:"favorite",element:f.jsx(UA,{})}),f.jsx(rt,{path:"/catalog/new",element:f.jsx(AN,{})}),f.jsx(rt,{path:"/catalog/sale",element:f.jsx(RN,{})}),f.jsx(rt,{path:"checkout",element:f.jsx(Mz,{})}),f.jsx(rt,{path:"/order-confirmation",element:f.jsx(zz,{})}),f.jsx(rt,{path:"about",element:f.jsx(Kz,{})}),f.jsx(rt,{path:"contacts",element:f.jsx(uN,{})}),f.jsx(rt,{path:"delivery",element:f.jsx(XA,{})}),f.jsx(rt,{path:"*",element:f.jsx(pM,{})})]})})})]})}var qm="persist:",x_="persist/FLUSH",Ym="persist/REHYDRATE",b_="persist/PAUSE",w_="persist/PERSIST",S_="persist/PURGE",__="persist/REGISTER",zN=-1;function il(e){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?il=function(n){return typeof n}:il=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},il(e)}function F1(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function NN(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?F1(n,!0).forEach(function(r){BN(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):F1(n).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function BN(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function VN(e,t,n,r){r.debug;var i=NN({},n);return e&&il(e)==="object"&&Object.keys(e).forEach(function(o){o!=="_persist"&&t[o]===n[o]&&(i[o]=e[o])}),i}function UN(e){var t=e.blacklist||null,n=e.whitelist||null,r=e.transforms||[],i=e.throttle||0,o="".concat(e.keyPrefix!==void 0?e.keyPrefix:qm).concat(e.key),a=e.storage,l;e.serialize===!1?l=function(C){return C}:typeof e.serialize=="function"?l=e.serialize:l=HN;var s=e.writeFailHandler||null,u={},d={},c=[],y=null,p=null,m=function(C){Object.keys(C).forEach(function(T){h(T)&&u[T]!==C[T]&&c.indexOf(T)===-1&&c.push(T)}),Object.keys(u).forEach(function(T){C[T]===void 0&&h(T)&&c.indexOf(T)===-1&&u[T]!==void 0&&c.push(T)}),y===null&&(y=setInterval(v,i)),u=C};function v(){if(c.length===0){y&&clearInterval(y),y=null;return}var S=c.shift(),C=r.reduce(function(T,E){return E.in(T,S,u)},u[S]);if(C!==void 0)try{d[S]=l(C)}catch(T){console.error("redux-persist/createPersistoid: error serializing state",T)}else delete d[S];c.length===0&&w()}function w(){Object.keys(d).forEach(function(S){u[S]===void 0&&delete d[S]}),p=a.setItem(o,l(d)).catch(g)}function h(S){return!(n&&n.indexOf(S)===-1&&S!=="_persist"||t&&t.indexOf(S)!==-1)}function g(S){s&&s(S)}var x=function(){for(;c.length!==0;)v();return p||Promise.resolve()};return{update:m,flush:x}}function HN(e){return JSON.stringify(e)}function WN(e){var t=e.transforms||[],n="".concat(e.keyPrefix!==void 0?e.keyPrefix:qm).concat(e.key),r=e.storage;e.debug;var i;return e.deserialize===!1?i=function(a){return a}:typeof e.deserialize=="function"?i=e.deserialize:i=GN,r.getItem(n).then(function(o){if(o)try{var a={},l=i(o);return Object.keys(l).forEach(function(s){a[s]=t.reduceRight(function(u,d){return d.out(u,s,l)},i(l[s]))}),a}catch(s){throw s}else return})}function GN(e){return JSON.parse(e)}function qN(e){var t=e.storage,n="".concat(e.keyPrefix!==void 0?e.keyPrefix:qm).concat(e.key);return t.removeItem(n,YN)}function YN(e){}function z1(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Mn(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?z1(n,!0).forEach(function(r){XN(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):z1(n).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function XN(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function KN(e,t){if(e==null)return{};var n=QN(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function QN(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}var ZN=5e3;function C_(e,t){var n=e.version!==void 0?e.version:zN;e.debug;var r=e.stateReconciler===void 0?VN:e.stateReconciler,i=e.getStoredState||WN,o=e.timeout!==void 0?e.timeout:ZN,a=null,l=!1,s=!0,u=function(c){return c._persist.rehydrated&&a&&!s&&a.update(c),c};return function(d,c){var y=d||{},p=y._persist,m=KN(y,["_persist"]),v=m;if(c.type===w_){var w=!1,h=function(_,$){w||(c.rehydrate(e.key,_,$),w=!0)};if(o&&setTimeout(function(){!w&&h(void 0,new Error('redux-persist: persist timed out for persist key "'.concat(e.key,'"')))},o),s=!1,a||(a=UN(e)),p)return Mn({},t(v,c),{_persist:p});if(typeof c.rehydrate!="function"||typeof c.register!="function")throw new Error("redux-persist: either rehydrate or register is not a function on the PERSIST action. This can happen if the action is being replayed. This is an unexplored use case, please open an issue and we will figure out a resolution.");return c.register(e.key),i(e).then(function(E){var _=e.migrate||function($,M){return Promise.resolve($)};_(E,n).then(function($){h($)},function($){h(void 0,$)})},function(E){h(void 0,E)}),Mn({},t(v,c),{_persist:{version:n,rehydrated:!1}})}else{if(c.type===S_)return l=!0,c.result(qN(e)),Mn({},t(v,c),{_persist:p});if(c.type===x_)return c.result(a&&a.flush()),Mn({},t(v,c),{_persist:p});if(c.type===b_)s=!0;else if(c.type===Ym){if(l)return Mn({},v,{_persist:Mn({},p,{rehydrated:!0})});if(c.key===e.key){var g=t(v,c),x=c.payload,S=r!==!1&&x!==void 0?r(x,d,g,e):g,C=Mn({},S,{_persist:Mn({},p,{rehydrated:!0})});return u(C)}}}if(!p)return t(d,c);var T=t(v,c);return T===v?d:u(Mn({},T,{_persist:p}))}}function N1(e){return t9(e)||e9(e)||JN()}function JN(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function e9(e){if(Symbol.iterator in Object(e)||Object.prototype.toString.call(e)==="[object Arguments]")return Array.from(e)}function t9(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}function B1(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Wp(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?B1(n,!0).forEach(function(r){n9(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):B1(n).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function n9(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var E_={registry:[],bootstrapped:!1},r9=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:E_,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case __:return Wp({},t,{registry:[].concat(N1(t.registry),[n.key])});case Ym:var r=t.registry.indexOf(n.key),i=N1(t.registry);return i.splice(r,1),Wp({},t,{registry:i,bootstrapped:i.length===0});default:return t}};function i9(e,t,n){var r=n||!1,i=nm(r9,E_,t&&t.enhancer?t.enhancer:void 0),o=function(u){i.dispatch({type:__,key:u})},a=function(u,d,c){var y={type:Ym,payload:d,err:c,key:u};e.dispatch(y),i.dispatch(y),r&&l.getState().bootstrapped&&(r(),r=!1)},l=Wp({},i,{purge:function(){var u=[];return e.dispatch({type:S_,result:function(c){u.push(c)}}),Promise.all(u)},flush:function(){var u=[];return e.dispatch({type:x_,result:function(c){u.push(c)}}),Promise.all(u)},pause:function(){e.dispatch({type:b_})},persist:function(){e.dispatch({type:w_,register:o,rehydrate:a})}});return t&&t.manualPersist||l.persist(),l}var Xm={},Km={};Km.__esModule=!0;Km.default=s9;function ol(e){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?ol=function(n){return typeof n}:ol=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},ol(e)}function of(){}var o9={getItem:of,setItem:of,removeItem:of};function a9(e){if((typeof self>"u"?"undefined":ol(self))!=="object"||!(e in self))return!1;try{var t=self[e],n="redux-persist ".concat(e," test");t.setItem(n,"test"),t.getItem(n),t.removeItem(n)}catch{return!1}return!0}function s9(e){var t="".concat(e,"Storage");return a9(t)?self[t]:o9}Xm.__esModule=!0;Xm.default=c9;var l9=u9(Km);function u9(e){return e&&e.__esModule?e:{default:e}}function c9(e){var t=(0,l9.default)(e);return{getItem:function(r){return new Promise(function(i,o){i(t.getItem(r))})},setItem:function(r,i){return new Promise(function(o,a){o(t.setItem(r,i))})},removeItem:function(r){return new Promise(function(i,o){i(t.removeItem(r))})}}}var Qm=void 0,d9=f9(Xm);function f9(e){return e&&e.__esModule?e:{default:e}}var p9=(0,d9.default)("local");Qm=p9;const h9={key:"cart",storage:Qm},m9={key:"favorites",storage:Qm},g9=C_(h9,W4),v9=C_(m9,Nj),k_=O4({reducer:{cart:g9,favorites:v9},middleware:e=>e({serializableCheck:!1})});i9(k_);df.createRoot(document.getElementById("root")).render(f.jsx(YT,{store:k_,children:f.jsx(X.StrictMode,{children:f.jsx(qC,{basename:"/Didiv/",children:f.jsx(FN,{})})})}));
