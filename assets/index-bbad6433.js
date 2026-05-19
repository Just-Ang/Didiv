function S_(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();var te=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function zp(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function Tt(e){if(e.__esModule)return e;var t=e.default;if(typeof t=="function"){var n=function r(){return this instanceof r?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach(function(r){var i=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(n,r,i.get?i:{enumerable:!0,get:function(){return e[r]}})}),n}var V1={exports:{}},ou={},U1={exports:{}},re={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var La=Symbol.for("react.element"),__=Symbol.for("react.portal"),C_=Symbol.for("react.fragment"),E_=Symbol.for("react.strict_mode"),k_=Symbol.for("react.profiler"),T_=Symbol.for("react.provider"),P_=Symbol.for("react.context"),O_=Symbol.for("react.forward_ref"),j_=Symbol.for("react.suspense"),M_=Symbol.for("react.memo"),$_=Symbol.for("react.lazy"),Zm=Symbol.iterator;function I_(e){return e===null||typeof e!="object"?null:(e=Zm&&e[Zm]||e["@@iterator"],typeof e=="function"?e:null)}var H1={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},W1=Object.assign,G1={};function oo(e,t,n){this.props=e,this.context=t,this.refs=G1,this.updater=n||H1}oo.prototype.isReactComponent={};oo.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};oo.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function q1(){}q1.prototype=oo.prototype;function Np(e,t,n){this.props=e,this.context=t,this.refs=G1,this.updater=n||H1}var Bp=Np.prototype=new q1;Bp.constructor=Np;W1(Bp,oo.prototype);Bp.isPureReactComponent=!0;var Jm=Array.isArray,Y1=Object.prototype.hasOwnProperty,Vp={current:null},X1={key:!0,ref:!0,__self:!0,__source:!0};function K1(e,t,n){var r,i={},o=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(o=""+t.key),t)Y1.call(t,r)&&!X1.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var s=Array(l),u=0;u<l;u++)s[u]=arguments[u+2];i.children=s}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:La,type:e,key:o,ref:a,props:i,_owner:Vp.current}}function D_(e,t){return{$$typeof:La,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Up(e){return typeof e=="object"&&e!==null&&e.$$typeof===La}function L_(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var eg=/\/+/g;function kc(e,t){return typeof e=="object"&&e!==null&&e.key!=null?L_(""+e.key):t.toString(36)}function Ms(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case La:case __:a=!0}}if(a)return a=e,i=i(a),e=r===""?"."+kc(a,0):r,Jm(i)?(n="",e!=null&&(n=e.replace(eg,"$&/")+"/"),Ms(i,t,n,"",function(u){return u})):i!=null&&(Up(i)&&(i=D_(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(eg,"$&/")+"/")+e)),t.push(i)),1;if(a=0,r=r===""?".":r+":",Jm(e))for(var l=0;l<e.length;l++){o=e[l];var s=r+kc(o,l);a+=Ms(o,t,n,s,i)}else if(s=I_(e),typeof s=="function")for(e=s.call(e),l=0;!(o=e.next()).done;)o=o.value,s=r+kc(o,l++),a+=Ms(o,t,n,s,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function es(e,t,n){if(e==null)return e;var r=[],i=0;return Ms(e,r,"","",function(o){return t.call(n,o,i++)}),r}function A_(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var mt={current:null},$s={transition:null},R_={ReactCurrentDispatcher:mt,ReactCurrentBatchConfig:$s,ReactCurrentOwner:Vp};re.Children={map:es,forEach:function(e,t,n){es(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return es(e,function(){t++}),t},toArray:function(e){return es(e,function(t){return t})||[]},only:function(e){if(!Up(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};re.Component=oo;re.Fragment=C_;re.Profiler=k_;re.PureComponent=Np;re.StrictMode=E_;re.Suspense=j_;re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=R_;re.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=W1({},e.props),i=e.key,o=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,a=Vp.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in t)Y1.call(t,s)&&!X1.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&l!==void 0?l[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){l=Array(s);for(var u=0;u<s;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:La,type:e.type,key:i,ref:o,props:r,_owner:a}};re.createContext=function(e){return e={$$typeof:P_,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:T_,_context:e},e.Consumer=e};re.createElement=K1;re.createFactory=function(e){var t=K1.bind(null,e);return t.type=e,t};re.createRef=function(){return{current:null}};re.forwardRef=function(e){return{$$typeof:O_,render:e}};re.isValidElement=Up;re.lazy=function(e){return{$$typeof:$_,_payload:{_status:-1,_result:e},_init:A_}};re.memo=function(e,t){return{$$typeof:M_,type:e,compare:t===void 0?null:t}};re.startTransition=function(e){var t=$s.transition;$s.transition={};try{e()}finally{$s.transition=t}};re.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};re.useCallback=function(e,t){return mt.current.useCallback(e,t)};re.useContext=function(e){return mt.current.useContext(e)};re.useDebugValue=function(){};re.useDeferredValue=function(e){return mt.current.useDeferredValue(e)};re.useEffect=function(e,t){return mt.current.useEffect(e,t)};re.useId=function(){return mt.current.useId()};re.useImperativeHandle=function(e,t,n){return mt.current.useImperativeHandle(e,t,n)};re.useInsertionEffect=function(e,t){return mt.current.useInsertionEffect(e,t)};re.useLayoutEffect=function(e,t){return mt.current.useLayoutEffect(e,t)};re.useMemo=function(e,t){return mt.current.useMemo(e,t)};re.useReducer=function(e,t,n){return mt.current.useReducer(e,t,n)};re.useRef=function(e){return mt.current.useRef(e)};re.useState=function(e){return mt.current.useState(e)};re.useSyncExternalStore=function(e,t,n){return mt.current.useSyncExternalStore(e,t,n)};re.useTransition=function(){return mt.current.useTransition()};re.version="18.2.0";U1.exports=re;var b=U1.exports;const Y=zp(b),Zd=S_({__proto__:null,default:Y},[b]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var F_=b,z_=Symbol.for("react.element"),N_=Symbol.for("react.fragment"),B_=Object.prototype.hasOwnProperty,V_=F_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,U_={key:!0,ref:!0,__self:!0,__source:!0};function Q1(e,t,n){var r,i={},o=null,a=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)B_.call(t,r)&&!U_.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:z_,type:e,key:o,ref:a,props:i,_owner:V_.current}}ou.Fragment=N_;ou.jsx=Q1;ou.jsxs=Q1;V1.exports=ou;var f=V1.exports;/**
 * @remix-run/router v1.8.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function sa(){return sa=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},sa.apply(this,arguments)}var lr;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(lr||(lr={}));const tg="popstate";function H_(e){e===void 0&&(e={});function t(r,i){let{pathname:o,search:a,hash:l}=r.location;return Jd("",{pathname:o,search:a,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:ol(i)}return G_(t,n,null,e)}function Le(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Hp(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function W_(){return Math.random().toString(36).substr(2,8)}function ng(e,t){return{usr:e.state,key:e.key,idx:t}}function Jd(e,t,n,r){return n===void 0&&(n=null),sa({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?ao(t):t,{state:n,key:t&&t.key||r||W_()})}function ol(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function ao(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function G_(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,a=i.history,l=lr.Pop,s=null,u=d();u==null&&(u=0,a.replaceState(sa({},a.state,{idx:u}),""));function d(){return(a.state||{idx:null}).idx}function c(){l=lr.Pop;let w=d(),h=w==null?null:w-u;u=w,s&&s({action:l,location:v.location,delta:h})}function y(w,h){l=lr.Push;let g=Jd(v.location,w,h);n&&n(g,w),u=d()+1;let x=ng(g,u),S=v.createHref(g);try{a.pushState(x,"",S)}catch(T){if(T instanceof DOMException&&T.name==="DataCloneError")throw T;i.location.assign(S)}o&&s&&s({action:l,location:v.location,delta:1})}function p(w,h){l=lr.Replace;let g=Jd(v.location,w,h);n&&n(g,w),u=d();let x=ng(g,u),S=v.createHref(g);a.replaceState(x,"",S),o&&s&&s({action:l,location:v.location,delta:0})}function m(w){let h=i.location.origin!=="null"?i.location.origin:i.location.href,g=typeof w=="string"?w:ol(w);return Le(h,"No window.location.(origin|href) available to create URL for href: "+g),new URL(g,h)}let v={get action(){return l},get location(){return e(i,a)},listen(w){if(s)throw new Error("A history only accepts one active listener");return i.addEventListener(tg,c),s=w,()=>{i.removeEventListener(tg,c),s=null}},createHref(w){return t(i,w)},createURL:m,encodeLocation(w){let h=m(w);return{pathname:h.pathname,search:h.search,hash:h.hash}},push:y,replace:p,go(w){return a.go(w)}};return v}var rg;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(rg||(rg={}));function q_(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?ao(t):t,i=Wp(r.pathname||"/",n);if(i==null)return null;let o=Z1(e);Y_(o);let a=null;for(let l=0;a==null&&l<o.length;++l)a=rC(o[l],aC(i));return a}function Z1(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,a,l)=>{let s={relativePath:l===void 0?o.path||"":l,caseSensitive:o.caseSensitive===!0,childrenIndex:a,route:o};s.relativePath.startsWith("/")&&(Le(s.relativePath.startsWith(r),'Absolute route path "'+s.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),s.relativePath=s.relativePath.slice(r.length));let u=pr([r,s.relativePath]),d=n.concat(s);o.children&&o.children.length>0&&(Le(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Z1(o.children,t,d,u)),!(o.path==null&&!o.index)&&t.push({path:u,score:tC(u,o.index),routesMeta:d})};return e.forEach((o,a)=>{var l;if(o.path===""||!((l=o.path)!=null&&l.includes("?")))i(o,a);else for(let s of J1(o.path))i(o,a,s)}),t}function J1(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let a=J1(r.join("/")),l=[];return l.push(...a.map(s=>s===""?o:[o,s].join("/"))),i&&l.push(...a),l.map(s=>e.startsWith("/")&&s===""?"/":s)}function Y_(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:nC(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const X_=/^:\w+$/,K_=3,Q_=2,Z_=1,J_=10,eC=-2,ig=e=>e==="*";function tC(e,t){let n=e.split("/"),r=n.length;return n.some(ig)&&(r+=eC),t&&(r+=Q_),n.filter(i=>!ig(i)).reduce((i,o)=>i+(X_.test(o)?K_:o===""?Z_:J_),r)}function nC(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function rC(e,t){let{routesMeta:n}=e,r={},i="/",o=[];for(let a=0;a<n.length;++a){let l=n[a],s=a===n.length-1,u=i==="/"?t:t.slice(i.length)||"/",d=iC({path:l.relativePath,caseSensitive:l.caseSensitive,end:s},u);if(!d)return null;Object.assign(r,d.params);let c=l.route;o.push({params:r,pathname:pr([i,d.pathname]),pathnameBase:cC(pr([i,d.pathnameBase])),route:c}),d.pathnameBase!=="/"&&(i=pr([i,d.pathnameBase]))}return o}function iC(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=oC(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],a=o.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((u,d,c)=>{if(d==="*"){let y=l[c]||"";a=o.slice(0,o.length-y.length).replace(/(.)\/+$/,"$1")}return u[d]=sC(l[c]||"",d),u},{}),pathname:o,pathnameBase:a,pattern:e}}function oC(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Hp(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(a,l)=>(r.push(l),"/([^\\/]+)"));return e.endsWith("*")?(r.push("*"),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function aC(e){try{return decodeURI(e)}catch(t){return Hp(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function sC(e,t){try{return decodeURIComponent(e)}catch(n){return Hp(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function Wp(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function lC(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?ao(e):e;return{pathname:n?n.startsWith("/")?n:uC(n,t):t,search:dC(r),hash:fC(i)}}function uC(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Tc(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function ey(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function ty(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=ao(e):(i=sa({},e),Le(!i.pathname||!i.pathname.includes("?"),Tc("?","pathname","search",i)),Le(!i.pathname||!i.pathname.includes("#"),Tc("#","pathname","hash",i)),Le(!i.search||!i.search.includes("#"),Tc("#","search","hash",i)));let o=e===""||i.pathname==="",a=o?"/":i.pathname,l;if(r||a==null)l=n;else{let c=t.length-1;if(a.startsWith("..")){let y=a.split("/");for(;y[0]==="..";)y.shift(),c-=1;i.pathname=y.join("/")}l=c>=0?t[c]:"/"}let s=lC(i,l),u=a&&a!=="/"&&a.endsWith("/"),d=(o||a===".")&&n.endsWith("/");return!s.pathname.endsWith("/")&&(u||d)&&(s.pathname+="/"),s}const pr=e=>e.join("/").replace(/\/\/+/g,"/"),cC=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),dC=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,fC=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function pC(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const ny=["post","put","patch","delete"];new Set(ny);const hC=["get",...ny];new Set(hC);/**
 * React Router v6.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function al(){return al=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},al.apply(this,arguments)}const Gp=b.createContext(null),mC=b.createContext(null),so=b.createContext(null),au=b.createContext(null),Kn=b.createContext({outlet:null,matches:[],isDataRoute:!1}),ry=b.createContext(null);function gC(e,t){let{relative:n}=t===void 0?{}:t;Aa()||Le(!1);let{basename:r,navigator:i}=b.useContext(so),{hash:o,pathname:a,search:l}=ay(e,{relative:n}),s=a;return r!=="/"&&(s=a==="/"?r:pr([r,a])),i.createHref({pathname:s,search:l,hash:o})}function Aa(){return b.useContext(au)!=null}function ri(){return Aa()||Le(!1),b.useContext(au).location}function iy(e){b.useContext(so).static||b.useLayoutEffect(e)}function On(){let{isDataRoute:e}=b.useContext(Kn);return e?MC():vC()}function vC(){Aa()||Le(!1);let e=b.useContext(Gp),{basename:t,navigator:n}=b.useContext(so),{matches:r}=b.useContext(Kn),{pathname:i}=ri(),o=JSON.stringify(ey(r).map(s=>s.pathnameBase)),a=b.useRef(!1);return iy(()=>{a.current=!0}),b.useCallback(function(s,u){if(u===void 0&&(u={}),!a.current)return;if(typeof s=="number"){n.go(s);return}let d=ty(s,JSON.parse(o),i,u.relative==="path");e==null&&t!=="/"&&(d.pathname=d.pathname==="/"?t:pr([t,d.pathname])),(u.replace?n.replace:n.push)(d,u.state,u)},[t,n,o,i,e])}const yC=b.createContext(null);function xC(e){let t=b.useContext(Kn).outlet;return t&&b.createElement(yC.Provider,{value:e},t)}function oy(){let{matches:e}=b.useContext(Kn),t=e[e.length-1];return t?t.params:{}}function ay(e,t){let{relative:n}=t===void 0?{}:t,{matches:r}=b.useContext(Kn),{pathname:i}=ri(),o=JSON.stringify(ey(r).map(a=>a.pathnameBase));return b.useMemo(()=>ty(e,JSON.parse(o),i,n==="path"),[e,o,i,n])}function bC(e,t){return wC(e,t)}function wC(e,t,n){Aa()||Le(!1);let{navigator:r}=b.useContext(so),{matches:i}=b.useContext(Kn),o=i[i.length-1],a=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let s=ri(),u;if(t){var d;let v=typeof t=="string"?ao(t):t;l==="/"||(d=v.pathname)!=null&&d.startsWith(l)||Le(!1),u=v}else u=s;let c=u.pathname||"/",y=l==="/"?c:c.slice(l.length)||"/",p=q_(e,{pathname:y}),m=kC(p&&p.map(v=>Object.assign({},v,{params:Object.assign({},a,v.params),pathname:pr([l,r.encodeLocation?r.encodeLocation(v.pathname).pathname:v.pathname]),pathnameBase:v.pathnameBase==="/"?l:pr([l,r.encodeLocation?r.encodeLocation(v.pathnameBase).pathname:v.pathnameBase])})),i,n);return t&&m?b.createElement(au.Provider,{value:{location:al({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:lr.Pop}},m):m}function SC(){let e=jC(),t=pC(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},o=null;return b.createElement(b.Fragment,null,b.createElement("h2",null,"Unexpected Application Error!"),b.createElement("h3",{style:{fontStyle:"italic"}},t),n?b.createElement("pre",{style:i},n):null,o)}const _C=b.createElement(SC,null);class CC extends b.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error||n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?b.createElement(Kn.Provider,{value:this.props.routeContext},b.createElement(ry.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function EC(e){let{routeContext:t,match:n,children:r}=e,i=b.useContext(Gp);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),b.createElement(Kn.Provider,{value:t},r)}function kC(e,t,n){var r;if(t===void 0&&(t=[]),n===void 0&&(n=null),e==null){var i;if((i=n)!=null&&i.errors)e=n.matches;else return null}let o=e,a=(r=n)==null?void 0:r.errors;if(a!=null){let l=o.findIndex(s=>s.route.id&&(a==null?void 0:a[s.route.id]));l>=0||Le(!1),o=o.slice(0,Math.min(o.length,l+1))}return o.reduceRight((l,s,u)=>{let d=s.route.id?a==null?void 0:a[s.route.id]:null,c=null;n&&(c=s.route.errorElement||_C);let y=t.concat(o.slice(0,u+1)),p=()=>{let m;return d?m=c:s.route.Component?m=b.createElement(s.route.Component,null):s.route.element?m=s.route.element:m=l,b.createElement(EC,{match:s,routeContext:{outlet:l,matches:y,isDataRoute:n!=null},children:m})};return n&&(s.route.ErrorBoundary||s.route.errorElement||u===0)?b.createElement(CC,{location:n.location,revalidation:n.revalidation,component:c,error:d,children:p(),routeContext:{outlet:null,matches:y,isDataRoute:!0}}):p()},null)}var sy=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(sy||{}),sl=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(sl||{});function TC(e){let t=b.useContext(Gp);return t||Le(!1),t}function PC(e){let t=b.useContext(mC);return t||Le(!1),t}function OC(e){let t=b.useContext(Kn);return t||Le(!1),t}function ly(e){let t=OC(),n=t.matches[t.matches.length-1];return n.route.id||Le(!1),n.route.id}function jC(){var e;let t=b.useContext(ry),n=PC(sl.UseRouteError),r=ly(sl.UseRouteError);return t||((e=n.errors)==null?void 0:e[r])}function MC(){let{router:e}=TC(sy.UseNavigateStable),t=ly(sl.UseNavigateStable),n=b.useRef(!1);return iy(()=>{n.current=!0}),b.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,al({fromRouteId:t},o)))},[e,t])}function $C(e){return xC(e.context)}function nt(e){Le(!1)}function IC(e){let{basename:t="/",children:n=null,location:r,navigationType:i=lr.Pop,navigator:o,static:a=!1}=e;Aa()&&Le(!1);let l=t.replace(/^\/*/,"/"),s=b.useMemo(()=>({basename:l,navigator:o,static:a}),[l,o,a]);typeof r=="string"&&(r=ao(r));let{pathname:u="/",search:d="",hash:c="",state:y=null,key:p="default"}=r,m=b.useMemo(()=>{let v=Wp(u,l);return v==null?null:{location:{pathname:v,search:d,hash:c,state:y,key:p},navigationType:i}},[l,u,d,c,y,p,i]);return m==null?null:b.createElement(so.Provider,{value:s},b.createElement(au.Provider,{children:n,value:m}))}function DC(e){let{children:t,location:n}=e;return bC(ef(t),n)}new Promise(()=>{});function ef(e,t){t===void 0&&(t=[]);let n=[];return b.Children.forEach(e,(r,i)=>{if(!b.isValidElement(r))return;let o=[...t,i];if(r.type===b.Fragment){n.push.apply(n,ef(r.props.children,o));return}r.type!==nt&&Le(!1),!r.props.index||!r.props.children||Le(!1);let a={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(a.children=ef(r.props.children,o)),n.push(a)}),n}/**
 * React Router DOM v6.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function tf(){return tf=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},tf.apply(this,arguments)}function LC(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function AC(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function RC(e,t){return e.button===0&&(!t||t==="_self")&&!AC(e)}function nf(e){return e===void 0&&(e=""),new URLSearchParams(typeof e=="string"||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce((t,n)=>{let r=e[n];return t.concat(Array.isArray(r)?r.map(i=>[n,i]):[[n,r]])},[]))}function FC(e,t){let n=nf(e);return t&&t.forEach((r,i)=>{n.has(i)||t.getAll(i).forEach(o=>{n.append(i,o)})}),n}const zC=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],NC="startTransition",og=Zd[NC];function BC(e){let{basename:t,children:n,future:r,window:i}=e,o=b.useRef();o.current==null&&(o.current=H_({window:i,v5Compat:!0}));let a=o.current,[l,s]=b.useState({action:a.action,location:a.location}),{v7_startTransition:u}=r||{},d=b.useCallback(c=>{u&&og?og(()=>s(c)):s(c)},[s,u]);return b.useLayoutEffect(()=>a.listen(d),[a,d]),b.createElement(IC,{basename:t,children:n,location:l.location,navigationType:l.action,navigator:a})}const VC=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",UC=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Oe=b.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:o,replace:a,state:l,target:s,to:u,preventScrollReset:d}=t,c=LC(t,zC),{basename:y}=b.useContext(so),p,m=!1;if(typeof u=="string"&&UC.test(u)&&(p=u,VC))try{let g=new URL(window.location.href),x=u.startsWith("//")?new URL(g.protocol+u):new URL(u),S=Wp(x.pathname,y);x.origin===g.origin&&S!=null?u=S+x.search+x.hash:m=!0}catch{}let v=gC(u,{relative:i}),w=HC(u,{replace:a,state:l,target:s,preventScrollReset:d,relative:i});function h(g){r&&r(g),g.defaultPrevented||w(g)}return b.createElement("a",tf({},c,{href:p||v,onClick:m||o?r:h,ref:n,target:s}))});var ag;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher"})(ag||(ag={}));var sg;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(sg||(sg={}));function HC(e,t){let{target:n,replace:r,state:i,preventScrollReset:o,relative:a}=t===void 0?{}:t,l=On(),s=ri(),u=ay(e,{relative:a});return b.useCallback(d=>{if(RC(d,n)){d.preventDefault();let c=r!==void 0?r:ol(s)===ol(u);l(e,{replace:c,state:i,preventScrollReset:o,relative:a})}},[s,l,u,r,i,n,e,o,a])}function WC(e){let t=b.useRef(nf(e)),n=b.useRef(!1),r=ri(),i=b.useMemo(()=>FC(r.search,n.current?null:t.current),[r.search]),o=On(),a=b.useCallback((l,s)=>{const u=nf(typeof l=="function"?l(i):l);n.current=!0,o("?"+u,s)},[o,i]);return[i,a]}var rf={},uy={exports:{}},Ft={},cy={exports:{}},dy={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(P,I){var z=P.length;P.push(I);e:for(;0<z;){var B=z-1>>>1,N=P[B];if(0<i(N,I))P[B]=I,P[z]=N,z=B;else break e}}function n(P){return P.length===0?null:P[0]}function r(P){if(P.length===0)return null;var I=P[0],z=P.pop();if(z!==I){P[0]=z;e:for(var B=0,N=P.length,U=N>>>1;B<U;){var H=2*(B+1)-1,q=P[H],X=H+1,ee=P[X];if(0>i(q,z))X<N&&0>i(ee,q)?(P[B]=ee,P[X]=z,B=X):(P[B]=q,P[H]=z,B=H);else if(X<N&&0>i(ee,z))P[B]=ee,P[X]=z,B=X;else break e}}return I}function i(P,I){var z=P.sortIndex-I.sortIndex;return z!==0?z:P.id-I.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var a=Date,l=a.now();e.unstable_now=function(){return a.now()-l}}var s=[],u=[],d=1,c=null,y=3,p=!1,m=!1,v=!1,w=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(P){for(var I=n(u);I!==null;){if(I.callback===null)r(u);else if(I.startTime<=P)r(u),I.sortIndex=I.expirationTime,t(s,I);else break;I=n(u)}}function S(P){if(v=!1,x(P),!m)if(n(s)!==null)m=!0,O(T);else{var I=n(u);I!==null&&D(S,I.startTime-P)}}function T(P,I){m=!1,v&&(v=!1,h(_),_=-1),p=!0;var z=y;try{for(x(I),c=n(s);c!==null&&(!(c.expirationTime>I)||P&&!R());){var B=c.callback;if(typeof B=="function"){c.callback=null,y=c.priorityLevel;var N=B(c.expirationTime<=I);I=e.unstable_now(),typeof N=="function"?c.callback=N:c===n(s)&&r(s),x(I)}else r(s);c=n(s)}if(c!==null)var U=!0;else{var H=n(u);H!==null&&D(S,H.startTime-I),U=!1}return U}finally{c=null,y=z,p=!1}}var k=!1,C=null,_=-1,$=5,M=-1;function R(){return!(e.unstable_now()-M<$)}function L(){if(C!==null){var P=e.unstable_now();M=P;var I=!0;try{I=C(!0,P)}finally{I?j():(k=!1,C=null)}}else k=!1}var j;if(typeof g=="function")j=function(){g(L)};else if(typeof MessageChannel<"u"){var F=new MessageChannel,A=F.port2;F.port1.onmessage=L,j=function(){A.postMessage(null)}}else j=function(){w(L,0)};function O(P){C=P,k||(k=!0,j())}function D(P,I){_=w(function(){P(e.unstable_now())},I)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(P){P.callback=null},e.unstable_continueExecution=function(){m||p||(m=!0,O(T))},e.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):$=0<P?Math.floor(1e3/P):5},e.unstable_getCurrentPriorityLevel=function(){return y},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(P){switch(y){case 1:case 2:case 3:var I=3;break;default:I=y}var z=y;y=I;try{return P()}finally{y=z}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(P,I){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var z=y;y=P;try{return I()}finally{y=z}},e.unstable_scheduleCallback=function(P,I,z){var B=e.unstable_now();switch(typeof z=="object"&&z!==null?(z=z.delay,z=typeof z=="number"&&0<z?B+z:B):z=B,P){case 1:var N=-1;break;case 2:N=250;break;case 5:N=1073741823;break;case 4:N=1e4;break;default:N=5e3}return N=z+N,P={id:d++,callback:I,priorityLevel:P,startTime:z,expirationTime:N,sortIndex:-1},z>B?(P.sortIndex=z,t(u,P),n(s)===null&&P===n(u)&&(v?(h(_),_=-1):v=!0,D(S,z-B))):(P.sortIndex=N,t(s,P),m||p||(m=!0,O(T))),P},e.unstable_shouldYield=R,e.unstable_wrapCallback=function(P){var I=y;return function(){var z=y;y=I;try{return P.apply(this,arguments)}finally{y=z}}}})(dy);cy.exports=dy;var GC=cy.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fy=b,At=GC;function V(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var py=new Set,la={};function ii(e,t){Vi(e,t),Vi(e+"Capture",t)}function Vi(e,t){for(la[e]=t,e=0;e<t.length;e++)py.add(t[e])}var Hn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),of=Object.prototype.hasOwnProperty,qC=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,lg={},ug={};function YC(e){return of.call(ug,e)?!0:of.call(lg,e)?!1:qC.test(e)?ug[e]=!0:(lg[e]=!0,!1)}function XC(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function KC(e,t,n,r){if(t===null||typeof t>"u"||XC(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function gt(e,t,n,r,i,o,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=a}var Ze={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Ze[e]=new gt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Ze[t]=new gt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Ze[e]=new gt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Ze[e]=new gt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Ze[e]=new gt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Ze[e]=new gt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Ze[e]=new gt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Ze[e]=new gt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Ze[e]=new gt(e,5,!1,e.toLowerCase(),null,!1,!1)});var qp=/[\-:]([a-z])/g;function Yp(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(qp,Yp);Ze[t]=new gt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(qp,Yp);Ze[t]=new gt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(qp,Yp);Ze[t]=new gt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Ze[e]=new gt(e,1,!1,e.toLowerCase(),null,!1,!1)});Ze.xlinkHref=new gt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Ze[e]=new gt(e,1,!1,e.toLowerCase(),null,!0,!0)});function Xp(e,t,n,r){var i=Ze.hasOwnProperty(t)?Ze[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(KC(t,n,i,r)&&(n=null),r||i===null?YC(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Qn=fy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ts=Symbol.for("react.element"),wi=Symbol.for("react.portal"),Si=Symbol.for("react.fragment"),Kp=Symbol.for("react.strict_mode"),af=Symbol.for("react.profiler"),hy=Symbol.for("react.provider"),my=Symbol.for("react.context"),Qp=Symbol.for("react.forward_ref"),sf=Symbol.for("react.suspense"),lf=Symbol.for("react.suspense_list"),Zp=Symbol.for("react.memo"),ir=Symbol.for("react.lazy"),gy=Symbol.for("react.offscreen"),cg=Symbol.iterator;function Co(e){return e===null||typeof e!="object"?null:(e=cg&&e[cg]||e["@@iterator"],typeof e=="function"?e:null)}var ke=Object.assign,Pc;function zo(e){if(Pc===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Pc=t&&t[1]||""}return`
`+Pc+e}var Oc=!1;function jc(e,t){if(!e||Oc)return"";Oc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),a=i.length-1,l=o.length-1;1<=a&&0<=l&&i[a]!==o[l];)l--;for(;1<=a&&0<=l;a--,l--)if(i[a]!==o[l]){if(a!==1||l!==1)do if(a--,l--,0>l||i[a]!==o[l]){var s=`
`+i[a].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=a&&0<=l);break}}}finally{Oc=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?zo(e):""}function QC(e){switch(e.tag){case 5:return zo(e.type);case 16:return zo("Lazy");case 13:return zo("Suspense");case 19:return zo("SuspenseList");case 0:case 2:case 15:return e=jc(e.type,!1),e;case 11:return e=jc(e.type.render,!1),e;case 1:return e=jc(e.type,!0),e;default:return""}}function uf(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Si:return"Fragment";case wi:return"Portal";case af:return"Profiler";case Kp:return"StrictMode";case sf:return"Suspense";case lf:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case my:return(e.displayName||"Context")+".Consumer";case hy:return(e._context.displayName||"Context")+".Provider";case Qp:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Zp:return t=e.displayName||null,t!==null?t:uf(e.type)||"Memo";case ir:t=e._payload,e=e._init;try{return uf(e(t))}catch{}}return null}function ZC(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return uf(t);case 8:return t===Kp?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function _r(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function vy(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function JC(e){var t=vy(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(a){r=""+a,o.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ns(e){e._valueTracker||(e._valueTracker=JC(e))}function yy(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=vy(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function ll(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function cf(e,t){var n=t.checked;return ke({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function dg(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=_r(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function xy(e,t){t=t.checked,t!=null&&Xp(e,"checked",t,!1)}function df(e,t){xy(e,t);var n=_r(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ff(e,t.type,n):t.hasOwnProperty("defaultValue")&&ff(e,t.type,_r(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function fg(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function ff(e,t,n){(t!=="number"||ll(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var No=Array.isArray;function Ii(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+_r(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function pf(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(V(91));return ke({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function pg(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(V(92));if(No(n)){if(1<n.length)throw Error(V(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:_r(n)}}function by(e,t){var n=_r(t.value),r=_r(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function hg(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function wy(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function hf(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?wy(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var rs,Sy=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(rs=rs||document.createElement("div"),rs.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=rs.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function ua(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Yo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},eE=["Webkit","ms","Moz","O"];Object.keys(Yo).forEach(function(e){eE.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Yo[t]=Yo[e]})});function _y(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Yo.hasOwnProperty(e)&&Yo[e]?(""+t).trim():t+"px"}function Cy(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=_y(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var tE=ke({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function mf(e,t){if(t){if(tE[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(V(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(V(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(V(61))}if(t.style!=null&&typeof t.style!="object")throw Error(V(62))}}function gf(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var vf=null;function Jp(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var yf=null,Di=null,Li=null;function mg(e){if(e=za(e)){if(typeof yf!="function")throw Error(V(280));var t=e.stateNode;t&&(t=du(t),yf(e.stateNode,e.type,t))}}function Ey(e){Di?Li?Li.push(e):Li=[e]:Di=e}function ky(){if(Di){var e=Di,t=Li;if(Li=Di=null,mg(e),t)for(e=0;e<t.length;e++)mg(t[e])}}function Ty(e,t){return e(t)}function Py(){}var Mc=!1;function Oy(e,t,n){if(Mc)return e(t,n);Mc=!0;try{return Ty(e,t,n)}finally{Mc=!1,(Di!==null||Li!==null)&&(Py(),ky())}}function ca(e,t){var n=e.stateNode;if(n===null)return null;var r=du(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(V(231,t,typeof n));return n}var xf=!1;if(Hn)try{var Eo={};Object.defineProperty(Eo,"passive",{get:function(){xf=!0}}),window.addEventListener("test",Eo,Eo),window.removeEventListener("test",Eo,Eo)}catch{xf=!1}function nE(e,t,n,r,i,o,a,l,s){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(d){this.onError(d)}}var Xo=!1,ul=null,cl=!1,bf=null,rE={onError:function(e){Xo=!0,ul=e}};function iE(e,t,n,r,i,o,a,l,s){Xo=!1,ul=null,nE.apply(rE,arguments)}function oE(e,t,n,r,i,o,a,l,s){if(iE.apply(this,arguments),Xo){if(Xo){var u=ul;Xo=!1,ul=null}else throw Error(V(198));cl||(cl=!0,bf=u)}}function oi(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function jy(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function gg(e){if(oi(e)!==e)throw Error(V(188))}function aE(e){var t=e.alternate;if(!t){if(t=oi(e),t===null)throw Error(V(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return gg(i),e;if(o===r)return gg(i),t;o=o.sibling}throw Error(V(188))}if(n.return!==r.return)n=i,r=o;else{for(var a=!1,l=i.child;l;){if(l===n){a=!0,n=i,r=o;break}if(l===r){a=!0,r=i,n=o;break}l=l.sibling}if(!a){for(l=o.child;l;){if(l===n){a=!0,n=o,r=i;break}if(l===r){a=!0,r=o,n=i;break}l=l.sibling}if(!a)throw Error(V(189))}}if(n.alternate!==r)throw Error(V(190))}if(n.tag!==3)throw Error(V(188));return n.stateNode.current===n?e:t}function My(e){return e=aE(e),e!==null?$y(e):null}function $y(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=$y(e);if(t!==null)return t;e=e.sibling}return null}var Iy=At.unstable_scheduleCallback,vg=At.unstable_cancelCallback,sE=At.unstable_shouldYield,lE=At.unstable_requestPaint,je=At.unstable_now,uE=At.unstable_getCurrentPriorityLevel,eh=At.unstable_ImmediatePriority,Dy=At.unstable_UserBlockingPriority,dl=At.unstable_NormalPriority,cE=At.unstable_LowPriority,Ly=At.unstable_IdlePriority,su=null,_n=null;function dE(e){if(_n&&typeof _n.onCommitFiberRoot=="function")try{_n.onCommitFiberRoot(su,e,void 0,(e.current.flags&128)===128)}catch{}}var sn=Math.clz32?Math.clz32:hE,fE=Math.log,pE=Math.LN2;function hE(e){return e>>>=0,e===0?32:31-(fE(e)/pE|0)|0}var is=64,os=4194304;function Bo(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function fl(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,a=n&268435455;if(a!==0){var l=a&~i;l!==0?r=Bo(l):(o&=a,o!==0&&(r=Bo(o)))}else a=n&~i,a!==0?r=Bo(a):o!==0&&(r=Bo(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-sn(t),i=1<<n,r|=e[n],t&=~i;return r}function mE(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function gE(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var a=31-sn(o),l=1<<a,s=i[a];s===-1?(!(l&n)||l&r)&&(i[a]=mE(l,t)):s<=t&&(e.expiredLanes|=l),o&=~l}}function wf(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Ay(){var e=is;return is<<=1,!(is&4194240)&&(is=64),e}function $c(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ra(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-sn(t),e[t]=n}function vE(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-sn(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function th(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-sn(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var he=0;function Ry(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Fy,nh,zy,Ny,By,Sf=!1,as=[],hr=null,mr=null,gr=null,da=new Map,fa=new Map,ar=[],yE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function yg(e,t){switch(e){case"focusin":case"focusout":hr=null;break;case"dragenter":case"dragleave":mr=null;break;case"mouseover":case"mouseout":gr=null;break;case"pointerover":case"pointerout":da.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":fa.delete(t.pointerId)}}function ko(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=za(t),t!==null&&nh(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function xE(e,t,n,r,i){switch(t){case"focusin":return hr=ko(hr,e,t,n,r,i),!0;case"dragenter":return mr=ko(mr,e,t,n,r,i),!0;case"mouseover":return gr=ko(gr,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return da.set(o,ko(da.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,fa.set(o,ko(fa.get(o)||null,e,t,n,r,i)),!0}return!1}function Vy(e){var t=Nr(e.target);if(t!==null){var n=oi(t);if(n!==null){if(t=n.tag,t===13){if(t=jy(n),t!==null){e.blockedOn=t,By(e.priority,function(){zy(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Is(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=_f(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);vf=r,n.target.dispatchEvent(r),vf=null}else return t=za(n),t!==null&&nh(t),e.blockedOn=n,!1;t.shift()}return!0}function xg(e,t,n){Is(e)&&n.delete(t)}function bE(){Sf=!1,hr!==null&&Is(hr)&&(hr=null),mr!==null&&Is(mr)&&(mr=null),gr!==null&&Is(gr)&&(gr=null),da.forEach(xg),fa.forEach(xg)}function To(e,t){e.blockedOn===t&&(e.blockedOn=null,Sf||(Sf=!0,At.unstable_scheduleCallback(At.unstable_NormalPriority,bE)))}function pa(e){function t(i){return To(i,e)}if(0<as.length){To(as[0],e);for(var n=1;n<as.length;n++){var r=as[n];r.blockedOn===e&&(r.blockedOn=null)}}for(hr!==null&&To(hr,e),mr!==null&&To(mr,e),gr!==null&&To(gr,e),da.forEach(t),fa.forEach(t),n=0;n<ar.length;n++)r=ar[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<ar.length&&(n=ar[0],n.blockedOn===null);)Vy(n),n.blockedOn===null&&ar.shift()}var Ai=Qn.ReactCurrentBatchConfig,pl=!0;function wE(e,t,n,r){var i=he,o=Ai.transition;Ai.transition=null;try{he=1,rh(e,t,n,r)}finally{he=i,Ai.transition=o}}function SE(e,t,n,r){var i=he,o=Ai.transition;Ai.transition=null;try{he=4,rh(e,t,n,r)}finally{he=i,Ai.transition=o}}function rh(e,t,n,r){if(pl){var i=_f(e,t,n,r);if(i===null)Vc(e,t,r,hl,n),yg(e,r);else if(xE(i,e,t,n,r))r.stopPropagation();else if(yg(e,r),t&4&&-1<yE.indexOf(e)){for(;i!==null;){var o=za(i);if(o!==null&&Fy(o),o=_f(e,t,n,r),o===null&&Vc(e,t,r,hl,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else Vc(e,t,r,null,n)}}var hl=null;function _f(e,t,n,r){if(hl=null,e=Jp(r),e=Nr(e),e!==null)if(t=oi(e),t===null)e=null;else if(n=t.tag,n===13){if(e=jy(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return hl=e,null}function Uy(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(uE()){case eh:return 1;case Dy:return 4;case dl:case cE:return 16;case Ly:return 536870912;default:return 16}default:return 16}}var ur=null,ih=null,Ds=null;function Hy(){if(Ds)return Ds;var e,t=ih,n=t.length,r,i="value"in ur?ur.value:ur.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===i[o-r];r++);return Ds=i.slice(e,1<r?1-r:void 0)}function Ls(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ss(){return!0}function bg(){return!1}function zt(e){function t(n,r,i,o,a){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=a,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(o):o[l]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?ss:bg,this.isPropagationStopped=bg,this}return ke(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ss)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ss)},persist:function(){},isPersistent:ss}),t}var lo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},oh=zt(lo),Fa=ke({},lo,{view:0,detail:0}),_E=zt(Fa),Ic,Dc,Po,lu=ke({},Fa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ah,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Po&&(Po&&e.type==="mousemove"?(Ic=e.screenX-Po.screenX,Dc=e.screenY-Po.screenY):Dc=Ic=0,Po=e),Ic)},movementY:function(e){return"movementY"in e?e.movementY:Dc}}),wg=zt(lu),CE=ke({},lu,{dataTransfer:0}),EE=zt(CE),kE=ke({},Fa,{relatedTarget:0}),Lc=zt(kE),TE=ke({},lo,{animationName:0,elapsedTime:0,pseudoElement:0}),PE=zt(TE),OE=ke({},lo,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),jE=zt(OE),ME=ke({},lo,{data:0}),Sg=zt(ME),$E={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},IE={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},DE={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function LE(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=DE[e])?!!t[e]:!1}function ah(){return LE}var AE=ke({},Fa,{key:function(e){if(e.key){var t=$E[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ls(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?IE[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ah,charCode:function(e){return e.type==="keypress"?Ls(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ls(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),RE=zt(AE),FE=ke({},lu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),_g=zt(FE),zE=ke({},Fa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ah}),NE=zt(zE),BE=ke({},lo,{propertyName:0,elapsedTime:0,pseudoElement:0}),VE=zt(BE),UE=ke({},lu,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),HE=zt(UE),WE=[9,13,27,32],sh=Hn&&"CompositionEvent"in window,Ko=null;Hn&&"documentMode"in document&&(Ko=document.documentMode);var GE=Hn&&"TextEvent"in window&&!Ko,Wy=Hn&&(!sh||Ko&&8<Ko&&11>=Ko),Cg=String.fromCharCode(32),Eg=!1;function Gy(e,t){switch(e){case"keyup":return WE.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function qy(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var _i=!1;function qE(e,t){switch(e){case"compositionend":return qy(t);case"keypress":return t.which!==32?null:(Eg=!0,Cg);case"textInput":return e=t.data,e===Cg&&Eg?null:e;default:return null}}function YE(e,t){if(_i)return e==="compositionend"||!sh&&Gy(e,t)?(e=Hy(),Ds=ih=ur=null,_i=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Wy&&t.locale!=="ko"?null:t.data;default:return null}}var XE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function kg(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!XE[e.type]:t==="textarea"}function Yy(e,t,n,r){Ey(r),t=ml(t,"onChange"),0<t.length&&(n=new oh("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Qo=null,ha=null;function KE(e){ox(e,0)}function uu(e){var t=ki(e);if(yy(t))return e}function QE(e,t){if(e==="change")return t}var Xy=!1;if(Hn){var Ac;if(Hn){var Rc="oninput"in document;if(!Rc){var Tg=document.createElement("div");Tg.setAttribute("oninput","return;"),Rc=typeof Tg.oninput=="function"}Ac=Rc}else Ac=!1;Xy=Ac&&(!document.documentMode||9<document.documentMode)}function Pg(){Qo&&(Qo.detachEvent("onpropertychange",Ky),ha=Qo=null)}function Ky(e){if(e.propertyName==="value"&&uu(ha)){var t=[];Yy(t,ha,e,Jp(e)),Oy(KE,t)}}function ZE(e,t,n){e==="focusin"?(Pg(),Qo=t,ha=n,Qo.attachEvent("onpropertychange",Ky)):e==="focusout"&&Pg()}function JE(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return uu(ha)}function ek(e,t){if(e==="click")return uu(t)}function tk(e,t){if(e==="input"||e==="change")return uu(t)}function nk(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var fn=typeof Object.is=="function"?Object.is:nk;function ma(e,t){if(fn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!of.call(t,i)||!fn(e[i],t[i]))return!1}return!0}function Og(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function jg(e,t){var n=Og(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Og(n)}}function Qy(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Qy(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Zy(){for(var e=window,t=ll();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=ll(e.document)}return t}function lh(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function rk(e){var t=Zy(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Qy(n.ownerDocument.documentElement,n)){if(r!==null&&lh(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=jg(n,o);var a=jg(n,r);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var ik=Hn&&"documentMode"in document&&11>=document.documentMode,Ci=null,Cf=null,Zo=null,Ef=!1;function Mg(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ef||Ci==null||Ci!==ll(r)||(r=Ci,"selectionStart"in r&&lh(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Zo&&ma(Zo,r)||(Zo=r,r=ml(Cf,"onSelect"),0<r.length&&(t=new oh("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Ci)))}function ls(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Ei={animationend:ls("Animation","AnimationEnd"),animationiteration:ls("Animation","AnimationIteration"),animationstart:ls("Animation","AnimationStart"),transitionend:ls("Transition","TransitionEnd")},Fc={},Jy={};Hn&&(Jy=document.createElement("div").style,"AnimationEvent"in window||(delete Ei.animationend.animation,delete Ei.animationiteration.animation,delete Ei.animationstart.animation),"TransitionEvent"in window||delete Ei.transitionend.transition);function cu(e){if(Fc[e])return Fc[e];if(!Ei[e])return e;var t=Ei[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Jy)return Fc[e]=t[n];return e}var ex=cu("animationend"),tx=cu("animationiteration"),nx=cu("animationstart"),rx=cu("transitionend"),ix=new Map,$g="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function kr(e,t){ix.set(e,t),ii(t,[e])}for(var zc=0;zc<$g.length;zc++){var Nc=$g[zc],ok=Nc.toLowerCase(),ak=Nc[0].toUpperCase()+Nc.slice(1);kr(ok,"on"+ak)}kr(ex,"onAnimationEnd");kr(tx,"onAnimationIteration");kr(nx,"onAnimationStart");kr("dblclick","onDoubleClick");kr("focusin","onFocus");kr("focusout","onBlur");kr(rx,"onTransitionEnd");Vi("onMouseEnter",["mouseout","mouseover"]);Vi("onMouseLeave",["mouseout","mouseover"]);Vi("onPointerEnter",["pointerout","pointerover"]);Vi("onPointerLeave",["pointerout","pointerover"]);ii("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ii("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ii("onBeforeInput",["compositionend","keypress","textInput","paste"]);ii("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ii("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ii("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Vo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),sk=new Set("cancel close invalid load scroll toggle".split(" ").concat(Vo));function Ig(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,oE(r,t,void 0,e),e.currentTarget=null}function ox(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var a=r.length-1;0<=a;a--){var l=r[a],s=l.instance,u=l.currentTarget;if(l=l.listener,s!==o&&i.isPropagationStopped())break e;Ig(i,l,u),o=s}else for(a=0;a<r.length;a++){if(l=r[a],s=l.instance,u=l.currentTarget,l=l.listener,s!==o&&i.isPropagationStopped())break e;Ig(i,l,u),o=s}}}if(cl)throw e=bf,cl=!1,bf=null,e}function ve(e,t){var n=t[jf];n===void 0&&(n=t[jf]=new Set);var r=e+"__bubble";n.has(r)||(ax(t,e,2,!1),n.add(r))}function Bc(e,t,n){var r=0;t&&(r|=4),ax(n,e,r,t)}var us="_reactListening"+Math.random().toString(36).slice(2);function ga(e){if(!e[us]){e[us]=!0,py.forEach(function(n){n!=="selectionchange"&&(sk.has(n)||Bc(n,!1,e),Bc(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[us]||(t[us]=!0,Bc("selectionchange",!1,t))}}function ax(e,t,n,r){switch(Uy(t)){case 1:var i=wE;break;case 4:i=SE;break;default:i=rh}n=i.bind(null,t,n,e),i=void 0,!xf||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Vc(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(a===4)for(a=r.return;a!==null;){var s=a.tag;if((s===3||s===4)&&(s=a.stateNode.containerInfo,s===i||s.nodeType===8&&s.parentNode===i))return;a=a.return}for(;l!==null;){if(a=Nr(l),a===null)return;if(s=a.tag,s===5||s===6){r=o=a;continue e}l=l.parentNode}}r=r.return}Oy(function(){var u=o,d=Jp(n),c=[];e:{var y=ix.get(e);if(y!==void 0){var p=oh,m=e;switch(e){case"keypress":if(Ls(n)===0)break e;case"keydown":case"keyup":p=RE;break;case"focusin":m="focus",p=Lc;break;case"focusout":m="blur",p=Lc;break;case"beforeblur":case"afterblur":p=Lc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=wg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=EE;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=NE;break;case ex:case tx:case nx:p=PE;break;case rx:p=VE;break;case"scroll":p=_E;break;case"wheel":p=HE;break;case"copy":case"cut":case"paste":p=jE;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=_g}var v=(t&4)!==0,w=!v&&e==="scroll",h=v?y!==null?y+"Capture":null:y;v=[];for(var g=u,x;g!==null;){x=g;var S=x.stateNode;if(x.tag===5&&S!==null&&(x=S,h!==null&&(S=ca(g,h),S!=null&&v.push(va(g,S,x)))),w)break;g=g.return}0<v.length&&(y=new p(y,m,null,n,d),c.push({event:y,listeners:v}))}}if(!(t&7)){e:{if(y=e==="mouseover"||e==="pointerover",p=e==="mouseout"||e==="pointerout",y&&n!==vf&&(m=n.relatedTarget||n.fromElement)&&(Nr(m)||m[Wn]))break e;if((p||y)&&(y=d.window===d?d:(y=d.ownerDocument)?y.defaultView||y.parentWindow:window,p?(m=n.relatedTarget||n.toElement,p=u,m=m?Nr(m):null,m!==null&&(w=oi(m),m!==w||m.tag!==5&&m.tag!==6)&&(m=null)):(p=null,m=u),p!==m)){if(v=wg,S="onMouseLeave",h="onMouseEnter",g="mouse",(e==="pointerout"||e==="pointerover")&&(v=_g,S="onPointerLeave",h="onPointerEnter",g="pointer"),w=p==null?y:ki(p),x=m==null?y:ki(m),y=new v(S,g+"leave",p,n,d),y.target=w,y.relatedTarget=x,S=null,Nr(d)===u&&(v=new v(h,g+"enter",m,n,d),v.target=x,v.relatedTarget=w,S=v),w=S,p&&m)t:{for(v=p,h=m,g=0,x=v;x;x=li(x))g++;for(x=0,S=h;S;S=li(S))x++;for(;0<g-x;)v=li(v),g--;for(;0<x-g;)h=li(h),x--;for(;g--;){if(v===h||h!==null&&v===h.alternate)break t;v=li(v),h=li(h)}v=null}else v=null;p!==null&&Dg(c,y,p,v,!1),m!==null&&w!==null&&Dg(c,w,m,v,!0)}}e:{if(y=u?ki(u):window,p=y.nodeName&&y.nodeName.toLowerCase(),p==="select"||p==="input"&&y.type==="file")var T=QE;else if(kg(y))if(Xy)T=tk;else{T=JE;var k=ZE}else(p=y.nodeName)&&p.toLowerCase()==="input"&&(y.type==="checkbox"||y.type==="radio")&&(T=ek);if(T&&(T=T(e,u))){Yy(c,T,n,d);break e}k&&k(e,y,u),e==="focusout"&&(k=y._wrapperState)&&k.controlled&&y.type==="number"&&ff(y,"number",y.value)}switch(k=u?ki(u):window,e){case"focusin":(kg(k)||k.contentEditable==="true")&&(Ci=k,Cf=u,Zo=null);break;case"focusout":Zo=Cf=Ci=null;break;case"mousedown":Ef=!0;break;case"contextmenu":case"mouseup":case"dragend":Ef=!1,Mg(c,n,d);break;case"selectionchange":if(ik)break;case"keydown":case"keyup":Mg(c,n,d)}var C;if(sh)e:{switch(e){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else _i?Gy(e,n)&&(_="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(_="onCompositionStart");_&&(Wy&&n.locale!=="ko"&&(_i||_!=="onCompositionStart"?_==="onCompositionEnd"&&_i&&(C=Hy()):(ur=d,ih="value"in ur?ur.value:ur.textContent,_i=!0)),k=ml(u,_),0<k.length&&(_=new Sg(_,e,null,n,d),c.push({event:_,listeners:k}),C?_.data=C:(C=qy(n),C!==null&&(_.data=C)))),(C=GE?qE(e,n):YE(e,n))&&(u=ml(u,"onBeforeInput"),0<u.length&&(d=new Sg("onBeforeInput","beforeinput",null,n,d),c.push({event:d,listeners:u}),d.data=C))}ox(c,t)})}function va(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ml(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=ca(e,n),o!=null&&r.unshift(va(e,o,i)),o=ca(e,t),o!=null&&r.push(va(e,o,i))),e=e.return}return r}function li(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Dg(e,t,n,r,i){for(var o=t._reactName,a=[];n!==null&&n!==r;){var l=n,s=l.alternate,u=l.stateNode;if(s!==null&&s===r)break;l.tag===5&&u!==null&&(l=u,i?(s=ca(n,o),s!=null&&a.unshift(va(n,s,l))):i||(s=ca(n,o),s!=null&&a.push(va(n,s,l)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var lk=/\r\n?/g,uk=/\u0000|\uFFFD/g;function Lg(e){return(typeof e=="string"?e:""+e).replace(lk,`
`).replace(uk,"")}function cs(e,t,n){if(t=Lg(t),Lg(e)!==t&&n)throw Error(V(425))}function gl(){}var kf=null,Tf=null;function Pf(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Of=typeof setTimeout=="function"?setTimeout:void 0,ck=typeof clearTimeout=="function"?clearTimeout:void 0,Ag=typeof Promise=="function"?Promise:void 0,dk=typeof queueMicrotask=="function"?queueMicrotask:typeof Ag<"u"?function(e){return Ag.resolve(null).then(e).catch(fk)}:Of;function fk(e){setTimeout(function(){throw e})}function Uc(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),pa(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);pa(t)}function vr(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Rg(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var uo=Math.random().toString(36).slice(2),wn="__reactFiber$"+uo,ya="__reactProps$"+uo,Wn="__reactContainer$"+uo,jf="__reactEvents$"+uo,pk="__reactListeners$"+uo,hk="__reactHandles$"+uo;function Nr(e){var t=e[wn];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Wn]||n[wn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Rg(e);e!==null;){if(n=e[wn])return n;e=Rg(e)}return t}e=n,n=e.parentNode}return null}function za(e){return e=e[wn]||e[Wn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function ki(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(V(33))}function du(e){return e[ya]||null}var Mf=[],Ti=-1;function Tr(e){return{current:e}}function xe(e){0>Ti||(e.current=Mf[Ti],Mf[Ti]=null,Ti--)}function ge(e,t){Ti++,Mf[Ti]=e.current,e.current=t}var Cr={},lt=Tr(Cr),_t=Tr(!1),qr=Cr;function Ui(e,t){var n=e.type.contextTypes;if(!n)return Cr;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Ct(e){return e=e.childContextTypes,e!=null}function vl(){xe(_t),xe(lt)}function Fg(e,t,n){if(lt.current!==Cr)throw Error(V(168));ge(lt,t),ge(_t,n)}function sx(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(V(108,ZC(e)||"Unknown",i));return ke({},n,r)}function yl(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Cr,qr=lt.current,ge(lt,e),ge(_t,_t.current),!0}function zg(e,t,n){var r=e.stateNode;if(!r)throw Error(V(169));n?(e=sx(e,t,qr),r.__reactInternalMemoizedMergedChildContext=e,xe(_t),xe(lt),ge(lt,e)):xe(_t),ge(_t,n)}var An=null,fu=!1,Hc=!1;function lx(e){An===null?An=[e]:An.push(e)}function mk(e){fu=!0,lx(e)}function Pr(){if(!Hc&&An!==null){Hc=!0;var e=0,t=he;try{var n=An;for(he=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}An=null,fu=!1}catch(i){throw An!==null&&(An=An.slice(e+1)),Iy(eh,Pr),i}finally{he=t,Hc=!1}}return null}var Pi=[],Oi=0,xl=null,bl=0,Ut=[],Ht=0,Yr=null,zn=1,Nn="";function Dr(e,t){Pi[Oi++]=bl,Pi[Oi++]=xl,xl=e,bl=t}function ux(e,t,n){Ut[Ht++]=zn,Ut[Ht++]=Nn,Ut[Ht++]=Yr,Yr=e;var r=zn;e=Nn;var i=32-sn(r)-1;r&=~(1<<i),n+=1;var o=32-sn(t)+i;if(30<o){var a=i-i%5;o=(r&(1<<a)-1).toString(32),r>>=a,i-=a,zn=1<<32-sn(t)+i|n<<i|r,Nn=o+e}else zn=1<<o|n<<i|r,Nn=e}function uh(e){e.return!==null&&(Dr(e,1),ux(e,1,0))}function ch(e){for(;e===xl;)xl=Pi[--Oi],Pi[Oi]=null,bl=Pi[--Oi],Pi[Oi]=null;for(;e===Yr;)Yr=Ut[--Ht],Ut[Ht]=null,Nn=Ut[--Ht],Ut[Ht]=null,zn=Ut[--Ht],Ut[Ht]=null}var Dt=null,$t=null,_e=!1,on=null;function cx(e,t){var n=Wt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Ng(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Dt=e,$t=vr(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Dt=e,$t=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Yr!==null?{id:zn,overflow:Nn}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Wt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Dt=e,$t=null,!0):!1;default:return!1}}function $f(e){return(e.mode&1)!==0&&(e.flags&128)===0}function If(e){if(_e){var t=$t;if(t){var n=t;if(!Ng(e,t)){if($f(e))throw Error(V(418));t=vr(n.nextSibling);var r=Dt;t&&Ng(e,t)?cx(r,n):(e.flags=e.flags&-4097|2,_e=!1,Dt=e)}}else{if($f(e))throw Error(V(418));e.flags=e.flags&-4097|2,_e=!1,Dt=e}}}function Bg(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Dt=e}function ds(e){if(e!==Dt)return!1;if(!_e)return Bg(e),_e=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Pf(e.type,e.memoizedProps)),t&&(t=$t)){if($f(e))throw dx(),Error(V(418));for(;t;)cx(e,t),t=vr(t.nextSibling)}if(Bg(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(V(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){$t=vr(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}$t=null}}else $t=Dt?vr(e.stateNode.nextSibling):null;return!0}function dx(){for(var e=$t;e;)e=vr(e.nextSibling)}function Hi(){$t=Dt=null,_e=!1}function dh(e){on===null?on=[e]:on.push(e)}var gk=Qn.ReactCurrentBatchConfig;function tn(e,t){if(e&&e.defaultProps){t=ke({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var wl=Tr(null),Sl=null,ji=null,fh=null;function ph(){fh=ji=Sl=null}function hh(e){var t=wl.current;xe(wl),e._currentValue=t}function Df(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Ri(e,t){Sl=e,fh=ji=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(St=!0),e.firstContext=null)}function qt(e){var t=e._currentValue;if(fh!==e)if(e={context:e,memoizedValue:t,next:null},ji===null){if(Sl===null)throw Error(V(308));ji=e,Sl.dependencies={lanes:0,firstContext:e}}else ji=ji.next=e;return t}var Br=null;function mh(e){Br===null?Br=[e]:Br.push(e)}function fx(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,mh(t)):(n.next=i.next,i.next=n),t.interleaved=n,Gn(e,r)}function Gn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var or=!1;function gh(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function px(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Bn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function yr(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,se&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Gn(e,n)}return i=r.interleaved,i===null?(t.next=t,mh(r)):(t.next=i.next,i.next=t),r.interleaved=t,Gn(e,n)}function As(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,th(e,n)}}function Vg(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=a:o=o.next=a,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function _l(e,t,n,r){var i=e.updateQueue;or=!1;var o=i.firstBaseUpdate,a=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var s=l,u=s.next;s.next=null,a===null?o=u:a.next=u,a=s;var d=e.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==a&&(l===null?d.firstBaseUpdate=u:l.next=u,d.lastBaseUpdate=s))}if(o!==null){var c=i.baseState;a=0,d=u=s=null,l=o;do{var y=l.lane,p=l.eventTime;if((r&y)===y){d!==null&&(d=d.next={eventTime:p,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var m=e,v=l;switch(y=t,p=n,v.tag){case 1:if(m=v.payload,typeof m=="function"){c=m.call(p,c,y);break e}c=m;break e;case 3:m.flags=m.flags&-65537|128;case 0:if(m=v.payload,y=typeof m=="function"?m.call(p,c,y):m,y==null)break e;c=ke({},c,y);break e;case 2:or=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,y=i.effects,y===null?i.effects=[l]:y.push(l))}else p={eventTime:p,lane:y,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(u=d=p,s=c):d=d.next=p,a|=y;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;y=l,l=y.next,y.next=null,i.lastBaseUpdate=y,i.shared.pending=null}}while(1);if(d===null&&(s=c),i.baseState=s,i.firstBaseUpdate=u,i.lastBaseUpdate=d,t=i.shared.interleaved,t!==null){i=t;do a|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);Kr|=a,e.lanes=a,e.memoizedState=c}}function Ug(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(V(191,i));i.call(r)}}}var hx=new fy.Component().refs;function Lf(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ke({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var pu={isMounted:function(e){return(e=e._reactInternals)?oi(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=pt(),i=br(e),o=Bn(r,i);o.payload=t,n!=null&&(o.callback=n),t=yr(e,o,i),t!==null&&(ln(t,e,i,r),As(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=pt(),i=br(e),o=Bn(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=yr(e,o,i),t!==null&&(ln(t,e,i,r),As(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=pt(),r=br(e),i=Bn(n,r);i.tag=2,t!=null&&(i.callback=t),t=yr(e,i,r),t!==null&&(ln(t,e,r,n),As(t,e,r))}};function Hg(e,t,n,r,i,o,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,a):t.prototype&&t.prototype.isPureReactComponent?!ma(n,r)||!ma(i,o):!0}function mx(e,t,n){var r=!1,i=Cr,o=t.contextType;return typeof o=="object"&&o!==null?o=qt(o):(i=Ct(t)?qr:lt.current,r=t.contextTypes,o=(r=r!=null)?Ui(e,i):Cr),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=pu,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Wg(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&pu.enqueueReplaceState(t,t.state,null)}function Af(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=hx,gh(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=qt(o):(o=Ct(t)?qr:lt.current,i.context=Ui(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Lf(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&pu.enqueueReplaceState(i,i.state,null),_l(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Oo(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(V(309));var r=n.stateNode}if(!r)throw Error(V(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(a){var l=i.refs;l===hx&&(l=i.refs={}),a===null?delete l[o]:l[o]=a},t._stringRef=o,t)}if(typeof e!="string")throw Error(V(284));if(!n._owner)throw Error(V(290,e))}return e}function fs(e,t){throw e=Object.prototype.toString.call(t),Error(V(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Gg(e){var t=e._init;return t(e._payload)}function gx(e){function t(h,g){if(e){var x=h.deletions;x===null?(h.deletions=[g],h.flags|=16):x.push(g)}}function n(h,g){if(!e)return null;for(;g!==null;)t(h,g),g=g.sibling;return null}function r(h,g){for(h=new Map;g!==null;)g.key!==null?h.set(g.key,g):h.set(g.index,g),g=g.sibling;return h}function i(h,g){return h=wr(h,g),h.index=0,h.sibling=null,h}function o(h,g,x){return h.index=x,e?(x=h.alternate,x!==null?(x=x.index,x<g?(h.flags|=2,g):x):(h.flags|=2,g)):(h.flags|=1048576,g)}function a(h){return e&&h.alternate===null&&(h.flags|=2),h}function l(h,g,x,S){return g===null||g.tag!==6?(g=Qc(x,h.mode,S),g.return=h,g):(g=i(g,x),g.return=h,g)}function s(h,g,x,S){var T=x.type;return T===Si?d(h,g,x.props.children,S,x.key):g!==null&&(g.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===ir&&Gg(T)===g.type)?(S=i(g,x.props),S.ref=Oo(h,g,x),S.return=h,S):(S=Vs(x.type,x.key,x.props,null,h.mode,S),S.ref=Oo(h,g,x),S.return=h,S)}function u(h,g,x,S){return g===null||g.tag!==4||g.stateNode.containerInfo!==x.containerInfo||g.stateNode.implementation!==x.implementation?(g=Zc(x,h.mode,S),g.return=h,g):(g=i(g,x.children||[]),g.return=h,g)}function d(h,g,x,S,T){return g===null||g.tag!==7?(g=Wr(x,h.mode,S,T),g.return=h,g):(g=i(g,x),g.return=h,g)}function c(h,g,x){if(typeof g=="string"&&g!==""||typeof g=="number")return g=Qc(""+g,h.mode,x),g.return=h,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case ts:return x=Vs(g.type,g.key,g.props,null,h.mode,x),x.ref=Oo(h,null,g),x.return=h,x;case wi:return g=Zc(g,h.mode,x),g.return=h,g;case ir:var S=g._init;return c(h,S(g._payload),x)}if(No(g)||Co(g))return g=Wr(g,h.mode,x,null),g.return=h,g;fs(h,g)}return null}function y(h,g,x,S){var T=g!==null?g.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return T!==null?null:l(h,g,""+x,S);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case ts:return x.key===T?s(h,g,x,S):null;case wi:return x.key===T?u(h,g,x,S):null;case ir:return T=x._init,y(h,g,T(x._payload),S)}if(No(x)||Co(x))return T!==null?null:d(h,g,x,S,null);fs(h,x)}return null}function p(h,g,x,S,T){if(typeof S=="string"&&S!==""||typeof S=="number")return h=h.get(x)||null,l(g,h,""+S,T);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case ts:return h=h.get(S.key===null?x:S.key)||null,s(g,h,S,T);case wi:return h=h.get(S.key===null?x:S.key)||null,u(g,h,S,T);case ir:var k=S._init;return p(h,g,x,k(S._payload),T)}if(No(S)||Co(S))return h=h.get(x)||null,d(g,h,S,T,null);fs(g,S)}return null}function m(h,g,x,S){for(var T=null,k=null,C=g,_=g=0,$=null;C!==null&&_<x.length;_++){C.index>_?($=C,C=null):$=C.sibling;var M=y(h,C,x[_],S);if(M===null){C===null&&(C=$);break}e&&C&&M.alternate===null&&t(h,C),g=o(M,g,_),k===null?T=M:k.sibling=M,k=M,C=$}if(_===x.length)return n(h,C),_e&&Dr(h,_),T;if(C===null){for(;_<x.length;_++)C=c(h,x[_],S),C!==null&&(g=o(C,g,_),k===null?T=C:k.sibling=C,k=C);return _e&&Dr(h,_),T}for(C=r(h,C);_<x.length;_++)$=p(C,h,_,x[_],S),$!==null&&(e&&$.alternate!==null&&C.delete($.key===null?_:$.key),g=o($,g,_),k===null?T=$:k.sibling=$,k=$);return e&&C.forEach(function(R){return t(h,R)}),_e&&Dr(h,_),T}function v(h,g,x,S){var T=Co(x);if(typeof T!="function")throw Error(V(150));if(x=T.call(x),x==null)throw Error(V(151));for(var k=T=null,C=g,_=g=0,$=null,M=x.next();C!==null&&!M.done;_++,M=x.next()){C.index>_?($=C,C=null):$=C.sibling;var R=y(h,C,M.value,S);if(R===null){C===null&&(C=$);break}e&&C&&R.alternate===null&&t(h,C),g=o(R,g,_),k===null?T=R:k.sibling=R,k=R,C=$}if(M.done)return n(h,C),_e&&Dr(h,_),T;if(C===null){for(;!M.done;_++,M=x.next())M=c(h,M.value,S),M!==null&&(g=o(M,g,_),k===null?T=M:k.sibling=M,k=M);return _e&&Dr(h,_),T}for(C=r(h,C);!M.done;_++,M=x.next())M=p(C,h,_,M.value,S),M!==null&&(e&&M.alternate!==null&&C.delete(M.key===null?_:M.key),g=o(M,g,_),k===null?T=M:k.sibling=M,k=M);return e&&C.forEach(function(L){return t(h,L)}),_e&&Dr(h,_),T}function w(h,g,x,S){if(typeof x=="object"&&x!==null&&x.type===Si&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case ts:e:{for(var T=x.key,k=g;k!==null;){if(k.key===T){if(T=x.type,T===Si){if(k.tag===7){n(h,k.sibling),g=i(k,x.props.children),g.return=h,h=g;break e}}else if(k.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===ir&&Gg(T)===k.type){n(h,k.sibling),g=i(k,x.props),g.ref=Oo(h,k,x),g.return=h,h=g;break e}n(h,k);break}else t(h,k);k=k.sibling}x.type===Si?(g=Wr(x.props.children,h.mode,S,x.key),g.return=h,h=g):(S=Vs(x.type,x.key,x.props,null,h.mode,S),S.ref=Oo(h,g,x),S.return=h,h=S)}return a(h);case wi:e:{for(k=x.key;g!==null;){if(g.key===k)if(g.tag===4&&g.stateNode.containerInfo===x.containerInfo&&g.stateNode.implementation===x.implementation){n(h,g.sibling),g=i(g,x.children||[]),g.return=h,h=g;break e}else{n(h,g);break}else t(h,g);g=g.sibling}g=Zc(x,h.mode,S),g.return=h,h=g}return a(h);case ir:return k=x._init,w(h,g,k(x._payload),S)}if(No(x))return m(h,g,x,S);if(Co(x))return v(h,g,x,S);fs(h,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,g!==null&&g.tag===6?(n(h,g.sibling),g=i(g,x),g.return=h,h=g):(n(h,g),g=Qc(x,h.mode,S),g.return=h,h=g),a(h)):n(h,g)}return w}var Wi=gx(!0),vx=gx(!1),Na={},Cn=Tr(Na),xa=Tr(Na),ba=Tr(Na);function Vr(e){if(e===Na)throw Error(V(174));return e}function vh(e,t){switch(ge(ba,t),ge(xa,e),ge(Cn,Na),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:hf(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=hf(t,e)}xe(Cn),ge(Cn,t)}function Gi(){xe(Cn),xe(xa),xe(ba)}function yx(e){Vr(ba.current);var t=Vr(Cn.current),n=hf(t,e.type);t!==n&&(ge(xa,e),ge(Cn,n))}function yh(e){xa.current===e&&(xe(Cn),xe(xa))}var Ce=Tr(0);function Cl(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Wc=[];function xh(){for(var e=0;e<Wc.length;e++)Wc[e]._workInProgressVersionPrimary=null;Wc.length=0}var Rs=Qn.ReactCurrentDispatcher,Gc=Qn.ReactCurrentBatchConfig,Xr=0,Ee=null,Fe=null,We=null,El=!1,Jo=!1,wa=0,vk=0;function Je(){throw Error(V(321))}function bh(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!fn(e[n],t[n]))return!1;return!0}function wh(e,t,n,r,i,o){if(Xr=o,Ee=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Rs.current=e===null||e.memoizedState===null?wk:Sk,e=n(r,i),Jo){o=0;do{if(Jo=!1,wa=0,25<=o)throw Error(V(301));o+=1,We=Fe=null,t.updateQueue=null,Rs.current=_k,e=n(r,i)}while(Jo)}if(Rs.current=kl,t=Fe!==null&&Fe.next!==null,Xr=0,We=Fe=Ee=null,El=!1,t)throw Error(V(300));return e}function Sh(){var e=wa!==0;return wa=0,e}function yn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return We===null?Ee.memoizedState=We=e:We=We.next=e,We}function Yt(){if(Fe===null){var e=Ee.alternate;e=e!==null?e.memoizedState:null}else e=Fe.next;var t=We===null?Ee.memoizedState:We.next;if(t!==null)We=t,Fe=e;else{if(e===null)throw Error(V(310));Fe=e,e={memoizedState:Fe.memoizedState,baseState:Fe.baseState,baseQueue:Fe.baseQueue,queue:Fe.queue,next:null},We===null?Ee.memoizedState=We=e:We=We.next=e}return We}function Sa(e,t){return typeof t=="function"?t(e):t}function qc(e){var t=Yt(),n=t.queue;if(n===null)throw Error(V(311));n.lastRenderedReducer=e;var r=Fe,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var a=i.next;i.next=o.next,o.next=a}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var l=a=null,s=null,u=o;do{var d=u.lane;if((Xr&d)===d)s!==null&&(s=s.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var c={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};s===null?(l=s=c,a=r):s=s.next=c,Ee.lanes|=d,Kr|=d}u=u.next}while(u!==null&&u!==o);s===null?a=r:s.next=l,fn(r,t.memoizedState)||(St=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,Ee.lanes|=o,Kr|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Yc(e){var t=Yt(),n=t.queue;if(n===null)throw Error(V(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var a=i=i.next;do o=e(o,a.action),a=a.next;while(a!==i);fn(o,t.memoizedState)||(St=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function xx(){}function bx(e,t){var n=Ee,r=Yt(),i=t(),o=!fn(r.memoizedState,i);if(o&&(r.memoizedState=i,St=!0),r=r.queue,_h(_x.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||We!==null&&We.memoizedState.tag&1){if(n.flags|=2048,_a(9,Sx.bind(null,n,r,i,t),void 0,null),Ge===null)throw Error(V(349));Xr&30||wx(n,t,i)}return i}function wx(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Ee.updateQueue,t===null?(t={lastEffect:null,stores:null},Ee.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Sx(e,t,n,r){t.value=n,t.getSnapshot=r,Cx(t)&&Ex(e)}function _x(e,t,n){return n(function(){Cx(t)&&Ex(e)})}function Cx(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!fn(e,n)}catch{return!0}}function Ex(e){var t=Gn(e,1);t!==null&&ln(t,e,1,-1)}function qg(e){var t=yn();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Sa,lastRenderedState:e},t.queue=e,e=e.dispatch=bk.bind(null,Ee,e),[t.memoizedState,e]}function _a(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Ee.updateQueue,t===null?(t={lastEffect:null,stores:null},Ee.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function kx(){return Yt().memoizedState}function Fs(e,t,n,r){var i=yn();Ee.flags|=e,i.memoizedState=_a(1|t,n,void 0,r===void 0?null:r)}function hu(e,t,n,r){var i=Yt();r=r===void 0?null:r;var o=void 0;if(Fe!==null){var a=Fe.memoizedState;if(o=a.destroy,r!==null&&bh(r,a.deps)){i.memoizedState=_a(t,n,o,r);return}}Ee.flags|=e,i.memoizedState=_a(1|t,n,o,r)}function Yg(e,t){return Fs(8390656,8,e,t)}function _h(e,t){return hu(2048,8,e,t)}function Tx(e,t){return hu(4,2,e,t)}function Px(e,t){return hu(4,4,e,t)}function Ox(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function jx(e,t,n){return n=n!=null?n.concat([e]):null,hu(4,4,Ox.bind(null,t,e),n)}function Ch(){}function Mx(e,t){var n=Yt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&bh(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function $x(e,t){var n=Yt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&bh(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Ix(e,t,n){return Xr&21?(fn(n,t)||(n=Ay(),Ee.lanes|=n,Kr|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,St=!0),e.memoizedState=n)}function yk(e,t){var n=he;he=n!==0&&4>n?n:4,e(!0);var r=Gc.transition;Gc.transition={};try{e(!1),t()}finally{he=n,Gc.transition=r}}function Dx(){return Yt().memoizedState}function xk(e,t,n){var r=br(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Lx(e))Ax(t,n);else if(n=fx(e,t,n,r),n!==null){var i=pt();ln(n,e,r,i),Rx(n,t,r)}}function bk(e,t,n){var r=br(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Lx(e))Ax(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var a=t.lastRenderedState,l=o(a,n);if(i.hasEagerState=!0,i.eagerState=l,fn(l,a)){var s=t.interleaved;s===null?(i.next=i,mh(t)):(i.next=s.next,s.next=i),t.interleaved=i;return}}catch{}finally{}n=fx(e,t,i,r),n!==null&&(i=pt(),ln(n,e,r,i),Rx(n,t,r))}}function Lx(e){var t=e.alternate;return e===Ee||t!==null&&t===Ee}function Ax(e,t){Jo=El=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Rx(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,th(e,n)}}var kl={readContext:qt,useCallback:Je,useContext:Je,useEffect:Je,useImperativeHandle:Je,useInsertionEffect:Je,useLayoutEffect:Je,useMemo:Je,useReducer:Je,useRef:Je,useState:Je,useDebugValue:Je,useDeferredValue:Je,useTransition:Je,useMutableSource:Je,useSyncExternalStore:Je,useId:Je,unstable_isNewReconciler:!1},wk={readContext:qt,useCallback:function(e,t){return yn().memoizedState=[e,t===void 0?null:t],e},useContext:qt,useEffect:Yg,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Fs(4194308,4,Ox.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Fs(4194308,4,e,t)},useInsertionEffect:function(e,t){return Fs(4,2,e,t)},useMemo:function(e,t){var n=yn();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=yn();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=xk.bind(null,Ee,e),[r.memoizedState,e]},useRef:function(e){var t=yn();return e={current:e},t.memoizedState=e},useState:qg,useDebugValue:Ch,useDeferredValue:function(e){return yn().memoizedState=e},useTransition:function(){var e=qg(!1),t=e[0];return e=yk.bind(null,e[1]),yn().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Ee,i=yn();if(_e){if(n===void 0)throw Error(V(407));n=n()}else{if(n=t(),Ge===null)throw Error(V(349));Xr&30||wx(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,Yg(_x.bind(null,r,o,e),[e]),r.flags|=2048,_a(9,Sx.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=yn(),t=Ge.identifierPrefix;if(_e){var n=Nn,r=zn;n=(r&~(1<<32-sn(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=wa++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=vk++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Sk={readContext:qt,useCallback:Mx,useContext:qt,useEffect:_h,useImperativeHandle:jx,useInsertionEffect:Tx,useLayoutEffect:Px,useMemo:$x,useReducer:qc,useRef:kx,useState:function(){return qc(Sa)},useDebugValue:Ch,useDeferredValue:function(e){var t=Yt();return Ix(t,Fe.memoizedState,e)},useTransition:function(){var e=qc(Sa)[0],t=Yt().memoizedState;return[e,t]},useMutableSource:xx,useSyncExternalStore:bx,useId:Dx,unstable_isNewReconciler:!1},_k={readContext:qt,useCallback:Mx,useContext:qt,useEffect:_h,useImperativeHandle:jx,useInsertionEffect:Tx,useLayoutEffect:Px,useMemo:$x,useReducer:Yc,useRef:kx,useState:function(){return Yc(Sa)},useDebugValue:Ch,useDeferredValue:function(e){var t=Yt();return Fe===null?t.memoizedState=e:Ix(t,Fe.memoizedState,e)},useTransition:function(){var e=Yc(Sa)[0],t=Yt().memoizedState;return[e,t]},useMutableSource:xx,useSyncExternalStore:bx,useId:Dx,unstable_isNewReconciler:!1};function qi(e,t){try{var n="",r=t;do n+=QC(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function Xc(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Rf(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Ck=typeof WeakMap=="function"?WeakMap:Map;function Fx(e,t,n){n=Bn(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Pl||(Pl=!0,qf=r),Rf(e,t)},n}function zx(e,t,n){n=Bn(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Rf(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Rf(e,t),typeof r!="function"&&(xr===null?xr=new Set([this]):xr.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function Xg(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Ck;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Fk.bind(null,e,t,n),t.then(e,e))}function Kg(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Qg(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Bn(-1,1),t.tag=2,yr(n,t,1))),n.lanes|=1),e)}var Ek=Qn.ReactCurrentOwner,St=!1;function dt(e,t,n,r){t.child=e===null?vx(t,null,n,r):Wi(t,e.child,n,r)}function Zg(e,t,n,r,i){n=n.render;var o=t.ref;return Ri(t,i),r=wh(e,t,n,r,o,i),n=Sh(),e!==null&&!St?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,qn(e,t,i)):(_e&&n&&uh(t),t.flags|=1,dt(e,t,r,i),t.child)}function Jg(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!$h(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,Nx(e,t,o,r,i)):(e=Vs(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var a=o.memoizedProps;if(n=n.compare,n=n!==null?n:ma,n(a,r)&&e.ref===t.ref)return qn(e,t,i)}return t.flags|=1,e=wr(o,r),e.ref=t.ref,e.return=t,t.child=e}function Nx(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(ma(o,r)&&e.ref===t.ref)if(St=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(St=!0);else return t.lanes=e.lanes,qn(e,t,i)}return Ff(e,t,n,r,i)}function Bx(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ge($i,jt),jt|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ge($i,jt),jt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,ge($i,jt),jt|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,ge($i,jt),jt|=r;return dt(e,t,i,n),t.child}function Vx(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ff(e,t,n,r,i){var o=Ct(n)?qr:lt.current;return o=Ui(t,o),Ri(t,i),n=wh(e,t,n,r,o,i),r=Sh(),e!==null&&!St?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,qn(e,t,i)):(_e&&r&&uh(t),t.flags|=1,dt(e,t,n,i),t.child)}function e0(e,t,n,r,i){if(Ct(n)){var o=!0;yl(t)}else o=!1;if(Ri(t,i),t.stateNode===null)zs(e,t),mx(t,n,r),Af(t,n,r,i),r=!0;else if(e===null){var a=t.stateNode,l=t.memoizedProps;a.props=l;var s=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=qt(u):(u=Ct(n)?qr:lt.current,u=Ui(t,u));var d=n.getDerivedStateFromProps,c=typeof d=="function"||typeof a.getSnapshotBeforeUpdate=="function";c||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==r||s!==u)&&Wg(t,a,r,u),or=!1;var y=t.memoizedState;a.state=y,_l(t,r,a,i),s=t.memoizedState,l!==r||y!==s||_t.current||or?(typeof d=="function"&&(Lf(t,n,d,r),s=t.memoizedState),(l=or||Hg(t,n,l,r,y,s,u))?(c||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),a.props=r,a.state=s,a.context=u,r=l):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,px(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:tn(t.type,l),a.props=u,c=t.pendingProps,y=a.context,s=n.contextType,typeof s=="object"&&s!==null?s=qt(s):(s=Ct(n)?qr:lt.current,s=Ui(t,s));var p=n.getDerivedStateFromProps;(d=typeof p=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==c||y!==s)&&Wg(t,a,r,s),or=!1,y=t.memoizedState,a.state=y,_l(t,r,a,i);var m=t.memoizedState;l!==c||y!==m||_t.current||or?(typeof p=="function"&&(Lf(t,n,p,r),m=t.memoizedState),(u=or||Hg(t,n,u,r,y,m,s)||!1)?(d||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,m,s),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,m,s)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&y===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&y===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=m),a.props=r,a.state=m,a.context=s,r=u):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&y===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&y===e.memoizedState||(t.flags|=1024),r=!1)}return zf(e,t,n,r,o,i)}function zf(e,t,n,r,i,o){Vx(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return i&&zg(t,n,!1),qn(e,t,o);r=t.stateNode,Ek.current=t;var l=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=Wi(t,e.child,null,o),t.child=Wi(t,null,l,o)):dt(e,t,l,o),t.memoizedState=r.state,i&&zg(t,n,!0),t.child}function Ux(e){var t=e.stateNode;t.pendingContext?Fg(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Fg(e,t.context,!1),vh(e,t.containerInfo)}function t0(e,t,n,r,i){return Hi(),dh(i),t.flags|=256,dt(e,t,n,r),t.child}var Nf={dehydrated:null,treeContext:null,retryLane:0};function Bf(e){return{baseLanes:e,cachePool:null,transitions:null}}function Hx(e,t,n){var r=t.pendingProps,i=Ce.current,o=!1,a=(t.flags&128)!==0,l;if((l=a)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),ge(Ce,i&1),e===null)return If(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,o?(r=t.mode,o=t.child,a={mode:"hidden",children:a},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=a):o=vu(a,r,0,null),e=Wr(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Bf(n),t.memoizedState=Nf,e):Eh(t,a));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return kk(e,t,a,r,l,i,n);if(o){o=r.fallback,a=t.mode,i=e.child,l=i.sibling;var s={mode:"hidden",children:r.children};return!(a&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=wr(i,s),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?o=wr(l,o):(o=Wr(o,a,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,a=e.child.memoizedState,a=a===null?Bf(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},o.memoizedState=a,o.childLanes=e.childLanes&~n,t.memoizedState=Nf,r}return o=e.child,e=o.sibling,r=wr(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Eh(e,t){return t=vu({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ps(e,t,n,r){return r!==null&&dh(r),Wi(t,e.child,null,n),e=Eh(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function kk(e,t,n,r,i,o,a){if(n)return t.flags&256?(t.flags&=-257,r=Xc(Error(V(422))),ps(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=vu({mode:"visible",children:r.children},i,0,null),o=Wr(o,i,a,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&Wi(t,e.child,null,a),t.child.memoizedState=Bf(a),t.memoizedState=Nf,o);if(!(t.mode&1))return ps(e,t,a,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,o=Error(V(419)),r=Xc(o,r,void 0),ps(e,t,a,r)}if(l=(a&e.childLanes)!==0,St||l){if(r=Ge,r!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|a)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Gn(e,i),ln(r,e,i,-1))}return Mh(),r=Xc(Error(V(421))),ps(e,t,a,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=zk.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,$t=vr(i.nextSibling),Dt=t,_e=!0,on=null,e!==null&&(Ut[Ht++]=zn,Ut[Ht++]=Nn,Ut[Ht++]=Yr,zn=e.id,Nn=e.overflow,Yr=t),t=Eh(t,r.children),t.flags|=4096,t)}function n0(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Df(e.return,t,n)}function Kc(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Wx(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(dt(e,t,r.children,n),r=Ce.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&n0(e,n,t);else if(e.tag===19)n0(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ge(Ce,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Cl(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Kc(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Cl(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Kc(t,!0,n,null,o);break;case"together":Kc(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function zs(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function qn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Kr|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(V(153));if(t.child!==null){for(e=t.child,n=wr(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=wr(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Tk(e,t,n){switch(t.tag){case 3:Ux(t),Hi();break;case 5:yx(t);break;case 1:Ct(t.type)&&yl(t);break;case 4:vh(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;ge(wl,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(ge(Ce,Ce.current&1),t.flags|=128,null):n&t.child.childLanes?Hx(e,t,n):(ge(Ce,Ce.current&1),e=qn(e,t,n),e!==null?e.sibling:null);ge(Ce,Ce.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Wx(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ge(Ce,Ce.current),r)break;return null;case 22:case 23:return t.lanes=0,Bx(e,t,n)}return qn(e,t,n)}var Gx,Vf,qx,Yx;Gx=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Vf=function(){};qx=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Vr(Cn.current);var o=null;switch(n){case"input":i=cf(e,i),r=cf(e,r),o=[];break;case"select":i=ke({},i,{value:void 0}),r=ke({},r,{value:void 0}),o=[];break;case"textarea":i=pf(e,i),r=pf(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=gl)}mf(n,r);var a;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(a in l)l.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(la.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var s=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&s!==l&&(s!=null||l!=null))if(u==="style")if(l){for(a in l)!l.hasOwnProperty(a)||s&&s.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in s)s.hasOwnProperty(a)&&l[a]!==s[a]&&(n||(n={}),n[a]=s[a])}else n||(o||(o=[]),o.push(u,n)),n=s;else u==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,l=l?l.__html:void 0,s!=null&&l!==s&&(o=o||[]).push(u,s)):u==="children"?typeof s!="string"&&typeof s!="number"||(o=o||[]).push(u,""+s):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(la.hasOwnProperty(u)?(s!=null&&u==="onScroll"&&ve("scroll",e),o||l===s||(o=[])):(o=o||[]).push(u,s))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};Yx=function(e,t,n,r){n!==r&&(t.flags|=4)};function jo(e,t){if(!_e)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function et(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Pk(e,t,n){var r=t.pendingProps;switch(ch(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return et(t),null;case 1:return Ct(t.type)&&vl(),et(t),null;case 3:return r=t.stateNode,Gi(),xe(_t),xe(lt),xh(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(ds(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,on!==null&&(Kf(on),on=null))),Vf(e,t),et(t),null;case 5:yh(t);var i=Vr(ba.current);if(n=t.type,e!==null&&t.stateNode!=null)qx(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(V(166));return et(t),null}if(e=Vr(Cn.current),ds(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[wn]=t,r[ya]=o,e=(t.mode&1)!==0,n){case"dialog":ve("cancel",r),ve("close",r);break;case"iframe":case"object":case"embed":ve("load",r);break;case"video":case"audio":for(i=0;i<Vo.length;i++)ve(Vo[i],r);break;case"source":ve("error",r);break;case"img":case"image":case"link":ve("error",r),ve("load",r);break;case"details":ve("toggle",r);break;case"input":dg(r,o),ve("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},ve("invalid",r);break;case"textarea":pg(r,o),ve("invalid",r)}mf(n,o),i=null;for(var a in o)if(o.hasOwnProperty(a)){var l=o[a];a==="children"?typeof l=="string"?r.textContent!==l&&(o.suppressHydrationWarning!==!0&&cs(r.textContent,l,e),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(o.suppressHydrationWarning!==!0&&cs(r.textContent,l,e),i=["children",""+l]):la.hasOwnProperty(a)&&l!=null&&a==="onScroll"&&ve("scroll",r)}switch(n){case"input":ns(r),fg(r,o,!0);break;case"textarea":ns(r),hg(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=gl)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=wy(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[wn]=t,e[ya]=r,Gx(e,t,!1,!1),t.stateNode=e;e:{switch(a=gf(n,r),n){case"dialog":ve("cancel",e),ve("close",e),i=r;break;case"iframe":case"object":case"embed":ve("load",e),i=r;break;case"video":case"audio":for(i=0;i<Vo.length;i++)ve(Vo[i],e);i=r;break;case"source":ve("error",e),i=r;break;case"img":case"image":case"link":ve("error",e),ve("load",e),i=r;break;case"details":ve("toggle",e),i=r;break;case"input":dg(e,r),i=cf(e,r),ve("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=ke({},r,{value:void 0}),ve("invalid",e);break;case"textarea":pg(e,r),i=pf(e,r),ve("invalid",e);break;default:i=r}mf(n,i),l=i;for(o in l)if(l.hasOwnProperty(o)){var s=l[o];o==="style"?Cy(e,s):o==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&Sy(e,s)):o==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&ua(e,s):typeof s=="number"&&ua(e,""+s):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(la.hasOwnProperty(o)?s!=null&&o==="onScroll"&&ve("scroll",e):s!=null&&Xp(e,o,s,a))}switch(n){case"input":ns(e),fg(e,r,!1);break;case"textarea":ns(e),hg(e);break;case"option":r.value!=null&&e.setAttribute("value",""+_r(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Ii(e,!!r.multiple,o,!1):r.defaultValue!=null&&Ii(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=gl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return et(t),null;case 6:if(e&&t.stateNode!=null)Yx(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(V(166));if(n=Vr(ba.current),Vr(Cn.current),ds(t)){if(r=t.stateNode,n=t.memoizedProps,r[wn]=t,(o=r.nodeValue!==n)&&(e=Dt,e!==null))switch(e.tag){case 3:cs(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&cs(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[wn]=t,t.stateNode=r}return et(t),null;case 13:if(xe(Ce),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(_e&&$t!==null&&t.mode&1&&!(t.flags&128))dx(),Hi(),t.flags|=98560,o=!1;else if(o=ds(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(V(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(V(317));o[wn]=t}else Hi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;et(t),o=!1}else on!==null&&(Kf(on),on=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Ce.current&1?Ne===0&&(Ne=3):Mh())),t.updateQueue!==null&&(t.flags|=4),et(t),null);case 4:return Gi(),Vf(e,t),e===null&&ga(t.stateNode.containerInfo),et(t),null;case 10:return hh(t.type._context),et(t),null;case 17:return Ct(t.type)&&vl(),et(t),null;case 19:if(xe(Ce),o=t.memoizedState,o===null)return et(t),null;if(r=(t.flags&128)!==0,a=o.rendering,a===null)if(r)jo(o,!1);else{if(Ne!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=Cl(e),a!==null){for(t.flags|=128,jo(o,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,a=o.alternate,a===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=a.childLanes,o.lanes=a.lanes,o.child=a.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=a.memoizedProps,o.memoizedState=a.memoizedState,o.updateQueue=a.updateQueue,o.type=a.type,e=a.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ge(Ce,Ce.current&1|2),t.child}e=e.sibling}o.tail!==null&&je()>Yi&&(t.flags|=128,r=!0,jo(o,!1),t.lanes=4194304)}else{if(!r)if(e=Cl(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),jo(o,!0),o.tail===null&&o.tailMode==="hidden"&&!a.alternate&&!_e)return et(t),null}else 2*je()-o.renderingStartTime>Yi&&n!==1073741824&&(t.flags|=128,r=!0,jo(o,!1),t.lanes=4194304);o.isBackwards?(a.sibling=t.child,t.child=a):(n=o.last,n!==null?n.sibling=a:t.child=a,o.last=a)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=je(),t.sibling=null,n=Ce.current,ge(Ce,r?n&1|2:n&1),t):(et(t),null);case 22:case 23:return jh(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?jt&1073741824&&(et(t),t.subtreeFlags&6&&(t.flags|=8192)):et(t),null;case 24:return null;case 25:return null}throw Error(V(156,t.tag))}function Ok(e,t){switch(ch(t),t.tag){case 1:return Ct(t.type)&&vl(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Gi(),xe(_t),xe(lt),xh(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return yh(t),null;case 13:if(xe(Ce),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(V(340));Hi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return xe(Ce),null;case 4:return Gi(),null;case 10:return hh(t.type._context),null;case 22:case 23:return jh(),null;case 24:return null;default:return null}}var hs=!1,ot=!1,jk=typeof WeakSet=="function"?WeakSet:Set,W=null;function Mi(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Te(e,t,r)}else n.current=null}function Uf(e,t,n){try{n()}catch(r){Te(e,t,r)}}var r0=!1;function Mk(e,t){if(kf=pl,e=Zy(),lh(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var a=0,l=-1,s=-1,u=0,d=0,c=e,y=null;t:for(;;){for(var p;c!==n||i!==0&&c.nodeType!==3||(l=a+i),c!==o||r!==0&&c.nodeType!==3||(s=a+r),c.nodeType===3&&(a+=c.nodeValue.length),(p=c.firstChild)!==null;)y=c,c=p;for(;;){if(c===e)break t;if(y===n&&++u===i&&(l=a),y===o&&++d===r&&(s=a),(p=c.nextSibling)!==null)break;c=y,y=c.parentNode}c=p}n=l===-1||s===-1?null:{start:l,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(Tf={focusedElem:e,selectionRange:n},pl=!1,W=t;W!==null;)if(t=W,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,W=e;else for(;W!==null;){t=W;try{var m=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(m!==null){var v=m.memoizedProps,w=m.memoizedState,h=t.stateNode,g=h.getSnapshotBeforeUpdate(t.elementType===t.type?v:tn(t.type,v),w);h.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var x=t.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(V(163))}}catch(S){Te(t,t.return,S)}if(e=t.sibling,e!==null){e.return=t.return,W=e;break}W=t.return}return m=r0,r0=!1,m}function ea(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Uf(t,n,o)}i=i.next}while(i!==r)}}function mu(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Hf(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Xx(e){var t=e.alternate;t!==null&&(e.alternate=null,Xx(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[wn],delete t[ya],delete t[jf],delete t[pk],delete t[hk])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Kx(e){return e.tag===5||e.tag===3||e.tag===4}function i0(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Kx(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Wf(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=gl));else if(r!==4&&(e=e.child,e!==null))for(Wf(e,t,n),e=e.sibling;e!==null;)Wf(e,t,n),e=e.sibling}function Gf(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Gf(e,t,n),e=e.sibling;e!==null;)Gf(e,t,n),e=e.sibling}var Xe=null,nn=!1;function nr(e,t,n){for(n=n.child;n!==null;)Qx(e,t,n),n=n.sibling}function Qx(e,t,n){if(_n&&typeof _n.onCommitFiberUnmount=="function")try{_n.onCommitFiberUnmount(su,n)}catch{}switch(n.tag){case 5:ot||Mi(n,t);case 6:var r=Xe,i=nn;Xe=null,nr(e,t,n),Xe=r,nn=i,Xe!==null&&(nn?(e=Xe,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Xe.removeChild(n.stateNode));break;case 18:Xe!==null&&(nn?(e=Xe,n=n.stateNode,e.nodeType===8?Uc(e.parentNode,n):e.nodeType===1&&Uc(e,n),pa(e)):Uc(Xe,n.stateNode));break;case 4:r=Xe,i=nn,Xe=n.stateNode.containerInfo,nn=!0,nr(e,t,n),Xe=r,nn=i;break;case 0:case 11:case 14:case 15:if(!ot&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,a=o.destroy;o=o.tag,a!==void 0&&(o&2||o&4)&&Uf(n,t,a),i=i.next}while(i!==r)}nr(e,t,n);break;case 1:if(!ot&&(Mi(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Te(n,t,l)}nr(e,t,n);break;case 21:nr(e,t,n);break;case 22:n.mode&1?(ot=(r=ot)||n.memoizedState!==null,nr(e,t,n),ot=r):nr(e,t,n);break;default:nr(e,t,n)}}function o0(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new jk),t.forEach(function(r){var i=Nk.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Qt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,a=t,l=a;e:for(;l!==null;){switch(l.tag){case 5:Xe=l.stateNode,nn=!1;break e;case 3:Xe=l.stateNode.containerInfo,nn=!0;break e;case 4:Xe=l.stateNode.containerInfo,nn=!0;break e}l=l.return}if(Xe===null)throw Error(V(160));Qx(o,a,i),Xe=null,nn=!1;var s=i.alternate;s!==null&&(s.return=null),i.return=null}catch(u){Te(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Zx(t,e),t=t.sibling}function Zx(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Qt(t,e),gn(e),r&4){try{ea(3,e,e.return),mu(3,e)}catch(v){Te(e,e.return,v)}try{ea(5,e,e.return)}catch(v){Te(e,e.return,v)}}break;case 1:Qt(t,e),gn(e),r&512&&n!==null&&Mi(n,n.return);break;case 5:if(Qt(t,e),gn(e),r&512&&n!==null&&Mi(n,n.return),e.flags&32){var i=e.stateNode;try{ua(i,"")}catch(v){Te(e,e.return,v)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,a=n!==null?n.memoizedProps:o,l=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{l==="input"&&o.type==="radio"&&o.name!=null&&xy(i,o),gf(l,a);var u=gf(l,o);for(a=0;a<s.length;a+=2){var d=s[a],c=s[a+1];d==="style"?Cy(i,c):d==="dangerouslySetInnerHTML"?Sy(i,c):d==="children"?ua(i,c):Xp(i,d,c,u)}switch(l){case"input":df(i,o);break;case"textarea":by(i,o);break;case"select":var y=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var p=o.value;p!=null?Ii(i,!!o.multiple,p,!1):y!==!!o.multiple&&(o.defaultValue!=null?Ii(i,!!o.multiple,o.defaultValue,!0):Ii(i,!!o.multiple,o.multiple?[]:"",!1))}i[ya]=o}catch(v){Te(e,e.return,v)}}break;case 6:if(Qt(t,e),gn(e),r&4){if(e.stateNode===null)throw Error(V(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(v){Te(e,e.return,v)}}break;case 3:if(Qt(t,e),gn(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{pa(t.containerInfo)}catch(v){Te(e,e.return,v)}break;case 4:Qt(t,e),gn(e);break;case 13:Qt(t,e),gn(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Ph=je())),r&4&&o0(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(ot=(u=ot)||d,Qt(t,e),ot=u):Qt(t,e),gn(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(W=e,d=e.child;d!==null;){for(c=W=d;W!==null;){switch(y=W,p=y.child,y.tag){case 0:case 11:case 14:case 15:ea(4,y,y.return);break;case 1:Mi(y,y.return);var m=y.stateNode;if(typeof m.componentWillUnmount=="function"){r=y,n=y.return;try{t=r,m.props=t.memoizedProps,m.state=t.memoizedState,m.componentWillUnmount()}catch(v){Te(r,n,v)}}break;case 5:Mi(y,y.return);break;case 22:if(y.memoizedState!==null){s0(c);continue}}p!==null?(p.return=y,W=p):s0(c)}d=d.sibling}e:for(d=null,c=e;;){if(c.tag===5){if(d===null){d=c;try{i=c.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(l=c.stateNode,s=c.memoizedProps.style,a=s!=null&&s.hasOwnProperty("display")?s.display:null,l.style.display=_y("display",a))}catch(v){Te(e,e.return,v)}}}else if(c.tag===6){if(d===null)try{c.stateNode.nodeValue=u?"":c.memoizedProps}catch(v){Te(e,e.return,v)}}else if((c.tag!==22&&c.tag!==23||c.memoizedState===null||c===e)&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===e)break e;for(;c.sibling===null;){if(c.return===null||c.return===e)break e;d===c&&(d=null),c=c.return}d===c&&(d=null),c.sibling.return=c.return,c=c.sibling}}break;case 19:Qt(t,e),gn(e),r&4&&o0(e);break;case 21:break;default:Qt(t,e),gn(e)}}function gn(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Kx(n)){var r=n;break e}n=n.return}throw Error(V(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(ua(i,""),r.flags&=-33);var o=i0(e);Gf(e,o,i);break;case 3:case 4:var a=r.stateNode.containerInfo,l=i0(e);Wf(e,l,a);break;default:throw Error(V(161))}}catch(s){Te(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function $k(e,t,n){W=e,Jx(e)}function Jx(e,t,n){for(var r=(e.mode&1)!==0;W!==null;){var i=W,o=i.child;if(i.tag===22&&r){var a=i.memoizedState!==null||hs;if(!a){var l=i.alternate,s=l!==null&&l.memoizedState!==null||ot;l=hs;var u=ot;if(hs=a,(ot=s)&&!u)for(W=i;W!==null;)a=W,s=a.child,a.tag===22&&a.memoizedState!==null?l0(i):s!==null?(s.return=a,W=s):l0(i);for(;o!==null;)W=o,Jx(o),o=o.sibling;W=i,hs=l,ot=u}a0(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,W=o):a0(e)}}function a0(e){for(;W!==null;){var t=W;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ot||mu(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ot)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:tn(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Ug(t,o,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Ug(t,a,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var c=d.dehydrated;c!==null&&pa(c)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(V(163))}ot||t.flags&512&&Hf(t)}catch(y){Te(t,t.return,y)}}if(t===e){W=null;break}if(n=t.sibling,n!==null){n.return=t.return,W=n;break}W=t.return}}function s0(e){for(;W!==null;){var t=W;if(t===e){W=null;break}var n=t.sibling;if(n!==null){n.return=t.return,W=n;break}W=t.return}}function l0(e){for(;W!==null;){var t=W;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{mu(4,t)}catch(s){Te(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(s){Te(t,i,s)}}var o=t.return;try{Hf(t)}catch(s){Te(t,o,s)}break;case 5:var a=t.return;try{Hf(t)}catch(s){Te(t,a,s)}}}catch(s){Te(t,t.return,s)}if(t===e){W=null;break}var l=t.sibling;if(l!==null){l.return=t.return,W=l;break}W=t.return}}var Ik=Math.ceil,Tl=Qn.ReactCurrentDispatcher,kh=Qn.ReactCurrentOwner,Gt=Qn.ReactCurrentBatchConfig,se=0,Ge=null,De=null,Qe=0,jt=0,$i=Tr(0),Ne=0,Ca=null,Kr=0,gu=0,Th=0,ta=null,wt=null,Ph=0,Yi=1/0,In=null,Pl=!1,qf=null,xr=null,ms=!1,cr=null,Ol=0,na=0,Yf=null,Ns=-1,Bs=0;function pt(){return se&6?je():Ns!==-1?Ns:Ns=je()}function br(e){return e.mode&1?se&2&&Qe!==0?Qe&-Qe:gk.transition!==null?(Bs===0&&(Bs=Ay()),Bs):(e=he,e!==0||(e=window.event,e=e===void 0?16:Uy(e.type)),e):1}function ln(e,t,n,r){if(50<na)throw na=0,Yf=null,Error(V(185));Ra(e,n,r),(!(se&2)||e!==Ge)&&(e===Ge&&(!(se&2)&&(gu|=n),Ne===4&&sr(e,Qe)),Et(e,r),n===1&&se===0&&!(t.mode&1)&&(Yi=je()+500,fu&&Pr()))}function Et(e,t){var n=e.callbackNode;gE(e,t);var r=fl(e,e===Ge?Qe:0);if(r===0)n!==null&&vg(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&vg(n),t===1)e.tag===0?mk(u0.bind(null,e)):lx(u0.bind(null,e)),dk(function(){!(se&6)&&Pr()}),n=null;else{switch(Ry(r)){case 1:n=eh;break;case 4:n=Dy;break;case 16:n=dl;break;case 536870912:n=Ly;break;default:n=dl}n=sb(n,eb.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function eb(e,t){if(Ns=-1,Bs=0,se&6)throw Error(V(327));var n=e.callbackNode;if(Fi()&&e.callbackNode!==n)return null;var r=fl(e,e===Ge?Qe:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=jl(e,r);else{t=r;var i=se;se|=2;var o=nb();(Ge!==e||Qe!==t)&&(In=null,Yi=je()+500,Hr(e,t));do try{Ak();break}catch(l){tb(e,l)}while(1);ph(),Tl.current=o,se=i,De!==null?t=0:(Ge=null,Qe=0,t=Ne)}if(t!==0){if(t===2&&(i=wf(e),i!==0&&(r=i,t=Xf(e,i))),t===1)throw n=Ca,Hr(e,0),sr(e,r),Et(e,je()),n;if(t===6)sr(e,r);else{if(i=e.current.alternate,!(r&30)&&!Dk(i)&&(t=jl(e,r),t===2&&(o=wf(e),o!==0&&(r=o,t=Xf(e,o))),t===1))throw n=Ca,Hr(e,0),sr(e,r),Et(e,je()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(V(345));case 2:Lr(e,wt,In);break;case 3:if(sr(e,r),(r&130023424)===r&&(t=Ph+500-je(),10<t)){if(fl(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){pt(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Of(Lr.bind(null,e,wt,In),t);break}Lr(e,wt,In);break;case 4:if(sr(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var a=31-sn(r);o=1<<a,a=t[a],a>i&&(i=a),r&=~o}if(r=i,r=je()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Ik(r/1960))-r,10<r){e.timeoutHandle=Of(Lr.bind(null,e,wt,In),r);break}Lr(e,wt,In);break;case 5:Lr(e,wt,In);break;default:throw Error(V(329))}}}return Et(e,je()),e.callbackNode===n?eb.bind(null,e):null}function Xf(e,t){var n=ta;return e.current.memoizedState.isDehydrated&&(Hr(e,t).flags|=256),e=jl(e,t),e!==2&&(t=wt,wt=n,t!==null&&Kf(t)),e}function Kf(e){wt===null?wt=e:wt.push.apply(wt,e)}function Dk(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!fn(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function sr(e,t){for(t&=~Th,t&=~gu,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-sn(t),r=1<<n;e[n]=-1,t&=~r}}function u0(e){if(se&6)throw Error(V(327));Fi();var t=fl(e,0);if(!(t&1))return Et(e,je()),null;var n=jl(e,t);if(e.tag!==0&&n===2){var r=wf(e);r!==0&&(t=r,n=Xf(e,r))}if(n===1)throw n=Ca,Hr(e,0),sr(e,t),Et(e,je()),n;if(n===6)throw Error(V(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Lr(e,wt,In),Et(e,je()),null}function Oh(e,t){var n=se;se|=1;try{return e(t)}finally{se=n,se===0&&(Yi=je()+500,fu&&Pr())}}function Qr(e){cr!==null&&cr.tag===0&&!(se&6)&&Fi();var t=se;se|=1;var n=Gt.transition,r=he;try{if(Gt.transition=null,he=1,e)return e()}finally{he=r,Gt.transition=n,se=t,!(se&6)&&Pr()}}function jh(){jt=$i.current,xe($i)}function Hr(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,ck(n)),De!==null)for(n=De.return;n!==null;){var r=n;switch(ch(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&vl();break;case 3:Gi(),xe(_t),xe(lt),xh();break;case 5:yh(r);break;case 4:Gi();break;case 13:xe(Ce);break;case 19:xe(Ce);break;case 10:hh(r.type._context);break;case 22:case 23:jh()}n=n.return}if(Ge=e,De=e=wr(e.current,null),Qe=jt=t,Ne=0,Ca=null,Th=gu=Kr=0,wt=ta=null,Br!==null){for(t=0;t<Br.length;t++)if(n=Br[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var a=o.next;o.next=i,r.next=a}n.pending=r}Br=null}return e}function tb(e,t){do{var n=De;try{if(ph(),Rs.current=kl,El){for(var r=Ee.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}El=!1}if(Xr=0,We=Fe=Ee=null,Jo=!1,wa=0,kh.current=null,n===null||n.return===null){Ne=1,Ca=t,De=null;break}e:{var o=e,a=n.return,l=n,s=t;if(t=Qe,l.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var u=s,d=l,c=d.tag;if(!(d.mode&1)&&(c===0||c===11||c===15)){var y=d.alternate;y?(d.updateQueue=y.updateQueue,d.memoizedState=y.memoizedState,d.lanes=y.lanes):(d.updateQueue=null,d.memoizedState=null)}var p=Kg(a);if(p!==null){p.flags&=-257,Qg(p,a,l,o,t),p.mode&1&&Xg(o,u,t),t=p,s=u;var m=t.updateQueue;if(m===null){var v=new Set;v.add(s),t.updateQueue=v}else m.add(s);break e}else{if(!(t&1)){Xg(o,u,t),Mh();break e}s=Error(V(426))}}else if(_e&&l.mode&1){var w=Kg(a);if(w!==null){!(w.flags&65536)&&(w.flags|=256),Qg(w,a,l,o,t),dh(qi(s,l));break e}}o=s=qi(s,l),Ne!==4&&(Ne=2),ta===null?ta=[o]:ta.push(o),o=a;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var h=Fx(o,s,t);Vg(o,h);break e;case 1:l=s;var g=o.type,x=o.stateNode;if(!(o.flags&128)&&(typeof g.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(xr===null||!xr.has(x)))){o.flags|=65536,t&=-t,o.lanes|=t;var S=zx(o,l,t);Vg(o,S);break e}}o=o.return}while(o!==null)}ib(n)}catch(T){t=T,De===n&&n!==null&&(De=n=n.return);continue}break}while(1)}function nb(){var e=Tl.current;return Tl.current=kl,e===null?kl:e}function Mh(){(Ne===0||Ne===3||Ne===2)&&(Ne=4),Ge===null||!(Kr&268435455)&&!(gu&268435455)||sr(Ge,Qe)}function jl(e,t){var n=se;se|=2;var r=nb();(Ge!==e||Qe!==t)&&(In=null,Hr(e,t));do try{Lk();break}catch(i){tb(e,i)}while(1);if(ph(),se=n,Tl.current=r,De!==null)throw Error(V(261));return Ge=null,Qe=0,Ne}function Lk(){for(;De!==null;)rb(De)}function Ak(){for(;De!==null&&!sE();)rb(De)}function rb(e){var t=ab(e.alternate,e,jt);e.memoizedProps=e.pendingProps,t===null?ib(e):De=t,kh.current=null}function ib(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Ok(n,t),n!==null){n.flags&=32767,De=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ne=6,De=null;return}}else if(n=Pk(n,t,jt),n!==null){De=n;return}if(t=t.sibling,t!==null){De=t;return}De=t=e}while(t!==null);Ne===0&&(Ne=5)}function Lr(e,t,n){var r=he,i=Gt.transition;try{Gt.transition=null,he=1,Rk(e,t,n,r)}finally{Gt.transition=i,he=r}return null}function Rk(e,t,n,r){do Fi();while(cr!==null);if(se&6)throw Error(V(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(V(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(vE(e,o),e===Ge&&(De=Ge=null,Qe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ms||(ms=!0,sb(dl,function(){return Fi(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Gt.transition,Gt.transition=null;var a=he;he=1;var l=se;se|=4,kh.current=null,Mk(e,n),Zx(n,e),rk(Tf),pl=!!kf,Tf=kf=null,e.current=n,$k(n),lE(),se=l,he=a,Gt.transition=o}else e.current=n;if(ms&&(ms=!1,cr=e,Ol=i),o=e.pendingLanes,o===0&&(xr=null),dE(n.stateNode),Et(e,je()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Pl)throw Pl=!1,e=qf,qf=null,e;return Ol&1&&e.tag!==0&&Fi(),o=e.pendingLanes,o&1?e===Yf?na++:(na=0,Yf=e):na=0,Pr(),null}function Fi(){if(cr!==null){var e=Ry(Ol),t=Gt.transition,n=he;try{if(Gt.transition=null,he=16>e?16:e,cr===null)var r=!1;else{if(e=cr,cr=null,Ol=0,se&6)throw Error(V(331));var i=se;for(se|=4,W=e.current;W!==null;){var o=W,a=o.child;if(W.flags&16){var l=o.deletions;if(l!==null){for(var s=0;s<l.length;s++){var u=l[s];for(W=u;W!==null;){var d=W;switch(d.tag){case 0:case 11:case 15:ea(8,d,o)}var c=d.child;if(c!==null)c.return=d,W=c;else for(;W!==null;){d=W;var y=d.sibling,p=d.return;if(Xx(d),d===u){W=null;break}if(y!==null){y.return=p,W=y;break}W=p}}}var m=o.alternate;if(m!==null){var v=m.child;if(v!==null){m.child=null;do{var w=v.sibling;v.sibling=null,v=w}while(v!==null)}}W=o}}if(o.subtreeFlags&2064&&a!==null)a.return=o,W=a;else e:for(;W!==null;){if(o=W,o.flags&2048)switch(o.tag){case 0:case 11:case 15:ea(9,o,o.return)}var h=o.sibling;if(h!==null){h.return=o.return,W=h;break e}W=o.return}}var g=e.current;for(W=g;W!==null;){a=W;var x=a.child;if(a.subtreeFlags&2064&&x!==null)x.return=a,W=x;else e:for(a=g;W!==null;){if(l=W,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:mu(9,l)}}catch(T){Te(l,l.return,T)}if(l===a){W=null;break e}var S=l.sibling;if(S!==null){S.return=l.return,W=S;break e}W=l.return}}if(se=i,Pr(),_n&&typeof _n.onPostCommitFiberRoot=="function")try{_n.onPostCommitFiberRoot(su,e)}catch{}r=!0}return r}finally{he=n,Gt.transition=t}}return!1}function c0(e,t,n){t=qi(n,t),t=Fx(e,t,1),e=yr(e,t,1),t=pt(),e!==null&&(Ra(e,1,t),Et(e,t))}function Te(e,t,n){if(e.tag===3)c0(e,e,n);else for(;t!==null;){if(t.tag===3){c0(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(xr===null||!xr.has(r))){e=qi(n,e),e=zx(t,e,1),t=yr(t,e,1),e=pt(),t!==null&&(Ra(t,1,e),Et(t,e));break}}t=t.return}}function Fk(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=pt(),e.pingedLanes|=e.suspendedLanes&n,Ge===e&&(Qe&n)===n&&(Ne===4||Ne===3&&(Qe&130023424)===Qe&&500>je()-Ph?Hr(e,0):Th|=n),Et(e,t)}function ob(e,t){t===0&&(e.mode&1?(t=os,os<<=1,!(os&130023424)&&(os=4194304)):t=1);var n=pt();e=Gn(e,t),e!==null&&(Ra(e,t,n),Et(e,n))}function zk(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),ob(e,n)}function Nk(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(V(314))}r!==null&&r.delete(t),ob(e,n)}var ab;ab=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||_t.current)St=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return St=!1,Tk(e,t,n);St=!!(e.flags&131072)}else St=!1,_e&&t.flags&1048576&&ux(t,bl,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;zs(e,t),e=t.pendingProps;var i=Ui(t,lt.current);Ri(t,n),i=wh(null,t,r,e,i,n);var o=Sh();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ct(r)?(o=!0,yl(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,gh(t),i.updater=pu,t.stateNode=i,i._reactInternals=t,Af(t,r,e,n),t=zf(null,t,r,!0,o,n)):(t.tag=0,_e&&o&&uh(t),dt(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(zs(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Vk(r),e=tn(r,e),i){case 0:t=Ff(null,t,r,e,n);break e;case 1:t=e0(null,t,r,e,n);break e;case 11:t=Zg(null,t,r,e,n);break e;case 14:t=Jg(null,t,r,tn(r.type,e),n);break e}throw Error(V(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:tn(r,i),Ff(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:tn(r,i),e0(e,t,r,i,n);case 3:e:{if(Ux(t),e===null)throw Error(V(387));r=t.pendingProps,o=t.memoizedState,i=o.element,px(e,t),_l(t,r,null,n);var a=t.memoizedState;if(r=a.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=qi(Error(V(423)),t),t=t0(e,t,r,n,i);break e}else if(r!==i){i=qi(Error(V(424)),t),t=t0(e,t,r,n,i);break e}else for($t=vr(t.stateNode.containerInfo.firstChild),Dt=t,_e=!0,on=null,n=vx(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Hi(),r===i){t=qn(e,t,n);break e}dt(e,t,r,n)}t=t.child}return t;case 5:return yx(t),e===null&&If(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,a=i.children,Pf(r,i)?a=null:o!==null&&Pf(r,o)&&(t.flags|=32),Vx(e,t),dt(e,t,a,n),t.child;case 6:return e===null&&If(t),null;case 13:return Hx(e,t,n);case 4:return vh(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Wi(t,null,r,n):dt(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:tn(r,i),Zg(e,t,r,i,n);case 7:return dt(e,t,t.pendingProps,n),t.child;case 8:return dt(e,t,t.pendingProps.children,n),t.child;case 12:return dt(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,a=i.value,ge(wl,r._currentValue),r._currentValue=a,o!==null)if(fn(o.value,a)){if(o.children===i.children&&!_t.current){t=qn(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var l=o.dependencies;if(l!==null){a=o.child;for(var s=l.firstContext;s!==null;){if(s.context===r){if(o.tag===1){s=Bn(-1,n&-n),s.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?s.next=s:(s.next=d.next,d.next=s),u.pending=s}}o.lanes|=n,s=o.alternate,s!==null&&(s.lanes|=n),Df(o.return,n,t),l.lanes|=n;break}s=s.next}}else if(o.tag===10)a=o.type===t.type?null:o.child;else if(o.tag===18){if(a=o.return,a===null)throw Error(V(341));a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),Df(a,n,t),a=o.sibling}else a=o.child;if(a!==null)a.return=o;else for(a=o;a!==null;){if(a===t){a=null;break}if(o=a.sibling,o!==null){o.return=a.return,a=o;break}a=a.return}o=a}dt(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Ri(t,n),i=qt(i),r=r(i),t.flags|=1,dt(e,t,r,n),t.child;case 14:return r=t.type,i=tn(r,t.pendingProps),i=tn(r.type,i),Jg(e,t,r,i,n);case 15:return Nx(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:tn(r,i),zs(e,t),t.tag=1,Ct(r)?(e=!0,yl(t)):e=!1,Ri(t,n),mx(t,r,i),Af(t,r,i,n),zf(null,t,r,!0,e,n);case 19:return Wx(e,t,n);case 22:return Bx(e,t,n)}throw Error(V(156,t.tag))};function sb(e,t){return Iy(e,t)}function Bk(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Wt(e,t,n,r){return new Bk(e,t,n,r)}function $h(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Vk(e){if(typeof e=="function")return $h(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Qp)return 11;if(e===Zp)return 14}return 2}function wr(e,t){var n=e.alternate;return n===null?(n=Wt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Vs(e,t,n,r,i,o){var a=2;if(r=e,typeof e=="function")$h(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case Si:return Wr(n.children,i,o,t);case Kp:a=8,i|=8;break;case af:return e=Wt(12,n,t,i|2),e.elementType=af,e.lanes=o,e;case sf:return e=Wt(13,n,t,i),e.elementType=sf,e.lanes=o,e;case lf:return e=Wt(19,n,t,i),e.elementType=lf,e.lanes=o,e;case gy:return vu(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case hy:a=10;break e;case my:a=9;break e;case Qp:a=11;break e;case Zp:a=14;break e;case ir:a=16,r=null;break e}throw Error(V(130,e==null?e:typeof e,""))}return t=Wt(a,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function Wr(e,t,n,r){return e=Wt(7,e,r,t),e.lanes=n,e}function vu(e,t,n,r){return e=Wt(22,e,r,t),e.elementType=gy,e.lanes=n,e.stateNode={isHidden:!1},e}function Qc(e,t,n){return e=Wt(6,e,null,t),e.lanes=n,e}function Zc(e,t,n){return t=Wt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Uk(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=$c(0),this.expirationTimes=$c(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=$c(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Ih(e,t,n,r,i,o,a,l,s){return e=new Uk(e,t,n,l,s),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Wt(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},gh(o),e}function Hk(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:wi,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function lb(e){if(!e)return Cr;e=e._reactInternals;e:{if(oi(e)!==e||e.tag!==1)throw Error(V(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ct(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(V(171))}if(e.tag===1){var n=e.type;if(Ct(n))return sx(e,n,t)}return t}function ub(e,t,n,r,i,o,a,l,s){return e=Ih(n,r,!0,e,i,o,a,l,s),e.context=lb(null),n=e.current,r=pt(),i=br(n),o=Bn(r,i),o.callback=t??null,yr(n,o,i),e.current.lanes=i,Ra(e,i,r),Et(e,r),e}function yu(e,t,n,r){var i=t.current,o=pt(),a=br(i);return n=lb(n),t.context===null?t.context=n:t.pendingContext=n,t=Bn(o,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=yr(i,t,a),e!==null&&(ln(e,i,a,o),As(e,i,a)),a}function Ml(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function d0(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Dh(e,t){d0(e,t),(e=e.alternate)&&d0(e,t)}function Wk(){return null}var cb=typeof reportError=="function"?reportError:function(e){console.error(e)};function Lh(e){this._internalRoot=e}xu.prototype.render=Lh.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(V(409));yu(e,t,null,null)};xu.prototype.unmount=Lh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Qr(function(){yu(null,e,null,null)}),t[Wn]=null}};function xu(e){this._internalRoot=e}xu.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ny();e={blockedOn:null,target:e,priority:t};for(var n=0;n<ar.length&&t!==0&&t<ar[n].priority;n++);ar.splice(n,0,e),n===0&&Vy(e)}};function Ah(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function bu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function f0(){}function Gk(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=Ml(a);o.call(u)}}var a=ub(t,r,e,0,null,!1,!1,"",f0);return e._reactRootContainer=a,e[Wn]=a.current,ga(e.nodeType===8?e.parentNode:e),Qr(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=Ml(s);l.call(u)}}var s=Ih(e,0,!1,null,null,!1,!1,"",f0);return e._reactRootContainer=s,e[Wn]=s.current,ga(e.nodeType===8?e.parentNode:e),Qr(function(){yu(t,s,n,r)}),s}function wu(e,t,n,r,i){var o=n._reactRootContainer;if(o){var a=o;if(typeof i=="function"){var l=i;i=function(){var s=Ml(a);l.call(s)}}yu(t,a,e,i)}else a=Gk(n,t,e,i,r);return Ml(a)}Fy=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Bo(t.pendingLanes);n!==0&&(th(t,n|1),Et(t,je()),!(se&6)&&(Yi=je()+500,Pr()))}break;case 13:Qr(function(){var r=Gn(e,1);if(r!==null){var i=pt();ln(r,e,1,i)}}),Dh(e,1)}};nh=function(e){if(e.tag===13){var t=Gn(e,134217728);if(t!==null){var n=pt();ln(t,e,134217728,n)}Dh(e,134217728)}};zy=function(e){if(e.tag===13){var t=br(e),n=Gn(e,t);if(n!==null){var r=pt();ln(n,e,t,r)}Dh(e,t)}};Ny=function(){return he};By=function(e,t){var n=he;try{return he=e,t()}finally{he=n}};yf=function(e,t,n){switch(t){case"input":if(df(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=du(r);if(!i)throw Error(V(90));yy(r),df(r,i)}}}break;case"textarea":by(e,n);break;case"select":t=n.value,t!=null&&Ii(e,!!n.multiple,t,!1)}};Ty=Oh;Py=Qr;var qk={usingClientEntryPoint:!1,Events:[za,ki,du,Ey,ky,Oh]},Mo={findFiberByHostInstance:Nr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Yk={bundleType:Mo.bundleType,version:Mo.version,rendererPackageName:Mo.rendererPackageName,rendererConfig:Mo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Qn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=My(e),e===null?null:e.stateNode},findFiberByHostInstance:Mo.findFiberByHostInstance||Wk,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var gs=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!gs.isDisabled&&gs.supportsFiber)try{su=gs.inject(Yk),_n=gs}catch{}}Ft.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=qk;Ft.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ah(t))throw Error(V(200));return Hk(e,t,null,n)};Ft.createRoot=function(e,t){if(!Ah(e))throw Error(V(299));var n=!1,r="",i=cb;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Ih(e,1,!1,null,null,n,!1,r,i),e[Wn]=t.current,ga(e.nodeType===8?e.parentNode:e),new Lh(t)};Ft.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(V(188)):(e=Object.keys(e).join(","),Error(V(268,e)));return e=My(t),e=e===null?null:e.stateNode,e};Ft.flushSync=function(e){return Qr(e)};Ft.hydrate=function(e,t,n){if(!bu(t))throw Error(V(200));return wu(null,e,t,!0,n)};Ft.hydrateRoot=function(e,t,n){if(!Ah(e))throw Error(V(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",a=cb;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=ub(t,null,e,1,n??null,i,!1,o,a),e[Wn]=t.current,ga(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new xu(t)};Ft.render=function(e,t,n){if(!bu(t))throw Error(V(200));return wu(null,e,t,!1,n)};Ft.unmountComponentAtNode=function(e){if(!bu(e))throw Error(V(40));return e._reactRootContainer?(Qr(function(){wu(null,null,e,!1,function(){e._reactRootContainer=null,e[Wn]=null})}),!0):!1};Ft.unstable_batchedUpdates=Oh;Ft.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!bu(n))throw Error(V(200));if(e==null||e._reactInternals===void 0)throw Error(V(38));return wu(e,t,n,!1,r)};Ft.version="18.2.0-next-9e3b772b8-20220608";function db(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(db)}catch(e){console.error(e)}}db(),uy.exports=Ft;var Su=uy.exports,p0=Su;rf.createRoot=p0.createRoot,rf.hydrateRoot=p0.hydrateRoot;var at=function(){return at=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},at.apply(this,arguments)};function Xi(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,o;r<i;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))}function Xk(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var Kk=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|popover|popoverTarget|popoverTargetAction|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,Qk=Xk(function(e){return Kk.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),ye="-ms-",ra="-moz-",ue="-webkit-",fb="comm",_u="rule",Rh="decl",Zk="@import",Jk="@namespace",pb="@keyframes",eT="@layer",hb=Math.abs,Fh=String.fromCharCode,Qf=Object.assign;function tT(e,t){return ze(e,0)^45?(((t<<2^ze(e,0))<<2^ze(e,1))<<2^ze(e,2))<<2^ze(e,3):0}function mb(e){return e.trim()}function Dn(e,t){return(e=t.exec(e))?e[0]:e}function ne(e,t,n){return e.replace(t,n)}function Us(e,t,n){return e.indexOf(t,n)}function ze(e,t){return e.charCodeAt(t)|0}function Zr(e,t,n){return e.slice(t,n)}function rn(e){return e.length}function gb(e){return e.length}function Uo(e,t){return t.push(e),e}function nT(e,t){return e.map(t).join("")}function h0(e,t){return e.filter(function(n){return!Dn(n,t)})}var Cu=1,Ki=1,vb=0,Xt=0,$e=0,co="";function Eu(e,t,n,r,i,o,a,l){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:Cu,column:Ki,length:a,return:"",siblings:l}}function rr(e,t){return Qf(Eu("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function ui(e){for(;e.root;)e=rr(e.root,{children:[e]});Uo(e,e.siblings)}function rT(){return $e}function iT(){return $e=Xt>0?ze(co,--Xt):0,Ki--,$e===10&&(Ki=1,Cu--),$e}function un(){return $e=Xt<vb?ze(co,Xt++):0,Ki++,$e===10&&(Ki=1,Cu++),$e}function dr(){return ze(co,Xt)}function Hs(){return Xt}function ku(e,t){return Zr(co,e,t)}function Ea(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function oT(e){return Cu=Ki=1,vb=rn(co=e),Xt=0,[]}function aT(e){return co="",e}function Jc(e){return mb(ku(Xt-1,Zf(e===91?e+2:e===40?e+1:e)))}function sT(e){for(;($e=dr())&&$e<33;)un();return Ea(e)>2||Ea($e)>3?"":" "}function lT(e,t){for(;--t&&un()&&!($e<48||$e>102||$e>57&&$e<65||$e>70&&$e<97););return ku(e,Hs()+(t<6&&dr()==32&&un()==32))}function Zf(e){for(;un();)switch($e){case e:return Xt;case 34:case 39:e!==34&&e!==39&&Zf($e);break;case 40:e===41&&Zf(e);break;case 92:un();break}return Xt}function uT(e,t){for(;un()&&e+$e!==47+10;)if(e+$e===42+42&&dr()===47)break;return"/*"+ku(t,Xt-1)+"*"+Fh(e===47?e:un())}function cT(e){for(;!Ea(dr());)un();return ku(e,Xt)}function dT(e){return aT(Ws("",null,null,null,[""],e=oT(e),0,[0],e))}function Ws(e,t,n,r,i,o,a,l,s){for(var u=0,d=0,c=a,y=0,p=0,m=0,v=1,w=1,h=1,g=0,x="",S=i,T=o,k=r,C=x;w;)switch(m=g,g=un()){case 40:if(m!=108&&ze(C,c-1)==58){Us(C+=ne(Jc(g),"&","&\f"),"&\f",hb(u?l[u-1]:0))!=-1&&(h=-1);break}case 34:case 39:case 91:C+=Jc(g);break;case 9:case 10:case 13:case 32:C+=sT(m);break;case 92:C+=lT(Hs()-1,7);continue;case 47:switch(dr()){case 42:case 47:Uo(fT(uT(un(),Hs()),t,n,s),s),(Ea(m||1)==5||Ea(dr()||1)==5)&&rn(C)&&Zr(C,-1,void 0)!==" "&&(C+=" ");break;default:C+="/"}break;case 123*v:l[u++]=rn(C)*h;case 125*v:case 59:case 0:switch(g){case 0:case 125:w=0;case 59+d:h==-1&&(C=ne(C,/\f/g,"")),p>0&&(rn(C)-c||v===0&&m===47)&&Uo(p>32?g0(C+";",r,n,c-1,s):g0(ne(C," ","")+";",r,n,c-2,s),s);break;case 59:C+=";";default:if(Uo(k=m0(C,t,n,u,d,i,l,x,S=[],T=[],c,o),o),g===123)if(d===0)Ws(C,t,k,k,S,o,c,l,T);else{switch(y){case 99:if(ze(C,3)===110)break;case 108:if(ze(C,2)===97)break;default:d=0;case 100:case 109:case 115:}d?Ws(e,k,k,r&&Uo(m0(e,k,k,0,0,i,l,x,i,S=[],c,T),T),i,T,c,l,r?S:T):Ws(C,k,k,k,[""],T,0,l,T)}}u=d=p=0,v=h=1,x=C="",c=a;break;case 58:c=1+rn(C),p=m;default:if(v<1){if(g==123)--v;else if(g==125&&v++==0&&iT()==125)continue}switch(C+=Fh(g),g*v){case 38:h=d>0?1:(C+="\f",-1);break;case 44:l[u++]=(rn(C)-1)*h,h=1;break;case 64:dr()===45&&(C+=Jc(un())),y=dr(),d=c=rn(x=C+=cT(Hs())),g++;break;case 45:m===45&&rn(C)==2&&(v=0)}}return o}function m0(e,t,n,r,i,o,a,l,s,u,d,c){for(var y=i-1,p=i===0?o:[""],m=gb(p),v=0,w=0,h=0;v<r;++v)for(var g=0,x=Zr(e,y+1,y=hb(w=a[v])),S=e;g<m;++g)(S=mb(w>0?p[g]+" "+x:ne(x,/&\f/g,p[g])))&&(s[h++]=S);return Eu(e,t,n,i===0?_u:l,s,u,d,c)}function fT(e,t,n,r){return Eu(e,t,n,fb,Fh(rT()),Zr(e,2,-2),0,r)}function g0(e,t,n,r,i){return Eu(e,t,n,Rh,Zr(e,0,r),Zr(e,r+1,-1),r,i)}function yb(e,t,n){switch(tT(e,t)){case 5103:return ue+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return ue+e+e;case 4855:return ue+e.replace("add","source-over").replace("substract","source-out").replace("intersect","source-in").replace("exclude","xor")+e;case 4789:return ra+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return ue+e+ra+e+ye+e+e;case 5936:switch(ze(e,t+11)){case 114:return ue+e+ye+ne(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return ue+e+ye+ne(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return ue+e+ye+ne(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return ue+e+ye+e+e;case 6165:return ue+e+ye+"flex-"+e+e;case 5187:return ue+e+ne(e,/(\w+).+(:[^]+)/,ue+"box-$1$2"+ye+"flex-$1$2")+e;case 5443:return ue+e+ye+"flex-item-"+ne(e,/flex-|-self/g,"")+(Dn(e,/flex-|baseline/)?"":ye+"grid-row-"+ne(e,/flex-|-self/g,""))+e;case 4675:return ue+e+ye+"flex-line-pack"+ne(e,/align-content|flex-|-self/g,"")+e;case 5548:return ue+e+ye+ne(e,"shrink","negative")+e;case 5292:return ue+e+ye+ne(e,"basis","preferred-size")+e;case 6060:return ue+"box-"+ne(e,"-grow","")+ue+e+ye+ne(e,"grow","positive")+e;case 4554:return ue+ne(e,/([^-])(transform)/g,"$1"+ue+"$2")+e;case 6187:return ne(ne(ne(e,/(zoom-|grab)/,ue+"$1"),/(image-set)/,ue+"$1"),e,"")+e;case 5495:case 3959:return ne(e,/(image-set\([^]*)/,ue+"$1$`$1");case 4968:return ne(ne(e,/(.+:)(flex-)?(.*)/,ue+"box-pack:$3"+ye+"flex-pack:$3"),/space-between/,"justify")+ue+e+e;case 4200:if(!Dn(e,/flex-|baseline/))return ye+"grid-column-align"+Zr(e,t)+e;break;case 2592:case 3360:return ye+ne(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,i){return t=i,Dn(r.props,/grid-\w+-end/)})?~Us(e+(n=n[t].value),"span",0)?e:ye+ne(e,"-start","")+e+ye+"grid-row-span:"+(~Us(n,"span",0)?Dn(n,/\d+/):+Dn(n,/\d+/)-+Dn(e,/\d+/))+";":ye+ne(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return Dn(r.props,/grid-\w+-start/)})?e:ye+ne(ne(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return ne(e,/(.+)-inline(.+)/,ue+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(rn(e)-1-t>6)switch(ze(e,t+1)){case 109:if(ze(e,t+4)!==45)break;case 102:return ne(e,/(.+:)(.+)-([^]+)/,"$1"+ue+"$2-$3$1"+ra+(ze(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Us(e,"stretch",0)?yb(ne(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return ne(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,o,a,l,s,u){return ye+i+":"+o+u+(a?ye+i+"-span:"+(l?s:+s-+o)+u:"")+e});case 4949:if(ze(e,t+6)===121)return ne(e,":",":"+ue)+e;break;case 6444:switch(ze(e,ze(e,14)===45?18:11)){case 120:return ne(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+ue+(ze(e,14)===45?"inline-":"")+"box$3$1"+ue+"$2$3$1"+ye+"$2box$3")+e;case 100:return ne(e,":",":"+ye)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return ne(e,"scroll-","scroll-snap-")+e}return e}function $l(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function pT(e,t,n,r){switch(e.type){case eT:if(e.children.length)break;case Zk:case Jk:case Rh:return e.return=e.return||e.value;case fb:return"";case pb:return e.return=e.value+"{"+$l(e.children,r)+"}";case _u:if(!rn(e.value=e.props.join(",")))return""}return rn(n=$l(e.children,r))?e.return=e.value+"{"+n+"}":""}function hT(e){var t=gb(e);return function(n,r,i,o){for(var a="",l=0;l<t;l++)a+=e[l](n,r,i,o)||"";return a}}function mT(e){return function(t){t.root||(t=t.return)&&e(t)}}function gT(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case Rh:e.return=yb(e.value,e.length,n);return;case pb:return $l([rr(e,{value:ne(e.value,"@","@"+ue)})],r);case _u:if(e.length)return nT(n=e.props,function(i){switch(Dn(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":ui(rr(e,{props:[ne(i,/:(read-\w+)/,":"+ra+"$1")]})),ui(rr(e,{props:[i]})),Qf(e,{props:h0(n,r)});break;case"::placeholder":ui(rr(e,{props:[ne(i,/:(plac\w+)/,":"+ue+"input-$1")]})),ui(rr(e,{props:[ne(i,/:(plac\w+)/,":"+ra+"$1")]})),ui(rr(e,{props:[ne(i,/:(plac\w+)/,ye+"input-$1")]})),ui(rr(e,{props:[i]})),Qf(e,{props:h0(n,r)});break}return""})}}var vT={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Qi=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",xb="active",bb="data-styled-version",Tu="6.3.11",zh=`/*!sc*/
`,ia=typeof window<"u"&&typeof document<"u",yT=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY),xT={};function Ba(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var Gs=new Map,Il=new Map,qs=1,Ho=function(e){if(Gs.has(e))return Gs.get(e);for(;Il.has(qs);)qs++;var t=qs++;return Gs.set(e,t),Il.set(t,e),t},bT=function(e,t){qs=t+1,Gs.set(e,t),Il.set(t,e)},Nh=Object.freeze([]),Zi=Object.freeze({});function wb(e,t,n){return n===void 0&&(n=Zi),e.theme!==n.theme&&e.theme||t||n.theme}var Sb=new Set(["a","abbr","address","area","article","aside","audio","b","bdi","bdo","blockquote","body","button","br","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","main","map","mark","menu","meter","nav","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","slot","small","span","strong","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","switch","symbol","text","textPath","tspan","use"]),wT=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,ST=/(^-|-$)/g;function v0(e){return e.replace(wT,"-").replace(ST,"")}var _T=/(a)(d)/gi,y0=function(e){return String.fromCharCode(e+(e>25?39:97))};function Jf(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=y0(t%52)+n;return(y0(t%52)+n).replace(_T,"$1-$2")}var ed,Ar=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},_b=function(e){return Ar(5381,e)};function Bh(e){return Jf(_b(e)>>>0)}function CT(e){return e.displayName||e.name||"Component"}function td(e){return typeof e=="string"&&!0}var Cb=typeof Symbol=="function"&&Symbol.for,Eb=Cb?Symbol.for("react.memo"):60115,ET=Cb?Symbol.for("react.forward_ref"):60112,kT={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},TT={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},kb={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},PT=((ed={})[ET]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},ed[Eb]=kb,ed);function x0(e){return("type"in(t=e)&&t.type.$$typeof)===Eb?kb:"$$typeof"in e?PT[e.$$typeof]:kT;var t}var OT=Object.defineProperty,jT=Object.getOwnPropertyNames,b0=Object.getOwnPropertySymbols,MT=Object.getOwnPropertyDescriptor,$T=Object.getPrototypeOf,w0=Object.prototype;function Tb(e,t,n){if(typeof t!="string"){if(w0){var r=$T(t);r&&r!==w0&&Tb(e,r,n)}var i=jT(t);b0&&(i=i.concat(b0(t)));for(var o=x0(e),a=x0(t),l=0;l<i.length;++l){var s=i[l];if(!(s in TT||n&&n[s]||a&&s in a||o&&s in o)){var u=MT(t,s);try{OT(e,s,u)}catch{}}}}return e}function Ji(e){return typeof e=="function"}function Vh(e){return typeof e=="object"&&"styledComponentId"in e}function Ur(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Dl(e,t){return e.join(t||"")}function ka(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function ep(e,t,n){if(n===void 0&&(n=!1),!n&&!ka(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=ep(e[r],t[r]);else if(ka(t))for(var r in t)e[r]=ep(e[r],t[r]);return e}function Uh(e,t){Object.defineProperty(e,"toString",{value:t})}var IT=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t,this._cGroup=0,this._cIndex=0}return e.prototype.indexOfGroup=function(t){if(t===this._cGroup)return this._cIndex;var n=this._cIndex;if(t>this._cGroup)for(var r=this._cGroup;r<t;r++)n+=this.groupSizes[r];else for(r=this._cGroup-1;r>=t;r--)n-=this.groupSizes[r];return this._cGroup=t,this._cIndex=n,n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,o=i;t>=o;)if((o<<=1)<0)throw Ba(16,"".concat(t));this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var a=i;a<o;a++)this.groupSizes[a]=0}for(var l=this.indexOfGroup(t+1),s=0,u=(a=0,n.length);a<u;a++)this.tag.insertRule(l,n[a])&&(this.groupSizes[t]++,l++,s++);s>0&&this._cGroup>t&&(this._cIndex+=s)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),i=r+n;this.groupSizes[t]=0;for(var o=r;o<i;o++)this.tag.deleteRule(r);n>0&&this._cGroup>t&&(this._cIndex-=n)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],i=this.indexOfGroup(t),o=i+r,a=i;a<o;a++)n+=this.tag.getRule(a)+zh;return n},e}(),DT="style[".concat(Qi,"][").concat(bb,'="').concat(Tu,'"]'),LT=new RegExp("^".concat(Qi,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),S0=function(e){return typeof ShadowRoot<"u"&&e instanceof ShadowRoot||"host"in e&&e.nodeType===11},tp=function(e){if(!e)return document;if(S0(e))return e;if("getRootNode"in e){var t=e.getRootNode();if(S0(t))return t}return document},AT=function(e,t,n){for(var r,i=n.split(","),o=0,a=i.length;o<a;o++)(r=i[o])&&e.registerName(t,r)},RT=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(zh),i=[],o=0,a=r.length;o<a;o++){var l=r[o].trim();if(l){var s=l.match(LT);if(s){var u=0|parseInt(s[1],10),d=s[2];u!==0&&(bT(d,u),AT(e,d,s[3]),e.getTag().insertRules(u,i)),i.length=0}else i.push(l)}}},nd=function(e){for(var t=tp(e.options.target).querySelectorAll(DT),n=0,r=t.length;n<r;n++){var i=t[n];i&&i.getAttribute(Qi)!==xb&&(RT(e,i),i.parentNode&&i.parentNode.removeChild(i))}};function FT(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Pb=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(l){var s=Array.from(l.querySelectorAll("style[".concat(Qi,"]")));return s[s.length-1]}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(Qi,xb),r.setAttribute(bb,Tu);var a=FT();return a&&r.setAttribute("nonce",a),n.insertBefore(r,o),r},zT=function(){function e(t){this.element=Pb(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){var r;if(n.sheet)return n.sheet;for(var i=(r=n.getRootNode().styleSheets)!==null&&r!==void 0?r:document.styleSheets,o=0,a=i.length;o<a;o++){var l=i[o];if(l.ownerNode===n)return l}throw Ba(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),NT=function(){function e(t){this.element=Pb(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),BT=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(t===this.length?this.rules.push(n):this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),_0=ia,VT={isServer:!ia,useCSSOMInjection:!yT},Ll=function(){function e(t,n,r){t===void 0&&(t=Zi),n===void 0&&(n={});var i=this;this.options=at(at({},VT),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&ia&&_0&&(_0=!1,nd(this)),Uh(this,function(){return function(o){for(var a=o.getTag(),l=a.length,s="",u=function(c){var y=function(h){return Il.get(h)}(c);if(y===void 0)return"continue";var p=o.names.get(y);if(p===void 0||!p.size)return"continue";var m=a.getGroup(c);if(m.length===0)return"continue";var v=Qi+".g"+c+'[id="'+y+'"]',w="";p.forEach(function(h){h.length>0&&(w+=h+",")}),s+=m+v+'{content:"'+w+'"}'+zh},d=0;d<l;d++)u(d);return s}(i)})}return e.registerId=function(t){return Ho(t)},e.prototype.rehydrate=function(){!this.server&&ia&&nd(this)},e.prototype.reconstructWithOptions=function(t,n){n===void 0&&(n=!0);var r=new e(at(at({},this.options),t),this.gs,n&&this.names||void 0);return!this.server&&ia&&t.target!==this.options.target&&tp(this.options.target)!==tp(t.target)&&nd(r),r},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new BT(i):r?new zT(i):new NT(i)}(this.options),new IT(t)));var t},e.prototype.hasNameForId=function(t,n){var r,i;return(i=(r=this.names.get(t))===null||r===void 0?void 0:r.has(n))!==null&&i!==void 0&&i},e.prototype.registerName=function(t,n){Ho(t);var r=this.names.get(t);r?r.add(n):this.names.set(t,new Set([n]))},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(Ho(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(Ho(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),UT=/&/g,Ln=47,Rr=42;function C0(e){if(e.indexOf("}")===-1)return!1;for(var t=e.length,n=0,r=0,i=!1,o=0;o<t;o++){var a=e.charCodeAt(o);if(r!==0||i||a!==Ln||e.charCodeAt(o+1)!==Rr)if(i)a===Rr&&e.charCodeAt(o+1)===Ln&&(i=!1,o++);else if(a!==34&&a!==39||o!==0&&e.charCodeAt(o-1)===92){if(r===0){if(a===123)n++;else if(a===125&&--n<0)return!0}}else r===0?r=a:r===a&&(r=0);else i=!0,o++}return n!==0||r!==0}function Ob(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=Ob(n.children,t)),n})}function HT(e){var t,n,r,i=e===void 0?Zi:e,o=i.options,a=o===void 0?Zi:o,l=i.plugins,s=l===void 0?Nh:l,u=function(m,v,w){return w.startsWith(n)&&w.endsWith(n)&&w.replaceAll(n,"").length>0?".".concat(t):m},d=s.slice();d.push(function(m){m.type===_u&&m.value.includes("&")&&(r||(r=new RegExp("\\".concat(n,"\\b"),"g")),m.props[0]=m.props[0].replace(UT,n).replace(r,u))}),a.prefix&&d.push(gT),d.push(pT);var c=[],y=hT(d.concat(mT(function(m){return c.push(m)}))),p=function(m,v,w,h){v===void 0&&(v=""),w===void 0&&(w=""),h===void 0&&(h="&"),t=h,n=v,r=void 0;var g=function(S){if(!C0(S))return S;for(var T=S.length,k="",C=0,_=0,$=0,M=!1,R=0;R<T;R++){var L=S.charCodeAt(R);if($!==0||M||L!==Ln||S.charCodeAt(R+1)!==Rr)if(M)L===Rr&&S.charCodeAt(R+1)===Ln&&(M=!1,R++);else if(L!==34&&L!==39||R!==0&&S.charCodeAt(R-1)===92){if($===0)if(L===123)_++;else if(L===125){if(--_<0){for(var j=R+1;j<T;){var F=S.charCodeAt(j);if(F===59||F===10)break;j++}j<T&&S.charCodeAt(j)===59&&j++,_=0,R=j-1,C=j;continue}_===0&&(k+=S.substring(C,R+1),C=R+1)}else L===59&&_===0&&(k+=S.substring(C,R+1),C=R+1)}else $===0?$=L:$===L&&($=0);else M=!0,R++}if(C<T){var A=S.substring(C);C0(A)||(k+=A)}return k}(function(S){if(S.indexOf("//")===-1)return S;for(var T=S.length,k=[],C=0,_=0,$=0,M=0;_<T;){var R=S.charCodeAt(_);if(R!==34&&R!==39||_!==0&&S.charCodeAt(_-1)===92)if($===0)if(R===Ln&&_+1<T&&S.charCodeAt(_+1)===Rr){for(_+=2;_+1<T&&(S.charCodeAt(_)!==Rr||S.charCodeAt(_+1)!==Ln);)_++;_+=2}else if(R===40&&_>=3&&(32|S.charCodeAt(_-1))==108&&(32|S.charCodeAt(_-2))==114&&(32|S.charCodeAt(_-3))==117)M=1,_++;else if(M>0)R===41?M--:R===40&&M++,_++;else if(R===Rr&&_+1<T&&S.charCodeAt(_+1)===Ln)_>C&&k.push(S.substring(C,_)),C=_+=2;else if(R===Ln&&_+1<T&&S.charCodeAt(_+1)===Ln){for(_>C&&k.push(S.substring(C,_));_<T&&S.charCodeAt(_)!==10;)_++;C=_}else _++;else _++;else $===0?$=R:$===R&&($=0),_++}return C===0?S:(C<T&&k.push(S.substring(C)),k.join(""))}(m)),x=dT(w||v?"".concat(w," ").concat(v," { ").concat(g," }"):g);return a.namespace&&(x=Ob(x,a.namespace)),c=[],$l(x,y),c};return p.hash=s.length?s.reduce(function(m,v){return v.name||Ba(15),Ar(m,v.name)},5381).toString():"",p}var WT=new Ll,np=HT(),jb=Y.createContext({shouldForwardProp:void 0,styleSheet:WT,stylis:np});jb.Consumer;Y.createContext(void 0);function rp(){return Y.useContext(jb)}var Mb=function(){function e(t,n){var r=this;this.inject=function(i,o){o===void 0&&(o=np);var a=r.name+o.hash;i.hasNameForId(r.id,a)||i.insertRules(r.id,a,o(r.rules,a,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,Uh(this,function(){throw Ba(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=np),this.name+t.hash},e}();function GT(e,t){return t==null||typeof t=="boolean"||t===""?"":typeof t!="number"||t===0||e in vT||e.startsWith("--")?String(t).trim():"".concat(t,"px")}var qT=function(e){return e>="A"&&e<="Z"};function E0(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;qT(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var $b=function(e){return e==null||e===!1||e===""},Ib=function(e){var t=[];for(var n in e){var r=e[n];e.hasOwnProperty(n)&&!$b(r)&&(Array.isArray(r)&&r.isCss||Ji(r)?t.push("".concat(E0(n),":"),r,";"):ka(r)?t.push.apply(t,Xi(Xi(["".concat(n," {")],Ib(r),!1),["}"],!1)):t.push("".concat(E0(n),": ").concat(GT(n,r),";")))}return t};function Sr(e,t,n,r,i){if(i===void 0&&(i=[]),typeof e=="string")return e&&i.push(e),i;if($b(e))return i;if(Vh(e))return i.push(".".concat(e.styledComponentId)),i;if(Ji(e)){if(!Ji(a=e)||a.prototype&&a.prototype.isReactComponent||!t)return i.push(e),i;var o=e(t);return Sr(o,t,n,r,i)}var a;if(e instanceof Mb)return n?(e.inject(n,r),i.push(e.getName(r))):i.push(e),i;if(ka(e)){for(var l=Ib(e),s=0;s<l.length;s++)i.push(l[s]);return i}if(!Array.isArray(e))return i.push(e.toString()),i;for(s=0;s<e.length;s++)Sr(e[s],t,n,r,i);return i}function Db(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Ji(n)&&!Vh(n))return!1}return!0}var YT=_b(Tu),XT=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&Db(t),this.componentId=n,this.baseHash=Ar(YT,n),this.baseStyle=r,Ll.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r).className:"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=Ur(i,this.staticRulesId);else{var o=Dl(Sr(this.rules,t,n,r)),a=Jf(Ar(this.baseHash,o)>>>0);if(!n.hasNameForId(this.componentId,a)){var l=r(o,".".concat(a),void 0,this.componentId);n.insertRules(this.componentId,a,l)}i=Ur(i,a),this.staticRulesId=a}else{for(var s=Ar(this.baseHash,r.hash),u="",d=0;d<this.rules.length;d++){var c=this.rules[d];if(typeof c=="string")u+=c;else if(c){var y=Dl(Sr(c,t,n,r));s=Ar(Ar(s,String(d)),y),u+=y}}if(u){var p=Jf(s>>>0);if(!n.hasNameForId(this.componentId,p)){var m=r(u,".".concat(p),void 0,this.componentId);n.insertRules(this.componentId,p,m)}i=Ur(i,p)}}return{className:i,css:typeof window>"u"?n.getTag().getGroup(Ho(this.componentId)):""}},e}(),Hh=Y.createContext(void 0);Hh.Consumer;var rd={};function KT(e,t,n){var r=Vh(e),i=e,o=!td(e),a=t.attrs,l=a===void 0?Nh:a,s=t.componentId,u=s===void 0?function(S,T){var k=typeof S!="string"?"sc":v0(S);rd[k]=(rd[k]||0)+1;var C="".concat(k,"-").concat(Bh(Tu+k+rd[k]));return T?"".concat(T,"-").concat(C):C}(t.displayName,t.parentComponentId):s,d=t.displayName,c=d===void 0?function(S){return td(S)?"styled.".concat(S):"Styled(".concat(CT(S),")")}(e):d,y=t.displayName&&t.componentId?"".concat(v0(t.displayName),"-").concat(t.componentId):t.componentId||u,p=r&&i.attrs?i.attrs.concat(l).filter(Boolean):l,m=t.shouldForwardProp;if(r&&i.shouldForwardProp){var v=i.shouldForwardProp;if(t.shouldForwardProp){var w=t.shouldForwardProp;m=function(S,T){return v(S,T)&&w(S,T)}}else m=v}var h=new XT(n,y,r?i.componentStyle:void 0);function g(S,T){return function(k,C,_){var $=k.attrs,M=k.componentStyle,R=k.defaultProps,L=k.foldedComponentIds,j=k.styledComponentId,F=k.target,A=Y.useContext(Hh),O=rp(),D=k.shouldForwardProp||O.shouldForwardProp,P=wb(C,A,R)||Zi,I=function(X,ee,fe){for(var be,ie=at(at({},ee),{className:void 0,theme:fe}),Me=0;Me<X.length;Me+=1){var Be=Ji(be=X[Me])?be(ie):be;for(var Ve in Be)Ve==="className"?ie.className=Ur(ie.className,Be[Ve]):Ve==="style"?ie.style=at(at({},ie.style),Be[Ve]):ie[Ve]=Be[Ve]}return"className"in ee&&typeof ee.className=="string"&&(ie.className=Ur(ie.className,ee.className)),ie}($,C,P),z=I.as||F,B={};for(var N in I)I[N]===void 0||N[0]==="$"||N==="as"||N==="theme"&&I.theme===P||(N==="forwardedAs"?B.as=I.forwardedAs:D&&!D(N,z)||(B[N]=I[N]));var U=function(X,ee){var fe=rp(),be=X.generateAndInjectStyles(ee,fe.styleSheet,fe.stylis);return be}(M,I),H=U.className,q=Ur(L,j);return H&&(q+=" "+H),I.className&&(q+=" "+I.className),B[td(z)&&!Sb.has(z)?"class":"className"]=q,_&&(B.ref=_),b.createElement(z,B)}(x,S,T)}g.displayName=c;var x=Y.forwardRef(g);return x.attrs=p,x.componentStyle=h,x.displayName=c,x.shouldForwardProp=m,x.foldedComponentIds=r?Ur(i.foldedComponentIds,i.styledComponentId):"",x.styledComponentId=y,x.target=r?i.target:e,Object.defineProperty(x,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(S){this._foldedDefaultProps=r?function(T){for(var k=[],C=1;C<arguments.length;C++)k[C-1]=arguments[C];for(var _=0,$=k;_<$.length;_++)ep(T,$[_],!0);return T}({},i.defaultProps,S):S}}),Uh(x,function(){return".".concat(x.styledComponentId)}),o&&Tb(x,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),x}function k0(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var T0=function(e){return Object.assign(e,{isCss:!0})};function Wh(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(Ji(e)||ka(e))return T0(Sr(k0(Nh,Xi([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?Sr(r):T0(Sr(k0(r,t)))}function ip(e,t,n){if(n===void 0&&(n=Zi),!t)throw Ba(1,t);var r=function(i){for(var o=[],a=1;a<arguments.length;a++)o[a-1]=arguments[a];return e(t,n,Wh.apply(void 0,Xi([i],o,!1)))};return r.attrs=function(i){return ip(e,t,at(at({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return ip(e,t,at(at({},n),i))},r}var Lb=function(e){return ip(KT,e)},E=Lb;Sb.forEach(function(e){E[e]=Lb(e)});var QT=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=Db(t),Ll.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,r,i){var o=i(Dl(Sr(this.rules,n,r,i)),""),a=this.componentId+t;r.insertRules(a,a,o)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,r,i){t>2&&Ll.registerId(this.componentId+t);var o=this.componentId+t;this.isStatic?r.hasNameForId(o,o)||this.createStyles(t,n,r,i):(this.removeStyles(t,r),this.createStyles(t,n,r,i))},e}();function ZT(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=Wh.apply(void 0,Xi([e],t,!1)),i="sc-global-".concat(Bh(JSON.stringify(r))),o=new QT(r,i),a=new WeakMap,l=function(u){var d=rp(),c=Y.useContext(Hh),y=a.get(d.styleSheet);return y===void 0&&(y=d.styleSheet.allocateGSInstance(i),a.set(d.styleSheet,y)),(typeof window>"u"||!d.styleSheet.server)&&s(y,u,d.styleSheet,c,d.stylis),Y.useLayoutEffect(function(){return d.styleSheet.server||s(y,u,d.styleSheet,c,d.stylis),function(){var p;o.removeStyles(y,d.styleSheet),p=d.styleSheet.options.target,typeof document<"u"&&(p??document).querySelectorAll('style[data-styled-global="'.concat(i,'"]')).forEach(function(m){return m.remove()})}},[y,u,d.styleSheet,c,d.stylis]),null};function s(u,d,c,y,p){if(o.isStatic)o.renderStyles(u,xT,c,p);else{var m=at(at({},d),{theme:wb(d,y,l.defaultProps)});o.renderStyles(u,m,c,p)}}return Y.memo(l)}function Gh(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=Dl(Wh.apply(void 0,Xi([e],t,!1))),i=Bh(r);return new Mb(i,r)}const JT=E.div`
position: sticky;
  top: 0;
  z-index: 1000;
      background: radial-gradient(circle at 50% 45%, #5c5149 0%, #4b3c34 35%, #352b25 65%, #1b1412 100%);


`,eP=E.div`
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
`,tP=E.div`
width: 100%;
  display: flex;
      gap: 10px;

  flex-direction: column;
  @media screen and (min-width: 768px) {
    justify-content: space-around;
  }
`,nP=E.div`

  display: flex;
  @media screen and (max-width: 1023px) {
    justify-content: space-between;
  }
`,rP=E.div`
  display: flex;
  justify-content: space-around;

  @media screen and (min-width: 1023px) {
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    flex: 1;
  }
`;E(Oe)`
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
`;const iP=E(Oe)`
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
`;const oP=E.svg`
  width: 30px;
  height: 30px;
  fill: var(--white-color);
`,aP=E.button`
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
`;const sP=E.div`
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
`,lP=E.button`
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
`,uP=E.nav`
  display: flex;
  flex-direction: column;
  gap: 25px;
`,ci=E(Oe)`
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
`,cP=E.div`
  margin-top: auto;
  border-top: 1px solid #eee;
  padding-top: 20px;
  font-size: 14px;
  color: #888;
  text-align: center;
`,dP=E.div`
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
`,fP=E.div`
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
`,pP=E.input`
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
`,hP=E.button`
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
`,mP=E.svg`
  width: 24px;
  height: 24px;
`,gP=E.ul`
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
`,vP=E.li`
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


`,yP=E.img`
 width: 100px;
    height: 100px;
    object-fit: cover;
 `,xP=E.h3`
      text-align: left;
      font-size: 22px;
      font-weight: 800;

`,bP=E.h3`

      font-size: 22px;
         

`,wP=E.div`
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

    
`,cn="/Didiv/assets/symbol-defs-fb9ce9f0.svg",SP=()=>{const[e,t]=b.useState(""),[n,r]=b.useState([]),[i,o]=b.useState(!1),a=On(),l=b.useRef(null);b.useEffect(()=>{if(e.trim().length<2){r([]),o(!1);return}const u=setTimeout(async()=>{try{const c=await(await fetch(`https://backenddidiv-production.up.railway.app/api/products?filters[name][$containsi]=${e}&populate=*`)).json();r(c.data),o(!0)}catch(d){console.error(d)}},300);return()=>clearTimeout(u)},[e]),b.useEffect(()=>{const u=d=>{l.current&&!l.current.contains(d.target)&&o(!1)};return document.addEventListener("mousedown",u),()=>{document.removeEventListener("mousedown",u)}},[]);const s=u=>{t(""),o(!1),a(`/product/${u.id}`)};return f.jsxs(fP,{ref:l,children:[f.jsx(pP,{name:"site-search",value:e,onChange:u=>t(u.target.value),placeholder:"Пошук",autoComplete:"off",onFocus:()=>e.trim().length>=2&&o(!0)}),f.jsx(hP,{className:"search-button",children:f.jsx(mP,{children:f.jsx("use",{href:`${cn}#icon-search`})})}),i&&n.length>0&&f.jsx(gP,{children:n.map(u=>{var y,p;const c=u.new_price&&u.new_price<u.price?u.new_price:u.price;return f.jsxs(vP,{onClick:()=>s(u),children:[f.jsx(yP,{src:((p=(y=u.images)==null?void 0:y[0])==null?void 0:p.url)||"/nofoto.png",alt:""}),f.jsxs(wP,{children:[f.jsx(xP,{children:u.name}),f.jsxs(bP,{children:[c," грн."]})]})]},u.id)})})]})};var Ab={exports:{}},Rb={};/**
 * @license React
 * use-sync-external-store-with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Va=b;function _P(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var CP=typeof Object.is=="function"?Object.is:_P,EP=Va.useSyncExternalStore,kP=Va.useRef,TP=Va.useEffect,PP=Va.useMemo,OP=Va.useDebugValue;Rb.useSyncExternalStoreWithSelector=function(e,t,n,r,i){var o=kP(null);if(o.current===null){var a={hasValue:!1,value:null};o.current=a}else a=o.current;o=PP(function(){function s(p){if(!u){if(u=!0,d=p,p=r(p),i!==void 0&&a.hasValue){var m=a.value;if(i(m,p))return c=m}return c=p}if(m=c,CP(d,p))return m;var v=r(p);return i!==void 0&&i(m,v)?(d=p,m):(d=p,c=v)}var u=!1,d,c,y=n===void 0?null:n;return[function(){return s(t())},y===null?void 0:function(){return s(y())}]},[t,n,r,i]);var l=EP(e,o[0],o[1]);return TP(function(){a.hasValue=!0,a.value=l},[l]),OP(l),l};Ab.exports=Rb;var jP=Ab.exports;function MP(e){e()}function $P(){let e=null,t=null;return{clear(){e=null,t=null},notify(){MP(()=>{let n=e;for(;n;)n.callback(),n=n.next})},get(){const n=[];let r=e;for(;r;)n.push(r),r=r.next;return n},subscribe(n){let r=!0;const i=t={callback:n,next:null,prev:t};return i.prev?i.prev.next=i:e=i,function(){!r||e===null||(r=!1,i.next?i.next.prev=i.prev:t=i.prev,i.prev?i.prev.next=i.next:e=i.next)}}}}var P0={notify(){},get:()=>[]};function IP(e,t){let n,r=P0,i=0,o=!1;function a(v){d();const w=r.subscribe(v);let h=!1;return()=>{h||(h=!0,w(),c())}}function l(){r.notify()}function s(){m.onStateChange&&m.onStateChange()}function u(){return o}function d(){i++,n||(n=t?t.addNestedSub(s):e.subscribe(s),r=$P())}function c(){i--,n&&i===0&&(n(),n=void 0,r.clear(),r=P0)}function y(){o||(o=!0,d())}function p(){o&&(o=!1,c())}const m={addNestedSub:a,notifyNestedSubs:l,handleChangeWrapper:s,isSubscribed:u,trySubscribe:y,tryUnsubscribe:p,getListeners:()=>r};return m}var DP=()=>typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",LP=DP(),AP=()=>typeof navigator<"u"&&navigator.product==="ReactNative",RP=AP(),FP=()=>LP||RP?b.useLayoutEffect:b.useEffect,zP=FP(),id=Symbol.for("react-redux-context"),od=typeof globalThis<"u"?globalThis:{};function NP(){if(!b.createContext)return{};const e=od[id]??(od[id]=new Map);let t=e.get(b.createContext);return t||(t=b.createContext(null),e.set(b.createContext,t)),t}var Er=NP();function BP(e){const{children:t,context:n,serverState:r,store:i}=e,o=b.useMemo(()=>{const s=IP(i);return{store:i,subscription:s,getServerState:r?()=>r:void 0}},[i,r]),a=b.useMemo(()=>i.getState(),[i]);zP(()=>{const{subscription:s}=o;return s.onStateChange=s.notifyNestedSubs,s.trySubscribe(),a!==i.getState()&&s.notifyNestedSubs(),()=>{s.tryUnsubscribe(),s.onStateChange=void 0}},[o,a]);const l=n||Er;return b.createElement(l.Provider,{value:o},t)}var VP=BP;function qh(e=Er){return function(){return b.useContext(e)}}var Fb=qh();function zb(e=Er){const t=e===Er?Fb:qh(e),n=()=>{const{store:r}=t();return r};return Object.assign(n,{withTypes:()=>n}),n}var UP=zb();function HP(e=Er){const t=e===Er?UP:zb(e),n=()=>t().dispatch;return Object.assign(n,{withTypes:()=>n}),n}var jn=HP(),WP=(e,t)=>e===t;function GP(e=Er){const t=e===Er?Fb:qh(e),n=(r,i={})=>{const{equalityFn:o=WP}=typeof i=="function"?{equalityFn:i}:i,a=t(),{store:l,subscription:s,getServerState:u}=a;b.useRef(!0);const d=b.useCallback({[r.name](y){return r(y)}}[r.name],[r]),c=jP.useSyncExternalStoreWithSelector(s.addNestedSub,l.getState,u||l.getState,d,o);return b.useDebugValue(c),c};return Object.assign(n,{withTypes:()=>n}),n}var st=GP();const qP=E(Oe)`
      display: flex;
    align-items: center;
    align-content: center;
    justify-content: center;
    
    @media screen and (min-width: 1023px) {
   order: 2;
  margin-right: 10px;
  
  }
       
`,YP=E.svg`
  width: 30px;
  height: 30px;
 fill: var(--white-color);
`,XP=E.div`

width:30px;
height:30px;

  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 28px; 
  cursor: pointer;
`,KP=E.div`
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
`,QP=({onClick:e})=>{const t=st(n=>n.cart.items.length);return f.jsx(qP,{to:"/cart",children:f.jsxs(XP,{onClick:e,children:[f.jsx(YP,{children:f.jsx("use",{href:`${cn}#icon-cart`})}),t>0&&f.jsx(KP,{children:t})]})})},ZP=E.nav`
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
`,di=E(Oe)`
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
`,JP=()=>f.jsxs(ZP,{children:[f.jsx(di,{to:"/",children:"Головна"}),f.jsx(di,{to:"/catalog",children:"Каталог"}),f.jsx(di,{to:"/catalog/new",children:"Новинки"}),f.jsx(di,{to:"/catalog/sale",children:"Акційні товари"}),f.jsx(di,{to:"/about",children:"Про нас"}),f.jsx(di,{to:"/contacts",children:"Контакти"})]}),eO=E.svg`
  width: 24px;
  height: 24px;
  fill: var(--white-color);
`,tO=E(Oe)`
      display: flex;
    align-items: center;
    align-content: center;
    justify-content: center;
    
    @media screen and (min-width: 1023px) {
   order: 2;
 
  }
       
`,nO=E.div`

width:30px;
height:30px;

  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 28px; /* розмір іконки */
  cursor: pointer;
`,rO=E.div`

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
`,iO=({onClick:e})=>{const t=st(n=>n.favorites.items.length);return f.jsx(tO,{to:"/favorite",children:f.jsxs(nO,{onClick:e,children:[f.jsx(eO,{children:f.jsx("use",{href:`${cn}#icon-heart`})}),t>0&&f.jsx(rO,{children:t})]})})};/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nb=(...e)=>e.filter((t,n,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===n).join(" ").trim();/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oO=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aO=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,n,r)=>r?r.toUpperCase():n.toLowerCase());/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O0=e=>{const t=aO(e);return t.charAt(0).toUpperCase()+t.slice(1)};/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var sO={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lO=e=>{for(const t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0;return!1};/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uO=b.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:i="",children:o,iconNode:a,...l},s)=>b.createElement("svg",{ref:s,...sO,width:t,height:t,stroke:e,strokeWidth:r?Number(n)*24/Number(t):n,className:Nb("lucide",i),...!o&&!lO(l)&&{"aria-hidden":"true"},...l},[...a.map(([u,d])=>b.createElement(u,d)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nt=(e,t)=>{const n=b.forwardRef(({className:r,...i},o)=>b.createElement(uO,{ref:o,iconNode:t,className:Nb(`lucide-${oO(O0(e))}`,`lucide-${e}`,r),...i}));return n.displayName=O0(e),n};/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cO=[["path",{d:"m3 16 4 4 4-4",key:"1co6wj"}],["path",{d:"M7 20V4",key:"1yoxec"}],["path",{d:"M11 4h4",key:"6d7r33"}],["path",{d:"M11 8h7",key:"djye34"}],["path",{d:"M11 12h10",key:"1438ji"}]],Pu=Nt("arrow-down-narrow-wide",cO);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dO=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],Ou=Nt("arrow-right",dO);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fO=[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"M9 9h.01",key:"1q5me6"}],["path",{d:"M15 15h.01",key:"lqbp3k"}]],pO=Nt("badge-percent",fO);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hO=[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",key:"mvr1a0"}]],ju=Nt("heart",hO);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mO=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"r6nss1"}]],gO=Nt("house",mO);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vO=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],yO=Nt("info",vO);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xO=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 .83.18 2 2 0 0 0 .83-.18l8.58-3.9a1 1 0 0 0 0-1.831z",key:"zzgyd3"}],["path",{d:"M16 17h6",key:"1ook5g"}],["path",{d:"M19 14v6",key:"1ckrd5"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 .825.178",key:"1ia9y3"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l2.116-.962",key:"jksky3"}]],bO=Nt("layers-plus",xO);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wO=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],SO=Nt("mail",wO);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _O=[["path",{d:"M16 10a4 4 0 0 1-8 0",key:"1ltviw"}],["path",{d:"M3.103 6.034h17.794",key:"awc11p"}],["path",{d:"M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z",key:"o988cm"}]],CO=Nt("shopping-bag",_O);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EO=[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]],fo=Nt("shopping-cart",EO);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kO=[["path",{d:"M10 5H3",key:"1qgfaw"}],["path",{d:"M12 19H3",key:"yhmn1j"}],["path",{d:"M14 3v4",key:"1sua03"}],["path",{d:"M16 17v4",key:"1q0r14"}],["path",{d:"M21 12h-9",key:"1o4lsq"}],["path",{d:"M21 19h-5",key:"1rlt1p"}],["path",{d:"M21 5h-7",key:"1oszz2"}],["path",{d:"M8 10v4",key:"tgpxqk"}],["path",{d:"M8 12H3",key:"a7s4jb"}]],Bb=Nt("sliders-horizontal",kO);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TO=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],Vb=Nt("trash-2",TO);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PO=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Ub=Nt("x",PO),OO=()=>{const[e,t]=b.useState(!1);return f.jsx(JT,{children:f.jsx(eP,{children:f.jsxs(tP,{children:[f.jsxs(nP,{children:[f.jsx(iP,{to:"/",children:"Дідів хлів"}),f.jsxs(rP,{children:[f.jsx(QP,{}),f.jsx(iO,{}),f.jsx(JP,{}),f.jsx(aP,{onClick:()=>t(!e),children:f.jsx(oP,{children:f.jsx("use",{href:`${cn}#icon-menu`})})}),f.jsx(dP,{open:e,onClick:()=>t(!1)}),f.jsxs(sP,{open:e,children:[f.jsx(lP,{onClick:()=>t(!1),children:f.jsx(Ub,{size:28,strokeWidth:1.5})}),f.jsxs(uP,{children:[f.jsxs(ci,{onClick:()=>t(!1),to:"/",children:[f.jsx(gO,{size:22,strokeWidth:1.5})," Головна"]}),f.jsxs(ci,{onClick:()=>t(!1),to:"/catalog",children:[f.jsx(CO,{size:22,strokeWidth:1.5})," Каталог"]}),f.jsxs(ci,{onClick:()=>t(!1),to:"/catalog/new",children:[f.jsx(bO,{size:22,strokeWidth:1.5}),"Новинки"]}),f.jsxs(ci,{onClick:()=>t(!1),to:"/catalog/sale",children:[f.jsx(pO,{size:22,strokeWidth:1.5}),"Акційні товари"]}),f.jsxs(ci,{onClick:()=>t(!1),to:"/about",children:[f.jsx(yO,{size:22,strokeWidth:1.5})," Про нас"]}),f.jsxs(ci,{onClick:()=>t(!1),to:"/contacts",children:[f.jsx(SO,{size:22,strokeWidth:1.5})," Контакти"]})]}),f.jsx(cP,{children:f.jsx("p",{children:"© 2020 Дідів Хлів"})})]})]})]}),f.jsx(SP,{})]})})})},jO=E.div`

   background: radial-gradient(
    circle at 50% 45%,
    #5c5149 0%,
    #4b3c34 35%,
    #352b25 65%,
    #1b1412 100%
  );
`,MO=E.footer`
 
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
`,$O=E.div`
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
`,ad=E.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center; /* Центруємо контент всередині колонки */

  @media screen and (min-width: 768px) {
    align-items: flex-start; /* На десктопі — по лівому краю */
    min-width: 150px;
    flex: 1;
  }
`,sd=E.h3`
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
`,vn=E(Oe)`
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
`,IO=E.div`
  display: flex;
  gap: 20px;
  margin-top: 10px;
  justify-content: center;

  @media screen and (min-width: 768px) {
    justify-content: flex-start;
  }
`,ld=E.a`
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
`,DO=()=>f.jsx(jO,{children:f.jsxs(MO,{children:[f.jsxs($O,{children:[f.jsxs(ad,{children:[f.jsx(sd,{children:"Навігація"}),f.jsx(vn,{to:"/",children:"Головна"}),f.jsx(vn,{to:"/about",children:"Про нас"}),f.jsx(vn,{to:"/catalog",children:"Каталог"}),f.jsx(vn,{to:"/contacts",children:"Контакти"})]}),f.jsxs(ad,{children:[f.jsx(sd,{children:"Інформація"}),f.jsx(vn,{to:"/delivery",children:"Оплата і доставка"}),f.jsx(vn,{children:"Повернення"}),f.jsx(vn,{children:"Гарантія"}),f.jsx(vn,{children:"Політика конфіденційності"})]})]}),f.jsxs(ad,{children:[f.jsx(sd,{children:"Контакти"}),f.jsx(vn,{href:"tel:+380979999999",children:"+38 (097) 999-99-99"}),f.jsx(vn,{href:"mailto:email@email.com",children:"email@email.com"}),f.jsxs(IO,{children:[f.jsx(ld,{href:"https://www.instagram.com/didivxliv?igsh=MXhsNWRjdW5rajYwdQ==",target:"_blank",rel:"noopener noreferrer",children:f.jsx("svg",{width:"20px",children:f.jsx("use",{href:`${cn}#icon-instagram`})})}),f.jsx(ld,{href:"https://t.me/didivxliv",target:"_blank",rel:"noopener noreferrer",children:f.jsx("svg",{width:"20px",children:f.jsx("use",{href:`${cn}#icon-telegram`})})}),f.jsx(ld,{href:"https://www.olx.ua/uk/hobbi-otdyh-i-sport/velo/q-%D0%B4%D1%96%D0%B4%D1%96%D0%B2-%D1%85%D0%BB%D1%96%D0%B2/?srsltid=AfmBOoqjzHkKNGxhNyAXVf2_KVV6h3JQFklEk0AjrDFh7tlO2-HZJPSS",target:"_blank",rel:"noopener noreferrer",children:f.jsx("svg",{width:"27px",height:"27px",style:{marginTop:"5px"},children:f.jsx("use",{href:`${cn}#icon-olx`})})})]})]})]})}),LO=()=>f.jsxs(f.Fragment,{children:[f.jsx(OO,{}),f.jsx("main",{style:{flex:1},children:f.jsx($C,{})}),f.jsx(DO,{})]}),AO=E.section`

  width: 100%;
  font-family: var(--main-font);
  padding-top: 30px;
  
  
`,RO=E.h2`
   font-size: 30px;
      text-transform: uppercase;
  font-weight: 700;
  margin-bottom: 20px;
  color: #333;
      text-align: center;

  @media screen and (min-width: 768px) {
 font-size: 35px;

  }

`,FO=E.div`
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
`,zO=E.div`
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
`,NO=E(Oe)`
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
`,BO=E.span`
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
`,VO=E.div`
  padding: 10px 0;
`,UO=E.h3`
  font-size: 15px;
  font-weight: 600;
 
  color: #333;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,HO=E.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,WO=E.span`
  font-size: 17px;
  font-weight: 800;
  color: var(--black-color);
`,GO=E.button`
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
`;E(Oe)`
color: var(--white-color);
padding: 10px 20px;
 background:var( --orange-color); 
  border-radius: 15px;
  text-decoration: none;

`;const qO=E(Oe)`
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

`,YO=E.div`
  text-align: center;
  color: white;

  p {
    font-size: 24px;
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 12px;
  }
  
`,XO=E.div`
  width: 40px;
  height: 40px;
  border: 2px solid white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`;function Ye(e){return`Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}var KO=(()=>typeof Symbol=="function"&&Symbol.observable||"@@observable")(),j0=KO,ud=()=>Math.random().toString(36).substring(7).split("").join("."),QO={INIT:`@@redux/INIT${ud()}`,REPLACE:`@@redux/REPLACE${ud()}`,PROBE_UNKNOWN_ACTION:()=>`@@redux/PROBE_UNKNOWN_ACTION${ud()}`},Al=QO;function Yh(e){if(typeof e!="object"||e===null)return!1;let t=e;for(;Object.getPrototypeOf(t)!==null;)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t||Object.getPrototypeOf(e)===null}function Xh(e,t,n){if(typeof e!="function")throw new Error(Ye(2));if(typeof t=="function"&&typeof n=="function"||typeof n=="function"&&typeof arguments[3]=="function")throw new Error(Ye(0));if(typeof t=="function"&&typeof n>"u"&&(n=t,t=void 0),typeof n<"u"){if(typeof n!="function")throw new Error(Ye(1));return n(Xh)(e,t)}let r=e,i=t,o=new Map,a=o,l=0,s=!1;function u(){a===o&&(a=new Map,o.forEach((w,h)=>{a.set(h,w)}))}function d(){if(s)throw new Error(Ye(3));return i}function c(w){if(typeof w!="function")throw new Error(Ye(4));if(s)throw new Error(Ye(5));let h=!0;u();const g=l++;return a.set(g,w),function(){if(h){if(s)throw new Error(Ye(6));h=!1,u(),a.delete(g),o=null}}}function y(w){if(!Yh(w))throw new Error(Ye(7));if(typeof w.type>"u")throw new Error(Ye(8));if(typeof w.type!="string")throw new Error(Ye(17));if(s)throw new Error(Ye(9));try{s=!0,i=r(i,w)}finally{s=!1}return(o=a).forEach(g=>{g()}),w}function p(w){if(typeof w!="function")throw new Error(Ye(10));r=w,y({type:Al.REPLACE})}function m(){const w=c;return{subscribe(h){if(typeof h!="object"||h===null)throw new Error(Ye(11));function g(){const S=h;S.next&&S.next(d())}return g(),{unsubscribe:w(g)}},[j0](){return this}}}return y({type:Al.INIT}),{dispatch:y,subscribe:c,getState:d,replaceReducer:p,[j0]:m}}function ZO(e){Object.keys(e).forEach(t=>{const n=e[t];if(typeof n(void 0,{type:Al.INIT})>"u")throw new Error(Ye(12));if(typeof n(void 0,{type:Al.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(Ye(13))})}function JO(e){const t=Object.keys(e),n={};for(let o=0;o<t.length;o++){const a=t[o];typeof e[a]=="function"&&(n[a]=e[a])}const r=Object.keys(n);let i;try{ZO(n)}catch(o){i=o}return function(a={},l){if(i)throw i;let s=!1;const u={};for(let d=0;d<r.length;d++){const c=r[d],y=n[c],p=a[c],m=y(p,l);if(typeof m>"u")throw l&&l.type,new Error(Ye(14));u[c]=m,s=s||m!==p}return s=s||r.length!==Object.keys(a).length,s?u:a}}function Rl(...e){return e.length===0?t=>t:e.length===1?e[0]:e.reduce((t,n)=>(...r)=>t(n(...r)))}function e4(...e){return t=>(n,r)=>{const i=t(n,r);let o=()=>{throw new Error(Ye(15))};const a={getState:i.getState,dispatch:(s,...u)=>o(s,...u)},l=e.map(s=>s(a));return o=Rl(...l)(i.dispatch),{...i,dispatch:o}}}function t4(e){return Yh(e)&&"type"in e&&typeof e.type=="string"}var Hb=Symbol.for("immer-nothing"),M0=Symbol.for("immer-draftable"),ht=Symbol.for("immer-state");function an(e,...t){throw new Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)}var It=Object,eo=It.getPrototypeOf,Fl="constructor",Mu="prototype",op="configurable",zl="enumerable",Ys="writable",Ta="value",Yn=e=>!!e&&!!e[ht];function pn(e){var t;return e?Wb(e)||Iu(e)||!!e[M0]||!!((t=e[Fl])!=null&&t[M0])||Du(e)||Lu(e):!1}var n4=It[Mu][Fl].toString(),$0=new WeakMap;function Wb(e){if(!e||!Kh(e))return!1;const t=eo(e);if(t===null||t===It[Mu])return!0;const n=It.hasOwnProperty.call(t,Fl)&&t[Fl];if(n===Object)return!0;if(!bi(n))return!1;let r=$0.get(n);return r===void 0&&(r=Function.toString.call(n),$0.set(n,r)),r===n4}function $u(e,t,n=!0){Ua(e)===0?(n?Reflect.ownKeys(e):It.keys(e)).forEach(i=>{t(i,e[i],e)}):e.forEach((r,i)=>t(i,r,e))}function Ua(e){const t=e[ht];return t?t.type_:Iu(e)?1:Du(e)?2:Lu(e)?3:0}var I0=(e,t,n=Ua(e))=>n===2?e.has(t):It[Mu].hasOwnProperty.call(e,t),ap=(e,t,n=Ua(e))=>n===2?e.get(t):e[t],Nl=(e,t,n,r=Ua(e))=>{r===2?e.set(t,n):r===3?e.add(n):e[t]=n};function r4(e,t){return e===t?e!==0||1/e===1/t:e!==e&&t!==t}var Iu=Array.isArray,Du=e=>e instanceof Map,Lu=e=>e instanceof Set,Kh=e=>typeof e=="object",bi=e=>typeof e=="function",cd=e=>typeof e=="boolean";function i4(e){const t=+e;return Number.isInteger(t)&&String(t)===e}var Rn=e=>e.copy_||e.base_,Qh=e=>e.modified_?e.copy_:e.base_;function sp(e,t){if(Du(e))return new Map(e);if(Lu(e))return new Set(e);if(Iu(e))return Array[Mu].slice.call(e);const n=Wb(e);if(t===!0||t==="class_only"&&!n){const r=It.getOwnPropertyDescriptors(e);delete r[ht];let i=Reflect.ownKeys(r);for(let o=0;o<i.length;o++){const a=i[o],l=r[a];l[Ys]===!1&&(l[Ys]=!0,l[op]=!0),(l.get||l.set)&&(r[a]={[op]:!0,[Ys]:!0,[zl]:l[zl],[Ta]:e[a]})}return It.create(eo(e),r)}else{const r=eo(e);if(r!==null&&n)return{...e};const i=It.create(r);return It.assign(i,e)}}function Zh(e,t=!1){return Au(e)||Yn(e)||!pn(e)||(Ua(e)>1&&It.defineProperties(e,{set:vs,add:vs,clear:vs,delete:vs}),It.freeze(e),t&&$u(e,(n,r)=>{Zh(r,!0)},!1)),e}function o4(){an(2)}var vs={[Ta]:o4};function Au(e){return e===null||!Kh(e)?!0:It.isFrozen(e)}var Bl="MapSet",lp="Patches",D0="ArrayMethods",Gb={};function Jr(e){const t=Gb[e];return t||an(0,e),t}var L0=e=>!!Gb[e],Pa,qb=()=>Pa,a4=(e,t)=>({drafts_:[],parent_:e,immer_:t,canAutoFreeze_:!0,unfinalizedDrafts_:0,handledSet_:new Set,processedForPatches_:new Set,mapSetPlugin_:L0(Bl)?Jr(Bl):void 0,arrayMethodsPlugin_:L0(D0)?Jr(D0):void 0});function A0(e,t){t&&(e.patchPlugin_=Jr(lp),e.patches_=[],e.inversePatches_=[],e.patchListener_=t)}function up(e){cp(e),e.drafts_.forEach(s4),e.drafts_=null}function cp(e){e===Pa&&(Pa=e.parent_)}var R0=e=>Pa=a4(Pa,e);function s4(e){const t=e[ht];t.type_===0||t.type_===1?t.revoke_():t.revoked_=!0}function F0(e,t){t.unfinalizedDrafts_=t.drafts_.length;const n=t.drafts_[0];if(e!==void 0&&e!==n){n[ht].modified_&&(up(t),an(4)),pn(e)&&(e=z0(t,e));const{patchPlugin_:i}=t;i&&i.generateReplacementPatches_(n[ht].base_,e,t)}else e=z0(t,n);return l4(t,e,!0),up(t),t.patches_&&t.patchListener_(t.patches_,t.inversePatches_),e!==Hb?e:void 0}function z0(e,t){if(Au(t))return t;const n=t[ht];if(!n)return Vl(t,e.handledSet_,e);if(!Ru(n,e))return t;if(!n.modified_)return n.base_;if(!n.finalized_){const{callbacks_:r}=n;if(r)for(;r.length>0;)r.pop()(e);Kb(n,e)}return n.copy_}function l4(e,t,n=!1){!e.parent_&&e.immer_.autoFreeze_&&e.canAutoFreeze_&&Zh(t,n)}function Yb(e){e.finalized_=!0,e.scope_.unfinalizedDrafts_--}var Ru=(e,t)=>e.scope_===t,u4=[];function Xb(e,t,n,r){const i=Rn(e),o=e.type_;if(r!==void 0&&ap(i,r,o)===t){Nl(i,r,n,o);return}if(!e.draftLocations_){const l=e.draftLocations_=new Map;$u(i,(s,u)=>{if(Yn(u)){const d=l.get(u)||[];d.push(s),l.set(u,d)}})}const a=e.draftLocations_.get(t)??u4;for(const l of a)Nl(i,l,n,o)}function c4(e,t,n){e.callbacks_.push(function(i){var l;const o=t;if(!o||!Ru(o,i))return;(l=i.mapSetPlugin_)==null||l.fixSetContents(o);const a=Qh(o);Xb(e,o.draft_??o,a,n),Kb(o,i)})}function Kb(e,t){var r;if(e.modified_&&!e.finalized_&&(e.type_===3||e.type_===1&&e.allIndicesReassigned_||(((r=e.assigned_)==null?void 0:r.size)??0)>0)){const{patchPlugin_:i}=t;if(i){const o=i.getPath(e);o&&i.generatePatches_(e,o,t)}Yb(e)}}function d4(e,t,n){const{scope_:r}=e;if(Yn(n)){const i=n[ht];Ru(i,r)&&i.callbacks_.push(function(){Xs(e);const a=Qh(i);Xb(e,n,a,t)})}else pn(n)&&e.callbacks_.push(function(){const o=Rn(e);e.type_===3?o.has(n)&&Vl(n,r.handledSet_,r):ap(o,t,e.type_)===n&&r.drafts_.length>1&&(e.assigned_.get(t)??!1)===!0&&e.copy_&&Vl(ap(e.copy_,t,e.type_),r.handledSet_,r)})}function Vl(e,t,n){return!n.immer_.autoFreeze_&&n.unfinalizedDrafts_<1||Yn(e)||t.has(e)||!pn(e)||Au(e)||(t.add(e),$u(e,(r,i)=>{if(Yn(i)){const o=i[ht];if(Ru(o,n)){const a=Qh(o);Nl(e,r,a,e.type_),Yb(o)}}else pn(i)&&Vl(i,t,n)})),e}function f4(e,t){const n=Iu(e),r={type_:n?1:0,scope_:t?t.scope_:qb(),modified_:!1,finalized_:!1,assigned_:void 0,parent_:t,base_:e,draft_:null,copy_:null,revoke_:null,isManual_:!1,callbacks_:void 0};let i=r,o=Ul;n&&(i=[r],o=Oa);const{revoke:a,proxy:l}=Proxy.revocable(i,o);return r.draft_=l,r.revoke_=a,[l,r]}var Ul={get(e,t){if(t===ht)return e;let n=e.scope_.arrayMethodsPlugin_;const r=e.type_===1&&typeof t=="string";if(r&&n!=null&&n.isArrayOperationMethod(t))return n.createMethodInterceptor(e,t);const i=Rn(e);if(!I0(i,t,e.type_))return p4(e,i,t);const o=i[t];if(e.finalized_||!pn(o)||r&&e.operationMethod&&(n!=null&&n.isMutatingArrayMethod(e.operationMethod))&&i4(t))return o;if(o===dd(e.base_,t)){Xs(e);const a=e.type_===1?+t:t,l=fp(e.scope_,o,e,a);return e.copy_[a]=l}return o},has(e,t){return t in Rn(e)},ownKeys(e){return Reflect.ownKeys(Rn(e))},set(e,t,n){const r=Qb(Rn(e),t);if(r!=null&&r.set)return r.set.call(e.draft_,n),!0;if(!e.modified_){const i=dd(Rn(e),t),o=i==null?void 0:i[ht];if(o&&o.base_===n)return e.copy_[t]=n,e.assigned_.set(t,!1),!0;if(r4(n,i)&&(n!==void 0||I0(e.base_,t,e.type_)))return!0;Xs(e),dp(e)}return e.copy_[t]===n&&(n!==void 0||t in e.copy_)||Number.isNaN(n)&&Number.isNaN(e.copy_[t])||(e.copy_[t]=n,e.assigned_.set(t,!0),d4(e,t,n)),!0},deleteProperty(e,t){return Xs(e),dd(e.base_,t)!==void 0||t in e.base_?(e.assigned_.set(t,!1),dp(e)):e.assigned_.delete(t),e.copy_&&delete e.copy_[t],!0},getOwnPropertyDescriptor(e,t){const n=Rn(e),r=Reflect.getOwnPropertyDescriptor(n,t);return r&&{[Ys]:!0,[op]:e.type_!==1||t!=="length",[zl]:r[zl],[Ta]:n[t]}},defineProperty(){an(11)},getPrototypeOf(e){return eo(e.base_)},setPrototypeOf(){an(12)}},Oa={};for(let e in Ul){let t=Ul[e];Oa[e]=function(){const n=arguments;return n[0]=n[0][0],t.apply(this,n)}}Oa.deleteProperty=function(e,t){return Oa.set.call(this,e,t,void 0)};Oa.set=function(e,t,n){return Ul.set.call(this,e[0],t,n,e[0])};function dd(e,t){const n=e[ht];return(n?Rn(n):e)[t]}function p4(e,t,n){var i;const r=Qb(t,n);return r?Ta in r?r[Ta]:(i=r.get)==null?void 0:i.call(e.draft_):void 0}function Qb(e,t){if(!(t in e))return;let n=eo(e);for(;n;){const r=Object.getOwnPropertyDescriptor(n,t);if(r)return r;n=eo(n)}}function dp(e){e.modified_||(e.modified_=!0,e.parent_&&dp(e.parent_))}function Xs(e){e.copy_||(e.assigned_=new Map,e.copy_=sp(e.base_,e.scope_.immer_.useStrictShallowCopy_))}var h4=class{constructor(e){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.useStrictIteration_=!1,this.produce=(t,n,r)=>{if(bi(t)&&!bi(n)){const o=n;n=t;const a=this;return function(s=o,...u){return a.produce(s,d=>n.call(this,d,...u))}}bi(n)||an(6),r!==void 0&&!bi(r)&&an(7);let i;if(pn(t)){const o=R0(this),a=fp(o,t,void 0);let l=!0;try{i=n(a),l=!1}finally{l?up(o):cp(o)}return A0(o,r),F0(i,o)}else if(!t||!Kh(t)){if(i=n(t),i===void 0&&(i=t),i===Hb&&(i=void 0),this.autoFreeze_&&Zh(i,!0),r){const o=[],a=[];Jr(lp).generateReplacementPatches_(t,i,{patches_:o,inversePatches_:a}),r(o,a)}return i}else an(1,t)},this.produceWithPatches=(t,n)=>{if(bi(t))return(a,...l)=>this.produceWithPatches(a,s=>t(s,...l));let r,i;return[this.produce(t,n,(a,l)=>{r=a,i=l}),r,i]},cd(e==null?void 0:e.autoFreeze)&&this.setAutoFreeze(e.autoFreeze),cd(e==null?void 0:e.useStrictShallowCopy)&&this.setUseStrictShallowCopy(e.useStrictShallowCopy),cd(e==null?void 0:e.useStrictIteration)&&this.setUseStrictIteration(e.useStrictIteration)}createDraft(e){pn(e)||an(8),Yn(e)&&(e=m4(e));const t=R0(this),n=fp(t,e,void 0);return n[ht].isManual_=!0,cp(t),n}finishDraft(e,t){const n=e&&e[ht];(!n||!n.isManual_)&&an(9);const{scope_:r}=n;return A0(r,t),F0(void 0,r)}setAutoFreeze(e){this.autoFreeze_=e}setUseStrictShallowCopy(e){this.useStrictShallowCopy_=e}setUseStrictIteration(e){this.useStrictIteration_=e}shouldUseStrictIteration(){return this.useStrictIteration_}applyPatches(e,t){let n;for(n=t.length-1;n>=0;n--){const i=t[n];if(i.path.length===0&&i.op==="replace"){e=i.value;break}}n>-1&&(t=t.slice(n+1));const r=Jr(lp).applyPatches_;return Yn(e)?r(e,t):this.produce(e,i=>r(i,t))}};function fp(e,t,n,r){const[i,o]=Du(t)?Jr(Bl).proxyMap_(t,n):Lu(t)?Jr(Bl).proxySet_(t,n):f4(t,n);return((n==null?void 0:n.scope_)??qb()).drafts_.push(i),o.callbacks_=(n==null?void 0:n.callbacks_)??[],o.key_=r,n&&r!==void 0?c4(n,o,r):o.callbacks_.push(function(s){var d;(d=s.mapSetPlugin_)==null||d.fixSetContents(o);const{patchPlugin_:u}=s;o.modified_&&u&&u.generatePatches_(o,[],s)}),i}function m4(e){return Yn(e)||an(10,e),Zb(e)}function Zb(e){if(!pn(e)||Au(e))return e;const t=e[ht];let n,r=!0;if(t){if(!t.modified_)return t.base_;t.finalized_=!0,n=sp(e,t.scope_.immer_.useStrictShallowCopy_),r=t.scope_.immer_.shouldUseStrictIteration()}else n=sp(e,!0);return $u(n,(i,o)=>{Nl(n,i,Zb(o))},r),t&&(t.finalized_=!1),n}var g4=new h4,Jb=g4.produce;function ew(e){return({dispatch:n,getState:r})=>i=>o=>typeof o=="function"?o(n,r,e):i(o)}var v4=ew(),y4=ew,x4=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?Rl:Rl.apply(null,arguments)};function N0(e,t){function n(...r){if(t){let i=t(...r);if(!i)throw new Error(Vn(0));return{type:e,payload:i.payload,..."meta"in i&&{meta:i.meta},..."error"in i&&{error:i.error}}}return{type:e,payload:r[0]}}return n.toString=()=>`${e}`,n.type=e,n.match=r=>t4(r)&&r.type===e,n}var tw=class Wo extends Array{constructor(...t){super(...t),Object.setPrototypeOf(this,Wo.prototype)}static get[Symbol.species](){return Wo}concat(...t){return super.concat.apply(this,t)}prepend(...t){return t.length===1&&Array.isArray(t[0])?new Wo(...t[0].concat(this)):new Wo(...t.concat(this))}};function B0(e){return pn(e)?Jb(e,()=>{}):e}function ys(e,t,n){return e.has(t)?e.get(t):e.set(t,n(t)).get(t)}function b4(e){return typeof e=="boolean"}var w4=()=>function(t){const{thunk:n=!0,immutableCheck:r=!0,serializableCheck:i=!0,actionCreatorCheck:o=!0}=t??{};let a=new tw;return n&&(b4(n)?a.push(v4):a.push(y4(n.extraArgument))),a},S4="RTK_autoBatch",V0=e=>t=>{setTimeout(t,e)},_4=(e={type:"raf"})=>t=>(...n)=>{const r=t(...n);let i=!0,o=!1,a=!1;const l=new Set,s=e.type==="tick"?queueMicrotask:e.type==="raf"?typeof window<"u"&&window.requestAnimationFrame?window.requestAnimationFrame:V0(10):e.type==="callback"?e.queueNotification:V0(e.timeout),u=()=>{a=!1,o&&(o=!1,l.forEach(d=>d()))};return Object.assign({},r,{subscribe(d){const c=()=>i&&d(),y=r.subscribe(c);return l.add(d),()=>{y(),l.delete(d)}},dispatch(d){var c;try{return i=!((c=d==null?void 0:d.meta)!=null&&c[S4]),o=!i,o&&(a||(a=!0,s(u))),r.dispatch(d)}finally{i=!0}}})},C4=e=>function(n){const{autoBatch:r=!0}=n??{};let i=new tw(e);return r&&i.push(_4(typeof r=="object"?r:void 0)),i};function E4(e){const t=w4(),{reducer:n=void 0,middleware:r,devTools:i=!0,duplicateMiddlewareCheck:o=!0,preloadedState:a=void 0,enhancers:l=void 0}=e||{};let s;if(typeof n=="function")s=n;else if(Yh(n))s=JO(n);else throw new Error(Vn(1));let u;typeof r=="function"?u=r(t):u=t();let d=Rl;i&&(d=x4({trace:!1,...typeof i=="object"&&i}));const c=e4(...u),y=C4(c);let p=typeof l=="function"?l(y):y();const m=d(...p);return Xh(s,a,m)}function nw(e){const t={},n=[];let r;const i={addCase(o,a){const l=typeof o=="string"?o:o.type;if(!l)throw new Error(Vn(28));if(l in t)throw new Error(Vn(29));return t[l]=a,i},addAsyncThunk(o,a){return a.pending&&(t[o.pending.type]=a.pending),a.rejected&&(t[o.rejected.type]=a.rejected),a.fulfilled&&(t[o.fulfilled.type]=a.fulfilled),a.settled&&n.push({matcher:o.settled,reducer:a.settled}),i},addMatcher(o,a){return n.push({matcher:o,reducer:a}),i},addDefaultCase(o){return r=o,i}};return e(i),[t,n,r]}function k4(e){return typeof e=="function"}function T4(e,t){let[n,r,i]=nw(t),o;if(k4(e))o=()=>B0(e());else{const l=B0(e);o=()=>l}function a(l=o(),s){let u=[n[s.type],...r.filter(({matcher:d})=>d(s)).map(({reducer:d})=>d)];return u.filter(d=>!!d).length===0&&(u=[i]),u.reduce((d,c)=>{if(c)if(Yn(d)){const p=c(d,s);return p===void 0?d:p}else{if(pn(d))return Jb(d,y=>c(y,s));{const y=c(d,s);if(y===void 0){if(d===null)return d;throw Error("A case reducer on a non-draftable value must not return undefined")}return y}}return d},l)}return a.getInitialState=o,a}var P4=Symbol.for("rtk-slice-createasyncthunk");function O4(e,t){return`${e}/${t}`}function j4({creators:e}={}){var n;const t=(n=e==null?void 0:e.asyncThunk)==null?void 0:n[P4];return function(i){const{name:o,reducerPath:a=o}=i;if(!o)throw new Error(Vn(11));typeof process<"u";const l=(typeof i.reducers=="function"?i.reducers($4()):i.reducers)||{},s=Object.keys(l),u={sliceCaseReducersByName:{},sliceCaseReducersByType:{},actionCreators:{},sliceMatchers:[]},d={addCase(S,T){const k=typeof S=="string"?S:S.type;if(!k)throw new Error(Vn(12));if(k in u.sliceCaseReducersByType)throw new Error(Vn(13));return u.sliceCaseReducersByType[k]=T,d},addMatcher(S,T){return u.sliceMatchers.push({matcher:S,reducer:T}),d},exposeAction(S,T){return u.actionCreators[S]=T,d},exposeCaseReducer(S,T){return u.sliceCaseReducersByName[S]=T,d}};s.forEach(S=>{const T=l[S],k={reducerName:S,type:O4(o,S),createNotation:typeof i.reducers=="function"};D4(T)?A4(k,T,d,t):I4(k,T,d)});function c(){const[S={},T=[],k=void 0]=typeof i.extraReducers=="function"?nw(i.extraReducers):[i.extraReducers],C={...S,...u.sliceCaseReducersByType};return T4(i.initialState,_=>{for(let $ in C)_.addCase($,C[$]);for(let $ of u.sliceMatchers)_.addMatcher($.matcher,$.reducer);for(let $ of T)_.addMatcher($.matcher,$.reducer);k&&_.addDefaultCase(k)})}const y=S=>S,p=new Map,m=new WeakMap;let v;function w(S,T){return v||(v=c()),v(S,T)}function h(){return v||(v=c()),v.getInitialState()}function g(S,T=!1){function k(_){let $=_[S];return typeof $>"u"&&T&&($=ys(m,k,h)),$}function C(_=y){const $=ys(p,T,()=>new WeakMap);return ys($,_,()=>{const M={};for(const[R,L]of Object.entries(i.selectors??{}))M[R]=M4(L,_,()=>ys(m,_,h),T);return M})}return{reducerPath:S,getSelectors:C,get selectors(){return C(k)},selectSlice:k}}const x={name:o,reducer:w,actions:u.actionCreators,caseReducers:u.sliceCaseReducersByName,getInitialState:h,...g(a),injectInto(S,{reducerPath:T,...k}={}){const C=T??a;return S.inject({reducerPath:C,reducer:w},k),{...x,...g(C,!0)}}};return x}}function M4(e,t,n,r){function i(o,...a){let l=t(o);return typeof l>"u"&&r&&(l=n()),e(l,...a)}return i.unwrapped=e,i}var rw=j4();function $4(){function e(t,n){return{_reducerDefinitionType:"asyncThunk",payloadCreator:t,...n}}return e.withTypes=()=>e,{reducer(t){return Object.assign({[t.name](...n){return t(...n)}}[t.name],{_reducerDefinitionType:"reducer"})},preparedReducer(t,n){return{_reducerDefinitionType:"reducerWithPrepare",prepare:t,reducer:n}},asyncThunk:e}}function I4({type:e,reducerName:t,createNotation:n},r,i){let o,a;if("reducer"in r){if(n&&!L4(r))throw new Error(Vn(17));o=r.reducer,a=r.prepare}else o=r;i.addCase(e,o).exposeCaseReducer(t,o).exposeAction(t,a?N0(e,a):N0(e))}function D4(e){return e._reducerDefinitionType==="asyncThunk"}function L4(e){return e._reducerDefinitionType==="reducerWithPrepare"}function A4({type:e,reducerName:t},n,r,i){if(!i)throw new Error(Vn(18));const{payloadCreator:o,fulfilled:a,pending:l,rejected:s,settled:u,options:d}=n,c=i(e,o,d);r.exposeAction(t,c),a&&r.addCase(c.fulfilled,a),l&&r.addCase(c.pending,l),s&&r.addCase(c.rejected,s),u&&r.addMatcher(c.settled,u),r.exposeCaseReducer(t,{fulfilled:a||xs,pending:l||xs,rejected:s||xs,settled:u||xs})}function xs(){}function Vn(e){return`Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}const iw=rw({name:"cart",initialState:{items:[]},reducers:{addToCart:(e,t)=>{const n=t.payload,r=e.items.find(i=>i.id===t.payload.id);r&&r.quantity>=n.stock||(r?r.quantity=(r.quantity||0)+1:e.items.push({...t.payload,quantity:1}))},removeFromCart:(e,t)=>{const n=t.payload;e.items=e.items.filter(r=>r.id!==n.id)},clearCart:e=>{e.items=[]},addAllToCart:(e,t)=>{const n=t.payload.map(r=>({...r,quantity:r.quantity||1}));e.items.push(...n)},incrementQuantity:(e,t)=>{const{id:n,stock:r}=t.payload,i=e.items.find(o=>o.id===n);i&&i.quantity<r&&(i.quantity+=1)},decrementQuantity:(e,t)=>{const n=e.items.find(r=>r.id===t.payload);n&&n.quantity>1&&(n.quantity-=1)}}}),{addToCart:po,removeFromCart:R4,clearCart:Jh,addAllToCart:F4,incrementQuantity:z4,decrementQuantity:N4}=iw.actions,B4=iw.reducer;function ow(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var i=e.length;for(t=0;t<i;t++)e[t]&&(n=ow(e[t]))&&(r&&(r+=" "),r+=n)}else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function Gr(){for(var e,t,n=0,r="",i=arguments.length;n<i;n++)(e=arguments[n])&&(t=ow(e))&&(r&&(r+=" "),r+=t);return r}function V4(e){if(!e||typeof document>"u")return;let t=document.head||document.getElementsByTagName("head")[0],n=document.createElement("style");n.type="text/css",t.firstChild?t.insertBefore(n,t.firstChild):t.appendChild(n),n.styleSheet?n.styleSheet.cssText=e:n.appendChild(document.createTextNode(e))}V4(`:root{--toastify-color-light: #fff;--toastify-color-dark: #121212;--toastify-color-info: #3498db;--toastify-color-success: #07bc0c;--toastify-color-warning: #f1c40f;--toastify-color-error: hsl(6, 78%, 57%);--toastify-color-transparent: rgba(255, 255, 255, .7);--toastify-icon-color-info: var(--toastify-color-info);--toastify-icon-color-success: var(--toastify-color-success);--toastify-icon-color-warning: var(--toastify-color-warning);--toastify-icon-color-error: var(--toastify-color-error);--toastify-container-width: fit-content;--toastify-toast-width: 320px;--toastify-toast-offset: 16px;--toastify-toast-top: max(var(--toastify-toast-offset), env(safe-area-inset-top));--toastify-toast-right: max(var(--toastify-toast-offset), env(safe-area-inset-right));--toastify-toast-left: max(var(--toastify-toast-offset), env(safe-area-inset-left));--toastify-toast-bottom: max(var(--toastify-toast-offset), env(safe-area-inset-bottom));--toastify-toast-background: #fff;--toastify-toast-padding: 14px;--toastify-toast-min-height: 64px;--toastify-toast-max-height: 800px;--toastify-toast-bd-radius: 6px;--toastify-toast-shadow: 0px 4px 12px rgba(0, 0, 0, .1);--toastify-font-family: sans-serif;--toastify-z-index: 9999;--toastify-text-color-light: #757575;--toastify-text-color-dark: #fff;--toastify-text-color-info: #fff;--toastify-text-color-success: #fff;--toastify-text-color-warning: #fff;--toastify-text-color-error: #fff;--toastify-spinner-color: #616161;--toastify-spinner-color-empty-area: #e0e0e0;--toastify-color-progress-light: linear-gradient(to right, #4cd964, #5ac8fa, #007aff, #34aadc, #5856d6, #ff2d55);--toastify-color-progress-dark: #bb86fc;--toastify-color-progress-info: var(--toastify-color-info);--toastify-color-progress-success: var(--toastify-color-success);--toastify-color-progress-warning: var(--toastify-color-warning);--toastify-color-progress-error: var(--toastify-color-error);--toastify-color-progress-bgo: .2}.Toastify__toast-container{z-index:var(--toastify-z-index);-webkit-transform:translate3d(0,0,var(--toastify-z-index));position:fixed;width:var(--toastify-container-width);box-sizing:border-box;color:#fff;display:flex;flex-direction:column}.Toastify__toast-container--top-left{top:var(--toastify-toast-top);left:var(--toastify-toast-left)}.Toastify__toast-container--top-center{top:var(--toastify-toast-top);left:50%;transform:translate(-50%);align-items:center}.Toastify__toast-container--top-right{top:var(--toastify-toast-top);right:var(--toastify-toast-right);align-items:end}.Toastify__toast-container--bottom-left{bottom:var(--toastify-toast-bottom);left:var(--toastify-toast-left)}.Toastify__toast-container--bottom-center{bottom:var(--toastify-toast-bottom);left:50%;transform:translate(-50%);align-items:center}.Toastify__toast-container--bottom-right{bottom:var(--toastify-toast-bottom);right:var(--toastify-toast-right);align-items:end}.Toastify__toast{--y: 0;position:relative;touch-action:none;width:var(--toastify-toast-width);min-height:var(--toastify-toast-min-height);box-sizing:border-box;margin-bottom:1rem;padding:var(--toastify-toast-padding);border-radius:var(--toastify-toast-bd-radius);box-shadow:var(--toastify-toast-shadow);max-height:var(--toastify-toast-max-height);font-family:var(--toastify-font-family);z-index:0;display:flex;flex:1 auto;align-items:center;word-break:break-word}@media only screen and (max-width: 480px){.Toastify__toast-container{width:100vw;left:env(safe-area-inset-left);margin:0}.Toastify__toast-container--top-left,.Toastify__toast-container--top-center,.Toastify__toast-container--top-right{top:env(safe-area-inset-top);transform:translate(0)}.Toastify__toast-container--bottom-left,.Toastify__toast-container--bottom-center,.Toastify__toast-container--bottom-right{bottom:env(safe-area-inset-bottom);transform:translate(0)}.Toastify__toast-container--rtl{right:env(safe-area-inset-right);left:initial}.Toastify__toast{--toastify-toast-width: 100%;margin-bottom:0;border-radius:0}}.Toastify__toast-container[data-stacked=true]{width:var(--toastify-toast-width)}.Toastify__toast--stacked{position:absolute;width:100%;transform:translate3d(0,var(--y),0) scale(var(--s));transition:transform .3s}.Toastify__toast--stacked[data-collapsed] .Toastify__toast-body,.Toastify__toast--stacked[data-collapsed] .Toastify__close-button{transition:opacity .1s}.Toastify__toast--stacked[data-collapsed=false]{overflow:visible}.Toastify__toast--stacked[data-collapsed=true]:not(:last-child)>*{opacity:0}.Toastify__toast--stacked:after{content:"";position:absolute;left:0;right:0;height:calc(var(--g) * 1px);bottom:100%}.Toastify__toast--stacked[data-pos=top]{top:0}.Toastify__toast--stacked[data-pos=bot]{bottom:0}.Toastify__toast--stacked[data-pos=bot].Toastify__toast--stacked:before{transform-origin:top}.Toastify__toast--stacked[data-pos=top].Toastify__toast--stacked:before{transform-origin:bottom}.Toastify__toast--stacked:before{content:"";position:absolute;left:0;right:0;bottom:0;height:100%;transform:scaleY(3);z-index:-1}.Toastify__toast--rtl{direction:rtl}.Toastify__toast--close-on-click{cursor:pointer}.Toastify__toast-icon{margin-inline-end:10px;width:22px;flex-shrink:0;display:flex}.Toastify--animate{animation-fill-mode:both;animation-duration:.5s}.Toastify--animate-icon{animation-fill-mode:both;animation-duration:.3s}.Toastify__toast-theme--dark{background:var(--toastify-color-dark);color:var(--toastify-text-color-dark)}.Toastify__toast-theme--light,.Toastify__toast-theme--colored.Toastify__toast--default{background:var(--toastify-color-light);color:var(--toastify-text-color-light)}.Toastify__toast-theme--colored.Toastify__toast--info{color:var(--toastify-text-color-info);background:var(--toastify-color-info)}.Toastify__toast-theme--colored.Toastify__toast--success{color:var(--toastify-text-color-success);background:var(--toastify-color-success)}.Toastify__toast-theme--colored.Toastify__toast--warning{color:var(--toastify-text-color-warning);background:var(--toastify-color-warning)}.Toastify__toast-theme--colored.Toastify__toast--error{color:var(--toastify-text-color-error);background:var(--toastify-color-error)}.Toastify__progress-bar-theme--light{background:var(--toastify-color-progress-light)}.Toastify__progress-bar-theme--dark{background:var(--toastify-color-progress-dark)}.Toastify__progress-bar--info{background:var(--toastify-color-progress-info)}.Toastify__progress-bar--success{background:var(--toastify-color-progress-success)}.Toastify__progress-bar--warning{background:var(--toastify-color-progress-warning)}.Toastify__progress-bar--error{background:var(--toastify-color-progress-error)}.Toastify__progress-bar-theme--colored.Toastify__progress-bar--info,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--success,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--warning,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--error{background:var(--toastify-color-transparent)}.Toastify__close-button{color:#fff;position:absolute;top:6px;right:6px;background:transparent;outline:none;border:none;padding:0;cursor:pointer;opacity:.7;transition:.3s ease;z-index:1}.Toastify__toast--rtl .Toastify__close-button{left:6px;right:unset}.Toastify__close-button--light{color:#000;opacity:.3}.Toastify__close-button>svg{fill:currentColor;height:16px;width:14px}.Toastify__close-button:hover,.Toastify__close-button:focus{opacity:1}@keyframes Toastify__trackProgress{0%{transform:scaleX(1)}to{transform:scaleX(0)}}.Toastify__progress-bar{position:absolute;bottom:0;left:0;width:100%;height:100%;z-index:1;opacity:.7;transform-origin:left}.Toastify__progress-bar--animated{animation:Toastify__trackProgress linear 1 forwards}.Toastify__progress-bar--controlled{transition:transform .2s}.Toastify__progress-bar--rtl{right:0;left:initial;transform-origin:right;border-bottom-left-radius:initial}.Toastify__progress-bar--wrp{position:absolute;overflow:hidden;bottom:0;left:0;width:100%;height:5px;border-bottom-left-radius:var(--toastify-toast-bd-radius);border-bottom-right-radius:var(--toastify-toast-bd-radius)}.Toastify__progress-bar--wrp[data-hidden=true]{opacity:0}.Toastify__progress-bar--bg{opacity:var(--toastify-color-progress-bgo);width:100%;height:100%}.Toastify__spinner{width:20px;height:20px;box-sizing:border-box;border:2px solid;border-radius:100%;border-color:var(--toastify-spinner-color-empty-area);border-right-color:var(--toastify-spinner-color);animation:Toastify__spin .65s linear infinite}@keyframes Toastify__bounceInRight{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(3000px,0,0)}60%{opacity:1;transform:translate3d(-25px,0,0)}75%{transform:translate3d(10px,0,0)}90%{transform:translate3d(-5px,0,0)}to{transform:none}}@keyframes Toastify__bounceOutRight{20%{opacity:1;transform:translate3d(-20px,var(--y),0)}to{opacity:0;transform:translate3d(2000px,var(--y),0)}}@keyframes Toastify__bounceInLeft{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(-3000px,0,0)}60%{opacity:1;transform:translate3d(25px,0,0)}75%{transform:translate3d(-10px,0,0)}90%{transform:translate3d(5px,0,0)}to{transform:none}}@keyframes Toastify__bounceOutLeft{20%{opacity:1;transform:translate3d(20px,var(--y),0)}to{opacity:0;transform:translate3d(-2000px,var(--y),0)}}@keyframes Toastify__bounceInUp{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,3000px,0)}60%{opacity:1;transform:translate3d(0,-20px,0)}75%{transform:translate3d(0,10px,0)}90%{transform:translate3d(0,-5px,0)}to{transform:translateZ(0)}}@keyframes Toastify__bounceOutUp{20%{transform:translate3d(0,calc(var(--y) - 10px),0)}40%,45%{opacity:1;transform:translate3d(0,calc(var(--y) + 20px),0)}to{opacity:0;transform:translate3d(0,-2000px,0)}}@keyframes Toastify__bounceInDown{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,-3000px,0)}60%{opacity:1;transform:translate3d(0,25px,0)}75%{transform:translate3d(0,-10px,0)}90%{transform:translate3d(0,5px,0)}to{transform:none}}@keyframes Toastify__bounceOutDown{20%{transform:translate3d(0,calc(var(--y) - 10px),0)}40%,45%{opacity:1;transform:translate3d(0,calc(var(--y) + 20px),0)}to{opacity:0;transform:translate3d(0,2000px,0)}}.Toastify__bounce-enter--top-left,.Toastify__bounce-enter--bottom-left{animation-name:Toastify__bounceInLeft}.Toastify__bounce-enter--top-right,.Toastify__bounce-enter--bottom-right{animation-name:Toastify__bounceInRight}.Toastify__bounce-enter--top-center{animation-name:Toastify__bounceInDown}.Toastify__bounce-enter--bottom-center{animation-name:Toastify__bounceInUp}.Toastify__bounce-exit--top-left,.Toastify__bounce-exit--bottom-left{animation-name:Toastify__bounceOutLeft}.Toastify__bounce-exit--top-right,.Toastify__bounce-exit--bottom-right{animation-name:Toastify__bounceOutRight}.Toastify__bounce-exit--top-center{animation-name:Toastify__bounceOutUp}.Toastify__bounce-exit--bottom-center{animation-name:Toastify__bounceOutDown}@keyframes Toastify__zoomIn{0%{opacity:0;transform:scale3d(.3,.3,.3)}50%{opacity:1}}@keyframes Toastify__zoomOut{0%{opacity:1}50%{opacity:0;transform:translate3d(0,var(--y),0) scale3d(.3,.3,.3)}to{opacity:0}}.Toastify__zoom-enter{animation-name:Toastify__zoomIn}.Toastify__zoom-exit{animation-name:Toastify__zoomOut}@keyframes Toastify__flipIn{0%{transform:perspective(400px) rotateX(90deg);animation-timing-function:ease-in;opacity:0}40%{transform:perspective(400px) rotateX(-20deg);animation-timing-function:ease-in}60%{transform:perspective(400px) rotateX(10deg);opacity:1}80%{transform:perspective(400px) rotateX(-5deg)}to{transform:perspective(400px)}}@keyframes Toastify__flipOut{0%{transform:translate3d(0,var(--y),0) perspective(400px)}30%{transform:translate3d(0,var(--y),0) perspective(400px) rotateX(-20deg);opacity:1}to{transform:translate3d(0,var(--y),0) perspective(400px) rotateX(90deg);opacity:0}}.Toastify__flip-enter{animation-name:Toastify__flipIn}.Toastify__flip-exit{animation-name:Toastify__flipOut}@keyframes Toastify__slideInRight{0%{transform:translate3d(110%,0,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInLeft{0%{transform:translate3d(-110%,0,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInUp{0%{transform:translate3d(0,110%,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInDown{0%{transform:translate3d(0,-110%,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideOutRight{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(110%,var(--y),0)}}@keyframes Toastify__slideOutLeft{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(-110%,var(--y),0)}}@keyframes Toastify__slideOutDown{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(0,500px,0)}}@keyframes Toastify__slideOutUp{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(0,-500px,0)}}.Toastify__slide-enter--top-left,.Toastify__slide-enter--bottom-left{animation-name:Toastify__slideInLeft}.Toastify__slide-enter--top-right,.Toastify__slide-enter--bottom-right{animation-name:Toastify__slideInRight}.Toastify__slide-enter--top-center{animation-name:Toastify__slideInDown}.Toastify__slide-enter--bottom-center{animation-name:Toastify__slideInUp}.Toastify__slide-exit--top-left,.Toastify__slide-exit--bottom-left{animation-name:Toastify__slideOutLeft;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--top-right,.Toastify__slide-exit--bottom-right{animation-name:Toastify__slideOutRight;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--top-center{animation-name:Toastify__slideOutUp;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--bottom-center{animation-name:Toastify__slideOutDown;animation-timing-function:ease-in;animation-duration:.3s}@keyframes Toastify__spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}
`);var Ha=e=>typeof e=="number"&&!isNaN(e),ei=e=>typeof e=="string",Xn=e=>typeof e=="function",U4=e=>ei(e)||Ha(e),pp=e=>ei(e)||Xn(e)?e:null,H4=(e,t)=>e===!1||Ha(e)&&e>0?e:t,hp=e=>b.isValidElement(e)||ei(e)||Xn(e)||Ha(e);function W4(e,t,n=300){let{scrollHeight:r,style:i}=e;requestAnimationFrame(()=>{i.minHeight="initial",i.height=r+"px",i.transition=`all ${n}ms`,requestAnimationFrame(()=>{i.height="0",i.padding="0",i.margin="0",setTimeout(t,n)})})}function G4({enter:e,exit:t,appendPosition:n=!1,collapse:r=!0,collapseDuration:i=300}){return function({children:o,position:a,preventExitTransition:l,done:s,nodeRef:u,isIn:d,playToast:c}){let y=n?`${e}--${a}`:e,p=n?`${t}--${a}`:t,m=b.useRef(0);return b.useLayoutEffect(()=>{let v=u.current,w=y.split(" "),h=g=>{g.target===u.current&&(c(),v.removeEventListener("animationend",h),v.removeEventListener("animationcancel",h),m.current===0&&g.type!=="animationcancel"&&v.classList.remove(...w))};v.classList.add(...w),v.addEventListener("animationend",h),v.addEventListener("animationcancel",h)},[]),b.useEffect(()=>{let v=u.current,w=()=>{v.removeEventListener("animationend",w),r?W4(v,s,i):s()};d||(l?w():(m.current=1,v.className+=` ${p}`,v.addEventListener("animationend",w)))},[d]),Y.createElement(Y.Fragment,null,o)}}function U0(e,t){return{content:aw(e.content,e.props),containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,reason:e.removalReason,status:t}}function aw(e,t,n=!1){return b.isValidElement(e)&&!ei(e.type)?b.cloneElement(e,{closeToast:t.closeToast,toastProps:t,data:t.data,isPaused:n}):Xn(e)?e({closeToast:t.closeToast,toastProps:t,data:t.data,isPaused:n}):e}function q4({closeToast:e,theme:t,ariaLabel:n="close"}){return Y.createElement("button",{className:`Toastify__close-button Toastify__close-button--${t}`,type:"button",onClick:r=>{r.stopPropagation(),e(!0)},"aria-label":n},Y.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},Y.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function Y4({delay:e,isRunning:t,closeToast:n,type:r="default",hide:i,className:o,controlledProgress:a,progress:l,rtl:s,isIn:u,theme:d}){let c=i||a&&l===0,y={animationDuration:`${e}ms`,animationPlayState:t?"running":"paused"};a&&(y.transform=`scaleX(${l})`);let p=Gr("Toastify__progress-bar",a?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${d}`,`Toastify__progress-bar--${r}`,{"Toastify__progress-bar--rtl":s}),m=Xn(o)?o({rtl:s,type:r,defaultClassName:p}):Gr(p,o),v={[a&&l>=1?"onTransitionEnd":"onAnimationEnd"]:a&&l<1?null:()=>{u&&n()}};return Y.createElement("div",{className:"Toastify__progress-bar--wrp","data-hidden":c},Y.createElement("div",{className:`Toastify__progress-bar--bg Toastify__progress-bar-theme--${d} Toastify__progress-bar--${r}`}),Y.createElement("div",{role:"progressbar","aria-hidden":c?"true":"false","aria-label":"notification timer",className:m,style:y,...v}))}var X4=1,sw=()=>`${X4++}`;function K4(e,t,n){let r=1,i=0,o=[],a=[],l=t,s=new Map,u=new Set,d=g=>(u.add(g),()=>u.delete(g)),c=()=>{a=Array.from(s.values()),u.forEach(g=>g())},y=({containerId:g,toastId:x,updateId:S})=>{let T=g?g!==e:e!==1,k=s.has(x)&&S==null;return T||k},p=(g,x)=>{s.forEach(S=>{var T;(x==null||x===S.props.toastId)&&((T=S.toggle)==null||T.call(S,g))})},m=g=>{var x,S;(S=(x=g.props)==null?void 0:x.onClose)==null||S.call(x,g.removalReason),g.isActive=!1},v=g=>{if(g==null)s.forEach(m);else{let x=s.get(g);x&&m(x)}c()},w=()=>{i-=o.length,o=[]},h=g=>{var x,S;let{toastId:T,updateId:k}=g.props,C=k==null;g.staleId&&s.delete(g.staleId),g.isActive=!0,s.set(T,g),c(),n(U0(g,C?"added":"updated")),C&&((S=(x=g.props).onOpen)==null||S.call(x))};return{id:e,props:l,observe:d,toggle:p,removeToast:v,toasts:s,clearQueue:w,buildToast:(g,x)=>{if(y(x))return;let{toastId:S,updateId:T,data:k,staleId:C,delay:_}=x,$=T==null;$&&i++;let M={...l,style:l.toastStyle,key:r++,...Object.fromEntries(Object.entries(x).filter(([L,j])=>j!=null)),toastId:S,updateId:T,data:k,isIn:!1,className:pp(x.className||l.toastClassName),progressClassName:pp(x.progressClassName||l.progressClassName),autoClose:x.isLoading?!1:H4(x.autoClose,l.autoClose),closeToast(L){s.get(S).removalReason=L,v(S)},deleteToast(){let L=s.get(S);if(L!=null){if(n(U0(L,"removed")),s.delete(S),i--,i<0&&(i=0),o.length>0){h(o.shift());return}c()}}};M.closeButton=l.closeButton,x.closeButton===!1||hp(x.closeButton)?M.closeButton=x.closeButton:x.closeButton===!0&&(M.closeButton=hp(l.closeButton)?l.closeButton:!0);let R={content:g,props:M,staleId:C};l.limit&&l.limit>0&&i>l.limit&&$?o.push(R):Ha(_)?setTimeout(()=>{h(R)},_):h(R)},setProps(g){l=g},setToggle:(g,x)=>{let S=s.get(g);S&&(S.toggle=x)},isToastActive:g=>{var x;return(x=s.get(g))==null?void 0:x.isActive},getSnapshot:()=>a}}var ft=new Map,ja=[],mp=new Set,Q4=e=>mp.forEach(t=>t(e)),lw=()=>ft.size>0;function Z4(){ja.forEach(e=>cw(e.content,e.options)),ja=[]}var J4=(e,{containerId:t})=>{var n;return(n=ft.get(t||1))==null?void 0:n.toasts.get(e)};function uw(e,t){var n;if(t)return!!((n=ft.get(t))!=null&&n.isToastActive(e));let r=!1;return ft.forEach(i=>{i.isToastActive(e)&&(r=!0)}),r}function ej(e){if(!lw()){ja=ja.filter(t=>e!=null&&t.options.toastId!==e);return}if(e==null||U4(e))ft.forEach(t=>{t.removeToast(e)});else if(e&&("containerId"in e||"id"in e)){let t=ft.get(e.containerId);t?t.removeToast(e.id):ft.forEach(n=>{n.removeToast(e.id)})}}var tj=(e={})=>{ft.forEach(t=>{t.props.limit&&(!e.containerId||t.id===e.containerId)&&t.clearQueue()})};function cw(e,t){hp(e)&&(lw()||ja.push({content:e,options:t}),ft.forEach(n=>{n.buildToast(e,t)}))}function nj(e){var t;(t=ft.get(e.containerId||1))==null||t.setToggle(e.id,e.fn)}function dw(e,t){ft.forEach(n=>{(t==null||!(t!=null&&t.containerId)||(t==null?void 0:t.containerId)===n.id)&&n.toggle(e,t==null?void 0:t.id)})}function rj(e){let t=e.containerId||1;return{subscribe(n){let r=K4(t,e,Q4);ft.set(t,r);let i=r.observe(n);return Z4(),()=>{i(),ft.delete(t)}},setProps(n){var r;(r=ft.get(t))==null||r.setProps(n)},getSnapshot(){var n;return(n=ft.get(t))==null?void 0:n.getSnapshot()}}}function ij(e){return mp.add(e),()=>{mp.delete(e)}}function oj(e){return e&&(ei(e.toastId)||Ha(e.toastId))?e.toastId:sw()}function Wa(e,t){return cw(e,t),t.toastId}function Fu(e,t){return{...t,type:t&&t.type||e,toastId:oj(t)}}function zu(e){return(t,n)=>Wa(t,Fu(e,n))}function K(e,t){return Wa(e,Fu("default",t))}K.loading=(e,t)=>Wa(e,Fu("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...t}));function aj(e,{pending:t,error:n,success:r},i){let o;t&&(o=ei(t)?K.loading(t,i):K.loading(t.render,{...i,...t}));let a={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},l=(u,d,c)=>{if(d==null){K.dismiss(o);return}let y={type:u,...a,...i,data:c},p=ei(d)?{render:d}:d;return o?K.update(o,{...y,...p}):K(p.render,{...y,...p}),c},s=Xn(e)?e():e;return s.then(u=>l("success",r,u)).catch(u=>l("error",n,u)),s}K.promise=aj;K.success=zu("success");K.info=zu("info");K.error=zu("error");K.warning=zu("warning");K.warn=K.warning;K.dark=(e,t)=>Wa(e,Fu("default",{theme:"dark",...t}));function sj(e){ej(e)}K.dismiss=sj;K.clearWaitingQueue=tj;K.isActive=uw;K.update=(e,t={})=>{let n=J4(e,t);if(n){let{props:r,content:i}=n,o={delay:100,...r,...t,toastId:t.toastId||e,updateId:sw()};o.toastId!==e&&(o.staleId=e);let a=o.render||i;delete o.render,Wa(a,o)}};K.done=e=>{K.update(e,{progress:1})};K.onChange=ij;K.play=e=>dw(!0,e);K.pause=e=>dw(!1,e);function lj(e){var t;let{subscribe:n,getSnapshot:r,setProps:i}=b.useRef(rj(e)).current;i(e);let o=(t=b.useSyncExternalStore(n,r,r))==null?void 0:t.slice();function a(l){if(!o)return[];let s=new Map;return e.newestOnTop&&o.reverse(),o.forEach(u=>{let{position:d}=u.props;s.has(d)||s.set(d,[]),s.get(d).push(u)}),Array.from(s,u=>l(u[0],u[1]))}return{getToastToRender:a,isToastActive:uw,count:o==null?void 0:o.length}}function uj(e){let[t,n]=b.useState(!1),[r,i]=b.useState(!1),o=b.useRef(null),a=b.useRef({start:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,didMove:!1}).current,{autoClose:l,pauseOnHover:s,closeToast:u,onClick:d,closeOnClick:c}=e;nj({id:e.toastId,containerId:e.containerId,fn:n}),b.useEffect(()=>{if(e.pauseOnFocusLoss)return y(),()=>{p()}},[e.pauseOnFocusLoss]);function y(){document.hasFocus()||h(),window.addEventListener("focus",w),window.addEventListener("blur",h)}function p(){window.removeEventListener("focus",w),window.removeEventListener("blur",h)}function m(C){if(e.draggable===!0||e.draggable===C.pointerType){g();let _=o.current;a.canCloseOnClick=!0,a.canDrag=!0,_.style.transition="none",e.draggableDirection==="x"?(a.start=C.clientX,a.removalDistance=_.offsetWidth*(e.draggablePercent/100)):(a.start=C.clientY,a.removalDistance=_.offsetHeight*(e.draggablePercent===80?e.draggablePercent*1.5:e.draggablePercent)/100)}}function v(C){let{top:_,bottom:$,left:M,right:R}=o.current.getBoundingClientRect();C.nativeEvent.type!=="touchend"&&e.pauseOnHover&&C.clientX>=M&&C.clientX<=R&&C.clientY>=_&&C.clientY<=$?h():w()}function w(){n(!0)}function h(){n(!1)}function g(){a.didMove=!1,document.addEventListener("pointermove",S),document.addEventListener("pointerup",T)}function x(){document.removeEventListener("pointermove",S),document.removeEventListener("pointerup",T)}function S(C){let _=o.current;if(a.canDrag&&_){a.didMove=!0,t&&h(),e.draggableDirection==="x"?a.delta=C.clientX-a.start:a.delta=C.clientY-a.start,a.start!==C.clientX&&(a.canCloseOnClick=!1);let $=e.draggableDirection==="x"?`${a.delta}px, var(--y)`:`0, calc(${a.delta}px + var(--y))`;_.style.transform=`translate3d(${$},0)`,_.style.opacity=`${1-Math.abs(a.delta/a.removalDistance)}`}}function T(){x();let C=o.current;if(a.canDrag&&a.didMove&&C){if(a.canDrag=!1,Math.abs(a.delta)>a.removalDistance){i(!0),e.closeToast(!0),e.collapseAll();return}C.style.transition="transform 0.2s, opacity 0.2s",C.style.removeProperty("transform"),C.style.removeProperty("opacity")}}let k={onPointerDown:m,onPointerUp:v};return l&&s&&(k.onMouseEnter=h,e.stacked||(k.onMouseLeave=w)),c&&(k.onClick=C=>{d&&d(C),a.canCloseOnClick&&u(!0)}),{playToast:w,pauseToast:h,isRunning:t,preventExitTransition:r,toastRef:o,eventHandlers:k}}var cj=typeof window<"u"?b.useLayoutEffect:b.useEffect,Nu=({theme:e,type:t,isLoading:n,...r})=>Y.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:e==="colored"?"currentColor":`var(--toastify-icon-color-${t})`,...r});function dj(e){return Y.createElement(Nu,{...e},Y.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))}function fj(e){return Y.createElement(Nu,{...e},Y.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))}function pj(e){return Y.createElement(Nu,{...e},Y.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))}function hj(e){return Y.createElement(Nu,{...e},Y.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))}function mj(){return Y.createElement("div",{className:"Toastify__spinner"})}var gp={info:fj,warning:dj,success:pj,error:hj,spinner:mj},gj=e=>e in gp;function vj({theme:e,type:t,isLoading:n,icon:r}){let i=null,o={theme:e,type:t};return r===!1||(Xn(r)?i=r({...o,isLoading:n}):b.isValidElement(r)?i=b.cloneElement(r,o):n?i=gp.spinner():gj(t)&&(i=gp[t](o))),i}var yj=e=>{let{isRunning:t,preventExitTransition:n,toastRef:r,eventHandlers:i,playToast:o}=uj(e),{closeButton:a,children:l,autoClose:s,onClick:u,type:d,hideProgressBar:c,closeToast:y,transition:p,position:m,className:v,style:w,progressClassName:h,updateId:g,role:x,progress:S,rtl:T,toastId:k,deleteToast:C,isIn:_,isLoading:$,closeOnClick:M,theme:R,ariaLabel:L}=e,j=Gr("Toastify__toast",`Toastify__toast-theme--${R}`,`Toastify__toast--${d}`,{"Toastify__toast--rtl":T},{"Toastify__toast--close-on-click":M}),F=Xn(v)?v({rtl:T,position:m,type:d,defaultClassName:j}):Gr(j,v),A=vj(e),O=!!S||!s,D={closeToast:y,type:d,theme:R},P=null;return a===!1||(Xn(a)?P=a(D):b.isValidElement(a)?P=b.cloneElement(a,D):P=q4(D)),Y.createElement(p,{isIn:_,done:C,position:m,preventExitTransition:n,nodeRef:r,playToast:o},Y.createElement("div",{id:k,tabIndex:0,onClick:u,"data-in":_,className:F,...i,style:w,ref:r,..._&&{role:x,"aria-label":L}},A!=null&&Y.createElement("div",{className:Gr("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!$})},A),aw(l,e,!t),P,!e.customProgressBar&&Y.createElement(Y4,{...g&&!O?{key:`p-${g}`}:{},rtl:T,theme:R,delay:s,isRunning:t,isIn:_,closeToast:y,hide:c,type:d,className:h,controlledProgress:O,progress:S||0})))},xj=(e,t=!1)=>({enter:`Toastify--animate Toastify__${e}-enter`,exit:`Toastify--animate Toastify__${e}-exit`,appendPosition:t}),bj=G4(xj("bounce",!0)),wj={position:"top-right",transition:bj,autoClose:5e3,closeButton:!0,pauseOnHover:!0,pauseOnFocusLoss:!0,draggable:"touch",draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light","aria-label":"Notifications Alt+T",hotKeys:e=>e.altKey&&e.code==="KeyT"};function Or(e){let t={...wj,...e},n=e.stacked,[r,i]=b.useState(!0),o=b.useRef(null),{getToastToRender:a,isToastActive:l,count:s}=lj(t),{className:u,style:d,rtl:c,containerId:y,hotKeys:p}=t;function m(w){let h=Gr("Toastify__toast-container",`Toastify__toast-container--${w}`,{"Toastify__toast-container--rtl":c});return Xn(u)?u({position:w,rtl:c,defaultClassName:h}):Gr(h,pp(u))}function v(){n&&(i(!0),K.play())}return cj(()=>{var w;if(n){let h=o.current.querySelectorAll('[data-in="true"]'),g=12,x=(w=t.position)==null?void 0:w.includes("top"),S=0,T=0;Array.from(h).reverse().forEach((k,C)=>{let _=k;_.classList.add("Toastify__toast--stacked"),C>0&&(_.dataset.collapsed=`${r}`),_.dataset.pos||(_.dataset.pos=x?"top":"bot");let $=S*(r?.2:1)+(r?0:g*C);_.style.setProperty("--y",`${x?$:$*-1}px`),_.style.setProperty("--g",`${g}`),_.style.setProperty("--s",`${1-(r?T:0)}`),S+=_.offsetHeight,T+=.025})}},[r,s,n]),b.useEffect(()=>{function w(h){var g;let x=o.current;p(h)&&((g=x.querySelector('[tabIndex="0"]'))==null||g.focus(),i(!1),K.pause()),h.key==="Escape"&&(document.activeElement===x||x!=null&&x.contains(document.activeElement))&&(i(!0),K.play())}return document.addEventListener("keydown",w),()=>{document.removeEventListener("keydown",w)}},[p]),Y.createElement("section",{ref:o,className:"Toastify",id:y,onMouseEnter:()=>{n&&(i(!1),K.pause())},onMouseLeave:v,"aria-live":"polite","aria-atomic":"false","aria-relevant":"additions text","aria-label":t["aria-label"]},a((w,h)=>{let g=h.length?{...d}:{...d,pointerEvents:"none"};return Y.createElement("div",{tabIndex:-1,className:m(w),"data-stacked":n,style:g,key:`c-${w}`},h.map(({content:x,props:S})=>Y.createElement(yj,{...S,stacked:n,collapseAll:v,isIn:l(S.toastId,S.containerId),key:`t-${S.key}`},x)))}))}const to="/Didiv/assets/nofoto-2f8d9d99.png",fw=()=>{const e=jn(),[t,n]=b.useState([]);b.useEffect(()=>{const o=new Date,a=new Date;a.setDate(o.getDate()-7);const l=a.toISOString();fetch(`https://backenddidiv-production.up.railway.app/api/products?populate=*&filters[createdAt][$gte]=${l}`).then(s=>s.json()).then(s=>n(s.data)).catch(s=>console.error("Помилка завантаження нових товарів:",s))},[]),console.log(t);const r=[...t].sort(()=>Math.random()-.5).slice(0,3),i=o=>{e(po({...o,quantity:1})),K.success(`${o.name} додано в кошик!`)};return!t||t.length===0?null:f.jsxs(AO,{children:[f.jsx(Or,{}),f.jsx(RO,{children:"Нові товари"}),f.jsxs(FO,{children:[r.map(o=>{var a;return f.jsxs(zO,{children:[f.jsxs(NO,{to:`/product/${o.id}`,children:[f.jsx(BO,{children:"Новинка"}),f.jsx("img",{src:((a=o.images)==null?void 0:a[0].url)||to,alt:o.name,onError:l=>{l.currentTarget.onerror=null,l.currentTarget.src=to}}),f.jsx("div",{className:"overlay"})]}),f.jsxs(VO,{children:[f.jsx(UO,{children:o.name}),f.jsxs(HO,{children:[f.jsxs(WO,{children:[o.price," грн"]}),f.jsx(GO,{onClick:()=>i(o),children:f.jsx(fo,{size:22})})]})]})]},o.id)}),f.jsx(qO,{to:"/catalog/new",children:f.jsxs(YO,{children:[f.jsx("p",{children:"Усі новинки"}),f.jsx(XO,{children:f.jsx(Ou,{size:24})})]})})]})]})};function J(){return J=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},J.apply(this,arguments)}function Sj(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function _j(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var Cj=function(){function e(n){var r=this;this._insertTag=function(i){var o;r.tags.length===0?r.insertionPoint?o=r.insertionPoint.nextSibling:r.prepend?o=r.container.firstChild:o=r.before:o=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(i,o),r.tags.push(i)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(r){r.forEach(this._insertTag)},t.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(_j(this));var i=this.tags[this.tags.length-1];if(this.isSpeedy){var o=Sj(i);try{o.insertRule(r,o.cssRules.length)}catch{}}else i.appendChild(document.createTextNode(r));this.ctr++},t.flush=function(){this.tags.forEach(function(r){return r.parentNode&&r.parentNode.removeChild(r)}),this.tags=[],this.ctr=0},e}(),rt="-ms-",Hl="-moz-",ce="-webkit-",pw="comm",em="rule",tm="decl",Ej="@import",hw="@keyframes",kj="@layer",Tj=Math.abs,Bu=String.fromCharCode,Pj=Object.assign;function Oj(e,t){return Ke(e,0)^45?(((t<<2^Ke(e,0))<<2^Ke(e,1))<<2^Ke(e,2))<<2^Ke(e,3):0}function mw(e){return e.trim()}function jj(e,t){return(e=t.exec(e))?e[0]:e}function de(e,t,n){return e.replace(t,n)}function vp(e,t){return e.indexOf(t)}function Ke(e,t){return e.charCodeAt(t)|0}function Ma(e,t,n){return e.slice(t,n)}function xn(e){return e.length}function nm(e){return e.length}function bs(e,t){return t.push(e),e}function Mj(e,t){return e.map(t).join("")}var Vu=1,no=1,gw=0,kt=0,Ie=0,ho="";function Uu(e,t,n,r,i,o,a){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:Vu,column:no,length:a,return:""}}function $o(e,t){return Pj(Uu("",null,null,"",null,null,0),e,{length:-e.length},t)}function $j(){return Ie}function Ij(){return Ie=kt>0?Ke(ho,--kt):0,no--,Ie===10&&(no=1,Vu--),Ie}function Lt(){return Ie=kt<gw?Ke(ho,kt++):0,no++,Ie===10&&(no=1,Vu++),Ie}function En(){return Ke(ho,kt)}function Ks(){return kt}function Ga(e,t){return Ma(ho,e,t)}function $a(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function vw(e){return Vu=no=1,gw=xn(ho=e),kt=0,[]}function yw(e){return ho="",e}function Qs(e){return mw(Ga(kt-1,yp(e===91?e+2:e===40?e+1:e)))}function Dj(e){for(;(Ie=En())&&Ie<33;)Lt();return $a(e)>2||$a(Ie)>3?"":" "}function Lj(e,t){for(;--t&&Lt()&&!(Ie<48||Ie>102||Ie>57&&Ie<65||Ie>70&&Ie<97););return Ga(e,Ks()+(t<6&&En()==32&&Lt()==32))}function yp(e){for(;Lt();)switch(Ie){case e:return kt;case 34:case 39:e!==34&&e!==39&&yp(Ie);break;case 40:e===41&&yp(e);break;case 92:Lt();break}return kt}function Aj(e,t){for(;Lt()&&e+Ie!==47+10;)if(e+Ie===42+42&&En()===47)break;return"/*"+Ga(t,kt-1)+"*"+Bu(e===47?e:Lt())}function Rj(e){for(;!$a(En());)Lt();return Ga(e,kt)}function Fj(e){return yw(Zs("",null,null,null,[""],e=vw(e),0,[0],e))}function Zs(e,t,n,r,i,o,a,l,s){for(var u=0,d=0,c=a,y=0,p=0,m=0,v=1,w=1,h=1,g=0,x="",S=i,T=o,k=r,C=x;w;)switch(m=g,g=Lt()){case 40:if(m!=108&&Ke(C,c-1)==58){vp(C+=de(Qs(g),"&","&\f"),"&\f")!=-1&&(h=-1);break}case 34:case 39:case 91:C+=Qs(g);break;case 9:case 10:case 13:case 32:C+=Dj(m);break;case 92:C+=Lj(Ks()-1,7);continue;case 47:switch(En()){case 42:case 47:bs(zj(Aj(Lt(),Ks()),t,n),s);break;default:C+="/"}break;case 123*v:l[u++]=xn(C)*h;case 125*v:case 59:case 0:switch(g){case 0:case 125:w=0;case 59+d:h==-1&&(C=de(C,/\f/g,"")),p>0&&xn(C)-c&&bs(p>32?W0(C+";",r,n,c-1):W0(de(C," ","")+";",r,n,c-2),s);break;case 59:C+=";";default:if(bs(k=H0(C,t,n,u,d,i,l,x,S=[],T=[],c),o),g===123)if(d===0)Zs(C,t,k,k,S,o,c,l,T);else switch(y===99&&Ke(C,3)===110?100:y){case 100:case 108:case 109:case 115:Zs(e,k,k,r&&bs(H0(e,k,k,0,0,i,l,x,i,S=[],c),T),i,T,c,l,r?S:T);break;default:Zs(C,k,k,k,[""],T,0,l,T)}}u=d=p=0,v=h=1,x=C="",c=a;break;case 58:c=1+xn(C),p=m;default:if(v<1){if(g==123)--v;else if(g==125&&v++==0&&Ij()==125)continue}switch(C+=Bu(g),g*v){case 38:h=d>0?1:(C+="\f",-1);break;case 44:l[u++]=(xn(C)-1)*h,h=1;break;case 64:En()===45&&(C+=Qs(Lt())),y=En(),d=c=xn(x=C+=Rj(Ks())),g++;break;case 45:m===45&&xn(C)==2&&(v=0)}}return o}function H0(e,t,n,r,i,o,a,l,s,u,d){for(var c=i-1,y=i===0?o:[""],p=nm(y),m=0,v=0,w=0;m<r;++m)for(var h=0,g=Ma(e,c+1,c=Tj(v=a[m])),x=e;h<p;++h)(x=mw(v>0?y[h]+" "+g:de(g,/&\f/g,y[h])))&&(s[w++]=x);return Uu(e,t,n,i===0?em:l,s,u,d)}function zj(e,t,n){return Uu(e,t,n,pw,Bu($j()),Ma(e,2,-2),0)}function W0(e,t,n,r){return Uu(e,t,n,tm,Ma(e,0,r),Ma(e,r+1,-1),r)}function zi(e,t){for(var n="",r=nm(e),i=0;i<r;i++)n+=t(e[i],i,e,t)||"";return n}function Nj(e,t,n,r){switch(e.type){case kj:if(e.children.length)break;case Ej:case tm:return e.return=e.return||e.value;case pw:return"";case hw:return e.return=e.value+"{"+zi(e.children,r)+"}";case em:e.value=e.props.join(",")}return xn(n=zi(e.children,r))?e.return=e.value+"{"+n+"}":""}function Bj(e){var t=nm(e);return function(n,r,i,o){for(var a="",l=0;l<t;l++)a+=e[l](n,r,i,o)||"";return a}}function Vj(e){return function(t){t.root||(t=t.return)&&e(t)}}function Uj(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var Hj=function(t,n,r){for(var i=0,o=0;i=o,o=En(),i===38&&o===12&&(n[r]=1),!$a(o);)Lt();return Ga(t,kt)},Wj=function(t,n){var r=-1,i=44;do switch($a(i)){case 0:i===38&&En()===12&&(n[r]=1),t[r]+=Hj(kt-1,n,r);break;case 2:t[r]+=Qs(i);break;case 4:if(i===44){t[++r]=En()===58?"&\f":"",n[r]=t[r].length;break}default:t[r]+=Bu(i)}while(i=Lt());return t},Gj=function(t,n){return yw(Wj(vw(t),n))},G0=new WeakMap,qj=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var n=t.value,r=t.parent,i=t.column===r.column&&t.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(t.props.length===1&&n.charCodeAt(0)!==58&&!G0.get(r))&&!i){G0.set(t,!0);for(var o=[],a=Gj(n,o),l=r.props,s=0,u=0;s<a.length;s++)for(var d=0;d<l.length;d++,u++)t.props[u]=o[s]?a[s].replace(/&\f/g,l[d]):l[d]+" "+a[s]}}},Yj=function(t){if(t.type==="decl"){var n=t.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(t.return="",t.value="")}};function xw(e,t){switch(Oj(e,t)){case 5103:return ce+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return ce+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return ce+e+Hl+e+rt+e+e;case 6828:case 4268:return ce+e+rt+e+e;case 6165:return ce+e+rt+"flex-"+e+e;case 5187:return ce+e+de(e,/(\w+).+(:[^]+)/,ce+"box-$1$2"+rt+"flex-$1$2")+e;case 5443:return ce+e+rt+"flex-item-"+de(e,/flex-|-self/,"")+e;case 4675:return ce+e+rt+"flex-line-pack"+de(e,/align-content|flex-|-self/,"")+e;case 5548:return ce+e+rt+de(e,"shrink","negative")+e;case 5292:return ce+e+rt+de(e,"basis","preferred-size")+e;case 6060:return ce+"box-"+de(e,"-grow","")+ce+e+rt+de(e,"grow","positive")+e;case 4554:return ce+de(e,/([^-])(transform)/g,"$1"+ce+"$2")+e;case 6187:return de(de(de(e,/(zoom-|grab)/,ce+"$1"),/(image-set)/,ce+"$1"),e,"")+e;case 5495:case 3959:return de(e,/(image-set\([^]*)/,ce+"$1$`$1");case 4968:return de(de(e,/(.+:)(flex-)?(.*)/,ce+"box-pack:$3"+rt+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+ce+e+e;case 4095:case 3583:case 4068:case 2532:return de(e,/(.+)-inline(.+)/,ce+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(xn(e)-1-t>6)switch(Ke(e,t+1)){case 109:if(Ke(e,t+4)!==45)break;case 102:return de(e,/(.+:)(.+)-([^]+)/,"$1"+ce+"$2-$3$1"+Hl+(Ke(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~vp(e,"stretch")?xw(de(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(Ke(e,t+1)!==115)break;case 6444:switch(Ke(e,xn(e)-3-(~vp(e,"!important")&&10))){case 107:return de(e,":",":"+ce)+e;case 101:return de(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+ce+(Ke(e,14)===45?"inline-":"")+"box$3$1"+ce+"$2$3$1"+rt+"$2box$3")+e}break;case 5936:switch(Ke(e,t+11)){case 114:return ce+e+rt+de(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return ce+e+rt+de(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return ce+e+rt+de(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return ce+e+rt+e+e}return e}var Xj=function(t,n,r,i){if(t.length>-1&&!t.return)switch(t.type){case tm:t.return=xw(t.value,t.length);break;case hw:return zi([$o(t,{value:de(t.value,"@","@"+ce)})],i);case em:if(t.length)return Mj(t.props,function(o){switch(jj(o,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return zi([$o(t,{props:[de(o,/:(read-\w+)/,":"+Hl+"$1")]})],i);case"::placeholder":return zi([$o(t,{props:[de(o,/:(plac\w+)/,":"+ce+"input-$1")]}),$o(t,{props:[de(o,/:(plac\w+)/,":"+Hl+"$1")]}),$o(t,{props:[de(o,/:(plac\w+)/,rt+"input-$1")]})],i)}return""})}},Kj=[Xj],Qj=function(t){var n=t.key;if(n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(v){var w=v.getAttribute("data-emotion");w.indexOf(" ")!==-1&&(document.head.appendChild(v),v.setAttribute("data-s",""))})}var i=t.stylisPlugins||Kj,o={},a,l=[];a=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(v){for(var w=v.getAttribute("data-emotion").split(" "),h=1;h<w.length;h++)o[w[h]]=!0;l.push(v)});var s,u=[qj,Yj];{var d,c=[Nj,Vj(function(v){d.insert(v)})],y=Bj(u.concat(i,c)),p=function(w){return zi(Fj(w),y)};s=function(w,h,g,x){d=g,p(w?w+"{"+h.styles+"}":h.styles),x&&(m.inserted[h.name]=!0)}}var m={key:n,sheet:new Cj({key:n,container:a,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:o,registered:{},insert:s};return m.sheet.hydrate(l),m},bw={exports:{}},me={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qe=typeof Symbol=="function"&&Symbol.for,rm=qe?Symbol.for("react.element"):60103,im=qe?Symbol.for("react.portal"):60106,Hu=qe?Symbol.for("react.fragment"):60107,Wu=qe?Symbol.for("react.strict_mode"):60108,Gu=qe?Symbol.for("react.profiler"):60114,qu=qe?Symbol.for("react.provider"):60109,Yu=qe?Symbol.for("react.context"):60110,om=qe?Symbol.for("react.async_mode"):60111,Xu=qe?Symbol.for("react.concurrent_mode"):60111,Ku=qe?Symbol.for("react.forward_ref"):60112,Qu=qe?Symbol.for("react.suspense"):60113,Zj=qe?Symbol.for("react.suspense_list"):60120,Zu=qe?Symbol.for("react.memo"):60115,Ju=qe?Symbol.for("react.lazy"):60116,Jj=qe?Symbol.for("react.block"):60121,e3=qe?Symbol.for("react.fundamental"):60117,t3=qe?Symbol.for("react.responder"):60118,n3=qe?Symbol.for("react.scope"):60119;function Bt(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case rm:switch(e=e.type,e){case om:case Xu:case Hu:case Gu:case Wu:case Qu:return e;default:switch(e=e&&e.$$typeof,e){case Yu:case Ku:case Ju:case Zu:case qu:return e;default:return t}}case im:return t}}}function ww(e){return Bt(e)===Xu}me.AsyncMode=om;me.ConcurrentMode=Xu;me.ContextConsumer=Yu;me.ContextProvider=qu;me.Element=rm;me.ForwardRef=Ku;me.Fragment=Hu;me.Lazy=Ju;me.Memo=Zu;me.Portal=im;me.Profiler=Gu;me.StrictMode=Wu;me.Suspense=Qu;me.isAsyncMode=function(e){return ww(e)||Bt(e)===om};me.isConcurrentMode=ww;me.isContextConsumer=function(e){return Bt(e)===Yu};me.isContextProvider=function(e){return Bt(e)===qu};me.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===rm};me.isForwardRef=function(e){return Bt(e)===Ku};me.isFragment=function(e){return Bt(e)===Hu};me.isLazy=function(e){return Bt(e)===Ju};me.isMemo=function(e){return Bt(e)===Zu};me.isPortal=function(e){return Bt(e)===im};me.isProfiler=function(e){return Bt(e)===Gu};me.isStrictMode=function(e){return Bt(e)===Wu};me.isSuspense=function(e){return Bt(e)===Qu};me.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Hu||e===Xu||e===Gu||e===Wu||e===Qu||e===Zj||typeof e=="object"&&e!==null&&(e.$$typeof===Ju||e.$$typeof===Zu||e.$$typeof===qu||e.$$typeof===Yu||e.$$typeof===Ku||e.$$typeof===e3||e.$$typeof===t3||e.$$typeof===n3||e.$$typeof===Jj)};me.typeOf=Bt;bw.exports=me;var r3=bw.exports,Sw=r3,i3={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},o3={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},_w={};_w[Sw.ForwardRef]=i3;_w[Sw.Memo]=o3;var a3=!0;function Cw(e,t,n){var r="";return n.split(" ").forEach(function(i){e[i]!==void 0?t.push(e[i]+";"):r+=i+" "}),r}var am=function(t,n,r){var i=t.key+"-"+n.name;(r===!1||a3===!1)&&t.registered[i]===void 0&&(t.registered[i]=n.styles)},Ew=function(t,n,r){am(t,n,r);var i=t.key+"-"+n.name;if(t.inserted[n.name]===void 0){var o=n;do t.insert(n===o?"."+i:"",o,t.sheet,!0),o=o.next;while(o!==void 0)}};function s3(e){for(var t=0,n,r=0,i=e.length;i>=4;++r,i-=4)n=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(i){case 3:t^=(e.charCodeAt(r+2)&255)<<16;case 2:t^=(e.charCodeAt(r+1)&255)<<8;case 1:t^=e.charCodeAt(r)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var l3={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},u3=/[A-Z]|^ms/g,c3=/_EMO_([^_]+?)_([^]*?)_EMO_/g,kw=function(t){return t.charCodeAt(1)===45},q0=function(t){return t!=null&&typeof t!="boolean"},fd=Uj(function(e){return kw(e)?e:e.replace(u3,"-$&").toLowerCase()}),Y0=function(t,n){switch(t){case"animation":case"animationName":if(typeof n=="string")return n.replace(c3,function(r,i,o){return bn={name:i,styles:o,next:bn},i})}return l3[t]!==1&&!kw(t)&&typeof n=="number"&&n!==0?n+"px":n};function Ia(e,t,n){if(n==null)return"";if(n.__emotion_styles!==void 0)return n;switch(typeof n){case"boolean":return"";case"object":{if(n.anim===1)return bn={name:n.name,styles:n.styles,next:bn},n.name;if(n.styles!==void 0){var r=n.next;if(r!==void 0)for(;r!==void 0;)bn={name:r.name,styles:r.styles,next:bn},r=r.next;var i=n.styles+";";return i}return d3(e,t,n)}case"function":{if(e!==void 0){var o=bn,a=n(e);return bn=o,Ia(e,t,a)}break}}if(t==null)return n;var l=t[n];return l!==void 0?l:n}function d3(e,t,n){var r="";if(Array.isArray(n))for(var i=0;i<n.length;i++)r+=Ia(e,t,n[i])+";";else for(var o in n){var a=n[o];if(typeof a!="object")t!=null&&t[a]!==void 0?r+=o+"{"+t[a]+"}":q0(a)&&(r+=fd(o)+":"+Y0(o,a)+";");else if(Array.isArray(a)&&typeof a[0]=="string"&&(t==null||t[a[0]]===void 0))for(var l=0;l<a.length;l++)q0(a[l])&&(r+=fd(o)+":"+Y0(o,a[l])+";");else{var s=Ia(e,t,a);switch(o){case"animation":case"animationName":{r+=fd(o)+":"+s+";";break}default:r+=o+"{"+s+"}"}}}return r}var X0=/label:\s*([^\s;\n{]+)\s*(;|$)/g,bn,sm=function(t,n,r){if(t.length===1&&typeof t[0]=="object"&&t[0]!==null&&t[0].styles!==void 0)return t[0];var i=!0,o="";bn=void 0;var a=t[0];a==null||a.raw===void 0?(i=!1,o+=Ia(r,n,a)):o+=a[0];for(var l=1;l<t.length;l++)o+=Ia(r,n,t[l]),i&&(o+=a[l]);X0.lastIndex=0;for(var s="",u;(u=X0.exec(o))!==null;)s+="-"+u[1];var d=s3(o)+s;return{name:d,styles:o,next:bn}},f3=function(t){return t()},p3=Zd["useInsertionEffect"]?Zd["useInsertionEffect"]:!1,Tw=p3||f3,lm={}.hasOwnProperty,Pw=b.createContext(typeof HTMLElement<"u"?Qj({key:"css"}):null);Pw.Provider;var Ow=function(t){return b.forwardRef(function(n,r){var i=b.useContext(Pw);return t(n,i,r)})},jw=b.createContext({}),xp="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",h3=function(t,n){var r={};for(var i in n)lm.call(n,i)&&(r[i]=n[i]);return r[xp]=t,r},m3=function(t){var n=t.cache,r=t.serialized,i=t.isStringTag;return am(n,r,i),Tw(function(){return Ew(n,r,i)}),null},g3=Ow(function(e,t,n){var r=e.css;typeof r=="string"&&t.registered[r]!==void 0&&(r=t.registered[r]);var i=e[xp],o=[r],a="";typeof e.className=="string"?a=Cw(t.registered,o,e.className):e.className!=null&&(a=e.className+" ");var l=sm(o,void 0,b.useContext(jw));a+=t.key+"-"+l.name;var s={};for(var u in e)lm.call(e,u)&&u!=="css"&&u!==xp&&(s[u]=e[u]);return s.ref=n,s.className=a,b.createElement(b.Fragment,null,b.createElement(m3,{cache:t,serialized:l,isStringTag:typeof i=="string"}),b.createElement(i,s))}),v3=g3,Q=function(t,n){var r=arguments;if(n==null||!lm.call(n,"css"))return b.createElement.apply(void 0,r);var i=r.length,o=new Array(i);o[0]=v3,o[1]=h3(t,n);for(var a=2;a<i;a++)o[a]=r[a];return b.createElement.apply(null,o)};function um(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return sm(t)}var y3=function(){var t=um.apply(void 0,arguments),n="animation-"+t.name;return{name:n,styles:"@keyframes "+n+"{"+t.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},x3=Qk,b3=function(t){return t!=="theme"},K0=function(t){return typeof t=="string"&&t.charCodeAt(0)>96?x3:b3},Q0=function(t,n,r){var i;if(n){var o=n.shouldForwardProp;i=t.__emotion_forwardProp&&o?function(a){return t.__emotion_forwardProp(a)&&o(a)}:o}return typeof i!="function"&&r&&(i=t.__emotion_forwardProp),i},w3=function(t){var n=t.cache,r=t.serialized,i=t.isStringTag;return am(n,r,i),Tw(function(){return Ew(n,r,i)}),null},S3=function e(t,n){var r=t.__emotion_real===t,i=r&&t.__emotion_base||t,o,a;n!==void 0&&(o=n.label,a=n.target);var l=Q0(t,n,r),s=l||K0(i),u=!s("as");return function(){var d=arguments,c=r&&t.__emotion_styles!==void 0?t.__emotion_styles.slice(0):[];if(o!==void 0&&c.push("label:"+o+";"),d[0]==null||d[0].raw===void 0)c.push.apply(c,d);else{c.push(d[0][0]);for(var y=d.length,p=1;p<y;p++)c.push(d[p],d[0][p])}var m=Ow(function(v,w,h){var g=u&&v.as||i,x="",S=[],T=v;if(v.theme==null){T={};for(var k in v)T[k]=v[k];T.theme=b.useContext(jw)}typeof v.className=="string"?x=Cw(w.registered,S,v.className):v.className!=null&&(x=v.className+" ");var C=sm(c.concat(S),w.registered,T);x+=w.key+"-"+C.name,a!==void 0&&(x+=" "+a);var _=u&&l===void 0?K0(g):s,$={};for(var M in v)u&&M==="as"||_(M)&&($[M]=v[M]);return $.className=x,$.ref=h,b.createElement(b.Fragment,null,b.createElement(w3,{cache:w,serialized:C,isStringTag:typeof g=="string"}),b.createElement(g,$))});return m.displayName=o!==void 0?o:"Styled("+(typeof i=="string"?i:i.displayName||i.name||"Component")+")",m.defaultProps=t.defaultProps,m.__emotion_real=m,m.__emotion_base=i,m.__emotion_styles=c,m.__emotion_forwardProp=l,Object.defineProperty(m,"toString",{value:function(){return"."+a}}),m.withComponent=function(v,w){return e(v,J({},n,w,{shouldForwardProp:Q0(m,w,!0)})).apply(void 0,c)},m}},_3=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],Ae=S3.bind();_3.forEach(function(e){Ae[e]=Ae(e)});const C3=Ae.section`
  background-color: var(--second-background);
`,E3=Ae.div`
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
`,k3=Ae.div`

`,T3=Ae.h1`
  font-size: 32px;
  font-family: var(--main-font);
  color: var(--black-color);
  text-transform: uppercase;
  margin-bottom: 20px;
`,P3=Ae.div`
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
`;const O3=Ae(Oe)`
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
`,j3=Ae.div`
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
`,M3=Ae.img`
  width: 100%;
  height: 200px;
  object-fit: cover;

  display: block;
  @media screen and (max-width: 768px) {
    height: 250px;
  }
`,$3=Ae.p`
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
`;var I3={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"};D3(I3);function D3(e){var t={};for(var n in e)e.hasOwnProperty(n)&&(t[e[n]]=n);return t}var L3="#4fa94d",A3={"aria-busy":!0,role:"progressbar"},R3=E.div`
  display: ${e=>e.$visible?"flex":"none"};
`,F3="http://www.w3.org/2000/svg",qa=({height:e=100,width:t=100,radius:n=5,color:r=L3,ariaLabel:i="ball-triangle-loading",wrapperClass:o,wrapperStyle:a,visible:l=!0})=>f.jsx(R3,{style:{...a},$visible:l,className:o,"data-testid":"ball-triangle-loading","aria-label":i,...A3,children:f.jsxs("svg",{height:e,width:t,stroke:r,viewBox:"0 0 57 57",xmlns:F3,"data-testid":"ball-triangle-svg",children:[f.jsx("title",{children:"Ball Triangle"}),f.jsx("desc",{children:"Animated representation of three balls"}),f.jsx("g",{fill:"none",fillRule:"evenodd",children:f.jsxs("g",{transform:"translate(1 1)",strokeWidth:"2",children:[f.jsxs("circle",{cx:"5",cy:"50",r:n,children:[f.jsx("animate",{attributeName:"cy",begin:"0s",dur:"2.2s",values:"50;5;50;50",calcMode:"linear",repeatCount:"indefinite"}),f.jsx("animate",{attributeName:"cx",begin:"0s",dur:"2.2s",values:"5;27;49;5",calcMode:"linear",repeatCount:"indefinite"})]}),f.jsxs("circle",{cx:"27",cy:"5",r:n,children:[f.jsx("animate",{attributeName:"cy",begin:"0s",dur:"2.2s",from:"5",to:"5",values:"5;50;50;5",calcMode:"linear",repeatCount:"indefinite"}),f.jsx("animate",{attributeName:"cx",begin:"0s",dur:"2.2s",from:"27",to:"27",values:"27;49;5;27",calcMode:"linear",repeatCount:"indefinite"})]}),f.jsxs("circle",{cx:"49",cy:"50",r:n,children:[f.jsx("animate",{attributeName:"cy",begin:"0s",dur:"2.2s",values:"50;50;5;50",calcMode:"linear",repeatCount:"indefinite"}),f.jsx("animate",{attributeName:"cx",from:"49",to:"49",begin:"0s",dur:"2.2s",values:"49;5;27;49",calcMode:"linear",repeatCount:"indefinite"})]})]})})]})}),Jt=242.776657104492,z3=1.6,N3=Gh`
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
`;E.path`
  stroke-dasharray: ${Jt*.01}px, ${Jt};
  stroke-dashoffset: 0;
  animation: ${N3} ${z3}s linear infinite;
`;var B3=Gh`
to {
   transform: rotate(360deg);
 }
`;E.svg`
  animation: ${B3} ${e=>String(e.$animationDuration).endsWith("s")?String(e.$animationDuration):`${e.$animationDuration}s`} steps(12, end) infinite;
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
`;var V3=Gh`
to {
   stroke-dashoffset: 136;
 }
`;E.polygon`
  stroke-dasharray: 17;
  animation: ${V3} 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;
`;E.svg`
  transform-origin: 50% 65%;
`;const U3=()=>{const[e,t]=b.useState([]),[n,r]=b.useState(!0);return b.useEffect(()=>{async function i(){try{r(!0);const a=await(await fetch("https://backenddidiv-production.up.railway.app/api/categories?populate=*&pagination[limit]=50&sort=title:asc")).json();console.log(a),t(a.data.map(l=>{var s;return{id:l.id_title,title:l.title,image:(s=l.image)==null?void 0:s.url}}))}catch(o){console.log(o)}finally{r(!1)}}i()},[]),n?f.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"100vw",height:"100vh"},children:f.jsx(qa,{height:100,width:100,radius:5,color:"var(--orange-color)",ariaLabel:"ball-triangle-loading",wrapperStyle:{},wrapperClass:"",visible:!0})}):f.jsx(C3,{children:f.jsxs(E3,{children:[f.jsx(k3,{children:f.jsx(fw,{})}),f.jsx(T3,{children:"Каталог"}),f.jsx(P3,{children:e.map(i=>f.jsxs(O3,{to:`/catalog/${i.title}`,children:[f.jsx(j3,{children:f.jsx(M3,{src:i.image,alt:i.title})}),f.jsx($3,{children:i.title})]},i.id))})]})})},H3=Ae.div`

padding-top: 100px;
padding-bottom: 250px;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`,W3=Ae.h1`
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
`,G3=Ae.p`
  color: #191919;
  font-size: 18px;
  max-width: 600px;
      text-align: center;
      margin-bottom: 50px;
      @media screen and (min-width: 768px) {
 font-size: 25px;
  }
`,q3=Ae(Oe)`

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

  
`,Y3=()=>f.jsxs(H3,{children:[f.jsxs(W3,{children:[" ",f.jsx("span",{children:"404"}),"  PAGE NOT FOUND"]}),f.jsx(G3,{children:" Ой, схоже, ти збився з маршруту! На жаль, ця сторінка безслідно зникла десь на бездоріжжі. Спробуй повернутися на головну "}),f.jsx(q3,{children:" На головну"})]});const X3=E.div`
width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
   font-family: var(--main-font);
`,K3=E.div`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  margin: 0;
`;var Mw={},$w={},ec={},Iw={exports:{}},Ya={};/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var Z0=Object.getOwnPropertySymbols,Q3=Object.prototype.hasOwnProperty,Z3=Object.prototype.propertyIsEnumerable;function J3(e){if(e==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}function eM(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de",Object.getOwnPropertyNames(e)[0]==="5")return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;var r=Object.getOwnPropertyNames(t).map(function(o){return t[o]});if(r.join("")!=="0123456789")return!1;var i={};return"abcdefghijklmnopqrst".split("").forEach(function(o){i[o]=o}),Object.keys(Object.assign({},i)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}var tM=eM()?Object.assign:function(e,t){for(var n,r=J3(e),i,o=1;o<arguments.length;o++){n=Object(arguments[o]);for(var a in n)Q3.call(n,a)&&(r[a]=n[a]);if(Z0){i=Z0(n);for(var l=0;l<i.length;l++)Z3.call(n,i[l])&&(r[i[l]]=n[i[l]])}}return r},Dw={exports:{}},le={};/** @license React v17.0.2
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cm=tM,mo=60103,Lw=60106;le.Fragment=60107;le.StrictMode=60108;le.Profiler=60114;var Aw=60109,Rw=60110,Fw=60112;le.Suspense=60113;var zw=60115,Nw=60116;if(typeof Symbol=="function"&&Symbol.for){var Zt=Symbol.for;mo=Zt("react.element"),Lw=Zt("react.portal"),le.Fragment=Zt("react.fragment"),le.StrictMode=Zt("react.strict_mode"),le.Profiler=Zt("react.profiler"),Aw=Zt("react.provider"),Rw=Zt("react.context"),Fw=Zt("react.forward_ref"),le.Suspense=Zt("react.suspense"),zw=Zt("react.memo"),Nw=Zt("react.lazy")}var J0=typeof Symbol=="function"&&Symbol.iterator;function nM(e){return e===null||typeof e!="object"?null:(e=J0&&e[J0]||e["@@iterator"],typeof e=="function"?e:null)}function Xa(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Bw={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Vw={};function go(e,t,n){this.props=e,this.context=t,this.refs=Vw,this.updater=n||Bw}go.prototype.isReactComponent={};go.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error(Xa(85));this.updater.enqueueSetState(this,e,t,"setState")};go.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Uw(){}Uw.prototype=go.prototype;function dm(e,t,n){this.props=e,this.context=t,this.refs=Vw,this.updater=n||Bw}var fm=dm.prototype=new Uw;fm.constructor=dm;cm(fm,go.prototype);fm.isPureReactComponent=!0;var pm={current:null},Hw=Object.prototype.hasOwnProperty,Ww={key:!0,ref:!0,__self:!0,__source:!0};function Gw(e,t,n){var r,i={},o=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(o=""+t.key),t)Hw.call(t,r)&&!Ww.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var s=Array(l),u=0;u<l;u++)s[u]=arguments[u+2];i.children=s}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:mo,type:e,key:o,ref:a,props:i,_owner:pm.current}}function rM(e,t){return{$$typeof:mo,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function hm(e){return typeof e=="object"&&e!==null&&e.$$typeof===mo}function iM(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var ev=/\/+/g;function pd(e,t){return typeof e=="object"&&e!==null&&e.key!=null?iM(""+e.key):t.toString(36)}function Js(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case mo:case Lw:a=!0}}if(a)return a=e,i=i(a),e=r===""?"."+pd(a,0):r,Array.isArray(i)?(n="",e!=null&&(n=e.replace(ev,"$&/")+"/"),Js(i,t,n,"",function(u){return u})):i!=null&&(hm(i)&&(i=rM(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(ev,"$&/")+"/")+e)),t.push(i)),1;if(a=0,r=r===""?".":r+":",Array.isArray(e))for(var l=0;l<e.length;l++){o=e[l];var s=r+pd(o,l);a+=Js(o,t,n,s,i)}else if(s=nM(e),typeof s=="function")for(e=s.call(e),l=0;!(o=e.next()).done;)o=o.value,s=r+pd(o,l++),a+=Js(o,t,n,s,i);else if(o==="object")throw t=""+e,Error(Xa(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t));return a}function ws(e,t,n){if(e==null)return e;var r=[],i=0;return Js(e,r,"","",function(o){return t.call(n,o,i++)}),r}function oM(e){if(e._status===-1){var t=e._result;t=t(),e._status=0,e._result=t,t.then(function(n){e._status===0&&(n=n.default,e._status=1,e._result=n)},function(n){e._status===0&&(e._status=2,e._result=n)})}if(e._status===1)return e._result;throw e._result}var qw={current:null};function Zn(){var e=qw.current;if(e===null)throw Error(Xa(321));return e}var aM={ReactCurrentDispatcher:qw,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:pm,IsSomeRendererActing:{current:!1},assign:cm};le.Children={map:ws,forEach:function(e,t,n){ws(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ws(e,function(){t++}),t},toArray:function(e){return ws(e,function(t){return t})||[]},only:function(e){if(!hm(e))throw Error(Xa(143));return e}};le.Component=go;le.PureComponent=dm;le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=aM;le.cloneElement=function(e,t,n){if(e==null)throw Error(Xa(267,e));var r=cm({},e.props),i=e.key,o=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,a=pm.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in t)Hw.call(t,s)&&!Ww.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&l!==void 0?l[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){l=Array(s);for(var u=0;u<s;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:mo,type:e.type,key:i,ref:o,props:r,_owner:a}};le.createContext=function(e,t){return t===void 0&&(t=null),e={$$typeof:Rw,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider={$$typeof:Aw,_context:e},e.Consumer=e};le.createElement=Gw;le.createFactory=function(e){var t=Gw.bind(null,e);return t.type=e,t};le.createRef=function(){return{current:null}};le.forwardRef=function(e){return{$$typeof:Fw,render:e}};le.isValidElement=hm;le.lazy=function(e){return{$$typeof:Nw,_payload:{_status:-1,_result:e},_init:oM}};le.memo=function(e,t){return{$$typeof:zw,type:e,compare:t===void 0?null:t}};le.useCallback=function(e,t){return Zn().useCallback(e,t)};le.useContext=function(e,t){return Zn().useContext(e,t)};le.useDebugValue=function(){};le.useEffect=function(e,t){return Zn().useEffect(e,t)};le.useImperativeHandle=function(e,t,n){return Zn().useImperativeHandle(e,t,n)};le.useLayoutEffect=function(e,t){return Zn().useLayoutEffect(e,t)};le.useMemo=function(e,t){return Zn().useMemo(e,t)};le.useReducer=function(e,t,n){return Zn().useReducer(e,t,n)};le.useRef=function(e){return Zn().useRef(e)};le.useState=function(e){return Zn().useState(e)};le.version="17.0.2";Dw.exports=le;var sM=Dw.exports;/** @license React v17.0.2
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lM=sM,Yw=60103;Ya.Fragment=60107;if(typeof Symbol=="function"&&Symbol.for){var tv=Symbol.for;Yw=tv("react.element"),Ya.Fragment=tv("react.fragment")}var uM=lM.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,cM=Object.prototype.hasOwnProperty,dM={key:!0,ref:!0,__self:!0,__source:!0};function Xw(e,t,n){var r,i={},o=null,a=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)cM.call(t,r)&&!dM.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:Yw,type:e,key:o,ref:a,props:i,_owner:uM.current}}Ya.jsx=Xw;Ya.jsxs=Xw;Iw.exports=Ya;var Pt=Iw.exports,Kw={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var t={}.hasOwnProperty;function n(){for(var o="",a=0;a<arguments.length;a++){var l=arguments[a];l&&(o=i(o,r(l)))}return o}function r(o){if(typeof o=="string"||typeof o=="number")return o;if(typeof o!="object")return"";if(Array.isArray(o))return n.apply(null,o);if(o.toString!==Object.prototype.toString&&!o.toString.toString().includes("[native code]"))return o.toString();var a="";for(var l in o)t.call(o,l)&&o[l]&&(a=i(a,l));return a}function i(o,a){return a?o?o+" "+a:o+a:o}e.exports?(n.default=n,e.exports=n):window.classNames=n})()})(Kw);var Ot=Kw.exports;const fM={"lds-circle":"_lds-circle_qlxhy_1"},pM=Object.freeze(Object.defineProperty({__proto__:null,default:fM},Symbol.toStringTag,{value:"Module"})),hM=Tt(pM);var Qw=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(ec,"__esModule",{value:!0});ec.Circle=void 0;const mM=Pt,gM=Qw(Ot),vM=Qw(hM);function yM({color:e="#7f58af",size:t=64,className:n,style:r,...i}){return(0,mM.jsx)("div",{className:(0,gM.default)(vM.default["lds-circle"],n),style:{background:e,width:t,height:t,...r},...i})}ec.Circle=yM;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Circle=void 0;var t=ec;Object.defineProperty(e,"Circle",{enumerable:!0,get:function(){return t.Circle}})})($w);var Zw={},tc={};const xM={"lds-default":"_lds-default_wt1n8_1"},bM=Object.freeze(Object.defineProperty({__proto__:null,default:xM},Symbol.toStringTag,{value:"Module"})),wM=Tt(bM);var Jw=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(tc,"__esModule",{value:!0});tc.Default=void 0;const nv=Pt,SM=Jw(Ot),_M=Jw(wM);function CM({color:e="#7f58af",size:t=80,className:n,style:r,...i}){const o=[...Array(12)].map((a,l)=>(0,nv.jsx)("div",{style:{background:`${e}`,width:t*.075,height:t*.075}},l));return(0,nv.jsx)("div",{className:(0,SM.default)(_M.default["lds-default"],n),style:{height:t,width:t,...r},...i,children:o})}tc.Default=CM;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Default=void 0;var t=tc;Object.defineProperty(e,"Default",{enumerable:!0,get:function(){return t.Default}})})(Zw);var eS={},nc={};const EM={"lds-dual-ring":"_lds-dual-ring_pbai0_1","lds-dual-ring-after":"_lds-dual-ring-after_pbai0_6"},kM=Object.freeze(Object.defineProperty({__proto__:null,default:EM},Symbol.toStringTag,{value:"Module"})),TM=Tt(kM);var tS=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(nc,"__esModule",{value:!0});nc.DualRing=void 0;const rv=Pt,iv=tS(Ot),ov=tS(TM);function PM({color:e="#7f58af",size:t=80,className:n,style:r,...i}){return(0,rv.jsx)("div",{className:(0,iv.default)(ov.default["lds-dual-ring"],n),style:{width:t,height:t,...r},...i,children:(0,rv.jsx)("div",{className:(0,iv.default)(ov.default["lds-dual-ring-after"]),style:{borderColor:`${e} transparent`,borderWidth:t*.1,width:t*.7-6,height:t*.7-6}})})}nc.DualRing=PM;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.DualRing=void 0;var t=nc;Object.defineProperty(e,"DualRing",{enumerable:!0,get:function(){return t.DualRing}})})(eS);var nS={},rc={};const OM={"lds-ellipsis":"_lds-ellipsis_1fzd3_1","lds-ellipsis1":"_lds-ellipsis1_1fzd3_1","lds-ellipsis2":"_lds-ellipsis2_1fzd3_1","lds-ellipsis3":"_lds-ellipsis3_1fzd3_1"},jM=Object.freeze(Object.defineProperty({__proto__:null,default:OM},Symbol.toStringTag,{value:"Module"})),MM=Tt(jM);var rS=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(rc,"__esModule",{value:!0});rc.Ellipsis=void 0;const av=Pt,$M=rS(Ot),IM=rS(MM);function DM({color:e="#7f58af",size:t=80,className:n,style:r,...i}){const o=[...Array(4)].map((a,l)=>(0,av.jsx)("div",{style:{background:`${e}`}},l));return(0,av.jsx)("div",{className:(0,$M.default)(IM.default["lds-ellipsis"],n),style:{...r,width:t,height:t},...i,children:o})}rc.Ellipsis=DM;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Ellipsis=void 0;var t=rc;Object.defineProperty(e,"Ellipsis",{enumerable:!0,get:function(){return t.Ellipsis}})})(nS);var iS={},ic={};const LM={"lds-facebook":"_lds-facebook_1ts9g_1"},AM=Object.freeze(Object.defineProperty({__proto__:null,default:LM},Symbol.toStringTag,{value:"Module"})),RM=Tt(AM);var oS=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(ic,"__esModule",{value:!0});ic.Facebook=void 0;const sv=Pt,FM=oS(Ot),zM=oS(RM);function NM({color:e="#7f58af",size:t=80,className:n,style:r,...i}){const o=[...Array(3)].map((a,l)=>(0,sv.jsx)("div",{style:{background:`${e}`}},l));return(0,sv.jsx)("div",{className:(0,FM.default)(zM.default["lds-facebook"],n),style:{width:t,height:t,...r},...i,children:o})}ic.Facebook=NM;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Facebook=void 0;var t=ic;Object.defineProperty(e,"Facebook",{enumerable:!0,get:function(){return t.Facebook}})})(iS);var aS={},oc={};const BM={"lds-grid":"_lds-grid_1ftub_1"},VM=Object.freeze(Object.defineProperty({__proto__:null,default:BM},Symbol.toStringTag,{value:"Module"})),UM=Tt(VM);var sS=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(oc,"__esModule",{value:!0});oc.Grid=void 0;const lv=Pt,HM=sS(Ot),WM=sS(UM);function GM({color:e="#7f58af",size:t=80,className:n,style:r,...i}){const o=[...Array(9)].map((a,l)=>(0,lv.jsx)("div",{style:{background:`${e}`}},l));return(0,lv.jsx)("div",{className:(0,HM.default)(WM.default["lds-grid"],n),style:{width:t,height:t,...r},...i,children:o})}oc.Grid=GM;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Grid=void 0;var t=oc;Object.defineProperty(e,"Grid",{enumerable:!0,get:function(){return t.Grid}})})(aS);var lS={},ac={};const qM={"lds-heart":"_lds-heart_e4yfg_1","div-after":"_div-after_e4yfg_18","div-before":"_div-before_e4yfg_19"},YM=Object.freeze(Object.defineProperty({__proto__:null,default:qM},Symbol.toStringTag,{value:"Module"})),XM=Tt(YM);var uS=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(ac,"__esModule",{value:!0});ac.Heart=void 0;const Ss=Pt,hd=uS(Ot),md=uS(XM);function KM({color:e="#7f58af",size:t=80,className:n,style:r,...i}){return(0,Ss.jsx)("div",{className:(0,hd.default)(md.default["lds-heart"],n),style:{width:t,height:t,...r},...i,children:(0,Ss.jsxs)("div",{style:{background:e,width:t*.4,height:t*.4,left:t*.3,top:t*.3},children:[(0,Ss.jsx)("div",{className:(0,hd.default)(md.default["div-before"]),style:{background:e,width:t*.4,height:t*.4,left:-t*.3}}),(0,Ss.jsx)("div",{className:(0,hd.default)(md.default["div-after"]),style:{background:e,width:t*.4,height:t*.4,top:-t*.3}})]})})}ac.Heart=KM;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Heart=void 0;var t=ac;Object.defineProperty(e,"Heart",{enumerable:!0,get:function(){return t.Heart}})})(lS);var cS={},sc={};const QM={"lds-hourglass":"_lds-hourglass_mn3qi_1","lds-hourglass-after":"_lds-hourglass-after_mn3qi_7"},ZM=Object.freeze(Object.defineProperty({__proto__:null,default:QM},Symbol.toStringTag,{value:"Module"})),JM=Tt(ZM);var dS=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(sc,"__esModule",{value:!0});sc.Hourglass=void 0;const uv=Pt,cv=dS(Ot),dv=dS(JM);function e5({color:e="#7f58af",size:t=32,className:n,style:r}){return(0,uv.jsx)("div",{className:(0,cv.default)(dv.default["lds-hourglass"],n),style:{...r},children:(0,uv.jsx)("div",{className:(0,cv.default)(dv.default["lds-hourglass-after"]),style:{background:e,borderWidth:t,borderHeight:t}})})}sc.Hourglass=e5;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Hourglass=void 0;var t=sc;Object.defineProperty(e,"Hourglass",{enumerable:!0,get:function(){return t.Hourglass}})})(cS);var fS={},lc={};const pS="_center_1rufi_10",hS="_spin_1rufi_1",t5={"lds-orbitals":"_lds-orbitals_1rufi_1",center:pS,"outer-spin":"_outer-spin_1rufi_19","inner-spin":"_inner-spin_1rufi_20","inner-arc":"_inner-arc_1rufi_25","inner-arc_start-a":"_inner-arc_start-a_1rufi_32","inner-arc_end-a":"_inner-arc_end-a_1rufi_36","inner-moon-a":"_inner-moon-a_1rufi_40","inner-moon-b":"_inner-moon-b_1rufi_49","inner-arc_start-b":"_inner-arc_start-b_1rufi_58","inner-arc_end-b":"_inner-arc_end-b_1rufi_62","outer-arc":"_outer-arc_1rufi_66","outer-arc_start-a":"_outer-arc_start-a_1rufi_73","outer-arc_end-a":"_outer-arc_end-a_1rufi_77","outer-moon-a":"_outer-moon-a_1rufi_81","outer-moon-b":"_outer-moon-b_1rufi_90","outer-arc_start-b":"_outer-arc_start-b_1rufi_99","outer-arc_end-b":"_outer-arc_end-b_1rufi_103",spin:hS},n5=Object.freeze(Object.defineProperty({__proto__:null,center:pS,default:t5,spin:hS},Symbol.toStringTag,{value:"Module"})),r5=Tt(n5);var mS=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(lc,"__esModule",{value:!0});lc.Orbitals=void 0;const tt=Pt,ct=mS(Ot),Se=mS(r5);function i5({color:e="#7f58af",className:t,style:n}){return(0,tt.jsxs)("div",{className:(0,ct.default)(Se.default["lds-orbitals"],t),style:{...n},children:[(0,tt.jsx)("div",{className:Se.default.center,style:{background:e}}),(0,tt.jsxs)("div",{className:(0,ct.default)(Se.default["inner-spin"]),children:[(0,tt.jsx)("div",{className:(0,ct.default)(Se.default["inner-arc"],Se.default["inner-arc_start-a"]),style:{borderColor:e}}),(0,tt.jsx)("div",{className:(0,ct.default)(Se.default["inner-arc"],Se.default["inner-arc_end-a"]),style:{borderColor:e}}),(0,tt.jsx)("div",{className:(0,ct.default)(Se.default["inner-arc"],Se.default["inner-arc_start-b"]),style:{borderColor:e}}),(0,tt.jsx)("div",{className:(0,ct.default)(Se.default["inner-arc"],Se.default["inner-arc_end-b"]),style:{borderColor:e}}),(0,tt.jsx)("div",{className:(0,ct.default)(Se.default["inner-moon-a"]),style:{background:e}}),(0,tt.jsx)("div",{className:(0,ct.default)(Se.default["inner-moon-b"]),style:{background:e}})]}),(0,tt.jsxs)("div",{className:(0,ct.default)(Se.default["outer-spin"]),children:[(0,tt.jsx)("div",{className:(0,ct.default)(Se.default["outer-arc"],Se.default["outer-arc_start-a"]),style:{borderColor:e}}),(0,tt.jsx)("div",{className:(0,ct.default)(Se.default["outer-arc"],Se.default["outer-arc_end-a"]),style:{borderColor:e}}),(0,tt.jsx)("div",{className:(0,ct.default)(Se.default["outer-arc"],Se.default["outer-arc_start-b"]),style:{borderColor:e}}),(0,tt.jsx)("div",{className:(0,ct.default)(Se.default["outer-arc"],Se.default["outer-arc_end-b"]),style:{borderColor:e}}),(0,tt.jsx)("div",{className:(0,ct.default)(Se.default["outer-moon-a"]),style:{background:e}}),(0,tt.jsx)("div",{className:(0,ct.default)(Se.default["outer-moon-b"]),style:{background:e}})]})]})}lc.Orbitals=i5;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Orbitals=void 0;var t=lc;Object.defineProperty(e,"Orbitals",{enumerable:!0,get:function(){return t.Orbitals}})})(fS);var gS={},uc={};const o5={"lds-ring":"_lds-ring_xgxdp_1"},a5=Object.freeze(Object.defineProperty({__proto__:null,default:o5},Symbol.toStringTag,{value:"Module"})),s5=Tt(a5);var vS=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(uc,"__esModule",{value:!0});uc.Ring=void 0;const fv=Pt,l5=vS(Ot),u5=vS(s5);function c5({color:e="#7f58af",size:t=80,className:n,style:r}){const i=[...Array(4)].map((o,a)=>(0,fv.jsx)("div",{style:{borderColor:`${e} transparent transparent transparent`,width:t*.8,height:t*.8,margin:t*.1,borderWidth:t*.1}},a));return(0,fv.jsx)("div",{className:(0,l5.default)(u5.default["lds-ring"],n),style:{width:t,height:t,...r},children:i})}uc.Ring=c5;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Ring=void 0;var t=uc;Object.defineProperty(e,"Ring",{enumerable:!0,get:function(){return t.Ring}})})(gS);var yS={},cc={};const d5={"lds-ripple":"_lds-ripple_1lgcf_1"},f5=Object.freeze(Object.defineProperty({__proto__:null,default:d5},Symbol.toStringTag,{value:"Module"})),p5=Tt(f5);var xS=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(cc,"__esModule",{value:!0});cc.Ripple=void 0;const pv=Pt,h5=xS(Ot),m5=xS(p5);function g5({color:e="#7f58af",size:t=80,className:n,style:r}){const i=[...Array(2)].map((o,a)=>(0,pv.jsx)("div",{style:{borderColor:`${e}`,borderWidth:t*.05}},a));return(0,pv.jsx)("div",{className:(0,h5.default)(m5.default["lds-ripple"],n),style:{width:t,height:t,...r},children:i})}cc.Ripple=g5;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Ripple=void 0;var t=cc;Object.defineProperty(e,"Ripple",{enumerable:!0,get:function(){return t.Ripple}})})(yS);var bS={},dc={};const v5={"lds-roller":"_lds-roller_ks1ij_1","div-after":"_div-after_ks1ij_11"},y5=Object.freeze(Object.defineProperty({__proto__:null,default:v5},Symbol.toStringTag,{value:"Module"})),x5=Tt(y5);var wS=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(dc,"__esModule",{value:!0});dc.Roller=void 0;const gd=Pt,hv=wS(Ot),mv=wS(x5);function b5({color:e="#7f58af",className:t,style:n}){const r=[...Array(8)].map((i,o)=>(0,gd.jsx)("div",{children:(0,gd.jsx)("div",{className:(0,hv.default)(mv.default["div-after"]),style:{background:e}})},o));return(0,gd.jsx)("div",{className:(0,hv.default)(mv.default["lds-roller"],t),style:{...n},children:r})}dc.Roller=b5;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Roller=void 0;var t=dc;Object.defineProperty(e,"Roller",{enumerable:!0,get:function(){return t.Roller}})})(bS);var SS={},fc={};const w5={"lds-spinner":"_lds-spinner_flf3t_1","div-after":"_div-after_flf3t_12"},S5=Object.freeze(Object.defineProperty({__proto__:null,default:w5},Symbol.toStringTag,{value:"Module"})),_5=Tt(S5);var _S=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(fc,"__esModule",{value:!0});fc.Spinner=void 0;const vd=Pt,gv=_S(Ot),vv=_S(_5);function C5({color:e="#7f58af",className:t,style:n}){const r=[...Array(12)].map((i,o)=>(0,vd.jsx)("div",{children:(0,vd.jsx)("div",{className:(0,gv.default)(vv.default["div-after"]),style:{background:e}})},o));return(0,vd.jsx)("div",{className:(0,gv.default)(vv.default["lds-spinner"],t),style:{...n},children:r})}fc.Spinner=C5;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Spinner=void 0;var t=fc;Object.defineProperty(e,"Spinner",{enumerable:!0,get:function(){return t.Spinner}})})(SS);var CS={},pc={};const ES="_left_v9vlb_30",kS="_right_v9vlb_33",TS="_anim_v9vlb_37",E5={"lds-ouroboro":"_lds-ouroboro_v9vlb_1",left:ES,right:kS,anim:TS,"lds-ouroboro-rotate":"_lds-ouroboro-rotate_v9vlb_1"},k5=Object.freeze(Object.defineProperty({__proto__:null,anim:TS,default:E5,left:ES,right:kS},Symbol.toStringTag,{value:"Module"})),T5=Tt(k5);var PS=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(pc,"__esModule",{value:!0});pc.Ouroboro=void 0;const Io=Pt,Do=PS(Ot),Lo=PS(T5);function P5({color:e="#7f58af",style:t,className:n}){return(0,Io.jsxs)("div",{className:(0,Do.default)(Lo.default["lds-ouroboro"],n),style:{...t},children:[(0,Io.jsx)("span",{className:(0,Do.default)(Lo.default.left),children:(0,Io.jsx)("span",{className:(0,Do.default)(Lo.default.anim),style:{background:e}})}),(0,Io.jsx)("span",{className:(0,Do.default)(Lo.default.right),children:(0,Io.jsx)("span",{className:(0,Do.default)(Lo.default.anim),style:{background:e}})})]})}pc.Ouroboro=P5;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Ouroboro=void 0;var t=pc;Object.defineProperty(e,"Ouroboro",{enumerable:!0,get:function(){return t.Ouroboro}})})(CS);(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Ouroboro=e.Spinner=e.Roller=e.Ripple=e.Ring=e.Orbitals=e.Hourglass=e.Heart=e.Grid=e.Facebook=e.Ellipsis=e.DualRing=e.Default=e.Circle=void 0;const t=$w;Object.defineProperty(e,"Circle",{enumerable:!0,get:function(){return t.Circle}});const n=Zw;Object.defineProperty(e,"Default",{enumerable:!0,get:function(){return n.Default}});const r=eS;Object.defineProperty(e,"DualRing",{enumerable:!0,get:function(){return r.DualRing}});const i=nS;Object.defineProperty(e,"Ellipsis",{enumerable:!0,get:function(){return i.Ellipsis}});const o=iS;Object.defineProperty(e,"Facebook",{enumerable:!0,get:function(){return o.Facebook}});const a=aS;Object.defineProperty(e,"Grid",{enumerable:!0,get:function(){return a.Grid}});const l=lS;Object.defineProperty(e,"Heart",{enumerable:!0,get:function(){return l.Heart}});const s=cS;Object.defineProperty(e,"Hourglass",{enumerable:!0,get:function(){return s.Hourglass}});const u=fS;Object.defineProperty(e,"Orbitals",{enumerable:!0,get:function(){return u.Orbitals}});const d=gS;Object.defineProperty(e,"Ring",{enumerable:!0,get:function(){return d.Ring}});const c=yS;Object.defineProperty(e,"Ripple",{enumerable:!0,get:function(){return c.Ripple}});const y=bS;Object.defineProperty(e,"Roller",{enumerable:!0,get:function(){return y.Roller}});const p=SS;Object.defineProperty(e,"Spinner",{enumerable:!0,get:function(){return p.Spinner}});const m=CS;Object.defineProperty(e,"Ouroboro",{enumerable:!0,get:function(){return m.Ouroboro}})})(Mw);const O5=()=>f.jsx(K3,{children:f.jsx(Mw.Default,{color:"#6d433da8"})});const j5="/Didiv/assets/Ancient_Kyiv-2153f7e6.ttf",M5=ZT`
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
  src: url(${j5}) format('truetype');
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
`,$5=E.div`
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
`,I5=E(Oe)`
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
`,D5=E.h2`

  font-size: 30px;
  text-transform: uppercase;
  margin-bottom: 20px;
  color: #333;
  @media screen and (min-width: 768px) {
    font-size: 35px;
  }
`,L5=E.h3`

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
`,A5=E.a`

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
`,R5=E.div`
  width: 40px;
  height: 40px;
  border: 2px solid white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`,F5=()=>{const[e,t]=b.useState([]);return b.useEffect(()=>{async function n(){try{const r=await fetch("https://backenddidiv-production.up.railway.app/api/categories?populate=image&sort=title:asc",{credentials:"omit"});if(!r.ok){console.error("Server error:",r.status);return}const i=await r.json();if(console.log("API response:",i),!i.data){console.error("No data field:",i);return}t(i.data.map(o=>{var a;return{title:o.title,image:(a=o.image)==null?void 0:a.url}}))}catch(r){console.error("Fetch error:",r)}}n()},[]),console.log(e),f.jsxs(f.Fragment,{children:[f.jsx(D5,{children:"Каталог"}),f.jsxs($5,{children:[e.slice(0,7).map(n=>f.jsx(I5,{to:`catalog/${n.title}`,bg:n.image,isBig:n.big,children:f.jsx(L5,{children:n.title})},n.title)),f.jsxs(A5,{href:"catalog",children:[f.jsx("p",{children:"Весь каталог"}),f.jsx(R5,{children:f.jsx(Ou,{size:24})})]})]})]})};function yv(e){return e!==null&&typeof e=="object"&&"constructor"in e&&e.constructor===Object}function mm(e={},t={}){const n=["__proto__","constructor","prototype"];Object.keys(t).filter(r=>n.indexOf(r)<0).forEach(r=>{typeof e[r]>"u"?e[r]=t[r]:yv(t[r])&&yv(e[r])&&Object.keys(t[r]).length>0&&mm(e[r],t[r])})}const OS={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector(){return null},querySelectorAll(){return[]},getElementById(){return null},createEvent(){return{initEvent(){}}},createElement(){return{children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName(){return[]}}},createElementNS(){return{}},importNode(){return null},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function kn(){const e=typeof document<"u"?document:{};return mm(e,OS),e}const z5={document:OS,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle(){return{getPropertyValue(){return""}}},Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia(){return{}},requestAnimationFrame(e){return typeof setTimeout>"u"?(e(),null):setTimeout(e,0)},cancelAnimationFrame(e){typeof setTimeout>"u"||clearTimeout(e)}};function vt(){const e=typeof window<"u"?window:{};return mm(e,z5),e}function N5(e=""){return e.trim().split(" ").filter(t=>!!t.trim())}function B5(e){const t=e;Object.keys(t).forEach(n=>{try{t[n]=null}catch{}try{delete t[n]}catch{}})}function jS(e,t=0){return setTimeout(e,t)}function Wl(){return Date.now()}function V5(e){const t=vt();let n;return t.getComputedStyle&&(n=t.getComputedStyle(e,null)),!n&&e.currentStyle&&(n=e.currentStyle),n||(n=e.style),n}function U5(e,t="x"){const n=vt();let r,i,o;const a=V5(e);return n.WebKitCSSMatrix?(i=a.transform||a.webkitTransform,i.split(",").length>6&&(i=i.split(", ").map(l=>l.replace(",",".")).join(", ")),o=new n.WebKitCSSMatrix(i==="none"?"":i)):(o=a.MozTransform||a.OTransform||a.MsTransform||a.msTransform||a.transform||a.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),r=o.toString().split(",")),t==="x"&&(n.WebKitCSSMatrix?i=o.m41:r.length===16?i=parseFloat(r[12]):i=parseFloat(r[4])),t==="y"&&(n.WebKitCSSMatrix?i=o.m42:r.length===16?i=parseFloat(r[13]):i=parseFloat(r[5])),i||0}function _s(e){return typeof e=="object"&&e!==null&&e.constructor&&Object.prototype.toString.call(e).slice(8,-1)==="Object"}function H5(e){return typeof window<"u"&&typeof window.HTMLElement<"u"?e instanceof HTMLElement:e&&(e.nodeType===1||e.nodeType===11)}function Mt(...e){const t=Object(e[0]);for(let n=1;n<e.length;n+=1){const r=e[n];if(r!=null&&!H5(r)){const i=Object.keys(Object(r)).filter(o=>o!=="__proto__"&&o!=="constructor"&&o!=="prototype");for(let o=0,a=i.length;o<a;o+=1){const l=i[o],s=Object.getOwnPropertyDescriptor(r,l);s!==void 0&&s.enumerable&&(_s(t[l])&&_s(r[l])?r[l].__swiper__?t[l]=r[l]:Mt(t[l],r[l]):!_s(t[l])&&_s(r[l])?(t[l]={},r[l].__swiper__?t[l]=r[l]:Mt(t[l],r[l])):t[l]=r[l])}}}return t}function fi(e,t,n){e.style.setProperty(t,n)}function MS({swiper:e,targetPosition:t,side:n}){const r=vt(),i=-e.translate;let o=null,a;const l=e.params.speed;e.wrapperEl.style.scrollSnapType="none",r.cancelAnimationFrame(e.cssModeFrameID);const s=t>i?"next":"prev",u=(c,y)=>s==="next"&&c>=y||s==="prev"&&c<=y,d=()=>{a=new Date().getTime(),o===null&&(o=a);const c=Math.max(Math.min((a-o)/l,1),0),y=.5-Math.cos(c*Math.PI)/2;let p=i+y*(t-i);if(u(p,t)&&(p=t),e.wrapperEl.scrollTo({[n]:p}),u(p,t)){e.wrapperEl.style.overflow="hidden",e.wrapperEl.style.scrollSnapType="",setTimeout(()=>{e.wrapperEl.style.overflow="",e.wrapperEl.scrollTo({[n]:p})}),r.cancelAnimationFrame(e.cssModeFrameID);return}e.cssModeFrameID=r.requestAnimationFrame(d)};d()}function Sn(e,t=""){const n=vt(),r=[...e.children];return n.HTMLSlotElement&&e instanceof HTMLSlotElement&&r.push(...e.assignedElements()),t?r.filter(i=>i.matches(t)):r}function W5(e,t){const n=[t];for(;n.length>0;){const r=n.shift();if(e===r)return!0;n.push(...r.children,...r.shadowRoot?r.shadowRoot.children:[],...r.assignedElements?r.assignedElements():[])}}function G5(e,t){const n=vt();let r=t.contains(e);return!r&&n.HTMLSlotElement&&t instanceof HTMLSlotElement&&(r=[...t.assignedElements()].includes(e),r||(r=W5(e,t))),r}function Gl(e){try{console.warn(e);return}catch{}}function ql(e,t=[]){const n=document.createElement(e);return n.classList.add(...Array.isArray(t)?t:N5(t)),n}function q5(e,t){const n=[];for(;e.previousElementSibling;){const r=e.previousElementSibling;t?r.matches(t)&&n.push(r):n.push(r),e=r}return n}function Y5(e,t){const n=[];for(;e.nextElementSibling;){const r=e.nextElementSibling;t?r.matches(t)&&n.push(r):n.push(r),e=r}return n}function fr(e,t){return vt().getComputedStyle(e,null).getPropertyValue(t)}function Yl(e){let t=e,n;if(t){for(n=0;(t=t.previousSibling)!==null;)t.nodeType===1&&(n+=1);return n}}function $S(e,t){const n=[];let r=e.parentElement;for(;r;)t?r.matches(t)&&n.push(r):n.push(r),r=r.parentElement;return n}function bp(e,t,n){const r=vt();return n?e[t==="width"?"offsetWidth":"offsetHeight"]+parseFloat(r.getComputedStyle(e,null).getPropertyValue(t==="width"?"margin-right":"margin-top"))+parseFloat(r.getComputedStyle(e,null).getPropertyValue(t==="width"?"margin-left":"margin-bottom")):e.offsetWidth}function He(e){return(Array.isArray(e)?e:[e]).filter(t=>!!t)}function Da(e,t=""){typeof trustedTypes<"u"?e.innerHTML=trustedTypes.createPolicy("html",{createHTML:n=>n}).createHTML(t):e.innerHTML=t}function IS(e,t,n,r){return e.params.createElements&&Object.keys(r).forEach(i=>{if(!n[i]&&n.auto===!0){let o=Sn(e.el,`.${r[i]}`)[0];o||(o=ql("div",r[i]),o.className=r[i],e.el.append(o)),n[i]=o,t[i]=o}}),n}const xv='<svg class="swiper-navigation-icon" width="11" height="20" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.38296 20.0762C0.111788 19.805 0.111788 19.3654 0.38296 19.0942L9.19758 10.2796L0.38296 1.46497C0.111788 1.19379 0.111788 0.754138 0.38296 0.482966C0.654131 0.211794 1.09379 0.211794 1.36496 0.482966L10.4341 9.55214C10.8359 9.9539 10.8359 10.6053 10.4341 11.007L1.36496 20.0762C1.09379 20.3474 0.654131 20.3474 0.38296 20.0762Z" fill="currentColor"/></svg>';function X5({swiper:e,extendParams:t,on:n,emit:r}){t({navigation:{nextEl:null,prevEl:null,addIcons:!0,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock",navigationDisabledClass:"swiper-navigation-disabled"}}),e.navigation={nextEl:null,prevEl:null,arrowSvg:xv};function i(p){let m;return p&&typeof p=="string"&&e.isElement&&(m=e.el.querySelector(p)||e.hostEl.querySelector(p),m)?m:(p&&(typeof p=="string"&&(m=[...document.querySelectorAll(p)]),e.params.uniqueNavElements&&typeof p=="string"&&m&&m.length>1&&e.el.querySelectorAll(p).length===1?m=e.el.querySelector(p):m&&m.length===1&&(m=m[0])),p&&!m?p:m)}function o(p,m){const v=e.params.navigation;p=He(p),p.forEach(w=>{w&&(w.classList[m?"add":"remove"](...v.disabledClass.split(" ")),w.tagName==="BUTTON"&&(w.disabled=m),e.params.watchOverflow&&e.enabled&&w.classList[e.isLocked?"add":"remove"](v.lockClass))})}function a(){const{nextEl:p,prevEl:m}=e.navigation;if(e.params.loop){o(m,!1),o(p,!1);return}o(m,e.isBeginning&&!e.params.rewind),o(p,e.isEnd&&!e.params.rewind)}function l(p){p.preventDefault(),!(e.isBeginning&&!e.params.loop&&!e.params.rewind)&&(e.slidePrev(),r("navigationPrev"))}function s(p){p.preventDefault(),!(e.isEnd&&!e.params.loop&&!e.params.rewind)&&(e.slideNext(),r("navigationNext"))}function u(){const p=e.params.navigation;if(e.params.navigation=IS(e,e.originalParams.navigation,e.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),!(p.nextEl||p.prevEl))return;let m=i(p.nextEl),v=i(p.prevEl);Object.assign(e.navigation,{nextEl:m,prevEl:v}),m=He(m),v=He(v);const w=(h,g)=>{if(h){if(p.addIcons&&h.matches(".swiper-button-next,.swiper-button-prev")&&!h.querySelector("svg")){const x=document.createElement("div");Da(x,xv),h.appendChild(x.querySelector("svg")),x.remove()}h.addEventListener("click",g==="next"?s:l)}!e.enabled&&h&&h.classList.add(...p.lockClass.split(" "))};m.forEach(h=>w(h,"next")),v.forEach(h=>w(h,"prev"))}function d(){let{nextEl:p,prevEl:m}=e.navigation;p=He(p),m=He(m);const v=(w,h)=>{w.removeEventListener("click",h==="next"?s:l),w.classList.remove(...e.params.navigation.disabledClass.split(" "))};p.forEach(w=>v(w,"next")),m.forEach(w=>v(w,"prev"))}n("init",()=>{e.params.navigation.enabled===!1?y():(u(),a())}),n("toEdge fromEdge lock unlock",()=>{a()}),n("destroy",()=>{d()}),n("enable disable",()=>{let{nextEl:p,prevEl:m}=e.navigation;if(p=He(p),m=He(m),e.enabled){a();return}[...p,...m].filter(v=>!!v).forEach(v=>v.classList.add(e.params.navigation.lockClass))}),n("click",(p,m)=>{let{nextEl:v,prevEl:w}=e.navigation;v=He(v),w=He(w);const h=m.target;let g=w.includes(h)||v.includes(h);if(e.isElement&&!g){const x=m.path||m.composedPath&&m.composedPath();x&&(g=x.find(S=>v.includes(S)||w.includes(S)))}if(e.params.navigation.hideOnClick&&!g){if(e.pagination&&e.params.pagination&&e.params.pagination.clickable&&(e.pagination.el===h||e.pagination.el.contains(h)))return;let x;v.length?x=v[0].classList.contains(e.params.navigation.hiddenClass):w.length&&(x=w[0].classList.contains(e.params.navigation.hiddenClass)),r(x===!0?"navigationShow":"navigationHide"),[...v,...w].filter(S=>!!S).forEach(S=>S.classList.toggle(e.params.navigation.hiddenClass))}});const c=()=>{e.el.classList.remove(...e.params.navigation.navigationDisabledClass.split(" ")),u(),a()},y=()=>{e.el.classList.add(...e.params.navigation.navigationDisabledClass.split(" ")),d()};Object.assign(e.navigation,{enable:c,disable:y,update:a,init:u,destroy:d})}function Ao(e=""){return`.${e.trim().replace(/([\.:!+\/()[\]#>~*^$|=,'"@{}\\])/g,"\\$1").replace(/ /g,".")}`}function K5({swiper:e,extendParams:t,on:n,emit:r}){const i="swiper-pagination";t({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:h=>h,formatFractionTotal:h=>h,bulletClass:`${i}-bullet`,bulletActiveClass:`${i}-bullet-active`,modifierClass:`${i}-`,currentClass:`${i}-current`,totalClass:`${i}-total`,hiddenClass:`${i}-hidden`,progressbarFillClass:`${i}-progressbar-fill`,progressbarOppositeClass:`${i}-progressbar-opposite`,clickableClass:`${i}-clickable`,lockClass:`${i}-lock`,horizontalClass:`${i}-horizontal`,verticalClass:`${i}-vertical`,paginationDisabledClass:`${i}-disabled`}}),e.pagination={el:null,bullets:[]};let o,a=0;function l(){return!e.params.pagination.el||!e.pagination.el||Array.isArray(e.pagination.el)&&e.pagination.el.length===0}function s(h,g){const{bulletActiveClass:x}=e.params.pagination;h&&(h=h[`${g==="prev"?"previous":"next"}ElementSibling`],h&&(h.classList.add(`${x}-${g}`),h=h[`${g==="prev"?"previous":"next"}ElementSibling`],h&&h.classList.add(`${x}-${g}-${g}`)))}function u(h,g,x){if(h=h%x,g=g%x,g===h+1)return"next";if(g===h-1)return"previous"}function d(h){const g=h.target.closest(Ao(e.params.pagination.bulletClass));if(!g)return;h.preventDefault();const x=Yl(g)*e.params.slidesPerGroup;if(e.params.loop){if(e.realIndex===x)return;const S=u(e.realIndex,x,e.slides.length);S==="next"?e.slideNext():S==="previous"?e.slidePrev():e.slideToLoop(x)}else e.slideTo(x)}function c(){const h=e.rtl,g=e.params.pagination;if(l())return;let x=e.pagination.el;x=He(x);let S,T;const k=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.slides.length,C=e.params.loop?Math.ceil(k/e.params.slidesPerGroup):e.snapGrid.length;if(e.params.loop?(T=e.previousRealIndex||0,S=e.params.slidesPerGroup>1?Math.floor(e.realIndex/e.params.slidesPerGroup):e.realIndex):typeof e.snapIndex<"u"?(S=e.snapIndex,T=e.previousSnapIndex):(T=e.previousIndex||0,S=e.activeIndex||0),g.type==="bullets"&&e.pagination.bullets&&e.pagination.bullets.length>0){const _=e.pagination.bullets;let $,M,R;if(g.dynamicBullets&&(o=bp(_[0],e.isHorizontal()?"width":"height",!0),x.forEach(L=>{L.style[e.isHorizontal()?"width":"height"]=`${o*(g.dynamicMainBullets+4)}px`}),g.dynamicMainBullets>1&&T!==void 0&&(a+=S-(T||0),a>g.dynamicMainBullets-1?a=g.dynamicMainBullets-1:a<0&&(a=0)),$=Math.max(S-a,0),M=$+(Math.min(_.length,g.dynamicMainBullets)-1),R=(M+$)/2),_.forEach(L=>{const j=[...["","-next","-next-next","-prev","-prev-prev","-main"].map(F=>`${g.bulletActiveClass}${F}`)].map(F=>typeof F=="string"&&F.includes(" ")?F.split(" "):F).flat();L.classList.remove(...j)}),x.length>1)_.forEach(L=>{const j=Yl(L);j===S?L.classList.add(...g.bulletActiveClass.split(" ")):e.isElement&&L.setAttribute("part","bullet"),g.dynamicBullets&&(j>=$&&j<=M&&L.classList.add(...`${g.bulletActiveClass}-main`.split(" ")),j===$&&s(L,"prev"),j===M&&s(L,"next"))});else{const L=_[S];if(L&&L.classList.add(...g.bulletActiveClass.split(" ")),e.isElement&&_.forEach((j,F)=>{j.setAttribute("part",F===S?"bullet-active":"bullet")}),g.dynamicBullets){const j=_[$],F=_[M];for(let A=$;A<=M;A+=1)_[A]&&_[A].classList.add(...`${g.bulletActiveClass}-main`.split(" "));s(j,"prev"),s(F,"next")}}if(g.dynamicBullets){const L=Math.min(_.length,g.dynamicMainBullets+4),j=(o*L-o)/2-R*o,F=h?"right":"left";_.forEach(A=>{A.style[e.isHorizontal()?F:"top"]=`${j}px`})}}x.forEach((_,$)=>{if(g.type==="fraction"&&(_.querySelectorAll(Ao(g.currentClass)).forEach(M=>{M.textContent=g.formatFractionCurrent(S+1)}),_.querySelectorAll(Ao(g.totalClass)).forEach(M=>{M.textContent=g.formatFractionTotal(C)})),g.type==="progressbar"){let M;g.progressbarOpposite?M=e.isHorizontal()?"vertical":"horizontal":M=e.isHorizontal()?"horizontal":"vertical";const R=(S+1)/C;let L=1,j=1;M==="horizontal"?L=R:j=R,_.querySelectorAll(Ao(g.progressbarFillClass)).forEach(F=>{F.style.transform=`translate3d(0,0,0) scaleX(${L}) scaleY(${j})`,F.style.transitionDuration=`${e.params.speed}ms`})}g.type==="custom"&&g.renderCustom?(Da(_,g.renderCustom(e,S+1,C)),$===0&&r("paginationRender",_)):($===0&&r("paginationRender",_),r("paginationUpdate",_)),e.params.watchOverflow&&e.enabled&&_.classList[e.isLocked?"add":"remove"](g.lockClass)})}function y(){const h=e.params.pagination;if(l())return;const g=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.grid&&e.params.grid.rows>1?e.slides.length/Math.ceil(e.params.grid.rows):e.slides.length;let x=e.pagination.el;x=He(x);let S="";if(h.type==="bullets"){let T=e.params.loop?Math.ceil(g/e.params.slidesPerGroup):e.snapGrid.length;e.params.freeMode&&e.params.freeMode.enabled&&T>g&&(T=g);for(let k=0;k<T;k+=1)h.renderBullet?S+=h.renderBullet.call(e,k,h.bulletClass):S+=`<${h.bulletElement} ${e.isElement?'part="bullet"':""} class="${h.bulletClass}"></${h.bulletElement}>`}h.type==="fraction"&&(h.renderFraction?S=h.renderFraction.call(e,h.currentClass,h.totalClass):S=`<span class="${h.currentClass}"></span> / <span class="${h.totalClass}"></span>`),h.type==="progressbar"&&(h.renderProgressbar?S=h.renderProgressbar.call(e,h.progressbarFillClass):S=`<span class="${h.progressbarFillClass}"></span>`),e.pagination.bullets=[],x.forEach(T=>{h.type!=="custom"&&Da(T,S||""),h.type==="bullets"&&e.pagination.bullets.push(...T.querySelectorAll(Ao(h.bulletClass)))}),h.type!=="custom"&&r("paginationRender",x[0])}function p(){e.params.pagination=IS(e,e.originalParams.pagination,e.params.pagination,{el:"swiper-pagination"});const h=e.params.pagination;if(!h.el)return;let g;typeof h.el=="string"&&e.isElement&&(g=e.el.querySelector(h.el)),!g&&typeof h.el=="string"&&(g=[...document.querySelectorAll(h.el)]),g||(g=h.el),!(!g||g.length===0)&&(e.params.uniqueNavElements&&typeof h.el=="string"&&Array.isArray(g)&&g.length>1&&(g=[...e.el.querySelectorAll(h.el)],g.length>1&&(g=g.find(x=>$S(x,".swiper")[0]===e.el))),Array.isArray(g)&&g.length===1&&(g=g[0]),Object.assign(e.pagination,{el:g}),g=He(g),g.forEach(x=>{h.type==="bullets"&&h.clickable&&x.classList.add(...(h.clickableClass||"").split(" ")),x.classList.add(h.modifierClass+h.type),x.classList.add(e.isHorizontal()?h.horizontalClass:h.verticalClass),h.type==="bullets"&&h.dynamicBullets&&(x.classList.add(`${h.modifierClass}${h.type}-dynamic`),a=0,h.dynamicMainBullets<1&&(h.dynamicMainBullets=1)),h.type==="progressbar"&&h.progressbarOpposite&&x.classList.add(h.progressbarOppositeClass),h.clickable&&x.addEventListener("click",d),e.enabled||x.classList.add(h.lockClass)}))}function m(){const h=e.params.pagination;if(l())return;let g=e.pagination.el;g&&(g=He(g),g.forEach(x=>{x.classList.remove(h.hiddenClass),x.classList.remove(h.modifierClass+h.type),x.classList.remove(e.isHorizontal()?h.horizontalClass:h.verticalClass),h.clickable&&(x.classList.remove(...(h.clickableClass||"").split(" ")),x.removeEventListener("click",d))})),e.pagination.bullets&&e.pagination.bullets.forEach(x=>x.classList.remove(...h.bulletActiveClass.split(" ")))}n("changeDirection",()=>{if(!e.pagination||!e.pagination.el)return;const h=e.params.pagination;let{el:g}=e.pagination;g=He(g),g.forEach(x=>{x.classList.remove(h.horizontalClass,h.verticalClass),x.classList.add(e.isHorizontal()?h.horizontalClass:h.verticalClass)})}),n("init",()=>{e.params.pagination.enabled===!1?w():(p(),y(),c())}),n("activeIndexChange",()=>{typeof e.snapIndex>"u"&&c()}),n("snapIndexChange",()=>{c()}),n("snapGridLengthChange",()=>{y(),c()}),n("destroy",()=>{m()}),n("enable disable",()=>{let{el:h}=e.pagination;h&&(h=He(h),h.forEach(g=>g.classList[e.enabled?"remove":"add"](e.params.pagination.lockClass)))}),n("lock unlock",()=>{c()}),n("click",(h,g)=>{const x=g.target,S=He(e.pagination.el);if(e.params.pagination.el&&e.params.pagination.hideOnClick&&S&&S.length>0&&!x.classList.contains(e.params.pagination.bulletClass)){if(e.navigation&&(e.navigation.nextEl&&x===e.navigation.nextEl||e.navigation.prevEl&&x===e.navigation.prevEl))return;const T=S[0].classList.contains(e.params.pagination.hiddenClass);r(T===!0?"paginationShow":"paginationHide"),S.forEach(k=>k.classList.toggle(e.params.pagination.hiddenClass))}});const v=()=>{e.el.classList.remove(e.params.pagination.paginationDisabledClass);let{el:h}=e.pagination;h&&(h=He(h),h.forEach(g=>g.classList.remove(e.params.pagination.paginationDisabledClass))),p(),y(),c()},w=()=>{e.el.classList.add(e.params.pagination.paginationDisabledClass);let{el:h}=e.pagination;h&&(h=He(h),h.forEach(g=>g.classList.add(e.params.pagination.paginationDisabledClass))),m()};Object.assign(e.pagination,{enable:v,disable:w,render:y,update:c,init:p,destroy:m})}function Q5({swiper:e,extendParams:t,on:n,emit:r,params:i}){e.autoplay={running:!1,paused:!1,timeLeft:0},t({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!1,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}});let o,a,l=i&&i.autoplay?i.autoplay.delay:3e3,s=i&&i.autoplay?i.autoplay.delay:3e3,u,d=new Date().getTime(),c,y,p,m,v,w;function h(D){!e||e.destroyed||!e.wrapperEl||D.target===e.wrapperEl&&(e.wrapperEl.removeEventListener("transitionend",h),!(w||D.detail&&D.detail.bySwiperTouchMove)&&$())}const g=()=>{if(e.destroyed||!e.autoplay.running)return;e.autoplay.paused?c=!0:c&&(s=u,c=!1);const D=e.autoplay.paused?u:d+s-new Date().getTime();e.autoplay.timeLeft=D,r("autoplayTimeLeft",D,D/l),a=requestAnimationFrame(()=>{g()})},x=()=>{let D;return e.virtual&&e.params.virtual.enabled?D=e.slides.find(I=>I.classList.contains("swiper-slide-active")):D=e.slides[e.activeIndex],D?parseInt(D.getAttribute("data-swiper-autoplay"),10):void 0},S=()=>{let D=e.params.autoplay.delay;const P=x();return!Number.isNaN(P)&&P>0&&(D=P),D},T=D=>{if(e.destroyed||!e.autoplay.running)return;cancelAnimationFrame(a),g();let P=D;typeof P>"u"&&(P=S(),l=P,s=P),u=P;const I=e.params.speed,z=()=>{!e||e.destroyed||(e.params.autoplay.reverseDirection?!e.isBeginning||e.params.loop||e.params.rewind?(e.slidePrev(I,!0,!0),r("autoplay")):e.params.autoplay.stopOnLastSlide||(e.slideTo(e.slides.length-1,I,!0,!0),r("autoplay")):!e.isEnd||e.params.loop||e.params.rewind?(e.slideNext(I,!0,!0),r("autoplay")):e.params.autoplay.stopOnLastSlide||(e.slideTo(0,I,!0,!0),r("autoplay")),e.params.cssMode&&(d=new Date().getTime(),requestAnimationFrame(()=>{T()})))};return P>0?(clearTimeout(o),o=setTimeout(()=>{z()},P)):requestAnimationFrame(()=>{z()}),P},k=()=>{d=new Date().getTime(),e.autoplay.running=!0,T(),r("autoplayStart")},C=()=>{e.autoplay.running=!1,clearTimeout(o),cancelAnimationFrame(a),r("autoplayStop")},_=(D,P)=>{if(e.destroyed||!e.autoplay.running)return;clearTimeout(o),D||(v=!0);const I=()=>{r("autoplayPause"),e.params.autoplay.waitForTransition?e.wrapperEl.addEventListener("transitionend",h):$()};if(e.autoplay.paused=!0,P){I();return}u=(u||e.params.autoplay.delay)-(new Date().getTime()-d),!(e.isEnd&&u<0&&!e.params.loop)&&(u<0&&(u=0),I())},$=()=>{e.isEnd&&u<0&&!e.params.loop||e.destroyed||!e.autoplay.running||(d=new Date().getTime(),v?(v=!1,T(u)):T(),e.autoplay.paused=!1,r("autoplayResume"))},M=()=>{if(e.destroyed||!e.autoplay.running)return;const D=kn();D.visibilityState==="hidden"&&(v=!0,_(!0)),D.visibilityState==="visible"&&$()},R=D=>{D.pointerType==="mouse"&&(v=!0,w=!0,!(e.animating||e.autoplay.paused)&&_(!0))},L=D=>{D.pointerType==="mouse"&&(w=!1,e.autoplay.paused&&$())},j=()=>{e.params.autoplay.pauseOnMouseEnter&&(e.el.addEventListener("pointerenter",R),e.el.addEventListener("pointerleave",L))},F=()=>{e.el&&typeof e.el!="string"&&(e.el.removeEventListener("pointerenter",R),e.el.removeEventListener("pointerleave",L))},A=()=>{kn().addEventListener("visibilitychange",M)},O=()=>{kn().removeEventListener("visibilitychange",M)};n("init",()=>{e.params.autoplay.enabled&&(j(),A(),k())}),n("destroy",()=>{F(),O(),e.autoplay.running&&C()}),n("_freeModeStaticRelease",()=>{(p||v)&&$()}),n("_freeModeNoMomentumRelease",()=>{e.params.autoplay.disableOnInteraction?C():_(!0,!0)}),n("beforeTransitionStart",(D,P,I)=>{e.destroyed||!e.autoplay.running||(I||!e.params.autoplay.disableOnInteraction?_(!0,!0):C())}),n("sliderFirstMove",()=>{if(!(e.destroyed||!e.autoplay.running)){if(e.params.autoplay.disableOnInteraction){C();return}y=!0,p=!1,v=!1,m=setTimeout(()=>{v=!0,p=!0,_(!0)},200)}}),n("touchEnd",()=>{if(!(e.destroyed||!e.autoplay.running||!y)){if(clearTimeout(m),clearTimeout(o),e.params.autoplay.disableOnInteraction){p=!1,y=!1;return}p&&e.params.cssMode&&$(),p=!1,y=!1}}),n("slideChange",()=>{e.destroyed||!e.autoplay.running||e.autoplay.paused&&(u=S(),l=S())}),Object.assign(e.autoplay,{start:k,stop:C,pause:_,resume:$})}let yd;function Z5(){const e=vt(),t=kn();return{smoothScroll:t.documentElement&&t.documentElement.style&&"scrollBehavior"in t.documentElement.style,touch:!!("ontouchstart"in e||e.DocumentTouch&&t instanceof e.DocumentTouch)}}function DS(){return yd||(yd=Z5()),yd}let xd;function J5({userAgent:e}={}){const t=DS(),n=vt(),r=n.navigator.platform,i=e||n.navigator.userAgent,o={ios:!1,android:!1},a=n.screen.width,l=n.screen.height,s=i.match(/(Android);?[\s\/]+([\d.]+)?/);let u=i.match(/(iPad)(?!\1).*OS\s([\d_]+)/);const d=i.match(/(iPod)(.*OS\s([\d_]+))?/),c=!u&&i.match(/(iPhone\sOS|iOS)\s([\d_]+)/),y=r==="Win32";let p=r==="MacIntel";const m=["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"];return!u&&p&&t.touch&&m.indexOf(`${a}x${l}`)>=0&&(u=i.match(/(Version)\/([\d.]+)/),u||(u=[0,1,"13_0_0"]),p=!1),s&&!y&&(o.os="android",o.android=!0),(u||c||d)&&(o.os="ios",o.ios=!0),o}function LS(e={}){return xd||(xd=J5(e)),xd}let bd;function e$(){const e=vt(),t=LS();let n=!1;function r(){const l=e.navigator.userAgent.toLowerCase();return l.indexOf("safari")>=0&&l.indexOf("chrome")<0&&l.indexOf("android")<0}if(r()){const l=String(e.navigator.userAgent);if(l.includes("Version/")){const[s,u]=l.split("Version/")[1].split(" ")[0].split(".").map(d=>Number(d));n=s<16||s===16&&u<2}}const i=/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent),o=r(),a=o||i&&t.ios;return{isSafari:n||o,needPerspectiveFix:n,need3dFix:a,isWebView:i}}function AS(){return bd||(bd=e$()),bd}function t$({swiper:e,on:t,emit:n}){const r=vt();let i=null,o=null;const a=()=>{!e||e.destroyed||!e.initialized||(n("beforeResize"),n("resize"))},l=()=>{!e||e.destroyed||!e.initialized||(i=new ResizeObserver(d=>{o=r.requestAnimationFrame(()=>{const{width:c,height:y}=e;let p=c,m=y;d.forEach(({contentBoxSize:v,contentRect:w,target:h})=>{h&&h!==e.el||(p=w?w.width:(v[0]||v).inlineSize,m=w?w.height:(v[0]||v).blockSize)}),(p!==c||m!==y)&&a()})}),i.observe(e.el))},s=()=>{o&&r.cancelAnimationFrame(o),i&&i.unobserve&&e.el&&(i.unobserve(e.el),i=null)},u=()=>{!e||e.destroyed||!e.initialized||n("orientationchange")};t("init",()=>{if(e.params.resizeObserver&&typeof r.ResizeObserver<"u"){l();return}r.addEventListener("resize",a),r.addEventListener("orientationchange",u)}),t("destroy",()=>{s(),r.removeEventListener("resize",a),r.removeEventListener("orientationchange",u)})}function n$({swiper:e,extendParams:t,on:n,emit:r}){const i=[],o=vt(),a=(u,d={})=>{const c=o.MutationObserver||o.WebkitMutationObserver,y=new c(p=>{if(e.__preventObserver__)return;if(p.length===1){r("observerUpdate",p[0]);return}const m=function(){r("observerUpdate",p[0])};o.requestAnimationFrame?o.requestAnimationFrame(m):o.setTimeout(m,0)});y.observe(u,{attributes:typeof d.attributes>"u"?!0:d.attributes,childList:e.isElement||(typeof d.childList>"u"?!0:d).childList,characterData:typeof d.characterData>"u"?!0:d.characterData}),i.push(y)},l=()=>{if(e.params.observer){if(e.params.observeParents){const u=$S(e.hostEl);for(let d=0;d<u.length;d+=1)a(u[d])}a(e.hostEl,{childList:e.params.observeSlideChildren}),a(e.wrapperEl,{attributes:!1})}},s=()=>{i.forEach(u=>{u.disconnect()}),i.splice(0,i.length)};t({observer:!1,observeParents:!1,observeSlideChildren:!1}),n("init",l),n("destroy",s)}var r$={on(e,t,n){const r=this;if(!r.eventsListeners||r.destroyed||typeof t!="function")return r;const i=n?"unshift":"push";return e.split(" ").forEach(o=>{r.eventsListeners[o]||(r.eventsListeners[o]=[]),r.eventsListeners[o][i](t)}),r},once(e,t,n){const r=this;if(!r.eventsListeners||r.destroyed||typeof t!="function")return r;function i(...o){r.off(e,i),i.__emitterProxy&&delete i.__emitterProxy,t.apply(r,o)}return i.__emitterProxy=t,r.on(e,i,n)},onAny(e,t){const n=this;if(!n.eventsListeners||n.destroyed||typeof e!="function")return n;const r=t?"unshift":"push";return n.eventsAnyListeners.indexOf(e)<0&&n.eventsAnyListeners[r](e),n},offAny(e){const t=this;if(!t.eventsListeners||t.destroyed||!t.eventsAnyListeners)return t;const n=t.eventsAnyListeners.indexOf(e);return n>=0&&t.eventsAnyListeners.splice(n,1),t},off(e,t){const n=this;return!n.eventsListeners||n.destroyed||!n.eventsListeners||e.split(" ").forEach(r=>{typeof t>"u"?n.eventsListeners[r]=[]:n.eventsListeners[r]&&n.eventsListeners[r].forEach((i,o)=>{(i===t||i.__emitterProxy&&i.__emitterProxy===t)&&n.eventsListeners[r].splice(o,1)})}),n},emit(...e){const t=this;if(!t.eventsListeners||t.destroyed||!t.eventsListeners)return t;let n,r,i;return typeof e[0]=="string"||Array.isArray(e[0])?(n=e[0],r=e.slice(1,e.length),i=t):(n=e[0].events,r=e[0].data,i=e[0].context||t),r.unshift(i),(Array.isArray(n)?n:n.split(" ")).forEach(a=>{t.eventsAnyListeners&&t.eventsAnyListeners.length&&t.eventsAnyListeners.forEach(l=>{l.apply(i,[a,...r])}),t.eventsListeners&&t.eventsListeners[a]&&t.eventsListeners[a].forEach(l=>{l.apply(i,r)})}),t}};function i$(){const e=this;let t,n;const r=e.el;typeof e.params.width<"u"&&e.params.width!==null?t=e.params.width:t=r.clientWidth,typeof e.params.height<"u"&&e.params.height!==null?n=e.params.height:n=r.clientHeight,!(t===0&&e.isHorizontal()||n===0&&e.isVertical())&&(t=t-parseInt(fr(r,"padding-left")||0,10)-parseInt(fr(r,"padding-right")||0,10),n=n-parseInt(fr(r,"padding-top")||0,10)-parseInt(fr(r,"padding-bottom")||0,10),Number.isNaN(t)&&(t=0),Number.isNaN(n)&&(n=0),Object.assign(e,{width:t,height:n,size:e.isHorizontal()?t:n}))}function o$(){const e=this;function t(M,R){return parseFloat(M.getPropertyValue(e.getDirectionLabel(R))||0)}const n=e.params,{wrapperEl:r,slidesEl:i,rtlTranslate:o,wrongRTL:a}=e,l=e.virtual&&n.virtual.enabled,s=l?e.virtual.slides.length:e.slides.length,u=Sn(i,`.${e.params.slideClass}, swiper-slide`),d=l?e.virtual.slides.length:u.length;let c=[];const y=[],p=[];let m=n.slidesOffsetBefore;typeof m=="function"&&(m=n.slidesOffsetBefore.call(e));let v=n.slidesOffsetAfter;typeof v=="function"&&(v=n.slidesOffsetAfter.call(e));const w=e.snapGrid.length,h=e.slidesGrid.length,g=e.size-m-v;let x=n.spaceBetween,S=-m,T=0,k=0;if(typeof g>"u")return;typeof x=="string"&&x.indexOf("%")>=0?x=parseFloat(x.replace("%",""))/100*g:typeof x=="string"&&(x=parseFloat(x)),e.virtualSize=-x-m-v,u.forEach(M=>{o?M.style.marginLeft="":M.style.marginRight="",M.style.marginBottom="",M.style.marginTop=""}),n.centeredSlides&&n.cssMode&&(fi(r,"--swiper-centered-offset-before",""),fi(r,"--swiper-centered-offset-after","")),n.cssMode&&(fi(r,"--swiper-slides-offset-before",`${m}px`),fi(r,"--swiper-slides-offset-after",`${v}px`));const C=n.grid&&n.grid.rows>1&&e.grid;C?e.grid.initSlides(u):e.grid&&e.grid.unsetSlides();let _;const $=n.slidesPerView==="auto"&&n.breakpoints&&Object.keys(n.breakpoints).filter(M=>typeof n.breakpoints[M].slidesPerView<"u").length>0;for(let M=0;M<d;M+=1){_=0;const R=u[M];if(!(R&&(C&&e.grid.updateSlide(M,R,u),fr(R,"display")==="none"))){if(l&&n.slidesPerView==="auto")n.virtual.slidesPerViewAutoSlideSize&&(_=n.virtual.slidesPerViewAutoSlideSize),_&&R&&(n.roundLengths&&(_=Math.floor(_)),R.style[e.getDirectionLabel("width")]=`${_}px`);else if(n.slidesPerView==="auto"){$&&(R.style[e.getDirectionLabel("width")]="");const L=getComputedStyle(R),j=R.style.transform,F=R.style.webkitTransform;if(j&&(R.style.transform="none"),F&&(R.style.webkitTransform="none"),n.roundLengths)_=e.isHorizontal()?bp(R,"width",!0):bp(R,"height",!0);else{const A=t(L,"width"),O=t(L,"padding-left"),D=t(L,"padding-right"),P=t(L,"margin-left"),I=t(L,"margin-right"),z=L.getPropertyValue("box-sizing");if(z&&z==="border-box")_=A+P+I;else{const{clientWidth:B,offsetWidth:N}=R;_=A+O+D+P+I+(N-B)}}j&&(R.style.transform=j),F&&(R.style.webkitTransform=F),n.roundLengths&&(_=Math.floor(_))}else _=(g-(n.slidesPerView-1)*x)/n.slidesPerView,n.roundLengths&&(_=Math.floor(_)),R&&(R.style[e.getDirectionLabel("width")]=`${_}px`);R&&(R.swiperSlideSize=_),p.push(_),n.centeredSlides?(S=S+_/2+T/2+x,T===0&&M!==0&&(S=S-g/2-x),M===0&&(S=S-g/2-x),Math.abs(S)<1/1e3&&(S=0),n.roundLengths&&(S=Math.floor(S)),k%n.slidesPerGroup===0&&c.push(S),y.push(S)):(n.roundLengths&&(S=Math.floor(S)),(k-Math.min(e.params.slidesPerGroupSkip,k))%e.params.slidesPerGroup===0&&c.push(S),y.push(S),S=S+_+x),e.virtualSize+=_+x,T=_,k+=1}}if(e.virtualSize=Math.max(e.virtualSize,g)+v,o&&a&&(n.effect==="slide"||n.effect==="coverflow")&&(r.style.width=`${e.virtualSize+x}px`),n.setWrapperSize&&(r.style[e.getDirectionLabel("width")]=`${e.virtualSize+x}px`),C&&e.grid.updateWrapperSize(_,c),!n.centeredSlides){const M=n.slidesPerView!=="auto"&&n.slidesPerView%1!==0,R=n.snapToSlideEdge&&!n.loop&&(n.slidesPerView==="auto"||M);let L=c.length;if(R){let F;if(n.slidesPerView==="auto"){F=1;let A=0;for(let O=p.length-1;O>=0&&(A+=p[O]+(O<p.length-1?x:0),A<=g);O-=1)F=p.length-O}else F=Math.floor(n.slidesPerView);L=Math.max(d-F,0)}const j=[];for(let F=0;F<c.length;F+=1){let A=c[F];n.roundLengths&&(A=Math.floor(A)),R?F<=L&&j.push(A):c[F]<=e.virtualSize-g&&j.push(A)}c=j,Math.floor(e.virtualSize-g)-Math.floor(c[c.length-1])>1&&(R||c.push(e.virtualSize-g))}if(l&&n.loop){const M=p[0]+x;if(n.slidesPerGroup>1){const R=Math.ceil((e.virtual.slidesBefore+e.virtual.slidesAfter)/n.slidesPerGroup),L=M*n.slidesPerGroup;for(let j=0;j<R;j+=1)c.push(c[c.length-1]+L)}for(let R=0;R<e.virtual.slidesBefore+e.virtual.slidesAfter;R+=1)n.slidesPerGroup===1&&c.push(c[c.length-1]+M),y.push(y[y.length-1]+M),e.virtualSize+=M}if(c.length===0&&(c=[0]),x!==0){const M=e.isHorizontal()&&o?"marginLeft":e.getDirectionLabel("marginRight");u.filter((R,L)=>!n.cssMode||n.loop?!0:L!==u.length-1).forEach(R=>{R.style[M]=`${x}px`})}if(n.centeredSlides&&n.centeredSlidesBounds){let M=0;p.forEach(L=>{M+=L+(x||0)}),M-=x;const R=M>g?M-g:0;c=c.map(L=>L<=0?-m:L>R?R+v:L)}if(n.centerInsufficientSlides){let M=0;if(p.forEach(R=>{M+=R+(x||0)}),M-=x,M<g){const R=(g-M)/2;c.forEach((L,j)=>{c[j]=L-R}),y.forEach((L,j)=>{y[j]=L+R})}}if(Object.assign(e,{slides:u,snapGrid:c,slidesGrid:y,slidesSizesGrid:p}),n.centeredSlides&&n.cssMode&&!n.centeredSlidesBounds){fi(r,"--swiper-centered-offset-before",`${-c[0]}px`),fi(r,"--swiper-centered-offset-after",`${e.size/2-p[p.length-1]/2}px`);const M=-e.snapGrid[0],R=-e.slidesGrid[0];e.snapGrid=e.snapGrid.map(L=>L+M),e.slidesGrid=e.slidesGrid.map(L=>L+R)}if(d!==s&&e.emit("slidesLengthChange"),c.length!==w&&(e.params.watchOverflow&&e.checkOverflow(),e.emit("snapGridLengthChange")),y.length!==h&&e.emit("slidesGridLengthChange"),n.watchSlidesProgress&&e.updateSlidesOffset(),e.emit("slidesUpdated"),!l&&!n.cssMode&&(n.effect==="slide"||n.effect==="fade")){const M=`${n.containerModifierClass}backface-hidden`,R=e.el.classList.contains(M);d<=n.maxBackfaceHiddenSlides?R||e.el.classList.add(M):R&&e.el.classList.remove(M)}}function a$(e){const t=this,n=[],r=t.virtual&&t.params.virtual.enabled;let i=0,o;typeof e=="number"?t.setTransition(e):e===!0&&t.setTransition(t.params.speed);const a=l=>r?t.slides[t.getSlideIndexByData(l)]:t.slides[l];if(t.params.slidesPerView!=="auto"&&t.params.slidesPerView>1)if(t.params.centeredSlides)(t.visibleSlides||[]).forEach(l=>{n.push(l)});else for(o=0;o<Math.ceil(t.params.slidesPerView);o+=1){const l=t.activeIndex+o;if(l>t.slides.length&&!r)break;n.push(a(l))}else n.push(a(t.activeIndex));for(o=0;o<n.length;o+=1)if(typeof n[o]<"u"){const l=n[o].offsetHeight;i=l>i?l:i}(i||i===0)&&(t.wrapperEl.style.height=`${i}px`)}function s$(){const e=this,t=e.slides,n=e.isElement?e.isHorizontal()?e.wrapperEl.offsetLeft:e.wrapperEl.offsetTop:0;for(let r=0;r<t.length;r+=1)t[r].swiperSlideOffset=(e.isHorizontal()?t[r].offsetLeft:t[r].offsetTop)-n-e.cssOverflowAdjustment()}const bv=(e,t,n)=>{t&&!e.classList.contains(n)?e.classList.add(n):!t&&e.classList.contains(n)&&e.classList.remove(n)};function l$(e=this&&this.translate||0){const t=this,n=t.params,{slides:r,rtlTranslate:i,snapGrid:o}=t;if(r.length===0)return;typeof r[0].swiperSlideOffset>"u"&&t.updateSlidesOffset();let a=-e;i&&(a=e),t.visibleSlidesIndexes=[],t.visibleSlides=[];let l=n.spaceBetween;typeof l=="string"&&l.indexOf("%")>=0?l=parseFloat(l.replace("%",""))/100*t.size:typeof l=="string"&&(l=parseFloat(l));for(let s=0;s<r.length;s+=1){const u=r[s];let d=u.swiperSlideOffset;n.cssMode&&n.centeredSlides&&(d-=r[0].swiperSlideOffset);const c=(a+(n.centeredSlides?t.minTranslate():0)-d)/(u.swiperSlideSize+l),y=(a-o[0]+(n.centeredSlides?t.minTranslate():0)-d)/(u.swiperSlideSize+l),p=-(a-d),m=p+t.slidesSizesGrid[s],v=p>=0&&p<=t.size-t.slidesSizesGrid[s],w=p>=0&&p<t.size-1||m>1&&m<=t.size||p<=0&&m>=t.size;w&&(t.visibleSlides.push(u),t.visibleSlidesIndexes.push(s)),bv(u,w,n.slideVisibleClass),bv(u,v,n.slideFullyVisibleClass),u.progress=i?-c:c,u.originalProgress=i?-y:y}}function u$(e){const t=this;if(typeof e>"u"){const d=t.rtlTranslate?-1:1;e=t&&t.translate&&t.translate*d||0}const n=t.params,r=t.maxTranslate()-t.minTranslate();let{progress:i,isBeginning:o,isEnd:a,progressLoop:l}=t;const s=o,u=a;if(r===0)i=0,o=!0,a=!0;else{i=(e-t.minTranslate())/r;const d=Math.abs(e-t.minTranslate())<1,c=Math.abs(e-t.maxTranslate())<1;o=d||i<=0,a=c||i>=1,d&&(i=0),c&&(i=1)}if(n.loop){const d=t.getSlideIndexByData(0),c=t.getSlideIndexByData(t.slides.length-1),y=t.slidesGrid[d],p=t.slidesGrid[c],m=t.slidesGrid[t.slidesGrid.length-1],v=Math.abs(e);v>=y?l=(v-y)/m:l=(v+m-p)/m,l>1&&(l-=1)}Object.assign(t,{progress:i,progressLoop:l,isBeginning:o,isEnd:a}),(n.watchSlidesProgress||n.centeredSlides&&n.autoHeight)&&t.updateSlidesProgress(e),o&&!s&&t.emit("reachBeginning toEdge"),a&&!u&&t.emit("reachEnd toEdge"),(s&&!o||u&&!a)&&t.emit("fromEdge"),t.emit("progress",i)}const wd=(e,t,n)=>{t&&!e.classList.contains(n)?e.classList.add(n):!t&&e.classList.contains(n)&&e.classList.remove(n)};function c$(){const e=this,{slides:t,params:n,slidesEl:r,activeIndex:i}=e,o=e.virtual&&n.virtual.enabled,a=e.grid&&n.grid&&n.grid.rows>1,l=c=>Sn(r,`.${n.slideClass}${c}, swiper-slide${c}`)[0];let s,u,d;if(o)if(n.loop){let c=i-e.virtual.slidesBefore;c<0&&(c=e.virtual.slides.length+c),c>=e.virtual.slides.length&&(c-=e.virtual.slides.length),s=l(`[data-swiper-slide-index="${c}"]`)}else s=l(`[data-swiper-slide-index="${i}"]`);else a?(s=t.find(c=>c.column===i),d=t.find(c=>c.column===i+1),u=t.find(c=>c.column===i-1)):s=t[i];s&&(a||(d=Y5(s,`.${n.slideClass}, swiper-slide`)[0],n.loop&&!d&&(d=t[0]),u=q5(s,`.${n.slideClass}, swiper-slide`)[0],n.loop&&!u===0&&(u=t[t.length-1]))),t.forEach(c=>{wd(c,c===s,n.slideActiveClass),wd(c,c===d,n.slideNextClass),wd(c,c===u,n.slidePrevClass)}),e.emitSlidesClasses()}const el=(e,t)=>{if(!e||e.destroyed||!e.params)return;const n=()=>e.isElement?"swiper-slide":`.${e.params.slideClass}`,r=t.closest(n());if(r){let i=r.querySelector(`.${e.params.lazyPreloaderClass}`);!i&&e.isElement&&(r.shadowRoot?i=r.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`):requestAnimationFrame(()=>{r.shadowRoot&&(i=r.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`),i&&!i.lazyPreloaderManaged&&i.remove())})),i&&!i.lazyPreloaderManaged&&i.remove()}},Sd=(e,t)=>{if(!e.slides[t])return;const n=e.slides[t].querySelector('[loading="lazy"]');n&&n.removeAttribute("loading")},wp=e=>{if(!e||e.destroyed||!e.params)return;let t=e.params.lazyPreloadPrevNext;const n=e.slides.length;if(!n||!t||t<0)return;t=Math.min(t,n);const r=e.params.slidesPerView==="auto"?e.slidesPerViewDynamic():Math.ceil(e.params.slidesPerView),i=e.activeIndex;if(e.params.grid&&e.params.grid.rows>1){const a=i,l=[a-t];l.push(...Array.from({length:t}).map((s,u)=>a+r+u)),e.slides.forEach((s,u)=>{l.includes(s.column)&&Sd(e,u)});return}const o=i+r-1;if(e.params.rewind||e.params.loop)for(let a=i-t;a<=o+t;a+=1){const l=(a%n+n)%n;(l<i||l>o)&&Sd(e,l)}else for(let a=Math.max(i-t,0);a<=Math.min(o+t,n-1);a+=1)a!==i&&(a>o||a<i)&&Sd(e,a)};function d$(e){const{slidesGrid:t,params:n}=e,r=e.rtlTranslate?e.translate:-e.translate;let i;for(let o=0;o<t.length;o+=1)typeof t[o+1]<"u"?r>=t[o]&&r<t[o+1]-(t[o+1]-t[o])/2?i=o:r>=t[o]&&r<t[o+1]&&(i=o+1):r>=t[o]&&(i=o);return n.normalizeSlideIndex&&(i<0||typeof i>"u")&&(i=0),i}function f$(e){const t=this,n=t.rtlTranslate?t.translate:-t.translate,{snapGrid:r,params:i,activeIndex:o,realIndex:a,snapIndex:l}=t;let s=e,u;const d=p=>{let m=p-t.virtual.slidesBefore;return m<0&&(m=t.virtual.slides.length+m),m>=t.virtual.slides.length&&(m-=t.virtual.slides.length),m};if(typeof s>"u"&&(s=d$(t)),r.indexOf(n)>=0)u=r.indexOf(n);else{const p=Math.min(i.slidesPerGroupSkip,s);u=p+Math.floor((s-p)/i.slidesPerGroup)}if(u>=r.length&&(u=r.length-1),s===o&&!t.params.loop){u!==l&&(t.snapIndex=u,t.emit("snapIndexChange"));return}if(s===o&&t.params.loop&&t.virtual&&t.params.virtual.enabled){t.realIndex=d(s);return}const c=t.grid&&i.grid&&i.grid.rows>1;let y;if(t.virtual&&i.virtual.enabled)i.loop?y=d(s):y=s;else if(c){const p=t.slides.find(v=>v.column===s);let m=parseInt(p.getAttribute("data-swiper-slide-index"),10);Number.isNaN(m)&&(m=Math.max(t.slides.indexOf(p),0)),y=Math.floor(m/i.grid.rows)}else if(t.slides[s]){const p=t.slides[s].getAttribute("data-swiper-slide-index");p?y=parseInt(p,10):y=s}else y=s;Object.assign(t,{previousSnapIndex:l,snapIndex:u,previousRealIndex:a,realIndex:y,previousIndex:o,activeIndex:s}),t.initialized&&wp(t),t.emit("activeIndexChange"),t.emit("snapIndexChange"),(t.initialized||t.params.runCallbacksOnInit)&&(a!==y&&t.emit("realIndexChange"),t.emit("slideChange"))}function p$(e,t){const n=this,r=n.params;let i=e.closest(`.${r.slideClass}, swiper-slide`);!i&&n.isElement&&t&&t.length>1&&t.includes(e)&&[...t.slice(t.indexOf(e)+1,t.length)].forEach(l=>{!i&&l.matches&&l.matches(`.${r.slideClass}, swiper-slide`)&&(i=l)});let o=!1,a;if(i){for(let l=0;l<n.slides.length;l+=1)if(n.slides[l]===i){o=!0,a=l;break}}if(i&&o)n.clickedSlide=i,n.virtual&&n.params.virtual.enabled?n.clickedIndex=parseInt(i.getAttribute("data-swiper-slide-index"),10):n.clickedIndex=a;else{n.clickedSlide=void 0,n.clickedIndex=void 0;return}r.slideToClickedSlide&&n.clickedIndex!==void 0&&n.clickedIndex!==n.activeIndex&&n.slideToClickedSlide()}var h$={updateSize:i$,updateSlides:o$,updateAutoHeight:a$,updateSlidesOffset:s$,updateSlidesProgress:l$,updateProgress:u$,updateSlidesClasses:c$,updateActiveIndex:f$,updateClickedSlide:p$};function m$(e=this.isHorizontal()?"x":"y"){const t=this,{params:n,rtlTranslate:r,translate:i,wrapperEl:o}=t;if(n.virtualTranslate)return r?-i:i;if(n.cssMode)return i;let a=U5(o,e);return a+=t.cssOverflowAdjustment(),r&&(a=-a),a||0}function g$(e,t){const n=this,{rtlTranslate:r,params:i,wrapperEl:o,progress:a}=n;let l=0,s=0;const u=0;n.isHorizontal()?l=r?-e:e:s=e,i.roundLengths&&(l=Math.floor(l),s=Math.floor(s)),n.previousTranslate=n.translate,n.translate=n.isHorizontal()?l:s,i.cssMode?o[n.isHorizontal()?"scrollLeft":"scrollTop"]=n.isHorizontal()?-l:-s:i.virtualTranslate||(n.isHorizontal()?l-=n.cssOverflowAdjustment():s-=n.cssOverflowAdjustment(),o.style.transform=`translate3d(${l}px, ${s}px, ${u}px)`);let d;const c=n.maxTranslate()-n.minTranslate();c===0?d=0:d=(e-n.minTranslate())/c,d!==a&&n.updateProgress(e),n.emit("setTranslate",n.translate,t)}function v$(){return-this.snapGrid[0]}function y$(){return-this.snapGrid[this.snapGrid.length-1]}function x$(e=0,t=this.params.speed,n=!0,r=!0,i){const o=this,{params:a,wrapperEl:l}=o;if(o.animating&&a.preventInteractionOnTransition)return!1;const s=o.minTranslate(),u=o.maxTranslate();let d;if(r&&e>s?d=s:r&&e<u?d=u:d=e,o.updateProgress(d),a.cssMode){const c=o.isHorizontal();if(t===0)l[c?"scrollLeft":"scrollTop"]=-d;else{if(!o.support.smoothScroll)return MS({swiper:o,targetPosition:-d,side:c?"left":"top"}),!0;l.scrollTo({[c?"left":"top"]:-d,behavior:"smooth"})}return!0}return t===0?(o.setTransition(0),o.setTranslate(d),n&&(o.emit("beforeTransitionStart",t,i),o.emit("transitionEnd"))):(o.setTransition(t),o.setTranslate(d),n&&(o.emit("beforeTransitionStart",t,i),o.emit("transitionStart")),o.animating||(o.animating=!0,o.onTranslateToWrapperTransitionEnd||(o.onTranslateToWrapperTransitionEnd=function(y){!o||o.destroyed||y.target===this&&(o.wrapperEl.removeEventListener("transitionend",o.onTranslateToWrapperTransitionEnd),o.onTranslateToWrapperTransitionEnd=null,delete o.onTranslateToWrapperTransitionEnd,o.animating=!1,n&&o.emit("transitionEnd"))}),o.wrapperEl.addEventListener("transitionend",o.onTranslateToWrapperTransitionEnd))),!0}var b$={getTranslate:m$,setTranslate:g$,minTranslate:v$,maxTranslate:y$,translateTo:x$};function w$(e,t){const n=this;n.params.cssMode||(n.wrapperEl.style.transitionDuration=`${e}ms`,n.wrapperEl.style.transitionDelay=e===0?"0ms":""),n.emit("setTransition",e,t)}function RS({swiper:e,runCallbacks:t,direction:n,step:r}){const{activeIndex:i,previousIndex:o}=e;let a=n;a||(i>o?a="next":i<o?a="prev":a="reset"),e.emit(`transition${r}`),t&&a==="reset"?e.emit(`slideResetTransition${r}`):t&&i!==o&&(e.emit(`slideChangeTransition${r}`),a==="next"?e.emit(`slideNextTransition${r}`):e.emit(`slidePrevTransition${r}`))}function S$(e=!0,t){const n=this,{params:r}=n;r.cssMode||(r.autoHeight&&n.updateAutoHeight(),RS({swiper:n,runCallbacks:e,direction:t,step:"Start"}))}function _$(e=!0,t){const n=this,{params:r}=n;n.animating=!1,!r.cssMode&&(n.setTransition(0),RS({swiper:n,runCallbacks:e,direction:t,step:"End"}))}var C$={setTransition:w$,transitionStart:S$,transitionEnd:_$};function E$(e=0,t,n=!0,r,i){typeof e=="string"&&(e=parseInt(e,10));const o=this;let a=e;a<0&&(a=0);const{params:l,snapGrid:s,slidesGrid:u,previousIndex:d,activeIndex:c,rtlTranslate:y,wrapperEl:p,enabled:m}=o;if(!m&&!r&&!i||o.destroyed||o.animating&&l.preventInteractionOnTransition)return!1;typeof t>"u"&&(t=o.params.speed);const v=Math.min(o.params.slidesPerGroupSkip,a);let w=v+Math.floor((a-v)/o.params.slidesPerGroup);w>=s.length&&(w=s.length-1);const h=-s[w];if(l.normalizeSlideIndex)for(let C=0;C<u.length;C+=1){const _=-Math.floor(h*100),$=Math.floor(u[C]*100),M=Math.floor(u[C+1]*100);typeof u[C+1]<"u"?_>=$&&_<M-(M-$)/2?a=C:_>=$&&_<M&&(a=C+1):_>=$&&(a=C)}if(o.initialized&&a!==c&&(!o.allowSlideNext&&(y?h>o.translate&&h>o.minTranslate():h<o.translate&&h<o.minTranslate())||!o.allowSlidePrev&&h>o.translate&&h>o.maxTranslate()&&(c||0)!==a))return!1;a!==(d||0)&&n&&o.emit("beforeSlideChangeStart"),o.updateProgress(h);let g;a>c?g="next":a<c?g="prev":g="reset";const x=o.virtual&&o.params.virtual.enabled;if(!(x&&i)&&(y&&-h===o.translate||!y&&h===o.translate))return o.updateActiveIndex(a),l.autoHeight&&o.updateAutoHeight(),o.updateSlidesClasses(),l.effect!=="slide"&&o.setTranslate(h),g!=="reset"&&(o.transitionStart(n,g),o.transitionEnd(n,g)),!1;if(l.cssMode){const C=o.isHorizontal(),_=y?h:-h;if(t===0)x&&(o.wrapperEl.style.scrollSnapType="none",o._immediateVirtual=!0),x&&!o._cssModeVirtualInitialSet&&o.params.initialSlide>0?(o._cssModeVirtualInitialSet=!0,requestAnimationFrame(()=>{p[C?"scrollLeft":"scrollTop"]=_})):p[C?"scrollLeft":"scrollTop"]=_,x&&requestAnimationFrame(()=>{o.wrapperEl.style.scrollSnapType="",o._immediateVirtual=!1});else{if(!o.support.smoothScroll)return MS({swiper:o,targetPosition:_,side:C?"left":"top"}),!0;p.scrollTo({[C?"left":"top"]:_,behavior:"smooth"})}return!0}const k=AS().isSafari;return x&&!i&&k&&o.isElement&&o.virtual.update(!1,!1,a),o.setTransition(t),o.setTranslate(h),o.updateActiveIndex(a),o.updateSlidesClasses(),o.emit("beforeTransitionStart",t,r),o.transitionStart(n,g),t===0?o.transitionEnd(n,g):o.animating||(o.animating=!0,o.onSlideToWrapperTransitionEnd||(o.onSlideToWrapperTransitionEnd=function(_){!o||o.destroyed||_.target===this&&(o.wrapperEl.removeEventListener("transitionend",o.onSlideToWrapperTransitionEnd),o.onSlideToWrapperTransitionEnd=null,delete o.onSlideToWrapperTransitionEnd,o.transitionEnd(n,g))}),o.wrapperEl.addEventListener("transitionend",o.onSlideToWrapperTransitionEnd)),!0}function k$(e=0,t,n=!0,r){typeof e=="string"&&(e=parseInt(e,10));const i=this;if(i.destroyed)return;typeof t>"u"&&(t=i.params.speed);const o=i.grid&&i.params.grid&&i.params.grid.rows>1;let a=e;if(i.params.loop)if(i.virtual&&i.params.virtual.enabled)a=a+i.virtual.slidesBefore;else{let l;if(o){const v=a*i.params.grid.rows;l=i.slides.find(w=>w.getAttribute("data-swiper-slide-index")*1===v).column}else l=i.getSlideIndexByData(a);const s=o?Math.ceil(i.slides.length/i.params.grid.rows):i.slides.length,{centeredSlides:u,slidesOffsetBefore:d,slidesOffsetAfter:c}=i.params,y=u||!!d||!!c;let p=i.params.slidesPerView;p==="auto"?p=i.slidesPerViewDynamic():(p=Math.ceil(parseFloat(i.params.slidesPerView,10)),y&&p%2===0&&(p=p+1));let m=s-l<p;if(y&&(m=m||l<Math.ceil(p/2)),r&&y&&i.params.slidesPerView!=="auto"&&!o&&(m=!1),m){const v=y?l<i.activeIndex?"prev":"next":l-i.activeIndex-1<i.params.slidesPerView?"next":"prev";i.loopFix({direction:v,slideTo:!0,activeSlideIndex:v==="next"?l+1:l-s+1,slideRealIndex:v==="next"?i.realIndex:void 0})}if(o){const v=a*i.params.grid.rows;a=i.slides.find(w=>w.getAttribute("data-swiper-slide-index")*1===v).column}else a=i.getSlideIndexByData(a)}return requestAnimationFrame(()=>{i.slideTo(a,t,n,r)}),i}function T$(e,t=!0,n){const r=this,{enabled:i,params:o,animating:a}=r;if(!i||r.destroyed)return r;typeof e>"u"&&(e=r.params.speed);let l=o.slidesPerGroup;o.slidesPerView==="auto"&&o.slidesPerGroup===1&&o.slidesPerGroupAuto&&(l=Math.max(r.slidesPerViewDynamic("current",!0),1));const s=r.activeIndex<o.slidesPerGroupSkip?1:l,u=r.virtual&&o.virtual.enabled;if(o.loop){if(a&&!u&&o.loopPreventsSliding)return!1;if(r.loopFix({direction:"next"}),r._clientLeft=r.wrapperEl.clientLeft,r.activeIndex===r.slides.length-1&&o.cssMode)return requestAnimationFrame(()=>{r.slideTo(r.activeIndex+s,e,t,n)}),!0}return o.rewind&&r.isEnd?r.slideTo(0,e,t,n):r.slideTo(r.activeIndex+s,e,t,n)}function P$(e,t=!0,n){const r=this,{params:i,snapGrid:o,slidesGrid:a,rtlTranslate:l,enabled:s,animating:u}=r;if(!s||r.destroyed)return r;typeof e>"u"&&(e=r.params.speed);const d=r.virtual&&i.virtual.enabled;if(i.loop){if(u&&!d&&i.loopPreventsSliding)return!1;r.loopFix({direction:"prev"}),r._clientLeft=r.wrapperEl.clientLeft}const c=l?r.translate:-r.translate;function y(g){return g<0?-Math.floor(Math.abs(g)):Math.floor(g)}const p=y(c),m=o.map(g=>y(g)),v=i.freeMode&&i.freeMode.enabled;let w=o[m.indexOf(p)-1];if(typeof w>"u"&&(i.cssMode||v)){let g;o.forEach((x,S)=>{p>=x&&(g=S)}),typeof g<"u"&&(w=v?o[g]:o[g>0?g-1:g])}let h=0;if(typeof w<"u"&&(h=a.indexOf(w),h<0&&(h=r.activeIndex-1),i.slidesPerView==="auto"&&i.slidesPerGroup===1&&i.slidesPerGroupAuto&&(h=h-r.slidesPerViewDynamic("previous",!0)+1,h=Math.max(h,0))),i.rewind&&r.isBeginning){const g=r.params.virtual&&r.params.virtual.enabled&&r.virtual?r.virtual.slides.length-1:r.slides.length-1;return r.slideTo(g,e,t,n)}else if(i.loop&&r.activeIndex===0&&i.cssMode)return requestAnimationFrame(()=>{r.slideTo(h,e,t,n)}),!0;return r.slideTo(h,e,t,n)}function O$(e,t=!0,n){const r=this;if(!r.destroyed)return typeof e>"u"&&(e=r.params.speed),r.slideTo(r.activeIndex,e,t,n)}function j$(e,t=!0,n,r=.5){const i=this;if(i.destroyed)return;typeof e>"u"&&(e=i.params.speed);let o=i.activeIndex;const a=Math.min(i.params.slidesPerGroupSkip,o),l=a+Math.floor((o-a)/i.params.slidesPerGroup),s=i.rtlTranslate?i.translate:-i.translate;if(s>=i.snapGrid[l]){const u=i.snapGrid[l],d=i.snapGrid[l+1];s-u>(d-u)*r&&(o+=i.params.slidesPerGroup)}else{const u=i.snapGrid[l-1],d=i.snapGrid[l];s-u<=(d-u)*r&&(o-=i.params.slidesPerGroup)}return o=Math.max(o,0),o=Math.min(o,i.slidesGrid.length-1),i.slideTo(o,e,t,n)}function M$(){const e=this;if(e.destroyed)return;const{params:t,slidesEl:n}=e,r=t.slidesPerView==="auto"?e.slidesPerViewDynamic():t.slidesPerView;let i=e.getSlideIndexWhenGrid(e.clickedIndex),o;const a=e.isElement?"swiper-slide":`.${t.slideClass}`,l=e.grid&&e.params.grid&&e.params.grid.rows>1;if(t.loop){if(e.animating)return;o=parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"),10),t.centeredSlides?e.slideToLoop(o):i>(l?(e.slides.length-r)/2-(e.params.grid.rows-1):e.slides.length-r)?(e.loopFix(),i=e.getSlideIndex(Sn(n,`${a}[data-swiper-slide-index="${o}"]`)[0]),jS(()=>{e.slideTo(i)})):e.slideTo(i)}else e.slideTo(i)}var $$={slideTo:E$,slideToLoop:k$,slideNext:T$,slidePrev:P$,slideReset:O$,slideToClosest:j$,slideToClickedSlide:M$};function I$(e,t){const n=this,{params:r,slidesEl:i}=n;if(!r.loop||n.virtual&&n.params.virtual.enabled)return;const o=()=>{Sn(i,`.${r.slideClass}, swiper-slide`).forEach((m,v)=>{m.setAttribute("data-swiper-slide-index",v)})},a=()=>{const p=Sn(i,`.${r.slideBlankClass}`);p.forEach(m=>{m.remove()}),p.length>0&&(n.recalcSlides(),n.updateSlides())},l=n.grid&&r.grid&&r.grid.rows>1;r.loopAddBlankSlides&&(r.slidesPerGroup>1||l)&&a();const s=r.slidesPerGroup*(l?r.grid.rows:1),u=n.slides.length%s!==0,d=l&&n.slides.length%r.grid.rows!==0,c=p=>{for(let m=0;m<p;m+=1){const v=n.isElement?ql("swiper-slide",[r.slideBlankClass]):ql("div",[r.slideClass,r.slideBlankClass]);n.slidesEl.append(v)}};if(u){if(r.loopAddBlankSlides){const p=s-n.slides.length%s;c(p),n.recalcSlides(),n.updateSlides()}else Gl("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");o()}else if(d){if(r.loopAddBlankSlides){const p=r.grid.rows-n.slides.length%r.grid.rows;c(p),n.recalcSlides(),n.updateSlides()}else Gl("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");o()}else o();const y=r.centeredSlides||!!r.slidesOffsetBefore||!!r.slidesOffsetAfter;n.loopFix({slideRealIndex:e,direction:y?void 0:"next",initial:t})}function D$({slideRealIndex:e,slideTo:t=!0,direction:n,setTranslate:r,activeSlideIndex:i,initial:o,byController:a,byMousewheel:l}={}){const s=this;if(!s.params.loop)return;s.emit("beforeLoopFix");const{slides:u,allowSlidePrev:d,allowSlideNext:c,slidesEl:y,params:p}=s,{centeredSlides:m,slidesOffsetBefore:v,slidesOffsetAfter:w,initialSlide:h}=p,g=m||!!v||!!w;if(s.allowSlidePrev=!0,s.allowSlideNext=!0,s.virtual&&p.virtual.enabled){t&&(!g&&s.snapIndex===0?s.slideTo(s.virtual.slides.length,0,!1,!0):g&&s.snapIndex<p.slidesPerView?s.slideTo(s.virtual.slides.length+s.snapIndex,0,!1,!0):s.snapIndex===s.snapGrid.length-1&&s.slideTo(s.virtual.slidesBefore,0,!1,!0)),s.allowSlidePrev=d,s.allowSlideNext=c,s.emit("loopFix");return}let x=p.slidesPerView;x==="auto"?x=s.slidesPerViewDynamic():(x=Math.ceil(parseFloat(p.slidesPerView,10)),g&&x%2===0&&(x=x+1));const S=p.slidesPerGroupAuto?x:p.slidesPerGroup;let T=g?Math.max(S,Math.ceil(x/2)):S;T%S!==0&&(T+=S-T%S),T+=p.loopAdditionalSlides,s.loopedSlides=T;const k=s.grid&&p.grid&&p.grid.rows>1;u.length<x+T||s.params.effect==="cards"&&u.length<x+T*2?Gl("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled or not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"):k&&p.grid.fill==="row"&&Gl("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");const C=[],_=[],$=k?Math.ceil(u.length/p.grid.rows):u.length,M=o&&$-h<x&&!g;let R=M?h:s.activeIndex;typeof i>"u"?i=s.getSlideIndex(u.find(P=>P.classList.contains(p.slideActiveClass))):R=i;const L=n==="next"||!n,j=n==="prev"||!n;let F=0,A=0;const D=(k?u[i].column:i)+(g&&typeof r>"u"?-x/2+.5:0);if(D<T){F=Math.max(T-D,S);for(let P=0;P<T-D;P+=1){const I=P-Math.floor(P/$)*$;if(k){const z=$-I-1;for(let B=u.length-1;B>=0;B-=1)u[B].column===z&&C.push(B)}else C.push($-I-1)}}else if(D+x>$-T){A=Math.max(D-($-T*2),S),M&&(A=Math.max(A,x-$+h+1));for(let P=0;P<A;P+=1){const I=P-Math.floor(P/$)*$;k?u.forEach((z,B)=>{z.column===I&&_.push(B)}):_.push(I)}}if(s.__preventObserver__=!0,requestAnimationFrame(()=>{s.__preventObserver__=!1}),s.params.effect==="cards"&&u.length<x+T*2&&(_.includes(i)&&_.splice(_.indexOf(i),1),C.includes(i)&&C.splice(C.indexOf(i),1)),j&&C.forEach(P=>{u[P].swiperLoopMoveDOM=!0,y.prepend(u[P]),u[P].swiperLoopMoveDOM=!1}),L&&_.forEach(P=>{u[P].swiperLoopMoveDOM=!0,y.append(u[P]),u[P].swiperLoopMoveDOM=!1}),s.recalcSlides(),p.slidesPerView==="auto"?s.updateSlides():k&&(C.length>0&&j||_.length>0&&L)&&s.slides.forEach((P,I)=>{s.grid.updateSlide(I,P,s.slides)}),p.watchSlidesProgress&&s.updateSlidesOffset(),t){if(C.length>0&&j){if(typeof e>"u"){const P=s.slidesGrid[R],z=s.slidesGrid[R+F]-P;l?s.setTranslate(s.translate-z):(s.slideTo(R+Math.ceil(F),0,!1,!0),r&&(s.touchEventsData.startTranslate=s.touchEventsData.startTranslate-z,s.touchEventsData.currentTranslate=s.touchEventsData.currentTranslate-z))}else if(r){const P=k?C.length/p.grid.rows:C.length;s.slideTo(s.activeIndex+P,0,!1,!0),s.touchEventsData.currentTranslate=s.translate}}else if(_.length>0&&L)if(typeof e>"u"){const P=s.slidesGrid[R],z=s.slidesGrid[R-A]-P;l?s.setTranslate(s.translate-z):(s.slideTo(R-A,0,!1,!0),r&&(s.touchEventsData.startTranslate=s.touchEventsData.startTranslate-z,s.touchEventsData.currentTranslate=s.touchEventsData.currentTranslate-z))}else{const P=k?_.length/p.grid.rows:_.length;s.slideTo(s.activeIndex-P,0,!1,!0)}}if(s.allowSlidePrev=d,s.allowSlideNext=c,s.controller&&s.controller.control&&!a){const P={slideRealIndex:e,direction:n,setTranslate:r,activeSlideIndex:i,byController:!0};Array.isArray(s.controller.control)?s.controller.control.forEach(I=>{!I.destroyed&&I.params.loop&&I.loopFix({...P,slideTo:I.params.slidesPerView===p.slidesPerView?t:!1})}):s.controller.control instanceof s.constructor&&s.controller.control.params.loop&&s.controller.control.loopFix({...P,slideTo:s.controller.control.params.slidesPerView===p.slidesPerView?t:!1})}s.emit("loopFix")}function L$(){const e=this,{params:t,slidesEl:n}=e;if(!t.loop||!n||e.virtual&&e.params.virtual.enabled)return;e.recalcSlides();const r=[];e.slides.forEach(i=>{const o=typeof i.swiperSlideIndex>"u"?i.getAttribute("data-swiper-slide-index")*1:i.swiperSlideIndex;r[o]=i}),e.slides.forEach(i=>{i.removeAttribute("data-swiper-slide-index")}),r.forEach(i=>{n.append(i)}),e.recalcSlides(),e.slideTo(e.realIndex,0)}var A$={loopCreate:I$,loopFix:D$,loopDestroy:L$};function R$(e){const t=this;if(!t.params.simulateTouch||t.params.watchOverflow&&t.isLocked||t.params.cssMode)return;const n=t.params.touchEventsTarget==="container"?t.el:t.wrapperEl;t.isElement&&(t.__preventObserver__=!0),n.style.cursor="move",n.style.cursor=e?"grabbing":"grab",t.isElement&&requestAnimationFrame(()=>{t.__preventObserver__=!1})}function F$(){const e=this;e.params.watchOverflow&&e.isLocked||e.params.cssMode||(e.isElement&&(e.__preventObserver__=!0),e[e.params.touchEventsTarget==="container"?"el":"wrapperEl"].style.cursor="",e.isElement&&requestAnimationFrame(()=>{e.__preventObserver__=!1}))}var z$={setGrabCursor:R$,unsetGrabCursor:F$};function N$(e,t=this){function n(r){if(!r||r===kn()||r===vt())return null;r.assignedSlot&&(r=r.assignedSlot);const i=r.closest(e);return!i&&!r.getRootNode?null:i||n(r.getRootNode().host)}return n(t)}function wv(e,t,n){const r=vt(),{params:i}=e,o=i.edgeSwipeDetection,a=i.edgeSwipeThreshold;return o&&(n<=a||n>=r.innerWidth-a)?o==="prevent"?(t.preventDefault(),!0):!1:!0}function B$(e){const t=this,n=kn();let r=e;r.originalEvent&&(r=r.originalEvent);const i=t.touchEventsData;if(r.type==="pointerdown"){if(i.pointerId!==null&&i.pointerId!==r.pointerId)return;i.pointerId=r.pointerId}else r.type==="touchstart"&&r.targetTouches.length===1&&(i.touchId=r.targetTouches[0].identifier);if(r.type==="touchstart"){wv(t,r,r.targetTouches[0].pageX);return}const{params:o,touches:a,enabled:l}=t;if(!l||!o.simulateTouch&&r.pointerType==="mouse"||t.animating&&o.preventInteractionOnTransition)return;!t.animating&&o.cssMode&&o.loop&&t.loopFix();let s=r.target;if(o.touchEventsTarget==="wrapper"&&!G5(s,t.wrapperEl)||"which"in r&&r.which===3||"button"in r&&r.button>0||i.isTouched&&i.isMoved)return;const u=!!o.noSwipingClass&&o.noSwipingClass!=="",d=r.composedPath?r.composedPath():r.path;u&&r.target&&r.target.shadowRoot&&d&&(s=d[0]);const c=o.noSwipingSelector?o.noSwipingSelector:`.${o.noSwipingClass}`,y=!!(r.target&&r.target.shadowRoot);if(o.noSwiping&&(y?N$(c,s):s.closest(c))){t.allowClick=!0;return}if(o.swipeHandler&&!s.closest(o.swipeHandler))return;a.currentX=r.pageX,a.currentY=r.pageY;const p=a.currentX,m=a.currentY;if(!wv(t,r,p))return;Object.assign(i,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),a.startX=p,a.startY=m,i.touchStartTime=Wl(),t.allowClick=!0,t.updateSize(),t.swipeDirection=void 0,o.threshold>0&&(i.allowThresholdMove=!1);let v=!0;s.matches(i.focusableElements)&&(v=!1,s.nodeName==="SELECT"&&(i.isTouched=!1)),n.activeElement&&n.activeElement.matches(i.focusableElements)&&n.activeElement!==s&&(r.pointerType==="mouse"||r.pointerType!=="mouse"&&!s.matches(i.focusableElements))&&n.activeElement.blur();const w=v&&t.allowTouchMove&&o.touchStartPreventDefault;(o.touchStartForcePreventDefault||w)&&!s.isContentEditable&&r.preventDefault(),o.freeMode&&o.freeMode.enabled&&t.freeMode&&t.animating&&!o.cssMode&&t.freeMode.onTouchStart(),t.emit("touchStart",r)}function V$(e){const t=kn(),n=this,r=n.touchEventsData,{params:i,touches:o,rtlTranslate:a,enabled:l}=n;if(!l||!i.simulateTouch&&e.pointerType==="mouse")return;let s=e;if(s.originalEvent&&(s=s.originalEvent),s.type==="pointermove"&&(r.touchId!==null||s.pointerId!==r.pointerId))return;let u;if(s.type==="touchmove"){if(u=[...s.changedTouches].find(k=>k.identifier===r.touchId),!u||u.identifier!==r.touchId)return}else u=s;if(!r.isTouched){r.startMoving&&r.isScrolling&&n.emit("touchMoveOpposite",s);return}const d=u.pageX,c=u.pageY;if(s.preventedByNestedSwiper){o.startX=d,o.startY=c;return}if(!n.allowTouchMove){s.target.matches(r.focusableElements)||(n.allowClick=!1),r.isTouched&&(Object.assign(o,{startX:d,startY:c,currentX:d,currentY:c}),r.touchStartTime=Wl());return}if(i.touchReleaseOnEdges&&!i.loop)if(n.isVertical()){if(c<o.startY&&n.translate<=n.maxTranslate()||c>o.startY&&n.translate>=n.minTranslate()){r.isTouched=!1,r.isMoved=!1;return}}else{if(a&&(d>o.startX&&-n.translate<=n.maxTranslate()||d<o.startX&&-n.translate>=n.minTranslate()))return;if(!a&&(d<o.startX&&n.translate<=n.maxTranslate()||d>o.startX&&n.translate>=n.minTranslate()))return}if(t.activeElement&&t.activeElement.matches(r.focusableElements)&&t.activeElement!==s.target&&s.pointerType!=="mouse"&&t.activeElement.blur(),t.activeElement&&s.target===t.activeElement&&s.target.matches(r.focusableElements)){r.isMoved=!0,n.allowClick=!1;return}r.allowTouchCallbacks&&n.emit("touchMove",s),o.previousX=o.currentX,o.previousY=o.currentY,o.currentX=d,o.currentY=c;const y=o.currentX-o.startX,p=o.currentY-o.startY;if(n.params.threshold&&Math.sqrt(y**2+p**2)<n.params.threshold)return;if(typeof r.isScrolling>"u"){let k;n.isHorizontal()&&o.currentY===o.startY||n.isVertical()&&o.currentX===o.startX?r.isScrolling=!1:y*y+p*p>=25&&(k=Math.atan2(Math.abs(p),Math.abs(y))*180/Math.PI,r.isScrolling=n.isHorizontal()?k>i.touchAngle:90-k>i.touchAngle)}if(r.isScrolling&&n.emit("touchMoveOpposite",s),typeof r.startMoving>"u"&&(o.currentX!==o.startX||o.currentY!==o.startY)&&(r.startMoving=!0),r.isScrolling||s.type==="touchmove"&&r.preventTouchMoveFromPointerMove){r.isTouched=!1;return}if(!r.startMoving)return;n.allowClick=!1,!i.cssMode&&s.cancelable&&s.preventDefault(),i.touchMoveStopPropagation&&!i.nested&&s.stopPropagation();let m=n.isHorizontal()?y:p,v=n.isHorizontal()?o.currentX-o.previousX:o.currentY-o.previousY;i.oneWayMovement&&(m=Math.abs(m)*(a?1:-1),v=Math.abs(v)*(a?1:-1)),o.diff=m,m*=i.touchRatio,a&&(m=-m,v=-v);const w=n.touchesDirection;n.swipeDirection=m>0?"prev":"next",n.touchesDirection=v>0?"prev":"next";const h=n.params.loop&&!i.cssMode,g=n.touchesDirection==="next"&&n.allowSlideNext||n.touchesDirection==="prev"&&n.allowSlidePrev;if(!r.isMoved){if(h&&g&&n.loopFix({direction:n.swipeDirection}),r.startTranslate=n.getTranslate(),n.setTransition(0),n.animating){const k=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0,detail:{bySwiperTouchMove:!0}});n.wrapperEl.dispatchEvent(k)}r.allowMomentumBounce=!1,i.grabCursor&&(n.allowSlideNext===!0||n.allowSlidePrev===!0)&&n.setGrabCursor(!0),n.emit("sliderFirstMove",s)}let x;if(new Date().getTime(),i._loopSwapReset!==!1&&r.isMoved&&r.allowThresholdMove&&w!==n.touchesDirection&&h&&g&&Math.abs(m)>=1){Object.assign(o,{startX:d,startY:c,currentX:d,currentY:c,startTranslate:r.currentTranslate}),r.loopSwapReset=!0,r.startTranslate=r.currentTranslate;return}n.emit("sliderMove",s),r.isMoved=!0,r.currentTranslate=m+r.startTranslate;let S=!0,T=i.resistanceRatio;if(i.touchReleaseOnEdges&&(T=0),m>0?(h&&g&&!x&&r.allowThresholdMove&&r.currentTranslate>(i.centeredSlides?n.minTranslate()-n.slidesSizesGrid[n.activeIndex+1]-(i.slidesPerView!=="auto"&&n.slides.length-i.slidesPerView>=2?n.slidesSizesGrid[n.activeIndex+1]+n.params.spaceBetween:0)-n.params.spaceBetween:n.minTranslate())&&n.loopFix({direction:"prev",setTranslate:!0,activeSlideIndex:0}),r.currentTranslate>n.minTranslate()&&(S=!1,i.resistance&&(r.currentTranslate=n.minTranslate()-1+(-n.minTranslate()+r.startTranslate+m)**T))):m<0&&(h&&g&&!x&&r.allowThresholdMove&&r.currentTranslate<(i.centeredSlides?n.maxTranslate()+n.slidesSizesGrid[n.slidesSizesGrid.length-1]+n.params.spaceBetween+(i.slidesPerView!=="auto"&&n.slides.length-i.slidesPerView>=2?n.slidesSizesGrid[n.slidesSizesGrid.length-1]+n.params.spaceBetween:0):n.maxTranslate())&&n.loopFix({direction:"next",setTranslate:!0,activeSlideIndex:n.slides.length-(i.slidesPerView==="auto"?n.slidesPerViewDynamic():Math.ceil(parseFloat(i.slidesPerView,10)))}),r.currentTranslate<n.maxTranslate()&&(S=!1,i.resistance&&(r.currentTranslate=n.maxTranslate()+1-(n.maxTranslate()-r.startTranslate-m)**T))),S&&(s.preventedByNestedSwiper=!0),!n.allowSlideNext&&n.swipeDirection==="next"&&r.currentTranslate<r.startTranslate&&(r.currentTranslate=r.startTranslate),!n.allowSlidePrev&&n.swipeDirection==="prev"&&r.currentTranslate>r.startTranslate&&(r.currentTranslate=r.startTranslate),!n.allowSlidePrev&&!n.allowSlideNext&&(r.currentTranslate=r.startTranslate),i.threshold>0)if(Math.abs(m)>i.threshold||r.allowThresholdMove){if(!r.allowThresholdMove){r.allowThresholdMove=!0,o.startX=o.currentX,o.startY=o.currentY,r.currentTranslate=r.startTranslate,o.diff=n.isHorizontal()?o.currentX-o.startX:o.currentY-o.startY;return}}else{r.currentTranslate=r.startTranslate;return}!i.followFinger||i.cssMode||((i.freeMode&&i.freeMode.enabled&&n.freeMode||i.watchSlidesProgress)&&(n.updateActiveIndex(),n.updateSlidesClasses()),i.freeMode&&i.freeMode.enabled&&n.freeMode&&n.freeMode.onTouchMove(),n.updateProgress(r.currentTranslate),n.setTranslate(r.currentTranslate))}function U$(e){const t=this,n=t.touchEventsData;let r=e;r.originalEvent&&(r=r.originalEvent);let i;if(r.type==="touchend"||r.type==="touchcancel"){if(i=[...r.changedTouches].find(T=>T.identifier===n.touchId),!i||i.identifier!==n.touchId)return}else{if(n.touchId!==null||r.pointerId!==n.pointerId)return;i=r}if(["pointercancel","pointerout","pointerleave","contextmenu"].includes(r.type)&&!(["pointercancel","contextmenu"].includes(r.type)&&(t.browser.isSafari||t.browser.isWebView)))return;n.pointerId=null,n.touchId=null;const{params:a,touches:l,rtlTranslate:s,slidesGrid:u,enabled:d}=t;if(!d||!a.simulateTouch&&r.pointerType==="mouse")return;if(n.allowTouchCallbacks&&t.emit("touchEnd",r),n.allowTouchCallbacks=!1,!n.isTouched){n.isMoved&&a.grabCursor&&t.setGrabCursor(!1),n.isMoved=!1,n.startMoving=!1;return}a.grabCursor&&n.isMoved&&n.isTouched&&(t.allowSlideNext===!0||t.allowSlidePrev===!0)&&t.setGrabCursor(!1);const c=Wl(),y=c-n.touchStartTime;if(t.allowClick){const T=r.path||r.composedPath&&r.composedPath();t.updateClickedSlide(T&&T[0]||r.target,T),t.emit("tap click",r),y<300&&c-n.lastClickTime<300&&t.emit("doubleTap doubleClick",r)}if(n.lastClickTime=Wl(),jS(()=>{t.destroyed||(t.allowClick=!0)}),!n.isTouched||!n.isMoved||!t.swipeDirection||l.diff===0&&!n.loopSwapReset||n.currentTranslate===n.startTranslate&&!n.loopSwapReset){n.isTouched=!1,n.isMoved=!1,n.startMoving=!1;return}n.isTouched=!1,n.isMoved=!1,n.startMoving=!1;let p;if(a.followFinger?p=s?t.translate:-t.translate:p=-n.currentTranslate,a.cssMode)return;if(a.freeMode&&a.freeMode.enabled){t.freeMode.onTouchEnd({currentPos:p});return}const m=p>=-t.maxTranslate()&&!t.params.loop;let v=0,w=t.slidesSizesGrid[0];for(let T=0;T<u.length;T+=T<a.slidesPerGroupSkip?1:a.slidesPerGroup){const k=T<a.slidesPerGroupSkip-1?1:a.slidesPerGroup;typeof u[T+k]<"u"?(m||p>=u[T]&&p<u[T+k])&&(v=T,w=u[T+k]-u[T]):(m||p>=u[T])&&(v=T,w=u[u.length-1]-u[u.length-2])}let h=null,g=null;a.rewind&&(t.isBeginning?g=a.virtual&&a.virtual.enabled&&t.virtual?t.virtual.slides.length-1:t.slides.length-1:t.isEnd&&(h=0));const x=(p-u[v])/w,S=v<a.slidesPerGroupSkip-1?1:a.slidesPerGroup;if(y>a.longSwipesMs){if(!a.longSwipes){t.slideTo(t.activeIndex);return}t.swipeDirection==="next"&&(x>=a.longSwipesRatio?t.slideTo(a.rewind&&t.isEnd?h:v+S):t.slideTo(v)),t.swipeDirection==="prev"&&(x>1-a.longSwipesRatio?t.slideTo(v+S):g!==null&&x<0&&Math.abs(x)>a.longSwipesRatio?t.slideTo(g):t.slideTo(v))}else{if(!a.shortSwipes){t.slideTo(t.activeIndex);return}t.navigation&&(r.target===t.navigation.nextEl||r.target===t.navigation.prevEl)?r.target===t.navigation.nextEl?t.slideTo(v+S):t.slideTo(v):(t.swipeDirection==="next"&&t.slideTo(h!==null?h:v+S),t.swipeDirection==="prev"&&t.slideTo(g!==null?g:v))}}function Sv(){const e=this,{params:t,el:n}=e;if(n&&n.offsetWidth===0)return;t.breakpoints&&e.setBreakpoint();const{allowSlideNext:r,allowSlidePrev:i,snapGrid:o}=e,a=e.virtual&&e.params.virtual.enabled;e.allowSlideNext=!0,e.allowSlidePrev=!0,e.updateSize(),e.updateSlides(),e.updateSlidesClasses();const l=a&&t.loop;(t.slidesPerView==="auto"||t.slidesPerView>1)&&e.isEnd&&!e.isBeginning&&!e.params.centeredSlides&&!l?e.slideTo(e.slides.length-1,0,!1,!0):e.params.loop&&!a?e.slideToLoop(e.realIndex,0,!1,!0):e.slideTo(e.activeIndex,0,!1,!0),e.autoplay&&e.autoplay.running&&e.autoplay.paused&&(clearTimeout(e.autoplay.resizeTimeout),e.autoplay.resizeTimeout=setTimeout(()=>{e.autoplay&&e.autoplay.running&&e.autoplay.paused&&e.autoplay.resume()},500)),e.allowSlidePrev=i,e.allowSlideNext=r,e.params.watchOverflow&&o!==e.snapGrid&&e.checkOverflow()}function H$(e){const t=this;t.enabled&&(t.allowClick||(t.params.preventClicks&&e.preventDefault(),t.params.preventClicksPropagation&&t.animating&&(e.stopPropagation(),e.stopImmediatePropagation())))}function W$(){const e=this,{wrapperEl:t,rtlTranslate:n,enabled:r}=e;if(!r)return;e.previousTranslate=e.translate,e.isHorizontal()?e.translate=-t.scrollLeft:e.translate=-t.scrollTop,e.translate===0&&(e.translate=0),e.updateActiveIndex(),e.updateSlidesClasses();let i;const o=e.maxTranslate()-e.minTranslate();o===0?i=0:i=(e.translate-e.minTranslate())/o,i!==e.progress&&e.updateProgress(n?-e.translate:e.translate),e.emit("setTranslate",e.translate,!1)}function G$(e){const t=this;el(t,e.target),!(t.params.cssMode||t.params.slidesPerView!=="auto"&&!t.params.autoHeight)&&t.update()}function q$(){const e=this;e.documentTouchHandlerProceeded||(e.documentTouchHandlerProceeded=!0,e.params.touchReleaseOnEdges&&(e.el.style.touchAction="auto"))}const FS=(e,t)=>{const n=kn(),{params:r,el:i,wrapperEl:o,device:a}=e,l=!!r.nested,s=t==="on"?"addEventListener":"removeEventListener",u=t;!i||typeof i=="string"||(n[s]("touchstart",e.onDocumentTouchStart,{passive:!1,capture:l}),i[s]("touchstart",e.onTouchStart,{passive:!1}),i[s]("pointerdown",e.onTouchStart,{passive:!1}),n[s]("touchmove",e.onTouchMove,{passive:!1,capture:l}),n[s]("pointermove",e.onTouchMove,{passive:!1,capture:l}),n[s]("touchend",e.onTouchEnd,{passive:!0}),n[s]("pointerup",e.onTouchEnd,{passive:!0}),n[s]("pointercancel",e.onTouchEnd,{passive:!0}),n[s]("touchcancel",e.onTouchEnd,{passive:!0}),n[s]("pointerout",e.onTouchEnd,{passive:!0}),n[s]("pointerleave",e.onTouchEnd,{passive:!0}),n[s]("contextmenu",e.onTouchEnd,{passive:!0}),(r.preventClicks||r.preventClicksPropagation)&&i[s]("click",e.onClick,!0),r.cssMode&&o[s]("scroll",e.onScroll),r.updateOnWindowResize?e[u](a.ios||a.android?"resize orientationchange observerUpdate":"resize observerUpdate",Sv,!0):e[u]("observerUpdate",Sv,!0),i[s]("load",e.onLoad,{capture:!0}))};function Y$(){const e=this,{params:t}=e;e.onTouchStart=B$.bind(e),e.onTouchMove=V$.bind(e),e.onTouchEnd=U$.bind(e),e.onDocumentTouchStart=q$.bind(e),t.cssMode&&(e.onScroll=W$.bind(e)),e.onClick=H$.bind(e),e.onLoad=G$.bind(e),FS(e,"on")}function X$(){FS(this,"off")}var K$={attachEvents:Y$,detachEvents:X$};const _v=(e,t)=>e.grid&&t.grid&&t.grid.rows>1;function Q$(){const e=this,{realIndex:t,initialized:n,params:r,el:i}=e,o=r.breakpoints;if(!o||o&&Object.keys(o).length===0)return;const a=kn(),l=r.breakpointsBase==="window"||!r.breakpointsBase?r.breakpointsBase:"container",s=["window","container"].includes(r.breakpointsBase)||!r.breakpointsBase?e.el:a.querySelector(r.breakpointsBase),u=e.getBreakpoint(o,l,s);if(!u||e.currentBreakpoint===u)return;const c=(u in o?o[u]:void 0)||e.originalParams,y=_v(e,r),p=_v(e,c),m=e.params.grabCursor,v=c.grabCursor,w=r.enabled;y&&!p?(i.classList.remove(`${r.containerModifierClass}grid`,`${r.containerModifierClass}grid-column`),e.emitContainerClasses()):!y&&p&&(i.classList.add(`${r.containerModifierClass}grid`),(c.grid.fill&&c.grid.fill==="column"||!c.grid.fill&&r.grid.fill==="column")&&i.classList.add(`${r.containerModifierClass}grid-column`),e.emitContainerClasses()),m&&!v?e.unsetGrabCursor():!m&&v&&e.setGrabCursor(),["navigation","pagination","scrollbar"].forEach(k=>{if(typeof c[k]>"u")return;const C=r[k]&&r[k].enabled,_=c[k]&&c[k].enabled;C&&!_&&e[k].disable(),!C&&_&&e[k].enable()});const h=c.direction&&c.direction!==r.direction,g=r.loop&&(c.slidesPerView!==r.slidesPerView||h),x=r.loop;h&&n&&e.changeDirection(),Mt(e.params,c);const S=e.params.enabled,T=e.params.loop;Object.assign(e,{allowTouchMove:e.params.allowTouchMove,allowSlideNext:e.params.allowSlideNext,allowSlidePrev:e.params.allowSlidePrev}),w&&!S?e.disable():!w&&S&&e.enable(),e.currentBreakpoint=u,e.emit("_beforeBreakpoint",c),n&&(g?(e.loopDestroy(),e.loopCreate(t),e.updateSlides()):!x&&T?(e.loopCreate(t),e.updateSlides()):x&&!T&&e.loopDestroy()),e.emit("breakpoint",c)}function Z$(e,t="window",n){if(!e||t==="container"&&!n)return;let r=!1;const i=vt(),o=t==="window"?i.innerHeight:n.clientHeight,a=Object.keys(e).map(l=>{if(typeof l=="string"&&l.indexOf("@")===0){const s=parseFloat(l.substr(1));return{value:o*s,point:l}}return{value:l,point:l}});a.sort((l,s)=>parseInt(l.value,10)-parseInt(s.value,10));for(let l=0;l<a.length;l+=1){const{point:s,value:u}=a[l];t==="window"?i.matchMedia(`(min-width: ${u}px)`).matches&&(r=s):u<=n.clientWidth&&(r=s)}return r||"max"}var J$={setBreakpoint:Q$,getBreakpoint:Z$};function eI(e,t){const n=[];return e.forEach(r=>{typeof r=="object"?Object.keys(r).forEach(i=>{r[i]&&n.push(t+i)}):typeof r=="string"&&n.push(t+r)}),n}function tI(){const e=this,{classNames:t,params:n,rtl:r,el:i,device:o}=e,a=eI(["initialized",n.direction,{"free-mode":e.params.freeMode&&n.freeMode.enabled},{autoheight:n.autoHeight},{rtl:r},{grid:n.grid&&n.grid.rows>1},{"grid-column":n.grid&&n.grid.rows>1&&n.grid.fill==="column"},{android:o.android},{ios:o.ios},{"css-mode":n.cssMode},{centered:n.cssMode&&n.centeredSlides},{"watch-progress":n.watchSlidesProgress}],n.containerModifierClass);t.push(...a),i.classList.add(...t),e.emitContainerClasses()}function nI(){const e=this,{el:t,classNames:n}=e;!t||typeof t=="string"||(t.classList.remove(...n),e.emitContainerClasses())}var rI={addClasses:tI,removeClasses:nI};function iI(){const e=this,{isLocked:t,params:n}=e,{slidesOffsetBefore:r}=n;if(r){const i=e.slides.length-1,o=e.slidesGrid[i]+e.slidesSizesGrid[i]+r*2;e.isLocked=e.size>o}else e.isLocked=e.snapGrid.length===1;n.allowSlideNext===!0&&(e.allowSlideNext=!e.isLocked),n.allowSlidePrev===!0&&(e.allowSlidePrev=!e.isLocked),t&&t!==e.isLocked&&(e.isEnd=!1),t!==e.isLocked&&e.emit(e.isLocked?"lock":"unlock")}var oI={checkOverflow:iI},Sp={init:!0,direction:"horizontal",oneWayMovement:!1,swiperElementNodeName:"SWIPER-CONTAINER",touchEventsTarget:"wrapper",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,eventsPrefix:"swiper",enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,snapToSlideEdge:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:5,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,loop:!1,loopAddBlankSlides:!0,loopAdditionalSlides:0,loopPreventsSliding:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,maxBackfaceHiddenSlides:10,containerModifierClass:"swiper-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-blank",slideActiveClass:"swiper-slide-active",slideVisibleClass:"swiper-slide-visible",slideFullyVisibleClass:"swiper-slide-fully-visible",slideNextClass:"swiper-slide-next",slidePrevClass:"swiper-slide-prev",wrapperClass:"swiper-wrapper",lazyPreloaderClass:"swiper-lazy-preloader",lazyPreloadPrevNext:0,runCallbacksOnInit:!0,_emitClasses:!1};function aI(e,t){return function(r={}){const i=Object.keys(r)[0],o=r[i];if(typeof o!="object"||o===null){Mt(t,r);return}if(e[i]===!0&&(e[i]={enabled:!0}),i==="navigation"&&e[i]&&e[i].enabled&&!e[i].prevEl&&!e[i].nextEl&&(e[i].auto=!0),["pagination","scrollbar"].indexOf(i)>=0&&e[i]&&e[i].enabled&&!e[i].el&&(e[i].auto=!0),!(i in e&&"enabled"in o)){Mt(t,r);return}typeof e[i]=="object"&&!("enabled"in e[i])&&(e[i].enabled=!0),e[i]||(e[i]={enabled:!1}),Mt(t,r)}}const _d={eventsEmitter:r$,update:h$,translate:b$,transition:C$,slide:$$,loop:A$,grabCursor:z$,events:K$,breakpoints:J$,checkOverflow:oI,classes:rI},Cd={};let gm=class $n{constructor(...t){let n,r;t.length===1&&t[0].constructor&&Object.prototype.toString.call(t[0]).slice(8,-1)==="Object"?r=t[0]:[n,r]=t,r||(r={}),r=Mt({},r),n&&!r.el&&(r.el=n);const i=kn();if(r.el&&typeof r.el=="string"&&i.querySelectorAll(r.el).length>1){const s=[];return i.querySelectorAll(r.el).forEach(u=>{const d=Mt({},r,{el:u});s.push(new $n(d))}),s}const o=this;o.__swiper__=!0,o.support=DS(),o.device=LS({userAgent:r.userAgent}),o.browser=AS(),o.eventsListeners={},o.eventsAnyListeners=[],o.modules=[...o.__modules__],r.modules&&Array.isArray(r.modules)&&r.modules.forEach(s=>{typeof s=="function"&&o.modules.indexOf(s)<0&&o.modules.push(s)});const a={};o.modules.forEach(s=>{s({params:r,swiper:o,extendParams:aI(r,a),on:o.on.bind(o),once:o.once.bind(o),off:o.off.bind(o),emit:o.emit.bind(o)})});const l=Mt({},Sp,a);return o.params=Mt({},l,Cd,r),o.originalParams=Mt({},o.params),o.passedParams=Mt({},r),o.params&&o.params.on&&Object.keys(o.params.on).forEach(s=>{o.on(s,o.params.on[s])}),o.params&&o.params.onAny&&o.onAny(o.params.onAny),Object.assign(o,{enabled:o.params.enabled,el:n,classNames:[],slides:[],slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal(){return o.params.direction==="horizontal"},isVertical(){return o.params.direction==="vertical"},activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,cssOverflowAdjustment(){return Math.trunc(this.translate/2**23)*2**23},allowSlideNext:o.params.allowSlideNext,allowSlidePrev:o.params.allowSlidePrev,touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:o.params.focusableElements,lastClickTime:0,clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,startMoving:void 0,pointerId:null,touchId:null},allowClick:!0,allowTouchMove:o.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),o.emit("_swiper"),o.params.init&&o.init(),o}getDirectionLabel(t){return this.isHorizontal()?t:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[t]}getSlideIndex(t){const{slidesEl:n,params:r}=this,i=Sn(n,`.${r.slideClass}, swiper-slide`),o=Yl(i[0]);return Yl(t)-o}getSlideIndexByData(t){return this.getSlideIndex(this.slides.find(n=>n.getAttribute("data-swiper-slide-index")*1===t))}getSlideIndexWhenGrid(t){return this.grid&&this.params.grid&&this.params.grid.rows>1&&(this.params.grid.fill==="column"?t=Math.floor(t/this.params.grid.rows):this.params.grid.fill==="row"&&(t=t%Math.ceil(this.slides.length/this.params.grid.rows))),t}recalcSlides(){const t=this,{slidesEl:n,params:r}=t;t.slides=Sn(n,`.${r.slideClass}, swiper-slide`)}enable(){const t=this;t.enabled||(t.enabled=!0,t.params.grabCursor&&t.setGrabCursor(),t.emit("enable"))}disable(){const t=this;t.enabled&&(t.enabled=!1,t.params.grabCursor&&t.unsetGrabCursor(),t.emit("disable"))}setProgress(t,n){const r=this;t=Math.min(Math.max(t,0),1);const i=r.minTranslate(),a=(r.maxTranslate()-i)*t+i;r.translateTo(a,typeof n>"u"?0:n),r.updateActiveIndex(),r.updateSlidesClasses()}emitContainerClasses(){const t=this;if(!t.params._emitClasses||!t.el)return;const n=t.el.className.split(" ").filter(r=>r.indexOf("swiper")===0||r.indexOf(t.params.containerModifierClass)===0);t.emit("_containerClasses",n.join(" "))}getSlideClasses(t){const n=this;return n.destroyed?"":t.className.split(" ").filter(r=>r.indexOf("swiper-slide")===0||r.indexOf(n.params.slideClass)===0).join(" ")}emitSlidesClasses(){const t=this;if(!t.params._emitClasses||!t.el)return;const n=[];t.slides.forEach(r=>{const i=t.getSlideClasses(r);n.push({slideEl:r,classNames:i}),t.emit("_slideClass",r,i)}),t.emit("_slideClasses",n)}slidesPerViewDynamic(t="current",n=!1){const r=this,{params:i,slides:o,slidesGrid:a,slidesSizesGrid:l,size:s,activeIndex:u}=r;let d=1;if(typeof i.slidesPerView=="number")return i.slidesPerView;if(i.centeredSlides){let c=o[u]?Math.ceil(o[u].swiperSlideSize):0,y;for(let p=u+1;p<o.length;p+=1)o[p]&&!y&&(c+=Math.ceil(o[p].swiperSlideSize),d+=1,c>s&&(y=!0));for(let p=u-1;p>=0;p-=1)o[p]&&!y&&(c+=o[p].swiperSlideSize,d+=1,c>s&&(y=!0))}else if(t==="current")for(let c=u+1;c<o.length;c+=1)(n?a[c]+l[c]-a[u]<s:a[c]-a[u]<s)&&(d+=1);else for(let c=u-1;c>=0;c-=1)a[u]-a[c]<s&&(d+=1);return d}update(){const t=this;if(!t||t.destroyed)return;const{snapGrid:n,params:r}=t;r.breakpoints&&t.setBreakpoint(),[...t.el.querySelectorAll('[loading="lazy"]')].forEach(a=>{a.complete&&el(t,a)}),t.updateSize(),t.updateSlides(),t.updateProgress(),t.updateSlidesClasses();function i(){const a=t.rtlTranslate?t.translate*-1:t.translate,l=Math.min(Math.max(a,t.maxTranslate()),t.minTranslate());t.setTranslate(l),t.updateActiveIndex(),t.updateSlidesClasses()}let o;if(r.freeMode&&r.freeMode.enabled&&!r.cssMode)i(),r.autoHeight&&t.updateAutoHeight();else{if((r.slidesPerView==="auto"||r.slidesPerView>1)&&t.isEnd&&!r.centeredSlides){const a=t.virtual&&r.virtual.enabled?t.virtual.slides:t.slides;o=t.slideTo(a.length-1,0,!1,!0)}else o=t.slideTo(t.activeIndex,0,!1,!0);o||i()}r.watchOverflow&&n!==t.snapGrid&&t.checkOverflow(),t.emit("update")}changeDirection(t,n=!0){const r=this,i=r.params.direction;return t||(t=i==="horizontal"?"vertical":"horizontal"),t===i||t!=="horizontal"&&t!=="vertical"||(r.el.classList.remove(`${r.params.containerModifierClass}${i}`),r.el.classList.add(`${r.params.containerModifierClass}${t}`),r.emitContainerClasses(),r.params.direction=t,r.slides.forEach(o=>{t==="vertical"?o.style.width="":o.style.height=""}),r.emit("changeDirection"),n&&r.update()),r}changeLanguageDirection(t){const n=this;n.rtl&&t==="rtl"||!n.rtl&&t==="ltr"||(n.rtl=t==="rtl",n.rtlTranslate=n.params.direction==="horizontal"&&n.rtl,n.rtl?(n.el.classList.add(`${n.params.containerModifierClass}rtl`),n.el.dir="rtl"):(n.el.classList.remove(`${n.params.containerModifierClass}rtl`),n.el.dir="ltr"),n.update())}mount(t){const n=this;if(n.mounted)return!0;let r=t||n.params.el;if(typeof r=="string"&&(r=document.querySelector(r)),!r)return!1;r.swiper=n,r.parentNode&&r.parentNode.host&&r.parentNode.host.nodeName===n.params.swiperElementNodeName.toUpperCase()&&(n.isElement=!0);const i=()=>`.${(n.params.wrapperClass||"").trim().split(" ").join(".")}`;let a=(()=>r&&r.shadowRoot&&r.shadowRoot.querySelector?r.shadowRoot.querySelector(i()):Sn(r,i())[0])();return!a&&n.params.createElements&&(a=ql("div",n.params.wrapperClass),r.append(a),Sn(r,`.${n.params.slideClass}`).forEach(l=>{a.append(l)})),Object.assign(n,{el:r,wrapperEl:a,slidesEl:n.isElement&&!r.parentNode.host.slideSlots?r.parentNode.host:a,hostEl:n.isElement?r.parentNode.host:r,mounted:!0,rtl:r.dir.toLowerCase()==="rtl"||fr(r,"direction")==="rtl",rtlTranslate:n.params.direction==="horizontal"&&(r.dir.toLowerCase()==="rtl"||fr(r,"direction")==="rtl"),wrongRTL:fr(a,"display")==="-webkit-box"}),!0}init(t){const n=this;if(n.initialized||n.mount(t)===!1)return n;n.emit("beforeInit"),n.params.breakpoints&&n.setBreakpoint(),n.addClasses(),n.updateSize(),n.updateSlides(),n.params.watchOverflow&&n.checkOverflow(),n.params.grabCursor&&n.enabled&&n.setGrabCursor(),n.params.loop&&n.virtual&&n.params.virtual.enabled?n.slideTo(n.params.initialSlide+n.virtual.slidesBefore,0,n.params.runCallbacksOnInit,!1,!0):n.slideTo(n.params.initialSlide,0,n.params.runCallbacksOnInit,!1,!0),n.params.loop&&n.loopCreate(void 0,!0),n.attachEvents();const i=[...n.el.querySelectorAll('[loading="lazy"]')];return n.isElement&&i.push(...n.hostEl.querySelectorAll('[loading="lazy"]')),i.forEach(o=>{o.complete?el(n,o):o.addEventListener("load",a=>{el(n,a.target)})}),wp(n),n.initialized=!0,wp(n),n.emit("init"),n.emit("afterInit"),n}destroy(t=!0,n=!0){const r=this,{params:i,el:o,wrapperEl:a,slides:l}=r;return typeof r.params>"u"||r.destroyed||(r.emit("beforeDestroy"),r.initialized=!1,r.detachEvents(),i.loop&&r.loopDestroy(),n&&(r.removeClasses(),o&&typeof o!="string"&&o.removeAttribute("style"),a&&a.removeAttribute("style"),l&&l.length&&l.forEach(s=>{s.classList.remove(i.slideVisibleClass,i.slideFullyVisibleClass,i.slideActiveClass,i.slideNextClass,i.slidePrevClass),s.removeAttribute("style"),s.removeAttribute("data-swiper-slide-index")})),r.emit("destroy"),Object.keys(r.eventsListeners).forEach(s=>{r.off(s)}),t!==!1&&(r.el&&typeof r.el!="string"&&(r.el.swiper=null),B5(r)),r.destroyed=!0),null}static extendDefaults(t){Mt(Cd,t)}static get extendedDefaults(){return Cd}static get defaults(){return Sp}static installModule(t){$n.prototype.__modules__||($n.prototype.__modules__=[]);const n=$n.prototype.__modules__;typeof t=="function"&&n.indexOf(t)<0&&n.push(t)}static use(t){return Array.isArray(t)?(t.forEach(n=>$n.installModule(n)),$n):($n.installModule(t),$n)}};Object.keys(_d).forEach(e=>{Object.keys(_d[e]).forEach(t=>{gm.prototype[t]=_d[e][t]})});gm.use([t$,n$]);const zS=["eventsPrefix","injectStyles","injectStylesUrls","modules","init","_direction","oneWayMovement","swiperElementNodeName","touchEventsTarget","initialSlide","_speed","cssMode","updateOnWindowResize","resizeObserver","nested","focusableElements","_enabled","_width","_height","preventInteractionOnTransition","userAgent","url","_edgeSwipeDetection","_edgeSwipeThreshold","_freeMode","_autoHeight","setWrapperSize","virtualTranslate","_effect","breakpoints","breakpointsBase","_spaceBetween","_slidesPerView","maxBackfaceHiddenSlides","_grid","_slidesPerGroup","_slidesPerGroupSkip","_slidesPerGroupAuto","_centeredSlides","_centeredSlidesBounds","_slidesOffsetBefore","_slidesOffsetAfter","normalizeSlideIndex","_centerInsufficientSlides","_snapToSlideEdge","_watchOverflow","roundLengths","touchRatio","touchAngle","simulateTouch","_shortSwipes","_longSwipes","longSwipesRatio","longSwipesMs","_followFinger","allowTouchMove","_threshold","touchMoveStopPropagation","touchStartPreventDefault","touchStartForcePreventDefault","touchReleaseOnEdges","uniqueNavElements","_resistance","_resistanceRatio","_watchSlidesProgress","_grabCursor","preventClicks","preventClicksPropagation","_slideToClickedSlide","_loop","loopAdditionalSlides","loopAddBlankSlides","loopPreventsSliding","_rewind","_allowSlidePrev","_allowSlideNext","_swipeHandler","_noSwiping","noSwipingClass","noSwipingSelector","passiveListeners","containerModifierClass","slideClass","slideActiveClass","slideVisibleClass","slideFullyVisibleClass","slideNextClass","slidePrevClass","slideBlankClass","wrapperClass","lazyPreloaderClass","lazyPreloadPrevNext","runCallbacksOnInit","observer","observeParents","observeSlideChildren","a11y","_autoplay","_controller","coverflowEffect","cubeEffect","fadeEffect","flipEffect","creativeEffect","cardsEffect","hashNavigation","history","keyboard","mousewheel","_navigation","_pagination","parallax","_scrollbar","_thumbs","virtual","zoom","control"];function ti(e){return typeof e=="object"&&e!==null&&e.constructor&&Object.prototype.toString.call(e).slice(8,-1)==="Object"&&!e.__swiper__}function Ni(e,t){const n=["__proto__","constructor","prototype"];Object.keys(t).filter(r=>n.indexOf(r)<0).forEach(r=>{typeof e[r]>"u"?e[r]=t[r]:ti(t[r])&&ti(e[r])&&Object.keys(t[r]).length>0?t[r].__swiper__?e[r]=t[r]:Ni(e[r],t[r]):e[r]=t[r]})}function NS(e={}){return e.navigation&&typeof e.navigation.nextEl>"u"&&typeof e.navigation.prevEl>"u"}function BS(e={}){return e.pagination&&typeof e.pagination.el>"u"}function VS(e={}){return e.scrollbar&&typeof e.scrollbar.el>"u"}function US(e=""){const t=e.split(" ").map(r=>r.trim()).filter(r=>!!r),n=[];return t.forEach(r=>{n.indexOf(r)<0&&n.push(r)}),n.join(" ")}function sI(e=""){return e?e.includes("swiper-wrapper")?e:`swiper-wrapper ${e}`:"swiper-wrapper"}function lI({swiper:e,slides:t,passedParams:n,changedParams:r,nextEl:i,prevEl:o,scrollbarEl:a,paginationEl:l}){const s=r.filter(_=>_!=="children"&&_!=="direction"&&_!=="wrapperClass"),{params:u,pagination:d,navigation:c,scrollbar:y,virtual:p,thumbs:m}=e;let v,w,h,g,x,S,T,k;r.includes("thumbs")&&n.thumbs&&n.thumbs.swiper&&!n.thumbs.swiper.destroyed&&u.thumbs&&(!u.thumbs.swiper||u.thumbs.swiper.destroyed)&&(v=!0),r.includes("controller")&&n.controller&&n.controller.control&&u.controller&&!u.controller.control&&(w=!0),r.includes("pagination")&&n.pagination&&(n.pagination.el||l)&&(u.pagination||u.pagination===!1)&&d&&!d.el&&(h=!0),r.includes("scrollbar")&&n.scrollbar&&(n.scrollbar.el||a)&&(u.scrollbar||u.scrollbar===!1)&&y&&!y.el&&(g=!0),r.includes("navigation")&&n.navigation&&(n.navigation.prevEl||o)&&(n.navigation.nextEl||i)&&(u.navigation||u.navigation===!1)&&c&&!c.prevEl&&!c.nextEl&&(x=!0);const C=_=>{e[_]&&(e[_].destroy(),_==="navigation"?(e.isElement&&(e[_].prevEl.remove(),e[_].nextEl.remove()),u[_].prevEl=void 0,u[_].nextEl=void 0,e[_].prevEl=void 0,e[_].nextEl=void 0):(e.isElement&&e[_].el.remove(),u[_].el=void 0,e[_].el=void 0))};r.includes("loop")&&e.isElement&&(u.loop&&!n.loop?S=!0:!u.loop&&n.loop?T=!0:k=!0),s.forEach(_=>{if(ti(u[_])&&ti(n[_]))Object.assign(u[_],n[_]),(_==="navigation"||_==="pagination"||_==="scrollbar")&&"enabled"in n[_]&&!n[_].enabled&&C(_);else{const $=n[_];($===!0||$===!1)&&(_==="navigation"||_==="pagination"||_==="scrollbar")?$===!1&&C(_):u[_]=n[_]}}),s.includes("controller")&&!w&&e.controller&&e.controller.control&&u.controller&&u.controller.control&&(e.controller.control=u.controller.control),r.includes("children")&&t&&p&&u.virtual.enabled?(p.slides=t,p.update(!0)):r.includes("virtual")&&p&&u.virtual.enabled&&(t&&(p.slides=t),p.update(!0)),r.includes("children")&&t&&u.loop&&(k=!0),v&&m.init()&&m.update(!0),w&&(e.controller.control=u.controller.control),h&&(e.isElement&&(!l||typeof l=="string")&&(l=document.createElement("div"),l.classList.add("swiper-pagination"),l.part.add("pagination"),e.el.appendChild(l)),l&&(u.pagination.el=l),d.init(),d.render(),d.update()),g&&(e.isElement&&(!a||typeof a=="string")&&(a=document.createElement("div"),a.classList.add("swiper-scrollbar"),a.part.add("scrollbar"),e.el.appendChild(a)),a&&(u.scrollbar.el=a),y.init(),y.updateSize(),y.setTranslate()),x&&(e.isElement&&((!i||typeof i=="string")&&(i=document.createElement("div"),i.classList.add("swiper-button-next"),Da(i,e.navigation.arrowSvg),i.part.add("button-next"),e.el.appendChild(i)),(!o||typeof o=="string")&&(o=document.createElement("div"),o.classList.add("swiper-button-prev"),Da(o,e.navigation.arrowSvg),o.part.add("button-prev"),e.el.appendChild(o))),i&&(u.navigation.nextEl=i),o&&(u.navigation.prevEl=o),c.init(),c.update()),r.includes("allowSlideNext")&&(e.allowSlideNext=n.allowSlideNext),r.includes("allowSlidePrev")&&(e.allowSlidePrev=n.allowSlidePrev),r.includes("direction")&&e.changeDirection(n.direction,!1),(S||k)&&e.loopDestroy(),(T||k)&&e.loopCreate(),e.update()}function uI(e={},t=!0){const n={on:{}},r={},i={};Ni(n,Sp),n._emitClasses=!0,n.init=!1;const o={},a=zS.map(s=>s.replace(/_/,"")),l=Object.assign({},e);return Object.keys(l).forEach(s=>{typeof e[s]>"u"||(a.indexOf(s)>=0?ti(e[s])?(n[s]={},i[s]={},Ni(n[s],e[s]),Ni(i[s],e[s])):(n[s]=e[s],i[s]=e[s]):s.search(/on[A-Z]/)===0&&typeof e[s]=="function"?t?r[`${s[2].toLowerCase()}${s.substr(3)}`]=e[s]:n.on[`${s[2].toLowerCase()}${s.substr(3)}`]=e[s]:o[s]=e[s])}),["navigation","pagination","scrollbar"].forEach(s=>{n[s]===!0&&(n[s]={}),n[s]===!1&&delete n[s]}),{params:n,passedParams:i,rest:o,events:r}}function cI({el:e,nextEl:t,prevEl:n,paginationEl:r,scrollbarEl:i,swiper:o},a){NS(a)&&t&&n&&(o.params.navigation.nextEl=t,o.originalParams.navigation.nextEl=t,o.params.navigation.prevEl=n,o.originalParams.navigation.prevEl=n),BS(a)&&r&&(o.params.pagination.el=r,o.originalParams.pagination.el=r),VS(a)&&i&&(o.params.scrollbar.el=i,o.originalParams.scrollbar.el=i),o.init(e)}function dI(e,t,n,r,i){const o=[];if(!t)return o;const a=s=>{o.indexOf(s)<0&&o.push(s)};if(n&&r){const s=r.map(i),u=n.map(i);s.join("")!==u.join("")&&a("children"),r.length!==n.length&&a("children")}return zS.filter(s=>s[0]==="_").map(s=>s.replace(/_/,"")).forEach(s=>{if(s in e&&s in t)if(ti(e[s])&&ti(t[s])){const u=Object.keys(e[s]),d=Object.keys(t[s]);u.length!==d.length?a(s):(u.forEach(c=>{e[s][c]!==t[s][c]&&a(s)}),d.forEach(c=>{e[s][c]!==t[s][c]&&a(s)}))}else e[s]!==t[s]&&a(s)}),o}const fI=e=>{!e||e.destroyed||!e.params.virtual||e.params.virtual&&!e.params.virtual.enabled||(e.updateSlides(),e.updateProgress(),e.updateSlidesClasses(),e.emit("_virtualUpdated"),e.parallax&&e.params.parallax&&e.params.parallax.enabled&&e.parallax.setTranslate())};function Xl(){return Xl=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Xl.apply(this,arguments)}function HS(e){return e.type&&e.type.displayName&&e.type.displayName.includes("SwiperSlide")}function WS(e){const t=[];return Y.Children.toArray(e).forEach(n=>{HS(n)?t.push(n):n.props&&n.props.children&&WS(n.props.children).forEach(r=>t.push(r))}),t}function pI(e){const t=[],n={"container-start":[],"container-end":[],"wrapper-start":[],"wrapper-end":[]};return Y.Children.toArray(e).forEach(r=>{if(HS(r))t.push(r);else if(r.props&&r.props.slot&&n[r.props.slot])n[r.props.slot].push(r);else if(r.props&&r.props.children){const i=WS(r.props.children);i.length>0?i.forEach(o=>t.push(o)):n["container-end"].push(r)}else n["container-end"].push(r)}),{slides:t,slots:n}}function hI(e,t,n){if(!n)return null;const r=d=>{let c=d;return d<0?c=t.length+d:c>=t.length&&(c=c-t.length),c},i=e.isHorizontal()?{[e.rtlTranslate?"right":"left"]:`${n.offset}px`}:{top:`${n.offset}px`},{from:o,to:a}=n,l=e.params.loop?-t.length:0,s=e.params.loop?t.length*2:t.length,u=[];for(let d=l;d<s;d+=1)d>=o&&d<=a&&u.push(t[r(d)]);return u.map((d,c)=>Y.cloneElement(d,{swiper:e,style:i,key:d.props.virtualIndex||d.key||`slide-${c}`}))}function oa(e,t){return typeof window>"u"?b.useEffect(e,t):b.useLayoutEffect(e,t)}const Cv=b.createContext(null),mI=b.createContext(null),GS=b.forwardRef(({className:e,tag:t="div",wrapperTag:n="div",children:r,onSwiper:i,...o}={},a)=>{let l=!1;const[s,u]=b.useState("swiper"),[d,c]=b.useState(null),[y,p]=b.useState(!1),m=b.useRef(!1),v=b.useRef(null),w=b.useRef(null),h=b.useRef(null),g=b.useRef(null),x=b.useRef(null),S=b.useRef(null),T=b.useRef(null),k=b.useRef(null),{params:C,passedParams:_,rest:$,events:M}=uI(o),{slides:R,slots:L}=pI(r),j=()=>{p(!y)};Object.assign(C.on,{_containerClasses(P,I){u(I)}});const F=()=>{Object.assign(C.on,M),l=!0;const P={...C};if(delete P.wrapperClass,w.current=new gm(P),w.current.virtual&&w.current.params.virtual.enabled){w.current.virtual.slides=R;const I={cache:!1,slides:R,renderExternal:c,renderExternalUpdate:!1};Ni(w.current.params.virtual,I),Ni(w.current.originalParams.virtual,I)}};v.current||F(),w.current&&w.current.on("_beforeBreakpoint",j);const A=()=>{l||!M||!w.current||Object.keys(M).forEach(P=>{w.current.on(P,M[P])})},O=()=>{!M||!w.current||Object.keys(M).forEach(P=>{w.current.off(P,M[P])})};b.useEffect(()=>()=>{w.current&&w.current.off("_beforeBreakpoint",j)}),b.useEffect(()=>{!m.current&&w.current&&(w.current.emitSlidesClasses(),m.current=!0)}),oa(()=>{if(a&&(a.current=v.current),!!v.current)return w.current.destroyed&&F(),cI({el:v.current,nextEl:x.current,prevEl:S.current,paginationEl:T.current,scrollbarEl:k.current,swiper:w.current},C),i&&!w.current.destroyed&&i(w.current),()=>{w.current&&!w.current.destroyed&&w.current.destroy(!0,!1)}},[]),oa(()=>{A();const P=dI(_,h.current,R,g.current,I=>I.key);return h.current=_,g.current=R,P.length&&w.current&&!w.current.destroyed&&lI({swiper:w.current,slides:R,passedParams:_,changedParams:P,nextEl:x.current,prevEl:S.current,scrollbarEl:k.current,paginationEl:T.current}),()=>{O()}}),oa(()=>{fI(w.current)},[d]);function D(){return C.virtual?hI(w.current,R,d):R.map((P,I)=>Y.cloneElement(P,{swiper:w.current,swiperSlideIndex:I}))}return Y.createElement(t,Xl({ref:v,className:US(`${s}${e?` ${e}`:""}`)},$),Y.createElement(mI.Provider,{value:w.current},L["container-start"],Y.createElement(n,{className:sI(C.wrapperClass)},L["wrapper-start"],D(),L["wrapper-end"]),NS(C)&&Y.createElement(Y.Fragment,null,Y.createElement("div",{ref:S,className:"swiper-button-prev"}),Y.createElement("div",{ref:x,className:"swiper-button-next"})),VS(C)&&Y.createElement("div",{ref:k,className:"swiper-scrollbar"}),BS(C)&&Y.createElement("div",{ref:T,className:"swiper-pagination"}),L["container-end"]))});GS.displayName="Swiper";const qS=b.forwardRef(({tag:e="div",children:t,className:n="",swiper:r,zoom:i,lazy:o,virtualIndex:a,swiperSlideIndex:l,...s}={},u)=>{const d=b.useRef(null),[c,y]=b.useState("swiper-slide"),[p,m]=b.useState(!1);function v(x,S,T){S===d.current&&y(T)}oa(()=>{if(typeof l<"u"&&(d.current.swiperSlideIndex=l),u&&(u.current=d.current),!(!d.current||!r)){if(r.destroyed){c!=="swiper-slide"&&y("swiper-slide");return}return r.on("_slideClass",v),()=>{r&&r.off("_slideClass",v)}}}),oa(()=>{r&&d.current&&!r.destroyed&&y(r.getSlideClasses(d.current))},[r]);const w={isActive:c.indexOf("swiper-slide-active")>=0,isVisible:c.indexOf("swiper-slide-visible")>=0,isPrev:c.indexOf("swiper-slide-prev")>=0,isNext:c.indexOf("swiper-slide-next")>=0},h=()=>typeof t=="function"?t(w):t,g=()=>{m(!0)};return Y.createElement(e,Xl({ref:d,className:US(`${c}${n?` ${n}`:""}`),"data-swiper-slide-index":a,onLoad:g},s),i&&Y.createElement(Cv.Provider,{value:w},Y.createElement("div",{className:"swiper-zoom-container","data-swiper-zoom":typeof i=="number"?i:void 0},h(),o&&!p&&Y.createElement("div",{className:"swiper-lazy-preloader",ref:x=>{x&&(x.lazyPreloaderManaged=!0)}}))),!i&&Y.createElement(Cv.Provider,{value:w},h(),o&&!p&&Y.createElement("div",{className:"swiper-lazy-preloader",ref:x=>{x&&(x.lazyPreloaderManaged=!0)}})))});qS.displayName="SwiperSlide";const gI=E.section`
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
`,vI=E.div`
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
`,yI=E.div`
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
`,xI=E(Oe)`
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
`,bI=[{id:1,title:"Дідів хлів - найкращий вибір для Вашого велосипеда",desc:"Якісні запчастини, професійний серевіс та індивідуальний підхід. Створюйте ідеальний байк разом з нами",img:"/Didiv/bike2-hero.jpeg",btn:"До каталогу",url:"/catalog"},{id:2,title:"Постійне оновлення товару",desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam reprehenderit obcaecati molestias est alias vitae laboriosam nulla perferendis officia incidunt aliquid voluptatem iste libero, officiis ex modi enim repellat. Consectetur!",img:"/Didiv/inside.webp",btn:"До новинок",url:"/catalog/new"}],wI=()=>f.jsx(gI,{children:f.jsx(GS,{modules:[X5,Q5,K5],spaceBetween:0,slidesPerView:1,navigation:!0,pagination:{clickable:!0},autoplay:{delay:5e3},loop:!0,children:bI.map(e=>f.jsx(qS,{children:f.jsx(vI,{bg:e.img,children:f.jsxs(yI,{children:[f.jsx("h1",{children:e.title}),f.jsx("p",{children:e.desc}),f.jsx(xI,{to:e.url,children:e.btn})]})})},e.id))})}),SI=E.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  margin-bottom:30px;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`,Ed=E.div`
  background-color: #ffffffde;
  padding: 20px;
  border: 1px solid #e3e2e2;
  border-radius: 8px;
`,kd=E.div`
  font-size: 24px;
  font-weight: bold;
  color: var(--orange-color);
`,Td=E.div`
  font-size: 14px;
  color: #888;
`,YS=()=>f.jsxs(SI,{children:[f.jsxs(Ed,{children:[f.jsx(kd,{children:"3000+"}),f.jsx(Td,{children:"Перевірених деталей"})]}),f.jsxs(Ed,{children:[f.jsx(kd,{children:"6 років"}),f.jsx(Td,{children:"Досвіду на ринку"})]}),f.jsxs(Ed,{children:[f.jsx(kd,{children:"100%"}),f.jsx(Td,{children:"Контроль якості"})]})]}),_I=Ae.div`
  background:var(--background-color);
`,CI=Ae.div`
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
`;const EI=()=>f.jsx(_I,{children:f.jsxs(CI,{children:[f.jsx(wI,{}),f.jsx(fw,{}),f.jsx(F5,{}),f.jsx(YS,{})]})}),kI=E.div`
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
`,TI=E.section`
  background-color:  var(--second-background);
`,PI=E.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  justify-content: flex-start;
  margin-bottom: 16px;

  @media (min-width: 768px) {
    display: none;
  }
`,OI=E.button`
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
`,jI=E.svg`
  width: 20px;
  height: 20px;
  fill: var(--white-color);
`,MI=E.button`
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
`;const $I=E.div`
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
`,II=E.div`
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
`;const DI=E.div`
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
`;const LI=E.div`
  padding: 20px;
  border-top: 1px solid #eee;
  background: white;
`,AI=E.button`
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
`,XS=E.button`
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
`,RI=E.div`
  position: relative;
  display: inline-block;

`,FI=E.div`
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
`,pi=E.div`
  padding: 10px 12px;
  cursor: pointer;

  &:hover {
    background: #f0f0f0;
  }
`,zI=E.aside`

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
`,NI=E.h3`
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
`;const BI=E.div`
  border-bottom: 1px solid #eee;
  padding: 12px;
  margin-bottom: 12px;

  &:last-child {
    border-bottom: none;
  }
`,VI=E.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  padding: 8px 0;
  
  &:hover p {
    color: #85683d;
  }
`,UI=E.p`
  font-weight: 600;
  font-size: 16px;
  margin: 0;
  color: #222;
  transition: color 0.2s;
`,HI=E.span`
  border: solid #555;
  border-width: 0 2px 2px 0;
  display: inline-block;
  padding: 3px;
  transform: ${e=>e.isOpen?"rotate(-135deg)":"rotate(45deg)"};
  transition: transform 0.3s ease;
`,WI=E.div`
  max-height: ${e=>e.isOpen?"500px":"0"};
  overflow: hidden;
  transition: max-height 0.3s ease-in-out, opacity 0.3s;
  opacity: ${e=>e.isOpen?"1":"0"};
  padding: ${e=>e.isOpen?"12px":"0"};
`,GI=E.label`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  cursor: pointer;
  font-size: 15px;
  color: #444;

  &:hover span:first-of-type {
    border-color: #85683d;
  }
`,_p=E.input.attrs({type:"checkbox"})`
  display: none;
`,qI=E.span`
  width: 20px;
  height: 20px;
  border: 2px solid #ddd;
  border-radius: 4px;
  margin-right: 12px;
  position: relative;
  flex-shrink: 0;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);

  ${_p}:checked + & {
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

  ${_p}:checked + &::after {
    opacity: 1;
  }
`;var Cp={},vm={},ym={},vo={};Object.defineProperty(vo,"__esModule",{value:!0});vo.Direction=void 0;var Ev;(function(e){e.Right="to right",e.Left="to left",e.Down="to bottom",e.Up="to top"})(Ev||(vo.Direction=Ev={}));(function(e){var t=te&&te.__spreadArray||function(L,j,F){if(F||arguments.length===2)for(var A=0,O=j.length,D;A<O;A++)(D||!(A in j))&&(D||(D=Array.prototype.slice.call(j,0,A)),D[A]=j[A]);return L.concat(D||Array.prototype.slice.call(j))};Object.defineProperty(e,"__esModule",{value:!0}),e.isIOS=e.useThumbOverlap=e.assertUnreachable=e.voidFn=e.getTrackBackground=e.replaceAt=e.schd=e.translate=e.getClosestThumbIndex=e.translateThumbs=e.getPaddingAndBorder=e.getMargin=e.checkInitialOverlap=e.checkValuesAgainstBoundaries=e.checkBoundaries=e.isVertical=e.relativeValue=e.normalizeValue=e.isStepDivisible=e.isTouchEvent=e.getStepDecimals=void 0;var n=b,r=vo,i=function(L){var j=L.toString().split(".")[1];return j?j.length:0};e.getStepDecimals=i;function o(L){return L.touches&&L.touches.length||L.changedTouches&&L.changedTouches.length}e.isTouchEvent=o;function a(L,j,F){var A=(j-L)/F,O=8,D=Number(A.toFixed(O));return parseInt(D.toString(),10)===D}e.isStepDivisible=a;function l(L,j,F,A,O,D,P){var I=1e11;if(L=Math.round(L*I)/I,!D){var z=P[j-1],B=P[j+1];if(z&&z>L)return z;if(B&&B<L)return B}if(L>A)return A;if(L<F)return F;var N=Math.floor(L*I-F*I)%Math.floor(O*I),U=Math.floor(L*I-Math.abs(N)),H=N===0?L:U/I,q=Math.abs(N/I)<O/2?H:H+O,X=(0,e.getStepDecimals)(O);return parseFloat(q.toFixed(X))}e.normalizeValue=l;function s(L,j,F){return(L-j)/(F-j)}e.relativeValue=s;function u(L){return L===r.Direction.Up||L===r.Direction.Down}e.isVertical=u;function d(L,j,F){if(j>=F)throw new RangeError("min (".concat(j,") is equal/bigger than max (").concat(F,")"));if(L<j)throw new RangeError("value (".concat(L,") is smaller than min (").concat(j,")"));if(L>F)throw new RangeError("value (".concat(L,") is bigger than max (").concat(F,")"))}e.checkBoundaries=d;function c(L,j,F){return L<j?j:L>F?F:L}e.checkValuesAgainstBoundaries=c;function y(L){if(!(L.length<2)&&!L.slice(1).every(function(j,F){return L[F]<=j}))throw new RangeError("values={[".concat(L,"]} needs to be sorted when allowOverlap={false}"))}e.checkInitialOverlap=y;function p(L){var j=window.getComputedStyle(L);return{top:parseInt(j["margin-top"],10),bottom:parseInt(j["margin-bottom"],10),left:parseInt(j["margin-left"],10),right:parseInt(j["margin-right"],10)}}e.getMargin=p;function m(L){var j=window.getComputedStyle(L);return{top:parseInt(j["padding-top"],10)+parseInt(j["border-top-width"],10),bottom:parseInt(j["padding-bottom"],10)+parseInt(j["border-bottom-width"],10),left:parseInt(j["padding-left"],10)+parseInt(j["border-left-width"],10),right:parseInt(j["padding-right"],10)+parseInt(j["border-right-width"],10)}}e.getPaddingAndBorder=m;function v(L,j,F){var A=F?-1:1;L.forEach(function(O,D){return h(O,A*j[D].x,j[D].y)})}e.translateThumbs=v;function w(L,j,F,A){for(var O=0,D=M(L[0],j,F,A),P=1;P<L.length;P++){var I=M(L[P],j,F,A);I<D&&(D=I,O=P)}return O}e.getClosestThumbIndex=w;function h(L,j,F){L.style.transform="translate(".concat(j,"px, ").concat(F,"px)")}e.translate=h;var g=function(L){var j=[],F=null,A=function(){for(var O=[],D=0;D<arguments.length;D++)O[D]=arguments[D];j=O,!F&&(F=requestAnimationFrame(function(){F=null,L.apply(void 0,j)}))};return A};e.schd=g;function x(L,j,F){var A=L.slice(0);return A[j]=F,A}e.replaceAt=x;function S(L){var j=L.values,F=L.colors,A=L.min,O=L.max,D=L.direction,P=D===void 0?r.Direction.Right:D,I=L.rtl,z=I===void 0?!1:I;z&&P===r.Direction.Right?P=r.Direction.Left:z&&r.Direction.Left&&(P=r.Direction.Right);var B=j.slice(0).sort(function(U,H){return U-H}).map(function(U){return(U-A)/(O-A)*100}),N=B.reduce(function(U,H,q){return"".concat(U,", ").concat(F[q]," ").concat(H,"%, ").concat(F[q+1]," ").concat(H,"%")},"");return"linear-gradient(".concat(P,", ").concat(F[0]," 0%").concat(N,", ").concat(F[F.length-1]," 100%)")}e.getTrackBackground=S;function T(){}e.voidFn=T;function k(L){throw new Error("Didn't expect to get here")}e.assertUnreachable=k;var C=function(L,j,F,A,O){O===void 0&&(O=function(P){return P});var D=Math.ceil(t([L],Array.from(L.children),!0).reduce(function(P,I){var z=Math.ceil(I.getBoundingClientRect().width);if(I.innerText&&I.innerText.includes(F)&&I.childElementCount===0){var B=I.cloneNode(!0);B.innerHTML=O(j.toFixed(A)),B.style.visibility="hidden",document.body.appendChild(B),z=Math.ceil(B.getBoundingClientRect().width),document.body.removeChild(B)}return z>P?z:P},L.getBoundingClientRect().width));return D},_=function(L,j,F,A,O,D,P){P===void 0&&(P=function(B){return B});var I=[],z=function(B){var N=C(F[B],A[B],O,D,P),U=j[B].x;j.forEach(function(H,q){var X=H.x,ee=C(F[q],A[q],O,D,P);B!==q&&(U>=X&&U<=X+ee||U+N>=X&&U+N<=X+ee)&&(I.includes(q)||(I.push(B),I.push(q),I=t(t([],I,!0),[B,q],!1),z(q)))})};return z(L),Array.from(new Set(I.sort()))},$=function(L,j,F,A,O,D){A===void 0&&(A=.1),O===void 0&&(O=" - "),D===void 0&&(D=function(q){return q});var P=(0,e.getStepDecimals)(A),I=(0,n.useState)({}),z=I[0],B=I[1],N=(0,n.useState)(D(j[F].toFixed(P))),U=N[0],H=N[1];return(0,n.useEffect)(function(){if(L){var q=L.getThumbs();if(q.length<1)return;var X={},ee=L.getOffsets(),fe=_(F,ee,q,j,O,P,D),be=D(j[F].toFixed(P));if(fe.length){var ie=fe.reduce(function(yt,bo,Qa,wo){return yt.length?t(t([],yt,!0),[ee[wo[Qa]].x],!1):[ee[wo[Qa]].x]},[]);if(Math.min.apply(Math,ie)===ee[F].x){var Me=[];fe.forEach(function(yt){Me.push(j[yt].toFixed(P))}),be=Array.from(new Set(Me.sort(function(yt,bo){return parseFloat(yt)-parseFloat(bo)}))).map(D).join(O);var Be=Math.min.apply(Math,ie),Ve=Math.max.apply(Math,ie),si=q[fe[ie.indexOf(Ve)]].getBoundingClientRect().width;X.left="".concat(Math.abs(Be-(Ve+si))/2,"px"),X.transform="translate(-50%, 0)"}else X.visibility="hidden"}H(be),B(X)}},[L,j]),[U,z]};e.useThumbOverlap=$;function M(L,j,F,A){var O=L.getBoundingClientRect(),D=O.left,P=O.top,I=O.width,z=O.height;return u(A)?Math.abs(F-(P+z/2)):Math.abs(j-(D+I/2))}var R=function(){var L,j=((L=navigator.userAgentData)===null||L===void 0?void 0:L.platform)||navigator.platform;return["iPad Simulator","iPhone Simulator","iPod Simulator","iPad","iPhone","iPod"].includes(j)||navigator.userAgent.includes("Mac")&&"ontouchend"in document};e.isIOS=R})(ym);var YI=te&&te.__extends||function(){var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,i){r.__proto__=i}||function(r,i){for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(r[o]=i[o])},e(t,n)};return function(t,n){if(typeof n!="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");e(t,n);function r(){this.constructor=t}t.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}}(),XI=te&&te.__createBinding||(Object.create?function(e,t,n,r){r===void 0&&(r=n);var i=Object.getOwnPropertyDescriptor(t,n);(!i||("get"in i?!t.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,i)}:function(e,t,n,r){r===void 0&&(r=n),e[r]=t[n]}),KI=te&&te.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),QI=te&&te.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)n!=="default"&&Object.prototype.hasOwnProperty.call(e,n)&&XI(t,e,n);return KI(t,e),t},kv=te&&te.__spreadArray||function(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,o;r<i;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))};Object.defineProperty(vm,"__esModule",{value:!0});var Cs=QI(b),oe=ym,Re=vo,ZI=["ArrowRight","ArrowUp","k","PageUp"],JI=["ArrowLeft","ArrowDown","j","PageDown"],eD=function(e){YI(t,e);function t(n){var r=e.call(this,n)||this;if(r.trackRef=Cs.createRef(),r.thumbRefs=[],r.state={draggedTrackPos:[-1,-1],draggedThumbIndex:-1,thumbZIndexes:new Array(r.props.values.length).fill(0).map(function(i,o){return o}),isChanged:!1,markOffsets:[]},r.getOffsets=function(){var i=r.props,o=i.direction,a=i.values,l=i.min,s=i.max,u=r.trackRef.current;if(!u)return console.warn("No track element found."),[];var d=u.getBoundingClientRect(),c=(0,oe.getPaddingAndBorder)(u);return r.getThumbs().map(function(y,p){var m={x:0,y:0},v=y.getBoundingClientRect(),w=(0,oe.getMargin)(y);switch(o){case Re.Direction.Right:return m.x=(w.left+c.left)*-1,m.y=((v.height-d.height)/2+c.top)*-1,m.x+=d.width*(0,oe.relativeValue)(a[p],l,s)-v.width/2,m;case Re.Direction.Left:return m.x=(w.right+c.right)*-1,m.y=((v.height-d.height)/2+c.top)*-1,m.x+=d.width-d.width*(0,oe.relativeValue)(a[p],l,s)-v.width/2,m;case Re.Direction.Up:return m.x=((v.width-d.width)/2+w.left+c.left)*-1,m.y=-c.left,m.y+=d.height-d.height*(0,oe.relativeValue)(a[p],l,s)-v.height/2,m;case Re.Direction.Down:return m.x=((v.width-d.width)/2+w.left+c.left)*-1,m.y=-c.left,m.y+=d.height*(0,oe.relativeValue)(a[p],l,s)-v.height/2,m;default:return(0,oe.assertUnreachable)(o)}})},r.getThumbs=function(){return r.trackRef&&r.trackRef.current?Array.from(r.trackRef.current.children).filter(function(i){return i.hasAttribute("aria-valuenow")}):(console.warn("No thumbs found in the track container. Did you forget to pass & spread the `props` param in renderTrack?"),[])},r.getTargetIndex=function(i){return r.getThumbs().findIndex(function(o){return o===i.target||o.contains(i.target)})},r.addTouchEvents=function(i){document.addEventListener("touchmove",r.schdOnTouchMove,{passive:!1}),document.addEventListener("touchend",r.schdOnEnd,{passive:!1}),document.addEventListener("touchcancel",r.schdOnEnd,{passive:!1})},r.addMouseEvents=function(i){document.addEventListener("mousemove",r.schdOnMouseMove),document.addEventListener("mouseup",r.schdOnEnd)},r.onMouseDownTrack=function(i){var o;if(!(i.button!==0||(0,oe.isIOS)()))if(i.persist(),i.preventDefault(),r.addMouseEvents(i.nativeEvent),r.props.values.length>1&&r.props.draggableTrack){if(r.thumbRefs.some(function(l){var s;return(s=l.current)===null||s===void 0?void 0:s.contains(i.target)}))return;r.setState({draggedTrackPos:[i.clientX,i.clientY]},function(){return r.onMove(i.clientX,i.clientY)})}else{var a=(0,oe.getClosestThumbIndex)(r.thumbRefs.map(function(l){return l.current}),i.clientX,i.clientY,r.props.direction);(o=r.thumbRefs[a].current)===null||o===void 0||o.focus(),r.setState({draggedThumbIndex:a},function(){return r.onMove(i.clientX,i.clientY)})}},r.onResize=function(){(0,oe.translateThumbs)(r.getThumbs(),r.getOffsets(),r.props.rtl),r.calculateMarkOffsets()},r.onTouchStartTrack=function(i){var o;if(i.persist(),r.addTouchEvents(i.nativeEvent),r.props.values.length>1&&r.props.draggableTrack){if(r.thumbRefs.some(function(l){var s;return(s=l.current)===null||s===void 0?void 0:s.contains(i.target)}))return;r.setState({draggedTrackPos:[i.touches[0].clientX,i.touches[0].clientY]},function(){return r.onMove(i.touches[0].clientX,i.touches[0].clientY)})}else{var a=(0,oe.getClosestThumbIndex)(r.thumbRefs.map(function(l){return l.current}),i.touches[0].clientX,i.touches[0].clientY,r.props.direction);(o=r.thumbRefs[a].current)===null||o===void 0||o.focus(),r.setState({draggedThumbIndex:a},function(){return r.onMove(i.touches[0].clientX,i.touches[0].clientY)})}},r.onMouseOrTouchStart=function(i){if(!r.props.disabled){var o=(0,oe.isTouchEvent)(i);if(!(!o&&i.button!==0)){var a=r.getTargetIndex(i);a!==-1&&(o?r.addTouchEvents(i):r.addMouseEvents(i),r.setState({draggedThumbIndex:a,thumbZIndexes:r.state.thumbZIndexes.map(function(l,s){return s===a?Math.max.apply(Math,r.state.thumbZIndexes):l<=r.state.thumbZIndexes[a]?l:l-1})}))}}},r.onMouseMove=function(i){i.preventDefault(),r.onMove(i.clientX,i.clientY)},r.onTouchMove=function(i){i.preventDefault(),r.onMove(i.touches[0].clientX,i.touches[0].clientY)},r.onKeyDown=function(i){var o=r.props,a=o.values,l=o.onChange,s=o.step,u=o.rtl,d=o.direction,c=r.state.isChanged,y=r.getTargetIndex(i.nativeEvent),p=u||d===Re.Direction.Left||d===Re.Direction.Down?-1:1;y!==-1&&(ZI.includes(i.key)?(i.preventDefault(),r.setState({draggedThumbIndex:y,isChanged:!0}),l((0,oe.replaceAt)(a,y,r.normalizeValue(a[y]+p*(i.key==="PageUp"?s*10:s),y)))):JI.includes(i.key)?(i.preventDefault(),r.setState({draggedThumbIndex:y,isChanged:!0}),l((0,oe.replaceAt)(a,y,r.normalizeValue(a[y]-p*(i.key==="PageDown"?s*10:s),y)))):i.key==="Tab"?r.setState({draggedThumbIndex:-1},function(){c&&r.fireOnFinalChange()}):c&&r.fireOnFinalChange())},r.onKeyUp=function(i){var o=r.state.isChanged;r.setState({draggedThumbIndex:-1},function(){o&&r.fireOnFinalChange()})},r.onMove=function(i,o){var a=r.state,l=a.draggedThumbIndex,s=a.draggedTrackPos,u=r.props,d=u.direction,c=u.min,y=u.max,p=u.onChange,m=u.values,v=u.step,w=u.rtl;if(l===-1&&s[0]===-1&&s[1]===-1)return null;var h=r.trackRef.current;if(!h)return null;var g=h.getBoundingClientRect(),x=(0,oe.isVertical)(d)?g.height:g.width;if(s[0]!==-1&&s[1]!==-1){var S=i-s[0],T=o-s[1],k=0;switch(d){case Re.Direction.Right:case Re.Direction.Left:k=S/x*(y-c);break;case Re.Direction.Down:case Re.Direction.Up:k=T/x*(y-c);break;default:(0,oe.assertUnreachable)(d)}if(w&&(k*=-1),Math.abs(k)>=v/2){for(var C=0;C<r.thumbRefs.length;C++){if(m[C]===y&&Math.sign(k)===1||m[C]===c&&Math.sign(k)===-1)return;var _=m[C]+k;_>y?k=y-m[C]:_<c&&(k=c-m[C])}for(var $=m.slice(0),C=0;C<r.thumbRefs.length;C++)$=(0,oe.replaceAt)($,C,r.normalizeValue(m[C]+k,C));r.setState({draggedTrackPos:[i,o]}),p($)}}else{var M=0;switch(d){case Re.Direction.Right:M=(i-g.left)/x*(y-c)+c;break;case Re.Direction.Left:M=(x-(i-g.left))/x*(y-c)+c;break;case Re.Direction.Down:M=(o-g.top)/x*(y-c)+c;break;case Re.Direction.Up:M=(x-(o-g.top))/x*(y-c)+c;break;default:(0,oe.assertUnreachable)(d)}w&&(M=y+c-M),Math.abs(m[l]-M)>=v/2&&p((0,oe.replaceAt)(m,l,r.normalizeValue(M,l)))}},r.normalizeValue=function(i,o){var a=r.props,l=a.min,s=a.max,u=a.step,d=a.allowOverlap,c=a.values;return(0,oe.normalizeValue)(i,o,l,s,u,d,c)},r.onEnd=function(i){if(i.preventDefault(),document.removeEventListener("mousemove",r.schdOnMouseMove),document.removeEventListener("touchmove",r.schdOnTouchMove),document.removeEventListener("mouseup",r.schdOnEnd),document.removeEventListener("touchend",r.schdOnEnd),document.removeEventListener("touchcancel",r.schdOnEnd),r.state.draggedThumbIndex===-1&&r.state.draggedTrackPos[0]===-1&&r.state.draggedTrackPos[1]===-1)return null;r.setState({draggedThumbIndex:-1,draggedTrackPos:[-1,-1]},function(){r.fireOnFinalChange()})},r.fireOnFinalChange=function(){r.setState({isChanged:!1});var i=r.props,o=i.onFinalChange,a=i.values;o&&o(a)},r.updateMarkRefs=function(i){if(!i.renderMark){r.numOfMarks=void 0,r.markRefs=void 0;return}r.numOfMarks=(i.max-i.min)/r.props.step,r.markRefs=[];for(var o=0;o<r.numOfMarks+1;o++)r.markRefs[o]=Cs.createRef()},r.calculateMarkOffsets=function(){if(!(!r.props.renderMark||!r.trackRef||!r.numOfMarks||!r.markRefs||r.trackRef.current===null)){for(var i=window.getComputedStyle(r.trackRef.current),o=parseInt(i.width,10),a=parseInt(i.height,10),l=parseInt(i.paddingLeft,10),s=parseInt(i.paddingTop,10),u=[],d=0;d<r.numOfMarks+1;d++){var c=9999,y=9999;if(r.markRefs[d].current){var p=r.markRefs[d].current.getBoundingClientRect();c=p.height,y=p.width}r.props.direction===Re.Direction.Left||r.props.direction===Re.Direction.Right?u.push([Math.round(o/r.numOfMarks*d+l-y/2),-Math.round((c-a)/2)]):u.push([Math.round(a/r.numOfMarks*d+s-c/2),-Math.round((y-o)/2)])}r.setState({markOffsets:u})}},n.step===0)throw new Error('"step" property should be a positive number');return r.schdOnMouseMove=(0,oe.schd)(r.onMouseMove),r.schdOnTouchMove=(0,oe.schd)(r.onTouchMove),r.schdOnEnd=(0,oe.schd)(r.onEnd),r.thumbRefs=n.values.map(function(){return Cs.createRef()}),r.updateMarkRefs(n),r}return t.prototype.componentDidMount=function(){var n=this,r=this.props,i=r.values,o=r.min,a=r.step;this.resizeObserver=window.ResizeObserver?new window.ResizeObserver(this.onResize):{observe:function(){return window.addEventListener("resize",n.onResize)},unobserve:function(){return window.removeEventListener("resize",n.onResize)}},document.addEventListener("touchstart",this.onMouseOrTouchStart,{passive:!1}),document.addEventListener("mousedown",this.onMouseOrTouchStart,{passive:!1}),!this.props.allowOverlap&&(0,oe.checkInitialOverlap)(this.props.values),this.props.values.forEach(function(l){return(0,oe.checkBoundaries)(l,n.props.min,n.props.max)}),this.resizeObserver.observe(this.trackRef.current),(0,oe.translateThumbs)(this.getThumbs(),this.getOffsets(),this.props.rtl),this.calculateMarkOffsets(),i.forEach(function(l){(0,oe.isStepDivisible)(o,l,a)||console.warn("The `values` property is in conflict with the current `step`, `min`, and `max` properties. Please provide values that are accessible using the min, max, and step values.")})},t.prototype.componentDidUpdate=function(n,r){var i=this.props,o=i.max,a=i.min,l=i.step,s=i.values,u=i.rtl;(n.max!==o||n.min!==a||n.step!==l)&&this.updateMarkRefs(this.props),(0,oe.translateThumbs)(this.getThumbs(),this.getOffsets(),u),(n.max!==o||n.min!==a||n.step!==l||r.markOffsets.length!==this.state.markOffsets.length)&&(this.calculateMarkOffsets(),s.forEach(function(d){(0,oe.isStepDivisible)(a,d,l)||console.warn("The `values` property is in conflict with the current `step`, `min`, and `max` properties. Please provide values that are accessible using the min, max, and step values.")}))},t.prototype.componentWillUnmount=function(){var n={passive:!1};document.removeEventListener("mousedown",this.onMouseOrTouchStart,n),document.removeEventListener("mousemove",this.schdOnMouseMove),document.removeEventListener("touchmove",this.schdOnTouchMove),document.removeEventListener("touchstart",this.onMouseOrTouchStart),document.removeEventListener("mouseup",this.schdOnEnd),document.removeEventListener("touchend",this.schdOnEnd),this.resizeObserver.unobserve(this.trackRef.current)},t.prototype.render=function(){var n=this,r=this.props,i=r.label,o=r.labelledBy,a=r.renderTrack,l=r.renderThumb,s=r.renderMark,u=s===void 0?function(){return null}:s,d=r.values,c=r.min,y=r.max,p=r.allowOverlap,m=r.disabled,v=this.state,w=v.draggedThumbIndex,h=v.thumbZIndexes,g=v.markOffsets;return a({props:{style:{transform:"scale(1)",cursor:w>-1?"grabbing":this.props.draggableTrack?(0,oe.isVertical)(this.props.direction)?"ns-resize":"ew-resize":d.length===1&&!m?"pointer":"inherit"},onMouseDown:m?oe.voidFn:this.onMouseDownTrack,onTouchStart:m?oe.voidFn:this.onTouchStartTrack,ref:this.trackRef},isDragged:this.state.draggedThumbIndex>-1,disabled:m,children:kv(kv([],g.map(function(x,S,T){return u({props:{style:n.props.direction===Re.Direction.Left||n.props.direction===Re.Direction.Right?{position:"absolute",left:"".concat(x[0],"px"),marginTop:"".concat(x[1],"px")}:{position:"absolute",top:"".concat(x[0],"px"),marginLeft:"".concat(x[1],"px")},key:"mark".concat(S),ref:n.markRefs[S]},index:S})}),!0),d.map(function(x,S){var T=n.state.draggedThumbIndex===S;return l({index:S,value:x,isDragged:T,props:{style:{position:"absolute",zIndex:h[S],cursor:m?"inherit":T?"grabbing":"grab",userSelect:"none",touchAction:"none",WebkitUserSelect:"none",MozUserSelect:"none",msUserSelect:"none"},key:S,tabIndex:m?void 0:0,"aria-valuemax":p?y:d[S+1]||y,"aria-valuemin":p?c:d[S-1]||c,"aria-valuenow":x,draggable:!1,ref:n.thumbRefs[S],"aria-label":i,"aria-labelledby":o,role:"slider",onKeyDown:m?oe.voidFn:n.onKeyDown,onKeyUp:m?oe.voidFn:n.onKeyUp}})}),!0)})},t.defaultProps={label:"Accessibility label",labelledBy:null,step:1,direction:Re.Direction.Right,rtl:!1,disabled:!1,allowOverlap:!1,draggableTrack:!1,min:0,max:100},t}(Cs.Component);vm.default=eD;(function(e){var t=te&&te.__importDefault||function(o){return o&&o.__esModule?o:{default:o}};Object.defineProperty(e,"__esModule",{value:!0}),e.checkValuesAgainstBoundaries=e.relativeValue=e.useThumbOverlap=e.Direction=e.getTrackBackground=e.Range=void 0;var n=t(vm);e.Range=n.default;var r=ym;Object.defineProperty(e,"getTrackBackground",{enumerable:!0,get:function(){return r.getTrackBackground}}),Object.defineProperty(e,"useThumbOverlap",{enumerable:!0,get:function(){return r.useThumbOverlap}}),Object.defineProperty(e,"relativeValue",{enumerable:!0,get:function(){return r.relativeValue}}),Object.defineProperty(e,"checkValuesAgainstBoundaries",{enumerable:!0,get:function(){return r.checkValuesAgainstBoundaries}});var i=vo;Object.defineProperty(e,"Direction",{enumerable:!0,get:function(){return i.Direction}})})(Cp);const tD=E.div`
  padding: 20px 0;
`,nD=E.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`,Tv=E.input`
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
`;const rD=E.div`
  height: 6px;
  width: 100%;
  border-radius: 4px;
  background: ${({background:e})=>e};
`,iD=E.div`
  height: 18px;
  width: 18px;
  border-radius: 50%;
  background: #583d2d;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`,KS=({childValues:e,onChange:t})=>{const o=(e==null?void 0:e[0])??10,a=(e==null?void 0:e[1])??1e4,l=o!==a,[s,u]=b.useState([o,a]);b.useEffect(()=>{e&&e.length===2&&(u(e),t&&t(e))},[e,t]);const d=p=>{u(p),t&&t(p)},c=(p,m)=>{const v=m===""?"":Number(m),w=[...s];w[p]=v,d(w)},y=p=>{const m=[...s];p===0?((m[0]===""||m[0]<o)&&(m[0]=o),m[0]>m[1]-50&&(m[0]=m[1]-50)):((m[1]===""||m[1]>a)&&(m[1]=a),m[1]<m[0]+50&&(m[1]=m[0]+50)),d(m)};return f.jsx(f.Fragment,{children:l&&f.jsxs(tD,{children:[f.jsxs(nD,{children:[f.jsx(Tv,{type:"number",value:s[0],min:o,max:s[1],onChange:p=>c(0,p.target.value),onBlur:()=>y(0)}),f.jsx(Tv,{type:"number",value:s[1],min:s[0],max:a,onChange:p=>c(1,p.target.value),onBlur:()=>y(1)})]}),f.jsx(Cp.Range,{values:s,step:50,min:o,max:a,onChange:d,renderTrack:({props:p,children:m})=>f.jsx(rD,{...p,background:Cp.getTrackBackground({values:s,colors:["#ddd","#85683d","#ddd"],min:o,max:a}),children:m}),renderThumb:({props:p})=>f.jsx(iD,{...p})})]})})},oD=({childValues:e,category:t,selectedFilters:n,setSelectedFilters:r,setPriceRange:i})=>{const[o,a]=b.useState([]),[l,s]=b.useState({});b.useEffect(()=>{t&&(async()=>{try{const m=await fetch(`https://backenddidiv-production.up.railway.app/api/products?populate=*&filters[category][title][$eq]=${encodeURIComponent(t)}&pagination[pageSize]=200`);console.log(t);const v=await m.json();console.log("dataaaa",v.data);const w=v.data||[],h={};w.forEach(x=>{var S;(S=x.attributes)==null||S.forEach(T=>{h[T.label]||(h[T.label]=new Set),h[T.label].add(T.value)})});const g=Object.entries(h).map(([x,S])=>({type:"checkbox",label:x,name:x.toLowerCase(),options:Array.from(S)}));console.log("fillltr",g),a(g)}catch(m){console.error(m)}})()},[t]);const u=p=>{s(m=>({...m,[p]:!m[p]}))},d=(p,m)=>{r(v=>{const w=v[p]||[];return w.includes(m)?{...v,[p]:w.filter(h=>h!==m)}:{...v,[p]:[...w,m]}})},c=Object.values(n).some(p=>Array.isArray(p)&&p.length>0),y=()=>{c&&r({})};return console.log(c),f.jsxs(zI,{children:[f.jsxs(NI,{children:["Фільтри ",f.jsx(Bb,{size:20})]}),(o||[]).map(p=>{var v;const m=!!l[p.name];return f.jsxs(BI,{children:[f.jsxs(VI,{onClick:()=>u(p.name),children:[f.jsx(UI,{children:p.label}),f.jsx(HI,{isOpen:m})]}),f.jsxs(WI,{isOpen:m,children:[p.type==="checkbox"&&((v=p.options)==null?void 0:v.map(w=>{var h;return f.jsxs(GI,{children:[f.jsx(_p,{checked:((h=n[p.name])==null?void 0:h.includes(w))||!1,onChange:()=>d(p.name,w)}),f.jsx(qI,{}),w]},w)})),p.type==="range"&&f.jsx(KS,{onChange:i,childValues:e})]})]},p.name)}),f.jsx(XS,{onClick:y,disabled:!c,children:"Скинути обрані фільтри"})]})},aD=E.aside`
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
`;const sD=E.div`
  border-bottom: 1px solid #eee;
  padding: 12px;
  margin-bottom: 12px;

  &:last-child {
    border-bottom: none;
  }
`,lD=E.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  padding: 8px 0;
  
  &:hover p {
    color: #85683d;
  }
`,uD=E.p`
  font-weight: 600;
  font-size: 16px;
  margin: 0;
  color: #222;
  transition: color 0.2s;
`,cD=E.span`
  border: solid #555;
  border-width: 0 2px 2px 0;
  display: inline-block;
  padding: 3px;
  transform: ${e=>e.isOpen?"rotate(-135deg)":"rotate(45deg)"};
  transition: transform 0.3s ease;
`,dD=E.div`
  max-height: ${e=>e.isOpen?"500px":"0"};
  overflow: hidden;
  transition: max-height 0.3s ease-in-out, opacity 0.3s;
  opacity: ${e=>e.isOpen?"1":"0"};
  padding: ${e=>e.isOpen?"12px":"0"};
`,fD=E.label`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  cursor: pointer;
  font-size: 15px;
  color: #444;

  &:hover span:first-of-type {
    border-color: #85683d;
  }
`,Ep=E.input.attrs({type:"checkbox"})`
  display: none;
`,pD=E.span`
  width: 20px;
  height: 20px;
  border: 2px solid #ddd;
  border-radius: 4px;
  margin-right: 12px;
  position: relative;
  flex-shrink: 0;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);

  ${Ep}:checked + & {
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

  ${Ep}:checked + &::after {
    opacity: 1;
  }
`,hD=({childValues:e,category:t,selectedFilters:n,setSelectedFilters:r,setPriceRange:i})=>{const[o,a]=b.useState({}),[l,s]=b.useState([]);b.useEffect(()=>{t&&(async()=>{try{const y=await fetch(`https://backenddidiv-production.up.railway.app/api/products?populate=*&filters[category][title][$eq]=${encodeURIComponent(t)}&pagination[pageSize]=200`);console.log(t);const p=await y.json();console.log("dataaaa",p.data);const m=p.data||[],v={};m.forEach(h=>{var g;(g=h.attributes)==null||g.forEach(x=>{v[x.label]||(v[x.label]=new Set),v[x.label].add(x.value)})});const w=Object.entries(v).map(([h,g])=>({type:"checkbox",label:h,name:h.toLowerCase(),options:Array.from(g)}));console.log("fillltr",w),s(w)}catch(y){console.error(y)}})()},[t]);const u=c=>{a(y=>({...y,[c]:!y[c]}))},d=(c,y)=>{r(p=>{const m=p[c]||[];return m.includes(y)?{...p,[c]:m.filter(v=>v!==y)}:{...p,[c]:[...m,y]}})};return f.jsx(aD,{children:(l||[]).map(c=>{var p;const y=!!o[c.name];return f.jsxs(sD,{children:[f.jsxs(lD,{onClick:()=>u(c.name),children:[f.jsx(uD,{children:c.label}),f.jsx(cD,{isOpen:y})]}),f.jsxs(dD,{isOpen:y,children:[c.type==="checkbox"&&((p=c.options)==null?void 0:p.map(m=>{var v;return f.jsxs(fD,{children:[f.jsx(Ep,{checked:((v=n[c.name])==null?void 0:v.includes(m))||!1,onChange:()=>d(c.name,m)}),f.jsx(pD,{}),m]},m)})),c.type==="range"&&f.jsx(KS,{onChange:i,childValues:e})]})]},c.name)})})},mD=E.div`
`,gD=E.div`
display: flex;
    justify-content: space-between;
    align-items: center;
        margin-bottom: 10px;

    
`,vD=E.h2`
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

`,yD=E.div`
width: 100vw;
height:30vw;

  @media screen and (min-width: 768px) {
  width: 60vw;
  height:80vw;
  }
   @media screen and (min-width: 1200px) {
 
  height:40vw;
  }
      
`;E.div``;const xD=E.div`
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
`,bD=E.div`
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
`,wD=E.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  padding:20px;
`,SD=E.div`
  padding: 16px;
      display: flex;
    align-content: center;
    align-items: center;
        justify-content: space-between;
`,_D=E.p`
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

`;const CD=E.div.attrs({className:"card-buttons"})`
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
`,Pv=E.button`
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
`;const ED=E.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  flex-wrap: wrap;
  gap: 5px;
`,Pd=E.button`
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
`,kD=E.div`
  position: relative;
  display: inline-block;
   @media screen and (max-width: 768px) {
  display:none;
  }

`,TD=E.button`
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
`,PD=E.div`
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
`,hi=E.div`
  padding: 10px 12px;
  cursor: pointer;

  &:hover {
    background: #f0f0f0;
  }
`,OD=E.div`
  text-align: center;
  width: 100px;
 
`,jD=E.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 2px;
`,MD=E.span`
  font-size: 18px;
  font-weight: 600;
  color: ${({$discount:e})=>"#111"};
`,$D=E.span`
  font-size: 13px;
  color: #999;
  text-decoration: line-through;
`,ID=E.span`
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
`,QS=rw({name:"favorites",initialState:{items:[]},reducers:{toggleFavorite:(e,t)=>{const n=t.payload;e.items.find(i=>i.id===n.id)?e.items=e.items.filter(i=>i.id!==n.id):e.items.push(n)},clearFavorite:e=>{e.items=[]}}}),{toggleFavorite:yo,clearFavorite:DD}=QS.actions,LD=QS.reducer,AD=({setValues:e,category:t,selectedFilters:n={},priceRange:r,sortType:i,setIsSortOpen:o,isSortOpen:a,setSortType:l,sortOrder:s,setSortOrder:u})=>{const[d,c]=b.useState([]),[y,p]=b.useState(!0),[m,v]=b.useState(1),w=24;let h=d;const g=b.useRef(null);b.useEffect(()=>{const j=F=>{g.current&&!g.current.contains(F.target)&&o(!1)};return document.addEventListener("mousedown",j),()=>{document.removeEventListener("mousedown",j)}},[o]),b.useEffect(()=>{(async()=>{try{p(!0);const A=await(await fetch(`https://backenddidiv-production.up.railway.app/api/products?populate=*&filters[category][title][$eq]=${encodeURIComponent(t)}&pagination[pageSize]=500`)).json();c(A.data);const O=A.data.map(D=>D.price);if(O.length>0){let D=Math.min(...O),P=Math.max(...O);e([D,P])}}catch(F){console.error("Error fetching products:",F)}finally{p(!1)}})()},[t,e]),b.useEffect(()=>{v(1)},[t,n,r]),b.useEffect(()=>{window.scrollTo({top:0,behavior:"smooth"})},[m]);const x=On(),S=jn(),T=st(j=>j.favorites.items),k=st(j=>j.cart.items),C=(j,F)=>{F.stopPropagation();const A=T.some(O=>O.id===j.id);S(yo(j)),A?K.warning(`${j.name} видалено з обраного`):K.info(`${j.name} додано в обране`)};if(Object.keys(n).forEach(j=>{const F=n[j];Array.isArray(F)&&F.length>0&&(h=h.filter(A=>{var D;const O=(D=A.attributes)==null?void 0:D.find(P=>P.label.toLowerCase()===j.toLowerCase());return O&&F.includes(O.value)}))}),r&&r.length===2){const[j,F]=r;console.log(j,F)}const _=b.useMemo(()=>{const j=[...h],F=A=>A.new_price&&A.new_price<A.price?A.new_price:A.price;switch(i){case"name":return j.sort((A,O)=>s==="asc"?A.name.localeCompare(O.name):O.name.localeCompare(A.name));case"price":return j.sort((A,O)=>{const D=F(A),P=F(O);return s==="asc"?D-P:P-D});case"date":return j.sort((A,O)=>s==="asc"?new Date(A.createdAt)-new Date(O.createdAt):new Date(O.createdAt)-new Date(A.createdAt));default:return j}},[i,h,s]),$=m*w,M=$-w,R=_.slice(M,$),L=Math.ceil(h.length/w);return y?f.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"100vw",height:"100vh"},children:f.jsx(qa,{height:100,width:100,radius:5,color:"var(--orange-color)",ariaLabel:"ball-triangle-loading",wrapperStyle:{},wrapperClass:"",visible:!0})}):(console.log(R),console.log("filteredProducts.length:",h.length),console.log("currentProducts.length:",R.length),f.jsxs(mD,{children:[f.jsxs(gD,{children:[f.jsx(vD,{children:t}),f.jsxs(kD,{ref:g,children:[f.jsxs(TD,{onClick:()=>o(j=>!j),children:["Сортування",f.jsx(Pu,{strokeWidth:.9,size:22})]}),a&&f.jsxs(PD,{children:[f.jsx(hi,{onClick:()=>{l("name"),u("asc"),o(!1)},children:"А-Я"}),f.jsx(hi,{onClick:()=>{l("name"),u("desc"),o(!1)},children:"Я-А"}),f.jsx(hi,{onClick:()=>{l("price"),u("asc"),o(!1)},children:"Ціна ↑"}),f.jsx(hi,{onClick:()=>{l("price"),u("desc"),o(!1)},children:"Ціна ↓"}),f.jsx(hi,{onClick:()=>{l("date"),u("desc"),o(!1)},children:"Спочатку новіші"}),f.jsx(hi,{onClick:()=>{l("date"),u("asc"),o(!1)},children:"Спочатку старіші"})]})]})]}),f.jsx(Or,{autoClose:1500}),h.length===0?f.jsx(yD,{children:f.jsx("p",{style:{textAlign:"center",fontSize:"30px",marginTop:"50px",marginLeft:"auto",marginRight:"auto"},children:"Нічого не знайдено 😢"})}):f.jsx(xD,{children:R.map(j=>{var N,U;const F=T.some(H=>H.id===j.id),A=k.find(H=>H.id===j.id),D=(A?A.quantity:0)>=(j.stock||0),P=j.new_price&&j.new_price<j.price,I=P?j.new_price:j.price,z=P?Math.round((j.price-j.new_price)/j.price*100):0,B=(H,q)=>{if(q.stopPropagation(),D){K.error("Товар уже у кошику");return}S(po({...H,quantity:1})),K.success(`${H.name} додано в кошик!`)};return f.jsxs(bD,{onClick:()=>x(`/product/${j.id}`),style:{cursor:"pointer"},children:[f.jsx(wD,{src:((U=(N=j.images)==null?void 0:N[0])==null?void 0:U.url)||"/placeholder.jpg",alt:j.name,onError:H=>{H.currentTarget.onerror=null,H.currentTarget.src=to}}),f.jsx(_D,{children:j.name}),f.jsxs(SD,{children:[f.jsx(OD,{children:f.jsxs(jD,{children:[f.jsxs(MD,{$discount:P,children:[(I*(j.quantity||1)).toLocaleString()," грн"]}),P&&f.jsxs(f.Fragment,{children:[f.jsxs($D,{children:[(j.price*(j.quantity||1)).toLocaleString()," грн"]}),f.jsxs(ID,{children:["-",z,"%"]})]})]})}),f.jsxs(CD,{children:[f.jsx(Pv,{onClick:H=>B(j,H),children:f.jsx(fo,{size:24,color:A?"var(--orange-color)":"black",strokeWidth:2})}),f.jsx(Pv,{onClick:H=>C(j,H),children:f.jsx(ju,{size:24,fill:F?"#ff4d4f":"none",color:F?"#ff4d4f":"#000000",strokeWidth:F?1:2})})]})]})]},j.id)})}),h.length>w&&f.jsxs(ED,{children:[f.jsx(Pd,{onClick:()=>v(j=>Math.max(j-1,1)),disabled:m===1,children:"Назад"}),Array.from({length:L},(j,F)=>f.jsx(Pd,{onClick:()=>v(F+1),active:m===F+1,children:F+1},F)),f.jsx(Pd,{onClick:()=>v(j=>Math.min(j+1,L)),disabled:m===L,children:"Вперед"})]})]}))},RD=()=>{const[e,t]=b.useState({});console.log(e);const{category:n}=oy(),[r,i]=b.useState(!1),[o,a]=b.useState(!1),[l,s]=b.useState("date"),[u,d]=b.useState("desc"),[c,y]=b.useState([]),[p,m]=b.useState([0,0]);console.log(c),console.log(n);const v=Object.values(e).some(h=>Array.isArray(h)&&h.length>0),w=()=>{v&&t({})};return f.jsxs(TI,{children:[f.jsxs(kI,{children:[f.jsxs(PI,{children:[f.jsxs(OI,{onClick:()=>i(!0),children:["Фільтр",f.jsx(jI,{children:f.jsx("use",{href:`${cn}#icon-filter`})})]}),f.jsxs(RI,{children:[f.jsxs(MI,{onClick:()=>a(h=>!h),children:["Сортування",f.jsx(Pu,{strokeWidth:.9,size:22})]}),o&&f.jsxs(FI,{children:[f.jsx(pi,{onClick:()=>{s("name"),d("asc"),a(!1)},children:"А-Я"}),f.jsx(pi,{onClick:()=>{s("name"),d("desc"),a(!1)},children:"Я-А"}),f.jsx(pi,{onClick:()=>{s("price"),d("asc"),a(!1)},children:"Ціна ↑"}),f.jsx(pi,{onClick:()=>{s("price"),d("desc"),a(!1)},children:"Ціна ↓"}),f.jsx(pi,{onClick:()=>{s("date"),d("desc"),a(!1)},children:"Спочатку новіші"}),f.jsx(pi,{onClick:()=>{s("date"),d("asc"),a(!1)},children:"Спочатку старіші"})]})]})]}),f.jsx(oD,{category:n,selectedFilters:e,setSelectedFilters:t,childValues:c,priceRange:p,setPriceRange:m}),f.jsx(AD,{priceRange:p,values:c,setValues:y,category:n,selectedFilters:e,sortType:l,setIsSortOpen:a,isSortOpen:o,setSortType:s,sortOrder:u,setSortOrder:d}),r&&f.jsx($I,{onClick:()=>i(!1),open:r,children:f.jsxs(II,{onClick:h=>h.stopPropagation(),open:r,children:[f.jsxs(DI,{children:[f.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[f.jsx(Bb,{size:20}),f.jsx("h2",{children:"Фільтри"})]}),f.jsx(Ub,{size:24,onClick:()=>i(!1),style:{cursor:"pointer"}})]}),f.jsx(hD,{childValues:c,category:n,selectedFilters:e,setSelectedFilters:t,priceRange:p,setPriceRange:m}),f.jsxs(LI,{children:[f.jsx(XS,{onClick:w,disabled:!v,children:"Скинути обрані фільтри"}),f.jsx(AI,{onClick:()=>i(!1),children:"Показати результати"})]})]})})]})," "]})},Ov=E.div`
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
`,FD=E.div`
  font-family: var(--main-font);
  font-size: 14px;
  color: #8c8c8c;
  margin-bottom: 15px;

  a {
    text-decoration: none;
    color: inherit;
  }
`,zD=E.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,ND=E.div``;E.div`
  position: absolute;
  top: 10px;
  left: 10px;
  background: #27ae60;
  color: white;
  padding: 5px 15px;
  font-weight: bold;
  z-index: 2;
`;const BD=E.img`
  width: 100%;
  border-radius: 4px;
  background: #f9f9f9;
   @media screen and (max-width: 300px) {
   width: 260px;
  }
`,VD=E.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
      flex-wrap: wrap;
`,UD=E.img`
  width: 60px;
  height: 60px;
  border: 1px solid #ddd;
  cursor: pointer;
  object-fit: cover;
`,HD=E.div``,WD=E.h1`
  font-size: 28px;
  margin-bottom: 10px;
  color: #333;
  font-family: var(--second-font);
  font-weight: 500;
`,GD=E.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 20px;
`,qD=E.span`
  color: #27ae60;
  font-size: 17px;
`,YD=E.div`
  background: #fdfdfd;
  border: 1px solid #eee;
  padding: 25px;
  border-radius: 8px;
   @media screen and (max-width: 300px) {
   width: 260px;
  }
`,XD=E.div`
  font-family: var(--second-font);
  font-weight: 500;
  display: flex;
  align-items: baseline;
  gap: 15px;
  margin-bottom: 20px;
`,jv=E.span`
  font-size: 32px;
  font-weight: 700;
    color: ${({$discount:e})=>e?"var(--red-color)":"#111"};
`,KD=E.span`
  font-size: 14px;
  text-decoration: line-through;
  color: #999;
`,QD=E.span`
  background:var(--red-color);
  color: white;
  font-size: 12px;
  padding: 2px 6px;
  border-radius: 6px;
`,ZD=E.div`
  display: flex;
  gap: 15px;
  margin-bottom: 15px;
  font-family: var(--second-font);
  font-weight: 500;
`,JD=E.div`
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
`,eL=E.button`
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
`;const Mv=E.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  /* max-width: 800px; */
   @media (min-width: 767px) {
    padding-top:18px;
  }
`,tL=E.h3`
font-family: var(--second-font);
      border-bottom: 2px solid #717171;
    border-bottom: 2px solid var(--second-color);
    color: var(--second-color);
      padding: 10px 0;
`,$v=E.div`
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
`,nL=E.div`
  margin: 20px 0;
  font-size: 14px;
  color: #444;
`,rL=E.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  align-items: start;

  @media (max-width: 767px) {
    display: block;
  }
`,Iv=E.div`
  font-family: var(--second-font);
  font-weight: 500;
  margin-top: 20px;
`,Dv=E.div`
  display: flex;
  gap: 30px;
  border-bottom: 1px solid #ccc;
`,Ro=E.button`
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
`,Lv=E.div`
  font-family: var(--second-font);
  font-weight: 500;
  padding: 15px;
  background: #fff;
`,Av=E.p`
  font-size: 20px;
  font-family: var(--second-font);
  font-weight: 300;
`,iL=E.button`
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
`,oL=E.svg`
  width: 20px;
  height: 20px;

  fill: ${({$active:e})=>e?"white":" var(--black-color)"};
`,ZS=E.span`

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
`,aL=E.div`
  position: relative;
  display: inline-block;

  &:hover ${ZS} {
  opacity: ${({$active:e})=>e?1:0};
    transform: translateX(-50%) translateY(0);
  }
`,JS="carousel",e2="controller",sL="navigation",lL="no-scroll",xm="portal",uL="root",t2="toolbar",Rv="zoom",Od="loading",jd="error",Md="complete",cL="placeholder",dL=e=>`active-slide-${e}`,fL="fullsize",bm="flex_center",pL="no_scroll",n2="no_scroll_padding",wm="slide",r2="slide_wrapper",hL="slide_wrapper_interactive",Fr="prev",zr="next",Fv="swipe",ro="close",i2="onPointerDown",o2="onPointerMove",a2="onPointerUp",s2="onPointerLeave",l2="onPointerCancel",Sm="onKeyDown",mL="onKeyUp",_m="onWheel",gL="Escape",vL="ArrowLeft",yL="ArrowRight",xL="button",kp="icon",u2="contain",zv="cover",c2="Unknown action type",d2="yarl__";function Tn(...e){return e.filter(Boolean).join(" ")}function ae(e){return`${d2}${e}`}function bt(e){return`--${d2}${e}`}function Ka(e,t){return`${e}${t?`_${t}`:""}`}function Cm(e){return t=>Ka(e,t)}function io(e,t){var n;return(n=e==null?void 0:e[t])!==null&&n!==void 0?n:t}function bL(e,t,n){return io(e,"{index} of {total}").replace(/\{index}/g,`${Om(n,t.length)+1}`).replace(/\{total}/g,`${t.length}`)}function Em(...e){return()=>{e.forEach(t=>{t()})}}function Jn(e,t,n){return()=>{const r=b.useContext(n);if(!r)throw new Error(`${e} must be used within a ${t}.Provider`);return r}}function km(){return typeof window<"u"}function Tm(e,t=0){const n=10**t;return Math.round((e+Number.EPSILON)*n)/n}function xo(e){return e.type===void 0||e.type==="image"}function Pm(e,t){return e.imageFit===zv||e.imageFit!==u2&&t===zv}function hc(e){return typeof e=="string"?Number.parseInt(e,10):e}function Kl(e){if(typeof e=="number")return{pixel:e};if(typeof e=="string"){const t=hc(e);return e.endsWith("%")?{percent:t}:{pixel:t}}return{pixel:0}}function wL(e,t){const n=Kl(t),r=n.percent!==void 0?e.width/100*n.percent:n.pixel;return{width:Math.max(e.width-2*r,0),height:Math.max(e.height-2*r,0)}}function SL(){return(km()?window==null?void 0:window.devicePixelRatio:void 0)||1}function Om(e,t){return t>0?(e%t+t)%t:0}function f2(e){return e.length>0}function p2(e,t){return e[Om(t,e.length)]}function Tp(e,t){return f2(e)?p2(e,t):void 0}function _L(e){return xo(e)?e.src:void 0}function CL(e,t,n){if(!n)return e;const{buttons:r,...i}=e,o=r.findIndex(l=>l===t),a=b.isValidElement(n)?b.cloneElement(n,{key:t},null):n;if(o>=0){const l=[...r];return l.splice(o,1,a),{buttons:l,...i}}return{buttons:[a,...r],...i}}function EL(e,t,n=0){return Math.min(e.preload,Math.max(e.finite?t.length-1:Math.floor(t.length/2),n))}const kL=Number(b.version.split(".")[0])>=19;function TL(e){return{inert:kL?e:e?"":void 0}}function PL(e){e.scrollTop}const Pp={open:!1,close:()=>{},index:0,slides:[],render:{},plugins:[],toolbar:{buttons:[ro]},labels:{},animation:{fade:250,swipe:500,easing:{fade:"ease",swipe:"ease-out",navigation:"ease-in-out"}},carousel:{finite:!1,preload:2,padding:"16px",spacing:"30%",imageFit:u2,imageProps:{}},controller:{ref:null,focus:!0,aria:!1,touchAction:"none",closeOnPullUp:!1,closeOnPullDown:!1,closeOnBackdropClick:!1,preventDefaultWheelX:!0,preventDefaultWheelY:!1,disableSwipeNavigation:!1},portal:{},noScroll:{disabled:!1},on:{},styles:{},className:""};function jr(e,t){return{name:e,component:t}}function Ue(e,t){return{module:e,children:t}}function h2(e,t,n){return e.module.name===t?n(e):e.children?[Ue(e.module,e.children.flatMap(r=>{var i;return(i=h2(r,t,n))!==null&&i!==void 0?i:[]}))]:[e]}function mi(e,t,n){return e.flatMap(r=>{var i;return(i=h2(r,t,n))!==null&&i!==void 0?i:[]})}function OL(e,t=[],n=[]){let r=e;const i=p=>{const m=[...r];for(;m.length>0;){const v=m.pop();if((v==null?void 0:v.module.name)===p)return!0;v!=null&&v.children&&m.push(...v.children)}return!1},o=(p,m)=>{if(p===""){r=[Ue(m,r)];return}r=mi(r,p,v=>[Ue(m,[v])])},a=(p,m)=>{r=mi(r,p,v=>[Ue(v.module,[Ue(m,v.children)])])},l=(p,m,v)=>{r=mi(r,p,w=>{var h;return[Ue(w.module,[...v?[Ue(m)]:[],...(h=w.children)!==null&&h!==void 0?h:[],...v?[]:[Ue(m)]])]})},s=(p,m,v)=>{r=mi(r,p,w=>[...v?[Ue(m)]:[],w,...v?[]:[Ue(m)]])},u=p=>{a(e2,p)},d=(p,m)=>{r=mi(r,p,v=>[Ue(m,v.children)])},c=p=>{r=mi(r,p,m=>m.children)},y=p=>{n.push(p)};return t.forEach(p=>{p({contains:i,addParent:o,append:a,addChild:l,addSibling:s,addModule:u,replace:d,remove:c,augment:y})}),{config:r,augmentation:p=>n.reduce((m,v)=>v(m),p)}}const m2=b.createContext(null),g2=Jn("useA11yContext","A11yContext",m2);function jL({children:e}){const[t,n]=b.useState(!1),[r,i]=b.useState(!1),o=b.useMemo(()=>({focusWithin:t,trackFocusWithin:(l,s)=>{const u=d=>c=>{var y;c.currentTarget.contains(c.relatedTarget)||n(d),(y=d?l:s)===null||y===void 0||y(c)};return{onFocus:u(!0),onBlur:u(!1)}},autoPlaying:r,setAutoPlaying:i}),[t,r]);return b.createElement(m2.Provider,{value:o},e)}const v2=b.createContext(null),mc=Jn("useDocument","DocumentContext",v2);function ML({nodeRef:e,children:t}){const n=b.useMemo(()=>{const r=o=>{var a;return((a=o||e.current)===null||a===void 0?void 0:a.ownerDocument)||document};return{getOwnerDocument:r,getOwnerWindow:o=>{var a;return((a=r(o))===null||a===void 0?void 0:a.defaultView)||window}}},[e]);return b.createElement(v2.Provider,{value:n},t)}const y2=b.createContext(null),gc=Jn("useEvents","EventsContext",y2);function $L({children:e}){const[t]=b.useState({});b.useEffect(()=>()=>{Object.keys(t).forEach(r=>delete t[r])},[t]);const n=b.useMemo(()=>{const r=(a,l)=>{var s;(s=t[a])===null||s===void 0||s.splice(0,t[a].length,...t[a].filter(u=>u!==l))};return{publish:(...[a,l])=>{var s;(s=t[a])===null||s===void 0||s.forEach(u=>u(l))},subscribe:(a,l)=>(t[a]||(t[a]=[]),t[a].push(l),()=>r(a,l)),unsubscribe:r}},[t]);return b.createElement(y2.Provider,{value:n},e)}const x2=b.createContext(null),Kt=Jn("useLightboxProps","LightboxPropsContext",x2);function IL({children:e,...t}){return b.createElement(x2.Provider,{value:t},e)}const b2=b.createContext(null),Mr=Jn("useLightboxState","LightboxStateContext",b2),w2=b.createContext(null),DL=Jn("useLightboxDispatch","LightboxDispatchContext",w2);function LL(e,t){switch(t.type){case"swipe":{const{slides:n}=e,r=(t==null?void 0:t.increment)||0,i=e.globalIndex+r,o=Om(i,n.length),a=Tp(n,o),l=r||t.duration!==void 0?{increment:r,duration:t.duration,easing:t.easing}:void 0;return{slides:n,currentIndex:o,globalIndex:i,currentSlide:a,animation:l}}case"update":return t.slides!==e.slides||t.index!==e.currentIndex?{slides:t.slides,currentIndex:t.index,globalIndex:t.index,currentSlide:Tp(t.slides,t.index)}:e;default:throw new Error(c2)}}function AL({slides:e,index:t,children:n}){const[r,i]=b.useReducer(LL,{slides:e,currentIndex:t,globalIndex:t,currentSlide:Tp(e,t)}),[o,a]=b.useState(e),[l,s]=b.useState(t);(e!==o||t!==l)&&(a(e),s(t),i({type:"update",slides:e,index:t}));const u=b.useMemo(()=>({...r,state:r,dispatch:i}),[r,i]);return b.createElement(w2.Provider,{value:i},b.createElement(b2.Provider,{value:u},n))}const S2=b.createContext(null),vc=Jn("useTimeouts","TimeoutsContext",S2);function RL({children:e}){const[t]=b.useState([]);b.useEffect(()=>()=>{t.forEach(r=>window.clearTimeout(r)),t.splice(0,t.length)},[t]);const n=b.useMemo(()=>{const r=a=>{t.splice(0,t.length,...t.filter(l=>l!==a))};return{setTimeout:(a,l)=>{const s=window.setTimeout(()=>{r(s),a()},l);return t.push(s),s},clearTimeout:a=>{a!==void 0&&(r(a),window.clearTimeout(a))}}},[t]);return b.createElement(S2.Provider,{value:n},e)}const jm=b.forwardRef(function({label:t,className:n,icon:r,renderIcon:i,onClick:o,style:a,...l},s){const{styles:u,labels:d}=Kt(),c=io(d,t);return b.createElement("button",{ref:s,type:"button",title:c,"aria-label":c,className:Tn(ae(xL),n),onClick:o,style:{...a,...u.button},...l},i?i():b.createElement(r,{className:ae(kp),style:u.icon}))});function FL(e,t){const n=r=>b.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24","aria-hidden":"true",focusable:"false",...r},t);return n.displayName=e,n}function ai(e,t){return FL(e,b.createElement("g",{fill:"currentColor"},b.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),t))}const zL=ai("Close",b.createElement("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"})),NL=ai("Previous",b.createElement("path",{d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"})),BL=ai("Next",b.createElement("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"})),VL=ai("Loading",b.createElement(b.Fragment,null,Array.from({length:8}).map((e,t,n)=>b.createElement("line",{key:t,x1:"12",y1:"6.5",x2:"12",y2:"1.8",strokeLinecap:"round",strokeWidth:"2.6",stroke:"currentColor",strokeOpacity:1/n.length*(t+1),transform:`rotate(${360/n.length*t}, 12, 12)`})))),UL=ai("Error",b.createElement("path",{d:"M21.9,21.9l-8.49-8.49l0,0L3.59,3.59l0,0L2.1,2.1L0.69,3.51L3,5.83V19c0,1.1,0.9,2,2,2h13.17l2.31,2.31L21.9,21.9z M5,18 l3.5-4.5l2.5,3.01L12.17,15l3,3H5z M21,18.17L5.83,3H19c1.1,0,2,0.9,2,2V18.17z"})),Pn=km()?b.useLayoutEffect:b.useEffect;function Mm(){const[e,t]=b.useState(!1);return b.useEffect(()=>{var n,r;const i=(n=window.matchMedia)===null||n===void 0?void 0:n.call(window,"(prefers-reduced-motion: reduce)");t(i==null?void 0:i.matches);const o=a=>t(a.matches);return(r=i==null?void 0:i.addEventListener)===null||r===void 0||r.call(i,"change",o),()=>{var a;return(a=i==null?void 0:i.removeEventListener)===null||a===void 0?void 0:a.call(i,"change",o)}},[]),e}function HL(e){let t=0,n=0,r=0;const o=window.getComputedStyle(e).transform.match(/matrix.*\((.+)\)/);if(o){const a=o[1].split(",").map(hc);a.length===6?(t=a[4],n=a[5]):a.length===16&&(t=a[12],n=a[13],r=a[14])}return{x:t,y:n,z:r}}function Nv(e,t){const n=b.useRef(void 0),r=b.useRef(void 0),i=Mm();return Pn(()=>{var o,a,l;if(e.current&&n.current!==void 0&&!i){const{keyframes:s,duration:u,easing:d,onfinish:c}=t(n.current,e.current.getBoundingClientRect(),HL(e.current))||{};if(s&&u){(o=r.current)===null||o===void 0||o.cancel(),r.current=void 0;try{r.current=(l=(a=e.current).animate)===null||l===void 0?void 0:l.call(a,s,{duration:u,easing:d})}catch(y){console.error(y)}r.current&&(r.current.onfinish=()=>{r.current=void 0,c==null||c()})}}n.current=void 0}),{prepareAnimation:o=>{n.current=o},isAnimationPlaying:()=>{var o;return((o=r.current)===null||o===void 0?void 0:o.playState)==="running"}}}function _2(){const e=b.useRef(null),t=b.useRef(void 0),[n,r]=b.useState();return{setContainerRef:b.useCallback(o=>{e.current=o,t.current&&(t.current.disconnect(),t.current=void 0);const a=()=>{if(o){const l=window.getComputedStyle(o),s=u=>parseFloat(u)||0;r({width:Math.round(o.clientWidth-s(l.paddingLeft)-s(l.paddingRight)),height:Math.round(o.clientHeight-s(l.paddingTop)-s(l.paddingBottom))})}else r(void 0)};a(),o&&typeof ResizeObserver<"u"&&(t.current=new ResizeObserver(a),t.current.observe(o))},[]),containerRef:e,containerRect:n}}function tl(){const e=b.useRef(void 0),{setTimeout:t,clearTimeout:n}=vc();return b.useCallback((r,i)=>{n(e.current),e.current=t(r,i>0?i:0)},[t,n])}function pe(e){const t=b.useRef(e);return Pn(()=>{t.current=e}),b.useCallback((...n)=>{var r;return(r=t.current)===null||r===void 0?void 0:r.call(t,...n)},[])}function Bv(e,t){typeof e=="function"?e(t):e&&(e.current=t)}function Op(e,t){return b.useMemo(()=>e==null&&t==null?null:n=>{Bv(e,n),Bv(t,n)},[e,t])}function WL(e,t=!1){const n=b.useRef(!1);Pn(()=>{t&&n.current&&(n.current=!1,e())},[t,e]);const r=b.useCallback(()=>{n.current=!0},[]),i=b.useCallback(()=>{n.current=!1},[]);return{onFocus:r,onBlur:i}}function $m(){const[e,t]=b.useState(!1);return Pn(()=>{t(window.getComputedStyle(window.document.documentElement).direction==="rtl")},[]),e}function GL(){const[e]=b.useState({}),t=b.useCallback((i,o)=>{var a;(a=e[i])===null||a===void 0||a.forEach(l=>{o.isPropagationStopped()||l(o)})},[e]),n=b.useMemo(()=>({onPointerDown:i=>t(i2,i),onPointerMove:i=>t(o2,i),onPointerUp:i=>t(a2,i),onPointerLeave:i=>t(s2,i),onPointerCancel:i=>t(l2,i),onKeyDown:i=>t(Sm,i),onKeyUp:i=>t(mL,i),onWheel:i=>t(_m,i)}),[t]),r=b.useCallback((i,o)=>(e[i]||(e[i]=[]),e[i].unshift(o),()=>{const a=e[i];a&&a.splice(0,a.length,...a.filter(l=>l!==o))}),[e]);return{registerSensors:n,subscribeSensors:r}}function Vv(e,t){const n=b.useRef(0),r=tl(),i=pe((...o)=>{n.current=Date.now(),e(o)});return b.useCallback((...o)=>{r(()=>{i(o)},t-(Date.now()-n.current))},[t,i,r])}const $d=Cm("slide"),Id=Cm("slide_image");function Ql({slide:e,offset:t,render:n,rect:r,imageFit:i,imageProps:o,onClick:a,onLoad:l,onError:s,style:u}){var d,c,y,p,m,v,w,h;const[g,x]=b.useState(Od),{publish:S}=gc(),{setTimeout:T}=vc(),k=b.useRef(null);b.useEffect(()=>{t===0&&S(dL(g))},[t,g,S]);const C=pe(N=>{("decode"in N?N.decode():Promise.resolve()).catch(()=>{}).then(()=>{N.parentNode&&(x(Md),T(()=>{l==null||l(N)},0))})}),_=b.useCallback(N=>{k.current=N,N!=null&&N.complete&&C(N)},[C]),$=b.useCallback(N=>{C(N.currentTarget)},[C]),M=pe(()=>{x(jd),s==null||s()}),R=Pm(e,i),L=(N,U)=>Number.isFinite(N)?N:U,j=L(Math.max(...((c=(d=e.srcSet)===null||d===void 0?void 0:d.map(N=>N.width))!==null&&c!==void 0?c:[]).concat(e.width?[e.width]:[]).filter(Boolean)),((y=k.current)===null||y===void 0?void 0:y.naturalWidth)||0),F=L(Math.max(...((m=(p=e.srcSet)===null||p===void 0?void 0:p.map(N=>N.height))!==null&&m!==void 0?m:[]).concat(e.height?[e.height]:[]).filter(Boolean)),((v=k.current)===null||v===void 0?void 0:v.naturalHeight)||0),A=j&&F?{maxWidth:`min(${j}px, 100%)`,maxHeight:`min(${F}px, 100%)`}:{maxWidth:"100%",maxHeight:"100%"},O=(w=e.srcSet)===null||w===void 0?void 0:w.slice().sort((N,U)=>N.width-U.width).map(N=>`${N.src} ${N.width}w`).join(", "),D=()=>r&&!R&&e.width&&e.height?r.height/e.height*e.width:Number.MAX_VALUE,P=O&&r&&km()?`${Math.round(Math.min(D(),r.width))}px`:void 0,{style:I,className:z,...B}=(typeof o=="function"?o(e):o)||{};return b.createElement(b.Fragment,null,b.createElement("img",{ref:_,onLoad:$,onError:M,onClick:a,draggable:!1,className:Tn(ae(Id()),R&&ae(Id("cover")),g!==Md&&ae(Id("loading")),z),style:{...A,...u,...I},...B,alt:(h=e.alt)!==null&&h!==void 0?h:"",sizes:P,srcSet:O,src:e.src}),g!==Md&&b.createElement("div",{className:ae($d(cL))},g===Od&&(n!=null&&n.iconLoading?n.iconLoading():b.createElement(VL,{className:Tn(ae(kp),ae($d(Od)))})),g===jd&&(n!=null&&n.iconError?n.iconError():b.createElement(UL,{className:Tn(ae(kp),ae($d(jd)))}))))}const qL=b.forwardRef(function({className:t,children:n,onFocus:r,onBlur:i,...o},a){const l=b.useRef(null),{trackFocusWithin:s}=g2();return b.createElement(ML,{nodeRef:l},b.createElement("div",{ref:Op(a,l),className:Tn(ae("root"),t),...s(r,i),...o},n))});var it;(function(e){e[e.NONE=0]="NONE",e[e.SWIPE=1]="SWIPE",e[e.PULL=2]="PULL",e[e.ANIMATION=3]="ANIMATION"})(it||(it={}));function C2(e,t,n,r,i){b.useEffect(()=>i?()=>{}:Em(e(i2,t),e(o2,n),e(a2,r),e(s2,r),e(l2,r)),[e,t,n,r,i])}var en;(function(e){e[e.NONE=0]="NONE",e[e.SWIPE=1]="SWIPE",e[e.PULL=2]="PULL"})(en||(en={}));const Dd=30;function YL({disableSwipeNavigation:e,closeOnBackdropClick:t},n,r,i,o,a,l,s,u,d,c,y,p,m,v,w){const h=b.useRef(0),g=b.useRef([]),x=b.useRef(void 0),S=b.useRef(0),T=b.useRef(en.NONE),k=b.useCallback(j=>{x.current===j.pointerId&&(x.current=void 0,T.current=en.NONE);const F=g.current;F.splice(0,F.length,...F.filter(A=>A.pointerId!==j.pointerId))},[]),C=b.useCallback(j=>{k(j),j.persist(),g.current.push(j)},[k]),_=b.useCallback(j=>g.current.find(({pointerId:F})=>j.pointerId===F),[]),$=pe(j=>{C(j)}),M=(j,F)=>c&&j>F||d&&j<-F,R=pe(j=>{const F=_(j);if(F)if(x.current===j.pointerId){const A=Date.now()-S.current,O=h.current;T.current===en.SWIPE?Math.abs(O)>.3*i||Math.abs(O)>5&&A<o?s(O,A):u(O):T.current===en.PULL&&(M(O,2*Dd)?m(O,A):v(O)),h.current=0,T.current=en.NONE}else{const{target:A}=j;t&&A instanceof HTMLElement&&A===F.target&&(A.classList.contains(ae(wm))||A.classList.contains(ae(r2)))&&w()}k(j)}),L=pe(j=>{const F=_(j);if(F){const A=x.current===j.pointerId;if(j.buttons===0){A&&h.current!==0?R(j):k(F);return}const O=j.clientX-F.clientX,D=j.clientY-F.clientY;if(x.current===void 0){const P=I=>{C(j),x.current=j.pointerId,S.current=Date.now(),T.current=I};Math.abs(O)>Math.abs(D)&&Math.abs(O)>Dd&&r(O)?e||(P(en.SWIPE),a()):Math.abs(D)>Math.abs(O)&&M(D,Dd)&&(P(en.PULL),y())}else A&&(T.current===en.SWIPE?(h.current=O,l(O)):T.current===en.PULL&&(h.current=D,p(D)))}});C2(n,$,L,R)}function XL({preventDefaultWheelX:e,preventDefaultWheelY:t}){const n=b.useRef(null),r=pe(i=>{const o=Math.abs(i.deltaX)>Math.abs(i.deltaY);(o&&e||!o&&t||i.ctrlKey)&&i.preventDefault()});return b.useCallback(i=>{var o;i?i.addEventListener("wheel",r,{passive:!1}):(o=n.current)===null||o===void 0||o.removeEventListener("wheel",r),n.current=i},[r])}function KL(e,t,n,r,i,o,a,l,s){const u=b.useRef(0),d=b.useRef(0),c=b.useRef(void 0),y=b.useRef(void 0),p=b.useRef(0),m=b.useRef(void 0),v=b.useRef(0),{setTimeout:w,clearTimeout:h}=vc(),g=b.useCallback(()=>{c.current&&(h(c.current),c.current=void 0)},[h]),x=b.useCallback(()=>{y.current&&(h(y.current),y.current=void 0)},[h]),S=pe(()=>{e!==it.SWIPE&&(u.current=0,v.current=0,g(),x())});b.useEffect(S,[e,S]);const T=pe(C=>{y.current=void 0,u.current===C&&s(u.current)}),k=pe(C=>{if(C.ctrlKey||Math.abs(C.deltaY)>Math.abs(C.deltaX))return;const _=$=>{p.current=$,h(m.current),m.current=$>0?w(()=>{p.current=0,m.current=void 0},300):void 0};if(e===it.NONE){if(Math.abs(C.deltaX)<=1.2*Math.abs(p.current)){_(C.deltaX);return}if(!n(-C.deltaX))return;if(d.current+=C.deltaX,g(),Math.abs(d.current)>30)d.current=0,_(0),v.current=Date.now(),o();else{const $=d.current;c.current=w(()=>{c.current=void 0,$===d.current&&(d.current=0)},i)}}else if(e===it.SWIPE){let $=u.current-C.deltaX;if($=Math.min(Math.abs($),r)*Math.sign($),u.current=$,a($),x(),Math.abs($)>.2*r){_(C.deltaX),l($,Date.now()-v.current);return}y.current=w(()=>T($),2*i)}else _(C.deltaX)});b.useEffect(()=>t(_m,k),[t,k])}const Uv=Cm("container"),E2=b.createContext(null),er=Jn("useController","ControllerContext",E2);function QL({children:e,...t}){var n;const{carousel:r,animation:i,controller:o,on:a,styles:l,render:s}=t,{closeOnPullUp:u,closeOnPullDown:d,preventDefaultWheelX:c,preventDefaultWheelY:y}=o,[p,m]=b.useState(),v=Mr(),w=DL(),[h,g]=b.useState(it.NONE),x=b.useRef(0),S=b.useRef(0),T=b.useRef(1),{registerSensors:k,subscribeSensors:C}=GL(),{subscribe:_,publish:$}=gc(),M=tl(),R=tl(),L=tl(),{containerRef:j,setContainerRef:F,containerRect:A}=_2(),O=Op(XL({preventDefaultWheelX:c,preventDefaultWheelY:y}),F),D=b.useRef(null),P=Op(D,void 0),{getOwnerDocument:I}=mc(),z=$m(),B=G=>(z?-1:1)*(typeof G=="number"?G:1),N=pe(()=>{var G;return(G=j.current)===null||G===void 0?void 0:G.focus()}),U=pe(()=>t),H=pe(()=>v),q=b.useCallback(G=>$(Fr,G),[$]),X=b.useCallback(G=>$(zr,G),[$]),ee=b.useCallback(()=>$(ro),[$]),fe=G=>!(r.finite&&(B(G)>0&&v.currentIndex===0||B(G)<0&&v.currentIndex===v.slides.length-1)),be=G=>{var we;x.current=G,(we=j.current)===null||we===void 0||we.style.setProperty(bt("swipe_offset"),`${Math.round(G)}px`)},ie=G=>{var we,ut;S.current=G,T.current=(()=>{const So=(()=>d&&G>0?G:u&&G<0?-G:0)();return Math.min(Math.max(Tm(1-So/60*(1-.5),2),.5),1)})(),(we=j.current)===null||we===void 0||we.style.setProperty(bt("pull_offset"),`${Math.round(G)}px`),(ut=j.current)===null||ut===void 0||ut.style.setProperty(bt("pull_opacity"),`${T.current}`)},{prepareAnimation:Me}=Nv(D,(G,we,ut)=>{if(D.current&&A)return{keyframes:[{transform:`translate(0, ${G.rect.y-we.y+ut.y}px)`,opacity:G.opacity},{transform:"translate(0, 0)",opacity:1}],duration:G.duration,easing:i.easing.fade}}),Be=(G,we)=>{if(u||d){ie(G);let ut=0;D.current&&(ut=i.fade*(we?2:1),Me({rect:D.current.getBoundingClientRect(),opacity:T.current,duration:ut})),L(()=>{ie(0),g(it.NONE)},ut),g(it.ANIMATION),we||ee()}},{prepareAnimation:Ve,isAnimationPlaying:si}=Nv(D,(G,we,ut)=>{var hn;if(D.current&&A&&(!((hn=v.animation)===null||hn===void 0)&&hn.duration)){const Vt=Kl(r.spacing),So=(Vt.percent?Vt.percent*A.width/100:Vt.pixel)||0;return{keyframes:[{transform:`translate(${B(v.globalIndex-G.index)*(A.width+So)+G.rect.x-we.x+ut.x}px, 0)`},{transform:"translate(0, 0)"}],duration:v.animation.duration,easing:v.animation.easing}}}),yt=pe(G=>{var we,ut;const hn=G.offset||0,Vt=hn?i.swipe:(we=i.navigation)!==null&&we!==void 0?we:i.swipe,So=!hn&&!si()?i.easing.navigation:i.easing.swipe;let{direction:Za}=G;const Ja=(ut=G.count)!==null&&ut!==void 0?ut:1;let _c=it.ANIMATION,mn=Vt*Ja;if(!Za){const _o=A==null?void 0:A.width,Qm=G.duration||0,Ec=_o?Vt/_o*Math.abs(hn):Vt;Ja!==0?(Qm<Ec?mn=mn/Ec*Math.max(Qm,Ec/5):_o&&(mn=Vt/_o*(_o-Math.abs(hn))),Za=B(hn)>0?Fr:zr):mn=Vt/2}let Cc=0;Za===Fr?fe(B(1))?Cc=-Ja:(_c=it.NONE,mn=Vt):Za===zr&&(fe(B(-1))?Cc=Ja:(_c=it.NONE,mn=Vt)),mn=Math.round(mn),R(()=>{be(0),g(it.NONE)},mn),D.current&&Ve({rect:D.current.getBoundingClientRect(),index:v.globalIndex}),g(_c),$(Fv,{type:"swipe",increment:Cc,duration:mn,easing:So})});b.useEffect(()=>{var G,we;!((G=v.animation)===null||G===void 0)&&G.increment&&(!((we=v.animation)===null||we===void 0)&&we.duration)&&M(()=>w({type:"swipe",increment:0}),v.animation.duration)},[v.animation,w,M]);const bo=[C,fe,(A==null?void 0:A.width)||0,i.swipe,()=>g(it.SWIPE),G=>be(G),(G,we)=>yt({offset:G,duration:we,count:1}),G=>yt({offset:G,count:0})],Qa=[()=>{d&&g(it.PULL)},G=>ie(G),G=>Be(G),G=>Be(G,!0)];YL(o,...bo,u,d,...Qa,ee),KL(h,...bo);const wo=pe(()=>{o.focus&&I().querySelector(`.${ae(xm)} .${ae(Uv())}`)&&N()});b.useEffect(wo,[wo]);const Km=pe(()=>{var G;(G=a.view)===null||G===void 0||G.call(a,{index:v.currentIndex})});b.useEffect(Km,[v.globalIndex,Km]),b.useEffect(()=>Em(_(Fr,G=>yt({direction:Fr,...G})),_(zr,G=>yt({direction:zr,...G})),_(Fv,G=>w(G))),[_,yt,w]);const w_=b.useMemo(()=>({prev:q,next:X,close:ee,focus:N,slideRect:A?wL(A,r.padding):{width:0,height:0},containerRect:A||{width:0,height:0},subscribeSensors:C,containerRef:j,setCarouselRef:P,toolbarWidth:p,setToolbarWidth:m}),[q,X,ee,N,C,A,j,P,p,m,r.padding]);return b.useImperativeHandle(o.ref,()=>({prev:q,next:X,close:ee,focus:N,getLightboxProps:U,getLightboxState:H}),[q,X,ee,N,U,H]),b.createElement("div",{ref:O,className:Tn(ae(Uv()),ae(bm)),style:{...h===it.SWIPE?{[bt("swipe_offset")]:`${Math.round(x.current)}px`}:null,...h===it.PULL?{[bt("pull_offset")]:`${Math.round(S.current)}px`,[bt("pull_opacity")]:`${T.current}`}:null,...o.touchAction!=="none"?{[bt("controller_touch_action")]:o.touchAction}:null,...l.container},tabIndex:-1,...k},A&&b.createElement(E2.Provider,{value:w_},e,(n=s.controls)===null||n===void 0?void 0:n.call(s)))}const ZL=jr(e2,QL);function $r(e){return Ka(JS,e)}function Hv(e){return Ka(wm,e)}function JL({slide:e,offset:t}){const n=b.useRef(null),{currentIndex:r,slides:i}=Mr(),{slideRect:o,focus:a}=er(),{render:l,carousel:{imageFit:s,imageProps:u},on:{click:d},styles:{slide:c},labels:y}=Kt(),{getOwnerDocument:p}=mc(),m=t!==0;b.useEffect(()=>{var w;m&&(!((w=n.current)===null||w===void 0)&&w.contains(p().activeElement))&&a()},[m,a,p]);const v=()=>{var w,h,g,x;let S=(w=l.slide)===null||w===void 0?void 0:w.call(l,{slide:e,offset:t,rect:o});return!S&&xo(e)&&(S=b.createElement(Ql,{slide:e,offset:t,render:l,rect:o,imageFit:s,imageProps:u,onClick:m?void 0:()=>d==null?void 0:d({index:r})})),S?b.createElement(b.Fragment,null,(h=l.slideHeader)===null||h===void 0?void 0:h.call(l,{slide:e}),((g=l.slideContainer)!==null&&g!==void 0?g:({children:T})=>T)({slide:e,children:S}),(x=l.slideFooter)===null||x===void 0?void 0:x.call(l,{slide:e})):null};return b.createElement("div",{ref:n,className:Tn(ae(Hv()),!m&&ae(Hv("current")),ae(bm)),...TL(m),style:c,role:"group","aria-roledescription":io(y,"Slide"),"aria-label":bL(y,i,r+t)},v())}function e6(){const e=Kt().styles.slide;return b.createElement("div",{className:ae(wm),style:e})}function t6({carousel:e,labels:t}){const{slides:n,currentIndex:r,globalIndex:i}=Mr(),{setCarouselRef:o}=er(),{autoPlaying:a,focusWithin:l}=g2(),s=Kl(e.spacing),u=Kl(e.padding),d=EL(e,n,1),c=[];if(f2(n))for(let y=r-d;y<=r+d;y+=1){const p=p2(n,y),m=i-r+y,v=e.finite&&(y<0||y>n.length-1);c.push(v?{key:m}:{key:[`${m}`,_L(p)].filter(Boolean).join("|"),offset:y-r,slide:p})}return b.createElement("div",{ref:o,className:Tn(ae($r()),c.length>0&&ae($r("with_slides"))),style:{[`${bt($r("slides_count"))}`]:c.length,[`${bt($r("spacing_px"))}`]:s.pixel||0,[`${bt($r("spacing_percent"))}`]:s.percent||0,[`${bt($r("padding_px"))}`]:u.pixel||0,[`${bt($r("padding_percent"))}`]:u.percent||0},role:"region","aria-live":a&&!l?"off":"polite","aria-roledescription":io(t,"Carousel"),"aria-label":io(t,"Photo gallery")},c.map(({key:y,slide:p,offset:m})=>p?b.createElement(JL,{key:y,slide:p,offset:m}):b.createElement(e6,{key:y})))}const n6=jr(JS,t6);function k2(){const{carousel:e}=Kt(),{slides:t,currentIndex:n}=Mr(),r=t.length===0||e.finite&&n===0,i=t.length===0||e.finite&&n===t.length-1;return{prevDisabled:r,nextDisabled:i}}function r6(e){var t;const n=$m(),{publish:r}=gc(),{animation:i}=Kt(),{prevDisabled:o,nextDisabled:a}=k2(),l=((t=i.navigation)!==null&&t!==void 0?t:i.swipe)/2,s=Vv(()=>r(Fr),l),u=Vv(()=>r(zr),l),d=pe(c=>{switch(c.key){case gL:r(ro);break;case vL:(n?a:o)||(n?u:s)();break;case yL:(n?o:a)||(n?s:u)();break}});b.useEffect(()=>e(Sm,d),[e,d])}function Wv({label:e,icon:t,renderIcon:n,action:r,onClick:i,disabled:o,style:a}){return b.createElement(jm,{label:e,icon:t,renderIcon:n,className:ae(`navigation_${r}`),disabled:o,onClick:i,style:a,...WL(er().focus,o)})}function i6({render:{buttonPrev:e,buttonNext:t,iconPrev:n,iconNext:r},styles:i}){const{prev:o,next:a,subscribeSensors:l}=er(),{prevDisabled:s,nextDisabled:u}=k2();return r6(l),b.createElement(b.Fragment,null,e?e():b.createElement(Wv,{label:"Previous",action:Fr,icon:NL,renderIcon:n,style:i.navigationPrev,disabled:s,onClick:o}),t?t():b.createElement(Wv,{label:"Next",action:zr,icon:BL,renderIcon:r,style:i.navigationNext,disabled:u,onClick:a}))}const o6=jr(sL,i6),Gv=ae(pL),a6=ae(n2);function s6(e){return"style"in e}function qv(e,t,n){const r=window.getComputedStyle(e),i=n?"padding-left":"padding-right",o=n?r.paddingLeft:r.paddingRight,a=e.style.getPropertyValue(i);return e.style.setProperty(i,`${(hc(o)||0)+t}px`),()=>{a?e.style.setProperty(i,a):e.style.removeProperty(i)}}function l6({noScroll:{disabled:e},children:t}){const n=$m(),{getOwnerDocument:r,getOwnerWindow:i}=mc();return b.useEffect(()=>{if(e)return()=>{};const o=[],a=i(),{body:l,documentElement:s}=r(),u=Math.round(a.innerWidth-s.clientWidth);if(u>0){o.push(qv(l,u,n));const d=l.getElementsByTagName("*");for(let c=0;c<d.length;c+=1){const y=d[c];s6(y)&&a.getComputedStyle(y).getPropertyValue("position")==="fixed"&&!y.classList.contains(a6)&&o.push(qv(y,u,n))}}return l.classList.add(Gv),()=>{l.classList.remove(Gv),o.forEach(d=>d())}},[n,e,r,i]),b.createElement(b.Fragment,null,t)}const u6=jr(lL,l6);function Yv(e){return Ka(xm,e)}function Xv(e,t,n){const r=e.getAttribute(t);return e.setAttribute(t,n),()=>{r?e.setAttribute(t,r):e.removeAttribute(t)}}function c6({children:e,animation:t,styles:n,className:r,on:i,portal:o,close:a,labels:l}){const[s,u]=b.useState(!1),[d,c]=b.useState(!1),y=b.useRef([]),p=b.useRef(null),{setTimeout:m}=vc(),{subscribe:v}=gc(),h=Mm()?0:t.fade;b.useEffect(()=>(u(!0),()=>{u(!1),c(!1)}),[]);const g=pe(()=>{y.current.forEach(k=>k()),y.current=[]}),x=pe(()=>{var k;c(!1),g(),(k=i.exiting)===null||k===void 0||k.call(i),m(()=>{var C;(C=i.exited)===null||C===void 0||C.call(i),a()},h)});b.useEffect(()=>v(ro,x),[v,x]);const S=pe(k=>{var C,_,$;PL(k),c(!0),(C=i.entering)===null||C===void 0||C.call(i);const M=($=(_=k.parentNode)===null||_===void 0?void 0:_.children)!==null&&$!==void 0?$:[];for(let R=0;R<M.length;R+=1){const L=M[R];["TEMPLATE","SCRIPT","STYLE"].indexOf(L.tagName)===-1&&L!==k&&(y.current.push(Xv(L,"inert","")),y.current.push(Xv(L,"aria-hidden","true")))}y.current.push(()=>{var R,L;(L=(R=p.current)===null||R===void 0?void 0:R.focus)===null||L===void 0||L.call(R)}),m(()=>{var R;(R=i.entered)===null||R===void 0||R.call(i)},h)}),T=b.useCallback(k=>{k?S(k):g()},[S,g]);return s?Su.createPortal(b.createElement(qL,{ref:T,className:Tn(r,ae(Yv()),ae(n2),d&&ae(Yv("open"))),"aria-modal":!0,role:"dialog","aria-label":io(l,"Lightbox"),style:{...t.fade!==Pp.animation.fade?{[bt("fade_animation_duration")]:`${h}ms`}:null,...t.easing.fade!==Pp.animation.easing.fade?{[bt("fade_animation_timing_function")]:t.easing.fade}:null,...n.root},onFocus:k=>{p.current||(p.current=k.relatedTarget)}},e),o.root||document.body):null}const d6=jr(xm,c6);function f6({children:e}){return b.createElement(b.Fragment,null,e)}const p6=jr(uL,f6);function h6(e){return Ka(t2,e)}function m6({toolbar:{buttons:e},render:{buttonClose:t,iconClose:n},styles:r}){const{close:i,setToolbarWidth:o}=er(),{setContainerRef:a,containerRect:l}=_2();Pn(()=>{o(l==null?void 0:l.width)},[o,l==null?void 0:l.width]);const s=()=>t?t():b.createElement(jm,{key:ro,label:"Close",icon:zL,renderIcon:n,onClick:i});return b.createElement("div",{ref:a,style:r.toolbar,className:ae(h6())},e==null?void 0:e.map(u=>u===ro?s():u))}const g6=jr(t2,m6);function T2(e,t){var n;return b.createElement(e.module.component,{key:e.module.name,...t},(n=e.children)===null||n===void 0?void 0:n.map(r=>T2(r,t)))}function v6(e,t={}){const{easing:n,...r}=e,{easing:i,...o}=t;return{easing:{...n,...i},...r,...o}}function y6({carousel:e,animation:t,render:n,toolbar:r,controller:i,noScroll:o,on:a,plugins:l,slides:s,index:u,...d}){const{animation:c,carousel:y,render:p,toolbar:m,controller:v,noScroll:w,on:h,slides:g,index:x,plugins:S,...T}=Pp,{config:k,augmentation:C}=OL([Ue(d6,[Ue(u6,[Ue(ZL,[Ue(n6),Ue(g6),Ue(o6)])])])],l||S),_=C({animation:v6(c,t),carousel:{...y,...e},render:{...p,...n},toolbar:{...m,...r},controller:{...v,...i},noScroll:{...w,...o},on:{...h,...a},...T,...d});return _.open?b.createElement(IL,{..._},b.createElement(AL,{slides:s||g,index:hc(u||x)},b.createElement(RL,null,b.createElement($L,null,b.createElement(jL,null,T2(Ue(p6,k),_)))))):null}const x6={minZoom:1,maxZoomPixelRatio:1,zoomInMultiplier:2,doubleTapDelay:300,doubleClickDelay:500,doubleClickMaxStops:2,keyboardMoveDistance:50,wheelZoomDistanceFactor:100,pinchZoomDistanceFactor:100,pinchZoomV4:!1,scrollToZoom:!1};function b6(e){return Math.min(Math.max(e,Number.EPSILON),1)}function P2(e){const{minZoom:t,...n}={...x6,...e};return{minZoom:b6(t),...n}}function w6(e,t,n,r){const i=b.useRef(void 0),o=b.useRef(void 0),{zoom:a}=Kt().animation,l=Mm(),s=pe(()=>{var u,d,c;if((u=i.current)===null||u===void 0||u.cancel(),i.current=void 0,o.current&&(r!=null&&r.current)){try{i.current=(c=(d=r.current).animate)===null||c===void 0?void 0:c.call(d,[{transform:o.current},{transform:`scale(${e}) translateX(${t}px) translateY(${n}px)`}],{duration:l?0:a??500,easing:i.current?"ease-out":"ease-in-out"})}catch(y){console.error(y)}o.current=void 0,i.current&&(i.current.onfinish=()=>{i.current=void 0})}});return Pn(s,[e,t,n,s]),b.useCallback(()=>{o.current=r!=null&&r.current?window.getComputedStyle(r.current).transform:void 0},[r])}function S6(e,t){const{on:n}=Kt(),r=pe(()=>{var i;t||(i=n.zoom)===null||i===void 0||i.call(n,{zoom:e})});b.useEffect(r,[e,r])}function yc(){const{zoom:e}=Kt();return P2(e)}function _6(e,t){var n,r;let i={width:0,height:0},o={width:0,height:0};const{currentSlide:a}=Mr(),{imageFit:l}=Kt().carousel,{maxZoomPixelRatio:s}=yc();if(e&&a){const d={...a,...t};if(xo(d)){const c=Pm(d,l),y=Math.max(...(((n=d.srcSet)===null||n===void 0?void 0:n.map(m=>m.width))||[]).concat(d.width?[d.width]:[])),p=Math.max(...(((r=d.srcSet)===null||r===void 0?void 0:r.map(m=>m.height))||[]).concat(d.height?[d.height]:[]));y>0&&p>0&&e.width>0&&e.height>0&&(o=c?{width:Math.round(Math.min(y,e.width/e.height*p)),height:Math.round(Math.min(p,e.height/e.width*y))}:{width:y,height:p},o={width:o.width*s,height:o.height*s},i=c?{width:Math.min(e.width,o.width,y),height:Math.min(e.height,o.height,p)}:{width:Math.round(Math.min(e.width,e.height/p*y,y)),height:Math.round(Math.min(e.height,e.width/y*p,p))})}}const u=i.width?Math.max(Tm(o.width/i.width,5),1):1;return{imageRect:i,maxZoom:u}}function Kv(e,t){return Math.hypot(e.clientX-t.clientX,e.clientY-t.clientY)}function Qv(e,t,n=100,r=2){return e*Math.min(1+Math.abs(t/n),r)**Math.sign(t)}function C6(e,t,n,r,i,o,a,l,s){const u=b.useRef([]),d=b.useRef(0),c=b.useRef(void 0),{globalIndex:y}=Mr(),{getOwnerWindow:p}=mc(),{containerRef:m,subscribeSensors:v}=er(),{keyboardMoveDistance:w,zoomInMultiplier:h,wheelZoomDistanceFactor:g,scrollToZoom:x,doubleTapDelay:S,doubleClickDelay:T,doubleClickMaxStops:k,pinchZoomDistanceFactor:C,pinchZoomV4:_}=yc(),$=b.useCallback(P=>{if(m.current){const{pageX:I,pageY:z}=P,{scrollX:B,scrollY:N}=p(),{left:U,top:H,width:q,height:X}=m.current.getBoundingClientRect();return[I-U-B-q/2,z-H-N-X/2]}return[]},[m,p]),M=pe(P=>{const{key:I,metaKey:z,ctrlKey:B}=P,N=z||B,U=()=>{P.preventDefault(),P.stopPropagation()};if(e>1){const H=(q,X)=>{U(),l(q,X)};I==="ArrowDown"?H(0,w):I==="ArrowUp"?H(0,-w):I==="ArrowLeft"?H(-w,0):I==="ArrowRight"&&H(w,0)}I==="+"||N&&I==="="?(U(),i()):I==="-"||N&&I==="_"?(U(),o()):N&&I==="0"&&(U(),a(1))}),R=pe(P=>{if((P.ctrlKey||x)&&Math.abs(P.deltaY)>Math.abs(P.deltaX)){P.stopPropagation(),a(Qv(e,-P.deltaY,g),!0,...$(P));return}e>1&&(P.stopPropagation(),x||l(P.deltaX,P.deltaY))}),L=b.useCallback(P=>{const I=u.current;I.splice(0,I.length,...I.filter(z=>z.pointerId!==P.pointerId))},[]),j=b.useCallback(P=>{L(P),P.persist(),u.current.push(P)},[L]),F=pe(P=>{var I;const z=u.current;if(P.pointerType==="mouse"&&P.buttons>1||!(!((I=s==null?void 0:s.current)===null||I===void 0)&&I.contains(P.target)))return;e>1&&P.stopPropagation();const{timeStamp:B}=P;if(z.length===0&&B-d.current<(P.pointerType==="touch"?S:T)){d.current=0;const N=e>=1?e!==n?e*Math.max(n**(1/k),h):1:e!==t?e/Math.max(t**(-1/k),h):1;a(N,!1,...$(P))}else d.current=B;if(j(P),z.length===2){const N=Kv(z[0],z[1]);c.current={previousDistance:N,initialDistance:Math.max(N,1),initialZoom:e}}}),A=pe(P=>{const I=u.current,z=I.find(B=>B.pointerId===P.pointerId);if(I.length===2&&c.current){P.stopPropagation(),j(P);const B=Kv(I[0],I[1]),N=_?c.current.initialZoom/c.current.initialDistance*B:Qv(e,B-c.current.previousDistance,C);a(N,!0,...I.map(U=>$(U)).reduce((U,H)=>H.map((q,X)=>U[X]+q/2))),c.current.previousDistance=B;return}e>1&&(P.stopPropagation(),z&&(I.length===1&&l((z.clientX-P.clientX)/e,(z.clientY-P.clientY)/e),j(P)))}),O=b.useCallback(P=>{const I=u.current;I.length===2&&I.find(z=>z.pointerId===P.pointerId)&&(c.current=void 0),L(P)},[L]),D=b.useCallback(()=>{const P=u.current;P.splice(0,P.length),d.current=0,c.current=void 0},[]);C2(v,F,A,O,r),b.useEffect(D,[y,D]),b.useEffect(()=>r?()=>{}:Em(D,v(Sm,M),v(_m,R)),[r,v,D,M,R])}function E6(e,t,n){const[r,i]=b.useState(1),[o,a]=b.useState(0),[l,s]=b.useState(0),u=w6(r,o,l,n),{currentSlide:d,globalIndex:c}=Mr(),{containerRect:y,slideRect:p}=er(),{minZoom:m,zoomInMultiplier:v}=yc(),w=d&&xo(d)?d.src:void 0,h=!w||!(n!=null&&n.current);Pn(()=>{i(1),a(0),s(0)},[c,w]);const g=b.useCallback((C,_,$)=>{const M=$||r,R=o-(C||0),L=l-(_||0),j=(e.width*M-p.width)/2/M,F=(e.height*M-p.height)/2/M;a(Math.min(Math.abs(R),Math.max(j,0))*Math.sign(R)),s(Math.min(Math.abs(L),Math.max(F,0))*Math.sign(L))},[r,o,l,p,e.width,e.height]),x=b.useCallback((C,_,$,M)=>{const R=Tm(C+.01<t?C-.01>m?C:m:t,5);_||u(),g($?$*(1/r-1/R):0,M?M*(1/r-1/R):0,R),i(R)},[r,m,t,g,u]),S=pe(()=>{r>1&&(r>t&&x(t,!0),g())});Pn(S,[y.width,y.height,S]);const T=b.useCallback(()=>{const C=r*v;x(r<1&&C>1?1:C)},[r,v,x]),k=b.useCallback(()=>{const C=r/v;x(r>1&&C<1?1:C)},[r,v,x]);return{zoom:r,offsetX:o,offsetY:l,disabled:h,changeOffsets:g,changeZoom:x,zoomIn:T,zoomOut:k}}const O2=b.createContext(null),Im=Jn("useZoom","ZoomControllerContext",O2);function k6({children:e}){const[t,n]=b.useState(),{slideRect:r}=er(),{ref:i,minZoom:o}=yc(),{imageRect:a,maxZoom:l}=_6(r,t==null?void 0:t.imageDimensions),{zoom:s,offsetX:u,offsetY:d,disabled:c,changeZoom:y,changeOffsets:p,zoomIn:m,zoomOut:v}=E6(a,l,t==null?void 0:t.zoomWrapperRef);S6(s,c),C6(s,o,l,c,m,v,y,p,t==null?void 0:t.zoomWrapperRef);const w=b.useMemo(()=>({zoom:s,minZoom:o,maxZoom:l,offsetX:u,offsetY:d,disabled:c,zoomIn:m,zoomOut:v,changeZoom:y}),[s,o,l,u,d,c,m,v,y]);b.useImperativeHandle(i,()=>w,[w]);const h=b.useMemo(()=>({...w,setZoomWrapper:n}),[w,n]);return b.createElement(O2.Provider,{value:h},e)}const T6=ai("ZoomIn",b.createElement(b.Fragment,null,b.createElement("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}),b.createElement("path",{d:"M12 10h-2v2H9v-2H7V9h2V7h1v2h2v1z"}))),P6=ai("ZoomOut",b.createElement("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14zM7 9h5v1H7z"})),Zv=b.forwardRef(function({zoomIn:t,onLoseFocus:n},r){const i=b.useRef(!1),o=b.useRef(!1),{zoom:a,minZoom:l,maxZoom:s,zoomIn:u,zoomOut:d,disabled:c}=Im(),{render:y}=Kt(),p=c||(t?a>=s:a<=l);return b.useEffect(()=>{p&&i.current&&o.current&&n(),p||(i.current=!0)},[p,n]),b.createElement(jm,{ref:r,disabled:p,label:t?"Zoom in":"Zoom out",icon:t?T6:P6,renderIcon:t?y.iconZoomIn:y.iconZoomOut,onClick:t?u:d,onFocus:()=>{o.current=!0},onBlur:()=>{o.current=!1}})});function O6(){const e=b.useRef(null),t=b.useRef(null),{focus:n}=er(),r=b.useCallback(a=>{var l,s;!((l=a.current)===null||l===void 0)&&l.disabled?n():(s=a.current)===null||s===void 0||s.focus()},[n]),i=b.useCallback(()=>r(e),[r]),o=b.useCallback(()=>r(t),[r]);return b.createElement(b.Fragment,null,b.createElement(Zv,{zoomIn:!0,ref:e,onLoseFocus:o}),b.createElement(Zv,{ref:t,onLoseFocus:i}))}function j6(){const{render:e}=Kt(),t=Im();return e.buttonZoom?b.createElement(b.Fragment,null,e.buttonZoom(t)):b.createElement(O6,null)}function M6(e){var t;return(((t=e.srcSet)===null||t===void 0?void 0:t.length)||0)>0}function $6({current:e,preload:t},{type:n,source:r}){switch(n){case"fetch":return e?{current:e,preload:r}:{current:r};case"done":return r===t?{current:r}:{current:e,preload:t};default:throw new Error(c2)}}function I6(e){var t,n;const[{current:r,preload:i},o]=b.useReducer($6,{}),{slide:a,rect:l,imageFit:s,render:u,interactive:d}=e,c=a.srcSet.sort((T,k)=>T.width-k.width),y=(t=a.width)!==null&&t!==void 0?t:c[c.length-1].width,p=(n=a.height)!==null&&n!==void 0?n:c[c.length-1].height,m=Pm(a,s),v=Math.max(...c.map(T=>T.width)),w=Math.min((m?Math.max:Math.min)(l.width,y*(l.height/p)),v),h=SL(),g=pe(()=>{var T;const k=(T=c.find(C=>C.width>=w*h))!==null&&T!==void 0?T:c[c.length-1];(!r||c.findIndex(C=>C.src===r)<c.findIndex(C=>C===k))&&o({type:"fetch",source:k.src})});Pn(g,[l.width,l.height,h,g]);const x=pe(T=>o({type:"done",source:T})),S={WebkitTransform:d?"initial":"translateZ(0)"};return m||Object.assign(S,l.width/l.height<y/p?{width:"100%",height:"auto"}:{width:"auto",height:"100%"}),b.createElement(b.Fragment,null,i&&i!==r&&b.createElement(Ql,{key:"preload",...e,offset:void 0,slide:{...a,src:i,srcSet:void 0},style:{position:"absolute",visibility:"hidden",...S},onLoad:()=>x(i),render:{...u,iconLoading:()=>null,iconError:()=>null}}),r&&b.createElement(Ql,{key:"current",...e,slide:{...a,src:r,srcSet:void 0},style:S}))}function D6({render:e,slide:t,offset:n,rect:r}){var i;const[o,a]=b.useState(),l=b.useRef(null),{zoom:s,maxZoom:u,offsetX:d,offsetY:c,setZoomWrapper:y}=Im(),p=s>1,{carousel:m,on:v}=Kt(),{currentIndex:w}=Mr();Pn(()=>n===0?(y({zoomWrapperRef:l,imageDimensions:o}),()=>y(void 0)):()=>{},[n,o,y]);let h=(i=e.slide)===null||i===void 0?void 0:i.call(e,{slide:t,offset:n,rect:r,zoom:s,maxZoom:u});if(!h&&xo(t)){const g={slide:t,offset:n,rect:r,render:e,imageFit:m.imageFit,imageProps:m.imageProps,onClick:n===0?()=>{var x;return(x=v.click)===null||x===void 0?void 0:x.call(v,{index:w})}:void 0};h=M6(t)?b.createElement(I6,{...g,slide:t,interactive:p,rect:n===0?{width:r.width*s,height:r.height*s}:r}):b.createElement(Ql,{onLoad:x=>a({width:x.naturalWidth,height:x.naturalHeight}),...g})}return h?b.createElement("div",{ref:l,className:Tn(ae(fL),ae(bm),ae(r2),p&&ae(hL)),style:n===0?{transform:`scale(${s}) translateX(${d}px) translateY(${c}px)`}:void 0},h):null}const L6=({augment:e,addModule:t})=>{e(({zoom:n,toolbar:r,render:i,controller:o,...a})=>{const l=P2(n);return{zoom:l,toolbar:CL(r,Rv,b.createElement(j6,null)),render:{...i,slide:s=>{var u;return xo(s.slide)?b.createElement(D6,{render:i,...s}):(u=i.slide)===null||u===void 0?void 0:u.call(i,s)}},controller:{...o,preventDefaultWheelY:l.scrollToZoom},...a}}),t(jr(Rv,k6))};var j2={exports:{}};(function(e,t){(function(n,r){e.exports=r()})(te,function(){var n=1e3,r=6e4,i=36e5,o="millisecond",a="second",l="minute",s="hour",u="day",d="week",c="month",y="quarter",p="year",m="date",v="Invalid Date",w=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,h=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,g={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(F){var A=["th","st","nd","rd"],O=F%100;return"["+F+(A[(O-20)%10]||A[O]||A[0])+"]"}},x=function(F,A,O){var D=String(F);return!D||D.length>=A?F:""+Array(A+1-D.length).join(O)+F},S={s:x,z:function(F){var A=-F.utcOffset(),O=Math.abs(A),D=Math.floor(O/60),P=O%60;return(A<=0?"+":"-")+x(D,2,"0")+":"+x(P,2,"0")},m:function F(A,O){if(A.date()<O.date())return-F(O,A);var D=12*(O.year()-A.year())+(O.month()-A.month()),P=A.clone().add(D,c),I=O-P<0,z=A.clone().add(D+(I?-1:1),c);return+(-(D+(O-P)/(I?P-z:z-P))||0)},a:function(F){return F<0?Math.ceil(F)||0:Math.floor(F)},p:function(F){return{M:c,y:p,w:d,d:u,D:m,h:s,m:l,s:a,ms:o,Q:y}[F]||String(F||"").toLowerCase().replace(/s$/,"")},u:function(F){return F===void 0}},T="en",k={};k[T]=g;var C="$isDayjsObject",_=function(F){return F instanceof L||!(!F||!F[C])},$=function F(A,O,D){var P;if(!A)return T;if(typeof A=="string"){var I=A.toLowerCase();k[I]&&(P=I),O&&(k[I]=O,P=I);var z=A.split("-");if(!P&&z.length>1)return F(z[0])}else{var B=A.name;k[B]=A,P=B}return!D&&P&&(T=P),P||!D&&T},M=function(F,A){if(_(F))return F.clone();var O=typeof A=="object"?A:{};return O.date=F,O.args=arguments,new L(O)},R=S;R.l=$,R.i=_,R.w=function(F,A){return M(F,{locale:A.$L,utc:A.$u,x:A.$x,$offset:A.$offset})};var L=function(){function F(O){this.$L=$(O.locale,null,!0),this.parse(O),this.$x=this.$x||O.x||{},this[C]=!0}var A=F.prototype;return A.parse=function(O){this.$d=function(D){var P=D.date,I=D.utc;if(P===null)return new Date(NaN);if(R.u(P))return new Date;if(P instanceof Date)return new Date(P);if(typeof P=="string"&&!/Z$/i.test(P)){var z=P.match(w);if(z){var B=z[2]-1||0,N=(z[7]||"0").substring(0,3);return I?new Date(Date.UTC(z[1],B,z[3]||1,z[4]||0,z[5]||0,z[6]||0,N)):new Date(z[1],B,z[3]||1,z[4]||0,z[5]||0,z[6]||0,N)}}return new Date(P)}(O),this.init()},A.init=function(){var O=this.$d;this.$y=O.getFullYear(),this.$M=O.getMonth(),this.$D=O.getDate(),this.$W=O.getDay(),this.$H=O.getHours(),this.$m=O.getMinutes(),this.$s=O.getSeconds(),this.$ms=O.getMilliseconds()},A.$utils=function(){return R},A.isValid=function(){return this.$d.toString()!==v},A.isSame=function(O,D){var P=M(O);return this.startOf(D)<=P&&P<=this.endOf(D)},A.isAfter=function(O,D){return M(O)<this.startOf(D)},A.isBefore=function(O,D){return this.endOf(D)<M(O)},A.$g=function(O,D,P){return R.u(O)?this[D]:this.set(P,O)},A.unix=function(){return Math.floor(this.valueOf()/1e3)},A.valueOf=function(){return this.$d.getTime()},A.startOf=function(O,D){var P=this,I=!!R.u(D)||D,z=R.p(O),B=function(be,ie){var Me=R.w(P.$u?Date.UTC(P.$y,ie,be):new Date(P.$y,ie,be),P);return I?Me:Me.endOf(u)},N=function(be,ie){return R.w(P.toDate()[be].apply(P.toDate("s"),(I?[0,0,0,0]:[23,59,59,999]).slice(ie)),P)},U=this.$W,H=this.$M,q=this.$D,X="set"+(this.$u?"UTC":"");switch(z){case p:return I?B(1,0):B(31,11);case c:return I?B(1,H):B(0,H+1);case d:var ee=this.$locale().weekStart||0,fe=(U<ee?U+7:U)-ee;return B(I?q-fe:q+(6-fe),H);case u:case m:return N(X+"Hours",0);case s:return N(X+"Minutes",1);case l:return N(X+"Seconds",2);case a:return N(X+"Milliseconds",3);default:return this.clone()}},A.endOf=function(O){return this.startOf(O,!1)},A.$set=function(O,D){var P,I=R.p(O),z="set"+(this.$u?"UTC":""),B=(P={},P[u]=z+"Date",P[m]=z+"Date",P[c]=z+"Month",P[p]=z+"FullYear",P[s]=z+"Hours",P[l]=z+"Minutes",P[a]=z+"Seconds",P[o]=z+"Milliseconds",P)[I],N=I===u?this.$D+(D-this.$W):D;if(I===c||I===p){var U=this.clone().set(m,1);U.$d[B](N),U.init(),this.$d=U.set(m,Math.min(this.$D,U.daysInMonth())).$d}else B&&this.$d[B](N);return this.init(),this},A.set=function(O,D){return this.clone().$set(O,D)},A.get=function(O){return this[R.p(O)]()},A.add=function(O,D){var P,I=this;O=Number(O);var z=R.p(D),B=function(H){var q=M(I);return R.w(q.date(q.date()+Math.round(H*O)),I)};if(z===c)return this.set(c,this.$M+O);if(z===p)return this.set(p,this.$y+O);if(z===u)return B(1);if(z===d)return B(7);var N=(P={},P[l]=r,P[s]=i,P[a]=n,P)[z]||1,U=this.$d.getTime()+O*N;return R.w(U,this)},A.subtract=function(O,D){return this.add(-1*O,D)},A.format=function(O){var D=this,P=this.$locale();if(!this.isValid())return P.invalidDate||v;var I=O||"YYYY-MM-DDTHH:mm:ssZ",z=R.z(this),B=this.$H,N=this.$m,U=this.$M,H=P.weekdays,q=P.months,X=P.meridiem,ee=function(ie,Me,Be,Ve){return ie&&(ie[Me]||ie(D,I))||Be[Me].slice(0,Ve)},fe=function(ie){return R.s(B%12||12,ie,"0")},be=X||function(ie,Me,Be){var Ve=ie<12?"AM":"PM";return Be?Ve.toLowerCase():Ve};return I.replace(h,function(ie,Me){return Me||function(Be){switch(Be){case"YY":return String(D.$y).slice(-2);case"YYYY":return R.s(D.$y,4,"0");case"M":return U+1;case"MM":return R.s(U+1,2,"0");case"MMM":return ee(P.monthsShort,U,q,3);case"MMMM":return ee(q,U);case"D":return D.$D;case"DD":return R.s(D.$D,2,"0");case"d":return String(D.$W);case"dd":return ee(P.weekdaysMin,D.$W,H,2);case"ddd":return ee(P.weekdaysShort,D.$W,H,3);case"dddd":return H[D.$W];case"H":return String(B);case"HH":return R.s(B,2,"0");case"h":return fe(1);case"hh":return fe(2);case"a":return be(B,N,!0);case"A":return be(B,N,!1);case"m":return String(N);case"mm":return R.s(N,2,"0");case"s":return String(D.$s);case"ss":return R.s(D.$s,2,"0");case"SSS":return R.s(D.$ms,3,"0");case"Z":return z}return null}(ie)||z.replace(":","")})},A.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},A.diff=function(O,D,P){var I,z=this,B=R.p(D),N=M(O),U=(N.utcOffset()-this.utcOffset())*r,H=this-N,q=function(){return R.m(z,N)};switch(B){case p:I=q()/12;break;case c:I=q();break;case y:I=q()/3;break;case d:I=(H-U)/6048e5;break;case u:I=(H-U)/864e5;break;case s:I=H/i;break;case l:I=H/r;break;case a:I=H/n;break;default:I=H}return P?I:R.a(I)},A.daysInMonth=function(){return this.endOf(c).$D},A.$locale=function(){return k[this.$L]},A.locale=function(O,D){if(!O)return this.$L;var P=this.clone(),I=$(O,D,!0);return I&&(P.$L=I),P},A.clone=function(){return R.w(this.$d,this)},A.toDate=function(){return new Date(this.valueOf())},A.toJSON=function(){return this.isValid()?this.toISOString():null},A.toISOString=function(){return this.$d.toISOString()},A.toString=function(){return this.$d.toUTCString()},F}(),j=L.prototype;return M.prototype=j,[["$ms",o],["$s",a],["$m",l],["$H",s],["$W",u],["$M",c],["$y",p],["$D",m]].forEach(function(F){j[F[1]]=function(A){return this.$g(A,F[0],F[1])}}),M.extend=function(F,A){return F.$i||(F(A,L,M),F.$i=!0),M},M.locale=$,M.isDayjs=_,M.unix=function(F){return M(1e3*F)},M.en=k[T],M.Ls=k,M.p={},M})})(j2);var A6=j2.exports;const Jv=zp(A6),R6=E.div`
  /* max-width: 800px; */
  margin: 20px auto;

  font-family: var(--second-font);
`;E.h3`
  font-size: 18px;
  color: #4a3632; // Темний колір з твого футера
  margin-bottom: 20px;
  text-transform: uppercase;
  letter-spacing: 1px;
`;const F6=E.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  background: var(--second-background);
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 40px;
`,z6=E.input`
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
`,N6=E.textarea`
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
`,B6=E.button`
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
`,V6=E.div`
  margin-top: 30px;
`,U6=E.div`
  border-bottom: 1px solid #eee;
  padding: 20px 0;
`,H6=E.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
`,W6=E.span`
  font-weight: bold;
  color: #333;
`,G6=E.span`
  font-size: 12px;
  color: #999;
`,q6=E.p`
  font-size: 15px;
  color: #555;
  margin: 5px 0;
`,Y6=E.div`
  margin-top: 15px;
  padding: 15px;
  background: var(--second-background);

  border-left: 3px solid var(--brown-color);
  font-size: 14px;
    border-radius: 0 10px 10px 0;

`,X6=E.div`
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
`,e1=({productId:e,questions:t})=>{const[n,r]=b.useState(""),[i,o]=b.useState(""),a=async l=>{l.preventDefault();const u=await fetch("https://backenddidiv-production.up.railway.app/api/questions",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({data:{question:n,userName:i,product:e}})});console.log(e),u.ok&&(K.success("Запитання надіслано! Воно з’явиться після модерації."),r(""),o(""))};return f.jsxs(R6,{children:[f.jsx(Or,{autoClose:1500}),f.jsxs(F6,{onSubmit:a,children:[f.jsx(z6,{placeholder:"Ваше ім'я",value:i,onChange:l=>o(l.target.value),required:!0}),f.jsx(N6,{placeholder:"Запитайте нас про цей товар...",value:n,onChange:l=>r(l.target.value),required:!0}),f.jsx(B6,{children:"Надіслати запитання"})]}),f.jsx(V6,{children:t&&t.length>0?t.map(l=>l.answer?f.jsxs(U6,{children:[f.jsxs(H6,{children:[f.jsx(W6,{children:l.userName||"Гість"}),f.jsx(G6,{children:new Date(l.createdAt).toLocaleDateString()})]}),f.jsx(q6,{children:l.question}),f.jsxs(Y6,{children:[f.jsx(X6,{children:"Адміністратор"}),f.jsx("p",{children:l.answer})]})]},l.id):null):f.jsx("p",{style:{textAlign:"center",color:"#999"},children:"Запитань поки немає. Будьте першим!"})})]})},K6=()=>{var A;const{id:e}=oy(),[t,n]=b.useState([]),[r,i]=b.useState(1),[o,a]=b.useState("description"),[l,s]=b.useState(null),[u,d]=b.useState(!1),[c,y]=b.useState(0);console.log("products",t);const[p,m]=b.useState(!0),v=t.find(O=>O.id===Number(e)),w=v?Jv().diff(Jv(v.createdAt),"day")<7:!1,g=(O=>{const[D,P]=b.useState(!1);return b.useEffect(()=>{const I=window.matchMedia(O),z=()=>P(I.matches);return z(),I.addEventListener("change",z),()=>I.removeEventListener("change",z)},[O]),D})("(min-width: 768px)"),x=st(O=>O.cart.items),S=v?x.find(O=>O.id===v.id):null,T=(S==null?void 0:S.quantity)||0;b.useEffect(()=>{(async()=>{try{m(!0);const P=await(await fetch(`https://backenddidiv-production.up.railway.app/api/products?filters[id][$eq]=${e}&populate=*`)).json();n(P.data)}catch(D){console.error("Error fetching products:",D)}finally{m(!1)}})()},[e]),console.log(v),b.useEffect(()=>{var O,D;v&&v.images&&s((D=(O=v.images)==null?void 0:O[0])==null?void 0:D.url)},[v]);const k=((v==null?void 0:v.images)??[]).map(O=>({src:O.url})),C=()=>{const O=v.images.findIndex(D=>D.url===l);y(O>=0?O:0),d(!0)},_=jn(),M=st(O=>O.favorites.items).some(O=>O.id===(v==null?void 0:v.id)),R=()=>{if(T>=v.stock){K.warning("Товар вже в кошику (досягнуто максимум)");return}if(T+r>v.stock){K.warning(`Доступно лише ${v.stock} шт.`);return}_(po({...v,quantity:r})),K.success(`${v.name} додано в кошик!`)},L=(O,D)=>{D.stopPropagation(),_(yo(O)),M?K.warning(`${O.name} видалено з обраного`):K.info(`${O.name} додано в обране`)},j=(v==null?void 0:v.new_price)&&(v==null?void 0:v.new_price)<v.price,F=j?Math.round((v.price-v.new_price)/v.price*100):0;return p?f.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"100vw",height:"100vh"},children:f.jsx(qa,{height:100,width:100,radius:5,color:"var(--orange-color)",ariaLabel:"ball-triangle-loading",wrapperStyle:{},wrapperClass:"",visible:!0})}):v?f.jsxs(Ov,{children:[" ",f.jsx(Or,{autoClose:1500}),f.jsxs(FD,{children:[f.jsx(Oe,{to:"/",children:"Головна"})," / ",f.jsx(Oe,{to:"/catalog",children:"Каталог"})," /"," ",v.name]}),f.jsxs(zD,{children:[f.jsxs(ND,{children:[f.jsx(BD,{src:l,alt:v.name,onClick:C}),f.jsx(VD,{children:(v.images??[]).map(O=>{const D=O.url;return f.jsx(UD,{src:D,onClick:()=>s(D),style:{cursor:"pointer",opacity:l===D?1:.4}},O.id)})})]}),f.jsx(y6,{open:u,close:()=>d(!1),index:c,slides:k,controller:{closeOnBackdropClick:!0},on:{view:({index:O})=>{var D,P;y(O),(P=(D=v==null?void 0:v.images)==null?void 0:D[O])!=null&&P.url&&s(v.images[O].url)}},plugins:[L6],zoom:{maxZoomPixelRatio:3,zoomInMultiplier:2,doubleTapDelay:300,doubleClickDelay:300,doubleClickEnabled:!0,pinchZoomDistanceFactor:100,scrollToZoom:!0}}),f.jsxs(HD,{children:[f.jsx(WD,{children:v.name}),f.jsx(GD,{children:w&&f.jsx(qD,{children:"● Новий товар"})}),f.jsxs(YD,{children:[f.jsx(XD,{children:j?f.jsxs(f.Fragment,{children:[f.jsxs(jv,{$discount:!0,children:[v.new_price.toLocaleString()," грн"]}),f.jsxs(KD,{children:[v.price.toLocaleString()," грн"]}),f.jsxs(QD,{children:["-",F,"%"]})]}):f.jsxs(jv,{children:[v.price.toLocaleString()," грн"]})}),f.jsxs(ZD,{children:[f.jsxs(JD,{children:[f.jsx("button",{onClick:()=>i(Math.max(1,r-1)),children:"-"}),f.jsx("span",{children:r}),f.jsxs(aL,{$active:r>=v.stock,children:[f.jsx("button",{onClick:()=>i(Math.min(v.stock,r+1)),disabled:r>=v.stock,children:"+"}),f.jsxs(ZS,{children:["Максимум: ",v.stock]})]})]}),f.jsxs(eL,{onClick:R,children:[" ",f.jsx(fo,{size:25}),f.jsx("span",{children:"В КОШИК"})]}),f.jsxs(iL,{$active:M,onClick:O=>L(v,O),children:[f.jsxs(oL,{$active:M,children:[" ",f.jsx("use",{href:`${cn}#icon-heart`})]}),f.jsx("span",{children:"В ОБРАНЕ"})]})]})]}),f.jsxs(nL,{children:[f.jsxs("p",{children:[f.jsx("strong",{children:"Ваше місто:"})," Київ"]}),f.jsx("p",{children:"🚚 Доставка по Україні (Розрахувати вартість)"})]})]})]}),!g&&f.jsxs(Iv,{children:[f.jsxs(Dv,{children:[f.jsx(Ro,{active:o==="description",onClick:()=>a("description"),children:"Опис"}),f.jsx(Ro,{active:o==="attributes",onClick:()=>a("attributes"),children:"Характеристики"}),f.jsx(Ro,{active:o==="FAQ",onClick:()=>a("FAQ"),children:"Питання та відповіді"})]}),f.jsxs(Lv,{children:[o==="description"&&f.jsx(Av,{children:v.description}),o==="attributes"&&f.jsx(Mv,{children:(A=v.attributes)!=null&&A.length?v.attributes.map(O=>f.jsxs($v,{children:[f.jsx("span",{children:O.label}),f.jsx("b",{children:O.value})]},O.id)):f.jsx("p",{children:"Характеристики відсутні"})}),o==="FAQ"&&f.jsx(e1,{productId:v.documentId,questions:v.questions})]})]}),g&&f.jsxs(rL,{children:[f.jsxs(Iv,{children:[f.jsxs(Dv,{children:[f.jsx(Ro,{active:o==="description",onClick:()=>a("description"),children:"Опис"}),f.jsx(Ro,{active:o==="FAQ",onClick:()=>a("FAQ"),children:"Питання та відповіді"})]}),f.jsxs(Lv,{children:[o==="description"&&f.jsx(Av,{children:v.description}),o==="FAQ"&&f.jsx(e1,{productId:v.documentId,questions:v.questions})]})]}),f.jsxs(Mv,{children:[f.jsx(tL,{children:" Характеристики"}),(()=>{const O=[...v.attributes||[],...v.features||[]];return O.length?O.map((D,P)=>f.jsxs($v,{children:[f.jsx("span",{children:D.label}),f.jsx("b",{children:D.value})]},`${D.id}-${P}`)):f.jsx("p",{children:"Характеристики відсутні"})})()]})]})]}):f.jsx(Ov,{children:"Товар не знайдено"})},Q6=E.div`
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

  
`,Z6=E.nav`
  font-family: var(--main-font);
  font-size: 14px;
  color: #8c8c8c;
  margin-bottom: 15px;
`,J6=E.h1`
  font-size:24px;
 
  font-weight: 800;
  margin-bottom: 20px;
  @media screen and (min-width: 768px) {
  font-size:30px;
  }
  
`,eA=E.div`
  display: flex;
  flex-direction: column;
  gap: 20px; 
  width: 100%;
  
  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between; 
  }
`,tA=E.div`
  flex: 1; 
  width: 100%;
  border: 1px solid #eee;
  border-radius: 12px;
`,nA=E.div`
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
`,rA=E.img`
  width: 100%;
  height: auto;
  border-radius: 4px;
`,iA=E.div`
  h3 {
    font-size: 16px;
    font-weight: 300;
    margin: 0;
    line-height: 1.4;
  }
`,oA=E.div`

  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  gap: 30px;
`,aA=E.div`

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
`;const Dm=E.div`
  text-align: center;
  width: 100px;
 
`,Lm=E.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 2px;
`,Am=E.span`
  font-size: 18px;
  font-weight: 600;
  color: ${({$discount:e})=>"#111"};
`,Rm=E.span`
  font-size: 13px;
  color: #999;
  text-decoration: line-through;
`,Fm=E.span`
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
`,sA=E.button`
  background: 'none';
  border: 'none';
  cursor: 'pointer';
  color: '#ccc';
`,lA=E.button`
  background: 'none';
  border: 'none';
  cursor: 'pointer';
  color: '#ccc';
`,uA=E.div`

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
`,cA=E.div`
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
`,dA=E(Oe)`
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
`,fA=E.button`
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
`;const pA=E.div`
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
`,hA=E.div`
 font-family: var(--main-font);
  font-size: 14px;
  color: #8c8c8c;
  margin-bottom: 15px;
`,mA=E.div`
  background-color: #fdfaf7;
`,gA=E.div`
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
`;const vA=E.img`
  width: 250px;
  height: auto;
  margin-bottom: 30px;
`,yA=E.h2`
  font-size: 28px;
  color: #333;
  margin-bottom: 10px;
`,xA=E.p`
  font-size: 18px;
  color: #666;
  margin-bottom: 40px;
`,bA=E.button`
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
`,wA=()=>f.jsx(mA,{children:f.jsxs(pA,{children:[f.jsx(hA,{children:"Головна / Кошик"}),f.jsxs(gA,{children:[f.jsx(vA,{src:"/Didiv/empty-cart.png",alt:"Порожній кошик"}),f.jsx(yA,{children:"Ваш кошик порожній"}),f.jsx(xA,{children:"Ви ще не додали жодного товару в кошик"}),f.jsx(bA,{onClick:()=>window.location.href="/Didiv/catalog",children:"Перейти до покупок"})]})]})}),SA=E.div`
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
`,_A=({item:e})=>{const t=jn();return f.jsxs(SA,{children:[f.jsx("button",{onClick:()=>t(N4(e.id)),children:"-"}),f.jsx("span",{children:e.quantity}),f.jsx("button",{onClick:()=>t(z4({id:e.id,stock:e.stock})),disabled:e.quantity>=e.stock,children:"+"})]})},CA=()=>{const e=jn(),t=On(),[n,r]=b.useState([]),i=st(p=>p.cart.items),a=st(p=>p.cart.items).reduce((p,m)=>p+m.quantity,0),l=i.reduce((p,m)=>p+(m.new_price??m.price)*(m.quantity||1),0),s=st(p=>p.favorites.items),u=i.length===0,d=(p,m)=>{m.stopPropagation(),console.log(p);const v=s.some(w=>w.id===p.id);e(yo(p)),v?K.warning(`${p.name} видалено з обраного`):K.info(`${p.name} додано в обране`)},c=p=>{r(m=>[...m,p.id]),setTimeout(()=>{e(R4(p)),r(m=>m.filter(v=>v!==p.id))},300)},y=()=>{e(Jh())};return f.jsx(f.Fragment,{children:u?f.jsx(wA,{}):f.jsxs(Q6,{children:[f.jsx(Or,{autoClose:1500}),f.jsxs(Z6,{children:[" ",f.jsx(Oe,{to:"/",style:{color:"inherit",textDecoration:"none"},children:"Головна"})," ","/"," ",f.jsx(Oe,{to:"/cart",style:{color:"inherit",textDecoration:"none"},children:"Кошик"})]}),f.jsx(J6,{children:"Кошик"}),f.jsxs(eA,{children:[f.jsx(tA,{children:i.map((p,m)=>{var x,S;console.log(p);const v=s.some(T=>T.id===p.id),w=p.new_price&&p.new_price<p.price,h=w?p.new_price:p.price,g=w?Math.round((p.price-p.new_price)/p.price*100):0;return f.jsxs(nA,{className:n.includes(p.id)?"removing":"",children:[f.jsx(rA,{src:((S=(x=p.images)==null?void 0:x[0])==null?void 0:S.url)||"/nofoto.png",alt:p.name,onClick:()=>t(`/product/${p.id}`),onError:T=>{T.currentTarget.onerror=null,T.currentTarget.src=to}}),f.jsx(iA,{children:f.jsx("h3",{children:p.name})}),f.jsxs(oA,{children:[f.jsx(_A,{item:{...p,quantity:p.quantity||1}}),f.jsx(Dm,{children:f.jsxs(Lm,{children:[f.jsxs(Am,{$discount:w,children:[(h*(p.quantity||1)).toLocaleString()," грн"]}),w&&f.jsxs(f.Fragment,{children:[f.jsxs(Rm,{children:[(p.price*(p.quantity||1)).toLocaleString()," грн"]}),f.jsxs(Fm,{children:["-",g,"%"]})]})]})})]}),f.jsxs(aA,{children:[f.jsx(lA,{onClick:T=>d(p,T),style:{background:"none",border:"none",cursor:"pointer",color:"#ccc"},children:f.jsx(ju,{size:22,fill:v?"#ff4d4f":"none",color:v?"#ff4d4f":"#999"})}),f.jsx(sA,{onClick:()=>c(p),style:{background:"none",border:"none",cursor:"pointer",color:"#000000"},children:f.jsx(Vb,{size:22})})]})]},`${p.id}-${m}`)})}),f.jsxs(uA,{children:[f.jsxs(cA,{children:[f.jsx("span",{children:"Всього в обраному:"}),f.jsxs("strong",{children:[a," шт."]}),f.jsx("span",{children:"На суму:"}),f.jsxs("strong",{children:[l," грн"]})]}),f.jsx(dA,{to:"/checkout",children:"Оформити замовлення"}),f.jsx(fA,{onClick:y,children:"Oчистити кошик"})]})]})]})})},EA=E.div`
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
`,kA=E.nav`
  font-family: var(--main-font);
  font-size: 14px;
  color: #8c8c8c;
  margin-bottom: 15px;
`,TA=E.h1`
color: var(--black-color);
 font-family: var(--main-font);
  font-size: 30px;
  font-weight: 800;
  margin-bottom: 32px;
`,PA=E.div`

   display: flex;
  flex-direction: column;
  gap: 20px; 
  width: 100%;
  
  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between; 
  }
`,OA=E.div`
   flex: 1; 
  width: 100%;
  border: 1px solid #eee;
  border-radius: 12px;
`,jA=E.div`
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
`;E.div`
  display: flex;
  align-items: center;
  gap: 20px;
  flex: 1;
`;const MA=E.img`
   width: 100%;
  height: auto;
  border-radius: 4px;
`,$A=E.h3`
 font-size: 20px;
    font-weight: 300;
    margin: 0;
    line-height: 1.4;
    @media screen and (max-width: 768px) {
    border-bottom: 1px solid #eee;
    padding-bottom:10px;
  }
    
`,IA=E.div`
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
`;const DA=E.div`
  display: flex;
  gap: 16px;
`,t1=E.button`
  background: none;
  border: none;
  cursor: pointer;
  color: #1a1a1a;
  padding: 8px;
  
`,LA=E.div`
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
`,AA=E.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  font-size: 15px;
  color: #555;
`,RA=E.button`
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
`,FA=E.button`
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
`,zA=E.div`
  padding: 20px 40px;
  font-size: 14px;
  color: #8c8c8c;
  background-color: #fdfaf7;
`,NA=E.div`
   
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
`;const BA=E.img`
  width: 250px;
  height: auto;
  margin-bottom: 30px;
`;E.h2`
  font-size: 28px;
  color: #333;
  margin-bottom: 10px;
`;const VA=E.p`
  font-size: 18px;
  color: #666;
  margin-bottom: 40px;
`,UA=E.button`
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
`,HA=()=>f.jsxs(f.Fragment,{children:[f.jsx(zA,{children:"Головна / Обране"}),f.jsxs(NA,{children:[f.jsx(BA,{src:"/Didiv/sad.png",alt:"Порожній кошик"}),f.jsx(VA,{children:"Ви ще не додали жодного товару в обране"}),f.jsx(UA,{onClick:()=>window.location.href="/Didiv/catalog",children:"Перейти до вибору"})]})]}),WA=()=>{const e=jn(),t=On(),n=st(c=>c.favorites.items),[r,i]=b.useState([]),o=st(c=>c.cart.items),a=()=>{const c=n.map(y=>{const p=o.find(w=>w.id===y.id),m=p?p.quantity:0,v=y.stock-m;return v<=0?null:{...y,quantity:v}}).filter(Boolean);if(c.length===0){K.error("Усі товари вже в максимальній кількості");return}e(F4(c)),K.success("Додано максимально доступну кількість товарів")};console.log(n);const l=n.reduce((c,y)=>c+(y.new_price??y.price)*(y.quantity||1),0),s=(c,y)=>{y.stopPropagation();const p=n.some(m=>m.id===c.id);i(m=>[...m,c.id]),setTimeout(()=>{e(yo(c)),i(m=>m.filter(v=>v!==c.id))},300),p?K.warning(`${c.name} видалено з обраного`):K.info(`${c.name} додано в обране`)},u=()=>{e(DD())},d=n.length===0;return f.jsx(f.Fragment,{children:d?f.jsx(HA,{}):f.jsxs(EA,{children:[f.jsx(Or,{autoClose:1500}),f.jsxs(kA,{children:[" ",f.jsx(Oe,{to:"/",style:{color:"inherit",textDecoration:"none"},children:"Головна"})," ","/"," ",f.jsx(Oe,{to:"/favorite",style:{color:"inherit",textDecoration:"none"},children:"Обране"})]}),f.jsx(TA,{children:"Обране"}),f.jsxs(PA,{children:[f.jsx(OA,{children:n.map(c=>{var w,h;const y=c.new_price&&c.new_price<c.price,p=y?c.new_price:c.price,m=y?Math.round((c.price-c.new_price)/c.price*100):0,v=g=>{const x=o.find(T=>T.id===g.id);if((x?x.quantity:0)>=g.stock){K.error(`Вибачте, доступно лише ${g.stock} шт.`);return}e(po(g)),K.success(`${g.name} додано в кошик!`)};return f.jsxs(jA,{className:r.includes(c.id)?"removing":"",children:[f.jsx(MA,{src:((h=(w=c.images)==null?void 0:w[0])==null?void 0:h.url)||"/nofoto.png",alt:c.name,onClick:()=>t(`/product/${c.id}`),onError:g=>{g.currentTarget.onerror=null,g.currentTarget.src="/nofoto.png"}}),f.jsx($A,{children:c.name}),f.jsxs(IA,{children:[f.jsx(Dm,{children:f.jsxs(Lm,{children:[f.jsxs(Am,{$discount:y,children:[(p*(c.quantity||1)).toLocaleString()," грн"]}),y&&f.jsxs(f.Fragment,{children:[f.jsxs(Rm,{children:[(c.price*(c.quantity||1)).toLocaleString()," грн"]}),f.jsxs(Fm,{children:["-",m,"%"]})]})]})}),f.jsxs(DA,{children:[f.jsx(t1,{onClick:()=>v(c),children:f.jsx(fo,{size:30})}),f.jsx(t1,{onClick:g=>s(c,g),children:f.jsx(Vb,{size:30})})]})]})]},c.id)})}),f.jsxs(LA,{children:[f.jsxs(AA,{children:[f.jsx("span",{children:"Всього в обраному:"}),f.jsxs("strong",{children:[n.length," шт."]}),f.jsx("span",{children:"На суму:"}),f.jsxs("strong",{children:[l," грн"]})]}),f.jsx("hr",{style:{border:"0",borderTop:"1px solid #eee",margin:"20px 0"}}),f.jsx(RA,{onClick:()=>a(),children:"Додати все до кошика"}),f.jsx(FA,{onClick:u,children:"Очистити обрані"})]})]})]})})},GA=E.div`
  background-color: #fdfaf7;
  min-height: 80vh;
  padding-bottom: 60px;
`,qA=E.div`
  padding: 15px 20px;
  font-size: 12px;
  color: #8c8c8c;

  @media screen and (min-width: 768px) {
    padding: 20px 40px;
    font-size: 14px;
  }
`,YA=E.article`
  max-width: 800px; // Обмежуємо ширину для зручного читання тексту
  margin: 0 auto;
  padding: 0 20px;

  @media screen and (min-width: 768px) {
    padding: 0 40px;
  }
`,XA=E.h1`
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
`;const KA=({title:e,children:t,breadcrumbPath:n})=>f.jsxs(GA,{children:[f.jsxs(qA,{children:["Головна / ",n]}),f.jsxs(YA,{children:[f.jsx(XA,{children:e}),t]})]}),n1=E.section`
  margin-bottom: 30px;

  @media screen and (min-width: 768px) {
    margin-bottom: 40px;
  }
`,r1=E.h2`
  font-size: 20px;
  color: #4a332a;
  margin-bottom: 15px;
  font-weight: 600;

  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`,i1=E.p`
  font-size: 16px;
  line-height: 1.6;
  color: #555;
  margin-bottom: 15px;
`,o1=E.ul`
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
`,QA=()=>f.jsxs(KA,{title:"Оплата і доставка",breadcrumbPath:"Доставка",children:[f.jsxs(n1,{children:[f.jsx(r1,{children:"Способи доставки"}),f.jsx(i1,{children:"Ми доставляємо замовлення по всій Україні за допомогою:"}),f.jsxs(o1,{children:[f.jsx("li",{children:"Нова Пошта (у відділення або кур1єром)"}),f.jsx("li",{children:"Самовивіз з нашого магазину"}),f.jsx("li",{children:"Укрпошта"})]})]}),f.jsxs(n1,{children:[f.jsx(r1,{children:"Варіанти оплати"}),f.jsx(i1,{children:"Ви можете обрати зручний для вас спосіб оплати:"}),f.jsxs(o1,{children:[f.jsx("li",{children:"Оплата карткою на сайті (Visa/Mastercard)"}),f.jsx("li",{children:"Післяплата (накладений платіж) при отриманні"}),f.jsx("li",{children:"Безготівковий розрахунок"})]})]})]});function ni(e){"@babel/helpers - typeof";return ni=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ni(e)}function ZA(e,t){if(ni(e)!=="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(ni(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function M2(e){var t=ZA(e,"string");return ni(t)==="symbol"?t:String(t)}function Go(e,t,n){return t=M2(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a1(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Z(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?a1(Object(n),!0).forEach(function(r){Go(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a1(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function JA(e){if(Array.isArray(e))return e}function eR(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,i,o,a,l=[],s=!0,u=!1;try{if(o=(n=n.call(e)).next,t===0){if(Object(n)!==n)return;s=!1}else for(;!(s=(r=o.call(n)).done)&&(l.push(r.value),l.length!==t);s=!0);}catch(d){u=!0,i=d}finally{try{if(!s&&n.return!=null&&(a=n.return(),Object(a)!==a))return}finally{if(u)throw i}}return l}}function jp(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function $2(e,t){if(e){if(typeof e=="string")return jp(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return jp(e,t)}}function tR(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Un(e,t){return JA(e)||eR(e,t)||$2(e,t)||tR()}function nR(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function tr(e,t){if(e==null)return{};var n=nR(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var rR=["defaultInputValue","defaultMenuIsOpen","defaultValue","inputValue","menuIsOpen","onChange","onInputChange","onMenuClose","onMenuOpen","value"];function iR(e){var t=e.defaultInputValue,n=t===void 0?"":t,r=e.defaultMenuIsOpen,i=r===void 0?!1:r,o=e.defaultValue,a=o===void 0?null:o,l=e.inputValue,s=e.menuIsOpen,u=e.onChange,d=e.onInputChange,c=e.onMenuClose,y=e.onMenuOpen,p=e.value,m=tr(e,rR),v=b.useState(l!==void 0?l:n),w=Un(v,2),h=w[0],g=w[1],x=b.useState(s!==void 0?s:i),S=Un(x,2),T=S[0],k=S[1],C=b.useState(p!==void 0?p:a),_=Un(C,2),$=_[0],M=_[1],R=b.useCallback(function(P,I){typeof u=="function"&&u(P,I),M(P)},[u]),L=b.useCallback(function(P,I){var z;typeof d=="function"&&(z=d(P,I)),g(z!==void 0?z:P)},[d]),j=b.useCallback(function(){typeof y=="function"&&y(),k(!0)},[y]),F=b.useCallback(function(){typeof c=="function"&&c(),k(!1)},[c]),A=l!==void 0?l:h,O=s!==void 0?s:T,D=p!==void 0?p:$;return Z(Z({},m),{},{inputValue:A,menuIsOpen:O,onChange:R,onInputChange:L,onMenuClose:F,onMenuOpen:j,value:D})}function oR(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s1(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,M2(r.key),r)}}function aR(e,t,n){return t&&s1(e.prototype,t),n&&s1(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function Mp(e,t){return Mp=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},Mp(e,t)}function sR(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Mp(e,t)}function Zl(e){return Zl=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},Zl(e)}function lR(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function uR(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function cR(e,t){if(t&&(ni(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return uR(e)}function dR(e){var t=lR();return function(){var r=Zl(e),i;if(t){var o=Zl(this).constructor;i=Reflect.construct(r,arguments,o)}else i=r.apply(this,arguments);return cR(this,i)}}function fR(e){if(Array.isArray(e))return jp(e)}function pR(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function hR(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function zm(e){return fR(e)||pR(e)||$2(e)||hR()}function mR(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}const gR=Math.min,vR=Math.max,Jl=Math.round,Es=Math.floor,eu=e=>({x:e,y:e});function yR(e){const{x:t,y:n,width:r,height:i}=e;return{width:r,height:i,top:n,left:t,right:t+r,bottom:n+i,x:t,y:n}}function xc(){return typeof window<"u"}function I2(e){return L2(e)?(e.nodeName||"").toLowerCase():"#document"}function dn(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function D2(e){var t;return(t=(L2(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function L2(e){return xc()?e instanceof Node||e instanceof dn(e).Node:!1}function $p(e){return xc()?e instanceof Element||e instanceof dn(e).Element:!1}function Nm(e){return xc()?e instanceof HTMLElement||e instanceof dn(e).HTMLElement:!1}function l1(e){return!xc()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof dn(e).ShadowRoot}function A2(e){const{overflow:t,overflowX:n,overflowY:r,display:i}=Bm(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&i!=="inline"&&i!=="contents"}let Ld;function xR(){return Ld==null&&(Ld=typeof CSS<"u"&&CSS.supports&&CSS.supports("-webkit-backdrop-filter","none")),Ld}function bR(e){return/^(html|body|#document)$/.test(I2(e))}function Bm(e){return dn(e).getComputedStyle(e)}function wR(e){if(I2(e)==="html")return e;const t=e.assignedSlot||e.parentNode||l1(e)&&e.host||D2(e);return l1(t)?t.host:t}function R2(e){const t=wR(e);return bR(t)?e.ownerDocument?e.ownerDocument.body:e.body:Nm(t)&&A2(t)?t:R2(t)}function tu(e,t,n){var r;t===void 0&&(t=[]),n===void 0&&(n=!0);const i=R2(e),o=i===((r=e.ownerDocument)==null?void 0:r.body),a=dn(i);if(o){const l=Ip(a);return t.concat(a,a.visualViewport||[],A2(i)?i:[],l&&n?tu(l):[])}else return t.concat(i,tu(i,[],n))}function Ip(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function SR(e){const t=Bm(e);let n=parseFloat(t.width)||0,r=parseFloat(t.height)||0;const i=Nm(e),o=i?e.offsetWidth:n,a=i?e.offsetHeight:r,l=Jl(n)!==o||Jl(r)!==a;return l&&(n=o,r=a),{width:n,height:r,$:l}}function Vm(e){return $p(e)?e:e.contextElement}function Ad(e){const t=Vm(e);if(!Nm(t))return eu(1);const n=t.getBoundingClientRect(),{width:r,height:i,$:o}=SR(t);let a=(o?Jl(n.width):n.width)/r,l=(o?Jl(n.height):n.height)/i;return(!a||!Number.isFinite(a))&&(a=1),(!l||!Number.isFinite(l))&&(l=1),{x:a,y:l}}const _R=eu(0);function CR(e){const t=dn(e);return!xR()||!t.visualViewport?_R:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function ER(e,t,n){return t===void 0&&(t=!1),!n||t&&n!==dn(e)?!1:t}function u1(e,t,n,r){t===void 0&&(t=!1),n===void 0&&(n=!1);const i=e.getBoundingClientRect(),o=Vm(e);let a=eu(1);t&&(r?$p(r)&&(a=Ad(r)):a=Ad(e));const l=ER(o,n,r)?CR(o):eu(0);let s=(i.left+l.x)/a.x,u=(i.top+l.y)/a.y,d=i.width/a.x,c=i.height/a.y;if(o){const y=dn(o),p=r&&$p(r)?dn(r):r;let m=y,v=Ip(m);for(;v&&r&&p!==m;){const w=Ad(v),h=v.getBoundingClientRect(),g=Bm(v),x=h.left+(v.clientLeft+parseFloat(g.paddingLeft))*w.x,S=h.top+(v.clientTop+parseFloat(g.paddingTop))*w.y;s*=w.x,u*=w.y,d*=w.x,c*=w.y,s+=x,u+=S,m=dn(v),v=Ip(m)}}return yR({width:d,height:c,x:s,y:u})}function F2(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function kR(e,t){let n=null,r;const i=D2(e);function o(){var l;clearTimeout(r),(l=n)==null||l.disconnect(),n=null}function a(l,s){l===void 0&&(l=!1),s===void 0&&(s=1),o();const u=e.getBoundingClientRect(),{left:d,top:c,width:y,height:p}=u;if(l||t(),!y||!p)return;const m=Es(c),v=Es(i.clientWidth-(d+y)),w=Es(i.clientHeight-(c+p)),h=Es(d),x={rootMargin:-m+"px "+-v+"px "+-w+"px "+-h+"px",threshold:vR(0,gR(1,s))||1};let S=!0;function T(k){const C=k[0].intersectionRatio;if(C!==s){if(!S)return a();C?a(!1,C):r=setTimeout(()=>{a(!1,1e-7)},1e3)}C===1&&!F2(u,e.getBoundingClientRect())&&a(),S=!1}try{n=new IntersectionObserver(T,{...x,root:i.ownerDocument})}catch{n=new IntersectionObserver(T,x)}n.observe(e)}return a(!0),o}function TR(e,t,n,r){r===void 0&&(r={});const{ancestorScroll:i=!0,ancestorResize:o=!0,elementResize:a=typeof ResizeObserver=="function",layoutShift:l=typeof IntersectionObserver=="function",animationFrame:s=!1}=r,u=Vm(e),d=i||o?[...u?tu(u):[],...t?tu(t):[]]:[];d.forEach(h=>{i&&h.addEventListener("scroll",n,{passive:!0}),o&&h.addEventListener("resize",n)});const c=u&&l?kR(u,n):null;let y=-1,p=null;a&&(p=new ResizeObserver(h=>{let[g]=h;g&&g.target===u&&p&&t&&(p.unobserve(t),cancelAnimationFrame(y),y=requestAnimationFrame(()=>{var x;(x=p)==null||x.observe(t)})),n()}),u&&!s&&p.observe(u),t&&p.observe(t));let m,v=s?u1(e):null;s&&w();function w(){const h=u1(e);v&&!F2(v,h)&&n(),v=h,m=requestAnimationFrame(w)}return n(),()=>{var h;d.forEach(g=>{i&&g.removeEventListener("scroll",n),o&&g.removeEventListener("resize",n)}),c==null||c(),(h=p)==null||h.disconnect(),p=null,s&&cancelAnimationFrame(m)}}var Dp=b.useLayoutEffect,PR=["className","clearValue","cx","getStyles","getClassNames","getValue","hasValue","isMulti","isRtl","options","selectOption","selectProps","setValue","theme"],nu=function(){};function OR(e,t){return t?t[0]==="-"?e+t:e+"__"+t:e}function jR(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var o=[].concat(r);if(t&&e)for(var a in t)t.hasOwnProperty(a)&&t[a]&&o.push("".concat(OR(e,a)));return o.filter(function(l){return l}).map(function(l){return String(l).trim()}).join(" ")}var c1=function(t){return zR(t)?t.filter(Boolean):ni(t)==="object"&&t!==null?[t]:[]},z2=function(t){t.className,t.clearValue,t.cx,t.getStyles,t.getClassNames,t.getValue,t.hasValue,t.isMulti,t.isRtl,t.options,t.selectOption,t.selectProps,t.setValue,t.theme;var n=tr(t,PR);return Z({},n)},Pe=function(t,n,r){var i=t.cx,o=t.getStyles,a=t.getClassNames,l=t.className;return{css:o(n,t),className:i(r??{},a(n,t),l)}};function bc(e){return[document.documentElement,document.body,window].indexOf(e)>-1}function MR(e){return bc(e)?window.innerHeight:e.clientHeight}function N2(e){return bc(e)?window.pageYOffset:e.scrollTop}function ru(e,t){if(bc(e)){window.scrollTo(0,t);return}e.scrollTop=t}function $R(e){var t=getComputedStyle(e),n=t.position==="absolute",r=/(auto|scroll)/;if(t.position==="fixed")return document.documentElement;for(var i=e;i=i.parentElement;)if(t=getComputedStyle(i),!(n&&t.position==="static")&&r.test(t.overflow+t.overflowY+t.overflowX))return i;return document.documentElement}function IR(e,t,n,r){return n*((e=e/r-1)*e*e+1)+t}function ks(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:200,r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:nu,i=N2(e),o=t-i,a=10,l=0;function s(){l+=a;var u=IR(l,i,o,n);ru(e,u),l<n?window.requestAnimationFrame(s):r(e)}s()}function d1(e,t){var n=e.getBoundingClientRect(),r=t.getBoundingClientRect(),i=t.offsetHeight/3;r.bottom+i>n.bottom?ru(e,Math.min(t.offsetTop+t.clientHeight-e.offsetHeight+i,e.scrollHeight)):r.top-i<n.top&&ru(e,Math.max(t.offsetTop-i,0))}function DR(e){var t=e.getBoundingClientRect();return{bottom:t.bottom,height:t.height,left:t.left,right:t.right,top:t.top,width:t.width}}function f1(){try{return document.createEvent("TouchEvent"),!0}catch{return!1}}function LR(){try{return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}catch{return!1}}var B2=!1,AR={get passive(){return B2=!0}},Ts=typeof window<"u"?window:{};Ts.addEventListener&&Ts.removeEventListener&&(Ts.addEventListener("p",nu,AR),Ts.removeEventListener("p",nu,!1));var RR=B2;function FR(e){return e!=null}function zR(e){return Array.isArray(e)}function Ps(e,t,n){return e?t:n}var NR=function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];var o=Object.entries(t).filter(function(a){var l=Un(a,1),s=l[0];return!r.includes(s)});return o.reduce(function(a,l){var s=Un(l,2),u=s[0],d=s[1];return a[u]=d,a},{})},BR=["children","innerProps"],VR=["children","innerProps"];function UR(e){var t=e.maxHeight,n=e.menuEl,r=e.minHeight,i=e.placement,o=e.shouldScroll,a=e.isFixedPosition,l=e.controlHeight,s=$R(n),u={placement:"bottom",maxHeight:t};if(!n||!n.offsetParent)return u;var d=s.getBoundingClientRect(),c=d.height,y=n.getBoundingClientRect(),p=y.bottom,m=y.height,v=y.top,w=n.offsetParent.getBoundingClientRect(),h=w.top,g=a?window.innerHeight:MR(s),x=N2(s),S=parseInt(getComputedStyle(n).marginBottom,10),T=parseInt(getComputedStyle(n).marginTop,10),k=h-T,C=g-v,_=k+x,$=c-x-v,M=p-g+x+S,R=x+v-T,L=160;switch(i){case"auto":case"bottom":if(C>=m)return{placement:"bottom",maxHeight:t};if($>=m&&!a)return o&&ks(s,M,L),{placement:"bottom",maxHeight:t};if(!a&&$>=r||a&&C>=r){o&&ks(s,M,L);var j=a?C-S:$-S;return{placement:"bottom",maxHeight:j}}if(i==="auto"||a){var F=t,A=a?k:_;return A>=r&&(F=Math.min(A-S-l,t)),{placement:"top",maxHeight:F}}if(i==="bottom")return o&&ru(s,M),{placement:"bottom",maxHeight:t};break;case"top":if(k>=m)return{placement:"top",maxHeight:t};if(_>=m&&!a)return o&&ks(s,R,L),{placement:"top",maxHeight:t};if(!a&&_>=r||a&&k>=r){var O=t;return(!a&&_>=r||a&&k>=r)&&(O=a?k-T:_-T),o&&ks(s,R,L),{placement:"top",maxHeight:O}}return{placement:"bottom",maxHeight:t};default:throw new Error('Invalid placement provided "'.concat(i,'".'))}return u}function HR(e){var t={bottom:"top",top:"bottom"};return e?t[e]:"bottom"}var V2=function(t){return t==="auto"?"bottom":t},WR=function(t,n){var r,i=t.placement,o=t.theme,a=o.borderRadius,l=o.spacing,s=o.colors;return Z((r={label:"menu"},Go(r,HR(i),"100%"),Go(r,"position","absolute"),Go(r,"width","100%"),Go(r,"zIndex",1),r),n?{}:{backgroundColor:s.neutral0,borderRadius:a,boxShadow:"0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)",marginBottom:l.menuGutter,marginTop:l.menuGutter})},U2=b.createContext(null),GR=function(t){var n=t.children,r=t.minMenuHeight,i=t.maxMenuHeight,o=t.menuPlacement,a=t.menuPosition,l=t.menuShouldScrollIntoView,s=t.theme,u=b.useContext(U2)||{},d=u.setPortalPlacement,c=b.useRef(null),y=b.useState(i),p=Un(y,2),m=p[0],v=p[1],w=b.useState(null),h=Un(w,2),g=h[0],x=h[1],S=s.spacing.controlHeight;return Dp(function(){var T=c.current;if(T){var k=a==="fixed",C=l&&!k,_=UR({maxHeight:i,menuEl:T,minHeight:r,placement:o,shouldScroll:C,isFixedPosition:k,controlHeight:S});v(_.maxHeight),x(_.placement),d==null||d(_.placement)}},[i,o,a,l,r,d,S]),n({ref:c,placerProps:Z(Z({},t),{},{placement:g||V2(o),maxHeight:m})})},qR=function(t){var n=t.children,r=t.innerRef,i=t.innerProps;return Q("div",J({},Pe(t,"menu",{menu:!0}),{ref:r},i),n)},YR=qR,XR=function(t,n){var r=t.maxHeight,i=t.theme.spacing.baseUnit;return Z({maxHeight:r,overflowY:"auto",position:"relative",WebkitOverflowScrolling:"touch"},n?{}:{paddingBottom:i,paddingTop:i})},KR=function(t){var n=t.children,r=t.innerProps,i=t.innerRef,o=t.isMulti;return Q("div",J({},Pe(t,"menuList",{"menu-list":!0,"menu-list--is-multi":o}),{ref:i},r),n)},H2=function(t,n){var r=t.theme,i=r.spacing.baseUnit,o=r.colors;return Z({textAlign:"center"},n?{}:{color:o.neutral40,padding:"".concat(i*2,"px ").concat(i*3,"px")})},QR=H2,ZR=H2,JR=function(t){var n=t.children,r=n===void 0?"No options":n,i=t.innerProps,o=tr(t,BR);return Q("div",J({},Pe(Z(Z({},o),{},{children:r,innerProps:i}),"noOptionsMessage",{"menu-notice":!0,"menu-notice--no-options":!0}),i),r)},e8=function(t){var n=t.children,r=n===void 0?"Loading...":n,i=t.innerProps,o=tr(t,VR);return Q("div",J({},Pe(Z(Z({},o),{},{children:r,innerProps:i}),"loadingMessage",{"menu-notice":!0,"menu-notice--loading":!0}),i),r)},t8=function(t){var n=t.rect,r=t.offset,i=t.position;return{left:n.left,position:i,top:r,width:n.width,zIndex:1}},n8=function(t){var n=t.appendTo,r=t.children,i=t.controlElement,o=t.innerProps,a=t.menuPlacement,l=t.menuPosition,s=b.useRef(null),u=b.useRef(null),d=b.useState(V2(a)),c=Un(d,2),y=c[0],p=c[1],m=b.useMemo(function(){return{setPortalPlacement:p}},[]),v=b.useState(null),w=Un(v,2),h=w[0],g=w[1],x=b.useCallback(function(){if(i){var C=DR(i),_=l==="fixed"?0:window.pageYOffset,$=C[y]+_;($!==(h==null?void 0:h.offset)||C.left!==(h==null?void 0:h.rect.left)||C.width!==(h==null?void 0:h.rect.width))&&g({offset:$,rect:C})}},[i,l,y,h==null?void 0:h.offset,h==null?void 0:h.rect.left,h==null?void 0:h.rect.width]);Dp(function(){x()},[x]);var S=b.useCallback(function(){typeof u.current=="function"&&(u.current(),u.current=null),i&&s.current&&(u.current=TR(i,s.current,x,{elementResize:"ResizeObserver"in window}))},[i,x]);Dp(function(){S()},[S]);var T=b.useCallback(function(C){s.current=C,S()},[S]);if(!n&&l!=="fixed"||!h)return null;var k=Q("div",J({ref:T},Pe(Z(Z({},t),{},{offset:h.offset,position:l,rect:h.rect}),"menuPortal",{"menu-portal":!0}),o),r);return Q(U2.Provider,{value:m},n?Su.createPortal(k,n):k)},r8=function(t){var n=t.isDisabled,r=t.isRtl;return{label:"container",direction:r?"rtl":void 0,pointerEvents:n?"none":void 0,position:"relative"}},i8=function(t){var n=t.children,r=t.innerProps,i=t.isDisabled,o=t.isRtl;return Q("div",J({},Pe(t,"container",{"--is-disabled":i,"--is-rtl":o}),r),n)},o8=function(t,n){var r=t.theme.spacing,i=t.isMulti,o=t.hasValue,a=t.selectProps.controlShouldRenderValue;return Z({alignItems:"center",display:i&&o&&a?"flex":"grid",flex:1,flexWrap:"wrap",WebkitOverflowScrolling:"touch",position:"relative",overflow:"hidden"},n?{}:{padding:"".concat(r.baseUnit/2,"px ").concat(r.baseUnit*2,"px")})},a8=function(t){var n=t.children,r=t.innerProps,i=t.isMulti,o=t.hasValue;return Q("div",J({},Pe(t,"valueContainer",{"value-container":!0,"value-container--is-multi":i,"value-container--has-value":o}),r),n)},s8=function(){return{alignItems:"center",alignSelf:"stretch",display:"flex",flexShrink:0}},l8=function(t){var n=t.children,r=t.innerProps;return Q("div",J({},Pe(t,"indicatorsContainer",{indicators:!0}),r),n)},p1,u8=["size"],c8=["innerProps","isRtl","size"],d8={name:"8mmkcg",styles:"display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0"},W2=function(t){var n=t.size,r=tr(t,u8);return Q("svg",J({height:n,width:n,viewBox:"0 0 20 20","aria-hidden":"true",focusable:"false",css:d8},r))},Um=function(t){return Q(W2,J({size:20},t),Q("path",{d:"M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"}))},G2=function(t){return Q(W2,J({size:20},t),Q("path",{d:"M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"}))},q2=function(t,n){var r=t.isFocused,i=t.theme,o=i.spacing.baseUnit,a=i.colors;return Z({label:"indicatorContainer",display:"flex",transition:"color 150ms"},n?{}:{color:r?a.neutral60:a.neutral20,padding:o*2,":hover":{color:r?a.neutral80:a.neutral40}})},f8=q2,p8=function(t){var n=t.children,r=t.innerProps;return Q("div",J({},Pe(t,"dropdownIndicator",{indicator:!0,"dropdown-indicator":!0}),r),n||Q(G2,null))},h8=q2,m8=function(t){var n=t.children,r=t.innerProps;return Q("div",J({},Pe(t,"clearIndicator",{indicator:!0,"clear-indicator":!0}),r),n||Q(Um,null))},g8=function(t,n){var r=t.isDisabled,i=t.theme,o=i.spacing.baseUnit,a=i.colors;return Z({label:"indicatorSeparator",alignSelf:"stretch",width:1},n?{}:{backgroundColor:r?a.neutral10:a.neutral20,marginBottom:o*2,marginTop:o*2})},v8=function(t){var n=t.innerProps;return Q("span",J({},n,Pe(t,"indicatorSeparator",{"indicator-separator":!0})))},y8=y3(p1||(p1=mR([`
  0%, 80%, 100% { opacity: 0; }
  40% { opacity: 1; }
`]))),x8=function(t,n){var r=t.isFocused,i=t.size,o=t.theme,a=o.colors,l=o.spacing.baseUnit;return Z({label:"loadingIndicator",display:"flex",transition:"color 150ms",alignSelf:"center",fontSize:i,lineHeight:1,marginRight:i,textAlign:"center",verticalAlign:"middle"},n?{}:{color:r?a.neutral60:a.neutral20,padding:l*2})},Rd=function(t){var n=t.delay,r=t.offset;return Q("span",{css:um({animation:"".concat(y8," 1s ease-in-out ").concat(n,"ms infinite;"),backgroundColor:"currentColor",borderRadius:"1em",display:"inline-block",marginLeft:r?"1em":void 0,height:"1em",verticalAlign:"top",width:"1em"},"","")})},b8=function(t){var n=t.innerProps,r=t.isRtl,i=t.size,o=i===void 0?4:i,a=tr(t,c8);return Q("div",J({},Pe(Z(Z({},a),{},{innerProps:n,isRtl:r,size:o}),"loadingIndicator",{indicator:!0,"loading-indicator":!0}),n),Q(Rd,{delay:0,offset:r}),Q(Rd,{delay:160,offset:!0}),Q(Rd,{delay:320,offset:!r}))},w8=function(t,n){var r=t.isDisabled,i=t.isFocused,o=t.theme,a=o.colors,l=o.borderRadius,s=o.spacing;return Z({label:"control",alignItems:"center",cursor:"default",display:"flex",flexWrap:"wrap",justifyContent:"space-between",minHeight:s.controlHeight,outline:"0 !important",position:"relative",transition:"all 100ms"},n?{}:{backgroundColor:r?a.neutral5:a.neutral0,borderColor:r?a.neutral10:i?a.primary:a.neutral20,borderRadius:l,borderStyle:"solid",borderWidth:1,boxShadow:i?"0 0 0 1px ".concat(a.primary):void 0,"&:hover":{borderColor:i?a.primary:a.neutral30}})},S8=function(t){var n=t.children,r=t.isDisabled,i=t.isFocused,o=t.innerRef,a=t.innerProps,l=t.menuIsOpen;return Q("div",J({ref:o},Pe(t,"control",{control:!0,"control--is-disabled":r,"control--is-focused":i,"control--menu-is-open":l}),a,{"aria-disabled":r||void 0}),n)},_8=S8,C8=["data"],E8=function(t,n){var r=t.theme.spacing;return n?{}:{paddingBottom:r.baseUnit*2,paddingTop:r.baseUnit*2}},k8=function(t){var n=t.children,r=t.cx,i=t.getStyles,o=t.getClassNames,a=t.Heading,l=t.headingProps,s=t.innerProps,u=t.label,d=t.theme,c=t.selectProps;return Q("div",J({},Pe(t,"group",{group:!0}),s),Q(a,J({},l,{selectProps:c,theme:d,getStyles:i,getClassNames:o,cx:r}),u),Q("div",null,n))},T8=function(t,n){var r=t.theme,i=r.colors,o=r.spacing;return Z({label:"group",cursor:"default",display:"block"},n?{}:{color:i.neutral40,fontSize:"75%",fontWeight:500,marginBottom:"0.25em",paddingLeft:o.baseUnit*3,paddingRight:o.baseUnit*3,textTransform:"uppercase"})},P8=function(t){var n=z2(t);n.data;var r=tr(n,C8);return Q("div",J({},Pe(t,"groupHeading",{"group-heading":!0}),r))},O8=k8,j8=["innerRef","isDisabled","isHidden","inputClassName"],M8=function(t,n){var r=t.isDisabled,i=t.value,o=t.theme,a=o.spacing,l=o.colors;return Z(Z({visibility:r?"hidden":"visible",transform:i?"translateZ(0)":""},$8),n?{}:{margin:a.baseUnit/2,paddingBottom:a.baseUnit/2,paddingTop:a.baseUnit/2,color:l.neutral80})},Y2={gridArea:"1 / 2",font:"inherit",minWidth:"2px",border:0,margin:0,outline:0,padding:0},$8={flex:"1 1 auto",display:"inline-grid",gridArea:"1 / 1 / 2 / 3",gridTemplateColumns:"0 min-content","&:after":Z({content:'attr(data-value) " "',visibility:"hidden",whiteSpace:"pre"},Y2)},I8=function(t){return Z({label:"input",color:"inherit",background:0,opacity:t?0:1,width:"100%"},Y2)},D8=function(t){var n=t.cx,r=t.value,i=z2(t),o=i.innerRef,a=i.isDisabled,l=i.isHidden,s=i.inputClassName,u=tr(i,j8);return Q("div",J({},Pe(t,"input",{"input-container":!0}),{"data-value":r||""}),Q("input",J({className:n({input:!0},s),ref:o,style:I8(l),disabled:a},u)))},L8=D8,A8=function(t,n){var r=t.theme,i=r.spacing,o=r.borderRadius,a=r.colors;return Z({label:"multiValue",display:"flex",minWidth:0},n?{}:{backgroundColor:a.neutral10,borderRadius:o/2,margin:i.baseUnit/2})},R8=function(t,n){var r=t.theme,i=r.borderRadius,o=r.colors,a=t.cropWithEllipsis;return Z({overflow:"hidden",textOverflow:a||a===void 0?"ellipsis":void 0,whiteSpace:"nowrap"},n?{}:{borderRadius:i/2,color:o.neutral80,fontSize:"85%",padding:3,paddingLeft:6})},F8=function(t,n){var r=t.theme,i=r.spacing,o=r.borderRadius,a=r.colors,l=t.isFocused;return Z({alignItems:"center",display:"flex"},n?{}:{borderRadius:o/2,backgroundColor:l?a.dangerLight:void 0,paddingLeft:i.baseUnit,paddingRight:i.baseUnit,":hover":{backgroundColor:a.dangerLight,color:a.danger}})},X2=function(t){var n=t.children,r=t.innerProps;return Q("div",r,n)},z8=X2,N8=X2;function B8(e){var t=e.children,n=e.innerProps;return Q("div",J({role:"button"},n),t||Q(Um,{size:14}))}var V8=function(t){var n=t.children,r=t.components,i=t.data,o=t.innerProps,a=t.isDisabled,l=t.removeProps,s=t.selectProps,u=r.Container,d=r.Label,c=r.Remove;return Q(u,{data:i,innerProps:Z(Z({},Pe(t,"multiValue",{"multi-value":!0,"multi-value--is-disabled":a})),o),selectProps:s},Q(d,{data:i,innerProps:Z({},Pe(t,"multiValueLabel",{"multi-value__label":!0})),selectProps:s},n),Q(c,{data:i,innerProps:Z(Z({},Pe(t,"multiValueRemove",{"multi-value__remove":!0})),{},{"aria-label":"Remove ".concat(n||"option")},l),selectProps:s}))},U8=V8,H8=function(t,n){var r=t.isDisabled,i=t.isFocused,o=t.isSelected,a=t.theme,l=a.spacing,s=a.colors;return Z({label:"option",cursor:"default",display:"block",fontSize:"inherit",width:"100%",userSelect:"none",WebkitTapHighlightColor:"rgba(0, 0, 0, 0)"},n?{}:{backgroundColor:o?s.primary:i?s.primary25:"transparent",color:r?s.neutral20:o?s.neutral0:"inherit",padding:"".concat(l.baseUnit*2,"px ").concat(l.baseUnit*3,"px"),":active":{backgroundColor:r?void 0:o?s.primary:s.primary50}})},W8=function(t){var n=t.children,r=t.isDisabled,i=t.isFocused,o=t.isSelected,a=t.innerRef,l=t.innerProps;return Q("div",J({},Pe(t,"option",{option:!0,"option--is-disabled":r,"option--is-focused":i,"option--is-selected":o}),{ref:a,"aria-disabled":r},l),n)},G8=W8,q8=function(t,n){var r=t.theme,i=r.spacing,o=r.colors;return Z({label:"placeholder",gridArea:"1 / 1 / 2 / 3"},n?{}:{color:o.neutral50,marginLeft:i.baseUnit/2,marginRight:i.baseUnit/2})},Y8=function(t){var n=t.children,r=t.innerProps;return Q("div",J({},Pe(t,"placeholder",{placeholder:!0}),r),n)},X8=Y8,K8=function(t,n){var r=t.isDisabled,i=t.theme,o=i.spacing,a=i.colors;return Z({label:"singleValue",gridArea:"1 / 1 / 2 / 3",maxWidth:"100%",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},n?{}:{color:r?a.neutral40:a.neutral80,marginLeft:o.baseUnit/2,marginRight:o.baseUnit/2})},Q8=function(t){var n=t.children,r=t.isDisabled,i=t.innerProps;return Q("div",J({},Pe(t,"singleValue",{"single-value":!0,"single-value--is-disabled":r}),i),n)},Z8=Q8,J8={ClearIndicator:m8,Control:_8,DropdownIndicator:p8,DownChevron:G2,CrossIcon:Um,Group:O8,GroupHeading:P8,IndicatorsContainer:l8,IndicatorSeparator:v8,Input:L8,LoadingIndicator:b8,Menu:YR,MenuList:KR,MenuPortal:n8,LoadingMessage:e8,NoOptionsMessage:JR,MultiValue:U8,MultiValueContainer:z8,MultiValueLabel:N8,MultiValueRemove:B8,Option:G8,Placeholder:X8,SelectContainer:i8,SingleValue:Z8,ValueContainer:a8},eF=function(t){return Z(Z({},J8),t.components)},h1=Number.isNaN||function(t){return typeof t=="number"&&t!==t};function tF(e,t){return!!(e===t||h1(e)&&h1(t))}function nF(e,t){if(e.length!==t.length)return!1;for(var n=0;n<e.length;n++)if(!tF(e[n],t[n]))return!1;return!0}function rF(e,t){t===void 0&&(t=nF);var n=null;function r(){for(var i=[],o=0;o<arguments.length;o++)i[o]=arguments[o];if(n&&n.lastThis===this&&t(i,n.lastArgs))return n.lastResult;var a=e.apply(this,i);return n={lastResult:a,lastArgs:i,lastThis:this},a}return r.clear=function(){n=null},r}var iF={name:"7pg0cj-a11yText",styles:"label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap"},oF=function(t){return Q("span",J({css:iF},t))},m1=oF,aF={guidance:function(t){var n=t.isSearchable,r=t.isMulti,i=t.tabSelectsValue,o=t.context,a=t.isInitialFocus;switch(o){case"menu":return"Use Up and Down to choose options, press Enter to select the currently focused option, press Escape to exit the menu".concat(i?", press Tab to select the option and exit the menu":"",".");case"input":return a?"".concat(t["aria-label"]||"Select"," is focused ").concat(n?",type to refine list":"",", press Down to open the menu, ").concat(r?" press left to focus selected values":""):"";case"value":return"Use left and right to toggle between focused values, press Backspace to remove the currently focused value";default:return""}},onChange:function(t){var n=t.action,r=t.label,i=r===void 0?"":r,o=t.labels,a=t.isDisabled;switch(n){case"deselect-option":case"pop-value":case"remove-value":return"option ".concat(i,", deselected.");case"clear":return"All selected options have been cleared.";case"initial-input-focus":return"option".concat(o.length>1?"s":""," ").concat(o.join(","),", selected.");case"select-option":return a?"option ".concat(i," is disabled. Select another option."):"option ".concat(i,", selected.");default:return""}},onFocus:function(t){var n=t.context,r=t.focused,i=t.options,o=t.label,a=o===void 0?"":o,l=t.selectValue,s=t.isDisabled,u=t.isSelected,d=t.isAppleDevice,c=function(v,w){return v&&v.length?"".concat(v.indexOf(w)+1," of ").concat(v.length):""};if(n==="value"&&l)return"value ".concat(a," focused, ").concat(c(l,r),".");if(n==="menu"&&d){var y=s?" disabled":"",p="".concat(u?" selected":"").concat(y);return"".concat(a).concat(p,", ").concat(c(i,r),".")}return""},onFilter:function(t){var n=t.inputValue,r=t.resultsMessage;return"".concat(r).concat(n?" for search term "+n:"",".")}},sF=function(t){var n=t.ariaSelection,r=t.focusedOption,i=t.focusedValue,o=t.focusableOptions,a=t.isFocused,l=t.selectValue,s=t.selectProps,u=t.id,d=t.isAppleDevice,c=s.ariaLiveMessages,y=s.getOptionLabel,p=s.inputValue,m=s.isMulti,v=s.isOptionDisabled,w=s.isSearchable,h=s.menuIsOpen,g=s.options,x=s.screenReaderStatus,S=s.tabSelectsValue,T=s.isLoading,k=s["aria-label"],C=s["aria-live"],_=b.useMemo(function(){return Z(Z({},aF),c||{})},[c]),$=b.useMemo(function(){var A="";if(n&&_.onChange){var O=n.option,D=n.options,P=n.removedValue,I=n.removedValues,z=n.value,B=function(fe){return Array.isArray(fe)?null:fe},N=P||O||B(z),U=N?y(N):"",H=D||I||void 0,q=H?H.map(y):[],X=Z({isDisabled:N&&v(N,l),label:U,labels:q},n);A=_.onChange(X)}return A},[n,_,v,l,y]),M=b.useMemo(function(){var A="",O=r||i,D=!!(r&&l&&l.includes(r));if(O&&_.onFocus){var P={focused:O,label:y(O),isDisabled:v(O,l),isSelected:D,options:o,context:O===r?"menu":"value",selectValue:l,isAppleDevice:d};A=_.onFocus(P)}return A},[r,i,y,v,_,o,l,d]),R=b.useMemo(function(){var A="";if(h&&g.length&&!T&&_.onFilter){var O=x({count:o.length});A=_.onFilter({inputValue:p,resultsMessage:O})}return A},[o,p,h,_,g,x,T]),L=(n==null?void 0:n.action)==="initial-input-focus",j=b.useMemo(function(){var A="";if(_.guidance){var O=i?"value":h?"menu":"input";A=_.guidance({"aria-label":k,context:O,isDisabled:r&&v(r,l),isMulti:m,isSearchable:w,tabSelectsValue:S,isInitialFocus:L})}return A},[k,r,i,m,v,w,h,_,l,S,L]),F=Q(b.Fragment,null,Q("span",{id:"aria-selection"},$),Q("span",{id:"aria-focused"},M),Q("span",{id:"aria-results"},R),Q("span",{id:"aria-guidance"},j));return Q(b.Fragment,null,Q(m1,{id:u},L&&F),Q(m1,{"aria-live":C,"aria-atomic":"false","aria-relevant":"additions text",role:"log"},a&&!L&&F))},lF=sF,Lp=[{base:"A",letters:"AⒶＡÀÁÂẦẤẪẨÃĀĂẰẮẴẲȦǠÄǞẢÅǺǍȀȂẠẬẶḀĄȺⱯ"},{base:"AA",letters:"Ꜳ"},{base:"AE",letters:"ÆǼǢ"},{base:"AO",letters:"Ꜵ"},{base:"AU",letters:"Ꜷ"},{base:"AV",letters:"ꜸꜺ"},{base:"AY",letters:"Ꜽ"},{base:"B",letters:"BⒷＢḂḄḆɃƂƁ"},{base:"C",letters:"CⒸＣĆĈĊČÇḈƇȻꜾ"},{base:"D",letters:"DⒹＤḊĎḌḐḒḎĐƋƊƉꝹ"},{base:"DZ",letters:"ǱǄ"},{base:"Dz",letters:"ǲǅ"},{base:"E",letters:"EⒺＥÈÉÊỀẾỄỂẼĒḔḖĔĖËẺĚȄȆẸỆȨḜĘḘḚƐƎ"},{base:"F",letters:"FⒻＦḞƑꝻ"},{base:"G",letters:"GⒼＧǴĜḠĞĠǦĢǤƓꞠꝽꝾ"},{base:"H",letters:"HⒽＨĤḢḦȞḤḨḪĦⱧⱵꞍ"},{base:"I",letters:"IⒾＩÌÍÎĨĪĬİÏḮỈǏȈȊỊĮḬƗ"},{base:"J",letters:"JⒿＪĴɈ"},{base:"K",letters:"KⓀＫḰǨḲĶḴƘⱩꝀꝂꝄꞢ"},{base:"L",letters:"LⓁＬĿĹĽḶḸĻḼḺŁȽⱢⱠꝈꝆꞀ"},{base:"LJ",letters:"Ǉ"},{base:"Lj",letters:"ǈ"},{base:"M",letters:"MⓂＭḾṀṂⱮƜ"},{base:"N",letters:"NⓃＮǸŃÑṄŇṆŅṊṈȠƝꞐꞤ"},{base:"NJ",letters:"Ǌ"},{base:"Nj",letters:"ǋ"},{base:"O",letters:"OⓄＯÒÓÔỒỐỖỔÕṌȬṎŌṐṒŎȮȰÖȪỎŐǑȌȎƠỜỚỠỞỢỌỘǪǬØǾƆƟꝊꝌ"},{base:"OI",letters:"Ƣ"},{base:"OO",letters:"Ꝏ"},{base:"OU",letters:"Ȣ"},{base:"P",letters:"PⓅＰṔṖƤⱣꝐꝒꝔ"},{base:"Q",letters:"QⓆＱꝖꝘɊ"},{base:"R",letters:"RⓇＲŔṘŘȐȒṚṜŖṞɌⱤꝚꞦꞂ"},{base:"S",letters:"SⓈＳẞŚṤŜṠŠṦṢṨȘŞⱾꞨꞄ"},{base:"T",letters:"TⓉＴṪŤṬȚŢṰṮŦƬƮȾꞆ"},{base:"TZ",letters:"Ꜩ"},{base:"U",letters:"UⓊＵÙÚÛŨṸŪṺŬÜǛǗǕǙỦŮŰǓȔȖƯỪỨỮỬỰỤṲŲṶṴɄ"},{base:"V",letters:"VⓋＶṼṾƲꝞɅ"},{base:"VY",letters:"Ꝡ"},{base:"W",letters:"WⓌＷẀẂŴẆẄẈⱲ"},{base:"X",letters:"XⓍＸẊẌ"},{base:"Y",letters:"YⓎＹỲÝŶỸȲẎŸỶỴƳɎỾ"},{base:"Z",letters:"ZⓏＺŹẐŻŽẒẔƵȤⱿⱫꝢ"},{base:"a",letters:"aⓐａẚàáâầấẫẩãāăằắẵẳȧǡäǟảåǻǎȁȃạậặḁąⱥɐ"},{base:"aa",letters:"ꜳ"},{base:"ae",letters:"æǽǣ"},{base:"ao",letters:"ꜵ"},{base:"au",letters:"ꜷ"},{base:"av",letters:"ꜹꜻ"},{base:"ay",letters:"ꜽ"},{base:"b",letters:"bⓑｂḃḅḇƀƃɓ"},{base:"c",letters:"cⓒｃćĉċčçḉƈȼꜿↄ"},{base:"d",letters:"dⓓｄḋďḍḑḓḏđƌɖɗꝺ"},{base:"dz",letters:"ǳǆ"},{base:"e",letters:"eⓔｅèéêềếễểẽēḕḗĕėëẻěȅȇẹệȩḝęḙḛɇɛǝ"},{base:"f",letters:"fⓕｆḟƒꝼ"},{base:"g",letters:"gⓖｇǵĝḡğġǧģǥɠꞡᵹꝿ"},{base:"h",letters:"hⓗｈĥḣḧȟḥḩḫẖħⱨⱶɥ"},{base:"hv",letters:"ƕ"},{base:"i",letters:"iⓘｉìíîĩīĭïḯỉǐȉȋịįḭɨı"},{base:"j",letters:"jⓙｊĵǰɉ"},{base:"k",letters:"kⓚｋḱǩḳķḵƙⱪꝁꝃꝅꞣ"},{base:"l",letters:"lⓛｌŀĺľḷḹļḽḻſłƚɫⱡꝉꞁꝇ"},{base:"lj",letters:"ǉ"},{base:"m",letters:"mⓜｍḿṁṃɱɯ"},{base:"n",letters:"nⓝｎǹńñṅňṇņṋṉƞɲŉꞑꞥ"},{base:"nj",letters:"ǌ"},{base:"o",letters:"oⓞｏòóôồốỗổõṍȭṏōṑṓŏȯȱöȫỏőǒȍȏơờớỡởợọộǫǭøǿɔꝋꝍɵ"},{base:"oi",letters:"ƣ"},{base:"ou",letters:"ȣ"},{base:"oo",letters:"ꝏ"},{base:"p",letters:"pⓟｐṕṗƥᵽꝑꝓꝕ"},{base:"q",letters:"qⓠｑɋꝗꝙ"},{base:"r",letters:"rⓡｒŕṙřȑȓṛṝŗṟɍɽꝛꞧꞃ"},{base:"s",letters:"sⓢｓßśṥŝṡšṧṣṩșşȿꞩꞅẛ"},{base:"t",letters:"tⓣｔṫẗťṭțţṱṯŧƭʈⱦꞇ"},{base:"tz",letters:"ꜩ"},{base:"u",letters:"uⓤｕùúûũṹūṻŭüǜǘǖǚủůűǔȕȗưừứữửựụṳųṷṵʉ"},{base:"v",letters:"vⓥｖṽṿʋꝟʌ"},{base:"vy",letters:"ꝡ"},{base:"w",letters:"wⓦｗẁẃŵẇẅẘẉⱳ"},{base:"x",letters:"xⓧｘẋẍ"},{base:"y",letters:"yⓨｙỳýŷỹȳẏÿỷẙỵƴɏỿ"},{base:"z",letters:"zⓩｚźẑżžẓẕƶȥɀⱬꝣ"}],uF=new RegExp("["+Lp.map(function(e){return e.letters}).join("")+"]","g"),K2={};for(var Fd=0;Fd<Lp.length;Fd++)for(var zd=Lp[Fd],Nd=0;Nd<zd.letters.length;Nd++)K2[zd.letters[Nd]]=zd.base;var Q2=function(t){return t.replace(uF,function(n){return K2[n]})},cF=rF(Q2),g1=function(t){return t.replace(/^\s+|\s+$/g,"")},dF=function(t){return"".concat(t.label," ").concat(t.value)},fF=function(t){return function(n,r){if(n.data.__isNew__)return!0;var i=Z({ignoreCase:!0,ignoreAccents:!0,stringify:dF,trim:!0,matchFrom:"any"},t),o=i.ignoreCase,a=i.ignoreAccents,l=i.stringify,s=i.trim,u=i.matchFrom,d=s?g1(r):r,c=s?g1(l(n)):l(n);return o&&(d=d.toLowerCase(),c=c.toLowerCase()),a&&(d=cF(d),c=Q2(c)),u==="start"?c.substr(0,d.length)===d:c.indexOf(d)>-1}},pF=["innerRef"];function hF(e){var t=e.innerRef,n=tr(e,pF),r=NR(n,"onExited","in","enter","exit","appear");return Q("input",J({ref:t},r,{css:um({label:"dummyInput",background:0,border:0,caretColor:"transparent",fontSize:"inherit",gridArea:"1 / 1 / 2 / 3",outline:0,padding:0,width:1,color:"transparent",left:-100,opacity:0,position:"relative",transform:"scale(.01)"},"","")}))}var mF=function(t){t.cancelable&&t.preventDefault(),t.stopPropagation()};function gF(e){var t=e.isEnabled,n=e.onBottomArrive,r=e.onBottomLeave,i=e.onTopArrive,o=e.onTopLeave,a=b.useRef(!1),l=b.useRef(!1),s=b.useRef(0),u=b.useRef(null),d=b.useCallback(function(w,h){if(u.current!==null){var g=u.current,x=g.scrollTop,S=g.scrollHeight,T=g.clientHeight,k=u.current,C=h>0,_=S-T-x,$=!1;_>h&&a.current&&(r&&r(w),a.current=!1),C&&l.current&&(o&&o(w),l.current=!1),C&&h>_?(n&&!a.current&&n(w),k.scrollTop=S,$=!0,a.current=!0):!C&&-h>x&&(i&&!l.current&&i(w),k.scrollTop=0,$=!0,l.current=!0),$&&mF(w)}},[n,r,i,o]),c=b.useCallback(function(w){d(w,w.deltaY)},[d]),y=b.useCallback(function(w){s.current=w.changedTouches[0].clientY},[]),p=b.useCallback(function(w){var h=s.current-w.changedTouches[0].clientY;d(w,h)},[d]),m=b.useCallback(function(w){if(w){var h=RR?{passive:!1}:!1;w.addEventListener("wheel",c,h),w.addEventListener("touchstart",y,h),w.addEventListener("touchmove",p,h)}},[p,y,c]),v=b.useCallback(function(w){w&&(w.removeEventListener("wheel",c,!1),w.removeEventListener("touchstart",y,!1),w.removeEventListener("touchmove",p,!1))},[p,y,c]);return b.useEffect(function(){if(t){var w=u.current;return m(w),function(){v(w)}}},[t,m,v]),function(w){u.current=w}}var v1=["boxSizing","height","overflow","paddingRight","position"],y1={boxSizing:"border-box",overflow:"hidden",position:"relative",height:"100%"};function x1(e){e.cancelable&&e.preventDefault()}function b1(e){e.stopPropagation()}function w1(){var e=this.scrollTop,t=this.scrollHeight,n=e+this.offsetHeight;e===0?this.scrollTop=1:n===t&&(this.scrollTop=e-1)}function S1(){return"ontouchstart"in window||navigator.maxTouchPoints}var _1=!!(typeof window<"u"&&window.document&&window.document.createElement),Fo=0,gi={capture:!1,passive:!1};function vF(e){var t=e.isEnabled,n=e.accountForScrollbars,r=n===void 0?!0:n,i=b.useRef({}),o=b.useRef(null),a=b.useCallback(function(s){if(_1){var u=document.body,d=u&&u.style;if(r&&v1.forEach(function(m){var v=d&&d[m];i.current[m]=v}),r&&Fo<1){var c=parseInt(i.current.paddingRight,10)||0,y=document.body?document.body.clientWidth:0,p=window.innerWidth-y+c||0;Object.keys(y1).forEach(function(m){var v=y1[m];d&&(d[m]=v)}),d&&(d.paddingRight="".concat(p,"px"))}u&&S1()&&(u.addEventListener("touchmove",x1,gi),s&&(s.addEventListener("touchstart",w1,gi),s.addEventListener("touchmove",b1,gi))),Fo+=1}},[r]),l=b.useCallback(function(s){if(_1){var u=document.body,d=u&&u.style;Fo=Math.max(Fo-1,0),r&&Fo<1&&v1.forEach(function(c){var y=i.current[c];d&&(d[c]=y)}),u&&S1()&&(u.removeEventListener("touchmove",x1,gi),s&&(s.removeEventListener("touchstart",w1,gi),s.removeEventListener("touchmove",b1,gi)))}},[r]);return b.useEffect(function(){if(t){var s=o.current;return a(s),function(){l(s)}}},[t,a,l]),function(s){o.current=s}}var yF=function(t){var n=t.target;return n.ownerDocument.activeElement&&n.ownerDocument.activeElement.blur()},xF={name:"1kfdb0e",styles:"position:fixed;left:0;bottom:0;right:0;top:0"};function bF(e){var t=e.children,n=e.lockEnabled,r=e.captureEnabled,i=r===void 0?!0:r,o=e.onBottomArrive,a=e.onBottomLeave,l=e.onTopArrive,s=e.onTopLeave,u=gF({isEnabled:i,onBottomArrive:o,onBottomLeave:a,onTopArrive:l,onTopLeave:s}),d=vF({isEnabled:n}),c=function(p){u(p),d(p)};return Q(b.Fragment,null,n&&Q("div",{onClick:yF,css:xF}),t(c))}var wF={name:"1a0ro4n-requiredInput",styles:"label:requiredInput;opacity:0;pointer-events:none;position:absolute;bottom:0;left:0;right:0;width:100%"},SF=function(t){var n=t.name,r=t.onFocus;return Q("input",{required:!0,name:n,tabIndex:-1,"aria-hidden":"true",onFocus:r,css:wF,value:"",onChange:function(){}})},_F=SF;function Hm(e){var t;return typeof window<"u"&&window.navigator!=null?e.test(((t=window.navigator.userAgentData)===null||t===void 0?void 0:t.platform)||window.navigator.platform):!1}function CF(){return Hm(/^iPhone/i)}function Z2(){return Hm(/^Mac/i)}function EF(){return Hm(/^iPad/i)||Z2()&&navigator.maxTouchPoints>1}function kF(){return CF()||EF()}function TF(){return Z2()||kF()}var PF=function(t){return t.label},OF=function(t){return t.label},jF=function(t){return t.value},MF=function(t){return!!t.isDisabled},$F={clearIndicator:h8,container:r8,control:w8,dropdownIndicator:f8,group:E8,groupHeading:T8,indicatorsContainer:s8,indicatorSeparator:g8,input:M8,loadingIndicator:x8,loadingMessage:ZR,menu:WR,menuList:XR,menuPortal:t8,multiValue:A8,multiValueLabel:R8,multiValueRemove:F8,noOptionsMessage:QR,option:H8,placeholder:q8,singleValue:K8,valueContainer:o8},IF={primary:"#2684FF",primary75:"#4C9AFF",primary50:"#B2D4FF",primary25:"#DEEBFF",danger:"#DE350B",dangerLight:"#FFBDAD",neutral0:"hsl(0, 0%, 100%)",neutral5:"hsl(0, 0%, 95%)",neutral10:"hsl(0, 0%, 90%)",neutral20:"hsl(0, 0%, 80%)",neutral30:"hsl(0, 0%, 70%)",neutral40:"hsl(0, 0%, 60%)",neutral50:"hsl(0, 0%, 50%)",neutral60:"hsl(0, 0%, 40%)",neutral70:"hsl(0, 0%, 30%)",neutral80:"hsl(0, 0%, 20%)",neutral90:"hsl(0, 0%, 10%)"},DF=4,J2=4,LF=38,AF=J2*2,RF={baseUnit:J2,controlHeight:LF,menuGutter:AF},Bd={borderRadius:DF,colors:IF,spacing:RF},FF={"aria-live":"polite",backspaceRemovesValue:!0,blurInputOnSelect:f1(),captureMenuScroll:!f1(),classNames:{},closeMenuOnSelect:!0,closeMenuOnScroll:!1,components:{},controlShouldRenderValue:!0,escapeClearsValue:!1,filterOption:fF(),formatGroupLabel:PF,getOptionLabel:OF,getOptionValue:jF,isDisabled:!1,isLoading:!1,isMulti:!1,isRtl:!1,isSearchable:!0,isOptionDisabled:MF,loadingMessage:function(){return"Loading..."},maxMenuHeight:300,minMenuHeight:140,menuIsOpen:!1,menuPlacement:"bottom",menuPosition:"absolute",menuShouldBlockScroll:!1,menuShouldScrollIntoView:!LR(),noOptionsMessage:function(){return"No options"},openMenuOnFocus:!1,openMenuOnClick:!0,options:[],pageSize:5,placeholder:"Select...",screenReaderStatus:function(t){var n=t.count;return"".concat(n," result").concat(n!==1?"s":""," available")},styles:{},tabIndex:0,tabSelectsValue:!0,unstyled:!1};function C1(e,t,n,r){var i=n_(e,t,n),o=r_(e,t,n),a=t_(e,t),l=iu(e,t);return{type:"option",data:t,isDisabled:i,isSelected:o,label:a,value:l,index:r}}function nl(e,t){return e.options.map(function(n,r){if("options"in n){var i=n.options.map(function(a,l){return C1(e,a,t,l)}).filter(function(a){return k1(e,a)});return i.length>0?{type:"group",data:n,options:i,index:r}:void 0}var o=C1(e,n,t,r);return k1(e,o)?o:void 0}).filter(FR)}function e_(e){return e.reduce(function(t,n){return n.type==="group"?t.push.apply(t,zm(n.options.map(function(r){return r.data}))):t.push(n.data),t},[])}function E1(e,t){return e.reduce(function(n,r){return r.type==="group"?n.push.apply(n,zm(r.options.map(function(i){return{data:i.data,id:"".concat(t,"-").concat(r.index,"-").concat(i.index)}}))):n.push({data:r.data,id:"".concat(t,"-").concat(r.index)}),n},[])}function zF(e,t){return e_(nl(e,t))}function k1(e,t){var n=e.inputValue,r=n===void 0?"":n,i=t.data,o=t.isSelected,a=t.label,l=t.value;return(!o_(e)||!o)&&i_(e,{label:a,value:l,data:i},r)}function NF(e,t){var n=e.focusedValue,r=e.selectValue,i=r.indexOf(n);if(i>-1){var o=t.indexOf(n);if(o>-1)return n;if(i<t.length)return t[i]}return null}function BF(e,t){var n=e.focusedOption;return n&&t.indexOf(n)>-1?n:t[0]}var Vd=function(t,n){var r,i=(r=t.find(function(o){return o.data===n}))===null||r===void 0?void 0:r.id;return i||null},t_=function(t,n){return t.getOptionLabel(n)},iu=function(t,n){return t.getOptionValue(n)};function n_(e,t,n){return typeof e.isOptionDisabled=="function"?e.isOptionDisabled(t,n):!1}function r_(e,t,n){if(n.indexOf(t)>-1)return!0;if(typeof e.isOptionSelected=="function")return e.isOptionSelected(t,n);var r=iu(e,t);return n.some(function(i){return iu(e,i)===r})}function i_(e,t,n){return e.filterOption?e.filterOption(t,n):!0}var o_=function(t){var n=t.hideSelectedOptions,r=t.isMulti;return n===void 0?r:n},VF=1,a_=function(e){sR(n,e);var t=dR(n);function n(r){var i;if(oR(this,n),i=t.call(this,r),i.state={ariaSelection:null,focusedOption:null,focusedOptionId:null,focusableOptionsWithIds:[],focusedValue:null,inputIsHidden:!1,isFocused:!1,selectValue:[],clearFocusValueOnUpdate:!1,prevWasFocused:!1,inputIsHiddenAfterUpdate:void 0,prevProps:void 0,instancePrefix:"",isAppleDevice:!1},i.blockOptionHover=!1,i.isComposing=!1,i.commonProps=void 0,i.initialTouchX=0,i.initialTouchY=0,i.openAfterFocus=!1,i.scrollToFocusedOptionOnUpdate=!1,i.userIsDragging=void 0,i.controlRef=null,i.getControlRef=function(s){i.controlRef=s},i.focusedOptionRef=null,i.getFocusedOptionRef=function(s){i.focusedOptionRef=s},i.menuListRef=null,i.getMenuListRef=function(s){i.menuListRef=s},i.inputRef=null,i.getInputRef=function(s){i.inputRef=s},i.focus=i.focusInput,i.blur=i.blurInput,i.onChange=function(s,u){var d=i.props,c=d.onChange,y=d.name;u.name=y,i.ariaOnChange(s,u),c(s,u)},i.setValue=function(s,u,d){var c=i.props,y=c.closeMenuOnSelect,p=c.isMulti,m=c.inputValue;i.onInputChange("",{action:"set-value",prevInputValue:m}),y&&(i.setState({inputIsHiddenAfterUpdate:!p}),i.onMenuClose()),i.setState({clearFocusValueOnUpdate:!0}),i.onChange(s,{action:u,option:d})},i.selectOption=function(s){var u=i.props,d=u.blurInputOnSelect,c=u.isMulti,y=u.name,p=i.state.selectValue,m=c&&i.isOptionSelected(s,p),v=i.isOptionDisabled(s,p);if(m){var w=i.getOptionValue(s);i.setValue(p.filter(function(h){return i.getOptionValue(h)!==w}),"deselect-option",s)}else if(!v)c?i.setValue([].concat(zm(p),[s]),"select-option",s):i.setValue(s,"select-option");else{i.ariaOnChange(s,{action:"select-option",option:s,name:y});return}d&&i.blurInput()},i.removeValue=function(s){var u=i.props.isMulti,d=i.state.selectValue,c=i.getOptionValue(s),y=d.filter(function(m){return i.getOptionValue(m)!==c}),p=Ps(u,y,y[0]||null);i.onChange(p,{action:"remove-value",removedValue:s}),i.focusInput()},i.clearValue=function(){var s=i.state.selectValue;i.onChange(Ps(i.props.isMulti,[],null),{action:"clear",removedValues:s})},i.popValue=function(){var s=i.props.isMulti,u=i.state.selectValue,d=u[u.length-1],c=u.slice(0,u.length-1),y=Ps(s,c,c[0]||null);d&&i.onChange(y,{action:"pop-value",removedValue:d})},i.getFocusedOptionId=function(s){return Vd(i.state.focusableOptionsWithIds,s)},i.getFocusableOptionsWithIds=function(){return E1(nl(i.props,i.state.selectValue),i.getElementId("option"))},i.getValue=function(){return i.state.selectValue},i.cx=function(){for(var s=arguments.length,u=new Array(s),d=0;d<s;d++)u[d]=arguments[d];return jR.apply(void 0,[i.props.classNamePrefix].concat(u))},i.getOptionLabel=function(s){return t_(i.props,s)},i.getOptionValue=function(s){return iu(i.props,s)},i.getStyles=function(s,u){var d=i.props.unstyled,c=$F[s](u,d);c.boxSizing="border-box";var y=i.props.styles[s];return y?y(c,u):c},i.getClassNames=function(s,u){var d,c;return(d=(c=i.props.classNames)[s])===null||d===void 0?void 0:d.call(c,u)},i.getElementId=function(s){return"".concat(i.state.instancePrefix,"-").concat(s)},i.getComponents=function(){return eF(i.props)},i.buildCategorizedOptions=function(){return nl(i.props,i.state.selectValue)},i.getCategorizedOptions=function(){return i.props.menuIsOpen?i.buildCategorizedOptions():[]},i.buildFocusableOptions=function(){return e_(i.buildCategorizedOptions())},i.getFocusableOptions=function(){return i.props.menuIsOpen?i.buildFocusableOptions():[]},i.ariaOnChange=function(s,u){i.setState({ariaSelection:Z({value:s},u)})},i.onMenuMouseDown=function(s){s.button===0&&(s.stopPropagation(),s.preventDefault(),i.focusInput())},i.onMenuMouseMove=function(s){i.blockOptionHover=!1},i.onControlMouseDown=function(s){if(!s.defaultPrevented){var u=i.props.openMenuOnClick;i.state.isFocused?i.props.menuIsOpen?s.target.tagName!=="INPUT"&&s.target.tagName!=="TEXTAREA"&&i.onMenuClose():u&&i.openMenu("first"):(u&&(i.openAfterFocus=!0),i.focusInput()),s.target.tagName!=="INPUT"&&s.target.tagName!=="TEXTAREA"&&s.preventDefault()}},i.onDropdownIndicatorMouseDown=function(s){if(!(s&&s.type==="mousedown"&&s.button!==0)&&!i.props.isDisabled){var u=i.props,d=u.isMulti,c=u.menuIsOpen;i.focusInput(),c?(i.setState({inputIsHiddenAfterUpdate:!d}),i.onMenuClose()):i.openMenu("first"),s.preventDefault()}},i.onClearIndicatorMouseDown=function(s){s&&s.type==="mousedown"&&s.button!==0||(i.clearValue(),s.preventDefault(),i.openAfterFocus=!1,s.type==="touchend"?i.focusInput():setTimeout(function(){return i.focusInput()}))},i.onScroll=function(s){typeof i.props.closeMenuOnScroll=="boolean"?s.target instanceof HTMLElement&&bc(s.target)&&i.props.onMenuClose():typeof i.props.closeMenuOnScroll=="function"&&i.props.closeMenuOnScroll(s)&&i.props.onMenuClose()},i.onCompositionStart=function(){i.isComposing=!0},i.onCompositionEnd=function(){i.isComposing=!1},i.onTouchStart=function(s){var u=s.touches,d=u&&u.item(0);d&&(i.initialTouchX=d.clientX,i.initialTouchY=d.clientY,i.userIsDragging=!1)},i.onTouchMove=function(s){var u=s.touches,d=u&&u.item(0);if(d){var c=Math.abs(d.clientX-i.initialTouchX),y=Math.abs(d.clientY-i.initialTouchY),p=5;i.userIsDragging=c>p||y>p}},i.onTouchEnd=function(s){i.userIsDragging||(i.controlRef&&!i.controlRef.contains(s.target)&&i.menuListRef&&!i.menuListRef.contains(s.target)&&i.blurInput(),i.initialTouchX=0,i.initialTouchY=0)},i.onControlTouchEnd=function(s){i.userIsDragging||i.onControlMouseDown(s)},i.onClearIndicatorTouchEnd=function(s){i.userIsDragging||i.onClearIndicatorMouseDown(s)},i.onDropdownIndicatorTouchEnd=function(s){i.userIsDragging||i.onDropdownIndicatorMouseDown(s)},i.handleInputChange=function(s){var u=i.props.inputValue,d=s.currentTarget.value;i.setState({inputIsHiddenAfterUpdate:!1}),i.onInputChange(d,{action:"input-change",prevInputValue:u}),i.props.menuIsOpen||i.onMenuOpen()},i.onInputFocus=function(s){i.props.onFocus&&i.props.onFocus(s),i.setState({inputIsHiddenAfterUpdate:!1,isFocused:!0}),(i.openAfterFocus||i.props.openMenuOnFocus)&&i.openMenu("first"),i.openAfterFocus=!1},i.onInputBlur=function(s){var u=i.props.inputValue;if(i.menuListRef&&i.menuListRef.contains(document.activeElement)){i.inputRef.focus();return}i.props.onBlur&&i.props.onBlur(s),i.onInputChange("",{action:"input-blur",prevInputValue:u}),i.onMenuClose(),i.setState({focusedValue:null,isFocused:!1})},i.onOptionHover=function(s){if(!(i.blockOptionHover||i.state.focusedOption===s)){var u=i.getFocusableOptions(),d=u.indexOf(s);i.setState({focusedOption:s,focusedOptionId:d>-1?i.getFocusedOptionId(s):null})}},i.shouldHideSelectedOptions=function(){return o_(i.props)},i.onValueInputFocus=function(s){s.preventDefault(),s.stopPropagation(),i.focus()},i.onKeyDown=function(s){var u=i.props,d=u.isMulti,c=u.backspaceRemovesValue,y=u.escapeClearsValue,p=u.inputValue,m=u.isClearable,v=u.isDisabled,w=u.menuIsOpen,h=u.onKeyDown,g=u.tabSelectsValue,x=u.openMenuOnFocus,S=i.state,T=S.focusedOption,k=S.focusedValue,C=S.selectValue;if(!v&&!(typeof h=="function"&&(h(s),s.defaultPrevented))){switch(i.blockOptionHover=!0,s.key){case"ArrowLeft":if(!d||p)return;i.focusValue("previous");break;case"ArrowRight":if(!d||p)return;i.focusValue("next");break;case"Delete":case"Backspace":if(p)return;if(k)i.removeValue(k);else{if(!c)return;d?i.popValue():m&&i.clearValue()}break;case"Tab":if(i.isComposing||s.shiftKey||!w||!g||!T||x&&i.isOptionSelected(T,C))return;i.selectOption(T);break;case"Enter":if(s.keyCode===229)break;if(w){if(!T||i.isComposing)return;i.selectOption(T);break}return;case"Escape":w?(i.setState({inputIsHiddenAfterUpdate:!1}),i.onInputChange("",{action:"menu-close",prevInputValue:p}),i.onMenuClose()):m&&y&&i.clearValue();break;case" ":if(p)return;if(!w){i.openMenu("first");break}if(!T)return;i.selectOption(T);break;case"ArrowUp":w?i.focusOption("up"):i.openMenu("last");break;case"ArrowDown":w?i.focusOption("down"):i.openMenu("first");break;case"PageUp":if(!w)return;i.focusOption("pageup");break;case"PageDown":if(!w)return;i.focusOption("pagedown");break;case"Home":if(!w)return;i.focusOption("first");break;case"End":if(!w)return;i.focusOption("last");break;default:return}s.preventDefault()}},i.state.instancePrefix="react-select-"+(i.props.instanceId||++VF),i.state.selectValue=c1(r.value),r.menuIsOpen&&i.state.selectValue.length){var o=i.getFocusableOptionsWithIds(),a=i.buildFocusableOptions(),l=a.indexOf(i.state.selectValue[0]);i.state.focusableOptionsWithIds=o,i.state.focusedOption=a[l],i.state.focusedOptionId=Vd(o,a[l])}return i}return aR(n,[{key:"componentDidMount",value:function(){this.startListeningComposition(),this.startListeningToTouch(),this.props.closeMenuOnScroll&&document&&document.addEventListener&&document.addEventListener("scroll",this.onScroll,!0),this.props.autoFocus&&this.focusInput(),this.props.menuIsOpen&&this.state.focusedOption&&this.menuListRef&&this.focusedOptionRef&&d1(this.menuListRef,this.focusedOptionRef),TF()&&this.setState({isAppleDevice:!0})}},{key:"componentDidUpdate",value:function(i){var o=this.props,a=o.isDisabled,l=o.menuIsOpen,s=this.state.isFocused;(s&&!a&&i.isDisabled||s&&l&&!i.menuIsOpen)&&this.focusInput(),s&&a&&!i.isDisabled?this.setState({isFocused:!1},this.onMenuClose):!s&&!a&&i.isDisabled&&this.inputRef===document.activeElement&&this.setState({isFocused:!0}),this.menuListRef&&this.focusedOptionRef&&this.scrollToFocusedOptionOnUpdate&&(d1(this.menuListRef,this.focusedOptionRef),this.scrollToFocusedOptionOnUpdate=!1)}},{key:"componentWillUnmount",value:function(){this.stopListeningComposition(),this.stopListeningToTouch(),document.removeEventListener("scroll",this.onScroll,!0)}},{key:"onMenuOpen",value:function(){this.props.onMenuOpen()}},{key:"onMenuClose",value:function(){this.onInputChange("",{action:"menu-close",prevInputValue:this.props.inputValue}),this.props.onMenuClose()}},{key:"onInputChange",value:function(i,o){this.props.onInputChange(i,o)}},{key:"focusInput",value:function(){this.inputRef&&this.inputRef.focus()}},{key:"blurInput",value:function(){this.inputRef&&this.inputRef.blur()}},{key:"openMenu",value:function(i){var o=this,a=this.state,l=a.selectValue,s=a.isFocused,u=this.buildFocusableOptions(),d=i==="first"?0:u.length-1;if(!this.props.isMulti){var c=u.indexOf(l[0]);c>-1&&(d=c)}this.scrollToFocusedOptionOnUpdate=!(s&&this.menuListRef),this.setState({inputIsHiddenAfterUpdate:!1,focusedValue:null,focusedOption:u[d],focusedOptionId:this.getFocusedOptionId(u[d])},function(){return o.onMenuOpen()})}},{key:"focusValue",value:function(i){var o=this.state,a=o.selectValue,l=o.focusedValue;if(this.props.isMulti){this.setState({focusedOption:null});var s=a.indexOf(l);l||(s=-1);var u=a.length-1,d=-1;if(a.length){switch(i){case"previous":s===0?d=0:s===-1?d=u:d=s-1;break;case"next":s>-1&&s<u&&(d=s+1);break}this.setState({inputIsHidden:d!==-1,focusedValue:a[d]})}}}},{key:"focusOption",value:function(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"first",o=this.props.pageSize,a=this.state.focusedOption,l=this.getFocusableOptions();if(l.length){var s=0,u=l.indexOf(a);a||(u=-1),i==="up"?s=u>0?u-1:l.length-1:i==="down"?s=(u+1)%l.length:i==="pageup"?(s=u-o,s<0&&(s=0)):i==="pagedown"?(s=u+o,s>l.length-1&&(s=l.length-1)):i==="last"&&(s=l.length-1),this.scrollToFocusedOptionOnUpdate=!0,this.setState({focusedOption:l[s],focusedValue:null,focusedOptionId:this.getFocusedOptionId(l[s])})}}},{key:"getTheme",value:function(){return this.props.theme?typeof this.props.theme=="function"?this.props.theme(Bd):Z(Z({},Bd),this.props.theme):Bd}},{key:"getCommonProps",value:function(){var i=this.clearValue,o=this.cx,a=this.getStyles,l=this.getClassNames,s=this.getValue,u=this.selectOption,d=this.setValue,c=this.props,y=c.isMulti,p=c.isRtl,m=c.options,v=this.hasValue();return{clearValue:i,cx:o,getStyles:a,getClassNames:l,getValue:s,hasValue:v,isMulti:y,isRtl:p,options:m,selectOption:u,selectProps:c,setValue:d,theme:this.getTheme()}}},{key:"hasValue",value:function(){var i=this.state.selectValue;return i.length>0}},{key:"hasOptions",value:function(){return!!this.getFocusableOptions().length}},{key:"isClearable",value:function(){var i=this.props,o=i.isClearable,a=i.isMulti;return o===void 0?a:o}},{key:"isOptionDisabled",value:function(i,o){return n_(this.props,i,o)}},{key:"isOptionSelected",value:function(i,o){return r_(this.props,i,o)}},{key:"filterOption",value:function(i,o){return i_(this.props,i,o)}},{key:"formatOptionLabel",value:function(i,o){if(typeof this.props.formatOptionLabel=="function"){var a=this.props.inputValue,l=this.state.selectValue;return this.props.formatOptionLabel(i,{context:o,inputValue:a,selectValue:l})}else return this.getOptionLabel(i)}},{key:"formatGroupLabel",value:function(i){return this.props.formatGroupLabel(i)}},{key:"startListeningComposition",value:function(){document&&document.addEventListener&&(document.addEventListener("compositionstart",this.onCompositionStart,!1),document.addEventListener("compositionend",this.onCompositionEnd,!1))}},{key:"stopListeningComposition",value:function(){document&&document.removeEventListener&&(document.removeEventListener("compositionstart",this.onCompositionStart),document.removeEventListener("compositionend",this.onCompositionEnd))}},{key:"startListeningToTouch",value:function(){document&&document.addEventListener&&(document.addEventListener("touchstart",this.onTouchStart,!1),document.addEventListener("touchmove",this.onTouchMove,!1),document.addEventListener("touchend",this.onTouchEnd,!1))}},{key:"stopListeningToTouch",value:function(){document&&document.removeEventListener&&(document.removeEventListener("touchstart",this.onTouchStart),document.removeEventListener("touchmove",this.onTouchMove),document.removeEventListener("touchend",this.onTouchEnd))}},{key:"renderInput",value:function(){var i=this.props,o=i.isDisabled,a=i.isSearchable,l=i.inputId,s=i.inputValue,u=i.tabIndex,d=i.form,c=i.menuIsOpen,y=i.required,p=this.getComponents(),m=p.Input,v=this.state,w=v.inputIsHidden,h=v.ariaSelection,g=this.commonProps,x=l||this.getElementId("input"),S=Z(Z(Z({"aria-autocomplete":"list","aria-expanded":c,"aria-haspopup":!0,"aria-errormessage":this.props["aria-errormessage"],"aria-invalid":this.props["aria-invalid"],"aria-label":this.props["aria-label"],"aria-labelledby":this.props["aria-labelledby"],"aria-required":y,role:"combobox","aria-activedescendant":this.state.isAppleDevice?void 0:this.state.focusedOptionId||""},c&&{"aria-controls":this.getElementId("listbox")}),!a&&{"aria-readonly":!0}),this.hasValue()?(h==null?void 0:h.action)==="initial-input-focus"&&{"aria-describedby":this.getElementId("live-region")}:{"aria-describedby":this.getElementId("placeholder")});return a?b.createElement(m,J({},g,{autoCapitalize:"none",autoComplete:"off",autoCorrect:"off",id:x,innerRef:this.getInputRef,isDisabled:o,isHidden:w,onBlur:this.onInputBlur,onChange:this.handleInputChange,onFocus:this.onInputFocus,spellCheck:"false",tabIndex:u,form:d,type:"text",value:s},S)):b.createElement(hF,J({id:x,innerRef:this.getInputRef,onBlur:this.onInputBlur,onChange:nu,onFocus:this.onInputFocus,disabled:o,tabIndex:u,inputMode:"none",form:d,value:""},S))}},{key:"renderPlaceholderOrValue",value:function(){var i=this,o=this.getComponents(),a=o.MultiValue,l=o.MultiValueContainer,s=o.MultiValueLabel,u=o.MultiValueRemove,d=o.SingleValue,c=o.Placeholder,y=this.commonProps,p=this.props,m=p.controlShouldRenderValue,v=p.isDisabled,w=p.isMulti,h=p.inputValue,g=p.placeholder,x=this.state,S=x.selectValue,T=x.focusedValue,k=x.isFocused;if(!this.hasValue()||!m)return h?null:b.createElement(c,J({},y,{key:"placeholder",isDisabled:v,isFocused:k,innerProps:{id:this.getElementId("placeholder")}}),g);if(w)return S.map(function(_,$){var M=_===T,R="".concat(i.getOptionLabel(_),"-").concat(i.getOptionValue(_));return b.createElement(a,J({},y,{components:{Container:l,Label:s,Remove:u},isFocused:M,isDisabled:v,key:R,index:$,removeProps:{onClick:function(){return i.removeValue(_)},onTouchEnd:function(){return i.removeValue(_)},onMouseDown:function(j){j.preventDefault()}},data:_}),i.formatOptionLabel(_,"value"))});if(h)return null;var C=S[0];return b.createElement(d,J({},y,{data:C,isDisabled:v}),this.formatOptionLabel(C,"value"))}},{key:"renderClearIndicator",value:function(){var i=this.getComponents(),o=i.ClearIndicator,a=this.commonProps,l=this.props,s=l.isDisabled,u=l.isLoading,d=this.state.isFocused;if(!this.isClearable()||!o||s||!this.hasValue()||u)return null;var c={onMouseDown:this.onClearIndicatorMouseDown,onTouchEnd:this.onClearIndicatorTouchEnd,"aria-hidden":"true"};return b.createElement(o,J({},a,{innerProps:c,isFocused:d}))}},{key:"renderLoadingIndicator",value:function(){var i=this.getComponents(),o=i.LoadingIndicator,a=this.commonProps,l=this.props,s=l.isDisabled,u=l.isLoading,d=this.state.isFocused;if(!o||!u)return null;var c={"aria-hidden":"true"};return b.createElement(o,J({},a,{innerProps:c,isDisabled:s,isFocused:d}))}},{key:"renderIndicatorSeparator",value:function(){var i=this.getComponents(),o=i.DropdownIndicator,a=i.IndicatorSeparator;if(!o||!a)return null;var l=this.commonProps,s=this.props.isDisabled,u=this.state.isFocused;return b.createElement(a,J({},l,{isDisabled:s,isFocused:u}))}},{key:"renderDropdownIndicator",value:function(){var i=this.getComponents(),o=i.DropdownIndicator;if(!o)return null;var a=this.commonProps,l=this.props.isDisabled,s=this.state.isFocused,u={onMouseDown:this.onDropdownIndicatorMouseDown,onTouchEnd:this.onDropdownIndicatorTouchEnd,"aria-hidden":"true"};return b.createElement(o,J({},a,{innerProps:u,isDisabled:l,isFocused:s}))}},{key:"renderMenu",value:function(){var i=this,o=this.getComponents(),a=o.Group,l=o.GroupHeading,s=o.Menu,u=o.MenuList,d=o.MenuPortal,c=o.LoadingMessage,y=o.NoOptionsMessage,p=o.Option,m=this.commonProps,v=this.state.focusedOption,w=this.props,h=w.captureMenuScroll,g=w.inputValue,x=w.isLoading,S=w.loadingMessage,T=w.minMenuHeight,k=w.maxMenuHeight,C=w.menuIsOpen,_=w.menuPlacement,$=w.menuPosition,M=w.menuPortalTarget,R=w.menuShouldBlockScroll,L=w.menuShouldScrollIntoView,j=w.noOptionsMessage,F=w.onMenuScrollToTop,A=w.onMenuScrollToBottom;if(!C)return null;var O=function(U,H){var q=U.type,X=U.data,ee=U.isDisabled,fe=U.isSelected,be=U.label,ie=U.value,Me=v===X,Be=ee?void 0:function(){return i.onOptionHover(X)},Ve=ee?void 0:function(){return i.selectOption(X)},si="".concat(i.getElementId("option"),"-").concat(H),yt={id:si,onClick:Ve,onMouseMove:Be,onMouseOver:Be,tabIndex:-1,role:"option","aria-selected":i.state.isAppleDevice?void 0:fe};return b.createElement(p,J({},m,{innerProps:yt,data:X,isDisabled:ee,isSelected:fe,key:si,label:be,type:q,value:ie,isFocused:Me,innerRef:Me?i.getFocusedOptionRef:void 0}),i.formatOptionLabel(U.data,"menu"))},D;if(this.hasOptions())D=this.getCategorizedOptions().map(function(N){if(N.type==="group"){var U=N.data,H=N.options,q=N.index,X="".concat(i.getElementId("group"),"-").concat(q),ee="".concat(X,"-heading");return b.createElement(a,J({},m,{key:X,data:U,options:H,Heading:l,headingProps:{id:ee,data:N.data},label:i.formatGroupLabel(N.data)}),N.options.map(function(fe){return O(fe,"".concat(q,"-").concat(fe.index))}))}else if(N.type==="option")return O(N,"".concat(N.index))});else if(x){var P=S({inputValue:g});if(P===null)return null;D=b.createElement(c,m,P)}else{var I=j({inputValue:g});if(I===null)return null;D=b.createElement(y,m,I)}var z={minMenuHeight:T,maxMenuHeight:k,menuPlacement:_,menuPosition:$,menuShouldScrollIntoView:L},B=b.createElement(GR,J({},m,z),function(N){var U=N.ref,H=N.placerProps,q=H.placement,X=H.maxHeight;return b.createElement(s,J({},m,z,{innerRef:U,innerProps:{onMouseDown:i.onMenuMouseDown,onMouseMove:i.onMenuMouseMove},isLoading:x,placement:q}),b.createElement(bF,{captureEnabled:h,onTopArrive:F,onBottomArrive:A,lockEnabled:R},function(ee){return b.createElement(u,J({},m,{innerRef:function(be){i.getMenuListRef(be),ee(be)},innerProps:{role:"listbox","aria-multiselectable":m.isMulti,id:i.getElementId("listbox")},isLoading:x,maxHeight:X,focusedOption:v}),D)}))});return M||$==="fixed"?b.createElement(d,J({},m,{appendTo:M,controlElement:this.controlRef,menuPlacement:_,menuPosition:$}),B):B}},{key:"renderFormField",value:function(){var i=this,o=this.props,a=o.delimiter,l=o.isDisabled,s=o.isMulti,u=o.name,d=o.required,c=this.state.selectValue;if(d&&!this.hasValue()&&!l)return b.createElement(_F,{name:u,onFocus:this.onValueInputFocus});if(!(!u||l))if(s)if(a){var y=c.map(function(v){return i.getOptionValue(v)}).join(a);return b.createElement("input",{name:u,type:"hidden",value:y})}else{var p=c.length>0?c.map(function(v,w){return b.createElement("input",{key:"i-".concat(w),name:u,type:"hidden",value:i.getOptionValue(v)})}):b.createElement("input",{name:u,type:"hidden",value:""});return b.createElement("div",null,p)}else{var m=c[0]?this.getOptionValue(c[0]):"";return b.createElement("input",{name:u,type:"hidden",value:m})}}},{key:"renderLiveRegion",value:function(){var i=this.commonProps,o=this.state,a=o.ariaSelection,l=o.focusedOption,s=o.focusedValue,u=o.isFocused,d=o.selectValue,c=this.getFocusableOptions();return b.createElement(lF,J({},i,{id:this.getElementId("live-region"),ariaSelection:a,focusedOption:l,focusedValue:s,isFocused:u,selectValue:d,focusableOptions:c,isAppleDevice:this.state.isAppleDevice}))}},{key:"render",value:function(){var i=this.getComponents(),o=i.Control,a=i.IndicatorsContainer,l=i.SelectContainer,s=i.ValueContainer,u=this.props,d=u.className,c=u.id,y=u.isDisabled,p=u.menuIsOpen,m=this.state.isFocused,v=this.commonProps=this.getCommonProps();return b.createElement(l,J({},v,{className:d,innerProps:{id:c,onKeyDown:this.onKeyDown},isDisabled:y,isFocused:m}),this.renderLiveRegion(),b.createElement(o,J({},v,{innerRef:this.getControlRef,innerProps:{onMouseDown:this.onControlMouseDown,onTouchEnd:this.onControlTouchEnd},isDisabled:y,isFocused:m,menuIsOpen:p}),b.createElement(s,J({},v,{isDisabled:y}),this.renderPlaceholderOrValue(),this.renderInput()),b.createElement(a,J({},v,{isDisabled:y}),this.renderClearIndicator(),this.renderLoadingIndicator(),this.renderIndicatorSeparator(),this.renderDropdownIndicator())),this.renderMenu(),this.renderFormField())}}],[{key:"getDerivedStateFromProps",value:function(i,o){var a=o.prevProps,l=o.clearFocusValueOnUpdate,s=o.inputIsHiddenAfterUpdate,u=o.ariaSelection,d=o.isFocused,c=o.prevWasFocused,y=o.instancePrefix,p=i.options,m=i.value,v=i.menuIsOpen,w=i.inputValue,h=i.isMulti,g=c1(m),x={};if(a&&(m!==a.value||p!==a.options||v!==a.menuIsOpen||w!==a.inputValue)){var S=v?zF(i,g):[],T=v?E1(nl(i,g),"".concat(y,"-option")):[],k=l?NF(o,g):null,C=BF(o,S),_=Vd(T,C);x={selectValue:g,focusedOption:C,focusedOptionId:_,focusableOptionsWithIds:T,focusedValue:k,clearFocusValueOnUpdate:!1}}var $=s!=null&&i!==a?{inputIsHidden:s,inputIsHiddenAfterUpdate:void 0}:{},M=u,R=d&&c;return d&&!R&&(M={value:Ps(h,g,g[0]||null),options:g,action:"initial-input-focus"},R=!c),(u==null?void 0:u.action)==="initial-input-focus"&&(M=null),Z(Z(Z({},x),$),{},{prevProps:i,ariaSelection:M,prevWasFocused:R})}}]),n}(b.Component);a_.defaultProps=FF;var UF=b.forwardRef(function(e,t){var n=iR(e);return b.createElement(a_,J({ref:t},n))}),wc=UF;const HF=E.div`
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
`,WF=E.label`
  font-size: 14px;
  color: #666;
  margin-bottom: 5px;
`,GF=({cityOptions:e,selectedCity:t,onChange:n,onInputChange:r})=>f.jsxs(HF,{children:[f.jsx(WF,{children:"Місто"}),f.jsx(wc,{options:e,onInputChange:r,onChange:n,placeholder:"Почніть вводити місто...",value:t,noOptionsMessage:()=>"Введіть назву міста"})]}),qF=E.div`
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
`,YF=E.label`
  font-size: 14px;
  color: #666;
  margin-bottom: 5px;
`,XF=({options:e=[],value:t,onChange:n,selectedCity:r})=>f.jsxs(qF,{children:[f.jsx(YF,{children:"Спосіб доставки"}),f.jsx(wc,{options:e,placeholder:"Оберіть спосіб доставки...",isDisabled:!r,value:e.find(i=>i.value===t)||null,onChange:i=>n(i.value)})]}),T1=E.div`
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
`,P1=E.label`
  font-size: 14px;
  color: #666;
  margin-bottom: 5px;
`,KF=({deliveryMethod:e,officeOptions:t,selectedOffice:n,selectedUkrOffice:r,setSelectedOffice:i,setSelectedUkrOffice:o})=>e==="nova"?f.jsxs(T1,{children:[f.jsx(P1,{children:"Відділення Нової пошти"}),f.jsx(wc,{options:t,onChange:a=>i(a),value:n,placeholder:"Оберіть відділення..."})]}):e==="ukr"?f.jsxs(T1,{children:[f.jsx(P1,{children:"Адреса доставки (Укрпошта)"}),f.jsx("input",{type:"text",value:r,onChange:a=>o(a.target.value),placeholder:"Наприклад:  вул. Шевченка, 10, індекс 01001",style:{padding:"8px 12px",border:"1px solid #c6c5c5",borderRadius:"4px",outline:"none"}})]}):null,QF=E.div`
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
`;const ZF=E.button`
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
`,JF=E.ul`
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
`,ez=E.li`
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
`,tz=E.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 6px;
  border: 1px solid #eee;
  background-color: #f9f9f9;
`,nz=E.div`
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
`,rz=E.div`
  text-align: center;
  width: 100px;
 
`,iz=E.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 2px;
`,oz=E.span`
  font-size: 18px;
  font-weight: 600;
  color: ${({$discount:e})=>"#111"};
`,az=E.span`
  font-size: 13px;
  color: #999;
  text-decoration: line-through;
`,sz=E.span`
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
`,lz=({cartItems:e,totalAmount:t,totalQuantity:n,isFormValid:r,handleSubmit:i})=>f.jsxs(QF,{children:[f.jsx("h3",{children:"Ваше замовлення"}),f.jsx(JF,{children:e.map((o,a)=>{var c,y;const l=o.new_price&&o.new_price<o.price,s=l?o.new_price:o.price,u=l?Math.round((o.price-o.new_price)/o.price*100):0,d=s*(o.quantity||1);return f.jsxs(ez,{children:[f.jsx(tz,{src:((y=(c=o.images)==null?void 0:c[0])==null?void 0:y.url)||to,alt:o.name}),f.jsxs(nz,{children:[f.jsx("p",{className:"item-name",children:o.name}),f.jsxs("p",{className:"item-details",children:[o.quantity," шт. × ",o.price," грн"]})]}),f.jsx(rz,{children:f.jsxs(iz,{children:[f.jsxs(oz,{$discount:l,children:[d.toLocaleString()," грн"]}),l&&f.jsxs(f.Fragment,{children:[f.jsxs(az,{children:[(o.price*(o.quantity||1)).toLocaleString()," грн"]}),f.jsxs(sz,{children:["-",u,"%"]})]})]})})]},`${o.id}-${a}`)})}),f.jsxs("div",{className:"summary-row",children:[f.jsxs("span",{children:["Товари (",n,")"]}),f.jsxs("span",{children:[t," грн"]})]}),f.jsxs("div",{className:"summary-row",children:[f.jsx("span",{children:"Доставка"}),f.jsx("span",{children:"За тарифами перевізника"})]}),f.jsx("hr",{}),f.jsxs("div",{className:"total",children:[f.jsx("span",{children:"Всього до сплати:"}),f.jsxs("span",{children:[t," грн"]})]}),f.jsx(ZF,{type:"submit",disabled:!r,onClick:i,style:{opacity:r?1:.5,cursor:r?"pointer":"not-allowed"},children:"Підтвердити замовлення"}),!r&&f.jsx("p",{style:{color:"#888",fontSize:"12px",marginTop:"10px",textAlign:"center"},children:"Заповніть всі поля правильно, щоб продовжити"})]});var s_={exports:{}};function uz(e){return e&&typeof e=="object"&&"default"in e?e.default:e}var Ud=uz(b),cz=Su;function dz(e,t){for(var n=Object.getOwnPropertyNames(t),r=0;r<n.length;r++){var i=n[r],o=Object.getOwnPropertyDescriptor(t,i);o&&o.configurable&&e[i]===void 0&&Object.defineProperty(e,i,o)}return e}function Ap(){return(Ap=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function fz(e,t){e.prototype=Object.create(t.prototype),dz(e.prototype.constructor=e,t)}function pz(e,t){if(e==null)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],0<=t.indexOf(n)||(i[n]=e[n]);return i}function vi(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var hz=function(e,t,n,r,i,o,a,l){if(!e){var s;if(t===void 0)s=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var u=[n,r,i,o,a,l],d=0;(s=new Error(t.replace(/%s/g,function(){return u[d++]}))).name="Invariant Violation"}throw s.framesToPop=1,s}},O1=hz;function j1(e,t,n){if("selectionStart"in e&&"selectionEnd"in e)e.selectionStart=t,e.selectionEnd=n;else{var r=e.createTextRange();r.collapse(!0),r.moveStart("character",t),r.moveEnd("character",n-t),r.select()}}function mz(e){var t=0,n=0;if("selectionStart"in e&&"selectionEnd"in e)t=e.selectionStart,n=e.selectionEnd;else{var r=document.selection.createRange();r.parentElement()===e&&(t=-r.moveStart("character",-e.value.length),n=-r.moveEnd("character",-e.value.length))}return{start:t,end:n,length:n-t}}var gz={9:"[0-9]",a:"[A-Za-z]","*":"[A-Za-z0-9]"},vz="_";function M1(e,t,n){var r="",i="",o=null,a=[];if(t===void 0&&(t=vz),n==null&&(n=gz),!e||typeof e!="string")return{maskChar:t,formatChars:n,mask:null,prefix:null,lastEditablePosition:null,permanents:[]};var l=!1;return e.split("").forEach(function(s){l=!l&&s==="\\"||(l||!n[s]?(a.push(r.length),r.length===a.length-1&&(i+=s)):o=r.length+1,r+=s,!1)}),{maskChar:t,formatChars:n,prefix:i,mask:r,lastEditablePosition:o,permanents:a}}function Rt(e,t){return e.permanents.indexOf(t)!==-1}function Sc(e,t,n){var r=e.mask,i=e.formatChars;if(!n)return!1;if(Rt(e,t))return r[t]===n;var o=i[r[t]];return new RegExp(o).test(n)}function $1(e,t){return t.split("").every(function(n,r){return Rt(e,r)||!Sc(e,r,n)})}function qo(e,t){var n=e.maskChar,r=e.prefix;if(!n){for(;t.length>r.length&&Rt(e,t.length-1);)t=t.slice(0,t.length-1);return t.length}for(var i=r.length,o=t.length;o>=r.length;o--){var a=t[o];if(!Rt(e,o)&&Sc(e,o,a)){i=o+1;break}}return i}function l_(e,t){return qo(e,t)===e.mask.length}function Fn(e,t){var n=e.maskChar,r=e.mask,i=e.prefix;if(!n){for((t=Rp(e,"",t,0)).length<i.length&&(t=i);t.length<r.length&&Rt(e,t.length);)t+=r[t.length];return t}if(t)return Rp(e,Fn(e,""),t,0);for(var o=0;o<r.length;o++)Rt(e,o)?t+=r[o]:t+=n;return t}function yz(e,t,n,r){var i=n+r,o=e.maskChar,a=e.mask,l=e.prefix,s=t.split("");if(o)return s.map(function(d,c){return c<n||i<=c?d:Rt(e,c)?a[c]:o}).join("");for(var u=i;u<s.length;u++)Rt(e,u)&&(s[u]="");return n=Math.max(l.length,n),s.splice(n,i-n),t=s.join(""),Fn(e,t)}function Rp(e,t,n,r){var i=e.mask,o=e.maskChar,a=e.prefix,l=n.split(""),s=l_(e,t);return!o&&r>t.length&&(t+=i.slice(t.length,r)),l.every(function(u){for(;p=u,Rt(e,y=r)&&p!==i[y];){if(r>=t.length&&(t+=i[r]),d=u,c=r,o&&Rt(e,c)&&d===o)return!0;if(++r>=i.length)return!1}var d,c,y,p;return!Sc(e,r,u)&&u!==o||(r<t.length?t=o||s||r<a.length?t.slice(0,r)+u+t.slice(r+1):(t=t.slice(0,r)+u+t.slice(r),Fn(e,t)):o||(t+=u),++r<i.length)}),t}function xz(e,t,n,r){var i=e.mask,o=e.maskChar,a=n.split(""),l=r;return a.every(function(s){for(;d=s,Rt(e,u=r)&&d!==i[u];)if(++r>=i.length)return!1;var u,d;return(Sc(e,r,s)||s===o)&&r++,r<i.length}),r-l}function bz(e,t){for(var n=t;0<=n;--n)if(!Rt(e,n))return n;return null}function aa(e,t){for(var n=e.mask,r=t;r<n.length;++r)if(!Rt(e,r))return r;return null}function Hd(e){return e||e===0?e+"":""}function wz(e,t,n,r,i){var o=e.mask,a=e.prefix,l=e.lastEditablePosition,s=t,u="",d=0,c=0,y=Math.min(i.start,n.start);return n.end>i.start?c=(d=xz(e,r,u=s.slice(i.start,n.end),y))?i.length:0:s.length<r.length&&(c=r.length-s.length),s=r,c&&(c===1&&!i.length&&(y=i.start===n.start?aa(e,n.start):bz(e,n.start)),s=yz(e,s,y,c)),s=Rp(e,s,u,y),(y+=d)>=o.length?y=o.length:y<a.length&&!d?y=a.length:y>=a.length&&y<l&&d&&(y=aa(e,y)),u||(u=null),{value:s=Fn(e,s),enteredString:u,selection:{start:y,end:y}}}function Sz(){var e=new RegExp("windows","i"),t=new RegExp("phone","i"),n=navigator.userAgent;return e.test(n)&&t.test(n)}function xt(e){return typeof e=="function"}function _z(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame}function u_(){return window.cancelAnimationFrame||window.webkitCancelRequestAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame}function I1(e){return(u_()?_z():function(){return setTimeout(e,1e3/60)})(e)}function Wd(e){(u_()||clearTimeout)(e)}var Cz=function(e){function t(r){var i=e.call(this,r)||this;i.focused=!1,i.mounted=!1,i.previousSelection=null,i.selectionDeferId=null,i.saveSelectionLoopDeferId=null,i.saveSelectionLoop=function(){i.previousSelection=i.getSelection(),i.saveSelectionLoopDeferId=I1(i.saveSelectionLoop)},i.runSaveSelectionLoop=function(){i.saveSelectionLoopDeferId===null&&i.saveSelectionLoop()},i.stopSaveSelectionLoop=function(){i.saveSelectionLoopDeferId!==null&&(Wd(i.saveSelectionLoopDeferId),i.saveSelectionLoopDeferId=null,i.previousSelection=null)},i.getInputDOMNode=function(){if(!i.mounted)return null;var m=cz.findDOMNode(vi(vi(i))),v=typeof window<"u"&&m instanceof window.Element;if(m&&!v)return null;if(m.nodeName!=="INPUT"&&(m=m.querySelector("input")),!m)throw new Error("react-input-mask: inputComponent doesn't contain input node");return m},i.getInputValue=function(){var m=i.getInputDOMNode();return m?m.value:null},i.setInputValue=function(m){var v=i.getInputDOMNode();v&&(i.value=m,v.value=m)},i.setCursorToEnd=function(){var m=qo(i.maskOptions,i.value),v=aa(i.maskOptions,m);v!==null&&i.setCursorPosition(v)},i.setSelection=function(m,v,w){w===void 0&&(w={});var h=i.getInputDOMNode(),g=i.isFocused();h&&g&&(w.deferred||j1(h,m,v),i.selectionDeferId!==null&&Wd(i.selectionDeferId),i.selectionDeferId=I1(function(){i.selectionDeferId=null,j1(h,m,v)}),i.previousSelection={start:m,end:v,length:Math.abs(v-m)})},i.getSelection=function(){return mz(i.getInputDOMNode())},i.getCursorPosition=function(){return i.getSelection().start},i.setCursorPosition=function(m){i.setSelection(m,m)},i.isFocused=function(){return i.focused},i.getBeforeMaskedValueChangeConfig=function(){var m=i.maskOptions,v=m.mask,w=m.maskChar,h=m.permanents,g=m.formatChars;return{mask:v,maskChar:w,permanents:h,alwaysShowMask:!!i.props.alwaysShowMask,formatChars:g}},i.isInputAutofilled=function(m,v,w,h){var g=i.getInputDOMNode();try{if(g.matches(":-webkit-autofill"))return!0}catch{}return!i.focused||h.end<w.length&&v.end===m.length},i.onChange=function(m){var v=vi(vi(i)).beforePasteState,w=vi(vi(i)).previousSelection,h=i.props.beforeMaskedValueChange,g=i.getInputValue(),x=i.value,S=i.getSelection();i.isInputAutofilled(g,S,x,w)&&(x=Fn(i.maskOptions,""),w={start:0,end:0,length:0}),v&&(w=v.selection,x=v.value,S={start:w.start+g.length,end:w.start+g.length,length:0},g=x.slice(0,w.start)+g+x.slice(w.end),i.beforePasteState=null);var T=wz(i.maskOptions,g,S,x,w),k=T.enteredString,C=T.selection,_=T.value;if(xt(h)){var $=h({value:_,selection:C},{value:x,selection:w},k,i.getBeforeMaskedValueChangeConfig());_=$.value,C=$.selection}i.setInputValue(_),xt(i.props.onChange)&&i.props.onChange(m),i.isWindowsPhoneBrowser?i.setSelection(C.start,C.end,{deferred:!0}):i.setSelection(C.start,C.end)},i.onFocus=function(m){var v=i.props.beforeMaskedValueChange,w=i.maskOptions,h=w.mask,g=w.prefix;if(i.focused=!0,i.mounted=!0,h){if(i.value)qo(i.maskOptions,i.value)<i.maskOptions.mask.length&&i.setCursorToEnd();else{var x=Fn(i.maskOptions,g),S=Fn(i.maskOptions,x),T=qo(i.maskOptions,S),k=aa(i.maskOptions,T),C={start:k,end:k};if(xt(v)){var _=v({value:S,selection:C},{value:i.value,selection:null},null,i.getBeforeMaskedValueChangeConfig());S=_.value,C=_.selection}var $=S!==i.getInputValue();$&&i.setInputValue(S),$&&xt(i.props.onChange)&&i.props.onChange(m),i.setSelection(C.start,C.end)}i.runSaveSelectionLoop()}xt(i.props.onFocus)&&i.props.onFocus(m)},i.onBlur=function(m){var v=i.props.beforeMaskedValueChange,w=i.maskOptions.mask;if(i.stopSaveSelectionLoop(),i.focused=!1,w&&!i.props.alwaysShowMask&&$1(i.maskOptions,i.value)){var h="";xt(v)&&(h=v({value:h,selection:null},{value:i.value,selection:i.previousSelection},null,i.getBeforeMaskedValueChangeConfig()).value);var g=h!==i.getInputValue();g&&i.setInputValue(h),g&&xt(i.props.onChange)&&i.props.onChange(m)}xt(i.props.onBlur)&&i.props.onBlur(m)},i.onMouseDown=function(m){if(!i.focused&&document.addEventListener){i.mouseDownX=m.clientX,i.mouseDownY=m.clientY,i.mouseDownTime=new Date().getTime();var v=function w(h){if(document.removeEventListener("mouseup",w),i.focused){var g=Math.abs(h.clientX-i.mouseDownX),x=Math.abs(h.clientY-i.mouseDownY),S=Math.max(g,x),T=new Date().getTime()-i.mouseDownTime;(S<=10&&T<=200||S<=5&&T<=300)&&i.setCursorToEnd()}};document.addEventListener("mouseup",v)}xt(i.props.onMouseDown)&&i.props.onMouseDown(m)},i.onPaste=function(m){xt(i.props.onPaste)&&i.props.onPaste(m),m.defaultPrevented||(i.beforePasteState={value:i.getInputValue(),selection:i.getSelection()},i.setInputValue(""))},i.handleRef=function(m){i.props.children==null&&xt(i.props.inputRef)&&i.props.inputRef(m)};var o=r.mask,a=r.maskChar,l=r.formatChars,s=r.alwaysShowMask,u=r.beforeMaskedValueChange,d=r.defaultValue,c=r.value;i.maskOptions=M1(o,a,l),d==null&&(d=""),c==null&&(c=d);var y=Hd(c);if(i.maskOptions.mask&&(s||y)&&(y=Fn(i.maskOptions,y),xt(u))){var p=r.value;r.value==null&&(p=d),y=u({value:y,selection:null},{value:p=Hd(p),selection:null},null,i.getBeforeMaskedValueChangeConfig()).value}return i.value=y,i}fz(t,e);var n=t.prototype;return n.componentDidMount=function(){this.mounted=!0,this.getInputDOMNode()&&(this.isWindowsPhoneBrowser=Sz(),this.maskOptions.mask&&this.getInputValue()!==this.value&&this.setInputValue(this.value))},n.componentDidUpdate=function(){var r=this.previousSelection,i=this.props,o=i.beforeMaskedValueChange,a=i.alwaysShowMask,l=i.mask,s=i.maskChar,u=i.formatChars,d=this.maskOptions,c=a||this.isFocused(),y=this.props.value!=null,p=y?Hd(this.props.value):this.value,m=r?r.start:null;if(this.maskOptions=M1(l,s,u),this.maskOptions.mask){!d.mask&&this.isFocused()&&this.runSaveSelectionLoop();var v=this.maskOptions.mask&&this.maskOptions.mask!==d.mask;if(d.mask||y||(p=this.getInputValue()),(v||this.maskOptions.mask&&(p||c))&&(p=Fn(this.maskOptions,p)),v){var w=qo(this.maskOptions,p);(m===null||w<m)&&(m=l_(this.maskOptions,p)?w:aa(this.maskOptions,w))}!this.maskOptions.mask||!$1(this.maskOptions,p)||c||y&&this.props.value||(p="");var h={start:m,end:m};if(xt(o)){var g=o({value:p,selection:h},{value:this.value,selection:this.previousSelection},null,this.getBeforeMaskedValueChangeConfig());p=g.value,h=g.selection}this.value=p;var x=this.getInputValue()!==this.value;x?(this.setInputValue(this.value),this.forceUpdate()):v&&this.forceUpdate();var S=!1;h.start!=null&&h.end!=null&&(S=!r||r.start!==h.start||r.end!==h.end),(S||x)&&this.setSelection(h.start,h.end)}else d.mask&&(this.stopSaveSelectionLoop(),this.forceUpdate())},n.componentWillUnmount=function(){this.mounted=!1,this.selectionDeferId!==null&&Wd(this.selectionDeferId),this.stopSaveSelectionLoop()},n.render=function(){var r,i=this.props,o=(i.mask,i.alwaysShowMask,i.maskChar,i.formatChars,i.inputRef,i.beforeMaskedValueChange,i.children),a=pz(i,["mask","alwaysShowMask","maskChar","formatChars","inputRef","beforeMaskedValueChange","children"]);if(o){xt(o)||O1(!1);var l=["onChange","onPaste","onMouseDown","onFocus","onBlur","value","disabled","readOnly"],s=Ap({},a);l.forEach(function(d){return delete s[d]}),r=o(s),l.filter(function(d){return r.props[d]!=null&&r.props[d]!==a[d]}).length&&O1(!1)}else r=Ud.createElement("input",Ap({ref:this.handleRef},a));var u={onFocus:this.onFocus,onBlur:this.onBlur};return this.maskOptions.mask&&(a.disabled||a.readOnly||(u.onChange=this.onChange,u.onPaste=this.onPaste,u.onMouseDown=this.onMouseDown),a.value!=null&&(u.value=this.value)),r=Ud.cloneElement(r,u)},t}(Ud.Component),Ez=Cz;s_.exports=Ez;var kz=s_.exports;const Tz=zp(kz);E.div`
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
`;const Gd=E.div`
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
`,qd=E.label`
  font-size: 14px;
  color: #666;
  margin-bottom: 5px;
`,Yd=E.input`
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
`;const Xd=E.span`
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
`;const Pz=({formData:e,setFormData:t,errors:n})=>{const r=i=>{const{name:o,value:a}=i.target;o==="phone"&&!a.startsWith("+38 (0")||t(l=>({...l,[o]:a}))};return f.jsxs(f.Fragment,{children:[f.jsx("h3",{children:"Контактні дані"}),f.jsxs(Gd,{children:[f.jsx(qd,{children:"Прізвище та ім’я"}),f.jsx(Yd,{type:"text",name:"fullName",value:e.fullName,onChange:r,placeholder:"Прізвище Ім'я",autoComplete:"name"}),n.fullName&&f.jsx(Xd,{children:n.fullName})]}),f.jsxs(Gd,{children:[f.jsx(qd,{children:"Номер телефону"}),f.jsx(Tz,{mask:"+38 (099) 999-99-99",maskChar:"_",name:"phone",autoComplete:"tel",value:e.phone,onChange:r,children:i=>f.jsx(Yd,{...i,type:"tel"})}),n.phone&&f.jsx(Xd,{children:n.phone})]}),f.jsxs(Gd,{children:[f.jsx(qd,{children:"E-mail"}),f.jsx(Yd,{type:"email",name:"email",value:e.email,onChange:r,placeholder:"email@example.com",autoComplete:"email"}),n.email&&f.jsx(Xd,{children:n.email})]})]})},Oz=E.div`
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
`;const jz=E.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  text-align: left;

  @media screen and (min-width: 1200px) {
    flex-direction: row;
    align-items: flex-start;
  }
`,Mz=E.div`
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
`;E.button`
`;const $z=({options:e,value:t,onChange:n,error:r})=>{const i=e.find(o=>o.value===t)||null;return f.jsxs("div",{style:{marginBottom:"20px"},children:[f.jsx("label",{style:{display:"block",marginBottom:"8px"},children:"Спосіб оплати"}),f.jsx(wc,{options:e,value:i,onChange:o=>n(o==null?void 0:o.value),placeholder:"Оберіть спосіб оплати",styles:{control:o=>({...o,borderColor:r?"red":o.borderColor})}}),r&&f.jsx("span",{style:{color:"red",fontSize:"12px"},children:"Оберіть спосіб оплати"})]})},Kd={}.VITE_NP_API_KEY,D1="https://api.novaposhta.ua/v2.0/json/",Iz=()=>{const e=st(O=>O.cart.items),t=On(),n=jn();console.log("апі",Kd);const[r,i]=b.useState({fullName:"",phone:"+38 (0",email:"",city:"",postOffice:""}),[o,a]=b.useState(""),[l,s]=b.useState(null),[u,d]=b.useState(null),[c,y]=b.useState(null),[p,m]=b.useState(null),[v,w]=b.useState([]),[h,g]=b.useState([]),[x,S]=b.useState(null),T=e.reduce((O,D)=>O+(D.new_price??D.price)*D.quantity,0),k=e.reduce((O,D)=>O+D.quantity,0),_=(()=>{const O=new Date().getFullYear().toString().slice(-2),D=Date.now().toString().slice(-4),P=Math.floor(100+Math.random()*900);return`${O}${D}${P}`})();console.log(_),b.useEffect(()=>{if(o.length<2)return;const O=setTimeout(async()=>{const P=await(await fetch(D1,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({apiKey:Kd,modelName:"Address",calledMethod:"getCities",methodProperties:{FindByString:o}})})).json();w(P.data.map(I=>({value:I.Ref,label:I.Description})))},500);return()=>clearTimeout(O)},[o]),b.useEffect(()=>{if(!l||u!=="nova")return;(async()=>{const P=await(await fetch(D1,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({apiKey:Kd,modelName:"AddressGeneral",calledMethod:"getWarehouses",methodProperties:{CityRef:l.value}})})).json();g(P.data.map(I=>({value:I.Ref,label:I.Description})))})()},[l,u]);const $=O=>{s(O),i(D=>({...D,city:(O==null?void 0:O.label)||"",postOffice:""})),d(null),y(null),m(null)},M=()=>{const O={};return r.fullName.trim().split(" ").length<2&&(O.fullName="Введіть прізвище та ім'я"),/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(r.email)||(O.email="Некоректний email"),r.phone.replace(/\D/g,"").length<12&&(O.phone="Номер неповний"),l||(O.city=!0),u==="nova"&&!c&&(O.postOffice=!0),u==="ukr"&&!p&&(O.postOffice=!0),u||(O.delivery=!0),x||(O.payment=!0),O},R=b.useMemo(M,[r,u,c,p,l,x]),L=Object.keys(R).length===0&&e.length>0,j=async O=>{if(O.preventDefault(),!x){alert("Оберіть спосіб оплати");return}try{if(await fetch("https://backenddidiv-production.up.railway.app/api/orders",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({data:{name:r.fullName,phone:r.phone,email:r.email,city:r.city,products:e==null?void 0:e.map(P=>({id:P.id,name:P.name,quantity:P.quantity,price:P.new_price??P.price})),status_order:"pending",order_number:_,payment_method:x==="liqpay"?"Онлайн (LiqPay)":x==="cod"?"Післяплата":x==="bank_transfer"?"Оплата за реквізитами":"",delivery_method:u==="nova"?"Нова Пошта":u==="ukr"?"УкрПошта":"Самовивіз",delivery_address:u==="nova"?c==null?void 0:c.label:u==="ukr"?p:"Самовивіз"}})}),x==="liqpay"){const P=await fetch("https://backenddidiv-production.up.railway.app/api/liqpay/create",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({amount:T,order_number:_})}),{data:I,signature:z}=await P.json(),B=document.createElement("form");B.method="POST",B.action="https://www.liqpay.ua/api/3/checkout",B.innerHTML=`
        <input type="hidden" name="data" value="${I}" />
        <input type="hidden" name="signature" value="${z}" />
      `,document.body.appendChild(B),B.requestSubmit();return}const D={...r,name:r.fullName,city:l.label,deliveryMethod:u==="nova"?"Нова Пошта":u==="ukr"?"УкрПошта":"Самовивіз",address:u==="nova"?c==null?void 0:c.label:u==="ukr"?p:"Самовивіз",products:e==null?void 0:e.map(P=>({id:P.id,name:P.name,quantity:P.quantity,price:P.new_price??P.price})),total:T,order_number:_,delivery_address:u==="nova"?c==null?void 0:c.label:u==="ukr"?p:"Самовивіз",payment_method:x==="liqpay"?"Онлайн (LiqPay)":x==="cod"?"Післяплата":x==="bank_transfer"?"Оплата за реквізитами":""};n(Jh()),t("/order-confirmation",{state:{order:D}})}catch(D){console.error(D),alert("Помилка оформлення")}},F=b.useMemo(()=>[{value:"nova",label:"Нова пошта"},{value:"ukr",label:"Укрпошта"}],[]),A=[{value:"liqpay",label:"Онлайн оплата (LiqPay)"},{value:"cod",label:"Післяплата"},{value:"bank_transfer",label:"Оплата за реквізитами"}];return f.jsx(Oz,{children:f.jsxs(jz,{children:[f.jsxs(Mz,{children:[f.jsx(Pz,{formData:r,setFormData:i,errors:R}),f.jsx(GF,{cityOptions:v,selectedCity:l,onChange:$,onInputChange:a}),f.jsx(XF,{options:F,value:u,onChange:d,selectedCity:l}),f.jsx(KF,{deliveryMethod:u,officeOptions:h,selectedOffice:c,selectedUkrOffice:p,setSelectedOffice:y,setSelectedUkrOffice:m}),f.jsx($z,{options:A,value:x,onChange:S,error:R.payment})]}),f.jsx(lz,{cartItems:e,totalAmount:T,totalQuantity:k,isFormValid:L,handleSubmit:j})]})})},Dz=E.div`
font-family: var(--main-font);
  max-width: 800px;
  margin: 40px auto;
  padding: 40px 20px;
  background: #ffffff;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  text-align: center;
  font-family: 'Inter', sans-serif;
`,Lz=E.h1`
font-family: var(--second-font);
  color: var(--orange-color); 
  font-size: 28px;
  font-weight: 800;
  margin-bottom: 16px;
`,Ir=E.p`
font-family: var(--second-font);
  font-size: 16px;
  color: #555;
  line-height: 1.6;
  margin-bottom: 8px;

  strong {
    color: #1a1a1a;
  }
`,Az=E.div`
font-family: var(--second-font);
  background: #f8f9fa;
  border-radius: 12px;
  padding: 24px;
  margin: 30px 0;
  text-align: left;
  border: 1px solid #edf2f7;
`,Rz=E.h3`
  font-size: 18px;
  font-weight: 500;
  color: #1a1a1a;
  margin-bottom: 16px;
  border-bottom: 2px solid #e2e8f0;
  padding-bottom: 8px;
`,Fz=E.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 20px;
`,zz=E.li`
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
`;const Nz=E.div`
  display: flex;
  gap: 15px;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 20px;
`,L1=E.button`
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
`,Bz=()=>{var y,p;const e=On(),t=ri(),[n]=WC(),r=jn(),i=(y=t.state)==null?void 0:y.order,o=n.get("orderId"),[a,l]=b.useState(i||null),[s,u]=b.useState(!i);b.useEffect(()=>{r(Jh())},[r]),b.useEffect(()=>{i||(o?fetch(`https://backenddidiv-production.up.railway.app/api/orders?filters[order_number][$eq]=${o}&populate=*`).then(m=>m.json()).then(m=>{var v;((v=m.data)==null?void 0:v.length)>0&&l(m.data[0]),u(!1)}).catch(()=>u(!1)):u(!1))},[o,i]),console.log(a);const c=((a==null?void 0:a.products)??[]).reduce((m,v)=>m+Number(v.new_price??v.price)*(v.quantity||1),0);return s?f.jsx("div",{children:"Завантаження..."}):a?f.jsxs(Dz,{children:[f.jsx(Lz,{children:"Дякуємо за ваше замовлення!"}),f.jsxs(Ir,{children:["Ваше замовлення ",f.jsxs("strong",{children:["№",a.order_number]})," успішно прийняте."]}),f.jsx(Ir,{children:"Ми зв’яжемось з Вами в найближчий час"}),f.jsxs(Az,{children:[f.jsx(Rz,{children:"Деталі замовлення:"}),f.jsx(Fz,{children:(p=a.products)==null?void 0:p.map(m=>f.jsxs(zz,{children:[f.jsxs("span",{className:"item-info",children:[m.name," (x",m.quantity,")"]}),f.jsxs("span",{className:"item-price",children:[(m.new_price??m.price)*(m.quantity||1)," грн"]})]},m.id))}),f.jsxs(Ir,{children:[f.jsx("strong",{children:"На суму:"})," ",c," грн."]}),f.jsxs(Ir,{children:[f.jsx("strong",{children:"Отрмувач:"})," ",a.name,", ",a.phone,"."]}),f.jsxs(Ir,{children:[f.jsx("strong",{children:"Спосіб доставки:"})," ",a.deliveryMethod,"."]}),f.jsxs(Ir,{children:[f.jsx("strong",{children:"Адреса отримання:"})," ",a.city,","," ",a.delivery_address,"."]}),f.jsxs(Ir,{children:[f.jsx("strong",{children:"Спосіб оплати:"})," ",a.payment_method,"."]})]}),f.jsxs(Nz,{children:[f.jsx(L1,{primary:!0,onClick:()=>e("/"),children:"Повернутися на головну"}),f.jsx(L1,{onClick:()=>e("/catalog"),children:"Продовжити покупки"})]})]}):f.jsxs("div",{children:["Замовлення не знайдено",f.jsx("button",{onClick:()=>e("/"),children:"На головну"})]})},Vz=E.section`
  background-color: var(--second-background);
`,Uz=E.div`
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
`,Hz=E.section`
  padding: 40px 0;
  background-color: #f9f9f980;
  border-radius: 12px;
  margin-bottom: 30px;
`,Wz=E.h1`
  font-family: var(--main-font);
  font-size: 28px;
  color: var(--black-color);
  margin-bottom: 10px;

  @media screen and (min-width: 768px) {
    font-size: 42px;
  }
`,Gz=E.p`

  font-size: 16px;
  color: #666;
`,qz=E.section`
  margin-bottom: 50px;
`,Yz=E.p`
  font-family: var(--second-font);
  font-weight:400;
  font-size: 18px;
  line-height: 1.6;
  max-width: 800px;
  margin: 0 auto 40px;
  color: #444;
`,Xz=E.section`
  margin-bottom: 60px;
`,Kz=E.h2`
  margin-bottom: 30px;
`,Qz=E.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
`,Os=E.div`
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
`,Zz=()=>f.jsxs(Vz,{children:[f.jsxs(Uz,{children:[f.jsxs(Hz,{children:[f.jsx(Wz,{children:"Про Дідів Хлів"}),f.jsx(Gz,{children:"Даємо друге життя якісним велозапчастинам"})]}),f.jsxs(qz,{children:[f.jsx(Yz,{children:"Бізнес створений з переконанням, що обладнання може бути доступним. Ми спеціалізуємося на розборі цікавих і унікальних велосипедів, усі запчастини перевірені нами. Стараємося пропонувати тільки найкраще від Shimano, Sram, Campagnolo та інших світових брендів."}),f.jsx(YS,{})]}),f.jsxs(Xz,{children:[f.jsx(Kz,{children:"Наша майстерня"}),f.jsxs(Qz,{children:[f.jsx(Os,{color:"#e2e2e2",children:"Фото майстерні"}),f.jsx(Os,{color:"#d1d1d1",children:"Процес діагностики"}),f.jsx(Os,{color:"#bcbcbc",children:"Склад запчастин"}),f.jsx(Os,{color:"#a8a8a8",children:"Готові велосипеди"})]})]})]})," "]}),Jz=()=>{const{pathname:e}=ri();return b.useEffect(()=>{window.scrollTo(0,0)},[e]),null},eN=E.section`
  background-color:  var(--second-background);
  padding: 40px 0;
  min-height: 80vh;
`,tN=E.div`
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
`,nN=E.h1`
  font-family: var(--main-font); 
  font-size: 32px;
  color: var(--black-color);
  margin-bottom: 10px;
  text-transform: uppercase;
`,rN=E.p`
  color: #585555;
  margin-bottom: 40px;
`,iN=E.div`
font-family: var(--second-font);
font-weight: 400;
  display: grid;
  gap: 40px;
  text-align: left;

  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    align-items: start;
  }
`,oN=E.div`
height: 427px;
  display: grid;
  gap: 25px;
    background: #ffffff;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
`,js=E.div`
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
`,aN=E.div`
  background: #ffffff;
  padding: 40px 30px;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%; 
`,sN=E.h2`
  margin-bottom: 15px;
  color: var(--brown-color);
  font-size: 24px;
  font-family: var(--main-font);
`,lN=E.p`
  color: #666;
  font-size: 14px;
  line-height: 1.6;
  margin-bottom: 30px;
`,uN=E.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
  
  @media screen and (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`,A1=E.a`
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
`;const cN=E.div`
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

 
`,dN=()=>f.jsx(eN,{children:f.jsxs(tN,{children:[f.jsx(nN,{children:"Контакти"}),f.jsx(rN,{children:"Зв’яжіться з нами для консультації або замовлення"}),f.jsxs(iN,{children:[f.jsxs(oN,{children:[f.jsxs(js,{children:[f.jsx("h3",{children:"Адреса"}),f.jsx("p",{children:"вул. Казармена 6Г, Київ, Україна"}),f.jsx("a",{style:{color:"black",fontWeight:"500",fontSize:"0.9rem",display:"inline-block",marginTop:"5px",cursor:"pointer"},href:"https://www.google.com/maps/search/?api=1&query=вул.+Казармена+6Г,+Київ,+Україна",target:"_blank",rel:"noopener noreferrer",children:"📍 Показати на карті"})]}),f.jsxs(js,{children:[f.jsx("h3",{children:"Телефон"}),f.jsx("p",{children:"+38 (097) 123-45-67"})]}),f.jsxs(js,{children:[f.jsx("h3",{children:"Email"}),f.jsx("p",{children:"didivhliv.com"})]}),f.jsxs(js,{children:[f.jsx("h3",{children:"Графік роботи"}),f.jsx("p",{children:"З 11:00 - 20:00"}),f.jsx("p",{children:"Вихідні: Пн, Чт"})]})]}),f.jsxs(aN,{children:[f.jsx(sN,{children:"Ми в соцмережах"}),f.jsx(lN,{children:"Слідкуйте за нашими новинами, новими надходженнями та крутими вело-поїздками у зручному для вас форматі."}),f.jsxs(uN,{children:[f.jsxs(A1,{href:"https://www.instagram.com/didivxliv?igsh=MXhsNWRjdW5rajYwdQ==",target:"_blank",rel:"noopener noreferrer",children:[f.jsx("svg",{width:"20px",children:f.jsx("use",{href:`${cn}#icon-instagram`})}),f.jsx("span",{children:"Instagram"})]}),f.jsxs(A1,{href:"https://t.me/didivxliv",target:"_blank",rel:"noopener noreferrer",children:[f.jsx("svg",{width:"20px",children:f.jsx("use",{href:`${cn}#icon-telegram`})}),f.jsx("span",{children:"Telegram"})]})]}),f.jsx(cN,{children:"Приєднуйся до спільноти!"})]})]})]})}),fN=E.section`
  background-color:  var(--second-background);
`,pN=E.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
    margin-left: auto;
  margin-right: auto;
  align-items: center;
        padding: 40px 30px;

 @media screen and (min-width: 768px) {
    max-width: 994px;
    padding-left: 30px;
    padding-right: 30px;
  }
  @media screen and (min-width: 1200px) {
    max-width: 1448px;
   
  }
  
`,hN=E.div`
     width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  
`,mN=E.h1`

    font-size: 25px;
font-family: var(--main-font);
color: var( --black-color);
text-transform: uppercase;
 @media screen and (min-width: 360px) {
  font-size: 32px;
  }


@media screen and (min-width: 768px) {
  
  }

`,gN=E.div`
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
`,vN=E.div`
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
`,yN=E.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  padding:20px;

`,xN=E.div`
  padding: 16px;
      display: flex;
    align-content: center;
    align-items: center;
        justify-content: space-between;
`,bN=E.p`
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
 
`,wN=E.p`
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
`;const SN=E.div.attrs({className:"card-buttons"})`
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
`,_N=E.button`
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
`,CN=E.button`
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
`,c_=E.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  flex-wrap: wrap;
  gap: 5px;
  margin-bottom: 15px;
`,Bi=E.button`
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
`,EN=E.div`
  position: relative;
  display: inline-block;
  

`,kN=E.button`
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
`,TN=E.div`
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
`,yi=E.div`
  padding: 10px 12px;
  cursor: pointer;

  &:hover {
    background: #f0f0f0;
  }
`,d_=E.div`
  height: 80vh;
          display: flex;
          flex-direction:
          column;
          justify-content: center;
          align-items: center;
          font-size: 30px;
`,f_=E(Oe)`
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
  
`,PN=()=>{const[e,t]=b.useState([]),[n,r]=b.useState(!0),i=st(k=>k.favorites.items),o=st(k=>k.cart.items),[a,l]=b.useState(!1),[s,u]=b.useState("date"),[d,c]=b.useState("asc"),[y,p]=b.useState(1),[m,v]=b.useState(1),w=On(),h=jn(),g=b.useRef(null);b.useEffect(()=>{const k=C=>{g.current&&!g.current.contains(C.target)&&l(!1)};return document.addEventListener("mousedown",k),()=>{document.removeEventListener("mousedown",k)}},[]),b.useEffect(()=>{window.scrollTo({top:0,behavior:"smooth"})},[y]),b.useEffect(()=>{(async()=>{const C=new Date,_=new Date;_.setDate(C.getDate()-7);const $=_.toISOString();try{r(!0);const M=await fetch(`https://backenddidiv-production.up.railway.app/api/products?populate=*&filters[createdAt][$gte]=${$}&pagination[page]=${y}&pagination[pageSize]=24`);if(!M.ok)throw new Error(`HTTP error! Status: ${M.status}`);const R=await M.json();t(R.data),v(R.meta.pagination.pageCount)}catch(M){console.error("Помилка при завантаженні продуктів:",M)}finally{r(!1)}})()},[y]);const x=b.useMemo(()=>{const k=[...e];switch(s){case"name":return k.sort((C,_)=>d==="asc"?C.name.localeCompare(_.name):_.name.localeCompare(C.name));case"price":return k.sort((C,_)=>d==="asc"?C.price-_.price:_.price-C.price);case"date":return k.sort((C,_)=>d==="asc"?new Date(C.createdAt)-new Date(_.createdAt):new Date(_.createdAt)-new Date(C.createdAt));default:return k}},[s,e,d]),S=(k,C)=>{C.stopPropagation();const _=o.find(M=>M.id===k.id);if((_?_.quantity:0)>=k.stock){K.error(`Вибачте, доступно лише ${k.stock} шт.`);return}h(po({...k,quantity:1})),K.success(`${k.name} додано в кошик!`)},T=(k,C)=>{C.stopPropagation();const _=i.some($=>$.id===k.id);h(yo(k)),_?K.warning(`${k.name} видалено з обраного`):K.info(`${k.name} додано в обране`)};return n?f.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"100vw",height:"100vh"},children:f.jsx(qa,{height:100,width:100,radius:5,color:"var(--orange-color)",ariaLabel:"ball-triangle-loading",wrapperStyle:{},wrapperClass:"",visible:!0})}):x.length===0?f.jsxs(d_,{children:[f.jsx("p",{style:{textAlign:"center"},children:"Нажаль, нічого нового за останній тиждень"}),f.jsxs(f_,{to:"/catalog",children:[f.jsx("p",{children:"Весь каталог"}),f.jsx(Ou,{size:24})]})]}):f.jsxs(fN,{children:[f.jsxs(pN,{children:[f.jsx(Or,{autoClose:1500}),f.jsxs(hN,{children:[f.jsx(mN,{children:"Нові товари "}),f.jsxs(EN,{ref:g,children:[f.jsxs(kN,{onClick:()=>l(k=>!k),children:["Сортування",f.jsx(Pu,{strokeWidth:.9,size:22})]}),a&&f.jsxs(TN,{children:[f.jsx(yi,{onClick:()=>{u("name"),c("asc"),l(!1)},children:"А-Я"}),f.jsx(yi,{onClick:()=>{u("name"),c("desc"),l(!1)},children:"Я-А"}),f.jsx(yi,{onClick:()=>{u("price"),c("asc"),l(!1)},children:"Ціна ↑"}),f.jsx(yi,{onClick:()=>{u("price"),c("desc"),l(!1)},children:"Ціна ↓"}),f.jsx(yi,{onClick:()=>{u("date"),c("desc"),l(!1)},children:"Спочатку новіші"}),f.jsx(yi,{onClick:()=>{u("date"),c("asc"),l(!1)},children:"Спочатку старіші"})]})]})]}),f.jsx(gN,{children:x.map(k=>{var _,$;const C=i.some(M=>M.id===k.id);return f.jsxs(vN,{onClick:()=>w(`/product/${k.id}`),children:[f.jsx(yN,{src:(($=(_=k.images)==null?void 0:_[0])==null?void 0:$.url)||to,alt:k.name}),f.jsx(bN,{children:k.name}),f.jsxs(xN,{children:[f.jsxs(wN,{children:[k.price," грн"]}),f.jsxs(SN,{children:[f.jsx(_N,{onClick:M=>S(k,M),children:f.jsx(fo,{size:24,color:"black"})}),f.jsx(CN,{onClick:M=>T(k,M),children:f.jsx(ju,{size:24,fill:C?"#ff4d4f":"none",color:C?"#ff4d4f":"#000000"})})]})]})]},k.id)})}),f.jsxs(c_,{children:[f.jsx(Bi,{onClick:()=>p(k=>Math.max(k-1,1)),disabled:y===1,children:"Назад"}),Array.from({length:m},(k,C)=>f.jsx(Bi,{onClick:()=>p(C+1),active:y===C+1,children:C+1},C)),f.jsx(Bi,{onClick:()=>p(k=>Math.min(k+1,m)),disabled:y===m,children:"Вперед"})]})]})," "]})},ON=E.section`
  background-color: var(--second-background);
  min-height: 100vh;
`,jN=E.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-left: auto;
  margin-right: auto;

  padding: 30px 10px;

  @media screen and (min-width: 768px) {
    max-width: 994px;
    padding: 40px 30px;
  }

  @media screen and (min-width: 1200px) {
    max-width: 1448px;
  }
`,MN=E.div`
width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`,$N=E.h1`

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

`,IN=E.div`
  width: 100%;
  display: grid;
  gap: 15px;

  grid-template-columns: 1fr;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
  }
`,DN=E.div`
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
`,LN=E.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  padding: 20px;
`,AN=E.p`
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
`,RN=E.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 16px 16px;
`;E.span`
  font-size: 16px;
  font-weight: 700;

  &:last-child {
    font-size: 14px;
    color: #999;
    text-decoration: line-through;
    font-weight: 400;
  }
`;const FN=E.div.attrs({className:"card-buttons"})`
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
`,R1=E.button`
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
`;const zN=E.div`
  position: relative;
  display: inline-block;
  display:flex;
  
`,NN=E.div`
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
`,xi=E.div`
  padding: 10px 12px;
  cursor: pointer;

  &:hover {
    background: #f0f0f0;
  }
`,BN=E.button`
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
`,VN=()=>{const[e,t]=b.useState([]),[n,r]=b.useState(!0),[i,o]=b.useState(!1),[a,l]=b.useState("date"),[s,u]=b.useState("desc"),[d,c]=b.useState(1),y=24;console.log(i);const p=On(),m=jn(),v=st(_=>_.favorites.items),w=st(_=>_.cart.items),h=b.useRef(null);b.useEffect(()=>{const _=$=>{h.current&&!h.current.contains($.target)&&o(!1)};return document.addEventListener("mousedown",_),()=>{document.removeEventListener("mousedown",_)}},[]),b.useEffect(()=>{(async()=>{const $="https://backenddidiv-production.up.railway.app";try{const R=await(await fetch(`${$}/api/products?filters[new_price][$notNull]=true&pagination[pageSize]=500&populate=*`)).json();console.log(R.data),t(R.data),r(!1)}catch(M){console.log(M)}})()},[]),b.useEffect(()=>{window.scrollTo({top:0,behavior:"smooth"})},[d]);const g=b.useMemo(()=>{const _=[...e];switch(a){case"name":return _.sort(($,M)=>s==="asc"?$.name.localeCompare(M.name):M.name.localeCompare($.name));case"price":return _.sort(($,M)=>s==="asc"?$.new_price-M.new_price:M.new_price-$.new_price);case"date":return _.sort(($,M)=>s==="asc"?new Date($.createdAt)-new Date(M.createdAt):new Date(M.createdAt)-new Date($.createdAt));default:return _}},[a,e,s]),x=d*y,S=x-y,T=g.slice(S,x),k=Math.ceil(e.length/y),C=(_,$)=>{$.stopPropagation();const M=v.some(R=>R.id===_.id);m(yo(_)),M?K.warning(`${_.name} видалено з обраного`):K.info(`${_.name} додано в обране`)};return n?f.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"100vw",height:"100vh"},children:f.jsx(qa,{height:100,width:100,radius:5,color:"var(--orange-color)",ariaLabel:"ball-triangle-loading",wrapperStyle:{},wrapperClass:"",visible:!0})}):e.length===0?f.jsxs(d_,{children:[f.jsx("p",{style:{textAlign:"center"},children:"Нажаль, поки знижок немає"}),f.jsxs(f_,{to:"/catalog",children:[f.jsx("p",{children:"Весь каталог"}),f.jsx(Ou,{size:24})]})]}):f.jsx(ON,{children:f.jsxs(jN,{children:[f.jsx(Or,{autoClose:1500}),f.jsxs(MN,{children:[f.jsx($N,{children:"Акційні товари"}),f.jsxs(zN,{ref:h,children:[f.jsxs(BN,{onClick:()=>o(_=>!_),children:["Сортування",f.jsx(Pu,{strokeWidth:.9,size:22})]}),i&&f.jsxs(NN,{children:[f.jsx(xi,{onClick:()=>{l("name"),u("asc"),o(!1)},children:"А-Я"}),f.jsx(xi,{onClick:()=>{l("name"),u("desc"),o(!1)},children:"Я-А"}),f.jsx(xi,{onClick:()=>{l("price"),u("asc"),o(!1)},children:"Ціна ↑"}),f.jsx(xi,{onClick:()=>{l("price"),u("desc"),o(!1)},children:"Ціна ↓"}),f.jsx(xi,{onClick:()=>{l("date"),u("desc"),o(!1)},children:"Спочатку новіші"}),f.jsx(xi,{onClick:()=>{l("date"),u("asc"),o(!1)},children:"Спочатку старіші"})]})]})]}),f.jsx(IN,{children:T.map(_=>{var D,P;const $=_.new_price&&_.new_price<_.price,M=$?_.new_price:_.price,R=$?Math.round((_.price-_.new_price)/_.price*100):0,L=v.some(I=>I.id===_.id),j=w.find(I=>I.id===_.id),A=(j?j.quantity:0)>=(_.stock||0),O=(I,z)=>{if(z.stopPropagation(),A){K.error("Товар уже у кошику");return}m(po({...I,quantity:1})),K.success(`${I.name} додано в кошик!`)};return f.jsxs(DN,{onClick:()=>p(`/product/${_.id}`),style:{cursor:"pointer"},children:[f.jsx(LN,{src:((P=(D=_.images)==null?void 0:D[0])==null?void 0:P.url)||"/nofoto.png"}),f.jsx(AN,{children:_.name}),f.jsxs(RN,{children:[f.jsx(Dm,{children:f.jsxs(Lm,{children:[f.jsx(Am,{$discount:$,children:(M*(_.quantity||1)).toLocaleString()+" грн"}),$&&f.jsxs(f.Fragment,{children:[f.jsxs(Rm,{children:[(_.price*(_.quantity||1)).toLocaleString()," ","грн"]}),f.jsxs(Fm,{children:["-",R,"%"]})]})]})}),f.jsxs(FN,{children:[f.jsx(R1,{onClick:I=>O(_,I),children:f.jsx(fo,{size:24,color:j?"var(--orange-color)":"black",strokeWidth:2})}),f.jsx(R1,{onClick:I=>C(_,I),children:f.jsx(ju,{size:24,fill:L?"#ff4d4f":"none",color:L?"#ff4d4f":"#000000",strokeWidth:L?1:2})})]})]})]},_.id)})}),g.length>y&&f.jsxs(c_,{children:[f.jsx(Bi,{onClick:()=>c(_=>Math.max(_-1,1)),disabled:d===1,children:"Назад"}),Array.from({length:k},(_,$)=>f.jsx(Bi,{onClick:()=>c($+1),active:d===$+1,children:$+1},$)),f.jsx(Bi,{onClick:()=>c(_=>Math.min(_+1,k)),disabled:d===k,children:"Вперед"})]})]})})};function UN(){return f.jsxs(X3,{children:[f.jsx(M5,{}),f.jsx(Jz,{}),f.jsx(b.Suspense,{fallback:f.jsx(O5,{}),children:f.jsx(DC,{children:f.jsxs(nt,{path:"/",element:f.jsx(LO,{}),children:[f.jsx(nt,{index:!0,element:f.jsx(EI,{})}),f.jsx(nt,{path:"catalog",element:f.jsx(U3,{})}),f.jsx(nt,{path:"/catalog/:category",element:f.jsx(RD,{})}),f.jsx(nt,{path:"/product/:id",element:f.jsx(K6,{})}),f.jsx(nt,{path:"cart",element:f.jsx(CA,{})}),f.jsx(nt,{path:"favorite",element:f.jsx(WA,{})}),f.jsx(nt,{path:"/catalog/new",element:f.jsx(PN,{})}),f.jsx(nt,{path:"/catalog/sale",element:f.jsx(VN,{})}),f.jsx(nt,{path:"checkout",element:f.jsx(Iz,{})}),f.jsx(nt,{path:"/order-confirmation",element:f.jsx(Bz,{})}),f.jsx(nt,{path:"about",element:f.jsx(Zz,{})}),f.jsx(nt,{path:"contacts",element:f.jsx(dN,{})}),f.jsx(nt,{path:"delivery",element:f.jsx(QA,{})}),f.jsx(nt,{path:"*",element:f.jsx(Y3,{})})]})})})]})}var Wm="persist:",p_="persist/FLUSH",Gm="persist/REHYDRATE",h_="persist/PAUSE",m_="persist/PERSIST",g_="persist/PURGE",v_="persist/REGISTER",HN=-1;function rl(e){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?rl=function(n){return typeof n}:rl=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},rl(e)}function F1(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function WN(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?F1(n,!0).forEach(function(r){GN(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):F1(n).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function GN(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function qN(e,t,n,r){r.debug;var i=WN({},n);return e&&rl(e)==="object"&&Object.keys(e).forEach(function(o){o!=="_persist"&&t[o]===n[o]&&(i[o]=e[o])}),i}function YN(e){var t=e.blacklist||null,n=e.whitelist||null,r=e.transforms||[],i=e.throttle||0,o="".concat(e.keyPrefix!==void 0?e.keyPrefix:Wm).concat(e.key),a=e.storage,l;e.serialize===!1?l=function(T){return T}:typeof e.serialize=="function"?l=e.serialize:l=XN;var s=e.writeFailHandler||null,u={},d={},c=[],y=null,p=null,m=function(T){Object.keys(T).forEach(function(k){h(k)&&u[k]!==T[k]&&c.indexOf(k)===-1&&c.push(k)}),Object.keys(u).forEach(function(k){T[k]===void 0&&h(k)&&c.indexOf(k)===-1&&u[k]!==void 0&&c.push(k)}),y===null&&(y=setInterval(v,i)),u=T};function v(){if(c.length===0){y&&clearInterval(y),y=null;return}var S=c.shift(),T=r.reduce(function(k,C){return C.in(k,S,u)},u[S]);if(T!==void 0)try{d[S]=l(T)}catch(k){console.error("redux-persist/createPersistoid: error serializing state",k)}else delete d[S];c.length===0&&w()}function w(){Object.keys(d).forEach(function(S){u[S]===void 0&&delete d[S]}),p=a.setItem(o,l(d)).catch(g)}function h(S){return!(n&&n.indexOf(S)===-1&&S!=="_persist"||t&&t.indexOf(S)!==-1)}function g(S){s&&s(S)}var x=function(){for(;c.length!==0;)v();return p||Promise.resolve()};return{update:m,flush:x}}function XN(e){return JSON.stringify(e)}function KN(e){var t=e.transforms||[],n="".concat(e.keyPrefix!==void 0?e.keyPrefix:Wm).concat(e.key),r=e.storage;e.debug;var i;return e.deserialize===!1?i=function(a){return a}:typeof e.deserialize=="function"?i=e.deserialize:i=QN,r.getItem(n).then(function(o){if(o)try{var a={},l=i(o);return Object.keys(l).forEach(function(s){a[s]=t.reduceRight(function(u,d){return d.out(u,s,l)},i(l[s]))}),a}catch(s){throw s}else return})}function QN(e){return JSON.parse(e)}function ZN(e){var t=e.storage,n="".concat(e.keyPrefix!==void 0?e.keyPrefix:Wm).concat(e.key);return t.removeItem(n,JN)}function JN(e){}function z1(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Mn(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?z1(n,!0).forEach(function(r){e9(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):z1(n).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function e9(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function t9(e,t){if(e==null)return{};var n=n9(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function n9(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}var r9=5e3;function y_(e,t){var n=e.version!==void 0?e.version:HN;e.debug;var r=e.stateReconciler===void 0?qN:e.stateReconciler,i=e.getStoredState||KN,o=e.timeout!==void 0?e.timeout:r9,a=null,l=!1,s=!0,u=function(c){return c._persist.rehydrated&&a&&!s&&a.update(c),c};return function(d,c){var y=d||{},p=y._persist,m=t9(y,["_persist"]),v=m;if(c.type===m_){var w=!1,h=function(_,$){w||(c.rehydrate(e.key,_,$),w=!0)};if(o&&setTimeout(function(){!w&&h(void 0,new Error('redux-persist: persist timed out for persist key "'.concat(e.key,'"')))},o),s=!1,a||(a=YN(e)),p)return Mn({},t(v,c),{_persist:p});if(typeof c.rehydrate!="function"||typeof c.register!="function")throw new Error("redux-persist: either rehydrate or register is not a function on the PERSIST action. This can happen if the action is being replayed. This is an unexplored use case, please open an issue and we will figure out a resolution.");return c.register(e.key),i(e).then(function(C){var _=e.migrate||function($,M){return Promise.resolve($)};_(C,n).then(function($){h($)},function($){h(void 0,$)})},function(C){h(void 0,C)}),Mn({},t(v,c),{_persist:{version:n,rehydrated:!1}})}else{if(c.type===g_)return l=!0,c.result(ZN(e)),Mn({},t(v,c),{_persist:p});if(c.type===p_)return c.result(a&&a.flush()),Mn({},t(v,c),{_persist:p});if(c.type===h_)s=!0;else if(c.type===Gm){if(l)return Mn({},v,{_persist:Mn({},p,{rehydrated:!0})});if(c.key===e.key){var g=t(v,c),x=c.payload,S=r!==!1&&x!==void 0?r(x,d,g,e):g,T=Mn({},S,{_persist:Mn({},p,{rehydrated:!0})});return u(T)}}}if(!p)return t(d,c);var k=t(v,c);return k===v?d:u(Mn({},k,{_persist:p}))}}function N1(e){return a9(e)||o9(e)||i9()}function i9(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function o9(e){if(Symbol.iterator in Object(e)||Object.prototype.toString.call(e)==="[object Arguments]")return Array.from(e)}function a9(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}function B1(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Fp(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?B1(n,!0).forEach(function(r){s9(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):B1(n).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function s9(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var x_={registry:[],bootstrapped:!1},l9=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:x_,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case v_:return Fp({},t,{registry:[].concat(N1(t.registry),[n.key])});case Gm:var r=t.registry.indexOf(n.key),i=N1(t.registry);return i.splice(r,1),Fp({},t,{registry:i,bootstrapped:i.length===0});default:return t}};function u9(e,t,n){var r=n||!1,i=Xh(l9,x_,t&&t.enhancer?t.enhancer:void 0),o=function(u){i.dispatch({type:v_,key:u})},a=function(u,d,c){var y={type:Gm,payload:d,err:c,key:u};e.dispatch(y),i.dispatch(y),r&&l.getState().bootstrapped&&(r(),r=!1)},l=Fp({},i,{purge:function(){var u=[];return e.dispatch({type:g_,result:function(c){u.push(c)}}),Promise.all(u)},flush:function(){var u=[];return e.dispatch({type:p_,result:function(c){u.push(c)}}),Promise.all(u)},pause:function(){e.dispatch({type:h_})},persist:function(){e.dispatch({type:m_,register:o,rehydrate:a})}});return t&&t.manualPersist||l.persist(),l}var qm={},Ym={};Ym.__esModule=!0;Ym.default=f9;function il(e){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?il=function(n){return typeof n}:il=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},il(e)}function Qd(){}var c9={getItem:Qd,setItem:Qd,removeItem:Qd};function d9(e){if((typeof self>"u"?"undefined":il(self))!=="object"||!(e in self))return!1;try{var t=self[e],n="redux-persist ".concat(e," test");t.setItem(n,"test"),t.getItem(n),t.removeItem(n)}catch{return!1}return!0}function f9(e){var t="".concat(e,"Storage");return d9(t)?self[t]:c9}qm.__esModule=!0;qm.default=m9;var p9=h9(Ym);function h9(e){return e&&e.__esModule?e:{default:e}}function m9(e){var t=(0,p9.default)(e);return{getItem:function(r){return new Promise(function(i,o){i(t.getItem(r))})},setItem:function(r,i){return new Promise(function(o,a){o(t.setItem(r,i))})},removeItem:function(r){return new Promise(function(i,o){i(t.removeItem(r))})}}}var Xm=void 0,g9=v9(qm);function v9(e){return e&&e.__esModule?e:{default:e}}var y9=(0,g9.default)("local");Xm=y9;const x9={key:"cart",storage:Xm},b9={key:"favorites",storage:Xm},w9=y_(x9,B4),S9=y_(b9,LD),b_=E4({reducer:{cart:w9,favorites:S9},middleware:e=>e({serializableCheck:!1})});u9(b_);rf.createRoot(document.getElementById("root")).render(f.jsx(VP,{store:b_,children:f.jsx(Y.StrictMode,{children:f.jsx(BC,{basename:"/Didiv/",children:f.jsx(UN,{})})})}));
