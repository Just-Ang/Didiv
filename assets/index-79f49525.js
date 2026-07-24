function O_(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();var te=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Gp(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function Pt(e){if(e.__esModule)return e;var t=e.default;if(typeof t=="function"){var n=function r(){return this instanceof r?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach(function(r){var i=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(n,r,i.get?i:{enumerable:!0,get:function(){return e[r]}})}),n}var U1={exports:{}},lu={},H1={exports:{}},re={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var La=Symbol.for("react.element"),j_=Symbol.for("react.portal"),M_=Symbol.for("react.fragment"),$_=Symbol.for("react.strict_mode"),I_=Symbol.for("react.profiler"),D_=Symbol.for("react.provider"),L_=Symbol.for("react.context"),A_=Symbol.for("react.forward_ref"),R_=Symbol.for("react.suspense"),F_=Symbol.for("react.memo"),z_=Symbol.for("react.lazy"),tg=Symbol.iterator;function N_(e){return e===null||typeof e!="object"?null:(e=tg&&e[tg]||e["@@iterator"],typeof e=="function"?e:null)}var W1={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},G1=Object.assign,Y1={};function ao(e,t,n){this.props=e,this.context=t,this.refs=Y1,this.updater=n||W1}ao.prototype.isReactComponent={};ao.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};ao.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function q1(){}q1.prototype=ao.prototype;function Yp(e,t,n){this.props=e,this.context=t,this.refs=Y1,this.updater=n||W1}var qp=Yp.prototype=new q1;qp.constructor=Yp;G1(qp,ao.prototype);qp.isPureReactComponent=!0;var ng=Array.isArray,X1=Object.prototype.hasOwnProperty,Xp={current:null},K1={key:!0,ref:!0,__self:!0,__source:!0};function Q1(e,t,n){var r,i={},o=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(o=""+t.key),t)X1.call(t,r)&&!K1.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var s=Array(l),u=0;u<l;u++)s[u]=arguments[u+2];i.children=s}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:La,type:e,key:o,ref:a,props:i,_owner:Xp.current}}function B_(e,t){return{$$typeof:La,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Kp(e){return typeof e=="object"&&e!==null&&e.$$typeof===La}function V_(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var rg=/\/+/g;function Ic(e,t){return typeof e=="object"&&e!==null&&e.key!=null?V_(""+e.key):t.toString(36)}function $s(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case La:case j_:a=!0}}if(a)return a=e,i=i(a),e=r===""?"."+Ic(a,0):r,ng(i)?(n="",e!=null&&(n=e.replace(rg,"$&/")+"/"),$s(i,t,n,"",function(u){return u})):i!=null&&(Kp(i)&&(i=B_(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(rg,"$&/")+"/")+e)),t.push(i)),1;if(a=0,r=r===""?".":r+":",ng(e))for(var l=0;l<e.length;l++){o=e[l];var s=r+Ic(o,l);a+=$s(o,t,n,s,i)}else if(s=N_(e),typeof s=="function")for(e=s.call(e),l=0;!(o=e.next()).done;)o=o.value,s=r+Ic(o,l++),a+=$s(o,t,n,s,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function ts(e,t,n){if(e==null)return e;var r=[],i=0;return $s(e,r,"","",function(o){return t.call(n,o,i++)}),r}function U_(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var mt={current:null},Is={transition:null},H_={ReactCurrentDispatcher:mt,ReactCurrentBatchConfig:Is,ReactCurrentOwner:Xp};re.Children={map:ts,forEach:function(e,t,n){ts(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ts(e,function(){t++}),t},toArray:function(e){return ts(e,function(t){return t})||[]},only:function(e){if(!Kp(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};re.Component=ao;re.Fragment=M_;re.Profiler=I_;re.PureComponent=Yp;re.StrictMode=$_;re.Suspense=R_;re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=H_;re.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=G1({},e.props),i=e.key,o=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,a=Xp.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in t)X1.call(t,s)&&!K1.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&l!==void 0?l[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){l=Array(s);for(var u=0;u<s;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:La,type:e.type,key:i,ref:o,props:r,_owner:a}};re.createContext=function(e){return e={$$typeof:L_,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:D_,_context:e},e.Consumer=e};re.createElement=Q1;re.createFactory=function(e){var t=Q1.bind(null,e);return t.type=e,t};re.createRef=function(){return{current:null}};re.forwardRef=function(e){return{$$typeof:A_,render:e}};re.isValidElement=Kp;re.lazy=function(e){return{$$typeof:z_,_payload:{_status:-1,_result:e},_init:U_}};re.memo=function(e,t){return{$$typeof:F_,type:e,compare:t===void 0?null:t}};re.startTransition=function(e){var t=Is.transition;Is.transition={};try{e()}finally{Is.transition=t}};re.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};re.useCallback=function(e,t){return mt.current.useCallback(e,t)};re.useContext=function(e){return mt.current.useContext(e)};re.useDebugValue=function(){};re.useDeferredValue=function(e){return mt.current.useDeferredValue(e)};re.useEffect=function(e,t){return mt.current.useEffect(e,t)};re.useId=function(){return mt.current.useId()};re.useImperativeHandle=function(e,t,n){return mt.current.useImperativeHandle(e,t,n)};re.useInsertionEffect=function(e,t){return mt.current.useInsertionEffect(e,t)};re.useLayoutEffect=function(e,t){return mt.current.useLayoutEffect(e,t)};re.useMemo=function(e,t){return mt.current.useMemo(e,t)};re.useReducer=function(e,t,n){return mt.current.useReducer(e,t,n)};re.useRef=function(e){return mt.current.useRef(e)};re.useState=function(e){return mt.current.useState(e)};re.useSyncExternalStore=function(e,t,n){return mt.current.useSyncExternalStore(e,t,n)};re.useTransition=function(){return mt.current.useTransition()};re.version="18.2.0";H1.exports=re;var b=H1.exports;const K=Gp(b),af=O_({__proto__:null,default:K},[b]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var W_=b,G_=Symbol.for("react.element"),Y_=Symbol.for("react.fragment"),q_=Object.prototype.hasOwnProperty,X_=W_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,K_={key:!0,ref:!0,__self:!0,__source:!0};function Z1(e,t,n){var r,i={},o=null,a=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)q_.call(t,r)&&!K_.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:G_,type:e,key:o,ref:a,props:i,_owner:X_.current}}lu.Fragment=Y_;lu.jsx=Z1;lu.jsxs=Z1;U1.exports=lu;var f=U1.exports;/**
 * @remix-run/router v1.8.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function sa(){return sa=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},sa.apply(this,arguments)}var lr;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(lr||(lr={}));const ig="popstate";function Q_(e){e===void 0&&(e={});function t(r,i){let{pathname:o,search:a,hash:l}=r.location;return sf("",{pathname:o,search:a,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:al(i)}return J_(t,n,null,e)}function Le(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Qp(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Z_(){return Math.random().toString(36).substr(2,8)}function og(e,t){return{usr:e.state,key:e.key,idx:t}}function sf(e,t,n,r){return n===void 0&&(n=null),sa({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?so(t):t,{state:n,key:t&&t.key||r||Z_()})}function al(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function so(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function J_(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,a=i.history,l=lr.Pop,s=null,u=d();u==null&&(u=0,a.replaceState(sa({},a.state,{idx:u}),""));function d(){return(a.state||{idx:null}).idx}function c(){l=lr.Pop;let w=d(),h=w==null?null:w-u;u=w,s&&s({action:l,location:g.location,delta:h})}function y(w,h){l=lr.Push;let v=sf(g.location,w,h);n&&n(v,w),u=d()+1;let x=og(v,u),S=g.createHref(v);try{a.pushState(x,"",S)}catch(C){if(C instanceof DOMException&&C.name==="DataCloneError")throw C;i.location.assign(S)}o&&s&&s({action:l,location:g.location,delta:1})}function p(w,h){l=lr.Replace;let v=sf(g.location,w,h);n&&n(v,w),u=d();let x=og(v,u),S=g.createHref(v);a.replaceState(x,"",S),o&&s&&s({action:l,location:g.location,delta:0})}function m(w){let h=i.location.origin!=="null"?i.location.origin:i.location.href,v=typeof w=="string"?w:al(w);return Le(h,"No window.location.(origin|href) available to create URL for href: "+v),new URL(v,h)}let g={get action(){return l},get location(){return e(i,a)},listen(w){if(s)throw new Error("A history only accepts one active listener");return i.addEventListener(ig,c),s=w,()=>{i.removeEventListener(ig,c),s=null}},createHref(w){return t(i,w)},createURL:m,encodeLocation(w){let h=m(w);return{pathname:h.pathname,search:h.search,hash:h.hash}},push:y,replace:p,go(w){return a.go(w)}};return g}var ag;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(ag||(ag={}));function eC(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?so(t):t,i=Zp(r.pathname||"/",n);if(i==null)return null;let o=J1(e);tC(o);let a=null;for(let l=0;a==null&&l<o.length;++l)a=cC(o[l],pC(i));return a}function J1(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,a,l)=>{let s={relativePath:l===void 0?o.path||"":l,caseSensitive:o.caseSensitive===!0,childrenIndex:a,route:o};s.relativePath.startsWith("/")&&(Le(s.relativePath.startsWith(r),'Absolute route path "'+s.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),s.relativePath=s.relativePath.slice(r.length));let u=pr([r,s.relativePath]),d=n.concat(s);o.children&&o.children.length>0&&(Le(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),J1(o.children,t,d,u)),!(o.path==null&&!o.index)&&t.push({path:u,score:lC(u,o.index),routesMeta:d})};return e.forEach((o,a)=>{var l;if(o.path===""||!((l=o.path)!=null&&l.includes("?")))i(o,a);else for(let s of ey(o.path))i(o,a,s)}),t}function ey(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let a=ey(r.join("/")),l=[];return l.push(...a.map(s=>s===""?o:[o,s].join("/"))),i&&l.push(...a),l.map(s=>e.startsWith("/")&&s===""?"/":s)}function tC(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:uC(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const nC=/^:\w+$/,rC=3,iC=2,oC=1,aC=10,sC=-2,sg=e=>e==="*";function lC(e,t){let n=e.split("/"),r=n.length;return n.some(sg)&&(r+=sC),t&&(r+=iC),n.filter(i=>!sg(i)).reduce((i,o)=>i+(nC.test(o)?rC:o===""?oC:aC),r)}function uC(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function cC(e,t){let{routesMeta:n}=e,r={},i="/",o=[];for(let a=0;a<n.length;++a){let l=n[a],s=a===n.length-1,u=i==="/"?t:t.slice(i.length)||"/",d=dC({path:l.relativePath,caseSensitive:l.caseSensitive,end:s},u);if(!d)return null;Object.assign(r,d.params);let c=l.route;o.push({params:r,pathname:pr([i,d.pathname]),pathnameBase:vC(pr([i,d.pathnameBase])),route:c}),d.pathnameBase!=="/"&&(i=pr([i,d.pathnameBase]))}return o}function dC(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=fC(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],a=o.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((u,d,c)=>{if(d==="*"){let y=l[c]||"";a=o.slice(0,o.length-y.length).replace(/(.)\/+$/,"$1")}return u[d]=hC(l[c]||"",d),u},{}),pathname:o,pathnameBase:a,pattern:e}}function fC(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Qp(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(a,l)=>(r.push(l),"/([^\\/]+)"));return e.endsWith("*")?(r.push("*"),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function pC(e){try{return decodeURI(e)}catch(t){return Qp(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function hC(e,t){try{return decodeURIComponent(e)}catch(n){return Qp(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function Zp(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function mC(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?so(e):e;return{pathname:n?n.startsWith("/")?n:gC(n,t):t,search:yC(r),hash:xC(i)}}function gC(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Dc(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function ty(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function ny(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=so(e):(i=sa({},e),Le(!i.pathname||!i.pathname.includes("?"),Dc("?","pathname","search",i)),Le(!i.pathname||!i.pathname.includes("#"),Dc("#","pathname","hash",i)),Le(!i.search||!i.search.includes("#"),Dc("#","search","hash",i)));let o=e===""||i.pathname==="",a=o?"/":i.pathname,l;if(r||a==null)l=n;else{let c=t.length-1;if(a.startsWith("..")){let y=a.split("/");for(;y[0]==="..";)y.shift(),c-=1;i.pathname=y.join("/")}l=c>=0?t[c]:"/"}let s=mC(i,l),u=a&&a!=="/"&&a.endsWith("/"),d=(o||a===".")&&n.endsWith("/");return!s.pathname.endsWith("/")&&(u||d)&&(s.pathname+="/"),s}const pr=e=>e.join("/").replace(/\/\/+/g,"/"),vC=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),yC=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,xC=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function bC(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const ry=["post","put","patch","delete"];new Set(ry);const wC=["get",...ry];new Set(wC);/**
 * React Router v6.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function sl(){return sl=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},sl.apply(this,arguments)}const Jp=b.createContext(null),SC=b.createContext(null),lo=b.createContext(null),uu=b.createContext(null),Kn=b.createContext({outlet:null,matches:[],isDataRoute:!1}),iy=b.createContext(null);function _C(e,t){let{relative:n}=t===void 0?{}:t;Aa()||Le(!1);let{basename:r,navigator:i}=b.useContext(lo),{hash:o,pathname:a,search:l}=sy(e,{relative:n}),s=a;return r!=="/"&&(s=a==="/"?r:pr([r,a])),i.createHref({pathname:s,search:l,hash:o})}function Aa(){return b.useContext(uu)!=null}function ri(){return Aa()||Le(!1),b.useContext(uu).location}function oy(e){b.useContext(lo).static||b.useLayoutEffect(e)}function On(){let{isDataRoute:e}=b.useContext(Kn);return e?FC():CC()}function CC(){Aa()||Le(!1);let e=b.useContext(Jp),{basename:t,navigator:n}=b.useContext(lo),{matches:r}=b.useContext(Kn),{pathname:i}=ri(),o=JSON.stringify(ty(r).map(s=>s.pathnameBase)),a=b.useRef(!1);return oy(()=>{a.current=!0}),b.useCallback(function(s,u){if(u===void 0&&(u={}),!a.current)return;if(typeof s=="number"){n.go(s);return}let d=ny(s,JSON.parse(o),i,u.relative==="path");e==null&&t!=="/"&&(d.pathname=d.pathname==="/"?t:pr([t,d.pathname])),(u.replace?n.replace:n.push)(d,u.state,u)},[t,n,o,i,e])}const EC=b.createContext(null);function kC(e){let t=b.useContext(Kn).outlet;return t&&b.createElement(EC.Provider,{value:e},t)}function ay(){let{matches:e}=b.useContext(Kn),t=e[e.length-1];return t?t.params:{}}function sy(e,t){let{relative:n}=t===void 0?{}:t,{matches:r}=b.useContext(Kn),{pathname:i}=ri(),o=JSON.stringify(ty(r).map(a=>a.pathnameBase));return b.useMemo(()=>ny(e,JSON.parse(o),i,n==="path"),[e,o,i,n])}function PC(e,t){return TC(e,t)}function TC(e,t,n){Aa()||Le(!1);let{navigator:r}=b.useContext(lo),{matches:i}=b.useContext(Kn),o=i[i.length-1],a=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let s=ri(),u;if(t){var d;let g=typeof t=="string"?so(t):t;l==="/"||(d=g.pathname)!=null&&d.startsWith(l)||Le(!1),u=g}else u=s;let c=u.pathname||"/",y=l==="/"?c:c.slice(l.length)||"/",p=eC(e,{pathname:y}),m=IC(p&&p.map(g=>Object.assign({},g,{params:Object.assign({},a,g.params),pathname:pr([l,r.encodeLocation?r.encodeLocation(g.pathname).pathname:g.pathname]),pathnameBase:g.pathnameBase==="/"?l:pr([l,r.encodeLocation?r.encodeLocation(g.pathnameBase).pathname:g.pathnameBase])})),i,n);return t&&m?b.createElement(uu.Provider,{value:{location:sl({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:lr.Pop}},m):m}function OC(){let e=RC(),t=bC(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},o=null;return b.createElement(b.Fragment,null,b.createElement("h2",null,"Unexpected Application Error!"),b.createElement("h3",{style:{fontStyle:"italic"}},t),n?b.createElement("pre",{style:i},n):null,o)}const jC=b.createElement(OC,null);class MC extends b.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error||n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?b.createElement(Kn.Provider,{value:this.props.routeContext},b.createElement(iy.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function $C(e){let{routeContext:t,match:n,children:r}=e,i=b.useContext(Jp);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),b.createElement(Kn.Provider,{value:t},r)}function IC(e,t,n){var r;if(t===void 0&&(t=[]),n===void 0&&(n=null),e==null){var i;if((i=n)!=null&&i.errors)e=n.matches;else return null}let o=e,a=(r=n)==null?void 0:r.errors;if(a!=null){let l=o.findIndex(s=>s.route.id&&(a==null?void 0:a[s.route.id]));l>=0||Le(!1),o=o.slice(0,Math.min(o.length,l+1))}return o.reduceRight((l,s,u)=>{let d=s.route.id?a==null?void 0:a[s.route.id]:null,c=null;n&&(c=s.route.errorElement||jC);let y=t.concat(o.slice(0,u+1)),p=()=>{let m;return d?m=c:s.route.Component?m=b.createElement(s.route.Component,null):s.route.element?m=s.route.element:m=l,b.createElement($C,{match:s,routeContext:{outlet:l,matches:y,isDataRoute:n!=null},children:m})};return n&&(s.route.ErrorBoundary||s.route.errorElement||u===0)?b.createElement(MC,{location:n.location,revalidation:n.revalidation,component:c,error:d,children:p(),routeContext:{outlet:null,matches:y,isDataRoute:!0}}):p()},null)}var ly=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(ly||{}),ll=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(ll||{});function DC(e){let t=b.useContext(Jp);return t||Le(!1),t}function LC(e){let t=b.useContext(SC);return t||Le(!1),t}function AC(e){let t=b.useContext(Kn);return t||Le(!1),t}function uy(e){let t=AC(),n=t.matches[t.matches.length-1];return n.route.id||Le(!1),n.route.id}function RC(){var e;let t=b.useContext(iy),n=LC(ll.UseRouteError),r=uy(ll.UseRouteError);return t||((e=n.errors)==null?void 0:e[r])}function FC(){let{router:e}=DC(ly.UseNavigateStable),t=uy(ll.UseNavigateStable),n=b.useRef(!1);return oy(()=>{n.current=!0}),b.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,sl({fromRouteId:t},o)))},[e,t])}function zC(e){return kC(e.context)}function rt(e){Le(!1)}function NC(e){let{basename:t="/",children:n=null,location:r,navigationType:i=lr.Pop,navigator:o,static:a=!1}=e;Aa()&&Le(!1);let l=t.replace(/^\/*/,"/"),s=b.useMemo(()=>({basename:l,navigator:o,static:a}),[l,o,a]);typeof r=="string"&&(r=so(r));let{pathname:u="/",search:d="",hash:c="",state:y=null,key:p="default"}=r,m=b.useMemo(()=>{let g=Zp(u,l);return g==null?null:{location:{pathname:g,search:d,hash:c,state:y,key:p},navigationType:i}},[l,u,d,c,y,p,i]);return m==null?null:b.createElement(lo.Provider,{value:s},b.createElement(uu.Provider,{children:n,value:m}))}function BC(e){let{children:t,location:n}=e;return PC(lf(t),n)}new Promise(()=>{});function lf(e,t){t===void 0&&(t=[]);let n=[];return b.Children.forEach(e,(r,i)=>{if(!b.isValidElement(r))return;let o=[...t,i];if(r.type===b.Fragment){n.push.apply(n,lf(r.props.children,o));return}r.type!==rt&&Le(!1),!r.props.index||!r.props.children||Le(!1);let a={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(a.children=lf(r.props.children,o)),n.push(a)}),n}/**
 * React Router DOM v6.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function uf(){return uf=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},uf.apply(this,arguments)}function VC(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function UC(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function HC(e,t){return e.button===0&&(!t||t==="_self")&&!UC(e)}function cf(e){return e===void 0&&(e=""),new URLSearchParams(typeof e=="string"||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce((t,n)=>{let r=e[n];return t.concat(Array.isArray(r)?r.map(i=>[n,i]):[[n,r]])},[]))}function WC(e,t){let n=cf(e);return t&&t.forEach((r,i)=>{n.has(i)||t.getAll(i).forEach(o=>{n.append(i,o)})}),n}const GC=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],YC="startTransition",lg=af[YC];function qC(e){let{basename:t,children:n,future:r,window:i}=e,o=b.useRef();o.current==null&&(o.current=Q_({window:i,v5Compat:!0}));let a=o.current,[l,s]=b.useState({action:a.action,location:a.location}),{v7_startTransition:u}=r||{},d=b.useCallback(c=>{u&&lg?lg(()=>s(c)):s(c)},[s,u]);return b.useLayoutEffect(()=>a.listen(d),[a,d]),b.createElement(NC,{basename:t,children:n,location:l.location,navigationType:l.action,navigator:a})}const XC=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",KC=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Oe=b.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:o,replace:a,state:l,target:s,to:u,preventScrollReset:d}=t,c=VC(t,GC),{basename:y}=b.useContext(lo),p,m=!1;if(typeof u=="string"&&KC.test(u)&&(p=u,XC))try{let v=new URL(window.location.href),x=u.startsWith("//")?new URL(v.protocol+u):new URL(u),S=Zp(x.pathname,y);x.origin===v.origin&&S!=null?u=S+x.search+x.hash:m=!0}catch{}let g=_C(u,{relative:i}),w=QC(u,{replace:a,state:l,target:s,preventScrollReset:d,relative:i});function h(v){r&&r(v),v.defaultPrevented||w(v)}return b.createElement("a",uf({},c,{href:p||g,onClick:m||o?r:h,ref:n,target:s}))});var ug;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher"})(ug||(ug={}));var cg;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(cg||(cg={}));function QC(e,t){let{target:n,replace:r,state:i,preventScrollReset:o,relative:a}=t===void 0?{}:t,l=On(),s=ri(),u=sy(e,{relative:a});return b.useCallback(d=>{if(HC(d,n)){d.preventDefault();let c=r!==void 0?r:al(s)===al(u);l(e,{replace:c,state:i,preventScrollReset:o,relative:a})}},[s,l,u,r,i,n,e,o,a])}function ZC(e){let t=b.useRef(cf(e)),n=b.useRef(!1),r=ri(),i=b.useMemo(()=>WC(r.search,n.current?null:t.current),[r.search]),o=On(),a=b.useCallback((l,s)=>{const u=cf(typeof l=="function"?l(i):l);n.current=!0,o("?"+u,s)},[o,i]);return[i,a]}var df={},cy={exports:{}},Ft={},dy={exports:{}},fy={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(P,I){var z=P.length;P.push(I);e:for(;0<z;){var B=z-1>>>1,N=P[B];if(0<i(N,I))P[B]=I,P[z]=N,z=B;else break e}}function n(P){return P.length===0?null:P[0]}function r(P){if(P.length===0)return null;var I=P[0],z=P.pop();if(z!==I){P[0]=z;e:for(var B=0,N=P.length,U=N>>>1;B<U;){var G=2*(B+1)-1,H=P[G],X=G+1,ee=P[X];if(0>i(H,z))X<N&&0>i(ee,H)?(P[B]=ee,P[X]=z,B=X):(P[B]=H,P[G]=z,B=G);else if(X<N&&0>i(ee,z))P[B]=ee,P[X]=z,B=X;else break e}}return I}function i(P,I){var z=P.sortIndex-I.sortIndex;return z!==0?z:P.id-I.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var a=Date,l=a.now();e.unstable_now=function(){return a.now()-l}}var s=[],u=[],d=1,c=null,y=3,p=!1,m=!1,g=!1,w=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(P){for(var I=n(u);I!==null;){if(I.callback===null)r(u);else if(I.startTime<=P)r(u),I.sortIndex=I.expirationTime,t(s,I);else break;I=n(u)}}function S(P){if(g=!1,x(P),!m)if(n(s)!==null)m=!0,L(C);else{var I=n(u);I!==null&&O(S,I.startTime-P)}}function C(P,I){m=!1,g&&(g=!1,h(_),_=-1),p=!0;var z=y;try{for(x(I),c=n(s);c!==null&&(!(c.expirationTime>I)||P&&!D());){var B=c.callback;if(typeof B=="function"){c.callback=null,y=c.priorityLevel;var N=B(c.expirationTime<=I);I=e.unstable_now(),typeof N=="function"?c.callback=N:c===n(s)&&r(s),x(I)}else r(s);c=n(s)}if(c!==null)var U=!0;else{var G=n(u);G!==null&&O(S,G.startTime-I),U=!1}return U}finally{c=null,y=z,p=!1}}var T=!1,k=null,_=-1,M=5,$=-1;function D(){return!(e.unstable_now()-$<M)}function A(){if(k!==null){var P=e.unstable_now();$=P;var I=!0;try{I=k(!0,P)}finally{I?j():(T=!1,k=null)}}else T=!1}var j;if(typeof v=="function")j=function(){v(A)};else if(typeof MessageChannel<"u"){var F=new MessageChannel,R=F.port2;F.port1.onmessage=A,j=function(){R.postMessage(null)}}else j=function(){w(A,0)};function L(P){k=P,T||(T=!0,j())}function O(P,I){_=w(function(){P(e.unstable_now())},I)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(P){P.callback=null},e.unstable_continueExecution=function(){m||p||(m=!0,L(C))},e.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<P?Math.floor(1e3/P):5},e.unstable_getCurrentPriorityLevel=function(){return y},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(P){switch(y){case 1:case 2:case 3:var I=3;break;default:I=y}var z=y;y=I;try{return P()}finally{y=z}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(P,I){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var z=y;y=P;try{return I()}finally{y=z}},e.unstable_scheduleCallback=function(P,I,z){var B=e.unstable_now();switch(typeof z=="object"&&z!==null?(z=z.delay,z=typeof z=="number"&&0<z?B+z:B):z=B,P){case 1:var N=-1;break;case 2:N=250;break;case 5:N=1073741823;break;case 4:N=1e4;break;default:N=5e3}return N=z+N,P={id:d++,callback:I,priorityLevel:P,startTime:z,expirationTime:N,sortIndex:-1},z>B?(P.sortIndex=z,t(u,P),n(s)===null&&P===n(u)&&(g?(h(_),_=-1):g=!0,O(S,z-B))):(P.sortIndex=N,t(s,P),m||p||(m=!0,L(C))),P},e.unstable_shouldYield=D,e.unstable_wrapCallback=function(P){var I=y;return function(){var z=y;y=I;try{return P.apply(this,arguments)}finally{y=z}}}})(fy);dy.exports=fy;var JC=dy.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var py=b,At=JC;function V(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var hy=new Set,la={};function ii(e,t){Ui(e,t),Ui(e+"Capture",t)}function Ui(e,t){for(la[e]=t,e=0;e<t.length;e++)hy.add(t[e])}var Hn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ff=Object.prototype.hasOwnProperty,eE=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,dg={},fg={};function tE(e){return ff.call(fg,e)?!0:ff.call(dg,e)?!1:eE.test(e)?fg[e]=!0:(dg[e]=!0,!1)}function nE(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function rE(e,t,n,r){if(t===null||typeof t>"u"||nE(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function gt(e,t,n,r,i,o,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=a}var Je={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Je[e]=new gt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Je[t]=new gt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Je[e]=new gt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Je[e]=new gt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Je[e]=new gt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Je[e]=new gt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Je[e]=new gt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Je[e]=new gt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Je[e]=new gt(e,5,!1,e.toLowerCase(),null,!1,!1)});var eh=/[\-:]([a-z])/g;function th(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(eh,th);Je[t]=new gt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(eh,th);Je[t]=new gt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(eh,th);Je[t]=new gt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Je[e]=new gt(e,1,!1,e.toLowerCase(),null,!1,!1)});Je.xlinkHref=new gt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Je[e]=new gt(e,1,!1,e.toLowerCase(),null,!0,!0)});function nh(e,t,n,r){var i=Je.hasOwnProperty(t)?Je[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(rE(t,n,i,r)&&(n=null),r||i===null?tE(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Qn=py.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ns=Symbol.for("react.element"),Si=Symbol.for("react.portal"),_i=Symbol.for("react.fragment"),rh=Symbol.for("react.strict_mode"),pf=Symbol.for("react.profiler"),my=Symbol.for("react.provider"),gy=Symbol.for("react.context"),ih=Symbol.for("react.forward_ref"),hf=Symbol.for("react.suspense"),mf=Symbol.for("react.suspense_list"),oh=Symbol.for("react.memo"),ir=Symbol.for("react.lazy"),vy=Symbol.for("react.offscreen"),pg=Symbol.iterator;function Co(e){return e===null||typeof e!="object"?null:(e=pg&&e[pg]||e["@@iterator"],typeof e=="function"?e:null)}var ke=Object.assign,Lc;function zo(e){if(Lc===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Lc=t&&t[1]||""}return`
`+Lc+e}var Ac=!1;function Rc(e,t){if(!e||Ac)return"";Ac=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),a=i.length-1,l=o.length-1;1<=a&&0<=l&&i[a]!==o[l];)l--;for(;1<=a&&0<=l;a--,l--)if(i[a]!==o[l]){if(a!==1||l!==1)do if(a--,l--,0>l||i[a]!==o[l]){var s=`
`+i[a].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=a&&0<=l);break}}}finally{Ac=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?zo(e):""}function iE(e){switch(e.tag){case 5:return zo(e.type);case 16:return zo("Lazy");case 13:return zo("Suspense");case 19:return zo("SuspenseList");case 0:case 2:case 15:return e=Rc(e.type,!1),e;case 11:return e=Rc(e.type.render,!1),e;case 1:return e=Rc(e.type,!0),e;default:return""}}function gf(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case _i:return"Fragment";case Si:return"Portal";case pf:return"Profiler";case rh:return"StrictMode";case hf:return"Suspense";case mf:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case gy:return(e.displayName||"Context")+".Consumer";case my:return(e._context.displayName||"Context")+".Provider";case ih:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case oh:return t=e.displayName||null,t!==null?t:gf(e.type)||"Memo";case ir:t=e._payload,e=e._init;try{return gf(e(t))}catch{}}return null}function oE(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return gf(t);case 8:return t===rh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function _r(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function yy(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function aE(e){var t=yy(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(a){r=""+a,o.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function rs(e){e._valueTracker||(e._valueTracker=aE(e))}function xy(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=yy(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function ul(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function vf(e,t){var n=t.checked;return ke({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function hg(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=_r(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function by(e,t){t=t.checked,t!=null&&nh(e,"checked",t,!1)}function yf(e,t){by(e,t);var n=_r(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?xf(e,t.type,n):t.hasOwnProperty("defaultValue")&&xf(e,t.type,_r(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function mg(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function xf(e,t,n){(t!=="number"||ul(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var No=Array.isArray;function Di(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+_r(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function bf(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(V(91));return ke({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function gg(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(V(92));if(No(n)){if(1<n.length)throw Error(V(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:_r(n)}}function wy(e,t){var n=_r(t.value),r=_r(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function vg(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Sy(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function wf(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Sy(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var is,_y=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(is=is||document.createElement("div"),is.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=is.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function ua(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var qo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},sE=["Webkit","ms","Moz","O"];Object.keys(qo).forEach(function(e){sE.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),qo[t]=qo[e]})});function Cy(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||qo.hasOwnProperty(e)&&qo[e]?(""+t).trim():t+"px"}function Ey(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Cy(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var lE=ke({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Sf(e,t){if(t){if(lE[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(V(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(V(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(V(61))}if(t.style!=null&&typeof t.style!="object")throw Error(V(62))}}function _f(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Cf=null;function ah(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ef=null,Li=null,Ai=null;function yg(e){if(e=za(e)){if(typeof Ef!="function")throw Error(V(280));var t=e.stateNode;t&&(t=hu(t),Ef(e.stateNode,e.type,t))}}function ky(e){Li?Ai?Ai.push(e):Ai=[e]:Li=e}function Py(){if(Li){var e=Li,t=Ai;if(Ai=Li=null,yg(e),t)for(e=0;e<t.length;e++)yg(t[e])}}function Ty(e,t){return e(t)}function Oy(){}var Fc=!1;function jy(e,t,n){if(Fc)return e(t,n);Fc=!0;try{return Ty(e,t,n)}finally{Fc=!1,(Li!==null||Ai!==null)&&(Oy(),Py())}}function ca(e,t){var n=e.stateNode;if(n===null)return null;var r=hu(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(V(231,t,typeof n));return n}var kf=!1;if(Hn)try{var Eo={};Object.defineProperty(Eo,"passive",{get:function(){kf=!0}}),window.addEventListener("test",Eo,Eo),window.removeEventListener("test",Eo,Eo)}catch{kf=!1}function uE(e,t,n,r,i,o,a,l,s){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(d){this.onError(d)}}var Xo=!1,cl=null,dl=!1,Pf=null,cE={onError:function(e){Xo=!0,cl=e}};function dE(e,t,n,r,i,o,a,l,s){Xo=!1,cl=null,uE.apply(cE,arguments)}function fE(e,t,n,r,i,o,a,l,s){if(dE.apply(this,arguments),Xo){if(Xo){var u=cl;Xo=!1,cl=null}else throw Error(V(198));dl||(dl=!0,Pf=u)}}function oi(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function My(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function xg(e){if(oi(e)!==e)throw Error(V(188))}function pE(e){var t=e.alternate;if(!t){if(t=oi(e),t===null)throw Error(V(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return xg(i),e;if(o===r)return xg(i),t;o=o.sibling}throw Error(V(188))}if(n.return!==r.return)n=i,r=o;else{for(var a=!1,l=i.child;l;){if(l===n){a=!0,n=i,r=o;break}if(l===r){a=!0,r=i,n=o;break}l=l.sibling}if(!a){for(l=o.child;l;){if(l===n){a=!0,n=o,r=i;break}if(l===r){a=!0,r=o,n=i;break}l=l.sibling}if(!a)throw Error(V(189))}}if(n.alternate!==r)throw Error(V(190))}if(n.tag!==3)throw Error(V(188));return n.stateNode.current===n?e:t}function $y(e){return e=pE(e),e!==null?Iy(e):null}function Iy(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Iy(e);if(t!==null)return t;e=e.sibling}return null}var Dy=At.unstable_scheduleCallback,bg=At.unstable_cancelCallback,hE=At.unstable_shouldYield,mE=At.unstable_requestPaint,je=At.unstable_now,gE=At.unstable_getCurrentPriorityLevel,sh=At.unstable_ImmediatePriority,Ly=At.unstable_UserBlockingPriority,fl=At.unstable_NormalPriority,vE=At.unstable_LowPriority,Ay=At.unstable_IdlePriority,cu=null,_n=null;function yE(e){if(_n&&typeof _n.onCommitFiberRoot=="function")try{_n.onCommitFiberRoot(cu,e,void 0,(e.current.flags&128)===128)}catch{}}var sn=Math.clz32?Math.clz32:wE,xE=Math.log,bE=Math.LN2;function wE(e){return e>>>=0,e===0?32:31-(xE(e)/bE|0)|0}var os=64,as=4194304;function Bo(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function pl(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,a=n&268435455;if(a!==0){var l=a&~i;l!==0?r=Bo(l):(o&=a,o!==0&&(r=Bo(o)))}else a=n&~i,a!==0?r=Bo(a):o!==0&&(r=Bo(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-sn(t),i=1<<n,r|=e[n],t&=~i;return r}function SE(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function _E(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var a=31-sn(o),l=1<<a,s=i[a];s===-1?(!(l&n)||l&r)&&(i[a]=SE(l,t)):s<=t&&(e.expiredLanes|=l),o&=~l}}function Tf(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Ry(){var e=os;return os<<=1,!(os&4194240)&&(os=64),e}function zc(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ra(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-sn(t),e[t]=n}function CE(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-sn(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function lh(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-sn(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var he=0;function Fy(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var zy,uh,Ny,By,Vy,Of=!1,ss=[],hr=null,mr=null,gr=null,da=new Map,fa=new Map,ar=[],EE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function wg(e,t){switch(e){case"focusin":case"focusout":hr=null;break;case"dragenter":case"dragleave":mr=null;break;case"mouseover":case"mouseout":gr=null;break;case"pointerover":case"pointerout":da.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":fa.delete(t.pointerId)}}function ko(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=za(t),t!==null&&uh(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function kE(e,t,n,r,i){switch(t){case"focusin":return hr=ko(hr,e,t,n,r,i),!0;case"dragenter":return mr=ko(mr,e,t,n,r,i),!0;case"mouseover":return gr=ko(gr,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return da.set(o,ko(da.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,fa.set(o,ko(fa.get(o)||null,e,t,n,r,i)),!0}return!1}function Uy(e){var t=Nr(e.target);if(t!==null){var n=oi(t);if(n!==null){if(t=n.tag,t===13){if(t=My(n),t!==null){e.blockedOn=t,Vy(e.priority,function(){Ny(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ds(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=jf(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Cf=r,n.target.dispatchEvent(r),Cf=null}else return t=za(n),t!==null&&uh(t),e.blockedOn=n,!1;t.shift()}return!0}function Sg(e,t,n){Ds(e)&&n.delete(t)}function PE(){Of=!1,hr!==null&&Ds(hr)&&(hr=null),mr!==null&&Ds(mr)&&(mr=null),gr!==null&&Ds(gr)&&(gr=null),da.forEach(Sg),fa.forEach(Sg)}function Po(e,t){e.blockedOn===t&&(e.blockedOn=null,Of||(Of=!0,At.unstable_scheduleCallback(At.unstable_NormalPriority,PE)))}function pa(e){function t(i){return Po(i,e)}if(0<ss.length){Po(ss[0],e);for(var n=1;n<ss.length;n++){var r=ss[n];r.blockedOn===e&&(r.blockedOn=null)}}for(hr!==null&&Po(hr,e),mr!==null&&Po(mr,e),gr!==null&&Po(gr,e),da.forEach(t),fa.forEach(t),n=0;n<ar.length;n++)r=ar[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<ar.length&&(n=ar[0],n.blockedOn===null);)Uy(n),n.blockedOn===null&&ar.shift()}var Ri=Qn.ReactCurrentBatchConfig,hl=!0;function TE(e,t,n,r){var i=he,o=Ri.transition;Ri.transition=null;try{he=1,ch(e,t,n,r)}finally{he=i,Ri.transition=o}}function OE(e,t,n,r){var i=he,o=Ri.transition;Ri.transition=null;try{he=4,ch(e,t,n,r)}finally{he=i,Ri.transition=o}}function ch(e,t,n,r){if(hl){var i=jf(e,t,n,r);if(i===null)Xc(e,t,r,ml,n),wg(e,r);else if(kE(i,e,t,n,r))r.stopPropagation();else if(wg(e,r),t&4&&-1<EE.indexOf(e)){for(;i!==null;){var o=za(i);if(o!==null&&zy(o),o=jf(e,t,n,r),o===null&&Xc(e,t,r,ml,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else Xc(e,t,r,null,n)}}var ml=null;function jf(e,t,n,r){if(ml=null,e=ah(r),e=Nr(e),e!==null)if(t=oi(e),t===null)e=null;else if(n=t.tag,n===13){if(e=My(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return ml=e,null}function Hy(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(gE()){case sh:return 1;case Ly:return 4;case fl:case vE:return 16;case Ay:return 536870912;default:return 16}default:return 16}}var ur=null,dh=null,Ls=null;function Wy(){if(Ls)return Ls;var e,t=dh,n=t.length,r,i="value"in ur?ur.value:ur.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===i[o-r];r++);return Ls=i.slice(e,1<r?1-r:void 0)}function As(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ls(){return!0}function _g(){return!1}function zt(e){function t(n,r,i,o,a){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=a,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(o):o[l]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?ls:_g,this.isPropagationStopped=_g,this}return ke(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ls)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ls)},persist:function(){},isPersistent:ls}),t}var uo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},fh=zt(uo),Fa=ke({},uo,{view:0,detail:0}),jE=zt(Fa),Nc,Bc,To,du=ke({},Fa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ph,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==To&&(To&&e.type==="mousemove"?(Nc=e.screenX-To.screenX,Bc=e.screenY-To.screenY):Bc=Nc=0,To=e),Nc)},movementY:function(e){return"movementY"in e?e.movementY:Bc}}),Cg=zt(du),ME=ke({},du,{dataTransfer:0}),$E=zt(ME),IE=ke({},Fa,{relatedTarget:0}),Vc=zt(IE),DE=ke({},uo,{animationName:0,elapsedTime:0,pseudoElement:0}),LE=zt(DE),AE=ke({},uo,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),RE=zt(AE),FE=ke({},uo,{data:0}),Eg=zt(FE),zE={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},NE={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},BE={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function VE(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=BE[e])?!!t[e]:!1}function ph(){return VE}var UE=ke({},Fa,{key:function(e){if(e.key){var t=zE[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=As(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?NE[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ph,charCode:function(e){return e.type==="keypress"?As(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?As(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),HE=zt(UE),WE=ke({},du,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),kg=zt(WE),GE=ke({},Fa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ph}),YE=zt(GE),qE=ke({},uo,{propertyName:0,elapsedTime:0,pseudoElement:0}),XE=zt(qE),KE=ke({},du,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),QE=zt(KE),ZE=[9,13,27,32],hh=Hn&&"CompositionEvent"in window,Ko=null;Hn&&"documentMode"in document&&(Ko=document.documentMode);var JE=Hn&&"TextEvent"in window&&!Ko,Gy=Hn&&(!hh||Ko&&8<Ko&&11>=Ko),Pg=String.fromCharCode(32),Tg=!1;function Yy(e,t){switch(e){case"keyup":return ZE.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function qy(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ci=!1;function ek(e,t){switch(e){case"compositionend":return qy(t);case"keypress":return t.which!==32?null:(Tg=!0,Pg);case"textInput":return e=t.data,e===Pg&&Tg?null:e;default:return null}}function tk(e,t){if(Ci)return e==="compositionend"||!hh&&Yy(e,t)?(e=Wy(),Ls=dh=ur=null,Ci=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Gy&&t.locale!=="ko"?null:t.data;default:return null}}var nk={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Og(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!nk[e.type]:t==="textarea"}function Xy(e,t,n,r){ky(r),t=gl(t,"onChange"),0<t.length&&(n=new fh("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Qo=null,ha=null;function rk(e){ax(e,0)}function fu(e){var t=Pi(e);if(xy(t))return e}function ik(e,t){if(e==="change")return t}var Ky=!1;if(Hn){var Uc;if(Hn){var Hc="oninput"in document;if(!Hc){var jg=document.createElement("div");jg.setAttribute("oninput","return;"),Hc=typeof jg.oninput=="function"}Uc=Hc}else Uc=!1;Ky=Uc&&(!document.documentMode||9<document.documentMode)}function Mg(){Qo&&(Qo.detachEvent("onpropertychange",Qy),ha=Qo=null)}function Qy(e){if(e.propertyName==="value"&&fu(ha)){var t=[];Xy(t,ha,e,ah(e)),jy(rk,t)}}function ok(e,t,n){e==="focusin"?(Mg(),Qo=t,ha=n,Qo.attachEvent("onpropertychange",Qy)):e==="focusout"&&Mg()}function ak(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return fu(ha)}function sk(e,t){if(e==="click")return fu(t)}function lk(e,t){if(e==="input"||e==="change")return fu(t)}function uk(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var fn=typeof Object.is=="function"?Object.is:uk;function ma(e,t){if(fn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!ff.call(t,i)||!fn(e[i],t[i]))return!1}return!0}function $g(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ig(e,t){var n=$g(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=$g(n)}}function Zy(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Zy(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Jy(){for(var e=window,t=ul();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=ul(e.document)}return t}function mh(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function ck(e){var t=Jy(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Zy(n.ownerDocument.documentElement,n)){if(r!==null&&mh(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=Ig(n,o);var a=Ig(n,r);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var dk=Hn&&"documentMode"in document&&11>=document.documentMode,Ei=null,Mf=null,Zo=null,$f=!1;function Dg(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;$f||Ei==null||Ei!==ul(r)||(r=Ei,"selectionStart"in r&&mh(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Zo&&ma(Zo,r)||(Zo=r,r=gl(Mf,"onSelect"),0<r.length&&(t=new fh("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Ei)))}function us(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var ki={animationend:us("Animation","AnimationEnd"),animationiteration:us("Animation","AnimationIteration"),animationstart:us("Animation","AnimationStart"),transitionend:us("Transition","TransitionEnd")},Wc={},ex={};Hn&&(ex=document.createElement("div").style,"AnimationEvent"in window||(delete ki.animationend.animation,delete ki.animationiteration.animation,delete ki.animationstart.animation),"TransitionEvent"in window||delete ki.transitionend.transition);function pu(e){if(Wc[e])return Wc[e];if(!ki[e])return e;var t=ki[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in ex)return Wc[e]=t[n];return e}var tx=pu("animationend"),nx=pu("animationiteration"),rx=pu("animationstart"),ix=pu("transitionend"),ox=new Map,Lg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function kr(e,t){ox.set(e,t),ii(t,[e])}for(var Gc=0;Gc<Lg.length;Gc++){var Yc=Lg[Gc],fk=Yc.toLowerCase(),pk=Yc[0].toUpperCase()+Yc.slice(1);kr(fk,"on"+pk)}kr(tx,"onAnimationEnd");kr(nx,"onAnimationIteration");kr(rx,"onAnimationStart");kr("dblclick","onDoubleClick");kr("focusin","onFocus");kr("focusout","onBlur");kr(ix,"onTransitionEnd");Ui("onMouseEnter",["mouseout","mouseover"]);Ui("onMouseLeave",["mouseout","mouseover"]);Ui("onPointerEnter",["pointerout","pointerover"]);Ui("onPointerLeave",["pointerout","pointerover"]);ii("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ii("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ii("onBeforeInput",["compositionend","keypress","textInput","paste"]);ii("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ii("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ii("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Vo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),hk=new Set("cancel close invalid load scroll toggle".split(" ").concat(Vo));function Ag(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,fE(r,t,void 0,e),e.currentTarget=null}function ax(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var a=r.length-1;0<=a;a--){var l=r[a],s=l.instance,u=l.currentTarget;if(l=l.listener,s!==o&&i.isPropagationStopped())break e;Ag(i,l,u),o=s}else for(a=0;a<r.length;a++){if(l=r[a],s=l.instance,u=l.currentTarget,l=l.listener,s!==o&&i.isPropagationStopped())break e;Ag(i,l,u),o=s}}}if(dl)throw e=Pf,dl=!1,Pf=null,e}function ve(e,t){var n=t[Rf];n===void 0&&(n=t[Rf]=new Set);var r=e+"__bubble";n.has(r)||(sx(t,e,2,!1),n.add(r))}function qc(e,t,n){var r=0;t&&(r|=4),sx(n,e,r,t)}var cs="_reactListening"+Math.random().toString(36).slice(2);function ga(e){if(!e[cs]){e[cs]=!0,hy.forEach(function(n){n!=="selectionchange"&&(hk.has(n)||qc(n,!1,e),qc(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[cs]||(t[cs]=!0,qc("selectionchange",!1,t))}}function sx(e,t,n,r){switch(Hy(t)){case 1:var i=TE;break;case 4:i=OE;break;default:i=ch}n=i.bind(null,t,n,e),i=void 0,!kf||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Xc(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(a===4)for(a=r.return;a!==null;){var s=a.tag;if((s===3||s===4)&&(s=a.stateNode.containerInfo,s===i||s.nodeType===8&&s.parentNode===i))return;a=a.return}for(;l!==null;){if(a=Nr(l),a===null)return;if(s=a.tag,s===5||s===6){r=o=a;continue e}l=l.parentNode}}r=r.return}jy(function(){var u=o,d=ah(n),c=[];e:{var y=ox.get(e);if(y!==void 0){var p=fh,m=e;switch(e){case"keypress":if(As(n)===0)break e;case"keydown":case"keyup":p=HE;break;case"focusin":m="focus",p=Vc;break;case"focusout":m="blur",p=Vc;break;case"beforeblur":case"afterblur":p=Vc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Cg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=$E;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=YE;break;case tx:case nx:case rx:p=LE;break;case ix:p=XE;break;case"scroll":p=jE;break;case"wheel":p=QE;break;case"copy":case"cut":case"paste":p=RE;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=kg}var g=(t&4)!==0,w=!g&&e==="scroll",h=g?y!==null?y+"Capture":null:y;g=[];for(var v=u,x;v!==null;){x=v;var S=x.stateNode;if(x.tag===5&&S!==null&&(x=S,h!==null&&(S=ca(v,h),S!=null&&g.push(va(v,S,x)))),w)break;v=v.return}0<g.length&&(y=new p(y,m,null,n,d),c.push({event:y,listeners:g}))}}if(!(t&7)){e:{if(y=e==="mouseover"||e==="pointerover",p=e==="mouseout"||e==="pointerout",y&&n!==Cf&&(m=n.relatedTarget||n.fromElement)&&(Nr(m)||m[Wn]))break e;if((p||y)&&(y=d.window===d?d:(y=d.ownerDocument)?y.defaultView||y.parentWindow:window,p?(m=n.relatedTarget||n.toElement,p=u,m=m?Nr(m):null,m!==null&&(w=oi(m),m!==w||m.tag!==5&&m.tag!==6)&&(m=null)):(p=null,m=u),p!==m)){if(g=Cg,S="onMouseLeave",h="onMouseEnter",v="mouse",(e==="pointerout"||e==="pointerover")&&(g=kg,S="onPointerLeave",h="onPointerEnter",v="pointer"),w=p==null?y:Pi(p),x=m==null?y:Pi(m),y=new g(S,v+"leave",p,n,d),y.target=w,y.relatedTarget=x,S=null,Nr(d)===u&&(g=new g(h,v+"enter",m,n,d),g.target=x,g.relatedTarget=w,S=g),w=S,p&&m)t:{for(g=p,h=m,v=0,x=g;x;x=ui(x))v++;for(x=0,S=h;S;S=ui(S))x++;for(;0<v-x;)g=ui(g),v--;for(;0<x-v;)h=ui(h),x--;for(;v--;){if(g===h||h!==null&&g===h.alternate)break t;g=ui(g),h=ui(h)}g=null}else g=null;p!==null&&Rg(c,y,p,g,!1),m!==null&&w!==null&&Rg(c,w,m,g,!0)}}e:{if(y=u?Pi(u):window,p=y.nodeName&&y.nodeName.toLowerCase(),p==="select"||p==="input"&&y.type==="file")var C=ik;else if(Og(y))if(Ky)C=lk;else{C=ak;var T=ok}else(p=y.nodeName)&&p.toLowerCase()==="input"&&(y.type==="checkbox"||y.type==="radio")&&(C=sk);if(C&&(C=C(e,u))){Xy(c,C,n,d);break e}T&&T(e,y,u),e==="focusout"&&(T=y._wrapperState)&&T.controlled&&y.type==="number"&&xf(y,"number",y.value)}switch(T=u?Pi(u):window,e){case"focusin":(Og(T)||T.contentEditable==="true")&&(Ei=T,Mf=u,Zo=null);break;case"focusout":Zo=Mf=Ei=null;break;case"mousedown":$f=!0;break;case"contextmenu":case"mouseup":case"dragend":$f=!1,Dg(c,n,d);break;case"selectionchange":if(dk)break;case"keydown":case"keyup":Dg(c,n,d)}var k;if(hh)e:{switch(e){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else Ci?Yy(e,n)&&(_="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(_="onCompositionStart");_&&(Gy&&n.locale!=="ko"&&(Ci||_!=="onCompositionStart"?_==="onCompositionEnd"&&Ci&&(k=Wy()):(ur=d,dh="value"in ur?ur.value:ur.textContent,Ci=!0)),T=gl(u,_),0<T.length&&(_=new Eg(_,e,null,n,d),c.push({event:_,listeners:T}),k?_.data=k:(k=qy(n),k!==null&&(_.data=k)))),(k=JE?ek(e,n):tk(e,n))&&(u=gl(u,"onBeforeInput"),0<u.length&&(d=new Eg("onBeforeInput","beforeinput",null,n,d),c.push({event:d,listeners:u}),d.data=k))}ax(c,t)})}function va(e,t,n){return{instance:e,listener:t,currentTarget:n}}function gl(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=ca(e,n),o!=null&&r.unshift(va(e,o,i)),o=ca(e,t),o!=null&&r.push(va(e,o,i))),e=e.return}return r}function ui(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Rg(e,t,n,r,i){for(var o=t._reactName,a=[];n!==null&&n!==r;){var l=n,s=l.alternate,u=l.stateNode;if(s!==null&&s===r)break;l.tag===5&&u!==null&&(l=u,i?(s=ca(n,o),s!=null&&a.unshift(va(n,s,l))):i||(s=ca(n,o),s!=null&&a.push(va(n,s,l)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var mk=/\r\n?/g,gk=/\u0000|\uFFFD/g;function Fg(e){return(typeof e=="string"?e:""+e).replace(mk,`
`).replace(gk,"")}function ds(e,t,n){if(t=Fg(t),Fg(e)!==t&&n)throw Error(V(425))}function vl(){}var If=null,Df=null;function Lf(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Af=typeof setTimeout=="function"?setTimeout:void 0,vk=typeof clearTimeout=="function"?clearTimeout:void 0,zg=typeof Promise=="function"?Promise:void 0,yk=typeof queueMicrotask=="function"?queueMicrotask:typeof zg<"u"?function(e){return zg.resolve(null).then(e).catch(xk)}:Af;function xk(e){setTimeout(function(){throw e})}function Kc(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),pa(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);pa(t)}function vr(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Ng(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var co=Math.random().toString(36).slice(2),wn="__reactFiber$"+co,ya="__reactProps$"+co,Wn="__reactContainer$"+co,Rf="__reactEvents$"+co,bk="__reactListeners$"+co,wk="__reactHandles$"+co;function Nr(e){var t=e[wn];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Wn]||n[wn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Ng(e);e!==null;){if(n=e[wn])return n;e=Ng(e)}return t}e=n,n=e.parentNode}return null}function za(e){return e=e[wn]||e[Wn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Pi(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(V(33))}function hu(e){return e[ya]||null}var Ff=[],Ti=-1;function Pr(e){return{current:e}}function xe(e){0>Ti||(e.current=Ff[Ti],Ff[Ti]=null,Ti--)}function ge(e,t){Ti++,Ff[Ti]=e.current,e.current=t}var Cr={},lt=Pr(Cr),_t=Pr(!1),Yr=Cr;function Hi(e,t){var n=e.type.contextTypes;if(!n)return Cr;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Ct(e){return e=e.childContextTypes,e!=null}function yl(){xe(_t),xe(lt)}function Bg(e,t,n){if(lt.current!==Cr)throw Error(V(168));ge(lt,t),ge(_t,n)}function lx(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(V(108,oE(e)||"Unknown",i));return ke({},n,r)}function xl(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Cr,Yr=lt.current,ge(lt,e),ge(_t,_t.current),!0}function Vg(e,t,n){var r=e.stateNode;if(!r)throw Error(V(169));n?(e=lx(e,t,Yr),r.__reactInternalMemoizedMergedChildContext=e,xe(_t),xe(lt),ge(lt,e)):xe(_t),ge(_t,n)}var An=null,mu=!1,Qc=!1;function ux(e){An===null?An=[e]:An.push(e)}function Sk(e){mu=!0,ux(e)}function Tr(){if(!Qc&&An!==null){Qc=!0;var e=0,t=he;try{var n=An;for(he=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}An=null,mu=!1}catch(i){throw An!==null&&(An=An.slice(e+1)),Dy(sh,Tr),i}finally{he=t,Qc=!1}}return null}var Oi=[],ji=0,bl=null,wl=0,Ut=[],Ht=0,qr=null,zn=1,Nn="";function Dr(e,t){Oi[ji++]=wl,Oi[ji++]=bl,bl=e,wl=t}function cx(e,t,n){Ut[Ht++]=zn,Ut[Ht++]=Nn,Ut[Ht++]=qr,qr=e;var r=zn;e=Nn;var i=32-sn(r)-1;r&=~(1<<i),n+=1;var o=32-sn(t)+i;if(30<o){var a=i-i%5;o=(r&(1<<a)-1).toString(32),r>>=a,i-=a,zn=1<<32-sn(t)+i|n<<i|r,Nn=o+e}else zn=1<<o|n<<i|r,Nn=e}function gh(e){e.return!==null&&(Dr(e,1),cx(e,1,0))}function vh(e){for(;e===bl;)bl=Oi[--ji],Oi[ji]=null,wl=Oi[--ji],Oi[ji]=null;for(;e===qr;)qr=Ut[--Ht],Ut[Ht]=null,Nn=Ut[--Ht],Ut[Ht]=null,zn=Ut[--Ht],Ut[Ht]=null}var Dt=null,$t=null,_e=!1,on=null;function dx(e,t){var n=Wt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Ug(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Dt=e,$t=vr(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Dt=e,$t=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=qr!==null?{id:zn,overflow:Nn}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Wt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Dt=e,$t=null,!0):!1;default:return!1}}function zf(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Nf(e){if(_e){var t=$t;if(t){var n=t;if(!Ug(e,t)){if(zf(e))throw Error(V(418));t=vr(n.nextSibling);var r=Dt;t&&Ug(e,t)?dx(r,n):(e.flags=e.flags&-4097|2,_e=!1,Dt=e)}}else{if(zf(e))throw Error(V(418));e.flags=e.flags&-4097|2,_e=!1,Dt=e}}}function Hg(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Dt=e}function fs(e){if(e!==Dt)return!1;if(!_e)return Hg(e),_e=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Lf(e.type,e.memoizedProps)),t&&(t=$t)){if(zf(e))throw fx(),Error(V(418));for(;t;)dx(e,t),t=vr(t.nextSibling)}if(Hg(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(V(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){$t=vr(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}$t=null}}else $t=Dt?vr(e.stateNode.nextSibling):null;return!0}function fx(){for(var e=$t;e;)e=vr(e.nextSibling)}function Wi(){$t=Dt=null,_e=!1}function yh(e){on===null?on=[e]:on.push(e)}var _k=Qn.ReactCurrentBatchConfig;function tn(e,t){if(e&&e.defaultProps){t=ke({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Sl=Pr(null),_l=null,Mi=null,xh=null;function bh(){xh=Mi=_l=null}function wh(e){var t=Sl.current;xe(Sl),e._currentValue=t}function Bf(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Fi(e,t){_l=e,xh=Mi=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(St=!0),e.firstContext=null)}function Yt(e){var t=e._currentValue;if(xh!==e)if(e={context:e,memoizedValue:t,next:null},Mi===null){if(_l===null)throw Error(V(308));Mi=e,_l.dependencies={lanes:0,firstContext:e}}else Mi=Mi.next=e;return t}var Br=null;function Sh(e){Br===null?Br=[e]:Br.push(e)}function px(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Sh(t)):(n.next=i.next,i.next=n),t.interleaved=n,Gn(e,r)}function Gn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var or=!1;function _h(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function hx(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Bn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function yr(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,se&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Gn(e,n)}return i=r.interleaved,i===null?(t.next=t,Sh(r)):(t.next=i.next,i.next=t),r.interleaved=t,Gn(e,n)}function Rs(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,lh(e,n)}}function Wg(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=a:o=o.next=a,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Cl(e,t,n,r){var i=e.updateQueue;or=!1;var o=i.firstBaseUpdate,a=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var s=l,u=s.next;s.next=null,a===null?o=u:a.next=u,a=s;var d=e.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==a&&(l===null?d.firstBaseUpdate=u:l.next=u,d.lastBaseUpdate=s))}if(o!==null){var c=i.baseState;a=0,d=u=s=null,l=o;do{var y=l.lane,p=l.eventTime;if((r&y)===y){d!==null&&(d=d.next={eventTime:p,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var m=e,g=l;switch(y=t,p=n,g.tag){case 1:if(m=g.payload,typeof m=="function"){c=m.call(p,c,y);break e}c=m;break e;case 3:m.flags=m.flags&-65537|128;case 0:if(m=g.payload,y=typeof m=="function"?m.call(p,c,y):m,y==null)break e;c=ke({},c,y);break e;case 2:or=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,y=i.effects,y===null?i.effects=[l]:y.push(l))}else p={eventTime:p,lane:y,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(u=d=p,s=c):d=d.next=p,a|=y;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;y=l,l=y.next,y.next=null,i.lastBaseUpdate=y,i.shared.pending=null}}while(1);if(d===null&&(s=c),i.baseState=s,i.firstBaseUpdate=u,i.lastBaseUpdate=d,t=i.shared.interleaved,t!==null){i=t;do a|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);Kr|=a,e.lanes=a,e.memoizedState=c}}function Gg(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(V(191,i));i.call(r)}}}var mx=new py.Component().refs;function Vf(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ke({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var gu={isMounted:function(e){return(e=e._reactInternals)?oi(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=pt(),i=br(e),o=Bn(r,i);o.payload=t,n!=null&&(o.callback=n),t=yr(e,o,i),t!==null&&(ln(t,e,i,r),Rs(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=pt(),i=br(e),o=Bn(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=yr(e,o,i),t!==null&&(ln(t,e,i,r),Rs(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=pt(),r=br(e),i=Bn(n,r);i.tag=2,t!=null&&(i.callback=t),t=yr(e,i,r),t!==null&&(ln(t,e,r,n),Rs(t,e,r))}};function Yg(e,t,n,r,i,o,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,a):t.prototype&&t.prototype.isPureReactComponent?!ma(n,r)||!ma(i,o):!0}function gx(e,t,n){var r=!1,i=Cr,o=t.contextType;return typeof o=="object"&&o!==null?o=Yt(o):(i=Ct(t)?Yr:lt.current,r=t.contextTypes,o=(r=r!=null)?Hi(e,i):Cr),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=gu,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function qg(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&gu.enqueueReplaceState(t,t.state,null)}function Uf(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=mx,_h(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=Yt(o):(o=Ct(t)?Yr:lt.current,i.context=Hi(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Vf(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&gu.enqueueReplaceState(i,i.state,null),Cl(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Oo(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(V(309));var r=n.stateNode}if(!r)throw Error(V(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(a){var l=i.refs;l===mx&&(l=i.refs={}),a===null?delete l[o]:l[o]=a},t._stringRef=o,t)}if(typeof e!="string")throw Error(V(284));if(!n._owner)throw Error(V(290,e))}return e}function ps(e,t){throw e=Object.prototype.toString.call(t),Error(V(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Xg(e){var t=e._init;return t(e._payload)}function vx(e){function t(h,v){if(e){var x=h.deletions;x===null?(h.deletions=[v],h.flags|=16):x.push(v)}}function n(h,v){if(!e)return null;for(;v!==null;)t(h,v),v=v.sibling;return null}function r(h,v){for(h=new Map;v!==null;)v.key!==null?h.set(v.key,v):h.set(v.index,v),v=v.sibling;return h}function i(h,v){return h=wr(h,v),h.index=0,h.sibling=null,h}function o(h,v,x){return h.index=x,e?(x=h.alternate,x!==null?(x=x.index,x<v?(h.flags|=2,v):x):(h.flags|=2,v)):(h.flags|=1048576,v)}function a(h){return e&&h.alternate===null&&(h.flags|=2),h}function l(h,v,x,S){return v===null||v.tag!==6?(v=id(x,h.mode,S),v.return=h,v):(v=i(v,x),v.return=h,v)}function s(h,v,x,S){var C=x.type;return C===_i?d(h,v,x.props.children,S,x.key):v!==null&&(v.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===ir&&Xg(C)===v.type)?(S=i(v,x.props),S.ref=Oo(h,v,x),S.return=h,S):(S=Us(x.type,x.key,x.props,null,h.mode,S),S.ref=Oo(h,v,x),S.return=h,S)}function u(h,v,x,S){return v===null||v.tag!==4||v.stateNode.containerInfo!==x.containerInfo||v.stateNode.implementation!==x.implementation?(v=od(x,h.mode,S),v.return=h,v):(v=i(v,x.children||[]),v.return=h,v)}function d(h,v,x,S,C){return v===null||v.tag!==7?(v=Wr(x,h.mode,S,C),v.return=h,v):(v=i(v,x),v.return=h,v)}function c(h,v,x){if(typeof v=="string"&&v!==""||typeof v=="number")return v=id(""+v,h.mode,x),v.return=h,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case ns:return x=Us(v.type,v.key,v.props,null,h.mode,x),x.ref=Oo(h,null,v),x.return=h,x;case Si:return v=od(v,h.mode,x),v.return=h,v;case ir:var S=v._init;return c(h,S(v._payload),x)}if(No(v)||Co(v))return v=Wr(v,h.mode,x,null),v.return=h,v;ps(h,v)}return null}function y(h,v,x,S){var C=v!==null?v.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return C!==null?null:l(h,v,""+x,S);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case ns:return x.key===C?s(h,v,x,S):null;case Si:return x.key===C?u(h,v,x,S):null;case ir:return C=x._init,y(h,v,C(x._payload),S)}if(No(x)||Co(x))return C!==null?null:d(h,v,x,S,null);ps(h,x)}return null}function p(h,v,x,S,C){if(typeof S=="string"&&S!==""||typeof S=="number")return h=h.get(x)||null,l(v,h,""+S,C);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case ns:return h=h.get(S.key===null?x:S.key)||null,s(v,h,S,C);case Si:return h=h.get(S.key===null?x:S.key)||null,u(v,h,S,C);case ir:var T=S._init;return p(h,v,x,T(S._payload),C)}if(No(S)||Co(S))return h=h.get(x)||null,d(v,h,S,C,null);ps(v,S)}return null}function m(h,v,x,S){for(var C=null,T=null,k=v,_=v=0,M=null;k!==null&&_<x.length;_++){k.index>_?(M=k,k=null):M=k.sibling;var $=y(h,k,x[_],S);if($===null){k===null&&(k=M);break}e&&k&&$.alternate===null&&t(h,k),v=o($,v,_),T===null?C=$:T.sibling=$,T=$,k=M}if(_===x.length)return n(h,k),_e&&Dr(h,_),C;if(k===null){for(;_<x.length;_++)k=c(h,x[_],S),k!==null&&(v=o(k,v,_),T===null?C=k:T.sibling=k,T=k);return _e&&Dr(h,_),C}for(k=r(h,k);_<x.length;_++)M=p(k,h,_,x[_],S),M!==null&&(e&&M.alternate!==null&&k.delete(M.key===null?_:M.key),v=o(M,v,_),T===null?C=M:T.sibling=M,T=M);return e&&k.forEach(function(D){return t(h,D)}),_e&&Dr(h,_),C}function g(h,v,x,S){var C=Co(x);if(typeof C!="function")throw Error(V(150));if(x=C.call(x),x==null)throw Error(V(151));for(var T=C=null,k=v,_=v=0,M=null,$=x.next();k!==null&&!$.done;_++,$=x.next()){k.index>_?(M=k,k=null):M=k.sibling;var D=y(h,k,$.value,S);if(D===null){k===null&&(k=M);break}e&&k&&D.alternate===null&&t(h,k),v=o(D,v,_),T===null?C=D:T.sibling=D,T=D,k=M}if($.done)return n(h,k),_e&&Dr(h,_),C;if(k===null){for(;!$.done;_++,$=x.next())$=c(h,$.value,S),$!==null&&(v=o($,v,_),T===null?C=$:T.sibling=$,T=$);return _e&&Dr(h,_),C}for(k=r(h,k);!$.done;_++,$=x.next())$=p(k,h,_,$.value,S),$!==null&&(e&&$.alternate!==null&&k.delete($.key===null?_:$.key),v=o($,v,_),T===null?C=$:T.sibling=$,T=$);return e&&k.forEach(function(A){return t(h,A)}),_e&&Dr(h,_),C}function w(h,v,x,S){if(typeof x=="object"&&x!==null&&x.type===_i&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case ns:e:{for(var C=x.key,T=v;T!==null;){if(T.key===C){if(C=x.type,C===_i){if(T.tag===7){n(h,T.sibling),v=i(T,x.props.children),v.return=h,h=v;break e}}else if(T.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===ir&&Xg(C)===T.type){n(h,T.sibling),v=i(T,x.props),v.ref=Oo(h,T,x),v.return=h,h=v;break e}n(h,T);break}else t(h,T);T=T.sibling}x.type===_i?(v=Wr(x.props.children,h.mode,S,x.key),v.return=h,h=v):(S=Us(x.type,x.key,x.props,null,h.mode,S),S.ref=Oo(h,v,x),S.return=h,h=S)}return a(h);case Si:e:{for(T=x.key;v!==null;){if(v.key===T)if(v.tag===4&&v.stateNode.containerInfo===x.containerInfo&&v.stateNode.implementation===x.implementation){n(h,v.sibling),v=i(v,x.children||[]),v.return=h,h=v;break e}else{n(h,v);break}else t(h,v);v=v.sibling}v=od(x,h.mode,S),v.return=h,h=v}return a(h);case ir:return T=x._init,w(h,v,T(x._payload),S)}if(No(x))return m(h,v,x,S);if(Co(x))return g(h,v,x,S);ps(h,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,v!==null&&v.tag===6?(n(h,v.sibling),v=i(v,x),v.return=h,h=v):(n(h,v),v=id(x,h.mode,S),v.return=h,h=v),a(h)):n(h,v)}return w}var Gi=vx(!0),yx=vx(!1),Na={},Cn=Pr(Na),xa=Pr(Na),ba=Pr(Na);function Vr(e){if(e===Na)throw Error(V(174));return e}function Ch(e,t){switch(ge(ba,t),ge(xa,e),ge(Cn,Na),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:wf(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=wf(t,e)}xe(Cn),ge(Cn,t)}function Yi(){xe(Cn),xe(xa),xe(ba)}function xx(e){Vr(ba.current);var t=Vr(Cn.current),n=wf(t,e.type);t!==n&&(ge(xa,e),ge(Cn,n))}function Eh(e){xa.current===e&&(xe(Cn),xe(xa))}var Ce=Pr(0);function El(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Zc=[];function kh(){for(var e=0;e<Zc.length;e++)Zc[e]._workInProgressVersionPrimary=null;Zc.length=0}var Fs=Qn.ReactCurrentDispatcher,Jc=Qn.ReactCurrentBatchConfig,Xr=0,Ee=null,Fe=null,We=null,kl=!1,Jo=!1,wa=0,Ck=0;function et(){throw Error(V(321))}function Ph(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!fn(e[n],t[n]))return!1;return!0}function Th(e,t,n,r,i,o){if(Xr=o,Ee=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Fs.current=e===null||e.memoizedState===null?Tk:Ok,e=n(r,i),Jo){o=0;do{if(Jo=!1,wa=0,25<=o)throw Error(V(301));o+=1,We=Fe=null,t.updateQueue=null,Fs.current=jk,e=n(r,i)}while(Jo)}if(Fs.current=Pl,t=Fe!==null&&Fe.next!==null,Xr=0,We=Fe=Ee=null,kl=!1,t)throw Error(V(300));return e}function Oh(){var e=wa!==0;return wa=0,e}function yn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return We===null?Ee.memoizedState=We=e:We=We.next=e,We}function qt(){if(Fe===null){var e=Ee.alternate;e=e!==null?e.memoizedState:null}else e=Fe.next;var t=We===null?Ee.memoizedState:We.next;if(t!==null)We=t,Fe=e;else{if(e===null)throw Error(V(310));Fe=e,e={memoizedState:Fe.memoizedState,baseState:Fe.baseState,baseQueue:Fe.baseQueue,queue:Fe.queue,next:null},We===null?Ee.memoizedState=We=e:We=We.next=e}return We}function Sa(e,t){return typeof t=="function"?t(e):t}function ed(e){var t=qt(),n=t.queue;if(n===null)throw Error(V(311));n.lastRenderedReducer=e;var r=Fe,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var a=i.next;i.next=o.next,o.next=a}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var l=a=null,s=null,u=o;do{var d=u.lane;if((Xr&d)===d)s!==null&&(s=s.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var c={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};s===null?(l=s=c,a=r):s=s.next=c,Ee.lanes|=d,Kr|=d}u=u.next}while(u!==null&&u!==o);s===null?a=r:s.next=l,fn(r,t.memoizedState)||(St=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,Ee.lanes|=o,Kr|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function td(e){var t=qt(),n=t.queue;if(n===null)throw Error(V(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var a=i=i.next;do o=e(o,a.action),a=a.next;while(a!==i);fn(o,t.memoizedState)||(St=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function bx(){}function wx(e,t){var n=Ee,r=qt(),i=t(),o=!fn(r.memoizedState,i);if(o&&(r.memoizedState=i,St=!0),r=r.queue,jh(Cx.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||We!==null&&We.memoizedState.tag&1){if(n.flags|=2048,_a(9,_x.bind(null,n,r,i,t),void 0,null),Ge===null)throw Error(V(349));Xr&30||Sx(n,t,i)}return i}function Sx(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Ee.updateQueue,t===null?(t={lastEffect:null,stores:null},Ee.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function _x(e,t,n,r){t.value=n,t.getSnapshot=r,Ex(t)&&kx(e)}function Cx(e,t,n){return n(function(){Ex(t)&&kx(e)})}function Ex(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!fn(e,n)}catch{return!0}}function kx(e){var t=Gn(e,1);t!==null&&ln(t,e,1,-1)}function Kg(e){var t=yn();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Sa,lastRenderedState:e},t.queue=e,e=e.dispatch=Pk.bind(null,Ee,e),[t.memoizedState,e]}function _a(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Ee.updateQueue,t===null?(t={lastEffect:null,stores:null},Ee.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Px(){return qt().memoizedState}function zs(e,t,n,r){var i=yn();Ee.flags|=e,i.memoizedState=_a(1|t,n,void 0,r===void 0?null:r)}function vu(e,t,n,r){var i=qt();r=r===void 0?null:r;var o=void 0;if(Fe!==null){var a=Fe.memoizedState;if(o=a.destroy,r!==null&&Ph(r,a.deps)){i.memoizedState=_a(t,n,o,r);return}}Ee.flags|=e,i.memoizedState=_a(1|t,n,o,r)}function Qg(e,t){return zs(8390656,8,e,t)}function jh(e,t){return vu(2048,8,e,t)}function Tx(e,t){return vu(4,2,e,t)}function Ox(e,t){return vu(4,4,e,t)}function jx(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Mx(e,t,n){return n=n!=null?n.concat([e]):null,vu(4,4,jx.bind(null,t,e),n)}function Mh(){}function $x(e,t){var n=qt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ph(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Ix(e,t){var n=qt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ph(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Dx(e,t,n){return Xr&21?(fn(n,t)||(n=Ry(),Ee.lanes|=n,Kr|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,St=!0),e.memoizedState=n)}function Ek(e,t){var n=he;he=n!==0&&4>n?n:4,e(!0);var r=Jc.transition;Jc.transition={};try{e(!1),t()}finally{he=n,Jc.transition=r}}function Lx(){return qt().memoizedState}function kk(e,t,n){var r=br(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Ax(e))Rx(t,n);else if(n=px(e,t,n,r),n!==null){var i=pt();ln(n,e,r,i),Fx(n,t,r)}}function Pk(e,t,n){var r=br(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ax(e))Rx(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var a=t.lastRenderedState,l=o(a,n);if(i.hasEagerState=!0,i.eagerState=l,fn(l,a)){var s=t.interleaved;s===null?(i.next=i,Sh(t)):(i.next=s.next,s.next=i),t.interleaved=i;return}}catch{}finally{}n=px(e,t,i,r),n!==null&&(i=pt(),ln(n,e,r,i),Fx(n,t,r))}}function Ax(e){var t=e.alternate;return e===Ee||t!==null&&t===Ee}function Rx(e,t){Jo=kl=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Fx(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,lh(e,n)}}var Pl={readContext:Yt,useCallback:et,useContext:et,useEffect:et,useImperativeHandle:et,useInsertionEffect:et,useLayoutEffect:et,useMemo:et,useReducer:et,useRef:et,useState:et,useDebugValue:et,useDeferredValue:et,useTransition:et,useMutableSource:et,useSyncExternalStore:et,useId:et,unstable_isNewReconciler:!1},Tk={readContext:Yt,useCallback:function(e,t){return yn().memoizedState=[e,t===void 0?null:t],e},useContext:Yt,useEffect:Qg,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,zs(4194308,4,jx.bind(null,t,e),n)},useLayoutEffect:function(e,t){return zs(4194308,4,e,t)},useInsertionEffect:function(e,t){return zs(4,2,e,t)},useMemo:function(e,t){var n=yn();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=yn();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=kk.bind(null,Ee,e),[r.memoizedState,e]},useRef:function(e){var t=yn();return e={current:e},t.memoizedState=e},useState:Kg,useDebugValue:Mh,useDeferredValue:function(e){return yn().memoizedState=e},useTransition:function(){var e=Kg(!1),t=e[0];return e=Ek.bind(null,e[1]),yn().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Ee,i=yn();if(_e){if(n===void 0)throw Error(V(407));n=n()}else{if(n=t(),Ge===null)throw Error(V(349));Xr&30||Sx(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,Qg(Cx.bind(null,r,o,e),[e]),r.flags|=2048,_a(9,_x.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=yn(),t=Ge.identifierPrefix;if(_e){var n=Nn,r=zn;n=(r&~(1<<32-sn(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=wa++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Ck++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Ok={readContext:Yt,useCallback:$x,useContext:Yt,useEffect:jh,useImperativeHandle:Mx,useInsertionEffect:Tx,useLayoutEffect:Ox,useMemo:Ix,useReducer:ed,useRef:Px,useState:function(){return ed(Sa)},useDebugValue:Mh,useDeferredValue:function(e){var t=qt();return Dx(t,Fe.memoizedState,e)},useTransition:function(){var e=ed(Sa)[0],t=qt().memoizedState;return[e,t]},useMutableSource:bx,useSyncExternalStore:wx,useId:Lx,unstable_isNewReconciler:!1},jk={readContext:Yt,useCallback:$x,useContext:Yt,useEffect:jh,useImperativeHandle:Mx,useInsertionEffect:Tx,useLayoutEffect:Ox,useMemo:Ix,useReducer:td,useRef:Px,useState:function(){return td(Sa)},useDebugValue:Mh,useDeferredValue:function(e){var t=qt();return Fe===null?t.memoizedState=e:Dx(t,Fe.memoizedState,e)},useTransition:function(){var e=td(Sa)[0],t=qt().memoizedState;return[e,t]},useMutableSource:bx,useSyncExternalStore:wx,useId:Lx,unstable_isNewReconciler:!1};function qi(e,t){try{var n="",r=t;do n+=iE(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function nd(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Hf(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Mk=typeof WeakMap=="function"?WeakMap:Map;function zx(e,t,n){n=Bn(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Ol||(Ol=!0,ep=r),Hf(e,t)},n}function Nx(e,t,n){n=Bn(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Hf(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Hf(e,t),typeof r!="function"&&(xr===null?xr=new Set([this]):xr.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function Zg(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Mk;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Wk.bind(null,e,t,n),t.then(e,e))}function Jg(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function e0(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Bn(-1,1),t.tag=2,yr(n,t,1))),n.lanes|=1),e)}var $k=Qn.ReactCurrentOwner,St=!1;function dt(e,t,n,r){t.child=e===null?yx(t,null,n,r):Gi(t,e.child,n,r)}function t0(e,t,n,r,i){n=n.render;var o=t.ref;return Fi(t,i),r=Th(e,t,n,r,o,i),n=Oh(),e!==null&&!St?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Yn(e,t,i)):(_e&&n&&gh(t),t.flags|=1,dt(e,t,r,i),t.child)}function n0(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!zh(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,Bx(e,t,o,r,i)):(e=Us(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var a=o.memoizedProps;if(n=n.compare,n=n!==null?n:ma,n(a,r)&&e.ref===t.ref)return Yn(e,t,i)}return t.flags|=1,e=wr(o,r),e.ref=t.ref,e.return=t,t.child=e}function Bx(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(ma(o,r)&&e.ref===t.ref)if(St=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(St=!0);else return t.lanes=e.lanes,Yn(e,t,i)}return Wf(e,t,n,r,i)}function Vx(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ge(Ii,jt),jt|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ge(Ii,jt),jt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,ge(Ii,jt),jt|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,ge(Ii,jt),jt|=r;return dt(e,t,i,n),t.child}function Ux(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Wf(e,t,n,r,i){var o=Ct(n)?Yr:lt.current;return o=Hi(t,o),Fi(t,i),n=Th(e,t,n,r,o,i),r=Oh(),e!==null&&!St?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Yn(e,t,i)):(_e&&r&&gh(t),t.flags|=1,dt(e,t,n,i),t.child)}function r0(e,t,n,r,i){if(Ct(n)){var o=!0;xl(t)}else o=!1;if(Fi(t,i),t.stateNode===null)Ns(e,t),gx(t,n,r),Uf(t,n,r,i),r=!0;else if(e===null){var a=t.stateNode,l=t.memoizedProps;a.props=l;var s=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=Yt(u):(u=Ct(n)?Yr:lt.current,u=Hi(t,u));var d=n.getDerivedStateFromProps,c=typeof d=="function"||typeof a.getSnapshotBeforeUpdate=="function";c||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==r||s!==u)&&qg(t,a,r,u),or=!1;var y=t.memoizedState;a.state=y,Cl(t,r,a,i),s=t.memoizedState,l!==r||y!==s||_t.current||or?(typeof d=="function"&&(Vf(t,n,d,r),s=t.memoizedState),(l=or||Yg(t,n,l,r,y,s,u))?(c||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),a.props=r,a.state=s,a.context=u,r=l):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,hx(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:tn(t.type,l),a.props=u,c=t.pendingProps,y=a.context,s=n.contextType,typeof s=="object"&&s!==null?s=Yt(s):(s=Ct(n)?Yr:lt.current,s=Hi(t,s));var p=n.getDerivedStateFromProps;(d=typeof p=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==c||y!==s)&&qg(t,a,r,s),or=!1,y=t.memoizedState,a.state=y,Cl(t,r,a,i);var m=t.memoizedState;l!==c||y!==m||_t.current||or?(typeof p=="function"&&(Vf(t,n,p,r),m=t.memoizedState),(u=or||Yg(t,n,u,r,y,m,s)||!1)?(d||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,m,s),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,m,s)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&y===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&y===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=m),a.props=r,a.state=m,a.context=s,r=u):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&y===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&y===e.memoizedState||(t.flags|=1024),r=!1)}return Gf(e,t,n,r,o,i)}function Gf(e,t,n,r,i,o){Ux(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return i&&Vg(t,n,!1),Yn(e,t,o);r=t.stateNode,$k.current=t;var l=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=Gi(t,e.child,null,o),t.child=Gi(t,null,l,o)):dt(e,t,l,o),t.memoizedState=r.state,i&&Vg(t,n,!0),t.child}function Hx(e){var t=e.stateNode;t.pendingContext?Bg(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Bg(e,t.context,!1),Ch(e,t.containerInfo)}function i0(e,t,n,r,i){return Wi(),yh(i),t.flags|=256,dt(e,t,n,r),t.child}var Yf={dehydrated:null,treeContext:null,retryLane:0};function qf(e){return{baseLanes:e,cachePool:null,transitions:null}}function Wx(e,t,n){var r=t.pendingProps,i=Ce.current,o=!1,a=(t.flags&128)!==0,l;if((l=a)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),ge(Ce,i&1),e===null)return Nf(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,o?(r=t.mode,o=t.child,a={mode:"hidden",children:a},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=a):o=bu(a,r,0,null),e=Wr(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=qf(n),t.memoizedState=Yf,e):$h(t,a));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return Ik(e,t,a,r,l,i,n);if(o){o=r.fallback,a=t.mode,i=e.child,l=i.sibling;var s={mode:"hidden",children:r.children};return!(a&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=wr(i,s),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?o=wr(l,o):(o=Wr(o,a,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,a=e.child.memoizedState,a=a===null?qf(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},o.memoizedState=a,o.childLanes=e.childLanes&~n,t.memoizedState=Yf,r}return o=e.child,e=o.sibling,r=wr(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function $h(e,t){return t=bu({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function hs(e,t,n,r){return r!==null&&yh(r),Gi(t,e.child,null,n),e=$h(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Ik(e,t,n,r,i,o,a){if(n)return t.flags&256?(t.flags&=-257,r=nd(Error(V(422))),hs(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=bu({mode:"visible",children:r.children},i,0,null),o=Wr(o,i,a,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&Gi(t,e.child,null,a),t.child.memoizedState=qf(a),t.memoizedState=Yf,o);if(!(t.mode&1))return hs(e,t,a,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,o=Error(V(419)),r=nd(o,r,void 0),hs(e,t,a,r)}if(l=(a&e.childLanes)!==0,St||l){if(r=Ge,r!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|a)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Gn(e,i),ln(r,e,i,-1))}return Fh(),r=nd(Error(V(421))),hs(e,t,a,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Gk.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,$t=vr(i.nextSibling),Dt=t,_e=!0,on=null,e!==null&&(Ut[Ht++]=zn,Ut[Ht++]=Nn,Ut[Ht++]=qr,zn=e.id,Nn=e.overflow,qr=t),t=$h(t,r.children),t.flags|=4096,t)}function o0(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Bf(e.return,t,n)}function rd(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Gx(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(dt(e,t,r.children,n),r=Ce.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&o0(e,n,t);else if(e.tag===19)o0(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ge(Ce,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&El(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),rd(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&El(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}rd(t,!0,n,null,o);break;case"together":rd(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ns(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Yn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Kr|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(V(153));if(t.child!==null){for(e=t.child,n=wr(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=wr(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Dk(e,t,n){switch(t.tag){case 3:Hx(t),Wi();break;case 5:xx(t);break;case 1:Ct(t.type)&&xl(t);break;case 4:Ch(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;ge(Sl,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(ge(Ce,Ce.current&1),t.flags|=128,null):n&t.child.childLanes?Wx(e,t,n):(ge(Ce,Ce.current&1),e=Yn(e,t,n),e!==null?e.sibling:null);ge(Ce,Ce.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Gx(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ge(Ce,Ce.current),r)break;return null;case 22:case 23:return t.lanes=0,Vx(e,t,n)}return Yn(e,t,n)}var Yx,Xf,qx,Xx;Yx=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Xf=function(){};qx=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Vr(Cn.current);var o=null;switch(n){case"input":i=vf(e,i),r=vf(e,r),o=[];break;case"select":i=ke({},i,{value:void 0}),r=ke({},r,{value:void 0}),o=[];break;case"textarea":i=bf(e,i),r=bf(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=vl)}Sf(n,r);var a;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(a in l)l.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(la.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var s=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&s!==l&&(s!=null||l!=null))if(u==="style")if(l){for(a in l)!l.hasOwnProperty(a)||s&&s.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in s)s.hasOwnProperty(a)&&l[a]!==s[a]&&(n||(n={}),n[a]=s[a])}else n||(o||(o=[]),o.push(u,n)),n=s;else u==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,l=l?l.__html:void 0,s!=null&&l!==s&&(o=o||[]).push(u,s)):u==="children"?typeof s!="string"&&typeof s!="number"||(o=o||[]).push(u,""+s):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(la.hasOwnProperty(u)?(s!=null&&u==="onScroll"&&ve("scroll",e),o||l===s||(o=[])):(o=o||[]).push(u,s))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};Xx=function(e,t,n,r){n!==r&&(t.flags|=4)};function jo(e,t){if(!_e)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function tt(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Lk(e,t,n){var r=t.pendingProps;switch(vh(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return tt(t),null;case 1:return Ct(t.type)&&yl(),tt(t),null;case 3:return r=t.stateNode,Yi(),xe(_t),xe(lt),kh(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(fs(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,on!==null&&(rp(on),on=null))),Xf(e,t),tt(t),null;case 5:Eh(t);var i=Vr(ba.current);if(n=t.type,e!==null&&t.stateNode!=null)qx(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(V(166));return tt(t),null}if(e=Vr(Cn.current),fs(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[wn]=t,r[ya]=o,e=(t.mode&1)!==0,n){case"dialog":ve("cancel",r),ve("close",r);break;case"iframe":case"object":case"embed":ve("load",r);break;case"video":case"audio":for(i=0;i<Vo.length;i++)ve(Vo[i],r);break;case"source":ve("error",r);break;case"img":case"image":case"link":ve("error",r),ve("load",r);break;case"details":ve("toggle",r);break;case"input":hg(r,o),ve("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},ve("invalid",r);break;case"textarea":gg(r,o),ve("invalid",r)}Sf(n,o),i=null;for(var a in o)if(o.hasOwnProperty(a)){var l=o[a];a==="children"?typeof l=="string"?r.textContent!==l&&(o.suppressHydrationWarning!==!0&&ds(r.textContent,l,e),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(o.suppressHydrationWarning!==!0&&ds(r.textContent,l,e),i=["children",""+l]):la.hasOwnProperty(a)&&l!=null&&a==="onScroll"&&ve("scroll",r)}switch(n){case"input":rs(r),mg(r,o,!0);break;case"textarea":rs(r),vg(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=vl)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Sy(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[wn]=t,e[ya]=r,Yx(e,t,!1,!1),t.stateNode=e;e:{switch(a=_f(n,r),n){case"dialog":ve("cancel",e),ve("close",e),i=r;break;case"iframe":case"object":case"embed":ve("load",e),i=r;break;case"video":case"audio":for(i=0;i<Vo.length;i++)ve(Vo[i],e);i=r;break;case"source":ve("error",e),i=r;break;case"img":case"image":case"link":ve("error",e),ve("load",e),i=r;break;case"details":ve("toggle",e),i=r;break;case"input":hg(e,r),i=vf(e,r),ve("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=ke({},r,{value:void 0}),ve("invalid",e);break;case"textarea":gg(e,r),i=bf(e,r),ve("invalid",e);break;default:i=r}Sf(n,i),l=i;for(o in l)if(l.hasOwnProperty(o)){var s=l[o];o==="style"?Ey(e,s):o==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&_y(e,s)):o==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&ua(e,s):typeof s=="number"&&ua(e,""+s):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(la.hasOwnProperty(o)?s!=null&&o==="onScroll"&&ve("scroll",e):s!=null&&nh(e,o,s,a))}switch(n){case"input":rs(e),mg(e,r,!1);break;case"textarea":rs(e),vg(e);break;case"option":r.value!=null&&e.setAttribute("value",""+_r(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Di(e,!!r.multiple,o,!1):r.defaultValue!=null&&Di(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=vl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return tt(t),null;case 6:if(e&&t.stateNode!=null)Xx(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(V(166));if(n=Vr(ba.current),Vr(Cn.current),fs(t)){if(r=t.stateNode,n=t.memoizedProps,r[wn]=t,(o=r.nodeValue!==n)&&(e=Dt,e!==null))switch(e.tag){case 3:ds(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ds(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[wn]=t,t.stateNode=r}return tt(t),null;case 13:if(xe(Ce),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(_e&&$t!==null&&t.mode&1&&!(t.flags&128))fx(),Wi(),t.flags|=98560,o=!1;else if(o=fs(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(V(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(V(317));o[wn]=t}else Wi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;tt(t),o=!1}else on!==null&&(rp(on),on=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Ce.current&1?Ne===0&&(Ne=3):Fh())),t.updateQueue!==null&&(t.flags|=4),tt(t),null);case 4:return Yi(),Xf(e,t),e===null&&ga(t.stateNode.containerInfo),tt(t),null;case 10:return wh(t.type._context),tt(t),null;case 17:return Ct(t.type)&&yl(),tt(t),null;case 19:if(xe(Ce),o=t.memoizedState,o===null)return tt(t),null;if(r=(t.flags&128)!==0,a=o.rendering,a===null)if(r)jo(o,!1);else{if(Ne!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=El(e),a!==null){for(t.flags|=128,jo(o,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,a=o.alternate,a===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=a.childLanes,o.lanes=a.lanes,o.child=a.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=a.memoizedProps,o.memoizedState=a.memoizedState,o.updateQueue=a.updateQueue,o.type=a.type,e=a.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ge(Ce,Ce.current&1|2),t.child}e=e.sibling}o.tail!==null&&je()>Xi&&(t.flags|=128,r=!0,jo(o,!1),t.lanes=4194304)}else{if(!r)if(e=El(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),jo(o,!0),o.tail===null&&o.tailMode==="hidden"&&!a.alternate&&!_e)return tt(t),null}else 2*je()-o.renderingStartTime>Xi&&n!==1073741824&&(t.flags|=128,r=!0,jo(o,!1),t.lanes=4194304);o.isBackwards?(a.sibling=t.child,t.child=a):(n=o.last,n!==null?n.sibling=a:t.child=a,o.last=a)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=je(),t.sibling=null,n=Ce.current,ge(Ce,r?n&1|2:n&1),t):(tt(t),null);case 22:case 23:return Rh(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?jt&1073741824&&(tt(t),t.subtreeFlags&6&&(t.flags|=8192)):tt(t),null;case 24:return null;case 25:return null}throw Error(V(156,t.tag))}function Ak(e,t){switch(vh(t),t.tag){case 1:return Ct(t.type)&&yl(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Yi(),xe(_t),xe(lt),kh(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Eh(t),null;case 13:if(xe(Ce),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(V(340));Wi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return xe(Ce),null;case 4:return Yi(),null;case 10:return wh(t.type._context),null;case 22:case 23:return Rh(),null;case 24:return null;default:return null}}var ms=!1,at=!1,Rk=typeof WeakSet=="function"?WeakSet:Set,W=null;function $i(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Pe(e,t,r)}else n.current=null}function Kf(e,t,n){try{n()}catch(r){Pe(e,t,r)}}var a0=!1;function Fk(e,t){if(If=hl,e=Jy(),mh(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var a=0,l=-1,s=-1,u=0,d=0,c=e,y=null;t:for(;;){for(var p;c!==n||i!==0&&c.nodeType!==3||(l=a+i),c!==o||r!==0&&c.nodeType!==3||(s=a+r),c.nodeType===3&&(a+=c.nodeValue.length),(p=c.firstChild)!==null;)y=c,c=p;for(;;){if(c===e)break t;if(y===n&&++u===i&&(l=a),y===o&&++d===r&&(s=a),(p=c.nextSibling)!==null)break;c=y,y=c.parentNode}c=p}n=l===-1||s===-1?null:{start:l,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(Df={focusedElem:e,selectionRange:n},hl=!1,W=t;W!==null;)if(t=W,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,W=e;else for(;W!==null;){t=W;try{var m=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(m!==null){var g=m.memoizedProps,w=m.memoizedState,h=t.stateNode,v=h.getSnapshotBeforeUpdate(t.elementType===t.type?g:tn(t.type,g),w);h.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var x=t.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(V(163))}}catch(S){Pe(t,t.return,S)}if(e=t.sibling,e!==null){e.return=t.return,W=e;break}W=t.return}return m=a0,a0=!1,m}function ea(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Kf(t,n,o)}i=i.next}while(i!==r)}}function yu(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Qf(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Kx(e){var t=e.alternate;t!==null&&(e.alternate=null,Kx(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[wn],delete t[ya],delete t[Rf],delete t[bk],delete t[wk])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Qx(e){return e.tag===5||e.tag===3||e.tag===4}function s0(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Qx(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Zf(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=vl));else if(r!==4&&(e=e.child,e!==null))for(Zf(e,t,n),e=e.sibling;e!==null;)Zf(e,t,n),e=e.sibling}function Jf(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Jf(e,t,n),e=e.sibling;e!==null;)Jf(e,t,n),e=e.sibling}var Ke=null,nn=!1;function nr(e,t,n){for(n=n.child;n!==null;)Zx(e,t,n),n=n.sibling}function Zx(e,t,n){if(_n&&typeof _n.onCommitFiberUnmount=="function")try{_n.onCommitFiberUnmount(cu,n)}catch{}switch(n.tag){case 5:at||$i(n,t);case 6:var r=Ke,i=nn;Ke=null,nr(e,t,n),Ke=r,nn=i,Ke!==null&&(nn?(e=Ke,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Ke.removeChild(n.stateNode));break;case 18:Ke!==null&&(nn?(e=Ke,n=n.stateNode,e.nodeType===8?Kc(e.parentNode,n):e.nodeType===1&&Kc(e,n),pa(e)):Kc(Ke,n.stateNode));break;case 4:r=Ke,i=nn,Ke=n.stateNode.containerInfo,nn=!0,nr(e,t,n),Ke=r,nn=i;break;case 0:case 11:case 14:case 15:if(!at&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,a=o.destroy;o=o.tag,a!==void 0&&(o&2||o&4)&&Kf(n,t,a),i=i.next}while(i!==r)}nr(e,t,n);break;case 1:if(!at&&($i(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Pe(n,t,l)}nr(e,t,n);break;case 21:nr(e,t,n);break;case 22:n.mode&1?(at=(r=at)||n.memoizedState!==null,nr(e,t,n),at=r):nr(e,t,n);break;default:nr(e,t,n)}}function l0(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Rk),t.forEach(function(r){var i=Yk.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Qt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,a=t,l=a;e:for(;l!==null;){switch(l.tag){case 5:Ke=l.stateNode,nn=!1;break e;case 3:Ke=l.stateNode.containerInfo,nn=!0;break e;case 4:Ke=l.stateNode.containerInfo,nn=!0;break e}l=l.return}if(Ke===null)throw Error(V(160));Zx(o,a,i),Ke=null,nn=!1;var s=i.alternate;s!==null&&(s.return=null),i.return=null}catch(u){Pe(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Jx(t,e),t=t.sibling}function Jx(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Qt(t,e),gn(e),r&4){try{ea(3,e,e.return),yu(3,e)}catch(g){Pe(e,e.return,g)}try{ea(5,e,e.return)}catch(g){Pe(e,e.return,g)}}break;case 1:Qt(t,e),gn(e),r&512&&n!==null&&$i(n,n.return);break;case 5:if(Qt(t,e),gn(e),r&512&&n!==null&&$i(n,n.return),e.flags&32){var i=e.stateNode;try{ua(i,"")}catch(g){Pe(e,e.return,g)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,a=n!==null?n.memoizedProps:o,l=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{l==="input"&&o.type==="radio"&&o.name!=null&&by(i,o),_f(l,a);var u=_f(l,o);for(a=0;a<s.length;a+=2){var d=s[a],c=s[a+1];d==="style"?Ey(i,c):d==="dangerouslySetInnerHTML"?_y(i,c):d==="children"?ua(i,c):nh(i,d,c,u)}switch(l){case"input":yf(i,o);break;case"textarea":wy(i,o);break;case"select":var y=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var p=o.value;p!=null?Di(i,!!o.multiple,p,!1):y!==!!o.multiple&&(o.defaultValue!=null?Di(i,!!o.multiple,o.defaultValue,!0):Di(i,!!o.multiple,o.multiple?[]:"",!1))}i[ya]=o}catch(g){Pe(e,e.return,g)}}break;case 6:if(Qt(t,e),gn(e),r&4){if(e.stateNode===null)throw Error(V(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(g){Pe(e,e.return,g)}}break;case 3:if(Qt(t,e),gn(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{pa(t.containerInfo)}catch(g){Pe(e,e.return,g)}break;case 4:Qt(t,e),gn(e);break;case 13:Qt(t,e),gn(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Lh=je())),r&4&&l0(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(at=(u=at)||d,Qt(t,e),at=u):Qt(t,e),gn(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(W=e,d=e.child;d!==null;){for(c=W=d;W!==null;){switch(y=W,p=y.child,y.tag){case 0:case 11:case 14:case 15:ea(4,y,y.return);break;case 1:$i(y,y.return);var m=y.stateNode;if(typeof m.componentWillUnmount=="function"){r=y,n=y.return;try{t=r,m.props=t.memoizedProps,m.state=t.memoizedState,m.componentWillUnmount()}catch(g){Pe(r,n,g)}}break;case 5:$i(y,y.return);break;case 22:if(y.memoizedState!==null){c0(c);continue}}p!==null?(p.return=y,W=p):c0(c)}d=d.sibling}e:for(d=null,c=e;;){if(c.tag===5){if(d===null){d=c;try{i=c.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(l=c.stateNode,s=c.memoizedProps.style,a=s!=null&&s.hasOwnProperty("display")?s.display:null,l.style.display=Cy("display",a))}catch(g){Pe(e,e.return,g)}}}else if(c.tag===6){if(d===null)try{c.stateNode.nodeValue=u?"":c.memoizedProps}catch(g){Pe(e,e.return,g)}}else if((c.tag!==22&&c.tag!==23||c.memoizedState===null||c===e)&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===e)break e;for(;c.sibling===null;){if(c.return===null||c.return===e)break e;d===c&&(d=null),c=c.return}d===c&&(d=null),c.sibling.return=c.return,c=c.sibling}}break;case 19:Qt(t,e),gn(e),r&4&&l0(e);break;case 21:break;default:Qt(t,e),gn(e)}}function gn(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Qx(n)){var r=n;break e}n=n.return}throw Error(V(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(ua(i,""),r.flags&=-33);var o=s0(e);Jf(e,o,i);break;case 3:case 4:var a=r.stateNode.containerInfo,l=s0(e);Zf(e,l,a);break;default:throw Error(V(161))}}catch(s){Pe(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function zk(e,t,n){W=e,eb(e)}function eb(e,t,n){for(var r=(e.mode&1)!==0;W!==null;){var i=W,o=i.child;if(i.tag===22&&r){var a=i.memoizedState!==null||ms;if(!a){var l=i.alternate,s=l!==null&&l.memoizedState!==null||at;l=ms;var u=at;if(ms=a,(at=s)&&!u)for(W=i;W!==null;)a=W,s=a.child,a.tag===22&&a.memoizedState!==null?d0(i):s!==null?(s.return=a,W=s):d0(i);for(;o!==null;)W=o,eb(o),o=o.sibling;W=i,ms=l,at=u}u0(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,W=o):u0(e)}}function u0(e){for(;W!==null;){var t=W;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:at||yu(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!at)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:tn(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Gg(t,o,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Gg(t,a,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var c=d.dehydrated;c!==null&&pa(c)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(V(163))}at||t.flags&512&&Qf(t)}catch(y){Pe(t,t.return,y)}}if(t===e){W=null;break}if(n=t.sibling,n!==null){n.return=t.return,W=n;break}W=t.return}}function c0(e){for(;W!==null;){var t=W;if(t===e){W=null;break}var n=t.sibling;if(n!==null){n.return=t.return,W=n;break}W=t.return}}function d0(e){for(;W!==null;){var t=W;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{yu(4,t)}catch(s){Pe(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(s){Pe(t,i,s)}}var o=t.return;try{Qf(t)}catch(s){Pe(t,o,s)}break;case 5:var a=t.return;try{Qf(t)}catch(s){Pe(t,a,s)}}}catch(s){Pe(t,t.return,s)}if(t===e){W=null;break}var l=t.sibling;if(l!==null){l.return=t.return,W=l;break}W=t.return}}var Nk=Math.ceil,Tl=Qn.ReactCurrentDispatcher,Ih=Qn.ReactCurrentOwner,Gt=Qn.ReactCurrentBatchConfig,se=0,Ge=null,De=null,Ze=0,jt=0,Ii=Pr(0),Ne=0,Ca=null,Kr=0,xu=0,Dh=0,ta=null,wt=null,Lh=0,Xi=1/0,In=null,Ol=!1,ep=null,xr=null,gs=!1,cr=null,jl=0,na=0,tp=null,Bs=-1,Vs=0;function pt(){return se&6?je():Bs!==-1?Bs:Bs=je()}function br(e){return e.mode&1?se&2&&Ze!==0?Ze&-Ze:_k.transition!==null?(Vs===0&&(Vs=Ry()),Vs):(e=he,e!==0||(e=window.event,e=e===void 0?16:Hy(e.type)),e):1}function ln(e,t,n,r){if(50<na)throw na=0,tp=null,Error(V(185));Ra(e,n,r),(!(se&2)||e!==Ge)&&(e===Ge&&(!(se&2)&&(xu|=n),Ne===4&&sr(e,Ze)),Et(e,r),n===1&&se===0&&!(t.mode&1)&&(Xi=je()+500,mu&&Tr()))}function Et(e,t){var n=e.callbackNode;_E(e,t);var r=pl(e,e===Ge?Ze:0);if(r===0)n!==null&&bg(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&bg(n),t===1)e.tag===0?Sk(f0.bind(null,e)):ux(f0.bind(null,e)),yk(function(){!(se&6)&&Tr()}),n=null;else{switch(Fy(r)){case 1:n=sh;break;case 4:n=Ly;break;case 16:n=fl;break;case 536870912:n=Ay;break;default:n=fl}n=lb(n,tb.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function tb(e,t){if(Bs=-1,Vs=0,se&6)throw Error(V(327));var n=e.callbackNode;if(zi()&&e.callbackNode!==n)return null;var r=pl(e,e===Ge?Ze:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Ml(e,r);else{t=r;var i=se;se|=2;var o=rb();(Ge!==e||Ze!==t)&&(In=null,Xi=je()+500,Hr(e,t));do try{Uk();break}catch(l){nb(e,l)}while(1);bh(),Tl.current=o,se=i,De!==null?t=0:(Ge=null,Ze=0,t=Ne)}if(t!==0){if(t===2&&(i=Tf(e),i!==0&&(r=i,t=np(e,i))),t===1)throw n=Ca,Hr(e,0),sr(e,r),Et(e,je()),n;if(t===6)sr(e,r);else{if(i=e.current.alternate,!(r&30)&&!Bk(i)&&(t=Ml(e,r),t===2&&(o=Tf(e),o!==0&&(r=o,t=np(e,o))),t===1))throw n=Ca,Hr(e,0),sr(e,r),Et(e,je()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(V(345));case 2:Lr(e,wt,In);break;case 3:if(sr(e,r),(r&130023424)===r&&(t=Lh+500-je(),10<t)){if(pl(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){pt(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Af(Lr.bind(null,e,wt,In),t);break}Lr(e,wt,In);break;case 4:if(sr(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var a=31-sn(r);o=1<<a,a=t[a],a>i&&(i=a),r&=~o}if(r=i,r=je()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Nk(r/1960))-r,10<r){e.timeoutHandle=Af(Lr.bind(null,e,wt,In),r);break}Lr(e,wt,In);break;case 5:Lr(e,wt,In);break;default:throw Error(V(329))}}}return Et(e,je()),e.callbackNode===n?tb.bind(null,e):null}function np(e,t){var n=ta;return e.current.memoizedState.isDehydrated&&(Hr(e,t).flags|=256),e=Ml(e,t),e!==2&&(t=wt,wt=n,t!==null&&rp(t)),e}function rp(e){wt===null?wt=e:wt.push.apply(wt,e)}function Bk(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!fn(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function sr(e,t){for(t&=~Dh,t&=~xu,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-sn(t),r=1<<n;e[n]=-1,t&=~r}}function f0(e){if(se&6)throw Error(V(327));zi();var t=pl(e,0);if(!(t&1))return Et(e,je()),null;var n=Ml(e,t);if(e.tag!==0&&n===2){var r=Tf(e);r!==0&&(t=r,n=np(e,r))}if(n===1)throw n=Ca,Hr(e,0),sr(e,t),Et(e,je()),n;if(n===6)throw Error(V(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Lr(e,wt,In),Et(e,je()),null}function Ah(e,t){var n=se;se|=1;try{return e(t)}finally{se=n,se===0&&(Xi=je()+500,mu&&Tr())}}function Qr(e){cr!==null&&cr.tag===0&&!(se&6)&&zi();var t=se;se|=1;var n=Gt.transition,r=he;try{if(Gt.transition=null,he=1,e)return e()}finally{he=r,Gt.transition=n,se=t,!(se&6)&&Tr()}}function Rh(){jt=Ii.current,xe(Ii)}function Hr(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,vk(n)),De!==null)for(n=De.return;n!==null;){var r=n;switch(vh(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&yl();break;case 3:Yi(),xe(_t),xe(lt),kh();break;case 5:Eh(r);break;case 4:Yi();break;case 13:xe(Ce);break;case 19:xe(Ce);break;case 10:wh(r.type._context);break;case 22:case 23:Rh()}n=n.return}if(Ge=e,De=e=wr(e.current,null),Ze=jt=t,Ne=0,Ca=null,Dh=xu=Kr=0,wt=ta=null,Br!==null){for(t=0;t<Br.length;t++)if(n=Br[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var a=o.next;o.next=i,r.next=a}n.pending=r}Br=null}return e}function nb(e,t){do{var n=De;try{if(bh(),Fs.current=Pl,kl){for(var r=Ee.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}kl=!1}if(Xr=0,We=Fe=Ee=null,Jo=!1,wa=0,Ih.current=null,n===null||n.return===null){Ne=1,Ca=t,De=null;break}e:{var o=e,a=n.return,l=n,s=t;if(t=Ze,l.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var u=s,d=l,c=d.tag;if(!(d.mode&1)&&(c===0||c===11||c===15)){var y=d.alternate;y?(d.updateQueue=y.updateQueue,d.memoizedState=y.memoizedState,d.lanes=y.lanes):(d.updateQueue=null,d.memoizedState=null)}var p=Jg(a);if(p!==null){p.flags&=-257,e0(p,a,l,o,t),p.mode&1&&Zg(o,u,t),t=p,s=u;var m=t.updateQueue;if(m===null){var g=new Set;g.add(s),t.updateQueue=g}else m.add(s);break e}else{if(!(t&1)){Zg(o,u,t),Fh();break e}s=Error(V(426))}}else if(_e&&l.mode&1){var w=Jg(a);if(w!==null){!(w.flags&65536)&&(w.flags|=256),e0(w,a,l,o,t),yh(qi(s,l));break e}}o=s=qi(s,l),Ne!==4&&(Ne=2),ta===null?ta=[o]:ta.push(o),o=a;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var h=zx(o,s,t);Wg(o,h);break e;case 1:l=s;var v=o.type,x=o.stateNode;if(!(o.flags&128)&&(typeof v.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(xr===null||!xr.has(x)))){o.flags|=65536,t&=-t,o.lanes|=t;var S=Nx(o,l,t);Wg(o,S);break e}}o=o.return}while(o!==null)}ob(n)}catch(C){t=C,De===n&&n!==null&&(De=n=n.return);continue}break}while(1)}function rb(){var e=Tl.current;return Tl.current=Pl,e===null?Pl:e}function Fh(){(Ne===0||Ne===3||Ne===2)&&(Ne=4),Ge===null||!(Kr&268435455)&&!(xu&268435455)||sr(Ge,Ze)}function Ml(e,t){var n=se;se|=2;var r=rb();(Ge!==e||Ze!==t)&&(In=null,Hr(e,t));do try{Vk();break}catch(i){nb(e,i)}while(1);if(bh(),se=n,Tl.current=r,De!==null)throw Error(V(261));return Ge=null,Ze=0,Ne}function Vk(){for(;De!==null;)ib(De)}function Uk(){for(;De!==null&&!hE();)ib(De)}function ib(e){var t=sb(e.alternate,e,jt);e.memoizedProps=e.pendingProps,t===null?ob(e):De=t,Ih.current=null}function ob(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Ak(n,t),n!==null){n.flags&=32767,De=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ne=6,De=null;return}}else if(n=Lk(n,t,jt),n!==null){De=n;return}if(t=t.sibling,t!==null){De=t;return}De=t=e}while(t!==null);Ne===0&&(Ne=5)}function Lr(e,t,n){var r=he,i=Gt.transition;try{Gt.transition=null,he=1,Hk(e,t,n,r)}finally{Gt.transition=i,he=r}return null}function Hk(e,t,n,r){do zi();while(cr!==null);if(se&6)throw Error(V(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(V(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(CE(e,o),e===Ge&&(De=Ge=null,Ze=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||gs||(gs=!0,lb(fl,function(){return zi(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Gt.transition,Gt.transition=null;var a=he;he=1;var l=se;se|=4,Ih.current=null,Fk(e,n),Jx(n,e),ck(Df),hl=!!If,Df=If=null,e.current=n,zk(n),mE(),se=l,he=a,Gt.transition=o}else e.current=n;if(gs&&(gs=!1,cr=e,jl=i),o=e.pendingLanes,o===0&&(xr=null),yE(n.stateNode),Et(e,je()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Ol)throw Ol=!1,e=ep,ep=null,e;return jl&1&&e.tag!==0&&zi(),o=e.pendingLanes,o&1?e===tp?na++:(na=0,tp=e):na=0,Tr(),null}function zi(){if(cr!==null){var e=Fy(jl),t=Gt.transition,n=he;try{if(Gt.transition=null,he=16>e?16:e,cr===null)var r=!1;else{if(e=cr,cr=null,jl=0,se&6)throw Error(V(331));var i=se;for(se|=4,W=e.current;W!==null;){var o=W,a=o.child;if(W.flags&16){var l=o.deletions;if(l!==null){for(var s=0;s<l.length;s++){var u=l[s];for(W=u;W!==null;){var d=W;switch(d.tag){case 0:case 11:case 15:ea(8,d,o)}var c=d.child;if(c!==null)c.return=d,W=c;else for(;W!==null;){d=W;var y=d.sibling,p=d.return;if(Kx(d),d===u){W=null;break}if(y!==null){y.return=p,W=y;break}W=p}}}var m=o.alternate;if(m!==null){var g=m.child;if(g!==null){m.child=null;do{var w=g.sibling;g.sibling=null,g=w}while(g!==null)}}W=o}}if(o.subtreeFlags&2064&&a!==null)a.return=o,W=a;else e:for(;W!==null;){if(o=W,o.flags&2048)switch(o.tag){case 0:case 11:case 15:ea(9,o,o.return)}var h=o.sibling;if(h!==null){h.return=o.return,W=h;break e}W=o.return}}var v=e.current;for(W=v;W!==null;){a=W;var x=a.child;if(a.subtreeFlags&2064&&x!==null)x.return=a,W=x;else e:for(a=v;W!==null;){if(l=W,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:yu(9,l)}}catch(C){Pe(l,l.return,C)}if(l===a){W=null;break e}var S=l.sibling;if(S!==null){S.return=l.return,W=S;break e}W=l.return}}if(se=i,Tr(),_n&&typeof _n.onPostCommitFiberRoot=="function")try{_n.onPostCommitFiberRoot(cu,e)}catch{}r=!0}return r}finally{he=n,Gt.transition=t}}return!1}function p0(e,t,n){t=qi(n,t),t=zx(e,t,1),e=yr(e,t,1),t=pt(),e!==null&&(Ra(e,1,t),Et(e,t))}function Pe(e,t,n){if(e.tag===3)p0(e,e,n);else for(;t!==null;){if(t.tag===3){p0(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(xr===null||!xr.has(r))){e=qi(n,e),e=Nx(t,e,1),t=yr(t,e,1),e=pt(),t!==null&&(Ra(t,1,e),Et(t,e));break}}t=t.return}}function Wk(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=pt(),e.pingedLanes|=e.suspendedLanes&n,Ge===e&&(Ze&n)===n&&(Ne===4||Ne===3&&(Ze&130023424)===Ze&&500>je()-Lh?Hr(e,0):Dh|=n),Et(e,t)}function ab(e,t){t===0&&(e.mode&1?(t=as,as<<=1,!(as&130023424)&&(as=4194304)):t=1);var n=pt();e=Gn(e,t),e!==null&&(Ra(e,t,n),Et(e,n))}function Gk(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),ab(e,n)}function Yk(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(V(314))}r!==null&&r.delete(t),ab(e,n)}var sb;sb=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||_t.current)St=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return St=!1,Dk(e,t,n);St=!!(e.flags&131072)}else St=!1,_e&&t.flags&1048576&&cx(t,wl,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Ns(e,t),e=t.pendingProps;var i=Hi(t,lt.current);Fi(t,n),i=Th(null,t,r,e,i,n);var o=Oh();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ct(r)?(o=!0,xl(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,_h(t),i.updater=gu,t.stateNode=i,i._reactInternals=t,Uf(t,r,e,n),t=Gf(null,t,r,!0,o,n)):(t.tag=0,_e&&o&&gh(t),dt(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Ns(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Xk(r),e=tn(r,e),i){case 0:t=Wf(null,t,r,e,n);break e;case 1:t=r0(null,t,r,e,n);break e;case 11:t=t0(null,t,r,e,n);break e;case 14:t=n0(null,t,r,tn(r.type,e),n);break e}throw Error(V(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:tn(r,i),Wf(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:tn(r,i),r0(e,t,r,i,n);case 3:e:{if(Hx(t),e===null)throw Error(V(387));r=t.pendingProps,o=t.memoizedState,i=o.element,hx(e,t),Cl(t,r,null,n);var a=t.memoizedState;if(r=a.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=qi(Error(V(423)),t),t=i0(e,t,r,n,i);break e}else if(r!==i){i=qi(Error(V(424)),t),t=i0(e,t,r,n,i);break e}else for($t=vr(t.stateNode.containerInfo.firstChild),Dt=t,_e=!0,on=null,n=yx(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Wi(),r===i){t=Yn(e,t,n);break e}dt(e,t,r,n)}t=t.child}return t;case 5:return xx(t),e===null&&Nf(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,a=i.children,Lf(r,i)?a=null:o!==null&&Lf(r,o)&&(t.flags|=32),Ux(e,t),dt(e,t,a,n),t.child;case 6:return e===null&&Nf(t),null;case 13:return Wx(e,t,n);case 4:return Ch(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Gi(t,null,r,n):dt(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:tn(r,i),t0(e,t,r,i,n);case 7:return dt(e,t,t.pendingProps,n),t.child;case 8:return dt(e,t,t.pendingProps.children,n),t.child;case 12:return dt(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,a=i.value,ge(Sl,r._currentValue),r._currentValue=a,o!==null)if(fn(o.value,a)){if(o.children===i.children&&!_t.current){t=Yn(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var l=o.dependencies;if(l!==null){a=o.child;for(var s=l.firstContext;s!==null;){if(s.context===r){if(o.tag===1){s=Bn(-1,n&-n),s.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?s.next=s:(s.next=d.next,d.next=s),u.pending=s}}o.lanes|=n,s=o.alternate,s!==null&&(s.lanes|=n),Bf(o.return,n,t),l.lanes|=n;break}s=s.next}}else if(o.tag===10)a=o.type===t.type?null:o.child;else if(o.tag===18){if(a=o.return,a===null)throw Error(V(341));a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),Bf(a,n,t),a=o.sibling}else a=o.child;if(a!==null)a.return=o;else for(a=o;a!==null;){if(a===t){a=null;break}if(o=a.sibling,o!==null){o.return=a.return,a=o;break}a=a.return}o=a}dt(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Fi(t,n),i=Yt(i),r=r(i),t.flags|=1,dt(e,t,r,n),t.child;case 14:return r=t.type,i=tn(r,t.pendingProps),i=tn(r.type,i),n0(e,t,r,i,n);case 15:return Bx(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:tn(r,i),Ns(e,t),t.tag=1,Ct(r)?(e=!0,xl(t)):e=!1,Fi(t,n),gx(t,r,i),Uf(t,r,i,n),Gf(null,t,r,!0,e,n);case 19:return Gx(e,t,n);case 22:return Vx(e,t,n)}throw Error(V(156,t.tag))};function lb(e,t){return Dy(e,t)}function qk(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Wt(e,t,n,r){return new qk(e,t,n,r)}function zh(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Xk(e){if(typeof e=="function")return zh(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ih)return 11;if(e===oh)return 14}return 2}function wr(e,t){var n=e.alternate;return n===null?(n=Wt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Us(e,t,n,r,i,o){var a=2;if(r=e,typeof e=="function")zh(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case _i:return Wr(n.children,i,o,t);case rh:a=8,i|=8;break;case pf:return e=Wt(12,n,t,i|2),e.elementType=pf,e.lanes=o,e;case hf:return e=Wt(13,n,t,i),e.elementType=hf,e.lanes=o,e;case mf:return e=Wt(19,n,t,i),e.elementType=mf,e.lanes=o,e;case vy:return bu(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case my:a=10;break e;case gy:a=9;break e;case ih:a=11;break e;case oh:a=14;break e;case ir:a=16,r=null;break e}throw Error(V(130,e==null?e:typeof e,""))}return t=Wt(a,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function Wr(e,t,n,r){return e=Wt(7,e,r,t),e.lanes=n,e}function bu(e,t,n,r){return e=Wt(22,e,r,t),e.elementType=vy,e.lanes=n,e.stateNode={isHidden:!1},e}function id(e,t,n){return e=Wt(6,e,null,t),e.lanes=n,e}function od(e,t,n){return t=Wt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Kk(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=zc(0),this.expirationTimes=zc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=zc(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Nh(e,t,n,r,i,o,a,l,s){return e=new Kk(e,t,n,l,s),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Wt(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},_h(o),e}function Qk(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Si,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function ub(e){if(!e)return Cr;e=e._reactInternals;e:{if(oi(e)!==e||e.tag!==1)throw Error(V(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ct(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(V(171))}if(e.tag===1){var n=e.type;if(Ct(n))return lx(e,n,t)}return t}function cb(e,t,n,r,i,o,a,l,s){return e=Nh(n,r,!0,e,i,o,a,l,s),e.context=ub(null),n=e.current,r=pt(),i=br(n),o=Bn(r,i),o.callback=t??null,yr(n,o,i),e.current.lanes=i,Ra(e,i,r),Et(e,r),e}function wu(e,t,n,r){var i=t.current,o=pt(),a=br(i);return n=ub(n),t.context===null?t.context=n:t.pendingContext=n,t=Bn(o,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=yr(i,t,a),e!==null&&(ln(e,i,a,o),Rs(e,i,a)),a}function $l(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function h0(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Bh(e,t){h0(e,t),(e=e.alternate)&&h0(e,t)}function Zk(){return null}var db=typeof reportError=="function"?reportError:function(e){console.error(e)};function Vh(e){this._internalRoot=e}Su.prototype.render=Vh.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(V(409));wu(e,t,null,null)};Su.prototype.unmount=Vh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Qr(function(){wu(null,e,null,null)}),t[Wn]=null}};function Su(e){this._internalRoot=e}Su.prototype.unstable_scheduleHydration=function(e){if(e){var t=By();e={blockedOn:null,target:e,priority:t};for(var n=0;n<ar.length&&t!==0&&t<ar[n].priority;n++);ar.splice(n,0,e),n===0&&Uy(e)}};function Uh(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function _u(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function m0(){}function Jk(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=$l(a);o.call(u)}}var a=cb(t,r,e,0,null,!1,!1,"",m0);return e._reactRootContainer=a,e[Wn]=a.current,ga(e.nodeType===8?e.parentNode:e),Qr(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=$l(s);l.call(u)}}var s=Nh(e,0,!1,null,null,!1,!1,"",m0);return e._reactRootContainer=s,e[Wn]=s.current,ga(e.nodeType===8?e.parentNode:e),Qr(function(){wu(t,s,n,r)}),s}function Cu(e,t,n,r,i){var o=n._reactRootContainer;if(o){var a=o;if(typeof i=="function"){var l=i;i=function(){var s=$l(a);l.call(s)}}wu(t,a,e,i)}else a=Jk(n,t,e,i,r);return $l(a)}zy=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Bo(t.pendingLanes);n!==0&&(lh(t,n|1),Et(t,je()),!(se&6)&&(Xi=je()+500,Tr()))}break;case 13:Qr(function(){var r=Gn(e,1);if(r!==null){var i=pt();ln(r,e,1,i)}}),Bh(e,1)}};uh=function(e){if(e.tag===13){var t=Gn(e,134217728);if(t!==null){var n=pt();ln(t,e,134217728,n)}Bh(e,134217728)}};Ny=function(e){if(e.tag===13){var t=br(e),n=Gn(e,t);if(n!==null){var r=pt();ln(n,e,t,r)}Bh(e,t)}};By=function(){return he};Vy=function(e,t){var n=he;try{return he=e,t()}finally{he=n}};Ef=function(e,t,n){switch(t){case"input":if(yf(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=hu(r);if(!i)throw Error(V(90));xy(r),yf(r,i)}}}break;case"textarea":wy(e,n);break;case"select":t=n.value,t!=null&&Di(e,!!n.multiple,t,!1)}};Ty=Ah;Oy=Qr;var eP={usingClientEntryPoint:!1,Events:[za,Pi,hu,ky,Py,Ah]},Mo={findFiberByHostInstance:Nr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},tP={bundleType:Mo.bundleType,version:Mo.version,rendererPackageName:Mo.rendererPackageName,rendererConfig:Mo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Qn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=$y(e),e===null?null:e.stateNode},findFiberByHostInstance:Mo.findFiberByHostInstance||Zk,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var vs=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!vs.isDisabled&&vs.supportsFiber)try{cu=vs.inject(tP),_n=vs}catch{}}Ft.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=eP;Ft.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Uh(t))throw Error(V(200));return Qk(e,t,null,n)};Ft.createRoot=function(e,t){if(!Uh(e))throw Error(V(299));var n=!1,r="",i=db;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Nh(e,1,!1,null,null,n,!1,r,i),e[Wn]=t.current,ga(e.nodeType===8?e.parentNode:e),new Vh(t)};Ft.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(V(188)):(e=Object.keys(e).join(","),Error(V(268,e)));return e=$y(t),e=e===null?null:e.stateNode,e};Ft.flushSync=function(e){return Qr(e)};Ft.hydrate=function(e,t,n){if(!_u(t))throw Error(V(200));return Cu(null,e,t,!0,n)};Ft.hydrateRoot=function(e,t,n){if(!Uh(e))throw Error(V(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",a=db;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=cb(t,null,e,1,n??null,i,!1,o,a),e[Wn]=t.current,ga(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Su(t)};Ft.render=function(e,t,n){if(!_u(t))throw Error(V(200));return Cu(null,e,t,!1,n)};Ft.unmountComponentAtNode=function(e){if(!_u(e))throw Error(V(40));return e._reactRootContainer?(Qr(function(){Cu(null,null,e,!1,function(){e._reactRootContainer=null,e[Wn]=null})}),!0):!1};Ft.unstable_batchedUpdates=Ah;Ft.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!_u(n))throw Error(V(200));if(e==null||e._reactInternals===void 0)throw Error(V(38));return Cu(e,t,n,!1,r)};Ft.version="18.2.0-next-9e3b772b8-20220608";function fb(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(fb)}catch(e){console.error(e)}}fb(),cy.exports=Ft;var Eu=cy.exports,g0=Eu;df.createRoot=g0.createRoot,df.hydrateRoot=g0.hydrateRoot;var st=function(){return st=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},st.apply(this,arguments)};function Ki(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,o;r<i;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))}function nP(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var rP=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|popover|popoverTarget|popoverTargetAction|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,iP=nP(function(e){return rP.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),ye="-ms-",ra="-moz-",ue="-webkit-",pb="comm",ku="rule",Hh="decl",oP="@import",aP="@namespace",hb="@keyframes",sP="@layer",mb=Math.abs,Wh=String.fromCharCode,ip=Object.assign;function lP(e,t){return ze(e,0)^45?(((t<<2^ze(e,0))<<2^ze(e,1))<<2^ze(e,2))<<2^ze(e,3):0}function gb(e){return e.trim()}function Dn(e,t){return(e=t.exec(e))?e[0]:e}function ne(e,t,n){return e.replace(t,n)}function Hs(e,t,n){return e.indexOf(t,n)}function ze(e,t){return e.charCodeAt(t)|0}function Zr(e,t,n){return e.slice(t,n)}function rn(e){return e.length}function vb(e){return e.length}function Uo(e,t){return t.push(e),e}function uP(e,t){return e.map(t).join("")}function v0(e,t){return e.filter(function(n){return!Dn(n,t)})}var Pu=1,Qi=1,yb=0,Xt=0,$e=0,fo="";function Tu(e,t,n,r,i,o,a,l){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:Pu,column:Qi,length:a,return:"",siblings:l}}function rr(e,t){return ip(Tu("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function ci(e){for(;e.root;)e=rr(e.root,{children:[e]});Uo(e,e.siblings)}function cP(){return $e}function dP(){return $e=Xt>0?ze(fo,--Xt):0,Qi--,$e===10&&(Qi=1,Pu--),$e}function un(){return $e=Xt<yb?ze(fo,Xt++):0,Qi++,$e===10&&(Qi=1,Pu++),$e}function dr(){return ze(fo,Xt)}function Ws(){return Xt}function Ou(e,t){return Zr(fo,e,t)}function Ea(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function fP(e){return Pu=Qi=1,yb=rn(fo=e),Xt=0,[]}function pP(e){return fo="",e}function ad(e){return gb(Ou(Xt-1,op(e===91?e+2:e===40?e+1:e)))}function hP(e){for(;($e=dr())&&$e<33;)un();return Ea(e)>2||Ea($e)>3?"":" "}function mP(e,t){for(;--t&&un()&&!($e<48||$e>102||$e>57&&$e<65||$e>70&&$e<97););return Ou(e,Ws()+(t<6&&dr()==32&&un()==32))}function op(e){for(;un();)switch($e){case e:return Xt;case 34:case 39:e!==34&&e!==39&&op($e);break;case 40:e===41&&op(e);break;case 92:un();break}return Xt}function gP(e,t){for(;un()&&e+$e!==47+10;)if(e+$e===42+42&&dr()===47)break;return"/*"+Ou(t,Xt-1)+"*"+Wh(e===47?e:un())}function vP(e){for(;!Ea(dr());)un();return Ou(e,Xt)}function yP(e){return pP(Gs("",null,null,null,[""],e=fP(e),0,[0],e))}function Gs(e,t,n,r,i,o,a,l,s){for(var u=0,d=0,c=a,y=0,p=0,m=0,g=1,w=1,h=1,v=0,x="",S=i,C=o,T=r,k=x;w;)switch(m=v,v=un()){case 40:if(m!=108&&ze(k,c-1)==58){Hs(k+=ne(ad(v),"&","&\f"),"&\f",mb(u?l[u-1]:0))!=-1&&(h=-1);break}case 34:case 39:case 91:k+=ad(v);break;case 9:case 10:case 13:case 32:k+=hP(m);break;case 92:k+=mP(Ws()-1,7);continue;case 47:switch(dr()){case 42:case 47:Uo(xP(gP(un(),Ws()),t,n,s),s),(Ea(m||1)==5||Ea(dr()||1)==5)&&rn(k)&&Zr(k,-1,void 0)!==" "&&(k+=" ");break;default:k+="/"}break;case 123*g:l[u++]=rn(k)*h;case 125*g:case 59:case 0:switch(v){case 0:case 125:w=0;case 59+d:h==-1&&(k=ne(k,/\f/g,"")),p>0&&(rn(k)-c||g===0&&m===47)&&Uo(p>32?x0(k+";",r,n,c-1,s):x0(ne(k," ","")+";",r,n,c-2,s),s);break;case 59:k+=";";default:if(Uo(T=y0(k,t,n,u,d,i,l,x,S=[],C=[],c,o),o),v===123)if(d===0)Gs(k,t,T,T,S,o,c,l,C);else{switch(y){case 99:if(ze(k,3)===110)break;case 108:if(ze(k,2)===97)break;default:d=0;case 100:case 109:case 115:}d?Gs(e,T,T,r&&Uo(y0(e,T,T,0,0,i,l,x,i,S=[],c,C),C),i,C,c,l,r?S:C):Gs(k,T,T,T,[""],C,0,l,C)}}u=d=p=0,g=h=1,x=k="",c=a;break;case 58:c=1+rn(k),p=m;default:if(g<1){if(v==123)--g;else if(v==125&&g++==0&&dP()==125)continue}switch(k+=Wh(v),v*g){case 38:h=d>0?1:(k+="\f",-1);break;case 44:l[u++]=(rn(k)-1)*h,h=1;break;case 64:dr()===45&&(k+=ad(un())),y=dr(),d=c=rn(x=k+=vP(Ws())),v++;break;case 45:m===45&&rn(k)==2&&(g=0)}}return o}function y0(e,t,n,r,i,o,a,l,s,u,d,c){for(var y=i-1,p=i===0?o:[""],m=vb(p),g=0,w=0,h=0;g<r;++g)for(var v=0,x=Zr(e,y+1,y=mb(w=a[g])),S=e;v<m;++v)(S=gb(w>0?p[v]+" "+x:ne(x,/&\f/g,p[v])))&&(s[h++]=S);return Tu(e,t,n,i===0?ku:l,s,u,d,c)}function xP(e,t,n,r){return Tu(e,t,n,pb,Wh(cP()),Zr(e,2,-2),0,r)}function x0(e,t,n,r,i){return Tu(e,t,n,Hh,Zr(e,0,r),Zr(e,r+1,-1),r,i)}function xb(e,t,n){switch(lP(e,t)){case 5103:return ue+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return ue+e+e;case 4855:return ue+e.replace("add","source-over").replace("substract","source-out").replace("intersect","source-in").replace("exclude","xor")+e;case 4789:return ra+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return ue+e+ra+e+ye+e+e;case 5936:switch(ze(e,t+11)){case 114:return ue+e+ye+ne(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return ue+e+ye+ne(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return ue+e+ye+ne(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return ue+e+ye+e+e;case 6165:return ue+e+ye+"flex-"+e+e;case 5187:return ue+e+ne(e,/(\w+).+(:[^]+)/,ue+"box-$1$2"+ye+"flex-$1$2")+e;case 5443:return ue+e+ye+"flex-item-"+ne(e,/flex-|-self/g,"")+(Dn(e,/flex-|baseline/)?"":ye+"grid-row-"+ne(e,/flex-|-self/g,""))+e;case 4675:return ue+e+ye+"flex-line-pack"+ne(e,/align-content|flex-|-self/g,"")+e;case 5548:return ue+e+ye+ne(e,"shrink","negative")+e;case 5292:return ue+e+ye+ne(e,"basis","preferred-size")+e;case 6060:return ue+"box-"+ne(e,"-grow","")+ue+e+ye+ne(e,"grow","positive")+e;case 4554:return ue+ne(e,/([^-])(transform)/g,"$1"+ue+"$2")+e;case 6187:return ne(ne(ne(e,/(zoom-|grab)/,ue+"$1"),/(image-set)/,ue+"$1"),e,"")+e;case 5495:case 3959:return ne(e,/(image-set\([^]*)/,ue+"$1$`$1");case 4968:return ne(ne(e,/(.+:)(flex-)?(.*)/,ue+"box-pack:$3"+ye+"flex-pack:$3"),/space-between/,"justify")+ue+e+e;case 4200:if(!Dn(e,/flex-|baseline/))return ye+"grid-column-align"+Zr(e,t)+e;break;case 2592:case 3360:return ye+ne(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,i){return t=i,Dn(r.props,/grid-\w+-end/)})?~Hs(e+(n=n[t].value),"span",0)?e:ye+ne(e,"-start","")+e+ye+"grid-row-span:"+(~Hs(n,"span",0)?Dn(n,/\d+/):+Dn(n,/\d+/)-+Dn(e,/\d+/))+";":ye+ne(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return Dn(r.props,/grid-\w+-start/)})?e:ye+ne(ne(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return ne(e,/(.+)-inline(.+)/,ue+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(rn(e)-1-t>6)switch(ze(e,t+1)){case 109:if(ze(e,t+4)!==45)break;case 102:return ne(e,/(.+:)(.+)-([^]+)/,"$1"+ue+"$2-$3$1"+ra+(ze(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Hs(e,"stretch",0)?xb(ne(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return ne(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,o,a,l,s,u){return ye+i+":"+o+u+(a?ye+i+"-span:"+(l?s:+s-+o)+u:"")+e});case 4949:if(ze(e,t+6)===121)return ne(e,":",":"+ue)+e;break;case 6444:switch(ze(e,ze(e,14)===45?18:11)){case 120:return ne(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+ue+(ze(e,14)===45?"inline-":"")+"box$3$1"+ue+"$2$3$1"+ye+"$2box$3")+e;case 100:return ne(e,":",":"+ye)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return ne(e,"scroll-","scroll-snap-")+e}return e}function Il(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function bP(e,t,n,r){switch(e.type){case sP:if(e.children.length)break;case oP:case aP:case Hh:return e.return=e.return||e.value;case pb:return"";case hb:return e.return=e.value+"{"+Il(e.children,r)+"}";case ku:if(!rn(e.value=e.props.join(",")))return""}return rn(n=Il(e.children,r))?e.return=e.value+"{"+n+"}":""}function wP(e){var t=vb(e);return function(n,r,i,o){for(var a="",l=0;l<t;l++)a+=e[l](n,r,i,o)||"";return a}}function SP(e){return function(t){t.root||(t=t.return)&&e(t)}}function _P(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case Hh:e.return=xb(e.value,e.length,n);return;case hb:return Il([rr(e,{value:ne(e.value,"@","@"+ue)})],r);case ku:if(e.length)return uP(n=e.props,function(i){switch(Dn(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":ci(rr(e,{props:[ne(i,/:(read-\w+)/,":"+ra+"$1")]})),ci(rr(e,{props:[i]})),ip(e,{props:v0(n,r)});break;case"::placeholder":ci(rr(e,{props:[ne(i,/:(plac\w+)/,":"+ue+"input-$1")]})),ci(rr(e,{props:[ne(i,/:(plac\w+)/,":"+ra+"$1")]})),ci(rr(e,{props:[ne(i,/:(plac\w+)/,ye+"input-$1")]})),ci(rr(e,{props:[i]})),ip(e,{props:v0(n,r)});break}return""})}}var CP={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Zi=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",bb="active",wb="data-styled-version",ju="6.3.11",Gh=`/*!sc*/
`,ia=typeof window<"u"&&typeof document<"u",EP=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY),kP={};function Ba(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var Ys=new Map,Dl=new Map,qs=1,Ho=function(e){if(Ys.has(e))return Ys.get(e);for(;Dl.has(qs);)qs++;var t=qs++;return Ys.set(e,t),Dl.set(t,e),t},PP=function(e,t){qs=t+1,Ys.set(e,t),Dl.set(t,e)},Yh=Object.freeze([]),Ji=Object.freeze({});function Sb(e,t,n){return n===void 0&&(n=Ji),e.theme!==n.theme&&e.theme||t||n.theme}var _b=new Set(["a","abbr","address","area","article","aside","audio","b","bdi","bdo","blockquote","body","button","br","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","main","map","mark","menu","meter","nav","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","slot","small","span","strong","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","switch","symbol","text","textPath","tspan","use"]),TP=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,OP=/(^-|-$)/g;function b0(e){return e.replace(TP,"-").replace(OP,"")}var jP=/(a)(d)/gi,w0=function(e){return String.fromCharCode(e+(e>25?39:97))};function ap(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=w0(t%52)+n;return(w0(t%52)+n).replace(jP,"$1-$2")}var sd,Ar=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Cb=function(e){return Ar(5381,e)};function qh(e){return ap(Cb(e)>>>0)}function MP(e){return e.displayName||e.name||"Component"}function ld(e){return typeof e=="string"&&!0}var Eb=typeof Symbol=="function"&&Symbol.for,kb=Eb?Symbol.for("react.memo"):60115,$P=Eb?Symbol.for("react.forward_ref"):60112,IP={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},DP={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Pb={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},LP=((sd={})[$P]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},sd[kb]=Pb,sd);function S0(e){return("type"in(t=e)&&t.type.$$typeof)===kb?Pb:"$$typeof"in e?LP[e.$$typeof]:IP;var t}var AP=Object.defineProperty,RP=Object.getOwnPropertyNames,_0=Object.getOwnPropertySymbols,FP=Object.getOwnPropertyDescriptor,zP=Object.getPrototypeOf,C0=Object.prototype;function Tb(e,t,n){if(typeof t!="string"){if(C0){var r=zP(t);r&&r!==C0&&Tb(e,r,n)}var i=RP(t);_0&&(i=i.concat(_0(t)));for(var o=S0(e),a=S0(t),l=0;l<i.length;++l){var s=i[l];if(!(s in DP||n&&n[s]||a&&s in a||o&&s in o)){var u=FP(t,s);try{AP(e,s,u)}catch{}}}}return e}function eo(e){return typeof e=="function"}function Xh(e){return typeof e=="object"&&"styledComponentId"in e}function Ur(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Ll(e,t){return e.join(t||"")}function ka(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function sp(e,t,n){if(n===void 0&&(n=!1),!n&&!ka(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=sp(e[r],t[r]);else if(ka(t))for(var r in t)e[r]=sp(e[r],t[r]);return e}function Kh(e,t){Object.defineProperty(e,"toString",{value:t})}var NP=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t,this._cGroup=0,this._cIndex=0}return e.prototype.indexOfGroup=function(t){if(t===this._cGroup)return this._cIndex;var n=this._cIndex;if(t>this._cGroup)for(var r=this._cGroup;r<t;r++)n+=this.groupSizes[r];else for(r=this._cGroup-1;r>=t;r--)n-=this.groupSizes[r];return this._cGroup=t,this._cIndex=n,n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,o=i;t>=o;)if((o<<=1)<0)throw Ba(16,"".concat(t));this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var a=i;a<o;a++)this.groupSizes[a]=0}for(var l=this.indexOfGroup(t+1),s=0,u=(a=0,n.length);a<u;a++)this.tag.insertRule(l,n[a])&&(this.groupSizes[t]++,l++,s++);s>0&&this._cGroup>t&&(this._cIndex+=s)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),i=r+n;this.groupSizes[t]=0;for(var o=r;o<i;o++)this.tag.deleteRule(r);n>0&&this._cGroup>t&&(this._cIndex-=n)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],i=this.indexOfGroup(t),o=i+r,a=i;a<o;a++)n+=this.tag.getRule(a)+Gh;return n},e}(),BP="style[".concat(Zi,"][").concat(wb,'="').concat(ju,'"]'),VP=new RegExp("^".concat(Zi,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),E0=function(e){return typeof ShadowRoot<"u"&&e instanceof ShadowRoot||"host"in e&&e.nodeType===11},lp=function(e){if(!e)return document;if(E0(e))return e;if("getRootNode"in e){var t=e.getRootNode();if(E0(t))return t}return document},UP=function(e,t,n){for(var r,i=n.split(","),o=0,a=i.length;o<a;o++)(r=i[o])&&e.registerName(t,r)},HP=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(Gh),i=[],o=0,a=r.length;o<a;o++){var l=r[o].trim();if(l){var s=l.match(VP);if(s){var u=0|parseInt(s[1],10),d=s[2];u!==0&&(PP(d,u),UP(e,d,s[3]),e.getTag().insertRules(u,i)),i.length=0}else i.push(l)}}},ud=function(e){for(var t=lp(e.options.target).querySelectorAll(BP),n=0,r=t.length;n<r;n++){var i=t[n];i&&i.getAttribute(Zi)!==bb&&(HP(e,i),i.parentNode&&i.parentNode.removeChild(i))}};function WP(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Ob=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(l){var s=Array.from(l.querySelectorAll("style[".concat(Zi,"]")));return s[s.length-1]}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(Zi,bb),r.setAttribute(wb,ju);var a=WP();return a&&r.setAttribute("nonce",a),n.insertBefore(r,o),r},GP=function(){function e(t){this.element=Ob(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){var r;if(n.sheet)return n.sheet;for(var i=(r=n.getRootNode().styleSheets)!==null&&r!==void 0?r:document.styleSheets,o=0,a=i.length;o<a;o++){var l=i[o];if(l.ownerNode===n)return l}throw Ba(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),YP=function(){function e(t){this.element=Ob(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),qP=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(t===this.length?this.rules.push(n):this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),k0=ia,XP={isServer:!ia,useCSSOMInjection:!EP},Al=function(){function e(t,n,r){t===void 0&&(t=Ji),n===void 0&&(n={});var i=this;this.options=st(st({},XP),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&ia&&k0&&(k0=!1,ud(this)),Kh(this,function(){return function(o){for(var a=o.getTag(),l=a.length,s="",u=function(c){var y=function(h){return Dl.get(h)}(c);if(y===void 0)return"continue";var p=o.names.get(y);if(p===void 0||!p.size)return"continue";var m=a.getGroup(c);if(m.length===0)return"continue";var g=Zi+".g"+c+'[id="'+y+'"]',w="";p.forEach(function(h){h.length>0&&(w+=h+",")}),s+=m+g+'{content:"'+w+'"}'+Gh},d=0;d<l;d++)u(d);return s}(i)})}return e.registerId=function(t){return Ho(t)},e.prototype.rehydrate=function(){!this.server&&ia&&ud(this)},e.prototype.reconstructWithOptions=function(t,n){n===void 0&&(n=!0);var r=new e(st(st({},this.options),t),this.gs,n&&this.names||void 0);return!this.server&&ia&&t.target!==this.options.target&&lp(this.options.target)!==lp(t.target)&&ud(r),r},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new qP(i):r?new GP(i):new YP(i)}(this.options),new NP(t)));var t},e.prototype.hasNameForId=function(t,n){var r,i;return(i=(r=this.names.get(t))===null||r===void 0?void 0:r.has(n))!==null&&i!==void 0&&i},e.prototype.registerName=function(t,n){Ho(t);var r=this.names.get(t);r?r.add(n):this.names.set(t,new Set([n]))},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(Ho(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(Ho(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),KP=/&/g,Ln=47,Rr=42;function P0(e){if(e.indexOf("}")===-1)return!1;for(var t=e.length,n=0,r=0,i=!1,o=0;o<t;o++){var a=e.charCodeAt(o);if(r!==0||i||a!==Ln||e.charCodeAt(o+1)!==Rr)if(i)a===Rr&&e.charCodeAt(o+1)===Ln&&(i=!1,o++);else if(a!==34&&a!==39||o!==0&&e.charCodeAt(o-1)===92){if(r===0){if(a===123)n++;else if(a===125&&--n<0)return!0}}else r===0?r=a:r===a&&(r=0);else i=!0,o++}return n!==0||r!==0}function jb(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=jb(n.children,t)),n})}function QP(e){var t,n,r,i=e===void 0?Ji:e,o=i.options,a=o===void 0?Ji:o,l=i.plugins,s=l===void 0?Yh:l,u=function(m,g,w){return w.startsWith(n)&&w.endsWith(n)&&w.replaceAll(n,"").length>0?".".concat(t):m},d=s.slice();d.push(function(m){m.type===ku&&m.value.includes("&")&&(r||(r=new RegExp("\\".concat(n,"\\b"),"g")),m.props[0]=m.props[0].replace(KP,n).replace(r,u))}),a.prefix&&d.push(_P),d.push(bP);var c=[],y=wP(d.concat(SP(function(m){return c.push(m)}))),p=function(m,g,w,h){g===void 0&&(g=""),w===void 0&&(w=""),h===void 0&&(h="&"),t=h,n=g,r=void 0;var v=function(S){if(!P0(S))return S;for(var C=S.length,T="",k=0,_=0,M=0,$=!1,D=0;D<C;D++){var A=S.charCodeAt(D);if(M!==0||$||A!==Ln||S.charCodeAt(D+1)!==Rr)if($)A===Rr&&S.charCodeAt(D+1)===Ln&&($=!1,D++);else if(A!==34&&A!==39||D!==0&&S.charCodeAt(D-1)===92){if(M===0)if(A===123)_++;else if(A===125){if(--_<0){for(var j=D+1;j<C;){var F=S.charCodeAt(j);if(F===59||F===10)break;j++}j<C&&S.charCodeAt(j)===59&&j++,_=0,D=j-1,k=j;continue}_===0&&(T+=S.substring(k,D+1),k=D+1)}else A===59&&_===0&&(T+=S.substring(k,D+1),k=D+1)}else M===0?M=A:M===A&&(M=0);else $=!0,D++}if(k<C){var R=S.substring(k);P0(R)||(T+=R)}return T}(function(S){if(S.indexOf("//")===-1)return S;for(var C=S.length,T=[],k=0,_=0,M=0,$=0;_<C;){var D=S.charCodeAt(_);if(D!==34&&D!==39||_!==0&&S.charCodeAt(_-1)===92)if(M===0)if(D===Ln&&_+1<C&&S.charCodeAt(_+1)===Rr){for(_+=2;_+1<C&&(S.charCodeAt(_)!==Rr||S.charCodeAt(_+1)!==Ln);)_++;_+=2}else if(D===40&&_>=3&&(32|S.charCodeAt(_-1))==108&&(32|S.charCodeAt(_-2))==114&&(32|S.charCodeAt(_-3))==117)$=1,_++;else if($>0)D===41?$--:D===40&&$++,_++;else if(D===Rr&&_+1<C&&S.charCodeAt(_+1)===Ln)_>k&&T.push(S.substring(k,_)),k=_+=2;else if(D===Ln&&_+1<C&&S.charCodeAt(_+1)===Ln){for(_>k&&T.push(S.substring(k,_));_<C&&S.charCodeAt(_)!==10;)_++;k=_}else _++;else _++;else M===0?M=D:M===D&&(M=0),_++}return k===0?S:(k<C&&T.push(S.substring(k)),T.join(""))}(m)),x=yP(w||g?"".concat(w," ").concat(g," { ").concat(v," }"):v);return a.namespace&&(x=jb(x,a.namespace)),c=[],Il(x,y),c};return p.hash=s.length?s.reduce(function(m,g){return g.name||Ba(15),Ar(m,g.name)},5381).toString():"",p}var ZP=new Al,up=QP(),Mb=K.createContext({shouldForwardProp:void 0,styleSheet:ZP,stylis:up});Mb.Consumer;K.createContext(void 0);function cp(){return K.useContext(Mb)}var $b=function(){function e(t,n){var r=this;this.inject=function(i,o){o===void 0&&(o=up);var a=r.name+o.hash;i.hasNameForId(r.id,a)||i.insertRules(r.id,a,o(r.rules,a,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,Kh(this,function(){throw Ba(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=up),this.name+t.hash},e}();function JP(e,t){return t==null||typeof t=="boolean"||t===""?"":typeof t!="number"||t===0||e in CP||e.startsWith("--")?String(t).trim():"".concat(t,"px")}var eT=function(e){return e>="A"&&e<="Z"};function T0(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;eT(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var Ib=function(e){return e==null||e===!1||e===""},Db=function(e){var t=[];for(var n in e){var r=e[n];e.hasOwnProperty(n)&&!Ib(r)&&(Array.isArray(r)&&r.isCss||eo(r)?t.push("".concat(T0(n),":"),r,";"):ka(r)?t.push.apply(t,Ki(Ki(["".concat(n," {")],Db(r),!1),["}"],!1)):t.push("".concat(T0(n),": ").concat(JP(n,r),";")))}return t};function Sr(e,t,n,r,i){if(i===void 0&&(i=[]),typeof e=="string")return e&&i.push(e),i;if(Ib(e))return i;if(Xh(e))return i.push(".".concat(e.styledComponentId)),i;if(eo(e)){if(!eo(a=e)||a.prototype&&a.prototype.isReactComponent||!t)return i.push(e),i;var o=e(t);return Sr(o,t,n,r,i)}var a;if(e instanceof $b)return n?(e.inject(n,r),i.push(e.getName(r))):i.push(e),i;if(ka(e)){for(var l=Db(e),s=0;s<l.length;s++)i.push(l[s]);return i}if(!Array.isArray(e))return i.push(e.toString()),i;for(s=0;s<e.length;s++)Sr(e[s],t,n,r,i);return i}function Lb(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(eo(n)&&!Xh(n))return!1}return!0}var tT=Cb(ju),nT=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&Lb(t),this.componentId=n,this.baseHash=Ar(tT,n),this.baseStyle=r,Al.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r).className:"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=Ur(i,this.staticRulesId);else{var o=Ll(Sr(this.rules,t,n,r)),a=ap(Ar(this.baseHash,o)>>>0);if(!n.hasNameForId(this.componentId,a)){var l=r(o,".".concat(a),void 0,this.componentId);n.insertRules(this.componentId,a,l)}i=Ur(i,a),this.staticRulesId=a}else{for(var s=Ar(this.baseHash,r.hash),u="",d=0;d<this.rules.length;d++){var c=this.rules[d];if(typeof c=="string")u+=c;else if(c){var y=Ll(Sr(c,t,n,r));s=Ar(Ar(s,String(d)),y),u+=y}}if(u){var p=ap(s>>>0);if(!n.hasNameForId(this.componentId,p)){var m=r(u,".".concat(p),void 0,this.componentId);n.insertRules(this.componentId,p,m)}i=Ur(i,p)}}return{className:i,css:typeof window>"u"?n.getTag().getGroup(Ho(this.componentId)):""}},e}(),Qh=K.createContext(void 0);Qh.Consumer;var cd={};function rT(e,t,n){var r=Xh(e),i=e,o=!ld(e),a=t.attrs,l=a===void 0?Yh:a,s=t.componentId,u=s===void 0?function(S,C){var T=typeof S!="string"?"sc":b0(S);cd[T]=(cd[T]||0)+1;var k="".concat(T,"-").concat(qh(ju+T+cd[T]));return C?"".concat(C,"-").concat(k):k}(t.displayName,t.parentComponentId):s,d=t.displayName,c=d===void 0?function(S){return ld(S)?"styled.".concat(S):"Styled(".concat(MP(S),")")}(e):d,y=t.displayName&&t.componentId?"".concat(b0(t.displayName),"-").concat(t.componentId):t.componentId||u,p=r&&i.attrs?i.attrs.concat(l).filter(Boolean):l,m=t.shouldForwardProp;if(r&&i.shouldForwardProp){var g=i.shouldForwardProp;if(t.shouldForwardProp){var w=t.shouldForwardProp;m=function(S,C){return g(S,C)&&w(S,C)}}else m=g}var h=new nT(n,y,r?i.componentStyle:void 0);function v(S,C){return function(T,k,_){var M=T.attrs,$=T.componentStyle,D=T.defaultProps,A=T.foldedComponentIds,j=T.styledComponentId,F=T.target,R=K.useContext(Qh),L=cp(),O=T.shouldForwardProp||L.shouldForwardProp,P=Sb(k,R,D)||Ji,I=function(X,ee,fe){for(var be,ie=st(st({},ee),{className:void 0,theme:fe}),Me=0;Me<X.length;Me+=1){var Be=eo(be=X[Me])?be(ie):be;for(var Ve in Be)Ve==="className"?ie.className=Ur(ie.className,Be[Ve]):Ve==="style"?ie.style=st(st({},ie.style),Be[Ve]):ie[Ve]=Be[Ve]}return"className"in ee&&typeof ee.className=="string"&&(ie.className=Ur(ie.className,ee.className)),ie}(M,k,P),z=I.as||F,B={};for(var N in I)I[N]===void 0||N[0]==="$"||N==="as"||N==="theme"&&I.theme===P||(N==="forwardedAs"?B.as=I.forwardedAs:O&&!O(N,z)||(B[N]=I[N]));var U=function(X,ee){var fe=cp(),be=X.generateAndInjectStyles(ee,fe.styleSheet,fe.stylis);return be}($,I),G=U.className,H=Ur(A,j);return G&&(H+=" "+G),I.className&&(H+=" "+I.className),B[ld(z)&&!_b.has(z)?"class":"className"]=H,_&&(B.ref=_),b.createElement(z,B)}(x,S,C)}v.displayName=c;var x=K.forwardRef(v);return x.attrs=p,x.componentStyle=h,x.displayName=c,x.shouldForwardProp=m,x.foldedComponentIds=r?Ur(i.foldedComponentIds,i.styledComponentId):"",x.styledComponentId=y,x.target=r?i.target:e,Object.defineProperty(x,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(S){this._foldedDefaultProps=r?function(C){for(var T=[],k=1;k<arguments.length;k++)T[k-1]=arguments[k];for(var _=0,M=T;_<M.length;_++)sp(C,M[_],!0);return C}({},i.defaultProps,S):S}}),Kh(x,function(){return".".concat(x.styledComponentId)}),o&&Tb(x,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),x}function O0(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var j0=function(e){return Object.assign(e,{isCss:!0})};function Zh(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(eo(e)||ka(e))return j0(Sr(O0(Yh,Ki([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?Sr(r):j0(Sr(O0(r,t)))}function dp(e,t,n){if(n===void 0&&(n=Ji),!t)throw Ba(1,t);var r=function(i){for(var o=[],a=1;a<arguments.length;a++)o[a-1]=arguments[a];return e(t,n,Zh.apply(void 0,Ki([i],o,!1)))};return r.attrs=function(i){return dp(e,t,st(st({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return dp(e,t,st(st({},n),i))},r}var Ab=function(e){return dp(rT,e)},E=Ab;_b.forEach(function(e){E[e]=Ab(e)});var iT=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=Lb(t),Al.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,r,i){var o=i(Ll(Sr(this.rules,n,r,i)),""),a=this.componentId+t;r.insertRules(a,a,o)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,r,i){t>2&&Al.registerId(this.componentId+t);var o=this.componentId+t;this.isStatic?r.hasNameForId(o,o)||this.createStyles(t,n,r,i):(this.removeStyles(t,r),this.createStyles(t,n,r,i))},e}();function oT(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=Zh.apply(void 0,Ki([e],t,!1)),i="sc-global-".concat(qh(JSON.stringify(r))),o=new iT(r,i),a=new WeakMap,l=function(u){var d=cp(),c=K.useContext(Qh),y=a.get(d.styleSheet);return y===void 0&&(y=d.styleSheet.allocateGSInstance(i),a.set(d.styleSheet,y)),(typeof window>"u"||!d.styleSheet.server)&&s(y,u,d.styleSheet,c,d.stylis),K.useLayoutEffect(function(){return d.styleSheet.server||s(y,u,d.styleSheet,c,d.stylis),function(){var p;o.removeStyles(y,d.styleSheet),p=d.styleSheet.options.target,typeof document<"u"&&(p??document).querySelectorAll('style[data-styled-global="'.concat(i,'"]')).forEach(function(m){return m.remove()})}},[y,u,d.styleSheet,c,d.stylis]),null};function s(u,d,c,y,p){if(o.isStatic)o.renderStyles(u,kP,c,p);else{var m=st(st({},d),{theme:Sb(d,y,l.defaultProps)});o.renderStyles(u,m,c,p)}}return K.memo(l)}function Jh(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=Ll(Zh.apply(void 0,Ki([e],t,!1))),i=qh(r);return new $b(i,r)}const aT=E.div`
position: sticky;
  top: 0;
  z-index: 1000;
      background: radial-gradient(circle at 50% 45%, #5c5149 0%, #4b3c34 35%, #352b25 65%, #1b1412 100%);


`,sT=E.div`
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
`,lT=E.div`
width: 100%;
  display: flex;
      gap: 10px;

  flex-direction: column;
  @media screen and (min-width: 768px) {
    justify-content: space-around;
  }
`,uT=E.div`

  display: flex;
  @media screen and (max-width: 1023px) {
    justify-content: space-between;
  }
`,cT=E.div`
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
`;const dT=E(Oe)`
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
`;const fT=E.svg`
  width: 30px;
  height: 30px;
  fill: var(--white-color);
`,pT=E.button`
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
`;const hT=E.div`
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
`,mT=E.button`
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
`,gT=E.nav`
  display: flex;
  flex-direction: column;
  gap: 25px;
`,di=E(Oe)`
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
`,vT=E.div`
  margin-top: auto;
  border-top: 1px solid #eee;
  padding-top: 20px;
  font-size: 14px;
  color: #888;
  text-align: center;
`,yT=E.div`
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
`,xT=E.div`
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
`,bT=E.input`
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
`,wT=E.button`
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
`,ST=E.svg`
  width: 24px;
  height: 24px;
`,_T=E.ul`
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
`,CT=E.li`
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


`,ET=E.img`
 width: 100px;
    height: 100px;
    object-fit: cover;
 `,kT=E.h3`
      text-align: left;
      font-size: 22px;
      font-weight: 800;

`,PT=E.h3`

      font-size: 22px;
         

`,TT=E.div`
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

    
`,cn="/Didiv/assets/symbol-defs-fb9ce9f0.svg",OT=()=>{const[e,t]=b.useState(""),[n,r]=b.useState([]),[i,o]=b.useState(!1),a=On(),l=b.useRef(null);b.useEffect(()=>{if(e.trim().length<2){r([]),o(!1);return}const u=setTimeout(async()=>{try{const c=await(await fetch(`https://backenddidiv-production.up.railway.app/api/products?filters[name][$containsi]=${e}&populate=*`)).json();r(c.data),o(!0)}catch(d){console.error(d)}},300);return()=>clearTimeout(u)},[e]),b.useEffect(()=>{const u=d=>{l.current&&!l.current.contains(d.target)&&o(!1)};return document.addEventListener("mousedown",u),()=>{document.removeEventListener("mousedown",u)}},[]);const s=u=>{t(""),o(!1),a(`/product/${u.id}`)};return f.jsxs(xT,{ref:l,children:[f.jsx(bT,{name:"site-search",value:e,onChange:u=>t(u.target.value),placeholder:"Пошук",autoComplete:"off",onFocus:()=>e.trim().length>=2&&o(!0)}),f.jsx(wT,{className:"search-button",children:f.jsx(ST,{children:f.jsx("use",{href:`${cn}#icon-search`})})}),i&&n.length>0&&f.jsx(_T,{children:n.map(u=>{var y,p;const c=u.new_price&&u.new_price<u.price?u.new_price:u.price;return f.jsxs(CT,{onClick:()=>s(u),children:[f.jsx(ET,{src:((p=(y=u.images)==null?void 0:y[0])==null?void 0:p.url)||"/nofoto.png",alt:""}),f.jsxs(TT,{children:[f.jsx(kT,{children:u.name}),f.jsxs(PT,{children:[c," грн."]})]})]},u.id)})})]})};var Rb={exports:{}},Fb={};/**
 * @license React
 * use-sync-external-store-with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Va=b;function jT(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var MT=typeof Object.is=="function"?Object.is:jT,$T=Va.useSyncExternalStore,IT=Va.useRef,DT=Va.useEffect,LT=Va.useMemo,AT=Va.useDebugValue;Fb.useSyncExternalStoreWithSelector=function(e,t,n,r,i){var o=IT(null);if(o.current===null){var a={hasValue:!1,value:null};o.current=a}else a=o.current;o=LT(function(){function s(p){if(!u){if(u=!0,d=p,p=r(p),i!==void 0&&a.hasValue){var m=a.value;if(i(m,p))return c=m}return c=p}if(m=c,MT(d,p))return m;var g=r(p);return i!==void 0&&i(m,g)?(d=p,m):(d=p,c=g)}var u=!1,d,c,y=n===void 0?null:n;return[function(){return s(t())},y===null?void 0:function(){return s(y())}]},[t,n,r,i]);var l=$T(e,o[0],o[1]);return DT(function(){a.hasValue=!0,a.value=l},[l]),AT(l),l};Rb.exports=Fb;var RT=Rb.exports;function FT(e){e()}function zT(){let e=null,t=null;return{clear(){e=null,t=null},notify(){FT(()=>{let n=e;for(;n;)n.callback(),n=n.next})},get(){const n=[];let r=e;for(;r;)n.push(r),r=r.next;return n},subscribe(n){let r=!0;const i=t={callback:n,next:null,prev:t};return i.prev?i.prev.next=i:e=i,function(){!r||e===null||(r=!1,i.next?i.next.prev=i.prev:t=i.prev,i.prev?i.prev.next=i.next:e=i.next)}}}}var M0={notify(){},get:()=>[]};function NT(e,t){let n,r=M0,i=0,o=!1;function a(g){d();const w=r.subscribe(g);let h=!1;return()=>{h||(h=!0,w(),c())}}function l(){r.notify()}function s(){m.onStateChange&&m.onStateChange()}function u(){return o}function d(){i++,n||(n=t?t.addNestedSub(s):e.subscribe(s),r=zT())}function c(){i--,n&&i===0&&(n(),n=void 0,r.clear(),r=M0)}function y(){o||(o=!0,d())}function p(){o&&(o=!1,c())}const m={addNestedSub:a,notifyNestedSubs:l,handleChangeWrapper:s,isSubscribed:u,trySubscribe:y,tryUnsubscribe:p,getListeners:()=>r};return m}var BT=()=>typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",VT=BT(),UT=()=>typeof navigator<"u"&&navigator.product==="ReactNative",HT=UT(),WT=()=>VT||HT?b.useLayoutEffect:b.useEffect,GT=WT(),dd=Symbol.for("react-redux-context"),fd=typeof globalThis<"u"?globalThis:{};function YT(){if(!b.createContext)return{};const e=fd[dd]??(fd[dd]=new Map);let t=e.get(b.createContext);return t||(t=b.createContext(null),e.set(b.createContext,t)),t}var Er=YT();function qT(e){const{children:t,context:n,serverState:r,store:i}=e,o=b.useMemo(()=>{const s=NT(i);return{store:i,subscription:s,getServerState:r?()=>r:void 0}},[i,r]),a=b.useMemo(()=>i.getState(),[i]);GT(()=>{const{subscription:s}=o;return s.onStateChange=s.notifyNestedSubs,s.trySubscribe(),a!==i.getState()&&s.notifyNestedSubs(),()=>{s.tryUnsubscribe(),s.onStateChange=void 0}},[o,a]);const l=n||Er;return b.createElement(l.Provider,{value:o},t)}var XT=qT;function em(e=Er){return function(){return b.useContext(e)}}var zb=em();function Nb(e=Er){const t=e===Er?zb:em(e),n=()=>{const{store:r}=t();return r};return Object.assign(n,{withTypes:()=>n}),n}var KT=Nb();function QT(e=Er){const t=e===Er?KT:Nb(e),n=()=>t().dispatch;return Object.assign(n,{withTypes:()=>n}),n}var jn=QT(),ZT=(e,t)=>e===t;function JT(e=Er){const t=e===Er?zb:em(e),n=(r,i={})=>{const{equalityFn:o=ZT}=typeof i=="function"?{equalityFn:i}:i,a=t(),{store:l,subscription:s,getServerState:u}=a;b.useRef(!0);const d=b.useCallback({[r.name](y){return r(y)}}[r.name],[r]),c=RT.useSyncExternalStoreWithSelector(s.addNestedSub,l.getState,u||l.getState,d,o);return b.useDebugValue(c),c};return Object.assign(n,{withTypes:()=>n}),n}var Ye=JT();const eO=E(Oe)`
      display: flex;
    align-items: center;
    align-content: center;
    justify-content: center;
    
    @media screen and (min-width: 1023px) {
   order: 2;
  margin-right: 10px;
  
  }
       
`,tO=E.svg`
  width: 30px;
  height: 30px;
 fill: var(--white-color);
`,nO=E.div`

width:30px;
height:30px;

  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 28px; 
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
`,iO=({onClick:e})=>{const t=Ye(n=>n.cart.items.length);return f.jsx(eO,{to:"/cart",children:f.jsxs(nO,{onClick:e,children:[f.jsx(tO,{children:f.jsx("use",{href:`${cn}#icon-cart`})}),t>0&&f.jsx(rO,{children:t})]})})},oO=E.nav`
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
`,fi=E(Oe)`
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
`,aO=()=>f.jsxs(oO,{children:[f.jsx(fi,{to:"/",children:"Головна"}),f.jsx(fi,{to:"/catalog",children:"Каталог"}),f.jsx(fi,{to:"/catalog/new",children:"Новинки"}),f.jsx(fi,{to:"/catalog/sale",children:"Акційні товари"}),f.jsx(fi,{to:"/about",children:"Про нас"}),f.jsx(fi,{to:"/contacts",children:"Контакти"})]}),sO=E.svg`
  width: 24px;
  height: 24px;
  fill: var(--white-color);
`,lO=E(Oe)`
      display: flex;
    align-items: center;
    align-content: center;
    justify-content: center;
    
    @media screen and (min-width: 1023px) {
   order: 2;
 
  }
       
`,uO=E.div`

width:30px;
height:30px;

  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 28px; /* розмір іконки */
  cursor: pointer;
`,cO=E.div`

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
`,dO=({onClick:e})=>{const t=Ye(n=>n.favorites.items.length);return f.jsx(lO,{to:"/favorite",children:f.jsxs(uO,{onClick:e,children:[f.jsx(sO,{children:f.jsx("use",{href:`${cn}#icon-heart`})}),t>0&&f.jsx(cO,{children:t})]})})};/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bb=(...e)=>e.filter((t,n,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===n).join(" ").trim();/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fO=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pO=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,n,r)=>r?r.toUpperCase():n.toLowerCase());/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $0=e=>{const t=pO(e);return t.charAt(0).toUpperCase()+t.slice(1)};/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var hO={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mO=e=>{for(const t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0;return!1};/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gO=b.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:i="",children:o,iconNode:a,...l},s)=>b.createElement("svg",{ref:s,...hO,width:t,height:t,stroke:e,strokeWidth:r?Number(n)*24/Number(t):n,className:Bb("lucide",i),...!o&&!mO(l)&&{"aria-hidden":"true"},...l},[...a.map(([u,d])=>b.createElement(u,d)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nt=(e,t)=>{const n=b.forwardRef(({className:r,...i},o)=>b.createElement(gO,{ref:o,iconNode:t,className:Bb(`lucide-${fO($0(e))}`,`lucide-${e}`,r),...i}));return n.displayName=$0(e),n};/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vO=[["path",{d:"m3 16 4 4 4-4",key:"1co6wj"}],["path",{d:"M7 20V4",key:"1yoxec"}],["path",{d:"M11 4h4",key:"6d7r33"}],["path",{d:"M11 8h7",key:"djye34"}],["path",{d:"M11 12h10",key:"1438ji"}]],Mu=Nt("arrow-down-narrow-wide",vO);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yO=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],$u=Nt("arrow-right",yO);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xO=[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"M9 9h.01",key:"1q5me6"}],["path",{d:"M15 15h.01",key:"lqbp3k"}]],bO=Nt("badge-percent",xO);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wO=[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",key:"mvr1a0"}]],Ua=Nt("heart",wO);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SO=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"r6nss1"}]],_O=Nt("house",SO);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CO=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],EO=Nt("info",CO);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kO=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 .83.18 2 2 0 0 0 .83-.18l8.58-3.9a1 1 0 0 0 0-1.831z",key:"zzgyd3"}],["path",{d:"M16 17h6",key:"1ook5g"}],["path",{d:"M19 14v6",key:"1ckrd5"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 .825.178",key:"1ia9y3"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l2.116-.962",key:"jksky3"}]],PO=Nt("layers-plus",kO);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TO=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],OO=Nt("mail",TO);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jO=[["path",{d:"M16 10a4 4 0 0 1-8 0",key:"1ltviw"}],["path",{d:"M3.103 6.034h17.794",key:"awc11p"}],["path",{d:"M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z",key:"o988cm"}]],MO=Nt("shopping-bag",jO);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $O=[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]],po=Nt("shopping-cart",$O);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IO=[["path",{d:"M10 5H3",key:"1qgfaw"}],["path",{d:"M12 19H3",key:"yhmn1j"}],["path",{d:"M14 3v4",key:"1sua03"}],["path",{d:"M16 17v4",key:"1q0r14"}],["path",{d:"M21 12h-9",key:"1o4lsq"}],["path",{d:"M21 19h-5",key:"1rlt1p"}],["path",{d:"M21 5h-7",key:"1oszz2"}],["path",{d:"M8 10v4",key:"tgpxqk"}],["path",{d:"M8 12H3",key:"a7s4jb"}]],Vb=Nt("sliders-horizontal",IO);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DO=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],Ub=Nt("trash-2",DO);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LO=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Hb=Nt("x",LO),AO=()=>{const[e,t]=b.useState(!1);return f.jsx(aT,{children:f.jsx(sT,{children:f.jsxs(lT,{children:[f.jsxs(uT,{children:[f.jsx(dT,{to:"/",children:"Дідів хлів"}),f.jsxs(cT,{children:[f.jsx(iO,{}),f.jsx(dO,{}),f.jsx(aO,{}),f.jsx(pT,{onClick:()=>t(!e),children:f.jsx(fT,{children:f.jsx("use",{href:`${cn}#icon-menu`})})}),f.jsx(yT,{open:e,onClick:()=>t(!1)}),f.jsxs(hT,{open:e,children:[f.jsx(mT,{onClick:()=>t(!1),children:f.jsx(Hb,{size:28,strokeWidth:1.5})}),f.jsxs(gT,{children:[f.jsxs(di,{onClick:()=>t(!1),to:"/",children:[f.jsx(_O,{size:22,strokeWidth:1.5})," Головна"]}),f.jsxs(di,{onClick:()=>t(!1),to:"/catalog",children:[f.jsx(MO,{size:22,strokeWidth:1.5})," Каталог"]}),f.jsxs(di,{onClick:()=>t(!1),to:"/catalog/new",children:[f.jsx(PO,{size:22,strokeWidth:1.5}),"Новинки"]}),f.jsxs(di,{onClick:()=>t(!1),to:"/catalog/sale",children:[f.jsx(bO,{size:22,strokeWidth:1.5}),"Акційні товари"]}),f.jsxs(di,{onClick:()=>t(!1),to:"/about",children:[f.jsx(EO,{size:22,strokeWidth:1.5})," Про нас"]}),f.jsxs(di,{onClick:()=>t(!1),to:"/contacts",children:[f.jsx(OO,{size:22,strokeWidth:1.5})," Контакти"]})]}),f.jsx(vT,{children:f.jsx("p",{children:"© 2020 Дідів Хлів"})})]})]})]}),f.jsx(OT,{})]})})})},RO=E.div`

   background: radial-gradient(
    circle at 50% 45%,
    #5c5149 0%,
    #4b3c34 35%,
    #352b25 65%,
    #1b1412 100%
  );
`,FO=E.footer`
 
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
`,zO=E.div`
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
`,pd=E.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center; /* Центруємо контент всередині колонки */

  @media screen and (min-width: 768px) {
    align-items: flex-start; /* На десктопі — по лівому краю */
    min-width: 150px;
    flex: 1;
  }
`,hd=E.h3`
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
`,NO=E.div`
  display: flex;
  gap: 20px;
  margin-top: 10px;
  justify-content: center;

  @media screen and (min-width: 768px) {
    justify-content: flex-start;
  }
`,md=E.a`
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
`,BO=()=>f.jsx(RO,{children:f.jsxs(FO,{children:[f.jsxs(zO,{children:[f.jsxs(pd,{children:[f.jsx(hd,{children:"Навігація"}),f.jsx(vn,{to:"/",children:"Головна"}),f.jsx(vn,{to:"/about",children:"Про нас"}),f.jsx(vn,{to:"/catalog",children:"Каталог"}),f.jsx(vn,{to:"/contacts",children:"Контакти"})]}),f.jsxs(pd,{children:[f.jsx(hd,{children:"Інформація"}),f.jsx(vn,{to:"/delivery",children:"Оплата і доставка"}),f.jsx(vn,{children:"Повернення"}),f.jsx(vn,{children:"Гарантія"}),f.jsx(vn,{children:"Політика конфіденційності"})]})]}),f.jsxs(pd,{children:[f.jsx(hd,{children:"Контакти"}),f.jsx(vn,{href:"tel:+380979999999",children:"+38 (097) 999-99-99"}),f.jsx(vn,{href:"mailto:email@email.com",children:"email@email.com"}),f.jsxs(NO,{children:[f.jsx(md,{href:"https://www.instagram.com/didivxliv?igsh=MXhsNWRjdW5rajYwdQ==",target:"_blank",rel:"noopener noreferrer",children:f.jsx("svg",{width:"20px",children:f.jsx("use",{href:`${cn}#icon-instagram`})})}),f.jsx(md,{href:"https://t.me/didivxliv",target:"_blank",rel:"noopener noreferrer",children:f.jsx("svg",{width:"20px",children:f.jsx("use",{href:`${cn}#icon-telegram`})})}),f.jsx(md,{href:"https://www.olx.ua/uk/hobbi-otdyh-i-sport/velo/q-%D0%B4%D1%96%D0%B4%D1%96%D0%B2-%D1%85%D0%BB%D1%96%D0%B2/?srsltid=AfmBOoqjzHkKNGxhNyAXVf2_KVV6h3JQFklEk0AjrDFh7tlO2-HZJPSS",target:"_blank",rel:"noopener noreferrer",children:f.jsx("svg",{width:"27px",height:"27px",style:{marginTop:"5px"},children:f.jsx("use",{href:`${cn}#icon-olx`})})})]})]})]})}),VO=()=>f.jsxs(f.Fragment,{children:[f.jsx(AO,{}),f.jsx("main",{style:{flex:1},children:f.jsx(zC,{})}),f.jsx(BO,{})]}),UO=E.section`

  width: 100%;
  font-family: var(--main-font);
  padding-top: 30px;
  
  
`,HO=E.h2`
   font-size: 30px;
      text-transform: uppercase;
  font-weight: 700;
  margin-bottom: 20px;
  color: #333;
      text-align: center;

  @media screen and (min-width: 768px) {
 font-size: 35px;

  }

`,WO=E.div`
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
`,GO=E.div`
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
`,YO=E(Oe)`
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
`,qO=E.span`
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
`,XO=E.div`
  padding: 10px 0;
`,KO=E.h3`
  font-size: 20px;
  font-weight: 600;
 
  color: #333;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
   margin-bottom:16px;
`,QO=E.div`
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
    background: var( --orange-color); 
    color: white;
  }
`;E(Oe)`
color: var(--white-color);
padding: 10px 20px;
 background:var( --orange-color); 
  border-radius: 15px;
  text-decoration: none;

`;const ZO=E(Oe)`
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

`,JO=E.div`
  text-align: center;
  color: white;

  p {
    font-size: 24px;
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 12px;
  }
  
`,e4=E.div`
  width: 40px;
  height: 40px;
  border: 2px solid white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`;function Xe(e){return`Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}var t4=(()=>typeof Symbol=="function"&&Symbol.observable||"@@observable")(),I0=t4,gd=()=>Math.random().toString(36).substring(7).split("").join("."),n4={INIT:`@@redux/INIT${gd()}`,REPLACE:`@@redux/REPLACE${gd()}`,PROBE_UNKNOWN_ACTION:()=>`@@redux/PROBE_UNKNOWN_ACTION${gd()}`},Rl=n4;function tm(e){if(typeof e!="object"||e===null)return!1;let t=e;for(;Object.getPrototypeOf(t)!==null;)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t||Object.getPrototypeOf(e)===null}function nm(e,t,n){if(typeof e!="function")throw new Error(Xe(2));if(typeof t=="function"&&typeof n=="function"||typeof n=="function"&&typeof arguments[3]=="function")throw new Error(Xe(0));if(typeof t=="function"&&typeof n>"u"&&(n=t,t=void 0),typeof n<"u"){if(typeof n!="function")throw new Error(Xe(1));return n(nm)(e,t)}let r=e,i=t,o=new Map,a=o,l=0,s=!1;function u(){a===o&&(a=new Map,o.forEach((w,h)=>{a.set(h,w)}))}function d(){if(s)throw new Error(Xe(3));return i}function c(w){if(typeof w!="function")throw new Error(Xe(4));if(s)throw new Error(Xe(5));let h=!0;u();const v=l++;return a.set(v,w),function(){if(h){if(s)throw new Error(Xe(6));h=!1,u(),a.delete(v),o=null}}}function y(w){if(!tm(w))throw new Error(Xe(7));if(typeof w.type>"u")throw new Error(Xe(8));if(typeof w.type!="string")throw new Error(Xe(17));if(s)throw new Error(Xe(9));try{s=!0,i=r(i,w)}finally{s=!1}return(o=a).forEach(v=>{v()}),w}function p(w){if(typeof w!="function")throw new Error(Xe(10));r=w,y({type:Rl.REPLACE})}function m(){const w=c;return{subscribe(h){if(typeof h!="object"||h===null)throw new Error(Xe(11));function v(){const S=h;S.next&&S.next(d())}return v(),{unsubscribe:w(v)}},[I0](){return this}}}return y({type:Rl.INIT}),{dispatch:y,subscribe:c,getState:d,replaceReducer:p,[I0]:m}}function r4(e){Object.keys(e).forEach(t=>{const n=e[t];if(typeof n(void 0,{type:Rl.INIT})>"u")throw new Error(Xe(12));if(typeof n(void 0,{type:Rl.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(Xe(13))})}function i4(e){const t=Object.keys(e),n={};for(let o=0;o<t.length;o++){const a=t[o];typeof e[a]=="function"&&(n[a]=e[a])}const r=Object.keys(n);let i;try{r4(n)}catch(o){i=o}return function(a={},l){if(i)throw i;let s=!1;const u={};for(let d=0;d<r.length;d++){const c=r[d],y=n[c],p=a[c],m=y(p,l);if(typeof m>"u")throw l&&l.type,new Error(Xe(14));u[c]=m,s=s||m!==p}return s=s||r.length!==Object.keys(a).length,s?u:a}}function Fl(...e){return e.length===0?t=>t:e.length===1?e[0]:e.reduce((t,n)=>(...r)=>t(n(...r)))}function o4(...e){return t=>(n,r)=>{const i=t(n,r);let o=()=>{throw new Error(Xe(15))};const a={getState:i.getState,dispatch:(s,...u)=>o(s,...u)},l=e.map(s=>s(a));return o=Fl(...l)(i.dispatch),{...i,dispatch:o}}}function a4(e){return tm(e)&&"type"in e&&typeof e.type=="string"}var Wb=Symbol.for("immer-nothing"),D0=Symbol.for("immer-draftable"),ht=Symbol.for("immer-state");function an(e,...t){throw new Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)}var It=Object,to=It.getPrototypeOf,zl="constructor",Iu="prototype",fp="configurable",Nl="enumerable",Xs="writable",Pa="value",qn=e=>!!e&&!!e[ht];function pn(e){var t;return e?Gb(e)||Lu(e)||!!e[D0]||!!((t=e[zl])!=null&&t[D0])||Au(e)||Ru(e):!1}var s4=It[Iu][zl].toString(),L0=new WeakMap;function Gb(e){if(!e||!rm(e))return!1;const t=to(e);if(t===null||t===It[Iu])return!0;const n=It.hasOwnProperty.call(t,zl)&&t[zl];if(n===Object)return!0;if(!wi(n))return!1;let r=L0.get(n);return r===void 0&&(r=Function.toString.call(n),L0.set(n,r)),r===s4}function Du(e,t,n=!0){Ha(e)===0?(n?Reflect.ownKeys(e):It.keys(e)).forEach(i=>{t(i,e[i],e)}):e.forEach((r,i)=>t(i,r,e))}function Ha(e){const t=e[ht];return t?t.type_:Lu(e)?1:Au(e)?2:Ru(e)?3:0}var A0=(e,t,n=Ha(e))=>n===2?e.has(t):It[Iu].hasOwnProperty.call(e,t),pp=(e,t,n=Ha(e))=>n===2?e.get(t):e[t],Bl=(e,t,n,r=Ha(e))=>{r===2?e.set(t,n):r===3?e.add(n):e[t]=n};function l4(e,t){return e===t?e!==0||1/e===1/t:e!==e&&t!==t}var Lu=Array.isArray,Au=e=>e instanceof Map,Ru=e=>e instanceof Set,rm=e=>typeof e=="object",wi=e=>typeof e=="function",vd=e=>typeof e=="boolean";function u4(e){const t=+e;return Number.isInteger(t)&&String(t)===e}var Rn=e=>e.copy_||e.base_,im=e=>e.modified_?e.copy_:e.base_;function hp(e,t){if(Au(e))return new Map(e);if(Ru(e))return new Set(e);if(Lu(e))return Array[Iu].slice.call(e);const n=Gb(e);if(t===!0||t==="class_only"&&!n){const r=It.getOwnPropertyDescriptors(e);delete r[ht];let i=Reflect.ownKeys(r);for(let o=0;o<i.length;o++){const a=i[o],l=r[a];l[Xs]===!1&&(l[Xs]=!0,l[fp]=!0),(l.get||l.set)&&(r[a]={[fp]:!0,[Xs]:!0,[Nl]:l[Nl],[Pa]:e[a]})}return It.create(to(e),r)}else{const r=to(e);if(r!==null&&n)return{...e};const i=It.create(r);return It.assign(i,e)}}function om(e,t=!1){return Fu(e)||qn(e)||!pn(e)||(Ha(e)>1&&It.defineProperties(e,{set:ys,add:ys,clear:ys,delete:ys}),It.freeze(e),t&&Du(e,(n,r)=>{om(r,!0)},!1)),e}function c4(){an(2)}var ys={[Pa]:c4};function Fu(e){return e===null||!rm(e)?!0:It.isFrozen(e)}var Vl="MapSet",mp="Patches",R0="ArrayMethods",Yb={};function Jr(e){const t=Yb[e];return t||an(0,e),t}var F0=e=>!!Yb[e],Ta,qb=()=>Ta,d4=(e,t)=>({drafts_:[],parent_:e,immer_:t,canAutoFreeze_:!0,unfinalizedDrafts_:0,handledSet_:new Set,processedForPatches_:new Set,mapSetPlugin_:F0(Vl)?Jr(Vl):void 0,arrayMethodsPlugin_:F0(R0)?Jr(R0):void 0});function z0(e,t){t&&(e.patchPlugin_=Jr(mp),e.patches_=[],e.inversePatches_=[],e.patchListener_=t)}function gp(e){vp(e),e.drafts_.forEach(f4),e.drafts_=null}function vp(e){e===Ta&&(Ta=e.parent_)}var N0=e=>Ta=d4(Ta,e);function f4(e){const t=e[ht];t.type_===0||t.type_===1?t.revoke_():t.revoked_=!0}function B0(e,t){t.unfinalizedDrafts_=t.drafts_.length;const n=t.drafts_[0];if(e!==void 0&&e!==n){n[ht].modified_&&(gp(t),an(4)),pn(e)&&(e=V0(t,e));const{patchPlugin_:i}=t;i&&i.generateReplacementPatches_(n[ht].base_,e,t)}else e=V0(t,n);return p4(t,e,!0),gp(t),t.patches_&&t.patchListener_(t.patches_,t.inversePatches_),e!==Wb?e:void 0}function V0(e,t){if(Fu(t))return t;const n=t[ht];if(!n)return Ul(t,e.handledSet_,e);if(!zu(n,e))return t;if(!n.modified_)return n.base_;if(!n.finalized_){const{callbacks_:r}=n;if(r)for(;r.length>0;)r.pop()(e);Qb(n,e)}return n.copy_}function p4(e,t,n=!1){!e.parent_&&e.immer_.autoFreeze_&&e.canAutoFreeze_&&om(t,n)}function Xb(e){e.finalized_=!0,e.scope_.unfinalizedDrafts_--}var zu=(e,t)=>e.scope_===t,h4=[];function Kb(e,t,n,r){const i=Rn(e),o=e.type_;if(r!==void 0&&pp(i,r,o)===t){Bl(i,r,n,o);return}if(!e.draftLocations_){const l=e.draftLocations_=new Map;Du(i,(s,u)=>{if(qn(u)){const d=l.get(u)||[];d.push(s),l.set(u,d)}})}const a=e.draftLocations_.get(t)??h4;for(const l of a)Bl(i,l,n,o)}function m4(e,t,n){e.callbacks_.push(function(i){var l;const o=t;if(!o||!zu(o,i))return;(l=i.mapSetPlugin_)==null||l.fixSetContents(o);const a=im(o);Kb(e,o.draft_??o,a,n),Qb(o,i)})}function Qb(e,t){var r;if(e.modified_&&!e.finalized_&&(e.type_===3||e.type_===1&&e.allIndicesReassigned_||(((r=e.assigned_)==null?void 0:r.size)??0)>0)){const{patchPlugin_:i}=t;if(i){const o=i.getPath(e);o&&i.generatePatches_(e,o,t)}Xb(e)}}function g4(e,t,n){const{scope_:r}=e;if(qn(n)){const i=n[ht];zu(i,r)&&i.callbacks_.push(function(){Ks(e);const a=im(i);Kb(e,n,a,t)})}else pn(n)&&e.callbacks_.push(function(){const o=Rn(e);e.type_===3?o.has(n)&&Ul(n,r.handledSet_,r):pp(o,t,e.type_)===n&&r.drafts_.length>1&&(e.assigned_.get(t)??!1)===!0&&e.copy_&&Ul(pp(e.copy_,t,e.type_),r.handledSet_,r)})}function Ul(e,t,n){return!n.immer_.autoFreeze_&&n.unfinalizedDrafts_<1||qn(e)||t.has(e)||!pn(e)||Fu(e)||(t.add(e),Du(e,(r,i)=>{if(qn(i)){const o=i[ht];if(zu(o,n)){const a=im(o);Bl(e,r,a,e.type_),Xb(o)}}else pn(i)&&Ul(i,t,n)})),e}function v4(e,t){const n=Lu(e),r={type_:n?1:0,scope_:t?t.scope_:qb(),modified_:!1,finalized_:!1,assigned_:void 0,parent_:t,base_:e,draft_:null,copy_:null,revoke_:null,isManual_:!1,callbacks_:void 0};let i=r,o=Hl;n&&(i=[r],o=Oa);const{revoke:a,proxy:l}=Proxy.revocable(i,o);return r.draft_=l,r.revoke_=a,[l,r]}var Hl={get(e,t){if(t===ht)return e;let n=e.scope_.arrayMethodsPlugin_;const r=e.type_===1&&typeof t=="string";if(r&&n!=null&&n.isArrayOperationMethod(t))return n.createMethodInterceptor(e,t);const i=Rn(e);if(!A0(i,t,e.type_))return y4(e,i,t);const o=i[t];if(e.finalized_||!pn(o)||r&&e.operationMethod&&(n!=null&&n.isMutatingArrayMethod(e.operationMethod))&&u4(t))return o;if(o===yd(e.base_,t)){Ks(e);const a=e.type_===1?+t:t,l=xp(e.scope_,o,e,a);return e.copy_[a]=l}return o},has(e,t){return t in Rn(e)},ownKeys(e){return Reflect.ownKeys(Rn(e))},set(e,t,n){const r=Zb(Rn(e),t);if(r!=null&&r.set)return r.set.call(e.draft_,n),!0;if(!e.modified_){const i=yd(Rn(e),t),o=i==null?void 0:i[ht];if(o&&o.base_===n)return e.copy_[t]=n,e.assigned_.set(t,!1),!0;if(l4(n,i)&&(n!==void 0||A0(e.base_,t,e.type_)))return!0;Ks(e),yp(e)}return e.copy_[t]===n&&(n!==void 0||t in e.copy_)||Number.isNaN(n)&&Number.isNaN(e.copy_[t])||(e.copy_[t]=n,e.assigned_.set(t,!0),g4(e,t,n)),!0},deleteProperty(e,t){return Ks(e),yd(e.base_,t)!==void 0||t in e.base_?(e.assigned_.set(t,!1),yp(e)):e.assigned_.delete(t),e.copy_&&delete e.copy_[t],!0},getOwnPropertyDescriptor(e,t){const n=Rn(e),r=Reflect.getOwnPropertyDescriptor(n,t);return r&&{[Xs]:!0,[fp]:e.type_!==1||t!=="length",[Nl]:r[Nl],[Pa]:n[t]}},defineProperty(){an(11)},getPrototypeOf(e){return to(e.base_)},setPrototypeOf(){an(12)}},Oa={};for(let e in Hl){let t=Hl[e];Oa[e]=function(){const n=arguments;return n[0]=n[0][0],t.apply(this,n)}}Oa.deleteProperty=function(e,t){return Oa.set.call(this,e,t,void 0)};Oa.set=function(e,t,n){return Hl.set.call(this,e[0],t,n,e[0])};function yd(e,t){const n=e[ht];return(n?Rn(n):e)[t]}function y4(e,t,n){var i;const r=Zb(t,n);return r?Pa in r?r[Pa]:(i=r.get)==null?void 0:i.call(e.draft_):void 0}function Zb(e,t){if(!(t in e))return;let n=to(e);for(;n;){const r=Object.getOwnPropertyDescriptor(n,t);if(r)return r;n=to(n)}}function yp(e){e.modified_||(e.modified_=!0,e.parent_&&yp(e.parent_))}function Ks(e){e.copy_||(e.assigned_=new Map,e.copy_=hp(e.base_,e.scope_.immer_.useStrictShallowCopy_))}var x4=class{constructor(e){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.useStrictIteration_=!1,this.produce=(t,n,r)=>{if(wi(t)&&!wi(n)){const o=n;n=t;const a=this;return function(s=o,...u){return a.produce(s,d=>n.call(this,d,...u))}}wi(n)||an(6),r!==void 0&&!wi(r)&&an(7);let i;if(pn(t)){const o=N0(this),a=xp(o,t,void 0);let l=!0;try{i=n(a),l=!1}finally{l?gp(o):vp(o)}return z0(o,r),B0(i,o)}else if(!t||!rm(t)){if(i=n(t),i===void 0&&(i=t),i===Wb&&(i=void 0),this.autoFreeze_&&om(i,!0),r){const o=[],a=[];Jr(mp).generateReplacementPatches_(t,i,{patches_:o,inversePatches_:a}),r(o,a)}return i}else an(1,t)},this.produceWithPatches=(t,n)=>{if(wi(t))return(a,...l)=>this.produceWithPatches(a,s=>t(s,...l));let r,i;return[this.produce(t,n,(a,l)=>{r=a,i=l}),r,i]},vd(e==null?void 0:e.autoFreeze)&&this.setAutoFreeze(e.autoFreeze),vd(e==null?void 0:e.useStrictShallowCopy)&&this.setUseStrictShallowCopy(e.useStrictShallowCopy),vd(e==null?void 0:e.useStrictIteration)&&this.setUseStrictIteration(e.useStrictIteration)}createDraft(e){pn(e)||an(8),qn(e)&&(e=b4(e));const t=N0(this),n=xp(t,e,void 0);return n[ht].isManual_=!0,vp(t),n}finishDraft(e,t){const n=e&&e[ht];(!n||!n.isManual_)&&an(9);const{scope_:r}=n;return z0(r,t),B0(void 0,r)}setAutoFreeze(e){this.autoFreeze_=e}setUseStrictShallowCopy(e){this.useStrictShallowCopy_=e}setUseStrictIteration(e){this.useStrictIteration_=e}shouldUseStrictIteration(){return this.useStrictIteration_}applyPatches(e,t){let n;for(n=t.length-1;n>=0;n--){const i=t[n];if(i.path.length===0&&i.op==="replace"){e=i.value;break}}n>-1&&(t=t.slice(n+1));const r=Jr(mp).applyPatches_;return qn(e)?r(e,t):this.produce(e,i=>r(i,t))}};function xp(e,t,n,r){const[i,o]=Au(t)?Jr(Vl).proxyMap_(t,n):Ru(t)?Jr(Vl).proxySet_(t,n):v4(t,n);return((n==null?void 0:n.scope_)??qb()).drafts_.push(i),o.callbacks_=(n==null?void 0:n.callbacks_)??[],o.key_=r,n&&r!==void 0?m4(n,o,r):o.callbacks_.push(function(s){var d;(d=s.mapSetPlugin_)==null||d.fixSetContents(o);const{patchPlugin_:u}=s;o.modified_&&u&&u.generatePatches_(o,[],s)}),i}function b4(e){return qn(e)||an(10,e),Jb(e)}function Jb(e){if(!pn(e)||Fu(e))return e;const t=e[ht];let n,r=!0;if(t){if(!t.modified_)return t.base_;t.finalized_=!0,n=hp(e,t.scope_.immer_.useStrictShallowCopy_),r=t.scope_.immer_.shouldUseStrictIteration()}else n=hp(e,!0);return Du(n,(i,o)=>{Bl(n,i,Jb(o))},r),t&&(t.finalized_=!1),n}var w4=new x4,ew=w4.produce;function tw(e){return({dispatch:n,getState:r})=>i=>o=>typeof o=="function"?o(n,r,e):i(o)}var S4=tw(),_4=tw,C4=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?Fl:Fl.apply(null,arguments)};function U0(e,t){function n(...r){if(t){let i=t(...r);if(!i)throw new Error(Vn(0));return{type:e,payload:i.payload,..."meta"in i&&{meta:i.meta},..."error"in i&&{error:i.error}}}return{type:e,payload:r[0]}}return n.toString=()=>`${e}`,n.type=e,n.match=r=>a4(r)&&r.type===e,n}var nw=class Wo extends Array{constructor(...t){super(...t),Object.setPrototypeOf(this,Wo.prototype)}static get[Symbol.species](){return Wo}concat(...t){return super.concat.apply(this,t)}prepend(...t){return t.length===1&&Array.isArray(t[0])?new Wo(...t[0].concat(this)):new Wo(...t.concat(this))}};function H0(e){return pn(e)?ew(e,()=>{}):e}function xs(e,t,n){return e.has(t)?e.get(t):e.set(t,n(t)).get(t)}function E4(e){return typeof e=="boolean"}var k4=()=>function(t){const{thunk:n=!0,immutableCheck:r=!0,serializableCheck:i=!0,actionCreatorCheck:o=!0}=t??{};let a=new nw;return n&&(E4(n)?a.push(S4):a.push(_4(n.extraArgument))),a},P4="RTK_autoBatch",W0=e=>t=>{setTimeout(t,e)},T4=(e={type:"raf"})=>t=>(...n)=>{const r=t(...n);let i=!0,o=!1,a=!1;const l=new Set,s=e.type==="tick"?queueMicrotask:e.type==="raf"?typeof window<"u"&&window.requestAnimationFrame?window.requestAnimationFrame:W0(10):e.type==="callback"?e.queueNotification:W0(e.timeout),u=()=>{a=!1,o&&(o=!1,l.forEach(d=>d()))};return Object.assign({},r,{subscribe(d){const c=()=>i&&d(),y=r.subscribe(c);return l.add(d),()=>{y(),l.delete(d)}},dispatch(d){var c;try{return i=!((c=d==null?void 0:d.meta)!=null&&c[P4]),o=!i,o&&(a||(a=!0,s(u))),r.dispatch(d)}finally{i=!0}}})},O4=e=>function(n){const{autoBatch:r=!0}=n??{};let i=new nw(e);return r&&i.push(T4(typeof r=="object"?r:void 0)),i};function j4(e){const t=k4(),{reducer:n=void 0,middleware:r,devTools:i=!0,duplicateMiddlewareCheck:o=!0,preloadedState:a=void 0,enhancers:l=void 0}=e||{};let s;if(typeof n=="function")s=n;else if(tm(n))s=i4(n);else throw new Error(Vn(1));let u;typeof r=="function"?u=r(t):u=t();let d=Fl;i&&(d=C4({trace:!1,...typeof i=="object"&&i}));const c=o4(...u),y=O4(c);let p=typeof l=="function"?l(y):y();const m=d(...p);return nm(s,a,m)}function rw(e){const t={},n=[];let r;const i={addCase(o,a){const l=typeof o=="string"?o:o.type;if(!l)throw new Error(Vn(28));if(l in t)throw new Error(Vn(29));return t[l]=a,i},addAsyncThunk(o,a){return a.pending&&(t[o.pending.type]=a.pending),a.rejected&&(t[o.rejected.type]=a.rejected),a.fulfilled&&(t[o.fulfilled.type]=a.fulfilled),a.settled&&n.push({matcher:o.settled,reducer:a.settled}),i},addMatcher(o,a){return n.push({matcher:o,reducer:a}),i},addDefaultCase(o){return r=o,i}};return e(i),[t,n,r]}function M4(e){return typeof e=="function"}function $4(e,t){let[n,r,i]=rw(t),o;if(M4(e))o=()=>H0(e());else{const l=H0(e);o=()=>l}function a(l=o(),s){let u=[n[s.type],...r.filter(({matcher:d})=>d(s)).map(({reducer:d})=>d)];return u.filter(d=>!!d).length===0&&(u=[i]),u.reduce((d,c)=>{if(c)if(qn(d)){const p=c(d,s);return p===void 0?d:p}else{if(pn(d))return ew(d,y=>c(y,s));{const y=c(d,s);if(y===void 0){if(d===null)return d;throw Error("A case reducer on a non-draftable value must not return undefined")}return y}}return d},l)}return a.getInitialState=o,a}var I4=Symbol.for("rtk-slice-createasyncthunk");function D4(e,t){return`${e}/${t}`}function L4({creators:e}={}){var n;const t=(n=e==null?void 0:e.asyncThunk)==null?void 0:n[I4];return function(i){const{name:o,reducerPath:a=o}=i;if(!o)throw new Error(Vn(11));typeof process<"u";const l=(typeof i.reducers=="function"?i.reducers(R4()):i.reducers)||{},s=Object.keys(l),u={sliceCaseReducersByName:{},sliceCaseReducersByType:{},actionCreators:{},sliceMatchers:[]},d={addCase(S,C){const T=typeof S=="string"?S:S.type;if(!T)throw new Error(Vn(12));if(T in u.sliceCaseReducersByType)throw new Error(Vn(13));return u.sliceCaseReducersByType[T]=C,d},addMatcher(S,C){return u.sliceMatchers.push({matcher:S,reducer:C}),d},exposeAction(S,C){return u.actionCreators[S]=C,d},exposeCaseReducer(S,C){return u.sliceCaseReducersByName[S]=C,d}};s.forEach(S=>{const C=l[S],T={reducerName:S,type:D4(o,S),createNotation:typeof i.reducers=="function"};z4(C)?B4(T,C,d,t):F4(T,C,d)});function c(){const[S={},C=[],T=void 0]=typeof i.extraReducers=="function"?rw(i.extraReducers):[i.extraReducers],k={...S,...u.sliceCaseReducersByType};return $4(i.initialState,_=>{for(let M in k)_.addCase(M,k[M]);for(let M of u.sliceMatchers)_.addMatcher(M.matcher,M.reducer);for(let M of C)_.addMatcher(M.matcher,M.reducer);T&&_.addDefaultCase(T)})}const y=S=>S,p=new Map,m=new WeakMap;let g;function w(S,C){return g||(g=c()),g(S,C)}function h(){return g||(g=c()),g.getInitialState()}function v(S,C=!1){function T(_){let M=_[S];return typeof M>"u"&&C&&(M=xs(m,T,h)),M}function k(_=y){const M=xs(p,C,()=>new WeakMap);return xs(M,_,()=>{const $={};for(const[D,A]of Object.entries(i.selectors??{}))$[D]=A4(A,_,()=>xs(m,_,h),C);return $})}return{reducerPath:S,getSelectors:k,get selectors(){return k(T)},selectSlice:T}}const x={name:o,reducer:w,actions:u.actionCreators,caseReducers:u.sliceCaseReducersByName,getInitialState:h,...v(a),injectInto(S,{reducerPath:C,...T}={}){const k=C??a;return S.inject({reducerPath:k,reducer:w},T),{...x,...v(k,!0)}}};return x}}function A4(e,t,n,r){function i(o,...a){let l=t(o);return typeof l>"u"&&r&&(l=n()),e(l,...a)}return i.unwrapped=e,i}var iw=L4();function R4(){function e(t,n){return{_reducerDefinitionType:"asyncThunk",payloadCreator:t,...n}}return e.withTypes=()=>e,{reducer(t){return Object.assign({[t.name](...n){return t(...n)}}[t.name],{_reducerDefinitionType:"reducer"})},preparedReducer(t,n){return{_reducerDefinitionType:"reducerWithPrepare",prepare:t,reducer:n}},asyncThunk:e}}function F4({type:e,reducerName:t,createNotation:n},r,i){let o,a;if("reducer"in r){if(n&&!N4(r))throw new Error(Vn(17));o=r.reducer,a=r.prepare}else o=r;i.addCase(e,o).exposeCaseReducer(t,o).exposeAction(t,a?U0(e,a):U0(e))}function z4(e){return e._reducerDefinitionType==="asyncThunk"}function N4(e){return e._reducerDefinitionType==="reducerWithPrepare"}function B4({type:e,reducerName:t},n,r,i){if(!i)throw new Error(Vn(18));const{payloadCreator:o,fulfilled:a,pending:l,rejected:s,settled:u,options:d}=n,c=i(e,o,d);r.exposeAction(t,c),a&&r.addCase(c.fulfilled,a),l&&r.addCase(c.pending,l),s&&r.addCase(c.rejected,s),u&&r.addMatcher(c.settled,u),r.exposeCaseReducer(t,{fulfilled:a||bs,pending:l||bs,rejected:s||bs,settled:u||bs})}function bs(){}function Vn(e){return`Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}const ow=iw({name:"cart",initialState:{items:[]},reducers:{addToCart:(e,t)=>{const n=t.payload,r=e.items.find(i=>i.id===t.payload.id);r&&r.quantity>=n.stock||(r?r.quantity=(r.quantity||0)+1:e.items.push({...t.payload,quantity:1}))},removeFromCart:(e,t)=>{const n=t.payload;e.items=e.items.filter(r=>r.id!==n.id)},clearCart:e=>{e.items=[]},addAllToCart:(e,t)=>{const n=t.payload.map(r=>({...r,quantity:r.quantity||1}));e.items.push(...n)},incrementQuantity:(e,t)=>{const{id:n,stock:r}=t.payload,i=e.items.find(o=>o.id===n);i&&i.quantity<r&&(i.quantity+=1)},decrementQuantity:(e,t)=>{const n=e.items.find(r=>r.id===t.payload);n&&n.quantity>1&&(n.quantity-=1)}}}),{addToCart:ho,removeFromCart:V4,clearCart:am,addAllToCart:U4,incrementQuantity:H4,decrementQuantity:W4}=ow.actions,G4=ow.reducer;function aw(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var i=e.length;for(t=0;t<i;t++)e[t]&&(n=aw(e[t]))&&(r&&(r+=" "),r+=n)}else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function Gr(){for(var e,t,n=0,r="",i=arguments.length;n<i;n++)(e=arguments[n])&&(t=aw(e))&&(r&&(r+=" "),r+=t);return r}function Y4(e){if(!e||typeof document>"u")return;let t=document.head||document.getElementsByTagName("head")[0],n=document.createElement("style");n.type="text/css",t.firstChild?t.insertBefore(n,t.firstChild):t.appendChild(n),n.styleSheet?n.styleSheet.cssText=e:n.appendChild(document.createTextNode(e))}Y4(`:root{--toastify-color-light: #fff;--toastify-color-dark: #121212;--toastify-color-info: #3498db;--toastify-color-success: #07bc0c;--toastify-color-warning: #f1c40f;--toastify-color-error: hsl(6, 78%, 57%);--toastify-color-transparent: rgba(255, 255, 255, .7);--toastify-icon-color-info: var(--toastify-color-info);--toastify-icon-color-success: var(--toastify-color-success);--toastify-icon-color-warning: var(--toastify-color-warning);--toastify-icon-color-error: var(--toastify-color-error);--toastify-container-width: fit-content;--toastify-toast-width: 320px;--toastify-toast-offset: 16px;--toastify-toast-top: max(var(--toastify-toast-offset), env(safe-area-inset-top));--toastify-toast-right: max(var(--toastify-toast-offset), env(safe-area-inset-right));--toastify-toast-left: max(var(--toastify-toast-offset), env(safe-area-inset-left));--toastify-toast-bottom: max(var(--toastify-toast-offset), env(safe-area-inset-bottom));--toastify-toast-background: #fff;--toastify-toast-padding: 14px;--toastify-toast-min-height: 64px;--toastify-toast-max-height: 800px;--toastify-toast-bd-radius: 6px;--toastify-toast-shadow: 0px 4px 12px rgba(0, 0, 0, .1);--toastify-font-family: sans-serif;--toastify-z-index: 9999;--toastify-text-color-light: #757575;--toastify-text-color-dark: #fff;--toastify-text-color-info: #fff;--toastify-text-color-success: #fff;--toastify-text-color-warning: #fff;--toastify-text-color-error: #fff;--toastify-spinner-color: #616161;--toastify-spinner-color-empty-area: #e0e0e0;--toastify-color-progress-light: linear-gradient(to right, #4cd964, #5ac8fa, #007aff, #34aadc, #5856d6, #ff2d55);--toastify-color-progress-dark: #bb86fc;--toastify-color-progress-info: var(--toastify-color-info);--toastify-color-progress-success: var(--toastify-color-success);--toastify-color-progress-warning: var(--toastify-color-warning);--toastify-color-progress-error: var(--toastify-color-error);--toastify-color-progress-bgo: .2}.Toastify__toast-container{z-index:var(--toastify-z-index);-webkit-transform:translate3d(0,0,var(--toastify-z-index));position:fixed;width:var(--toastify-container-width);box-sizing:border-box;color:#fff;display:flex;flex-direction:column}.Toastify__toast-container--top-left{top:var(--toastify-toast-top);left:var(--toastify-toast-left)}.Toastify__toast-container--top-center{top:var(--toastify-toast-top);left:50%;transform:translate(-50%);align-items:center}.Toastify__toast-container--top-right{top:var(--toastify-toast-top);right:var(--toastify-toast-right);align-items:end}.Toastify__toast-container--bottom-left{bottom:var(--toastify-toast-bottom);left:var(--toastify-toast-left)}.Toastify__toast-container--bottom-center{bottom:var(--toastify-toast-bottom);left:50%;transform:translate(-50%);align-items:center}.Toastify__toast-container--bottom-right{bottom:var(--toastify-toast-bottom);right:var(--toastify-toast-right);align-items:end}.Toastify__toast{--y: 0;position:relative;touch-action:none;width:var(--toastify-toast-width);min-height:var(--toastify-toast-min-height);box-sizing:border-box;margin-bottom:1rem;padding:var(--toastify-toast-padding);border-radius:var(--toastify-toast-bd-radius);box-shadow:var(--toastify-toast-shadow);max-height:var(--toastify-toast-max-height);font-family:var(--toastify-font-family);z-index:0;display:flex;flex:1 auto;align-items:center;word-break:break-word}@media only screen and (max-width: 480px){.Toastify__toast-container{width:100vw;left:env(safe-area-inset-left);margin:0}.Toastify__toast-container--top-left,.Toastify__toast-container--top-center,.Toastify__toast-container--top-right{top:env(safe-area-inset-top);transform:translate(0)}.Toastify__toast-container--bottom-left,.Toastify__toast-container--bottom-center,.Toastify__toast-container--bottom-right{bottom:env(safe-area-inset-bottom);transform:translate(0)}.Toastify__toast-container--rtl{right:env(safe-area-inset-right);left:initial}.Toastify__toast{--toastify-toast-width: 100%;margin-bottom:0;border-radius:0}}.Toastify__toast-container[data-stacked=true]{width:var(--toastify-toast-width)}.Toastify__toast--stacked{position:absolute;width:100%;transform:translate3d(0,var(--y),0) scale(var(--s));transition:transform .3s}.Toastify__toast--stacked[data-collapsed] .Toastify__toast-body,.Toastify__toast--stacked[data-collapsed] .Toastify__close-button{transition:opacity .1s}.Toastify__toast--stacked[data-collapsed=false]{overflow:visible}.Toastify__toast--stacked[data-collapsed=true]:not(:last-child)>*{opacity:0}.Toastify__toast--stacked:after{content:"";position:absolute;left:0;right:0;height:calc(var(--g) * 1px);bottom:100%}.Toastify__toast--stacked[data-pos=top]{top:0}.Toastify__toast--stacked[data-pos=bot]{bottom:0}.Toastify__toast--stacked[data-pos=bot].Toastify__toast--stacked:before{transform-origin:top}.Toastify__toast--stacked[data-pos=top].Toastify__toast--stacked:before{transform-origin:bottom}.Toastify__toast--stacked:before{content:"";position:absolute;left:0;right:0;bottom:0;height:100%;transform:scaleY(3);z-index:-1}.Toastify__toast--rtl{direction:rtl}.Toastify__toast--close-on-click{cursor:pointer}.Toastify__toast-icon{margin-inline-end:10px;width:22px;flex-shrink:0;display:flex}.Toastify--animate{animation-fill-mode:both;animation-duration:.5s}.Toastify--animate-icon{animation-fill-mode:both;animation-duration:.3s}.Toastify__toast-theme--dark{background:var(--toastify-color-dark);color:var(--toastify-text-color-dark)}.Toastify__toast-theme--light,.Toastify__toast-theme--colored.Toastify__toast--default{background:var(--toastify-color-light);color:var(--toastify-text-color-light)}.Toastify__toast-theme--colored.Toastify__toast--info{color:var(--toastify-text-color-info);background:var(--toastify-color-info)}.Toastify__toast-theme--colored.Toastify__toast--success{color:var(--toastify-text-color-success);background:var(--toastify-color-success)}.Toastify__toast-theme--colored.Toastify__toast--warning{color:var(--toastify-text-color-warning);background:var(--toastify-color-warning)}.Toastify__toast-theme--colored.Toastify__toast--error{color:var(--toastify-text-color-error);background:var(--toastify-color-error)}.Toastify__progress-bar-theme--light{background:var(--toastify-color-progress-light)}.Toastify__progress-bar-theme--dark{background:var(--toastify-color-progress-dark)}.Toastify__progress-bar--info{background:var(--toastify-color-progress-info)}.Toastify__progress-bar--success{background:var(--toastify-color-progress-success)}.Toastify__progress-bar--warning{background:var(--toastify-color-progress-warning)}.Toastify__progress-bar--error{background:var(--toastify-color-progress-error)}.Toastify__progress-bar-theme--colored.Toastify__progress-bar--info,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--success,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--warning,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--error{background:var(--toastify-color-transparent)}.Toastify__close-button{color:#fff;position:absolute;top:6px;right:6px;background:transparent;outline:none;border:none;padding:0;cursor:pointer;opacity:.7;transition:.3s ease;z-index:1}.Toastify__toast--rtl .Toastify__close-button{left:6px;right:unset}.Toastify__close-button--light{color:#000;opacity:.3}.Toastify__close-button>svg{fill:currentColor;height:16px;width:14px}.Toastify__close-button:hover,.Toastify__close-button:focus{opacity:1}@keyframes Toastify__trackProgress{0%{transform:scaleX(1)}to{transform:scaleX(0)}}.Toastify__progress-bar{position:absolute;bottom:0;left:0;width:100%;height:100%;z-index:1;opacity:.7;transform-origin:left}.Toastify__progress-bar--animated{animation:Toastify__trackProgress linear 1 forwards}.Toastify__progress-bar--controlled{transition:transform .2s}.Toastify__progress-bar--rtl{right:0;left:initial;transform-origin:right;border-bottom-left-radius:initial}.Toastify__progress-bar--wrp{position:absolute;overflow:hidden;bottom:0;left:0;width:100%;height:5px;border-bottom-left-radius:var(--toastify-toast-bd-radius);border-bottom-right-radius:var(--toastify-toast-bd-radius)}.Toastify__progress-bar--wrp[data-hidden=true]{opacity:0}.Toastify__progress-bar--bg{opacity:var(--toastify-color-progress-bgo);width:100%;height:100%}.Toastify__spinner{width:20px;height:20px;box-sizing:border-box;border:2px solid;border-radius:100%;border-color:var(--toastify-spinner-color-empty-area);border-right-color:var(--toastify-spinner-color);animation:Toastify__spin .65s linear infinite}@keyframes Toastify__bounceInRight{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(3000px,0,0)}60%{opacity:1;transform:translate3d(-25px,0,0)}75%{transform:translate3d(10px,0,0)}90%{transform:translate3d(-5px,0,0)}to{transform:none}}@keyframes Toastify__bounceOutRight{20%{opacity:1;transform:translate3d(-20px,var(--y),0)}to{opacity:0;transform:translate3d(2000px,var(--y),0)}}@keyframes Toastify__bounceInLeft{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(-3000px,0,0)}60%{opacity:1;transform:translate3d(25px,0,0)}75%{transform:translate3d(-10px,0,0)}90%{transform:translate3d(5px,0,0)}to{transform:none}}@keyframes Toastify__bounceOutLeft{20%{opacity:1;transform:translate3d(20px,var(--y),0)}to{opacity:0;transform:translate3d(-2000px,var(--y),0)}}@keyframes Toastify__bounceInUp{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,3000px,0)}60%{opacity:1;transform:translate3d(0,-20px,0)}75%{transform:translate3d(0,10px,0)}90%{transform:translate3d(0,-5px,0)}to{transform:translateZ(0)}}@keyframes Toastify__bounceOutUp{20%{transform:translate3d(0,calc(var(--y) - 10px),0)}40%,45%{opacity:1;transform:translate3d(0,calc(var(--y) + 20px),0)}to{opacity:0;transform:translate3d(0,-2000px,0)}}@keyframes Toastify__bounceInDown{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,-3000px,0)}60%{opacity:1;transform:translate3d(0,25px,0)}75%{transform:translate3d(0,-10px,0)}90%{transform:translate3d(0,5px,0)}to{transform:none}}@keyframes Toastify__bounceOutDown{20%{transform:translate3d(0,calc(var(--y) - 10px),0)}40%,45%{opacity:1;transform:translate3d(0,calc(var(--y) + 20px),0)}to{opacity:0;transform:translate3d(0,2000px,0)}}.Toastify__bounce-enter--top-left,.Toastify__bounce-enter--bottom-left{animation-name:Toastify__bounceInLeft}.Toastify__bounce-enter--top-right,.Toastify__bounce-enter--bottom-right{animation-name:Toastify__bounceInRight}.Toastify__bounce-enter--top-center{animation-name:Toastify__bounceInDown}.Toastify__bounce-enter--bottom-center{animation-name:Toastify__bounceInUp}.Toastify__bounce-exit--top-left,.Toastify__bounce-exit--bottom-left{animation-name:Toastify__bounceOutLeft}.Toastify__bounce-exit--top-right,.Toastify__bounce-exit--bottom-right{animation-name:Toastify__bounceOutRight}.Toastify__bounce-exit--top-center{animation-name:Toastify__bounceOutUp}.Toastify__bounce-exit--bottom-center{animation-name:Toastify__bounceOutDown}@keyframes Toastify__zoomIn{0%{opacity:0;transform:scale3d(.3,.3,.3)}50%{opacity:1}}@keyframes Toastify__zoomOut{0%{opacity:1}50%{opacity:0;transform:translate3d(0,var(--y),0) scale3d(.3,.3,.3)}to{opacity:0}}.Toastify__zoom-enter{animation-name:Toastify__zoomIn}.Toastify__zoom-exit{animation-name:Toastify__zoomOut}@keyframes Toastify__flipIn{0%{transform:perspective(400px) rotateX(90deg);animation-timing-function:ease-in;opacity:0}40%{transform:perspective(400px) rotateX(-20deg);animation-timing-function:ease-in}60%{transform:perspective(400px) rotateX(10deg);opacity:1}80%{transform:perspective(400px) rotateX(-5deg)}to{transform:perspective(400px)}}@keyframes Toastify__flipOut{0%{transform:translate3d(0,var(--y),0) perspective(400px)}30%{transform:translate3d(0,var(--y),0) perspective(400px) rotateX(-20deg);opacity:1}to{transform:translate3d(0,var(--y),0) perspective(400px) rotateX(90deg);opacity:0}}.Toastify__flip-enter{animation-name:Toastify__flipIn}.Toastify__flip-exit{animation-name:Toastify__flipOut}@keyframes Toastify__slideInRight{0%{transform:translate3d(110%,0,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInLeft{0%{transform:translate3d(-110%,0,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInUp{0%{transform:translate3d(0,110%,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInDown{0%{transform:translate3d(0,-110%,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideOutRight{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(110%,var(--y),0)}}@keyframes Toastify__slideOutLeft{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(-110%,var(--y),0)}}@keyframes Toastify__slideOutDown{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(0,500px,0)}}@keyframes Toastify__slideOutUp{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(0,-500px,0)}}.Toastify__slide-enter--top-left,.Toastify__slide-enter--bottom-left{animation-name:Toastify__slideInLeft}.Toastify__slide-enter--top-right,.Toastify__slide-enter--bottom-right{animation-name:Toastify__slideInRight}.Toastify__slide-enter--top-center{animation-name:Toastify__slideInDown}.Toastify__slide-enter--bottom-center{animation-name:Toastify__slideInUp}.Toastify__slide-exit--top-left,.Toastify__slide-exit--bottom-left{animation-name:Toastify__slideOutLeft;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--top-right,.Toastify__slide-exit--bottom-right{animation-name:Toastify__slideOutRight;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--top-center{animation-name:Toastify__slideOutUp;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--bottom-center{animation-name:Toastify__slideOutDown;animation-timing-function:ease-in;animation-duration:.3s}@keyframes Toastify__spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}
`);var Wa=e=>typeof e=="number"&&!isNaN(e),ei=e=>typeof e=="string",Xn=e=>typeof e=="function",q4=e=>ei(e)||Wa(e),bp=e=>ei(e)||Xn(e)?e:null,X4=(e,t)=>e===!1||Wa(e)&&e>0?e:t,wp=e=>b.isValidElement(e)||ei(e)||Xn(e)||Wa(e);function K4(e,t,n=300){let{scrollHeight:r,style:i}=e;requestAnimationFrame(()=>{i.minHeight="initial",i.height=r+"px",i.transition=`all ${n}ms`,requestAnimationFrame(()=>{i.height="0",i.padding="0",i.margin="0",setTimeout(t,n)})})}function Q4({enter:e,exit:t,appendPosition:n=!1,collapse:r=!0,collapseDuration:i=300}){return function({children:o,position:a,preventExitTransition:l,done:s,nodeRef:u,isIn:d,playToast:c}){let y=n?`${e}--${a}`:e,p=n?`${t}--${a}`:t,m=b.useRef(0);return b.useLayoutEffect(()=>{let g=u.current,w=y.split(" "),h=v=>{v.target===u.current&&(c(),g.removeEventListener("animationend",h),g.removeEventListener("animationcancel",h),m.current===0&&v.type!=="animationcancel"&&g.classList.remove(...w))};g.classList.add(...w),g.addEventListener("animationend",h),g.addEventListener("animationcancel",h)},[]),b.useEffect(()=>{let g=u.current,w=()=>{g.removeEventListener("animationend",w),r?K4(g,s,i):s()};d||(l?w():(m.current=1,g.className+=` ${p}`,g.addEventListener("animationend",w)))},[d]),K.createElement(K.Fragment,null,o)}}function G0(e,t){return{content:sw(e.content,e.props),containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,reason:e.removalReason,status:t}}function sw(e,t,n=!1){return b.isValidElement(e)&&!ei(e.type)?b.cloneElement(e,{closeToast:t.closeToast,toastProps:t,data:t.data,isPaused:n}):Xn(e)?e({closeToast:t.closeToast,toastProps:t,data:t.data,isPaused:n}):e}function Z4({closeToast:e,theme:t,ariaLabel:n="close"}){return K.createElement("button",{className:`Toastify__close-button Toastify__close-button--${t}`,type:"button",onClick:r=>{r.stopPropagation(),e(!0)},"aria-label":n},K.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},K.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function J4({delay:e,isRunning:t,closeToast:n,type:r="default",hide:i,className:o,controlledProgress:a,progress:l,rtl:s,isIn:u,theme:d}){let c=i||a&&l===0,y={animationDuration:`${e}ms`,animationPlayState:t?"running":"paused"};a&&(y.transform=`scaleX(${l})`);let p=Gr("Toastify__progress-bar",a?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${d}`,`Toastify__progress-bar--${r}`,{"Toastify__progress-bar--rtl":s}),m=Xn(o)?o({rtl:s,type:r,defaultClassName:p}):Gr(p,o),g={[a&&l>=1?"onTransitionEnd":"onAnimationEnd"]:a&&l<1?null:()=>{u&&n()}};return K.createElement("div",{className:"Toastify__progress-bar--wrp","data-hidden":c},K.createElement("div",{className:`Toastify__progress-bar--bg Toastify__progress-bar-theme--${d} Toastify__progress-bar--${r}`}),K.createElement("div",{role:"progressbar","aria-hidden":c?"true":"false","aria-label":"notification timer",className:m,style:y,...g}))}var ej=1,lw=()=>`${ej++}`;function tj(e,t,n){let r=1,i=0,o=[],a=[],l=t,s=new Map,u=new Set,d=v=>(u.add(v),()=>u.delete(v)),c=()=>{a=Array.from(s.values()),u.forEach(v=>v())},y=({containerId:v,toastId:x,updateId:S})=>{let C=v?v!==e:e!==1,T=s.has(x)&&S==null;return C||T},p=(v,x)=>{s.forEach(S=>{var C;(x==null||x===S.props.toastId)&&((C=S.toggle)==null||C.call(S,v))})},m=v=>{var x,S;(S=(x=v.props)==null?void 0:x.onClose)==null||S.call(x,v.removalReason),v.isActive=!1},g=v=>{if(v==null)s.forEach(m);else{let x=s.get(v);x&&m(x)}c()},w=()=>{i-=o.length,o=[]},h=v=>{var x,S;let{toastId:C,updateId:T}=v.props,k=T==null;v.staleId&&s.delete(v.staleId),v.isActive=!0,s.set(C,v),c(),n(G0(v,k?"added":"updated")),k&&((S=(x=v.props).onOpen)==null||S.call(x))};return{id:e,props:l,observe:d,toggle:p,removeToast:g,toasts:s,clearQueue:w,buildToast:(v,x)=>{if(y(x))return;let{toastId:S,updateId:C,data:T,staleId:k,delay:_}=x,M=C==null;M&&i++;let $={...l,style:l.toastStyle,key:r++,...Object.fromEntries(Object.entries(x).filter(([A,j])=>j!=null)),toastId:S,updateId:C,data:T,isIn:!1,className:bp(x.className||l.toastClassName),progressClassName:bp(x.progressClassName||l.progressClassName),autoClose:x.isLoading?!1:X4(x.autoClose,l.autoClose),closeToast(A){s.get(S).removalReason=A,g(S)},deleteToast(){let A=s.get(S);if(A!=null){if(n(G0(A,"removed")),s.delete(S),i--,i<0&&(i=0),o.length>0){h(o.shift());return}c()}}};$.closeButton=l.closeButton,x.closeButton===!1||wp(x.closeButton)?$.closeButton=x.closeButton:x.closeButton===!0&&($.closeButton=wp(l.closeButton)?l.closeButton:!0);let D={content:v,props:$,staleId:k};l.limit&&l.limit>0&&i>l.limit&&M?o.push(D):Wa(_)?setTimeout(()=>{h(D)},_):h(D)},setProps(v){l=v},setToggle:(v,x)=>{let S=s.get(v);S&&(S.toggle=x)},isToastActive:v=>{var x;return(x=s.get(v))==null?void 0:x.isActive},getSnapshot:()=>a}}var ft=new Map,ja=[],Sp=new Set,nj=e=>Sp.forEach(t=>t(e)),uw=()=>ft.size>0;function rj(){ja.forEach(e=>dw(e.content,e.options)),ja=[]}var ij=(e,{containerId:t})=>{var n;return(n=ft.get(t||1))==null?void 0:n.toasts.get(e)};function cw(e,t){var n;if(t)return!!((n=ft.get(t))!=null&&n.isToastActive(e));let r=!1;return ft.forEach(i=>{i.isToastActive(e)&&(r=!0)}),r}function oj(e){if(!uw()){ja=ja.filter(t=>e!=null&&t.options.toastId!==e);return}if(e==null||q4(e))ft.forEach(t=>{t.removeToast(e)});else if(e&&("containerId"in e||"id"in e)){let t=ft.get(e.containerId);t?t.removeToast(e.id):ft.forEach(n=>{n.removeToast(e.id)})}}var aj=(e={})=>{ft.forEach(t=>{t.props.limit&&(!e.containerId||t.id===e.containerId)&&t.clearQueue()})};function dw(e,t){wp(e)&&(uw()||ja.push({content:e,options:t}),ft.forEach(n=>{n.buildToast(e,t)}))}function sj(e){var t;(t=ft.get(e.containerId||1))==null||t.setToggle(e.id,e.fn)}function fw(e,t){ft.forEach(n=>{(t==null||!(t!=null&&t.containerId)||(t==null?void 0:t.containerId)===n.id)&&n.toggle(e,t==null?void 0:t.id)})}function lj(e){let t=e.containerId||1;return{subscribe(n){let r=tj(t,e,nj);ft.set(t,r);let i=r.observe(n);return rj(),()=>{i(),ft.delete(t)}},setProps(n){var r;(r=ft.get(t))==null||r.setProps(n)},getSnapshot(){var n;return(n=ft.get(t))==null?void 0:n.getSnapshot()}}}function uj(e){return Sp.add(e),()=>{Sp.delete(e)}}function cj(e){return e&&(ei(e.toastId)||Wa(e.toastId))?e.toastId:lw()}function Ga(e,t){return dw(e,t),t.toastId}function Nu(e,t){return{...t,type:t&&t.type||e,toastId:cj(t)}}function Bu(e){return(t,n)=>Ga(t,Nu(e,n))}function q(e,t){return Ga(e,Nu("default",t))}q.loading=(e,t)=>Ga(e,Nu("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...t}));function dj(e,{pending:t,error:n,success:r},i){let o;t&&(o=ei(t)?q.loading(t,i):q.loading(t.render,{...i,...t}));let a={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},l=(u,d,c)=>{if(d==null){q.dismiss(o);return}let y={type:u,...a,...i,data:c},p=ei(d)?{render:d}:d;return o?q.update(o,{...y,...p}):q(p.render,{...y,...p}),c},s=Xn(e)?e():e;return s.then(u=>l("success",r,u)).catch(u=>l("error",n,u)),s}q.promise=dj;q.success=Bu("success");q.info=Bu("info");q.error=Bu("error");q.warning=Bu("warning");q.warn=q.warning;q.dark=(e,t)=>Ga(e,Nu("default",{theme:"dark",...t}));function fj(e){oj(e)}q.dismiss=fj;q.clearWaitingQueue=aj;q.isActive=cw;q.update=(e,t={})=>{let n=ij(e,t);if(n){let{props:r,content:i}=n,o={delay:100,...r,...t,toastId:t.toastId||e,updateId:lw()};o.toastId!==e&&(o.staleId=e);let a=o.render||i;delete o.render,Ga(a,o)}};q.done=e=>{q.update(e,{progress:1})};q.onChange=uj;q.play=e=>fw(!0,e);q.pause=e=>fw(!1,e);function pj(e){var t;let{subscribe:n,getSnapshot:r,setProps:i}=b.useRef(lj(e)).current;i(e);let o=(t=b.useSyncExternalStore(n,r,r))==null?void 0:t.slice();function a(l){if(!o)return[];let s=new Map;return e.newestOnTop&&o.reverse(),o.forEach(u=>{let{position:d}=u.props;s.has(d)||s.set(d,[]),s.get(d).push(u)}),Array.from(s,u=>l(u[0],u[1]))}return{getToastToRender:a,isToastActive:cw,count:o==null?void 0:o.length}}function hj(e){let[t,n]=b.useState(!1),[r,i]=b.useState(!1),o=b.useRef(null),a=b.useRef({start:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,didMove:!1}).current,{autoClose:l,pauseOnHover:s,closeToast:u,onClick:d,closeOnClick:c}=e;sj({id:e.toastId,containerId:e.containerId,fn:n}),b.useEffect(()=>{if(e.pauseOnFocusLoss)return y(),()=>{p()}},[e.pauseOnFocusLoss]);function y(){document.hasFocus()||h(),window.addEventListener("focus",w),window.addEventListener("blur",h)}function p(){window.removeEventListener("focus",w),window.removeEventListener("blur",h)}function m(k){if(e.draggable===!0||e.draggable===k.pointerType){v();let _=o.current;a.canCloseOnClick=!0,a.canDrag=!0,_.style.transition="none",e.draggableDirection==="x"?(a.start=k.clientX,a.removalDistance=_.offsetWidth*(e.draggablePercent/100)):(a.start=k.clientY,a.removalDistance=_.offsetHeight*(e.draggablePercent===80?e.draggablePercent*1.5:e.draggablePercent)/100)}}function g(k){let{top:_,bottom:M,left:$,right:D}=o.current.getBoundingClientRect();k.nativeEvent.type!=="touchend"&&e.pauseOnHover&&k.clientX>=$&&k.clientX<=D&&k.clientY>=_&&k.clientY<=M?h():w()}function w(){n(!0)}function h(){n(!1)}function v(){a.didMove=!1,document.addEventListener("pointermove",S),document.addEventListener("pointerup",C)}function x(){document.removeEventListener("pointermove",S),document.removeEventListener("pointerup",C)}function S(k){let _=o.current;if(a.canDrag&&_){a.didMove=!0,t&&h(),e.draggableDirection==="x"?a.delta=k.clientX-a.start:a.delta=k.clientY-a.start,a.start!==k.clientX&&(a.canCloseOnClick=!1);let M=e.draggableDirection==="x"?`${a.delta}px, var(--y)`:`0, calc(${a.delta}px + var(--y))`;_.style.transform=`translate3d(${M},0)`,_.style.opacity=`${1-Math.abs(a.delta/a.removalDistance)}`}}function C(){x();let k=o.current;if(a.canDrag&&a.didMove&&k){if(a.canDrag=!1,Math.abs(a.delta)>a.removalDistance){i(!0),e.closeToast(!0),e.collapseAll();return}k.style.transition="transform 0.2s, opacity 0.2s",k.style.removeProperty("transform"),k.style.removeProperty("opacity")}}let T={onPointerDown:m,onPointerUp:g};return l&&s&&(T.onMouseEnter=h,e.stacked||(T.onMouseLeave=w)),c&&(T.onClick=k=>{d&&d(k),a.canCloseOnClick&&u(!0)}),{playToast:w,pauseToast:h,isRunning:t,preventExitTransition:r,toastRef:o,eventHandlers:T}}var mj=typeof window<"u"?b.useLayoutEffect:b.useEffect,Vu=({theme:e,type:t,isLoading:n,...r})=>K.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:e==="colored"?"currentColor":`var(--toastify-icon-color-${t})`,...r});function gj(e){return K.createElement(Vu,{...e},K.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))}function vj(e){return K.createElement(Vu,{...e},K.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))}function yj(e){return K.createElement(Vu,{...e},K.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))}function xj(e){return K.createElement(Vu,{...e},K.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))}function bj(){return K.createElement("div",{className:"Toastify__spinner"})}var _p={info:vj,warning:gj,success:yj,error:xj,spinner:bj},wj=e=>e in _p;function Sj({theme:e,type:t,isLoading:n,icon:r}){let i=null,o={theme:e,type:t};return r===!1||(Xn(r)?i=r({...o,isLoading:n}):b.isValidElement(r)?i=b.cloneElement(r,o):n?i=_p.spinner():wj(t)&&(i=_p[t](o))),i}var _j=e=>{let{isRunning:t,preventExitTransition:n,toastRef:r,eventHandlers:i,playToast:o}=hj(e),{closeButton:a,children:l,autoClose:s,onClick:u,type:d,hideProgressBar:c,closeToast:y,transition:p,position:m,className:g,style:w,progressClassName:h,updateId:v,role:x,progress:S,rtl:C,toastId:T,deleteToast:k,isIn:_,isLoading:M,closeOnClick:$,theme:D,ariaLabel:A}=e,j=Gr("Toastify__toast",`Toastify__toast-theme--${D}`,`Toastify__toast--${d}`,{"Toastify__toast--rtl":C},{"Toastify__toast--close-on-click":$}),F=Xn(g)?g({rtl:C,position:m,type:d,defaultClassName:j}):Gr(j,g),R=Sj(e),L=!!S||!s,O={closeToast:y,type:d,theme:D},P=null;return a===!1||(Xn(a)?P=a(O):b.isValidElement(a)?P=b.cloneElement(a,O):P=Z4(O)),K.createElement(p,{isIn:_,done:k,position:m,preventExitTransition:n,nodeRef:r,playToast:o},K.createElement("div",{id:T,tabIndex:0,onClick:u,"data-in":_,className:F,...i,style:w,ref:r,..._&&{role:x,"aria-label":A}},R!=null&&K.createElement("div",{className:Gr("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!M})},R),sw(l,e,!t),P,!e.customProgressBar&&K.createElement(J4,{...v&&!L?{key:`p-${v}`}:{},rtl:C,theme:D,delay:s,isRunning:t,isIn:_,closeToast:y,hide:c,type:d,className:h,controlledProgress:L,progress:S||0})))},Cj=(e,t=!1)=>({enter:`Toastify--animate Toastify__${e}-enter`,exit:`Toastify--animate Toastify__${e}-exit`,appendPosition:t}),Ej=Q4(Cj("bounce",!0)),kj={position:"top-right",transition:Ej,autoClose:5e3,closeButton:!0,pauseOnHover:!0,pauseOnFocusLoss:!0,draggable:"touch",draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light","aria-label":"Notifications Alt+T",hotKeys:e=>e.altKey&&e.code==="KeyT"};function Or(e){let t={...kj,...e},n=e.stacked,[r,i]=b.useState(!0),o=b.useRef(null),{getToastToRender:a,isToastActive:l,count:s}=pj(t),{className:u,style:d,rtl:c,containerId:y,hotKeys:p}=t;function m(w){let h=Gr("Toastify__toast-container",`Toastify__toast-container--${w}`,{"Toastify__toast-container--rtl":c});return Xn(u)?u({position:w,rtl:c,defaultClassName:h}):Gr(h,bp(u))}function g(){n&&(i(!0),q.play())}return mj(()=>{var w;if(n){let h=o.current.querySelectorAll('[data-in="true"]'),v=12,x=(w=t.position)==null?void 0:w.includes("top"),S=0,C=0;Array.from(h).reverse().forEach((T,k)=>{let _=T;_.classList.add("Toastify__toast--stacked"),k>0&&(_.dataset.collapsed=`${r}`),_.dataset.pos||(_.dataset.pos=x?"top":"bot");let M=S*(r?.2:1)+(r?0:v*k);_.style.setProperty("--y",`${x?M:M*-1}px`),_.style.setProperty("--g",`${v}`),_.style.setProperty("--s",`${1-(r?C:0)}`),S+=_.offsetHeight,C+=.025})}},[r,s,n]),b.useEffect(()=>{function w(h){var v;let x=o.current;p(h)&&((v=x.querySelector('[tabIndex="0"]'))==null||v.focus(),i(!1),q.pause()),h.key==="Escape"&&(document.activeElement===x||x!=null&&x.contains(document.activeElement))&&(i(!0),q.play())}return document.addEventListener("keydown",w),()=>{document.removeEventListener("keydown",w)}},[p]),K.createElement("section",{ref:o,className:"Toastify",id:y,onMouseEnter:()=>{n&&(i(!1),q.pause())},onMouseLeave:g,"aria-live":"polite","aria-atomic":"false","aria-relevant":"additions text","aria-label":t["aria-label"]},a((w,h)=>{let v=h.length?{...d}:{...d,pointerEvents:"none"};return K.createElement("div",{tabIndex:-1,className:m(w),"data-stacked":n,style:v,key:`c-${w}`},h.map(({content:x,props:S})=>K.createElement(_j,{...S,stacked:n,collapseAll:g,isIn:l(S.toastId,S.containerId),key:`t-${S.key}`},x)))}))}const no="/Didiv/assets/nofoto-2f8d9d99.png",Pj=E.div`
`,Tj=E.div`
display: flex;
    justify-content: space-between;
    align-items: center;
        margin-bottom: 10px;

    
`,Oj=E.h2`
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

`,jj=E.div`
width: 100vw;
height:30vw;

  @media screen and (min-width: 768px) {
  width: 60vw;
  height:80vw;
  }
   @media screen and (min-width: 1200px) {
 
  height:40vw;
  }
      
`;E.div``;const Mj=E.div`
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
`,$j=E.div`
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
`,sm=E.div`
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
`,Ij=E.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  padding:20px;
`,Dj=E.div`
  padding: 16px;
      display: flex;
    align-content: center;
    align-items: center;
        justify-content: space-between;
`,Lj=E.p`
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

`;const pw=E.div.attrs({className:"card-buttons"})`
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
`,Wl=E.button`
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
`;const Aj=E.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  flex-wrap: wrap;
  gap: 5px;
`,xd=E.button`
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
`,Rj=E.div`
  position: relative;
  display: inline-block;
   @media screen and (max-width: 768px) {
  display:none;
  }

`,Fj=E.button`
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
`,zj=E.div`
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
`,hw=E.div`
  text-align: center;
  width: 100px;
 
`,mw=E.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 2px;
`,gw=E.span`
  font-size: 18px;
  font-weight: 600;
  color: ${({$discount:e})=>"#111"};
`,vw=E.span`
  font-size: 13px;
  color: #999;
  text-decoration: line-through;
`,yw=E.span`
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
`,xw=iw({name:"favorites",initialState:{items:[]},reducers:{toggleFavorite:(e,t)=>{const n=t.payload;e.items.find(i=>i.id===n.id)?e.items=e.items.filter(i=>i.id!==n.id):e.items.push(n)},clearFavorite:e=>{e.items=[]}}}),{toggleFavorite:ai,clearFavorite:Nj}=xw.actions,Bj=xw.reducer,bw=()=>{const e=jn(),[t,n]=b.useState([]),r=Ye(l=>l.favorites.items),i=Ye(l=>l.cart.items);b.useEffect(()=>{const l=new Date,s=new Date;s.setDate(l.getDate()-7);const u=s.toISOString();fetch(`https://backenddidiv-production.up.railway.app/api/products?populate=*&filters[createdAt][$gte]=${u}`).then(d=>d.json()).then(d=>n(d.data)).catch(d=>console.error("Помилка завантаження нових товарів:",d))},[]);const o=(l,s)=>{s.stopPropagation();const u=r.some(d=>d.id===l.id);e(ai(l)),u?q.warning(`${l.name} видалено з обраного`):q.info(`${l.name} додано в обране`)},a=[...t].sort(()=>Math.random()-.5).slice(0,3);return!t||t.length===0?null:f.jsxs(UO,{children:[f.jsx(Or,{}),f.jsx(HO,{children:"Нові товари"}),f.jsxs(WO,{children:[a.map(l=>{var w;const s=r.some(h=>h.id===l.id),u=i.find(h=>h.id===l.id),c=(u?u.quantity:0)>=(l.stock||0),y=l.new_price&&l.new_price<l.price,p=y?l.new_price:l.price,m=y?Math.round((l.price-l.new_price)/l.price*100):0,g=(h,v)=>{if(v.stopPropagation(),c){q.error("Товар уже у кошику");return}e(ho({...h,quantity:1})),q.success(`${h.name} додано в кошик!`)};return f.jsxs(GO,{children:[f.jsxs(YO,{to:`/product/${l.id}`,children:[f.jsx(qO,{children:"Новинка"}),f.jsx("img",{src:((w=l.images)==null?void 0:w[0].url)||no,alt:l.name,onError:h=>{h.currentTarget.onerror=null,h.currentTarget.src=no}}),f.jsx("div",{className:"overlay"})]}),f.jsxs(XO,{children:[f.jsx(KO,{children:l.name}),f.jsxs(QO,{children:[f.jsx(hw,{children:f.jsxs(mw,{children:[f.jsxs(gw,{$discount:y,children:[p.toLocaleString()," грн"]}),y&&f.jsxs(vw,{children:[l.price.toLocaleString()," грн"]}),y&&f.jsxs(yw,{children:["-",m,"%"]})]})}),f.jsxs(pw,{children:[f.jsx(Wl,{onClick:h=>g(l,h),children:f.jsx(po,{size:24,color:u?"var(--orange-color)":"black",strokeWidth:2})}),f.jsx(Wl,{onClick:h=>o(l,h),children:f.jsx(Ua,{size:24,fill:s?"#ff4d4f":"none",color:s?"#ff4d4f":"#000000",strokeWidth:s?1:2})})]})]})]})]},l.id)}),f.jsx(ZO,{to:"/catalog/new",children:f.jsxs(JO,{children:[f.jsx("p",{children:"Усі новинки"}),f.jsx(e4,{children:f.jsx($u,{size:24})})]})})]})]})};function J(){return J=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},J.apply(this,arguments)}function Vj(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function Uj(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var Hj=function(){function e(n){var r=this;this._insertTag=function(i){var o;r.tags.length===0?r.insertionPoint?o=r.insertionPoint.nextSibling:r.prepend?o=r.container.firstChild:o=r.before:o=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(i,o),r.tags.push(i)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(r){r.forEach(this._insertTag)},t.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(Uj(this));var i=this.tags[this.tags.length-1];if(this.isSpeedy){var o=Vj(i);try{o.insertRule(r,o.cssRules.length)}catch{}}else i.appendChild(document.createTextNode(r));this.ctr++},t.flush=function(){this.tags.forEach(function(r){return r.parentNode&&r.parentNode.removeChild(r)}),this.tags=[],this.ctr=0},e}(),it="-ms-",Gl="-moz-",ce="-webkit-",ww="comm",lm="rule",um="decl",Wj="@import",Sw="@keyframes",Gj="@layer",Yj=Math.abs,Uu=String.fromCharCode,qj=Object.assign;function Xj(e,t){return Qe(e,0)^45?(((t<<2^Qe(e,0))<<2^Qe(e,1))<<2^Qe(e,2))<<2^Qe(e,3):0}function _w(e){return e.trim()}function Kj(e,t){return(e=t.exec(e))?e[0]:e}function de(e,t,n){return e.replace(t,n)}function Cp(e,t){return e.indexOf(t)}function Qe(e,t){return e.charCodeAt(t)|0}function Ma(e,t,n){return e.slice(t,n)}function xn(e){return e.length}function cm(e){return e.length}function ws(e,t){return t.push(e),e}function Qj(e,t){return e.map(t).join("")}var Hu=1,ro=1,Cw=0,kt=0,Ie=0,mo="";function Wu(e,t,n,r,i,o,a){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:Hu,column:ro,length:a,return:""}}function $o(e,t){return qj(Wu("",null,null,"",null,null,0),e,{length:-e.length},t)}function Zj(){return Ie}function Jj(){return Ie=kt>0?Qe(mo,--kt):0,ro--,Ie===10&&(ro=1,Hu--),Ie}function Lt(){return Ie=kt<Cw?Qe(mo,kt++):0,ro++,Ie===10&&(ro=1,Hu++),Ie}function En(){return Qe(mo,kt)}function Qs(){return kt}function Ya(e,t){return Ma(mo,e,t)}function $a(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Ew(e){return Hu=ro=1,Cw=xn(mo=e),kt=0,[]}function kw(e){return mo="",e}function Zs(e){return _w(Ya(kt-1,Ep(e===91?e+2:e===40?e+1:e)))}function e3(e){for(;(Ie=En())&&Ie<33;)Lt();return $a(e)>2||$a(Ie)>3?"":" "}function t3(e,t){for(;--t&&Lt()&&!(Ie<48||Ie>102||Ie>57&&Ie<65||Ie>70&&Ie<97););return Ya(e,Qs()+(t<6&&En()==32&&Lt()==32))}function Ep(e){for(;Lt();)switch(Ie){case e:return kt;case 34:case 39:e!==34&&e!==39&&Ep(Ie);break;case 40:e===41&&Ep(e);break;case 92:Lt();break}return kt}function n3(e,t){for(;Lt()&&e+Ie!==47+10;)if(e+Ie===42+42&&En()===47)break;return"/*"+Ya(t,kt-1)+"*"+Uu(e===47?e:Lt())}function r3(e){for(;!$a(En());)Lt();return Ya(e,kt)}function i3(e){return kw(Js("",null,null,null,[""],e=Ew(e),0,[0],e))}function Js(e,t,n,r,i,o,a,l,s){for(var u=0,d=0,c=a,y=0,p=0,m=0,g=1,w=1,h=1,v=0,x="",S=i,C=o,T=r,k=x;w;)switch(m=v,v=Lt()){case 40:if(m!=108&&Qe(k,c-1)==58){Cp(k+=de(Zs(v),"&","&\f"),"&\f")!=-1&&(h=-1);break}case 34:case 39:case 91:k+=Zs(v);break;case 9:case 10:case 13:case 32:k+=e3(m);break;case 92:k+=t3(Qs()-1,7);continue;case 47:switch(En()){case 42:case 47:ws(o3(n3(Lt(),Qs()),t,n),s);break;default:k+="/"}break;case 123*g:l[u++]=xn(k)*h;case 125*g:case 59:case 0:switch(v){case 0:case 125:w=0;case 59+d:h==-1&&(k=de(k,/\f/g,"")),p>0&&xn(k)-c&&ws(p>32?q0(k+";",r,n,c-1):q0(de(k," ","")+";",r,n,c-2),s);break;case 59:k+=";";default:if(ws(T=Y0(k,t,n,u,d,i,l,x,S=[],C=[],c),o),v===123)if(d===0)Js(k,t,T,T,S,o,c,l,C);else switch(y===99&&Qe(k,3)===110?100:y){case 100:case 108:case 109:case 115:Js(e,T,T,r&&ws(Y0(e,T,T,0,0,i,l,x,i,S=[],c),C),i,C,c,l,r?S:C);break;default:Js(k,T,T,T,[""],C,0,l,C)}}u=d=p=0,g=h=1,x=k="",c=a;break;case 58:c=1+xn(k),p=m;default:if(g<1){if(v==123)--g;else if(v==125&&g++==0&&Jj()==125)continue}switch(k+=Uu(v),v*g){case 38:h=d>0?1:(k+="\f",-1);break;case 44:l[u++]=(xn(k)-1)*h,h=1;break;case 64:En()===45&&(k+=Zs(Lt())),y=En(),d=c=xn(x=k+=r3(Qs())),v++;break;case 45:m===45&&xn(k)==2&&(g=0)}}return o}function Y0(e,t,n,r,i,o,a,l,s,u,d){for(var c=i-1,y=i===0?o:[""],p=cm(y),m=0,g=0,w=0;m<r;++m)for(var h=0,v=Ma(e,c+1,c=Yj(g=a[m])),x=e;h<p;++h)(x=_w(g>0?y[h]+" "+v:de(v,/&\f/g,y[h])))&&(s[w++]=x);return Wu(e,t,n,i===0?lm:l,s,u,d)}function o3(e,t,n){return Wu(e,t,n,ww,Uu(Zj()),Ma(e,2,-2),0)}function q0(e,t,n,r){return Wu(e,t,n,um,Ma(e,0,r),Ma(e,r+1,-1),r)}function Ni(e,t){for(var n="",r=cm(e),i=0;i<r;i++)n+=t(e[i],i,e,t)||"";return n}function a3(e,t,n,r){switch(e.type){case Gj:if(e.children.length)break;case Wj:case um:return e.return=e.return||e.value;case ww:return"";case Sw:return e.return=e.value+"{"+Ni(e.children,r)+"}";case lm:e.value=e.props.join(",")}return xn(n=Ni(e.children,r))?e.return=e.value+"{"+n+"}":""}function s3(e){var t=cm(e);return function(n,r,i,o){for(var a="",l=0;l<t;l++)a+=e[l](n,r,i,o)||"";return a}}function l3(e){return function(t){t.root||(t=t.return)&&e(t)}}function u3(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var c3=function(t,n,r){for(var i=0,o=0;i=o,o=En(),i===38&&o===12&&(n[r]=1),!$a(o);)Lt();return Ya(t,kt)},d3=function(t,n){var r=-1,i=44;do switch($a(i)){case 0:i===38&&En()===12&&(n[r]=1),t[r]+=c3(kt-1,n,r);break;case 2:t[r]+=Zs(i);break;case 4:if(i===44){t[++r]=En()===58?"&\f":"",n[r]=t[r].length;break}default:t[r]+=Uu(i)}while(i=Lt());return t},f3=function(t,n){return kw(d3(Ew(t),n))},X0=new WeakMap,p3=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var n=t.value,r=t.parent,i=t.column===r.column&&t.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(t.props.length===1&&n.charCodeAt(0)!==58&&!X0.get(r))&&!i){X0.set(t,!0);for(var o=[],a=f3(n,o),l=r.props,s=0,u=0;s<a.length;s++)for(var d=0;d<l.length;d++,u++)t.props[u]=o[s]?a[s].replace(/&\f/g,l[d]):l[d]+" "+a[s]}}},h3=function(t){if(t.type==="decl"){var n=t.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(t.return="",t.value="")}};function Pw(e,t){switch(Xj(e,t)){case 5103:return ce+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return ce+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return ce+e+Gl+e+it+e+e;case 6828:case 4268:return ce+e+it+e+e;case 6165:return ce+e+it+"flex-"+e+e;case 5187:return ce+e+de(e,/(\w+).+(:[^]+)/,ce+"box-$1$2"+it+"flex-$1$2")+e;case 5443:return ce+e+it+"flex-item-"+de(e,/flex-|-self/,"")+e;case 4675:return ce+e+it+"flex-line-pack"+de(e,/align-content|flex-|-self/,"")+e;case 5548:return ce+e+it+de(e,"shrink","negative")+e;case 5292:return ce+e+it+de(e,"basis","preferred-size")+e;case 6060:return ce+"box-"+de(e,"-grow","")+ce+e+it+de(e,"grow","positive")+e;case 4554:return ce+de(e,/([^-])(transform)/g,"$1"+ce+"$2")+e;case 6187:return de(de(de(e,/(zoom-|grab)/,ce+"$1"),/(image-set)/,ce+"$1"),e,"")+e;case 5495:case 3959:return de(e,/(image-set\([^]*)/,ce+"$1$`$1");case 4968:return de(de(e,/(.+:)(flex-)?(.*)/,ce+"box-pack:$3"+it+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+ce+e+e;case 4095:case 3583:case 4068:case 2532:return de(e,/(.+)-inline(.+)/,ce+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(xn(e)-1-t>6)switch(Qe(e,t+1)){case 109:if(Qe(e,t+4)!==45)break;case 102:return de(e,/(.+:)(.+)-([^]+)/,"$1"+ce+"$2-$3$1"+Gl+(Qe(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Cp(e,"stretch")?Pw(de(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(Qe(e,t+1)!==115)break;case 6444:switch(Qe(e,xn(e)-3-(~Cp(e,"!important")&&10))){case 107:return de(e,":",":"+ce)+e;case 101:return de(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+ce+(Qe(e,14)===45?"inline-":"")+"box$3$1"+ce+"$2$3$1"+it+"$2box$3")+e}break;case 5936:switch(Qe(e,t+11)){case 114:return ce+e+it+de(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return ce+e+it+de(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return ce+e+it+de(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return ce+e+it+e+e}return e}var m3=function(t,n,r,i){if(t.length>-1&&!t.return)switch(t.type){case um:t.return=Pw(t.value,t.length);break;case Sw:return Ni([$o(t,{value:de(t.value,"@","@"+ce)})],i);case lm:if(t.length)return Qj(t.props,function(o){switch(Kj(o,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return Ni([$o(t,{props:[de(o,/:(read-\w+)/,":"+Gl+"$1")]})],i);case"::placeholder":return Ni([$o(t,{props:[de(o,/:(plac\w+)/,":"+ce+"input-$1")]}),$o(t,{props:[de(o,/:(plac\w+)/,":"+Gl+"$1")]}),$o(t,{props:[de(o,/:(plac\w+)/,it+"input-$1")]})],i)}return""})}},g3=[m3],v3=function(t){var n=t.key;if(n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(g){var w=g.getAttribute("data-emotion");w.indexOf(" ")!==-1&&(document.head.appendChild(g),g.setAttribute("data-s",""))})}var i=t.stylisPlugins||g3,o={},a,l=[];a=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(g){for(var w=g.getAttribute("data-emotion").split(" "),h=1;h<w.length;h++)o[w[h]]=!0;l.push(g)});var s,u=[p3,h3];{var d,c=[a3,l3(function(g){d.insert(g)})],y=s3(u.concat(i,c)),p=function(w){return Ni(i3(w),y)};s=function(w,h,v,x){d=v,p(w?w+"{"+h.styles+"}":h.styles),x&&(m.inserted[h.name]=!0)}}var m={key:n,sheet:new Hj({key:n,container:a,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:o,registered:{},insert:s};return m.sheet.hydrate(l),m},Tw={exports:{}},me={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qe=typeof Symbol=="function"&&Symbol.for,dm=qe?Symbol.for("react.element"):60103,fm=qe?Symbol.for("react.portal"):60106,Gu=qe?Symbol.for("react.fragment"):60107,Yu=qe?Symbol.for("react.strict_mode"):60108,qu=qe?Symbol.for("react.profiler"):60114,Xu=qe?Symbol.for("react.provider"):60109,Ku=qe?Symbol.for("react.context"):60110,pm=qe?Symbol.for("react.async_mode"):60111,Qu=qe?Symbol.for("react.concurrent_mode"):60111,Zu=qe?Symbol.for("react.forward_ref"):60112,Ju=qe?Symbol.for("react.suspense"):60113,y3=qe?Symbol.for("react.suspense_list"):60120,ec=qe?Symbol.for("react.memo"):60115,tc=qe?Symbol.for("react.lazy"):60116,x3=qe?Symbol.for("react.block"):60121,b3=qe?Symbol.for("react.fundamental"):60117,w3=qe?Symbol.for("react.responder"):60118,S3=qe?Symbol.for("react.scope"):60119;function Bt(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case dm:switch(e=e.type,e){case pm:case Qu:case Gu:case qu:case Yu:case Ju:return e;default:switch(e=e&&e.$$typeof,e){case Ku:case Zu:case tc:case ec:case Xu:return e;default:return t}}case fm:return t}}}function Ow(e){return Bt(e)===Qu}me.AsyncMode=pm;me.ConcurrentMode=Qu;me.ContextConsumer=Ku;me.ContextProvider=Xu;me.Element=dm;me.ForwardRef=Zu;me.Fragment=Gu;me.Lazy=tc;me.Memo=ec;me.Portal=fm;me.Profiler=qu;me.StrictMode=Yu;me.Suspense=Ju;me.isAsyncMode=function(e){return Ow(e)||Bt(e)===pm};me.isConcurrentMode=Ow;me.isContextConsumer=function(e){return Bt(e)===Ku};me.isContextProvider=function(e){return Bt(e)===Xu};me.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===dm};me.isForwardRef=function(e){return Bt(e)===Zu};me.isFragment=function(e){return Bt(e)===Gu};me.isLazy=function(e){return Bt(e)===tc};me.isMemo=function(e){return Bt(e)===ec};me.isPortal=function(e){return Bt(e)===fm};me.isProfiler=function(e){return Bt(e)===qu};me.isStrictMode=function(e){return Bt(e)===Yu};me.isSuspense=function(e){return Bt(e)===Ju};me.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Gu||e===Qu||e===qu||e===Yu||e===Ju||e===y3||typeof e=="object"&&e!==null&&(e.$$typeof===tc||e.$$typeof===ec||e.$$typeof===Xu||e.$$typeof===Ku||e.$$typeof===Zu||e.$$typeof===b3||e.$$typeof===w3||e.$$typeof===S3||e.$$typeof===x3)};me.typeOf=Bt;Tw.exports=me;var _3=Tw.exports,jw=_3,C3={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},E3={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Mw={};Mw[jw.ForwardRef]=C3;Mw[jw.Memo]=E3;var k3=!0;function $w(e,t,n){var r="";return n.split(" ").forEach(function(i){e[i]!==void 0?t.push(e[i]+";"):r+=i+" "}),r}var hm=function(t,n,r){var i=t.key+"-"+n.name;(r===!1||k3===!1)&&t.registered[i]===void 0&&(t.registered[i]=n.styles)},Iw=function(t,n,r){hm(t,n,r);var i=t.key+"-"+n.name;if(t.inserted[n.name]===void 0){var o=n;do t.insert(n===o?"."+i:"",o,t.sheet,!0),o=o.next;while(o!==void 0)}};function P3(e){for(var t=0,n,r=0,i=e.length;i>=4;++r,i-=4)n=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(i){case 3:t^=(e.charCodeAt(r+2)&255)<<16;case 2:t^=(e.charCodeAt(r+1)&255)<<8;case 1:t^=e.charCodeAt(r)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var T3={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},O3=/[A-Z]|^ms/g,j3=/_EMO_([^_]+?)_([^]*?)_EMO_/g,Dw=function(t){return t.charCodeAt(1)===45},K0=function(t){return t!=null&&typeof t!="boolean"},bd=u3(function(e){return Dw(e)?e:e.replace(O3,"-$&").toLowerCase()}),Q0=function(t,n){switch(t){case"animation":case"animationName":if(typeof n=="string")return n.replace(j3,function(r,i,o){return bn={name:i,styles:o,next:bn},i})}return T3[t]!==1&&!Dw(t)&&typeof n=="number"&&n!==0?n+"px":n};function Ia(e,t,n){if(n==null)return"";if(n.__emotion_styles!==void 0)return n;switch(typeof n){case"boolean":return"";case"object":{if(n.anim===1)return bn={name:n.name,styles:n.styles,next:bn},n.name;if(n.styles!==void 0){var r=n.next;if(r!==void 0)for(;r!==void 0;)bn={name:r.name,styles:r.styles,next:bn},r=r.next;var i=n.styles+";";return i}return M3(e,t,n)}case"function":{if(e!==void 0){var o=bn,a=n(e);return bn=o,Ia(e,t,a)}break}}if(t==null)return n;var l=t[n];return l!==void 0?l:n}function M3(e,t,n){var r="";if(Array.isArray(n))for(var i=0;i<n.length;i++)r+=Ia(e,t,n[i])+";";else for(var o in n){var a=n[o];if(typeof a!="object")t!=null&&t[a]!==void 0?r+=o+"{"+t[a]+"}":K0(a)&&(r+=bd(o)+":"+Q0(o,a)+";");else if(Array.isArray(a)&&typeof a[0]=="string"&&(t==null||t[a[0]]===void 0))for(var l=0;l<a.length;l++)K0(a[l])&&(r+=bd(o)+":"+Q0(o,a[l])+";");else{var s=Ia(e,t,a);switch(o){case"animation":case"animationName":{r+=bd(o)+":"+s+";";break}default:r+=o+"{"+s+"}"}}}return r}var Z0=/label:\s*([^\s;\n{]+)\s*(;|$)/g,bn,mm=function(t,n,r){if(t.length===1&&typeof t[0]=="object"&&t[0]!==null&&t[0].styles!==void 0)return t[0];var i=!0,o="";bn=void 0;var a=t[0];a==null||a.raw===void 0?(i=!1,o+=Ia(r,n,a)):o+=a[0];for(var l=1;l<t.length;l++)o+=Ia(r,n,t[l]),i&&(o+=a[l]);Z0.lastIndex=0;for(var s="",u;(u=Z0.exec(o))!==null;)s+="-"+u[1];var d=P3(o)+s;return{name:d,styles:o,next:bn}},$3=function(t){return t()},I3=af["useInsertionEffect"]?af["useInsertionEffect"]:!1,Lw=I3||$3,gm={}.hasOwnProperty,Aw=b.createContext(typeof HTMLElement<"u"?v3({key:"css"}):null);Aw.Provider;var Rw=function(t){return b.forwardRef(function(n,r){var i=b.useContext(Aw);return t(n,i,r)})},Fw=b.createContext({}),kp="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",D3=function(t,n){var r={};for(var i in n)gm.call(n,i)&&(r[i]=n[i]);return r[kp]=t,r},L3=function(t){var n=t.cache,r=t.serialized,i=t.isStringTag;return hm(n,r,i),Lw(function(){return Iw(n,r,i)}),null},A3=Rw(function(e,t,n){var r=e.css;typeof r=="string"&&t.registered[r]!==void 0&&(r=t.registered[r]);var i=e[kp],o=[r],a="";typeof e.className=="string"?a=$w(t.registered,o,e.className):e.className!=null&&(a=e.className+" ");var l=mm(o,void 0,b.useContext(Fw));a+=t.key+"-"+l.name;var s={};for(var u in e)gm.call(e,u)&&u!=="css"&&u!==kp&&(s[u]=e[u]);return s.ref=n,s.className=a,b.createElement(b.Fragment,null,b.createElement(L3,{cache:t,serialized:l,isStringTag:typeof i=="string"}),b.createElement(i,s))}),R3=A3,Q=function(t,n){var r=arguments;if(n==null||!gm.call(n,"css"))return b.createElement.apply(void 0,r);var i=r.length,o=new Array(i);o[0]=R3,o[1]=D3(t,n);for(var a=2;a<i;a++)o[a]=r[a];return b.createElement.apply(null,o)};function vm(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return mm(t)}var F3=function(){var t=vm.apply(void 0,arguments),n="animation-"+t.name;return{name:n,styles:"@keyframes "+n+"{"+t.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},z3=iP,N3=function(t){return t!=="theme"},J0=function(t){return typeof t=="string"&&t.charCodeAt(0)>96?z3:N3},ev=function(t,n,r){var i;if(n){var o=n.shouldForwardProp;i=t.__emotion_forwardProp&&o?function(a){return t.__emotion_forwardProp(a)&&o(a)}:o}return typeof i!="function"&&r&&(i=t.__emotion_forwardProp),i},B3=function(t){var n=t.cache,r=t.serialized,i=t.isStringTag;return hm(n,r,i),Lw(function(){return Iw(n,r,i)}),null},V3=function e(t,n){var r=t.__emotion_real===t,i=r&&t.__emotion_base||t,o,a;n!==void 0&&(o=n.label,a=n.target);var l=ev(t,n,r),s=l||J0(i),u=!s("as");return function(){var d=arguments,c=r&&t.__emotion_styles!==void 0?t.__emotion_styles.slice(0):[];if(o!==void 0&&c.push("label:"+o+";"),d[0]==null||d[0].raw===void 0)c.push.apply(c,d);else{c.push(d[0][0]);for(var y=d.length,p=1;p<y;p++)c.push(d[p],d[0][p])}var m=Rw(function(g,w,h){var v=u&&g.as||i,x="",S=[],C=g;if(g.theme==null){C={};for(var T in g)C[T]=g[T];C.theme=b.useContext(Fw)}typeof g.className=="string"?x=$w(w.registered,S,g.className):g.className!=null&&(x=g.className+" ");var k=mm(c.concat(S),w.registered,C);x+=w.key+"-"+k.name,a!==void 0&&(x+=" "+a);var _=u&&l===void 0?J0(v):s,M={};for(var $ in g)u&&$==="as"||_($)&&(M[$]=g[$]);return M.className=x,M.ref=h,b.createElement(b.Fragment,null,b.createElement(B3,{cache:w,serialized:k,isStringTag:typeof v=="string"}),b.createElement(v,M))});return m.displayName=o!==void 0?o:"Styled("+(typeof i=="string"?i:i.displayName||i.name||"Component")+")",m.defaultProps=t.defaultProps,m.__emotion_real=m,m.__emotion_base=i,m.__emotion_styles=c,m.__emotion_forwardProp=l,Object.defineProperty(m,"toString",{value:function(){return"."+a}}),m.withComponent=function(g,w){return e(g,J({},n,w,{shouldForwardProp:ev(m,w,!0)})).apply(void 0,c)},m}},U3=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],Ae=V3.bind();U3.forEach(function(e){Ae[e]=Ae(e)});const H3=Ae.section`
  background-color: var(--second-background);
`,W3=Ae.div`
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
`,G3=Ae.div`

`,Y3=Ae.h1`
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
`;const X3=Ae(Oe)`
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
`,K3=Ae.div`
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
`,Q3=Ae.img`
  width: 100%;
  height: 200px;
  object-fit: cover;

  display: block;
  @media screen and (max-width: 768px) {
    height: 250px;
  }
`,Z3=Ae.p`
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
`;var J3={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"};eM(J3);function eM(e){var t={};for(var n in e)e.hasOwnProperty(n)&&(t[e[n]]=n);return t}var tM="#4fa94d",nM={"aria-busy":!0,role:"progressbar"},rM=E.div`
  display: ${e=>e.$visible?"flex":"none"};
`,iM="http://www.w3.org/2000/svg",qa=({height:e=100,width:t=100,radius:n=5,color:r=tM,ariaLabel:i="ball-triangle-loading",wrapperClass:o,wrapperStyle:a,visible:l=!0})=>f.jsx(rM,{style:{...a},$visible:l,className:o,"data-testid":"ball-triangle-loading","aria-label":i,...nM,children:f.jsxs("svg",{height:e,width:t,stroke:r,viewBox:"0 0 57 57",xmlns:iM,"data-testid":"ball-triangle-svg",children:[f.jsx("title",{children:"Ball Triangle"}),f.jsx("desc",{children:"Animated representation of three balls"}),f.jsx("g",{fill:"none",fillRule:"evenodd",children:f.jsxs("g",{transform:"translate(1 1)",strokeWidth:"2",children:[f.jsxs("circle",{cx:"5",cy:"50",r:n,children:[f.jsx("animate",{attributeName:"cy",begin:"0s",dur:"2.2s",values:"50;5;50;50",calcMode:"linear",repeatCount:"indefinite"}),f.jsx("animate",{attributeName:"cx",begin:"0s",dur:"2.2s",values:"5;27;49;5",calcMode:"linear",repeatCount:"indefinite"})]}),f.jsxs("circle",{cx:"27",cy:"5",r:n,children:[f.jsx("animate",{attributeName:"cy",begin:"0s",dur:"2.2s",from:"5",to:"5",values:"5;50;50;5",calcMode:"linear",repeatCount:"indefinite"}),f.jsx("animate",{attributeName:"cx",begin:"0s",dur:"2.2s",from:"27",to:"27",values:"27;49;5;27",calcMode:"linear",repeatCount:"indefinite"})]}),f.jsxs("circle",{cx:"49",cy:"50",r:n,children:[f.jsx("animate",{attributeName:"cy",begin:"0s",dur:"2.2s",values:"50;50;5;50",calcMode:"linear",repeatCount:"indefinite"}),f.jsx("animate",{attributeName:"cx",from:"49",to:"49",begin:"0s",dur:"2.2s",values:"49;5;27;49",calcMode:"linear",repeatCount:"indefinite"})]})]})})]})}),Jt=242.776657104492,oM=1.6,aM=Jh`
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
  animation: ${aM} ${oM}s linear infinite;
`;var sM=Jh`
to {
   transform: rotate(360deg);
 }
`;E.svg`
  animation: ${sM} ${e=>String(e.$animationDuration).endsWith("s")?String(e.$animationDuration):`${e.$animationDuration}s`} steps(12, end) infinite;
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
`;var lM=Jh`
to {
   stroke-dashoffset: 136;
 }
`;E.polygon`
  stroke-dasharray: 17;
  animation: ${lM} 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;
`;E.svg`
  transform-origin: 50% 65%;
`;const uM=()=>{const[e,t]=b.useState([]),[n,r]=b.useState(!0);return b.useEffect(()=>{async function i(){try{r(!0);const a=await(await fetch("https://backenddidiv-production.up.railway.app/api/categories?populate=*&pagination[limit]=50&sort=title:asc")).json();console.log(a),t(a.data.map(l=>{var s;return{id:l.id_title,title:l.title,image:(s=l.image)==null?void 0:s.url}}))}catch(o){console.log(o)}finally{r(!1)}}i()},[]),n?f.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"100vw",height:"100vh"},children:f.jsx(qa,{height:100,width:100,radius:5,color:"var(--orange-color)",ariaLabel:"ball-triangle-loading",wrapperStyle:{},wrapperClass:"",visible:!0})}):f.jsx(H3,{children:f.jsxs(W3,{children:[f.jsx(G3,{children:f.jsx(bw,{})}),f.jsx(Y3,{children:"Каталог"}),f.jsx(q3,{children:e.map(i=>f.jsxs(X3,{to:`/catalog/${i.title}`,children:[f.jsx(K3,{children:f.jsx(Q3,{src:i.image,alt:i.title})}),f.jsx(Z3,{children:i.title})]},i.id))})]})})},cM=Ae.div`

padding-top: 100px;
padding-bottom: 250px;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`,dM=Ae.h1`
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
`,fM=Ae.p`
  color: #191919;
  font-size: 18px;
  max-width: 600px;
      text-align: center;
      margin-bottom: 50px;
      @media screen and (min-width: 768px) {
 font-size: 25px;
  }
`,pM=Ae(Oe)`

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

  
`,hM=()=>f.jsxs(cM,{children:[f.jsxs(dM,{children:[" ",f.jsx("span",{children:"404"}),"  PAGE NOT FOUND"]}),f.jsx(fM,{children:" Ой, схоже, ти збився з маршруту! На жаль, ця сторінка безслідно зникла десь на бездоріжжі. Спробуй повернутися на головну "}),f.jsx(pM,{children:" На головну"})]});const mM=E.div`
width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
   font-family: var(--main-font);
`,gM=E.div`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  margin: 0;
`;var zw={},Nw={},nc={},Bw={exports:{}},Xa={};/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var tv=Object.getOwnPropertySymbols,vM=Object.prototype.hasOwnProperty,yM=Object.prototype.propertyIsEnumerable;function xM(e){if(e==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}function bM(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de",Object.getOwnPropertyNames(e)[0]==="5")return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;var r=Object.getOwnPropertyNames(t).map(function(o){return t[o]});if(r.join("")!=="0123456789")return!1;var i={};return"abcdefghijklmnopqrst".split("").forEach(function(o){i[o]=o}),Object.keys(Object.assign({},i)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}var wM=bM()?Object.assign:function(e,t){for(var n,r=xM(e),i,o=1;o<arguments.length;o++){n=Object(arguments[o]);for(var a in n)vM.call(n,a)&&(r[a]=n[a]);if(tv){i=tv(n);for(var l=0;l<i.length;l++)yM.call(n,i[l])&&(r[i[l]]=n[i[l]])}}return r},Vw={exports:{}},le={};/** @license React v17.0.2
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ym=wM,go=60103,Uw=60106;le.Fragment=60107;le.StrictMode=60108;le.Profiler=60114;var Hw=60109,Ww=60110,Gw=60112;le.Suspense=60113;var Yw=60115,qw=60116;if(typeof Symbol=="function"&&Symbol.for){var Zt=Symbol.for;go=Zt("react.element"),Uw=Zt("react.portal"),le.Fragment=Zt("react.fragment"),le.StrictMode=Zt("react.strict_mode"),le.Profiler=Zt("react.profiler"),Hw=Zt("react.provider"),Ww=Zt("react.context"),Gw=Zt("react.forward_ref"),le.Suspense=Zt("react.suspense"),Yw=Zt("react.memo"),qw=Zt("react.lazy")}var nv=typeof Symbol=="function"&&Symbol.iterator;function SM(e){return e===null||typeof e!="object"?null:(e=nv&&e[nv]||e["@@iterator"],typeof e=="function"?e:null)}function Ka(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Xw={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Kw={};function vo(e,t,n){this.props=e,this.context=t,this.refs=Kw,this.updater=n||Xw}vo.prototype.isReactComponent={};vo.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error(Ka(85));this.updater.enqueueSetState(this,e,t,"setState")};vo.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Qw(){}Qw.prototype=vo.prototype;function xm(e,t,n){this.props=e,this.context=t,this.refs=Kw,this.updater=n||Xw}var bm=xm.prototype=new Qw;bm.constructor=xm;ym(bm,vo.prototype);bm.isPureReactComponent=!0;var wm={current:null},Zw=Object.prototype.hasOwnProperty,Jw={key:!0,ref:!0,__self:!0,__source:!0};function eS(e,t,n){var r,i={},o=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(o=""+t.key),t)Zw.call(t,r)&&!Jw.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var s=Array(l),u=0;u<l;u++)s[u]=arguments[u+2];i.children=s}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:go,type:e,key:o,ref:a,props:i,_owner:wm.current}}function _M(e,t){return{$$typeof:go,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Sm(e){return typeof e=="object"&&e!==null&&e.$$typeof===go}function CM(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var rv=/\/+/g;function wd(e,t){return typeof e=="object"&&e!==null&&e.key!=null?CM(""+e.key):t.toString(36)}function el(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case go:case Uw:a=!0}}if(a)return a=e,i=i(a),e=r===""?"."+wd(a,0):r,Array.isArray(i)?(n="",e!=null&&(n=e.replace(rv,"$&/")+"/"),el(i,t,n,"",function(u){return u})):i!=null&&(Sm(i)&&(i=_M(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(rv,"$&/")+"/")+e)),t.push(i)),1;if(a=0,r=r===""?".":r+":",Array.isArray(e))for(var l=0;l<e.length;l++){o=e[l];var s=r+wd(o,l);a+=el(o,t,n,s,i)}else if(s=SM(e),typeof s=="function")for(e=s.call(e),l=0;!(o=e.next()).done;)o=o.value,s=r+wd(o,l++),a+=el(o,t,n,s,i);else if(o==="object")throw t=""+e,Error(Ka(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t));return a}function Ss(e,t,n){if(e==null)return e;var r=[],i=0;return el(e,r,"","",function(o){return t.call(n,o,i++)}),r}function EM(e){if(e._status===-1){var t=e._result;t=t(),e._status=0,e._result=t,t.then(function(n){e._status===0&&(n=n.default,e._status=1,e._result=n)},function(n){e._status===0&&(e._status=2,e._result=n)})}if(e._status===1)return e._result;throw e._result}var tS={current:null};function Zn(){var e=tS.current;if(e===null)throw Error(Ka(321));return e}var kM={ReactCurrentDispatcher:tS,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:wm,IsSomeRendererActing:{current:!1},assign:ym};le.Children={map:Ss,forEach:function(e,t,n){Ss(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Ss(e,function(){t++}),t},toArray:function(e){return Ss(e,function(t){return t})||[]},only:function(e){if(!Sm(e))throw Error(Ka(143));return e}};le.Component=vo;le.PureComponent=xm;le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=kM;le.cloneElement=function(e,t,n){if(e==null)throw Error(Ka(267,e));var r=ym({},e.props),i=e.key,o=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,a=wm.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in t)Zw.call(t,s)&&!Jw.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&l!==void 0?l[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){l=Array(s);for(var u=0;u<s;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:go,type:e.type,key:i,ref:o,props:r,_owner:a}};le.createContext=function(e,t){return t===void 0&&(t=null),e={$$typeof:Ww,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider={$$typeof:Hw,_context:e},e.Consumer=e};le.createElement=eS;le.createFactory=function(e){var t=eS.bind(null,e);return t.type=e,t};le.createRef=function(){return{current:null}};le.forwardRef=function(e){return{$$typeof:Gw,render:e}};le.isValidElement=Sm;le.lazy=function(e){return{$$typeof:qw,_payload:{_status:-1,_result:e},_init:EM}};le.memo=function(e,t){return{$$typeof:Yw,type:e,compare:t===void 0?null:t}};le.useCallback=function(e,t){return Zn().useCallback(e,t)};le.useContext=function(e,t){return Zn().useContext(e,t)};le.useDebugValue=function(){};le.useEffect=function(e,t){return Zn().useEffect(e,t)};le.useImperativeHandle=function(e,t,n){return Zn().useImperativeHandle(e,t,n)};le.useLayoutEffect=function(e,t){return Zn().useLayoutEffect(e,t)};le.useMemo=function(e,t){return Zn().useMemo(e,t)};le.useReducer=function(e,t,n){return Zn().useReducer(e,t,n)};le.useRef=function(e){return Zn().useRef(e)};le.useState=function(e){return Zn().useState(e)};le.version="17.0.2";Vw.exports=le;var PM=Vw.exports;/** @license React v17.0.2
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var TM=PM,nS=60103;Xa.Fragment=60107;if(typeof Symbol=="function"&&Symbol.for){var iv=Symbol.for;nS=iv("react.element"),Xa.Fragment=iv("react.fragment")}var OM=TM.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,jM=Object.prototype.hasOwnProperty,MM={key:!0,ref:!0,__self:!0,__source:!0};function rS(e,t,n){var r,i={},o=null,a=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)jM.call(t,r)&&!MM.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:nS,type:e,key:o,ref:a,props:i,_owner:OM.current}}Xa.jsx=rS;Xa.jsxs=rS;Bw.exports=Xa;var Tt=Bw.exports,iS={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var t={}.hasOwnProperty;function n(){for(var o="",a=0;a<arguments.length;a++){var l=arguments[a];l&&(o=i(o,r(l)))}return o}function r(o){if(typeof o=="string"||typeof o=="number")return o;if(typeof o!="object")return"";if(Array.isArray(o))return n.apply(null,o);if(o.toString!==Object.prototype.toString&&!o.toString.toString().includes("[native code]"))return o.toString();var a="";for(var l in o)t.call(o,l)&&o[l]&&(a=i(a,l));return a}function i(o,a){return a?o?o+" "+a:o+a:o}e.exports?(n.default=n,e.exports=n):window.classNames=n})()})(iS);var Ot=iS.exports;const $M={"lds-circle":"_lds-circle_qlxhy_1"},IM=Object.freeze(Object.defineProperty({__proto__:null,default:$M},Symbol.toStringTag,{value:"Module"})),DM=Pt(IM);var oS=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(nc,"__esModule",{value:!0});nc.Circle=void 0;const LM=Tt,AM=oS(Ot),RM=oS(DM);function FM({color:e="#7f58af",size:t=64,className:n,style:r,...i}){return(0,LM.jsx)("div",{className:(0,AM.default)(RM.default["lds-circle"],n),style:{background:e,width:t,height:t,...r},...i})}nc.Circle=FM;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Circle=void 0;var t=nc;Object.defineProperty(e,"Circle",{enumerable:!0,get:function(){return t.Circle}})})(Nw);var aS={},rc={};const zM={"lds-default":"_lds-default_wt1n8_1"},NM=Object.freeze(Object.defineProperty({__proto__:null,default:zM},Symbol.toStringTag,{value:"Module"})),BM=Pt(NM);var sS=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(rc,"__esModule",{value:!0});rc.Default=void 0;const ov=Tt,VM=sS(Ot),UM=sS(BM);function HM({color:e="#7f58af",size:t=80,className:n,style:r,...i}){const o=[...Array(12)].map((a,l)=>(0,ov.jsx)("div",{style:{background:`${e}`,width:t*.075,height:t*.075}},l));return(0,ov.jsx)("div",{className:(0,VM.default)(UM.default["lds-default"],n),style:{height:t,width:t,...r},...i,children:o})}rc.Default=HM;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Default=void 0;var t=rc;Object.defineProperty(e,"Default",{enumerable:!0,get:function(){return t.Default}})})(aS);var lS={},ic={};const WM={"lds-dual-ring":"_lds-dual-ring_pbai0_1","lds-dual-ring-after":"_lds-dual-ring-after_pbai0_6"},GM=Object.freeze(Object.defineProperty({__proto__:null,default:WM},Symbol.toStringTag,{value:"Module"})),YM=Pt(GM);var uS=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(ic,"__esModule",{value:!0});ic.DualRing=void 0;const av=Tt,sv=uS(Ot),lv=uS(YM);function qM({color:e="#7f58af",size:t=80,className:n,style:r,...i}){return(0,av.jsx)("div",{className:(0,sv.default)(lv.default["lds-dual-ring"],n),style:{width:t,height:t,...r},...i,children:(0,av.jsx)("div",{className:(0,sv.default)(lv.default["lds-dual-ring-after"]),style:{borderColor:`${e} transparent`,borderWidth:t*.1,width:t*.7-6,height:t*.7-6}})})}ic.DualRing=qM;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.DualRing=void 0;var t=ic;Object.defineProperty(e,"DualRing",{enumerable:!0,get:function(){return t.DualRing}})})(lS);var cS={},oc={};const XM={"lds-ellipsis":"_lds-ellipsis_1fzd3_1","lds-ellipsis1":"_lds-ellipsis1_1fzd3_1","lds-ellipsis2":"_lds-ellipsis2_1fzd3_1","lds-ellipsis3":"_lds-ellipsis3_1fzd3_1"},KM=Object.freeze(Object.defineProperty({__proto__:null,default:XM},Symbol.toStringTag,{value:"Module"})),QM=Pt(KM);var dS=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(oc,"__esModule",{value:!0});oc.Ellipsis=void 0;const uv=Tt,ZM=dS(Ot),JM=dS(QM);function e5({color:e="#7f58af",size:t=80,className:n,style:r,...i}){const o=[...Array(4)].map((a,l)=>(0,uv.jsx)("div",{style:{background:`${e}`}},l));return(0,uv.jsx)("div",{className:(0,ZM.default)(JM.default["lds-ellipsis"],n),style:{...r,width:t,height:t},...i,children:o})}oc.Ellipsis=e5;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Ellipsis=void 0;var t=oc;Object.defineProperty(e,"Ellipsis",{enumerable:!0,get:function(){return t.Ellipsis}})})(cS);var fS={},ac={};const t5={"lds-facebook":"_lds-facebook_1ts9g_1"},n5=Object.freeze(Object.defineProperty({__proto__:null,default:t5},Symbol.toStringTag,{value:"Module"})),r5=Pt(n5);var pS=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(ac,"__esModule",{value:!0});ac.Facebook=void 0;const cv=Tt,i5=pS(Ot),o5=pS(r5);function a5({color:e="#7f58af",size:t=80,className:n,style:r,...i}){const o=[...Array(3)].map((a,l)=>(0,cv.jsx)("div",{style:{background:`${e}`}},l));return(0,cv.jsx)("div",{className:(0,i5.default)(o5.default["lds-facebook"],n),style:{width:t,height:t,...r},...i,children:o})}ac.Facebook=a5;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Facebook=void 0;var t=ac;Object.defineProperty(e,"Facebook",{enumerable:!0,get:function(){return t.Facebook}})})(fS);var hS={},sc={};const s5={"lds-grid":"_lds-grid_1ftub_1"},l5=Object.freeze(Object.defineProperty({__proto__:null,default:s5},Symbol.toStringTag,{value:"Module"})),u5=Pt(l5);var mS=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(sc,"__esModule",{value:!0});sc.Grid=void 0;const dv=Tt,c5=mS(Ot),d5=mS(u5);function f5({color:e="#7f58af",size:t=80,className:n,style:r,...i}){const o=[...Array(9)].map((a,l)=>(0,dv.jsx)("div",{style:{background:`${e}`}},l));return(0,dv.jsx)("div",{className:(0,c5.default)(d5.default["lds-grid"],n),style:{width:t,height:t,...r},...i,children:o})}sc.Grid=f5;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Grid=void 0;var t=sc;Object.defineProperty(e,"Grid",{enumerable:!0,get:function(){return t.Grid}})})(hS);var gS={},lc={};const p5={"lds-heart":"_lds-heart_e4yfg_1","div-after":"_div-after_e4yfg_18","div-before":"_div-before_e4yfg_19"},h5=Object.freeze(Object.defineProperty({__proto__:null,default:p5},Symbol.toStringTag,{value:"Module"})),m5=Pt(h5);var vS=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(lc,"__esModule",{value:!0});lc.Heart=void 0;const _s=Tt,Sd=vS(Ot),_d=vS(m5);function g5({color:e="#7f58af",size:t=80,className:n,style:r,...i}){return(0,_s.jsx)("div",{className:(0,Sd.default)(_d.default["lds-heart"],n),style:{width:t,height:t,...r},...i,children:(0,_s.jsxs)("div",{style:{background:e,width:t*.4,height:t*.4,left:t*.3,top:t*.3},children:[(0,_s.jsx)("div",{className:(0,Sd.default)(_d.default["div-before"]),style:{background:e,width:t*.4,height:t*.4,left:-t*.3}}),(0,_s.jsx)("div",{className:(0,Sd.default)(_d.default["div-after"]),style:{background:e,width:t*.4,height:t*.4,top:-t*.3}})]})})}lc.Heart=g5;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Heart=void 0;var t=lc;Object.defineProperty(e,"Heart",{enumerable:!0,get:function(){return t.Heart}})})(gS);var yS={},uc={};const v5={"lds-hourglass":"_lds-hourglass_mn3qi_1","lds-hourglass-after":"_lds-hourglass-after_mn3qi_7"},y5=Object.freeze(Object.defineProperty({__proto__:null,default:v5},Symbol.toStringTag,{value:"Module"})),x5=Pt(y5);var xS=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(uc,"__esModule",{value:!0});uc.Hourglass=void 0;const fv=Tt,pv=xS(Ot),hv=xS(x5);function b5({color:e="#7f58af",size:t=32,className:n,style:r}){return(0,fv.jsx)("div",{className:(0,pv.default)(hv.default["lds-hourglass"],n),style:{...r},children:(0,fv.jsx)("div",{className:(0,pv.default)(hv.default["lds-hourglass-after"]),style:{background:e,borderWidth:t,borderHeight:t}})})}uc.Hourglass=b5;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Hourglass=void 0;var t=uc;Object.defineProperty(e,"Hourglass",{enumerable:!0,get:function(){return t.Hourglass}})})(yS);var bS={},cc={};const wS="_center_1rufi_10",SS="_spin_1rufi_1",w5={"lds-orbitals":"_lds-orbitals_1rufi_1",center:wS,"outer-spin":"_outer-spin_1rufi_19","inner-spin":"_inner-spin_1rufi_20","inner-arc":"_inner-arc_1rufi_25","inner-arc_start-a":"_inner-arc_start-a_1rufi_32","inner-arc_end-a":"_inner-arc_end-a_1rufi_36","inner-moon-a":"_inner-moon-a_1rufi_40","inner-moon-b":"_inner-moon-b_1rufi_49","inner-arc_start-b":"_inner-arc_start-b_1rufi_58","inner-arc_end-b":"_inner-arc_end-b_1rufi_62","outer-arc":"_outer-arc_1rufi_66","outer-arc_start-a":"_outer-arc_start-a_1rufi_73","outer-arc_end-a":"_outer-arc_end-a_1rufi_77","outer-moon-a":"_outer-moon-a_1rufi_81","outer-moon-b":"_outer-moon-b_1rufi_90","outer-arc_start-b":"_outer-arc_start-b_1rufi_99","outer-arc_end-b":"_outer-arc_end-b_1rufi_103",spin:SS},S5=Object.freeze(Object.defineProperty({__proto__:null,center:wS,default:w5,spin:SS},Symbol.toStringTag,{value:"Module"})),_5=Pt(S5);var _S=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(cc,"__esModule",{value:!0});cc.Orbitals=void 0;const nt=Tt,ct=_S(Ot),Se=_S(_5);function C5({color:e="#7f58af",className:t,style:n}){return(0,nt.jsxs)("div",{className:(0,ct.default)(Se.default["lds-orbitals"],t),style:{...n},children:[(0,nt.jsx)("div",{className:Se.default.center,style:{background:e}}),(0,nt.jsxs)("div",{className:(0,ct.default)(Se.default["inner-spin"]),children:[(0,nt.jsx)("div",{className:(0,ct.default)(Se.default["inner-arc"],Se.default["inner-arc_start-a"]),style:{borderColor:e}}),(0,nt.jsx)("div",{className:(0,ct.default)(Se.default["inner-arc"],Se.default["inner-arc_end-a"]),style:{borderColor:e}}),(0,nt.jsx)("div",{className:(0,ct.default)(Se.default["inner-arc"],Se.default["inner-arc_start-b"]),style:{borderColor:e}}),(0,nt.jsx)("div",{className:(0,ct.default)(Se.default["inner-arc"],Se.default["inner-arc_end-b"]),style:{borderColor:e}}),(0,nt.jsx)("div",{className:(0,ct.default)(Se.default["inner-moon-a"]),style:{background:e}}),(0,nt.jsx)("div",{className:(0,ct.default)(Se.default["inner-moon-b"]),style:{background:e}})]}),(0,nt.jsxs)("div",{className:(0,ct.default)(Se.default["outer-spin"]),children:[(0,nt.jsx)("div",{className:(0,ct.default)(Se.default["outer-arc"],Se.default["outer-arc_start-a"]),style:{borderColor:e}}),(0,nt.jsx)("div",{className:(0,ct.default)(Se.default["outer-arc"],Se.default["outer-arc_end-a"]),style:{borderColor:e}}),(0,nt.jsx)("div",{className:(0,ct.default)(Se.default["outer-arc"],Se.default["outer-arc_start-b"]),style:{borderColor:e}}),(0,nt.jsx)("div",{className:(0,ct.default)(Se.default["outer-arc"],Se.default["outer-arc_end-b"]),style:{borderColor:e}}),(0,nt.jsx)("div",{className:(0,ct.default)(Se.default["outer-moon-a"]),style:{background:e}}),(0,nt.jsx)("div",{className:(0,ct.default)(Se.default["outer-moon-b"]),style:{background:e}})]})]})}cc.Orbitals=C5;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Orbitals=void 0;var t=cc;Object.defineProperty(e,"Orbitals",{enumerable:!0,get:function(){return t.Orbitals}})})(bS);var CS={},dc={};const E5={"lds-ring":"_lds-ring_xgxdp_1"},k5=Object.freeze(Object.defineProperty({__proto__:null,default:E5},Symbol.toStringTag,{value:"Module"})),P5=Pt(k5);var ES=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(dc,"__esModule",{value:!0});dc.Ring=void 0;const mv=Tt,T5=ES(Ot),O5=ES(P5);function j5({color:e="#7f58af",size:t=80,className:n,style:r}){const i=[...Array(4)].map((o,a)=>(0,mv.jsx)("div",{style:{borderColor:`${e} transparent transparent transparent`,width:t*.8,height:t*.8,margin:t*.1,borderWidth:t*.1}},a));return(0,mv.jsx)("div",{className:(0,T5.default)(O5.default["lds-ring"],n),style:{width:t,height:t,...r},children:i})}dc.Ring=j5;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Ring=void 0;var t=dc;Object.defineProperty(e,"Ring",{enumerable:!0,get:function(){return t.Ring}})})(CS);var kS={},fc={};const M5={"lds-ripple":"_lds-ripple_1lgcf_1"},$5=Object.freeze(Object.defineProperty({__proto__:null,default:M5},Symbol.toStringTag,{value:"Module"})),I5=Pt($5);var PS=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(fc,"__esModule",{value:!0});fc.Ripple=void 0;const gv=Tt,D5=PS(Ot),L5=PS(I5);function A5({color:e="#7f58af",size:t=80,className:n,style:r}){const i=[...Array(2)].map((o,a)=>(0,gv.jsx)("div",{style:{borderColor:`${e}`,borderWidth:t*.05}},a));return(0,gv.jsx)("div",{className:(0,D5.default)(L5.default["lds-ripple"],n),style:{width:t,height:t,...r},children:i})}fc.Ripple=A5;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Ripple=void 0;var t=fc;Object.defineProperty(e,"Ripple",{enumerable:!0,get:function(){return t.Ripple}})})(kS);var TS={},pc={};const R5={"lds-roller":"_lds-roller_ks1ij_1","div-after":"_div-after_ks1ij_11"},F5=Object.freeze(Object.defineProperty({__proto__:null,default:R5},Symbol.toStringTag,{value:"Module"})),z5=Pt(F5);var OS=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(pc,"__esModule",{value:!0});pc.Roller=void 0;const Cd=Tt,vv=OS(Ot),yv=OS(z5);function N5({color:e="#7f58af",className:t,style:n}){const r=[...Array(8)].map((i,o)=>(0,Cd.jsx)("div",{children:(0,Cd.jsx)("div",{className:(0,vv.default)(yv.default["div-after"]),style:{background:e}})},o));return(0,Cd.jsx)("div",{className:(0,vv.default)(yv.default["lds-roller"],t),style:{...n},children:r})}pc.Roller=N5;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Roller=void 0;var t=pc;Object.defineProperty(e,"Roller",{enumerable:!0,get:function(){return t.Roller}})})(TS);var jS={},hc={};const B5={"lds-spinner":"_lds-spinner_flf3t_1","div-after":"_div-after_flf3t_12"},V5=Object.freeze(Object.defineProperty({__proto__:null,default:B5},Symbol.toStringTag,{value:"Module"})),U5=Pt(V5);var MS=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(hc,"__esModule",{value:!0});hc.Spinner=void 0;const Ed=Tt,xv=MS(Ot),bv=MS(U5);function H5({color:e="#7f58af",className:t,style:n}){const r=[...Array(12)].map((i,o)=>(0,Ed.jsx)("div",{children:(0,Ed.jsx)("div",{className:(0,xv.default)(bv.default["div-after"]),style:{background:e}})},o));return(0,Ed.jsx)("div",{className:(0,xv.default)(bv.default["lds-spinner"],t),style:{...n},children:r})}hc.Spinner=H5;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Spinner=void 0;var t=hc;Object.defineProperty(e,"Spinner",{enumerable:!0,get:function(){return t.Spinner}})})(jS);var $S={},mc={};const IS="_left_v9vlb_30",DS="_right_v9vlb_33",LS="_anim_v9vlb_37",W5={"lds-ouroboro":"_lds-ouroboro_v9vlb_1",left:IS,right:DS,anim:LS,"lds-ouroboro-rotate":"_lds-ouroboro-rotate_v9vlb_1"},G5=Object.freeze(Object.defineProperty({__proto__:null,anim:LS,default:W5,left:IS,right:DS},Symbol.toStringTag,{value:"Module"})),Y5=Pt(G5);var AS=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(mc,"__esModule",{value:!0});mc.Ouroboro=void 0;const Io=Tt,Do=AS(Ot),Lo=AS(Y5);function q5({color:e="#7f58af",style:t,className:n}){return(0,Io.jsxs)("div",{className:(0,Do.default)(Lo.default["lds-ouroboro"],n),style:{...t},children:[(0,Io.jsx)("span",{className:(0,Do.default)(Lo.default.left),children:(0,Io.jsx)("span",{className:(0,Do.default)(Lo.default.anim),style:{background:e}})}),(0,Io.jsx)("span",{className:(0,Do.default)(Lo.default.right),children:(0,Io.jsx)("span",{className:(0,Do.default)(Lo.default.anim),style:{background:e}})})]})}mc.Ouroboro=q5;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Ouroboro=void 0;var t=mc;Object.defineProperty(e,"Ouroboro",{enumerable:!0,get:function(){return t.Ouroboro}})})($S);(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Ouroboro=e.Spinner=e.Roller=e.Ripple=e.Ring=e.Orbitals=e.Hourglass=e.Heart=e.Grid=e.Facebook=e.Ellipsis=e.DualRing=e.Default=e.Circle=void 0;const t=Nw;Object.defineProperty(e,"Circle",{enumerable:!0,get:function(){return t.Circle}});const n=aS;Object.defineProperty(e,"Default",{enumerable:!0,get:function(){return n.Default}});const r=lS;Object.defineProperty(e,"DualRing",{enumerable:!0,get:function(){return r.DualRing}});const i=cS;Object.defineProperty(e,"Ellipsis",{enumerable:!0,get:function(){return i.Ellipsis}});const o=fS;Object.defineProperty(e,"Facebook",{enumerable:!0,get:function(){return o.Facebook}});const a=hS;Object.defineProperty(e,"Grid",{enumerable:!0,get:function(){return a.Grid}});const l=gS;Object.defineProperty(e,"Heart",{enumerable:!0,get:function(){return l.Heart}});const s=yS;Object.defineProperty(e,"Hourglass",{enumerable:!0,get:function(){return s.Hourglass}});const u=bS;Object.defineProperty(e,"Orbitals",{enumerable:!0,get:function(){return u.Orbitals}});const d=CS;Object.defineProperty(e,"Ring",{enumerable:!0,get:function(){return d.Ring}});const c=kS;Object.defineProperty(e,"Ripple",{enumerable:!0,get:function(){return c.Ripple}});const y=TS;Object.defineProperty(e,"Roller",{enumerable:!0,get:function(){return y.Roller}});const p=jS;Object.defineProperty(e,"Spinner",{enumerable:!0,get:function(){return p.Spinner}});const m=$S;Object.defineProperty(e,"Ouroboro",{enumerable:!0,get:function(){return m.Ouroboro}})})(zw);const X5=()=>f.jsx(gM,{children:f.jsx(zw.Default,{color:"#6d433da8"})});const K5="/Didiv/assets/Ancient_Kyiv-2153f7e6.ttf",Q5=oT`
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
  src: url(${K5}) format('truetype');
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
`,Z5=E.div`
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
`,J5=E(Oe)`
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
`,e$=E.h2`

  font-size: 30px;
  text-transform: uppercase;
  margin-bottom: 20px;
  color: #333;
  @media screen and (min-width: 768px) {
    font-size: 35px;
  }
`,t$=E.h3`

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
`,n$=E.a`

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
`,r$=E.div`
  width: 40px;
  height: 40px;
  border: 2px solid white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`,i$=()=>{const[e,t]=b.useState([]);return b.useEffect(()=>{async function n(){try{const r=await fetch("https://backenddidiv-production.up.railway.app/api/categories?populate=image&sort=title:asc",{credentials:"omit"});if(!r.ok){console.error("Server error:",r.status);return}const i=await r.json();if(console.log("API response:",i),!i.data){console.error("No data field:",i);return}t(i.data.map(o=>{var a;return{title:o.title,image:(a=o.image)==null?void 0:a.url}}))}catch(r){console.error("Fetch error:",r)}}n()},[]),console.log(e),f.jsxs(f.Fragment,{children:[f.jsx(e$,{children:"Каталог"}),f.jsxs(Z5,{children:[e.slice(0,7).map(n=>f.jsx(J5,{to:`catalog/${n.title}`,bg:n.image,isBig:n.big,children:f.jsx(t$,{children:n.title})},n.title)),f.jsxs(n$,{href:"catalog",children:[f.jsx("p",{children:"Весь каталог"}),f.jsx(r$,{children:f.jsx($u,{size:24})})]})]})]})};function wv(e){return e!==null&&typeof e=="object"&&"constructor"in e&&e.constructor===Object}function _m(e={},t={}){const n=["__proto__","constructor","prototype"];Object.keys(t).filter(r=>n.indexOf(r)<0).forEach(r=>{typeof e[r]>"u"?e[r]=t[r]:wv(t[r])&&wv(e[r])&&Object.keys(t[r]).length>0&&_m(e[r],t[r])})}const RS={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector(){return null},querySelectorAll(){return[]},getElementById(){return null},createEvent(){return{initEvent(){}}},createElement(){return{children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName(){return[]}}},createElementNS(){return{}},importNode(){return null},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function kn(){const e=typeof document<"u"?document:{};return _m(e,RS),e}const o$={document:RS,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle(){return{getPropertyValue(){return""}}},Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia(){return{}},requestAnimationFrame(e){return typeof setTimeout>"u"?(e(),null):setTimeout(e,0)},cancelAnimationFrame(e){typeof setTimeout>"u"||clearTimeout(e)}};function vt(){const e=typeof window<"u"?window:{};return _m(e,o$),e}function a$(e=""){return e.trim().split(" ").filter(t=>!!t.trim())}function s$(e){const t=e;Object.keys(t).forEach(n=>{try{t[n]=null}catch{}try{delete t[n]}catch{}})}function FS(e,t=0){return setTimeout(e,t)}function Yl(){return Date.now()}function l$(e){const t=vt();let n;return t.getComputedStyle&&(n=t.getComputedStyle(e,null)),!n&&e.currentStyle&&(n=e.currentStyle),n||(n=e.style),n}function u$(e,t="x"){const n=vt();let r,i,o;const a=l$(e);return n.WebKitCSSMatrix?(i=a.transform||a.webkitTransform,i.split(",").length>6&&(i=i.split(", ").map(l=>l.replace(",",".")).join(", ")),o=new n.WebKitCSSMatrix(i==="none"?"":i)):(o=a.MozTransform||a.OTransform||a.MsTransform||a.msTransform||a.transform||a.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),r=o.toString().split(",")),t==="x"&&(n.WebKitCSSMatrix?i=o.m41:r.length===16?i=parseFloat(r[12]):i=parseFloat(r[4])),t==="y"&&(n.WebKitCSSMatrix?i=o.m42:r.length===16?i=parseFloat(r[13]):i=parseFloat(r[5])),i||0}function Cs(e){return typeof e=="object"&&e!==null&&e.constructor&&Object.prototype.toString.call(e).slice(8,-1)==="Object"}function c$(e){return typeof window<"u"&&typeof window.HTMLElement<"u"?e instanceof HTMLElement:e&&(e.nodeType===1||e.nodeType===11)}function Mt(...e){const t=Object(e[0]);for(let n=1;n<e.length;n+=1){const r=e[n];if(r!=null&&!c$(r)){const i=Object.keys(Object(r)).filter(o=>o!=="__proto__"&&o!=="constructor"&&o!=="prototype");for(let o=0,a=i.length;o<a;o+=1){const l=i[o],s=Object.getOwnPropertyDescriptor(r,l);s!==void 0&&s.enumerable&&(Cs(t[l])&&Cs(r[l])?r[l].__swiper__?t[l]=r[l]:Mt(t[l],r[l]):!Cs(t[l])&&Cs(r[l])?(t[l]={},r[l].__swiper__?t[l]=r[l]:Mt(t[l],r[l])):t[l]=r[l])}}}return t}function hi(e,t,n){e.style.setProperty(t,n)}function zS({swiper:e,targetPosition:t,side:n}){const r=vt(),i=-e.translate;let o=null,a;const l=e.params.speed;e.wrapperEl.style.scrollSnapType="none",r.cancelAnimationFrame(e.cssModeFrameID);const s=t>i?"next":"prev",u=(c,y)=>s==="next"&&c>=y||s==="prev"&&c<=y,d=()=>{a=new Date().getTime(),o===null&&(o=a);const c=Math.max(Math.min((a-o)/l,1),0),y=.5-Math.cos(c*Math.PI)/2;let p=i+y*(t-i);if(u(p,t)&&(p=t),e.wrapperEl.scrollTo({[n]:p}),u(p,t)){e.wrapperEl.style.overflow="hidden",e.wrapperEl.style.scrollSnapType="",setTimeout(()=>{e.wrapperEl.style.overflow="",e.wrapperEl.scrollTo({[n]:p})}),r.cancelAnimationFrame(e.cssModeFrameID);return}e.cssModeFrameID=r.requestAnimationFrame(d)};d()}function Sn(e,t=""){const n=vt(),r=[...e.children];return n.HTMLSlotElement&&e instanceof HTMLSlotElement&&r.push(...e.assignedElements()),t?r.filter(i=>i.matches(t)):r}function d$(e,t){const n=[t];for(;n.length>0;){const r=n.shift();if(e===r)return!0;n.push(...r.children,...r.shadowRoot?r.shadowRoot.children:[],...r.assignedElements?r.assignedElements():[])}}function f$(e,t){const n=vt();let r=t.contains(e);return!r&&n.HTMLSlotElement&&t instanceof HTMLSlotElement&&(r=[...t.assignedElements()].includes(e),r||(r=d$(e,t))),r}function ql(e){try{console.warn(e);return}catch{}}function Xl(e,t=[]){const n=document.createElement(e);return n.classList.add(...Array.isArray(t)?t:a$(t)),n}function p$(e,t){const n=[];for(;e.previousElementSibling;){const r=e.previousElementSibling;t?r.matches(t)&&n.push(r):n.push(r),e=r}return n}function h$(e,t){const n=[];for(;e.nextElementSibling;){const r=e.nextElementSibling;t?r.matches(t)&&n.push(r):n.push(r),e=r}return n}function fr(e,t){return vt().getComputedStyle(e,null).getPropertyValue(t)}function Kl(e){let t=e,n;if(t){for(n=0;(t=t.previousSibling)!==null;)t.nodeType===1&&(n+=1);return n}}function NS(e,t){const n=[];let r=e.parentElement;for(;r;)t?r.matches(t)&&n.push(r):n.push(r),r=r.parentElement;return n}function Pp(e,t,n){const r=vt();return n?e[t==="width"?"offsetWidth":"offsetHeight"]+parseFloat(r.getComputedStyle(e,null).getPropertyValue(t==="width"?"margin-right":"margin-top"))+parseFloat(r.getComputedStyle(e,null).getPropertyValue(t==="width"?"margin-left":"margin-bottom")):e.offsetWidth}function He(e){return(Array.isArray(e)?e:[e]).filter(t=>!!t)}function Da(e,t=""){typeof trustedTypes<"u"?e.innerHTML=trustedTypes.createPolicy("html",{createHTML:n=>n}).createHTML(t):e.innerHTML=t}function BS(e,t,n,r){return e.params.createElements&&Object.keys(r).forEach(i=>{if(!n[i]&&n.auto===!0){let o=Sn(e.el,`.${r[i]}`)[0];o||(o=Xl("div",r[i]),o.className=r[i],e.el.append(o)),n[i]=o,t[i]=o}}),n}const Sv='<svg class="swiper-navigation-icon" width="11" height="20" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.38296 20.0762C0.111788 19.805 0.111788 19.3654 0.38296 19.0942L9.19758 10.2796L0.38296 1.46497C0.111788 1.19379 0.111788 0.754138 0.38296 0.482966C0.654131 0.211794 1.09379 0.211794 1.36496 0.482966L10.4341 9.55214C10.8359 9.9539 10.8359 10.6053 10.4341 11.007L1.36496 20.0762C1.09379 20.3474 0.654131 20.3474 0.38296 20.0762Z" fill="currentColor"/></svg>';function m$({swiper:e,extendParams:t,on:n,emit:r}){t({navigation:{nextEl:null,prevEl:null,addIcons:!0,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock",navigationDisabledClass:"swiper-navigation-disabled"}}),e.navigation={nextEl:null,prevEl:null,arrowSvg:Sv};function i(p){let m;return p&&typeof p=="string"&&e.isElement&&(m=e.el.querySelector(p)||e.hostEl.querySelector(p),m)?m:(p&&(typeof p=="string"&&(m=[...document.querySelectorAll(p)]),e.params.uniqueNavElements&&typeof p=="string"&&m&&m.length>1&&e.el.querySelectorAll(p).length===1?m=e.el.querySelector(p):m&&m.length===1&&(m=m[0])),p&&!m?p:m)}function o(p,m){const g=e.params.navigation;p=He(p),p.forEach(w=>{w&&(w.classList[m?"add":"remove"](...g.disabledClass.split(" ")),w.tagName==="BUTTON"&&(w.disabled=m),e.params.watchOverflow&&e.enabled&&w.classList[e.isLocked?"add":"remove"](g.lockClass))})}function a(){const{nextEl:p,prevEl:m}=e.navigation;if(e.params.loop){o(m,!1),o(p,!1);return}o(m,e.isBeginning&&!e.params.rewind),o(p,e.isEnd&&!e.params.rewind)}function l(p){p.preventDefault(),!(e.isBeginning&&!e.params.loop&&!e.params.rewind)&&(e.slidePrev(),r("navigationPrev"))}function s(p){p.preventDefault(),!(e.isEnd&&!e.params.loop&&!e.params.rewind)&&(e.slideNext(),r("navigationNext"))}function u(){const p=e.params.navigation;if(e.params.navigation=BS(e,e.originalParams.navigation,e.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),!(p.nextEl||p.prevEl))return;let m=i(p.nextEl),g=i(p.prevEl);Object.assign(e.navigation,{nextEl:m,prevEl:g}),m=He(m),g=He(g);const w=(h,v)=>{if(h){if(p.addIcons&&h.matches(".swiper-button-next,.swiper-button-prev")&&!h.querySelector("svg")){const x=document.createElement("div");Da(x,Sv),h.appendChild(x.querySelector("svg")),x.remove()}h.addEventListener("click",v==="next"?s:l)}!e.enabled&&h&&h.classList.add(...p.lockClass.split(" "))};m.forEach(h=>w(h,"next")),g.forEach(h=>w(h,"prev"))}function d(){let{nextEl:p,prevEl:m}=e.navigation;p=He(p),m=He(m);const g=(w,h)=>{w.removeEventListener("click",h==="next"?s:l),w.classList.remove(...e.params.navigation.disabledClass.split(" "))};p.forEach(w=>g(w,"next")),m.forEach(w=>g(w,"prev"))}n("init",()=>{e.params.navigation.enabled===!1?y():(u(),a())}),n("toEdge fromEdge lock unlock",()=>{a()}),n("destroy",()=>{d()}),n("enable disable",()=>{let{nextEl:p,prevEl:m}=e.navigation;if(p=He(p),m=He(m),e.enabled){a();return}[...p,...m].filter(g=>!!g).forEach(g=>g.classList.add(e.params.navigation.lockClass))}),n("click",(p,m)=>{let{nextEl:g,prevEl:w}=e.navigation;g=He(g),w=He(w);const h=m.target;let v=w.includes(h)||g.includes(h);if(e.isElement&&!v){const x=m.path||m.composedPath&&m.composedPath();x&&(v=x.find(S=>g.includes(S)||w.includes(S)))}if(e.params.navigation.hideOnClick&&!v){if(e.pagination&&e.params.pagination&&e.params.pagination.clickable&&(e.pagination.el===h||e.pagination.el.contains(h)))return;let x;g.length?x=g[0].classList.contains(e.params.navigation.hiddenClass):w.length&&(x=w[0].classList.contains(e.params.navigation.hiddenClass)),r(x===!0?"navigationShow":"navigationHide"),[...g,...w].filter(S=>!!S).forEach(S=>S.classList.toggle(e.params.navigation.hiddenClass))}});const c=()=>{e.el.classList.remove(...e.params.navigation.navigationDisabledClass.split(" ")),u(),a()},y=()=>{e.el.classList.add(...e.params.navigation.navigationDisabledClass.split(" ")),d()};Object.assign(e.navigation,{enable:c,disable:y,update:a,init:u,destroy:d})}function Ao(e=""){return`.${e.trim().replace(/([\.:!+\/()[\]#>~*^$|=,'"@{}\\])/g,"\\$1").replace(/ /g,".")}`}function g$({swiper:e,extendParams:t,on:n,emit:r}){const i="swiper-pagination";t({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:h=>h,formatFractionTotal:h=>h,bulletClass:`${i}-bullet`,bulletActiveClass:`${i}-bullet-active`,modifierClass:`${i}-`,currentClass:`${i}-current`,totalClass:`${i}-total`,hiddenClass:`${i}-hidden`,progressbarFillClass:`${i}-progressbar-fill`,progressbarOppositeClass:`${i}-progressbar-opposite`,clickableClass:`${i}-clickable`,lockClass:`${i}-lock`,horizontalClass:`${i}-horizontal`,verticalClass:`${i}-vertical`,paginationDisabledClass:`${i}-disabled`}}),e.pagination={el:null,bullets:[]};let o,a=0;function l(){return!e.params.pagination.el||!e.pagination.el||Array.isArray(e.pagination.el)&&e.pagination.el.length===0}function s(h,v){const{bulletActiveClass:x}=e.params.pagination;h&&(h=h[`${v==="prev"?"previous":"next"}ElementSibling`],h&&(h.classList.add(`${x}-${v}`),h=h[`${v==="prev"?"previous":"next"}ElementSibling`],h&&h.classList.add(`${x}-${v}-${v}`)))}function u(h,v,x){if(h=h%x,v=v%x,v===h+1)return"next";if(v===h-1)return"previous"}function d(h){const v=h.target.closest(Ao(e.params.pagination.bulletClass));if(!v)return;h.preventDefault();const x=Kl(v)*e.params.slidesPerGroup;if(e.params.loop){if(e.realIndex===x)return;const S=u(e.realIndex,x,e.slides.length);S==="next"?e.slideNext():S==="previous"?e.slidePrev():e.slideToLoop(x)}else e.slideTo(x)}function c(){const h=e.rtl,v=e.params.pagination;if(l())return;let x=e.pagination.el;x=He(x);let S,C;const T=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.slides.length,k=e.params.loop?Math.ceil(T/e.params.slidesPerGroup):e.snapGrid.length;if(e.params.loop?(C=e.previousRealIndex||0,S=e.params.slidesPerGroup>1?Math.floor(e.realIndex/e.params.slidesPerGroup):e.realIndex):typeof e.snapIndex<"u"?(S=e.snapIndex,C=e.previousSnapIndex):(C=e.previousIndex||0,S=e.activeIndex||0),v.type==="bullets"&&e.pagination.bullets&&e.pagination.bullets.length>0){const _=e.pagination.bullets;let M,$,D;if(v.dynamicBullets&&(o=Pp(_[0],e.isHorizontal()?"width":"height",!0),x.forEach(A=>{A.style[e.isHorizontal()?"width":"height"]=`${o*(v.dynamicMainBullets+4)}px`}),v.dynamicMainBullets>1&&C!==void 0&&(a+=S-(C||0),a>v.dynamicMainBullets-1?a=v.dynamicMainBullets-1:a<0&&(a=0)),M=Math.max(S-a,0),$=M+(Math.min(_.length,v.dynamicMainBullets)-1),D=($+M)/2),_.forEach(A=>{const j=[...["","-next","-next-next","-prev","-prev-prev","-main"].map(F=>`${v.bulletActiveClass}${F}`)].map(F=>typeof F=="string"&&F.includes(" ")?F.split(" "):F).flat();A.classList.remove(...j)}),x.length>1)_.forEach(A=>{const j=Kl(A);j===S?A.classList.add(...v.bulletActiveClass.split(" ")):e.isElement&&A.setAttribute("part","bullet"),v.dynamicBullets&&(j>=M&&j<=$&&A.classList.add(...`${v.bulletActiveClass}-main`.split(" ")),j===M&&s(A,"prev"),j===$&&s(A,"next"))});else{const A=_[S];if(A&&A.classList.add(...v.bulletActiveClass.split(" ")),e.isElement&&_.forEach((j,F)=>{j.setAttribute("part",F===S?"bullet-active":"bullet")}),v.dynamicBullets){const j=_[M],F=_[$];for(let R=M;R<=$;R+=1)_[R]&&_[R].classList.add(...`${v.bulletActiveClass}-main`.split(" "));s(j,"prev"),s(F,"next")}}if(v.dynamicBullets){const A=Math.min(_.length,v.dynamicMainBullets+4),j=(o*A-o)/2-D*o,F=h?"right":"left";_.forEach(R=>{R.style[e.isHorizontal()?F:"top"]=`${j}px`})}}x.forEach((_,M)=>{if(v.type==="fraction"&&(_.querySelectorAll(Ao(v.currentClass)).forEach($=>{$.textContent=v.formatFractionCurrent(S+1)}),_.querySelectorAll(Ao(v.totalClass)).forEach($=>{$.textContent=v.formatFractionTotal(k)})),v.type==="progressbar"){let $;v.progressbarOpposite?$=e.isHorizontal()?"vertical":"horizontal":$=e.isHorizontal()?"horizontal":"vertical";const D=(S+1)/k;let A=1,j=1;$==="horizontal"?A=D:j=D,_.querySelectorAll(Ao(v.progressbarFillClass)).forEach(F=>{F.style.transform=`translate3d(0,0,0) scaleX(${A}) scaleY(${j})`,F.style.transitionDuration=`${e.params.speed}ms`})}v.type==="custom"&&v.renderCustom?(Da(_,v.renderCustom(e,S+1,k)),M===0&&r("paginationRender",_)):(M===0&&r("paginationRender",_),r("paginationUpdate",_)),e.params.watchOverflow&&e.enabled&&_.classList[e.isLocked?"add":"remove"](v.lockClass)})}function y(){const h=e.params.pagination;if(l())return;const v=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.grid&&e.params.grid.rows>1?e.slides.length/Math.ceil(e.params.grid.rows):e.slides.length;let x=e.pagination.el;x=He(x);let S="";if(h.type==="bullets"){let C=e.params.loop?Math.ceil(v/e.params.slidesPerGroup):e.snapGrid.length;e.params.freeMode&&e.params.freeMode.enabled&&C>v&&(C=v);for(let T=0;T<C;T+=1)h.renderBullet?S+=h.renderBullet.call(e,T,h.bulletClass):S+=`<${h.bulletElement} ${e.isElement?'part="bullet"':""} class="${h.bulletClass}"></${h.bulletElement}>`}h.type==="fraction"&&(h.renderFraction?S=h.renderFraction.call(e,h.currentClass,h.totalClass):S=`<span class="${h.currentClass}"></span> / <span class="${h.totalClass}"></span>`),h.type==="progressbar"&&(h.renderProgressbar?S=h.renderProgressbar.call(e,h.progressbarFillClass):S=`<span class="${h.progressbarFillClass}"></span>`),e.pagination.bullets=[],x.forEach(C=>{h.type!=="custom"&&Da(C,S||""),h.type==="bullets"&&e.pagination.bullets.push(...C.querySelectorAll(Ao(h.bulletClass)))}),h.type!=="custom"&&r("paginationRender",x[0])}function p(){e.params.pagination=BS(e,e.originalParams.pagination,e.params.pagination,{el:"swiper-pagination"});const h=e.params.pagination;if(!h.el)return;let v;typeof h.el=="string"&&e.isElement&&(v=e.el.querySelector(h.el)),!v&&typeof h.el=="string"&&(v=[...document.querySelectorAll(h.el)]),v||(v=h.el),!(!v||v.length===0)&&(e.params.uniqueNavElements&&typeof h.el=="string"&&Array.isArray(v)&&v.length>1&&(v=[...e.el.querySelectorAll(h.el)],v.length>1&&(v=v.find(x=>NS(x,".swiper")[0]===e.el))),Array.isArray(v)&&v.length===1&&(v=v[0]),Object.assign(e.pagination,{el:v}),v=He(v),v.forEach(x=>{h.type==="bullets"&&h.clickable&&x.classList.add(...(h.clickableClass||"").split(" ")),x.classList.add(h.modifierClass+h.type),x.classList.add(e.isHorizontal()?h.horizontalClass:h.verticalClass),h.type==="bullets"&&h.dynamicBullets&&(x.classList.add(`${h.modifierClass}${h.type}-dynamic`),a=0,h.dynamicMainBullets<1&&(h.dynamicMainBullets=1)),h.type==="progressbar"&&h.progressbarOpposite&&x.classList.add(h.progressbarOppositeClass),h.clickable&&x.addEventListener("click",d),e.enabled||x.classList.add(h.lockClass)}))}function m(){const h=e.params.pagination;if(l())return;let v=e.pagination.el;v&&(v=He(v),v.forEach(x=>{x.classList.remove(h.hiddenClass),x.classList.remove(h.modifierClass+h.type),x.classList.remove(e.isHorizontal()?h.horizontalClass:h.verticalClass),h.clickable&&(x.classList.remove(...(h.clickableClass||"").split(" ")),x.removeEventListener("click",d))})),e.pagination.bullets&&e.pagination.bullets.forEach(x=>x.classList.remove(...h.bulletActiveClass.split(" ")))}n("changeDirection",()=>{if(!e.pagination||!e.pagination.el)return;const h=e.params.pagination;let{el:v}=e.pagination;v=He(v),v.forEach(x=>{x.classList.remove(h.horizontalClass,h.verticalClass),x.classList.add(e.isHorizontal()?h.horizontalClass:h.verticalClass)})}),n("init",()=>{e.params.pagination.enabled===!1?w():(p(),y(),c())}),n("activeIndexChange",()=>{typeof e.snapIndex>"u"&&c()}),n("snapIndexChange",()=>{c()}),n("snapGridLengthChange",()=>{y(),c()}),n("destroy",()=>{m()}),n("enable disable",()=>{let{el:h}=e.pagination;h&&(h=He(h),h.forEach(v=>v.classList[e.enabled?"remove":"add"](e.params.pagination.lockClass)))}),n("lock unlock",()=>{c()}),n("click",(h,v)=>{const x=v.target,S=He(e.pagination.el);if(e.params.pagination.el&&e.params.pagination.hideOnClick&&S&&S.length>0&&!x.classList.contains(e.params.pagination.bulletClass)){if(e.navigation&&(e.navigation.nextEl&&x===e.navigation.nextEl||e.navigation.prevEl&&x===e.navigation.prevEl))return;const C=S[0].classList.contains(e.params.pagination.hiddenClass);r(C===!0?"paginationShow":"paginationHide"),S.forEach(T=>T.classList.toggle(e.params.pagination.hiddenClass))}});const g=()=>{e.el.classList.remove(e.params.pagination.paginationDisabledClass);let{el:h}=e.pagination;h&&(h=He(h),h.forEach(v=>v.classList.remove(e.params.pagination.paginationDisabledClass))),p(),y(),c()},w=()=>{e.el.classList.add(e.params.pagination.paginationDisabledClass);let{el:h}=e.pagination;h&&(h=He(h),h.forEach(v=>v.classList.add(e.params.pagination.paginationDisabledClass))),m()};Object.assign(e.pagination,{enable:g,disable:w,render:y,update:c,init:p,destroy:m})}function v$({swiper:e,extendParams:t,on:n,emit:r,params:i}){e.autoplay={running:!1,paused:!1,timeLeft:0},t({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!1,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}});let o,a,l=i&&i.autoplay?i.autoplay.delay:3e3,s=i&&i.autoplay?i.autoplay.delay:3e3,u,d=new Date().getTime(),c,y,p,m,g,w;function h(O){!e||e.destroyed||!e.wrapperEl||O.target===e.wrapperEl&&(e.wrapperEl.removeEventListener("transitionend",h),!(w||O.detail&&O.detail.bySwiperTouchMove)&&M())}const v=()=>{if(e.destroyed||!e.autoplay.running)return;e.autoplay.paused?c=!0:c&&(s=u,c=!1);const O=e.autoplay.paused?u:d+s-new Date().getTime();e.autoplay.timeLeft=O,r("autoplayTimeLeft",O,O/l),a=requestAnimationFrame(()=>{v()})},x=()=>{let O;return e.virtual&&e.params.virtual.enabled?O=e.slides.find(I=>I.classList.contains("swiper-slide-active")):O=e.slides[e.activeIndex],O?parseInt(O.getAttribute("data-swiper-autoplay"),10):void 0},S=()=>{let O=e.params.autoplay.delay;const P=x();return!Number.isNaN(P)&&P>0&&(O=P),O},C=O=>{if(e.destroyed||!e.autoplay.running)return;cancelAnimationFrame(a),v();let P=O;typeof P>"u"&&(P=S(),l=P,s=P),u=P;const I=e.params.speed,z=()=>{!e||e.destroyed||(e.params.autoplay.reverseDirection?!e.isBeginning||e.params.loop||e.params.rewind?(e.slidePrev(I,!0,!0),r("autoplay")):e.params.autoplay.stopOnLastSlide||(e.slideTo(e.slides.length-1,I,!0,!0),r("autoplay")):!e.isEnd||e.params.loop||e.params.rewind?(e.slideNext(I,!0,!0),r("autoplay")):e.params.autoplay.stopOnLastSlide||(e.slideTo(0,I,!0,!0),r("autoplay")),e.params.cssMode&&(d=new Date().getTime(),requestAnimationFrame(()=>{C()})))};return P>0?(clearTimeout(o),o=setTimeout(()=>{z()},P)):requestAnimationFrame(()=>{z()}),P},T=()=>{d=new Date().getTime(),e.autoplay.running=!0,C(),r("autoplayStart")},k=()=>{e.autoplay.running=!1,clearTimeout(o),cancelAnimationFrame(a),r("autoplayStop")},_=(O,P)=>{if(e.destroyed||!e.autoplay.running)return;clearTimeout(o),O||(g=!0);const I=()=>{r("autoplayPause"),e.params.autoplay.waitForTransition?e.wrapperEl.addEventListener("transitionend",h):M()};if(e.autoplay.paused=!0,P){I();return}u=(u||e.params.autoplay.delay)-(new Date().getTime()-d),!(e.isEnd&&u<0&&!e.params.loop)&&(u<0&&(u=0),I())},M=()=>{e.isEnd&&u<0&&!e.params.loop||e.destroyed||!e.autoplay.running||(d=new Date().getTime(),g?(g=!1,C(u)):C(),e.autoplay.paused=!1,r("autoplayResume"))},$=()=>{if(e.destroyed||!e.autoplay.running)return;const O=kn();O.visibilityState==="hidden"&&(g=!0,_(!0)),O.visibilityState==="visible"&&M()},D=O=>{O.pointerType==="mouse"&&(g=!0,w=!0,!(e.animating||e.autoplay.paused)&&_(!0))},A=O=>{O.pointerType==="mouse"&&(w=!1,e.autoplay.paused&&M())},j=()=>{e.params.autoplay.pauseOnMouseEnter&&(e.el.addEventListener("pointerenter",D),e.el.addEventListener("pointerleave",A))},F=()=>{e.el&&typeof e.el!="string"&&(e.el.removeEventListener("pointerenter",D),e.el.removeEventListener("pointerleave",A))},R=()=>{kn().addEventListener("visibilitychange",$)},L=()=>{kn().removeEventListener("visibilitychange",$)};n("init",()=>{e.params.autoplay.enabled&&(j(),R(),T())}),n("destroy",()=>{F(),L(),e.autoplay.running&&k()}),n("_freeModeStaticRelease",()=>{(p||g)&&M()}),n("_freeModeNoMomentumRelease",()=>{e.params.autoplay.disableOnInteraction?k():_(!0,!0)}),n("beforeTransitionStart",(O,P,I)=>{e.destroyed||!e.autoplay.running||(I||!e.params.autoplay.disableOnInteraction?_(!0,!0):k())}),n("sliderFirstMove",()=>{if(!(e.destroyed||!e.autoplay.running)){if(e.params.autoplay.disableOnInteraction){k();return}y=!0,p=!1,g=!1,m=setTimeout(()=>{g=!0,p=!0,_(!0)},200)}}),n("touchEnd",()=>{if(!(e.destroyed||!e.autoplay.running||!y)){if(clearTimeout(m),clearTimeout(o),e.params.autoplay.disableOnInteraction){p=!1,y=!1;return}p&&e.params.cssMode&&M(),p=!1,y=!1}}),n("slideChange",()=>{e.destroyed||!e.autoplay.running||e.autoplay.paused&&(u=S(),l=S())}),Object.assign(e.autoplay,{start:T,stop:k,pause:_,resume:M})}let kd;function y$(){const e=vt(),t=kn();return{smoothScroll:t.documentElement&&t.documentElement.style&&"scrollBehavior"in t.documentElement.style,touch:!!("ontouchstart"in e||e.DocumentTouch&&t instanceof e.DocumentTouch)}}function VS(){return kd||(kd=y$()),kd}let Pd;function x$({userAgent:e}={}){const t=VS(),n=vt(),r=n.navigator.platform,i=e||n.navigator.userAgent,o={ios:!1,android:!1},a=n.screen.width,l=n.screen.height,s=i.match(/(Android);?[\s\/]+([\d.]+)?/);let u=i.match(/(iPad)(?!\1).*OS\s([\d_]+)/);const d=i.match(/(iPod)(.*OS\s([\d_]+))?/),c=!u&&i.match(/(iPhone\sOS|iOS)\s([\d_]+)/),y=r==="Win32";let p=r==="MacIntel";const m=["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"];return!u&&p&&t.touch&&m.indexOf(`${a}x${l}`)>=0&&(u=i.match(/(Version)\/([\d.]+)/),u||(u=[0,1,"13_0_0"]),p=!1),s&&!y&&(o.os="android",o.android=!0),(u||c||d)&&(o.os="ios",o.ios=!0),o}function US(e={}){return Pd||(Pd=x$(e)),Pd}let Td;function b$(){const e=vt(),t=US();let n=!1;function r(){const l=e.navigator.userAgent.toLowerCase();return l.indexOf("safari")>=0&&l.indexOf("chrome")<0&&l.indexOf("android")<0}if(r()){const l=String(e.navigator.userAgent);if(l.includes("Version/")){const[s,u]=l.split("Version/")[1].split(" ")[0].split(".").map(d=>Number(d));n=s<16||s===16&&u<2}}const i=/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent),o=r(),a=o||i&&t.ios;return{isSafari:n||o,needPerspectiveFix:n,need3dFix:a,isWebView:i}}function HS(){return Td||(Td=b$()),Td}function w$({swiper:e,on:t,emit:n}){const r=vt();let i=null,o=null;const a=()=>{!e||e.destroyed||!e.initialized||(n("beforeResize"),n("resize"))},l=()=>{!e||e.destroyed||!e.initialized||(i=new ResizeObserver(d=>{o=r.requestAnimationFrame(()=>{const{width:c,height:y}=e;let p=c,m=y;d.forEach(({contentBoxSize:g,contentRect:w,target:h})=>{h&&h!==e.el||(p=w?w.width:(g[0]||g).inlineSize,m=w?w.height:(g[0]||g).blockSize)}),(p!==c||m!==y)&&a()})}),i.observe(e.el))},s=()=>{o&&r.cancelAnimationFrame(o),i&&i.unobserve&&e.el&&(i.unobserve(e.el),i=null)},u=()=>{!e||e.destroyed||!e.initialized||n("orientationchange")};t("init",()=>{if(e.params.resizeObserver&&typeof r.ResizeObserver<"u"){l();return}r.addEventListener("resize",a),r.addEventListener("orientationchange",u)}),t("destroy",()=>{s(),r.removeEventListener("resize",a),r.removeEventListener("orientationchange",u)})}function S$({swiper:e,extendParams:t,on:n,emit:r}){const i=[],o=vt(),a=(u,d={})=>{const c=o.MutationObserver||o.WebkitMutationObserver,y=new c(p=>{if(e.__preventObserver__)return;if(p.length===1){r("observerUpdate",p[0]);return}const m=function(){r("observerUpdate",p[0])};o.requestAnimationFrame?o.requestAnimationFrame(m):o.setTimeout(m,0)});y.observe(u,{attributes:typeof d.attributes>"u"?!0:d.attributes,childList:e.isElement||(typeof d.childList>"u"?!0:d).childList,characterData:typeof d.characterData>"u"?!0:d.characterData}),i.push(y)},l=()=>{if(e.params.observer){if(e.params.observeParents){const u=NS(e.hostEl);for(let d=0;d<u.length;d+=1)a(u[d])}a(e.hostEl,{childList:e.params.observeSlideChildren}),a(e.wrapperEl,{attributes:!1})}},s=()=>{i.forEach(u=>{u.disconnect()}),i.splice(0,i.length)};t({observer:!1,observeParents:!1,observeSlideChildren:!1}),n("init",l),n("destroy",s)}var _$={on(e,t,n){const r=this;if(!r.eventsListeners||r.destroyed||typeof t!="function")return r;const i=n?"unshift":"push";return e.split(" ").forEach(o=>{r.eventsListeners[o]||(r.eventsListeners[o]=[]),r.eventsListeners[o][i](t)}),r},once(e,t,n){const r=this;if(!r.eventsListeners||r.destroyed||typeof t!="function")return r;function i(...o){r.off(e,i),i.__emitterProxy&&delete i.__emitterProxy,t.apply(r,o)}return i.__emitterProxy=t,r.on(e,i,n)},onAny(e,t){const n=this;if(!n.eventsListeners||n.destroyed||typeof e!="function")return n;const r=t?"unshift":"push";return n.eventsAnyListeners.indexOf(e)<0&&n.eventsAnyListeners[r](e),n},offAny(e){const t=this;if(!t.eventsListeners||t.destroyed||!t.eventsAnyListeners)return t;const n=t.eventsAnyListeners.indexOf(e);return n>=0&&t.eventsAnyListeners.splice(n,1),t},off(e,t){const n=this;return!n.eventsListeners||n.destroyed||!n.eventsListeners||e.split(" ").forEach(r=>{typeof t>"u"?n.eventsListeners[r]=[]:n.eventsListeners[r]&&n.eventsListeners[r].forEach((i,o)=>{(i===t||i.__emitterProxy&&i.__emitterProxy===t)&&n.eventsListeners[r].splice(o,1)})}),n},emit(...e){const t=this;if(!t.eventsListeners||t.destroyed||!t.eventsListeners)return t;let n,r,i;return typeof e[0]=="string"||Array.isArray(e[0])?(n=e[0],r=e.slice(1,e.length),i=t):(n=e[0].events,r=e[0].data,i=e[0].context||t),r.unshift(i),(Array.isArray(n)?n:n.split(" ")).forEach(a=>{t.eventsAnyListeners&&t.eventsAnyListeners.length&&t.eventsAnyListeners.forEach(l=>{l.apply(i,[a,...r])}),t.eventsListeners&&t.eventsListeners[a]&&t.eventsListeners[a].forEach(l=>{l.apply(i,r)})}),t}};function C$(){const e=this;let t,n;const r=e.el;typeof e.params.width<"u"&&e.params.width!==null?t=e.params.width:t=r.clientWidth,typeof e.params.height<"u"&&e.params.height!==null?n=e.params.height:n=r.clientHeight,!(t===0&&e.isHorizontal()||n===0&&e.isVertical())&&(t=t-parseInt(fr(r,"padding-left")||0,10)-parseInt(fr(r,"padding-right")||0,10),n=n-parseInt(fr(r,"padding-top")||0,10)-parseInt(fr(r,"padding-bottom")||0,10),Number.isNaN(t)&&(t=0),Number.isNaN(n)&&(n=0),Object.assign(e,{width:t,height:n,size:e.isHorizontal()?t:n}))}function E$(){const e=this;function t($,D){return parseFloat($.getPropertyValue(e.getDirectionLabel(D))||0)}const n=e.params,{wrapperEl:r,slidesEl:i,rtlTranslate:o,wrongRTL:a}=e,l=e.virtual&&n.virtual.enabled,s=l?e.virtual.slides.length:e.slides.length,u=Sn(i,`.${e.params.slideClass}, swiper-slide`),d=l?e.virtual.slides.length:u.length;let c=[];const y=[],p=[];let m=n.slidesOffsetBefore;typeof m=="function"&&(m=n.slidesOffsetBefore.call(e));let g=n.slidesOffsetAfter;typeof g=="function"&&(g=n.slidesOffsetAfter.call(e));const w=e.snapGrid.length,h=e.slidesGrid.length,v=e.size-m-g;let x=n.spaceBetween,S=-m,C=0,T=0;if(typeof v>"u")return;typeof x=="string"&&x.indexOf("%")>=0?x=parseFloat(x.replace("%",""))/100*v:typeof x=="string"&&(x=parseFloat(x)),e.virtualSize=-x-m-g,u.forEach($=>{o?$.style.marginLeft="":$.style.marginRight="",$.style.marginBottom="",$.style.marginTop=""}),n.centeredSlides&&n.cssMode&&(hi(r,"--swiper-centered-offset-before",""),hi(r,"--swiper-centered-offset-after","")),n.cssMode&&(hi(r,"--swiper-slides-offset-before",`${m}px`),hi(r,"--swiper-slides-offset-after",`${g}px`));const k=n.grid&&n.grid.rows>1&&e.grid;k?e.grid.initSlides(u):e.grid&&e.grid.unsetSlides();let _;const M=n.slidesPerView==="auto"&&n.breakpoints&&Object.keys(n.breakpoints).filter($=>typeof n.breakpoints[$].slidesPerView<"u").length>0;for(let $=0;$<d;$+=1){_=0;const D=u[$];if(!(D&&(k&&e.grid.updateSlide($,D,u),fr(D,"display")==="none"))){if(l&&n.slidesPerView==="auto")n.virtual.slidesPerViewAutoSlideSize&&(_=n.virtual.slidesPerViewAutoSlideSize),_&&D&&(n.roundLengths&&(_=Math.floor(_)),D.style[e.getDirectionLabel("width")]=`${_}px`);else if(n.slidesPerView==="auto"){M&&(D.style[e.getDirectionLabel("width")]="");const A=getComputedStyle(D),j=D.style.transform,F=D.style.webkitTransform;if(j&&(D.style.transform="none"),F&&(D.style.webkitTransform="none"),n.roundLengths)_=e.isHorizontal()?Pp(D,"width",!0):Pp(D,"height",!0);else{const R=t(A,"width"),L=t(A,"padding-left"),O=t(A,"padding-right"),P=t(A,"margin-left"),I=t(A,"margin-right"),z=A.getPropertyValue("box-sizing");if(z&&z==="border-box")_=R+P+I;else{const{clientWidth:B,offsetWidth:N}=D;_=R+L+O+P+I+(N-B)}}j&&(D.style.transform=j),F&&(D.style.webkitTransform=F),n.roundLengths&&(_=Math.floor(_))}else _=(v-(n.slidesPerView-1)*x)/n.slidesPerView,n.roundLengths&&(_=Math.floor(_)),D&&(D.style[e.getDirectionLabel("width")]=`${_}px`);D&&(D.swiperSlideSize=_),p.push(_),n.centeredSlides?(S=S+_/2+C/2+x,C===0&&$!==0&&(S=S-v/2-x),$===0&&(S=S-v/2-x),Math.abs(S)<1/1e3&&(S=0),n.roundLengths&&(S=Math.floor(S)),T%n.slidesPerGroup===0&&c.push(S),y.push(S)):(n.roundLengths&&(S=Math.floor(S)),(T-Math.min(e.params.slidesPerGroupSkip,T))%e.params.slidesPerGroup===0&&c.push(S),y.push(S),S=S+_+x),e.virtualSize+=_+x,C=_,T+=1}}if(e.virtualSize=Math.max(e.virtualSize,v)+g,o&&a&&(n.effect==="slide"||n.effect==="coverflow")&&(r.style.width=`${e.virtualSize+x}px`),n.setWrapperSize&&(r.style[e.getDirectionLabel("width")]=`${e.virtualSize+x}px`),k&&e.grid.updateWrapperSize(_,c),!n.centeredSlides){const $=n.slidesPerView!=="auto"&&n.slidesPerView%1!==0,D=n.snapToSlideEdge&&!n.loop&&(n.slidesPerView==="auto"||$);let A=c.length;if(D){let F;if(n.slidesPerView==="auto"){F=1;let R=0;for(let L=p.length-1;L>=0&&(R+=p[L]+(L<p.length-1?x:0),R<=v);L-=1)F=p.length-L}else F=Math.floor(n.slidesPerView);A=Math.max(d-F,0)}const j=[];for(let F=0;F<c.length;F+=1){let R=c[F];n.roundLengths&&(R=Math.floor(R)),D?F<=A&&j.push(R):c[F]<=e.virtualSize-v&&j.push(R)}c=j,Math.floor(e.virtualSize-v)-Math.floor(c[c.length-1])>1&&(D||c.push(e.virtualSize-v))}if(l&&n.loop){const $=p[0]+x;if(n.slidesPerGroup>1){const D=Math.ceil((e.virtual.slidesBefore+e.virtual.slidesAfter)/n.slidesPerGroup),A=$*n.slidesPerGroup;for(let j=0;j<D;j+=1)c.push(c[c.length-1]+A)}for(let D=0;D<e.virtual.slidesBefore+e.virtual.slidesAfter;D+=1)n.slidesPerGroup===1&&c.push(c[c.length-1]+$),y.push(y[y.length-1]+$),e.virtualSize+=$}if(c.length===0&&(c=[0]),x!==0){const $=e.isHorizontal()&&o?"marginLeft":e.getDirectionLabel("marginRight");u.filter((D,A)=>!n.cssMode||n.loop?!0:A!==u.length-1).forEach(D=>{D.style[$]=`${x}px`})}if(n.centeredSlides&&n.centeredSlidesBounds){let $=0;p.forEach(A=>{$+=A+(x||0)}),$-=x;const D=$>v?$-v:0;c=c.map(A=>A<=0?-m:A>D?D+g:A)}if(n.centerInsufficientSlides){let $=0;if(p.forEach(D=>{$+=D+(x||0)}),$-=x,$<v){const D=(v-$)/2;c.forEach((A,j)=>{c[j]=A-D}),y.forEach((A,j)=>{y[j]=A+D})}}if(Object.assign(e,{slides:u,snapGrid:c,slidesGrid:y,slidesSizesGrid:p}),n.centeredSlides&&n.cssMode&&!n.centeredSlidesBounds){hi(r,"--swiper-centered-offset-before",`${-c[0]}px`),hi(r,"--swiper-centered-offset-after",`${e.size/2-p[p.length-1]/2}px`);const $=-e.snapGrid[0],D=-e.slidesGrid[0];e.snapGrid=e.snapGrid.map(A=>A+$),e.slidesGrid=e.slidesGrid.map(A=>A+D)}if(d!==s&&e.emit("slidesLengthChange"),c.length!==w&&(e.params.watchOverflow&&e.checkOverflow(),e.emit("snapGridLengthChange")),y.length!==h&&e.emit("slidesGridLengthChange"),n.watchSlidesProgress&&e.updateSlidesOffset(),e.emit("slidesUpdated"),!l&&!n.cssMode&&(n.effect==="slide"||n.effect==="fade")){const $=`${n.containerModifierClass}backface-hidden`,D=e.el.classList.contains($);d<=n.maxBackfaceHiddenSlides?D||e.el.classList.add($):D&&e.el.classList.remove($)}}function k$(e){const t=this,n=[],r=t.virtual&&t.params.virtual.enabled;let i=0,o;typeof e=="number"?t.setTransition(e):e===!0&&t.setTransition(t.params.speed);const a=l=>r?t.slides[t.getSlideIndexByData(l)]:t.slides[l];if(t.params.slidesPerView!=="auto"&&t.params.slidesPerView>1)if(t.params.centeredSlides)(t.visibleSlides||[]).forEach(l=>{n.push(l)});else for(o=0;o<Math.ceil(t.params.slidesPerView);o+=1){const l=t.activeIndex+o;if(l>t.slides.length&&!r)break;n.push(a(l))}else n.push(a(t.activeIndex));for(o=0;o<n.length;o+=1)if(typeof n[o]<"u"){const l=n[o].offsetHeight;i=l>i?l:i}(i||i===0)&&(t.wrapperEl.style.height=`${i}px`)}function P$(){const e=this,t=e.slides,n=e.isElement?e.isHorizontal()?e.wrapperEl.offsetLeft:e.wrapperEl.offsetTop:0;for(let r=0;r<t.length;r+=1)t[r].swiperSlideOffset=(e.isHorizontal()?t[r].offsetLeft:t[r].offsetTop)-n-e.cssOverflowAdjustment()}const _v=(e,t,n)=>{t&&!e.classList.contains(n)?e.classList.add(n):!t&&e.classList.contains(n)&&e.classList.remove(n)};function T$(e=this&&this.translate||0){const t=this,n=t.params,{slides:r,rtlTranslate:i,snapGrid:o}=t;if(r.length===0)return;typeof r[0].swiperSlideOffset>"u"&&t.updateSlidesOffset();let a=-e;i&&(a=e),t.visibleSlidesIndexes=[],t.visibleSlides=[];let l=n.spaceBetween;typeof l=="string"&&l.indexOf("%")>=0?l=parseFloat(l.replace("%",""))/100*t.size:typeof l=="string"&&(l=parseFloat(l));for(let s=0;s<r.length;s+=1){const u=r[s];let d=u.swiperSlideOffset;n.cssMode&&n.centeredSlides&&(d-=r[0].swiperSlideOffset);const c=(a+(n.centeredSlides?t.minTranslate():0)-d)/(u.swiperSlideSize+l),y=(a-o[0]+(n.centeredSlides?t.minTranslate():0)-d)/(u.swiperSlideSize+l),p=-(a-d),m=p+t.slidesSizesGrid[s],g=p>=0&&p<=t.size-t.slidesSizesGrid[s],w=p>=0&&p<t.size-1||m>1&&m<=t.size||p<=0&&m>=t.size;w&&(t.visibleSlides.push(u),t.visibleSlidesIndexes.push(s)),_v(u,w,n.slideVisibleClass),_v(u,g,n.slideFullyVisibleClass),u.progress=i?-c:c,u.originalProgress=i?-y:y}}function O$(e){const t=this;if(typeof e>"u"){const d=t.rtlTranslate?-1:1;e=t&&t.translate&&t.translate*d||0}const n=t.params,r=t.maxTranslate()-t.minTranslate();let{progress:i,isBeginning:o,isEnd:a,progressLoop:l}=t;const s=o,u=a;if(r===0)i=0,o=!0,a=!0;else{i=(e-t.minTranslate())/r;const d=Math.abs(e-t.minTranslate())<1,c=Math.abs(e-t.maxTranslate())<1;o=d||i<=0,a=c||i>=1,d&&(i=0),c&&(i=1)}if(n.loop){const d=t.getSlideIndexByData(0),c=t.getSlideIndexByData(t.slides.length-1),y=t.slidesGrid[d],p=t.slidesGrid[c],m=t.slidesGrid[t.slidesGrid.length-1],g=Math.abs(e);g>=y?l=(g-y)/m:l=(g+m-p)/m,l>1&&(l-=1)}Object.assign(t,{progress:i,progressLoop:l,isBeginning:o,isEnd:a}),(n.watchSlidesProgress||n.centeredSlides&&n.autoHeight)&&t.updateSlidesProgress(e),o&&!s&&t.emit("reachBeginning toEdge"),a&&!u&&t.emit("reachEnd toEdge"),(s&&!o||u&&!a)&&t.emit("fromEdge"),t.emit("progress",i)}const Od=(e,t,n)=>{t&&!e.classList.contains(n)?e.classList.add(n):!t&&e.classList.contains(n)&&e.classList.remove(n)};function j$(){const e=this,{slides:t,params:n,slidesEl:r,activeIndex:i}=e,o=e.virtual&&n.virtual.enabled,a=e.grid&&n.grid&&n.grid.rows>1,l=c=>Sn(r,`.${n.slideClass}${c}, swiper-slide${c}`)[0];let s,u,d;if(o)if(n.loop){let c=i-e.virtual.slidesBefore;c<0&&(c=e.virtual.slides.length+c),c>=e.virtual.slides.length&&(c-=e.virtual.slides.length),s=l(`[data-swiper-slide-index="${c}"]`)}else s=l(`[data-swiper-slide-index="${i}"]`);else a?(s=t.find(c=>c.column===i),d=t.find(c=>c.column===i+1),u=t.find(c=>c.column===i-1)):s=t[i];s&&(a||(d=h$(s,`.${n.slideClass}, swiper-slide`)[0],n.loop&&!d&&(d=t[0]),u=p$(s,`.${n.slideClass}, swiper-slide`)[0],n.loop&&!u===0&&(u=t[t.length-1]))),t.forEach(c=>{Od(c,c===s,n.slideActiveClass),Od(c,c===d,n.slideNextClass),Od(c,c===u,n.slidePrevClass)}),e.emitSlidesClasses()}const tl=(e,t)=>{if(!e||e.destroyed||!e.params)return;const n=()=>e.isElement?"swiper-slide":`.${e.params.slideClass}`,r=t.closest(n());if(r){let i=r.querySelector(`.${e.params.lazyPreloaderClass}`);!i&&e.isElement&&(r.shadowRoot?i=r.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`):requestAnimationFrame(()=>{r.shadowRoot&&(i=r.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`),i&&!i.lazyPreloaderManaged&&i.remove())})),i&&!i.lazyPreloaderManaged&&i.remove()}},jd=(e,t)=>{if(!e.slides[t])return;const n=e.slides[t].querySelector('[loading="lazy"]');n&&n.removeAttribute("loading")},Tp=e=>{if(!e||e.destroyed||!e.params)return;let t=e.params.lazyPreloadPrevNext;const n=e.slides.length;if(!n||!t||t<0)return;t=Math.min(t,n);const r=e.params.slidesPerView==="auto"?e.slidesPerViewDynamic():Math.ceil(e.params.slidesPerView),i=e.activeIndex;if(e.params.grid&&e.params.grid.rows>1){const a=i,l=[a-t];l.push(...Array.from({length:t}).map((s,u)=>a+r+u)),e.slides.forEach((s,u)=>{l.includes(s.column)&&jd(e,u)});return}const o=i+r-1;if(e.params.rewind||e.params.loop)for(let a=i-t;a<=o+t;a+=1){const l=(a%n+n)%n;(l<i||l>o)&&jd(e,l)}else for(let a=Math.max(i-t,0);a<=Math.min(o+t,n-1);a+=1)a!==i&&(a>o||a<i)&&jd(e,a)};function M$(e){const{slidesGrid:t,params:n}=e,r=e.rtlTranslate?e.translate:-e.translate;let i;for(let o=0;o<t.length;o+=1)typeof t[o+1]<"u"?r>=t[o]&&r<t[o+1]-(t[o+1]-t[o])/2?i=o:r>=t[o]&&r<t[o+1]&&(i=o+1):r>=t[o]&&(i=o);return n.normalizeSlideIndex&&(i<0||typeof i>"u")&&(i=0),i}function $$(e){const t=this,n=t.rtlTranslate?t.translate:-t.translate,{snapGrid:r,params:i,activeIndex:o,realIndex:a,snapIndex:l}=t;let s=e,u;const d=p=>{let m=p-t.virtual.slidesBefore;return m<0&&(m=t.virtual.slides.length+m),m>=t.virtual.slides.length&&(m-=t.virtual.slides.length),m};if(typeof s>"u"&&(s=M$(t)),r.indexOf(n)>=0)u=r.indexOf(n);else{const p=Math.min(i.slidesPerGroupSkip,s);u=p+Math.floor((s-p)/i.slidesPerGroup)}if(u>=r.length&&(u=r.length-1),s===o&&!t.params.loop){u!==l&&(t.snapIndex=u,t.emit("snapIndexChange"));return}if(s===o&&t.params.loop&&t.virtual&&t.params.virtual.enabled){t.realIndex=d(s);return}const c=t.grid&&i.grid&&i.grid.rows>1;let y;if(t.virtual&&i.virtual.enabled)i.loop?y=d(s):y=s;else if(c){const p=t.slides.find(g=>g.column===s);let m=parseInt(p.getAttribute("data-swiper-slide-index"),10);Number.isNaN(m)&&(m=Math.max(t.slides.indexOf(p),0)),y=Math.floor(m/i.grid.rows)}else if(t.slides[s]){const p=t.slides[s].getAttribute("data-swiper-slide-index");p?y=parseInt(p,10):y=s}else y=s;Object.assign(t,{previousSnapIndex:l,snapIndex:u,previousRealIndex:a,realIndex:y,previousIndex:o,activeIndex:s}),t.initialized&&Tp(t),t.emit("activeIndexChange"),t.emit("snapIndexChange"),(t.initialized||t.params.runCallbacksOnInit)&&(a!==y&&t.emit("realIndexChange"),t.emit("slideChange"))}function I$(e,t){const n=this,r=n.params;let i=e.closest(`.${r.slideClass}, swiper-slide`);!i&&n.isElement&&t&&t.length>1&&t.includes(e)&&[...t.slice(t.indexOf(e)+1,t.length)].forEach(l=>{!i&&l.matches&&l.matches(`.${r.slideClass}, swiper-slide`)&&(i=l)});let o=!1,a;if(i){for(let l=0;l<n.slides.length;l+=1)if(n.slides[l]===i){o=!0,a=l;break}}if(i&&o)n.clickedSlide=i,n.virtual&&n.params.virtual.enabled?n.clickedIndex=parseInt(i.getAttribute("data-swiper-slide-index"),10):n.clickedIndex=a;else{n.clickedSlide=void 0,n.clickedIndex=void 0;return}r.slideToClickedSlide&&n.clickedIndex!==void 0&&n.clickedIndex!==n.activeIndex&&n.slideToClickedSlide()}var D$={updateSize:C$,updateSlides:E$,updateAutoHeight:k$,updateSlidesOffset:P$,updateSlidesProgress:T$,updateProgress:O$,updateSlidesClasses:j$,updateActiveIndex:$$,updateClickedSlide:I$};function L$(e=this.isHorizontal()?"x":"y"){const t=this,{params:n,rtlTranslate:r,translate:i,wrapperEl:o}=t;if(n.virtualTranslate)return r?-i:i;if(n.cssMode)return i;let a=u$(o,e);return a+=t.cssOverflowAdjustment(),r&&(a=-a),a||0}function A$(e,t){const n=this,{rtlTranslate:r,params:i,wrapperEl:o,progress:a}=n;let l=0,s=0;const u=0;n.isHorizontal()?l=r?-e:e:s=e,i.roundLengths&&(l=Math.floor(l),s=Math.floor(s)),n.previousTranslate=n.translate,n.translate=n.isHorizontal()?l:s,i.cssMode?o[n.isHorizontal()?"scrollLeft":"scrollTop"]=n.isHorizontal()?-l:-s:i.virtualTranslate||(n.isHorizontal()?l-=n.cssOverflowAdjustment():s-=n.cssOverflowAdjustment(),o.style.transform=`translate3d(${l}px, ${s}px, ${u}px)`);let d;const c=n.maxTranslate()-n.minTranslate();c===0?d=0:d=(e-n.minTranslate())/c,d!==a&&n.updateProgress(e),n.emit("setTranslate",n.translate,t)}function R$(){return-this.snapGrid[0]}function F$(){return-this.snapGrid[this.snapGrid.length-1]}function z$(e=0,t=this.params.speed,n=!0,r=!0,i){const o=this,{params:a,wrapperEl:l}=o;if(o.animating&&a.preventInteractionOnTransition)return!1;const s=o.minTranslate(),u=o.maxTranslate();let d;if(r&&e>s?d=s:r&&e<u?d=u:d=e,o.updateProgress(d),a.cssMode){const c=o.isHorizontal();if(t===0)l[c?"scrollLeft":"scrollTop"]=-d;else{if(!o.support.smoothScroll)return zS({swiper:o,targetPosition:-d,side:c?"left":"top"}),!0;l.scrollTo({[c?"left":"top"]:-d,behavior:"smooth"})}return!0}return t===0?(o.setTransition(0),o.setTranslate(d),n&&(o.emit("beforeTransitionStart",t,i),o.emit("transitionEnd"))):(o.setTransition(t),o.setTranslate(d),n&&(o.emit("beforeTransitionStart",t,i),o.emit("transitionStart")),o.animating||(o.animating=!0,o.onTranslateToWrapperTransitionEnd||(o.onTranslateToWrapperTransitionEnd=function(y){!o||o.destroyed||y.target===this&&(o.wrapperEl.removeEventListener("transitionend",o.onTranslateToWrapperTransitionEnd),o.onTranslateToWrapperTransitionEnd=null,delete o.onTranslateToWrapperTransitionEnd,o.animating=!1,n&&o.emit("transitionEnd"))}),o.wrapperEl.addEventListener("transitionend",o.onTranslateToWrapperTransitionEnd))),!0}var N$={getTranslate:L$,setTranslate:A$,minTranslate:R$,maxTranslate:F$,translateTo:z$};function B$(e,t){const n=this;n.params.cssMode||(n.wrapperEl.style.transitionDuration=`${e}ms`,n.wrapperEl.style.transitionDelay=e===0?"0ms":""),n.emit("setTransition",e,t)}function WS({swiper:e,runCallbacks:t,direction:n,step:r}){const{activeIndex:i,previousIndex:o}=e;let a=n;a||(i>o?a="next":i<o?a="prev":a="reset"),e.emit(`transition${r}`),t&&a==="reset"?e.emit(`slideResetTransition${r}`):t&&i!==o&&(e.emit(`slideChangeTransition${r}`),a==="next"?e.emit(`slideNextTransition${r}`):e.emit(`slidePrevTransition${r}`))}function V$(e=!0,t){const n=this,{params:r}=n;r.cssMode||(r.autoHeight&&n.updateAutoHeight(),WS({swiper:n,runCallbacks:e,direction:t,step:"Start"}))}function U$(e=!0,t){const n=this,{params:r}=n;n.animating=!1,!r.cssMode&&(n.setTransition(0),WS({swiper:n,runCallbacks:e,direction:t,step:"End"}))}var H$={setTransition:B$,transitionStart:V$,transitionEnd:U$};function W$(e=0,t,n=!0,r,i){typeof e=="string"&&(e=parseInt(e,10));const o=this;let a=e;a<0&&(a=0);const{params:l,snapGrid:s,slidesGrid:u,previousIndex:d,activeIndex:c,rtlTranslate:y,wrapperEl:p,enabled:m}=o;if(!m&&!r&&!i||o.destroyed||o.animating&&l.preventInteractionOnTransition)return!1;typeof t>"u"&&(t=o.params.speed);const g=Math.min(o.params.slidesPerGroupSkip,a);let w=g+Math.floor((a-g)/o.params.slidesPerGroup);w>=s.length&&(w=s.length-1);const h=-s[w];if(l.normalizeSlideIndex)for(let k=0;k<u.length;k+=1){const _=-Math.floor(h*100),M=Math.floor(u[k]*100),$=Math.floor(u[k+1]*100);typeof u[k+1]<"u"?_>=M&&_<$-($-M)/2?a=k:_>=M&&_<$&&(a=k+1):_>=M&&(a=k)}if(o.initialized&&a!==c&&(!o.allowSlideNext&&(y?h>o.translate&&h>o.minTranslate():h<o.translate&&h<o.minTranslate())||!o.allowSlidePrev&&h>o.translate&&h>o.maxTranslate()&&(c||0)!==a))return!1;a!==(d||0)&&n&&o.emit("beforeSlideChangeStart"),o.updateProgress(h);let v;a>c?v="next":a<c?v="prev":v="reset";const x=o.virtual&&o.params.virtual.enabled;if(!(x&&i)&&(y&&-h===o.translate||!y&&h===o.translate))return o.updateActiveIndex(a),l.autoHeight&&o.updateAutoHeight(),o.updateSlidesClasses(),l.effect!=="slide"&&o.setTranslate(h),v!=="reset"&&(o.transitionStart(n,v),o.transitionEnd(n,v)),!1;if(l.cssMode){const k=o.isHorizontal(),_=y?h:-h;if(t===0)x&&(o.wrapperEl.style.scrollSnapType="none",o._immediateVirtual=!0),x&&!o._cssModeVirtualInitialSet&&o.params.initialSlide>0?(o._cssModeVirtualInitialSet=!0,requestAnimationFrame(()=>{p[k?"scrollLeft":"scrollTop"]=_})):p[k?"scrollLeft":"scrollTop"]=_,x&&requestAnimationFrame(()=>{o.wrapperEl.style.scrollSnapType="",o._immediateVirtual=!1});else{if(!o.support.smoothScroll)return zS({swiper:o,targetPosition:_,side:k?"left":"top"}),!0;p.scrollTo({[k?"left":"top"]:_,behavior:"smooth"})}return!0}const T=HS().isSafari;return x&&!i&&T&&o.isElement&&o.virtual.update(!1,!1,a),o.setTransition(t),o.setTranslate(h),o.updateActiveIndex(a),o.updateSlidesClasses(),o.emit("beforeTransitionStart",t,r),o.transitionStart(n,v),t===0?o.transitionEnd(n,v):o.animating||(o.animating=!0,o.onSlideToWrapperTransitionEnd||(o.onSlideToWrapperTransitionEnd=function(_){!o||o.destroyed||_.target===this&&(o.wrapperEl.removeEventListener("transitionend",o.onSlideToWrapperTransitionEnd),o.onSlideToWrapperTransitionEnd=null,delete o.onSlideToWrapperTransitionEnd,o.transitionEnd(n,v))}),o.wrapperEl.addEventListener("transitionend",o.onSlideToWrapperTransitionEnd)),!0}function G$(e=0,t,n=!0,r){typeof e=="string"&&(e=parseInt(e,10));const i=this;if(i.destroyed)return;typeof t>"u"&&(t=i.params.speed);const o=i.grid&&i.params.grid&&i.params.grid.rows>1;let a=e;if(i.params.loop)if(i.virtual&&i.params.virtual.enabled)a=a+i.virtual.slidesBefore;else{let l;if(o){const g=a*i.params.grid.rows;l=i.slides.find(w=>w.getAttribute("data-swiper-slide-index")*1===g).column}else l=i.getSlideIndexByData(a);const s=o?Math.ceil(i.slides.length/i.params.grid.rows):i.slides.length,{centeredSlides:u,slidesOffsetBefore:d,slidesOffsetAfter:c}=i.params,y=u||!!d||!!c;let p=i.params.slidesPerView;p==="auto"?p=i.slidesPerViewDynamic():(p=Math.ceil(parseFloat(i.params.slidesPerView,10)),y&&p%2===0&&(p=p+1));let m=s-l<p;if(y&&(m=m||l<Math.ceil(p/2)),r&&y&&i.params.slidesPerView!=="auto"&&!o&&(m=!1),m){const g=y?l<i.activeIndex?"prev":"next":l-i.activeIndex-1<i.params.slidesPerView?"next":"prev";i.loopFix({direction:g,slideTo:!0,activeSlideIndex:g==="next"?l+1:l-s+1,slideRealIndex:g==="next"?i.realIndex:void 0})}if(o){const g=a*i.params.grid.rows;a=i.slides.find(w=>w.getAttribute("data-swiper-slide-index")*1===g).column}else a=i.getSlideIndexByData(a)}return requestAnimationFrame(()=>{i.slideTo(a,t,n,r)}),i}function Y$(e,t=!0,n){const r=this,{enabled:i,params:o,animating:a}=r;if(!i||r.destroyed)return r;typeof e>"u"&&(e=r.params.speed);let l=o.slidesPerGroup;o.slidesPerView==="auto"&&o.slidesPerGroup===1&&o.slidesPerGroupAuto&&(l=Math.max(r.slidesPerViewDynamic("current",!0),1));const s=r.activeIndex<o.slidesPerGroupSkip?1:l,u=r.virtual&&o.virtual.enabled;if(o.loop){if(a&&!u&&o.loopPreventsSliding)return!1;if(r.loopFix({direction:"next"}),r._clientLeft=r.wrapperEl.clientLeft,r.activeIndex===r.slides.length-1&&o.cssMode)return requestAnimationFrame(()=>{r.slideTo(r.activeIndex+s,e,t,n)}),!0}return o.rewind&&r.isEnd?r.slideTo(0,e,t,n):r.slideTo(r.activeIndex+s,e,t,n)}function q$(e,t=!0,n){const r=this,{params:i,snapGrid:o,slidesGrid:a,rtlTranslate:l,enabled:s,animating:u}=r;if(!s||r.destroyed)return r;typeof e>"u"&&(e=r.params.speed);const d=r.virtual&&i.virtual.enabled;if(i.loop){if(u&&!d&&i.loopPreventsSliding)return!1;r.loopFix({direction:"prev"}),r._clientLeft=r.wrapperEl.clientLeft}const c=l?r.translate:-r.translate;function y(v){return v<0?-Math.floor(Math.abs(v)):Math.floor(v)}const p=y(c),m=o.map(v=>y(v)),g=i.freeMode&&i.freeMode.enabled;let w=o[m.indexOf(p)-1];if(typeof w>"u"&&(i.cssMode||g)){let v;o.forEach((x,S)=>{p>=x&&(v=S)}),typeof v<"u"&&(w=g?o[v]:o[v>0?v-1:v])}let h=0;if(typeof w<"u"&&(h=a.indexOf(w),h<0&&(h=r.activeIndex-1),i.slidesPerView==="auto"&&i.slidesPerGroup===1&&i.slidesPerGroupAuto&&(h=h-r.slidesPerViewDynamic("previous",!0)+1,h=Math.max(h,0))),i.rewind&&r.isBeginning){const v=r.params.virtual&&r.params.virtual.enabled&&r.virtual?r.virtual.slides.length-1:r.slides.length-1;return r.slideTo(v,e,t,n)}else if(i.loop&&r.activeIndex===0&&i.cssMode)return requestAnimationFrame(()=>{r.slideTo(h,e,t,n)}),!0;return r.slideTo(h,e,t,n)}function X$(e,t=!0,n){const r=this;if(!r.destroyed)return typeof e>"u"&&(e=r.params.speed),r.slideTo(r.activeIndex,e,t,n)}function K$(e,t=!0,n,r=.5){const i=this;if(i.destroyed)return;typeof e>"u"&&(e=i.params.speed);let o=i.activeIndex;const a=Math.min(i.params.slidesPerGroupSkip,o),l=a+Math.floor((o-a)/i.params.slidesPerGroup),s=i.rtlTranslate?i.translate:-i.translate;if(s>=i.snapGrid[l]){const u=i.snapGrid[l],d=i.snapGrid[l+1];s-u>(d-u)*r&&(o+=i.params.slidesPerGroup)}else{const u=i.snapGrid[l-1],d=i.snapGrid[l];s-u<=(d-u)*r&&(o-=i.params.slidesPerGroup)}return o=Math.max(o,0),o=Math.min(o,i.slidesGrid.length-1),i.slideTo(o,e,t,n)}function Q$(){const e=this;if(e.destroyed)return;const{params:t,slidesEl:n}=e,r=t.slidesPerView==="auto"?e.slidesPerViewDynamic():t.slidesPerView;let i=e.getSlideIndexWhenGrid(e.clickedIndex),o;const a=e.isElement?"swiper-slide":`.${t.slideClass}`,l=e.grid&&e.params.grid&&e.params.grid.rows>1;if(t.loop){if(e.animating)return;o=parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"),10),t.centeredSlides?e.slideToLoop(o):i>(l?(e.slides.length-r)/2-(e.params.grid.rows-1):e.slides.length-r)?(e.loopFix(),i=e.getSlideIndex(Sn(n,`${a}[data-swiper-slide-index="${o}"]`)[0]),FS(()=>{e.slideTo(i)})):e.slideTo(i)}else e.slideTo(i)}var Z$={slideTo:W$,slideToLoop:G$,slideNext:Y$,slidePrev:q$,slideReset:X$,slideToClosest:K$,slideToClickedSlide:Q$};function J$(e,t){const n=this,{params:r,slidesEl:i}=n;if(!r.loop||n.virtual&&n.params.virtual.enabled)return;const o=()=>{Sn(i,`.${r.slideClass}, swiper-slide`).forEach((m,g)=>{m.setAttribute("data-swiper-slide-index",g)})},a=()=>{const p=Sn(i,`.${r.slideBlankClass}`);p.forEach(m=>{m.remove()}),p.length>0&&(n.recalcSlides(),n.updateSlides())},l=n.grid&&r.grid&&r.grid.rows>1;r.loopAddBlankSlides&&(r.slidesPerGroup>1||l)&&a();const s=r.slidesPerGroup*(l?r.grid.rows:1),u=n.slides.length%s!==0,d=l&&n.slides.length%r.grid.rows!==0,c=p=>{for(let m=0;m<p;m+=1){const g=n.isElement?Xl("swiper-slide",[r.slideBlankClass]):Xl("div",[r.slideClass,r.slideBlankClass]);n.slidesEl.append(g)}};if(u){if(r.loopAddBlankSlides){const p=s-n.slides.length%s;c(p),n.recalcSlides(),n.updateSlides()}else ql("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");o()}else if(d){if(r.loopAddBlankSlides){const p=r.grid.rows-n.slides.length%r.grid.rows;c(p),n.recalcSlides(),n.updateSlides()}else ql("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");o()}else o();const y=r.centeredSlides||!!r.slidesOffsetBefore||!!r.slidesOffsetAfter;n.loopFix({slideRealIndex:e,direction:y?void 0:"next",initial:t})}function eI({slideRealIndex:e,slideTo:t=!0,direction:n,setTranslate:r,activeSlideIndex:i,initial:o,byController:a,byMousewheel:l}={}){const s=this;if(!s.params.loop)return;s.emit("beforeLoopFix");const{slides:u,allowSlidePrev:d,allowSlideNext:c,slidesEl:y,params:p}=s,{centeredSlides:m,slidesOffsetBefore:g,slidesOffsetAfter:w,initialSlide:h}=p,v=m||!!g||!!w;if(s.allowSlidePrev=!0,s.allowSlideNext=!0,s.virtual&&p.virtual.enabled){t&&(!v&&s.snapIndex===0?s.slideTo(s.virtual.slides.length,0,!1,!0):v&&s.snapIndex<p.slidesPerView?s.slideTo(s.virtual.slides.length+s.snapIndex,0,!1,!0):s.snapIndex===s.snapGrid.length-1&&s.slideTo(s.virtual.slidesBefore,0,!1,!0)),s.allowSlidePrev=d,s.allowSlideNext=c,s.emit("loopFix");return}let x=p.slidesPerView;x==="auto"?x=s.slidesPerViewDynamic():(x=Math.ceil(parseFloat(p.slidesPerView,10)),v&&x%2===0&&(x=x+1));const S=p.slidesPerGroupAuto?x:p.slidesPerGroup;let C=v?Math.max(S,Math.ceil(x/2)):S;C%S!==0&&(C+=S-C%S),C+=p.loopAdditionalSlides,s.loopedSlides=C;const T=s.grid&&p.grid&&p.grid.rows>1;u.length<x+C||s.params.effect==="cards"&&u.length<x+C*2?ql("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled or not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"):T&&p.grid.fill==="row"&&ql("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");const k=[],_=[],M=T?Math.ceil(u.length/p.grid.rows):u.length,$=o&&M-h<x&&!v;let D=$?h:s.activeIndex;typeof i>"u"?i=s.getSlideIndex(u.find(P=>P.classList.contains(p.slideActiveClass))):D=i;const A=n==="next"||!n,j=n==="prev"||!n;let F=0,R=0;const O=(T?u[i].column:i)+(v&&typeof r>"u"?-x/2+.5:0);if(O<C){F=Math.max(C-O,S);for(let P=0;P<C-O;P+=1){const I=P-Math.floor(P/M)*M;if(T){const z=M-I-1;for(let B=u.length-1;B>=0;B-=1)u[B].column===z&&k.push(B)}else k.push(M-I-1)}}else if(O+x>M-C){R=Math.max(O-(M-C*2),S),$&&(R=Math.max(R,x-M+h+1));for(let P=0;P<R;P+=1){const I=P-Math.floor(P/M)*M;T?u.forEach((z,B)=>{z.column===I&&_.push(B)}):_.push(I)}}if(s.__preventObserver__=!0,requestAnimationFrame(()=>{s.__preventObserver__=!1}),s.params.effect==="cards"&&u.length<x+C*2&&(_.includes(i)&&_.splice(_.indexOf(i),1),k.includes(i)&&k.splice(k.indexOf(i),1)),j&&k.forEach(P=>{u[P].swiperLoopMoveDOM=!0,y.prepend(u[P]),u[P].swiperLoopMoveDOM=!1}),A&&_.forEach(P=>{u[P].swiperLoopMoveDOM=!0,y.append(u[P]),u[P].swiperLoopMoveDOM=!1}),s.recalcSlides(),p.slidesPerView==="auto"?s.updateSlides():T&&(k.length>0&&j||_.length>0&&A)&&s.slides.forEach((P,I)=>{s.grid.updateSlide(I,P,s.slides)}),p.watchSlidesProgress&&s.updateSlidesOffset(),t){if(k.length>0&&j){if(typeof e>"u"){const P=s.slidesGrid[D],z=s.slidesGrid[D+F]-P;l?s.setTranslate(s.translate-z):(s.slideTo(D+Math.ceil(F),0,!1,!0),r&&(s.touchEventsData.startTranslate=s.touchEventsData.startTranslate-z,s.touchEventsData.currentTranslate=s.touchEventsData.currentTranslate-z))}else if(r){const P=T?k.length/p.grid.rows:k.length;s.slideTo(s.activeIndex+P,0,!1,!0),s.touchEventsData.currentTranslate=s.translate}}else if(_.length>0&&A)if(typeof e>"u"){const P=s.slidesGrid[D],z=s.slidesGrid[D-R]-P;l?s.setTranslate(s.translate-z):(s.slideTo(D-R,0,!1,!0),r&&(s.touchEventsData.startTranslate=s.touchEventsData.startTranslate-z,s.touchEventsData.currentTranslate=s.touchEventsData.currentTranslate-z))}else{const P=T?_.length/p.grid.rows:_.length;s.slideTo(s.activeIndex-P,0,!1,!0)}}if(s.allowSlidePrev=d,s.allowSlideNext=c,s.controller&&s.controller.control&&!a){const P={slideRealIndex:e,direction:n,setTranslate:r,activeSlideIndex:i,byController:!0};Array.isArray(s.controller.control)?s.controller.control.forEach(I=>{!I.destroyed&&I.params.loop&&I.loopFix({...P,slideTo:I.params.slidesPerView===p.slidesPerView?t:!1})}):s.controller.control instanceof s.constructor&&s.controller.control.params.loop&&s.controller.control.loopFix({...P,slideTo:s.controller.control.params.slidesPerView===p.slidesPerView?t:!1})}s.emit("loopFix")}function tI(){const e=this,{params:t,slidesEl:n}=e;if(!t.loop||!n||e.virtual&&e.params.virtual.enabled)return;e.recalcSlides();const r=[];e.slides.forEach(i=>{const o=typeof i.swiperSlideIndex>"u"?i.getAttribute("data-swiper-slide-index")*1:i.swiperSlideIndex;r[o]=i}),e.slides.forEach(i=>{i.removeAttribute("data-swiper-slide-index")}),r.forEach(i=>{n.append(i)}),e.recalcSlides(),e.slideTo(e.realIndex,0)}var nI={loopCreate:J$,loopFix:eI,loopDestroy:tI};function rI(e){const t=this;if(!t.params.simulateTouch||t.params.watchOverflow&&t.isLocked||t.params.cssMode)return;const n=t.params.touchEventsTarget==="container"?t.el:t.wrapperEl;t.isElement&&(t.__preventObserver__=!0),n.style.cursor="move",n.style.cursor=e?"grabbing":"grab",t.isElement&&requestAnimationFrame(()=>{t.__preventObserver__=!1})}function iI(){const e=this;e.params.watchOverflow&&e.isLocked||e.params.cssMode||(e.isElement&&(e.__preventObserver__=!0),e[e.params.touchEventsTarget==="container"?"el":"wrapperEl"].style.cursor="",e.isElement&&requestAnimationFrame(()=>{e.__preventObserver__=!1}))}var oI={setGrabCursor:rI,unsetGrabCursor:iI};function aI(e,t=this){function n(r){if(!r||r===kn()||r===vt())return null;r.assignedSlot&&(r=r.assignedSlot);const i=r.closest(e);return!i&&!r.getRootNode?null:i||n(r.getRootNode().host)}return n(t)}function Cv(e,t,n){const r=vt(),{params:i}=e,o=i.edgeSwipeDetection,a=i.edgeSwipeThreshold;return o&&(n<=a||n>=r.innerWidth-a)?o==="prevent"?(t.preventDefault(),!0):!1:!0}function sI(e){const t=this,n=kn();let r=e;r.originalEvent&&(r=r.originalEvent);const i=t.touchEventsData;if(r.type==="pointerdown"){if(i.pointerId!==null&&i.pointerId!==r.pointerId)return;i.pointerId=r.pointerId}else r.type==="touchstart"&&r.targetTouches.length===1&&(i.touchId=r.targetTouches[0].identifier);if(r.type==="touchstart"){Cv(t,r,r.targetTouches[0].pageX);return}const{params:o,touches:a,enabled:l}=t;if(!l||!o.simulateTouch&&r.pointerType==="mouse"||t.animating&&o.preventInteractionOnTransition)return;!t.animating&&o.cssMode&&o.loop&&t.loopFix();let s=r.target;if(o.touchEventsTarget==="wrapper"&&!f$(s,t.wrapperEl)||"which"in r&&r.which===3||"button"in r&&r.button>0||i.isTouched&&i.isMoved)return;const u=!!o.noSwipingClass&&o.noSwipingClass!=="",d=r.composedPath?r.composedPath():r.path;u&&r.target&&r.target.shadowRoot&&d&&(s=d[0]);const c=o.noSwipingSelector?o.noSwipingSelector:`.${o.noSwipingClass}`,y=!!(r.target&&r.target.shadowRoot);if(o.noSwiping&&(y?aI(c,s):s.closest(c))){t.allowClick=!0;return}if(o.swipeHandler&&!s.closest(o.swipeHandler))return;a.currentX=r.pageX,a.currentY=r.pageY;const p=a.currentX,m=a.currentY;if(!Cv(t,r,p))return;Object.assign(i,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),a.startX=p,a.startY=m,i.touchStartTime=Yl(),t.allowClick=!0,t.updateSize(),t.swipeDirection=void 0,o.threshold>0&&(i.allowThresholdMove=!1);let g=!0;s.matches(i.focusableElements)&&(g=!1,s.nodeName==="SELECT"&&(i.isTouched=!1)),n.activeElement&&n.activeElement.matches(i.focusableElements)&&n.activeElement!==s&&(r.pointerType==="mouse"||r.pointerType!=="mouse"&&!s.matches(i.focusableElements))&&n.activeElement.blur();const w=g&&t.allowTouchMove&&o.touchStartPreventDefault;(o.touchStartForcePreventDefault||w)&&!s.isContentEditable&&r.preventDefault(),o.freeMode&&o.freeMode.enabled&&t.freeMode&&t.animating&&!o.cssMode&&t.freeMode.onTouchStart(),t.emit("touchStart",r)}function lI(e){const t=kn(),n=this,r=n.touchEventsData,{params:i,touches:o,rtlTranslate:a,enabled:l}=n;if(!l||!i.simulateTouch&&e.pointerType==="mouse")return;let s=e;if(s.originalEvent&&(s=s.originalEvent),s.type==="pointermove"&&(r.touchId!==null||s.pointerId!==r.pointerId))return;let u;if(s.type==="touchmove"){if(u=[...s.changedTouches].find(T=>T.identifier===r.touchId),!u||u.identifier!==r.touchId)return}else u=s;if(!r.isTouched){r.startMoving&&r.isScrolling&&n.emit("touchMoveOpposite",s);return}const d=u.pageX,c=u.pageY;if(s.preventedByNestedSwiper){o.startX=d,o.startY=c;return}if(!n.allowTouchMove){s.target.matches(r.focusableElements)||(n.allowClick=!1),r.isTouched&&(Object.assign(o,{startX:d,startY:c,currentX:d,currentY:c}),r.touchStartTime=Yl());return}if(i.touchReleaseOnEdges&&!i.loop)if(n.isVertical()){if(c<o.startY&&n.translate<=n.maxTranslate()||c>o.startY&&n.translate>=n.minTranslate()){r.isTouched=!1,r.isMoved=!1;return}}else{if(a&&(d>o.startX&&-n.translate<=n.maxTranslate()||d<o.startX&&-n.translate>=n.minTranslate()))return;if(!a&&(d<o.startX&&n.translate<=n.maxTranslate()||d>o.startX&&n.translate>=n.minTranslate()))return}if(t.activeElement&&t.activeElement.matches(r.focusableElements)&&t.activeElement!==s.target&&s.pointerType!=="mouse"&&t.activeElement.blur(),t.activeElement&&s.target===t.activeElement&&s.target.matches(r.focusableElements)){r.isMoved=!0,n.allowClick=!1;return}r.allowTouchCallbacks&&n.emit("touchMove",s),o.previousX=o.currentX,o.previousY=o.currentY,o.currentX=d,o.currentY=c;const y=o.currentX-o.startX,p=o.currentY-o.startY;if(n.params.threshold&&Math.sqrt(y**2+p**2)<n.params.threshold)return;if(typeof r.isScrolling>"u"){let T;n.isHorizontal()&&o.currentY===o.startY||n.isVertical()&&o.currentX===o.startX?r.isScrolling=!1:y*y+p*p>=25&&(T=Math.atan2(Math.abs(p),Math.abs(y))*180/Math.PI,r.isScrolling=n.isHorizontal()?T>i.touchAngle:90-T>i.touchAngle)}if(r.isScrolling&&n.emit("touchMoveOpposite",s),typeof r.startMoving>"u"&&(o.currentX!==o.startX||o.currentY!==o.startY)&&(r.startMoving=!0),r.isScrolling||s.type==="touchmove"&&r.preventTouchMoveFromPointerMove){r.isTouched=!1;return}if(!r.startMoving)return;n.allowClick=!1,!i.cssMode&&s.cancelable&&s.preventDefault(),i.touchMoveStopPropagation&&!i.nested&&s.stopPropagation();let m=n.isHorizontal()?y:p,g=n.isHorizontal()?o.currentX-o.previousX:o.currentY-o.previousY;i.oneWayMovement&&(m=Math.abs(m)*(a?1:-1),g=Math.abs(g)*(a?1:-1)),o.diff=m,m*=i.touchRatio,a&&(m=-m,g=-g);const w=n.touchesDirection;n.swipeDirection=m>0?"prev":"next",n.touchesDirection=g>0?"prev":"next";const h=n.params.loop&&!i.cssMode,v=n.touchesDirection==="next"&&n.allowSlideNext||n.touchesDirection==="prev"&&n.allowSlidePrev;if(!r.isMoved){if(h&&v&&n.loopFix({direction:n.swipeDirection}),r.startTranslate=n.getTranslate(),n.setTransition(0),n.animating){const T=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0,detail:{bySwiperTouchMove:!0}});n.wrapperEl.dispatchEvent(T)}r.allowMomentumBounce=!1,i.grabCursor&&(n.allowSlideNext===!0||n.allowSlidePrev===!0)&&n.setGrabCursor(!0),n.emit("sliderFirstMove",s)}let x;if(new Date().getTime(),i._loopSwapReset!==!1&&r.isMoved&&r.allowThresholdMove&&w!==n.touchesDirection&&h&&v&&Math.abs(m)>=1){Object.assign(o,{startX:d,startY:c,currentX:d,currentY:c,startTranslate:r.currentTranslate}),r.loopSwapReset=!0,r.startTranslate=r.currentTranslate;return}n.emit("sliderMove",s),r.isMoved=!0,r.currentTranslate=m+r.startTranslate;let S=!0,C=i.resistanceRatio;if(i.touchReleaseOnEdges&&(C=0),m>0?(h&&v&&!x&&r.allowThresholdMove&&r.currentTranslate>(i.centeredSlides?n.minTranslate()-n.slidesSizesGrid[n.activeIndex+1]-(i.slidesPerView!=="auto"&&n.slides.length-i.slidesPerView>=2?n.slidesSizesGrid[n.activeIndex+1]+n.params.spaceBetween:0)-n.params.spaceBetween:n.minTranslate())&&n.loopFix({direction:"prev",setTranslate:!0,activeSlideIndex:0}),r.currentTranslate>n.minTranslate()&&(S=!1,i.resistance&&(r.currentTranslate=n.minTranslate()-1+(-n.minTranslate()+r.startTranslate+m)**C))):m<0&&(h&&v&&!x&&r.allowThresholdMove&&r.currentTranslate<(i.centeredSlides?n.maxTranslate()+n.slidesSizesGrid[n.slidesSizesGrid.length-1]+n.params.spaceBetween+(i.slidesPerView!=="auto"&&n.slides.length-i.slidesPerView>=2?n.slidesSizesGrid[n.slidesSizesGrid.length-1]+n.params.spaceBetween:0):n.maxTranslate())&&n.loopFix({direction:"next",setTranslate:!0,activeSlideIndex:n.slides.length-(i.slidesPerView==="auto"?n.slidesPerViewDynamic():Math.ceil(parseFloat(i.slidesPerView,10)))}),r.currentTranslate<n.maxTranslate()&&(S=!1,i.resistance&&(r.currentTranslate=n.maxTranslate()+1-(n.maxTranslate()-r.startTranslate-m)**C))),S&&(s.preventedByNestedSwiper=!0),!n.allowSlideNext&&n.swipeDirection==="next"&&r.currentTranslate<r.startTranslate&&(r.currentTranslate=r.startTranslate),!n.allowSlidePrev&&n.swipeDirection==="prev"&&r.currentTranslate>r.startTranslate&&(r.currentTranslate=r.startTranslate),!n.allowSlidePrev&&!n.allowSlideNext&&(r.currentTranslate=r.startTranslate),i.threshold>0)if(Math.abs(m)>i.threshold||r.allowThresholdMove){if(!r.allowThresholdMove){r.allowThresholdMove=!0,o.startX=o.currentX,o.startY=o.currentY,r.currentTranslate=r.startTranslate,o.diff=n.isHorizontal()?o.currentX-o.startX:o.currentY-o.startY;return}}else{r.currentTranslate=r.startTranslate;return}!i.followFinger||i.cssMode||((i.freeMode&&i.freeMode.enabled&&n.freeMode||i.watchSlidesProgress)&&(n.updateActiveIndex(),n.updateSlidesClasses()),i.freeMode&&i.freeMode.enabled&&n.freeMode&&n.freeMode.onTouchMove(),n.updateProgress(r.currentTranslate),n.setTranslate(r.currentTranslate))}function uI(e){const t=this,n=t.touchEventsData;let r=e;r.originalEvent&&(r=r.originalEvent);let i;if(r.type==="touchend"||r.type==="touchcancel"){if(i=[...r.changedTouches].find(C=>C.identifier===n.touchId),!i||i.identifier!==n.touchId)return}else{if(n.touchId!==null||r.pointerId!==n.pointerId)return;i=r}if(["pointercancel","pointerout","pointerleave","contextmenu"].includes(r.type)&&!(["pointercancel","contextmenu"].includes(r.type)&&(t.browser.isSafari||t.browser.isWebView)))return;n.pointerId=null,n.touchId=null;const{params:a,touches:l,rtlTranslate:s,slidesGrid:u,enabled:d}=t;if(!d||!a.simulateTouch&&r.pointerType==="mouse")return;if(n.allowTouchCallbacks&&t.emit("touchEnd",r),n.allowTouchCallbacks=!1,!n.isTouched){n.isMoved&&a.grabCursor&&t.setGrabCursor(!1),n.isMoved=!1,n.startMoving=!1;return}a.grabCursor&&n.isMoved&&n.isTouched&&(t.allowSlideNext===!0||t.allowSlidePrev===!0)&&t.setGrabCursor(!1);const c=Yl(),y=c-n.touchStartTime;if(t.allowClick){const C=r.path||r.composedPath&&r.composedPath();t.updateClickedSlide(C&&C[0]||r.target,C),t.emit("tap click",r),y<300&&c-n.lastClickTime<300&&t.emit("doubleTap doubleClick",r)}if(n.lastClickTime=Yl(),FS(()=>{t.destroyed||(t.allowClick=!0)}),!n.isTouched||!n.isMoved||!t.swipeDirection||l.diff===0&&!n.loopSwapReset||n.currentTranslate===n.startTranslate&&!n.loopSwapReset){n.isTouched=!1,n.isMoved=!1,n.startMoving=!1;return}n.isTouched=!1,n.isMoved=!1,n.startMoving=!1;let p;if(a.followFinger?p=s?t.translate:-t.translate:p=-n.currentTranslate,a.cssMode)return;if(a.freeMode&&a.freeMode.enabled){t.freeMode.onTouchEnd({currentPos:p});return}const m=p>=-t.maxTranslate()&&!t.params.loop;let g=0,w=t.slidesSizesGrid[0];for(let C=0;C<u.length;C+=C<a.slidesPerGroupSkip?1:a.slidesPerGroup){const T=C<a.slidesPerGroupSkip-1?1:a.slidesPerGroup;typeof u[C+T]<"u"?(m||p>=u[C]&&p<u[C+T])&&(g=C,w=u[C+T]-u[C]):(m||p>=u[C])&&(g=C,w=u[u.length-1]-u[u.length-2])}let h=null,v=null;a.rewind&&(t.isBeginning?v=a.virtual&&a.virtual.enabled&&t.virtual?t.virtual.slides.length-1:t.slides.length-1:t.isEnd&&(h=0));const x=(p-u[g])/w,S=g<a.slidesPerGroupSkip-1?1:a.slidesPerGroup;if(y>a.longSwipesMs){if(!a.longSwipes){t.slideTo(t.activeIndex);return}t.swipeDirection==="next"&&(x>=a.longSwipesRatio?t.slideTo(a.rewind&&t.isEnd?h:g+S):t.slideTo(g)),t.swipeDirection==="prev"&&(x>1-a.longSwipesRatio?t.slideTo(g+S):v!==null&&x<0&&Math.abs(x)>a.longSwipesRatio?t.slideTo(v):t.slideTo(g))}else{if(!a.shortSwipes){t.slideTo(t.activeIndex);return}t.navigation&&(r.target===t.navigation.nextEl||r.target===t.navigation.prevEl)?r.target===t.navigation.nextEl?t.slideTo(g+S):t.slideTo(g):(t.swipeDirection==="next"&&t.slideTo(h!==null?h:g+S),t.swipeDirection==="prev"&&t.slideTo(v!==null?v:g))}}function Ev(){const e=this,{params:t,el:n}=e;if(n&&n.offsetWidth===0)return;t.breakpoints&&e.setBreakpoint();const{allowSlideNext:r,allowSlidePrev:i,snapGrid:o}=e,a=e.virtual&&e.params.virtual.enabled;e.allowSlideNext=!0,e.allowSlidePrev=!0,e.updateSize(),e.updateSlides(),e.updateSlidesClasses();const l=a&&t.loop;(t.slidesPerView==="auto"||t.slidesPerView>1)&&e.isEnd&&!e.isBeginning&&!e.params.centeredSlides&&!l?e.slideTo(e.slides.length-1,0,!1,!0):e.params.loop&&!a?e.slideToLoop(e.realIndex,0,!1,!0):e.slideTo(e.activeIndex,0,!1,!0),e.autoplay&&e.autoplay.running&&e.autoplay.paused&&(clearTimeout(e.autoplay.resizeTimeout),e.autoplay.resizeTimeout=setTimeout(()=>{e.autoplay&&e.autoplay.running&&e.autoplay.paused&&e.autoplay.resume()},500)),e.allowSlidePrev=i,e.allowSlideNext=r,e.params.watchOverflow&&o!==e.snapGrid&&e.checkOverflow()}function cI(e){const t=this;t.enabled&&(t.allowClick||(t.params.preventClicks&&e.preventDefault(),t.params.preventClicksPropagation&&t.animating&&(e.stopPropagation(),e.stopImmediatePropagation())))}function dI(){const e=this,{wrapperEl:t,rtlTranslate:n,enabled:r}=e;if(!r)return;e.previousTranslate=e.translate,e.isHorizontal()?e.translate=-t.scrollLeft:e.translate=-t.scrollTop,e.translate===0&&(e.translate=0),e.updateActiveIndex(),e.updateSlidesClasses();let i;const o=e.maxTranslate()-e.minTranslate();o===0?i=0:i=(e.translate-e.minTranslate())/o,i!==e.progress&&e.updateProgress(n?-e.translate:e.translate),e.emit("setTranslate",e.translate,!1)}function fI(e){const t=this;tl(t,e.target),!(t.params.cssMode||t.params.slidesPerView!=="auto"&&!t.params.autoHeight)&&t.update()}function pI(){const e=this;e.documentTouchHandlerProceeded||(e.documentTouchHandlerProceeded=!0,e.params.touchReleaseOnEdges&&(e.el.style.touchAction="auto"))}const GS=(e,t)=>{const n=kn(),{params:r,el:i,wrapperEl:o,device:a}=e,l=!!r.nested,s=t==="on"?"addEventListener":"removeEventListener",u=t;!i||typeof i=="string"||(n[s]("touchstart",e.onDocumentTouchStart,{passive:!1,capture:l}),i[s]("touchstart",e.onTouchStart,{passive:!1}),i[s]("pointerdown",e.onTouchStart,{passive:!1}),n[s]("touchmove",e.onTouchMove,{passive:!1,capture:l}),n[s]("pointermove",e.onTouchMove,{passive:!1,capture:l}),n[s]("touchend",e.onTouchEnd,{passive:!0}),n[s]("pointerup",e.onTouchEnd,{passive:!0}),n[s]("pointercancel",e.onTouchEnd,{passive:!0}),n[s]("touchcancel",e.onTouchEnd,{passive:!0}),n[s]("pointerout",e.onTouchEnd,{passive:!0}),n[s]("pointerleave",e.onTouchEnd,{passive:!0}),n[s]("contextmenu",e.onTouchEnd,{passive:!0}),(r.preventClicks||r.preventClicksPropagation)&&i[s]("click",e.onClick,!0),r.cssMode&&o[s]("scroll",e.onScroll),r.updateOnWindowResize?e[u](a.ios||a.android?"resize orientationchange observerUpdate":"resize observerUpdate",Ev,!0):e[u]("observerUpdate",Ev,!0),i[s]("load",e.onLoad,{capture:!0}))};function hI(){const e=this,{params:t}=e;e.onTouchStart=sI.bind(e),e.onTouchMove=lI.bind(e),e.onTouchEnd=uI.bind(e),e.onDocumentTouchStart=pI.bind(e),t.cssMode&&(e.onScroll=dI.bind(e)),e.onClick=cI.bind(e),e.onLoad=fI.bind(e),GS(e,"on")}function mI(){GS(this,"off")}var gI={attachEvents:hI,detachEvents:mI};const kv=(e,t)=>e.grid&&t.grid&&t.grid.rows>1;function vI(){const e=this,{realIndex:t,initialized:n,params:r,el:i}=e,o=r.breakpoints;if(!o||o&&Object.keys(o).length===0)return;const a=kn(),l=r.breakpointsBase==="window"||!r.breakpointsBase?r.breakpointsBase:"container",s=["window","container"].includes(r.breakpointsBase)||!r.breakpointsBase?e.el:a.querySelector(r.breakpointsBase),u=e.getBreakpoint(o,l,s);if(!u||e.currentBreakpoint===u)return;const c=(u in o?o[u]:void 0)||e.originalParams,y=kv(e,r),p=kv(e,c),m=e.params.grabCursor,g=c.grabCursor,w=r.enabled;y&&!p?(i.classList.remove(`${r.containerModifierClass}grid`,`${r.containerModifierClass}grid-column`),e.emitContainerClasses()):!y&&p&&(i.classList.add(`${r.containerModifierClass}grid`),(c.grid.fill&&c.grid.fill==="column"||!c.grid.fill&&r.grid.fill==="column")&&i.classList.add(`${r.containerModifierClass}grid-column`),e.emitContainerClasses()),m&&!g?e.unsetGrabCursor():!m&&g&&e.setGrabCursor(),["navigation","pagination","scrollbar"].forEach(T=>{if(typeof c[T]>"u")return;const k=r[T]&&r[T].enabled,_=c[T]&&c[T].enabled;k&&!_&&e[T].disable(),!k&&_&&e[T].enable()});const h=c.direction&&c.direction!==r.direction,v=r.loop&&(c.slidesPerView!==r.slidesPerView||h),x=r.loop;h&&n&&e.changeDirection(),Mt(e.params,c);const S=e.params.enabled,C=e.params.loop;Object.assign(e,{allowTouchMove:e.params.allowTouchMove,allowSlideNext:e.params.allowSlideNext,allowSlidePrev:e.params.allowSlidePrev}),w&&!S?e.disable():!w&&S&&e.enable(),e.currentBreakpoint=u,e.emit("_beforeBreakpoint",c),n&&(v?(e.loopDestroy(),e.loopCreate(t),e.updateSlides()):!x&&C?(e.loopCreate(t),e.updateSlides()):x&&!C&&e.loopDestroy()),e.emit("breakpoint",c)}function yI(e,t="window",n){if(!e||t==="container"&&!n)return;let r=!1;const i=vt(),o=t==="window"?i.innerHeight:n.clientHeight,a=Object.keys(e).map(l=>{if(typeof l=="string"&&l.indexOf("@")===0){const s=parseFloat(l.substr(1));return{value:o*s,point:l}}return{value:l,point:l}});a.sort((l,s)=>parseInt(l.value,10)-parseInt(s.value,10));for(let l=0;l<a.length;l+=1){const{point:s,value:u}=a[l];t==="window"?i.matchMedia(`(min-width: ${u}px)`).matches&&(r=s):u<=n.clientWidth&&(r=s)}return r||"max"}var xI={setBreakpoint:vI,getBreakpoint:yI};function bI(e,t){const n=[];return e.forEach(r=>{typeof r=="object"?Object.keys(r).forEach(i=>{r[i]&&n.push(t+i)}):typeof r=="string"&&n.push(t+r)}),n}function wI(){const e=this,{classNames:t,params:n,rtl:r,el:i,device:o}=e,a=bI(["initialized",n.direction,{"free-mode":e.params.freeMode&&n.freeMode.enabled},{autoheight:n.autoHeight},{rtl:r},{grid:n.grid&&n.grid.rows>1},{"grid-column":n.grid&&n.grid.rows>1&&n.grid.fill==="column"},{android:o.android},{ios:o.ios},{"css-mode":n.cssMode},{centered:n.cssMode&&n.centeredSlides},{"watch-progress":n.watchSlidesProgress}],n.containerModifierClass);t.push(...a),i.classList.add(...t),e.emitContainerClasses()}function SI(){const e=this,{el:t,classNames:n}=e;!t||typeof t=="string"||(t.classList.remove(...n),e.emitContainerClasses())}var _I={addClasses:wI,removeClasses:SI};function CI(){const e=this,{isLocked:t,params:n}=e,{slidesOffsetBefore:r}=n;if(r){const i=e.slides.length-1,o=e.slidesGrid[i]+e.slidesSizesGrid[i]+r*2;e.isLocked=e.size>o}else e.isLocked=e.snapGrid.length===1;n.allowSlideNext===!0&&(e.allowSlideNext=!e.isLocked),n.allowSlidePrev===!0&&(e.allowSlidePrev=!e.isLocked),t&&t!==e.isLocked&&(e.isEnd=!1),t!==e.isLocked&&e.emit(e.isLocked?"lock":"unlock")}var EI={checkOverflow:CI},Op={init:!0,direction:"horizontal",oneWayMovement:!1,swiperElementNodeName:"SWIPER-CONTAINER",touchEventsTarget:"wrapper",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,eventsPrefix:"swiper",enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,snapToSlideEdge:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:5,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,loop:!1,loopAddBlankSlides:!0,loopAdditionalSlides:0,loopPreventsSliding:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,maxBackfaceHiddenSlides:10,containerModifierClass:"swiper-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-blank",slideActiveClass:"swiper-slide-active",slideVisibleClass:"swiper-slide-visible",slideFullyVisibleClass:"swiper-slide-fully-visible",slideNextClass:"swiper-slide-next",slidePrevClass:"swiper-slide-prev",wrapperClass:"swiper-wrapper",lazyPreloaderClass:"swiper-lazy-preloader",lazyPreloadPrevNext:0,runCallbacksOnInit:!0,_emitClasses:!1};function kI(e,t){return function(r={}){const i=Object.keys(r)[0],o=r[i];if(typeof o!="object"||o===null){Mt(t,r);return}if(e[i]===!0&&(e[i]={enabled:!0}),i==="navigation"&&e[i]&&e[i].enabled&&!e[i].prevEl&&!e[i].nextEl&&(e[i].auto=!0),["pagination","scrollbar"].indexOf(i)>=0&&e[i]&&e[i].enabled&&!e[i].el&&(e[i].auto=!0),!(i in e&&"enabled"in o)){Mt(t,r);return}typeof e[i]=="object"&&!("enabled"in e[i])&&(e[i].enabled=!0),e[i]||(e[i]={enabled:!1}),Mt(t,r)}}const Md={eventsEmitter:_$,update:D$,translate:N$,transition:H$,slide:Z$,loop:nI,grabCursor:oI,events:gI,breakpoints:xI,checkOverflow:EI,classes:_I},$d={};let Cm=class $n{constructor(...t){let n,r;t.length===1&&t[0].constructor&&Object.prototype.toString.call(t[0]).slice(8,-1)==="Object"?r=t[0]:[n,r]=t,r||(r={}),r=Mt({},r),n&&!r.el&&(r.el=n);const i=kn();if(r.el&&typeof r.el=="string"&&i.querySelectorAll(r.el).length>1){const s=[];return i.querySelectorAll(r.el).forEach(u=>{const d=Mt({},r,{el:u});s.push(new $n(d))}),s}const o=this;o.__swiper__=!0,o.support=VS(),o.device=US({userAgent:r.userAgent}),o.browser=HS(),o.eventsListeners={},o.eventsAnyListeners=[],o.modules=[...o.__modules__],r.modules&&Array.isArray(r.modules)&&r.modules.forEach(s=>{typeof s=="function"&&o.modules.indexOf(s)<0&&o.modules.push(s)});const a={};o.modules.forEach(s=>{s({params:r,swiper:o,extendParams:kI(r,a),on:o.on.bind(o),once:o.once.bind(o),off:o.off.bind(o),emit:o.emit.bind(o)})});const l=Mt({},Op,a);return o.params=Mt({},l,$d,r),o.originalParams=Mt({},o.params),o.passedParams=Mt({},r),o.params&&o.params.on&&Object.keys(o.params.on).forEach(s=>{o.on(s,o.params.on[s])}),o.params&&o.params.onAny&&o.onAny(o.params.onAny),Object.assign(o,{enabled:o.params.enabled,el:n,classNames:[],slides:[],slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal(){return o.params.direction==="horizontal"},isVertical(){return o.params.direction==="vertical"},activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,cssOverflowAdjustment(){return Math.trunc(this.translate/2**23)*2**23},allowSlideNext:o.params.allowSlideNext,allowSlidePrev:o.params.allowSlidePrev,touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:o.params.focusableElements,lastClickTime:0,clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,startMoving:void 0,pointerId:null,touchId:null},allowClick:!0,allowTouchMove:o.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),o.emit("_swiper"),o.params.init&&o.init(),o}getDirectionLabel(t){return this.isHorizontal()?t:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[t]}getSlideIndex(t){const{slidesEl:n,params:r}=this,i=Sn(n,`.${r.slideClass}, swiper-slide`),o=Kl(i[0]);return Kl(t)-o}getSlideIndexByData(t){return this.getSlideIndex(this.slides.find(n=>n.getAttribute("data-swiper-slide-index")*1===t))}getSlideIndexWhenGrid(t){return this.grid&&this.params.grid&&this.params.grid.rows>1&&(this.params.grid.fill==="column"?t=Math.floor(t/this.params.grid.rows):this.params.grid.fill==="row"&&(t=t%Math.ceil(this.slides.length/this.params.grid.rows))),t}recalcSlides(){const t=this,{slidesEl:n,params:r}=t;t.slides=Sn(n,`.${r.slideClass}, swiper-slide`)}enable(){const t=this;t.enabled||(t.enabled=!0,t.params.grabCursor&&t.setGrabCursor(),t.emit("enable"))}disable(){const t=this;t.enabled&&(t.enabled=!1,t.params.grabCursor&&t.unsetGrabCursor(),t.emit("disable"))}setProgress(t,n){const r=this;t=Math.min(Math.max(t,0),1);const i=r.minTranslate(),a=(r.maxTranslate()-i)*t+i;r.translateTo(a,typeof n>"u"?0:n),r.updateActiveIndex(),r.updateSlidesClasses()}emitContainerClasses(){const t=this;if(!t.params._emitClasses||!t.el)return;const n=t.el.className.split(" ").filter(r=>r.indexOf("swiper")===0||r.indexOf(t.params.containerModifierClass)===0);t.emit("_containerClasses",n.join(" "))}getSlideClasses(t){const n=this;return n.destroyed?"":t.className.split(" ").filter(r=>r.indexOf("swiper-slide")===0||r.indexOf(n.params.slideClass)===0).join(" ")}emitSlidesClasses(){const t=this;if(!t.params._emitClasses||!t.el)return;const n=[];t.slides.forEach(r=>{const i=t.getSlideClasses(r);n.push({slideEl:r,classNames:i}),t.emit("_slideClass",r,i)}),t.emit("_slideClasses",n)}slidesPerViewDynamic(t="current",n=!1){const r=this,{params:i,slides:o,slidesGrid:a,slidesSizesGrid:l,size:s,activeIndex:u}=r;let d=1;if(typeof i.slidesPerView=="number")return i.slidesPerView;if(i.centeredSlides){let c=o[u]?Math.ceil(o[u].swiperSlideSize):0,y;for(let p=u+1;p<o.length;p+=1)o[p]&&!y&&(c+=Math.ceil(o[p].swiperSlideSize),d+=1,c>s&&(y=!0));for(let p=u-1;p>=0;p-=1)o[p]&&!y&&(c+=o[p].swiperSlideSize,d+=1,c>s&&(y=!0))}else if(t==="current")for(let c=u+1;c<o.length;c+=1)(n?a[c]+l[c]-a[u]<s:a[c]-a[u]<s)&&(d+=1);else for(let c=u-1;c>=0;c-=1)a[u]-a[c]<s&&(d+=1);return d}update(){const t=this;if(!t||t.destroyed)return;const{snapGrid:n,params:r}=t;r.breakpoints&&t.setBreakpoint(),[...t.el.querySelectorAll('[loading="lazy"]')].forEach(a=>{a.complete&&tl(t,a)}),t.updateSize(),t.updateSlides(),t.updateProgress(),t.updateSlidesClasses();function i(){const a=t.rtlTranslate?t.translate*-1:t.translate,l=Math.min(Math.max(a,t.maxTranslate()),t.minTranslate());t.setTranslate(l),t.updateActiveIndex(),t.updateSlidesClasses()}let o;if(r.freeMode&&r.freeMode.enabled&&!r.cssMode)i(),r.autoHeight&&t.updateAutoHeight();else{if((r.slidesPerView==="auto"||r.slidesPerView>1)&&t.isEnd&&!r.centeredSlides){const a=t.virtual&&r.virtual.enabled?t.virtual.slides:t.slides;o=t.slideTo(a.length-1,0,!1,!0)}else o=t.slideTo(t.activeIndex,0,!1,!0);o||i()}r.watchOverflow&&n!==t.snapGrid&&t.checkOverflow(),t.emit("update")}changeDirection(t,n=!0){const r=this,i=r.params.direction;return t||(t=i==="horizontal"?"vertical":"horizontal"),t===i||t!=="horizontal"&&t!=="vertical"||(r.el.classList.remove(`${r.params.containerModifierClass}${i}`),r.el.classList.add(`${r.params.containerModifierClass}${t}`),r.emitContainerClasses(),r.params.direction=t,r.slides.forEach(o=>{t==="vertical"?o.style.width="":o.style.height=""}),r.emit("changeDirection"),n&&r.update()),r}changeLanguageDirection(t){const n=this;n.rtl&&t==="rtl"||!n.rtl&&t==="ltr"||(n.rtl=t==="rtl",n.rtlTranslate=n.params.direction==="horizontal"&&n.rtl,n.rtl?(n.el.classList.add(`${n.params.containerModifierClass}rtl`),n.el.dir="rtl"):(n.el.classList.remove(`${n.params.containerModifierClass}rtl`),n.el.dir="ltr"),n.update())}mount(t){const n=this;if(n.mounted)return!0;let r=t||n.params.el;if(typeof r=="string"&&(r=document.querySelector(r)),!r)return!1;r.swiper=n,r.parentNode&&r.parentNode.host&&r.parentNode.host.nodeName===n.params.swiperElementNodeName.toUpperCase()&&(n.isElement=!0);const i=()=>`.${(n.params.wrapperClass||"").trim().split(" ").join(".")}`;let a=(()=>r&&r.shadowRoot&&r.shadowRoot.querySelector?r.shadowRoot.querySelector(i()):Sn(r,i())[0])();return!a&&n.params.createElements&&(a=Xl("div",n.params.wrapperClass),r.append(a),Sn(r,`.${n.params.slideClass}`).forEach(l=>{a.append(l)})),Object.assign(n,{el:r,wrapperEl:a,slidesEl:n.isElement&&!r.parentNode.host.slideSlots?r.parentNode.host:a,hostEl:n.isElement?r.parentNode.host:r,mounted:!0,rtl:r.dir.toLowerCase()==="rtl"||fr(r,"direction")==="rtl",rtlTranslate:n.params.direction==="horizontal"&&(r.dir.toLowerCase()==="rtl"||fr(r,"direction")==="rtl"),wrongRTL:fr(a,"display")==="-webkit-box"}),!0}init(t){const n=this;if(n.initialized||n.mount(t)===!1)return n;n.emit("beforeInit"),n.params.breakpoints&&n.setBreakpoint(),n.addClasses(),n.updateSize(),n.updateSlides(),n.params.watchOverflow&&n.checkOverflow(),n.params.grabCursor&&n.enabled&&n.setGrabCursor(),n.params.loop&&n.virtual&&n.params.virtual.enabled?n.slideTo(n.params.initialSlide+n.virtual.slidesBefore,0,n.params.runCallbacksOnInit,!1,!0):n.slideTo(n.params.initialSlide,0,n.params.runCallbacksOnInit,!1,!0),n.params.loop&&n.loopCreate(void 0,!0),n.attachEvents();const i=[...n.el.querySelectorAll('[loading="lazy"]')];return n.isElement&&i.push(...n.hostEl.querySelectorAll('[loading="lazy"]')),i.forEach(o=>{o.complete?tl(n,o):o.addEventListener("load",a=>{tl(n,a.target)})}),Tp(n),n.initialized=!0,Tp(n),n.emit("init"),n.emit("afterInit"),n}destroy(t=!0,n=!0){const r=this,{params:i,el:o,wrapperEl:a,slides:l}=r;return typeof r.params>"u"||r.destroyed||(r.emit("beforeDestroy"),r.initialized=!1,r.detachEvents(),i.loop&&r.loopDestroy(),n&&(r.removeClasses(),o&&typeof o!="string"&&o.removeAttribute("style"),a&&a.removeAttribute("style"),l&&l.length&&l.forEach(s=>{s.classList.remove(i.slideVisibleClass,i.slideFullyVisibleClass,i.slideActiveClass,i.slideNextClass,i.slidePrevClass),s.removeAttribute("style"),s.removeAttribute("data-swiper-slide-index")})),r.emit("destroy"),Object.keys(r.eventsListeners).forEach(s=>{r.off(s)}),t!==!1&&(r.el&&typeof r.el!="string"&&(r.el.swiper=null),s$(r)),r.destroyed=!0),null}static extendDefaults(t){Mt($d,t)}static get extendedDefaults(){return $d}static get defaults(){return Op}static installModule(t){$n.prototype.__modules__||($n.prototype.__modules__=[]);const n=$n.prototype.__modules__;typeof t=="function"&&n.indexOf(t)<0&&n.push(t)}static use(t){return Array.isArray(t)?(t.forEach(n=>$n.installModule(n)),$n):($n.installModule(t),$n)}};Object.keys(Md).forEach(e=>{Object.keys(Md[e]).forEach(t=>{Cm.prototype[t]=Md[e][t]})});Cm.use([w$,S$]);const YS=["eventsPrefix","injectStyles","injectStylesUrls","modules","init","_direction","oneWayMovement","swiperElementNodeName","touchEventsTarget","initialSlide","_speed","cssMode","updateOnWindowResize","resizeObserver","nested","focusableElements","_enabled","_width","_height","preventInteractionOnTransition","userAgent","url","_edgeSwipeDetection","_edgeSwipeThreshold","_freeMode","_autoHeight","setWrapperSize","virtualTranslate","_effect","breakpoints","breakpointsBase","_spaceBetween","_slidesPerView","maxBackfaceHiddenSlides","_grid","_slidesPerGroup","_slidesPerGroupSkip","_slidesPerGroupAuto","_centeredSlides","_centeredSlidesBounds","_slidesOffsetBefore","_slidesOffsetAfter","normalizeSlideIndex","_centerInsufficientSlides","_snapToSlideEdge","_watchOverflow","roundLengths","touchRatio","touchAngle","simulateTouch","_shortSwipes","_longSwipes","longSwipesRatio","longSwipesMs","_followFinger","allowTouchMove","_threshold","touchMoveStopPropagation","touchStartPreventDefault","touchStartForcePreventDefault","touchReleaseOnEdges","uniqueNavElements","_resistance","_resistanceRatio","_watchSlidesProgress","_grabCursor","preventClicks","preventClicksPropagation","_slideToClickedSlide","_loop","loopAdditionalSlides","loopAddBlankSlides","loopPreventsSliding","_rewind","_allowSlidePrev","_allowSlideNext","_swipeHandler","_noSwiping","noSwipingClass","noSwipingSelector","passiveListeners","containerModifierClass","slideClass","slideActiveClass","slideVisibleClass","slideFullyVisibleClass","slideNextClass","slidePrevClass","slideBlankClass","wrapperClass","lazyPreloaderClass","lazyPreloadPrevNext","runCallbacksOnInit","observer","observeParents","observeSlideChildren","a11y","_autoplay","_controller","coverflowEffect","cubeEffect","fadeEffect","flipEffect","creativeEffect","cardsEffect","hashNavigation","history","keyboard","mousewheel","_navigation","_pagination","parallax","_scrollbar","_thumbs","virtual","zoom","control"];function ti(e){return typeof e=="object"&&e!==null&&e.constructor&&Object.prototype.toString.call(e).slice(8,-1)==="Object"&&!e.__swiper__}function Bi(e,t){const n=["__proto__","constructor","prototype"];Object.keys(t).filter(r=>n.indexOf(r)<0).forEach(r=>{typeof e[r]>"u"?e[r]=t[r]:ti(t[r])&&ti(e[r])&&Object.keys(t[r]).length>0?t[r].__swiper__?e[r]=t[r]:Bi(e[r],t[r]):e[r]=t[r]})}function qS(e={}){return e.navigation&&typeof e.navigation.nextEl>"u"&&typeof e.navigation.prevEl>"u"}function XS(e={}){return e.pagination&&typeof e.pagination.el>"u"}function KS(e={}){return e.scrollbar&&typeof e.scrollbar.el>"u"}function QS(e=""){const t=e.split(" ").map(r=>r.trim()).filter(r=>!!r),n=[];return t.forEach(r=>{n.indexOf(r)<0&&n.push(r)}),n.join(" ")}function PI(e=""){return e?e.includes("swiper-wrapper")?e:`swiper-wrapper ${e}`:"swiper-wrapper"}function TI({swiper:e,slides:t,passedParams:n,changedParams:r,nextEl:i,prevEl:o,scrollbarEl:a,paginationEl:l}){const s=r.filter(_=>_!=="children"&&_!=="direction"&&_!=="wrapperClass"),{params:u,pagination:d,navigation:c,scrollbar:y,virtual:p,thumbs:m}=e;let g,w,h,v,x,S,C,T;r.includes("thumbs")&&n.thumbs&&n.thumbs.swiper&&!n.thumbs.swiper.destroyed&&u.thumbs&&(!u.thumbs.swiper||u.thumbs.swiper.destroyed)&&(g=!0),r.includes("controller")&&n.controller&&n.controller.control&&u.controller&&!u.controller.control&&(w=!0),r.includes("pagination")&&n.pagination&&(n.pagination.el||l)&&(u.pagination||u.pagination===!1)&&d&&!d.el&&(h=!0),r.includes("scrollbar")&&n.scrollbar&&(n.scrollbar.el||a)&&(u.scrollbar||u.scrollbar===!1)&&y&&!y.el&&(v=!0),r.includes("navigation")&&n.navigation&&(n.navigation.prevEl||o)&&(n.navigation.nextEl||i)&&(u.navigation||u.navigation===!1)&&c&&!c.prevEl&&!c.nextEl&&(x=!0);const k=_=>{e[_]&&(e[_].destroy(),_==="navigation"?(e.isElement&&(e[_].prevEl.remove(),e[_].nextEl.remove()),u[_].prevEl=void 0,u[_].nextEl=void 0,e[_].prevEl=void 0,e[_].nextEl=void 0):(e.isElement&&e[_].el.remove(),u[_].el=void 0,e[_].el=void 0))};r.includes("loop")&&e.isElement&&(u.loop&&!n.loop?S=!0:!u.loop&&n.loop?C=!0:T=!0),s.forEach(_=>{if(ti(u[_])&&ti(n[_]))Object.assign(u[_],n[_]),(_==="navigation"||_==="pagination"||_==="scrollbar")&&"enabled"in n[_]&&!n[_].enabled&&k(_);else{const M=n[_];(M===!0||M===!1)&&(_==="navigation"||_==="pagination"||_==="scrollbar")?M===!1&&k(_):u[_]=n[_]}}),s.includes("controller")&&!w&&e.controller&&e.controller.control&&u.controller&&u.controller.control&&(e.controller.control=u.controller.control),r.includes("children")&&t&&p&&u.virtual.enabled?(p.slides=t,p.update(!0)):r.includes("virtual")&&p&&u.virtual.enabled&&(t&&(p.slides=t),p.update(!0)),r.includes("children")&&t&&u.loop&&(T=!0),g&&m.init()&&m.update(!0),w&&(e.controller.control=u.controller.control),h&&(e.isElement&&(!l||typeof l=="string")&&(l=document.createElement("div"),l.classList.add("swiper-pagination"),l.part.add("pagination"),e.el.appendChild(l)),l&&(u.pagination.el=l),d.init(),d.render(),d.update()),v&&(e.isElement&&(!a||typeof a=="string")&&(a=document.createElement("div"),a.classList.add("swiper-scrollbar"),a.part.add("scrollbar"),e.el.appendChild(a)),a&&(u.scrollbar.el=a),y.init(),y.updateSize(),y.setTranslate()),x&&(e.isElement&&((!i||typeof i=="string")&&(i=document.createElement("div"),i.classList.add("swiper-button-next"),Da(i,e.navigation.arrowSvg),i.part.add("button-next"),e.el.appendChild(i)),(!o||typeof o=="string")&&(o=document.createElement("div"),o.classList.add("swiper-button-prev"),Da(o,e.navigation.arrowSvg),o.part.add("button-prev"),e.el.appendChild(o))),i&&(u.navigation.nextEl=i),o&&(u.navigation.prevEl=o),c.init(),c.update()),r.includes("allowSlideNext")&&(e.allowSlideNext=n.allowSlideNext),r.includes("allowSlidePrev")&&(e.allowSlidePrev=n.allowSlidePrev),r.includes("direction")&&e.changeDirection(n.direction,!1),(S||T)&&e.loopDestroy(),(C||T)&&e.loopCreate(),e.update()}function OI(e={},t=!0){const n={on:{}},r={},i={};Bi(n,Op),n._emitClasses=!0,n.init=!1;const o={},a=YS.map(s=>s.replace(/_/,"")),l=Object.assign({},e);return Object.keys(l).forEach(s=>{typeof e[s]>"u"||(a.indexOf(s)>=0?ti(e[s])?(n[s]={},i[s]={},Bi(n[s],e[s]),Bi(i[s],e[s])):(n[s]=e[s],i[s]=e[s]):s.search(/on[A-Z]/)===0&&typeof e[s]=="function"?t?r[`${s[2].toLowerCase()}${s.substr(3)}`]=e[s]:n.on[`${s[2].toLowerCase()}${s.substr(3)}`]=e[s]:o[s]=e[s])}),["navigation","pagination","scrollbar"].forEach(s=>{n[s]===!0&&(n[s]={}),n[s]===!1&&delete n[s]}),{params:n,passedParams:i,rest:o,events:r}}function jI({el:e,nextEl:t,prevEl:n,paginationEl:r,scrollbarEl:i,swiper:o},a){qS(a)&&t&&n&&(o.params.navigation.nextEl=t,o.originalParams.navigation.nextEl=t,o.params.navigation.prevEl=n,o.originalParams.navigation.prevEl=n),XS(a)&&r&&(o.params.pagination.el=r,o.originalParams.pagination.el=r),KS(a)&&i&&(o.params.scrollbar.el=i,o.originalParams.scrollbar.el=i),o.init(e)}function MI(e,t,n,r,i){const o=[];if(!t)return o;const a=s=>{o.indexOf(s)<0&&o.push(s)};if(n&&r){const s=r.map(i),u=n.map(i);s.join("")!==u.join("")&&a("children"),r.length!==n.length&&a("children")}return YS.filter(s=>s[0]==="_").map(s=>s.replace(/_/,"")).forEach(s=>{if(s in e&&s in t)if(ti(e[s])&&ti(t[s])){const u=Object.keys(e[s]),d=Object.keys(t[s]);u.length!==d.length?a(s):(u.forEach(c=>{e[s][c]!==t[s][c]&&a(s)}),d.forEach(c=>{e[s][c]!==t[s][c]&&a(s)}))}else e[s]!==t[s]&&a(s)}),o}const $I=e=>{!e||e.destroyed||!e.params.virtual||e.params.virtual&&!e.params.virtual.enabled||(e.updateSlides(),e.updateProgress(),e.updateSlidesClasses(),e.emit("_virtualUpdated"),e.parallax&&e.params.parallax&&e.params.parallax.enabled&&e.parallax.setTranslate())};function Ql(){return Ql=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ql.apply(this,arguments)}function ZS(e){return e.type&&e.type.displayName&&e.type.displayName.includes("SwiperSlide")}function JS(e){const t=[];return K.Children.toArray(e).forEach(n=>{ZS(n)?t.push(n):n.props&&n.props.children&&JS(n.props.children).forEach(r=>t.push(r))}),t}function II(e){const t=[],n={"container-start":[],"container-end":[],"wrapper-start":[],"wrapper-end":[]};return K.Children.toArray(e).forEach(r=>{if(ZS(r))t.push(r);else if(r.props&&r.props.slot&&n[r.props.slot])n[r.props.slot].push(r);else if(r.props&&r.props.children){const i=JS(r.props.children);i.length>0?i.forEach(o=>t.push(o)):n["container-end"].push(r)}else n["container-end"].push(r)}),{slides:t,slots:n}}function DI(e,t,n){if(!n)return null;const r=d=>{let c=d;return d<0?c=t.length+d:c>=t.length&&(c=c-t.length),c},i=e.isHorizontal()?{[e.rtlTranslate?"right":"left"]:`${n.offset}px`}:{top:`${n.offset}px`},{from:o,to:a}=n,l=e.params.loop?-t.length:0,s=e.params.loop?t.length*2:t.length,u=[];for(let d=l;d<s;d+=1)d>=o&&d<=a&&u.push(t[r(d)]);return u.map((d,c)=>K.cloneElement(d,{swiper:e,style:i,key:d.props.virtualIndex||d.key||`slide-${c}`}))}function oa(e,t){return typeof window>"u"?b.useEffect(e,t):b.useLayoutEffect(e,t)}const Pv=b.createContext(null),LI=b.createContext(null),e2=b.forwardRef(({className:e,tag:t="div",wrapperTag:n="div",children:r,onSwiper:i,...o}={},a)=>{let l=!1;const[s,u]=b.useState("swiper"),[d,c]=b.useState(null),[y,p]=b.useState(!1),m=b.useRef(!1),g=b.useRef(null),w=b.useRef(null),h=b.useRef(null),v=b.useRef(null),x=b.useRef(null),S=b.useRef(null),C=b.useRef(null),T=b.useRef(null),{params:k,passedParams:_,rest:M,events:$}=OI(o),{slides:D,slots:A}=II(r),j=()=>{p(!y)};Object.assign(k.on,{_containerClasses(P,I){u(I)}});const F=()=>{Object.assign(k.on,$),l=!0;const P={...k};if(delete P.wrapperClass,w.current=new Cm(P),w.current.virtual&&w.current.params.virtual.enabled){w.current.virtual.slides=D;const I={cache:!1,slides:D,renderExternal:c,renderExternalUpdate:!1};Bi(w.current.params.virtual,I),Bi(w.current.originalParams.virtual,I)}};g.current||F(),w.current&&w.current.on("_beforeBreakpoint",j);const R=()=>{l||!$||!w.current||Object.keys($).forEach(P=>{w.current.on(P,$[P])})},L=()=>{!$||!w.current||Object.keys($).forEach(P=>{w.current.off(P,$[P])})};b.useEffect(()=>()=>{w.current&&w.current.off("_beforeBreakpoint",j)}),b.useEffect(()=>{!m.current&&w.current&&(w.current.emitSlidesClasses(),m.current=!0)}),oa(()=>{if(a&&(a.current=g.current),!!g.current)return w.current.destroyed&&F(),jI({el:g.current,nextEl:x.current,prevEl:S.current,paginationEl:C.current,scrollbarEl:T.current,swiper:w.current},k),i&&!w.current.destroyed&&i(w.current),()=>{w.current&&!w.current.destroyed&&w.current.destroy(!0,!1)}},[]),oa(()=>{R();const P=MI(_,h.current,D,v.current,I=>I.key);return h.current=_,v.current=D,P.length&&w.current&&!w.current.destroyed&&TI({swiper:w.current,slides:D,passedParams:_,changedParams:P,nextEl:x.current,prevEl:S.current,scrollbarEl:T.current,paginationEl:C.current}),()=>{L()}}),oa(()=>{$I(w.current)},[d]);function O(){return k.virtual?DI(w.current,D,d):D.map((P,I)=>K.cloneElement(P,{swiper:w.current,swiperSlideIndex:I}))}return K.createElement(t,Ql({ref:g,className:QS(`${s}${e?` ${e}`:""}`)},M),K.createElement(LI.Provider,{value:w.current},A["container-start"],K.createElement(n,{className:PI(k.wrapperClass)},A["wrapper-start"],O(),A["wrapper-end"]),qS(k)&&K.createElement(K.Fragment,null,K.createElement("div",{ref:S,className:"swiper-button-prev"}),K.createElement("div",{ref:x,className:"swiper-button-next"})),KS(k)&&K.createElement("div",{ref:T,className:"swiper-scrollbar"}),XS(k)&&K.createElement("div",{ref:C,className:"swiper-pagination"}),A["container-end"]))});e2.displayName="Swiper";const t2=b.forwardRef(({tag:e="div",children:t,className:n="",swiper:r,zoom:i,lazy:o,virtualIndex:a,swiperSlideIndex:l,...s}={},u)=>{const d=b.useRef(null),[c,y]=b.useState("swiper-slide"),[p,m]=b.useState(!1);function g(x,S,C){S===d.current&&y(C)}oa(()=>{if(typeof l<"u"&&(d.current.swiperSlideIndex=l),u&&(u.current=d.current),!(!d.current||!r)){if(r.destroyed){c!=="swiper-slide"&&y("swiper-slide");return}return r.on("_slideClass",g),()=>{r&&r.off("_slideClass",g)}}}),oa(()=>{r&&d.current&&!r.destroyed&&y(r.getSlideClasses(d.current))},[r]);const w={isActive:c.indexOf("swiper-slide-active")>=0,isVisible:c.indexOf("swiper-slide-visible")>=0,isPrev:c.indexOf("swiper-slide-prev")>=0,isNext:c.indexOf("swiper-slide-next")>=0},h=()=>typeof t=="function"?t(w):t,v=()=>{m(!0)};return K.createElement(e,Ql({ref:d,className:QS(`${c}${n?` ${n}`:""}`),"data-swiper-slide-index":a,onLoad:v},s),i&&K.createElement(Pv.Provider,{value:w},K.createElement("div",{className:"swiper-zoom-container","data-swiper-zoom":typeof i=="number"?i:void 0},h(),o&&!p&&K.createElement("div",{className:"swiper-lazy-preloader",ref:x=>{x&&(x.lazyPreloaderManaged=!0)}}))),!i&&K.createElement(Pv.Provider,{value:w},h(),o&&!p&&K.createElement("div",{className:"swiper-lazy-preloader",ref:x=>{x&&(x.lazyPreloaderManaged=!0)}})))});t2.displayName="SwiperSlide";const AI=E.section`
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
`,RI=E.div`
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
`,FI=E.div`
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
`,zI=E(Oe)`
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
`,NI=[{id:1,title:"Дідів хлів - найкращий вибір для Вашого велосипеда",desc:"Якісні запчастини, професійний серевіс та індивідуальний підхід. Створюйте ідеальний байк разом з нами",img:"/Didiv/bike2-hero.jpeg",btn:"До каталогу",url:"/catalog"},{id:2,title:"Постійне оновлення товару",desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam reprehenderit obcaecati molestias est alias vitae laboriosam nulla perferendis officia incidunt aliquid voluptatem iste libero, officiis ex modi enim repellat. Consectetur!",img:"/Didiv/inside.webp",btn:"До новинок",url:"/catalog/new"}],BI=()=>f.jsx(AI,{children:f.jsx(e2,{modules:[m$,v$,g$],spaceBetween:0,slidesPerView:1,navigation:!0,pagination:{clickable:!0},autoplay:{delay:5e3},loop:!0,children:NI.map(e=>f.jsx(t2,{children:f.jsx(RI,{bg:e.img,children:f.jsxs(FI,{children:[f.jsx("h1",{children:e.title}),f.jsx("p",{children:e.desc}),f.jsx(zI,{to:e.url,children:e.btn})]})})},e.id))})}),VI=E.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  margin-bottom:30px;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`,Id=E.div`
  background-color: #ffffffde;
  padding: 20px;
  border: 1px solid #e3e2e2;
  border-radius: 8px;
`,Dd=E.div`
  font-size: 24px;
  font-weight: bold;
  color: var(--orange-color);
`,Ld=E.div`
  font-size: 14px;
  color: #888;
`,n2=()=>f.jsxs(VI,{children:[f.jsxs(Id,{children:[f.jsx(Dd,{children:"3000+"}),f.jsx(Ld,{children:"Перевірених деталей"})]}),f.jsxs(Id,{children:[f.jsx(Dd,{children:"6 років"}),f.jsx(Ld,{children:"Досвіду на ринку"})]}),f.jsxs(Id,{children:[f.jsx(Dd,{children:"100%"}),f.jsx(Ld,{children:"Контроль якості"})]})]}),UI=Ae.div`
  background:var(--background-color);
`,HI=Ae.div`
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
`;const WI=()=>f.jsx(UI,{children:f.jsxs(HI,{children:[f.jsx(BI,{}),f.jsx(bw,{}),f.jsx(i$,{}),f.jsx(n2,{})]})}),GI=E.div`
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
`,YI=E.section`
  background-color:  var(--second-background);
`,qI=E.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  justify-content: flex-start;
  margin-bottom: 16px;

  @media (min-width: 768px) {
    display: none;
  }
`,XI=E.button`
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
`,KI=E.svg`
  width: 20px;
  height: 20px;
  fill: var(--white-color);
`,QI=E.button`
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
`;const ZI=E.div`
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
`,JI=E.div`
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
`;const eD=E.div`
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
`;const tD=E.div`
  padding: 20px;
  border-top: 1px solid #eee;
  background: white;
`,nD=E.button`
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
`,r2=E.button`
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
`,rD=E.div`
  position: relative;
  display: inline-block;

`,iD=E.div`
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
`,mi=E.div`
  padding: 10px 12px;
  cursor: pointer;

  &:hover {
    background: #f0f0f0;
  }
`,oD=E.aside`

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
`,aD=E.h3`
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
`,jp=E.input.attrs({type:"checkbox"})`
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
`;var Mp={},Em={},km={},yo={};Object.defineProperty(yo,"__esModule",{value:!0});yo.Direction=void 0;var Tv;(function(e){e.Right="to right",e.Left="to left",e.Down="to bottom",e.Up="to top"})(Tv||(yo.Direction=Tv={}));(function(e){var t=te&&te.__spreadArray||function(A,j,F){if(F||arguments.length===2)for(var R=0,L=j.length,O;R<L;R++)(O||!(R in j))&&(O||(O=Array.prototype.slice.call(j,0,R)),O[R]=j[R]);return A.concat(O||Array.prototype.slice.call(j))};Object.defineProperty(e,"__esModule",{value:!0}),e.isIOS=e.useThumbOverlap=e.assertUnreachable=e.voidFn=e.getTrackBackground=e.replaceAt=e.schd=e.translate=e.getClosestThumbIndex=e.translateThumbs=e.getPaddingAndBorder=e.getMargin=e.checkInitialOverlap=e.checkValuesAgainstBoundaries=e.checkBoundaries=e.isVertical=e.relativeValue=e.normalizeValue=e.isStepDivisible=e.isTouchEvent=e.getStepDecimals=void 0;var n=b,r=yo,i=function(A){var j=A.toString().split(".")[1];return j?j.length:0};e.getStepDecimals=i;function o(A){return A.touches&&A.touches.length||A.changedTouches&&A.changedTouches.length}e.isTouchEvent=o;function a(A,j,F){var R=(j-A)/F,L=8,O=Number(R.toFixed(L));return parseInt(O.toString(),10)===O}e.isStepDivisible=a;function l(A,j,F,R,L,O,P){var I=1e11;if(A=Math.round(A*I)/I,!O){var z=P[j-1],B=P[j+1];if(z&&z>A)return z;if(B&&B<A)return B}if(A>R)return R;if(A<F)return F;var N=Math.floor(A*I-F*I)%Math.floor(L*I),U=Math.floor(A*I-Math.abs(N)),G=N===0?A:U/I,H=Math.abs(N/I)<L/2?G:G+L,X=(0,e.getStepDecimals)(L);return parseFloat(H.toFixed(X))}e.normalizeValue=l;function s(A,j,F){return(A-j)/(F-j)}e.relativeValue=s;function u(A){return A===r.Direction.Up||A===r.Direction.Down}e.isVertical=u;function d(A,j,F){if(j>=F)throw new RangeError("min (".concat(j,") is equal/bigger than max (").concat(F,")"));if(A<j)throw new RangeError("value (".concat(A,") is smaller than min (").concat(j,")"));if(A>F)throw new RangeError("value (".concat(A,") is bigger than max (").concat(F,")"))}e.checkBoundaries=d;function c(A,j,F){return A<j?j:A>F?F:A}e.checkValuesAgainstBoundaries=c;function y(A){if(!(A.length<2)&&!A.slice(1).every(function(j,F){return A[F]<=j}))throw new RangeError("values={[".concat(A,"]} needs to be sorted when allowOverlap={false}"))}e.checkInitialOverlap=y;function p(A){var j=window.getComputedStyle(A);return{top:parseInt(j["margin-top"],10),bottom:parseInt(j["margin-bottom"],10),left:parseInt(j["margin-left"],10),right:parseInt(j["margin-right"],10)}}e.getMargin=p;function m(A){var j=window.getComputedStyle(A);return{top:parseInt(j["padding-top"],10)+parseInt(j["border-top-width"],10),bottom:parseInt(j["padding-bottom"],10)+parseInt(j["border-bottom-width"],10),left:parseInt(j["padding-left"],10)+parseInt(j["border-left-width"],10),right:parseInt(j["padding-right"],10)+parseInt(j["border-right-width"],10)}}e.getPaddingAndBorder=m;function g(A,j,F){var R=F?-1:1;A.forEach(function(L,O){return h(L,R*j[O].x,j[O].y)})}e.translateThumbs=g;function w(A,j,F,R){for(var L=0,O=$(A[0],j,F,R),P=1;P<A.length;P++){var I=$(A[P],j,F,R);I<O&&(O=I,L=P)}return L}e.getClosestThumbIndex=w;function h(A,j,F){A.style.transform="translate(".concat(j,"px, ").concat(F,"px)")}e.translate=h;var v=function(A){var j=[],F=null,R=function(){for(var L=[],O=0;O<arguments.length;O++)L[O]=arguments[O];j=L,!F&&(F=requestAnimationFrame(function(){F=null,A.apply(void 0,j)}))};return R};e.schd=v;function x(A,j,F){var R=A.slice(0);return R[j]=F,R}e.replaceAt=x;function S(A){var j=A.values,F=A.colors,R=A.min,L=A.max,O=A.direction,P=O===void 0?r.Direction.Right:O,I=A.rtl,z=I===void 0?!1:I;z&&P===r.Direction.Right?P=r.Direction.Left:z&&r.Direction.Left&&(P=r.Direction.Right);var B=j.slice(0).sort(function(U,G){return U-G}).map(function(U){return(U-R)/(L-R)*100}),N=B.reduce(function(U,G,H){return"".concat(U,", ").concat(F[H]," ").concat(G,"%, ").concat(F[H+1]," ").concat(G,"%")},"");return"linear-gradient(".concat(P,", ").concat(F[0]," 0%").concat(N,", ").concat(F[F.length-1]," 100%)")}e.getTrackBackground=S;function C(){}e.voidFn=C;function T(A){throw new Error("Didn't expect to get here")}e.assertUnreachable=T;var k=function(A,j,F,R,L){L===void 0&&(L=function(P){return P});var O=Math.ceil(t([A],Array.from(A.children),!0).reduce(function(P,I){var z=Math.ceil(I.getBoundingClientRect().width);if(I.innerText&&I.innerText.includes(F)&&I.childElementCount===0){var B=I.cloneNode(!0);B.innerHTML=L(j.toFixed(R)),B.style.visibility="hidden",document.body.appendChild(B),z=Math.ceil(B.getBoundingClientRect().width),document.body.removeChild(B)}return z>P?z:P},A.getBoundingClientRect().width));return O},_=function(A,j,F,R,L,O,P){P===void 0&&(P=function(B){return B});var I=[],z=function(B){var N=k(F[B],R[B],L,O,P),U=j[B].x;j.forEach(function(G,H){var X=G.x,ee=k(F[H],R[H],L,O,P);B!==H&&(U>=X&&U<=X+ee||U+N>=X&&U+N<=X+ee)&&(I.includes(H)||(I.push(B),I.push(H),I=t(t([],I,!0),[B,H],!1),z(H)))})};return z(A),Array.from(new Set(I.sort()))},M=function(A,j,F,R,L,O){R===void 0&&(R=.1),L===void 0&&(L=" - "),O===void 0&&(O=function(H){return H});var P=(0,e.getStepDecimals)(R),I=(0,n.useState)({}),z=I[0],B=I[1],N=(0,n.useState)(O(j[F].toFixed(P))),U=N[0],G=N[1];return(0,n.useEffect)(function(){if(A){var H=A.getThumbs();if(H.length<1)return;var X={},ee=A.getOffsets(),fe=_(F,ee,H,j,L,P,O),be=O(j[F].toFixed(P));if(fe.length){var ie=fe.reduce(function(yt,bo,Za,wo){return yt.length?t(t([],yt,!0),[ee[wo[Za]].x],!1):[ee[wo[Za]].x]},[]);if(Math.min.apply(Math,ie)===ee[F].x){var Me=[];fe.forEach(function(yt){Me.push(j[yt].toFixed(P))}),be=Array.from(new Set(Me.sort(function(yt,bo){return parseFloat(yt)-parseFloat(bo)}))).map(O).join(L);var Be=Math.min.apply(Math,ie),Ve=Math.max.apply(Math,ie),li=H[fe[ie.indexOf(Ve)]].getBoundingClientRect().width;X.left="".concat(Math.abs(Be-(Ve+li))/2,"px"),X.transform="translate(-50%, 0)"}else X.visibility="hidden"}G(be),B(X)}},[A,j]),[U,z]};e.useThumbOverlap=M;function $(A,j,F,R){var L=A.getBoundingClientRect(),O=L.left,P=L.top,I=L.width,z=L.height;return u(R)?Math.abs(F-(P+z/2)):Math.abs(j-(O+I/2))}var D=function(){var A,j=((A=navigator.userAgentData)===null||A===void 0?void 0:A.platform)||navigator.platform;return["iPad Simulator","iPhone Simulator","iPod Simulator","iPad","iPhone","iPod"].includes(j)||navigator.userAgent.includes("Mac")&&"ontouchend"in document};e.isIOS=D})(km);var hD=te&&te.__extends||function(){var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,i){r.__proto__=i}||function(r,i){for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(r[o]=i[o])},e(t,n)};return function(t,n){if(typeof n!="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");e(t,n);function r(){this.constructor=t}t.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}}(),mD=te&&te.__createBinding||(Object.create?function(e,t,n,r){r===void 0&&(r=n);var i=Object.getOwnPropertyDescriptor(t,n);(!i||("get"in i?!t.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,i)}:function(e,t,n,r){r===void 0&&(r=n),e[r]=t[n]}),gD=te&&te.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),vD=te&&te.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)n!=="default"&&Object.prototype.hasOwnProperty.call(e,n)&&mD(t,e,n);return gD(t,e),t},Ov=te&&te.__spreadArray||function(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,o;r<i;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))};Object.defineProperty(Em,"__esModule",{value:!0});var Es=vD(b),oe=km,Re=yo,yD=["ArrowRight","ArrowUp","k","PageUp"],xD=["ArrowLeft","ArrowDown","j","PageDown"],bD=function(e){hD(t,e);function t(n){var r=e.call(this,n)||this;if(r.trackRef=Es.createRef(),r.thumbRefs=[],r.state={draggedTrackPos:[-1,-1],draggedThumbIndex:-1,thumbZIndexes:new Array(r.props.values.length).fill(0).map(function(i,o){return o}),isChanged:!1,markOffsets:[]},r.getOffsets=function(){var i=r.props,o=i.direction,a=i.values,l=i.min,s=i.max,u=r.trackRef.current;if(!u)return console.warn("No track element found."),[];var d=u.getBoundingClientRect(),c=(0,oe.getPaddingAndBorder)(u);return r.getThumbs().map(function(y,p){var m={x:0,y:0},g=y.getBoundingClientRect(),w=(0,oe.getMargin)(y);switch(o){case Re.Direction.Right:return m.x=(w.left+c.left)*-1,m.y=((g.height-d.height)/2+c.top)*-1,m.x+=d.width*(0,oe.relativeValue)(a[p],l,s)-g.width/2,m;case Re.Direction.Left:return m.x=(w.right+c.right)*-1,m.y=((g.height-d.height)/2+c.top)*-1,m.x+=d.width-d.width*(0,oe.relativeValue)(a[p],l,s)-g.width/2,m;case Re.Direction.Up:return m.x=((g.width-d.width)/2+w.left+c.left)*-1,m.y=-c.left,m.y+=d.height-d.height*(0,oe.relativeValue)(a[p],l,s)-g.height/2,m;case Re.Direction.Down:return m.x=((g.width-d.width)/2+w.left+c.left)*-1,m.y=-c.left,m.y+=d.height*(0,oe.relativeValue)(a[p],l,s)-g.height/2,m;default:return(0,oe.assertUnreachable)(o)}})},r.getThumbs=function(){return r.trackRef&&r.trackRef.current?Array.from(r.trackRef.current.children).filter(function(i){return i.hasAttribute("aria-valuenow")}):(console.warn("No thumbs found in the track container. Did you forget to pass & spread the `props` param in renderTrack?"),[])},r.getTargetIndex=function(i){return r.getThumbs().findIndex(function(o){return o===i.target||o.contains(i.target)})},r.addTouchEvents=function(i){document.addEventListener("touchmove",r.schdOnTouchMove,{passive:!1}),document.addEventListener("touchend",r.schdOnEnd,{passive:!1}),document.addEventListener("touchcancel",r.schdOnEnd,{passive:!1})},r.addMouseEvents=function(i){document.addEventListener("mousemove",r.schdOnMouseMove),document.addEventListener("mouseup",r.schdOnEnd)},r.onMouseDownTrack=function(i){var o;if(!(i.button!==0||(0,oe.isIOS)()))if(i.persist(),i.preventDefault(),r.addMouseEvents(i.nativeEvent),r.props.values.length>1&&r.props.draggableTrack){if(r.thumbRefs.some(function(l){var s;return(s=l.current)===null||s===void 0?void 0:s.contains(i.target)}))return;r.setState({draggedTrackPos:[i.clientX,i.clientY]},function(){return r.onMove(i.clientX,i.clientY)})}else{var a=(0,oe.getClosestThumbIndex)(r.thumbRefs.map(function(l){return l.current}),i.clientX,i.clientY,r.props.direction);(o=r.thumbRefs[a].current)===null||o===void 0||o.focus(),r.setState({draggedThumbIndex:a},function(){return r.onMove(i.clientX,i.clientY)})}},r.onResize=function(){(0,oe.translateThumbs)(r.getThumbs(),r.getOffsets(),r.props.rtl),r.calculateMarkOffsets()},r.onTouchStartTrack=function(i){var o;if(i.persist(),r.addTouchEvents(i.nativeEvent),r.props.values.length>1&&r.props.draggableTrack){if(r.thumbRefs.some(function(l){var s;return(s=l.current)===null||s===void 0?void 0:s.contains(i.target)}))return;r.setState({draggedTrackPos:[i.touches[0].clientX,i.touches[0].clientY]},function(){return r.onMove(i.touches[0].clientX,i.touches[0].clientY)})}else{var a=(0,oe.getClosestThumbIndex)(r.thumbRefs.map(function(l){return l.current}),i.touches[0].clientX,i.touches[0].clientY,r.props.direction);(o=r.thumbRefs[a].current)===null||o===void 0||o.focus(),r.setState({draggedThumbIndex:a},function(){return r.onMove(i.touches[0].clientX,i.touches[0].clientY)})}},r.onMouseOrTouchStart=function(i){if(!r.props.disabled){var o=(0,oe.isTouchEvent)(i);if(!(!o&&i.button!==0)){var a=r.getTargetIndex(i);a!==-1&&(o?r.addTouchEvents(i):r.addMouseEvents(i),r.setState({draggedThumbIndex:a,thumbZIndexes:r.state.thumbZIndexes.map(function(l,s){return s===a?Math.max.apply(Math,r.state.thumbZIndexes):l<=r.state.thumbZIndexes[a]?l:l-1})}))}}},r.onMouseMove=function(i){i.preventDefault(),r.onMove(i.clientX,i.clientY)},r.onTouchMove=function(i){i.preventDefault(),r.onMove(i.touches[0].clientX,i.touches[0].clientY)},r.onKeyDown=function(i){var o=r.props,a=o.values,l=o.onChange,s=o.step,u=o.rtl,d=o.direction,c=r.state.isChanged,y=r.getTargetIndex(i.nativeEvent),p=u||d===Re.Direction.Left||d===Re.Direction.Down?-1:1;y!==-1&&(yD.includes(i.key)?(i.preventDefault(),r.setState({draggedThumbIndex:y,isChanged:!0}),l((0,oe.replaceAt)(a,y,r.normalizeValue(a[y]+p*(i.key==="PageUp"?s*10:s),y)))):xD.includes(i.key)?(i.preventDefault(),r.setState({draggedThumbIndex:y,isChanged:!0}),l((0,oe.replaceAt)(a,y,r.normalizeValue(a[y]-p*(i.key==="PageDown"?s*10:s),y)))):i.key==="Tab"?r.setState({draggedThumbIndex:-1},function(){c&&r.fireOnFinalChange()}):c&&r.fireOnFinalChange())},r.onKeyUp=function(i){var o=r.state.isChanged;r.setState({draggedThumbIndex:-1},function(){o&&r.fireOnFinalChange()})},r.onMove=function(i,o){var a=r.state,l=a.draggedThumbIndex,s=a.draggedTrackPos,u=r.props,d=u.direction,c=u.min,y=u.max,p=u.onChange,m=u.values,g=u.step,w=u.rtl;if(l===-1&&s[0]===-1&&s[1]===-1)return null;var h=r.trackRef.current;if(!h)return null;var v=h.getBoundingClientRect(),x=(0,oe.isVertical)(d)?v.height:v.width;if(s[0]!==-1&&s[1]!==-1){var S=i-s[0],C=o-s[1],T=0;switch(d){case Re.Direction.Right:case Re.Direction.Left:T=S/x*(y-c);break;case Re.Direction.Down:case Re.Direction.Up:T=C/x*(y-c);break;default:(0,oe.assertUnreachable)(d)}if(w&&(T*=-1),Math.abs(T)>=g/2){for(var k=0;k<r.thumbRefs.length;k++){if(m[k]===y&&Math.sign(T)===1||m[k]===c&&Math.sign(T)===-1)return;var _=m[k]+T;_>y?T=y-m[k]:_<c&&(T=c-m[k])}for(var M=m.slice(0),k=0;k<r.thumbRefs.length;k++)M=(0,oe.replaceAt)(M,k,r.normalizeValue(m[k]+T,k));r.setState({draggedTrackPos:[i,o]}),p(M)}}else{var $=0;switch(d){case Re.Direction.Right:$=(i-v.left)/x*(y-c)+c;break;case Re.Direction.Left:$=(x-(i-v.left))/x*(y-c)+c;break;case Re.Direction.Down:$=(o-v.top)/x*(y-c)+c;break;case Re.Direction.Up:$=(x-(o-v.top))/x*(y-c)+c;break;default:(0,oe.assertUnreachable)(d)}w&&($=y+c-$),Math.abs(m[l]-$)>=g/2&&p((0,oe.replaceAt)(m,l,r.normalizeValue($,l)))}},r.normalizeValue=function(i,o){var a=r.props,l=a.min,s=a.max,u=a.step,d=a.allowOverlap,c=a.values;return(0,oe.normalizeValue)(i,o,l,s,u,d,c)},r.onEnd=function(i){if(i.preventDefault(),document.removeEventListener("mousemove",r.schdOnMouseMove),document.removeEventListener("touchmove",r.schdOnTouchMove),document.removeEventListener("mouseup",r.schdOnEnd),document.removeEventListener("touchend",r.schdOnEnd),document.removeEventListener("touchcancel",r.schdOnEnd),r.state.draggedThumbIndex===-1&&r.state.draggedTrackPos[0]===-1&&r.state.draggedTrackPos[1]===-1)return null;r.setState({draggedThumbIndex:-1,draggedTrackPos:[-1,-1]},function(){r.fireOnFinalChange()})},r.fireOnFinalChange=function(){r.setState({isChanged:!1});var i=r.props,o=i.onFinalChange,a=i.values;o&&o(a)},r.updateMarkRefs=function(i){if(!i.renderMark){r.numOfMarks=void 0,r.markRefs=void 0;return}r.numOfMarks=(i.max-i.min)/r.props.step,r.markRefs=[];for(var o=0;o<r.numOfMarks+1;o++)r.markRefs[o]=Es.createRef()},r.calculateMarkOffsets=function(){if(!(!r.props.renderMark||!r.trackRef||!r.numOfMarks||!r.markRefs||r.trackRef.current===null)){for(var i=window.getComputedStyle(r.trackRef.current),o=parseInt(i.width,10),a=parseInt(i.height,10),l=parseInt(i.paddingLeft,10),s=parseInt(i.paddingTop,10),u=[],d=0;d<r.numOfMarks+1;d++){var c=9999,y=9999;if(r.markRefs[d].current){var p=r.markRefs[d].current.getBoundingClientRect();c=p.height,y=p.width}r.props.direction===Re.Direction.Left||r.props.direction===Re.Direction.Right?u.push([Math.round(o/r.numOfMarks*d+l-y/2),-Math.round((c-a)/2)]):u.push([Math.round(a/r.numOfMarks*d+s-c/2),-Math.round((y-o)/2)])}r.setState({markOffsets:u})}},n.step===0)throw new Error('"step" property should be a positive number');return r.schdOnMouseMove=(0,oe.schd)(r.onMouseMove),r.schdOnTouchMove=(0,oe.schd)(r.onTouchMove),r.schdOnEnd=(0,oe.schd)(r.onEnd),r.thumbRefs=n.values.map(function(){return Es.createRef()}),r.updateMarkRefs(n),r}return t.prototype.componentDidMount=function(){var n=this,r=this.props,i=r.values,o=r.min,a=r.step;this.resizeObserver=window.ResizeObserver?new window.ResizeObserver(this.onResize):{observe:function(){return window.addEventListener("resize",n.onResize)},unobserve:function(){return window.removeEventListener("resize",n.onResize)}},document.addEventListener("touchstart",this.onMouseOrTouchStart,{passive:!1}),document.addEventListener("mousedown",this.onMouseOrTouchStart,{passive:!1}),!this.props.allowOverlap&&(0,oe.checkInitialOverlap)(this.props.values),this.props.values.forEach(function(l){return(0,oe.checkBoundaries)(l,n.props.min,n.props.max)}),this.resizeObserver.observe(this.trackRef.current),(0,oe.translateThumbs)(this.getThumbs(),this.getOffsets(),this.props.rtl),this.calculateMarkOffsets(),i.forEach(function(l){(0,oe.isStepDivisible)(o,l,a)||console.warn("The `values` property is in conflict with the current `step`, `min`, and `max` properties. Please provide values that are accessible using the min, max, and step values.")})},t.prototype.componentDidUpdate=function(n,r){var i=this.props,o=i.max,a=i.min,l=i.step,s=i.values,u=i.rtl;(n.max!==o||n.min!==a||n.step!==l)&&this.updateMarkRefs(this.props),(0,oe.translateThumbs)(this.getThumbs(),this.getOffsets(),u),(n.max!==o||n.min!==a||n.step!==l||r.markOffsets.length!==this.state.markOffsets.length)&&(this.calculateMarkOffsets(),s.forEach(function(d){(0,oe.isStepDivisible)(a,d,l)||console.warn("The `values` property is in conflict with the current `step`, `min`, and `max` properties. Please provide values that are accessible using the min, max, and step values.")}))},t.prototype.componentWillUnmount=function(){var n={passive:!1};document.removeEventListener("mousedown",this.onMouseOrTouchStart,n),document.removeEventListener("mousemove",this.schdOnMouseMove),document.removeEventListener("touchmove",this.schdOnTouchMove),document.removeEventListener("touchstart",this.onMouseOrTouchStart),document.removeEventListener("mouseup",this.schdOnEnd),document.removeEventListener("touchend",this.schdOnEnd),this.resizeObserver.unobserve(this.trackRef.current)},t.prototype.render=function(){var n=this,r=this.props,i=r.label,o=r.labelledBy,a=r.renderTrack,l=r.renderThumb,s=r.renderMark,u=s===void 0?function(){return null}:s,d=r.values,c=r.min,y=r.max,p=r.allowOverlap,m=r.disabled,g=this.state,w=g.draggedThumbIndex,h=g.thumbZIndexes,v=g.markOffsets;return a({props:{style:{transform:"scale(1)",cursor:w>-1?"grabbing":this.props.draggableTrack?(0,oe.isVertical)(this.props.direction)?"ns-resize":"ew-resize":d.length===1&&!m?"pointer":"inherit"},onMouseDown:m?oe.voidFn:this.onMouseDownTrack,onTouchStart:m?oe.voidFn:this.onTouchStartTrack,ref:this.trackRef},isDragged:this.state.draggedThumbIndex>-1,disabled:m,children:Ov(Ov([],v.map(function(x,S,C){return u({props:{style:n.props.direction===Re.Direction.Left||n.props.direction===Re.Direction.Right?{position:"absolute",left:"".concat(x[0],"px"),marginTop:"".concat(x[1],"px")}:{position:"absolute",top:"".concat(x[0],"px"),marginLeft:"".concat(x[1],"px")},key:"mark".concat(S),ref:n.markRefs[S]},index:S})}),!0),d.map(function(x,S){var C=n.state.draggedThumbIndex===S;return l({index:S,value:x,isDragged:C,props:{style:{position:"absolute",zIndex:h[S],cursor:m?"inherit":C?"grabbing":"grab",userSelect:"none",touchAction:"none",WebkitUserSelect:"none",MozUserSelect:"none",msUserSelect:"none"},key:S,tabIndex:m?void 0:0,"aria-valuemax":p?y:d[S+1]||y,"aria-valuemin":p?c:d[S-1]||c,"aria-valuenow":x,draggable:!1,ref:n.thumbRefs[S],"aria-label":i,"aria-labelledby":o,role:"slider",onKeyDown:m?oe.voidFn:n.onKeyDown,onKeyUp:m?oe.voidFn:n.onKeyUp}})}),!0)})},t.defaultProps={label:"Accessibility label",labelledBy:null,step:1,direction:Re.Direction.Right,rtl:!1,disabled:!1,allowOverlap:!1,draggableTrack:!1,min:0,max:100},t}(Es.Component);Em.default=bD;(function(e){var t=te&&te.__importDefault||function(o){return o&&o.__esModule?o:{default:o}};Object.defineProperty(e,"__esModule",{value:!0}),e.checkValuesAgainstBoundaries=e.relativeValue=e.useThumbOverlap=e.Direction=e.getTrackBackground=e.Range=void 0;var n=t(Em);e.Range=n.default;var r=km;Object.defineProperty(e,"getTrackBackground",{enumerable:!0,get:function(){return r.getTrackBackground}}),Object.defineProperty(e,"useThumbOverlap",{enumerable:!0,get:function(){return r.useThumbOverlap}}),Object.defineProperty(e,"relativeValue",{enumerable:!0,get:function(){return r.relativeValue}}),Object.defineProperty(e,"checkValuesAgainstBoundaries",{enumerable:!0,get:function(){return r.checkValuesAgainstBoundaries}});var i=yo;Object.defineProperty(e,"Direction",{enumerable:!0,get:function(){return i.Direction}})})(Mp);const wD=E.div`
  padding: 20px 0;
`,SD=E.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`,jv=E.input`
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
`;const _D=E.div`
  height: 6px;
  width: 100%;
  border-radius: 4px;
  background: ${({background:e})=>e};
`,CD=E.div`
  height: 18px;
  width: 18px;
  border-radius: 50%;
  background: #583d2d;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`,i2=({childValues:e,onChange:t})=>{const o=(e==null?void 0:e[0])??10,a=(e==null?void 0:e[1])??1e4,l=o!==a,[s,u]=b.useState([o,a]);b.useEffect(()=>{e&&e.length===2&&(u(e),t&&t(e))},[e,t]);const d=p=>{u(p),t&&t(p)},c=(p,m)=>{const g=m===""?"":Number(m),w=[...s];w[p]=g,d(w)},y=p=>{const m=[...s];p===0?((m[0]===""||m[0]<o)&&(m[0]=o),m[0]>m[1]-50&&(m[0]=m[1]-50)):((m[1]===""||m[1]>a)&&(m[1]=a),m[1]<m[0]+50&&(m[1]=m[0]+50)),d(m)};return f.jsx(f.Fragment,{children:l&&f.jsxs(wD,{children:[f.jsxs(SD,{children:[f.jsx(jv,{type:"number",value:s[0],min:o,max:s[1],onChange:p=>c(0,p.target.value),onBlur:()=>y(0)}),f.jsx(jv,{type:"number",value:s[1],min:s[0],max:a,onChange:p=>c(1,p.target.value),onBlur:()=>y(1)})]}),f.jsx(Mp.Range,{values:s,step:50,min:o,max:a,onChange:d,renderTrack:({props:p,children:m})=>f.jsx(_D,{...p,background:Mp.getTrackBackground({values:s,colors:["#ddd","#85683d","#ddd"],min:o,max:a}),children:m}),renderThumb:({props:p})=>f.jsx(CD,{...p})})]})})},ED=({childValues:e,category:t,selectedFilters:n,setSelectedFilters:r,setPriceRange:i})=>{const[o,a]=b.useState([]),[l,s]=b.useState({});b.useEffect(()=>{t&&(async()=>{try{const m=await fetch(`https://backenddidiv-production.up.railway.app/api/products?populate=*&filters[category][title][$eq]=${encodeURIComponent(t)}&pagination[pageSize]=200`);console.log(t);const g=await m.json();console.log("dataaaa",g.data);const w=g.data||[],h={};w.forEach(x=>{var S;(S=x.attributes)==null||S.forEach(C=>{h[C.label]||(h[C.label]=new Set),h[C.label].add(C.value)})});const v=Object.entries(h).map(([x,S])=>({type:"checkbox",label:x,name:x.toLowerCase(),options:Array.from(S)}));console.log("fillltr",v),a(v)}catch(m){console.error(m)}})()},[t]);const u=p=>{s(m=>({...m,[p]:!m[p]}))},d=(p,m)=>{r(g=>{const w=g[p]||[];return w.includes(m)?{...g,[p]:w.filter(h=>h!==m)}:{...g,[p]:[...w,m]}})},c=Object.values(n).some(p=>Array.isArray(p)&&p.length>0),y=()=>{c&&r({})};return console.log(c),f.jsxs(oD,{children:[f.jsxs(aD,{children:["Фільтри ",f.jsx(Vb,{size:20})]}),(o||[]).map(p=>{var g;const m=!!l[p.name];return f.jsxs(sD,{children:[f.jsxs(lD,{onClick:()=>u(p.name),children:[f.jsx(uD,{children:p.label}),f.jsx(cD,{isOpen:m})]}),f.jsxs(dD,{isOpen:m,children:[p.type==="checkbox"&&((g=p.options)==null?void 0:g.map(w=>{var h;return f.jsxs(fD,{children:[f.jsx(jp,{checked:((h=n[p.name])==null?void 0:h.includes(w))||!1,onChange:()=>d(p.name,w)}),f.jsx(pD,{}),w]},w)})),p.type==="range"&&f.jsx(i2,{onChange:i,childValues:e})]})]},p.name)}),f.jsx(r2,{onClick:y,disabled:!c,children:"Скинути обрані фільтри"})]})},kD=E.aside`
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
`;const PD=E.div`
  border-bottom: 1px solid #eee;
  padding: 12px;
  margin-bottom: 12px;

  &:last-child {
    border-bottom: none;
  }
`,TD=E.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  padding: 8px 0;
  
  &:hover p {
    color: #85683d;
  }
`,OD=E.p`
  font-weight: 600;
  font-size: 16px;
  margin: 0;
  color: #222;
  transition: color 0.2s;
`,jD=E.span`
  border: solid #555;
  border-width: 0 2px 2px 0;
  display: inline-block;
  padding: 3px;
  transform: ${e=>e.isOpen?"rotate(-135deg)":"rotate(45deg)"};
  transition: transform 0.3s ease;
`,MD=E.div`
  max-height: ${e=>e.isOpen?"500px":"0"};
  overflow: hidden;
  transition: max-height 0.3s ease-in-out, opacity 0.3s;
  opacity: ${e=>e.isOpen?"1":"0"};
  padding: ${e=>e.isOpen?"12px":"0"};
`,$D=E.label`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  cursor: pointer;
  font-size: 15px;
  color: #444;

  &:hover span:first-of-type {
    border-color: #85683d;
  }
`,$p=E.input.attrs({type:"checkbox"})`
  display: none;
`,ID=E.span`
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
`,DD=({childValues:e,category:t,selectedFilters:n,setSelectedFilters:r,setPriceRange:i})=>{const[o,a]=b.useState({}),[l,s]=b.useState([]);b.useEffect(()=>{t&&(async()=>{try{const y=await fetch(`https://backenddidiv-production.up.railway.app/api/products?populate=*&filters[category][title][$eq]=${encodeURIComponent(t)}&pagination[pageSize]=200`);console.log(t);const p=await y.json();console.log("dataaaa",p.data);const m=p.data||[],g={};m.forEach(h=>{var v;(v=h.attributes)==null||v.forEach(x=>{g[x.label]||(g[x.label]=new Set),g[x.label].add(x.value)})});const w=Object.entries(g).map(([h,v])=>({type:"checkbox",label:h,name:h.toLowerCase(),options:Array.from(v)}));console.log("fillltr",w),s(w)}catch(y){console.error(y)}})()},[t]);const u=c=>{a(y=>({...y,[c]:!y[c]}))},d=(c,y)=>{r(p=>{const m=p[c]||[];return m.includes(y)?{...p,[c]:m.filter(g=>g!==y)}:{...p,[c]:[...m,y]}})};return f.jsx(kD,{children:(l||[]).map(c=>{var p;const y=!!o[c.name];return f.jsxs(PD,{children:[f.jsxs(TD,{onClick:()=>u(c.name),children:[f.jsx(OD,{children:c.label}),f.jsx(jD,{isOpen:y})]}),f.jsxs(MD,{isOpen:y,children:[c.type==="checkbox"&&((p=c.options)==null?void 0:p.map(m=>{var g;return f.jsxs($D,{children:[f.jsx($p,{checked:((g=n[c.name])==null?void 0:g.includes(m))||!1,onChange:()=>d(c.name,m)}),f.jsx(ID,{}),m]},m)})),c.type==="range"&&f.jsx(i2,{onChange:i,childValues:e})]})]},c.name)})})},LD=({setValues:e,category:t,selectedFilters:n={},priceRange:r,sortType:i,setIsSortOpen:o,isSortOpen:a,setSortType:l,sortOrder:s,setSortOrder:u})=>{const[d,c]=b.useState([]),[y,p]=b.useState(!0),[m,g]=b.useState(1),w=24;let h=d;const v=b.useRef(null);b.useEffect(()=>{const j=F=>{v.current&&!v.current.contains(F.target)&&o(!1)};return document.addEventListener("mousedown",j),()=>{document.removeEventListener("mousedown",j)}},[o]),b.useEffect(()=>{(async()=>{try{p(!0);const R=await(await fetch(`https://backenddidiv-production.up.railway.app/api/products?populate=*&filters[category][title][$eq]=${encodeURIComponent(t)}&pagination[pageSize]=500`)).json();c(R.data);const L=R.data.map(O=>O.price);if(L.length>0){let O=Math.min(...L),P=Math.max(...L);e([O,P])}}catch(F){console.error("Error fetching products:",F)}finally{p(!1)}})()},[t,e]),b.useEffect(()=>{g(1)},[t,n,r]),b.useEffect(()=>{window.scrollTo({top:0,behavior:"smooth"})},[m]);const x=On(),S=jn(),C=Ye(j=>j.favorites.items),T=Ye(j=>j.cart.items),k=(j,F)=>{F.stopPropagation();const R=C.some(L=>L.id===j.id);S(ai(j)),R?q.warning(`${j.name} видалено з обраного`):q.info(`${j.name} додано в обране`)};if(Object.keys(n).forEach(j=>{const F=n[j];Array.isArray(F)&&F.length>0&&(h=h.filter(R=>{var O;const L=(O=R.attributes)==null?void 0:O.find(P=>P.label.toLowerCase()===j.toLowerCase());return L&&F.includes(L.value)}))}),r&&r.length===2){const[j,F]=r;console.log(j,F)}const _=b.useMemo(()=>{const j=[...h],F=R=>R.new_price&&R.new_price<R.price?R.new_price:R.price;switch(i){case"name":return j.sort((R,L)=>s==="asc"?R.name.localeCompare(L.name):L.name.localeCompare(R.name));case"price":return j.sort((R,L)=>{const O=F(R),P=F(L);return s==="asc"?O-P:P-O});case"date":return j.sort((R,L)=>s==="asc"?new Date(R.createdAt)-new Date(L.createdAt):new Date(L.createdAt)-new Date(R.createdAt));default:return j}},[i,h,s]),M=m*w,$=M-w,D=_.slice($,M),A=Math.ceil(h.length/w);return y?f.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"100vw",height:"100vh"},children:f.jsx(qa,{height:100,width:100,radius:5,color:"var(--orange-color)",ariaLabel:"ball-triangle-loading",wrapperStyle:{},wrapperClass:"",visible:!0})}):(console.log(D),console.log("filteredProducts.length:",h.length),console.log("currentProducts.length:",D.length),f.jsxs(Pj,{children:[f.jsxs(Tj,{children:[f.jsx(Oj,{children:t}),f.jsxs(Rj,{ref:v,children:[f.jsxs(Fj,{onClick:()=>o(j=>!j),children:["Сортування",f.jsx(Mu,{strokeWidth:.9,size:22})]}),a&&f.jsxs(zj,{children:[f.jsx(pi,{onClick:()=>{l("name"),u("asc"),o(!1)},children:"А-Я"}),f.jsx(pi,{onClick:()=>{l("name"),u("desc"),o(!1)},children:"Я-А"}),f.jsx(pi,{onClick:()=>{l("price"),u("asc"),o(!1)},children:"Ціна ↑"}),f.jsx(pi,{onClick:()=>{l("price"),u("desc"),o(!1)},children:"Ціна ↓"}),f.jsx(pi,{onClick:()=>{l("date"),u("desc"),o(!1)},children:"Спочатку новіші"}),f.jsx(pi,{onClick:()=>{l("date"),u("asc"),o(!1)},children:"Спочатку старіші"})]})]})]}),f.jsx(Or,{autoClose:1500}),h.length===0?f.jsx(jj,{children:f.jsx("p",{style:{textAlign:"center",fontSize:"30px",marginTop:"50px",marginLeft:"auto",marginRight:"auto"},children:"Нічого не знайдено 😢"})}):f.jsx(Mj,{children:D.map(j=>{var U,G;const F=C.some(H=>H.id===j.id),R=T.find(H=>H.id===j.id),O=(R?R.quantity:0)>=(j.stock||0),P=(j==null?void 0:j.available)??!0,I=j.new_price&&j.new_price<j.price,z=I?j.new_price:j.price,B=I?Math.round((j.price-j.new_price)/j.price*100):0,N=(H,X)=>{if(X.stopPropagation(),O){q.error("Товар уже у кошику");return}S(ho({...H,quantity:1})),q.success(`${H.name} додано в кошик!`)};return f.jsxs($j,{onClick:()=>x(`/product/${j.id}`),style:{cursor:"pointer"},children:[!P&&f.jsx(sm,{children:"Заброньовано"}),f.jsx(Ij,{src:((G=(U=j.images)==null?void 0:U[0])==null?void 0:G.url)||"/placeholder.jpg",alt:j.name,onError:H=>{H.currentTarget.onerror=null,H.currentTarget.src=no}}),f.jsx(Lj,{children:j.name}),f.jsxs(Dj,{children:[f.jsx(hw,{children:f.jsxs(mw,{children:[f.jsxs(gw,{$discount:I,children:[z.toLocaleString()," грн"]}),I&&f.jsxs(vw,{children:[j.price.toLocaleString()," грн"]}),I&&f.jsxs(yw,{children:["-",B,"%"]})]})}),f.jsxs(pw,{children:[P&&f.jsx(Wl,{onClick:H=>N(j,H),children:f.jsx(po,{size:24,color:R?"var(--orange-color)":"black",strokeWidth:2})}),f.jsx(Wl,{onClick:H=>k(j,H),children:f.jsx(Ua,{size:24,fill:F?"#ff4d4f":"none",color:F?"#ff4d4f":"#000000",strokeWidth:F?1:2})})]})]})]},j.id)})}),h.length>w&&f.jsxs(Aj,{children:[f.jsx(xd,{onClick:()=>g(j=>Math.max(j-1,1)),disabled:m===1,children:"Назад"}),Array.from({length:A},(j,F)=>f.jsx(xd,{onClick:()=>g(F+1),active:m===F+1,children:F+1},F)),f.jsx(xd,{onClick:()=>g(j=>Math.min(j+1,A)),disabled:m===A,children:"Вперед"})]})]}))},AD=()=>{const[e,t]=b.useState({});console.log(e);const{category:n}=ay(),[r,i]=b.useState(!1),[o,a]=b.useState(!1),[l,s]=b.useState("date"),[u,d]=b.useState("desc"),[c,y]=b.useState([]),[p,m]=b.useState([0,0]);console.log(c),console.log(n);const g=Object.values(e).some(h=>Array.isArray(h)&&h.length>0),w=()=>{g&&t({})};return f.jsxs(YI,{children:[f.jsxs(GI,{children:[f.jsxs(qI,{children:[f.jsxs(XI,{onClick:()=>i(!0),children:["Фільтр",f.jsx(KI,{children:f.jsx("use",{href:`${cn}#icon-filter`})})]}),f.jsxs(rD,{children:[f.jsxs(QI,{onClick:()=>a(h=>!h),children:["Сортування",f.jsx(Mu,{strokeWidth:.9,size:22})]}),o&&f.jsxs(iD,{children:[f.jsx(mi,{onClick:()=>{s("name"),d("asc"),a(!1)},children:"А-Я"}),f.jsx(mi,{onClick:()=>{s("name"),d("desc"),a(!1)},children:"Я-А"}),f.jsx(mi,{onClick:()=>{s("price"),d("asc"),a(!1)},children:"Ціна ↑"}),f.jsx(mi,{onClick:()=>{s("price"),d("desc"),a(!1)},children:"Ціна ↓"}),f.jsx(mi,{onClick:()=>{s("date"),d("desc"),a(!1)},children:"Спочатку новіші"}),f.jsx(mi,{onClick:()=>{s("date"),d("asc"),a(!1)},children:"Спочатку старіші"})]})]})]}),f.jsx(ED,{category:n,selectedFilters:e,setSelectedFilters:t,childValues:c,priceRange:p,setPriceRange:m}),f.jsx(LD,{priceRange:p,values:c,setValues:y,category:n,selectedFilters:e,sortType:l,setIsSortOpen:a,isSortOpen:o,setSortType:s,sortOrder:u,setSortOrder:d}),r&&f.jsx(ZI,{onClick:()=>i(!1),open:r,children:f.jsxs(JI,{onClick:h=>h.stopPropagation(),open:r,children:[f.jsxs(eD,{children:[f.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[f.jsx(Vb,{size:20}),f.jsx("h2",{children:"Фільтри"})]}),f.jsx(Hb,{size:24,onClick:()=>i(!1),style:{cursor:"pointer"}})]}),f.jsx(DD,{childValues:c,category:n,selectedFilters:e,setSelectedFilters:t,priceRange:p,setPriceRange:m}),f.jsxs(tD,{children:[f.jsx(r2,{onClick:w,disabled:!g,children:"Скинути обрані фільтри"}),f.jsx(nD,{onClick:()=>i(!1),children:"Показати результати"})]})]})})]})," "]})},Mv=E.div`
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
`,RD=E.div`
  font-family: var(--main-font);
  font-size: 14px;
  color: #8c8c8c;
  margin-bottom: 15px;

  a {
    text-decoration: none;
    color: inherit;
  }
`,FD=E.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,zD=E.div``;E.div`
  position: absolute;
  top: 10px;
  left: 10px;
  background: #27ae60;
  color: white;
  padding: 5px 15px;
  font-weight: bold;
  z-index: 2;
`;const ND=E.img`
  width: 100%;
  border-radius: 4px;
  background: #f9f9f9;
   @media screen and (max-width: 300px) {
   width: 260px;
  }
`,BD=E.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
      flex-wrap: wrap;
`,VD=E.img`
  width: 60px;
  height: 60px;
  border: 1px solid #ddd;
  cursor: pointer;
  object-fit: cover;
`,UD=E.div``,HD=E.h1`
  font-size: 28px;
  margin-bottom: 10px;
  color: #333;
  font-family: var(--second-font);
  font-weight: 500;
`,WD=E.div`

  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 20px;
`,GD=E.div`
  display: flex;
  align-items: center;
  gap: 15px;
    font-size: 17px;
  margin-bottom: 20px;
`,YD=E.span`
  color: #27ae60;
  font-size: 17px;
`,qD=E.div`
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
`,$v=E.span`
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
`;const Iv=E.div`
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
`,Dv=E.div`
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
`;const nL=E.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  align-items: start;

  @media (max-width: 767px) {
    display: block;
  }
`,Lv=E.div`
  font-family: var(--second-font);
  font-weight: 500;
  margin-top: 20px;
`,Av=E.div`
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
`,Rv=E.div`
  font-family: var(--second-font);
  font-weight: 500;
  padding: 15px;
  background: #fff;
`,Fv=E.p`
  font-size: 20px;
  font-family: var(--second-font);
  font-weight: 300;
`,rL=E.button`
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
`,iL=E.svg`
  width: 20px;
  height: 20px;

  fill: ${({$active:e})=>e?"white":" var(--black-color)"};
`,o2=E.span`

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
`,oL=E.div`
  position: relative;
  display: inline-block;

  &:hover ${o2} {
  opacity: ${({$active:e})=>e?1:0};
    transform: translateX(-50%) translateY(0);
  }
`,a2="carousel",s2="controller",aL="navigation",sL="no-scroll",Pm="portal",lL="root",l2="toolbar",zv="zoom",Ad="loading",Rd="error",Fd="complete",uL="placeholder",cL=e=>`active-slide-${e}`,dL="fullsize",Tm="flex_center",fL="no_scroll",u2="no_scroll_padding",Om="slide",c2="slide_wrapper",pL="slide_wrapper_interactive",Fr="prev",zr="next",Nv="swipe",io="close",d2="onPointerDown",f2="onPointerMove",p2="onPointerUp",h2="onPointerLeave",m2="onPointerCancel",jm="onKeyDown",hL="onKeyUp",Mm="onWheel",mL="Escape",gL="ArrowLeft",vL="ArrowRight",yL="button",Ip="icon",g2="contain",Bv="cover",v2="Unknown action type",y2="yarl__";function Pn(...e){return e.filter(Boolean).join(" ")}function ae(e){return`${y2}${e}`}function bt(e){return`--${y2}${e}`}function Qa(e,t){return`${e}${t?`_${t}`:""}`}function $m(e){return t=>Qa(e,t)}function oo(e,t){var n;return(n=e==null?void 0:e[t])!==null&&n!==void 0?n:t}function xL(e,t,n){return oo(e,"{index} of {total}").replace(/\{index}/g,`${Rm(n,t.length)+1}`).replace(/\{total}/g,`${t.length}`)}function Im(...e){return()=>{e.forEach(t=>{t()})}}function Jn(e,t,n){return()=>{const r=b.useContext(n);if(!r)throw new Error(`${e} must be used within a ${t}.Provider`);return r}}function Dm(){return typeof window<"u"}function Lm(e,t=0){const n=10**t;return Math.round((e+Number.EPSILON)*n)/n}function xo(e){return e.type===void 0||e.type==="image"}function Am(e,t){return e.imageFit===Bv||e.imageFit!==g2&&t===Bv}function gc(e){return typeof e=="string"?Number.parseInt(e,10):e}function Zl(e){if(typeof e=="number")return{pixel:e};if(typeof e=="string"){const t=gc(e);return e.endsWith("%")?{percent:t}:{pixel:t}}return{pixel:0}}function bL(e,t){const n=Zl(t),r=n.percent!==void 0?e.width/100*n.percent:n.pixel;return{width:Math.max(e.width-2*r,0),height:Math.max(e.height-2*r,0)}}function wL(){return(Dm()?window==null?void 0:window.devicePixelRatio:void 0)||1}function Rm(e,t){return t>0?(e%t+t)%t:0}function x2(e){return e.length>0}function b2(e,t){return e[Rm(t,e.length)]}function Dp(e,t){return x2(e)?b2(e,t):void 0}function SL(e){return xo(e)?e.src:void 0}function _L(e,t,n){if(!n)return e;const{buttons:r,...i}=e,o=r.findIndex(l=>l===t),a=b.isValidElement(n)?b.cloneElement(n,{key:t},null):n;if(o>=0){const l=[...r];return l.splice(o,1,a),{buttons:l,...i}}return{buttons:[a,...r],...i}}function CL(e,t,n=0){return Math.min(e.preload,Math.max(e.finite?t.length-1:Math.floor(t.length/2),n))}const EL=Number(b.version.split(".")[0])>=19;function kL(e){return{inert:EL?e:e?"":void 0}}function PL(e){e.scrollTop}const Lp={open:!1,close:()=>{},index:0,slides:[],render:{},plugins:[],toolbar:{buttons:[io]},labels:{},animation:{fade:250,swipe:500,easing:{fade:"ease",swipe:"ease-out",navigation:"ease-in-out"}},carousel:{finite:!1,preload:2,padding:"16px",spacing:"30%",imageFit:g2,imageProps:{}},controller:{ref:null,focus:!0,aria:!1,touchAction:"none",closeOnPullUp:!1,closeOnPullDown:!1,closeOnBackdropClick:!1,preventDefaultWheelX:!0,preventDefaultWheelY:!1,disableSwipeNavigation:!1},portal:{},noScroll:{disabled:!1},on:{},styles:{},className:""};function jr(e,t){return{name:e,component:t}}function Ue(e,t){return{module:e,children:t}}function w2(e,t,n){return e.module.name===t?n(e):e.children?[Ue(e.module,e.children.flatMap(r=>{var i;return(i=w2(r,t,n))!==null&&i!==void 0?i:[]}))]:[e]}function gi(e,t,n){return e.flatMap(r=>{var i;return(i=w2(r,t,n))!==null&&i!==void 0?i:[]})}function TL(e,t=[],n=[]){let r=e;const i=p=>{const m=[...r];for(;m.length>0;){const g=m.pop();if((g==null?void 0:g.module.name)===p)return!0;g!=null&&g.children&&m.push(...g.children)}return!1},o=(p,m)=>{if(p===""){r=[Ue(m,r)];return}r=gi(r,p,g=>[Ue(m,[g])])},a=(p,m)=>{r=gi(r,p,g=>[Ue(g.module,[Ue(m,g.children)])])},l=(p,m,g)=>{r=gi(r,p,w=>{var h;return[Ue(w.module,[...g?[Ue(m)]:[],...(h=w.children)!==null&&h!==void 0?h:[],...g?[]:[Ue(m)]])]})},s=(p,m,g)=>{r=gi(r,p,w=>[...g?[Ue(m)]:[],w,...g?[]:[Ue(m)]])},u=p=>{a(s2,p)},d=(p,m)=>{r=gi(r,p,g=>[Ue(m,g.children)])},c=p=>{r=gi(r,p,m=>m.children)},y=p=>{n.push(p)};return t.forEach(p=>{p({contains:i,addParent:o,append:a,addChild:l,addSibling:s,addModule:u,replace:d,remove:c,augment:y})}),{config:r,augmentation:p=>n.reduce((m,g)=>g(m),p)}}const S2=b.createContext(null),_2=Jn("useA11yContext","A11yContext",S2);function OL({children:e}){const[t,n]=b.useState(!1),[r,i]=b.useState(!1),o=b.useMemo(()=>({focusWithin:t,trackFocusWithin:(l,s)=>{const u=d=>c=>{var y;c.currentTarget.contains(c.relatedTarget)||n(d),(y=d?l:s)===null||y===void 0||y(c)};return{onFocus:u(!0),onBlur:u(!1)}},autoPlaying:r,setAutoPlaying:i}),[t,r]);return b.createElement(S2.Provider,{value:o},e)}const C2=b.createContext(null),vc=Jn("useDocument","DocumentContext",C2);function jL({nodeRef:e,children:t}){const n=b.useMemo(()=>{const r=o=>{var a;return((a=o||e.current)===null||a===void 0?void 0:a.ownerDocument)||document};return{getOwnerDocument:r,getOwnerWindow:o=>{var a;return((a=r(o))===null||a===void 0?void 0:a.defaultView)||window}}},[e]);return b.createElement(C2.Provider,{value:n},t)}const E2=b.createContext(null),yc=Jn("useEvents","EventsContext",E2);function ML({children:e}){const[t]=b.useState({});b.useEffect(()=>()=>{Object.keys(t).forEach(r=>delete t[r])},[t]);const n=b.useMemo(()=>{const r=(a,l)=>{var s;(s=t[a])===null||s===void 0||s.splice(0,t[a].length,...t[a].filter(u=>u!==l))};return{publish:(...[a,l])=>{var s;(s=t[a])===null||s===void 0||s.forEach(u=>u(l))},subscribe:(a,l)=>(t[a]||(t[a]=[]),t[a].push(l),()=>r(a,l)),unsubscribe:r}},[t]);return b.createElement(E2.Provider,{value:n},e)}const k2=b.createContext(null),Kt=Jn("useLightboxProps","LightboxPropsContext",k2);function $L({children:e,...t}){return b.createElement(k2.Provider,{value:t},e)}const P2=b.createContext(null),Mr=Jn("useLightboxState","LightboxStateContext",P2),T2=b.createContext(null),IL=Jn("useLightboxDispatch","LightboxDispatchContext",T2);function DL(e,t){switch(t.type){case"swipe":{const{slides:n}=e,r=(t==null?void 0:t.increment)||0,i=e.globalIndex+r,o=Rm(i,n.length),a=Dp(n,o),l=r||t.duration!==void 0?{increment:r,duration:t.duration,easing:t.easing}:void 0;return{slides:n,currentIndex:o,globalIndex:i,currentSlide:a,animation:l}}case"update":return t.slides!==e.slides||t.index!==e.currentIndex?{slides:t.slides,currentIndex:t.index,globalIndex:t.index,currentSlide:Dp(t.slides,t.index)}:e;default:throw new Error(v2)}}function LL({slides:e,index:t,children:n}){const[r,i]=b.useReducer(DL,{slides:e,currentIndex:t,globalIndex:t,currentSlide:Dp(e,t)}),[o,a]=b.useState(e),[l,s]=b.useState(t);(e!==o||t!==l)&&(a(e),s(t),i({type:"update",slides:e,index:t}));const u=b.useMemo(()=>({...r,state:r,dispatch:i}),[r,i]);return b.createElement(T2.Provider,{value:i},b.createElement(P2.Provider,{value:u},n))}const O2=b.createContext(null),xc=Jn("useTimeouts","TimeoutsContext",O2);function AL({children:e}){const[t]=b.useState([]);b.useEffect(()=>()=>{t.forEach(r=>window.clearTimeout(r)),t.splice(0,t.length)},[t]);const n=b.useMemo(()=>{const r=a=>{t.splice(0,t.length,...t.filter(l=>l!==a))};return{setTimeout:(a,l)=>{const s=window.setTimeout(()=>{r(s),a()},l);return t.push(s),s},clearTimeout:a=>{a!==void 0&&(r(a),window.clearTimeout(a))}}},[t]);return b.createElement(O2.Provider,{value:n},e)}const Fm=b.forwardRef(function({label:t,className:n,icon:r,renderIcon:i,onClick:o,style:a,...l},s){const{styles:u,labels:d}=Kt(),c=oo(d,t);return b.createElement("button",{ref:s,type:"button",title:c,"aria-label":c,className:Pn(ae(yL),n),onClick:o,style:{...a,...u.button},...l},i?i():b.createElement(r,{className:ae(Ip),style:u.icon}))});function RL(e,t){const n=r=>b.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24","aria-hidden":"true",focusable:"false",...r},t);return n.displayName=e,n}function si(e,t){return RL(e,b.createElement("g",{fill:"currentColor"},b.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),t))}const FL=si("Close",b.createElement("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"})),zL=si("Previous",b.createElement("path",{d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"})),NL=si("Next",b.createElement("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"})),BL=si("Loading",b.createElement(b.Fragment,null,Array.from({length:8}).map((e,t,n)=>b.createElement("line",{key:t,x1:"12",y1:"6.5",x2:"12",y2:"1.8",strokeLinecap:"round",strokeWidth:"2.6",stroke:"currentColor",strokeOpacity:1/n.length*(t+1),transform:`rotate(${360/n.length*t}, 12, 12)`})))),VL=si("Error",b.createElement("path",{d:"M21.9,21.9l-8.49-8.49l0,0L3.59,3.59l0,0L2.1,2.1L0.69,3.51L3,5.83V19c0,1.1,0.9,2,2,2h13.17l2.31,2.31L21.9,21.9z M5,18 l3.5-4.5l2.5,3.01L12.17,15l3,3H5z M21,18.17L5.83,3H19c1.1,0,2,0.9,2,2V18.17z"})),Tn=Dm()?b.useLayoutEffect:b.useEffect;function zm(){const[e,t]=b.useState(!1);return b.useEffect(()=>{var n,r;const i=(n=window.matchMedia)===null||n===void 0?void 0:n.call(window,"(prefers-reduced-motion: reduce)");t(i==null?void 0:i.matches);const o=a=>t(a.matches);return(r=i==null?void 0:i.addEventListener)===null||r===void 0||r.call(i,"change",o),()=>{var a;return(a=i==null?void 0:i.removeEventListener)===null||a===void 0?void 0:a.call(i,"change",o)}},[]),e}function UL(e){let t=0,n=0,r=0;const o=window.getComputedStyle(e).transform.match(/matrix.*\((.+)\)/);if(o){const a=o[1].split(",").map(gc);a.length===6?(t=a[4],n=a[5]):a.length===16&&(t=a[12],n=a[13],r=a[14])}return{x:t,y:n,z:r}}function Vv(e,t){const n=b.useRef(void 0),r=b.useRef(void 0),i=zm();return Tn(()=>{var o,a,l;if(e.current&&n.current!==void 0&&!i){const{keyframes:s,duration:u,easing:d,onfinish:c}=t(n.current,e.current.getBoundingClientRect(),UL(e.current))||{};if(s&&u){(o=r.current)===null||o===void 0||o.cancel(),r.current=void 0;try{r.current=(l=(a=e.current).animate)===null||l===void 0?void 0:l.call(a,s,{duration:u,easing:d})}catch(y){console.error(y)}r.current&&(r.current.onfinish=()=>{r.current=void 0,c==null||c()})}}n.current=void 0}),{prepareAnimation:o=>{n.current=o},isAnimationPlaying:()=>{var o;return((o=r.current)===null||o===void 0?void 0:o.playState)==="running"}}}function j2(){const e=b.useRef(null),t=b.useRef(void 0),[n,r]=b.useState();return{setContainerRef:b.useCallback(o=>{e.current=o,t.current&&(t.current.disconnect(),t.current=void 0);const a=()=>{if(o){const l=window.getComputedStyle(o),s=u=>parseFloat(u)||0;r({width:Math.round(o.clientWidth-s(l.paddingLeft)-s(l.paddingRight)),height:Math.round(o.clientHeight-s(l.paddingTop)-s(l.paddingBottom))})}else r(void 0)};a(),o&&typeof ResizeObserver<"u"&&(t.current=new ResizeObserver(a),t.current.observe(o))},[]),containerRef:e,containerRect:n}}function nl(){const e=b.useRef(void 0),{setTimeout:t,clearTimeout:n}=xc();return b.useCallback((r,i)=>{n(e.current),e.current=t(r,i>0?i:0)},[t,n])}function pe(e){const t=b.useRef(e);return Tn(()=>{t.current=e}),b.useCallback((...n)=>{var r;return(r=t.current)===null||r===void 0?void 0:r.call(t,...n)},[])}function Uv(e,t){typeof e=="function"?e(t):e&&(e.current=t)}function Ap(e,t){return b.useMemo(()=>e==null&&t==null?null:n=>{Uv(e,n),Uv(t,n)},[e,t])}function HL(e,t=!1){const n=b.useRef(!1);Tn(()=>{t&&n.current&&(n.current=!1,e())},[t,e]);const r=b.useCallback(()=>{n.current=!0},[]),i=b.useCallback(()=>{n.current=!1},[]);return{onFocus:r,onBlur:i}}function Nm(){const[e,t]=b.useState(!1);return Tn(()=>{t(window.getComputedStyle(window.document.documentElement).direction==="rtl")},[]),e}function WL(){const[e]=b.useState({}),t=b.useCallback((i,o)=>{var a;(a=e[i])===null||a===void 0||a.forEach(l=>{o.isPropagationStopped()||l(o)})},[e]),n=b.useMemo(()=>({onPointerDown:i=>t(d2,i),onPointerMove:i=>t(f2,i),onPointerUp:i=>t(p2,i),onPointerLeave:i=>t(h2,i),onPointerCancel:i=>t(m2,i),onKeyDown:i=>t(jm,i),onKeyUp:i=>t(hL,i),onWheel:i=>t(Mm,i)}),[t]),r=b.useCallback((i,o)=>(e[i]||(e[i]=[]),e[i].unshift(o),()=>{const a=e[i];a&&a.splice(0,a.length,...a.filter(l=>l!==o))}),[e]);return{registerSensors:n,subscribeSensors:r}}function Hv(e,t){const n=b.useRef(0),r=nl(),i=pe((...o)=>{n.current=Date.now(),e(o)});return b.useCallback((...o)=>{r(()=>{i(o)},t-(Date.now()-n.current))},[t,i,r])}const zd=$m("slide"),Nd=$m("slide_image");function Jl({slide:e,offset:t,render:n,rect:r,imageFit:i,imageProps:o,onClick:a,onLoad:l,onError:s,style:u}){var d,c,y,p,m,g,w,h;const[v,x]=b.useState(Ad),{publish:S}=yc(),{setTimeout:C}=xc(),T=b.useRef(null);b.useEffect(()=>{t===0&&S(cL(v))},[t,v,S]);const k=pe(N=>{("decode"in N?N.decode():Promise.resolve()).catch(()=>{}).then(()=>{N.parentNode&&(x(Fd),C(()=>{l==null||l(N)},0))})}),_=b.useCallback(N=>{T.current=N,N!=null&&N.complete&&k(N)},[k]),M=b.useCallback(N=>{k(N.currentTarget)},[k]),$=pe(()=>{x(Rd),s==null||s()}),D=Am(e,i),A=(N,U)=>Number.isFinite(N)?N:U,j=A(Math.max(...((c=(d=e.srcSet)===null||d===void 0?void 0:d.map(N=>N.width))!==null&&c!==void 0?c:[]).concat(e.width?[e.width]:[]).filter(Boolean)),((y=T.current)===null||y===void 0?void 0:y.naturalWidth)||0),F=A(Math.max(...((m=(p=e.srcSet)===null||p===void 0?void 0:p.map(N=>N.height))!==null&&m!==void 0?m:[]).concat(e.height?[e.height]:[]).filter(Boolean)),((g=T.current)===null||g===void 0?void 0:g.naturalHeight)||0),R=j&&F?{maxWidth:`min(${j}px, 100%)`,maxHeight:`min(${F}px, 100%)`}:{maxWidth:"100%",maxHeight:"100%"},L=(w=e.srcSet)===null||w===void 0?void 0:w.slice().sort((N,U)=>N.width-U.width).map(N=>`${N.src} ${N.width}w`).join(", "),O=()=>r&&!D&&e.width&&e.height?r.height/e.height*e.width:Number.MAX_VALUE,P=L&&r&&Dm()?`${Math.round(Math.min(O(),r.width))}px`:void 0,{style:I,className:z,...B}=(typeof o=="function"?o(e):o)||{};return b.createElement(b.Fragment,null,b.createElement("img",{ref:_,onLoad:M,onError:$,onClick:a,draggable:!1,className:Pn(ae(Nd()),D&&ae(Nd("cover")),v!==Fd&&ae(Nd("loading")),z),style:{...R,...u,...I},...B,alt:(h=e.alt)!==null&&h!==void 0?h:"",sizes:P,srcSet:L,src:e.src}),v!==Fd&&b.createElement("div",{className:ae(zd(uL))},v===Ad&&(n!=null&&n.iconLoading?n.iconLoading():b.createElement(BL,{className:Pn(ae(Ip),ae(zd(Ad)))})),v===Rd&&(n!=null&&n.iconError?n.iconError():b.createElement(VL,{className:Pn(ae(Ip),ae(zd(Rd)))}))))}const GL=b.forwardRef(function({className:t,children:n,onFocus:r,onBlur:i,...o},a){const l=b.useRef(null),{trackFocusWithin:s}=_2();return b.createElement(jL,{nodeRef:l},b.createElement("div",{ref:Ap(a,l),className:Pn(ae("root"),t),...s(r,i),...o},n))});var ot;(function(e){e[e.NONE=0]="NONE",e[e.SWIPE=1]="SWIPE",e[e.PULL=2]="PULL",e[e.ANIMATION=3]="ANIMATION"})(ot||(ot={}));function M2(e,t,n,r,i){b.useEffect(()=>i?()=>{}:Im(e(d2,t),e(f2,n),e(p2,r),e(h2,r),e(m2,r)),[e,t,n,r,i])}var en;(function(e){e[e.NONE=0]="NONE",e[e.SWIPE=1]="SWIPE",e[e.PULL=2]="PULL"})(en||(en={}));const Bd=30;function YL({disableSwipeNavigation:e,closeOnBackdropClick:t},n,r,i,o,a,l,s,u,d,c,y,p,m,g,w){const h=b.useRef(0),v=b.useRef([]),x=b.useRef(void 0),S=b.useRef(0),C=b.useRef(en.NONE),T=b.useCallback(j=>{x.current===j.pointerId&&(x.current=void 0,C.current=en.NONE);const F=v.current;F.splice(0,F.length,...F.filter(R=>R.pointerId!==j.pointerId))},[]),k=b.useCallback(j=>{T(j),j.persist(),v.current.push(j)},[T]),_=b.useCallback(j=>v.current.find(({pointerId:F})=>j.pointerId===F),[]),M=pe(j=>{k(j)}),$=(j,F)=>c&&j>F||d&&j<-F,D=pe(j=>{const F=_(j);if(F)if(x.current===j.pointerId){const R=Date.now()-S.current,L=h.current;C.current===en.SWIPE?Math.abs(L)>.3*i||Math.abs(L)>5&&R<o?s(L,R):u(L):C.current===en.PULL&&($(L,2*Bd)?m(L,R):g(L)),h.current=0,C.current=en.NONE}else{const{target:R}=j;t&&R instanceof HTMLElement&&R===F.target&&(R.classList.contains(ae(Om))||R.classList.contains(ae(c2)))&&w()}T(j)}),A=pe(j=>{const F=_(j);if(F){const R=x.current===j.pointerId;if(j.buttons===0){R&&h.current!==0?D(j):T(F);return}const L=j.clientX-F.clientX,O=j.clientY-F.clientY;if(x.current===void 0){const P=I=>{k(j),x.current=j.pointerId,S.current=Date.now(),C.current=I};Math.abs(L)>Math.abs(O)&&Math.abs(L)>Bd&&r(L)?e||(P(en.SWIPE),a()):Math.abs(O)>Math.abs(L)&&$(O,Bd)&&(P(en.PULL),y())}else R&&(C.current===en.SWIPE?(h.current=L,l(L)):C.current===en.PULL&&(h.current=O,p(O)))}});M2(n,M,A,D)}function qL({preventDefaultWheelX:e,preventDefaultWheelY:t}){const n=b.useRef(null),r=pe(i=>{const o=Math.abs(i.deltaX)>Math.abs(i.deltaY);(o&&e||!o&&t||i.ctrlKey)&&i.preventDefault()});return b.useCallback(i=>{var o;i?i.addEventListener("wheel",r,{passive:!1}):(o=n.current)===null||o===void 0||o.removeEventListener("wheel",r),n.current=i},[r])}function XL(e,t,n,r,i,o,a,l,s){const u=b.useRef(0),d=b.useRef(0),c=b.useRef(void 0),y=b.useRef(void 0),p=b.useRef(0),m=b.useRef(void 0),g=b.useRef(0),{setTimeout:w,clearTimeout:h}=xc(),v=b.useCallback(()=>{c.current&&(h(c.current),c.current=void 0)},[h]),x=b.useCallback(()=>{y.current&&(h(y.current),y.current=void 0)},[h]),S=pe(()=>{e!==ot.SWIPE&&(u.current=0,g.current=0,v(),x())});b.useEffect(S,[e,S]);const C=pe(k=>{y.current=void 0,u.current===k&&s(u.current)}),T=pe(k=>{if(k.ctrlKey||Math.abs(k.deltaY)>Math.abs(k.deltaX))return;const _=M=>{p.current=M,h(m.current),m.current=M>0?w(()=>{p.current=0,m.current=void 0},300):void 0};if(e===ot.NONE){if(Math.abs(k.deltaX)<=1.2*Math.abs(p.current)){_(k.deltaX);return}if(!n(-k.deltaX))return;if(d.current+=k.deltaX,v(),Math.abs(d.current)>30)d.current=0,_(0),g.current=Date.now(),o();else{const M=d.current;c.current=w(()=>{c.current=void 0,M===d.current&&(d.current=0)},i)}}else if(e===ot.SWIPE){let M=u.current-k.deltaX;if(M=Math.min(Math.abs(M),r)*Math.sign(M),u.current=M,a(M),x(),Math.abs(M)>.2*r){_(k.deltaX),l(M,Date.now()-g.current);return}y.current=w(()=>C(M),2*i)}else _(k.deltaX)});b.useEffect(()=>t(Mm,T),[t,T])}const Wv=$m("container"),$2=b.createContext(null),er=Jn("useController","ControllerContext",$2);function KL({children:e,...t}){var n;const{carousel:r,animation:i,controller:o,on:a,styles:l,render:s}=t,{closeOnPullUp:u,closeOnPullDown:d,preventDefaultWheelX:c,preventDefaultWheelY:y}=o,[p,m]=b.useState(),g=Mr(),w=IL(),[h,v]=b.useState(ot.NONE),x=b.useRef(0),S=b.useRef(0),C=b.useRef(1),{registerSensors:T,subscribeSensors:k}=WL(),{subscribe:_,publish:M}=yc(),$=nl(),D=nl(),A=nl(),{containerRef:j,setContainerRef:F,containerRect:R}=j2(),L=Ap(qL({preventDefaultWheelX:c,preventDefaultWheelY:y}),F),O=b.useRef(null),P=Ap(O,void 0),{getOwnerDocument:I}=vc(),z=Nm(),B=Y=>(z?-1:1)*(typeof Y=="number"?Y:1),N=pe(()=>{var Y;return(Y=j.current)===null||Y===void 0?void 0:Y.focus()}),U=pe(()=>t),G=pe(()=>g),H=b.useCallback(Y=>M(Fr,Y),[M]),X=b.useCallback(Y=>M(zr,Y),[M]),ee=b.useCallback(()=>M(io),[M]),fe=Y=>!(r.finite&&(B(Y)>0&&g.currentIndex===0||B(Y)<0&&g.currentIndex===g.slides.length-1)),be=Y=>{var we;x.current=Y,(we=j.current)===null||we===void 0||we.style.setProperty(bt("swipe_offset"),`${Math.round(Y)}px`)},ie=Y=>{var we,ut;S.current=Y,C.current=(()=>{const So=(()=>d&&Y>0?Y:u&&Y<0?-Y:0)();return Math.min(Math.max(Lm(1-So/60*(1-.5),2),.5),1)})(),(we=j.current)===null||we===void 0||we.style.setProperty(bt("pull_offset"),`${Math.round(Y)}px`),(ut=j.current)===null||ut===void 0||ut.style.setProperty(bt("pull_opacity"),`${C.current}`)},{prepareAnimation:Me}=Vv(O,(Y,we,ut)=>{if(O.current&&R)return{keyframes:[{transform:`translate(0, ${Y.rect.y-we.y+ut.y}px)`,opacity:Y.opacity},{transform:"translate(0, 0)",opacity:1}],duration:Y.duration,easing:i.easing.fade}}),Be=(Y,we)=>{if(u||d){ie(Y);let ut=0;O.current&&(ut=i.fade*(we?2:1),Me({rect:O.current.getBoundingClientRect(),opacity:C.current,duration:ut})),A(()=>{ie(0),v(ot.NONE)},ut),v(ot.ANIMATION),we||ee()}},{prepareAnimation:Ve,isAnimationPlaying:li}=Vv(O,(Y,we,ut)=>{var hn;if(O.current&&R&&(!((hn=g.animation)===null||hn===void 0)&&hn.duration)){const Vt=Zl(r.spacing),So=(Vt.percent?Vt.percent*R.width/100:Vt.pixel)||0;return{keyframes:[{transform:`translate(${B(g.globalIndex-Y.index)*(R.width+So)+Y.rect.x-we.x+ut.x}px, 0)`},{transform:"translate(0, 0)"}],duration:g.animation.duration,easing:g.animation.easing}}}),yt=pe(Y=>{var we,ut;const hn=Y.offset||0,Vt=hn?i.swipe:(we=i.navigation)!==null&&we!==void 0?we:i.swipe,So=!hn&&!li()?i.easing.navigation:i.easing.swipe;let{direction:Ja}=Y;const es=(ut=Y.count)!==null&&ut!==void 0?ut:1;let jc=ot.ANIMATION,mn=Vt*es;if(!Ja){const _o=R==null?void 0:R.width,eg=Y.duration||0,$c=_o?Vt/_o*Math.abs(hn):Vt;es!==0?(eg<$c?mn=mn/$c*Math.max(eg,$c/5):_o&&(mn=Vt/_o*(_o-Math.abs(hn))),Ja=B(hn)>0?Fr:zr):mn=Vt/2}let Mc=0;Ja===Fr?fe(B(1))?Mc=-es:(jc=ot.NONE,mn=Vt):Ja===zr&&(fe(B(-1))?Mc=es:(jc=ot.NONE,mn=Vt)),mn=Math.round(mn),D(()=>{be(0),v(ot.NONE)},mn),O.current&&Ve({rect:O.current.getBoundingClientRect(),index:g.globalIndex}),v(jc),M(Nv,{type:"swipe",increment:Mc,duration:mn,easing:So})});b.useEffect(()=>{var Y,we;!((Y=g.animation)===null||Y===void 0)&&Y.increment&&(!((we=g.animation)===null||we===void 0)&&we.duration)&&$(()=>w({type:"swipe",increment:0}),g.animation.duration)},[g.animation,w,$]);const bo=[k,fe,(R==null?void 0:R.width)||0,i.swipe,()=>v(ot.SWIPE),Y=>be(Y),(Y,we)=>yt({offset:Y,duration:we,count:1}),Y=>yt({offset:Y,count:0})],Za=[()=>{d&&v(ot.PULL)},Y=>ie(Y),Y=>Be(Y),Y=>Be(Y,!0)];YL(o,...bo,u,d,...Za,ee),XL(h,...bo);const wo=pe(()=>{o.focus&&I().querySelector(`.${ae(Pm)} .${ae(Wv())}`)&&N()});b.useEffect(wo,[wo]);const Jm=pe(()=>{var Y;(Y=a.view)===null||Y===void 0||Y.call(a,{index:g.currentIndex})});b.useEffect(Jm,[g.globalIndex,Jm]),b.useEffect(()=>Im(_(Fr,Y=>yt({direction:Fr,...Y})),_(zr,Y=>yt({direction:zr,...Y})),_(Nv,Y=>w(Y))),[_,yt,w]);const T_=b.useMemo(()=>({prev:H,next:X,close:ee,focus:N,slideRect:R?bL(R,r.padding):{width:0,height:0},containerRect:R||{width:0,height:0},subscribeSensors:k,containerRef:j,setCarouselRef:P,toolbarWidth:p,setToolbarWidth:m}),[H,X,ee,N,k,R,j,P,p,m,r.padding]);return b.useImperativeHandle(o.ref,()=>({prev:H,next:X,close:ee,focus:N,getLightboxProps:U,getLightboxState:G}),[H,X,ee,N,U,G]),b.createElement("div",{ref:L,className:Pn(ae(Wv()),ae(Tm)),style:{...h===ot.SWIPE?{[bt("swipe_offset")]:`${Math.round(x.current)}px`}:null,...h===ot.PULL?{[bt("pull_offset")]:`${Math.round(S.current)}px`,[bt("pull_opacity")]:`${C.current}`}:null,...o.touchAction!=="none"?{[bt("controller_touch_action")]:o.touchAction}:null,...l.container},tabIndex:-1,...T},R&&b.createElement($2.Provider,{value:T_},e,(n=s.controls)===null||n===void 0?void 0:n.call(s)))}const QL=jr(s2,KL);function $r(e){return Qa(a2,e)}function Gv(e){return Qa(Om,e)}function ZL({slide:e,offset:t}){const n=b.useRef(null),{currentIndex:r,slides:i}=Mr(),{slideRect:o,focus:a}=er(),{render:l,carousel:{imageFit:s,imageProps:u},on:{click:d},styles:{slide:c},labels:y}=Kt(),{getOwnerDocument:p}=vc(),m=t!==0;b.useEffect(()=>{var w;m&&(!((w=n.current)===null||w===void 0)&&w.contains(p().activeElement))&&a()},[m,a,p]);const g=()=>{var w,h,v,x;let S=(w=l.slide)===null||w===void 0?void 0:w.call(l,{slide:e,offset:t,rect:o});return!S&&xo(e)&&(S=b.createElement(Jl,{slide:e,offset:t,render:l,rect:o,imageFit:s,imageProps:u,onClick:m?void 0:()=>d==null?void 0:d({index:r})})),S?b.createElement(b.Fragment,null,(h=l.slideHeader)===null||h===void 0?void 0:h.call(l,{slide:e}),((v=l.slideContainer)!==null&&v!==void 0?v:({children:C})=>C)({slide:e,children:S}),(x=l.slideFooter)===null||x===void 0?void 0:x.call(l,{slide:e})):null};return b.createElement("div",{ref:n,className:Pn(ae(Gv()),!m&&ae(Gv("current")),ae(Tm)),...kL(m),style:c,role:"group","aria-roledescription":oo(y,"Slide"),"aria-label":xL(y,i,r+t)},g())}function JL(){const e=Kt().styles.slide;return b.createElement("div",{className:ae(Om),style:e})}function e6({carousel:e,labels:t}){const{slides:n,currentIndex:r,globalIndex:i}=Mr(),{setCarouselRef:o}=er(),{autoPlaying:a,focusWithin:l}=_2(),s=Zl(e.spacing),u=Zl(e.padding),d=CL(e,n,1),c=[];if(x2(n))for(let y=r-d;y<=r+d;y+=1){const p=b2(n,y),m=i-r+y,g=e.finite&&(y<0||y>n.length-1);c.push(g?{key:m}:{key:[`${m}`,SL(p)].filter(Boolean).join("|"),offset:y-r,slide:p})}return b.createElement("div",{ref:o,className:Pn(ae($r()),c.length>0&&ae($r("with_slides"))),style:{[`${bt($r("slides_count"))}`]:c.length,[`${bt($r("spacing_px"))}`]:s.pixel||0,[`${bt($r("spacing_percent"))}`]:s.percent||0,[`${bt($r("padding_px"))}`]:u.pixel||0,[`${bt($r("padding_percent"))}`]:u.percent||0},role:"region","aria-live":a&&!l?"off":"polite","aria-roledescription":oo(t,"Carousel"),"aria-label":oo(t,"Photo gallery")},c.map(({key:y,slide:p,offset:m})=>p?b.createElement(ZL,{key:y,slide:p,offset:m}):b.createElement(JL,{key:y})))}const t6=jr(a2,e6);function I2(){const{carousel:e}=Kt(),{slides:t,currentIndex:n}=Mr(),r=t.length===0||e.finite&&n===0,i=t.length===0||e.finite&&n===t.length-1;return{prevDisabled:r,nextDisabled:i}}function n6(e){var t;const n=Nm(),{publish:r}=yc(),{animation:i}=Kt(),{prevDisabled:o,nextDisabled:a}=I2(),l=((t=i.navigation)!==null&&t!==void 0?t:i.swipe)/2,s=Hv(()=>r(Fr),l),u=Hv(()=>r(zr),l),d=pe(c=>{switch(c.key){case mL:r(io);break;case gL:(n?a:o)||(n?u:s)();break;case vL:(n?o:a)||(n?s:u)();break}});b.useEffect(()=>e(jm,d),[e,d])}function Yv({label:e,icon:t,renderIcon:n,action:r,onClick:i,disabled:o,style:a}){return b.createElement(Fm,{label:e,icon:t,renderIcon:n,className:ae(`navigation_${r}`),disabled:o,onClick:i,style:a,...HL(er().focus,o)})}function r6({render:{buttonPrev:e,buttonNext:t,iconPrev:n,iconNext:r},styles:i}){const{prev:o,next:a,subscribeSensors:l}=er(),{prevDisabled:s,nextDisabled:u}=I2();return n6(l),b.createElement(b.Fragment,null,e?e():b.createElement(Yv,{label:"Previous",action:Fr,icon:zL,renderIcon:n,style:i.navigationPrev,disabled:s,onClick:o}),t?t():b.createElement(Yv,{label:"Next",action:zr,icon:NL,renderIcon:r,style:i.navigationNext,disabled:u,onClick:a}))}const i6=jr(aL,r6),qv=ae(fL),o6=ae(u2);function a6(e){return"style"in e}function Xv(e,t,n){const r=window.getComputedStyle(e),i=n?"padding-left":"padding-right",o=n?r.paddingLeft:r.paddingRight,a=e.style.getPropertyValue(i);return e.style.setProperty(i,`${(gc(o)||0)+t}px`),()=>{a?e.style.setProperty(i,a):e.style.removeProperty(i)}}function s6({noScroll:{disabled:e},children:t}){const n=Nm(),{getOwnerDocument:r,getOwnerWindow:i}=vc();return b.useEffect(()=>{if(e)return()=>{};const o=[],a=i(),{body:l,documentElement:s}=r(),u=Math.round(a.innerWidth-s.clientWidth);if(u>0){o.push(Xv(l,u,n));const d=l.getElementsByTagName("*");for(let c=0;c<d.length;c+=1){const y=d[c];a6(y)&&a.getComputedStyle(y).getPropertyValue("position")==="fixed"&&!y.classList.contains(o6)&&o.push(Xv(y,u,n))}}return l.classList.add(qv),()=>{l.classList.remove(qv),o.forEach(d=>d())}},[n,e,r,i]),b.createElement(b.Fragment,null,t)}const l6=jr(sL,s6);function Kv(e){return Qa(Pm,e)}function Qv(e,t,n){const r=e.getAttribute(t);return e.setAttribute(t,n),()=>{r?e.setAttribute(t,r):e.removeAttribute(t)}}function u6({children:e,animation:t,styles:n,className:r,on:i,portal:o,close:a,labels:l}){const[s,u]=b.useState(!1),[d,c]=b.useState(!1),y=b.useRef([]),p=b.useRef(null),{setTimeout:m}=xc(),{subscribe:g}=yc(),h=zm()?0:t.fade;b.useEffect(()=>(u(!0),()=>{u(!1),c(!1)}),[]);const v=pe(()=>{y.current.forEach(T=>T()),y.current=[]}),x=pe(()=>{var T;c(!1),v(),(T=i.exiting)===null||T===void 0||T.call(i),m(()=>{var k;(k=i.exited)===null||k===void 0||k.call(i),a()},h)});b.useEffect(()=>g(io,x),[g,x]);const S=pe(T=>{var k,_,M;PL(T),c(!0),(k=i.entering)===null||k===void 0||k.call(i);const $=(M=(_=T.parentNode)===null||_===void 0?void 0:_.children)!==null&&M!==void 0?M:[];for(let D=0;D<$.length;D+=1){const A=$[D];["TEMPLATE","SCRIPT","STYLE"].indexOf(A.tagName)===-1&&A!==T&&(y.current.push(Qv(A,"inert","")),y.current.push(Qv(A,"aria-hidden","true")))}y.current.push(()=>{var D,A;(A=(D=p.current)===null||D===void 0?void 0:D.focus)===null||A===void 0||A.call(D)}),m(()=>{var D;(D=i.entered)===null||D===void 0||D.call(i)},h)}),C=b.useCallback(T=>{T?S(T):v()},[S,v]);return s?Eu.createPortal(b.createElement(GL,{ref:C,className:Pn(r,ae(Kv()),ae(u2),d&&ae(Kv("open"))),"aria-modal":!0,role:"dialog","aria-label":oo(l,"Lightbox"),style:{...t.fade!==Lp.animation.fade?{[bt("fade_animation_duration")]:`${h}ms`}:null,...t.easing.fade!==Lp.animation.easing.fade?{[bt("fade_animation_timing_function")]:t.easing.fade}:null,...n.root},onFocus:T=>{p.current||(p.current=T.relatedTarget)}},e),o.root||document.body):null}const c6=jr(Pm,u6);function d6({children:e}){return b.createElement(b.Fragment,null,e)}const f6=jr(lL,d6);function p6(e){return Qa(l2,e)}function h6({toolbar:{buttons:e},render:{buttonClose:t,iconClose:n},styles:r}){const{close:i,setToolbarWidth:o}=er(),{setContainerRef:a,containerRect:l}=j2();Tn(()=>{o(l==null?void 0:l.width)},[o,l==null?void 0:l.width]);const s=()=>t?t():b.createElement(Fm,{key:io,label:"Close",icon:FL,renderIcon:n,onClick:i});return b.createElement("div",{ref:a,style:r.toolbar,className:ae(p6())},e==null?void 0:e.map(u=>u===io?s():u))}const m6=jr(l2,h6);function D2(e,t){var n;return b.createElement(e.module.component,{key:e.module.name,...t},(n=e.children)===null||n===void 0?void 0:n.map(r=>D2(r,t)))}function g6(e,t={}){const{easing:n,...r}=e,{easing:i,...o}=t;return{easing:{...n,...i},...r,...o}}function v6({carousel:e,animation:t,render:n,toolbar:r,controller:i,noScroll:o,on:a,plugins:l,slides:s,index:u,...d}){const{animation:c,carousel:y,render:p,toolbar:m,controller:g,noScroll:w,on:h,slides:v,index:x,plugins:S,...C}=Lp,{config:T,augmentation:k}=TL([Ue(c6,[Ue(l6,[Ue(QL,[Ue(t6),Ue(m6),Ue(i6)])])])],l||S),_=k({animation:g6(c,t),carousel:{...y,...e},render:{...p,...n},toolbar:{...m,...r},controller:{...g,...i},noScroll:{...w,...o},on:{...h,...a},...C,...d});return _.open?b.createElement($L,{..._},b.createElement(LL,{slides:s||v,index:gc(u||x)},b.createElement(AL,null,b.createElement(ML,null,b.createElement(OL,null,D2(Ue(f6,T),_)))))):null}const y6={minZoom:1,maxZoomPixelRatio:1,zoomInMultiplier:2,doubleTapDelay:300,doubleClickDelay:500,doubleClickMaxStops:2,keyboardMoveDistance:50,wheelZoomDistanceFactor:100,pinchZoomDistanceFactor:100,pinchZoomV4:!1,scrollToZoom:!1};function x6(e){return Math.min(Math.max(e,Number.EPSILON),1)}function L2(e){const{minZoom:t,...n}={...y6,...e};return{minZoom:x6(t),...n}}function b6(e,t,n,r){const i=b.useRef(void 0),o=b.useRef(void 0),{zoom:a}=Kt().animation,l=zm(),s=pe(()=>{var u,d,c;if((u=i.current)===null||u===void 0||u.cancel(),i.current=void 0,o.current&&(r!=null&&r.current)){try{i.current=(c=(d=r.current).animate)===null||c===void 0?void 0:c.call(d,[{transform:o.current},{transform:`scale(${e}) translateX(${t}px) translateY(${n}px)`}],{duration:l?0:a??500,easing:i.current?"ease-out":"ease-in-out"})}catch(y){console.error(y)}o.current=void 0,i.current&&(i.current.onfinish=()=>{i.current=void 0})}});return Tn(s,[e,t,n,s]),b.useCallback(()=>{o.current=r!=null&&r.current?window.getComputedStyle(r.current).transform:void 0},[r])}function w6(e,t){const{on:n}=Kt(),r=pe(()=>{var i;t||(i=n.zoom)===null||i===void 0||i.call(n,{zoom:e})});b.useEffect(r,[e,r])}function bc(){const{zoom:e}=Kt();return L2(e)}function S6(e,t){var n,r;let i={width:0,height:0},o={width:0,height:0};const{currentSlide:a}=Mr(),{imageFit:l}=Kt().carousel,{maxZoomPixelRatio:s}=bc();if(e&&a){const d={...a,...t};if(xo(d)){const c=Am(d,l),y=Math.max(...(((n=d.srcSet)===null||n===void 0?void 0:n.map(m=>m.width))||[]).concat(d.width?[d.width]:[])),p=Math.max(...(((r=d.srcSet)===null||r===void 0?void 0:r.map(m=>m.height))||[]).concat(d.height?[d.height]:[]));y>0&&p>0&&e.width>0&&e.height>0&&(o=c?{width:Math.round(Math.min(y,e.width/e.height*p)),height:Math.round(Math.min(p,e.height/e.width*y))}:{width:y,height:p},o={width:o.width*s,height:o.height*s},i=c?{width:Math.min(e.width,o.width,y),height:Math.min(e.height,o.height,p)}:{width:Math.round(Math.min(e.width,e.height/p*y,y)),height:Math.round(Math.min(e.height,e.width/y*p,p))})}}const u=i.width?Math.max(Lm(o.width/i.width,5),1):1;return{imageRect:i,maxZoom:u}}function Zv(e,t){return Math.hypot(e.clientX-t.clientX,e.clientY-t.clientY)}function Jv(e,t,n=100,r=2){return e*Math.min(1+Math.abs(t/n),r)**Math.sign(t)}function _6(e,t,n,r,i,o,a,l,s){const u=b.useRef([]),d=b.useRef(0),c=b.useRef(void 0),{globalIndex:y}=Mr(),{getOwnerWindow:p}=vc(),{containerRef:m,subscribeSensors:g}=er(),{keyboardMoveDistance:w,zoomInMultiplier:h,wheelZoomDistanceFactor:v,scrollToZoom:x,doubleTapDelay:S,doubleClickDelay:C,doubleClickMaxStops:T,pinchZoomDistanceFactor:k,pinchZoomV4:_}=bc(),M=b.useCallback(P=>{if(m.current){const{pageX:I,pageY:z}=P,{scrollX:B,scrollY:N}=p(),{left:U,top:G,width:H,height:X}=m.current.getBoundingClientRect();return[I-U-B-H/2,z-G-N-X/2]}return[]},[m,p]),$=pe(P=>{const{key:I,metaKey:z,ctrlKey:B}=P,N=z||B,U=()=>{P.preventDefault(),P.stopPropagation()};if(e>1){const G=(H,X)=>{U(),l(H,X)};I==="ArrowDown"?G(0,w):I==="ArrowUp"?G(0,-w):I==="ArrowLeft"?G(-w,0):I==="ArrowRight"&&G(w,0)}I==="+"||N&&I==="="?(U(),i()):I==="-"||N&&I==="_"?(U(),o()):N&&I==="0"&&(U(),a(1))}),D=pe(P=>{if((P.ctrlKey||x)&&Math.abs(P.deltaY)>Math.abs(P.deltaX)){P.stopPropagation(),a(Jv(e,-P.deltaY,v),!0,...M(P));return}e>1&&(P.stopPropagation(),x||l(P.deltaX,P.deltaY))}),A=b.useCallback(P=>{const I=u.current;I.splice(0,I.length,...I.filter(z=>z.pointerId!==P.pointerId))},[]),j=b.useCallback(P=>{A(P),P.persist(),u.current.push(P)},[A]),F=pe(P=>{var I;const z=u.current;if(P.pointerType==="mouse"&&P.buttons>1||!(!((I=s==null?void 0:s.current)===null||I===void 0)&&I.contains(P.target)))return;e>1&&P.stopPropagation();const{timeStamp:B}=P;if(z.length===0&&B-d.current<(P.pointerType==="touch"?S:C)){d.current=0;const N=e>=1?e!==n?e*Math.max(n**(1/T),h):1:e!==t?e/Math.max(t**(-1/T),h):1;a(N,!1,...M(P))}else d.current=B;if(j(P),z.length===2){const N=Zv(z[0],z[1]);c.current={previousDistance:N,initialDistance:Math.max(N,1),initialZoom:e}}}),R=pe(P=>{const I=u.current,z=I.find(B=>B.pointerId===P.pointerId);if(I.length===2&&c.current){P.stopPropagation(),j(P);const B=Zv(I[0],I[1]),N=_?c.current.initialZoom/c.current.initialDistance*B:Jv(e,B-c.current.previousDistance,k);a(N,!0,...I.map(U=>M(U)).reduce((U,G)=>G.map((H,X)=>U[X]+H/2))),c.current.previousDistance=B;return}e>1&&(P.stopPropagation(),z&&(I.length===1&&l((z.clientX-P.clientX)/e,(z.clientY-P.clientY)/e),j(P)))}),L=b.useCallback(P=>{const I=u.current;I.length===2&&I.find(z=>z.pointerId===P.pointerId)&&(c.current=void 0),A(P)},[A]),O=b.useCallback(()=>{const P=u.current;P.splice(0,P.length),d.current=0,c.current=void 0},[]);M2(g,F,R,L,r),b.useEffect(O,[y,O]),b.useEffect(()=>r?()=>{}:Im(O,g(jm,$),g(Mm,D)),[r,g,O,$,D])}function C6(e,t,n){const[r,i]=b.useState(1),[o,a]=b.useState(0),[l,s]=b.useState(0),u=b6(r,o,l,n),{currentSlide:d,globalIndex:c}=Mr(),{containerRect:y,slideRect:p}=er(),{minZoom:m,zoomInMultiplier:g}=bc(),w=d&&xo(d)?d.src:void 0,h=!w||!(n!=null&&n.current);Tn(()=>{i(1),a(0),s(0)},[c,w]);const v=b.useCallback((k,_,M)=>{const $=M||r,D=o-(k||0),A=l-(_||0),j=(e.width*$-p.width)/2/$,F=(e.height*$-p.height)/2/$;a(Math.min(Math.abs(D),Math.max(j,0))*Math.sign(D)),s(Math.min(Math.abs(A),Math.max(F,0))*Math.sign(A))},[r,o,l,p,e.width,e.height]),x=b.useCallback((k,_,M,$)=>{const D=Lm(k+.01<t?k-.01>m?k:m:t,5);_||u(),v(M?M*(1/r-1/D):0,$?$*(1/r-1/D):0,D),i(D)},[r,m,t,v,u]),S=pe(()=>{r>1&&(r>t&&x(t,!0),v())});Tn(S,[y.width,y.height,S]);const C=b.useCallback(()=>{const k=r*g;x(r<1&&k>1?1:k)},[r,g,x]),T=b.useCallback(()=>{const k=r/g;x(r>1&&k<1?1:k)},[r,g,x]);return{zoom:r,offsetX:o,offsetY:l,disabled:h,changeOffsets:v,changeZoom:x,zoomIn:C,zoomOut:T}}const A2=b.createContext(null),Bm=Jn("useZoom","ZoomControllerContext",A2);function E6({children:e}){const[t,n]=b.useState(),{slideRect:r}=er(),{ref:i,minZoom:o}=bc(),{imageRect:a,maxZoom:l}=S6(r,t==null?void 0:t.imageDimensions),{zoom:s,offsetX:u,offsetY:d,disabled:c,changeZoom:y,changeOffsets:p,zoomIn:m,zoomOut:g}=C6(a,l,t==null?void 0:t.zoomWrapperRef);w6(s,c),_6(s,o,l,c,m,g,y,p,t==null?void 0:t.zoomWrapperRef);const w=b.useMemo(()=>({zoom:s,minZoom:o,maxZoom:l,offsetX:u,offsetY:d,disabled:c,zoomIn:m,zoomOut:g,changeZoom:y}),[s,o,l,u,d,c,m,g,y]);b.useImperativeHandle(i,()=>w,[w]);const h=b.useMemo(()=>({...w,setZoomWrapper:n}),[w,n]);return b.createElement(A2.Provider,{value:h},e)}const k6=si("ZoomIn",b.createElement(b.Fragment,null,b.createElement("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}),b.createElement("path",{d:"M12 10h-2v2H9v-2H7V9h2V7h1v2h2v1z"}))),P6=si("ZoomOut",b.createElement("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14zM7 9h5v1H7z"})),e1=b.forwardRef(function({zoomIn:t,onLoseFocus:n},r){const i=b.useRef(!1),o=b.useRef(!1),{zoom:a,minZoom:l,maxZoom:s,zoomIn:u,zoomOut:d,disabled:c}=Bm(),{render:y}=Kt(),p=c||(t?a>=s:a<=l);return b.useEffect(()=>{p&&i.current&&o.current&&n(),p||(i.current=!0)},[p,n]),b.createElement(Fm,{ref:r,disabled:p,label:t?"Zoom in":"Zoom out",icon:t?k6:P6,renderIcon:t?y.iconZoomIn:y.iconZoomOut,onClick:t?u:d,onFocus:()=>{o.current=!0},onBlur:()=>{o.current=!1}})});function T6(){const e=b.useRef(null),t=b.useRef(null),{focus:n}=er(),r=b.useCallback(a=>{var l,s;!((l=a.current)===null||l===void 0)&&l.disabled?n():(s=a.current)===null||s===void 0||s.focus()},[n]),i=b.useCallback(()=>r(e),[r]),o=b.useCallback(()=>r(t),[r]);return b.createElement(b.Fragment,null,b.createElement(e1,{zoomIn:!0,ref:e,onLoseFocus:o}),b.createElement(e1,{ref:t,onLoseFocus:i}))}function O6(){const{render:e}=Kt(),t=Bm();return e.buttonZoom?b.createElement(b.Fragment,null,e.buttonZoom(t)):b.createElement(T6,null)}function j6(e){var t;return(((t=e.srcSet)===null||t===void 0?void 0:t.length)||0)>0}function M6({current:e,preload:t},{type:n,source:r}){switch(n){case"fetch":return e?{current:e,preload:r}:{current:r};case"done":return r===t?{current:r}:{current:e,preload:t};default:throw new Error(v2)}}function $6(e){var t,n;const[{current:r,preload:i},o]=b.useReducer(M6,{}),{slide:a,rect:l,imageFit:s,render:u,interactive:d}=e,c=a.srcSet.sort((C,T)=>C.width-T.width),y=(t=a.width)!==null&&t!==void 0?t:c[c.length-1].width,p=(n=a.height)!==null&&n!==void 0?n:c[c.length-1].height,m=Am(a,s),g=Math.max(...c.map(C=>C.width)),w=Math.min((m?Math.max:Math.min)(l.width,y*(l.height/p)),g),h=wL(),v=pe(()=>{var C;const T=(C=c.find(k=>k.width>=w*h))!==null&&C!==void 0?C:c[c.length-1];(!r||c.findIndex(k=>k.src===r)<c.findIndex(k=>k===T))&&o({type:"fetch",source:T.src})});Tn(v,[l.width,l.height,h,v]);const x=pe(C=>o({type:"done",source:C})),S={WebkitTransform:d?"initial":"translateZ(0)"};return m||Object.assign(S,l.width/l.height<y/p?{width:"100%",height:"auto"}:{width:"auto",height:"100%"}),b.createElement(b.Fragment,null,i&&i!==r&&b.createElement(Jl,{key:"preload",...e,offset:void 0,slide:{...a,src:i,srcSet:void 0},style:{position:"absolute",visibility:"hidden",...S},onLoad:()=>x(i),render:{...u,iconLoading:()=>null,iconError:()=>null}}),r&&b.createElement(Jl,{key:"current",...e,slide:{...a,src:r,srcSet:void 0},style:S}))}function I6({render:e,slide:t,offset:n,rect:r}){var i;const[o,a]=b.useState(),l=b.useRef(null),{zoom:s,maxZoom:u,offsetX:d,offsetY:c,setZoomWrapper:y}=Bm(),p=s>1,{carousel:m,on:g}=Kt(),{currentIndex:w}=Mr();Tn(()=>n===0?(y({zoomWrapperRef:l,imageDimensions:o}),()=>y(void 0)):()=>{},[n,o,y]);let h=(i=e.slide)===null||i===void 0?void 0:i.call(e,{slide:t,offset:n,rect:r,zoom:s,maxZoom:u});if(!h&&xo(t)){const v={slide:t,offset:n,rect:r,render:e,imageFit:m.imageFit,imageProps:m.imageProps,onClick:n===0?()=>{var x;return(x=g.click)===null||x===void 0?void 0:x.call(g,{index:w})}:void 0};h=j6(t)?b.createElement($6,{...v,slide:t,interactive:p,rect:n===0?{width:r.width*s,height:r.height*s}:r}):b.createElement(Jl,{onLoad:x=>a({width:x.naturalWidth,height:x.naturalHeight}),...v})}return h?b.createElement("div",{ref:l,className:Pn(ae(dL),ae(Tm),ae(c2),p&&ae(pL)),style:n===0?{transform:`scale(${s}) translateX(${d}px) translateY(${c}px)`}:void 0},h):null}const D6=({augment:e,addModule:t})=>{e(({zoom:n,toolbar:r,render:i,controller:o,...a})=>{const l=L2(n);return{zoom:l,toolbar:_L(r,zv,b.createElement(O6,null)),render:{...i,slide:s=>{var u;return xo(s.slide)?b.createElement(I6,{render:i,...s}):(u=i.slide)===null||u===void 0?void 0:u.call(i,s)}},controller:{...o,preventDefaultWheelY:l.scrollToZoom},...a}}),t(jr(zv,E6))};var R2={exports:{}};(function(e,t){(function(n,r){e.exports=r()})(te,function(){var n=1e3,r=6e4,i=36e5,o="millisecond",a="second",l="minute",s="hour",u="day",d="week",c="month",y="quarter",p="year",m="date",g="Invalid Date",w=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,h=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,v={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(F){var R=["th","st","nd","rd"],L=F%100;return"["+F+(R[(L-20)%10]||R[L]||R[0])+"]"}},x=function(F,R,L){var O=String(F);return!O||O.length>=R?F:""+Array(R+1-O.length).join(L)+F},S={s:x,z:function(F){var R=-F.utcOffset(),L=Math.abs(R),O=Math.floor(L/60),P=L%60;return(R<=0?"+":"-")+x(O,2,"0")+":"+x(P,2,"0")},m:function F(R,L){if(R.date()<L.date())return-F(L,R);var O=12*(L.year()-R.year())+(L.month()-R.month()),P=R.clone().add(O,c),I=L-P<0,z=R.clone().add(O+(I?-1:1),c);return+(-(O+(L-P)/(I?P-z:z-P))||0)},a:function(F){return F<0?Math.ceil(F)||0:Math.floor(F)},p:function(F){return{M:c,y:p,w:d,d:u,D:m,h:s,m:l,s:a,ms:o,Q:y}[F]||String(F||"").toLowerCase().replace(/s$/,"")},u:function(F){return F===void 0}},C="en",T={};T[C]=v;var k="$isDayjsObject",_=function(F){return F instanceof A||!(!F||!F[k])},M=function F(R,L,O){var P;if(!R)return C;if(typeof R=="string"){var I=R.toLowerCase();T[I]&&(P=I),L&&(T[I]=L,P=I);var z=R.split("-");if(!P&&z.length>1)return F(z[0])}else{var B=R.name;T[B]=R,P=B}return!O&&P&&(C=P),P||!O&&C},$=function(F,R){if(_(F))return F.clone();var L=typeof R=="object"?R:{};return L.date=F,L.args=arguments,new A(L)},D=S;D.l=M,D.i=_,D.w=function(F,R){return $(F,{locale:R.$L,utc:R.$u,x:R.$x,$offset:R.$offset})};var A=function(){function F(L){this.$L=M(L.locale,null,!0),this.parse(L),this.$x=this.$x||L.x||{},this[k]=!0}var R=F.prototype;return R.parse=function(L){this.$d=function(O){var P=O.date,I=O.utc;if(P===null)return new Date(NaN);if(D.u(P))return new Date;if(P instanceof Date)return new Date(P);if(typeof P=="string"&&!/Z$/i.test(P)){var z=P.match(w);if(z){var B=z[2]-1||0,N=(z[7]||"0").substring(0,3);return I?new Date(Date.UTC(z[1],B,z[3]||1,z[4]||0,z[5]||0,z[6]||0,N)):new Date(z[1],B,z[3]||1,z[4]||0,z[5]||0,z[6]||0,N)}}return new Date(P)}(L),this.init()},R.init=function(){var L=this.$d;this.$y=L.getFullYear(),this.$M=L.getMonth(),this.$D=L.getDate(),this.$W=L.getDay(),this.$H=L.getHours(),this.$m=L.getMinutes(),this.$s=L.getSeconds(),this.$ms=L.getMilliseconds()},R.$utils=function(){return D},R.isValid=function(){return this.$d.toString()!==g},R.isSame=function(L,O){var P=$(L);return this.startOf(O)<=P&&P<=this.endOf(O)},R.isAfter=function(L,O){return $(L)<this.startOf(O)},R.isBefore=function(L,O){return this.endOf(O)<$(L)},R.$g=function(L,O,P){return D.u(L)?this[O]:this.set(P,L)},R.unix=function(){return Math.floor(this.valueOf()/1e3)},R.valueOf=function(){return this.$d.getTime()},R.startOf=function(L,O){var P=this,I=!!D.u(O)||O,z=D.p(L),B=function(be,ie){var Me=D.w(P.$u?Date.UTC(P.$y,ie,be):new Date(P.$y,ie,be),P);return I?Me:Me.endOf(u)},N=function(be,ie){return D.w(P.toDate()[be].apply(P.toDate("s"),(I?[0,0,0,0]:[23,59,59,999]).slice(ie)),P)},U=this.$W,G=this.$M,H=this.$D,X="set"+(this.$u?"UTC":"");switch(z){case p:return I?B(1,0):B(31,11);case c:return I?B(1,G):B(0,G+1);case d:var ee=this.$locale().weekStart||0,fe=(U<ee?U+7:U)-ee;return B(I?H-fe:H+(6-fe),G);case u:case m:return N(X+"Hours",0);case s:return N(X+"Minutes",1);case l:return N(X+"Seconds",2);case a:return N(X+"Milliseconds",3);default:return this.clone()}},R.endOf=function(L){return this.startOf(L,!1)},R.$set=function(L,O){var P,I=D.p(L),z="set"+(this.$u?"UTC":""),B=(P={},P[u]=z+"Date",P[m]=z+"Date",P[c]=z+"Month",P[p]=z+"FullYear",P[s]=z+"Hours",P[l]=z+"Minutes",P[a]=z+"Seconds",P[o]=z+"Milliseconds",P)[I],N=I===u?this.$D+(O-this.$W):O;if(I===c||I===p){var U=this.clone().set(m,1);U.$d[B](N),U.init(),this.$d=U.set(m,Math.min(this.$D,U.daysInMonth())).$d}else B&&this.$d[B](N);return this.init(),this},R.set=function(L,O){return this.clone().$set(L,O)},R.get=function(L){return this[D.p(L)]()},R.add=function(L,O){var P,I=this;L=Number(L);var z=D.p(O),B=function(G){var H=$(I);return D.w(H.date(H.date()+Math.round(G*L)),I)};if(z===c)return this.set(c,this.$M+L);if(z===p)return this.set(p,this.$y+L);if(z===u)return B(1);if(z===d)return B(7);var N=(P={},P[l]=r,P[s]=i,P[a]=n,P)[z]||1,U=this.$d.getTime()+L*N;return D.w(U,this)},R.subtract=function(L,O){return this.add(-1*L,O)},R.format=function(L){var O=this,P=this.$locale();if(!this.isValid())return P.invalidDate||g;var I=L||"YYYY-MM-DDTHH:mm:ssZ",z=D.z(this),B=this.$H,N=this.$m,U=this.$M,G=P.weekdays,H=P.months,X=P.meridiem,ee=function(ie,Me,Be,Ve){return ie&&(ie[Me]||ie(O,I))||Be[Me].slice(0,Ve)},fe=function(ie){return D.s(B%12||12,ie,"0")},be=X||function(ie,Me,Be){var Ve=ie<12?"AM":"PM";return Be?Ve.toLowerCase():Ve};return I.replace(h,function(ie,Me){return Me||function(Be){switch(Be){case"YY":return String(O.$y).slice(-2);case"YYYY":return D.s(O.$y,4,"0");case"M":return U+1;case"MM":return D.s(U+1,2,"0");case"MMM":return ee(P.monthsShort,U,H,3);case"MMMM":return ee(H,U);case"D":return O.$D;case"DD":return D.s(O.$D,2,"0");case"d":return String(O.$W);case"dd":return ee(P.weekdaysMin,O.$W,G,2);case"ddd":return ee(P.weekdaysShort,O.$W,G,3);case"dddd":return G[O.$W];case"H":return String(B);case"HH":return D.s(B,2,"0");case"h":return fe(1);case"hh":return fe(2);case"a":return be(B,N,!0);case"A":return be(B,N,!1);case"m":return String(N);case"mm":return D.s(N,2,"0");case"s":return String(O.$s);case"ss":return D.s(O.$s,2,"0");case"SSS":return D.s(O.$ms,3,"0");case"Z":return z}return null}(ie)||z.replace(":","")})},R.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},R.diff=function(L,O,P){var I,z=this,B=D.p(O),N=$(L),U=(N.utcOffset()-this.utcOffset())*r,G=this-N,H=function(){return D.m(z,N)};switch(B){case p:I=H()/12;break;case c:I=H();break;case y:I=H()/3;break;case d:I=(G-U)/6048e5;break;case u:I=(G-U)/864e5;break;case s:I=G/i;break;case l:I=G/r;break;case a:I=G/n;break;default:I=G}return P?I:D.a(I)},R.daysInMonth=function(){return this.endOf(c).$D},R.$locale=function(){return T[this.$L]},R.locale=function(L,O){if(!L)return this.$L;var P=this.clone(),I=M(L,O,!0);return I&&(P.$L=I),P},R.clone=function(){return D.w(this.$d,this)},R.toDate=function(){return new Date(this.valueOf())},R.toJSON=function(){return this.isValid()?this.toISOString():null},R.toISOString=function(){return this.$d.toISOString()},R.toString=function(){return this.$d.toUTCString()},F}(),j=A.prototype;return $.prototype=j,[["$ms",o],["$s",a],["$m",l],["$H",s],["$W",u],["$M",c],["$y",p],["$D",m]].forEach(function(F){j[F[1]]=function(R){return this.$g(R,F[0],F[1])}}),$.extend=function(F,R){return F.$i||(F(R,A,$),F.$i=!0),$},$.locale=M,$.isDayjs=_,$.unix=function(F){return $(1e3*F)},$.en=T[C],$.Ls=T,$.p={},$})})(R2);var L6=R2.exports;const t1=Gp(L6),A6=E.div`
  /* max-width: 800px; */
  margin: 20px auto;

  font-family: var(--second-font);
`;E.h3`
  font-size: 18px;
  color: #4a3632; // Темний колір з твого футера
  margin-bottom: 20px;
  text-transform: uppercase;
  letter-spacing: 1px;
`;const R6=E.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  background: var(--second-background);
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 40px;
`,F6=E.input`
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
`,z6=E.textarea`
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
`,N6=E.button`
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
`,B6=E.div`
  margin-top: 30px;
`,V6=E.div`
  border-bottom: 1px solid #eee;
  padding: 20px 0;
`,U6=E.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
`,H6=E.span`
  font-weight: bold;
  color: #333;
`,W6=E.span`
  font-size: 12px;
  color: #999;
`,G6=E.p`
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

`,q6=E.div`
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
`,n1=({productId:e,questions:t})=>{const[n,r]=b.useState(""),[i,o]=b.useState(""),a=async l=>{l.preventDefault(),(await fetch("https://backenddidiv-production.up.railway.app/api/questions",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({data:{question:n,userName:i,product:e}})})).ok&&(q.success("Запитання надіслано! Воно з’явиться після модерації."),r(""),o(""))};return f.jsxs(A6,{children:[f.jsx(Or,{autoClose:1500}),f.jsxs(R6,{onSubmit:a,children:[f.jsx(F6,{placeholder:"Ваше ім'я",value:i,onChange:l=>o(l.target.value),required:!0}),f.jsx(z6,{placeholder:"Запитайте нас про цей товар...",value:n,onChange:l=>r(l.target.value),required:!0}),f.jsx(N6,{children:"Надіслати запитання"})]}),f.jsx(B6,{children:t&&t.length>0?t.map(l=>l.answer?f.jsxs(V6,{children:[f.jsxs(U6,{children:[f.jsx(H6,{children:l.userName||"Гість"}),f.jsx(W6,{children:new Date(l.createdAt).toLocaleDateString()})]}),f.jsx(G6,{children:l.question}),f.jsxs(Y6,{children:[f.jsx(q6,{children:"Адміністратор"}),f.jsx("p",{children:l.answer})]})]},l.id):null):f.jsx("p",{style:{textAlign:"center",color:"#999"},children:"Запитань поки немає. Будьте першим!"})})]})},X6=()=>{var L;const{id:e}=ay(),[t,n]=b.useState([]),[r,i]=b.useState(1),[o,a]=b.useState("description"),[l,s]=b.useState(null),[u,d]=b.useState(!1),[c,y]=b.useState(0);console.log("products",t);const[p,m]=b.useState(!0),g=t.find(O=>O.id===Number(e)),w=g?t1().diff(t1(g.createdAt),"day")<7:!1,v=(O=>{const[P,I]=b.useState(!1);return b.useEffect(()=>{const z=window.matchMedia(O),B=()=>I(z.matches);return B(),z.addEventListener("change",B),()=>z.removeEventListener("change",B)},[O]),P})("(min-width: 768px)"),x=Ye(O=>O.cart.items),S=g?x.find(O=>O.id===g.id):null,C=(S==null?void 0:S.quantity)||0;b.useEffect(()=>{(async()=>{try{m(!0);const I=await(await fetch(`https://backenddidiv-production.up.railway.app/api/products?filters[id][$eq]=${e}&populate=*`)).json();n(I.data)}catch(P){console.error("Error fetching products:",P)}finally{m(!1)}})()},[e]),console.log(g);const T=(g==null?void 0:g.available)??!0;console.log(T),b.useEffect(()=>{var O,P;g&&g.images&&s((P=(O=g.images)==null?void 0:O[0])==null?void 0:P.url)},[g]);const k=((g==null?void 0:g.images)??[]).map(O=>({src:O.url})),_=()=>{const O=g.images.findIndex(P=>P.url===l);y(O>=0?O:0),d(!0)},M=jn(),D=Ye(O=>O.favorites.items).some(O=>O.id===(g==null?void 0:g.id)),A=()=>{if(C>=g.stock){q.warning("Товар вже в кошику (досягнуто максимум)");return}if(C+r>g.stock){q.warning(`Доступно лише ${g.stock} шт.`);return}M(ho({...g,quantity:r})),q.success(`${g.name} додано в кошик!`)},j=(O,P)=>{P.stopPropagation(),M(ai(O)),D?q.warning(`${O.name} видалено з обраного`):q.info(`${O.name} додано в обране`)},F=(g==null?void 0:g.new_price)&&(g==null?void 0:g.new_price)<g.price,R=F?Math.round((g.price-g.new_price)/g.price*100):0;return p?f.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"100vw",height:"100vh"},children:f.jsx(qa,{height:100,width:100,radius:5,color:"var(--orange-color)",ariaLabel:"ball-triangle-loading",wrapperStyle:{},wrapperClass:"",visible:!0})}):g?f.jsxs(Mv,{children:[" ",f.jsx(Or,{autoClose:1500}),f.jsxs(RD,{children:[f.jsx(Oe,{to:"/",children:"Головна"})," / ",f.jsx(Oe,{to:"/catalog",children:"Каталог"})," /"," ",g.name]}),f.jsxs(FD,{children:[f.jsxs(zD,{children:[f.jsx(ND,{src:l,alt:g.name,onClick:_}),f.jsx(BD,{children:(g.images??[]).map(O=>{const P=O.url;return f.jsx(VD,{src:P,onClick:()=>s(P),style:{cursor:"pointer",opacity:l===P?1:.4}},O.id)})})]}),f.jsx(v6,{open:u,close:()=>d(!1),index:c,slides:k,controller:{closeOnBackdropClick:!0},on:{view:({index:O})=>{var P,I;y(O),(I=(P=g==null?void 0:g.images)==null?void 0:P[O])!=null&&I.url&&s(g.images[O].url)}},plugins:[D6],zoom:{maxZoomPixelRatio:3,zoomInMultiplier:2,doubleTapDelay:300,doubleClickDelay:300,doubleClickEnabled:!0,pinchZoomDistanceFactor:100,scrollToZoom:!0}}),f.jsxs(UD,{children:[f.jsx(HD,{children:g.name}),f.jsx(WD,{children:w&&f.jsx(YD,{children:"● Новий товар"})}),!T&&f.jsx(GD,{children:"● Заброньовано"}),f.jsxs(qD,{children:[f.jsx(XD,{children:F?f.jsxs(f.Fragment,{children:[f.jsxs($v,{$discount:!0,children:[g.new_price.toLocaleString()," грн"]}),f.jsxs(KD,{children:[g.price.toLocaleString()," грн"]}),f.jsxs(QD,{children:["-",R,"%"]})]}):f.jsxs($v,{children:[g.price.toLocaleString()," грн"]})}),f.jsxs(ZD,{children:[f.jsxs(JD,{children:[f.jsx("button",{onClick:()=>i(Math.max(1,r-1)),children:"-"}),f.jsx("span",{children:r}),f.jsxs(oL,{$active:r>=g.stock,children:[f.jsx("button",{onClick:()=>i(Math.min(g.stock,r+1)),disabled:r>=g.stock,children:"+"}),f.jsxs(o2,{children:["Максимум: ",g.stock]})]})]}),f.jsxs(eL,{onClick:A,disabled:!T,children:[" ",f.jsx(po,{size:25}),f.jsx("span",{children:"В КОШИК"})]}),f.jsxs(rL,{$active:D,onClick:O=>j(g,O),children:[f.jsxs(iL,{$active:D,children:[" ",f.jsx("use",{href:`${cn}#icon-heart`})]}),f.jsx("span",{children:"В ОБРАНЕ"})]})]})]})]})]}),!v&&f.jsxs(Lv,{children:[f.jsxs(Av,{children:[f.jsx(Ro,{active:o==="description",onClick:()=>a("description"),children:"Опис"}),f.jsx(Ro,{active:o==="attributes",onClick:()=>a("attributes"),children:"Характеристики"}),f.jsx(Ro,{active:o==="FAQ",onClick:()=>a("FAQ"),children:"Питання та відповіді"})]}),f.jsxs(Rv,{children:[o==="description"&&f.jsx(Fv,{children:g.description}),o==="attributes"&&f.jsx(Iv,{children:(L=g.attributes)!=null&&L.length?g.attributes.map(O=>f.jsxs(Dv,{children:[f.jsx("span",{children:O.label}),f.jsx("b",{children:O.value})]},O.id)):f.jsx("p",{children:"Характеристики відсутні"})}),o==="FAQ"&&f.jsx(n1,{productId:g.documentId,questions:g.questions})]})]}),v&&f.jsxs(nL,{children:[f.jsxs(Lv,{children:[f.jsxs(Av,{children:[f.jsx(Ro,{active:o==="description",onClick:()=>a("description"),children:"Опис"}),f.jsx(Ro,{active:o==="FAQ",onClick:()=>a("FAQ"),children:"Питання та відповіді"})]}),f.jsxs(Rv,{children:[o==="description"&&f.jsx(Fv,{children:g.description}),o==="FAQ"&&f.jsx(n1,{productId:g.documentId,questions:g.questions})]})]}),f.jsxs(Iv,{children:[f.jsx(tL,{children:" Характеристики"}),(()=>{const O=[...g.attributes||[],...g.features||[]];return O.length?O.map((P,I)=>f.jsxs(Dv,{children:[f.jsx("span",{children:P.label}),f.jsx("b",{children:P.value})]},`${P.id}-${I}`)):f.jsx("p",{children:"Характеристики відсутні"})})()]})]})]}):f.jsx(Mv,{children:"Товар не знайдено"})},K6=E.div`
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

  
`,Q6=E.nav`
  font-family: var(--main-font);
  font-size: 14px;
  color: #8c8c8c;
  margin-bottom: 15px;
`,Z6=E.h1`
  font-size:24px;
 
  font-weight: 800;
  margin-bottom: 20px;
  @media screen and (min-width: 768px) {
  font-size:30px;
  }
  
`,J6=E.div`
  display: flex;
  flex-direction: column;
  gap: 20px; 
  width: 100%;
  
  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between; 
  }
`,eA=E.div`
  flex: 1; 
  width: 100%;
  border: 1px solid #eee;
  border-radius: 12px;
`,tA=E.div`
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
`,nA=E.img`
  width: 100%;
  height: auto;
  border-radius: 4px;
`,rA=E.div`
  h3 {
    font-size: 16px;
    font-weight: 300;
    margin: 0;
    line-height: 1.4;
  }
`,iA=E.div`

  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  gap: 30px;
`,oA=E.div`

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
`;const wc=E.div`
  text-align: center;
  width: 100px;
 
`,Sc=E.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 2px;
`,_c=E.span`
  font-size: 18px;
  font-weight: 600;
  color: ${({$discount:e})=>"#111"};
`,Cc=E.span`
  font-size: 13px;
  color: #999;
  text-decoration: line-through;
`,Ec=E.span`
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
`,aA=E.button`
  background: 'none';
  border: 'none';
  cursor: 'pointer';
  color: '#ccc';
`,sA=E.button`
  background: 'none';
  border: 'none';
  cursor: 'pointer';
  color: '#ccc';
`,lA=E.div`

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
`,uA=E.div`
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
`,cA=E(Oe)`
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
`,dA=E.button`
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
`;const fA=E.div`
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
`,pA=E.div`
 font-family: var(--main-font);
  font-size: 14px;
  color: #8c8c8c;
  margin-bottom: 15px;
`,hA=E.div`
  background-color: #fdfaf7;
`,mA=E.div`
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
`;const gA=E.img`
  width: 250px;
  height: auto;
  margin-bottom: 30px;
`,vA=E.h2`
  font-size: 28px;
  color: #333;
  margin-bottom: 10px;
`,yA=E.p`
  font-size: 18px;
  color: #666;
  margin-bottom: 40px;
`,xA=E.button`
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
`,bA=()=>f.jsx(hA,{children:f.jsxs(fA,{children:[f.jsx(pA,{children:"Головна / Кошик"}),f.jsxs(mA,{children:[f.jsx(gA,{src:"/Didiv/empty-cart.png",alt:"Порожній кошик"}),f.jsx(vA,{children:"Ваш кошик порожній"}),f.jsx(yA,{children:"Ви ще не додали жодного товару в кошик"}),f.jsx(xA,{onClick:()=>window.location.href="/Didiv/catalog",children:"Перейти до покупок"})]})]})}),wA=E.div`
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
`,SA=({item:e})=>{const t=jn();return f.jsxs(wA,{children:[f.jsx("button",{onClick:()=>t(W4(e.id)),children:"-"}),f.jsx("span",{children:e.quantity}),f.jsx("button",{onClick:()=>t(H4({id:e.id,stock:e.stock})),disabled:e.quantity>=e.stock,children:"+"})]})},_A=()=>{const e=jn(),t=On(),[n,r]=b.useState([]),i=Ye(p=>p.cart.items),a=Ye(p=>p.cart.items).reduce((p,m)=>p+m.quantity,0),l=i.reduce((p,m)=>p+(m.new_price??m.price)*(m.quantity||1),0),s=Ye(p=>p.favorites.items),u=i.length===0,d=(p,m)=>{m.stopPropagation(),console.log(p);const g=s.some(w=>w.id===p.id);e(ai(p)),g?q.warning(`${p.name} видалено з обраного`):q.info(`${p.name} додано в обране`)},c=p=>{r(m=>[...m,p.id]),setTimeout(()=>{e(V4(p)),r(m=>m.filter(g=>g!==p.id))},300)},y=()=>{e(am())};return f.jsx(f.Fragment,{children:u?f.jsx(bA,{}):f.jsxs(K6,{children:[f.jsx(Or,{autoClose:1500}),f.jsxs(Q6,{children:[" ",f.jsx(Oe,{to:"/",style:{color:"inherit",textDecoration:"none"},children:"Головна"})," ","/"," ",f.jsx(Oe,{to:"/cart",style:{color:"inherit",textDecoration:"none"},children:"Кошик"})]}),f.jsx(Z6,{children:"Кошик"}),f.jsxs(J6,{children:[f.jsx(eA,{children:i.map((p,m)=>{var x,S;console.log(p);const g=s.some(C=>C.id===p.id),w=p.new_price&&p.new_price<p.price,h=w?p.new_price:p.price,v=w?Math.round((p.price-p.new_price)/p.price*100):0;return f.jsxs(tA,{className:n.includes(p.id)?"removing":"",children:[f.jsx(nA,{src:((S=(x=p.images)==null?void 0:x[0])==null?void 0:S.url)||"/nofoto.png",alt:p.name,onClick:()=>t(`/product/${p.id}`),onError:C=>{C.currentTarget.onerror=null,C.currentTarget.src=no}}),f.jsx(rA,{children:f.jsx("h3",{children:p.name})}),f.jsxs(iA,{children:[f.jsx(SA,{item:{...p,quantity:p.quantity||1}}),f.jsx(wc,{children:f.jsxs(Sc,{children:[f.jsxs(_c,{$discount:w,children:[(h*(p.quantity||1)).toLocaleString()," грн"]}),w&&f.jsxs(f.Fragment,{children:[f.jsxs(Cc,{children:[(p.price*(p.quantity||1)).toLocaleString()," грн"]}),f.jsxs(Ec,{children:["-",v,"%"]})]})]})})]}),f.jsxs(oA,{children:[f.jsx(sA,{onClick:C=>d(p,C),style:{background:"none",border:"none",cursor:"pointer",color:"#ccc"},children:f.jsx(Ua,{size:22,fill:g?"#ff4d4f":"none",color:g?"#ff4d4f":"#999"})}),f.jsx(aA,{onClick:()=>c(p),style:{background:"none",border:"none",cursor:"pointer",color:"#000000"},children:f.jsx(Ub,{size:22})})]})]},`${p.id}-${m}`)})}),f.jsxs(lA,{children:[f.jsxs(uA,{children:[f.jsx("span",{children:"Всього в обраному:"}),f.jsxs("strong",{children:[a," шт."]}),f.jsx("span",{children:"На суму:"}),f.jsxs("strong",{children:[l," грн"]})]}),f.jsx(cA,{to:"/checkout",children:"Оформити замовлення"}),f.jsx(dA,{onClick:y,children:"Oчистити кошик"})]})]})]})})},CA=E.div`
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
`,EA=E.nav`
  font-family: var(--main-font);
  font-size: 14px;
  color: #8c8c8c;
  margin-bottom: 15px;
`,kA=E.h1`
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
`,TA=E.div`
   flex: 1; 
  width: 100%;
  border: 1px solid #eee;
  border-radius: 12px;
`,OA=E.div`
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
`,jA=E.div`
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
`;E.div`
  display: flex;
  align-items: center;
  gap: 20px;
  flex: 1;
`;const MA=E.div`
  position: relative;
`,$A=E.img`
   width: 100%;
  height: auto;
  border-radius: 4px;
`,IA=E.h3`
 font-size: 20px;
    font-weight: 300;
    margin: 0;
    line-height: 1.4;
    @media screen and (max-width: 768px) {
    border-bottom: 1px solid #eee;
    padding-bottom:10px;
  }
    
`,DA=E.div`
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
`;const LA=E.div`
  display: flex;
  gap: 16px;
`,r1=E.button`
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
`,AA=E.div`
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
`,RA=E.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  font-size: 15px;
  color: #555;
`,FA=E.button`
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
`,zA=E.button`
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
`,NA=E.div`
  padding: 20px 40px;
  font-size: 14px;
  color: #8c8c8c;
  background-color: #fdfaf7;
`,BA=E.div`
   
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
`;const VA=E.img`
  width: 250px;
  height: auto;
  margin-bottom: 30px;
`;E.h2`
  font-size: 28px;
  color: #333;
  margin-bottom: 10px;
`;const UA=E.p`
  font-size: 18px;
  color: #666;
  margin-bottom: 40px;
`,HA=E.button`
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
`,WA=()=>f.jsxs(f.Fragment,{children:[f.jsx(NA,{children:"Головна / Обране"}),f.jsxs(BA,{children:[f.jsx(VA,{src:"/Didiv/sad.png",alt:"Порожній кошик"}),f.jsx(UA,{children:"Ви ще не додали жодного товару в обране"}),f.jsx(HA,{onClick:()=>window.location.href="/Didiv/catalog",children:"Перейти до вибору"})]})]}),GA=()=>{const e=jn(),t=On(),n=Ye(c=>c.favorites.items);console.log(n);const[r,i]=b.useState([]),o=Ye(c=>c.cart.items),a=()=>{const c=n.filter(y=>y.available!==!1).map(y=>{const p=o.find(w=>w.id===y.id),m=p?p.quantity:0,g=y.stock-m;return g<=0?null:{...y,quantity:g}}).filter(Boolean);if(c.length===0){q.error("Усі товари вже в максимальній кількості");return}e(U4(c)),q.success("Додано максимально доступну кількість товарів")};console.log(n);const l=n.reduce((c,y)=>c+(y.new_price??y.price)*(y.quantity||1),0),s=(c,y)=>{y.stopPropagation();const p=n.some(m=>m.id===c.id);i(m=>[...m,c.id]),setTimeout(()=>{e(ai(c)),i(m=>m.filter(g=>g!==c.id))},300),p?q.warning(`${c.name} видалено з обраного`):q.info(`${c.name} додано в обране`)},u=()=>{e(Nj())},d=n.length===0;return f.jsx(f.Fragment,{children:d?f.jsx(WA,{}):f.jsxs(CA,{children:[f.jsx(Or,{autoClose:1500}),f.jsxs(EA,{children:[" ",f.jsx(Oe,{to:"/",style:{color:"inherit",textDecoration:"none"},children:"Головна"})," ","/"," ",f.jsx(Oe,{to:"/favorite",style:{color:"inherit",textDecoration:"none"},children:"Обране"})]}),f.jsx(kA,{children:"Обране"}),f.jsxs(PA,{children:[f.jsx(TA,{children:n.map(c=>{var h,v;const y=c.new_price&&c.new_price<c.price,p=y?c.new_price:c.price,m=(c==null?void 0:c.available)??!0,g=y?Math.round((c.price-c.new_price)/c.price*100):0,w=x=>{const S=o.find(T=>T.id===x.id);if((S?S.quantity:0)>=x.stock){q.error(`Вибачте, доступно лише ${x.stock} шт.`);return}e(ho(x)),q.success(`${x.name} додано в кошик!`)};return f.jsxs(OA,{className:r.includes(c.id)?"removing":"",children:[!m&&f.jsx(jA,{children:"Заброньовано"}),f.jsx(MA,{children:f.jsx($A,{src:((v=(h=c.images)==null?void 0:h[0])==null?void 0:v.url)||"/nofoto.png",alt:c.name,onClick:()=>t(`/product/${c.id}`),onError:x=>{x.currentTarget.onerror=null,x.currentTarget.src="/nofoto.png"}})}),f.jsx(IA,{children:c.name}),f.jsxs(DA,{children:[f.jsx(wc,{children:f.jsxs(Sc,{children:[f.jsxs(_c,{$discount:y,children:[(p*(c.quantity||1)).toLocaleString()," ","грн"]}),y&&f.jsxs(f.Fragment,{children:[f.jsxs(Cc,{children:[(c.price*(c.quantity||1)).toLocaleString()," ","грн"]}),f.jsxs(Ec,{children:["-",g,"%"]})]})]})}),f.jsxs(LA,{children:[f.jsx(r1,{onClick:()=>w(c),disabled:!m,children:f.jsx(po,{size:30})}),f.jsx(r1,{onClick:x=>s(c,x),children:f.jsx(Ub,{size:30})})]})]})]},c.id)})}),f.jsxs(AA,{children:[f.jsxs(RA,{children:[f.jsx("span",{children:"Всього в обраному:"}),f.jsxs("strong",{children:[n.length," шт."]}),f.jsx("span",{children:"На суму:"}),f.jsxs("strong",{children:[l," грн"]})]}),f.jsx("hr",{style:{border:"0",borderTop:"1px solid #eee",margin:"20px 0"}}),f.jsx(FA,{onClick:()=>a(),children:"Додати все до кошика"}),f.jsx(zA,{onClick:u,children:"Очистити обрані"})]})]})]})})},YA=E.div`
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
`,XA=E.article`
  max-width: 800px; // Обмежуємо ширину для зручного читання тексту
  margin: 0 auto;
  padding: 0 20px;

  @media screen and (min-width: 768px) {
    padding: 0 40px;
  }
`,KA=E.h1`
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
`;const QA=({title:e,children:t,breadcrumbPath:n})=>f.jsxs(YA,{children:[f.jsxs(qA,{children:["Головна / ",n]}),f.jsxs(XA,{children:[f.jsx(KA,{children:e}),t]})]}),i1=E.section`
  margin-bottom: 30px;

  @media screen and (min-width: 768px) {
    margin-bottom: 40px;
  }
`,o1=E.h2`
  font-size: 20px;
  color: #4a332a;
  margin-bottom: 15px;
  font-weight: 600;

  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`,a1=E.p`
  font-size: 16px;
  line-height: 1.6;
  color: #555;
  margin-bottom: 15px;
`,s1=E.ul`
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
`,ZA=()=>f.jsxs(QA,{title:"Оплата і доставка",breadcrumbPath:"Доставка",children:[f.jsxs(i1,{children:[f.jsx(o1,{children:"Способи доставки"}),f.jsx(a1,{children:"Ми доставляємо замовлення по всій Україні за допомогою:"}),f.jsxs(s1,{children:[f.jsx("li",{children:"Нова Пошта (у відділення або кур1єром)"}),f.jsx("li",{children:"Самовивіз з нашого магазину"}),f.jsx("li",{children:"Укрпошта"})]})]}),f.jsxs(i1,{children:[f.jsx(o1,{children:"Варіанти оплати"}),f.jsx(a1,{children:"Ви можете обрати зручний для вас спосіб оплати:"}),f.jsxs(s1,{children:[f.jsx("li",{children:"Оплата карткою на сайті (Visa/Mastercard)"}),f.jsx("li",{children:"Післяплата (накладений платіж) при отриманні"}),f.jsx("li",{children:"Безготівковий розрахунок"})]})]})]});function ni(e){"@babel/helpers - typeof";return ni=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ni(e)}function JA(e,t){if(ni(e)!=="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(ni(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function F2(e){var t=JA(e,"string");return ni(t)==="symbol"?t:String(t)}function Go(e,t,n){return t=F2(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l1(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Z(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?l1(Object(n),!0).forEach(function(r){Go(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l1(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function eR(e){if(Array.isArray(e))return e}function tR(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,i,o,a,l=[],s=!0,u=!1;try{if(o=(n=n.call(e)).next,t===0){if(Object(n)!==n)return;s=!1}else for(;!(s=(r=o.call(n)).done)&&(l.push(r.value),l.length!==t);s=!0);}catch(d){u=!0,i=d}finally{try{if(!s&&n.return!=null&&(a=n.return(),Object(a)!==a))return}finally{if(u)throw i}}return l}}function Rp(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function z2(e,t){if(e){if(typeof e=="string")return Rp(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Rp(e,t)}}function nR(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Un(e,t){return eR(e)||tR(e,t)||z2(e,t)||nR()}function rR(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function tr(e,t){if(e==null)return{};var n=rR(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var iR=["defaultInputValue","defaultMenuIsOpen","defaultValue","inputValue","menuIsOpen","onChange","onInputChange","onMenuClose","onMenuOpen","value"];function oR(e){var t=e.defaultInputValue,n=t===void 0?"":t,r=e.defaultMenuIsOpen,i=r===void 0?!1:r,o=e.defaultValue,a=o===void 0?null:o,l=e.inputValue,s=e.menuIsOpen,u=e.onChange,d=e.onInputChange,c=e.onMenuClose,y=e.onMenuOpen,p=e.value,m=tr(e,iR),g=b.useState(l!==void 0?l:n),w=Un(g,2),h=w[0],v=w[1],x=b.useState(s!==void 0?s:i),S=Un(x,2),C=S[0],T=S[1],k=b.useState(p!==void 0?p:a),_=Un(k,2),M=_[0],$=_[1],D=b.useCallback(function(P,I){typeof u=="function"&&u(P,I),$(P)},[u]),A=b.useCallback(function(P,I){var z;typeof d=="function"&&(z=d(P,I)),v(z!==void 0?z:P)},[d]),j=b.useCallback(function(){typeof y=="function"&&y(),T(!0)},[y]),F=b.useCallback(function(){typeof c=="function"&&c(),T(!1)},[c]),R=l!==void 0?l:h,L=s!==void 0?s:C,O=p!==void 0?p:M;return Z(Z({},m),{},{inputValue:R,menuIsOpen:L,onChange:D,onInputChange:A,onMenuClose:F,onMenuOpen:j,value:O})}function aR(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u1(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,F2(r.key),r)}}function sR(e,t,n){return t&&u1(e.prototype,t),n&&u1(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function Fp(e,t){return Fp=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},Fp(e,t)}function lR(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Fp(e,t)}function eu(e){return eu=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},eu(e)}function uR(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function cR(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function dR(e,t){if(t&&(ni(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return cR(e)}function fR(e){var t=uR();return function(){var r=eu(e),i;if(t){var o=eu(this).constructor;i=Reflect.construct(r,arguments,o)}else i=r.apply(this,arguments);return dR(this,i)}}function pR(e){if(Array.isArray(e))return Rp(e)}function hR(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function mR(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Vm(e){return pR(e)||hR(e)||z2(e)||mR()}function gR(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}const vR=Math.min,yR=Math.max,tu=Math.round,ks=Math.floor,nu=e=>({x:e,y:e});function xR(e){const{x:t,y:n,width:r,height:i}=e;return{width:r,height:i,top:n,left:t,right:t+r,bottom:n+i,x:t,y:n}}function kc(){return typeof window<"u"}function N2(e){return V2(e)?(e.nodeName||"").toLowerCase():"#document"}function dn(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function B2(e){var t;return(t=(V2(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function V2(e){return kc()?e instanceof Node||e instanceof dn(e).Node:!1}function zp(e){return kc()?e instanceof Element||e instanceof dn(e).Element:!1}function Um(e){return kc()?e instanceof HTMLElement||e instanceof dn(e).HTMLElement:!1}function c1(e){return!kc()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof dn(e).ShadowRoot}function U2(e){const{overflow:t,overflowX:n,overflowY:r,display:i}=Hm(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&i!=="inline"&&i!=="contents"}let Vd;function bR(){return Vd==null&&(Vd=typeof CSS<"u"&&CSS.supports&&CSS.supports("-webkit-backdrop-filter","none")),Vd}function wR(e){return/^(html|body|#document)$/.test(N2(e))}function Hm(e){return dn(e).getComputedStyle(e)}function SR(e){if(N2(e)==="html")return e;const t=e.assignedSlot||e.parentNode||c1(e)&&e.host||B2(e);return c1(t)?t.host:t}function H2(e){const t=SR(e);return wR(t)?e.ownerDocument?e.ownerDocument.body:e.body:Um(t)&&U2(t)?t:H2(t)}function ru(e,t,n){var r;t===void 0&&(t=[]),n===void 0&&(n=!0);const i=H2(e),o=i===((r=e.ownerDocument)==null?void 0:r.body),a=dn(i);if(o){const l=Np(a);return t.concat(a,a.visualViewport||[],U2(i)?i:[],l&&n?ru(l):[])}else return t.concat(i,ru(i,[],n))}function Np(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function _R(e){const t=Hm(e);let n=parseFloat(t.width)||0,r=parseFloat(t.height)||0;const i=Um(e),o=i?e.offsetWidth:n,a=i?e.offsetHeight:r,l=tu(n)!==o||tu(r)!==a;return l&&(n=o,r=a),{width:n,height:r,$:l}}function Wm(e){return zp(e)?e:e.contextElement}function Ud(e){const t=Wm(e);if(!Um(t))return nu(1);const n=t.getBoundingClientRect(),{width:r,height:i,$:o}=_R(t);let a=(o?tu(n.width):n.width)/r,l=(o?tu(n.height):n.height)/i;return(!a||!Number.isFinite(a))&&(a=1),(!l||!Number.isFinite(l))&&(l=1),{x:a,y:l}}const CR=nu(0);function ER(e){const t=dn(e);return!bR()||!t.visualViewport?CR:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function kR(e,t,n){return t===void 0&&(t=!1),!n||t&&n!==dn(e)?!1:t}function d1(e,t,n,r){t===void 0&&(t=!1),n===void 0&&(n=!1);const i=e.getBoundingClientRect(),o=Wm(e);let a=nu(1);t&&(r?zp(r)&&(a=Ud(r)):a=Ud(e));const l=kR(o,n,r)?ER(o):nu(0);let s=(i.left+l.x)/a.x,u=(i.top+l.y)/a.y,d=i.width/a.x,c=i.height/a.y;if(o){const y=dn(o),p=r&&zp(r)?dn(r):r;let m=y,g=Np(m);for(;g&&r&&p!==m;){const w=Ud(g),h=g.getBoundingClientRect(),v=Hm(g),x=h.left+(g.clientLeft+parseFloat(v.paddingLeft))*w.x,S=h.top+(g.clientTop+parseFloat(v.paddingTop))*w.y;s*=w.x,u*=w.y,d*=w.x,c*=w.y,s+=x,u+=S,m=dn(g),g=Np(m)}}return xR({width:d,height:c,x:s,y:u})}function W2(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function PR(e,t){let n=null,r;const i=B2(e);function o(){var l;clearTimeout(r),(l=n)==null||l.disconnect(),n=null}function a(l,s){l===void 0&&(l=!1),s===void 0&&(s=1),o();const u=e.getBoundingClientRect(),{left:d,top:c,width:y,height:p}=u;if(l||t(),!y||!p)return;const m=ks(c),g=ks(i.clientWidth-(d+y)),w=ks(i.clientHeight-(c+p)),h=ks(d),x={rootMargin:-m+"px "+-g+"px "+-w+"px "+-h+"px",threshold:yR(0,vR(1,s))||1};let S=!0;function C(T){const k=T[0].intersectionRatio;if(k!==s){if(!S)return a();k?a(!1,k):r=setTimeout(()=>{a(!1,1e-7)},1e3)}k===1&&!W2(u,e.getBoundingClientRect())&&a(),S=!1}try{n=new IntersectionObserver(C,{...x,root:i.ownerDocument})}catch{n=new IntersectionObserver(C,x)}n.observe(e)}return a(!0),o}function TR(e,t,n,r){r===void 0&&(r={});const{ancestorScroll:i=!0,ancestorResize:o=!0,elementResize:a=typeof ResizeObserver=="function",layoutShift:l=typeof IntersectionObserver=="function",animationFrame:s=!1}=r,u=Wm(e),d=i||o?[...u?ru(u):[],...t?ru(t):[]]:[];d.forEach(h=>{i&&h.addEventListener("scroll",n,{passive:!0}),o&&h.addEventListener("resize",n)});const c=u&&l?PR(u,n):null;let y=-1,p=null;a&&(p=new ResizeObserver(h=>{let[v]=h;v&&v.target===u&&p&&t&&(p.unobserve(t),cancelAnimationFrame(y),y=requestAnimationFrame(()=>{var x;(x=p)==null||x.observe(t)})),n()}),u&&!s&&p.observe(u),t&&p.observe(t));let m,g=s?d1(e):null;s&&w();function w(){const h=d1(e);g&&!W2(g,h)&&n(),g=h,m=requestAnimationFrame(w)}return n(),()=>{var h;d.forEach(v=>{i&&v.removeEventListener("scroll",n),o&&v.removeEventListener("resize",n)}),c==null||c(),(h=p)==null||h.disconnect(),p=null,s&&cancelAnimationFrame(m)}}var Bp=b.useLayoutEffect,OR=["className","clearValue","cx","getStyles","getClassNames","getValue","hasValue","isMulti","isRtl","options","selectOption","selectProps","setValue","theme"],iu=function(){};function jR(e,t){return t?t[0]==="-"?e+t:e+"__"+t:e}function MR(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var o=[].concat(r);if(t&&e)for(var a in t)t.hasOwnProperty(a)&&t[a]&&o.push("".concat(jR(e,a)));return o.filter(function(l){return l}).map(function(l){return String(l).trim()}).join(" ")}var f1=function(t){return NR(t)?t.filter(Boolean):ni(t)==="object"&&t!==null?[t]:[]},G2=function(t){t.className,t.clearValue,t.cx,t.getStyles,t.getClassNames,t.getValue,t.hasValue,t.isMulti,t.isRtl,t.options,t.selectOption,t.selectProps,t.setValue,t.theme;var n=tr(t,OR);return Z({},n)},Te=function(t,n,r){var i=t.cx,o=t.getStyles,a=t.getClassNames,l=t.className;return{css:o(n,t),className:i(r??{},a(n,t),l)}};function Pc(e){return[document.documentElement,document.body,window].indexOf(e)>-1}function $R(e){return Pc(e)?window.innerHeight:e.clientHeight}function Y2(e){return Pc(e)?window.pageYOffset:e.scrollTop}function ou(e,t){if(Pc(e)){window.scrollTo(0,t);return}e.scrollTop=t}function IR(e){var t=getComputedStyle(e),n=t.position==="absolute",r=/(auto|scroll)/;if(t.position==="fixed")return document.documentElement;for(var i=e;i=i.parentElement;)if(t=getComputedStyle(i),!(n&&t.position==="static")&&r.test(t.overflow+t.overflowY+t.overflowX))return i;return document.documentElement}function DR(e,t,n,r){return n*((e=e/r-1)*e*e+1)+t}function Ps(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:200,r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:iu,i=Y2(e),o=t-i,a=10,l=0;function s(){l+=a;var u=DR(l,i,o,n);ou(e,u),l<n?window.requestAnimationFrame(s):r(e)}s()}function p1(e,t){var n=e.getBoundingClientRect(),r=t.getBoundingClientRect(),i=t.offsetHeight/3;r.bottom+i>n.bottom?ou(e,Math.min(t.offsetTop+t.clientHeight-e.offsetHeight+i,e.scrollHeight)):r.top-i<n.top&&ou(e,Math.max(t.offsetTop-i,0))}function LR(e){var t=e.getBoundingClientRect();return{bottom:t.bottom,height:t.height,left:t.left,right:t.right,top:t.top,width:t.width}}function h1(){try{return document.createEvent("TouchEvent"),!0}catch{return!1}}function AR(){try{return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}catch{return!1}}var q2=!1,RR={get passive(){return q2=!0}},Ts=typeof window<"u"?window:{};Ts.addEventListener&&Ts.removeEventListener&&(Ts.addEventListener("p",iu,RR),Ts.removeEventListener("p",iu,!1));var FR=q2;function zR(e){return e!=null}function NR(e){return Array.isArray(e)}function Os(e,t,n){return e?t:n}var BR=function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];var o=Object.entries(t).filter(function(a){var l=Un(a,1),s=l[0];return!r.includes(s)});return o.reduce(function(a,l){var s=Un(l,2),u=s[0],d=s[1];return a[u]=d,a},{})},VR=["children","innerProps"],UR=["children","innerProps"];function HR(e){var t=e.maxHeight,n=e.menuEl,r=e.minHeight,i=e.placement,o=e.shouldScroll,a=e.isFixedPosition,l=e.controlHeight,s=IR(n),u={placement:"bottom",maxHeight:t};if(!n||!n.offsetParent)return u;var d=s.getBoundingClientRect(),c=d.height,y=n.getBoundingClientRect(),p=y.bottom,m=y.height,g=y.top,w=n.offsetParent.getBoundingClientRect(),h=w.top,v=a?window.innerHeight:$R(s),x=Y2(s),S=parseInt(getComputedStyle(n).marginBottom,10),C=parseInt(getComputedStyle(n).marginTop,10),T=h-C,k=v-g,_=T+x,M=c-x-g,$=p-v+x+S,D=x+g-C,A=160;switch(i){case"auto":case"bottom":if(k>=m)return{placement:"bottom",maxHeight:t};if(M>=m&&!a)return o&&Ps(s,$,A),{placement:"bottom",maxHeight:t};if(!a&&M>=r||a&&k>=r){o&&Ps(s,$,A);var j=a?k-S:M-S;return{placement:"bottom",maxHeight:j}}if(i==="auto"||a){var F=t,R=a?T:_;return R>=r&&(F=Math.min(R-S-l,t)),{placement:"top",maxHeight:F}}if(i==="bottom")return o&&ou(s,$),{placement:"bottom",maxHeight:t};break;case"top":if(T>=m)return{placement:"top",maxHeight:t};if(_>=m&&!a)return o&&Ps(s,D,A),{placement:"top",maxHeight:t};if(!a&&_>=r||a&&T>=r){var L=t;return(!a&&_>=r||a&&T>=r)&&(L=a?T-C:_-C),o&&Ps(s,D,A),{placement:"top",maxHeight:L}}return{placement:"bottom",maxHeight:t};default:throw new Error('Invalid placement provided "'.concat(i,'".'))}return u}function WR(e){var t={bottom:"top",top:"bottom"};return e?t[e]:"bottom"}var X2=function(t){return t==="auto"?"bottom":t},GR=function(t,n){var r,i=t.placement,o=t.theme,a=o.borderRadius,l=o.spacing,s=o.colors;return Z((r={label:"menu"},Go(r,WR(i),"100%"),Go(r,"position","absolute"),Go(r,"width","100%"),Go(r,"zIndex",1),r),n?{}:{backgroundColor:s.neutral0,borderRadius:a,boxShadow:"0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)",marginBottom:l.menuGutter,marginTop:l.menuGutter})},K2=b.createContext(null),YR=function(t){var n=t.children,r=t.minMenuHeight,i=t.maxMenuHeight,o=t.menuPlacement,a=t.menuPosition,l=t.menuShouldScrollIntoView,s=t.theme,u=b.useContext(K2)||{},d=u.setPortalPlacement,c=b.useRef(null),y=b.useState(i),p=Un(y,2),m=p[0],g=p[1],w=b.useState(null),h=Un(w,2),v=h[0],x=h[1],S=s.spacing.controlHeight;return Bp(function(){var C=c.current;if(C){var T=a==="fixed",k=l&&!T,_=HR({maxHeight:i,menuEl:C,minHeight:r,placement:o,shouldScroll:k,isFixedPosition:T,controlHeight:S});g(_.maxHeight),x(_.placement),d==null||d(_.placement)}},[i,o,a,l,r,d,S]),n({ref:c,placerProps:Z(Z({},t),{},{placement:v||X2(o),maxHeight:m})})},qR=function(t){var n=t.children,r=t.innerRef,i=t.innerProps;return Q("div",J({},Te(t,"menu",{menu:!0}),{ref:r},i),n)},XR=qR,KR=function(t,n){var r=t.maxHeight,i=t.theme.spacing.baseUnit;return Z({maxHeight:r,overflowY:"auto",position:"relative",WebkitOverflowScrolling:"touch"},n?{}:{paddingBottom:i,paddingTop:i})},QR=function(t){var n=t.children,r=t.innerProps,i=t.innerRef,o=t.isMulti;return Q("div",J({},Te(t,"menuList",{"menu-list":!0,"menu-list--is-multi":o}),{ref:i},r),n)},Q2=function(t,n){var r=t.theme,i=r.spacing.baseUnit,o=r.colors;return Z({textAlign:"center"},n?{}:{color:o.neutral40,padding:"".concat(i*2,"px ").concat(i*3,"px")})},ZR=Q2,JR=Q2,e8=function(t){var n=t.children,r=n===void 0?"No options":n,i=t.innerProps,o=tr(t,VR);return Q("div",J({},Te(Z(Z({},o),{},{children:r,innerProps:i}),"noOptionsMessage",{"menu-notice":!0,"menu-notice--no-options":!0}),i),r)},t8=function(t){var n=t.children,r=n===void 0?"Loading...":n,i=t.innerProps,o=tr(t,UR);return Q("div",J({},Te(Z(Z({},o),{},{children:r,innerProps:i}),"loadingMessage",{"menu-notice":!0,"menu-notice--loading":!0}),i),r)},n8=function(t){var n=t.rect,r=t.offset,i=t.position;return{left:n.left,position:i,top:r,width:n.width,zIndex:1}},r8=function(t){var n=t.appendTo,r=t.children,i=t.controlElement,o=t.innerProps,a=t.menuPlacement,l=t.menuPosition,s=b.useRef(null),u=b.useRef(null),d=b.useState(X2(a)),c=Un(d,2),y=c[0],p=c[1],m=b.useMemo(function(){return{setPortalPlacement:p}},[]),g=b.useState(null),w=Un(g,2),h=w[0],v=w[1],x=b.useCallback(function(){if(i){var k=LR(i),_=l==="fixed"?0:window.pageYOffset,M=k[y]+_;(M!==(h==null?void 0:h.offset)||k.left!==(h==null?void 0:h.rect.left)||k.width!==(h==null?void 0:h.rect.width))&&v({offset:M,rect:k})}},[i,l,y,h==null?void 0:h.offset,h==null?void 0:h.rect.left,h==null?void 0:h.rect.width]);Bp(function(){x()},[x]);var S=b.useCallback(function(){typeof u.current=="function"&&(u.current(),u.current=null),i&&s.current&&(u.current=TR(i,s.current,x,{elementResize:"ResizeObserver"in window}))},[i,x]);Bp(function(){S()},[S]);var C=b.useCallback(function(k){s.current=k,S()},[S]);if(!n&&l!=="fixed"||!h)return null;var T=Q("div",J({ref:C},Te(Z(Z({},t),{},{offset:h.offset,position:l,rect:h.rect}),"menuPortal",{"menu-portal":!0}),o),r);return Q(K2.Provider,{value:m},n?Eu.createPortal(T,n):T)},i8=function(t){var n=t.isDisabled,r=t.isRtl;return{label:"container",direction:r?"rtl":void 0,pointerEvents:n?"none":void 0,position:"relative"}},o8=function(t){var n=t.children,r=t.innerProps,i=t.isDisabled,o=t.isRtl;return Q("div",J({},Te(t,"container",{"--is-disabled":i,"--is-rtl":o}),r),n)},a8=function(t,n){var r=t.theme.spacing,i=t.isMulti,o=t.hasValue,a=t.selectProps.controlShouldRenderValue;return Z({alignItems:"center",display:i&&o&&a?"flex":"grid",flex:1,flexWrap:"wrap",WebkitOverflowScrolling:"touch",position:"relative",overflow:"hidden"},n?{}:{padding:"".concat(r.baseUnit/2,"px ").concat(r.baseUnit*2,"px")})},s8=function(t){var n=t.children,r=t.innerProps,i=t.isMulti,o=t.hasValue;return Q("div",J({},Te(t,"valueContainer",{"value-container":!0,"value-container--is-multi":i,"value-container--has-value":o}),r),n)},l8=function(){return{alignItems:"center",alignSelf:"stretch",display:"flex",flexShrink:0}},u8=function(t){var n=t.children,r=t.innerProps;return Q("div",J({},Te(t,"indicatorsContainer",{indicators:!0}),r),n)},m1,c8=["size"],d8=["innerProps","isRtl","size"],f8={name:"8mmkcg",styles:"display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0"},Z2=function(t){var n=t.size,r=tr(t,c8);return Q("svg",J({height:n,width:n,viewBox:"0 0 20 20","aria-hidden":"true",focusable:"false",css:f8},r))},Gm=function(t){return Q(Z2,J({size:20},t),Q("path",{d:"M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"}))},J2=function(t){return Q(Z2,J({size:20},t),Q("path",{d:"M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"}))},e_=function(t,n){var r=t.isFocused,i=t.theme,o=i.spacing.baseUnit,a=i.colors;return Z({label:"indicatorContainer",display:"flex",transition:"color 150ms"},n?{}:{color:r?a.neutral60:a.neutral20,padding:o*2,":hover":{color:r?a.neutral80:a.neutral40}})},p8=e_,h8=function(t){var n=t.children,r=t.innerProps;return Q("div",J({},Te(t,"dropdownIndicator",{indicator:!0,"dropdown-indicator":!0}),r),n||Q(J2,null))},m8=e_,g8=function(t){var n=t.children,r=t.innerProps;return Q("div",J({},Te(t,"clearIndicator",{indicator:!0,"clear-indicator":!0}),r),n||Q(Gm,null))},v8=function(t,n){var r=t.isDisabled,i=t.theme,o=i.spacing.baseUnit,a=i.colors;return Z({label:"indicatorSeparator",alignSelf:"stretch",width:1},n?{}:{backgroundColor:r?a.neutral10:a.neutral20,marginBottom:o*2,marginTop:o*2})},y8=function(t){var n=t.innerProps;return Q("span",J({},n,Te(t,"indicatorSeparator",{"indicator-separator":!0})))},x8=F3(m1||(m1=gR([`
  0%, 80%, 100% { opacity: 0; }
  40% { opacity: 1; }
`]))),b8=function(t,n){var r=t.isFocused,i=t.size,o=t.theme,a=o.colors,l=o.spacing.baseUnit;return Z({label:"loadingIndicator",display:"flex",transition:"color 150ms",alignSelf:"center",fontSize:i,lineHeight:1,marginRight:i,textAlign:"center",verticalAlign:"middle"},n?{}:{color:r?a.neutral60:a.neutral20,padding:l*2})},Hd=function(t){var n=t.delay,r=t.offset;return Q("span",{css:vm({animation:"".concat(x8," 1s ease-in-out ").concat(n,"ms infinite;"),backgroundColor:"currentColor",borderRadius:"1em",display:"inline-block",marginLeft:r?"1em":void 0,height:"1em",verticalAlign:"top",width:"1em"},"","")})},w8=function(t){var n=t.innerProps,r=t.isRtl,i=t.size,o=i===void 0?4:i,a=tr(t,d8);return Q("div",J({},Te(Z(Z({},a),{},{innerProps:n,isRtl:r,size:o}),"loadingIndicator",{indicator:!0,"loading-indicator":!0}),n),Q(Hd,{delay:0,offset:r}),Q(Hd,{delay:160,offset:!0}),Q(Hd,{delay:320,offset:!r}))},S8=function(t,n){var r=t.isDisabled,i=t.isFocused,o=t.theme,a=o.colors,l=o.borderRadius,s=o.spacing;return Z({label:"control",alignItems:"center",cursor:"default",display:"flex",flexWrap:"wrap",justifyContent:"space-between",minHeight:s.controlHeight,outline:"0 !important",position:"relative",transition:"all 100ms"},n?{}:{backgroundColor:r?a.neutral5:a.neutral0,borderColor:r?a.neutral10:i?a.primary:a.neutral20,borderRadius:l,borderStyle:"solid",borderWidth:1,boxShadow:i?"0 0 0 1px ".concat(a.primary):void 0,"&:hover":{borderColor:i?a.primary:a.neutral30}})},_8=function(t){var n=t.children,r=t.isDisabled,i=t.isFocused,o=t.innerRef,a=t.innerProps,l=t.menuIsOpen;return Q("div",J({ref:o},Te(t,"control",{control:!0,"control--is-disabled":r,"control--is-focused":i,"control--menu-is-open":l}),a,{"aria-disabled":r||void 0}),n)},C8=_8,E8=["data"],k8=function(t,n){var r=t.theme.spacing;return n?{}:{paddingBottom:r.baseUnit*2,paddingTop:r.baseUnit*2}},P8=function(t){var n=t.children,r=t.cx,i=t.getStyles,o=t.getClassNames,a=t.Heading,l=t.headingProps,s=t.innerProps,u=t.label,d=t.theme,c=t.selectProps;return Q("div",J({},Te(t,"group",{group:!0}),s),Q(a,J({},l,{selectProps:c,theme:d,getStyles:i,getClassNames:o,cx:r}),u),Q("div",null,n))},T8=function(t,n){var r=t.theme,i=r.colors,o=r.spacing;return Z({label:"group",cursor:"default",display:"block"},n?{}:{color:i.neutral40,fontSize:"75%",fontWeight:500,marginBottom:"0.25em",paddingLeft:o.baseUnit*3,paddingRight:o.baseUnit*3,textTransform:"uppercase"})},O8=function(t){var n=G2(t);n.data;var r=tr(n,E8);return Q("div",J({},Te(t,"groupHeading",{"group-heading":!0}),r))},j8=P8,M8=["innerRef","isDisabled","isHidden","inputClassName"],$8=function(t,n){var r=t.isDisabled,i=t.value,o=t.theme,a=o.spacing,l=o.colors;return Z(Z({visibility:r?"hidden":"visible",transform:i?"translateZ(0)":""},I8),n?{}:{margin:a.baseUnit/2,paddingBottom:a.baseUnit/2,paddingTop:a.baseUnit/2,color:l.neutral80})},t_={gridArea:"1 / 2",font:"inherit",minWidth:"2px",border:0,margin:0,outline:0,padding:0},I8={flex:"1 1 auto",display:"inline-grid",gridArea:"1 / 1 / 2 / 3",gridTemplateColumns:"0 min-content","&:after":Z({content:'attr(data-value) " "',visibility:"hidden",whiteSpace:"pre"},t_)},D8=function(t){return Z({label:"input",color:"inherit",background:0,opacity:t?0:1,width:"100%"},t_)},L8=function(t){var n=t.cx,r=t.value,i=G2(t),o=i.innerRef,a=i.isDisabled,l=i.isHidden,s=i.inputClassName,u=tr(i,M8);return Q("div",J({},Te(t,"input",{"input-container":!0}),{"data-value":r||""}),Q("input",J({className:n({input:!0},s),ref:o,style:D8(l),disabled:a},u)))},A8=L8,R8=function(t,n){var r=t.theme,i=r.spacing,o=r.borderRadius,a=r.colors;return Z({label:"multiValue",display:"flex",minWidth:0},n?{}:{backgroundColor:a.neutral10,borderRadius:o/2,margin:i.baseUnit/2})},F8=function(t,n){var r=t.theme,i=r.borderRadius,o=r.colors,a=t.cropWithEllipsis;return Z({overflow:"hidden",textOverflow:a||a===void 0?"ellipsis":void 0,whiteSpace:"nowrap"},n?{}:{borderRadius:i/2,color:o.neutral80,fontSize:"85%",padding:3,paddingLeft:6})},z8=function(t,n){var r=t.theme,i=r.spacing,o=r.borderRadius,a=r.colors,l=t.isFocused;return Z({alignItems:"center",display:"flex"},n?{}:{borderRadius:o/2,backgroundColor:l?a.dangerLight:void 0,paddingLeft:i.baseUnit,paddingRight:i.baseUnit,":hover":{backgroundColor:a.dangerLight,color:a.danger}})},n_=function(t){var n=t.children,r=t.innerProps;return Q("div",r,n)},N8=n_,B8=n_;function V8(e){var t=e.children,n=e.innerProps;return Q("div",J({role:"button"},n),t||Q(Gm,{size:14}))}var U8=function(t){var n=t.children,r=t.components,i=t.data,o=t.innerProps,a=t.isDisabled,l=t.removeProps,s=t.selectProps,u=r.Container,d=r.Label,c=r.Remove;return Q(u,{data:i,innerProps:Z(Z({},Te(t,"multiValue",{"multi-value":!0,"multi-value--is-disabled":a})),o),selectProps:s},Q(d,{data:i,innerProps:Z({},Te(t,"multiValueLabel",{"multi-value__label":!0})),selectProps:s},n),Q(c,{data:i,innerProps:Z(Z({},Te(t,"multiValueRemove",{"multi-value__remove":!0})),{},{"aria-label":"Remove ".concat(n||"option")},l),selectProps:s}))},H8=U8,W8=function(t,n){var r=t.isDisabled,i=t.isFocused,o=t.isSelected,a=t.theme,l=a.spacing,s=a.colors;return Z({label:"option",cursor:"default",display:"block",fontSize:"inherit",width:"100%",userSelect:"none",WebkitTapHighlightColor:"rgba(0, 0, 0, 0)"},n?{}:{backgroundColor:o?s.primary:i?s.primary25:"transparent",color:r?s.neutral20:o?s.neutral0:"inherit",padding:"".concat(l.baseUnit*2,"px ").concat(l.baseUnit*3,"px"),":active":{backgroundColor:r?void 0:o?s.primary:s.primary50}})},G8=function(t){var n=t.children,r=t.isDisabled,i=t.isFocused,o=t.isSelected,a=t.innerRef,l=t.innerProps;return Q("div",J({},Te(t,"option",{option:!0,"option--is-disabled":r,"option--is-focused":i,"option--is-selected":o}),{ref:a,"aria-disabled":r},l),n)},Y8=G8,q8=function(t,n){var r=t.theme,i=r.spacing,o=r.colors;return Z({label:"placeholder",gridArea:"1 / 1 / 2 / 3"},n?{}:{color:o.neutral50,marginLeft:i.baseUnit/2,marginRight:i.baseUnit/2})},X8=function(t){var n=t.children,r=t.innerProps;return Q("div",J({},Te(t,"placeholder",{placeholder:!0}),r),n)},K8=X8,Q8=function(t,n){var r=t.isDisabled,i=t.theme,o=i.spacing,a=i.colors;return Z({label:"singleValue",gridArea:"1 / 1 / 2 / 3",maxWidth:"100%",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},n?{}:{color:r?a.neutral40:a.neutral80,marginLeft:o.baseUnit/2,marginRight:o.baseUnit/2})},Z8=function(t){var n=t.children,r=t.isDisabled,i=t.innerProps;return Q("div",J({},Te(t,"singleValue",{"single-value":!0,"single-value--is-disabled":r}),i),n)},J8=Z8,eF={ClearIndicator:g8,Control:C8,DropdownIndicator:h8,DownChevron:J2,CrossIcon:Gm,Group:j8,GroupHeading:O8,IndicatorsContainer:u8,IndicatorSeparator:y8,Input:A8,LoadingIndicator:w8,Menu:XR,MenuList:QR,MenuPortal:r8,LoadingMessage:t8,NoOptionsMessage:e8,MultiValue:H8,MultiValueContainer:N8,MultiValueLabel:B8,MultiValueRemove:V8,Option:Y8,Placeholder:K8,SelectContainer:o8,SingleValue:J8,ValueContainer:s8},tF=function(t){return Z(Z({},eF),t.components)},g1=Number.isNaN||function(t){return typeof t=="number"&&t!==t};function nF(e,t){return!!(e===t||g1(e)&&g1(t))}function rF(e,t){if(e.length!==t.length)return!1;for(var n=0;n<e.length;n++)if(!nF(e[n],t[n]))return!1;return!0}function iF(e,t){t===void 0&&(t=rF);var n=null;function r(){for(var i=[],o=0;o<arguments.length;o++)i[o]=arguments[o];if(n&&n.lastThis===this&&t(i,n.lastArgs))return n.lastResult;var a=e.apply(this,i);return n={lastResult:a,lastArgs:i,lastThis:this},a}return r.clear=function(){n=null},r}var oF={name:"7pg0cj-a11yText",styles:"label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap"},aF=function(t){return Q("span",J({css:oF},t))},v1=aF,sF={guidance:function(t){var n=t.isSearchable,r=t.isMulti,i=t.tabSelectsValue,o=t.context,a=t.isInitialFocus;switch(o){case"menu":return"Use Up and Down to choose options, press Enter to select the currently focused option, press Escape to exit the menu".concat(i?", press Tab to select the option and exit the menu":"",".");case"input":return a?"".concat(t["aria-label"]||"Select"," is focused ").concat(n?",type to refine list":"",", press Down to open the menu, ").concat(r?" press left to focus selected values":""):"";case"value":return"Use left and right to toggle between focused values, press Backspace to remove the currently focused value";default:return""}},onChange:function(t){var n=t.action,r=t.label,i=r===void 0?"":r,o=t.labels,a=t.isDisabled;switch(n){case"deselect-option":case"pop-value":case"remove-value":return"option ".concat(i,", deselected.");case"clear":return"All selected options have been cleared.";case"initial-input-focus":return"option".concat(o.length>1?"s":""," ").concat(o.join(","),", selected.");case"select-option":return a?"option ".concat(i," is disabled. Select another option."):"option ".concat(i,", selected.");default:return""}},onFocus:function(t){var n=t.context,r=t.focused,i=t.options,o=t.label,a=o===void 0?"":o,l=t.selectValue,s=t.isDisabled,u=t.isSelected,d=t.isAppleDevice,c=function(g,w){return g&&g.length?"".concat(g.indexOf(w)+1," of ").concat(g.length):""};if(n==="value"&&l)return"value ".concat(a," focused, ").concat(c(l,r),".");if(n==="menu"&&d){var y=s?" disabled":"",p="".concat(u?" selected":"").concat(y);return"".concat(a).concat(p,", ").concat(c(i,r),".")}return""},onFilter:function(t){var n=t.inputValue,r=t.resultsMessage;return"".concat(r).concat(n?" for search term "+n:"",".")}},lF=function(t){var n=t.ariaSelection,r=t.focusedOption,i=t.focusedValue,o=t.focusableOptions,a=t.isFocused,l=t.selectValue,s=t.selectProps,u=t.id,d=t.isAppleDevice,c=s.ariaLiveMessages,y=s.getOptionLabel,p=s.inputValue,m=s.isMulti,g=s.isOptionDisabled,w=s.isSearchable,h=s.menuIsOpen,v=s.options,x=s.screenReaderStatus,S=s.tabSelectsValue,C=s.isLoading,T=s["aria-label"],k=s["aria-live"],_=b.useMemo(function(){return Z(Z({},sF),c||{})},[c]),M=b.useMemo(function(){var R="";if(n&&_.onChange){var L=n.option,O=n.options,P=n.removedValue,I=n.removedValues,z=n.value,B=function(fe){return Array.isArray(fe)?null:fe},N=P||L||B(z),U=N?y(N):"",G=O||I||void 0,H=G?G.map(y):[],X=Z({isDisabled:N&&g(N,l),label:U,labels:H},n);R=_.onChange(X)}return R},[n,_,g,l,y]),$=b.useMemo(function(){var R="",L=r||i,O=!!(r&&l&&l.includes(r));if(L&&_.onFocus){var P={focused:L,label:y(L),isDisabled:g(L,l),isSelected:O,options:o,context:L===r?"menu":"value",selectValue:l,isAppleDevice:d};R=_.onFocus(P)}return R},[r,i,y,g,_,o,l,d]),D=b.useMemo(function(){var R="";if(h&&v.length&&!C&&_.onFilter){var L=x({count:o.length});R=_.onFilter({inputValue:p,resultsMessage:L})}return R},[o,p,h,_,v,x,C]),A=(n==null?void 0:n.action)==="initial-input-focus",j=b.useMemo(function(){var R="";if(_.guidance){var L=i?"value":h?"menu":"input";R=_.guidance({"aria-label":T,context:L,isDisabled:r&&g(r,l),isMulti:m,isSearchable:w,tabSelectsValue:S,isInitialFocus:A})}return R},[T,r,i,m,g,w,h,_,l,S,A]),F=Q(b.Fragment,null,Q("span",{id:"aria-selection"},M),Q("span",{id:"aria-focused"},$),Q("span",{id:"aria-results"},D),Q("span",{id:"aria-guidance"},j));return Q(b.Fragment,null,Q(v1,{id:u},A&&F),Q(v1,{"aria-live":k,"aria-atomic":"false","aria-relevant":"additions text",role:"log"},a&&!A&&F))},uF=lF,Vp=[{base:"A",letters:"AⒶＡÀÁÂẦẤẪẨÃĀĂẰẮẴẲȦǠÄǞẢÅǺǍȀȂẠẬẶḀĄȺⱯ"},{base:"AA",letters:"Ꜳ"},{base:"AE",letters:"ÆǼǢ"},{base:"AO",letters:"Ꜵ"},{base:"AU",letters:"Ꜷ"},{base:"AV",letters:"ꜸꜺ"},{base:"AY",letters:"Ꜽ"},{base:"B",letters:"BⒷＢḂḄḆɃƂƁ"},{base:"C",letters:"CⒸＣĆĈĊČÇḈƇȻꜾ"},{base:"D",letters:"DⒹＤḊĎḌḐḒḎĐƋƊƉꝹ"},{base:"DZ",letters:"ǱǄ"},{base:"Dz",letters:"ǲǅ"},{base:"E",letters:"EⒺＥÈÉÊỀẾỄỂẼĒḔḖĔĖËẺĚȄȆẸỆȨḜĘḘḚƐƎ"},{base:"F",letters:"FⒻＦḞƑꝻ"},{base:"G",letters:"GⒼＧǴĜḠĞĠǦĢǤƓꞠꝽꝾ"},{base:"H",letters:"HⒽＨĤḢḦȞḤḨḪĦⱧⱵꞍ"},{base:"I",letters:"IⒾＩÌÍÎĨĪĬİÏḮỈǏȈȊỊĮḬƗ"},{base:"J",letters:"JⒿＪĴɈ"},{base:"K",letters:"KⓀＫḰǨḲĶḴƘⱩꝀꝂꝄꞢ"},{base:"L",letters:"LⓁＬĿĹĽḶḸĻḼḺŁȽⱢⱠꝈꝆꞀ"},{base:"LJ",letters:"Ǉ"},{base:"Lj",letters:"ǈ"},{base:"M",letters:"MⓂＭḾṀṂⱮƜ"},{base:"N",letters:"NⓃＮǸŃÑṄŇṆŅṊṈȠƝꞐꞤ"},{base:"NJ",letters:"Ǌ"},{base:"Nj",letters:"ǋ"},{base:"O",letters:"OⓄＯÒÓÔỒỐỖỔÕṌȬṎŌṐṒŎȮȰÖȪỎŐǑȌȎƠỜỚỠỞỢỌỘǪǬØǾƆƟꝊꝌ"},{base:"OI",letters:"Ƣ"},{base:"OO",letters:"Ꝏ"},{base:"OU",letters:"Ȣ"},{base:"P",letters:"PⓅＰṔṖƤⱣꝐꝒꝔ"},{base:"Q",letters:"QⓆＱꝖꝘɊ"},{base:"R",letters:"RⓇＲŔṘŘȐȒṚṜŖṞɌⱤꝚꞦꞂ"},{base:"S",letters:"SⓈＳẞŚṤŜṠŠṦṢṨȘŞⱾꞨꞄ"},{base:"T",letters:"TⓉＴṪŤṬȚŢṰṮŦƬƮȾꞆ"},{base:"TZ",letters:"Ꜩ"},{base:"U",letters:"UⓊＵÙÚÛŨṸŪṺŬÜǛǗǕǙỦŮŰǓȔȖƯỪỨỮỬỰỤṲŲṶṴɄ"},{base:"V",letters:"VⓋＶṼṾƲꝞɅ"},{base:"VY",letters:"Ꝡ"},{base:"W",letters:"WⓌＷẀẂŴẆẄẈⱲ"},{base:"X",letters:"XⓍＸẊẌ"},{base:"Y",letters:"YⓎＹỲÝŶỸȲẎŸỶỴƳɎỾ"},{base:"Z",letters:"ZⓏＺŹẐŻŽẒẔƵȤⱿⱫꝢ"},{base:"a",letters:"aⓐａẚàáâầấẫẩãāăằắẵẳȧǡäǟảåǻǎȁȃạậặḁąⱥɐ"},{base:"aa",letters:"ꜳ"},{base:"ae",letters:"æǽǣ"},{base:"ao",letters:"ꜵ"},{base:"au",letters:"ꜷ"},{base:"av",letters:"ꜹꜻ"},{base:"ay",letters:"ꜽ"},{base:"b",letters:"bⓑｂḃḅḇƀƃɓ"},{base:"c",letters:"cⓒｃćĉċčçḉƈȼꜿↄ"},{base:"d",letters:"dⓓｄḋďḍḑḓḏđƌɖɗꝺ"},{base:"dz",letters:"ǳǆ"},{base:"e",letters:"eⓔｅèéêềếễểẽēḕḗĕėëẻěȅȇẹệȩḝęḙḛɇɛǝ"},{base:"f",letters:"fⓕｆḟƒꝼ"},{base:"g",letters:"gⓖｇǵĝḡğġǧģǥɠꞡᵹꝿ"},{base:"h",letters:"hⓗｈĥḣḧȟḥḩḫẖħⱨⱶɥ"},{base:"hv",letters:"ƕ"},{base:"i",letters:"iⓘｉìíîĩīĭïḯỉǐȉȋịįḭɨı"},{base:"j",letters:"jⓙｊĵǰɉ"},{base:"k",letters:"kⓚｋḱǩḳķḵƙⱪꝁꝃꝅꞣ"},{base:"l",letters:"lⓛｌŀĺľḷḹļḽḻſłƚɫⱡꝉꞁꝇ"},{base:"lj",letters:"ǉ"},{base:"m",letters:"mⓜｍḿṁṃɱɯ"},{base:"n",letters:"nⓝｎǹńñṅňṇņṋṉƞɲŉꞑꞥ"},{base:"nj",letters:"ǌ"},{base:"o",letters:"oⓞｏòóôồốỗổõṍȭṏōṑṓŏȯȱöȫỏőǒȍȏơờớỡởợọộǫǭøǿɔꝋꝍɵ"},{base:"oi",letters:"ƣ"},{base:"ou",letters:"ȣ"},{base:"oo",letters:"ꝏ"},{base:"p",letters:"pⓟｐṕṗƥᵽꝑꝓꝕ"},{base:"q",letters:"qⓠｑɋꝗꝙ"},{base:"r",letters:"rⓡｒŕṙřȑȓṛṝŗṟɍɽꝛꞧꞃ"},{base:"s",letters:"sⓢｓßśṥŝṡšṧṣṩșşȿꞩꞅẛ"},{base:"t",letters:"tⓣｔṫẗťṭțţṱṯŧƭʈⱦꞇ"},{base:"tz",letters:"ꜩ"},{base:"u",letters:"uⓤｕùúûũṹūṻŭüǜǘǖǚủůűǔȕȗưừứữửựụṳųṷṵʉ"},{base:"v",letters:"vⓥｖṽṿʋꝟʌ"},{base:"vy",letters:"ꝡ"},{base:"w",letters:"wⓦｗẁẃŵẇẅẘẉⱳ"},{base:"x",letters:"xⓧｘẋẍ"},{base:"y",letters:"yⓨｙỳýŷỹȳẏÿỷẙỵƴɏỿ"},{base:"z",letters:"zⓩｚźẑżžẓẕƶȥɀⱬꝣ"}],cF=new RegExp("["+Vp.map(function(e){return e.letters}).join("")+"]","g"),r_={};for(var Wd=0;Wd<Vp.length;Wd++)for(var Gd=Vp[Wd],Yd=0;Yd<Gd.letters.length;Yd++)r_[Gd.letters[Yd]]=Gd.base;var i_=function(t){return t.replace(cF,function(n){return r_[n]})},dF=iF(i_),y1=function(t){return t.replace(/^\s+|\s+$/g,"")},fF=function(t){return"".concat(t.label," ").concat(t.value)},pF=function(t){return function(n,r){if(n.data.__isNew__)return!0;var i=Z({ignoreCase:!0,ignoreAccents:!0,stringify:fF,trim:!0,matchFrom:"any"},t),o=i.ignoreCase,a=i.ignoreAccents,l=i.stringify,s=i.trim,u=i.matchFrom,d=s?y1(r):r,c=s?y1(l(n)):l(n);return o&&(d=d.toLowerCase(),c=c.toLowerCase()),a&&(d=dF(d),c=i_(c)),u==="start"?c.substr(0,d.length)===d:c.indexOf(d)>-1}},hF=["innerRef"];function mF(e){var t=e.innerRef,n=tr(e,hF),r=BR(n,"onExited","in","enter","exit","appear");return Q("input",J({ref:t},r,{css:vm({label:"dummyInput",background:0,border:0,caretColor:"transparent",fontSize:"inherit",gridArea:"1 / 1 / 2 / 3",outline:0,padding:0,width:1,color:"transparent",left:-100,opacity:0,position:"relative",transform:"scale(.01)"},"","")}))}var gF=function(t){t.cancelable&&t.preventDefault(),t.stopPropagation()};function vF(e){var t=e.isEnabled,n=e.onBottomArrive,r=e.onBottomLeave,i=e.onTopArrive,o=e.onTopLeave,a=b.useRef(!1),l=b.useRef(!1),s=b.useRef(0),u=b.useRef(null),d=b.useCallback(function(w,h){if(u.current!==null){var v=u.current,x=v.scrollTop,S=v.scrollHeight,C=v.clientHeight,T=u.current,k=h>0,_=S-C-x,M=!1;_>h&&a.current&&(r&&r(w),a.current=!1),k&&l.current&&(o&&o(w),l.current=!1),k&&h>_?(n&&!a.current&&n(w),T.scrollTop=S,M=!0,a.current=!0):!k&&-h>x&&(i&&!l.current&&i(w),T.scrollTop=0,M=!0,l.current=!0),M&&gF(w)}},[n,r,i,o]),c=b.useCallback(function(w){d(w,w.deltaY)},[d]),y=b.useCallback(function(w){s.current=w.changedTouches[0].clientY},[]),p=b.useCallback(function(w){var h=s.current-w.changedTouches[0].clientY;d(w,h)},[d]),m=b.useCallback(function(w){if(w){var h=FR?{passive:!1}:!1;w.addEventListener("wheel",c,h),w.addEventListener("touchstart",y,h),w.addEventListener("touchmove",p,h)}},[p,y,c]),g=b.useCallback(function(w){w&&(w.removeEventListener("wheel",c,!1),w.removeEventListener("touchstart",y,!1),w.removeEventListener("touchmove",p,!1))},[p,y,c]);return b.useEffect(function(){if(t){var w=u.current;return m(w),function(){g(w)}}},[t,m,g]),function(w){u.current=w}}var x1=["boxSizing","height","overflow","paddingRight","position"],b1={boxSizing:"border-box",overflow:"hidden",position:"relative",height:"100%"};function w1(e){e.cancelable&&e.preventDefault()}function S1(e){e.stopPropagation()}function _1(){var e=this.scrollTop,t=this.scrollHeight,n=e+this.offsetHeight;e===0?this.scrollTop=1:n===t&&(this.scrollTop=e-1)}function C1(){return"ontouchstart"in window||navigator.maxTouchPoints}var E1=!!(typeof window<"u"&&window.document&&window.document.createElement),Fo=0,vi={capture:!1,passive:!1};function yF(e){var t=e.isEnabled,n=e.accountForScrollbars,r=n===void 0?!0:n,i=b.useRef({}),o=b.useRef(null),a=b.useCallback(function(s){if(E1){var u=document.body,d=u&&u.style;if(r&&x1.forEach(function(m){var g=d&&d[m];i.current[m]=g}),r&&Fo<1){var c=parseInt(i.current.paddingRight,10)||0,y=document.body?document.body.clientWidth:0,p=window.innerWidth-y+c||0;Object.keys(b1).forEach(function(m){var g=b1[m];d&&(d[m]=g)}),d&&(d.paddingRight="".concat(p,"px"))}u&&C1()&&(u.addEventListener("touchmove",w1,vi),s&&(s.addEventListener("touchstart",_1,vi),s.addEventListener("touchmove",S1,vi))),Fo+=1}},[r]),l=b.useCallback(function(s){if(E1){var u=document.body,d=u&&u.style;Fo=Math.max(Fo-1,0),r&&Fo<1&&x1.forEach(function(c){var y=i.current[c];d&&(d[c]=y)}),u&&C1()&&(u.removeEventListener("touchmove",w1,vi),s&&(s.removeEventListener("touchstart",_1,vi),s.removeEventListener("touchmove",S1,vi)))}},[r]);return b.useEffect(function(){if(t){var s=o.current;return a(s),function(){l(s)}}},[t,a,l]),function(s){o.current=s}}var xF=function(t){var n=t.target;return n.ownerDocument.activeElement&&n.ownerDocument.activeElement.blur()},bF={name:"1kfdb0e",styles:"position:fixed;left:0;bottom:0;right:0;top:0"};function wF(e){var t=e.children,n=e.lockEnabled,r=e.captureEnabled,i=r===void 0?!0:r,o=e.onBottomArrive,a=e.onBottomLeave,l=e.onTopArrive,s=e.onTopLeave,u=vF({isEnabled:i,onBottomArrive:o,onBottomLeave:a,onTopArrive:l,onTopLeave:s}),d=yF({isEnabled:n}),c=function(p){u(p),d(p)};return Q(b.Fragment,null,n&&Q("div",{onClick:xF,css:bF}),t(c))}var SF={name:"1a0ro4n-requiredInput",styles:"label:requiredInput;opacity:0;pointer-events:none;position:absolute;bottom:0;left:0;right:0;width:100%"},_F=function(t){var n=t.name,r=t.onFocus;return Q("input",{required:!0,name:n,tabIndex:-1,"aria-hidden":"true",onFocus:r,css:SF,value:"",onChange:function(){}})},CF=_F;function Ym(e){var t;return typeof window<"u"&&window.navigator!=null?e.test(((t=window.navigator.userAgentData)===null||t===void 0?void 0:t.platform)||window.navigator.platform):!1}function EF(){return Ym(/^iPhone/i)}function o_(){return Ym(/^Mac/i)}function kF(){return Ym(/^iPad/i)||o_()&&navigator.maxTouchPoints>1}function PF(){return EF()||kF()}function TF(){return o_()||PF()}var OF=function(t){return t.label},jF=function(t){return t.label},MF=function(t){return t.value},$F=function(t){return!!t.isDisabled},IF={clearIndicator:m8,container:i8,control:S8,dropdownIndicator:p8,group:k8,groupHeading:T8,indicatorsContainer:l8,indicatorSeparator:v8,input:$8,loadingIndicator:b8,loadingMessage:JR,menu:GR,menuList:KR,menuPortal:n8,multiValue:R8,multiValueLabel:F8,multiValueRemove:z8,noOptionsMessage:ZR,option:W8,placeholder:q8,singleValue:Q8,valueContainer:a8},DF={primary:"#2684FF",primary75:"#4C9AFF",primary50:"#B2D4FF",primary25:"#DEEBFF",danger:"#DE350B",dangerLight:"#FFBDAD",neutral0:"hsl(0, 0%, 100%)",neutral5:"hsl(0, 0%, 95%)",neutral10:"hsl(0, 0%, 90%)",neutral20:"hsl(0, 0%, 80%)",neutral30:"hsl(0, 0%, 70%)",neutral40:"hsl(0, 0%, 60%)",neutral50:"hsl(0, 0%, 50%)",neutral60:"hsl(0, 0%, 40%)",neutral70:"hsl(0, 0%, 30%)",neutral80:"hsl(0, 0%, 20%)",neutral90:"hsl(0, 0%, 10%)"},LF=4,a_=4,AF=38,RF=a_*2,FF={baseUnit:a_,controlHeight:AF,menuGutter:RF},qd={borderRadius:LF,colors:DF,spacing:FF},zF={"aria-live":"polite",backspaceRemovesValue:!0,blurInputOnSelect:h1(),captureMenuScroll:!h1(),classNames:{},closeMenuOnSelect:!0,closeMenuOnScroll:!1,components:{},controlShouldRenderValue:!0,escapeClearsValue:!1,filterOption:pF(),formatGroupLabel:OF,getOptionLabel:jF,getOptionValue:MF,isDisabled:!1,isLoading:!1,isMulti:!1,isRtl:!1,isSearchable:!0,isOptionDisabled:$F,loadingMessage:function(){return"Loading..."},maxMenuHeight:300,minMenuHeight:140,menuIsOpen:!1,menuPlacement:"bottom",menuPosition:"absolute",menuShouldBlockScroll:!1,menuShouldScrollIntoView:!AR(),noOptionsMessage:function(){return"No options"},openMenuOnFocus:!1,openMenuOnClick:!0,options:[],pageSize:5,placeholder:"Select...",screenReaderStatus:function(t){var n=t.count;return"".concat(n," result").concat(n!==1?"s":""," available")},styles:{},tabIndex:0,tabSelectsValue:!0,unstyled:!1};function k1(e,t,n,r){var i=u_(e,t,n),o=c_(e,t,n),a=l_(e,t),l=au(e,t);return{type:"option",data:t,isDisabled:i,isSelected:o,label:a,value:l,index:r}}function rl(e,t){return e.options.map(function(n,r){if("options"in n){var i=n.options.map(function(a,l){return k1(e,a,t,l)}).filter(function(a){return T1(e,a)});return i.length>0?{type:"group",data:n,options:i,index:r}:void 0}var o=k1(e,n,t,r);return T1(e,o)?o:void 0}).filter(zR)}function s_(e){return e.reduce(function(t,n){return n.type==="group"?t.push.apply(t,Vm(n.options.map(function(r){return r.data}))):t.push(n.data),t},[])}function P1(e,t){return e.reduce(function(n,r){return r.type==="group"?n.push.apply(n,Vm(r.options.map(function(i){return{data:i.data,id:"".concat(t,"-").concat(r.index,"-").concat(i.index)}}))):n.push({data:r.data,id:"".concat(t,"-").concat(r.index)}),n},[])}function NF(e,t){return s_(rl(e,t))}function T1(e,t){var n=e.inputValue,r=n===void 0?"":n,i=t.data,o=t.isSelected,a=t.label,l=t.value;return(!f_(e)||!o)&&d_(e,{label:a,value:l,data:i},r)}function BF(e,t){var n=e.focusedValue,r=e.selectValue,i=r.indexOf(n);if(i>-1){var o=t.indexOf(n);if(o>-1)return n;if(i<t.length)return t[i]}return null}function VF(e,t){var n=e.focusedOption;return n&&t.indexOf(n)>-1?n:t[0]}var Xd=function(t,n){var r,i=(r=t.find(function(o){return o.data===n}))===null||r===void 0?void 0:r.id;return i||null},l_=function(t,n){return t.getOptionLabel(n)},au=function(t,n){return t.getOptionValue(n)};function u_(e,t,n){return typeof e.isOptionDisabled=="function"?e.isOptionDisabled(t,n):!1}function c_(e,t,n){if(n.indexOf(t)>-1)return!0;if(typeof e.isOptionSelected=="function")return e.isOptionSelected(t,n);var r=au(e,t);return n.some(function(i){return au(e,i)===r})}function d_(e,t,n){return e.filterOption?e.filterOption(t,n):!0}var f_=function(t){var n=t.hideSelectedOptions,r=t.isMulti;return n===void 0?r:n},UF=1,p_=function(e){lR(n,e);var t=fR(n);function n(r){var i;if(aR(this,n),i=t.call(this,r),i.state={ariaSelection:null,focusedOption:null,focusedOptionId:null,focusableOptionsWithIds:[],focusedValue:null,inputIsHidden:!1,isFocused:!1,selectValue:[],clearFocusValueOnUpdate:!1,prevWasFocused:!1,inputIsHiddenAfterUpdate:void 0,prevProps:void 0,instancePrefix:"",isAppleDevice:!1},i.blockOptionHover=!1,i.isComposing=!1,i.commonProps=void 0,i.initialTouchX=0,i.initialTouchY=0,i.openAfterFocus=!1,i.scrollToFocusedOptionOnUpdate=!1,i.userIsDragging=void 0,i.controlRef=null,i.getControlRef=function(s){i.controlRef=s},i.focusedOptionRef=null,i.getFocusedOptionRef=function(s){i.focusedOptionRef=s},i.menuListRef=null,i.getMenuListRef=function(s){i.menuListRef=s},i.inputRef=null,i.getInputRef=function(s){i.inputRef=s},i.focus=i.focusInput,i.blur=i.blurInput,i.onChange=function(s,u){var d=i.props,c=d.onChange,y=d.name;u.name=y,i.ariaOnChange(s,u),c(s,u)},i.setValue=function(s,u,d){var c=i.props,y=c.closeMenuOnSelect,p=c.isMulti,m=c.inputValue;i.onInputChange("",{action:"set-value",prevInputValue:m}),y&&(i.setState({inputIsHiddenAfterUpdate:!p}),i.onMenuClose()),i.setState({clearFocusValueOnUpdate:!0}),i.onChange(s,{action:u,option:d})},i.selectOption=function(s){var u=i.props,d=u.blurInputOnSelect,c=u.isMulti,y=u.name,p=i.state.selectValue,m=c&&i.isOptionSelected(s,p),g=i.isOptionDisabled(s,p);if(m){var w=i.getOptionValue(s);i.setValue(p.filter(function(h){return i.getOptionValue(h)!==w}),"deselect-option",s)}else if(!g)c?i.setValue([].concat(Vm(p),[s]),"select-option",s):i.setValue(s,"select-option");else{i.ariaOnChange(s,{action:"select-option",option:s,name:y});return}d&&i.blurInput()},i.removeValue=function(s){var u=i.props.isMulti,d=i.state.selectValue,c=i.getOptionValue(s),y=d.filter(function(m){return i.getOptionValue(m)!==c}),p=Os(u,y,y[0]||null);i.onChange(p,{action:"remove-value",removedValue:s}),i.focusInput()},i.clearValue=function(){var s=i.state.selectValue;i.onChange(Os(i.props.isMulti,[],null),{action:"clear",removedValues:s})},i.popValue=function(){var s=i.props.isMulti,u=i.state.selectValue,d=u[u.length-1],c=u.slice(0,u.length-1),y=Os(s,c,c[0]||null);d&&i.onChange(y,{action:"pop-value",removedValue:d})},i.getFocusedOptionId=function(s){return Xd(i.state.focusableOptionsWithIds,s)},i.getFocusableOptionsWithIds=function(){return P1(rl(i.props,i.state.selectValue),i.getElementId("option"))},i.getValue=function(){return i.state.selectValue},i.cx=function(){for(var s=arguments.length,u=new Array(s),d=0;d<s;d++)u[d]=arguments[d];return MR.apply(void 0,[i.props.classNamePrefix].concat(u))},i.getOptionLabel=function(s){return l_(i.props,s)},i.getOptionValue=function(s){return au(i.props,s)},i.getStyles=function(s,u){var d=i.props.unstyled,c=IF[s](u,d);c.boxSizing="border-box";var y=i.props.styles[s];return y?y(c,u):c},i.getClassNames=function(s,u){var d,c;return(d=(c=i.props.classNames)[s])===null||d===void 0?void 0:d.call(c,u)},i.getElementId=function(s){return"".concat(i.state.instancePrefix,"-").concat(s)},i.getComponents=function(){return tF(i.props)},i.buildCategorizedOptions=function(){return rl(i.props,i.state.selectValue)},i.getCategorizedOptions=function(){return i.props.menuIsOpen?i.buildCategorizedOptions():[]},i.buildFocusableOptions=function(){return s_(i.buildCategorizedOptions())},i.getFocusableOptions=function(){return i.props.menuIsOpen?i.buildFocusableOptions():[]},i.ariaOnChange=function(s,u){i.setState({ariaSelection:Z({value:s},u)})},i.onMenuMouseDown=function(s){s.button===0&&(s.stopPropagation(),s.preventDefault(),i.focusInput())},i.onMenuMouseMove=function(s){i.blockOptionHover=!1},i.onControlMouseDown=function(s){if(!s.defaultPrevented){var u=i.props.openMenuOnClick;i.state.isFocused?i.props.menuIsOpen?s.target.tagName!=="INPUT"&&s.target.tagName!=="TEXTAREA"&&i.onMenuClose():u&&i.openMenu("first"):(u&&(i.openAfterFocus=!0),i.focusInput()),s.target.tagName!=="INPUT"&&s.target.tagName!=="TEXTAREA"&&s.preventDefault()}},i.onDropdownIndicatorMouseDown=function(s){if(!(s&&s.type==="mousedown"&&s.button!==0)&&!i.props.isDisabled){var u=i.props,d=u.isMulti,c=u.menuIsOpen;i.focusInput(),c?(i.setState({inputIsHiddenAfterUpdate:!d}),i.onMenuClose()):i.openMenu("first"),s.preventDefault()}},i.onClearIndicatorMouseDown=function(s){s&&s.type==="mousedown"&&s.button!==0||(i.clearValue(),s.preventDefault(),i.openAfterFocus=!1,s.type==="touchend"?i.focusInput():setTimeout(function(){return i.focusInput()}))},i.onScroll=function(s){typeof i.props.closeMenuOnScroll=="boolean"?s.target instanceof HTMLElement&&Pc(s.target)&&i.props.onMenuClose():typeof i.props.closeMenuOnScroll=="function"&&i.props.closeMenuOnScroll(s)&&i.props.onMenuClose()},i.onCompositionStart=function(){i.isComposing=!0},i.onCompositionEnd=function(){i.isComposing=!1},i.onTouchStart=function(s){var u=s.touches,d=u&&u.item(0);d&&(i.initialTouchX=d.clientX,i.initialTouchY=d.clientY,i.userIsDragging=!1)},i.onTouchMove=function(s){var u=s.touches,d=u&&u.item(0);if(d){var c=Math.abs(d.clientX-i.initialTouchX),y=Math.abs(d.clientY-i.initialTouchY),p=5;i.userIsDragging=c>p||y>p}},i.onTouchEnd=function(s){i.userIsDragging||(i.controlRef&&!i.controlRef.contains(s.target)&&i.menuListRef&&!i.menuListRef.contains(s.target)&&i.blurInput(),i.initialTouchX=0,i.initialTouchY=0)},i.onControlTouchEnd=function(s){i.userIsDragging||i.onControlMouseDown(s)},i.onClearIndicatorTouchEnd=function(s){i.userIsDragging||i.onClearIndicatorMouseDown(s)},i.onDropdownIndicatorTouchEnd=function(s){i.userIsDragging||i.onDropdownIndicatorMouseDown(s)},i.handleInputChange=function(s){var u=i.props.inputValue,d=s.currentTarget.value;i.setState({inputIsHiddenAfterUpdate:!1}),i.onInputChange(d,{action:"input-change",prevInputValue:u}),i.props.menuIsOpen||i.onMenuOpen()},i.onInputFocus=function(s){i.props.onFocus&&i.props.onFocus(s),i.setState({inputIsHiddenAfterUpdate:!1,isFocused:!0}),(i.openAfterFocus||i.props.openMenuOnFocus)&&i.openMenu("first"),i.openAfterFocus=!1},i.onInputBlur=function(s){var u=i.props.inputValue;if(i.menuListRef&&i.menuListRef.contains(document.activeElement)){i.inputRef.focus();return}i.props.onBlur&&i.props.onBlur(s),i.onInputChange("",{action:"input-blur",prevInputValue:u}),i.onMenuClose(),i.setState({focusedValue:null,isFocused:!1})},i.onOptionHover=function(s){if(!(i.blockOptionHover||i.state.focusedOption===s)){var u=i.getFocusableOptions(),d=u.indexOf(s);i.setState({focusedOption:s,focusedOptionId:d>-1?i.getFocusedOptionId(s):null})}},i.shouldHideSelectedOptions=function(){return f_(i.props)},i.onValueInputFocus=function(s){s.preventDefault(),s.stopPropagation(),i.focus()},i.onKeyDown=function(s){var u=i.props,d=u.isMulti,c=u.backspaceRemovesValue,y=u.escapeClearsValue,p=u.inputValue,m=u.isClearable,g=u.isDisabled,w=u.menuIsOpen,h=u.onKeyDown,v=u.tabSelectsValue,x=u.openMenuOnFocus,S=i.state,C=S.focusedOption,T=S.focusedValue,k=S.selectValue;if(!g&&!(typeof h=="function"&&(h(s),s.defaultPrevented))){switch(i.blockOptionHover=!0,s.key){case"ArrowLeft":if(!d||p)return;i.focusValue("previous");break;case"ArrowRight":if(!d||p)return;i.focusValue("next");break;case"Delete":case"Backspace":if(p)return;if(T)i.removeValue(T);else{if(!c)return;d?i.popValue():m&&i.clearValue()}break;case"Tab":if(i.isComposing||s.shiftKey||!w||!v||!C||x&&i.isOptionSelected(C,k))return;i.selectOption(C);break;case"Enter":if(s.keyCode===229)break;if(w){if(!C||i.isComposing)return;i.selectOption(C);break}return;case"Escape":w?(i.setState({inputIsHiddenAfterUpdate:!1}),i.onInputChange("",{action:"menu-close",prevInputValue:p}),i.onMenuClose()):m&&y&&i.clearValue();break;case" ":if(p)return;if(!w){i.openMenu("first");break}if(!C)return;i.selectOption(C);break;case"ArrowUp":w?i.focusOption("up"):i.openMenu("last");break;case"ArrowDown":w?i.focusOption("down"):i.openMenu("first");break;case"PageUp":if(!w)return;i.focusOption("pageup");break;case"PageDown":if(!w)return;i.focusOption("pagedown");break;case"Home":if(!w)return;i.focusOption("first");break;case"End":if(!w)return;i.focusOption("last");break;default:return}s.preventDefault()}},i.state.instancePrefix="react-select-"+(i.props.instanceId||++UF),i.state.selectValue=f1(r.value),r.menuIsOpen&&i.state.selectValue.length){var o=i.getFocusableOptionsWithIds(),a=i.buildFocusableOptions(),l=a.indexOf(i.state.selectValue[0]);i.state.focusableOptionsWithIds=o,i.state.focusedOption=a[l],i.state.focusedOptionId=Xd(o,a[l])}return i}return sR(n,[{key:"componentDidMount",value:function(){this.startListeningComposition(),this.startListeningToTouch(),this.props.closeMenuOnScroll&&document&&document.addEventListener&&document.addEventListener("scroll",this.onScroll,!0),this.props.autoFocus&&this.focusInput(),this.props.menuIsOpen&&this.state.focusedOption&&this.menuListRef&&this.focusedOptionRef&&p1(this.menuListRef,this.focusedOptionRef),TF()&&this.setState({isAppleDevice:!0})}},{key:"componentDidUpdate",value:function(i){var o=this.props,a=o.isDisabled,l=o.menuIsOpen,s=this.state.isFocused;(s&&!a&&i.isDisabled||s&&l&&!i.menuIsOpen)&&this.focusInput(),s&&a&&!i.isDisabled?this.setState({isFocused:!1},this.onMenuClose):!s&&!a&&i.isDisabled&&this.inputRef===document.activeElement&&this.setState({isFocused:!0}),this.menuListRef&&this.focusedOptionRef&&this.scrollToFocusedOptionOnUpdate&&(p1(this.menuListRef,this.focusedOptionRef),this.scrollToFocusedOptionOnUpdate=!1)}},{key:"componentWillUnmount",value:function(){this.stopListeningComposition(),this.stopListeningToTouch(),document.removeEventListener("scroll",this.onScroll,!0)}},{key:"onMenuOpen",value:function(){this.props.onMenuOpen()}},{key:"onMenuClose",value:function(){this.onInputChange("",{action:"menu-close",prevInputValue:this.props.inputValue}),this.props.onMenuClose()}},{key:"onInputChange",value:function(i,o){this.props.onInputChange(i,o)}},{key:"focusInput",value:function(){this.inputRef&&this.inputRef.focus()}},{key:"blurInput",value:function(){this.inputRef&&this.inputRef.blur()}},{key:"openMenu",value:function(i){var o=this,a=this.state,l=a.selectValue,s=a.isFocused,u=this.buildFocusableOptions(),d=i==="first"?0:u.length-1;if(!this.props.isMulti){var c=u.indexOf(l[0]);c>-1&&(d=c)}this.scrollToFocusedOptionOnUpdate=!(s&&this.menuListRef),this.setState({inputIsHiddenAfterUpdate:!1,focusedValue:null,focusedOption:u[d],focusedOptionId:this.getFocusedOptionId(u[d])},function(){return o.onMenuOpen()})}},{key:"focusValue",value:function(i){var o=this.state,a=o.selectValue,l=o.focusedValue;if(this.props.isMulti){this.setState({focusedOption:null});var s=a.indexOf(l);l||(s=-1);var u=a.length-1,d=-1;if(a.length){switch(i){case"previous":s===0?d=0:s===-1?d=u:d=s-1;break;case"next":s>-1&&s<u&&(d=s+1);break}this.setState({inputIsHidden:d!==-1,focusedValue:a[d]})}}}},{key:"focusOption",value:function(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"first",o=this.props.pageSize,a=this.state.focusedOption,l=this.getFocusableOptions();if(l.length){var s=0,u=l.indexOf(a);a||(u=-1),i==="up"?s=u>0?u-1:l.length-1:i==="down"?s=(u+1)%l.length:i==="pageup"?(s=u-o,s<0&&(s=0)):i==="pagedown"?(s=u+o,s>l.length-1&&(s=l.length-1)):i==="last"&&(s=l.length-1),this.scrollToFocusedOptionOnUpdate=!0,this.setState({focusedOption:l[s],focusedValue:null,focusedOptionId:this.getFocusedOptionId(l[s])})}}},{key:"getTheme",value:function(){return this.props.theme?typeof this.props.theme=="function"?this.props.theme(qd):Z(Z({},qd),this.props.theme):qd}},{key:"getCommonProps",value:function(){var i=this.clearValue,o=this.cx,a=this.getStyles,l=this.getClassNames,s=this.getValue,u=this.selectOption,d=this.setValue,c=this.props,y=c.isMulti,p=c.isRtl,m=c.options,g=this.hasValue();return{clearValue:i,cx:o,getStyles:a,getClassNames:l,getValue:s,hasValue:g,isMulti:y,isRtl:p,options:m,selectOption:u,selectProps:c,setValue:d,theme:this.getTheme()}}},{key:"hasValue",value:function(){var i=this.state.selectValue;return i.length>0}},{key:"hasOptions",value:function(){return!!this.getFocusableOptions().length}},{key:"isClearable",value:function(){var i=this.props,o=i.isClearable,a=i.isMulti;return o===void 0?a:o}},{key:"isOptionDisabled",value:function(i,o){return u_(this.props,i,o)}},{key:"isOptionSelected",value:function(i,o){return c_(this.props,i,o)}},{key:"filterOption",value:function(i,o){return d_(this.props,i,o)}},{key:"formatOptionLabel",value:function(i,o){if(typeof this.props.formatOptionLabel=="function"){var a=this.props.inputValue,l=this.state.selectValue;return this.props.formatOptionLabel(i,{context:o,inputValue:a,selectValue:l})}else return this.getOptionLabel(i)}},{key:"formatGroupLabel",value:function(i){return this.props.formatGroupLabel(i)}},{key:"startListeningComposition",value:function(){document&&document.addEventListener&&(document.addEventListener("compositionstart",this.onCompositionStart,!1),document.addEventListener("compositionend",this.onCompositionEnd,!1))}},{key:"stopListeningComposition",value:function(){document&&document.removeEventListener&&(document.removeEventListener("compositionstart",this.onCompositionStart),document.removeEventListener("compositionend",this.onCompositionEnd))}},{key:"startListeningToTouch",value:function(){document&&document.addEventListener&&(document.addEventListener("touchstart",this.onTouchStart,!1),document.addEventListener("touchmove",this.onTouchMove,!1),document.addEventListener("touchend",this.onTouchEnd,!1))}},{key:"stopListeningToTouch",value:function(){document&&document.removeEventListener&&(document.removeEventListener("touchstart",this.onTouchStart),document.removeEventListener("touchmove",this.onTouchMove),document.removeEventListener("touchend",this.onTouchEnd))}},{key:"renderInput",value:function(){var i=this.props,o=i.isDisabled,a=i.isSearchable,l=i.inputId,s=i.inputValue,u=i.tabIndex,d=i.form,c=i.menuIsOpen,y=i.required,p=this.getComponents(),m=p.Input,g=this.state,w=g.inputIsHidden,h=g.ariaSelection,v=this.commonProps,x=l||this.getElementId("input"),S=Z(Z(Z({"aria-autocomplete":"list","aria-expanded":c,"aria-haspopup":!0,"aria-errormessage":this.props["aria-errormessage"],"aria-invalid":this.props["aria-invalid"],"aria-label":this.props["aria-label"],"aria-labelledby":this.props["aria-labelledby"],"aria-required":y,role:"combobox","aria-activedescendant":this.state.isAppleDevice?void 0:this.state.focusedOptionId||""},c&&{"aria-controls":this.getElementId("listbox")}),!a&&{"aria-readonly":!0}),this.hasValue()?(h==null?void 0:h.action)==="initial-input-focus"&&{"aria-describedby":this.getElementId("live-region")}:{"aria-describedby":this.getElementId("placeholder")});return a?b.createElement(m,J({},v,{autoCapitalize:"none",autoComplete:"off",autoCorrect:"off",id:x,innerRef:this.getInputRef,isDisabled:o,isHidden:w,onBlur:this.onInputBlur,onChange:this.handleInputChange,onFocus:this.onInputFocus,spellCheck:"false",tabIndex:u,form:d,type:"text",value:s},S)):b.createElement(mF,J({id:x,innerRef:this.getInputRef,onBlur:this.onInputBlur,onChange:iu,onFocus:this.onInputFocus,disabled:o,tabIndex:u,inputMode:"none",form:d,value:""},S))}},{key:"renderPlaceholderOrValue",value:function(){var i=this,o=this.getComponents(),a=o.MultiValue,l=o.MultiValueContainer,s=o.MultiValueLabel,u=o.MultiValueRemove,d=o.SingleValue,c=o.Placeholder,y=this.commonProps,p=this.props,m=p.controlShouldRenderValue,g=p.isDisabled,w=p.isMulti,h=p.inputValue,v=p.placeholder,x=this.state,S=x.selectValue,C=x.focusedValue,T=x.isFocused;if(!this.hasValue()||!m)return h?null:b.createElement(c,J({},y,{key:"placeholder",isDisabled:g,isFocused:T,innerProps:{id:this.getElementId("placeholder")}}),v);if(w)return S.map(function(_,M){var $=_===C,D="".concat(i.getOptionLabel(_),"-").concat(i.getOptionValue(_));return b.createElement(a,J({},y,{components:{Container:l,Label:s,Remove:u},isFocused:$,isDisabled:g,key:D,index:M,removeProps:{onClick:function(){return i.removeValue(_)},onTouchEnd:function(){return i.removeValue(_)},onMouseDown:function(j){j.preventDefault()}},data:_}),i.formatOptionLabel(_,"value"))});if(h)return null;var k=S[0];return b.createElement(d,J({},y,{data:k,isDisabled:g}),this.formatOptionLabel(k,"value"))}},{key:"renderClearIndicator",value:function(){var i=this.getComponents(),o=i.ClearIndicator,a=this.commonProps,l=this.props,s=l.isDisabled,u=l.isLoading,d=this.state.isFocused;if(!this.isClearable()||!o||s||!this.hasValue()||u)return null;var c={onMouseDown:this.onClearIndicatorMouseDown,onTouchEnd:this.onClearIndicatorTouchEnd,"aria-hidden":"true"};return b.createElement(o,J({},a,{innerProps:c,isFocused:d}))}},{key:"renderLoadingIndicator",value:function(){var i=this.getComponents(),o=i.LoadingIndicator,a=this.commonProps,l=this.props,s=l.isDisabled,u=l.isLoading,d=this.state.isFocused;if(!o||!u)return null;var c={"aria-hidden":"true"};return b.createElement(o,J({},a,{innerProps:c,isDisabled:s,isFocused:d}))}},{key:"renderIndicatorSeparator",value:function(){var i=this.getComponents(),o=i.DropdownIndicator,a=i.IndicatorSeparator;if(!o||!a)return null;var l=this.commonProps,s=this.props.isDisabled,u=this.state.isFocused;return b.createElement(a,J({},l,{isDisabled:s,isFocused:u}))}},{key:"renderDropdownIndicator",value:function(){var i=this.getComponents(),o=i.DropdownIndicator;if(!o)return null;var a=this.commonProps,l=this.props.isDisabled,s=this.state.isFocused,u={onMouseDown:this.onDropdownIndicatorMouseDown,onTouchEnd:this.onDropdownIndicatorTouchEnd,"aria-hidden":"true"};return b.createElement(o,J({},a,{innerProps:u,isDisabled:l,isFocused:s}))}},{key:"renderMenu",value:function(){var i=this,o=this.getComponents(),a=o.Group,l=o.GroupHeading,s=o.Menu,u=o.MenuList,d=o.MenuPortal,c=o.LoadingMessage,y=o.NoOptionsMessage,p=o.Option,m=this.commonProps,g=this.state.focusedOption,w=this.props,h=w.captureMenuScroll,v=w.inputValue,x=w.isLoading,S=w.loadingMessage,C=w.minMenuHeight,T=w.maxMenuHeight,k=w.menuIsOpen,_=w.menuPlacement,M=w.menuPosition,$=w.menuPortalTarget,D=w.menuShouldBlockScroll,A=w.menuShouldScrollIntoView,j=w.noOptionsMessage,F=w.onMenuScrollToTop,R=w.onMenuScrollToBottom;if(!k)return null;var L=function(U,G){var H=U.type,X=U.data,ee=U.isDisabled,fe=U.isSelected,be=U.label,ie=U.value,Me=g===X,Be=ee?void 0:function(){return i.onOptionHover(X)},Ve=ee?void 0:function(){return i.selectOption(X)},li="".concat(i.getElementId("option"),"-").concat(G),yt={id:li,onClick:Ve,onMouseMove:Be,onMouseOver:Be,tabIndex:-1,role:"option","aria-selected":i.state.isAppleDevice?void 0:fe};return b.createElement(p,J({},m,{innerProps:yt,data:X,isDisabled:ee,isSelected:fe,key:li,label:be,type:H,value:ie,isFocused:Me,innerRef:Me?i.getFocusedOptionRef:void 0}),i.formatOptionLabel(U.data,"menu"))},O;if(this.hasOptions())O=this.getCategorizedOptions().map(function(N){if(N.type==="group"){var U=N.data,G=N.options,H=N.index,X="".concat(i.getElementId("group"),"-").concat(H),ee="".concat(X,"-heading");return b.createElement(a,J({},m,{key:X,data:U,options:G,Heading:l,headingProps:{id:ee,data:N.data},label:i.formatGroupLabel(N.data)}),N.options.map(function(fe){return L(fe,"".concat(H,"-").concat(fe.index))}))}else if(N.type==="option")return L(N,"".concat(N.index))});else if(x){var P=S({inputValue:v});if(P===null)return null;O=b.createElement(c,m,P)}else{var I=j({inputValue:v});if(I===null)return null;O=b.createElement(y,m,I)}var z={minMenuHeight:C,maxMenuHeight:T,menuPlacement:_,menuPosition:M,menuShouldScrollIntoView:A},B=b.createElement(YR,J({},m,z),function(N){var U=N.ref,G=N.placerProps,H=G.placement,X=G.maxHeight;return b.createElement(s,J({},m,z,{innerRef:U,innerProps:{onMouseDown:i.onMenuMouseDown,onMouseMove:i.onMenuMouseMove},isLoading:x,placement:H}),b.createElement(wF,{captureEnabled:h,onTopArrive:F,onBottomArrive:R,lockEnabled:D},function(ee){return b.createElement(u,J({},m,{innerRef:function(be){i.getMenuListRef(be),ee(be)},innerProps:{role:"listbox","aria-multiselectable":m.isMulti,id:i.getElementId("listbox")},isLoading:x,maxHeight:X,focusedOption:g}),O)}))});return $||M==="fixed"?b.createElement(d,J({},m,{appendTo:$,controlElement:this.controlRef,menuPlacement:_,menuPosition:M}),B):B}},{key:"renderFormField",value:function(){var i=this,o=this.props,a=o.delimiter,l=o.isDisabled,s=o.isMulti,u=o.name,d=o.required,c=this.state.selectValue;if(d&&!this.hasValue()&&!l)return b.createElement(CF,{name:u,onFocus:this.onValueInputFocus});if(!(!u||l))if(s)if(a){var y=c.map(function(g){return i.getOptionValue(g)}).join(a);return b.createElement("input",{name:u,type:"hidden",value:y})}else{var p=c.length>0?c.map(function(g,w){return b.createElement("input",{key:"i-".concat(w),name:u,type:"hidden",value:i.getOptionValue(g)})}):b.createElement("input",{name:u,type:"hidden",value:""});return b.createElement("div",null,p)}else{var m=c[0]?this.getOptionValue(c[0]):"";return b.createElement("input",{name:u,type:"hidden",value:m})}}},{key:"renderLiveRegion",value:function(){var i=this.commonProps,o=this.state,a=o.ariaSelection,l=o.focusedOption,s=o.focusedValue,u=o.isFocused,d=o.selectValue,c=this.getFocusableOptions();return b.createElement(uF,J({},i,{id:this.getElementId("live-region"),ariaSelection:a,focusedOption:l,focusedValue:s,isFocused:u,selectValue:d,focusableOptions:c,isAppleDevice:this.state.isAppleDevice}))}},{key:"render",value:function(){var i=this.getComponents(),o=i.Control,a=i.IndicatorsContainer,l=i.SelectContainer,s=i.ValueContainer,u=this.props,d=u.className,c=u.id,y=u.isDisabled,p=u.menuIsOpen,m=this.state.isFocused,g=this.commonProps=this.getCommonProps();return b.createElement(l,J({},g,{className:d,innerProps:{id:c,onKeyDown:this.onKeyDown},isDisabled:y,isFocused:m}),this.renderLiveRegion(),b.createElement(o,J({},g,{innerRef:this.getControlRef,innerProps:{onMouseDown:this.onControlMouseDown,onTouchEnd:this.onControlTouchEnd},isDisabled:y,isFocused:m,menuIsOpen:p}),b.createElement(s,J({},g,{isDisabled:y}),this.renderPlaceholderOrValue(),this.renderInput()),b.createElement(a,J({},g,{isDisabled:y}),this.renderClearIndicator(),this.renderLoadingIndicator(),this.renderIndicatorSeparator(),this.renderDropdownIndicator())),this.renderMenu(),this.renderFormField())}}],[{key:"getDerivedStateFromProps",value:function(i,o){var a=o.prevProps,l=o.clearFocusValueOnUpdate,s=o.inputIsHiddenAfterUpdate,u=o.ariaSelection,d=o.isFocused,c=o.prevWasFocused,y=o.instancePrefix,p=i.options,m=i.value,g=i.menuIsOpen,w=i.inputValue,h=i.isMulti,v=f1(m),x={};if(a&&(m!==a.value||p!==a.options||g!==a.menuIsOpen||w!==a.inputValue)){var S=g?NF(i,v):[],C=g?P1(rl(i,v),"".concat(y,"-option")):[],T=l?BF(o,v):null,k=VF(o,S),_=Xd(C,k);x={selectValue:v,focusedOption:k,focusedOptionId:_,focusableOptionsWithIds:C,focusedValue:T,clearFocusValueOnUpdate:!1}}var M=s!=null&&i!==a?{inputIsHidden:s,inputIsHiddenAfterUpdate:void 0}:{},$=u,D=d&&c;return d&&!D&&($={value:Os(h,v,v[0]||null),options:v,action:"initial-input-focus"},D=!c),(u==null?void 0:u.action)==="initial-input-focus"&&($=null),Z(Z(Z({},x),M),{},{prevProps:i,ariaSelection:$,prevWasFocused:D})}}]),n}(b.Component);p_.defaultProps=zF;var HF=b.forwardRef(function(e,t){var n=oR(e);return b.createElement(p_,J({ref:t},n))}),Tc=HF;const WF=E.div`
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
`,GF=E.label`
  font-size: 14px;
  color: #666;
  margin-bottom: 5px;
`,YF=({cityOptions:e,selectedCity:t,onChange:n,onInputChange:r})=>f.jsxs(WF,{children:[f.jsx(GF,{children:"Місто"}),f.jsx(Tc,{options:e,onInputChange:r,onChange:n,placeholder:"Почніть вводити місто...",value:t,noOptionsMessage:()=>"Введіть назву міста"})]}),qF=E.div`
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
`,XF=E.label`
  font-size: 14px;
  color: #666;
  margin-bottom: 5px;
`,KF=({options:e=[],value:t,onChange:n,selectedCity:r})=>f.jsxs(qF,{children:[f.jsx(XF,{children:"Спосіб доставки"}),f.jsx(Tc,{options:e,placeholder:"Оберіть спосіб доставки...",isDisabled:!r,value:e.find(i=>i.value===t)||null,onChange:i=>n(i.value)})]}),O1=E.div`
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
`,j1=E.label`
  font-size: 14px;
  color: #666;
  margin-bottom: 5px;
`,QF=({deliveryMethod:e,officeOptions:t,selectedOffice:n,selectedUkrOffice:r,setSelectedOffice:i,setSelectedUkrOffice:o})=>e==="nova"?f.jsxs(O1,{children:[f.jsx(j1,{children:"Відділення Нової пошти"}),f.jsx(Tc,{options:t,onChange:a=>i(a),value:n,placeholder:"Оберіть відділення..."})]}):e==="ukr"?f.jsxs(O1,{children:[f.jsx(j1,{children:"Адреса доставки (Укрпошта)"}),f.jsx("input",{type:"text",value:r,onChange:a=>o(a.target.value),placeholder:"Наприклад:  вул. Шевченка, 10, індекс 01001",style:{padding:"8px 12px",border:"1px solid #c6c5c5",borderRadius:"4px",outline:"none"}})]}):null,ZF=E.div`
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
`;const JF=E.button`
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
`,ez=E.ul`
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
`,tz=E.li`
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
`,nz=E.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 6px;
  border: 1px solid #eee;
  background-color: #f9f9f9;
`,rz=E.div`
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
`,iz=E.div`
  text-align: center;
  width: 100px;
 
`,oz=E.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 2px;
`,az=E.span`
  font-size: 18px;
  font-weight: 600;
  color: ${({$discount:e})=>"#111"};
`,sz=E.span`
  font-size: 13px;
  color: #999;
  text-decoration: line-through;
`,lz=E.span`
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
`,uz=({cartItems:e,totalAmount:t,totalQuantity:n,isFormValid:r,handleSubmit:i})=>f.jsxs(ZF,{children:[f.jsx("h3",{children:"Ваше замовлення"}),f.jsx(ez,{children:e.map((o,a)=>{var c,y;const l=o.new_price&&o.new_price<o.price,s=l?o.new_price:o.price,u=l?Math.round((o.price-o.new_price)/o.price*100):0,d=s*(o.quantity||1);return f.jsxs(tz,{children:[f.jsx(nz,{src:((y=(c=o.images)==null?void 0:c[0])==null?void 0:y.url)||no,alt:o.name}),f.jsxs(rz,{children:[f.jsx("p",{className:"item-name",children:o.name}),f.jsxs("p",{className:"item-details",children:[o.quantity," шт. × ",o.price," грн"]})]}),f.jsx(iz,{children:f.jsxs(oz,{children:[f.jsxs(az,{$discount:l,children:[d.toLocaleString()," грн"]}),l&&f.jsxs(f.Fragment,{children:[f.jsxs(sz,{children:[(o.price*(o.quantity||1)).toLocaleString()," грн"]}),f.jsxs(lz,{children:["-",u,"%"]})]})]})})]},`${o.id}-${a}`)})}),f.jsxs("div",{className:"summary-row",children:[f.jsxs("span",{children:["Товари (",n,")"]}),f.jsxs("span",{children:[t," грн"]})]}),f.jsxs("div",{className:"summary-row",children:[f.jsx("span",{children:"Доставка"}),f.jsx("span",{children:"За тарифами перевізника"})]}),f.jsx("hr",{}),f.jsxs("div",{className:"total",children:[f.jsx("span",{children:"Всього до сплати:"}),f.jsxs("span",{children:[t," грн"]})]}),f.jsx(JF,{type:"submit",disabled:!r,onClick:i,style:{opacity:r?1:.5,cursor:r?"pointer":"not-allowed"},children:"Підтвердити замовлення"}),!r&&f.jsx("p",{style:{color:"#888",fontSize:"12px",marginTop:"10px",textAlign:"center"},children:"Заповніть всі поля правильно, щоб продовжити"})]});var h_={exports:{}};function cz(e){return e&&typeof e=="object"&&"default"in e?e.default:e}var Kd=cz(b),dz=Eu;function fz(e,t){for(var n=Object.getOwnPropertyNames(t),r=0;r<n.length;r++){var i=n[r],o=Object.getOwnPropertyDescriptor(t,i);o&&o.configurable&&e[i]===void 0&&Object.defineProperty(e,i,o)}return e}function Up(){return(Up=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function pz(e,t){e.prototype=Object.create(t.prototype),fz(e.prototype.constructor=e,t)}function hz(e,t){if(e==null)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],0<=t.indexOf(n)||(i[n]=e[n]);return i}function yi(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var mz=function(e,t,n,r,i,o,a,l){if(!e){var s;if(t===void 0)s=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var u=[n,r,i,o,a,l],d=0;(s=new Error(t.replace(/%s/g,function(){return u[d++]}))).name="Invariant Violation"}throw s.framesToPop=1,s}},M1=mz;function $1(e,t,n){if("selectionStart"in e&&"selectionEnd"in e)e.selectionStart=t,e.selectionEnd=n;else{var r=e.createTextRange();r.collapse(!0),r.moveStart("character",t),r.moveEnd("character",n-t),r.select()}}function gz(e){var t=0,n=0;if("selectionStart"in e&&"selectionEnd"in e)t=e.selectionStart,n=e.selectionEnd;else{var r=document.selection.createRange();r.parentElement()===e&&(t=-r.moveStart("character",-e.value.length),n=-r.moveEnd("character",-e.value.length))}return{start:t,end:n,length:n-t}}var vz={9:"[0-9]",a:"[A-Za-z]","*":"[A-Za-z0-9]"},yz="_";function I1(e,t,n){var r="",i="",o=null,a=[];if(t===void 0&&(t=yz),n==null&&(n=vz),!e||typeof e!="string")return{maskChar:t,formatChars:n,mask:null,prefix:null,lastEditablePosition:null,permanents:[]};var l=!1;return e.split("").forEach(function(s){l=!l&&s==="\\"||(l||!n[s]?(a.push(r.length),r.length===a.length-1&&(i+=s)):o=r.length+1,r+=s,!1)}),{maskChar:t,formatChars:n,prefix:i,mask:r,lastEditablePosition:o,permanents:a}}function Rt(e,t){return e.permanents.indexOf(t)!==-1}function Oc(e,t,n){var r=e.mask,i=e.formatChars;if(!n)return!1;if(Rt(e,t))return r[t]===n;var o=i[r[t]];return new RegExp(o).test(n)}function D1(e,t){return t.split("").every(function(n,r){return Rt(e,r)||!Oc(e,r,n)})}function Yo(e,t){var n=e.maskChar,r=e.prefix;if(!n){for(;t.length>r.length&&Rt(e,t.length-1);)t=t.slice(0,t.length-1);return t.length}for(var i=r.length,o=t.length;o>=r.length;o--){var a=t[o];if(!Rt(e,o)&&Oc(e,o,a)){i=o+1;break}}return i}function m_(e,t){return Yo(e,t)===e.mask.length}function Fn(e,t){var n=e.maskChar,r=e.mask,i=e.prefix;if(!n){for((t=Hp(e,"",t,0)).length<i.length&&(t=i);t.length<r.length&&Rt(e,t.length);)t+=r[t.length];return t}if(t)return Hp(e,Fn(e,""),t,0);for(var o=0;o<r.length;o++)Rt(e,o)?t+=r[o]:t+=n;return t}function xz(e,t,n,r){var i=n+r,o=e.maskChar,a=e.mask,l=e.prefix,s=t.split("");if(o)return s.map(function(d,c){return c<n||i<=c?d:Rt(e,c)?a[c]:o}).join("");for(var u=i;u<s.length;u++)Rt(e,u)&&(s[u]="");return n=Math.max(l.length,n),s.splice(n,i-n),t=s.join(""),Fn(e,t)}function Hp(e,t,n,r){var i=e.mask,o=e.maskChar,a=e.prefix,l=n.split(""),s=m_(e,t);return!o&&r>t.length&&(t+=i.slice(t.length,r)),l.every(function(u){for(;p=u,Rt(e,y=r)&&p!==i[y];){if(r>=t.length&&(t+=i[r]),d=u,c=r,o&&Rt(e,c)&&d===o)return!0;if(++r>=i.length)return!1}var d,c,y,p;return!Oc(e,r,u)&&u!==o||(r<t.length?t=o||s||r<a.length?t.slice(0,r)+u+t.slice(r+1):(t=t.slice(0,r)+u+t.slice(r),Fn(e,t)):o||(t+=u),++r<i.length)}),t}function bz(e,t,n,r){var i=e.mask,o=e.maskChar,a=n.split(""),l=r;return a.every(function(s){for(;d=s,Rt(e,u=r)&&d!==i[u];)if(++r>=i.length)return!1;var u,d;return(Oc(e,r,s)||s===o)&&r++,r<i.length}),r-l}function wz(e,t){for(var n=t;0<=n;--n)if(!Rt(e,n))return n;return null}function aa(e,t){for(var n=e.mask,r=t;r<n.length;++r)if(!Rt(e,r))return r;return null}function Qd(e){return e||e===0?e+"":""}function Sz(e,t,n,r,i){var o=e.mask,a=e.prefix,l=e.lastEditablePosition,s=t,u="",d=0,c=0,y=Math.min(i.start,n.start);return n.end>i.start?c=(d=bz(e,r,u=s.slice(i.start,n.end),y))?i.length:0:s.length<r.length&&(c=r.length-s.length),s=r,c&&(c===1&&!i.length&&(y=i.start===n.start?aa(e,n.start):wz(e,n.start)),s=xz(e,s,y,c)),s=Hp(e,s,u,y),(y+=d)>=o.length?y=o.length:y<a.length&&!d?y=a.length:y>=a.length&&y<l&&d&&(y=aa(e,y)),u||(u=null),{value:s=Fn(e,s),enteredString:u,selection:{start:y,end:y}}}function _z(){var e=new RegExp("windows","i"),t=new RegExp("phone","i"),n=navigator.userAgent;return e.test(n)&&t.test(n)}function xt(e){return typeof e=="function"}function Cz(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame}function g_(){return window.cancelAnimationFrame||window.webkitCancelRequestAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame}function L1(e){return(g_()?Cz():function(){return setTimeout(e,1e3/60)})(e)}function Zd(e){(g_()||clearTimeout)(e)}var Ez=function(e){function t(r){var i=e.call(this,r)||this;i.focused=!1,i.mounted=!1,i.previousSelection=null,i.selectionDeferId=null,i.saveSelectionLoopDeferId=null,i.saveSelectionLoop=function(){i.previousSelection=i.getSelection(),i.saveSelectionLoopDeferId=L1(i.saveSelectionLoop)},i.runSaveSelectionLoop=function(){i.saveSelectionLoopDeferId===null&&i.saveSelectionLoop()},i.stopSaveSelectionLoop=function(){i.saveSelectionLoopDeferId!==null&&(Zd(i.saveSelectionLoopDeferId),i.saveSelectionLoopDeferId=null,i.previousSelection=null)},i.getInputDOMNode=function(){if(!i.mounted)return null;var m=dz.findDOMNode(yi(yi(i))),g=typeof window<"u"&&m instanceof window.Element;if(m&&!g)return null;if(m.nodeName!=="INPUT"&&(m=m.querySelector("input")),!m)throw new Error("react-input-mask: inputComponent doesn't contain input node");return m},i.getInputValue=function(){var m=i.getInputDOMNode();return m?m.value:null},i.setInputValue=function(m){var g=i.getInputDOMNode();g&&(i.value=m,g.value=m)},i.setCursorToEnd=function(){var m=Yo(i.maskOptions,i.value),g=aa(i.maskOptions,m);g!==null&&i.setCursorPosition(g)},i.setSelection=function(m,g,w){w===void 0&&(w={});var h=i.getInputDOMNode(),v=i.isFocused();h&&v&&(w.deferred||$1(h,m,g),i.selectionDeferId!==null&&Zd(i.selectionDeferId),i.selectionDeferId=L1(function(){i.selectionDeferId=null,$1(h,m,g)}),i.previousSelection={start:m,end:g,length:Math.abs(g-m)})},i.getSelection=function(){return gz(i.getInputDOMNode())},i.getCursorPosition=function(){return i.getSelection().start},i.setCursorPosition=function(m){i.setSelection(m,m)},i.isFocused=function(){return i.focused},i.getBeforeMaskedValueChangeConfig=function(){var m=i.maskOptions,g=m.mask,w=m.maskChar,h=m.permanents,v=m.formatChars;return{mask:g,maskChar:w,permanents:h,alwaysShowMask:!!i.props.alwaysShowMask,formatChars:v}},i.isInputAutofilled=function(m,g,w,h){var v=i.getInputDOMNode();try{if(v.matches(":-webkit-autofill"))return!0}catch{}return!i.focused||h.end<w.length&&g.end===m.length},i.onChange=function(m){var g=yi(yi(i)).beforePasteState,w=yi(yi(i)).previousSelection,h=i.props.beforeMaskedValueChange,v=i.getInputValue(),x=i.value,S=i.getSelection();i.isInputAutofilled(v,S,x,w)&&(x=Fn(i.maskOptions,""),w={start:0,end:0,length:0}),g&&(w=g.selection,x=g.value,S={start:w.start+v.length,end:w.start+v.length,length:0},v=x.slice(0,w.start)+v+x.slice(w.end),i.beforePasteState=null);var C=Sz(i.maskOptions,v,S,x,w),T=C.enteredString,k=C.selection,_=C.value;if(xt(h)){var M=h({value:_,selection:k},{value:x,selection:w},T,i.getBeforeMaskedValueChangeConfig());_=M.value,k=M.selection}i.setInputValue(_),xt(i.props.onChange)&&i.props.onChange(m),i.isWindowsPhoneBrowser?i.setSelection(k.start,k.end,{deferred:!0}):i.setSelection(k.start,k.end)},i.onFocus=function(m){var g=i.props.beforeMaskedValueChange,w=i.maskOptions,h=w.mask,v=w.prefix;if(i.focused=!0,i.mounted=!0,h){if(i.value)Yo(i.maskOptions,i.value)<i.maskOptions.mask.length&&i.setCursorToEnd();else{var x=Fn(i.maskOptions,v),S=Fn(i.maskOptions,x),C=Yo(i.maskOptions,S),T=aa(i.maskOptions,C),k={start:T,end:T};if(xt(g)){var _=g({value:S,selection:k},{value:i.value,selection:null},null,i.getBeforeMaskedValueChangeConfig());S=_.value,k=_.selection}var M=S!==i.getInputValue();M&&i.setInputValue(S),M&&xt(i.props.onChange)&&i.props.onChange(m),i.setSelection(k.start,k.end)}i.runSaveSelectionLoop()}xt(i.props.onFocus)&&i.props.onFocus(m)},i.onBlur=function(m){var g=i.props.beforeMaskedValueChange,w=i.maskOptions.mask;if(i.stopSaveSelectionLoop(),i.focused=!1,w&&!i.props.alwaysShowMask&&D1(i.maskOptions,i.value)){var h="";xt(g)&&(h=g({value:h,selection:null},{value:i.value,selection:i.previousSelection},null,i.getBeforeMaskedValueChangeConfig()).value);var v=h!==i.getInputValue();v&&i.setInputValue(h),v&&xt(i.props.onChange)&&i.props.onChange(m)}xt(i.props.onBlur)&&i.props.onBlur(m)},i.onMouseDown=function(m){if(!i.focused&&document.addEventListener){i.mouseDownX=m.clientX,i.mouseDownY=m.clientY,i.mouseDownTime=new Date().getTime();var g=function w(h){if(document.removeEventListener("mouseup",w),i.focused){var v=Math.abs(h.clientX-i.mouseDownX),x=Math.abs(h.clientY-i.mouseDownY),S=Math.max(v,x),C=new Date().getTime()-i.mouseDownTime;(S<=10&&C<=200||S<=5&&C<=300)&&i.setCursorToEnd()}};document.addEventListener("mouseup",g)}xt(i.props.onMouseDown)&&i.props.onMouseDown(m)},i.onPaste=function(m){xt(i.props.onPaste)&&i.props.onPaste(m),m.defaultPrevented||(i.beforePasteState={value:i.getInputValue(),selection:i.getSelection()},i.setInputValue(""))},i.handleRef=function(m){i.props.children==null&&xt(i.props.inputRef)&&i.props.inputRef(m)};var o=r.mask,a=r.maskChar,l=r.formatChars,s=r.alwaysShowMask,u=r.beforeMaskedValueChange,d=r.defaultValue,c=r.value;i.maskOptions=I1(o,a,l),d==null&&(d=""),c==null&&(c=d);var y=Qd(c);if(i.maskOptions.mask&&(s||y)&&(y=Fn(i.maskOptions,y),xt(u))){var p=r.value;r.value==null&&(p=d),y=u({value:y,selection:null},{value:p=Qd(p),selection:null},null,i.getBeforeMaskedValueChangeConfig()).value}return i.value=y,i}pz(t,e);var n=t.prototype;return n.componentDidMount=function(){this.mounted=!0,this.getInputDOMNode()&&(this.isWindowsPhoneBrowser=_z(),this.maskOptions.mask&&this.getInputValue()!==this.value&&this.setInputValue(this.value))},n.componentDidUpdate=function(){var r=this.previousSelection,i=this.props,o=i.beforeMaskedValueChange,a=i.alwaysShowMask,l=i.mask,s=i.maskChar,u=i.formatChars,d=this.maskOptions,c=a||this.isFocused(),y=this.props.value!=null,p=y?Qd(this.props.value):this.value,m=r?r.start:null;if(this.maskOptions=I1(l,s,u),this.maskOptions.mask){!d.mask&&this.isFocused()&&this.runSaveSelectionLoop();var g=this.maskOptions.mask&&this.maskOptions.mask!==d.mask;if(d.mask||y||(p=this.getInputValue()),(g||this.maskOptions.mask&&(p||c))&&(p=Fn(this.maskOptions,p)),g){var w=Yo(this.maskOptions,p);(m===null||w<m)&&(m=m_(this.maskOptions,p)?w:aa(this.maskOptions,w))}!this.maskOptions.mask||!D1(this.maskOptions,p)||c||y&&this.props.value||(p="");var h={start:m,end:m};if(xt(o)){var v=o({value:p,selection:h},{value:this.value,selection:this.previousSelection},null,this.getBeforeMaskedValueChangeConfig());p=v.value,h=v.selection}this.value=p;var x=this.getInputValue()!==this.value;x?(this.setInputValue(this.value),this.forceUpdate()):g&&this.forceUpdate();var S=!1;h.start!=null&&h.end!=null&&(S=!r||r.start!==h.start||r.end!==h.end),(S||x)&&this.setSelection(h.start,h.end)}else d.mask&&(this.stopSaveSelectionLoop(),this.forceUpdate())},n.componentWillUnmount=function(){this.mounted=!1,this.selectionDeferId!==null&&Zd(this.selectionDeferId),this.stopSaveSelectionLoop()},n.render=function(){var r,i=this.props,o=(i.mask,i.alwaysShowMask,i.maskChar,i.formatChars,i.inputRef,i.beforeMaskedValueChange,i.children),a=hz(i,["mask","alwaysShowMask","maskChar","formatChars","inputRef","beforeMaskedValueChange","children"]);if(o){xt(o)||M1(!1);var l=["onChange","onPaste","onMouseDown","onFocus","onBlur","value","disabled","readOnly"],s=Up({},a);l.forEach(function(d){return delete s[d]}),r=o(s),l.filter(function(d){return r.props[d]!=null&&r.props[d]!==a[d]}).length&&M1(!1)}else r=Kd.createElement("input",Up({ref:this.handleRef},a));var u={onFocus:this.onFocus,onBlur:this.onBlur};return this.maskOptions.mask&&(a.disabled||a.readOnly||(u.onChange=this.onChange,u.onPaste=this.onPaste,u.onMouseDown=this.onMouseDown),a.value!=null&&(u.value=this.value)),r=Kd.cloneElement(r,u)},t}(Kd.Component),kz=Ez;h_.exports=kz;var Pz=h_.exports;const Tz=Gp(Pz);E.div`
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
`;const Jd=E.div`
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
`,ef=E.label`
  font-size: 14px;
  color: #666;
  margin-bottom: 5px;
`,tf=E.input`
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
`;const nf=E.span`
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
`;const Oz=({formData:e,setFormData:t,errors:n})=>{const r=i=>{const{name:o,value:a}=i.target;o==="phone"&&!a.startsWith("+38 (0")||t(l=>({...l,[o]:a}))};return f.jsxs(f.Fragment,{children:[f.jsx("h3",{children:"Контактні дані"}),f.jsxs(Jd,{children:[f.jsx(ef,{children:"Прізвище та ім’я"}),f.jsx(tf,{type:"text",name:"fullName",value:e.fullName,onChange:r,placeholder:"Прізвище Ім'я",autoComplete:"name"}),n.fullName&&f.jsx(nf,{children:n.fullName})]}),f.jsxs(Jd,{children:[f.jsx(ef,{children:"Номер телефону"}),f.jsx(Tz,{mask:"+38 (099) 999-99-99",maskChar:"_",name:"phone",autoComplete:"tel",value:e.phone,onChange:r,children:i=>f.jsx(tf,{...i,type:"tel"})}),n.phone&&f.jsx(nf,{children:n.phone})]}),f.jsxs(Jd,{children:[f.jsx(ef,{children:"E-mail"}),f.jsx(tf,{type:"email",name:"email",value:e.email,onChange:r,placeholder:"email@example.com",autoComplete:"email"}),n.email&&f.jsx(nf,{children:n.email})]})]})},jz=E.div`
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
`;const Mz=E.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  text-align: left;

  @media screen and (min-width: 1200px) {
    flex-direction: row;
    align-items: flex-start;
  }
`,$z=E.div`
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
`;const Iz=({options:e,value:t,onChange:n,error:r})=>{const i=e.find(o=>o.value===t)||null;return f.jsxs("div",{style:{marginBottom:"20px"},children:[f.jsx("label",{style:{display:"block",marginBottom:"8px"},children:"Спосіб оплати"}),f.jsx(Tc,{options:e,value:i,onChange:o=>n(o==null?void 0:o.value),placeholder:"Оберіть спосіб оплати",styles:{control:o=>({...o,borderColor:r?"red":o.borderColor})}}),r&&f.jsx("span",{style:{color:"red",fontSize:"12px"},children:"Оберіть спосіб оплати"})]})},rf={}.VITE_NP_API_KEY,A1="https://api.novaposhta.ua/v2.0/json/",Dz=()=>{const e=Ye(L=>L.cart.items),t=On(),n=jn();console.log("апі",rf);const[r,i]=b.useState({fullName:"",phone:"+38 (0",email:"",city:"",postOffice:""}),[o,a]=b.useState(""),[l,s]=b.useState(null),[u,d]=b.useState(null),[c,y]=b.useState(null),[p,m]=b.useState(null),[g,w]=b.useState([]),[h,v]=b.useState([]),[x,S]=b.useState(null),C=e.reduce((L,O)=>L+(O.new_price??O.price)*O.quantity,0),T=e.reduce((L,O)=>L+O.quantity,0),_=(()=>{const L=new Date().getFullYear().toString().slice(-2),O=Date.now().toString().slice(-4),P=Math.floor(100+Math.random()*900);return`${L}${O}${P}`})();console.log(_),b.useEffect(()=>{if(o.length<2)return;const L=setTimeout(async()=>{const P=await(await fetch(A1,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({apiKey:rf,modelName:"Address",calledMethod:"getCities",methodProperties:{FindByString:o}})})).json();w(P.data.map(I=>({value:I.Ref,label:I.Description})))},500);return()=>clearTimeout(L)},[o]),b.useEffect(()=>{if(!l||u!=="nova")return;(async()=>{const P=await(await fetch(A1,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({apiKey:rf,modelName:"AddressGeneral",calledMethod:"getWarehouses",methodProperties:{CityRef:l.value}})})).json();v(P.data.map(I=>({value:I.Ref,label:I.Description})))})()},[l,u]);const M=L=>{s(L),i(O=>({...O,city:(L==null?void 0:L.label)||"",postOffice:""})),d(null),y(null),m(null)},$=()=>{const L={};return r.fullName.trim().split(" ").length<2&&(L.fullName="Введіть прізвище та ім'я"),/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(r.email)||(L.email="Некоректний email"),r.phone.replace(/\D/g,"").length<12&&(L.phone="Номер неповний"),l||(L.city=!0),u==="nova"&&!c&&(L.postOffice=!0),u==="ukr"&&!p&&(L.postOffice=!0),u||(L.delivery=!0),x||(L.payment=!0),L},D=b.useMemo($,[r,u,c,p,l,x]),A=Object.keys(D).length===0&&e.length>0,j=async L=>{if(L.preventDefault(),!x){alert("Оберіть спосіб оплати");return}try{if(await fetch("https://backenddidiv-production.up.railway.app/api/orders",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({data:{name:r.fullName,phone:r.phone,email:r.email,city:r.city,products:e==null?void 0:e.map(P=>({id:P.id,name:P.name,quantity:P.quantity,price:P.new_price??P.price})),status_order:"pending",order_number:_,payment_method:x==="liqpay"?"Онлайн (LiqPay)":x==="cod"?"Післяплата":x==="bank_transfer"?"Оплата за реквізитами":"",delivery_method:u==="nova"?"Нова Пошта":u==="ukr"?"УкрПошта":"Самовивіз",delivery_address:u==="nova"?c==null?void 0:c.label:u==="ukr"?p:"Самовивіз"}})}),x==="liqpay"){const P=await fetch("https://backenddidiv-production.up.railway.app/api/liqpay/create",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({amount:C,order_number:_})}),{data:I,signature:z}=await P.json(),B=document.createElement("form");B.method="POST",B.action="https://www.liqpay.ua/api/3/checkout",B.innerHTML=`
        <input type="hidden" name="data" value="${I}" />
        <input type="hidden" name="signature" value="${z}" />
      `,document.body.appendChild(B),B.requestSubmit();return}const O={...r,name:r.fullName,city:l.label,deliveryMethod:u==="nova"?"Нова Пошта":u==="ukr"?"УкрПошта":"Самовивіз",address:u==="nova"?c==null?void 0:c.label:u==="ukr"?p:"Самовивіз",products:e==null?void 0:e.map(P=>({id:P.id,name:P.name,quantity:P.quantity,price:P.new_price??P.price})),total:C,order_number:_,delivery_address:u==="nova"?c==null?void 0:c.label:u==="ukr"?p:"Самовивіз",payment_method:x==="liqpay"?"Онлайн (LiqPay)":x==="cod"?"Післяплата":x==="bank_transfer"?"Оплата за реквізитами":""};n(am()),t("/order-confirmation",{state:{order:O}})}catch(O){console.error(O),alert("Помилка оформлення")}},F=b.useMemo(()=>[{value:"nova",label:"Нова пошта"},{value:"ukr",label:"Укрпошта"}],[]),R=[{value:"liqpay",label:"Онлайн оплата (LiqPay)"},{value:"cod",label:"Післяплата"},{value:"bank_transfer",label:"Оплата за реквізитами"}];return f.jsx(jz,{children:f.jsxs(Mz,{children:[f.jsxs($z,{children:[f.jsx(Oz,{formData:r,setFormData:i,errors:D}),f.jsx(YF,{cityOptions:g,selectedCity:l,onChange:M,onInputChange:a}),f.jsx(KF,{options:F,value:u,onChange:d,selectedCity:l}),f.jsx(QF,{deliveryMethod:u,officeOptions:h,selectedOffice:c,selectedUkrOffice:p,setSelectedOffice:y,setSelectedUkrOffice:m}),f.jsx(Iz,{options:R,value:x,onChange:S,error:D.payment})]}),f.jsx(uz,{cartItems:e,totalAmount:C,totalQuantity:T,isFormValid:A,handleSubmit:j})]})})},Lz=E.div`
font-family: var(--main-font);
  max-width: 800px;
  margin: 40px auto;
  padding: 40px 20px;
  background: #ffffff;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  text-align: center;
  font-family: 'Inter', sans-serif;
`,Az=E.h1`
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
`,Rz=E.div`
font-family: var(--second-font);
  background: #f8f9fa;
  border-radius: 12px;
  padding: 24px;
  margin: 30px 0;
  text-align: left;
  border: 1px solid #edf2f7;
`,Fz=E.h3`
  font-size: 18px;
  font-weight: 500;
  color: #1a1a1a;
  margin-bottom: 16px;
  border-bottom: 2px solid #e2e8f0;
  padding-bottom: 8px;
`,zz=E.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 20px;
`,Nz=E.li`
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
`;const Bz=E.div`
  display: flex;
  gap: 15px;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 20px;
`,R1=E.button`
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
`,Vz=()=>{var y,p;const e=On(),t=ri(),[n]=ZC(),r=jn(),i=(y=t.state)==null?void 0:y.order,o=n.get("orderId"),[a,l]=b.useState(i||null),[s,u]=b.useState(!i);b.useEffect(()=>{r(am())},[r]),b.useEffect(()=>{i||(o?fetch(`https://backenddidiv-production.up.railway.app/api/orders?filters[order_number][$eq]=${o}&populate=*`).then(m=>m.json()).then(m=>{var g;((g=m.data)==null?void 0:g.length)>0&&l(m.data[0]),u(!1)}).catch(()=>u(!1)):u(!1))},[o,i]),console.log(a);const c=((a==null?void 0:a.products)??[]).reduce((m,g)=>m+Number(g.new_price??g.price)*(g.quantity||1),0);return s?f.jsx("div",{children:"Завантаження..."}):a?f.jsxs(Lz,{children:[f.jsx(Az,{children:"Дякуємо за ваше замовлення!"}),f.jsxs(Ir,{children:["Ваше замовлення ",f.jsxs("strong",{children:["№",a.order_number]})," успішно прийняте."]}),f.jsx(Ir,{children:"Ми зв’яжемось з Вами в найближчий час"}),f.jsxs(Rz,{children:[f.jsx(Fz,{children:"Деталі замовлення:"}),f.jsx(zz,{children:(p=a.products)==null?void 0:p.map(m=>f.jsxs(Nz,{children:[f.jsxs("span",{className:"item-info",children:[m.name," (x",m.quantity,")"]}),f.jsxs("span",{className:"item-price",children:[(m.new_price??m.price)*(m.quantity||1)," грн"]})]},m.id))}),f.jsxs(Ir,{children:[f.jsx("strong",{children:"На суму:"})," ",c," грн."]}),f.jsxs(Ir,{children:[f.jsx("strong",{children:"Отрмувач:"})," ",a.name,", ",a.phone,"."]}),f.jsxs(Ir,{children:[f.jsx("strong",{children:"Спосіб доставки:"})," ",a.deliveryMethod,"."]}),f.jsxs(Ir,{children:[f.jsx("strong",{children:"Адреса отримання:"})," ",a.city,","," ",a.delivery_address,"."]}),f.jsxs(Ir,{children:[f.jsx("strong",{children:"Спосіб оплати:"})," ",a.payment_method,"."]})]}),f.jsxs(Bz,{children:[f.jsx(R1,{primary:!0,onClick:()=>e("/"),children:"Повернутися на головну"}),f.jsx(R1,{onClick:()=>e("/catalog"),children:"Продовжити покупки"})]})]}):f.jsxs("div",{children:["Замовлення не знайдено",f.jsx("button",{onClick:()=>e("/"),children:"На головну"})]})},Uz=E.section`
  background-color: var(--second-background);
`,Hz=E.div`
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
`,Wz=E.section`
  padding: 40px 0;
  background-color: #f9f9f980;
  border-radius: 12px;
  margin-bottom: 30px;
`,Gz=E.h1`
  font-family: var(--main-font);
  font-size: 28px;
  color: var(--black-color);
  margin-bottom: 10px;

  @media screen and (min-width: 768px) {
    font-size: 42px;
  }
`,Yz=E.p`

  font-size: 16px;
  color: #666;
`,qz=E.section`
  margin-bottom: 50px;
`,Xz=E.p`
  font-family: var(--second-font);
  font-weight:400;
  font-size: 18px;
  line-height: 1.6;
  max-width: 800px;
  margin: 0 auto 40px;
  color: #444;
`,Kz=E.section`
  margin-bottom: 60px;
`,Qz=E.h2`
  margin-bottom: 30px;
`,Zz=E.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
`,js=E.div`
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
`,Jz=()=>f.jsxs(Uz,{children:[f.jsxs(Hz,{children:[f.jsxs(Wz,{children:[f.jsx(Gz,{children:"Про Дідів Хлів"}),f.jsx(Yz,{children:"Даємо друге життя якісним велозапчастинам"})]}),f.jsxs(qz,{children:[f.jsx(Xz,{children:"Бізнес створений з переконанням, що обладнання може бути доступним. Ми спеціалізуємося на розборі цікавих і унікальних велосипедів, усі запчастини перевірені нами. Стараємося пропонувати тільки найкраще від Shimano, Sram, Campagnolo та інших світових брендів."}),f.jsx(n2,{})]}),f.jsxs(Kz,{children:[f.jsx(Qz,{children:"Наша майстерня"}),f.jsxs(Zz,{children:[f.jsx(js,{color:"#e2e2e2",children:"Фото майстерні"}),f.jsx(js,{color:"#d1d1d1",children:"Процес діагностики"}),f.jsx(js,{color:"#bcbcbc",children:"Склад запчастин"}),f.jsx(js,{color:"#a8a8a8",children:"Готові велосипеди"})]})]})]})," "]}),eN=()=>{const{pathname:e}=ri();return b.useEffect(()=>{window.scrollTo(0,0)},[e]),null},tN=E.section`
  background-color:  var(--second-background);
  padding: 40px 0;
  min-height: 80vh;
`,nN=E.div`
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
`,rN=E.h1`
  font-family: var(--main-font); 
  font-size: 32px;
  color: var(--black-color);
  margin-bottom: 10px;
  text-transform: uppercase;
`,iN=E.p`
  color: #585555;
  margin-bottom: 40px;
`,oN=E.div`
font-family: var(--second-font);
font-weight: 400;
  display: grid;
  gap: 40px;
  text-align: left;

  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    align-items: start;
  }
`,aN=E.div`
height: 427px;
  display: grid;
  gap: 25px;
    background: #ffffff;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
`,Ms=E.div`
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
`,sN=E.div`
  background: #ffffff;
  padding: 40px 30px;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%; 
`,lN=E.h2`
  margin-bottom: 15px;
  color: var(--brown-color);
  font-size: 24px;
  font-family: var(--main-font);
`,uN=E.p`
  color: #666;
  font-size: 14px;
  line-height: 1.6;
  margin-bottom: 30px;
`,cN=E.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
  
  @media screen and (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`,F1=E.a`
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
`;const dN=E.div`
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

 
`,fN=()=>f.jsx(tN,{children:f.jsxs(nN,{children:[f.jsx(rN,{children:"Контакти"}),f.jsx(iN,{children:"Зв’яжіться з нами для консультації або замовлення"}),f.jsxs(oN,{children:[f.jsxs(aN,{children:[f.jsxs(Ms,{children:[f.jsx("h3",{children:"Адреса"}),f.jsx("p",{children:"вул. Казармена 6Г, Київ, Україна"}),f.jsx("a",{style:{color:"black",fontWeight:"500",fontSize:"0.9rem",display:"inline-block",marginTop:"5px",cursor:"pointer"},href:"https://www.google.com/maps/search/?api=1&query=вул.+Казармена+6Г,+Київ,+Україна",target:"_blank",rel:"noopener noreferrer",children:"📍 Показати на карті"})]}),f.jsxs(Ms,{children:[f.jsx("h3",{children:"Телефон"}),f.jsx("p",{children:"+38 (097) 123-45-67"})]}),f.jsxs(Ms,{children:[f.jsx("h3",{children:"Email"}),f.jsx("p",{children:"didivhliv.com"})]}),f.jsxs(Ms,{children:[f.jsx("h3",{children:"Графік роботи"}),f.jsx("p",{children:"З 11:00 - 20:00"}),f.jsx("p",{children:"Вихідні: Пн, Чт"})]})]}),f.jsxs(sN,{children:[f.jsx(lN,{children:"Ми в соцмережах"}),f.jsx(uN,{children:"Слідкуйте за нашими новинами, новими надходженнями та крутими вело-поїздками у зручному для вас форматі."}),f.jsxs(cN,{children:[f.jsxs(F1,{href:"https://www.instagram.com/didivxliv?igsh=MXhsNWRjdW5rajYwdQ==",target:"_blank",rel:"noopener noreferrer",children:[f.jsx("svg",{width:"20px",children:f.jsx("use",{href:`${cn}#icon-instagram`})}),f.jsx("span",{children:"Instagram"})]}),f.jsxs(F1,{href:"https://t.me/didivxliv",target:"_blank",rel:"noopener noreferrer",children:[f.jsx("svg",{width:"20px",children:f.jsx("use",{href:`${cn}#icon-telegram`})}),f.jsx("span",{children:"Telegram"})]})]}),f.jsx(dN,{children:"Приєднуйся до спільноти!"})]})]})]})}),pN=E.section`
  background-color:  var(--second-background);
`,hN=E.div`
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
  
`,mN=E.div`
     width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  
`,gN=E.h1`

    font-size: 25px;
font-family: var(--main-font);
color: var( --black-color);
text-transform: uppercase;
 @media screen and (min-width: 360px) {
  font-size: 32px;
  }


@media screen and (min-width: 768px) {
  
  }

`,vN=E.div`
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
`,yN=E.div`
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
`,xN=E.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  padding:20px;

`,bN=E.div`
  padding: 16px;
      display: flex;
    align-content: center;
    align-items: center;
        justify-content: space-between;
`,wN=E.p`
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
`,v_=E.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  flex-wrap: wrap;
  gap: 5px;
  margin-bottom: 15px;
  margin-top: auto; 
 padding-top: 40px; 
`,Vi=E.button`
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
`,_N=E.div`
  position: relative;
  display: inline-block;
  

`,CN=E.button`
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
`,EN=E.div`
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
`,xi=E.div`
  padding: 10px 12px;
  cursor: pointer;

  &:hover {
    background: #f0f0f0;
  }
`,y_=E.div`
  height: 80vh;
          display: flex;
          flex-direction:
          column;
          justify-content: center;
          align-items: center;
          font-size: 30px;
`,x_=E(Oe)`
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
  
`,kN=E.section`
  background-color: var(--second-background);
  /* min-height: 100vh; */
`,PN=E.div`
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
`,TN=E.div`
width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`,ON=E.h1`

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

`,jN=E.div`
  width: 100%;
  display: grid;
  gap: 15px;

  grid-template-columns: 1fr;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
  }
`,MN=E.div`
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
`;const $N=E.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  padding: 20px;
`,IN=E.p`
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
`,DN=E.div`
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
`;const LN=E.div.attrs({className:"card-buttons"})`
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
`,su=E.button`
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
`;const AN=E.div`
  position: relative;
  display: inline-block;
  display:flex;
  
`,RN=E.div`
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
`,bi=E.div`
  padding: 10px 12px;
  cursor: pointer;

  &:hover {
    background: #f0f0f0;
  }
`,FN=E.button`
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
`,zN=()=>{const[e,t]=b.useState([]),[n,r]=b.useState(!0),i=Ye(C=>C.favorites.items),o=Ye(C=>C.cart.items),[a,l]=b.useState(!1),[s,u]=b.useState("date"),[d,c]=b.useState("asc"),[y,p]=b.useState(1),[m,g]=b.useState(1),w=On(),h=jn(),v=b.useRef(null);b.useEffect(()=>{const C=T=>{v.current&&!v.current.contains(T.target)&&l(!1)};return document.addEventListener("mousedown",C),()=>{document.removeEventListener("mousedown",C)}},[]),b.useEffect(()=>{window.scrollTo({top:0,behavior:"smooth"})},[y]),b.useEffect(()=>{(async()=>{const T=new Date,k=new Date;k.setDate(T.getDate()-7);const _=k.toISOString();try{r(!0);const M=await fetch(`https://backenddidiv-production.up.railway.app/api/products?populate=*&filters[createdAt][$gte]=${_}&pagination[page]=${y}&pagination[pageSize]=24`);if(!M.ok)throw new Error(`HTTP error! Status: ${M.status}`);const $=await M.json();t($.data),g($.meta.pagination.pageCount)}catch(M){console.error("Помилка при завантаженні продуктів:",M)}finally{r(!1)}})()},[y]);const x=b.useMemo(()=>{const C=[...e],T=k=>k.new_price&&k.new_price<k.price?k.new_price:k.price;switch(s){case"name":return C.sort((k,_)=>d==="asc"?k.name.localeCompare(_.name):_.name.localeCompare(k.name));case"price":return C.sort((k,_)=>{const M=T(k),$=T(_);return d==="asc"?M-$:$-M});case"date":return C.sort((k,_)=>d==="asc"?new Date(k.createdAt)-new Date(_.createdAt):new Date(_.createdAt)-new Date(k.createdAt));default:return C}},[s,e,d]),S=(C,T)=>{T.stopPropagation();const k=i.some(_=>_.id===C.id);h(ai(C)),k?q.warning(`${C.name} видалено з обраного`):q.info(`${C.name} додано в обране`)};return n?f.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"100vw",height:"100vh"},children:f.jsx(qa,{height:100,width:100,radius:5,color:"var(--orange-color)",ariaLabel:"ball-triangle-loading",wrapperStyle:{},wrapperClass:"",visible:!0})}):x.length===0?f.jsxs(y_,{children:[f.jsx("p",{style:{textAlign:"center"},children:"Нажаль, нічого нового за останній тиждень"}),f.jsxs(x_,{to:"/catalog",children:[f.jsx("p",{children:"Весь каталог"}),f.jsx($u,{size:24})]})]}):f.jsxs(pN,{children:[f.jsxs(hN,{children:[f.jsx(Or,{autoClose:1500}),f.jsxs(mN,{children:[f.jsx(gN,{children:"Нові товари "}),f.jsxs(_N,{ref:v,children:[f.jsxs(CN,{onClick:()=>l(C=>!C),children:["Сортування",f.jsx(Mu,{strokeWidth:.9,size:22})]}),a&&f.jsxs(EN,{children:[f.jsx(xi,{onClick:()=>{u("name"),c("asc"),l(!1)},children:"А-Я"}),f.jsx(xi,{onClick:()=>{u("name"),c("desc"),l(!1)},children:"Я-А"}),f.jsx(xi,{onClick:()=>{u("price"),c("asc"),l(!1)},children:"Ціна ↑"}),f.jsx(xi,{onClick:()=>{u("price"),c("desc"),l(!1)},children:"Ціна ↓"}),f.jsx(xi,{onClick:()=>{u("date"),c("desc"),l(!1)},children:"Спочатку новіші"}),f.jsx(xi,{onClick:()=>{u("date"),c("asc"),l(!1)},children:"Спочатку старіші"})]})]})]}),f.jsx(vN,{children:x.map(C=>{var R,L;const T=i.some(O=>O.id===C.id),k=(C==null?void 0:C.available)??!0,_=o.find(O=>O.id===C.id),$=(_?_.quantity:0)>=(C.stock||0),D=C.new_price&&C.new_price<C.price,A=D?C.new_price:C.price,j=D?Math.round((C.price-C.new_price)/C.price*100):0,F=(O,P)=>{if(P.stopPropagation(),$){q.error("Товар уже у кошику");return}h(ho({...O,quantity:1})),q.success(`${O.name} додано в кошик!`)};return f.jsxs(yN,{onClick:()=>w(`/product/${C.id}`),children:[!k&&f.jsx(sm,{children:"Заброньовано"}),f.jsx(xN,{src:((L=(R=C.images)==null?void 0:R[0])==null?void 0:L.url)||no,alt:C.name}),f.jsx(wN,{children:C.name}),f.jsxs(bN,{children:[f.jsx(wc,{children:f.jsxs(Sc,{children:[f.jsxs(_c,{$discount:D,children:[A.toLocaleString()," грн"]}),D&&f.jsxs(Cc,{children:[C.price.toLocaleString()," грн"]}),D&&f.jsxs(Ec,{children:["-",j,"%"]})]})}),f.jsxs(SN,{children:[k&&f.jsx(su,{onClick:O=>F(C,O),children:f.jsx(po,{size:24,color:_?"var(--orange-color)":"black",strokeWidth:2})}),f.jsx(su,{onClick:O=>S(C,O),children:f.jsx(Ua,{size:24,fill:T?"#ff4d4f":"none",color:T?"#ff4d4f":"#000000",strokeWidth:T?1:2})})]})]})]},C.id)})}),f.jsxs(v_,{children:[f.jsx(Vi,{onClick:()=>p(C=>Math.max(C-1,1)),disabled:y===1,children:"Назад"}),Array.from({length:m},(C,T)=>f.jsx(Vi,{onClick:()=>p(T+1),active:y===T+1,children:T+1},T)),f.jsx(Vi,{onClick:()=>p(C=>Math.min(C+1,m)),disabled:y===m,children:"Вперед"})]})]})," "]})},NN=()=>{const[e,t]=b.useState([]),[n,r]=b.useState(!0),[i,o]=b.useState(!1),[a,l]=b.useState("date"),[s,u]=b.useState("desc"),[d,c]=b.useState(1),y=24;console.log(i);const p=On(),m=jn(),g=Ye(_=>_.favorites.items),w=Ye(_=>_.cart.items),h=b.useRef(null);b.useEffect(()=>{const _=M=>{h.current&&!h.current.contains(M.target)&&o(!1)};return document.addEventListener("mousedown",_),()=>{document.removeEventListener("mousedown",_)}},[]),b.useEffect(()=>{(async()=>{const M="https://backenddidiv-production.up.railway.app";try{const D=await(await fetch(`${M}/api/products?filters[new_price][$notNull]=true&pagination[pageSize]=500&populate=*`)).json();console.log(D.data),t(D.data),r(!1)}catch($){console.log($)}})()},[]),b.useEffect(()=>{window.scrollTo({top:0,behavior:"smooth"})},[d]);const v=b.useMemo(()=>{const _=[...e];switch(a){case"name":return _.sort((M,$)=>s==="asc"?M.name.localeCompare($.name):$.name.localeCompare(M.name));case"price":return _.sort((M,$)=>s==="asc"?M.new_price-$.new_price:$.new_price-M.new_price);case"date":return _.sort((M,$)=>s==="asc"?new Date(M.createdAt)-new Date($.createdAt):new Date($.createdAt)-new Date(M.createdAt));default:return _}},[a,e,s]),x=d*y,S=x-y,C=v.slice(S,x),T=Math.ceil(e.length/y),k=(_,M)=>{M.stopPropagation();const $=g.some(D=>D.id===_.id);m(ai(_)),$?q.warning(`${_.name} видалено з обраного`):q.info(`${_.name} додано в обране`)};return n?f.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"100vw",height:"100vh"},children:f.jsx(qa,{height:100,width:100,radius:5,color:"var(--orange-color)",ariaLabel:"ball-triangle-loading",wrapperStyle:{},wrapperClass:"",visible:!0})}):e.length===0?f.jsxs(y_,{children:[f.jsx("p",{style:{textAlign:"center"},children:"Нажаль, поки знижок немає"}),f.jsxs(x_,{to:"/catalog",children:[f.jsx("p",{children:"Весь каталог"}),f.jsx($u,{size:24})]})]}):f.jsx(kN,{children:f.jsxs(PN,{children:[f.jsx(Or,{autoClose:1500}),f.jsxs(TN,{children:[f.jsx(ON,{children:"Акційні товари"}),f.jsxs(AN,{ref:h,children:[f.jsxs(FN,{onClick:()=>o(_=>!_),children:["Сортування",f.jsx(Mu,{strokeWidth:.9,size:22})]}),i&&f.jsxs(RN,{children:[f.jsx(bi,{onClick:()=>{l("name"),u("asc"),o(!1)},children:"А-Я"}),f.jsx(bi,{onClick:()=>{l("name"),u("desc"),o(!1)},children:"Я-А"}),f.jsx(bi,{onClick:()=>{l("price"),u("asc"),o(!1)},children:"Ціна ↑"}),f.jsx(bi,{onClick:()=>{l("price"),u("desc"),o(!1)},children:"Ціна ↓"}),f.jsx(bi,{onClick:()=>{l("date"),u("desc"),o(!1)},children:"Спочатку новіші"}),f.jsx(bi,{onClick:()=>{l("date"),u("asc"),o(!1)},children:"Спочатку старіші"})]})]})]}),f.jsx(jN,{children:C.map(_=>{var P,I;const M=_.new_price&&_.new_price<_.price,$=M?_.new_price:_.price,D=(_==null?void 0:_.available)??!0,A=M?Math.round((_.price-_.new_price)/_.price*100):0,j=g.some(z=>z.id===_.id),F=w.find(z=>z.id===_.id),L=(F?F.quantity:0)>=(_.stock||0),O=(z,B)=>{if(B.stopPropagation(),L){q.error("Товар уже у кошику");return}m(ho({...z,quantity:1})),q.success(`${z.name} додано в кошик!`)};return f.jsxs(MN,{onClick:()=>p(`/product/${_.id}`),style:{cursor:"pointer"},children:[!D&&f.jsx(sm,{children:"Заброньовано"}),f.jsx($N,{src:((I=(P=_.images)==null?void 0:P[0])==null?void 0:I.url)||"/nofoto.png"}),f.jsx(IN,{children:_.name}),f.jsxs(DN,{children:[f.jsx(wc,{children:f.jsxs(Sc,{children:[f.jsxs(_c,{$discount:M,children:[$.toLocaleString()," грн"]}),M&&f.jsxs(Cc,{children:[_.price.toLocaleString()," грн"]}),M&&f.jsxs(Ec,{children:["-",A,"%"]})]})}),f.jsxs(LN,{children:[D&&f.jsx(su,{onClick:z=>O(_,z),children:f.jsx(po,{size:24,color:F?"var(--orange-color)":"black",strokeWidth:2})}),f.jsx(su,{onClick:z=>k(_,z),children:f.jsx(Ua,{size:24,fill:j?"#ff4d4f":"none",color:j?"#ff4d4f":"#000000",strokeWidth:j?1:2})})]})]})]},_.id)})}),v.length>y&&f.jsxs(v_,{children:[f.jsx(Vi,{onClick:()=>c(_=>Math.max(_-1,1)),disabled:d===1,children:"Назад"}),Array.from({length:T},(_,M)=>f.jsx(Vi,{onClick:()=>c(M+1),active:d===M+1,children:M+1},M)),f.jsx(Vi,{onClick:()=>c(_=>Math.min(_+1,T)),disabled:d===T,children:"Вперед"})]})]})})};function BN(){return f.jsxs(mM,{children:[f.jsx(Q5,{}),f.jsx(eN,{}),f.jsx(b.Suspense,{fallback:f.jsx(X5,{}),children:f.jsx(BC,{children:f.jsxs(rt,{path:"/",element:f.jsx(VO,{}),children:[f.jsx(rt,{index:!0,element:f.jsx(WI,{})}),f.jsx(rt,{path:"catalog",element:f.jsx(uM,{})}),f.jsx(rt,{path:"/catalog/:category",element:f.jsx(AD,{})}),f.jsx(rt,{path:"/product/:id",element:f.jsx(X6,{})}),f.jsx(rt,{path:"cart",element:f.jsx(_A,{})}),f.jsx(rt,{path:"favorite",element:f.jsx(GA,{})}),f.jsx(rt,{path:"/catalog/new",element:f.jsx(zN,{})}),f.jsx(rt,{path:"/catalog/sale",element:f.jsx(NN,{})}),f.jsx(rt,{path:"checkout",element:f.jsx(Dz,{})}),f.jsx(rt,{path:"/order-confirmation",element:f.jsx(Vz,{})}),f.jsx(rt,{path:"about",element:f.jsx(Jz,{})}),f.jsx(rt,{path:"contacts",element:f.jsx(fN,{})}),f.jsx(rt,{path:"delivery",element:f.jsx(ZA,{})}),f.jsx(rt,{path:"*",element:f.jsx(hM,{})})]})})})]})}var qm="persist:",b_="persist/FLUSH",Xm="persist/REHYDRATE",w_="persist/PAUSE",S_="persist/PERSIST",__="persist/PURGE",C_="persist/REGISTER",VN=-1;function il(e){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?il=function(n){return typeof n}:il=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},il(e)}function z1(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function UN(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?z1(n,!0).forEach(function(r){HN(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):z1(n).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function HN(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function WN(e,t,n,r){r.debug;var i=UN({},n);return e&&il(e)==="object"&&Object.keys(e).forEach(function(o){o!=="_persist"&&t[o]===n[o]&&(i[o]=e[o])}),i}function GN(e){var t=e.blacklist||null,n=e.whitelist||null,r=e.transforms||[],i=e.throttle||0,o="".concat(e.keyPrefix!==void 0?e.keyPrefix:qm).concat(e.key),a=e.storage,l;e.serialize===!1?l=function(C){return C}:typeof e.serialize=="function"?l=e.serialize:l=YN;var s=e.writeFailHandler||null,u={},d={},c=[],y=null,p=null,m=function(C){Object.keys(C).forEach(function(T){h(T)&&u[T]!==C[T]&&c.indexOf(T)===-1&&c.push(T)}),Object.keys(u).forEach(function(T){C[T]===void 0&&h(T)&&c.indexOf(T)===-1&&u[T]!==void 0&&c.push(T)}),y===null&&(y=setInterval(g,i)),u=C};function g(){if(c.length===0){y&&clearInterval(y),y=null;return}var S=c.shift(),C=r.reduce(function(T,k){return k.in(T,S,u)},u[S]);if(C!==void 0)try{d[S]=l(C)}catch(T){console.error("redux-persist/createPersistoid: error serializing state",T)}else delete d[S];c.length===0&&w()}function w(){Object.keys(d).forEach(function(S){u[S]===void 0&&delete d[S]}),p=a.setItem(o,l(d)).catch(v)}function h(S){return!(n&&n.indexOf(S)===-1&&S!=="_persist"||t&&t.indexOf(S)!==-1)}function v(S){s&&s(S)}var x=function(){for(;c.length!==0;)g();return p||Promise.resolve()};return{update:m,flush:x}}function YN(e){return JSON.stringify(e)}function qN(e){var t=e.transforms||[],n="".concat(e.keyPrefix!==void 0?e.keyPrefix:qm).concat(e.key),r=e.storage;e.debug;var i;return e.deserialize===!1?i=function(a){return a}:typeof e.deserialize=="function"?i=e.deserialize:i=XN,r.getItem(n).then(function(o){if(o)try{var a={},l=i(o);return Object.keys(l).forEach(function(s){a[s]=t.reduceRight(function(u,d){return d.out(u,s,l)},i(l[s]))}),a}catch(s){throw s}else return})}function XN(e){return JSON.parse(e)}function KN(e){var t=e.storage,n="".concat(e.keyPrefix!==void 0?e.keyPrefix:qm).concat(e.key);return t.removeItem(n,QN)}function QN(e){}function N1(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Mn(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?N1(n,!0).forEach(function(r){ZN(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):N1(n).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function ZN(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function JN(e,t){if(e==null)return{};var n=e9(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function e9(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}var t9=5e3;function E_(e,t){var n=e.version!==void 0?e.version:VN;e.debug;var r=e.stateReconciler===void 0?WN:e.stateReconciler,i=e.getStoredState||qN,o=e.timeout!==void 0?e.timeout:t9,a=null,l=!1,s=!0,u=function(c){return c._persist.rehydrated&&a&&!s&&a.update(c),c};return function(d,c){var y=d||{},p=y._persist,m=JN(y,["_persist"]),g=m;if(c.type===S_){var w=!1,h=function(_,M){w||(c.rehydrate(e.key,_,M),w=!0)};if(o&&setTimeout(function(){!w&&h(void 0,new Error('redux-persist: persist timed out for persist key "'.concat(e.key,'"')))},o),s=!1,a||(a=GN(e)),p)return Mn({},t(g,c),{_persist:p});if(typeof c.rehydrate!="function"||typeof c.register!="function")throw new Error("redux-persist: either rehydrate or register is not a function on the PERSIST action. This can happen if the action is being replayed. This is an unexplored use case, please open an issue and we will figure out a resolution.");return c.register(e.key),i(e).then(function(k){var _=e.migrate||function(M,$){return Promise.resolve(M)};_(k,n).then(function(M){h(M)},function(M){h(void 0,M)})},function(k){h(void 0,k)}),Mn({},t(g,c),{_persist:{version:n,rehydrated:!1}})}else{if(c.type===__)return l=!0,c.result(KN(e)),Mn({},t(g,c),{_persist:p});if(c.type===b_)return c.result(a&&a.flush()),Mn({},t(g,c),{_persist:p});if(c.type===w_)s=!0;else if(c.type===Xm){if(l)return Mn({},g,{_persist:Mn({},p,{rehydrated:!0})});if(c.key===e.key){var v=t(g,c),x=c.payload,S=r!==!1&&x!==void 0?r(x,d,v,e):v,C=Mn({},S,{_persist:Mn({},p,{rehydrated:!0})});return u(C)}}}if(!p)return t(d,c);var T=t(g,c);return T===g?d:u(Mn({},T,{_persist:p}))}}function B1(e){return i9(e)||r9(e)||n9()}function n9(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function r9(e){if(Symbol.iterator in Object(e)||Object.prototype.toString.call(e)==="[object Arguments]")return Array.from(e)}function i9(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}function V1(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Wp(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?V1(n,!0).forEach(function(r){o9(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):V1(n).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function o9(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var k_={registry:[],bootstrapped:!1},a9=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:k_,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case C_:return Wp({},t,{registry:[].concat(B1(t.registry),[n.key])});case Xm:var r=t.registry.indexOf(n.key),i=B1(t.registry);return i.splice(r,1),Wp({},t,{registry:i,bootstrapped:i.length===0});default:return t}};function s9(e,t,n){var r=n||!1,i=nm(a9,k_,t&&t.enhancer?t.enhancer:void 0),o=function(u){i.dispatch({type:C_,key:u})},a=function(u,d,c){var y={type:Xm,payload:d,err:c,key:u};e.dispatch(y),i.dispatch(y),r&&l.getState().bootstrapped&&(r(),r=!1)},l=Wp({},i,{purge:function(){var u=[];return e.dispatch({type:__,result:function(c){u.push(c)}}),Promise.all(u)},flush:function(){var u=[];return e.dispatch({type:b_,result:function(c){u.push(c)}}),Promise.all(u)},pause:function(){e.dispatch({type:w_})},persist:function(){e.dispatch({type:S_,register:o,rehydrate:a})}});return t&&t.manualPersist||l.persist(),l}var Km={},Qm={};Qm.__esModule=!0;Qm.default=c9;function ol(e){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?ol=function(n){return typeof n}:ol=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},ol(e)}function of(){}var l9={getItem:of,setItem:of,removeItem:of};function u9(e){if((typeof self>"u"?"undefined":ol(self))!=="object"||!(e in self))return!1;try{var t=self[e],n="redux-persist ".concat(e," test");t.setItem(n,"test"),t.getItem(n),t.removeItem(n)}catch{return!1}return!0}function c9(e){var t="".concat(e,"Storage");return u9(t)?self[t]:l9}Km.__esModule=!0;Km.default=p9;var d9=f9(Qm);function f9(e){return e&&e.__esModule?e:{default:e}}function p9(e){var t=(0,d9.default)(e);return{getItem:function(r){return new Promise(function(i,o){i(t.getItem(r))})},setItem:function(r,i){return new Promise(function(o,a){o(t.setItem(r,i))})},removeItem:function(r){return new Promise(function(i,o){i(t.removeItem(r))})}}}var Zm=void 0,h9=m9(Km);function m9(e){return e&&e.__esModule?e:{default:e}}var g9=(0,h9.default)("local");Zm=g9;const v9={key:"cart",storage:Zm},y9={key:"favorites",storage:Zm},x9=E_(v9,G4),b9=E_(y9,Bj),P_=j4({reducer:{cart:x9,favorites:b9},middleware:e=>e({serializableCheck:!1})});s9(P_);df.createRoot(document.getElementById("root")).render(f.jsx(XT,{store:P_,children:f.jsx(K.StrictMode,{children:f.jsx(qC,{basename:"/Didiv/",children:f.jsx(BN,{})})})}));
