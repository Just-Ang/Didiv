function M_(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();var te=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Yp(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function Tt(e){if(e.__esModule)return e;var t=e.default;if(typeof t=="function"){var n=function r(){return this instanceof r?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach(function(r){var i=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(n,r,i.get?i:{enumerable:!0,get:function(){return e[r]}})}),n}var W1={exports:{}},uu={},G1={exports:{}},re={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var La=Symbol.for("react.element"),$_=Symbol.for("react.portal"),I_=Symbol.for("react.fragment"),D_=Symbol.for("react.strict_mode"),L_=Symbol.for("react.profiler"),A_=Symbol.for("react.provider"),R_=Symbol.for("react.context"),F_=Symbol.for("react.forward_ref"),z_=Symbol.for("react.suspense"),N_=Symbol.for("react.memo"),B_=Symbol.for("react.lazy"),ng=Symbol.iterator;function V_(e){return e===null||typeof e!="object"?null:(e=ng&&e[ng]||e["@@iterator"],typeof e=="function"?e:null)}var Y1={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},q1=Object.assign,X1={};function ao(e,t,n){this.props=e,this.context=t,this.refs=X1,this.updater=n||Y1}ao.prototype.isReactComponent={};ao.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};ao.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function K1(){}K1.prototype=ao.prototype;function qp(e,t,n){this.props=e,this.context=t,this.refs=X1,this.updater=n||Y1}var Xp=qp.prototype=new K1;Xp.constructor=qp;q1(Xp,ao.prototype);Xp.isPureReactComponent=!0;var rg=Array.isArray,Q1=Object.prototype.hasOwnProperty,Kp={current:null},Z1={key:!0,ref:!0,__self:!0,__source:!0};function J1(e,t,n){var r,i={},o=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(o=""+t.key),t)Q1.call(t,r)&&!Z1.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var s=Array(l),u=0;u<l;u++)s[u]=arguments[u+2];i.children=s}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:La,type:e,key:o,ref:a,props:i,_owner:Kp.current}}function U_(e,t){return{$$typeof:La,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Qp(e){return typeof e=="object"&&e!==null&&e.$$typeof===La}function H_(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var ig=/\/+/g;function Dc(e,t){return typeof e=="object"&&e!==null&&e.key!=null?H_(""+e.key):t.toString(36)}function Is(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case La:case $_:a=!0}}if(a)return a=e,i=i(a),e=r===""?"."+Dc(a,0):r,rg(i)?(n="",e!=null&&(n=e.replace(ig,"$&/")+"/"),Is(i,t,n,"",function(u){return u})):i!=null&&(Qp(i)&&(i=U_(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(ig,"$&/")+"/")+e)),t.push(i)),1;if(a=0,r=r===""?".":r+":",rg(e))for(var l=0;l<e.length;l++){o=e[l];var s=r+Dc(o,l);a+=Is(o,t,n,s,i)}else if(s=V_(e),typeof s=="function")for(e=s.call(e),l=0;!(o=e.next()).done;)o=o.value,s=r+Dc(o,l++),a+=Is(o,t,n,s,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function ts(e,t,n){if(e==null)return e;var r=[],i=0;return Is(e,r,"","",function(o){return t.call(n,o,i++)}),r}function W_(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var mt={current:null},Ds={transition:null},G_={ReactCurrentDispatcher:mt,ReactCurrentBatchConfig:Ds,ReactCurrentOwner:Kp};re.Children={map:ts,forEach:function(e,t,n){ts(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ts(e,function(){t++}),t},toArray:function(e){return ts(e,function(t){return t})||[]},only:function(e){if(!Qp(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};re.Component=ao;re.Fragment=I_;re.Profiler=L_;re.PureComponent=qp;re.StrictMode=D_;re.Suspense=z_;re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=G_;re.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=q1({},e.props),i=e.key,o=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,a=Kp.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in t)Q1.call(t,s)&&!Z1.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&l!==void 0?l[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){l=Array(s);for(var u=0;u<s;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:La,type:e.type,key:i,ref:o,props:r,_owner:a}};re.createContext=function(e){return e={$$typeof:R_,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:A_,_context:e},e.Consumer=e};re.createElement=J1;re.createFactory=function(e){var t=J1.bind(null,e);return t.type=e,t};re.createRef=function(){return{current:null}};re.forwardRef=function(e){return{$$typeof:F_,render:e}};re.isValidElement=Qp;re.lazy=function(e){return{$$typeof:B_,_payload:{_status:-1,_result:e},_init:W_}};re.memo=function(e,t){return{$$typeof:N_,type:e,compare:t===void 0?null:t}};re.startTransition=function(e){var t=Ds.transition;Ds.transition={};try{e()}finally{Ds.transition=t}};re.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};re.useCallback=function(e,t){return mt.current.useCallback(e,t)};re.useContext=function(e){return mt.current.useContext(e)};re.useDebugValue=function(){};re.useDeferredValue=function(e){return mt.current.useDeferredValue(e)};re.useEffect=function(e,t){return mt.current.useEffect(e,t)};re.useId=function(){return mt.current.useId()};re.useImperativeHandle=function(e,t,n){return mt.current.useImperativeHandle(e,t,n)};re.useInsertionEffect=function(e,t){return mt.current.useInsertionEffect(e,t)};re.useLayoutEffect=function(e,t){return mt.current.useLayoutEffect(e,t)};re.useMemo=function(e,t){return mt.current.useMemo(e,t)};re.useReducer=function(e,t,n){return mt.current.useReducer(e,t,n)};re.useRef=function(e){return mt.current.useRef(e)};re.useState=function(e){return mt.current.useState(e)};re.useSyncExternalStore=function(e,t,n){return mt.current.useSyncExternalStore(e,t,n)};re.useTransition=function(){return mt.current.useTransition()};re.version="18.2.0";G1.exports=re;var b=G1.exports;const K=Yp(b),sf=M_({__proto__:null,default:K},[b]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Y_=b,q_=Symbol.for("react.element"),X_=Symbol.for("react.fragment"),K_=Object.prototype.hasOwnProperty,Q_=Y_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Z_={key:!0,ref:!0,__self:!0,__source:!0};function ey(e,t,n){var r,i={},o=null,a=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)K_.call(t,r)&&!Z_.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:q_,type:e,key:o,ref:a,props:i,_owner:Q_.current}}uu.Fragment=X_;uu.jsx=ey;uu.jsxs=ey;W1.exports=uu;var f=W1.exports;/**
 * @remix-run/router v1.8.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function sa(){return sa=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},sa.apply(this,arguments)}var lr;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(lr||(lr={}));const og="popstate";function J_(e){e===void 0&&(e={});function t(r,i){let{pathname:o,search:a,hash:l}=r.location;return lf("",{pathname:o,search:a,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:sl(i)}return tC(t,n,null,e)}function Le(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Zp(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function eC(){return Math.random().toString(36).substr(2,8)}function ag(e,t){return{usr:e.state,key:e.key,idx:t}}function lf(e,t,n,r){return n===void 0&&(n=null),sa({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?so(t):t,{state:n,key:t&&t.key||r||eC()})}function sl(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function so(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function tC(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,a=i.history,l=lr.Pop,s=null,u=d();u==null&&(u=0,a.replaceState(sa({},a.state,{idx:u}),""));function d(){return(a.state||{idx:null}).idx}function c(){l=lr.Pop;let w=d(),h=w==null?null:w-u;u=w,s&&s({action:l,location:g.location,delta:h})}function y(w,h){l=lr.Push;let v=lf(g.location,w,h);n&&n(v,w),u=d()+1;let x=ag(v,u),S=g.createHref(v);try{a.pushState(x,"",S)}catch(E){if(E instanceof DOMException&&E.name==="DataCloneError")throw E;i.location.assign(S)}o&&s&&s({action:l,location:g.location,delta:1})}function p(w,h){l=lr.Replace;let v=lf(g.location,w,h);n&&n(v,w),u=d();let x=ag(v,u),S=g.createHref(v);a.replaceState(x,"",S),o&&s&&s({action:l,location:g.location,delta:0})}function m(w){let h=i.location.origin!=="null"?i.location.origin:i.location.href,v=typeof w=="string"?w:sl(w);return Le(h,"No window.location.(origin|href) available to create URL for href: "+v),new URL(v,h)}let g={get action(){return l},get location(){return e(i,a)},listen(w){if(s)throw new Error("A history only accepts one active listener");return i.addEventListener(og,c),s=w,()=>{i.removeEventListener(og,c),s=null}},createHref(w){return t(i,w)},createURL:m,encodeLocation(w){let h=m(w);return{pathname:h.pathname,search:h.search,hash:h.hash}},push:y,replace:p,go(w){return a.go(w)}};return g}var sg;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(sg||(sg={}));function nC(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?so(t):t,i=Jp(r.pathname||"/",n);if(i==null)return null;let o=ty(e);rC(o);let a=null;for(let l=0;a==null&&l<o.length;++l)a=fC(o[l],mC(i));return a}function ty(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,a,l)=>{let s={relativePath:l===void 0?o.path||"":l,caseSensitive:o.caseSensitive===!0,childrenIndex:a,route:o};s.relativePath.startsWith("/")&&(Le(s.relativePath.startsWith(r),'Absolute route path "'+s.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),s.relativePath=s.relativePath.slice(r.length));let u=pr([r,s.relativePath]),d=n.concat(s);o.children&&o.children.length>0&&(Le(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),ty(o.children,t,d,u)),!(o.path==null&&!o.index)&&t.push({path:u,score:cC(u,o.index),routesMeta:d})};return e.forEach((o,a)=>{var l;if(o.path===""||!((l=o.path)!=null&&l.includes("?")))i(o,a);else for(let s of ny(o.path))i(o,a,s)}),t}function ny(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let a=ny(r.join("/")),l=[];return l.push(...a.map(s=>s===""?o:[o,s].join("/"))),i&&l.push(...a),l.map(s=>e.startsWith("/")&&s===""?"/":s)}function rC(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:dC(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const iC=/^:\w+$/,oC=3,aC=2,sC=1,lC=10,uC=-2,lg=e=>e==="*";function cC(e,t){let n=e.split("/"),r=n.length;return n.some(lg)&&(r+=uC),t&&(r+=aC),n.filter(i=>!lg(i)).reduce((i,o)=>i+(iC.test(o)?oC:o===""?sC:lC),r)}function dC(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function fC(e,t){let{routesMeta:n}=e,r={},i="/",o=[];for(let a=0;a<n.length;++a){let l=n[a],s=a===n.length-1,u=i==="/"?t:t.slice(i.length)||"/",d=pC({path:l.relativePath,caseSensitive:l.caseSensitive,end:s},u);if(!d)return null;Object.assign(r,d.params);let c=l.route;o.push({params:r,pathname:pr([i,d.pathname]),pathnameBase:xC(pr([i,d.pathnameBase])),route:c}),d.pathnameBase!=="/"&&(i=pr([i,d.pathnameBase]))}return o}function pC(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=hC(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],a=o.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((u,d,c)=>{if(d==="*"){let y=l[c]||"";a=o.slice(0,o.length-y.length).replace(/(.)\/+$/,"$1")}return u[d]=gC(l[c]||"",d),u},{}),pathname:o,pathnameBase:a,pattern:e}}function hC(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Zp(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(a,l)=>(r.push(l),"/([^\\/]+)"));return e.endsWith("*")?(r.push("*"),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function mC(e){try{return decodeURI(e)}catch(t){return Zp(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function gC(e,t){try{return decodeURIComponent(e)}catch(n){return Zp(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function Jp(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function vC(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?so(e):e;return{pathname:n?n.startsWith("/")?n:yC(n,t):t,search:bC(r),hash:wC(i)}}function yC(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Lc(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function ry(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function iy(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=so(e):(i=sa({},e),Le(!i.pathname||!i.pathname.includes("?"),Lc("?","pathname","search",i)),Le(!i.pathname||!i.pathname.includes("#"),Lc("#","pathname","hash",i)),Le(!i.search||!i.search.includes("#"),Lc("#","search","hash",i)));let o=e===""||i.pathname==="",a=o?"/":i.pathname,l;if(r||a==null)l=n;else{let c=t.length-1;if(a.startsWith("..")){let y=a.split("/");for(;y[0]==="..";)y.shift(),c-=1;i.pathname=y.join("/")}l=c>=0?t[c]:"/"}let s=vC(i,l),u=a&&a!=="/"&&a.endsWith("/"),d=(o||a===".")&&n.endsWith("/");return!s.pathname.endsWith("/")&&(u||d)&&(s.pathname+="/"),s}const pr=e=>e.join("/").replace(/\/\/+/g,"/"),xC=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),bC=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,wC=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function SC(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const oy=["post","put","patch","delete"];new Set(oy);const _C=["get",...oy];new Set(_C);/**
 * React Router v6.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ll(){return ll=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ll.apply(this,arguments)}const eh=b.createContext(null),CC=b.createContext(null),lo=b.createContext(null),cu=b.createContext(null),Kn=b.createContext({outlet:null,matches:[],isDataRoute:!1}),ay=b.createContext(null);function EC(e,t){let{relative:n}=t===void 0?{}:t;Aa()||Le(!1);let{basename:r,navigator:i}=b.useContext(lo),{hash:o,pathname:a,search:l}=uy(e,{relative:n}),s=a;return r!=="/"&&(s=a==="/"?r:pr([r,a])),i.createHref({pathname:s,search:l,hash:o})}function Aa(){return b.useContext(cu)!=null}function ri(){return Aa()||Le(!1),b.useContext(cu).location}function sy(e){b.useContext(lo).static||b.useLayoutEffect(e)}function On(){let{isDataRoute:e}=b.useContext(Kn);return e?NC():kC()}function kC(){Aa()||Le(!1);let e=b.useContext(eh),{basename:t,navigator:n}=b.useContext(lo),{matches:r}=b.useContext(Kn),{pathname:i}=ri(),o=JSON.stringify(ry(r).map(s=>s.pathnameBase)),a=b.useRef(!1);return sy(()=>{a.current=!0}),b.useCallback(function(s,u){if(u===void 0&&(u={}),!a.current)return;if(typeof s=="number"){n.go(s);return}let d=iy(s,JSON.parse(o),i,u.relative==="path");e==null&&t!=="/"&&(d.pathname=d.pathname==="/"?t:pr([t,d.pathname])),(u.replace?n.replace:n.push)(d,u.state,u)},[t,n,o,i,e])}const TC=b.createContext(null);function PC(e){let t=b.useContext(Kn).outlet;return t&&b.createElement(TC.Provider,{value:e},t)}function ly(){let{matches:e}=b.useContext(Kn),t=e[e.length-1];return t?t.params:{}}function uy(e,t){let{relative:n}=t===void 0?{}:t,{matches:r}=b.useContext(Kn),{pathname:i}=ri(),o=JSON.stringify(ry(r).map(a=>a.pathnameBase));return b.useMemo(()=>iy(e,JSON.parse(o),i,n==="path"),[e,o,i,n])}function OC(e,t){return jC(e,t)}function jC(e,t,n){Aa()||Le(!1);let{navigator:r}=b.useContext(lo),{matches:i}=b.useContext(Kn),o=i[i.length-1],a=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let s=ri(),u;if(t){var d;let g=typeof t=="string"?so(t):t;l==="/"||(d=g.pathname)!=null&&d.startsWith(l)||Le(!1),u=g}else u=s;let c=u.pathname||"/",y=l==="/"?c:c.slice(l.length)||"/",p=nC(e,{pathname:y}),m=LC(p&&p.map(g=>Object.assign({},g,{params:Object.assign({},a,g.params),pathname:pr([l,r.encodeLocation?r.encodeLocation(g.pathname).pathname:g.pathname]),pathnameBase:g.pathnameBase==="/"?l:pr([l,r.encodeLocation?r.encodeLocation(g.pathnameBase).pathname:g.pathnameBase])})),i,n);return t&&m?b.createElement(cu.Provider,{value:{location:ll({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:lr.Pop}},m):m}function MC(){let e=zC(),t=SC(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},o=null;return b.createElement(b.Fragment,null,b.createElement("h2",null,"Unexpected Application Error!"),b.createElement("h3",{style:{fontStyle:"italic"}},t),n?b.createElement("pre",{style:i},n):null,o)}const $C=b.createElement(MC,null);class IC extends b.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error||n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?b.createElement(Kn.Provider,{value:this.props.routeContext},b.createElement(ay.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function DC(e){let{routeContext:t,match:n,children:r}=e,i=b.useContext(eh);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),b.createElement(Kn.Provider,{value:t},r)}function LC(e,t,n){var r;if(t===void 0&&(t=[]),n===void 0&&(n=null),e==null){var i;if((i=n)!=null&&i.errors)e=n.matches;else return null}let o=e,a=(r=n)==null?void 0:r.errors;if(a!=null){let l=o.findIndex(s=>s.route.id&&(a==null?void 0:a[s.route.id]));l>=0||Le(!1),o=o.slice(0,Math.min(o.length,l+1))}return o.reduceRight((l,s,u)=>{let d=s.route.id?a==null?void 0:a[s.route.id]:null,c=null;n&&(c=s.route.errorElement||$C);let y=t.concat(o.slice(0,u+1)),p=()=>{let m;return d?m=c:s.route.Component?m=b.createElement(s.route.Component,null):s.route.element?m=s.route.element:m=l,b.createElement(DC,{match:s,routeContext:{outlet:l,matches:y,isDataRoute:n!=null},children:m})};return n&&(s.route.ErrorBoundary||s.route.errorElement||u===0)?b.createElement(IC,{location:n.location,revalidation:n.revalidation,component:c,error:d,children:p(),routeContext:{outlet:null,matches:y,isDataRoute:!0}}):p()},null)}var cy=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(cy||{}),ul=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(ul||{});function AC(e){let t=b.useContext(eh);return t||Le(!1),t}function RC(e){let t=b.useContext(CC);return t||Le(!1),t}function FC(e){let t=b.useContext(Kn);return t||Le(!1),t}function dy(e){let t=FC(),n=t.matches[t.matches.length-1];return n.route.id||Le(!1),n.route.id}function zC(){var e;let t=b.useContext(ay),n=RC(ul.UseRouteError),r=dy(ul.UseRouteError);return t||((e=n.errors)==null?void 0:e[r])}function NC(){let{router:e}=AC(cy.UseNavigateStable),t=dy(ul.UseNavigateStable),n=b.useRef(!1);return sy(()=>{n.current=!0}),b.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,ll({fromRouteId:t},o)))},[e,t])}function BC(e){return PC(e.context)}function rt(e){Le(!1)}function VC(e){let{basename:t="/",children:n=null,location:r,navigationType:i=lr.Pop,navigator:o,static:a=!1}=e;Aa()&&Le(!1);let l=t.replace(/^\/*/,"/"),s=b.useMemo(()=>({basename:l,navigator:o,static:a}),[l,o,a]);typeof r=="string"&&(r=so(r));let{pathname:u="/",search:d="",hash:c="",state:y=null,key:p="default"}=r,m=b.useMemo(()=>{let g=Jp(u,l);return g==null?null:{location:{pathname:g,search:d,hash:c,state:y,key:p},navigationType:i}},[l,u,d,c,y,p,i]);return m==null?null:b.createElement(lo.Provider,{value:s},b.createElement(cu.Provider,{children:n,value:m}))}function UC(e){let{children:t,location:n}=e;return OC(uf(t),n)}new Promise(()=>{});function uf(e,t){t===void 0&&(t=[]);let n=[];return b.Children.forEach(e,(r,i)=>{if(!b.isValidElement(r))return;let o=[...t,i];if(r.type===b.Fragment){n.push.apply(n,uf(r.props.children,o));return}r.type!==rt&&Le(!1),!r.props.index||!r.props.children||Le(!1);let a={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(a.children=uf(r.props.children,o)),n.push(a)}),n}/**
 * React Router DOM v6.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function cf(){return cf=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},cf.apply(this,arguments)}function HC(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function WC(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function GC(e,t){return e.button===0&&(!t||t==="_self")&&!WC(e)}function df(e){return e===void 0&&(e=""),new URLSearchParams(typeof e=="string"||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce((t,n)=>{let r=e[n];return t.concat(Array.isArray(r)?r.map(i=>[n,i]):[[n,r]])},[]))}function YC(e,t){let n=df(e);return t&&t.forEach((r,i)=>{n.has(i)||t.getAll(i).forEach(o=>{n.append(i,o)})}),n}const qC=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],XC="startTransition",ug=sf[XC];function KC(e){let{basename:t,children:n,future:r,window:i}=e,o=b.useRef();o.current==null&&(o.current=J_({window:i,v5Compat:!0}));let a=o.current,[l,s]=b.useState({action:a.action,location:a.location}),{v7_startTransition:u}=r||{},d=b.useCallback(c=>{u&&ug?ug(()=>s(c)):s(c)},[s,u]);return b.useLayoutEffect(()=>a.listen(d),[a,d]),b.createElement(VC,{basename:t,children:n,location:l.location,navigationType:l.action,navigator:a})}const QC=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",ZC=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Oe=b.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:o,replace:a,state:l,target:s,to:u,preventScrollReset:d}=t,c=HC(t,qC),{basename:y}=b.useContext(lo),p,m=!1;if(typeof u=="string"&&ZC.test(u)&&(p=u,QC))try{let v=new URL(window.location.href),x=u.startsWith("//")?new URL(v.protocol+u):new URL(u),S=Jp(x.pathname,y);x.origin===v.origin&&S!=null?u=S+x.search+x.hash:m=!0}catch{}let g=EC(u,{relative:i}),w=JC(u,{replace:a,state:l,target:s,preventScrollReset:d,relative:i});function h(v){r&&r(v),v.defaultPrevented||w(v)}return b.createElement("a",cf({},c,{href:p||g,onClick:m||o?r:h,ref:n,target:s}))});var cg;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher"})(cg||(cg={}));var dg;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(dg||(dg={}));function JC(e,t){let{target:n,replace:r,state:i,preventScrollReset:o,relative:a}=t===void 0?{}:t,l=On(),s=ri(),u=uy(e,{relative:a});return b.useCallback(d=>{if(GC(d,n)){d.preventDefault();let c=r!==void 0?r:sl(s)===sl(u);l(e,{replace:c,state:i,preventScrollReset:o,relative:a})}},[s,l,u,r,i,n,e,o,a])}function eE(e){let t=b.useRef(df(e)),n=b.useRef(!1),r=ri(),i=b.useMemo(()=>YC(r.search,n.current?null:t.current),[r.search]),o=On(),a=b.useCallback((l,s)=>{const u=df(typeof l=="function"?l(i):l);n.current=!0,o("?"+u,s)},[o,i]);return[i,a]}var ff={},fy={exports:{}},zt={},py={exports:{}},hy={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(T,I){var z=T.length;T.push(I);e:for(;0<z;){var B=z-1>>>1,N=T[B];if(0<i(N,I))T[B]=I,T[z]=N,z=B;else break e}}function n(T){return T.length===0?null:T[0]}function r(T){if(T.length===0)return null;var I=T[0],z=T.pop();if(z!==I){T[0]=z;e:for(var B=0,N=T.length,U=N>>>1;B<U;){var G=2*(B+1)-1,H=T[G],X=G+1,ee=T[X];if(0>i(H,z))X<N&&0>i(ee,H)?(T[B]=ee,T[X]=z,B=X):(T[B]=H,T[G]=z,B=G);else if(X<N&&0>i(ee,z))T[B]=ee,T[X]=z,B=X;else break e}}return I}function i(T,I){var z=T.sortIndex-I.sortIndex;return z!==0?z:T.id-I.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var a=Date,l=a.now();e.unstable_now=function(){return a.now()-l}}var s=[],u=[],d=1,c=null,y=3,p=!1,m=!1,g=!1,w=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(T){for(var I=n(u);I!==null;){if(I.callback===null)r(u);else if(I.startTime<=T)r(u),I.sortIndex=I.expirationTime,t(s,I);else break;I=n(u)}}function S(T){if(g=!1,x(T),!m)if(n(s)!==null)m=!0,L(E);else{var I=n(u);I!==null&&O(S,I.startTime-T)}}function E(T,I){m=!1,g&&(g=!1,h(_),_=-1),p=!0;var z=y;try{for(x(I),c=n(s);c!==null&&(!(c.expirationTime>I)||T&&!D());){var B=c.callback;if(typeof B=="function"){c.callback=null,y=c.priorityLevel;var N=B(c.expirationTime<=I);I=e.unstable_now(),typeof N=="function"?c.callback=N:c===n(s)&&r(s),x(I)}else r(s);c=n(s)}if(c!==null)var U=!0;else{var G=n(u);G!==null&&O(S,G.startTime-I),U=!1}return U}finally{c=null,y=z,p=!1}}var P=!1,k=null,_=-1,M=5,$=-1;function D(){return!(e.unstable_now()-$<M)}function A(){if(k!==null){var T=e.unstable_now();$=T;var I=!0;try{I=k(!0,T)}finally{I?j():(P=!1,k=null)}}else P=!1}var j;if(typeof v=="function")j=function(){v(A)};else if(typeof MessageChannel<"u"){var F=new MessageChannel,R=F.port2;F.port1.onmessage=A,j=function(){R.postMessage(null)}}else j=function(){w(A,0)};function L(T){k=T,P||(P=!0,j())}function O(T,I){_=w(function(){T(e.unstable_now())},I)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(T){T.callback=null},e.unstable_continueExecution=function(){m||p||(m=!0,L(E))},e.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<T?Math.floor(1e3/T):5},e.unstable_getCurrentPriorityLevel=function(){return y},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(T){switch(y){case 1:case 2:case 3:var I=3;break;default:I=y}var z=y;y=I;try{return T()}finally{y=z}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(T,I){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var z=y;y=T;try{return I()}finally{y=z}},e.unstable_scheduleCallback=function(T,I,z){var B=e.unstable_now();switch(typeof z=="object"&&z!==null?(z=z.delay,z=typeof z=="number"&&0<z?B+z:B):z=B,T){case 1:var N=-1;break;case 2:N=250;break;case 5:N=1073741823;break;case 4:N=1e4;break;default:N=5e3}return N=z+N,T={id:d++,callback:I,priorityLevel:T,startTime:z,expirationTime:N,sortIndex:-1},z>B?(T.sortIndex=z,t(u,T),n(s)===null&&T===n(u)&&(g?(h(_),_=-1):g=!0,O(S,z-B))):(T.sortIndex=N,t(s,T),m||p||(m=!0,L(E))),T},e.unstable_shouldYield=D,e.unstable_wrapCallback=function(T){var I=y;return function(){var z=y;y=I;try{return T.apply(this,arguments)}finally{y=z}}}})(hy);py.exports=hy;var tE=py.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var my=b,Rt=tE;function V(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var gy=new Set,la={};function ii(e,t){Ui(e,t),Ui(e+"Capture",t)}function Ui(e,t){for(la[e]=t,e=0;e<t.length;e++)gy.add(t[e])}var Hn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),pf=Object.prototype.hasOwnProperty,nE=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,fg={},pg={};function rE(e){return pf.call(pg,e)?!0:pf.call(fg,e)?!1:nE.test(e)?pg[e]=!0:(fg[e]=!0,!1)}function iE(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function oE(e,t,n,r){if(t===null||typeof t>"u"||iE(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function gt(e,t,n,r,i,o,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=a}var Je={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Je[e]=new gt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Je[t]=new gt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Je[e]=new gt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Je[e]=new gt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Je[e]=new gt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Je[e]=new gt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Je[e]=new gt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Je[e]=new gt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Je[e]=new gt(e,5,!1,e.toLowerCase(),null,!1,!1)});var th=/[\-:]([a-z])/g;function nh(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(th,nh);Je[t]=new gt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(th,nh);Je[t]=new gt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(th,nh);Je[t]=new gt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Je[e]=new gt(e,1,!1,e.toLowerCase(),null,!1,!1)});Je.xlinkHref=new gt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Je[e]=new gt(e,1,!1,e.toLowerCase(),null,!0,!0)});function rh(e,t,n,r){var i=Je.hasOwnProperty(t)?Je[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(oE(t,n,i,r)&&(n=null),r||i===null?rE(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Qn=my.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ns=Symbol.for("react.element"),Si=Symbol.for("react.portal"),_i=Symbol.for("react.fragment"),ih=Symbol.for("react.strict_mode"),hf=Symbol.for("react.profiler"),vy=Symbol.for("react.provider"),yy=Symbol.for("react.context"),oh=Symbol.for("react.forward_ref"),mf=Symbol.for("react.suspense"),gf=Symbol.for("react.suspense_list"),ah=Symbol.for("react.memo"),ir=Symbol.for("react.lazy"),xy=Symbol.for("react.offscreen"),hg=Symbol.iterator;function Co(e){return e===null||typeof e!="object"?null:(e=hg&&e[hg]||e["@@iterator"],typeof e=="function"?e:null)}var ke=Object.assign,Ac;function zo(e){if(Ac===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Ac=t&&t[1]||""}return`
`+Ac+e}var Rc=!1;function Fc(e,t){if(!e||Rc)return"";Rc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),a=i.length-1,l=o.length-1;1<=a&&0<=l&&i[a]!==o[l];)l--;for(;1<=a&&0<=l;a--,l--)if(i[a]!==o[l]){if(a!==1||l!==1)do if(a--,l--,0>l||i[a]!==o[l]){var s=`
`+i[a].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=a&&0<=l);break}}}finally{Rc=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?zo(e):""}function aE(e){switch(e.tag){case 5:return zo(e.type);case 16:return zo("Lazy");case 13:return zo("Suspense");case 19:return zo("SuspenseList");case 0:case 2:case 15:return e=Fc(e.type,!1),e;case 11:return e=Fc(e.type.render,!1),e;case 1:return e=Fc(e.type,!0),e;default:return""}}function vf(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case _i:return"Fragment";case Si:return"Portal";case hf:return"Profiler";case ih:return"StrictMode";case mf:return"Suspense";case gf:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case yy:return(e.displayName||"Context")+".Consumer";case vy:return(e._context.displayName||"Context")+".Provider";case oh:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ah:return t=e.displayName||null,t!==null?t:vf(e.type)||"Memo";case ir:t=e._payload,e=e._init;try{return vf(e(t))}catch{}}return null}function sE(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return vf(t);case 8:return t===ih?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function _r(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function by(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function lE(e){var t=by(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(a){r=""+a,o.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function rs(e){e._valueTracker||(e._valueTracker=lE(e))}function wy(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=by(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function cl(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function yf(e,t){var n=t.checked;return ke({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function mg(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=_r(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Sy(e,t){t=t.checked,t!=null&&rh(e,"checked",t,!1)}function xf(e,t){Sy(e,t);var n=_r(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?bf(e,t.type,n):t.hasOwnProperty("defaultValue")&&bf(e,t.type,_r(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function gg(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function bf(e,t,n){(t!=="number"||cl(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var No=Array.isArray;function Di(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+_r(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function wf(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(V(91));return ke({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function vg(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(V(92));if(No(n)){if(1<n.length)throw Error(V(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:_r(n)}}function _y(e,t){var n=_r(t.value),r=_r(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function yg(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Cy(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Sf(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Cy(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var is,Ey=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(is=is||document.createElement("div"),is.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=is.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function ua(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var qo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},uE=["Webkit","ms","Moz","O"];Object.keys(qo).forEach(function(e){uE.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),qo[t]=qo[e]})});function ky(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||qo.hasOwnProperty(e)&&qo[e]?(""+t).trim():t+"px"}function Ty(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=ky(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var cE=ke({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function _f(e,t){if(t){if(cE[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(V(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(V(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(V(61))}if(t.style!=null&&typeof t.style!="object")throw Error(V(62))}}function Cf(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ef=null;function sh(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var kf=null,Li=null,Ai=null;function xg(e){if(e=za(e)){if(typeof kf!="function")throw Error(V(280));var t=e.stateNode;t&&(t=mu(t),kf(e.stateNode,e.type,t))}}function Py(e){Li?Ai?Ai.push(e):Ai=[e]:Li=e}function Oy(){if(Li){var e=Li,t=Ai;if(Ai=Li=null,xg(e),t)for(e=0;e<t.length;e++)xg(t[e])}}function jy(e,t){return e(t)}function My(){}var zc=!1;function $y(e,t,n){if(zc)return e(t,n);zc=!0;try{return jy(e,t,n)}finally{zc=!1,(Li!==null||Ai!==null)&&(My(),Oy())}}function ca(e,t){var n=e.stateNode;if(n===null)return null;var r=mu(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(V(231,t,typeof n));return n}var Tf=!1;if(Hn)try{var Eo={};Object.defineProperty(Eo,"passive",{get:function(){Tf=!0}}),window.addEventListener("test",Eo,Eo),window.removeEventListener("test",Eo,Eo)}catch{Tf=!1}function dE(e,t,n,r,i,o,a,l,s){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(d){this.onError(d)}}var Xo=!1,dl=null,fl=!1,Pf=null,fE={onError:function(e){Xo=!0,dl=e}};function pE(e,t,n,r,i,o,a,l,s){Xo=!1,dl=null,dE.apply(fE,arguments)}function hE(e,t,n,r,i,o,a,l,s){if(pE.apply(this,arguments),Xo){if(Xo){var u=dl;Xo=!1,dl=null}else throw Error(V(198));fl||(fl=!0,Pf=u)}}function oi(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Iy(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function bg(e){if(oi(e)!==e)throw Error(V(188))}function mE(e){var t=e.alternate;if(!t){if(t=oi(e),t===null)throw Error(V(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return bg(i),e;if(o===r)return bg(i),t;o=o.sibling}throw Error(V(188))}if(n.return!==r.return)n=i,r=o;else{for(var a=!1,l=i.child;l;){if(l===n){a=!0,n=i,r=o;break}if(l===r){a=!0,r=i,n=o;break}l=l.sibling}if(!a){for(l=o.child;l;){if(l===n){a=!0,n=o,r=i;break}if(l===r){a=!0,r=o,n=i;break}l=l.sibling}if(!a)throw Error(V(189))}}if(n.alternate!==r)throw Error(V(190))}if(n.tag!==3)throw Error(V(188));return n.stateNode.current===n?e:t}function Dy(e){return e=mE(e),e!==null?Ly(e):null}function Ly(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Ly(e);if(t!==null)return t;e=e.sibling}return null}var Ay=Rt.unstable_scheduleCallback,wg=Rt.unstable_cancelCallback,gE=Rt.unstable_shouldYield,vE=Rt.unstable_requestPaint,je=Rt.unstable_now,yE=Rt.unstable_getCurrentPriorityLevel,lh=Rt.unstable_ImmediatePriority,Ry=Rt.unstable_UserBlockingPriority,pl=Rt.unstable_NormalPriority,xE=Rt.unstable_LowPriority,Fy=Rt.unstable_IdlePriority,du=null,_n=null;function bE(e){if(_n&&typeof _n.onCommitFiberRoot=="function")try{_n.onCommitFiberRoot(du,e,void 0,(e.current.flags&128)===128)}catch{}}var sn=Math.clz32?Math.clz32:_E,wE=Math.log,SE=Math.LN2;function _E(e){return e>>>=0,e===0?32:31-(wE(e)/SE|0)|0}var os=64,as=4194304;function Bo(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function hl(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,a=n&268435455;if(a!==0){var l=a&~i;l!==0?r=Bo(l):(o&=a,o!==0&&(r=Bo(o)))}else a=n&~i,a!==0?r=Bo(a):o!==0&&(r=Bo(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-sn(t),i=1<<n,r|=e[n],t&=~i;return r}function CE(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function EE(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var a=31-sn(o),l=1<<a,s=i[a];s===-1?(!(l&n)||l&r)&&(i[a]=CE(l,t)):s<=t&&(e.expiredLanes|=l),o&=~l}}function Of(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function zy(){var e=os;return os<<=1,!(os&4194240)&&(os=64),e}function Nc(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ra(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-sn(t),e[t]=n}function kE(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-sn(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function uh(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-sn(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var he=0;function Ny(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var By,ch,Vy,Uy,Hy,jf=!1,ss=[],hr=null,mr=null,gr=null,da=new Map,fa=new Map,ar=[],TE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Sg(e,t){switch(e){case"focusin":case"focusout":hr=null;break;case"dragenter":case"dragleave":mr=null;break;case"mouseover":case"mouseout":gr=null;break;case"pointerover":case"pointerout":da.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":fa.delete(t.pointerId)}}function ko(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=za(t),t!==null&&ch(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function PE(e,t,n,r,i){switch(t){case"focusin":return hr=ko(hr,e,t,n,r,i),!0;case"dragenter":return mr=ko(mr,e,t,n,r,i),!0;case"mouseover":return gr=ko(gr,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return da.set(o,ko(da.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,fa.set(o,ko(fa.get(o)||null,e,t,n,r,i)),!0}return!1}function Wy(e){var t=Nr(e.target);if(t!==null){var n=oi(t);if(n!==null){if(t=n.tag,t===13){if(t=Iy(n),t!==null){e.blockedOn=t,Hy(e.priority,function(){Vy(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ls(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Mf(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Ef=r,n.target.dispatchEvent(r),Ef=null}else return t=za(n),t!==null&&ch(t),e.blockedOn=n,!1;t.shift()}return!0}function _g(e,t,n){Ls(e)&&n.delete(t)}function OE(){jf=!1,hr!==null&&Ls(hr)&&(hr=null),mr!==null&&Ls(mr)&&(mr=null),gr!==null&&Ls(gr)&&(gr=null),da.forEach(_g),fa.forEach(_g)}function To(e,t){e.blockedOn===t&&(e.blockedOn=null,jf||(jf=!0,Rt.unstable_scheduleCallback(Rt.unstable_NormalPriority,OE)))}function pa(e){function t(i){return To(i,e)}if(0<ss.length){To(ss[0],e);for(var n=1;n<ss.length;n++){var r=ss[n];r.blockedOn===e&&(r.blockedOn=null)}}for(hr!==null&&To(hr,e),mr!==null&&To(mr,e),gr!==null&&To(gr,e),da.forEach(t),fa.forEach(t),n=0;n<ar.length;n++)r=ar[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<ar.length&&(n=ar[0],n.blockedOn===null);)Wy(n),n.blockedOn===null&&ar.shift()}var Ri=Qn.ReactCurrentBatchConfig,ml=!0;function jE(e,t,n,r){var i=he,o=Ri.transition;Ri.transition=null;try{he=1,dh(e,t,n,r)}finally{he=i,Ri.transition=o}}function ME(e,t,n,r){var i=he,o=Ri.transition;Ri.transition=null;try{he=4,dh(e,t,n,r)}finally{he=i,Ri.transition=o}}function dh(e,t,n,r){if(ml){var i=Mf(e,t,n,r);if(i===null)Kc(e,t,r,gl,n),Sg(e,r);else if(PE(i,e,t,n,r))r.stopPropagation();else if(Sg(e,r),t&4&&-1<TE.indexOf(e)){for(;i!==null;){var o=za(i);if(o!==null&&By(o),o=Mf(e,t,n,r),o===null&&Kc(e,t,r,gl,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else Kc(e,t,r,null,n)}}var gl=null;function Mf(e,t,n,r){if(gl=null,e=sh(r),e=Nr(e),e!==null)if(t=oi(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Iy(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return gl=e,null}function Gy(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(yE()){case lh:return 1;case Ry:return 4;case pl:case xE:return 16;case Fy:return 536870912;default:return 16}default:return 16}}var ur=null,fh=null,As=null;function Yy(){if(As)return As;var e,t=fh,n=t.length,r,i="value"in ur?ur.value:ur.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===i[o-r];r++);return As=i.slice(e,1<r?1-r:void 0)}function Rs(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ls(){return!0}function Cg(){return!1}function Nt(e){function t(n,r,i,o,a){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=a,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(o):o[l]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?ls:Cg,this.isPropagationStopped=Cg,this}return ke(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ls)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ls)},persist:function(){},isPersistent:ls}),t}var uo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ph=Nt(uo),Fa=ke({},uo,{view:0,detail:0}),$E=Nt(Fa),Bc,Vc,Po,fu=ke({},Fa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:hh,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Po&&(Po&&e.type==="mousemove"?(Bc=e.screenX-Po.screenX,Vc=e.screenY-Po.screenY):Vc=Bc=0,Po=e),Bc)},movementY:function(e){return"movementY"in e?e.movementY:Vc}}),Eg=Nt(fu),IE=ke({},fu,{dataTransfer:0}),DE=Nt(IE),LE=ke({},Fa,{relatedTarget:0}),Uc=Nt(LE),AE=ke({},uo,{animationName:0,elapsedTime:0,pseudoElement:0}),RE=Nt(AE),FE=ke({},uo,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),zE=Nt(FE),NE=ke({},uo,{data:0}),kg=Nt(NE),BE={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},VE={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},UE={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function HE(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=UE[e])?!!t[e]:!1}function hh(){return HE}var WE=ke({},Fa,{key:function(e){if(e.key){var t=BE[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Rs(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?VE[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:hh,charCode:function(e){return e.type==="keypress"?Rs(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Rs(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),GE=Nt(WE),YE=ke({},fu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Tg=Nt(YE),qE=ke({},Fa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:hh}),XE=Nt(qE),KE=ke({},uo,{propertyName:0,elapsedTime:0,pseudoElement:0}),QE=Nt(KE),ZE=ke({},fu,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),JE=Nt(ZE),ek=[9,13,27,32],mh=Hn&&"CompositionEvent"in window,Ko=null;Hn&&"documentMode"in document&&(Ko=document.documentMode);var tk=Hn&&"TextEvent"in window&&!Ko,qy=Hn&&(!mh||Ko&&8<Ko&&11>=Ko),Pg=String.fromCharCode(32),Og=!1;function Xy(e,t){switch(e){case"keyup":return ek.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ky(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ci=!1;function nk(e,t){switch(e){case"compositionend":return Ky(t);case"keypress":return t.which!==32?null:(Og=!0,Pg);case"textInput":return e=t.data,e===Pg&&Og?null:e;default:return null}}function rk(e,t){if(Ci)return e==="compositionend"||!mh&&Xy(e,t)?(e=Yy(),As=fh=ur=null,Ci=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return qy&&t.locale!=="ko"?null:t.data;default:return null}}var ik={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function jg(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!ik[e.type]:t==="textarea"}function Qy(e,t,n,r){Py(r),t=vl(t,"onChange"),0<t.length&&(n=new ph("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Qo=null,ha=null;function ok(e){lx(e,0)}function pu(e){var t=Ti(e);if(wy(t))return e}function ak(e,t){if(e==="change")return t}var Zy=!1;if(Hn){var Hc;if(Hn){var Wc="oninput"in document;if(!Wc){var Mg=document.createElement("div");Mg.setAttribute("oninput","return;"),Wc=typeof Mg.oninput=="function"}Hc=Wc}else Hc=!1;Zy=Hc&&(!document.documentMode||9<document.documentMode)}function $g(){Qo&&(Qo.detachEvent("onpropertychange",Jy),ha=Qo=null)}function Jy(e){if(e.propertyName==="value"&&pu(ha)){var t=[];Qy(t,ha,e,sh(e)),$y(ok,t)}}function sk(e,t,n){e==="focusin"?($g(),Qo=t,ha=n,Qo.attachEvent("onpropertychange",Jy)):e==="focusout"&&$g()}function lk(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return pu(ha)}function uk(e,t){if(e==="click")return pu(t)}function ck(e,t){if(e==="input"||e==="change")return pu(t)}function dk(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var fn=typeof Object.is=="function"?Object.is:dk;function ma(e,t){if(fn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!pf.call(t,i)||!fn(e[i],t[i]))return!1}return!0}function Ig(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Dg(e,t){var n=Ig(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ig(n)}}function ex(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?ex(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function tx(){for(var e=window,t=cl();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=cl(e.document)}return t}function gh(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function fk(e){var t=tx(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&ex(n.ownerDocument.documentElement,n)){if(r!==null&&gh(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=Dg(n,o);var a=Dg(n,r);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var pk=Hn&&"documentMode"in document&&11>=document.documentMode,Ei=null,$f=null,Zo=null,If=!1;function Lg(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;If||Ei==null||Ei!==cl(r)||(r=Ei,"selectionStart"in r&&gh(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Zo&&ma(Zo,r)||(Zo=r,r=vl($f,"onSelect"),0<r.length&&(t=new ph("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Ei)))}function us(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var ki={animationend:us("Animation","AnimationEnd"),animationiteration:us("Animation","AnimationIteration"),animationstart:us("Animation","AnimationStart"),transitionend:us("Transition","TransitionEnd")},Gc={},nx={};Hn&&(nx=document.createElement("div").style,"AnimationEvent"in window||(delete ki.animationend.animation,delete ki.animationiteration.animation,delete ki.animationstart.animation),"TransitionEvent"in window||delete ki.transitionend.transition);function hu(e){if(Gc[e])return Gc[e];if(!ki[e])return e;var t=ki[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in nx)return Gc[e]=t[n];return e}var rx=hu("animationend"),ix=hu("animationiteration"),ox=hu("animationstart"),ax=hu("transitionend"),sx=new Map,Ag="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function kr(e,t){sx.set(e,t),ii(t,[e])}for(var Yc=0;Yc<Ag.length;Yc++){var qc=Ag[Yc],hk=qc.toLowerCase(),mk=qc[0].toUpperCase()+qc.slice(1);kr(hk,"on"+mk)}kr(rx,"onAnimationEnd");kr(ix,"onAnimationIteration");kr(ox,"onAnimationStart");kr("dblclick","onDoubleClick");kr("focusin","onFocus");kr("focusout","onBlur");kr(ax,"onTransitionEnd");Ui("onMouseEnter",["mouseout","mouseover"]);Ui("onMouseLeave",["mouseout","mouseover"]);Ui("onPointerEnter",["pointerout","pointerover"]);Ui("onPointerLeave",["pointerout","pointerover"]);ii("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ii("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ii("onBeforeInput",["compositionend","keypress","textInput","paste"]);ii("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ii("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ii("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Vo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),gk=new Set("cancel close invalid load scroll toggle".split(" ").concat(Vo));function Rg(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,hE(r,t,void 0,e),e.currentTarget=null}function lx(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var a=r.length-1;0<=a;a--){var l=r[a],s=l.instance,u=l.currentTarget;if(l=l.listener,s!==o&&i.isPropagationStopped())break e;Rg(i,l,u),o=s}else for(a=0;a<r.length;a++){if(l=r[a],s=l.instance,u=l.currentTarget,l=l.listener,s!==o&&i.isPropagationStopped())break e;Rg(i,l,u),o=s}}}if(fl)throw e=Pf,fl=!1,Pf=null,e}function ve(e,t){var n=t[Ff];n===void 0&&(n=t[Ff]=new Set);var r=e+"__bubble";n.has(r)||(ux(t,e,2,!1),n.add(r))}function Xc(e,t,n){var r=0;t&&(r|=4),ux(n,e,r,t)}var cs="_reactListening"+Math.random().toString(36).slice(2);function ga(e){if(!e[cs]){e[cs]=!0,gy.forEach(function(n){n!=="selectionchange"&&(gk.has(n)||Xc(n,!1,e),Xc(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[cs]||(t[cs]=!0,Xc("selectionchange",!1,t))}}function ux(e,t,n,r){switch(Gy(t)){case 1:var i=jE;break;case 4:i=ME;break;default:i=dh}n=i.bind(null,t,n,e),i=void 0,!Tf||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Kc(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(a===4)for(a=r.return;a!==null;){var s=a.tag;if((s===3||s===4)&&(s=a.stateNode.containerInfo,s===i||s.nodeType===8&&s.parentNode===i))return;a=a.return}for(;l!==null;){if(a=Nr(l),a===null)return;if(s=a.tag,s===5||s===6){r=o=a;continue e}l=l.parentNode}}r=r.return}$y(function(){var u=o,d=sh(n),c=[];e:{var y=sx.get(e);if(y!==void 0){var p=ph,m=e;switch(e){case"keypress":if(Rs(n)===0)break e;case"keydown":case"keyup":p=GE;break;case"focusin":m="focus",p=Uc;break;case"focusout":m="blur",p=Uc;break;case"beforeblur":case"afterblur":p=Uc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Eg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=DE;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=XE;break;case rx:case ix:case ox:p=RE;break;case ax:p=QE;break;case"scroll":p=$E;break;case"wheel":p=JE;break;case"copy":case"cut":case"paste":p=zE;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Tg}var g=(t&4)!==0,w=!g&&e==="scroll",h=g?y!==null?y+"Capture":null:y;g=[];for(var v=u,x;v!==null;){x=v;var S=x.stateNode;if(x.tag===5&&S!==null&&(x=S,h!==null&&(S=ca(v,h),S!=null&&g.push(va(v,S,x)))),w)break;v=v.return}0<g.length&&(y=new p(y,m,null,n,d),c.push({event:y,listeners:g}))}}if(!(t&7)){e:{if(y=e==="mouseover"||e==="pointerover",p=e==="mouseout"||e==="pointerout",y&&n!==Ef&&(m=n.relatedTarget||n.fromElement)&&(Nr(m)||m[Wn]))break e;if((p||y)&&(y=d.window===d?d:(y=d.ownerDocument)?y.defaultView||y.parentWindow:window,p?(m=n.relatedTarget||n.toElement,p=u,m=m?Nr(m):null,m!==null&&(w=oi(m),m!==w||m.tag!==5&&m.tag!==6)&&(m=null)):(p=null,m=u),p!==m)){if(g=Eg,S="onMouseLeave",h="onMouseEnter",v="mouse",(e==="pointerout"||e==="pointerover")&&(g=Tg,S="onPointerLeave",h="onPointerEnter",v="pointer"),w=p==null?y:Ti(p),x=m==null?y:Ti(m),y=new g(S,v+"leave",p,n,d),y.target=w,y.relatedTarget=x,S=null,Nr(d)===u&&(g=new g(h,v+"enter",m,n,d),g.target=x,g.relatedTarget=w,S=g),w=S,p&&m)t:{for(g=p,h=m,v=0,x=g;x;x=ui(x))v++;for(x=0,S=h;S;S=ui(S))x++;for(;0<v-x;)g=ui(g),v--;for(;0<x-v;)h=ui(h),x--;for(;v--;){if(g===h||h!==null&&g===h.alternate)break t;g=ui(g),h=ui(h)}g=null}else g=null;p!==null&&Fg(c,y,p,g,!1),m!==null&&w!==null&&Fg(c,w,m,g,!0)}}e:{if(y=u?Ti(u):window,p=y.nodeName&&y.nodeName.toLowerCase(),p==="select"||p==="input"&&y.type==="file")var E=ak;else if(jg(y))if(Zy)E=ck;else{E=lk;var P=sk}else(p=y.nodeName)&&p.toLowerCase()==="input"&&(y.type==="checkbox"||y.type==="radio")&&(E=uk);if(E&&(E=E(e,u))){Qy(c,E,n,d);break e}P&&P(e,y,u),e==="focusout"&&(P=y._wrapperState)&&P.controlled&&y.type==="number"&&bf(y,"number",y.value)}switch(P=u?Ti(u):window,e){case"focusin":(jg(P)||P.contentEditable==="true")&&(Ei=P,$f=u,Zo=null);break;case"focusout":Zo=$f=Ei=null;break;case"mousedown":If=!0;break;case"contextmenu":case"mouseup":case"dragend":If=!1,Lg(c,n,d);break;case"selectionchange":if(pk)break;case"keydown":case"keyup":Lg(c,n,d)}var k;if(mh)e:{switch(e){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else Ci?Xy(e,n)&&(_="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(_="onCompositionStart");_&&(qy&&n.locale!=="ko"&&(Ci||_!=="onCompositionStart"?_==="onCompositionEnd"&&Ci&&(k=Yy()):(ur=d,fh="value"in ur?ur.value:ur.textContent,Ci=!0)),P=vl(u,_),0<P.length&&(_=new kg(_,e,null,n,d),c.push({event:_,listeners:P}),k?_.data=k:(k=Ky(n),k!==null&&(_.data=k)))),(k=tk?nk(e,n):rk(e,n))&&(u=vl(u,"onBeforeInput"),0<u.length&&(d=new kg("onBeforeInput","beforeinput",null,n,d),c.push({event:d,listeners:u}),d.data=k))}lx(c,t)})}function va(e,t,n){return{instance:e,listener:t,currentTarget:n}}function vl(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=ca(e,n),o!=null&&r.unshift(va(e,o,i)),o=ca(e,t),o!=null&&r.push(va(e,o,i))),e=e.return}return r}function ui(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Fg(e,t,n,r,i){for(var o=t._reactName,a=[];n!==null&&n!==r;){var l=n,s=l.alternate,u=l.stateNode;if(s!==null&&s===r)break;l.tag===5&&u!==null&&(l=u,i?(s=ca(n,o),s!=null&&a.unshift(va(n,s,l))):i||(s=ca(n,o),s!=null&&a.push(va(n,s,l)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var vk=/\r\n?/g,yk=/\u0000|\uFFFD/g;function zg(e){return(typeof e=="string"?e:""+e).replace(vk,`
`).replace(yk,"")}function ds(e,t,n){if(t=zg(t),zg(e)!==t&&n)throw Error(V(425))}function yl(){}var Df=null,Lf=null;function Af(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Rf=typeof setTimeout=="function"?setTimeout:void 0,xk=typeof clearTimeout=="function"?clearTimeout:void 0,Ng=typeof Promise=="function"?Promise:void 0,bk=typeof queueMicrotask=="function"?queueMicrotask:typeof Ng<"u"?function(e){return Ng.resolve(null).then(e).catch(wk)}:Rf;function wk(e){setTimeout(function(){throw e})}function Qc(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),pa(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);pa(t)}function vr(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Bg(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var co=Math.random().toString(36).slice(2),wn="__reactFiber$"+co,ya="__reactProps$"+co,Wn="__reactContainer$"+co,Ff="__reactEvents$"+co,Sk="__reactListeners$"+co,_k="__reactHandles$"+co;function Nr(e){var t=e[wn];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Wn]||n[wn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Bg(e);e!==null;){if(n=e[wn])return n;e=Bg(e)}return t}e=n,n=e.parentNode}return null}function za(e){return e=e[wn]||e[Wn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Ti(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(V(33))}function mu(e){return e[ya]||null}var zf=[],Pi=-1;function Tr(e){return{current:e}}function xe(e){0>Pi||(e.current=zf[Pi],zf[Pi]=null,Pi--)}function ge(e,t){Pi++,zf[Pi]=e.current,e.current=t}var Cr={},lt=Tr(Cr),_t=Tr(!1),Yr=Cr;function Hi(e,t){var n=e.type.contextTypes;if(!n)return Cr;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Ct(e){return e=e.childContextTypes,e!=null}function xl(){xe(_t),xe(lt)}function Vg(e,t,n){if(lt.current!==Cr)throw Error(V(168));ge(lt,t),ge(_t,n)}function cx(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(V(108,sE(e)||"Unknown",i));return ke({},n,r)}function bl(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Cr,Yr=lt.current,ge(lt,e),ge(_t,_t.current),!0}function Ug(e,t,n){var r=e.stateNode;if(!r)throw Error(V(169));n?(e=cx(e,t,Yr),r.__reactInternalMemoizedMergedChildContext=e,xe(_t),xe(lt),ge(lt,e)):xe(_t),ge(_t,n)}var An=null,gu=!1,Zc=!1;function dx(e){An===null?An=[e]:An.push(e)}function Ck(e){gu=!0,dx(e)}function Pr(){if(!Zc&&An!==null){Zc=!0;var e=0,t=he;try{var n=An;for(he=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}An=null,gu=!1}catch(i){throw An!==null&&(An=An.slice(e+1)),Ay(lh,Pr),i}finally{he=t,Zc=!1}}return null}var Oi=[],ji=0,wl=null,Sl=0,Ut=[],Ht=0,qr=null,zn=1,Nn="";function Dr(e,t){Oi[ji++]=Sl,Oi[ji++]=wl,wl=e,Sl=t}function fx(e,t,n){Ut[Ht++]=zn,Ut[Ht++]=Nn,Ut[Ht++]=qr,qr=e;var r=zn;e=Nn;var i=32-sn(r)-1;r&=~(1<<i),n+=1;var o=32-sn(t)+i;if(30<o){var a=i-i%5;o=(r&(1<<a)-1).toString(32),r>>=a,i-=a,zn=1<<32-sn(t)+i|n<<i|r,Nn=o+e}else zn=1<<o|n<<i|r,Nn=e}function vh(e){e.return!==null&&(Dr(e,1),fx(e,1,0))}function yh(e){for(;e===wl;)wl=Oi[--ji],Oi[ji]=null,Sl=Oi[--ji],Oi[ji]=null;for(;e===qr;)qr=Ut[--Ht],Ut[Ht]=null,Nn=Ut[--Ht],Ut[Ht]=null,zn=Ut[--Ht],Ut[Ht]=null}var Lt=null,It=null,_e=!1,on=null;function px(e,t){var n=Wt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Hg(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Lt=e,It=vr(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Lt=e,It=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=qr!==null?{id:zn,overflow:Nn}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Wt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Lt=e,It=null,!0):!1;default:return!1}}function Nf(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Bf(e){if(_e){var t=It;if(t){var n=t;if(!Hg(e,t)){if(Nf(e))throw Error(V(418));t=vr(n.nextSibling);var r=Lt;t&&Hg(e,t)?px(r,n):(e.flags=e.flags&-4097|2,_e=!1,Lt=e)}}else{if(Nf(e))throw Error(V(418));e.flags=e.flags&-4097|2,_e=!1,Lt=e}}}function Wg(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Lt=e}function fs(e){if(e!==Lt)return!1;if(!_e)return Wg(e),_e=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Af(e.type,e.memoizedProps)),t&&(t=It)){if(Nf(e))throw hx(),Error(V(418));for(;t;)px(e,t),t=vr(t.nextSibling)}if(Wg(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(V(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){It=vr(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}It=null}}else It=Lt?vr(e.stateNode.nextSibling):null;return!0}function hx(){for(var e=It;e;)e=vr(e.nextSibling)}function Wi(){It=Lt=null,_e=!1}function xh(e){on===null?on=[e]:on.push(e)}var Ek=Qn.ReactCurrentBatchConfig;function tn(e,t){if(e&&e.defaultProps){t=ke({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var _l=Tr(null),Cl=null,Mi=null,bh=null;function wh(){bh=Mi=Cl=null}function Sh(e){var t=_l.current;xe(_l),e._currentValue=t}function Vf(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Fi(e,t){Cl=e,bh=Mi=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(St=!0),e.firstContext=null)}function Yt(e){var t=e._currentValue;if(bh!==e)if(e={context:e,memoizedValue:t,next:null},Mi===null){if(Cl===null)throw Error(V(308));Mi=e,Cl.dependencies={lanes:0,firstContext:e}}else Mi=Mi.next=e;return t}var Br=null;function _h(e){Br===null?Br=[e]:Br.push(e)}function mx(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,_h(t)):(n.next=i.next,i.next=n),t.interleaved=n,Gn(e,r)}function Gn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var or=!1;function Ch(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function gx(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Bn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function yr(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,se&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Gn(e,n)}return i=r.interleaved,i===null?(t.next=t,_h(r)):(t.next=i.next,i.next=t),r.interleaved=t,Gn(e,n)}function Fs(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,uh(e,n)}}function Gg(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=a:o=o.next=a,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function El(e,t,n,r){var i=e.updateQueue;or=!1;var o=i.firstBaseUpdate,a=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var s=l,u=s.next;s.next=null,a===null?o=u:a.next=u,a=s;var d=e.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==a&&(l===null?d.firstBaseUpdate=u:l.next=u,d.lastBaseUpdate=s))}if(o!==null){var c=i.baseState;a=0,d=u=s=null,l=o;do{var y=l.lane,p=l.eventTime;if((r&y)===y){d!==null&&(d=d.next={eventTime:p,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var m=e,g=l;switch(y=t,p=n,g.tag){case 1:if(m=g.payload,typeof m=="function"){c=m.call(p,c,y);break e}c=m;break e;case 3:m.flags=m.flags&-65537|128;case 0:if(m=g.payload,y=typeof m=="function"?m.call(p,c,y):m,y==null)break e;c=ke({},c,y);break e;case 2:or=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,y=i.effects,y===null?i.effects=[l]:y.push(l))}else p={eventTime:p,lane:y,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(u=d=p,s=c):d=d.next=p,a|=y;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;y=l,l=y.next,y.next=null,i.lastBaseUpdate=y,i.shared.pending=null}}while(1);if(d===null&&(s=c),i.baseState=s,i.firstBaseUpdate=u,i.lastBaseUpdate=d,t=i.shared.interleaved,t!==null){i=t;do a|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);Kr|=a,e.lanes=a,e.memoizedState=c}}function Yg(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(V(191,i));i.call(r)}}}var vx=new my.Component().refs;function Uf(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ke({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var vu={isMounted:function(e){return(e=e._reactInternals)?oi(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=pt(),i=br(e),o=Bn(r,i);o.payload=t,n!=null&&(o.callback=n),t=yr(e,o,i),t!==null&&(ln(t,e,i,r),Fs(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=pt(),i=br(e),o=Bn(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=yr(e,o,i),t!==null&&(ln(t,e,i,r),Fs(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=pt(),r=br(e),i=Bn(n,r);i.tag=2,t!=null&&(i.callback=t),t=yr(e,i,r),t!==null&&(ln(t,e,r,n),Fs(t,e,r))}};function qg(e,t,n,r,i,o,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,a):t.prototype&&t.prototype.isPureReactComponent?!ma(n,r)||!ma(i,o):!0}function yx(e,t,n){var r=!1,i=Cr,o=t.contextType;return typeof o=="object"&&o!==null?o=Yt(o):(i=Ct(t)?Yr:lt.current,r=t.contextTypes,o=(r=r!=null)?Hi(e,i):Cr),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=vu,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Xg(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&vu.enqueueReplaceState(t,t.state,null)}function Hf(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=vx,Ch(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=Yt(o):(o=Ct(t)?Yr:lt.current,i.context=Hi(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Uf(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&vu.enqueueReplaceState(i,i.state,null),El(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Oo(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(V(309));var r=n.stateNode}if(!r)throw Error(V(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(a){var l=i.refs;l===vx&&(l=i.refs={}),a===null?delete l[o]:l[o]=a},t._stringRef=o,t)}if(typeof e!="string")throw Error(V(284));if(!n._owner)throw Error(V(290,e))}return e}function ps(e,t){throw e=Object.prototype.toString.call(t),Error(V(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Kg(e){var t=e._init;return t(e._payload)}function xx(e){function t(h,v){if(e){var x=h.deletions;x===null?(h.deletions=[v],h.flags|=16):x.push(v)}}function n(h,v){if(!e)return null;for(;v!==null;)t(h,v),v=v.sibling;return null}function r(h,v){for(h=new Map;v!==null;)v.key!==null?h.set(v.key,v):h.set(v.index,v),v=v.sibling;return h}function i(h,v){return h=wr(h,v),h.index=0,h.sibling=null,h}function o(h,v,x){return h.index=x,e?(x=h.alternate,x!==null?(x=x.index,x<v?(h.flags|=2,v):x):(h.flags|=2,v)):(h.flags|=1048576,v)}function a(h){return e&&h.alternate===null&&(h.flags|=2),h}function l(h,v,x,S){return v===null||v.tag!==6?(v=od(x,h.mode,S),v.return=h,v):(v=i(v,x),v.return=h,v)}function s(h,v,x,S){var E=x.type;return E===_i?d(h,v,x.props.children,S,x.key):v!==null&&(v.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===ir&&Kg(E)===v.type)?(S=i(v,x.props),S.ref=Oo(h,v,x),S.return=h,S):(S=Hs(x.type,x.key,x.props,null,h.mode,S),S.ref=Oo(h,v,x),S.return=h,S)}function u(h,v,x,S){return v===null||v.tag!==4||v.stateNode.containerInfo!==x.containerInfo||v.stateNode.implementation!==x.implementation?(v=ad(x,h.mode,S),v.return=h,v):(v=i(v,x.children||[]),v.return=h,v)}function d(h,v,x,S,E){return v===null||v.tag!==7?(v=Wr(x,h.mode,S,E),v.return=h,v):(v=i(v,x),v.return=h,v)}function c(h,v,x){if(typeof v=="string"&&v!==""||typeof v=="number")return v=od(""+v,h.mode,x),v.return=h,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case ns:return x=Hs(v.type,v.key,v.props,null,h.mode,x),x.ref=Oo(h,null,v),x.return=h,x;case Si:return v=ad(v,h.mode,x),v.return=h,v;case ir:var S=v._init;return c(h,S(v._payload),x)}if(No(v)||Co(v))return v=Wr(v,h.mode,x,null),v.return=h,v;ps(h,v)}return null}function y(h,v,x,S){var E=v!==null?v.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return E!==null?null:l(h,v,""+x,S);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case ns:return x.key===E?s(h,v,x,S):null;case Si:return x.key===E?u(h,v,x,S):null;case ir:return E=x._init,y(h,v,E(x._payload),S)}if(No(x)||Co(x))return E!==null?null:d(h,v,x,S,null);ps(h,x)}return null}function p(h,v,x,S,E){if(typeof S=="string"&&S!==""||typeof S=="number")return h=h.get(x)||null,l(v,h,""+S,E);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case ns:return h=h.get(S.key===null?x:S.key)||null,s(v,h,S,E);case Si:return h=h.get(S.key===null?x:S.key)||null,u(v,h,S,E);case ir:var P=S._init;return p(h,v,x,P(S._payload),E)}if(No(S)||Co(S))return h=h.get(x)||null,d(v,h,S,E,null);ps(v,S)}return null}function m(h,v,x,S){for(var E=null,P=null,k=v,_=v=0,M=null;k!==null&&_<x.length;_++){k.index>_?(M=k,k=null):M=k.sibling;var $=y(h,k,x[_],S);if($===null){k===null&&(k=M);break}e&&k&&$.alternate===null&&t(h,k),v=o($,v,_),P===null?E=$:P.sibling=$,P=$,k=M}if(_===x.length)return n(h,k),_e&&Dr(h,_),E;if(k===null){for(;_<x.length;_++)k=c(h,x[_],S),k!==null&&(v=o(k,v,_),P===null?E=k:P.sibling=k,P=k);return _e&&Dr(h,_),E}for(k=r(h,k);_<x.length;_++)M=p(k,h,_,x[_],S),M!==null&&(e&&M.alternate!==null&&k.delete(M.key===null?_:M.key),v=o(M,v,_),P===null?E=M:P.sibling=M,P=M);return e&&k.forEach(function(D){return t(h,D)}),_e&&Dr(h,_),E}function g(h,v,x,S){var E=Co(x);if(typeof E!="function")throw Error(V(150));if(x=E.call(x),x==null)throw Error(V(151));for(var P=E=null,k=v,_=v=0,M=null,$=x.next();k!==null&&!$.done;_++,$=x.next()){k.index>_?(M=k,k=null):M=k.sibling;var D=y(h,k,$.value,S);if(D===null){k===null&&(k=M);break}e&&k&&D.alternate===null&&t(h,k),v=o(D,v,_),P===null?E=D:P.sibling=D,P=D,k=M}if($.done)return n(h,k),_e&&Dr(h,_),E;if(k===null){for(;!$.done;_++,$=x.next())$=c(h,$.value,S),$!==null&&(v=o($,v,_),P===null?E=$:P.sibling=$,P=$);return _e&&Dr(h,_),E}for(k=r(h,k);!$.done;_++,$=x.next())$=p(k,h,_,$.value,S),$!==null&&(e&&$.alternate!==null&&k.delete($.key===null?_:$.key),v=o($,v,_),P===null?E=$:P.sibling=$,P=$);return e&&k.forEach(function(A){return t(h,A)}),_e&&Dr(h,_),E}function w(h,v,x,S){if(typeof x=="object"&&x!==null&&x.type===_i&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case ns:e:{for(var E=x.key,P=v;P!==null;){if(P.key===E){if(E=x.type,E===_i){if(P.tag===7){n(h,P.sibling),v=i(P,x.props.children),v.return=h,h=v;break e}}else if(P.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===ir&&Kg(E)===P.type){n(h,P.sibling),v=i(P,x.props),v.ref=Oo(h,P,x),v.return=h,h=v;break e}n(h,P);break}else t(h,P);P=P.sibling}x.type===_i?(v=Wr(x.props.children,h.mode,S,x.key),v.return=h,h=v):(S=Hs(x.type,x.key,x.props,null,h.mode,S),S.ref=Oo(h,v,x),S.return=h,h=S)}return a(h);case Si:e:{for(P=x.key;v!==null;){if(v.key===P)if(v.tag===4&&v.stateNode.containerInfo===x.containerInfo&&v.stateNode.implementation===x.implementation){n(h,v.sibling),v=i(v,x.children||[]),v.return=h,h=v;break e}else{n(h,v);break}else t(h,v);v=v.sibling}v=ad(x,h.mode,S),v.return=h,h=v}return a(h);case ir:return P=x._init,w(h,v,P(x._payload),S)}if(No(x))return m(h,v,x,S);if(Co(x))return g(h,v,x,S);ps(h,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,v!==null&&v.tag===6?(n(h,v.sibling),v=i(v,x),v.return=h,h=v):(n(h,v),v=od(x,h.mode,S),v.return=h,h=v),a(h)):n(h,v)}return w}var Gi=xx(!0),bx=xx(!1),Na={},Cn=Tr(Na),xa=Tr(Na),ba=Tr(Na);function Vr(e){if(e===Na)throw Error(V(174));return e}function Eh(e,t){switch(ge(ba,t),ge(xa,e),ge(Cn,Na),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Sf(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Sf(t,e)}xe(Cn),ge(Cn,t)}function Yi(){xe(Cn),xe(xa),xe(ba)}function wx(e){Vr(ba.current);var t=Vr(Cn.current),n=Sf(t,e.type);t!==n&&(ge(xa,e),ge(Cn,n))}function kh(e){xa.current===e&&(xe(Cn),xe(xa))}var Ce=Tr(0);function kl(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Jc=[];function Th(){for(var e=0;e<Jc.length;e++)Jc[e]._workInProgressVersionPrimary=null;Jc.length=0}var zs=Qn.ReactCurrentDispatcher,ed=Qn.ReactCurrentBatchConfig,Xr=0,Ee=null,Fe=null,We=null,Tl=!1,Jo=!1,wa=0,kk=0;function et(){throw Error(V(321))}function Ph(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!fn(e[n],t[n]))return!1;return!0}function Oh(e,t,n,r,i,o){if(Xr=o,Ee=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,zs.current=e===null||e.memoizedState===null?jk:Mk,e=n(r,i),Jo){o=0;do{if(Jo=!1,wa=0,25<=o)throw Error(V(301));o+=1,We=Fe=null,t.updateQueue=null,zs.current=$k,e=n(r,i)}while(Jo)}if(zs.current=Pl,t=Fe!==null&&Fe.next!==null,Xr=0,We=Fe=Ee=null,Tl=!1,t)throw Error(V(300));return e}function jh(){var e=wa!==0;return wa=0,e}function yn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return We===null?Ee.memoizedState=We=e:We=We.next=e,We}function qt(){if(Fe===null){var e=Ee.alternate;e=e!==null?e.memoizedState:null}else e=Fe.next;var t=We===null?Ee.memoizedState:We.next;if(t!==null)We=t,Fe=e;else{if(e===null)throw Error(V(310));Fe=e,e={memoizedState:Fe.memoizedState,baseState:Fe.baseState,baseQueue:Fe.baseQueue,queue:Fe.queue,next:null},We===null?Ee.memoizedState=We=e:We=We.next=e}return We}function Sa(e,t){return typeof t=="function"?t(e):t}function td(e){var t=qt(),n=t.queue;if(n===null)throw Error(V(311));n.lastRenderedReducer=e;var r=Fe,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var a=i.next;i.next=o.next,o.next=a}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var l=a=null,s=null,u=o;do{var d=u.lane;if((Xr&d)===d)s!==null&&(s=s.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var c={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};s===null?(l=s=c,a=r):s=s.next=c,Ee.lanes|=d,Kr|=d}u=u.next}while(u!==null&&u!==o);s===null?a=r:s.next=l,fn(r,t.memoizedState)||(St=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,Ee.lanes|=o,Kr|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function nd(e){var t=qt(),n=t.queue;if(n===null)throw Error(V(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var a=i=i.next;do o=e(o,a.action),a=a.next;while(a!==i);fn(o,t.memoizedState)||(St=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Sx(){}function _x(e,t){var n=Ee,r=qt(),i=t(),o=!fn(r.memoizedState,i);if(o&&(r.memoizedState=i,St=!0),r=r.queue,Mh(kx.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||We!==null&&We.memoizedState.tag&1){if(n.flags|=2048,_a(9,Ex.bind(null,n,r,i,t),void 0,null),Ge===null)throw Error(V(349));Xr&30||Cx(n,t,i)}return i}function Cx(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Ee.updateQueue,t===null?(t={lastEffect:null,stores:null},Ee.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Ex(e,t,n,r){t.value=n,t.getSnapshot=r,Tx(t)&&Px(e)}function kx(e,t,n){return n(function(){Tx(t)&&Px(e)})}function Tx(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!fn(e,n)}catch{return!0}}function Px(e){var t=Gn(e,1);t!==null&&ln(t,e,1,-1)}function Qg(e){var t=yn();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Sa,lastRenderedState:e},t.queue=e,e=e.dispatch=Ok.bind(null,Ee,e),[t.memoizedState,e]}function _a(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Ee.updateQueue,t===null?(t={lastEffect:null,stores:null},Ee.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Ox(){return qt().memoizedState}function Ns(e,t,n,r){var i=yn();Ee.flags|=e,i.memoizedState=_a(1|t,n,void 0,r===void 0?null:r)}function yu(e,t,n,r){var i=qt();r=r===void 0?null:r;var o=void 0;if(Fe!==null){var a=Fe.memoizedState;if(o=a.destroy,r!==null&&Ph(r,a.deps)){i.memoizedState=_a(t,n,o,r);return}}Ee.flags|=e,i.memoizedState=_a(1|t,n,o,r)}function Zg(e,t){return Ns(8390656,8,e,t)}function Mh(e,t){return yu(2048,8,e,t)}function jx(e,t){return yu(4,2,e,t)}function Mx(e,t){return yu(4,4,e,t)}function $x(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Ix(e,t,n){return n=n!=null?n.concat([e]):null,yu(4,4,$x.bind(null,t,e),n)}function $h(){}function Dx(e,t){var n=qt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ph(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Lx(e,t){var n=qt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ph(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Ax(e,t,n){return Xr&21?(fn(n,t)||(n=zy(),Ee.lanes|=n,Kr|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,St=!0),e.memoizedState=n)}function Tk(e,t){var n=he;he=n!==0&&4>n?n:4,e(!0);var r=ed.transition;ed.transition={};try{e(!1),t()}finally{he=n,ed.transition=r}}function Rx(){return qt().memoizedState}function Pk(e,t,n){var r=br(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Fx(e))zx(t,n);else if(n=mx(e,t,n,r),n!==null){var i=pt();ln(n,e,r,i),Nx(n,t,r)}}function Ok(e,t,n){var r=br(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Fx(e))zx(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var a=t.lastRenderedState,l=o(a,n);if(i.hasEagerState=!0,i.eagerState=l,fn(l,a)){var s=t.interleaved;s===null?(i.next=i,_h(t)):(i.next=s.next,s.next=i),t.interleaved=i;return}}catch{}finally{}n=mx(e,t,i,r),n!==null&&(i=pt(),ln(n,e,r,i),Nx(n,t,r))}}function Fx(e){var t=e.alternate;return e===Ee||t!==null&&t===Ee}function zx(e,t){Jo=Tl=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Nx(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,uh(e,n)}}var Pl={readContext:Yt,useCallback:et,useContext:et,useEffect:et,useImperativeHandle:et,useInsertionEffect:et,useLayoutEffect:et,useMemo:et,useReducer:et,useRef:et,useState:et,useDebugValue:et,useDeferredValue:et,useTransition:et,useMutableSource:et,useSyncExternalStore:et,useId:et,unstable_isNewReconciler:!1},jk={readContext:Yt,useCallback:function(e,t){return yn().memoizedState=[e,t===void 0?null:t],e},useContext:Yt,useEffect:Zg,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Ns(4194308,4,$x.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ns(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ns(4,2,e,t)},useMemo:function(e,t){var n=yn();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=yn();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Pk.bind(null,Ee,e),[r.memoizedState,e]},useRef:function(e){var t=yn();return e={current:e},t.memoizedState=e},useState:Qg,useDebugValue:$h,useDeferredValue:function(e){return yn().memoizedState=e},useTransition:function(){var e=Qg(!1),t=e[0];return e=Tk.bind(null,e[1]),yn().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Ee,i=yn();if(_e){if(n===void 0)throw Error(V(407));n=n()}else{if(n=t(),Ge===null)throw Error(V(349));Xr&30||Cx(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,Zg(kx.bind(null,r,o,e),[e]),r.flags|=2048,_a(9,Ex.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=yn(),t=Ge.identifierPrefix;if(_e){var n=Nn,r=zn;n=(r&~(1<<32-sn(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=wa++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=kk++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Mk={readContext:Yt,useCallback:Dx,useContext:Yt,useEffect:Mh,useImperativeHandle:Ix,useInsertionEffect:jx,useLayoutEffect:Mx,useMemo:Lx,useReducer:td,useRef:Ox,useState:function(){return td(Sa)},useDebugValue:$h,useDeferredValue:function(e){var t=qt();return Ax(t,Fe.memoizedState,e)},useTransition:function(){var e=td(Sa)[0],t=qt().memoizedState;return[e,t]},useMutableSource:Sx,useSyncExternalStore:_x,useId:Rx,unstable_isNewReconciler:!1},$k={readContext:Yt,useCallback:Dx,useContext:Yt,useEffect:Mh,useImperativeHandle:Ix,useInsertionEffect:jx,useLayoutEffect:Mx,useMemo:Lx,useReducer:nd,useRef:Ox,useState:function(){return nd(Sa)},useDebugValue:$h,useDeferredValue:function(e){var t=qt();return Fe===null?t.memoizedState=e:Ax(t,Fe.memoizedState,e)},useTransition:function(){var e=nd(Sa)[0],t=qt().memoizedState;return[e,t]},useMutableSource:Sx,useSyncExternalStore:_x,useId:Rx,unstable_isNewReconciler:!1};function qi(e,t){try{var n="",r=t;do n+=aE(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function rd(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Wf(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Ik=typeof WeakMap=="function"?WeakMap:Map;function Bx(e,t,n){n=Bn(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){jl||(jl=!0,tp=r),Wf(e,t)},n}function Vx(e,t,n){n=Bn(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Wf(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Wf(e,t),typeof r!="function"&&(xr===null?xr=new Set([this]):xr.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function Jg(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Ik;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Yk.bind(null,e,t,n),t.then(e,e))}function e0(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function t0(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Bn(-1,1),t.tag=2,yr(n,t,1))),n.lanes|=1),e)}var Dk=Qn.ReactCurrentOwner,St=!1;function dt(e,t,n,r){t.child=e===null?bx(t,null,n,r):Gi(t,e.child,n,r)}function n0(e,t,n,r,i){n=n.render;var o=t.ref;return Fi(t,i),r=Oh(e,t,n,r,o,i),n=jh(),e!==null&&!St?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Yn(e,t,i)):(_e&&n&&vh(t),t.flags|=1,dt(e,t,r,i),t.child)}function r0(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!Nh(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,Ux(e,t,o,r,i)):(e=Hs(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var a=o.memoizedProps;if(n=n.compare,n=n!==null?n:ma,n(a,r)&&e.ref===t.ref)return Yn(e,t,i)}return t.flags|=1,e=wr(o,r),e.ref=t.ref,e.return=t,t.child=e}function Ux(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(ma(o,r)&&e.ref===t.ref)if(St=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(St=!0);else return t.lanes=e.lanes,Yn(e,t,i)}return Gf(e,t,n,r,i)}function Hx(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ge(Ii,Mt),Mt|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ge(Ii,Mt),Mt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,ge(Ii,Mt),Mt|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,ge(Ii,Mt),Mt|=r;return dt(e,t,i,n),t.child}function Wx(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Gf(e,t,n,r,i){var o=Ct(n)?Yr:lt.current;return o=Hi(t,o),Fi(t,i),n=Oh(e,t,n,r,o,i),r=jh(),e!==null&&!St?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Yn(e,t,i)):(_e&&r&&vh(t),t.flags|=1,dt(e,t,n,i),t.child)}function i0(e,t,n,r,i){if(Ct(n)){var o=!0;bl(t)}else o=!1;if(Fi(t,i),t.stateNode===null)Bs(e,t),yx(t,n,r),Hf(t,n,r,i),r=!0;else if(e===null){var a=t.stateNode,l=t.memoizedProps;a.props=l;var s=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=Yt(u):(u=Ct(n)?Yr:lt.current,u=Hi(t,u));var d=n.getDerivedStateFromProps,c=typeof d=="function"||typeof a.getSnapshotBeforeUpdate=="function";c||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==r||s!==u)&&Xg(t,a,r,u),or=!1;var y=t.memoizedState;a.state=y,El(t,r,a,i),s=t.memoizedState,l!==r||y!==s||_t.current||or?(typeof d=="function"&&(Uf(t,n,d,r),s=t.memoizedState),(l=or||qg(t,n,l,r,y,s,u))?(c||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),a.props=r,a.state=s,a.context=u,r=l):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,gx(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:tn(t.type,l),a.props=u,c=t.pendingProps,y=a.context,s=n.contextType,typeof s=="object"&&s!==null?s=Yt(s):(s=Ct(n)?Yr:lt.current,s=Hi(t,s));var p=n.getDerivedStateFromProps;(d=typeof p=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==c||y!==s)&&Xg(t,a,r,s),or=!1,y=t.memoizedState,a.state=y,El(t,r,a,i);var m=t.memoizedState;l!==c||y!==m||_t.current||or?(typeof p=="function"&&(Uf(t,n,p,r),m=t.memoizedState),(u=or||qg(t,n,u,r,y,m,s)||!1)?(d||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,m,s),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,m,s)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&y===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&y===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=m),a.props=r,a.state=m,a.context=s,r=u):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&y===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&y===e.memoizedState||(t.flags|=1024),r=!1)}return Yf(e,t,n,r,o,i)}function Yf(e,t,n,r,i,o){Wx(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return i&&Ug(t,n,!1),Yn(e,t,o);r=t.stateNode,Dk.current=t;var l=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=Gi(t,e.child,null,o),t.child=Gi(t,null,l,o)):dt(e,t,l,o),t.memoizedState=r.state,i&&Ug(t,n,!0),t.child}function Gx(e){var t=e.stateNode;t.pendingContext?Vg(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Vg(e,t.context,!1),Eh(e,t.containerInfo)}function o0(e,t,n,r,i){return Wi(),xh(i),t.flags|=256,dt(e,t,n,r),t.child}var qf={dehydrated:null,treeContext:null,retryLane:0};function Xf(e){return{baseLanes:e,cachePool:null,transitions:null}}function Yx(e,t,n){var r=t.pendingProps,i=Ce.current,o=!1,a=(t.flags&128)!==0,l;if((l=a)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),ge(Ce,i&1),e===null)return Bf(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,o?(r=t.mode,o=t.child,a={mode:"hidden",children:a},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=a):o=wu(a,r,0,null),e=Wr(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Xf(n),t.memoizedState=qf,e):Ih(t,a));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return Lk(e,t,a,r,l,i,n);if(o){o=r.fallback,a=t.mode,i=e.child,l=i.sibling;var s={mode:"hidden",children:r.children};return!(a&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=wr(i,s),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?o=wr(l,o):(o=Wr(o,a,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,a=e.child.memoizedState,a=a===null?Xf(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},o.memoizedState=a,o.childLanes=e.childLanes&~n,t.memoizedState=qf,r}return o=e.child,e=o.sibling,r=wr(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Ih(e,t){return t=wu({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function hs(e,t,n,r){return r!==null&&xh(r),Gi(t,e.child,null,n),e=Ih(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Lk(e,t,n,r,i,o,a){if(n)return t.flags&256?(t.flags&=-257,r=rd(Error(V(422))),hs(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=wu({mode:"visible",children:r.children},i,0,null),o=Wr(o,i,a,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&Gi(t,e.child,null,a),t.child.memoizedState=Xf(a),t.memoizedState=qf,o);if(!(t.mode&1))return hs(e,t,a,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,o=Error(V(419)),r=rd(o,r,void 0),hs(e,t,a,r)}if(l=(a&e.childLanes)!==0,St||l){if(r=Ge,r!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|a)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Gn(e,i),ln(r,e,i,-1))}return zh(),r=rd(Error(V(421))),hs(e,t,a,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=qk.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,It=vr(i.nextSibling),Lt=t,_e=!0,on=null,e!==null&&(Ut[Ht++]=zn,Ut[Ht++]=Nn,Ut[Ht++]=qr,zn=e.id,Nn=e.overflow,qr=t),t=Ih(t,r.children),t.flags|=4096,t)}function a0(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Vf(e.return,t,n)}function id(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function qx(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(dt(e,t,r.children,n),r=Ce.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&a0(e,n,t);else if(e.tag===19)a0(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ge(Ce,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&kl(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),id(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&kl(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}id(t,!0,n,null,o);break;case"together":id(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Bs(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Yn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Kr|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(V(153));if(t.child!==null){for(e=t.child,n=wr(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=wr(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Ak(e,t,n){switch(t.tag){case 3:Gx(t),Wi();break;case 5:wx(t);break;case 1:Ct(t.type)&&bl(t);break;case 4:Eh(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;ge(_l,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(ge(Ce,Ce.current&1),t.flags|=128,null):n&t.child.childLanes?Yx(e,t,n):(ge(Ce,Ce.current&1),e=Yn(e,t,n),e!==null?e.sibling:null);ge(Ce,Ce.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return qx(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ge(Ce,Ce.current),r)break;return null;case 22:case 23:return t.lanes=0,Hx(e,t,n)}return Yn(e,t,n)}var Xx,Kf,Kx,Qx;Xx=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Kf=function(){};Kx=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Vr(Cn.current);var o=null;switch(n){case"input":i=yf(e,i),r=yf(e,r),o=[];break;case"select":i=ke({},i,{value:void 0}),r=ke({},r,{value:void 0}),o=[];break;case"textarea":i=wf(e,i),r=wf(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=yl)}_f(n,r);var a;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(a in l)l.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(la.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var s=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&s!==l&&(s!=null||l!=null))if(u==="style")if(l){for(a in l)!l.hasOwnProperty(a)||s&&s.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in s)s.hasOwnProperty(a)&&l[a]!==s[a]&&(n||(n={}),n[a]=s[a])}else n||(o||(o=[]),o.push(u,n)),n=s;else u==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,l=l?l.__html:void 0,s!=null&&l!==s&&(o=o||[]).push(u,s)):u==="children"?typeof s!="string"&&typeof s!="number"||(o=o||[]).push(u,""+s):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(la.hasOwnProperty(u)?(s!=null&&u==="onScroll"&&ve("scroll",e),o||l===s||(o=[])):(o=o||[]).push(u,s))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};Qx=function(e,t,n,r){n!==r&&(t.flags|=4)};function jo(e,t){if(!_e)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function tt(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Rk(e,t,n){var r=t.pendingProps;switch(yh(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return tt(t),null;case 1:return Ct(t.type)&&xl(),tt(t),null;case 3:return r=t.stateNode,Yi(),xe(_t),xe(lt),Th(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(fs(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,on!==null&&(ip(on),on=null))),Kf(e,t),tt(t),null;case 5:kh(t);var i=Vr(ba.current);if(n=t.type,e!==null&&t.stateNode!=null)Kx(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(V(166));return tt(t),null}if(e=Vr(Cn.current),fs(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[wn]=t,r[ya]=o,e=(t.mode&1)!==0,n){case"dialog":ve("cancel",r),ve("close",r);break;case"iframe":case"object":case"embed":ve("load",r);break;case"video":case"audio":for(i=0;i<Vo.length;i++)ve(Vo[i],r);break;case"source":ve("error",r);break;case"img":case"image":case"link":ve("error",r),ve("load",r);break;case"details":ve("toggle",r);break;case"input":mg(r,o),ve("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},ve("invalid",r);break;case"textarea":vg(r,o),ve("invalid",r)}_f(n,o),i=null;for(var a in o)if(o.hasOwnProperty(a)){var l=o[a];a==="children"?typeof l=="string"?r.textContent!==l&&(o.suppressHydrationWarning!==!0&&ds(r.textContent,l,e),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(o.suppressHydrationWarning!==!0&&ds(r.textContent,l,e),i=["children",""+l]):la.hasOwnProperty(a)&&l!=null&&a==="onScroll"&&ve("scroll",r)}switch(n){case"input":rs(r),gg(r,o,!0);break;case"textarea":rs(r),yg(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=yl)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Cy(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[wn]=t,e[ya]=r,Xx(e,t,!1,!1),t.stateNode=e;e:{switch(a=Cf(n,r),n){case"dialog":ve("cancel",e),ve("close",e),i=r;break;case"iframe":case"object":case"embed":ve("load",e),i=r;break;case"video":case"audio":for(i=0;i<Vo.length;i++)ve(Vo[i],e);i=r;break;case"source":ve("error",e),i=r;break;case"img":case"image":case"link":ve("error",e),ve("load",e),i=r;break;case"details":ve("toggle",e),i=r;break;case"input":mg(e,r),i=yf(e,r),ve("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=ke({},r,{value:void 0}),ve("invalid",e);break;case"textarea":vg(e,r),i=wf(e,r),ve("invalid",e);break;default:i=r}_f(n,i),l=i;for(o in l)if(l.hasOwnProperty(o)){var s=l[o];o==="style"?Ty(e,s):o==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&Ey(e,s)):o==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&ua(e,s):typeof s=="number"&&ua(e,""+s):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(la.hasOwnProperty(o)?s!=null&&o==="onScroll"&&ve("scroll",e):s!=null&&rh(e,o,s,a))}switch(n){case"input":rs(e),gg(e,r,!1);break;case"textarea":rs(e),yg(e);break;case"option":r.value!=null&&e.setAttribute("value",""+_r(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Di(e,!!r.multiple,o,!1):r.defaultValue!=null&&Di(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=yl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return tt(t),null;case 6:if(e&&t.stateNode!=null)Qx(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(V(166));if(n=Vr(ba.current),Vr(Cn.current),fs(t)){if(r=t.stateNode,n=t.memoizedProps,r[wn]=t,(o=r.nodeValue!==n)&&(e=Lt,e!==null))switch(e.tag){case 3:ds(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ds(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[wn]=t,t.stateNode=r}return tt(t),null;case 13:if(xe(Ce),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(_e&&It!==null&&t.mode&1&&!(t.flags&128))hx(),Wi(),t.flags|=98560,o=!1;else if(o=fs(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(V(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(V(317));o[wn]=t}else Wi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;tt(t),o=!1}else on!==null&&(ip(on),on=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Ce.current&1?Ne===0&&(Ne=3):zh())),t.updateQueue!==null&&(t.flags|=4),tt(t),null);case 4:return Yi(),Kf(e,t),e===null&&ga(t.stateNode.containerInfo),tt(t),null;case 10:return Sh(t.type._context),tt(t),null;case 17:return Ct(t.type)&&xl(),tt(t),null;case 19:if(xe(Ce),o=t.memoizedState,o===null)return tt(t),null;if(r=(t.flags&128)!==0,a=o.rendering,a===null)if(r)jo(o,!1);else{if(Ne!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=kl(e),a!==null){for(t.flags|=128,jo(o,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,a=o.alternate,a===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=a.childLanes,o.lanes=a.lanes,o.child=a.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=a.memoizedProps,o.memoizedState=a.memoizedState,o.updateQueue=a.updateQueue,o.type=a.type,e=a.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ge(Ce,Ce.current&1|2),t.child}e=e.sibling}o.tail!==null&&je()>Xi&&(t.flags|=128,r=!0,jo(o,!1),t.lanes=4194304)}else{if(!r)if(e=kl(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),jo(o,!0),o.tail===null&&o.tailMode==="hidden"&&!a.alternate&&!_e)return tt(t),null}else 2*je()-o.renderingStartTime>Xi&&n!==1073741824&&(t.flags|=128,r=!0,jo(o,!1),t.lanes=4194304);o.isBackwards?(a.sibling=t.child,t.child=a):(n=o.last,n!==null?n.sibling=a:t.child=a,o.last=a)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=je(),t.sibling=null,n=Ce.current,ge(Ce,r?n&1|2:n&1),t):(tt(t),null);case 22:case 23:return Fh(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Mt&1073741824&&(tt(t),t.subtreeFlags&6&&(t.flags|=8192)):tt(t),null;case 24:return null;case 25:return null}throw Error(V(156,t.tag))}function Fk(e,t){switch(yh(t),t.tag){case 1:return Ct(t.type)&&xl(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Yi(),xe(_t),xe(lt),Th(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return kh(t),null;case 13:if(xe(Ce),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(V(340));Wi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return xe(Ce),null;case 4:return Yi(),null;case 10:return Sh(t.type._context),null;case 22:case 23:return Fh(),null;case 24:return null;default:return null}}var ms=!1,at=!1,zk=typeof WeakSet=="function"?WeakSet:Set,W=null;function $i(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Te(e,t,r)}else n.current=null}function Qf(e,t,n){try{n()}catch(r){Te(e,t,r)}}var s0=!1;function Nk(e,t){if(Df=ml,e=tx(),gh(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var a=0,l=-1,s=-1,u=0,d=0,c=e,y=null;t:for(;;){for(var p;c!==n||i!==0&&c.nodeType!==3||(l=a+i),c!==o||r!==0&&c.nodeType!==3||(s=a+r),c.nodeType===3&&(a+=c.nodeValue.length),(p=c.firstChild)!==null;)y=c,c=p;for(;;){if(c===e)break t;if(y===n&&++u===i&&(l=a),y===o&&++d===r&&(s=a),(p=c.nextSibling)!==null)break;c=y,y=c.parentNode}c=p}n=l===-1||s===-1?null:{start:l,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(Lf={focusedElem:e,selectionRange:n},ml=!1,W=t;W!==null;)if(t=W,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,W=e;else for(;W!==null;){t=W;try{var m=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(m!==null){var g=m.memoizedProps,w=m.memoizedState,h=t.stateNode,v=h.getSnapshotBeforeUpdate(t.elementType===t.type?g:tn(t.type,g),w);h.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var x=t.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(V(163))}}catch(S){Te(t,t.return,S)}if(e=t.sibling,e!==null){e.return=t.return,W=e;break}W=t.return}return m=s0,s0=!1,m}function ea(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Qf(t,n,o)}i=i.next}while(i!==r)}}function xu(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Zf(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Zx(e){var t=e.alternate;t!==null&&(e.alternate=null,Zx(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[wn],delete t[ya],delete t[Ff],delete t[Sk],delete t[_k])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Jx(e){return e.tag===5||e.tag===3||e.tag===4}function l0(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Jx(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Jf(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=yl));else if(r!==4&&(e=e.child,e!==null))for(Jf(e,t,n),e=e.sibling;e!==null;)Jf(e,t,n),e=e.sibling}function ep(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(ep(e,t,n),e=e.sibling;e!==null;)ep(e,t,n),e=e.sibling}var Ke=null,nn=!1;function nr(e,t,n){for(n=n.child;n!==null;)eb(e,t,n),n=n.sibling}function eb(e,t,n){if(_n&&typeof _n.onCommitFiberUnmount=="function")try{_n.onCommitFiberUnmount(du,n)}catch{}switch(n.tag){case 5:at||$i(n,t);case 6:var r=Ke,i=nn;Ke=null,nr(e,t,n),Ke=r,nn=i,Ke!==null&&(nn?(e=Ke,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Ke.removeChild(n.stateNode));break;case 18:Ke!==null&&(nn?(e=Ke,n=n.stateNode,e.nodeType===8?Qc(e.parentNode,n):e.nodeType===1&&Qc(e,n),pa(e)):Qc(Ke,n.stateNode));break;case 4:r=Ke,i=nn,Ke=n.stateNode.containerInfo,nn=!0,nr(e,t,n),Ke=r,nn=i;break;case 0:case 11:case 14:case 15:if(!at&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,a=o.destroy;o=o.tag,a!==void 0&&(o&2||o&4)&&Qf(n,t,a),i=i.next}while(i!==r)}nr(e,t,n);break;case 1:if(!at&&($i(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Te(n,t,l)}nr(e,t,n);break;case 21:nr(e,t,n);break;case 22:n.mode&1?(at=(r=at)||n.memoizedState!==null,nr(e,t,n),at=r):nr(e,t,n);break;default:nr(e,t,n)}}function u0(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new zk),t.forEach(function(r){var i=Xk.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Qt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,a=t,l=a;e:for(;l!==null;){switch(l.tag){case 5:Ke=l.stateNode,nn=!1;break e;case 3:Ke=l.stateNode.containerInfo,nn=!0;break e;case 4:Ke=l.stateNode.containerInfo,nn=!0;break e}l=l.return}if(Ke===null)throw Error(V(160));eb(o,a,i),Ke=null,nn=!1;var s=i.alternate;s!==null&&(s.return=null),i.return=null}catch(u){Te(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)tb(t,e),t=t.sibling}function tb(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Qt(t,e),gn(e),r&4){try{ea(3,e,e.return),xu(3,e)}catch(g){Te(e,e.return,g)}try{ea(5,e,e.return)}catch(g){Te(e,e.return,g)}}break;case 1:Qt(t,e),gn(e),r&512&&n!==null&&$i(n,n.return);break;case 5:if(Qt(t,e),gn(e),r&512&&n!==null&&$i(n,n.return),e.flags&32){var i=e.stateNode;try{ua(i,"")}catch(g){Te(e,e.return,g)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,a=n!==null?n.memoizedProps:o,l=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{l==="input"&&o.type==="radio"&&o.name!=null&&Sy(i,o),Cf(l,a);var u=Cf(l,o);for(a=0;a<s.length;a+=2){var d=s[a],c=s[a+1];d==="style"?Ty(i,c):d==="dangerouslySetInnerHTML"?Ey(i,c):d==="children"?ua(i,c):rh(i,d,c,u)}switch(l){case"input":xf(i,o);break;case"textarea":_y(i,o);break;case"select":var y=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var p=o.value;p!=null?Di(i,!!o.multiple,p,!1):y!==!!o.multiple&&(o.defaultValue!=null?Di(i,!!o.multiple,o.defaultValue,!0):Di(i,!!o.multiple,o.multiple?[]:"",!1))}i[ya]=o}catch(g){Te(e,e.return,g)}}break;case 6:if(Qt(t,e),gn(e),r&4){if(e.stateNode===null)throw Error(V(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(g){Te(e,e.return,g)}}break;case 3:if(Qt(t,e),gn(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{pa(t.containerInfo)}catch(g){Te(e,e.return,g)}break;case 4:Qt(t,e),gn(e);break;case 13:Qt(t,e),gn(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Ah=je())),r&4&&u0(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(at=(u=at)||d,Qt(t,e),at=u):Qt(t,e),gn(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(W=e,d=e.child;d!==null;){for(c=W=d;W!==null;){switch(y=W,p=y.child,y.tag){case 0:case 11:case 14:case 15:ea(4,y,y.return);break;case 1:$i(y,y.return);var m=y.stateNode;if(typeof m.componentWillUnmount=="function"){r=y,n=y.return;try{t=r,m.props=t.memoizedProps,m.state=t.memoizedState,m.componentWillUnmount()}catch(g){Te(r,n,g)}}break;case 5:$i(y,y.return);break;case 22:if(y.memoizedState!==null){d0(c);continue}}p!==null?(p.return=y,W=p):d0(c)}d=d.sibling}e:for(d=null,c=e;;){if(c.tag===5){if(d===null){d=c;try{i=c.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(l=c.stateNode,s=c.memoizedProps.style,a=s!=null&&s.hasOwnProperty("display")?s.display:null,l.style.display=ky("display",a))}catch(g){Te(e,e.return,g)}}}else if(c.tag===6){if(d===null)try{c.stateNode.nodeValue=u?"":c.memoizedProps}catch(g){Te(e,e.return,g)}}else if((c.tag!==22&&c.tag!==23||c.memoizedState===null||c===e)&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===e)break e;for(;c.sibling===null;){if(c.return===null||c.return===e)break e;d===c&&(d=null),c=c.return}d===c&&(d=null),c.sibling.return=c.return,c=c.sibling}}break;case 19:Qt(t,e),gn(e),r&4&&u0(e);break;case 21:break;default:Qt(t,e),gn(e)}}function gn(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Jx(n)){var r=n;break e}n=n.return}throw Error(V(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(ua(i,""),r.flags&=-33);var o=l0(e);ep(e,o,i);break;case 3:case 4:var a=r.stateNode.containerInfo,l=l0(e);Jf(e,l,a);break;default:throw Error(V(161))}}catch(s){Te(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Bk(e,t,n){W=e,nb(e)}function nb(e,t,n){for(var r=(e.mode&1)!==0;W!==null;){var i=W,o=i.child;if(i.tag===22&&r){var a=i.memoizedState!==null||ms;if(!a){var l=i.alternate,s=l!==null&&l.memoizedState!==null||at;l=ms;var u=at;if(ms=a,(at=s)&&!u)for(W=i;W!==null;)a=W,s=a.child,a.tag===22&&a.memoizedState!==null?f0(i):s!==null?(s.return=a,W=s):f0(i);for(;o!==null;)W=o,nb(o),o=o.sibling;W=i,ms=l,at=u}c0(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,W=o):c0(e)}}function c0(e){for(;W!==null;){var t=W;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:at||xu(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!at)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:tn(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Yg(t,o,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Yg(t,a,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var c=d.dehydrated;c!==null&&pa(c)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(V(163))}at||t.flags&512&&Zf(t)}catch(y){Te(t,t.return,y)}}if(t===e){W=null;break}if(n=t.sibling,n!==null){n.return=t.return,W=n;break}W=t.return}}function d0(e){for(;W!==null;){var t=W;if(t===e){W=null;break}var n=t.sibling;if(n!==null){n.return=t.return,W=n;break}W=t.return}}function f0(e){for(;W!==null;){var t=W;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{xu(4,t)}catch(s){Te(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(s){Te(t,i,s)}}var o=t.return;try{Zf(t)}catch(s){Te(t,o,s)}break;case 5:var a=t.return;try{Zf(t)}catch(s){Te(t,a,s)}}}catch(s){Te(t,t.return,s)}if(t===e){W=null;break}var l=t.sibling;if(l!==null){l.return=t.return,W=l;break}W=t.return}}var Vk=Math.ceil,Ol=Qn.ReactCurrentDispatcher,Dh=Qn.ReactCurrentOwner,Gt=Qn.ReactCurrentBatchConfig,se=0,Ge=null,De=null,Ze=0,Mt=0,Ii=Tr(0),Ne=0,Ca=null,Kr=0,bu=0,Lh=0,ta=null,wt=null,Ah=0,Xi=1/0,In=null,jl=!1,tp=null,xr=null,gs=!1,cr=null,Ml=0,na=0,np=null,Vs=-1,Us=0;function pt(){return se&6?je():Vs!==-1?Vs:Vs=je()}function br(e){return e.mode&1?se&2&&Ze!==0?Ze&-Ze:Ek.transition!==null?(Us===0&&(Us=zy()),Us):(e=he,e!==0||(e=window.event,e=e===void 0?16:Gy(e.type)),e):1}function ln(e,t,n,r){if(50<na)throw na=0,np=null,Error(V(185));Ra(e,n,r),(!(se&2)||e!==Ge)&&(e===Ge&&(!(se&2)&&(bu|=n),Ne===4&&sr(e,Ze)),Et(e,r),n===1&&se===0&&!(t.mode&1)&&(Xi=je()+500,gu&&Pr()))}function Et(e,t){var n=e.callbackNode;EE(e,t);var r=hl(e,e===Ge?Ze:0);if(r===0)n!==null&&wg(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&wg(n),t===1)e.tag===0?Ck(p0.bind(null,e)):dx(p0.bind(null,e)),bk(function(){!(se&6)&&Pr()}),n=null;else{switch(Ny(r)){case 1:n=lh;break;case 4:n=Ry;break;case 16:n=pl;break;case 536870912:n=Fy;break;default:n=pl}n=cb(n,rb.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function rb(e,t){if(Vs=-1,Us=0,se&6)throw Error(V(327));var n=e.callbackNode;if(zi()&&e.callbackNode!==n)return null;var r=hl(e,e===Ge?Ze:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=$l(e,r);else{t=r;var i=se;se|=2;var o=ob();(Ge!==e||Ze!==t)&&(In=null,Xi=je()+500,Hr(e,t));do try{Wk();break}catch(l){ib(e,l)}while(1);wh(),Ol.current=o,se=i,De!==null?t=0:(Ge=null,Ze=0,t=Ne)}if(t!==0){if(t===2&&(i=Of(e),i!==0&&(r=i,t=rp(e,i))),t===1)throw n=Ca,Hr(e,0),sr(e,r),Et(e,je()),n;if(t===6)sr(e,r);else{if(i=e.current.alternate,!(r&30)&&!Uk(i)&&(t=$l(e,r),t===2&&(o=Of(e),o!==0&&(r=o,t=rp(e,o))),t===1))throw n=Ca,Hr(e,0),sr(e,r),Et(e,je()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(V(345));case 2:Lr(e,wt,In);break;case 3:if(sr(e,r),(r&130023424)===r&&(t=Ah+500-je(),10<t)){if(hl(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){pt(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Rf(Lr.bind(null,e,wt,In),t);break}Lr(e,wt,In);break;case 4:if(sr(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var a=31-sn(r);o=1<<a,a=t[a],a>i&&(i=a),r&=~o}if(r=i,r=je()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Vk(r/1960))-r,10<r){e.timeoutHandle=Rf(Lr.bind(null,e,wt,In),r);break}Lr(e,wt,In);break;case 5:Lr(e,wt,In);break;default:throw Error(V(329))}}}return Et(e,je()),e.callbackNode===n?rb.bind(null,e):null}function rp(e,t){var n=ta;return e.current.memoizedState.isDehydrated&&(Hr(e,t).flags|=256),e=$l(e,t),e!==2&&(t=wt,wt=n,t!==null&&ip(t)),e}function ip(e){wt===null?wt=e:wt.push.apply(wt,e)}function Uk(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!fn(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function sr(e,t){for(t&=~Lh,t&=~bu,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-sn(t),r=1<<n;e[n]=-1,t&=~r}}function p0(e){if(se&6)throw Error(V(327));zi();var t=hl(e,0);if(!(t&1))return Et(e,je()),null;var n=$l(e,t);if(e.tag!==0&&n===2){var r=Of(e);r!==0&&(t=r,n=rp(e,r))}if(n===1)throw n=Ca,Hr(e,0),sr(e,t),Et(e,je()),n;if(n===6)throw Error(V(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Lr(e,wt,In),Et(e,je()),null}function Rh(e,t){var n=se;se|=1;try{return e(t)}finally{se=n,se===0&&(Xi=je()+500,gu&&Pr())}}function Qr(e){cr!==null&&cr.tag===0&&!(se&6)&&zi();var t=se;se|=1;var n=Gt.transition,r=he;try{if(Gt.transition=null,he=1,e)return e()}finally{he=r,Gt.transition=n,se=t,!(se&6)&&Pr()}}function Fh(){Mt=Ii.current,xe(Ii)}function Hr(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,xk(n)),De!==null)for(n=De.return;n!==null;){var r=n;switch(yh(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&xl();break;case 3:Yi(),xe(_t),xe(lt),Th();break;case 5:kh(r);break;case 4:Yi();break;case 13:xe(Ce);break;case 19:xe(Ce);break;case 10:Sh(r.type._context);break;case 22:case 23:Fh()}n=n.return}if(Ge=e,De=e=wr(e.current,null),Ze=Mt=t,Ne=0,Ca=null,Lh=bu=Kr=0,wt=ta=null,Br!==null){for(t=0;t<Br.length;t++)if(n=Br[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var a=o.next;o.next=i,r.next=a}n.pending=r}Br=null}return e}function ib(e,t){do{var n=De;try{if(wh(),zs.current=Pl,Tl){for(var r=Ee.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Tl=!1}if(Xr=0,We=Fe=Ee=null,Jo=!1,wa=0,Dh.current=null,n===null||n.return===null){Ne=1,Ca=t,De=null;break}e:{var o=e,a=n.return,l=n,s=t;if(t=Ze,l.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var u=s,d=l,c=d.tag;if(!(d.mode&1)&&(c===0||c===11||c===15)){var y=d.alternate;y?(d.updateQueue=y.updateQueue,d.memoizedState=y.memoizedState,d.lanes=y.lanes):(d.updateQueue=null,d.memoizedState=null)}var p=e0(a);if(p!==null){p.flags&=-257,t0(p,a,l,o,t),p.mode&1&&Jg(o,u,t),t=p,s=u;var m=t.updateQueue;if(m===null){var g=new Set;g.add(s),t.updateQueue=g}else m.add(s);break e}else{if(!(t&1)){Jg(o,u,t),zh();break e}s=Error(V(426))}}else if(_e&&l.mode&1){var w=e0(a);if(w!==null){!(w.flags&65536)&&(w.flags|=256),t0(w,a,l,o,t),xh(qi(s,l));break e}}o=s=qi(s,l),Ne!==4&&(Ne=2),ta===null?ta=[o]:ta.push(o),o=a;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var h=Bx(o,s,t);Gg(o,h);break e;case 1:l=s;var v=o.type,x=o.stateNode;if(!(o.flags&128)&&(typeof v.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(xr===null||!xr.has(x)))){o.flags|=65536,t&=-t,o.lanes|=t;var S=Vx(o,l,t);Gg(o,S);break e}}o=o.return}while(o!==null)}sb(n)}catch(E){t=E,De===n&&n!==null&&(De=n=n.return);continue}break}while(1)}function ob(){var e=Ol.current;return Ol.current=Pl,e===null?Pl:e}function zh(){(Ne===0||Ne===3||Ne===2)&&(Ne=4),Ge===null||!(Kr&268435455)&&!(bu&268435455)||sr(Ge,Ze)}function $l(e,t){var n=se;se|=2;var r=ob();(Ge!==e||Ze!==t)&&(In=null,Hr(e,t));do try{Hk();break}catch(i){ib(e,i)}while(1);if(wh(),se=n,Ol.current=r,De!==null)throw Error(V(261));return Ge=null,Ze=0,Ne}function Hk(){for(;De!==null;)ab(De)}function Wk(){for(;De!==null&&!gE();)ab(De)}function ab(e){var t=ub(e.alternate,e,Mt);e.memoizedProps=e.pendingProps,t===null?sb(e):De=t,Dh.current=null}function sb(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Fk(n,t),n!==null){n.flags&=32767,De=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ne=6,De=null;return}}else if(n=Rk(n,t,Mt),n!==null){De=n;return}if(t=t.sibling,t!==null){De=t;return}De=t=e}while(t!==null);Ne===0&&(Ne=5)}function Lr(e,t,n){var r=he,i=Gt.transition;try{Gt.transition=null,he=1,Gk(e,t,n,r)}finally{Gt.transition=i,he=r}return null}function Gk(e,t,n,r){do zi();while(cr!==null);if(se&6)throw Error(V(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(V(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(kE(e,o),e===Ge&&(De=Ge=null,Ze=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||gs||(gs=!0,cb(pl,function(){return zi(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Gt.transition,Gt.transition=null;var a=he;he=1;var l=se;se|=4,Dh.current=null,Nk(e,n),tb(n,e),fk(Lf),ml=!!Df,Lf=Df=null,e.current=n,Bk(n),vE(),se=l,he=a,Gt.transition=o}else e.current=n;if(gs&&(gs=!1,cr=e,Ml=i),o=e.pendingLanes,o===0&&(xr=null),bE(n.stateNode),Et(e,je()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(jl)throw jl=!1,e=tp,tp=null,e;return Ml&1&&e.tag!==0&&zi(),o=e.pendingLanes,o&1?e===np?na++:(na=0,np=e):na=0,Pr(),null}function zi(){if(cr!==null){var e=Ny(Ml),t=Gt.transition,n=he;try{if(Gt.transition=null,he=16>e?16:e,cr===null)var r=!1;else{if(e=cr,cr=null,Ml=0,se&6)throw Error(V(331));var i=se;for(se|=4,W=e.current;W!==null;){var o=W,a=o.child;if(W.flags&16){var l=o.deletions;if(l!==null){for(var s=0;s<l.length;s++){var u=l[s];for(W=u;W!==null;){var d=W;switch(d.tag){case 0:case 11:case 15:ea(8,d,o)}var c=d.child;if(c!==null)c.return=d,W=c;else for(;W!==null;){d=W;var y=d.sibling,p=d.return;if(Zx(d),d===u){W=null;break}if(y!==null){y.return=p,W=y;break}W=p}}}var m=o.alternate;if(m!==null){var g=m.child;if(g!==null){m.child=null;do{var w=g.sibling;g.sibling=null,g=w}while(g!==null)}}W=o}}if(o.subtreeFlags&2064&&a!==null)a.return=o,W=a;else e:for(;W!==null;){if(o=W,o.flags&2048)switch(o.tag){case 0:case 11:case 15:ea(9,o,o.return)}var h=o.sibling;if(h!==null){h.return=o.return,W=h;break e}W=o.return}}var v=e.current;for(W=v;W!==null;){a=W;var x=a.child;if(a.subtreeFlags&2064&&x!==null)x.return=a,W=x;else e:for(a=v;W!==null;){if(l=W,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:xu(9,l)}}catch(E){Te(l,l.return,E)}if(l===a){W=null;break e}var S=l.sibling;if(S!==null){S.return=l.return,W=S;break e}W=l.return}}if(se=i,Pr(),_n&&typeof _n.onPostCommitFiberRoot=="function")try{_n.onPostCommitFiberRoot(du,e)}catch{}r=!0}return r}finally{he=n,Gt.transition=t}}return!1}function h0(e,t,n){t=qi(n,t),t=Bx(e,t,1),e=yr(e,t,1),t=pt(),e!==null&&(Ra(e,1,t),Et(e,t))}function Te(e,t,n){if(e.tag===3)h0(e,e,n);else for(;t!==null;){if(t.tag===3){h0(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(xr===null||!xr.has(r))){e=qi(n,e),e=Vx(t,e,1),t=yr(t,e,1),e=pt(),t!==null&&(Ra(t,1,e),Et(t,e));break}}t=t.return}}function Yk(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=pt(),e.pingedLanes|=e.suspendedLanes&n,Ge===e&&(Ze&n)===n&&(Ne===4||Ne===3&&(Ze&130023424)===Ze&&500>je()-Ah?Hr(e,0):Lh|=n),Et(e,t)}function lb(e,t){t===0&&(e.mode&1?(t=as,as<<=1,!(as&130023424)&&(as=4194304)):t=1);var n=pt();e=Gn(e,t),e!==null&&(Ra(e,t,n),Et(e,n))}function qk(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),lb(e,n)}function Xk(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(V(314))}r!==null&&r.delete(t),lb(e,n)}var ub;ub=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||_t.current)St=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return St=!1,Ak(e,t,n);St=!!(e.flags&131072)}else St=!1,_e&&t.flags&1048576&&fx(t,Sl,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Bs(e,t),e=t.pendingProps;var i=Hi(t,lt.current);Fi(t,n),i=Oh(null,t,r,e,i,n);var o=jh();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ct(r)?(o=!0,bl(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Ch(t),i.updater=vu,t.stateNode=i,i._reactInternals=t,Hf(t,r,e,n),t=Yf(null,t,r,!0,o,n)):(t.tag=0,_e&&o&&vh(t),dt(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Bs(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Qk(r),e=tn(r,e),i){case 0:t=Gf(null,t,r,e,n);break e;case 1:t=i0(null,t,r,e,n);break e;case 11:t=n0(null,t,r,e,n);break e;case 14:t=r0(null,t,r,tn(r.type,e),n);break e}throw Error(V(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:tn(r,i),Gf(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:tn(r,i),i0(e,t,r,i,n);case 3:e:{if(Gx(t),e===null)throw Error(V(387));r=t.pendingProps,o=t.memoizedState,i=o.element,gx(e,t),El(t,r,null,n);var a=t.memoizedState;if(r=a.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=qi(Error(V(423)),t),t=o0(e,t,r,n,i);break e}else if(r!==i){i=qi(Error(V(424)),t),t=o0(e,t,r,n,i);break e}else for(It=vr(t.stateNode.containerInfo.firstChild),Lt=t,_e=!0,on=null,n=bx(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Wi(),r===i){t=Yn(e,t,n);break e}dt(e,t,r,n)}t=t.child}return t;case 5:return wx(t),e===null&&Bf(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,a=i.children,Af(r,i)?a=null:o!==null&&Af(r,o)&&(t.flags|=32),Wx(e,t),dt(e,t,a,n),t.child;case 6:return e===null&&Bf(t),null;case 13:return Yx(e,t,n);case 4:return Eh(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Gi(t,null,r,n):dt(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:tn(r,i),n0(e,t,r,i,n);case 7:return dt(e,t,t.pendingProps,n),t.child;case 8:return dt(e,t,t.pendingProps.children,n),t.child;case 12:return dt(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,a=i.value,ge(_l,r._currentValue),r._currentValue=a,o!==null)if(fn(o.value,a)){if(o.children===i.children&&!_t.current){t=Yn(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var l=o.dependencies;if(l!==null){a=o.child;for(var s=l.firstContext;s!==null;){if(s.context===r){if(o.tag===1){s=Bn(-1,n&-n),s.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?s.next=s:(s.next=d.next,d.next=s),u.pending=s}}o.lanes|=n,s=o.alternate,s!==null&&(s.lanes|=n),Vf(o.return,n,t),l.lanes|=n;break}s=s.next}}else if(o.tag===10)a=o.type===t.type?null:o.child;else if(o.tag===18){if(a=o.return,a===null)throw Error(V(341));a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),Vf(a,n,t),a=o.sibling}else a=o.child;if(a!==null)a.return=o;else for(a=o;a!==null;){if(a===t){a=null;break}if(o=a.sibling,o!==null){o.return=a.return,a=o;break}a=a.return}o=a}dt(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Fi(t,n),i=Yt(i),r=r(i),t.flags|=1,dt(e,t,r,n),t.child;case 14:return r=t.type,i=tn(r,t.pendingProps),i=tn(r.type,i),r0(e,t,r,i,n);case 15:return Ux(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:tn(r,i),Bs(e,t),t.tag=1,Ct(r)?(e=!0,bl(t)):e=!1,Fi(t,n),yx(t,r,i),Hf(t,r,i,n),Yf(null,t,r,!0,e,n);case 19:return qx(e,t,n);case 22:return Hx(e,t,n)}throw Error(V(156,t.tag))};function cb(e,t){return Ay(e,t)}function Kk(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Wt(e,t,n,r){return new Kk(e,t,n,r)}function Nh(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Qk(e){if(typeof e=="function")return Nh(e)?1:0;if(e!=null){if(e=e.$$typeof,e===oh)return 11;if(e===ah)return 14}return 2}function wr(e,t){var n=e.alternate;return n===null?(n=Wt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Hs(e,t,n,r,i,o){var a=2;if(r=e,typeof e=="function")Nh(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case _i:return Wr(n.children,i,o,t);case ih:a=8,i|=8;break;case hf:return e=Wt(12,n,t,i|2),e.elementType=hf,e.lanes=o,e;case mf:return e=Wt(13,n,t,i),e.elementType=mf,e.lanes=o,e;case gf:return e=Wt(19,n,t,i),e.elementType=gf,e.lanes=o,e;case xy:return wu(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case vy:a=10;break e;case yy:a=9;break e;case oh:a=11;break e;case ah:a=14;break e;case ir:a=16,r=null;break e}throw Error(V(130,e==null?e:typeof e,""))}return t=Wt(a,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function Wr(e,t,n,r){return e=Wt(7,e,r,t),e.lanes=n,e}function wu(e,t,n,r){return e=Wt(22,e,r,t),e.elementType=xy,e.lanes=n,e.stateNode={isHidden:!1},e}function od(e,t,n){return e=Wt(6,e,null,t),e.lanes=n,e}function ad(e,t,n){return t=Wt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Zk(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Nc(0),this.expirationTimes=Nc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Nc(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Bh(e,t,n,r,i,o,a,l,s){return e=new Zk(e,t,n,l,s),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Wt(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ch(o),e}function Jk(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Si,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function db(e){if(!e)return Cr;e=e._reactInternals;e:{if(oi(e)!==e||e.tag!==1)throw Error(V(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ct(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(V(171))}if(e.tag===1){var n=e.type;if(Ct(n))return cx(e,n,t)}return t}function fb(e,t,n,r,i,o,a,l,s){return e=Bh(n,r,!0,e,i,o,a,l,s),e.context=db(null),n=e.current,r=pt(),i=br(n),o=Bn(r,i),o.callback=t??null,yr(n,o,i),e.current.lanes=i,Ra(e,i,r),Et(e,r),e}function Su(e,t,n,r){var i=t.current,o=pt(),a=br(i);return n=db(n),t.context===null?t.context=n:t.pendingContext=n,t=Bn(o,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=yr(i,t,a),e!==null&&(ln(e,i,a,o),Fs(e,i,a)),a}function Il(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function m0(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Vh(e,t){m0(e,t),(e=e.alternate)&&m0(e,t)}function eT(){return null}var pb=typeof reportError=="function"?reportError:function(e){console.error(e)};function Uh(e){this._internalRoot=e}_u.prototype.render=Uh.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(V(409));Su(e,t,null,null)};_u.prototype.unmount=Uh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Qr(function(){Su(null,e,null,null)}),t[Wn]=null}};function _u(e){this._internalRoot=e}_u.prototype.unstable_scheduleHydration=function(e){if(e){var t=Uy();e={blockedOn:null,target:e,priority:t};for(var n=0;n<ar.length&&t!==0&&t<ar[n].priority;n++);ar.splice(n,0,e),n===0&&Wy(e)}};function Hh(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Cu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function g0(){}function tT(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=Il(a);o.call(u)}}var a=fb(t,r,e,0,null,!1,!1,"",g0);return e._reactRootContainer=a,e[Wn]=a.current,ga(e.nodeType===8?e.parentNode:e),Qr(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=Il(s);l.call(u)}}var s=Bh(e,0,!1,null,null,!1,!1,"",g0);return e._reactRootContainer=s,e[Wn]=s.current,ga(e.nodeType===8?e.parentNode:e),Qr(function(){Su(t,s,n,r)}),s}function Eu(e,t,n,r,i){var o=n._reactRootContainer;if(o){var a=o;if(typeof i=="function"){var l=i;i=function(){var s=Il(a);l.call(s)}}Su(t,a,e,i)}else a=tT(n,t,e,i,r);return Il(a)}By=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Bo(t.pendingLanes);n!==0&&(uh(t,n|1),Et(t,je()),!(se&6)&&(Xi=je()+500,Pr()))}break;case 13:Qr(function(){var r=Gn(e,1);if(r!==null){var i=pt();ln(r,e,1,i)}}),Vh(e,1)}};ch=function(e){if(e.tag===13){var t=Gn(e,134217728);if(t!==null){var n=pt();ln(t,e,134217728,n)}Vh(e,134217728)}};Vy=function(e){if(e.tag===13){var t=br(e),n=Gn(e,t);if(n!==null){var r=pt();ln(n,e,t,r)}Vh(e,t)}};Uy=function(){return he};Hy=function(e,t){var n=he;try{return he=e,t()}finally{he=n}};kf=function(e,t,n){switch(t){case"input":if(xf(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=mu(r);if(!i)throw Error(V(90));wy(r),xf(r,i)}}}break;case"textarea":_y(e,n);break;case"select":t=n.value,t!=null&&Di(e,!!n.multiple,t,!1)}};jy=Rh;My=Qr;var nT={usingClientEntryPoint:!1,Events:[za,Ti,mu,Py,Oy,Rh]},Mo={findFiberByHostInstance:Nr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},rT={bundleType:Mo.bundleType,version:Mo.version,rendererPackageName:Mo.rendererPackageName,rendererConfig:Mo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Qn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Dy(e),e===null?null:e.stateNode},findFiberByHostInstance:Mo.findFiberByHostInstance||eT,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var vs=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!vs.isDisabled&&vs.supportsFiber)try{du=vs.inject(rT),_n=vs}catch{}}zt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=nT;zt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Hh(t))throw Error(V(200));return Jk(e,t,null,n)};zt.createRoot=function(e,t){if(!Hh(e))throw Error(V(299));var n=!1,r="",i=pb;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Bh(e,1,!1,null,null,n,!1,r,i),e[Wn]=t.current,ga(e.nodeType===8?e.parentNode:e),new Uh(t)};zt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(V(188)):(e=Object.keys(e).join(","),Error(V(268,e)));return e=Dy(t),e=e===null?null:e.stateNode,e};zt.flushSync=function(e){return Qr(e)};zt.hydrate=function(e,t,n){if(!Cu(t))throw Error(V(200));return Eu(null,e,t,!0,n)};zt.hydrateRoot=function(e,t,n){if(!Hh(e))throw Error(V(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",a=pb;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=fb(t,null,e,1,n??null,i,!1,o,a),e[Wn]=t.current,ga(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new _u(t)};zt.render=function(e,t,n){if(!Cu(t))throw Error(V(200));return Eu(null,e,t,!1,n)};zt.unmountComponentAtNode=function(e){if(!Cu(e))throw Error(V(40));return e._reactRootContainer?(Qr(function(){Eu(null,null,e,!1,function(){e._reactRootContainer=null,e[Wn]=null})}),!0):!1};zt.unstable_batchedUpdates=Rh;zt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Cu(n))throw Error(V(200));if(e==null||e._reactInternals===void 0)throw Error(V(38));return Eu(e,t,n,!1,r)};zt.version="18.2.0-next-9e3b772b8-20220608";function hb(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(hb)}catch(e){console.error(e)}}hb(),fy.exports=zt;var ku=fy.exports,v0=ku;ff.createRoot=v0.createRoot,ff.hydrateRoot=v0.hydrateRoot;var st=function(){return st=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},st.apply(this,arguments)};function Ki(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,o;r<i;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))}function iT(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var oT=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|popover|popoverTarget|popoverTargetAction|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,aT=iT(function(e){return oT.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),ye="-ms-",ra="-moz-",ue="-webkit-",mb="comm",Tu="rule",Wh="decl",sT="@import",lT="@namespace",gb="@keyframes",uT="@layer",vb=Math.abs,Gh=String.fromCharCode,op=Object.assign;function cT(e,t){return ze(e,0)^45?(((t<<2^ze(e,0))<<2^ze(e,1))<<2^ze(e,2))<<2^ze(e,3):0}function yb(e){return e.trim()}function Dn(e,t){return(e=t.exec(e))?e[0]:e}function ne(e,t,n){return e.replace(t,n)}function Ws(e,t,n){return e.indexOf(t,n)}function ze(e,t){return e.charCodeAt(t)|0}function Zr(e,t,n){return e.slice(t,n)}function rn(e){return e.length}function xb(e){return e.length}function Uo(e,t){return t.push(e),e}function dT(e,t){return e.map(t).join("")}function y0(e,t){return e.filter(function(n){return!Dn(n,t)})}var Pu=1,Qi=1,bb=0,Xt=0,$e=0,fo="";function Ou(e,t,n,r,i,o,a,l){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:Pu,column:Qi,length:a,return:"",siblings:l}}function rr(e,t){return op(Ou("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function ci(e){for(;e.root;)e=rr(e.root,{children:[e]});Uo(e,e.siblings)}function fT(){return $e}function pT(){return $e=Xt>0?ze(fo,--Xt):0,Qi--,$e===10&&(Qi=1,Pu--),$e}function un(){return $e=Xt<bb?ze(fo,Xt++):0,Qi++,$e===10&&(Qi=1,Pu++),$e}function dr(){return ze(fo,Xt)}function Gs(){return Xt}function ju(e,t){return Zr(fo,e,t)}function Ea(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function hT(e){return Pu=Qi=1,bb=rn(fo=e),Xt=0,[]}function mT(e){return fo="",e}function sd(e){return yb(ju(Xt-1,ap(e===91?e+2:e===40?e+1:e)))}function gT(e){for(;($e=dr())&&$e<33;)un();return Ea(e)>2||Ea($e)>3?"":" "}function vT(e,t){for(;--t&&un()&&!($e<48||$e>102||$e>57&&$e<65||$e>70&&$e<97););return ju(e,Gs()+(t<6&&dr()==32&&un()==32))}function ap(e){for(;un();)switch($e){case e:return Xt;case 34:case 39:e!==34&&e!==39&&ap($e);break;case 40:e===41&&ap(e);break;case 92:un();break}return Xt}function yT(e,t){for(;un()&&e+$e!==47+10;)if(e+$e===42+42&&dr()===47)break;return"/*"+ju(t,Xt-1)+"*"+Gh(e===47?e:un())}function xT(e){for(;!Ea(dr());)un();return ju(e,Xt)}function bT(e){return mT(Ys("",null,null,null,[""],e=hT(e),0,[0],e))}function Ys(e,t,n,r,i,o,a,l,s){for(var u=0,d=0,c=a,y=0,p=0,m=0,g=1,w=1,h=1,v=0,x="",S=i,E=o,P=r,k=x;w;)switch(m=v,v=un()){case 40:if(m!=108&&ze(k,c-1)==58){Ws(k+=ne(sd(v),"&","&\f"),"&\f",vb(u?l[u-1]:0))!=-1&&(h=-1);break}case 34:case 39:case 91:k+=sd(v);break;case 9:case 10:case 13:case 32:k+=gT(m);break;case 92:k+=vT(Gs()-1,7);continue;case 47:switch(dr()){case 42:case 47:Uo(wT(yT(un(),Gs()),t,n,s),s),(Ea(m||1)==5||Ea(dr()||1)==5)&&rn(k)&&Zr(k,-1,void 0)!==" "&&(k+=" ");break;default:k+="/"}break;case 123*g:l[u++]=rn(k)*h;case 125*g:case 59:case 0:switch(v){case 0:case 125:w=0;case 59+d:h==-1&&(k=ne(k,/\f/g,"")),p>0&&(rn(k)-c||g===0&&m===47)&&Uo(p>32?b0(k+";",r,n,c-1,s):b0(ne(k," ","")+";",r,n,c-2,s),s);break;case 59:k+=";";default:if(Uo(P=x0(k,t,n,u,d,i,l,x,S=[],E=[],c,o),o),v===123)if(d===0)Ys(k,t,P,P,S,o,c,l,E);else{switch(y){case 99:if(ze(k,3)===110)break;case 108:if(ze(k,2)===97)break;default:d=0;case 100:case 109:case 115:}d?Ys(e,P,P,r&&Uo(x0(e,P,P,0,0,i,l,x,i,S=[],c,E),E),i,E,c,l,r?S:E):Ys(k,P,P,P,[""],E,0,l,E)}}u=d=p=0,g=h=1,x=k="",c=a;break;case 58:c=1+rn(k),p=m;default:if(g<1){if(v==123)--g;else if(v==125&&g++==0&&pT()==125)continue}switch(k+=Gh(v),v*g){case 38:h=d>0?1:(k+="\f",-1);break;case 44:l[u++]=(rn(k)-1)*h,h=1;break;case 64:dr()===45&&(k+=sd(un())),y=dr(),d=c=rn(x=k+=xT(Gs())),v++;break;case 45:m===45&&rn(k)==2&&(g=0)}}return o}function x0(e,t,n,r,i,o,a,l,s,u,d,c){for(var y=i-1,p=i===0?o:[""],m=xb(p),g=0,w=0,h=0;g<r;++g)for(var v=0,x=Zr(e,y+1,y=vb(w=a[g])),S=e;v<m;++v)(S=yb(w>0?p[v]+" "+x:ne(x,/&\f/g,p[v])))&&(s[h++]=S);return Ou(e,t,n,i===0?Tu:l,s,u,d,c)}function wT(e,t,n,r){return Ou(e,t,n,mb,Gh(fT()),Zr(e,2,-2),0,r)}function b0(e,t,n,r,i){return Ou(e,t,n,Wh,Zr(e,0,r),Zr(e,r+1,-1),r,i)}function wb(e,t,n){switch(cT(e,t)){case 5103:return ue+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return ue+e+e;case 4855:return ue+e.replace("add","source-over").replace("substract","source-out").replace("intersect","source-in").replace("exclude","xor")+e;case 4789:return ra+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return ue+e+ra+e+ye+e+e;case 5936:switch(ze(e,t+11)){case 114:return ue+e+ye+ne(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return ue+e+ye+ne(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return ue+e+ye+ne(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return ue+e+ye+e+e;case 6165:return ue+e+ye+"flex-"+e+e;case 5187:return ue+e+ne(e,/(\w+).+(:[^]+)/,ue+"box-$1$2"+ye+"flex-$1$2")+e;case 5443:return ue+e+ye+"flex-item-"+ne(e,/flex-|-self/g,"")+(Dn(e,/flex-|baseline/)?"":ye+"grid-row-"+ne(e,/flex-|-self/g,""))+e;case 4675:return ue+e+ye+"flex-line-pack"+ne(e,/align-content|flex-|-self/g,"")+e;case 5548:return ue+e+ye+ne(e,"shrink","negative")+e;case 5292:return ue+e+ye+ne(e,"basis","preferred-size")+e;case 6060:return ue+"box-"+ne(e,"-grow","")+ue+e+ye+ne(e,"grow","positive")+e;case 4554:return ue+ne(e,/([^-])(transform)/g,"$1"+ue+"$2")+e;case 6187:return ne(ne(ne(e,/(zoom-|grab)/,ue+"$1"),/(image-set)/,ue+"$1"),e,"")+e;case 5495:case 3959:return ne(e,/(image-set\([^]*)/,ue+"$1$`$1");case 4968:return ne(ne(e,/(.+:)(flex-)?(.*)/,ue+"box-pack:$3"+ye+"flex-pack:$3"),/space-between/,"justify")+ue+e+e;case 4200:if(!Dn(e,/flex-|baseline/))return ye+"grid-column-align"+Zr(e,t)+e;break;case 2592:case 3360:return ye+ne(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,i){return t=i,Dn(r.props,/grid-\w+-end/)})?~Ws(e+(n=n[t].value),"span",0)?e:ye+ne(e,"-start","")+e+ye+"grid-row-span:"+(~Ws(n,"span",0)?Dn(n,/\d+/):+Dn(n,/\d+/)-+Dn(e,/\d+/))+";":ye+ne(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return Dn(r.props,/grid-\w+-start/)})?e:ye+ne(ne(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return ne(e,/(.+)-inline(.+)/,ue+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(rn(e)-1-t>6)switch(ze(e,t+1)){case 109:if(ze(e,t+4)!==45)break;case 102:return ne(e,/(.+:)(.+)-([^]+)/,"$1"+ue+"$2-$3$1"+ra+(ze(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Ws(e,"stretch",0)?wb(ne(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return ne(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,o,a,l,s,u){return ye+i+":"+o+u+(a?ye+i+"-span:"+(l?s:+s-+o)+u:"")+e});case 4949:if(ze(e,t+6)===121)return ne(e,":",":"+ue)+e;break;case 6444:switch(ze(e,ze(e,14)===45?18:11)){case 120:return ne(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+ue+(ze(e,14)===45?"inline-":"")+"box$3$1"+ue+"$2$3$1"+ye+"$2box$3")+e;case 100:return ne(e,":",":"+ye)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return ne(e,"scroll-","scroll-snap-")+e}return e}function Dl(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function ST(e,t,n,r){switch(e.type){case uT:if(e.children.length)break;case sT:case lT:case Wh:return e.return=e.return||e.value;case mb:return"";case gb:return e.return=e.value+"{"+Dl(e.children,r)+"}";case Tu:if(!rn(e.value=e.props.join(",")))return""}return rn(n=Dl(e.children,r))?e.return=e.value+"{"+n+"}":""}function _T(e){var t=xb(e);return function(n,r,i,o){for(var a="",l=0;l<t;l++)a+=e[l](n,r,i,o)||"";return a}}function CT(e){return function(t){t.root||(t=t.return)&&e(t)}}function ET(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case Wh:e.return=wb(e.value,e.length,n);return;case gb:return Dl([rr(e,{value:ne(e.value,"@","@"+ue)})],r);case Tu:if(e.length)return dT(n=e.props,function(i){switch(Dn(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":ci(rr(e,{props:[ne(i,/:(read-\w+)/,":"+ra+"$1")]})),ci(rr(e,{props:[i]})),op(e,{props:y0(n,r)});break;case"::placeholder":ci(rr(e,{props:[ne(i,/:(plac\w+)/,":"+ue+"input-$1")]})),ci(rr(e,{props:[ne(i,/:(plac\w+)/,":"+ra+"$1")]})),ci(rr(e,{props:[ne(i,/:(plac\w+)/,ye+"input-$1")]})),ci(rr(e,{props:[i]})),op(e,{props:y0(n,r)});break}return""})}}var kT={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Zi=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",Sb="active",_b="data-styled-version",Mu="6.3.11",Yh=`/*!sc*/
`,ia=typeof window<"u"&&typeof document<"u",TT=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY),PT={};function Ba(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var qs=new Map,Ll=new Map,Xs=1,Ho=function(e){if(qs.has(e))return qs.get(e);for(;Ll.has(Xs);)Xs++;var t=Xs++;return qs.set(e,t),Ll.set(t,e),t},OT=function(e,t){Xs=t+1,qs.set(e,t),Ll.set(t,e)},qh=Object.freeze([]),Ji=Object.freeze({});function Cb(e,t,n){return n===void 0&&(n=Ji),e.theme!==n.theme&&e.theme||t||n.theme}var Eb=new Set(["a","abbr","address","area","article","aside","audio","b","bdi","bdo","blockquote","body","button","br","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","main","map","mark","menu","meter","nav","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","slot","small","span","strong","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","switch","symbol","text","textPath","tspan","use"]),jT=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,MT=/(^-|-$)/g;function w0(e){return e.replace(jT,"-").replace(MT,"")}var $T=/(a)(d)/gi,S0=function(e){return String.fromCharCode(e+(e>25?39:97))};function sp(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=S0(t%52)+n;return(S0(t%52)+n).replace($T,"$1-$2")}var ld,Ar=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},kb=function(e){return Ar(5381,e)};function Xh(e){return sp(kb(e)>>>0)}function IT(e){return e.displayName||e.name||"Component"}function ud(e){return typeof e=="string"&&!0}var Tb=typeof Symbol=="function"&&Symbol.for,Pb=Tb?Symbol.for("react.memo"):60115,DT=Tb?Symbol.for("react.forward_ref"):60112,LT={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},AT={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Ob={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},RT=((ld={})[DT]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},ld[Pb]=Ob,ld);function _0(e){return("type"in(t=e)&&t.type.$$typeof)===Pb?Ob:"$$typeof"in e?RT[e.$$typeof]:LT;var t}var FT=Object.defineProperty,zT=Object.getOwnPropertyNames,C0=Object.getOwnPropertySymbols,NT=Object.getOwnPropertyDescriptor,BT=Object.getPrototypeOf,E0=Object.prototype;function jb(e,t,n){if(typeof t!="string"){if(E0){var r=BT(t);r&&r!==E0&&jb(e,r,n)}var i=zT(t);C0&&(i=i.concat(C0(t)));for(var o=_0(e),a=_0(t),l=0;l<i.length;++l){var s=i[l];if(!(s in AT||n&&n[s]||a&&s in a||o&&s in o)){var u=NT(t,s);try{FT(e,s,u)}catch{}}}}return e}function eo(e){return typeof e=="function"}function Kh(e){return typeof e=="object"&&"styledComponentId"in e}function Ur(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Al(e,t){return e.join(t||"")}function ka(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function lp(e,t,n){if(n===void 0&&(n=!1),!n&&!ka(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=lp(e[r],t[r]);else if(ka(t))for(var r in t)e[r]=lp(e[r],t[r]);return e}function Qh(e,t){Object.defineProperty(e,"toString",{value:t})}var VT=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t,this._cGroup=0,this._cIndex=0}return e.prototype.indexOfGroup=function(t){if(t===this._cGroup)return this._cIndex;var n=this._cIndex;if(t>this._cGroup)for(var r=this._cGroup;r<t;r++)n+=this.groupSizes[r];else for(r=this._cGroup-1;r>=t;r--)n-=this.groupSizes[r];return this._cGroup=t,this._cIndex=n,n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,o=i;t>=o;)if((o<<=1)<0)throw Ba(16,"".concat(t));this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var a=i;a<o;a++)this.groupSizes[a]=0}for(var l=this.indexOfGroup(t+1),s=0,u=(a=0,n.length);a<u;a++)this.tag.insertRule(l,n[a])&&(this.groupSizes[t]++,l++,s++);s>0&&this._cGroup>t&&(this._cIndex+=s)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),i=r+n;this.groupSizes[t]=0;for(var o=r;o<i;o++)this.tag.deleteRule(r);n>0&&this._cGroup>t&&(this._cIndex-=n)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],i=this.indexOfGroup(t),o=i+r,a=i;a<o;a++)n+=this.tag.getRule(a)+Yh;return n},e}(),UT="style[".concat(Zi,"][").concat(_b,'="').concat(Mu,'"]'),HT=new RegExp("^".concat(Zi,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),k0=function(e){return typeof ShadowRoot<"u"&&e instanceof ShadowRoot||"host"in e&&e.nodeType===11},up=function(e){if(!e)return document;if(k0(e))return e;if("getRootNode"in e){var t=e.getRootNode();if(k0(t))return t}return document},WT=function(e,t,n){for(var r,i=n.split(","),o=0,a=i.length;o<a;o++)(r=i[o])&&e.registerName(t,r)},GT=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(Yh),i=[],o=0,a=r.length;o<a;o++){var l=r[o].trim();if(l){var s=l.match(HT);if(s){var u=0|parseInt(s[1],10),d=s[2];u!==0&&(OT(d,u),WT(e,d,s[3]),e.getTag().insertRules(u,i)),i.length=0}else i.push(l)}}},cd=function(e){for(var t=up(e.options.target).querySelectorAll(UT),n=0,r=t.length;n<r;n++){var i=t[n];i&&i.getAttribute(Zi)!==Sb&&(GT(e,i),i.parentNode&&i.parentNode.removeChild(i))}};function YT(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Mb=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(l){var s=Array.from(l.querySelectorAll("style[".concat(Zi,"]")));return s[s.length-1]}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(Zi,Sb),r.setAttribute(_b,Mu);var a=YT();return a&&r.setAttribute("nonce",a),n.insertBefore(r,o),r},qT=function(){function e(t){this.element=Mb(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){var r;if(n.sheet)return n.sheet;for(var i=(r=n.getRootNode().styleSheets)!==null&&r!==void 0?r:document.styleSheets,o=0,a=i.length;o<a;o++){var l=i[o];if(l.ownerNode===n)return l}throw Ba(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),XT=function(){function e(t){this.element=Mb(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),KT=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(t===this.length?this.rules.push(n):this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),T0=ia,QT={isServer:!ia,useCSSOMInjection:!TT},Rl=function(){function e(t,n,r){t===void 0&&(t=Ji),n===void 0&&(n={});var i=this;this.options=st(st({},QT),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&ia&&T0&&(T0=!1,cd(this)),Qh(this,function(){return function(o){for(var a=o.getTag(),l=a.length,s="",u=function(c){var y=function(h){return Ll.get(h)}(c);if(y===void 0)return"continue";var p=o.names.get(y);if(p===void 0||!p.size)return"continue";var m=a.getGroup(c);if(m.length===0)return"continue";var g=Zi+".g"+c+'[id="'+y+'"]',w="";p.forEach(function(h){h.length>0&&(w+=h+",")}),s+=m+g+'{content:"'+w+'"}'+Yh},d=0;d<l;d++)u(d);return s}(i)})}return e.registerId=function(t){return Ho(t)},e.prototype.rehydrate=function(){!this.server&&ia&&cd(this)},e.prototype.reconstructWithOptions=function(t,n){n===void 0&&(n=!0);var r=new e(st(st({},this.options),t),this.gs,n&&this.names||void 0);return!this.server&&ia&&t.target!==this.options.target&&up(this.options.target)!==up(t.target)&&cd(r),r},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new KT(i):r?new qT(i):new XT(i)}(this.options),new VT(t)));var t},e.prototype.hasNameForId=function(t,n){var r,i;return(i=(r=this.names.get(t))===null||r===void 0?void 0:r.has(n))!==null&&i!==void 0&&i},e.prototype.registerName=function(t,n){Ho(t);var r=this.names.get(t);r?r.add(n):this.names.set(t,new Set([n]))},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(Ho(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(Ho(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),ZT=/&/g,Ln=47,Rr=42;function P0(e){if(e.indexOf("}")===-1)return!1;for(var t=e.length,n=0,r=0,i=!1,o=0;o<t;o++){var a=e.charCodeAt(o);if(r!==0||i||a!==Ln||e.charCodeAt(o+1)!==Rr)if(i)a===Rr&&e.charCodeAt(o+1)===Ln&&(i=!1,o++);else if(a!==34&&a!==39||o!==0&&e.charCodeAt(o-1)===92){if(r===0){if(a===123)n++;else if(a===125&&--n<0)return!0}}else r===0?r=a:r===a&&(r=0);else i=!0,o++}return n!==0||r!==0}function $b(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=$b(n.children,t)),n})}function JT(e){var t,n,r,i=e===void 0?Ji:e,o=i.options,a=o===void 0?Ji:o,l=i.plugins,s=l===void 0?qh:l,u=function(m,g,w){return w.startsWith(n)&&w.endsWith(n)&&w.replaceAll(n,"").length>0?".".concat(t):m},d=s.slice();d.push(function(m){m.type===Tu&&m.value.includes("&")&&(r||(r=new RegExp("\\".concat(n,"\\b"),"g")),m.props[0]=m.props[0].replace(ZT,n).replace(r,u))}),a.prefix&&d.push(ET),d.push(ST);var c=[],y=_T(d.concat(CT(function(m){return c.push(m)}))),p=function(m,g,w,h){g===void 0&&(g=""),w===void 0&&(w=""),h===void 0&&(h="&"),t=h,n=g,r=void 0;var v=function(S){if(!P0(S))return S;for(var E=S.length,P="",k=0,_=0,M=0,$=!1,D=0;D<E;D++){var A=S.charCodeAt(D);if(M!==0||$||A!==Ln||S.charCodeAt(D+1)!==Rr)if($)A===Rr&&S.charCodeAt(D+1)===Ln&&($=!1,D++);else if(A!==34&&A!==39||D!==0&&S.charCodeAt(D-1)===92){if(M===0)if(A===123)_++;else if(A===125){if(--_<0){for(var j=D+1;j<E;){var F=S.charCodeAt(j);if(F===59||F===10)break;j++}j<E&&S.charCodeAt(j)===59&&j++,_=0,D=j-1,k=j;continue}_===0&&(P+=S.substring(k,D+1),k=D+1)}else A===59&&_===0&&(P+=S.substring(k,D+1),k=D+1)}else M===0?M=A:M===A&&(M=0);else $=!0,D++}if(k<E){var R=S.substring(k);P0(R)||(P+=R)}return P}(function(S){if(S.indexOf("//")===-1)return S;for(var E=S.length,P=[],k=0,_=0,M=0,$=0;_<E;){var D=S.charCodeAt(_);if(D!==34&&D!==39||_!==0&&S.charCodeAt(_-1)===92)if(M===0)if(D===Ln&&_+1<E&&S.charCodeAt(_+1)===Rr){for(_+=2;_+1<E&&(S.charCodeAt(_)!==Rr||S.charCodeAt(_+1)!==Ln);)_++;_+=2}else if(D===40&&_>=3&&(32|S.charCodeAt(_-1))==108&&(32|S.charCodeAt(_-2))==114&&(32|S.charCodeAt(_-3))==117)$=1,_++;else if($>0)D===41?$--:D===40&&$++,_++;else if(D===Rr&&_+1<E&&S.charCodeAt(_+1)===Ln)_>k&&P.push(S.substring(k,_)),k=_+=2;else if(D===Ln&&_+1<E&&S.charCodeAt(_+1)===Ln){for(_>k&&P.push(S.substring(k,_));_<E&&S.charCodeAt(_)!==10;)_++;k=_}else _++;else _++;else M===0?M=D:M===D&&(M=0),_++}return k===0?S:(k<E&&P.push(S.substring(k)),P.join(""))}(m)),x=bT(w||g?"".concat(w," ").concat(g," { ").concat(v," }"):v);return a.namespace&&(x=$b(x,a.namespace)),c=[],Dl(x,y),c};return p.hash=s.length?s.reduce(function(m,g){return g.name||Ba(15),Ar(m,g.name)},5381).toString():"",p}var eP=new Rl,cp=JT(),Ib=K.createContext({shouldForwardProp:void 0,styleSheet:eP,stylis:cp});Ib.Consumer;K.createContext(void 0);function dp(){return K.useContext(Ib)}var Db=function(){function e(t,n){var r=this;this.inject=function(i,o){o===void 0&&(o=cp);var a=r.name+o.hash;i.hasNameForId(r.id,a)||i.insertRules(r.id,a,o(r.rules,a,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,Qh(this,function(){throw Ba(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=cp),this.name+t.hash},e}();function tP(e,t){return t==null||typeof t=="boolean"||t===""?"":typeof t!="number"||t===0||e in kT||e.startsWith("--")?String(t).trim():"".concat(t,"px")}var nP=function(e){return e>="A"&&e<="Z"};function O0(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;nP(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var Lb=function(e){return e==null||e===!1||e===""},Ab=function(e){var t=[];for(var n in e){var r=e[n];e.hasOwnProperty(n)&&!Lb(r)&&(Array.isArray(r)&&r.isCss||eo(r)?t.push("".concat(O0(n),":"),r,";"):ka(r)?t.push.apply(t,Ki(Ki(["".concat(n," {")],Ab(r),!1),["}"],!1)):t.push("".concat(O0(n),": ").concat(tP(n,r),";")))}return t};function Sr(e,t,n,r,i){if(i===void 0&&(i=[]),typeof e=="string")return e&&i.push(e),i;if(Lb(e))return i;if(Kh(e))return i.push(".".concat(e.styledComponentId)),i;if(eo(e)){if(!eo(a=e)||a.prototype&&a.prototype.isReactComponent||!t)return i.push(e),i;var o=e(t);return Sr(o,t,n,r,i)}var a;if(e instanceof Db)return n?(e.inject(n,r),i.push(e.getName(r))):i.push(e),i;if(ka(e)){for(var l=Ab(e),s=0;s<l.length;s++)i.push(l[s]);return i}if(!Array.isArray(e))return i.push(e.toString()),i;for(s=0;s<e.length;s++)Sr(e[s],t,n,r,i);return i}function Rb(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(eo(n)&&!Kh(n))return!1}return!0}var rP=kb(Mu),iP=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&Rb(t),this.componentId=n,this.baseHash=Ar(rP,n),this.baseStyle=r,Rl.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r).className:"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=Ur(i,this.staticRulesId);else{var o=Al(Sr(this.rules,t,n,r)),a=sp(Ar(this.baseHash,o)>>>0);if(!n.hasNameForId(this.componentId,a)){var l=r(o,".".concat(a),void 0,this.componentId);n.insertRules(this.componentId,a,l)}i=Ur(i,a),this.staticRulesId=a}else{for(var s=Ar(this.baseHash,r.hash),u="",d=0;d<this.rules.length;d++){var c=this.rules[d];if(typeof c=="string")u+=c;else if(c){var y=Al(Sr(c,t,n,r));s=Ar(Ar(s,String(d)),y),u+=y}}if(u){var p=sp(s>>>0);if(!n.hasNameForId(this.componentId,p)){var m=r(u,".".concat(p),void 0,this.componentId);n.insertRules(this.componentId,p,m)}i=Ur(i,p)}}return{className:i,css:typeof window>"u"?n.getTag().getGroup(Ho(this.componentId)):""}},e}(),Zh=K.createContext(void 0);Zh.Consumer;var dd={};function oP(e,t,n){var r=Kh(e),i=e,o=!ud(e),a=t.attrs,l=a===void 0?qh:a,s=t.componentId,u=s===void 0?function(S,E){var P=typeof S!="string"?"sc":w0(S);dd[P]=(dd[P]||0)+1;var k="".concat(P,"-").concat(Xh(Mu+P+dd[P]));return E?"".concat(E,"-").concat(k):k}(t.displayName,t.parentComponentId):s,d=t.displayName,c=d===void 0?function(S){return ud(S)?"styled.".concat(S):"Styled(".concat(IT(S),")")}(e):d,y=t.displayName&&t.componentId?"".concat(w0(t.displayName),"-").concat(t.componentId):t.componentId||u,p=r&&i.attrs?i.attrs.concat(l).filter(Boolean):l,m=t.shouldForwardProp;if(r&&i.shouldForwardProp){var g=i.shouldForwardProp;if(t.shouldForwardProp){var w=t.shouldForwardProp;m=function(S,E){return g(S,E)&&w(S,E)}}else m=g}var h=new iP(n,y,r?i.componentStyle:void 0);function v(S,E){return function(P,k,_){var M=P.attrs,$=P.componentStyle,D=P.defaultProps,A=P.foldedComponentIds,j=P.styledComponentId,F=P.target,R=K.useContext(Zh),L=dp(),O=P.shouldForwardProp||L.shouldForwardProp,T=Cb(k,R,D)||Ji,I=function(X,ee,fe){for(var be,ie=st(st({},ee),{className:void 0,theme:fe}),Me=0;Me<X.length;Me+=1){var Be=eo(be=X[Me])?be(ie):be;for(var Ve in Be)Ve==="className"?ie.className=Ur(ie.className,Be[Ve]):Ve==="style"?ie.style=st(st({},ie.style),Be[Ve]):ie[Ve]=Be[Ve]}return"className"in ee&&typeof ee.className=="string"&&(ie.className=Ur(ie.className,ee.className)),ie}(M,k,T),z=I.as||F,B={};for(var N in I)I[N]===void 0||N[0]==="$"||N==="as"||N==="theme"&&I.theme===T||(N==="forwardedAs"?B.as=I.forwardedAs:O&&!O(N,z)||(B[N]=I[N]));var U=function(X,ee){var fe=dp(),be=X.generateAndInjectStyles(ee,fe.styleSheet,fe.stylis);return be}($,I),G=U.className,H=Ur(A,j);return G&&(H+=" "+G),I.className&&(H+=" "+I.className),B[ud(z)&&!Eb.has(z)?"class":"className"]=H,_&&(B.ref=_),b.createElement(z,B)}(x,S,E)}v.displayName=c;var x=K.forwardRef(v);return x.attrs=p,x.componentStyle=h,x.displayName=c,x.shouldForwardProp=m,x.foldedComponentIds=r?Ur(i.foldedComponentIds,i.styledComponentId):"",x.styledComponentId=y,x.target=r?i.target:e,Object.defineProperty(x,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(S){this._foldedDefaultProps=r?function(E){for(var P=[],k=1;k<arguments.length;k++)P[k-1]=arguments[k];for(var _=0,M=P;_<M.length;_++)lp(E,M[_],!0);return E}({},i.defaultProps,S):S}}),Qh(x,function(){return".".concat(x.styledComponentId)}),o&&jb(x,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),x}function j0(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var M0=function(e){return Object.assign(e,{isCss:!0})};function Jh(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(eo(e)||ka(e))return M0(Sr(j0(qh,Ki([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?Sr(r):M0(Sr(j0(r,t)))}function fp(e,t,n){if(n===void 0&&(n=Ji),!t)throw Ba(1,t);var r=function(i){for(var o=[],a=1;a<arguments.length;a++)o[a-1]=arguments[a];return e(t,n,Jh.apply(void 0,Ki([i],o,!1)))};return r.attrs=function(i){return fp(e,t,st(st({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return fp(e,t,st(st({},n),i))},r}var Fb=function(e){return fp(oP,e)},C=Fb;Eb.forEach(function(e){C[e]=Fb(e)});var aP=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=Rb(t),Rl.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,r,i){var o=i(Al(Sr(this.rules,n,r,i)),""),a=this.componentId+t;r.insertRules(a,a,o)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,r,i){t>2&&Rl.registerId(this.componentId+t);var o=this.componentId+t;this.isStatic?r.hasNameForId(o,o)||this.createStyles(t,n,r,i):(this.removeStyles(t,r),this.createStyles(t,n,r,i))},e}();function sP(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=Jh.apply(void 0,Ki([e],t,!1)),i="sc-global-".concat(Xh(JSON.stringify(r))),o=new aP(r,i),a=new WeakMap,l=function(u){var d=dp(),c=K.useContext(Zh),y=a.get(d.styleSheet);return y===void 0&&(y=d.styleSheet.allocateGSInstance(i),a.set(d.styleSheet,y)),(typeof window>"u"||!d.styleSheet.server)&&s(y,u,d.styleSheet,c,d.stylis),K.useLayoutEffect(function(){return d.styleSheet.server||s(y,u,d.styleSheet,c,d.stylis),function(){var p;o.removeStyles(y,d.styleSheet),p=d.styleSheet.options.target,typeof document<"u"&&(p??document).querySelectorAll('style[data-styled-global="'.concat(i,'"]')).forEach(function(m){return m.remove()})}},[y,u,d.styleSheet,c,d.stylis]),null};function s(u,d,c,y,p){if(o.isStatic)o.renderStyles(u,PT,c,p);else{var m=st(st({},d),{theme:Cb(d,y,l.defaultProps)});o.renderStyles(u,m,c,p)}}return K.memo(l)}function em(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=Al(Jh.apply(void 0,Ki([e],t,!1))),i=Xh(r);return new Db(i,r)}const lP=C.div`
position: sticky;
  top: 0;
  z-index: 1000;
      background: radial-gradient(circle at 50% 45%, #5c5149 0%, #4b3c34 35%, #352b25 65%, #1b1412 100%);


`,uP=C.div`
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
`,cP=C.div`
width: 100%;
  display: flex;
      gap: 10px;

  flex-direction: column;
  @media screen and (min-width: 768px) {
    justify-content: space-around;
  }
`,dP=C.div`

  display: flex;
  @media screen and (max-width: 1023px) {
    justify-content: space-between;
  }
`,fP=C.div`
  display: flex;
  justify-content: space-around;
  

  @media screen and (min-width: 1023px) {
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    flex: 1;
  }
`,pP=C.button`
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

    
`;C(Oe)`
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
`;const hP=C(Oe)`
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
`;const mP=C.svg`
  width: 30px;
  height: 30px;
  fill: var(--white-color);
`,gP=C.button`
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
`;const vP=C.div`
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
`,yP=C.button`
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
`,xP=C.nav`
  display: flex;
  flex-direction: column;
  gap: 25px;
`,di=C(Oe)`
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
`,bP=C.div`
  margin-top: auto;
  border-top: 1px solid #eee;
  padding-top: 20px;
  font-size: 14px;
  color: #888;
  text-align: center;
`,wP=C.div`
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
`,SP=C.div`
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
`,_P=C.input`
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
`,CP=C.button`
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
`,EP=C.svg`
  width: 24px;
  height: 24px;
`,kP=C.ul`
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
`,TP=C.li`
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


`,PP=C.img`
 width: 100px;
    height: 100px;
    object-fit: cover;
 `,OP=C.h3`
      text-align: left;
      font-size: 22px;
      font-weight: 800;

`,jP=C.h3`

      font-size: 22px;
         

`,MP=C.div`
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

    
`,cn="/Didiv/assets/symbol-defs-fb9ce9f0.svg",$P=()=>{const[e,t]=b.useState(""),[n,r]=b.useState([]),[i,o]=b.useState(!1),a=On(),l=b.useRef(null);b.useEffect(()=>{if(e.trim().length<2){r([]),o(!1);return}const u=setTimeout(async()=>{try{const c=await(await fetch(`https://backenddidiv-production.up.railway.app/api/products?filters[name][$containsi]=${e}&populate=*`)).json();r(c.data),o(!0)}catch(d){console.error(d)}},300);return()=>clearTimeout(u)},[e]),b.useEffect(()=>{const u=d=>{l.current&&!l.current.contains(d.target)&&o(!1)};return document.addEventListener("mousedown",u),()=>{document.removeEventListener("mousedown",u)}},[]);const s=u=>{t(""),o(!1),a(`/product/${u.id}`)};return f.jsxs(SP,{ref:l,children:[f.jsx(_P,{name:"site-search",value:e,onChange:u=>t(u.target.value),placeholder:"Пошук",autoComplete:"off",onFocus:()=>e.trim().length>=2&&o(!0)}),f.jsx(CP,{className:"search-button",children:f.jsx(EP,{children:f.jsx("use",{href:`${cn}#icon-search`})})}),i&&n.length>0&&f.jsx(kP,{children:n.map(u=>{var y,p;const c=u.new_price&&u.new_price<u.price?u.new_price:u.price;return f.jsxs(TP,{onClick:()=>s(u),children:[f.jsx(PP,{src:((p=(y=u.images)==null?void 0:y[0])==null?void 0:p.url)||"/nofoto.png",alt:""}),f.jsxs(MP,{children:[f.jsx(OP,{children:u.name}),f.jsxs(jP,{children:[c," грн."]})]})]},u.id)})})]})};var zb={exports:{}},Nb={};/**
 * @license React
 * use-sync-external-store-with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Va=b;function IP(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var DP=typeof Object.is=="function"?Object.is:IP,LP=Va.useSyncExternalStore,AP=Va.useRef,RP=Va.useEffect,FP=Va.useMemo,zP=Va.useDebugValue;Nb.useSyncExternalStoreWithSelector=function(e,t,n,r,i){var o=AP(null);if(o.current===null){var a={hasValue:!1,value:null};o.current=a}else a=o.current;o=FP(function(){function s(p){if(!u){if(u=!0,d=p,p=r(p),i!==void 0&&a.hasValue){var m=a.value;if(i(m,p))return c=m}return c=p}if(m=c,DP(d,p))return m;var g=r(p);return i!==void 0&&i(m,g)?(d=p,m):(d=p,c=g)}var u=!1,d,c,y=n===void 0?null:n;return[function(){return s(t())},y===null?void 0:function(){return s(y())}]},[t,n,r,i]);var l=LP(e,o[0],o[1]);return RP(function(){a.hasValue=!0,a.value=l},[l]),zP(l),l};zb.exports=Nb;var NP=zb.exports;function BP(e){e()}function VP(){let e=null,t=null;return{clear(){e=null,t=null},notify(){BP(()=>{let n=e;for(;n;)n.callback(),n=n.next})},get(){const n=[];let r=e;for(;r;)n.push(r),r=r.next;return n},subscribe(n){let r=!0;const i=t={callback:n,next:null,prev:t};return i.prev?i.prev.next=i:e=i,function(){!r||e===null||(r=!1,i.next?i.next.prev=i.prev:t=i.prev,i.prev?i.prev.next=i.next:e=i.next)}}}}var $0={notify(){},get:()=>[]};function UP(e,t){let n,r=$0,i=0,o=!1;function a(g){d();const w=r.subscribe(g);let h=!1;return()=>{h||(h=!0,w(),c())}}function l(){r.notify()}function s(){m.onStateChange&&m.onStateChange()}function u(){return o}function d(){i++,n||(n=t?t.addNestedSub(s):e.subscribe(s),r=VP())}function c(){i--,n&&i===0&&(n(),n=void 0,r.clear(),r=$0)}function y(){o||(o=!0,d())}function p(){o&&(o=!1,c())}const m={addNestedSub:a,notifyNestedSubs:l,handleChangeWrapper:s,isSubscribed:u,trySubscribe:y,tryUnsubscribe:p,getListeners:()=>r};return m}var HP=()=>typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",WP=HP(),GP=()=>typeof navigator<"u"&&navigator.product==="ReactNative",YP=GP(),qP=()=>WP||YP?b.useLayoutEffect:b.useEffect,XP=qP(),fd=Symbol.for("react-redux-context"),pd=typeof globalThis<"u"?globalThis:{};function KP(){if(!b.createContext)return{};const e=pd[fd]??(pd[fd]=new Map);let t=e.get(b.createContext);return t||(t=b.createContext(null),e.set(b.createContext,t)),t}var Er=KP();function QP(e){const{children:t,context:n,serverState:r,store:i}=e,o=b.useMemo(()=>{const s=UP(i);return{store:i,subscription:s,getServerState:r?()=>r:void 0}},[i,r]),a=b.useMemo(()=>i.getState(),[i]);XP(()=>{const{subscription:s}=o;return s.onStateChange=s.notifyNestedSubs,s.trySubscribe(),a!==i.getState()&&s.notifyNestedSubs(),()=>{s.tryUnsubscribe(),s.onStateChange=void 0}},[o,a]);const l=n||Er;return b.createElement(l.Provider,{value:o},t)}var ZP=QP;function tm(e=Er){return function(){return b.useContext(e)}}var Bb=tm();function Vb(e=Er){const t=e===Er?Bb:tm(e),n=()=>{const{store:r}=t();return r};return Object.assign(n,{withTypes:()=>n}),n}var JP=Vb();function eO(e=Er){const t=e===Er?JP:Vb(e),n=()=>t().dispatch;return Object.assign(n,{withTypes:()=>n}),n}var jn=eO(),tO=(e,t)=>e===t;function nO(e=Er){const t=e===Er?Bb:tm(e),n=(r,i={})=>{const{equalityFn:o=tO}=typeof i=="function"?{equalityFn:i}:i,a=t(),{store:l,subscription:s,getServerState:u}=a;b.useRef(!0);const d=b.useCallback({[r.name](y){return r(y)}}[r.name],[r]),c=NP.useSyncExternalStoreWithSelector(s.addNestedSub,l.getState,u||l.getState,d,o);return b.useDebugValue(c),c};return Object.assign(n,{withTypes:()=>n}),n}var Ye=nO();const rO=C(Oe)`
      display: flex;
    align-items: center;
    align-content: center;
    justify-content: center;
    
    @media screen and (min-width: 1023px) {
   order: 2;
  margin-right: 10px;
  
  }
       
`,iO=C.svg`
  width: 30px;
  height: 30px;
 fill: var(--white-color);
`,oO=C.div`

width:30px;
height:30px;

  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 28px; 
  cursor: pointer;
`,aO=C.div`
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
`,sO=({onClick:e})=>{const t=Ye(n=>n.cart.items.length);return f.jsx(rO,{to:"/cart",children:f.jsxs(oO,{onClick:e,children:[f.jsx(iO,{children:f.jsx("use",{href:`${cn}#icon-cart`})}),t>0&&f.jsx(aO,{children:t})]})})},lO=C.nav`
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
`,fi=C(Oe)`
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
`,uO=()=>f.jsxs(lO,{children:[f.jsx(fi,{to:"/",children:"Головна"}),f.jsx(fi,{to:"/catalog",children:"Каталог"}),f.jsx(fi,{to:"/catalog/new",children:"Новинки"}),f.jsx(fi,{to:"/catalog/sale",children:"Акційні товари"}),f.jsx(fi,{to:"/about",children:"Про нас"}),f.jsx(fi,{to:"/contacts",children:"Контакти"})]}),cO=C.svg`
  width: 24px;
  height: 24px;
  fill: var(--white-color);
`,dO=C(Oe)`
      display: flex;
    align-items: center;
    align-content: center;
    justify-content: center;
    
    @media screen and (min-width: 1023px) {
   order: 2;
 
  }
       
`,fO=C.div`

width:30px;
height:30px;

  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 28px; /* розмір іконки */
  cursor: pointer;
`,pO=C.div`

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
`,hO=({onClick:e})=>{const t=Ye(n=>n.favorites.items.length);return f.jsx(dO,{to:"/favorite",children:f.jsxs(fO,{onClick:e,children:[f.jsx(cO,{children:f.jsx("use",{href:`${cn}#icon-heart`})}),t>0&&f.jsx(pO,{children:t})]})})};/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ub=(...e)=>e.filter((t,n,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===n).join(" ").trim();/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mO=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gO=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,n,r)=>r?r.toUpperCase():n.toLowerCase());/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I0=e=>{const t=gO(e);return t.charAt(0).toUpperCase()+t.slice(1)};/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var vO={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yO=e=>{for(const t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0;return!1};/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xO=b.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:i="",children:o,iconNode:a,...l},s)=>b.createElement("svg",{ref:s,...vO,width:t,height:t,stroke:e,strokeWidth:r?Number(n)*24/Number(t):n,className:Ub("lucide",i),...!o&&!yO(l)&&{"aria-hidden":"true"},...l},[...a.map(([u,d])=>b.createElement(u,d)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pt=(e,t)=>{const n=b.forwardRef(({className:r,...i},o)=>b.createElement(xO,{ref:o,iconNode:t,className:Ub(`lucide-${mO(I0(e))}`,`lucide-${e}`,r),...i}));return n.displayName=I0(e),n};/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bO=[["path",{d:"m3 16 4 4 4-4",key:"1co6wj"}],["path",{d:"M7 20V4",key:"1yoxec"}],["path",{d:"M11 4h4",key:"6d7r33"}],["path",{d:"M11 8h7",key:"djye34"}],["path",{d:"M11 12h10",key:"1438ji"}]],$u=Pt("arrow-down-narrow-wide",bO);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wO=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],Iu=Pt("arrow-right",wO);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SO=[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"M9 9h.01",key:"1q5me6"}],["path",{d:"M15 15h.01",key:"lqbp3k"}]],_O=Pt("badge-percent",SO);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CO=[["path",{d:"M18 20a6 6 0 0 0-12 0",key:"1qehca"}],["circle",{cx:"12",cy:"10",r:"4",key:"1h16sb"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],EO=Pt("circle-user-round",CO);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kO=[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",key:"mvr1a0"}]],Ua=Pt("heart",kO);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TO=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"r6nss1"}]],PO=Pt("house",TO);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OO=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],jO=Pt("info",OO);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MO=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 .83.18 2 2 0 0 0 .83-.18l8.58-3.9a1 1 0 0 0 0-1.831z",key:"zzgyd3"}],["path",{d:"M16 17h6",key:"1ook5g"}],["path",{d:"M19 14v6",key:"1ckrd5"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 .825.178",key:"1ia9y3"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l2.116-.962",key:"jksky3"}]],$O=Pt("layers-plus",MO);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IO=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],DO=Pt("mail",IO);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LO=[["path",{d:"M16 10a4 4 0 0 1-8 0",key:"1ltviw"}],["path",{d:"M3.103 6.034h17.794",key:"awc11p"}],["path",{d:"M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z",key:"o988cm"}]],AO=Pt("shopping-bag",LO);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RO=[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]],po=Pt("shopping-cart",RO);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FO=[["path",{d:"M10 5H3",key:"1qgfaw"}],["path",{d:"M12 19H3",key:"yhmn1j"}],["path",{d:"M14 3v4",key:"1sua03"}],["path",{d:"M16 17v4",key:"1q0r14"}],["path",{d:"M21 12h-9",key:"1o4lsq"}],["path",{d:"M21 19h-5",key:"1rlt1p"}],["path",{d:"M21 5h-7",key:"1oszz2"}],["path",{d:"M8 10v4",key:"tgpxqk"}],["path",{d:"M8 12H3",key:"a7s4jb"}]],Hb=Pt("sliders-horizontal",FO);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zO=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],Wb=Pt("trash-2",zO);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NO=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Gb=Pt("x",NO),BO=({openLogin:e})=>{const[t,n]=b.useState(!1);return f.jsx(lP,{children:f.jsx(uP,{children:f.jsxs(cP,{children:[f.jsxs(dP,{children:[f.jsx(hP,{to:"/",children:"Дідів хлів"}),f.jsxs(fP,{children:[f.jsx(sO,{}),f.jsx(pP,{onClick:e,children:f.jsx(EO,{size:28,color:"#f2ebd4",strokeWidth:1.9})}),f.jsx(hO,{}),f.jsx(uO,{}),f.jsx(gP,{onClick:()=>n(!t),children:f.jsx(mP,{children:f.jsx("use",{href:`${cn}#icon-menu`})})}),f.jsx(wP,{open:t,onClick:()=>n(!1)}),f.jsxs(vP,{open:t,children:[f.jsx(yP,{onClick:()=>n(!1),children:f.jsx(Gb,{size:28,strokeWidth:1.5})}),f.jsxs(xP,{children:[f.jsxs(di,{onClick:()=>n(!1),to:"/",children:[f.jsx(PO,{size:22,strokeWidth:1.5})," Головна"]}),f.jsxs(di,{onClick:()=>n(!1),to:"/catalog",children:[f.jsx(AO,{size:22,strokeWidth:1.5})," Каталог"]}),f.jsxs(di,{onClick:()=>n(!1),to:"/catalog/new",children:[f.jsx($O,{size:22,strokeWidth:1.5}),"Новинки"]}),f.jsxs(di,{onClick:()=>n(!1),to:"/catalog/sale",children:[f.jsx(_O,{size:22,strokeWidth:1.5}),"Акційні товари"]}),f.jsxs(di,{onClick:()=>n(!1),to:"/about",children:[f.jsx(jO,{size:22,strokeWidth:1.5})," Про нас"]}),f.jsxs(di,{onClick:()=>n(!1),to:"/contacts",children:[f.jsx(DO,{size:22,strokeWidth:1.5})," Контакти"]})]}),f.jsx(bP,{children:f.jsx("p",{children:"© 2020 Дідів Хлів"})})]})]})]}),f.jsx($P,{})]})})})},VO=C.div`

   background: radial-gradient(
    circle at 50% 45%,
    #5c5149 0%,
    #4b3c34 35%,
    #352b25 65%,
    #1b1412 100%
  );
`,UO=C.footer`
 
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
`,HO=C.div`
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
`,hd=C.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center; /* Центруємо контент всередині колонки */

  @media screen and (min-width: 768px) {
    align-items: flex-start; /* На десктопі — по лівому краю */
    min-width: 150px;
    flex: 1;
  }
`,md=C.h3`
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
`,vn=C(Oe)`
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
`,WO=C.div`
  display: flex;
  gap: 20px;
  margin-top: 10px;
  justify-content: center;

  @media screen and (min-width: 768px) {
    justify-content: flex-start;
  }
`,gd=C.a`
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
`,GO=()=>f.jsx(VO,{children:f.jsxs(UO,{children:[f.jsxs(HO,{children:[f.jsxs(hd,{children:[f.jsx(md,{children:"Навігація"}),f.jsx(vn,{to:"/",children:"Головна"}),f.jsx(vn,{to:"/about",children:"Про нас"}),f.jsx(vn,{to:"/catalog",children:"Каталог"}),f.jsx(vn,{to:"/contacts",children:"Контакти"})]}),f.jsxs(hd,{children:[f.jsx(md,{children:"Інформація"}),f.jsx(vn,{to:"/delivery",children:"Оплата і доставка"}),f.jsx(vn,{children:"Повернення"}),f.jsx(vn,{children:"Гарантія"}),f.jsx(vn,{children:"Політика конфіденційності"})]})]}),f.jsxs(hd,{children:[f.jsx(md,{children:"Контакти"}),f.jsx(vn,{href:"tel:+380979999999",children:"+38 (097) 999-99-99"}),f.jsx(vn,{href:"mailto:email@email.com",children:"email@email.com"}),f.jsxs(WO,{children:[f.jsx(gd,{href:"https://www.instagram.com/didivxliv?igsh=MXhsNWRjdW5rajYwdQ==",target:"_blank",rel:"noopener noreferrer",children:f.jsx("svg",{width:"20px",children:f.jsx("use",{href:`${cn}#icon-instagram`})})}),f.jsx(gd,{href:"https://t.me/didivxliv",target:"_blank",rel:"noopener noreferrer",children:f.jsx("svg",{width:"20px",children:f.jsx("use",{href:`${cn}#icon-telegram`})})}),f.jsx(gd,{href:"https://www.olx.ua/uk/hobbi-otdyh-i-sport/velo/q-%D0%B4%D1%96%D0%B4%D1%96%D0%B2-%D1%85%D0%BB%D1%96%D0%B2/?srsltid=AfmBOoqjzHkKNGxhNyAXVf2_KVV6h3JQFklEk0AjrDFh7tlO2-HZJPSS",target:"_blank",rel:"noopener noreferrer",children:f.jsx("svg",{width:"27px",height:"27px",style:{marginTop:"5px"},children:f.jsx("use",{href:`${cn}#icon-olx`})})})]})]})]})}),YO=({openLogin:e,openRegister:t})=>f.jsxs(f.Fragment,{children:[f.jsx(BO,{openLogin:e,openRegister:t}),f.jsx("main",{style:{flex:1},children:f.jsx(BC,{})}),f.jsx(GO,{})]}),qO=C.section`

  width: 100%;
  font-family: var(--main-font);
  padding-top: 30px;
  
  
`,XO=C.h2`
   font-size: 30px;
      text-transform: uppercase;
  font-weight: 700;
  margin-bottom: 20px;
  color: #333;
      text-align: center;

  @media screen and (min-width: 768px) {
 font-size: 35px;

  }

`,KO=C.div`
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
`,QO=C.div`
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
`,ZO=C(Oe)`
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
`,JO=C.span`
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
`,e4=C.div`
  padding: 10px 0;
`,t4=C.h3`
  font-size: 20px;
  font-weight: 600;
 
  color: #333;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
   margin-bottom:16px;
`,n4=C.div`
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
    background: var( --orange-color); 
    color: white;
  }
`;C(Oe)`
color: var(--white-color);
padding: 10px 20px;
 background:var( --orange-color); 
  border-radius: 15px;
  text-decoration: none;

`;const r4=C(Oe)`
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

`,i4=C.div`
  text-align: center;
  color: white;

  p {
    font-size: 24px;
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 12px;
  }
  
`,o4=C.div`
  width: 40px;
  height: 40px;
  border: 2px solid white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`;function Xe(e){return`Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}var a4=(()=>typeof Symbol=="function"&&Symbol.observable||"@@observable")(),D0=a4,vd=()=>Math.random().toString(36).substring(7).split("").join("."),s4={INIT:`@@redux/INIT${vd()}`,REPLACE:`@@redux/REPLACE${vd()}`,PROBE_UNKNOWN_ACTION:()=>`@@redux/PROBE_UNKNOWN_ACTION${vd()}`},Fl=s4;function nm(e){if(typeof e!="object"||e===null)return!1;let t=e;for(;Object.getPrototypeOf(t)!==null;)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t||Object.getPrototypeOf(e)===null}function rm(e,t,n){if(typeof e!="function")throw new Error(Xe(2));if(typeof t=="function"&&typeof n=="function"||typeof n=="function"&&typeof arguments[3]=="function")throw new Error(Xe(0));if(typeof t=="function"&&typeof n>"u"&&(n=t,t=void 0),typeof n<"u"){if(typeof n!="function")throw new Error(Xe(1));return n(rm)(e,t)}let r=e,i=t,o=new Map,a=o,l=0,s=!1;function u(){a===o&&(a=new Map,o.forEach((w,h)=>{a.set(h,w)}))}function d(){if(s)throw new Error(Xe(3));return i}function c(w){if(typeof w!="function")throw new Error(Xe(4));if(s)throw new Error(Xe(5));let h=!0;u();const v=l++;return a.set(v,w),function(){if(h){if(s)throw new Error(Xe(6));h=!1,u(),a.delete(v),o=null}}}function y(w){if(!nm(w))throw new Error(Xe(7));if(typeof w.type>"u")throw new Error(Xe(8));if(typeof w.type!="string")throw new Error(Xe(17));if(s)throw new Error(Xe(9));try{s=!0,i=r(i,w)}finally{s=!1}return(o=a).forEach(v=>{v()}),w}function p(w){if(typeof w!="function")throw new Error(Xe(10));r=w,y({type:Fl.REPLACE})}function m(){const w=c;return{subscribe(h){if(typeof h!="object"||h===null)throw new Error(Xe(11));function v(){const S=h;S.next&&S.next(d())}return v(),{unsubscribe:w(v)}},[D0](){return this}}}return y({type:Fl.INIT}),{dispatch:y,subscribe:c,getState:d,replaceReducer:p,[D0]:m}}function l4(e){Object.keys(e).forEach(t=>{const n=e[t];if(typeof n(void 0,{type:Fl.INIT})>"u")throw new Error(Xe(12));if(typeof n(void 0,{type:Fl.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(Xe(13))})}function u4(e){const t=Object.keys(e),n={};for(let o=0;o<t.length;o++){const a=t[o];typeof e[a]=="function"&&(n[a]=e[a])}const r=Object.keys(n);let i;try{l4(n)}catch(o){i=o}return function(a={},l){if(i)throw i;let s=!1;const u={};for(let d=0;d<r.length;d++){const c=r[d],y=n[c],p=a[c],m=y(p,l);if(typeof m>"u")throw l&&l.type,new Error(Xe(14));u[c]=m,s=s||m!==p}return s=s||r.length!==Object.keys(a).length,s?u:a}}function zl(...e){return e.length===0?t=>t:e.length===1?e[0]:e.reduce((t,n)=>(...r)=>t(n(...r)))}function c4(...e){return t=>(n,r)=>{const i=t(n,r);let o=()=>{throw new Error(Xe(15))};const a={getState:i.getState,dispatch:(s,...u)=>o(s,...u)},l=e.map(s=>s(a));return o=zl(...l)(i.dispatch),{...i,dispatch:o}}}function d4(e){return nm(e)&&"type"in e&&typeof e.type=="string"}var Yb=Symbol.for("immer-nothing"),L0=Symbol.for("immer-draftable"),ht=Symbol.for("immer-state");function an(e,...t){throw new Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)}var Dt=Object,to=Dt.getPrototypeOf,Nl="constructor",Du="prototype",pp="configurable",Bl="enumerable",Ks="writable",Ta="value",qn=e=>!!e&&!!e[ht];function pn(e){var t;return e?qb(e)||Au(e)||!!e[L0]||!!((t=e[Nl])!=null&&t[L0])||Ru(e)||Fu(e):!1}var f4=Dt[Du][Nl].toString(),A0=new WeakMap;function qb(e){if(!e||!im(e))return!1;const t=to(e);if(t===null||t===Dt[Du])return!0;const n=Dt.hasOwnProperty.call(t,Nl)&&t[Nl];if(n===Object)return!0;if(!wi(n))return!1;let r=A0.get(n);return r===void 0&&(r=Function.toString.call(n),A0.set(n,r)),r===f4}function Lu(e,t,n=!0){Ha(e)===0?(n?Reflect.ownKeys(e):Dt.keys(e)).forEach(i=>{t(i,e[i],e)}):e.forEach((r,i)=>t(i,r,e))}function Ha(e){const t=e[ht];return t?t.type_:Au(e)?1:Ru(e)?2:Fu(e)?3:0}var R0=(e,t,n=Ha(e))=>n===2?e.has(t):Dt[Du].hasOwnProperty.call(e,t),hp=(e,t,n=Ha(e))=>n===2?e.get(t):e[t],Vl=(e,t,n,r=Ha(e))=>{r===2?e.set(t,n):r===3?e.add(n):e[t]=n};function p4(e,t){return e===t?e!==0||1/e===1/t:e!==e&&t!==t}var Au=Array.isArray,Ru=e=>e instanceof Map,Fu=e=>e instanceof Set,im=e=>typeof e=="object",wi=e=>typeof e=="function",yd=e=>typeof e=="boolean";function h4(e){const t=+e;return Number.isInteger(t)&&String(t)===e}var Rn=e=>e.copy_||e.base_,om=e=>e.modified_?e.copy_:e.base_;function mp(e,t){if(Ru(e))return new Map(e);if(Fu(e))return new Set(e);if(Au(e))return Array[Du].slice.call(e);const n=qb(e);if(t===!0||t==="class_only"&&!n){const r=Dt.getOwnPropertyDescriptors(e);delete r[ht];let i=Reflect.ownKeys(r);for(let o=0;o<i.length;o++){const a=i[o],l=r[a];l[Ks]===!1&&(l[Ks]=!0,l[pp]=!0),(l.get||l.set)&&(r[a]={[pp]:!0,[Ks]:!0,[Bl]:l[Bl],[Ta]:e[a]})}return Dt.create(to(e),r)}else{const r=to(e);if(r!==null&&n)return{...e};const i=Dt.create(r);return Dt.assign(i,e)}}function am(e,t=!1){return zu(e)||qn(e)||!pn(e)||(Ha(e)>1&&Dt.defineProperties(e,{set:ys,add:ys,clear:ys,delete:ys}),Dt.freeze(e),t&&Lu(e,(n,r)=>{am(r,!0)},!1)),e}function m4(){an(2)}var ys={[Ta]:m4};function zu(e){return e===null||!im(e)?!0:Dt.isFrozen(e)}var Ul="MapSet",gp="Patches",F0="ArrayMethods",Xb={};function Jr(e){const t=Xb[e];return t||an(0,e),t}var z0=e=>!!Xb[e],Pa,Kb=()=>Pa,g4=(e,t)=>({drafts_:[],parent_:e,immer_:t,canAutoFreeze_:!0,unfinalizedDrafts_:0,handledSet_:new Set,processedForPatches_:new Set,mapSetPlugin_:z0(Ul)?Jr(Ul):void 0,arrayMethodsPlugin_:z0(F0)?Jr(F0):void 0});function N0(e,t){t&&(e.patchPlugin_=Jr(gp),e.patches_=[],e.inversePatches_=[],e.patchListener_=t)}function vp(e){yp(e),e.drafts_.forEach(v4),e.drafts_=null}function yp(e){e===Pa&&(Pa=e.parent_)}var B0=e=>Pa=g4(Pa,e);function v4(e){const t=e[ht];t.type_===0||t.type_===1?t.revoke_():t.revoked_=!0}function V0(e,t){t.unfinalizedDrafts_=t.drafts_.length;const n=t.drafts_[0];if(e!==void 0&&e!==n){n[ht].modified_&&(vp(t),an(4)),pn(e)&&(e=U0(t,e));const{patchPlugin_:i}=t;i&&i.generateReplacementPatches_(n[ht].base_,e,t)}else e=U0(t,n);return y4(t,e,!0),vp(t),t.patches_&&t.patchListener_(t.patches_,t.inversePatches_),e!==Yb?e:void 0}function U0(e,t){if(zu(t))return t;const n=t[ht];if(!n)return Hl(t,e.handledSet_,e);if(!Nu(n,e))return t;if(!n.modified_)return n.base_;if(!n.finalized_){const{callbacks_:r}=n;if(r)for(;r.length>0;)r.pop()(e);Jb(n,e)}return n.copy_}function y4(e,t,n=!1){!e.parent_&&e.immer_.autoFreeze_&&e.canAutoFreeze_&&am(t,n)}function Qb(e){e.finalized_=!0,e.scope_.unfinalizedDrafts_--}var Nu=(e,t)=>e.scope_===t,x4=[];function Zb(e,t,n,r){const i=Rn(e),o=e.type_;if(r!==void 0&&hp(i,r,o)===t){Vl(i,r,n,o);return}if(!e.draftLocations_){const l=e.draftLocations_=new Map;Lu(i,(s,u)=>{if(qn(u)){const d=l.get(u)||[];d.push(s),l.set(u,d)}})}const a=e.draftLocations_.get(t)??x4;for(const l of a)Vl(i,l,n,o)}function b4(e,t,n){e.callbacks_.push(function(i){var l;const o=t;if(!o||!Nu(o,i))return;(l=i.mapSetPlugin_)==null||l.fixSetContents(o);const a=om(o);Zb(e,o.draft_??o,a,n),Jb(o,i)})}function Jb(e,t){var r;if(e.modified_&&!e.finalized_&&(e.type_===3||e.type_===1&&e.allIndicesReassigned_||(((r=e.assigned_)==null?void 0:r.size)??0)>0)){const{patchPlugin_:i}=t;if(i){const o=i.getPath(e);o&&i.generatePatches_(e,o,t)}Qb(e)}}function w4(e,t,n){const{scope_:r}=e;if(qn(n)){const i=n[ht];Nu(i,r)&&i.callbacks_.push(function(){Qs(e);const a=om(i);Zb(e,n,a,t)})}else pn(n)&&e.callbacks_.push(function(){const o=Rn(e);e.type_===3?o.has(n)&&Hl(n,r.handledSet_,r):hp(o,t,e.type_)===n&&r.drafts_.length>1&&(e.assigned_.get(t)??!1)===!0&&e.copy_&&Hl(hp(e.copy_,t,e.type_),r.handledSet_,r)})}function Hl(e,t,n){return!n.immer_.autoFreeze_&&n.unfinalizedDrafts_<1||qn(e)||t.has(e)||!pn(e)||zu(e)||(t.add(e),Lu(e,(r,i)=>{if(qn(i)){const o=i[ht];if(Nu(o,n)){const a=om(o);Vl(e,r,a,e.type_),Qb(o)}}else pn(i)&&Hl(i,t,n)})),e}function S4(e,t){const n=Au(e),r={type_:n?1:0,scope_:t?t.scope_:Kb(),modified_:!1,finalized_:!1,assigned_:void 0,parent_:t,base_:e,draft_:null,copy_:null,revoke_:null,isManual_:!1,callbacks_:void 0};let i=r,o=Wl;n&&(i=[r],o=Oa);const{revoke:a,proxy:l}=Proxy.revocable(i,o);return r.draft_=l,r.revoke_=a,[l,r]}var Wl={get(e,t){if(t===ht)return e;let n=e.scope_.arrayMethodsPlugin_;const r=e.type_===1&&typeof t=="string";if(r&&n!=null&&n.isArrayOperationMethod(t))return n.createMethodInterceptor(e,t);const i=Rn(e);if(!R0(i,t,e.type_))return _4(e,i,t);const o=i[t];if(e.finalized_||!pn(o)||r&&e.operationMethod&&(n!=null&&n.isMutatingArrayMethod(e.operationMethod))&&h4(t))return o;if(o===xd(e.base_,t)){Qs(e);const a=e.type_===1?+t:t,l=bp(e.scope_,o,e,a);return e.copy_[a]=l}return o},has(e,t){return t in Rn(e)},ownKeys(e){return Reflect.ownKeys(Rn(e))},set(e,t,n){const r=ew(Rn(e),t);if(r!=null&&r.set)return r.set.call(e.draft_,n),!0;if(!e.modified_){const i=xd(Rn(e),t),o=i==null?void 0:i[ht];if(o&&o.base_===n)return e.copy_[t]=n,e.assigned_.set(t,!1),!0;if(p4(n,i)&&(n!==void 0||R0(e.base_,t,e.type_)))return!0;Qs(e),xp(e)}return e.copy_[t]===n&&(n!==void 0||t in e.copy_)||Number.isNaN(n)&&Number.isNaN(e.copy_[t])||(e.copy_[t]=n,e.assigned_.set(t,!0),w4(e,t,n)),!0},deleteProperty(e,t){return Qs(e),xd(e.base_,t)!==void 0||t in e.base_?(e.assigned_.set(t,!1),xp(e)):e.assigned_.delete(t),e.copy_&&delete e.copy_[t],!0},getOwnPropertyDescriptor(e,t){const n=Rn(e),r=Reflect.getOwnPropertyDescriptor(n,t);return r&&{[Ks]:!0,[pp]:e.type_!==1||t!=="length",[Bl]:r[Bl],[Ta]:n[t]}},defineProperty(){an(11)},getPrototypeOf(e){return to(e.base_)},setPrototypeOf(){an(12)}},Oa={};for(let e in Wl){let t=Wl[e];Oa[e]=function(){const n=arguments;return n[0]=n[0][0],t.apply(this,n)}}Oa.deleteProperty=function(e,t){return Oa.set.call(this,e,t,void 0)};Oa.set=function(e,t,n){return Wl.set.call(this,e[0],t,n,e[0])};function xd(e,t){const n=e[ht];return(n?Rn(n):e)[t]}function _4(e,t,n){var i;const r=ew(t,n);return r?Ta in r?r[Ta]:(i=r.get)==null?void 0:i.call(e.draft_):void 0}function ew(e,t){if(!(t in e))return;let n=to(e);for(;n;){const r=Object.getOwnPropertyDescriptor(n,t);if(r)return r;n=to(n)}}function xp(e){e.modified_||(e.modified_=!0,e.parent_&&xp(e.parent_))}function Qs(e){e.copy_||(e.assigned_=new Map,e.copy_=mp(e.base_,e.scope_.immer_.useStrictShallowCopy_))}var C4=class{constructor(e){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.useStrictIteration_=!1,this.produce=(t,n,r)=>{if(wi(t)&&!wi(n)){const o=n;n=t;const a=this;return function(s=o,...u){return a.produce(s,d=>n.call(this,d,...u))}}wi(n)||an(6),r!==void 0&&!wi(r)&&an(7);let i;if(pn(t)){const o=B0(this),a=bp(o,t,void 0);let l=!0;try{i=n(a),l=!1}finally{l?vp(o):yp(o)}return N0(o,r),V0(i,o)}else if(!t||!im(t)){if(i=n(t),i===void 0&&(i=t),i===Yb&&(i=void 0),this.autoFreeze_&&am(i,!0),r){const o=[],a=[];Jr(gp).generateReplacementPatches_(t,i,{patches_:o,inversePatches_:a}),r(o,a)}return i}else an(1,t)},this.produceWithPatches=(t,n)=>{if(wi(t))return(a,...l)=>this.produceWithPatches(a,s=>t(s,...l));let r,i;return[this.produce(t,n,(a,l)=>{r=a,i=l}),r,i]},yd(e==null?void 0:e.autoFreeze)&&this.setAutoFreeze(e.autoFreeze),yd(e==null?void 0:e.useStrictShallowCopy)&&this.setUseStrictShallowCopy(e.useStrictShallowCopy),yd(e==null?void 0:e.useStrictIteration)&&this.setUseStrictIteration(e.useStrictIteration)}createDraft(e){pn(e)||an(8),qn(e)&&(e=E4(e));const t=B0(this),n=bp(t,e,void 0);return n[ht].isManual_=!0,yp(t),n}finishDraft(e,t){const n=e&&e[ht];(!n||!n.isManual_)&&an(9);const{scope_:r}=n;return N0(r,t),V0(void 0,r)}setAutoFreeze(e){this.autoFreeze_=e}setUseStrictShallowCopy(e){this.useStrictShallowCopy_=e}setUseStrictIteration(e){this.useStrictIteration_=e}shouldUseStrictIteration(){return this.useStrictIteration_}applyPatches(e,t){let n;for(n=t.length-1;n>=0;n--){const i=t[n];if(i.path.length===0&&i.op==="replace"){e=i.value;break}}n>-1&&(t=t.slice(n+1));const r=Jr(gp).applyPatches_;return qn(e)?r(e,t):this.produce(e,i=>r(i,t))}};function bp(e,t,n,r){const[i,o]=Ru(t)?Jr(Ul).proxyMap_(t,n):Fu(t)?Jr(Ul).proxySet_(t,n):S4(t,n);return((n==null?void 0:n.scope_)??Kb()).drafts_.push(i),o.callbacks_=(n==null?void 0:n.callbacks_)??[],o.key_=r,n&&r!==void 0?b4(n,o,r):o.callbacks_.push(function(s){var d;(d=s.mapSetPlugin_)==null||d.fixSetContents(o);const{patchPlugin_:u}=s;o.modified_&&u&&u.generatePatches_(o,[],s)}),i}function E4(e){return qn(e)||an(10,e),tw(e)}function tw(e){if(!pn(e)||zu(e))return e;const t=e[ht];let n,r=!0;if(t){if(!t.modified_)return t.base_;t.finalized_=!0,n=mp(e,t.scope_.immer_.useStrictShallowCopy_),r=t.scope_.immer_.shouldUseStrictIteration()}else n=mp(e,!0);return Lu(n,(i,o)=>{Vl(n,i,tw(o))},r),t&&(t.finalized_=!1),n}var k4=new C4,nw=k4.produce;function rw(e){return({dispatch:n,getState:r})=>i=>o=>typeof o=="function"?o(n,r,e):i(o)}var T4=rw(),P4=rw,O4=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?zl:zl.apply(null,arguments)};function H0(e,t){function n(...r){if(t){let i=t(...r);if(!i)throw new Error(Vn(0));return{type:e,payload:i.payload,..."meta"in i&&{meta:i.meta},..."error"in i&&{error:i.error}}}return{type:e,payload:r[0]}}return n.toString=()=>`${e}`,n.type=e,n.match=r=>d4(r)&&r.type===e,n}var iw=class Wo extends Array{constructor(...t){super(...t),Object.setPrototypeOf(this,Wo.prototype)}static get[Symbol.species](){return Wo}concat(...t){return super.concat.apply(this,t)}prepend(...t){return t.length===1&&Array.isArray(t[0])?new Wo(...t[0].concat(this)):new Wo(...t.concat(this))}};function W0(e){return pn(e)?nw(e,()=>{}):e}function xs(e,t,n){return e.has(t)?e.get(t):e.set(t,n(t)).get(t)}function j4(e){return typeof e=="boolean"}var M4=()=>function(t){const{thunk:n=!0,immutableCheck:r=!0,serializableCheck:i=!0,actionCreatorCheck:o=!0}=t??{};let a=new iw;return n&&(j4(n)?a.push(T4):a.push(P4(n.extraArgument))),a},$4="RTK_autoBatch",G0=e=>t=>{setTimeout(t,e)},I4=(e={type:"raf"})=>t=>(...n)=>{const r=t(...n);let i=!0,o=!1,a=!1;const l=new Set,s=e.type==="tick"?queueMicrotask:e.type==="raf"?typeof window<"u"&&window.requestAnimationFrame?window.requestAnimationFrame:G0(10):e.type==="callback"?e.queueNotification:G0(e.timeout),u=()=>{a=!1,o&&(o=!1,l.forEach(d=>d()))};return Object.assign({},r,{subscribe(d){const c=()=>i&&d(),y=r.subscribe(c);return l.add(d),()=>{y(),l.delete(d)}},dispatch(d){var c;try{return i=!((c=d==null?void 0:d.meta)!=null&&c[$4]),o=!i,o&&(a||(a=!0,s(u))),r.dispatch(d)}finally{i=!0}}})},D4=e=>function(n){const{autoBatch:r=!0}=n??{};let i=new iw(e);return r&&i.push(I4(typeof r=="object"?r:void 0)),i};function L4(e){const t=M4(),{reducer:n=void 0,middleware:r,devTools:i=!0,duplicateMiddlewareCheck:o=!0,preloadedState:a=void 0,enhancers:l=void 0}=e||{};let s;if(typeof n=="function")s=n;else if(nm(n))s=u4(n);else throw new Error(Vn(1));let u;typeof r=="function"?u=r(t):u=t();let d=zl;i&&(d=O4({trace:!1,...typeof i=="object"&&i}));const c=c4(...u),y=D4(c);let p=typeof l=="function"?l(y):y();const m=d(...p);return rm(s,a,m)}function ow(e){const t={},n=[];let r;const i={addCase(o,a){const l=typeof o=="string"?o:o.type;if(!l)throw new Error(Vn(28));if(l in t)throw new Error(Vn(29));return t[l]=a,i},addAsyncThunk(o,a){return a.pending&&(t[o.pending.type]=a.pending),a.rejected&&(t[o.rejected.type]=a.rejected),a.fulfilled&&(t[o.fulfilled.type]=a.fulfilled),a.settled&&n.push({matcher:o.settled,reducer:a.settled}),i},addMatcher(o,a){return n.push({matcher:o,reducer:a}),i},addDefaultCase(o){return r=o,i}};return e(i),[t,n,r]}function A4(e){return typeof e=="function"}function R4(e,t){let[n,r,i]=ow(t),o;if(A4(e))o=()=>W0(e());else{const l=W0(e);o=()=>l}function a(l=o(),s){let u=[n[s.type],...r.filter(({matcher:d})=>d(s)).map(({reducer:d})=>d)];return u.filter(d=>!!d).length===0&&(u=[i]),u.reduce((d,c)=>{if(c)if(qn(d)){const p=c(d,s);return p===void 0?d:p}else{if(pn(d))return nw(d,y=>c(y,s));{const y=c(d,s);if(y===void 0){if(d===null)return d;throw Error("A case reducer on a non-draftable value must not return undefined")}return y}}return d},l)}return a.getInitialState=o,a}var F4=Symbol.for("rtk-slice-createasyncthunk");function z4(e,t){return`${e}/${t}`}function N4({creators:e}={}){var n;const t=(n=e==null?void 0:e.asyncThunk)==null?void 0:n[F4];return function(i){const{name:o,reducerPath:a=o}=i;if(!o)throw new Error(Vn(11));typeof process<"u";const l=(typeof i.reducers=="function"?i.reducers(V4()):i.reducers)||{},s=Object.keys(l),u={sliceCaseReducersByName:{},sliceCaseReducersByType:{},actionCreators:{},sliceMatchers:[]},d={addCase(S,E){const P=typeof S=="string"?S:S.type;if(!P)throw new Error(Vn(12));if(P in u.sliceCaseReducersByType)throw new Error(Vn(13));return u.sliceCaseReducersByType[P]=E,d},addMatcher(S,E){return u.sliceMatchers.push({matcher:S,reducer:E}),d},exposeAction(S,E){return u.actionCreators[S]=E,d},exposeCaseReducer(S,E){return u.sliceCaseReducersByName[S]=E,d}};s.forEach(S=>{const E=l[S],P={reducerName:S,type:z4(o,S),createNotation:typeof i.reducers=="function"};H4(E)?G4(P,E,d,t):U4(P,E,d)});function c(){const[S={},E=[],P=void 0]=typeof i.extraReducers=="function"?ow(i.extraReducers):[i.extraReducers],k={...S,...u.sliceCaseReducersByType};return R4(i.initialState,_=>{for(let M in k)_.addCase(M,k[M]);for(let M of u.sliceMatchers)_.addMatcher(M.matcher,M.reducer);for(let M of E)_.addMatcher(M.matcher,M.reducer);P&&_.addDefaultCase(P)})}const y=S=>S,p=new Map,m=new WeakMap;let g;function w(S,E){return g||(g=c()),g(S,E)}function h(){return g||(g=c()),g.getInitialState()}function v(S,E=!1){function P(_){let M=_[S];return typeof M>"u"&&E&&(M=xs(m,P,h)),M}function k(_=y){const M=xs(p,E,()=>new WeakMap);return xs(M,_,()=>{const $={};for(const[D,A]of Object.entries(i.selectors??{}))$[D]=B4(A,_,()=>xs(m,_,h),E);return $})}return{reducerPath:S,getSelectors:k,get selectors(){return k(P)},selectSlice:P}}const x={name:o,reducer:w,actions:u.actionCreators,caseReducers:u.sliceCaseReducersByName,getInitialState:h,...v(a),injectInto(S,{reducerPath:E,...P}={}){const k=E??a;return S.inject({reducerPath:k,reducer:w},P),{...x,...v(k,!0)}}};return x}}function B4(e,t,n,r){function i(o,...a){let l=t(o);return typeof l>"u"&&r&&(l=n()),e(l,...a)}return i.unwrapped=e,i}var aw=N4();function V4(){function e(t,n){return{_reducerDefinitionType:"asyncThunk",payloadCreator:t,...n}}return e.withTypes=()=>e,{reducer(t){return Object.assign({[t.name](...n){return t(...n)}}[t.name],{_reducerDefinitionType:"reducer"})},preparedReducer(t,n){return{_reducerDefinitionType:"reducerWithPrepare",prepare:t,reducer:n}},asyncThunk:e}}function U4({type:e,reducerName:t,createNotation:n},r,i){let o,a;if("reducer"in r){if(n&&!W4(r))throw new Error(Vn(17));o=r.reducer,a=r.prepare}else o=r;i.addCase(e,o).exposeCaseReducer(t,o).exposeAction(t,a?H0(e,a):H0(e))}function H4(e){return e._reducerDefinitionType==="asyncThunk"}function W4(e){return e._reducerDefinitionType==="reducerWithPrepare"}function G4({type:e,reducerName:t},n,r,i){if(!i)throw new Error(Vn(18));const{payloadCreator:o,fulfilled:a,pending:l,rejected:s,settled:u,options:d}=n,c=i(e,o,d);r.exposeAction(t,c),a&&r.addCase(c.fulfilled,a),l&&r.addCase(c.pending,l),s&&r.addCase(c.rejected,s),u&&r.addMatcher(c.settled,u),r.exposeCaseReducer(t,{fulfilled:a||bs,pending:l||bs,rejected:s||bs,settled:u||bs})}function bs(){}function Vn(e){return`Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}const sw=aw({name:"cart",initialState:{items:[]},reducers:{addToCart:(e,t)=>{const n=t.payload,r=e.items.find(i=>i.id===t.payload.id);r&&r.quantity>=n.stock||(r?r.quantity=(r.quantity||0)+1:e.items.push({...t.payload,quantity:1}))},removeFromCart:(e,t)=>{const n=t.payload;e.items=e.items.filter(r=>r.id!==n.id)},clearCart:e=>{e.items=[]},addAllToCart:(e,t)=>{const n=t.payload.map(r=>({...r,quantity:r.quantity||1}));e.items.push(...n)},incrementQuantity:(e,t)=>{const{id:n,stock:r}=t.payload,i=e.items.find(o=>o.id===n);i&&i.quantity<r&&(i.quantity+=1)},decrementQuantity:(e,t)=>{const n=e.items.find(r=>r.id===t.payload);n&&n.quantity>1&&(n.quantity-=1)}}}),{addToCart:ho,removeFromCart:Y4,clearCart:sm,addAllToCart:q4,incrementQuantity:X4,decrementQuantity:K4}=sw.actions,Q4=sw.reducer;function lw(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var i=e.length;for(t=0;t<i;t++)e[t]&&(n=lw(e[t]))&&(r&&(r+=" "),r+=n)}else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function Gr(){for(var e,t,n=0,r="",i=arguments.length;n<i;n++)(e=arguments[n])&&(t=lw(e))&&(r&&(r+=" "),r+=t);return r}function Z4(e){if(!e||typeof document>"u")return;let t=document.head||document.getElementsByTagName("head")[0],n=document.createElement("style");n.type="text/css",t.firstChild?t.insertBefore(n,t.firstChild):t.appendChild(n),n.styleSheet?n.styleSheet.cssText=e:n.appendChild(document.createTextNode(e))}Z4(`:root{--toastify-color-light: #fff;--toastify-color-dark: #121212;--toastify-color-info: #3498db;--toastify-color-success: #07bc0c;--toastify-color-warning: #f1c40f;--toastify-color-error: hsl(6, 78%, 57%);--toastify-color-transparent: rgba(255, 255, 255, .7);--toastify-icon-color-info: var(--toastify-color-info);--toastify-icon-color-success: var(--toastify-color-success);--toastify-icon-color-warning: var(--toastify-color-warning);--toastify-icon-color-error: var(--toastify-color-error);--toastify-container-width: fit-content;--toastify-toast-width: 320px;--toastify-toast-offset: 16px;--toastify-toast-top: max(var(--toastify-toast-offset), env(safe-area-inset-top));--toastify-toast-right: max(var(--toastify-toast-offset), env(safe-area-inset-right));--toastify-toast-left: max(var(--toastify-toast-offset), env(safe-area-inset-left));--toastify-toast-bottom: max(var(--toastify-toast-offset), env(safe-area-inset-bottom));--toastify-toast-background: #fff;--toastify-toast-padding: 14px;--toastify-toast-min-height: 64px;--toastify-toast-max-height: 800px;--toastify-toast-bd-radius: 6px;--toastify-toast-shadow: 0px 4px 12px rgba(0, 0, 0, .1);--toastify-font-family: sans-serif;--toastify-z-index: 9999;--toastify-text-color-light: #757575;--toastify-text-color-dark: #fff;--toastify-text-color-info: #fff;--toastify-text-color-success: #fff;--toastify-text-color-warning: #fff;--toastify-text-color-error: #fff;--toastify-spinner-color: #616161;--toastify-spinner-color-empty-area: #e0e0e0;--toastify-color-progress-light: linear-gradient(to right, #4cd964, #5ac8fa, #007aff, #34aadc, #5856d6, #ff2d55);--toastify-color-progress-dark: #bb86fc;--toastify-color-progress-info: var(--toastify-color-info);--toastify-color-progress-success: var(--toastify-color-success);--toastify-color-progress-warning: var(--toastify-color-warning);--toastify-color-progress-error: var(--toastify-color-error);--toastify-color-progress-bgo: .2}.Toastify__toast-container{z-index:var(--toastify-z-index);-webkit-transform:translate3d(0,0,var(--toastify-z-index));position:fixed;width:var(--toastify-container-width);box-sizing:border-box;color:#fff;display:flex;flex-direction:column}.Toastify__toast-container--top-left{top:var(--toastify-toast-top);left:var(--toastify-toast-left)}.Toastify__toast-container--top-center{top:var(--toastify-toast-top);left:50%;transform:translate(-50%);align-items:center}.Toastify__toast-container--top-right{top:var(--toastify-toast-top);right:var(--toastify-toast-right);align-items:end}.Toastify__toast-container--bottom-left{bottom:var(--toastify-toast-bottom);left:var(--toastify-toast-left)}.Toastify__toast-container--bottom-center{bottom:var(--toastify-toast-bottom);left:50%;transform:translate(-50%);align-items:center}.Toastify__toast-container--bottom-right{bottom:var(--toastify-toast-bottom);right:var(--toastify-toast-right);align-items:end}.Toastify__toast{--y: 0;position:relative;touch-action:none;width:var(--toastify-toast-width);min-height:var(--toastify-toast-min-height);box-sizing:border-box;margin-bottom:1rem;padding:var(--toastify-toast-padding);border-radius:var(--toastify-toast-bd-radius);box-shadow:var(--toastify-toast-shadow);max-height:var(--toastify-toast-max-height);font-family:var(--toastify-font-family);z-index:0;display:flex;flex:1 auto;align-items:center;word-break:break-word}@media only screen and (max-width: 480px){.Toastify__toast-container{width:100vw;left:env(safe-area-inset-left);margin:0}.Toastify__toast-container--top-left,.Toastify__toast-container--top-center,.Toastify__toast-container--top-right{top:env(safe-area-inset-top);transform:translate(0)}.Toastify__toast-container--bottom-left,.Toastify__toast-container--bottom-center,.Toastify__toast-container--bottom-right{bottom:env(safe-area-inset-bottom);transform:translate(0)}.Toastify__toast-container--rtl{right:env(safe-area-inset-right);left:initial}.Toastify__toast{--toastify-toast-width: 100%;margin-bottom:0;border-radius:0}}.Toastify__toast-container[data-stacked=true]{width:var(--toastify-toast-width)}.Toastify__toast--stacked{position:absolute;width:100%;transform:translate3d(0,var(--y),0) scale(var(--s));transition:transform .3s}.Toastify__toast--stacked[data-collapsed] .Toastify__toast-body,.Toastify__toast--stacked[data-collapsed] .Toastify__close-button{transition:opacity .1s}.Toastify__toast--stacked[data-collapsed=false]{overflow:visible}.Toastify__toast--stacked[data-collapsed=true]:not(:last-child)>*{opacity:0}.Toastify__toast--stacked:after{content:"";position:absolute;left:0;right:0;height:calc(var(--g) * 1px);bottom:100%}.Toastify__toast--stacked[data-pos=top]{top:0}.Toastify__toast--stacked[data-pos=bot]{bottom:0}.Toastify__toast--stacked[data-pos=bot].Toastify__toast--stacked:before{transform-origin:top}.Toastify__toast--stacked[data-pos=top].Toastify__toast--stacked:before{transform-origin:bottom}.Toastify__toast--stacked:before{content:"";position:absolute;left:0;right:0;bottom:0;height:100%;transform:scaleY(3);z-index:-1}.Toastify__toast--rtl{direction:rtl}.Toastify__toast--close-on-click{cursor:pointer}.Toastify__toast-icon{margin-inline-end:10px;width:22px;flex-shrink:0;display:flex}.Toastify--animate{animation-fill-mode:both;animation-duration:.5s}.Toastify--animate-icon{animation-fill-mode:both;animation-duration:.3s}.Toastify__toast-theme--dark{background:var(--toastify-color-dark);color:var(--toastify-text-color-dark)}.Toastify__toast-theme--light,.Toastify__toast-theme--colored.Toastify__toast--default{background:var(--toastify-color-light);color:var(--toastify-text-color-light)}.Toastify__toast-theme--colored.Toastify__toast--info{color:var(--toastify-text-color-info);background:var(--toastify-color-info)}.Toastify__toast-theme--colored.Toastify__toast--success{color:var(--toastify-text-color-success);background:var(--toastify-color-success)}.Toastify__toast-theme--colored.Toastify__toast--warning{color:var(--toastify-text-color-warning);background:var(--toastify-color-warning)}.Toastify__toast-theme--colored.Toastify__toast--error{color:var(--toastify-text-color-error);background:var(--toastify-color-error)}.Toastify__progress-bar-theme--light{background:var(--toastify-color-progress-light)}.Toastify__progress-bar-theme--dark{background:var(--toastify-color-progress-dark)}.Toastify__progress-bar--info{background:var(--toastify-color-progress-info)}.Toastify__progress-bar--success{background:var(--toastify-color-progress-success)}.Toastify__progress-bar--warning{background:var(--toastify-color-progress-warning)}.Toastify__progress-bar--error{background:var(--toastify-color-progress-error)}.Toastify__progress-bar-theme--colored.Toastify__progress-bar--info,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--success,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--warning,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--error{background:var(--toastify-color-transparent)}.Toastify__close-button{color:#fff;position:absolute;top:6px;right:6px;background:transparent;outline:none;border:none;padding:0;cursor:pointer;opacity:.7;transition:.3s ease;z-index:1}.Toastify__toast--rtl .Toastify__close-button{left:6px;right:unset}.Toastify__close-button--light{color:#000;opacity:.3}.Toastify__close-button>svg{fill:currentColor;height:16px;width:14px}.Toastify__close-button:hover,.Toastify__close-button:focus{opacity:1}@keyframes Toastify__trackProgress{0%{transform:scaleX(1)}to{transform:scaleX(0)}}.Toastify__progress-bar{position:absolute;bottom:0;left:0;width:100%;height:100%;z-index:1;opacity:.7;transform-origin:left}.Toastify__progress-bar--animated{animation:Toastify__trackProgress linear 1 forwards}.Toastify__progress-bar--controlled{transition:transform .2s}.Toastify__progress-bar--rtl{right:0;left:initial;transform-origin:right;border-bottom-left-radius:initial}.Toastify__progress-bar--wrp{position:absolute;overflow:hidden;bottom:0;left:0;width:100%;height:5px;border-bottom-left-radius:var(--toastify-toast-bd-radius);border-bottom-right-radius:var(--toastify-toast-bd-radius)}.Toastify__progress-bar--wrp[data-hidden=true]{opacity:0}.Toastify__progress-bar--bg{opacity:var(--toastify-color-progress-bgo);width:100%;height:100%}.Toastify__spinner{width:20px;height:20px;box-sizing:border-box;border:2px solid;border-radius:100%;border-color:var(--toastify-spinner-color-empty-area);border-right-color:var(--toastify-spinner-color);animation:Toastify__spin .65s linear infinite}@keyframes Toastify__bounceInRight{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(3000px,0,0)}60%{opacity:1;transform:translate3d(-25px,0,0)}75%{transform:translate3d(10px,0,0)}90%{transform:translate3d(-5px,0,0)}to{transform:none}}@keyframes Toastify__bounceOutRight{20%{opacity:1;transform:translate3d(-20px,var(--y),0)}to{opacity:0;transform:translate3d(2000px,var(--y),0)}}@keyframes Toastify__bounceInLeft{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(-3000px,0,0)}60%{opacity:1;transform:translate3d(25px,0,0)}75%{transform:translate3d(-10px,0,0)}90%{transform:translate3d(5px,0,0)}to{transform:none}}@keyframes Toastify__bounceOutLeft{20%{opacity:1;transform:translate3d(20px,var(--y),0)}to{opacity:0;transform:translate3d(-2000px,var(--y),0)}}@keyframes Toastify__bounceInUp{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,3000px,0)}60%{opacity:1;transform:translate3d(0,-20px,0)}75%{transform:translate3d(0,10px,0)}90%{transform:translate3d(0,-5px,0)}to{transform:translateZ(0)}}@keyframes Toastify__bounceOutUp{20%{transform:translate3d(0,calc(var(--y) - 10px),0)}40%,45%{opacity:1;transform:translate3d(0,calc(var(--y) + 20px),0)}to{opacity:0;transform:translate3d(0,-2000px,0)}}@keyframes Toastify__bounceInDown{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,-3000px,0)}60%{opacity:1;transform:translate3d(0,25px,0)}75%{transform:translate3d(0,-10px,0)}90%{transform:translate3d(0,5px,0)}to{transform:none}}@keyframes Toastify__bounceOutDown{20%{transform:translate3d(0,calc(var(--y) - 10px),0)}40%,45%{opacity:1;transform:translate3d(0,calc(var(--y) + 20px),0)}to{opacity:0;transform:translate3d(0,2000px,0)}}.Toastify__bounce-enter--top-left,.Toastify__bounce-enter--bottom-left{animation-name:Toastify__bounceInLeft}.Toastify__bounce-enter--top-right,.Toastify__bounce-enter--bottom-right{animation-name:Toastify__bounceInRight}.Toastify__bounce-enter--top-center{animation-name:Toastify__bounceInDown}.Toastify__bounce-enter--bottom-center{animation-name:Toastify__bounceInUp}.Toastify__bounce-exit--top-left,.Toastify__bounce-exit--bottom-left{animation-name:Toastify__bounceOutLeft}.Toastify__bounce-exit--top-right,.Toastify__bounce-exit--bottom-right{animation-name:Toastify__bounceOutRight}.Toastify__bounce-exit--top-center{animation-name:Toastify__bounceOutUp}.Toastify__bounce-exit--bottom-center{animation-name:Toastify__bounceOutDown}@keyframes Toastify__zoomIn{0%{opacity:0;transform:scale3d(.3,.3,.3)}50%{opacity:1}}@keyframes Toastify__zoomOut{0%{opacity:1}50%{opacity:0;transform:translate3d(0,var(--y),0) scale3d(.3,.3,.3)}to{opacity:0}}.Toastify__zoom-enter{animation-name:Toastify__zoomIn}.Toastify__zoom-exit{animation-name:Toastify__zoomOut}@keyframes Toastify__flipIn{0%{transform:perspective(400px) rotateX(90deg);animation-timing-function:ease-in;opacity:0}40%{transform:perspective(400px) rotateX(-20deg);animation-timing-function:ease-in}60%{transform:perspective(400px) rotateX(10deg);opacity:1}80%{transform:perspective(400px) rotateX(-5deg)}to{transform:perspective(400px)}}@keyframes Toastify__flipOut{0%{transform:translate3d(0,var(--y),0) perspective(400px)}30%{transform:translate3d(0,var(--y),0) perspective(400px) rotateX(-20deg);opacity:1}to{transform:translate3d(0,var(--y),0) perspective(400px) rotateX(90deg);opacity:0}}.Toastify__flip-enter{animation-name:Toastify__flipIn}.Toastify__flip-exit{animation-name:Toastify__flipOut}@keyframes Toastify__slideInRight{0%{transform:translate3d(110%,0,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInLeft{0%{transform:translate3d(-110%,0,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInUp{0%{transform:translate3d(0,110%,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInDown{0%{transform:translate3d(0,-110%,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideOutRight{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(110%,var(--y),0)}}@keyframes Toastify__slideOutLeft{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(-110%,var(--y),0)}}@keyframes Toastify__slideOutDown{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(0,500px,0)}}@keyframes Toastify__slideOutUp{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(0,-500px,0)}}.Toastify__slide-enter--top-left,.Toastify__slide-enter--bottom-left{animation-name:Toastify__slideInLeft}.Toastify__slide-enter--top-right,.Toastify__slide-enter--bottom-right{animation-name:Toastify__slideInRight}.Toastify__slide-enter--top-center{animation-name:Toastify__slideInDown}.Toastify__slide-enter--bottom-center{animation-name:Toastify__slideInUp}.Toastify__slide-exit--top-left,.Toastify__slide-exit--bottom-left{animation-name:Toastify__slideOutLeft;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--top-right,.Toastify__slide-exit--bottom-right{animation-name:Toastify__slideOutRight;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--top-center{animation-name:Toastify__slideOutUp;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--bottom-center{animation-name:Toastify__slideOutDown;animation-timing-function:ease-in;animation-duration:.3s}@keyframes Toastify__spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}
`);var Wa=e=>typeof e=="number"&&!isNaN(e),ei=e=>typeof e=="string",Xn=e=>typeof e=="function",J4=e=>ei(e)||Wa(e),wp=e=>ei(e)||Xn(e)?e:null,ej=(e,t)=>e===!1||Wa(e)&&e>0?e:t,Sp=e=>b.isValidElement(e)||ei(e)||Xn(e)||Wa(e);function tj(e,t,n=300){let{scrollHeight:r,style:i}=e;requestAnimationFrame(()=>{i.minHeight="initial",i.height=r+"px",i.transition=`all ${n}ms`,requestAnimationFrame(()=>{i.height="0",i.padding="0",i.margin="0",setTimeout(t,n)})})}function nj({enter:e,exit:t,appendPosition:n=!1,collapse:r=!0,collapseDuration:i=300}){return function({children:o,position:a,preventExitTransition:l,done:s,nodeRef:u,isIn:d,playToast:c}){let y=n?`${e}--${a}`:e,p=n?`${t}--${a}`:t,m=b.useRef(0);return b.useLayoutEffect(()=>{let g=u.current,w=y.split(" "),h=v=>{v.target===u.current&&(c(),g.removeEventListener("animationend",h),g.removeEventListener("animationcancel",h),m.current===0&&v.type!=="animationcancel"&&g.classList.remove(...w))};g.classList.add(...w),g.addEventListener("animationend",h),g.addEventListener("animationcancel",h)},[]),b.useEffect(()=>{let g=u.current,w=()=>{g.removeEventListener("animationend",w),r?tj(g,s,i):s()};d||(l?w():(m.current=1,g.className+=` ${p}`,g.addEventListener("animationend",w)))},[d]),K.createElement(K.Fragment,null,o)}}function Y0(e,t){return{content:uw(e.content,e.props),containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,reason:e.removalReason,status:t}}function uw(e,t,n=!1){return b.isValidElement(e)&&!ei(e.type)?b.cloneElement(e,{closeToast:t.closeToast,toastProps:t,data:t.data,isPaused:n}):Xn(e)?e({closeToast:t.closeToast,toastProps:t,data:t.data,isPaused:n}):e}function rj({closeToast:e,theme:t,ariaLabel:n="close"}){return K.createElement("button",{className:`Toastify__close-button Toastify__close-button--${t}`,type:"button",onClick:r=>{r.stopPropagation(),e(!0)},"aria-label":n},K.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},K.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function ij({delay:e,isRunning:t,closeToast:n,type:r="default",hide:i,className:o,controlledProgress:a,progress:l,rtl:s,isIn:u,theme:d}){let c=i||a&&l===0,y={animationDuration:`${e}ms`,animationPlayState:t?"running":"paused"};a&&(y.transform=`scaleX(${l})`);let p=Gr("Toastify__progress-bar",a?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${d}`,`Toastify__progress-bar--${r}`,{"Toastify__progress-bar--rtl":s}),m=Xn(o)?o({rtl:s,type:r,defaultClassName:p}):Gr(p,o),g={[a&&l>=1?"onTransitionEnd":"onAnimationEnd"]:a&&l<1?null:()=>{u&&n()}};return K.createElement("div",{className:"Toastify__progress-bar--wrp","data-hidden":c},K.createElement("div",{className:`Toastify__progress-bar--bg Toastify__progress-bar-theme--${d} Toastify__progress-bar--${r}`}),K.createElement("div",{role:"progressbar","aria-hidden":c?"true":"false","aria-label":"notification timer",className:m,style:y,...g}))}var oj=1,cw=()=>`${oj++}`;function aj(e,t,n){let r=1,i=0,o=[],a=[],l=t,s=new Map,u=new Set,d=v=>(u.add(v),()=>u.delete(v)),c=()=>{a=Array.from(s.values()),u.forEach(v=>v())},y=({containerId:v,toastId:x,updateId:S})=>{let E=v?v!==e:e!==1,P=s.has(x)&&S==null;return E||P},p=(v,x)=>{s.forEach(S=>{var E;(x==null||x===S.props.toastId)&&((E=S.toggle)==null||E.call(S,v))})},m=v=>{var x,S;(S=(x=v.props)==null?void 0:x.onClose)==null||S.call(x,v.removalReason),v.isActive=!1},g=v=>{if(v==null)s.forEach(m);else{let x=s.get(v);x&&m(x)}c()},w=()=>{i-=o.length,o=[]},h=v=>{var x,S;let{toastId:E,updateId:P}=v.props,k=P==null;v.staleId&&s.delete(v.staleId),v.isActive=!0,s.set(E,v),c(),n(Y0(v,k?"added":"updated")),k&&((S=(x=v.props).onOpen)==null||S.call(x))};return{id:e,props:l,observe:d,toggle:p,removeToast:g,toasts:s,clearQueue:w,buildToast:(v,x)=>{if(y(x))return;let{toastId:S,updateId:E,data:P,staleId:k,delay:_}=x,M=E==null;M&&i++;let $={...l,style:l.toastStyle,key:r++,...Object.fromEntries(Object.entries(x).filter(([A,j])=>j!=null)),toastId:S,updateId:E,data:P,isIn:!1,className:wp(x.className||l.toastClassName),progressClassName:wp(x.progressClassName||l.progressClassName),autoClose:x.isLoading?!1:ej(x.autoClose,l.autoClose),closeToast(A){s.get(S).removalReason=A,g(S)},deleteToast(){let A=s.get(S);if(A!=null){if(n(Y0(A,"removed")),s.delete(S),i--,i<0&&(i=0),o.length>0){h(o.shift());return}c()}}};$.closeButton=l.closeButton,x.closeButton===!1||Sp(x.closeButton)?$.closeButton=x.closeButton:x.closeButton===!0&&($.closeButton=Sp(l.closeButton)?l.closeButton:!0);let D={content:v,props:$,staleId:k};l.limit&&l.limit>0&&i>l.limit&&M?o.push(D):Wa(_)?setTimeout(()=>{h(D)},_):h(D)},setProps(v){l=v},setToggle:(v,x)=>{let S=s.get(v);S&&(S.toggle=x)},isToastActive:v=>{var x;return(x=s.get(v))==null?void 0:x.isActive},getSnapshot:()=>a}}var ft=new Map,ja=[],_p=new Set,sj=e=>_p.forEach(t=>t(e)),dw=()=>ft.size>0;function lj(){ja.forEach(e=>pw(e.content,e.options)),ja=[]}var uj=(e,{containerId:t})=>{var n;return(n=ft.get(t||1))==null?void 0:n.toasts.get(e)};function fw(e,t){var n;if(t)return!!((n=ft.get(t))!=null&&n.isToastActive(e));let r=!1;return ft.forEach(i=>{i.isToastActive(e)&&(r=!0)}),r}function cj(e){if(!dw()){ja=ja.filter(t=>e!=null&&t.options.toastId!==e);return}if(e==null||J4(e))ft.forEach(t=>{t.removeToast(e)});else if(e&&("containerId"in e||"id"in e)){let t=ft.get(e.containerId);t?t.removeToast(e.id):ft.forEach(n=>{n.removeToast(e.id)})}}var dj=(e={})=>{ft.forEach(t=>{t.props.limit&&(!e.containerId||t.id===e.containerId)&&t.clearQueue()})};function pw(e,t){Sp(e)&&(dw()||ja.push({content:e,options:t}),ft.forEach(n=>{n.buildToast(e,t)}))}function fj(e){var t;(t=ft.get(e.containerId||1))==null||t.setToggle(e.id,e.fn)}function hw(e,t){ft.forEach(n=>{(t==null||!(t!=null&&t.containerId)||(t==null?void 0:t.containerId)===n.id)&&n.toggle(e,t==null?void 0:t.id)})}function pj(e){let t=e.containerId||1;return{subscribe(n){let r=aj(t,e,sj);ft.set(t,r);let i=r.observe(n);return lj(),()=>{i(),ft.delete(t)}},setProps(n){var r;(r=ft.get(t))==null||r.setProps(n)},getSnapshot(){var n;return(n=ft.get(t))==null?void 0:n.getSnapshot()}}}function hj(e){return _p.add(e),()=>{_p.delete(e)}}function mj(e){return e&&(ei(e.toastId)||Wa(e.toastId))?e.toastId:cw()}function Ga(e,t){return pw(e,t),t.toastId}function Bu(e,t){return{...t,type:t&&t.type||e,toastId:mj(t)}}function Vu(e){return(t,n)=>Ga(t,Bu(e,n))}function q(e,t){return Ga(e,Bu("default",t))}q.loading=(e,t)=>Ga(e,Bu("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...t}));function gj(e,{pending:t,error:n,success:r},i){let o;t&&(o=ei(t)?q.loading(t,i):q.loading(t.render,{...i,...t}));let a={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},l=(u,d,c)=>{if(d==null){q.dismiss(o);return}let y={type:u,...a,...i,data:c},p=ei(d)?{render:d}:d;return o?q.update(o,{...y,...p}):q(p.render,{...y,...p}),c},s=Xn(e)?e():e;return s.then(u=>l("success",r,u)).catch(u=>l("error",n,u)),s}q.promise=gj;q.success=Vu("success");q.info=Vu("info");q.error=Vu("error");q.warning=Vu("warning");q.warn=q.warning;q.dark=(e,t)=>Ga(e,Bu("default",{theme:"dark",...t}));function vj(e){cj(e)}q.dismiss=vj;q.clearWaitingQueue=dj;q.isActive=fw;q.update=(e,t={})=>{let n=uj(e,t);if(n){let{props:r,content:i}=n,o={delay:100,...r,...t,toastId:t.toastId||e,updateId:cw()};o.toastId!==e&&(o.staleId=e);let a=o.render||i;delete o.render,Ga(a,o)}};q.done=e=>{q.update(e,{progress:1})};q.onChange=hj;q.play=e=>hw(!0,e);q.pause=e=>hw(!1,e);function yj(e){var t;let{subscribe:n,getSnapshot:r,setProps:i}=b.useRef(pj(e)).current;i(e);let o=(t=b.useSyncExternalStore(n,r,r))==null?void 0:t.slice();function a(l){if(!o)return[];let s=new Map;return e.newestOnTop&&o.reverse(),o.forEach(u=>{let{position:d}=u.props;s.has(d)||s.set(d,[]),s.get(d).push(u)}),Array.from(s,u=>l(u[0],u[1]))}return{getToastToRender:a,isToastActive:fw,count:o==null?void 0:o.length}}function xj(e){let[t,n]=b.useState(!1),[r,i]=b.useState(!1),o=b.useRef(null),a=b.useRef({start:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,didMove:!1}).current,{autoClose:l,pauseOnHover:s,closeToast:u,onClick:d,closeOnClick:c}=e;fj({id:e.toastId,containerId:e.containerId,fn:n}),b.useEffect(()=>{if(e.pauseOnFocusLoss)return y(),()=>{p()}},[e.pauseOnFocusLoss]);function y(){document.hasFocus()||h(),window.addEventListener("focus",w),window.addEventListener("blur",h)}function p(){window.removeEventListener("focus",w),window.removeEventListener("blur",h)}function m(k){if(e.draggable===!0||e.draggable===k.pointerType){v();let _=o.current;a.canCloseOnClick=!0,a.canDrag=!0,_.style.transition="none",e.draggableDirection==="x"?(a.start=k.clientX,a.removalDistance=_.offsetWidth*(e.draggablePercent/100)):(a.start=k.clientY,a.removalDistance=_.offsetHeight*(e.draggablePercent===80?e.draggablePercent*1.5:e.draggablePercent)/100)}}function g(k){let{top:_,bottom:M,left:$,right:D}=o.current.getBoundingClientRect();k.nativeEvent.type!=="touchend"&&e.pauseOnHover&&k.clientX>=$&&k.clientX<=D&&k.clientY>=_&&k.clientY<=M?h():w()}function w(){n(!0)}function h(){n(!1)}function v(){a.didMove=!1,document.addEventListener("pointermove",S),document.addEventListener("pointerup",E)}function x(){document.removeEventListener("pointermove",S),document.removeEventListener("pointerup",E)}function S(k){let _=o.current;if(a.canDrag&&_){a.didMove=!0,t&&h(),e.draggableDirection==="x"?a.delta=k.clientX-a.start:a.delta=k.clientY-a.start,a.start!==k.clientX&&(a.canCloseOnClick=!1);let M=e.draggableDirection==="x"?`${a.delta}px, var(--y)`:`0, calc(${a.delta}px + var(--y))`;_.style.transform=`translate3d(${M},0)`,_.style.opacity=`${1-Math.abs(a.delta/a.removalDistance)}`}}function E(){x();let k=o.current;if(a.canDrag&&a.didMove&&k){if(a.canDrag=!1,Math.abs(a.delta)>a.removalDistance){i(!0),e.closeToast(!0),e.collapseAll();return}k.style.transition="transform 0.2s, opacity 0.2s",k.style.removeProperty("transform"),k.style.removeProperty("opacity")}}let P={onPointerDown:m,onPointerUp:g};return l&&s&&(P.onMouseEnter=h,e.stacked||(P.onMouseLeave=w)),c&&(P.onClick=k=>{d&&d(k),a.canCloseOnClick&&u(!0)}),{playToast:w,pauseToast:h,isRunning:t,preventExitTransition:r,toastRef:o,eventHandlers:P}}var bj=typeof window<"u"?b.useLayoutEffect:b.useEffect,Uu=({theme:e,type:t,isLoading:n,...r})=>K.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:e==="colored"?"currentColor":`var(--toastify-icon-color-${t})`,...r});function wj(e){return K.createElement(Uu,{...e},K.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))}function Sj(e){return K.createElement(Uu,{...e},K.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))}function _j(e){return K.createElement(Uu,{...e},K.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))}function Cj(e){return K.createElement(Uu,{...e},K.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))}function Ej(){return K.createElement("div",{className:"Toastify__spinner"})}var Cp={info:Sj,warning:wj,success:_j,error:Cj,spinner:Ej},kj=e=>e in Cp;function Tj({theme:e,type:t,isLoading:n,icon:r}){let i=null,o={theme:e,type:t};return r===!1||(Xn(r)?i=r({...o,isLoading:n}):b.isValidElement(r)?i=b.cloneElement(r,o):n?i=Cp.spinner():kj(t)&&(i=Cp[t](o))),i}var Pj=e=>{let{isRunning:t,preventExitTransition:n,toastRef:r,eventHandlers:i,playToast:o}=xj(e),{closeButton:a,children:l,autoClose:s,onClick:u,type:d,hideProgressBar:c,closeToast:y,transition:p,position:m,className:g,style:w,progressClassName:h,updateId:v,role:x,progress:S,rtl:E,toastId:P,deleteToast:k,isIn:_,isLoading:M,closeOnClick:$,theme:D,ariaLabel:A}=e,j=Gr("Toastify__toast",`Toastify__toast-theme--${D}`,`Toastify__toast--${d}`,{"Toastify__toast--rtl":E},{"Toastify__toast--close-on-click":$}),F=Xn(g)?g({rtl:E,position:m,type:d,defaultClassName:j}):Gr(j,g),R=Tj(e),L=!!S||!s,O={closeToast:y,type:d,theme:D},T=null;return a===!1||(Xn(a)?T=a(O):b.isValidElement(a)?T=b.cloneElement(a,O):T=rj(O)),K.createElement(p,{isIn:_,done:k,position:m,preventExitTransition:n,nodeRef:r,playToast:o},K.createElement("div",{id:P,tabIndex:0,onClick:u,"data-in":_,className:F,...i,style:w,ref:r,..._&&{role:x,"aria-label":A}},R!=null&&K.createElement("div",{className:Gr("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!M})},R),uw(l,e,!t),T,!e.customProgressBar&&K.createElement(ij,{...v&&!L?{key:`p-${v}`}:{},rtl:E,theme:D,delay:s,isRunning:t,isIn:_,closeToast:y,hide:c,type:d,className:h,controlledProgress:L,progress:S||0})))},Oj=(e,t=!1)=>({enter:`Toastify--animate Toastify__${e}-enter`,exit:`Toastify--animate Toastify__${e}-exit`,appendPosition:t}),jj=nj(Oj("bounce",!0)),Mj={position:"top-right",transition:jj,autoClose:5e3,closeButton:!0,pauseOnHover:!0,pauseOnFocusLoss:!0,draggable:"touch",draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light","aria-label":"Notifications Alt+T",hotKeys:e=>e.altKey&&e.code==="KeyT"};function Or(e){let t={...Mj,...e},n=e.stacked,[r,i]=b.useState(!0),o=b.useRef(null),{getToastToRender:a,isToastActive:l,count:s}=yj(t),{className:u,style:d,rtl:c,containerId:y,hotKeys:p}=t;function m(w){let h=Gr("Toastify__toast-container",`Toastify__toast-container--${w}`,{"Toastify__toast-container--rtl":c});return Xn(u)?u({position:w,rtl:c,defaultClassName:h}):Gr(h,wp(u))}function g(){n&&(i(!0),q.play())}return bj(()=>{var w;if(n){let h=o.current.querySelectorAll('[data-in="true"]'),v=12,x=(w=t.position)==null?void 0:w.includes("top"),S=0,E=0;Array.from(h).reverse().forEach((P,k)=>{let _=P;_.classList.add("Toastify__toast--stacked"),k>0&&(_.dataset.collapsed=`${r}`),_.dataset.pos||(_.dataset.pos=x?"top":"bot");let M=S*(r?.2:1)+(r?0:v*k);_.style.setProperty("--y",`${x?M:M*-1}px`),_.style.setProperty("--g",`${v}`),_.style.setProperty("--s",`${1-(r?E:0)}`),S+=_.offsetHeight,E+=.025})}},[r,s,n]),b.useEffect(()=>{function w(h){var v;let x=o.current;p(h)&&((v=x.querySelector('[tabIndex="0"]'))==null||v.focus(),i(!1),q.pause()),h.key==="Escape"&&(document.activeElement===x||x!=null&&x.contains(document.activeElement))&&(i(!0),q.play())}return document.addEventListener("keydown",w),()=>{document.removeEventListener("keydown",w)}},[p]),K.createElement("section",{ref:o,className:"Toastify",id:y,onMouseEnter:()=>{n&&(i(!1),q.pause())},onMouseLeave:g,"aria-live":"polite","aria-atomic":"false","aria-relevant":"additions text","aria-label":t["aria-label"]},a((w,h)=>{let v=h.length?{...d}:{...d,pointerEvents:"none"};return K.createElement("div",{tabIndex:-1,className:m(w),"data-stacked":n,style:v,key:`c-${w}`},h.map(({content:x,props:S})=>K.createElement(Pj,{...S,stacked:n,collapseAll:g,isIn:l(S.toastId,S.containerId),key:`t-${S.key}`},x)))}))}const no="/Didiv/assets/nofoto-2f8d9d99.png",$j=C.div`
`,Ij=C.div`
display: flex;
    justify-content: space-between;
    align-items: center;
        margin-bottom: 10px;

    
`,Dj=C.h2`
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

`,Lj=C.div`
width: 100vw;
height:30vw;

  @media screen and (min-width: 768px) {
  width: 60vw;
  height:80vw;
  }
   @media screen and (min-width: 1200px) {
 
  height:40vw;
  }
      
`;C.div``;const Aj=C.div`
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
`,Rj=C.div`
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
`,lm=C.div`
    font-family: var(--second-font);
  position: absolute;

  top: 25px;
  right: -12px;

  padding: 6px 15px;
  border-radius: 20px;

  background: var(--red-color);
  box-shadow: 0 6px 6px -4px rgba(0, 0, 0, 0.35);
  color: #fff;
  font-size: 14px;
  font-weight: 400;
  text-transform: uppercase;
  z-index: 10;
`,Fj=C.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  padding:20px;
`,zj=C.div`
  padding: 16px;
      display: flex;
    align-content: center;
    align-items: center;
        justify-content: space-between;
`,Nj=C.p`
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

`;const mw=C.div.attrs({className:"card-buttons"})`
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
`,Gl=C.button`
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
`;const Bj=C.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  flex-wrap: wrap;
  gap: 5px;
`,bd=C.button`
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
`,Vj=C.div`
  position: relative;
  display: inline-block;
   @media screen and (max-width: 768px) {
  display:none;
  }

`,Uj=C.button`
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
`,Hj=C.div`
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
`,pi=C.div`
  padding: 10px 12px;
  cursor: pointer;

  &:hover {
    background: #f0f0f0;
  }
`,gw=C.div`
  text-align: center;
  width: 100px;
 
`,vw=C.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 2px;
`,yw=C.span`
  font-size: 18px;
  font-weight: 600;
  color: ${({$discount:e})=>"#111"};
`,xw=C.span`
  font-size: 13px;
  color: #999;
  text-decoration: line-through;
`,bw=C.span`
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
`,ww=aw({name:"favorites",initialState:{items:[]},reducers:{toggleFavorite:(e,t)=>{const n=t.payload;e.items.find(i=>i.id===n.id)?e.items=e.items.filter(i=>i.id!==n.id):e.items.push(n)},clearFavorite:e=>{e.items=[]}}}),{toggleFavorite:ai,clearFavorite:Wj}=ww.actions,Gj=ww.reducer,Sw=()=>{const e=jn(),[t,n]=b.useState([]),r=Ye(l=>l.favorites.items),i=Ye(l=>l.cart.items);b.useEffect(()=>{const l=new Date,s=new Date;s.setDate(l.getDate()-7);const u=s.toISOString();fetch(`https://backenddidiv-production.up.railway.app/api/products?populate=*&filters[createdAt][$gte]=${u}`).then(d=>d.json()).then(d=>n(d.data)).catch(d=>console.error("Помилка завантаження нових товарів:",d))},[]);const o=(l,s)=>{s.stopPropagation();const u=r.some(d=>d.id===l.id);e(ai(l)),u?q.warning(`${l.name} видалено з обраного`):q.info(`${l.name} додано в обране`)},a=[...t].sort(()=>Math.random()-.5).slice(0,3);return!t||t.length===0?null:f.jsxs(qO,{children:[f.jsx(Or,{}),f.jsx(XO,{children:"Нові товари"}),f.jsxs(KO,{children:[a.map(l=>{var w;const s=r.some(h=>h.id===l.id),u=i.find(h=>h.id===l.id),c=(u?u.quantity:0)>=(l.stock||0),y=l.new_price&&l.new_price<l.price,p=y?l.new_price:l.price,m=y?Math.round((l.price-l.new_price)/l.price*100):0,g=(h,v)=>{if(v.stopPropagation(),c){q.error("Товар уже у кошику");return}e(ho({...h,quantity:1})),q.success(`${h.name} додано в кошик!`)};return f.jsxs(QO,{children:[f.jsxs(ZO,{to:`/product/${l.id}`,children:[f.jsx(JO,{children:"Новинка"}),f.jsx("img",{src:((w=l.images)==null?void 0:w[0].url)||no,alt:l.name,onError:h=>{h.currentTarget.onerror=null,h.currentTarget.src=no}}),f.jsx("div",{className:"overlay"})]}),f.jsxs(e4,{children:[f.jsx(t4,{children:l.name}),f.jsxs(n4,{children:[f.jsx(gw,{children:f.jsxs(vw,{children:[f.jsxs(yw,{$discount:y,children:[p.toLocaleString()," грн"]}),y&&f.jsxs(xw,{children:[l.price.toLocaleString()," грн"]}),y&&f.jsxs(bw,{children:["-",m,"%"]})]})}),f.jsxs(mw,{children:[f.jsx(Gl,{onClick:h=>g(l,h),children:f.jsx(po,{size:24,color:u?"var(--orange-color)":"black",strokeWidth:2})}),f.jsx(Gl,{onClick:h=>o(l,h),children:f.jsx(Ua,{size:24,fill:s?"#ff4d4f":"none",color:s?"#ff4d4f":"#000000",strokeWidth:s?1:2})})]})]})]})]},l.id)}),f.jsx(r4,{to:"/catalog/new",children:f.jsxs(i4,{children:[f.jsx("p",{children:"Усі новинки"}),f.jsx(o4,{children:f.jsx(Iu,{size:24})})]})})]})]})};function J(){return J=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},J.apply(this,arguments)}function Yj(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function qj(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var Xj=function(){function e(n){var r=this;this._insertTag=function(i){var o;r.tags.length===0?r.insertionPoint?o=r.insertionPoint.nextSibling:r.prepend?o=r.container.firstChild:o=r.before:o=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(i,o),r.tags.push(i)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(r){r.forEach(this._insertTag)},t.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(qj(this));var i=this.tags[this.tags.length-1];if(this.isSpeedy){var o=Yj(i);try{o.insertRule(r,o.cssRules.length)}catch{}}else i.appendChild(document.createTextNode(r));this.ctr++},t.flush=function(){this.tags.forEach(function(r){return r.parentNode&&r.parentNode.removeChild(r)}),this.tags=[],this.ctr=0},e}(),it="-ms-",Yl="-moz-",ce="-webkit-",_w="comm",um="rule",cm="decl",Kj="@import",Cw="@keyframes",Qj="@layer",Zj=Math.abs,Hu=String.fromCharCode,Jj=Object.assign;function e3(e,t){return Qe(e,0)^45?(((t<<2^Qe(e,0))<<2^Qe(e,1))<<2^Qe(e,2))<<2^Qe(e,3):0}function Ew(e){return e.trim()}function t3(e,t){return(e=t.exec(e))?e[0]:e}function de(e,t,n){return e.replace(t,n)}function Ep(e,t){return e.indexOf(t)}function Qe(e,t){return e.charCodeAt(t)|0}function Ma(e,t,n){return e.slice(t,n)}function xn(e){return e.length}function dm(e){return e.length}function ws(e,t){return t.push(e),e}function n3(e,t){return e.map(t).join("")}var Wu=1,ro=1,kw=0,kt=0,Ie=0,mo="";function Gu(e,t,n,r,i,o,a){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:Wu,column:ro,length:a,return:""}}function $o(e,t){return Jj(Gu("",null,null,"",null,null,0),e,{length:-e.length},t)}function r3(){return Ie}function i3(){return Ie=kt>0?Qe(mo,--kt):0,ro--,Ie===10&&(ro=1,Wu--),Ie}function At(){return Ie=kt<kw?Qe(mo,kt++):0,ro++,Ie===10&&(ro=1,Wu++),Ie}function En(){return Qe(mo,kt)}function Zs(){return kt}function Ya(e,t){return Ma(mo,e,t)}function $a(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Tw(e){return Wu=ro=1,kw=xn(mo=e),kt=0,[]}function Pw(e){return mo="",e}function Js(e){return Ew(Ya(kt-1,kp(e===91?e+2:e===40?e+1:e)))}function o3(e){for(;(Ie=En())&&Ie<33;)At();return $a(e)>2||$a(Ie)>3?"":" "}function a3(e,t){for(;--t&&At()&&!(Ie<48||Ie>102||Ie>57&&Ie<65||Ie>70&&Ie<97););return Ya(e,Zs()+(t<6&&En()==32&&At()==32))}function kp(e){for(;At();)switch(Ie){case e:return kt;case 34:case 39:e!==34&&e!==39&&kp(Ie);break;case 40:e===41&&kp(e);break;case 92:At();break}return kt}function s3(e,t){for(;At()&&e+Ie!==47+10;)if(e+Ie===42+42&&En()===47)break;return"/*"+Ya(t,kt-1)+"*"+Hu(e===47?e:At())}function l3(e){for(;!$a(En());)At();return Ya(e,kt)}function u3(e){return Pw(el("",null,null,null,[""],e=Tw(e),0,[0],e))}function el(e,t,n,r,i,o,a,l,s){for(var u=0,d=0,c=a,y=0,p=0,m=0,g=1,w=1,h=1,v=0,x="",S=i,E=o,P=r,k=x;w;)switch(m=v,v=At()){case 40:if(m!=108&&Qe(k,c-1)==58){Ep(k+=de(Js(v),"&","&\f"),"&\f")!=-1&&(h=-1);break}case 34:case 39:case 91:k+=Js(v);break;case 9:case 10:case 13:case 32:k+=o3(m);break;case 92:k+=a3(Zs()-1,7);continue;case 47:switch(En()){case 42:case 47:ws(c3(s3(At(),Zs()),t,n),s);break;default:k+="/"}break;case 123*g:l[u++]=xn(k)*h;case 125*g:case 59:case 0:switch(v){case 0:case 125:w=0;case 59+d:h==-1&&(k=de(k,/\f/g,"")),p>0&&xn(k)-c&&ws(p>32?X0(k+";",r,n,c-1):X0(de(k," ","")+";",r,n,c-2),s);break;case 59:k+=";";default:if(ws(P=q0(k,t,n,u,d,i,l,x,S=[],E=[],c),o),v===123)if(d===0)el(k,t,P,P,S,o,c,l,E);else switch(y===99&&Qe(k,3)===110?100:y){case 100:case 108:case 109:case 115:el(e,P,P,r&&ws(q0(e,P,P,0,0,i,l,x,i,S=[],c),E),i,E,c,l,r?S:E);break;default:el(k,P,P,P,[""],E,0,l,E)}}u=d=p=0,g=h=1,x=k="",c=a;break;case 58:c=1+xn(k),p=m;default:if(g<1){if(v==123)--g;else if(v==125&&g++==0&&i3()==125)continue}switch(k+=Hu(v),v*g){case 38:h=d>0?1:(k+="\f",-1);break;case 44:l[u++]=(xn(k)-1)*h,h=1;break;case 64:En()===45&&(k+=Js(At())),y=En(),d=c=xn(x=k+=l3(Zs())),v++;break;case 45:m===45&&xn(k)==2&&(g=0)}}return o}function q0(e,t,n,r,i,o,a,l,s,u,d){for(var c=i-1,y=i===0?o:[""],p=dm(y),m=0,g=0,w=0;m<r;++m)for(var h=0,v=Ma(e,c+1,c=Zj(g=a[m])),x=e;h<p;++h)(x=Ew(g>0?y[h]+" "+v:de(v,/&\f/g,y[h])))&&(s[w++]=x);return Gu(e,t,n,i===0?um:l,s,u,d)}function c3(e,t,n){return Gu(e,t,n,_w,Hu(r3()),Ma(e,2,-2),0)}function X0(e,t,n,r){return Gu(e,t,n,cm,Ma(e,0,r),Ma(e,r+1,-1),r)}function Ni(e,t){for(var n="",r=dm(e),i=0;i<r;i++)n+=t(e[i],i,e,t)||"";return n}function d3(e,t,n,r){switch(e.type){case Qj:if(e.children.length)break;case Kj:case cm:return e.return=e.return||e.value;case _w:return"";case Cw:return e.return=e.value+"{"+Ni(e.children,r)+"}";case um:e.value=e.props.join(",")}return xn(n=Ni(e.children,r))?e.return=e.value+"{"+n+"}":""}function f3(e){var t=dm(e);return function(n,r,i,o){for(var a="",l=0;l<t;l++)a+=e[l](n,r,i,o)||"";return a}}function p3(e){return function(t){t.root||(t=t.return)&&e(t)}}function h3(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var m3=function(t,n,r){for(var i=0,o=0;i=o,o=En(),i===38&&o===12&&(n[r]=1),!$a(o);)At();return Ya(t,kt)},g3=function(t,n){var r=-1,i=44;do switch($a(i)){case 0:i===38&&En()===12&&(n[r]=1),t[r]+=m3(kt-1,n,r);break;case 2:t[r]+=Js(i);break;case 4:if(i===44){t[++r]=En()===58?"&\f":"",n[r]=t[r].length;break}default:t[r]+=Hu(i)}while(i=At());return t},v3=function(t,n){return Pw(g3(Tw(t),n))},K0=new WeakMap,y3=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var n=t.value,r=t.parent,i=t.column===r.column&&t.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(t.props.length===1&&n.charCodeAt(0)!==58&&!K0.get(r))&&!i){K0.set(t,!0);for(var o=[],a=v3(n,o),l=r.props,s=0,u=0;s<a.length;s++)for(var d=0;d<l.length;d++,u++)t.props[u]=o[s]?a[s].replace(/&\f/g,l[d]):l[d]+" "+a[s]}}},x3=function(t){if(t.type==="decl"){var n=t.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(t.return="",t.value="")}};function Ow(e,t){switch(e3(e,t)){case 5103:return ce+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return ce+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return ce+e+Yl+e+it+e+e;case 6828:case 4268:return ce+e+it+e+e;case 6165:return ce+e+it+"flex-"+e+e;case 5187:return ce+e+de(e,/(\w+).+(:[^]+)/,ce+"box-$1$2"+it+"flex-$1$2")+e;case 5443:return ce+e+it+"flex-item-"+de(e,/flex-|-self/,"")+e;case 4675:return ce+e+it+"flex-line-pack"+de(e,/align-content|flex-|-self/,"")+e;case 5548:return ce+e+it+de(e,"shrink","negative")+e;case 5292:return ce+e+it+de(e,"basis","preferred-size")+e;case 6060:return ce+"box-"+de(e,"-grow","")+ce+e+it+de(e,"grow","positive")+e;case 4554:return ce+de(e,/([^-])(transform)/g,"$1"+ce+"$2")+e;case 6187:return de(de(de(e,/(zoom-|grab)/,ce+"$1"),/(image-set)/,ce+"$1"),e,"")+e;case 5495:case 3959:return de(e,/(image-set\([^]*)/,ce+"$1$`$1");case 4968:return de(de(e,/(.+:)(flex-)?(.*)/,ce+"box-pack:$3"+it+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+ce+e+e;case 4095:case 3583:case 4068:case 2532:return de(e,/(.+)-inline(.+)/,ce+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(xn(e)-1-t>6)switch(Qe(e,t+1)){case 109:if(Qe(e,t+4)!==45)break;case 102:return de(e,/(.+:)(.+)-([^]+)/,"$1"+ce+"$2-$3$1"+Yl+(Qe(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Ep(e,"stretch")?Ow(de(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(Qe(e,t+1)!==115)break;case 6444:switch(Qe(e,xn(e)-3-(~Ep(e,"!important")&&10))){case 107:return de(e,":",":"+ce)+e;case 101:return de(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+ce+(Qe(e,14)===45?"inline-":"")+"box$3$1"+ce+"$2$3$1"+it+"$2box$3")+e}break;case 5936:switch(Qe(e,t+11)){case 114:return ce+e+it+de(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return ce+e+it+de(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return ce+e+it+de(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return ce+e+it+e+e}return e}var b3=function(t,n,r,i){if(t.length>-1&&!t.return)switch(t.type){case cm:t.return=Ow(t.value,t.length);break;case Cw:return Ni([$o(t,{value:de(t.value,"@","@"+ce)})],i);case um:if(t.length)return n3(t.props,function(o){switch(t3(o,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return Ni([$o(t,{props:[de(o,/:(read-\w+)/,":"+Yl+"$1")]})],i);case"::placeholder":return Ni([$o(t,{props:[de(o,/:(plac\w+)/,":"+ce+"input-$1")]}),$o(t,{props:[de(o,/:(plac\w+)/,":"+Yl+"$1")]}),$o(t,{props:[de(o,/:(plac\w+)/,it+"input-$1")]})],i)}return""})}},w3=[b3],S3=function(t){var n=t.key;if(n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(g){var w=g.getAttribute("data-emotion");w.indexOf(" ")!==-1&&(document.head.appendChild(g),g.setAttribute("data-s",""))})}var i=t.stylisPlugins||w3,o={},a,l=[];a=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(g){for(var w=g.getAttribute("data-emotion").split(" "),h=1;h<w.length;h++)o[w[h]]=!0;l.push(g)});var s,u=[y3,x3];{var d,c=[d3,p3(function(g){d.insert(g)})],y=f3(u.concat(i,c)),p=function(w){return Ni(u3(w),y)};s=function(w,h,v,x){d=v,p(w?w+"{"+h.styles+"}":h.styles),x&&(m.inserted[h.name]=!0)}}var m={key:n,sheet:new Xj({key:n,container:a,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:o,registered:{},insert:s};return m.sheet.hydrate(l),m},jw={exports:{}},me={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qe=typeof Symbol=="function"&&Symbol.for,fm=qe?Symbol.for("react.element"):60103,pm=qe?Symbol.for("react.portal"):60106,Yu=qe?Symbol.for("react.fragment"):60107,qu=qe?Symbol.for("react.strict_mode"):60108,Xu=qe?Symbol.for("react.profiler"):60114,Ku=qe?Symbol.for("react.provider"):60109,Qu=qe?Symbol.for("react.context"):60110,hm=qe?Symbol.for("react.async_mode"):60111,Zu=qe?Symbol.for("react.concurrent_mode"):60111,Ju=qe?Symbol.for("react.forward_ref"):60112,ec=qe?Symbol.for("react.suspense"):60113,_3=qe?Symbol.for("react.suspense_list"):60120,tc=qe?Symbol.for("react.memo"):60115,nc=qe?Symbol.for("react.lazy"):60116,C3=qe?Symbol.for("react.block"):60121,E3=qe?Symbol.for("react.fundamental"):60117,k3=qe?Symbol.for("react.responder"):60118,T3=qe?Symbol.for("react.scope"):60119;function Bt(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case fm:switch(e=e.type,e){case hm:case Zu:case Yu:case Xu:case qu:case ec:return e;default:switch(e=e&&e.$$typeof,e){case Qu:case Ju:case nc:case tc:case Ku:return e;default:return t}}case pm:return t}}}function Mw(e){return Bt(e)===Zu}me.AsyncMode=hm;me.ConcurrentMode=Zu;me.ContextConsumer=Qu;me.ContextProvider=Ku;me.Element=fm;me.ForwardRef=Ju;me.Fragment=Yu;me.Lazy=nc;me.Memo=tc;me.Portal=pm;me.Profiler=Xu;me.StrictMode=qu;me.Suspense=ec;me.isAsyncMode=function(e){return Mw(e)||Bt(e)===hm};me.isConcurrentMode=Mw;me.isContextConsumer=function(e){return Bt(e)===Qu};me.isContextProvider=function(e){return Bt(e)===Ku};me.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===fm};me.isForwardRef=function(e){return Bt(e)===Ju};me.isFragment=function(e){return Bt(e)===Yu};me.isLazy=function(e){return Bt(e)===nc};me.isMemo=function(e){return Bt(e)===tc};me.isPortal=function(e){return Bt(e)===pm};me.isProfiler=function(e){return Bt(e)===Xu};me.isStrictMode=function(e){return Bt(e)===qu};me.isSuspense=function(e){return Bt(e)===ec};me.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Yu||e===Zu||e===Xu||e===qu||e===ec||e===_3||typeof e=="object"&&e!==null&&(e.$$typeof===nc||e.$$typeof===tc||e.$$typeof===Ku||e.$$typeof===Qu||e.$$typeof===Ju||e.$$typeof===E3||e.$$typeof===k3||e.$$typeof===T3||e.$$typeof===C3)};me.typeOf=Bt;jw.exports=me;var P3=jw.exports,$w=P3,O3={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},j3={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Iw={};Iw[$w.ForwardRef]=O3;Iw[$w.Memo]=j3;var M3=!0;function Dw(e,t,n){var r="";return n.split(" ").forEach(function(i){e[i]!==void 0?t.push(e[i]+";"):r+=i+" "}),r}var mm=function(t,n,r){var i=t.key+"-"+n.name;(r===!1||M3===!1)&&t.registered[i]===void 0&&(t.registered[i]=n.styles)},Lw=function(t,n,r){mm(t,n,r);var i=t.key+"-"+n.name;if(t.inserted[n.name]===void 0){var o=n;do t.insert(n===o?"."+i:"",o,t.sheet,!0),o=o.next;while(o!==void 0)}};function $3(e){for(var t=0,n,r=0,i=e.length;i>=4;++r,i-=4)n=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(i){case 3:t^=(e.charCodeAt(r+2)&255)<<16;case 2:t^=(e.charCodeAt(r+1)&255)<<8;case 1:t^=e.charCodeAt(r)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var I3={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},D3=/[A-Z]|^ms/g,L3=/_EMO_([^_]+?)_([^]*?)_EMO_/g,Aw=function(t){return t.charCodeAt(1)===45},Q0=function(t){return t!=null&&typeof t!="boolean"},wd=h3(function(e){return Aw(e)?e:e.replace(D3,"-$&").toLowerCase()}),Z0=function(t,n){switch(t){case"animation":case"animationName":if(typeof n=="string")return n.replace(L3,function(r,i,o){return bn={name:i,styles:o,next:bn},i})}return I3[t]!==1&&!Aw(t)&&typeof n=="number"&&n!==0?n+"px":n};function Ia(e,t,n){if(n==null)return"";if(n.__emotion_styles!==void 0)return n;switch(typeof n){case"boolean":return"";case"object":{if(n.anim===1)return bn={name:n.name,styles:n.styles,next:bn},n.name;if(n.styles!==void 0){var r=n.next;if(r!==void 0)for(;r!==void 0;)bn={name:r.name,styles:r.styles,next:bn},r=r.next;var i=n.styles+";";return i}return A3(e,t,n)}case"function":{if(e!==void 0){var o=bn,a=n(e);return bn=o,Ia(e,t,a)}break}}if(t==null)return n;var l=t[n];return l!==void 0?l:n}function A3(e,t,n){var r="";if(Array.isArray(n))for(var i=0;i<n.length;i++)r+=Ia(e,t,n[i])+";";else for(var o in n){var a=n[o];if(typeof a!="object")t!=null&&t[a]!==void 0?r+=o+"{"+t[a]+"}":Q0(a)&&(r+=wd(o)+":"+Z0(o,a)+";");else if(Array.isArray(a)&&typeof a[0]=="string"&&(t==null||t[a[0]]===void 0))for(var l=0;l<a.length;l++)Q0(a[l])&&(r+=wd(o)+":"+Z0(o,a[l])+";");else{var s=Ia(e,t,a);switch(o){case"animation":case"animationName":{r+=wd(o)+":"+s+";";break}default:r+=o+"{"+s+"}"}}}return r}var J0=/label:\s*([^\s;\n{]+)\s*(;|$)/g,bn,gm=function(t,n,r){if(t.length===1&&typeof t[0]=="object"&&t[0]!==null&&t[0].styles!==void 0)return t[0];var i=!0,o="";bn=void 0;var a=t[0];a==null||a.raw===void 0?(i=!1,o+=Ia(r,n,a)):o+=a[0];for(var l=1;l<t.length;l++)o+=Ia(r,n,t[l]),i&&(o+=a[l]);J0.lastIndex=0;for(var s="",u;(u=J0.exec(o))!==null;)s+="-"+u[1];var d=$3(o)+s;return{name:d,styles:o,next:bn}},R3=function(t){return t()},F3=sf["useInsertionEffect"]?sf["useInsertionEffect"]:!1,Rw=F3||R3,vm={}.hasOwnProperty,Fw=b.createContext(typeof HTMLElement<"u"?S3({key:"css"}):null);Fw.Provider;var zw=function(t){return b.forwardRef(function(n,r){var i=b.useContext(Fw);return t(n,i,r)})},Nw=b.createContext({}),Tp="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",z3=function(t,n){var r={};for(var i in n)vm.call(n,i)&&(r[i]=n[i]);return r[Tp]=t,r},N3=function(t){var n=t.cache,r=t.serialized,i=t.isStringTag;return mm(n,r,i),Rw(function(){return Lw(n,r,i)}),null},B3=zw(function(e,t,n){var r=e.css;typeof r=="string"&&t.registered[r]!==void 0&&(r=t.registered[r]);var i=e[Tp],o=[r],a="";typeof e.className=="string"?a=Dw(t.registered,o,e.className):e.className!=null&&(a=e.className+" ");var l=gm(o,void 0,b.useContext(Nw));a+=t.key+"-"+l.name;var s={};for(var u in e)vm.call(e,u)&&u!=="css"&&u!==Tp&&(s[u]=e[u]);return s.ref=n,s.className=a,b.createElement(b.Fragment,null,b.createElement(N3,{cache:t,serialized:l,isStringTag:typeof i=="string"}),b.createElement(i,s))}),V3=B3,Q=function(t,n){var r=arguments;if(n==null||!vm.call(n,"css"))return b.createElement.apply(void 0,r);var i=r.length,o=new Array(i);o[0]=V3,o[1]=z3(t,n);for(var a=2;a<i;a++)o[a]=r[a];return b.createElement.apply(null,o)};function ym(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return gm(t)}var U3=function(){var t=ym.apply(void 0,arguments),n="animation-"+t.name;return{name:n,styles:"@keyframes "+n+"{"+t.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},H3=aT,W3=function(t){return t!=="theme"},ev=function(t){return typeof t=="string"&&t.charCodeAt(0)>96?H3:W3},tv=function(t,n,r){var i;if(n){var o=n.shouldForwardProp;i=t.__emotion_forwardProp&&o?function(a){return t.__emotion_forwardProp(a)&&o(a)}:o}return typeof i!="function"&&r&&(i=t.__emotion_forwardProp),i},G3=function(t){var n=t.cache,r=t.serialized,i=t.isStringTag;return mm(n,r,i),Rw(function(){return Lw(n,r,i)}),null},Y3=function e(t,n){var r=t.__emotion_real===t,i=r&&t.__emotion_base||t,o,a;n!==void 0&&(o=n.label,a=n.target);var l=tv(t,n,r),s=l||ev(i),u=!s("as");return function(){var d=arguments,c=r&&t.__emotion_styles!==void 0?t.__emotion_styles.slice(0):[];if(o!==void 0&&c.push("label:"+o+";"),d[0]==null||d[0].raw===void 0)c.push.apply(c,d);else{c.push(d[0][0]);for(var y=d.length,p=1;p<y;p++)c.push(d[p],d[0][p])}var m=zw(function(g,w,h){var v=u&&g.as||i,x="",S=[],E=g;if(g.theme==null){E={};for(var P in g)E[P]=g[P];E.theme=b.useContext(Nw)}typeof g.className=="string"?x=Dw(w.registered,S,g.className):g.className!=null&&(x=g.className+" ");var k=gm(c.concat(S),w.registered,E);x+=w.key+"-"+k.name,a!==void 0&&(x+=" "+a);var _=u&&l===void 0?ev(v):s,M={};for(var $ in g)u&&$==="as"||_($)&&(M[$]=g[$]);return M.className=x,M.ref=h,b.createElement(b.Fragment,null,b.createElement(G3,{cache:w,serialized:k,isStringTag:typeof v=="string"}),b.createElement(v,M))});return m.displayName=o!==void 0?o:"Styled("+(typeof i=="string"?i:i.displayName||i.name||"Component")+")",m.defaultProps=t.defaultProps,m.__emotion_real=m,m.__emotion_base=i,m.__emotion_styles=c,m.__emotion_forwardProp=l,Object.defineProperty(m,"toString",{value:function(){return"."+a}}),m.withComponent=function(g,w){return e(g,J({},n,w,{shouldForwardProp:tv(m,w,!0)})).apply(void 0,c)},m}},q3=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],Ae=Y3.bind();q3.forEach(function(e){Ae[e]=Ae(e)});const X3=Ae.section`
  background-color: var(--second-background);
`,K3=Ae.div`
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
`,Q3=Ae.div`

`,Z3=Ae.h1`
  font-size: 32px;
  font-family: var(--main-font);
  color: var(--black-color);
  text-transform: uppercase;
  margin-bottom: 20px;
`,J3=Ae.div`
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
`;const e5=Ae(Oe)`
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
`,t5=Ae.div`
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
`,n5=Ae.img`
  width: 100%;
  height: 200px;
  object-fit: cover;

  display: block;
  @media screen and (max-width: 768px) {
    height: 250px;
  }
`,r5=Ae.p`
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
`;var i5={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"};o5(i5);function o5(e){var t={};for(var n in e)e.hasOwnProperty(n)&&(t[e[n]]=n);return t}var a5="#4fa94d",s5={"aria-busy":!0,role:"progressbar"},l5=C.div`
  display: ${e=>e.$visible?"flex":"none"};
`,u5="http://www.w3.org/2000/svg",qa=({height:e=100,width:t=100,radius:n=5,color:r=a5,ariaLabel:i="ball-triangle-loading",wrapperClass:o,wrapperStyle:a,visible:l=!0})=>f.jsx(l5,{style:{...a},$visible:l,className:o,"data-testid":"ball-triangle-loading","aria-label":i,...s5,children:f.jsxs("svg",{height:e,width:t,stroke:r,viewBox:"0 0 57 57",xmlns:u5,"data-testid":"ball-triangle-svg",children:[f.jsx("title",{children:"Ball Triangle"}),f.jsx("desc",{children:"Animated representation of three balls"}),f.jsx("g",{fill:"none",fillRule:"evenodd",children:f.jsxs("g",{transform:"translate(1 1)",strokeWidth:"2",children:[f.jsxs("circle",{cx:"5",cy:"50",r:n,children:[f.jsx("animate",{attributeName:"cy",begin:"0s",dur:"2.2s",values:"50;5;50;50",calcMode:"linear",repeatCount:"indefinite"}),f.jsx("animate",{attributeName:"cx",begin:"0s",dur:"2.2s",values:"5;27;49;5",calcMode:"linear",repeatCount:"indefinite"})]}),f.jsxs("circle",{cx:"27",cy:"5",r:n,children:[f.jsx("animate",{attributeName:"cy",begin:"0s",dur:"2.2s",from:"5",to:"5",values:"5;50;50;5",calcMode:"linear",repeatCount:"indefinite"}),f.jsx("animate",{attributeName:"cx",begin:"0s",dur:"2.2s",from:"27",to:"27",values:"27;49;5;27",calcMode:"linear",repeatCount:"indefinite"})]}),f.jsxs("circle",{cx:"49",cy:"50",r:n,children:[f.jsx("animate",{attributeName:"cy",begin:"0s",dur:"2.2s",values:"50;50;5;50",calcMode:"linear",repeatCount:"indefinite"}),f.jsx("animate",{attributeName:"cx",from:"49",to:"49",begin:"0s",dur:"2.2s",values:"49;5;27;49",calcMode:"linear",repeatCount:"indefinite"})]})]})})]})}),Jt=242.776657104492,c5=1.6,d5=em`
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
`;C.path`
  stroke-dasharray: ${Jt*.01}px, ${Jt};
  stroke-dashoffset: 0;
  animation: ${d5} ${c5}s linear infinite;
`;var f5=em`
to {
   transform: rotate(360deg);
 }
`;C.svg`
  animation: ${f5} ${e=>String(e.$animationDuration).endsWith("s")?String(e.$animationDuration):`${e.$animationDuration}s`} steps(12, end) infinite;
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
`;var p5=em`
to {
   stroke-dashoffset: 136;
 }
`;C.polygon`
  stroke-dasharray: 17;
  animation: ${p5} 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;
`;C.svg`
  transform-origin: 50% 65%;
`;const h5=()=>{const[e,t]=b.useState([]),[n,r]=b.useState(!0);return b.useEffect(()=>{async function i(){try{r(!0);const a=await(await fetch("https://backenddidiv-production.up.railway.app/api/categories?populate=*&pagination[limit]=50&sort=title:asc")).json();console.log(a),t(a.data.map(l=>{var s;return{id:l.id_title,title:l.title,image:(s=l.image)==null?void 0:s.url}}))}catch(o){console.log(o)}finally{r(!1)}}i()},[]),n?f.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"100vw",height:"100vh"},children:f.jsx(qa,{height:100,width:100,radius:5,color:"var(--orange-color)",ariaLabel:"ball-triangle-loading",wrapperStyle:{},wrapperClass:"",visible:!0})}):f.jsx(X3,{children:f.jsxs(K3,{children:[f.jsx(Q3,{children:f.jsx(Sw,{})}),f.jsx(Z3,{children:"Каталог"}),f.jsx(J3,{children:e.map(i=>f.jsxs(e5,{to:`/catalog/${i.title}`,children:[f.jsx(t5,{children:f.jsx(n5,{src:i.image,alt:i.title})}),f.jsx(r5,{children:i.title})]},i.id))})]})})},m5=Ae.div`

padding-top: 100px;
padding-bottom: 250px;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`,g5=Ae.h1`
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
`,v5=Ae.p`
  color: #191919;
  font-size: 18px;
  max-width: 600px;
      text-align: center;
      margin-bottom: 50px;
      @media screen and (min-width: 768px) {
 font-size: 25px;
  }
`,y5=Ae(Oe)`

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

  
`,x5=()=>f.jsxs(m5,{children:[f.jsxs(g5,{children:[" ",f.jsx("span",{children:"404"}),"  PAGE NOT FOUND"]}),f.jsx(v5,{children:" Ой, схоже, ти збився з маршруту! На жаль, ця сторінка безслідно зникла десь на бездоріжжі. Спробуй повернутися на головну "}),f.jsx(y5,{children:" На головну"})]});const b5=C.div`
width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
   font-family: var(--main-font);
`,w5=C.div`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  margin: 0;
`;var Bw={},Vw={},rc={},Uw={exports:{}},Xa={};/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var nv=Object.getOwnPropertySymbols,S5=Object.prototype.hasOwnProperty,_5=Object.prototype.propertyIsEnumerable;function C5(e){if(e==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}function E5(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de",Object.getOwnPropertyNames(e)[0]==="5")return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;var r=Object.getOwnPropertyNames(t).map(function(o){return t[o]});if(r.join("")!=="0123456789")return!1;var i={};return"abcdefghijklmnopqrst".split("").forEach(function(o){i[o]=o}),Object.keys(Object.assign({},i)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}var k5=E5()?Object.assign:function(e,t){for(var n,r=C5(e),i,o=1;o<arguments.length;o++){n=Object(arguments[o]);for(var a in n)S5.call(n,a)&&(r[a]=n[a]);if(nv){i=nv(n);for(var l=0;l<i.length;l++)_5.call(n,i[l])&&(r[i[l]]=n[i[l]])}}return r},Hw={exports:{}},le={};/** @license React v17.0.2
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xm=k5,go=60103,Ww=60106;le.Fragment=60107;le.StrictMode=60108;le.Profiler=60114;var Gw=60109,Yw=60110,qw=60112;le.Suspense=60113;var Xw=60115,Kw=60116;if(typeof Symbol=="function"&&Symbol.for){var Zt=Symbol.for;go=Zt("react.element"),Ww=Zt("react.portal"),le.Fragment=Zt("react.fragment"),le.StrictMode=Zt("react.strict_mode"),le.Profiler=Zt("react.profiler"),Gw=Zt("react.provider"),Yw=Zt("react.context"),qw=Zt("react.forward_ref"),le.Suspense=Zt("react.suspense"),Xw=Zt("react.memo"),Kw=Zt("react.lazy")}var rv=typeof Symbol=="function"&&Symbol.iterator;function T5(e){return e===null||typeof e!="object"?null:(e=rv&&e[rv]||e["@@iterator"],typeof e=="function"?e:null)}function Ka(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Qw={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Zw={};function vo(e,t,n){this.props=e,this.context=t,this.refs=Zw,this.updater=n||Qw}vo.prototype.isReactComponent={};vo.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error(Ka(85));this.updater.enqueueSetState(this,e,t,"setState")};vo.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Jw(){}Jw.prototype=vo.prototype;function bm(e,t,n){this.props=e,this.context=t,this.refs=Zw,this.updater=n||Qw}var wm=bm.prototype=new Jw;wm.constructor=bm;xm(wm,vo.prototype);wm.isPureReactComponent=!0;var Sm={current:null},eS=Object.prototype.hasOwnProperty,tS={key:!0,ref:!0,__self:!0,__source:!0};function nS(e,t,n){var r,i={},o=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(o=""+t.key),t)eS.call(t,r)&&!tS.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var s=Array(l),u=0;u<l;u++)s[u]=arguments[u+2];i.children=s}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:go,type:e,key:o,ref:a,props:i,_owner:Sm.current}}function P5(e,t){return{$$typeof:go,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function _m(e){return typeof e=="object"&&e!==null&&e.$$typeof===go}function O5(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var iv=/\/+/g;function Sd(e,t){return typeof e=="object"&&e!==null&&e.key!=null?O5(""+e.key):t.toString(36)}function tl(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case go:case Ww:a=!0}}if(a)return a=e,i=i(a),e=r===""?"."+Sd(a,0):r,Array.isArray(i)?(n="",e!=null&&(n=e.replace(iv,"$&/")+"/"),tl(i,t,n,"",function(u){return u})):i!=null&&(_m(i)&&(i=P5(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(iv,"$&/")+"/")+e)),t.push(i)),1;if(a=0,r=r===""?".":r+":",Array.isArray(e))for(var l=0;l<e.length;l++){o=e[l];var s=r+Sd(o,l);a+=tl(o,t,n,s,i)}else if(s=T5(e),typeof s=="function")for(e=s.call(e),l=0;!(o=e.next()).done;)o=o.value,s=r+Sd(o,l++),a+=tl(o,t,n,s,i);else if(o==="object")throw t=""+e,Error(Ka(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t));return a}function Ss(e,t,n){if(e==null)return e;var r=[],i=0;return tl(e,r,"","",function(o){return t.call(n,o,i++)}),r}function j5(e){if(e._status===-1){var t=e._result;t=t(),e._status=0,e._result=t,t.then(function(n){e._status===0&&(n=n.default,e._status=1,e._result=n)},function(n){e._status===0&&(e._status=2,e._result=n)})}if(e._status===1)return e._result;throw e._result}var rS={current:null};function Zn(){var e=rS.current;if(e===null)throw Error(Ka(321));return e}var M5={ReactCurrentDispatcher:rS,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:Sm,IsSomeRendererActing:{current:!1},assign:xm};le.Children={map:Ss,forEach:function(e,t,n){Ss(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Ss(e,function(){t++}),t},toArray:function(e){return Ss(e,function(t){return t})||[]},only:function(e){if(!_m(e))throw Error(Ka(143));return e}};le.Component=vo;le.PureComponent=bm;le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=M5;le.cloneElement=function(e,t,n){if(e==null)throw Error(Ka(267,e));var r=xm({},e.props),i=e.key,o=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,a=Sm.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in t)eS.call(t,s)&&!tS.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&l!==void 0?l[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){l=Array(s);for(var u=0;u<s;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:go,type:e.type,key:i,ref:o,props:r,_owner:a}};le.createContext=function(e,t){return t===void 0&&(t=null),e={$$typeof:Yw,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider={$$typeof:Gw,_context:e},e.Consumer=e};le.createElement=nS;le.createFactory=function(e){var t=nS.bind(null,e);return t.type=e,t};le.createRef=function(){return{current:null}};le.forwardRef=function(e){return{$$typeof:qw,render:e}};le.isValidElement=_m;le.lazy=function(e){return{$$typeof:Kw,_payload:{_status:-1,_result:e},_init:j5}};le.memo=function(e,t){return{$$typeof:Xw,type:e,compare:t===void 0?null:t}};le.useCallback=function(e,t){return Zn().useCallback(e,t)};le.useContext=function(e,t){return Zn().useContext(e,t)};le.useDebugValue=function(){};le.useEffect=function(e,t){return Zn().useEffect(e,t)};le.useImperativeHandle=function(e,t,n){return Zn().useImperativeHandle(e,t,n)};le.useLayoutEffect=function(e,t){return Zn().useLayoutEffect(e,t)};le.useMemo=function(e,t){return Zn().useMemo(e,t)};le.useReducer=function(e,t,n){return Zn().useReducer(e,t,n)};le.useRef=function(e){return Zn().useRef(e)};le.useState=function(e){return Zn().useState(e)};le.version="17.0.2";Hw.exports=le;var $5=Hw.exports;/** @license React v17.0.2
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var I5=$5,iS=60103;Xa.Fragment=60107;if(typeof Symbol=="function"&&Symbol.for){var ov=Symbol.for;iS=ov("react.element"),Xa.Fragment=ov("react.fragment")}var D5=I5.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,L5=Object.prototype.hasOwnProperty,A5={key:!0,ref:!0,__self:!0,__source:!0};function oS(e,t,n){var r,i={},o=null,a=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)L5.call(t,r)&&!A5.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:iS,type:e,key:o,ref:a,props:i,_owner:D5.current}}Xa.jsx=oS;Xa.jsxs=oS;Uw.exports=Xa;var Ot=Uw.exports,aS={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var t={}.hasOwnProperty;function n(){for(var o="",a=0;a<arguments.length;a++){var l=arguments[a];l&&(o=i(o,r(l)))}return o}function r(o){if(typeof o=="string"||typeof o=="number")return o;if(typeof o!="object")return"";if(Array.isArray(o))return n.apply(null,o);if(o.toString!==Object.prototype.toString&&!o.toString.toString().includes("[native code]"))return o.toString();var a="";for(var l in o)t.call(o,l)&&o[l]&&(a=i(a,l));return a}function i(o,a){return a?o?o+" "+a:o+a:o}e.exports?(n.default=n,e.exports=n):window.classNames=n})()})(aS);var jt=aS.exports;const R5={"lds-circle":"_lds-circle_qlxhy_1"},F5=Object.freeze(Object.defineProperty({__proto__:null,default:R5},Symbol.toStringTag,{value:"Module"})),z5=Tt(F5);var sS=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(rc,"__esModule",{value:!0});rc.Circle=void 0;const N5=Ot,B5=sS(jt),V5=sS(z5);function U5({color:e="#7f58af",size:t=64,className:n,style:r,...i}){return(0,N5.jsx)("div",{className:(0,B5.default)(V5.default["lds-circle"],n),style:{background:e,width:t,height:t,...r},...i})}rc.Circle=U5;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Circle=void 0;var t=rc;Object.defineProperty(e,"Circle",{enumerable:!0,get:function(){return t.Circle}})})(Vw);var lS={},ic={};const H5={"lds-default":"_lds-default_wt1n8_1"},W5=Object.freeze(Object.defineProperty({__proto__:null,default:H5},Symbol.toStringTag,{value:"Module"})),G5=Tt(W5);var uS=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(ic,"__esModule",{value:!0});ic.Default=void 0;const av=Ot,Y5=uS(jt),q5=uS(G5);function X5({color:e="#7f58af",size:t=80,className:n,style:r,...i}){const o=[...Array(12)].map((a,l)=>(0,av.jsx)("div",{style:{background:`${e}`,width:t*.075,height:t*.075}},l));return(0,av.jsx)("div",{className:(0,Y5.default)(q5.default["lds-default"],n),style:{height:t,width:t,...r},...i,children:o})}ic.Default=X5;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Default=void 0;var t=ic;Object.defineProperty(e,"Default",{enumerable:!0,get:function(){return t.Default}})})(lS);var cS={},oc={};const K5={"lds-dual-ring":"_lds-dual-ring_pbai0_1","lds-dual-ring-after":"_lds-dual-ring-after_pbai0_6"},Q5=Object.freeze(Object.defineProperty({__proto__:null,default:K5},Symbol.toStringTag,{value:"Module"})),Z5=Tt(Q5);var dS=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(oc,"__esModule",{value:!0});oc.DualRing=void 0;const sv=Ot,lv=dS(jt),uv=dS(Z5);function J5({color:e="#7f58af",size:t=80,className:n,style:r,...i}){return(0,sv.jsx)("div",{className:(0,lv.default)(uv.default["lds-dual-ring"],n),style:{width:t,height:t,...r},...i,children:(0,sv.jsx)("div",{className:(0,lv.default)(uv.default["lds-dual-ring-after"]),style:{borderColor:`${e} transparent`,borderWidth:t*.1,width:t*.7-6,height:t*.7-6}})})}oc.DualRing=J5;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.DualRing=void 0;var t=oc;Object.defineProperty(e,"DualRing",{enumerable:!0,get:function(){return t.DualRing}})})(cS);var fS={},ac={};const eM={"lds-ellipsis":"_lds-ellipsis_1fzd3_1","lds-ellipsis1":"_lds-ellipsis1_1fzd3_1","lds-ellipsis2":"_lds-ellipsis2_1fzd3_1","lds-ellipsis3":"_lds-ellipsis3_1fzd3_1"},tM=Object.freeze(Object.defineProperty({__proto__:null,default:eM},Symbol.toStringTag,{value:"Module"})),nM=Tt(tM);var pS=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(ac,"__esModule",{value:!0});ac.Ellipsis=void 0;const cv=Ot,rM=pS(jt),iM=pS(nM);function oM({color:e="#7f58af",size:t=80,className:n,style:r,...i}){const o=[...Array(4)].map((a,l)=>(0,cv.jsx)("div",{style:{background:`${e}`}},l));return(0,cv.jsx)("div",{className:(0,rM.default)(iM.default["lds-ellipsis"],n),style:{...r,width:t,height:t},...i,children:o})}ac.Ellipsis=oM;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Ellipsis=void 0;var t=ac;Object.defineProperty(e,"Ellipsis",{enumerable:!0,get:function(){return t.Ellipsis}})})(fS);var hS={},sc={};const aM={"lds-facebook":"_lds-facebook_1ts9g_1"},sM=Object.freeze(Object.defineProperty({__proto__:null,default:aM},Symbol.toStringTag,{value:"Module"})),lM=Tt(sM);var mS=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(sc,"__esModule",{value:!0});sc.Facebook=void 0;const dv=Ot,uM=mS(jt),cM=mS(lM);function dM({color:e="#7f58af",size:t=80,className:n,style:r,...i}){const o=[...Array(3)].map((a,l)=>(0,dv.jsx)("div",{style:{background:`${e}`}},l));return(0,dv.jsx)("div",{className:(0,uM.default)(cM.default["lds-facebook"],n),style:{width:t,height:t,...r},...i,children:o})}sc.Facebook=dM;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Facebook=void 0;var t=sc;Object.defineProperty(e,"Facebook",{enumerable:!0,get:function(){return t.Facebook}})})(hS);var gS={},lc={};const fM={"lds-grid":"_lds-grid_1ftub_1"},pM=Object.freeze(Object.defineProperty({__proto__:null,default:fM},Symbol.toStringTag,{value:"Module"})),hM=Tt(pM);var vS=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(lc,"__esModule",{value:!0});lc.Grid=void 0;const fv=Ot,mM=vS(jt),gM=vS(hM);function vM({color:e="#7f58af",size:t=80,className:n,style:r,...i}){const o=[...Array(9)].map((a,l)=>(0,fv.jsx)("div",{style:{background:`${e}`}},l));return(0,fv.jsx)("div",{className:(0,mM.default)(gM.default["lds-grid"],n),style:{width:t,height:t,...r},...i,children:o})}lc.Grid=vM;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Grid=void 0;var t=lc;Object.defineProperty(e,"Grid",{enumerable:!0,get:function(){return t.Grid}})})(gS);var yS={},uc={};const yM={"lds-heart":"_lds-heart_e4yfg_1","div-after":"_div-after_e4yfg_18","div-before":"_div-before_e4yfg_19"},xM=Object.freeze(Object.defineProperty({__proto__:null,default:yM},Symbol.toStringTag,{value:"Module"})),bM=Tt(xM);var xS=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(uc,"__esModule",{value:!0});uc.Heart=void 0;const _s=Ot,_d=xS(jt),Cd=xS(bM);function wM({color:e="#7f58af",size:t=80,className:n,style:r,...i}){return(0,_s.jsx)("div",{className:(0,_d.default)(Cd.default["lds-heart"],n),style:{width:t,height:t,...r},...i,children:(0,_s.jsxs)("div",{style:{background:e,width:t*.4,height:t*.4,left:t*.3,top:t*.3},children:[(0,_s.jsx)("div",{className:(0,_d.default)(Cd.default["div-before"]),style:{background:e,width:t*.4,height:t*.4,left:-t*.3}}),(0,_s.jsx)("div",{className:(0,_d.default)(Cd.default["div-after"]),style:{background:e,width:t*.4,height:t*.4,top:-t*.3}})]})})}uc.Heart=wM;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Heart=void 0;var t=uc;Object.defineProperty(e,"Heart",{enumerable:!0,get:function(){return t.Heart}})})(yS);var bS={},cc={};const SM={"lds-hourglass":"_lds-hourglass_mn3qi_1","lds-hourglass-after":"_lds-hourglass-after_mn3qi_7"},_M=Object.freeze(Object.defineProperty({__proto__:null,default:SM},Symbol.toStringTag,{value:"Module"})),CM=Tt(_M);var wS=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(cc,"__esModule",{value:!0});cc.Hourglass=void 0;const pv=Ot,hv=wS(jt),mv=wS(CM);function EM({color:e="#7f58af",size:t=32,className:n,style:r}){return(0,pv.jsx)("div",{className:(0,hv.default)(mv.default["lds-hourglass"],n),style:{...r},children:(0,pv.jsx)("div",{className:(0,hv.default)(mv.default["lds-hourglass-after"]),style:{background:e,borderWidth:t,borderHeight:t}})})}cc.Hourglass=EM;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Hourglass=void 0;var t=cc;Object.defineProperty(e,"Hourglass",{enumerable:!0,get:function(){return t.Hourglass}})})(bS);var SS={},dc={};const _S="_center_1rufi_10",CS="_spin_1rufi_1",kM={"lds-orbitals":"_lds-orbitals_1rufi_1",center:_S,"outer-spin":"_outer-spin_1rufi_19","inner-spin":"_inner-spin_1rufi_20","inner-arc":"_inner-arc_1rufi_25","inner-arc_start-a":"_inner-arc_start-a_1rufi_32","inner-arc_end-a":"_inner-arc_end-a_1rufi_36","inner-moon-a":"_inner-moon-a_1rufi_40","inner-moon-b":"_inner-moon-b_1rufi_49","inner-arc_start-b":"_inner-arc_start-b_1rufi_58","inner-arc_end-b":"_inner-arc_end-b_1rufi_62","outer-arc":"_outer-arc_1rufi_66","outer-arc_start-a":"_outer-arc_start-a_1rufi_73","outer-arc_end-a":"_outer-arc_end-a_1rufi_77","outer-moon-a":"_outer-moon-a_1rufi_81","outer-moon-b":"_outer-moon-b_1rufi_90","outer-arc_start-b":"_outer-arc_start-b_1rufi_99","outer-arc_end-b":"_outer-arc_end-b_1rufi_103",spin:CS},TM=Object.freeze(Object.defineProperty({__proto__:null,center:_S,default:kM,spin:CS},Symbol.toStringTag,{value:"Module"})),PM=Tt(TM);var ES=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(dc,"__esModule",{value:!0});dc.Orbitals=void 0;const nt=Ot,ct=ES(jt),Se=ES(PM);function OM({color:e="#7f58af",className:t,style:n}){return(0,nt.jsxs)("div",{className:(0,ct.default)(Se.default["lds-orbitals"],t),style:{...n},children:[(0,nt.jsx)("div",{className:Se.default.center,style:{background:e}}),(0,nt.jsxs)("div",{className:(0,ct.default)(Se.default["inner-spin"]),children:[(0,nt.jsx)("div",{className:(0,ct.default)(Se.default["inner-arc"],Se.default["inner-arc_start-a"]),style:{borderColor:e}}),(0,nt.jsx)("div",{className:(0,ct.default)(Se.default["inner-arc"],Se.default["inner-arc_end-a"]),style:{borderColor:e}}),(0,nt.jsx)("div",{className:(0,ct.default)(Se.default["inner-arc"],Se.default["inner-arc_start-b"]),style:{borderColor:e}}),(0,nt.jsx)("div",{className:(0,ct.default)(Se.default["inner-arc"],Se.default["inner-arc_end-b"]),style:{borderColor:e}}),(0,nt.jsx)("div",{className:(0,ct.default)(Se.default["inner-moon-a"]),style:{background:e}}),(0,nt.jsx)("div",{className:(0,ct.default)(Se.default["inner-moon-b"]),style:{background:e}})]}),(0,nt.jsxs)("div",{className:(0,ct.default)(Se.default["outer-spin"]),children:[(0,nt.jsx)("div",{className:(0,ct.default)(Se.default["outer-arc"],Se.default["outer-arc_start-a"]),style:{borderColor:e}}),(0,nt.jsx)("div",{className:(0,ct.default)(Se.default["outer-arc"],Se.default["outer-arc_end-a"]),style:{borderColor:e}}),(0,nt.jsx)("div",{className:(0,ct.default)(Se.default["outer-arc"],Se.default["outer-arc_start-b"]),style:{borderColor:e}}),(0,nt.jsx)("div",{className:(0,ct.default)(Se.default["outer-arc"],Se.default["outer-arc_end-b"]),style:{borderColor:e}}),(0,nt.jsx)("div",{className:(0,ct.default)(Se.default["outer-moon-a"]),style:{background:e}}),(0,nt.jsx)("div",{className:(0,ct.default)(Se.default["outer-moon-b"]),style:{background:e}})]})]})}dc.Orbitals=OM;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Orbitals=void 0;var t=dc;Object.defineProperty(e,"Orbitals",{enumerable:!0,get:function(){return t.Orbitals}})})(SS);var kS={},fc={};const jM={"lds-ring":"_lds-ring_xgxdp_1"},MM=Object.freeze(Object.defineProperty({__proto__:null,default:jM},Symbol.toStringTag,{value:"Module"})),$M=Tt(MM);var TS=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(fc,"__esModule",{value:!0});fc.Ring=void 0;const gv=Ot,IM=TS(jt),DM=TS($M);function LM({color:e="#7f58af",size:t=80,className:n,style:r}){const i=[...Array(4)].map((o,a)=>(0,gv.jsx)("div",{style:{borderColor:`${e} transparent transparent transparent`,width:t*.8,height:t*.8,margin:t*.1,borderWidth:t*.1}},a));return(0,gv.jsx)("div",{className:(0,IM.default)(DM.default["lds-ring"],n),style:{width:t,height:t,...r},children:i})}fc.Ring=LM;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Ring=void 0;var t=fc;Object.defineProperty(e,"Ring",{enumerable:!0,get:function(){return t.Ring}})})(kS);var PS={},pc={};const AM={"lds-ripple":"_lds-ripple_1lgcf_1"},RM=Object.freeze(Object.defineProperty({__proto__:null,default:AM},Symbol.toStringTag,{value:"Module"})),FM=Tt(RM);var OS=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(pc,"__esModule",{value:!0});pc.Ripple=void 0;const vv=Ot,zM=OS(jt),NM=OS(FM);function BM({color:e="#7f58af",size:t=80,className:n,style:r}){const i=[...Array(2)].map((o,a)=>(0,vv.jsx)("div",{style:{borderColor:`${e}`,borderWidth:t*.05}},a));return(0,vv.jsx)("div",{className:(0,zM.default)(NM.default["lds-ripple"],n),style:{width:t,height:t,...r},children:i})}pc.Ripple=BM;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Ripple=void 0;var t=pc;Object.defineProperty(e,"Ripple",{enumerable:!0,get:function(){return t.Ripple}})})(PS);var jS={},hc={};const VM={"lds-roller":"_lds-roller_ks1ij_1","div-after":"_div-after_ks1ij_11"},UM=Object.freeze(Object.defineProperty({__proto__:null,default:VM},Symbol.toStringTag,{value:"Module"})),HM=Tt(UM);var MS=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(hc,"__esModule",{value:!0});hc.Roller=void 0;const Ed=Ot,yv=MS(jt),xv=MS(HM);function WM({color:e="#7f58af",className:t,style:n}){const r=[...Array(8)].map((i,o)=>(0,Ed.jsx)("div",{children:(0,Ed.jsx)("div",{className:(0,yv.default)(xv.default["div-after"]),style:{background:e}})},o));return(0,Ed.jsx)("div",{className:(0,yv.default)(xv.default["lds-roller"],t),style:{...n},children:r})}hc.Roller=WM;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Roller=void 0;var t=hc;Object.defineProperty(e,"Roller",{enumerable:!0,get:function(){return t.Roller}})})(jS);var $S={},mc={};const GM={"lds-spinner":"_lds-spinner_flf3t_1","div-after":"_div-after_flf3t_12"},YM=Object.freeze(Object.defineProperty({__proto__:null,default:GM},Symbol.toStringTag,{value:"Module"})),qM=Tt(YM);var IS=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(mc,"__esModule",{value:!0});mc.Spinner=void 0;const kd=Ot,bv=IS(jt),wv=IS(qM);function XM({color:e="#7f58af",className:t,style:n}){const r=[...Array(12)].map((i,o)=>(0,kd.jsx)("div",{children:(0,kd.jsx)("div",{className:(0,bv.default)(wv.default["div-after"]),style:{background:e}})},o));return(0,kd.jsx)("div",{className:(0,bv.default)(wv.default["lds-spinner"],t),style:{...n},children:r})}mc.Spinner=XM;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Spinner=void 0;var t=mc;Object.defineProperty(e,"Spinner",{enumerable:!0,get:function(){return t.Spinner}})})($S);var DS={},gc={};const LS="_left_v9vlb_30",AS="_right_v9vlb_33",RS="_anim_v9vlb_37",KM={"lds-ouroboro":"_lds-ouroboro_v9vlb_1",left:LS,right:AS,anim:RS,"lds-ouroboro-rotate":"_lds-ouroboro-rotate_v9vlb_1"},QM=Object.freeze(Object.defineProperty({__proto__:null,anim:RS,default:KM,left:LS,right:AS},Symbol.toStringTag,{value:"Module"})),ZM=Tt(QM);var FS=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(gc,"__esModule",{value:!0});gc.Ouroboro=void 0;const Io=Ot,Do=FS(jt),Lo=FS(ZM);function JM({color:e="#7f58af",style:t,className:n}){return(0,Io.jsxs)("div",{className:(0,Do.default)(Lo.default["lds-ouroboro"],n),style:{...t},children:[(0,Io.jsx)("span",{className:(0,Do.default)(Lo.default.left),children:(0,Io.jsx)("span",{className:(0,Do.default)(Lo.default.anim),style:{background:e}})}),(0,Io.jsx)("span",{className:(0,Do.default)(Lo.default.right),children:(0,Io.jsx)("span",{className:(0,Do.default)(Lo.default.anim),style:{background:e}})})]})}gc.Ouroboro=JM;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Ouroboro=void 0;var t=gc;Object.defineProperty(e,"Ouroboro",{enumerable:!0,get:function(){return t.Ouroboro}})})(DS);(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Ouroboro=e.Spinner=e.Roller=e.Ripple=e.Ring=e.Orbitals=e.Hourglass=e.Heart=e.Grid=e.Facebook=e.Ellipsis=e.DualRing=e.Default=e.Circle=void 0;const t=Vw;Object.defineProperty(e,"Circle",{enumerable:!0,get:function(){return t.Circle}});const n=lS;Object.defineProperty(e,"Default",{enumerable:!0,get:function(){return n.Default}});const r=cS;Object.defineProperty(e,"DualRing",{enumerable:!0,get:function(){return r.DualRing}});const i=fS;Object.defineProperty(e,"Ellipsis",{enumerable:!0,get:function(){return i.Ellipsis}});const o=hS;Object.defineProperty(e,"Facebook",{enumerable:!0,get:function(){return o.Facebook}});const a=gS;Object.defineProperty(e,"Grid",{enumerable:!0,get:function(){return a.Grid}});const l=yS;Object.defineProperty(e,"Heart",{enumerable:!0,get:function(){return l.Heart}});const s=bS;Object.defineProperty(e,"Hourglass",{enumerable:!0,get:function(){return s.Hourglass}});const u=SS;Object.defineProperty(e,"Orbitals",{enumerable:!0,get:function(){return u.Orbitals}});const d=kS;Object.defineProperty(e,"Ring",{enumerable:!0,get:function(){return d.Ring}});const c=PS;Object.defineProperty(e,"Ripple",{enumerable:!0,get:function(){return c.Ripple}});const y=jS;Object.defineProperty(e,"Roller",{enumerable:!0,get:function(){return y.Roller}});const p=$S;Object.defineProperty(e,"Spinner",{enumerable:!0,get:function(){return p.Spinner}});const m=DS;Object.defineProperty(e,"Ouroboro",{enumerable:!0,get:function(){return m.Ouroboro}})})(Bw);const e$=()=>f.jsx(w5,{children:f.jsx(Bw.Default,{color:"#6d433da8"})});const t$="/Didiv/assets/Ancient_Kyiv-2153f7e6.ttf",n$=sP`
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
  src: url(${t$}) format('truetype');
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
`,r$=C.div`
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
`,i$=C(Oe)`
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
`,o$=C.h2`

  font-size: 30px;
  text-transform: uppercase;
  margin-bottom: 20px;
  color: #333;
  @media screen and (min-width: 768px) {
    font-size: 35px;
  }
`,a$=C.h3`

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
`,s$=C.a`

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
`,l$=C.div`
  width: 40px;
  height: 40px;
  border: 2px solid white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`,u$=()=>{const[e,t]=b.useState([]);return b.useEffect(()=>{async function n(){try{const r=await fetch("https://backenddidiv-production.up.railway.app/api/categories?populate=image&sort=title:asc",{credentials:"omit"});if(!r.ok){console.error("Server error:",r.status);return}const i=await r.json();if(console.log("API response:",i),!i.data){console.error("No data field:",i);return}t(i.data.map(o=>{var a;return{title:o.title,image:(a=o.image)==null?void 0:a.url}}))}catch(r){console.error("Fetch error:",r)}}n()},[]),console.log(e),f.jsxs(f.Fragment,{children:[f.jsx(o$,{children:"Каталог"}),f.jsxs(r$,{children:[e.slice(0,7).map(n=>f.jsx(i$,{to:`catalog/${n.title}`,bg:n.image,isBig:n.big,children:f.jsx(a$,{children:n.title})},n.title)),f.jsxs(s$,{href:"catalog",children:[f.jsx("p",{children:"Весь каталог"}),f.jsx(l$,{children:f.jsx(Iu,{size:24})})]})]})]})};function Sv(e){return e!==null&&typeof e=="object"&&"constructor"in e&&e.constructor===Object}function Cm(e={},t={}){const n=["__proto__","constructor","prototype"];Object.keys(t).filter(r=>n.indexOf(r)<0).forEach(r=>{typeof e[r]>"u"?e[r]=t[r]:Sv(t[r])&&Sv(e[r])&&Object.keys(t[r]).length>0&&Cm(e[r],t[r])})}const zS={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector(){return null},querySelectorAll(){return[]},getElementById(){return null},createEvent(){return{initEvent(){}}},createElement(){return{children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName(){return[]}}},createElementNS(){return{}},importNode(){return null},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function kn(){const e=typeof document<"u"?document:{};return Cm(e,zS),e}const c$={document:zS,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle(){return{getPropertyValue(){return""}}},Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia(){return{}},requestAnimationFrame(e){return typeof setTimeout>"u"?(e(),null):setTimeout(e,0)},cancelAnimationFrame(e){typeof setTimeout>"u"||clearTimeout(e)}};function vt(){const e=typeof window<"u"?window:{};return Cm(e,c$),e}function d$(e=""){return e.trim().split(" ").filter(t=>!!t.trim())}function f$(e){const t=e;Object.keys(t).forEach(n=>{try{t[n]=null}catch{}try{delete t[n]}catch{}})}function NS(e,t=0){return setTimeout(e,t)}function ql(){return Date.now()}function p$(e){const t=vt();let n;return t.getComputedStyle&&(n=t.getComputedStyle(e,null)),!n&&e.currentStyle&&(n=e.currentStyle),n||(n=e.style),n}function h$(e,t="x"){const n=vt();let r,i,o;const a=p$(e);return n.WebKitCSSMatrix?(i=a.transform||a.webkitTransform,i.split(",").length>6&&(i=i.split(", ").map(l=>l.replace(",",".")).join(", ")),o=new n.WebKitCSSMatrix(i==="none"?"":i)):(o=a.MozTransform||a.OTransform||a.MsTransform||a.msTransform||a.transform||a.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),r=o.toString().split(",")),t==="x"&&(n.WebKitCSSMatrix?i=o.m41:r.length===16?i=parseFloat(r[12]):i=parseFloat(r[4])),t==="y"&&(n.WebKitCSSMatrix?i=o.m42:r.length===16?i=parseFloat(r[13]):i=parseFloat(r[5])),i||0}function Cs(e){return typeof e=="object"&&e!==null&&e.constructor&&Object.prototype.toString.call(e).slice(8,-1)==="Object"}function m$(e){return typeof window<"u"&&typeof window.HTMLElement<"u"?e instanceof HTMLElement:e&&(e.nodeType===1||e.nodeType===11)}function $t(...e){const t=Object(e[0]);for(let n=1;n<e.length;n+=1){const r=e[n];if(r!=null&&!m$(r)){const i=Object.keys(Object(r)).filter(o=>o!=="__proto__"&&o!=="constructor"&&o!=="prototype");for(let o=0,a=i.length;o<a;o+=1){const l=i[o],s=Object.getOwnPropertyDescriptor(r,l);s!==void 0&&s.enumerable&&(Cs(t[l])&&Cs(r[l])?r[l].__swiper__?t[l]=r[l]:$t(t[l],r[l]):!Cs(t[l])&&Cs(r[l])?(t[l]={},r[l].__swiper__?t[l]=r[l]:$t(t[l],r[l])):t[l]=r[l])}}}return t}function hi(e,t,n){e.style.setProperty(t,n)}function BS({swiper:e,targetPosition:t,side:n}){const r=vt(),i=-e.translate;let o=null,a;const l=e.params.speed;e.wrapperEl.style.scrollSnapType="none",r.cancelAnimationFrame(e.cssModeFrameID);const s=t>i?"next":"prev",u=(c,y)=>s==="next"&&c>=y||s==="prev"&&c<=y,d=()=>{a=new Date().getTime(),o===null&&(o=a);const c=Math.max(Math.min((a-o)/l,1),0),y=.5-Math.cos(c*Math.PI)/2;let p=i+y*(t-i);if(u(p,t)&&(p=t),e.wrapperEl.scrollTo({[n]:p}),u(p,t)){e.wrapperEl.style.overflow="hidden",e.wrapperEl.style.scrollSnapType="",setTimeout(()=>{e.wrapperEl.style.overflow="",e.wrapperEl.scrollTo({[n]:p})}),r.cancelAnimationFrame(e.cssModeFrameID);return}e.cssModeFrameID=r.requestAnimationFrame(d)};d()}function Sn(e,t=""){const n=vt(),r=[...e.children];return n.HTMLSlotElement&&e instanceof HTMLSlotElement&&r.push(...e.assignedElements()),t?r.filter(i=>i.matches(t)):r}function g$(e,t){const n=[t];for(;n.length>0;){const r=n.shift();if(e===r)return!0;n.push(...r.children,...r.shadowRoot?r.shadowRoot.children:[],...r.assignedElements?r.assignedElements():[])}}function v$(e,t){const n=vt();let r=t.contains(e);return!r&&n.HTMLSlotElement&&t instanceof HTMLSlotElement&&(r=[...t.assignedElements()].includes(e),r||(r=g$(e,t))),r}function Xl(e){try{console.warn(e);return}catch{}}function Kl(e,t=[]){const n=document.createElement(e);return n.classList.add(...Array.isArray(t)?t:d$(t)),n}function y$(e,t){const n=[];for(;e.previousElementSibling;){const r=e.previousElementSibling;t?r.matches(t)&&n.push(r):n.push(r),e=r}return n}function x$(e,t){const n=[];for(;e.nextElementSibling;){const r=e.nextElementSibling;t?r.matches(t)&&n.push(r):n.push(r),e=r}return n}function fr(e,t){return vt().getComputedStyle(e,null).getPropertyValue(t)}function Ql(e){let t=e,n;if(t){for(n=0;(t=t.previousSibling)!==null;)t.nodeType===1&&(n+=1);return n}}function VS(e,t){const n=[];let r=e.parentElement;for(;r;)t?r.matches(t)&&n.push(r):n.push(r),r=r.parentElement;return n}function Pp(e,t,n){const r=vt();return n?e[t==="width"?"offsetWidth":"offsetHeight"]+parseFloat(r.getComputedStyle(e,null).getPropertyValue(t==="width"?"margin-right":"margin-top"))+parseFloat(r.getComputedStyle(e,null).getPropertyValue(t==="width"?"margin-left":"margin-bottom")):e.offsetWidth}function He(e){return(Array.isArray(e)?e:[e]).filter(t=>!!t)}function Da(e,t=""){typeof trustedTypes<"u"?e.innerHTML=trustedTypes.createPolicy("html",{createHTML:n=>n}).createHTML(t):e.innerHTML=t}function US(e,t,n,r){return e.params.createElements&&Object.keys(r).forEach(i=>{if(!n[i]&&n.auto===!0){let o=Sn(e.el,`.${r[i]}`)[0];o||(o=Kl("div",r[i]),o.className=r[i],e.el.append(o)),n[i]=o,t[i]=o}}),n}const _v='<svg class="swiper-navigation-icon" width="11" height="20" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.38296 20.0762C0.111788 19.805 0.111788 19.3654 0.38296 19.0942L9.19758 10.2796L0.38296 1.46497C0.111788 1.19379 0.111788 0.754138 0.38296 0.482966C0.654131 0.211794 1.09379 0.211794 1.36496 0.482966L10.4341 9.55214C10.8359 9.9539 10.8359 10.6053 10.4341 11.007L1.36496 20.0762C1.09379 20.3474 0.654131 20.3474 0.38296 20.0762Z" fill="currentColor"/></svg>';function b$({swiper:e,extendParams:t,on:n,emit:r}){t({navigation:{nextEl:null,prevEl:null,addIcons:!0,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock",navigationDisabledClass:"swiper-navigation-disabled"}}),e.navigation={nextEl:null,prevEl:null,arrowSvg:_v};function i(p){let m;return p&&typeof p=="string"&&e.isElement&&(m=e.el.querySelector(p)||e.hostEl.querySelector(p),m)?m:(p&&(typeof p=="string"&&(m=[...document.querySelectorAll(p)]),e.params.uniqueNavElements&&typeof p=="string"&&m&&m.length>1&&e.el.querySelectorAll(p).length===1?m=e.el.querySelector(p):m&&m.length===1&&(m=m[0])),p&&!m?p:m)}function o(p,m){const g=e.params.navigation;p=He(p),p.forEach(w=>{w&&(w.classList[m?"add":"remove"](...g.disabledClass.split(" ")),w.tagName==="BUTTON"&&(w.disabled=m),e.params.watchOverflow&&e.enabled&&w.classList[e.isLocked?"add":"remove"](g.lockClass))})}function a(){const{nextEl:p,prevEl:m}=e.navigation;if(e.params.loop){o(m,!1),o(p,!1);return}o(m,e.isBeginning&&!e.params.rewind),o(p,e.isEnd&&!e.params.rewind)}function l(p){p.preventDefault(),!(e.isBeginning&&!e.params.loop&&!e.params.rewind)&&(e.slidePrev(),r("navigationPrev"))}function s(p){p.preventDefault(),!(e.isEnd&&!e.params.loop&&!e.params.rewind)&&(e.slideNext(),r("navigationNext"))}function u(){const p=e.params.navigation;if(e.params.navigation=US(e,e.originalParams.navigation,e.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),!(p.nextEl||p.prevEl))return;let m=i(p.nextEl),g=i(p.prevEl);Object.assign(e.navigation,{nextEl:m,prevEl:g}),m=He(m),g=He(g);const w=(h,v)=>{if(h){if(p.addIcons&&h.matches(".swiper-button-next,.swiper-button-prev")&&!h.querySelector("svg")){const x=document.createElement("div");Da(x,_v),h.appendChild(x.querySelector("svg")),x.remove()}h.addEventListener("click",v==="next"?s:l)}!e.enabled&&h&&h.classList.add(...p.lockClass.split(" "))};m.forEach(h=>w(h,"next")),g.forEach(h=>w(h,"prev"))}function d(){let{nextEl:p,prevEl:m}=e.navigation;p=He(p),m=He(m);const g=(w,h)=>{w.removeEventListener("click",h==="next"?s:l),w.classList.remove(...e.params.navigation.disabledClass.split(" "))};p.forEach(w=>g(w,"next")),m.forEach(w=>g(w,"prev"))}n("init",()=>{e.params.navigation.enabled===!1?y():(u(),a())}),n("toEdge fromEdge lock unlock",()=>{a()}),n("destroy",()=>{d()}),n("enable disable",()=>{let{nextEl:p,prevEl:m}=e.navigation;if(p=He(p),m=He(m),e.enabled){a();return}[...p,...m].filter(g=>!!g).forEach(g=>g.classList.add(e.params.navigation.lockClass))}),n("click",(p,m)=>{let{nextEl:g,prevEl:w}=e.navigation;g=He(g),w=He(w);const h=m.target;let v=w.includes(h)||g.includes(h);if(e.isElement&&!v){const x=m.path||m.composedPath&&m.composedPath();x&&(v=x.find(S=>g.includes(S)||w.includes(S)))}if(e.params.navigation.hideOnClick&&!v){if(e.pagination&&e.params.pagination&&e.params.pagination.clickable&&(e.pagination.el===h||e.pagination.el.contains(h)))return;let x;g.length?x=g[0].classList.contains(e.params.navigation.hiddenClass):w.length&&(x=w[0].classList.contains(e.params.navigation.hiddenClass)),r(x===!0?"navigationShow":"navigationHide"),[...g,...w].filter(S=>!!S).forEach(S=>S.classList.toggle(e.params.navigation.hiddenClass))}});const c=()=>{e.el.classList.remove(...e.params.navigation.navigationDisabledClass.split(" ")),u(),a()},y=()=>{e.el.classList.add(...e.params.navigation.navigationDisabledClass.split(" ")),d()};Object.assign(e.navigation,{enable:c,disable:y,update:a,init:u,destroy:d})}function Ao(e=""){return`.${e.trim().replace(/([\.:!+\/()[\]#>~*^$|=,'"@{}\\])/g,"\\$1").replace(/ /g,".")}`}function w$({swiper:e,extendParams:t,on:n,emit:r}){const i="swiper-pagination";t({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:h=>h,formatFractionTotal:h=>h,bulletClass:`${i}-bullet`,bulletActiveClass:`${i}-bullet-active`,modifierClass:`${i}-`,currentClass:`${i}-current`,totalClass:`${i}-total`,hiddenClass:`${i}-hidden`,progressbarFillClass:`${i}-progressbar-fill`,progressbarOppositeClass:`${i}-progressbar-opposite`,clickableClass:`${i}-clickable`,lockClass:`${i}-lock`,horizontalClass:`${i}-horizontal`,verticalClass:`${i}-vertical`,paginationDisabledClass:`${i}-disabled`}}),e.pagination={el:null,bullets:[]};let o,a=0;function l(){return!e.params.pagination.el||!e.pagination.el||Array.isArray(e.pagination.el)&&e.pagination.el.length===0}function s(h,v){const{bulletActiveClass:x}=e.params.pagination;h&&(h=h[`${v==="prev"?"previous":"next"}ElementSibling`],h&&(h.classList.add(`${x}-${v}`),h=h[`${v==="prev"?"previous":"next"}ElementSibling`],h&&h.classList.add(`${x}-${v}-${v}`)))}function u(h,v,x){if(h=h%x,v=v%x,v===h+1)return"next";if(v===h-1)return"previous"}function d(h){const v=h.target.closest(Ao(e.params.pagination.bulletClass));if(!v)return;h.preventDefault();const x=Ql(v)*e.params.slidesPerGroup;if(e.params.loop){if(e.realIndex===x)return;const S=u(e.realIndex,x,e.slides.length);S==="next"?e.slideNext():S==="previous"?e.slidePrev():e.slideToLoop(x)}else e.slideTo(x)}function c(){const h=e.rtl,v=e.params.pagination;if(l())return;let x=e.pagination.el;x=He(x);let S,E;const P=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.slides.length,k=e.params.loop?Math.ceil(P/e.params.slidesPerGroup):e.snapGrid.length;if(e.params.loop?(E=e.previousRealIndex||0,S=e.params.slidesPerGroup>1?Math.floor(e.realIndex/e.params.slidesPerGroup):e.realIndex):typeof e.snapIndex<"u"?(S=e.snapIndex,E=e.previousSnapIndex):(E=e.previousIndex||0,S=e.activeIndex||0),v.type==="bullets"&&e.pagination.bullets&&e.pagination.bullets.length>0){const _=e.pagination.bullets;let M,$,D;if(v.dynamicBullets&&(o=Pp(_[0],e.isHorizontal()?"width":"height",!0),x.forEach(A=>{A.style[e.isHorizontal()?"width":"height"]=`${o*(v.dynamicMainBullets+4)}px`}),v.dynamicMainBullets>1&&E!==void 0&&(a+=S-(E||0),a>v.dynamicMainBullets-1?a=v.dynamicMainBullets-1:a<0&&(a=0)),M=Math.max(S-a,0),$=M+(Math.min(_.length,v.dynamicMainBullets)-1),D=($+M)/2),_.forEach(A=>{const j=[...["","-next","-next-next","-prev","-prev-prev","-main"].map(F=>`${v.bulletActiveClass}${F}`)].map(F=>typeof F=="string"&&F.includes(" ")?F.split(" "):F).flat();A.classList.remove(...j)}),x.length>1)_.forEach(A=>{const j=Ql(A);j===S?A.classList.add(...v.bulletActiveClass.split(" ")):e.isElement&&A.setAttribute("part","bullet"),v.dynamicBullets&&(j>=M&&j<=$&&A.classList.add(...`${v.bulletActiveClass}-main`.split(" ")),j===M&&s(A,"prev"),j===$&&s(A,"next"))});else{const A=_[S];if(A&&A.classList.add(...v.bulletActiveClass.split(" ")),e.isElement&&_.forEach((j,F)=>{j.setAttribute("part",F===S?"bullet-active":"bullet")}),v.dynamicBullets){const j=_[M],F=_[$];for(let R=M;R<=$;R+=1)_[R]&&_[R].classList.add(...`${v.bulletActiveClass}-main`.split(" "));s(j,"prev"),s(F,"next")}}if(v.dynamicBullets){const A=Math.min(_.length,v.dynamicMainBullets+4),j=(o*A-o)/2-D*o,F=h?"right":"left";_.forEach(R=>{R.style[e.isHorizontal()?F:"top"]=`${j}px`})}}x.forEach((_,M)=>{if(v.type==="fraction"&&(_.querySelectorAll(Ao(v.currentClass)).forEach($=>{$.textContent=v.formatFractionCurrent(S+1)}),_.querySelectorAll(Ao(v.totalClass)).forEach($=>{$.textContent=v.formatFractionTotal(k)})),v.type==="progressbar"){let $;v.progressbarOpposite?$=e.isHorizontal()?"vertical":"horizontal":$=e.isHorizontal()?"horizontal":"vertical";const D=(S+1)/k;let A=1,j=1;$==="horizontal"?A=D:j=D,_.querySelectorAll(Ao(v.progressbarFillClass)).forEach(F=>{F.style.transform=`translate3d(0,0,0) scaleX(${A}) scaleY(${j})`,F.style.transitionDuration=`${e.params.speed}ms`})}v.type==="custom"&&v.renderCustom?(Da(_,v.renderCustom(e,S+1,k)),M===0&&r("paginationRender",_)):(M===0&&r("paginationRender",_),r("paginationUpdate",_)),e.params.watchOverflow&&e.enabled&&_.classList[e.isLocked?"add":"remove"](v.lockClass)})}function y(){const h=e.params.pagination;if(l())return;const v=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.grid&&e.params.grid.rows>1?e.slides.length/Math.ceil(e.params.grid.rows):e.slides.length;let x=e.pagination.el;x=He(x);let S="";if(h.type==="bullets"){let E=e.params.loop?Math.ceil(v/e.params.slidesPerGroup):e.snapGrid.length;e.params.freeMode&&e.params.freeMode.enabled&&E>v&&(E=v);for(let P=0;P<E;P+=1)h.renderBullet?S+=h.renderBullet.call(e,P,h.bulletClass):S+=`<${h.bulletElement} ${e.isElement?'part="bullet"':""} class="${h.bulletClass}"></${h.bulletElement}>`}h.type==="fraction"&&(h.renderFraction?S=h.renderFraction.call(e,h.currentClass,h.totalClass):S=`<span class="${h.currentClass}"></span> / <span class="${h.totalClass}"></span>`),h.type==="progressbar"&&(h.renderProgressbar?S=h.renderProgressbar.call(e,h.progressbarFillClass):S=`<span class="${h.progressbarFillClass}"></span>`),e.pagination.bullets=[],x.forEach(E=>{h.type!=="custom"&&Da(E,S||""),h.type==="bullets"&&e.pagination.bullets.push(...E.querySelectorAll(Ao(h.bulletClass)))}),h.type!=="custom"&&r("paginationRender",x[0])}function p(){e.params.pagination=US(e,e.originalParams.pagination,e.params.pagination,{el:"swiper-pagination"});const h=e.params.pagination;if(!h.el)return;let v;typeof h.el=="string"&&e.isElement&&(v=e.el.querySelector(h.el)),!v&&typeof h.el=="string"&&(v=[...document.querySelectorAll(h.el)]),v||(v=h.el),!(!v||v.length===0)&&(e.params.uniqueNavElements&&typeof h.el=="string"&&Array.isArray(v)&&v.length>1&&(v=[...e.el.querySelectorAll(h.el)],v.length>1&&(v=v.find(x=>VS(x,".swiper")[0]===e.el))),Array.isArray(v)&&v.length===1&&(v=v[0]),Object.assign(e.pagination,{el:v}),v=He(v),v.forEach(x=>{h.type==="bullets"&&h.clickable&&x.classList.add(...(h.clickableClass||"").split(" ")),x.classList.add(h.modifierClass+h.type),x.classList.add(e.isHorizontal()?h.horizontalClass:h.verticalClass),h.type==="bullets"&&h.dynamicBullets&&(x.classList.add(`${h.modifierClass}${h.type}-dynamic`),a=0,h.dynamicMainBullets<1&&(h.dynamicMainBullets=1)),h.type==="progressbar"&&h.progressbarOpposite&&x.classList.add(h.progressbarOppositeClass),h.clickable&&x.addEventListener("click",d),e.enabled||x.classList.add(h.lockClass)}))}function m(){const h=e.params.pagination;if(l())return;let v=e.pagination.el;v&&(v=He(v),v.forEach(x=>{x.classList.remove(h.hiddenClass),x.classList.remove(h.modifierClass+h.type),x.classList.remove(e.isHorizontal()?h.horizontalClass:h.verticalClass),h.clickable&&(x.classList.remove(...(h.clickableClass||"").split(" ")),x.removeEventListener("click",d))})),e.pagination.bullets&&e.pagination.bullets.forEach(x=>x.classList.remove(...h.bulletActiveClass.split(" ")))}n("changeDirection",()=>{if(!e.pagination||!e.pagination.el)return;const h=e.params.pagination;let{el:v}=e.pagination;v=He(v),v.forEach(x=>{x.classList.remove(h.horizontalClass,h.verticalClass),x.classList.add(e.isHorizontal()?h.horizontalClass:h.verticalClass)})}),n("init",()=>{e.params.pagination.enabled===!1?w():(p(),y(),c())}),n("activeIndexChange",()=>{typeof e.snapIndex>"u"&&c()}),n("snapIndexChange",()=>{c()}),n("snapGridLengthChange",()=>{y(),c()}),n("destroy",()=>{m()}),n("enable disable",()=>{let{el:h}=e.pagination;h&&(h=He(h),h.forEach(v=>v.classList[e.enabled?"remove":"add"](e.params.pagination.lockClass)))}),n("lock unlock",()=>{c()}),n("click",(h,v)=>{const x=v.target,S=He(e.pagination.el);if(e.params.pagination.el&&e.params.pagination.hideOnClick&&S&&S.length>0&&!x.classList.contains(e.params.pagination.bulletClass)){if(e.navigation&&(e.navigation.nextEl&&x===e.navigation.nextEl||e.navigation.prevEl&&x===e.navigation.prevEl))return;const E=S[0].classList.contains(e.params.pagination.hiddenClass);r(E===!0?"paginationShow":"paginationHide"),S.forEach(P=>P.classList.toggle(e.params.pagination.hiddenClass))}});const g=()=>{e.el.classList.remove(e.params.pagination.paginationDisabledClass);let{el:h}=e.pagination;h&&(h=He(h),h.forEach(v=>v.classList.remove(e.params.pagination.paginationDisabledClass))),p(),y(),c()},w=()=>{e.el.classList.add(e.params.pagination.paginationDisabledClass);let{el:h}=e.pagination;h&&(h=He(h),h.forEach(v=>v.classList.add(e.params.pagination.paginationDisabledClass))),m()};Object.assign(e.pagination,{enable:g,disable:w,render:y,update:c,init:p,destroy:m})}function S$({swiper:e,extendParams:t,on:n,emit:r,params:i}){e.autoplay={running:!1,paused:!1,timeLeft:0},t({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!1,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}});let o,a,l=i&&i.autoplay?i.autoplay.delay:3e3,s=i&&i.autoplay?i.autoplay.delay:3e3,u,d=new Date().getTime(),c,y,p,m,g,w;function h(O){!e||e.destroyed||!e.wrapperEl||O.target===e.wrapperEl&&(e.wrapperEl.removeEventListener("transitionend",h),!(w||O.detail&&O.detail.bySwiperTouchMove)&&M())}const v=()=>{if(e.destroyed||!e.autoplay.running)return;e.autoplay.paused?c=!0:c&&(s=u,c=!1);const O=e.autoplay.paused?u:d+s-new Date().getTime();e.autoplay.timeLeft=O,r("autoplayTimeLeft",O,O/l),a=requestAnimationFrame(()=>{v()})},x=()=>{let O;return e.virtual&&e.params.virtual.enabled?O=e.slides.find(I=>I.classList.contains("swiper-slide-active")):O=e.slides[e.activeIndex],O?parseInt(O.getAttribute("data-swiper-autoplay"),10):void 0},S=()=>{let O=e.params.autoplay.delay;const T=x();return!Number.isNaN(T)&&T>0&&(O=T),O},E=O=>{if(e.destroyed||!e.autoplay.running)return;cancelAnimationFrame(a),v();let T=O;typeof T>"u"&&(T=S(),l=T,s=T),u=T;const I=e.params.speed,z=()=>{!e||e.destroyed||(e.params.autoplay.reverseDirection?!e.isBeginning||e.params.loop||e.params.rewind?(e.slidePrev(I,!0,!0),r("autoplay")):e.params.autoplay.stopOnLastSlide||(e.slideTo(e.slides.length-1,I,!0,!0),r("autoplay")):!e.isEnd||e.params.loop||e.params.rewind?(e.slideNext(I,!0,!0),r("autoplay")):e.params.autoplay.stopOnLastSlide||(e.slideTo(0,I,!0,!0),r("autoplay")),e.params.cssMode&&(d=new Date().getTime(),requestAnimationFrame(()=>{E()})))};return T>0?(clearTimeout(o),o=setTimeout(()=>{z()},T)):requestAnimationFrame(()=>{z()}),T},P=()=>{d=new Date().getTime(),e.autoplay.running=!0,E(),r("autoplayStart")},k=()=>{e.autoplay.running=!1,clearTimeout(o),cancelAnimationFrame(a),r("autoplayStop")},_=(O,T)=>{if(e.destroyed||!e.autoplay.running)return;clearTimeout(o),O||(g=!0);const I=()=>{r("autoplayPause"),e.params.autoplay.waitForTransition?e.wrapperEl.addEventListener("transitionend",h):M()};if(e.autoplay.paused=!0,T){I();return}u=(u||e.params.autoplay.delay)-(new Date().getTime()-d),!(e.isEnd&&u<0&&!e.params.loop)&&(u<0&&(u=0),I())},M=()=>{e.isEnd&&u<0&&!e.params.loop||e.destroyed||!e.autoplay.running||(d=new Date().getTime(),g?(g=!1,E(u)):E(),e.autoplay.paused=!1,r("autoplayResume"))},$=()=>{if(e.destroyed||!e.autoplay.running)return;const O=kn();O.visibilityState==="hidden"&&(g=!0,_(!0)),O.visibilityState==="visible"&&M()},D=O=>{O.pointerType==="mouse"&&(g=!0,w=!0,!(e.animating||e.autoplay.paused)&&_(!0))},A=O=>{O.pointerType==="mouse"&&(w=!1,e.autoplay.paused&&M())},j=()=>{e.params.autoplay.pauseOnMouseEnter&&(e.el.addEventListener("pointerenter",D),e.el.addEventListener("pointerleave",A))},F=()=>{e.el&&typeof e.el!="string"&&(e.el.removeEventListener("pointerenter",D),e.el.removeEventListener("pointerleave",A))},R=()=>{kn().addEventListener("visibilitychange",$)},L=()=>{kn().removeEventListener("visibilitychange",$)};n("init",()=>{e.params.autoplay.enabled&&(j(),R(),P())}),n("destroy",()=>{F(),L(),e.autoplay.running&&k()}),n("_freeModeStaticRelease",()=>{(p||g)&&M()}),n("_freeModeNoMomentumRelease",()=>{e.params.autoplay.disableOnInteraction?k():_(!0,!0)}),n("beforeTransitionStart",(O,T,I)=>{e.destroyed||!e.autoplay.running||(I||!e.params.autoplay.disableOnInteraction?_(!0,!0):k())}),n("sliderFirstMove",()=>{if(!(e.destroyed||!e.autoplay.running)){if(e.params.autoplay.disableOnInteraction){k();return}y=!0,p=!1,g=!1,m=setTimeout(()=>{g=!0,p=!0,_(!0)},200)}}),n("touchEnd",()=>{if(!(e.destroyed||!e.autoplay.running||!y)){if(clearTimeout(m),clearTimeout(o),e.params.autoplay.disableOnInteraction){p=!1,y=!1;return}p&&e.params.cssMode&&M(),p=!1,y=!1}}),n("slideChange",()=>{e.destroyed||!e.autoplay.running||e.autoplay.paused&&(u=S(),l=S())}),Object.assign(e.autoplay,{start:P,stop:k,pause:_,resume:M})}let Td;function _$(){const e=vt(),t=kn();return{smoothScroll:t.documentElement&&t.documentElement.style&&"scrollBehavior"in t.documentElement.style,touch:!!("ontouchstart"in e||e.DocumentTouch&&t instanceof e.DocumentTouch)}}function HS(){return Td||(Td=_$()),Td}let Pd;function C$({userAgent:e}={}){const t=HS(),n=vt(),r=n.navigator.platform,i=e||n.navigator.userAgent,o={ios:!1,android:!1},a=n.screen.width,l=n.screen.height,s=i.match(/(Android);?[\s\/]+([\d.]+)?/);let u=i.match(/(iPad)(?!\1).*OS\s([\d_]+)/);const d=i.match(/(iPod)(.*OS\s([\d_]+))?/),c=!u&&i.match(/(iPhone\sOS|iOS)\s([\d_]+)/),y=r==="Win32";let p=r==="MacIntel";const m=["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"];return!u&&p&&t.touch&&m.indexOf(`${a}x${l}`)>=0&&(u=i.match(/(Version)\/([\d.]+)/),u||(u=[0,1,"13_0_0"]),p=!1),s&&!y&&(o.os="android",o.android=!0),(u||c||d)&&(o.os="ios",o.ios=!0),o}function WS(e={}){return Pd||(Pd=C$(e)),Pd}let Od;function E$(){const e=vt(),t=WS();let n=!1;function r(){const l=e.navigator.userAgent.toLowerCase();return l.indexOf("safari")>=0&&l.indexOf("chrome")<0&&l.indexOf("android")<0}if(r()){const l=String(e.navigator.userAgent);if(l.includes("Version/")){const[s,u]=l.split("Version/")[1].split(" ")[0].split(".").map(d=>Number(d));n=s<16||s===16&&u<2}}const i=/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent),o=r(),a=o||i&&t.ios;return{isSafari:n||o,needPerspectiveFix:n,need3dFix:a,isWebView:i}}function GS(){return Od||(Od=E$()),Od}function k$({swiper:e,on:t,emit:n}){const r=vt();let i=null,o=null;const a=()=>{!e||e.destroyed||!e.initialized||(n("beforeResize"),n("resize"))},l=()=>{!e||e.destroyed||!e.initialized||(i=new ResizeObserver(d=>{o=r.requestAnimationFrame(()=>{const{width:c,height:y}=e;let p=c,m=y;d.forEach(({contentBoxSize:g,contentRect:w,target:h})=>{h&&h!==e.el||(p=w?w.width:(g[0]||g).inlineSize,m=w?w.height:(g[0]||g).blockSize)}),(p!==c||m!==y)&&a()})}),i.observe(e.el))},s=()=>{o&&r.cancelAnimationFrame(o),i&&i.unobserve&&e.el&&(i.unobserve(e.el),i=null)},u=()=>{!e||e.destroyed||!e.initialized||n("orientationchange")};t("init",()=>{if(e.params.resizeObserver&&typeof r.ResizeObserver<"u"){l();return}r.addEventListener("resize",a),r.addEventListener("orientationchange",u)}),t("destroy",()=>{s(),r.removeEventListener("resize",a),r.removeEventListener("orientationchange",u)})}function T$({swiper:e,extendParams:t,on:n,emit:r}){const i=[],o=vt(),a=(u,d={})=>{const c=o.MutationObserver||o.WebkitMutationObserver,y=new c(p=>{if(e.__preventObserver__)return;if(p.length===1){r("observerUpdate",p[0]);return}const m=function(){r("observerUpdate",p[0])};o.requestAnimationFrame?o.requestAnimationFrame(m):o.setTimeout(m,0)});y.observe(u,{attributes:typeof d.attributes>"u"?!0:d.attributes,childList:e.isElement||(typeof d.childList>"u"?!0:d).childList,characterData:typeof d.characterData>"u"?!0:d.characterData}),i.push(y)},l=()=>{if(e.params.observer){if(e.params.observeParents){const u=VS(e.hostEl);for(let d=0;d<u.length;d+=1)a(u[d])}a(e.hostEl,{childList:e.params.observeSlideChildren}),a(e.wrapperEl,{attributes:!1})}},s=()=>{i.forEach(u=>{u.disconnect()}),i.splice(0,i.length)};t({observer:!1,observeParents:!1,observeSlideChildren:!1}),n("init",l),n("destroy",s)}var P$={on(e,t,n){const r=this;if(!r.eventsListeners||r.destroyed||typeof t!="function")return r;const i=n?"unshift":"push";return e.split(" ").forEach(o=>{r.eventsListeners[o]||(r.eventsListeners[o]=[]),r.eventsListeners[o][i](t)}),r},once(e,t,n){const r=this;if(!r.eventsListeners||r.destroyed||typeof t!="function")return r;function i(...o){r.off(e,i),i.__emitterProxy&&delete i.__emitterProxy,t.apply(r,o)}return i.__emitterProxy=t,r.on(e,i,n)},onAny(e,t){const n=this;if(!n.eventsListeners||n.destroyed||typeof e!="function")return n;const r=t?"unshift":"push";return n.eventsAnyListeners.indexOf(e)<0&&n.eventsAnyListeners[r](e),n},offAny(e){const t=this;if(!t.eventsListeners||t.destroyed||!t.eventsAnyListeners)return t;const n=t.eventsAnyListeners.indexOf(e);return n>=0&&t.eventsAnyListeners.splice(n,1),t},off(e,t){const n=this;return!n.eventsListeners||n.destroyed||!n.eventsListeners||e.split(" ").forEach(r=>{typeof t>"u"?n.eventsListeners[r]=[]:n.eventsListeners[r]&&n.eventsListeners[r].forEach((i,o)=>{(i===t||i.__emitterProxy&&i.__emitterProxy===t)&&n.eventsListeners[r].splice(o,1)})}),n},emit(...e){const t=this;if(!t.eventsListeners||t.destroyed||!t.eventsListeners)return t;let n,r,i;return typeof e[0]=="string"||Array.isArray(e[0])?(n=e[0],r=e.slice(1,e.length),i=t):(n=e[0].events,r=e[0].data,i=e[0].context||t),r.unshift(i),(Array.isArray(n)?n:n.split(" ")).forEach(a=>{t.eventsAnyListeners&&t.eventsAnyListeners.length&&t.eventsAnyListeners.forEach(l=>{l.apply(i,[a,...r])}),t.eventsListeners&&t.eventsListeners[a]&&t.eventsListeners[a].forEach(l=>{l.apply(i,r)})}),t}};function O$(){const e=this;let t,n;const r=e.el;typeof e.params.width<"u"&&e.params.width!==null?t=e.params.width:t=r.clientWidth,typeof e.params.height<"u"&&e.params.height!==null?n=e.params.height:n=r.clientHeight,!(t===0&&e.isHorizontal()||n===0&&e.isVertical())&&(t=t-parseInt(fr(r,"padding-left")||0,10)-parseInt(fr(r,"padding-right")||0,10),n=n-parseInt(fr(r,"padding-top")||0,10)-parseInt(fr(r,"padding-bottom")||0,10),Number.isNaN(t)&&(t=0),Number.isNaN(n)&&(n=0),Object.assign(e,{width:t,height:n,size:e.isHorizontal()?t:n}))}function j$(){const e=this;function t($,D){return parseFloat($.getPropertyValue(e.getDirectionLabel(D))||0)}const n=e.params,{wrapperEl:r,slidesEl:i,rtlTranslate:o,wrongRTL:a}=e,l=e.virtual&&n.virtual.enabled,s=l?e.virtual.slides.length:e.slides.length,u=Sn(i,`.${e.params.slideClass}, swiper-slide`),d=l?e.virtual.slides.length:u.length;let c=[];const y=[],p=[];let m=n.slidesOffsetBefore;typeof m=="function"&&(m=n.slidesOffsetBefore.call(e));let g=n.slidesOffsetAfter;typeof g=="function"&&(g=n.slidesOffsetAfter.call(e));const w=e.snapGrid.length,h=e.slidesGrid.length,v=e.size-m-g;let x=n.spaceBetween,S=-m,E=0,P=0;if(typeof v>"u")return;typeof x=="string"&&x.indexOf("%")>=0?x=parseFloat(x.replace("%",""))/100*v:typeof x=="string"&&(x=parseFloat(x)),e.virtualSize=-x-m-g,u.forEach($=>{o?$.style.marginLeft="":$.style.marginRight="",$.style.marginBottom="",$.style.marginTop=""}),n.centeredSlides&&n.cssMode&&(hi(r,"--swiper-centered-offset-before",""),hi(r,"--swiper-centered-offset-after","")),n.cssMode&&(hi(r,"--swiper-slides-offset-before",`${m}px`),hi(r,"--swiper-slides-offset-after",`${g}px`));const k=n.grid&&n.grid.rows>1&&e.grid;k?e.grid.initSlides(u):e.grid&&e.grid.unsetSlides();let _;const M=n.slidesPerView==="auto"&&n.breakpoints&&Object.keys(n.breakpoints).filter($=>typeof n.breakpoints[$].slidesPerView<"u").length>0;for(let $=0;$<d;$+=1){_=0;const D=u[$];if(!(D&&(k&&e.grid.updateSlide($,D,u),fr(D,"display")==="none"))){if(l&&n.slidesPerView==="auto")n.virtual.slidesPerViewAutoSlideSize&&(_=n.virtual.slidesPerViewAutoSlideSize),_&&D&&(n.roundLengths&&(_=Math.floor(_)),D.style[e.getDirectionLabel("width")]=`${_}px`);else if(n.slidesPerView==="auto"){M&&(D.style[e.getDirectionLabel("width")]="");const A=getComputedStyle(D),j=D.style.transform,F=D.style.webkitTransform;if(j&&(D.style.transform="none"),F&&(D.style.webkitTransform="none"),n.roundLengths)_=e.isHorizontal()?Pp(D,"width",!0):Pp(D,"height",!0);else{const R=t(A,"width"),L=t(A,"padding-left"),O=t(A,"padding-right"),T=t(A,"margin-left"),I=t(A,"margin-right"),z=A.getPropertyValue("box-sizing");if(z&&z==="border-box")_=R+T+I;else{const{clientWidth:B,offsetWidth:N}=D;_=R+L+O+T+I+(N-B)}}j&&(D.style.transform=j),F&&(D.style.webkitTransform=F),n.roundLengths&&(_=Math.floor(_))}else _=(v-(n.slidesPerView-1)*x)/n.slidesPerView,n.roundLengths&&(_=Math.floor(_)),D&&(D.style[e.getDirectionLabel("width")]=`${_}px`);D&&(D.swiperSlideSize=_),p.push(_),n.centeredSlides?(S=S+_/2+E/2+x,E===0&&$!==0&&(S=S-v/2-x),$===0&&(S=S-v/2-x),Math.abs(S)<1/1e3&&(S=0),n.roundLengths&&(S=Math.floor(S)),P%n.slidesPerGroup===0&&c.push(S),y.push(S)):(n.roundLengths&&(S=Math.floor(S)),(P-Math.min(e.params.slidesPerGroupSkip,P))%e.params.slidesPerGroup===0&&c.push(S),y.push(S),S=S+_+x),e.virtualSize+=_+x,E=_,P+=1}}if(e.virtualSize=Math.max(e.virtualSize,v)+g,o&&a&&(n.effect==="slide"||n.effect==="coverflow")&&(r.style.width=`${e.virtualSize+x}px`),n.setWrapperSize&&(r.style[e.getDirectionLabel("width")]=`${e.virtualSize+x}px`),k&&e.grid.updateWrapperSize(_,c),!n.centeredSlides){const $=n.slidesPerView!=="auto"&&n.slidesPerView%1!==0,D=n.snapToSlideEdge&&!n.loop&&(n.slidesPerView==="auto"||$);let A=c.length;if(D){let F;if(n.slidesPerView==="auto"){F=1;let R=0;for(let L=p.length-1;L>=0&&(R+=p[L]+(L<p.length-1?x:0),R<=v);L-=1)F=p.length-L}else F=Math.floor(n.slidesPerView);A=Math.max(d-F,0)}const j=[];for(let F=0;F<c.length;F+=1){let R=c[F];n.roundLengths&&(R=Math.floor(R)),D?F<=A&&j.push(R):c[F]<=e.virtualSize-v&&j.push(R)}c=j,Math.floor(e.virtualSize-v)-Math.floor(c[c.length-1])>1&&(D||c.push(e.virtualSize-v))}if(l&&n.loop){const $=p[0]+x;if(n.slidesPerGroup>1){const D=Math.ceil((e.virtual.slidesBefore+e.virtual.slidesAfter)/n.slidesPerGroup),A=$*n.slidesPerGroup;for(let j=0;j<D;j+=1)c.push(c[c.length-1]+A)}for(let D=0;D<e.virtual.slidesBefore+e.virtual.slidesAfter;D+=1)n.slidesPerGroup===1&&c.push(c[c.length-1]+$),y.push(y[y.length-1]+$),e.virtualSize+=$}if(c.length===0&&(c=[0]),x!==0){const $=e.isHorizontal()&&o?"marginLeft":e.getDirectionLabel("marginRight");u.filter((D,A)=>!n.cssMode||n.loop?!0:A!==u.length-1).forEach(D=>{D.style[$]=`${x}px`})}if(n.centeredSlides&&n.centeredSlidesBounds){let $=0;p.forEach(A=>{$+=A+(x||0)}),$-=x;const D=$>v?$-v:0;c=c.map(A=>A<=0?-m:A>D?D+g:A)}if(n.centerInsufficientSlides){let $=0;if(p.forEach(D=>{$+=D+(x||0)}),$-=x,$<v){const D=(v-$)/2;c.forEach((A,j)=>{c[j]=A-D}),y.forEach((A,j)=>{y[j]=A+D})}}if(Object.assign(e,{slides:u,snapGrid:c,slidesGrid:y,slidesSizesGrid:p}),n.centeredSlides&&n.cssMode&&!n.centeredSlidesBounds){hi(r,"--swiper-centered-offset-before",`${-c[0]}px`),hi(r,"--swiper-centered-offset-after",`${e.size/2-p[p.length-1]/2}px`);const $=-e.snapGrid[0],D=-e.slidesGrid[0];e.snapGrid=e.snapGrid.map(A=>A+$),e.slidesGrid=e.slidesGrid.map(A=>A+D)}if(d!==s&&e.emit("slidesLengthChange"),c.length!==w&&(e.params.watchOverflow&&e.checkOverflow(),e.emit("snapGridLengthChange")),y.length!==h&&e.emit("slidesGridLengthChange"),n.watchSlidesProgress&&e.updateSlidesOffset(),e.emit("slidesUpdated"),!l&&!n.cssMode&&(n.effect==="slide"||n.effect==="fade")){const $=`${n.containerModifierClass}backface-hidden`,D=e.el.classList.contains($);d<=n.maxBackfaceHiddenSlides?D||e.el.classList.add($):D&&e.el.classList.remove($)}}function M$(e){const t=this,n=[],r=t.virtual&&t.params.virtual.enabled;let i=0,o;typeof e=="number"?t.setTransition(e):e===!0&&t.setTransition(t.params.speed);const a=l=>r?t.slides[t.getSlideIndexByData(l)]:t.slides[l];if(t.params.slidesPerView!=="auto"&&t.params.slidesPerView>1)if(t.params.centeredSlides)(t.visibleSlides||[]).forEach(l=>{n.push(l)});else for(o=0;o<Math.ceil(t.params.slidesPerView);o+=1){const l=t.activeIndex+o;if(l>t.slides.length&&!r)break;n.push(a(l))}else n.push(a(t.activeIndex));for(o=0;o<n.length;o+=1)if(typeof n[o]<"u"){const l=n[o].offsetHeight;i=l>i?l:i}(i||i===0)&&(t.wrapperEl.style.height=`${i}px`)}function $$(){const e=this,t=e.slides,n=e.isElement?e.isHorizontal()?e.wrapperEl.offsetLeft:e.wrapperEl.offsetTop:0;for(let r=0;r<t.length;r+=1)t[r].swiperSlideOffset=(e.isHorizontal()?t[r].offsetLeft:t[r].offsetTop)-n-e.cssOverflowAdjustment()}const Cv=(e,t,n)=>{t&&!e.classList.contains(n)?e.classList.add(n):!t&&e.classList.contains(n)&&e.classList.remove(n)};function I$(e=this&&this.translate||0){const t=this,n=t.params,{slides:r,rtlTranslate:i,snapGrid:o}=t;if(r.length===0)return;typeof r[0].swiperSlideOffset>"u"&&t.updateSlidesOffset();let a=-e;i&&(a=e),t.visibleSlidesIndexes=[],t.visibleSlides=[];let l=n.spaceBetween;typeof l=="string"&&l.indexOf("%")>=0?l=parseFloat(l.replace("%",""))/100*t.size:typeof l=="string"&&(l=parseFloat(l));for(let s=0;s<r.length;s+=1){const u=r[s];let d=u.swiperSlideOffset;n.cssMode&&n.centeredSlides&&(d-=r[0].swiperSlideOffset);const c=(a+(n.centeredSlides?t.minTranslate():0)-d)/(u.swiperSlideSize+l),y=(a-o[0]+(n.centeredSlides?t.minTranslate():0)-d)/(u.swiperSlideSize+l),p=-(a-d),m=p+t.slidesSizesGrid[s],g=p>=0&&p<=t.size-t.slidesSizesGrid[s],w=p>=0&&p<t.size-1||m>1&&m<=t.size||p<=0&&m>=t.size;w&&(t.visibleSlides.push(u),t.visibleSlidesIndexes.push(s)),Cv(u,w,n.slideVisibleClass),Cv(u,g,n.slideFullyVisibleClass),u.progress=i?-c:c,u.originalProgress=i?-y:y}}function D$(e){const t=this;if(typeof e>"u"){const d=t.rtlTranslate?-1:1;e=t&&t.translate&&t.translate*d||0}const n=t.params,r=t.maxTranslate()-t.minTranslate();let{progress:i,isBeginning:o,isEnd:a,progressLoop:l}=t;const s=o,u=a;if(r===0)i=0,o=!0,a=!0;else{i=(e-t.minTranslate())/r;const d=Math.abs(e-t.minTranslate())<1,c=Math.abs(e-t.maxTranslate())<1;o=d||i<=0,a=c||i>=1,d&&(i=0),c&&(i=1)}if(n.loop){const d=t.getSlideIndexByData(0),c=t.getSlideIndexByData(t.slides.length-1),y=t.slidesGrid[d],p=t.slidesGrid[c],m=t.slidesGrid[t.slidesGrid.length-1],g=Math.abs(e);g>=y?l=(g-y)/m:l=(g+m-p)/m,l>1&&(l-=1)}Object.assign(t,{progress:i,progressLoop:l,isBeginning:o,isEnd:a}),(n.watchSlidesProgress||n.centeredSlides&&n.autoHeight)&&t.updateSlidesProgress(e),o&&!s&&t.emit("reachBeginning toEdge"),a&&!u&&t.emit("reachEnd toEdge"),(s&&!o||u&&!a)&&t.emit("fromEdge"),t.emit("progress",i)}const jd=(e,t,n)=>{t&&!e.classList.contains(n)?e.classList.add(n):!t&&e.classList.contains(n)&&e.classList.remove(n)};function L$(){const e=this,{slides:t,params:n,slidesEl:r,activeIndex:i}=e,o=e.virtual&&n.virtual.enabled,a=e.grid&&n.grid&&n.grid.rows>1,l=c=>Sn(r,`.${n.slideClass}${c}, swiper-slide${c}`)[0];let s,u,d;if(o)if(n.loop){let c=i-e.virtual.slidesBefore;c<0&&(c=e.virtual.slides.length+c),c>=e.virtual.slides.length&&(c-=e.virtual.slides.length),s=l(`[data-swiper-slide-index="${c}"]`)}else s=l(`[data-swiper-slide-index="${i}"]`);else a?(s=t.find(c=>c.column===i),d=t.find(c=>c.column===i+1),u=t.find(c=>c.column===i-1)):s=t[i];s&&(a||(d=x$(s,`.${n.slideClass}, swiper-slide`)[0],n.loop&&!d&&(d=t[0]),u=y$(s,`.${n.slideClass}, swiper-slide`)[0],n.loop&&!u===0&&(u=t[t.length-1]))),t.forEach(c=>{jd(c,c===s,n.slideActiveClass),jd(c,c===d,n.slideNextClass),jd(c,c===u,n.slidePrevClass)}),e.emitSlidesClasses()}const nl=(e,t)=>{if(!e||e.destroyed||!e.params)return;const n=()=>e.isElement?"swiper-slide":`.${e.params.slideClass}`,r=t.closest(n());if(r){let i=r.querySelector(`.${e.params.lazyPreloaderClass}`);!i&&e.isElement&&(r.shadowRoot?i=r.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`):requestAnimationFrame(()=>{r.shadowRoot&&(i=r.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`),i&&!i.lazyPreloaderManaged&&i.remove())})),i&&!i.lazyPreloaderManaged&&i.remove()}},Md=(e,t)=>{if(!e.slides[t])return;const n=e.slides[t].querySelector('[loading="lazy"]');n&&n.removeAttribute("loading")},Op=e=>{if(!e||e.destroyed||!e.params)return;let t=e.params.lazyPreloadPrevNext;const n=e.slides.length;if(!n||!t||t<0)return;t=Math.min(t,n);const r=e.params.slidesPerView==="auto"?e.slidesPerViewDynamic():Math.ceil(e.params.slidesPerView),i=e.activeIndex;if(e.params.grid&&e.params.grid.rows>1){const a=i,l=[a-t];l.push(...Array.from({length:t}).map((s,u)=>a+r+u)),e.slides.forEach((s,u)=>{l.includes(s.column)&&Md(e,u)});return}const o=i+r-1;if(e.params.rewind||e.params.loop)for(let a=i-t;a<=o+t;a+=1){const l=(a%n+n)%n;(l<i||l>o)&&Md(e,l)}else for(let a=Math.max(i-t,0);a<=Math.min(o+t,n-1);a+=1)a!==i&&(a>o||a<i)&&Md(e,a)};function A$(e){const{slidesGrid:t,params:n}=e,r=e.rtlTranslate?e.translate:-e.translate;let i;for(let o=0;o<t.length;o+=1)typeof t[o+1]<"u"?r>=t[o]&&r<t[o+1]-(t[o+1]-t[o])/2?i=o:r>=t[o]&&r<t[o+1]&&(i=o+1):r>=t[o]&&(i=o);return n.normalizeSlideIndex&&(i<0||typeof i>"u")&&(i=0),i}function R$(e){const t=this,n=t.rtlTranslate?t.translate:-t.translate,{snapGrid:r,params:i,activeIndex:o,realIndex:a,snapIndex:l}=t;let s=e,u;const d=p=>{let m=p-t.virtual.slidesBefore;return m<0&&(m=t.virtual.slides.length+m),m>=t.virtual.slides.length&&(m-=t.virtual.slides.length),m};if(typeof s>"u"&&(s=A$(t)),r.indexOf(n)>=0)u=r.indexOf(n);else{const p=Math.min(i.slidesPerGroupSkip,s);u=p+Math.floor((s-p)/i.slidesPerGroup)}if(u>=r.length&&(u=r.length-1),s===o&&!t.params.loop){u!==l&&(t.snapIndex=u,t.emit("snapIndexChange"));return}if(s===o&&t.params.loop&&t.virtual&&t.params.virtual.enabled){t.realIndex=d(s);return}const c=t.grid&&i.grid&&i.grid.rows>1;let y;if(t.virtual&&i.virtual.enabled)i.loop?y=d(s):y=s;else if(c){const p=t.slides.find(g=>g.column===s);let m=parseInt(p.getAttribute("data-swiper-slide-index"),10);Number.isNaN(m)&&(m=Math.max(t.slides.indexOf(p),0)),y=Math.floor(m/i.grid.rows)}else if(t.slides[s]){const p=t.slides[s].getAttribute("data-swiper-slide-index");p?y=parseInt(p,10):y=s}else y=s;Object.assign(t,{previousSnapIndex:l,snapIndex:u,previousRealIndex:a,realIndex:y,previousIndex:o,activeIndex:s}),t.initialized&&Op(t),t.emit("activeIndexChange"),t.emit("snapIndexChange"),(t.initialized||t.params.runCallbacksOnInit)&&(a!==y&&t.emit("realIndexChange"),t.emit("slideChange"))}function F$(e,t){const n=this,r=n.params;let i=e.closest(`.${r.slideClass}, swiper-slide`);!i&&n.isElement&&t&&t.length>1&&t.includes(e)&&[...t.slice(t.indexOf(e)+1,t.length)].forEach(l=>{!i&&l.matches&&l.matches(`.${r.slideClass}, swiper-slide`)&&(i=l)});let o=!1,a;if(i){for(let l=0;l<n.slides.length;l+=1)if(n.slides[l]===i){o=!0,a=l;break}}if(i&&o)n.clickedSlide=i,n.virtual&&n.params.virtual.enabled?n.clickedIndex=parseInt(i.getAttribute("data-swiper-slide-index"),10):n.clickedIndex=a;else{n.clickedSlide=void 0,n.clickedIndex=void 0;return}r.slideToClickedSlide&&n.clickedIndex!==void 0&&n.clickedIndex!==n.activeIndex&&n.slideToClickedSlide()}var z$={updateSize:O$,updateSlides:j$,updateAutoHeight:M$,updateSlidesOffset:$$,updateSlidesProgress:I$,updateProgress:D$,updateSlidesClasses:L$,updateActiveIndex:R$,updateClickedSlide:F$};function N$(e=this.isHorizontal()?"x":"y"){const t=this,{params:n,rtlTranslate:r,translate:i,wrapperEl:o}=t;if(n.virtualTranslate)return r?-i:i;if(n.cssMode)return i;let a=h$(o,e);return a+=t.cssOverflowAdjustment(),r&&(a=-a),a||0}function B$(e,t){const n=this,{rtlTranslate:r,params:i,wrapperEl:o,progress:a}=n;let l=0,s=0;const u=0;n.isHorizontal()?l=r?-e:e:s=e,i.roundLengths&&(l=Math.floor(l),s=Math.floor(s)),n.previousTranslate=n.translate,n.translate=n.isHorizontal()?l:s,i.cssMode?o[n.isHorizontal()?"scrollLeft":"scrollTop"]=n.isHorizontal()?-l:-s:i.virtualTranslate||(n.isHorizontal()?l-=n.cssOverflowAdjustment():s-=n.cssOverflowAdjustment(),o.style.transform=`translate3d(${l}px, ${s}px, ${u}px)`);let d;const c=n.maxTranslate()-n.minTranslate();c===0?d=0:d=(e-n.minTranslate())/c,d!==a&&n.updateProgress(e),n.emit("setTranslate",n.translate,t)}function V$(){return-this.snapGrid[0]}function U$(){return-this.snapGrid[this.snapGrid.length-1]}function H$(e=0,t=this.params.speed,n=!0,r=!0,i){const o=this,{params:a,wrapperEl:l}=o;if(o.animating&&a.preventInteractionOnTransition)return!1;const s=o.minTranslate(),u=o.maxTranslate();let d;if(r&&e>s?d=s:r&&e<u?d=u:d=e,o.updateProgress(d),a.cssMode){const c=o.isHorizontal();if(t===0)l[c?"scrollLeft":"scrollTop"]=-d;else{if(!o.support.smoothScroll)return BS({swiper:o,targetPosition:-d,side:c?"left":"top"}),!0;l.scrollTo({[c?"left":"top"]:-d,behavior:"smooth"})}return!0}return t===0?(o.setTransition(0),o.setTranslate(d),n&&(o.emit("beforeTransitionStart",t,i),o.emit("transitionEnd"))):(o.setTransition(t),o.setTranslate(d),n&&(o.emit("beforeTransitionStart",t,i),o.emit("transitionStart")),o.animating||(o.animating=!0,o.onTranslateToWrapperTransitionEnd||(o.onTranslateToWrapperTransitionEnd=function(y){!o||o.destroyed||y.target===this&&(o.wrapperEl.removeEventListener("transitionend",o.onTranslateToWrapperTransitionEnd),o.onTranslateToWrapperTransitionEnd=null,delete o.onTranslateToWrapperTransitionEnd,o.animating=!1,n&&o.emit("transitionEnd"))}),o.wrapperEl.addEventListener("transitionend",o.onTranslateToWrapperTransitionEnd))),!0}var W$={getTranslate:N$,setTranslate:B$,minTranslate:V$,maxTranslate:U$,translateTo:H$};function G$(e,t){const n=this;n.params.cssMode||(n.wrapperEl.style.transitionDuration=`${e}ms`,n.wrapperEl.style.transitionDelay=e===0?"0ms":""),n.emit("setTransition",e,t)}function YS({swiper:e,runCallbacks:t,direction:n,step:r}){const{activeIndex:i,previousIndex:o}=e;let a=n;a||(i>o?a="next":i<o?a="prev":a="reset"),e.emit(`transition${r}`),t&&a==="reset"?e.emit(`slideResetTransition${r}`):t&&i!==o&&(e.emit(`slideChangeTransition${r}`),a==="next"?e.emit(`slideNextTransition${r}`):e.emit(`slidePrevTransition${r}`))}function Y$(e=!0,t){const n=this,{params:r}=n;r.cssMode||(r.autoHeight&&n.updateAutoHeight(),YS({swiper:n,runCallbacks:e,direction:t,step:"Start"}))}function q$(e=!0,t){const n=this,{params:r}=n;n.animating=!1,!r.cssMode&&(n.setTransition(0),YS({swiper:n,runCallbacks:e,direction:t,step:"End"}))}var X$={setTransition:G$,transitionStart:Y$,transitionEnd:q$};function K$(e=0,t,n=!0,r,i){typeof e=="string"&&(e=parseInt(e,10));const o=this;let a=e;a<0&&(a=0);const{params:l,snapGrid:s,slidesGrid:u,previousIndex:d,activeIndex:c,rtlTranslate:y,wrapperEl:p,enabled:m}=o;if(!m&&!r&&!i||o.destroyed||o.animating&&l.preventInteractionOnTransition)return!1;typeof t>"u"&&(t=o.params.speed);const g=Math.min(o.params.slidesPerGroupSkip,a);let w=g+Math.floor((a-g)/o.params.slidesPerGroup);w>=s.length&&(w=s.length-1);const h=-s[w];if(l.normalizeSlideIndex)for(let k=0;k<u.length;k+=1){const _=-Math.floor(h*100),M=Math.floor(u[k]*100),$=Math.floor(u[k+1]*100);typeof u[k+1]<"u"?_>=M&&_<$-($-M)/2?a=k:_>=M&&_<$&&(a=k+1):_>=M&&(a=k)}if(o.initialized&&a!==c&&(!o.allowSlideNext&&(y?h>o.translate&&h>o.minTranslate():h<o.translate&&h<o.minTranslate())||!o.allowSlidePrev&&h>o.translate&&h>o.maxTranslate()&&(c||0)!==a))return!1;a!==(d||0)&&n&&o.emit("beforeSlideChangeStart"),o.updateProgress(h);let v;a>c?v="next":a<c?v="prev":v="reset";const x=o.virtual&&o.params.virtual.enabled;if(!(x&&i)&&(y&&-h===o.translate||!y&&h===o.translate))return o.updateActiveIndex(a),l.autoHeight&&o.updateAutoHeight(),o.updateSlidesClasses(),l.effect!=="slide"&&o.setTranslate(h),v!=="reset"&&(o.transitionStart(n,v),o.transitionEnd(n,v)),!1;if(l.cssMode){const k=o.isHorizontal(),_=y?h:-h;if(t===0)x&&(o.wrapperEl.style.scrollSnapType="none",o._immediateVirtual=!0),x&&!o._cssModeVirtualInitialSet&&o.params.initialSlide>0?(o._cssModeVirtualInitialSet=!0,requestAnimationFrame(()=>{p[k?"scrollLeft":"scrollTop"]=_})):p[k?"scrollLeft":"scrollTop"]=_,x&&requestAnimationFrame(()=>{o.wrapperEl.style.scrollSnapType="",o._immediateVirtual=!1});else{if(!o.support.smoothScroll)return BS({swiper:o,targetPosition:_,side:k?"left":"top"}),!0;p.scrollTo({[k?"left":"top"]:_,behavior:"smooth"})}return!0}const P=GS().isSafari;return x&&!i&&P&&o.isElement&&o.virtual.update(!1,!1,a),o.setTransition(t),o.setTranslate(h),o.updateActiveIndex(a),o.updateSlidesClasses(),o.emit("beforeTransitionStart",t,r),o.transitionStart(n,v),t===0?o.transitionEnd(n,v):o.animating||(o.animating=!0,o.onSlideToWrapperTransitionEnd||(o.onSlideToWrapperTransitionEnd=function(_){!o||o.destroyed||_.target===this&&(o.wrapperEl.removeEventListener("transitionend",o.onSlideToWrapperTransitionEnd),o.onSlideToWrapperTransitionEnd=null,delete o.onSlideToWrapperTransitionEnd,o.transitionEnd(n,v))}),o.wrapperEl.addEventListener("transitionend",o.onSlideToWrapperTransitionEnd)),!0}function Q$(e=0,t,n=!0,r){typeof e=="string"&&(e=parseInt(e,10));const i=this;if(i.destroyed)return;typeof t>"u"&&(t=i.params.speed);const o=i.grid&&i.params.grid&&i.params.grid.rows>1;let a=e;if(i.params.loop)if(i.virtual&&i.params.virtual.enabled)a=a+i.virtual.slidesBefore;else{let l;if(o){const g=a*i.params.grid.rows;l=i.slides.find(w=>w.getAttribute("data-swiper-slide-index")*1===g).column}else l=i.getSlideIndexByData(a);const s=o?Math.ceil(i.slides.length/i.params.grid.rows):i.slides.length,{centeredSlides:u,slidesOffsetBefore:d,slidesOffsetAfter:c}=i.params,y=u||!!d||!!c;let p=i.params.slidesPerView;p==="auto"?p=i.slidesPerViewDynamic():(p=Math.ceil(parseFloat(i.params.slidesPerView,10)),y&&p%2===0&&(p=p+1));let m=s-l<p;if(y&&(m=m||l<Math.ceil(p/2)),r&&y&&i.params.slidesPerView!=="auto"&&!o&&(m=!1),m){const g=y?l<i.activeIndex?"prev":"next":l-i.activeIndex-1<i.params.slidesPerView?"next":"prev";i.loopFix({direction:g,slideTo:!0,activeSlideIndex:g==="next"?l+1:l-s+1,slideRealIndex:g==="next"?i.realIndex:void 0})}if(o){const g=a*i.params.grid.rows;a=i.slides.find(w=>w.getAttribute("data-swiper-slide-index")*1===g).column}else a=i.getSlideIndexByData(a)}return requestAnimationFrame(()=>{i.slideTo(a,t,n,r)}),i}function Z$(e,t=!0,n){const r=this,{enabled:i,params:o,animating:a}=r;if(!i||r.destroyed)return r;typeof e>"u"&&(e=r.params.speed);let l=o.slidesPerGroup;o.slidesPerView==="auto"&&o.slidesPerGroup===1&&o.slidesPerGroupAuto&&(l=Math.max(r.slidesPerViewDynamic("current",!0),1));const s=r.activeIndex<o.slidesPerGroupSkip?1:l,u=r.virtual&&o.virtual.enabled;if(o.loop){if(a&&!u&&o.loopPreventsSliding)return!1;if(r.loopFix({direction:"next"}),r._clientLeft=r.wrapperEl.clientLeft,r.activeIndex===r.slides.length-1&&o.cssMode)return requestAnimationFrame(()=>{r.slideTo(r.activeIndex+s,e,t,n)}),!0}return o.rewind&&r.isEnd?r.slideTo(0,e,t,n):r.slideTo(r.activeIndex+s,e,t,n)}function J$(e,t=!0,n){const r=this,{params:i,snapGrid:o,slidesGrid:a,rtlTranslate:l,enabled:s,animating:u}=r;if(!s||r.destroyed)return r;typeof e>"u"&&(e=r.params.speed);const d=r.virtual&&i.virtual.enabled;if(i.loop){if(u&&!d&&i.loopPreventsSliding)return!1;r.loopFix({direction:"prev"}),r._clientLeft=r.wrapperEl.clientLeft}const c=l?r.translate:-r.translate;function y(v){return v<0?-Math.floor(Math.abs(v)):Math.floor(v)}const p=y(c),m=o.map(v=>y(v)),g=i.freeMode&&i.freeMode.enabled;let w=o[m.indexOf(p)-1];if(typeof w>"u"&&(i.cssMode||g)){let v;o.forEach((x,S)=>{p>=x&&(v=S)}),typeof v<"u"&&(w=g?o[v]:o[v>0?v-1:v])}let h=0;if(typeof w<"u"&&(h=a.indexOf(w),h<0&&(h=r.activeIndex-1),i.slidesPerView==="auto"&&i.slidesPerGroup===1&&i.slidesPerGroupAuto&&(h=h-r.slidesPerViewDynamic("previous",!0)+1,h=Math.max(h,0))),i.rewind&&r.isBeginning){const v=r.params.virtual&&r.params.virtual.enabled&&r.virtual?r.virtual.slides.length-1:r.slides.length-1;return r.slideTo(v,e,t,n)}else if(i.loop&&r.activeIndex===0&&i.cssMode)return requestAnimationFrame(()=>{r.slideTo(h,e,t,n)}),!0;return r.slideTo(h,e,t,n)}function eI(e,t=!0,n){const r=this;if(!r.destroyed)return typeof e>"u"&&(e=r.params.speed),r.slideTo(r.activeIndex,e,t,n)}function tI(e,t=!0,n,r=.5){const i=this;if(i.destroyed)return;typeof e>"u"&&(e=i.params.speed);let o=i.activeIndex;const a=Math.min(i.params.slidesPerGroupSkip,o),l=a+Math.floor((o-a)/i.params.slidesPerGroup),s=i.rtlTranslate?i.translate:-i.translate;if(s>=i.snapGrid[l]){const u=i.snapGrid[l],d=i.snapGrid[l+1];s-u>(d-u)*r&&(o+=i.params.slidesPerGroup)}else{const u=i.snapGrid[l-1],d=i.snapGrid[l];s-u<=(d-u)*r&&(o-=i.params.slidesPerGroup)}return o=Math.max(o,0),o=Math.min(o,i.slidesGrid.length-1),i.slideTo(o,e,t,n)}function nI(){const e=this;if(e.destroyed)return;const{params:t,slidesEl:n}=e,r=t.slidesPerView==="auto"?e.slidesPerViewDynamic():t.slidesPerView;let i=e.getSlideIndexWhenGrid(e.clickedIndex),o;const a=e.isElement?"swiper-slide":`.${t.slideClass}`,l=e.grid&&e.params.grid&&e.params.grid.rows>1;if(t.loop){if(e.animating)return;o=parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"),10),t.centeredSlides?e.slideToLoop(o):i>(l?(e.slides.length-r)/2-(e.params.grid.rows-1):e.slides.length-r)?(e.loopFix(),i=e.getSlideIndex(Sn(n,`${a}[data-swiper-slide-index="${o}"]`)[0]),NS(()=>{e.slideTo(i)})):e.slideTo(i)}else e.slideTo(i)}var rI={slideTo:K$,slideToLoop:Q$,slideNext:Z$,slidePrev:J$,slideReset:eI,slideToClosest:tI,slideToClickedSlide:nI};function iI(e,t){const n=this,{params:r,slidesEl:i}=n;if(!r.loop||n.virtual&&n.params.virtual.enabled)return;const o=()=>{Sn(i,`.${r.slideClass}, swiper-slide`).forEach((m,g)=>{m.setAttribute("data-swiper-slide-index",g)})},a=()=>{const p=Sn(i,`.${r.slideBlankClass}`);p.forEach(m=>{m.remove()}),p.length>0&&(n.recalcSlides(),n.updateSlides())},l=n.grid&&r.grid&&r.grid.rows>1;r.loopAddBlankSlides&&(r.slidesPerGroup>1||l)&&a();const s=r.slidesPerGroup*(l?r.grid.rows:1),u=n.slides.length%s!==0,d=l&&n.slides.length%r.grid.rows!==0,c=p=>{for(let m=0;m<p;m+=1){const g=n.isElement?Kl("swiper-slide",[r.slideBlankClass]):Kl("div",[r.slideClass,r.slideBlankClass]);n.slidesEl.append(g)}};if(u){if(r.loopAddBlankSlides){const p=s-n.slides.length%s;c(p),n.recalcSlides(),n.updateSlides()}else Xl("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");o()}else if(d){if(r.loopAddBlankSlides){const p=r.grid.rows-n.slides.length%r.grid.rows;c(p),n.recalcSlides(),n.updateSlides()}else Xl("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");o()}else o();const y=r.centeredSlides||!!r.slidesOffsetBefore||!!r.slidesOffsetAfter;n.loopFix({slideRealIndex:e,direction:y?void 0:"next",initial:t})}function oI({slideRealIndex:e,slideTo:t=!0,direction:n,setTranslate:r,activeSlideIndex:i,initial:o,byController:a,byMousewheel:l}={}){const s=this;if(!s.params.loop)return;s.emit("beforeLoopFix");const{slides:u,allowSlidePrev:d,allowSlideNext:c,slidesEl:y,params:p}=s,{centeredSlides:m,slidesOffsetBefore:g,slidesOffsetAfter:w,initialSlide:h}=p,v=m||!!g||!!w;if(s.allowSlidePrev=!0,s.allowSlideNext=!0,s.virtual&&p.virtual.enabled){t&&(!v&&s.snapIndex===0?s.slideTo(s.virtual.slides.length,0,!1,!0):v&&s.snapIndex<p.slidesPerView?s.slideTo(s.virtual.slides.length+s.snapIndex,0,!1,!0):s.snapIndex===s.snapGrid.length-1&&s.slideTo(s.virtual.slidesBefore,0,!1,!0)),s.allowSlidePrev=d,s.allowSlideNext=c,s.emit("loopFix");return}let x=p.slidesPerView;x==="auto"?x=s.slidesPerViewDynamic():(x=Math.ceil(parseFloat(p.slidesPerView,10)),v&&x%2===0&&(x=x+1));const S=p.slidesPerGroupAuto?x:p.slidesPerGroup;let E=v?Math.max(S,Math.ceil(x/2)):S;E%S!==0&&(E+=S-E%S),E+=p.loopAdditionalSlides,s.loopedSlides=E;const P=s.grid&&p.grid&&p.grid.rows>1;u.length<x+E||s.params.effect==="cards"&&u.length<x+E*2?Xl("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled or not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"):P&&p.grid.fill==="row"&&Xl("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");const k=[],_=[],M=P?Math.ceil(u.length/p.grid.rows):u.length,$=o&&M-h<x&&!v;let D=$?h:s.activeIndex;typeof i>"u"?i=s.getSlideIndex(u.find(T=>T.classList.contains(p.slideActiveClass))):D=i;const A=n==="next"||!n,j=n==="prev"||!n;let F=0,R=0;const O=(P?u[i].column:i)+(v&&typeof r>"u"?-x/2+.5:0);if(O<E){F=Math.max(E-O,S);for(let T=0;T<E-O;T+=1){const I=T-Math.floor(T/M)*M;if(P){const z=M-I-1;for(let B=u.length-1;B>=0;B-=1)u[B].column===z&&k.push(B)}else k.push(M-I-1)}}else if(O+x>M-E){R=Math.max(O-(M-E*2),S),$&&(R=Math.max(R,x-M+h+1));for(let T=0;T<R;T+=1){const I=T-Math.floor(T/M)*M;P?u.forEach((z,B)=>{z.column===I&&_.push(B)}):_.push(I)}}if(s.__preventObserver__=!0,requestAnimationFrame(()=>{s.__preventObserver__=!1}),s.params.effect==="cards"&&u.length<x+E*2&&(_.includes(i)&&_.splice(_.indexOf(i),1),k.includes(i)&&k.splice(k.indexOf(i),1)),j&&k.forEach(T=>{u[T].swiperLoopMoveDOM=!0,y.prepend(u[T]),u[T].swiperLoopMoveDOM=!1}),A&&_.forEach(T=>{u[T].swiperLoopMoveDOM=!0,y.append(u[T]),u[T].swiperLoopMoveDOM=!1}),s.recalcSlides(),p.slidesPerView==="auto"?s.updateSlides():P&&(k.length>0&&j||_.length>0&&A)&&s.slides.forEach((T,I)=>{s.grid.updateSlide(I,T,s.slides)}),p.watchSlidesProgress&&s.updateSlidesOffset(),t){if(k.length>0&&j){if(typeof e>"u"){const T=s.slidesGrid[D],z=s.slidesGrid[D+F]-T;l?s.setTranslate(s.translate-z):(s.slideTo(D+Math.ceil(F),0,!1,!0),r&&(s.touchEventsData.startTranslate=s.touchEventsData.startTranslate-z,s.touchEventsData.currentTranslate=s.touchEventsData.currentTranslate-z))}else if(r){const T=P?k.length/p.grid.rows:k.length;s.slideTo(s.activeIndex+T,0,!1,!0),s.touchEventsData.currentTranslate=s.translate}}else if(_.length>0&&A)if(typeof e>"u"){const T=s.slidesGrid[D],z=s.slidesGrid[D-R]-T;l?s.setTranslate(s.translate-z):(s.slideTo(D-R,0,!1,!0),r&&(s.touchEventsData.startTranslate=s.touchEventsData.startTranslate-z,s.touchEventsData.currentTranslate=s.touchEventsData.currentTranslate-z))}else{const T=P?_.length/p.grid.rows:_.length;s.slideTo(s.activeIndex-T,0,!1,!0)}}if(s.allowSlidePrev=d,s.allowSlideNext=c,s.controller&&s.controller.control&&!a){const T={slideRealIndex:e,direction:n,setTranslate:r,activeSlideIndex:i,byController:!0};Array.isArray(s.controller.control)?s.controller.control.forEach(I=>{!I.destroyed&&I.params.loop&&I.loopFix({...T,slideTo:I.params.slidesPerView===p.slidesPerView?t:!1})}):s.controller.control instanceof s.constructor&&s.controller.control.params.loop&&s.controller.control.loopFix({...T,slideTo:s.controller.control.params.slidesPerView===p.slidesPerView?t:!1})}s.emit("loopFix")}function aI(){const e=this,{params:t,slidesEl:n}=e;if(!t.loop||!n||e.virtual&&e.params.virtual.enabled)return;e.recalcSlides();const r=[];e.slides.forEach(i=>{const o=typeof i.swiperSlideIndex>"u"?i.getAttribute("data-swiper-slide-index")*1:i.swiperSlideIndex;r[o]=i}),e.slides.forEach(i=>{i.removeAttribute("data-swiper-slide-index")}),r.forEach(i=>{n.append(i)}),e.recalcSlides(),e.slideTo(e.realIndex,0)}var sI={loopCreate:iI,loopFix:oI,loopDestroy:aI};function lI(e){const t=this;if(!t.params.simulateTouch||t.params.watchOverflow&&t.isLocked||t.params.cssMode)return;const n=t.params.touchEventsTarget==="container"?t.el:t.wrapperEl;t.isElement&&(t.__preventObserver__=!0),n.style.cursor="move",n.style.cursor=e?"grabbing":"grab",t.isElement&&requestAnimationFrame(()=>{t.__preventObserver__=!1})}function uI(){const e=this;e.params.watchOverflow&&e.isLocked||e.params.cssMode||(e.isElement&&(e.__preventObserver__=!0),e[e.params.touchEventsTarget==="container"?"el":"wrapperEl"].style.cursor="",e.isElement&&requestAnimationFrame(()=>{e.__preventObserver__=!1}))}var cI={setGrabCursor:lI,unsetGrabCursor:uI};function dI(e,t=this){function n(r){if(!r||r===kn()||r===vt())return null;r.assignedSlot&&(r=r.assignedSlot);const i=r.closest(e);return!i&&!r.getRootNode?null:i||n(r.getRootNode().host)}return n(t)}function Ev(e,t,n){const r=vt(),{params:i}=e,o=i.edgeSwipeDetection,a=i.edgeSwipeThreshold;return o&&(n<=a||n>=r.innerWidth-a)?o==="prevent"?(t.preventDefault(),!0):!1:!0}function fI(e){const t=this,n=kn();let r=e;r.originalEvent&&(r=r.originalEvent);const i=t.touchEventsData;if(r.type==="pointerdown"){if(i.pointerId!==null&&i.pointerId!==r.pointerId)return;i.pointerId=r.pointerId}else r.type==="touchstart"&&r.targetTouches.length===1&&(i.touchId=r.targetTouches[0].identifier);if(r.type==="touchstart"){Ev(t,r,r.targetTouches[0].pageX);return}const{params:o,touches:a,enabled:l}=t;if(!l||!o.simulateTouch&&r.pointerType==="mouse"||t.animating&&o.preventInteractionOnTransition)return;!t.animating&&o.cssMode&&o.loop&&t.loopFix();let s=r.target;if(o.touchEventsTarget==="wrapper"&&!v$(s,t.wrapperEl)||"which"in r&&r.which===3||"button"in r&&r.button>0||i.isTouched&&i.isMoved)return;const u=!!o.noSwipingClass&&o.noSwipingClass!=="",d=r.composedPath?r.composedPath():r.path;u&&r.target&&r.target.shadowRoot&&d&&(s=d[0]);const c=o.noSwipingSelector?o.noSwipingSelector:`.${o.noSwipingClass}`,y=!!(r.target&&r.target.shadowRoot);if(o.noSwiping&&(y?dI(c,s):s.closest(c))){t.allowClick=!0;return}if(o.swipeHandler&&!s.closest(o.swipeHandler))return;a.currentX=r.pageX,a.currentY=r.pageY;const p=a.currentX,m=a.currentY;if(!Ev(t,r,p))return;Object.assign(i,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),a.startX=p,a.startY=m,i.touchStartTime=ql(),t.allowClick=!0,t.updateSize(),t.swipeDirection=void 0,o.threshold>0&&(i.allowThresholdMove=!1);let g=!0;s.matches(i.focusableElements)&&(g=!1,s.nodeName==="SELECT"&&(i.isTouched=!1)),n.activeElement&&n.activeElement.matches(i.focusableElements)&&n.activeElement!==s&&(r.pointerType==="mouse"||r.pointerType!=="mouse"&&!s.matches(i.focusableElements))&&n.activeElement.blur();const w=g&&t.allowTouchMove&&o.touchStartPreventDefault;(o.touchStartForcePreventDefault||w)&&!s.isContentEditable&&r.preventDefault(),o.freeMode&&o.freeMode.enabled&&t.freeMode&&t.animating&&!o.cssMode&&t.freeMode.onTouchStart(),t.emit("touchStart",r)}function pI(e){const t=kn(),n=this,r=n.touchEventsData,{params:i,touches:o,rtlTranslate:a,enabled:l}=n;if(!l||!i.simulateTouch&&e.pointerType==="mouse")return;let s=e;if(s.originalEvent&&(s=s.originalEvent),s.type==="pointermove"&&(r.touchId!==null||s.pointerId!==r.pointerId))return;let u;if(s.type==="touchmove"){if(u=[...s.changedTouches].find(P=>P.identifier===r.touchId),!u||u.identifier!==r.touchId)return}else u=s;if(!r.isTouched){r.startMoving&&r.isScrolling&&n.emit("touchMoveOpposite",s);return}const d=u.pageX,c=u.pageY;if(s.preventedByNestedSwiper){o.startX=d,o.startY=c;return}if(!n.allowTouchMove){s.target.matches(r.focusableElements)||(n.allowClick=!1),r.isTouched&&(Object.assign(o,{startX:d,startY:c,currentX:d,currentY:c}),r.touchStartTime=ql());return}if(i.touchReleaseOnEdges&&!i.loop)if(n.isVertical()){if(c<o.startY&&n.translate<=n.maxTranslate()||c>o.startY&&n.translate>=n.minTranslate()){r.isTouched=!1,r.isMoved=!1;return}}else{if(a&&(d>o.startX&&-n.translate<=n.maxTranslate()||d<o.startX&&-n.translate>=n.minTranslate()))return;if(!a&&(d<o.startX&&n.translate<=n.maxTranslate()||d>o.startX&&n.translate>=n.minTranslate()))return}if(t.activeElement&&t.activeElement.matches(r.focusableElements)&&t.activeElement!==s.target&&s.pointerType!=="mouse"&&t.activeElement.blur(),t.activeElement&&s.target===t.activeElement&&s.target.matches(r.focusableElements)){r.isMoved=!0,n.allowClick=!1;return}r.allowTouchCallbacks&&n.emit("touchMove",s),o.previousX=o.currentX,o.previousY=o.currentY,o.currentX=d,o.currentY=c;const y=o.currentX-o.startX,p=o.currentY-o.startY;if(n.params.threshold&&Math.sqrt(y**2+p**2)<n.params.threshold)return;if(typeof r.isScrolling>"u"){let P;n.isHorizontal()&&o.currentY===o.startY||n.isVertical()&&o.currentX===o.startX?r.isScrolling=!1:y*y+p*p>=25&&(P=Math.atan2(Math.abs(p),Math.abs(y))*180/Math.PI,r.isScrolling=n.isHorizontal()?P>i.touchAngle:90-P>i.touchAngle)}if(r.isScrolling&&n.emit("touchMoveOpposite",s),typeof r.startMoving>"u"&&(o.currentX!==o.startX||o.currentY!==o.startY)&&(r.startMoving=!0),r.isScrolling||s.type==="touchmove"&&r.preventTouchMoveFromPointerMove){r.isTouched=!1;return}if(!r.startMoving)return;n.allowClick=!1,!i.cssMode&&s.cancelable&&s.preventDefault(),i.touchMoveStopPropagation&&!i.nested&&s.stopPropagation();let m=n.isHorizontal()?y:p,g=n.isHorizontal()?o.currentX-o.previousX:o.currentY-o.previousY;i.oneWayMovement&&(m=Math.abs(m)*(a?1:-1),g=Math.abs(g)*(a?1:-1)),o.diff=m,m*=i.touchRatio,a&&(m=-m,g=-g);const w=n.touchesDirection;n.swipeDirection=m>0?"prev":"next",n.touchesDirection=g>0?"prev":"next";const h=n.params.loop&&!i.cssMode,v=n.touchesDirection==="next"&&n.allowSlideNext||n.touchesDirection==="prev"&&n.allowSlidePrev;if(!r.isMoved){if(h&&v&&n.loopFix({direction:n.swipeDirection}),r.startTranslate=n.getTranslate(),n.setTransition(0),n.animating){const P=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0,detail:{bySwiperTouchMove:!0}});n.wrapperEl.dispatchEvent(P)}r.allowMomentumBounce=!1,i.grabCursor&&(n.allowSlideNext===!0||n.allowSlidePrev===!0)&&n.setGrabCursor(!0),n.emit("sliderFirstMove",s)}let x;if(new Date().getTime(),i._loopSwapReset!==!1&&r.isMoved&&r.allowThresholdMove&&w!==n.touchesDirection&&h&&v&&Math.abs(m)>=1){Object.assign(o,{startX:d,startY:c,currentX:d,currentY:c,startTranslate:r.currentTranslate}),r.loopSwapReset=!0,r.startTranslate=r.currentTranslate;return}n.emit("sliderMove",s),r.isMoved=!0,r.currentTranslate=m+r.startTranslate;let S=!0,E=i.resistanceRatio;if(i.touchReleaseOnEdges&&(E=0),m>0?(h&&v&&!x&&r.allowThresholdMove&&r.currentTranslate>(i.centeredSlides?n.minTranslate()-n.slidesSizesGrid[n.activeIndex+1]-(i.slidesPerView!=="auto"&&n.slides.length-i.slidesPerView>=2?n.slidesSizesGrid[n.activeIndex+1]+n.params.spaceBetween:0)-n.params.spaceBetween:n.minTranslate())&&n.loopFix({direction:"prev",setTranslate:!0,activeSlideIndex:0}),r.currentTranslate>n.minTranslate()&&(S=!1,i.resistance&&(r.currentTranslate=n.minTranslate()-1+(-n.minTranslate()+r.startTranslate+m)**E))):m<0&&(h&&v&&!x&&r.allowThresholdMove&&r.currentTranslate<(i.centeredSlides?n.maxTranslate()+n.slidesSizesGrid[n.slidesSizesGrid.length-1]+n.params.spaceBetween+(i.slidesPerView!=="auto"&&n.slides.length-i.slidesPerView>=2?n.slidesSizesGrid[n.slidesSizesGrid.length-1]+n.params.spaceBetween:0):n.maxTranslate())&&n.loopFix({direction:"next",setTranslate:!0,activeSlideIndex:n.slides.length-(i.slidesPerView==="auto"?n.slidesPerViewDynamic():Math.ceil(parseFloat(i.slidesPerView,10)))}),r.currentTranslate<n.maxTranslate()&&(S=!1,i.resistance&&(r.currentTranslate=n.maxTranslate()+1-(n.maxTranslate()-r.startTranslate-m)**E))),S&&(s.preventedByNestedSwiper=!0),!n.allowSlideNext&&n.swipeDirection==="next"&&r.currentTranslate<r.startTranslate&&(r.currentTranslate=r.startTranslate),!n.allowSlidePrev&&n.swipeDirection==="prev"&&r.currentTranslate>r.startTranslate&&(r.currentTranslate=r.startTranslate),!n.allowSlidePrev&&!n.allowSlideNext&&(r.currentTranslate=r.startTranslate),i.threshold>0)if(Math.abs(m)>i.threshold||r.allowThresholdMove){if(!r.allowThresholdMove){r.allowThresholdMove=!0,o.startX=o.currentX,o.startY=o.currentY,r.currentTranslate=r.startTranslate,o.diff=n.isHorizontal()?o.currentX-o.startX:o.currentY-o.startY;return}}else{r.currentTranslate=r.startTranslate;return}!i.followFinger||i.cssMode||((i.freeMode&&i.freeMode.enabled&&n.freeMode||i.watchSlidesProgress)&&(n.updateActiveIndex(),n.updateSlidesClasses()),i.freeMode&&i.freeMode.enabled&&n.freeMode&&n.freeMode.onTouchMove(),n.updateProgress(r.currentTranslate),n.setTranslate(r.currentTranslate))}function hI(e){const t=this,n=t.touchEventsData;let r=e;r.originalEvent&&(r=r.originalEvent);let i;if(r.type==="touchend"||r.type==="touchcancel"){if(i=[...r.changedTouches].find(E=>E.identifier===n.touchId),!i||i.identifier!==n.touchId)return}else{if(n.touchId!==null||r.pointerId!==n.pointerId)return;i=r}if(["pointercancel","pointerout","pointerleave","contextmenu"].includes(r.type)&&!(["pointercancel","contextmenu"].includes(r.type)&&(t.browser.isSafari||t.browser.isWebView)))return;n.pointerId=null,n.touchId=null;const{params:a,touches:l,rtlTranslate:s,slidesGrid:u,enabled:d}=t;if(!d||!a.simulateTouch&&r.pointerType==="mouse")return;if(n.allowTouchCallbacks&&t.emit("touchEnd",r),n.allowTouchCallbacks=!1,!n.isTouched){n.isMoved&&a.grabCursor&&t.setGrabCursor(!1),n.isMoved=!1,n.startMoving=!1;return}a.grabCursor&&n.isMoved&&n.isTouched&&(t.allowSlideNext===!0||t.allowSlidePrev===!0)&&t.setGrabCursor(!1);const c=ql(),y=c-n.touchStartTime;if(t.allowClick){const E=r.path||r.composedPath&&r.composedPath();t.updateClickedSlide(E&&E[0]||r.target,E),t.emit("tap click",r),y<300&&c-n.lastClickTime<300&&t.emit("doubleTap doubleClick",r)}if(n.lastClickTime=ql(),NS(()=>{t.destroyed||(t.allowClick=!0)}),!n.isTouched||!n.isMoved||!t.swipeDirection||l.diff===0&&!n.loopSwapReset||n.currentTranslate===n.startTranslate&&!n.loopSwapReset){n.isTouched=!1,n.isMoved=!1,n.startMoving=!1;return}n.isTouched=!1,n.isMoved=!1,n.startMoving=!1;let p;if(a.followFinger?p=s?t.translate:-t.translate:p=-n.currentTranslate,a.cssMode)return;if(a.freeMode&&a.freeMode.enabled){t.freeMode.onTouchEnd({currentPos:p});return}const m=p>=-t.maxTranslate()&&!t.params.loop;let g=0,w=t.slidesSizesGrid[0];for(let E=0;E<u.length;E+=E<a.slidesPerGroupSkip?1:a.slidesPerGroup){const P=E<a.slidesPerGroupSkip-1?1:a.slidesPerGroup;typeof u[E+P]<"u"?(m||p>=u[E]&&p<u[E+P])&&(g=E,w=u[E+P]-u[E]):(m||p>=u[E])&&(g=E,w=u[u.length-1]-u[u.length-2])}let h=null,v=null;a.rewind&&(t.isBeginning?v=a.virtual&&a.virtual.enabled&&t.virtual?t.virtual.slides.length-1:t.slides.length-1:t.isEnd&&(h=0));const x=(p-u[g])/w,S=g<a.slidesPerGroupSkip-1?1:a.slidesPerGroup;if(y>a.longSwipesMs){if(!a.longSwipes){t.slideTo(t.activeIndex);return}t.swipeDirection==="next"&&(x>=a.longSwipesRatio?t.slideTo(a.rewind&&t.isEnd?h:g+S):t.slideTo(g)),t.swipeDirection==="prev"&&(x>1-a.longSwipesRatio?t.slideTo(g+S):v!==null&&x<0&&Math.abs(x)>a.longSwipesRatio?t.slideTo(v):t.slideTo(g))}else{if(!a.shortSwipes){t.slideTo(t.activeIndex);return}t.navigation&&(r.target===t.navigation.nextEl||r.target===t.navigation.prevEl)?r.target===t.navigation.nextEl?t.slideTo(g+S):t.slideTo(g):(t.swipeDirection==="next"&&t.slideTo(h!==null?h:g+S),t.swipeDirection==="prev"&&t.slideTo(v!==null?v:g))}}function kv(){const e=this,{params:t,el:n}=e;if(n&&n.offsetWidth===0)return;t.breakpoints&&e.setBreakpoint();const{allowSlideNext:r,allowSlidePrev:i,snapGrid:o}=e,a=e.virtual&&e.params.virtual.enabled;e.allowSlideNext=!0,e.allowSlidePrev=!0,e.updateSize(),e.updateSlides(),e.updateSlidesClasses();const l=a&&t.loop;(t.slidesPerView==="auto"||t.slidesPerView>1)&&e.isEnd&&!e.isBeginning&&!e.params.centeredSlides&&!l?e.slideTo(e.slides.length-1,0,!1,!0):e.params.loop&&!a?e.slideToLoop(e.realIndex,0,!1,!0):e.slideTo(e.activeIndex,0,!1,!0),e.autoplay&&e.autoplay.running&&e.autoplay.paused&&(clearTimeout(e.autoplay.resizeTimeout),e.autoplay.resizeTimeout=setTimeout(()=>{e.autoplay&&e.autoplay.running&&e.autoplay.paused&&e.autoplay.resume()},500)),e.allowSlidePrev=i,e.allowSlideNext=r,e.params.watchOverflow&&o!==e.snapGrid&&e.checkOverflow()}function mI(e){const t=this;t.enabled&&(t.allowClick||(t.params.preventClicks&&e.preventDefault(),t.params.preventClicksPropagation&&t.animating&&(e.stopPropagation(),e.stopImmediatePropagation())))}function gI(){const e=this,{wrapperEl:t,rtlTranslate:n,enabled:r}=e;if(!r)return;e.previousTranslate=e.translate,e.isHorizontal()?e.translate=-t.scrollLeft:e.translate=-t.scrollTop,e.translate===0&&(e.translate=0),e.updateActiveIndex(),e.updateSlidesClasses();let i;const o=e.maxTranslate()-e.minTranslate();o===0?i=0:i=(e.translate-e.minTranslate())/o,i!==e.progress&&e.updateProgress(n?-e.translate:e.translate),e.emit("setTranslate",e.translate,!1)}function vI(e){const t=this;nl(t,e.target),!(t.params.cssMode||t.params.slidesPerView!=="auto"&&!t.params.autoHeight)&&t.update()}function yI(){const e=this;e.documentTouchHandlerProceeded||(e.documentTouchHandlerProceeded=!0,e.params.touchReleaseOnEdges&&(e.el.style.touchAction="auto"))}const qS=(e,t)=>{const n=kn(),{params:r,el:i,wrapperEl:o,device:a}=e,l=!!r.nested,s=t==="on"?"addEventListener":"removeEventListener",u=t;!i||typeof i=="string"||(n[s]("touchstart",e.onDocumentTouchStart,{passive:!1,capture:l}),i[s]("touchstart",e.onTouchStart,{passive:!1}),i[s]("pointerdown",e.onTouchStart,{passive:!1}),n[s]("touchmove",e.onTouchMove,{passive:!1,capture:l}),n[s]("pointermove",e.onTouchMove,{passive:!1,capture:l}),n[s]("touchend",e.onTouchEnd,{passive:!0}),n[s]("pointerup",e.onTouchEnd,{passive:!0}),n[s]("pointercancel",e.onTouchEnd,{passive:!0}),n[s]("touchcancel",e.onTouchEnd,{passive:!0}),n[s]("pointerout",e.onTouchEnd,{passive:!0}),n[s]("pointerleave",e.onTouchEnd,{passive:!0}),n[s]("contextmenu",e.onTouchEnd,{passive:!0}),(r.preventClicks||r.preventClicksPropagation)&&i[s]("click",e.onClick,!0),r.cssMode&&o[s]("scroll",e.onScroll),r.updateOnWindowResize?e[u](a.ios||a.android?"resize orientationchange observerUpdate":"resize observerUpdate",kv,!0):e[u]("observerUpdate",kv,!0),i[s]("load",e.onLoad,{capture:!0}))};function xI(){const e=this,{params:t}=e;e.onTouchStart=fI.bind(e),e.onTouchMove=pI.bind(e),e.onTouchEnd=hI.bind(e),e.onDocumentTouchStart=yI.bind(e),t.cssMode&&(e.onScroll=gI.bind(e)),e.onClick=mI.bind(e),e.onLoad=vI.bind(e),qS(e,"on")}function bI(){qS(this,"off")}var wI={attachEvents:xI,detachEvents:bI};const Tv=(e,t)=>e.grid&&t.grid&&t.grid.rows>1;function SI(){const e=this,{realIndex:t,initialized:n,params:r,el:i}=e,o=r.breakpoints;if(!o||o&&Object.keys(o).length===0)return;const a=kn(),l=r.breakpointsBase==="window"||!r.breakpointsBase?r.breakpointsBase:"container",s=["window","container"].includes(r.breakpointsBase)||!r.breakpointsBase?e.el:a.querySelector(r.breakpointsBase),u=e.getBreakpoint(o,l,s);if(!u||e.currentBreakpoint===u)return;const c=(u in o?o[u]:void 0)||e.originalParams,y=Tv(e,r),p=Tv(e,c),m=e.params.grabCursor,g=c.grabCursor,w=r.enabled;y&&!p?(i.classList.remove(`${r.containerModifierClass}grid`,`${r.containerModifierClass}grid-column`),e.emitContainerClasses()):!y&&p&&(i.classList.add(`${r.containerModifierClass}grid`),(c.grid.fill&&c.grid.fill==="column"||!c.grid.fill&&r.grid.fill==="column")&&i.classList.add(`${r.containerModifierClass}grid-column`),e.emitContainerClasses()),m&&!g?e.unsetGrabCursor():!m&&g&&e.setGrabCursor(),["navigation","pagination","scrollbar"].forEach(P=>{if(typeof c[P]>"u")return;const k=r[P]&&r[P].enabled,_=c[P]&&c[P].enabled;k&&!_&&e[P].disable(),!k&&_&&e[P].enable()});const h=c.direction&&c.direction!==r.direction,v=r.loop&&(c.slidesPerView!==r.slidesPerView||h),x=r.loop;h&&n&&e.changeDirection(),$t(e.params,c);const S=e.params.enabled,E=e.params.loop;Object.assign(e,{allowTouchMove:e.params.allowTouchMove,allowSlideNext:e.params.allowSlideNext,allowSlidePrev:e.params.allowSlidePrev}),w&&!S?e.disable():!w&&S&&e.enable(),e.currentBreakpoint=u,e.emit("_beforeBreakpoint",c),n&&(v?(e.loopDestroy(),e.loopCreate(t),e.updateSlides()):!x&&E?(e.loopCreate(t),e.updateSlides()):x&&!E&&e.loopDestroy()),e.emit("breakpoint",c)}function _I(e,t="window",n){if(!e||t==="container"&&!n)return;let r=!1;const i=vt(),o=t==="window"?i.innerHeight:n.clientHeight,a=Object.keys(e).map(l=>{if(typeof l=="string"&&l.indexOf("@")===0){const s=parseFloat(l.substr(1));return{value:o*s,point:l}}return{value:l,point:l}});a.sort((l,s)=>parseInt(l.value,10)-parseInt(s.value,10));for(let l=0;l<a.length;l+=1){const{point:s,value:u}=a[l];t==="window"?i.matchMedia(`(min-width: ${u}px)`).matches&&(r=s):u<=n.clientWidth&&(r=s)}return r||"max"}var CI={setBreakpoint:SI,getBreakpoint:_I};function EI(e,t){const n=[];return e.forEach(r=>{typeof r=="object"?Object.keys(r).forEach(i=>{r[i]&&n.push(t+i)}):typeof r=="string"&&n.push(t+r)}),n}function kI(){const e=this,{classNames:t,params:n,rtl:r,el:i,device:o}=e,a=EI(["initialized",n.direction,{"free-mode":e.params.freeMode&&n.freeMode.enabled},{autoheight:n.autoHeight},{rtl:r},{grid:n.grid&&n.grid.rows>1},{"grid-column":n.grid&&n.grid.rows>1&&n.grid.fill==="column"},{android:o.android},{ios:o.ios},{"css-mode":n.cssMode},{centered:n.cssMode&&n.centeredSlides},{"watch-progress":n.watchSlidesProgress}],n.containerModifierClass);t.push(...a),i.classList.add(...t),e.emitContainerClasses()}function TI(){const e=this,{el:t,classNames:n}=e;!t||typeof t=="string"||(t.classList.remove(...n),e.emitContainerClasses())}var PI={addClasses:kI,removeClasses:TI};function OI(){const e=this,{isLocked:t,params:n}=e,{slidesOffsetBefore:r}=n;if(r){const i=e.slides.length-1,o=e.slidesGrid[i]+e.slidesSizesGrid[i]+r*2;e.isLocked=e.size>o}else e.isLocked=e.snapGrid.length===1;n.allowSlideNext===!0&&(e.allowSlideNext=!e.isLocked),n.allowSlidePrev===!0&&(e.allowSlidePrev=!e.isLocked),t&&t!==e.isLocked&&(e.isEnd=!1),t!==e.isLocked&&e.emit(e.isLocked?"lock":"unlock")}var jI={checkOverflow:OI},jp={init:!0,direction:"horizontal",oneWayMovement:!1,swiperElementNodeName:"SWIPER-CONTAINER",touchEventsTarget:"wrapper",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,eventsPrefix:"swiper",enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,snapToSlideEdge:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:5,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,loop:!1,loopAddBlankSlides:!0,loopAdditionalSlides:0,loopPreventsSliding:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,maxBackfaceHiddenSlides:10,containerModifierClass:"swiper-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-blank",slideActiveClass:"swiper-slide-active",slideVisibleClass:"swiper-slide-visible",slideFullyVisibleClass:"swiper-slide-fully-visible",slideNextClass:"swiper-slide-next",slidePrevClass:"swiper-slide-prev",wrapperClass:"swiper-wrapper",lazyPreloaderClass:"swiper-lazy-preloader",lazyPreloadPrevNext:0,runCallbacksOnInit:!0,_emitClasses:!1};function MI(e,t){return function(r={}){const i=Object.keys(r)[0],o=r[i];if(typeof o!="object"||o===null){$t(t,r);return}if(e[i]===!0&&(e[i]={enabled:!0}),i==="navigation"&&e[i]&&e[i].enabled&&!e[i].prevEl&&!e[i].nextEl&&(e[i].auto=!0),["pagination","scrollbar"].indexOf(i)>=0&&e[i]&&e[i].enabled&&!e[i].el&&(e[i].auto=!0),!(i in e&&"enabled"in o)){$t(t,r);return}typeof e[i]=="object"&&!("enabled"in e[i])&&(e[i].enabled=!0),e[i]||(e[i]={enabled:!1}),$t(t,r)}}const $d={eventsEmitter:P$,update:z$,translate:W$,transition:X$,slide:rI,loop:sI,grabCursor:cI,events:wI,breakpoints:CI,checkOverflow:jI,classes:PI},Id={};let Em=class $n{constructor(...t){let n,r;t.length===1&&t[0].constructor&&Object.prototype.toString.call(t[0]).slice(8,-1)==="Object"?r=t[0]:[n,r]=t,r||(r={}),r=$t({},r),n&&!r.el&&(r.el=n);const i=kn();if(r.el&&typeof r.el=="string"&&i.querySelectorAll(r.el).length>1){const s=[];return i.querySelectorAll(r.el).forEach(u=>{const d=$t({},r,{el:u});s.push(new $n(d))}),s}const o=this;o.__swiper__=!0,o.support=HS(),o.device=WS({userAgent:r.userAgent}),o.browser=GS(),o.eventsListeners={},o.eventsAnyListeners=[],o.modules=[...o.__modules__],r.modules&&Array.isArray(r.modules)&&r.modules.forEach(s=>{typeof s=="function"&&o.modules.indexOf(s)<0&&o.modules.push(s)});const a={};o.modules.forEach(s=>{s({params:r,swiper:o,extendParams:MI(r,a),on:o.on.bind(o),once:o.once.bind(o),off:o.off.bind(o),emit:o.emit.bind(o)})});const l=$t({},jp,a);return o.params=$t({},l,Id,r),o.originalParams=$t({},o.params),o.passedParams=$t({},r),o.params&&o.params.on&&Object.keys(o.params.on).forEach(s=>{o.on(s,o.params.on[s])}),o.params&&o.params.onAny&&o.onAny(o.params.onAny),Object.assign(o,{enabled:o.params.enabled,el:n,classNames:[],slides:[],slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal(){return o.params.direction==="horizontal"},isVertical(){return o.params.direction==="vertical"},activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,cssOverflowAdjustment(){return Math.trunc(this.translate/2**23)*2**23},allowSlideNext:o.params.allowSlideNext,allowSlidePrev:o.params.allowSlidePrev,touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:o.params.focusableElements,lastClickTime:0,clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,startMoving:void 0,pointerId:null,touchId:null},allowClick:!0,allowTouchMove:o.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),o.emit("_swiper"),o.params.init&&o.init(),o}getDirectionLabel(t){return this.isHorizontal()?t:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[t]}getSlideIndex(t){const{slidesEl:n,params:r}=this,i=Sn(n,`.${r.slideClass}, swiper-slide`),o=Ql(i[0]);return Ql(t)-o}getSlideIndexByData(t){return this.getSlideIndex(this.slides.find(n=>n.getAttribute("data-swiper-slide-index")*1===t))}getSlideIndexWhenGrid(t){return this.grid&&this.params.grid&&this.params.grid.rows>1&&(this.params.grid.fill==="column"?t=Math.floor(t/this.params.grid.rows):this.params.grid.fill==="row"&&(t=t%Math.ceil(this.slides.length/this.params.grid.rows))),t}recalcSlides(){const t=this,{slidesEl:n,params:r}=t;t.slides=Sn(n,`.${r.slideClass}, swiper-slide`)}enable(){const t=this;t.enabled||(t.enabled=!0,t.params.grabCursor&&t.setGrabCursor(),t.emit("enable"))}disable(){const t=this;t.enabled&&(t.enabled=!1,t.params.grabCursor&&t.unsetGrabCursor(),t.emit("disable"))}setProgress(t,n){const r=this;t=Math.min(Math.max(t,0),1);const i=r.minTranslate(),a=(r.maxTranslate()-i)*t+i;r.translateTo(a,typeof n>"u"?0:n),r.updateActiveIndex(),r.updateSlidesClasses()}emitContainerClasses(){const t=this;if(!t.params._emitClasses||!t.el)return;const n=t.el.className.split(" ").filter(r=>r.indexOf("swiper")===0||r.indexOf(t.params.containerModifierClass)===0);t.emit("_containerClasses",n.join(" "))}getSlideClasses(t){const n=this;return n.destroyed?"":t.className.split(" ").filter(r=>r.indexOf("swiper-slide")===0||r.indexOf(n.params.slideClass)===0).join(" ")}emitSlidesClasses(){const t=this;if(!t.params._emitClasses||!t.el)return;const n=[];t.slides.forEach(r=>{const i=t.getSlideClasses(r);n.push({slideEl:r,classNames:i}),t.emit("_slideClass",r,i)}),t.emit("_slideClasses",n)}slidesPerViewDynamic(t="current",n=!1){const r=this,{params:i,slides:o,slidesGrid:a,slidesSizesGrid:l,size:s,activeIndex:u}=r;let d=1;if(typeof i.slidesPerView=="number")return i.slidesPerView;if(i.centeredSlides){let c=o[u]?Math.ceil(o[u].swiperSlideSize):0,y;for(let p=u+1;p<o.length;p+=1)o[p]&&!y&&(c+=Math.ceil(o[p].swiperSlideSize),d+=1,c>s&&(y=!0));for(let p=u-1;p>=0;p-=1)o[p]&&!y&&(c+=o[p].swiperSlideSize,d+=1,c>s&&(y=!0))}else if(t==="current")for(let c=u+1;c<o.length;c+=1)(n?a[c]+l[c]-a[u]<s:a[c]-a[u]<s)&&(d+=1);else for(let c=u-1;c>=0;c-=1)a[u]-a[c]<s&&(d+=1);return d}update(){const t=this;if(!t||t.destroyed)return;const{snapGrid:n,params:r}=t;r.breakpoints&&t.setBreakpoint(),[...t.el.querySelectorAll('[loading="lazy"]')].forEach(a=>{a.complete&&nl(t,a)}),t.updateSize(),t.updateSlides(),t.updateProgress(),t.updateSlidesClasses();function i(){const a=t.rtlTranslate?t.translate*-1:t.translate,l=Math.min(Math.max(a,t.maxTranslate()),t.minTranslate());t.setTranslate(l),t.updateActiveIndex(),t.updateSlidesClasses()}let o;if(r.freeMode&&r.freeMode.enabled&&!r.cssMode)i(),r.autoHeight&&t.updateAutoHeight();else{if((r.slidesPerView==="auto"||r.slidesPerView>1)&&t.isEnd&&!r.centeredSlides){const a=t.virtual&&r.virtual.enabled?t.virtual.slides:t.slides;o=t.slideTo(a.length-1,0,!1,!0)}else o=t.slideTo(t.activeIndex,0,!1,!0);o||i()}r.watchOverflow&&n!==t.snapGrid&&t.checkOverflow(),t.emit("update")}changeDirection(t,n=!0){const r=this,i=r.params.direction;return t||(t=i==="horizontal"?"vertical":"horizontal"),t===i||t!=="horizontal"&&t!=="vertical"||(r.el.classList.remove(`${r.params.containerModifierClass}${i}`),r.el.classList.add(`${r.params.containerModifierClass}${t}`),r.emitContainerClasses(),r.params.direction=t,r.slides.forEach(o=>{t==="vertical"?o.style.width="":o.style.height=""}),r.emit("changeDirection"),n&&r.update()),r}changeLanguageDirection(t){const n=this;n.rtl&&t==="rtl"||!n.rtl&&t==="ltr"||(n.rtl=t==="rtl",n.rtlTranslate=n.params.direction==="horizontal"&&n.rtl,n.rtl?(n.el.classList.add(`${n.params.containerModifierClass}rtl`),n.el.dir="rtl"):(n.el.classList.remove(`${n.params.containerModifierClass}rtl`),n.el.dir="ltr"),n.update())}mount(t){const n=this;if(n.mounted)return!0;let r=t||n.params.el;if(typeof r=="string"&&(r=document.querySelector(r)),!r)return!1;r.swiper=n,r.parentNode&&r.parentNode.host&&r.parentNode.host.nodeName===n.params.swiperElementNodeName.toUpperCase()&&(n.isElement=!0);const i=()=>`.${(n.params.wrapperClass||"").trim().split(" ").join(".")}`;let a=(()=>r&&r.shadowRoot&&r.shadowRoot.querySelector?r.shadowRoot.querySelector(i()):Sn(r,i())[0])();return!a&&n.params.createElements&&(a=Kl("div",n.params.wrapperClass),r.append(a),Sn(r,`.${n.params.slideClass}`).forEach(l=>{a.append(l)})),Object.assign(n,{el:r,wrapperEl:a,slidesEl:n.isElement&&!r.parentNode.host.slideSlots?r.parentNode.host:a,hostEl:n.isElement?r.parentNode.host:r,mounted:!0,rtl:r.dir.toLowerCase()==="rtl"||fr(r,"direction")==="rtl",rtlTranslate:n.params.direction==="horizontal"&&(r.dir.toLowerCase()==="rtl"||fr(r,"direction")==="rtl"),wrongRTL:fr(a,"display")==="-webkit-box"}),!0}init(t){const n=this;if(n.initialized||n.mount(t)===!1)return n;n.emit("beforeInit"),n.params.breakpoints&&n.setBreakpoint(),n.addClasses(),n.updateSize(),n.updateSlides(),n.params.watchOverflow&&n.checkOverflow(),n.params.grabCursor&&n.enabled&&n.setGrabCursor(),n.params.loop&&n.virtual&&n.params.virtual.enabled?n.slideTo(n.params.initialSlide+n.virtual.slidesBefore,0,n.params.runCallbacksOnInit,!1,!0):n.slideTo(n.params.initialSlide,0,n.params.runCallbacksOnInit,!1,!0),n.params.loop&&n.loopCreate(void 0,!0),n.attachEvents();const i=[...n.el.querySelectorAll('[loading="lazy"]')];return n.isElement&&i.push(...n.hostEl.querySelectorAll('[loading="lazy"]')),i.forEach(o=>{o.complete?nl(n,o):o.addEventListener("load",a=>{nl(n,a.target)})}),Op(n),n.initialized=!0,Op(n),n.emit("init"),n.emit("afterInit"),n}destroy(t=!0,n=!0){const r=this,{params:i,el:o,wrapperEl:a,slides:l}=r;return typeof r.params>"u"||r.destroyed||(r.emit("beforeDestroy"),r.initialized=!1,r.detachEvents(),i.loop&&r.loopDestroy(),n&&(r.removeClasses(),o&&typeof o!="string"&&o.removeAttribute("style"),a&&a.removeAttribute("style"),l&&l.length&&l.forEach(s=>{s.classList.remove(i.slideVisibleClass,i.slideFullyVisibleClass,i.slideActiveClass,i.slideNextClass,i.slidePrevClass),s.removeAttribute("style"),s.removeAttribute("data-swiper-slide-index")})),r.emit("destroy"),Object.keys(r.eventsListeners).forEach(s=>{r.off(s)}),t!==!1&&(r.el&&typeof r.el!="string"&&(r.el.swiper=null),f$(r)),r.destroyed=!0),null}static extendDefaults(t){$t(Id,t)}static get extendedDefaults(){return Id}static get defaults(){return jp}static installModule(t){$n.prototype.__modules__||($n.prototype.__modules__=[]);const n=$n.prototype.__modules__;typeof t=="function"&&n.indexOf(t)<0&&n.push(t)}static use(t){return Array.isArray(t)?(t.forEach(n=>$n.installModule(n)),$n):($n.installModule(t),$n)}};Object.keys($d).forEach(e=>{Object.keys($d[e]).forEach(t=>{Em.prototype[t]=$d[e][t]})});Em.use([k$,T$]);const XS=["eventsPrefix","injectStyles","injectStylesUrls","modules","init","_direction","oneWayMovement","swiperElementNodeName","touchEventsTarget","initialSlide","_speed","cssMode","updateOnWindowResize","resizeObserver","nested","focusableElements","_enabled","_width","_height","preventInteractionOnTransition","userAgent","url","_edgeSwipeDetection","_edgeSwipeThreshold","_freeMode","_autoHeight","setWrapperSize","virtualTranslate","_effect","breakpoints","breakpointsBase","_spaceBetween","_slidesPerView","maxBackfaceHiddenSlides","_grid","_slidesPerGroup","_slidesPerGroupSkip","_slidesPerGroupAuto","_centeredSlides","_centeredSlidesBounds","_slidesOffsetBefore","_slidesOffsetAfter","normalizeSlideIndex","_centerInsufficientSlides","_snapToSlideEdge","_watchOverflow","roundLengths","touchRatio","touchAngle","simulateTouch","_shortSwipes","_longSwipes","longSwipesRatio","longSwipesMs","_followFinger","allowTouchMove","_threshold","touchMoveStopPropagation","touchStartPreventDefault","touchStartForcePreventDefault","touchReleaseOnEdges","uniqueNavElements","_resistance","_resistanceRatio","_watchSlidesProgress","_grabCursor","preventClicks","preventClicksPropagation","_slideToClickedSlide","_loop","loopAdditionalSlides","loopAddBlankSlides","loopPreventsSliding","_rewind","_allowSlidePrev","_allowSlideNext","_swipeHandler","_noSwiping","noSwipingClass","noSwipingSelector","passiveListeners","containerModifierClass","slideClass","slideActiveClass","slideVisibleClass","slideFullyVisibleClass","slideNextClass","slidePrevClass","slideBlankClass","wrapperClass","lazyPreloaderClass","lazyPreloadPrevNext","runCallbacksOnInit","observer","observeParents","observeSlideChildren","a11y","_autoplay","_controller","coverflowEffect","cubeEffect","fadeEffect","flipEffect","creativeEffect","cardsEffect","hashNavigation","history","keyboard","mousewheel","_navigation","_pagination","parallax","_scrollbar","_thumbs","virtual","zoom","control"];function ti(e){return typeof e=="object"&&e!==null&&e.constructor&&Object.prototype.toString.call(e).slice(8,-1)==="Object"&&!e.__swiper__}function Bi(e,t){const n=["__proto__","constructor","prototype"];Object.keys(t).filter(r=>n.indexOf(r)<0).forEach(r=>{typeof e[r]>"u"?e[r]=t[r]:ti(t[r])&&ti(e[r])&&Object.keys(t[r]).length>0?t[r].__swiper__?e[r]=t[r]:Bi(e[r],t[r]):e[r]=t[r]})}function KS(e={}){return e.navigation&&typeof e.navigation.nextEl>"u"&&typeof e.navigation.prevEl>"u"}function QS(e={}){return e.pagination&&typeof e.pagination.el>"u"}function ZS(e={}){return e.scrollbar&&typeof e.scrollbar.el>"u"}function JS(e=""){const t=e.split(" ").map(r=>r.trim()).filter(r=>!!r),n=[];return t.forEach(r=>{n.indexOf(r)<0&&n.push(r)}),n.join(" ")}function $I(e=""){return e?e.includes("swiper-wrapper")?e:`swiper-wrapper ${e}`:"swiper-wrapper"}function II({swiper:e,slides:t,passedParams:n,changedParams:r,nextEl:i,prevEl:o,scrollbarEl:a,paginationEl:l}){const s=r.filter(_=>_!=="children"&&_!=="direction"&&_!=="wrapperClass"),{params:u,pagination:d,navigation:c,scrollbar:y,virtual:p,thumbs:m}=e;let g,w,h,v,x,S,E,P;r.includes("thumbs")&&n.thumbs&&n.thumbs.swiper&&!n.thumbs.swiper.destroyed&&u.thumbs&&(!u.thumbs.swiper||u.thumbs.swiper.destroyed)&&(g=!0),r.includes("controller")&&n.controller&&n.controller.control&&u.controller&&!u.controller.control&&(w=!0),r.includes("pagination")&&n.pagination&&(n.pagination.el||l)&&(u.pagination||u.pagination===!1)&&d&&!d.el&&(h=!0),r.includes("scrollbar")&&n.scrollbar&&(n.scrollbar.el||a)&&(u.scrollbar||u.scrollbar===!1)&&y&&!y.el&&(v=!0),r.includes("navigation")&&n.navigation&&(n.navigation.prevEl||o)&&(n.navigation.nextEl||i)&&(u.navigation||u.navigation===!1)&&c&&!c.prevEl&&!c.nextEl&&(x=!0);const k=_=>{e[_]&&(e[_].destroy(),_==="navigation"?(e.isElement&&(e[_].prevEl.remove(),e[_].nextEl.remove()),u[_].prevEl=void 0,u[_].nextEl=void 0,e[_].prevEl=void 0,e[_].nextEl=void 0):(e.isElement&&e[_].el.remove(),u[_].el=void 0,e[_].el=void 0))};r.includes("loop")&&e.isElement&&(u.loop&&!n.loop?S=!0:!u.loop&&n.loop?E=!0:P=!0),s.forEach(_=>{if(ti(u[_])&&ti(n[_]))Object.assign(u[_],n[_]),(_==="navigation"||_==="pagination"||_==="scrollbar")&&"enabled"in n[_]&&!n[_].enabled&&k(_);else{const M=n[_];(M===!0||M===!1)&&(_==="navigation"||_==="pagination"||_==="scrollbar")?M===!1&&k(_):u[_]=n[_]}}),s.includes("controller")&&!w&&e.controller&&e.controller.control&&u.controller&&u.controller.control&&(e.controller.control=u.controller.control),r.includes("children")&&t&&p&&u.virtual.enabled?(p.slides=t,p.update(!0)):r.includes("virtual")&&p&&u.virtual.enabled&&(t&&(p.slides=t),p.update(!0)),r.includes("children")&&t&&u.loop&&(P=!0),g&&m.init()&&m.update(!0),w&&(e.controller.control=u.controller.control),h&&(e.isElement&&(!l||typeof l=="string")&&(l=document.createElement("div"),l.classList.add("swiper-pagination"),l.part.add("pagination"),e.el.appendChild(l)),l&&(u.pagination.el=l),d.init(),d.render(),d.update()),v&&(e.isElement&&(!a||typeof a=="string")&&(a=document.createElement("div"),a.classList.add("swiper-scrollbar"),a.part.add("scrollbar"),e.el.appendChild(a)),a&&(u.scrollbar.el=a),y.init(),y.updateSize(),y.setTranslate()),x&&(e.isElement&&((!i||typeof i=="string")&&(i=document.createElement("div"),i.classList.add("swiper-button-next"),Da(i,e.navigation.arrowSvg),i.part.add("button-next"),e.el.appendChild(i)),(!o||typeof o=="string")&&(o=document.createElement("div"),o.classList.add("swiper-button-prev"),Da(o,e.navigation.arrowSvg),o.part.add("button-prev"),e.el.appendChild(o))),i&&(u.navigation.nextEl=i),o&&(u.navigation.prevEl=o),c.init(),c.update()),r.includes("allowSlideNext")&&(e.allowSlideNext=n.allowSlideNext),r.includes("allowSlidePrev")&&(e.allowSlidePrev=n.allowSlidePrev),r.includes("direction")&&e.changeDirection(n.direction,!1),(S||P)&&e.loopDestroy(),(E||P)&&e.loopCreate(),e.update()}function DI(e={},t=!0){const n={on:{}},r={},i={};Bi(n,jp),n._emitClasses=!0,n.init=!1;const o={},a=XS.map(s=>s.replace(/_/,"")),l=Object.assign({},e);return Object.keys(l).forEach(s=>{typeof e[s]>"u"||(a.indexOf(s)>=0?ti(e[s])?(n[s]={},i[s]={},Bi(n[s],e[s]),Bi(i[s],e[s])):(n[s]=e[s],i[s]=e[s]):s.search(/on[A-Z]/)===0&&typeof e[s]=="function"?t?r[`${s[2].toLowerCase()}${s.substr(3)}`]=e[s]:n.on[`${s[2].toLowerCase()}${s.substr(3)}`]=e[s]:o[s]=e[s])}),["navigation","pagination","scrollbar"].forEach(s=>{n[s]===!0&&(n[s]={}),n[s]===!1&&delete n[s]}),{params:n,passedParams:i,rest:o,events:r}}function LI({el:e,nextEl:t,prevEl:n,paginationEl:r,scrollbarEl:i,swiper:o},a){KS(a)&&t&&n&&(o.params.navigation.nextEl=t,o.originalParams.navigation.nextEl=t,o.params.navigation.prevEl=n,o.originalParams.navigation.prevEl=n),QS(a)&&r&&(o.params.pagination.el=r,o.originalParams.pagination.el=r),ZS(a)&&i&&(o.params.scrollbar.el=i,o.originalParams.scrollbar.el=i),o.init(e)}function AI(e,t,n,r,i){const o=[];if(!t)return o;const a=s=>{o.indexOf(s)<0&&o.push(s)};if(n&&r){const s=r.map(i),u=n.map(i);s.join("")!==u.join("")&&a("children"),r.length!==n.length&&a("children")}return XS.filter(s=>s[0]==="_").map(s=>s.replace(/_/,"")).forEach(s=>{if(s in e&&s in t)if(ti(e[s])&&ti(t[s])){const u=Object.keys(e[s]),d=Object.keys(t[s]);u.length!==d.length?a(s):(u.forEach(c=>{e[s][c]!==t[s][c]&&a(s)}),d.forEach(c=>{e[s][c]!==t[s][c]&&a(s)}))}else e[s]!==t[s]&&a(s)}),o}const RI=e=>{!e||e.destroyed||!e.params.virtual||e.params.virtual&&!e.params.virtual.enabled||(e.updateSlides(),e.updateProgress(),e.updateSlidesClasses(),e.emit("_virtualUpdated"),e.parallax&&e.params.parallax&&e.params.parallax.enabled&&e.parallax.setTranslate())};function Zl(){return Zl=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Zl.apply(this,arguments)}function e2(e){return e.type&&e.type.displayName&&e.type.displayName.includes("SwiperSlide")}function t2(e){const t=[];return K.Children.toArray(e).forEach(n=>{e2(n)?t.push(n):n.props&&n.props.children&&t2(n.props.children).forEach(r=>t.push(r))}),t}function FI(e){const t=[],n={"container-start":[],"container-end":[],"wrapper-start":[],"wrapper-end":[]};return K.Children.toArray(e).forEach(r=>{if(e2(r))t.push(r);else if(r.props&&r.props.slot&&n[r.props.slot])n[r.props.slot].push(r);else if(r.props&&r.props.children){const i=t2(r.props.children);i.length>0?i.forEach(o=>t.push(o)):n["container-end"].push(r)}else n["container-end"].push(r)}),{slides:t,slots:n}}function zI(e,t,n){if(!n)return null;const r=d=>{let c=d;return d<0?c=t.length+d:c>=t.length&&(c=c-t.length),c},i=e.isHorizontal()?{[e.rtlTranslate?"right":"left"]:`${n.offset}px`}:{top:`${n.offset}px`},{from:o,to:a}=n,l=e.params.loop?-t.length:0,s=e.params.loop?t.length*2:t.length,u=[];for(let d=l;d<s;d+=1)d>=o&&d<=a&&u.push(t[r(d)]);return u.map((d,c)=>K.cloneElement(d,{swiper:e,style:i,key:d.props.virtualIndex||d.key||`slide-${c}`}))}function oa(e,t){return typeof window>"u"?b.useEffect(e,t):b.useLayoutEffect(e,t)}const Pv=b.createContext(null),NI=b.createContext(null),n2=b.forwardRef(({className:e,tag:t="div",wrapperTag:n="div",children:r,onSwiper:i,...o}={},a)=>{let l=!1;const[s,u]=b.useState("swiper"),[d,c]=b.useState(null),[y,p]=b.useState(!1),m=b.useRef(!1),g=b.useRef(null),w=b.useRef(null),h=b.useRef(null),v=b.useRef(null),x=b.useRef(null),S=b.useRef(null),E=b.useRef(null),P=b.useRef(null),{params:k,passedParams:_,rest:M,events:$}=DI(o),{slides:D,slots:A}=FI(r),j=()=>{p(!y)};Object.assign(k.on,{_containerClasses(T,I){u(I)}});const F=()=>{Object.assign(k.on,$),l=!0;const T={...k};if(delete T.wrapperClass,w.current=new Em(T),w.current.virtual&&w.current.params.virtual.enabled){w.current.virtual.slides=D;const I={cache:!1,slides:D,renderExternal:c,renderExternalUpdate:!1};Bi(w.current.params.virtual,I),Bi(w.current.originalParams.virtual,I)}};g.current||F(),w.current&&w.current.on("_beforeBreakpoint",j);const R=()=>{l||!$||!w.current||Object.keys($).forEach(T=>{w.current.on(T,$[T])})},L=()=>{!$||!w.current||Object.keys($).forEach(T=>{w.current.off(T,$[T])})};b.useEffect(()=>()=>{w.current&&w.current.off("_beforeBreakpoint",j)}),b.useEffect(()=>{!m.current&&w.current&&(w.current.emitSlidesClasses(),m.current=!0)}),oa(()=>{if(a&&(a.current=g.current),!!g.current)return w.current.destroyed&&F(),LI({el:g.current,nextEl:x.current,prevEl:S.current,paginationEl:E.current,scrollbarEl:P.current,swiper:w.current},k),i&&!w.current.destroyed&&i(w.current),()=>{w.current&&!w.current.destroyed&&w.current.destroy(!0,!1)}},[]),oa(()=>{R();const T=AI(_,h.current,D,v.current,I=>I.key);return h.current=_,v.current=D,T.length&&w.current&&!w.current.destroyed&&II({swiper:w.current,slides:D,passedParams:_,changedParams:T,nextEl:x.current,prevEl:S.current,scrollbarEl:P.current,paginationEl:E.current}),()=>{L()}}),oa(()=>{RI(w.current)},[d]);function O(){return k.virtual?zI(w.current,D,d):D.map((T,I)=>K.cloneElement(T,{swiper:w.current,swiperSlideIndex:I}))}return K.createElement(t,Zl({ref:g,className:JS(`${s}${e?` ${e}`:""}`)},M),K.createElement(NI.Provider,{value:w.current},A["container-start"],K.createElement(n,{className:$I(k.wrapperClass)},A["wrapper-start"],O(),A["wrapper-end"]),KS(k)&&K.createElement(K.Fragment,null,K.createElement("div",{ref:S,className:"swiper-button-prev"}),K.createElement("div",{ref:x,className:"swiper-button-next"})),ZS(k)&&K.createElement("div",{ref:P,className:"swiper-scrollbar"}),QS(k)&&K.createElement("div",{ref:E,className:"swiper-pagination"}),A["container-end"]))});n2.displayName="Swiper";const r2=b.forwardRef(({tag:e="div",children:t,className:n="",swiper:r,zoom:i,lazy:o,virtualIndex:a,swiperSlideIndex:l,...s}={},u)=>{const d=b.useRef(null),[c,y]=b.useState("swiper-slide"),[p,m]=b.useState(!1);function g(x,S,E){S===d.current&&y(E)}oa(()=>{if(typeof l<"u"&&(d.current.swiperSlideIndex=l),u&&(u.current=d.current),!(!d.current||!r)){if(r.destroyed){c!=="swiper-slide"&&y("swiper-slide");return}return r.on("_slideClass",g),()=>{r&&r.off("_slideClass",g)}}}),oa(()=>{r&&d.current&&!r.destroyed&&y(r.getSlideClasses(d.current))},[r]);const w={isActive:c.indexOf("swiper-slide-active")>=0,isVisible:c.indexOf("swiper-slide-visible")>=0,isPrev:c.indexOf("swiper-slide-prev")>=0,isNext:c.indexOf("swiper-slide-next")>=0},h=()=>typeof t=="function"?t(w):t,v=()=>{m(!0)};return K.createElement(e,Zl({ref:d,className:JS(`${c}${n?` ${n}`:""}`),"data-swiper-slide-index":a,onLoad:v},s),i&&K.createElement(Pv.Provider,{value:w},K.createElement("div",{className:"swiper-zoom-container","data-swiper-zoom":typeof i=="number"?i:void 0},h(),o&&!p&&K.createElement("div",{className:"swiper-lazy-preloader",ref:x=>{x&&(x.lazyPreloaderManaged=!0)}}))),!i&&K.createElement(Pv.Provider,{value:w},h(),o&&!p&&K.createElement("div",{className:"swiper-lazy-preloader",ref:x=>{x&&(x.lazyPreloaderManaged=!0)}})))});r2.displayName="SwiperSlide";const BI=C.section`
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
`,VI=C.div`
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
`,UI=C.div`
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
`,HI=C(Oe)`
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
`,WI=[{id:1,title:"Дідів хлів - найкращий вибір для Вашого велосипеда",desc:"Якісні запчастини, професійний серевіс та індивідуальний підхід. Створюйте ідеальний байк разом з нами",img:"/Didiv/bike2-hero.jpeg",btn:"До каталогу",url:"/catalog"},{id:2,title:"Постійне оновлення товару",desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam reprehenderit obcaecati molestias est alias vitae laboriosam nulla perferendis officia incidunt aliquid voluptatem iste libero, officiis ex modi enim repellat. Consectetur!",img:"/Didiv/inside.webp",btn:"До новинок",url:"/catalog/new"}],GI=()=>f.jsx(BI,{children:f.jsx(n2,{modules:[b$,S$,w$],spaceBetween:0,slidesPerView:1,navigation:!0,pagination:{clickable:!0},autoplay:{delay:5e3},loop:!0,children:WI.map(e=>f.jsx(r2,{children:f.jsx(VI,{bg:e.img,children:f.jsxs(UI,{children:[f.jsx("h1",{children:e.title}),f.jsx("p",{children:e.desc}),f.jsx(HI,{to:e.url,children:e.btn})]})})},e.id))})}),YI=C.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  margin-bottom:30px;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`,Dd=C.div`
  background-color: #ffffffde;
  padding: 20px;
  border: 1px solid #e3e2e2;
  border-radius: 8px;
`,Ld=C.div`
  font-size: 24px;
  font-weight: bold;
  color: var(--orange-color);
`,Ad=C.div`
  font-size: 14px;
  color: #888;
`,i2=()=>f.jsxs(YI,{children:[f.jsxs(Dd,{children:[f.jsx(Ld,{children:"3000+"}),f.jsx(Ad,{children:"Перевірених деталей"})]}),f.jsxs(Dd,{children:[f.jsx(Ld,{children:"6 років"}),f.jsx(Ad,{children:"Досвіду на ринку"})]}),f.jsxs(Dd,{children:[f.jsx(Ld,{children:"100%"}),f.jsx(Ad,{children:"Контроль якості"})]})]}),qI=Ae.div`
  background:var(--background-color);
`,XI=Ae.div`
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
`;const KI=()=>f.jsx(qI,{children:f.jsxs(XI,{children:[f.jsx(GI,{}),f.jsx(Sw,{}),f.jsx(u$,{}),f.jsx(i2,{})]})}),QI=C.div`
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
`,ZI=C.section`
  background-color:  var(--second-background);
`,JI=C.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  justify-content: flex-start;
  margin-bottom: 16px;

  @media (min-width: 768px) {
    display: none;
  }
`,eD=C.button`
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
`,tD=C.svg`
  width: 20px;
  height: 20px;
  fill: var(--white-color);
`,nD=C.button`
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
`;const rD=C.div`
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
`,iD=C.div`
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
`;const oD=C.div`
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
`;const aD=C.div`
  padding: 20px;
  border-top: 1px solid #eee;
  background: white;
`,sD=C.button`
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
`,o2=C.button`
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
`,lD=C.div`
  position: relative;
  display: inline-block;

`,uD=C.div`
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
`,mi=C.div`
  padding: 10px 12px;
  cursor: pointer;

  &:hover {
    background: #f0f0f0;
  }
`,cD=C.aside`

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
`,dD=C.h3`
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
`;const fD=C.div`
  border-bottom: 1px solid #eee;
  padding: 12px;
  margin-bottom: 12px;

  &:last-child {
    border-bottom: none;
  }
`,pD=C.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  padding: 8px 0;
  
  &:hover p {
    color: #85683d;
  }
`,hD=C.p`
  font-weight: 600;
  font-size: 16px;
  margin: 0;
  color: #222;
  transition: color 0.2s;
`,mD=C.span`
  border: solid #555;
  border-width: 0 2px 2px 0;
  display: inline-block;
  padding: 3px;
  transform: ${e=>e.isOpen?"rotate(-135deg)":"rotate(45deg)"};
  transition: transform 0.3s ease;
`,gD=C.div`
  max-height: ${e=>e.isOpen?"500px":"0"};
  overflow: hidden;
  transition: max-height 0.3s ease-in-out, opacity 0.3s;
  opacity: ${e=>e.isOpen?"1":"0"};
  padding: ${e=>e.isOpen?"12px":"0"};
`,vD=C.label`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  cursor: pointer;
  font-size: 15px;
  color: #444;

  &:hover span:first-of-type {
    border-color: #85683d;
  }
`,Mp=C.input.attrs({type:"checkbox"})`
  display: none;
`,yD=C.span`
  width: 20px;
  height: 20px;
  border: 2px solid #ddd;
  border-radius: 4px;
  margin-right: 12px;
  position: relative;
  flex-shrink: 0;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);

  ${Mp}:checked + & {
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

  ${Mp}:checked + &::after {
    opacity: 1;
  }
`;var $p={},km={},Tm={},yo={};Object.defineProperty(yo,"__esModule",{value:!0});yo.Direction=void 0;var Ov;(function(e){e.Right="to right",e.Left="to left",e.Down="to bottom",e.Up="to top"})(Ov||(yo.Direction=Ov={}));(function(e){var t=te&&te.__spreadArray||function(A,j,F){if(F||arguments.length===2)for(var R=0,L=j.length,O;R<L;R++)(O||!(R in j))&&(O||(O=Array.prototype.slice.call(j,0,R)),O[R]=j[R]);return A.concat(O||Array.prototype.slice.call(j))};Object.defineProperty(e,"__esModule",{value:!0}),e.isIOS=e.useThumbOverlap=e.assertUnreachable=e.voidFn=e.getTrackBackground=e.replaceAt=e.schd=e.translate=e.getClosestThumbIndex=e.translateThumbs=e.getPaddingAndBorder=e.getMargin=e.checkInitialOverlap=e.checkValuesAgainstBoundaries=e.checkBoundaries=e.isVertical=e.relativeValue=e.normalizeValue=e.isStepDivisible=e.isTouchEvent=e.getStepDecimals=void 0;var n=b,r=yo,i=function(A){var j=A.toString().split(".")[1];return j?j.length:0};e.getStepDecimals=i;function o(A){return A.touches&&A.touches.length||A.changedTouches&&A.changedTouches.length}e.isTouchEvent=o;function a(A,j,F){var R=(j-A)/F,L=8,O=Number(R.toFixed(L));return parseInt(O.toString(),10)===O}e.isStepDivisible=a;function l(A,j,F,R,L,O,T){var I=1e11;if(A=Math.round(A*I)/I,!O){var z=T[j-1],B=T[j+1];if(z&&z>A)return z;if(B&&B<A)return B}if(A>R)return R;if(A<F)return F;var N=Math.floor(A*I-F*I)%Math.floor(L*I),U=Math.floor(A*I-Math.abs(N)),G=N===0?A:U/I,H=Math.abs(N/I)<L/2?G:G+L,X=(0,e.getStepDecimals)(L);return parseFloat(H.toFixed(X))}e.normalizeValue=l;function s(A,j,F){return(A-j)/(F-j)}e.relativeValue=s;function u(A){return A===r.Direction.Up||A===r.Direction.Down}e.isVertical=u;function d(A,j,F){if(j>=F)throw new RangeError("min (".concat(j,") is equal/bigger than max (").concat(F,")"));if(A<j)throw new RangeError("value (".concat(A,") is smaller than min (").concat(j,")"));if(A>F)throw new RangeError("value (".concat(A,") is bigger than max (").concat(F,")"))}e.checkBoundaries=d;function c(A,j,F){return A<j?j:A>F?F:A}e.checkValuesAgainstBoundaries=c;function y(A){if(!(A.length<2)&&!A.slice(1).every(function(j,F){return A[F]<=j}))throw new RangeError("values={[".concat(A,"]} needs to be sorted when allowOverlap={false}"))}e.checkInitialOverlap=y;function p(A){var j=window.getComputedStyle(A);return{top:parseInt(j["margin-top"],10),bottom:parseInt(j["margin-bottom"],10),left:parseInt(j["margin-left"],10),right:parseInt(j["margin-right"],10)}}e.getMargin=p;function m(A){var j=window.getComputedStyle(A);return{top:parseInt(j["padding-top"],10)+parseInt(j["border-top-width"],10),bottom:parseInt(j["padding-bottom"],10)+parseInt(j["border-bottom-width"],10),left:parseInt(j["padding-left"],10)+parseInt(j["border-left-width"],10),right:parseInt(j["padding-right"],10)+parseInt(j["border-right-width"],10)}}e.getPaddingAndBorder=m;function g(A,j,F){var R=F?-1:1;A.forEach(function(L,O){return h(L,R*j[O].x,j[O].y)})}e.translateThumbs=g;function w(A,j,F,R){for(var L=0,O=$(A[0],j,F,R),T=1;T<A.length;T++){var I=$(A[T],j,F,R);I<O&&(O=I,L=T)}return L}e.getClosestThumbIndex=w;function h(A,j,F){A.style.transform="translate(".concat(j,"px, ").concat(F,"px)")}e.translate=h;var v=function(A){var j=[],F=null,R=function(){for(var L=[],O=0;O<arguments.length;O++)L[O]=arguments[O];j=L,!F&&(F=requestAnimationFrame(function(){F=null,A.apply(void 0,j)}))};return R};e.schd=v;function x(A,j,F){var R=A.slice(0);return R[j]=F,R}e.replaceAt=x;function S(A){var j=A.values,F=A.colors,R=A.min,L=A.max,O=A.direction,T=O===void 0?r.Direction.Right:O,I=A.rtl,z=I===void 0?!1:I;z&&T===r.Direction.Right?T=r.Direction.Left:z&&r.Direction.Left&&(T=r.Direction.Right);var B=j.slice(0).sort(function(U,G){return U-G}).map(function(U){return(U-R)/(L-R)*100}),N=B.reduce(function(U,G,H){return"".concat(U,", ").concat(F[H]," ").concat(G,"%, ").concat(F[H+1]," ").concat(G,"%")},"");return"linear-gradient(".concat(T,", ").concat(F[0]," 0%").concat(N,", ").concat(F[F.length-1]," 100%)")}e.getTrackBackground=S;function E(){}e.voidFn=E;function P(A){throw new Error("Didn't expect to get here")}e.assertUnreachable=P;var k=function(A,j,F,R,L){L===void 0&&(L=function(T){return T});var O=Math.ceil(t([A],Array.from(A.children),!0).reduce(function(T,I){var z=Math.ceil(I.getBoundingClientRect().width);if(I.innerText&&I.innerText.includes(F)&&I.childElementCount===0){var B=I.cloneNode(!0);B.innerHTML=L(j.toFixed(R)),B.style.visibility="hidden",document.body.appendChild(B),z=Math.ceil(B.getBoundingClientRect().width),document.body.removeChild(B)}return z>T?z:T},A.getBoundingClientRect().width));return O},_=function(A,j,F,R,L,O,T){T===void 0&&(T=function(B){return B});var I=[],z=function(B){var N=k(F[B],R[B],L,O,T),U=j[B].x;j.forEach(function(G,H){var X=G.x,ee=k(F[H],R[H],L,O,T);B!==H&&(U>=X&&U<=X+ee||U+N>=X&&U+N<=X+ee)&&(I.includes(H)||(I.push(B),I.push(H),I=t(t([],I,!0),[B,H],!1),z(H)))})};return z(A),Array.from(new Set(I.sort()))},M=function(A,j,F,R,L,O){R===void 0&&(R=.1),L===void 0&&(L=" - "),O===void 0&&(O=function(H){return H});var T=(0,e.getStepDecimals)(R),I=(0,n.useState)({}),z=I[0],B=I[1],N=(0,n.useState)(O(j[F].toFixed(T))),U=N[0],G=N[1];return(0,n.useEffect)(function(){if(A){var H=A.getThumbs();if(H.length<1)return;var X={},ee=A.getOffsets(),fe=_(F,ee,H,j,L,T,O),be=O(j[F].toFixed(T));if(fe.length){var ie=fe.reduce(function(yt,bo,Za,wo){return yt.length?t(t([],yt,!0),[ee[wo[Za]].x],!1):[ee[wo[Za]].x]},[]);if(Math.min.apply(Math,ie)===ee[F].x){var Me=[];fe.forEach(function(yt){Me.push(j[yt].toFixed(T))}),be=Array.from(new Set(Me.sort(function(yt,bo){return parseFloat(yt)-parseFloat(bo)}))).map(O).join(L);var Be=Math.min.apply(Math,ie),Ve=Math.max.apply(Math,ie),li=H[fe[ie.indexOf(Ve)]].getBoundingClientRect().width;X.left="".concat(Math.abs(Be-(Ve+li))/2,"px"),X.transform="translate(-50%, 0)"}else X.visibility="hidden"}G(be),B(X)}},[A,j]),[U,z]};e.useThumbOverlap=M;function $(A,j,F,R){var L=A.getBoundingClientRect(),O=L.left,T=L.top,I=L.width,z=L.height;return u(R)?Math.abs(F-(T+z/2)):Math.abs(j-(O+I/2))}var D=function(){var A,j=((A=navigator.userAgentData)===null||A===void 0?void 0:A.platform)||navigator.platform;return["iPad Simulator","iPhone Simulator","iPod Simulator","iPad","iPhone","iPod"].includes(j)||navigator.userAgent.includes("Mac")&&"ontouchend"in document};e.isIOS=D})(Tm);var xD=te&&te.__extends||function(){var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,i){r.__proto__=i}||function(r,i){for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(r[o]=i[o])},e(t,n)};return function(t,n){if(typeof n!="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");e(t,n);function r(){this.constructor=t}t.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}}(),bD=te&&te.__createBinding||(Object.create?function(e,t,n,r){r===void 0&&(r=n);var i=Object.getOwnPropertyDescriptor(t,n);(!i||("get"in i?!t.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,i)}:function(e,t,n,r){r===void 0&&(r=n),e[r]=t[n]}),wD=te&&te.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),SD=te&&te.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)n!=="default"&&Object.prototype.hasOwnProperty.call(e,n)&&bD(t,e,n);return wD(t,e),t},jv=te&&te.__spreadArray||function(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,o;r<i;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))};Object.defineProperty(km,"__esModule",{value:!0});var Es=SD(b),oe=Tm,Re=yo,_D=["ArrowRight","ArrowUp","k","PageUp"],CD=["ArrowLeft","ArrowDown","j","PageDown"],ED=function(e){xD(t,e);function t(n){var r=e.call(this,n)||this;if(r.trackRef=Es.createRef(),r.thumbRefs=[],r.state={draggedTrackPos:[-1,-1],draggedThumbIndex:-1,thumbZIndexes:new Array(r.props.values.length).fill(0).map(function(i,o){return o}),isChanged:!1,markOffsets:[]},r.getOffsets=function(){var i=r.props,o=i.direction,a=i.values,l=i.min,s=i.max,u=r.trackRef.current;if(!u)return console.warn("No track element found."),[];var d=u.getBoundingClientRect(),c=(0,oe.getPaddingAndBorder)(u);return r.getThumbs().map(function(y,p){var m={x:0,y:0},g=y.getBoundingClientRect(),w=(0,oe.getMargin)(y);switch(o){case Re.Direction.Right:return m.x=(w.left+c.left)*-1,m.y=((g.height-d.height)/2+c.top)*-1,m.x+=d.width*(0,oe.relativeValue)(a[p],l,s)-g.width/2,m;case Re.Direction.Left:return m.x=(w.right+c.right)*-1,m.y=((g.height-d.height)/2+c.top)*-1,m.x+=d.width-d.width*(0,oe.relativeValue)(a[p],l,s)-g.width/2,m;case Re.Direction.Up:return m.x=((g.width-d.width)/2+w.left+c.left)*-1,m.y=-c.left,m.y+=d.height-d.height*(0,oe.relativeValue)(a[p],l,s)-g.height/2,m;case Re.Direction.Down:return m.x=((g.width-d.width)/2+w.left+c.left)*-1,m.y=-c.left,m.y+=d.height*(0,oe.relativeValue)(a[p],l,s)-g.height/2,m;default:return(0,oe.assertUnreachable)(o)}})},r.getThumbs=function(){return r.trackRef&&r.trackRef.current?Array.from(r.trackRef.current.children).filter(function(i){return i.hasAttribute("aria-valuenow")}):(console.warn("No thumbs found in the track container. Did you forget to pass & spread the `props` param in renderTrack?"),[])},r.getTargetIndex=function(i){return r.getThumbs().findIndex(function(o){return o===i.target||o.contains(i.target)})},r.addTouchEvents=function(i){document.addEventListener("touchmove",r.schdOnTouchMove,{passive:!1}),document.addEventListener("touchend",r.schdOnEnd,{passive:!1}),document.addEventListener("touchcancel",r.schdOnEnd,{passive:!1})},r.addMouseEvents=function(i){document.addEventListener("mousemove",r.schdOnMouseMove),document.addEventListener("mouseup",r.schdOnEnd)},r.onMouseDownTrack=function(i){var o;if(!(i.button!==0||(0,oe.isIOS)()))if(i.persist(),i.preventDefault(),r.addMouseEvents(i.nativeEvent),r.props.values.length>1&&r.props.draggableTrack){if(r.thumbRefs.some(function(l){var s;return(s=l.current)===null||s===void 0?void 0:s.contains(i.target)}))return;r.setState({draggedTrackPos:[i.clientX,i.clientY]},function(){return r.onMove(i.clientX,i.clientY)})}else{var a=(0,oe.getClosestThumbIndex)(r.thumbRefs.map(function(l){return l.current}),i.clientX,i.clientY,r.props.direction);(o=r.thumbRefs[a].current)===null||o===void 0||o.focus(),r.setState({draggedThumbIndex:a},function(){return r.onMove(i.clientX,i.clientY)})}},r.onResize=function(){(0,oe.translateThumbs)(r.getThumbs(),r.getOffsets(),r.props.rtl),r.calculateMarkOffsets()},r.onTouchStartTrack=function(i){var o;if(i.persist(),r.addTouchEvents(i.nativeEvent),r.props.values.length>1&&r.props.draggableTrack){if(r.thumbRefs.some(function(l){var s;return(s=l.current)===null||s===void 0?void 0:s.contains(i.target)}))return;r.setState({draggedTrackPos:[i.touches[0].clientX,i.touches[0].clientY]},function(){return r.onMove(i.touches[0].clientX,i.touches[0].clientY)})}else{var a=(0,oe.getClosestThumbIndex)(r.thumbRefs.map(function(l){return l.current}),i.touches[0].clientX,i.touches[0].clientY,r.props.direction);(o=r.thumbRefs[a].current)===null||o===void 0||o.focus(),r.setState({draggedThumbIndex:a},function(){return r.onMove(i.touches[0].clientX,i.touches[0].clientY)})}},r.onMouseOrTouchStart=function(i){if(!r.props.disabled){var o=(0,oe.isTouchEvent)(i);if(!(!o&&i.button!==0)){var a=r.getTargetIndex(i);a!==-1&&(o?r.addTouchEvents(i):r.addMouseEvents(i),r.setState({draggedThumbIndex:a,thumbZIndexes:r.state.thumbZIndexes.map(function(l,s){return s===a?Math.max.apply(Math,r.state.thumbZIndexes):l<=r.state.thumbZIndexes[a]?l:l-1})}))}}},r.onMouseMove=function(i){i.preventDefault(),r.onMove(i.clientX,i.clientY)},r.onTouchMove=function(i){i.preventDefault(),r.onMove(i.touches[0].clientX,i.touches[0].clientY)},r.onKeyDown=function(i){var o=r.props,a=o.values,l=o.onChange,s=o.step,u=o.rtl,d=o.direction,c=r.state.isChanged,y=r.getTargetIndex(i.nativeEvent),p=u||d===Re.Direction.Left||d===Re.Direction.Down?-1:1;y!==-1&&(_D.includes(i.key)?(i.preventDefault(),r.setState({draggedThumbIndex:y,isChanged:!0}),l((0,oe.replaceAt)(a,y,r.normalizeValue(a[y]+p*(i.key==="PageUp"?s*10:s),y)))):CD.includes(i.key)?(i.preventDefault(),r.setState({draggedThumbIndex:y,isChanged:!0}),l((0,oe.replaceAt)(a,y,r.normalizeValue(a[y]-p*(i.key==="PageDown"?s*10:s),y)))):i.key==="Tab"?r.setState({draggedThumbIndex:-1},function(){c&&r.fireOnFinalChange()}):c&&r.fireOnFinalChange())},r.onKeyUp=function(i){var o=r.state.isChanged;r.setState({draggedThumbIndex:-1},function(){o&&r.fireOnFinalChange()})},r.onMove=function(i,o){var a=r.state,l=a.draggedThumbIndex,s=a.draggedTrackPos,u=r.props,d=u.direction,c=u.min,y=u.max,p=u.onChange,m=u.values,g=u.step,w=u.rtl;if(l===-1&&s[0]===-1&&s[1]===-1)return null;var h=r.trackRef.current;if(!h)return null;var v=h.getBoundingClientRect(),x=(0,oe.isVertical)(d)?v.height:v.width;if(s[0]!==-1&&s[1]!==-1){var S=i-s[0],E=o-s[1],P=0;switch(d){case Re.Direction.Right:case Re.Direction.Left:P=S/x*(y-c);break;case Re.Direction.Down:case Re.Direction.Up:P=E/x*(y-c);break;default:(0,oe.assertUnreachable)(d)}if(w&&(P*=-1),Math.abs(P)>=g/2){for(var k=0;k<r.thumbRefs.length;k++){if(m[k]===y&&Math.sign(P)===1||m[k]===c&&Math.sign(P)===-1)return;var _=m[k]+P;_>y?P=y-m[k]:_<c&&(P=c-m[k])}for(var M=m.slice(0),k=0;k<r.thumbRefs.length;k++)M=(0,oe.replaceAt)(M,k,r.normalizeValue(m[k]+P,k));r.setState({draggedTrackPos:[i,o]}),p(M)}}else{var $=0;switch(d){case Re.Direction.Right:$=(i-v.left)/x*(y-c)+c;break;case Re.Direction.Left:$=(x-(i-v.left))/x*(y-c)+c;break;case Re.Direction.Down:$=(o-v.top)/x*(y-c)+c;break;case Re.Direction.Up:$=(x-(o-v.top))/x*(y-c)+c;break;default:(0,oe.assertUnreachable)(d)}w&&($=y+c-$),Math.abs(m[l]-$)>=g/2&&p((0,oe.replaceAt)(m,l,r.normalizeValue($,l)))}},r.normalizeValue=function(i,o){var a=r.props,l=a.min,s=a.max,u=a.step,d=a.allowOverlap,c=a.values;return(0,oe.normalizeValue)(i,o,l,s,u,d,c)},r.onEnd=function(i){if(i.preventDefault(),document.removeEventListener("mousemove",r.schdOnMouseMove),document.removeEventListener("touchmove",r.schdOnTouchMove),document.removeEventListener("mouseup",r.schdOnEnd),document.removeEventListener("touchend",r.schdOnEnd),document.removeEventListener("touchcancel",r.schdOnEnd),r.state.draggedThumbIndex===-1&&r.state.draggedTrackPos[0]===-1&&r.state.draggedTrackPos[1]===-1)return null;r.setState({draggedThumbIndex:-1,draggedTrackPos:[-1,-1]},function(){r.fireOnFinalChange()})},r.fireOnFinalChange=function(){r.setState({isChanged:!1});var i=r.props,o=i.onFinalChange,a=i.values;o&&o(a)},r.updateMarkRefs=function(i){if(!i.renderMark){r.numOfMarks=void 0,r.markRefs=void 0;return}r.numOfMarks=(i.max-i.min)/r.props.step,r.markRefs=[];for(var o=0;o<r.numOfMarks+1;o++)r.markRefs[o]=Es.createRef()},r.calculateMarkOffsets=function(){if(!(!r.props.renderMark||!r.trackRef||!r.numOfMarks||!r.markRefs||r.trackRef.current===null)){for(var i=window.getComputedStyle(r.trackRef.current),o=parseInt(i.width,10),a=parseInt(i.height,10),l=parseInt(i.paddingLeft,10),s=parseInt(i.paddingTop,10),u=[],d=0;d<r.numOfMarks+1;d++){var c=9999,y=9999;if(r.markRefs[d].current){var p=r.markRefs[d].current.getBoundingClientRect();c=p.height,y=p.width}r.props.direction===Re.Direction.Left||r.props.direction===Re.Direction.Right?u.push([Math.round(o/r.numOfMarks*d+l-y/2),-Math.round((c-a)/2)]):u.push([Math.round(a/r.numOfMarks*d+s-c/2),-Math.round((y-o)/2)])}r.setState({markOffsets:u})}},n.step===0)throw new Error('"step" property should be a positive number');return r.schdOnMouseMove=(0,oe.schd)(r.onMouseMove),r.schdOnTouchMove=(0,oe.schd)(r.onTouchMove),r.schdOnEnd=(0,oe.schd)(r.onEnd),r.thumbRefs=n.values.map(function(){return Es.createRef()}),r.updateMarkRefs(n),r}return t.prototype.componentDidMount=function(){var n=this,r=this.props,i=r.values,o=r.min,a=r.step;this.resizeObserver=window.ResizeObserver?new window.ResizeObserver(this.onResize):{observe:function(){return window.addEventListener("resize",n.onResize)},unobserve:function(){return window.removeEventListener("resize",n.onResize)}},document.addEventListener("touchstart",this.onMouseOrTouchStart,{passive:!1}),document.addEventListener("mousedown",this.onMouseOrTouchStart,{passive:!1}),!this.props.allowOverlap&&(0,oe.checkInitialOverlap)(this.props.values),this.props.values.forEach(function(l){return(0,oe.checkBoundaries)(l,n.props.min,n.props.max)}),this.resizeObserver.observe(this.trackRef.current),(0,oe.translateThumbs)(this.getThumbs(),this.getOffsets(),this.props.rtl),this.calculateMarkOffsets(),i.forEach(function(l){(0,oe.isStepDivisible)(o,l,a)||console.warn("The `values` property is in conflict with the current `step`, `min`, and `max` properties. Please provide values that are accessible using the min, max, and step values.")})},t.prototype.componentDidUpdate=function(n,r){var i=this.props,o=i.max,a=i.min,l=i.step,s=i.values,u=i.rtl;(n.max!==o||n.min!==a||n.step!==l)&&this.updateMarkRefs(this.props),(0,oe.translateThumbs)(this.getThumbs(),this.getOffsets(),u),(n.max!==o||n.min!==a||n.step!==l||r.markOffsets.length!==this.state.markOffsets.length)&&(this.calculateMarkOffsets(),s.forEach(function(d){(0,oe.isStepDivisible)(a,d,l)||console.warn("The `values` property is in conflict with the current `step`, `min`, and `max` properties. Please provide values that are accessible using the min, max, and step values.")}))},t.prototype.componentWillUnmount=function(){var n={passive:!1};document.removeEventListener("mousedown",this.onMouseOrTouchStart,n),document.removeEventListener("mousemove",this.schdOnMouseMove),document.removeEventListener("touchmove",this.schdOnTouchMove),document.removeEventListener("touchstart",this.onMouseOrTouchStart),document.removeEventListener("mouseup",this.schdOnEnd),document.removeEventListener("touchend",this.schdOnEnd),this.resizeObserver.unobserve(this.trackRef.current)},t.prototype.render=function(){var n=this,r=this.props,i=r.label,o=r.labelledBy,a=r.renderTrack,l=r.renderThumb,s=r.renderMark,u=s===void 0?function(){return null}:s,d=r.values,c=r.min,y=r.max,p=r.allowOverlap,m=r.disabled,g=this.state,w=g.draggedThumbIndex,h=g.thumbZIndexes,v=g.markOffsets;return a({props:{style:{transform:"scale(1)",cursor:w>-1?"grabbing":this.props.draggableTrack?(0,oe.isVertical)(this.props.direction)?"ns-resize":"ew-resize":d.length===1&&!m?"pointer":"inherit"},onMouseDown:m?oe.voidFn:this.onMouseDownTrack,onTouchStart:m?oe.voidFn:this.onTouchStartTrack,ref:this.trackRef},isDragged:this.state.draggedThumbIndex>-1,disabled:m,children:jv(jv([],v.map(function(x,S,E){return u({props:{style:n.props.direction===Re.Direction.Left||n.props.direction===Re.Direction.Right?{position:"absolute",left:"".concat(x[0],"px"),marginTop:"".concat(x[1],"px")}:{position:"absolute",top:"".concat(x[0],"px"),marginLeft:"".concat(x[1],"px")},key:"mark".concat(S),ref:n.markRefs[S]},index:S})}),!0),d.map(function(x,S){var E=n.state.draggedThumbIndex===S;return l({index:S,value:x,isDragged:E,props:{style:{position:"absolute",zIndex:h[S],cursor:m?"inherit":E?"grabbing":"grab",userSelect:"none",touchAction:"none",WebkitUserSelect:"none",MozUserSelect:"none",msUserSelect:"none"},key:S,tabIndex:m?void 0:0,"aria-valuemax":p?y:d[S+1]||y,"aria-valuemin":p?c:d[S-1]||c,"aria-valuenow":x,draggable:!1,ref:n.thumbRefs[S],"aria-label":i,"aria-labelledby":o,role:"slider",onKeyDown:m?oe.voidFn:n.onKeyDown,onKeyUp:m?oe.voidFn:n.onKeyUp}})}),!0)})},t.defaultProps={label:"Accessibility label",labelledBy:null,step:1,direction:Re.Direction.Right,rtl:!1,disabled:!1,allowOverlap:!1,draggableTrack:!1,min:0,max:100},t}(Es.Component);km.default=ED;(function(e){var t=te&&te.__importDefault||function(o){return o&&o.__esModule?o:{default:o}};Object.defineProperty(e,"__esModule",{value:!0}),e.checkValuesAgainstBoundaries=e.relativeValue=e.useThumbOverlap=e.Direction=e.getTrackBackground=e.Range=void 0;var n=t(km);e.Range=n.default;var r=Tm;Object.defineProperty(e,"getTrackBackground",{enumerable:!0,get:function(){return r.getTrackBackground}}),Object.defineProperty(e,"useThumbOverlap",{enumerable:!0,get:function(){return r.useThumbOverlap}}),Object.defineProperty(e,"relativeValue",{enumerable:!0,get:function(){return r.relativeValue}}),Object.defineProperty(e,"checkValuesAgainstBoundaries",{enumerable:!0,get:function(){return r.checkValuesAgainstBoundaries}});var i=yo;Object.defineProperty(e,"Direction",{enumerable:!0,get:function(){return i.Direction}})})($p);const kD=C.div`
  padding: 20px 0;
`,TD=C.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`,Mv=C.input`
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
`;const PD=C.div`
  height: 6px;
  width: 100%;
  border-radius: 4px;
  background: ${({background:e})=>e};
`,OD=C.div`
  height: 18px;
  width: 18px;
  border-radius: 50%;
  background: #583d2d;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`,a2=({childValues:e,onChange:t})=>{const o=(e==null?void 0:e[0])??10,a=(e==null?void 0:e[1])??1e4,l=o!==a,[s,u]=b.useState([o,a]);b.useEffect(()=>{e&&e.length===2&&(u(e),t&&t(e))},[e,t]);const d=p=>{u(p),t&&t(p)},c=(p,m)=>{const g=m===""?"":Number(m),w=[...s];w[p]=g,d(w)},y=p=>{const m=[...s];p===0?((m[0]===""||m[0]<o)&&(m[0]=o),m[0]>m[1]-50&&(m[0]=m[1]-50)):((m[1]===""||m[1]>a)&&(m[1]=a),m[1]<m[0]+50&&(m[1]=m[0]+50)),d(m)};return f.jsx(f.Fragment,{children:l&&f.jsxs(kD,{children:[f.jsxs(TD,{children:[f.jsx(Mv,{type:"number",value:s[0],min:o,max:s[1],onChange:p=>c(0,p.target.value),onBlur:()=>y(0)}),f.jsx(Mv,{type:"number",value:s[1],min:s[0],max:a,onChange:p=>c(1,p.target.value),onBlur:()=>y(1)})]}),f.jsx($p.Range,{values:s,step:50,min:o,max:a,onChange:d,renderTrack:({props:p,children:m})=>f.jsx(PD,{...p,background:$p.getTrackBackground({values:s,colors:["#ddd","#85683d","#ddd"],min:o,max:a}),children:m}),renderThumb:({props:p})=>f.jsx(OD,{...p})})]})})},jD=({childValues:e,category:t,selectedFilters:n,setSelectedFilters:r,setPriceRange:i})=>{const[o,a]=b.useState([]),[l,s]=b.useState({});b.useEffect(()=>{t&&(async()=>{try{const m=await fetch(`https://backenddidiv-production.up.railway.app/api/products?populate=*&filters[category][title][$eq]=${encodeURIComponent(t)}&pagination[pageSize]=200`);console.log(t);const g=await m.json();console.log("dataaaa",g.data);const w=g.data||[],h={};w.forEach(x=>{var S;(S=x.attributes)==null||S.forEach(E=>{h[E.label]||(h[E.label]=new Set),h[E.label].add(E.value)})});const v=Object.entries(h).map(([x,S])=>({type:"checkbox",label:x,name:x.toLowerCase(),options:Array.from(S)}));console.log("fillltr",v),a(v)}catch(m){console.error(m)}})()},[t]);const u=p=>{s(m=>({...m,[p]:!m[p]}))},d=(p,m)=>{r(g=>{const w=g[p]||[];return w.includes(m)?{...g,[p]:w.filter(h=>h!==m)}:{...g,[p]:[...w,m]}})},c=Object.values(n).some(p=>Array.isArray(p)&&p.length>0),y=()=>{c&&r({})};return console.log(c),f.jsxs(cD,{children:[f.jsxs(dD,{children:["Фільтри ",f.jsx(Hb,{size:20})]}),(o||[]).map(p=>{var g;const m=!!l[p.name];return f.jsxs(fD,{children:[f.jsxs(pD,{onClick:()=>u(p.name),children:[f.jsx(hD,{children:p.label}),f.jsx(mD,{isOpen:m})]}),f.jsxs(gD,{isOpen:m,children:[p.type==="checkbox"&&((g=p.options)==null?void 0:g.map(w=>{var h;return f.jsxs(vD,{children:[f.jsx(Mp,{checked:((h=n[p.name])==null?void 0:h.includes(w))||!1,onChange:()=>d(p.name,w)}),f.jsx(yD,{}),w]},w)})),p.type==="range"&&f.jsx(a2,{onChange:i,childValues:e})]})]},p.name)}),f.jsx(o2,{onClick:y,disabled:!c,children:"Скинути обрані фільтри"})]})},MD=C.aside`
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
`;const $D=C.div`
  border-bottom: 1px solid #eee;
  padding: 12px;
  margin-bottom: 12px;

  &:last-child {
    border-bottom: none;
  }
`,ID=C.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  padding: 8px 0;
  
  &:hover p {
    color: #85683d;
  }
`,DD=C.p`
  font-weight: 600;
  font-size: 16px;
  margin: 0;
  color: #222;
  transition: color 0.2s;
`,LD=C.span`
  border: solid #555;
  border-width: 0 2px 2px 0;
  display: inline-block;
  padding: 3px;
  transform: ${e=>e.isOpen?"rotate(-135deg)":"rotate(45deg)"};
  transition: transform 0.3s ease;
`,AD=C.div`
  max-height: ${e=>e.isOpen?"500px":"0"};
  overflow: hidden;
  transition: max-height 0.3s ease-in-out, opacity 0.3s;
  opacity: ${e=>e.isOpen?"1":"0"};
  padding: ${e=>e.isOpen?"12px":"0"};
`,RD=C.label`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  cursor: pointer;
  font-size: 15px;
  color: #444;

  &:hover span:first-of-type {
    border-color: #85683d;
  }
`,Ip=C.input.attrs({type:"checkbox"})`
  display: none;
`,FD=C.span`
  width: 20px;
  height: 20px;
  border: 2px solid #ddd;
  border-radius: 4px;
  margin-right: 12px;
  position: relative;
  flex-shrink: 0;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);

  ${Ip}:checked + & {
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

  ${Ip}:checked + &::after {
    opacity: 1;
  }
`,zD=({childValues:e,category:t,selectedFilters:n,setSelectedFilters:r,setPriceRange:i})=>{const[o,a]=b.useState({}),[l,s]=b.useState([]);b.useEffect(()=>{t&&(async()=>{try{const y=await fetch(`https://backenddidiv-production.up.railway.app/api/products?populate=*&filters[category][title][$eq]=${encodeURIComponent(t)}&pagination[pageSize]=200`);console.log(t);const p=await y.json();console.log("dataaaa",p.data);const m=p.data||[],g={};m.forEach(h=>{var v;(v=h.attributes)==null||v.forEach(x=>{g[x.label]||(g[x.label]=new Set),g[x.label].add(x.value)})});const w=Object.entries(g).map(([h,v])=>({type:"checkbox",label:h,name:h.toLowerCase(),options:Array.from(v)}));console.log("fillltr",w),s(w)}catch(y){console.error(y)}})()},[t]);const u=c=>{a(y=>({...y,[c]:!y[c]}))},d=(c,y)=>{r(p=>{const m=p[c]||[];return m.includes(y)?{...p,[c]:m.filter(g=>g!==y)}:{...p,[c]:[...m,y]}})};return f.jsx(MD,{children:(l||[]).map(c=>{var p;const y=!!o[c.name];return f.jsxs($D,{children:[f.jsxs(ID,{onClick:()=>u(c.name),children:[f.jsx(DD,{children:c.label}),f.jsx(LD,{isOpen:y})]}),f.jsxs(AD,{isOpen:y,children:[c.type==="checkbox"&&((p=c.options)==null?void 0:p.map(m=>{var g;return f.jsxs(RD,{children:[f.jsx(Ip,{checked:((g=n[c.name])==null?void 0:g.includes(m))||!1,onChange:()=>d(c.name,m)}),f.jsx(FD,{}),m]},m)})),c.type==="range"&&f.jsx(a2,{onChange:i,childValues:e})]})]},c.name)})})},ND=({setValues:e,category:t,selectedFilters:n={},priceRange:r,sortType:i,setIsSortOpen:o,isSortOpen:a,setSortType:l,sortOrder:s,setSortOrder:u})=>{const[d,c]=b.useState([]),[y,p]=b.useState(!0),[m,g]=b.useState(1),w=24;let h=d;const v=b.useRef(null);b.useEffect(()=>{const j=F=>{v.current&&!v.current.contains(F.target)&&o(!1)};return document.addEventListener("mousedown",j),()=>{document.removeEventListener("mousedown",j)}},[o]),b.useEffect(()=>{(async()=>{try{p(!0);const R=await(await fetch(`https://backenddidiv-production.up.railway.app/api/products?populate=*&filters[category][title][$eq]=${encodeURIComponent(t)}&pagination[pageSize]=500`)).json();c(R.data);const L=R.data.map(O=>O.price);if(L.length>0){let O=Math.min(...L),T=Math.max(...L);e([O,T])}}catch(F){console.error("Error fetching products:",F)}finally{p(!1)}})()},[t,e]),b.useEffect(()=>{g(1)},[t,n,r]),b.useEffect(()=>{window.scrollTo({top:0,behavior:"smooth"})},[m]);const x=On(),S=jn(),E=Ye(j=>j.favorites.items),P=Ye(j=>j.cart.items),k=(j,F)=>{F.stopPropagation();const R=E.some(L=>L.id===j.id);S(ai(j)),R?q.warning(`${j.name} видалено з обраного`):q.info(`${j.name} додано в обране`)};if(Object.keys(n).forEach(j=>{const F=n[j];Array.isArray(F)&&F.length>0&&(h=h.filter(R=>{var O;const L=(O=R.attributes)==null?void 0:O.find(T=>T.label.toLowerCase()===j.toLowerCase());return L&&F.includes(L.value)}))}),r&&r.length===2){const[j,F]=r;console.log(j,F)}const _=b.useMemo(()=>{const j=[...h],F=R=>R.new_price&&R.new_price<R.price?R.new_price:R.price;switch(i){case"name":return j.sort((R,L)=>s==="asc"?R.name.localeCompare(L.name):L.name.localeCompare(R.name));case"price":return j.sort((R,L)=>{const O=F(R),T=F(L);return s==="asc"?O-T:T-O});case"date":return j.sort((R,L)=>s==="asc"?new Date(R.createdAt)-new Date(L.createdAt):new Date(L.createdAt)-new Date(R.createdAt));default:return j}},[i,h,s]),M=m*w,$=M-w,D=_.slice($,M),A=Math.ceil(h.length/w);return y?f.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"100vw",height:"100vh"},children:f.jsx(qa,{height:100,width:100,radius:5,color:"var(--orange-color)",ariaLabel:"ball-triangle-loading",wrapperStyle:{},wrapperClass:"",visible:!0})}):(console.log(D),console.log("filteredProducts.length:",h.length),console.log("currentProducts.length:",D.length),f.jsxs($j,{children:[f.jsxs(Ij,{children:[f.jsx(Dj,{children:t}),f.jsxs(Vj,{ref:v,children:[f.jsxs(Uj,{onClick:()=>o(j=>!j),children:["Сортування",f.jsx($u,{strokeWidth:.9,size:22})]}),a&&f.jsxs(Hj,{children:[f.jsx(pi,{onClick:()=>{l("name"),u("asc"),o(!1)},children:"А-Я"}),f.jsx(pi,{onClick:()=>{l("name"),u("desc"),o(!1)},children:"Я-А"}),f.jsx(pi,{onClick:()=>{l("price"),u("asc"),o(!1)},children:"Ціна ↑"}),f.jsx(pi,{onClick:()=>{l("price"),u("desc"),o(!1)},children:"Ціна ↓"}),f.jsx(pi,{onClick:()=>{l("date"),u("desc"),o(!1)},children:"Спочатку новіші"}),f.jsx(pi,{onClick:()=>{l("date"),u("asc"),o(!1)},children:"Спочатку старіші"})]})]})]}),f.jsx(Or,{autoClose:1500}),h.length===0?f.jsx(Lj,{children:f.jsx("p",{style:{textAlign:"center",fontSize:"30px",marginTop:"50px",marginLeft:"auto",marginRight:"auto"},children:"Нічого не знайдено 😢"})}):f.jsx(Aj,{children:D.map(j=>{var U,G;const F=E.some(H=>H.id===j.id),R=P.find(H=>H.id===j.id),O=(R?R.quantity:0)>=(j.stock||0),T=(j==null?void 0:j.available)??!0,I=j.new_price&&j.new_price<j.price,z=I?j.new_price:j.price,B=I?Math.round((j.price-j.new_price)/j.price*100):0,N=(H,X)=>{if(X.stopPropagation(),O){q.error("Товар уже у кошику");return}S(ho({...H,quantity:1})),q.success(`${H.name} додано в кошик!`)};return f.jsxs(Rj,{onClick:()=>x(`/product/${j.id}`),style:{cursor:"pointer"},children:[!T&&f.jsx(lm,{children:"Заброньовано"}),f.jsx(Fj,{src:((G=(U=j.images)==null?void 0:U[0])==null?void 0:G.url)||"/placeholder.jpg",alt:j.name,onError:H=>{H.currentTarget.onerror=null,H.currentTarget.src=no}}),f.jsx(Nj,{children:j.name}),f.jsxs(zj,{children:[f.jsx(gw,{children:f.jsxs(vw,{children:[f.jsxs(yw,{$discount:I,children:[z.toLocaleString()," грн"]}),I&&f.jsxs(xw,{children:[j.price.toLocaleString()," грн"]}),I&&f.jsxs(bw,{children:["-",B,"%"]})]})}),f.jsxs(mw,{children:[T&&f.jsx(Gl,{onClick:H=>N(j,H),children:f.jsx(po,{size:24,color:R?"var(--orange-color)":"black",strokeWidth:2})}),f.jsx(Gl,{onClick:H=>k(j,H),children:f.jsx(Ua,{size:24,fill:F?"#ff4d4f":"none",color:F?"#ff4d4f":"#000000",strokeWidth:F?1:2})})]})]})]},j.id)})}),h.length>w&&f.jsxs(Bj,{children:[f.jsx(bd,{onClick:()=>g(j=>Math.max(j-1,1)),disabled:m===1,children:"Назад"}),Array.from({length:A},(j,F)=>f.jsx(bd,{onClick:()=>g(F+1),active:m===F+1,children:F+1},F)),f.jsx(bd,{onClick:()=>g(j=>Math.min(j+1,A)),disabled:m===A,children:"Вперед"})]})]}))},BD=()=>{const[e,t]=b.useState({});console.log(e);const{category:n}=ly(),[r,i]=b.useState(!1),[o,a]=b.useState(!1),[l,s]=b.useState("date"),[u,d]=b.useState("desc"),[c,y]=b.useState([]),[p,m]=b.useState([0,0]);console.log(c),console.log(n);const g=Object.values(e).some(h=>Array.isArray(h)&&h.length>0),w=()=>{g&&t({})};return f.jsxs(ZI,{children:[f.jsxs(QI,{children:[f.jsxs(JI,{children:[f.jsxs(eD,{onClick:()=>i(!0),children:["Фільтр",f.jsx(tD,{children:f.jsx("use",{href:`${cn}#icon-filter`})})]}),f.jsxs(lD,{children:[f.jsxs(nD,{onClick:()=>a(h=>!h),children:["Сортування",f.jsx($u,{strokeWidth:.9,size:22})]}),o&&f.jsxs(uD,{children:[f.jsx(mi,{onClick:()=>{s("name"),d("asc"),a(!1)},children:"А-Я"}),f.jsx(mi,{onClick:()=>{s("name"),d("desc"),a(!1)},children:"Я-А"}),f.jsx(mi,{onClick:()=>{s("price"),d("asc"),a(!1)},children:"Ціна ↑"}),f.jsx(mi,{onClick:()=>{s("price"),d("desc"),a(!1)},children:"Ціна ↓"}),f.jsx(mi,{onClick:()=>{s("date"),d("desc"),a(!1)},children:"Спочатку новіші"}),f.jsx(mi,{onClick:()=>{s("date"),d("asc"),a(!1)},children:"Спочатку старіші"})]})]})]}),f.jsx(jD,{category:n,selectedFilters:e,setSelectedFilters:t,childValues:c,priceRange:p,setPriceRange:m}),f.jsx(ND,{priceRange:p,values:c,setValues:y,category:n,selectedFilters:e,sortType:l,setIsSortOpen:a,isSortOpen:o,setSortType:s,sortOrder:u,setSortOrder:d}),r&&f.jsx(rD,{onClick:()=>i(!1),open:r,children:f.jsxs(iD,{onClick:h=>h.stopPropagation(),open:r,children:[f.jsxs(oD,{children:[f.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[f.jsx(Hb,{size:20}),f.jsx("h2",{children:"Фільтри"})]}),f.jsx(Gb,{size:24,onClick:()=>i(!1),style:{cursor:"pointer"}})]}),f.jsx(zD,{childValues:c,category:n,selectedFilters:e,setSelectedFilters:t,priceRange:p,setPriceRange:m}),f.jsxs(aD,{children:[f.jsx(o2,{onClick:w,disabled:!g,children:"Скинути обрані фільтри"}),f.jsx(sD,{onClick:()=>i(!1),children:"Показати результати"})]})]})})]})," "]})},$v=C.div`
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
`,VD=C.div`
  font-family: var(--main-font);
  font-size: 14px;
  color: #8c8c8c;
  margin-bottom: 15px;

  a {
    text-decoration: none;
    color: inherit;
  }
`,UD=C.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,HD=C.div``;C.div`
  position: absolute;
  top: 10px;
  left: 10px;
  background: #27ae60;
  color: white;
  padding: 5px 15px;
  font-weight: bold;
  z-index: 2;
`;const WD=C.img`
  width: 100%;
  border-radius: 4px;
  background: #f9f9f9;
   @media screen and (max-width: 300px) {
   width: 260px;
  }
`,GD=C.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
      flex-wrap: wrap;
`,YD=C.img`
  width: 60px;
  height: 60px;
  border: 1px solid #ddd;
  cursor: pointer;
  object-fit: cover;
`,qD=C.div``,XD=C.h1`
  font-size: 28px;
  margin-bottom: 10px;
  color: #333;
  font-family: var(--second-font);
  font-weight: 500;
`,KD=C.div`

  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 20px;
`,QD=C.div`
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

`,ZD=C.span`
  color: #27ae60;
  font-size: 17px;
`,JD=C.div`
  background: #fdfdfd;
  border: 1px solid #eee;
  padding: 25px;
  border-radius: 8px;
   @media screen and (max-width: 300px) {
   width: 260px;
  }
`,e6=C.div`
  font-family: var(--second-font);
  font-weight: 500;
  display: flex;
  align-items: baseline;
  gap: 15px;
  margin-bottom: 20px;
`,Iv=C.span`
  font-size: 32px;
  font-weight: 700;
    color: ${({$discount:e})=>e?"var(--red-color)":"#111"};
`,t6=C.span`
  font-size: 14px;
  text-decoration: line-through;
  color: #999;
`,n6=C.span`
  background:var(--red-color);
  color: white;
  font-size: 12px;
  padding: 2px 6px;
  border-radius: 6px;
`,r6=C.div`
  display: flex;
  gap: 15px;
  margin-bottom: 15px;
  font-family: var(--second-font);
  font-weight: 500;
`,i6=C.div`
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
`,o6=C.button`
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
`;const Dv=C.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  /* max-width: 800px; */
   @media (min-width: 767px) {
    padding-top:18px;
  }
`,a6=C.h3`
font-family: var(--second-font);
      border-bottom: 2px solid #717171;
    border-bottom: 2px solid var(--second-color);
    color: var(--second-color);
      padding: 10px 0;
`,Lv=C.div`
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
`;C.div`
  margin: 20px 0;
  font-size: 14px;
  color: #444;
`;const s6=C.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  align-items: start;

  @media (max-width: 767px) {
    display: block;
  }
`,Av=C.div`
  font-family: var(--second-font);
  font-weight: 500;
  margin-top: 20px;
`,Rv=C.div`
  display: flex;
  gap: 30px;
  border-bottom: 1px solid #ccc;
`,Ro=C.button`
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
`,Fv=C.div`
  font-family: var(--second-font);
  font-weight: 500;
  padding: 15px;
  background: #fff;
`,zv=C.p`
  font-size: 20px;
  font-family: var(--second-font);
  font-weight: 300;
`,l6=C.button`
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
`,u6=C.svg`
  width: 20px;
  height: 20px;

  fill: ${({$active:e})=>e?"white":" var(--black-color)"};
`,s2=C.span`

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
`,c6=C.div`
  position: relative;
  display: inline-block;

  &:hover ${s2} {
  opacity: ${({$active:e})=>e?1:0};
    transform: translateX(-50%) translateY(0);
  }
`,l2="carousel",u2="controller",d6="navigation",f6="no-scroll",Pm="portal",p6="root",c2="toolbar",Nv="zoom",Rd="loading",Fd="error",zd="complete",h6="placeholder",m6=e=>`active-slide-${e}`,g6="fullsize",Om="flex_center",v6="no_scroll",d2="no_scroll_padding",jm="slide",f2="slide_wrapper",y6="slide_wrapper_interactive",Fr="prev",zr="next",Bv="swipe",io="close",p2="onPointerDown",h2="onPointerMove",m2="onPointerUp",g2="onPointerLeave",v2="onPointerCancel",Mm="onKeyDown",x6="onKeyUp",$m="onWheel",b6="Escape",w6="ArrowLeft",S6="ArrowRight",_6="button",Dp="icon",y2="contain",Vv="cover",x2="Unknown action type",b2="yarl__";function Tn(...e){return e.filter(Boolean).join(" ")}function ae(e){return`${b2}${e}`}function bt(e){return`--${b2}${e}`}function Qa(e,t){return`${e}${t?`_${t}`:""}`}function Im(e){return t=>Qa(e,t)}function oo(e,t){var n;return(n=e==null?void 0:e[t])!==null&&n!==void 0?n:t}function C6(e,t,n){return oo(e,"{index} of {total}").replace(/\{index}/g,`${Fm(n,t.length)+1}`).replace(/\{total}/g,`${t.length}`)}function Dm(...e){return()=>{e.forEach(t=>{t()})}}function Jn(e,t,n){return()=>{const r=b.useContext(n);if(!r)throw new Error(`${e} must be used within a ${t}.Provider`);return r}}function Lm(){return typeof window<"u"}function Am(e,t=0){const n=10**t;return Math.round((e+Number.EPSILON)*n)/n}function xo(e){return e.type===void 0||e.type==="image"}function Rm(e,t){return e.imageFit===Vv||e.imageFit!==y2&&t===Vv}function vc(e){return typeof e=="string"?Number.parseInt(e,10):e}function Jl(e){if(typeof e=="number")return{pixel:e};if(typeof e=="string"){const t=vc(e);return e.endsWith("%")?{percent:t}:{pixel:t}}return{pixel:0}}function E6(e,t){const n=Jl(t),r=n.percent!==void 0?e.width/100*n.percent:n.pixel;return{width:Math.max(e.width-2*r,0),height:Math.max(e.height-2*r,0)}}function k6(){return(Lm()?window==null?void 0:window.devicePixelRatio:void 0)||1}function Fm(e,t){return t>0?(e%t+t)%t:0}function w2(e){return e.length>0}function S2(e,t){return e[Fm(t,e.length)]}function Lp(e,t){return w2(e)?S2(e,t):void 0}function T6(e){return xo(e)?e.src:void 0}function P6(e,t,n){if(!n)return e;const{buttons:r,...i}=e,o=r.findIndex(l=>l===t),a=b.isValidElement(n)?b.cloneElement(n,{key:t},null):n;if(o>=0){const l=[...r];return l.splice(o,1,a),{buttons:l,...i}}return{buttons:[a,...r],...i}}function O6(e,t,n=0){return Math.min(e.preload,Math.max(e.finite?t.length-1:Math.floor(t.length/2),n))}const j6=Number(b.version.split(".")[0])>=19;function M6(e){return{inert:j6?e:e?"":void 0}}function $6(e){e.scrollTop}const Ap={open:!1,close:()=>{},index:0,slides:[],render:{},plugins:[],toolbar:{buttons:[io]},labels:{},animation:{fade:250,swipe:500,easing:{fade:"ease",swipe:"ease-out",navigation:"ease-in-out"}},carousel:{finite:!1,preload:2,padding:"16px",spacing:"30%",imageFit:y2,imageProps:{}},controller:{ref:null,focus:!0,aria:!1,touchAction:"none",closeOnPullUp:!1,closeOnPullDown:!1,closeOnBackdropClick:!1,preventDefaultWheelX:!0,preventDefaultWheelY:!1,disableSwipeNavigation:!1},portal:{},noScroll:{disabled:!1},on:{},styles:{},className:""};function jr(e,t){return{name:e,component:t}}function Ue(e,t){return{module:e,children:t}}function _2(e,t,n){return e.module.name===t?n(e):e.children?[Ue(e.module,e.children.flatMap(r=>{var i;return(i=_2(r,t,n))!==null&&i!==void 0?i:[]}))]:[e]}function gi(e,t,n){return e.flatMap(r=>{var i;return(i=_2(r,t,n))!==null&&i!==void 0?i:[]})}function I6(e,t=[],n=[]){let r=e;const i=p=>{const m=[...r];for(;m.length>0;){const g=m.pop();if((g==null?void 0:g.module.name)===p)return!0;g!=null&&g.children&&m.push(...g.children)}return!1},o=(p,m)=>{if(p===""){r=[Ue(m,r)];return}r=gi(r,p,g=>[Ue(m,[g])])},a=(p,m)=>{r=gi(r,p,g=>[Ue(g.module,[Ue(m,g.children)])])},l=(p,m,g)=>{r=gi(r,p,w=>{var h;return[Ue(w.module,[...g?[Ue(m)]:[],...(h=w.children)!==null&&h!==void 0?h:[],...g?[]:[Ue(m)]])]})},s=(p,m,g)=>{r=gi(r,p,w=>[...g?[Ue(m)]:[],w,...g?[]:[Ue(m)]])},u=p=>{a(u2,p)},d=(p,m)=>{r=gi(r,p,g=>[Ue(m,g.children)])},c=p=>{r=gi(r,p,m=>m.children)},y=p=>{n.push(p)};return t.forEach(p=>{p({contains:i,addParent:o,append:a,addChild:l,addSibling:s,addModule:u,replace:d,remove:c,augment:y})}),{config:r,augmentation:p=>n.reduce((m,g)=>g(m),p)}}const C2=b.createContext(null),E2=Jn("useA11yContext","A11yContext",C2);function D6({children:e}){const[t,n]=b.useState(!1),[r,i]=b.useState(!1),o=b.useMemo(()=>({focusWithin:t,trackFocusWithin:(l,s)=>{const u=d=>c=>{var y;c.currentTarget.contains(c.relatedTarget)||n(d),(y=d?l:s)===null||y===void 0||y(c)};return{onFocus:u(!0),onBlur:u(!1)}},autoPlaying:r,setAutoPlaying:i}),[t,r]);return b.createElement(C2.Provider,{value:o},e)}const k2=b.createContext(null),yc=Jn("useDocument","DocumentContext",k2);function L6({nodeRef:e,children:t}){const n=b.useMemo(()=>{const r=o=>{var a;return((a=o||e.current)===null||a===void 0?void 0:a.ownerDocument)||document};return{getOwnerDocument:r,getOwnerWindow:o=>{var a;return((a=r(o))===null||a===void 0?void 0:a.defaultView)||window}}},[e]);return b.createElement(k2.Provider,{value:n},t)}const T2=b.createContext(null),xc=Jn("useEvents","EventsContext",T2);function A6({children:e}){const[t]=b.useState({});b.useEffect(()=>()=>{Object.keys(t).forEach(r=>delete t[r])},[t]);const n=b.useMemo(()=>{const r=(a,l)=>{var s;(s=t[a])===null||s===void 0||s.splice(0,t[a].length,...t[a].filter(u=>u!==l))};return{publish:(...[a,l])=>{var s;(s=t[a])===null||s===void 0||s.forEach(u=>u(l))},subscribe:(a,l)=>(t[a]||(t[a]=[]),t[a].push(l),()=>r(a,l)),unsubscribe:r}},[t]);return b.createElement(T2.Provider,{value:n},e)}const P2=b.createContext(null),Kt=Jn("useLightboxProps","LightboxPropsContext",P2);function R6({children:e,...t}){return b.createElement(P2.Provider,{value:t},e)}const O2=b.createContext(null),Mr=Jn("useLightboxState","LightboxStateContext",O2),j2=b.createContext(null),F6=Jn("useLightboxDispatch","LightboxDispatchContext",j2);function z6(e,t){switch(t.type){case"swipe":{const{slides:n}=e,r=(t==null?void 0:t.increment)||0,i=e.globalIndex+r,o=Fm(i,n.length),a=Lp(n,o),l=r||t.duration!==void 0?{increment:r,duration:t.duration,easing:t.easing}:void 0;return{slides:n,currentIndex:o,globalIndex:i,currentSlide:a,animation:l}}case"update":return t.slides!==e.slides||t.index!==e.currentIndex?{slides:t.slides,currentIndex:t.index,globalIndex:t.index,currentSlide:Lp(t.slides,t.index)}:e;default:throw new Error(x2)}}function N6({slides:e,index:t,children:n}){const[r,i]=b.useReducer(z6,{slides:e,currentIndex:t,globalIndex:t,currentSlide:Lp(e,t)}),[o,a]=b.useState(e),[l,s]=b.useState(t);(e!==o||t!==l)&&(a(e),s(t),i({type:"update",slides:e,index:t}));const u=b.useMemo(()=>({...r,state:r,dispatch:i}),[r,i]);return b.createElement(j2.Provider,{value:i},b.createElement(O2.Provider,{value:u},n))}const M2=b.createContext(null),bc=Jn("useTimeouts","TimeoutsContext",M2);function B6({children:e}){const[t]=b.useState([]);b.useEffect(()=>()=>{t.forEach(r=>window.clearTimeout(r)),t.splice(0,t.length)},[t]);const n=b.useMemo(()=>{const r=a=>{t.splice(0,t.length,...t.filter(l=>l!==a))};return{setTimeout:(a,l)=>{const s=window.setTimeout(()=>{r(s),a()},l);return t.push(s),s},clearTimeout:a=>{a!==void 0&&(r(a),window.clearTimeout(a))}}},[t]);return b.createElement(M2.Provider,{value:n},e)}const zm=b.forwardRef(function({label:t,className:n,icon:r,renderIcon:i,onClick:o,style:a,...l},s){const{styles:u,labels:d}=Kt(),c=oo(d,t);return b.createElement("button",{ref:s,type:"button",title:c,"aria-label":c,className:Tn(ae(_6),n),onClick:o,style:{...a,...u.button},...l},i?i():b.createElement(r,{className:ae(Dp),style:u.icon}))});function V6(e,t){const n=r=>b.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24","aria-hidden":"true",focusable:"false",...r},t);return n.displayName=e,n}function si(e,t){return V6(e,b.createElement("g",{fill:"currentColor"},b.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),t))}const U6=si("Close",b.createElement("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"})),H6=si("Previous",b.createElement("path",{d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"})),W6=si("Next",b.createElement("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"})),G6=si("Loading",b.createElement(b.Fragment,null,Array.from({length:8}).map((e,t,n)=>b.createElement("line",{key:t,x1:"12",y1:"6.5",x2:"12",y2:"1.8",strokeLinecap:"round",strokeWidth:"2.6",stroke:"currentColor",strokeOpacity:1/n.length*(t+1),transform:`rotate(${360/n.length*t}, 12, 12)`})))),Y6=si("Error",b.createElement("path",{d:"M21.9,21.9l-8.49-8.49l0,0L3.59,3.59l0,0L2.1,2.1L0.69,3.51L3,5.83V19c0,1.1,0.9,2,2,2h13.17l2.31,2.31L21.9,21.9z M5,18 l3.5-4.5l2.5,3.01L12.17,15l3,3H5z M21,18.17L5.83,3H19c1.1,0,2,0.9,2,2V18.17z"})),Pn=Lm()?b.useLayoutEffect:b.useEffect;function Nm(){const[e,t]=b.useState(!1);return b.useEffect(()=>{var n,r;const i=(n=window.matchMedia)===null||n===void 0?void 0:n.call(window,"(prefers-reduced-motion: reduce)");t(i==null?void 0:i.matches);const o=a=>t(a.matches);return(r=i==null?void 0:i.addEventListener)===null||r===void 0||r.call(i,"change",o),()=>{var a;return(a=i==null?void 0:i.removeEventListener)===null||a===void 0?void 0:a.call(i,"change",o)}},[]),e}function q6(e){let t=0,n=0,r=0;const o=window.getComputedStyle(e).transform.match(/matrix.*\((.+)\)/);if(o){const a=o[1].split(",").map(vc);a.length===6?(t=a[4],n=a[5]):a.length===16&&(t=a[12],n=a[13],r=a[14])}return{x:t,y:n,z:r}}function Uv(e,t){const n=b.useRef(void 0),r=b.useRef(void 0),i=Nm();return Pn(()=>{var o,a,l;if(e.current&&n.current!==void 0&&!i){const{keyframes:s,duration:u,easing:d,onfinish:c}=t(n.current,e.current.getBoundingClientRect(),q6(e.current))||{};if(s&&u){(o=r.current)===null||o===void 0||o.cancel(),r.current=void 0;try{r.current=(l=(a=e.current).animate)===null||l===void 0?void 0:l.call(a,s,{duration:u,easing:d})}catch(y){console.error(y)}r.current&&(r.current.onfinish=()=>{r.current=void 0,c==null||c()})}}n.current=void 0}),{prepareAnimation:o=>{n.current=o},isAnimationPlaying:()=>{var o;return((o=r.current)===null||o===void 0?void 0:o.playState)==="running"}}}function $2(){const e=b.useRef(null),t=b.useRef(void 0),[n,r]=b.useState();return{setContainerRef:b.useCallback(o=>{e.current=o,t.current&&(t.current.disconnect(),t.current=void 0);const a=()=>{if(o){const l=window.getComputedStyle(o),s=u=>parseFloat(u)||0;r({width:Math.round(o.clientWidth-s(l.paddingLeft)-s(l.paddingRight)),height:Math.round(o.clientHeight-s(l.paddingTop)-s(l.paddingBottom))})}else r(void 0)};a(),o&&typeof ResizeObserver<"u"&&(t.current=new ResizeObserver(a),t.current.observe(o))},[]),containerRef:e,containerRect:n}}function rl(){const e=b.useRef(void 0),{setTimeout:t,clearTimeout:n}=bc();return b.useCallback((r,i)=>{n(e.current),e.current=t(r,i>0?i:0)},[t,n])}function pe(e){const t=b.useRef(e);return Pn(()=>{t.current=e}),b.useCallback((...n)=>{var r;return(r=t.current)===null||r===void 0?void 0:r.call(t,...n)},[])}function Hv(e,t){typeof e=="function"?e(t):e&&(e.current=t)}function Rp(e,t){return b.useMemo(()=>e==null&&t==null?null:n=>{Hv(e,n),Hv(t,n)},[e,t])}function X6(e,t=!1){const n=b.useRef(!1);Pn(()=>{t&&n.current&&(n.current=!1,e())},[t,e]);const r=b.useCallback(()=>{n.current=!0},[]),i=b.useCallback(()=>{n.current=!1},[]);return{onFocus:r,onBlur:i}}function Bm(){const[e,t]=b.useState(!1);return Pn(()=>{t(window.getComputedStyle(window.document.documentElement).direction==="rtl")},[]),e}function K6(){const[e]=b.useState({}),t=b.useCallback((i,o)=>{var a;(a=e[i])===null||a===void 0||a.forEach(l=>{o.isPropagationStopped()||l(o)})},[e]),n=b.useMemo(()=>({onPointerDown:i=>t(p2,i),onPointerMove:i=>t(h2,i),onPointerUp:i=>t(m2,i),onPointerLeave:i=>t(g2,i),onPointerCancel:i=>t(v2,i),onKeyDown:i=>t(Mm,i),onKeyUp:i=>t(x6,i),onWheel:i=>t($m,i)}),[t]),r=b.useCallback((i,o)=>(e[i]||(e[i]=[]),e[i].unshift(o),()=>{const a=e[i];a&&a.splice(0,a.length,...a.filter(l=>l!==o))}),[e]);return{registerSensors:n,subscribeSensors:r}}function Wv(e,t){const n=b.useRef(0),r=rl(),i=pe((...o)=>{n.current=Date.now(),e(o)});return b.useCallback((...o)=>{r(()=>{i(o)},t-(Date.now()-n.current))},[t,i,r])}const Nd=Im("slide"),Bd=Im("slide_image");function eu({slide:e,offset:t,render:n,rect:r,imageFit:i,imageProps:o,onClick:a,onLoad:l,onError:s,style:u}){var d,c,y,p,m,g,w,h;const[v,x]=b.useState(Rd),{publish:S}=xc(),{setTimeout:E}=bc(),P=b.useRef(null);b.useEffect(()=>{t===0&&S(m6(v))},[t,v,S]);const k=pe(N=>{("decode"in N?N.decode():Promise.resolve()).catch(()=>{}).then(()=>{N.parentNode&&(x(zd),E(()=>{l==null||l(N)},0))})}),_=b.useCallback(N=>{P.current=N,N!=null&&N.complete&&k(N)},[k]),M=b.useCallback(N=>{k(N.currentTarget)},[k]),$=pe(()=>{x(Fd),s==null||s()}),D=Rm(e,i),A=(N,U)=>Number.isFinite(N)?N:U,j=A(Math.max(...((c=(d=e.srcSet)===null||d===void 0?void 0:d.map(N=>N.width))!==null&&c!==void 0?c:[]).concat(e.width?[e.width]:[]).filter(Boolean)),((y=P.current)===null||y===void 0?void 0:y.naturalWidth)||0),F=A(Math.max(...((m=(p=e.srcSet)===null||p===void 0?void 0:p.map(N=>N.height))!==null&&m!==void 0?m:[]).concat(e.height?[e.height]:[]).filter(Boolean)),((g=P.current)===null||g===void 0?void 0:g.naturalHeight)||0),R=j&&F?{maxWidth:`min(${j}px, 100%)`,maxHeight:`min(${F}px, 100%)`}:{maxWidth:"100%",maxHeight:"100%"},L=(w=e.srcSet)===null||w===void 0?void 0:w.slice().sort((N,U)=>N.width-U.width).map(N=>`${N.src} ${N.width}w`).join(", "),O=()=>r&&!D&&e.width&&e.height?r.height/e.height*e.width:Number.MAX_VALUE,T=L&&r&&Lm()?`${Math.round(Math.min(O(),r.width))}px`:void 0,{style:I,className:z,...B}=(typeof o=="function"?o(e):o)||{};return b.createElement(b.Fragment,null,b.createElement("img",{ref:_,onLoad:M,onError:$,onClick:a,draggable:!1,className:Tn(ae(Bd()),D&&ae(Bd("cover")),v!==zd&&ae(Bd("loading")),z),style:{...R,...u,...I},...B,alt:(h=e.alt)!==null&&h!==void 0?h:"",sizes:T,srcSet:L,src:e.src}),v!==zd&&b.createElement("div",{className:ae(Nd(h6))},v===Rd&&(n!=null&&n.iconLoading?n.iconLoading():b.createElement(G6,{className:Tn(ae(Dp),ae(Nd(Rd)))})),v===Fd&&(n!=null&&n.iconError?n.iconError():b.createElement(Y6,{className:Tn(ae(Dp),ae(Nd(Fd)))}))))}const Q6=b.forwardRef(function({className:t,children:n,onFocus:r,onBlur:i,...o},a){const l=b.useRef(null),{trackFocusWithin:s}=E2();return b.createElement(L6,{nodeRef:l},b.createElement("div",{ref:Rp(a,l),className:Tn(ae("root"),t),...s(r,i),...o},n))});var ot;(function(e){e[e.NONE=0]="NONE",e[e.SWIPE=1]="SWIPE",e[e.PULL=2]="PULL",e[e.ANIMATION=3]="ANIMATION"})(ot||(ot={}));function I2(e,t,n,r,i){b.useEffect(()=>i?()=>{}:Dm(e(p2,t),e(h2,n),e(m2,r),e(g2,r),e(v2,r)),[e,t,n,r,i])}var en;(function(e){e[e.NONE=0]="NONE",e[e.SWIPE=1]="SWIPE",e[e.PULL=2]="PULL"})(en||(en={}));const Vd=30;function Z6({disableSwipeNavigation:e,closeOnBackdropClick:t},n,r,i,o,a,l,s,u,d,c,y,p,m,g,w){const h=b.useRef(0),v=b.useRef([]),x=b.useRef(void 0),S=b.useRef(0),E=b.useRef(en.NONE),P=b.useCallback(j=>{x.current===j.pointerId&&(x.current=void 0,E.current=en.NONE);const F=v.current;F.splice(0,F.length,...F.filter(R=>R.pointerId!==j.pointerId))},[]),k=b.useCallback(j=>{P(j),j.persist(),v.current.push(j)},[P]),_=b.useCallback(j=>v.current.find(({pointerId:F})=>j.pointerId===F),[]),M=pe(j=>{k(j)}),$=(j,F)=>c&&j>F||d&&j<-F,D=pe(j=>{const F=_(j);if(F)if(x.current===j.pointerId){const R=Date.now()-S.current,L=h.current;E.current===en.SWIPE?Math.abs(L)>.3*i||Math.abs(L)>5&&R<o?s(L,R):u(L):E.current===en.PULL&&($(L,2*Vd)?m(L,R):g(L)),h.current=0,E.current=en.NONE}else{const{target:R}=j;t&&R instanceof HTMLElement&&R===F.target&&(R.classList.contains(ae(jm))||R.classList.contains(ae(f2)))&&w()}P(j)}),A=pe(j=>{const F=_(j);if(F){const R=x.current===j.pointerId;if(j.buttons===0){R&&h.current!==0?D(j):P(F);return}const L=j.clientX-F.clientX,O=j.clientY-F.clientY;if(x.current===void 0){const T=I=>{k(j),x.current=j.pointerId,S.current=Date.now(),E.current=I};Math.abs(L)>Math.abs(O)&&Math.abs(L)>Vd&&r(L)?e||(T(en.SWIPE),a()):Math.abs(O)>Math.abs(L)&&$(O,Vd)&&(T(en.PULL),y())}else R&&(E.current===en.SWIPE?(h.current=L,l(L)):E.current===en.PULL&&(h.current=O,p(O)))}});I2(n,M,A,D)}function J6({preventDefaultWheelX:e,preventDefaultWheelY:t}){const n=b.useRef(null),r=pe(i=>{const o=Math.abs(i.deltaX)>Math.abs(i.deltaY);(o&&e||!o&&t||i.ctrlKey)&&i.preventDefault()});return b.useCallback(i=>{var o;i?i.addEventListener("wheel",r,{passive:!1}):(o=n.current)===null||o===void 0||o.removeEventListener("wheel",r),n.current=i},[r])}function eL(e,t,n,r,i,o,a,l,s){const u=b.useRef(0),d=b.useRef(0),c=b.useRef(void 0),y=b.useRef(void 0),p=b.useRef(0),m=b.useRef(void 0),g=b.useRef(0),{setTimeout:w,clearTimeout:h}=bc(),v=b.useCallback(()=>{c.current&&(h(c.current),c.current=void 0)},[h]),x=b.useCallback(()=>{y.current&&(h(y.current),y.current=void 0)},[h]),S=pe(()=>{e!==ot.SWIPE&&(u.current=0,g.current=0,v(),x())});b.useEffect(S,[e,S]);const E=pe(k=>{y.current=void 0,u.current===k&&s(u.current)}),P=pe(k=>{if(k.ctrlKey||Math.abs(k.deltaY)>Math.abs(k.deltaX))return;const _=M=>{p.current=M,h(m.current),m.current=M>0?w(()=>{p.current=0,m.current=void 0},300):void 0};if(e===ot.NONE){if(Math.abs(k.deltaX)<=1.2*Math.abs(p.current)){_(k.deltaX);return}if(!n(-k.deltaX))return;if(d.current+=k.deltaX,v(),Math.abs(d.current)>30)d.current=0,_(0),g.current=Date.now(),o();else{const M=d.current;c.current=w(()=>{c.current=void 0,M===d.current&&(d.current=0)},i)}}else if(e===ot.SWIPE){let M=u.current-k.deltaX;if(M=Math.min(Math.abs(M),r)*Math.sign(M),u.current=M,a(M),x(),Math.abs(M)>.2*r){_(k.deltaX),l(M,Date.now()-g.current);return}y.current=w(()=>E(M),2*i)}else _(k.deltaX)});b.useEffect(()=>t($m,P),[t,P])}const Gv=Im("container"),D2=b.createContext(null),er=Jn("useController","ControllerContext",D2);function tL({children:e,...t}){var n;const{carousel:r,animation:i,controller:o,on:a,styles:l,render:s}=t,{closeOnPullUp:u,closeOnPullDown:d,preventDefaultWheelX:c,preventDefaultWheelY:y}=o,[p,m]=b.useState(),g=Mr(),w=F6(),[h,v]=b.useState(ot.NONE),x=b.useRef(0),S=b.useRef(0),E=b.useRef(1),{registerSensors:P,subscribeSensors:k}=K6(),{subscribe:_,publish:M}=xc(),$=rl(),D=rl(),A=rl(),{containerRef:j,setContainerRef:F,containerRect:R}=$2(),L=Rp(J6({preventDefaultWheelX:c,preventDefaultWheelY:y}),F),O=b.useRef(null),T=Rp(O,void 0),{getOwnerDocument:I}=yc(),z=Bm(),B=Y=>(z?-1:1)*(typeof Y=="number"?Y:1),N=pe(()=>{var Y;return(Y=j.current)===null||Y===void 0?void 0:Y.focus()}),U=pe(()=>t),G=pe(()=>g),H=b.useCallback(Y=>M(Fr,Y),[M]),X=b.useCallback(Y=>M(zr,Y),[M]),ee=b.useCallback(()=>M(io),[M]),fe=Y=>!(r.finite&&(B(Y)>0&&g.currentIndex===0||B(Y)<0&&g.currentIndex===g.slides.length-1)),be=Y=>{var we;x.current=Y,(we=j.current)===null||we===void 0||we.style.setProperty(bt("swipe_offset"),`${Math.round(Y)}px`)},ie=Y=>{var we,ut;S.current=Y,E.current=(()=>{const So=(()=>d&&Y>0?Y:u&&Y<0?-Y:0)();return Math.min(Math.max(Am(1-So/60*(1-.5),2),.5),1)})(),(we=j.current)===null||we===void 0||we.style.setProperty(bt("pull_offset"),`${Math.round(Y)}px`),(ut=j.current)===null||ut===void 0||ut.style.setProperty(bt("pull_opacity"),`${E.current}`)},{prepareAnimation:Me}=Uv(O,(Y,we,ut)=>{if(O.current&&R)return{keyframes:[{transform:`translate(0, ${Y.rect.y-we.y+ut.y}px)`,opacity:Y.opacity},{transform:"translate(0, 0)",opacity:1}],duration:Y.duration,easing:i.easing.fade}}),Be=(Y,we)=>{if(u||d){ie(Y);let ut=0;O.current&&(ut=i.fade*(we?2:1),Me({rect:O.current.getBoundingClientRect(),opacity:E.current,duration:ut})),A(()=>{ie(0),v(ot.NONE)},ut),v(ot.ANIMATION),we||ee()}},{prepareAnimation:Ve,isAnimationPlaying:li}=Uv(O,(Y,we,ut)=>{var hn;if(O.current&&R&&(!((hn=g.animation)===null||hn===void 0)&&hn.duration)){const Vt=Jl(r.spacing),So=(Vt.percent?Vt.percent*R.width/100:Vt.pixel)||0;return{keyframes:[{transform:`translate(${B(g.globalIndex-Y.index)*(R.width+So)+Y.rect.x-we.x+ut.x}px, 0)`},{transform:"translate(0, 0)"}],duration:g.animation.duration,easing:g.animation.easing}}}),yt=pe(Y=>{var we,ut;const hn=Y.offset||0,Vt=hn?i.swipe:(we=i.navigation)!==null&&we!==void 0?we:i.swipe,So=!hn&&!li()?i.easing.navigation:i.easing.swipe;let{direction:Ja}=Y;const es=(ut=Y.count)!==null&&ut!==void 0?ut:1;let Mc=ot.ANIMATION,mn=Vt*es;if(!Ja){const _o=R==null?void 0:R.width,tg=Y.duration||0,Ic=_o?Vt/_o*Math.abs(hn):Vt;es!==0?(tg<Ic?mn=mn/Ic*Math.max(tg,Ic/5):_o&&(mn=Vt/_o*(_o-Math.abs(hn))),Ja=B(hn)>0?Fr:zr):mn=Vt/2}let $c=0;Ja===Fr?fe(B(1))?$c=-es:(Mc=ot.NONE,mn=Vt):Ja===zr&&(fe(B(-1))?$c=es:(Mc=ot.NONE,mn=Vt)),mn=Math.round(mn),D(()=>{be(0),v(ot.NONE)},mn),O.current&&Ve({rect:O.current.getBoundingClientRect(),index:g.globalIndex}),v(Mc),M(Bv,{type:"swipe",increment:$c,duration:mn,easing:So})});b.useEffect(()=>{var Y,we;!((Y=g.animation)===null||Y===void 0)&&Y.increment&&(!((we=g.animation)===null||we===void 0)&&we.duration)&&$(()=>w({type:"swipe",increment:0}),g.animation.duration)},[g.animation,w,$]);const bo=[k,fe,(R==null?void 0:R.width)||0,i.swipe,()=>v(ot.SWIPE),Y=>be(Y),(Y,we)=>yt({offset:Y,duration:we,count:1}),Y=>yt({offset:Y,count:0})],Za=[()=>{d&&v(ot.PULL)},Y=>ie(Y),Y=>Be(Y),Y=>Be(Y,!0)];Z6(o,...bo,u,d,...Za,ee),eL(h,...bo);const wo=pe(()=>{o.focus&&I().querySelector(`.${ae(Pm)} .${ae(Gv())}`)&&N()});b.useEffect(wo,[wo]);const eg=pe(()=>{var Y;(Y=a.view)===null||Y===void 0||Y.call(a,{index:g.currentIndex})});b.useEffect(eg,[g.globalIndex,eg]),b.useEffect(()=>Dm(_(Fr,Y=>yt({direction:Fr,...Y})),_(zr,Y=>yt({direction:zr,...Y})),_(Bv,Y=>w(Y))),[_,yt,w]);const j_=b.useMemo(()=>({prev:H,next:X,close:ee,focus:N,slideRect:R?E6(R,r.padding):{width:0,height:0},containerRect:R||{width:0,height:0},subscribeSensors:k,containerRef:j,setCarouselRef:T,toolbarWidth:p,setToolbarWidth:m}),[H,X,ee,N,k,R,j,T,p,m,r.padding]);return b.useImperativeHandle(o.ref,()=>({prev:H,next:X,close:ee,focus:N,getLightboxProps:U,getLightboxState:G}),[H,X,ee,N,U,G]),b.createElement("div",{ref:L,className:Tn(ae(Gv()),ae(Om)),style:{...h===ot.SWIPE?{[bt("swipe_offset")]:`${Math.round(x.current)}px`}:null,...h===ot.PULL?{[bt("pull_offset")]:`${Math.round(S.current)}px`,[bt("pull_opacity")]:`${E.current}`}:null,...o.touchAction!=="none"?{[bt("controller_touch_action")]:o.touchAction}:null,...l.container},tabIndex:-1,...P},R&&b.createElement(D2.Provider,{value:j_},e,(n=s.controls)===null||n===void 0?void 0:n.call(s)))}const nL=jr(u2,tL);function $r(e){return Qa(l2,e)}function Yv(e){return Qa(jm,e)}function rL({slide:e,offset:t}){const n=b.useRef(null),{currentIndex:r,slides:i}=Mr(),{slideRect:o,focus:a}=er(),{render:l,carousel:{imageFit:s,imageProps:u},on:{click:d},styles:{slide:c},labels:y}=Kt(),{getOwnerDocument:p}=yc(),m=t!==0;b.useEffect(()=>{var w;m&&(!((w=n.current)===null||w===void 0)&&w.contains(p().activeElement))&&a()},[m,a,p]);const g=()=>{var w,h,v,x;let S=(w=l.slide)===null||w===void 0?void 0:w.call(l,{slide:e,offset:t,rect:o});return!S&&xo(e)&&(S=b.createElement(eu,{slide:e,offset:t,render:l,rect:o,imageFit:s,imageProps:u,onClick:m?void 0:()=>d==null?void 0:d({index:r})})),S?b.createElement(b.Fragment,null,(h=l.slideHeader)===null||h===void 0?void 0:h.call(l,{slide:e}),((v=l.slideContainer)!==null&&v!==void 0?v:({children:E})=>E)({slide:e,children:S}),(x=l.slideFooter)===null||x===void 0?void 0:x.call(l,{slide:e})):null};return b.createElement("div",{ref:n,className:Tn(ae(Yv()),!m&&ae(Yv("current")),ae(Om)),...M6(m),style:c,role:"group","aria-roledescription":oo(y,"Slide"),"aria-label":C6(y,i,r+t)},g())}function iL(){const e=Kt().styles.slide;return b.createElement("div",{className:ae(jm),style:e})}function oL({carousel:e,labels:t}){const{slides:n,currentIndex:r,globalIndex:i}=Mr(),{setCarouselRef:o}=er(),{autoPlaying:a,focusWithin:l}=E2(),s=Jl(e.spacing),u=Jl(e.padding),d=O6(e,n,1),c=[];if(w2(n))for(let y=r-d;y<=r+d;y+=1){const p=S2(n,y),m=i-r+y,g=e.finite&&(y<0||y>n.length-1);c.push(g?{key:m}:{key:[`${m}`,T6(p)].filter(Boolean).join("|"),offset:y-r,slide:p})}return b.createElement("div",{ref:o,className:Tn(ae($r()),c.length>0&&ae($r("with_slides"))),style:{[`${bt($r("slides_count"))}`]:c.length,[`${bt($r("spacing_px"))}`]:s.pixel||0,[`${bt($r("spacing_percent"))}`]:s.percent||0,[`${bt($r("padding_px"))}`]:u.pixel||0,[`${bt($r("padding_percent"))}`]:u.percent||0},role:"region","aria-live":a&&!l?"off":"polite","aria-roledescription":oo(t,"Carousel"),"aria-label":oo(t,"Photo gallery")},c.map(({key:y,slide:p,offset:m})=>p?b.createElement(rL,{key:y,slide:p,offset:m}):b.createElement(iL,{key:y})))}const aL=jr(l2,oL);function L2(){const{carousel:e}=Kt(),{slides:t,currentIndex:n}=Mr(),r=t.length===0||e.finite&&n===0,i=t.length===0||e.finite&&n===t.length-1;return{prevDisabled:r,nextDisabled:i}}function sL(e){var t;const n=Bm(),{publish:r}=xc(),{animation:i}=Kt(),{prevDisabled:o,nextDisabled:a}=L2(),l=((t=i.navigation)!==null&&t!==void 0?t:i.swipe)/2,s=Wv(()=>r(Fr),l),u=Wv(()=>r(zr),l),d=pe(c=>{switch(c.key){case b6:r(io);break;case w6:(n?a:o)||(n?u:s)();break;case S6:(n?o:a)||(n?s:u)();break}});b.useEffect(()=>e(Mm,d),[e,d])}function qv({label:e,icon:t,renderIcon:n,action:r,onClick:i,disabled:o,style:a}){return b.createElement(zm,{label:e,icon:t,renderIcon:n,className:ae(`navigation_${r}`),disabled:o,onClick:i,style:a,...X6(er().focus,o)})}function lL({render:{buttonPrev:e,buttonNext:t,iconPrev:n,iconNext:r},styles:i}){const{prev:o,next:a,subscribeSensors:l}=er(),{prevDisabled:s,nextDisabled:u}=L2();return sL(l),b.createElement(b.Fragment,null,e?e():b.createElement(qv,{label:"Previous",action:Fr,icon:H6,renderIcon:n,style:i.navigationPrev,disabled:s,onClick:o}),t?t():b.createElement(qv,{label:"Next",action:zr,icon:W6,renderIcon:r,style:i.navigationNext,disabled:u,onClick:a}))}const uL=jr(d6,lL),Xv=ae(v6),cL=ae(d2);function dL(e){return"style"in e}function Kv(e,t,n){const r=window.getComputedStyle(e),i=n?"padding-left":"padding-right",o=n?r.paddingLeft:r.paddingRight,a=e.style.getPropertyValue(i);return e.style.setProperty(i,`${(vc(o)||0)+t}px`),()=>{a?e.style.setProperty(i,a):e.style.removeProperty(i)}}function fL({noScroll:{disabled:e},children:t}){const n=Bm(),{getOwnerDocument:r,getOwnerWindow:i}=yc();return b.useEffect(()=>{if(e)return()=>{};const o=[],a=i(),{body:l,documentElement:s}=r(),u=Math.round(a.innerWidth-s.clientWidth);if(u>0){o.push(Kv(l,u,n));const d=l.getElementsByTagName("*");for(let c=0;c<d.length;c+=1){const y=d[c];dL(y)&&a.getComputedStyle(y).getPropertyValue("position")==="fixed"&&!y.classList.contains(cL)&&o.push(Kv(y,u,n))}}return l.classList.add(Xv),()=>{l.classList.remove(Xv),o.forEach(d=>d())}},[n,e,r,i]),b.createElement(b.Fragment,null,t)}const pL=jr(f6,fL);function Qv(e){return Qa(Pm,e)}function Zv(e,t,n){const r=e.getAttribute(t);return e.setAttribute(t,n),()=>{r?e.setAttribute(t,r):e.removeAttribute(t)}}function hL({children:e,animation:t,styles:n,className:r,on:i,portal:o,close:a,labels:l}){const[s,u]=b.useState(!1),[d,c]=b.useState(!1),y=b.useRef([]),p=b.useRef(null),{setTimeout:m}=bc(),{subscribe:g}=xc(),h=Nm()?0:t.fade;b.useEffect(()=>(u(!0),()=>{u(!1),c(!1)}),[]);const v=pe(()=>{y.current.forEach(P=>P()),y.current=[]}),x=pe(()=>{var P;c(!1),v(),(P=i.exiting)===null||P===void 0||P.call(i),m(()=>{var k;(k=i.exited)===null||k===void 0||k.call(i),a()},h)});b.useEffect(()=>g(io,x),[g,x]);const S=pe(P=>{var k,_,M;$6(P),c(!0),(k=i.entering)===null||k===void 0||k.call(i);const $=(M=(_=P.parentNode)===null||_===void 0?void 0:_.children)!==null&&M!==void 0?M:[];for(let D=0;D<$.length;D+=1){const A=$[D];["TEMPLATE","SCRIPT","STYLE"].indexOf(A.tagName)===-1&&A!==P&&(y.current.push(Zv(A,"inert","")),y.current.push(Zv(A,"aria-hidden","true")))}y.current.push(()=>{var D,A;(A=(D=p.current)===null||D===void 0?void 0:D.focus)===null||A===void 0||A.call(D)}),m(()=>{var D;(D=i.entered)===null||D===void 0||D.call(i)},h)}),E=b.useCallback(P=>{P?S(P):v()},[S,v]);return s?ku.createPortal(b.createElement(Q6,{ref:E,className:Tn(r,ae(Qv()),ae(d2),d&&ae(Qv("open"))),"aria-modal":!0,role:"dialog","aria-label":oo(l,"Lightbox"),style:{...t.fade!==Ap.animation.fade?{[bt("fade_animation_duration")]:`${h}ms`}:null,...t.easing.fade!==Ap.animation.easing.fade?{[bt("fade_animation_timing_function")]:t.easing.fade}:null,...n.root},onFocus:P=>{p.current||(p.current=P.relatedTarget)}},e),o.root||document.body):null}const mL=jr(Pm,hL);function gL({children:e}){return b.createElement(b.Fragment,null,e)}const vL=jr(p6,gL);function yL(e){return Qa(c2,e)}function xL({toolbar:{buttons:e},render:{buttonClose:t,iconClose:n},styles:r}){const{close:i,setToolbarWidth:o}=er(),{setContainerRef:a,containerRect:l}=$2();Pn(()=>{o(l==null?void 0:l.width)},[o,l==null?void 0:l.width]);const s=()=>t?t():b.createElement(zm,{key:io,label:"Close",icon:U6,renderIcon:n,onClick:i});return b.createElement("div",{ref:a,style:r.toolbar,className:ae(yL())},e==null?void 0:e.map(u=>u===io?s():u))}const bL=jr(c2,xL);function A2(e,t){var n;return b.createElement(e.module.component,{key:e.module.name,...t},(n=e.children)===null||n===void 0?void 0:n.map(r=>A2(r,t)))}function wL(e,t={}){const{easing:n,...r}=e,{easing:i,...o}=t;return{easing:{...n,...i},...r,...o}}function SL({carousel:e,animation:t,render:n,toolbar:r,controller:i,noScroll:o,on:a,plugins:l,slides:s,index:u,...d}){const{animation:c,carousel:y,render:p,toolbar:m,controller:g,noScroll:w,on:h,slides:v,index:x,plugins:S,...E}=Ap,{config:P,augmentation:k}=I6([Ue(mL,[Ue(pL,[Ue(nL,[Ue(aL),Ue(bL),Ue(uL)])])])],l||S),_=k({animation:wL(c,t),carousel:{...y,...e},render:{...p,...n},toolbar:{...m,...r},controller:{...g,...i},noScroll:{...w,...o},on:{...h,...a},...E,...d});return _.open?b.createElement(R6,{..._},b.createElement(N6,{slides:s||v,index:vc(u||x)},b.createElement(B6,null,b.createElement(A6,null,b.createElement(D6,null,A2(Ue(vL,P),_)))))):null}const _L={minZoom:1,maxZoomPixelRatio:1,zoomInMultiplier:2,doubleTapDelay:300,doubleClickDelay:500,doubleClickMaxStops:2,keyboardMoveDistance:50,wheelZoomDistanceFactor:100,pinchZoomDistanceFactor:100,pinchZoomV4:!1,scrollToZoom:!1};function CL(e){return Math.min(Math.max(e,Number.EPSILON),1)}function R2(e){const{minZoom:t,...n}={..._L,...e};return{minZoom:CL(t),...n}}function EL(e,t,n,r){const i=b.useRef(void 0),o=b.useRef(void 0),{zoom:a}=Kt().animation,l=Nm(),s=pe(()=>{var u,d,c;if((u=i.current)===null||u===void 0||u.cancel(),i.current=void 0,o.current&&(r!=null&&r.current)){try{i.current=(c=(d=r.current).animate)===null||c===void 0?void 0:c.call(d,[{transform:o.current},{transform:`scale(${e}) translateX(${t}px) translateY(${n}px)`}],{duration:l?0:a??500,easing:i.current?"ease-out":"ease-in-out"})}catch(y){console.error(y)}o.current=void 0,i.current&&(i.current.onfinish=()=>{i.current=void 0})}});return Pn(s,[e,t,n,s]),b.useCallback(()=>{o.current=r!=null&&r.current?window.getComputedStyle(r.current).transform:void 0},[r])}function kL(e,t){const{on:n}=Kt(),r=pe(()=>{var i;t||(i=n.zoom)===null||i===void 0||i.call(n,{zoom:e})});b.useEffect(r,[e,r])}function wc(){const{zoom:e}=Kt();return R2(e)}function TL(e,t){var n,r;let i={width:0,height:0},o={width:0,height:0};const{currentSlide:a}=Mr(),{imageFit:l}=Kt().carousel,{maxZoomPixelRatio:s}=wc();if(e&&a){const d={...a,...t};if(xo(d)){const c=Rm(d,l),y=Math.max(...(((n=d.srcSet)===null||n===void 0?void 0:n.map(m=>m.width))||[]).concat(d.width?[d.width]:[])),p=Math.max(...(((r=d.srcSet)===null||r===void 0?void 0:r.map(m=>m.height))||[]).concat(d.height?[d.height]:[]));y>0&&p>0&&e.width>0&&e.height>0&&(o=c?{width:Math.round(Math.min(y,e.width/e.height*p)),height:Math.round(Math.min(p,e.height/e.width*y))}:{width:y,height:p},o={width:o.width*s,height:o.height*s},i=c?{width:Math.min(e.width,o.width,y),height:Math.min(e.height,o.height,p)}:{width:Math.round(Math.min(e.width,e.height/p*y,y)),height:Math.round(Math.min(e.height,e.width/y*p,p))})}}const u=i.width?Math.max(Am(o.width/i.width,5),1):1;return{imageRect:i,maxZoom:u}}function Jv(e,t){return Math.hypot(e.clientX-t.clientX,e.clientY-t.clientY)}function e1(e,t,n=100,r=2){return e*Math.min(1+Math.abs(t/n),r)**Math.sign(t)}function PL(e,t,n,r,i,o,a,l,s){const u=b.useRef([]),d=b.useRef(0),c=b.useRef(void 0),{globalIndex:y}=Mr(),{getOwnerWindow:p}=yc(),{containerRef:m,subscribeSensors:g}=er(),{keyboardMoveDistance:w,zoomInMultiplier:h,wheelZoomDistanceFactor:v,scrollToZoom:x,doubleTapDelay:S,doubleClickDelay:E,doubleClickMaxStops:P,pinchZoomDistanceFactor:k,pinchZoomV4:_}=wc(),M=b.useCallback(T=>{if(m.current){const{pageX:I,pageY:z}=T,{scrollX:B,scrollY:N}=p(),{left:U,top:G,width:H,height:X}=m.current.getBoundingClientRect();return[I-U-B-H/2,z-G-N-X/2]}return[]},[m,p]),$=pe(T=>{const{key:I,metaKey:z,ctrlKey:B}=T,N=z||B,U=()=>{T.preventDefault(),T.stopPropagation()};if(e>1){const G=(H,X)=>{U(),l(H,X)};I==="ArrowDown"?G(0,w):I==="ArrowUp"?G(0,-w):I==="ArrowLeft"?G(-w,0):I==="ArrowRight"&&G(w,0)}I==="+"||N&&I==="="?(U(),i()):I==="-"||N&&I==="_"?(U(),o()):N&&I==="0"&&(U(),a(1))}),D=pe(T=>{if((T.ctrlKey||x)&&Math.abs(T.deltaY)>Math.abs(T.deltaX)){T.stopPropagation(),a(e1(e,-T.deltaY,v),!0,...M(T));return}e>1&&(T.stopPropagation(),x||l(T.deltaX,T.deltaY))}),A=b.useCallback(T=>{const I=u.current;I.splice(0,I.length,...I.filter(z=>z.pointerId!==T.pointerId))},[]),j=b.useCallback(T=>{A(T),T.persist(),u.current.push(T)},[A]),F=pe(T=>{var I;const z=u.current;if(T.pointerType==="mouse"&&T.buttons>1||!(!((I=s==null?void 0:s.current)===null||I===void 0)&&I.contains(T.target)))return;e>1&&T.stopPropagation();const{timeStamp:B}=T;if(z.length===0&&B-d.current<(T.pointerType==="touch"?S:E)){d.current=0;const N=e>=1?e!==n?e*Math.max(n**(1/P),h):1:e!==t?e/Math.max(t**(-1/P),h):1;a(N,!1,...M(T))}else d.current=B;if(j(T),z.length===2){const N=Jv(z[0],z[1]);c.current={previousDistance:N,initialDistance:Math.max(N,1),initialZoom:e}}}),R=pe(T=>{const I=u.current,z=I.find(B=>B.pointerId===T.pointerId);if(I.length===2&&c.current){T.stopPropagation(),j(T);const B=Jv(I[0],I[1]),N=_?c.current.initialZoom/c.current.initialDistance*B:e1(e,B-c.current.previousDistance,k);a(N,!0,...I.map(U=>M(U)).reduce((U,G)=>G.map((H,X)=>U[X]+H/2))),c.current.previousDistance=B;return}e>1&&(T.stopPropagation(),z&&(I.length===1&&l((z.clientX-T.clientX)/e,(z.clientY-T.clientY)/e),j(T)))}),L=b.useCallback(T=>{const I=u.current;I.length===2&&I.find(z=>z.pointerId===T.pointerId)&&(c.current=void 0),A(T)},[A]),O=b.useCallback(()=>{const T=u.current;T.splice(0,T.length),d.current=0,c.current=void 0},[]);I2(g,F,R,L,r),b.useEffect(O,[y,O]),b.useEffect(()=>r?()=>{}:Dm(O,g(Mm,$),g($m,D)),[r,g,O,$,D])}function OL(e,t,n){const[r,i]=b.useState(1),[o,a]=b.useState(0),[l,s]=b.useState(0),u=EL(r,o,l,n),{currentSlide:d,globalIndex:c}=Mr(),{containerRect:y,slideRect:p}=er(),{minZoom:m,zoomInMultiplier:g}=wc(),w=d&&xo(d)?d.src:void 0,h=!w||!(n!=null&&n.current);Pn(()=>{i(1),a(0),s(0)},[c,w]);const v=b.useCallback((k,_,M)=>{const $=M||r,D=o-(k||0),A=l-(_||0),j=(e.width*$-p.width)/2/$,F=(e.height*$-p.height)/2/$;a(Math.min(Math.abs(D),Math.max(j,0))*Math.sign(D)),s(Math.min(Math.abs(A),Math.max(F,0))*Math.sign(A))},[r,o,l,p,e.width,e.height]),x=b.useCallback((k,_,M,$)=>{const D=Am(k+.01<t?k-.01>m?k:m:t,5);_||u(),v(M?M*(1/r-1/D):0,$?$*(1/r-1/D):0,D),i(D)},[r,m,t,v,u]),S=pe(()=>{r>1&&(r>t&&x(t,!0),v())});Pn(S,[y.width,y.height,S]);const E=b.useCallback(()=>{const k=r*g;x(r<1&&k>1?1:k)},[r,g,x]),P=b.useCallback(()=>{const k=r/g;x(r>1&&k<1?1:k)},[r,g,x]);return{zoom:r,offsetX:o,offsetY:l,disabled:h,changeOffsets:v,changeZoom:x,zoomIn:E,zoomOut:P}}const F2=b.createContext(null),Vm=Jn("useZoom","ZoomControllerContext",F2);function jL({children:e}){const[t,n]=b.useState(),{slideRect:r}=er(),{ref:i,minZoom:o}=wc(),{imageRect:a,maxZoom:l}=TL(r,t==null?void 0:t.imageDimensions),{zoom:s,offsetX:u,offsetY:d,disabled:c,changeZoom:y,changeOffsets:p,zoomIn:m,zoomOut:g}=OL(a,l,t==null?void 0:t.zoomWrapperRef);kL(s,c),PL(s,o,l,c,m,g,y,p,t==null?void 0:t.zoomWrapperRef);const w=b.useMemo(()=>({zoom:s,minZoom:o,maxZoom:l,offsetX:u,offsetY:d,disabled:c,zoomIn:m,zoomOut:g,changeZoom:y}),[s,o,l,u,d,c,m,g,y]);b.useImperativeHandle(i,()=>w,[w]);const h=b.useMemo(()=>({...w,setZoomWrapper:n}),[w,n]);return b.createElement(F2.Provider,{value:h},e)}const ML=si("ZoomIn",b.createElement(b.Fragment,null,b.createElement("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}),b.createElement("path",{d:"M12 10h-2v2H9v-2H7V9h2V7h1v2h2v1z"}))),$L=si("ZoomOut",b.createElement("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14zM7 9h5v1H7z"})),t1=b.forwardRef(function({zoomIn:t,onLoseFocus:n},r){const i=b.useRef(!1),o=b.useRef(!1),{zoom:a,minZoom:l,maxZoom:s,zoomIn:u,zoomOut:d,disabled:c}=Vm(),{render:y}=Kt(),p=c||(t?a>=s:a<=l);return b.useEffect(()=>{p&&i.current&&o.current&&n(),p||(i.current=!0)},[p,n]),b.createElement(zm,{ref:r,disabled:p,label:t?"Zoom in":"Zoom out",icon:t?ML:$L,renderIcon:t?y.iconZoomIn:y.iconZoomOut,onClick:t?u:d,onFocus:()=>{o.current=!0},onBlur:()=>{o.current=!1}})});function IL(){const e=b.useRef(null),t=b.useRef(null),{focus:n}=er(),r=b.useCallback(a=>{var l,s;!((l=a.current)===null||l===void 0)&&l.disabled?n():(s=a.current)===null||s===void 0||s.focus()},[n]),i=b.useCallback(()=>r(e),[r]),o=b.useCallback(()=>r(t),[r]);return b.createElement(b.Fragment,null,b.createElement(t1,{zoomIn:!0,ref:e,onLoseFocus:o}),b.createElement(t1,{ref:t,onLoseFocus:i}))}function DL(){const{render:e}=Kt(),t=Vm();return e.buttonZoom?b.createElement(b.Fragment,null,e.buttonZoom(t)):b.createElement(IL,null)}function LL(e){var t;return(((t=e.srcSet)===null||t===void 0?void 0:t.length)||0)>0}function AL({current:e,preload:t},{type:n,source:r}){switch(n){case"fetch":return e?{current:e,preload:r}:{current:r};case"done":return r===t?{current:r}:{current:e,preload:t};default:throw new Error(x2)}}function RL(e){var t,n;const[{current:r,preload:i},o]=b.useReducer(AL,{}),{slide:a,rect:l,imageFit:s,render:u,interactive:d}=e,c=a.srcSet.sort((E,P)=>E.width-P.width),y=(t=a.width)!==null&&t!==void 0?t:c[c.length-1].width,p=(n=a.height)!==null&&n!==void 0?n:c[c.length-1].height,m=Rm(a,s),g=Math.max(...c.map(E=>E.width)),w=Math.min((m?Math.max:Math.min)(l.width,y*(l.height/p)),g),h=k6(),v=pe(()=>{var E;const P=(E=c.find(k=>k.width>=w*h))!==null&&E!==void 0?E:c[c.length-1];(!r||c.findIndex(k=>k.src===r)<c.findIndex(k=>k===P))&&o({type:"fetch",source:P.src})});Pn(v,[l.width,l.height,h,v]);const x=pe(E=>o({type:"done",source:E})),S={WebkitTransform:d?"initial":"translateZ(0)"};return m||Object.assign(S,l.width/l.height<y/p?{width:"100%",height:"auto"}:{width:"auto",height:"100%"}),b.createElement(b.Fragment,null,i&&i!==r&&b.createElement(eu,{key:"preload",...e,offset:void 0,slide:{...a,src:i,srcSet:void 0},style:{position:"absolute",visibility:"hidden",...S},onLoad:()=>x(i),render:{...u,iconLoading:()=>null,iconError:()=>null}}),r&&b.createElement(eu,{key:"current",...e,slide:{...a,src:r,srcSet:void 0},style:S}))}function FL({render:e,slide:t,offset:n,rect:r}){var i;const[o,a]=b.useState(),l=b.useRef(null),{zoom:s,maxZoom:u,offsetX:d,offsetY:c,setZoomWrapper:y}=Vm(),p=s>1,{carousel:m,on:g}=Kt(),{currentIndex:w}=Mr();Pn(()=>n===0?(y({zoomWrapperRef:l,imageDimensions:o}),()=>y(void 0)):()=>{},[n,o,y]);let h=(i=e.slide)===null||i===void 0?void 0:i.call(e,{slide:t,offset:n,rect:r,zoom:s,maxZoom:u});if(!h&&xo(t)){const v={slide:t,offset:n,rect:r,render:e,imageFit:m.imageFit,imageProps:m.imageProps,onClick:n===0?()=>{var x;return(x=g.click)===null||x===void 0?void 0:x.call(g,{index:w})}:void 0};h=LL(t)?b.createElement(RL,{...v,slide:t,interactive:p,rect:n===0?{width:r.width*s,height:r.height*s}:r}):b.createElement(eu,{onLoad:x=>a({width:x.naturalWidth,height:x.naturalHeight}),...v})}return h?b.createElement("div",{ref:l,className:Tn(ae(g6),ae(Om),ae(f2),p&&ae(y6)),style:n===0?{transform:`scale(${s}) translateX(${d}px) translateY(${c}px)`}:void 0},h):null}const zL=({augment:e,addModule:t})=>{e(({zoom:n,toolbar:r,render:i,controller:o,...a})=>{const l=R2(n);return{zoom:l,toolbar:P6(r,Nv,b.createElement(DL,null)),render:{...i,slide:s=>{var u;return xo(s.slide)?b.createElement(FL,{render:i,...s}):(u=i.slide)===null||u===void 0?void 0:u.call(i,s)}},controller:{...o,preventDefaultWheelY:l.scrollToZoom},...a}}),t(jr(Nv,jL))};var z2={exports:{}};(function(e,t){(function(n,r){e.exports=r()})(te,function(){var n=1e3,r=6e4,i=36e5,o="millisecond",a="second",l="minute",s="hour",u="day",d="week",c="month",y="quarter",p="year",m="date",g="Invalid Date",w=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,h=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,v={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(F){var R=["th","st","nd","rd"],L=F%100;return"["+F+(R[(L-20)%10]||R[L]||R[0])+"]"}},x=function(F,R,L){var O=String(F);return!O||O.length>=R?F:""+Array(R+1-O.length).join(L)+F},S={s:x,z:function(F){var R=-F.utcOffset(),L=Math.abs(R),O=Math.floor(L/60),T=L%60;return(R<=0?"+":"-")+x(O,2,"0")+":"+x(T,2,"0")},m:function F(R,L){if(R.date()<L.date())return-F(L,R);var O=12*(L.year()-R.year())+(L.month()-R.month()),T=R.clone().add(O,c),I=L-T<0,z=R.clone().add(O+(I?-1:1),c);return+(-(O+(L-T)/(I?T-z:z-T))||0)},a:function(F){return F<0?Math.ceil(F)||0:Math.floor(F)},p:function(F){return{M:c,y:p,w:d,d:u,D:m,h:s,m:l,s:a,ms:o,Q:y}[F]||String(F||"").toLowerCase().replace(/s$/,"")},u:function(F){return F===void 0}},E="en",P={};P[E]=v;var k="$isDayjsObject",_=function(F){return F instanceof A||!(!F||!F[k])},M=function F(R,L,O){var T;if(!R)return E;if(typeof R=="string"){var I=R.toLowerCase();P[I]&&(T=I),L&&(P[I]=L,T=I);var z=R.split("-");if(!T&&z.length>1)return F(z[0])}else{var B=R.name;P[B]=R,T=B}return!O&&T&&(E=T),T||!O&&E},$=function(F,R){if(_(F))return F.clone();var L=typeof R=="object"?R:{};return L.date=F,L.args=arguments,new A(L)},D=S;D.l=M,D.i=_,D.w=function(F,R){return $(F,{locale:R.$L,utc:R.$u,x:R.$x,$offset:R.$offset})};var A=function(){function F(L){this.$L=M(L.locale,null,!0),this.parse(L),this.$x=this.$x||L.x||{},this[k]=!0}var R=F.prototype;return R.parse=function(L){this.$d=function(O){var T=O.date,I=O.utc;if(T===null)return new Date(NaN);if(D.u(T))return new Date;if(T instanceof Date)return new Date(T);if(typeof T=="string"&&!/Z$/i.test(T)){var z=T.match(w);if(z){var B=z[2]-1||0,N=(z[7]||"0").substring(0,3);return I?new Date(Date.UTC(z[1],B,z[3]||1,z[4]||0,z[5]||0,z[6]||0,N)):new Date(z[1],B,z[3]||1,z[4]||0,z[5]||0,z[6]||0,N)}}return new Date(T)}(L),this.init()},R.init=function(){var L=this.$d;this.$y=L.getFullYear(),this.$M=L.getMonth(),this.$D=L.getDate(),this.$W=L.getDay(),this.$H=L.getHours(),this.$m=L.getMinutes(),this.$s=L.getSeconds(),this.$ms=L.getMilliseconds()},R.$utils=function(){return D},R.isValid=function(){return this.$d.toString()!==g},R.isSame=function(L,O){var T=$(L);return this.startOf(O)<=T&&T<=this.endOf(O)},R.isAfter=function(L,O){return $(L)<this.startOf(O)},R.isBefore=function(L,O){return this.endOf(O)<$(L)},R.$g=function(L,O,T){return D.u(L)?this[O]:this.set(T,L)},R.unix=function(){return Math.floor(this.valueOf()/1e3)},R.valueOf=function(){return this.$d.getTime()},R.startOf=function(L,O){var T=this,I=!!D.u(O)||O,z=D.p(L),B=function(be,ie){var Me=D.w(T.$u?Date.UTC(T.$y,ie,be):new Date(T.$y,ie,be),T);return I?Me:Me.endOf(u)},N=function(be,ie){return D.w(T.toDate()[be].apply(T.toDate("s"),(I?[0,0,0,0]:[23,59,59,999]).slice(ie)),T)},U=this.$W,G=this.$M,H=this.$D,X="set"+(this.$u?"UTC":"");switch(z){case p:return I?B(1,0):B(31,11);case c:return I?B(1,G):B(0,G+1);case d:var ee=this.$locale().weekStart||0,fe=(U<ee?U+7:U)-ee;return B(I?H-fe:H+(6-fe),G);case u:case m:return N(X+"Hours",0);case s:return N(X+"Minutes",1);case l:return N(X+"Seconds",2);case a:return N(X+"Milliseconds",3);default:return this.clone()}},R.endOf=function(L){return this.startOf(L,!1)},R.$set=function(L,O){var T,I=D.p(L),z="set"+(this.$u?"UTC":""),B=(T={},T[u]=z+"Date",T[m]=z+"Date",T[c]=z+"Month",T[p]=z+"FullYear",T[s]=z+"Hours",T[l]=z+"Minutes",T[a]=z+"Seconds",T[o]=z+"Milliseconds",T)[I],N=I===u?this.$D+(O-this.$W):O;if(I===c||I===p){var U=this.clone().set(m,1);U.$d[B](N),U.init(),this.$d=U.set(m,Math.min(this.$D,U.daysInMonth())).$d}else B&&this.$d[B](N);return this.init(),this},R.set=function(L,O){return this.clone().$set(L,O)},R.get=function(L){return this[D.p(L)]()},R.add=function(L,O){var T,I=this;L=Number(L);var z=D.p(O),B=function(G){var H=$(I);return D.w(H.date(H.date()+Math.round(G*L)),I)};if(z===c)return this.set(c,this.$M+L);if(z===p)return this.set(p,this.$y+L);if(z===u)return B(1);if(z===d)return B(7);var N=(T={},T[l]=r,T[s]=i,T[a]=n,T)[z]||1,U=this.$d.getTime()+L*N;return D.w(U,this)},R.subtract=function(L,O){return this.add(-1*L,O)},R.format=function(L){var O=this,T=this.$locale();if(!this.isValid())return T.invalidDate||g;var I=L||"YYYY-MM-DDTHH:mm:ssZ",z=D.z(this),B=this.$H,N=this.$m,U=this.$M,G=T.weekdays,H=T.months,X=T.meridiem,ee=function(ie,Me,Be,Ve){return ie&&(ie[Me]||ie(O,I))||Be[Me].slice(0,Ve)},fe=function(ie){return D.s(B%12||12,ie,"0")},be=X||function(ie,Me,Be){var Ve=ie<12?"AM":"PM";return Be?Ve.toLowerCase():Ve};return I.replace(h,function(ie,Me){return Me||function(Be){switch(Be){case"YY":return String(O.$y).slice(-2);case"YYYY":return D.s(O.$y,4,"0");case"M":return U+1;case"MM":return D.s(U+1,2,"0");case"MMM":return ee(T.monthsShort,U,H,3);case"MMMM":return ee(H,U);case"D":return O.$D;case"DD":return D.s(O.$D,2,"0");case"d":return String(O.$W);case"dd":return ee(T.weekdaysMin,O.$W,G,2);case"ddd":return ee(T.weekdaysShort,O.$W,G,3);case"dddd":return G[O.$W];case"H":return String(B);case"HH":return D.s(B,2,"0");case"h":return fe(1);case"hh":return fe(2);case"a":return be(B,N,!0);case"A":return be(B,N,!1);case"m":return String(N);case"mm":return D.s(N,2,"0");case"s":return String(O.$s);case"ss":return D.s(O.$s,2,"0");case"SSS":return D.s(O.$ms,3,"0");case"Z":return z}return null}(ie)||z.replace(":","")})},R.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},R.diff=function(L,O,T){var I,z=this,B=D.p(O),N=$(L),U=(N.utcOffset()-this.utcOffset())*r,G=this-N,H=function(){return D.m(z,N)};switch(B){case p:I=H()/12;break;case c:I=H();break;case y:I=H()/3;break;case d:I=(G-U)/6048e5;break;case u:I=(G-U)/864e5;break;case s:I=G/i;break;case l:I=G/r;break;case a:I=G/n;break;default:I=G}return T?I:D.a(I)},R.daysInMonth=function(){return this.endOf(c).$D},R.$locale=function(){return P[this.$L]},R.locale=function(L,O){if(!L)return this.$L;var T=this.clone(),I=M(L,O,!0);return I&&(T.$L=I),T},R.clone=function(){return D.w(this.$d,this)},R.toDate=function(){return new Date(this.valueOf())},R.toJSON=function(){return this.isValid()?this.toISOString():null},R.toISOString=function(){return this.$d.toISOString()},R.toString=function(){return this.$d.toUTCString()},F}(),j=A.prototype;return $.prototype=j,[["$ms",o],["$s",a],["$m",l],["$H",s],["$W",u],["$M",c],["$y",p],["$D",m]].forEach(function(F){j[F[1]]=function(R){return this.$g(R,F[0],F[1])}}),$.extend=function(F,R){return F.$i||(F(R,A,$),F.$i=!0),$},$.locale=M,$.isDayjs=_,$.unix=function(F){return $(1e3*F)},$.en=P[E],$.Ls=P,$.p={},$})})(z2);var NL=z2.exports;const n1=Yp(NL),BL=C.div`
  /* max-width: 800px; */
  margin: 20px auto;

  font-family: var(--second-font);
`;C.h3`
  font-size: 18px;
  color: #4a3632; // Темний колір з твого футера
  margin-bottom: 20px;
  text-transform: uppercase;
  letter-spacing: 1px;
`;const VL=C.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  background: var(--second-background);
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 40px;
`,UL=C.input`
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
`,HL=C.textarea`
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
`,WL=C.button`
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
`,GL=C.div`
  margin-top: 30px;
`,YL=C.div`
  border-bottom: 1px solid #eee;
  padding: 20px 0;
`,qL=C.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
`,XL=C.span`
  font-weight: bold;
  color: #333;
`,KL=C.span`
  font-size: 12px;
  color: #999;
`,QL=C.p`
  font-size: 15px;
  color: #555;
  margin: 5px 0;
`,ZL=C.div`
  margin-top: 15px;
  padding: 15px;
  background: var(--second-background);

  border-left: 3px solid var(--brown-color);
  font-size: 14px;
    border-radius: 0 10px 10px 0;

`,JL=C.div`
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
`,r1=({productId:e,questions:t})=>{const[n,r]=b.useState(""),[i,o]=b.useState(""),a=async l=>{l.preventDefault(),(await fetch("https://backenddidiv-production.up.railway.app/api/questions",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({data:{question:n,userName:i,product:e}})})).ok&&(q.success("Запитання надіслано! Воно з’явиться після модерації."),r(""),o(""))};return f.jsxs(BL,{children:[f.jsx(Or,{autoClose:1500}),f.jsxs(VL,{onSubmit:a,children:[f.jsx(UL,{placeholder:"Ваше ім'я",value:i,onChange:l=>o(l.target.value),required:!0}),f.jsx(HL,{placeholder:"Запитайте нас про цей товар...",value:n,onChange:l=>r(l.target.value),required:!0}),f.jsx(WL,{children:"Надіслати запитання"})]}),f.jsx(GL,{children:t&&t.length>0?t.map(l=>l.answer?f.jsxs(YL,{children:[f.jsxs(qL,{children:[f.jsx(XL,{children:l.userName||"Гість"}),f.jsx(KL,{children:new Date(l.createdAt).toLocaleDateString()})]}),f.jsx(QL,{children:l.question}),f.jsxs(ZL,{children:[f.jsx(JL,{children:"Адміністратор"}),f.jsx("p",{children:l.answer})]})]},l.id):null):f.jsx("p",{style:{textAlign:"center",color:"#999"},children:"Запитань поки немає. Будьте першим!"})})]})},eA=()=>{var L;const{id:e}=ly(),[t,n]=b.useState([]),[r,i]=b.useState(1),[o,a]=b.useState("description"),[l,s]=b.useState(null),[u,d]=b.useState(!1),[c,y]=b.useState(0);console.log("products",t);const[p,m]=b.useState(!0),g=t.find(O=>O.id===Number(e)),w=g?n1().diff(n1(g.createdAt),"day")<7:!1,v=(O=>{const[T,I]=b.useState(!1);return b.useEffect(()=>{const z=window.matchMedia(O),B=()=>I(z.matches);return B(),z.addEventListener("change",B),()=>z.removeEventListener("change",B)},[O]),T})("(min-width: 768px)"),x=Ye(O=>O.cart.items),S=g?x.find(O=>O.id===g.id):null,E=(S==null?void 0:S.quantity)||0;b.useEffect(()=>{(async()=>{try{m(!0);const I=await(await fetch(`https://backenddidiv-production.up.railway.app/api/products?filters[id][$eq]=${e}&populate=*`)).json();n(I.data)}catch(T){console.error("Error fetching products:",T)}finally{m(!1)}})()},[e]),console.log(g);const P=(g==null?void 0:g.available)??!0;console.log(P),b.useEffect(()=>{var O,T;g&&g.images&&s((T=(O=g.images)==null?void 0:O[0])==null?void 0:T.url)},[g]);const k=((g==null?void 0:g.images)??[]).map(O=>({src:O.url})),_=()=>{const O=g.images.findIndex(T=>T.url===l);y(O>=0?O:0),d(!0)},M=jn(),D=Ye(O=>O.favorites.items).some(O=>O.id===(g==null?void 0:g.id)),A=()=>{if(E>=g.stock){q.warning("Товар вже в кошику (досягнуто максимум)");return}if(E+r>g.stock){q.warning(`Доступно лише ${g.stock} шт.`);return}M(ho({...g,quantity:r})),q.success(`${g.name} додано в кошик!`)},j=(O,T)=>{T.stopPropagation(),M(ai(O)),D?q.warning(`${O.name} видалено з обраного`):q.info(`${O.name} додано в обране`)},F=(g==null?void 0:g.new_price)&&(g==null?void 0:g.new_price)<g.price,R=F?Math.round((g.price-g.new_price)/g.price*100):0;return p?f.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"100vw",height:"100vh"},children:f.jsx(qa,{height:100,width:100,radius:5,color:"var(--orange-color)",ariaLabel:"ball-triangle-loading",wrapperStyle:{},wrapperClass:"",visible:!0})}):g?f.jsxs($v,{children:[" ",f.jsx(Or,{autoClose:1500}),f.jsxs(VD,{children:[f.jsx(Oe,{to:"/",children:"Головна"})," / ",f.jsx(Oe,{to:"/catalog",children:"Каталог"})," /"," ",g.name]}),f.jsxs(UD,{children:[f.jsxs(HD,{children:[f.jsx(WD,{src:l,alt:g.name,onClick:_}),f.jsx(GD,{children:(g.images??[]).map(O=>{const T=O.url;return f.jsx(YD,{src:T,onClick:()=>s(T),style:{cursor:"pointer",opacity:l===T?1:.4}},O.id)})})]}),f.jsx(SL,{open:u,close:()=>d(!1),index:c,slides:k,controller:{closeOnBackdropClick:!0},on:{view:({index:O})=>{var T,I;y(O),(I=(T=g==null?void 0:g.images)==null?void 0:T[O])!=null&&I.url&&s(g.images[O].url)}},plugins:[zL],zoom:{maxZoomPixelRatio:3,zoomInMultiplier:2,doubleTapDelay:300,doubleClickDelay:300,doubleClickEnabled:!0,pinchZoomDistanceFactor:100,scrollToZoom:!0}}),f.jsxs(qD,{children:[f.jsx(XD,{children:g.name}),f.jsx(KD,{children:w&&f.jsx(ZD,{children:"● Новий товар"})}),!P&&f.jsx(QD,{children:" Заброньовано"}),f.jsxs(JD,{children:[f.jsx(e6,{children:F?f.jsxs(f.Fragment,{children:[f.jsxs(Iv,{$discount:!0,children:[g.new_price.toLocaleString()," грн"]}),f.jsxs(t6,{children:[g.price.toLocaleString()," грн"]}),f.jsxs(n6,{children:["-",R,"%"]})]}):f.jsxs(Iv,{children:[g.price.toLocaleString()," грн"]})}),f.jsxs(r6,{children:[f.jsxs(i6,{children:[f.jsx("button",{onClick:()=>i(Math.max(1,r-1)),children:"-"}),f.jsx("span",{children:r}),f.jsxs(c6,{$active:r>=g.stock,children:[f.jsx("button",{onClick:()=>i(Math.min(g.stock,r+1)),disabled:r>=g.stock,children:"+"}),f.jsxs(s2,{children:["Максимум: ",g.stock]})]})]}),f.jsxs(o6,{onClick:A,disabled:!P,children:[" ",f.jsx(po,{size:25}),f.jsx("span",{children:"В КОШИК"})]}),f.jsxs(l6,{$active:D,onClick:O=>j(g,O),children:[f.jsxs(u6,{$active:D,children:[" ",f.jsx("use",{href:`${cn}#icon-heart`})]}),f.jsx("span",{children:"В ОБРАНЕ"})]})]})]})]})]}),!v&&f.jsxs(Av,{children:[f.jsxs(Rv,{children:[f.jsx(Ro,{active:o==="description",onClick:()=>a("description"),children:"Опис"}),f.jsx(Ro,{active:o==="attributes",onClick:()=>a("attributes"),children:"Характеристики"}),f.jsx(Ro,{active:o==="FAQ",onClick:()=>a("FAQ"),children:"Питання та відповіді"})]}),f.jsxs(Fv,{children:[o==="description"&&f.jsx(zv,{children:g.description}),o==="attributes"&&f.jsx(Dv,{children:(L=g.attributes)!=null&&L.length?g.attributes.map(O=>f.jsxs(Lv,{children:[f.jsx("span",{children:O.label}),f.jsx("b",{children:O.value})]},O.id)):f.jsx("p",{children:"Характеристики відсутні"})}),o==="FAQ"&&f.jsx(r1,{productId:g.documentId,questions:g.questions})]})]}),v&&f.jsxs(s6,{children:[f.jsxs(Av,{children:[f.jsxs(Rv,{children:[f.jsx(Ro,{active:o==="description",onClick:()=>a("description"),children:"Опис"}),f.jsx(Ro,{active:o==="FAQ",onClick:()=>a("FAQ"),children:"Питання та відповіді"})]}),f.jsxs(Fv,{children:[o==="description"&&f.jsx(zv,{children:g.description}),o==="FAQ"&&f.jsx(r1,{productId:g.documentId,questions:g.questions})]})]}),f.jsxs(Dv,{children:[f.jsx(a6,{children:" Характеристики"}),(()=>{const O=[...g.attributes||[],...g.features||[]];return O.length?O.map((T,I)=>f.jsxs(Lv,{children:[f.jsx("span",{children:T.label}),f.jsx("b",{children:T.value})]},`${T.id}-${I}`)):f.jsx("p",{children:"Характеристики відсутні"})})()]})]})]}):f.jsx($v,{children:"Товар не знайдено"})},tA=C.div`
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

  
`,nA=C.nav`
  font-family: var(--main-font);
  font-size: 14px;
  color: #8c8c8c;
  margin-bottom: 15px;
`,rA=C.h1`
  font-size:24px;
 
  font-weight: 800;
  margin-bottom: 20px;
  @media screen and (min-width: 768px) {
  font-size:30px;
  }
  
`,iA=C.div`
  display: flex;
  flex-direction: column;
  gap: 20px; 
  width: 100%;
  
  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between; 
  }
`,oA=C.div`
  flex: 1; 
  width: 100%;
  border: 1px solid #eee;
  border-radius: 12px;
`,aA=C.div`
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
`,sA=C.img`
  width: 100%;
  height: auto;
  border-radius: 4px;
`,lA=C.div`
  h3 {
    font-size: 16px;
    font-weight: 300;
    margin: 0;
    line-height: 1.4;
  }
`,uA=C.div`

  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  gap: 30px;
`,cA=C.div`

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
`;const Sc=C.div`
  text-align: center;
  width: 100px;
 
`,_c=C.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 2px;
`,Cc=C.span`
  font-size: 18px;
  font-weight: 600;
  color: ${({$discount:e})=>"#111"};
`,Ec=C.span`
  font-size: 13px;
  color: #999;
  text-decoration: line-through;
`,kc=C.span`
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
`,dA=C.button`
  background: 'none';
  border: 'none';
  cursor: 'pointer';
  color: '#ccc';
`,fA=C.button`
  background: 'none';
  border: 'none';
  cursor: 'pointer';
  color: '#ccc';
`,pA=C.div`

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
`,hA=C.div`
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
`,mA=C(Oe)`
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
`,gA=C.button`
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
`;const vA=C.div`
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
`,yA=C.div`
 font-family: var(--main-font);
  font-size: 14px;
  color: #8c8c8c;
  margin-bottom: 15px;
`,xA=C.div`
  background-color: #fdfaf7;
`,bA=C.div`
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
`;const wA=C.img`
  width: 250px;
  height: auto;
  margin-bottom: 30px;
`,SA=C.h2`
  font-size: 28px;
  color: #333;
  margin-bottom: 10px;
`,_A=C.p`
  font-size: 18px;
  color: #666;
  margin-bottom: 40px;
`,CA=C.button`
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
`,EA=()=>f.jsx(xA,{children:f.jsxs(vA,{children:[f.jsx(yA,{children:"Головна / Кошик"}),f.jsxs(bA,{children:[f.jsx(wA,{src:"/Didiv/empty-cart.png",alt:"Порожній кошик"}),f.jsx(SA,{children:"Ваш кошик порожній"}),f.jsx(_A,{children:"Ви ще не додали жодного товару в кошик"}),f.jsx(CA,{onClick:()=>window.location.href="/Didiv/catalog",children:"Перейти до покупок"})]})]})}),kA=C.div`
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
`,TA=({item:e})=>{const t=jn();return f.jsxs(kA,{children:[f.jsx("button",{onClick:()=>t(K4(e.id)),children:"-"}),f.jsx("span",{children:e.quantity}),f.jsx("button",{onClick:()=>t(X4({id:e.id,stock:e.stock})),disabled:e.quantity>=e.stock,children:"+"})]})},PA=()=>{const e=jn(),t=On(),[n,r]=b.useState([]),i=Ye(p=>p.cart.items),a=Ye(p=>p.cart.items).reduce((p,m)=>p+m.quantity,0),l=i.reduce((p,m)=>p+(m.new_price??m.price)*(m.quantity||1),0),s=Ye(p=>p.favorites.items),u=i.length===0,d=(p,m)=>{m.stopPropagation(),console.log(p);const g=s.some(w=>w.id===p.id);e(ai(p)),g?q.warning(`${p.name} видалено з обраного`):q.info(`${p.name} додано в обране`)},c=p=>{r(m=>[...m,p.id]),setTimeout(()=>{e(Y4(p)),r(m=>m.filter(g=>g!==p.id))},300)},y=()=>{e(sm())};return f.jsx(f.Fragment,{children:u?f.jsx(EA,{}):f.jsxs(tA,{children:[f.jsx(Or,{autoClose:1500}),f.jsxs(nA,{children:[" ",f.jsx(Oe,{to:"/",style:{color:"inherit",textDecoration:"none"},children:"Головна"})," ","/"," ",f.jsx(Oe,{to:"/cart",style:{color:"inherit",textDecoration:"none"},children:"Кошик"})]}),f.jsx(rA,{children:"Кошик"}),f.jsxs(iA,{children:[f.jsx(oA,{children:i.map((p,m)=>{var x,S;console.log(p);const g=s.some(E=>E.id===p.id),w=p.new_price&&p.new_price<p.price,h=w?p.new_price:p.price,v=w?Math.round((p.price-p.new_price)/p.price*100):0;return f.jsxs(aA,{className:n.includes(p.id)?"removing":"",children:[f.jsx(sA,{src:((S=(x=p.images)==null?void 0:x[0])==null?void 0:S.url)||"/nofoto.png",alt:p.name,onClick:()=>t(`/product/${p.id}`),onError:E=>{E.currentTarget.onerror=null,E.currentTarget.src=no}}),f.jsx(lA,{children:f.jsx("h3",{children:p.name})}),f.jsxs(uA,{children:[f.jsx(TA,{item:{...p,quantity:p.quantity||1}}),f.jsx(Sc,{children:f.jsxs(_c,{children:[f.jsxs(Cc,{$discount:w,children:[(h*(p.quantity||1)).toLocaleString()," грн"]}),w&&f.jsxs(f.Fragment,{children:[f.jsxs(Ec,{children:[(p.price*(p.quantity||1)).toLocaleString()," грн"]}),f.jsxs(kc,{children:["-",v,"%"]})]})]})})]}),f.jsxs(cA,{children:[f.jsx(fA,{onClick:E=>d(p,E),style:{background:"none",border:"none",cursor:"pointer",color:"#ccc"},children:f.jsx(Ua,{size:22,fill:g?"#ff4d4f":"none",color:g?"#ff4d4f":"#999"})}),f.jsx(dA,{onClick:()=>c(p),style:{background:"none",border:"none",cursor:"pointer",color:"#000000"},children:f.jsx(Wb,{size:22})})]})]},`${p.id}-${m}`)})}),f.jsxs(pA,{children:[f.jsxs(hA,{children:[f.jsx("span",{children:"Всього в обраному:"}),f.jsxs("strong",{children:[a," шт."]}),f.jsx("span",{children:"На суму:"}),f.jsxs("strong",{children:[l," грн"]})]}),f.jsx(mA,{to:"/checkout",children:"Оформити замовлення"}),f.jsx(gA,{onClick:y,children:"Oчистити кошик"})]})]})]})})},OA=C.div`
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
`,jA=C.nav`
  font-family: var(--main-font);
  font-size: 14px;
  color: #8c8c8c;
  margin-bottom: 15px;
`,MA=C.h1`
color: var(--black-color);
 font-family: var(--main-font);
  font-size: 30px;
  font-weight: 800;
  margin-bottom: 32px;
`,$A=C.div`

   display: flex;
  flex-direction: column;
  gap: 20px; 
  width: 100%;
  
  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between; 
  }
`,IA=C.div`
   flex: 1; 
  width: 100%;
  border: 1px solid #eee;
  border-radius: 12px;
`,DA=C.div`
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

  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: 150px 1.5fr 0.7fr; 
    align-items: center;
    gap: 20px;
  }
`,LA=C.div`
  position: absolute;
  top: 30px;
  right: -10px;

  padding: 6px 15px;
  border-radius: 22px;

  background: var(--red-color);
  color: #fff;

  font-family: var(--second-font);
     font-size: 14px;
    font-weight: 400;
    text-transform: uppercase;
  line-height: 1;
  text-transform: uppercase;

  z-index: 10;
  white-space: nowrap;
    box-shadow: 0 6px 6px -4px rgba(0, 0, 0, 0.35);

  @media (min-width: 768px) {
    top: 50%;
    left: 25px;
    right: auto;
    transform: translateY(-50%);
    font-size: 14px;
    padding: 6px 15px;
  }
`;C.div`
  display: flex;
  align-items: center;
  gap: 20px;
  flex: 1;
`;const AA=C.div`
  position: relative;
`,RA=C.img`
   width: 100%;
  height: auto;
  border-radius: 4px;
`,FA=C.h3`
 font-size: 20px;
    font-weight: 300;
    margin: 0;
    line-height: 1.4;
    @media screen and (max-width: 768px) {
    border-bottom: 1px solid #eee;
    padding-bottom:10px;
  }
    
`,zA=C.div`
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
`;const NA=C.div`
  display: flex;
  gap: 16px;
`,i1=C.button`
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
`,BA=C.div`
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
`,VA=C.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  font-size: 15px;
  color: #555;
`,UA=C.button`
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
`,HA=C.button`
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
`,WA=C.div`
  padding: 20px 40px;
  font-size: 14px;
  color: #8c8c8c;
  background-color: #fdfaf7;
`,GA=C.div`
   
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
`;const YA=C.img`
  width: 250px;
  height: auto;
  margin-bottom: 30px;
`;C.h2`
  font-size: 28px;
  color: #333;
  margin-bottom: 10px;
`;const qA=C.p`
  font-size: 18px;
  color: #666;
  margin-bottom: 40px;
`,XA=C.button`
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
`,KA=()=>f.jsxs(f.Fragment,{children:[f.jsx(WA,{children:"Головна / Обране"}),f.jsxs(GA,{children:[f.jsx(YA,{src:"/Didiv/sad.png",alt:"Порожній кошик"}),f.jsx(qA,{children:"Ви ще не додали жодного товару в обране"}),f.jsx(XA,{onClick:()=>window.location.href="/Didiv/catalog",children:"Перейти до вибору"})]})]}),QA=()=>{const e=jn(),t=On(),n=Ye(c=>c.favorites.items);console.log(n);const[r,i]=b.useState([]),o=Ye(c=>c.cart.items),a=()=>{const c=n.filter(y=>y.available!==!1).map(y=>{const p=o.find(w=>w.id===y.id),m=p?p.quantity:0,g=y.stock-m;return g<=0?null:{...y,quantity:g}}).filter(Boolean);if(c.length===0){q.error("Усі товари вже в максимальній кількості");return}e(q4(c)),q.success("Додано максимально доступну кількість товарів")};console.log(n);const l=n.reduce((c,y)=>c+(y.new_price??y.price)*(y.quantity||1),0),s=(c,y)=>{y.stopPropagation();const p=n.some(m=>m.id===c.id);i(m=>[...m,c.id]),setTimeout(()=>{e(ai(c)),i(m=>m.filter(g=>g!==c.id))},300),p?q.warning(`${c.name} видалено з обраного`):q.info(`${c.name} додано в обране`)},u=()=>{e(Wj())},d=n.length===0;return f.jsx(f.Fragment,{children:d?f.jsx(KA,{}):f.jsxs(OA,{children:[f.jsx(Or,{autoClose:1500}),f.jsxs(jA,{children:[" ",f.jsx(Oe,{to:"/",style:{color:"inherit",textDecoration:"none"},children:"Головна"})," ","/"," ",f.jsx(Oe,{to:"/favorite",style:{color:"inherit",textDecoration:"none"},children:"Обране"})]}),f.jsx(MA,{children:"Обране"}),f.jsxs($A,{children:[f.jsx(IA,{children:n.map(c=>{var h,v;const y=c.new_price&&c.new_price<c.price,p=y?c.new_price:c.price,m=(c==null?void 0:c.available)??!0,g=y?Math.round((c.price-c.new_price)/c.price*100):0,w=x=>{const S=o.find(P=>P.id===x.id);if((S?S.quantity:0)>=x.stock){q.error(`Вибачте, доступно лише ${x.stock} шт.`);return}e(ho(x)),q.success(`${x.name} додано в кошик!`)};return f.jsxs(DA,{className:r.includes(c.id)?"removing":"",children:[!m&&f.jsx(LA,{children:"Заброньовано"}),f.jsx(AA,{children:f.jsx(RA,{src:((v=(h=c.images)==null?void 0:h[0])==null?void 0:v.url)||"/nofoto.png",alt:c.name,onClick:()=>t(`/product/${c.id}`),onError:x=>{x.currentTarget.onerror=null,x.currentTarget.src="/nofoto.png"}})}),f.jsx(FA,{children:c.name}),f.jsxs(zA,{children:[f.jsx(Sc,{children:f.jsxs(_c,{children:[f.jsxs(Cc,{$discount:y,children:[(p*(c.quantity||1)).toLocaleString()," ","грн"]}),y&&f.jsxs(f.Fragment,{children:[f.jsxs(Ec,{children:[(c.price*(c.quantity||1)).toLocaleString()," ","грн"]}),f.jsxs(kc,{children:["-",g,"%"]})]})]})}),f.jsxs(NA,{children:[f.jsx(i1,{onClick:()=>w(c),disabled:!m,children:f.jsx(po,{size:30})}),f.jsx(i1,{onClick:x=>s(c,x),children:f.jsx(Wb,{size:30})})]})]})]},c.id)})}),f.jsxs(BA,{children:[f.jsxs(VA,{children:[f.jsx("span",{children:"Всього в обраному:"}),f.jsxs("strong",{children:[n.length," шт."]}),f.jsx("span",{children:"На суму:"}),f.jsxs("strong",{children:[l," грн"]})]}),f.jsx("hr",{style:{border:"0",borderTop:"1px solid #eee",margin:"20px 0"}}),f.jsx(UA,{onClick:()=>a(),children:"Додати все до кошика"}),f.jsx(HA,{onClick:u,children:"Очистити обрані"})]})]})]})})},ZA=C.div`
  background-color: #fdfaf7;
  min-height: 80vh;
  padding-bottom: 60px;
`,JA=C.div`
  padding: 15px 20px;
  font-size: 12px;
  color: #8c8c8c;

  @media screen and (min-width: 768px) {
    padding: 20px 40px;
    font-size: 14px;
  }
`,eR=C.article`
  max-width: 800px; // Обмежуємо ширину для зручного читання тексту
  margin: 0 auto;
  padding: 0 20px;

  @media screen and (min-width: 768px) {
    padding: 0 40px;
  }
`,tR=C.h1`
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
`;const nR=({title:e,children:t,breadcrumbPath:n})=>f.jsxs(ZA,{children:[f.jsxs(JA,{children:["Головна / ",n]}),f.jsxs(eR,{children:[f.jsx(tR,{children:e}),t]})]}),o1=C.section`
  margin-bottom: 30px;

  @media screen and (min-width: 768px) {
    margin-bottom: 40px;
  }
`,a1=C.h2`
  font-size: 20px;
  color: #4a332a;
  margin-bottom: 15px;
  font-weight: 600;

  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`,s1=C.p`
  font-size: 16px;
  line-height: 1.6;
  color: #555;
  margin-bottom: 15px;
`,l1=C.ul`
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
`,rR=()=>f.jsxs(nR,{title:"Оплата і доставка",breadcrumbPath:"Доставка",children:[f.jsxs(o1,{children:[f.jsx(a1,{children:"Способи доставки"}),f.jsx(s1,{children:"Ми доставляємо замовлення по всій Україні за допомогою:"}),f.jsxs(l1,{children:[f.jsx("li",{children:"Нова Пошта (у відділення або кур1єром)"}),f.jsx("li",{children:"Самовивіз з нашого магазину"}),f.jsx("li",{children:"Укрпошта"})]})]}),f.jsxs(o1,{children:[f.jsx(a1,{children:"Варіанти оплати"}),f.jsx(s1,{children:"Ви можете обрати зручний для вас спосіб оплати:"}),f.jsxs(l1,{children:[f.jsx("li",{children:"Оплата карткою на сайті (Visa/Mastercard)"}),f.jsx("li",{children:"Післяплата (накладений платіж) при отриманні"}),f.jsx("li",{children:"Безготівковий розрахунок"})]})]})]});function ni(e){"@babel/helpers - typeof";return ni=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ni(e)}function iR(e,t){if(ni(e)!=="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(ni(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function N2(e){var t=iR(e,"string");return ni(t)==="symbol"?t:String(t)}function Go(e,t,n){return t=N2(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u1(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Z(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?u1(Object(n),!0).forEach(function(r){Go(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u1(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function oR(e){if(Array.isArray(e))return e}function aR(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,i,o,a,l=[],s=!0,u=!1;try{if(o=(n=n.call(e)).next,t===0){if(Object(n)!==n)return;s=!1}else for(;!(s=(r=o.call(n)).done)&&(l.push(r.value),l.length!==t);s=!0);}catch(d){u=!0,i=d}finally{try{if(!s&&n.return!=null&&(a=n.return(),Object(a)!==a))return}finally{if(u)throw i}}return l}}function Fp(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function B2(e,t){if(e){if(typeof e=="string")return Fp(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Fp(e,t)}}function sR(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Un(e,t){return oR(e)||aR(e,t)||B2(e,t)||sR()}function lR(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function tr(e,t){if(e==null)return{};var n=lR(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var uR=["defaultInputValue","defaultMenuIsOpen","defaultValue","inputValue","menuIsOpen","onChange","onInputChange","onMenuClose","onMenuOpen","value"];function cR(e){var t=e.defaultInputValue,n=t===void 0?"":t,r=e.defaultMenuIsOpen,i=r===void 0?!1:r,o=e.defaultValue,a=o===void 0?null:o,l=e.inputValue,s=e.menuIsOpen,u=e.onChange,d=e.onInputChange,c=e.onMenuClose,y=e.onMenuOpen,p=e.value,m=tr(e,uR),g=b.useState(l!==void 0?l:n),w=Un(g,2),h=w[0],v=w[1],x=b.useState(s!==void 0?s:i),S=Un(x,2),E=S[0],P=S[1],k=b.useState(p!==void 0?p:a),_=Un(k,2),M=_[0],$=_[1],D=b.useCallback(function(T,I){typeof u=="function"&&u(T,I),$(T)},[u]),A=b.useCallback(function(T,I){var z;typeof d=="function"&&(z=d(T,I)),v(z!==void 0?z:T)},[d]),j=b.useCallback(function(){typeof y=="function"&&y(),P(!0)},[y]),F=b.useCallback(function(){typeof c=="function"&&c(),P(!1)},[c]),R=l!==void 0?l:h,L=s!==void 0?s:E,O=p!==void 0?p:M;return Z(Z({},m),{},{inputValue:R,menuIsOpen:L,onChange:D,onInputChange:A,onMenuClose:F,onMenuOpen:j,value:O})}function dR(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c1(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,N2(r.key),r)}}function fR(e,t,n){return t&&c1(e.prototype,t),n&&c1(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function zp(e,t){return zp=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},zp(e,t)}function pR(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&zp(e,t)}function tu(e){return tu=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},tu(e)}function hR(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function mR(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function gR(e,t){if(t&&(ni(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return mR(e)}function vR(e){var t=hR();return function(){var r=tu(e),i;if(t){var o=tu(this).constructor;i=Reflect.construct(r,arguments,o)}else i=r.apply(this,arguments);return gR(this,i)}}function yR(e){if(Array.isArray(e))return Fp(e)}function xR(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function bR(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Um(e){return yR(e)||xR(e)||B2(e)||bR()}function wR(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}const SR=Math.min,_R=Math.max,nu=Math.round,ks=Math.floor,ru=e=>({x:e,y:e});function CR(e){const{x:t,y:n,width:r,height:i}=e;return{width:r,height:i,top:n,left:t,right:t+r,bottom:n+i,x:t,y:n}}function Tc(){return typeof window<"u"}function V2(e){return H2(e)?(e.nodeName||"").toLowerCase():"#document"}function dn(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function U2(e){var t;return(t=(H2(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function H2(e){return Tc()?e instanceof Node||e instanceof dn(e).Node:!1}function Np(e){return Tc()?e instanceof Element||e instanceof dn(e).Element:!1}function Hm(e){return Tc()?e instanceof HTMLElement||e instanceof dn(e).HTMLElement:!1}function d1(e){return!Tc()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof dn(e).ShadowRoot}function W2(e){const{overflow:t,overflowX:n,overflowY:r,display:i}=Wm(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&i!=="inline"&&i!=="contents"}let Ud;function ER(){return Ud==null&&(Ud=typeof CSS<"u"&&CSS.supports&&CSS.supports("-webkit-backdrop-filter","none")),Ud}function kR(e){return/^(html|body|#document)$/.test(V2(e))}function Wm(e){return dn(e).getComputedStyle(e)}function TR(e){if(V2(e)==="html")return e;const t=e.assignedSlot||e.parentNode||d1(e)&&e.host||U2(e);return d1(t)?t.host:t}function G2(e){const t=TR(e);return kR(t)?e.ownerDocument?e.ownerDocument.body:e.body:Hm(t)&&W2(t)?t:G2(t)}function iu(e,t,n){var r;t===void 0&&(t=[]),n===void 0&&(n=!0);const i=G2(e),o=i===((r=e.ownerDocument)==null?void 0:r.body),a=dn(i);if(o){const l=Bp(a);return t.concat(a,a.visualViewport||[],W2(i)?i:[],l&&n?iu(l):[])}else return t.concat(i,iu(i,[],n))}function Bp(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function PR(e){const t=Wm(e);let n=parseFloat(t.width)||0,r=parseFloat(t.height)||0;const i=Hm(e),o=i?e.offsetWidth:n,a=i?e.offsetHeight:r,l=nu(n)!==o||nu(r)!==a;return l&&(n=o,r=a),{width:n,height:r,$:l}}function Gm(e){return Np(e)?e:e.contextElement}function Hd(e){const t=Gm(e);if(!Hm(t))return ru(1);const n=t.getBoundingClientRect(),{width:r,height:i,$:o}=PR(t);let a=(o?nu(n.width):n.width)/r,l=(o?nu(n.height):n.height)/i;return(!a||!Number.isFinite(a))&&(a=1),(!l||!Number.isFinite(l))&&(l=1),{x:a,y:l}}const OR=ru(0);function jR(e){const t=dn(e);return!ER()||!t.visualViewport?OR:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function MR(e,t,n){return t===void 0&&(t=!1),!n||t&&n!==dn(e)?!1:t}function f1(e,t,n,r){t===void 0&&(t=!1),n===void 0&&(n=!1);const i=e.getBoundingClientRect(),o=Gm(e);let a=ru(1);t&&(r?Np(r)&&(a=Hd(r)):a=Hd(e));const l=MR(o,n,r)?jR(o):ru(0);let s=(i.left+l.x)/a.x,u=(i.top+l.y)/a.y,d=i.width/a.x,c=i.height/a.y;if(o){const y=dn(o),p=r&&Np(r)?dn(r):r;let m=y,g=Bp(m);for(;g&&r&&p!==m;){const w=Hd(g),h=g.getBoundingClientRect(),v=Wm(g),x=h.left+(g.clientLeft+parseFloat(v.paddingLeft))*w.x,S=h.top+(g.clientTop+parseFloat(v.paddingTop))*w.y;s*=w.x,u*=w.y,d*=w.x,c*=w.y,s+=x,u+=S,m=dn(g),g=Bp(m)}}return CR({width:d,height:c,x:s,y:u})}function Y2(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function $R(e,t){let n=null,r;const i=U2(e);function o(){var l;clearTimeout(r),(l=n)==null||l.disconnect(),n=null}function a(l,s){l===void 0&&(l=!1),s===void 0&&(s=1),o();const u=e.getBoundingClientRect(),{left:d,top:c,width:y,height:p}=u;if(l||t(),!y||!p)return;const m=ks(c),g=ks(i.clientWidth-(d+y)),w=ks(i.clientHeight-(c+p)),h=ks(d),x={rootMargin:-m+"px "+-g+"px "+-w+"px "+-h+"px",threshold:_R(0,SR(1,s))||1};let S=!0;function E(P){const k=P[0].intersectionRatio;if(k!==s){if(!S)return a();k?a(!1,k):r=setTimeout(()=>{a(!1,1e-7)},1e3)}k===1&&!Y2(u,e.getBoundingClientRect())&&a(),S=!1}try{n=new IntersectionObserver(E,{...x,root:i.ownerDocument})}catch{n=new IntersectionObserver(E,x)}n.observe(e)}return a(!0),o}function IR(e,t,n,r){r===void 0&&(r={});const{ancestorScroll:i=!0,ancestorResize:o=!0,elementResize:a=typeof ResizeObserver=="function",layoutShift:l=typeof IntersectionObserver=="function",animationFrame:s=!1}=r,u=Gm(e),d=i||o?[...u?iu(u):[],...t?iu(t):[]]:[];d.forEach(h=>{i&&h.addEventListener("scroll",n,{passive:!0}),o&&h.addEventListener("resize",n)});const c=u&&l?$R(u,n):null;let y=-1,p=null;a&&(p=new ResizeObserver(h=>{let[v]=h;v&&v.target===u&&p&&t&&(p.unobserve(t),cancelAnimationFrame(y),y=requestAnimationFrame(()=>{var x;(x=p)==null||x.observe(t)})),n()}),u&&!s&&p.observe(u),t&&p.observe(t));let m,g=s?f1(e):null;s&&w();function w(){const h=f1(e);g&&!Y2(g,h)&&n(),g=h,m=requestAnimationFrame(w)}return n(),()=>{var h;d.forEach(v=>{i&&v.removeEventListener("scroll",n),o&&v.removeEventListener("resize",n)}),c==null||c(),(h=p)==null||h.disconnect(),p=null,s&&cancelAnimationFrame(m)}}var Vp=b.useLayoutEffect,DR=["className","clearValue","cx","getStyles","getClassNames","getValue","hasValue","isMulti","isRtl","options","selectOption","selectProps","setValue","theme"],ou=function(){};function LR(e,t){return t?t[0]==="-"?e+t:e+"__"+t:e}function AR(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var o=[].concat(r);if(t&&e)for(var a in t)t.hasOwnProperty(a)&&t[a]&&o.push("".concat(LR(e,a)));return o.filter(function(l){return l}).map(function(l){return String(l).trim()}).join(" ")}var p1=function(t){return WR(t)?t.filter(Boolean):ni(t)==="object"&&t!==null?[t]:[]},q2=function(t){t.className,t.clearValue,t.cx,t.getStyles,t.getClassNames,t.getValue,t.hasValue,t.isMulti,t.isRtl,t.options,t.selectOption,t.selectProps,t.setValue,t.theme;var n=tr(t,DR);return Z({},n)},Pe=function(t,n,r){var i=t.cx,o=t.getStyles,a=t.getClassNames,l=t.className;return{css:o(n,t),className:i(r??{},a(n,t),l)}};function Pc(e){return[document.documentElement,document.body,window].indexOf(e)>-1}function RR(e){return Pc(e)?window.innerHeight:e.clientHeight}function X2(e){return Pc(e)?window.pageYOffset:e.scrollTop}function au(e,t){if(Pc(e)){window.scrollTo(0,t);return}e.scrollTop=t}function FR(e){var t=getComputedStyle(e),n=t.position==="absolute",r=/(auto|scroll)/;if(t.position==="fixed")return document.documentElement;for(var i=e;i=i.parentElement;)if(t=getComputedStyle(i),!(n&&t.position==="static")&&r.test(t.overflow+t.overflowY+t.overflowX))return i;return document.documentElement}function zR(e,t,n,r){return n*((e=e/r-1)*e*e+1)+t}function Ts(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:200,r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:ou,i=X2(e),o=t-i,a=10,l=0;function s(){l+=a;var u=zR(l,i,o,n);au(e,u),l<n?window.requestAnimationFrame(s):r(e)}s()}function h1(e,t){var n=e.getBoundingClientRect(),r=t.getBoundingClientRect(),i=t.offsetHeight/3;r.bottom+i>n.bottom?au(e,Math.min(t.offsetTop+t.clientHeight-e.offsetHeight+i,e.scrollHeight)):r.top-i<n.top&&au(e,Math.max(t.offsetTop-i,0))}function NR(e){var t=e.getBoundingClientRect();return{bottom:t.bottom,height:t.height,left:t.left,right:t.right,top:t.top,width:t.width}}function m1(){try{return document.createEvent("TouchEvent"),!0}catch{return!1}}function BR(){try{return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}catch{return!1}}var K2=!1,VR={get passive(){return K2=!0}},Ps=typeof window<"u"?window:{};Ps.addEventListener&&Ps.removeEventListener&&(Ps.addEventListener("p",ou,VR),Ps.removeEventListener("p",ou,!1));var UR=K2;function HR(e){return e!=null}function WR(e){return Array.isArray(e)}function Os(e,t,n){return e?t:n}var GR=function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];var o=Object.entries(t).filter(function(a){var l=Un(a,1),s=l[0];return!r.includes(s)});return o.reduce(function(a,l){var s=Un(l,2),u=s[0],d=s[1];return a[u]=d,a},{})},YR=["children","innerProps"],qR=["children","innerProps"];function XR(e){var t=e.maxHeight,n=e.menuEl,r=e.minHeight,i=e.placement,o=e.shouldScroll,a=e.isFixedPosition,l=e.controlHeight,s=FR(n),u={placement:"bottom",maxHeight:t};if(!n||!n.offsetParent)return u;var d=s.getBoundingClientRect(),c=d.height,y=n.getBoundingClientRect(),p=y.bottom,m=y.height,g=y.top,w=n.offsetParent.getBoundingClientRect(),h=w.top,v=a?window.innerHeight:RR(s),x=X2(s),S=parseInt(getComputedStyle(n).marginBottom,10),E=parseInt(getComputedStyle(n).marginTop,10),P=h-E,k=v-g,_=P+x,M=c-x-g,$=p-v+x+S,D=x+g-E,A=160;switch(i){case"auto":case"bottom":if(k>=m)return{placement:"bottom",maxHeight:t};if(M>=m&&!a)return o&&Ts(s,$,A),{placement:"bottom",maxHeight:t};if(!a&&M>=r||a&&k>=r){o&&Ts(s,$,A);var j=a?k-S:M-S;return{placement:"bottom",maxHeight:j}}if(i==="auto"||a){var F=t,R=a?P:_;return R>=r&&(F=Math.min(R-S-l,t)),{placement:"top",maxHeight:F}}if(i==="bottom")return o&&au(s,$),{placement:"bottom",maxHeight:t};break;case"top":if(P>=m)return{placement:"top",maxHeight:t};if(_>=m&&!a)return o&&Ts(s,D,A),{placement:"top",maxHeight:t};if(!a&&_>=r||a&&P>=r){var L=t;return(!a&&_>=r||a&&P>=r)&&(L=a?P-E:_-E),o&&Ts(s,D,A),{placement:"top",maxHeight:L}}return{placement:"bottom",maxHeight:t};default:throw new Error('Invalid placement provided "'.concat(i,'".'))}return u}function KR(e){var t={bottom:"top",top:"bottom"};return e?t[e]:"bottom"}var Q2=function(t){return t==="auto"?"bottom":t},QR=function(t,n){var r,i=t.placement,o=t.theme,a=o.borderRadius,l=o.spacing,s=o.colors;return Z((r={label:"menu"},Go(r,KR(i),"100%"),Go(r,"position","absolute"),Go(r,"width","100%"),Go(r,"zIndex",1),r),n?{}:{backgroundColor:s.neutral0,borderRadius:a,boxShadow:"0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)",marginBottom:l.menuGutter,marginTop:l.menuGutter})},Z2=b.createContext(null),ZR=function(t){var n=t.children,r=t.minMenuHeight,i=t.maxMenuHeight,o=t.menuPlacement,a=t.menuPosition,l=t.menuShouldScrollIntoView,s=t.theme,u=b.useContext(Z2)||{},d=u.setPortalPlacement,c=b.useRef(null),y=b.useState(i),p=Un(y,2),m=p[0],g=p[1],w=b.useState(null),h=Un(w,2),v=h[0],x=h[1],S=s.spacing.controlHeight;return Vp(function(){var E=c.current;if(E){var P=a==="fixed",k=l&&!P,_=XR({maxHeight:i,menuEl:E,minHeight:r,placement:o,shouldScroll:k,isFixedPosition:P,controlHeight:S});g(_.maxHeight),x(_.placement),d==null||d(_.placement)}},[i,o,a,l,r,d,S]),n({ref:c,placerProps:Z(Z({},t),{},{placement:v||Q2(o),maxHeight:m})})},JR=function(t){var n=t.children,r=t.innerRef,i=t.innerProps;return Q("div",J({},Pe(t,"menu",{menu:!0}),{ref:r},i),n)},e8=JR,t8=function(t,n){var r=t.maxHeight,i=t.theme.spacing.baseUnit;return Z({maxHeight:r,overflowY:"auto",position:"relative",WebkitOverflowScrolling:"touch"},n?{}:{paddingBottom:i,paddingTop:i})},n8=function(t){var n=t.children,r=t.innerProps,i=t.innerRef,o=t.isMulti;return Q("div",J({},Pe(t,"menuList",{"menu-list":!0,"menu-list--is-multi":o}),{ref:i},r),n)},J2=function(t,n){var r=t.theme,i=r.spacing.baseUnit,o=r.colors;return Z({textAlign:"center"},n?{}:{color:o.neutral40,padding:"".concat(i*2,"px ").concat(i*3,"px")})},r8=J2,i8=J2,o8=function(t){var n=t.children,r=n===void 0?"No options":n,i=t.innerProps,o=tr(t,YR);return Q("div",J({},Pe(Z(Z({},o),{},{children:r,innerProps:i}),"noOptionsMessage",{"menu-notice":!0,"menu-notice--no-options":!0}),i),r)},a8=function(t){var n=t.children,r=n===void 0?"Loading...":n,i=t.innerProps,o=tr(t,qR);return Q("div",J({},Pe(Z(Z({},o),{},{children:r,innerProps:i}),"loadingMessage",{"menu-notice":!0,"menu-notice--loading":!0}),i),r)},s8=function(t){var n=t.rect,r=t.offset,i=t.position;return{left:n.left,position:i,top:r,width:n.width,zIndex:1}},l8=function(t){var n=t.appendTo,r=t.children,i=t.controlElement,o=t.innerProps,a=t.menuPlacement,l=t.menuPosition,s=b.useRef(null),u=b.useRef(null),d=b.useState(Q2(a)),c=Un(d,2),y=c[0],p=c[1],m=b.useMemo(function(){return{setPortalPlacement:p}},[]),g=b.useState(null),w=Un(g,2),h=w[0],v=w[1],x=b.useCallback(function(){if(i){var k=NR(i),_=l==="fixed"?0:window.pageYOffset,M=k[y]+_;(M!==(h==null?void 0:h.offset)||k.left!==(h==null?void 0:h.rect.left)||k.width!==(h==null?void 0:h.rect.width))&&v({offset:M,rect:k})}},[i,l,y,h==null?void 0:h.offset,h==null?void 0:h.rect.left,h==null?void 0:h.rect.width]);Vp(function(){x()},[x]);var S=b.useCallback(function(){typeof u.current=="function"&&(u.current(),u.current=null),i&&s.current&&(u.current=IR(i,s.current,x,{elementResize:"ResizeObserver"in window}))},[i,x]);Vp(function(){S()},[S]);var E=b.useCallback(function(k){s.current=k,S()},[S]);if(!n&&l!=="fixed"||!h)return null;var P=Q("div",J({ref:E},Pe(Z(Z({},t),{},{offset:h.offset,position:l,rect:h.rect}),"menuPortal",{"menu-portal":!0}),o),r);return Q(Z2.Provider,{value:m},n?ku.createPortal(P,n):P)},u8=function(t){var n=t.isDisabled,r=t.isRtl;return{label:"container",direction:r?"rtl":void 0,pointerEvents:n?"none":void 0,position:"relative"}},c8=function(t){var n=t.children,r=t.innerProps,i=t.isDisabled,o=t.isRtl;return Q("div",J({},Pe(t,"container",{"--is-disabled":i,"--is-rtl":o}),r),n)},d8=function(t,n){var r=t.theme.spacing,i=t.isMulti,o=t.hasValue,a=t.selectProps.controlShouldRenderValue;return Z({alignItems:"center",display:i&&o&&a?"flex":"grid",flex:1,flexWrap:"wrap",WebkitOverflowScrolling:"touch",position:"relative",overflow:"hidden"},n?{}:{padding:"".concat(r.baseUnit/2,"px ").concat(r.baseUnit*2,"px")})},f8=function(t){var n=t.children,r=t.innerProps,i=t.isMulti,o=t.hasValue;return Q("div",J({},Pe(t,"valueContainer",{"value-container":!0,"value-container--is-multi":i,"value-container--has-value":o}),r),n)},p8=function(){return{alignItems:"center",alignSelf:"stretch",display:"flex",flexShrink:0}},h8=function(t){var n=t.children,r=t.innerProps;return Q("div",J({},Pe(t,"indicatorsContainer",{indicators:!0}),r),n)},g1,m8=["size"],g8=["innerProps","isRtl","size"],v8={name:"8mmkcg",styles:"display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0"},e_=function(t){var n=t.size,r=tr(t,m8);return Q("svg",J({height:n,width:n,viewBox:"0 0 20 20","aria-hidden":"true",focusable:"false",css:v8},r))},Ym=function(t){return Q(e_,J({size:20},t),Q("path",{d:"M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"}))},t_=function(t){return Q(e_,J({size:20},t),Q("path",{d:"M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"}))},n_=function(t,n){var r=t.isFocused,i=t.theme,o=i.spacing.baseUnit,a=i.colors;return Z({label:"indicatorContainer",display:"flex",transition:"color 150ms"},n?{}:{color:r?a.neutral60:a.neutral20,padding:o*2,":hover":{color:r?a.neutral80:a.neutral40}})},y8=n_,x8=function(t){var n=t.children,r=t.innerProps;return Q("div",J({},Pe(t,"dropdownIndicator",{indicator:!0,"dropdown-indicator":!0}),r),n||Q(t_,null))},b8=n_,w8=function(t){var n=t.children,r=t.innerProps;return Q("div",J({},Pe(t,"clearIndicator",{indicator:!0,"clear-indicator":!0}),r),n||Q(Ym,null))},S8=function(t,n){var r=t.isDisabled,i=t.theme,o=i.spacing.baseUnit,a=i.colors;return Z({label:"indicatorSeparator",alignSelf:"stretch",width:1},n?{}:{backgroundColor:r?a.neutral10:a.neutral20,marginBottom:o*2,marginTop:o*2})},_8=function(t){var n=t.innerProps;return Q("span",J({},n,Pe(t,"indicatorSeparator",{"indicator-separator":!0})))},C8=U3(g1||(g1=wR([`
  0%, 80%, 100% { opacity: 0; }
  40% { opacity: 1; }
`]))),E8=function(t,n){var r=t.isFocused,i=t.size,o=t.theme,a=o.colors,l=o.spacing.baseUnit;return Z({label:"loadingIndicator",display:"flex",transition:"color 150ms",alignSelf:"center",fontSize:i,lineHeight:1,marginRight:i,textAlign:"center",verticalAlign:"middle"},n?{}:{color:r?a.neutral60:a.neutral20,padding:l*2})},Wd=function(t){var n=t.delay,r=t.offset;return Q("span",{css:ym({animation:"".concat(C8," 1s ease-in-out ").concat(n,"ms infinite;"),backgroundColor:"currentColor",borderRadius:"1em",display:"inline-block",marginLeft:r?"1em":void 0,height:"1em",verticalAlign:"top",width:"1em"},"","")})},k8=function(t){var n=t.innerProps,r=t.isRtl,i=t.size,o=i===void 0?4:i,a=tr(t,g8);return Q("div",J({},Pe(Z(Z({},a),{},{innerProps:n,isRtl:r,size:o}),"loadingIndicator",{indicator:!0,"loading-indicator":!0}),n),Q(Wd,{delay:0,offset:r}),Q(Wd,{delay:160,offset:!0}),Q(Wd,{delay:320,offset:!r}))},T8=function(t,n){var r=t.isDisabled,i=t.isFocused,o=t.theme,a=o.colors,l=o.borderRadius,s=o.spacing;return Z({label:"control",alignItems:"center",cursor:"default",display:"flex",flexWrap:"wrap",justifyContent:"space-between",minHeight:s.controlHeight,outline:"0 !important",position:"relative",transition:"all 100ms"},n?{}:{backgroundColor:r?a.neutral5:a.neutral0,borderColor:r?a.neutral10:i?a.primary:a.neutral20,borderRadius:l,borderStyle:"solid",borderWidth:1,boxShadow:i?"0 0 0 1px ".concat(a.primary):void 0,"&:hover":{borderColor:i?a.primary:a.neutral30}})},P8=function(t){var n=t.children,r=t.isDisabled,i=t.isFocused,o=t.innerRef,a=t.innerProps,l=t.menuIsOpen;return Q("div",J({ref:o},Pe(t,"control",{control:!0,"control--is-disabled":r,"control--is-focused":i,"control--menu-is-open":l}),a,{"aria-disabled":r||void 0}),n)},O8=P8,j8=["data"],M8=function(t,n){var r=t.theme.spacing;return n?{}:{paddingBottom:r.baseUnit*2,paddingTop:r.baseUnit*2}},$8=function(t){var n=t.children,r=t.cx,i=t.getStyles,o=t.getClassNames,a=t.Heading,l=t.headingProps,s=t.innerProps,u=t.label,d=t.theme,c=t.selectProps;return Q("div",J({},Pe(t,"group",{group:!0}),s),Q(a,J({},l,{selectProps:c,theme:d,getStyles:i,getClassNames:o,cx:r}),u),Q("div",null,n))},I8=function(t,n){var r=t.theme,i=r.colors,o=r.spacing;return Z({label:"group",cursor:"default",display:"block"},n?{}:{color:i.neutral40,fontSize:"75%",fontWeight:500,marginBottom:"0.25em",paddingLeft:o.baseUnit*3,paddingRight:o.baseUnit*3,textTransform:"uppercase"})},D8=function(t){var n=q2(t);n.data;var r=tr(n,j8);return Q("div",J({},Pe(t,"groupHeading",{"group-heading":!0}),r))},L8=$8,A8=["innerRef","isDisabled","isHidden","inputClassName"],R8=function(t,n){var r=t.isDisabled,i=t.value,o=t.theme,a=o.spacing,l=o.colors;return Z(Z({visibility:r?"hidden":"visible",transform:i?"translateZ(0)":""},F8),n?{}:{margin:a.baseUnit/2,paddingBottom:a.baseUnit/2,paddingTop:a.baseUnit/2,color:l.neutral80})},r_={gridArea:"1 / 2",font:"inherit",minWidth:"2px",border:0,margin:0,outline:0,padding:0},F8={flex:"1 1 auto",display:"inline-grid",gridArea:"1 / 1 / 2 / 3",gridTemplateColumns:"0 min-content","&:after":Z({content:'attr(data-value) " "',visibility:"hidden",whiteSpace:"pre"},r_)},z8=function(t){return Z({label:"input",color:"inherit",background:0,opacity:t?0:1,width:"100%"},r_)},N8=function(t){var n=t.cx,r=t.value,i=q2(t),o=i.innerRef,a=i.isDisabled,l=i.isHidden,s=i.inputClassName,u=tr(i,A8);return Q("div",J({},Pe(t,"input",{"input-container":!0}),{"data-value":r||""}),Q("input",J({className:n({input:!0},s),ref:o,style:z8(l),disabled:a},u)))},B8=N8,V8=function(t,n){var r=t.theme,i=r.spacing,o=r.borderRadius,a=r.colors;return Z({label:"multiValue",display:"flex",minWidth:0},n?{}:{backgroundColor:a.neutral10,borderRadius:o/2,margin:i.baseUnit/2})},U8=function(t,n){var r=t.theme,i=r.borderRadius,o=r.colors,a=t.cropWithEllipsis;return Z({overflow:"hidden",textOverflow:a||a===void 0?"ellipsis":void 0,whiteSpace:"nowrap"},n?{}:{borderRadius:i/2,color:o.neutral80,fontSize:"85%",padding:3,paddingLeft:6})},H8=function(t,n){var r=t.theme,i=r.spacing,o=r.borderRadius,a=r.colors,l=t.isFocused;return Z({alignItems:"center",display:"flex"},n?{}:{borderRadius:o/2,backgroundColor:l?a.dangerLight:void 0,paddingLeft:i.baseUnit,paddingRight:i.baseUnit,":hover":{backgroundColor:a.dangerLight,color:a.danger}})},i_=function(t){var n=t.children,r=t.innerProps;return Q("div",r,n)},W8=i_,G8=i_;function Y8(e){var t=e.children,n=e.innerProps;return Q("div",J({role:"button"},n),t||Q(Ym,{size:14}))}var q8=function(t){var n=t.children,r=t.components,i=t.data,o=t.innerProps,a=t.isDisabled,l=t.removeProps,s=t.selectProps,u=r.Container,d=r.Label,c=r.Remove;return Q(u,{data:i,innerProps:Z(Z({},Pe(t,"multiValue",{"multi-value":!0,"multi-value--is-disabled":a})),o),selectProps:s},Q(d,{data:i,innerProps:Z({},Pe(t,"multiValueLabel",{"multi-value__label":!0})),selectProps:s},n),Q(c,{data:i,innerProps:Z(Z({},Pe(t,"multiValueRemove",{"multi-value__remove":!0})),{},{"aria-label":"Remove ".concat(n||"option")},l),selectProps:s}))},X8=q8,K8=function(t,n){var r=t.isDisabled,i=t.isFocused,o=t.isSelected,a=t.theme,l=a.spacing,s=a.colors;return Z({label:"option",cursor:"default",display:"block",fontSize:"inherit",width:"100%",userSelect:"none",WebkitTapHighlightColor:"rgba(0, 0, 0, 0)"},n?{}:{backgroundColor:o?s.primary:i?s.primary25:"transparent",color:r?s.neutral20:o?s.neutral0:"inherit",padding:"".concat(l.baseUnit*2,"px ").concat(l.baseUnit*3,"px"),":active":{backgroundColor:r?void 0:o?s.primary:s.primary50}})},Q8=function(t){var n=t.children,r=t.isDisabled,i=t.isFocused,o=t.isSelected,a=t.innerRef,l=t.innerProps;return Q("div",J({},Pe(t,"option",{option:!0,"option--is-disabled":r,"option--is-focused":i,"option--is-selected":o}),{ref:a,"aria-disabled":r},l),n)},Z8=Q8,J8=function(t,n){var r=t.theme,i=r.spacing,o=r.colors;return Z({label:"placeholder",gridArea:"1 / 1 / 2 / 3"},n?{}:{color:o.neutral50,marginLeft:i.baseUnit/2,marginRight:i.baseUnit/2})},eF=function(t){var n=t.children,r=t.innerProps;return Q("div",J({},Pe(t,"placeholder",{placeholder:!0}),r),n)},tF=eF,nF=function(t,n){var r=t.isDisabled,i=t.theme,o=i.spacing,a=i.colors;return Z({label:"singleValue",gridArea:"1 / 1 / 2 / 3",maxWidth:"100%",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},n?{}:{color:r?a.neutral40:a.neutral80,marginLeft:o.baseUnit/2,marginRight:o.baseUnit/2})},rF=function(t){var n=t.children,r=t.isDisabled,i=t.innerProps;return Q("div",J({},Pe(t,"singleValue",{"single-value":!0,"single-value--is-disabled":r}),i),n)},iF=rF,oF={ClearIndicator:w8,Control:O8,DropdownIndicator:x8,DownChevron:t_,CrossIcon:Ym,Group:L8,GroupHeading:D8,IndicatorsContainer:h8,IndicatorSeparator:_8,Input:B8,LoadingIndicator:k8,Menu:e8,MenuList:n8,MenuPortal:l8,LoadingMessage:a8,NoOptionsMessage:o8,MultiValue:X8,MultiValueContainer:W8,MultiValueLabel:G8,MultiValueRemove:Y8,Option:Z8,Placeholder:tF,SelectContainer:c8,SingleValue:iF,ValueContainer:f8},aF=function(t){return Z(Z({},oF),t.components)},v1=Number.isNaN||function(t){return typeof t=="number"&&t!==t};function sF(e,t){return!!(e===t||v1(e)&&v1(t))}function lF(e,t){if(e.length!==t.length)return!1;for(var n=0;n<e.length;n++)if(!sF(e[n],t[n]))return!1;return!0}function uF(e,t){t===void 0&&(t=lF);var n=null;function r(){for(var i=[],o=0;o<arguments.length;o++)i[o]=arguments[o];if(n&&n.lastThis===this&&t(i,n.lastArgs))return n.lastResult;var a=e.apply(this,i);return n={lastResult:a,lastArgs:i,lastThis:this},a}return r.clear=function(){n=null},r}var cF={name:"7pg0cj-a11yText",styles:"label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap"},dF=function(t){return Q("span",J({css:cF},t))},y1=dF,fF={guidance:function(t){var n=t.isSearchable,r=t.isMulti,i=t.tabSelectsValue,o=t.context,a=t.isInitialFocus;switch(o){case"menu":return"Use Up and Down to choose options, press Enter to select the currently focused option, press Escape to exit the menu".concat(i?", press Tab to select the option and exit the menu":"",".");case"input":return a?"".concat(t["aria-label"]||"Select"," is focused ").concat(n?",type to refine list":"",", press Down to open the menu, ").concat(r?" press left to focus selected values":""):"";case"value":return"Use left and right to toggle between focused values, press Backspace to remove the currently focused value";default:return""}},onChange:function(t){var n=t.action,r=t.label,i=r===void 0?"":r,o=t.labels,a=t.isDisabled;switch(n){case"deselect-option":case"pop-value":case"remove-value":return"option ".concat(i,", deselected.");case"clear":return"All selected options have been cleared.";case"initial-input-focus":return"option".concat(o.length>1?"s":""," ").concat(o.join(","),", selected.");case"select-option":return a?"option ".concat(i," is disabled. Select another option."):"option ".concat(i,", selected.");default:return""}},onFocus:function(t){var n=t.context,r=t.focused,i=t.options,o=t.label,a=o===void 0?"":o,l=t.selectValue,s=t.isDisabled,u=t.isSelected,d=t.isAppleDevice,c=function(g,w){return g&&g.length?"".concat(g.indexOf(w)+1," of ").concat(g.length):""};if(n==="value"&&l)return"value ".concat(a," focused, ").concat(c(l,r),".");if(n==="menu"&&d){var y=s?" disabled":"",p="".concat(u?" selected":"").concat(y);return"".concat(a).concat(p,", ").concat(c(i,r),".")}return""},onFilter:function(t){var n=t.inputValue,r=t.resultsMessage;return"".concat(r).concat(n?" for search term "+n:"",".")}},pF=function(t){var n=t.ariaSelection,r=t.focusedOption,i=t.focusedValue,o=t.focusableOptions,a=t.isFocused,l=t.selectValue,s=t.selectProps,u=t.id,d=t.isAppleDevice,c=s.ariaLiveMessages,y=s.getOptionLabel,p=s.inputValue,m=s.isMulti,g=s.isOptionDisabled,w=s.isSearchable,h=s.menuIsOpen,v=s.options,x=s.screenReaderStatus,S=s.tabSelectsValue,E=s.isLoading,P=s["aria-label"],k=s["aria-live"],_=b.useMemo(function(){return Z(Z({},fF),c||{})},[c]),M=b.useMemo(function(){var R="";if(n&&_.onChange){var L=n.option,O=n.options,T=n.removedValue,I=n.removedValues,z=n.value,B=function(fe){return Array.isArray(fe)?null:fe},N=T||L||B(z),U=N?y(N):"",G=O||I||void 0,H=G?G.map(y):[],X=Z({isDisabled:N&&g(N,l),label:U,labels:H},n);R=_.onChange(X)}return R},[n,_,g,l,y]),$=b.useMemo(function(){var R="",L=r||i,O=!!(r&&l&&l.includes(r));if(L&&_.onFocus){var T={focused:L,label:y(L),isDisabled:g(L,l),isSelected:O,options:o,context:L===r?"menu":"value",selectValue:l,isAppleDevice:d};R=_.onFocus(T)}return R},[r,i,y,g,_,o,l,d]),D=b.useMemo(function(){var R="";if(h&&v.length&&!E&&_.onFilter){var L=x({count:o.length});R=_.onFilter({inputValue:p,resultsMessage:L})}return R},[o,p,h,_,v,x,E]),A=(n==null?void 0:n.action)==="initial-input-focus",j=b.useMemo(function(){var R="";if(_.guidance){var L=i?"value":h?"menu":"input";R=_.guidance({"aria-label":P,context:L,isDisabled:r&&g(r,l),isMulti:m,isSearchable:w,tabSelectsValue:S,isInitialFocus:A})}return R},[P,r,i,m,g,w,h,_,l,S,A]),F=Q(b.Fragment,null,Q("span",{id:"aria-selection"},M),Q("span",{id:"aria-focused"},$),Q("span",{id:"aria-results"},D),Q("span",{id:"aria-guidance"},j));return Q(b.Fragment,null,Q(y1,{id:u},A&&F),Q(y1,{"aria-live":k,"aria-atomic":"false","aria-relevant":"additions text",role:"log"},a&&!A&&F))},hF=pF,Up=[{base:"A",letters:"AⒶＡÀÁÂẦẤẪẨÃĀĂẰẮẴẲȦǠÄǞẢÅǺǍȀȂẠẬẶḀĄȺⱯ"},{base:"AA",letters:"Ꜳ"},{base:"AE",letters:"ÆǼǢ"},{base:"AO",letters:"Ꜵ"},{base:"AU",letters:"Ꜷ"},{base:"AV",letters:"ꜸꜺ"},{base:"AY",letters:"Ꜽ"},{base:"B",letters:"BⒷＢḂḄḆɃƂƁ"},{base:"C",letters:"CⒸＣĆĈĊČÇḈƇȻꜾ"},{base:"D",letters:"DⒹＤḊĎḌḐḒḎĐƋƊƉꝹ"},{base:"DZ",letters:"ǱǄ"},{base:"Dz",letters:"ǲǅ"},{base:"E",letters:"EⒺＥÈÉÊỀẾỄỂẼĒḔḖĔĖËẺĚȄȆẸỆȨḜĘḘḚƐƎ"},{base:"F",letters:"FⒻＦḞƑꝻ"},{base:"G",letters:"GⒼＧǴĜḠĞĠǦĢǤƓꞠꝽꝾ"},{base:"H",letters:"HⒽＨĤḢḦȞḤḨḪĦⱧⱵꞍ"},{base:"I",letters:"IⒾＩÌÍÎĨĪĬİÏḮỈǏȈȊỊĮḬƗ"},{base:"J",letters:"JⒿＪĴɈ"},{base:"K",letters:"KⓀＫḰǨḲĶḴƘⱩꝀꝂꝄꞢ"},{base:"L",letters:"LⓁＬĿĹĽḶḸĻḼḺŁȽⱢⱠꝈꝆꞀ"},{base:"LJ",letters:"Ǉ"},{base:"Lj",letters:"ǈ"},{base:"M",letters:"MⓂＭḾṀṂⱮƜ"},{base:"N",letters:"NⓃＮǸŃÑṄŇṆŅṊṈȠƝꞐꞤ"},{base:"NJ",letters:"Ǌ"},{base:"Nj",letters:"ǋ"},{base:"O",letters:"OⓄＯÒÓÔỒỐỖỔÕṌȬṎŌṐṒŎȮȰÖȪỎŐǑȌȎƠỜỚỠỞỢỌỘǪǬØǾƆƟꝊꝌ"},{base:"OI",letters:"Ƣ"},{base:"OO",letters:"Ꝏ"},{base:"OU",letters:"Ȣ"},{base:"P",letters:"PⓅＰṔṖƤⱣꝐꝒꝔ"},{base:"Q",letters:"QⓆＱꝖꝘɊ"},{base:"R",letters:"RⓇＲŔṘŘȐȒṚṜŖṞɌⱤꝚꞦꞂ"},{base:"S",letters:"SⓈＳẞŚṤŜṠŠṦṢṨȘŞⱾꞨꞄ"},{base:"T",letters:"TⓉＴṪŤṬȚŢṰṮŦƬƮȾꞆ"},{base:"TZ",letters:"Ꜩ"},{base:"U",letters:"UⓊＵÙÚÛŨṸŪṺŬÜǛǗǕǙỦŮŰǓȔȖƯỪỨỮỬỰỤṲŲṶṴɄ"},{base:"V",letters:"VⓋＶṼṾƲꝞɅ"},{base:"VY",letters:"Ꝡ"},{base:"W",letters:"WⓌＷẀẂŴẆẄẈⱲ"},{base:"X",letters:"XⓍＸẊẌ"},{base:"Y",letters:"YⓎＹỲÝŶỸȲẎŸỶỴƳɎỾ"},{base:"Z",letters:"ZⓏＺŹẐŻŽẒẔƵȤⱿⱫꝢ"},{base:"a",letters:"aⓐａẚàáâầấẫẩãāăằắẵẳȧǡäǟảåǻǎȁȃạậặḁąⱥɐ"},{base:"aa",letters:"ꜳ"},{base:"ae",letters:"æǽǣ"},{base:"ao",letters:"ꜵ"},{base:"au",letters:"ꜷ"},{base:"av",letters:"ꜹꜻ"},{base:"ay",letters:"ꜽ"},{base:"b",letters:"bⓑｂḃḅḇƀƃɓ"},{base:"c",letters:"cⓒｃćĉċčçḉƈȼꜿↄ"},{base:"d",letters:"dⓓｄḋďḍḑḓḏđƌɖɗꝺ"},{base:"dz",letters:"ǳǆ"},{base:"e",letters:"eⓔｅèéêềếễểẽēḕḗĕėëẻěȅȇẹệȩḝęḙḛɇɛǝ"},{base:"f",letters:"fⓕｆḟƒꝼ"},{base:"g",letters:"gⓖｇǵĝḡğġǧģǥɠꞡᵹꝿ"},{base:"h",letters:"hⓗｈĥḣḧȟḥḩḫẖħⱨⱶɥ"},{base:"hv",letters:"ƕ"},{base:"i",letters:"iⓘｉìíîĩīĭïḯỉǐȉȋịįḭɨı"},{base:"j",letters:"jⓙｊĵǰɉ"},{base:"k",letters:"kⓚｋḱǩḳķḵƙⱪꝁꝃꝅꞣ"},{base:"l",letters:"lⓛｌŀĺľḷḹļḽḻſłƚɫⱡꝉꞁꝇ"},{base:"lj",letters:"ǉ"},{base:"m",letters:"mⓜｍḿṁṃɱɯ"},{base:"n",letters:"nⓝｎǹńñṅňṇņṋṉƞɲŉꞑꞥ"},{base:"nj",letters:"ǌ"},{base:"o",letters:"oⓞｏòóôồốỗổõṍȭṏōṑṓŏȯȱöȫỏőǒȍȏơờớỡởợọộǫǭøǿɔꝋꝍɵ"},{base:"oi",letters:"ƣ"},{base:"ou",letters:"ȣ"},{base:"oo",letters:"ꝏ"},{base:"p",letters:"pⓟｐṕṗƥᵽꝑꝓꝕ"},{base:"q",letters:"qⓠｑɋꝗꝙ"},{base:"r",letters:"rⓡｒŕṙřȑȓṛṝŗṟɍɽꝛꞧꞃ"},{base:"s",letters:"sⓢｓßśṥŝṡšṧṣṩșşȿꞩꞅẛ"},{base:"t",letters:"tⓣｔṫẗťṭțţṱṯŧƭʈⱦꞇ"},{base:"tz",letters:"ꜩ"},{base:"u",letters:"uⓤｕùúûũṹūṻŭüǜǘǖǚủůűǔȕȗưừứữửựụṳųṷṵʉ"},{base:"v",letters:"vⓥｖṽṿʋꝟʌ"},{base:"vy",letters:"ꝡ"},{base:"w",letters:"wⓦｗẁẃŵẇẅẘẉⱳ"},{base:"x",letters:"xⓧｘẋẍ"},{base:"y",letters:"yⓨｙỳýŷỹȳẏÿỷẙỵƴɏỿ"},{base:"z",letters:"zⓩｚźẑżžẓẕƶȥɀⱬꝣ"}],mF=new RegExp("["+Up.map(function(e){return e.letters}).join("")+"]","g"),o_={};for(var Gd=0;Gd<Up.length;Gd++)for(var Yd=Up[Gd],qd=0;qd<Yd.letters.length;qd++)o_[Yd.letters[qd]]=Yd.base;var a_=function(t){return t.replace(mF,function(n){return o_[n]})},gF=uF(a_),x1=function(t){return t.replace(/^\s+|\s+$/g,"")},vF=function(t){return"".concat(t.label," ").concat(t.value)},yF=function(t){return function(n,r){if(n.data.__isNew__)return!0;var i=Z({ignoreCase:!0,ignoreAccents:!0,stringify:vF,trim:!0,matchFrom:"any"},t),o=i.ignoreCase,a=i.ignoreAccents,l=i.stringify,s=i.trim,u=i.matchFrom,d=s?x1(r):r,c=s?x1(l(n)):l(n);return o&&(d=d.toLowerCase(),c=c.toLowerCase()),a&&(d=gF(d),c=a_(c)),u==="start"?c.substr(0,d.length)===d:c.indexOf(d)>-1}},xF=["innerRef"];function bF(e){var t=e.innerRef,n=tr(e,xF),r=GR(n,"onExited","in","enter","exit","appear");return Q("input",J({ref:t},r,{css:ym({label:"dummyInput",background:0,border:0,caretColor:"transparent",fontSize:"inherit",gridArea:"1 / 1 / 2 / 3",outline:0,padding:0,width:1,color:"transparent",left:-100,opacity:0,position:"relative",transform:"scale(.01)"},"","")}))}var wF=function(t){t.cancelable&&t.preventDefault(),t.stopPropagation()};function SF(e){var t=e.isEnabled,n=e.onBottomArrive,r=e.onBottomLeave,i=e.onTopArrive,o=e.onTopLeave,a=b.useRef(!1),l=b.useRef(!1),s=b.useRef(0),u=b.useRef(null),d=b.useCallback(function(w,h){if(u.current!==null){var v=u.current,x=v.scrollTop,S=v.scrollHeight,E=v.clientHeight,P=u.current,k=h>0,_=S-E-x,M=!1;_>h&&a.current&&(r&&r(w),a.current=!1),k&&l.current&&(o&&o(w),l.current=!1),k&&h>_?(n&&!a.current&&n(w),P.scrollTop=S,M=!0,a.current=!0):!k&&-h>x&&(i&&!l.current&&i(w),P.scrollTop=0,M=!0,l.current=!0),M&&wF(w)}},[n,r,i,o]),c=b.useCallback(function(w){d(w,w.deltaY)},[d]),y=b.useCallback(function(w){s.current=w.changedTouches[0].clientY},[]),p=b.useCallback(function(w){var h=s.current-w.changedTouches[0].clientY;d(w,h)},[d]),m=b.useCallback(function(w){if(w){var h=UR?{passive:!1}:!1;w.addEventListener("wheel",c,h),w.addEventListener("touchstart",y,h),w.addEventListener("touchmove",p,h)}},[p,y,c]),g=b.useCallback(function(w){w&&(w.removeEventListener("wheel",c,!1),w.removeEventListener("touchstart",y,!1),w.removeEventListener("touchmove",p,!1))},[p,y,c]);return b.useEffect(function(){if(t){var w=u.current;return m(w),function(){g(w)}}},[t,m,g]),function(w){u.current=w}}var b1=["boxSizing","height","overflow","paddingRight","position"],w1={boxSizing:"border-box",overflow:"hidden",position:"relative",height:"100%"};function S1(e){e.cancelable&&e.preventDefault()}function _1(e){e.stopPropagation()}function C1(){var e=this.scrollTop,t=this.scrollHeight,n=e+this.offsetHeight;e===0?this.scrollTop=1:n===t&&(this.scrollTop=e-1)}function E1(){return"ontouchstart"in window||navigator.maxTouchPoints}var k1=!!(typeof window<"u"&&window.document&&window.document.createElement),Fo=0,vi={capture:!1,passive:!1};function _F(e){var t=e.isEnabled,n=e.accountForScrollbars,r=n===void 0?!0:n,i=b.useRef({}),o=b.useRef(null),a=b.useCallback(function(s){if(k1){var u=document.body,d=u&&u.style;if(r&&b1.forEach(function(m){var g=d&&d[m];i.current[m]=g}),r&&Fo<1){var c=parseInt(i.current.paddingRight,10)||0,y=document.body?document.body.clientWidth:0,p=window.innerWidth-y+c||0;Object.keys(w1).forEach(function(m){var g=w1[m];d&&(d[m]=g)}),d&&(d.paddingRight="".concat(p,"px"))}u&&E1()&&(u.addEventListener("touchmove",S1,vi),s&&(s.addEventListener("touchstart",C1,vi),s.addEventListener("touchmove",_1,vi))),Fo+=1}},[r]),l=b.useCallback(function(s){if(k1){var u=document.body,d=u&&u.style;Fo=Math.max(Fo-1,0),r&&Fo<1&&b1.forEach(function(c){var y=i.current[c];d&&(d[c]=y)}),u&&E1()&&(u.removeEventListener("touchmove",S1,vi),s&&(s.removeEventListener("touchstart",C1,vi),s.removeEventListener("touchmove",_1,vi)))}},[r]);return b.useEffect(function(){if(t){var s=o.current;return a(s),function(){l(s)}}},[t,a,l]),function(s){o.current=s}}var CF=function(t){var n=t.target;return n.ownerDocument.activeElement&&n.ownerDocument.activeElement.blur()},EF={name:"1kfdb0e",styles:"position:fixed;left:0;bottom:0;right:0;top:0"};function kF(e){var t=e.children,n=e.lockEnabled,r=e.captureEnabled,i=r===void 0?!0:r,o=e.onBottomArrive,a=e.onBottomLeave,l=e.onTopArrive,s=e.onTopLeave,u=SF({isEnabled:i,onBottomArrive:o,onBottomLeave:a,onTopArrive:l,onTopLeave:s}),d=_F({isEnabled:n}),c=function(p){u(p),d(p)};return Q(b.Fragment,null,n&&Q("div",{onClick:CF,css:EF}),t(c))}var TF={name:"1a0ro4n-requiredInput",styles:"label:requiredInput;opacity:0;pointer-events:none;position:absolute;bottom:0;left:0;right:0;width:100%"},PF=function(t){var n=t.name,r=t.onFocus;return Q("input",{required:!0,name:n,tabIndex:-1,"aria-hidden":"true",onFocus:r,css:TF,value:"",onChange:function(){}})},OF=PF;function qm(e){var t;return typeof window<"u"&&window.navigator!=null?e.test(((t=window.navigator.userAgentData)===null||t===void 0?void 0:t.platform)||window.navigator.platform):!1}function jF(){return qm(/^iPhone/i)}function s_(){return qm(/^Mac/i)}function MF(){return qm(/^iPad/i)||s_()&&navigator.maxTouchPoints>1}function $F(){return jF()||MF()}function IF(){return s_()||$F()}var DF=function(t){return t.label},LF=function(t){return t.label},AF=function(t){return t.value},RF=function(t){return!!t.isDisabled},FF={clearIndicator:b8,container:u8,control:T8,dropdownIndicator:y8,group:M8,groupHeading:I8,indicatorsContainer:p8,indicatorSeparator:S8,input:R8,loadingIndicator:E8,loadingMessage:i8,menu:QR,menuList:t8,menuPortal:s8,multiValue:V8,multiValueLabel:U8,multiValueRemove:H8,noOptionsMessage:r8,option:K8,placeholder:J8,singleValue:nF,valueContainer:d8},zF={primary:"#2684FF",primary75:"#4C9AFF",primary50:"#B2D4FF",primary25:"#DEEBFF",danger:"#DE350B",dangerLight:"#FFBDAD",neutral0:"hsl(0, 0%, 100%)",neutral5:"hsl(0, 0%, 95%)",neutral10:"hsl(0, 0%, 90%)",neutral20:"hsl(0, 0%, 80%)",neutral30:"hsl(0, 0%, 70%)",neutral40:"hsl(0, 0%, 60%)",neutral50:"hsl(0, 0%, 50%)",neutral60:"hsl(0, 0%, 40%)",neutral70:"hsl(0, 0%, 30%)",neutral80:"hsl(0, 0%, 20%)",neutral90:"hsl(0, 0%, 10%)"},NF=4,l_=4,BF=38,VF=l_*2,UF={baseUnit:l_,controlHeight:BF,menuGutter:VF},Xd={borderRadius:NF,colors:zF,spacing:UF},HF={"aria-live":"polite",backspaceRemovesValue:!0,blurInputOnSelect:m1(),captureMenuScroll:!m1(),classNames:{},closeMenuOnSelect:!0,closeMenuOnScroll:!1,components:{},controlShouldRenderValue:!0,escapeClearsValue:!1,filterOption:yF(),formatGroupLabel:DF,getOptionLabel:LF,getOptionValue:AF,isDisabled:!1,isLoading:!1,isMulti:!1,isRtl:!1,isSearchable:!0,isOptionDisabled:RF,loadingMessage:function(){return"Loading..."},maxMenuHeight:300,minMenuHeight:140,menuIsOpen:!1,menuPlacement:"bottom",menuPosition:"absolute",menuShouldBlockScroll:!1,menuShouldScrollIntoView:!BR(),noOptionsMessage:function(){return"No options"},openMenuOnFocus:!1,openMenuOnClick:!0,options:[],pageSize:5,placeholder:"Select...",screenReaderStatus:function(t){var n=t.count;return"".concat(n," result").concat(n!==1?"s":""," available")},styles:{},tabIndex:0,tabSelectsValue:!0,unstyled:!1};function T1(e,t,n,r){var i=d_(e,t,n),o=f_(e,t,n),a=c_(e,t),l=su(e,t);return{type:"option",data:t,isDisabled:i,isSelected:o,label:a,value:l,index:r}}function il(e,t){return e.options.map(function(n,r){if("options"in n){var i=n.options.map(function(a,l){return T1(e,a,t,l)}).filter(function(a){return O1(e,a)});return i.length>0?{type:"group",data:n,options:i,index:r}:void 0}var o=T1(e,n,t,r);return O1(e,o)?o:void 0}).filter(HR)}function u_(e){return e.reduce(function(t,n){return n.type==="group"?t.push.apply(t,Um(n.options.map(function(r){return r.data}))):t.push(n.data),t},[])}function P1(e,t){return e.reduce(function(n,r){return r.type==="group"?n.push.apply(n,Um(r.options.map(function(i){return{data:i.data,id:"".concat(t,"-").concat(r.index,"-").concat(i.index)}}))):n.push({data:r.data,id:"".concat(t,"-").concat(r.index)}),n},[])}function WF(e,t){return u_(il(e,t))}function O1(e,t){var n=e.inputValue,r=n===void 0?"":n,i=t.data,o=t.isSelected,a=t.label,l=t.value;return(!h_(e)||!o)&&p_(e,{label:a,value:l,data:i},r)}function GF(e,t){var n=e.focusedValue,r=e.selectValue,i=r.indexOf(n);if(i>-1){var o=t.indexOf(n);if(o>-1)return n;if(i<t.length)return t[i]}return null}function YF(e,t){var n=e.focusedOption;return n&&t.indexOf(n)>-1?n:t[0]}var Kd=function(t,n){var r,i=(r=t.find(function(o){return o.data===n}))===null||r===void 0?void 0:r.id;return i||null},c_=function(t,n){return t.getOptionLabel(n)},su=function(t,n){return t.getOptionValue(n)};function d_(e,t,n){return typeof e.isOptionDisabled=="function"?e.isOptionDisabled(t,n):!1}function f_(e,t,n){if(n.indexOf(t)>-1)return!0;if(typeof e.isOptionSelected=="function")return e.isOptionSelected(t,n);var r=su(e,t);return n.some(function(i){return su(e,i)===r})}function p_(e,t,n){return e.filterOption?e.filterOption(t,n):!0}var h_=function(t){var n=t.hideSelectedOptions,r=t.isMulti;return n===void 0?r:n},qF=1,m_=function(e){pR(n,e);var t=vR(n);function n(r){var i;if(dR(this,n),i=t.call(this,r),i.state={ariaSelection:null,focusedOption:null,focusedOptionId:null,focusableOptionsWithIds:[],focusedValue:null,inputIsHidden:!1,isFocused:!1,selectValue:[],clearFocusValueOnUpdate:!1,prevWasFocused:!1,inputIsHiddenAfterUpdate:void 0,prevProps:void 0,instancePrefix:"",isAppleDevice:!1},i.blockOptionHover=!1,i.isComposing=!1,i.commonProps=void 0,i.initialTouchX=0,i.initialTouchY=0,i.openAfterFocus=!1,i.scrollToFocusedOptionOnUpdate=!1,i.userIsDragging=void 0,i.controlRef=null,i.getControlRef=function(s){i.controlRef=s},i.focusedOptionRef=null,i.getFocusedOptionRef=function(s){i.focusedOptionRef=s},i.menuListRef=null,i.getMenuListRef=function(s){i.menuListRef=s},i.inputRef=null,i.getInputRef=function(s){i.inputRef=s},i.focus=i.focusInput,i.blur=i.blurInput,i.onChange=function(s,u){var d=i.props,c=d.onChange,y=d.name;u.name=y,i.ariaOnChange(s,u),c(s,u)},i.setValue=function(s,u,d){var c=i.props,y=c.closeMenuOnSelect,p=c.isMulti,m=c.inputValue;i.onInputChange("",{action:"set-value",prevInputValue:m}),y&&(i.setState({inputIsHiddenAfterUpdate:!p}),i.onMenuClose()),i.setState({clearFocusValueOnUpdate:!0}),i.onChange(s,{action:u,option:d})},i.selectOption=function(s){var u=i.props,d=u.blurInputOnSelect,c=u.isMulti,y=u.name,p=i.state.selectValue,m=c&&i.isOptionSelected(s,p),g=i.isOptionDisabled(s,p);if(m){var w=i.getOptionValue(s);i.setValue(p.filter(function(h){return i.getOptionValue(h)!==w}),"deselect-option",s)}else if(!g)c?i.setValue([].concat(Um(p),[s]),"select-option",s):i.setValue(s,"select-option");else{i.ariaOnChange(s,{action:"select-option",option:s,name:y});return}d&&i.blurInput()},i.removeValue=function(s){var u=i.props.isMulti,d=i.state.selectValue,c=i.getOptionValue(s),y=d.filter(function(m){return i.getOptionValue(m)!==c}),p=Os(u,y,y[0]||null);i.onChange(p,{action:"remove-value",removedValue:s}),i.focusInput()},i.clearValue=function(){var s=i.state.selectValue;i.onChange(Os(i.props.isMulti,[],null),{action:"clear",removedValues:s})},i.popValue=function(){var s=i.props.isMulti,u=i.state.selectValue,d=u[u.length-1],c=u.slice(0,u.length-1),y=Os(s,c,c[0]||null);d&&i.onChange(y,{action:"pop-value",removedValue:d})},i.getFocusedOptionId=function(s){return Kd(i.state.focusableOptionsWithIds,s)},i.getFocusableOptionsWithIds=function(){return P1(il(i.props,i.state.selectValue),i.getElementId("option"))},i.getValue=function(){return i.state.selectValue},i.cx=function(){for(var s=arguments.length,u=new Array(s),d=0;d<s;d++)u[d]=arguments[d];return AR.apply(void 0,[i.props.classNamePrefix].concat(u))},i.getOptionLabel=function(s){return c_(i.props,s)},i.getOptionValue=function(s){return su(i.props,s)},i.getStyles=function(s,u){var d=i.props.unstyled,c=FF[s](u,d);c.boxSizing="border-box";var y=i.props.styles[s];return y?y(c,u):c},i.getClassNames=function(s,u){var d,c;return(d=(c=i.props.classNames)[s])===null||d===void 0?void 0:d.call(c,u)},i.getElementId=function(s){return"".concat(i.state.instancePrefix,"-").concat(s)},i.getComponents=function(){return aF(i.props)},i.buildCategorizedOptions=function(){return il(i.props,i.state.selectValue)},i.getCategorizedOptions=function(){return i.props.menuIsOpen?i.buildCategorizedOptions():[]},i.buildFocusableOptions=function(){return u_(i.buildCategorizedOptions())},i.getFocusableOptions=function(){return i.props.menuIsOpen?i.buildFocusableOptions():[]},i.ariaOnChange=function(s,u){i.setState({ariaSelection:Z({value:s},u)})},i.onMenuMouseDown=function(s){s.button===0&&(s.stopPropagation(),s.preventDefault(),i.focusInput())},i.onMenuMouseMove=function(s){i.blockOptionHover=!1},i.onControlMouseDown=function(s){if(!s.defaultPrevented){var u=i.props.openMenuOnClick;i.state.isFocused?i.props.menuIsOpen?s.target.tagName!=="INPUT"&&s.target.tagName!=="TEXTAREA"&&i.onMenuClose():u&&i.openMenu("first"):(u&&(i.openAfterFocus=!0),i.focusInput()),s.target.tagName!=="INPUT"&&s.target.tagName!=="TEXTAREA"&&s.preventDefault()}},i.onDropdownIndicatorMouseDown=function(s){if(!(s&&s.type==="mousedown"&&s.button!==0)&&!i.props.isDisabled){var u=i.props,d=u.isMulti,c=u.menuIsOpen;i.focusInput(),c?(i.setState({inputIsHiddenAfterUpdate:!d}),i.onMenuClose()):i.openMenu("first"),s.preventDefault()}},i.onClearIndicatorMouseDown=function(s){s&&s.type==="mousedown"&&s.button!==0||(i.clearValue(),s.preventDefault(),i.openAfterFocus=!1,s.type==="touchend"?i.focusInput():setTimeout(function(){return i.focusInput()}))},i.onScroll=function(s){typeof i.props.closeMenuOnScroll=="boolean"?s.target instanceof HTMLElement&&Pc(s.target)&&i.props.onMenuClose():typeof i.props.closeMenuOnScroll=="function"&&i.props.closeMenuOnScroll(s)&&i.props.onMenuClose()},i.onCompositionStart=function(){i.isComposing=!0},i.onCompositionEnd=function(){i.isComposing=!1},i.onTouchStart=function(s){var u=s.touches,d=u&&u.item(0);d&&(i.initialTouchX=d.clientX,i.initialTouchY=d.clientY,i.userIsDragging=!1)},i.onTouchMove=function(s){var u=s.touches,d=u&&u.item(0);if(d){var c=Math.abs(d.clientX-i.initialTouchX),y=Math.abs(d.clientY-i.initialTouchY),p=5;i.userIsDragging=c>p||y>p}},i.onTouchEnd=function(s){i.userIsDragging||(i.controlRef&&!i.controlRef.contains(s.target)&&i.menuListRef&&!i.menuListRef.contains(s.target)&&i.blurInput(),i.initialTouchX=0,i.initialTouchY=0)},i.onControlTouchEnd=function(s){i.userIsDragging||i.onControlMouseDown(s)},i.onClearIndicatorTouchEnd=function(s){i.userIsDragging||i.onClearIndicatorMouseDown(s)},i.onDropdownIndicatorTouchEnd=function(s){i.userIsDragging||i.onDropdownIndicatorMouseDown(s)},i.handleInputChange=function(s){var u=i.props.inputValue,d=s.currentTarget.value;i.setState({inputIsHiddenAfterUpdate:!1}),i.onInputChange(d,{action:"input-change",prevInputValue:u}),i.props.menuIsOpen||i.onMenuOpen()},i.onInputFocus=function(s){i.props.onFocus&&i.props.onFocus(s),i.setState({inputIsHiddenAfterUpdate:!1,isFocused:!0}),(i.openAfterFocus||i.props.openMenuOnFocus)&&i.openMenu("first"),i.openAfterFocus=!1},i.onInputBlur=function(s){var u=i.props.inputValue;if(i.menuListRef&&i.menuListRef.contains(document.activeElement)){i.inputRef.focus();return}i.props.onBlur&&i.props.onBlur(s),i.onInputChange("",{action:"input-blur",prevInputValue:u}),i.onMenuClose(),i.setState({focusedValue:null,isFocused:!1})},i.onOptionHover=function(s){if(!(i.blockOptionHover||i.state.focusedOption===s)){var u=i.getFocusableOptions(),d=u.indexOf(s);i.setState({focusedOption:s,focusedOptionId:d>-1?i.getFocusedOptionId(s):null})}},i.shouldHideSelectedOptions=function(){return h_(i.props)},i.onValueInputFocus=function(s){s.preventDefault(),s.stopPropagation(),i.focus()},i.onKeyDown=function(s){var u=i.props,d=u.isMulti,c=u.backspaceRemovesValue,y=u.escapeClearsValue,p=u.inputValue,m=u.isClearable,g=u.isDisabled,w=u.menuIsOpen,h=u.onKeyDown,v=u.tabSelectsValue,x=u.openMenuOnFocus,S=i.state,E=S.focusedOption,P=S.focusedValue,k=S.selectValue;if(!g&&!(typeof h=="function"&&(h(s),s.defaultPrevented))){switch(i.blockOptionHover=!0,s.key){case"ArrowLeft":if(!d||p)return;i.focusValue("previous");break;case"ArrowRight":if(!d||p)return;i.focusValue("next");break;case"Delete":case"Backspace":if(p)return;if(P)i.removeValue(P);else{if(!c)return;d?i.popValue():m&&i.clearValue()}break;case"Tab":if(i.isComposing||s.shiftKey||!w||!v||!E||x&&i.isOptionSelected(E,k))return;i.selectOption(E);break;case"Enter":if(s.keyCode===229)break;if(w){if(!E||i.isComposing)return;i.selectOption(E);break}return;case"Escape":w?(i.setState({inputIsHiddenAfterUpdate:!1}),i.onInputChange("",{action:"menu-close",prevInputValue:p}),i.onMenuClose()):m&&y&&i.clearValue();break;case" ":if(p)return;if(!w){i.openMenu("first");break}if(!E)return;i.selectOption(E);break;case"ArrowUp":w?i.focusOption("up"):i.openMenu("last");break;case"ArrowDown":w?i.focusOption("down"):i.openMenu("first");break;case"PageUp":if(!w)return;i.focusOption("pageup");break;case"PageDown":if(!w)return;i.focusOption("pagedown");break;case"Home":if(!w)return;i.focusOption("first");break;case"End":if(!w)return;i.focusOption("last");break;default:return}s.preventDefault()}},i.state.instancePrefix="react-select-"+(i.props.instanceId||++qF),i.state.selectValue=p1(r.value),r.menuIsOpen&&i.state.selectValue.length){var o=i.getFocusableOptionsWithIds(),a=i.buildFocusableOptions(),l=a.indexOf(i.state.selectValue[0]);i.state.focusableOptionsWithIds=o,i.state.focusedOption=a[l],i.state.focusedOptionId=Kd(o,a[l])}return i}return fR(n,[{key:"componentDidMount",value:function(){this.startListeningComposition(),this.startListeningToTouch(),this.props.closeMenuOnScroll&&document&&document.addEventListener&&document.addEventListener("scroll",this.onScroll,!0),this.props.autoFocus&&this.focusInput(),this.props.menuIsOpen&&this.state.focusedOption&&this.menuListRef&&this.focusedOptionRef&&h1(this.menuListRef,this.focusedOptionRef),IF()&&this.setState({isAppleDevice:!0})}},{key:"componentDidUpdate",value:function(i){var o=this.props,a=o.isDisabled,l=o.menuIsOpen,s=this.state.isFocused;(s&&!a&&i.isDisabled||s&&l&&!i.menuIsOpen)&&this.focusInput(),s&&a&&!i.isDisabled?this.setState({isFocused:!1},this.onMenuClose):!s&&!a&&i.isDisabled&&this.inputRef===document.activeElement&&this.setState({isFocused:!0}),this.menuListRef&&this.focusedOptionRef&&this.scrollToFocusedOptionOnUpdate&&(h1(this.menuListRef,this.focusedOptionRef),this.scrollToFocusedOptionOnUpdate=!1)}},{key:"componentWillUnmount",value:function(){this.stopListeningComposition(),this.stopListeningToTouch(),document.removeEventListener("scroll",this.onScroll,!0)}},{key:"onMenuOpen",value:function(){this.props.onMenuOpen()}},{key:"onMenuClose",value:function(){this.onInputChange("",{action:"menu-close",prevInputValue:this.props.inputValue}),this.props.onMenuClose()}},{key:"onInputChange",value:function(i,o){this.props.onInputChange(i,o)}},{key:"focusInput",value:function(){this.inputRef&&this.inputRef.focus()}},{key:"blurInput",value:function(){this.inputRef&&this.inputRef.blur()}},{key:"openMenu",value:function(i){var o=this,a=this.state,l=a.selectValue,s=a.isFocused,u=this.buildFocusableOptions(),d=i==="first"?0:u.length-1;if(!this.props.isMulti){var c=u.indexOf(l[0]);c>-1&&(d=c)}this.scrollToFocusedOptionOnUpdate=!(s&&this.menuListRef),this.setState({inputIsHiddenAfterUpdate:!1,focusedValue:null,focusedOption:u[d],focusedOptionId:this.getFocusedOptionId(u[d])},function(){return o.onMenuOpen()})}},{key:"focusValue",value:function(i){var o=this.state,a=o.selectValue,l=o.focusedValue;if(this.props.isMulti){this.setState({focusedOption:null});var s=a.indexOf(l);l||(s=-1);var u=a.length-1,d=-1;if(a.length){switch(i){case"previous":s===0?d=0:s===-1?d=u:d=s-1;break;case"next":s>-1&&s<u&&(d=s+1);break}this.setState({inputIsHidden:d!==-1,focusedValue:a[d]})}}}},{key:"focusOption",value:function(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"first",o=this.props.pageSize,a=this.state.focusedOption,l=this.getFocusableOptions();if(l.length){var s=0,u=l.indexOf(a);a||(u=-1),i==="up"?s=u>0?u-1:l.length-1:i==="down"?s=(u+1)%l.length:i==="pageup"?(s=u-o,s<0&&(s=0)):i==="pagedown"?(s=u+o,s>l.length-1&&(s=l.length-1)):i==="last"&&(s=l.length-1),this.scrollToFocusedOptionOnUpdate=!0,this.setState({focusedOption:l[s],focusedValue:null,focusedOptionId:this.getFocusedOptionId(l[s])})}}},{key:"getTheme",value:function(){return this.props.theme?typeof this.props.theme=="function"?this.props.theme(Xd):Z(Z({},Xd),this.props.theme):Xd}},{key:"getCommonProps",value:function(){var i=this.clearValue,o=this.cx,a=this.getStyles,l=this.getClassNames,s=this.getValue,u=this.selectOption,d=this.setValue,c=this.props,y=c.isMulti,p=c.isRtl,m=c.options,g=this.hasValue();return{clearValue:i,cx:o,getStyles:a,getClassNames:l,getValue:s,hasValue:g,isMulti:y,isRtl:p,options:m,selectOption:u,selectProps:c,setValue:d,theme:this.getTheme()}}},{key:"hasValue",value:function(){var i=this.state.selectValue;return i.length>0}},{key:"hasOptions",value:function(){return!!this.getFocusableOptions().length}},{key:"isClearable",value:function(){var i=this.props,o=i.isClearable,a=i.isMulti;return o===void 0?a:o}},{key:"isOptionDisabled",value:function(i,o){return d_(this.props,i,o)}},{key:"isOptionSelected",value:function(i,o){return f_(this.props,i,o)}},{key:"filterOption",value:function(i,o){return p_(this.props,i,o)}},{key:"formatOptionLabel",value:function(i,o){if(typeof this.props.formatOptionLabel=="function"){var a=this.props.inputValue,l=this.state.selectValue;return this.props.formatOptionLabel(i,{context:o,inputValue:a,selectValue:l})}else return this.getOptionLabel(i)}},{key:"formatGroupLabel",value:function(i){return this.props.formatGroupLabel(i)}},{key:"startListeningComposition",value:function(){document&&document.addEventListener&&(document.addEventListener("compositionstart",this.onCompositionStart,!1),document.addEventListener("compositionend",this.onCompositionEnd,!1))}},{key:"stopListeningComposition",value:function(){document&&document.removeEventListener&&(document.removeEventListener("compositionstart",this.onCompositionStart),document.removeEventListener("compositionend",this.onCompositionEnd))}},{key:"startListeningToTouch",value:function(){document&&document.addEventListener&&(document.addEventListener("touchstart",this.onTouchStart,!1),document.addEventListener("touchmove",this.onTouchMove,!1),document.addEventListener("touchend",this.onTouchEnd,!1))}},{key:"stopListeningToTouch",value:function(){document&&document.removeEventListener&&(document.removeEventListener("touchstart",this.onTouchStart),document.removeEventListener("touchmove",this.onTouchMove),document.removeEventListener("touchend",this.onTouchEnd))}},{key:"renderInput",value:function(){var i=this.props,o=i.isDisabled,a=i.isSearchable,l=i.inputId,s=i.inputValue,u=i.tabIndex,d=i.form,c=i.menuIsOpen,y=i.required,p=this.getComponents(),m=p.Input,g=this.state,w=g.inputIsHidden,h=g.ariaSelection,v=this.commonProps,x=l||this.getElementId("input"),S=Z(Z(Z({"aria-autocomplete":"list","aria-expanded":c,"aria-haspopup":!0,"aria-errormessage":this.props["aria-errormessage"],"aria-invalid":this.props["aria-invalid"],"aria-label":this.props["aria-label"],"aria-labelledby":this.props["aria-labelledby"],"aria-required":y,role:"combobox","aria-activedescendant":this.state.isAppleDevice?void 0:this.state.focusedOptionId||""},c&&{"aria-controls":this.getElementId("listbox")}),!a&&{"aria-readonly":!0}),this.hasValue()?(h==null?void 0:h.action)==="initial-input-focus"&&{"aria-describedby":this.getElementId("live-region")}:{"aria-describedby":this.getElementId("placeholder")});return a?b.createElement(m,J({},v,{autoCapitalize:"none",autoComplete:"off",autoCorrect:"off",id:x,innerRef:this.getInputRef,isDisabled:o,isHidden:w,onBlur:this.onInputBlur,onChange:this.handleInputChange,onFocus:this.onInputFocus,spellCheck:"false",tabIndex:u,form:d,type:"text",value:s},S)):b.createElement(bF,J({id:x,innerRef:this.getInputRef,onBlur:this.onInputBlur,onChange:ou,onFocus:this.onInputFocus,disabled:o,tabIndex:u,inputMode:"none",form:d,value:""},S))}},{key:"renderPlaceholderOrValue",value:function(){var i=this,o=this.getComponents(),a=o.MultiValue,l=o.MultiValueContainer,s=o.MultiValueLabel,u=o.MultiValueRemove,d=o.SingleValue,c=o.Placeholder,y=this.commonProps,p=this.props,m=p.controlShouldRenderValue,g=p.isDisabled,w=p.isMulti,h=p.inputValue,v=p.placeholder,x=this.state,S=x.selectValue,E=x.focusedValue,P=x.isFocused;if(!this.hasValue()||!m)return h?null:b.createElement(c,J({},y,{key:"placeholder",isDisabled:g,isFocused:P,innerProps:{id:this.getElementId("placeholder")}}),v);if(w)return S.map(function(_,M){var $=_===E,D="".concat(i.getOptionLabel(_),"-").concat(i.getOptionValue(_));return b.createElement(a,J({},y,{components:{Container:l,Label:s,Remove:u},isFocused:$,isDisabled:g,key:D,index:M,removeProps:{onClick:function(){return i.removeValue(_)},onTouchEnd:function(){return i.removeValue(_)},onMouseDown:function(j){j.preventDefault()}},data:_}),i.formatOptionLabel(_,"value"))});if(h)return null;var k=S[0];return b.createElement(d,J({},y,{data:k,isDisabled:g}),this.formatOptionLabel(k,"value"))}},{key:"renderClearIndicator",value:function(){var i=this.getComponents(),o=i.ClearIndicator,a=this.commonProps,l=this.props,s=l.isDisabled,u=l.isLoading,d=this.state.isFocused;if(!this.isClearable()||!o||s||!this.hasValue()||u)return null;var c={onMouseDown:this.onClearIndicatorMouseDown,onTouchEnd:this.onClearIndicatorTouchEnd,"aria-hidden":"true"};return b.createElement(o,J({},a,{innerProps:c,isFocused:d}))}},{key:"renderLoadingIndicator",value:function(){var i=this.getComponents(),o=i.LoadingIndicator,a=this.commonProps,l=this.props,s=l.isDisabled,u=l.isLoading,d=this.state.isFocused;if(!o||!u)return null;var c={"aria-hidden":"true"};return b.createElement(o,J({},a,{innerProps:c,isDisabled:s,isFocused:d}))}},{key:"renderIndicatorSeparator",value:function(){var i=this.getComponents(),o=i.DropdownIndicator,a=i.IndicatorSeparator;if(!o||!a)return null;var l=this.commonProps,s=this.props.isDisabled,u=this.state.isFocused;return b.createElement(a,J({},l,{isDisabled:s,isFocused:u}))}},{key:"renderDropdownIndicator",value:function(){var i=this.getComponents(),o=i.DropdownIndicator;if(!o)return null;var a=this.commonProps,l=this.props.isDisabled,s=this.state.isFocused,u={onMouseDown:this.onDropdownIndicatorMouseDown,onTouchEnd:this.onDropdownIndicatorTouchEnd,"aria-hidden":"true"};return b.createElement(o,J({},a,{innerProps:u,isDisabled:l,isFocused:s}))}},{key:"renderMenu",value:function(){var i=this,o=this.getComponents(),a=o.Group,l=o.GroupHeading,s=o.Menu,u=o.MenuList,d=o.MenuPortal,c=o.LoadingMessage,y=o.NoOptionsMessage,p=o.Option,m=this.commonProps,g=this.state.focusedOption,w=this.props,h=w.captureMenuScroll,v=w.inputValue,x=w.isLoading,S=w.loadingMessage,E=w.minMenuHeight,P=w.maxMenuHeight,k=w.menuIsOpen,_=w.menuPlacement,M=w.menuPosition,$=w.menuPortalTarget,D=w.menuShouldBlockScroll,A=w.menuShouldScrollIntoView,j=w.noOptionsMessage,F=w.onMenuScrollToTop,R=w.onMenuScrollToBottom;if(!k)return null;var L=function(U,G){var H=U.type,X=U.data,ee=U.isDisabled,fe=U.isSelected,be=U.label,ie=U.value,Me=g===X,Be=ee?void 0:function(){return i.onOptionHover(X)},Ve=ee?void 0:function(){return i.selectOption(X)},li="".concat(i.getElementId("option"),"-").concat(G),yt={id:li,onClick:Ve,onMouseMove:Be,onMouseOver:Be,tabIndex:-1,role:"option","aria-selected":i.state.isAppleDevice?void 0:fe};return b.createElement(p,J({},m,{innerProps:yt,data:X,isDisabled:ee,isSelected:fe,key:li,label:be,type:H,value:ie,isFocused:Me,innerRef:Me?i.getFocusedOptionRef:void 0}),i.formatOptionLabel(U.data,"menu"))},O;if(this.hasOptions())O=this.getCategorizedOptions().map(function(N){if(N.type==="group"){var U=N.data,G=N.options,H=N.index,X="".concat(i.getElementId("group"),"-").concat(H),ee="".concat(X,"-heading");return b.createElement(a,J({},m,{key:X,data:U,options:G,Heading:l,headingProps:{id:ee,data:N.data},label:i.formatGroupLabel(N.data)}),N.options.map(function(fe){return L(fe,"".concat(H,"-").concat(fe.index))}))}else if(N.type==="option")return L(N,"".concat(N.index))});else if(x){var T=S({inputValue:v});if(T===null)return null;O=b.createElement(c,m,T)}else{var I=j({inputValue:v});if(I===null)return null;O=b.createElement(y,m,I)}var z={minMenuHeight:E,maxMenuHeight:P,menuPlacement:_,menuPosition:M,menuShouldScrollIntoView:A},B=b.createElement(ZR,J({},m,z),function(N){var U=N.ref,G=N.placerProps,H=G.placement,X=G.maxHeight;return b.createElement(s,J({},m,z,{innerRef:U,innerProps:{onMouseDown:i.onMenuMouseDown,onMouseMove:i.onMenuMouseMove},isLoading:x,placement:H}),b.createElement(kF,{captureEnabled:h,onTopArrive:F,onBottomArrive:R,lockEnabled:D},function(ee){return b.createElement(u,J({},m,{innerRef:function(be){i.getMenuListRef(be),ee(be)},innerProps:{role:"listbox","aria-multiselectable":m.isMulti,id:i.getElementId("listbox")},isLoading:x,maxHeight:X,focusedOption:g}),O)}))});return $||M==="fixed"?b.createElement(d,J({},m,{appendTo:$,controlElement:this.controlRef,menuPlacement:_,menuPosition:M}),B):B}},{key:"renderFormField",value:function(){var i=this,o=this.props,a=o.delimiter,l=o.isDisabled,s=o.isMulti,u=o.name,d=o.required,c=this.state.selectValue;if(d&&!this.hasValue()&&!l)return b.createElement(OF,{name:u,onFocus:this.onValueInputFocus});if(!(!u||l))if(s)if(a){var y=c.map(function(g){return i.getOptionValue(g)}).join(a);return b.createElement("input",{name:u,type:"hidden",value:y})}else{var p=c.length>0?c.map(function(g,w){return b.createElement("input",{key:"i-".concat(w),name:u,type:"hidden",value:i.getOptionValue(g)})}):b.createElement("input",{name:u,type:"hidden",value:""});return b.createElement("div",null,p)}else{var m=c[0]?this.getOptionValue(c[0]):"";return b.createElement("input",{name:u,type:"hidden",value:m})}}},{key:"renderLiveRegion",value:function(){var i=this.commonProps,o=this.state,a=o.ariaSelection,l=o.focusedOption,s=o.focusedValue,u=o.isFocused,d=o.selectValue,c=this.getFocusableOptions();return b.createElement(hF,J({},i,{id:this.getElementId("live-region"),ariaSelection:a,focusedOption:l,focusedValue:s,isFocused:u,selectValue:d,focusableOptions:c,isAppleDevice:this.state.isAppleDevice}))}},{key:"render",value:function(){var i=this.getComponents(),o=i.Control,a=i.IndicatorsContainer,l=i.SelectContainer,s=i.ValueContainer,u=this.props,d=u.className,c=u.id,y=u.isDisabled,p=u.menuIsOpen,m=this.state.isFocused,g=this.commonProps=this.getCommonProps();return b.createElement(l,J({},g,{className:d,innerProps:{id:c,onKeyDown:this.onKeyDown},isDisabled:y,isFocused:m}),this.renderLiveRegion(),b.createElement(o,J({},g,{innerRef:this.getControlRef,innerProps:{onMouseDown:this.onControlMouseDown,onTouchEnd:this.onControlTouchEnd},isDisabled:y,isFocused:m,menuIsOpen:p}),b.createElement(s,J({},g,{isDisabled:y}),this.renderPlaceholderOrValue(),this.renderInput()),b.createElement(a,J({},g,{isDisabled:y}),this.renderClearIndicator(),this.renderLoadingIndicator(),this.renderIndicatorSeparator(),this.renderDropdownIndicator())),this.renderMenu(),this.renderFormField())}}],[{key:"getDerivedStateFromProps",value:function(i,o){var a=o.prevProps,l=o.clearFocusValueOnUpdate,s=o.inputIsHiddenAfterUpdate,u=o.ariaSelection,d=o.isFocused,c=o.prevWasFocused,y=o.instancePrefix,p=i.options,m=i.value,g=i.menuIsOpen,w=i.inputValue,h=i.isMulti,v=p1(m),x={};if(a&&(m!==a.value||p!==a.options||g!==a.menuIsOpen||w!==a.inputValue)){var S=g?WF(i,v):[],E=g?P1(il(i,v),"".concat(y,"-option")):[],P=l?GF(o,v):null,k=YF(o,S),_=Kd(E,k);x={selectValue:v,focusedOption:k,focusedOptionId:_,focusableOptionsWithIds:E,focusedValue:P,clearFocusValueOnUpdate:!1}}var M=s!=null&&i!==a?{inputIsHidden:s,inputIsHiddenAfterUpdate:void 0}:{},$=u,D=d&&c;return d&&!D&&($={value:Os(h,v,v[0]||null),options:v,action:"initial-input-focus"},D=!c),(u==null?void 0:u.action)==="initial-input-focus"&&($=null),Z(Z(Z({},x),M),{},{prevProps:i,ariaSelection:$,prevWasFocused:D})}}]),n}(b.Component);m_.defaultProps=HF;var XF=b.forwardRef(function(e,t){var n=cR(e);return b.createElement(m_,J({ref:t},n))}),Oc=XF;const KF=C.div`
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
`,QF=C.label`
  font-size: 14px;
  color: #666;
  margin-bottom: 5px;
`,ZF=({cityOptions:e,selectedCity:t,onChange:n,onInputChange:r})=>f.jsxs(KF,{children:[f.jsx(QF,{children:"Місто"}),f.jsx(Oc,{options:e,onInputChange:r,onChange:n,placeholder:"Почніть вводити місто...",value:t,noOptionsMessage:()=>"Введіть назву міста"})]}),JF=C.div`
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
`,ez=C.label`
  font-size: 14px;
  color: #666;
  margin-bottom: 5px;
`,tz=({options:e=[],value:t,onChange:n,selectedCity:r})=>f.jsxs(JF,{children:[f.jsx(ez,{children:"Спосіб доставки"}),f.jsx(Oc,{options:e,placeholder:"Оберіть спосіб доставки...",isDisabled:!r,value:e.find(i=>i.value===t)||null,onChange:i=>n(i.value)})]}),j1=C.div`
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
`,M1=C.label`
  font-size: 14px;
  color: #666;
  margin-bottom: 5px;
`,nz=({deliveryMethod:e,officeOptions:t,selectedOffice:n,selectedUkrOffice:r,setSelectedOffice:i,setSelectedUkrOffice:o})=>e==="nova"?f.jsxs(j1,{children:[f.jsx(M1,{children:"Відділення Нової пошти"}),f.jsx(Oc,{options:t,onChange:a=>i(a),value:n,placeholder:"Оберіть відділення..."})]}):e==="ukr"?f.jsxs(j1,{children:[f.jsx(M1,{children:"Адреса доставки (Укрпошта)"}),f.jsx("input",{type:"text",value:r,onChange:a=>o(a.target.value),placeholder:"Наприклад:  вул. Шевченка, 10, індекс 01001",style:{padding:"8px 12px",border:"1px solid #c6c5c5",borderRadius:"4px",outline:"none"}})]}):null,rz=C.div`
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
`;const iz=C.button`
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
`,oz=C.ul`
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
`,az=C.li`
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
`,sz=C.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 6px;
  border: 1px solid #eee;
  background-color: #f9f9f9;
`,lz=C.div`
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
`,uz=C.div`
  text-align: center;
  width: 100px;
 
`,cz=C.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 2px;
`,dz=C.span`
  font-size: 18px;
  font-weight: 600;
  color: ${({$discount:e})=>"#111"};
`,fz=C.span`
  font-size: 13px;
  color: #999;
  text-decoration: line-through;
`,pz=C.span`
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
`,hz=({cartItems:e,totalAmount:t,totalQuantity:n,isFormValid:r,handleSubmit:i})=>f.jsxs(rz,{children:[f.jsx("h3",{children:"Ваше замовлення"}),f.jsx(oz,{children:e.map((o,a)=>{var c,y;const l=o.new_price&&o.new_price<o.price,s=l?o.new_price:o.price,u=l?Math.round((o.price-o.new_price)/o.price*100):0,d=s*(o.quantity||1);return f.jsxs(az,{children:[f.jsx(sz,{src:((y=(c=o.images)==null?void 0:c[0])==null?void 0:y.url)||no,alt:o.name}),f.jsxs(lz,{children:[f.jsx("p",{className:"item-name",children:o.name}),f.jsxs("p",{className:"item-details",children:[o.quantity," шт. × ",o.price," грн"]})]}),f.jsx(uz,{children:f.jsxs(cz,{children:[f.jsxs(dz,{$discount:l,children:[d.toLocaleString()," грн"]}),l&&f.jsxs(f.Fragment,{children:[f.jsxs(fz,{children:[(o.price*(o.quantity||1)).toLocaleString()," грн"]}),f.jsxs(pz,{children:["-",u,"%"]})]})]})})]},`${o.id}-${a}`)})}),f.jsxs("div",{className:"summary-row",children:[f.jsxs("span",{children:["Товари (",n,")"]}),f.jsxs("span",{children:[t," грн"]})]}),f.jsxs("div",{className:"summary-row",children:[f.jsx("span",{children:"Доставка"}),f.jsx("span",{children:"За тарифами перевізника"})]}),f.jsx("hr",{}),f.jsxs("div",{className:"total",children:[f.jsx("span",{children:"Всього до сплати:"}),f.jsxs("span",{children:[t," грн"]})]}),f.jsx(iz,{type:"submit",disabled:!r,onClick:i,style:{opacity:r?1:.5,cursor:r?"pointer":"not-allowed"},children:"Підтвердити замовлення"}),!r&&f.jsx("p",{style:{color:"#888",fontSize:"12px",marginTop:"10px",textAlign:"center"},children:"Заповніть всі поля правильно, щоб продовжити"})]});var g_={exports:{}};function mz(e){return e&&typeof e=="object"&&"default"in e?e.default:e}var Qd=mz(b),gz=ku;function vz(e,t){for(var n=Object.getOwnPropertyNames(t),r=0;r<n.length;r++){var i=n[r],o=Object.getOwnPropertyDescriptor(t,i);o&&o.configurable&&e[i]===void 0&&Object.defineProperty(e,i,o)}return e}function Hp(){return(Hp=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function yz(e,t){e.prototype=Object.create(t.prototype),vz(e.prototype.constructor=e,t)}function xz(e,t){if(e==null)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],0<=t.indexOf(n)||(i[n]=e[n]);return i}function yi(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var bz=function(e,t,n,r,i,o,a,l){if(!e){var s;if(t===void 0)s=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var u=[n,r,i,o,a,l],d=0;(s=new Error(t.replace(/%s/g,function(){return u[d++]}))).name="Invariant Violation"}throw s.framesToPop=1,s}},$1=bz;function I1(e,t,n){if("selectionStart"in e&&"selectionEnd"in e)e.selectionStart=t,e.selectionEnd=n;else{var r=e.createTextRange();r.collapse(!0),r.moveStart("character",t),r.moveEnd("character",n-t),r.select()}}function wz(e){var t=0,n=0;if("selectionStart"in e&&"selectionEnd"in e)t=e.selectionStart,n=e.selectionEnd;else{var r=document.selection.createRange();r.parentElement()===e&&(t=-r.moveStart("character",-e.value.length),n=-r.moveEnd("character",-e.value.length))}return{start:t,end:n,length:n-t}}var Sz={9:"[0-9]",a:"[A-Za-z]","*":"[A-Za-z0-9]"},_z="_";function D1(e,t,n){var r="",i="",o=null,a=[];if(t===void 0&&(t=_z),n==null&&(n=Sz),!e||typeof e!="string")return{maskChar:t,formatChars:n,mask:null,prefix:null,lastEditablePosition:null,permanents:[]};var l=!1;return e.split("").forEach(function(s){l=!l&&s==="\\"||(l||!n[s]?(a.push(r.length),r.length===a.length-1&&(i+=s)):o=r.length+1,r+=s,!1)}),{maskChar:t,formatChars:n,prefix:i,mask:r,lastEditablePosition:o,permanents:a}}function Ft(e,t){return e.permanents.indexOf(t)!==-1}function jc(e,t,n){var r=e.mask,i=e.formatChars;if(!n)return!1;if(Ft(e,t))return r[t]===n;var o=i[r[t]];return new RegExp(o).test(n)}function L1(e,t){return t.split("").every(function(n,r){return Ft(e,r)||!jc(e,r,n)})}function Yo(e,t){var n=e.maskChar,r=e.prefix;if(!n){for(;t.length>r.length&&Ft(e,t.length-1);)t=t.slice(0,t.length-1);return t.length}for(var i=r.length,o=t.length;o>=r.length;o--){var a=t[o];if(!Ft(e,o)&&jc(e,o,a)){i=o+1;break}}return i}function v_(e,t){return Yo(e,t)===e.mask.length}function Fn(e,t){var n=e.maskChar,r=e.mask,i=e.prefix;if(!n){for((t=Wp(e,"",t,0)).length<i.length&&(t=i);t.length<r.length&&Ft(e,t.length);)t+=r[t.length];return t}if(t)return Wp(e,Fn(e,""),t,0);for(var o=0;o<r.length;o++)Ft(e,o)?t+=r[o]:t+=n;return t}function Cz(e,t,n,r){var i=n+r,o=e.maskChar,a=e.mask,l=e.prefix,s=t.split("");if(o)return s.map(function(d,c){return c<n||i<=c?d:Ft(e,c)?a[c]:o}).join("");for(var u=i;u<s.length;u++)Ft(e,u)&&(s[u]="");return n=Math.max(l.length,n),s.splice(n,i-n),t=s.join(""),Fn(e,t)}function Wp(e,t,n,r){var i=e.mask,o=e.maskChar,a=e.prefix,l=n.split(""),s=v_(e,t);return!o&&r>t.length&&(t+=i.slice(t.length,r)),l.every(function(u){for(;p=u,Ft(e,y=r)&&p!==i[y];){if(r>=t.length&&(t+=i[r]),d=u,c=r,o&&Ft(e,c)&&d===o)return!0;if(++r>=i.length)return!1}var d,c,y,p;return!jc(e,r,u)&&u!==o||(r<t.length?t=o||s||r<a.length?t.slice(0,r)+u+t.slice(r+1):(t=t.slice(0,r)+u+t.slice(r),Fn(e,t)):o||(t+=u),++r<i.length)}),t}function Ez(e,t,n,r){var i=e.mask,o=e.maskChar,a=n.split(""),l=r;return a.every(function(s){for(;d=s,Ft(e,u=r)&&d!==i[u];)if(++r>=i.length)return!1;var u,d;return(jc(e,r,s)||s===o)&&r++,r<i.length}),r-l}function kz(e,t){for(var n=t;0<=n;--n)if(!Ft(e,n))return n;return null}function aa(e,t){for(var n=e.mask,r=t;r<n.length;++r)if(!Ft(e,r))return r;return null}function Zd(e){return e||e===0?e+"":""}function Tz(e,t,n,r,i){var o=e.mask,a=e.prefix,l=e.lastEditablePosition,s=t,u="",d=0,c=0,y=Math.min(i.start,n.start);return n.end>i.start?c=(d=Ez(e,r,u=s.slice(i.start,n.end),y))?i.length:0:s.length<r.length&&(c=r.length-s.length),s=r,c&&(c===1&&!i.length&&(y=i.start===n.start?aa(e,n.start):kz(e,n.start)),s=Cz(e,s,y,c)),s=Wp(e,s,u,y),(y+=d)>=o.length?y=o.length:y<a.length&&!d?y=a.length:y>=a.length&&y<l&&d&&(y=aa(e,y)),u||(u=null),{value:s=Fn(e,s),enteredString:u,selection:{start:y,end:y}}}function Pz(){var e=new RegExp("windows","i"),t=new RegExp("phone","i"),n=navigator.userAgent;return e.test(n)&&t.test(n)}function xt(e){return typeof e=="function"}function Oz(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame}function y_(){return window.cancelAnimationFrame||window.webkitCancelRequestAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame}function A1(e){return(y_()?Oz():function(){return setTimeout(e,1e3/60)})(e)}function Jd(e){(y_()||clearTimeout)(e)}var jz=function(e){function t(r){var i=e.call(this,r)||this;i.focused=!1,i.mounted=!1,i.previousSelection=null,i.selectionDeferId=null,i.saveSelectionLoopDeferId=null,i.saveSelectionLoop=function(){i.previousSelection=i.getSelection(),i.saveSelectionLoopDeferId=A1(i.saveSelectionLoop)},i.runSaveSelectionLoop=function(){i.saveSelectionLoopDeferId===null&&i.saveSelectionLoop()},i.stopSaveSelectionLoop=function(){i.saveSelectionLoopDeferId!==null&&(Jd(i.saveSelectionLoopDeferId),i.saveSelectionLoopDeferId=null,i.previousSelection=null)},i.getInputDOMNode=function(){if(!i.mounted)return null;var m=gz.findDOMNode(yi(yi(i))),g=typeof window<"u"&&m instanceof window.Element;if(m&&!g)return null;if(m.nodeName!=="INPUT"&&(m=m.querySelector("input")),!m)throw new Error("react-input-mask: inputComponent doesn't contain input node");return m},i.getInputValue=function(){var m=i.getInputDOMNode();return m?m.value:null},i.setInputValue=function(m){var g=i.getInputDOMNode();g&&(i.value=m,g.value=m)},i.setCursorToEnd=function(){var m=Yo(i.maskOptions,i.value),g=aa(i.maskOptions,m);g!==null&&i.setCursorPosition(g)},i.setSelection=function(m,g,w){w===void 0&&(w={});var h=i.getInputDOMNode(),v=i.isFocused();h&&v&&(w.deferred||I1(h,m,g),i.selectionDeferId!==null&&Jd(i.selectionDeferId),i.selectionDeferId=A1(function(){i.selectionDeferId=null,I1(h,m,g)}),i.previousSelection={start:m,end:g,length:Math.abs(g-m)})},i.getSelection=function(){return wz(i.getInputDOMNode())},i.getCursorPosition=function(){return i.getSelection().start},i.setCursorPosition=function(m){i.setSelection(m,m)},i.isFocused=function(){return i.focused},i.getBeforeMaskedValueChangeConfig=function(){var m=i.maskOptions,g=m.mask,w=m.maskChar,h=m.permanents,v=m.formatChars;return{mask:g,maskChar:w,permanents:h,alwaysShowMask:!!i.props.alwaysShowMask,formatChars:v}},i.isInputAutofilled=function(m,g,w,h){var v=i.getInputDOMNode();try{if(v.matches(":-webkit-autofill"))return!0}catch{}return!i.focused||h.end<w.length&&g.end===m.length},i.onChange=function(m){var g=yi(yi(i)).beforePasteState,w=yi(yi(i)).previousSelection,h=i.props.beforeMaskedValueChange,v=i.getInputValue(),x=i.value,S=i.getSelection();i.isInputAutofilled(v,S,x,w)&&(x=Fn(i.maskOptions,""),w={start:0,end:0,length:0}),g&&(w=g.selection,x=g.value,S={start:w.start+v.length,end:w.start+v.length,length:0},v=x.slice(0,w.start)+v+x.slice(w.end),i.beforePasteState=null);var E=Tz(i.maskOptions,v,S,x,w),P=E.enteredString,k=E.selection,_=E.value;if(xt(h)){var M=h({value:_,selection:k},{value:x,selection:w},P,i.getBeforeMaskedValueChangeConfig());_=M.value,k=M.selection}i.setInputValue(_),xt(i.props.onChange)&&i.props.onChange(m),i.isWindowsPhoneBrowser?i.setSelection(k.start,k.end,{deferred:!0}):i.setSelection(k.start,k.end)},i.onFocus=function(m){var g=i.props.beforeMaskedValueChange,w=i.maskOptions,h=w.mask,v=w.prefix;if(i.focused=!0,i.mounted=!0,h){if(i.value)Yo(i.maskOptions,i.value)<i.maskOptions.mask.length&&i.setCursorToEnd();else{var x=Fn(i.maskOptions,v),S=Fn(i.maskOptions,x),E=Yo(i.maskOptions,S),P=aa(i.maskOptions,E),k={start:P,end:P};if(xt(g)){var _=g({value:S,selection:k},{value:i.value,selection:null},null,i.getBeforeMaskedValueChangeConfig());S=_.value,k=_.selection}var M=S!==i.getInputValue();M&&i.setInputValue(S),M&&xt(i.props.onChange)&&i.props.onChange(m),i.setSelection(k.start,k.end)}i.runSaveSelectionLoop()}xt(i.props.onFocus)&&i.props.onFocus(m)},i.onBlur=function(m){var g=i.props.beforeMaskedValueChange,w=i.maskOptions.mask;if(i.stopSaveSelectionLoop(),i.focused=!1,w&&!i.props.alwaysShowMask&&L1(i.maskOptions,i.value)){var h="";xt(g)&&(h=g({value:h,selection:null},{value:i.value,selection:i.previousSelection},null,i.getBeforeMaskedValueChangeConfig()).value);var v=h!==i.getInputValue();v&&i.setInputValue(h),v&&xt(i.props.onChange)&&i.props.onChange(m)}xt(i.props.onBlur)&&i.props.onBlur(m)},i.onMouseDown=function(m){if(!i.focused&&document.addEventListener){i.mouseDownX=m.clientX,i.mouseDownY=m.clientY,i.mouseDownTime=new Date().getTime();var g=function w(h){if(document.removeEventListener("mouseup",w),i.focused){var v=Math.abs(h.clientX-i.mouseDownX),x=Math.abs(h.clientY-i.mouseDownY),S=Math.max(v,x),E=new Date().getTime()-i.mouseDownTime;(S<=10&&E<=200||S<=5&&E<=300)&&i.setCursorToEnd()}};document.addEventListener("mouseup",g)}xt(i.props.onMouseDown)&&i.props.onMouseDown(m)},i.onPaste=function(m){xt(i.props.onPaste)&&i.props.onPaste(m),m.defaultPrevented||(i.beforePasteState={value:i.getInputValue(),selection:i.getSelection()},i.setInputValue(""))},i.handleRef=function(m){i.props.children==null&&xt(i.props.inputRef)&&i.props.inputRef(m)};var o=r.mask,a=r.maskChar,l=r.formatChars,s=r.alwaysShowMask,u=r.beforeMaskedValueChange,d=r.defaultValue,c=r.value;i.maskOptions=D1(o,a,l),d==null&&(d=""),c==null&&(c=d);var y=Zd(c);if(i.maskOptions.mask&&(s||y)&&(y=Fn(i.maskOptions,y),xt(u))){var p=r.value;r.value==null&&(p=d),y=u({value:y,selection:null},{value:p=Zd(p),selection:null},null,i.getBeforeMaskedValueChangeConfig()).value}return i.value=y,i}yz(t,e);var n=t.prototype;return n.componentDidMount=function(){this.mounted=!0,this.getInputDOMNode()&&(this.isWindowsPhoneBrowser=Pz(),this.maskOptions.mask&&this.getInputValue()!==this.value&&this.setInputValue(this.value))},n.componentDidUpdate=function(){var r=this.previousSelection,i=this.props,o=i.beforeMaskedValueChange,a=i.alwaysShowMask,l=i.mask,s=i.maskChar,u=i.formatChars,d=this.maskOptions,c=a||this.isFocused(),y=this.props.value!=null,p=y?Zd(this.props.value):this.value,m=r?r.start:null;if(this.maskOptions=D1(l,s,u),this.maskOptions.mask){!d.mask&&this.isFocused()&&this.runSaveSelectionLoop();var g=this.maskOptions.mask&&this.maskOptions.mask!==d.mask;if(d.mask||y||(p=this.getInputValue()),(g||this.maskOptions.mask&&(p||c))&&(p=Fn(this.maskOptions,p)),g){var w=Yo(this.maskOptions,p);(m===null||w<m)&&(m=v_(this.maskOptions,p)?w:aa(this.maskOptions,w))}!this.maskOptions.mask||!L1(this.maskOptions,p)||c||y&&this.props.value||(p="");var h={start:m,end:m};if(xt(o)){var v=o({value:p,selection:h},{value:this.value,selection:this.previousSelection},null,this.getBeforeMaskedValueChangeConfig());p=v.value,h=v.selection}this.value=p;var x=this.getInputValue()!==this.value;x?(this.setInputValue(this.value),this.forceUpdate()):g&&this.forceUpdate();var S=!1;h.start!=null&&h.end!=null&&(S=!r||r.start!==h.start||r.end!==h.end),(S||x)&&this.setSelection(h.start,h.end)}else d.mask&&(this.stopSaveSelectionLoop(),this.forceUpdate())},n.componentWillUnmount=function(){this.mounted=!1,this.selectionDeferId!==null&&Jd(this.selectionDeferId),this.stopSaveSelectionLoop()},n.render=function(){var r,i=this.props,o=(i.mask,i.alwaysShowMask,i.maskChar,i.formatChars,i.inputRef,i.beforeMaskedValueChange,i.children),a=xz(i,["mask","alwaysShowMask","maskChar","formatChars","inputRef","beforeMaskedValueChange","children"]);if(o){xt(o)||$1(!1);var l=["onChange","onPaste","onMouseDown","onFocus","onBlur","value","disabled","readOnly"],s=Hp({},a);l.forEach(function(d){return delete s[d]}),r=o(s),l.filter(function(d){return r.props[d]!=null&&r.props[d]!==a[d]}).length&&$1(!1)}else r=Qd.createElement("input",Hp({ref:this.handleRef},a));var u={onFocus:this.onFocus,onBlur:this.onBlur};return this.maskOptions.mask&&(a.disabled||a.readOnly||(u.onChange=this.onChange,u.onPaste=this.onPaste,u.onMouseDown=this.onMouseDown),a.value!=null&&(u.value=this.value)),r=Qd.cloneElement(r,u)},t}(Qd.Component),Mz=jz;g_.exports=Mz;var $z=g_.exports;const Iz=Yp($z);C.div`
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
`;const ef=C.div`
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
`,tf=C.label`
  font-size: 14px;
  color: #666;
  margin-bottom: 5px;
`,nf=C.input`
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
`;const rf=C.span`
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
`;const Dz=({formData:e,setFormData:t,errors:n})=>{const r=i=>{const{name:o,value:a}=i.target;o==="phone"&&!a.startsWith("+38 (0")||t(l=>({...l,[o]:a}))};return f.jsxs(f.Fragment,{children:[f.jsx("h3",{children:"Контактні дані"}),f.jsxs(ef,{children:[f.jsx(tf,{children:"Прізвище та ім’я"}),f.jsx(nf,{type:"text",name:"fullName",value:e.fullName,onChange:r,placeholder:"Прізвище Ім'я",autoComplete:"name"}),n.fullName&&f.jsx(rf,{children:n.fullName})]}),f.jsxs(ef,{children:[f.jsx(tf,{children:"Номер телефону"}),f.jsx(Iz,{mask:"+38 (099) 999-99-99",maskChar:"_",name:"phone",autoComplete:"tel",value:e.phone,onChange:r,children:i=>f.jsx(nf,{...i,type:"tel"})}),n.phone&&f.jsx(rf,{children:n.phone})]}),f.jsxs(ef,{children:[f.jsx(tf,{children:"E-mail"}),f.jsx(nf,{type:"email",name:"email",value:e.email,onChange:r,placeholder:"email@example.com",autoComplete:"email"}),n.email&&f.jsx(rf,{children:n.email})]})]})},Lz=C.div`
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
`;const Az=C.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  text-align: left;

  @media screen and (min-width: 1200px) {
    flex-direction: row;
    align-items: flex-start;
  }
`,Rz=C.div`
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
`;C.button`
`;const Fz=({options:e,value:t,onChange:n,error:r})=>{const i=e.find(o=>o.value===t)||null;return f.jsxs("div",{style:{marginBottom:"20px"},children:[f.jsx("label",{style:{display:"block",marginBottom:"8px"},children:"Спосіб оплати"}),f.jsx(Oc,{options:e,value:i,onChange:o=>n(o==null?void 0:o.value),placeholder:"Оберіть спосіб оплати",styles:{control:o=>({...o,borderColor:r?"red":o.borderColor})}}),r&&f.jsx("span",{style:{color:"red",fontSize:"12px"},children:"Оберіть спосіб оплати"})]})},of={}.VITE_NP_API_KEY,R1="https://api.novaposhta.ua/v2.0/json/",zz=()=>{const e=Ye(L=>L.cart.items),t=On(),n=jn();console.log("апі",of);const[r,i]=b.useState({fullName:"",phone:"+38 (0",email:"",city:"",postOffice:""}),[o,a]=b.useState(""),[l,s]=b.useState(null),[u,d]=b.useState(null),[c,y]=b.useState(null),[p,m]=b.useState(null),[g,w]=b.useState([]),[h,v]=b.useState([]),[x,S]=b.useState(null),E=e.reduce((L,O)=>L+(O.new_price??O.price)*O.quantity,0),P=e.reduce((L,O)=>L+O.quantity,0),_=(()=>{const L=new Date().getFullYear().toString().slice(-2),O=Date.now().toString().slice(-4),T=Math.floor(100+Math.random()*900);return`${L}${O}${T}`})();console.log(_),b.useEffect(()=>{if(o.length<2)return;const L=setTimeout(async()=>{const T=await(await fetch(R1,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({apiKey:of,modelName:"Address",calledMethod:"getCities",methodProperties:{FindByString:o}})})).json();w(T.data.map(I=>({value:I.Ref,label:I.Description})))},500);return()=>clearTimeout(L)},[o]),b.useEffect(()=>{if(!l||u!=="nova")return;(async()=>{const T=await(await fetch(R1,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({apiKey:of,modelName:"AddressGeneral",calledMethod:"getWarehouses",methodProperties:{CityRef:l.value}})})).json();v(T.data.map(I=>({value:I.Ref,label:I.Description})))})()},[l,u]);const M=L=>{s(L),i(O=>({...O,city:(L==null?void 0:L.label)||"",postOffice:""})),d(null),y(null),m(null)},$=()=>{const L={};return r.fullName.trim().split(" ").length<2&&(L.fullName="Введіть прізвище та ім'я"),/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(r.email)||(L.email="Некоректний email"),r.phone.replace(/\D/g,"").length<12&&(L.phone="Номер неповний"),l||(L.city=!0),u==="nova"&&!c&&(L.postOffice=!0),u==="ukr"&&!p&&(L.postOffice=!0),u||(L.delivery=!0),x||(L.payment=!0),L},D=b.useMemo($,[r,u,c,p,l,x]),A=Object.keys(D).length===0&&e.length>0,j=async L=>{if(L.preventDefault(),!x){alert("Оберіть спосіб оплати");return}try{if(await fetch("https://backenddidiv-production.up.railway.app/api/orders",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({data:{name:r.fullName,phone:r.phone,email:r.email,city:r.city,products:e==null?void 0:e.map(T=>({id:T.id,name:T.name,quantity:T.quantity,price:T.new_price??T.price})),status_order:"pending",order_number:_,payment_method:x==="liqpay"?"Онлайн (LiqPay)":x==="cod"?"Післяплата":x==="bank_transfer"?"Оплата за реквізитами":"",delivery_method:u==="nova"?"Нова Пошта":u==="ukr"?"УкрПошта":"Самовивіз",delivery_address:u==="nova"?c==null?void 0:c.label:u==="ukr"?p:"Самовивіз"}})}),x==="liqpay"){const T=await fetch("https://backenddidiv-production.up.railway.app/api/liqpay/create",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({amount:E,order_number:_})}),{data:I,signature:z}=await T.json(),B=document.createElement("form");B.method="POST",B.action="https://www.liqpay.ua/api/3/checkout",B.innerHTML=`
        <input type="hidden" name="data" value="${I}" />
        <input type="hidden" name="signature" value="${z}" />
      `,document.body.appendChild(B),B.requestSubmit();return}const O={...r,name:r.fullName,city:l.label,deliveryMethod:u==="nova"?"Нова Пошта":u==="ukr"?"УкрПошта":"Самовивіз",address:u==="nova"?c==null?void 0:c.label:u==="ukr"?p:"Самовивіз",products:e==null?void 0:e.map(T=>({id:T.id,name:T.name,quantity:T.quantity,price:T.new_price??T.price})),total:E,order_number:_,delivery_address:u==="nova"?c==null?void 0:c.label:u==="ukr"?p:"Самовивіз",payment_method:x==="liqpay"?"Онлайн (LiqPay)":x==="cod"?"Післяплата":x==="bank_transfer"?"Оплата за реквізитами":""};n(sm()),t("/order-confirmation",{state:{order:O}})}catch(O){console.error(O),alert("Помилка оформлення")}},F=b.useMemo(()=>[{value:"nova",label:"Нова пошта"},{value:"ukr",label:"Укрпошта"}],[]),R=[{value:"liqpay",label:"Онлайн оплата (LiqPay)"},{value:"cod",label:"Післяплата"},{value:"bank_transfer",label:"Оплата за реквізитами"}];return f.jsx(Lz,{children:f.jsxs(Az,{children:[f.jsxs(Rz,{children:[f.jsx(Dz,{formData:r,setFormData:i,errors:D}),f.jsx(ZF,{cityOptions:g,selectedCity:l,onChange:M,onInputChange:a}),f.jsx(tz,{options:F,value:u,onChange:d,selectedCity:l}),f.jsx(nz,{deliveryMethod:u,officeOptions:h,selectedOffice:c,selectedUkrOffice:p,setSelectedOffice:y,setSelectedUkrOffice:m}),f.jsx(Fz,{options:R,value:x,onChange:S,error:D.payment})]}),f.jsx(hz,{cartItems:e,totalAmount:E,totalQuantity:P,isFormValid:A,handleSubmit:j})]})})},Nz=C.div`
font-family: var(--main-font);
  max-width: 800px;
  margin: 40px auto;
  padding: 40px 20px;
  background: #ffffff;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  text-align: center;
  font-family: 'Inter', sans-serif;
`,Bz=C.h1`
font-family: var(--second-font);
  color: var(--orange-color); 
  font-size: 28px;
  font-weight: 800;
  margin-bottom: 16px;
`,Ir=C.p`
font-family: var(--second-font);
  font-size: 16px;
  color: #555;
  line-height: 1.6;
  margin-bottom: 8px;

  strong {
    color: #1a1a1a;
  }
`,Vz=C.div`
font-family: var(--second-font);
  background: #f8f9fa;
  border-radius: 12px;
  padding: 24px;
  margin: 30px 0;
  text-align: left;
  border: 1px solid #edf2f7;
`,Uz=C.h3`
  font-size: 18px;
  font-weight: 500;
  color: #1a1a1a;
  margin-bottom: 16px;
  border-bottom: 2px solid #e2e8f0;
  padding-bottom: 8px;
`,Hz=C.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 20px;
`,Wz=C.li`
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
`;const Gz=C.div`
  display: flex;
  gap: 15px;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 20px;
`,F1=C.button`
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
`,Yz=()=>{var y,p;const e=On(),t=ri(),[n]=eE(),r=jn(),i=(y=t.state)==null?void 0:y.order,o=n.get("orderId"),[a,l]=b.useState(i||null),[s,u]=b.useState(!i);b.useEffect(()=>{r(sm())},[r]),b.useEffect(()=>{i||(o?fetch(`https://backenddidiv-production.up.railway.app/api/orders?filters[order_number][$eq]=${o}&populate=*`).then(m=>m.json()).then(m=>{var g;((g=m.data)==null?void 0:g.length)>0&&l(m.data[0]),u(!1)}).catch(()=>u(!1)):u(!1))},[o,i]),console.log(a);const c=((a==null?void 0:a.products)??[]).reduce((m,g)=>m+Number(g.new_price??g.price)*(g.quantity||1),0);return s?f.jsx("div",{children:"Завантаження..."}):a?f.jsxs(Nz,{children:[f.jsx(Bz,{children:"Дякуємо за ваше замовлення!"}),f.jsxs(Ir,{children:["Ваше замовлення ",f.jsxs("strong",{children:["№",a.order_number]})," успішно прийняте."]}),f.jsx(Ir,{children:"Ми зв’яжемось з Вами в найближчий час"}),f.jsxs(Vz,{children:[f.jsx(Uz,{children:"Деталі замовлення:"}),f.jsx(Hz,{children:(p=a.products)==null?void 0:p.map(m=>f.jsxs(Wz,{children:[f.jsxs("span",{className:"item-info",children:[m.name," (x",m.quantity,")"]}),f.jsxs("span",{className:"item-price",children:[(m.new_price??m.price)*(m.quantity||1)," грн"]})]},m.id))}),f.jsxs(Ir,{children:[f.jsx("strong",{children:"На суму:"})," ",c," грн."]}),f.jsxs(Ir,{children:[f.jsx("strong",{children:"Отрмувач:"})," ",a.name,", ",a.phone,"."]}),f.jsxs(Ir,{children:[f.jsx("strong",{children:"Спосіб доставки:"})," ",a.deliveryMethod,"."]}),f.jsxs(Ir,{children:[f.jsx("strong",{children:"Адреса отримання:"})," ",a.city,","," ",a.delivery_address,"."]}),f.jsxs(Ir,{children:[f.jsx("strong",{children:"Спосіб оплати:"})," ",a.payment_method,"."]})]}),f.jsxs(Gz,{children:[f.jsx(F1,{primary:!0,onClick:()=>e("/"),children:"Повернутися на головну"}),f.jsx(F1,{onClick:()=>e("/catalog"),children:"Продовжити покупки"})]})]}):f.jsxs("div",{children:["Замовлення не знайдено",f.jsx("button",{onClick:()=>e("/"),children:"На головну"})]})},qz=C.section`
  background-color: var(--second-background);
`,Xz=C.div`
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
`,Kz=C.section`
  padding: 40px 0;
  background-color: #f9f9f980;
  border-radius: 12px;
  margin-bottom: 30px;
`,Qz=C.h1`
  font-family: var(--main-font);
  font-size: 28px;
  color: var(--black-color);
  margin-bottom: 10px;

  @media screen and (min-width: 768px) {
    font-size: 42px;
  }
`,Zz=C.p`

  font-size: 16px;
  color: #666;
`,Jz=C.section`
  margin-bottom: 50px;
`,eN=C.p`
  font-family: var(--second-font);
  font-weight:400;
  font-size: 18px;
  line-height: 1.6;
  max-width: 800px;
  margin: 0 auto 40px;
  color: #444;
`,tN=C.section`
  margin-bottom: 60px;
`,nN=C.h2`
  margin-bottom: 30px;
`,rN=C.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
`,js=C.div`
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
`,iN=()=>f.jsxs(qz,{children:[f.jsxs(Xz,{children:[f.jsxs(Kz,{children:[f.jsx(Qz,{children:"Про Дідів Хлів"}),f.jsx(Zz,{children:"Даємо друге життя якісним велозапчастинам"})]}),f.jsxs(Jz,{children:[f.jsx(eN,{children:"Бізнес створений з переконанням, що обладнання може бути доступним. Ми спеціалізуємося на розборі цікавих і унікальних велосипедів, усі запчастини перевірені нами. Стараємося пропонувати тільки найкраще від Shimano, Sram, Campagnolo та інших світових брендів."}),f.jsx(i2,{})]}),f.jsxs(tN,{children:[f.jsx(nN,{children:"Наша майстерня"}),f.jsxs(rN,{children:[f.jsx(js,{color:"#e2e2e2",children:"Фото майстерні"}),f.jsx(js,{color:"#d1d1d1",children:"Процес діагностики"}),f.jsx(js,{color:"#bcbcbc",children:"Склад запчастин"}),f.jsx(js,{color:"#a8a8a8",children:"Готові велосипеди"})]})]})]})," "]}),oN=()=>{const{pathname:e}=ri();return b.useEffect(()=>{window.scrollTo(0,0)},[e]),null},aN=C.section`
  background-color:  var(--second-background);
  padding: 40px 0;
  min-height: 80vh;
`,sN=C.div`
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
`,lN=C.h1`
  font-family: var(--main-font); 
  font-size: 32px;
  color: var(--black-color);
  margin-bottom: 10px;
  text-transform: uppercase;
`,uN=C.p`
  color: #585555;
  margin-bottom: 40px;
`,cN=C.div`
font-family: var(--second-font);
font-weight: 400;
  display: grid;
  gap: 40px;
  text-align: left;

  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    align-items: start;
  }
`,dN=C.div`
height: 427px;
  display: grid;
  gap: 25px;
    background: #ffffff;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
`,Ms=C.div`
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
`,fN=C.div`
  background: #ffffff;
  padding: 40px 30px;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%; 
`,pN=C.h2`
  margin-bottom: 15px;
  color: var(--brown-color);
  font-size: 24px;
  font-family: var(--main-font);
`,hN=C.p`
  color: #666;
  font-size: 14px;
  line-height: 1.6;
  margin-bottom: 30px;
`,mN=C.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
  
  @media screen and (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`,z1=C.a`
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
`;const gN=C.div`
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

 
`,vN=()=>f.jsx(aN,{children:f.jsxs(sN,{children:[f.jsx(lN,{children:"Контакти"}),f.jsx(uN,{children:"Зв’яжіться з нами для консультації або замовлення"}),f.jsxs(cN,{children:[f.jsxs(dN,{children:[f.jsxs(Ms,{children:[f.jsx("h3",{children:"Адреса"}),f.jsx("p",{children:"вул. Казармена 6Г, Київ, Україна"}),f.jsx("a",{style:{color:"black",fontWeight:"500",fontSize:"0.9rem",display:"inline-block",marginTop:"5px",cursor:"pointer"},href:"https://www.google.com/maps/search/?api=1&query=вул.+Казармена+6Г,+Київ,+Україна",target:"_blank",rel:"noopener noreferrer",children:"📍 Показати на карті"})]}),f.jsxs(Ms,{children:[f.jsx("h3",{children:"Телефон"}),f.jsx("p",{children:"+38 (097) 123-45-67"})]}),f.jsxs(Ms,{children:[f.jsx("h3",{children:"Email"}),f.jsx("p",{children:"didivhliv.com"})]}),f.jsxs(Ms,{children:[f.jsx("h3",{children:"Графік роботи"}),f.jsx("p",{children:"З 11:00 - 20:00"}),f.jsx("p",{children:"Вихідні: Пн, Чт"})]})]}),f.jsxs(fN,{children:[f.jsx(pN,{children:"Ми в соцмережах"}),f.jsx(hN,{children:"Слідкуйте за нашими новинами, новими надходженнями та крутими вело-поїздками у зручному для вас форматі."}),f.jsxs(mN,{children:[f.jsxs(z1,{href:"https://www.instagram.com/didivxliv?igsh=MXhsNWRjdW5rajYwdQ==",target:"_blank",rel:"noopener noreferrer",children:[f.jsx("svg",{width:"20px",children:f.jsx("use",{href:`${cn}#icon-instagram`})}),f.jsx("span",{children:"Instagram"})]}),f.jsxs(z1,{href:"https://t.me/didivxliv",target:"_blank",rel:"noopener noreferrer",children:[f.jsx("svg",{width:"20px",children:f.jsx("use",{href:`${cn}#icon-telegram`})}),f.jsx("span",{children:"Telegram"})]})]}),f.jsx(gN,{children:"Приєднуйся до спільноти!"})]})]})]})}),yN=C.section`
  background-color:  var(--second-background);
`,xN=C.div`
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
  
`,bN=C.div`
     width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  
`,wN=C.h1`

    font-size: 25px;
font-family: var(--main-font);
color: var( --black-color);
text-transform: uppercase;
 @media screen and (min-width: 360px) {
  font-size: 32px;
  }


@media screen and (min-width: 768px) {
  
  }

`,SN=C.div`
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
`,_N=C.div`
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
`,CN=C.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  padding:20px;

`,EN=C.div`
  padding: 16px;
      display: flex;
    align-content: center;
    align-items: center;
        justify-content: space-between;
`,kN=C.p`
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
`;const TN=C.div.attrs({className:"card-buttons"})`
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
`,x_=C.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  flex-wrap: wrap;
  gap: 5px;
  margin-bottom: 15px;
  margin-top: auto; 
 padding-top: 40px; 
`,Vi=C.button`
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
`,PN=C.div`
  position: relative;
  display: inline-block;
  

`,ON=C.button`
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
`,jN=C.div`
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
`,xi=C.div`
  padding: 10px 12px;
  cursor: pointer;

  &:hover {
    background: #f0f0f0;
  }
`,b_=C.div`
  height: 80vh;
          display: flex;
          flex-direction:
          column;
          justify-content: center;
          align-items: center;
          font-size: 30px;
`,w_=C(Oe)`
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
  
`,MN=C.section`
  background-color: var(--second-background);
  /* min-height: 100vh; */
`,$N=C.div`
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
`,IN=C.div`
width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`,DN=C.h1`

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

`,LN=C.div`
  width: 100%;
  display: grid;
  gap: 15px;

  grid-template-columns: 1fr;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
  }
`,AN=C.div`
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
`;const RN=C.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  padding: 20px;
`,FN=C.p`
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
`,zN=C.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 16px 16px;
`;C.span`
  font-size: 16px;
  font-weight: 700;

  &:last-child {
    font-size: 14px;
    color: #999;
    text-decoration: line-through;
    font-weight: 400;
  }
`;const NN=C.div.attrs({className:"card-buttons"})`
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
`,lu=C.button`
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
`;const BN=C.div`
  position: relative;
  display: inline-block;
  display:flex;
  
`,VN=C.div`
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
`,bi=C.div`
  padding: 10px 12px;
  cursor: pointer;

  &:hover {
    background: #f0f0f0;
  }
`,UN=C.button`
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
`,HN=()=>{const[e,t]=b.useState([]),[n,r]=b.useState(!0),i=Ye(E=>E.favorites.items),o=Ye(E=>E.cart.items),[a,l]=b.useState(!1),[s,u]=b.useState("date"),[d,c]=b.useState("asc"),[y,p]=b.useState(1),[m,g]=b.useState(1),w=On(),h=jn(),v=b.useRef(null);b.useEffect(()=>{const E=P=>{v.current&&!v.current.contains(P.target)&&l(!1)};return document.addEventListener("mousedown",E),()=>{document.removeEventListener("mousedown",E)}},[]),b.useEffect(()=>{window.scrollTo({top:0,behavior:"smooth"})},[y]),b.useEffect(()=>{(async()=>{const P=new Date,k=new Date;k.setDate(P.getDate()-7);const _=k.toISOString();try{r(!0);const M=await fetch(`https://backenddidiv-production.up.railway.app/api/products?populate=*&filters[createdAt][$gte]=${_}&pagination[page]=${y}&pagination[pageSize]=24`);if(!M.ok)throw new Error(`HTTP error! Status: ${M.status}`);const $=await M.json();t($.data),g($.meta.pagination.pageCount)}catch(M){console.error("Помилка при завантаженні продуктів:",M)}finally{r(!1)}})()},[y]);const x=b.useMemo(()=>{const E=[...e],P=k=>k.new_price&&k.new_price<k.price?k.new_price:k.price;switch(s){case"name":return E.sort((k,_)=>d==="asc"?k.name.localeCompare(_.name):_.name.localeCompare(k.name));case"price":return E.sort((k,_)=>{const M=P(k),$=P(_);return d==="asc"?M-$:$-M});case"date":return E.sort((k,_)=>d==="asc"?new Date(k.createdAt)-new Date(_.createdAt):new Date(_.createdAt)-new Date(k.createdAt));default:return E}},[s,e,d]),S=(E,P)=>{P.stopPropagation();const k=i.some(_=>_.id===E.id);h(ai(E)),k?q.warning(`${E.name} видалено з обраного`):q.info(`${E.name} додано в обране`)};return n?f.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"100vw",height:"100vh"},children:f.jsx(qa,{height:100,width:100,radius:5,color:"var(--orange-color)",ariaLabel:"ball-triangle-loading",wrapperStyle:{},wrapperClass:"",visible:!0})}):x.length===0?f.jsxs(b_,{children:[f.jsx("p",{style:{textAlign:"center"},children:"Нажаль, нічого нового за останній тиждень"}),f.jsxs(w_,{to:"/catalog",children:[f.jsx("p",{children:"Весь каталог"}),f.jsx(Iu,{size:24})]})]}):f.jsxs(yN,{children:[f.jsxs(xN,{children:[f.jsx(Or,{autoClose:1500}),f.jsxs(bN,{children:[f.jsx(wN,{children:"Нові товари "}),f.jsxs(PN,{ref:v,children:[f.jsxs(ON,{onClick:()=>l(E=>!E),children:["Сортування",f.jsx($u,{strokeWidth:.9,size:22})]}),a&&f.jsxs(jN,{children:[f.jsx(xi,{onClick:()=>{u("name"),c("asc"),l(!1)},children:"А-Я"}),f.jsx(xi,{onClick:()=>{u("name"),c("desc"),l(!1)},children:"Я-А"}),f.jsx(xi,{onClick:()=>{u("price"),c("asc"),l(!1)},children:"Ціна ↑"}),f.jsx(xi,{onClick:()=>{u("price"),c("desc"),l(!1)},children:"Ціна ↓"}),f.jsx(xi,{onClick:()=>{u("date"),c("desc"),l(!1)},children:"Спочатку новіші"}),f.jsx(xi,{onClick:()=>{u("date"),c("asc"),l(!1)},children:"Спочатку старіші"})]})]})]}),f.jsx(SN,{children:x.map(E=>{var R,L;const P=i.some(O=>O.id===E.id),k=(E==null?void 0:E.available)??!0,_=o.find(O=>O.id===E.id),$=(_?_.quantity:0)>=(E.stock||0),D=E.new_price&&E.new_price<E.price,A=D?E.new_price:E.price,j=D?Math.round((E.price-E.new_price)/E.price*100):0,F=(O,T)=>{if(T.stopPropagation(),$){q.error("Товар уже у кошику");return}h(ho({...O,quantity:1})),q.success(`${O.name} додано в кошик!`)};return f.jsxs(_N,{onClick:()=>w(`/product/${E.id}`),children:[!k&&f.jsx(lm,{children:"Заброньовано"}),f.jsx(CN,{src:((L=(R=E.images)==null?void 0:R[0])==null?void 0:L.url)||no,alt:E.name}),f.jsx(kN,{children:E.name}),f.jsxs(EN,{children:[f.jsx(Sc,{children:f.jsxs(_c,{children:[f.jsxs(Cc,{$discount:D,children:[A.toLocaleString()," грн"]}),D&&f.jsxs(Ec,{children:[E.price.toLocaleString()," грн"]}),D&&f.jsxs(kc,{children:["-",j,"%"]})]})}),f.jsxs(TN,{children:[k&&f.jsx(lu,{onClick:O=>F(E,O),children:f.jsx(po,{size:24,color:_?"var(--orange-color)":"black",strokeWidth:2})}),f.jsx(lu,{onClick:O=>S(E,O),children:f.jsx(Ua,{size:24,fill:P?"#ff4d4f":"none",color:P?"#ff4d4f":"#000000",strokeWidth:P?1:2})})]})]})]},E.id)})}),f.jsxs(x_,{children:[f.jsx(Vi,{onClick:()=>p(E=>Math.max(E-1,1)),disabled:y===1,children:"Назад"}),Array.from({length:m},(E,P)=>f.jsx(Vi,{onClick:()=>p(P+1),active:y===P+1,children:P+1},P)),f.jsx(Vi,{onClick:()=>p(E=>Math.min(E+1,m)),disabled:y===m,children:"Вперед"})]})]})," "]})},WN=()=>{const[e,t]=b.useState([]),[n,r]=b.useState(!0),[i,o]=b.useState(!1),[a,l]=b.useState("date"),[s,u]=b.useState("desc"),[d,c]=b.useState(1),y=24;console.log(i);const p=On(),m=jn(),g=Ye(_=>_.favorites.items),w=Ye(_=>_.cart.items),h=b.useRef(null);b.useEffect(()=>{const _=M=>{h.current&&!h.current.contains(M.target)&&o(!1)};return document.addEventListener("mousedown",_),()=>{document.removeEventListener("mousedown",_)}},[]),b.useEffect(()=>{(async()=>{const M="https://backenddidiv-production.up.railway.app";try{const D=await(await fetch(`${M}/api/products?filters[new_price][$notNull]=true&pagination[pageSize]=500&populate=*`)).json();console.log(D.data),t(D.data),r(!1)}catch($){console.log($)}})()},[]),b.useEffect(()=>{window.scrollTo({top:0,behavior:"smooth"})},[d]);const v=b.useMemo(()=>{const _=[...e];switch(a){case"name":return _.sort((M,$)=>s==="asc"?M.name.localeCompare($.name):$.name.localeCompare(M.name));case"price":return _.sort((M,$)=>s==="asc"?M.new_price-$.new_price:$.new_price-M.new_price);case"date":return _.sort((M,$)=>s==="asc"?new Date(M.createdAt)-new Date($.createdAt):new Date($.createdAt)-new Date(M.createdAt));default:return _}},[a,e,s]),x=d*y,S=x-y,E=v.slice(S,x),P=Math.ceil(e.length/y),k=(_,M)=>{M.stopPropagation();const $=g.some(D=>D.id===_.id);m(ai(_)),$?q.warning(`${_.name} видалено з обраного`):q.info(`${_.name} додано в обране`)};return n?f.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"100vw",height:"100vh"},children:f.jsx(qa,{height:100,width:100,radius:5,color:"var(--orange-color)",ariaLabel:"ball-triangle-loading",wrapperStyle:{},wrapperClass:"",visible:!0})}):e.length===0?f.jsxs(b_,{children:[f.jsx("p",{style:{textAlign:"center"},children:"Нажаль, поки знижок немає"}),f.jsxs(w_,{to:"/catalog",children:[f.jsx("p",{children:"Весь каталог"}),f.jsx(Iu,{size:24})]})]}):f.jsx(MN,{children:f.jsxs($N,{children:[f.jsx(Or,{autoClose:1500}),f.jsxs(IN,{children:[f.jsx(DN,{children:"Акційні товари"}),f.jsxs(BN,{ref:h,children:[f.jsxs(UN,{onClick:()=>o(_=>!_),children:["Сортування",f.jsx($u,{strokeWidth:.9,size:22})]}),i&&f.jsxs(VN,{children:[f.jsx(bi,{onClick:()=>{l("name"),u("asc"),o(!1)},children:"А-Я"}),f.jsx(bi,{onClick:()=>{l("name"),u("desc"),o(!1)},children:"Я-А"}),f.jsx(bi,{onClick:()=>{l("price"),u("asc"),o(!1)},children:"Ціна ↑"}),f.jsx(bi,{onClick:()=>{l("price"),u("desc"),o(!1)},children:"Ціна ↓"}),f.jsx(bi,{onClick:()=>{l("date"),u("desc"),o(!1)},children:"Спочатку новіші"}),f.jsx(bi,{onClick:()=>{l("date"),u("asc"),o(!1)},children:"Спочатку старіші"})]})]})]}),f.jsx(LN,{children:E.map(_=>{var T,I;const M=_.new_price&&_.new_price<_.price,$=M?_.new_price:_.price,D=(_==null?void 0:_.available)??!0,A=M?Math.round((_.price-_.new_price)/_.price*100):0,j=g.some(z=>z.id===_.id),F=w.find(z=>z.id===_.id),L=(F?F.quantity:0)>=(_.stock||0),O=(z,B)=>{if(B.stopPropagation(),L){q.error("Товар уже у кошику");return}m(ho({...z,quantity:1})),q.success(`${z.name} додано в кошик!`)};return f.jsxs(AN,{onClick:()=>p(`/product/${_.id}`),style:{cursor:"pointer"},children:[!D&&f.jsx(lm,{children:"Заброньовано"}),f.jsx(RN,{src:((I=(T=_.images)==null?void 0:T[0])==null?void 0:I.url)||"/nofoto.png"}),f.jsx(FN,{children:_.name}),f.jsxs(zN,{children:[f.jsx(Sc,{children:f.jsxs(_c,{children:[f.jsxs(Cc,{$discount:M,children:[$.toLocaleString()," грн"]}),M&&f.jsxs(Ec,{children:[_.price.toLocaleString()," грн"]}),M&&f.jsxs(kc,{children:["-",A,"%"]})]})}),f.jsxs(NN,{children:[D&&f.jsx(lu,{onClick:z=>O(_,z),children:f.jsx(po,{size:24,color:F?"var(--orange-color)":"black",strokeWidth:2})}),f.jsx(lu,{onClick:z=>k(_,z),children:f.jsx(Ua,{size:24,fill:j?"#ff4d4f":"none",color:j?"#ff4d4f":"#000000",strokeWidth:j?1:2})})]})]})]},_.id)})}),v.length>y&&f.jsxs(x_,{children:[f.jsx(Vi,{onClick:()=>c(_=>Math.max(_-1,1)),disabled:d===1,children:"Назад"}),Array.from({length:P},(_,M)=>f.jsx(Vi,{onClick:()=>c(M+1),active:d===M+1,children:M+1},M)),f.jsx(Vi,{onClick:()=>c(_=>Math.min(_+1,P)),disabled:d===P,children:"Вперед"})]})]})})},GN=C.div`
  position: fixed;
  inset: 0;
  background: rgba(25, 20, 16, 0.6);
  backdrop-filter: blur(4px);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  z-index: 999;
`,YN=C.div`
  width: 100%;
  max-width: 360px;

  background: #fbf8f3;
  border-radius: 32px;
  padding: 28px 24px;

  box-shadow: 0 20px 50px rgba(0, 0, 0, .18);

  position: relative;

  @media screen and (min-width: 768px) {
    max-width: 500px;
    padding: 40px;
    border-radius: 36px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 580px;
    padding: 48px;
  }
`,qN=C.button`
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
`,XN=C.h2`
  text-align: center;

  font-size: 30px;
  font-weight: 300;

  color: #312620;

  margin-bottom: 10px;

  @media screen and (min-width:768px){
    font-size:42px;
  }
`,KN=C.p`
  text-align:center;
  color:#8d837d;

  margin-bottom:32px;
`,QN=C.div`
  display:flex;

  background:#efe8df;

  border-radius:40px;

  padding:5px;

  margin-bottom:35px;
`,N1=C.button`
  flex:1;

  height:48px;

  border:none;

  border-radius:30px;

  cursor:pointer;

  font-size:16px;

  transition:.3s;

  background:${({active:e})=>e?"#ff7a00":"transparent"};
  color:${({active:e})=>e?"#fff":"#3d2f29"};

  font-weight:500;
`,$s=C.input`
  width:100%;

  height:56px;

  border-radius:18px;

  border:1px solid #ded6cc;

  background:white;

  padding:0 18px;

  font-size:16px;

  margin-bottom:18px;

  outline:none;

  transition:.3s;

  &:focus{
      border-color:#ff7a00;
      box-shadow:0 0 0 3px rgba(255,122,0,.15);
  }
`,ZN=C.button`
  width:100%;
  height:58px;

  border:none;

  border-radius:18px;

  background:#ff7a00;

  color:white;

  font-size:18px;

  font-weight:600;

  cursor:pointer;

  transition:.3s;

  &:hover{
      background:#eb6f00;
      transform:translateY(-2px);
  }
`,JN=C.p`
  margin-top:28px;

  text-align:center;

  color:#8b817a;

  font-size:15px;

  span{
      color:#ff7a00;
      cursor:pointer;
      font-weight:600;
  }
`,e9=({isOpen:e,onClose:t,mode:n,setMode:r})=>{if(b.useEffect(()=>{const o=a=>{a.key==="Escape"&&t()};return window.addEventListener("keydown",o),()=>window.removeEventListener("keydown",o)},[t]),!e)return null;const i=o=>{o.target===o.currentTarget&&t()};return f.jsx(GN,{onClick:i,children:f.jsxs(YN,{children:[f.jsx(qN,{onClick:t,children:"×"}),f.jsx(XN,{children:n==="login"?"Вхід":"Реєстрація"}),f.jsx(KN,{children:n==="login"?"Увійдіть до свого акаунта":"Створіть новий акаунт"}),f.jsxs(QN,{children:[f.jsx(N1,{active:n==="login",onClick:()=>r("login"),children:"Вхід"}),f.jsx(N1,{active:n==="register",onClick:()=>r("register"),children:"Реєстрація"})]}),n==="register"&&f.jsx($s,{type:"text",placeholder:"Ім'я"}),f.jsx($s,{type:"email",placeholder:"Email"}),f.jsx($s,{type:"password",placeholder:"Пароль"}),n==="register"&&f.jsx($s,{type:"password",placeholder:"Повторіть пароль"}),f.jsx(ZN,{children:n==="login"?"Увійти":"Зареєструватися"}),f.jsx(JN,{children:n==="login"?f.jsxs(f.Fragment,{children:["Немає акаунта?"," ",f.jsx("span",{onClick:()=>r("register"),children:"Зареєструватися"})]}):f.jsxs(f.Fragment,{children:["Вже є акаунт?"," ",f.jsx("span",{onClick:()=>r("login"),children:"Увійти"})]})})]})})};function t9(){const[e,t]=b.useState(!1),[n,r]=b.useState("login");return f.jsxs(b5,{children:[f.jsx(n$,{}),f.jsx(oN,{}),f.jsxs(b.Suspense,{fallback:f.jsx(e$,{}),children:[f.jsx(UC,{children:f.jsxs(rt,{path:"/",element:f.jsx(YO,{openLogin:()=>{r("login"),t(!0)},openRegister:()=>{r("register"),t(!0)}}),children:[f.jsx(rt,{index:!0,element:f.jsx(KI,{})}),f.jsx(rt,{path:"catalog",element:f.jsx(h5,{})}),f.jsx(rt,{path:"/catalog/:category",element:f.jsx(BD,{})}),f.jsx(rt,{path:"/product/:id",element:f.jsx(eA,{})}),f.jsx(rt,{path:"cart",element:f.jsx(PA,{})}),f.jsx(rt,{path:"favorite",element:f.jsx(QA,{})}),f.jsx(rt,{path:"/catalog/new",element:f.jsx(HN,{})}),f.jsx(rt,{path:"/catalog/sale",element:f.jsx(WN,{})}),f.jsx(rt,{path:"checkout",element:f.jsx(zz,{})}),f.jsx(rt,{path:"/order-confirmation",element:f.jsx(Yz,{})}),f.jsx(rt,{path:"about",element:f.jsx(iN,{})}),f.jsx(rt,{path:"contacts",element:f.jsx(vN,{})}),f.jsx(rt,{path:"delivery",element:f.jsx(rR,{})}),f.jsx(rt,{path:"*",element:f.jsx(x5,{})})]})}),f.jsx(e9,{isOpen:e,mode:n,onClose:()=>t(!1),setMode:r})]})]})}var Xm="persist:",S_="persist/FLUSH",Km="persist/REHYDRATE",__="persist/PAUSE",C_="persist/PERSIST",E_="persist/PURGE",k_="persist/REGISTER",n9=-1;function ol(e){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?ol=function(n){return typeof n}:ol=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},ol(e)}function B1(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function r9(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?B1(n,!0).forEach(function(r){i9(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):B1(n).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function i9(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o9(e,t,n,r){r.debug;var i=r9({},n);return e&&ol(e)==="object"&&Object.keys(e).forEach(function(o){o!=="_persist"&&t[o]===n[o]&&(i[o]=e[o])}),i}function a9(e){var t=e.blacklist||null,n=e.whitelist||null,r=e.transforms||[],i=e.throttle||0,o="".concat(e.keyPrefix!==void 0?e.keyPrefix:Xm).concat(e.key),a=e.storage,l;e.serialize===!1?l=function(E){return E}:typeof e.serialize=="function"?l=e.serialize:l=s9;var s=e.writeFailHandler||null,u={},d={},c=[],y=null,p=null,m=function(E){Object.keys(E).forEach(function(P){h(P)&&u[P]!==E[P]&&c.indexOf(P)===-1&&c.push(P)}),Object.keys(u).forEach(function(P){E[P]===void 0&&h(P)&&c.indexOf(P)===-1&&u[P]!==void 0&&c.push(P)}),y===null&&(y=setInterval(g,i)),u=E};function g(){if(c.length===0){y&&clearInterval(y),y=null;return}var S=c.shift(),E=r.reduce(function(P,k){return k.in(P,S,u)},u[S]);if(E!==void 0)try{d[S]=l(E)}catch(P){console.error("redux-persist/createPersistoid: error serializing state",P)}else delete d[S];c.length===0&&w()}function w(){Object.keys(d).forEach(function(S){u[S]===void 0&&delete d[S]}),p=a.setItem(o,l(d)).catch(v)}function h(S){return!(n&&n.indexOf(S)===-1&&S!=="_persist"||t&&t.indexOf(S)!==-1)}function v(S){s&&s(S)}var x=function(){for(;c.length!==0;)g();return p||Promise.resolve()};return{update:m,flush:x}}function s9(e){return JSON.stringify(e)}function l9(e){var t=e.transforms||[],n="".concat(e.keyPrefix!==void 0?e.keyPrefix:Xm).concat(e.key),r=e.storage;e.debug;var i;return e.deserialize===!1?i=function(a){return a}:typeof e.deserialize=="function"?i=e.deserialize:i=u9,r.getItem(n).then(function(o){if(o)try{var a={},l=i(o);return Object.keys(l).forEach(function(s){a[s]=t.reduceRight(function(u,d){return d.out(u,s,l)},i(l[s]))}),a}catch(s){throw s}else return})}function u9(e){return JSON.parse(e)}function c9(e){var t=e.storage,n="".concat(e.keyPrefix!==void 0?e.keyPrefix:Xm).concat(e.key);return t.removeItem(n,d9)}function d9(e){}function V1(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Mn(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?V1(n,!0).forEach(function(r){f9(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):V1(n).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function f9(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p9(e,t){if(e==null)return{};var n=h9(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function h9(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}var m9=5e3;function T_(e,t){var n=e.version!==void 0?e.version:n9;e.debug;var r=e.stateReconciler===void 0?o9:e.stateReconciler,i=e.getStoredState||l9,o=e.timeout!==void 0?e.timeout:m9,a=null,l=!1,s=!0,u=function(c){return c._persist.rehydrated&&a&&!s&&a.update(c),c};return function(d,c){var y=d||{},p=y._persist,m=p9(y,["_persist"]),g=m;if(c.type===C_){var w=!1,h=function(_,M){w||(c.rehydrate(e.key,_,M),w=!0)};if(o&&setTimeout(function(){!w&&h(void 0,new Error('redux-persist: persist timed out for persist key "'.concat(e.key,'"')))},o),s=!1,a||(a=a9(e)),p)return Mn({},t(g,c),{_persist:p});if(typeof c.rehydrate!="function"||typeof c.register!="function")throw new Error("redux-persist: either rehydrate or register is not a function on the PERSIST action. This can happen if the action is being replayed. This is an unexplored use case, please open an issue and we will figure out a resolution.");return c.register(e.key),i(e).then(function(k){var _=e.migrate||function(M,$){return Promise.resolve(M)};_(k,n).then(function(M){h(M)},function(M){h(void 0,M)})},function(k){h(void 0,k)}),Mn({},t(g,c),{_persist:{version:n,rehydrated:!1}})}else{if(c.type===E_)return l=!0,c.result(c9(e)),Mn({},t(g,c),{_persist:p});if(c.type===S_)return c.result(a&&a.flush()),Mn({},t(g,c),{_persist:p});if(c.type===__)s=!0;else if(c.type===Km){if(l)return Mn({},g,{_persist:Mn({},p,{rehydrated:!0})});if(c.key===e.key){var v=t(g,c),x=c.payload,S=r!==!1&&x!==void 0?r(x,d,v,e):v,E=Mn({},S,{_persist:Mn({},p,{rehydrated:!0})});return u(E)}}}if(!p)return t(d,c);var P=t(g,c);return P===g?d:u(Mn({},P,{_persist:p}))}}function U1(e){return y9(e)||v9(e)||g9()}function g9(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function v9(e){if(Symbol.iterator in Object(e)||Object.prototype.toString.call(e)==="[object Arguments]")return Array.from(e)}function y9(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}function H1(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Gp(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?H1(n,!0).forEach(function(r){x9(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):H1(n).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function x9(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var P_={registry:[],bootstrapped:!1},b9=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:P_,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case k_:return Gp({},t,{registry:[].concat(U1(t.registry),[n.key])});case Km:var r=t.registry.indexOf(n.key),i=U1(t.registry);return i.splice(r,1),Gp({},t,{registry:i,bootstrapped:i.length===0});default:return t}};function w9(e,t,n){var r=n||!1,i=rm(b9,P_,t&&t.enhancer?t.enhancer:void 0),o=function(u){i.dispatch({type:k_,key:u})},a=function(u,d,c){var y={type:Km,payload:d,err:c,key:u};e.dispatch(y),i.dispatch(y),r&&l.getState().bootstrapped&&(r(),r=!1)},l=Gp({},i,{purge:function(){var u=[];return e.dispatch({type:E_,result:function(c){u.push(c)}}),Promise.all(u)},flush:function(){var u=[];return e.dispatch({type:S_,result:function(c){u.push(c)}}),Promise.all(u)},pause:function(){e.dispatch({type:__})},persist:function(){e.dispatch({type:C_,register:o,rehydrate:a})}});return t&&t.manualPersist||l.persist(),l}var Qm={},Zm={};Zm.__esModule=!0;Zm.default=C9;function al(e){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?al=function(n){return typeof n}:al=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},al(e)}function af(){}var S9={getItem:af,setItem:af,removeItem:af};function _9(e){if((typeof self>"u"?"undefined":al(self))!=="object"||!(e in self))return!1;try{var t=self[e],n="redux-persist ".concat(e," test");t.setItem(n,"test"),t.getItem(n),t.removeItem(n)}catch{return!1}return!0}function C9(e){var t="".concat(e,"Storage");return _9(t)?self[t]:S9}Qm.__esModule=!0;Qm.default=T9;var E9=k9(Zm);function k9(e){return e&&e.__esModule?e:{default:e}}function T9(e){var t=(0,E9.default)(e);return{getItem:function(r){return new Promise(function(i,o){i(t.getItem(r))})},setItem:function(r,i){return new Promise(function(o,a){o(t.setItem(r,i))})},removeItem:function(r){return new Promise(function(i,o){i(t.removeItem(r))})}}}var Jm=void 0,P9=O9(Qm);function O9(e){return e&&e.__esModule?e:{default:e}}var j9=(0,P9.default)("local");Jm=j9;const M9={key:"cart",storage:Jm},$9={key:"favorites",storage:Jm},I9=T_(M9,Q4),D9=T_($9,Gj),O_=L4({reducer:{cart:I9,favorites:D9},middleware:e=>e({serializableCheck:!1})});w9(O_);ff.createRoot(document.getElementById("root")).render(f.jsx(ZP,{store:O_,children:f.jsx(K.StrictMode,{children:f.jsx(KC,{basename:"/Didiv/",children:f.jsx(t9,{})})})}));
