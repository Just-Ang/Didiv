function Bw(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();var q=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function N0(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function pt(e){if(e.__esModule)return e;var t=e.default;if(typeof t=="function"){var n=function r(){return this instanceof r?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach(function(r){var i=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(n,r,i.get?i:{enumerable:!0,get:function(){return e[r]}})}),n}var B0={exports:{}},hl={},V0={exports:{}},Z={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Go=Symbol.for("react.element"),Vw=Symbol.for("react.portal"),Hw=Symbol.for("react.fragment"),Uw=Symbol.for("react.strict_mode"),Ww=Symbol.for("react.profiler"),Gw=Symbol.for("react.provider"),Yw=Symbol.for("react.context"),qw=Symbol.for("react.forward_ref"),Xw=Symbol.for("react.suspense"),Kw=Symbol.for("react.memo"),Qw=Symbol.for("react.lazy"),xh=Symbol.iterator;function Zw(e){return e===null||typeof e!="object"?null:(e=xh&&e[xh]||e["@@iterator"],typeof e=="function"?e:null)}var H0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},U0=Object.assign,W0={};function wi(e,t,n){this.props=e,this.context=t,this.refs=W0,this.updater=n||H0}wi.prototype.isReactComponent={};wi.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};wi.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function G0(){}G0.prototype=wi.prototype;function Tf(e,t,n){this.props=e,this.context=t,this.refs=W0,this.updater=n||H0}var Of=Tf.prototype=new G0;Of.constructor=Tf;U0(Of,wi.prototype);Of.isPureReactComponent=!0;var bh=Array.isArray,Y0=Object.prototype.hasOwnProperty,Pf={current:null},q0={key:!0,ref:!0,__self:!0,__source:!0};function X0(e,t,n){var r,i={},o=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(o=""+t.key),t)Y0.call(t,r)&&!q0.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var s=Array(l),u=0;u<l;u++)s[u]=arguments[u+2];i.children=s}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Go,type:e,key:o,ref:a,props:i,_owner:Pf.current}}function Jw(e,t){return{$$typeof:Go,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function jf(e){return typeof e=="object"&&e!==null&&e.$$typeof===Go}function eS(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var wh=/\/+/g;function Eu(e,t){return typeof e=="object"&&e!==null&&e.key!=null?eS(""+e.key):t.toString(36)}function Ha(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case Go:case Vw:a=!0}}if(a)return a=e,i=i(a),e=r===""?"."+Eu(a,0):r,bh(i)?(n="",e!=null&&(n=e.replace(wh,"$&/")+"/"),Ha(i,t,n,"",function(u){return u})):i!=null&&(jf(i)&&(i=Jw(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(wh,"$&/")+"/")+e)),t.push(i)),1;if(a=0,r=r===""?".":r+":",bh(e))for(var l=0;l<e.length;l++){o=e[l];var s=r+Eu(o,l);a+=Ha(o,t,n,s,i)}else if(s=Zw(e),typeof s=="function")for(e=s.call(e),l=0;!(o=e.next()).done;)o=o.value,s=r+Eu(o,l++),a+=Ha(o,t,n,s,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function la(e,t,n){if(e==null)return e;var r=[],i=0;return Ha(e,r,"","",function(o){return t.call(n,o,i++)}),r}function tS(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var nt={current:null},Ua={transition:null},nS={ReactCurrentDispatcher:nt,ReactCurrentBatchConfig:Ua,ReactCurrentOwner:Pf};Z.Children={map:la,forEach:function(e,t,n){la(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return la(e,function(){t++}),t},toArray:function(e){return la(e,function(t){return t})||[]},only:function(e){if(!jf(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Z.Component=wi;Z.Fragment=Hw;Z.Profiler=Ww;Z.PureComponent=Tf;Z.StrictMode=Uw;Z.Suspense=Xw;Z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=nS;Z.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=U0({},e.props),i=e.key,o=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,a=Pf.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in t)Y0.call(t,s)&&!q0.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&l!==void 0?l[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){l=Array(s);for(var u=0;u<s;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:Go,type:e.type,key:i,ref:o,props:r,_owner:a}};Z.createContext=function(e){return e={$$typeof:Yw,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Gw,_context:e},e.Consumer=e};Z.createElement=X0;Z.createFactory=function(e){var t=X0.bind(null,e);return t.type=e,t};Z.createRef=function(){return{current:null}};Z.forwardRef=function(e){return{$$typeof:qw,render:e}};Z.isValidElement=jf;Z.lazy=function(e){return{$$typeof:Qw,_payload:{_status:-1,_result:e},_init:tS}};Z.memo=function(e,t){return{$$typeof:Kw,type:e,compare:t===void 0?null:t}};Z.startTransition=function(e){var t=Ua.transition;Ua.transition={};try{e()}finally{Ua.transition=t}};Z.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};Z.useCallback=function(e,t){return nt.current.useCallback(e,t)};Z.useContext=function(e){return nt.current.useContext(e)};Z.useDebugValue=function(){};Z.useDeferredValue=function(e){return nt.current.useDeferredValue(e)};Z.useEffect=function(e,t){return nt.current.useEffect(e,t)};Z.useId=function(){return nt.current.useId()};Z.useImperativeHandle=function(e,t,n){return nt.current.useImperativeHandle(e,t,n)};Z.useInsertionEffect=function(e,t){return nt.current.useInsertionEffect(e,t)};Z.useLayoutEffect=function(e,t){return nt.current.useLayoutEffect(e,t)};Z.useMemo=function(e,t){return nt.current.useMemo(e,t)};Z.useReducer=function(e,t,n){return nt.current.useReducer(e,t,n)};Z.useRef=function(e){return nt.current.useRef(e)};Z.useState=function(e){return nt.current.useState(e)};Z.useSyncExternalStore=function(e,t,n){return nt.current.useSyncExternalStore(e,t,n)};Z.useTransition=function(){return nt.current.useTransition()};Z.version="18.2.0";V0.exports=Z;var T=V0.exports;const U=N0(T),Uc=Bw({__proto__:null,default:U},[T]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rS=T,iS=Symbol.for("react.element"),oS=Symbol.for("react.fragment"),aS=Object.prototype.hasOwnProperty,sS=rS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,lS={key:!0,ref:!0,__self:!0,__source:!0};function K0(e,t,n){var r,i={},o=null,a=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)aS.call(t,r)&&!lS.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:iS,type:e,key:o,ref:a,props:i,_owner:sS.current}}hl.Fragment=oS;hl.jsx=K0;hl.jsxs=K0;B0.exports=hl;var h=B0.exports;/**
 * @remix-run/router v1.8.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function vo(){return vo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},vo.apply(this,arguments)}var Hn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Hn||(Hn={}));const Sh="popstate";function uS(e){e===void 0&&(e={});function t(r,i){let{pathname:o,search:a,hash:l}=r.location;return Wc("",{pathname:o,search:a,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:gs(i)}return dS(t,n,null,e)}function ke(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Mf(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function cS(){return Math.random().toString(36).substr(2,8)}function _h(e,t){return{usr:e.state,key:e.key,idx:t}}function Wc(e,t,n,r){return n===void 0&&(n=null),vo({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Si(t):t,{state:n,key:t&&t.key||r||cS()})}function gs(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Si(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function dS(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,a=i.history,l=Hn.Pop,s=null,u=c();u==null&&(u=0,a.replaceState(vo({},a.state,{idx:u}),""));function c(){return(a.state||{idx:null}).idx}function d(){l=Hn.Pop;let w=c(),f=w==null?null:w-u;u=w,s&&s({action:l,location:x.location,delta:f})}function g(w,f){l=Hn.Push;let p=Wc(x.location,w,f);n&&n(p,w),u=c()+1;let y=_h(p,u),b=x.createHref(p);try{a.pushState(y,"",b)}catch(E){if(E instanceof DOMException&&E.name==="DataCloneError")throw E;i.location.assign(b)}o&&s&&s({action:l,location:x.location,delta:1})}function m(w,f){l=Hn.Replace;let p=Wc(x.location,w,f);n&&n(p,w),u=c();let y=_h(p,u),b=x.createHref(p);a.replaceState(y,"",b),o&&s&&s({action:l,location:x.location,delta:0})}function v(w){let f=i.location.origin!=="null"?i.location.origin:i.location.href,p=typeof w=="string"?w:gs(w);return ke(f,"No window.location.(origin|href) available to create URL for href: "+p),new URL(p,f)}let x={get action(){return l},get location(){return e(i,a)},listen(w){if(s)throw new Error("A history only accepts one active listener");return i.addEventListener(Sh,d),s=w,()=>{i.removeEventListener(Sh,d),s=null}},createHref(w){return t(i,w)},createURL:v,encodeLocation(w){let f=v(w);return{pathname:f.pathname,search:f.search,hash:f.hash}},push:g,replace:m,go(w){return a.go(w)}};return x}var Ch;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Ch||(Ch={}));function fS(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?Si(t):t,i=If(r.pathname||"/",n);if(i==null)return null;let o=Q0(e);pS(o);let a=null;for(let l=0;a==null&&l<o.length;++l)a=SS(o[l],ES(i));return a}function Q0(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,a,l)=>{let s={relativePath:l===void 0?o.path||"":l,caseSensitive:o.caseSensitive===!0,childrenIndex:a,route:o};s.relativePath.startsWith("/")&&(ke(s.relativePath.startsWith(r),'Absolute route path "'+s.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),s.relativePath=s.relativePath.slice(r.length));let u=qn([r,s.relativePath]),c=n.concat(s);o.children&&o.children.length>0&&(ke(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Q0(o.children,t,c,u)),!(o.path==null&&!o.index)&&t.push({path:u,score:bS(u,o.index),routesMeta:c})};return e.forEach((o,a)=>{var l;if(o.path===""||!((l=o.path)!=null&&l.includes("?")))i(o,a);else for(let s of Z0(o.path))i(o,a,s)}),t}function Z0(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let a=Z0(r.join("/")),l=[];return l.push(...a.map(s=>s===""?o:[o,s].join("/"))),i&&l.push(...a),l.map(s=>e.startsWith("/")&&s===""?"/":s)}function pS(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:wS(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const hS=/^:\w+$/,mS=3,gS=2,vS=1,yS=10,xS=-2,Eh=e=>e==="*";function bS(e,t){let n=e.split("/"),r=n.length;return n.some(Eh)&&(r+=xS),t&&(r+=gS),n.filter(i=>!Eh(i)).reduce((i,o)=>i+(hS.test(o)?mS:o===""?vS:yS),r)}function wS(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function SS(e,t){let{routesMeta:n}=e,r={},i="/",o=[];for(let a=0;a<n.length;++a){let l=n[a],s=a===n.length-1,u=i==="/"?t:t.slice(i.length)||"/",c=_S({path:l.relativePath,caseSensitive:l.caseSensitive,end:s},u);if(!c)return null;Object.assign(r,c.params);let d=l.route;o.push({params:r,pathname:qn([i,c.pathname]),pathnameBase:PS(qn([i,c.pathnameBase])),route:d}),c.pathnameBase!=="/"&&(i=qn([i,c.pathnameBase]))}return o}function _S(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=CS(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],a=o.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((u,c,d)=>{if(c==="*"){let g=l[d]||"";a=o.slice(0,o.length-g.length).replace(/(.)\/+$/,"$1")}return u[c]=kS(l[d]||"",c),u},{}),pathname:o,pathnameBase:a,pattern:e}}function CS(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Mf(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(a,l)=>(r.push(l),"/([^\\/]+)"));return e.endsWith("*")?(r.push("*"),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function ES(e){try{return decodeURI(e)}catch(t){return Mf(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function kS(e,t){try{return decodeURIComponent(e)}catch(n){return Mf(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function If(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function TS(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?Si(e):e;return{pathname:n?n.startsWith("/")?n:OS(n,t):t,search:jS(r),hash:MS(i)}}function OS(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function ku(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function J0(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function ev(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=Si(e):(i=vo({},e),ke(!i.pathname||!i.pathname.includes("?"),ku("?","pathname","search",i)),ke(!i.pathname||!i.pathname.includes("#"),ku("#","pathname","hash",i)),ke(!i.search||!i.search.includes("#"),ku("#","search","hash",i)));let o=e===""||i.pathname==="",a=o?"/":i.pathname,l;if(r||a==null)l=n;else{let d=t.length-1;if(a.startsWith("..")){let g=a.split("/");for(;g[0]==="..";)g.shift(),d-=1;i.pathname=g.join("/")}l=d>=0?t[d]:"/"}let s=TS(i,l),u=a&&a!=="/"&&a.endsWith("/"),c=(o||a===".")&&n.endsWith("/");return!s.pathname.endsWith("/")&&(u||c)&&(s.pathname+="/"),s}const qn=e=>e.join("/").replace(/\/\/+/g,"/"),PS=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),jS=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,MS=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function IS(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const tv=["post","put","patch","delete"];new Set(tv);const $S=["get",...tv];new Set($S);/**
 * React Router v6.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function vs(){return vs=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},vs.apply(this,arguments)}const $f=T.createContext(null),DS=T.createContext(null),_i=T.createContext(null),ml=T.createContext(null),In=T.createContext({outlet:null,matches:[],isDataRoute:!1}),nv=T.createContext(null);function RS(e,t){let{relative:n}=t===void 0?{}:t;Yo()||ke(!1);let{basename:r,navigator:i}=T.useContext(_i),{hash:o,pathname:a,search:l}=ov(e,{relative:n}),s=a;return r!=="/"&&(s=a==="/"?r:qn([r,a])),i.createHref({pathname:s,search:l,hash:o})}function Yo(){return T.useContext(ml)!=null}function Ci(){return Yo()||ke(!1),T.useContext(ml).location}function rv(e){T.useContext(_i).static||T.useLayoutEffect(e)}function gl(){let{isDataRoute:e}=T.useContext(In);return e?KS():AS()}function AS(){Yo()||ke(!1);let e=T.useContext($f),{basename:t,navigator:n}=T.useContext(_i),{matches:r}=T.useContext(In),{pathname:i}=Ci(),o=JSON.stringify(J0(r).map(s=>s.pathnameBase)),a=T.useRef(!1);return rv(()=>{a.current=!0}),T.useCallback(function(s,u){if(u===void 0&&(u={}),!a.current)return;if(typeof s=="number"){n.go(s);return}let c=ev(s,JSON.parse(o),i,u.relative==="path");e==null&&t!=="/"&&(c.pathname=c.pathname==="/"?t:qn([t,c.pathname])),(u.replace?n.replace:n.push)(c,u.state,u)},[t,n,o,i,e])}const LS=T.createContext(null);function FS(e){let t=T.useContext(In).outlet;return t&&T.createElement(LS.Provider,{value:e},t)}function iv(){let{matches:e}=T.useContext(In),t=e[e.length-1];return t?t.params:{}}function ov(e,t){let{relative:n}=t===void 0?{}:t,{matches:r}=T.useContext(In),{pathname:i}=Ci(),o=JSON.stringify(J0(r).map(a=>a.pathnameBase));return T.useMemo(()=>ev(e,JSON.parse(o),i,n==="path"),[e,o,i,n])}function zS(e,t){return NS(e,t)}function NS(e,t,n){Yo()||ke(!1);let{navigator:r}=T.useContext(_i),{matches:i}=T.useContext(In),o=i[i.length-1],a=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let s=Ci(),u;if(t){var c;let x=typeof t=="string"?Si(t):t;l==="/"||(c=x.pathname)!=null&&c.startsWith(l)||ke(!1),u=x}else u=s;let d=u.pathname||"/",g=l==="/"?d:d.slice(l.length)||"/",m=fS(e,{pathname:g}),v=WS(m&&m.map(x=>Object.assign({},x,{params:Object.assign({},a,x.params),pathname:qn([l,r.encodeLocation?r.encodeLocation(x.pathname).pathname:x.pathname]),pathnameBase:x.pathnameBase==="/"?l:qn([l,r.encodeLocation?r.encodeLocation(x.pathnameBase).pathname:x.pathnameBase])})),i,n);return t&&v?T.createElement(ml.Provider,{value:{location:vs({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:Hn.Pop}},v):v}function BS(){let e=XS(),t=IS(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},o=null;return T.createElement(T.Fragment,null,T.createElement("h2",null,"Unexpected Application Error!"),T.createElement("h3",{style:{fontStyle:"italic"}},t),n?T.createElement("pre",{style:i},n):null,o)}const VS=T.createElement(BS,null);class HS extends T.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error||n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?T.createElement(In.Provider,{value:this.props.routeContext},T.createElement(nv.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function US(e){let{routeContext:t,match:n,children:r}=e,i=T.useContext($f);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),T.createElement(In.Provider,{value:t},r)}function WS(e,t,n){var r;if(t===void 0&&(t=[]),n===void 0&&(n=null),e==null){var i;if((i=n)!=null&&i.errors)e=n.matches;else return null}let o=e,a=(r=n)==null?void 0:r.errors;if(a!=null){let l=o.findIndex(s=>s.route.id&&(a==null?void 0:a[s.route.id]));l>=0||ke(!1),o=o.slice(0,Math.min(o.length,l+1))}return o.reduceRight((l,s,u)=>{let c=s.route.id?a==null?void 0:a[s.route.id]:null,d=null;n&&(d=s.route.errorElement||VS);let g=t.concat(o.slice(0,u+1)),m=()=>{let v;return c?v=d:s.route.Component?v=T.createElement(s.route.Component,null):s.route.element?v=s.route.element:v=l,T.createElement(US,{match:s,routeContext:{outlet:l,matches:g,isDataRoute:n!=null},children:v})};return n&&(s.route.ErrorBoundary||s.route.errorElement||u===0)?T.createElement(HS,{location:n.location,revalidation:n.revalidation,component:d,error:c,children:m(),routeContext:{outlet:null,matches:g,isDataRoute:!0}}):m()},null)}var av=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(av||{}),ys=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(ys||{});function GS(e){let t=T.useContext($f);return t||ke(!1),t}function YS(e){let t=T.useContext(DS);return t||ke(!1),t}function qS(e){let t=T.useContext(In);return t||ke(!1),t}function sv(e){let t=qS(),n=t.matches[t.matches.length-1];return n.route.id||ke(!1),n.route.id}function XS(){var e;let t=T.useContext(nv),n=YS(ys.UseRouteError),r=sv(ys.UseRouteError);return t||((e=n.errors)==null?void 0:e[r])}function KS(){let{router:e}=GS(av.UseNavigateStable),t=sv(ys.UseNavigateStable),n=T.useRef(!1);return rv(()=>{n.current=!0}),T.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,vs({fromRouteId:t},o)))},[e,t])}function QS(e){return FS(e.context)}function at(e){ke(!1)}function ZS(e){let{basename:t="/",children:n=null,location:r,navigationType:i=Hn.Pop,navigator:o,static:a=!1}=e;Yo()&&ke(!1);let l=t.replace(/^\/*/,"/"),s=T.useMemo(()=>({basename:l,navigator:o,static:a}),[l,o,a]);typeof r=="string"&&(r=Si(r));let{pathname:u="/",search:c="",hash:d="",state:g=null,key:m="default"}=r,v=T.useMemo(()=>{let x=If(u,l);return x==null?null:{location:{pathname:x,search:c,hash:d,state:g,key:m},navigationType:i}},[l,u,c,d,g,m,i]);return v==null?null:T.createElement(_i.Provider,{value:s},T.createElement(ml.Provider,{children:n,value:v}))}function JS(e){let{children:t,location:n}=e;return zS(Gc(t),n)}new Promise(()=>{});function Gc(e,t){t===void 0&&(t=[]);let n=[];return T.Children.forEach(e,(r,i)=>{if(!T.isValidElement(r))return;let o=[...t,i];if(r.type===T.Fragment){n.push.apply(n,Gc(r.props.children,o));return}r.type!==at&&ke(!1),!r.props.index||!r.props.children||ke(!1);let a={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(a.children=Gc(r.props.children,o)),n.push(a)}),n}/**
 * React Router DOM v6.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Yc(){return Yc=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Yc.apply(this,arguments)}function e2(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function t2(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function n2(e,t){return e.button===0&&(!t||t==="_self")&&!t2(e)}const r2=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],i2="startTransition",kh=Uc[i2];function o2(e){let{basename:t,children:n,future:r,window:i}=e,o=T.useRef();o.current==null&&(o.current=uS({window:i,v5Compat:!0}));let a=o.current,[l,s]=T.useState({action:a.action,location:a.location}),{v7_startTransition:u}=r||{},c=T.useCallback(d=>{u&&kh?kh(()=>s(d)):s(d)},[s,u]);return T.useLayoutEffect(()=>a.listen(c),[a,c]),T.createElement(ZS,{basename:t,children:n,location:l.location,navigationType:l.action,navigator:a})}const a2=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",s2=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Te=T.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:o,replace:a,state:l,target:s,to:u,preventScrollReset:c}=t,d=e2(t,r2),{basename:g}=T.useContext(_i),m,v=!1;if(typeof u=="string"&&s2.test(u)&&(m=u,a2))try{let p=new URL(window.location.href),y=u.startsWith("//")?new URL(p.protocol+u):new URL(u),b=If(y.pathname,g);y.origin===p.origin&&b!=null?u=b+y.search+y.hash:v=!0}catch{}let x=RS(u,{relative:i}),w=l2(u,{replace:a,state:l,target:s,preventScrollReset:c,relative:i});function f(p){r&&r(p),p.defaultPrevented||w(p)}return T.createElement("a",Yc({},d,{href:m||x,onClick:v||o?r:f,ref:n,target:s}))});var Th;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher"})(Th||(Th={}));var Oh;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Oh||(Oh={}));function l2(e,t){let{target:n,replace:r,state:i,preventScrollReset:o,relative:a}=t===void 0?{}:t,l=gl(),s=Ci(),u=ov(e,{relative:a});return T.useCallback(c=>{if(n2(c,n)){c.preventDefault();let d=r!==void 0?r:gs(s)===gs(u);l(e,{replace:d,state:i,preventScrollReset:o,relative:a})}},[s,l,u,r,i,n,e,o,a])}var qc={},lv={exports:{}},Et={},uv={exports:{}},cv={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(O,D){var N=O.length;O.push(D);e:for(;0<N;){var V=N-1>>>1,H=O[V];if(0<i(H,D))O[V]=D,O[N]=H,N=V;else break e}}function n(O){return O.length===0?null:O[0]}function r(O){if(O.length===0)return null;var D=O[0],N=O.pop();if(N!==D){O[0]=N;e:for(var V=0,H=O.length,J=H>>>1;V<J;){var ie=2*(V+1)-1,ee=O[ie],Q=ie+1,ce=O[Q];if(0>i(ee,N))Q<H&&0>i(ce,ee)?(O[V]=ce,O[Q]=N,V=Q):(O[V]=ee,O[ie]=N,V=ie);else if(Q<H&&0>i(ce,N))O[V]=ce,O[Q]=N,V=Q;else break e}}return D}function i(O,D){var N=O.sortIndex-D.sortIndex;return N!==0?N:O.id-D.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var a=Date,l=a.now();e.unstable_now=function(){return a.now()-l}}var s=[],u=[],c=1,d=null,g=3,m=!1,v=!1,x=!1,w=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(O){for(var D=n(u);D!==null;){if(D.callback===null)r(u);else if(D.startTime<=O)r(u),D.sortIndex=D.expirationTime,t(s,D);else break;D=n(u)}}function b(O){if(x=!1,y(O),!v)if(n(s)!==null)v=!0,F(E);else{var D=n(u);D!==null&&L(b,D.startTime-O)}}function E(O,D){v=!1,x&&(x=!1,f(S),S=-1),m=!0;var N=g;try{for(y(D),d=n(s);d!==null&&(!(d.expirationTime>D)||O&&!I());){var V=d.callback;if(typeof V=="function"){d.callback=null,g=d.priorityLevel;var H=V(d.expirationTime<=D);D=e.unstable_now(),typeof H=="function"?d.callback=H:d===n(s)&&r(s),y(D)}else r(s);d=n(s)}if(d!==null)var J=!0;else{var ie=n(u);ie!==null&&L(b,ie.startTime-D),J=!1}return J}finally{d=null,g=N,m=!1}}var k=!1,_=null,S=-1,M=5,j=-1;function I(){return!(e.unstable_now()-j<M)}function P(){if(_!==null){var O=e.unstable_now();j=O;var D=!0;try{D=_(!0,O)}finally{D?$():(k=!1,_=null)}}else k=!1}var $;if(typeof p=="function")$=function(){p(P)};else if(typeof MessageChannel<"u"){var A=new MessageChannel,R=A.port2;A.port1.onmessage=P,$=function(){R.postMessage(null)}}else $=function(){w(P,0)};function F(O){_=O,k||(k=!0,$())}function L(O,D){S=w(function(){O(e.unstable_now())},D)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(O){O.callback=null},e.unstable_continueExecution=function(){v||m||(v=!0,F(E))},e.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<O?Math.floor(1e3/O):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(O){switch(g){case 1:case 2:case 3:var D=3;break;default:D=g}var N=g;g=D;try{return O()}finally{g=N}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(O,D){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var N=g;g=O;try{return D()}finally{g=N}},e.unstable_scheduleCallback=function(O,D,N){var V=e.unstable_now();switch(typeof N=="object"&&N!==null?(N=N.delay,N=typeof N=="number"&&0<N?V+N:V):N=V,O){case 1:var H=-1;break;case 2:H=250;break;case 5:H=1073741823;break;case 4:H=1e4;break;default:H=5e3}return H=N+H,O={id:c++,callback:D,priorityLevel:O,startTime:N,expirationTime:H,sortIndex:-1},N>V?(O.sortIndex=N,t(u,O),n(s)===null&&O===n(u)&&(x?(f(S),S=-1):x=!0,L(b,N-V))):(O.sortIndex=H,t(s,O),v||m||(v=!0,F(E))),O},e.unstable_shouldYield=I,e.unstable_wrapCallback=function(O){var D=g;return function(){var N=g;g=D;try{return O.apply(this,arguments)}finally{g=N}}}})(cv);uv.exports=cv;var u2=uv.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dv=T,_t=u2;function z(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var fv=new Set,yo={};function Mr(e,t){li(e,t),li(e+"Capture",t)}function li(e,t){for(yo[e]=t,e=0;e<t.length;e++)fv.add(t[e])}var En=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Xc=Object.prototype.hasOwnProperty,c2=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ph={},jh={};function d2(e){return Xc.call(jh,e)?!0:Xc.call(Ph,e)?!1:c2.test(e)?jh[e]=!0:(Ph[e]=!0,!1)}function f2(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function p2(e,t,n,r){if(t===null||typeof t>"u"||f2(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function rt(e,t,n,r,i,o,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=a}var Ve={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Ve[e]=new rt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Ve[t]=new rt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Ve[e]=new rt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Ve[e]=new rt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Ve[e]=new rt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Ve[e]=new rt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Ve[e]=new rt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Ve[e]=new rt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Ve[e]=new rt(e,5,!1,e.toLowerCase(),null,!1,!1)});var Df=/[\-:]([a-z])/g;function Rf(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Df,Rf);Ve[t]=new rt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Df,Rf);Ve[t]=new rt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Df,Rf);Ve[t]=new rt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Ve[e]=new rt(e,1,!1,e.toLowerCase(),null,!1,!1)});Ve.xlinkHref=new rt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Ve[e]=new rt(e,1,!1,e.toLowerCase(),null,!0,!0)});function Af(e,t,n,r){var i=Ve.hasOwnProperty(t)?Ve[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(p2(t,n,i,r)&&(n=null),r||i===null?d2(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var $n=dv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ua=Symbol.for("react.element"),Vr=Symbol.for("react.portal"),Hr=Symbol.for("react.fragment"),Lf=Symbol.for("react.strict_mode"),Kc=Symbol.for("react.profiler"),pv=Symbol.for("react.provider"),hv=Symbol.for("react.context"),Ff=Symbol.for("react.forward_ref"),Qc=Symbol.for("react.suspense"),Zc=Symbol.for("react.suspense_list"),zf=Symbol.for("react.memo"),zn=Symbol.for("react.lazy"),mv=Symbol.for("react.offscreen"),Mh=Symbol.iterator;function $i(e){return e===null||typeof e!="object"?null:(e=Mh&&e[Mh]||e["@@iterator"],typeof e=="function"?e:null)}var xe=Object.assign,Tu;function qi(e){if(Tu===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Tu=t&&t[1]||""}return`
`+Tu+e}var Ou=!1;function Pu(e,t){if(!e||Ou)return"";Ou=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),a=i.length-1,l=o.length-1;1<=a&&0<=l&&i[a]!==o[l];)l--;for(;1<=a&&0<=l;a--,l--)if(i[a]!==o[l]){if(a!==1||l!==1)do if(a--,l--,0>l||i[a]!==o[l]){var s=`
`+i[a].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=a&&0<=l);break}}}finally{Ou=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?qi(e):""}function h2(e){switch(e.tag){case 5:return qi(e.type);case 16:return qi("Lazy");case 13:return qi("Suspense");case 19:return qi("SuspenseList");case 0:case 2:case 15:return e=Pu(e.type,!1),e;case 11:return e=Pu(e.type.render,!1),e;case 1:return e=Pu(e.type,!0),e;default:return""}}function Jc(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Hr:return"Fragment";case Vr:return"Portal";case Kc:return"Profiler";case Lf:return"StrictMode";case Qc:return"Suspense";case Zc:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case hv:return(e.displayName||"Context")+".Consumer";case pv:return(e._context.displayName||"Context")+".Provider";case Ff:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case zf:return t=e.displayName||null,t!==null?t:Jc(e.type)||"Memo";case zn:t=e._payload,e=e._init;try{return Jc(e(t))}catch{}}return null}function m2(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Jc(t);case 8:return t===Lf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function ir(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function gv(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function g2(e){var t=gv(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(a){r=""+a,o.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ca(e){e._valueTracker||(e._valueTracker=g2(e))}function vv(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=gv(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function xs(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ed(e,t){var n=t.checked;return xe({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Ih(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=ir(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function yv(e,t){t=t.checked,t!=null&&Af(e,"checked",t,!1)}function td(e,t){yv(e,t);var n=ir(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?nd(e,t.type,n):t.hasOwnProperty("defaultValue")&&nd(e,t.type,ir(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function $h(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function nd(e,t,n){(t!=="number"||xs(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Xi=Array.isArray;function ei(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+ir(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function rd(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(z(91));return xe({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Dh(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(z(92));if(Xi(n)){if(1<n.length)throw Error(z(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:ir(n)}}function xv(e,t){var n=ir(t.value),r=ir(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Rh(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function bv(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function id(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?bv(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var da,wv=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(da=da||document.createElement("div"),da.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=da.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function xo(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var ro={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},v2=["Webkit","ms","Moz","O"];Object.keys(ro).forEach(function(e){v2.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),ro[t]=ro[e]})});function Sv(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||ro.hasOwnProperty(e)&&ro[e]?(""+t).trim():t+"px"}function _v(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Sv(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var y2=xe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function od(e,t){if(t){if(y2[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(z(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(z(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(z(61))}if(t.style!=null&&typeof t.style!="object")throw Error(z(62))}}function ad(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var sd=null;function Nf(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ld=null,ti=null,ni=null;function Ah(e){if(e=Ko(e)){if(typeof ld!="function")throw Error(z(280));var t=e.stateNode;t&&(t=wl(t),ld(e.stateNode,e.type,t))}}function Cv(e){ti?ni?ni.push(e):ni=[e]:ti=e}function Ev(){if(ti){var e=ti,t=ni;if(ni=ti=null,Ah(e),t)for(e=0;e<t.length;e++)Ah(t[e])}}function kv(e,t){return e(t)}function Tv(){}var ju=!1;function Ov(e,t,n){if(ju)return e(t,n);ju=!0;try{return kv(e,t,n)}finally{ju=!1,(ti!==null||ni!==null)&&(Tv(),Ev())}}function bo(e,t){var n=e.stateNode;if(n===null)return null;var r=wl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(z(231,t,typeof n));return n}var ud=!1;if(En)try{var Di={};Object.defineProperty(Di,"passive",{get:function(){ud=!0}}),window.addEventListener("test",Di,Di),window.removeEventListener("test",Di,Di)}catch{ud=!1}function x2(e,t,n,r,i,o,a,l,s){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(c){this.onError(c)}}var io=!1,bs=null,ws=!1,cd=null,b2={onError:function(e){io=!0,bs=e}};function w2(e,t,n,r,i,o,a,l,s){io=!1,bs=null,x2.apply(b2,arguments)}function S2(e,t,n,r,i,o,a,l,s){if(w2.apply(this,arguments),io){if(io){var u=bs;io=!1,bs=null}else throw Error(z(198));ws||(ws=!0,cd=u)}}function Ir(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Pv(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Lh(e){if(Ir(e)!==e)throw Error(z(188))}function _2(e){var t=e.alternate;if(!t){if(t=Ir(e),t===null)throw Error(z(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return Lh(i),e;if(o===r)return Lh(i),t;o=o.sibling}throw Error(z(188))}if(n.return!==r.return)n=i,r=o;else{for(var a=!1,l=i.child;l;){if(l===n){a=!0,n=i,r=o;break}if(l===r){a=!0,r=i,n=o;break}l=l.sibling}if(!a){for(l=o.child;l;){if(l===n){a=!0,n=o,r=i;break}if(l===r){a=!0,r=o,n=i;break}l=l.sibling}if(!a)throw Error(z(189))}}if(n.alternate!==r)throw Error(z(190))}if(n.tag!==3)throw Error(z(188));return n.stateNode.current===n?e:t}function jv(e){return e=_2(e),e!==null?Mv(e):null}function Mv(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Mv(e);if(t!==null)return t;e=e.sibling}return null}var Iv=_t.unstable_scheduleCallback,Fh=_t.unstable_cancelCallback,C2=_t.unstable_shouldYield,E2=_t.unstable_requestPaint,Se=_t.unstable_now,k2=_t.unstable_getCurrentPriorityLevel,Bf=_t.unstable_ImmediatePriority,$v=_t.unstable_UserBlockingPriority,Ss=_t.unstable_NormalPriority,T2=_t.unstable_LowPriority,Dv=_t.unstable_IdlePriority,vl=null,rn=null;function O2(e){if(rn&&typeof rn.onCommitFiberRoot=="function")try{rn.onCommitFiberRoot(vl,e,void 0,(e.current.flags&128)===128)}catch{}}var Ht=Math.clz32?Math.clz32:M2,P2=Math.log,j2=Math.LN2;function M2(e){return e>>>=0,e===0?32:31-(P2(e)/j2|0)|0}var fa=64,pa=4194304;function Ki(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function _s(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,a=n&268435455;if(a!==0){var l=a&~i;l!==0?r=Ki(l):(o&=a,o!==0&&(r=Ki(o)))}else a=n&~i,a!==0?r=Ki(a):o!==0&&(r=Ki(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Ht(t),i=1<<n,r|=e[n],t&=~i;return r}function I2(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function $2(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var a=31-Ht(o),l=1<<a,s=i[a];s===-1?(!(l&n)||l&r)&&(i[a]=I2(l,t)):s<=t&&(e.expiredLanes|=l),o&=~l}}function dd(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Rv(){var e=fa;return fa<<=1,!(fa&4194240)&&(fa=64),e}function Mu(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function qo(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ht(t),e[t]=n}function D2(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Ht(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function Vf(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ht(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var le=0;function Av(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Lv,Hf,Fv,zv,Nv,fd=!1,ha=[],Xn=null,Kn=null,Qn=null,wo=new Map,So=new Map,Bn=[],R2="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function zh(e,t){switch(e){case"focusin":case"focusout":Xn=null;break;case"dragenter":case"dragleave":Kn=null;break;case"mouseover":case"mouseout":Qn=null;break;case"pointerover":case"pointerout":wo.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":So.delete(t.pointerId)}}function Ri(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=Ko(t),t!==null&&Hf(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function A2(e,t,n,r,i){switch(t){case"focusin":return Xn=Ri(Xn,e,t,n,r,i),!0;case"dragenter":return Kn=Ri(Kn,e,t,n,r,i),!0;case"mouseover":return Qn=Ri(Qn,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return wo.set(o,Ri(wo.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,So.set(o,Ri(So.get(o)||null,e,t,n,r,i)),!0}return!1}function Bv(e){var t=hr(e.target);if(t!==null){var n=Ir(t);if(n!==null){if(t=n.tag,t===13){if(t=Pv(n),t!==null){e.blockedOn=t,Nv(e.priority,function(){Fv(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Wa(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=pd(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);sd=r,n.target.dispatchEvent(r),sd=null}else return t=Ko(n),t!==null&&Hf(t),e.blockedOn=n,!1;t.shift()}return!0}function Nh(e,t,n){Wa(e)&&n.delete(t)}function L2(){fd=!1,Xn!==null&&Wa(Xn)&&(Xn=null),Kn!==null&&Wa(Kn)&&(Kn=null),Qn!==null&&Wa(Qn)&&(Qn=null),wo.forEach(Nh),So.forEach(Nh)}function Ai(e,t){e.blockedOn===t&&(e.blockedOn=null,fd||(fd=!0,_t.unstable_scheduleCallback(_t.unstable_NormalPriority,L2)))}function _o(e){function t(i){return Ai(i,e)}if(0<ha.length){Ai(ha[0],e);for(var n=1;n<ha.length;n++){var r=ha[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Xn!==null&&Ai(Xn,e),Kn!==null&&Ai(Kn,e),Qn!==null&&Ai(Qn,e),wo.forEach(t),So.forEach(t),n=0;n<Bn.length;n++)r=Bn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Bn.length&&(n=Bn[0],n.blockedOn===null);)Bv(n),n.blockedOn===null&&Bn.shift()}var ri=$n.ReactCurrentBatchConfig,Cs=!0;function F2(e,t,n,r){var i=le,o=ri.transition;ri.transition=null;try{le=1,Uf(e,t,n,r)}finally{le=i,ri.transition=o}}function z2(e,t,n,r){var i=le,o=ri.transition;ri.transition=null;try{le=4,Uf(e,t,n,r)}finally{le=i,ri.transition=o}}function Uf(e,t,n,r){if(Cs){var i=pd(e,t,n,r);if(i===null)Bu(e,t,r,Es,n),zh(e,r);else if(A2(i,e,t,n,r))r.stopPropagation();else if(zh(e,r),t&4&&-1<R2.indexOf(e)){for(;i!==null;){var o=Ko(i);if(o!==null&&Lv(o),o=pd(e,t,n,r),o===null&&Bu(e,t,r,Es,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else Bu(e,t,r,null,n)}}var Es=null;function pd(e,t,n,r){if(Es=null,e=Nf(r),e=hr(e),e!==null)if(t=Ir(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Pv(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Es=e,null}function Vv(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(k2()){case Bf:return 1;case $v:return 4;case Ss:case T2:return 16;case Dv:return 536870912;default:return 16}default:return 16}}var Un=null,Wf=null,Ga=null;function Hv(){if(Ga)return Ga;var e,t=Wf,n=t.length,r,i="value"in Un?Un.value:Un.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===i[o-r];r++);return Ga=i.slice(e,1<r?1-r:void 0)}function Ya(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ma(){return!0}function Bh(){return!1}function kt(e){function t(n,r,i,o,a){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=a,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(o):o[l]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?ma:Bh,this.isPropagationStopped=Bh,this}return xe(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ma)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ma)},persist:function(){},isPersistent:ma}),t}var Ei={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Gf=kt(Ei),Xo=xe({},Ei,{view:0,detail:0}),N2=kt(Xo),Iu,$u,Li,yl=xe({},Xo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Yf,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Li&&(Li&&e.type==="mousemove"?(Iu=e.screenX-Li.screenX,$u=e.screenY-Li.screenY):$u=Iu=0,Li=e),Iu)},movementY:function(e){return"movementY"in e?e.movementY:$u}}),Vh=kt(yl),B2=xe({},yl,{dataTransfer:0}),V2=kt(B2),H2=xe({},Xo,{relatedTarget:0}),Du=kt(H2),U2=xe({},Ei,{animationName:0,elapsedTime:0,pseudoElement:0}),W2=kt(U2),G2=xe({},Ei,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Y2=kt(G2),q2=xe({},Ei,{data:0}),Hh=kt(q2),X2={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},K2={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Q2={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Z2(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Q2[e])?!!t[e]:!1}function Yf(){return Z2}var J2=xe({},Xo,{key:function(e){if(e.key){var t=X2[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ya(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?K2[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Yf,charCode:function(e){return e.type==="keypress"?Ya(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ya(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),e_=kt(J2),t_=xe({},yl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Uh=kt(t_),n_=xe({},Xo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Yf}),r_=kt(n_),i_=xe({},Ei,{propertyName:0,elapsedTime:0,pseudoElement:0}),o_=kt(i_),a_=xe({},yl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),s_=kt(a_),l_=[9,13,27,32],qf=En&&"CompositionEvent"in window,oo=null;En&&"documentMode"in document&&(oo=document.documentMode);var u_=En&&"TextEvent"in window&&!oo,Uv=En&&(!qf||oo&&8<oo&&11>=oo),Wh=String.fromCharCode(32),Gh=!1;function Wv(e,t){switch(e){case"keyup":return l_.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Gv(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ur=!1;function c_(e,t){switch(e){case"compositionend":return Gv(t);case"keypress":return t.which!==32?null:(Gh=!0,Wh);case"textInput":return e=t.data,e===Wh&&Gh?null:e;default:return null}}function d_(e,t){if(Ur)return e==="compositionend"||!qf&&Wv(e,t)?(e=Hv(),Ga=Wf=Un=null,Ur=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Uv&&t.locale!=="ko"?null:t.data;default:return null}}var f_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Yh(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!f_[e.type]:t==="textarea"}function Yv(e,t,n,r){Cv(r),t=ks(t,"onChange"),0<t.length&&(n=new Gf("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var ao=null,Co=null;function p_(e){i1(e,0)}function xl(e){var t=Yr(e);if(vv(t))return e}function h_(e,t){if(e==="change")return t}var qv=!1;if(En){var Ru;if(En){var Au="oninput"in document;if(!Au){var qh=document.createElement("div");qh.setAttribute("oninput","return;"),Au=typeof qh.oninput=="function"}Ru=Au}else Ru=!1;qv=Ru&&(!document.documentMode||9<document.documentMode)}function Xh(){ao&&(ao.detachEvent("onpropertychange",Xv),Co=ao=null)}function Xv(e){if(e.propertyName==="value"&&xl(Co)){var t=[];Yv(t,Co,e,Nf(e)),Ov(p_,t)}}function m_(e,t,n){e==="focusin"?(Xh(),ao=t,Co=n,ao.attachEvent("onpropertychange",Xv)):e==="focusout"&&Xh()}function g_(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return xl(Co)}function v_(e,t){if(e==="click")return xl(t)}function y_(e,t){if(e==="input"||e==="change")return xl(t)}function x_(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Yt=typeof Object.is=="function"?Object.is:x_;function Eo(e,t){if(Yt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Xc.call(t,i)||!Yt(e[i],t[i]))return!1}return!0}function Kh(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Qh(e,t){var n=Kh(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Kh(n)}}function Kv(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Kv(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Qv(){for(var e=window,t=xs();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=xs(e.document)}return t}function Xf(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function b_(e){var t=Qv(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Kv(n.ownerDocument.documentElement,n)){if(r!==null&&Xf(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=Qh(n,o);var a=Qh(n,r);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var w_=En&&"documentMode"in document&&11>=document.documentMode,Wr=null,hd=null,so=null,md=!1;function Zh(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;md||Wr==null||Wr!==xs(r)||(r=Wr,"selectionStart"in r&&Xf(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),so&&Eo(so,r)||(so=r,r=ks(hd,"onSelect"),0<r.length&&(t=new Gf("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Wr)))}function ga(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Gr={animationend:ga("Animation","AnimationEnd"),animationiteration:ga("Animation","AnimationIteration"),animationstart:ga("Animation","AnimationStart"),transitionend:ga("Transition","TransitionEnd")},Lu={},Zv={};En&&(Zv=document.createElement("div").style,"AnimationEvent"in window||(delete Gr.animationend.animation,delete Gr.animationiteration.animation,delete Gr.animationstart.animation),"TransitionEvent"in window||delete Gr.transitionend.transition);function bl(e){if(Lu[e])return Lu[e];if(!Gr[e])return e;var t=Gr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Zv)return Lu[e]=t[n];return e}var Jv=bl("animationend"),e1=bl("animationiteration"),t1=bl("animationstart"),n1=bl("transitionend"),r1=new Map,Jh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function sr(e,t){r1.set(e,t),Mr(t,[e])}for(var Fu=0;Fu<Jh.length;Fu++){var zu=Jh[Fu],S_=zu.toLowerCase(),__=zu[0].toUpperCase()+zu.slice(1);sr(S_,"on"+__)}sr(Jv,"onAnimationEnd");sr(e1,"onAnimationIteration");sr(t1,"onAnimationStart");sr("dblclick","onDoubleClick");sr("focusin","onFocus");sr("focusout","onBlur");sr(n1,"onTransitionEnd");li("onMouseEnter",["mouseout","mouseover"]);li("onMouseLeave",["mouseout","mouseover"]);li("onPointerEnter",["pointerout","pointerover"]);li("onPointerLeave",["pointerout","pointerover"]);Mr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Mr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Mr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Mr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Mr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Mr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Qi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),C_=new Set("cancel close invalid load scroll toggle".split(" ").concat(Qi));function em(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,S2(r,t,void 0,e),e.currentTarget=null}function i1(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var a=r.length-1;0<=a;a--){var l=r[a],s=l.instance,u=l.currentTarget;if(l=l.listener,s!==o&&i.isPropagationStopped())break e;em(i,l,u),o=s}else for(a=0;a<r.length;a++){if(l=r[a],s=l.instance,u=l.currentTarget,l=l.listener,s!==o&&i.isPropagationStopped())break e;em(i,l,u),o=s}}}if(ws)throw e=cd,ws=!1,cd=null,e}function fe(e,t){var n=t[bd];n===void 0&&(n=t[bd]=new Set);var r=e+"__bubble";n.has(r)||(o1(t,e,2,!1),n.add(r))}function Nu(e,t,n){var r=0;t&&(r|=4),o1(n,e,r,t)}var va="_reactListening"+Math.random().toString(36).slice(2);function ko(e){if(!e[va]){e[va]=!0,fv.forEach(function(n){n!=="selectionchange"&&(C_.has(n)||Nu(n,!1,e),Nu(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[va]||(t[va]=!0,Nu("selectionchange",!1,t))}}function o1(e,t,n,r){switch(Vv(t)){case 1:var i=F2;break;case 4:i=z2;break;default:i=Uf}n=i.bind(null,t,n,e),i=void 0,!ud||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Bu(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(a===4)for(a=r.return;a!==null;){var s=a.tag;if((s===3||s===4)&&(s=a.stateNode.containerInfo,s===i||s.nodeType===8&&s.parentNode===i))return;a=a.return}for(;l!==null;){if(a=hr(l),a===null)return;if(s=a.tag,s===5||s===6){r=o=a;continue e}l=l.parentNode}}r=r.return}Ov(function(){var u=o,c=Nf(n),d=[];e:{var g=r1.get(e);if(g!==void 0){var m=Gf,v=e;switch(e){case"keypress":if(Ya(n)===0)break e;case"keydown":case"keyup":m=e_;break;case"focusin":v="focus",m=Du;break;case"focusout":v="blur",m=Du;break;case"beforeblur":case"afterblur":m=Du;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=Vh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=V2;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=r_;break;case Jv:case e1:case t1:m=W2;break;case n1:m=o_;break;case"scroll":m=N2;break;case"wheel":m=s_;break;case"copy":case"cut":case"paste":m=Y2;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=Uh}var x=(t&4)!==0,w=!x&&e==="scroll",f=x?g!==null?g+"Capture":null:g;x=[];for(var p=u,y;p!==null;){y=p;var b=y.stateNode;if(y.tag===5&&b!==null&&(y=b,f!==null&&(b=bo(p,f),b!=null&&x.push(To(p,b,y)))),w)break;p=p.return}0<x.length&&(g=new m(g,v,null,n,c),d.push({event:g,listeners:x}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",m=e==="mouseout"||e==="pointerout",g&&n!==sd&&(v=n.relatedTarget||n.fromElement)&&(hr(v)||v[kn]))break e;if((m||g)&&(g=c.window===c?c:(g=c.ownerDocument)?g.defaultView||g.parentWindow:window,m?(v=n.relatedTarget||n.toElement,m=u,v=v?hr(v):null,v!==null&&(w=Ir(v),v!==w||v.tag!==5&&v.tag!==6)&&(v=null)):(m=null,v=u),m!==v)){if(x=Vh,b="onMouseLeave",f="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(x=Uh,b="onPointerLeave",f="onPointerEnter",p="pointer"),w=m==null?g:Yr(m),y=v==null?g:Yr(v),g=new x(b,p+"leave",m,n,c),g.target=w,g.relatedTarget=y,b=null,hr(c)===u&&(x=new x(f,p+"enter",v,n,c),x.target=y,x.relatedTarget=w,b=x),w=b,m&&v)t:{for(x=m,f=v,p=0,y=x;y;y=$r(y))p++;for(y=0,b=f;b;b=$r(b))y++;for(;0<p-y;)x=$r(x),p--;for(;0<y-p;)f=$r(f),y--;for(;p--;){if(x===f||f!==null&&x===f.alternate)break t;x=$r(x),f=$r(f)}x=null}else x=null;m!==null&&tm(d,g,m,x,!1),v!==null&&w!==null&&tm(d,w,v,x,!0)}}e:{if(g=u?Yr(u):window,m=g.nodeName&&g.nodeName.toLowerCase(),m==="select"||m==="input"&&g.type==="file")var E=h_;else if(Yh(g))if(qv)E=y_;else{E=g_;var k=m_}else(m=g.nodeName)&&m.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(E=v_);if(E&&(E=E(e,u))){Yv(d,E,n,c);break e}k&&k(e,g,u),e==="focusout"&&(k=g._wrapperState)&&k.controlled&&g.type==="number"&&nd(g,"number",g.value)}switch(k=u?Yr(u):window,e){case"focusin":(Yh(k)||k.contentEditable==="true")&&(Wr=k,hd=u,so=null);break;case"focusout":so=hd=Wr=null;break;case"mousedown":md=!0;break;case"contextmenu":case"mouseup":case"dragend":md=!1,Zh(d,n,c);break;case"selectionchange":if(w_)break;case"keydown":case"keyup":Zh(d,n,c)}var _;if(qf)e:{switch(e){case"compositionstart":var S="onCompositionStart";break e;case"compositionend":S="onCompositionEnd";break e;case"compositionupdate":S="onCompositionUpdate";break e}S=void 0}else Ur?Wv(e,n)&&(S="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(S="onCompositionStart");S&&(Uv&&n.locale!=="ko"&&(Ur||S!=="onCompositionStart"?S==="onCompositionEnd"&&Ur&&(_=Hv()):(Un=c,Wf="value"in Un?Un.value:Un.textContent,Ur=!0)),k=ks(u,S),0<k.length&&(S=new Hh(S,e,null,n,c),d.push({event:S,listeners:k}),_?S.data=_:(_=Gv(n),_!==null&&(S.data=_)))),(_=u_?c_(e,n):d_(e,n))&&(u=ks(u,"onBeforeInput"),0<u.length&&(c=new Hh("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:u}),c.data=_))}i1(d,t)})}function To(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ks(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=bo(e,n),o!=null&&r.unshift(To(e,o,i)),o=bo(e,t),o!=null&&r.push(To(e,o,i))),e=e.return}return r}function $r(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function tm(e,t,n,r,i){for(var o=t._reactName,a=[];n!==null&&n!==r;){var l=n,s=l.alternate,u=l.stateNode;if(s!==null&&s===r)break;l.tag===5&&u!==null&&(l=u,i?(s=bo(n,o),s!=null&&a.unshift(To(n,s,l))):i||(s=bo(n,o),s!=null&&a.push(To(n,s,l)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var E_=/\r\n?/g,k_=/\u0000|\uFFFD/g;function nm(e){return(typeof e=="string"?e:""+e).replace(E_,`
`).replace(k_,"")}function ya(e,t,n){if(t=nm(t),nm(e)!==t&&n)throw Error(z(425))}function Ts(){}var gd=null,vd=null;function yd(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var xd=typeof setTimeout=="function"?setTimeout:void 0,T_=typeof clearTimeout=="function"?clearTimeout:void 0,rm=typeof Promise=="function"?Promise:void 0,O_=typeof queueMicrotask=="function"?queueMicrotask:typeof rm<"u"?function(e){return rm.resolve(null).then(e).catch(P_)}:xd;function P_(e){setTimeout(function(){throw e})}function Vu(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),_o(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);_o(t)}function Zn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function im(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var ki=Math.random().toString(36).slice(2),tn="__reactFiber$"+ki,Oo="__reactProps$"+ki,kn="__reactContainer$"+ki,bd="__reactEvents$"+ki,j_="__reactListeners$"+ki,M_="__reactHandles$"+ki;function hr(e){var t=e[tn];if(t)return t;for(var n=e.parentNode;n;){if(t=n[kn]||n[tn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=im(e);e!==null;){if(n=e[tn])return n;e=im(e)}return t}e=n,n=e.parentNode}return null}function Ko(e){return e=e[tn]||e[kn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Yr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(z(33))}function wl(e){return e[Oo]||null}var wd=[],qr=-1;function lr(e){return{current:e}}function he(e){0>qr||(e.current=wd[qr],wd[qr]=null,qr--)}function de(e,t){qr++,wd[qr]=e.current,e.current=t}var or={},Ke=lr(or),ut=lr(!1),wr=or;function ui(e,t){var n=e.type.contextTypes;if(!n)return or;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function ct(e){return e=e.childContextTypes,e!=null}function Os(){he(ut),he(Ke)}function om(e,t,n){if(Ke.current!==or)throw Error(z(168));de(Ke,t),de(ut,n)}function a1(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(z(108,m2(e)||"Unknown",i));return xe({},n,r)}function Ps(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||or,wr=Ke.current,de(Ke,e),de(ut,ut.current),!0}function am(e,t,n){var r=e.stateNode;if(!r)throw Error(z(169));n?(e=a1(e,t,wr),r.__reactInternalMemoizedMergedChildContext=e,he(ut),he(Ke),de(Ke,e)):he(ut),de(ut,n)}var gn=null,Sl=!1,Hu=!1;function s1(e){gn===null?gn=[e]:gn.push(e)}function I_(e){Sl=!0,s1(e)}function ur(){if(!Hu&&gn!==null){Hu=!0;var e=0,t=le;try{var n=gn;for(le=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}gn=null,Sl=!1}catch(i){throw gn!==null&&(gn=gn.slice(e+1)),Iv(Bf,ur),i}finally{le=t,Hu=!1}}return null}var Xr=[],Kr=0,js=null,Ms=0,Ot=[],Pt=0,Sr=null,xn=1,bn="";function cr(e,t){Xr[Kr++]=Ms,Xr[Kr++]=js,js=e,Ms=t}function l1(e,t,n){Ot[Pt++]=xn,Ot[Pt++]=bn,Ot[Pt++]=Sr,Sr=e;var r=xn;e=bn;var i=32-Ht(r)-1;r&=~(1<<i),n+=1;var o=32-Ht(t)+i;if(30<o){var a=i-i%5;o=(r&(1<<a)-1).toString(32),r>>=a,i-=a,xn=1<<32-Ht(t)+i|n<<i|r,bn=o+e}else xn=1<<o|n<<i|r,bn=e}function Kf(e){e.return!==null&&(cr(e,1),l1(e,1,0))}function Qf(e){for(;e===js;)js=Xr[--Kr],Xr[Kr]=null,Ms=Xr[--Kr],Xr[Kr]=null;for(;e===Sr;)Sr=Ot[--Pt],Ot[Pt]=null,bn=Ot[--Pt],Ot[Pt]=null,xn=Ot[--Pt],Ot[Pt]=null}var wt=null,xt=null,ge=!1,Bt=null;function u1(e,t){var n=jt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function sm(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,wt=e,xt=Zn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,wt=e,xt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Sr!==null?{id:xn,overflow:bn}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=jt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,wt=e,xt=null,!0):!1;default:return!1}}function Sd(e){return(e.mode&1)!==0&&(e.flags&128)===0}function _d(e){if(ge){var t=xt;if(t){var n=t;if(!sm(e,t)){if(Sd(e))throw Error(z(418));t=Zn(n.nextSibling);var r=wt;t&&sm(e,t)?u1(r,n):(e.flags=e.flags&-4097|2,ge=!1,wt=e)}}else{if(Sd(e))throw Error(z(418));e.flags=e.flags&-4097|2,ge=!1,wt=e}}}function lm(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;wt=e}function xa(e){if(e!==wt)return!1;if(!ge)return lm(e),ge=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!yd(e.type,e.memoizedProps)),t&&(t=xt)){if(Sd(e))throw c1(),Error(z(418));for(;t;)u1(e,t),t=Zn(t.nextSibling)}if(lm(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(z(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){xt=Zn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}xt=null}}else xt=wt?Zn(e.stateNode.nextSibling):null;return!0}function c1(){for(var e=xt;e;)e=Zn(e.nextSibling)}function ci(){xt=wt=null,ge=!1}function Zf(e){Bt===null?Bt=[e]:Bt.push(e)}var $_=$n.ReactCurrentBatchConfig;function Ft(e,t){if(e&&e.defaultProps){t=xe({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Is=lr(null),$s=null,Qr=null,Jf=null;function ep(){Jf=Qr=$s=null}function tp(e){var t=Is.current;he(Is),e._currentValue=t}function Cd(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function ii(e,t){$s=e,Jf=Qr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(lt=!0),e.firstContext=null)}function It(e){var t=e._currentValue;if(Jf!==e)if(e={context:e,memoizedValue:t,next:null},Qr===null){if($s===null)throw Error(z(308));Qr=e,$s.dependencies={lanes:0,firstContext:e}}else Qr=Qr.next=e;return t}var mr=null;function np(e){mr===null?mr=[e]:mr.push(e)}function d1(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,np(t)):(n.next=i.next,i.next=n),t.interleaved=n,Tn(e,r)}function Tn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Nn=!1;function rp(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function f1(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function wn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Jn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,ne&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Tn(e,n)}return i=r.interleaved,i===null?(t.next=t,np(r)):(t.next=i.next,i.next=t),r.interleaved=t,Tn(e,n)}function qa(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Vf(e,n)}}function um(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=a:o=o.next=a,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Ds(e,t,n,r){var i=e.updateQueue;Nn=!1;var o=i.firstBaseUpdate,a=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var s=l,u=s.next;s.next=null,a===null?o=u:a.next=u,a=s;var c=e.alternate;c!==null&&(c=c.updateQueue,l=c.lastBaseUpdate,l!==a&&(l===null?c.firstBaseUpdate=u:l.next=u,c.lastBaseUpdate=s))}if(o!==null){var d=i.baseState;a=0,c=u=s=null,l=o;do{var g=l.lane,m=l.eventTime;if((r&g)===g){c!==null&&(c=c.next={eventTime:m,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var v=e,x=l;switch(g=t,m=n,x.tag){case 1:if(v=x.payload,typeof v=="function"){d=v.call(m,d,g);break e}d=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=x.payload,g=typeof v=="function"?v.call(m,d,g):v,g==null)break e;d=xe({},d,g);break e;case 2:Nn=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,g=i.effects,g===null?i.effects=[l]:g.push(l))}else m={eventTime:m,lane:g,tag:l.tag,payload:l.payload,callback:l.callback,next:null},c===null?(u=c=m,s=d):c=c.next=m,a|=g;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;g=l,l=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(1);if(c===null&&(s=d),i.baseState=s,i.firstBaseUpdate=u,i.lastBaseUpdate=c,t=i.shared.interleaved,t!==null){i=t;do a|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);Cr|=a,e.lanes=a,e.memoizedState=d}}function cm(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(z(191,i));i.call(r)}}}var p1=new dv.Component().refs;function Ed(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:xe({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var _l={isMounted:function(e){return(e=e._reactInternals)?Ir(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=et(),i=tr(e),o=wn(r,i);o.payload=t,n!=null&&(o.callback=n),t=Jn(e,o,i),t!==null&&(Ut(t,e,i,r),qa(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=et(),i=tr(e),o=wn(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=Jn(e,o,i),t!==null&&(Ut(t,e,i,r),qa(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=et(),r=tr(e),i=wn(n,r);i.tag=2,t!=null&&(i.callback=t),t=Jn(e,i,r),t!==null&&(Ut(t,e,r,n),qa(t,e,r))}};function dm(e,t,n,r,i,o,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,a):t.prototype&&t.prototype.isPureReactComponent?!Eo(n,r)||!Eo(i,o):!0}function h1(e,t,n){var r=!1,i=or,o=t.contextType;return typeof o=="object"&&o!==null?o=It(o):(i=ct(t)?wr:Ke.current,r=t.contextTypes,o=(r=r!=null)?ui(e,i):or),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=_l,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function fm(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&_l.enqueueReplaceState(t,t.state,null)}function kd(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=p1,rp(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=It(o):(o=ct(t)?wr:Ke.current,i.context=ui(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Ed(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&_l.enqueueReplaceState(i,i.state,null),Ds(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Fi(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(z(309));var r=n.stateNode}if(!r)throw Error(z(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(a){var l=i.refs;l===p1&&(l=i.refs={}),a===null?delete l[o]:l[o]=a},t._stringRef=o,t)}if(typeof e!="string")throw Error(z(284));if(!n._owner)throw Error(z(290,e))}return e}function ba(e,t){throw e=Object.prototype.toString.call(t),Error(z(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function pm(e){var t=e._init;return t(e._payload)}function m1(e){function t(f,p){if(e){var y=f.deletions;y===null?(f.deletions=[p],f.flags|=16):y.push(p)}}function n(f,p){if(!e)return null;for(;p!==null;)t(f,p),p=p.sibling;return null}function r(f,p){for(f=new Map;p!==null;)p.key!==null?f.set(p.key,p):f.set(p.index,p),p=p.sibling;return f}function i(f,p){return f=nr(f,p),f.index=0,f.sibling=null,f}function o(f,p,y){return f.index=y,e?(y=f.alternate,y!==null?(y=y.index,y<p?(f.flags|=2,p):y):(f.flags|=2,p)):(f.flags|=1048576,p)}function a(f){return e&&f.alternate===null&&(f.flags|=2),f}function l(f,p,y,b){return p===null||p.tag!==6?(p=Ku(y,f.mode,b),p.return=f,p):(p=i(p,y),p.return=f,p)}function s(f,p,y,b){var E=y.type;return E===Hr?c(f,p,y.props.children,b,y.key):p!==null&&(p.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===zn&&pm(E)===p.type)?(b=i(p,y.props),b.ref=Fi(f,p,y),b.return=f,b):(b=es(y.type,y.key,y.props,null,f.mode,b),b.ref=Fi(f,p,y),b.return=f,b)}function u(f,p,y,b){return p===null||p.tag!==4||p.stateNode.containerInfo!==y.containerInfo||p.stateNode.implementation!==y.implementation?(p=Qu(y,f.mode,b),p.return=f,p):(p=i(p,y.children||[]),p.return=f,p)}function c(f,p,y,b,E){return p===null||p.tag!==7?(p=xr(y,f.mode,b,E),p.return=f,p):(p=i(p,y),p.return=f,p)}function d(f,p,y){if(typeof p=="string"&&p!==""||typeof p=="number")return p=Ku(""+p,f.mode,y),p.return=f,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case ua:return y=es(p.type,p.key,p.props,null,f.mode,y),y.ref=Fi(f,null,p),y.return=f,y;case Vr:return p=Qu(p,f.mode,y),p.return=f,p;case zn:var b=p._init;return d(f,b(p._payload),y)}if(Xi(p)||$i(p))return p=xr(p,f.mode,y,null),p.return=f,p;ba(f,p)}return null}function g(f,p,y,b){var E=p!==null?p.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return E!==null?null:l(f,p,""+y,b);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case ua:return y.key===E?s(f,p,y,b):null;case Vr:return y.key===E?u(f,p,y,b):null;case zn:return E=y._init,g(f,p,E(y._payload),b)}if(Xi(y)||$i(y))return E!==null?null:c(f,p,y,b,null);ba(f,y)}return null}function m(f,p,y,b,E){if(typeof b=="string"&&b!==""||typeof b=="number")return f=f.get(y)||null,l(p,f,""+b,E);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case ua:return f=f.get(b.key===null?y:b.key)||null,s(p,f,b,E);case Vr:return f=f.get(b.key===null?y:b.key)||null,u(p,f,b,E);case zn:var k=b._init;return m(f,p,y,k(b._payload),E)}if(Xi(b)||$i(b))return f=f.get(y)||null,c(p,f,b,E,null);ba(p,b)}return null}function v(f,p,y,b){for(var E=null,k=null,_=p,S=p=0,M=null;_!==null&&S<y.length;S++){_.index>S?(M=_,_=null):M=_.sibling;var j=g(f,_,y[S],b);if(j===null){_===null&&(_=M);break}e&&_&&j.alternate===null&&t(f,_),p=o(j,p,S),k===null?E=j:k.sibling=j,k=j,_=M}if(S===y.length)return n(f,_),ge&&cr(f,S),E;if(_===null){for(;S<y.length;S++)_=d(f,y[S],b),_!==null&&(p=o(_,p,S),k===null?E=_:k.sibling=_,k=_);return ge&&cr(f,S),E}for(_=r(f,_);S<y.length;S++)M=m(_,f,S,y[S],b),M!==null&&(e&&M.alternate!==null&&_.delete(M.key===null?S:M.key),p=o(M,p,S),k===null?E=M:k.sibling=M,k=M);return e&&_.forEach(function(I){return t(f,I)}),ge&&cr(f,S),E}function x(f,p,y,b){var E=$i(y);if(typeof E!="function")throw Error(z(150));if(y=E.call(y),y==null)throw Error(z(151));for(var k=E=null,_=p,S=p=0,M=null,j=y.next();_!==null&&!j.done;S++,j=y.next()){_.index>S?(M=_,_=null):M=_.sibling;var I=g(f,_,j.value,b);if(I===null){_===null&&(_=M);break}e&&_&&I.alternate===null&&t(f,_),p=o(I,p,S),k===null?E=I:k.sibling=I,k=I,_=M}if(j.done)return n(f,_),ge&&cr(f,S),E;if(_===null){for(;!j.done;S++,j=y.next())j=d(f,j.value,b),j!==null&&(p=o(j,p,S),k===null?E=j:k.sibling=j,k=j);return ge&&cr(f,S),E}for(_=r(f,_);!j.done;S++,j=y.next())j=m(_,f,S,j.value,b),j!==null&&(e&&j.alternate!==null&&_.delete(j.key===null?S:j.key),p=o(j,p,S),k===null?E=j:k.sibling=j,k=j);return e&&_.forEach(function(P){return t(f,P)}),ge&&cr(f,S),E}function w(f,p,y,b){if(typeof y=="object"&&y!==null&&y.type===Hr&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case ua:e:{for(var E=y.key,k=p;k!==null;){if(k.key===E){if(E=y.type,E===Hr){if(k.tag===7){n(f,k.sibling),p=i(k,y.props.children),p.return=f,f=p;break e}}else if(k.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===zn&&pm(E)===k.type){n(f,k.sibling),p=i(k,y.props),p.ref=Fi(f,k,y),p.return=f,f=p;break e}n(f,k);break}else t(f,k);k=k.sibling}y.type===Hr?(p=xr(y.props.children,f.mode,b,y.key),p.return=f,f=p):(b=es(y.type,y.key,y.props,null,f.mode,b),b.ref=Fi(f,p,y),b.return=f,f=b)}return a(f);case Vr:e:{for(k=y.key;p!==null;){if(p.key===k)if(p.tag===4&&p.stateNode.containerInfo===y.containerInfo&&p.stateNode.implementation===y.implementation){n(f,p.sibling),p=i(p,y.children||[]),p.return=f,f=p;break e}else{n(f,p);break}else t(f,p);p=p.sibling}p=Qu(y,f.mode,b),p.return=f,f=p}return a(f);case zn:return k=y._init,w(f,p,k(y._payload),b)}if(Xi(y))return v(f,p,y,b);if($i(y))return x(f,p,y,b);ba(f,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,p!==null&&p.tag===6?(n(f,p.sibling),p=i(p,y),p.return=f,f=p):(n(f,p),p=Ku(y,f.mode,b),p.return=f,f=p),a(f)):n(f,p)}return w}var di=m1(!0),g1=m1(!1),Qo={},on=lr(Qo),Po=lr(Qo),jo=lr(Qo);function gr(e){if(e===Qo)throw Error(z(174));return e}function ip(e,t){switch(de(jo,t),de(Po,e),de(on,Qo),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:id(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=id(t,e)}he(on),de(on,t)}function fi(){he(on),he(Po),he(jo)}function v1(e){gr(jo.current);var t=gr(on.current),n=id(t,e.type);t!==n&&(de(Po,e),de(on,n))}function op(e){Po.current===e&&(he(on),he(Po))}var ve=lr(0);function Rs(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Uu=[];function ap(){for(var e=0;e<Uu.length;e++)Uu[e]._workInProgressVersionPrimary=null;Uu.length=0}var Xa=$n.ReactCurrentDispatcher,Wu=$n.ReactCurrentBatchConfig,_r=0,ye=null,je=null,Re=null,As=!1,lo=!1,Mo=0,D_=0;function Ue(){throw Error(z(321))}function sp(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Yt(e[n],t[n]))return!1;return!0}function lp(e,t,n,r,i,o){if(_r=o,ye=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Xa.current=e===null||e.memoizedState===null?F_:z_,e=n(r,i),lo){o=0;do{if(lo=!1,Mo=0,25<=o)throw Error(z(301));o+=1,Re=je=null,t.updateQueue=null,Xa.current=N_,e=n(r,i)}while(lo)}if(Xa.current=Ls,t=je!==null&&je.next!==null,_r=0,Re=je=ye=null,As=!1,t)throw Error(z(300));return e}function up(){var e=Mo!==0;return Mo=0,e}function Zt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Re===null?ye.memoizedState=Re=e:Re=Re.next=e,Re}function $t(){if(je===null){var e=ye.alternate;e=e!==null?e.memoizedState:null}else e=je.next;var t=Re===null?ye.memoizedState:Re.next;if(t!==null)Re=t,je=e;else{if(e===null)throw Error(z(310));je=e,e={memoizedState:je.memoizedState,baseState:je.baseState,baseQueue:je.baseQueue,queue:je.queue,next:null},Re===null?ye.memoizedState=Re=e:Re=Re.next=e}return Re}function Io(e,t){return typeof t=="function"?t(e):t}function Gu(e){var t=$t(),n=t.queue;if(n===null)throw Error(z(311));n.lastRenderedReducer=e;var r=je,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var a=i.next;i.next=o.next,o.next=a}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var l=a=null,s=null,u=o;do{var c=u.lane;if((_r&c)===c)s!==null&&(s=s.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};s===null?(l=s=d,a=r):s=s.next=d,ye.lanes|=c,Cr|=c}u=u.next}while(u!==null&&u!==o);s===null?a=r:s.next=l,Yt(r,t.memoizedState)||(lt=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,ye.lanes|=o,Cr|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Yu(e){var t=$t(),n=t.queue;if(n===null)throw Error(z(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var a=i=i.next;do o=e(o,a.action),a=a.next;while(a!==i);Yt(o,t.memoizedState)||(lt=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function y1(){}function x1(e,t){var n=ye,r=$t(),i=t(),o=!Yt(r.memoizedState,i);if(o&&(r.memoizedState=i,lt=!0),r=r.queue,cp(S1.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||Re!==null&&Re.memoizedState.tag&1){if(n.flags|=2048,$o(9,w1.bind(null,n,r,i,t),void 0,null),Ae===null)throw Error(z(349));_r&30||b1(n,t,i)}return i}function b1(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ye.updateQueue,t===null?(t={lastEffect:null,stores:null},ye.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function w1(e,t,n,r){t.value=n,t.getSnapshot=r,_1(t)&&C1(e)}function S1(e,t,n){return n(function(){_1(t)&&C1(e)})}function _1(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Yt(e,n)}catch{return!0}}function C1(e){var t=Tn(e,1);t!==null&&Ut(t,e,1,-1)}function hm(e){var t=Zt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Io,lastRenderedState:e},t.queue=e,e=e.dispatch=L_.bind(null,ye,e),[t.memoizedState,e]}function $o(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ye.updateQueue,t===null?(t={lastEffect:null,stores:null},ye.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function E1(){return $t().memoizedState}function Ka(e,t,n,r){var i=Zt();ye.flags|=e,i.memoizedState=$o(1|t,n,void 0,r===void 0?null:r)}function Cl(e,t,n,r){var i=$t();r=r===void 0?null:r;var o=void 0;if(je!==null){var a=je.memoizedState;if(o=a.destroy,r!==null&&sp(r,a.deps)){i.memoizedState=$o(t,n,o,r);return}}ye.flags|=e,i.memoizedState=$o(1|t,n,o,r)}function mm(e,t){return Ka(8390656,8,e,t)}function cp(e,t){return Cl(2048,8,e,t)}function k1(e,t){return Cl(4,2,e,t)}function T1(e,t){return Cl(4,4,e,t)}function O1(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function P1(e,t,n){return n=n!=null?n.concat([e]):null,Cl(4,4,O1.bind(null,t,e),n)}function dp(){}function j1(e,t){var n=$t();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&sp(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function M1(e,t){var n=$t();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&sp(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function I1(e,t,n){return _r&21?(Yt(n,t)||(n=Rv(),ye.lanes|=n,Cr|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,lt=!0),e.memoizedState=n)}function R_(e,t){var n=le;le=n!==0&&4>n?n:4,e(!0);var r=Wu.transition;Wu.transition={};try{e(!1),t()}finally{le=n,Wu.transition=r}}function $1(){return $t().memoizedState}function A_(e,t,n){var r=tr(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},D1(e))R1(t,n);else if(n=d1(e,t,n,r),n!==null){var i=et();Ut(n,e,r,i),A1(n,t,r)}}function L_(e,t,n){var r=tr(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(D1(e))R1(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var a=t.lastRenderedState,l=o(a,n);if(i.hasEagerState=!0,i.eagerState=l,Yt(l,a)){var s=t.interleaved;s===null?(i.next=i,np(t)):(i.next=s.next,s.next=i),t.interleaved=i;return}}catch{}finally{}n=d1(e,t,i,r),n!==null&&(i=et(),Ut(n,e,r,i),A1(n,t,r))}}function D1(e){var t=e.alternate;return e===ye||t!==null&&t===ye}function R1(e,t){lo=As=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function A1(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Vf(e,n)}}var Ls={readContext:It,useCallback:Ue,useContext:Ue,useEffect:Ue,useImperativeHandle:Ue,useInsertionEffect:Ue,useLayoutEffect:Ue,useMemo:Ue,useReducer:Ue,useRef:Ue,useState:Ue,useDebugValue:Ue,useDeferredValue:Ue,useTransition:Ue,useMutableSource:Ue,useSyncExternalStore:Ue,useId:Ue,unstable_isNewReconciler:!1},F_={readContext:It,useCallback:function(e,t){return Zt().memoizedState=[e,t===void 0?null:t],e},useContext:It,useEffect:mm,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Ka(4194308,4,O1.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ka(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ka(4,2,e,t)},useMemo:function(e,t){var n=Zt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Zt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=A_.bind(null,ye,e),[r.memoizedState,e]},useRef:function(e){var t=Zt();return e={current:e},t.memoizedState=e},useState:hm,useDebugValue:dp,useDeferredValue:function(e){return Zt().memoizedState=e},useTransition:function(){var e=hm(!1),t=e[0];return e=R_.bind(null,e[1]),Zt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ye,i=Zt();if(ge){if(n===void 0)throw Error(z(407));n=n()}else{if(n=t(),Ae===null)throw Error(z(349));_r&30||b1(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,mm(S1.bind(null,r,o,e),[e]),r.flags|=2048,$o(9,w1.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=Zt(),t=Ae.identifierPrefix;if(ge){var n=bn,r=xn;n=(r&~(1<<32-Ht(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Mo++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=D_++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},z_={readContext:It,useCallback:j1,useContext:It,useEffect:cp,useImperativeHandle:P1,useInsertionEffect:k1,useLayoutEffect:T1,useMemo:M1,useReducer:Gu,useRef:E1,useState:function(){return Gu(Io)},useDebugValue:dp,useDeferredValue:function(e){var t=$t();return I1(t,je.memoizedState,e)},useTransition:function(){var e=Gu(Io)[0],t=$t().memoizedState;return[e,t]},useMutableSource:y1,useSyncExternalStore:x1,useId:$1,unstable_isNewReconciler:!1},N_={readContext:It,useCallback:j1,useContext:It,useEffect:cp,useImperativeHandle:P1,useInsertionEffect:k1,useLayoutEffect:T1,useMemo:M1,useReducer:Yu,useRef:E1,useState:function(){return Yu(Io)},useDebugValue:dp,useDeferredValue:function(e){var t=$t();return je===null?t.memoizedState=e:I1(t,je.memoizedState,e)},useTransition:function(){var e=Yu(Io)[0],t=$t().memoizedState;return[e,t]},useMutableSource:y1,useSyncExternalStore:x1,useId:$1,unstable_isNewReconciler:!1};function pi(e,t){try{var n="",r=t;do n+=h2(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function qu(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Td(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var B_=typeof WeakMap=="function"?WeakMap:Map;function L1(e,t,n){n=wn(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){zs||(zs=!0,Ld=r),Td(e,t)},n}function F1(e,t,n){n=wn(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Td(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Td(e,t),typeof r!="function"&&(er===null?er=new Set([this]):er.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function gm(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new B_;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=tC.bind(null,e,t,n),t.then(e,e))}function vm(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function ym(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=wn(-1,1),t.tag=2,Jn(n,t,1))),n.lanes|=1),e)}var V_=$n.ReactCurrentOwner,lt=!1;function Ze(e,t,n,r){t.child=e===null?g1(t,null,n,r):di(t,e.child,n,r)}function xm(e,t,n,r,i){n=n.render;var o=t.ref;return ii(t,i),r=lp(e,t,n,r,o,i),n=up(),e!==null&&!lt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,On(e,t,i)):(ge&&n&&Kf(t),t.flags|=1,Ze(e,t,r,i),t.child)}function bm(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!xp(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,z1(e,t,o,r,i)):(e=es(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var a=o.memoizedProps;if(n=n.compare,n=n!==null?n:Eo,n(a,r)&&e.ref===t.ref)return On(e,t,i)}return t.flags|=1,e=nr(o,r),e.ref=t.ref,e.return=t,t.child=e}function z1(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Eo(o,r)&&e.ref===t.ref)if(lt=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(lt=!0);else return t.lanes=e.lanes,On(e,t,i)}return Od(e,t,n,r,i)}function N1(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},de(Jr,vt),vt|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,de(Jr,vt),vt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,de(Jr,vt),vt|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,de(Jr,vt),vt|=r;return Ze(e,t,i,n),t.child}function B1(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Od(e,t,n,r,i){var o=ct(n)?wr:Ke.current;return o=ui(t,o),ii(t,i),n=lp(e,t,n,r,o,i),r=up(),e!==null&&!lt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,On(e,t,i)):(ge&&r&&Kf(t),t.flags|=1,Ze(e,t,n,i),t.child)}function wm(e,t,n,r,i){if(ct(n)){var o=!0;Ps(t)}else o=!1;if(ii(t,i),t.stateNode===null)Qa(e,t),h1(t,n,r),kd(t,n,r,i),r=!0;else if(e===null){var a=t.stateNode,l=t.memoizedProps;a.props=l;var s=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=It(u):(u=ct(n)?wr:Ke.current,u=ui(t,u));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof a.getSnapshotBeforeUpdate=="function";d||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==r||s!==u)&&fm(t,a,r,u),Nn=!1;var g=t.memoizedState;a.state=g,Ds(t,r,a,i),s=t.memoizedState,l!==r||g!==s||ut.current||Nn?(typeof c=="function"&&(Ed(t,n,c,r),s=t.memoizedState),(l=Nn||dm(t,n,l,r,g,s,u))?(d||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),a.props=r,a.state=s,a.context=u,r=l):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,f1(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:Ft(t.type,l),a.props=u,d=t.pendingProps,g=a.context,s=n.contextType,typeof s=="object"&&s!==null?s=It(s):(s=ct(n)?wr:Ke.current,s=ui(t,s));var m=n.getDerivedStateFromProps;(c=typeof m=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==d||g!==s)&&fm(t,a,r,s),Nn=!1,g=t.memoizedState,a.state=g,Ds(t,r,a,i);var v=t.memoizedState;l!==d||g!==v||ut.current||Nn?(typeof m=="function"&&(Ed(t,n,m,r),v=t.memoizedState),(u=Nn||dm(t,n,u,r,g,v,s)||!1)?(c||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,v,s),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,v,s)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=v),a.props=r,a.state=v,a.context=s,r=u):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),r=!1)}return Pd(e,t,n,r,o,i)}function Pd(e,t,n,r,i,o){B1(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return i&&am(t,n,!1),On(e,t,o);r=t.stateNode,V_.current=t;var l=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=di(t,e.child,null,o),t.child=di(t,null,l,o)):Ze(e,t,l,o),t.memoizedState=r.state,i&&am(t,n,!0),t.child}function V1(e){var t=e.stateNode;t.pendingContext?om(e,t.pendingContext,t.pendingContext!==t.context):t.context&&om(e,t.context,!1),ip(e,t.containerInfo)}function Sm(e,t,n,r,i){return ci(),Zf(i),t.flags|=256,Ze(e,t,n,r),t.child}var jd={dehydrated:null,treeContext:null,retryLane:0};function Md(e){return{baseLanes:e,cachePool:null,transitions:null}}function H1(e,t,n){var r=t.pendingProps,i=ve.current,o=!1,a=(t.flags&128)!==0,l;if((l=a)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),de(ve,i&1),e===null)return _d(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,o?(r=t.mode,o=t.child,a={mode:"hidden",children:a},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=a):o=Tl(a,r,0,null),e=xr(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Md(n),t.memoizedState=jd,e):fp(t,a));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return H_(e,t,a,r,l,i,n);if(o){o=r.fallback,a=t.mode,i=e.child,l=i.sibling;var s={mode:"hidden",children:r.children};return!(a&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=nr(i,s),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?o=nr(l,o):(o=xr(o,a,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,a=e.child.memoizedState,a=a===null?Md(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},o.memoizedState=a,o.childLanes=e.childLanes&~n,t.memoizedState=jd,r}return o=e.child,e=o.sibling,r=nr(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function fp(e,t){return t=Tl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function wa(e,t,n,r){return r!==null&&Zf(r),di(t,e.child,null,n),e=fp(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function H_(e,t,n,r,i,o,a){if(n)return t.flags&256?(t.flags&=-257,r=qu(Error(z(422))),wa(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=Tl({mode:"visible",children:r.children},i,0,null),o=xr(o,i,a,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&di(t,e.child,null,a),t.child.memoizedState=Md(a),t.memoizedState=jd,o);if(!(t.mode&1))return wa(e,t,a,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,o=Error(z(419)),r=qu(o,r,void 0),wa(e,t,a,r)}if(l=(a&e.childLanes)!==0,lt||l){if(r=Ae,r!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|a)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Tn(e,i),Ut(r,e,i,-1))}return yp(),r=qu(Error(z(421))),wa(e,t,a,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=nC.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,xt=Zn(i.nextSibling),wt=t,ge=!0,Bt=null,e!==null&&(Ot[Pt++]=xn,Ot[Pt++]=bn,Ot[Pt++]=Sr,xn=e.id,bn=e.overflow,Sr=t),t=fp(t,r.children),t.flags|=4096,t)}function _m(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Cd(e.return,t,n)}function Xu(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function U1(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(Ze(e,t,r.children,n),r=ve.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&_m(e,n,t);else if(e.tag===19)_m(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(de(ve,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Rs(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Xu(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Rs(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Xu(t,!0,n,null,o);break;case"together":Xu(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Qa(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function On(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Cr|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(z(153));if(t.child!==null){for(e=t.child,n=nr(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=nr(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function U_(e,t,n){switch(t.tag){case 3:V1(t),ci();break;case 5:v1(t);break;case 1:ct(t.type)&&Ps(t);break;case 4:ip(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;de(Is,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(de(ve,ve.current&1),t.flags|=128,null):n&t.child.childLanes?H1(e,t,n):(de(ve,ve.current&1),e=On(e,t,n),e!==null?e.sibling:null);de(ve,ve.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return U1(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),de(ve,ve.current),r)break;return null;case 22:case 23:return t.lanes=0,N1(e,t,n)}return On(e,t,n)}var W1,Id,G1,Y1;W1=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Id=function(){};G1=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,gr(on.current);var o=null;switch(n){case"input":i=ed(e,i),r=ed(e,r),o=[];break;case"select":i=xe({},i,{value:void 0}),r=xe({},r,{value:void 0}),o=[];break;case"textarea":i=rd(e,i),r=rd(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Ts)}od(n,r);var a;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(a in l)l.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(yo.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var s=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&s!==l&&(s!=null||l!=null))if(u==="style")if(l){for(a in l)!l.hasOwnProperty(a)||s&&s.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in s)s.hasOwnProperty(a)&&l[a]!==s[a]&&(n||(n={}),n[a]=s[a])}else n||(o||(o=[]),o.push(u,n)),n=s;else u==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,l=l?l.__html:void 0,s!=null&&l!==s&&(o=o||[]).push(u,s)):u==="children"?typeof s!="string"&&typeof s!="number"||(o=o||[]).push(u,""+s):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(yo.hasOwnProperty(u)?(s!=null&&u==="onScroll"&&fe("scroll",e),o||l===s||(o=[])):(o=o||[]).push(u,s))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};Y1=function(e,t,n,r){n!==r&&(t.flags|=4)};function zi(e,t){if(!ge)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function We(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function W_(e,t,n){var r=t.pendingProps;switch(Qf(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return We(t),null;case 1:return ct(t.type)&&Os(),We(t),null;case 3:return r=t.stateNode,fi(),he(ut),he(Ke),ap(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(xa(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Bt!==null&&(Nd(Bt),Bt=null))),Id(e,t),We(t),null;case 5:op(t);var i=gr(jo.current);if(n=t.type,e!==null&&t.stateNode!=null)G1(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(z(166));return We(t),null}if(e=gr(on.current),xa(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[tn]=t,r[Oo]=o,e=(t.mode&1)!==0,n){case"dialog":fe("cancel",r),fe("close",r);break;case"iframe":case"object":case"embed":fe("load",r);break;case"video":case"audio":for(i=0;i<Qi.length;i++)fe(Qi[i],r);break;case"source":fe("error",r);break;case"img":case"image":case"link":fe("error",r),fe("load",r);break;case"details":fe("toggle",r);break;case"input":Ih(r,o),fe("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},fe("invalid",r);break;case"textarea":Dh(r,o),fe("invalid",r)}od(n,o),i=null;for(var a in o)if(o.hasOwnProperty(a)){var l=o[a];a==="children"?typeof l=="string"?r.textContent!==l&&(o.suppressHydrationWarning!==!0&&ya(r.textContent,l,e),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(o.suppressHydrationWarning!==!0&&ya(r.textContent,l,e),i=["children",""+l]):yo.hasOwnProperty(a)&&l!=null&&a==="onScroll"&&fe("scroll",r)}switch(n){case"input":ca(r),$h(r,o,!0);break;case"textarea":ca(r),Rh(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Ts)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=bv(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[tn]=t,e[Oo]=r,W1(e,t,!1,!1),t.stateNode=e;e:{switch(a=ad(n,r),n){case"dialog":fe("cancel",e),fe("close",e),i=r;break;case"iframe":case"object":case"embed":fe("load",e),i=r;break;case"video":case"audio":for(i=0;i<Qi.length;i++)fe(Qi[i],e);i=r;break;case"source":fe("error",e),i=r;break;case"img":case"image":case"link":fe("error",e),fe("load",e),i=r;break;case"details":fe("toggle",e),i=r;break;case"input":Ih(e,r),i=ed(e,r),fe("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=xe({},r,{value:void 0}),fe("invalid",e);break;case"textarea":Dh(e,r),i=rd(e,r),fe("invalid",e);break;default:i=r}od(n,i),l=i;for(o in l)if(l.hasOwnProperty(o)){var s=l[o];o==="style"?_v(e,s):o==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&wv(e,s)):o==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&xo(e,s):typeof s=="number"&&xo(e,""+s):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(yo.hasOwnProperty(o)?s!=null&&o==="onScroll"&&fe("scroll",e):s!=null&&Af(e,o,s,a))}switch(n){case"input":ca(e),$h(e,r,!1);break;case"textarea":ca(e),Rh(e);break;case"option":r.value!=null&&e.setAttribute("value",""+ir(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?ei(e,!!r.multiple,o,!1):r.defaultValue!=null&&ei(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Ts)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return We(t),null;case 6:if(e&&t.stateNode!=null)Y1(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(z(166));if(n=gr(jo.current),gr(on.current),xa(t)){if(r=t.stateNode,n=t.memoizedProps,r[tn]=t,(o=r.nodeValue!==n)&&(e=wt,e!==null))switch(e.tag){case 3:ya(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ya(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[tn]=t,t.stateNode=r}return We(t),null;case 13:if(he(ve),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ge&&xt!==null&&t.mode&1&&!(t.flags&128))c1(),ci(),t.flags|=98560,o=!1;else if(o=xa(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(z(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(z(317));o[tn]=t}else ci(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;We(t),o=!1}else Bt!==null&&(Nd(Bt),Bt=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||ve.current&1?Ie===0&&(Ie=3):yp())),t.updateQueue!==null&&(t.flags|=4),We(t),null);case 4:return fi(),Id(e,t),e===null&&ko(t.stateNode.containerInfo),We(t),null;case 10:return tp(t.type._context),We(t),null;case 17:return ct(t.type)&&Os(),We(t),null;case 19:if(he(ve),o=t.memoizedState,o===null)return We(t),null;if(r=(t.flags&128)!==0,a=o.rendering,a===null)if(r)zi(o,!1);else{if(Ie!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=Rs(e),a!==null){for(t.flags|=128,zi(o,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,a=o.alternate,a===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=a.childLanes,o.lanes=a.lanes,o.child=a.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=a.memoizedProps,o.memoizedState=a.memoizedState,o.updateQueue=a.updateQueue,o.type=a.type,e=a.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return de(ve,ve.current&1|2),t.child}e=e.sibling}o.tail!==null&&Se()>hi&&(t.flags|=128,r=!0,zi(o,!1),t.lanes=4194304)}else{if(!r)if(e=Rs(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),zi(o,!0),o.tail===null&&o.tailMode==="hidden"&&!a.alternate&&!ge)return We(t),null}else 2*Se()-o.renderingStartTime>hi&&n!==1073741824&&(t.flags|=128,r=!0,zi(o,!1),t.lanes=4194304);o.isBackwards?(a.sibling=t.child,t.child=a):(n=o.last,n!==null?n.sibling=a:t.child=a,o.last=a)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Se(),t.sibling=null,n=ve.current,de(ve,r?n&1|2:n&1),t):(We(t),null);case 22:case 23:return vp(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?vt&1073741824&&(We(t),t.subtreeFlags&6&&(t.flags|=8192)):We(t),null;case 24:return null;case 25:return null}throw Error(z(156,t.tag))}function G_(e,t){switch(Qf(t),t.tag){case 1:return ct(t.type)&&Os(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return fi(),he(ut),he(Ke),ap(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return op(t),null;case 13:if(he(ve),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(z(340));ci()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return he(ve),null;case 4:return fi(),null;case 10:return tp(t.type._context),null;case 22:case 23:return vp(),null;case 24:return null;default:return null}}var Sa=!1,qe=!1,Y_=typeof WeakSet=="function"?WeakSet:Set,B=null;function Zr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){be(e,t,r)}else n.current=null}function $d(e,t,n){try{n()}catch(r){be(e,t,r)}}var Cm=!1;function q_(e,t){if(gd=Cs,e=Qv(),Xf(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var a=0,l=-1,s=-1,u=0,c=0,d=e,g=null;t:for(;;){for(var m;d!==n||i!==0&&d.nodeType!==3||(l=a+i),d!==o||r!==0&&d.nodeType!==3||(s=a+r),d.nodeType===3&&(a+=d.nodeValue.length),(m=d.firstChild)!==null;)g=d,d=m;for(;;){if(d===e)break t;if(g===n&&++u===i&&(l=a),g===o&&++c===r&&(s=a),(m=d.nextSibling)!==null)break;d=g,g=d.parentNode}d=m}n=l===-1||s===-1?null:{start:l,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(vd={focusedElem:e,selectionRange:n},Cs=!1,B=t;B!==null;)if(t=B,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,B=e;else for(;B!==null;){t=B;try{var v=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var x=v.memoizedProps,w=v.memoizedState,f=t.stateNode,p=f.getSnapshotBeforeUpdate(t.elementType===t.type?x:Ft(t.type,x),w);f.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var y=t.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(z(163))}}catch(b){be(t,t.return,b)}if(e=t.sibling,e!==null){e.return=t.return,B=e;break}B=t.return}return v=Cm,Cm=!1,v}function uo(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&$d(t,n,o)}i=i.next}while(i!==r)}}function El(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Dd(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function q1(e){var t=e.alternate;t!==null&&(e.alternate=null,q1(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[tn],delete t[Oo],delete t[bd],delete t[j_],delete t[M_])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function X1(e){return e.tag===5||e.tag===3||e.tag===4}function Em(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||X1(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Rd(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ts));else if(r!==4&&(e=e.child,e!==null))for(Rd(e,t,n),e=e.sibling;e!==null;)Rd(e,t,n),e=e.sibling}function Ad(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Ad(e,t,n),e=e.sibling;e!==null;)Ad(e,t,n),e=e.sibling}var ze=null,zt=!1;function Ln(e,t,n){for(n=n.child;n!==null;)K1(e,t,n),n=n.sibling}function K1(e,t,n){if(rn&&typeof rn.onCommitFiberUnmount=="function")try{rn.onCommitFiberUnmount(vl,n)}catch{}switch(n.tag){case 5:qe||Zr(n,t);case 6:var r=ze,i=zt;ze=null,Ln(e,t,n),ze=r,zt=i,ze!==null&&(zt?(e=ze,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ze.removeChild(n.stateNode));break;case 18:ze!==null&&(zt?(e=ze,n=n.stateNode,e.nodeType===8?Vu(e.parentNode,n):e.nodeType===1&&Vu(e,n),_o(e)):Vu(ze,n.stateNode));break;case 4:r=ze,i=zt,ze=n.stateNode.containerInfo,zt=!0,Ln(e,t,n),ze=r,zt=i;break;case 0:case 11:case 14:case 15:if(!qe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,a=o.destroy;o=o.tag,a!==void 0&&(o&2||o&4)&&$d(n,t,a),i=i.next}while(i!==r)}Ln(e,t,n);break;case 1:if(!qe&&(Zr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){be(n,t,l)}Ln(e,t,n);break;case 21:Ln(e,t,n);break;case 22:n.mode&1?(qe=(r=qe)||n.memoizedState!==null,Ln(e,t,n),qe=r):Ln(e,t,n);break;default:Ln(e,t,n)}}function km(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Y_),t.forEach(function(r){var i=rC.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function At(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,a=t,l=a;e:for(;l!==null;){switch(l.tag){case 5:ze=l.stateNode,zt=!1;break e;case 3:ze=l.stateNode.containerInfo,zt=!0;break e;case 4:ze=l.stateNode.containerInfo,zt=!0;break e}l=l.return}if(ze===null)throw Error(z(160));K1(o,a,i),ze=null,zt=!1;var s=i.alternate;s!==null&&(s.return=null),i.return=null}catch(u){be(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Q1(t,e),t=t.sibling}function Q1(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(At(t,e),Kt(e),r&4){try{uo(3,e,e.return),El(3,e)}catch(x){be(e,e.return,x)}try{uo(5,e,e.return)}catch(x){be(e,e.return,x)}}break;case 1:At(t,e),Kt(e),r&512&&n!==null&&Zr(n,n.return);break;case 5:if(At(t,e),Kt(e),r&512&&n!==null&&Zr(n,n.return),e.flags&32){var i=e.stateNode;try{xo(i,"")}catch(x){be(e,e.return,x)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,a=n!==null?n.memoizedProps:o,l=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{l==="input"&&o.type==="radio"&&o.name!=null&&yv(i,o),ad(l,a);var u=ad(l,o);for(a=0;a<s.length;a+=2){var c=s[a],d=s[a+1];c==="style"?_v(i,d):c==="dangerouslySetInnerHTML"?wv(i,d):c==="children"?xo(i,d):Af(i,c,d,u)}switch(l){case"input":td(i,o);break;case"textarea":xv(i,o);break;case"select":var g=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var m=o.value;m!=null?ei(i,!!o.multiple,m,!1):g!==!!o.multiple&&(o.defaultValue!=null?ei(i,!!o.multiple,o.defaultValue,!0):ei(i,!!o.multiple,o.multiple?[]:"",!1))}i[Oo]=o}catch(x){be(e,e.return,x)}}break;case 6:if(At(t,e),Kt(e),r&4){if(e.stateNode===null)throw Error(z(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(x){be(e,e.return,x)}}break;case 3:if(At(t,e),Kt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{_o(t.containerInfo)}catch(x){be(e,e.return,x)}break;case 4:At(t,e),Kt(e);break;case 13:At(t,e),Kt(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(mp=Se())),r&4&&km(e);break;case 22:if(c=n!==null&&n.memoizedState!==null,e.mode&1?(qe=(u=qe)||c,At(t,e),qe=u):At(t,e),Kt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!c&&e.mode&1)for(B=e,c=e.child;c!==null;){for(d=B=c;B!==null;){switch(g=B,m=g.child,g.tag){case 0:case 11:case 14:case 15:uo(4,g,g.return);break;case 1:Zr(g,g.return);var v=g.stateNode;if(typeof v.componentWillUnmount=="function"){r=g,n=g.return;try{t=r,v.props=t.memoizedProps,v.state=t.memoizedState,v.componentWillUnmount()}catch(x){be(r,n,x)}}break;case 5:Zr(g,g.return);break;case 22:if(g.memoizedState!==null){Om(d);continue}}m!==null?(m.return=g,B=m):Om(d)}c=c.sibling}e:for(c=null,d=e;;){if(d.tag===5){if(c===null){c=d;try{i=d.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(l=d.stateNode,s=d.memoizedProps.style,a=s!=null&&s.hasOwnProperty("display")?s.display:null,l.style.display=Sv("display",a))}catch(x){be(e,e.return,x)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(x){be(e,e.return,x)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:At(t,e),Kt(e),r&4&&km(e);break;case 21:break;default:At(t,e),Kt(e)}}function Kt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(X1(n)){var r=n;break e}n=n.return}throw Error(z(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(xo(i,""),r.flags&=-33);var o=Em(e);Ad(e,o,i);break;case 3:case 4:var a=r.stateNode.containerInfo,l=Em(e);Rd(e,l,a);break;default:throw Error(z(161))}}catch(s){be(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function X_(e,t,n){B=e,Z1(e)}function Z1(e,t,n){for(var r=(e.mode&1)!==0;B!==null;){var i=B,o=i.child;if(i.tag===22&&r){var a=i.memoizedState!==null||Sa;if(!a){var l=i.alternate,s=l!==null&&l.memoizedState!==null||qe;l=Sa;var u=qe;if(Sa=a,(qe=s)&&!u)for(B=i;B!==null;)a=B,s=a.child,a.tag===22&&a.memoizedState!==null?Pm(i):s!==null?(s.return=a,B=s):Pm(i);for(;o!==null;)B=o,Z1(o),o=o.sibling;B=i,Sa=l,qe=u}Tm(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,B=o):Tm(e)}}function Tm(e){for(;B!==null;){var t=B;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:qe||El(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!qe)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Ft(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&cm(t,o,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}cm(t,a,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&_o(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(z(163))}qe||t.flags&512&&Dd(t)}catch(g){be(t,t.return,g)}}if(t===e){B=null;break}if(n=t.sibling,n!==null){n.return=t.return,B=n;break}B=t.return}}function Om(e){for(;B!==null;){var t=B;if(t===e){B=null;break}var n=t.sibling;if(n!==null){n.return=t.return,B=n;break}B=t.return}}function Pm(e){for(;B!==null;){var t=B;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{El(4,t)}catch(s){be(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(s){be(t,i,s)}}var o=t.return;try{Dd(t)}catch(s){be(t,o,s)}break;case 5:var a=t.return;try{Dd(t)}catch(s){be(t,a,s)}}}catch(s){be(t,t.return,s)}if(t===e){B=null;break}var l=t.sibling;if(l!==null){l.return=t.return,B=l;break}B=t.return}}var K_=Math.ceil,Fs=$n.ReactCurrentDispatcher,pp=$n.ReactCurrentOwner,Mt=$n.ReactCurrentBatchConfig,ne=0,Ae=null,Ee=null,Be=0,vt=0,Jr=lr(0),Ie=0,Do=null,Cr=0,kl=0,hp=0,co=null,st=null,mp=0,hi=1/0,pn=null,zs=!1,Ld=null,er=null,_a=!1,Wn=null,Ns=0,fo=0,Fd=null,Za=-1,Ja=0;function et(){return ne&6?Se():Za!==-1?Za:Za=Se()}function tr(e){return e.mode&1?ne&2&&Be!==0?Be&-Be:$_.transition!==null?(Ja===0&&(Ja=Rv()),Ja):(e=le,e!==0||(e=window.event,e=e===void 0?16:Vv(e.type)),e):1}function Ut(e,t,n,r){if(50<fo)throw fo=0,Fd=null,Error(z(185));qo(e,n,r),(!(ne&2)||e!==Ae)&&(e===Ae&&(!(ne&2)&&(kl|=n),Ie===4&&Vn(e,Be)),dt(e,r),n===1&&ne===0&&!(t.mode&1)&&(hi=Se()+500,Sl&&ur()))}function dt(e,t){var n=e.callbackNode;$2(e,t);var r=_s(e,e===Ae?Be:0);if(r===0)n!==null&&Fh(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Fh(n),t===1)e.tag===0?I_(jm.bind(null,e)):s1(jm.bind(null,e)),O_(function(){!(ne&6)&&ur()}),n=null;else{switch(Av(r)){case 1:n=Bf;break;case 4:n=$v;break;case 16:n=Ss;break;case 536870912:n=Dv;break;default:n=Ss}n=ay(n,J1.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function J1(e,t){if(Za=-1,Ja=0,ne&6)throw Error(z(327));var n=e.callbackNode;if(oi()&&e.callbackNode!==n)return null;var r=_s(e,e===Ae?Be:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Bs(e,r);else{t=r;var i=ne;ne|=2;var o=ty();(Ae!==e||Be!==t)&&(pn=null,hi=Se()+500,yr(e,t));do try{J_();break}catch(l){ey(e,l)}while(1);ep(),Fs.current=o,ne=i,Ee!==null?t=0:(Ae=null,Be=0,t=Ie)}if(t!==0){if(t===2&&(i=dd(e),i!==0&&(r=i,t=zd(e,i))),t===1)throw n=Do,yr(e,0),Vn(e,r),dt(e,Se()),n;if(t===6)Vn(e,r);else{if(i=e.current.alternate,!(r&30)&&!Q_(i)&&(t=Bs(e,r),t===2&&(o=dd(e),o!==0&&(r=o,t=zd(e,o))),t===1))throw n=Do,yr(e,0),Vn(e,r),dt(e,Se()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(z(345));case 2:dr(e,st,pn);break;case 3:if(Vn(e,r),(r&130023424)===r&&(t=mp+500-Se(),10<t)){if(_s(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){et(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=xd(dr.bind(null,e,st,pn),t);break}dr(e,st,pn);break;case 4:if(Vn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var a=31-Ht(r);o=1<<a,a=t[a],a>i&&(i=a),r&=~o}if(r=i,r=Se()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*K_(r/1960))-r,10<r){e.timeoutHandle=xd(dr.bind(null,e,st,pn),r);break}dr(e,st,pn);break;case 5:dr(e,st,pn);break;default:throw Error(z(329))}}}return dt(e,Se()),e.callbackNode===n?J1.bind(null,e):null}function zd(e,t){var n=co;return e.current.memoizedState.isDehydrated&&(yr(e,t).flags|=256),e=Bs(e,t),e!==2&&(t=st,st=n,t!==null&&Nd(t)),e}function Nd(e){st===null?st=e:st.push.apply(st,e)}function Q_(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!Yt(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Vn(e,t){for(t&=~hp,t&=~kl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ht(t),r=1<<n;e[n]=-1,t&=~r}}function jm(e){if(ne&6)throw Error(z(327));oi();var t=_s(e,0);if(!(t&1))return dt(e,Se()),null;var n=Bs(e,t);if(e.tag!==0&&n===2){var r=dd(e);r!==0&&(t=r,n=zd(e,r))}if(n===1)throw n=Do,yr(e,0),Vn(e,t),dt(e,Se()),n;if(n===6)throw Error(z(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,dr(e,st,pn),dt(e,Se()),null}function gp(e,t){var n=ne;ne|=1;try{return e(t)}finally{ne=n,ne===0&&(hi=Se()+500,Sl&&ur())}}function Er(e){Wn!==null&&Wn.tag===0&&!(ne&6)&&oi();var t=ne;ne|=1;var n=Mt.transition,r=le;try{if(Mt.transition=null,le=1,e)return e()}finally{le=r,Mt.transition=n,ne=t,!(ne&6)&&ur()}}function vp(){vt=Jr.current,he(Jr)}function yr(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,T_(n)),Ee!==null)for(n=Ee.return;n!==null;){var r=n;switch(Qf(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Os();break;case 3:fi(),he(ut),he(Ke),ap();break;case 5:op(r);break;case 4:fi();break;case 13:he(ve);break;case 19:he(ve);break;case 10:tp(r.type._context);break;case 22:case 23:vp()}n=n.return}if(Ae=e,Ee=e=nr(e.current,null),Be=vt=t,Ie=0,Do=null,hp=kl=Cr=0,st=co=null,mr!==null){for(t=0;t<mr.length;t++)if(n=mr[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var a=o.next;o.next=i,r.next=a}n.pending=r}mr=null}return e}function ey(e,t){do{var n=Ee;try{if(ep(),Xa.current=Ls,As){for(var r=ye.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}As=!1}if(_r=0,Re=je=ye=null,lo=!1,Mo=0,pp.current=null,n===null||n.return===null){Ie=1,Do=t,Ee=null;break}e:{var o=e,a=n.return,l=n,s=t;if(t=Be,l.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var u=s,c=l,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var g=c.alternate;g?(c.updateQueue=g.updateQueue,c.memoizedState=g.memoizedState,c.lanes=g.lanes):(c.updateQueue=null,c.memoizedState=null)}var m=vm(a);if(m!==null){m.flags&=-257,ym(m,a,l,o,t),m.mode&1&&gm(o,u,t),t=m,s=u;var v=t.updateQueue;if(v===null){var x=new Set;x.add(s),t.updateQueue=x}else v.add(s);break e}else{if(!(t&1)){gm(o,u,t),yp();break e}s=Error(z(426))}}else if(ge&&l.mode&1){var w=vm(a);if(w!==null){!(w.flags&65536)&&(w.flags|=256),ym(w,a,l,o,t),Zf(pi(s,l));break e}}o=s=pi(s,l),Ie!==4&&(Ie=2),co===null?co=[o]:co.push(o),o=a;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var f=L1(o,s,t);um(o,f);break e;case 1:l=s;var p=o.type,y=o.stateNode;if(!(o.flags&128)&&(typeof p.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(er===null||!er.has(y)))){o.flags|=65536,t&=-t,o.lanes|=t;var b=F1(o,l,t);um(o,b);break e}}o=o.return}while(o!==null)}ry(n)}catch(E){t=E,Ee===n&&n!==null&&(Ee=n=n.return);continue}break}while(1)}function ty(){var e=Fs.current;return Fs.current=Ls,e===null?Ls:e}function yp(){(Ie===0||Ie===3||Ie===2)&&(Ie=4),Ae===null||!(Cr&268435455)&&!(kl&268435455)||Vn(Ae,Be)}function Bs(e,t){var n=ne;ne|=2;var r=ty();(Ae!==e||Be!==t)&&(pn=null,yr(e,t));do try{Z_();break}catch(i){ey(e,i)}while(1);if(ep(),ne=n,Fs.current=r,Ee!==null)throw Error(z(261));return Ae=null,Be=0,Ie}function Z_(){for(;Ee!==null;)ny(Ee)}function J_(){for(;Ee!==null&&!C2();)ny(Ee)}function ny(e){var t=oy(e.alternate,e,vt);e.memoizedProps=e.pendingProps,t===null?ry(e):Ee=t,pp.current=null}function ry(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=G_(n,t),n!==null){n.flags&=32767,Ee=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ie=6,Ee=null;return}}else if(n=W_(n,t,vt),n!==null){Ee=n;return}if(t=t.sibling,t!==null){Ee=t;return}Ee=t=e}while(t!==null);Ie===0&&(Ie=5)}function dr(e,t,n){var r=le,i=Mt.transition;try{Mt.transition=null,le=1,eC(e,t,n,r)}finally{Mt.transition=i,le=r}return null}function eC(e,t,n,r){do oi();while(Wn!==null);if(ne&6)throw Error(z(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(z(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(D2(e,o),e===Ae&&(Ee=Ae=null,Be=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||_a||(_a=!0,ay(Ss,function(){return oi(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Mt.transition,Mt.transition=null;var a=le;le=1;var l=ne;ne|=4,pp.current=null,q_(e,n),Q1(n,e),b_(vd),Cs=!!gd,vd=gd=null,e.current=n,X_(n),E2(),ne=l,le=a,Mt.transition=o}else e.current=n;if(_a&&(_a=!1,Wn=e,Ns=i),o=e.pendingLanes,o===0&&(er=null),O2(n.stateNode),dt(e,Se()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(zs)throw zs=!1,e=Ld,Ld=null,e;return Ns&1&&e.tag!==0&&oi(),o=e.pendingLanes,o&1?e===Fd?fo++:(fo=0,Fd=e):fo=0,ur(),null}function oi(){if(Wn!==null){var e=Av(Ns),t=Mt.transition,n=le;try{if(Mt.transition=null,le=16>e?16:e,Wn===null)var r=!1;else{if(e=Wn,Wn=null,Ns=0,ne&6)throw Error(z(331));var i=ne;for(ne|=4,B=e.current;B!==null;){var o=B,a=o.child;if(B.flags&16){var l=o.deletions;if(l!==null){for(var s=0;s<l.length;s++){var u=l[s];for(B=u;B!==null;){var c=B;switch(c.tag){case 0:case 11:case 15:uo(8,c,o)}var d=c.child;if(d!==null)d.return=c,B=d;else for(;B!==null;){c=B;var g=c.sibling,m=c.return;if(q1(c),c===u){B=null;break}if(g!==null){g.return=m,B=g;break}B=m}}}var v=o.alternate;if(v!==null){var x=v.child;if(x!==null){v.child=null;do{var w=x.sibling;x.sibling=null,x=w}while(x!==null)}}B=o}}if(o.subtreeFlags&2064&&a!==null)a.return=o,B=a;else e:for(;B!==null;){if(o=B,o.flags&2048)switch(o.tag){case 0:case 11:case 15:uo(9,o,o.return)}var f=o.sibling;if(f!==null){f.return=o.return,B=f;break e}B=o.return}}var p=e.current;for(B=p;B!==null;){a=B;var y=a.child;if(a.subtreeFlags&2064&&y!==null)y.return=a,B=y;else e:for(a=p;B!==null;){if(l=B,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:El(9,l)}}catch(E){be(l,l.return,E)}if(l===a){B=null;break e}var b=l.sibling;if(b!==null){b.return=l.return,B=b;break e}B=l.return}}if(ne=i,ur(),rn&&typeof rn.onPostCommitFiberRoot=="function")try{rn.onPostCommitFiberRoot(vl,e)}catch{}r=!0}return r}finally{le=n,Mt.transition=t}}return!1}function Mm(e,t,n){t=pi(n,t),t=L1(e,t,1),e=Jn(e,t,1),t=et(),e!==null&&(qo(e,1,t),dt(e,t))}function be(e,t,n){if(e.tag===3)Mm(e,e,n);else for(;t!==null;){if(t.tag===3){Mm(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(er===null||!er.has(r))){e=pi(n,e),e=F1(t,e,1),t=Jn(t,e,1),e=et(),t!==null&&(qo(t,1,e),dt(t,e));break}}t=t.return}}function tC(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=et(),e.pingedLanes|=e.suspendedLanes&n,Ae===e&&(Be&n)===n&&(Ie===4||Ie===3&&(Be&130023424)===Be&&500>Se()-mp?yr(e,0):hp|=n),dt(e,t)}function iy(e,t){t===0&&(e.mode&1?(t=pa,pa<<=1,!(pa&130023424)&&(pa=4194304)):t=1);var n=et();e=Tn(e,t),e!==null&&(qo(e,t,n),dt(e,n))}function nC(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),iy(e,n)}function rC(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(z(314))}r!==null&&r.delete(t),iy(e,n)}var oy;oy=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||ut.current)lt=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return lt=!1,U_(e,t,n);lt=!!(e.flags&131072)}else lt=!1,ge&&t.flags&1048576&&l1(t,Ms,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Qa(e,t),e=t.pendingProps;var i=ui(t,Ke.current);ii(t,n),i=lp(null,t,r,e,i,n);var o=up();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ct(r)?(o=!0,Ps(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,rp(t),i.updater=_l,t.stateNode=i,i._reactInternals=t,kd(t,r,e,n),t=Pd(null,t,r,!0,o,n)):(t.tag=0,ge&&o&&Kf(t),Ze(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Qa(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=oC(r),e=Ft(r,e),i){case 0:t=Od(null,t,r,e,n);break e;case 1:t=wm(null,t,r,e,n);break e;case 11:t=xm(null,t,r,e,n);break e;case 14:t=bm(null,t,r,Ft(r.type,e),n);break e}throw Error(z(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ft(r,i),Od(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ft(r,i),wm(e,t,r,i,n);case 3:e:{if(V1(t),e===null)throw Error(z(387));r=t.pendingProps,o=t.memoizedState,i=o.element,f1(e,t),Ds(t,r,null,n);var a=t.memoizedState;if(r=a.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=pi(Error(z(423)),t),t=Sm(e,t,r,n,i);break e}else if(r!==i){i=pi(Error(z(424)),t),t=Sm(e,t,r,n,i);break e}else for(xt=Zn(t.stateNode.containerInfo.firstChild),wt=t,ge=!0,Bt=null,n=g1(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ci(),r===i){t=On(e,t,n);break e}Ze(e,t,r,n)}t=t.child}return t;case 5:return v1(t),e===null&&_d(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,a=i.children,yd(r,i)?a=null:o!==null&&yd(r,o)&&(t.flags|=32),B1(e,t),Ze(e,t,a,n),t.child;case 6:return e===null&&_d(t),null;case 13:return H1(e,t,n);case 4:return ip(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=di(t,null,r,n):Ze(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ft(r,i),xm(e,t,r,i,n);case 7:return Ze(e,t,t.pendingProps,n),t.child;case 8:return Ze(e,t,t.pendingProps.children,n),t.child;case 12:return Ze(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,a=i.value,de(Is,r._currentValue),r._currentValue=a,o!==null)if(Yt(o.value,a)){if(o.children===i.children&&!ut.current){t=On(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var l=o.dependencies;if(l!==null){a=o.child;for(var s=l.firstContext;s!==null;){if(s.context===r){if(o.tag===1){s=wn(-1,n&-n),s.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?s.next=s:(s.next=c.next,c.next=s),u.pending=s}}o.lanes|=n,s=o.alternate,s!==null&&(s.lanes|=n),Cd(o.return,n,t),l.lanes|=n;break}s=s.next}}else if(o.tag===10)a=o.type===t.type?null:o.child;else if(o.tag===18){if(a=o.return,a===null)throw Error(z(341));a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),Cd(a,n,t),a=o.sibling}else a=o.child;if(a!==null)a.return=o;else for(a=o;a!==null;){if(a===t){a=null;break}if(o=a.sibling,o!==null){o.return=a.return,a=o;break}a=a.return}o=a}Ze(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,ii(t,n),i=It(i),r=r(i),t.flags|=1,Ze(e,t,r,n),t.child;case 14:return r=t.type,i=Ft(r,t.pendingProps),i=Ft(r.type,i),bm(e,t,r,i,n);case 15:return z1(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ft(r,i),Qa(e,t),t.tag=1,ct(r)?(e=!0,Ps(t)):e=!1,ii(t,n),h1(t,r,i),kd(t,r,i,n),Pd(null,t,r,!0,e,n);case 19:return U1(e,t,n);case 22:return N1(e,t,n)}throw Error(z(156,t.tag))};function ay(e,t){return Iv(e,t)}function iC(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function jt(e,t,n,r){return new iC(e,t,n,r)}function xp(e){return e=e.prototype,!(!e||!e.isReactComponent)}function oC(e){if(typeof e=="function")return xp(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ff)return 11;if(e===zf)return 14}return 2}function nr(e,t){var n=e.alternate;return n===null?(n=jt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function es(e,t,n,r,i,o){var a=2;if(r=e,typeof e=="function")xp(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case Hr:return xr(n.children,i,o,t);case Lf:a=8,i|=8;break;case Kc:return e=jt(12,n,t,i|2),e.elementType=Kc,e.lanes=o,e;case Qc:return e=jt(13,n,t,i),e.elementType=Qc,e.lanes=o,e;case Zc:return e=jt(19,n,t,i),e.elementType=Zc,e.lanes=o,e;case mv:return Tl(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case pv:a=10;break e;case hv:a=9;break e;case Ff:a=11;break e;case zf:a=14;break e;case zn:a=16,r=null;break e}throw Error(z(130,e==null?e:typeof e,""))}return t=jt(a,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function xr(e,t,n,r){return e=jt(7,e,r,t),e.lanes=n,e}function Tl(e,t,n,r){return e=jt(22,e,r,t),e.elementType=mv,e.lanes=n,e.stateNode={isHidden:!1},e}function Ku(e,t,n){return e=jt(6,e,null,t),e.lanes=n,e}function Qu(e,t,n){return t=jt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function aC(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Mu(0),this.expirationTimes=Mu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Mu(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function bp(e,t,n,r,i,o,a,l,s){return e=new aC(e,t,n,l,s),t===1?(t=1,o===!0&&(t|=8)):t=0,o=jt(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},rp(o),e}function sC(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Vr,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function sy(e){if(!e)return or;e=e._reactInternals;e:{if(Ir(e)!==e||e.tag!==1)throw Error(z(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ct(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(z(171))}if(e.tag===1){var n=e.type;if(ct(n))return a1(e,n,t)}return t}function ly(e,t,n,r,i,o,a,l,s){return e=bp(n,r,!0,e,i,o,a,l,s),e.context=sy(null),n=e.current,r=et(),i=tr(n),o=wn(r,i),o.callback=t??null,Jn(n,o,i),e.current.lanes=i,qo(e,i,r),dt(e,r),e}function Ol(e,t,n,r){var i=t.current,o=et(),a=tr(i);return n=sy(n),t.context===null?t.context=n:t.pendingContext=n,t=wn(o,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Jn(i,t,a),e!==null&&(Ut(e,i,a,o),qa(e,i,a)),a}function Vs(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Im(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function wp(e,t){Im(e,t),(e=e.alternate)&&Im(e,t)}function lC(){return null}var uy=typeof reportError=="function"?reportError:function(e){console.error(e)};function Sp(e){this._internalRoot=e}Pl.prototype.render=Sp.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(z(409));Ol(e,t,null,null)};Pl.prototype.unmount=Sp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Er(function(){Ol(null,e,null,null)}),t[kn]=null}};function Pl(e){this._internalRoot=e}Pl.prototype.unstable_scheduleHydration=function(e){if(e){var t=zv();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Bn.length&&t!==0&&t<Bn[n].priority;n++);Bn.splice(n,0,e),n===0&&Bv(e)}};function _p(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function jl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function $m(){}function uC(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=Vs(a);o.call(u)}}var a=ly(t,r,e,0,null,!1,!1,"",$m);return e._reactRootContainer=a,e[kn]=a.current,ko(e.nodeType===8?e.parentNode:e),Er(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=Vs(s);l.call(u)}}var s=bp(e,0,!1,null,null,!1,!1,"",$m);return e._reactRootContainer=s,e[kn]=s.current,ko(e.nodeType===8?e.parentNode:e),Er(function(){Ol(t,s,n,r)}),s}function Ml(e,t,n,r,i){var o=n._reactRootContainer;if(o){var a=o;if(typeof i=="function"){var l=i;i=function(){var s=Vs(a);l.call(s)}}Ol(t,a,e,i)}else a=uC(n,t,e,i,r);return Vs(a)}Lv=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Ki(t.pendingLanes);n!==0&&(Vf(t,n|1),dt(t,Se()),!(ne&6)&&(hi=Se()+500,ur()))}break;case 13:Er(function(){var r=Tn(e,1);if(r!==null){var i=et();Ut(r,e,1,i)}}),wp(e,1)}};Hf=function(e){if(e.tag===13){var t=Tn(e,134217728);if(t!==null){var n=et();Ut(t,e,134217728,n)}wp(e,134217728)}};Fv=function(e){if(e.tag===13){var t=tr(e),n=Tn(e,t);if(n!==null){var r=et();Ut(n,e,t,r)}wp(e,t)}};zv=function(){return le};Nv=function(e,t){var n=le;try{return le=e,t()}finally{le=n}};ld=function(e,t,n){switch(t){case"input":if(td(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=wl(r);if(!i)throw Error(z(90));vv(r),td(r,i)}}}break;case"textarea":xv(e,n);break;case"select":t=n.value,t!=null&&ei(e,!!n.multiple,t,!1)}};kv=gp;Tv=Er;var cC={usingClientEntryPoint:!1,Events:[Ko,Yr,wl,Cv,Ev,gp]},Ni={findFiberByHostInstance:hr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},dC={bundleType:Ni.bundleType,version:Ni.version,rendererPackageName:Ni.rendererPackageName,rendererConfig:Ni.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:$n.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=jv(e),e===null?null:e.stateNode},findFiberByHostInstance:Ni.findFiberByHostInstance||lC,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ca=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ca.isDisabled&&Ca.supportsFiber)try{vl=Ca.inject(dC),rn=Ca}catch{}}Et.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=cC;Et.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!_p(t))throw Error(z(200));return sC(e,t,null,n)};Et.createRoot=function(e,t){if(!_p(e))throw Error(z(299));var n=!1,r="",i=uy;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=bp(e,1,!1,null,null,n,!1,r,i),e[kn]=t.current,ko(e.nodeType===8?e.parentNode:e),new Sp(t)};Et.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(z(188)):(e=Object.keys(e).join(","),Error(z(268,e)));return e=jv(t),e=e===null?null:e.stateNode,e};Et.flushSync=function(e){return Er(e)};Et.hydrate=function(e,t,n){if(!jl(t))throw Error(z(200));return Ml(null,e,t,!0,n)};Et.hydrateRoot=function(e,t,n){if(!_p(e))throw Error(z(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",a=uy;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=ly(t,null,e,1,n??null,i,!1,o,a),e[kn]=t.current,ko(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Pl(t)};Et.render=function(e,t,n){if(!jl(t))throw Error(z(200));return Ml(null,e,t,!1,n)};Et.unmountComponentAtNode=function(e){if(!jl(e))throw Error(z(40));return e._reactRootContainer?(Er(function(){Ml(null,null,e,!1,function(){e._reactRootContainer=null,e[kn]=null})}),!0):!1};Et.unstable_batchedUpdates=gp;Et.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!jl(n))throw Error(z(200));if(e==null||e._reactInternals===void 0)throw Error(z(38));return Ml(e,t,n,!1,r)};Et.version="18.2.0-next-9e3b772b8-20220608";function cy(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(cy)}catch(e){console.error(e)}}cy(),lv.exports=Et;var Cp=lv.exports,Dm=Cp;qc.createRoot=Dm.createRoot,qc.hydrateRoot=Dm.hydrateRoot;var Xe=function(){return Xe=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},Xe.apply(this,arguments)};function Ro(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,o;r<i;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))}function fC(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var pC=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|popover|popoverTarget|popoverTargetAction|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,hC=fC(function(e){return pC.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),pe="-ms-",po="-moz-",oe="-webkit-",dy="comm",Il="rule",Ep="decl",mC="@import",gC="@namespace",fy="@keyframes",vC="@layer",py=Math.abs,kp=String.fromCharCode,Bd=Object.assign;function yC(e,t){return Me(e,0)^45?(((t<<2^Me(e,0))<<2^Me(e,1))<<2^Me(e,2))<<2^Me(e,3):0}function hy(e){return e.trim()}function hn(e,t){return(e=t.exec(e))?e[0]:e}function X(e,t,n){return e.replace(t,n)}function ts(e,t,n){return e.indexOf(t,n)}function Me(e,t){return e.charCodeAt(t)|0}function kr(e,t,n){return e.slice(t,n)}function Nt(e){return e.length}function my(e){return e.length}function Zi(e,t){return t.push(e),e}function xC(e,t){return e.map(t).join("")}function Rm(e,t){return e.filter(function(n){return!hn(n,t)})}var $l=1,mi=1,gy=0,Dt=0,_e=0,Ti="";function Dl(e,t,n,r,i,o,a,l){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:$l,column:mi,length:a,return:"",siblings:l}}function Fn(e,t){return Bd(Dl("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function Dr(e){for(;e.root;)e=Fn(e.root,{children:[e]});Zi(e,e.siblings)}function bC(){return _e}function wC(){return _e=Dt>0?Me(Ti,--Dt):0,mi--,_e===10&&(mi=1,$l--),_e}function Wt(){return _e=Dt<gy?Me(Ti,Dt++):0,mi++,_e===10&&(mi=1,$l++),_e}function Gn(){return Me(Ti,Dt)}function ns(){return Dt}function Rl(e,t){return kr(Ti,e,t)}function Ao(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function SC(e){return $l=mi=1,gy=Nt(Ti=e),Dt=0,[]}function _C(e){return Ti="",e}function Zu(e){return hy(Rl(Dt-1,Vd(e===91?e+2:e===40?e+1:e)))}function CC(e){for(;(_e=Gn())&&_e<33;)Wt();return Ao(e)>2||Ao(_e)>3?"":" "}function EC(e,t){for(;--t&&Wt()&&!(_e<48||_e>102||_e>57&&_e<65||_e>70&&_e<97););return Rl(e,ns()+(t<6&&Gn()==32&&Wt()==32))}function Vd(e){for(;Wt();)switch(_e){case e:return Dt;case 34:case 39:e!==34&&e!==39&&Vd(_e);break;case 40:e===41&&Vd(e);break;case 92:Wt();break}return Dt}function kC(e,t){for(;Wt()&&e+_e!==47+10;)if(e+_e===42+42&&Gn()===47)break;return"/*"+Rl(t,Dt-1)+"*"+kp(e===47?e:Wt())}function TC(e){for(;!Ao(Gn());)Wt();return Rl(e,Dt)}function OC(e){return _C(rs("",null,null,null,[""],e=SC(e),0,[0],e))}function rs(e,t,n,r,i,o,a,l,s){for(var u=0,c=0,d=a,g=0,m=0,v=0,x=1,w=1,f=1,p=0,y="",b=i,E=o,k=r,_=y;w;)switch(v=p,p=Wt()){case 40:if(v!=108&&Me(_,d-1)==58){ts(_+=X(Zu(p),"&","&\f"),"&\f",py(u?l[u-1]:0))!=-1&&(f=-1);break}case 34:case 39:case 91:_+=Zu(p);break;case 9:case 10:case 13:case 32:_+=CC(v);break;case 92:_+=EC(ns()-1,7);continue;case 47:switch(Gn()){case 42:case 47:Zi(PC(kC(Wt(),ns()),t,n,s),s),(Ao(v||1)==5||Ao(Gn()||1)==5)&&Nt(_)&&kr(_,-1,void 0)!==" "&&(_+=" ");break;default:_+="/"}break;case 123*x:l[u++]=Nt(_)*f;case 125*x:case 59:case 0:switch(p){case 0:case 125:w=0;case 59+c:f==-1&&(_=X(_,/\f/g,"")),m>0&&(Nt(_)-d||x===0&&v===47)&&Zi(m>32?Lm(_+";",r,n,d-1,s):Lm(X(_," ","")+";",r,n,d-2,s),s);break;case 59:_+=";";default:if(Zi(k=Am(_,t,n,u,c,i,l,y,b=[],E=[],d,o),o),p===123)if(c===0)rs(_,t,k,k,b,o,d,l,E);else{switch(g){case 99:if(Me(_,3)===110)break;case 108:if(Me(_,2)===97)break;default:c=0;case 100:case 109:case 115:}c?rs(e,k,k,r&&Zi(Am(e,k,k,0,0,i,l,y,i,b=[],d,E),E),i,E,d,l,r?b:E):rs(_,k,k,k,[""],E,0,l,E)}}u=c=m=0,x=f=1,y=_="",d=a;break;case 58:d=1+Nt(_),m=v;default:if(x<1){if(p==123)--x;else if(p==125&&x++==0&&wC()==125)continue}switch(_+=kp(p),p*x){case 38:f=c>0?1:(_+="\f",-1);break;case 44:l[u++]=(Nt(_)-1)*f,f=1;break;case 64:Gn()===45&&(_+=Zu(Wt())),g=Gn(),c=d=Nt(y=_+=TC(ns())),p++;break;case 45:v===45&&Nt(_)==2&&(x=0)}}return o}function Am(e,t,n,r,i,o,a,l,s,u,c,d){for(var g=i-1,m=i===0?o:[""],v=my(m),x=0,w=0,f=0;x<r;++x)for(var p=0,y=kr(e,g+1,g=py(w=a[x])),b=e;p<v;++p)(b=hy(w>0?m[p]+" "+y:X(y,/&\f/g,m[p])))&&(s[f++]=b);return Dl(e,t,n,i===0?Il:l,s,u,c,d)}function PC(e,t,n,r){return Dl(e,t,n,dy,kp(bC()),kr(e,2,-2),0,r)}function Lm(e,t,n,r,i){return Dl(e,t,n,Ep,kr(e,0,r),kr(e,r+1,-1),r,i)}function vy(e,t,n){switch(yC(e,t)){case 5103:return oe+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return oe+e+e;case 4855:return oe+e.replace("add","source-over").replace("substract","source-out").replace("intersect","source-in").replace("exclude","xor")+e;case 4789:return po+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return oe+e+po+e+pe+e+e;case 5936:switch(Me(e,t+11)){case 114:return oe+e+pe+X(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return oe+e+pe+X(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return oe+e+pe+X(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return oe+e+pe+e+e;case 6165:return oe+e+pe+"flex-"+e+e;case 5187:return oe+e+X(e,/(\w+).+(:[^]+)/,oe+"box-$1$2"+pe+"flex-$1$2")+e;case 5443:return oe+e+pe+"flex-item-"+X(e,/flex-|-self/g,"")+(hn(e,/flex-|baseline/)?"":pe+"grid-row-"+X(e,/flex-|-self/g,""))+e;case 4675:return oe+e+pe+"flex-line-pack"+X(e,/align-content|flex-|-self/g,"")+e;case 5548:return oe+e+pe+X(e,"shrink","negative")+e;case 5292:return oe+e+pe+X(e,"basis","preferred-size")+e;case 6060:return oe+"box-"+X(e,"-grow","")+oe+e+pe+X(e,"grow","positive")+e;case 4554:return oe+X(e,/([^-])(transform)/g,"$1"+oe+"$2")+e;case 6187:return X(X(X(e,/(zoom-|grab)/,oe+"$1"),/(image-set)/,oe+"$1"),e,"")+e;case 5495:case 3959:return X(e,/(image-set\([^]*)/,oe+"$1$`$1");case 4968:return X(X(e,/(.+:)(flex-)?(.*)/,oe+"box-pack:$3"+pe+"flex-pack:$3"),/space-between/,"justify")+oe+e+e;case 4200:if(!hn(e,/flex-|baseline/))return pe+"grid-column-align"+kr(e,t)+e;break;case 2592:case 3360:return pe+X(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,i){return t=i,hn(r.props,/grid-\w+-end/)})?~ts(e+(n=n[t].value),"span",0)?e:pe+X(e,"-start","")+e+pe+"grid-row-span:"+(~ts(n,"span",0)?hn(n,/\d+/):+hn(n,/\d+/)-+hn(e,/\d+/))+";":pe+X(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return hn(r.props,/grid-\w+-start/)})?e:pe+X(X(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return X(e,/(.+)-inline(.+)/,oe+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Nt(e)-1-t>6)switch(Me(e,t+1)){case 109:if(Me(e,t+4)!==45)break;case 102:return X(e,/(.+:)(.+)-([^]+)/,"$1"+oe+"$2-$3$1"+po+(Me(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~ts(e,"stretch",0)?vy(X(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return X(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,o,a,l,s,u){return pe+i+":"+o+u+(a?pe+i+"-span:"+(l?s:+s-+o)+u:"")+e});case 4949:if(Me(e,t+6)===121)return X(e,":",":"+oe)+e;break;case 6444:switch(Me(e,Me(e,14)===45?18:11)){case 120:return X(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+oe+(Me(e,14)===45?"inline-":"")+"box$3$1"+oe+"$2$3$1"+pe+"$2box$3")+e;case 100:return X(e,":",":"+pe)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return X(e,"scroll-","scroll-snap-")+e}return e}function Hs(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function jC(e,t,n,r){switch(e.type){case vC:if(e.children.length)break;case mC:case gC:case Ep:return e.return=e.return||e.value;case dy:return"";case fy:return e.return=e.value+"{"+Hs(e.children,r)+"}";case Il:if(!Nt(e.value=e.props.join(",")))return""}return Nt(n=Hs(e.children,r))?e.return=e.value+"{"+n+"}":""}function MC(e){var t=my(e);return function(n,r,i,o){for(var a="",l=0;l<t;l++)a+=e[l](n,r,i,o)||"";return a}}function IC(e){return function(t){t.root||(t=t.return)&&e(t)}}function $C(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case Ep:e.return=vy(e.value,e.length,n);return;case fy:return Hs([Fn(e,{value:X(e.value,"@","@"+oe)})],r);case Il:if(e.length)return xC(n=e.props,function(i){switch(hn(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Dr(Fn(e,{props:[X(i,/:(read-\w+)/,":"+po+"$1")]})),Dr(Fn(e,{props:[i]})),Bd(e,{props:Rm(n,r)});break;case"::placeholder":Dr(Fn(e,{props:[X(i,/:(plac\w+)/,":"+oe+"input-$1")]})),Dr(Fn(e,{props:[X(i,/:(plac\w+)/,":"+po+"$1")]})),Dr(Fn(e,{props:[X(i,/:(plac\w+)/,pe+"input-$1")]})),Dr(Fn(e,{props:[i]})),Bd(e,{props:Rm(n,r)});break}return""})}}var DC={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},gi=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",yy="active",xy="data-styled-version",Al="6.3.11",Tp=`/*!sc*/
`,ho=typeof window<"u"&&typeof document<"u",RC=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY),AC={};function Zo(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var is=new Map,Us=new Map,os=1,Ji=function(e){if(is.has(e))return is.get(e);for(;Us.has(os);)os++;var t=os++;return is.set(e,t),Us.set(t,e),t},LC=function(e,t){os=t+1,is.set(e,t),Us.set(t,e)},Op=Object.freeze([]),vi=Object.freeze({});function by(e,t,n){return n===void 0&&(n=vi),e.theme!==n.theme&&e.theme||t||n.theme}var wy=new Set(["a","abbr","address","area","article","aside","audio","b","bdi","bdo","blockquote","body","button","br","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","main","map","mark","menu","meter","nav","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","slot","small","span","strong","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","switch","symbol","text","textPath","tspan","use"]),FC=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,zC=/(^-|-$)/g;function Fm(e){return e.replace(FC,"-").replace(zC,"")}var NC=/(a)(d)/gi,zm=function(e){return String.fromCharCode(e+(e>25?39:97))};function Hd(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=zm(t%52)+n;return(zm(t%52)+n).replace(NC,"$1-$2")}var Ju,fr=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Sy=function(e){return fr(5381,e)};function _y(e){return Hd(Sy(e)>>>0)}function BC(e){return e.displayName||e.name||"Component"}function ec(e){return typeof e=="string"&&!0}var Cy=typeof Symbol=="function"&&Symbol.for,Ey=Cy?Symbol.for("react.memo"):60115,VC=Cy?Symbol.for("react.forward_ref"):60112,HC={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},UC={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},ky={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},WC=((Ju={})[VC]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Ju[Ey]=ky,Ju);function Nm(e){return("type"in(t=e)&&t.type.$$typeof)===Ey?ky:"$$typeof"in e?WC[e.$$typeof]:HC;var t}var GC=Object.defineProperty,YC=Object.getOwnPropertyNames,Bm=Object.getOwnPropertySymbols,qC=Object.getOwnPropertyDescriptor,XC=Object.getPrototypeOf,Vm=Object.prototype;function Ty(e,t,n){if(typeof t!="string"){if(Vm){var r=XC(t);r&&r!==Vm&&Ty(e,r,n)}var i=YC(t);Bm&&(i=i.concat(Bm(t)));for(var o=Nm(e),a=Nm(t),l=0;l<i.length;++l){var s=i[l];if(!(s in UC||n&&n[s]||a&&s in a||o&&s in o)){var u=qC(t,s);try{GC(e,s,u)}catch{}}}}return e}function yi(e){return typeof e=="function"}function Pp(e){return typeof e=="object"&&"styledComponentId"in e}function vr(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Ud(e,t){return e.join(t||"")}function Lo(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Wd(e,t,n){if(n===void 0&&(n=!1),!n&&!Lo(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=Wd(e[r],t[r]);else if(Lo(t))for(var r in t)e[r]=Wd(e[r],t[r]);return e}function jp(e,t){Object.defineProperty(e,"toString",{value:t})}var KC=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t,this._cGroup=0,this._cIndex=0}return e.prototype.indexOfGroup=function(t){if(t===this._cGroup)return this._cIndex;var n=this._cIndex;if(t>this._cGroup)for(var r=this._cGroup;r<t;r++)n+=this.groupSizes[r];else for(r=this._cGroup-1;r>=t;r--)n-=this.groupSizes[r];return this._cGroup=t,this._cIndex=n,n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,o=i;t>=o;)if((o<<=1)<0)throw Zo(16,"".concat(t));this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var a=i;a<o;a++)this.groupSizes[a]=0}for(var l=this.indexOfGroup(t+1),s=0,u=(a=0,n.length);a<u;a++)this.tag.insertRule(l,n[a])&&(this.groupSizes[t]++,l++,s++);s>0&&this._cGroup>t&&(this._cIndex+=s)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),i=r+n;this.groupSizes[t]=0;for(var o=r;o<i;o++)this.tag.deleteRule(r);n>0&&this._cGroup>t&&(this._cIndex-=n)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],i=this.indexOfGroup(t),o=i+r,a=i;a<o;a++)n+=this.tag.getRule(a)+Tp;return n},e}(),QC="style[".concat(gi,"][").concat(xy,'="').concat(Al,'"]'),ZC=new RegExp("^".concat(gi,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Hm=function(e){return typeof ShadowRoot<"u"&&e instanceof ShadowRoot||"host"in e&&e.nodeType===11},Gd=function(e){if(!e)return document;if(Hm(e))return e;if("getRootNode"in e){var t=e.getRootNode();if(Hm(t))return t}return document},JC=function(e,t,n){for(var r,i=n.split(","),o=0,a=i.length;o<a;o++)(r=i[o])&&e.registerName(t,r)},eE=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(Tp),i=[],o=0,a=r.length;o<a;o++){var l=r[o].trim();if(l){var s=l.match(ZC);if(s){var u=0|parseInt(s[1],10),c=s[2];u!==0&&(LC(c,u),JC(e,c,s[3]),e.getTag().insertRules(u,i)),i.length=0}else i.push(l)}}},tc=function(e){for(var t=Gd(e.options.target).querySelectorAll(QC),n=0,r=t.length;n<r;n++){var i=t[n];i&&i.getAttribute(gi)!==yy&&(eE(e,i),i.parentNode&&i.parentNode.removeChild(i))}};function tE(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Oy=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(l){var s=Array.from(l.querySelectorAll("style[".concat(gi,"]")));return s[s.length-1]}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(gi,yy),r.setAttribute(xy,Al);var a=tE();return a&&r.setAttribute("nonce",a),n.insertBefore(r,o),r},nE=function(){function e(t){this.element=Oy(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){var r;if(n.sheet)return n.sheet;for(var i=(r=n.getRootNode().styleSheets)!==null&&r!==void 0?r:document.styleSheets,o=0,a=i.length;o<a;o++){var l=i[o];if(l.ownerNode===n)return l}throw Zo(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),rE=function(){function e(t){this.element=Oy(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),iE=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(t===this.length?this.rules.push(n):this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),Um=ho,oE={isServer:!ho,useCSSOMInjection:!RC},Ws=function(){function e(t,n,r){t===void 0&&(t=vi),n===void 0&&(n={});var i=this;this.options=Xe(Xe({},oE),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&ho&&Um&&(Um=!1,tc(this)),jp(this,function(){return function(o){for(var a=o.getTag(),l=a.length,s="",u=function(d){var g=function(f){return Us.get(f)}(d);if(g===void 0)return"continue";var m=o.names.get(g);if(m===void 0||!m.size)return"continue";var v=a.getGroup(d);if(v.length===0)return"continue";var x=gi+".g"+d+'[id="'+g+'"]',w="";m.forEach(function(f){f.length>0&&(w+=f+",")}),s+=v+x+'{content:"'+w+'"}'+Tp},c=0;c<l;c++)u(c);return s}(i)})}return e.registerId=function(t){return Ji(t)},e.prototype.rehydrate=function(){!this.server&&ho&&tc(this)},e.prototype.reconstructWithOptions=function(t,n){n===void 0&&(n=!0);var r=new e(Xe(Xe({},this.options),t),this.gs,n&&this.names||void 0);return!this.server&&ho&&t.target!==this.options.target&&Gd(this.options.target)!==Gd(t.target)&&tc(r),r},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new iE(i):r?new nE(i):new rE(i)}(this.options),new KC(t)));var t},e.prototype.hasNameForId=function(t,n){var r,i;return(i=(r=this.names.get(t))===null||r===void 0?void 0:r.has(n))!==null&&i!==void 0&&i},e.prototype.registerName=function(t,n){Ji(t);var r=this.names.get(t);r?r.add(n):this.names.set(t,new Set([n]))},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(Ji(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(Ji(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),aE=/&/g,mn=47,pr=42;function Wm(e){if(e.indexOf("}")===-1)return!1;for(var t=e.length,n=0,r=0,i=!1,o=0;o<t;o++){var a=e.charCodeAt(o);if(r!==0||i||a!==mn||e.charCodeAt(o+1)!==pr)if(i)a===pr&&e.charCodeAt(o+1)===mn&&(i=!1,o++);else if(a!==34&&a!==39||o!==0&&e.charCodeAt(o-1)===92){if(r===0){if(a===123)n++;else if(a===125&&--n<0)return!0}}else r===0?r=a:r===a&&(r=0);else i=!0,o++}return n!==0||r!==0}function Py(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=Py(n.children,t)),n})}function sE(e){var t,n,r,i=e===void 0?vi:e,o=i.options,a=o===void 0?vi:o,l=i.plugins,s=l===void 0?Op:l,u=function(v,x,w){return w.startsWith(n)&&w.endsWith(n)&&w.replaceAll(n,"").length>0?".".concat(t):v},c=s.slice();c.push(function(v){v.type===Il&&v.value.includes("&")&&(r||(r=new RegExp("\\".concat(n,"\\b"),"g")),v.props[0]=v.props[0].replace(aE,n).replace(r,u))}),a.prefix&&c.push($C),c.push(jC);var d=[],g=MC(c.concat(IC(function(v){return d.push(v)}))),m=function(v,x,w,f){x===void 0&&(x=""),w===void 0&&(w=""),f===void 0&&(f="&"),t=f,n=x,r=void 0;var p=function(b){if(!Wm(b))return b;for(var E=b.length,k="",_=0,S=0,M=0,j=!1,I=0;I<E;I++){var P=b.charCodeAt(I);if(M!==0||j||P!==mn||b.charCodeAt(I+1)!==pr)if(j)P===pr&&b.charCodeAt(I+1)===mn&&(j=!1,I++);else if(P!==34&&P!==39||I!==0&&b.charCodeAt(I-1)===92){if(M===0)if(P===123)S++;else if(P===125){if(--S<0){for(var $=I+1;$<E;){var A=b.charCodeAt($);if(A===59||A===10)break;$++}$<E&&b.charCodeAt($)===59&&$++,S=0,I=$-1,_=$;continue}S===0&&(k+=b.substring(_,I+1),_=I+1)}else P===59&&S===0&&(k+=b.substring(_,I+1),_=I+1)}else M===0?M=P:M===P&&(M=0);else j=!0,I++}if(_<E){var R=b.substring(_);Wm(R)||(k+=R)}return k}(function(b){if(b.indexOf("//")===-1)return b;for(var E=b.length,k=[],_=0,S=0,M=0,j=0;S<E;){var I=b.charCodeAt(S);if(I!==34&&I!==39||S!==0&&b.charCodeAt(S-1)===92)if(M===0)if(I===mn&&S+1<E&&b.charCodeAt(S+1)===pr){for(S+=2;S+1<E&&(b.charCodeAt(S)!==pr||b.charCodeAt(S+1)!==mn);)S++;S+=2}else if(I===40&&S>=3&&(32|b.charCodeAt(S-1))==108&&(32|b.charCodeAt(S-2))==114&&(32|b.charCodeAt(S-3))==117)j=1,S++;else if(j>0)I===41?j--:I===40&&j++,S++;else if(I===pr&&S+1<E&&b.charCodeAt(S+1)===mn)S>_&&k.push(b.substring(_,S)),_=S+=2;else if(I===mn&&S+1<E&&b.charCodeAt(S+1)===mn){for(S>_&&k.push(b.substring(_,S));S<E&&b.charCodeAt(S)!==10;)S++;_=S}else S++;else S++;else M===0?M=I:M===I&&(M=0),S++}return _===0?b:(_<E&&k.push(b.substring(_)),k.join(""))}(v)),y=OC(w||x?"".concat(w," ").concat(x," { ").concat(p," }"):p);return a.namespace&&(y=Py(y,a.namespace)),d=[],Hs(y,g),d};return m.hash=s.length?s.reduce(function(v,x){return x.name||Zo(15),fr(v,x.name)},5381).toString():"",m}var lE=new Ws,Yd=sE(),jy=U.createContext({shouldForwardProp:void 0,styleSheet:lE,stylis:Yd});jy.Consumer;U.createContext(void 0);function qd(){return U.useContext(jy)}var uE=function(){function e(t,n){var r=this;this.inject=function(i,o){o===void 0&&(o=Yd);var a=r.name+o.hash;i.hasNameForId(r.id,a)||i.insertRules(r.id,a,o(r.rules,a,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,jp(this,function(){throw Zo(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=Yd),this.name+t.hash},e}();function cE(e,t){return t==null||typeof t=="boolean"||t===""?"":typeof t!="number"||t===0||e in DC||e.startsWith("--")?String(t).trim():"".concat(t,"px")}var dE=function(e){return e>="A"&&e<="Z"};function Gm(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;dE(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var My=function(e){return e==null||e===!1||e===""},Iy=function(e){var t=[];for(var n in e){var r=e[n];e.hasOwnProperty(n)&&!My(r)&&(Array.isArray(r)&&r.isCss||yi(r)?t.push("".concat(Gm(n),":"),r,";"):Lo(r)?t.push.apply(t,Ro(Ro(["".concat(n," {")],Iy(r),!1),["}"],!1)):t.push("".concat(Gm(n),": ").concat(cE(n,r),";")))}return t};function rr(e,t,n,r,i){if(i===void 0&&(i=[]),typeof e=="string")return e&&i.push(e),i;if(My(e))return i;if(Pp(e))return i.push(".".concat(e.styledComponentId)),i;if(yi(e)){if(!yi(a=e)||a.prototype&&a.prototype.isReactComponent||!t)return i.push(e),i;var o=e(t);return rr(o,t,n,r,i)}var a;if(e instanceof uE)return n?(e.inject(n,r),i.push(e.getName(r))):i.push(e),i;if(Lo(e)){for(var l=Iy(e),s=0;s<l.length;s++)i.push(l[s]);return i}if(!Array.isArray(e))return i.push(e.toString()),i;for(s=0;s<e.length;s++)rr(e[s],t,n,r,i);return i}function $y(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(yi(n)&&!Pp(n))return!1}return!0}var fE=Sy(Al),pE=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&$y(t),this.componentId=n,this.baseHash=fr(fE,n),this.baseStyle=r,Ws.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r).className:"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=vr(i,this.staticRulesId);else{var o=Ud(rr(this.rules,t,n,r)),a=Hd(fr(this.baseHash,o)>>>0);if(!n.hasNameForId(this.componentId,a)){var l=r(o,".".concat(a),void 0,this.componentId);n.insertRules(this.componentId,a,l)}i=vr(i,a),this.staticRulesId=a}else{for(var s=fr(this.baseHash,r.hash),u="",c=0;c<this.rules.length;c++){var d=this.rules[c];if(typeof d=="string")u+=d;else if(d){var g=Ud(rr(d,t,n,r));s=fr(fr(s,String(c)),g),u+=g}}if(u){var m=Hd(s>>>0);if(!n.hasNameForId(this.componentId,m)){var v=r(u,".".concat(m),void 0,this.componentId);n.insertRules(this.componentId,m,v)}i=vr(i,m)}}return{className:i,css:typeof window>"u"?n.getTag().getGroup(Ji(this.componentId)):""}},e}(),Mp=U.createContext(void 0);Mp.Consumer;var nc={};function hE(e,t,n){var r=Pp(e),i=e,o=!ec(e),a=t.attrs,l=a===void 0?Op:a,s=t.componentId,u=s===void 0?function(b,E){var k=typeof b!="string"?"sc":Fm(b);nc[k]=(nc[k]||0)+1;var _="".concat(k,"-").concat(_y(Al+k+nc[k]));return E?"".concat(E,"-").concat(_):_}(t.displayName,t.parentComponentId):s,c=t.displayName,d=c===void 0?function(b){return ec(b)?"styled.".concat(b):"Styled(".concat(BC(b),")")}(e):c,g=t.displayName&&t.componentId?"".concat(Fm(t.displayName),"-").concat(t.componentId):t.componentId||u,m=r&&i.attrs?i.attrs.concat(l).filter(Boolean):l,v=t.shouldForwardProp;if(r&&i.shouldForwardProp){var x=i.shouldForwardProp;if(t.shouldForwardProp){var w=t.shouldForwardProp;v=function(b,E){return x(b,E)&&w(b,E)}}else v=x}var f=new pE(n,g,r?i.componentStyle:void 0);function p(b,E){return function(k,_,S){var M=k.attrs,j=k.componentStyle,I=k.defaultProps,P=k.foldedComponentIds,$=k.styledComponentId,A=k.target,R=U.useContext(Mp),F=qd(),L=k.shouldForwardProp||F.shouldForwardProp,O=by(_,R,I)||vi,D=function(Q,ce,Oe){for(var gt,He=Xe(Xe({},ce),{className:void 0,theme:Oe}),un=0;un<Q.length;un+=1){var cn=yi(gt=Q[un])?gt(He):gt;for(var Rt in cn)Rt==="className"?He.className=vr(He.className,cn[Rt]):Rt==="style"?He.style=Xe(Xe({},He.style),cn[Rt]):He[Rt]=cn[Rt]}return"className"in ce&&typeof ce.className=="string"&&(He.className=vr(He.className,ce.className)),He}(M,_,O),N=D.as||A,V={};for(var H in D)D[H]===void 0||H[0]==="$"||H==="as"||H==="theme"&&D.theme===O||(H==="forwardedAs"?V.as=D.forwardedAs:L&&!L(H,N)||(V[H]=D[H]));var J=function(Q,ce){var Oe=qd(),gt=Q.generateAndInjectStyles(ce,Oe.styleSheet,Oe.stylis);return gt}(j,D),ie=J.className,ee=vr(P,$);return ie&&(ee+=" "+ie),D.className&&(ee+=" "+D.className),V[ec(N)&&!wy.has(N)?"class":"className"]=ee,S&&(V.ref=S),T.createElement(N,V)}(y,b,E)}p.displayName=d;var y=U.forwardRef(p);return y.attrs=m,y.componentStyle=f,y.displayName=d,y.shouldForwardProp=v,y.foldedComponentIds=r?vr(i.foldedComponentIds,i.styledComponentId):"",y.styledComponentId=g,y.target=r?i.target:e,Object.defineProperty(y,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(b){this._foldedDefaultProps=r?function(E){for(var k=[],_=1;_<arguments.length;_++)k[_-1]=arguments[_];for(var S=0,M=k;S<M.length;S++)Wd(E,M[S],!0);return E}({},i.defaultProps,b):b}}),jp(y,function(){return".".concat(y.styledComponentId)}),o&&Ty(y,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),y}function Ym(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var qm=function(e){return Object.assign(e,{isCss:!0})};function Dy(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(yi(e)||Lo(e))return qm(rr(Ym(Op,Ro([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?rr(r):qm(rr(Ym(r,t)))}function Xd(e,t,n){if(n===void 0&&(n=vi),!t)throw Zo(1,t);var r=function(i){for(var o=[],a=1;a<arguments.length;a++)o[a-1]=arguments[a];return e(t,n,Dy.apply(void 0,Ro([i],o,!1)))};return r.attrs=function(i){return Xd(e,t,Xe(Xe({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return Xd(e,t,Xe(Xe({},n),i))},r}var Ry=function(e){return Xd(hE,e)},C=Ry;wy.forEach(function(e){C[e]=Ry(e)});var mE=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=$y(t),Ws.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,r,i){var o=i(Ud(rr(this.rules,n,r,i)),""),a=this.componentId+t;r.insertRules(a,a,o)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,r,i){t>2&&Ws.registerId(this.componentId+t);var o=this.componentId+t;this.isStatic?r.hasNameForId(o,o)||this.createStyles(t,n,r,i):(this.removeStyles(t,r),this.createStyles(t,n,r,i))},e}();function gE(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=Dy.apply(void 0,Ro([e],t,!1)),i="sc-global-".concat(_y(JSON.stringify(r))),o=new mE(r,i),a=new WeakMap,l=function(u){var c=qd(),d=U.useContext(Mp),g=a.get(c.styleSheet);return g===void 0&&(g=c.styleSheet.allocateGSInstance(i),a.set(c.styleSheet,g)),(typeof window>"u"||!c.styleSheet.server)&&s(g,u,c.styleSheet,d,c.stylis),U.useLayoutEffect(function(){return c.styleSheet.server||s(g,u,c.styleSheet,d,c.stylis),function(){var m;o.removeStyles(g,c.styleSheet),m=c.styleSheet.options.target,typeof document<"u"&&(m??document).querySelectorAll('style[data-styled-global="'.concat(i,'"]')).forEach(function(v){return v.remove()})}},[g,u,c.styleSheet,d,c.stylis]),null};function s(u,c,d,g,m){if(o.isStatic)o.renderStyles(u,AC,d,m);else{var v=Xe(Xe({},c),{theme:by(c,g,l.defaultProps)});o.renderStyles(u,v,d,m)}}return U.memo(l)}const vE=C.div`
position: sticky;
  top: 0;
  z-index: 1000;
      background: radial-gradient(circle at 50% 45%, #5c5149 0%, #4b3c34 35%, #352b25 65%, #1b1412 100%);

  /* background: radial-gradient(
    circle at 50% 45%,
    #634e3f 0%,
    #4d392d 35%,
    #36241b 65%,
    #1e0f09 100%
  );  */
`,yE=C.div`
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
    max-width: 1440px;
  }
`,xE=C.div`
width: 100%;
  display: flex;
      gap: 10px;

  flex-direction: column;
  @media screen and (min-width: 768px) {
    justify-content: space-around;
  }
`,bE=C.div`

  display: flex;
  @media screen and (max-width: 768px) {
    justify-content: space-between;
  }
`,wE=C.div`
  display: flex;
  justify-content: space-around;

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    flex: 1;
  }
`;C(Te)`
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
`;const SE=C(Te)`
  font-size: 40px;
  font-family: Poiret One;
  font-weight: 800;
  color: var(--white-color);

  &::after {
    content: '.';
    color: var(--orange-color); 
    margin-left: 2px;
  }
`;C.h1`
  color: var(--white-color);
  font-family: DM Serif Display;
  margin-left: 70px;
`;const _E=C.svg`
  width: 30px;
  height: 30px;
  fill: var(--white-color);
`,CE=C.button`
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
`;C.div`
  z-index: 9999;
`;C.a`
  color: var(--black-color);
`;const EE=C.div`
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
`,kE=C.button`
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
`,TE=C.nav`
  display: flex;
  flex-direction: column;
  gap: 25px;
`,Ea=C(Te)`
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
`,OE=C.div`
  margin-top: auto;
  border-top: 1px solid #eee;
  padding-top: 20px;
  font-size: 14px;
  color: #888;
  text-align: center;
`,PE=C.div`
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
`,jE=C.div`
 display: flex;
  align-items: center;
  background: #ffffff2b;
   border-radius: 12px;
 
 
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.12);
 width: 100%;
        max-width: 750px;
       
  
 @media screen and (min-width: 768px) {
   max-width:  1400px;
   margin-left: auto;
   margin-right:auto;
  }



`,ME=C.input`
  
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
max-width:  1400px;
  }
`,IE=C.button`
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
   
`,$E=C.svg`
  width: 24px;
  height: 24px;
  

`,qt="/Didiv/assets/symbol-defs-f1e4efb3.svg",DE=()=>{const[e,t]=T.useState("");return h.jsxs(jE,{children:[h.jsx(ME,{name:"site-search",value:e,onChange:n=>t(n.target.value),placeholder:"Пошук",autoComplete:"off"}),h.jsx(IE,{className:"search-button",children:h.jsx($E,{children:h.jsx("use",{href:`${qt}#icon-search`})})})]})};var Ay={exports:{}},Ly={};/**
 * @license React
 * use-sync-external-store-with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jo=T;function RE(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var AE=typeof Object.is=="function"?Object.is:RE,LE=Jo.useSyncExternalStore,FE=Jo.useRef,zE=Jo.useEffect,NE=Jo.useMemo,BE=Jo.useDebugValue;Ly.useSyncExternalStoreWithSelector=function(e,t,n,r,i){var o=FE(null);if(o.current===null){var a={hasValue:!1,value:null};o.current=a}else a=o.current;o=NE(function(){function s(m){if(!u){if(u=!0,c=m,m=r(m),i!==void 0&&a.hasValue){var v=a.value;if(i(v,m))return d=v}return d=m}if(v=d,AE(c,m))return v;var x=r(m);return i!==void 0&&i(v,x)?(c=m,v):(c=m,d=x)}var u=!1,c,d,g=n===void 0?null:n;return[function(){return s(t())},g===null?void 0:function(){return s(g())}]},[t,n,r,i]);var l=LE(e,o[0],o[1]);return zE(function(){a.hasValue=!0,a.value=l},[l]),BE(l),l};Ay.exports=Ly;var VE=Ay.exports;function HE(e){e()}function UE(){let e=null,t=null;return{clear(){e=null,t=null},notify(){HE(()=>{let n=e;for(;n;)n.callback(),n=n.next})},get(){const n=[];let r=e;for(;r;)n.push(r),r=r.next;return n},subscribe(n){let r=!0;const i=t={callback:n,next:null,prev:t};return i.prev?i.prev.next=i:e=i,function(){!r||e===null||(r=!1,i.next?i.next.prev=i.prev:t=i.prev,i.prev?i.prev.next=i.next:e=i.next)}}}}var Xm={notify(){},get:()=>[]};function WE(e,t){let n,r=Xm,i=0,o=!1;function a(x){c();const w=r.subscribe(x);let f=!1;return()=>{f||(f=!0,w(),d())}}function l(){r.notify()}function s(){v.onStateChange&&v.onStateChange()}function u(){return o}function c(){i++,n||(n=t?t.addNestedSub(s):e.subscribe(s),r=UE())}function d(){i--,n&&i===0&&(n(),n=void 0,r.clear(),r=Xm)}function g(){o||(o=!0,c())}function m(){o&&(o=!1,d())}const v={addNestedSub:a,notifyNestedSubs:l,handleChangeWrapper:s,isSubscribed:u,trySubscribe:g,tryUnsubscribe:m,getListeners:()=>r};return v}var GE=()=>typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",YE=GE(),qE=()=>typeof navigator<"u"&&navigator.product==="ReactNative",XE=qE(),KE=()=>YE||XE?T.useLayoutEffect:T.useEffect,QE=KE(),rc=Symbol.for("react-redux-context"),ic=typeof globalThis<"u"?globalThis:{};function ZE(){if(!T.createContext)return{};const e=ic[rc]??(ic[rc]=new Map);let t=e.get(T.createContext);return t||(t=T.createContext(null),e.set(T.createContext,t)),t}var ar=ZE();function JE(e){const{children:t,context:n,serverState:r,store:i}=e,o=T.useMemo(()=>{const s=WE(i);return{store:i,subscription:s,getServerState:r?()=>r:void 0}},[i,r]),a=T.useMemo(()=>i.getState(),[i]);QE(()=>{const{subscription:s}=o;return s.onStateChange=s.notifyNestedSubs,s.trySubscribe(),a!==i.getState()&&s.notifyNestedSubs(),()=>{s.tryUnsubscribe(),s.onStateChange=void 0}},[o,a]);const l=n||ar;return T.createElement(l.Provider,{value:o},t)}var ek=JE;function Ip(e=ar){return function(){return T.useContext(e)}}var Fy=Ip();function zy(e=ar){const t=e===ar?Fy:Ip(e),n=()=>{const{store:r}=t();return r};return Object.assign(n,{withTypes:()=>n}),n}var tk=zy();function nk(e=ar){const t=e===ar?tk:zy(e),n=()=>t().dispatch;return Object.assign(n,{withTypes:()=>n}),n}var Oi=nk(),rk=(e,t)=>e===t;function ik(e=ar){const t=e===ar?Fy:Ip(e),n=(r,i={})=>{const{equalityFn:o=rk}=typeof i=="function"?{equalityFn:i}:i,a=t(),{store:l,subscription:s,getServerState:u}=a;T.useRef(!0);const c=T.useCallback({[r.name](g){return r(g)}}[r.name],[r]),d=VE.useSyncExternalStoreWithSelector(s.addNestedSub,l.getState,u||l.getState,c,o);return T.useDebugValue(d),d};return Object.assign(n,{withTypes:()=>n}),n}var Sn=ik();const ok=C(Te)`
      display: flex;
    align-items: center;
    align-content: center;
    justify-content: center;
    
    @media screen and (min-width: 768px) {
   order: 2;
  margin-right: 10px;
  
  }
       
`,ak=C.svg`
  width: 30px;
  height: 30px;
 fill: var(--white-color);
`,sk=C.div`

width:30px;
height:30px;

  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 28px; 
  cursor: pointer;
`,lk=C.div`
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
`,uk=({onClick:e})=>{const t=Sn(n=>n.cart.items.length);return h.jsx(ok,{to:"/cart",children:h.jsxs(sk,{onClick:e,children:[h.jsx(ak,{children:h.jsx("use",{href:`${qt}#icon-cart`})}),t>0&&h.jsx(lk,{children:t})]})})},ck=C.nav`
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
`,ka=C(Te)`
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
`,dk=()=>h.jsxs(ck,{children:[h.jsx(ka,{to:"/",children:"Головна"}),h.jsx(ka,{to:"/about",children:"Про нас"}),h.jsx(ka,{to:"/catalog",children:"Каталог"}),h.jsx(ka,{to:"/contacts",children:"Контакти"})]}),fk=C.svg`
  width: 24px;
  height: 24px;
  fill: var(--white-color);
`,pk=C(Te)`
      display: flex;
    align-items: center;
    align-content: center;
    justify-content: center;
    
    @media screen and (min-width: 768px) {
   order: 2;
 
  }
       
`,hk=C.div`

width:30px;
height:30px;

  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 28px; /* розмір іконки */
  cursor: pointer;
`,mk=C.div`

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
`,gk=({onClick:e})=>{const t=Sn(n=>n.favorites.items.length);return h.jsx(pk,{to:"/favorite",children:h.jsxs(hk,{onClick:e,children:[h.jsx(fk,{children:h.jsx("use",{href:`${qt}#icon-heart`})}),t>0&&h.jsx(mk,{children:t})]})})};/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ny=(...e)=>e.filter((t,n,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===n).join(" ").trim();/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vk=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yk=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,n,r)=>r?r.toUpperCase():n.toLowerCase());/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Km=e=>{const t=yk(e);return t.charAt(0).toUpperCase()+t.slice(1)};/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var xk={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bk=e=>{for(const t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0;return!1};/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wk=T.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:i="",children:o,iconNode:a,...l},s)=>T.createElement("svg",{ref:s,...xk,width:t,height:t,stroke:e,strokeWidth:r?Number(n)*24/Number(t):n,className:Ny("lucide",i),...!o&&!bk(l)&&{"aria-hidden":"true"},...l},[...a.map(([u,c])=>T.createElement(u,c)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ln=(e,t)=>{const n=T.forwardRef(({className:r,...i},o)=>T.createElement(wk,{ref:o,iconNode:t,className:Ny(`lucide-${vk(Km(e))}`,`lucide-${e}`,r),...i}));return n.displayName=Km(e),n};/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sk=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],By=ln("arrow-right",Sk);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _k=[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",key:"mvr1a0"}]],Vy=ln("heart",_k);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ck=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"r6nss1"}]],Ek=ln("house",Ck);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kk=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],Tk=ln("info",kk);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ok=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],Pk=ln("mail",Ok);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jk=[["path",{d:"M16 10a4 4 0 0 1-8 0",key:"1ltviw"}],["path",{d:"M3.103 6.034h17.794",key:"awc11p"}],["path",{d:"M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z",key:"o988cm"}]],Mk=ln("shopping-bag",jk);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ik=[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]],$p=ln("shopping-cart",Ik);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $k=[["path",{d:"M10 5H3",key:"1qgfaw"}],["path",{d:"M12 19H3",key:"yhmn1j"}],["path",{d:"M14 3v4",key:"1sua03"}],["path",{d:"M16 17v4",key:"1q0r14"}],["path",{d:"M21 12h-9",key:"1o4lsq"}],["path",{d:"M21 19h-5",key:"1rlt1p"}],["path",{d:"M21 5h-7",key:"1oszz2"}],["path",{d:"M8 10v4",key:"tgpxqk"}],["path",{d:"M8 12H3",key:"a7s4jb"}]],Hy=ln("sliders-horizontal",$k);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dk=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],Uy=ln("trash-2",Dk);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rk=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Wy=ln("x",Rk),Ak=()=>{const[e,t]=T.useState(!1);return h.jsx(vE,{children:h.jsx(yE,{children:h.jsxs(xE,{children:[h.jsxs(bE,{children:[h.jsx(SE,{to:"/",children:"Дідів хлів"}),h.jsxs(wE,{children:[h.jsx(uk,{}),h.jsx(gk,{}),h.jsx(dk,{}),h.jsx(CE,{onClick:()=>t(!e),children:h.jsx(_E,{children:h.jsx("use",{href:`${qt}#icon-menu`})})}),h.jsx(PE,{open:e,onClick:()=>t(!1)}),h.jsxs(EE,{open:e,children:[h.jsx(kE,{onClick:()=>t(!1),children:h.jsx(Wy,{size:28,strokeWidth:1.5})}),h.jsxs(TE,{children:[h.jsxs(Ea,{onClick:()=>t(!1),to:"/",children:[h.jsx(Ek,{size:22,strokeWidth:1.5})," Головна"]}),h.jsxs(Ea,{onClick:()=>t(!1),to:"/about",children:[h.jsx(Tk,{size:22,strokeWidth:1.5})," Про нас"]}),h.jsxs(Ea,{onClick:()=>t(!1),to:"/catalog",children:[h.jsx(Mk,{size:22,strokeWidth:1.5})," Каталог"]}),h.jsxs(Ea,{onClick:()=>t(!1),to:"/contacts",children:[h.jsx(Pk,{size:22,strokeWidth:1.5})," Контакти"]})]}),h.jsx(OE,{children:h.jsx("p",{children:"© 2020 Дідів Хлів"})})]})]})]}),h.jsx(DE,{})]})})})},Lk=C.footer`
  background: radial-gradient(
    circle at 50% 45%,
    #5c5149 0%,
    #4b3c34 35%,
    #352b25 65%,
    #1b1412 100%
  );
  color: #ffffff;
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-items: center;
  text-align: center;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-start;
    text-align: left;
    padding: 50px 40px;
  }

  @media screen and (min-width: 1440px) {
    padding: 60px 80px;
  }
`,Fk=C.div`
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
`,oc=C.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center; /* Центруємо контент всередині колонки */

  @media screen and (min-width: 768px) {
    align-items: flex-start; /* На десктопі — по лівому краю */
    min-width: 150px;
    flex: 1;
  }
`,ac=C.h3`
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
`,Qt=C(Te)`
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
`,zk=C.div`
  display: flex;
  gap: 20px;
  margin-top: 10px;
  justify-content: center;

  @media screen and (min-width: 768px) {
    justify-content: flex-start;
  }
`,Qm=C.a`
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
`,Nk=()=>h.jsxs(Lk,{children:[h.jsxs(Fk,{children:[h.jsxs(oc,{children:[h.jsx(ac,{children:"Навігація"}),h.jsx(Qt,{to:"/",children:"Головна"}),h.jsx(Qt,{to:"/about",children:"Про нас"}),h.jsx(Qt,{to:"/catalog",children:"Каталог"}),h.jsx(Qt,{to:"/contacts",children:"Контакти"})]}),h.jsxs(oc,{children:[h.jsx(ac,{children:"Інформація"}),h.jsx(Qt,{to:"/delivery",children:"Оплата і доставка"}),h.jsx(Qt,{children:"Повернення"}),h.jsx(Qt,{children:"Гарантія"}),h.jsx(Qt,{children:"Політика конфіденційності"})]})]}),h.jsxs(oc,{children:[h.jsx(ac,{children:"Контакти"}),h.jsx(Qt,{href:"tel:+380979999999",children:"+38 (097) 999-99-99"}),h.jsx(Qt,{href:"mailto:email@email.com",children:"email@email.com"}),h.jsxs(zk,{children:[h.jsx(Qm,{href:"https://www.instagram.com/didivxliv?igsh=MXhsNWRjdW5rajYwdQ==",target:"_blank",rel:"noopener noreferrer",children:h.jsx("svg",{width:"20px",children:h.jsx("use",{href:`${qt}#icon-instagram`})})}),h.jsx(Qm,{href:"https://t.me/didivxliv",target:"_blank",rel:"noopener noreferrer",children:h.jsx("svg",{width:"20px",children:h.jsx("use",{href:`${qt}#icon-telegram`})})})]})]})]}),Bk=()=>(console.log("rer"),h.jsxs(h.Fragment,{children:[h.jsx(Ak,{}),h.jsx("main",{className:"main-content",children:h.jsx(QS,{})}),h.jsx(Nk,{})]}));function Y(){return Y=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Y.apply(this,arguments)}function Vk(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function Hk(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var Uk=function(){function e(n){var r=this;this._insertTag=function(i){var o;r.tags.length===0?r.insertionPoint?o=r.insertionPoint.nextSibling:r.prepend?o=r.container.firstChild:o=r.before:o=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(i,o),r.tags.push(i)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(r){r.forEach(this._insertTag)},t.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(Hk(this));var i=this.tags[this.tags.length-1];if(this.isSpeedy){var o=Vk(i);try{o.insertRule(r,o.cssRules.length)}catch{}}else i.appendChild(document.createTextNode(r));this.ctr++},t.flush=function(){this.tags.forEach(function(r){return r.parentNode&&r.parentNode.removeChild(r)}),this.tags=[],this.ctr=0},e}(),Ye="-ms-",Gs="-moz-",ae="-webkit-",Gy="comm",Dp="rule",Rp="decl",Wk="@import",Yy="@keyframes",Gk="@layer",Yk=Math.abs,Ll=String.fromCharCode,qk=Object.assign;function Xk(e,t){return Ne(e,0)^45?(((t<<2^Ne(e,0))<<2^Ne(e,1))<<2^Ne(e,2))<<2^Ne(e,3):0}function qy(e){return e.trim()}function Kk(e,t){return(e=t.exec(e))?e[0]:e}function se(e,t,n){return e.replace(t,n)}function Kd(e,t){return e.indexOf(t)}function Ne(e,t){return e.charCodeAt(t)|0}function Fo(e,t,n){return e.slice(t,n)}function Jt(e){return e.length}function Ap(e){return e.length}function Ta(e,t){return t.push(e),e}function Qk(e,t){return e.map(t).join("")}var Fl=1,xi=1,Xy=0,ft=0,Ce=0,Pi="";function zl(e,t,n,r,i,o,a){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:Fl,column:xi,length:a,return:""}}function Bi(e,t){return qk(zl("",null,null,"",null,null,0),e,{length:-e.length},t)}function Zk(){return Ce}function Jk(){return Ce=ft>0?Ne(Pi,--ft):0,xi--,Ce===10&&(xi=1,Fl--),Ce}function St(){return Ce=ft<Xy?Ne(Pi,ft++):0,xi++,Ce===10&&(xi=1,Fl++),Ce}function an(){return Ne(Pi,ft)}function as(){return ft}function ea(e,t){return Fo(Pi,e,t)}function zo(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Ky(e){return Fl=xi=1,Xy=Jt(Pi=e),ft=0,[]}function Qy(e){return Pi="",e}function ss(e){return qy(ea(ft-1,Qd(e===91?e+2:e===40?e+1:e)))}function eT(e){for(;(Ce=an())&&Ce<33;)St();return zo(e)>2||zo(Ce)>3?"":" "}function tT(e,t){for(;--t&&St()&&!(Ce<48||Ce>102||Ce>57&&Ce<65||Ce>70&&Ce<97););return ea(e,as()+(t<6&&an()==32&&St()==32))}function Qd(e){for(;St();)switch(Ce){case e:return ft;case 34:case 39:e!==34&&e!==39&&Qd(Ce);break;case 40:e===41&&Qd(e);break;case 92:St();break}return ft}function nT(e,t){for(;St()&&e+Ce!==47+10;)if(e+Ce===42+42&&an()===47)break;return"/*"+ea(t,ft-1)+"*"+Ll(e===47?e:St())}function rT(e){for(;!zo(an());)St();return ea(e,ft)}function iT(e){return Qy(ls("",null,null,null,[""],e=Ky(e),0,[0],e))}function ls(e,t,n,r,i,o,a,l,s){for(var u=0,c=0,d=a,g=0,m=0,v=0,x=1,w=1,f=1,p=0,y="",b=i,E=o,k=r,_=y;w;)switch(v=p,p=St()){case 40:if(v!=108&&Ne(_,d-1)==58){Kd(_+=se(ss(p),"&","&\f"),"&\f")!=-1&&(f=-1);break}case 34:case 39:case 91:_+=ss(p);break;case 9:case 10:case 13:case 32:_+=eT(v);break;case 92:_+=tT(as()-1,7);continue;case 47:switch(an()){case 42:case 47:Ta(oT(nT(St(),as()),t,n),s);break;default:_+="/"}break;case 123*x:l[u++]=Jt(_)*f;case 125*x:case 59:case 0:switch(p){case 0:case 125:w=0;case 59+c:f==-1&&(_=se(_,/\f/g,"")),m>0&&Jt(_)-d&&Ta(m>32?Jm(_+";",r,n,d-1):Jm(se(_," ","")+";",r,n,d-2),s);break;case 59:_+=";";default:if(Ta(k=Zm(_,t,n,u,c,i,l,y,b=[],E=[],d),o),p===123)if(c===0)ls(_,t,k,k,b,o,d,l,E);else switch(g===99&&Ne(_,3)===110?100:g){case 100:case 108:case 109:case 115:ls(e,k,k,r&&Ta(Zm(e,k,k,0,0,i,l,y,i,b=[],d),E),i,E,d,l,r?b:E);break;default:ls(_,k,k,k,[""],E,0,l,E)}}u=c=m=0,x=f=1,y=_="",d=a;break;case 58:d=1+Jt(_),m=v;default:if(x<1){if(p==123)--x;else if(p==125&&x++==0&&Jk()==125)continue}switch(_+=Ll(p),p*x){case 38:f=c>0?1:(_+="\f",-1);break;case 44:l[u++]=(Jt(_)-1)*f,f=1;break;case 64:an()===45&&(_+=ss(St())),g=an(),c=d=Jt(y=_+=rT(as())),p++;break;case 45:v===45&&Jt(_)==2&&(x=0)}}return o}function Zm(e,t,n,r,i,o,a,l,s,u,c){for(var d=i-1,g=i===0?o:[""],m=Ap(g),v=0,x=0,w=0;v<r;++v)for(var f=0,p=Fo(e,d+1,d=Yk(x=a[v])),y=e;f<m;++f)(y=qy(x>0?g[f]+" "+p:se(p,/&\f/g,g[f])))&&(s[w++]=y);return zl(e,t,n,i===0?Dp:l,s,u,c)}function oT(e,t,n){return zl(e,t,n,Gy,Ll(Zk()),Fo(e,2,-2),0)}function Jm(e,t,n,r){return zl(e,t,n,Rp,Fo(e,0,r),Fo(e,r+1,-1),r)}function ai(e,t){for(var n="",r=Ap(e),i=0;i<r;i++)n+=t(e[i],i,e,t)||"";return n}function aT(e,t,n,r){switch(e.type){case Gk:if(e.children.length)break;case Wk:case Rp:return e.return=e.return||e.value;case Gy:return"";case Yy:return e.return=e.value+"{"+ai(e.children,r)+"}";case Dp:e.value=e.props.join(",")}return Jt(n=ai(e.children,r))?e.return=e.value+"{"+n+"}":""}function sT(e){var t=Ap(e);return function(n,r,i,o){for(var a="",l=0;l<t;l++)a+=e[l](n,r,i,o)||"";return a}}function lT(e){return function(t){t.root||(t=t.return)&&e(t)}}function uT(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var cT=function(t,n,r){for(var i=0,o=0;i=o,o=an(),i===38&&o===12&&(n[r]=1),!zo(o);)St();return ea(t,ft)},dT=function(t,n){var r=-1,i=44;do switch(zo(i)){case 0:i===38&&an()===12&&(n[r]=1),t[r]+=cT(ft-1,n,r);break;case 2:t[r]+=ss(i);break;case 4:if(i===44){t[++r]=an()===58?"&\f":"",n[r]=t[r].length;break}default:t[r]+=Ll(i)}while(i=St());return t},fT=function(t,n){return Qy(dT(Ky(t),n))},eg=new WeakMap,pT=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var n=t.value,r=t.parent,i=t.column===r.column&&t.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(t.props.length===1&&n.charCodeAt(0)!==58&&!eg.get(r))&&!i){eg.set(t,!0);for(var o=[],a=fT(n,o),l=r.props,s=0,u=0;s<a.length;s++)for(var c=0;c<l.length;c++,u++)t.props[u]=o[s]?a[s].replace(/&\f/g,l[c]):l[c]+" "+a[s]}}},hT=function(t){if(t.type==="decl"){var n=t.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(t.return="",t.value="")}};function Zy(e,t){switch(Xk(e,t)){case 5103:return ae+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return ae+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return ae+e+Gs+e+Ye+e+e;case 6828:case 4268:return ae+e+Ye+e+e;case 6165:return ae+e+Ye+"flex-"+e+e;case 5187:return ae+e+se(e,/(\w+).+(:[^]+)/,ae+"box-$1$2"+Ye+"flex-$1$2")+e;case 5443:return ae+e+Ye+"flex-item-"+se(e,/flex-|-self/,"")+e;case 4675:return ae+e+Ye+"flex-line-pack"+se(e,/align-content|flex-|-self/,"")+e;case 5548:return ae+e+Ye+se(e,"shrink","negative")+e;case 5292:return ae+e+Ye+se(e,"basis","preferred-size")+e;case 6060:return ae+"box-"+se(e,"-grow","")+ae+e+Ye+se(e,"grow","positive")+e;case 4554:return ae+se(e,/([^-])(transform)/g,"$1"+ae+"$2")+e;case 6187:return se(se(se(e,/(zoom-|grab)/,ae+"$1"),/(image-set)/,ae+"$1"),e,"")+e;case 5495:case 3959:return se(e,/(image-set\([^]*)/,ae+"$1$`$1");case 4968:return se(se(e,/(.+:)(flex-)?(.*)/,ae+"box-pack:$3"+Ye+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+ae+e+e;case 4095:case 3583:case 4068:case 2532:return se(e,/(.+)-inline(.+)/,ae+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Jt(e)-1-t>6)switch(Ne(e,t+1)){case 109:if(Ne(e,t+4)!==45)break;case 102:return se(e,/(.+:)(.+)-([^]+)/,"$1"+ae+"$2-$3$1"+Gs+(Ne(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Kd(e,"stretch")?Zy(se(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(Ne(e,t+1)!==115)break;case 6444:switch(Ne(e,Jt(e)-3-(~Kd(e,"!important")&&10))){case 107:return se(e,":",":"+ae)+e;case 101:return se(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+ae+(Ne(e,14)===45?"inline-":"")+"box$3$1"+ae+"$2$3$1"+Ye+"$2box$3")+e}break;case 5936:switch(Ne(e,t+11)){case 114:return ae+e+Ye+se(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return ae+e+Ye+se(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return ae+e+Ye+se(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return ae+e+Ye+e+e}return e}var mT=function(t,n,r,i){if(t.length>-1&&!t.return)switch(t.type){case Rp:t.return=Zy(t.value,t.length);break;case Yy:return ai([Bi(t,{value:se(t.value,"@","@"+ae)})],i);case Dp:if(t.length)return Qk(t.props,function(o){switch(Kk(o,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return ai([Bi(t,{props:[se(o,/:(read-\w+)/,":"+Gs+"$1")]})],i);case"::placeholder":return ai([Bi(t,{props:[se(o,/:(plac\w+)/,":"+ae+"input-$1")]}),Bi(t,{props:[se(o,/:(plac\w+)/,":"+Gs+"$1")]}),Bi(t,{props:[se(o,/:(plac\w+)/,Ye+"input-$1")]})],i)}return""})}},gT=[mT],vT=function(t){var n=t.key;if(n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(x){var w=x.getAttribute("data-emotion");w.indexOf(" ")!==-1&&(document.head.appendChild(x),x.setAttribute("data-s",""))})}var i=t.stylisPlugins||gT,o={},a,l=[];a=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(x){for(var w=x.getAttribute("data-emotion").split(" "),f=1;f<w.length;f++)o[w[f]]=!0;l.push(x)});var s,u=[pT,hT];{var c,d=[aT,lT(function(x){c.insert(x)})],g=sT(u.concat(i,d)),m=function(w){return ai(iT(w),g)};s=function(w,f,p,y){c=p,m(w?w+"{"+f.styles+"}":f.styles),y&&(v.inserted[f.name]=!0)}}var v={key:n,sheet:new Uk({key:n,container:a,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:o,registered:{},insert:s};return v.sheet.hydrate(l),v},Jy={exports:{}},ue={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Le=typeof Symbol=="function"&&Symbol.for,Lp=Le?Symbol.for("react.element"):60103,Fp=Le?Symbol.for("react.portal"):60106,Nl=Le?Symbol.for("react.fragment"):60107,Bl=Le?Symbol.for("react.strict_mode"):60108,Vl=Le?Symbol.for("react.profiler"):60114,Hl=Le?Symbol.for("react.provider"):60109,Ul=Le?Symbol.for("react.context"):60110,zp=Le?Symbol.for("react.async_mode"):60111,Wl=Le?Symbol.for("react.concurrent_mode"):60111,Gl=Le?Symbol.for("react.forward_ref"):60112,Yl=Le?Symbol.for("react.suspense"):60113,yT=Le?Symbol.for("react.suspense_list"):60120,ql=Le?Symbol.for("react.memo"):60115,Xl=Le?Symbol.for("react.lazy"):60116,xT=Le?Symbol.for("react.block"):60121,bT=Le?Symbol.for("react.fundamental"):60117,wT=Le?Symbol.for("react.responder"):60118,ST=Le?Symbol.for("react.scope"):60119;function Tt(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Lp:switch(e=e.type,e){case zp:case Wl:case Nl:case Vl:case Bl:case Yl:return e;default:switch(e=e&&e.$$typeof,e){case Ul:case Gl:case Xl:case ql:case Hl:return e;default:return t}}case Fp:return t}}}function ex(e){return Tt(e)===Wl}ue.AsyncMode=zp;ue.ConcurrentMode=Wl;ue.ContextConsumer=Ul;ue.ContextProvider=Hl;ue.Element=Lp;ue.ForwardRef=Gl;ue.Fragment=Nl;ue.Lazy=Xl;ue.Memo=ql;ue.Portal=Fp;ue.Profiler=Vl;ue.StrictMode=Bl;ue.Suspense=Yl;ue.isAsyncMode=function(e){return ex(e)||Tt(e)===zp};ue.isConcurrentMode=ex;ue.isContextConsumer=function(e){return Tt(e)===Ul};ue.isContextProvider=function(e){return Tt(e)===Hl};ue.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Lp};ue.isForwardRef=function(e){return Tt(e)===Gl};ue.isFragment=function(e){return Tt(e)===Nl};ue.isLazy=function(e){return Tt(e)===Xl};ue.isMemo=function(e){return Tt(e)===ql};ue.isPortal=function(e){return Tt(e)===Fp};ue.isProfiler=function(e){return Tt(e)===Vl};ue.isStrictMode=function(e){return Tt(e)===Bl};ue.isSuspense=function(e){return Tt(e)===Yl};ue.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Nl||e===Wl||e===Vl||e===Bl||e===Yl||e===yT||typeof e=="object"&&e!==null&&(e.$$typeof===Xl||e.$$typeof===ql||e.$$typeof===Hl||e.$$typeof===Ul||e.$$typeof===Gl||e.$$typeof===bT||e.$$typeof===wT||e.$$typeof===ST||e.$$typeof===xT)};ue.typeOf=Tt;Jy.exports=ue;var _T=Jy.exports,tx=_T,CT={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},ET={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},nx={};nx[tx.ForwardRef]=CT;nx[tx.Memo]=ET;var kT=!0;function rx(e,t,n){var r="";return n.split(" ").forEach(function(i){e[i]!==void 0?t.push(e[i]+";"):r+=i+" "}),r}var Np=function(t,n,r){var i=t.key+"-"+n.name;(r===!1||kT===!1)&&t.registered[i]===void 0&&(t.registered[i]=n.styles)},ix=function(t,n,r){Np(t,n,r);var i=t.key+"-"+n.name;if(t.inserted[n.name]===void 0){var o=n;do t.insert(n===o?"."+i:"",o,t.sheet,!0),o=o.next;while(o!==void 0)}};function TT(e){for(var t=0,n,r=0,i=e.length;i>=4;++r,i-=4)n=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(i){case 3:t^=(e.charCodeAt(r+2)&255)<<16;case 2:t^=(e.charCodeAt(r+1)&255)<<8;case 1:t^=e.charCodeAt(r)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var OT={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},PT=/[A-Z]|^ms/g,jT=/_EMO_([^_]+?)_([^]*?)_EMO_/g,ox=function(t){return t.charCodeAt(1)===45},tg=function(t){return t!=null&&typeof t!="boolean"},sc=uT(function(e){return ox(e)?e:e.replace(PT,"-$&").toLowerCase()}),ng=function(t,n){switch(t){case"animation":case"animationName":if(typeof n=="string")return n.replace(jT,function(r,i,o){return en={name:i,styles:o,next:en},i})}return OT[t]!==1&&!ox(t)&&typeof n=="number"&&n!==0?n+"px":n};function No(e,t,n){if(n==null)return"";if(n.__emotion_styles!==void 0)return n;switch(typeof n){case"boolean":return"";case"object":{if(n.anim===1)return en={name:n.name,styles:n.styles,next:en},n.name;if(n.styles!==void 0){var r=n.next;if(r!==void 0)for(;r!==void 0;)en={name:r.name,styles:r.styles,next:en},r=r.next;var i=n.styles+";";return i}return MT(e,t,n)}case"function":{if(e!==void 0){var o=en,a=n(e);return en=o,No(e,t,a)}break}}if(t==null)return n;var l=t[n];return l!==void 0?l:n}function MT(e,t,n){var r="";if(Array.isArray(n))for(var i=0;i<n.length;i++)r+=No(e,t,n[i])+";";else for(var o in n){var a=n[o];if(typeof a!="object")t!=null&&t[a]!==void 0?r+=o+"{"+t[a]+"}":tg(a)&&(r+=sc(o)+":"+ng(o,a)+";");else if(Array.isArray(a)&&typeof a[0]=="string"&&(t==null||t[a[0]]===void 0))for(var l=0;l<a.length;l++)tg(a[l])&&(r+=sc(o)+":"+ng(o,a[l])+";");else{var s=No(e,t,a);switch(o){case"animation":case"animationName":{r+=sc(o)+":"+s+";";break}default:r+=o+"{"+s+"}"}}}return r}var rg=/label:\s*([^\s;\n{]+)\s*(;|$)/g,en,Bp=function(t,n,r){if(t.length===1&&typeof t[0]=="object"&&t[0]!==null&&t[0].styles!==void 0)return t[0];var i=!0,o="";en=void 0;var a=t[0];a==null||a.raw===void 0?(i=!1,o+=No(r,n,a)):o+=a[0];for(var l=1;l<t.length;l++)o+=No(r,n,t[l]),i&&(o+=a[l]);rg.lastIndex=0;for(var s="",u;(u=rg.exec(o))!==null;)s+="-"+u[1];var c=TT(o)+s;return{name:c,styles:o,next:en}},IT=function(t){return t()},$T=Uc["useInsertionEffect"]?Uc["useInsertionEffect"]:!1,ax=$T||IT,Vp={}.hasOwnProperty,sx=T.createContext(typeof HTMLElement<"u"?vT({key:"css"}):null);sx.Provider;var lx=function(t){return T.forwardRef(function(n,r){var i=T.useContext(sx);return t(n,i,r)})},ux=T.createContext({}),Zd="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",DT=function(t,n){var r={};for(var i in n)Vp.call(n,i)&&(r[i]=n[i]);return r[Zd]=t,r},RT=function(t){var n=t.cache,r=t.serialized,i=t.isStringTag;return Np(n,r,i),ax(function(){return ix(n,r,i)}),null},AT=lx(function(e,t,n){var r=e.css;typeof r=="string"&&t.registered[r]!==void 0&&(r=t.registered[r]);var i=e[Zd],o=[r],a="";typeof e.className=="string"?a=rx(t.registered,o,e.className):e.className!=null&&(a=e.className+" ");var l=Bp(o,void 0,T.useContext(ux));a+=t.key+"-"+l.name;var s={};for(var u in e)Vp.call(e,u)&&u!=="css"&&u!==Zd&&(s[u]=e[u]);return s.ref=n,s.className=a,T.createElement(T.Fragment,null,T.createElement(RT,{cache:t,serialized:l,isStringTag:typeof i=="string"}),T.createElement(i,s))}),LT=AT,W=function(t,n){var r=arguments;if(n==null||!Vp.call(n,"css"))return T.createElement.apply(void 0,r);var i=r.length,o=new Array(i);o[0]=LT,o[1]=DT(t,n);for(var a=2;a<i;a++)o[a]=r[a];return T.createElement.apply(null,o)};function Hp(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return Bp(t)}var FT=function(){var t=Hp.apply(void 0,arguments),n="animation-"+t.name;return{name:n,styles:"@keyframes "+n+"{"+t.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},zT=hC,NT=function(t){return t!=="theme"},ig=function(t){return typeof t=="string"&&t.charCodeAt(0)>96?zT:NT},og=function(t,n,r){var i;if(n){var o=n.shouldForwardProp;i=t.__emotion_forwardProp&&o?function(a){return t.__emotion_forwardProp(a)&&o(a)}:o}return typeof i!="function"&&r&&(i=t.__emotion_forwardProp),i},BT=function(t){var n=t.cache,r=t.serialized,i=t.isStringTag;return Np(n,r,i),ax(function(){return ix(n,r,i)}),null},VT=function e(t,n){var r=t.__emotion_real===t,i=r&&t.__emotion_base||t,o,a;n!==void 0&&(o=n.label,a=n.target);var l=og(t,n,r),s=l||ig(i),u=!s("as");return function(){var c=arguments,d=r&&t.__emotion_styles!==void 0?t.__emotion_styles.slice(0):[];if(o!==void 0&&d.push("label:"+o+";"),c[0]==null||c[0].raw===void 0)d.push.apply(d,c);else{d.push(c[0][0]);for(var g=c.length,m=1;m<g;m++)d.push(c[m],c[0][m])}var v=lx(function(x,w,f){var p=u&&x.as||i,y="",b=[],E=x;if(x.theme==null){E={};for(var k in x)E[k]=x[k];E.theme=T.useContext(ux)}typeof x.className=="string"?y=rx(w.registered,b,x.className):x.className!=null&&(y=x.className+" ");var _=Bp(d.concat(b),w.registered,E);y+=w.key+"-"+_.name,a!==void 0&&(y+=" "+a);var S=u&&l===void 0?ig(p):s,M={};for(var j in x)u&&j==="as"||S(j)&&(M[j]=x[j]);return M.className=y,M.ref=f,T.createElement(T.Fragment,null,T.createElement(BT,{cache:w,serialized:_,isStringTag:typeof p=="string"}),T.createElement(p,M))});return v.displayName=o!==void 0?o:"Styled("+(typeof i=="string"?i:i.displayName||i.name||"Component")+")",v.defaultProps=t.defaultProps,v.__emotion_real=v,v.__emotion_base=i,v.__emotion_styles=d,v.__emotion_forwardProp=l,Object.defineProperty(v,"toString",{value:function(){return"."+a}}),v.withComponent=function(x,w){return e(x,Y({},n,w,{shouldForwardProp:og(v,w,!0)})).apply(void 0,d)},v}},HT=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],$e=VT.bind();HT.forEach(function(e){$e[e]=$e(e)});const UT=$e.section`
  background-color:  var(--second-background);
 
 
`,WT=$e.div`
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
    max-width: 1440px;
  }
  
`,GT=$e.h1`

    font-size: 32px;
font-family: var(--main-font);
color: var( --black-color);
text-transform: uppercase;

 
`,YT=$e.div`
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
`;$e.div`
  position: absolute;
  inset: 0; /* займає всю картку */
  background: rgba(0, 0, 0, 0.622); /* чорний з прозорістю 25% */
`;const qT=$e(Te)`
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
`,XT=$e.div`
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
`,KT=$e.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
 

  display: block;
   @media screen and (max-width: 768px) {
  height: 100px;
  }

`,QT=$e.p`
color: var( --black-color);
  padding: 16px;
  font-size: 18px;
  font-weight: 600;
  font-family: var(--main-font);
  text-align: center;
    @media screen and (max-width: 768px) {
 padding:10px;
   font-size: 15px;
  font-weight: 400;
  }

`,ZT=[{id:"bikes",title:"Велосипеди",image:"/Didiv/catalog/bikes.jpeg"},{id:"saddles",title:"Сідла",image:"/Didiv/catalog/saddles.jpeg"},{id:"wheels",title:"Колеса",image:"/Didiv/catalog/wheels.jpeg"},{id:"frames",title:"Рами",image:"/Didiv/catalog/frames.jpeg"},{id:"handlebars",title:"Керма",image:"/Didiv/catalog/handlebars.jpeg"},{id:"stems",title:"Виноси",image:"/Didiv/catalog/stems.jpeg"},{id:"conrods",title:"Шатуни",image:"/Didiv/catalog/conrods.jpeg"},{id:"pedals",title:"Педалі",image:"/Didiv/catalog/pedals.jpeg"},{id:"fenders",title:"Крила",image:"/Didiv/catalog/fenders.jpeg"},{id:"tubes",title:"Камери",image:"/Didiv/catalog/tubes.jpeg"},{id:"brakes",title:"Гальма",image:"/Didiv/catalog/brakes.jpeg"},{id:"forks",title:"Вилки",image:"/Didiv/catalog/forks.jpeg"}],JT=()=>h.jsx(UT,{children:h.jsxs(WT,{children:[h.jsx(GT,{children:"Каталог"}),h.jsx(YT,{children:ZT.map(e=>h.jsxs(qT,{to:`/catalog/${e.id}`,children:[h.jsx(XT,{children:h.jsx(KT,{src:e.image,alt:e.title})}),h.jsx(QT,{children:e.title})]},e.id))})]})}),eO=$e.div`

padding-top: 100px;
padding-bottom: 250px;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`,tO=$e.h1`
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
`,nO=$e.p`
  color: #191919;
  font-size: 18px;
  max-width: 600px;
      text-align: center;
      margin-bottom: 50px;
      @media screen and (min-width: 768px) {
 font-size: 25px;
  }
`,rO=$e(Te)`

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

  
`,iO=()=>h.jsxs(eO,{children:[h.jsxs(tO,{children:[" ",h.jsx("span",{children:"404"}),"  PAGE NOT FOUND"]}),h.jsx(nO,{children:" Ой, схоже, ти збився з маршруту! На жаль, ця сторінка безслідно зникла десь на бездоріжжі. Спробуй повернутися на головну "}),h.jsx(rO,{children:" На головну"})]});const oO=C.div`
  width: 100%;
  height: 100%;
font-family: var(--main-font);
`,aO=C.div`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  margin: 0;
`;var cx={},dx={},Kl={},fx={exports:{}},ta={};/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var ag=Object.getOwnPropertySymbols,sO=Object.prototype.hasOwnProperty,lO=Object.prototype.propertyIsEnumerable;function uO(e){if(e==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}function cO(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de",Object.getOwnPropertyNames(e)[0]==="5")return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;var r=Object.getOwnPropertyNames(t).map(function(o){return t[o]});if(r.join("")!=="0123456789")return!1;var i={};return"abcdefghijklmnopqrst".split("").forEach(function(o){i[o]=o}),Object.keys(Object.assign({},i)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}var dO=cO()?Object.assign:function(e,t){for(var n,r=uO(e),i,o=1;o<arguments.length;o++){n=Object(arguments[o]);for(var a in n)sO.call(n,a)&&(r[a]=n[a]);if(ag){i=ag(n);for(var l=0;l<i.length;l++)lO.call(n,i[l])&&(r[i[l]]=n[i[l]])}}return r},px={exports:{}},re={};/** @license React v17.0.2
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Up=dO,ji=60103,hx=60106;re.Fragment=60107;re.StrictMode=60108;re.Profiler=60114;var mx=60109,gx=60110,vx=60112;re.Suspense=60113;var yx=60115,xx=60116;if(typeof Symbol=="function"&&Symbol.for){var Lt=Symbol.for;ji=Lt("react.element"),hx=Lt("react.portal"),re.Fragment=Lt("react.fragment"),re.StrictMode=Lt("react.strict_mode"),re.Profiler=Lt("react.profiler"),mx=Lt("react.provider"),gx=Lt("react.context"),vx=Lt("react.forward_ref"),re.Suspense=Lt("react.suspense"),yx=Lt("react.memo"),xx=Lt("react.lazy")}var sg=typeof Symbol=="function"&&Symbol.iterator;function fO(e){return e===null||typeof e!="object"?null:(e=sg&&e[sg]||e["@@iterator"],typeof e=="function"?e:null)}function na(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var bx={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},wx={};function Mi(e,t,n){this.props=e,this.context=t,this.refs=wx,this.updater=n||bx}Mi.prototype.isReactComponent={};Mi.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error(na(85));this.updater.enqueueSetState(this,e,t,"setState")};Mi.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Sx(){}Sx.prototype=Mi.prototype;function Wp(e,t,n){this.props=e,this.context=t,this.refs=wx,this.updater=n||bx}var Gp=Wp.prototype=new Sx;Gp.constructor=Wp;Up(Gp,Mi.prototype);Gp.isPureReactComponent=!0;var Yp={current:null},_x=Object.prototype.hasOwnProperty,Cx={key:!0,ref:!0,__self:!0,__source:!0};function Ex(e,t,n){var r,i={},o=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(o=""+t.key),t)_x.call(t,r)&&!Cx.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var s=Array(l),u=0;u<l;u++)s[u]=arguments[u+2];i.children=s}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:ji,type:e,key:o,ref:a,props:i,_owner:Yp.current}}function pO(e,t){return{$$typeof:ji,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function qp(e){return typeof e=="object"&&e!==null&&e.$$typeof===ji}function hO(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var lg=/\/+/g;function lc(e,t){return typeof e=="object"&&e!==null&&e.key!=null?hO(""+e.key):t.toString(36)}function us(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case ji:case hx:a=!0}}if(a)return a=e,i=i(a),e=r===""?"."+lc(a,0):r,Array.isArray(i)?(n="",e!=null&&(n=e.replace(lg,"$&/")+"/"),us(i,t,n,"",function(u){return u})):i!=null&&(qp(i)&&(i=pO(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(lg,"$&/")+"/")+e)),t.push(i)),1;if(a=0,r=r===""?".":r+":",Array.isArray(e))for(var l=0;l<e.length;l++){o=e[l];var s=r+lc(o,l);a+=us(o,t,n,s,i)}else if(s=fO(e),typeof s=="function")for(e=s.call(e),l=0;!(o=e.next()).done;)o=o.value,s=r+lc(o,l++),a+=us(o,t,n,s,i);else if(o==="object")throw t=""+e,Error(na(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t));return a}function Oa(e,t,n){if(e==null)return e;var r=[],i=0;return us(e,r,"","",function(o){return t.call(n,o,i++)}),r}function mO(e){if(e._status===-1){var t=e._result;t=t(),e._status=0,e._result=t,t.then(function(n){e._status===0&&(n=n.default,e._status=1,e._result=n)},function(n){e._status===0&&(e._status=2,e._result=n)})}if(e._status===1)return e._result;throw e._result}var kx={current:null};function Dn(){var e=kx.current;if(e===null)throw Error(na(321));return e}var gO={ReactCurrentDispatcher:kx,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:Yp,IsSomeRendererActing:{current:!1},assign:Up};re.Children={map:Oa,forEach:function(e,t,n){Oa(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Oa(e,function(){t++}),t},toArray:function(e){return Oa(e,function(t){return t})||[]},only:function(e){if(!qp(e))throw Error(na(143));return e}};re.Component=Mi;re.PureComponent=Wp;re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=gO;re.cloneElement=function(e,t,n){if(e==null)throw Error(na(267,e));var r=Up({},e.props),i=e.key,o=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,a=Yp.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in t)_x.call(t,s)&&!Cx.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&l!==void 0?l[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){l=Array(s);for(var u=0;u<s;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:ji,type:e.type,key:i,ref:o,props:r,_owner:a}};re.createContext=function(e,t){return t===void 0&&(t=null),e={$$typeof:gx,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider={$$typeof:mx,_context:e},e.Consumer=e};re.createElement=Ex;re.createFactory=function(e){var t=Ex.bind(null,e);return t.type=e,t};re.createRef=function(){return{current:null}};re.forwardRef=function(e){return{$$typeof:vx,render:e}};re.isValidElement=qp;re.lazy=function(e){return{$$typeof:xx,_payload:{_status:-1,_result:e},_init:mO}};re.memo=function(e,t){return{$$typeof:yx,type:e,compare:t===void 0?null:t}};re.useCallback=function(e,t){return Dn().useCallback(e,t)};re.useContext=function(e,t){return Dn().useContext(e,t)};re.useDebugValue=function(){};re.useEffect=function(e,t){return Dn().useEffect(e,t)};re.useImperativeHandle=function(e,t,n){return Dn().useImperativeHandle(e,t,n)};re.useLayoutEffect=function(e,t){return Dn().useLayoutEffect(e,t)};re.useMemo=function(e,t){return Dn().useMemo(e,t)};re.useReducer=function(e,t,n){return Dn().useReducer(e,t,n)};re.useRef=function(e){return Dn().useRef(e)};re.useState=function(e){return Dn().useState(e)};re.version="17.0.2";px.exports=re;var vO=px.exports;/** @license React v17.0.2
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yO=vO,Tx=60103;ta.Fragment=60107;if(typeof Symbol=="function"&&Symbol.for){var ug=Symbol.for;Tx=ug("react.element"),ta.Fragment=ug("react.fragment")}var xO=yO.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,bO=Object.prototype.hasOwnProperty,wO={key:!0,ref:!0,__self:!0,__source:!0};function Ox(e,t,n){var r,i={},o=null,a=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)bO.call(t,r)&&!wO.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:Tx,type:e,key:o,ref:a,props:i,_owner:xO.current}}ta.jsx=Ox;ta.jsxs=Ox;fx.exports=ta;var ht=fx.exports,Px={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var t={}.hasOwnProperty;function n(){for(var o="",a=0;a<arguments.length;a++){var l=arguments[a];l&&(o=i(o,r(l)))}return o}function r(o){if(typeof o=="string"||typeof o=="number")return o;if(typeof o!="object")return"";if(Array.isArray(o))return n.apply(null,o);if(o.toString!==Object.prototype.toString&&!o.toString.toString().includes("[native code]"))return o.toString();var a="";for(var l in o)t.call(o,l)&&o[l]&&(a=i(a,l));return a}function i(o,a){return a?o?o+" "+a:o+a:o}e.exports?(n.default=n,e.exports=n):window.classNames=n})()})(Px);var mt=Px.exports;const SO={"lds-circle":"_lds-circle_qlxhy_1"},_O=Object.freeze(Object.defineProperty({__proto__:null,default:SO},Symbol.toStringTag,{value:"Module"})),CO=pt(_O);var jx=q&&q.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Kl,"__esModule",{value:!0});Kl.Circle=void 0;const EO=ht,kO=jx(mt),TO=jx(CO);function OO({color:e="#7f58af",size:t=64,className:n,style:r,...i}){return(0,EO.jsx)("div",{className:(0,kO.default)(TO.default["lds-circle"],n),style:{background:e,width:t,height:t,...r},...i})}Kl.Circle=OO;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Circle=void 0;var t=Kl;Object.defineProperty(e,"Circle",{enumerable:!0,get:function(){return t.Circle}})})(dx);var Mx={},Ql={};const PO={"lds-default":"_lds-default_wt1n8_1"},jO=Object.freeze(Object.defineProperty({__proto__:null,default:PO},Symbol.toStringTag,{value:"Module"})),MO=pt(jO);var Ix=q&&q.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Ql,"__esModule",{value:!0});Ql.Default=void 0;const cg=ht,IO=Ix(mt),$O=Ix(MO);function DO({color:e="#7f58af",size:t=80,className:n,style:r,...i}){const o=[...Array(12)].map((a,l)=>(0,cg.jsx)("div",{style:{background:`${e}`,width:t*.075,height:t*.075}},l));return(0,cg.jsx)("div",{className:(0,IO.default)($O.default["lds-default"],n),style:{height:t,width:t,...r},...i,children:o})}Ql.Default=DO;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Default=void 0;var t=Ql;Object.defineProperty(e,"Default",{enumerable:!0,get:function(){return t.Default}})})(Mx);var $x={},Zl={};const RO={"lds-dual-ring":"_lds-dual-ring_pbai0_1","lds-dual-ring-after":"_lds-dual-ring-after_pbai0_6"},AO=Object.freeze(Object.defineProperty({__proto__:null,default:RO},Symbol.toStringTag,{value:"Module"})),LO=pt(AO);var Dx=q&&q.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Zl,"__esModule",{value:!0});Zl.DualRing=void 0;const dg=ht,fg=Dx(mt),pg=Dx(LO);function FO({color:e="#7f58af",size:t=80,className:n,style:r,...i}){return(0,dg.jsx)("div",{className:(0,fg.default)(pg.default["lds-dual-ring"],n),style:{width:t,height:t,...r},...i,children:(0,dg.jsx)("div",{className:(0,fg.default)(pg.default["lds-dual-ring-after"]),style:{borderColor:`${e} transparent`,borderWidth:t*.1,width:t*.7-6,height:t*.7-6}})})}Zl.DualRing=FO;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.DualRing=void 0;var t=Zl;Object.defineProperty(e,"DualRing",{enumerable:!0,get:function(){return t.DualRing}})})($x);var Rx={},Jl={};const zO={"lds-ellipsis":"_lds-ellipsis_1fzd3_1","lds-ellipsis1":"_lds-ellipsis1_1fzd3_1","lds-ellipsis2":"_lds-ellipsis2_1fzd3_1","lds-ellipsis3":"_lds-ellipsis3_1fzd3_1"},NO=Object.freeze(Object.defineProperty({__proto__:null,default:zO},Symbol.toStringTag,{value:"Module"})),BO=pt(NO);var Ax=q&&q.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Jl,"__esModule",{value:!0});Jl.Ellipsis=void 0;const hg=ht,VO=Ax(mt),HO=Ax(BO);function UO({color:e="#7f58af",size:t=80,className:n,style:r,...i}){const o=[...Array(4)].map((a,l)=>(0,hg.jsx)("div",{style:{background:`${e}`}},l));return(0,hg.jsx)("div",{className:(0,VO.default)(HO.default["lds-ellipsis"],n),style:{...r,width:t,height:t},...i,children:o})}Jl.Ellipsis=UO;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Ellipsis=void 0;var t=Jl;Object.defineProperty(e,"Ellipsis",{enumerable:!0,get:function(){return t.Ellipsis}})})(Rx);var Lx={},eu={};const WO={"lds-facebook":"_lds-facebook_1ts9g_1"},GO=Object.freeze(Object.defineProperty({__proto__:null,default:WO},Symbol.toStringTag,{value:"Module"})),YO=pt(GO);var Fx=q&&q.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(eu,"__esModule",{value:!0});eu.Facebook=void 0;const mg=ht,qO=Fx(mt),XO=Fx(YO);function KO({color:e="#7f58af",size:t=80,className:n,style:r,...i}){const o=[...Array(3)].map((a,l)=>(0,mg.jsx)("div",{style:{background:`${e}`}},l));return(0,mg.jsx)("div",{className:(0,qO.default)(XO.default["lds-facebook"],n),style:{width:t,height:t,...r},...i,children:o})}eu.Facebook=KO;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Facebook=void 0;var t=eu;Object.defineProperty(e,"Facebook",{enumerable:!0,get:function(){return t.Facebook}})})(Lx);var zx={},tu={};const QO={"lds-grid":"_lds-grid_1ftub_1"},ZO=Object.freeze(Object.defineProperty({__proto__:null,default:QO},Symbol.toStringTag,{value:"Module"})),JO=pt(ZO);var Nx=q&&q.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(tu,"__esModule",{value:!0});tu.Grid=void 0;const gg=ht,eP=Nx(mt),tP=Nx(JO);function nP({color:e="#7f58af",size:t=80,className:n,style:r,...i}){const o=[...Array(9)].map((a,l)=>(0,gg.jsx)("div",{style:{background:`${e}`}},l));return(0,gg.jsx)("div",{className:(0,eP.default)(tP.default["lds-grid"],n),style:{width:t,height:t,...r},...i,children:o})}tu.Grid=nP;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Grid=void 0;var t=tu;Object.defineProperty(e,"Grid",{enumerable:!0,get:function(){return t.Grid}})})(zx);var Bx={},nu={};const rP={"lds-heart":"_lds-heart_e4yfg_1","div-after":"_div-after_e4yfg_18","div-before":"_div-before_e4yfg_19"},iP=Object.freeze(Object.defineProperty({__proto__:null,default:rP},Symbol.toStringTag,{value:"Module"})),oP=pt(iP);var Vx=q&&q.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(nu,"__esModule",{value:!0});nu.Heart=void 0;const Pa=ht,uc=Vx(mt),cc=Vx(oP);function aP({color:e="#7f58af",size:t=80,className:n,style:r,...i}){return(0,Pa.jsx)("div",{className:(0,uc.default)(cc.default["lds-heart"],n),style:{width:t,height:t,...r},...i,children:(0,Pa.jsxs)("div",{style:{background:e,width:t*.4,height:t*.4,left:t*.3,top:t*.3},children:[(0,Pa.jsx)("div",{className:(0,uc.default)(cc.default["div-before"]),style:{background:e,width:t*.4,height:t*.4,left:-t*.3}}),(0,Pa.jsx)("div",{className:(0,uc.default)(cc.default["div-after"]),style:{background:e,width:t*.4,height:t*.4,top:-t*.3}})]})})}nu.Heart=aP;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Heart=void 0;var t=nu;Object.defineProperty(e,"Heart",{enumerable:!0,get:function(){return t.Heart}})})(Bx);var Hx={},ru={};const sP={"lds-hourglass":"_lds-hourglass_mn3qi_1","lds-hourglass-after":"_lds-hourglass-after_mn3qi_7"},lP=Object.freeze(Object.defineProperty({__proto__:null,default:sP},Symbol.toStringTag,{value:"Module"})),uP=pt(lP);var Ux=q&&q.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(ru,"__esModule",{value:!0});ru.Hourglass=void 0;const vg=ht,yg=Ux(mt),xg=Ux(uP);function cP({color:e="#7f58af",size:t=32,className:n,style:r}){return(0,vg.jsx)("div",{className:(0,yg.default)(xg.default["lds-hourglass"],n),style:{...r},children:(0,vg.jsx)("div",{className:(0,yg.default)(xg.default["lds-hourglass-after"]),style:{background:e,borderWidth:t,borderHeight:t}})})}ru.Hourglass=cP;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Hourglass=void 0;var t=ru;Object.defineProperty(e,"Hourglass",{enumerable:!0,get:function(){return t.Hourglass}})})(Hx);var Wx={},iu={};const Gx="_center_1rufi_10",Yx="_spin_1rufi_1",dP={"lds-orbitals":"_lds-orbitals_1rufi_1",center:Gx,"outer-spin":"_outer-spin_1rufi_19","inner-spin":"_inner-spin_1rufi_20","inner-arc":"_inner-arc_1rufi_25","inner-arc_start-a":"_inner-arc_start-a_1rufi_32","inner-arc_end-a":"_inner-arc_end-a_1rufi_36","inner-moon-a":"_inner-moon-a_1rufi_40","inner-moon-b":"_inner-moon-b_1rufi_49","inner-arc_start-b":"_inner-arc_start-b_1rufi_58","inner-arc_end-b":"_inner-arc_end-b_1rufi_62","outer-arc":"_outer-arc_1rufi_66","outer-arc_start-a":"_outer-arc_start-a_1rufi_73","outer-arc_end-a":"_outer-arc_end-a_1rufi_77","outer-moon-a":"_outer-moon-a_1rufi_81","outer-moon-b":"_outer-moon-b_1rufi_90","outer-arc_start-b":"_outer-arc_start-b_1rufi_99","outer-arc_end-b":"_outer-arc_end-b_1rufi_103",spin:Yx},fP=Object.freeze(Object.defineProperty({__proto__:null,center:Gx,default:dP,spin:Yx},Symbol.toStringTag,{value:"Module"})),pP=pt(fP);var qx=q&&q.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(iu,"__esModule",{value:!0});iu.Orbitals=void 0;const Ge=ht,Qe=qx(mt),me=qx(pP);function hP({color:e="#7f58af",className:t,style:n}){return(0,Ge.jsxs)("div",{className:(0,Qe.default)(me.default["lds-orbitals"],t),style:{...n},children:[(0,Ge.jsx)("div",{className:me.default.center,style:{background:e}}),(0,Ge.jsxs)("div",{className:(0,Qe.default)(me.default["inner-spin"]),children:[(0,Ge.jsx)("div",{className:(0,Qe.default)(me.default["inner-arc"],me.default["inner-arc_start-a"]),style:{borderColor:e}}),(0,Ge.jsx)("div",{className:(0,Qe.default)(me.default["inner-arc"],me.default["inner-arc_end-a"]),style:{borderColor:e}}),(0,Ge.jsx)("div",{className:(0,Qe.default)(me.default["inner-arc"],me.default["inner-arc_start-b"]),style:{borderColor:e}}),(0,Ge.jsx)("div",{className:(0,Qe.default)(me.default["inner-arc"],me.default["inner-arc_end-b"]),style:{borderColor:e}}),(0,Ge.jsx)("div",{className:(0,Qe.default)(me.default["inner-moon-a"]),style:{background:e}}),(0,Ge.jsx)("div",{className:(0,Qe.default)(me.default["inner-moon-b"]),style:{background:e}})]}),(0,Ge.jsxs)("div",{className:(0,Qe.default)(me.default["outer-spin"]),children:[(0,Ge.jsx)("div",{className:(0,Qe.default)(me.default["outer-arc"],me.default["outer-arc_start-a"]),style:{borderColor:e}}),(0,Ge.jsx)("div",{className:(0,Qe.default)(me.default["outer-arc"],me.default["outer-arc_end-a"]),style:{borderColor:e}}),(0,Ge.jsx)("div",{className:(0,Qe.default)(me.default["outer-arc"],me.default["outer-arc_start-b"]),style:{borderColor:e}}),(0,Ge.jsx)("div",{className:(0,Qe.default)(me.default["outer-arc"],me.default["outer-arc_end-b"]),style:{borderColor:e}}),(0,Ge.jsx)("div",{className:(0,Qe.default)(me.default["outer-moon-a"]),style:{background:e}}),(0,Ge.jsx)("div",{className:(0,Qe.default)(me.default["outer-moon-b"]),style:{background:e}})]})]})}iu.Orbitals=hP;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Orbitals=void 0;var t=iu;Object.defineProperty(e,"Orbitals",{enumerable:!0,get:function(){return t.Orbitals}})})(Wx);var Xx={},ou={};const mP={"lds-ring":"_lds-ring_xgxdp_1"},gP=Object.freeze(Object.defineProperty({__proto__:null,default:mP},Symbol.toStringTag,{value:"Module"})),vP=pt(gP);var Kx=q&&q.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(ou,"__esModule",{value:!0});ou.Ring=void 0;const bg=ht,yP=Kx(mt),xP=Kx(vP);function bP({color:e="#7f58af",size:t=80,className:n,style:r}){const i=[...Array(4)].map((o,a)=>(0,bg.jsx)("div",{style:{borderColor:`${e} transparent transparent transparent`,width:t*.8,height:t*.8,margin:t*.1,borderWidth:t*.1}},a));return(0,bg.jsx)("div",{className:(0,yP.default)(xP.default["lds-ring"],n),style:{width:t,height:t,...r},children:i})}ou.Ring=bP;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Ring=void 0;var t=ou;Object.defineProperty(e,"Ring",{enumerable:!0,get:function(){return t.Ring}})})(Xx);var Qx={},au={};const wP={"lds-ripple":"_lds-ripple_1lgcf_1"},SP=Object.freeze(Object.defineProperty({__proto__:null,default:wP},Symbol.toStringTag,{value:"Module"})),_P=pt(SP);var Zx=q&&q.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(au,"__esModule",{value:!0});au.Ripple=void 0;const wg=ht,CP=Zx(mt),EP=Zx(_P);function kP({color:e="#7f58af",size:t=80,className:n,style:r}){const i=[...Array(2)].map((o,a)=>(0,wg.jsx)("div",{style:{borderColor:`${e}`,borderWidth:t*.05}},a));return(0,wg.jsx)("div",{className:(0,CP.default)(EP.default["lds-ripple"],n),style:{width:t,height:t,...r},children:i})}au.Ripple=kP;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Ripple=void 0;var t=au;Object.defineProperty(e,"Ripple",{enumerable:!0,get:function(){return t.Ripple}})})(Qx);var Jx={},su={};const TP={"lds-roller":"_lds-roller_ks1ij_1","div-after":"_div-after_ks1ij_11"},OP=Object.freeze(Object.defineProperty({__proto__:null,default:TP},Symbol.toStringTag,{value:"Module"})),PP=pt(OP);var eb=q&&q.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(su,"__esModule",{value:!0});su.Roller=void 0;const dc=ht,Sg=eb(mt),_g=eb(PP);function jP({color:e="#7f58af",className:t,style:n}){const r=[...Array(8)].map((i,o)=>(0,dc.jsx)("div",{children:(0,dc.jsx)("div",{className:(0,Sg.default)(_g.default["div-after"]),style:{background:e}})},o));return(0,dc.jsx)("div",{className:(0,Sg.default)(_g.default["lds-roller"],t),style:{...n},children:r})}su.Roller=jP;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Roller=void 0;var t=su;Object.defineProperty(e,"Roller",{enumerable:!0,get:function(){return t.Roller}})})(Jx);var tb={},lu={};const MP={"lds-spinner":"_lds-spinner_flf3t_1","div-after":"_div-after_flf3t_12"},IP=Object.freeze(Object.defineProperty({__proto__:null,default:MP},Symbol.toStringTag,{value:"Module"})),$P=pt(IP);var nb=q&&q.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(lu,"__esModule",{value:!0});lu.Spinner=void 0;const fc=ht,Cg=nb(mt),Eg=nb($P);function DP({color:e="#7f58af",className:t,style:n}){const r=[...Array(12)].map((i,o)=>(0,fc.jsx)("div",{children:(0,fc.jsx)("div",{className:(0,Cg.default)(Eg.default["div-after"]),style:{background:e}})},o));return(0,fc.jsx)("div",{className:(0,Cg.default)(Eg.default["lds-spinner"],t),style:{...n},children:r})}lu.Spinner=DP;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Spinner=void 0;var t=lu;Object.defineProperty(e,"Spinner",{enumerable:!0,get:function(){return t.Spinner}})})(tb);var rb={},uu={};const ib="_left_v9vlb_30",ob="_right_v9vlb_33",ab="_anim_v9vlb_37",RP={"lds-ouroboro":"_lds-ouroboro_v9vlb_1",left:ib,right:ob,anim:ab,"lds-ouroboro-rotate":"_lds-ouroboro-rotate_v9vlb_1"},AP=Object.freeze(Object.defineProperty({__proto__:null,anim:ab,default:RP,left:ib,right:ob},Symbol.toStringTag,{value:"Module"})),LP=pt(AP);var sb=q&&q.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(uu,"__esModule",{value:!0});uu.Ouroboro=void 0;const Vi=ht,Hi=sb(mt),Ui=sb(LP);function FP({color:e="#7f58af",style:t,className:n}){return(0,Vi.jsxs)("div",{className:(0,Hi.default)(Ui.default["lds-ouroboro"],n),style:{...t},children:[(0,Vi.jsx)("span",{className:(0,Hi.default)(Ui.default.left),children:(0,Vi.jsx)("span",{className:(0,Hi.default)(Ui.default.anim),style:{background:e}})}),(0,Vi.jsx)("span",{className:(0,Hi.default)(Ui.default.right),children:(0,Vi.jsx)("span",{className:(0,Hi.default)(Ui.default.anim),style:{background:e}})})]})}uu.Ouroboro=FP;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Ouroboro=void 0;var t=uu;Object.defineProperty(e,"Ouroboro",{enumerable:!0,get:function(){return t.Ouroboro}})})(rb);(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Ouroboro=e.Spinner=e.Roller=e.Ripple=e.Ring=e.Orbitals=e.Hourglass=e.Heart=e.Grid=e.Facebook=e.Ellipsis=e.DualRing=e.Default=e.Circle=void 0;const t=dx;Object.defineProperty(e,"Circle",{enumerable:!0,get:function(){return t.Circle}});const n=Mx;Object.defineProperty(e,"Default",{enumerable:!0,get:function(){return n.Default}});const r=$x;Object.defineProperty(e,"DualRing",{enumerable:!0,get:function(){return r.DualRing}});const i=Rx;Object.defineProperty(e,"Ellipsis",{enumerable:!0,get:function(){return i.Ellipsis}});const o=Lx;Object.defineProperty(e,"Facebook",{enumerable:!0,get:function(){return o.Facebook}});const a=zx;Object.defineProperty(e,"Grid",{enumerable:!0,get:function(){return a.Grid}});const l=Bx;Object.defineProperty(e,"Heart",{enumerable:!0,get:function(){return l.Heart}});const s=Hx;Object.defineProperty(e,"Hourglass",{enumerable:!0,get:function(){return s.Hourglass}});const u=Wx;Object.defineProperty(e,"Orbitals",{enumerable:!0,get:function(){return u.Orbitals}});const c=Xx;Object.defineProperty(e,"Ring",{enumerable:!0,get:function(){return c.Ring}});const d=Qx;Object.defineProperty(e,"Ripple",{enumerable:!0,get:function(){return d.Ripple}});const g=Jx;Object.defineProperty(e,"Roller",{enumerable:!0,get:function(){return g.Roller}});const m=tb;Object.defineProperty(e,"Spinner",{enumerable:!0,get:function(){return m.Spinner}});const v=rb;Object.defineProperty(e,"Ouroboro",{enumerable:!0,get:function(){return v.Ouroboro}})})(cx);const zP=()=>h.jsx(aO,{children:h.jsx(cx.Default,{color:"#6d433da8"})}),NP=gE`
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
`,BP=C.div`
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
`,VP=C.a`
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
`,HP=C.h2`
  margin-top: 20px;
  font-size: 30px;
  text-transform: uppercase;
  margin-bottom: 20px;
  color: #333;
  @media screen and (min-width: 768px) {
    font-size: 35px;
  }
`,UP=C.h3`
  text-transform: uppercase;
  position: absolute;
  bottom: 15px;
  left: 15px;
  color: #fff;
  margin: 0;
  font-family: var(--main-font);
  font-size: 1.1rem;
  font-weight: bold;
  text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.892);
  max-width: 80%;
`,WP=C.a`
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
`,GP=C.div`
  width: 40px;
  height: 40px;
  border: 2px solid white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`,YP=[{id:"bikes",title:"Велосипеди",image:"/Didiv/catalog/bikes.jpeg",big:!0},{id:"saddles",title:"Сідла",image:"/Didiv/catalog/saddles.jpeg"},{id:"wheels",title:"Колеса",image:"/Didiv/catalog/wheels.jpeg"},{id:"frames",title:"Рами",image:"/Didiv/catalog/frames.jpeg"},{id:"handlebars",title:"Керма",image:"/Didiv/catalog/handlebars.jpeg"},{id:"stems",title:"Виноси",image:"/Didiv/catalog/stems.jpeg"}],qP=()=>h.jsxs(h.Fragment,{children:[h.jsx(HP,{children:"Каталог"}),h.jsxs(BP,{children:[YP.map(e=>h.jsx(VP,{href:`Didiv/catalog/${e.id}`,bg:e.image,isBig:e.big,children:h.jsx(UP,{children:e.title})},e.id)),h.jsxs(WP,{href:"catalog",children:[h.jsx("p",{children:"Весь каталог"}),h.jsx(GP,{children:h.jsx(By,{size:24})})]})]})]});function kg(e){return e!==null&&typeof e=="object"&&"constructor"in e&&e.constructor===Object}function Xp(e={},t={}){const n=["__proto__","constructor","prototype"];Object.keys(t).filter(r=>n.indexOf(r)<0).forEach(r=>{typeof e[r]>"u"?e[r]=t[r]:kg(t[r])&&kg(e[r])&&Object.keys(t[r]).length>0&&Xp(e[r],t[r])})}const lb={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector(){return null},querySelectorAll(){return[]},getElementById(){return null},createEvent(){return{initEvent(){}}},createElement(){return{children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName(){return[]}}},createElementNS(){return{}},importNode(){return null},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function sn(){const e=typeof document<"u"?document:{};return Xp(e,lb),e}const XP={document:lb,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle(){return{getPropertyValue(){return""}}},Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia(){return{}},requestAnimationFrame(e){return typeof setTimeout>"u"?(e(),null):setTimeout(e,0)},cancelAnimationFrame(e){typeof setTimeout>"u"||clearTimeout(e)}};function it(){const e=typeof window<"u"?window:{};return Xp(e,XP),e}function KP(e=""){return e.trim().split(" ").filter(t=>!!t.trim())}function QP(e){const t=e;Object.keys(t).forEach(n=>{try{t[n]=null}catch{}try{delete t[n]}catch{}})}function ub(e,t=0){return setTimeout(e,t)}function Ys(){return Date.now()}function ZP(e){const t=it();let n;return t.getComputedStyle&&(n=t.getComputedStyle(e,null)),!n&&e.currentStyle&&(n=e.currentStyle),n||(n=e.style),n}function JP(e,t="x"){const n=it();let r,i,o;const a=ZP(e);return n.WebKitCSSMatrix?(i=a.transform||a.webkitTransform,i.split(",").length>6&&(i=i.split(", ").map(l=>l.replace(",",".")).join(", ")),o=new n.WebKitCSSMatrix(i==="none"?"":i)):(o=a.MozTransform||a.OTransform||a.MsTransform||a.msTransform||a.transform||a.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),r=o.toString().split(",")),t==="x"&&(n.WebKitCSSMatrix?i=o.m41:r.length===16?i=parseFloat(r[12]):i=parseFloat(r[4])),t==="y"&&(n.WebKitCSSMatrix?i=o.m42:r.length===16?i=parseFloat(r[13]):i=parseFloat(r[5])),i||0}function ja(e){return typeof e=="object"&&e!==null&&e.constructor&&Object.prototype.toString.call(e).slice(8,-1)==="Object"}function e3(e){return typeof window<"u"&&typeof window.HTMLElement<"u"?e instanceof HTMLElement:e&&(e.nodeType===1||e.nodeType===11)}function yt(...e){const t=Object(e[0]);for(let n=1;n<e.length;n+=1){const r=e[n];if(r!=null&&!e3(r)){const i=Object.keys(Object(r)).filter(o=>o!=="__proto__"&&o!=="constructor"&&o!=="prototype");for(let o=0,a=i.length;o<a;o+=1){const l=i[o],s=Object.getOwnPropertyDescriptor(r,l);s!==void 0&&s.enumerable&&(ja(t[l])&&ja(r[l])?r[l].__swiper__?t[l]=r[l]:yt(t[l],r[l]):!ja(t[l])&&ja(r[l])?(t[l]={},r[l].__swiper__?t[l]=r[l]:yt(t[l],r[l])):t[l]=r[l])}}}return t}function Rr(e,t,n){e.style.setProperty(t,n)}function cb({swiper:e,targetPosition:t,side:n}){const r=it(),i=-e.translate;let o=null,a;const l=e.params.speed;e.wrapperEl.style.scrollSnapType="none",r.cancelAnimationFrame(e.cssModeFrameID);const s=t>i?"next":"prev",u=(d,g)=>s==="next"&&d>=g||s==="prev"&&d<=g,c=()=>{a=new Date().getTime(),o===null&&(o=a);const d=Math.max(Math.min((a-o)/l,1),0),g=.5-Math.cos(d*Math.PI)/2;let m=i+g*(t-i);if(u(m,t)&&(m=t),e.wrapperEl.scrollTo({[n]:m}),u(m,t)){e.wrapperEl.style.overflow="hidden",e.wrapperEl.style.scrollSnapType="",setTimeout(()=>{e.wrapperEl.style.overflow="",e.wrapperEl.scrollTo({[n]:m})}),r.cancelAnimationFrame(e.cssModeFrameID);return}e.cssModeFrameID=r.requestAnimationFrame(c)};c()}function nn(e,t=""){const n=it(),r=[...e.children];return n.HTMLSlotElement&&e instanceof HTMLSlotElement&&r.push(...e.assignedElements()),t?r.filter(i=>i.matches(t)):r}function t3(e,t){const n=[t];for(;n.length>0;){const r=n.shift();if(e===r)return!0;n.push(...r.children,...r.shadowRoot?r.shadowRoot.children:[],...r.assignedElements?r.assignedElements():[])}}function n3(e,t){const n=it();let r=t.contains(e);return!r&&n.HTMLSlotElement&&t instanceof HTMLSlotElement&&(r=[...t.assignedElements()].includes(e),r||(r=t3(e,t))),r}function qs(e){try{console.warn(e);return}catch{}}function Xs(e,t=[]){const n=document.createElement(e);return n.classList.add(...Array.isArray(t)?t:KP(t)),n}function r3(e,t){const n=[];for(;e.previousElementSibling;){const r=e.previousElementSibling;t?r.matches(t)&&n.push(r):n.push(r),e=r}return n}function i3(e,t){const n=[];for(;e.nextElementSibling;){const r=e.nextElementSibling;t?r.matches(t)&&n.push(r):n.push(r),e=r}return n}function Yn(e,t){return it().getComputedStyle(e,null).getPropertyValue(t)}function Ks(e){let t=e,n;if(t){for(n=0;(t=t.previousSibling)!==null;)t.nodeType===1&&(n+=1);return n}}function db(e,t){const n=[];let r=e.parentElement;for(;r;)t?r.matches(t)&&n.push(r):n.push(r),r=r.parentElement;return n}function Jd(e,t,n){const r=it();return n?e[t==="width"?"offsetWidth":"offsetHeight"]+parseFloat(r.getComputedStyle(e,null).getPropertyValue(t==="width"?"margin-right":"margin-top"))+parseFloat(r.getComputedStyle(e,null).getPropertyValue(t==="width"?"margin-left":"margin-bottom")):e.offsetWidth}function De(e){return(Array.isArray(e)?e:[e]).filter(t=>!!t)}function Bo(e,t=""){typeof trustedTypes<"u"?e.innerHTML=trustedTypes.createPolicy("html",{createHTML:n=>n}).createHTML(t):e.innerHTML=t}function fb(e,t,n,r){return e.params.createElements&&Object.keys(r).forEach(i=>{if(!n[i]&&n.auto===!0){let o=nn(e.el,`.${r[i]}`)[0];o||(o=Xs("div",r[i]),o.className=r[i],e.el.append(o)),n[i]=o,t[i]=o}}),n}const Tg='<svg class="swiper-navigation-icon" width="11" height="20" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.38296 20.0762C0.111788 19.805 0.111788 19.3654 0.38296 19.0942L9.19758 10.2796L0.38296 1.46497C0.111788 1.19379 0.111788 0.754138 0.38296 0.482966C0.654131 0.211794 1.09379 0.211794 1.36496 0.482966L10.4341 9.55214C10.8359 9.9539 10.8359 10.6053 10.4341 11.007L1.36496 20.0762C1.09379 20.3474 0.654131 20.3474 0.38296 20.0762Z" fill="currentColor"/></svg>';function o3({swiper:e,extendParams:t,on:n,emit:r}){t({navigation:{nextEl:null,prevEl:null,addIcons:!0,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock",navigationDisabledClass:"swiper-navigation-disabled"}}),e.navigation={nextEl:null,prevEl:null,arrowSvg:Tg};function i(m){let v;return m&&typeof m=="string"&&e.isElement&&(v=e.el.querySelector(m)||e.hostEl.querySelector(m),v)?v:(m&&(typeof m=="string"&&(v=[...document.querySelectorAll(m)]),e.params.uniqueNavElements&&typeof m=="string"&&v&&v.length>1&&e.el.querySelectorAll(m).length===1?v=e.el.querySelector(m):v&&v.length===1&&(v=v[0])),m&&!v?m:v)}function o(m,v){const x=e.params.navigation;m=De(m),m.forEach(w=>{w&&(w.classList[v?"add":"remove"](...x.disabledClass.split(" ")),w.tagName==="BUTTON"&&(w.disabled=v),e.params.watchOverflow&&e.enabled&&w.classList[e.isLocked?"add":"remove"](x.lockClass))})}function a(){const{nextEl:m,prevEl:v}=e.navigation;if(e.params.loop){o(v,!1),o(m,!1);return}o(v,e.isBeginning&&!e.params.rewind),o(m,e.isEnd&&!e.params.rewind)}function l(m){m.preventDefault(),!(e.isBeginning&&!e.params.loop&&!e.params.rewind)&&(e.slidePrev(),r("navigationPrev"))}function s(m){m.preventDefault(),!(e.isEnd&&!e.params.loop&&!e.params.rewind)&&(e.slideNext(),r("navigationNext"))}function u(){const m=e.params.navigation;if(e.params.navigation=fb(e,e.originalParams.navigation,e.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),!(m.nextEl||m.prevEl))return;let v=i(m.nextEl),x=i(m.prevEl);Object.assign(e.navigation,{nextEl:v,prevEl:x}),v=De(v),x=De(x);const w=(f,p)=>{if(f){if(m.addIcons&&f.matches(".swiper-button-next,.swiper-button-prev")&&!f.querySelector("svg")){const y=document.createElement("div");Bo(y,Tg),f.appendChild(y.querySelector("svg")),y.remove()}f.addEventListener("click",p==="next"?s:l)}!e.enabled&&f&&f.classList.add(...m.lockClass.split(" "))};v.forEach(f=>w(f,"next")),x.forEach(f=>w(f,"prev"))}function c(){let{nextEl:m,prevEl:v}=e.navigation;m=De(m),v=De(v);const x=(w,f)=>{w.removeEventListener("click",f==="next"?s:l),w.classList.remove(...e.params.navigation.disabledClass.split(" "))};m.forEach(w=>x(w,"next")),v.forEach(w=>x(w,"prev"))}n("init",()=>{e.params.navigation.enabled===!1?g():(u(),a())}),n("toEdge fromEdge lock unlock",()=>{a()}),n("destroy",()=>{c()}),n("enable disable",()=>{let{nextEl:m,prevEl:v}=e.navigation;if(m=De(m),v=De(v),e.enabled){a();return}[...m,...v].filter(x=>!!x).forEach(x=>x.classList.add(e.params.navigation.lockClass))}),n("click",(m,v)=>{let{nextEl:x,prevEl:w}=e.navigation;x=De(x),w=De(w);const f=v.target;let p=w.includes(f)||x.includes(f);if(e.isElement&&!p){const y=v.path||v.composedPath&&v.composedPath();y&&(p=y.find(b=>x.includes(b)||w.includes(b)))}if(e.params.navigation.hideOnClick&&!p){if(e.pagination&&e.params.pagination&&e.params.pagination.clickable&&(e.pagination.el===f||e.pagination.el.contains(f)))return;let y;x.length?y=x[0].classList.contains(e.params.navigation.hiddenClass):w.length&&(y=w[0].classList.contains(e.params.navigation.hiddenClass)),r(y===!0?"navigationShow":"navigationHide"),[...x,...w].filter(b=>!!b).forEach(b=>b.classList.toggle(e.params.navigation.hiddenClass))}});const d=()=>{e.el.classList.remove(...e.params.navigation.navigationDisabledClass.split(" ")),u(),a()},g=()=>{e.el.classList.add(...e.params.navigation.navigationDisabledClass.split(" ")),c()};Object.assign(e.navigation,{enable:d,disable:g,update:a,init:u,destroy:c})}function Wi(e=""){return`.${e.trim().replace(/([\.:!+\/()[\]#>~*^$|=,'"@{}\\])/g,"\\$1").replace(/ /g,".")}`}function a3({swiper:e,extendParams:t,on:n,emit:r}){const i="swiper-pagination";t({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:f=>f,formatFractionTotal:f=>f,bulletClass:`${i}-bullet`,bulletActiveClass:`${i}-bullet-active`,modifierClass:`${i}-`,currentClass:`${i}-current`,totalClass:`${i}-total`,hiddenClass:`${i}-hidden`,progressbarFillClass:`${i}-progressbar-fill`,progressbarOppositeClass:`${i}-progressbar-opposite`,clickableClass:`${i}-clickable`,lockClass:`${i}-lock`,horizontalClass:`${i}-horizontal`,verticalClass:`${i}-vertical`,paginationDisabledClass:`${i}-disabled`}}),e.pagination={el:null,bullets:[]};let o,a=0;function l(){return!e.params.pagination.el||!e.pagination.el||Array.isArray(e.pagination.el)&&e.pagination.el.length===0}function s(f,p){const{bulletActiveClass:y}=e.params.pagination;f&&(f=f[`${p==="prev"?"previous":"next"}ElementSibling`],f&&(f.classList.add(`${y}-${p}`),f=f[`${p==="prev"?"previous":"next"}ElementSibling`],f&&f.classList.add(`${y}-${p}-${p}`)))}function u(f,p,y){if(f=f%y,p=p%y,p===f+1)return"next";if(p===f-1)return"previous"}function c(f){const p=f.target.closest(Wi(e.params.pagination.bulletClass));if(!p)return;f.preventDefault();const y=Ks(p)*e.params.slidesPerGroup;if(e.params.loop){if(e.realIndex===y)return;const b=u(e.realIndex,y,e.slides.length);b==="next"?e.slideNext():b==="previous"?e.slidePrev():e.slideToLoop(y)}else e.slideTo(y)}function d(){const f=e.rtl,p=e.params.pagination;if(l())return;let y=e.pagination.el;y=De(y);let b,E;const k=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.slides.length,_=e.params.loop?Math.ceil(k/e.params.slidesPerGroup):e.snapGrid.length;if(e.params.loop?(E=e.previousRealIndex||0,b=e.params.slidesPerGroup>1?Math.floor(e.realIndex/e.params.slidesPerGroup):e.realIndex):typeof e.snapIndex<"u"?(b=e.snapIndex,E=e.previousSnapIndex):(E=e.previousIndex||0,b=e.activeIndex||0),p.type==="bullets"&&e.pagination.bullets&&e.pagination.bullets.length>0){const S=e.pagination.bullets;let M,j,I;if(p.dynamicBullets&&(o=Jd(S[0],e.isHorizontal()?"width":"height",!0),y.forEach(P=>{P.style[e.isHorizontal()?"width":"height"]=`${o*(p.dynamicMainBullets+4)}px`}),p.dynamicMainBullets>1&&E!==void 0&&(a+=b-(E||0),a>p.dynamicMainBullets-1?a=p.dynamicMainBullets-1:a<0&&(a=0)),M=Math.max(b-a,0),j=M+(Math.min(S.length,p.dynamicMainBullets)-1),I=(j+M)/2),S.forEach(P=>{const $=[...["","-next","-next-next","-prev","-prev-prev","-main"].map(A=>`${p.bulletActiveClass}${A}`)].map(A=>typeof A=="string"&&A.includes(" ")?A.split(" "):A).flat();P.classList.remove(...$)}),y.length>1)S.forEach(P=>{const $=Ks(P);$===b?P.classList.add(...p.bulletActiveClass.split(" ")):e.isElement&&P.setAttribute("part","bullet"),p.dynamicBullets&&($>=M&&$<=j&&P.classList.add(...`${p.bulletActiveClass}-main`.split(" ")),$===M&&s(P,"prev"),$===j&&s(P,"next"))});else{const P=S[b];if(P&&P.classList.add(...p.bulletActiveClass.split(" ")),e.isElement&&S.forEach(($,A)=>{$.setAttribute("part",A===b?"bullet-active":"bullet")}),p.dynamicBullets){const $=S[M],A=S[j];for(let R=M;R<=j;R+=1)S[R]&&S[R].classList.add(...`${p.bulletActiveClass}-main`.split(" "));s($,"prev"),s(A,"next")}}if(p.dynamicBullets){const P=Math.min(S.length,p.dynamicMainBullets+4),$=(o*P-o)/2-I*o,A=f?"right":"left";S.forEach(R=>{R.style[e.isHorizontal()?A:"top"]=`${$}px`})}}y.forEach((S,M)=>{if(p.type==="fraction"&&(S.querySelectorAll(Wi(p.currentClass)).forEach(j=>{j.textContent=p.formatFractionCurrent(b+1)}),S.querySelectorAll(Wi(p.totalClass)).forEach(j=>{j.textContent=p.formatFractionTotal(_)})),p.type==="progressbar"){let j;p.progressbarOpposite?j=e.isHorizontal()?"vertical":"horizontal":j=e.isHorizontal()?"horizontal":"vertical";const I=(b+1)/_;let P=1,$=1;j==="horizontal"?P=I:$=I,S.querySelectorAll(Wi(p.progressbarFillClass)).forEach(A=>{A.style.transform=`translate3d(0,0,0) scaleX(${P}) scaleY(${$})`,A.style.transitionDuration=`${e.params.speed}ms`})}p.type==="custom"&&p.renderCustom?(Bo(S,p.renderCustom(e,b+1,_)),M===0&&r("paginationRender",S)):(M===0&&r("paginationRender",S),r("paginationUpdate",S)),e.params.watchOverflow&&e.enabled&&S.classList[e.isLocked?"add":"remove"](p.lockClass)})}function g(){const f=e.params.pagination;if(l())return;const p=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.grid&&e.params.grid.rows>1?e.slides.length/Math.ceil(e.params.grid.rows):e.slides.length;let y=e.pagination.el;y=De(y);let b="";if(f.type==="bullets"){let E=e.params.loop?Math.ceil(p/e.params.slidesPerGroup):e.snapGrid.length;e.params.freeMode&&e.params.freeMode.enabled&&E>p&&(E=p);for(let k=0;k<E;k+=1)f.renderBullet?b+=f.renderBullet.call(e,k,f.bulletClass):b+=`<${f.bulletElement} ${e.isElement?'part="bullet"':""} class="${f.bulletClass}"></${f.bulletElement}>`}f.type==="fraction"&&(f.renderFraction?b=f.renderFraction.call(e,f.currentClass,f.totalClass):b=`<span class="${f.currentClass}"></span> / <span class="${f.totalClass}"></span>`),f.type==="progressbar"&&(f.renderProgressbar?b=f.renderProgressbar.call(e,f.progressbarFillClass):b=`<span class="${f.progressbarFillClass}"></span>`),e.pagination.bullets=[],y.forEach(E=>{f.type!=="custom"&&Bo(E,b||""),f.type==="bullets"&&e.pagination.bullets.push(...E.querySelectorAll(Wi(f.bulletClass)))}),f.type!=="custom"&&r("paginationRender",y[0])}function m(){e.params.pagination=fb(e,e.originalParams.pagination,e.params.pagination,{el:"swiper-pagination"});const f=e.params.pagination;if(!f.el)return;let p;typeof f.el=="string"&&e.isElement&&(p=e.el.querySelector(f.el)),!p&&typeof f.el=="string"&&(p=[...document.querySelectorAll(f.el)]),p||(p=f.el),!(!p||p.length===0)&&(e.params.uniqueNavElements&&typeof f.el=="string"&&Array.isArray(p)&&p.length>1&&(p=[...e.el.querySelectorAll(f.el)],p.length>1&&(p=p.find(y=>db(y,".swiper")[0]===e.el))),Array.isArray(p)&&p.length===1&&(p=p[0]),Object.assign(e.pagination,{el:p}),p=De(p),p.forEach(y=>{f.type==="bullets"&&f.clickable&&y.classList.add(...(f.clickableClass||"").split(" ")),y.classList.add(f.modifierClass+f.type),y.classList.add(e.isHorizontal()?f.horizontalClass:f.verticalClass),f.type==="bullets"&&f.dynamicBullets&&(y.classList.add(`${f.modifierClass}${f.type}-dynamic`),a=0,f.dynamicMainBullets<1&&(f.dynamicMainBullets=1)),f.type==="progressbar"&&f.progressbarOpposite&&y.classList.add(f.progressbarOppositeClass),f.clickable&&y.addEventListener("click",c),e.enabled||y.classList.add(f.lockClass)}))}function v(){const f=e.params.pagination;if(l())return;let p=e.pagination.el;p&&(p=De(p),p.forEach(y=>{y.classList.remove(f.hiddenClass),y.classList.remove(f.modifierClass+f.type),y.classList.remove(e.isHorizontal()?f.horizontalClass:f.verticalClass),f.clickable&&(y.classList.remove(...(f.clickableClass||"").split(" ")),y.removeEventListener("click",c))})),e.pagination.bullets&&e.pagination.bullets.forEach(y=>y.classList.remove(...f.bulletActiveClass.split(" ")))}n("changeDirection",()=>{if(!e.pagination||!e.pagination.el)return;const f=e.params.pagination;let{el:p}=e.pagination;p=De(p),p.forEach(y=>{y.classList.remove(f.horizontalClass,f.verticalClass),y.classList.add(e.isHorizontal()?f.horizontalClass:f.verticalClass)})}),n("init",()=>{e.params.pagination.enabled===!1?w():(m(),g(),d())}),n("activeIndexChange",()=>{typeof e.snapIndex>"u"&&d()}),n("snapIndexChange",()=>{d()}),n("snapGridLengthChange",()=>{g(),d()}),n("destroy",()=>{v()}),n("enable disable",()=>{let{el:f}=e.pagination;f&&(f=De(f),f.forEach(p=>p.classList[e.enabled?"remove":"add"](e.params.pagination.lockClass)))}),n("lock unlock",()=>{d()}),n("click",(f,p)=>{const y=p.target,b=De(e.pagination.el);if(e.params.pagination.el&&e.params.pagination.hideOnClick&&b&&b.length>0&&!y.classList.contains(e.params.pagination.bulletClass)){if(e.navigation&&(e.navigation.nextEl&&y===e.navigation.nextEl||e.navigation.prevEl&&y===e.navigation.prevEl))return;const E=b[0].classList.contains(e.params.pagination.hiddenClass);r(E===!0?"paginationShow":"paginationHide"),b.forEach(k=>k.classList.toggle(e.params.pagination.hiddenClass))}});const x=()=>{e.el.classList.remove(e.params.pagination.paginationDisabledClass);let{el:f}=e.pagination;f&&(f=De(f),f.forEach(p=>p.classList.remove(e.params.pagination.paginationDisabledClass))),m(),g(),d()},w=()=>{e.el.classList.add(e.params.pagination.paginationDisabledClass);let{el:f}=e.pagination;f&&(f=De(f),f.forEach(p=>p.classList.add(e.params.pagination.paginationDisabledClass))),v()};Object.assign(e.pagination,{enable:x,disable:w,render:g,update:d,init:m,destroy:v})}function s3({swiper:e,extendParams:t,on:n,emit:r,params:i}){e.autoplay={running:!1,paused:!1,timeLeft:0},t({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!1,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}});let o,a,l=i&&i.autoplay?i.autoplay.delay:3e3,s=i&&i.autoplay?i.autoplay.delay:3e3,u,c=new Date().getTime(),d,g,m,v,x,w;function f(L){!e||e.destroyed||!e.wrapperEl||L.target===e.wrapperEl&&(e.wrapperEl.removeEventListener("transitionend",f),!(w||L.detail&&L.detail.bySwiperTouchMove)&&M())}const p=()=>{if(e.destroyed||!e.autoplay.running)return;e.autoplay.paused?d=!0:d&&(s=u,d=!1);const L=e.autoplay.paused?u:c+s-new Date().getTime();e.autoplay.timeLeft=L,r("autoplayTimeLeft",L,L/l),a=requestAnimationFrame(()=>{p()})},y=()=>{let L;return e.virtual&&e.params.virtual.enabled?L=e.slides.find(D=>D.classList.contains("swiper-slide-active")):L=e.slides[e.activeIndex],L?parseInt(L.getAttribute("data-swiper-autoplay"),10):void 0},b=()=>{let L=e.params.autoplay.delay;const O=y();return!Number.isNaN(O)&&O>0&&(L=O),L},E=L=>{if(e.destroyed||!e.autoplay.running)return;cancelAnimationFrame(a),p();let O=L;typeof O>"u"&&(O=b(),l=O,s=O),u=O;const D=e.params.speed,N=()=>{!e||e.destroyed||(e.params.autoplay.reverseDirection?!e.isBeginning||e.params.loop||e.params.rewind?(e.slidePrev(D,!0,!0),r("autoplay")):e.params.autoplay.stopOnLastSlide||(e.slideTo(e.slides.length-1,D,!0,!0),r("autoplay")):!e.isEnd||e.params.loop||e.params.rewind?(e.slideNext(D,!0,!0),r("autoplay")):e.params.autoplay.stopOnLastSlide||(e.slideTo(0,D,!0,!0),r("autoplay")),e.params.cssMode&&(c=new Date().getTime(),requestAnimationFrame(()=>{E()})))};return O>0?(clearTimeout(o),o=setTimeout(()=>{N()},O)):requestAnimationFrame(()=>{N()}),O},k=()=>{c=new Date().getTime(),e.autoplay.running=!0,E(),r("autoplayStart")},_=()=>{e.autoplay.running=!1,clearTimeout(o),cancelAnimationFrame(a),r("autoplayStop")},S=(L,O)=>{if(e.destroyed||!e.autoplay.running)return;clearTimeout(o),L||(x=!0);const D=()=>{r("autoplayPause"),e.params.autoplay.waitForTransition?e.wrapperEl.addEventListener("transitionend",f):M()};if(e.autoplay.paused=!0,O){D();return}u=(u||e.params.autoplay.delay)-(new Date().getTime()-c),!(e.isEnd&&u<0&&!e.params.loop)&&(u<0&&(u=0),D())},M=()=>{e.isEnd&&u<0&&!e.params.loop||e.destroyed||!e.autoplay.running||(c=new Date().getTime(),x?(x=!1,E(u)):E(),e.autoplay.paused=!1,r("autoplayResume"))},j=()=>{if(e.destroyed||!e.autoplay.running)return;const L=sn();L.visibilityState==="hidden"&&(x=!0,S(!0)),L.visibilityState==="visible"&&M()},I=L=>{L.pointerType==="mouse"&&(x=!0,w=!0,!(e.animating||e.autoplay.paused)&&S(!0))},P=L=>{L.pointerType==="mouse"&&(w=!1,e.autoplay.paused&&M())},$=()=>{e.params.autoplay.pauseOnMouseEnter&&(e.el.addEventListener("pointerenter",I),e.el.addEventListener("pointerleave",P))},A=()=>{e.el&&typeof e.el!="string"&&(e.el.removeEventListener("pointerenter",I),e.el.removeEventListener("pointerleave",P))},R=()=>{sn().addEventListener("visibilitychange",j)},F=()=>{sn().removeEventListener("visibilitychange",j)};n("init",()=>{e.params.autoplay.enabled&&($(),R(),k())}),n("destroy",()=>{A(),F(),e.autoplay.running&&_()}),n("_freeModeStaticRelease",()=>{(m||x)&&M()}),n("_freeModeNoMomentumRelease",()=>{e.params.autoplay.disableOnInteraction?_():S(!0,!0)}),n("beforeTransitionStart",(L,O,D)=>{e.destroyed||!e.autoplay.running||(D||!e.params.autoplay.disableOnInteraction?S(!0,!0):_())}),n("sliderFirstMove",()=>{if(!(e.destroyed||!e.autoplay.running)){if(e.params.autoplay.disableOnInteraction){_();return}g=!0,m=!1,x=!1,v=setTimeout(()=>{x=!0,m=!0,S(!0)},200)}}),n("touchEnd",()=>{if(!(e.destroyed||!e.autoplay.running||!g)){if(clearTimeout(v),clearTimeout(o),e.params.autoplay.disableOnInteraction){m=!1,g=!1;return}m&&e.params.cssMode&&M(),m=!1,g=!1}}),n("slideChange",()=>{e.destroyed||!e.autoplay.running||e.autoplay.paused&&(u=b(),l=b())}),Object.assign(e.autoplay,{start:k,stop:_,pause:S,resume:M})}let pc;function l3(){const e=it(),t=sn();return{smoothScroll:t.documentElement&&t.documentElement.style&&"scrollBehavior"in t.documentElement.style,touch:!!("ontouchstart"in e||e.DocumentTouch&&t instanceof e.DocumentTouch)}}function pb(){return pc||(pc=l3()),pc}let hc;function u3({userAgent:e}={}){const t=pb(),n=it(),r=n.navigator.platform,i=e||n.navigator.userAgent,o={ios:!1,android:!1},a=n.screen.width,l=n.screen.height,s=i.match(/(Android);?[\s\/]+([\d.]+)?/);let u=i.match(/(iPad)(?!\1).*OS\s([\d_]+)/);const c=i.match(/(iPod)(.*OS\s([\d_]+))?/),d=!u&&i.match(/(iPhone\sOS|iOS)\s([\d_]+)/),g=r==="Win32";let m=r==="MacIntel";const v=["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"];return!u&&m&&t.touch&&v.indexOf(`${a}x${l}`)>=0&&(u=i.match(/(Version)\/([\d.]+)/),u||(u=[0,1,"13_0_0"]),m=!1),s&&!g&&(o.os="android",o.android=!0),(u||d||c)&&(o.os="ios",o.ios=!0),o}function hb(e={}){return hc||(hc=u3(e)),hc}let mc;function c3(){const e=it(),t=hb();let n=!1;function r(){const l=e.navigator.userAgent.toLowerCase();return l.indexOf("safari")>=0&&l.indexOf("chrome")<0&&l.indexOf("android")<0}if(r()){const l=String(e.navigator.userAgent);if(l.includes("Version/")){const[s,u]=l.split("Version/")[1].split(" ")[0].split(".").map(c=>Number(c));n=s<16||s===16&&u<2}}const i=/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent),o=r(),a=o||i&&t.ios;return{isSafari:n||o,needPerspectiveFix:n,need3dFix:a,isWebView:i}}function mb(){return mc||(mc=c3()),mc}function d3({swiper:e,on:t,emit:n}){const r=it();let i=null,o=null;const a=()=>{!e||e.destroyed||!e.initialized||(n("beforeResize"),n("resize"))},l=()=>{!e||e.destroyed||!e.initialized||(i=new ResizeObserver(c=>{o=r.requestAnimationFrame(()=>{const{width:d,height:g}=e;let m=d,v=g;c.forEach(({contentBoxSize:x,contentRect:w,target:f})=>{f&&f!==e.el||(m=w?w.width:(x[0]||x).inlineSize,v=w?w.height:(x[0]||x).blockSize)}),(m!==d||v!==g)&&a()})}),i.observe(e.el))},s=()=>{o&&r.cancelAnimationFrame(o),i&&i.unobserve&&e.el&&(i.unobserve(e.el),i=null)},u=()=>{!e||e.destroyed||!e.initialized||n("orientationchange")};t("init",()=>{if(e.params.resizeObserver&&typeof r.ResizeObserver<"u"){l();return}r.addEventListener("resize",a),r.addEventListener("orientationchange",u)}),t("destroy",()=>{s(),r.removeEventListener("resize",a),r.removeEventListener("orientationchange",u)})}function f3({swiper:e,extendParams:t,on:n,emit:r}){const i=[],o=it(),a=(u,c={})=>{const d=o.MutationObserver||o.WebkitMutationObserver,g=new d(m=>{if(e.__preventObserver__)return;if(m.length===1){r("observerUpdate",m[0]);return}const v=function(){r("observerUpdate",m[0])};o.requestAnimationFrame?o.requestAnimationFrame(v):o.setTimeout(v,0)});g.observe(u,{attributes:typeof c.attributes>"u"?!0:c.attributes,childList:e.isElement||(typeof c.childList>"u"?!0:c).childList,characterData:typeof c.characterData>"u"?!0:c.characterData}),i.push(g)},l=()=>{if(e.params.observer){if(e.params.observeParents){const u=db(e.hostEl);for(let c=0;c<u.length;c+=1)a(u[c])}a(e.hostEl,{childList:e.params.observeSlideChildren}),a(e.wrapperEl,{attributes:!1})}},s=()=>{i.forEach(u=>{u.disconnect()}),i.splice(0,i.length)};t({observer:!1,observeParents:!1,observeSlideChildren:!1}),n("init",l),n("destroy",s)}var p3={on(e,t,n){const r=this;if(!r.eventsListeners||r.destroyed||typeof t!="function")return r;const i=n?"unshift":"push";return e.split(" ").forEach(o=>{r.eventsListeners[o]||(r.eventsListeners[o]=[]),r.eventsListeners[o][i](t)}),r},once(e,t,n){const r=this;if(!r.eventsListeners||r.destroyed||typeof t!="function")return r;function i(...o){r.off(e,i),i.__emitterProxy&&delete i.__emitterProxy,t.apply(r,o)}return i.__emitterProxy=t,r.on(e,i,n)},onAny(e,t){const n=this;if(!n.eventsListeners||n.destroyed||typeof e!="function")return n;const r=t?"unshift":"push";return n.eventsAnyListeners.indexOf(e)<0&&n.eventsAnyListeners[r](e),n},offAny(e){const t=this;if(!t.eventsListeners||t.destroyed||!t.eventsAnyListeners)return t;const n=t.eventsAnyListeners.indexOf(e);return n>=0&&t.eventsAnyListeners.splice(n,1),t},off(e,t){const n=this;return!n.eventsListeners||n.destroyed||!n.eventsListeners||e.split(" ").forEach(r=>{typeof t>"u"?n.eventsListeners[r]=[]:n.eventsListeners[r]&&n.eventsListeners[r].forEach((i,o)=>{(i===t||i.__emitterProxy&&i.__emitterProxy===t)&&n.eventsListeners[r].splice(o,1)})}),n},emit(...e){const t=this;if(!t.eventsListeners||t.destroyed||!t.eventsListeners)return t;let n,r,i;return typeof e[0]=="string"||Array.isArray(e[0])?(n=e[0],r=e.slice(1,e.length),i=t):(n=e[0].events,r=e[0].data,i=e[0].context||t),r.unshift(i),(Array.isArray(n)?n:n.split(" ")).forEach(a=>{t.eventsAnyListeners&&t.eventsAnyListeners.length&&t.eventsAnyListeners.forEach(l=>{l.apply(i,[a,...r])}),t.eventsListeners&&t.eventsListeners[a]&&t.eventsListeners[a].forEach(l=>{l.apply(i,r)})}),t}};function h3(){const e=this;let t,n;const r=e.el;typeof e.params.width<"u"&&e.params.width!==null?t=e.params.width:t=r.clientWidth,typeof e.params.height<"u"&&e.params.height!==null?n=e.params.height:n=r.clientHeight,!(t===0&&e.isHorizontal()||n===0&&e.isVertical())&&(t=t-parseInt(Yn(r,"padding-left")||0,10)-parseInt(Yn(r,"padding-right")||0,10),n=n-parseInt(Yn(r,"padding-top")||0,10)-parseInt(Yn(r,"padding-bottom")||0,10),Number.isNaN(t)&&(t=0),Number.isNaN(n)&&(n=0),Object.assign(e,{width:t,height:n,size:e.isHorizontal()?t:n}))}function m3(){const e=this;function t(j,I){return parseFloat(j.getPropertyValue(e.getDirectionLabel(I))||0)}const n=e.params,{wrapperEl:r,slidesEl:i,rtlTranslate:o,wrongRTL:a}=e,l=e.virtual&&n.virtual.enabled,s=l?e.virtual.slides.length:e.slides.length,u=nn(i,`.${e.params.slideClass}, swiper-slide`),c=l?e.virtual.slides.length:u.length;let d=[];const g=[],m=[];let v=n.slidesOffsetBefore;typeof v=="function"&&(v=n.slidesOffsetBefore.call(e));let x=n.slidesOffsetAfter;typeof x=="function"&&(x=n.slidesOffsetAfter.call(e));const w=e.snapGrid.length,f=e.slidesGrid.length,p=e.size-v-x;let y=n.spaceBetween,b=-v,E=0,k=0;if(typeof p>"u")return;typeof y=="string"&&y.indexOf("%")>=0?y=parseFloat(y.replace("%",""))/100*p:typeof y=="string"&&(y=parseFloat(y)),e.virtualSize=-y-v-x,u.forEach(j=>{o?j.style.marginLeft="":j.style.marginRight="",j.style.marginBottom="",j.style.marginTop=""}),n.centeredSlides&&n.cssMode&&(Rr(r,"--swiper-centered-offset-before",""),Rr(r,"--swiper-centered-offset-after","")),n.cssMode&&(Rr(r,"--swiper-slides-offset-before",`${v}px`),Rr(r,"--swiper-slides-offset-after",`${x}px`));const _=n.grid&&n.grid.rows>1&&e.grid;_?e.grid.initSlides(u):e.grid&&e.grid.unsetSlides();let S;const M=n.slidesPerView==="auto"&&n.breakpoints&&Object.keys(n.breakpoints).filter(j=>typeof n.breakpoints[j].slidesPerView<"u").length>0;for(let j=0;j<c;j+=1){S=0;const I=u[j];if(!(I&&(_&&e.grid.updateSlide(j,I,u),Yn(I,"display")==="none"))){if(l&&n.slidesPerView==="auto")n.virtual.slidesPerViewAutoSlideSize&&(S=n.virtual.slidesPerViewAutoSlideSize),S&&I&&(n.roundLengths&&(S=Math.floor(S)),I.style[e.getDirectionLabel("width")]=`${S}px`);else if(n.slidesPerView==="auto"){M&&(I.style[e.getDirectionLabel("width")]="");const P=getComputedStyle(I),$=I.style.transform,A=I.style.webkitTransform;if($&&(I.style.transform="none"),A&&(I.style.webkitTransform="none"),n.roundLengths)S=e.isHorizontal()?Jd(I,"width",!0):Jd(I,"height",!0);else{const R=t(P,"width"),F=t(P,"padding-left"),L=t(P,"padding-right"),O=t(P,"margin-left"),D=t(P,"margin-right"),N=P.getPropertyValue("box-sizing");if(N&&N==="border-box")S=R+O+D;else{const{clientWidth:V,offsetWidth:H}=I;S=R+F+L+O+D+(H-V)}}$&&(I.style.transform=$),A&&(I.style.webkitTransform=A),n.roundLengths&&(S=Math.floor(S))}else S=(p-(n.slidesPerView-1)*y)/n.slidesPerView,n.roundLengths&&(S=Math.floor(S)),I&&(I.style[e.getDirectionLabel("width")]=`${S}px`);I&&(I.swiperSlideSize=S),m.push(S),n.centeredSlides?(b=b+S/2+E/2+y,E===0&&j!==0&&(b=b-p/2-y),j===0&&(b=b-p/2-y),Math.abs(b)<1/1e3&&(b=0),n.roundLengths&&(b=Math.floor(b)),k%n.slidesPerGroup===0&&d.push(b),g.push(b)):(n.roundLengths&&(b=Math.floor(b)),(k-Math.min(e.params.slidesPerGroupSkip,k))%e.params.slidesPerGroup===0&&d.push(b),g.push(b),b=b+S+y),e.virtualSize+=S+y,E=S,k+=1}}if(e.virtualSize=Math.max(e.virtualSize,p)+x,o&&a&&(n.effect==="slide"||n.effect==="coverflow")&&(r.style.width=`${e.virtualSize+y}px`),n.setWrapperSize&&(r.style[e.getDirectionLabel("width")]=`${e.virtualSize+y}px`),_&&e.grid.updateWrapperSize(S,d),!n.centeredSlides){const j=n.slidesPerView!=="auto"&&n.slidesPerView%1!==0,I=n.snapToSlideEdge&&!n.loop&&(n.slidesPerView==="auto"||j);let P=d.length;if(I){let A;if(n.slidesPerView==="auto"){A=1;let R=0;for(let F=m.length-1;F>=0&&(R+=m[F]+(F<m.length-1?y:0),R<=p);F-=1)A=m.length-F}else A=Math.floor(n.slidesPerView);P=Math.max(c-A,0)}const $=[];for(let A=0;A<d.length;A+=1){let R=d[A];n.roundLengths&&(R=Math.floor(R)),I?A<=P&&$.push(R):d[A]<=e.virtualSize-p&&$.push(R)}d=$,Math.floor(e.virtualSize-p)-Math.floor(d[d.length-1])>1&&(I||d.push(e.virtualSize-p))}if(l&&n.loop){const j=m[0]+y;if(n.slidesPerGroup>1){const I=Math.ceil((e.virtual.slidesBefore+e.virtual.slidesAfter)/n.slidesPerGroup),P=j*n.slidesPerGroup;for(let $=0;$<I;$+=1)d.push(d[d.length-1]+P)}for(let I=0;I<e.virtual.slidesBefore+e.virtual.slidesAfter;I+=1)n.slidesPerGroup===1&&d.push(d[d.length-1]+j),g.push(g[g.length-1]+j),e.virtualSize+=j}if(d.length===0&&(d=[0]),y!==0){const j=e.isHorizontal()&&o?"marginLeft":e.getDirectionLabel("marginRight");u.filter((I,P)=>!n.cssMode||n.loop?!0:P!==u.length-1).forEach(I=>{I.style[j]=`${y}px`})}if(n.centeredSlides&&n.centeredSlidesBounds){let j=0;m.forEach(P=>{j+=P+(y||0)}),j-=y;const I=j>p?j-p:0;d=d.map(P=>P<=0?-v:P>I?I+x:P)}if(n.centerInsufficientSlides){let j=0;if(m.forEach(I=>{j+=I+(y||0)}),j-=y,j<p){const I=(p-j)/2;d.forEach((P,$)=>{d[$]=P-I}),g.forEach((P,$)=>{g[$]=P+I})}}if(Object.assign(e,{slides:u,snapGrid:d,slidesGrid:g,slidesSizesGrid:m}),n.centeredSlides&&n.cssMode&&!n.centeredSlidesBounds){Rr(r,"--swiper-centered-offset-before",`${-d[0]}px`),Rr(r,"--swiper-centered-offset-after",`${e.size/2-m[m.length-1]/2}px`);const j=-e.snapGrid[0],I=-e.slidesGrid[0];e.snapGrid=e.snapGrid.map(P=>P+j),e.slidesGrid=e.slidesGrid.map(P=>P+I)}if(c!==s&&e.emit("slidesLengthChange"),d.length!==w&&(e.params.watchOverflow&&e.checkOverflow(),e.emit("snapGridLengthChange")),g.length!==f&&e.emit("slidesGridLengthChange"),n.watchSlidesProgress&&e.updateSlidesOffset(),e.emit("slidesUpdated"),!l&&!n.cssMode&&(n.effect==="slide"||n.effect==="fade")){const j=`${n.containerModifierClass}backface-hidden`,I=e.el.classList.contains(j);c<=n.maxBackfaceHiddenSlides?I||e.el.classList.add(j):I&&e.el.classList.remove(j)}}function g3(e){const t=this,n=[],r=t.virtual&&t.params.virtual.enabled;let i=0,o;typeof e=="number"?t.setTransition(e):e===!0&&t.setTransition(t.params.speed);const a=l=>r?t.slides[t.getSlideIndexByData(l)]:t.slides[l];if(t.params.slidesPerView!=="auto"&&t.params.slidesPerView>1)if(t.params.centeredSlides)(t.visibleSlides||[]).forEach(l=>{n.push(l)});else for(o=0;o<Math.ceil(t.params.slidesPerView);o+=1){const l=t.activeIndex+o;if(l>t.slides.length&&!r)break;n.push(a(l))}else n.push(a(t.activeIndex));for(o=0;o<n.length;o+=1)if(typeof n[o]<"u"){const l=n[o].offsetHeight;i=l>i?l:i}(i||i===0)&&(t.wrapperEl.style.height=`${i}px`)}function v3(){const e=this,t=e.slides,n=e.isElement?e.isHorizontal()?e.wrapperEl.offsetLeft:e.wrapperEl.offsetTop:0;for(let r=0;r<t.length;r+=1)t[r].swiperSlideOffset=(e.isHorizontal()?t[r].offsetLeft:t[r].offsetTop)-n-e.cssOverflowAdjustment()}const Og=(e,t,n)=>{t&&!e.classList.contains(n)?e.classList.add(n):!t&&e.classList.contains(n)&&e.classList.remove(n)};function y3(e=this&&this.translate||0){const t=this,n=t.params,{slides:r,rtlTranslate:i,snapGrid:o}=t;if(r.length===0)return;typeof r[0].swiperSlideOffset>"u"&&t.updateSlidesOffset();let a=-e;i&&(a=e),t.visibleSlidesIndexes=[],t.visibleSlides=[];let l=n.spaceBetween;typeof l=="string"&&l.indexOf("%")>=0?l=parseFloat(l.replace("%",""))/100*t.size:typeof l=="string"&&(l=parseFloat(l));for(let s=0;s<r.length;s+=1){const u=r[s];let c=u.swiperSlideOffset;n.cssMode&&n.centeredSlides&&(c-=r[0].swiperSlideOffset);const d=(a+(n.centeredSlides?t.minTranslate():0)-c)/(u.swiperSlideSize+l),g=(a-o[0]+(n.centeredSlides?t.minTranslate():0)-c)/(u.swiperSlideSize+l),m=-(a-c),v=m+t.slidesSizesGrid[s],x=m>=0&&m<=t.size-t.slidesSizesGrid[s],w=m>=0&&m<t.size-1||v>1&&v<=t.size||m<=0&&v>=t.size;w&&(t.visibleSlides.push(u),t.visibleSlidesIndexes.push(s)),Og(u,w,n.slideVisibleClass),Og(u,x,n.slideFullyVisibleClass),u.progress=i?-d:d,u.originalProgress=i?-g:g}}function x3(e){const t=this;if(typeof e>"u"){const c=t.rtlTranslate?-1:1;e=t&&t.translate&&t.translate*c||0}const n=t.params,r=t.maxTranslate()-t.minTranslate();let{progress:i,isBeginning:o,isEnd:a,progressLoop:l}=t;const s=o,u=a;if(r===0)i=0,o=!0,a=!0;else{i=(e-t.minTranslate())/r;const c=Math.abs(e-t.minTranslate())<1,d=Math.abs(e-t.maxTranslate())<1;o=c||i<=0,a=d||i>=1,c&&(i=0),d&&(i=1)}if(n.loop){const c=t.getSlideIndexByData(0),d=t.getSlideIndexByData(t.slides.length-1),g=t.slidesGrid[c],m=t.slidesGrid[d],v=t.slidesGrid[t.slidesGrid.length-1],x=Math.abs(e);x>=g?l=(x-g)/v:l=(x+v-m)/v,l>1&&(l-=1)}Object.assign(t,{progress:i,progressLoop:l,isBeginning:o,isEnd:a}),(n.watchSlidesProgress||n.centeredSlides&&n.autoHeight)&&t.updateSlidesProgress(e),o&&!s&&t.emit("reachBeginning toEdge"),a&&!u&&t.emit("reachEnd toEdge"),(s&&!o||u&&!a)&&t.emit("fromEdge"),t.emit("progress",i)}const gc=(e,t,n)=>{t&&!e.classList.contains(n)?e.classList.add(n):!t&&e.classList.contains(n)&&e.classList.remove(n)};function b3(){const e=this,{slides:t,params:n,slidesEl:r,activeIndex:i}=e,o=e.virtual&&n.virtual.enabled,a=e.grid&&n.grid&&n.grid.rows>1,l=d=>nn(r,`.${n.slideClass}${d}, swiper-slide${d}`)[0];let s,u,c;if(o)if(n.loop){let d=i-e.virtual.slidesBefore;d<0&&(d=e.virtual.slides.length+d),d>=e.virtual.slides.length&&(d-=e.virtual.slides.length),s=l(`[data-swiper-slide-index="${d}"]`)}else s=l(`[data-swiper-slide-index="${i}"]`);else a?(s=t.find(d=>d.column===i),c=t.find(d=>d.column===i+1),u=t.find(d=>d.column===i-1)):s=t[i];s&&(a||(c=i3(s,`.${n.slideClass}, swiper-slide`)[0],n.loop&&!c&&(c=t[0]),u=r3(s,`.${n.slideClass}, swiper-slide`)[0],n.loop&&!u===0&&(u=t[t.length-1]))),t.forEach(d=>{gc(d,d===s,n.slideActiveClass),gc(d,d===c,n.slideNextClass),gc(d,d===u,n.slidePrevClass)}),e.emitSlidesClasses()}const cs=(e,t)=>{if(!e||e.destroyed||!e.params)return;const n=()=>e.isElement?"swiper-slide":`.${e.params.slideClass}`,r=t.closest(n());if(r){let i=r.querySelector(`.${e.params.lazyPreloaderClass}`);!i&&e.isElement&&(r.shadowRoot?i=r.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`):requestAnimationFrame(()=>{r.shadowRoot&&(i=r.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`),i&&!i.lazyPreloaderManaged&&i.remove())})),i&&!i.lazyPreloaderManaged&&i.remove()}},vc=(e,t)=>{if(!e.slides[t])return;const n=e.slides[t].querySelector('[loading="lazy"]');n&&n.removeAttribute("loading")},ef=e=>{if(!e||e.destroyed||!e.params)return;let t=e.params.lazyPreloadPrevNext;const n=e.slides.length;if(!n||!t||t<0)return;t=Math.min(t,n);const r=e.params.slidesPerView==="auto"?e.slidesPerViewDynamic():Math.ceil(e.params.slidesPerView),i=e.activeIndex;if(e.params.grid&&e.params.grid.rows>1){const a=i,l=[a-t];l.push(...Array.from({length:t}).map((s,u)=>a+r+u)),e.slides.forEach((s,u)=>{l.includes(s.column)&&vc(e,u)});return}const o=i+r-1;if(e.params.rewind||e.params.loop)for(let a=i-t;a<=o+t;a+=1){const l=(a%n+n)%n;(l<i||l>o)&&vc(e,l)}else for(let a=Math.max(i-t,0);a<=Math.min(o+t,n-1);a+=1)a!==i&&(a>o||a<i)&&vc(e,a)};function w3(e){const{slidesGrid:t,params:n}=e,r=e.rtlTranslate?e.translate:-e.translate;let i;for(let o=0;o<t.length;o+=1)typeof t[o+1]<"u"?r>=t[o]&&r<t[o+1]-(t[o+1]-t[o])/2?i=o:r>=t[o]&&r<t[o+1]&&(i=o+1):r>=t[o]&&(i=o);return n.normalizeSlideIndex&&(i<0||typeof i>"u")&&(i=0),i}function S3(e){const t=this,n=t.rtlTranslate?t.translate:-t.translate,{snapGrid:r,params:i,activeIndex:o,realIndex:a,snapIndex:l}=t;let s=e,u;const c=m=>{let v=m-t.virtual.slidesBefore;return v<0&&(v=t.virtual.slides.length+v),v>=t.virtual.slides.length&&(v-=t.virtual.slides.length),v};if(typeof s>"u"&&(s=w3(t)),r.indexOf(n)>=0)u=r.indexOf(n);else{const m=Math.min(i.slidesPerGroupSkip,s);u=m+Math.floor((s-m)/i.slidesPerGroup)}if(u>=r.length&&(u=r.length-1),s===o&&!t.params.loop){u!==l&&(t.snapIndex=u,t.emit("snapIndexChange"));return}if(s===o&&t.params.loop&&t.virtual&&t.params.virtual.enabled){t.realIndex=c(s);return}const d=t.grid&&i.grid&&i.grid.rows>1;let g;if(t.virtual&&i.virtual.enabled)i.loop?g=c(s):g=s;else if(d){const m=t.slides.find(x=>x.column===s);let v=parseInt(m.getAttribute("data-swiper-slide-index"),10);Number.isNaN(v)&&(v=Math.max(t.slides.indexOf(m),0)),g=Math.floor(v/i.grid.rows)}else if(t.slides[s]){const m=t.slides[s].getAttribute("data-swiper-slide-index");m?g=parseInt(m,10):g=s}else g=s;Object.assign(t,{previousSnapIndex:l,snapIndex:u,previousRealIndex:a,realIndex:g,previousIndex:o,activeIndex:s}),t.initialized&&ef(t),t.emit("activeIndexChange"),t.emit("snapIndexChange"),(t.initialized||t.params.runCallbacksOnInit)&&(a!==g&&t.emit("realIndexChange"),t.emit("slideChange"))}function _3(e,t){const n=this,r=n.params;let i=e.closest(`.${r.slideClass}, swiper-slide`);!i&&n.isElement&&t&&t.length>1&&t.includes(e)&&[...t.slice(t.indexOf(e)+1,t.length)].forEach(l=>{!i&&l.matches&&l.matches(`.${r.slideClass}, swiper-slide`)&&(i=l)});let o=!1,a;if(i){for(let l=0;l<n.slides.length;l+=1)if(n.slides[l]===i){o=!0,a=l;break}}if(i&&o)n.clickedSlide=i,n.virtual&&n.params.virtual.enabled?n.clickedIndex=parseInt(i.getAttribute("data-swiper-slide-index"),10):n.clickedIndex=a;else{n.clickedSlide=void 0,n.clickedIndex=void 0;return}r.slideToClickedSlide&&n.clickedIndex!==void 0&&n.clickedIndex!==n.activeIndex&&n.slideToClickedSlide()}var C3={updateSize:h3,updateSlides:m3,updateAutoHeight:g3,updateSlidesOffset:v3,updateSlidesProgress:y3,updateProgress:x3,updateSlidesClasses:b3,updateActiveIndex:S3,updateClickedSlide:_3};function E3(e=this.isHorizontal()?"x":"y"){const t=this,{params:n,rtlTranslate:r,translate:i,wrapperEl:o}=t;if(n.virtualTranslate)return r?-i:i;if(n.cssMode)return i;let a=JP(o,e);return a+=t.cssOverflowAdjustment(),r&&(a=-a),a||0}function k3(e,t){const n=this,{rtlTranslate:r,params:i,wrapperEl:o,progress:a}=n;let l=0,s=0;const u=0;n.isHorizontal()?l=r?-e:e:s=e,i.roundLengths&&(l=Math.floor(l),s=Math.floor(s)),n.previousTranslate=n.translate,n.translate=n.isHorizontal()?l:s,i.cssMode?o[n.isHorizontal()?"scrollLeft":"scrollTop"]=n.isHorizontal()?-l:-s:i.virtualTranslate||(n.isHorizontal()?l-=n.cssOverflowAdjustment():s-=n.cssOverflowAdjustment(),o.style.transform=`translate3d(${l}px, ${s}px, ${u}px)`);let c;const d=n.maxTranslate()-n.minTranslate();d===0?c=0:c=(e-n.minTranslate())/d,c!==a&&n.updateProgress(e),n.emit("setTranslate",n.translate,t)}function T3(){return-this.snapGrid[0]}function O3(){return-this.snapGrid[this.snapGrid.length-1]}function P3(e=0,t=this.params.speed,n=!0,r=!0,i){const o=this,{params:a,wrapperEl:l}=o;if(o.animating&&a.preventInteractionOnTransition)return!1;const s=o.minTranslate(),u=o.maxTranslate();let c;if(r&&e>s?c=s:r&&e<u?c=u:c=e,o.updateProgress(c),a.cssMode){const d=o.isHorizontal();if(t===0)l[d?"scrollLeft":"scrollTop"]=-c;else{if(!o.support.smoothScroll)return cb({swiper:o,targetPosition:-c,side:d?"left":"top"}),!0;l.scrollTo({[d?"left":"top"]:-c,behavior:"smooth"})}return!0}return t===0?(o.setTransition(0),o.setTranslate(c),n&&(o.emit("beforeTransitionStart",t,i),o.emit("transitionEnd"))):(o.setTransition(t),o.setTranslate(c),n&&(o.emit("beforeTransitionStart",t,i),o.emit("transitionStart")),o.animating||(o.animating=!0,o.onTranslateToWrapperTransitionEnd||(o.onTranslateToWrapperTransitionEnd=function(g){!o||o.destroyed||g.target===this&&(o.wrapperEl.removeEventListener("transitionend",o.onTranslateToWrapperTransitionEnd),o.onTranslateToWrapperTransitionEnd=null,delete o.onTranslateToWrapperTransitionEnd,o.animating=!1,n&&o.emit("transitionEnd"))}),o.wrapperEl.addEventListener("transitionend",o.onTranslateToWrapperTransitionEnd))),!0}var j3={getTranslate:E3,setTranslate:k3,minTranslate:T3,maxTranslate:O3,translateTo:P3};function M3(e,t){const n=this;n.params.cssMode||(n.wrapperEl.style.transitionDuration=`${e}ms`,n.wrapperEl.style.transitionDelay=e===0?"0ms":""),n.emit("setTransition",e,t)}function gb({swiper:e,runCallbacks:t,direction:n,step:r}){const{activeIndex:i,previousIndex:o}=e;let a=n;a||(i>o?a="next":i<o?a="prev":a="reset"),e.emit(`transition${r}`),t&&a==="reset"?e.emit(`slideResetTransition${r}`):t&&i!==o&&(e.emit(`slideChangeTransition${r}`),a==="next"?e.emit(`slideNextTransition${r}`):e.emit(`slidePrevTransition${r}`))}function I3(e=!0,t){const n=this,{params:r}=n;r.cssMode||(r.autoHeight&&n.updateAutoHeight(),gb({swiper:n,runCallbacks:e,direction:t,step:"Start"}))}function $3(e=!0,t){const n=this,{params:r}=n;n.animating=!1,!r.cssMode&&(n.setTransition(0),gb({swiper:n,runCallbacks:e,direction:t,step:"End"}))}var D3={setTransition:M3,transitionStart:I3,transitionEnd:$3};function R3(e=0,t,n=!0,r,i){typeof e=="string"&&(e=parseInt(e,10));const o=this;let a=e;a<0&&(a=0);const{params:l,snapGrid:s,slidesGrid:u,previousIndex:c,activeIndex:d,rtlTranslate:g,wrapperEl:m,enabled:v}=o;if(!v&&!r&&!i||o.destroyed||o.animating&&l.preventInteractionOnTransition)return!1;typeof t>"u"&&(t=o.params.speed);const x=Math.min(o.params.slidesPerGroupSkip,a);let w=x+Math.floor((a-x)/o.params.slidesPerGroup);w>=s.length&&(w=s.length-1);const f=-s[w];if(l.normalizeSlideIndex)for(let _=0;_<u.length;_+=1){const S=-Math.floor(f*100),M=Math.floor(u[_]*100),j=Math.floor(u[_+1]*100);typeof u[_+1]<"u"?S>=M&&S<j-(j-M)/2?a=_:S>=M&&S<j&&(a=_+1):S>=M&&(a=_)}if(o.initialized&&a!==d&&(!o.allowSlideNext&&(g?f>o.translate&&f>o.minTranslate():f<o.translate&&f<o.minTranslate())||!o.allowSlidePrev&&f>o.translate&&f>o.maxTranslate()&&(d||0)!==a))return!1;a!==(c||0)&&n&&o.emit("beforeSlideChangeStart"),o.updateProgress(f);let p;a>d?p="next":a<d?p="prev":p="reset";const y=o.virtual&&o.params.virtual.enabled;if(!(y&&i)&&(g&&-f===o.translate||!g&&f===o.translate))return o.updateActiveIndex(a),l.autoHeight&&o.updateAutoHeight(),o.updateSlidesClasses(),l.effect!=="slide"&&o.setTranslate(f),p!=="reset"&&(o.transitionStart(n,p),o.transitionEnd(n,p)),!1;if(l.cssMode){const _=o.isHorizontal(),S=g?f:-f;if(t===0)y&&(o.wrapperEl.style.scrollSnapType="none",o._immediateVirtual=!0),y&&!o._cssModeVirtualInitialSet&&o.params.initialSlide>0?(o._cssModeVirtualInitialSet=!0,requestAnimationFrame(()=>{m[_?"scrollLeft":"scrollTop"]=S})):m[_?"scrollLeft":"scrollTop"]=S,y&&requestAnimationFrame(()=>{o.wrapperEl.style.scrollSnapType="",o._immediateVirtual=!1});else{if(!o.support.smoothScroll)return cb({swiper:o,targetPosition:S,side:_?"left":"top"}),!0;m.scrollTo({[_?"left":"top"]:S,behavior:"smooth"})}return!0}const k=mb().isSafari;return y&&!i&&k&&o.isElement&&o.virtual.update(!1,!1,a),o.setTransition(t),o.setTranslate(f),o.updateActiveIndex(a),o.updateSlidesClasses(),o.emit("beforeTransitionStart",t,r),o.transitionStart(n,p),t===0?o.transitionEnd(n,p):o.animating||(o.animating=!0,o.onSlideToWrapperTransitionEnd||(o.onSlideToWrapperTransitionEnd=function(S){!o||o.destroyed||S.target===this&&(o.wrapperEl.removeEventListener("transitionend",o.onSlideToWrapperTransitionEnd),o.onSlideToWrapperTransitionEnd=null,delete o.onSlideToWrapperTransitionEnd,o.transitionEnd(n,p))}),o.wrapperEl.addEventListener("transitionend",o.onSlideToWrapperTransitionEnd)),!0}function A3(e=0,t,n=!0,r){typeof e=="string"&&(e=parseInt(e,10));const i=this;if(i.destroyed)return;typeof t>"u"&&(t=i.params.speed);const o=i.grid&&i.params.grid&&i.params.grid.rows>1;let a=e;if(i.params.loop)if(i.virtual&&i.params.virtual.enabled)a=a+i.virtual.slidesBefore;else{let l;if(o){const x=a*i.params.grid.rows;l=i.slides.find(w=>w.getAttribute("data-swiper-slide-index")*1===x).column}else l=i.getSlideIndexByData(a);const s=o?Math.ceil(i.slides.length/i.params.grid.rows):i.slides.length,{centeredSlides:u,slidesOffsetBefore:c,slidesOffsetAfter:d}=i.params,g=u||!!c||!!d;let m=i.params.slidesPerView;m==="auto"?m=i.slidesPerViewDynamic():(m=Math.ceil(parseFloat(i.params.slidesPerView,10)),g&&m%2===0&&(m=m+1));let v=s-l<m;if(g&&(v=v||l<Math.ceil(m/2)),r&&g&&i.params.slidesPerView!=="auto"&&!o&&(v=!1),v){const x=g?l<i.activeIndex?"prev":"next":l-i.activeIndex-1<i.params.slidesPerView?"next":"prev";i.loopFix({direction:x,slideTo:!0,activeSlideIndex:x==="next"?l+1:l-s+1,slideRealIndex:x==="next"?i.realIndex:void 0})}if(o){const x=a*i.params.grid.rows;a=i.slides.find(w=>w.getAttribute("data-swiper-slide-index")*1===x).column}else a=i.getSlideIndexByData(a)}return requestAnimationFrame(()=>{i.slideTo(a,t,n,r)}),i}function L3(e,t=!0,n){const r=this,{enabled:i,params:o,animating:a}=r;if(!i||r.destroyed)return r;typeof e>"u"&&(e=r.params.speed);let l=o.slidesPerGroup;o.slidesPerView==="auto"&&o.slidesPerGroup===1&&o.slidesPerGroupAuto&&(l=Math.max(r.slidesPerViewDynamic("current",!0),1));const s=r.activeIndex<o.slidesPerGroupSkip?1:l,u=r.virtual&&o.virtual.enabled;if(o.loop){if(a&&!u&&o.loopPreventsSliding)return!1;if(r.loopFix({direction:"next"}),r._clientLeft=r.wrapperEl.clientLeft,r.activeIndex===r.slides.length-1&&o.cssMode)return requestAnimationFrame(()=>{r.slideTo(r.activeIndex+s,e,t,n)}),!0}return o.rewind&&r.isEnd?r.slideTo(0,e,t,n):r.slideTo(r.activeIndex+s,e,t,n)}function F3(e,t=!0,n){const r=this,{params:i,snapGrid:o,slidesGrid:a,rtlTranslate:l,enabled:s,animating:u}=r;if(!s||r.destroyed)return r;typeof e>"u"&&(e=r.params.speed);const c=r.virtual&&i.virtual.enabled;if(i.loop){if(u&&!c&&i.loopPreventsSliding)return!1;r.loopFix({direction:"prev"}),r._clientLeft=r.wrapperEl.clientLeft}const d=l?r.translate:-r.translate;function g(p){return p<0?-Math.floor(Math.abs(p)):Math.floor(p)}const m=g(d),v=o.map(p=>g(p)),x=i.freeMode&&i.freeMode.enabled;let w=o[v.indexOf(m)-1];if(typeof w>"u"&&(i.cssMode||x)){let p;o.forEach((y,b)=>{m>=y&&(p=b)}),typeof p<"u"&&(w=x?o[p]:o[p>0?p-1:p])}let f=0;if(typeof w<"u"&&(f=a.indexOf(w),f<0&&(f=r.activeIndex-1),i.slidesPerView==="auto"&&i.slidesPerGroup===1&&i.slidesPerGroupAuto&&(f=f-r.slidesPerViewDynamic("previous",!0)+1,f=Math.max(f,0))),i.rewind&&r.isBeginning){const p=r.params.virtual&&r.params.virtual.enabled&&r.virtual?r.virtual.slides.length-1:r.slides.length-1;return r.slideTo(p,e,t,n)}else if(i.loop&&r.activeIndex===0&&i.cssMode)return requestAnimationFrame(()=>{r.slideTo(f,e,t,n)}),!0;return r.slideTo(f,e,t,n)}function z3(e,t=!0,n){const r=this;if(!r.destroyed)return typeof e>"u"&&(e=r.params.speed),r.slideTo(r.activeIndex,e,t,n)}function N3(e,t=!0,n,r=.5){const i=this;if(i.destroyed)return;typeof e>"u"&&(e=i.params.speed);let o=i.activeIndex;const a=Math.min(i.params.slidesPerGroupSkip,o),l=a+Math.floor((o-a)/i.params.slidesPerGroup),s=i.rtlTranslate?i.translate:-i.translate;if(s>=i.snapGrid[l]){const u=i.snapGrid[l],c=i.snapGrid[l+1];s-u>(c-u)*r&&(o+=i.params.slidesPerGroup)}else{const u=i.snapGrid[l-1],c=i.snapGrid[l];s-u<=(c-u)*r&&(o-=i.params.slidesPerGroup)}return o=Math.max(o,0),o=Math.min(o,i.slidesGrid.length-1),i.slideTo(o,e,t,n)}function B3(){const e=this;if(e.destroyed)return;const{params:t,slidesEl:n}=e,r=t.slidesPerView==="auto"?e.slidesPerViewDynamic():t.slidesPerView;let i=e.getSlideIndexWhenGrid(e.clickedIndex),o;const a=e.isElement?"swiper-slide":`.${t.slideClass}`,l=e.grid&&e.params.grid&&e.params.grid.rows>1;if(t.loop){if(e.animating)return;o=parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"),10),t.centeredSlides?e.slideToLoop(o):i>(l?(e.slides.length-r)/2-(e.params.grid.rows-1):e.slides.length-r)?(e.loopFix(),i=e.getSlideIndex(nn(n,`${a}[data-swiper-slide-index="${o}"]`)[0]),ub(()=>{e.slideTo(i)})):e.slideTo(i)}else e.slideTo(i)}var V3={slideTo:R3,slideToLoop:A3,slideNext:L3,slidePrev:F3,slideReset:z3,slideToClosest:N3,slideToClickedSlide:B3};function H3(e,t){const n=this,{params:r,slidesEl:i}=n;if(!r.loop||n.virtual&&n.params.virtual.enabled)return;const o=()=>{nn(i,`.${r.slideClass}, swiper-slide`).forEach((v,x)=>{v.setAttribute("data-swiper-slide-index",x)})},a=()=>{const m=nn(i,`.${r.slideBlankClass}`);m.forEach(v=>{v.remove()}),m.length>0&&(n.recalcSlides(),n.updateSlides())},l=n.grid&&r.grid&&r.grid.rows>1;r.loopAddBlankSlides&&(r.slidesPerGroup>1||l)&&a();const s=r.slidesPerGroup*(l?r.grid.rows:1),u=n.slides.length%s!==0,c=l&&n.slides.length%r.grid.rows!==0,d=m=>{for(let v=0;v<m;v+=1){const x=n.isElement?Xs("swiper-slide",[r.slideBlankClass]):Xs("div",[r.slideClass,r.slideBlankClass]);n.slidesEl.append(x)}};if(u){if(r.loopAddBlankSlides){const m=s-n.slides.length%s;d(m),n.recalcSlides(),n.updateSlides()}else qs("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");o()}else if(c){if(r.loopAddBlankSlides){const m=r.grid.rows-n.slides.length%r.grid.rows;d(m),n.recalcSlides(),n.updateSlides()}else qs("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");o()}else o();const g=r.centeredSlides||!!r.slidesOffsetBefore||!!r.slidesOffsetAfter;n.loopFix({slideRealIndex:e,direction:g?void 0:"next",initial:t})}function U3({slideRealIndex:e,slideTo:t=!0,direction:n,setTranslate:r,activeSlideIndex:i,initial:o,byController:a,byMousewheel:l}={}){const s=this;if(!s.params.loop)return;s.emit("beforeLoopFix");const{slides:u,allowSlidePrev:c,allowSlideNext:d,slidesEl:g,params:m}=s,{centeredSlides:v,slidesOffsetBefore:x,slidesOffsetAfter:w,initialSlide:f}=m,p=v||!!x||!!w;if(s.allowSlidePrev=!0,s.allowSlideNext=!0,s.virtual&&m.virtual.enabled){t&&(!p&&s.snapIndex===0?s.slideTo(s.virtual.slides.length,0,!1,!0):p&&s.snapIndex<m.slidesPerView?s.slideTo(s.virtual.slides.length+s.snapIndex,0,!1,!0):s.snapIndex===s.snapGrid.length-1&&s.slideTo(s.virtual.slidesBefore,0,!1,!0)),s.allowSlidePrev=c,s.allowSlideNext=d,s.emit("loopFix");return}let y=m.slidesPerView;y==="auto"?y=s.slidesPerViewDynamic():(y=Math.ceil(parseFloat(m.slidesPerView,10)),p&&y%2===0&&(y=y+1));const b=m.slidesPerGroupAuto?y:m.slidesPerGroup;let E=p?Math.max(b,Math.ceil(y/2)):b;E%b!==0&&(E+=b-E%b),E+=m.loopAdditionalSlides,s.loopedSlides=E;const k=s.grid&&m.grid&&m.grid.rows>1;u.length<y+E||s.params.effect==="cards"&&u.length<y+E*2?qs("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled or not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"):k&&m.grid.fill==="row"&&qs("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");const _=[],S=[],M=k?Math.ceil(u.length/m.grid.rows):u.length,j=o&&M-f<y&&!p;let I=j?f:s.activeIndex;typeof i>"u"?i=s.getSlideIndex(u.find(O=>O.classList.contains(m.slideActiveClass))):I=i;const P=n==="next"||!n,$=n==="prev"||!n;let A=0,R=0;const L=(k?u[i].column:i)+(p&&typeof r>"u"?-y/2+.5:0);if(L<E){A=Math.max(E-L,b);for(let O=0;O<E-L;O+=1){const D=O-Math.floor(O/M)*M;if(k){const N=M-D-1;for(let V=u.length-1;V>=0;V-=1)u[V].column===N&&_.push(V)}else _.push(M-D-1)}}else if(L+y>M-E){R=Math.max(L-(M-E*2),b),j&&(R=Math.max(R,y-M+f+1));for(let O=0;O<R;O+=1){const D=O-Math.floor(O/M)*M;k?u.forEach((N,V)=>{N.column===D&&S.push(V)}):S.push(D)}}if(s.__preventObserver__=!0,requestAnimationFrame(()=>{s.__preventObserver__=!1}),s.params.effect==="cards"&&u.length<y+E*2&&(S.includes(i)&&S.splice(S.indexOf(i),1),_.includes(i)&&_.splice(_.indexOf(i),1)),$&&_.forEach(O=>{u[O].swiperLoopMoveDOM=!0,g.prepend(u[O]),u[O].swiperLoopMoveDOM=!1}),P&&S.forEach(O=>{u[O].swiperLoopMoveDOM=!0,g.append(u[O]),u[O].swiperLoopMoveDOM=!1}),s.recalcSlides(),m.slidesPerView==="auto"?s.updateSlides():k&&(_.length>0&&$||S.length>0&&P)&&s.slides.forEach((O,D)=>{s.grid.updateSlide(D,O,s.slides)}),m.watchSlidesProgress&&s.updateSlidesOffset(),t){if(_.length>0&&$){if(typeof e>"u"){const O=s.slidesGrid[I],N=s.slidesGrid[I+A]-O;l?s.setTranslate(s.translate-N):(s.slideTo(I+Math.ceil(A),0,!1,!0),r&&(s.touchEventsData.startTranslate=s.touchEventsData.startTranslate-N,s.touchEventsData.currentTranslate=s.touchEventsData.currentTranslate-N))}else if(r){const O=k?_.length/m.grid.rows:_.length;s.slideTo(s.activeIndex+O,0,!1,!0),s.touchEventsData.currentTranslate=s.translate}}else if(S.length>0&&P)if(typeof e>"u"){const O=s.slidesGrid[I],N=s.slidesGrid[I-R]-O;l?s.setTranslate(s.translate-N):(s.slideTo(I-R,0,!1,!0),r&&(s.touchEventsData.startTranslate=s.touchEventsData.startTranslate-N,s.touchEventsData.currentTranslate=s.touchEventsData.currentTranslate-N))}else{const O=k?S.length/m.grid.rows:S.length;s.slideTo(s.activeIndex-O,0,!1,!0)}}if(s.allowSlidePrev=c,s.allowSlideNext=d,s.controller&&s.controller.control&&!a){const O={slideRealIndex:e,direction:n,setTranslate:r,activeSlideIndex:i,byController:!0};Array.isArray(s.controller.control)?s.controller.control.forEach(D=>{!D.destroyed&&D.params.loop&&D.loopFix({...O,slideTo:D.params.slidesPerView===m.slidesPerView?t:!1})}):s.controller.control instanceof s.constructor&&s.controller.control.params.loop&&s.controller.control.loopFix({...O,slideTo:s.controller.control.params.slidesPerView===m.slidesPerView?t:!1})}s.emit("loopFix")}function W3(){const e=this,{params:t,slidesEl:n}=e;if(!t.loop||!n||e.virtual&&e.params.virtual.enabled)return;e.recalcSlides();const r=[];e.slides.forEach(i=>{const o=typeof i.swiperSlideIndex>"u"?i.getAttribute("data-swiper-slide-index")*1:i.swiperSlideIndex;r[o]=i}),e.slides.forEach(i=>{i.removeAttribute("data-swiper-slide-index")}),r.forEach(i=>{n.append(i)}),e.recalcSlides(),e.slideTo(e.realIndex,0)}var G3={loopCreate:H3,loopFix:U3,loopDestroy:W3};function Y3(e){const t=this;if(!t.params.simulateTouch||t.params.watchOverflow&&t.isLocked||t.params.cssMode)return;const n=t.params.touchEventsTarget==="container"?t.el:t.wrapperEl;t.isElement&&(t.__preventObserver__=!0),n.style.cursor="move",n.style.cursor=e?"grabbing":"grab",t.isElement&&requestAnimationFrame(()=>{t.__preventObserver__=!1})}function q3(){const e=this;e.params.watchOverflow&&e.isLocked||e.params.cssMode||(e.isElement&&(e.__preventObserver__=!0),e[e.params.touchEventsTarget==="container"?"el":"wrapperEl"].style.cursor="",e.isElement&&requestAnimationFrame(()=>{e.__preventObserver__=!1}))}var X3={setGrabCursor:Y3,unsetGrabCursor:q3};function K3(e,t=this){function n(r){if(!r||r===sn()||r===it())return null;r.assignedSlot&&(r=r.assignedSlot);const i=r.closest(e);return!i&&!r.getRootNode?null:i||n(r.getRootNode().host)}return n(t)}function Pg(e,t,n){const r=it(),{params:i}=e,o=i.edgeSwipeDetection,a=i.edgeSwipeThreshold;return o&&(n<=a||n>=r.innerWidth-a)?o==="prevent"?(t.preventDefault(),!0):!1:!0}function Q3(e){const t=this,n=sn();let r=e;r.originalEvent&&(r=r.originalEvent);const i=t.touchEventsData;if(r.type==="pointerdown"){if(i.pointerId!==null&&i.pointerId!==r.pointerId)return;i.pointerId=r.pointerId}else r.type==="touchstart"&&r.targetTouches.length===1&&(i.touchId=r.targetTouches[0].identifier);if(r.type==="touchstart"){Pg(t,r,r.targetTouches[0].pageX);return}const{params:o,touches:a,enabled:l}=t;if(!l||!o.simulateTouch&&r.pointerType==="mouse"||t.animating&&o.preventInteractionOnTransition)return;!t.animating&&o.cssMode&&o.loop&&t.loopFix();let s=r.target;if(o.touchEventsTarget==="wrapper"&&!n3(s,t.wrapperEl)||"which"in r&&r.which===3||"button"in r&&r.button>0||i.isTouched&&i.isMoved)return;const u=!!o.noSwipingClass&&o.noSwipingClass!=="",c=r.composedPath?r.composedPath():r.path;u&&r.target&&r.target.shadowRoot&&c&&(s=c[0]);const d=o.noSwipingSelector?o.noSwipingSelector:`.${o.noSwipingClass}`,g=!!(r.target&&r.target.shadowRoot);if(o.noSwiping&&(g?K3(d,s):s.closest(d))){t.allowClick=!0;return}if(o.swipeHandler&&!s.closest(o.swipeHandler))return;a.currentX=r.pageX,a.currentY=r.pageY;const m=a.currentX,v=a.currentY;if(!Pg(t,r,m))return;Object.assign(i,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),a.startX=m,a.startY=v,i.touchStartTime=Ys(),t.allowClick=!0,t.updateSize(),t.swipeDirection=void 0,o.threshold>0&&(i.allowThresholdMove=!1);let x=!0;s.matches(i.focusableElements)&&(x=!1,s.nodeName==="SELECT"&&(i.isTouched=!1)),n.activeElement&&n.activeElement.matches(i.focusableElements)&&n.activeElement!==s&&(r.pointerType==="mouse"||r.pointerType!=="mouse"&&!s.matches(i.focusableElements))&&n.activeElement.blur();const w=x&&t.allowTouchMove&&o.touchStartPreventDefault;(o.touchStartForcePreventDefault||w)&&!s.isContentEditable&&r.preventDefault(),o.freeMode&&o.freeMode.enabled&&t.freeMode&&t.animating&&!o.cssMode&&t.freeMode.onTouchStart(),t.emit("touchStart",r)}function Z3(e){const t=sn(),n=this,r=n.touchEventsData,{params:i,touches:o,rtlTranslate:a,enabled:l}=n;if(!l||!i.simulateTouch&&e.pointerType==="mouse")return;let s=e;if(s.originalEvent&&(s=s.originalEvent),s.type==="pointermove"&&(r.touchId!==null||s.pointerId!==r.pointerId))return;let u;if(s.type==="touchmove"){if(u=[...s.changedTouches].find(k=>k.identifier===r.touchId),!u||u.identifier!==r.touchId)return}else u=s;if(!r.isTouched){r.startMoving&&r.isScrolling&&n.emit("touchMoveOpposite",s);return}const c=u.pageX,d=u.pageY;if(s.preventedByNestedSwiper){o.startX=c,o.startY=d;return}if(!n.allowTouchMove){s.target.matches(r.focusableElements)||(n.allowClick=!1),r.isTouched&&(Object.assign(o,{startX:c,startY:d,currentX:c,currentY:d}),r.touchStartTime=Ys());return}if(i.touchReleaseOnEdges&&!i.loop)if(n.isVertical()){if(d<o.startY&&n.translate<=n.maxTranslate()||d>o.startY&&n.translate>=n.minTranslate()){r.isTouched=!1,r.isMoved=!1;return}}else{if(a&&(c>o.startX&&-n.translate<=n.maxTranslate()||c<o.startX&&-n.translate>=n.minTranslate()))return;if(!a&&(c<o.startX&&n.translate<=n.maxTranslate()||c>o.startX&&n.translate>=n.minTranslate()))return}if(t.activeElement&&t.activeElement.matches(r.focusableElements)&&t.activeElement!==s.target&&s.pointerType!=="mouse"&&t.activeElement.blur(),t.activeElement&&s.target===t.activeElement&&s.target.matches(r.focusableElements)){r.isMoved=!0,n.allowClick=!1;return}r.allowTouchCallbacks&&n.emit("touchMove",s),o.previousX=o.currentX,o.previousY=o.currentY,o.currentX=c,o.currentY=d;const g=o.currentX-o.startX,m=o.currentY-o.startY;if(n.params.threshold&&Math.sqrt(g**2+m**2)<n.params.threshold)return;if(typeof r.isScrolling>"u"){let k;n.isHorizontal()&&o.currentY===o.startY||n.isVertical()&&o.currentX===o.startX?r.isScrolling=!1:g*g+m*m>=25&&(k=Math.atan2(Math.abs(m),Math.abs(g))*180/Math.PI,r.isScrolling=n.isHorizontal()?k>i.touchAngle:90-k>i.touchAngle)}if(r.isScrolling&&n.emit("touchMoveOpposite",s),typeof r.startMoving>"u"&&(o.currentX!==o.startX||o.currentY!==o.startY)&&(r.startMoving=!0),r.isScrolling||s.type==="touchmove"&&r.preventTouchMoveFromPointerMove){r.isTouched=!1;return}if(!r.startMoving)return;n.allowClick=!1,!i.cssMode&&s.cancelable&&s.preventDefault(),i.touchMoveStopPropagation&&!i.nested&&s.stopPropagation();let v=n.isHorizontal()?g:m,x=n.isHorizontal()?o.currentX-o.previousX:o.currentY-o.previousY;i.oneWayMovement&&(v=Math.abs(v)*(a?1:-1),x=Math.abs(x)*(a?1:-1)),o.diff=v,v*=i.touchRatio,a&&(v=-v,x=-x);const w=n.touchesDirection;n.swipeDirection=v>0?"prev":"next",n.touchesDirection=x>0?"prev":"next";const f=n.params.loop&&!i.cssMode,p=n.touchesDirection==="next"&&n.allowSlideNext||n.touchesDirection==="prev"&&n.allowSlidePrev;if(!r.isMoved){if(f&&p&&n.loopFix({direction:n.swipeDirection}),r.startTranslate=n.getTranslate(),n.setTransition(0),n.animating){const k=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0,detail:{bySwiperTouchMove:!0}});n.wrapperEl.dispatchEvent(k)}r.allowMomentumBounce=!1,i.grabCursor&&(n.allowSlideNext===!0||n.allowSlidePrev===!0)&&n.setGrabCursor(!0),n.emit("sliderFirstMove",s)}let y;if(new Date().getTime(),i._loopSwapReset!==!1&&r.isMoved&&r.allowThresholdMove&&w!==n.touchesDirection&&f&&p&&Math.abs(v)>=1){Object.assign(o,{startX:c,startY:d,currentX:c,currentY:d,startTranslate:r.currentTranslate}),r.loopSwapReset=!0,r.startTranslate=r.currentTranslate;return}n.emit("sliderMove",s),r.isMoved=!0,r.currentTranslate=v+r.startTranslate;let b=!0,E=i.resistanceRatio;if(i.touchReleaseOnEdges&&(E=0),v>0?(f&&p&&!y&&r.allowThresholdMove&&r.currentTranslate>(i.centeredSlides?n.minTranslate()-n.slidesSizesGrid[n.activeIndex+1]-(i.slidesPerView!=="auto"&&n.slides.length-i.slidesPerView>=2?n.slidesSizesGrid[n.activeIndex+1]+n.params.spaceBetween:0)-n.params.spaceBetween:n.minTranslate())&&n.loopFix({direction:"prev",setTranslate:!0,activeSlideIndex:0}),r.currentTranslate>n.minTranslate()&&(b=!1,i.resistance&&(r.currentTranslate=n.minTranslate()-1+(-n.minTranslate()+r.startTranslate+v)**E))):v<0&&(f&&p&&!y&&r.allowThresholdMove&&r.currentTranslate<(i.centeredSlides?n.maxTranslate()+n.slidesSizesGrid[n.slidesSizesGrid.length-1]+n.params.spaceBetween+(i.slidesPerView!=="auto"&&n.slides.length-i.slidesPerView>=2?n.slidesSizesGrid[n.slidesSizesGrid.length-1]+n.params.spaceBetween:0):n.maxTranslate())&&n.loopFix({direction:"next",setTranslate:!0,activeSlideIndex:n.slides.length-(i.slidesPerView==="auto"?n.slidesPerViewDynamic():Math.ceil(parseFloat(i.slidesPerView,10)))}),r.currentTranslate<n.maxTranslate()&&(b=!1,i.resistance&&(r.currentTranslate=n.maxTranslate()+1-(n.maxTranslate()-r.startTranslate-v)**E))),b&&(s.preventedByNestedSwiper=!0),!n.allowSlideNext&&n.swipeDirection==="next"&&r.currentTranslate<r.startTranslate&&(r.currentTranslate=r.startTranslate),!n.allowSlidePrev&&n.swipeDirection==="prev"&&r.currentTranslate>r.startTranslate&&(r.currentTranslate=r.startTranslate),!n.allowSlidePrev&&!n.allowSlideNext&&(r.currentTranslate=r.startTranslate),i.threshold>0)if(Math.abs(v)>i.threshold||r.allowThresholdMove){if(!r.allowThresholdMove){r.allowThresholdMove=!0,o.startX=o.currentX,o.startY=o.currentY,r.currentTranslate=r.startTranslate,o.diff=n.isHorizontal()?o.currentX-o.startX:o.currentY-o.startY;return}}else{r.currentTranslate=r.startTranslate;return}!i.followFinger||i.cssMode||((i.freeMode&&i.freeMode.enabled&&n.freeMode||i.watchSlidesProgress)&&(n.updateActiveIndex(),n.updateSlidesClasses()),i.freeMode&&i.freeMode.enabled&&n.freeMode&&n.freeMode.onTouchMove(),n.updateProgress(r.currentTranslate),n.setTranslate(r.currentTranslate))}function J3(e){const t=this,n=t.touchEventsData;let r=e;r.originalEvent&&(r=r.originalEvent);let i;if(r.type==="touchend"||r.type==="touchcancel"){if(i=[...r.changedTouches].find(E=>E.identifier===n.touchId),!i||i.identifier!==n.touchId)return}else{if(n.touchId!==null||r.pointerId!==n.pointerId)return;i=r}if(["pointercancel","pointerout","pointerleave","contextmenu"].includes(r.type)&&!(["pointercancel","contextmenu"].includes(r.type)&&(t.browser.isSafari||t.browser.isWebView)))return;n.pointerId=null,n.touchId=null;const{params:a,touches:l,rtlTranslate:s,slidesGrid:u,enabled:c}=t;if(!c||!a.simulateTouch&&r.pointerType==="mouse")return;if(n.allowTouchCallbacks&&t.emit("touchEnd",r),n.allowTouchCallbacks=!1,!n.isTouched){n.isMoved&&a.grabCursor&&t.setGrabCursor(!1),n.isMoved=!1,n.startMoving=!1;return}a.grabCursor&&n.isMoved&&n.isTouched&&(t.allowSlideNext===!0||t.allowSlidePrev===!0)&&t.setGrabCursor(!1);const d=Ys(),g=d-n.touchStartTime;if(t.allowClick){const E=r.path||r.composedPath&&r.composedPath();t.updateClickedSlide(E&&E[0]||r.target,E),t.emit("tap click",r),g<300&&d-n.lastClickTime<300&&t.emit("doubleTap doubleClick",r)}if(n.lastClickTime=Ys(),ub(()=>{t.destroyed||(t.allowClick=!0)}),!n.isTouched||!n.isMoved||!t.swipeDirection||l.diff===0&&!n.loopSwapReset||n.currentTranslate===n.startTranslate&&!n.loopSwapReset){n.isTouched=!1,n.isMoved=!1,n.startMoving=!1;return}n.isTouched=!1,n.isMoved=!1,n.startMoving=!1;let m;if(a.followFinger?m=s?t.translate:-t.translate:m=-n.currentTranslate,a.cssMode)return;if(a.freeMode&&a.freeMode.enabled){t.freeMode.onTouchEnd({currentPos:m});return}const v=m>=-t.maxTranslate()&&!t.params.loop;let x=0,w=t.slidesSizesGrid[0];for(let E=0;E<u.length;E+=E<a.slidesPerGroupSkip?1:a.slidesPerGroup){const k=E<a.slidesPerGroupSkip-1?1:a.slidesPerGroup;typeof u[E+k]<"u"?(v||m>=u[E]&&m<u[E+k])&&(x=E,w=u[E+k]-u[E]):(v||m>=u[E])&&(x=E,w=u[u.length-1]-u[u.length-2])}let f=null,p=null;a.rewind&&(t.isBeginning?p=a.virtual&&a.virtual.enabled&&t.virtual?t.virtual.slides.length-1:t.slides.length-1:t.isEnd&&(f=0));const y=(m-u[x])/w,b=x<a.slidesPerGroupSkip-1?1:a.slidesPerGroup;if(g>a.longSwipesMs){if(!a.longSwipes){t.slideTo(t.activeIndex);return}t.swipeDirection==="next"&&(y>=a.longSwipesRatio?t.slideTo(a.rewind&&t.isEnd?f:x+b):t.slideTo(x)),t.swipeDirection==="prev"&&(y>1-a.longSwipesRatio?t.slideTo(x+b):p!==null&&y<0&&Math.abs(y)>a.longSwipesRatio?t.slideTo(p):t.slideTo(x))}else{if(!a.shortSwipes){t.slideTo(t.activeIndex);return}t.navigation&&(r.target===t.navigation.nextEl||r.target===t.navigation.prevEl)?r.target===t.navigation.nextEl?t.slideTo(x+b):t.slideTo(x):(t.swipeDirection==="next"&&t.slideTo(f!==null?f:x+b),t.swipeDirection==="prev"&&t.slideTo(p!==null?p:x))}}function jg(){const e=this,{params:t,el:n}=e;if(n&&n.offsetWidth===0)return;t.breakpoints&&e.setBreakpoint();const{allowSlideNext:r,allowSlidePrev:i,snapGrid:o}=e,a=e.virtual&&e.params.virtual.enabled;e.allowSlideNext=!0,e.allowSlidePrev=!0,e.updateSize(),e.updateSlides(),e.updateSlidesClasses();const l=a&&t.loop;(t.slidesPerView==="auto"||t.slidesPerView>1)&&e.isEnd&&!e.isBeginning&&!e.params.centeredSlides&&!l?e.slideTo(e.slides.length-1,0,!1,!0):e.params.loop&&!a?e.slideToLoop(e.realIndex,0,!1,!0):e.slideTo(e.activeIndex,0,!1,!0),e.autoplay&&e.autoplay.running&&e.autoplay.paused&&(clearTimeout(e.autoplay.resizeTimeout),e.autoplay.resizeTimeout=setTimeout(()=>{e.autoplay&&e.autoplay.running&&e.autoplay.paused&&e.autoplay.resume()},500)),e.allowSlidePrev=i,e.allowSlideNext=r,e.params.watchOverflow&&o!==e.snapGrid&&e.checkOverflow()}function e4(e){const t=this;t.enabled&&(t.allowClick||(t.params.preventClicks&&e.preventDefault(),t.params.preventClicksPropagation&&t.animating&&(e.stopPropagation(),e.stopImmediatePropagation())))}function t4(){const e=this,{wrapperEl:t,rtlTranslate:n,enabled:r}=e;if(!r)return;e.previousTranslate=e.translate,e.isHorizontal()?e.translate=-t.scrollLeft:e.translate=-t.scrollTop,e.translate===0&&(e.translate=0),e.updateActiveIndex(),e.updateSlidesClasses();let i;const o=e.maxTranslate()-e.minTranslate();o===0?i=0:i=(e.translate-e.minTranslate())/o,i!==e.progress&&e.updateProgress(n?-e.translate:e.translate),e.emit("setTranslate",e.translate,!1)}function n4(e){const t=this;cs(t,e.target),!(t.params.cssMode||t.params.slidesPerView!=="auto"&&!t.params.autoHeight)&&t.update()}function r4(){const e=this;e.documentTouchHandlerProceeded||(e.documentTouchHandlerProceeded=!0,e.params.touchReleaseOnEdges&&(e.el.style.touchAction="auto"))}const vb=(e,t)=>{const n=sn(),{params:r,el:i,wrapperEl:o,device:a}=e,l=!!r.nested,s=t==="on"?"addEventListener":"removeEventListener",u=t;!i||typeof i=="string"||(n[s]("touchstart",e.onDocumentTouchStart,{passive:!1,capture:l}),i[s]("touchstart",e.onTouchStart,{passive:!1}),i[s]("pointerdown",e.onTouchStart,{passive:!1}),n[s]("touchmove",e.onTouchMove,{passive:!1,capture:l}),n[s]("pointermove",e.onTouchMove,{passive:!1,capture:l}),n[s]("touchend",e.onTouchEnd,{passive:!0}),n[s]("pointerup",e.onTouchEnd,{passive:!0}),n[s]("pointercancel",e.onTouchEnd,{passive:!0}),n[s]("touchcancel",e.onTouchEnd,{passive:!0}),n[s]("pointerout",e.onTouchEnd,{passive:!0}),n[s]("pointerleave",e.onTouchEnd,{passive:!0}),n[s]("contextmenu",e.onTouchEnd,{passive:!0}),(r.preventClicks||r.preventClicksPropagation)&&i[s]("click",e.onClick,!0),r.cssMode&&o[s]("scroll",e.onScroll),r.updateOnWindowResize?e[u](a.ios||a.android?"resize orientationchange observerUpdate":"resize observerUpdate",jg,!0):e[u]("observerUpdate",jg,!0),i[s]("load",e.onLoad,{capture:!0}))};function i4(){const e=this,{params:t}=e;e.onTouchStart=Q3.bind(e),e.onTouchMove=Z3.bind(e),e.onTouchEnd=J3.bind(e),e.onDocumentTouchStart=r4.bind(e),t.cssMode&&(e.onScroll=t4.bind(e)),e.onClick=e4.bind(e),e.onLoad=n4.bind(e),vb(e,"on")}function o4(){vb(this,"off")}var a4={attachEvents:i4,detachEvents:o4};const Mg=(e,t)=>e.grid&&t.grid&&t.grid.rows>1;function s4(){const e=this,{realIndex:t,initialized:n,params:r,el:i}=e,o=r.breakpoints;if(!o||o&&Object.keys(o).length===0)return;const a=sn(),l=r.breakpointsBase==="window"||!r.breakpointsBase?r.breakpointsBase:"container",s=["window","container"].includes(r.breakpointsBase)||!r.breakpointsBase?e.el:a.querySelector(r.breakpointsBase),u=e.getBreakpoint(o,l,s);if(!u||e.currentBreakpoint===u)return;const d=(u in o?o[u]:void 0)||e.originalParams,g=Mg(e,r),m=Mg(e,d),v=e.params.grabCursor,x=d.grabCursor,w=r.enabled;g&&!m?(i.classList.remove(`${r.containerModifierClass}grid`,`${r.containerModifierClass}grid-column`),e.emitContainerClasses()):!g&&m&&(i.classList.add(`${r.containerModifierClass}grid`),(d.grid.fill&&d.grid.fill==="column"||!d.grid.fill&&r.grid.fill==="column")&&i.classList.add(`${r.containerModifierClass}grid-column`),e.emitContainerClasses()),v&&!x?e.unsetGrabCursor():!v&&x&&e.setGrabCursor(),["navigation","pagination","scrollbar"].forEach(k=>{if(typeof d[k]>"u")return;const _=r[k]&&r[k].enabled,S=d[k]&&d[k].enabled;_&&!S&&e[k].disable(),!_&&S&&e[k].enable()});const f=d.direction&&d.direction!==r.direction,p=r.loop&&(d.slidesPerView!==r.slidesPerView||f),y=r.loop;f&&n&&e.changeDirection(),yt(e.params,d);const b=e.params.enabled,E=e.params.loop;Object.assign(e,{allowTouchMove:e.params.allowTouchMove,allowSlideNext:e.params.allowSlideNext,allowSlidePrev:e.params.allowSlidePrev}),w&&!b?e.disable():!w&&b&&e.enable(),e.currentBreakpoint=u,e.emit("_beforeBreakpoint",d),n&&(p?(e.loopDestroy(),e.loopCreate(t),e.updateSlides()):!y&&E?(e.loopCreate(t),e.updateSlides()):y&&!E&&e.loopDestroy()),e.emit("breakpoint",d)}function l4(e,t="window",n){if(!e||t==="container"&&!n)return;let r=!1;const i=it(),o=t==="window"?i.innerHeight:n.clientHeight,a=Object.keys(e).map(l=>{if(typeof l=="string"&&l.indexOf("@")===0){const s=parseFloat(l.substr(1));return{value:o*s,point:l}}return{value:l,point:l}});a.sort((l,s)=>parseInt(l.value,10)-parseInt(s.value,10));for(let l=0;l<a.length;l+=1){const{point:s,value:u}=a[l];t==="window"?i.matchMedia(`(min-width: ${u}px)`).matches&&(r=s):u<=n.clientWidth&&(r=s)}return r||"max"}var u4={setBreakpoint:s4,getBreakpoint:l4};function c4(e,t){const n=[];return e.forEach(r=>{typeof r=="object"?Object.keys(r).forEach(i=>{r[i]&&n.push(t+i)}):typeof r=="string"&&n.push(t+r)}),n}function d4(){const e=this,{classNames:t,params:n,rtl:r,el:i,device:o}=e,a=c4(["initialized",n.direction,{"free-mode":e.params.freeMode&&n.freeMode.enabled},{autoheight:n.autoHeight},{rtl:r},{grid:n.grid&&n.grid.rows>1},{"grid-column":n.grid&&n.grid.rows>1&&n.grid.fill==="column"},{android:o.android},{ios:o.ios},{"css-mode":n.cssMode},{centered:n.cssMode&&n.centeredSlides},{"watch-progress":n.watchSlidesProgress}],n.containerModifierClass);t.push(...a),i.classList.add(...t),e.emitContainerClasses()}function f4(){const e=this,{el:t,classNames:n}=e;!t||typeof t=="string"||(t.classList.remove(...n),e.emitContainerClasses())}var p4={addClasses:d4,removeClasses:f4};function h4(){const e=this,{isLocked:t,params:n}=e,{slidesOffsetBefore:r}=n;if(r){const i=e.slides.length-1,o=e.slidesGrid[i]+e.slidesSizesGrid[i]+r*2;e.isLocked=e.size>o}else e.isLocked=e.snapGrid.length===1;n.allowSlideNext===!0&&(e.allowSlideNext=!e.isLocked),n.allowSlidePrev===!0&&(e.allowSlidePrev=!e.isLocked),t&&t!==e.isLocked&&(e.isEnd=!1),t!==e.isLocked&&e.emit(e.isLocked?"lock":"unlock")}var m4={checkOverflow:h4},tf={init:!0,direction:"horizontal",oneWayMovement:!1,swiperElementNodeName:"SWIPER-CONTAINER",touchEventsTarget:"wrapper",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,eventsPrefix:"swiper",enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,snapToSlideEdge:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:5,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,loop:!1,loopAddBlankSlides:!0,loopAdditionalSlides:0,loopPreventsSliding:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,maxBackfaceHiddenSlides:10,containerModifierClass:"swiper-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-blank",slideActiveClass:"swiper-slide-active",slideVisibleClass:"swiper-slide-visible",slideFullyVisibleClass:"swiper-slide-fully-visible",slideNextClass:"swiper-slide-next",slidePrevClass:"swiper-slide-prev",wrapperClass:"swiper-wrapper",lazyPreloaderClass:"swiper-lazy-preloader",lazyPreloadPrevNext:0,runCallbacksOnInit:!0,_emitClasses:!1};function g4(e,t){return function(r={}){const i=Object.keys(r)[0],o=r[i];if(typeof o!="object"||o===null){yt(t,r);return}if(e[i]===!0&&(e[i]={enabled:!0}),i==="navigation"&&e[i]&&e[i].enabled&&!e[i].prevEl&&!e[i].nextEl&&(e[i].auto=!0),["pagination","scrollbar"].indexOf(i)>=0&&e[i]&&e[i].enabled&&!e[i].el&&(e[i].auto=!0),!(i in e&&"enabled"in o)){yt(t,r);return}typeof e[i]=="object"&&!("enabled"in e[i])&&(e[i].enabled=!0),e[i]||(e[i]={enabled:!1}),yt(t,r)}}const yc={eventsEmitter:p3,update:C3,translate:j3,transition:D3,slide:V3,loop:G3,grabCursor:X3,events:a4,breakpoints:u4,checkOverflow:m4,classes:p4},xc={};let Kp=class fn{constructor(...t){let n,r;t.length===1&&t[0].constructor&&Object.prototype.toString.call(t[0]).slice(8,-1)==="Object"?r=t[0]:[n,r]=t,r||(r={}),r=yt({},r),n&&!r.el&&(r.el=n);const i=sn();if(r.el&&typeof r.el=="string"&&i.querySelectorAll(r.el).length>1){const s=[];return i.querySelectorAll(r.el).forEach(u=>{const c=yt({},r,{el:u});s.push(new fn(c))}),s}const o=this;o.__swiper__=!0,o.support=pb(),o.device=hb({userAgent:r.userAgent}),o.browser=mb(),o.eventsListeners={},o.eventsAnyListeners=[],o.modules=[...o.__modules__],r.modules&&Array.isArray(r.modules)&&r.modules.forEach(s=>{typeof s=="function"&&o.modules.indexOf(s)<0&&o.modules.push(s)});const a={};o.modules.forEach(s=>{s({params:r,swiper:o,extendParams:g4(r,a),on:o.on.bind(o),once:o.once.bind(o),off:o.off.bind(o),emit:o.emit.bind(o)})});const l=yt({},tf,a);return o.params=yt({},l,xc,r),o.originalParams=yt({},o.params),o.passedParams=yt({},r),o.params&&o.params.on&&Object.keys(o.params.on).forEach(s=>{o.on(s,o.params.on[s])}),o.params&&o.params.onAny&&o.onAny(o.params.onAny),Object.assign(o,{enabled:o.params.enabled,el:n,classNames:[],slides:[],slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal(){return o.params.direction==="horizontal"},isVertical(){return o.params.direction==="vertical"},activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,cssOverflowAdjustment(){return Math.trunc(this.translate/2**23)*2**23},allowSlideNext:o.params.allowSlideNext,allowSlidePrev:o.params.allowSlidePrev,touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:o.params.focusableElements,lastClickTime:0,clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,startMoving:void 0,pointerId:null,touchId:null},allowClick:!0,allowTouchMove:o.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),o.emit("_swiper"),o.params.init&&o.init(),o}getDirectionLabel(t){return this.isHorizontal()?t:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[t]}getSlideIndex(t){const{slidesEl:n,params:r}=this,i=nn(n,`.${r.slideClass}, swiper-slide`),o=Ks(i[0]);return Ks(t)-o}getSlideIndexByData(t){return this.getSlideIndex(this.slides.find(n=>n.getAttribute("data-swiper-slide-index")*1===t))}getSlideIndexWhenGrid(t){return this.grid&&this.params.grid&&this.params.grid.rows>1&&(this.params.grid.fill==="column"?t=Math.floor(t/this.params.grid.rows):this.params.grid.fill==="row"&&(t=t%Math.ceil(this.slides.length/this.params.grid.rows))),t}recalcSlides(){const t=this,{slidesEl:n,params:r}=t;t.slides=nn(n,`.${r.slideClass}, swiper-slide`)}enable(){const t=this;t.enabled||(t.enabled=!0,t.params.grabCursor&&t.setGrabCursor(),t.emit("enable"))}disable(){const t=this;t.enabled&&(t.enabled=!1,t.params.grabCursor&&t.unsetGrabCursor(),t.emit("disable"))}setProgress(t,n){const r=this;t=Math.min(Math.max(t,0),1);const i=r.minTranslate(),a=(r.maxTranslate()-i)*t+i;r.translateTo(a,typeof n>"u"?0:n),r.updateActiveIndex(),r.updateSlidesClasses()}emitContainerClasses(){const t=this;if(!t.params._emitClasses||!t.el)return;const n=t.el.className.split(" ").filter(r=>r.indexOf("swiper")===0||r.indexOf(t.params.containerModifierClass)===0);t.emit("_containerClasses",n.join(" "))}getSlideClasses(t){const n=this;return n.destroyed?"":t.className.split(" ").filter(r=>r.indexOf("swiper-slide")===0||r.indexOf(n.params.slideClass)===0).join(" ")}emitSlidesClasses(){const t=this;if(!t.params._emitClasses||!t.el)return;const n=[];t.slides.forEach(r=>{const i=t.getSlideClasses(r);n.push({slideEl:r,classNames:i}),t.emit("_slideClass",r,i)}),t.emit("_slideClasses",n)}slidesPerViewDynamic(t="current",n=!1){const r=this,{params:i,slides:o,slidesGrid:a,slidesSizesGrid:l,size:s,activeIndex:u}=r;let c=1;if(typeof i.slidesPerView=="number")return i.slidesPerView;if(i.centeredSlides){let d=o[u]?Math.ceil(o[u].swiperSlideSize):0,g;for(let m=u+1;m<o.length;m+=1)o[m]&&!g&&(d+=Math.ceil(o[m].swiperSlideSize),c+=1,d>s&&(g=!0));for(let m=u-1;m>=0;m-=1)o[m]&&!g&&(d+=o[m].swiperSlideSize,c+=1,d>s&&(g=!0))}else if(t==="current")for(let d=u+1;d<o.length;d+=1)(n?a[d]+l[d]-a[u]<s:a[d]-a[u]<s)&&(c+=1);else for(let d=u-1;d>=0;d-=1)a[u]-a[d]<s&&(c+=1);return c}update(){const t=this;if(!t||t.destroyed)return;const{snapGrid:n,params:r}=t;r.breakpoints&&t.setBreakpoint(),[...t.el.querySelectorAll('[loading="lazy"]')].forEach(a=>{a.complete&&cs(t,a)}),t.updateSize(),t.updateSlides(),t.updateProgress(),t.updateSlidesClasses();function i(){const a=t.rtlTranslate?t.translate*-1:t.translate,l=Math.min(Math.max(a,t.maxTranslate()),t.minTranslate());t.setTranslate(l),t.updateActiveIndex(),t.updateSlidesClasses()}let o;if(r.freeMode&&r.freeMode.enabled&&!r.cssMode)i(),r.autoHeight&&t.updateAutoHeight();else{if((r.slidesPerView==="auto"||r.slidesPerView>1)&&t.isEnd&&!r.centeredSlides){const a=t.virtual&&r.virtual.enabled?t.virtual.slides:t.slides;o=t.slideTo(a.length-1,0,!1,!0)}else o=t.slideTo(t.activeIndex,0,!1,!0);o||i()}r.watchOverflow&&n!==t.snapGrid&&t.checkOverflow(),t.emit("update")}changeDirection(t,n=!0){const r=this,i=r.params.direction;return t||(t=i==="horizontal"?"vertical":"horizontal"),t===i||t!=="horizontal"&&t!=="vertical"||(r.el.classList.remove(`${r.params.containerModifierClass}${i}`),r.el.classList.add(`${r.params.containerModifierClass}${t}`),r.emitContainerClasses(),r.params.direction=t,r.slides.forEach(o=>{t==="vertical"?o.style.width="":o.style.height=""}),r.emit("changeDirection"),n&&r.update()),r}changeLanguageDirection(t){const n=this;n.rtl&&t==="rtl"||!n.rtl&&t==="ltr"||(n.rtl=t==="rtl",n.rtlTranslate=n.params.direction==="horizontal"&&n.rtl,n.rtl?(n.el.classList.add(`${n.params.containerModifierClass}rtl`),n.el.dir="rtl"):(n.el.classList.remove(`${n.params.containerModifierClass}rtl`),n.el.dir="ltr"),n.update())}mount(t){const n=this;if(n.mounted)return!0;let r=t||n.params.el;if(typeof r=="string"&&(r=document.querySelector(r)),!r)return!1;r.swiper=n,r.parentNode&&r.parentNode.host&&r.parentNode.host.nodeName===n.params.swiperElementNodeName.toUpperCase()&&(n.isElement=!0);const i=()=>`.${(n.params.wrapperClass||"").trim().split(" ").join(".")}`;let a=(()=>r&&r.shadowRoot&&r.shadowRoot.querySelector?r.shadowRoot.querySelector(i()):nn(r,i())[0])();return!a&&n.params.createElements&&(a=Xs("div",n.params.wrapperClass),r.append(a),nn(r,`.${n.params.slideClass}`).forEach(l=>{a.append(l)})),Object.assign(n,{el:r,wrapperEl:a,slidesEl:n.isElement&&!r.parentNode.host.slideSlots?r.parentNode.host:a,hostEl:n.isElement?r.parentNode.host:r,mounted:!0,rtl:r.dir.toLowerCase()==="rtl"||Yn(r,"direction")==="rtl",rtlTranslate:n.params.direction==="horizontal"&&(r.dir.toLowerCase()==="rtl"||Yn(r,"direction")==="rtl"),wrongRTL:Yn(a,"display")==="-webkit-box"}),!0}init(t){const n=this;if(n.initialized||n.mount(t)===!1)return n;n.emit("beforeInit"),n.params.breakpoints&&n.setBreakpoint(),n.addClasses(),n.updateSize(),n.updateSlides(),n.params.watchOverflow&&n.checkOverflow(),n.params.grabCursor&&n.enabled&&n.setGrabCursor(),n.params.loop&&n.virtual&&n.params.virtual.enabled?n.slideTo(n.params.initialSlide+n.virtual.slidesBefore,0,n.params.runCallbacksOnInit,!1,!0):n.slideTo(n.params.initialSlide,0,n.params.runCallbacksOnInit,!1,!0),n.params.loop&&n.loopCreate(void 0,!0),n.attachEvents();const i=[...n.el.querySelectorAll('[loading="lazy"]')];return n.isElement&&i.push(...n.hostEl.querySelectorAll('[loading="lazy"]')),i.forEach(o=>{o.complete?cs(n,o):o.addEventListener("load",a=>{cs(n,a.target)})}),ef(n),n.initialized=!0,ef(n),n.emit("init"),n.emit("afterInit"),n}destroy(t=!0,n=!0){const r=this,{params:i,el:o,wrapperEl:a,slides:l}=r;return typeof r.params>"u"||r.destroyed||(r.emit("beforeDestroy"),r.initialized=!1,r.detachEvents(),i.loop&&r.loopDestroy(),n&&(r.removeClasses(),o&&typeof o!="string"&&o.removeAttribute("style"),a&&a.removeAttribute("style"),l&&l.length&&l.forEach(s=>{s.classList.remove(i.slideVisibleClass,i.slideFullyVisibleClass,i.slideActiveClass,i.slideNextClass,i.slidePrevClass),s.removeAttribute("style"),s.removeAttribute("data-swiper-slide-index")})),r.emit("destroy"),Object.keys(r.eventsListeners).forEach(s=>{r.off(s)}),t!==!1&&(r.el&&typeof r.el!="string"&&(r.el.swiper=null),QP(r)),r.destroyed=!0),null}static extendDefaults(t){yt(xc,t)}static get extendedDefaults(){return xc}static get defaults(){return tf}static installModule(t){fn.prototype.__modules__||(fn.prototype.__modules__=[]);const n=fn.prototype.__modules__;typeof t=="function"&&n.indexOf(t)<0&&n.push(t)}static use(t){return Array.isArray(t)?(t.forEach(n=>fn.installModule(n)),fn):(fn.installModule(t),fn)}};Object.keys(yc).forEach(e=>{Object.keys(yc[e]).forEach(t=>{Kp.prototype[t]=yc[e][t]})});Kp.use([d3,f3]);const yb=["eventsPrefix","injectStyles","injectStylesUrls","modules","init","_direction","oneWayMovement","swiperElementNodeName","touchEventsTarget","initialSlide","_speed","cssMode","updateOnWindowResize","resizeObserver","nested","focusableElements","_enabled","_width","_height","preventInteractionOnTransition","userAgent","url","_edgeSwipeDetection","_edgeSwipeThreshold","_freeMode","_autoHeight","setWrapperSize","virtualTranslate","_effect","breakpoints","breakpointsBase","_spaceBetween","_slidesPerView","maxBackfaceHiddenSlides","_grid","_slidesPerGroup","_slidesPerGroupSkip","_slidesPerGroupAuto","_centeredSlides","_centeredSlidesBounds","_slidesOffsetBefore","_slidesOffsetAfter","normalizeSlideIndex","_centerInsufficientSlides","_snapToSlideEdge","_watchOverflow","roundLengths","touchRatio","touchAngle","simulateTouch","_shortSwipes","_longSwipes","longSwipesRatio","longSwipesMs","_followFinger","allowTouchMove","_threshold","touchMoveStopPropagation","touchStartPreventDefault","touchStartForcePreventDefault","touchReleaseOnEdges","uniqueNavElements","_resistance","_resistanceRatio","_watchSlidesProgress","_grabCursor","preventClicks","preventClicksPropagation","_slideToClickedSlide","_loop","loopAdditionalSlides","loopAddBlankSlides","loopPreventsSliding","_rewind","_allowSlidePrev","_allowSlideNext","_swipeHandler","_noSwiping","noSwipingClass","noSwipingSelector","passiveListeners","containerModifierClass","slideClass","slideActiveClass","slideVisibleClass","slideFullyVisibleClass","slideNextClass","slidePrevClass","slideBlankClass","wrapperClass","lazyPreloaderClass","lazyPreloadPrevNext","runCallbacksOnInit","observer","observeParents","observeSlideChildren","a11y","_autoplay","_controller","coverflowEffect","cubeEffect","fadeEffect","flipEffect","creativeEffect","cardsEffect","hashNavigation","history","keyboard","mousewheel","_navigation","_pagination","parallax","_scrollbar","_thumbs","virtual","zoom","control"];function Tr(e){return typeof e=="object"&&e!==null&&e.constructor&&Object.prototype.toString.call(e).slice(8,-1)==="Object"&&!e.__swiper__}function si(e,t){const n=["__proto__","constructor","prototype"];Object.keys(t).filter(r=>n.indexOf(r)<0).forEach(r=>{typeof e[r]>"u"?e[r]=t[r]:Tr(t[r])&&Tr(e[r])&&Object.keys(t[r]).length>0?t[r].__swiper__?e[r]=t[r]:si(e[r],t[r]):e[r]=t[r]})}function xb(e={}){return e.navigation&&typeof e.navigation.nextEl>"u"&&typeof e.navigation.prevEl>"u"}function bb(e={}){return e.pagination&&typeof e.pagination.el>"u"}function wb(e={}){return e.scrollbar&&typeof e.scrollbar.el>"u"}function Sb(e=""){const t=e.split(" ").map(r=>r.trim()).filter(r=>!!r),n=[];return t.forEach(r=>{n.indexOf(r)<0&&n.push(r)}),n.join(" ")}function v4(e=""){return e?e.includes("swiper-wrapper")?e:`swiper-wrapper ${e}`:"swiper-wrapper"}function y4({swiper:e,slides:t,passedParams:n,changedParams:r,nextEl:i,prevEl:o,scrollbarEl:a,paginationEl:l}){const s=r.filter(S=>S!=="children"&&S!=="direction"&&S!=="wrapperClass"),{params:u,pagination:c,navigation:d,scrollbar:g,virtual:m,thumbs:v}=e;let x,w,f,p,y,b,E,k;r.includes("thumbs")&&n.thumbs&&n.thumbs.swiper&&!n.thumbs.swiper.destroyed&&u.thumbs&&(!u.thumbs.swiper||u.thumbs.swiper.destroyed)&&(x=!0),r.includes("controller")&&n.controller&&n.controller.control&&u.controller&&!u.controller.control&&(w=!0),r.includes("pagination")&&n.pagination&&(n.pagination.el||l)&&(u.pagination||u.pagination===!1)&&c&&!c.el&&(f=!0),r.includes("scrollbar")&&n.scrollbar&&(n.scrollbar.el||a)&&(u.scrollbar||u.scrollbar===!1)&&g&&!g.el&&(p=!0),r.includes("navigation")&&n.navigation&&(n.navigation.prevEl||o)&&(n.navigation.nextEl||i)&&(u.navigation||u.navigation===!1)&&d&&!d.prevEl&&!d.nextEl&&(y=!0);const _=S=>{e[S]&&(e[S].destroy(),S==="navigation"?(e.isElement&&(e[S].prevEl.remove(),e[S].nextEl.remove()),u[S].prevEl=void 0,u[S].nextEl=void 0,e[S].prevEl=void 0,e[S].nextEl=void 0):(e.isElement&&e[S].el.remove(),u[S].el=void 0,e[S].el=void 0))};r.includes("loop")&&e.isElement&&(u.loop&&!n.loop?b=!0:!u.loop&&n.loop?E=!0:k=!0),s.forEach(S=>{if(Tr(u[S])&&Tr(n[S]))Object.assign(u[S],n[S]),(S==="navigation"||S==="pagination"||S==="scrollbar")&&"enabled"in n[S]&&!n[S].enabled&&_(S);else{const M=n[S];(M===!0||M===!1)&&(S==="navigation"||S==="pagination"||S==="scrollbar")?M===!1&&_(S):u[S]=n[S]}}),s.includes("controller")&&!w&&e.controller&&e.controller.control&&u.controller&&u.controller.control&&(e.controller.control=u.controller.control),r.includes("children")&&t&&m&&u.virtual.enabled?(m.slides=t,m.update(!0)):r.includes("virtual")&&m&&u.virtual.enabled&&(t&&(m.slides=t),m.update(!0)),r.includes("children")&&t&&u.loop&&(k=!0),x&&v.init()&&v.update(!0),w&&(e.controller.control=u.controller.control),f&&(e.isElement&&(!l||typeof l=="string")&&(l=document.createElement("div"),l.classList.add("swiper-pagination"),l.part.add("pagination"),e.el.appendChild(l)),l&&(u.pagination.el=l),c.init(),c.render(),c.update()),p&&(e.isElement&&(!a||typeof a=="string")&&(a=document.createElement("div"),a.classList.add("swiper-scrollbar"),a.part.add("scrollbar"),e.el.appendChild(a)),a&&(u.scrollbar.el=a),g.init(),g.updateSize(),g.setTranslate()),y&&(e.isElement&&((!i||typeof i=="string")&&(i=document.createElement("div"),i.classList.add("swiper-button-next"),Bo(i,e.navigation.arrowSvg),i.part.add("button-next"),e.el.appendChild(i)),(!o||typeof o=="string")&&(o=document.createElement("div"),o.classList.add("swiper-button-prev"),Bo(o,e.navigation.arrowSvg),o.part.add("button-prev"),e.el.appendChild(o))),i&&(u.navigation.nextEl=i),o&&(u.navigation.prevEl=o),d.init(),d.update()),r.includes("allowSlideNext")&&(e.allowSlideNext=n.allowSlideNext),r.includes("allowSlidePrev")&&(e.allowSlidePrev=n.allowSlidePrev),r.includes("direction")&&e.changeDirection(n.direction,!1),(b||k)&&e.loopDestroy(),(E||k)&&e.loopCreate(),e.update()}function x4(e={},t=!0){const n={on:{}},r={},i={};si(n,tf),n._emitClasses=!0,n.init=!1;const o={},a=yb.map(s=>s.replace(/_/,"")),l=Object.assign({},e);return Object.keys(l).forEach(s=>{typeof e[s]>"u"||(a.indexOf(s)>=0?Tr(e[s])?(n[s]={},i[s]={},si(n[s],e[s]),si(i[s],e[s])):(n[s]=e[s],i[s]=e[s]):s.search(/on[A-Z]/)===0&&typeof e[s]=="function"?t?r[`${s[2].toLowerCase()}${s.substr(3)}`]=e[s]:n.on[`${s[2].toLowerCase()}${s.substr(3)}`]=e[s]:o[s]=e[s])}),["navigation","pagination","scrollbar"].forEach(s=>{n[s]===!0&&(n[s]={}),n[s]===!1&&delete n[s]}),{params:n,passedParams:i,rest:o,events:r}}function b4({el:e,nextEl:t,prevEl:n,paginationEl:r,scrollbarEl:i,swiper:o},a){xb(a)&&t&&n&&(o.params.navigation.nextEl=t,o.originalParams.navigation.nextEl=t,o.params.navigation.prevEl=n,o.originalParams.navigation.prevEl=n),bb(a)&&r&&(o.params.pagination.el=r,o.originalParams.pagination.el=r),wb(a)&&i&&(o.params.scrollbar.el=i,o.originalParams.scrollbar.el=i),o.init(e)}function w4(e,t,n,r,i){const o=[];if(!t)return o;const a=s=>{o.indexOf(s)<0&&o.push(s)};if(n&&r){const s=r.map(i),u=n.map(i);s.join("")!==u.join("")&&a("children"),r.length!==n.length&&a("children")}return yb.filter(s=>s[0]==="_").map(s=>s.replace(/_/,"")).forEach(s=>{if(s in e&&s in t)if(Tr(e[s])&&Tr(t[s])){const u=Object.keys(e[s]),c=Object.keys(t[s]);u.length!==c.length?a(s):(u.forEach(d=>{e[s][d]!==t[s][d]&&a(s)}),c.forEach(d=>{e[s][d]!==t[s][d]&&a(s)}))}else e[s]!==t[s]&&a(s)}),o}const S4=e=>{!e||e.destroyed||!e.params.virtual||e.params.virtual&&!e.params.virtual.enabled||(e.updateSlides(),e.updateProgress(),e.updateSlidesClasses(),e.emit("_virtualUpdated"),e.parallax&&e.params.parallax&&e.params.parallax.enabled&&e.parallax.setTranslate())};function Qs(){return Qs=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Qs.apply(this,arguments)}function _b(e){return e.type&&e.type.displayName&&e.type.displayName.includes("SwiperSlide")}function Cb(e){const t=[];return U.Children.toArray(e).forEach(n=>{_b(n)?t.push(n):n.props&&n.props.children&&Cb(n.props.children).forEach(r=>t.push(r))}),t}function _4(e){const t=[],n={"container-start":[],"container-end":[],"wrapper-start":[],"wrapper-end":[]};return U.Children.toArray(e).forEach(r=>{if(_b(r))t.push(r);else if(r.props&&r.props.slot&&n[r.props.slot])n[r.props.slot].push(r);else if(r.props&&r.props.children){const i=Cb(r.props.children);i.length>0?i.forEach(o=>t.push(o)):n["container-end"].push(r)}else n["container-end"].push(r)}),{slides:t,slots:n}}function C4(e,t,n){if(!n)return null;const r=c=>{let d=c;return c<0?d=t.length+c:d>=t.length&&(d=d-t.length),d},i=e.isHorizontal()?{[e.rtlTranslate?"right":"left"]:`${n.offset}px`}:{top:`${n.offset}px`},{from:o,to:a}=n,l=e.params.loop?-t.length:0,s=e.params.loop?t.length*2:t.length,u=[];for(let c=l;c<s;c+=1)c>=o&&c<=a&&u.push(t[r(c)]);return u.map((c,d)=>U.cloneElement(c,{swiper:e,style:i,key:c.props.virtualIndex||c.key||`slide-${d}`}))}function mo(e,t){return typeof window>"u"?T.useEffect(e,t):T.useLayoutEffect(e,t)}const Ig=T.createContext(null),E4=T.createContext(null),Eb=T.forwardRef(({className:e,tag:t="div",wrapperTag:n="div",children:r,onSwiper:i,...o}={},a)=>{let l=!1;const[s,u]=T.useState("swiper"),[c,d]=T.useState(null),[g,m]=T.useState(!1),v=T.useRef(!1),x=T.useRef(null),w=T.useRef(null),f=T.useRef(null),p=T.useRef(null),y=T.useRef(null),b=T.useRef(null),E=T.useRef(null),k=T.useRef(null),{params:_,passedParams:S,rest:M,events:j}=x4(o),{slides:I,slots:P}=_4(r),$=()=>{m(!g)};Object.assign(_.on,{_containerClasses(O,D){u(D)}});const A=()=>{Object.assign(_.on,j),l=!0;const O={..._};if(delete O.wrapperClass,w.current=new Kp(O),w.current.virtual&&w.current.params.virtual.enabled){w.current.virtual.slides=I;const D={cache:!1,slides:I,renderExternal:d,renderExternalUpdate:!1};si(w.current.params.virtual,D),si(w.current.originalParams.virtual,D)}};x.current||A(),w.current&&w.current.on("_beforeBreakpoint",$);const R=()=>{l||!j||!w.current||Object.keys(j).forEach(O=>{w.current.on(O,j[O])})},F=()=>{!j||!w.current||Object.keys(j).forEach(O=>{w.current.off(O,j[O])})};T.useEffect(()=>()=>{w.current&&w.current.off("_beforeBreakpoint",$)}),T.useEffect(()=>{!v.current&&w.current&&(w.current.emitSlidesClasses(),v.current=!0)}),mo(()=>{if(a&&(a.current=x.current),!!x.current)return w.current.destroyed&&A(),b4({el:x.current,nextEl:y.current,prevEl:b.current,paginationEl:E.current,scrollbarEl:k.current,swiper:w.current},_),i&&!w.current.destroyed&&i(w.current),()=>{w.current&&!w.current.destroyed&&w.current.destroy(!0,!1)}},[]),mo(()=>{R();const O=w4(S,f.current,I,p.current,D=>D.key);return f.current=S,p.current=I,O.length&&w.current&&!w.current.destroyed&&y4({swiper:w.current,slides:I,passedParams:S,changedParams:O,nextEl:y.current,prevEl:b.current,scrollbarEl:k.current,paginationEl:E.current}),()=>{F()}}),mo(()=>{S4(w.current)},[c]);function L(){return _.virtual?C4(w.current,I,c):I.map((O,D)=>U.cloneElement(O,{swiper:w.current,swiperSlideIndex:D}))}return U.createElement(t,Qs({ref:x,className:Sb(`${s}${e?` ${e}`:""}`)},M),U.createElement(E4.Provider,{value:w.current},P["container-start"],U.createElement(n,{className:v4(_.wrapperClass)},P["wrapper-start"],L(),P["wrapper-end"]),xb(_)&&U.createElement(U.Fragment,null,U.createElement("div",{ref:b,className:"swiper-button-prev"}),U.createElement("div",{ref:y,className:"swiper-button-next"})),wb(_)&&U.createElement("div",{ref:k,className:"swiper-scrollbar"}),bb(_)&&U.createElement("div",{ref:E,className:"swiper-pagination"}),P["container-end"]))});Eb.displayName="Swiper";const kb=T.forwardRef(({tag:e="div",children:t,className:n="",swiper:r,zoom:i,lazy:o,virtualIndex:a,swiperSlideIndex:l,...s}={},u)=>{const c=T.useRef(null),[d,g]=T.useState("swiper-slide"),[m,v]=T.useState(!1);function x(y,b,E){b===c.current&&g(E)}mo(()=>{if(typeof l<"u"&&(c.current.swiperSlideIndex=l),u&&(u.current=c.current),!(!c.current||!r)){if(r.destroyed){d!=="swiper-slide"&&g("swiper-slide");return}return r.on("_slideClass",x),()=>{r&&r.off("_slideClass",x)}}}),mo(()=>{r&&c.current&&!r.destroyed&&g(r.getSlideClasses(c.current))},[r]);const w={isActive:d.indexOf("swiper-slide-active")>=0,isVisible:d.indexOf("swiper-slide-visible")>=0,isPrev:d.indexOf("swiper-slide-prev")>=0,isNext:d.indexOf("swiper-slide-next")>=0},f=()=>typeof t=="function"?t(w):t,p=()=>{v(!0)};return U.createElement(e,Qs({ref:c,className:Sb(`${d}${n?` ${n}`:""}`),"data-swiper-slide-index":a,onLoad:p},s),i&&U.createElement(Ig.Provider,{value:w},U.createElement("div",{className:"swiper-zoom-container","data-swiper-zoom":typeof i=="number"?i:void 0},f(),o&&!m&&U.createElement("div",{className:"swiper-lazy-preloader",ref:y=>{y&&(y.lazyPreloaderManaged=!0)}}))),!i&&U.createElement(Ig.Provider,{value:w},f(),o&&!m&&U.createElement("div",{className:"swiper-lazy-preloader",ref:y=>{y&&(y.lazyPreloaderManaged=!0)}})))});kb.displayName="SwiperSlide";const k4=C.section`
  width: 100%;

  margin: 20px auto;
  border-radius: 24;
  position: relative;
  --swiper-theme-color: var(--orange-color); 

`,T4=C.div`
  height: 450px;
  background-image: linear-gradient(90deg, rgba(27, 26, 22, 0.85) 0%, rgba(44, 42, 37, 0.2) 100%), 
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
`,O4=C.div`
text-align: left;
  max-width: 600px;
  
  h1 {
    color:  #e6e5e2;
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
`,P4=C(Te)`
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
`,j4=[{id:1,title:"Дідів хлів - найкращий вибір для Вашого велосипеда",desc:"Якісні запчастини, професійний серевіс та індивідуальний підхід. Створюйте ідеальний байк разом з нами",img:"/Didiv/bike2-hero.jpeg"},{id:2,title:"Перевірені велодеталі з пробігом бла бла",desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam reprehenderit obcaecati molestias est alias vitae laboriosam nulla perferendis officia incidunt aliquid voluptatem iste libero, officiis ex modi enim repellat. Consectetur!",img:"/Didiv/inside.webp"}],M4=()=>h.jsx(k4,{children:h.jsx(Eb,{modules:[o3,s3,a3],spaceBetween:0,slidesPerView:1,navigation:!0,pagination:{clickable:!0},autoplay:{delay:5e3},loop:!0,children:j4.map(e=>h.jsx(kb,{children:h.jsx(T4,{bg:e.img,children:h.jsxs(O4,{children:[h.jsx("h1",{children:e.title}),h.jsx("p",{children:e.desc}),h.jsx(P4,{to:"/catalog",children:"До каталогу"})]})})},e.id))})}),Qp=[{id:1,name:"Шосейні безкамерні колеса Shimano Ultegra WH-6800",category:"wheels",brand:"Shimano",color:"чорні",type:"Шосейні",size:"29`",weight:1622,price:2800,inStock:!0,description:"Вага 1633 грами без ексцентриків (945+688), крутять ідеально, дуже довгий накат, барабан під 11-12 шв. шосе касети, рідні ексцентрики, ширина 16.3/21.3, обода без отворів для ніпелів, не потребують стрічки, без корозії, рівні. Мінус - знос, спереду сильний, ззаду менше, вживу не такий страшний, як показали на фото, короче кажучи, їздити можна сміливо.",image:["/Didiv/catalog/wheels.jpeg"]},{id:2,name:"Сідло Selle San Marco Aspide Superleggera",category:"saddles",price:800,inStock:!0,size:"29`",description:"140 мм, вага 171 гр, рейки алюміній, корпус пластик, підкладка Pebax, оббивка Microfeel.",image:[]},{id:3,name:"Шосейні безкамерні колеса Shimano Ultegra WH-6800",category:"wheels",price:2800,weight:1622,inStock:!0,description:"Вага 1633 грами без ексцентриків (945+688), крутять ідеально...",image:["/Didiv/catalog/wheels.jpeg"]},{id:4,name:"Шосейні безкамерні колеса Shimano Ultegra WH-6800",category:"wheels",price:2800,weight:1622,inStock:!0,description:"Вага 1633 грами без ексцентриків...",image:["/Didiv/catalog/wheels.jpeg"]},{id:5,name:'Рама MTB 17"',category:"Рами",price:4500,inStock:!0,image:"/Didiv/catalog/frame_mtb_17.jpg"},{id:6,name:'Рама Road 19"',category:"Рами",price:5200,inStock:!0,image:"/Didiv/catalog/frame_road_19.jpg"},{id:7,name:"Винос керма Alu",category:"Виноси",price:800,inStock:!0,image:"/Didiv/catalog/stem_alu.jpg"},{id:8,name:"Винос керма Carbon",category:"Виноси",price:1800,inStock:!1,image:"/Didiv/catalog/stem_carbon.jpg"},{id:9,name:"Кермо MTB 680мм",category:"Керма",price:1200,inStock:!0,image:"/Didiv/catalog/handlebar_mtb.jpg"},{id:10,name:"Кермо Road 420мм",category:"Керма",price:1400,inStock:!0,image:"/Didiv/catalog/handlebar_road.jpg"},{id:11,name:"Шосейні безкамерні колеса Shimano Ultegra WH-6800",category:"wheels",price:2800,inStock:!0,description:"Вага 1633 грами без ексцентриків...",image:["/Didiv/catalog/wheels.jpeg","/Didiv/catalog/bikes.jpeg"]},{id:12,name:"Шосейні безкамерні колеса Shimano Ultegra WH-6800",category:"wheels",price:2800,inStock:!0,description:"Вага 1633 грами...",image:["/Didiv/catalog/wheels.jpeg"]},{id:13,name:"Шосейні безкамерні колеса Shimano Ultegra WH-6800",category:"wheels",price:2800,inStock:!0,description:"Вага 1633 грами...",image:["/Didiv/catalog/wheels.jpeg"]},{id:14,name:"Шосейні безкамерні колеса Shimano Ultegra WH-6800",category:"wheels",price:2800,inStock:!0,description:"Вага 1633 грами...",image:["/Didiv/catalog/wheels.jpeg"]}],I4=C.section`

  width: 100%;
  font-family: var(--main-font);
  padding-top: 30px;
  
  
`,$4=C.h2`
   font-size: 30px;
      text-transform: uppercase;
  font-weight: 700;
  margin-bottom: 20px;
  color: #333;
  @media screen and (min-width: 768px) {
 font-size: 35px;
  }

`,D4=C.div`
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
`,R4=C.div`

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
`,A4=C(Te)`
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
`,L4=C.span`
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
`,F4=C.div`
  padding: 10px 0;
`,z4=C.h3`
  font-size: 15px;
  font-weight: 600;
  margin-bottom: 8px;
  color: #333;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,N4=C.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,B4=C.span`
  font-size: 17px;
  font-weight: 800;
  color: var(--black-color);
`,V4=C.button`
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
`;C(Te)`
color: var(--white-color);
padding: 10px 20px;
 background:var( --orange-color); 
  border-radius: 15px;
  text-decoration: none;

`;const H4=C(Te)`
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

`,U4=C.div`
  text-align: center;
  color: white;

  p {
    font-size: 24px;
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 12px;
  }
  
`,W4=C.div`
  width: 40px;
  height: 40px;
  border: 2px solid white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`;function Fe(e){return`Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}var G4=(()=>typeof Symbol=="function"&&Symbol.observable||"@@observable")(),$g=G4,bc=()=>Math.random().toString(36).substring(7).split("").join("."),Y4={INIT:`@@redux/INIT${bc()}`,REPLACE:`@@redux/REPLACE${bc()}`,PROBE_UNKNOWN_ACTION:()=>`@@redux/PROBE_UNKNOWN_ACTION${bc()}`},Zs=Y4;function Zp(e){if(typeof e!="object"||e===null)return!1;let t=e;for(;Object.getPrototypeOf(t)!==null;)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t||Object.getPrototypeOf(e)===null}function Jp(e,t,n){if(typeof e!="function")throw new Error(Fe(2));if(typeof t=="function"&&typeof n=="function"||typeof n=="function"&&typeof arguments[3]=="function")throw new Error(Fe(0));if(typeof t=="function"&&typeof n>"u"&&(n=t,t=void 0),typeof n<"u"){if(typeof n!="function")throw new Error(Fe(1));return n(Jp)(e,t)}let r=e,i=t,o=new Map,a=o,l=0,s=!1;function u(){a===o&&(a=new Map,o.forEach((w,f)=>{a.set(f,w)}))}function c(){if(s)throw new Error(Fe(3));return i}function d(w){if(typeof w!="function")throw new Error(Fe(4));if(s)throw new Error(Fe(5));let f=!0;u();const p=l++;return a.set(p,w),function(){if(f){if(s)throw new Error(Fe(6));f=!1,u(),a.delete(p),o=null}}}function g(w){if(!Zp(w))throw new Error(Fe(7));if(typeof w.type>"u")throw new Error(Fe(8));if(typeof w.type!="string")throw new Error(Fe(17));if(s)throw new Error(Fe(9));try{s=!0,i=r(i,w)}finally{s=!1}return(o=a).forEach(p=>{p()}),w}function m(w){if(typeof w!="function")throw new Error(Fe(10));r=w,g({type:Zs.REPLACE})}function v(){const w=d;return{subscribe(f){if(typeof f!="object"||f===null)throw new Error(Fe(11));function p(){const b=f;b.next&&b.next(c())}return p(),{unsubscribe:w(p)}},[$g](){return this}}}return g({type:Zs.INIT}),{dispatch:g,subscribe:d,getState:c,replaceReducer:m,[$g]:v}}function q4(e){Object.keys(e).forEach(t=>{const n=e[t];if(typeof n(void 0,{type:Zs.INIT})>"u")throw new Error(Fe(12));if(typeof n(void 0,{type:Zs.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(Fe(13))})}function X4(e){const t=Object.keys(e),n={};for(let o=0;o<t.length;o++){const a=t[o];typeof e[a]=="function"&&(n[a]=e[a])}const r=Object.keys(n);let i;try{q4(n)}catch(o){i=o}return function(a={},l){if(i)throw i;let s=!1;const u={};for(let c=0;c<r.length;c++){const d=r[c],g=n[d],m=a[d],v=g(m,l);if(typeof v>"u")throw l&&l.type,new Error(Fe(14));u[d]=v,s=s||v!==m}return s=s||r.length!==Object.keys(a).length,s?u:a}}function Js(...e){return e.length===0?t=>t:e.length===1?e[0]:e.reduce((t,n)=>(...r)=>t(n(...r)))}function K4(...e){return t=>(n,r)=>{const i=t(n,r);let o=()=>{throw new Error(Fe(15))};const a={getState:i.getState,dispatch:(s,...u)=>o(s,...u)},l=e.map(s=>s(a));return o=Js(...l)(i.dispatch),{...i,dispatch:o}}}function Q4(e){return Zp(e)&&"type"in e&&typeof e.type=="string"}var Tb=Symbol.for("immer-nothing"),Dg=Symbol.for("immer-draftable"),tt=Symbol.for("immer-state");function Vt(e,...t){throw new Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)}var bt=Object,bi=bt.getPrototypeOf,el="constructor",cu="prototype",nf="configurable",tl="enumerable",ds="writable",Vo="value",Pn=e=>!!e&&!!e[tt];function Xt(e){var t;return e?Ob(e)||fu(e)||!!e[Dg]||!!((t=e[el])!=null&&t[Dg])||pu(e)||hu(e):!1}var Z4=bt[cu][el].toString(),Rg=new WeakMap;function Ob(e){if(!e||!eh(e))return!1;const t=bi(e);if(t===null||t===bt[cu])return!0;const n=bt.hasOwnProperty.call(t,el)&&t[el];if(n===Object)return!0;if(!Br(n))return!1;let r=Rg.get(n);return r===void 0&&(r=Function.toString.call(n),Rg.set(n,r)),r===Z4}function du(e,t,n=!0){ra(e)===0?(n?Reflect.ownKeys(e):bt.keys(e)).forEach(i=>{t(i,e[i],e)}):e.forEach((r,i)=>t(i,r,e))}function ra(e){const t=e[tt];return t?t.type_:fu(e)?1:pu(e)?2:hu(e)?3:0}var Ag=(e,t,n=ra(e))=>n===2?e.has(t):bt[cu].hasOwnProperty.call(e,t),rf=(e,t,n=ra(e))=>n===2?e.get(t):e[t],nl=(e,t,n,r=ra(e))=>{r===2?e.set(t,n):r===3?e.add(n):e[t]=n};function J4(e,t){return e===t?e!==0||1/e===1/t:e!==e&&t!==t}var fu=Array.isArray,pu=e=>e instanceof Map,hu=e=>e instanceof Set,eh=e=>typeof e=="object",Br=e=>typeof e=="function",wc=e=>typeof e=="boolean";function ej(e){const t=+e;return Number.isInteger(t)&&String(t)===e}var vn=e=>e.copy_||e.base_,th=e=>e.modified_?e.copy_:e.base_;function of(e,t){if(pu(e))return new Map(e);if(hu(e))return new Set(e);if(fu(e))return Array[cu].slice.call(e);const n=Ob(e);if(t===!0||t==="class_only"&&!n){const r=bt.getOwnPropertyDescriptors(e);delete r[tt];let i=Reflect.ownKeys(r);for(let o=0;o<i.length;o++){const a=i[o],l=r[a];l[ds]===!1&&(l[ds]=!0,l[nf]=!0),(l.get||l.set)&&(r[a]={[nf]:!0,[ds]:!0,[tl]:l[tl],[Vo]:e[a]})}return bt.create(bi(e),r)}else{const r=bi(e);if(r!==null&&n)return{...e};const i=bt.create(r);return bt.assign(i,e)}}function nh(e,t=!1){return mu(e)||Pn(e)||!Xt(e)||(ra(e)>1&&bt.defineProperties(e,{set:Ma,add:Ma,clear:Ma,delete:Ma}),bt.freeze(e),t&&du(e,(n,r)=>{nh(r,!0)},!1)),e}function tj(){Vt(2)}var Ma={[Vo]:tj};function mu(e){return e===null||!eh(e)?!0:bt.isFrozen(e)}var rl="MapSet",af="Patches",Lg="ArrayMethods",Pb={};function Or(e){const t=Pb[e];return t||Vt(0,e),t}var Fg=e=>!!Pb[e],Ho,jb=()=>Ho,nj=(e,t)=>({drafts_:[],parent_:e,immer_:t,canAutoFreeze_:!0,unfinalizedDrafts_:0,handledSet_:new Set,processedForPatches_:new Set,mapSetPlugin_:Fg(rl)?Or(rl):void 0,arrayMethodsPlugin_:Fg(Lg)?Or(Lg):void 0});function zg(e,t){t&&(e.patchPlugin_=Or(af),e.patches_=[],e.inversePatches_=[],e.patchListener_=t)}function sf(e){lf(e),e.drafts_.forEach(rj),e.drafts_=null}function lf(e){e===Ho&&(Ho=e.parent_)}var Ng=e=>Ho=nj(Ho,e);function rj(e){const t=e[tt];t.type_===0||t.type_===1?t.revoke_():t.revoked_=!0}function Bg(e,t){t.unfinalizedDrafts_=t.drafts_.length;const n=t.drafts_[0];if(e!==void 0&&e!==n){n[tt].modified_&&(sf(t),Vt(4)),Xt(e)&&(e=Vg(t,e));const{patchPlugin_:i}=t;i&&i.generateReplacementPatches_(n[tt].base_,e,t)}else e=Vg(t,n);return ij(t,e,!0),sf(t),t.patches_&&t.patchListener_(t.patches_,t.inversePatches_),e!==Tb?e:void 0}function Vg(e,t){if(mu(t))return t;const n=t[tt];if(!n)return il(t,e.handledSet_,e);if(!gu(n,e))return t;if(!n.modified_)return n.base_;if(!n.finalized_){const{callbacks_:r}=n;if(r)for(;r.length>0;)r.pop()(e);$b(n,e)}return n.copy_}function ij(e,t,n=!1){!e.parent_&&e.immer_.autoFreeze_&&e.canAutoFreeze_&&nh(t,n)}function Mb(e){e.finalized_=!0,e.scope_.unfinalizedDrafts_--}var gu=(e,t)=>e.scope_===t,oj=[];function Ib(e,t,n,r){const i=vn(e),o=e.type_;if(r!==void 0&&rf(i,r,o)===t){nl(i,r,n,o);return}if(!e.draftLocations_){const l=e.draftLocations_=new Map;du(i,(s,u)=>{if(Pn(u)){const c=l.get(u)||[];c.push(s),l.set(u,c)}})}const a=e.draftLocations_.get(t)??oj;for(const l of a)nl(i,l,n,o)}function aj(e,t,n){e.callbacks_.push(function(i){var l;const o=t;if(!o||!gu(o,i))return;(l=i.mapSetPlugin_)==null||l.fixSetContents(o);const a=th(o);Ib(e,o.draft_??o,a,n),$b(o,i)})}function $b(e,t){var r;if(e.modified_&&!e.finalized_&&(e.type_===3||e.type_===1&&e.allIndicesReassigned_||(((r=e.assigned_)==null?void 0:r.size)??0)>0)){const{patchPlugin_:i}=t;if(i){const o=i.getPath(e);o&&i.generatePatches_(e,o,t)}Mb(e)}}function sj(e,t,n){const{scope_:r}=e;if(Pn(n)){const i=n[tt];gu(i,r)&&i.callbacks_.push(function(){fs(e);const a=th(i);Ib(e,n,a,t)})}else Xt(n)&&e.callbacks_.push(function(){const o=vn(e);e.type_===3?o.has(n)&&il(n,r.handledSet_,r):rf(o,t,e.type_)===n&&r.drafts_.length>1&&(e.assigned_.get(t)??!1)===!0&&e.copy_&&il(rf(e.copy_,t,e.type_),r.handledSet_,r)})}function il(e,t,n){return!n.immer_.autoFreeze_&&n.unfinalizedDrafts_<1||Pn(e)||t.has(e)||!Xt(e)||mu(e)||(t.add(e),du(e,(r,i)=>{if(Pn(i)){const o=i[tt];if(gu(o,n)){const a=th(o);nl(e,r,a,e.type_),Mb(o)}}else Xt(i)&&il(i,t,n)})),e}function lj(e,t){const n=fu(e),r={type_:n?1:0,scope_:t?t.scope_:jb(),modified_:!1,finalized_:!1,assigned_:void 0,parent_:t,base_:e,draft_:null,copy_:null,revoke_:null,isManual_:!1,callbacks_:void 0};let i=r,o=ol;n&&(i=[r],o=Uo);const{revoke:a,proxy:l}=Proxy.revocable(i,o);return r.draft_=l,r.revoke_=a,[l,r]}var ol={get(e,t){if(t===tt)return e;let n=e.scope_.arrayMethodsPlugin_;const r=e.type_===1&&typeof t=="string";if(r&&n!=null&&n.isArrayOperationMethod(t))return n.createMethodInterceptor(e,t);const i=vn(e);if(!Ag(i,t,e.type_))return uj(e,i,t);const o=i[t];if(e.finalized_||!Xt(o)||r&&e.operationMethod&&(n!=null&&n.isMutatingArrayMethod(e.operationMethod))&&ej(t))return o;if(o===Sc(e.base_,t)){fs(e);const a=e.type_===1?+t:t,l=cf(e.scope_,o,e,a);return e.copy_[a]=l}return o},has(e,t){return t in vn(e)},ownKeys(e){return Reflect.ownKeys(vn(e))},set(e,t,n){const r=Db(vn(e),t);if(r!=null&&r.set)return r.set.call(e.draft_,n),!0;if(!e.modified_){const i=Sc(vn(e),t),o=i==null?void 0:i[tt];if(o&&o.base_===n)return e.copy_[t]=n,e.assigned_.set(t,!1),!0;if(J4(n,i)&&(n!==void 0||Ag(e.base_,t,e.type_)))return!0;fs(e),uf(e)}return e.copy_[t]===n&&(n!==void 0||t in e.copy_)||Number.isNaN(n)&&Number.isNaN(e.copy_[t])||(e.copy_[t]=n,e.assigned_.set(t,!0),sj(e,t,n)),!0},deleteProperty(e,t){return fs(e),Sc(e.base_,t)!==void 0||t in e.base_?(e.assigned_.set(t,!1),uf(e)):e.assigned_.delete(t),e.copy_&&delete e.copy_[t],!0},getOwnPropertyDescriptor(e,t){const n=vn(e),r=Reflect.getOwnPropertyDescriptor(n,t);return r&&{[ds]:!0,[nf]:e.type_!==1||t!=="length",[tl]:r[tl],[Vo]:n[t]}},defineProperty(){Vt(11)},getPrototypeOf(e){return bi(e.base_)},setPrototypeOf(){Vt(12)}},Uo={};for(let e in ol){let t=ol[e];Uo[e]=function(){const n=arguments;return n[0]=n[0][0],t.apply(this,n)}}Uo.deleteProperty=function(e,t){return Uo.set.call(this,e,t,void 0)};Uo.set=function(e,t,n){return ol.set.call(this,e[0],t,n,e[0])};function Sc(e,t){const n=e[tt];return(n?vn(n):e)[t]}function uj(e,t,n){var i;const r=Db(t,n);return r?Vo in r?r[Vo]:(i=r.get)==null?void 0:i.call(e.draft_):void 0}function Db(e,t){if(!(t in e))return;let n=bi(e);for(;n;){const r=Object.getOwnPropertyDescriptor(n,t);if(r)return r;n=bi(n)}}function uf(e){e.modified_||(e.modified_=!0,e.parent_&&uf(e.parent_))}function fs(e){e.copy_||(e.assigned_=new Map,e.copy_=of(e.base_,e.scope_.immer_.useStrictShallowCopy_))}var cj=class{constructor(e){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.useStrictIteration_=!1,this.produce=(t,n,r)=>{if(Br(t)&&!Br(n)){const o=n;n=t;const a=this;return function(s=o,...u){return a.produce(s,c=>n.call(this,c,...u))}}Br(n)||Vt(6),r!==void 0&&!Br(r)&&Vt(7);let i;if(Xt(t)){const o=Ng(this),a=cf(o,t,void 0);let l=!0;try{i=n(a),l=!1}finally{l?sf(o):lf(o)}return zg(o,r),Bg(i,o)}else if(!t||!eh(t)){if(i=n(t),i===void 0&&(i=t),i===Tb&&(i=void 0),this.autoFreeze_&&nh(i,!0),r){const o=[],a=[];Or(af).generateReplacementPatches_(t,i,{patches_:o,inversePatches_:a}),r(o,a)}return i}else Vt(1,t)},this.produceWithPatches=(t,n)=>{if(Br(t))return(a,...l)=>this.produceWithPatches(a,s=>t(s,...l));let r,i;return[this.produce(t,n,(a,l)=>{r=a,i=l}),r,i]},wc(e==null?void 0:e.autoFreeze)&&this.setAutoFreeze(e.autoFreeze),wc(e==null?void 0:e.useStrictShallowCopy)&&this.setUseStrictShallowCopy(e.useStrictShallowCopy),wc(e==null?void 0:e.useStrictIteration)&&this.setUseStrictIteration(e.useStrictIteration)}createDraft(e){Xt(e)||Vt(8),Pn(e)&&(e=dj(e));const t=Ng(this),n=cf(t,e,void 0);return n[tt].isManual_=!0,lf(t),n}finishDraft(e,t){const n=e&&e[tt];(!n||!n.isManual_)&&Vt(9);const{scope_:r}=n;return zg(r,t),Bg(void 0,r)}setAutoFreeze(e){this.autoFreeze_=e}setUseStrictShallowCopy(e){this.useStrictShallowCopy_=e}setUseStrictIteration(e){this.useStrictIteration_=e}shouldUseStrictIteration(){return this.useStrictIteration_}applyPatches(e,t){let n;for(n=t.length-1;n>=0;n--){const i=t[n];if(i.path.length===0&&i.op==="replace"){e=i.value;break}}n>-1&&(t=t.slice(n+1));const r=Or(af).applyPatches_;return Pn(e)?r(e,t):this.produce(e,i=>r(i,t))}};function cf(e,t,n,r){const[i,o]=pu(t)?Or(rl).proxyMap_(t,n):hu(t)?Or(rl).proxySet_(t,n):lj(t,n);return((n==null?void 0:n.scope_)??jb()).drafts_.push(i),o.callbacks_=(n==null?void 0:n.callbacks_)??[],o.key_=r,n&&r!==void 0?aj(n,o,r):o.callbacks_.push(function(s){var c;(c=s.mapSetPlugin_)==null||c.fixSetContents(o);const{patchPlugin_:u}=s;o.modified_&&u&&u.generatePatches_(o,[],s)}),i}function dj(e){return Pn(e)||Vt(10,e),Rb(e)}function Rb(e){if(!Xt(e)||mu(e))return e;const t=e[tt];let n,r=!0;if(t){if(!t.modified_)return t.base_;t.finalized_=!0,n=of(e,t.scope_.immer_.useStrictShallowCopy_),r=t.scope_.immer_.shouldUseStrictIteration()}else n=of(e,!0);return du(n,(i,o)=>{nl(n,i,Rb(o))},r),t&&(t.finalized_=!1),n}var fj=new cj,Ab=fj.produce;function Lb(e){return({dispatch:n,getState:r})=>i=>o=>typeof o=="function"?o(n,r,e):i(o)}var pj=Lb(),hj=Lb,mj=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?Js:Js.apply(null,arguments)};function Hg(e,t){function n(...r){if(t){let i=t(...r);if(!i)throw new Error(_n(0));return{type:e,payload:i.payload,..."meta"in i&&{meta:i.meta},..."error"in i&&{error:i.error}}}return{type:e,payload:r[0]}}return n.toString=()=>`${e}`,n.type=e,n.match=r=>Q4(r)&&r.type===e,n}var Fb=class eo extends Array{constructor(...t){super(...t),Object.setPrototypeOf(this,eo.prototype)}static get[Symbol.species](){return eo}concat(...t){return super.concat.apply(this,t)}prepend(...t){return t.length===1&&Array.isArray(t[0])?new eo(...t[0].concat(this)):new eo(...t.concat(this))}};function Ug(e){return Xt(e)?Ab(e,()=>{}):e}function Ia(e,t,n){return e.has(t)?e.get(t):e.set(t,n(t)).get(t)}function gj(e){return typeof e=="boolean"}var vj=()=>function(t){const{thunk:n=!0,immutableCheck:r=!0,serializableCheck:i=!0,actionCreatorCheck:o=!0}=t??{};let a=new Fb;return n&&(gj(n)?a.push(pj):a.push(hj(n.extraArgument))),a},yj="RTK_autoBatch",Wg=e=>t=>{setTimeout(t,e)},xj=(e={type:"raf"})=>t=>(...n)=>{const r=t(...n);let i=!0,o=!1,a=!1;const l=new Set,s=e.type==="tick"?queueMicrotask:e.type==="raf"?typeof window<"u"&&window.requestAnimationFrame?window.requestAnimationFrame:Wg(10):e.type==="callback"?e.queueNotification:Wg(e.timeout),u=()=>{a=!1,o&&(o=!1,l.forEach(c=>c()))};return Object.assign({},r,{subscribe(c){const d=()=>i&&c(),g=r.subscribe(d);return l.add(c),()=>{g(),l.delete(c)}},dispatch(c){var d;try{return i=!((d=c==null?void 0:c.meta)!=null&&d[yj]),o=!i,o&&(a||(a=!0,s(u))),r.dispatch(c)}finally{i=!0}}})},bj=e=>function(n){const{autoBatch:r=!0}=n??{};let i=new Fb(e);return r&&i.push(xj(typeof r=="object"?r:void 0)),i};function wj(e){const t=vj(),{reducer:n=void 0,middleware:r,devTools:i=!0,duplicateMiddlewareCheck:o=!0,preloadedState:a=void 0,enhancers:l=void 0}=e||{};let s;if(typeof n=="function")s=n;else if(Zp(n))s=X4(n);else throw new Error(_n(1));let u;typeof r=="function"?u=r(t):u=t();let c=Js;i&&(c=mj({trace:!1,...typeof i=="object"&&i}));const d=K4(...u),g=bj(d);let m=typeof l=="function"?l(g):g();const v=c(...m);return Jp(s,a,v)}function zb(e){const t={},n=[];let r;const i={addCase(o,a){const l=typeof o=="string"?o:o.type;if(!l)throw new Error(_n(28));if(l in t)throw new Error(_n(29));return t[l]=a,i},addAsyncThunk(o,a){return a.pending&&(t[o.pending.type]=a.pending),a.rejected&&(t[o.rejected.type]=a.rejected),a.fulfilled&&(t[o.fulfilled.type]=a.fulfilled),a.settled&&n.push({matcher:o.settled,reducer:a.settled}),i},addMatcher(o,a){return n.push({matcher:o,reducer:a}),i},addDefaultCase(o){return r=o,i}};return e(i),[t,n,r]}function Sj(e){return typeof e=="function"}function _j(e,t){let[n,r,i]=zb(t),o;if(Sj(e))o=()=>Ug(e());else{const l=Ug(e);o=()=>l}function a(l=o(),s){let u=[n[s.type],...r.filter(({matcher:c})=>c(s)).map(({reducer:c})=>c)];return u.filter(c=>!!c).length===0&&(u=[i]),u.reduce((c,d)=>{if(d)if(Pn(c)){const m=d(c,s);return m===void 0?c:m}else{if(Xt(c))return Ab(c,g=>d(g,s));{const g=d(c,s);if(g===void 0){if(c===null)return c;throw Error("A case reducer on a non-draftable value must not return undefined")}return g}}return c},l)}return a.getInitialState=o,a}var Cj=Symbol.for("rtk-slice-createasyncthunk");function Ej(e,t){return`${e}/${t}`}function kj({creators:e}={}){var n;const t=(n=e==null?void 0:e.asyncThunk)==null?void 0:n[Cj];return function(i){const{name:o,reducerPath:a=o}=i;if(!o)throw new Error(_n(11));typeof process<"u";const l=(typeof i.reducers=="function"?i.reducers(Oj()):i.reducers)||{},s=Object.keys(l),u={sliceCaseReducersByName:{},sliceCaseReducersByType:{},actionCreators:{},sliceMatchers:[]},c={addCase(b,E){const k=typeof b=="string"?b:b.type;if(!k)throw new Error(_n(12));if(k in u.sliceCaseReducersByType)throw new Error(_n(13));return u.sliceCaseReducersByType[k]=E,c},addMatcher(b,E){return u.sliceMatchers.push({matcher:b,reducer:E}),c},exposeAction(b,E){return u.actionCreators[b]=E,c},exposeCaseReducer(b,E){return u.sliceCaseReducersByName[b]=E,c}};s.forEach(b=>{const E=l[b],k={reducerName:b,type:Ej(o,b),createNotation:typeof i.reducers=="function"};jj(E)?Ij(k,E,c,t):Pj(k,E,c)});function d(){const[b={},E=[],k=void 0]=typeof i.extraReducers=="function"?zb(i.extraReducers):[i.extraReducers],_={...b,...u.sliceCaseReducersByType};return _j(i.initialState,S=>{for(let M in _)S.addCase(M,_[M]);for(let M of u.sliceMatchers)S.addMatcher(M.matcher,M.reducer);for(let M of E)S.addMatcher(M.matcher,M.reducer);k&&S.addDefaultCase(k)})}const g=b=>b,m=new Map,v=new WeakMap;let x;function w(b,E){return x||(x=d()),x(b,E)}function f(){return x||(x=d()),x.getInitialState()}function p(b,E=!1){function k(S){let M=S[b];return typeof M>"u"&&E&&(M=Ia(v,k,f)),M}function _(S=g){const M=Ia(m,E,()=>new WeakMap);return Ia(M,S,()=>{const j={};for(const[I,P]of Object.entries(i.selectors??{}))j[I]=Tj(P,S,()=>Ia(v,S,f),E);return j})}return{reducerPath:b,getSelectors:_,get selectors(){return _(k)},selectSlice:k}}const y={name:o,reducer:w,actions:u.actionCreators,caseReducers:u.sliceCaseReducersByName,getInitialState:f,...p(a),injectInto(b,{reducerPath:E,...k}={}){const _=E??a;return b.inject({reducerPath:_,reducer:w},k),{...y,...p(_,!0)}}};return y}}function Tj(e,t,n,r){function i(o,...a){let l=t(o);return typeof l>"u"&&r&&(l=n()),e(l,...a)}return i.unwrapped=e,i}var Nb=kj();function Oj(){function e(t,n){return{_reducerDefinitionType:"asyncThunk",payloadCreator:t,...n}}return e.withTypes=()=>e,{reducer(t){return Object.assign({[t.name](...n){return t(...n)}}[t.name],{_reducerDefinitionType:"reducer"})},preparedReducer(t,n){return{_reducerDefinitionType:"reducerWithPrepare",prepare:t,reducer:n}},asyncThunk:e}}function Pj({type:e,reducerName:t,createNotation:n},r,i){let o,a;if("reducer"in r){if(n&&!Mj(r))throw new Error(_n(17));o=r.reducer,a=r.prepare}else o=r;i.addCase(e,o).exposeCaseReducer(t,o).exposeAction(t,a?Hg(e,a):Hg(e))}function jj(e){return e._reducerDefinitionType==="asyncThunk"}function Mj(e){return e._reducerDefinitionType==="reducerWithPrepare"}function Ij({type:e,reducerName:t},n,r,i){if(!i)throw new Error(_n(18));const{payloadCreator:o,fulfilled:a,pending:l,rejected:s,settled:u,options:c}=n,d=i(e,o,c);r.exposeAction(t,d),a&&r.addCase(d.fulfilled,a),l&&r.addCase(d.pending,l),s&&r.addCase(d.rejected,s),u&&r.addMatcher(d.settled,u),r.exposeCaseReducer(t,{fulfilled:a||$a,pending:l||$a,rejected:s||$a,settled:u||$a})}function $a(){}function _n(e){return`Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}const Bb=Nb({name:"cart",initialState:{items:[]},reducers:{addToCart:(e,t)=>{const n=e.items.find(r=>r.id===t.payload.id);n?n.quantity=(n.quantity||0)+1:e.items.push({...t.payload,quantity:1})},removeFromCart:(e,t)=>{const n=t.payload;e.items=e.items.filter(r=>r.id!==n.id)},clearCart:e=>{e.items=[]},addAllToCart:(e,t)=>{const n=t.payload.map(r=>({...r,quantity:r.quantity||1}));e.items.push(...n)},incrementQuantity:(e,t)=>{const n=e.items.find(r=>r.id===t.payload);n&&(n.quantity+=1)},decrementQuantity:(e,t)=>{const n=e.items.find(r=>r.id===t.payload);n&&n.quantity>1&&(n.quantity-=1)}}}),{addToCart:vu,removeFromCart:$j,clearCart:Dj,addAllToCart:Rj,incrementQuantity:Aj,decrementQuantity:Lj}=Bb.actions,Fj=Bb.reducer;function Vb(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var i=e.length;for(t=0;t<i;t++)e[t]&&(n=Vb(e[t]))&&(r&&(r+=" "),r+=n)}else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function br(){for(var e,t,n=0,r="",i=arguments.length;n<i;n++)(e=arguments[n])&&(t=Vb(e))&&(r&&(r+=" "),r+=t);return r}function zj(e){if(!e||typeof document>"u")return;let t=document.head||document.getElementsByTagName("head")[0],n=document.createElement("style");n.type="text/css",t.firstChild?t.insertBefore(n,t.firstChild):t.appendChild(n),n.styleSheet?n.styleSheet.cssText=e:n.appendChild(document.createTextNode(e))}zj(`:root{--toastify-color-light: #fff;--toastify-color-dark: #121212;--toastify-color-info: #3498db;--toastify-color-success: #07bc0c;--toastify-color-warning: #f1c40f;--toastify-color-error: hsl(6, 78%, 57%);--toastify-color-transparent: rgba(255, 255, 255, .7);--toastify-icon-color-info: var(--toastify-color-info);--toastify-icon-color-success: var(--toastify-color-success);--toastify-icon-color-warning: var(--toastify-color-warning);--toastify-icon-color-error: var(--toastify-color-error);--toastify-container-width: fit-content;--toastify-toast-width: 320px;--toastify-toast-offset: 16px;--toastify-toast-top: max(var(--toastify-toast-offset), env(safe-area-inset-top));--toastify-toast-right: max(var(--toastify-toast-offset), env(safe-area-inset-right));--toastify-toast-left: max(var(--toastify-toast-offset), env(safe-area-inset-left));--toastify-toast-bottom: max(var(--toastify-toast-offset), env(safe-area-inset-bottom));--toastify-toast-background: #fff;--toastify-toast-padding: 14px;--toastify-toast-min-height: 64px;--toastify-toast-max-height: 800px;--toastify-toast-bd-radius: 6px;--toastify-toast-shadow: 0px 4px 12px rgba(0, 0, 0, .1);--toastify-font-family: sans-serif;--toastify-z-index: 9999;--toastify-text-color-light: #757575;--toastify-text-color-dark: #fff;--toastify-text-color-info: #fff;--toastify-text-color-success: #fff;--toastify-text-color-warning: #fff;--toastify-text-color-error: #fff;--toastify-spinner-color: #616161;--toastify-spinner-color-empty-area: #e0e0e0;--toastify-color-progress-light: linear-gradient(to right, #4cd964, #5ac8fa, #007aff, #34aadc, #5856d6, #ff2d55);--toastify-color-progress-dark: #bb86fc;--toastify-color-progress-info: var(--toastify-color-info);--toastify-color-progress-success: var(--toastify-color-success);--toastify-color-progress-warning: var(--toastify-color-warning);--toastify-color-progress-error: var(--toastify-color-error);--toastify-color-progress-bgo: .2}.Toastify__toast-container{z-index:var(--toastify-z-index);-webkit-transform:translate3d(0,0,var(--toastify-z-index));position:fixed;width:var(--toastify-container-width);box-sizing:border-box;color:#fff;display:flex;flex-direction:column}.Toastify__toast-container--top-left{top:var(--toastify-toast-top);left:var(--toastify-toast-left)}.Toastify__toast-container--top-center{top:var(--toastify-toast-top);left:50%;transform:translate(-50%);align-items:center}.Toastify__toast-container--top-right{top:var(--toastify-toast-top);right:var(--toastify-toast-right);align-items:end}.Toastify__toast-container--bottom-left{bottom:var(--toastify-toast-bottom);left:var(--toastify-toast-left)}.Toastify__toast-container--bottom-center{bottom:var(--toastify-toast-bottom);left:50%;transform:translate(-50%);align-items:center}.Toastify__toast-container--bottom-right{bottom:var(--toastify-toast-bottom);right:var(--toastify-toast-right);align-items:end}.Toastify__toast{--y: 0;position:relative;touch-action:none;width:var(--toastify-toast-width);min-height:var(--toastify-toast-min-height);box-sizing:border-box;margin-bottom:1rem;padding:var(--toastify-toast-padding);border-radius:var(--toastify-toast-bd-radius);box-shadow:var(--toastify-toast-shadow);max-height:var(--toastify-toast-max-height);font-family:var(--toastify-font-family);z-index:0;display:flex;flex:1 auto;align-items:center;word-break:break-word}@media only screen and (max-width: 480px){.Toastify__toast-container{width:100vw;left:env(safe-area-inset-left);margin:0}.Toastify__toast-container--top-left,.Toastify__toast-container--top-center,.Toastify__toast-container--top-right{top:env(safe-area-inset-top);transform:translate(0)}.Toastify__toast-container--bottom-left,.Toastify__toast-container--bottom-center,.Toastify__toast-container--bottom-right{bottom:env(safe-area-inset-bottom);transform:translate(0)}.Toastify__toast-container--rtl{right:env(safe-area-inset-right);left:initial}.Toastify__toast{--toastify-toast-width: 100%;margin-bottom:0;border-radius:0}}.Toastify__toast-container[data-stacked=true]{width:var(--toastify-toast-width)}.Toastify__toast--stacked{position:absolute;width:100%;transform:translate3d(0,var(--y),0) scale(var(--s));transition:transform .3s}.Toastify__toast--stacked[data-collapsed] .Toastify__toast-body,.Toastify__toast--stacked[data-collapsed] .Toastify__close-button{transition:opacity .1s}.Toastify__toast--stacked[data-collapsed=false]{overflow:visible}.Toastify__toast--stacked[data-collapsed=true]:not(:last-child)>*{opacity:0}.Toastify__toast--stacked:after{content:"";position:absolute;left:0;right:0;height:calc(var(--g) * 1px);bottom:100%}.Toastify__toast--stacked[data-pos=top]{top:0}.Toastify__toast--stacked[data-pos=bot]{bottom:0}.Toastify__toast--stacked[data-pos=bot].Toastify__toast--stacked:before{transform-origin:top}.Toastify__toast--stacked[data-pos=top].Toastify__toast--stacked:before{transform-origin:bottom}.Toastify__toast--stacked:before{content:"";position:absolute;left:0;right:0;bottom:0;height:100%;transform:scaleY(3);z-index:-1}.Toastify__toast--rtl{direction:rtl}.Toastify__toast--close-on-click{cursor:pointer}.Toastify__toast-icon{margin-inline-end:10px;width:22px;flex-shrink:0;display:flex}.Toastify--animate{animation-fill-mode:both;animation-duration:.5s}.Toastify--animate-icon{animation-fill-mode:both;animation-duration:.3s}.Toastify__toast-theme--dark{background:var(--toastify-color-dark);color:var(--toastify-text-color-dark)}.Toastify__toast-theme--light,.Toastify__toast-theme--colored.Toastify__toast--default{background:var(--toastify-color-light);color:var(--toastify-text-color-light)}.Toastify__toast-theme--colored.Toastify__toast--info{color:var(--toastify-text-color-info);background:var(--toastify-color-info)}.Toastify__toast-theme--colored.Toastify__toast--success{color:var(--toastify-text-color-success);background:var(--toastify-color-success)}.Toastify__toast-theme--colored.Toastify__toast--warning{color:var(--toastify-text-color-warning);background:var(--toastify-color-warning)}.Toastify__toast-theme--colored.Toastify__toast--error{color:var(--toastify-text-color-error);background:var(--toastify-color-error)}.Toastify__progress-bar-theme--light{background:var(--toastify-color-progress-light)}.Toastify__progress-bar-theme--dark{background:var(--toastify-color-progress-dark)}.Toastify__progress-bar--info{background:var(--toastify-color-progress-info)}.Toastify__progress-bar--success{background:var(--toastify-color-progress-success)}.Toastify__progress-bar--warning{background:var(--toastify-color-progress-warning)}.Toastify__progress-bar--error{background:var(--toastify-color-progress-error)}.Toastify__progress-bar-theme--colored.Toastify__progress-bar--info,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--success,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--warning,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--error{background:var(--toastify-color-transparent)}.Toastify__close-button{color:#fff;position:absolute;top:6px;right:6px;background:transparent;outline:none;border:none;padding:0;cursor:pointer;opacity:.7;transition:.3s ease;z-index:1}.Toastify__toast--rtl .Toastify__close-button{left:6px;right:unset}.Toastify__close-button--light{color:#000;opacity:.3}.Toastify__close-button>svg{fill:currentColor;height:16px;width:14px}.Toastify__close-button:hover,.Toastify__close-button:focus{opacity:1}@keyframes Toastify__trackProgress{0%{transform:scaleX(1)}to{transform:scaleX(0)}}.Toastify__progress-bar{position:absolute;bottom:0;left:0;width:100%;height:100%;z-index:1;opacity:.7;transform-origin:left}.Toastify__progress-bar--animated{animation:Toastify__trackProgress linear 1 forwards}.Toastify__progress-bar--controlled{transition:transform .2s}.Toastify__progress-bar--rtl{right:0;left:initial;transform-origin:right;border-bottom-left-radius:initial}.Toastify__progress-bar--wrp{position:absolute;overflow:hidden;bottom:0;left:0;width:100%;height:5px;border-bottom-left-radius:var(--toastify-toast-bd-radius);border-bottom-right-radius:var(--toastify-toast-bd-radius)}.Toastify__progress-bar--wrp[data-hidden=true]{opacity:0}.Toastify__progress-bar--bg{opacity:var(--toastify-color-progress-bgo);width:100%;height:100%}.Toastify__spinner{width:20px;height:20px;box-sizing:border-box;border:2px solid;border-radius:100%;border-color:var(--toastify-spinner-color-empty-area);border-right-color:var(--toastify-spinner-color);animation:Toastify__spin .65s linear infinite}@keyframes Toastify__bounceInRight{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(3000px,0,0)}60%{opacity:1;transform:translate3d(-25px,0,0)}75%{transform:translate3d(10px,0,0)}90%{transform:translate3d(-5px,0,0)}to{transform:none}}@keyframes Toastify__bounceOutRight{20%{opacity:1;transform:translate3d(-20px,var(--y),0)}to{opacity:0;transform:translate3d(2000px,var(--y),0)}}@keyframes Toastify__bounceInLeft{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(-3000px,0,0)}60%{opacity:1;transform:translate3d(25px,0,0)}75%{transform:translate3d(-10px,0,0)}90%{transform:translate3d(5px,0,0)}to{transform:none}}@keyframes Toastify__bounceOutLeft{20%{opacity:1;transform:translate3d(20px,var(--y),0)}to{opacity:0;transform:translate3d(-2000px,var(--y),0)}}@keyframes Toastify__bounceInUp{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,3000px,0)}60%{opacity:1;transform:translate3d(0,-20px,0)}75%{transform:translate3d(0,10px,0)}90%{transform:translate3d(0,-5px,0)}to{transform:translateZ(0)}}@keyframes Toastify__bounceOutUp{20%{transform:translate3d(0,calc(var(--y) - 10px),0)}40%,45%{opacity:1;transform:translate3d(0,calc(var(--y) + 20px),0)}to{opacity:0;transform:translate3d(0,-2000px,0)}}@keyframes Toastify__bounceInDown{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,-3000px,0)}60%{opacity:1;transform:translate3d(0,25px,0)}75%{transform:translate3d(0,-10px,0)}90%{transform:translate3d(0,5px,0)}to{transform:none}}@keyframes Toastify__bounceOutDown{20%{transform:translate3d(0,calc(var(--y) - 10px),0)}40%,45%{opacity:1;transform:translate3d(0,calc(var(--y) + 20px),0)}to{opacity:0;transform:translate3d(0,2000px,0)}}.Toastify__bounce-enter--top-left,.Toastify__bounce-enter--bottom-left{animation-name:Toastify__bounceInLeft}.Toastify__bounce-enter--top-right,.Toastify__bounce-enter--bottom-right{animation-name:Toastify__bounceInRight}.Toastify__bounce-enter--top-center{animation-name:Toastify__bounceInDown}.Toastify__bounce-enter--bottom-center{animation-name:Toastify__bounceInUp}.Toastify__bounce-exit--top-left,.Toastify__bounce-exit--bottom-left{animation-name:Toastify__bounceOutLeft}.Toastify__bounce-exit--top-right,.Toastify__bounce-exit--bottom-right{animation-name:Toastify__bounceOutRight}.Toastify__bounce-exit--top-center{animation-name:Toastify__bounceOutUp}.Toastify__bounce-exit--bottom-center{animation-name:Toastify__bounceOutDown}@keyframes Toastify__zoomIn{0%{opacity:0;transform:scale3d(.3,.3,.3)}50%{opacity:1}}@keyframes Toastify__zoomOut{0%{opacity:1}50%{opacity:0;transform:translate3d(0,var(--y),0) scale3d(.3,.3,.3)}to{opacity:0}}.Toastify__zoom-enter{animation-name:Toastify__zoomIn}.Toastify__zoom-exit{animation-name:Toastify__zoomOut}@keyframes Toastify__flipIn{0%{transform:perspective(400px) rotateX(90deg);animation-timing-function:ease-in;opacity:0}40%{transform:perspective(400px) rotateX(-20deg);animation-timing-function:ease-in}60%{transform:perspective(400px) rotateX(10deg);opacity:1}80%{transform:perspective(400px) rotateX(-5deg)}to{transform:perspective(400px)}}@keyframes Toastify__flipOut{0%{transform:translate3d(0,var(--y),0) perspective(400px)}30%{transform:translate3d(0,var(--y),0) perspective(400px) rotateX(-20deg);opacity:1}to{transform:translate3d(0,var(--y),0) perspective(400px) rotateX(90deg);opacity:0}}.Toastify__flip-enter{animation-name:Toastify__flipIn}.Toastify__flip-exit{animation-name:Toastify__flipOut}@keyframes Toastify__slideInRight{0%{transform:translate3d(110%,0,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInLeft{0%{transform:translate3d(-110%,0,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInUp{0%{transform:translate3d(0,110%,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInDown{0%{transform:translate3d(0,-110%,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideOutRight{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(110%,var(--y),0)}}@keyframes Toastify__slideOutLeft{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(-110%,var(--y),0)}}@keyframes Toastify__slideOutDown{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(0,500px,0)}}@keyframes Toastify__slideOutUp{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(0,-500px,0)}}.Toastify__slide-enter--top-left,.Toastify__slide-enter--bottom-left{animation-name:Toastify__slideInLeft}.Toastify__slide-enter--top-right,.Toastify__slide-enter--bottom-right{animation-name:Toastify__slideInRight}.Toastify__slide-enter--top-center{animation-name:Toastify__slideInDown}.Toastify__slide-enter--bottom-center{animation-name:Toastify__slideInUp}.Toastify__slide-exit--top-left,.Toastify__slide-exit--bottom-left{animation-name:Toastify__slideOutLeft;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--top-right,.Toastify__slide-exit--bottom-right{animation-name:Toastify__slideOutRight;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--top-center{animation-name:Toastify__slideOutUp;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--bottom-center{animation-name:Toastify__slideOutDown;animation-timing-function:ease-in;animation-duration:.3s}@keyframes Toastify__spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}
`);var ia=e=>typeof e=="number"&&!isNaN(e),Pr=e=>typeof e=="string",jn=e=>typeof e=="function",Nj=e=>Pr(e)||ia(e),df=e=>Pr(e)||jn(e)?e:null,Bj=(e,t)=>e===!1||ia(e)&&e>0?e:t,ff=e=>T.isValidElement(e)||Pr(e)||jn(e)||ia(e);function Vj(e,t,n=300){let{scrollHeight:r,style:i}=e;requestAnimationFrame(()=>{i.minHeight="initial",i.height=r+"px",i.transition=`all ${n}ms`,requestAnimationFrame(()=>{i.height="0",i.padding="0",i.margin="0",setTimeout(t,n)})})}function Hj({enter:e,exit:t,appendPosition:n=!1,collapse:r=!0,collapseDuration:i=300}){return function({children:o,position:a,preventExitTransition:l,done:s,nodeRef:u,isIn:c,playToast:d}){let g=n?`${e}--${a}`:e,m=n?`${t}--${a}`:t,v=T.useRef(0);return T.useLayoutEffect(()=>{let x=u.current,w=g.split(" "),f=p=>{p.target===u.current&&(d(),x.removeEventListener("animationend",f),x.removeEventListener("animationcancel",f),v.current===0&&p.type!=="animationcancel"&&x.classList.remove(...w))};x.classList.add(...w),x.addEventListener("animationend",f),x.addEventListener("animationcancel",f)},[]),T.useEffect(()=>{let x=u.current,w=()=>{x.removeEventListener("animationend",w),r?Vj(x,s,i):s()};c||(l?w():(v.current=1,x.className+=` ${m}`,x.addEventListener("animationend",w)))},[c]),U.createElement(U.Fragment,null,o)}}function Gg(e,t){return{content:Hb(e.content,e.props),containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,reason:e.removalReason,status:t}}function Hb(e,t,n=!1){return T.isValidElement(e)&&!Pr(e.type)?T.cloneElement(e,{closeToast:t.closeToast,toastProps:t,data:t.data,isPaused:n}):jn(e)?e({closeToast:t.closeToast,toastProps:t,data:t.data,isPaused:n}):e}function Uj({closeToast:e,theme:t,ariaLabel:n="close"}){return U.createElement("button",{className:`Toastify__close-button Toastify__close-button--${t}`,type:"button",onClick:r=>{r.stopPropagation(),e(!0)},"aria-label":n},U.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},U.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function Wj({delay:e,isRunning:t,closeToast:n,type:r="default",hide:i,className:o,controlledProgress:a,progress:l,rtl:s,isIn:u,theme:c}){let d=i||a&&l===0,g={animationDuration:`${e}ms`,animationPlayState:t?"running":"paused"};a&&(g.transform=`scaleX(${l})`);let m=br("Toastify__progress-bar",a?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${c}`,`Toastify__progress-bar--${r}`,{"Toastify__progress-bar--rtl":s}),v=jn(o)?o({rtl:s,type:r,defaultClassName:m}):br(m,o),x={[a&&l>=1?"onTransitionEnd":"onAnimationEnd"]:a&&l<1?null:()=>{u&&n()}};return U.createElement("div",{className:"Toastify__progress-bar--wrp","data-hidden":d},U.createElement("div",{className:`Toastify__progress-bar--bg Toastify__progress-bar-theme--${c} Toastify__progress-bar--${r}`}),U.createElement("div",{role:"progressbar","aria-hidden":d?"true":"false","aria-label":"notification timer",className:v,style:g,...x}))}var Gj=1,Ub=()=>`${Gj++}`;function Yj(e,t,n){let r=1,i=0,o=[],a=[],l=t,s=new Map,u=new Set,c=p=>(u.add(p),()=>u.delete(p)),d=()=>{a=Array.from(s.values()),u.forEach(p=>p())},g=({containerId:p,toastId:y,updateId:b})=>{let E=p?p!==e:e!==1,k=s.has(y)&&b==null;return E||k},m=(p,y)=>{s.forEach(b=>{var E;(y==null||y===b.props.toastId)&&((E=b.toggle)==null||E.call(b,p))})},v=p=>{var y,b;(b=(y=p.props)==null?void 0:y.onClose)==null||b.call(y,p.removalReason),p.isActive=!1},x=p=>{if(p==null)s.forEach(v);else{let y=s.get(p);y&&v(y)}d()},w=()=>{i-=o.length,o=[]},f=p=>{var y,b;let{toastId:E,updateId:k}=p.props,_=k==null;p.staleId&&s.delete(p.staleId),p.isActive=!0,s.set(E,p),d(),n(Gg(p,_?"added":"updated")),_&&((b=(y=p.props).onOpen)==null||b.call(y))};return{id:e,props:l,observe:c,toggle:m,removeToast:x,toasts:s,clearQueue:w,buildToast:(p,y)=>{if(g(y))return;let{toastId:b,updateId:E,data:k,staleId:_,delay:S}=y,M=E==null;M&&i++;let j={...l,style:l.toastStyle,key:r++,...Object.fromEntries(Object.entries(y).filter(([P,$])=>$!=null)),toastId:b,updateId:E,data:k,isIn:!1,className:df(y.className||l.toastClassName),progressClassName:df(y.progressClassName||l.progressClassName),autoClose:y.isLoading?!1:Bj(y.autoClose,l.autoClose),closeToast(P){s.get(b).removalReason=P,x(b)},deleteToast(){let P=s.get(b);if(P!=null){if(n(Gg(P,"removed")),s.delete(b),i--,i<0&&(i=0),o.length>0){f(o.shift());return}d()}}};j.closeButton=l.closeButton,y.closeButton===!1||ff(y.closeButton)?j.closeButton=y.closeButton:y.closeButton===!0&&(j.closeButton=ff(l.closeButton)?l.closeButton:!0);let I={content:p,props:j,staleId:_};l.limit&&l.limit>0&&i>l.limit&&M?o.push(I):ia(S)?setTimeout(()=>{f(I)},S):f(I)},setProps(p){l=p},setToggle:(p,y)=>{let b=s.get(p);b&&(b.toggle=y)},isToastActive:p=>{var y;return(y=s.get(p))==null?void 0:y.isActive},getSnapshot:()=>a}}var Je=new Map,Wo=[],pf=new Set,qj=e=>pf.forEach(t=>t(e)),Wb=()=>Je.size>0;function Xj(){Wo.forEach(e=>Yb(e.content,e.options)),Wo=[]}var Kj=(e,{containerId:t})=>{var n;return(n=Je.get(t||1))==null?void 0:n.toasts.get(e)};function Gb(e,t){var n;if(t)return!!((n=Je.get(t))!=null&&n.isToastActive(e));let r=!1;return Je.forEach(i=>{i.isToastActive(e)&&(r=!0)}),r}function Qj(e){if(!Wb()){Wo=Wo.filter(t=>e!=null&&t.options.toastId!==e);return}if(e==null||Nj(e))Je.forEach(t=>{t.removeToast(e)});else if(e&&("containerId"in e||"id"in e)){let t=Je.get(e.containerId);t?t.removeToast(e.id):Je.forEach(n=>{n.removeToast(e.id)})}}var Zj=(e={})=>{Je.forEach(t=>{t.props.limit&&(!e.containerId||t.id===e.containerId)&&t.clearQueue()})};function Yb(e,t){ff(e)&&(Wb()||Wo.push({content:e,options:t}),Je.forEach(n=>{n.buildToast(e,t)}))}function Jj(e){var t;(t=Je.get(e.containerId||1))==null||t.setToggle(e.id,e.fn)}function qb(e,t){Je.forEach(n=>{(t==null||!(t!=null&&t.containerId)||(t==null?void 0:t.containerId)===n.id)&&n.toggle(e,t==null?void 0:t.id)})}function eM(e){let t=e.containerId||1;return{subscribe(n){let r=Yj(t,e,qj);Je.set(t,r);let i=r.observe(n);return Xj(),()=>{i(),Je.delete(t)}},setProps(n){var r;(r=Je.get(t))==null||r.setProps(n)},getSnapshot(){var n;return(n=Je.get(t))==null?void 0:n.getSnapshot()}}}function tM(e){return pf.add(e),()=>{pf.delete(e)}}function nM(e){return e&&(Pr(e.toastId)||ia(e.toastId))?e.toastId:Ub()}function oa(e,t){return Yb(e,t),t.toastId}function yu(e,t){return{...t,type:t&&t.type||e,toastId:nM(t)}}function xu(e){return(t,n)=>oa(t,yu(e,n))}function K(e,t){return oa(e,yu("default",t))}K.loading=(e,t)=>oa(e,yu("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...t}));function rM(e,{pending:t,error:n,success:r},i){let o;t&&(o=Pr(t)?K.loading(t,i):K.loading(t.render,{...i,...t}));let a={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},l=(u,c,d)=>{if(c==null){K.dismiss(o);return}let g={type:u,...a,...i,data:d},m=Pr(c)?{render:c}:c;return o?K.update(o,{...g,...m}):K(m.render,{...g,...m}),d},s=jn(e)?e():e;return s.then(u=>l("success",r,u)).catch(u=>l("error",n,u)),s}K.promise=rM;K.success=xu("success");K.info=xu("info");K.error=xu("error");K.warning=xu("warning");K.warn=K.warning;K.dark=(e,t)=>oa(e,yu("default",{theme:"dark",...t}));function iM(e){Qj(e)}K.dismiss=iM;K.clearWaitingQueue=Zj;K.isActive=Gb;K.update=(e,t={})=>{let n=Kj(e,t);if(n){let{props:r,content:i}=n,o={delay:100,...r,...t,toastId:t.toastId||e,updateId:Ub()};o.toastId!==e&&(o.staleId=e);let a=o.render||i;delete o.render,oa(a,o)}};K.done=e=>{K.update(e,{progress:1})};K.onChange=tM;K.play=e=>qb(!0,e);K.pause=e=>qb(!1,e);function oM(e){var t;let{subscribe:n,getSnapshot:r,setProps:i}=T.useRef(eM(e)).current;i(e);let o=(t=T.useSyncExternalStore(n,r,r))==null?void 0:t.slice();function a(l){if(!o)return[];let s=new Map;return e.newestOnTop&&o.reverse(),o.forEach(u=>{let{position:c}=u.props;s.has(c)||s.set(c,[]),s.get(c).push(u)}),Array.from(s,u=>l(u[0],u[1]))}return{getToastToRender:a,isToastActive:Gb,count:o==null?void 0:o.length}}function aM(e){let[t,n]=T.useState(!1),[r,i]=T.useState(!1),o=T.useRef(null),a=T.useRef({start:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,didMove:!1}).current,{autoClose:l,pauseOnHover:s,closeToast:u,onClick:c,closeOnClick:d}=e;Jj({id:e.toastId,containerId:e.containerId,fn:n}),T.useEffect(()=>{if(e.pauseOnFocusLoss)return g(),()=>{m()}},[e.pauseOnFocusLoss]);function g(){document.hasFocus()||f(),window.addEventListener("focus",w),window.addEventListener("blur",f)}function m(){window.removeEventListener("focus",w),window.removeEventListener("blur",f)}function v(_){if(e.draggable===!0||e.draggable===_.pointerType){p();let S=o.current;a.canCloseOnClick=!0,a.canDrag=!0,S.style.transition="none",e.draggableDirection==="x"?(a.start=_.clientX,a.removalDistance=S.offsetWidth*(e.draggablePercent/100)):(a.start=_.clientY,a.removalDistance=S.offsetHeight*(e.draggablePercent===80?e.draggablePercent*1.5:e.draggablePercent)/100)}}function x(_){let{top:S,bottom:M,left:j,right:I}=o.current.getBoundingClientRect();_.nativeEvent.type!=="touchend"&&e.pauseOnHover&&_.clientX>=j&&_.clientX<=I&&_.clientY>=S&&_.clientY<=M?f():w()}function w(){n(!0)}function f(){n(!1)}function p(){a.didMove=!1,document.addEventListener("pointermove",b),document.addEventListener("pointerup",E)}function y(){document.removeEventListener("pointermove",b),document.removeEventListener("pointerup",E)}function b(_){let S=o.current;if(a.canDrag&&S){a.didMove=!0,t&&f(),e.draggableDirection==="x"?a.delta=_.clientX-a.start:a.delta=_.clientY-a.start,a.start!==_.clientX&&(a.canCloseOnClick=!1);let M=e.draggableDirection==="x"?`${a.delta}px, var(--y)`:`0, calc(${a.delta}px + var(--y))`;S.style.transform=`translate3d(${M},0)`,S.style.opacity=`${1-Math.abs(a.delta/a.removalDistance)}`}}function E(){y();let _=o.current;if(a.canDrag&&a.didMove&&_){if(a.canDrag=!1,Math.abs(a.delta)>a.removalDistance){i(!0),e.closeToast(!0),e.collapseAll();return}_.style.transition="transform 0.2s, opacity 0.2s",_.style.removeProperty("transform"),_.style.removeProperty("opacity")}}let k={onPointerDown:v,onPointerUp:x};return l&&s&&(k.onMouseEnter=f,e.stacked||(k.onMouseLeave=w)),d&&(k.onClick=_=>{c&&c(_),a.canCloseOnClick&&u(!0)}),{playToast:w,pauseToast:f,isRunning:t,preventExitTransition:r,toastRef:o,eventHandlers:k}}var sM=typeof window<"u"?T.useLayoutEffect:T.useEffect,bu=({theme:e,type:t,isLoading:n,...r})=>U.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:e==="colored"?"currentColor":`var(--toastify-icon-color-${t})`,...r});function lM(e){return U.createElement(bu,{...e},U.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))}function uM(e){return U.createElement(bu,{...e},U.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))}function cM(e){return U.createElement(bu,{...e},U.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))}function dM(e){return U.createElement(bu,{...e},U.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))}function fM(){return U.createElement("div",{className:"Toastify__spinner"})}var hf={info:uM,warning:lM,success:cM,error:dM,spinner:fM},pM=e=>e in hf;function hM({theme:e,type:t,isLoading:n,icon:r}){let i=null,o={theme:e,type:t};return r===!1||(jn(r)?i=r({...o,isLoading:n}):T.isValidElement(r)?i=T.cloneElement(r,o):n?i=hf.spinner():pM(t)&&(i=hf[t](o))),i}var mM=e=>{let{isRunning:t,preventExitTransition:n,toastRef:r,eventHandlers:i,playToast:o}=aM(e),{closeButton:a,children:l,autoClose:s,onClick:u,type:c,hideProgressBar:d,closeToast:g,transition:m,position:v,className:x,style:w,progressClassName:f,updateId:p,role:y,progress:b,rtl:E,toastId:k,deleteToast:_,isIn:S,isLoading:M,closeOnClick:j,theme:I,ariaLabel:P}=e,$=br("Toastify__toast",`Toastify__toast-theme--${I}`,`Toastify__toast--${c}`,{"Toastify__toast--rtl":E},{"Toastify__toast--close-on-click":j}),A=jn(x)?x({rtl:E,position:v,type:c,defaultClassName:$}):br($,x),R=hM(e),F=!!b||!s,L={closeToast:g,type:c,theme:I},O=null;return a===!1||(jn(a)?O=a(L):T.isValidElement(a)?O=T.cloneElement(a,L):O=Uj(L)),U.createElement(m,{isIn:S,done:_,position:v,preventExitTransition:n,nodeRef:r,playToast:o},U.createElement("div",{id:k,tabIndex:0,onClick:u,"data-in":S,className:A,...i,style:w,ref:r,...S&&{role:y,"aria-label":P}},R!=null&&U.createElement("div",{className:br("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!M})},R),Hb(l,e,!t),O,!e.customProgressBar&&U.createElement(Wj,{...p&&!F?{key:`p-${p}`}:{},rtl:E,theme:I,delay:s,isRunning:t,isIn:S,closeToast:g,hide:d,type:c,className:f,controlledProgress:F,progress:b||0})))},gM=(e,t=!1)=>({enter:`Toastify--animate Toastify__${e}-enter`,exit:`Toastify--animate Toastify__${e}-exit`,appendPosition:t}),vM=Hj(gM("bounce",!0)),yM={position:"top-right",transition:vM,autoClose:5e3,closeButton:!0,pauseOnHover:!0,pauseOnFocusLoss:!0,draggable:"touch",draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light","aria-label":"Notifications Alt+T",hotKeys:e=>e.altKey&&e.code==="KeyT"};function aa(e){let t={...yM,...e},n=e.stacked,[r,i]=T.useState(!0),o=T.useRef(null),{getToastToRender:a,isToastActive:l,count:s}=oM(t),{className:u,style:c,rtl:d,containerId:g,hotKeys:m}=t;function v(w){let f=br("Toastify__toast-container",`Toastify__toast-container--${w}`,{"Toastify__toast-container--rtl":d});return jn(u)?u({position:w,rtl:d,defaultClassName:f}):br(f,df(u))}function x(){n&&(i(!0),K.play())}return sM(()=>{var w;if(n){let f=o.current.querySelectorAll('[data-in="true"]'),p=12,y=(w=t.position)==null?void 0:w.includes("top"),b=0,E=0;Array.from(f).reverse().forEach((k,_)=>{let S=k;S.classList.add("Toastify__toast--stacked"),_>0&&(S.dataset.collapsed=`${r}`),S.dataset.pos||(S.dataset.pos=y?"top":"bot");let M=b*(r?.2:1)+(r?0:p*_);S.style.setProperty("--y",`${y?M:M*-1}px`),S.style.setProperty("--g",`${p}`),S.style.setProperty("--s",`${1-(r?E:0)}`),b+=S.offsetHeight,E+=.025})}},[r,s,n]),T.useEffect(()=>{function w(f){var p;let y=o.current;m(f)&&((p=y.querySelector('[tabIndex="0"]'))==null||p.focus(),i(!1),K.pause()),f.key==="Escape"&&(document.activeElement===y||y!=null&&y.contains(document.activeElement))&&(i(!0),K.play())}return document.addEventListener("keydown",w),()=>{document.removeEventListener("keydown",w)}},[m]),U.createElement("section",{ref:o,className:"Toastify",id:g,onMouseEnter:()=>{n&&(i(!1),K.pause())},onMouseLeave:x,"aria-live":"polite","aria-atomic":"false","aria-relevant":"additions text","aria-label":t["aria-label"]},a((w,f)=>{let p=f.length?{...c}:{...c,pointerEvents:"none"};return U.createElement("div",{tabIndex:-1,className:v(w),"data-stacked":n,style:p,key:`c-${w}`},f.map(({content:y,props:b})=>U.createElement(mM,{...b,stacked:n,collapseAll:x,isIn:l(b.toastId,b.containerId),key:`t-${b.key}`},y)))}))}const Mn="/Didiv/assets/nofoto-2f8d9d99.png",xM=()=>{const e=Oi(),t=[...Qp].sort(()=>Math.random()-.5).slice(0,3),n=r=>{e(vu({...r,quantity:1})),K.success(`${r.name} додано в кошик!`)};return h.jsxs(I4,{children:[h.jsx(aa,{}),h.jsx($4,{children:"Нові товари"}),h.jsxs(D4,{children:[t.map(r=>{var i;return h.jsxs(R4,{children:[h.jsxs(A4,{to:`/product/${r.id}`,children:[h.jsx(L4,{children:"Новинка"}),h.jsx("img",{src:((i=r.image)==null?void 0:i[0])||Mn,alt:r.name,onError:o=>{o.currentTarget.onerror=null,o.currentTarget.src=Mn}}),h.jsx("div",{className:"overlay"})]}),h.jsxs(F4,{children:[h.jsx(z4,{children:r.name}),h.jsxs(N4,{children:[h.jsxs(B4,{children:[r.price," грн"]}),h.jsx(V4,{onClick:()=>n(r),children:h.jsx($p,{size:22})})]})]})]},r.id)}),h.jsx(H4,{to:"/catalog/new",children:h.jsxs(U4,{children:[h.jsx("p",{children:"Усі новинки"}),h.jsx(W4,{children:h.jsx(By,{size:24})})]})})]})]})},bM=C.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`,_c=C.div`
  background-color: #ffffffde;
  padding: 20px;
  border: 1px solid #e3e2e2;
  border-radius: 8px;
`,Cc=C.div`
  font-size: 24px;
  font-weight: bold;
  color: var(--orange-color);
`,Ec=C.div`
  font-size: 14px;
  color: #888;
`,Xb=()=>h.jsxs(bM,{children:[h.jsxs(_c,{children:[h.jsx(Cc,{children:"3000+"}),h.jsx(Ec,{children:"Перевірених деталей"})]}),h.jsxs(_c,{children:[h.jsx(Cc,{children:"6 років"}),h.jsx(Ec,{children:"Досвіду на ринку"})]}),h.jsxs(_c,{children:[h.jsx(Cc,{children:"100%"}),h.jsx(Ec,{children:"Контроль якості"})]})]}),wM=$e.div`
  background:var(--background-color);
`,SM=$e.div`
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
    max-width: 1440px;
  }
`;$e.h1`
  margin: 0;
  margin-right: 10px;
  color: #ffffff;
  text-shadow:
    0 0 5px #00baff,
    0 0 10px #00baff,
    0 0 20px #00baff,
    0 0 40px #00baff,
    0 0 80px #00baff;
`;$e.img`
  width: 40px;
  height: 40px;
  object-fit: cover;
`;const _M=()=>h.jsx(wM,{children:h.jsxs(SM,{children:[h.jsx(M4,{}),h.jsx(Xb,{}),h.jsx(xM,{}),h.jsx(qP,{})]})}),CM=C.div`
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
    max-width: 1440px;
  }
`,EM=C.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  justify-content: flex-start;
  margin-bottom: 16px;

  @media (min-width: 768px) {
    display: none;
  }
`,kM=C.button`
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
`,TM=C.svg`
  width: 20px;
  height: 20px;
  fill: var(--white-color);
`,OM=C.button`
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
`,PM=C.svg`
  width: 20px;
  height: 20px;
  fill: var(--white-color);
`,jM=C.div`
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
`,MM=C.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 85%;
  max-width: 400px;
  /* padding-left: 10px;
  padding-right: 10px; */
  height: 100%;
  background: white;
  z-index: 1001;
  display: flex;
  flex-direction: column;
  box-shadow: -10px 0 25px rgba(0, 0, 0, 0.1);

  /* Анімація виїзду справа */
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  transform: ${({open:e})=>e?"translateX(0)":"translateX(100%)"};
`;C.button`
  font-size: 20px;
  border: none;
  background: none;
  margin-bottom: 20px;
`;const IM=C.div`
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
`;const $M=C.div`
  padding: 20px;
  border-top: 1px solid #eee;
  background: white;
`,DM=C.button`
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
`,Kb=C.button`
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
`,RM=C.aside`

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
`,AM=C.h3`
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
`;const LM=C.div`
  border-bottom: 1px solid #eee;
  padding: 12px;
  margin-bottom: 12px;

  &:last-child {
    border-bottom: none;
  }
`,FM=C.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  padding: 8px 0;
  
  &:hover p {
    color: #85683d;
  }
`,zM=C.p`
  font-weight: 600;
  font-size: 16px;
  margin: 0;
  color: #222;
  transition: color 0.2s;
`,NM=C.span`
  border: solid #555;
  border-width: 0 2px 2px 0;
  display: inline-block;
  padding: 3px;
  transform: ${e=>e.isOpen?"rotate(-135deg)":"rotate(45deg)"};
  transition: transform 0.3s ease;
`,BM=C.div`
  max-height: ${e=>e.isOpen?"500px":"0"};
  overflow: hidden;
  transition: max-height 0.3s ease-in-out, opacity 0.3s;
  opacity: ${e=>e.isOpen?"1":"0"};
  padding: ${e=>e.isOpen?"12px":"0"};
`,VM=C.label`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  cursor: pointer;
  font-size: 15px;
  color: #444;

  &:hover span:first-of-type {
    border-color: #85683d;
  }
`,mf=C.input.attrs({type:"checkbox"})`
  display: none;
`,HM=C.span`
  width: 20px;
  height: 20px;
  border: 2px solid #ddd;
  border-radius: 4px;
  margin-right: 12px;
  position: relative;
  flex-shrink: 0;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);

  ${mf}:checked + & {
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

  ${mf}:checked + &::after {
    opacity: 1;
  }
`,Qb={bikes:[{type:"checkbox",name:"brand",label:"Бренд"},{type:"checkbox",name:"wheelSize",label:"Розмір колеса"},{type:"range",name:"price",label:"Ціна"}],saddles:[{type:"checkbox",name:"gender",label:"Тип (чол/жін)"},{type:"checkbox",name:"material",label:"Матеріал"},{type:"range",name:"price",label:"Ціна"}],handlebars:[{type:"checkbox",name:"width",label:"Ширина"},{type:"checkbox",name:"material",label:"Матеріал"}],wheels:[{type:"checkbox",name:"brand",label:"Бренд",options:["Shimano","Campagnolo","SRAM"]},{type:"checkbox",name:"size",label:"Розмір колеса",options:["26`","27.5`","29`"]},{type:"range",name:"price",label:"Ціна, грн",min:100,max:1e4},{type:"range",name:"weight",label:"Вага, грам",min:1,max:1e5}]};var gf={},rh={},ih={},Ii={};Object.defineProperty(Ii,"__esModule",{value:!0});Ii.Direction=void 0;var Yg;(function(e){e.Right="to right",e.Left="to left",e.Down="to bottom",e.Up="to top"})(Yg||(Ii.Direction=Yg={}));(function(e){var t=q&&q.__spreadArray||function(P,$,A){if(A||arguments.length===2)for(var R=0,F=$.length,L;R<F;R++)(L||!(R in $))&&(L||(L=Array.prototype.slice.call($,0,R)),L[R]=$[R]);return P.concat(L||Array.prototype.slice.call($))};Object.defineProperty(e,"__esModule",{value:!0}),e.isIOS=e.useThumbOverlap=e.assertUnreachable=e.voidFn=e.getTrackBackground=e.replaceAt=e.schd=e.translate=e.getClosestThumbIndex=e.translateThumbs=e.getPaddingAndBorder=e.getMargin=e.checkInitialOverlap=e.checkValuesAgainstBoundaries=e.checkBoundaries=e.isVertical=e.relativeValue=e.normalizeValue=e.isStepDivisible=e.isTouchEvent=e.getStepDecimals=void 0;var n=T,r=Ii,i=function(P){var $=P.toString().split(".")[1];return $?$.length:0};e.getStepDecimals=i;function o(P){return P.touches&&P.touches.length||P.changedTouches&&P.changedTouches.length}e.isTouchEvent=o;function a(P,$,A){var R=($-P)/A,F=8,L=Number(R.toFixed(F));return parseInt(L.toString(),10)===L}e.isStepDivisible=a;function l(P,$,A,R,F,L,O){var D=1e11;if(P=Math.round(P*D)/D,!L){var N=O[$-1],V=O[$+1];if(N&&N>P)return N;if(V&&V<P)return V}if(P>R)return R;if(P<A)return A;var H=Math.floor(P*D-A*D)%Math.floor(F*D),J=Math.floor(P*D-Math.abs(H)),ie=H===0?P:J/D,ee=Math.abs(H/D)<F/2?ie:ie+F,Q=(0,e.getStepDecimals)(F);return parseFloat(ee.toFixed(Q))}e.normalizeValue=l;function s(P,$,A){return(P-$)/(A-$)}e.relativeValue=s;function u(P){return P===r.Direction.Up||P===r.Direction.Down}e.isVertical=u;function c(P,$,A){if($>=A)throw new RangeError("min (".concat($,") is equal/bigger than max (").concat(A,")"));if(P<$)throw new RangeError("value (".concat(P,") is smaller than min (").concat($,")"));if(P>A)throw new RangeError("value (".concat(P,") is bigger than max (").concat(A,")"))}e.checkBoundaries=c;function d(P,$,A){return P<$?$:P>A?A:P}e.checkValuesAgainstBoundaries=d;function g(P){if(!(P.length<2)&&!P.slice(1).every(function($,A){return P[A]<=$}))throw new RangeError("values={[".concat(P,"]} needs to be sorted when allowOverlap={false}"))}e.checkInitialOverlap=g;function m(P){var $=window.getComputedStyle(P);return{top:parseInt($["margin-top"],10),bottom:parseInt($["margin-bottom"],10),left:parseInt($["margin-left"],10),right:parseInt($["margin-right"],10)}}e.getMargin=m;function v(P){var $=window.getComputedStyle(P);return{top:parseInt($["padding-top"],10)+parseInt($["border-top-width"],10),bottom:parseInt($["padding-bottom"],10)+parseInt($["border-bottom-width"],10),left:parseInt($["padding-left"],10)+parseInt($["border-left-width"],10),right:parseInt($["padding-right"],10)+parseInt($["border-right-width"],10)}}e.getPaddingAndBorder=v;function x(P,$,A){var R=A?-1:1;P.forEach(function(F,L){return f(F,R*$[L].x,$[L].y)})}e.translateThumbs=x;function w(P,$,A,R){for(var F=0,L=j(P[0],$,A,R),O=1;O<P.length;O++){var D=j(P[O],$,A,R);D<L&&(L=D,F=O)}return F}e.getClosestThumbIndex=w;function f(P,$,A){P.style.transform="translate(".concat($,"px, ").concat(A,"px)")}e.translate=f;var p=function(P){var $=[],A=null,R=function(){for(var F=[],L=0;L<arguments.length;L++)F[L]=arguments[L];$=F,!A&&(A=requestAnimationFrame(function(){A=null,P.apply(void 0,$)}))};return R};e.schd=p;function y(P,$,A){var R=P.slice(0);return R[$]=A,R}e.replaceAt=y;function b(P){var $=P.values,A=P.colors,R=P.min,F=P.max,L=P.direction,O=L===void 0?r.Direction.Right:L,D=P.rtl,N=D===void 0?!1:D;N&&O===r.Direction.Right?O=r.Direction.Left:N&&r.Direction.Left&&(O=r.Direction.Right);var V=$.slice(0).sort(function(J,ie){return J-ie}).map(function(J){return(J-R)/(F-R)*100}),H=V.reduce(function(J,ie,ee){return"".concat(J,", ").concat(A[ee]," ").concat(ie,"%, ").concat(A[ee+1]," ").concat(ie,"%")},"");return"linear-gradient(".concat(O,", ").concat(A[0]," 0%").concat(H,", ").concat(A[A.length-1]," 100%)")}e.getTrackBackground=b;function E(){}e.voidFn=E;function k(P){throw new Error("Didn't expect to get here")}e.assertUnreachable=k;var _=function(P,$,A,R,F){F===void 0&&(F=function(O){return O});var L=Math.ceil(t([P],Array.from(P.children),!0).reduce(function(O,D){var N=Math.ceil(D.getBoundingClientRect().width);if(D.innerText&&D.innerText.includes(A)&&D.childElementCount===0){var V=D.cloneNode(!0);V.innerHTML=F($.toFixed(R)),V.style.visibility="hidden",document.body.appendChild(V),N=Math.ceil(V.getBoundingClientRect().width),document.body.removeChild(V)}return N>O?N:O},P.getBoundingClientRect().width));return L},S=function(P,$,A,R,F,L,O){O===void 0&&(O=function(V){return V});var D=[],N=function(V){var H=_(A[V],R[V],F,L,O),J=$[V].x;$.forEach(function(ie,ee){var Q=ie.x,ce=_(A[ee],R[ee],F,L,O);V!==ee&&(J>=Q&&J<=Q+ce||J+H>=Q&&J+H<=Q+ce)&&(D.includes(ee)||(D.push(V),D.push(ee),D=t(t([],D,!0),[V,ee],!1),N(ee)))})};return N(P),Array.from(new Set(D.sort()))},M=function(P,$,A,R,F,L){R===void 0&&(R=.1),F===void 0&&(F=" - "),L===void 0&&(L=function(ee){return ee});var O=(0,e.getStepDecimals)(R),D=(0,n.useState)({}),N=D[0],V=D[1],H=(0,n.useState)(L($[A].toFixed(O))),J=H[0],ie=H[1];return(0,n.useEffect)(function(){if(P){var ee=P.getThumbs();if(ee.length<1)return;var Q={},ce=P.getOffsets(),Oe=S(A,ce,ee,$,F,O,L),gt=L($[A].toFixed(O));if(Oe.length){var He=Oe.reduce(function(An,gh,vh,yh){return An.length?t(t([],An,!0),[ce[yh[vh]].x],!1):[ce[yh[vh]].x]},[]);if(Math.min.apply(Math,He)===ce[A].x){var un=[];Oe.forEach(function(An){un.push($[An].toFixed(O))}),gt=Array.from(new Set(un.sort(function(An,gh){return parseFloat(An)-parseFloat(gh)}))).map(L).join(F);var cn=Math.min.apply(Math,He),Rt=Math.max.apply(Math,He),sa=ee[Oe[He.indexOf(Rt)]].getBoundingClientRect().width;Q.left="".concat(Math.abs(cn-(Rt+sa))/2,"px"),Q.transform="translate(-50%, 0)"}else Q.visibility="hidden"}ie(gt),V(Q)}},[P,$]),[J,N]};e.useThumbOverlap=M;function j(P,$,A,R){var F=P.getBoundingClientRect(),L=F.left,O=F.top,D=F.width,N=F.height;return u(R)?Math.abs(A-(O+N/2)):Math.abs($-(L+D/2))}var I=function(){var P,$=((P=navigator.userAgentData)===null||P===void 0?void 0:P.platform)||navigator.platform;return["iPad Simulator","iPhone Simulator","iPod Simulator","iPad","iPhone","iPod"].includes($)||navigator.userAgent.includes("Mac")&&"ontouchend"in document};e.isIOS=I})(ih);var UM=q&&q.__extends||function(){var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,i){r.__proto__=i}||function(r,i){for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(r[o]=i[o])},e(t,n)};return function(t,n){if(typeof n!="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");e(t,n);function r(){this.constructor=t}t.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}}(),WM=q&&q.__createBinding||(Object.create?function(e,t,n,r){r===void 0&&(r=n);var i=Object.getOwnPropertyDescriptor(t,n);(!i||("get"in i?!t.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,i)}:function(e,t,n,r){r===void 0&&(r=n),e[r]=t[n]}),GM=q&&q.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),YM=q&&q.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)n!=="default"&&Object.prototype.hasOwnProperty.call(e,n)&&WM(t,e,n);return GM(t,e),t},qg=q&&q.__spreadArray||function(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,o;r<i;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))};Object.defineProperty(rh,"__esModule",{value:!0});var Da=YM(T),te=ih,Pe=Ii,qM=["ArrowRight","ArrowUp","k","PageUp"],XM=["ArrowLeft","ArrowDown","j","PageDown"],KM=function(e){UM(t,e);function t(n){var r=e.call(this,n)||this;if(r.trackRef=Da.createRef(),r.thumbRefs=[],r.state={draggedTrackPos:[-1,-1],draggedThumbIndex:-1,thumbZIndexes:new Array(r.props.values.length).fill(0).map(function(i,o){return o}),isChanged:!1,markOffsets:[]},r.getOffsets=function(){var i=r.props,o=i.direction,a=i.values,l=i.min,s=i.max,u=r.trackRef.current;if(!u)return console.warn("No track element found."),[];var c=u.getBoundingClientRect(),d=(0,te.getPaddingAndBorder)(u);return r.getThumbs().map(function(g,m){var v={x:0,y:0},x=g.getBoundingClientRect(),w=(0,te.getMargin)(g);switch(o){case Pe.Direction.Right:return v.x=(w.left+d.left)*-1,v.y=((x.height-c.height)/2+d.top)*-1,v.x+=c.width*(0,te.relativeValue)(a[m],l,s)-x.width/2,v;case Pe.Direction.Left:return v.x=(w.right+d.right)*-1,v.y=((x.height-c.height)/2+d.top)*-1,v.x+=c.width-c.width*(0,te.relativeValue)(a[m],l,s)-x.width/2,v;case Pe.Direction.Up:return v.x=((x.width-c.width)/2+w.left+d.left)*-1,v.y=-d.left,v.y+=c.height-c.height*(0,te.relativeValue)(a[m],l,s)-x.height/2,v;case Pe.Direction.Down:return v.x=((x.width-c.width)/2+w.left+d.left)*-1,v.y=-d.left,v.y+=c.height*(0,te.relativeValue)(a[m],l,s)-x.height/2,v;default:return(0,te.assertUnreachable)(o)}})},r.getThumbs=function(){return r.trackRef&&r.trackRef.current?Array.from(r.trackRef.current.children).filter(function(i){return i.hasAttribute("aria-valuenow")}):(console.warn("No thumbs found in the track container. Did you forget to pass & spread the `props` param in renderTrack?"),[])},r.getTargetIndex=function(i){return r.getThumbs().findIndex(function(o){return o===i.target||o.contains(i.target)})},r.addTouchEvents=function(i){document.addEventListener("touchmove",r.schdOnTouchMove,{passive:!1}),document.addEventListener("touchend",r.schdOnEnd,{passive:!1}),document.addEventListener("touchcancel",r.schdOnEnd,{passive:!1})},r.addMouseEvents=function(i){document.addEventListener("mousemove",r.schdOnMouseMove),document.addEventListener("mouseup",r.schdOnEnd)},r.onMouseDownTrack=function(i){var o;if(!(i.button!==0||(0,te.isIOS)()))if(i.persist(),i.preventDefault(),r.addMouseEvents(i.nativeEvent),r.props.values.length>1&&r.props.draggableTrack){if(r.thumbRefs.some(function(l){var s;return(s=l.current)===null||s===void 0?void 0:s.contains(i.target)}))return;r.setState({draggedTrackPos:[i.clientX,i.clientY]},function(){return r.onMove(i.clientX,i.clientY)})}else{var a=(0,te.getClosestThumbIndex)(r.thumbRefs.map(function(l){return l.current}),i.clientX,i.clientY,r.props.direction);(o=r.thumbRefs[a].current)===null||o===void 0||o.focus(),r.setState({draggedThumbIndex:a},function(){return r.onMove(i.clientX,i.clientY)})}},r.onResize=function(){(0,te.translateThumbs)(r.getThumbs(),r.getOffsets(),r.props.rtl),r.calculateMarkOffsets()},r.onTouchStartTrack=function(i){var o;if(i.persist(),r.addTouchEvents(i.nativeEvent),r.props.values.length>1&&r.props.draggableTrack){if(r.thumbRefs.some(function(l){var s;return(s=l.current)===null||s===void 0?void 0:s.contains(i.target)}))return;r.setState({draggedTrackPos:[i.touches[0].clientX,i.touches[0].clientY]},function(){return r.onMove(i.touches[0].clientX,i.touches[0].clientY)})}else{var a=(0,te.getClosestThumbIndex)(r.thumbRefs.map(function(l){return l.current}),i.touches[0].clientX,i.touches[0].clientY,r.props.direction);(o=r.thumbRefs[a].current)===null||o===void 0||o.focus(),r.setState({draggedThumbIndex:a},function(){return r.onMove(i.touches[0].clientX,i.touches[0].clientY)})}},r.onMouseOrTouchStart=function(i){if(!r.props.disabled){var o=(0,te.isTouchEvent)(i);if(!(!o&&i.button!==0)){var a=r.getTargetIndex(i);a!==-1&&(o?r.addTouchEvents(i):r.addMouseEvents(i),r.setState({draggedThumbIndex:a,thumbZIndexes:r.state.thumbZIndexes.map(function(l,s){return s===a?Math.max.apply(Math,r.state.thumbZIndexes):l<=r.state.thumbZIndexes[a]?l:l-1})}))}}},r.onMouseMove=function(i){i.preventDefault(),r.onMove(i.clientX,i.clientY)},r.onTouchMove=function(i){i.preventDefault(),r.onMove(i.touches[0].clientX,i.touches[0].clientY)},r.onKeyDown=function(i){var o=r.props,a=o.values,l=o.onChange,s=o.step,u=o.rtl,c=o.direction,d=r.state.isChanged,g=r.getTargetIndex(i.nativeEvent),m=u||c===Pe.Direction.Left||c===Pe.Direction.Down?-1:1;g!==-1&&(qM.includes(i.key)?(i.preventDefault(),r.setState({draggedThumbIndex:g,isChanged:!0}),l((0,te.replaceAt)(a,g,r.normalizeValue(a[g]+m*(i.key==="PageUp"?s*10:s),g)))):XM.includes(i.key)?(i.preventDefault(),r.setState({draggedThumbIndex:g,isChanged:!0}),l((0,te.replaceAt)(a,g,r.normalizeValue(a[g]-m*(i.key==="PageDown"?s*10:s),g)))):i.key==="Tab"?r.setState({draggedThumbIndex:-1},function(){d&&r.fireOnFinalChange()}):d&&r.fireOnFinalChange())},r.onKeyUp=function(i){var o=r.state.isChanged;r.setState({draggedThumbIndex:-1},function(){o&&r.fireOnFinalChange()})},r.onMove=function(i,o){var a=r.state,l=a.draggedThumbIndex,s=a.draggedTrackPos,u=r.props,c=u.direction,d=u.min,g=u.max,m=u.onChange,v=u.values,x=u.step,w=u.rtl;if(l===-1&&s[0]===-1&&s[1]===-1)return null;var f=r.trackRef.current;if(!f)return null;var p=f.getBoundingClientRect(),y=(0,te.isVertical)(c)?p.height:p.width;if(s[0]!==-1&&s[1]!==-1){var b=i-s[0],E=o-s[1],k=0;switch(c){case Pe.Direction.Right:case Pe.Direction.Left:k=b/y*(g-d);break;case Pe.Direction.Down:case Pe.Direction.Up:k=E/y*(g-d);break;default:(0,te.assertUnreachable)(c)}if(w&&(k*=-1),Math.abs(k)>=x/2){for(var _=0;_<r.thumbRefs.length;_++){if(v[_]===g&&Math.sign(k)===1||v[_]===d&&Math.sign(k)===-1)return;var S=v[_]+k;S>g?k=g-v[_]:S<d&&(k=d-v[_])}for(var M=v.slice(0),_=0;_<r.thumbRefs.length;_++)M=(0,te.replaceAt)(M,_,r.normalizeValue(v[_]+k,_));r.setState({draggedTrackPos:[i,o]}),m(M)}}else{var j=0;switch(c){case Pe.Direction.Right:j=(i-p.left)/y*(g-d)+d;break;case Pe.Direction.Left:j=(y-(i-p.left))/y*(g-d)+d;break;case Pe.Direction.Down:j=(o-p.top)/y*(g-d)+d;break;case Pe.Direction.Up:j=(y-(o-p.top))/y*(g-d)+d;break;default:(0,te.assertUnreachable)(c)}w&&(j=g+d-j),Math.abs(v[l]-j)>=x/2&&m((0,te.replaceAt)(v,l,r.normalizeValue(j,l)))}},r.normalizeValue=function(i,o){var a=r.props,l=a.min,s=a.max,u=a.step,c=a.allowOverlap,d=a.values;return(0,te.normalizeValue)(i,o,l,s,u,c,d)},r.onEnd=function(i){if(i.preventDefault(),document.removeEventListener("mousemove",r.schdOnMouseMove),document.removeEventListener("touchmove",r.schdOnTouchMove),document.removeEventListener("mouseup",r.schdOnEnd),document.removeEventListener("touchend",r.schdOnEnd),document.removeEventListener("touchcancel",r.schdOnEnd),r.state.draggedThumbIndex===-1&&r.state.draggedTrackPos[0]===-1&&r.state.draggedTrackPos[1]===-1)return null;r.setState({draggedThumbIndex:-1,draggedTrackPos:[-1,-1]},function(){r.fireOnFinalChange()})},r.fireOnFinalChange=function(){r.setState({isChanged:!1});var i=r.props,o=i.onFinalChange,a=i.values;o&&o(a)},r.updateMarkRefs=function(i){if(!i.renderMark){r.numOfMarks=void 0,r.markRefs=void 0;return}r.numOfMarks=(i.max-i.min)/r.props.step,r.markRefs=[];for(var o=0;o<r.numOfMarks+1;o++)r.markRefs[o]=Da.createRef()},r.calculateMarkOffsets=function(){if(!(!r.props.renderMark||!r.trackRef||!r.numOfMarks||!r.markRefs||r.trackRef.current===null)){for(var i=window.getComputedStyle(r.trackRef.current),o=parseInt(i.width,10),a=parseInt(i.height,10),l=parseInt(i.paddingLeft,10),s=parseInt(i.paddingTop,10),u=[],c=0;c<r.numOfMarks+1;c++){var d=9999,g=9999;if(r.markRefs[c].current){var m=r.markRefs[c].current.getBoundingClientRect();d=m.height,g=m.width}r.props.direction===Pe.Direction.Left||r.props.direction===Pe.Direction.Right?u.push([Math.round(o/r.numOfMarks*c+l-g/2),-Math.round((d-a)/2)]):u.push([Math.round(a/r.numOfMarks*c+s-d/2),-Math.round((g-o)/2)])}r.setState({markOffsets:u})}},n.step===0)throw new Error('"step" property should be a positive number');return r.schdOnMouseMove=(0,te.schd)(r.onMouseMove),r.schdOnTouchMove=(0,te.schd)(r.onTouchMove),r.schdOnEnd=(0,te.schd)(r.onEnd),r.thumbRefs=n.values.map(function(){return Da.createRef()}),r.updateMarkRefs(n),r}return t.prototype.componentDidMount=function(){var n=this,r=this.props,i=r.values,o=r.min,a=r.step;this.resizeObserver=window.ResizeObserver?new window.ResizeObserver(this.onResize):{observe:function(){return window.addEventListener("resize",n.onResize)},unobserve:function(){return window.removeEventListener("resize",n.onResize)}},document.addEventListener("touchstart",this.onMouseOrTouchStart,{passive:!1}),document.addEventListener("mousedown",this.onMouseOrTouchStart,{passive:!1}),!this.props.allowOverlap&&(0,te.checkInitialOverlap)(this.props.values),this.props.values.forEach(function(l){return(0,te.checkBoundaries)(l,n.props.min,n.props.max)}),this.resizeObserver.observe(this.trackRef.current),(0,te.translateThumbs)(this.getThumbs(),this.getOffsets(),this.props.rtl),this.calculateMarkOffsets(),i.forEach(function(l){(0,te.isStepDivisible)(o,l,a)||console.warn("The `values` property is in conflict with the current `step`, `min`, and `max` properties. Please provide values that are accessible using the min, max, and step values.")})},t.prototype.componentDidUpdate=function(n,r){var i=this.props,o=i.max,a=i.min,l=i.step,s=i.values,u=i.rtl;(n.max!==o||n.min!==a||n.step!==l)&&this.updateMarkRefs(this.props),(0,te.translateThumbs)(this.getThumbs(),this.getOffsets(),u),(n.max!==o||n.min!==a||n.step!==l||r.markOffsets.length!==this.state.markOffsets.length)&&(this.calculateMarkOffsets(),s.forEach(function(c){(0,te.isStepDivisible)(a,c,l)||console.warn("The `values` property is in conflict with the current `step`, `min`, and `max` properties. Please provide values that are accessible using the min, max, and step values.")}))},t.prototype.componentWillUnmount=function(){var n={passive:!1};document.removeEventListener("mousedown",this.onMouseOrTouchStart,n),document.removeEventListener("mousemove",this.schdOnMouseMove),document.removeEventListener("touchmove",this.schdOnTouchMove),document.removeEventListener("touchstart",this.onMouseOrTouchStart),document.removeEventListener("mouseup",this.schdOnEnd),document.removeEventListener("touchend",this.schdOnEnd),this.resizeObserver.unobserve(this.trackRef.current)},t.prototype.render=function(){var n=this,r=this.props,i=r.label,o=r.labelledBy,a=r.renderTrack,l=r.renderThumb,s=r.renderMark,u=s===void 0?function(){return null}:s,c=r.values,d=r.min,g=r.max,m=r.allowOverlap,v=r.disabled,x=this.state,w=x.draggedThumbIndex,f=x.thumbZIndexes,p=x.markOffsets;return a({props:{style:{transform:"scale(1)",cursor:w>-1?"grabbing":this.props.draggableTrack?(0,te.isVertical)(this.props.direction)?"ns-resize":"ew-resize":c.length===1&&!v?"pointer":"inherit"},onMouseDown:v?te.voidFn:this.onMouseDownTrack,onTouchStart:v?te.voidFn:this.onTouchStartTrack,ref:this.trackRef},isDragged:this.state.draggedThumbIndex>-1,disabled:v,children:qg(qg([],p.map(function(y,b,E){return u({props:{style:n.props.direction===Pe.Direction.Left||n.props.direction===Pe.Direction.Right?{position:"absolute",left:"".concat(y[0],"px"),marginTop:"".concat(y[1],"px")}:{position:"absolute",top:"".concat(y[0],"px"),marginLeft:"".concat(y[1],"px")},key:"mark".concat(b),ref:n.markRefs[b]},index:b})}),!0),c.map(function(y,b){var E=n.state.draggedThumbIndex===b;return l({index:b,value:y,isDragged:E,props:{style:{position:"absolute",zIndex:f[b],cursor:v?"inherit":E?"grabbing":"grab",userSelect:"none",touchAction:"none",WebkitUserSelect:"none",MozUserSelect:"none",msUserSelect:"none"},key:b,tabIndex:v?void 0:0,"aria-valuemax":m?g:c[b+1]||g,"aria-valuemin":m?d:c[b-1]||d,"aria-valuenow":y,draggable:!1,ref:n.thumbRefs[b],"aria-label":i,"aria-labelledby":o,role:"slider",onKeyDown:v?te.voidFn:n.onKeyDown,onKeyUp:v?te.voidFn:n.onKeyUp}})}),!0)})},t.defaultProps={label:"Accessibility label",labelledBy:null,step:1,direction:Pe.Direction.Right,rtl:!1,disabled:!1,allowOverlap:!1,draggableTrack:!1,min:0,max:100},t}(Da.Component);rh.default=KM;(function(e){var t=q&&q.__importDefault||function(o){return o&&o.__esModule?o:{default:o}};Object.defineProperty(e,"__esModule",{value:!0}),e.checkValuesAgainstBoundaries=e.relativeValue=e.useThumbOverlap=e.Direction=e.getTrackBackground=e.Range=void 0;var n=t(rh);e.Range=n.default;var r=ih;Object.defineProperty(e,"getTrackBackground",{enumerable:!0,get:function(){return r.getTrackBackground}}),Object.defineProperty(e,"useThumbOverlap",{enumerable:!0,get:function(){return r.useThumbOverlap}}),Object.defineProperty(e,"relativeValue",{enumerable:!0,get:function(){return r.relativeValue}}),Object.defineProperty(e,"checkValuesAgainstBoundaries",{enumerable:!0,get:function(){return r.checkValuesAgainstBoundaries}});var i=Ii;Object.defineProperty(e,"Direction",{enumerable:!0,get:function(){return i.Direction}})})(gf);const QM=C.div`
  padding: 20px 0;
`,ZM=C.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`,Xg=C.input`
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
`;const JM=C.div`
  height: 6px;
  width: 100%;
  border-radius: 4px;
  background: ${({background:e})=>e};
`,eI=C.div`
  height: 18px;
  width: 18px;
  border-radius: 50%;
  background: #583d2d;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`,Ar=1340,Lr=100340,Gi=100,Zb=()=>{const[e,t]=T.useState([Ar,Lr]),n=(i,o)=>{const a=o===""?"":Number(o);t(l=>{const s=[...l];return s[i]=a,s})},r=i=>{t(o=>{const a=[...o];return i===0?((a[0]===""||a[0]<Ar)&&(a[0]=Ar),a[0]>o[1]-Gi&&(a[0]=o[1]-Gi)):((a[1]===""||a[1]>Lr)&&(a[1]=Lr),a[1]<o[0]+Gi&&(a[1]=o[0]+Gi)),a})};return h.jsxs(QM,{children:[h.jsxs(ZM,{children:[h.jsx(Xg,{type:"number",value:e[0],min:Ar,max:e[1],onChange:i=>n(0,i.target.value),onBlur:()=>r(0)}),h.jsx(Xg,{type:"number",value:e[1],min:e[0],max:Lr,onChange:i=>n(1,i.target.value),onBlur:()=>r(1)})]}),h.jsx(gf.Range,{values:e,step:Gi,min:Ar,max:Lr,onChange:i=>t(i),renderTrack:({props:i,children:o})=>h.jsx(JM,{...i,background:gf.getTrackBackground({values:e,colors:["#ddd","#85683d","#ddd"],min:Ar,max:Lr}),children:o}),renderThumb:({props:i})=>h.jsx(eI,{...i})})]})},tI=({category:e,selectedFilters:t,setSelectedFilters:n})=>{const r=Qb[e]||[],[i,o]=T.useState({}),a=c=>{o(d=>({...d,[c]:!d[c]}))},l=(c,d)=>{n(g=>{const m=g[c]||[];return m.includes(d)?{...g,[c]:m.filter(v=>v!==d)}:{...g,[c]:[...m,d]}})},s=Object.values(t).some(c=>Array.isArray(c)&&c.length>0),u=()=>{s&&n({})};return console.log(s),h.jsxs(RM,{children:[h.jsxs(AM,{children:["Фільтри ",h.jsx(Hy,{size:20})]}),(r||[]).map(c=>{var g;const d=!!i[c.name];return h.jsxs(LM,{children:[h.jsxs(FM,{onClick:()=>a(c.name),children:[h.jsx(zM,{children:c.label}),h.jsx(NM,{isOpen:d})]}),h.jsxs(BM,{isOpen:d,children:[c.type==="checkbox"&&((g=c.options)==null?void 0:g.map(m=>{var v;return h.jsxs(VM,{children:[h.jsx(mf,{checked:((v=t[c.name])==null?void 0:v.includes(m))||!1,onChange:()=>l(c.name,m)}),h.jsx(HM,{}),m]},m)})),c.type==="range"&&h.jsx(Zb,{})]})]},c.name)}),h.jsx(Kb,{onClick:u,disabled:!s,children:"Скинути обрані фільтри"})]})},nI=C.aside`
  width: 100%;
  max-width: 400px;
  background: #ffffff;
  padding: 20px;
  border-radius: 12px;
  font-family: 'Inter', sans-serif;
`;C.h3`
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 20px;
  color: #333;
`;const rI=C.div`
  border-bottom: 1px solid #eee;
  padding: 12px;
  margin-bottom: 12px;

  &:last-child {
    border-bottom: none;
  }
`,iI=C.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  padding: 8px 0;
  
  &:hover p {
    color: #85683d;
  }
`,oI=C.p`
  font-weight: 600;
  font-size: 16px;
  margin: 0;
  color: #222;
  transition: color 0.2s;
`,aI=C.span`
  border: solid #555;
  border-width: 0 2px 2px 0;
  display: inline-block;
  padding: 3px;
  transform: ${e=>e.isOpen?"rotate(-135deg)":"rotate(45deg)"};
  transition: transform 0.3s ease;
`,sI=C.div`
  max-height: ${e=>e.isOpen?"500px":"0"};
  overflow: hidden;
  transition: max-height 0.3s ease-in-out, opacity 0.3s;
  opacity: ${e=>e.isOpen?"1":"0"};
  padding: ${e=>e.isOpen?"12px":"0"};
`,lI=C.label`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  cursor: pointer;
  font-size: 15px;
  color: #444;

  &:hover span:first-of-type {
    border-color: #85683d;
  }
`,vf=C.input.attrs({type:"checkbox"})`
  display: none;
`,uI=C.span`
  width: 20px;
  height: 20px;
  border: 2px solid #ddd;
  border-radius: 4px;
  margin-right: 12px;
  position: relative;
  flex-shrink: 0;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);

  ${vf}:checked + & {
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

  ${vf}:checked + &::after {
    opacity: 1;
  }
`,cI=({category:e,selectedFilters:t,setSelectedFilters:n})=>{const r=Qb[e]||[],[i,o]=T.useState({}),a=s=>{o(u=>({...u,[s]:!u[s]}))},l=(s,u)=>{n(c=>{const d=c[s]||[];return d.includes(u)?{...c,[s]:d.filter(g=>g!==u)}:{...c,[s]:[...d,u]}})};return h.jsx(nI,{children:(r||[]).map(s=>{var c;const u=!!i[s.name];return h.jsxs(rI,{children:[h.jsxs(iI,{onClick:()=>a(s.name),children:[h.jsx(oI,{children:s.label}),h.jsx(aI,{isOpen:u})]}),h.jsxs(sI,{isOpen:u,children:[s.type==="checkbox"&&((c=s.options)==null?void 0:c.map(d=>{var g;return h.jsxs(lI,{children:[h.jsx(vf,{checked:((g=t[s.name])==null?void 0:g.includes(d))||!1,onChange:()=>l(s.name,d)}),h.jsx(uI,{}),d]},d)})),s.type==="range"&&h.jsx(Zb,{})]})]},s.name)})})};C.div``;const dI=C.div`
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
`,fI=C.div`
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
`,pI=C.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`,hI=C.div`
  padding: 16px;
`,mI=C.p`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 8px;
`,gI=C.p`
  font-size: 16px;
  color: #555;
`,vI=C.p`
  font-size: 16px;
  color: #555;
`,yI=C.div.attrs({className:"card-buttons"})`
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
`,Kg=C.button`
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
`;const Jb=Nb({name:"favorites",initialState:{items:[]},reducers:{toggleFavorite:(e,t)=>{const n=t.payload;e.items.find(i=>i.id===n.id)?e.items=e.items.filter(i=>i.id!==n.id):e.items.push(n)},clearFavorite:e=>{e.items=[]}}}),{toggleFavorite:wu,clearFavorite:xI}=Jb.actions,bI=Jb.reducer,wI=({category:e,selectedFilters:t={}})=>{let n=Qp.filter(s=>s.category===e);const r=gl(),i=Oi(),o=Sn(s=>s.favorites.items),a=(s,u)=>{u.stopPropagation(),i(vu({...s,quantity:1})),K.success(`${s.name} додано в кошик!`)},l=(s,u)=>{u.stopPropagation();const c=o.some(d=>d.id===s.id);i(wu(s)),c?K.warning(`${s.name} видалено з обраного`):K.info(`${s.name} додано в обране`)};return Object.keys(t).forEach(s=>{const u=t[s];Array.isArray(u)&&u.length>0&&(n=n.filter(c=>u.includes(c[s]))),(typeof u=="string"||typeof u=="number")&&s==="price"&&(n=n.filter(c=>c.price<=Number(u)))}),h.jsxs(h.Fragment,{children:[h.jsx(aa,{autoClose:1500}),h.jsx(dI,{children:n.map(s=>{var c;const u=o.some(d=>d.id===s.id);return h.jsxs(fI,{onClick:()=>r(`/product/${s.id}`),style:{cursor:"pointer"},children:[h.jsx(pI,{src:((c=s.image)==null?void 0:c[0])||Mn,alt:s.name,onError:d=>{d.currentTarget.onerror=null,d.currentTarget.src=Mn}}),h.jsxs(hI,{children:[h.jsx(mI,{children:s.name}),h.jsxs(gI,{children:[s.price," грн"]}),s.weight&&h.jsxs(vI,{children:[s.weight," грам"]})]}),h.jsxs(yI,{children:[h.jsx(Kg,{onClick:d=>a(s,d),children:h.jsx($p,{size:24,color:"black"})}),h.jsx(Kg,{onClick:d=>l(s,d),children:h.jsx(Vy,{size:24,fill:u?"#ff4d4f":"none",color:u?"#ff4d4f":"#000000"})})]})]},s.id)})})]})},SI=()=>{const[e,t]=T.useState({});console.log(e);const{category:n}=iv(),[r,i]=T.useState(!1);console.log(n);const o=Object.values(e).some(l=>Array.isArray(l)&&l.length>0),a=()=>{o&&t({})};return h.jsxs(CM,{children:[h.jsxs(EM,{children:[h.jsxs(kM,{onClick:()=>i(!0),children:["Фільтр",h.jsx(TM,{children:h.jsx("use",{href:`${qt}#icon-filter`})})]}),h.jsxs(OM,{onClick:()=>i(!0),children:["Сортування",h.jsx(PM,{children:h.jsx("use",{href:`${qt}#icon-sort`})})]})]}),h.jsx(tI,{category:n,selectedFilters:e,setSelectedFilters:t}),h.jsx(wI,{category:n,selectedFilters:e}),r&&h.jsx(jM,{onClick:()=>i(!1),open:r,children:h.jsxs(MM,{onClick:l=>l.stopPropagation(),open:r,children:[h.jsxs(IM,{children:[h.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[h.jsx(Hy,{size:20}),h.jsx("h2",{children:"Фільтри"})]}),h.jsx(Wy,{size:24,onClick:()=>i(!1),style:{cursor:"pointer"}})]}),h.jsx(cI,{category:n,selectedFilters:e,setSelectedFilters:t}),h.jsxs($M,{children:[h.jsx(Kb,{onClick:a,disabled:!o,children:"Скинути обрані фільтри"}),h.jsx(DM,{onClick:()=>i(!1),children:"Показати результати"})]})]})})]})},Qg=C.div`
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
    max-width: 1440px;
  }
`,_I=C.div`
  font-size: 12px;
  color: #888;
  margin-bottom: 20px;
  a { text-decoration: none; color: inherit; }
`,CI=C.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  @media (max-width: 768px) { grid-template-columns: 1fr; }
`,EI=C.div`

`;C.div`
  position: absolute;
  top: 10px;
  left: 10px;
  background: #27ae60;
  color: white;
  padding: 5px 15px;
  font-weight: bold;
  z-index: 2;
`;const kI=C.img`
  width: 100%;
  border-radius: 4px;
  background: #f9f9f9;
`,TI=C.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
`,OI=C.img`
  width: 60px;
  height: 60px;
  border: 1px solid #ddd;
  cursor: pointer;
  object-fit: cover;
`,PI=C.div``,jI=C.h1`
  font-size: 28px;
  margin-bottom: 10px;
  color: #333;
`,MI=C.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 20px;
`,II=C.span`color: #27ae60; font-size: 14px;`,$I=C.div`
  background: #fdfdfd;
  border: 1px solid #eee;
  padding: 25px;
  border-radius: 8px;
`,DI=C.div`
  display: flex;
  align-items: baseline;
  gap: 15px;
  margin-bottom: 20px;
`,RI=C.span`
  font-size: 32px;
  font-weight: 700;
`;C.span`
  text-decoration: line-through;
  color: #999;
  font-size: 18px;
`;const AI=C.div`
  display: flex;
  gap: 15px;
  margin-bottom: 15px;
`,LI=C.div`
  display: flex;
  align-items: center;
  border: 1px solid #ddd;
  border-radius: 20px;
  overflow: hidden;
  button {
    border: none; background: none; padding: 10px 15px; cursor: pointer;
    &:hover { background: #eee; }
  }
  span { padding: 0 10px; min-width: 30px; text-align: center; }
`,FI=C.button`
  flex-grow: 1;
  background: #f39c12;
  color: white;
  border: none;
  border-radius: 20px;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s;
  &:hover { background: #e67e22; }
`;C.button`
  width: 100%;
  background: none;
  border: none;
  color: #2980b9;
  text-decoration: underline;
  cursor: pointer;
  font-size: 14px;
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
`;const zI=C.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-top: 30px;
  @media (max-width: 768px) { grid-template-columns: 1fr; }
`,Ra=C.div`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  span { color: #888; margin-bottom: 4px; }
  b { color: #333; }
`,NI=C.div`
  margin: 20px 0;
  font-size: 14px;
  color: #444;
`,BI=C.div`
  margin-top: 20px;
`,VI=C.div`
  display: flex;
  gap: 30px;
  border-bottom: 1px solid #ccc;
`,Zg=C.button`
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
`,HI=C.div`
  padding: 15px;
  background: #fff;
`,UI=C.p`
font-family: var(--main-font);
font-size: 20px;


`,WI=C.button`
 background: ${({$active:e})=>e?"var(--red-color)":"transparent"};
    font-weight: bold;
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

  &:hover {
    border-color: #bbb;
  }
`,GI=C.svg`
  width: 20px;
  height: 20px;
  
   fill: ${({$active:e})=>e?"white":" var(--black-color)"};
`,YI=()=>{const{id:e}=iv(),t=Qp.find(m=>m.id===Number(e)),[n,r]=T.useState(1),[i,o]=T.useState("description"),[a,l]=T.useState(t.image[0]),s=Oi(),c=Sn(m=>m.favorites.items).some(m=>m.id===t.id),d=()=>{s(vu({...t,quantity:n})),K.success(`${t.name} додано в кошик!`)},g=(m,v)=>{v.stopPropagation(),s(wu(m)),c?K.warning(`${m.name} видалено з обраного`):K.info(`${m.name} додано в обране`)};return t?h.jsxs(Qg,{children:[" ",h.jsx(aa,{autoClose:1500}),h.jsxs(_I,{children:[h.jsx(Te,{to:"/",children:"Головна"})," / ",h.jsx(Te,{to:"/catalog",children:"Каталог"})," /"," ",t.name]}),h.jsxs(CI,{children:[h.jsxs(EI,{children:[h.jsx(kI,{src:a,alt:t.name}),h.jsx(TI,{children:t.image.map(m=>h.jsx(OI,{src:m,onClick:()=>l(m),style:{cursor:"pointer",opacity:a===m?1:.4}},m))})]}),h.jsxs(PI,{children:[h.jsx(jI,{children:t.name}),h.jsx(MI,{children:h.jsx(II,{children:"● В наявності"})}),h.jsxs($I,{children:[h.jsx(DI,{children:h.jsxs(RI,{children:[t.price.toLocaleString()," грн"]})}),h.jsxs(AI,{children:[h.jsxs(LI,{children:[h.jsx("button",{onClick:()=>r(Math.max(1,n-1)),children:"-"}),h.jsx("span",{children:n}),h.jsx("button",{onClick:()=>r(n+1),children:"+"})]}),h.jsx(FI,{onClick:d,children:"В КОШИК"}),h.jsxs(WI,{$active:c,onClick:m=>g(t,m),children:[h.jsxs(GI,{$active:c,children:[" ",h.jsx("use",{href:`${qt}#icon-heart`})]}),"В ОБРАНЕ"]})]})]}),h.jsxs(NI,{children:[h.jsxs("p",{children:[h.jsx("strong",{children:"Ваше місто:"})," Київ"]}),h.jsx("p",{children:"🚚 Доставка по Україні (Розрахувати вартість)"})]})]})]}),h.jsxs(BI,{children:[h.jsxs(VI,{children:[h.jsx(Zg,{active:i==="description",onClick:()=>o("description"),children:"Опис"}),h.jsx(Zg,{active:i==="attributes",onClick:()=>o("attributes"),children:"Характеристики"})]}),h.jsxs(HI,{children:[i==="description"&&h.jsx(UI,{children:t.description}),i==="attributes"&&h.jsxs(zI,{children:[h.jsxs(Ra,{children:[h.jsx("span",{children:"Розміри, мм"})," ",h.jsx("b",{children:t.size||""})]}),h.jsxs(Ra,{children:[h.jsx("span",{children:"Тип"})," ",h.jsx("b",{children:t.type||""})]}),h.jsxs(Ra,{children:[h.jsx("span",{children:"Колір"})," ",h.jsx("b",{children:t.color||""})]}),h.jsxs(Ra,{children:[h.jsx("span",{children:"Колір"})," ",h.jsx("b",{children:t.color||""})]})]})]})]})]}):h.jsx(Qg,{children:"Товар не знайдено"})},qI=C.div`
  font-family: var(--main-font);
  width: 100%;
  max-width: 750px;
  padding: 10px;
  @media screen and (min-width: 768px) {
    max-width: 994px;
    padding-left: 30px;
    padding-right: 30px;
  }
  @media screen and (min-width: 1200px) {
    max-width: 1440px;
  }

  margin: 0 auto;
  padding: 40px 20px;
  color: #333;
`,XI=C.nav`
  font-family: var(--main-font);
  font-size: 14px;
  color: #8c8c8c;
  margin-bottom: 15px;
`,KI=C.h1`
  font-size:24px;
 
  font-weight: 800;
  margin-bottom: 20px;
  @media screen and (min-width: 768px) {
  font-size:30px;
  }
  
`,QI=C.div`
  display: flex;
  flex-direction: column;
  gap: 20px; 
  width: 100%;
  
  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start; /* Щоб SummaryCard не розтягувалася по висоті */
    justify-content: space-between; /* Розносить список і чек-аут */
  }
`,ZI=C.div`
  flex: 1; 
  width: 100%;
  border: 1px solid #eee;
  border-radius: 12px;
`,JI=C.div`
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
`,e5=C.img`
  width: 100%;
  height: auto;
  border-radius: 4px;
`,t5=C.div`
  h3 {
    font-size: 16px;
    font-weight: 500;
    margin: 0;
    line-height: 1.4;
  }
`,n5=C.div`

  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  gap: 30px;
`,r5=C.div`

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
`;const i5=C.div`
  text-align: right;
  .current-price {
    font-size: 18px;
    font-weight: 700;
  }
  .old-price {
    font-size: 14px;
    color: #999;
    text-decoration: line-through;
  }
`,o5=C.button`
  background: 'none';
  border: 'none';
  cursor: 'pointer';
  color: '#ccc';
`,a5=C.button`
  background: 'none';
  border: 'none';
  cursor: 'pointer';
  color: '#ccc';
`,s5=C.div`

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
`,Jg=C.div`
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
    font-weight: 700;
  }
`,l5=C(Te)`
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
`,u5=C.button`
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
`;const c5=C.div`
  padding: 20px 40px;
  font-size: 14px;
  color: #8c8c8c;
  background-color: #fdfaf7;
`,d5=C.div`
   
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
`;const f5=C.img`
  width: 250px;
  height: auto;
  margin-bottom: 30px;
`,p5=C.h2`
  font-size: 28px;
  color: #333;
  margin-bottom: 10px;
`,h5=C.p`
  font-size: 18px;
  color: #666;
  margin-bottom: 40px;
`,m5=C.button`
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
`,g5=()=>h.jsxs(h.Fragment,{children:[h.jsx(c5,{children:"Головна / Кошик"}),h.jsxs(d5,{children:[h.jsx(f5,{src:"/Didiv/empty-cart.png",alt:"Порожній кошик"}),h.jsx(p5,{children:"Ваш кошик порожній"}),h.jsx(h5,{children:"Ви ще не додали жодного товару в кошик"}),h.jsx(m5,{onClick:()=>window.location.href="/Didiv/catalog",children:"Перейти до покупок"})]})]}),v5=C.div`
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
`,y5=({item:e})=>{const t=Oi();return h.jsxs(v5,{children:[h.jsx("button",{onClick:()=>t(Lj(e.id)),children:"-"}),h.jsx("span",{children:e.quantity}),h.jsx("button",{onClick:()=>t(Aj(e.id)),children:"+"})]})},x5=()=>{const e=Oi(),[t,n]=T.useState([]),r=Sn(d=>d.cart.items),i=r.reduce((d,g)=>d+g.price*(g.quantity||1),0),o=Sn(d=>d.cart.items),a=Sn(d=>d.favorites.items);console.log(a);const l=o.length===0,s=(d,g)=>{g.stopPropagation(),console.log(d);const m=a.some(v=>v.id===d.id);e(wu(d)),m?K.warning(`${d.name} видалено з обраного`):K.info(`${d.name} додано в обране`)},u=d=>{n(g=>[...g,d.id]),setTimeout(()=>{e($j(d)),n(g=>g.filter(m=>m!==d.id))},300)},c=()=>{e(Dj())};return h.jsx(h.Fragment,{children:l?h.jsx(g5,{}):h.jsxs(qI,{children:[h.jsx(aa,{autoClose:1500}),h.jsxs(XI,{children:[" ",h.jsx(Te,{to:"/",style:{color:"inherit",textDecoration:"none"},children:"Головна"})," ","/"," ",h.jsx(Te,{to:"/cart",style:{color:"inherit",textDecoration:"none"},children:"Кошик"})]}),h.jsx(KI,{children:"Кошик"}),h.jsxs(QI,{children:[h.jsx(ZI,{children:r.map((d,g)=>{var v;const m=a.some(x=>x.id===d.id);return h.jsxs(JI,{className:t.includes(d.id)?"removing":"",children:[h.jsx(e5,{src:((v=d.image)==null?void 0:v[0])||Mn,alt:d.name,onError:x=>{x.currentTarget.onerror=null,x.currentTarget.src=Mn}}),h.jsx(t5,{children:h.jsx("h3",{children:d.name})}),h.jsxs(n5,{children:[h.jsx(y5,{item:{...d,quantity:d.quantity||1}}),h.jsx(i5,{children:h.jsxs("div",{className:"current-price",children:[(d.price*(d.quantity||1)).toLocaleString()," грн"]})})]}),h.jsxs(r5,{children:[h.jsx(a5,{onClick:x=>s(d,x),style:{background:"none",border:"none",cursor:"pointer",color:"#ccc"},children:h.jsx(Vy,{size:22,fill:m?"#ff4d4f":"none",color:m?"#ff4d4f":"#999"})}),h.jsx(o5,{onClick:()=>u(d),style:{background:"none",border:"none",cursor:"pointer",color:"#000000"},children:h.jsx(Uy,{size:22})})]})]},`${d.id}-${g}`)})}),h.jsxs(s5,{children:[h.jsx(Jg,{}),h.jsxs(Jg,{className:"total",children:[h.jsx("span",{children:"Всього "}),h.jsxs("span",{children:[" ",i," грн"]})]}),h.jsx(l5,{to:"/checkout",children:"Оформити замовлення"}),h.jsx(u5,{onClick:c,children:"Oчистити кошик"})]})]})]})})},b5=C.div`
 

  color: var(-black-color);
  font-family: var(--main-font);
  width: 100%;
  max-width: 750px;
  padding: 10px;
  @media screen and (min-width: 768px) {
    max-width: 994px;
    padding-left: 30px;
    padding-right: 30px;
  }
  @media screen and (min-width: 1200px) {
    max-width: 1440px;
  }

  margin: 0 auto;
  padding: 40px 20px;
  
`,w5=C.nav`
  font-family: var(--main-font);
  font-size: 14px;
  color: #8c8c8c;
  margin-bottom: 15px;
`,S5=C.h1`
color: var(--black-color);
 font-family: var(--main-font);
  font-size: 30px;
  font-weight: 800;
  margin-bottom: 32px;
`,_5=C.div`
  display: grid;
  grid-template-columns: 1fr 350px;
  gap: 30px;

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`,C5=C.div`
   flex: 1; 
  width: 100%;
  border: 1px solid #eee;
  border-radius: 12px;
`,E5=C.div`
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
`;C.div`
  display: flex;
  align-items: center;
  gap: 20px;
  flex: 1;
`;const k5=C.img`
   width: 100%;
  height: auto;
  border-radius: 4px;
`,T5=C.h3`
 font-size: 20px;
    font-weight: 500;
    margin: 0;
    line-height: 1.4;
    @media screen and (max-width: 768px) {
    border-bottom: 1px solid #eee;
    padding-bottom:10px;
  }
    
`,O5=C.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
   @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`,P5=C.span`
  font-size: 20px;
  font-weight: 700;
  white-space: nowrap;
`,j5=C.div`
  display: flex;
  gap: 16px;
`,e0=C.button`
  background: none;
  border: none;
  cursor: pointer;
  color: #1a1a1a;
  padding: 8px;
  
`,M5=C.div`
  background: #ffffff;
  border: 1px solid #f0f0f0;
  border-radius: 16px;
  padding: 30px;
  height: fit-content;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.02);
`,I5=C.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  font-size: 15px;
  color: #555;
`,$5=C.button`
  width: 100%;
  background-color: #f37a20; // Помаранчевий з вашого скріншоту
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
`,D5=C.button`
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
`,R5=C.div`
  padding: 20px 40px;
  font-size: 14px;
  color: #8c8c8c;
  background-color: #fdfaf7;
`,A5=C.div`
   
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
`;const L5=C.img`
  width: 250px;
  height: auto;
  margin-bottom: 30px;
`;C.h2`
  font-size: 28px;
  color: #333;
  margin-bottom: 10px;
`;const F5=C.p`
  font-size: 18px;
  color: #666;
  margin-bottom: 40px;
`,z5=C.button`
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
`,N5=()=>h.jsxs(h.Fragment,{children:[h.jsx(R5,{children:"Головна / Обране"}),h.jsxs(A5,{children:[h.jsx(L5,{src:"/Didiv/sad.png",alt:"Порожній кошик"}),h.jsx(F5,{children:"Ви ще не додали жодного товару в обране"}),h.jsx(z5,{onClick:()=>window.location.href="/Didiv/catalog",children:"Перейти до вибору"})]})]}),B5=()=>{const e=Oi(),t=Sn(c=>c.favorites.items),[n,r]=T.useState([]),i=c=>{e(vu(c)),K.success(`${c.name} додано в кошик!`)},o=()=>{e(Rj(t)),K.success("Товари додано в кошик!")};console.log(t);const a=t.reduce((c,d)=>c+d.price,0),l=(c,d)=>{d.stopPropagation();const g=t.some(m=>m.id===c.id);r(m=>[...m,c.id]),setTimeout(()=>{e(wu(c)),r(m=>m.filter(v=>v!==c.id))},300),g?K.warning(`${c.name} видалено з обраного`):K.info(`${c.name} додано в обране`)},s=()=>{e(xI())},u=t.length===0;return h.jsx(h.Fragment,{children:u?h.jsx(N5,{}):h.jsxs(b5,{children:[h.jsx(aa,{autoClose:1500}),h.jsxs(w5,{children:[" ",h.jsx(Te,{to:"/",style:{color:"inherit",textDecoration:"none"},children:"Головна"})," ","/"," ",h.jsx(Te,{to:"/favorite",style:{color:"inherit",textDecoration:"none"},children:"Обране"})]}),h.jsx(S5,{children:"Обране"}),h.jsxs(_5,{children:[h.jsx(C5,{children:t.map(c=>{var d;return h.jsxs(E5,{className:n.includes(c.id)?"removing":"",children:[h.jsx(k5,{src:((d=c.image)==null?void 0:d[0])||Mn,alt:c.name,onError:g=>{g.currentTarget.onerror=null,g.currentTarget.src=Mn}}),h.jsx(T5,{children:c.name}),h.jsxs(O5,{children:[h.jsxs(P5,{children:[c.price," грн"]}),h.jsxs(j5,{children:[h.jsx(e0,{onClick:()=>i(c),children:h.jsx($p,{size:30})}),h.jsx(e0,{onClick:g=>l(c,g),children:h.jsx(Uy,{size:30})})]})]})]},c.id)})}),h.jsxs(M5,{children:[h.jsxs(I5,{children:[h.jsx("span",{children:"Всього в обраному:"}),h.jsxs("strong",{children:[t.length," шт."]}),h.jsx("span",{children:"На суму:"}),h.jsxs("strong",{children:[a," грн"]})]}),h.jsx("hr",{style:{border:"0",borderTop:"1px solid #eee",margin:"20px 0"}}),h.jsx($5,{onClick:()=>o(),children:"Додати все до кошика"}),h.jsx(D5,{onClick:s,children:"Очистити обрані"})]})]})]})})},V5=C.div`
  background-color: #fdfaf7;
  min-height: 80vh;
  padding-bottom: 60px;
`,H5=C.div`
  padding: 15px 20px;
  font-size: 12px;
  color: #8c8c8c;

  @media screen and (min-width: 768px) {
    padding: 20px 40px;
    font-size: 14px;
  }
`,U5=C.article`
  max-width: 800px; // Обмежуємо ширину для зручного читання тексту
  margin: 0 auto;
  padding: 0 20px;

  @media screen and (min-width: 768px) {
    padding: 0 40px;
  }
`,W5=C.h1`
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
`;const G5=({title:e,children:t,breadcrumbPath:n})=>h.jsxs(V5,{children:[h.jsxs(H5,{children:["Головна / ",n]}),h.jsxs(U5,{children:[h.jsx(W5,{children:e}),t]})]}),t0=C.section`
  margin-bottom: 30px;

  @media screen and (min-width: 768px) {
    margin-bottom: 40px;
  }
`,n0=C.h2`
  font-size: 20px;
  color: #4a332a;
  margin-bottom: 15px;
  font-weight: 600;

  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`,r0=C.p`
  font-size: 16px;
  line-height: 1.6;
  color: #555;
  margin-bottom: 15px;
`,i0=C.ul`
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
`,Y5=()=>h.jsxs(G5,{title:"Оплата і доставка",breadcrumbPath:"Доставка",children:[h.jsxs(t0,{children:[h.jsx(n0,{children:"Способи доставки"}),h.jsx(r0,{children:"Ми доставляємо замовлення по всій Україні за допомогою:"}),h.jsxs(i0,{children:[h.jsx("li",{children:"Нова Пошта (у відділення або кур1єром)"}),h.jsx("li",{children:"Самовивіз з нашого магазину"}),h.jsx("li",{children:"Укрпошта"})]})]}),h.jsxs(t0,{children:[h.jsx(n0,{children:"Варіанти оплати"}),h.jsx(r0,{children:"Ви можете обрати зручний для вас спосіб оплати:"}),h.jsxs(i0,{children:[h.jsx("li",{children:"Оплата карткою на сайті (Visa/Mastercard)"}),h.jsx("li",{children:"Післяплата (накладений платіж) при отриманні"}),h.jsx("li",{children:"Безготівковий розрахунок"})]})]})]});function jr(e){"@babel/helpers - typeof";return jr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},jr(e)}function q5(e,t){if(jr(e)!=="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(jr(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function ew(e){var t=q5(e,"string");return jr(t)==="symbol"?t:String(t)}function to(e,t,n){return t=ew(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o0(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function G(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?o0(Object(n),!0).forEach(function(r){to(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o0(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function X5(e){if(Array.isArray(e))return e}function K5(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,i,o,a,l=[],s=!0,u=!1;try{if(o=(n=n.call(e)).next,t===0){if(Object(n)!==n)return;s=!1}else for(;!(s=(r=o.call(n)).done)&&(l.push(r.value),l.length!==t);s=!0);}catch(c){u=!0,i=c}finally{try{if(!s&&n.return!=null&&(a=n.return(),Object(a)!==a))return}finally{if(u)throw i}}return l}}function yf(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function tw(e,t){if(e){if(typeof e=="string")return yf(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return yf(e,t)}}function Q5(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Cn(e,t){return X5(e)||K5(e,t)||tw(e,t)||Q5()}function Z5(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function Rn(e,t){if(e==null)return{};var n=Z5(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var J5=["defaultInputValue","defaultMenuIsOpen","defaultValue","inputValue","menuIsOpen","onChange","onInputChange","onMenuClose","onMenuOpen","value"];function e$(e){var t=e.defaultInputValue,n=t===void 0?"":t,r=e.defaultMenuIsOpen,i=r===void 0?!1:r,o=e.defaultValue,a=o===void 0?null:o,l=e.inputValue,s=e.menuIsOpen,u=e.onChange,c=e.onInputChange,d=e.onMenuClose,g=e.onMenuOpen,m=e.value,v=Rn(e,J5),x=T.useState(l!==void 0?l:n),w=Cn(x,2),f=w[0],p=w[1],y=T.useState(s!==void 0?s:i),b=Cn(y,2),E=b[0],k=b[1],_=T.useState(m!==void 0?m:a),S=Cn(_,2),M=S[0],j=S[1],I=T.useCallback(function(O,D){typeof u=="function"&&u(O,D),j(O)},[u]),P=T.useCallback(function(O,D){var N;typeof c=="function"&&(N=c(O,D)),p(N!==void 0?N:O)},[c]),$=T.useCallback(function(){typeof g=="function"&&g(),k(!0)},[g]),A=T.useCallback(function(){typeof d=="function"&&d(),k(!1)},[d]),R=l!==void 0?l:f,F=s!==void 0?s:E,L=m!==void 0?m:M;return G(G({},v),{},{inputValue:R,menuIsOpen:F,onChange:I,onInputChange:P,onMenuClose:A,onMenuOpen:$,value:L})}function t$(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a0(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,ew(r.key),r)}}function n$(e,t,n){return t&&a0(e.prototype,t),n&&a0(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function xf(e,t){return xf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},xf(e,t)}function r$(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&xf(e,t)}function al(e){return al=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},al(e)}function i$(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function o$(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function a$(e,t){if(t&&(jr(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return o$(e)}function s$(e){var t=i$();return function(){var r=al(e),i;if(t){var o=al(this).constructor;i=Reflect.construct(r,arguments,o)}else i=r.apply(this,arguments);return a$(this,i)}}function l$(e){if(Array.isArray(e))return yf(e)}function u$(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function c$(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function oh(e){return l$(e)||u$(e)||tw(e)||c$()}function d$(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}const f$=Math.min,p$=Math.max,sl=Math.round,Aa=Math.floor,ll=e=>({x:e,y:e});function h$(e){const{x:t,y:n,width:r,height:i}=e;return{width:r,height:i,top:n,left:t,right:t+r,bottom:n+i,x:t,y:n}}function Su(){return typeof window<"u"}function nw(e){return iw(e)?(e.nodeName||"").toLowerCase():"#document"}function Gt(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function rw(e){var t;return(t=(iw(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function iw(e){return Su()?e instanceof Node||e instanceof Gt(e).Node:!1}function bf(e){return Su()?e instanceof Element||e instanceof Gt(e).Element:!1}function ah(e){return Su()?e instanceof HTMLElement||e instanceof Gt(e).HTMLElement:!1}function s0(e){return!Su()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof Gt(e).ShadowRoot}function ow(e){const{overflow:t,overflowX:n,overflowY:r,display:i}=sh(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&i!=="inline"&&i!=="contents"}let kc;function m$(){return kc==null&&(kc=typeof CSS<"u"&&CSS.supports&&CSS.supports("-webkit-backdrop-filter","none")),kc}function g$(e){return/^(html|body|#document)$/.test(nw(e))}function sh(e){return Gt(e).getComputedStyle(e)}function v$(e){if(nw(e)==="html")return e;const t=e.assignedSlot||e.parentNode||s0(e)&&e.host||rw(e);return s0(t)?t.host:t}function aw(e){const t=v$(e);return g$(t)?e.ownerDocument?e.ownerDocument.body:e.body:ah(t)&&ow(t)?t:aw(t)}function ul(e,t,n){var r;t===void 0&&(t=[]),n===void 0&&(n=!0);const i=aw(e),o=i===((r=e.ownerDocument)==null?void 0:r.body),a=Gt(i);if(o){const l=wf(a);return t.concat(a,a.visualViewport||[],ow(i)?i:[],l&&n?ul(l):[])}else return t.concat(i,ul(i,[],n))}function wf(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function y$(e){const t=sh(e);let n=parseFloat(t.width)||0,r=parseFloat(t.height)||0;const i=ah(e),o=i?e.offsetWidth:n,a=i?e.offsetHeight:r,l=sl(n)!==o||sl(r)!==a;return l&&(n=o,r=a),{width:n,height:r,$:l}}function lh(e){return bf(e)?e:e.contextElement}function Tc(e){const t=lh(e);if(!ah(t))return ll(1);const n=t.getBoundingClientRect(),{width:r,height:i,$:o}=y$(t);let a=(o?sl(n.width):n.width)/r,l=(o?sl(n.height):n.height)/i;return(!a||!Number.isFinite(a))&&(a=1),(!l||!Number.isFinite(l))&&(l=1),{x:a,y:l}}const x$=ll(0);function b$(e){const t=Gt(e);return!m$()||!t.visualViewport?x$:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function w$(e,t,n){return t===void 0&&(t=!1),!n||t&&n!==Gt(e)?!1:t}function l0(e,t,n,r){t===void 0&&(t=!1),n===void 0&&(n=!1);const i=e.getBoundingClientRect(),o=lh(e);let a=ll(1);t&&(r?bf(r)&&(a=Tc(r)):a=Tc(e));const l=w$(o,n,r)?b$(o):ll(0);let s=(i.left+l.x)/a.x,u=(i.top+l.y)/a.y,c=i.width/a.x,d=i.height/a.y;if(o){const g=Gt(o),m=r&&bf(r)?Gt(r):r;let v=g,x=wf(v);for(;x&&r&&m!==v;){const w=Tc(x),f=x.getBoundingClientRect(),p=sh(x),y=f.left+(x.clientLeft+parseFloat(p.paddingLeft))*w.x,b=f.top+(x.clientTop+parseFloat(p.paddingTop))*w.y;s*=w.x,u*=w.y,c*=w.x,d*=w.y,s+=y,u+=b,v=Gt(x),x=wf(v)}}return h$({width:c,height:d,x:s,y:u})}function sw(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function S$(e,t){let n=null,r;const i=rw(e);function o(){var l;clearTimeout(r),(l=n)==null||l.disconnect(),n=null}function a(l,s){l===void 0&&(l=!1),s===void 0&&(s=1),o();const u=e.getBoundingClientRect(),{left:c,top:d,width:g,height:m}=u;if(l||t(),!g||!m)return;const v=Aa(d),x=Aa(i.clientWidth-(c+g)),w=Aa(i.clientHeight-(d+m)),f=Aa(c),y={rootMargin:-v+"px "+-x+"px "+-w+"px "+-f+"px",threshold:p$(0,f$(1,s))||1};let b=!0;function E(k){const _=k[0].intersectionRatio;if(_!==s){if(!b)return a();_?a(!1,_):r=setTimeout(()=>{a(!1,1e-7)},1e3)}_===1&&!sw(u,e.getBoundingClientRect())&&a(),b=!1}try{n=new IntersectionObserver(E,{...y,root:i.ownerDocument})}catch{n=new IntersectionObserver(E,y)}n.observe(e)}return a(!0),o}function _$(e,t,n,r){r===void 0&&(r={});const{ancestorScroll:i=!0,ancestorResize:o=!0,elementResize:a=typeof ResizeObserver=="function",layoutShift:l=typeof IntersectionObserver=="function",animationFrame:s=!1}=r,u=lh(e),c=i||o?[...u?ul(u):[],...t?ul(t):[]]:[];c.forEach(f=>{i&&f.addEventListener("scroll",n,{passive:!0}),o&&f.addEventListener("resize",n)});const d=u&&l?S$(u,n):null;let g=-1,m=null;a&&(m=new ResizeObserver(f=>{let[p]=f;p&&p.target===u&&m&&t&&(m.unobserve(t),cancelAnimationFrame(g),g=requestAnimationFrame(()=>{var y;(y=m)==null||y.observe(t)})),n()}),u&&!s&&m.observe(u),t&&m.observe(t));let v,x=s?l0(e):null;s&&w();function w(){const f=l0(e);x&&!sw(x,f)&&n(),x=f,v=requestAnimationFrame(w)}return n(),()=>{var f;c.forEach(p=>{i&&p.removeEventListener("scroll",n),o&&p.removeEventListener("resize",n)}),d==null||d(),(f=m)==null||f.disconnect(),m=null,s&&cancelAnimationFrame(v)}}var Sf=T.useLayoutEffect,C$=["className","clearValue","cx","getStyles","getClassNames","getValue","hasValue","isMulti","isRtl","options","selectOption","selectProps","setValue","theme"],cl=function(){};function E$(e,t){return t?t[0]==="-"?e+t:e+"__"+t:e}function k$(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var o=[].concat(r);if(t&&e)for(var a in t)t.hasOwnProperty(a)&&t[a]&&o.push("".concat(E$(e,a)));return o.filter(function(l){return l}).map(function(l){return String(l).trim()}).join(" ")}var u0=function(t){return R$(t)?t.filter(Boolean):jr(t)==="object"&&t!==null?[t]:[]},lw=function(t){t.className,t.clearValue,t.cx,t.getStyles,t.getClassNames,t.getValue,t.hasValue,t.isMulti,t.isRtl,t.options,t.selectOption,t.selectProps,t.setValue,t.theme;var n=Rn(t,C$);return G({},n)},we=function(t,n,r){var i=t.cx,o=t.getStyles,a=t.getClassNames,l=t.className;return{css:o(n,t),className:i(r??{},a(n,t),l)}};function _u(e){return[document.documentElement,document.body,window].indexOf(e)>-1}function T$(e){return _u(e)?window.innerHeight:e.clientHeight}function uw(e){return _u(e)?window.pageYOffset:e.scrollTop}function dl(e,t){if(_u(e)){window.scrollTo(0,t);return}e.scrollTop=t}function O$(e){var t=getComputedStyle(e),n=t.position==="absolute",r=/(auto|scroll)/;if(t.position==="fixed")return document.documentElement;for(var i=e;i=i.parentElement;)if(t=getComputedStyle(i),!(n&&t.position==="static")&&r.test(t.overflow+t.overflowY+t.overflowX))return i;return document.documentElement}function P$(e,t,n,r){return n*((e=e/r-1)*e*e+1)+t}function La(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:200,r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:cl,i=uw(e),o=t-i,a=10,l=0;function s(){l+=a;var u=P$(l,i,o,n);dl(e,u),l<n?window.requestAnimationFrame(s):r(e)}s()}function c0(e,t){var n=e.getBoundingClientRect(),r=t.getBoundingClientRect(),i=t.offsetHeight/3;r.bottom+i>n.bottom?dl(e,Math.min(t.offsetTop+t.clientHeight-e.offsetHeight+i,e.scrollHeight)):r.top-i<n.top&&dl(e,Math.max(t.offsetTop-i,0))}function j$(e){var t=e.getBoundingClientRect();return{bottom:t.bottom,height:t.height,left:t.left,right:t.right,top:t.top,width:t.width}}function d0(){try{return document.createEvent("TouchEvent"),!0}catch{return!1}}function M$(){try{return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}catch{return!1}}var cw=!1,I$={get passive(){return cw=!0}},Fa=typeof window<"u"?window:{};Fa.addEventListener&&Fa.removeEventListener&&(Fa.addEventListener("p",cl,I$),Fa.removeEventListener("p",cl,!1));var $$=cw;function D$(e){return e!=null}function R$(e){return Array.isArray(e)}function za(e,t,n){return e?t:n}var A$=function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];var o=Object.entries(t).filter(function(a){var l=Cn(a,1),s=l[0];return!r.includes(s)});return o.reduce(function(a,l){var s=Cn(l,2),u=s[0],c=s[1];return a[u]=c,a},{})},L$=["children","innerProps"],F$=["children","innerProps"];function z$(e){var t=e.maxHeight,n=e.menuEl,r=e.minHeight,i=e.placement,o=e.shouldScroll,a=e.isFixedPosition,l=e.controlHeight,s=O$(n),u={placement:"bottom",maxHeight:t};if(!n||!n.offsetParent)return u;var c=s.getBoundingClientRect(),d=c.height,g=n.getBoundingClientRect(),m=g.bottom,v=g.height,x=g.top,w=n.offsetParent.getBoundingClientRect(),f=w.top,p=a?window.innerHeight:T$(s),y=uw(s),b=parseInt(getComputedStyle(n).marginBottom,10),E=parseInt(getComputedStyle(n).marginTop,10),k=f-E,_=p-x,S=k+y,M=d-y-x,j=m-p+y+b,I=y+x-E,P=160;switch(i){case"auto":case"bottom":if(_>=v)return{placement:"bottom",maxHeight:t};if(M>=v&&!a)return o&&La(s,j,P),{placement:"bottom",maxHeight:t};if(!a&&M>=r||a&&_>=r){o&&La(s,j,P);var $=a?_-b:M-b;return{placement:"bottom",maxHeight:$}}if(i==="auto"||a){var A=t,R=a?k:S;return R>=r&&(A=Math.min(R-b-l,t)),{placement:"top",maxHeight:A}}if(i==="bottom")return o&&dl(s,j),{placement:"bottom",maxHeight:t};break;case"top":if(k>=v)return{placement:"top",maxHeight:t};if(S>=v&&!a)return o&&La(s,I,P),{placement:"top",maxHeight:t};if(!a&&S>=r||a&&k>=r){var F=t;return(!a&&S>=r||a&&k>=r)&&(F=a?k-E:S-E),o&&La(s,I,P),{placement:"top",maxHeight:F}}return{placement:"bottom",maxHeight:t};default:throw new Error('Invalid placement provided "'.concat(i,'".'))}return u}function N$(e){var t={bottom:"top",top:"bottom"};return e?t[e]:"bottom"}var dw=function(t){return t==="auto"?"bottom":t},B$=function(t,n){var r,i=t.placement,o=t.theme,a=o.borderRadius,l=o.spacing,s=o.colors;return G((r={label:"menu"},to(r,N$(i),"100%"),to(r,"position","absolute"),to(r,"width","100%"),to(r,"zIndex",1),r),n?{}:{backgroundColor:s.neutral0,borderRadius:a,boxShadow:"0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)",marginBottom:l.menuGutter,marginTop:l.menuGutter})},fw=T.createContext(null),V$=function(t){var n=t.children,r=t.minMenuHeight,i=t.maxMenuHeight,o=t.menuPlacement,a=t.menuPosition,l=t.menuShouldScrollIntoView,s=t.theme,u=T.useContext(fw)||{},c=u.setPortalPlacement,d=T.useRef(null),g=T.useState(i),m=Cn(g,2),v=m[0],x=m[1],w=T.useState(null),f=Cn(w,2),p=f[0],y=f[1],b=s.spacing.controlHeight;return Sf(function(){var E=d.current;if(E){var k=a==="fixed",_=l&&!k,S=z$({maxHeight:i,menuEl:E,minHeight:r,placement:o,shouldScroll:_,isFixedPosition:k,controlHeight:b});x(S.maxHeight),y(S.placement),c==null||c(S.placement)}},[i,o,a,l,r,c,b]),n({ref:d,placerProps:G(G({},t),{},{placement:p||dw(o),maxHeight:v})})},H$=function(t){var n=t.children,r=t.innerRef,i=t.innerProps;return W("div",Y({},we(t,"menu",{menu:!0}),{ref:r},i),n)},U$=H$,W$=function(t,n){var r=t.maxHeight,i=t.theme.spacing.baseUnit;return G({maxHeight:r,overflowY:"auto",position:"relative",WebkitOverflowScrolling:"touch"},n?{}:{paddingBottom:i,paddingTop:i})},G$=function(t){var n=t.children,r=t.innerProps,i=t.innerRef,o=t.isMulti;return W("div",Y({},we(t,"menuList",{"menu-list":!0,"menu-list--is-multi":o}),{ref:i},r),n)},pw=function(t,n){var r=t.theme,i=r.spacing.baseUnit,o=r.colors;return G({textAlign:"center"},n?{}:{color:o.neutral40,padding:"".concat(i*2,"px ").concat(i*3,"px")})},Y$=pw,q$=pw,X$=function(t){var n=t.children,r=n===void 0?"No options":n,i=t.innerProps,o=Rn(t,L$);return W("div",Y({},we(G(G({},o),{},{children:r,innerProps:i}),"noOptionsMessage",{"menu-notice":!0,"menu-notice--no-options":!0}),i),r)},K$=function(t){var n=t.children,r=n===void 0?"Loading...":n,i=t.innerProps,o=Rn(t,F$);return W("div",Y({},we(G(G({},o),{},{children:r,innerProps:i}),"loadingMessage",{"menu-notice":!0,"menu-notice--loading":!0}),i),r)},Q$=function(t){var n=t.rect,r=t.offset,i=t.position;return{left:n.left,position:i,top:r,width:n.width,zIndex:1}},Z$=function(t){var n=t.appendTo,r=t.children,i=t.controlElement,o=t.innerProps,a=t.menuPlacement,l=t.menuPosition,s=T.useRef(null),u=T.useRef(null),c=T.useState(dw(a)),d=Cn(c,2),g=d[0],m=d[1],v=T.useMemo(function(){return{setPortalPlacement:m}},[]),x=T.useState(null),w=Cn(x,2),f=w[0],p=w[1],y=T.useCallback(function(){if(i){var _=j$(i),S=l==="fixed"?0:window.pageYOffset,M=_[g]+S;(M!==(f==null?void 0:f.offset)||_.left!==(f==null?void 0:f.rect.left)||_.width!==(f==null?void 0:f.rect.width))&&p({offset:M,rect:_})}},[i,l,g,f==null?void 0:f.offset,f==null?void 0:f.rect.left,f==null?void 0:f.rect.width]);Sf(function(){y()},[y]);var b=T.useCallback(function(){typeof u.current=="function"&&(u.current(),u.current=null),i&&s.current&&(u.current=_$(i,s.current,y,{elementResize:"ResizeObserver"in window}))},[i,y]);Sf(function(){b()},[b]);var E=T.useCallback(function(_){s.current=_,b()},[b]);if(!n&&l!=="fixed"||!f)return null;var k=W("div",Y({ref:E},we(G(G({},t),{},{offset:f.offset,position:l,rect:f.rect}),"menuPortal",{"menu-portal":!0}),o),r);return W(fw.Provider,{value:v},n?Cp.createPortal(k,n):k)},J$=function(t){var n=t.isDisabled,r=t.isRtl;return{label:"container",direction:r?"rtl":void 0,pointerEvents:n?"none":void 0,position:"relative"}},eD=function(t){var n=t.children,r=t.innerProps,i=t.isDisabled,o=t.isRtl;return W("div",Y({},we(t,"container",{"--is-disabled":i,"--is-rtl":o}),r),n)},tD=function(t,n){var r=t.theme.spacing,i=t.isMulti,o=t.hasValue,a=t.selectProps.controlShouldRenderValue;return G({alignItems:"center",display:i&&o&&a?"flex":"grid",flex:1,flexWrap:"wrap",WebkitOverflowScrolling:"touch",position:"relative",overflow:"hidden"},n?{}:{padding:"".concat(r.baseUnit/2,"px ").concat(r.baseUnit*2,"px")})},nD=function(t){var n=t.children,r=t.innerProps,i=t.isMulti,o=t.hasValue;return W("div",Y({},we(t,"valueContainer",{"value-container":!0,"value-container--is-multi":i,"value-container--has-value":o}),r),n)},rD=function(){return{alignItems:"center",alignSelf:"stretch",display:"flex",flexShrink:0}},iD=function(t){var n=t.children,r=t.innerProps;return W("div",Y({},we(t,"indicatorsContainer",{indicators:!0}),r),n)},f0,oD=["size"],aD=["innerProps","isRtl","size"],sD={name:"8mmkcg",styles:"display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0"},hw=function(t){var n=t.size,r=Rn(t,oD);return W("svg",Y({height:n,width:n,viewBox:"0 0 20 20","aria-hidden":"true",focusable:"false",css:sD},r))},uh=function(t){return W(hw,Y({size:20},t),W("path",{d:"M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"}))},mw=function(t){return W(hw,Y({size:20},t),W("path",{d:"M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"}))},gw=function(t,n){var r=t.isFocused,i=t.theme,o=i.spacing.baseUnit,a=i.colors;return G({label:"indicatorContainer",display:"flex",transition:"color 150ms"},n?{}:{color:r?a.neutral60:a.neutral20,padding:o*2,":hover":{color:r?a.neutral80:a.neutral40}})},lD=gw,uD=function(t){var n=t.children,r=t.innerProps;return W("div",Y({},we(t,"dropdownIndicator",{indicator:!0,"dropdown-indicator":!0}),r),n||W(mw,null))},cD=gw,dD=function(t){var n=t.children,r=t.innerProps;return W("div",Y({},we(t,"clearIndicator",{indicator:!0,"clear-indicator":!0}),r),n||W(uh,null))},fD=function(t,n){var r=t.isDisabled,i=t.theme,o=i.spacing.baseUnit,a=i.colors;return G({label:"indicatorSeparator",alignSelf:"stretch",width:1},n?{}:{backgroundColor:r?a.neutral10:a.neutral20,marginBottom:o*2,marginTop:o*2})},pD=function(t){var n=t.innerProps;return W("span",Y({},n,we(t,"indicatorSeparator",{"indicator-separator":!0})))},hD=FT(f0||(f0=d$([`
  0%, 80%, 100% { opacity: 0; }
  40% { opacity: 1; }
`]))),mD=function(t,n){var r=t.isFocused,i=t.size,o=t.theme,a=o.colors,l=o.spacing.baseUnit;return G({label:"loadingIndicator",display:"flex",transition:"color 150ms",alignSelf:"center",fontSize:i,lineHeight:1,marginRight:i,textAlign:"center",verticalAlign:"middle"},n?{}:{color:r?a.neutral60:a.neutral20,padding:l*2})},Oc=function(t){var n=t.delay,r=t.offset;return W("span",{css:Hp({animation:"".concat(hD," 1s ease-in-out ").concat(n,"ms infinite;"),backgroundColor:"currentColor",borderRadius:"1em",display:"inline-block",marginLeft:r?"1em":void 0,height:"1em",verticalAlign:"top",width:"1em"},"","")})},gD=function(t){var n=t.innerProps,r=t.isRtl,i=t.size,o=i===void 0?4:i,a=Rn(t,aD);return W("div",Y({},we(G(G({},a),{},{innerProps:n,isRtl:r,size:o}),"loadingIndicator",{indicator:!0,"loading-indicator":!0}),n),W(Oc,{delay:0,offset:r}),W(Oc,{delay:160,offset:!0}),W(Oc,{delay:320,offset:!r}))},vD=function(t,n){var r=t.isDisabled,i=t.isFocused,o=t.theme,a=o.colors,l=o.borderRadius,s=o.spacing;return G({label:"control",alignItems:"center",cursor:"default",display:"flex",flexWrap:"wrap",justifyContent:"space-between",minHeight:s.controlHeight,outline:"0 !important",position:"relative",transition:"all 100ms"},n?{}:{backgroundColor:r?a.neutral5:a.neutral0,borderColor:r?a.neutral10:i?a.primary:a.neutral20,borderRadius:l,borderStyle:"solid",borderWidth:1,boxShadow:i?"0 0 0 1px ".concat(a.primary):void 0,"&:hover":{borderColor:i?a.primary:a.neutral30}})},yD=function(t){var n=t.children,r=t.isDisabled,i=t.isFocused,o=t.innerRef,a=t.innerProps,l=t.menuIsOpen;return W("div",Y({ref:o},we(t,"control",{control:!0,"control--is-disabled":r,"control--is-focused":i,"control--menu-is-open":l}),a,{"aria-disabled":r||void 0}),n)},xD=yD,bD=["data"],wD=function(t,n){var r=t.theme.spacing;return n?{}:{paddingBottom:r.baseUnit*2,paddingTop:r.baseUnit*2}},SD=function(t){var n=t.children,r=t.cx,i=t.getStyles,o=t.getClassNames,a=t.Heading,l=t.headingProps,s=t.innerProps,u=t.label,c=t.theme,d=t.selectProps;return W("div",Y({},we(t,"group",{group:!0}),s),W(a,Y({},l,{selectProps:d,theme:c,getStyles:i,getClassNames:o,cx:r}),u),W("div",null,n))},_D=function(t,n){var r=t.theme,i=r.colors,o=r.spacing;return G({label:"group",cursor:"default",display:"block"},n?{}:{color:i.neutral40,fontSize:"75%",fontWeight:500,marginBottom:"0.25em",paddingLeft:o.baseUnit*3,paddingRight:o.baseUnit*3,textTransform:"uppercase"})},CD=function(t){var n=lw(t);n.data;var r=Rn(n,bD);return W("div",Y({},we(t,"groupHeading",{"group-heading":!0}),r))},ED=SD,kD=["innerRef","isDisabled","isHidden","inputClassName"],TD=function(t,n){var r=t.isDisabled,i=t.value,o=t.theme,a=o.spacing,l=o.colors;return G(G({visibility:r?"hidden":"visible",transform:i?"translateZ(0)":""},OD),n?{}:{margin:a.baseUnit/2,paddingBottom:a.baseUnit/2,paddingTop:a.baseUnit/2,color:l.neutral80})},vw={gridArea:"1 / 2",font:"inherit",minWidth:"2px",border:0,margin:0,outline:0,padding:0},OD={flex:"1 1 auto",display:"inline-grid",gridArea:"1 / 1 / 2 / 3",gridTemplateColumns:"0 min-content","&:after":G({content:'attr(data-value) " "',visibility:"hidden",whiteSpace:"pre"},vw)},PD=function(t){return G({label:"input",color:"inherit",background:0,opacity:t?0:1,width:"100%"},vw)},jD=function(t){var n=t.cx,r=t.value,i=lw(t),o=i.innerRef,a=i.isDisabled,l=i.isHidden,s=i.inputClassName,u=Rn(i,kD);return W("div",Y({},we(t,"input",{"input-container":!0}),{"data-value":r||""}),W("input",Y({className:n({input:!0},s),ref:o,style:PD(l),disabled:a},u)))},MD=jD,ID=function(t,n){var r=t.theme,i=r.spacing,o=r.borderRadius,a=r.colors;return G({label:"multiValue",display:"flex",minWidth:0},n?{}:{backgroundColor:a.neutral10,borderRadius:o/2,margin:i.baseUnit/2})},$D=function(t,n){var r=t.theme,i=r.borderRadius,o=r.colors,a=t.cropWithEllipsis;return G({overflow:"hidden",textOverflow:a||a===void 0?"ellipsis":void 0,whiteSpace:"nowrap"},n?{}:{borderRadius:i/2,color:o.neutral80,fontSize:"85%",padding:3,paddingLeft:6})},DD=function(t,n){var r=t.theme,i=r.spacing,o=r.borderRadius,a=r.colors,l=t.isFocused;return G({alignItems:"center",display:"flex"},n?{}:{borderRadius:o/2,backgroundColor:l?a.dangerLight:void 0,paddingLeft:i.baseUnit,paddingRight:i.baseUnit,":hover":{backgroundColor:a.dangerLight,color:a.danger}})},yw=function(t){var n=t.children,r=t.innerProps;return W("div",r,n)},RD=yw,AD=yw;function LD(e){var t=e.children,n=e.innerProps;return W("div",Y({role:"button"},n),t||W(uh,{size:14}))}var FD=function(t){var n=t.children,r=t.components,i=t.data,o=t.innerProps,a=t.isDisabled,l=t.removeProps,s=t.selectProps,u=r.Container,c=r.Label,d=r.Remove;return W(u,{data:i,innerProps:G(G({},we(t,"multiValue",{"multi-value":!0,"multi-value--is-disabled":a})),o),selectProps:s},W(c,{data:i,innerProps:G({},we(t,"multiValueLabel",{"multi-value__label":!0})),selectProps:s},n),W(d,{data:i,innerProps:G(G({},we(t,"multiValueRemove",{"multi-value__remove":!0})),{},{"aria-label":"Remove ".concat(n||"option")},l),selectProps:s}))},zD=FD,ND=function(t,n){var r=t.isDisabled,i=t.isFocused,o=t.isSelected,a=t.theme,l=a.spacing,s=a.colors;return G({label:"option",cursor:"default",display:"block",fontSize:"inherit",width:"100%",userSelect:"none",WebkitTapHighlightColor:"rgba(0, 0, 0, 0)"},n?{}:{backgroundColor:o?s.primary:i?s.primary25:"transparent",color:r?s.neutral20:o?s.neutral0:"inherit",padding:"".concat(l.baseUnit*2,"px ").concat(l.baseUnit*3,"px"),":active":{backgroundColor:r?void 0:o?s.primary:s.primary50}})},BD=function(t){var n=t.children,r=t.isDisabled,i=t.isFocused,o=t.isSelected,a=t.innerRef,l=t.innerProps;return W("div",Y({},we(t,"option",{option:!0,"option--is-disabled":r,"option--is-focused":i,"option--is-selected":o}),{ref:a,"aria-disabled":r},l),n)},VD=BD,HD=function(t,n){var r=t.theme,i=r.spacing,o=r.colors;return G({label:"placeholder",gridArea:"1 / 1 / 2 / 3"},n?{}:{color:o.neutral50,marginLeft:i.baseUnit/2,marginRight:i.baseUnit/2})},UD=function(t){var n=t.children,r=t.innerProps;return W("div",Y({},we(t,"placeholder",{placeholder:!0}),r),n)},WD=UD,GD=function(t,n){var r=t.isDisabled,i=t.theme,o=i.spacing,a=i.colors;return G({label:"singleValue",gridArea:"1 / 1 / 2 / 3",maxWidth:"100%",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},n?{}:{color:r?a.neutral40:a.neutral80,marginLeft:o.baseUnit/2,marginRight:o.baseUnit/2})},YD=function(t){var n=t.children,r=t.isDisabled,i=t.innerProps;return W("div",Y({},we(t,"singleValue",{"single-value":!0,"single-value--is-disabled":r}),i),n)},qD=YD,XD={ClearIndicator:dD,Control:xD,DropdownIndicator:uD,DownChevron:mw,CrossIcon:uh,Group:ED,GroupHeading:CD,IndicatorsContainer:iD,IndicatorSeparator:pD,Input:MD,LoadingIndicator:gD,Menu:U$,MenuList:G$,MenuPortal:Z$,LoadingMessage:K$,NoOptionsMessage:X$,MultiValue:zD,MultiValueContainer:RD,MultiValueLabel:AD,MultiValueRemove:LD,Option:VD,Placeholder:WD,SelectContainer:eD,SingleValue:qD,ValueContainer:nD},KD=function(t){return G(G({},XD),t.components)},p0=Number.isNaN||function(t){return typeof t=="number"&&t!==t};function QD(e,t){return!!(e===t||p0(e)&&p0(t))}function ZD(e,t){if(e.length!==t.length)return!1;for(var n=0;n<e.length;n++)if(!QD(e[n],t[n]))return!1;return!0}function JD(e,t){t===void 0&&(t=ZD);var n=null;function r(){for(var i=[],o=0;o<arguments.length;o++)i[o]=arguments[o];if(n&&n.lastThis===this&&t(i,n.lastArgs))return n.lastResult;var a=e.apply(this,i);return n={lastResult:a,lastArgs:i,lastThis:this},a}return r.clear=function(){n=null},r}var e6={name:"7pg0cj-a11yText",styles:"label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap"},t6=function(t){return W("span",Y({css:e6},t))},h0=t6,n6={guidance:function(t){var n=t.isSearchable,r=t.isMulti,i=t.tabSelectsValue,o=t.context,a=t.isInitialFocus;switch(o){case"menu":return"Use Up and Down to choose options, press Enter to select the currently focused option, press Escape to exit the menu".concat(i?", press Tab to select the option and exit the menu":"",".");case"input":return a?"".concat(t["aria-label"]||"Select"," is focused ").concat(n?",type to refine list":"",", press Down to open the menu, ").concat(r?" press left to focus selected values":""):"";case"value":return"Use left and right to toggle between focused values, press Backspace to remove the currently focused value";default:return""}},onChange:function(t){var n=t.action,r=t.label,i=r===void 0?"":r,o=t.labels,a=t.isDisabled;switch(n){case"deselect-option":case"pop-value":case"remove-value":return"option ".concat(i,", deselected.");case"clear":return"All selected options have been cleared.";case"initial-input-focus":return"option".concat(o.length>1?"s":""," ").concat(o.join(","),", selected.");case"select-option":return a?"option ".concat(i," is disabled. Select another option."):"option ".concat(i,", selected.");default:return""}},onFocus:function(t){var n=t.context,r=t.focused,i=t.options,o=t.label,a=o===void 0?"":o,l=t.selectValue,s=t.isDisabled,u=t.isSelected,c=t.isAppleDevice,d=function(x,w){return x&&x.length?"".concat(x.indexOf(w)+1," of ").concat(x.length):""};if(n==="value"&&l)return"value ".concat(a," focused, ").concat(d(l,r),".");if(n==="menu"&&c){var g=s?" disabled":"",m="".concat(u?" selected":"").concat(g);return"".concat(a).concat(m,", ").concat(d(i,r),".")}return""},onFilter:function(t){var n=t.inputValue,r=t.resultsMessage;return"".concat(r).concat(n?" for search term "+n:"",".")}},r6=function(t){var n=t.ariaSelection,r=t.focusedOption,i=t.focusedValue,o=t.focusableOptions,a=t.isFocused,l=t.selectValue,s=t.selectProps,u=t.id,c=t.isAppleDevice,d=s.ariaLiveMessages,g=s.getOptionLabel,m=s.inputValue,v=s.isMulti,x=s.isOptionDisabled,w=s.isSearchable,f=s.menuIsOpen,p=s.options,y=s.screenReaderStatus,b=s.tabSelectsValue,E=s.isLoading,k=s["aria-label"],_=s["aria-live"],S=T.useMemo(function(){return G(G({},n6),d||{})},[d]),M=T.useMemo(function(){var R="";if(n&&S.onChange){var F=n.option,L=n.options,O=n.removedValue,D=n.removedValues,N=n.value,V=function(Oe){return Array.isArray(Oe)?null:Oe},H=O||F||V(N),J=H?g(H):"",ie=L||D||void 0,ee=ie?ie.map(g):[],Q=G({isDisabled:H&&x(H,l),label:J,labels:ee},n);R=S.onChange(Q)}return R},[n,S,x,l,g]),j=T.useMemo(function(){var R="",F=r||i,L=!!(r&&l&&l.includes(r));if(F&&S.onFocus){var O={focused:F,label:g(F),isDisabled:x(F,l),isSelected:L,options:o,context:F===r?"menu":"value",selectValue:l,isAppleDevice:c};R=S.onFocus(O)}return R},[r,i,g,x,S,o,l,c]),I=T.useMemo(function(){var R="";if(f&&p.length&&!E&&S.onFilter){var F=y({count:o.length});R=S.onFilter({inputValue:m,resultsMessage:F})}return R},[o,m,f,S,p,y,E]),P=(n==null?void 0:n.action)==="initial-input-focus",$=T.useMemo(function(){var R="";if(S.guidance){var F=i?"value":f?"menu":"input";R=S.guidance({"aria-label":k,context:F,isDisabled:r&&x(r,l),isMulti:v,isSearchable:w,tabSelectsValue:b,isInitialFocus:P})}return R},[k,r,i,v,x,w,f,S,l,b,P]),A=W(T.Fragment,null,W("span",{id:"aria-selection"},M),W("span",{id:"aria-focused"},j),W("span",{id:"aria-results"},I),W("span",{id:"aria-guidance"},$));return W(T.Fragment,null,W(h0,{id:u},P&&A),W(h0,{"aria-live":_,"aria-atomic":"false","aria-relevant":"additions text",role:"log"},a&&!P&&A))},i6=r6,_f=[{base:"A",letters:"AⒶＡÀÁÂẦẤẪẨÃĀĂẰẮẴẲȦǠÄǞẢÅǺǍȀȂẠẬẶḀĄȺⱯ"},{base:"AA",letters:"Ꜳ"},{base:"AE",letters:"ÆǼǢ"},{base:"AO",letters:"Ꜵ"},{base:"AU",letters:"Ꜷ"},{base:"AV",letters:"ꜸꜺ"},{base:"AY",letters:"Ꜽ"},{base:"B",letters:"BⒷＢḂḄḆɃƂƁ"},{base:"C",letters:"CⒸＣĆĈĊČÇḈƇȻꜾ"},{base:"D",letters:"DⒹＤḊĎḌḐḒḎĐƋƊƉꝹ"},{base:"DZ",letters:"ǱǄ"},{base:"Dz",letters:"ǲǅ"},{base:"E",letters:"EⒺＥÈÉÊỀẾỄỂẼĒḔḖĔĖËẺĚȄȆẸỆȨḜĘḘḚƐƎ"},{base:"F",letters:"FⒻＦḞƑꝻ"},{base:"G",letters:"GⒼＧǴĜḠĞĠǦĢǤƓꞠꝽꝾ"},{base:"H",letters:"HⒽＨĤḢḦȞḤḨḪĦⱧⱵꞍ"},{base:"I",letters:"IⒾＩÌÍÎĨĪĬİÏḮỈǏȈȊỊĮḬƗ"},{base:"J",letters:"JⒿＪĴɈ"},{base:"K",letters:"KⓀＫḰǨḲĶḴƘⱩꝀꝂꝄꞢ"},{base:"L",letters:"LⓁＬĿĹĽḶḸĻḼḺŁȽⱢⱠꝈꝆꞀ"},{base:"LJ",letters:"Ǉ"},{base:"Lj",letters:"ǈ"},{base:"M",letters:"MⓂＭḾṀṂⱮƜ"},{base:"N",letters:"NⓃＮǸŃÑṄŇṆŅṊṈȠƝꞐꞤ"},{base:"NJ",letters:"Ǌ"},{base:"Nj",letters:"ǋ"},{base:"O",letters:"OⓄＯÒÓÔỒỐỖỔÕṌȬṎŌṐṒŎȮȰÖȪỎŐǑȌȎƠỜỚỠỞỢỌỘǪǬØǾƆƟꝊꝌ"},{base:"OI",letters:"Ƣ"},{base:"OO",letters:"Ꝏ"},{base:"OU",letters:"Ȣ"},{base:"P",letters:"PⓅＰṔṖƤⱣꝐꝒꝔ"},{base:"Q",letters:"QⓆＱꝖꝘɊ"},{base:"R",letters:"RⓇＲŔṘŘȐȒṚṜŖṞɌⱤꝚꞦꞂ"},{base:"S",letters:"SⓈＳẞŚṤŜṠŠṦṢṨȘŞⱾꞨꞄ"},{base:"T",letters:"TⓉＴṪŤṬȚŢṰṮŦƬƮȾꞆ"},{base:"TZ",letters:"Ꜩ"},{base:"U",letters:"UⓊＵÙÚÛŨṸŪṺŬÜǛǗǕǙỦŮŰǓȔȖƯỪỨỮỬỰỤṲŲṶṴɄ"},{base:"V",letters:"VⓋＶṼṾƲꝞɅ"},{base:"VY",letters:"Ꝡ"},{base:"W",letters:"WⓌＷẀẂŴẆẄẈⱲ"},{base:"X",letters:"XⓍＸẊẌ"},{base:"Y",letters:"YⓎＹỲÝŶỸȲẎŸỶỴƳɎỾ"},{base:"Z",letters:"ZⓏＺŹẐŻŽẒẔƵȤⱿⱫꝢ"},{base:"a",letters:"aⓐａẚàáâầấẫẩãāăằắẵẳȧǡäǟảåǻǎȁȃạậặḁąⱥɐ"},{base:"aa",letters:"ꜳ"},{base:"ae",letters:"æǽǣ"},{base:"ao",letters:"ꜵ"},{base:"au",letters:"ꜷ"},{base:"av",letters:"ꜹꜻ"},{base:"ay",letters:"ꜽ"},{base:"b",letters:"bⓑｂḃḅḇƀƃɓ"},{base:"c",letters:"cⓒｃćĉċčçḉƈȼꜿↄ"},{base:"d",letters:"dⓓｄḋďḍḑḓḏđƌɖɗꝺ"},{base:"dz",letters:"ǳǆ"},{base:"e",letters:"eⓔｅèéêềếễểẽēḕḗĕėëẻěȅȇẹệȩḝęḙḛɇɛǝ"},{base:"f",letters:"fⓕｆḟƒꝼ"},{base:"g",letters:"gⓖｇǵĝḡğġǧģǥɠꞡᵹꝿ"},{base:"h",letters:"hⓗｈĥḣḧȟḥḩḫẖħⱨⱶɥ"},{base:"hv",letters:"ƕ"},{base:"i",letters:"iⓘｉìíîĩīĭïḯỉǐȉȋịįḭɨı"},{base:"j",letters:"jⓙｊĵǰɉ"},{base:"k",letters:"kⓚｋḱǩḳķḵƙⱪꝁꝃꝅꞣ"},{base:"l",letters:"lⓛｌŀĺľḷḹļḽḻſłƚɫⱡꝉꞁꝇ"},{base:"lj",letters:"ǉ"},{base:"m",letters:"mⓜｍḿṁṃɱɯ"},{base:"n",letters:"nⓝｎǹńñṅňṇņṋṉƞɲŉꞑꞥ"},{base:"nj",letters:"ǌ"},{base:"o",letters:"oⓞｏòóôồốỗổõṍȭṏōṑṓŏȯȱöȫỏőǒȍȏơờớỡởợọộǫǭøǿɔꝋꝍɵ"},{base:"oi",letters:"ƣ"},{base:"ou",letters:"ȣ"},{base:"oo",letters:"ꝏ"},{base:"p",letters:"pⓟｐṕṗƥᵽꝑꝓꝕ"},{base:"q",letters:"qⓠｑɋꝗꝙ"},{base:"r",letters:"rⓡｒŕṙřȑȓṛṝŗṟɍɽꝛꞧꞃ"},{base:"s",letters:"sⓢｓßśṥŝṡšṧṣṩșşȿꞩꞅẛ"},{base:"t",letters:"tⓣｔṫẗťṭțţṱṯŧƭʈⱦꞇ"},{base:"tz",letters:"ꜩ"},{base:"u",letters:"uⓤｕùúûũṹūṻŭüǜǘǖǚủůűǔȕȗưừứữửựụṳųṷṵʉ"},{base:"v",letters:"vⓥｖṽṿʋꝟʌ"},{base:"vy",letters:"ꝡ"},{base:"w",letters:"wⓦｗẁẃŵẇẅẘẉⱳ"},{base:"x",letters:"xⓧｘẋẍ"},{base:"y",letters:"yⓨｙỳýŷỹȳẏÿỷẙỵƴɏỿ"},{base:"z",letters:"zⓩｚźẑżžẓẕƶȥɀⱬꝣ"}],o6=new RegExp("["+_f.map(function(e){return e.letters}).join("")+"]","g"),xw={};for(var Pc=0;Pc<_f.length;Pc++)for(var jc=_f[Pc],Mc=0;Mc<jc.letters.length;Mc++)xw[jc.letters[Mc]]=jc.base;var bw=function(t){return t.replace(o6,function(n){return xw[n]})},a6=JD(bw),m0=function(t){return t.replace(/^\s+|\s+$/g,"")},s6=function(t){return"".concat(t.label," ").concat(t.value)},l6=function(t){return function(n,r){if(n.data.__isNew__)return!0;var i=G({ignoreCase:!0,ignoreAccents:!0,stringify:s6,trim:!0,matchFrom:"any"},t),o=i.ignoreCase,a=i.ignoreAccents,l=i.stringify,s=i.trim,u=i.matchFrom,c=s?m0(r):r,d=s?m0(l(n)):l(n);return o&&(c=c.toLowerCase(),d=d.toLowerCase()),a&&(c=a6(c),d=bw(d)),u==="start"?d.substr(0,c.length)===c:d.indexOf(c)>-1}},u6=["innerRef"];function c6(e){var t=e.innerRef,n=Rn(e,u6),r=A$(n,"onExited","in","enter","exit","appear");return W("input",Y({ref:t},r,{css:Hp({label:"dummyInput",background:0,border:0,caretColor:"transparent",fontSize:"inherit",gridArea:"1 / 1 / 2 / 3",outline:0,padding:0,width:1,color:"transparent",left:-100,opacity:0,position:"relative",transform:"scale(.01)"},"","")}))}var d6=function(t){t.cancelable&&t.preventDefault(),t.stopPropagation()};function f6(e){var t=e.isEnabled,n=e.onBottomArrive,r=e.onBottomLeave,i=e.onTopArrive,o=e.onTopLeave,a=T.useRef(!1),l=T.useRef(!1),s=T.useRef(0),u=T.useRef(null),c=T.useCallback(function(w,f){if(u.current!==null){var p=u.current,y=p.scrollTop,b=p.scrollHeight,E=p.clientHeight,k=u.current,_=f>0,S=b-E-y,M=!1;S>f&&a.current&&(r&&r(w),a.current=!1),_&&l.current&&(o&&o(w),l.current=!1),_&&f>S?(n&&!a.current&&n(w),k.scrollTop=b,M=!0,a.current=!0):!_&&-f>y&&(i&&!l.current&&i(w),k.scrollTop=0,M=!0,l.current=!0),M&&d6(w)}},[n,r,i,o]),d=T.useCallback(function(w){c(w,w.deltaY)},[c]),g=T.useCallback(function(w){s.current=w.changedTouches[0].clientY},[]),m=T.useCallback(function(w){var f=s.current-w.changedTouches[0].clientY;c(w,f)},[c]),v=T.useCallback(function(w){if(w){var f=$$?{passive:!1}:!1;w.addEventListener("wheel",d,f),w.addEventListener("touchstart",g,f),w.addEventListener("touchmove",m,f)}},[m,g,d]),x=T.useCallback(function(w){w&&(w.removeEventListener("wheel",d,!1),w.removeEventListener("touchstart",g,!1),w.removeEventListener("touchmove",m,!1))},[m,g,d]);return T.useEffect(function(){if(t){var w=u.current;return v(w),function(){x(w)}}},[t,v,x]),function(w){u.current=w}}var g0=["boxSizing","height","overflow","paddingRight","position"],v0={boxSizing:"border-box",overflow:"hidden",position:"relative",height:"100%"};function y0(e){e.cancelable&&e.preventDefault()}function x0(e){e.stopPropagation()}function b0(){var e=this.scrollTop,t=this.scrollHeight,n=e+this.offsetHeight;e===0?this.scrollTop=1:n===t&&(this.scrollTop=e-1)}function w0(){return"ontouchstart"in window||navigator.maxTouchPoints}var S0=!!(typeof window<"u"&&window.document&&window.document.createElement),Yi=0,Fr={capture:!1,passive:!1};function p6(e){var t=e.isEnabled,n=e.accountForScrollbars,r=n===void 0?!0:n,i=T.useRef({}),o=T.useRef(null),a=T.useCallback(function(s){if(S0){var u=document.body,c=u&&u.style;if(r&&g0.forEach(function(v){var x=c&&c[v];i.current[v]=x}),r&&Yi<1){var d=parseInt(i.current.paddingRight,10)||0,g=document.body?document.body.clientWidth:0,m=window.innerWidth-g+d||0;Object.keys(v0).forEach(function(v){var x=v0[v];c&&(c[v]=x)}),c&&(c.paddingRight="".concat(m,"px"))}u&&w0()&&(u.addEventListener("touchmove",y0,Fr),s&&(s.addEventListener("touchstart",b0,Fr),s.addEventListener("touchmove",x0,Fr))),Yi+=1}},[r]),l=T.useCallback(function(s){if(S0){var u=document.body,c=u&&u.style;Yi=Math.max(Yi-1,0),r&&Yi<1&&g0.forEach(function(d){var g=i.current[d];c&&(c[d]=g)}),u&&w0()&&(u.removeEventListener("touchmove",y0,Fr),s&&(s.removeEventListener("touchstart",b0,Fr),s.removeEventListener("touchmove",x0,Fr)))}},[r]);return T.useEffect(function(){if(t){var s=o.current;return a(s),function(){l(s)}}},[t,a,l]),function(s){o.current=s}}var h6=function(t){var n=t.target;return n.ownerDocument.activeElement&&n.ownerDocument.activeElement.blur()},m6={name:"1kfdb0e",styles:"position:fixed;left:0;bottom:0;right:0;top:0"};function g6(e){var t=e.children,n=e.lockEnabled,r=e.captureEnabled,i=r===void 0?!0:r,o=e.onBottomArrive,a=e.onBottomLeave,l=e.onTopArrive,s=e.onTopLeave,u=f6({isEnabled:i,onBottomArrive:o,onBottomLeave:a,onTopArrive:l,onTopLeave:s}),c=p6({isEnabled:n}),d=function(m){u(m),c(m)};return W(T.Fragment,null,n&&W("div",{onClick:h6,css:m6}),t(d))}var v6={name:"1a0ro4n-requiredInput",styles:"label:requiredInput;opacity:0;pointer-events:none;position:absolute;bottom:0;left:0;right:0;width:100%"},y6=function(t){var n=t.name,r=t.onFocus;return W("input",{required:!0,name:n,tabIndex:-1,"aria-hidden":"true",onFocus:r,css:v6,value:"",onChange:function(){}})},x6=y6;function ch(e){var t;return typeof window<"u"&&window.navigator!=null?e.test(((t=window.navigator.userAgentData)===null||t===void 0?void 0:t.platform)||window.navigator.platform):!1}function b6(){return ch(/^iPhone/i)}function ww(){return ch(/^Mac/i)}function w6(){return ch(/^iPad/i)||ww()&&navigator.maxTouchPoints>1}function S6(){return b6()||w6()}function _6(){return ww()||S6()}var C6=function(t){return t.label},E6=function(t){return t.label},k6=function(t){return t.value},T6=function(t){return!!t.isDisabled},O6={clearIndicator:cD,container:J$,control:vD,dropdownIndicator:lD,group:wD,groupHeading:_D,indicatorsContainer:rD,indicatorSeparator:fD,input:TD,loadingIndicator:mD,loadingMessage:q$,menu:B$,menuList:W$,menuPortal:Q$,multiValue:ID,multiValueLabel:$D,multiValueRemove:DD,noOptionsMessage:Y$,option:ND,placeholder:HD,singleValue:GD,valueContainer:tD},P6={primary:"#2684FF",primary75:"#4C9AFF",primary50:"#B2D4FF",primary25:"#DEEBFF",danger:"#DE350B",dangerLight:"#FFBDAD",neutral0:"hsl(0, 0%, 100%)",neutral5:"hsl(0, 0%, 95%)",neutral10:"hsl(0, 0%, 90%)",neutral20:"hsl(0, 0%, 80%)",neutral30:"hsl(0, 0%, 70%)",neutral40:"hsl(0, 0%, 60%)",neutral50:"hsl(0, 0%, 50%)",neutral60:"hsl(0, 0%, 40%)",neutral70:"hsl(0, 0%, 30%)",neutral80:"hsl(0, 0%, 20%)",neutral90:"hsl(0, 0%, 10%)"},j6=4,Sw=4,M6=38,I6=Sw*2,$6={baseUnit:Sw,controlHeight:M6,menuGutter:I6},Ic={borderRadius:j6,colors:P6,spacing:$6},D6={"aria-live":"polite",backspaceRemovesValue:!0,blurInputOnSelect:d0(),captureMenuScroll:!d0(),classNames:{},closeMenuOnSelect:!0,closeMenuOnScroll:!1,components:{},controlShouldRenderValue:!0,escapeClearsValue:!1,filterOption:l6(),formatGroupLabel:C6,getOptionLabel:E6,getOptionValue:k6,isDisabled:!1,isLoading:!1,isMulti:!1,isRtl:!1,isSearchable:!0,isOptionDisabled:T6,loadingMessage:function(){return"Loading..."},maxMenuHeight:300,minMenuHeight:140,menuIsOpen:!1,menuPlacement:"bottom",menuPosition:"absolute",menuShouldBlockScroll:!1,menuShouldScrollIntoView:!M$(),noOptionsMessage:function(){return"No options"},openMenuOnFocus:!1,openMenuOnClick:!0,options:[],pageSize:5,placeholder:"Select...",screenReaderStatus:function(t){var n=t.count;return"".concat(n," result").concat(n!==1?"s":""," available")},styles:{},tabIndex:0,tabSelectsValue:!0,unstyled:!1};function _0(e,t,n,r){var i=Ew(e,t,n),o=kw(e,t,n),a=Cw(e,t),l=fl(e,t);return{type:"option",data:t,isDisabled:i,isSelected:o,label:a,value:l,index:r}}function ps(e,t){return e.options.map(function(n,r){if("options"in n){var i=n.options.map(function(a,l){return _0(e,a,t,l)}).filter(function(a){return E0(e,a)});return i.length>0?{type:"group",data:n,options:i,index:r}:void 0}var o=_0(e,n,t,r);return E0(e,o)?o:void 0}).filter(D$)}function _w(e){return e.reduce(function(t,n){return n.type==="group"?t.push.apply(t,oh(n.options.map(function(r){return r.data}))):t.push(n.data),t},[])}function C0(e,t){return e.reduce(function(n,r){return r.type==="group"?n.push.apply(n,oh(r.options.map(function(i){return{data:i.data,id:"".concat(t,"-").concat(r.index,"-").concat(i.index)}}))):n.push({data:r.data,id:"".concat(t,"-").concat(r.index)}),n},[])}function R6(e,t){return _w(ps(e,t))}function E0(e,t){var n=e.inputValue,r=n===void 0?"":n,i=t.data,o=t.isSelected,a=t.label,l=t.value;return(!Ow(e)||!o)&&Tw(e,{label:a,value:l,data:i},r)}function A6(e,t){var n=e.focusedValue,r=e.selectValue,i=r.indexOf(n);if(i>-1){var o=t.indexOf(n);if(o>-1)return n;if(i<t.length)return t[i]}return null}function L6(e,t){var n=e.focusedOption;return n&&t.indexOf(n)>-1?n:t[0]}var $c=function(t,n){var r,i=(r=t.find(function(o){return o.data===n}))===null||r===void 0?void 0:r.id;return i||null},Cw=function(t,n){return t.getOptionLabel(n)},fl=function(t,n){return t.getOptionValue(n)};function Ew(e,t,n){return typeof e.isOptionDisabled=="function"?e.isOptionDisabled(t,n):!1}function kw(e,t,n){if(n.indexOf(t)>-1)return!0;if(typeof e.isOptionSelected=="function")return e.isOptionSelected(t,n);var r=fl(e,t);return n.some(function(i){return fl(e,i)===r})}function Tw(e,t,n){return e.filterOption?e.filterOption(t,n):!0}var Ow=function(t){var n=t.hideSelectedOptions,r=t.isMulti;return n===void 0?r:n},F6=1,Pw=function(e){r$(n,e);var t=s$(n);function n(r){var i;if(t$(this,n),i=t.call(this,r),i.state={ariaSelection:null,focusedOption:null,focusedOptionId:null,focusableOptionsWithIds:[],focusedValue:null,inputIsHidden:!1,isFocused:!1,selectValue:[],clearFocusValueOnUpdate:!1,prevWasFocused:!1,inputIsHiddenAfterUpdate:void 0,prevProps:void 0,instancePrefix:"",isAppleDevice:!1},i.blockOptionHover=!1,i.isComposing=!1,i.commonProps=void 0,i.initialTouchX=0,i.initialTouchY=0,i.openAfterFocus=!1,i.scrollToFocusedOptionOnUpdate=!1,i.userIsDragging=void 0,i.controlRef=null,i.getControlRef=function(s){i.controlRef=s},i.focusedOptionRef=null,i.getFocusedOptionRef=function(s){i.focusedOptionRef=s},i.menuListRef=null,i.getMenuListRef=function(s){i.menuListRef=s},i.inputRef=null,i.getInputRef=function(s){i.inputRef=s},i.focus=i.focusInput,i.blur=i.blurInput,i.onChange=function(s,u){var c=i.props,d=c.onChange,g=c.name;u.name=g,i.ariaOnChange(s,u),d(s,u)},i.setValue=function(s,u,c){var d=i.props,g=d.closeMenuOnSelect,m=d.isMulti,v=d.inputValue;i.onInputChange("",{action:"set-value",prevInputValue:v}),g&&(i.setState({inputIsHiddenAfterUpdate:!m}),i.onMenuClose()),i.setState({clearFocusValueOnUpdate:!0}),i.onChange(s,{action:u,option:c})},i.selectOption=function(s){var u=i.props,c=u.blurInputOnSelect,d=u.isMulti,g=u.name,m=i.state.selectValue,v=d&&i.isOptionSelected(s,m),x=i.isOptionDisabled(s,m);if(v){var w=i.getOptionValue(s);i.setValue(m.filter(function(f){return i.getOptionValue(f)!==w}),"deselect-option",s)}else if(!x)d?i.setValue([].concat(oh(m),[s]),"select-option",s):i.setValue(s,"select-option");else{i.ariaOnChange(s,{action:"select-option",option:s,name:g});return}c&&i.blurInput()},i.removeValue=function(s){var u=i.props.isMulti,c=i.state.selectValue,d=i.getOptionValue(s),g=c.filter(function(v){return i.getOptionValue(v)!==d}),m=za(u,g,g[0]||null);i.onChange(m,{action:"remove-value",removedValue:s}),i.focusInput()},i.clearValue=function(){var s=i.state.selectValue;i.onChange(za(i.props.isMulti,[],null),{action:"clear",removedValues:s})},i.popValue=function(){var s=i.props.isMulti,u=i.state.selectValue,c=u[u.length-1],d=u.slice(0,u.length-1),g=za(s,d,d[0]||null);c&&i.onChange(g,{action:"pop-value",removedValue:c})},i.getFocusedOptionId=function(s){return $c(i.state.focusableOptionsWithIds,s)},i.getFocusableOptionsWithIds=function(){return C0(ps(i.props,i.state.selectValue),i.getElementId("option"))},i.getValue=function(){return i.state.selectValue},i.cx=function(){for(var s=arguments.length,u=new Array(s),c=0;c<s;c++)u[c]=arguments[c];return k$.apply(void 0,[i.props.classNamePrefix].concat(u))},i.getOptionLabel=function(s){return Cw(i.props,s)},i.getOptionValue=function(s){return fl(i.props,s)},i.getStyles=function(s,u){var c=i.props.unstyled,d=O6[s](u,c);d.boxSizing="border-box";var g=i.props.styles[s];return g?g(d,u):d},i.getClassNames=function(s,u){var c,d;return(c=(d=i.props.classNames)[s])===null||c===void 0?void 0:c.call(d,u)},i.getElementId=function(s){return"".concat(i.state.instancePrefix,"-").concat(s)},i.getComponents=function(){return KD(i.props)},i.buildCategorizedOptions=function(){return ps(i.props,i.state.selectValue)},i.getCategorizedOptions=function(){return i.props.menuIsOpen?i.buildCategorizedOptions():[]},i.buildFocusableOptions=function(){return _w(i.buildCategorizedOptions())},i.getFocusableOptions=function(){return i.props.menuIsOpen?i.buildFocusableOptions():[]},i.ariaOnChange=function(s,u){i.setState({ariaSelection:G({value:s},u)})},i.onMenuMouseDown=function(s){s.button===0&&(s.stopPropagation(),s.preventDefault(),i.focusInput())},i.onMenuMouseMove=function(s){i.blockOptionHover=!1},i.onControlMouseDown=function(s){if(!s.defaultPrevented){var u=i.props.openMenuOnClick;i.state.isFocused?i.props.menuIsOpen?s.target.tagName!=="INPUT"&&s.target.tagName!=="TEXTAREA"&&i.onMenuClose():u&&i.openMenu("first"):(u&&(i.openAfterFocus=!0),i.focusInput()),s.target.tagName!=="INPUT"&&s.target.tagName!=="TEXTAREA"&&s.preventDefault()}},i.onDropdownIndicatorMouseDown=function(s){if(!(s&&s.type==="mousedown"&&s.button!==0)&&!i.props.isDisabled){var u=i.props,c=u.isMulti,d=u.menuIsOpen;i.focusInput(),d?(i.setState({inputIsHiddenAfterUpdate:!c}),i.onMenuClose()):i.openMenu("first"),s.preventDefault()}},i.onClearIndicatorMouseDown=function(s){s&&s.type==="mousedown"&&s.button!==0||(i.clearValue(),s.preventDefault(),i.openAfterFocus=!1,s.type==="touchend"?i.focusInput():setTimeout(function(){return i.focusInput()}))},i.onScroll=function(s){typeof i.props.closeMenuOnScroll=="boolean"?s.target instanceof HTMLElement&&_u(s.target)&&i.props.onMenuClose():typeof i.props.closeMenuOnScroll=="function"&&i.props.closeMenuOnScroll(s)&&i.props.onMenuClose()},i.onCompositionStart=function(){i.isComposing=!0},i.onCompositionEnd=function(){i.isComposing=!1},i.onTouchStart=function(s){var u=s.touches,c=u&&u.item(0);c&&(i.initialTouchX=c.clientX,i.initialTouchY=c.clientY,i.userIsDragging=!1)},i.onTouchMove=function(s){var u=s.touches,c=u&&u.item(0);if(c){var d=Math.abs(c.clientX-i.initialTouchX),g=Math.abs(c.clientY-i.initialTouchY),m=5;i.userIsDragging=d>m||g>m}},i.onTouchEnd=function(s){i.userIsDragging||(i.controlRef&&!i.controlRef.contains(s.target)&&i.menuListRef&&!i.menuListRef.contains(s.target)&&i.blurInput(),i.initialTouchX=0,i.initialTouchY=0)},i.onControlTouchEnd=function(s){i.userIsDragging||i.onControlMouseDown(s)},i.onClearIndicatorTouchEnd=function(s){i.userIsDragging||i.onClearIndicatorMouseDown(s)},i.onDropdownIndicatorTouchEnd=function(s){i.userIsDragging||i.onDropdownIndicatorMouseDown(s)},i.handleInputChange=function(s){var u=i.props.inputValue,c=s.currentTarget.value;i.setState({inputIsHiddenAfterUpdate:!1}),i.onInputChange(c,{action:"input-change",prevInputValue:u}),i.props.menuIsOpen||i.onMenuOpen()},i.onInputFocus=function(s){i.props.onFocus&&i.props.onFocus(s),i.setState({inputIsHiddenAfterUpdate:!1,isFocused:!0}),(i.openAfterFocus||i.props.openMenuOnFocus)&&i.openMenu("first"),i.openAfterFocus=!1},i.onInputBlur=function(s){var u=i.props.inputValue;if(i.menuListRef&&i.menuListRef.contains(document.activeElement)){i.inputRef.focus();return}i.props.onBlur&&i.props.onBlur(s),i.onInputChange("",{action:"input-blur",prevInputValue:u}),i.onMenuClose(),i.setState({focusedValue:null,isFocused:!1})},i.onOptionHover=function(s){if(!(i.blockOptionHover||i.state.focusedOption===s)){var u=i.getFocusableOptions(),c=u.indexOf(s);i.setState({focusedOption:s,focusedOptionId:c>-1?i.getFocusedOptionId(s):null})}},i.shouldHideSelectedOptions=function(){return Ow(i.props)},i.onValueInputFocus=function(s){s.preventDefault(),s.stopPropagation(),i.focus()},i.onKeyDown=function(s){var u=i.props,c=u.isMulti,d=u.backspaceRemovesValue,g=u.escapeClearsValue,m=u.inputValue,v=u.isClearable,x=u.isDisabled,w=u.menuIsOpen,f=u.onKeyDown,p=u.tabSelectsValue,y=u.openMenuOnFocus,b=i.state,E=b.focusedOption,k=b.focusedValue,_=b.selectValue;if(!x&&!(typeof f=="function"&&(f(s),s.defaultPrevented))){switch(i.blockOptionHover=!0,s.key){case"ArrowLeft":if(!c||m)return;i.focusValue("previous");break;case"ArrowRight":if(!c||m)return;i.focusValue("next");break;case"Delete":case"Backspace":if(m)return;if(k)i.removeValue(k);else{if(!d)return;c?i.popValue():v&&i.clearValue()}break;case"Tab":if(i.isComposing||s.shiftKey||!w||!p||!E||y&&i.isOptionSelected(E,_))return;i.selectOption(E);break;case"Enter":if(s.keyCode===229)break;if(w){if(!E||i.isComposing)return;i.selectOption(E);break}return;case"Escape":w?(i.setState({inputIsHiddenAfterUpdate:!1}),i.onInputChange("",{action:"menu-close",prevInputValue:m}),i.onMenuClose()):v&&g&&i.clearValue();break;case" ":if(m)return;if(!w){i.openMenu("first");break}if(!E)return;i.selectOption(E);break;case"ArrowUp":w?i.focusOption("up"):i.openMenu("last");break;case"ArrowDown":w?i.focusOption("down"):i.openMenu("first");break;case"PageUp":if(!w)return;i.focusOption("pageup");break;case"PageDown":if(!w)return;i.focusOption("pagedown");break;case"Home":if(!w)return;i.focusOption("first");break;case"End":if(!w)return;i.focusOption("last");break;default:return}s.preventDefault()}},i.state.instancePrefix="react-select-"+(i.props.instanceId||++F6),i.state.selectValue=u0(r.value),r.menuIsOpen&&i.state.selectValue.length){var o=i.getFocusableOptionsWithIds(),a=i.buildFocusableOptions(),l=a.indexOf(i.state.selectValue[0]);i.state.focusableOptionsWithIds=o,i.state.focusedOption=a[l],i.state.focusedOptionId=$c(o,a[l])}return i}return n$(n,[{key:"componentDidMount",value:function(){this.startListeningComposition(),this.startListeningToTouch(),this.props.closeMenuOnScroll&&document&&document.addEventListener&&document.addEventListener("scroll",this.onScroll,!0),this.props.autoFocus&&this.focusInput(),this.props.menuIsOpen&&this.state.focusedOption&&this.menuListRef&&this.focusedOptionRef&&c0(this.menuListRef,this.focusedOptionRef),_6()&&this.setState({isAppleDevice:!0})}},{key:"componentDidUpdate",value:function(i){var o=this.props,a=o.isDisabled,l=o.menuIsOpen,s=this.state.isFocused;(s&&!a&&i.isDisabled||s&&l&&!i.menuIsOpen)&&this.focusInput(),s&&a&&!i.isDisabled?this.setState({isFocused:!1},this.onMenuClose):!s&&!a&&i.isDisabled&&this.inputRef===document.activeElement&&this.setState({isFocused:!0}),this.menuListRef&&this.focusedOptionRef&&this.scrollToFocusedOptionOnUpdate&&(c0(this.menuListRef,this.focusedOptionRef),this.scrollToFocusedOptionOnUpdate=!1)}},{key:"componentWillUnmount",value:function(){this.stopListeningComposition(),this.stopListeningToTouch(),document.removeEventListener("scroll",this.onScroll,!0)}},{key:"onMenuOpen",value:function(){this.props.onMenuOpen()}},{key:"onMenuClose",value:function(){this.onInputChange("",{action:"menu-close",prevInputValue:this.props.inputValue}),this.props.onMenuClose()}},{key:"onInputChange",value:function(i,o){this.props.onInputChange(i,o)}},{key:"focusInput",value:function(){this.inputRef&&this.inputRef.focus()}},{key:"blurInput",value:function(){this.inputRef&&this.inputRef.blur()}},{key:"openMenu",value:function(i){var o=this,a=this.state,l=a.selectValue,s=a.isFocused,u=this.buildFocusableOptions(),c=i==="first"?0:u.length-1;if(!this.props.isMulti){var d=u.indexOf(l[0]);d>-1&&(c=d)}this.scrollToFocusedOptionOnUpdate=!(s&&this.menuListRef),this.setState({inputIsHiddenAfterUpdate:!1,focusedValue:null,focusedOption:u[c],focusedOptionId:this.getFocusedOptionId(u[c])},function(){return o.onMenuOpen()})}},{key:"focusValue",value:function(i){var o=this.state,a=o.selectValue,l=o.focusedValue;if(this.props.isMulti){this.setState({focusedOption:null});var s=a.indexOf(l);l||(s=-1);var u=a.length-1,c=-1;if(a.length){switch(i){case"previous":s===0?c=0:s===-1?c=u:c=s-1;break;case"next":s>-1&&s<u&&(c=s+1);break}this.setState({inputIsHidden:c!==-1,focusedValue:a[c]})}}}},{key:"focusOption",value:function(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"first",o=this.props.pageSize,a=this.state.focusedOption,l=this.getFocusableOptions();if(l.length){var s=0,u=l.indexOf(a);a||(u=-1),i==="up"?s=u>0?u-1:l.length-1:i==="down"?s=(u+1)%l.length:i==="pageup"?(s=u-o,s<0&&(s=0)):i==="pagedown"?(s=u+o,s>l.length-1&&(s=l.length-1)):i==="last"&&(s=l.length-1),this.scrollToFocusedOptionOnUpdate=!0,this.setState({focusedOption:l[s],focusedValue:null,focusedOptionId:this.getFocusedOptionId(l[s])})}}},{key:"getTheme",value:function(){return this.props.theme?typeof this.props.theme=="function"?this.props.theme(Ic):G(G({},Ic),this.props.theme):Ic}},{key:"getCommonProps",value:function(){var i=this.clearValue,o=this.cx,a=this.getStyles,l=this.getClassNames,s=this.getValue,u=this.selectOption,c=this.setValue,d=this.props,g=d.isMulti,m=d.isRtl,v=d.options,x=this.hasValue();return{clearValue:i,cx:o,getStyles:a,getClassNames:l,getValue:s,hasValue:x,isMulti:g,isRtl:m,options:v,selectOption:u,selectProps:d,setValue:c,theme:this.getTheme()}}},{key:"hasValue",value:function(){var i=this.state.selectValue;return i.length>0}},{key:"hasOptions",value:function(){return!!this.getFocusableOptions().length}},{key:"isClearable",value:function(){var i=this.props,o=i.isClearable,a=i.isMulti;return o===void 0?a:o}},{key:"isOptionDisabled",value:function(i,o){return Ew(this.props,i,o)}},{key:"isOptionSelected",value:function(i,o){return kw(this.props,i,o)}},{key:"filterOption",value:function(i,o){return Tw(this.props,i,o)}},{key:"formatOptionLabel",value:function(i,o){if(typeof this.props.formatOptionLabel=="function"){var a=this.props.inputValue,l=this.state.selectValue;return this.props.formatOptionLabel(i,{context:o,inputValue:a,selectValue:l})}else return this.getOptionLabel(i)}},{key:"formatGroupLabel",value:function(i){return this.props.formatGroupLabel(i)}},{key:"startListeningComposition",value:function(){document&&document.addEventListener&&(document.addEventListener("compositionstart",this.onCompositionStart,!1),document.addEventListener("compositionend",this.onCompositionEnd,!1))}},{key:"stopListeningComposition",value:function(){document&&document.removeEventListener&&(document.removeEventListener("compositionstart",this.onCompositionStart),document.removeEventListener("compositionend",this.onCompositionEnd))}},{key:"startListeningToTouch",value:function(){document&&document.addEventListener&&(document.addEventListener("touchstart",this.onTouchStart,!1),document.addEventListener("touchmove",this.onTouchMove,!1),document.addEventListener("touchend",this.onTouchEnd,!1))}},{key:"stopListeningToTouch",value:function(){document&&document.removeEventListener&&(document.removeEventListener("touchstart",this.onTouchStart),document.removeEventListener("touchmove",this.onTouchMove),document.removeEventListener("touchend",this.onTouchEnd))}},{key:"renderInput",value:function(){var i=this.props,o=i.isDisabled,a=i.isSearchable,l=i.inputId,s=i.inputValue,u=i.tabIndex,c=i.form,d=i.menuIsOpen,g=i.required,m=this.getComponents(),v=m.Input,x=this.state,w=x.inputIsHidden,f=x.ariaSelection,p=this.commonProps,y=l||this.getElementId("input"),b=G(G(G({"aria-autocomplete":"list","aria-expanded":d,"aria-haspopup":!0,"aria-errormessage":this.props["aria-errormessage"],"aria-invalid":this.props["aria-invalid"],"aria-label":this.props["aria-label"],"aria-labelledby":this.props["aria-labelledby"],"aria-required":g,role:"combobox","aria-activedescendant":this.state.isAppleDevice?void 0:this.state.focusedOptionId||""},d&&{"aria-controls":this.getElementId("listbox")}),!a&&{"aria-readonly":!0}),this.hasValue()?(f==null?void 0:f.action)==="initial-input-focus"&&{"aria-describedby":this.getElementId("live-region")}:{"aria-describedby":this.getElementId("placeholder")});return a?T.createElement(v,Y({},p,{autoCapitalize:"none",autoComplete:"off",autoCorrect:"off",id:y,innerRef:this.getInputRef,isDisabled:o,isHidden:w,onBlur:this.onInputBlur,onChange:this.handleInputChange,onFocus:this.onInputFocus,spellCheck:"false",tabIndex:u,form:c,type:"text",value:s},b)):T.createElement(c6,Y({id:y,innerRef:this.getInputRef,onBlur:this.onInputBlur,onChange:cl,onFocus:this.onInputFocus,disabled:o,tabIndex:u,inputMode:"none",form:c,value:""},b))}},{key:"renderPlaceholderOrValue",value:function(){var i=this,o=this.getComponents(),a=o.MultiValue,l=o.MultiValueContainer,s=o.MultiValueLabel,u=o.MultiValueRemove,c=o.SingleValue,d=o.Placeholder,g=this.commonProps,m=this.props,v=m.controlShouldRenderValue,x=m.isDisabled,w=m.isMulti,f=m.inputValue,p=m.placeholder,y=this.state,b=y.selectValue,E=y.focusedValue,k=y.isFocused;if(!this.hasValue()||!v)return f?null:T.createElement(d,Y({},g,{key:"placeholder",isDisabled:x,isFocused:k,innerProps:{id:this.getElementId("placeholder")}}),p);if(w)return b.map(function(S,M){var j=S===E,I="".concat(i.getOptionLabel(S),"-").concat(i.getOptionValue(S));return T.createElement(a,Y({},g,{components:{Container:l,Label:s,Remove:u},isFocused:j,isDisabled:x,key:I,index:M,removeProps:{onClick:function(){return i.removeValue(S)},onTouchEnd:function(){return i.removeValue(S)},onMouseDown:function($){$.preventDefault()}},data:S}),i.formatOptionLabel(S,"value"))});if(f)return null;var _=b[0];return T.createElement(c,Y({},g,{data:_,isDisabled:x}),this.formatOptionLabel(_,"value"))}},{key:"renderClearIndicator",value:function(){var i=this.getComponents(),o=i.ClearIndicator,a=this.commonProps,l=this.props,s=l.isDisabled,u=l.isLoading,c=this.state.isFocused;if(!this.isClearable()||!o||s||!this.hasValue()||u)return null;var d={onMouseDown:this.onClearIndicatorMouseDown,onTouchEnd:this.onClearIndicatorTouchEnd,"aria-hidden":"true"};return T.createElement(o,Y({},a,{innerProps:d,isFocused:c}))}},{key:"renderLoadingIndicator",value:function(){var i=this.getComponents(),o=i.LoadingIndicator,a=this.commonProps,l=this.props,s=l.isDisabled,u=l.isLoading,c=this.state.isFocused;if(!o||!u)return null;var d={"aria-hidden":"true"};return T.createElement(o,Y({},a,{innerProps:d,isDisabled:s,isFocused:c}))}},{key:"renderIndicatorSeparator",value:function(){var i=this.getComponents(),o=i.DropdownIndicator,a=i.IndicatorSeparator;if(!o||!a)return null;var l=this.commonProps,s=this.props.isDisabled,u=this.state.isFocused;return T.createElement(a,Y({},l,{isDisabled:s,isFocused:u}))}},{key:"renderDropdownIndicator",value:function(){var i=this.getComponents(),o=i.DropdownIndicator;if(!o)return null;var a=this.commonProps,l=this.props.isDisabled,s=this.state.isFocused,u={onMouseDown:this.onDropdownIndicatorMouseDown,onTouchEnd:this.onDropdownIndicatorTouchEnd,"aria-hidden":"true"};return T.createElement(o,Y({},a,{innerProps:u,isDisabled:l,isFocused:s}))}},{key:"renderMenu",value:function(){var i=this,o=this.getComponents(),a=o.Group,l=o.GroupHeading,s=o.Menu,u=o.MenuList,c=o.MenuPortal,d=o.LoadingMessage,g=o.NoOptionsMessage,m=o.Option,v=this.commonProps,x=this.state.focusedOption,w=this.props,f=w.captureMenuScroll,p=w.inputValue,y=w.isLoading,b=w.loadingMessage,E=w.minMenuHeight,k=w.maxMenuHeight,_=w.menuIsOpen,S=w.menuPlacement,M=w.menuPosition,j=w.menuPortalTarget,I=w.menuShouldBlockScroll,P=w.menuShouldScrollIntoView,$=w.noOptionsMessage,A=w.onMenuScrollToTop,R=w.onMenuScrollToBottom;if(!_)return null;var F=function(J,ie){var ee=J.type,Q=J.data,ce=J.isDisabled,Oe=J.isSelected,gt=J.label,He=J.value,un=x===Q,cn=ce?void 0:function(){return i.onOptionHover(Q)},Rt=ce?void 0:function(){return i.selectOption(Q)},sa="".concat(i.getElementId("option"),"-").concat(ie),An={id:sa,onClick:Rt,onMouseMove:cn,onMouseOver:cn,tabIndex:-1,role:"option","aria-selected":i.state.isAppleDevice?void 0:Oe};return T.createElement(m,Y({},v,{innerProps:An,data:Q,isDisabled:ce,isSelected:Oe,key:sa,label:gt,type:ee,value:He,isFocused:un,innerRef:un?i.getFocusedOptionRef:void 0}),i.formatOptionLabel(J.data,"menu"))},L;if(this.hasOptions())L=this.getCategorizedOptions().map(function(H){if(H.type==="group"){var J=H.data,ie=H.options,ee=H.index,Q="".concat(i.getElementId("group"),"-").concat(ee),ce="".concat(Q,"-heading");return T.createElement(a,Y({},v,{key:Q,data:J,options:ie,Heading:l,headingProps:{id:ce,data:H.data},label:i.formatGroupLabel(H.data)}),H.options.map(function(Oe){return F(Oe,"".concat(ee,"-").concat(Oe.index))}))}else if(H.type==="option")return F(H,"".concat(H.index))});else if(y){var O=b({inputValue:p});if(O===null)return null;L=T.createElement(d,v,O)}else{var D=$({inputValue:p});if(D===null)return null;L=T.createElement(g,v,D)}var N={minMenuHeight:E,maxMenuHeight:k,menuPlacement:S,menuPosition:M,menuShouldScrollIntoView:P},V=T.createElement(V$,Y({},v,N),function(H){var J=H.ref,ie=H.placerProps,ee=ie.placement,Q=ie.maxHeight;return T.createElement(s,Y({},v,N,{innerRef:J,innerProps:{onMouseDown:i.onMenuMouseDown,onMouseMove:i.onMenuMouseMove},isLoading:y,placement:ee}),T.createElement(g6,{captureEnabled:f,onTopArrive:A,onBottomArrive:R,lockEnabled:I},function(ce){return T.createElement(u,Y({},v,{innerRef:function(gt){i.getMenuListRef(gt),ce(gt)},innerProps:{role:"listbox","aria-multiselectable":v.isMulti,id:i.getElementId("listbox")},isLoading:y,maxHeight:Q,focusedOption:x}),L)}))});return j||M==="fixed"?T.createElement(c,Y({},v,{appendTo:j,controlElement:this.controlRef,menuPlacement:S,menuPosition:M}),V):V}},{key:"renderFormField",value:function(){var i=this,o=this.props,a=o.delimiter,l=o.isDisabled,s=o.isMulti,u=o.name,c=o.required,d=this.state.selectValue;if(c&&!this.hasValue()&&!l)return T.createElement(x6,{name:u,onFocus:this.onValueInputFocus});if(!(!u||l))if(s)if(a){var g=d.map(function(x){return i.getOptionValue(x)}).join(a);return T.createElement("input",{name:u,type:"hidden",value:g})}else{var m=d.length>0?d.map(function(x,w){return T.createElement("input",{key:"i-".concat(w),name:u,type:"hidden",value:i.getOptionValue(x)})}):T.createElement("input",{name:u,type:"hidden",value:""});return T.createElement("div",null,m)}else{var v=d[0]?this.getOptionValue(d[0]):"";return T.createElement("input",{name:u,type:"hidden",value:v})}}},{key:"renderLiveRegion",value:function(){var i=this.commonProps,o=this.state,a=o.ariaSelection,l=o.focusedOption,s=o.focusedValue,u=o.isFocused,c=o.selectValue,d=this.getFocusableOptions();return T.createElement(i6,Y({},i,{id:this.getElementId("live-region"),ariaSelection:a,focusedOption:l,focusedValue:s,isFocused:u,selectValue:c,focusableOptions:d,isAppleDevice:this.state.isAppleDevice}))}},{key:"render",value:function(){var i=this.getComponents(),o=i.Control,a=i.IndicatorsContainer,l=i.SelectContainer,s=i.ValueContainer,u=this.props,c=u.className,d=u.id,g=u.isDisabled,m=u.menuIsOpen,v=this.state.isFocused,x=this.commonProps=this.getCommonProps();return T.createElement(l,Y({},x,{className:c,innerProps:{id:d,onKeyDown:this.onKeyDown},isDisabled:g,isFocused:v}),this.renderLiveRegion(),T.createElement(o,Y({},x,{innerRef:this.getControlRef,innerProps:{onMouseDown:this.onControlMouseDown,onTouchEnd:this.onControlTouchEnd},isDisabled:g,isFocused:v,menuIsOpen:m}),T.createElement(s,Y({},x,{isDisabled:g}),this.renderPlaceholderOrValue(),this.renderInput()),T.createElement(a,Y({},x,{isDisabled:g}),this.renderClearIndicator(),this.renderLoadingIndicator(),this.renderIndicatorSeparator(),this.renderDropdownIndicator())),this.renderMenu(),this.renderFormField())}}],[{key:"getDerivedStateFromProps",value:function(i,o){var a=o.prevProps,l=o.clearFocusValueOnUpdate,s=o.inputIsHiddenAfterUpdate,u=o.ariaSelection,c=o.isFocused,d=o.prevWasFocused,g=o.instancePrefix,m=i.options,v=i.value,x=i.menuIsOpen,w=i.inputValue,f=i.isMulti,p=u0(v),y={};if(a&&(v!==a.value||m!==a.options||x!==a.menuIsOpen||w!==a.inputValue)){var b=x?R6(i,p):[],E=x?C0(ps(i,p),"".concat(g,"-option")):[],k=l?A6(o,p):null,_=L6(o,b),S=$c(E,_);y={selectValue:p,focusedOption:_,focusedOptionId:S,focusableOptionsWithIds:E,focusedValue:k,clearFocusValueOnUpdate:!1}}var M=s!=null&&i!==a?{inputIsHidden:s,inputIsHiddenAfterUpdate:void 0}:{},j=u,I=c&&d;return c&&!I&&(j={value:za(f,p,p[0]||null),options:p,action:"initial-input-focus"},I=!d),(u==null?void 0:u.action)==="initial-input-focus"&&(j=null),G(G(G({},y),M),{},{prevProps:i,ariaSelection:j,prevWasFocused:I})}}]),n}(T.Component);Pw.defaultProps=D6;var z6=T.forwardRef(function(e,t){var n=e$(e);return T.createElement(Pw,Y({ref:t},n))}),pl=z6;const N6=C.div`
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
`,B6=C.label`
  font-size: 14px;
  color: #666;
  margin-bottom: 5px;
`,V6=({cityOptions:e,selectedCity:t,onChange:n,onInputChange:r})=>h.jsxs(N6,{children:[h.jsx(B6,{children:"Місто"}),h.jsx(pl,{options:e,onInputChange:r,onChange:n,placeholder:"Почніть вводити місто...",value:t,noOptionsMessage:()=>"Введіть назву міста"})]}),H6=C.div`
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
`,U6=C.label`
  font-size: 14px;
  color: #666;
  margin-bottom: 5px;
`,W6=({options:e=[],value:t,onChange:n,selectedCity:r})=>h.jsxs(H6,{children:[h.jsx(U6,{children:"Спосіб доставки"}),h.jsx(pl,{options:e,placeholder:"Оберіть спосіб доставки...",isDisabled:!r,value:e.find(i=>i.value===t)||null,onChange:i=>n(i.value)})]}),Dc=C.div`
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
`,Rc=C.label`
  font-size: 14px;
  color: #666;
  margin-bottom: 5px;
`,G6=({deliveryMethod:e,officeOptions:t,ukrOfficeOptions:n,selectedOffice:r,selectedUkrOffice:i,setSelectedOffice:o,setSelectedUkrOffice:a})=>e==="nova"?h.jsxs(Dc,{children:[h.jsx(Rc,{children:"Відділення Нової пошти"}),h.jsx(pl,{options:t,onChange:l=>o(l),value:r,placeholder:"Оберіть відділення..."})]}):e==="ukr"?h.jsxs(Dc,{children:[h.jsx(Rc,{children:"Відділення Укрпошти"}),h.jsx(pl,{options:n,onChange:l=>a(l),value:i,placeholder:"Оберіть відділення..."})]}):e==="pickup"?h.jsxs(Dc,{children:[h.jsx(Rc,{children:"Самовивіз"}),h.jsxs("div",{style:{backgroundColor:"#f9f9f9",padding:"10px",borderRadius:"6px",border:"1px solid #ddd",fontSize:"14px",color:"#333",lineHeight:"1.4"},children:[h.jsx("p",{children:"Ви обрали самовивіз."}),h.jsx("p",{children:"Адреса магазину: вул. Казармена 6Г, Київ"}),h.jsx("p",{children:"Графік роботи: Вт, Ср, Пт, Сб, Нд — 11:00–20:00; вихідні: Пн, Чт"}),h.jsx("p",{children:"Телефон: +380 99 999 99"})]})]}):null,Y6=C.div`
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
`;const q6=C.button`
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
`,X6=C.ul`
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
`,K6=C.li`
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
`,Q6=C.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 6px;
  border: 1px solid #eee;
  background-color: #f9f9f9;
`,Z6=C.div`
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
`,J6=({cartItems:e,totalAmount:t,totalQuantity:n,isFormValid:r,handleSubmit:i})=>h.jsxs(Y6,{children:[h.jsx("h3",{children:"Ваше замовлення"}),h.jsx(X6,{children:e.map(o=>{var a;return h.jsxs(K6,{children:[h.jsx(Q6,{src:((a=o.image)==null?void 0:a[0])||Mn,alt:o.name}),h.jsxs(Z6,{children:[h.jsx("p",{className:"item-name",children:o.name}),h.jsxs("p",{className:"item-details",children:[o.quantity," шт. × ",o.price," грн"]})]}),h.jsxs("span",{className:"item-total",children:[o.price*o.quantity," грн"]})]},o.id)})}),h.jsxs("div",{className:"summary-row",children:[h.jsxs("span",{children:["Товари (",n,")"]}),h.jsxs("span",{children:[t," грн"]})]}),h.jsxs("div",{className:"summary-row",children:[h.jsx("span",{children:"Доставка"}),h.jsx("span",{children:"За тарифами перевізника"})]}),h.jsx("hr",{}),h.jsxs("div",{className:"total",children:[h.jsx("span",{children:"Всього до сплати:"}),h.jsxs("span",{children:[t," грн"]})]}),h.jsx(q6,{type:"submit",disabled:!r,onClick:i,style:{opacity:r?1:.5,cursor:r?"pointer":"not-allowed"},children:"Підтвердити замовлення"}),!r&&h.jsx("p",{style:{color:"#888",fontSize:"12px",marginTop:"10px",textAlign:"center"},children:"Заповніть всі поля правильно, щоб продовжити"})]});var jw={exports:{}};function eR(e){return e&&typeof e=="object"&&"default"in e?e.default:e}var Ac=eR(T),tR=Cp;function nR(e,t){for(var n=Object.getOwnPropertyNames(t),r=0;r<n.length;r++){var i=n[r],o=Object.getOwnPropertyDescriptor(t,i);o&&o.configurable&&e[i]===void 0&&Object.defineProperty(e,i,o)}return e}function Cf(){return(Cf=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function rR(e,t){e.prototype=Object.create(t.prototype),nR(e.prototype.constructor=e,t)}function iR(e,t){if(e==null)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],0<=t.indexOf(n)||(i[n]=e[n]);return i}function zr(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var oR=function(e,t,n,r,i,o,a,l){if(!e){var s;if(t===void 0)s=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var u=[n,r,i,o,a,l],c=0;(s=new Error(t.replace(/%s/g,function(){return u[c++]}))).name="Invariant Violation"}throw s.framesToPop=1,s}},k0=oR;function T0(e,t,n){if("selectionStart"in e&&"selectionEnd"in e)e.selectionStart=t,e.selectionEnd=n;else{var r=e.createTextRange();r.collapse(!0),r.moveStart("character",t),r.moveEnd("character",n-t),r.select()}}function aR(e){var t=0,n=0;if("selectionStart"in e&&"selectionEnd"in e)t=e.selectionStart,n=e.selectionEnd;else{var r=document.selection.createRange();r.parentElement()===e&&(t=-r.moveStart("character",-e.value.length),n=-r.moveEnd("character",-e.value.length))}return{start:t,end:n,length:n-t}}var sR={9:"[0-9]",a:"[A-Za-z]","*":"[A-Za-z0-9]"},lR="_";function O0(e,t,n){var r="",i="",o=null,a=[];if(t===void 0&&(t=lR),n==null&&(n=sR),!e||typeof e!="string")return{maskChar:t,formatChars:n,mask:null,prefix:null,lastEditablePosition:null,permanents:[]};var l=!1;return e.split("").forEach(function(s){l=!l&&s==="\\"||(l||!n[s]?(a.push(r.length),r.length===a.length-1&&(i+=s)):o=r.length+1,r+=s,!1)}),{maskChar:t,formatChars:n,prefix:i,mask:r,lastEditablePosition:o,permanents:a}}function Ct(e,t){return e.permanents.indexOf(t)!==-1}function Cu(e,t,n){var r=e.mask,i=e.formatChars;if(!n)return!1;if(Ct(e,t))return r[t]===n;var o=i[r[t]];return new RegExp(o).test(n)}function P0(e,t){return t.split("").every(function(n,r){return Ct(e,r)||!Cu(e,r,n)})}function no(e,t){var n=e.maskChar,r=e.prefix;if(!n){for(;t.length>r.length&&Ct(e,t.length-1);)t=t.slice(0,t.length-1);return t.length}for(var i=r.length,o=t.length;o>=r.length;o--){var a=t[o];if(!Ct(e,o)&&Cu(e,o,a)){i=o+1;break}}return i}function Mw(e,t){return no(e,t)===e.mask.length}function yn(e,t){var n=e.maskChar,r=e.mask,i=e.prefix;if(!n){for((t=Ef(e,"",t,0)).length<i.length&&(t=i);t.length<r.length&&Ct(e,t.length);)t+=r[t.length];return t}if(t)return Ef(e,yn(e,""),t,0);for(var o=0;o<r.length;o++)Ct(e,o)?t+=r[o]:t+=n;return t}function uR(e,t,n,r){var i=n+r,o=e.maskChar,a=e.mask,l=e.prefix,s=t.split("");if(o)return s.map(function(c,d){return d<n||i<=d?c:Ct(e,d)?a[d]:o}).join("");for(var u=i;u<s.length;u++)Ct(e,u)&&(s[u]="");return n=Math.max(l.length,n),s.splice(n,i-n),t=s.join(""),yn(e,t)}function Ef(e,t,n,r){var i=e.mask,o=e.maskChar,a=e.prefix,l=n.split(""),s=Mw(e,t);return!o&&r>t.length&&(t+=i.slice(t.length,r)),l.every(function(u){for(;m=u,Ct(e,g=r)&&m!==i[g];){if(r>=t.length&&(t+=i[r]),c=u,d=r,o&&Ct(e,d)&&c===o)return!0;if(++r>=i.length)return!1}var c,d,g,m;return!Cu(e,r,u)&&u!==o||(r<t.length?t=o||s||r<a.length?t.slice(0,r)+u+t.slice(r+1):(t=t.slice(0,r)+u+t.slice(r),yn(e,t)):o||(t+=u),++r<i.length)}),t}function cR(e,t,n,r){var i=e.mask,o=e.maskChar,a=n.split(""),l=r;return a.every(function(s){for(;c=s,Ct(e,u=r)&&c!==i[u];)if(++r>=i.length)return!1;var u,c;return(Cu(e,r,s)||s===o)&&r++,r<i.length}),r-l}function dR(e,t){for(var n=t;0<=n;--n)if(!Ct(e,n))return n;return null}function go(e,t){for(var n=e.mask,r=t;r<n.length;++r)if(!Ct(e,r))return r;return null}function Lc(e){return e||e===0?e+"":""}function fR(e,t,n,r,i){var o=e.mask,a=e.prefix,l=e.lastEditablePosition,s=t,u="",c=0,d=0,g=Math.min(i.start,n.start);return n.end>i.start?d=(c=cR(e,r,u=s.slice(i.start,n.end),g))?i.length:0:s.length<r.length&&(d=r.length-s.length),s=r,d&&(d===1&&!i.length&&(g=i.start===n.start?go(e,n.start):dR(e,n.start)),s=uR(e,s,g,d)),s=Ef(e,s,u,g),(g+=c)>=o.length?g=o.length:g<a.length&&!c?g=a.length:g>=a.length&&g<l&&c&&(g=go(e,g)),u||(u=null),{value:s=yn(e,s),enteredString:u,selection:{start:g,end:g}}}function pR(){var e=new RegExp("windows","i"),t=new RegExp("phone","i"),n=navigator.userAgent;return e.test(n)&&t.test(n)}function ot(e){return typeof e=="function"}function hR(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame}function Iw(){return window.cancelAnimationFrame||window.webkitCancelRequestAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame}function j0(e){return(Iw()?hR():function(){return setTimeout(e,1e3/60)})(e)}function Fc(e){(Iw()||clearTimeout)(e)}var mR=function(e){function t(r){var i=e.call(this,r)||this;i.focused=!1,i.mounted=!1,i.previousSelection=null,i.selectionDeferId=null,i.saveSelectionLoopDeferId=null,i.saveSelectionLoop=function(){i.previousSelection=i.getSelection(),i.saveSelectionLoopDeferId=j0(i.saveSelectionLoop)},i.runSaveSelectionLoop=function(){i.saveSelectionLoopDeferId===null&&i.saveSelectionLoop()},i.stopSaveSelectionLoop=function(){i.saveSelectionLoopDeferId!==null&&(Fc(i.saveSelectionLoopDeferId),i.saveSelectionLoopDeferId=null,i.previousSelection=null)},i.getInputDOMNode=function(){if(!i.mounted)return null;var v=tR.findDOMNode(zr(zr(i))),x=typeof window<"u"&&v instanceof window.Element;if(v&&!x)return null;if(v.nodeName!=="INPUT"&&(v=v.querySelector("input")),!v)throw new Error("react-input-mask: inputComponent doesn't contain input node");return v},i.getInputValue=function(){var v=i.getInputDOMNode();return v?v.value:null},i.setInputValue=function(v){var x=i.getInputDOMNode();x&&(i.value=v,x.value=v)},i.setCursorToEnd=function(){var v=no(i.maskOptions,i.value),x=go(i.maskOptions,v);x!==null&&i.setCursorPosition(x)},i.setSelection=function(v,x,w){w===void 0&&(w={});var f=i.getInputDOMNode(),p=i.isFocused();f&&p&&(w.deferred||T0(f,v,x),i.selectionDeferId!==null&&Fc(i.selectionDeferId),i.selectionDeferId=j0(function(){i.selectionDeferId=null,T0(f,v,x)}),i.previousSelection={start:v,end:x,length:Math.abs(x-v)})},i.getSelection=function(){return aR(i.getInputDOMNode())},i.getCursorPosition=function(){return i.getSelection().start},i.setCursorPosition=function(v){i.setSelection(v,v)},i.isFocused=function(){return i.focused},i.getBeforeMaskedValueChangeConfig=function(){var v=i.maskOptions,x=v.mask,w=v.maskChar,f=v.permanents,p=v.formatChars;return{mask:x,maskChar:w,permanents:f,alwaysShowMask:!!i.props.alwaysShowMask,formatChars:p}},i.isInputAutofilled=function(v,x,w,f){var p=i.getInputDOMNode();try{if(p.matches(":-webkit-autofill"))return!0}catch{}return!i.focused||f.end<w.length&&x.end===v.length},i.onChange=function(v){var x=zr(zr(i)).beforePasteState,w=zr(zr(i)).previousSelection,f=i.props.beforeMaskedValueChange,p=i.getInputValue(),y=i.value,b=i.getSelection();i.isInputAutofilled(p,b,y,w)&&(y=yn(i.maskOptions,""),w={start:0,end:0,length:0}),x&&(w=x.selection,y=x.value,b={start:w.start+p.length,end:w.start+p.length,length:0},p=y.slice(0,w.start)+p+y.slice(w.end),i.beforePasteState=null);var E=fR(i.maskOptions,p,b,y,w),k=E.enteredString,_=E.selection,S=E.value;if(ot(f)){var M=f({value:S,selection:_},{value:y,selection:w},k,i.getBeforeMaskedValueChangeConfig());S=M.value,_=M.selection}i.setInputValue(S),ot(i.props.onChange)&&i.props.onChange(v),i.isWindowsPhoneBrowser?i.setSelection(_.start,_.end,{deferred:!0}):i.setSelection(_.start,_.end)},i.onFocus=function(v){var x=i.props.beforeMaskedValueChange,w=i.maskOptions,f=w.mask,p=w.prefix;if(i.focused=!0,i.mounted=!0,f){if(i.value)no(i.maskOptions,i.value)<i.maskOptions.mask.length&&i.setCursorToEnd();else{var y=yn(i.maskOptions,p),b=yn(i.maskOptions,y),E=no(i.maskOptions,b),k=go(i.maskOptions,E),_={start:k,end:k};if(ot(x)){var S=x({value:b,selection:_},{value:i.value,selection:null},null,i.getBeforeMaskedValueChangeConfig());b=S.value,_=S.selection}var M=b!==i.getInputValue();M&&i.setInputValue(b),M&&ot(i.props.onChange)&&i.props.onChange(v),i.setSelection(_.start,_.end)}i.runSaveSelectionLoop()}ot(i.props.onFocus)&&i.props.onFocus(v)},i.onBlur=function(v){var x=i.props.beforeMaskedValueChange,w=i.maskOptions.mask;if(i.stopSaveSelectionLoop(),i.focused=!1,w&&!i.props.alwaysShowMask&&P0(i.maskOptions,i.value)){var f="";ot(x)&&(f=x({value:f,selection:null},{value:i.value,selection:i.previousSelection},null,i.getBeforeMaskedValueChangeConfig()).value);var p=f!==i.getInputValue();p&&i.setInputValue(f),p&&ot(i.props.onChange)&&i.props.onChange(v)}ot(i.props.onBlur)&&i.props.onBlur(v)},i.onMouseDown=function(v){if(!i.focused&&document.addEventListener){i.mouseDownX=v.clientX,i.mouseDownY=v.clientY,i.mouseDownTime=new Date().getTime();var x=function w(f){if(document.removeEventListener("mouseup",w),i.focused){var p=Math.abs(f.clientX-i.mouseDownX),y=Math.abs(f.clientY-i.mouseDownY),b=Math.max(p,y),E=new Date().getTime()-i.mouseDownTime;(b<=10&&E<=200||b<=5&&E<=300)&&i.setCursorToEnd()}};document.addEventListener("mouseup",x)}ot(i.props.onMouseDown)&&i.props.onMouseDown(v)},i.onPaste=function(v){ot(i.props.onPaste)&&i.props.onPaste(v),v.defaultPrevented||(i.beforePasteState={value:i.getInputValue(),selection:i.getSelection()},i.setInputValue(""))},i.handleRef=function(v){i.props.children==null&&ot(i.props.inputRef)&&i.props.inputRef(v)};var o=r.mask,a=r.maskChar,l=r.formatChars,s=r.alwaysShowMask,u=r.beforeMaskedValueChange,c=r.defaultValue,d=r.value;i.maskOptions=O0(o,a,l),c==null&&(c=""),d==null&&(d=c);var g=Lc(d);if(i.maskOptions.mask&&(s||g)&&(g=yn(i.maskOptions,g),ot(u))){var m=r.value;r.value==null&&(m=c),g=u({value:g,selection:null},{value:m=Lc(m),selection:null},null,i.getBeforeMaskedValueChangeConfig()).value}return i.value=g,i}rR(t,e);var n=t.prototype;return n.componentDidMount=function(){this.mounted=!0,this.getInputDOMNode()&&(this.isWindowsPhoneBrowser=pR(),this.maskOptions.mask&&this.getInputValue()!==this.value&&this.setInputValue(this.value))},n.componentDidUpdate=function(){var r=this.previousSelection,i=this.props,o=i.beforeMaskedValueChange,a=i.alwaysShowMask,l=i.mask,s=i.maskChar,u=i.formatChars,c=this.maskOptions,d=a||this.isFocused(),g=this.props.value!=null,m=g?Lc(this.props.value):this.value,v=r?r.start:null;if(this.maskOptions=O0(l,s,u),this.maskOptions.mask){!c.mask&&this.isFocused()&&this.runSaveSelectionLoop();var x=this.maskOptions.mask&&this.maskOptions.mask!==c.mask;if(c.mask||g||(m=this.getInputValue()),(x||this.maskOptions.mask&&(m||d))&&(m=yn(this.maskOptions,m)),x){var w=no(this.maskOptions,m);(v===null||w<v)&&(v=Mw(this.maskOptions,m)?w:go(this.maskOptions,w))}!this.maskOptions.mask||!P0(this.maskOptions,m)||d||g&&this.props.value||(m="");var f={start:v,end:v};if(ot(o)){var p=o({value:m,selection:f},{value:this.value,selection:this.previousSelection},null,this.getBeforeMaskedValueChangeConfig());m=p.value,f=p.selection}this.value=m;var y=this.getInputValue()!==this.value;y?(this.setInputValue(this.value),this.forceUpdate()):x&&this.forceUpdate();var b=!1;f.start!=null&&f.end!=null&&(b=!r||r.start!==f.start||r.end!==f.end),(b||y)&&this.setSelection(f.start,f.end)}else c.mask&&(this.stopSaveSelectionLoop(),this.forceUpdate())},n.componentWillUnmount=function(){this.mounted=!1,this.selectionDeferId!==null&&Fc(this.selectionDeferId),this.stopSaveSelectionLoop()},n.render=function(){var r,i=this.props,o=(i.mask,i.alwaysShowMask,i.maskChar,i.formatChars,i.inputRef,i.beforeMaskedValueChange,i.children),a=iR(i,["mask","alwaysShowMask","maskChar","formatChars","inputRef","beforeMaskedValueChange","children"]);if(o){ot(o)||k0(!1);var l=["onChange","onPaste","onMouseDown","onFocus","onBlur","value","disabled","readOnly"],s=Cf({},a);l.forEach(function(c){return delete s[c]}),r=o(s),l.filter(function(c){return r.props[c]!=null&&r.props[c]!==a[c]}).length&&k0(!1)}else r=Ac.createElement("input",Cf({ref:this.handleRef},a));var u={onFocus:this.onFocus,onBlur:this.onBlur};return this.maskOptions.mask&&(a.disabled||a.readOnly||(u.onChange=this.onChange,u.onPaste=this.onPaste,u.onMouseDown=this.onMouseDown),a.value!=null&&(u.value=this.value)),r=Ac.cloneElement(r,u)},t}(Ac.Component),gR=mR;jw.exports=gR;var vR=jw.exports;const yR=N0(vR);C.div`
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
`;const zc=C.div`
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
`,Nc=C.label`
  font-size: 14px;
  color: #666;
  margin-bottom: 5px;
`,Bc=C.input`
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
`;const Vc=C.span`
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
`;const xR=({formData:e,setFormData:t,errors:n})=>{const r=i=>{const{name:o,value:a}=i.target;o==="phone"&&!a.startsWith("+38 (0")||t(l=>({...l,[o]:a}))};return h.jsxs(h.Fragment,{children:[h.jsx("h3",{children:"Контактні дані"}),h.jsxs(zc,{children:[h.jsx(Nc,{children:"Прізвище та ім’я"}),h.jsx(Bc,{type:"text",name:"fullName",value:e.fullName,onChange:r,placeholder:"Прізвище Ім'я",autoComplete:"name"}),n.fullName&&h.jsx(Vc,{children:n.fullName})]}),h.jsxs(zc,{children:[h.jsx(Nc,{children:"Номер телефону"}),h.jsx(yR,{mask:"+38 (099) 999-99-99",maskChar:"_",name:"phone",autoComplete:"tel",value:e.phone,onChange:r,children:i=>h.jsx(Bc,{...i,type:"tel"})}),n.phone&&h.jsx(Vc,{children:n.phone})]}),h.jsxs(zc,{children:[h.jsx(Nc,{children:"E-mail"}),h.jsx(Bc,{type:"email",name:"email",value:e.email,onChange:r,placeholder:"email@example.com",autoComplete:"email"}),n.email&&h.jsx(Vc,{children:n.email})]})]})},bR=C.div`
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
`;const wR=C.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  text-align: left;

  @media screen and (min-width: 1200px) {
    flex-direction: row;
    align-items: flex-start;
  }
`,SR=C.div`
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
`;const _R=[{city:"Київ",address:"вул. Хрещатик, 1"},{city:"Київ",address:"вул. Січових Стрільців, 10"},{city:"Львів",address:"просп. Свободи, 5"}],M0={}.VITE_NP_API_KEY,I0="https://api.novaposhta.ua/v2.0/json/",CR=()=>{const e=Sn(R=>R.cart.items),t=gl(),[n,r]=T.useState({fullName:"",phone:"+38 (0",email:"",city:"",postOffice:""}),[i,o]=T.useState(""),[a,l]=T.useState(null),[s,u]=T.useState(null),[c,d]=T.useState(null),[g,m]=T.useState(null),[v,x]=T.useState([]),[w,f]=T.useState([]),[p,y]=T.useState([]),[b,E]=T.useState(""),k=e.reduce((R,F)=>R+F.price*F.quantity,0),_=e.reduce((R,F)=>R+F.quantity,0),S=()=>{const R=new Date().getFullYear().toString().slice(-2),F=Date.now().toString().slice(-4),L=Math.floor(100+Math.random()*900);return`${R}${F}${L}`};T.useEffect(()=>{if(i.length<2)return;const R=setTimeout(async()=>{const L=await(await fetch(I0,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({apiKey:M0,modelName:"Address",calledMethod:"getCities",methodProperties:{FindByString:i}})})).json();x(L.data.map(O=>({value:O.Ref,label:O.Description})))},500);return()=>clearTimeout(R)},[i]),T.useEffect(()=>{if(!a||s!=="nova")return;(async()=>{const L=await(await fetch(I0,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({apiKey:M0,modelName:"AddressGeneral",calledMethod:"getWarehouses",methodProperties:{CityRef:a.value}})})).json();f(L.data.map(O=>({value:O.Ref,label:O.Description})))})()},[a,s]),T.useEffect(()=>{if(s!=="ukr"||!a)return;const R=_R.filter(F=>F.city===a.label).filter(F=>F.address.toLowerCase().includes(b.toLowerCase())).slice(0,20);y(R.map((F,L)=>({value:L,label:F.address})))},[a,s,b]);const M=R=>{l(R),r(F=>({...F,city:(R==null?void 0:R.label)||"",postOffice:""})),u(null),d(null),m(null)},j=()=>{const R={};return n.fullName.trim().split(" ").length<2&&(R.fullName="Введіть прізвище та ім'я"),/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(n.email)||(R.email="Некоректний email"),n.phone.replace(/\D/g,"").length<12&&(R.phone="Номер неповний"),a||(R.city=!0),s==="nova"&&!c&&(R.postOffice=!0),s==="ukr"&&!g&&(R.postOffice=!0),s||(R.delivery=!0),R},I=T.useMemo(j,[n,s,c,g,a]),P=Object.keys(I).length===0&&e.length>0,$=R=>{R.preventDefault();const F={...n,city:a.label,deliveryMethod:s==="nova"?"Нова Пошта":s==="ukr"?"УкрПошта":"Самовивіз",address:s==="nova"?c==null?void 0:c.label:s==="ukr"?g==null?void 0:g.label:"Самовивіз",items:e,total:k,orderNumer:S()};t("/order-confirmation",{state:{order:F}}),console.log("Замовлення готове до відправки:",F)},A=T.useMemo(()=>{const R=[{value:"nova",label:"Нова пошта"},{value:"ukr",label:"Укрпошта"}];return(a==null?void 0:a.label)==="Київ"&&R.push({value:"pickup",label:"Самовивіз"}),R},[a]);return h.jsx(bR,{children:h.jsxs(wR,{children:[h.jsxs(SR,{children:[h.jsx(xR,{formData:n,setFormData:r,errors:I}),h.jsx(V6,{cityOptions:v,selectedCity:a,onChange:M,onInputChange:o}),h.jsx(W6,{options:A,value:s,onChange:u,selectedCity:a}),h.jsx(G6,{deliveryMethod:s,officeOptions:w,ukrOfficeOptions:p,selectedOffice:c,selectedUkrOffice:g,setSelectedOffice:d,setSelectedUkrOffice:m,setUkrSearch:E})]}),h.jsx(J6,{cartItems:e,totalAmount:k,totalQuantity:_,isFormValid:P,handleSubmit:$})]})})},$0=C.div`
font-family: var(--main-font);
  max-width: 800px;
  margin: 40px auto;
  padding: 40px 20px;
  background: #ffffff;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  text-align: center;
  font-family: 'Inter', sans-serif;
`,ER=C.h1`
font-family: var(--main-font);
  color: var(--orange-color); 
  font-size: 28px;
  font-weight: 800;
  margin-bottom: 16px;
`,Nr=C.p`
font-family: var(--main-font);
  font-size: 16px;
  color: #555;
  line-height: 1.6;
  margin-bottom: 8px;

  strong {
    color: #1a1a1a;
  }
`,kR=C.div`
font-family: var(--main-font);
  background: #f8f9fa;
  border-radius: 12px;
  padding: 24px;
  margin: 30px 0;
  text-align: left;
  border: 1px solid #edf2f7;
`,D0=C.h3`
  font-size: 18px;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 16px;
  border-bottom: 2px solid #e2e8f0;
  padding-bottom: 8px;
`,TR=C.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 20px;
`,OR=C.li`
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
`,PR=C.div`
  background: #fff4e5; 
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 30px;
  border: 1px solid #ffe3c1;
`,jR=C.div`
  display: flex;
  gap: 15px;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 20px;
`,Na=C.button`
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
`,MR=()=>{var r;const e=gl(),n=(r=Ci().state)==null?void 0:r.order;return n?h.jsxs($0,{children:[h.jsx(ER,{children:"Дякуємо за ваше замовлення!"}),h.jsxs(Nr,{children:["Ваше замовлення ",h.jsxs("strong",{children:["№",n.orderNumer]})," успішно прийняте."]}),h.jsx(Nr,{children:"Ми зв’яжемось з Вами в найближчий час"}),h.jsxs(kR,{children:[h.jsx(D0,{children:"Деталі замовлення:"}),h.jsx(TR,{children:n.items.map(i=>h.jsxs(OR,{children:[h.jsxs("span",{className:"item-info",children:[i.name," (x",i.quantity,")"]}),h.jsxs("span",{className:"item-price",children:[i.price*i.quantity," грн"]})]},i.id))}),h.jsxs(Nr,{children:[h.jsx("strong",{children:"Спосіб доставки:"})," ",n.deliveryMethod]}),h.jsxs(Nr,{children:[h.jsx("strong",{children:"Адреса отримання:"})," ",n.city,", ",n.address]})]}),n.paymentMethod==="online"&&h.jsxs(PR,{children:[h.jsx(D0,{children:"Оплата"}),h.jsx(Nr,{style:{marginBottom:"15px"},children:"Натисніть кнопку нижче для миттєвої оплати:"}),h.jsx(Na,{primary:!0,onClick:()=>window.location.href=n.paymentLink,children:"Оплатити зараз"})]}),h.jsxs(jR,{children:[h.jsx(Na,{primary:!0,onClick:()=>e("/"),children:"Повернутися на головну"}),h.jsx(Na,{onClick:()=>e("/catalog"),children:"Продовжити покупки"})]})]}):h.jsxs($0,{children:[h.jsx(Nr,{children:"Завантаження даних замовлення..."}),h.jsx(Na,{onClick:()=>e("/"),children:"На головну"})]})},IR=C.section`
  background-color: var(--second-background);
`,$R=C.div`
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
    max-width: 1440px;
  }
`,DR=C.section`
  padding: 40px 0;
  background-color: #f9f9f980;
  border-radius: 12px;
  margin-bottom: 30px;
`,RR=C.h1`
  font-family: var(--main-font);
  font-size: 28px;
  color: var(--black-color);
  margin-bottom: 10px;

  @media screen and (min-width: 768px) {
    font-size: 42px;
  }
`,AR=C.p`
  font-size: 16px;
  color: #666;
`,LR=C.section`
  margin-bottom: 50px;
`,FR=C.p`
  font-family: var(--main-font);
  font-size: 18px;
  line-height: 1.6;
  max-width: 800px;
  margin: 0 auto 40px;
  color: #444;
`,zR=C.section`
  margin-bottom: 60px;
`,NR=C.h2`
  margin-bottom: 30px;
`,BR=C.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
`,Ba=C.div`
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
`,VR=()=>h.jsxs(IR,{children:[h.jsxs($R,{children:[h.jsxs(DR,{children:[h.jsx(RR,{children:"Про Дідів Хлів"}),h.jsx(AR,{children:"Даємо друге життя якісним велозапчастинам"})]}),h.jsxs(LR,{children:[h.jsx(FR,{children:"Бізнес створений з переконанням, що обладнання може бути доступним. Ми спеціалізуємося на розборі цікавих і унікальних велосипедів, усі запчастини перевірені нами. Стараємося пропонувати тільки найкраще від Shimano, Sram, Campagnolo та інших світових брендів."}),h.jsx(Xb,{})]}),h.jsxs(zR,{children:[h.jsx(NR,{children:"Наша майстерня"}),h.jsxs(BR,{children:[h.jsx(Ba,{color:"#e2e2e2",children:"Фото майстерні"}),h.jsx(Ba,{color:"#d1d1d1",children:"Процес діагностики"}),h.jsx(Ba,{color:"#bcbcbc",children:"Склад запчастин"}),h.jsx(Ba,{color:"#a8a8a8",children:"Готові велосипеди"})]})]})]})," "]}),HR=()=>{const{pathname:e}=Ci();return T.useEffect(()=>{window.scrollTo(0,0)},[e]),null},UR=C.section`
  background-color:  var(--second-background);
  padding: 40px 0;
  min-height: 80vh;
`,WR=C.div`
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
    max-width: 1440px;
  }
`,GR=C.h1`
  font-family: var(--main-font); 
  font-size: 32px;
  color: var(--black-color);
  margin-bottom: 10px;
  text-transform: uppercase;
`,YR=C.p`
  color: #585555;
  margin-bottom: 40px;
`,qR=C.div`
  display: grid;
  gap: 40px;
  text-align: left;

  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    align-items: start;
  }
`,XR=C.div`
height: 427px;
  display: grid;
  gap: 25px;
    background: #ffffff;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
`,Va=C.div`
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
`,KR=C.div`
  background: #ffffff;
  padding: 40px 30px;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%; 
`,QR=C.h2`
  margin-bottom: 15px;
  color: var(--brown-color);
  font-size: 24px;
  font-family: var(--main-font);
`,ZR=C.p`
  color: #666;
  font-size: 14px;
  line-height: 1.6;
  margin-bottom: 30px;
`,JR=C.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
  
  @media screen and (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`,R0=C.a`
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
`;const eA=C.div`
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

 
`,tA=()=>h.jsx(UR,{children:h.jsxs(WR,{children:[h.jsx(GR,{children:"Контакти"}),h.jsx(YR,{children:"Зв’яжіться з нами для консультації або замовлення"}),h.jsxs(qR,{children:[h.jsxs(XR,{children:[h.jsxs(Va,{children:[h.jsx("h3",{children:"Адреса"}),h.jsx("p",{children:"вул. Казармена 6Г, Київ, Україна"}),h.jsx("a",{style:{color:"black",fontWeight:"500",fontSize:"0.9rem",display:"inline-block",marginTop:"5px",cursor:"pointer"},href:"https://www.google.com/maps/search/?api=1&query=вул.+Казармена+6Г,+Київ,+Україна",target:"_blank",rel:"noopener noreferrer",children:"📍 Показати на карті"})]}),h.jsxs(Va,{children:[h.jsx("h3",{children:"Телефон"}),h.jsx("p",{children:"+38 (097) 123-45-67"})]}),h.jsxs(Va,{children:[h.jsx("h3",{children:"Email"}),h.jsx("p",{children:"didivhliv.com"})]}),h.jsxs(Va,{children:[h.jsx("h3",{children:"Графік роботи"}),h.jsx("p",{children:"З 11:00 - 20:00"}),h.jsx("p",{children:"Вихідні: Пн, Чт"})]})]}),h.jsxs(KR,{children:[h.jsx(QR,{children:"Ми в соцмережах"}),h.jsx(ZR,{children:"Слідкуйте за нашими новинами, новими надходженнями та крутими вело-поїздками у зручному для вас форматі."}),h.jsxs(JR,{children:[h.jsxs(R0,{href:"https://instagram.com",target:"_blank",rel:"noreferrer",children:[h.jsx("svg",{width:"20px",children:h.jsx("use",{href:`${qt}#icon-instagram`})}),h.jsx("span",{children:"Instagram"})]}),h.jsxs(R0,{href:"https://t.me",target:"_blank",rel:"noreferrer",children:[h.jsx("svg",{width:"20px",children:h.jsx("use",{href:`${qt}#icon-telegram`})}),h.jsx("span",{children:"Telegram"})]})]}),h.jsx(eA,{children:"Приєднуйся до спільноти!"})]})]})]})}),nA="";function rA(){return console.log(nA),h.jsxs(oO,{children:[h.jsx(NP,{}),h.jsx(HR,{}),h.jsx(T.Suspense,{fallback:h.jsx(zP,{}),children:h.jsx(JS,{children:h.jsxs(at,{path:"/",element:h.jsx(Bk,{}),children:[h.jsx(at,{index:!0,element:h.jsx(_M,{})})," ",h.jsx(at,{path:"catalog",element:h.jsx(JT,{})}),h.jsx(at,{path:"/catalog/:category",element:h.jsx(SI,{})}),h.jsx(at,{path:"/product/:id",element:h.jsx(YI,{})}),h.jsx(at,{path:"cart",element:h.jsx(x5,{})}),h.jsx(at,{path:"favorite",element:h.jsx(B5,{})}),h.jsx(at,{path:"checkout",element:h.jsx(CR,{})}),h.jsx(at,{path:"/order-confirmation",element:h.jsx(MR,{})}),h.jsx(at,{path:"about",element:h.jsx(VR,{})}),h.jsx(at,{path:"contacts",element:h.jsx(tA,{})}),h.jsx(at,{path:"delivery",element:h.jsx(Y5,{})}),h.jsx(at,{path:"*",element:h.jsx(iO,{})})]})})})]})}var dh="persist:",$w="persist/FLUSH",fh="persist/REHYDRATE",Dw="persist/PAUSE",Rw="persist/PERSIST",Aw="persist/PURGE",Lw="persist/REGISTER",iA=-1;function hs(e){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?hs=function(n){return typeof n}:hs=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},hs(e)}function A0(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function oA(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?A0(n,!0).forEach(function(r){aA(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):A0(n).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function aA(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function sA(e,t,n,r){r.debug;var i=oA({},n);return e&&hs(e)==="object"&&Object.keys(e).forEach(function(o){o!=="_persist"&&t[o]===n[o]&&(i[o]=e[o])}),i}function lA(e){var t=e.blacklist||null,n=e.whitelist||null,r=e.transforms||[],i=e.throttle||0,o="".concat(e.keyPrefix!==void 0?e.keyPrefix:dh).concat(e.key),a=e.storage,l;e.serialize===!1?l=function(E){return E}:typeof e.serialize=="function"?l=e.serialize:l=uA;var s=e.writeFailHandler||null,u={},c={},d=[],g=null,m=null,v=function(E){Object.keys(E).forEach(function(k){f(k)&&u[k]!==E[k]&&d.indexOf(k)===-1&&d.push(k)}),Object.keys(u).forEach(function(k){E[k]===void 0&&f(k)&&d.indexOf(k)===-1&&u[k]!==void 0&&d.push(k)}),g===null&&(g=setInterval(x,i)),u=E};function x(){if(d.length===0){g&&clearInterval(g),g=null;return}var b=d.shift(),E=r.reduce(function(k,_){return _.in(k,b,u)},u[b]);if(E!==void 0)try{c[b]=l(E)}catch(k){console.error("redux-persist/createPersistoid: error serializing state",k)}else delete c[b];d.length===0&&w()}function w(){Object.keys(c).forEach(function(b){u[b]===void 0&&delete c[b]}),m=a.setItem(o,l(c)).catch(p)}function f(b){return!(n&&n.indexOf(b)===-1&&b!=="_persist"||t&&t.indexOf(b)!==-1)}function p(b){s&&s(b)}var y=function(){for(;d.length!==0;)x();return m||Promise.resolve()};return{update:v,flush:y}}function uA(e){return JSON.stringify(e)}function cA(e){var t=e.transforms||[],n="".concat(e.keyPrefix!==void 0?e.keyPrefix:dh).concat(e.key),r=e.storage;e.debug;var i;return e.deserialize===!1?i=function(a){return a}:typeof e.deserialize=="function"?i=e.deserialize:i=dA,r.getItem(n).then(function(o){if(o)try{var a={},l=i(o);return Object.keys(l).forEach(function(s){a[s]=t.reduceRight(function(u,c){return c.out(u,s,l)},i(l[s]))}),a}catch(s){throw s}else return})}function dA(e){return JSON.parse(e)}function fA(e){var t=e.storage,n="".concat(e.keyPrefix!==void 0?e.keyPrefix:dh).concat(e.key);return t.removeItem(n,pA)}function pA(e){}function L0(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function dn(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?L0(n,!0).forEach(function(r){hA(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):L0(n).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function hA(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function mA(e,t){if(e==null)return{};var n=gA(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function gA(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}var vA=5e3;function Fw(e,t){var n=e.version!==void 0?e.version:iA;e.debug;var r=e.stateReconciler===void 0?sA:e.stateReconciler,i=e.getStoredState||cA,o=e.timeout!==void 0?e.timeout:vA,a=null,l=!1,s=!0,u=function(d){return d._persist.rehydrated&&a&&!s&&a.update(d),d};return function(c,d){var g=c||{},m=g._persist,v=mA(g,["_persist"]),x=v;if(d.type===Rw){var w=!1,f=function(S,M){w||(d.rehydrate(e.key,S,M),w=!0)};if(o&&setTimeout(function(){!w&&f(void 0,new Error('redux-persist: persist timed out for persist key "'.concat(e.key,'"')))},o),s=!1,a||(a=lA(e)),m)return dn({},t(x,d),{_persist:m});if(typeof d.rehydrate!="function"||typeof d.register!="function")throw new Error("redux-persist: either rehydrate or register is not a function on the PERSIST action. This can happen if the action is being replayed. This is an unexplored use case, please open an issue and we will figure out a resolution.");return d.register(e.key),i(e).then(function(_){var S=e.migrate||function(M,j){return Promise.resolve(M)};S(_,n).then(function(M){f(M)},function(M){f(void 0,M)})},function(_){f(void 0,_)}),dn({},t(x,d),{_persist:{version:n,rehydrated:!1}})}else{if(d.type===Aw)return l=!0,d.result(fA(e)),dn({},t(x,d),{_persist:m});if(d.type===$w)return d.result(a&&a.flush()),dn({},t(x,d),{_persist:m});if(d.type===Dw)s=!0;else if(d.type===fh){if(l)return dn({},x,{_persist:dn({},m,{rehydrated:!0})});if(d.key===e.key){var p=t(x,d),y=d.payload,b=r!==!1&&y!==void 0?r(y,c,p,e):p,E=dn({},b,{_persist:dn({},m,{rehydrated:!0})});return u(E)}}}if(!m)return t(c,d);var k=t(x,d);return k===x?c:u(dn({},k,{_persist:m}))}}function F0(e){return bA(e)||xA(e)||yA()}function yA(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function xA(e){if(Symbol.iterator in Object(e)||Object.prototype.toString.call(e)==="[object Arguments]")return Array.from(e)}function bA(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}function z0(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function kf(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?z0(n,!0).forEach(function(r){wA(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):z0(n).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function wA(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var zw={registry:[],bootstrapped:!1},SA=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:zw,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case Lw:return kf({},t,{registry:[].concat(F0(t.registry),[n.key])});case fh:var r=t.registry.indexOf(n.key),i=F0(t.registry);return i.splice(r,1),kf({},t,{registry:i,bootstrapped:i.length===0});default:return t}};function _A(e,t,n){var r=n||!1,i=Jp(SA,zw,t&&t.enhancer?t.enhancer:void 0),o=function(u){i.dispatch({type:Lw,key:u})},a=function(u,c,d){var g={type:fh,payload:c,err:d,key:u};e.dispatch(g),i.dispatch(g),r&&l.getState().bootstrapped&&(r(),r=!1)},l=kf({},i,{purge:function(){var u=[];return e.dispatch({type:Aw,result:function(d){u.push(d)}}),Promise.all(u)},flush:function(){var u=[];return e.dispatch({type:$w,result:function(d){u.push(d)}}),Promise.all(u)},pause:function(){e.dispatch({type:Dw})},persist:function(){e.dispatch({type:Rw,register:o,rehydrate:a})}});return t&&t.manualPersist||l.persist(),l}var ph={},hh={};hh.__esModule=!0;hh.default=kA;function ms(e){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?ms=function(n){return typeof n}:ms=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},ms(e)}function Hc(){}var CA={getItem:Hc,setItem:Hc,removeItem:Hc};function EA(e){if((typeof self>"u"?"undefined":ms(self))!=="object"||!(e in self))return!1;try{var t=self[e],n="redux-persist ".concat(e," test");t.setItem(n,"test"),t.getItem(n),t.removeItem(n)}catch{return!1}return!0}function kA(e){var t="".concat(e,"Storage");return EA(t)?self[t]:CA}ph.__esModule=!0;ph.default=PA;var TA=OA(hh);function OA(e){return e&&e.__esModule?e:{default:e}}function PA(e){var t=(0,TA.default)(e);return{getItem:function(r){return new Promise(function(i,o){i(t.getItem(r))})},setItem:function(r,i){return new Promise(function(o,a){o(t.setItem(r,i))})},removeItem:function(r){return new Promise(function(i,o){i(t.removeItem(r))})}}}var mh=void 0,jA=MA(ph);function MA(e){return e&&e.__esModule?e:{default:e}}var IA=(0,jA.default)("local");mh=IA;const $A={key:"cart",storage:mh},DA={key:"favorites",storage:mh},RA=Fw($A,Fj),AA=Fw(DA,bI),Nw=wj({reducer:{cart:RA,favorites:AA},middleware:e=>e({serializableCheck:!1})});_A(Nw);qc.createRoot(document.getElementById("root")).render(h.jsx(ek,{store:Nw,children:h.jsx(U.StrictMode,{children:h.jsx(o2,{basename:"/Didiv/",children:h.jsx(rA,{})})})}));
